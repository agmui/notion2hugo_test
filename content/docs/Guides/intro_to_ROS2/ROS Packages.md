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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VW3G4JD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDMU1ZkX4hwit2CWkkMpjst48S%2FR3kN35oriZ9Ip84SYAiEAxEV%2FIFk0DhsyFuRQ5%2BvEuKc9YBX%2FcLHUAMhqoPmZmxAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnYAi%2B%2BDt3DHN8D9SrcA1nn45vmlIwf%2F5mB9%2FlZpF3LQwGqJviuuBpyoKmnFlG4MxnrGbOYLlg5G3uspjDdvwWRQjNdxXCNAC7fOWZ%2BUvg82oqLJUDUXlpNQZD5VU4RkqmFLcVH%2BZZhdS5fS4Ljl1NXeVZdyoKQmgCVyFptJE49fTHMypfgOe4UXlu8iObLyOAmepLpMVRG9jEu5DUarR%2Fr8bksddwVOTGIRLEmy4cH6QSt%2FfKVXOEtAbd3SQBV7S2C7RzQjEZKmFnFErGxs9obk83TWAThEk60N3Smgs2U0I%2FMVEPwPXjSnbXqr%2BanO9eYIh%2FiYnUpujg1r%2B5POi7Ao6bKCaHiCfqTgGXQmNkagjz1QGX26xzH1RG2XGurLyWTV9w6gL8O3h1vRjjvXhSwJUYoqrcBxS3mCr0pLbL6FF4Oy2hoxe7ZfBejmyxITsV5yfBZQ6AjCQbWpW1L2etYOvMMO79MpcDRoWdEI1dyVue01Kd7wzlkuEkNWOLChQfrR0AWPlKpIK1UwUMd3uCAtcj4kaj2wvoofuzEYkKBRUU7A5nuRhTWJGoItQvrpLTXS1Lo4NMFtL2%2BqRpAmeD9hXmZXJQkc3cEn9R6Gxsvbpp%2F2OojsKbRKPad1bTkmYLqo816OWSsI3ZeML6T4r8GOqUBkA5zSscx%2B%2BRj5%2FabHdzGXS3Qpk%2BUpRriK6fC94DA4ZvpH%2FrmAiLU93slY%2BZw3O8q%2FryaDXooQ9KCrkvN3cEAUXC7v4QLzwKBtsLinDmSQHSNGY1N959sq2Ep3Og%2BKA6C69pCEMjWiTgAEftDKDkjEnjY85im6tBwHD3S10NOgmxFM2Nf%2BhdpEMZ%2Ba%2BL%2Brmu1hVyMfdfGNwIxSjLGjWSDdgz0ucZU&X-Amz-Signature=7a2268a48c7f5935dc5158ac315c2615a343b190938cf1a3797dc56a9f4f8f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VW3G4JD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDMU1ZkX4hwit2CWkkMpjst48S%2FR3kN35oriZ9Ip84SYAiEAxEV%2FIFk0DhsyFuRQ5%2BvEuKc9YBX%2FcLHUAMhqoPmZmxAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnYAi%2B%2BDt3DHN8D9SrcA1nn45vmlIwf%2F5mB9%2FlZpF3LQwGqJviuuBpyoKmnFlG4MxnrGbOYLlg5G3uspjDdvwWRQjNdxXCNAC7fOWZ%2BUvg82oqLJUDUXlpNQZD5VU4RkqmFLcVH%2BZZhdS5fS4Ljl1NXeVZdyoKQmgCVyFptJE49fTHMypfgOe4UXlu8iObLyOAmepLpMVRG9jEu5DUarR%2Fr8bksddwVOTGIRLEmy4cH6QSt%2FfKVXOEtAbd3SQBV7S2C7RzQjEZKmFnFErGxs9obk83TWAThEk60N3Smgs2U0I%2FMVEPwPXjSnbXqr%2BanO9eYIh%2FiYnUpujg1r%2B5POi7Ao6bKCaHiCfqTgGXQmNkagjz1QGX26xzH1RG2XGurLyWTV9w6gL8O3h1vRjjvXhSwJUYoqrcBxS3mCr0pLbL6FF4Oy2hoxe7ZfBejmyxITsV5yfBZQ6AjCQbWpW1L2etYOvMMO79MpcDRoWdEI1dyVue01Kd7wzlkuEkNWOLChQfrR0AWPlKpIK1UwUMd3uCAtcj4kaj2wvoofuzEYkKBRUU7A5nuRhTWJGoItQvrpLTXS1Lo4NMFtL2%2BqRpAmeD9hXmZXJQkc3cEn9R6Gxsvbpp%2F2OojsKbRKPad1bTkmYLqo816OWSsI3ZeML6T4r8GOqUBkA5zSscx%2B%2BRj5%2FabHdzGXS3Qpk%2BUpRriK6fC94DA4ZvpH%2FrmAiLU93slY%2BZw3O8q%2FryaDXooQ9KCrkvN3cEAUXC7v4QLzwKBtsLinDmSQHSNGY1N959sq2Ep3Og%2BKA6C69pCEMjWiTgAEftDKDkjEnjY85im6tBwHD3S10NOgmxFM2Nf%2BhdpEMZ%2Ba%2BL%2Brmu1hVyMfdfGNwIxSjLGjWSDdgz0ucZU&X-Amz-Signature=2a4287d81115f21ec61272b392f9f4e737bb0313220390f199172d723ece62a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VW3G4JD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDMU1ZkX4hwit2CWkkMpjst48S%2FR3kN35oriZ9Ip84SYAiEAxEV%2FIFk0DhsyFuRQ5%2BvEuKc9YBX%2FcLHUAMhqoPmZmxAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnYAi%2B%2BDt3DHN8D9SrcA1nn45vmlIwf%2F5mB9%2FlZpF3LQwGqJviuuBpyoKmnFlG4MxnrGbOYLlg5G3uspjDdvwWRQjNdxXCNAC7fOWZ%2BUvg82oqLJUDUXlpNQZD5VU4RkqmFLcVH%2BZZhdS5fS4Ljl1NXeVZdyoKQmgCVyFptJE49fTHMypfgOe4UXlu8iObLyOAmepLpMVRG9jEu5DUarR%2Fr8bksddwVOTGIRLEmy4cH6QSt%2FfKVXOEtAbd3SQBV7S2C7RzQjEZKmFnFErGxs9obk83TWAThEk60N3Smgs2U0I%2FMVEPwPXjSnbXqr%2BanO9eYIh%2FiYnUpujg1r%2B5POi7Ao6bKCaHiCfqTgGXQmNkagjz1QGX26xzH1RG2XGurLyWTV9w6gL8O3h1vRjjvXhSwJUYoqrcBxS3mCr0pLbL6FF4Oy2hoxe7ZfBejmyxITsV5yfBZQ6AjCQbWpW1L2etYOvMMO79MpcDRoWdEI1dyVue01Kd7wzlkuEkNWOLChQfrR0AWPlKpIK1UwUMd3uCAtcj4kaj2wvoofuzEYkKBRUU7A5nuRhTWJGoItQvrpLTXS1Lo4NMFtL2%2BqRpAmeD9hXmZXJQkc3cEn9R6Gxsvbpp%2F2OojsKbRKPad1bTkmYLqo816OWSsI3ZeML6T4r8GOqUBkA5zSscx%2B%2BRj5%2FabHdzGXS3Qpk%2BUpRriK6fC94DA4ZvpH%2FrmAiLU93slY%2BZw3O8q%2FryaDXooQ9KCrkvN3cEAUXC7v4QLzwKBtsLinDmSQHSNGY1N959sq2Ep3Og%2BKA6C69pCEMjWiTgAEftDKDkjEnjY85im6tBwHD3S10NOgmxFM2Nf%2BhdpEMZ%2Ba%2BL%2Brmu1hVyMfdfGNwIxSjLGjWSDdgz0ucZU&X-Amz-Signature=3ca5ee66fd4ef42e25ab7584ae37194f23a1133b302d64d6685446d929a8e53a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VW3G4JD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDMU1ZkX4hwit2CWkkMpjst48S%2FR3kN35oriZ9Ip84SYAiEAxEV%2FIFk0DhsyFuRQ5%2BvEuKc9YBX%2FcLHUAMhqoPmZmxAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnYAi%2B%2BDt3DHN8D9SrcA1nn45vmlIwf%2F5mB9%2FlZpF3LQwGqJviuuBpyoKmnFlG4MxnrGbOYLlg5G3uspjDdvwWRQjNdxXCNAC7fOWZ%2BUvg82oqLJUDUXlpNQZD5VU4RkqmFLcVH%2BZZhdS5fS4Ljl1NXeVZdyoKQmgCVyFptJE49fTHMypfgOe4UXlu8iObLyOAmepLpMVRG9jEu5DUarR%2Fr8bksddwVOTGIRLEmy4cH6QSt%2FfKVXOEtAbd3SQBV7S2C7RzQjEZKmFnFErGxs9obk83TWAThEk60N3Smgs2U0I%2FMVEPwPXjSnbXqr%2BanO9eYIh%2FiYnUpujg1r%2B5POi7Ao6bKCaHiCfqTgGXQmNkagjz1QGX26xzH1RG2XGurLyWTV9w6gL8O3h1vRjjvXhSwJUYoqrcBxS3mCr0pLbL6FF4Oy2hoxe7ZfBejmyxITsV5yfBZQ6AjCQbWpW1L2etYOvMMO79MpcDRoWdEI1dyVue01Kd7wzlkuEkNWOLChQfrR0AWPlKpIK1UwUMd3uCAtcj4kaj2wvoofuzEYkKBRUU7A5nuRhTWJGoItQvrpLTXS1Lo4NMFtL2%2BqRpAmeD9hXmZXJQkc3cEn9R6Gxsvbpp%2F2OojsKbRKPad1bTkmYLqo816OWSsI3ZeML6T4r8GOqUBkA5zSscx%2B%2BRj5%2FabHdzGXS3Qpk%2BUpRriK6fC94DA4ZvpH%2FrmAiLU93slY%2BZw3O8q%2FryaDXooQ9KCrkvN3cEAUXC7v4QLzwKBtsLinDmSQHSNGY1N959sq2Ep3Og%2BKA6C69pCEMjWiTgAEftDKDkjEnjY85im6tBwHD3S10NOgmxFM2Nf%2BhdpEMZ%2Ba%2BL%2Brmu1hVyMfdfGNwIxSjLGjWSDdgz0ucZU&X-Amz-Signature=73853467d4eab57c8cadcad459e9e0f7eb9675a4110ab4302a45de849865db88&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VW3G4JD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDMU1ZkX4hwit2CWkkMpjst48S%2FR3kN35oriZ9Ip84SYAiEAxEV%2FIFk0DhsyFuRQ5%2BvEuKc9YBX%2FcLHUAMhqoPmZmxAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnYAi%2B%2BDt3DHN8D9SrcA1nn45vmlIwf%2F5mB9%2FlZpF3LQwGqJviuuBpyoKmnFlG4MxnrGbOYLlg5G3uspjDdvwWRQjNdxXCNAC7fOWZ%2BUvg82oqLJUDUXlpNQZD5VU4RkqmFLcVH%2BZZhdS5fS4Ljl1NXeVZdyoKQmgCVyFptJE49fTHMypfgOe4UXlu8iObLyOAmepLpMVRG9jEu5DUarR%2Fr8bksddwVOTGIRLEmy4cH6QSt%2FfKVXOEtAbd3SQBV7S2C7RzQjEZKmFnFErGxs9obk83TWAThEk60N3Smgs2U0I%2FMVEPwPXjSnbXqr%2BanO9eYIh%2FiYnUpujg1r%2B5POi7Ao6bKCaHiCfqTgGXQmNkagjz1QGX26xzH1RG2XGurLyWTV9w6gL8O3h1vRjjvXhSwJUYoqrcBxS3mCr0pLbL6FF4Oy2hoxe7ZfBejmyxITsV5yfBZQ6AjCQbWpW1L2etYOvMMO79MpcDRoWdEI1dyVue01Kd7wzlkuEkNWOLChQfrR0AWPlKpIK1UwUMd3uCAtcj4kaj2wvoofuzEYkKBRUU7A5nuRhTWJGoItQvrpLTXS1Lo4NMFtL2%2BqRpAmeD9hXmZXJQkc3cEn9R6Gxsvbpp%2F2OojsKbRKPad1bTkmYLqo816OWSsI3ZeML6T4r8GOqUBkA5zSscx%2B%2BRj5%2FabHdzGXS3Qpk%2BUpRriK6fC94DA4ZvpH%2FrmAiLU93slY%2BZw3O8q%2FryaDXooQ9KCrkvN3cEAUXC7v4QLzwKBtsLinDmSQHSNGY1N959sq2Ep3Og%2BKA6C69pCEMjWiTgAEftDKDkjEnjY85im6tBwHD3S10NOgmxFM2Nf%2BhdpEMZ%2Ba%2BL%2Brmu1hVyMfdfGNwIxSjLGjWSDdgz0ucZU&X-Amz-Signature=2a50d4e2d6087a81f4cfec7bb5acfd4bb7d1169f8d9b3cc735c5d1adbda9e635&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VW3G4JD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDMU1ZkX4hwit2CWkkMpjst48S%2FR3kN35oriZ9Ip84SYAiEAxEV%2FIFk0DhsyFuRQ5%2BvEuKc9YBX%2FcLHUAMhqoPmZmxAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnYAi%2B%2BDt3DHN8D9SrcA1nn45vmlIwf%2F5mB9%2FlZpF3LQwGqJviuuBpyoKmnFlG4MxnrGbOYLlg5G3uspjDdvwWRQjNdxXCNAC7fOWZ%2BUvg82oqLJUDUXlpNQZD5VU4RkqmFLcVH%2BZZhdS5fS4Ljl1NXeVZdyoKQmgCVyFptJE49fTHMypfgOe4UXlu8iObLyOAmepLpMVRG9jEu5DUarR%2Fr8bksddwVOTGIRLEmy4cH6QSt%2FfKVXOEtAbd3SQBV7S2C7RzQjEZKmFnFErGxs9obk83TWAThEk60N3Smgs2U0I%2FMVEPwPXjSnbXqr%2BanO9eYIh%2FiYnUpujg1r%2B5POi7Ao6bKCaHiCfqTgGXQmNkagjz1QGX26xzH1RG2XGurLyWTV9w6gL8O3h1vRjjvXhSwJUYoqrcBxS3mCr0pLbL6FF4Oy2hoxe7ZfBejmyxITsV5yfBZQ6AjCQbWpW1L2etYOvMMO79MpcDRoWdEI1dyVue01Kd7wzlkuEkNWOLChQfrR0AWPlKpIK1UwUMd3uCAtcj4kaj2wvoofuzEYkKBRUU7A5nuRhTWJGoItQvrpLTXS1Lo4NMFtL2%2BqRpAmeD9hXmZXJQkc3cEn9R6Gxsvbpp%2F2OojsKbRKPad1bTkmYLqo816OWSsI3ZeML6T4r8GOqUBkA5zSscx%2B%2BRj5%2FabHdzGXS3Qpk%2BUpRriK6fC94DA4ZvpH%2FrmAiLU93slY%2BZw3O8q%2FryaDXooQ9KCrkvN3cEAUXC7v4QLzwKBtsLinDmSQHSNGY1N959sq2Ep3Og%2BKA6C69pCEMjWiTgAEftDKDkjEnjY85im6tBwHD3S10NOgmxFM2Nf%2BhdpEMZ%2Ba%2BL%2Brmu1hVyMfdfGNwIxSjLGjWSDdgz0ucZU&X-Amz-Signature=7ad2ad169f455950a85e789b2ccf3909888b1894a1e1df60181bd0d156db0923&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VW3G4JD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDMU1ZkX4hwit2CWkkMpjst48S%2FR3kN35oriZ9Ip84SYAiEAxEV%2FIFk0DhsyFuRQ5%2BvEuKc9YBX%2FcLHUAMhqoPmZmxAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnYAi%2B%2BDt3DHN8D9SrcA1nn45vmlIwf%2F5mB9%2FlZpF3LQwGqJviuuBpyoKmnFlG4MxnrGbOYLlg5G3uspjDdvwWRQjNdxXCNAC7fOWZ%2BUvg82oqLJUDUXlpNQZD5VU4RkqmFLcVH%2BZZhdS5fS4Ljl1NXeVZdyoKQmgCVyFptJE49fTHMypfgOe4UXlu8iObLyOAmepLpMVRG9jEu5DUarR%2Fr8bksddwVOTGIRLEmy4cH6QSt%2FfKVXOEtAbd3SQBV7S2C7RzQjEZKmFnFErGxs9obk83TWAThEk60N3Smgs2U0I%2FMVEPwPXjSnbXqr%2BanO9eYIh%2FiYnUpujg1r%2B5POi7Ao6bKCaHiCfqTgGXQmNkagjz1QGX26xzH1RG2XGurLyWTV9w6gL8O3h1vRjjvXhSwJUYoqrcBxS3mCr0pLbL6FF4Oy2hoxe7ZfBejmyxITsV5yfBZQ6AjCQbWpW1L2etYOvMMO79MpcDRoWdEI1dyVue01Kd7wzlkuEkNWOLChQfrR0AWPlKpIK1UwUMd3uCAtcj4kaj2wvoofuzEYkKBRUU7A5nuRhTWJGoItQvrpLTXS1Lo4NMFtL2%2BqRpAmeD9hXmZXJQkc3cEn9R6Gxsvbpp%2F2OojsKbRKPad1bTkmYLqo816OWSsI3ZeML6T4r8GOqUBkA5zSscx%2B%2BRj5%2FabHdzGXS3Qpk%2BUpRriK6fC94DA4ZvpH%2FrmAiLU93slY%2BZw3O8q%2FryaDXooQ9KCrkvN3cEAUXC7v4QLzwKBtsLinDmSQHSNGY1N959sq2Ep3Og%2BKA6C69pCEMjWiTgAEftDKDkjEnjY85im6tBwHD3S10NOgmxFM2Nf%2BhdpEMZ%2Ba%2BL%2Brmu1hVyMfdfGNwIxSjLGjWSDdgz0ucZU&X-Amz-Signature=f2d503b212363c0f02406faaa8dce8271efcaef8d40fb3f977f2a7f78238d726&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
