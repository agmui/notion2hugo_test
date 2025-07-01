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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4FJDGO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQ2egxJILuiFU2XKKBnyMCNRs63SgjsvtggqFfsbuIaAiEAj%2B9wRQzZ9jDCbkVZ3MFtAPoqNuHuxnKuBmPBJexhay0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuhF022K5DaQhvoqyrcAxvZSoPh36ha1unW0e90b%2B4GFY024Pq6jw9HjrV12iHvNrzv7JDn94Xm136nyODAHFFKcKk0xy1aNjK9hUbpXCBeLRQWdLWK106CArLN35e8sW7o8oZAJHPBGlBzZpfobMiBUx2bw7WKmv6WhJo5mgMosIgLc7Pv37q9IALUmPut0L8IvYCuj8RQC7lQolNiq8FfDKY1jeN9%2BfcO0L%2FFsvnJugvZw4R%2F8wCxOOKC2dvIsrGf3NXOHU04TQN0%2FmK9QvsNnVZIXlcTaSM4YkLnJMvFXcjuKx1LslotXZX2bOKQLHqRauCJ7NeY8rxZR0JOJ2hd7S8cciEItoKG88CZilh5e66NbEHqbPbYEQQMStxBYKJIppRpqJkKLCOA6xbKbraUxN4YlkBGzPf7QV668j4nzxCPrlBHDynH43EudOo7QR0OOl2vG%2Fm%2FG8JH6Bei4d65tfNj4U%2FevT%2FoWifczNVJuhXJkmeCPjQvO6Vrw6sJJ9t6CMno15ZF1mRVNl%2FVmGUI2c5BqncgKd9xiBty%2Bg24ACWs6B5bX9eRZurCQZvoWZyDgBrYGyXNAm4e1iLDZZX5lGQTH%2Fiv%2FwS8mmAOM0s3nAGhC%2FgbmH%2F8UYHEDPDlkEkQn4mUJ1TwxJQhMJ2IkMMGOqUBQNE35oJOyqy3VLiAvvX640mmi56LaH5aga2%2BKGGnJzfIgoAWDPpi7ufzkgWjlbFhJLKRnJi2nCeiQG%2FT4jMaULNoF9oOqMGmX1qHVNqLPUsubCK4bCWk%2B06L%2FFVyA%2Bi4wTqTfBwi51cXuXtiJWEr3NpbJsOPZseYi1R1VROmC%2BpE1ECIV8IPzEPvmUnYYJL%2F2Iskh5WMbLPF5EkocqPxS6uLdpUz&X-Amz-Signature=6933a9265ef06f2b5aeb5ed572579df3bfe15a9db6f5ecd2bdac82f98eea37e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4FJDGO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQ2egxJILuiFU2XKKBnyMCNRs63SgjsvtggqFfsbuIaAiEAj%2B9wRQzZ9jDCbkVZ3MFtAPoqNuHuxnKuBmPBJexhay0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuhF022K5DaQhvoqyrcAxvZSoPh36ha1unW0e90b%2B4GFY024Pq6jw9HjrV12iHvNrzv7JDn94Xm136nyODAHFFKcKk0xy1aNjK9hUbpXCBeLRQWdLWK106CArLN35e8sW7o8oZAJHPBGlBzZpfobMiBUx2bw7WKmv6WhJo5mgMosIgLc7Pv37q9IALUmPut0L8IvYCuj8RQC7lQolNiq8FfDKY1jeN9%2BfcO0L%2FFsvnJugvZw4R%2F8wCxOOKC2dvIsrGf3NXOHU04TQN0%2FmK9QvsNnVZIXlcTaSM4YkLnJMvFXcjuKx1LslotXZX2bOKQLHqRauCJ7NeY8rxZR0JOJ2hd7S8cciEItoKG88CZilh5e66NbEHqbPbYEQQMStxBYKJIppRpqJkKLCOA6xbKbraUxN4YlkBGzPf7QV668j4nzxCPrlBHDynH43EudOo7QR0OOl2vG%2Fm%2FG8JH6Bei4d65tfNj4U%2FevT%2FoWifczNVJuhXJkmeCPjQvO6Vrw6sJJ9t6CMno15ZF1mRVNl%2FVmGUI2c5BqncgKd9xiBty%2Bg24ACWs6B5bX9eRZurCQZvoWZyDgBrYGyXNAm4e1iLDZZX5lGQTH%2Fiv%2FwS8mmAOM0s3nAGhC%2FgbmH%2F8UYHEDPDlkEkQn4mUJ1TwxJQhMJ2IkMMGOqUBQNE35oJOyqy3VLiAvvX640mmi56LaH5aga2%2BKGGnJzfIgoAWDPpi7ufzkgWjlbFhJLKRnJi2nCeiQG%2FT4jMaULNoF9oOqMGmX1qHVNqLPUsubCK4bCWk%2B06L%2FFVyA%2Bi4wTqTfBwi51cXuXtiJWEr3NpbJsOPZseYi1R1VROmC%2BpE1ECIV8IPzEPvmUnYYJL%2F2Iskh5WMbLPF5EkocqPxS6uLdpUz&X-Amz-Signature=39879a4d9eb2c2323be7264084167c5fb95f890d65da03888a5a5147d7d421ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4FJDGO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQ2egxJILuiFU2XKKBnyMCNRs63SgjsvtggqFfsbuIaAiEAj%2B9wRQzZ9jDCbkVZ3MFtAPoqNuHuxnKuBmPBJexhay0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuhF022K5DaQhvoqyrcAxvZSoPh36ha1unW0e90b%2B4GFY024Pq6jw9HjrV12iHvNrzv7JDn94Xm136nyODAHFFKcKk0xy1aNjK9hUbpXCBeLRQWdLWK106CArLN35e8sW7o8oZAJHPBGlBzZpfobMiBUx2bw7WKmv6WhJo5mgMosIgLc7Pv37q9IALUmPut0L8IvYCuj8RQC7lQolNiq8FfDKY1jeN9%2BfcO0L%2FFsvnJugvZw4R%2F8wCxOOKC2dvIsrGf3NXOHU04TQN0%2FmK9QvsNnVZIXlcTaSM4YkLnJMvFXcjuKx1LslotXZX2bOKQLHqRauCJ7NeY8rxZR0JOJ2hd7S8cciEItoKG88CZilh5e66NbEHqbPbYEQQMStxBYKJIppRpqJkKLCOA6xbKbraUxN4YlkBGzPf7QV668j4nzxCPrlBHDynH43EudOo7QR0OOl2vG%2Fm%2FG8JH6Bei4d65tfNj4U%2FevT%2FoWifczNVJuhXJkmeCPjQvO6Vrw6sJJ9t6CMno15ZF1mRVNl%2FVmGUI2c5BqncgKd9xiBty%2Bg24ACWs6B5bX9eRZurCQZvoWZyDgBrYGyXNAm4e1iLDZZX5lGQTH%2Fiv%2FwS8mmAOM0s3nAGhC%2FgbmH%2F8UYHEDPDlkEkQn4mUJ1TwxJQhMJ2IkMMGOqUBQNE35oJOyqy3VLiAvvX640mmi56LaH5aga2%2BKGGnJzfIgoAWDPpi7ufzkgWjlbFhJLKRnJi2nCeiQG%2FT4jMaULNoF9oOqMGmX1qHVNqLPUsubCK4bCWk%2B06L%2FFVyA%2Bi4wTqTfBwi51cXuXtiJWEr3NpbJsOPZseYi1R1VROmC%2BpE1ECIV8IPzEPvmUnYYJL%2F2Iskh5WMbLPF5EkocqPxS6uLdpUz&X-Amz-Signature=8946fc884218fbfb0065379996350d43b9a32934902b0216f3a0bb9454a02ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4FJDGO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQ2egxJILuiFU2XKKBnyMCNRs63SgjsvtggqFfsbuIaAiEAj%2B9wRQzZ9jDCbkVZ3MFtAPoqNuHuxnKuBmPBJexhay0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuhF022K5DaQhvoqyrcAxvZSoPh36ha1unW0e90b%2B4GFY024Pq6jw9HjrV12iHvNrzv7JDn94Xm136nyODAHFFKcKk0xy1aNjK9hUbpXCBeLRQWdLWK106CArLN35e8sW7o8oZAJHPBGlBzZpfobMiBUx2bw7WKmv6WhJo5mgMosIgLc7Pv37q9IALUmPut0L8IvYCuj8RQC7lQolNiq8FfDKY1jeN9%2BfcO0L%2FFsvnJugvZw4R%2F8wCxOOKC2dvIsrGf3NXOHU04TQN0%2FmK9QvsNnVZIXlcTaSM4YkLnJMvFXcjuKx1LslotXZX2bOKQLHqRauCJ7NeY8rxZR0JOJ2hd7S8cciEItoKG88CZilh5e66NbEHqbPbYEQQMStxBYKJIppRpqJkKLCOA6xbKbraUxN4YlkBGzPf7QV668j4nzxCPrlBHDynH43EudOo7QR0OOl2vG%2Fm%2FG8JH6Bei4d65tfNj4U%2FevT%2FoWifczNVJuhXJkmeCPjQvO6Vrw6sJJ9t6CMno15ZF1mRVNl%2FVmGUI2c5BqncgKd9xiBty%2Bg24ACWs6B5bX9eRZurCQZvoWZyDgBrYGyXNAm4e1iLDZZX5lGQTH%2Fiv%2FwS8mmAOM0s3nAGhC%2FgbmH%2F8UYHEDPDlkEkQn4mUJ1TwxJQhMJ2IkMMGOqUBQNE35oJOyqy3VLiAvvX640mmi56LaH5aga2%2BKGGnJzfIgoAWDPpi7ufzkgWjlbFhJLKRnJi2nCeiQG%2FT4jMaULNoF9oOqMGmX1qHVNqLPUsubCK4bCWk%2B06L%2FFVyA%2Bi4wTqTfBwi51cXuXtiJWEr3NpbJsOPZseYi1R1VROmC%2BpE1ECIV8IPzEPvmUnYYJL%2F2Iskh5WMbLPF5EkocqPxS6uLdpUz&X-Amz-Signature=5a2709b007a0b576b3339929d778d1b266da6e70196a4be2f27af0dd2ac04fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4FJDGO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQ2egxJILuiFU2XKKBnyMCNRs63SgjsvtggqFfsbuIaAiEAj%2B9wRQzZ9jDCbkVZ3MFtAPoqNuHuxnKuBmPBJexhay0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuhF022K5DaQhvoqyrcAxvZSoPh36ha1unW0e90b%2B4GFY024Pq6jw9HjrV12iHvNrzv7JDn94Xm136nyODAHFFKcKk0xy1aNjK9hUbpXCBeLRQWdLWK106CArLN35e8sW7o8oZAJHPBGlBzZpfobMiBUx2bw7WKmv6WhJo5mgMosIgLc7Pv37q9IALUmPut0L8IvYCuj8RQC7lQolNiq8FfDKY1jeN9%2BfcO0L%2FFsvnJugvZw4R%2F8wCxOOKC2dvIsrGf3NXOHU04TQN0%2FmK9QvsNnVZIXlcTaSM4YkLnJMvFXcjuKx1LslotXZX2bOKQLHqRauCJ7NeY8rxZR0JOJ2hd7S8cciEItoKG88CZilh5e66NbEHqbPbYEQQMStxBYKJIppRpqJkKLCOA6xbKbraUxN4YlkBGzPf7QV668j4nzxCPrlBHDynH43EudOo7QR0OOl2vG%2Fm%2FG8JH6Bei4d65tfNj4U%2FevT%2FoWifczNVJuhXJkmeCPjQvO6Vrw6sJJ9t6CMno15ZF1mRVNl%2FVmGUI2c5BqncgKd9xiBty%2Bg24ACWs6B5bX9eRZurCQZvoWZyDgBrYGyXNAm4e1iLDZZX5lGQTH%2Fiv%2FwS8mmAOM0s3nAGhC%2FgbmH%2F8UYHEDPDlkEkQn4mUJ1TwxJQhMJ2IkMMGOqUBQNE35oJOyqy3VLiAvvX640mmi56LaH5aga2%2BKGGnJzfIgoAWDPpi7ufzkgWjlbFhJLKRnJi2nCeiQG%2FT4jMaULNoF9oOqMGmX1qHVNqLPUsubCK4bCWk%2B06L%2FFVyA%2Bi4wTqTfBwi51cXuXtiJWEr3NpbJsOPZseYi1R1VROmC%2BpE1ECIV8IPzEPvmUnYYJL%2F2Iskh5WMbLPF5EkocqPxS6uLdpUz&X-Amz-Signature=e31dd111fb4b36230e0034eed5ef5ae2f387ed09f2a67d90484f2c15e23fbcb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4FJDGO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQ2egxJILuiFU2XKKBnyMCNRs63SgjsvtggqFfsbuIaAiEAj%2B9wRQzZ9jDCbkVZ3MFtAPoqNuHuxnKuBmPBJexhay0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuhF022K5DaQhvoqyrcAxvZSoPh36ha1unW0e90b%2B4GFY024Pq6jw9HjrV12iHvNrzv7JDn94Xm136nyODAHFFKcKk0xy1aNjK9hUbpXCBeLRQWdLWK106CArLN35e8sW7o8oZAJHPBGlBzZpfobMiBUx2bw7WKmv6WhJo5mgMosIgLc7Pv37q9IALUmPut0L8IvYCuj8RQC7lQolNiq8FfDKY1jeN9%2BfcO0L%2FFsvnJugvZw4R%2F8wCxOOKC2dvIsrGf3NXOHU04TQN0%2FmK9QvsNnVZIXlcTaSM4YkLnJMvFXcjuKx1LslotXZX2bOKQLHqRauCJ7NeY8rxZR0JOJ2hd7S8cciEItoKG88CZilh5e66NbEHqbPbYEQQMStxBYKJIppRpqJkKLCOA6xbKbraUxN4YlkBGzPf7QV668j4nzxCPrlBHDynH43EudOo7QR0OOl2vG%2Fm%2FG8JH6Bei4d65tfNj4U%2FevT%2FoWifczNVJuhXJkmeCPjQvO6Vrw6sJJ9t6CMno15ZF1mRVNl%2FVmGUI2c5BqncgKd9xiBty%2Bg24ACWs6B5bX9eRZurCQZvoWZyDgBrYGyXNAm4e1iLDZZX5lGQTH%2Fiv%2FwS8mmAOM0s3nAGhC%2FgbmH%2F8UYHEDPDlkEkQn4mUJ1TwxJQhMJ2IkMMGOqUBQNE35oJOyqy3VLiAvvX640mmi56LaH5aga2%2BKGGnJzfIgoAWDPpi7ufzkgWjlbFhJLKRnJi2nCeiQG%2FT4jMaULNoF9oOqMGmX1qHVNqLPUsubCK4bCWk%2B06L%2FFVyA%2Bi4wTqTfBwi51cXuXtiJWEr3NpbJsOPZseYi1R1VROmC%2BpE1ECIV8IPzEPvmUnYYJL%2F2Iskh5WMbLPF5EkocqPxS6uLdpUz&X-Amz-Signature=16d3319d5a372ce2fc2511870b7980721fce305aca67d6b860c1c5e6a05f417d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4FJDGO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQ2egxJILuiFU2XKKBnyMCNRs63SgjsvtggqFfsbuIaAiEAj%2B9wRQzZ9jDCbkVZ3MFtAPoqNuHuxnKuBmPBJexhay0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuhF022K5DaQhvoqyrcAxvZSoPh36ha1unW0e90b%2B4GFY024Pq6jw9HjrV12iHvNrzv7JDn94Xm136nyODAHFFKcKk0xy1aNjK9hUbpXCBeLRQWdLWK106CArLN35e8sW7o8oZAJHPBGlBzZpfobMiBUx2bw7WKmv6WhJo5mgMosIgLc7Pv37q9IALUmPut0L8IvYCuj8RQC7lQolNiq8FfDKY1jeN9%2BfcO0L%2FFsvnJugvZw4R%2F8wCxOOKC2dvIsrGf3NXOHU04TQN0%2FmK9QvsNnVZIXlcTaSM4YkLnJMvFXcjuKx1LslotXZX2bOKQLHqRauCJ7NeY8rxZR0JOJ2hd7S8cciEItoKG88CZilh5e66NbEHqbPbYEQQMStxBYKJIppRpqJkKLCOA6xbKbraUxN4YlkBGzPf7QV668j4nzxCPrlBHDynH43EudOo7QR0OOl2vG%2Fm%2FG8JH6Bei4d65tfNj4U%2FevT%2FoWifczNVJuhXJkmeCPjQvO6Vrw6sJJ9t6CMno15ZF1mRVNl%2FVmGUI2c5BqncgKd9xiBty%2Bg24ACWs6B5bX9eRZurCQZvoWZyDgBrYGyXNAm4e1iLDZZX5lGQTH%2Fiv%2FwS8mmAOM0s3nAGhC%2FgbmH%2F8UYHEDPDlkEkQn4mUJ1TwxJQhMJ2IkMMGOqUBQNE35oJOyqy3VLiAvvX640mmi56LaH5aga2%2BKGGnJzfIgoAWDPpi7ufzkgWjlbFhJLKRnJi2nCeiQG%2FT4jMaULNoF9oOqMGmX1qHVNqLPUsubCK4bCWk%2B06L%2FFVyA%2Bi4wTqTfBwi51cXuXtiJWEr3NpbJsOPZseYi1R1VROmC%2BpE1ECIV8IPzEPvmUnYYJL%2F2Iskh5WMbLPF5EkocqPxS6uLdpUz&X-Amz-Signature=ce5e18bbb0808733b24f243fa08fd9b633a8067f4116d997efb831c95a2dba97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
