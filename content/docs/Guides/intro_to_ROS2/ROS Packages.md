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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGT3KEGY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw8%2BnhAFDumgk7Cbb2XpliLagewSdCCv4OtXxH28y6xQIgO9n%2BSFxW%2B7ICjI%2B4UBqPao0oDnFN9w723hQtiFFVEFgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASUCHZD15GTWfsZ0ircA8zg0Y86afk9Ymh0xhZAj1ZS%2BBmpmLsHZzmOh9p3DT%2BuHgeo7lyPurrDthlDLcvNd0BwslsAVYYoFt98ocy5e4%2BRHj4h%2BAwdQRWQH46C0xn%2BzEHTiSX4gosCCkRgXELHwLAsWRr%2F3BfJK3qycHIyxlrDm4QRX4ycod9TP%2BoXwD6vi99YbrN2uNl1xzGBw74huX%2Frn6Ji4xQ8zor0phmOhGxjWXQeQjBT45fBGGCEEU7T0vGrwgyPSRLQlKU%2BY6mj2nvYvfuzyERmGRGbgr1OMgeKcOSlWmWSFQ%2Ff68ZSMYcW3r6GW4B0pHMJdF0lYoWrSrYSzLlcqmQUdWScBL4y4sCIYSkyLsM2IeVMcZ2DArTVBo9vEl31AHnP4Vd8eqlk%2FZd7A4nctUsK6HQ1oW%2B7ikf2f5ZDhyQnWHoZ7XMrYkjXhz%2B%2BsLHFC0CBt5J%2F185UnWRXlYvTONCiiiWCEF08Mg8LDtX6ZyzgtTBY2%2B4Cfepj1IuS6dA6Y0Dphn%2Bo8eC1aPTtOwKPkr6fze42dVqR8tHOdUEbpFwfE9D%2BnRygTesa8QbKkwaMu1ixvdVdzd3PGE314zr78pAJH7nL4ILPctQu1IqUp%2FGS%2FO%2FcCt0JAVQC3kM%2FrENVbnQNuK5yMKaN%2BMMGOqUBur3d9NOJyE482lukXB13kDtQYrzhRkeNlUM%2FH8KwTxbBO2rN1Be77na%2FLeRO2mgFXCyvAjjFkaSGVpfTMG%2FapSWo8xKpBYrXQ%2FLr18OUIDVE48So%2BLnCmwzoi9yIIhWgC9ERcocoSXAst5pOKdxnrkOSvw1VWo5IZUwHF%2Fhoz0Ngc7Hxw3lGTm7oiXKfO%2BRrOJraXaAuhXflcOm2VRFSdxO%2FWonP&X-Amz-Signature=a5ea243fd5a086793a9275b7786620ae2f3a6c9f9d27f0e7c030f495b5474286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGT3KEGY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw8%2BnhAFDumgk7Cbb2XpliLagewSdCCv4OtXxH28y6xQIgO9n%2BSFxW%2B7ICjI%2B4UBqPao0oDnFN9w723hQtiFFVEFgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASUCHZD15GTWfsZ0ircA8zg0Y86afk9Ymh0xhZAj1ZS%2BBmpmLsHZzmOh9p3DT%2BuHgeo7lyPurrDthlDLcvNd0BwslsAVYYoFt98ocy5e4%2BRHj4h%2BAwdQRWQH46C0xn%2BzEHTiSX4gosCCkRgXELHwLAsWRr%2F3BfJK3qycHIyxlrDm4QRX4ycod9TP%2BoXwD6vi99YbrN2uNl1xzGBw74huX%2Frn6Ji4xQ8zor0phmOhGxjWXQeQjBT45fBGGCEEU7T0vGrwgyPSRLQlKU%2BY6mj2nvYvfuzyERmGRGbgr1OMgeKcOSlWmWSFQ%2Ff68ZSMYcW3r6GW4B0pHMJdF0lYoWrSrYSzLlcqmQUdWScBL4y4sCIYSkyLsM2IeVMcZ2DArTVBo9vEl31AHnP4Vd8eqlk%2FZd7A4nctUsK6HQ1oW%2B7ikf2f5ZDhyQnWHoZ7XMrYkjXhz%2B%2BsLHFC0CBt5J%2F185UnWRXlYvTONCiiiWCEF08Mg8LDtX6ZyzgtTBY2%2B4Cfepj1IuS6dA6Y0Dphn%2Bo8eC1aPTtOwKPkr6fze42dVqR8tHOdUEbpFwfE9D%2BnRygTesa8QbKkwaMu1ixvdVdzd3PGE314zr78pAJH7nL4ILPctQu1IqUp%2FGS%2FO%2FcCt0JAVQC3kM%2FrENVbnQNuK5yMKaN%2BMMGOqUBur3d9NOJyE482lukXB13kDtQYrzhRkeNlUM%2FH8KwTxbBO2rN1Be77na%2FLeRO2mgFXCyvAjjFkaSGVpfTMG%2FapSWo8xKpBYrXQ%2FLr18OUIDVE48So%2BLnCmwzoi9yIIhWgC9ERcocoSXAst5pOKdxnrkOSvw1VWo5IZUwHF%2Fhoz0Ngc7Hxw3lGTm7oiXKfO%2BRrOJraXaAuhXflcOm2VRFSdxO%2FWonP&X-Amz-Signature=3564bfcb9a98a9a3a080388f5aaec4cc3869d176c656fb3b1466875b2b3dfa9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGT3KEGY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw8%2BnhAFDumgk7Cbb2XpliLagewSdCCv4OtXxH28y6xQIgO9n%2BSFxW%2B7ICjI%2B4UBqPao0oDnFN9w723hQtiFFVEFgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASUCHZD15GTWfsZ0ircA8zg0Y86afk9Ymh0xhZAj1ZS%2BBmpmLsHZzmOh9p3DT%2BuHgeo7lyPurrDthlDLcvNd0BwslsAVYYoFt98ocy5e4%2BRHj4h%2BAwdQRWQH46C0xn%2BzEHTiSX4gosCCkRgXELHwLAsWRr%2F3BfJK3qycHIyxlrDm4QRX4ycod9TP%2BoXwD6vi99YbrN2uNl1xzGBw74huX%2Frn6Ji4xQ8zor0phmOhGxjWXQeQjBT45fBGGCEEU7T0vGrwgyPSRLQlKU%2BY6mj2nvYvfuzyERmGRGbgr1OMgeKcOSlWmWSFQ%2Ff68ZSMYcW3r6GW4B0pHMJdF0lYoWrSrYSzLlcqmQUdWScBL4y4sCIYSkyLsM2IeVMcZ2DArTVBo9vEl31AHnP4Vd8eqlk%2FZd7A4nctUsK6HQ1oW%2B7ikf2f5ZDhyQnWHoZ7XMrYkjXhz%2B%2BsLHFC0CBt5J%2F185UnWRXlYvTONCiiiWCEF08Mg8LDtX6ZyzgtTBY2%2B4Cfepj1IuS6dA6Y0Dphn%2Bo8eC1aPTtOwKPkr6fze42dVqR8tHOdUEbpFwfE9D%2BnRygTesa8QbKkwaMu1ixvdVdzd3PGE314zr78pAJH7nL4ILPctQu1IqUp%2FGS%2FO%2FcCt0JAVQC3kM%2FrENVbnQNuK5yMKaN%2BMMGOqUBur3d9NOJyE482lukXB13kDtQYrzhRkeNlUM%2FH8KwTxbBO2rN1Be77na%2FLeRO2mgFXCyvAjjFkaSGVpfTMG%2FapSWo8xKpBYrXQ%2FLr18OUIDVE48So%2BLnCmwzoi9yIIhWgC9ERcocoSXAst5pOKdxnrkOSvw1VWo5IZUwHF%2Fhoz0Ngc7Hxw3lGTm7oiXKfO%2BRrOJraXaAuhXflcOm2VRFSdxO%2FWonP&X-Amz-Signature=54d97af7d56509c434a65593a48f10cee954fe887a76d0c2ee5542dd1d529ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGT3KEGY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw8%2BnhAFDumgk7Cbb2XpliLagewSdCCv4OtXxH28y6xQIgO9n%2BSFxW%2B7ICjI%2B4UBqPao0oDnFN9w723hQtiFFVEFgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASUCHZD15GTWfsZ0ircA8zg0Y86afk9Ymh0xhZAj1ZS%2BBmpmLsHZzmOh9p3DT%2BuHgeo7lyPurrDthlDLcvNd0BwslsAVYYoFt98ocy5e4%2BRHj4h%2BAwdQRWQH46C0xn%2BzEHTiSX4gosCCkRgXELHwLAsWRr%2F3BfJK3qycHIyxlrDm4QRX4ycod9TP%2BoXwD6vi99YbrN2uNl1xzGBw74huX%2Frn6Ji4xQ8zor0phmOhGxjWXQeQjBT45fBGGCEEU7T0vGrwgyPSRLQlKU%2BY6mj2nvYvfuzyERmGRGbgr1OMgeKcOSlWmWSFQ%2Ff68ZSMYcW3r6GW4B0pHMJdF0lYoWrSrYSzLlcqmQUdWScBL4y4sCIYSkyLsM2IeVMcZ2DArTVBo9vEl31AHnP4Vd8eqlk%2FZd7A4nctUsK6HQ1oW%2B7ikf2f5ZDhyQnWHoZ7XMrYkjXhz%2B%2BsLHFC0CBt5J%2F185UnWRXlYvTONCiiiWCEF08Mg8LDtX6ZyzgtTBY2%2B4Cfepj1IuS6dA6Y0Dphn%2Bo8eC1aPTtOwKPkr6fze42dVqR8tHOdUEbpFwfE9D%2BnRygTesa8QbKkwaMu1ixvdVdzd3PGE314zr78pAJH7nL4ILPctQu1IqUp%2FGS%2FO%2FcCt0JAVQC3kM%2FrENVbnQNuK5yMKaN%2BMMGOqUBur3d9NOJyE482lukXB13kDtQYrzhRkeNlUM%2FH8KwTxbBO2rN1Be77na%2FLeRO2mgFXCyvAjjFkaSGVpfTMG%2FapSWo8xKpBYrXQ%2FLr18OUIDVE48So%2BLnCmwzoi9yIIhWgC9ERcocoSXAst5pOKdxnrkOSvw1VWo5IZUwHF%2Fhoz0Ngc7Hxw3lGTm7oiXKfO%2BRrOJraXaAuhXflcOm2VRFSdxO%2FWonP&X-Amz-Signature=f127d209edba9b4eb8f17f71e373bce7bf28e5b74ad9c9c53e3c5ea2fedd7faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGT3KEGY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw8%2BnhAFDumgk7Cbb2XpliLagewSdCCv4OtXxH28y6xQIgO9n%2BSFxW%2B7ICjI%2B4UBqPao0oDnFN9w723hQtiFFVEFgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASUCHZD15GTWfsZ0ircA8zg0Y86afk9Ymh0xhZAj1ZS%2BBmpmLsHZzmOh9p3DT%2BuHgeo7lyPurrDthlDLcvNd0BwslsAVYYoFt98ocy5e4%2BRHj4h%2BAwdQRWQH46C0xn%2BzEHTiSX4gosCCkRgXELHwLAsWRr%2F3BfJK3qycHIyxlrDm4QRX4ycod9TP%2BoXwD6vi99YbrN2uNl1xzGBw74huX%2Frn6Ji4xQ8zor0phmOhGxjWXQeQjBT45fBGGCEEU7T0vGrwgyPSRLQlKU%2BY6mj2nvYvfuzyERmGRGbgr1OMgeKcOSlWmWSFQ%2Ff68ZSMYcW3r6GW4B0pHMJdF0lYoWrSrYSzLlcqmQUdWScBL4y4sCIYSkyLsM2IeVMcZ2DArTVBo9vEl31AHnP4Vd8eqlk%2FZd7A4nctUsK6HQ1oW%2B7ikf2f5ZDhyQnWHoZ7XMrYkjXhz%2B%2BsLHFC0CBt5J%2F185UnWRXlYvTONCiiiWCEF08Mg8LDtX6ZyzgtTBY2%2B4Cfepj1IuS6dA6Y0Dphn%2Bo8eC1aPTtOwKPkr6fze42dVqR8tHOdUEbpFwfE9D%2BnRygTesa8QbKkwaMu1ixvdVdzd3PGE314zr78pAJH7nL4ILPctQu1IqUp%2FGS%2FO%2FcCt0JAVQC3kM%2FrENVbnQNuK5yMKaN%2BMMGOqUBur3d9NOJyE482lukXB13kDtQYrzhRkeNlUM%2FH8KwTxbBO2rN1Be77na%2FLeRO2mgFXCyvAjjFkaSGVpfTMG%2FapSWo8xKpBYrXQ%2FLr18OUIDVE48So%2BLnCmwzoi9yIIhWgC9ERcocoSXAst5pOKdxnrkOSvw1VWo5IZUwHF%2Fhoz0Ngc7Hxw3lGTm7oiXKfO%2BRrOJraXaAuhXflcOm2VRFSdxO%2FWonP&X-Amz-Signature=df31b8c8868b77af0f27759562849f07213e67c9125bcf60937092696196dbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGT3KEGY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw8%2BnhAFDumgk7Cbb2XpliLagewSdCCv4OtXxH28y6xQIgO9n%2BSFxW%2B7ICjI%2B4UBqPao0oDnFN9w723hQtiFFVEFgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASUCHZD15GTWfsZ0ircA8zg0Y86afk9Ymh0xhZAj1ZS%2BBmpmLsHZzmOh9p3DT%2BuHgeo7lyPurrDthlDLcvNd0BwslsAVYYoFt98ocy5e4%2BRHj4h%2BAwdQRWQH46C0xn%2BzEHTiSX4gosCCkRgXELHwLAsWRr%2F3BfJK3qycHIyxlrDm4QRX4ycod9TP%2BoXwD6vi99YbrN2uNl1xzGBw74huX%2Frn6Ji4xQ8zor0phmOhGxjWXQeQjBT45fBGGCEEU7T0vGrwgyPSRLQlKU%2BY6mj2nvYvfuzyERmGRGbgr1OMgeKcOSlWmWSFQ%2Ff68ZSMYcW3r6GW4B0pHMJdF0lYoWrSrYSzLlcqmQUdWScBL4y4sCIYSkyLsM2IeVMcZ2DArTVBo9vEl31AHnP4Vd8eqlk%2FZd7A4nctUsK6HQ1oW%2B7ikf2f5ZDhyQnWHoZ7XMrYkjXhz%2B%2BsLHFC0CBt5J%2F185UnWRXlYvTONCiiiWCEF08Mg8LDtX6ZyzgtTBY2%2B4Cfepj1IuS6dA6Y0Dphn%2Bo8eC1aPTtOwKPkr6fze42dVqR8tHOdUEbpFwfE9D%2BnRygTesa8QbKkwaMu1ixvdVdzd3PGE314zr78pAJH7nL4ILPctQu1IqUp%2FGS%2FO%2FcCt0JAVQC3kM%2FrENVbnQNuK5yMKaN%2BMMGOqUBur3d9NOJyE482lukXB13kDtQYrzhRkeNlUM%2FH8KwTxbBO2rN1Be77na%2FLeRO2mgFXCyvAjjFkaSGVpfTMG%2FapSWo8xKpBYrXQ%2FLr18OUIDVE48So%2BLnCmwzoi9yIIhWgC9ERcocoSXAst5pOKdxnrkOSvw1VWo5IZUwHF%2Fhoz0Ngc7Hxw3lGTm7oiXKfO%2BRrOJraXaAuhXflcOm2VRFSdxO%2FWonP&X-Amz-Signature=27c194b184c7675991137597adec168aa2f6321c29fb75b1c3bf6e4d6ab4cb1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGT3KEGY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw8%2BnhAFDumgk7Cbb2XpliLagewSdCCv4OtXxH28y6xQIgO9n%2BSFxW%2B7ICjI%2B4UBqPao0oDnFN9w723hQtiFFVEFgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASUCHZD15GTWfsZ0ircA8zg0Y86afk9Ymh0xhZAj1ZS%2BBmpmLsHZzmOh9p3DT%2BuHgeo7lyPurrDthlDLcvNd0BwslsAVYYoFt98ocy5e4%2BRHj4h%2BAwdQRWQH46C0xn%2BzEHTiSX4gosCCkRgXELHwLAsWRr%2F3BfJK3qycHIyxlrDm4QRX4ycod9TP%2BoXwD6vi99YbrN2uNl1xzGBw74huX%2Frn6Ji4xQ8zor0phmOhGxjWXQeQjBT45fBGGCEEU7T0vGrwgyPSRLQlKU%2BY6mj2nvYvfuzyERmGRGbgr1OMgeKcOSlWmWSFQ%2Ff68ZSMYcW3r6GW4B0pHMJdF0lYoWrSrYSzLlcqmQUdWScBL4y4sCIYSkyLsM2IeVMcZ2DArTVBo9vEl31AHnP4Vd8eqlk%2FZd7A4nctUsK6HQ1oW%2B7ikf2f5ZDhyQnWHoZ7XMrYkjXhz%2B%2BsLHFC0CBt5J%2F185UnWRXlYvTONCiiiWCEF08Mg8LDtX6ZyzgtTBY2%2B4Cfepj1IuS6dA6Y0Dphn%2Bo8eC1aPTtOwKPkr6fze42dVqR8tHOdUEbpFwfE9D%2BnRygTesa8QbKkwaMu1ixvdVdzd3PGE314zr78pAJH7nL4ILPctQu1IqUp%2FGS%2FO%2FcCt0JAVQC3kM%2FrENVbnQNuK5yMKaN%2BMMGOqUBur3d9NOJyE482lukXB13kDtQYrzhRkeNlUM%2FH8KwTxbBO2rN1Be77na%2FLeRO2mgFXCyvAjjFkaSGVpfTMG%2FapSWo8xKpBYrXQ%2FLr18OUIDVE48So%2BLnCmwzoi9yIIhWgC9ERcocoSXAst5pOKdxnrkOSvw1VWo5IZUwHF%2Fhoz0Ngc7Hxw3lGTm7oiXKfO%2BRrOJraXaAuhXflcOm2VRFSdxO%2FWonP&X-Amz-Signature=19a9c552a208a482793fc16c43b3bd1829e167ed9a83d4ab842e40ce74cd03dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
