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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4OXQYR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Vz1uoeG2VaXBiHoVYr2gmKHuzy1IwtP80HV0IP1BlgIgAcI5MM%2FBecb3NitEGbgMIVKpAdmAkeSVeerG2a%2BSEIIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEvdkD9f1dQW0Xyb1ircA5Ezssw0bYHS1dlRSEhPMMz3dGO9PiWg8Lxm2cIJhr3U8EekGq4IGfT0ExyFxLtjCXWkNgdHUld9T8vyIJktukFIMpLK1PKCC6xRBtTpJJDZjNOEhtctcaPciKgdlA8vLdTNBFPNQv%2FAY9Rha2%2BNQedygkTXPCq5QyFVcTggThLrm1fVORFv7gi9zt2rUgtCNMBxHRY4Wm%2Fxq8ORdYDoPGBRMSMPTw70gIOCmIvu6TsMyAzxm0GW%2F42AuAqL41W3%2BUFwKwpSxh4JISZG7sd5HkGNFlMBTZCL6Ki0nsQHjaa4wGALwy3bY%2BfEluWLHer2i9JsF9kkqY83EHbjKjRLS%2BIfeneK37P3f5QfSV4P2mtJZzJ%2BGcqviJoOeU7Fs3wfvCh5sqFSk4VC%2BP6IxPPEzh8d3PzraRL3tbHSrb2Nr4kwSylDTpuqHS1PM9ChOw8ifT4NelcmMkLnXIEM%2FIO8xTlhEuASXbHwLiwtpVScdPKZQak2AlCyRY195unry3FuYrfRhTWwVFwkwyiwB8%2BKJo03gAriQT570gUnYB94HH2ueEr6SzkAgy%2BZm%2BhLibrMVzbzh%2FIOeF7cD39U99D9i8%2Fx1Q%2B4WeRShH94mRgFLEbWE%2BpMVHYD3qmunQ00MKb1hsAGOqUBc066REsQafXsagAl9mXMDScjCz5gm56%2FSpM1XdqEm4%2FWHVcMnWRJquvZvckA2Q3atm%2B6ddoOqHmmNQ5T%2BbA7ksbR1RqA0O7rggPKzczenEsTrr%2BCuP%2BX6NjVdO3cO2kNvxTZUv12OulQECbjkPeTaCS%2BI1tbqckKQ%2FXm61bdlDoCGiU4iXLYVZii9V0xjee0QN1TS2g5Y%2BHVUXSAkT7TcsUX66CG&X-Amz-Signature=4308ffc34a79a539d663ea50c050a7d55633af1ca7063fff60d800a8ad92c263&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4OXQYR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Vz1uoeG2VaXBiHoVYr2gmKHuzy1IwtP80HV0IP1BlgIgAcI5MM%2FBecb3NitEGbgMIVKpAdmAkeSVeerG2a%2BSEIIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEvdkD9f1dQW0Xyb1ircA5Ezssw0bYHS1dlRSEhPMMz3dGO9PiWg8Lxm2cIJhr3U8EekGq4IGfT0ExyFxLtjCXWkNgdHUld9T8vyIJktukFIMpLK1PKCC6xRBtTpJJDZjNOEhtctcaPciKgdlA8vLdTNBFPNQv%2FAY9Rha2%2BNQedygkTXPCq5QyFVcTggThLrm1fVORFv7gi9zt2rUgtCNMBxHRY4Wm%2Fxq8ORdYDoPGBRMSMPTw70gIOCmIvu6TsMyAzxm0GW%2F42AuAqL41W3%2BUFwKwpSxh4JISZG7sd5HkGNFlMBTZCL6Ki0nsQHjaa4wGALwy3bY%2BfEluWLHer2i9JsF9kkqY83EHbjKjRLS%2BIfeneK37P3f5QfSV4P2mtJZzJ%2BGcqviJoOeU7Fs3wfvCh5sqFSk4VC%2BP6IxPPEzh8d3PzraRL3tbHSrb2Nr4kwSylDTpuqHS1PM9ChOw8ifT4NelcmMkLnXIEM%2FIO8xTlhEuASXbHwLiwtpVScdPKZQak2AlCyRY195unry3FuYrfRhTWwVFwkwyiwB8%2BKJo03gAriQT570gUnYB94HH2ueEr6SzkAgy%2BZm%2BhLibrMVzbzh%2FIOeF7cD39U99D9i8%2Fx1Q%2B4WeRShH94mRgFLEbWE%2BpMVHYD3qmunQ00MKb1hsAGOqUBc066REsQafXsagAl9mXMDScjCz5gm56%2FSpM1XdqEm4%2FWHVcMnWRJquvZvckA2Q3atm%2B6ddoOqHmmNQ5T%2BbA7ksbR1RqA0O7rggPKzczenEsTrr%2BCuP%2BX6NjVdO3cO2kNvxTZUv12OulQECbjkPeTaCS%2BI1tbqckKQ%2FXm61bdlDoCGiU4iXLYVZii9V0xjee0QN1TS2g5Y%2BHVUXSAkT7TcsUX66CG&X-Amz-Signature=56c5d5b8f946cdf32130edb4c0e8a43c16d5458801f24afdd69ec75b7c99da39&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4OXQYR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Vz1uoeG2VaXBiHoVYr2gmKHuzy1IwtP80HV0IP1BlgIgAcI5MM%2FBecb3NitEGbgMIVKpAdmAkeSVeerG2a%2BSEIIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEvdkD9f1dQW0Xyb1ircA5Ezssw0bYHS1dlRSEhPMMz3dGO9PiWg8Lxm2cIJhr3U8EekGq4IGfT0ExyFxLtjCXWkNgdHUld9T8vyIJktukFIMpLK1PKCC6xRBtTpJJDZjNOEhtctcaPciKgdlA8vLdTNBFPNQv%2FAY9Rha2%2BNQedygkTXPCq5QyFVcTggThLrm1fVORFv7gi9zt2rUgtCNMBxHRY4Wm%2Fxq8ORdYDoPGBRMSMPTw70gIOCmIvu6TsMyAzxm0GW%2F42AuAqL41W3%2BUFwKwpSxh4JISZG7sd5HkGNFlMBTZCL6Ki0nsQHjaa4wGALwy3bY%2BfEluWLHer2i9JsF9kkqY83EHbjKjRLS%2BIfeneK37P3f5QfSV4P2mtJZzJ%2BGcqviJoOeU7Fs3wfvCh5sqFSk4VC%2BP6IxPPEzh8d3PzraRL3tbHSrb2Nr4kwSylDTpuqHS1PM9ChOw8ifT4NelcmMkLnXIEM%2FIO8xTlhEuASXbHwLiwtpVScdPKZQak2AlCyRY195unry3FuYrfRhTWwVFwkwyiwB8%2BKJo03gAriQT570gUnYB94HH2ueEr6SzkAgy%2BZm%2BhLibrMVzbzh%2FIOeF7cD39U99D9i8%2Fx1Q%2B4WeRShH94mRgFLEbWE%2BpMVHYD3qmunQ00MKb1hsAGOqUBc066REsQafXsagAl9mXMDScjCz5gm56%2FSpM1XdqEm4%2FWHVcMnWRJquvZvckA2Q3atm%2B6ddoOqHmmNQ5T%2BbA7ksbR1RqA0O7rggPKzczenEsTrr%2BCuP%2BX6NjVdO3cO2kNvxTZUv12OulQECbjkPeTaCS%2BI1tbqckKQ%2FXm61bdlDoCGiU4iXLYVZii9V0xjee0QN1TS2g5Y%2BHVUXSAkT7TcsUX66CG&X-Amz-Signature=f11e34329e9bec32c2218d06ab8e62cd5ce26d1d9df822a8fe579081dca7adcd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4OXQYR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Vz1uoeG2VaXBiHoVYr2gmKHuzy1IwtP80HV0IP1BlgIgAcI5MM%2FBecb3NitEGbgMIVKpAdmAkeSVeerG2a%2BSEIIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEvdkD9f1dQW0Xyb1ircA5Ezssw0bYHS1dlRSEhPMMz3dGO9PiWg8Lxm2cIJhr3U8EekGq4IGfT0ExyFxLtjCXWkNgdHUld9T8vyIJktukFIMpLK1PKCC6xRBtTpJJDZjNOEhtctcaPciKgdlA8vLdTNBFPNQv%2FAY9Rha2%2BNQedygkTXPCq5QyFVcTggThLrm1fVORFv7gi9zt2rUgtCNMBxHRY4Wm%2Fxq8ORdYDoPGBRMSMPTw70gIOCmIvu6TsMyAzxm0GW%2F42AuAqL41W3%2BUFwKwpSxh4JISZG7sd5HkGNFlMBTZCL6Ki0nsQHjaa4wGALwy3bY%2BfEluWLHer2i9JsF9kkqY83EHbjKjRLS%2BIfeneK37P3f5QfSV4P2mtJZzJ%2BGcqviJoOeU7Fs3wfvCh5sqFSk4VC%2BP6IxPPEzh8d3PzraRL3tbHSrb2Nr4kwSylDTpuqHS1PM9ChOw8ifT4NelcmMkLnXIEM%2FIO8xTlhEuASXbHwLiwtpVScdPKZQak2AlCyRY195unry3FuYrfRhTWwVFwkwyiwB8%2BKJo03gAriQT570gUnYB94HH2ueEr6SzkAgy%2BZm%2BhLibrMVzbzh%2FIOeF7cD39U99D9i8%2Fx1Q%2B4WeRShH94mRgFLEbWE%2BpMVHYD3qmunQ00MKb1hsAGOqUBc066REsQafXsagAl9mXMDScjCz5gm56%2FSpM1XdqEm4%2FWHVcMnWRJquvZvckA2Q3atm%2B6ddoOqHmmNQ5T%2BbA7ksbR1RqA0O7rggPKzczenEsTrr%2BCuP%2BX6NjVdO3cO2kNvxTZUv12OulQECbjkPeTaCS%2BI1tbqckKQ%2FXm61bdlDoCGiU4iXLYVZii9V0xjee0QN1TS2g5Y%2BHVUXSAkT7TcsUX66CG&X-Amz-Signature=ff2716bebb969023134bd5ff635621c8b0ea754a4faa9e33cd91359ee0900bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4OXQYR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Vz1uoeG2VaXBiHoVYr2gmKHuzy1IwtP80HV0IP1BlgIgAcI5MM%2FBecb3NitEGbgMIVKpAdmAkeSVeerG2a%2BSEIIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEvdkD9f1dQW0Xyb1ircA5Ezssw0bYHS1dlRSEhPMMz3dGO9PiWg8Lxm2cIJhr3U8EekGq4IGfT0ExyFxLtjCXWkNgdHUld9T8vyIJktukFIMpLK1PKCC6xRBtTpJJDZjNOEhtctcaPciKgdlA8vLdTNBFPNQv%2FAY9Rha2%2BNQedygkTXPCq5QyFVcTggThLrm1fVORFv7gi9zt2rUgtCNMBxHRY4Wm%2Fxq8ORdYDoPGBRMSMPTw70gIOCmIvu6TsMyAzxm0GW%2F42AuAqL41W3%2BUFwKwpSxh4JISZG7sd5HkGNFlMBTZCL6Ki0nsQHjaa4wGALwy3bY%2BfEluWLHer2i9JsF9kkqY83EHbjKjRLS%2BIfeneK37P3f5QfSV4P2mtJZzJ%2BGcqviJoOeU7Fs3wfvCh5sqFSk4VC%2BP6IxPPEzh8d3PzraRL3tbHSrb2Nr4kwSylDTpuqHS1PM9ChOw8ifT4NelcmMkLnXIEM%2FIO8xTlhEuASXbHwLiwtpVScdPKZQak2AlCyRY195unry3FuYrfRhTWwVFwkwyiwB8%2BKJo03gAriQT570gUnYB94HH2ueEr6SzkAgy%2BZm%2BhLibrMVzbzh%2FIOeF7cD39U99D9i8%2Fx1Q%2B4WeRShH94mRgFLEbWE%2BpMVHYD3qmunQ00MKb1hsAGOqUBc066REsQafXsagAl9mXMDScjCz5gm56%2FSpM1XdqEm4%2FWHVcMnWRJquvZvckA2Q3atm%2B6ddoOqHmmNQ5T%2BbA7ksbR1RqA0O7rggPKzczenEsTrr%2BCuP%2BX6NjVdO3cO2kNvxTZUv12OulQECbjkPeTaCS%2BI1tbqckKQ%2FXm61bdlDoCGiU4iXLYVZii9V0xjee0QN1TS2g5Y%2BHVUXSAkT7TcsUX66CG&X-Amz-Signature=d5a77aa53bdf39eabc10a37ac7cd0474553ee39ac31a9653704da5f0b9cda392&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4OXQYR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Vz1uoeG2VaXBiHoVYr2gmKHuzy1IwtP80HV0IP1BlgIgAcI5MM%2FBecb3NitEGbgMIVKpAdmAkeSVeerG2a%2BSEIIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEvdkD9f1dQW0Xyb1ircA5Ezssw0bYHS1dlRSEhPMMz3dGO9PiWg8Lxm2cIJhr3U8EekGq4IGfT0ExyFxLtjCXWkNgdHUld9T8vyIJktukFIMpLK1PKCC6xRBtTpJJDZjNOEhtctcaPciKgdlA8vLdTNBFPNQv%2FAY9Rha2%2BNQedygkTXPCq5QyFVcTggThLrm1fVORFv7gi9zt2rUgtCNMBxHRY4Wm%2Fxq8ORdYDoPGBRMSMPTw70gIOCmIvu6TsMyAzxm0GW%2F42AuAqL41W3%2BUFwKwpSxh4JISZG7sd5HkGNFlMBTZCL6Ki0nsQHjaa4wGALwy3bY%2BfEluWLHer2i9JsF9kkqY83EHbjKjRLS%2BIfeneK37P3f5QfSV4P2mtJZzJ%2BGcqviJoOeU7Fs3wfvCh5sqFSk4VC%2BP6IxPPEzh8d3PzraRL3tbHSrb2Nr4kwSylDTpuqHS1PM9ChOw8ifT4NelcmMkLnXIEM%2FIO8xTlhEuASXbHwLiwtpVScdPKZQak2AlCyRY195unry3FuYrfRhTWwVFwkwyiwB8%2BKJo03gAriQT570gUnYB94HH2ueEr6SzkAgy%2BZm%2BhLibrMVzbzh%2FIOeF7cD39U99D9i8%2Fx1Q%2B4WeRShH94mRgFLEbWE%2BpMVHYD3qmunQ00MKb1hsAGOqUBc066REsQafXsagAl9mXMDScjCz5gm56%2FSpM1XdqEm4%2FWHVcMnWRJquvZvckA2Q3atm%2B6ddoOqHmmNQ5T%2BbA7ksbR1RqA0O7rggPKzczenEsTrr%2BCuP%2BX6NjVdO3cO2kNvxTZUv12OulQECbjkPeTaCS%2BI1tbqckKQ%2FXm61bdlDoCGiU4iXLYVZii9V0xjee0QN1TS2g5Y%2BHVUXSAkT7TcsUX66CG&X-Amz-Signature=625af1132ceeca49016ef52ff4a192db0cf2ff6179bf419652eb512dce40a6ab&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4OXQYR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Vz1uoeG2VaXBiHoVYr2gmKHuzy1IwtP80HV0IP1BlgIgAcI5MM%2FBecb3NitEGbgMIVKpAdmAkeSVeerG2a%2BSEIIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEvdkD9f1dQW0Xyb1ircA5Ezssw0bYHS1dlRSEhPMMz3dGO9PiWg8Lxm2cIJhr3U8EekGq4IGfT0ExyFxLtjCXWkNgdHUld9T8vyIJktukFIMpLK1PKCC6xRBtTpJJDZjNOEhtctcaPciKgdlA8vLdTNBFPNQv%2FAY9Rha2%2BNQedygkTXPCq5QyFVcTggThLrm1fVORFv7gi9zt2rUgtCNMBxHRY4Wm%2Fxq8ORdYDoPGBRMSMPTw70gIOCmIvu6TsMyAzxm0GW%2F42AuAqL41W3%2BUFwKwpSxh4JISZG7sd5HkGNFlMBTZCL6Ki0nsQHjaa4wGALwy3bY%2BfEluWLHer2i9JsF9kkqY83EHbjKjRLS%2BIfeneK37P3f5QfSV4P2mtJZzJ%2BGcqviJoOeU7Fs3wfvCh5sqFSk4VC%2BP6IxPPEzh8d3PzraRL3tbHSrb2Nr4kwSylDTpuqHS1PM9ChOw8ifT4NelcmMkLnXIEM%2FIO8xTlhEuASXbHwLiwtpVScdPKZQak2AlCyRY195unry3FuYrfRhTWwVFwkwyiwB8%2BKJo03gAriQT570gUnYB94HH2ueEr6SzkAgy%2BZm%2BhLibrMVzbzh%2FIOeF7cD39U99D9i8%2Fx1Q%2B4WeRShH94mRgFLEbWE%2BpMVHYD3qmunQ00MKb1hsAGOqUBc066REsQafXsagAl9mXMDScjCz5gm56%2FSpM1XdqEm4%2FWHVcMnWRJquvZvckA2Q3atm%2B6ddoOqHmmNQ5T%2BbA7ksbR1RqA0O7rggPKzczenEsTrr%2BCuP%2BX6NjVdO3cO2kNvxTZUv12OulQECbjkPeTaCS%2BI1tbqckKQ%2FXm61bdlDoCGiU4iXLYVZii9V0xjee0QN1TS2g5Y%2BHVUXSAkT7TcsUX66CG&X-Amz-Signature=11c54bf14e893e5a1f022110277f8ed2182fab71042715c216adcc1d78e0f24e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
