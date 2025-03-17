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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D4JI6P%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ2W6uN3e8zr0zjwsUZRK3uMN%2FFtSyp9Rb4mXpmPAIaAIgUjs6PQmEyLWSnNPWT8jAW6F%2Fd8ULw9%2F9JMr703sIhusq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO2BT1OqLi2shA4pcircA4qW3aPuEWCEN3wGgD%2B%2Fu0ZNptrjyV3dzExmBvmi2olF%2F6DxOxFUq2s76XJkqFp94Us39y3zmGJo3IKBPy8qzTT1E0V%2FQblcIKTQM5iAfRoRx%2FgooRsEvPVo7Z0gnEugUU7ARnlkayXUy1Wf24HXPMQo5QEhYdS9jpxIQi2adOkkdm2vnwBcIewhjsOI2wlMwnzhO74shJ1zgc24IRL%2BUAOuwlP%2BmXtkeJ5z2RG931%2F2qhUzfD7dasjY87j8ew3oqmngz%2BwLiLL9mfQLCPqqiqjDFheqf1B%2FOVEIB1FmaAbIiaDnAqNGH2ZtSraWseFCUbu%2FXyPDJ5hmCdxaYqU1oca97mONZ7M90OO9H7iT9jDONMsLRE7vCYCOOZu3d712hgyNl%2F4P72C3QmorBU%2BxvoblS5iGdKHkypjSDFLoCo98xo4zw7LB4nh80%2BhVgMw0f9%2FQ438DPEfpI9itJtTAUZpGUXES668FCYvknrYaRXX3vNm8kgci0Tbd%2FNn9LNoLvoSWKN2DBWukECXkbw8wYv6h%2FQdKr%2FejDIEDxxc8h2OaM%2ByBJFXbttC3vyKdezZ46L40%2F9%2BzRhiZApcZ6UEvQsvey9ZQcBc0D%2FLvgmBW1o4uE5ObFCMt7ag5B5K5MOnO374GOqUBZroTdYaNJA20iRdNGs%2BaR4eSrP4rzXBdAZZRxmjZ9JG17TXSO99WaekNv3p4MR7Wbrr6ZseC3qQs8EZLFOHRGz2U%2F3KvgJ27D6baQ4jLkd3xvdDQcmVOhk3fDcY3knTOXp66iX80scVDySLbloqjO71lB8PRRnt4osWh2krTuKNU%2Fr2DlgELbr6cIYuvYMP6N0C3loR9bjou%2F%2BFQZ6%2FGHwGKp56R&X-Amz-Signature=a219f9cbffe7d931fd4ee48900819af6b0c8256e99f22002c03487da1206b49f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D4JI6P%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ2W6uN3e8zr0zjwsUZRK3uMN%2FFtSyp9Rb4mXpmPAIaAIgUjs6PQmEyLWSnNPWT8jAW6F%2Fd8ULw9%2F9JMr703sIhusq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO2BT1OqLi2shA4pcircA4qW3aPuEWCEN3wGgD%2B%2Fu0ZNptrjyV3dzExmBvmi2olF%2F6DxOxFUq2s76XJkqFp94Us39y3zmGJo3IKBPy8qzTT1E0V%2FQblcIKTQM5iAfRoRx%2FgooRsEvPVo7Z0gnEugUU7ARnlkayXUy1Wf24HXPMQo5QEhYdS9jpxIQi2adOkkdm2vnwBcIewhjsOI2wlMwnzhO74shJ1zgc24IRL%2BUAOuwlP%2BmXtkeJ5z2RG931%2F2qhUzfD7dasjY87j8ew3oqmngz%2BwLiLL9mfQLCPqqiqjDFheqf1B%2FOVEIB1FmaAbIiaDnAqNGH2ZtSraWseFCUbu%2FXyPDJ5hmCdxaYqU1oca97mONZ7M90OO9H7iT9jDONMsLRE7vCYCOOZu3d712hgyNl%2F4P72C3QmorBU%2BxvoblS5iGdKHkypjSDFLoCo98xo4zw7LB4nh80%2BhVgMw0f9%2FQ438DPEfpI9itJtTAUZpGUXES668FCYvknrYaRXX3vNm8kgci0Tbd%2FNn9LNoLvoSWKN2DBWukECXkbw8wYv6h%2FQdKr%2FejDIEDxxc8h2OaM%2ByBJFXbttC3vyKdezZ46L40%2F9%2BzRhiZApcZ6UEvQsvey9ZQcBc0D%2FLvgmBW1o4uE5ObFCMt7ag5B5K5MOnO374GOqUBZroTdYaNJA20iRdNGs%2BaR4eSrP4rzXBdAZZRxmjZ9JG17TXSO99WaekNv3p4MR7Wbrr6ZseC3qQs8EZLFOHRGz2U%2F3KvgJ27D6baQ4jLkd3xvdDQcmVOhk3fDcY3knTOXp66iX80scVDySLbloqjO71lB8PRRnt4osWh2krTuKNU%2Fr2DlgELbr6cIYuvYMP6N0C3loR9bjou%2F%2BFQZ6%2FGHwGKp56R&X-Amz-Signature=8814d1b3c6559126bfa304206f35e060bddbf504d3cd2eca0154be5784fe703b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D4JI6P%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ2W6uN3e8zr0zjwsUZRK3uMN%2FFtSyp9Rb4mXpmPAIaAIgUjs6PQmEyLWSnNPWT8jAW6F%2Fd8ULw9%2F9JMr703sIhusq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO2BT1OqLi2shA4pcircA4qW3aPuEWCEN3wGgD%2B%2Fu0ZNptrjyV3dzExmBvmi2olF%2F6DxOxFUq2s76XJkqFp94Us39y3zmGJo3IKBPy8qzTT1E0V%2FQblcIKTQM5iAfRoRx%2FgooRsEvPVo7Z0gnEugUU7ARnlkayXUy1Wf24HXPMQo5QEhYdS9jpxIQi2adOkkdm2vnwBcIewhjsOI2wlMwnzhO74shJ1zgc24IRL%2BUAOuwlP%2BmXtkeJ5z2RG931%2F2qhUzfD7dasjY87j8ew3oqmngz%2BwLiLL9mfQLCPqqiqjDFheqf1B%2FOVEIB1FmaAbIiaDnAqNGH2ZtSraWseFCUbu%2FXyPDJ5hmCdxaYqU1oca97mONZ7M90OO9H7iT9jDONMsLRE7vCYCOOZu3d712hgyNl%2F4P72C3QmorBU%2BxvoblS5iGdKHkypjSDFLoCo98xo4zw7LB4nh80%2BhVgMw0f9%2FQ438DPEfpI9itJtTAUZpGUXES668FCYvknrYaRXX3vNm8kgci0Tbd%2FNn9LNoLvoSWKN2DBWukECXkbw8wYv6h%2FQdKr%2FejDIEDxxc8h2OaM%2ByBJFXbttC3vyKdezZ46L40%2F9%2BzRhiZApcZ6UEvQsvey9ZQcBc0D%2FLvgmBW1o4uE5ObFCMt7ag5B5K5MOnO374GOqUBZroTdYaNJA20iRdNGs%2BaR4eSrP4rzXBdAZZRxmjZ9JG17TXSO99WaekNv3p4MR7Wbrr6ZseC3qQs8EZLFOHRGz2U%2F3KvgJ27D6baQ4jLkd3xvdDQcmVOhk3fDcY3knTOXp66iX80scVDySLbloqjO71lB8PRRnt4osWh2krTuKNU%2Fr2DlgELbr6cIYuvYMP6N0C3loR9bjou%2F%2BFQZ6%2FGHwGKp56R&X-Amz-Signature=709719786a446d471a6d16e68333320f1bf26a5c48b4e70ecf6cd0f6a403b031&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D4JI6P%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ2W6uN3e8zr0zjwsUZRK3uMN%2FFtSyp9Rb4mXpmPAIaAIgUjs6PQmEyLWSnNPWT8jAW6F%2Fd8ULw9%2F9JMr703sIhusq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO2BT1OqLi2shA4pcircA4qW3aPuEWCEN3wGgD%2B%2Fu0ZNptrjyV3dzExmBvmi2olF%2F6DxOxFUq2s76XJkqFp94Us39y3zmGJo3IKBPy8qzTT1E0V%2FQblcIKTQM5iAfRoRx%2FgooRsEvPVo7Z0gnEugUU7ARnlkayXUy1Wf24HXPMQo5QEhYdS9jpxIQi2adOkkdm2vnwBcIewhjsOI2wlMwnzhO74shJ1zgc24IRL%2BUAOuwlP%2BmXtkeJ5z2RG931%2F2qhUzfD7dasjY87j8ew3oqmngz%2BwLiLL9mfQLCPqqiqjDFheqf1B%2FOVEIB1FmaAbIiaDnAqNGH2ZtSraWseFCUbu%2FXyPDJ5hmCdxaYqU1oca97mONZ7M90OO9H7iT9jDONMsLRE7vCYCOOZu3d712hgyNl%2F4P72C3QmorBU%2BxvoblS5iGdKHkypjSDFLoCo98xo4zw7LB4nh80%2BhVgMw0f9%2FQ438DPEfpI9itJtTAUZpGUXES668FCYvknrYaRXX3vNm8kgci0Tbd%2FNn9LNoLvoSWKN2DBWukECXkbw8wYv6h%2FQdKr%2FejDIEDxxc8h2OaM%2ByBJFXbttC3vyKdezZ46L40%2F9%2BzRhiZApcZ6UEvQsvey9ZQcBc0D%2FLvgmBW1o4uE5ObFCMt7ag5B5K5MOnO374GOqUBZroTdYaNJA20iRdNGs%2BaR4eSrP4rzXBdAZZRxmjZ9JG17TXSO99WaekNv3p4MR7Wbrr6ZseC3qQs8EZLFOHRGz2U%2F3KvgJ27D6baQ4jLkd3xvdDQcmVOhk3fDcY3knTOXp66iX80scVDySLbloqjO71lB8PRRnt4osWh2krTuKNU%2Fr2DlgELbr6cIYuvYMP6N0C3loR9bjou%2F%2BFQZ6%2FGHwGKp56R&X-Amz-Signature=2c57cfd6ecd399676aed61042d8f38250c845588594ab0e92a243be948a7a669&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D4JI6P%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ2W6uN3e8zr0zjwsUZRK3uMN%2FFtSyp9Rb4mXpmPAIaAIgUjs6PQmEyLWSnNPWT8jAW6F%2Fd8ULw9%2F9JMr703sIhusq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO2BT1OqLi2shA4pcircA4qW3aPuEWCEN3wGgD%2B%2Fu0ZNptrjyV3dzExmBvmi2olF%2F6DxOxFUq2s76XJkqFp94Us39y3zmGJo3IKBPy8qzTT1E0V%2FQblcIKTQM5iAfRoRx%2FgooRsEvPVo7Z0gnEugUU7ARnlkayXUy1Wf24HXPMQo5QEhYdS9jpxIQi2adOkkdm2vnwBcIewhjsOI2wlMwnzhO74shJ1zgc24IRL%2BUAOuwlP%2BmXtkeJ5z2RG931%2F2qhUzfD7dasjY87j8ew3oqmngz%2BwLiLL9mfQLCPqqiqjDFheqf1B%2FOVEIB1FmaAbIiaDnAqNGH2ZtSraWseFCUbu%2FXyPDJ5hmCdxaYqU1oca97mONZ7M90OO9H7iT9jDONMsLRE7vCYCOOZu3d712hgyNl%2F4P72C3QmorBU%2BxvoblS5iGdKHkypjSDFLoCo98xo4zw7LB4nh80%2BhVgMw0f9%2FQ438DPEfpI9itJtTAUZpGUXES668FCYvknrYaRXX3vNm8kgci0Tbd%2FNn9LNoLvoSWKN2DBWukECXkbw8wYv6h%2FQdKr%2FejDIEDxxc8h2OaM%2ByBJFXbttC3vyKdezZ46L40%2F9%2BzRhiZApcZ6UEvQsvey9ZQcBc0D%2FLvgmBW1o4uE5ObFCMt7ag5B5K5MOnO374GOqUBZroTdYaNJA20iRdNGs%2BaR4eSrP4rzXBdAZZRxmjZ9JG17TXSO99WaekNv3p4MR7Wbrr6ZseC3qQs8EZLFOHRGz2U%2F3KvgJ27D6baQ4jLkd3xvdDQcmVOhk3fDcY3knTOXp66iX80scVDySLbloqjO71lB8PRRnt4osWh2krTuKNU%2Fr2DlgELbr6cIYuvYMP6N0C3loR9bjou%2F%2BFQZ6%2FGHwGKp56R&X-Amz-Signature=8e95d9e43bcd652d0a3677b36e536e493fe35b43a076661d3373af8b1b1dfac7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D4JI6P%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ2W6uN3e8zr0zjwsUZRK3uMN%2FFtSyp9Rb4mXpmPAIaAIgUjs6PQmEyLWSnNPWT8jAW6F%2Fd8ULw9%2F9JMr703sIhusq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO2BT1OqLi2shA4pcircA4qW3aPuEWCEN3wGgD%2B%2Fu0ZNptrjyV3dzExmBvmi2olF%2F6DxOxFUq2s76XJkqFp94Us39y3zmGJo3IKBPy8qzTT1E0V%2FQblcIKTQM5iAfRoRx%2FgooRsEvPVo7Z0gnEugUU7ARnlkayXUy1Wf24HXPMQo5QEhYdS9jpxIQi2adOkkdm2vnwBcIewhjsOI2wlMwnzhO74shJ1zgc24IRL%2BUAOuwlP%2BmXtkeJ5z2RG931%2F2qhUzfD7dasjY87j8ew3oqmngz%2BwLiLL9mfQLCPqqiqjDFheqf1B%2FOVEIB1FmaAbIiaDnAqNGH2ZtSraWseFCUbu%2FXyPDJ5hmCdxaYqU1oca97mONZ7M90OO9H7iT9jDONMsLRE7vCYCOOZu3d712hgyNl%2F4P72C3QmorBU%2BxvoblS5iGdKHkypjSDFLoCo98xo4zw7LB4nh80%2BhVgMw0f9%2FQ438DPEfpI9itJtTAUZpGUXES668FCYvknrYaRXX3vNm8kgci0Tbd%2FNn9LNoLvoSWKN2DBWukECXkbw8wYv6h%2FQdKr%2FejDIEDxxc8h2OaM%2ByBJFXbttC3vyKdezZ46L40%2F9%2BzRhiZApcZ6UEvQsvey9ZQcBc0D%2FLvgmBW1o4uE5ObFCMt7ag5B5K5MOnO374GOqUBZroTdYaNJA20iRdNGs%2BaR4eSrP4rzXBdAZZRxmjZ9JG17TXSO99WaekNv3p4MR7Wbrr6ZseC3qQs8EZLFOHRGz2U%2F3KvgJ27D6baQ4jLkd3xvdDQcmVOhk3fDcY3knTOXp66iX80scVDySLbloqjO71lB8PRRnt4osWh2krTuKNU%2Fr2DlgELbr6cIYuvYMP6N0C3loR9bjou%2F%2BFQZ6%2FGHwGKp56R&X-Amz-Signature=05109662f6140e84cad5aca5a65a0d22933296cccb1a7e8dc39ce811630b7a44&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D4JI6P%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ2W6uN3e8zr0zjwsUZRK3uMN%2FFtSyp9Rb4mXpmPAIaAIgUjs6PQmEyLWSnNPWT8jAW6F%2Fd8ULw9%2F9JMr703sIhusq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO2BT1OqLi2shA4pcircA4qW3aPuEWCEN3wGgD%2B%2Fu0ZNptrjyV3dzExmBvmi2olF%2F6DxOxFUq2s76XJkqFp94Us39y3zmGJo3IKBPy8qzTT1E0V%2FQblcIKTQM5iAfRoRx%2FgooRsEvPVo7Z0gnEugUU7ARnlkayXUy1Wf24HXPMQo5QEhYdS9jpxIQi2adOkkdm2vnwBcIewhjsOI2wlMwnzhO74shJ1zgc24IRL%2BUAOuwlP%2BmXtkeJ5z2RG931%2F2qhUzfD7dasjY87j8ew3oqmngz%2BwLiLL9mfQLCPqqiqjDFheqf1B%2FOVEIB1FmaAbIiaDnAqNGH2ZtSraWseFCUbu%2FXyPDJ5hmCdxaYqU1oca97mONZ7M90OO9H7iT9jDONMsLRE7vCYCOOZu3d712hgyNl%2F4P72C3QmorBU%2BxvoblS5iGdKHkypjSDFLoCo98xo4zw7LB4nh80%2BhVgMw0f9%2FQ438DPEfpI9itJtTAUZpGUXES668FCYvknrYaRXX3vNm8kgci0Tbd%2FNn9LNoLvoSWKN2DBWukECXkbw8wYv6h%2FQdKr%2FejDIEDxxc8h2OaM%2ByBJFXbttC3vyKdezZ46L40%2F9%2BzRhiZApcZ6UEvQsvey9ZQcBc0D%2FLvgmBW1o4uE5ObFCMt7ag5B5K5MOnO374GOqUBZroTdYaNJA20iRdNGs%2BaR4eSrP4rzXBdAZZRxmjZ9JG17TXSO99WaekNv3p4MR7Wbrr6ZseC3qQs8EZLFOHRGz2U%2F3KvgJ27D6baQ4jLkd3xvdDQcmVOhk3fDcY3knTOXp66iX80scVDySLbloqjO71lB8PRRnt4osWh2krTuKNU%2Fr2DlgELbr6cIYuvYMP6N0C3loR9bjou%2F%2BFQZ6%2FGHwGKp56R&X-Amz-Signature=ef8e80ea3eb86ce277e6236ec9170db5f0f6434a37eec4ca33012cd5920e4fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
