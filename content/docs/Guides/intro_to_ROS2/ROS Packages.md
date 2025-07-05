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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUORYMCP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEm1WK%2FTbVO0xP%2FqhS3wmf3DuOwYBTzP4N%2BUOhnCf4%2FsAiEAvQQh7PwH8y%2BOl9dNAu59x2pF370%2Bt%2Bs3C%2FgMZ2701jcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGm8E6ItKgSvrm5RYircA8Fxlwwpy5%2BYLBwd5n4q4t6zWv6AKyrZTQppyTrE9Jw6GPSML%2FSwAqJlmUZDF0UT3b58vWaLyUq9oQROQ3J3xNOuW9KsQiVO9NwdhvsIw7sIOLjcHG9BovtBdYbNY2AYpHd8hBVCUWxRxw4QyFW%2Byk90eyiSoSWOg9iA95XcYf%2B0oKOqVx8AKWoQXQSHeY4CjRfnnG0GcPuwjnWdOkzCABSpzCbtp7KMRzzETz5ZKmrQ7AJxk3rRWWYlNgMu3fWY7P5BE%2BrHWkBxOlX7VbqAR80uyaA2hR10zT%2BdILwj6m21wwPqI59gXplNdRrH8Mz1%2F41T6z7yj%2FjR256vOkCYTzUk5wBXUasiqTFPEy270kFdgL%2FibWNPRSelvPTKCRacQKqc20ymqsVnwgYGHGDFaxP6EBTMPWG5GWCaB%2BgL8qx65N3IDKQU0HjfXXmWv9VURBPMBiyPcRXizNOaprTxCnsXr3THitA8U4KlGSjytpcEHmGB2lxaF3o1FGkf4ekn%2BJ7GlUUjV%2BDMIB40UQoC5MaVMhbbX3ALfeBmmmQ99ey%2BmYD9L0kVgZt6%2BXdozWhG0FNVTuX9afK5%2F33CvT2E2%2B1M9yF1b9eagzkPXRcjQ8Xk%2Fnd5PwukBYIqyuitMLTKpMMGOqUBA%2FgIlf14UCFxP5JaIPPvqbbL%2F2a%2BKRDtMuAIZWIZgGBFzVTkB9PcQTQLgAChd4o0CTqGRqd2L%2BkN1aTAHR9XxKJ1E89kdhp3MvaoCMLspM1WrmOtJKybNVZkrRDDjxjS4grNGoQYSM1DDTc8x7lERSjknPCVCCH%2BmIXNBJ0%2F0cvPrUaGC32wWjegDpeCwYreCkmVFb3E7vqE0qIUmBTvanbj8aQe&X-Amz-Signature=76023f8f08e751819e035d509ede454818b164337194b31cff127d24e30ae107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUORYMCP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEm1WK%2FTbVO0xP%2FqhS3wmf3DuOwYBTzP4N%2BUOhnCf4%2FsAiEAvQQh7PwH8y%2BOl9dNAu59x2pF370%2Bt%2Bs3C%2FgMZ2701jcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGm8E6ItKgSvrm5RYircA8Fxlwwpy5%2BYLBwd5n4q4t6zWv6AKyrZTQppyTrE9Jw6GPSML%2FSwAqJlmUZDF0UT3b58vWaLyUq9oQROQ3J3xNOuW9KsQiVO9NwdhvsIw7sIOLjcHG9BovtBdYbNY2AYpHd8hBVCUWxRxw4QyFW%2Byk90eyiSoSWOg9iA95XcYf%2B0oKOqVx8AKWoQXQSHeY4CjRfnnG0GcPuwjnWdOkzCABSpzCbtp7KMRzzETz5ZKmrQ7AJxk3rRWWYlNgMu3fWY7P5BE%2BrHWkBxOlX7VbqAR80uyaA2hR10zT%2BdILwj6m21wwPqI59gXplNdRrH8Mz1%2F41T6z7yj%2FjR256vOkCYTzUk5wBXUasiqTFPEy270kFdgL%2FibWNPRSelvPTKCRacQKqc20ymqsVnwgYGHGDFaxP6EBTMPWG5GWCaB%2BgL8qx65N3IDKQU0HjfXXmWv9VURBPMBiyPcRXizNOaprTxCnsXr3THitA8U4KlGSjytpcEHmGB2lxaF3o1FGkf4ekn%2BJ7GlUUjV%2BDMIB40UQoC5MaVMhbbX3ALfeBmmmQ99ey%2BmYD9L0kVgZt6%2BXdozWhG0FNVTuX9afK5%2F33CvT2E2%2B1M9yF1b9eagzkPXRcjQ8Xk%2Fnd5PwukBYIqyuitMLTKpMMGOqUBA%2FgIlf14UCFxP5JaIPPvqbbL%2F2a%2BKRDtMuAIZWIZgGBFzVTkB9PcQTQLgAChd4o0CTqGRqd2L%2BkN1aTAHR9XxKJ1E89kdhp3MvaoCMLspM1WrmOtJKybNVZkrRDDjxjS4grNGoQYSM1DDTc8x7lERSjknPCVCCH%2BmIXNBJ0%2F0cvPrUaGC32wWjegDpeCwYreCkmVFb3E7vqE0qIUmBTvanbj8aQe&X-Amz-Signature=73a16df915f4c44901609fc78ecdae3d84fa5f363af8ea33effe0b2617a88c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUORYMCP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEm1WK%2FTbVO0xP%2FqhS3wmf3DuOwYBTzP4N%2BUOhnCf4%2FsAiEAvQQh7PwH8y%2BOl9dNAu59x2pF370%2Bt%2Bs3C%2FgMZ2701jcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGm8E6ItKgSvrm5RYircA8Fxlwwpy5%2BYLBwd5n4q4t6zWv6AKyrZTQppyTrE9Jw6GPSML%2FSwAqJlmUZDF0UT3b58vWaLyUq9oQROQ3J3xNOuW9KsQiVO9NwdhvsIw7sIOLjcHG9BovtBdYbNY2AYpHd8hBVCUWxRxw4QyFW%2Byk90eyiSoSWOg9iA95XcYf%2B0oKOqVx8AKWoQXQSHeY4CjRfnnG0GcPuwjnWdOkzCABSpzCbtp7KMRzzETz5ZKmrQ7AJxk3rRWWYlNgMu3fWY7P5BE%2BrHWkBxOlX7VbqAR80uyaA2hR10zT%2BdILwj6m21wwPqI59gXplNdRrH8Mz1%2F41T6z7yj%2FjR256vOkCYTzUk5wBXUasiqTFPEy270kFdgL%2FibWNPRSelvPTKCRacQKqc20ymqsVnwgYGHGDFaxP6EBTMPWG5GWCaB%2BgL8qx65N3IDKQU0HjfXXmWv9VURBPMBiyPcRXizNOaprTxCnsXr3THitA8U4KlGSjytpcEHmGB2lxaF3o1FGkf4ekn%2BJ7GlUUjV%2BDMIB40UQoC5MaVMhbbX3ALfeBmmmQ99ey%2BmYD9L0kVgZt6%2BXdozWhG0FNVTuX9afK5%2F33CvT2E2%2B1M9yF1b9eagzkPXRcjQ8Xk%2Fnd5PwukBYIqyuitMLTKpMMGOqUBA%2FgIlf14UCFxP5JaIPPvqbbL%2F2a%2BKRDtMuAIZWIZgGBFzVTkB9PcQTQLgAChd4o0CTqGRqd2L%2BkN1aTAHR9XxKJ1E89kdhp3MvaoCMLspM1WrmOtJKybNVZkrRDDjxjS4grNGoQYSM1DDTc8x7lERSjknPCVCCH%2BmIXNBJ0%2F0cvPrUaGC32wWjegDpeCwYreCkmVFb3E7vqE0qIUmBTvanbj8aQe&X-Amz-Signature=5f29118a3b64998e6003a38797502ed563465caef2472e7dff0a35383f84cfaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUORYMCP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEm1WK%2FTbVO0xP%2FqhS3wmf3DuOwYBTzP4N%2BUOhnCf4%2FsAiEAvQQh7PwH8y%2BOl9dNAu59x2pF370%2Bt%2Bs3C%2FgMZ2701jcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGm8E6ItKgSvrm5RYircA8Fxlwwpy5%2BYLBwd5n4q4t6zWv6AKyrZTQppyTrE9Jw6GPSML%2FSwAqJlmUZDF0UT3b58vWaLyUq9oQROQ3J3xNOuW9KsQiVO9NwdhvsIw7sIOLjcHG9BovtBdYbNY2AYpHd8hBVCUWxRxw4QyFW%2Byk90eyiSoSWOg9iA95XcYf%2B0oKOqVx8AKWoQXQSHeY4CjRfnnG0GcPuwjnWdOkzCABSpzCbtp7KMRzzETz5ZKmrQ7AJxk3rRWWYlNgMu3fWY7P5BE%2BrHWkBxOlX7VbqAR80uyaA2hR10zT%2BdILwj6m21wwPqI59gXplNdRrH8Mz1%2F41T6z7yj%2FjR256vOkCYTzUk5wBXUasiqTFPEy270kFdgL%2FibWNPRSelvPTKCRacQKqc20ymqsVnwgYGHGDFaxP6EBTMPWG5GWCaB%2BgL8qx65N3IDKQU0HjfXXmWv9VURBPMBiyPcRXizNOaprTxCnsXr3THitA8U4KlGSjytpcEHmGB2lxaF3o1FGkf4ekn%2BJ7GlUUjV%2BDMIB40UQoC5MaVMhbbX3ALfeBmmmQ99ey%2BmYD9L0kVgZt6%2BXdozWhG0FNVTuX9afK5%2F33CvT2E2%2B1M9yF1b9eagzkPXRcjQ8Xk%2Fnd5PwukBYIqyuitMLTKpMMGOqUBA%2FgIlf14UCFxP5JaIPPvqbbL%2F2a%2BKRDtMuAIZWIZgGBFzVTkB9PcQTQLgAChd4o0CTqGRqd2L%2BkN1aTAHR9XxKJ1E89kdhp3MvaoCMLspM1WrmOtJKybNVZkrRDDjxjS4grNGoQYSM1DDTc8x7lERSjknPCVCCH%2BmIXNBJ0%2F0cvPrUaGC32wWjegDpeCwYreCkmVFb3E7vqE0qIUmBTvanbj8aQe&X-Amz-Signature=4cb28b81296be74eb1c847aef2dc10895516c46070c9bc5af90772b30abd4956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUORYMCP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEm1WK%2FTbVO0xP%2FqhS3wmf3DuOwYBTzP4N%2BUOhnCf4%2FsAiEAvQQh7PwH8y%2BOl9dNAu59x2pF370%2Bt%2Bs3C%2FgMZ2701jcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGm8E6ItKgSvrm5RYircA8Fxlwwpy5%2BYLBwd5n4q4t6zWv6AKyrZTQppyTrE9Jw6GPSML%2FSwAqJlmUZDF0UT3b58vWaLyUq9oQROQ3J3xNOuW9KsQiVO9NwdhvsIw7sIOLjcHG9BovtBdYbNY2AYpHd8hBVCUWxRxw4QyFW%2Byk90eyiSoSWOg9iA95XcYf%2B0oKOqVx8AKWoQXQSHeY4CjRfnnG0GcPuwjnWdOkzCABSpzCbtp7KMRzzETz5ZKmrQ7AJxk3rRWWYlNgMu3fWY7P5BE%2BrHWkBxOlX7VbqAR80uyaA2hR10zT%2BdILwj6m21wwPqI59gXplNdRrH8Mz1%2F41T6z7yj%2FjR256vOkCYTzUk5wBXUasiqTFPEy270kFdgL%2FibWNPRSelvPTKCRacQKqc20ymqsVnwgYGHGDFaxP6EBTMPWG5GWCaB%2BgL8qx65N3IDKQU0HjfXXmWv9VURBPMBiyPcRXizNOaprTxCnsXr3THitA8U4KlGSjytpcEHmGB2lxaF3o1FGkf4ekn%2BJ7GlUUjV%2BDMIB40UQoC5MaVMhbbX3ALfeBmmmQ99ey%2BmYD9L0kVgZt6%2BXdozWhG0FNVTuX9afK5%2F33CvT2E2%2B1M9yF1b9eagzkPXRcjQ8Xk%2Fnd5PwukBYIqyuitMLTKpMMGOqUBA%2FgIlf14UCFxP5JaIPPvqbbL%2F2a%2BKRDtMuAIZWIZgGBFzVTkB9PcQTQLgAChd4o0CTqGRqd2L%2BkN1aTAHR9XxKJ1E89kdhp3MvaoCMLspM1WrmOtJKybNVZkrRDDjxjS4grNGoQYSM1DDTc8x7lERSjknPCVCCH%2BmIXNBJ0%2F0cvPrUaGC32wWjegDpeCwYreCkmVFb3E7vqE0qIUmBTvanbj8aQe&X-Amz-Signature=59fba0d969ec2462509cb0a32dde5dfc505962bda8480c5c03577068bc28c156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUORYMCP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEm1WK%2FTbVO0xP%2FqhS3wmf3DuOwYBTzP4N%2BUOhnCf4%2FsAiEAvQQh7PwH8y%2BOl9dNAu59x2pF370%2Bt%2Bs3C%2FgMZ2701jcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGm8E6ItKgSvrm5RYircA8Fxlwwpy5%2BYLBwd5n4q4t6zWv6AKyrZTQppyTrE9Jw6GPSML%2FSwAqJlmUZDF0UT3b58vWaLyUq9oQROQ3J3xNOuW9KsQiVO9NwdhvsIw7sIOLjcHG9BovtBdYbNY2AYpHd8hBVCUWxRxw4QyFW%2Byk90eyiSoSWOg9iA95XcYf%2B0oKOqVx8AKWoQXQSHeY4CjRfnnG0GcPuwjnWdOkzCABSpzCbtp7KMRzzETz5ZKmrQ7AJxk3rRWWYlNgMu3fWY7P5BE%2BrHWkBxOlX7VbqAR80uyaA2hR10zT%2BdILwj6m21wwPqI59gXplNdRrH8Mz1%2F41T6z7yj%2FjR256vOkCYTzUk5wBXUasiqTFPEy270kFdgL%2FibWNPRSelvPTKCRacQKqc20ymqsVnwgYGHGDFaxP6EBTMPWG5GWCaB%2BgL8qx65N3IDKQU0HjfXXmWv9VURBPMBiyPcRXizNOaprTxCnsXr3THitA8U4KlGSjytpcEHmGB2lxaF3o1FGkf4ekn%2BJ7GlUUjV%2BDMIB40UQoC5MaVMhbbX3ALfeBmmmQ99ey%2BmYD9L0kVgZt6%2BXdozWhG0FNVTuX9afK5%2F33CvT2E2%2B1M9yF1b9eagzkPXRcjQ8Xk%2Fnd5PwukBYIqyuitMLTKpMMGOqUBA%2FgIlf14UCFxP5JaIPPvqbbL%2F2a%2BKRDtMuAIZWIZgGBFzVTkB9PcQTQLgAChd4o0CTqGRqd2L%2BkN1aTAHR9XxKJ1E89kdhp3MvaoCMLspM1WrmOtJKybNVZkrRDDjxjS4grNGoQYSM1DDTc8x7lERSjknPCVCCH%2BmIXNBJ0%2F0cvPrUaGC32wWjegDpeCwYreCkmVFb3E7vqE0qIUmBTvanbj8aQe&X-Amz-Signature=c55e4d7c5ffa05f6105d917c3cb5042b6ea8deec8f20637147993979a0683b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUORYMCP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEm1WK%2FTbVO0xP%2FqhS3wmf3DuOwYBTzP4N%2BUOhnCf4%2FsAiEAvQQh7PwH8y%2BOl9dNAu59x2pF370%2Bt%2Bs3C%2FgMZ2701jcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGm8E6ItKgSvrm5RYircA8Fxlwwpy5%2BYLBwd5n4q4t6zWv6AKyrZTQppyTrE9Jw6GPSML%2FSwAqJlmUZDF0UT3b58vWaLyUq9oQROQ3J3xNOuW9KsQiVO9NwdhvsIw7sIOLjcHG9BovtBdYbNY2AYpHd8hBVCUWxRxw4QyFW%2Byk90eyiSoSWOg9iA95XcYf%2B0oKOqVx8AKWoQXQSHeY4CjRfnnG0GcPuwjnWdOkzCABSpzCbtp7KMRzzETz5ZKmrQ7AJxk3rRWWYlNgMu3fWY7P5BE%2BrHWkBxOlX7VbqAR80uyaA2hR10zT%2BdILwj6m21wwPqI59gXplNdRrH8Mz1%2F41T6z7yj%2FjR256vOkCYTzUk5wBXUasiqTFPEy270kFdgL%2FibWNPRSelvPTKCRacQKqc20ymqsVnwgYGHGDFaxP6EBTMPWG5GWCaB%2BgL8qx65N3IDKQU0HjfXXmWv9VURBPMBiyPcRXizNOaprTxCnsXr3THitA8U4KlGSjytpcEHmGB2lxaF3o1FGkf4ekn%2BJ7GlUUjV%2BDMIB40UQoC5MaVMhbbX3ALfeBmmmQ99ey%2BmYD9L0kVgZt6%2BXdozWhG0FNVTuX9afK5%2F33CvT2E2%2B1M9yF1b9eagzkPXRcjQ8Xk%2Fnd5PwukBYIqyuitMLTKpMMGOqUBA%2FgIlf14UCFxP5JaIPPvqbbL%2F2a%2BKRDtMuAIZWIZgGBFzVTkB9PcQTQLgAChd4o0CTqGRqd2L%2BkN1aTAHR9XxKJ1E89kdhp3MvaoCMLspM1WrmOtJKybNVZkrRDDjxjS4grNGoQYSM1DDTc8x7lERSjknPCVCCH%2BmIXNBJ0%2F0cvPrUaGC32wWjegDpeCwYreCkmVFb3E7vqE0qIUmBTvanbj8aQe&X-Amz-Signature=e0b6398677c0cf5cdff6b20290a20d42ddebc9a4b718bc48f2173c9e8ea0ffe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
