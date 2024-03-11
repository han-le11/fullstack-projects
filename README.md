# Fullstack development with React 
Current branches:
<pre>
master
part2.1
</pre>
Branch <i>part2.1</i> contains the latest refactored version of the app <i>courseinfo</i>.

Repository structure is as follows:
<pre>
part0
part1
  courseinfo
  unicafe
  anecdotes
part2
  phonebook
  countries
</pre>

The <i>part</i> folders correspond to the parts in the [Full Stack course](https://fullstackopen.com/en/#course-contents) of Helsinki University. 

One app per folder, e.g., the app for course information is in folder <i>courseinfo</i>.

The whole React repository of each app is put in each folder except the folder <i>node_modules</i>. 

## Tools
The small apps in this repository were created with [Vite](https://vitejs.dev/) by running the command. 
<pre>
npm create vite@latest appname -- --template react
</pre>

## How to start an app
<pre>
cd partX
npm install
npm run dev
</pre>
where X is the number of part. The application will start on a localhost port.