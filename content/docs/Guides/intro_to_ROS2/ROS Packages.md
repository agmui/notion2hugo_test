---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667STAAKHA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDFiKxbVEhhlE8qKmfm5JnKc3E7gifWPKHLk1GEWmr67AIhAIGBpgAAWnzwUPSYDBgyDxSnZtjptgP%2FOc21v2G3NS%2F4Kv8DCBwQABoMNjM3NDIzMTgzODA1IgxDaD9vM9z%2BJCar2Q0q3AMCvcc5E%2FlFrRaiP%2BQNUndj0VZwWjwdbg7pUh5szD3NSuw8FHm%2FPz41GHR1LlXv%2FByl6X%2F8wHGllsHCXDnxcTNN1jcOb%2ByNJaG0OSPaD4n8Ih3eMIVdG1phI4T8Vg5%2Brd99Rin6a6AItEr5kwpHD7L6M3a9J2WyAivjsNI%2FYfgGVWbmC4hM1p3zeKW68YXpfTpXYpNw7PAzD0NE10K3wse%2B2n0Rv8JCyEG7tK8pgvf0H4LJ%2F4L7mNI6IHv5Y%2FQKoLrvKSOg%2FbKburJ5Ab1hm1IQ35ItfW%2BjkcXNhPX0YUz8ElZAEAAEskMbtcH6l%2BC3m3O4GLTKwbvwvgXE25fAbMQ0rlD1soQemq2ntjd2MbJ9C9Qe%2FNRGceVvwH%2Fg40DkA1l9aj0YKI9W3y%2FhLXU5LjxXfxjjW4P6Hbfo%2BKRBPWr5GWeOOdqel97cZ4yNdwcXMZJxqg6SZGTsxVKxxcQd5rZmxY5xVTmGscpn%2ByR9BO9guEU%2BRNPcBlLdY0GoSqzYaoeGLsQ%2Fs0Admu6rAKbxWlbHKC6ILBRDVzymNGC%2Bd9fKGlpDKALJjOeBxD58QqrdzG12hX2AYD1cQvXnhb%2FZqhe1m5qPVwlGrDk0x6V8YD5oGvHz4QJ5xQDV7MPBrTDq0JPBBjqkAcZJmKCq3PT2zjLB%2BIDwIuMnIQJQg%2BBA7c4G8K2c1KqKVtL7ab2MVzBb3S9uh3aYzs%2BBOjYkouz2Yl2du%2FzAeRJif7ek6egmel%2BhwznwBgtZ72Is0UAOmQP5VUnjSVFWCgjCUfYILXbx5pBBVmCS6c%2Fh44WSCHQxeTLyrP019JBfgHjF7GoudlKF5wQUdIiPLoQZ1YcTzQtG8gwiC7pZpJHMbtpU&X-Amz-Signature=a6972895e90f6897530a58a82d599a6362f9708ebe1ca9f58bc43bb8b16134e1&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667STAAKHA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDFiKxbVEhhlE8qKmfm5JnKc3E7gifWPKHLk1GEWmr67AIhAIGBpgAAWnzwUPSYDBgyDxSnZtjptgP%2FOc21v2G3NS%2F4Kv8DCBwQABoMNjM3NDIzMTgzODA1IgxDaD9vM9z%2BJCar2Q0q3AMCvcc5E%2FlFrRaiP%2BQNUndj0VZwWjwdbg7pUh5szD3NSuw8FHm%2FPz41GHR1LlXv%2FByl6X%2F8wHGllsHCXDnxcTNN1jcOb%2ByNJaG0OSPaD4n8Ih3eMIVdG1phI4T8Vg5%2Brd99Rin6a6AItEr5kwpHD7L6M3a9J2WyAivjsNI%2FYfgGVWbmC4hM1p3zeKW68YXpfTpXYpNw7PAzD0NE10K3wse%2B2n0Rv8JCyEG7tK8pgvf0H4LJ%2F4L7mNI6IHv5Y%2FQKoLrvKSOg%2FbKburJ5Ab1hm1IQ35ItfW%2BjkcXNhPX0YUz8ElZAEAAEskMbtcH6l%2BC3m3O4GLTKwbvwvgXE25fAbMQ0rlD1soQemq2ntjd2MbJ9C9Qe%2FNRGceVvwH%2Fg40DkA1l9aj0YKI9W3y%2FhLXU5LjxXfxjjW4P6Hbfo%2BKRBPWr5GWeOOdqel97cZ4yNdwcXMZJxqg6SZGTsxVKxxcQd5rZmxY5xVTmGscpn%2ByR9BO9guEU%2BRNPcBlLdY0GoSqzYaoeGLsQ%2Fs0Admu6rAKbxWlbHKC6ILBRDVzymNGC%2Bd9fKGlpDKALJjOeBxD58QqrdzG12hX2AYD1cQvXnhb%2FZqhe1m5qPVwlGrDk0x6V8YD5oGvHz4QJ5xQDV7MPBrTDq0JPBBjqkAcZJmKCq3PT2zjLB%2BIDwIuMnIQJQg%2BBA7c4G8K2c1KqKVtL7ab2MVzBb3S9uh3aYzs%2BBOjYkouz2Yl2du%2FzAeRJif7ek6egmel%2BhwznwBgtZ72Is0UAOmQP5VUnjSVFWCgjCUfYILXbx5pBBVmCS6c%2Fh44WSCHQxeTLyrP019JBfgHjF7GoudlKF5wQUdIiPLoQZ1YcTzQtG8gwiC7pZpJHMbtpU&X-Amz-Signature=5eaa8d3e95a6c5acc2dff3610f0378f0459cc09499ad1b96d4f16723694be4e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667STAAKHA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDFiKxbVEhhlE8qKmfm5JnKc3E7gifWPKHLk1GEWmr67AIhAIGBpgAAWnzwUPSYDBgyDxSnZtjptgP%2FOc21v2G3NS%2F4Kv8DCBwQABoMNjM3NDIzMTgzODA1IgxDaD9vM9z%2BJCar2Q0q3AMCvcc5E%2FlFrRaiP%2BQNUndj0VZwWjwdbg7pUh5szD3NSuw8FHm%2FPz41GHR1LlXv%2FByl6X%2F8wHGllsHCXDnxcTNN1jcOb%2ByNJaG0OSPaD4n8Ih3eMIVdG1phI4T8Vg5%2Brd99Rin6a6AItEr5kwpHD7L6M3a9J2WyAivjsNI%2FYfgGVWbmC4hM1p3zeKW68YXpfTpXYpNw7PAzD0NE10K3wse%2B2n0Rv8JCyEG7tK8pgvf0H4LJ%2F4L7mNI6IHv5Y%2FQKoLrvKSOg%2FbKburJ5Ab1hm1IQ35ItfW%2BjkcXNhPX0YUz8ElZAEAAEskMbtcH6l%2BC3m3O4GLTKwbvwvgXE25fAbMQ0rlD1soQemq2ntjd2MbJ9C9Qe%2FNRGceVvwH%2Fg40DkA1l9aj0YKI9W3y%2FhLXU5LjxXfxjjW4P6Hbfo%2BKRBPWr5GWeOOdqel97cZ4yNdwcXMZJxqg6SZGTsxVKxxcQd5rZmxY5xVTmGscpn%2ByR9BO9guEU%2BRNPcBlLdY0GoSqzYaoeGLsQ%2Fs0Admu6rAKbxWlbHKC6ILBRDVzymNGC%2Bd9fKGlpDKALJjOeBxD58QqrdzG12hX2AYD1cQvXnhb%2FZqhe1m5qPVwlGrDk0x6V8YD5oGvHz4QJ5xQDV7MPBrTDq0JPBBjqkAcZJmKCq3PT2zjLB%2BIDwIuMnIQJQg%2BBA7c4G8K2c1KqKVtL7ab2MVzBb3S9uh3aYzs%2BBOjYkouz2Yl2du%2FzAeRJif7ek6egmel%2BhwznwBgtZ72Is0UAOmQP5VUnjSVFWCgjCUfYILXbx5pBBVmCS6c%2Fh44WSCHQxeTLyrP019JBfgHjF7GoudlKF5wQUdIiPLoQZ1YcTzQtG8gwiC7pZpJHMbtpU&X-Amz-Signature=b888ac714b4aa4c517e9aca54f0772acf0c909ba5234388a8f3b87dc10e2ea42&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667STAAKHA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDFiKxbVEhhlE8qKmfm5JnKc3E7gifWPKHLk1GEWmr67AIhAIGBpgAAWnzwUPSYDBgyDxSnZtjptgP%2FOc21v2G3NS%2F4Kv8DCBwQABoMNjM3NDIzMTgzODA1IgxDaD9vM9z%2BJCar2Q0q3AMCvcc5E%2FlFrRaiP%2BQNUndj0VZwWjwdbg7pUh5szD3NSuw8FHm%2FPz41GHR1LlXv%2FByl6X%2F8wHGllsHCXDnxcTNN1jcOb%2ByNJaG0OSPaD4n8Ih3eMIVdG1phI4T8Vg5%2Brd99Rin6a6AItEr5kwpHD7L6M3a9J2WyAivjsNI%2FYfgGVWbmC4hM1p3zeKW68YXpfTpXYpNw7PAzD0NE10K3wse%2B2n0Rv8JCyEG7tK8pgvf0H4LJ%2F4L7mNI6IHv5Y%2FQKoLrvKSOg%2FbKburJ5Ab1hm1IQ35ItfW%2BjkcXNhPX0YUz8ElZAEAAEskMbtcH6l%2BC3m3O4GLTKwbvwvgXE25fAbMQ0rlD1soQemq2ntjd2MbJ9C9Qe%2FNRGceVvwH%2Fg40DkA1l9aj0YKI9W3y%2FhLXU5LjxXfxjjW4P6Hbfo%2BKRBPWr5GWeOOdqel97cZ4yNdwcXMZJxqg6SZGTsxVKxxcQd5rZmxY5xVTmGscpn%2ByR9BO9guEU%2BRNPcBlLdY0GoSqzYaoeGLsQ%2Fs0Admu6rAKbxWlbHKC6ILBRDVzymNGC%2Bd9fKGlpDKALJjOeBxD58QqrdzG12hX2AYD1cQvXnhb%2FZqhe1m5qPVwlGrDk0x6V8YD5oGvHz4QJ5xQDV7MPBrTDq0JPBBjqkAcZJmKCq3PT2zjLB%2BIDwIuMnIQJQg%2BBA7c4G8K2c1KqKVtL7ab2MVzBb3S9uh3aYzs%2BBOjYkouz2Yl2du%2FzAeRJif7ek6egmel%2BhwznwBgtZ72Is0UAOmQP5VUnjSVFWCgjCUfYILXbx5pBBVmCS6c%2Fh44WSCHQxeTLyrP019JBfgHjF7GoudlKF5wQUdIiPLoQZ1YcTzQtG8gwiC7pZpJHMbtpU&X-Amz-Signature=67722a03b9bee945942d8f38af4a04f895f67ec9065c0e233a6122cd52ddf8a2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667STAAKHA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDFiKxbVEhhlE8qKmfm5JnKc3E7gifWPKHLk1GEWmr67AIhAIGBpgAAWnzwUPSYDBgyDxSnZtjptgP%2FOc21v2G3NS%2F4Kv8DCBwQABoMNjM3NDIzMTgzODA1IgxDaD9vM9z%2BJCar2Q0q3AMCvcc5E%2FlFrRaiP%2BQNUndj0VZwWjwdbg7pUh5szD3NSuw8FHm%2FPz41GHR1LlXv%2FByl6X%2F8wHGllsHCXDnxcTNN1jcOb%2ByNJaG0OSPaD4n8Ih3eMIVdG1phI4T8Vg5%2Brd99Rin6a6AItEr5kwpHD7L6M3a9J2WyAivjsNI%2FYfgGVWbmC4hM1p3zeKW68YXpfTpXYpNw7PAzD0NE10K3wse%2B2n0Rv8JCyEG7tK8pgvf0H4LJ%2F4L7mNI6IHv5Y%2FQKoLrvKSOg%2FbKburJ5Ab1hm1IQ35ItfW%2BjkcXNhPX0YUz8ElZAEAAEskMbtcH6l%2BC3m3O4GLTKwbvwvgXE25fAbMQ0rlD1soQemq2ntjd2MbJ9C9Qe%2FNRGceVvwH%2Fg40DkA1l9aj0YKI9W3y%2FhLXU5LjxXfxjjW4P6Hbfo%2BKRBPWr5GWeOOdqel97cZ4yNdwcXMZJxqg6SZGTsxVKxxcQd5rZmxY5xVTmGscpn%2ByR9BO9guEU%2BRNPcBlLdY0GoSqzYaoeGLsQ%2Fs0Admu6rAKbxWlbHKC6ILBRDVzymNGC%2Bd9fKGlpDKALJjOeBxD58QqrdzG12hX2AYD1cQvXnhb%2FZqhe1m5qPVwlGrDk0x6V8YD5oGvHz4QJ5xQDV7MPBrTDq0JPBBjqkAcZJmKCq3PT2zjLB%2BIDwIuMnIQJQg%2BBA7c4G8K2c1KqKVtL7ab2MVzBb3S9uh3aYzs%2BBOjYkouz2Yl2du%2FzAeRJif7ek6egmel%2BhwznwBgtZ72Is0UAOmQP5VUnjSVFWCgjCUfYILXbx5pBBVmCS6c%2Fh44WSCHQxeTLyrP019JBfgHjF7GoudlKF5wQUdIiPLoQZ1YcTzQtG8gwiC7pZpJHMbtpU&X-Amz-Signature=c800938cf88510487d18ae6ea64bea64aed69f87e1c260923aa1d9286acd24f3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667STAAKHA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDFiKxbVEhhlE8qKmfm5JnKc3E7gifWPKHLk1GEWmr67AIhAIGBpgAAWnzwUPSYDBgyDxSnZtjptgP%2FOc21v2G3NS%2F4Kv8DCBwQABoMNjM3NDIzMTgzODA1IgxDaD9vM9z%2BJCar2Q0q3AMCvcc5E%2FlFrRaiP%2BQNUndj0VZwWjwdbg7pUh5szD3NSuw8FHm%2FPz41GHR1LlXv%2FByl6X%2F8wHGllsHCXDnxcTNN1jcOb%2ByNJaG0OSPaD4n8Ih3eMIVdG1phI4T8Vg5%2Brd99Rin6a6AItEr5kwpHD7L6M3a9J2WyAivjsNI%2FYfgGVWbmC4hM1p3zeKW68YXpfTpXYpNw7PAzD0NE10K3wse%2B2n0Rv8JCyEG7tK8pgvf0H4LJ%2F4L7mNI6IHv5Y%2FQKoLrvKSOg%2FbKburJ5Ab1hm1IQ35ItfW%2BjkcXNhPX0YUz8ElZAEAAEskMbtcH6l%2BC3m3O4GLTKwbvwvgXE25fAbMQ0rlD1soQemq2ntjd2MbJ9C9Qe%2FNRGceVvwH%2Fg40DkA1l9aj0YKI9W3y%2FhLXU5LjxXfxjjW4P6Hbfo%2BKRBPWr5GWeOOdqel97cZ4yNdwcXMZJxqg6SZGTsxVKxxcQd5rZmxY5xVTmGscpn%2ByR9BO9guEU%2BRNPcBlLdY0GoSqzYaoeGLsQ%2Fs0Admu6rAKbxWlbHKC6ILBRDVzymNGC%2Bd9fKGlpDKALJjOeBxD58QqrdzG12hX2AYD1cQvXnhb%2FZqhe1m5qPVwlGrDk0x6V8YD5oGvHz4QJ5xQDV7MPBrTDq0JPBBjqkAcZJmKCq3PT2zjLB%2BIDwIuMnIQJQg%2BBA7c4G8K2c1KqKVtL7ab2MVzBb3S9uh3aYzs%2BBOjYkouz2Yl2du%2FzAeRJif7ek6egmel%2BhwznwBgtZ72Is0UAOmQP5VUnjSVFWCgjCUfYILXbx5pBBVmCS6c%2Fh44WSCHQxeTLyrP019JBfgHjF7GoudlKF5wQUdIiPLoQZ1YcTzQtG8gwiC7pZpJHMbtpU&X-Amz-Signature=11269ab819caf922dbd4159522bb19460d6f6137711213fc0b0a6a626dad77d7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667STAAKHA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDFiKxbVEhhlE8qKmfm5JnKc3E7gifWPKHLk1GEWmr67AIhAIGBpgAAWnzwUPSYDBgyDxSnZtjptgP%2FOc21v2G3NS%2F4Kv8DCBwQABoMNjM3NDIzMTgzODA1IgxDaD9vM9z%2BJCar2Q0q3AMCvcc5E%2FlFrRaiP%2BQNUndj0VZwWjwdbg7pUh5szD3NSuw8FHm%2FPz41GHR1LlXv%2FByl6X%2F8wHGllsHCXDnxcTNN1jcOb%2ByNJaG0OSPaD4n8Ih3eMIVdG1phI4T8Vg5%2Brd99Rin6a6AItEr5kwpHD7L6M3a9J2WyAivjsNI%2FYfgGVWbmC4hM1p3zeKW68YXpfTpXYpNw7PAzD0NE10K3wse%2B2n0Rv8JCyEG7tK8pgvf0H4LJ%2F4L7mNI6IHv5Y%2FQKoLrvKSOg%2FbKburJ5Ab1hm1IQ35ItfW%2BjkcXNhPX0YUz8ElZAEAAEskMbtcH6l%2BC3m3O4GLTKwbvwvgXE25fAbMQ0rlD1soQemq2ntjd2MbJ9C9Qe%2FNRGceVvwH%2Fg40DkA1l9aj0YKI9W3y%2FhLXU5LjxXfxjjW4P6Hbfo%2BKRBPWr5GWeOOdqel97cZ4yNdwcXMZJxqg6SZGTsxVKxxcQd5rZmxY5xVTmGscpn%2ByR9BO9guEU%2BRNPcBlLdY0GoSqzYaoeGLsQ%2Fs0Admu6rAKbxWlbHKC6ILBRDVzymNGC%2Bd9fKGlpDKALJjOeBxD58QqrdzG12hX2AYD1cQvXnhb%2FZqhe1m5qPVwlGrDk0x6V8YD5oGvHz4QJ5xQDV7MPBrTDq0JPBBjqkAcZJmKCq3PT2zjLB%2BIDwIuMnIQJQg%2BBA7c4G8K2c1KqKVtL7ab2MVzBb3S9uh3aYzs%2BBOjYkouz2Yl2du%2FzAeRJif7ek6egmel%2BhwznwBgtZ72Is0UAOmQP5VUnjSVFWCgjCUfYILXbx5pBBVmCS6c%2Fh44WSCHQxeTLyrP019JBfgHjF7GoudlKF5wQUdIiPLoQZ1YcTzQtG8gwiC7pZpJHMbtpU&X-Amz-Signature=154fd9ebf46fcd1961411012207c9b9dd629cab5f976f96871bac4ed224eae64&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
