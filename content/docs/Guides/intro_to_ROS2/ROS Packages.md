---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUTTIPW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGU12nV9opMU3I%2FdfnOamk3soKUL%2FPkLe6VkVKU8%2FEAiEAmCprKeNwoxttzkh%2BtII9O00JCzD2wiAbAw9afTZW%2F98qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKMe3I3X6P6r1N3vCrcA0P0P4ObOu7YoJaffmfbizT0y4b17Os%2Bc5NL1P7%2BYlWUfTIQGz45yOUlGfrbIT991suDEbbQL5Oh1rqDAgB8e8S6%2F07JE%2FedV6Wxz5sdFBmiWbnojAtwsBedc59O85kpmFqc6sm0ETtn1DKz8dpUXFws1ONH%2FYXts1X4Ckbsa%2FbiJ1hYzMWayzeYSTd80rOCeGrpKtL9u1A25E2Ib6oeSYi71ZZHDqgATxwpVqCElemifJEwvn3Hq%2BX8oxYTlTrtxHOdvce7qPNloQ0BxpE1Ifl0jGg6w%2FEMhuHiSpj%2FVmcbzj2mrKn35XFI0DHkb8vpT9UFuR2bVMoh%2Fl0m2FpW%2FzeDS9%2FBAce5Y%2BuGDE%2FbyoPvOoc3ZKpXTmkbhgYspV%2FPUjPLqQEZIsEc0PJViWshmOX%2BSCxv6VDLpKmgHL4%2BUX%2FbhGr2oqIebdEXi0%2Fpb2HerwqHBHE10pB2GsnvzkKrGL7PwBvkdjKuzuukRvZlx3GjBGbRY9R1pJQQLC0Ko%2BThQX6wD1F4L2DMfvmKpGOCw45qo4aucfZm5RYEcTctmaFsZdOex0HXCBDXCUbkZvxJhK6zM9suSsxVMHyFF0NxPEZBiw%2F44PoRPeAikB1vUi%2FKbZGMaZb8KeNYwD3eMO2ctsQGOqUB61kUauzvqp1%2FzgE2ArR88EUBJr3GKJMCnFGijwrJHlaXHhkBOPBLBjga1aeYyxZltQwwPJYo03v113Jqvs2C%2B%2B4aMp0jzkG7bzmbnqnDradJ7v0PzlWMl0iXFgtfU%2FRZ33Z289HMcrqg2ustkqN9R1cRjMlefbr%2BAlzMihfJ8Cm9sv9uLR5vhbm1t%2B5QO9nqsHn2HnF0tPqAOq88VNQ%2FbwArGHK8&X-Amz-Signature=6495d87e0276144c8877d2669949e22c20de1503c9d136be590a0ec8feae6000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUTTIPW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGU12nV9opMU3I%2FdfnOamk3soKUL%2FPkLe6VkVKU8%2FEAiEAmCprKeNwoxttzkh%2BtII9O00JCzD2wiAbAw9afTZW%2F98qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKMe3I3X6P6r1N3vCrcA0P0P4ObOu7YoJaffmfbizT0y4b17Os%2Bc5NL1P7%2BYlWUfTIQGz45yOUlGfrbIT991suDEbbQL5Oh1rqDAgB8e8S6%2F07JE%2FedV6Wxz5sdFBmiWbnojAtwsBedc59O85kpmFqc6sm0ETtn1DKz8dpUXFws1ONH%2FYXts1X4Ckbsa%2FbiJ1hYzMWayzeYSTd80rOCeGrpKtL9u1A25E2Ib6oeSYi71ZZHDqgATxwpVqCElemifJEwvn3Hq%2BX8oxYTlTrtxHOdvce7qPNloQ0BxpE1Ifl0jGg6w%2FEMhuHiSpj%2FVmcbzj2mrKn35XFI0DHkb8vpT9UFuR2bVMoh%2Fl0m2FpW%2FzeDS9%2FBAce5Y%2BuGDE%2FbyoPvOoc3ZKpXTmkbhgYspV%2FPUjPLqQEZIsEc0PJViWshmOX%2BSCxv6VDLpKmgHL4%2BUX%2FbhGr2oqIebdEXi0%2Fpb2HerwqHBHE10pB2GsnvzkKrGL7PwBvkdjKuzuukRvZlx3GjBGbRY9R1pJQQLC0Ko%2BThQX6wD1F4L2DMfvmKpGOCw45qo4aucfZm5RYEcTctmaFsZdOex0HXCBDXCUbkZvxJhK6zM9suSsxVMHyFF0NxPEZBiw%2F44PoRPeAikB1vUi%2FKbZGMaZb8KeNYwD3eMO2ctsQGOqUB61kUauzvqp1%2FzgE2ArR88EUBJr3GKJMCnFGijwrJHlaXHhkBOPBLBjga1aeYyxZltQwwPJYo03v113Jqvs2C%2B%2B4aMp0jzkG7bzmbnqnDradJ7v0PzlWMl0iXFgtfU%2FRZ33Z289HMcrqg2ustkqN9R1cRjMlefbr%2BAlzMihfJ8Cm9sv9uLR5vhbm1t%2B5QO9nqsHn2HnF0tPqAOq88VNQ%2FbwArGHK8&X-Amz-Signature=b847a9eabfb75a6e13a54954f07fd19bf9d2c3aa83656c2b1707c6fa7e47a1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUTTIPW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGU12nV9opMU3I%2FdfnOamk3soKUL%2FPkLe6VkVKU8%2FEAiEAmCprKeNwoxttzkh%2BtII9O00JCzD2wiAbAw9afTZW%2F98qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKMe3I3X6P6r1N3vCrcA0P0P4ObOu7YoJaffmfbizT0y4b17Os%2Bc5NL1P7%2BYlWUfTIQGz45yOUlGfrbIT991suDEbbQL5Oh1rqDAgB8e8S6%2F07JE%2FedV6Wxz5sdFBmiWbnojAtwsBedc59O85kpmFqc6sm0ETtn1DKz8dpUXFws1ONH%2FYXts1X4Ckbsa%2FbiJ1hYzMWayzeYSTd80rOCeGrpKtL9u1A25E2Ib6oeSYi71ZZHDqgATxwpVqCElemifJEwvn3Hq%2BX8oxYTlTrtxHOdvce7qPNloQ0BxpE1Ifl0jGg6w%2FEMhuHiSpj%2FVmcbzj2mrKn35XFI0DHkb8vpT9UFuR2bVMoh%2Fl0m2FpW%2FzeDS9%2FBAce5Y%2BuGDE%2FbyoPvOoc3ZKpXTmkbhgYspV%2FPUjPLqQEZIsEc0PJViWshmOX%2BSCxv6VDLpKmgHL4%2BUX%2FbhGr2oqIebdEXi0%2Fpb2HerwqHBHE10pB2GsnvzkKrGL7PwBvkdjKuzuukRvZlx3GjBGbRY9R1pJQQLC0Ko%2BThQX6wD1F4L2DMfvmKpGOCw45qo4aucfZm5RYEcTctmaFsZdOex0HXCBDXCUbkZvxJhK6zM9suSsxVMHyFF0NxPEZBiw%2F44PoRPeAikB1vUi%2FKbZGMaZb8KeNYwD3eMO2ctsQGOqUB61kUauzvqp1%2FzgE2ArR88EUBJr3GKJMCnFGijwrJHlaXHhkBOPBLBjga1aeYyxZltQwwPJYo03v113Jqvs2C%2B%2B4aMp0jzkG7bzmbnqnDradJ7v0PzlWMl0iXFgtfU%2FRZ33Z289HMcrqg2ustkqN9R1cRjMlefbr%2BAlzMihfJ8Cm9sv9uLR5vhbm1t%2B5QO9nqsHn2HnF0tPqAOq88VNQ%2FbwArGHK8&X-Amz-Signature=8e92fe44f38aa0cde9743156b0790073789dd6318edb5f593dd38a1a73782f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUTTIPW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGU12nV9opMU3I%2FdfnOamk3soKUL%2FPkLe6VkVKU8%2FEAiEAmCprKeNwoxttzkh%2BtII9O00JCzD2wiAbAw9afTZW%2F98qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKMe3I3X6P6r1N3vCrcA0P0P4ObOu7YoJaffmfbizT0y4b17Os%2Bc5NL1P7%2BYlWUfTIQGz45yOUlGfrbIT991suDEbbQL5Oh1rqDAgB8e8S6%2F07JE%2FedV6Wxz5sdFBmiWbnojAtwsBedc59O85kpmFqc6sm0ETtn1DKz8dpUXFws1ONH%2FYXts1X4Ckbsa%2FbiJ1hYzMWayzeYSTd80rOCeGrpKtL9u1A25E2Ib6oeSYi71ZZHDqgATxwpVqCElemifJEwvn3Hq%2BX8oxYTlTrtxHOdvce7qPNloQ0BxpE1Ifl0jGg6w%2FEMhuHiSpj%2FVmcbzj2mrKn35XFI0DHkb8vpT9UFuR2bVMoh%2Fl0m2FpW%2FzeDS9%2FBAce5Y%2BuGDE%2FbyoPvOoc3ZKpXTmkbhgYspV%2FPUjPLqQEZIsEc0PJViWshmOX%2BSCxv6VDLpKmgHL4%2BUX%2FbhGr2oqIebdEXi0%2Fpb2HerwqHBHE10pB2GsnvzkKrGL7PwBvkdjKuzuukRvZlx3GjBGbRY9R1pJQQLC0Ko%2BThQX6wD1F4L2DMfvmKpGOCw45qo4aucfZm5RYEcTctmaFsZdOex0HXCBDXCUbkZvxJhK6zM9suSsxVMHyFF0NxPEZBiw%2F44PoRPeAikB1vUi%2FKbZGMaZb8KeNYwD3eMO2ctsQGOqUB61kUauzvqp1%2FzgE2ArR88EUBJr3GKJMCnFGijwrJHlaXHhkBOPBLBjga1aeYyxZltQwwPJYo03v113Jqvs2C%2B%2B4aMp0jzkG7bzmbnqnDradJ7v0PzlWMl0iXFgtfU%2FRZ33Z289HMcrqg2ustkqN9R1cRjMlefbr%2BAlzMihfJ8Cm9sv9uLR5vhbm1t%2B5QO9nqsHn2HnF0tPqAOq88VNQ%2FbwArGHK8&X-Amz-Signature=9df251c2b033f50c0a97c2bdb82d08aa313026b495816f1fa5546b08759af4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUTTIPW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGU12nV9opMU3I%2FdfnOamk3soKUL%2FPkLe6VkVKU8%2FEAiEAmCprKeNwoxttzkh%2BtII9O00JCzD2wiAbAw9afTZW%2F98qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKMe3I3X6P6r1N3vCrcA0P0P4ObOu7YoJaffmfbizT0y4b17Os%2Bc5NL1P7%2BYlWUfTIQGz45yOUlGfrbIT991suDEbbQL5Oh1rqDAgB8e8S6%2F07JE%2FedV6Wxz5sdFBmiWbnojAtwsBedc59O85kpmFqc6sm0ETtn1DKz8dpUXFws1ONH%2FYXts1X4Ckbsa%2FbiJ1hYzMWayzeYSTd80rOCeGrpKtL9u1A25E2Ib6oeSYi71ZZHDqgATxwpVqCElemifJEwvn3Hq%2BX8oxYTlTrtxHOdvce7qPNloQ0BxpE1Ifl0jGg6w%2FEMhuHiSpj%2FVmcbzj2mrKn35XFI0DHkb8vpT9UFuR2bVMoh%2Fl0m2FpW%2FzeDS9%2FBAce5Y%2BuGDE%2FbyoPvOoc3ZKpXTmkbhgYspV%2FPUjPLqQEZIsEc0PJViWshmOX%2BSCxv6VDLpKmgHL4%2BUX%2FbhGr2oqIebdEXi0%2Fpb2HerwqHBHE10pB2GsnvzkKrGL7PwBvkdjKuzuukRvZlx3GjBGbRY9R1pJQQLC0Ko%2BThQX6wD1F4L2DMfvmKpGOCw45qo4aucfZm5RYEcTctmaFsZdOex0HXCBDXCUbkZvxJhK6zM9suSsxVMHyFF0NxPEZBiw%2F44PoRPeAikB1vUi%2FKbZGMaZb8KeNYwD3eMO2ctsQGOqUB61kUauzvqp1%2FzgE2ArR88EUBJr3GKJMCnFGijwrJHlaXHhkBOPBLBjga1aeYyxZltQwwPJYo03v113Jqvs2C%2B%2B4aMp0jzkG7bzmbnqnDradJ7v0PzlWMl0iXFgtfU%2FRZ33Z289HMcrqg2ustkqN9R1cRjMlefbr%2BAlzMihfJ8Cm9sv9uLR5vhbm1t%2B5QO9nqsHn2HnF0tPqAOq88VNQ%2FbwArGHK8&X-Amz-Signature=2d49e43ec7fa30658726c04590f9168190e0b65b26ecad6481cb608e70d8b66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUTTIPW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGU12nV9opMU3I%2FdfnOamk3soKUL%2FPkLe6VkVKU8%2FEAiEAmCprKeNwoxttzkh%2BtII9O00JCzD2wiAbAw9afTZW%2F98qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKMe3I3X6P6r1N3vCrcA0P0P4ObOu7YoJaffmfbizT0y4b17Os%2Bc5NL1P7%2BYlWUfTIQGz45yOUlGfrbIT991suDEbbQL5Oh1rqDAgB8e8S6%2F07JE%2FedV6Wxz5sdFBmiWbnojAtwsBedc59O85kpmFqc6sm0ETtn1DKz8dpUXFws1ONH%2FYXts1X4Ckbsa%2FbiJ1hYzMWayzeYSTd80rOCeGrpKtL9u1A25E2Ib6oeSYi71ZZHDqgATxwpVqCElemifJEwvn3Hq%2BX8oxYTlTrtxHOdvce7qPNloQ0BxpE1Ifl0jGg6w%2FEMhuHiSpj%2FVmcbzj2mrKn35XFI0DHkb8vpT9UFuR2bVMoh%2Fl0m2FpW%2FzeDS9%2FBAce5Y%2BuGDE%2FbyoPvOoc3ZKpXTmkbhgYspV%2FPUjPLqQEZIsEc0PJViWshmOX%2BSCxv6VDLpKmgHL4%2BUX%2FbhGr2oqIebdEXi0%2Fpb2HerwqHBHE10pB2GsnvzkKrGL7PwBvkdjKuzuukRvZlx3GjBGbRY9R1pJQQLC0Ko%2BThQX6wD1F4L2DMfvmKpGOCw45qo4aucfZm5RYEcTctmaFsZdOex0HXCBDXCUbkZvxJhK6zM9suSsxVMHyFF0NxPEZBiw%2F44PoRPeAikB1vUi%2FKbZGMaZb8KeNYwD3eMO2ctsQGOqUB61kUauzvqp1%2FzgE2ArR88EUBJr3GKJMCnFGijwrJHlaXHhkBOPBLBjga1aeYyxZltQwwPJYo03v113Jqvs2C%2B%2B4aMp0jzkG7bzmbnqnDradJ7v0PzlWMl0iXFgtfU%2FRZ33Z289HMcrqg2ustkqN9R1cRjMlefbr%2BAlzMihfJ8Cm9sv9uLR5vhbm1t%2B5QO9nqsHn2HnF0tPqAOq88VNQ%2FbwArGHK8&X-Amz-Signature=168a88fb3b94cb6bb6a6d03571f85f4c8d089cc0874016c0885eab155e71eff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUTTIPW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGU12nV9opMU3I%2FdfnOamk3soKUL%2FPkLe6VkVKU8%2FEAiEAmCprKeNwoxttzkh%2BtII9O00JCzD2wiAbAw9afTZW%2F98qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKMe3I3X6P6r1N3vCrcA0P0P4ObOu7YoJaffmfbizT0y4b17Os%2Bc5NL1P7%2BYlWUfTIQGz45yOUlGfrbIT991suDEbbQL5Oh1rqDAgB8e8S6%2F07JE%2FedV6Wxz5sdFBmiWbnojAtwsBedc59O85kpmFqc6sm0ETtn1DKz8dpUXFws1ONH%2FYXts1X4Ckbsa%2FbiJ1hYzMWayzeYSTd80rOCeGrpKtL9u1A25E2Ib6oeSYi71ZZHDqgATxwpVqCElemifJEwvn3Hq%2BX8oxYTlTrtxHOdvce7qPNloQ0BxpE1Ifl0jGg6w%2FEMhuHiSpj%2FVmcbzj2mrKn35XFI0DHkb8vpT9UFuR2bVMoh%2Fl0m2FpW%2FzeDS9%2FBAce5Y%2BuGDE%2FbyoPvOoc3ZKpXTmkbhgYspV%2FPUjPLqQEZIsEc0PJViWshmOX%2BSCxv6VDLpKmgHL4%2BUX%2FbhGr2oqIebdEXi0%2Fpb2HerwqHBHE10pB2GsnvzkKrGL7PwBvkdjKuzuukRvZlx3GjBGbRY9R1pJQQLC0Ko%2BThQX6wD1F4L2DMfvmKpGOCw45qo4aucfZm5RYEcTctmaFsZdOex0HXCBDXCUbkZvxJhK6zM9suSsxVMHyFF0NxPEZBiw%2F44PoRPeAikB1vUi%2FKbZGMaZb8KeNYwD3eMO2ctsQGOqUB61kUauzvqp1%2FzgE2ArR88EUBJr3GKJMCnFGijwrJHlaXHhkBOPBLBjga1aeYyxZltQwwPJYo03v113Jqvs2C%2B%2B4aMp0jzkG7bzmbnqnDradJ7v0PzlWMl0iXFgtfU%2FRZ33Z289HMcrqg2ustkqN9R1cRjMlefbr%2BAlzMihfJ8Cm9sv9uLR5vhbm1t%2B5QO9nqsHn2HnF0tPqAOq88VNQ%2FbwArGHK8&X-Amz-Signature=b06c8f5415522478fa20e2f228120fb12f2fed9229834c4d21637c91277451cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
