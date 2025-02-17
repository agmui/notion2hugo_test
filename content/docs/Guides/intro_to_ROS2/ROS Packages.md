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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYG2DHVA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQD4B7bvYqAgwZVC9WnFUj6IIRtiqQot6ISI7sIdbgZYnAIhAL8NJI0SuTKidbhtrUm%2B6hLtNfSgHqME3CV8OnhqCQnfKv8DCHEQABoMNjM3NDIzMTgzODA1Igz4%2F5wbId2xsxnlwuwq3AMqModo0T87ZO46IG7%2BkICw4OTMdwvcyzzJwsS5C0%2FQNpQQedGZbM%2BA8M0VS91UKFBpSjBQ1Zr3TmIQhqi9oijCheqa9b841TvvqhvrCCVaJpZKLqyYd4k4PKoM40tEA4S48rz48R5RjFUWue1DwbLO6RQfYbWROEMsKZWVYm9pmPBxk9WJs2jDwsPMFO%2FzRIaSve%2BCivbbj0f%2F9RXtnzJbAttLxE9qaLdK9PllFVzJiGN6ohSbblokiSrG1VHdPsdNzGTOma7%2F9pNcM1C6%2Bp5fGxPG40fwCSTzI9bF2%2Fqmp4v12GQ1J4NVon%2F3IXhHQzT26jnX0k3zUf0MWRPPgs60ZCp51lfZoil6eRdRFC2RoHYc96BFcIc1Uz64kIlPINS5Y%2BIm0Swbnw60jg%2FLTElnmp1OQGxiSDki14fYESn0zcvC6%2Fp8tMzpCAK59%2FwTGZEQ4UT%2Fe%2B%2BfZTedN43CH82342d3Xwxi%2FsGPgY%2By9EUt%2FMZVdrJmEV0dRbVs2wetOy7jpkWxFDY%2BBRnZuEC%2FPIgFD5Pd4sJoYP6%2BFXZ5iHd6Aabwjq%2FENNyl8BbhLbbpbbmRfp0QnxWZCobbrdcTAugSQDBMqE31cr5ZiEdnIKK5w72mKr7CyhmakE8XDzCYzsu9BjqkAdJ1tbx7EMj%2FRfs1NRLjb0A8MBg9uf7p3tsM88o35ZA0mMfpFQBqRUMTxnml887eClHlhh8EHLoF%2BRodxCCL9Wz0ai3x5pnSch%2FbR39825NVrh%2FjUuCrNJ%2FMxiy6z%2FHYsLkDHIY6ZlWKksd%2BPCwo0k6JV%2FD0caTx8MS23T2ZkDQmaTcAhvrXtGK2cOrJk70WzqqRa9mkYnG8naW%2FEhkLxnmZzQrj&X-Amz-Signature=134624387620fb1c2d4e5d2d06497d2879fd0741770c3eb606f749db0439b4f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYG2DHVA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQD4B7bvYqAgwZVC9WnFUj6IIRtiqQot6ISI7sIdbgZYnAIhAL8NJI0SuTKidbhtrUm%2B6hLtNfSgHqME3CV8OnhqCQnfKv8DCHEQABoMNjM3NDIzMTgzODA1Igz4%2F5wbId2xsxnlwuwq3AMqModo0T87ZO46IG7%2BkICw4OTMdwvcyzzJwsS5C0%2FQNpQQedGZbM%2BA8M0VS91UKFBpSjBQ1Zr3TmIQhqi9oijCheqa9b841TvvqhvrCCVaJpZKLqyYd4k4PKoM40tEA4S48rz48R5RjFUWue1DwbLO6RQfYbWROEMsKZWVYm9pmPBxk9WJs2jDwsPMFO%2FzRIaSve%2BCivbbj0f%2F9RXtnzJbAttLxE9qaLdK9PllFVzJiGN6ohSbblokiSrG1VHdPsdNzGTOma7%2F9pNcM1C6%2Bp5fGxPG40fwCSTzI9bF2%2Fqmp4v12GQ1J4NVon%2F3IXhHQzT26jnX0k3zUf0MWRPPgs60ZCp51lfZoil6eRdRFC2RoHYc96BFcIc1Uz64kIlPINS5Y%2BIm0Swbnw60jg%2FLTElnmp1OQGxiSDki14fYESn0zcvC6%2Fp8tMzpCAK59%2FwTGZEQ4UT%2Fe%2B%2BfZTedN43CH82342d3Xwxi%2FsGPgY%2By9EUt%2FMZVdrJmEV0dRbVs2wetOy7jpkWxFDY%2BBRnZuEC%2FPIgFD5Pd4sJoYP6%2BFXZ5iHd6Aabwjq%2FENNyl8BbhLbbpbbmRfp0QnxWZCobbrdcTAugSQDBMqE31cr5ZiEdnIKK5w72mKr7CyhmakE8XDzCYzsu9BjqkAdJ1tbx7EMj%2FRfs1NRLjb0A8MBg9uf7p3tsM88o35ZA0mMfpFQBqRUMTxnml887eClHlhh8EHLoF%2BRodxCCL9Wz0ai3x5pnSch%2FbR39825NVrh%2FjUuCrNJ%2FMxiy6z%2FHYsLkDHIY6ZlWKksd%2BPCwo0k6JV%2FD0caTx8MS23T2ZkDQmaTcAhvrXtGK2cOrJk70WzqqRa9mkYnG8naW%2FEhkLxnmZzQrj&X-Amz-Signature=6ab691e47140b61dd7a4eb8b8a75d4888739603a95cfae64338336f7a8e89c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYG2DHVA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQD4B7bvYqAgwZVC9WnFUj6IIRtiqQot6ISI7sIdbgZYnAIhAL8NJI0SuTKidbhtrUm%2B6hLtNfSgHqME3CV8OnhqCQnfKv8DCHEQABoMNjM3NDIzMTgzODA1Igz4%2F5wbId2xsxnlwuwq3AMqModo0T87ZO46IG7%2BkICw4OTMdwvcyzzJwsS5C0%2FQNpQQedGZbM%2BA8M0VS91UKFBpSjBQ1Zr3TmIQhqi9oijCheqa9b841TvvqhvrCCVaJpZKLqyYd4k4PKoM40tEA4S48rz48R5RjFUWue1DwbLO6RQfYbWROEMsKZWVYm9pmPBxk9WJs2jDwsPMFO%2FzRIaSve%2BCivbbj0f%2F9RXtnzJbAttLxE9qaLdK9PllFVzJiGN6ohSbblokiSrG1VHdPsdNzGTOma7%2F9pNcM1C6%2Bp5fGxPG40fwCSTzI9bF2%2Fqmp4v12GQ1J4NVon%2F3IXhHQzT26jnX0k3zUf0MWRPPgs60ZCp51lfZoil6eRdRFC2RoHYc96BFcIc1Uz64kIlPINS5Y%2BIm0Swbnw60jg%2FLTElnmp1OQGxiSDki14fYESn0zcvC6%2Fp8tMzpCAK59%2FwTGZEQ4UT%2Fe%2B%2BfZTedN43CH82342d3Xwxi%2FsGPgY%2By9EUt%2FMZVdrJmEV0dRbVs2wetOy7jpkWxFDY%2BBRnZuEC%2FPIgFD5Pd4sJoYP6%2BFXZ5iHd6Aabwjq%2FENNyl8BbhLbbpbbmRfp0QnxWZCobbrdcTAugSQDBMqE31cr5ZiEdnIKK5w72mKr7CyhmakE8XDzCYzsu9BjqkAdJ1tbx7EMj%2FRfs1NRLjb0A8MBg9uf7p3tsM88o35ZA0mMfpFQBqRUMTxnml887eClHlhh8EHLoF%2BRodxCCL9Wz0ai3x5pnSch%2FbR39825NVrh%2FjUuCrNJ%2FMxiy6z%2FHYsLkDHIY6ZlWKksd%2BPCwo0k6JV%2FD0caTx8MS23T2ZkDQmaTcAhvrXtGK2cOrJk70WzqqRa9mkYnG8naW%2FEhkLxnmZzQrj&X-Amz-Signature=be4f1c5b964e86a76304d18ee0e4dfc98f69498e699e4eeb5bf2b5a710171ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYG2DHVA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQD4B7bvYqAgwZVC9WnFUj6IIRtiqQot6ISI7sIdbgZYnAIhAL8NJI0SuTKidbhtrUm%2B6hLtNfSgHqME3CV8OnhqCQnfKv8DCHEQABoMNjM3NDIzMTgzODA1Igz4%2F5wbId2xsxnlwuwq3AMqModo0T87ZO46IG7%2BkICw4OTMdwvcyzzJwsS5C0%2FQNpQQedGZbM%2BA8M0VS91UKFBpSjBQ1Zr3TmIQhqi9oijCheqa9b841TvvqhvrCCVaJpZKLqyYd4k4PKoM40tEA4S48rz48R5RjFUWue1DwbLO6RQfYbWROEMsKZWVYm9pmPBxk9WJs2jDwsPMFO%2FzRIaSve%2BCivbbj0f%2F9RXtnzJbAttLxE9qaLdK9PllFVzJiGN6ohSbblokiSrG1VHdPsdNzGTOma7%2F9pNcM1C6%2Bp5fGxPG40fwCSTzI9bF2%2Fqmp4v12GQ1J4NVon%2F3IXhHQzT26jnX0k3zUf0MWRPPgs60ZCp51lfZoil6eRdRFC2RoHYc96BFcIc1Uz64kIlPINS5Y%2BIm0Swbnw60jg%2FLTElnmp1OQGxiSDki14fYESn0zcvC6%2Fp8tMzpCAK59%2FwTGZEQ4UT%2Fe%2B%2BfZTedN43CH82342d3Xwxi%2FsGPgY%2By9EUt%2FMZVdrJmEV0dRbVs2wetOy7jpkWxFDY%2BBRnZuEC%2FPIgFD5Pd4sJoYP6%2BFXZ5iHd6Aabwjq%2FENNyl8BbhLbbpbbmRfp0QnxWZCobbrdcTAugSQDBMqE31cr5ZiEdnIKK5w72mKr7CyhmakE8XDzCYzsu9BjqkAdJ1tbx7EMj%2FRfs1NRLjb0A8MBg9uf7p3tsM88o35ZA0mMfpFQBqRUMTxnml887eClHlhh8EHLoF%2BRodxCCL9Wz0ai3x5pnSch%2FbR39825NVrh%2FjUuCrNJ%2FMxiy6z%2FHYsLkDHIY6ZlWKksd%2BPCwo0k6JV%2FD0caTx8MS23T2ZkDQmaTcAhvrXtGK2cOrJk70WzqqRa9mkYnG8naW%2FEhkLxnmZzQrj&X-Amz-Signature=61778ee2984a83e692e01459271a226e9a6c25935e7d950b7d3377d3b2519e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYG2DHVA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQD4B7bvYqAgwZVC9WnFUj6IIRtiqQot6ISI7sIdbgZYnAIhAL8NJI0SuTKidbhtrUm%2B6hLtNfSgHqME3CV8OnhqCQnfKv8DCHEQABoMNjM3NDIzMTgzODA1Igz4%2F5wbId2xsxnlwuwq3AMqModo0T87ZO46IG7%2BkICw4OTMdwvcyzzJwsS5C0%2FQNpQQedGZbM%2BA8M0VS91UKFBpSjBQ1Zr3TmIQhqi9oijCheqa9b841TvvqhvrCCVaJpZKLqyYd4k4PKoM40tEA4S48rz48R5RjFUWue1DwbLO6RQfYbWROEMsKZWVYm9pmPBxk9WJs2jDwsPMFO%2FzRIaSve%2BCivbbj0f%2F9RXtnzJbAttLxE9qaLdK9PllFVzJiGN6ohSbblokiSrG1VHdPsdNzGTOma7%2F9pNcM1C6%2Bp5fGxPG40fwCSTzI9bF2%2Fqmp4v12GQ1J4NVon%2F3IXhHQzT26jnX0k3zUf0MWRPPgs60ZCp51lfZoil6eRdRFC2RoHYc96BFcIc1Uz64kIlPINS5Y%2BIm0Swbnw60jg%2FLTElnmp1OQGxiSDki14fYESn0zcvC6%2Fp8tMzpCAK59%2FwTGZEQ4UT%2Fe%2B%2BfZTedN43CH82342d3Xwxi%2FsGPgY%2By9EUt%2FMZVdrJmEV0dRbVs2wetOy7jpkWxFDY%2BBRnZuEC%2FPIgFD5Pd4sJoYP6%2BFXZ5iHd6Aabwjq%2FENNyl8BbhLbbpbbmRfp0QnxWZCobbrdcTAugSQDBMqE31cr5ZiEdnIKK5w72mKr7CyhmakE8XDzCYzsu9BjqkAdJ1tbx7EMj%2FRfs1NRLjb0A8MBg9uf7p3tsM88o35ZA0mMfpFQBqRUMTxnml887eClHlhh8EHLoF%2BRodxCCL9Wz0ai3x5pnSch%2FbR39825NVrh%2FjUuCrNJ%2FMxiy6z%2FHYsLkDHIY6ZlWKksd%2BPCwo0k6JV%2FD0caTx8MS23T2ZkDQmaTcAhvrXtGK2cOrJk70WzqqRa9mkYnG8naW%2FEhkLxnmZzQrj&X-Amz-Signature=d9aa81c48382c9e54373fb05e40e7a04a55b3b499982f607a040ab1af7ce54eb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYG2DHVA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQD4B7bvYqAgwZVC9WnFUj6IIRtiqQot6ISI7sIdbgZYnAIhAL8NJI0SuTKidbhtrUm%2B6hLtNfSgHqME3CV8OnhqCQnfKv8DCHEQABoMNjM3NDIzMTgzODA1Igz4%2F5wbId2xsxnlwuwq3AMqModo0T87ZO46IG7%2BkICw4OTMdwvcyzzJwsS5C0%2FQNpQQedGZbM%2BA8M0VS91UKFBpSjBQ1Zr3TmIQhqi9oijCheqa9b841TvvqhvrCCVaJpZKLqyYd4k4PKoM40tEA4S48rz48R5RjFUWue1DwbLO6RQfYbWROEMsKZWVYm9pmPBxk9WJs2jDwsPMFO%2FzRIaSve%2BCivbbj0f%2F9RXtnzJbAttLxE9qaLdK9PllFVzJiGN6ohSbblokiSrG1VHdPsdNzGTOma7%2F9pNcM1C6%2Bp5fGxPG40fwCSTzI9bF2%2Fqmp4v12GQ1J4NVon%2F3IXhHQzT26jnX0k3zUf0MWRPPgs60ZCp51lfZoil6eRdRFC2RoHYc96BFcIc1Uz64kIlPINS5Y%2BIm0Swbnw60jg%2FLTElnmp1OQGxiSDki14fYESn0zcvC6%2Fp8tMzpCAK59%2FwTGZEQ4UT%2Fe%2B%2BfZTedN43CH82342d3Xwxi%2FsGPgY%2By9EUt%2FMZVdrJmEV0dRbVs2wetOy7jpkWxFDY%2BBRnZuEC%2FPIgFD5Pd4sJoYP6%2BFXZ5iHd6Aabwjq%2FENNyl8BbhLbbpbbmRfp0QnxWZCobbrdcTAugSQDBMqE31cr5ZiEdnIKK5w72mKr7CyhmakE8XDzCYzsu9BjqkAdJ1tbx7EMj%2FRfs1NRLjb0A8MBg9uf7p3tsM88o35ZA0mMfpFQBqRUMTxnml887eClHlhh8EHLoF%2BRodxCCL9Wz0ai3x5pnSch%2FbR39825NVrh%2FjUuCrNJ%2FMxiy6z%2FHYsLkDHIY6ZlWKksd%2BPCwo0k6JV%2FD0caTx8MS23T2ZkDQmaTcAhvrXtGK2cOrJk70WzqqRa9mkYnG8naW%2FEhkLxnmZzQrj&X-Amz-Signature=0da8d9a15b72c59fbbd74bb5ba20565407e751624d7eb0291532b69e9628de52&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYG2DHVA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQD4B7bvYqAgwZVC9WnFUj6IIRtiqQot6ISI7sIdbgZYnAIhAL8NJI0SuTKidbhtrUm%2B6hLtNfSgHqME3CV8OnhqCQnfKv8DCHEQABoMNjM3NDIzMTgzODA1Igz4%2F5wbId2xsxnlwuwq3AMqModo0T87ZO46IG7%2BkICw4OTMdwvcyzzJwsS5C0%2FQNpQQedGZbM%2BA8M0VS91UKFBpSjBQ1Zr3TmIQhqi9oijCheqa9b841TvvqhvrCCVaJpZKLqyYd4k4PKoM40tEA4S48rz48R5RjFUWue1DwbLO6RQfYbWROEMsKZWVYm9pmPBxk9WJs2jDwsPMFO%2FzRIaSve%2BCivbbj0f%2F9RXtnzJbAttLxE9qaLdK9PllFVzJiGN6ohSbblokiSrG1VHdPsdNzGTOma7%2F9pNcM1C6%2Bp5fGxPG40fwCSTzI9bF2%2Fqmp4v12GQ1J4NVon%2F3IXhHQzT26jnX0k3zUf0MWRPPgs60ZCp51lfZoil6eRdRFC2RoHYc96BFcIc1Uz64kIlPINS5Y%2BIm0Swbnw60jg%2FLTElnmp1OQGxiSDki14fYESn0zcvC6%2Fp8tMzpCAK59%2FwTGZEQ4UT%2Fe%2B%2BfZTedN43CH82342d3Xwxi%2FsGPgY%2By9EUt%2FMZVdrJmEV0dRbVs2wetOy7jpkWxFDY%2BBRnZuEC%2FPIgFD5Pd4sJoYP6%2BFXZ5iHd6Aabwjq%2FENNyl8BbhLbbpbbmRfp0QnxWZCobbrdcTAugSQDBMqE31cr5ZiEdnIKK5w72mKr7CyhmakE8XDzCYzsu9BjqkAdJ1tbx7EMj%2FRfs1NRLjb0A8MBg9uf7p3tsM88o35ZA0mMfpFQBqRUMTxnml887eClHlhh8EHLoF%2BRodxCCL9Wz0ai3x5pnSch%2FbR39825NVrh%2FjUuCrNJ%2FMxiy6z%2FHYsLkDHIY6ZlWKksd%2BPCwo0k6JV%2FD0caTx8MS23T2ZkDQmaTcAhvrXtGK2cOrJk70WzqqRa9mkYnG8naW%2FEhkLxnmZzQrj&X-Amz-Signature=5106097859ec7788fe1e652dee87091ffe4c2ab9252eef0117669104b7d5047d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
