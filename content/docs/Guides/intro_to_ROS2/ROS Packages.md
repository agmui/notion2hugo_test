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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTPLGGZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi6mlnziebt%2BnTwOlRey7Uig9ncyGPldegk2spqs8PTAiEAsGO4aocONj8A1MCdlPgBOPD4GV%2BTAMfGCqzFwlxN9FIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFMZoqmOxokNHHnR2SrcAwHSjdwee11EIHnWg%2FqD9oUZAAlBCQnRQjoEhHmgOi27KopuTc2bRnyJBHoVVa%2FpYmpfLD2%2BT5g1NhCWfnLGHue8FnZRyULF68v2HXnXBMG4KReaHiBI%2FOOoZBy8%2FHDs%2FuHOmSQ7Y5czzJ00eZV%2Faz%2BD2fSDQSmVTs5afIyqeYq88Glkfm%2B24Cnza%2FYc376hi6YaA%2FvGcyYis4%2FKCpabQokxHpmO9nGeCLbsyzknu95vspUNBHAr0h6KBAqsPVC%2F1wkbbpj4aCMEjTi1pekeAoQl0jhCLUOETFgSpoCRJMk%2FhulX3FgWmMqG0oaPw5T1VReLQ0RAXMJgveiHrk%2FSPLorniwZG6krQLRPMrIBt24GtN8%2BmvFDXnTVI5awgPvSBqeP86yQ9H95HAGu31Wy70DccphJSoyxFz7Qha87q5lMOgFIY0Jee2htf75OHV%2FhkuVDbg%2BxfwdcGTjCTewQPlwlkxrPw4tqK0EnyDw3qeQ0tcROJyITgO%2FmABx%2FSmVY62BHvyPY0vFQj%2BiN9wq7D3Ka7yW0nXoWx3tENJEdqWjrG1sxCgWCW5UrwHdVzjVkZ%2Bd5VgmPNynJM%2BF6KiIr5BsUFrzMubvXxXXBel3TtvWyFUpmHLb5%2By4RlEdCMMPG%2F78GOqUBozFS7Rfk%2BdV9lzkkqWFG9OIYppgqLPRC%2F1QyTO6d%2FIXL6eYkFNgFc1c4VDPIR56%2BbKgRQM0Ws%2BeKARMVoOsbYhOZksyq2Grhh56fYK3OLBtRlMGeqKrVzDYeafH7uzaISyMf3nhD7vUNZnY6kpNPxw26xTHmZJ%2B4RYN%2BajyMwG8SfCchUdaUrHKoyXjAW%2FI%2FSpadc3zmHDlIceaZm5oXx5Vva9AH&X-Amz-Signature=7c2ed27f99b3e84aa891888d8500fd8a10dc70e42d0366dee230dfa40b3fd2a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTPLGGZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi6mlnziebt%2BnTwOlRey7Uig9ncyGPldegk2spqs8PTAiEAsGO4aocONj8A1MCdlPgBOPD4GV%2BTAMfGCqzFwlxN9FIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFMZoqmOxokNHHnR2SrcAwHSjdwee11EIHnWg%2FqD9oUZAAlBCQnRQjoEhHmgOi27KopuTc2bRnyJBHoVVa%2FpYmpfLD2%2BT5g1NhCWfnLGHue8FnZRyULF68v2HXnXBMG4KReaHiBI%2FOOoZBy8%2FHDs%2FuHOmSQ7Y5czzJ00eZV%2Faz%2BD2fSDQSmVTs5afIyqeYq88Glkfm%2B24Cnza%2FYc376hi6YaA%2FvGcyYis4%2FKCpabQokxHpmO9nGeCLbsyzknu95vspUNBHAr0h6KBAqsPVC%2F1wkbbpj4aCMEjTi1pekeAoQl0jhCLUOETFgSpoCRJMk%2FhulX3FgWmMqG0oaPw5T1VReLQ0RAXMJgveiHrk%2FSPLorniwZG6krQLRPMrIBt24GtN8%2BmvFDXnTVI5awgPvSBqeP86yQ9H95HAGu31Wy70DccphJSoyxFz7Qha87q5lMOgFIY0Jee2htf75OHV%2FhkuVDbg%2BxfwdcGTjCTewQPlwlkxrPw4tqK0EnyDw3qeQ0tcROJyITgO%2FmABx%2FSmVY62BHvyPY0vFQj%2BiN9wq7D3Ka7yW0nXoWx3tENJEdqWjrG1sxCgWCW5UrwHdVzjVkZ%2Bd5VgmPNynJM%2BF6KiIr5BsUFrzMubvXxXXBel3TtvWyFUpmHLb5%2By4RlEdCMMPG%2F78GOqUBozFS7Rfk%2BdV9lzkkqWFG9OIYppgqLPRC%2F1QyTO6d%2FIXL6eYkFNgFc1c4VDPIR56%2BbKgRQM0Ws%2BeKARMVoOsbYhOZksyq2Grhh56fYK3OLBtRlMGeqKrVzDYeafH7uzaISyMf3nhD7vUNZnY6kpNPxw26xTHmZJ%2B4RYN%2BajyMwG8SfCchUdaUrHKoyXjAW%2FI%2FSpadc3zmHDlIceaZm5oXx5Vva9AH&X-Amz-Signature=ea3affa53fd07c83b2b490bbda46781d6606fc1e87755e6aa990f977be2226ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTPLGGZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi6mlnziebt%2BnTwOlRey7Uig9ncyGPldegk2spqs8PTAiEAsGO4aocONj8A1MCdlPgBOPD4GV%2BTAMfGCqzFwlxN9FIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFMZoqmOxokNHHnR2SrcAwHSjdwee11EIHnWg%2FqD9oUZAAlBCQnRQjoEhHmgOi27KopuTc2bRnyJBHoVVa%2FpYmpfLD2%2BT5g1NhCWfnLGHue8FnZRyULF68v2HXnXBMG4KReaHiBI%2FOOoZBy8%2FHDs%2FuHOmSQ7Y5czzJ00eZV%2Faz%2BD2fSDQSmVTs5afIyqeYq88Glkfm%2B24Cnza%2FYc376hi6YaA%2FvGcyYis4%2FKCpabQokxHpmO9nGeCLbsyzknu95vspUNBHAr0h6KBAqsPVC%2F1wkbbpj4aCMEjTi1pekeAoQl0jhCLUOETFgSpoCRJMk%2FhulX3FgWmMqG0oaPw5T1VReLQ0RAXMJgveiHrk%2FSPLorniwZG6krQLRPMrIBt24GtN8%2BmvFDXnTVI5awgPvSBqeP86yQ9H95HAGu31Wy70DccphJSoyxFz7Qha87q5lMOgFIY0Jee2htf75OHV%2FhkuVDbg%2BxfwdcGTjCTewQPlwlkxrPw4tqK0EnyDw3qeQ0tcROJyITgO%2FmABx%2FSmVY62BHvyPY0vFQj%2BiN9wq7D3Ka7yW0nXoWx3tENJEdqWjrG1sxCgWCW5UrwHdVzjVkZ%2Bd5VgmPNynJM%2BF6KiIr5BsUFrzMubvXxXXBel3TtvWyFUpmHLb5%2By4RlEdCMMPG%2F78GOqUBozFS7Rfk%2BdV9lzkkqWFG9OIYppgqLPRC%2F1QyTO6d%2FIXL6eYkFNgFc1c4VDPIR56%2BbKgRQM0Ws%2BeKARMVoOsbYhOZksyq2Grhh56fYK3OLBtRlMGeqKrVzDYeafH7uzaISyMf3nhD7vUNZnY6kpNPxw26xTHmZJ%2B4RYN%2BajyMwG8SfCchUdaUrHKoyXjAW%2FI%2FSpadc3zmHDlIceaZm5oXx5Vva9AH&X-Amz-Signature=8d70d1e17f6b70da583a52e0d9c508c31d3fc2a593129c85a1f369c1de2bd82a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTPLGGZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi6mlnziebt%2BnTwOlRey7Uig9ncyGPldegk2spqs8PTAiEAsGO4aocONj8A1MCdlPgBOPD4GV%2BTAMfGCqzFwlxN9FIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFMZoqmOxokNHHnR2SrcAwHSjdwee11EIHnWg%2FqD9oUZAAlBCQnRQjoEhHmgOi27KopuTc2bRnyJBHoVVa%2FpYmpfLD2%2BT5g1NhCWfnLGHue8FnZRyULF68v2HXnXBMG4KReaHiBI%2FOOoZBy8%2FHDs%2FuHOmSQ7Y5czzJ00eZV%2Faz%2BD2fSDQSmVTs5afIyqeYq88Glkfm%2B24Cnza%2FYc376hi6YaA%2FvGcyYis4%2FKCpabQokxHpmO9nGeCLbsyzknu95vspUNBHAr0h6KBAqsPVC%2F1wkbbpj4aCMEjTi1pekeAoQl0jhCLUOETFgSpoCRJMk%2FhulX3FgWmMqG0oaPw5T1VReLQ0RAXMJgveiHrk%2FSPLorniwZG6krQLRPMrIBt24GtN8%2BmvFDXnTVI5awgPvSBqeP86yQ9H95HAGu31Wy70DccphJSoyxFz7Qha87q5lMOgFIY0Jee2htf75OHV%2FhkuVDbg%2BxfwdcGTjCTewQPlwlkxrPw4tqK0EnyDw3qeQ0tcROJyITgO%2FmABx%2FSmVY62BHvyPY0vFQj%2BiN9wq7D3Ka7yW0nXoWx3tENJEdqWjrG1sxCgWCW5UrwHdVzjVkZ%2Bd5VgmPNynJM%2BF6KiIr5BsUFrzMubvXxXXBel3TtvWyFUpmHLb5%2By4RlEdCMMPG%2F78GOqUBozFS7Rfk%2BdV9lzkkqWFG9OIYppgqLPRC%2F1QyTO6d%2FIXL6eYkFNgFc1c4VDPIR56%2BbKgRQM0Ws%2BeKARMVoOsbYhOZksyq2Grhh56fYK3OLBtRlMGeqKrVzDYeafH7uzaISyMf3nhD7vUNZnY6kpNPxw26xTHmZJ%2B4RYN%2BajyMwG8SfCchUdaUrHKoyXjAW%2FI%2FSpadc3zmHDlIceaZm5oXx5Vva9AH&X-Amz-Signature=3afd000786395f5d5369e12fd8e099ac76336f09ce9f55cf1da39f82914f17cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTPLGGZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi6mlnziebt%2BnTwOlRey7Uig9ncyGPldegk2spqs8PTAiEAsGO4aocONj8A1MCdlPgBOPD4GV%2BTAMfGCqzFwlxN9FIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFMZoqmOxokNHHnR2SrcAwHSjdwee11EIHnWg%2FqD9oUZAAlBCQnRQjoEhHmgOi27KopuTc2bRnyJBHoVVa%2FpYmpfLD2%2BT5g1NhCWfnLGHue8FnZRyULF68v2HXnXBMG4KReaHiBI%2FOOoZBy8%2FHDs%2FuHOmSQ7Y5czzJ00eZV%2Faz%2BD2fSDQSmVTs5afIyqeYq88Glkfm%2B24Cnza%2FYc376hi6YaA%2FvGcyYis4%2FKCpabQokxHpmO9nGeCLbsyzknu95vspUNBHAr0h6KBAqsPVC%2F1wkbbpj4aCMEjTi1pekeAoQl0jhCLUOETFgSpoCRJMk%2FhulX3FgWmMqG0oaPw5T1VReLQ0RAXMJgveiHrk%2FSPLorniwZG6krQLRPMrIBt24GtN8%2BmvFDXnTVI5awgPvSBqeP86yQ9H95HAGu31Wy70DccphJSoyxFz7Qha87q5lMOgFIY0Jee2htf75OHV%2FhkuVDbg%2BxfwdcGTjCTewQPlwlkxrPw4tqK0EnyDw3qeQ0tcROJyITgO%2FmABx%2FSmVY62BHvyPY0vFQj%2BiN9wq7D3Ka7yW0nXoWx3tENJEdqWjrG1sxCgWCW5UrwHdVzjVkZ%2Bd5VgmPNynJM%2BF6KiIr5BsUFrzMubvXxXXBel3TtvWyFUpmHLb5%2By4RlEdCMMPG%2F78GOqUBozFS7Rfk%2BdV9lzkkqWFG9OIYppgqLPRC%2F1QyTO6d%2FIXL6eYkFNgFc1c4VDPIR56%2BbKgRQM0Ws%2BeKARMVoOsbYhOZksyq2Grhh56fYK3OLBtRlMGeqKrVzDYeafH7uzaISyMf3nhD7vUNZnY6kpNPxw26xTHmZJ%2B4RYN%2BajyMwG8SfCchUdaUrHKoyXjAW%2FI%2FSpadc3zmHDlIceaZm5oXx5Vva9AH&X-Amz-Signature=68dbb8852a6e8b780a7e7bb85db67a373d1b6003f12895ae25e4306a870eb0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTPLGGZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi6mlnziebt%2BnTwOlRey7Uig9ncyGPldegk2spqs8PTAiEAsGO4aocONj8A1MCdlPgBOPD4GV%2BTAMfGCqzFwlxN9FIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFMZoqmOxokNHHnR2SrcAwHSjdwee11EIHnWg%2FqD9oUZAAlBCQnRQjoEhHmgOi27KopuTc2bRnyJBHoVVa%2FpYmpfLD2%2BT5g1NhCWfnLGHue8FnZRyULF68v2HXnXBMG4KReaHiBI%2FOOoZBy8%2FHDs%2FuHOmSQ7Y5czzJ00eZV%2Faz%2BD2fSDQSmVTs5afIyqeYq88Glkfm%2B24Cnza%2FYc376hi6YaA%2FvGcyYis4%2FKCpabQokxHpmO9nGeCLbsyzknu95vspUNBHAr0h6KBAqsPVC%2F1wkbbpj4aCMEjTi1pekeAoQl0jhCLUOETFgSpoCRJMk%2FhulX3FgWmMqG0oaPw5T1VReLQ0RAXMJgveiHrk%2FSPLorniwZG6krQLRPMrIBt24GtN8%2BmvFDXnTVI5awgPvSBqeP86yQ9H95HAGu31Wy70DccphJSoyxFz7Qha87q5lMOgFIY0Jee2htf75OHV%2FhkuVDbg%2BxfwdcGTjCTewQPlwlkxrPw4tqK0EnyDw3qeQ0tcROJyITgO%2FmABx%2FSmVY62BHvyPY0vFQj%2BiN9wq7D3Ka7yW0nXoWx3tENJEdqWjrG1sxCgWCW5UrwHdVzjVkZ%2Bd5VgmPNynJM%2BF6KiIr5BsUFrzMubvXxXXBel3TtvWyFUpmHLb5%2By4RlEdCMMPG%2F78GOqUBozFS7Rfk%2BdV9lzkkqWFG9OIYppgqLPRC%2F1QyTO6d%2FIXL6eYkFNgFc1c4VDPIR56%2BbKgRQM0Ws%2BeKARMVoOsbYhOZksyq2Grhh56fYK3OLBtRlMGeqKrVzDYeafH7uzaISyMf3nhD7vUNZnY6kpNPxw26xTHmZJ%2B4RYN%2BajyMwG8SfCchUdaUrHKoyXjAW%2FI%2FSpadc3zmHDlIceaZm5oXx5Vva9AH&X-Amz-Signature=0689c99e9155518170e6233f63083283b4ff6d6690934ef7effca3c4204f8e28&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTPLGGZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi6mlnziebt%2BnTwOlRey7Uig9ncyGPldegk2spqs8PTAiEAsGO4aocONj8A1MCdlPgBOPD4GV%2BTAMfGCqzFwlxN9FIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFMZoqmOxokNHHnR2SrcAwHSjdwee11EIHnWg%2FqD9oUZAAlBCQnRQjoEhHmgOi27KopuTc2bRnyJBHoVVa%2FpYmpfLD2%2BT5g1NhCWfnLGHue8FnZRyULF68v2HXnXBMG4KReaHiBI%2FOOoZBy8%2FHDs%2FuHOmSQ7Y5czzJ00eZV%2Faz%2BD2fSDQSmVTs5afIyqeYq88Glkfm%2B24Cnza%2FYc376hi6YaA%2FvGcyYis4%2FKCpabQokxHpmO9nGeCLbsyzknu95vspUNBHAr0h6KBAqsPVC%2F1wkbbpj4aCMEjTi1pekeAoQl0jhCLUOETFgSpoCRJMk%2FhulX3FgWmMqG0oaPw5T1VReLQ0RAXMJgveiHrk%2FSPLorniwZG6krQLRPMrIBt24GtN8%2BmvFDXnTVI5awgPvSBqeP86yQ9H95HAGu31Wy70DccphJSoyxFz7Qha87q5lMOgFIY0Jee2htf75OHV%2FhkuVDbg%2BxfwdcGTjCTewQPlwlkxrPw4tqK0EnyDw3qeQ0tcROJyITgO%2FmABx%2FSmVY62BHvyPY0vFQj%2BiN9wq7D3Ka7yW0nXoWx3tENJEdqWjrG1sxCgWCW5UrwHdVzjVkZ%2Bd5VgmPNynJM%2BF6KiIr5BsUFrzMubvXxXXBel3TtvWyFUpmHLb5%2By4RlEdCMMPG%2F78GOqUBozFS7Rfk%2BdV9lzkkqWFG9OIYppgqLPRC%2F1QyTO6d%2FIXL6eYkFNgFc1c4VDPIR56%2BbKgRQM0Ws%2BeKARMVoOsbYhOZksyq2Grhh56fYK3OLBtRlMGeqKrVzDYeafH7uzaISyMf3nhD7vUNZnY6kpNPxw26xTHmZJ%2B4RYN%2BajyMwG8SfCchUdaUrHKoyXjAW%2FI%2FSpadc3zmHDlIceaZm5oXx5Vva9AH&X-Amz-Signature=40241fd4299e94cd8106cc74231d7f58797c55473bd35f1e6dbf294b9320e757&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
