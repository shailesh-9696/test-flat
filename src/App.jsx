import { useState } from 'react'
import Sidebar from './components/Sidebar'
import AppointmentForm from './components/AppointmentForm'
import AppointmentDetails from './components/AppointmentDetails'
import ActionButtons from './components/ActionButtons'
import IconSidebar from './components/IconSidebar'

import './App.css'

const dummyPatients = [
  { id: 1, name: 'akshay pathav', phone: '8214959900', address: 'NA', location: 'NA', email: 'NA' },
  { id: 2, name: 'test devani', phone: '45343', address: 'NA', location: 'NA', email: 'NA' },
  { id: 3, name: 'bhageshimore', phone: '9518894869', address: 'NA', location: 'NA', email: 'NA' },
  { id: 4, name: 'Ravi Patil', phone: '7066537279', address: 'NA', location: 'NA', email: 'NA' },
  { id: 5, name: 'file Kate', phone: '8283959879', address: 'NA', location: 'NA', email: 'NA' },
]

const doctorList = ['Dr. Smith', 'Dr. Patel', 'Dr. Lee']
const channelList = ['In-person', 'Video', 'Phone']
const typeList = ['Consultation', 'Follow-up', 'Emergency']

function App() {
  const [patients, setPatients] = useState(dummyPatients)
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [form, setForm] = useState({
    doctor: '',
    channel: '',
    title: '',
    vitals: { bp: '', temp: '', height: '', weight: '', spo2: '', pulse: '' },
    reason: '',
    time: '',
    date: '',
    type: '',
    note: '',
  })
  const [search, setSearch] = useState("")

  // Modal state for adding patient
  const [showAddModal, setShowAddModal] = useState(false)
  const [newPatient, setNewPatient] = useState({ name: '', phone: '', address: '' })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    if (["bp", "temp", "height", "weight", "spo2", "pulse"].includes(name)) {
      setForm((prev) => ({ ...prev, vitals: { ...prev.vitals, [name]: value } }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleTimeChange = (e) => setForm((prev) => ({ ...prev, time: e.target.value }))
  const handleDateChange = (e) => setForm((prev) => ({ ...prev, date: e.target.value }))

  const handleReset = () => {
    setForm({
      doctor: '', channel: '', title: '',
      vitals: { bp: '', temp: '', height: '', weight: '', spo2: '', pulse: '' },
      reason: '', time: '', date: '', type: '', note: '',
    })
    setSelectedPatient(null)
  }

  const handleSubmit = () => {
    alert('Appointment submitted!')
  }

  // Search functionality
  const handleSearch = (e) => setSearch(e.target.value)
  const filteredPatients = patients.filter(
    p => p.name.toLowerCase().includes(search.toLowerCase()) || p.phone.includes(search)
  )

  // Add new patient modal handlers
  const handleAddPatient = () => setShowAddModal(true)
  const handleAddPatientChange = (e) => {
    const { name, value } = e.target
    setNewPatient((prev) => ({ ...prev, [name]: value }))
  }
  const handleAddPatientSubmit = (e) => {
    e.preventDefault()
    if (!newPatient.name || !newPatient.phone || !newPatient.address) return
    const newId = patients.length ? Math.max(...patients.map(p => Number(p.id))) + 1 : 1
    const patient = {
      id: newId,
      name: newPatient.name,
      phone: newPatient.phone,
      address: newPatient.address,
      location: newPatient.address,
      email: 'NA',
    }
    setPatients([...patients, patient])
    setSelectedPatient(patient)
    setShowAddModal(false)
    setNewPatient({ name: '', phone: '', address: '' })
    setSearch("")
  }
  const handleAddPatientClose = () => {
    setShowAddModal(false)
    setNewPatient({ name: '', phone: '', address: '' })
  }

  // View profile functionality
  const handleViewProfile = () => {
    if (selectedPatient) {
      alert(`Viewing profile for ${selectedPatient.name}`)
    } else {
      alert("Please select a patient to view profile.")
    }
  }

  // Icon sidebar click handler
  const handleIconClick = (label) => {
    switch (label) {
      case "Home":
        setForm({
          doctor: '', channel: '', title: '',
          vitals: { bp: '', temp: '', height: '', weight: '', spo2: '', pulse: '' },
          reason: '', time: '', date: '', type: '', note: '',
        });
        setSelectedPatient(null);
        setSearch("");
        break;
      case "Dashboard":
        alert("Dashboard navigation coming soon!");
        break;
      case "Profile":
        setShowAddModal(true);
        break;
      case "Settings":
        alert("Settings page coming soon!");
        break;
      default:
        alert(`Clicked: ${label}`);
    }
  };

  return (
    <div className="main-layout">
      <IconSidebar onIconClick={handleIconClick} />
      <Sidebar
        patients={filteredPatients}
        selectedPatient={selectedPatient}
        onSelectPatient={setSelectedPatient}
        searchValue={search}
        onSearch={handleSearch}
        onAddPatient={handleAddPatient}
        onViewProfile={handleViewProfile}
      />
      <div className="content-layout">
        <div className="left-content">
          <AppointmentForm
            form={form}
            onChange={handleFormChange}
            doctors={doctorList}
            channels={channelList}
          />
        </div>
        <div className="right-content">
          <AppointmentDetails
            form={form}
            onChange={handleFormChange}
            patient={selectedPatient}
            types={typeList}
            onTimeChange={handleTimeChange}
            onDateChange={handleDateChange}
          />
          <ActionButtons onReset={handleReset} onSubmit={handleSubmit} />
        </div>
      </div>
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add New Patient</h2>
            <form onSubmit={handleAddPatientSubmit}>
              <label>Name
                <input name="name" value={newPatient.name} onChange={handleAddPatientChange} required />
              </label>
              <label>Mobile Number
                <input name="phone" value={newPatient.phone} onChange={handleAddPatientChange} required />
              </label>
              <label>Address
                <input name="address" value={newPatient.address} onChange={handleAddPatientChange} required />
              </label>
              <div className="modal-actions">
                <button type="button" onClick={handleAddPatientClose}>Cancel</button>
                <button type="submit" className="submit-btn">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
