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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEUWNC4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCt5j7j3X26jbI6URDVgHS539c7S8qeecksBadzkLraIgIhAP8sS47L%2BzXQIPmU8qS3stVukVHW%2FgIz%2BJXluxgQn1NRKv8DCE0QABoMNjM3NDIzMTgzODA1IgwIufsrVHWbHf85cnkq3AMtzAxKL8jTitGxtdqaRql%2B1U1Q3p%2F0%2BMR95XCmtR8WxM1fVYX8U5h18xmMU6tHN3ErZmxCKPTkjrsN%2BlaVovEJRG%2FgjRuL3JK%2FH6nmVO5L%2F7DMflGTFf%2F9REA%2BYqPDbdONA3GthHexDTcdS6k8xRllgxM5bnAkcuAeSwEE%2BjeXnAGV9SmX3u1sX8pxqeugwqPF7vL%2BI2tSu%2Ftlwp72RSPVQ2MPzdZUWMNem3Rbajvk6VHqKD6UwvId1cK6asGjl6nqfWAcCJczE5sRplRTAySKJr%2Bv%2FUg7lUGqXUCU4aRln7tHc6pils0Oopp4G9PJGJtrLvWHGrCKopHsYagpGqPUXDR2UmhzeaIg9KNXv3P%2FbSplxfIt2CtNWoO9qvJlW%2FATg38EMoNxbXH7MuAj%2BH5pb6NA0ihhCFQoXfcN0o3ORN868iDtL6hlzOMCs03vB115e55Y%2BFoiXc2QNEuNFXs62TZ7VD1hLrZrr2tFGnGQq%2BUN99Uc72zen9h3eMXpAmpaOE9Ha3YqUhRi07qSeC0hPMFC57a0cT%2FcpeKeCj0tvfPKZNDUm3UYZwHiGO1Pp1NkCvP81WCzzLN4bLApRcI34s3FuuPxXizBipy04xPXijm4R2ELyZWMXrugozD62MO9BjqkAeCUvbMsT40Y3CJJsSENgBBC1SMggjuFKCsGfGw6oYOOyCFEH4LbhrOOqI2icI1r5Luiy6PflUGGzxjmcdSeUnaDkrVYu12LEbbKbAatJmbwNrgccI8IeTg%2FWsdiEfKMd85DTFVgaZgyNLh0WoNLnFeM7gKghaBhVXbrK3flld0bulW6%2BuAmPj2%2FNjhEwVmi3KQI70yjCFI3fCMd%2BcROlzFAXnwc&X-Amz-Signature=1c4337e0df27e305b93c0f0fb7d1071de82365c37f8821fa94b31594f5788651&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEUWNC4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCt5j7j3X26jbI6URDVgHS539c7S8qeecksBadzkLraIgIhAP8sS47L%2BzXQIPmU8qS3stVukVHW%2FgIz%2BJXluxgQn1NRKv8DCE0QABoMNjM3NDIzMTgzODA1IgwIufsrVHWbHf85cnkq3AMtzAxKL8jTitGxtdqaRql%2B1U1Q3p%2F0%2BMR95XCmtR8WxM1fVYX8U5h18xmMU6tHN3ErZmxCKPTkjrsN%2BlaVovEJRG%2FgjRuL3JK%2FH6nmVO5L%2F7DMflGTFf%2F9REA%2BYqPDbdONA3GthHexDTcdS6k8xRllgxM5bnAkcuAeSwEE%2BjeXnAGV9SmX3u1sX8pxqeugwqPF7vL%2BI2tSu%2Ftlwp72RSPVQ2MPzdZUWMNem3Rbajvk6VHqKD6UwvId1cK6asGjl6nqfWAcCJczE5sRplRTAySKJr%2Bv%2FUg7lUGqXUCU4aRln7tHc6pils0Oopp4G9PJGJtrLvWHGrCKopHsYagpGqPUXDR2UmhzeaIg9KNXv3P%2FbSplxfIt2CtNWoO9qvJlW%2FATg38EMoNxbXH7MuAj%2BH5pb6NA0ihhCFQoXfcN0o3ORN868iDtL6hlzOMCs03vB115e55Y%2BFoiXc2QNEuNFXs62TZ7VD1hLrZrr2tFGnGQq%2BUN99Uc72zen9h3eMXpAmpaOE9Ha3YqUhRi07qSeC0hPMFC57a0cT%2FcpeKeCj0tvfPKZNDUm3UYZwHiGO1Pp1NkCvP81WCzzLN4bLApRcI34s3FuuPxXizBipy04xPXijm4R2ELyZWMXrugozD62MO9BjqkAeCUvbMsT40Y3CJJsSENgBBC1SMggjuFKCsGfGw6oYOOyCFEH4LbhrOOqI2icI1r5Luiy6PflUGGzxjmcdSeUnaDkrVYu12LEbbKbAatJmbwNrgccI8IeTg%2FWsdiEfKMd85DTFVgaZgyNLh0WoNLnFeM7gKghaBhVXbrK3flld0bulW6%2BuAmPj2%2FNjhEwVmi3KQI70yjCFI3fCMd%2BcROlzFAXnwc&X-Amz-Signature=25fbadfbd053e516920bcff0d70e7e5a5500df34807c762c34871650fd52b70f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEUWNC4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCt5j7j3X26jbI6URDVgHS539c7S8qeecksBadzkLraIgIhAP8sS47L%2BzXQIPmU8qS3stVukVHW%2FgIz%2BJXluxgQn1NRKv8DCE0QABoMNjM3NDIzMTgzODA1IgwIufsrVHWbHf85cnkq3AMtzAxKL8jTitGxtdqaRql%2B1U1Q3p%2F0%2BMR95XCmtR8WxM1fVYX8U5h18xmMU6tHN3ErZmxCKPTkjrsN%2BlaVovEJRG%2FgjRuL3JK%2FH6nmVO5L%2F7DMflGTFf%2F9REA%2BYqPDbdONA3GthHexDTcdS6k8xRllgxM5bnAkcuAeSwEE%2BjeXnAGV9SmX3u1sX8pxqeugwqPF7vL%2BI2tSu%2Ftlwp72RSPVQ2MPzdZUWMNem3Rbajvk6VHqKD6UwvId1cK6asGjl6nqfWAcCJczE5sRplRTAySKJr%2Bv%2FUg7lUGqXUCU4aRln7tHc6pils0Oopp4G9PJGJtrLvWHGrCKopHsYagpGqPUXDR2UmhzeaIg9KNXv3P%2FbSplxfIt2CtNWoO9qvJlW%2FATg38EMoNxbXH7MuAj%2BH5pb6NA0ihhCFQoXfcN0o3ORN868iDtL6hlzOMCs03vB115e55Y%2BFoiXc2QNEuNFXs62TZ7VD1hLrZrr2tFGnGQq%2BUN99Uc72zen9h3eMXpAmpaOE9Ha3YqUhRi07qSeC0hPMFC57a0cT%2FcpeKeCj0tvfPKZNDUm3UYZwHiGO1Pp1NkCvP81WCzzLN4bLApRcI34s3FuuPxXizBipy04xPXijm4R2ELyZWMXrugozD62MO9BjqkAeCUvbMsT40Y3CJJsSENgBBC1SMggjuFKCsGfGw6oYOOyCFEH4LbhrOOqI2icI1r5Luiy6PflUGGzxjmcdSeUnaDkrVYu12LEbbKbAatJmbwNrgccI8IeTg%2FWsdiEfKMd85DTFVgaZgyNLh0WoNLnFeM7gKghaBhVXbrK3flld0bulW6%2BuAmPj2%2FNjhEwVmi3KQI70yjCFI3fCMd%2BcROlzFAXnwc&X-Amz-Signature=ca53a465cf6aada92a2cf47051d4b1e9a834c5a876f43f9a48c18c52d7f0424d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEUWNC4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCt5j7j3X26jbI6URDVgHS539c7S8qeecksBadzkLraIgIhAP8sS47L%2BzXQIPmU8qS3stVukVHW%2FgIz%2BJXluxgQn1NRKv8DCE0QABoMNjM3NDIzMTgzODA1IgwIufsrVHWbHf85cnkq3AMtzAxKL8jTitGxtdqaRql%2B1U1Q3p%2F0%2BMR95XCmtR8WxM1fVYX8U5h18xmMU6tHN3ErZmxCKPTkjrsN%2BlaVovEJRG%2FgjRuL3JK%2FH6nmVO5L%2F7DMflGTFf%2F9REA%2BYqPDbdONA3GthHexDTcdS6k8xRllgxM5bnAkcuAeSwEE%2BjeXnAGV9SmX3u1sX8pxqeugwqPF7vL%2BI2tSu%2Ftlwp72RSPVQ2MPzdZUWMNem3Rbajvk6VHqKD6UwvId1cK6asGjl6nqfWAcCJczE5sRplRTAySKJr%2Bv%2FUg7lUGqXUCU4aRln7tHc6pils0Oopp4G9PJGJtrLvWHGrCKopHsYagpGqPUXDR2UmhzeaIg9KNXv3P%2FbSplxfIt2CtNWoO9qvJlW%2FATg38EMoNxbXH7MuAj%2BH5pb6NA0ihhCFQoXfcN0o3ORN868iDtL6hlzOMCs03vB115e55Y%2BFoiXc2QNEuNFXs62TZ7VD1hLrZrr2tFGnGQq%2BUN99Uc72zen9h3eMXpAmpaOE9Ha3YqUhRi07qSeC0hPMFC57a0cT%2FcpeKeCj0tvfPKZNDUm3UYZwHiGO1Pp1NkCvP81WCzzLN4bLApRcI34s3FuuPxXizBipy04xPXijm4R2ELyZWMXrugozD62MO9BjqkAeCUvbMsT40Y3CJJsSENgBBC1SMggjuFKCsGfGw6oYOOyCFEH4LbhrOOqI2icI1r5Luiy6PflUGGzxjmcdSeUnaDkrVYu12LEbbKbAatJmbwNrgccI8IeTg%2FWsdiEfKMd85DTFVgaZgyNLh0WoNLnFeM7gKghaBhVXbrK3flld0bulW6%2BuAmPj2%2FNjhEwVmi3KQI70yjCFI3fCMd%2BcROlzFAXnwc&X-Amz-Signature=c73e3133dd7544d31960d61d984b10545a8061303199c666f10b6e0a73bb33dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEUWNC4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCt5j7j3X26jbI6URDVgHS539c7S8qeecksBadzkLraIgIhAP8sS47L%2BzXQIPmU8qS3stVukVHW%2FgIz%2BJXluxgQn1NRKv8DCE0QABoMNjM3NDIzMTgzODA1IgwIufsrVHWbHf85cnkq3AMtzAxKL8jTitGxtdqaRql%2B1U1Q3p%2F0%2BMR95XCmtR8WxM1fVYX8U5h18xmMU6tHN3ErZmxCKPTkjrsN%2BlaVovEJRG%2FgjRuL3JK%2FH6nmVO5L%2F7DMflGTFf%2F9REA%2BYqPDbdONA3GthHexDTcdS6k8xRllgxM5bnAkcuAeSwEE%2BjeXnAGV9SmX3u1sX8pxqeugwqPF7vL%2BI2tSu%2Ftlwp72RSPVQ2MPzdZUWMNem3Rbajvk6VHqKD6UwvId1cK6asGjl6nqfWAcCJczE5sRplRTAySKJr%2Bv%2FUg7lUGqXUCU4aRln7tHc6pils0Oopp4G9PJGJtrLvWHGrCKopHsYagpGqPUXDR2UmhzeaIg9KNXv3P%2FbSplxfIt2CtNWoO9qvJlW%2FATg38EMoNxbXH7MuAj%2BH5pb6NA0ihhCFQoXfcN0o3ORN868iDtL6hlzOMCs03vB115e55Y%2BFoiXc2QNEuNFXs62TZ7VD1hLrZrr2tFGnGQq%2BUN99Uc72zen9h3eMXpAmpaOE9Ha3YqUhRi07qSeC0hPMFC57a0cT%2FcpeKeCj0tvfPKZNDUm3UYZwHiGO1Pp1NkCvP81WCzzLN4bLApRcI34s3FuuPxXizBipy04xPXijm4R2ELyZWMXrugozD62MO9BjqkAeCUvbMsT40Y3CJJsSENgBBC1SMggjuFKCsGfGw6oYOOyCFEH4LbhrOOqI2icI1r5Luiy6PflUGGzxjmcdSeUnaDkrVYu12LEbbKbAatJmbwNrgccI8IeTg%2FWsdiEfKMd85DTFVgaZgyNLh0WoNLnFeM7gKghaBhVXbrK3flld0bulW6%2BuAmPj2%2FNjhEwVmi3KQI70yjCFI3fCMd%2BcROlzFAXnwc&X-Amz-Signature=8c60c3d99ff13f73d8da5da352115f4fb7cd75ee4e2984d221b7d971ea15776f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEUWNC4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCt5j7j3X26jbI6URDVgHS539c7S8qeecksBadzkLraIgIhAP8sS47L%2BzXQIPmU8qS3stVukVHW%2FgIz%2BJXluxgQn1NRKv8DCE0QABoMNjM3NDIzMTgzODA1IgwIufsrVHWbHf85cnkq3AMtzAxKL8jTitGxtdqaRql%2B1U1Q3p%2F0%2BMR95XCmtR8WxM1fVYX8U5h18xmMU6tHN3ErZmxCKPTkjrsN%2BlaVovEJRG%2FgjRuL3JK%2FH6nmVO5L%2F7DMflGTFf%2F9REA%2BYqPDbdONA3GthHexDTcdS6k8xRllgxM5bnAkcuAeSwEE%2BjeXnAGV9SmX3u1sX8pxqeugwqPF7vL%2BI2tSu%2Ftlwp72RSPVQ2MPzdZUWMNem3Rbajvk6VHqKD6UwvId1cK6asGjl6nqfWAcCJczE5sRplRTAySKJr%2Bv%2FUg7lUGqXUCU4aRln7tHc6pils0Oopp4G9PJGJtrLvWHGrCKopHsYagpGqPUXDR2UmhzeaIg9KNXv3P%2FbSplxfIt2CtNWoO9qvJlW%2FATg38EMoNxbXH7MuAj%2BH5pb6NA0ihhCFQoXfcN0o3ORN868iDtL6hlzOMCs03vB115e55Y%2BFoiXc2QNEuNFXs62TZ7VD1hLrZrr2tFGnGQq%2BUN99Uc72zen9h3eMXpAmpaOE9Ha3YqUhRi07qSeC0hPMFC57a0cT%2FcpeKeCj0tvfPKZNDUm3UYZwHiGO1Pp1NkCvP81WCzzLN4bLApRcI34s3FuuPxXizBipy04xPXijm4R2ELyZWMXrugozD62MO9BjqkAeCUvbMsT40Y3CJJsSENgBBC1SMggjuFKCsGfGw6oYOOyCFEH4LbhrOOqI2icI1r5Luiy6PflUGGzxjmcdSeUnaDkrVYu12LEbbKbAatJmbwNrgccI8IeTg%2FWsdiEfKMd85DTFVgaZgyNLh0WoNLnFeM7gKghaBhVXbrK3flld0bulW6%2BuAmPj2%2FNjhEwVmi3KQI70yjCFI3fCMd%2BcROlzFAXnwc&X-Amz-Signature=58b01322d5c247a71a9ceaabcc7e843cb8d37e02989cb8f41f85eb5c8b28bd30&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEUWNC4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCt5j7j3X26jbI6URDVgHS539c7S8qeecksBadzkLraIgIhAP8sS47L%2BzXQIPmU8qS3stVukVHW%2FgIz%2BJXluxgQn1NRKv8DCE0QABoMNjM3NDIzMTgzODA1IgwIufsrVHWbHf85cnkq3AMtzAxKL8jTitGxtdqaRql%2B1U1Q3p%2F0%2BMR95XCmtR8WxM1fVYX8U5h18xmMU6tHN3ErZmxCKPTkjrsN%2BlaVovEJRG%2FgjRuL3JK%2FH6nmVO5L%2F7DMflGTFf%2F9REA%2BYqPDbdONA3GthHexDTcdS6k8xRllgxM5bnAkcuAeSwEE%2BjeXnAGV9SmX3u1sX8pxqeugwqPF7vL%2BI2tSu%2Ftlwp72RSPVQ2MPzdZUWMNem3Rbajvk6VHqKD6UwvId1cK6asGjl6nqfWAcCJczE5sRplRTAySKJr%2Bv%2FUg7lUGqXUCU4aRln7tHc6pils0Oopp4G9PJGJtrLvWHGrCKopHsYagpGqPUXDR2UmhzeaIg9KNXv3P%2FbSplxfIt2CtNWoO9qvJlW%2FATg38EMoNxbXH7MuAj%2BH5pb6NA0ihhCFQoXfcN0o3ORN868iDtL6hlzOMCs03vB115e55Y%2BFoiXc2QNEuNFXs62TZ7VD1hLrZrr2tFGnGQq%2BUN99Uc72zen9h3eMXpAmpaOE9Ha3YqUhRi07qSeC0hPMFC57a0cT%2FcpeKeCj0tvfPKZNDUm3UYZwHiGO1Pp1NkCvP81WCzzLN4bLApRcI34s3FuuPxXizBipy04xPXijm4R2ELyZWMXrugozD62MO9BjqkAeCUvbMsT40Y3CJJsSENgBBC1SMggjuFKCsGfGw6oYOOyCFEH4LbhrOOqI2icI1r5Luiy6PflUGGzxjmcdSeUnaDkrVYu12LEbbKbAatJmbwNrgccI8IeTg%2FWsdiEfKMd85DTFVgaZgyNLh0WoNLnFeM7gKghaBhVXbrK3flld0bulW6%2BuAmPj2%2FNjhEwVmi3KQI70yjCFI3fCMd%2BcROlzFAXnwc&X-Amz-Signature=f74b151e1aa219ecafe74fc310c4ad0d343147117df309c909746f842de64fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
