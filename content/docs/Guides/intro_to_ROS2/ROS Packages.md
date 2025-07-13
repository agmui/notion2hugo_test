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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIHECQ6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA2EI7WI5b3GXirqIo%2B68q3vRRTBuk85%2BsIfrGeTaUmAiAibxeZQ2sjCjRIeCZEdKKwg319N%2F3t7bL2CV7cJ68S7yqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqS8l3YMJjYELZiqKtwDdn833V9TBDf15lUhH%2FUHM%2BTqQwdBY02r72MqRdyEAqU2zwkOgfySSNpCHQ0Tnlws57cldRZtT4sITr2x5tgYafXPcbUqFPYB8yTSQXNFN2fLAYz8T6f94y24Y9OSFNrleMpkZWRACXV1hmhnOx6RLH4N846Mb9BjRxN%2FBbKyYVQKjD2ql3%2BdHs0dD%2FZX5%2FjQ8%2BSW4N8A4DymQCzrtqFqZ9%2B3mVnUzZOFOeTn%2BjWTAzCGpvcKDiTvygAPc9oS0WfEJiJxVOGRxR94hUawCHBGeGU7PwN7Z2B3%2FsH50n0cWB45CjISIx0oOYZjrgzNRXk0%2FtVyn2gqIRagEUCV5vnwqcdk7oDRK7aCqvXB1iM8XiUbq4PzJENje%2BdfQ5%2Bu%2BR0W2O%2Bk84EWTUiTl5PBGCgsaDKvgk1CgSdgYaoPVyMHnmxASIoFZ9gI6DGTiKUVzzZTPdBCl8vRpE4xm4z7pskSM1udO7nJMF2ivUvAsXZ27YPYXHog%2FGRrgFRXeMAWFIsoufbDyILR2T0S5A%2B0B2g3musKjPXWDuuZGldOY6KHEZpNTNq7EGZTdJdIQpBXza1aWYGrSeH8vezcxRNrTUEqpu36ZjXxbT6mncvl1vTFsk9rZpKiQdzuDVeK4M8w09jMwwY6pgGT2ZZC24fsXj%2FVilQU7UMbJ2I%2FWBPSRsNssKE0cyzUfGIythtKa1ISY%2FbtTCFKOWJyQuBxIB%2FdfWt%2F3aK4zwiYxjjVYYzItcQAAxZZfIs%2BydG3aVpKtIwTMudr8cJfofm7zSCvtAGrxSKdNAlT1nkssvTaYAyk7afY1L2Xdrm42xyqJx6yffp2nN%2BpDDUXSdejuFfyEtwzZYOn1fHKeCRbEigSQWgl&X-Amz-Signature=8cc51db9a393353c5bb7fbcd2496719ead6553c1c420d8569ddbf92c23442ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIHECQ6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA2EI7WI5b3GXirqIo%2B68q3vRRTBuk85%2BsIfrGeTaUmAiAibxeZQ2sjCjRIeCZEdKKwg319N%2F3t7bL2CV7cJ68S7yqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqS8l3YMJjYELZiqKtwDdn833V9TBDf15lUhH%2FUHM%2BTqQwdBY02r72MqRdyEAqU2zwkOgfySSNpCHQ0Tnlws57cldRZtT4sITr2x5tgYafXPcbUqFPYB8yTSQXNFN2fLAYz8T6f94y24Y9OSFNrleMpkZWRACXV1hmhnOx6RLH4N846Mb9BjRxN%2FBbKyYVQKjD2ql3%2BdHs0dD%2FZX5%2FjQ8%2BSW4N8A4DymQCzrtqFqZ9%2B3mVnUzZOFOeTn%2BjWTAzCGpvcKDiTvygAPc9oS0WfEJiJxVOGRxR94hUawCHBGeGU7PwN7Z2B3%2FsH50n0cWB45CjISIx0oOYZjrgzNRXk0%2FtVyn2gqIRagEUCV5vnwqcdk7oDRK7aCqvXB1iM8XiUbq4PzJENje%2BdfQ5%2Bu%2BR0W2O%2Bk84EWTUiTl5PBGCgsaDKvgk1CgSdgYaoPVyMHnmxASIoFZ9gI6DGTiKUVzzZTPdBCl8vRpE4xm4z7pskSM1udO7nJMF2ivUvAsXZ27YPYXHog%2FGRrgFRXeMAWFIsoufbDyILR2T0S5A%2B0B2g3musKjPXWDuuZGldOY6KHEZpNTNq7EGZTdJdIQpBXza1aWYGrSeH8vezcxRNrTUEqpu36ZjXxbT6mncvl1vTFsk9rZpKiQdzuDVeK4M8w09jMwwY6pgGT2ZZC24fsXj%2FVilQU7UMbJ2I%2FWBPSRsNssKE0cyzUfGIythtKa1ISY%2FbtTCFKOWJyQuBxIB%2FdfWt%2F3aK4zwiYxjjVYYzItcQAAxZZfIs%2BydG3aVpKtIwTMudr8cJfofm7zSCvtAGrxSKdNAlT1nkssvTaYAyk7afY1L2Xdrm42xyqJx6yffp2nN%2BpDDUXSdejuFfyEtwzZYOn1fHKeCRbEigSQWgl&X-Amz-Signature=78415f8e4948baad34b4a26f668f95a699a9e69c506efa96db77a05ca46442d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIHECQ6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA2EI7WI5b3GXirqIo%2B68q3vRRTBuk85%2BsIfrGeTaUmAiAibxeZQ2sjCjRIeCZEdKKwg319N%2F3t7bL2CV7cJ68S7yqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqS8l3YMJjYELZiqKtwDdn833V9TBDf15lUhH%2FUHM%2BTqQwdBY02r72MqRdyEAqU2zwkOgfySSNpCHQ0Tnlws57cldRZtT4sITr2x5tgYafXPcbUqFPYB8yTSQXNFN2fLAYz8T6f94y24Y9OSFNrleMpkZWRACXV1hmhnOx6RLH4N846Mb9BjRxN%2FBbKyYVQKjD2ql3%2BdHs0dD%2FZX5%2FjQ8%2BSW4N8A4DymQCzrtqFqZ9%2B3mVnUzZOFOeTn%2BjWTAzCGpvcKDiTvygAPc9oS0WfEJiJxVOGRxR94hUawCHBGeGU7PwN7Z2B3%2FsH50n0cWB45CjISIx0oOYZjrgzNRXk0%2FtVyn2gqIRagEUCV5vnwqcdk7oDRK7aCqvXB1iM8XiUbq4PzJENje%2BdfQ5%2Bu%2BR0W2O%2Bk84EWTUiTl5PBGCgsaDKvgk1CgSdgYaoPVyMHnmxASIoFZ9gI6DGTiKUVzzZTPdBCl8vRpE4xm4z7pskSM1udO7nJMF2ivUvAsXZ27YPYXHog%2FGRrgFRXeMAWFIsoufbDyILR2T0S5A%2B0B2g3musKjPXWDuuZGldOY6KHEZpNTNq7EGZTdJdIQpBXza1aWYGrSeH8vezcxRNrTUEqpu36ZjXxbT6mncvl1vTFsk9rZpKiQdzuDVeK4M8w09jMwwY6pgGT2ZZC24fsXj%2FVilQU7UMbJ2I%2FWBPSRsNssKE0cyzUfGIythtKa1ISY%2FbtTCFKOWJyQuBxIB%2FdfWt%2F3aK4zwiYxjjVYYzItcQAAxZZfIs%2BydG3aVpKtIwTMudr8cJfofm7zSCvtAGrxSKdNAlT1nkssvTaYAyk7afY1L2Xdrm42xyqJx6yffp2nN%2BpDDUXSdejuFfyEtwzZYOn1fHKeCRbEigSQWgl&X-Amz-Signature=52a3d86a90634b51dbc4e4994bcc9a4f1a4589741cfc341796670f06bbc08a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIHECQ6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA2EI7WI5b3GXirqIo%2B68q3vRRTBuk85%2BsIfrGeTaUmAiAibxeZQ2sjCjRIeCZEdKKwg319N%2F3t7bL2CV7cJ68S7yqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqS8l3YMJjYELZiqKtwDdn833V9TBDf15lUhH%2FUHM%2BTqQwdBY02r72MqRdyEAqU2zwkOgfySSNpCHQ0Tnlws57cldRZtT4sITr2x5tgYafXPcbUqFPYB8yTSQXNFN2fLAYz8T6f94y24Y9OSFNrleMpkZWRACXV1hmhnOx6RLH4N846Mb9BjRxN%2FBbKyYVQKjD2ql3%2BdHs0dD%2FZX5%2FjQ8%2BSW4N8A4DymQCzrtqFqZ9%2B3mVnUzZOFOeTn%2BjWTAzCGpvcKDiTvygAPc9oS0WfEJiJxVOGRxR94hUawCHBGeGU7PwN7Z2B3%2FsH50n0cWB45CjISIx0oOYZjrgzNRXk0%2FtVyn2gqIRagEUCV5vnwqcdk7oDRK7aCqvXB1iM8XiUbq4PzJENje%2BdfQ5%2Bu%2BR0W2O%2Bk84EWTUiTl5PBGCgsaDKvgk1CgSdgYaoPVyMHnmxASIoFZ9gI6DGTiKUVzzZTPdBCl8vRpE4xm4z7pskSM1udO7nJMF2ivUvAsXZ27YPYXHog%2FGRrgFRXeMAWFIsoufbDyILR2T0S5A%2B0B2g3musKjPXWDuuZGldOY6KHEZpNTNq7EGZTdJdIQpBXza1aWYGrSeH8vezcxRNrTUEqpu36ZjXxbT6mncvl1vTFsk9rZpKiQdzuDVeK4M8w09jMwwY6pgGT2ZZC24fsXj%2FVilQU7UMbJ2I%2FWBPSRsNssKE0cyzUfGIythtKa1ISY%2FbtTCFKOWJyQuBxIB%2FdfWt%2F3aK4zwiYxjjVYYzItcQAAxZZfIs%2BydG3aVpKtIwTMudr8cJfofm7zSCvtAGrxSKdNAlT1nkssvTaYAyk7afY1L2Xdrm42xyqJx6yffp2nN%2BpDDUXSdejuFfyEtwzZYOn1fHKeCRbEigSQWgl&X-Amz-Signature=0dfc6ccd2598f5e0e76975353b8b9b1c6d9276a319b1910ac444699346c2ec84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIHECQ6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA2EI7WI5b3GXirqIo%2B68q3vRRTBuk85%2BsIfrGeTaUmAiAibxeZQ2sjCjRIeCZEdKKwg319N%2F3t7bL2CV7cJ68S7yqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqS8l3YMJjYELZiqKtwDdn833V9TBDf15lUhH%2FUHM%2BTqQwdBY02r72MqRdyEAqU2zwkOgfySSNpCHQ0Tnlws57cldRZtT4sITr2x5tgYafXPcbUqFPYB8yTSQXNFN2fLAYz8T6f94y24Y9OSFNrleMpkZWRACXV1hmhnOx6RLH4N846Mb9BjRxN%2FBbKyYVQKjD2ql3%2BdHs0dD%2FZX5%2FjQ8%2BSW4N8A4DymQCzrtqFqZ9%2B3mVnUzZOFOeTn%2BjWTAzCGpvcKDiTvygAPc9oS0WfEJiJxVOGRxR94hUawCHBGeGU7PwN7Z2B3%2FsH50n0cWB45CjISIx0oOYZjrgzNRXk0%2FtVyn2gqIRagEUCV5vnwqcdk7oDRK7aCqvXB1iM8XiUbq4PzJENje%2BdfQ5%2Bu%2BR0W2O%2Bk84EWTUiTl5PBGCgsaDKvgk1CgSdgYaoPVyMHnmxASIoFZ9gI6DGTiKUVzzZTPdBCl8vRpE4xm4z7pskSM1udO7nJMF2ivUvAsXZ27YPYXHog%2FGRrgFRXeMAWFIsoufbDyILR2T0S5A%2B0B2g3musKjPXWDuuZGldOY6KHEZpNTNq7EGZTdJdIQpBXza1aWYGrSeH8vezcxRNrTUEqpu36ZjXxbT6mncvl1vTFsk9rZpKiQdzuDVeK4M8w09jMwwY6pgGT2ZZC24fsXj%2FVilQU7UMbJ2I%2FWBPSRsNssKE0cyzUfGIythtKa1ISY%2FbtTCFKOWJyQuBxIB%2FdfWt%2F3aK4zwiYxjjVYYzItcQAAxZZfIs%2BydG3aVpKtIwTMudr8cJfofm7zSCvtAGrxSKdNAlT1nkssvTaYAyk7afY1L2Xdrm42xyqJx6yffp2nN%2BpDDUXSdejuFfyEtwzZYOn1fHKeCRbEigSQWgl&X-Amz-Signature=b6f25c5ab77320941cc7a2fcaf0f3e5a12f3d923054a4f9eb9f552c09bf7b70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIHECQ6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA2EI7WI5b3GXirqIo%2B68q3vRRTBuk85%2BsIfrGeTaUmAiAibxeZQ2sjCjRIeCZEdKKwg319N%2F3t7bL2CV7cJ68S7yqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqS8l3YMJjYELZiqKtwDdn833V9TBDf15lUhH%2FUHM%2BTqQwdBY02r72MqRdyEAqU2zwkOgfySSNpCHQ0Tnlws57cldRZtT4sITr2x5tgYafXPcbUqFPYB8yTSQXNFN2fLAYz8T6f94y24Y9OSFNrleMpkZWRACXV1hmhnOx6RLH4N846Mb9BjRxN%2FBbKyYVQKjD2ql3%2BdHs0dD%2FZX5%2FjQ8%2BSW4N8A4DymQCzrtqFqZ9%2B3mVnUzZOFOeTn%2BjWTAzCGpvcKDiTvygAPc9oS0WfEJiJxVOGRxR94hUawCHBGeGU7PwN7Z2B3%2FsH50n0cWB45CjISIx0oOYZjrgzNRXk0%2FtVyn2gqIRagEUCV5vnwqcdk7oDRK7aCqvXB1iM8XiUbq4PzJENje%2BdfQ5%2Bu%2BR0W2O%2Bk84EWTUiTl5PBGCgsaDKvgk1CgSdgYaoPVyMHnmxASIoFZ9gI6DGTiKUVzzZTPdBCl8vRpE4xm4z7pskSM1udO7nJMF2ivUvAsXZ27YPYXHog%2FGRrgFRXeMAWFIsoufbDyILR2T0S5A%2B0B2g3musKjPXWDuuZGldOY6KHEZpNTNq7EGZTdJdIQpBXza1aWYGrSeH8vezcxRNrTUEqpu36ZjXxbT6mncvl1vTFsk9rZpKiQdzuDVeK4M8w09jMwwY6pgGT2ZZC24fsXj%2FVilQU7UMbJ2I%2FWBPSRsNssKE0cyzUfGIythtKa1ISY%2FbtTCFKOWJyQuBxIB%2FdfWt%2F3aK4zwiYxjjVYYzItcQAAxZZfIs%2BydG3aVpKtIwTMudr8cJfofm7zSCvtAGrxSKdNAlT1nkssvTaYAyk7afY1L2Xdrm42xyqJx6yffp2nN%2BpDDUXSdejuFfyEtwzZYOn1fHKeCRbEigSQWgl&X-Amz-Signature=7cf59f6379bb33dc398119da08824da9c7fdec6c583d20625c314e102c3e93ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIHECQ6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA2EI7WI5b3GXirqIo%2B68q3vRRTBuk85%2BsIfrGeTaUmAiAibxeZQ2sjCjRIeCZEdKKwg319N%2F3t7bL2CV7cJ68S7yqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqS8l3YMJjYELZiqKtwDdn833V9TBDf15lUhH%2FUHM%2BTqQwdBY02r72MqRdyEAqU2zwkOgfySSNpCHQ0Tnlws57cldRZtT4sITr2x5tgYafXPcbUqFPYB8yTSQXNFN2fLAYz8T6f94y24Y9OSFNrleMpkZWRACXV1hmhnOx6RLH4N846Mb9BjRxN%2FBbKyYVQKjD2ql3%2BdHs0dD%2FZX5%2FjQ8%2BSW4N8A4DymQCzrtqFqZ9%2B3mVnUzZOFOeTn%2BjWTAzCGpvcKDiTvygAPc9oS0WfEJiJxVOGRxR94hUawCHBGeGU7PwN7Z2B3%2FsH50n0cWB45CjISIx0oOYZjrgzNRXk0%2FtVyn2gqIRagEUCV5vnwqcdk7oDRK7aCqvXB1iM8XiUbq4PzJENje%2BdfQ5%2Bu%2BR0W2O%2Bk84EWTUiTl5PBGCgsaDKvgk1CgSdgYaoPVyMHnmxASIoFZ9gI6DGTiKUVzzZTPdBCl8vRpE4xm4z7pskSM1udO7nJMF2ivUvAsXZ27YPYXHog%2FGRrgFRXeMAWFIsoufbDyILR2T0S5A%2B0B2g3musKjPXWDuuZGldOY6KHEZpNTNq7EGZTdJdIQpBXza1aWYGrSeH8vezcxRNrTUEqpu36ZjXxbT6mncvl1vTFsk9rZpKiQdzuDVeK4M8w09jMwwY6pgGT2ZZC24fsXj%2FVilQU7UMbJ2I%2FWBPSRsNssKE0cyzUfGIythtKa1ISY%2FbtTCFKOWJyQuBxIB%2FdfWt%2F3aK4zwiYxjjVYYzItcQAAxZZfIs%2BydG3aVpKtIwTMudr8cJfofm7zSCvtAGrxSKdNAlT1nkssvTaYAyk7afY1L2Xdrm42xyqJx6yffp2nN%2BpDDUXSdejuFfyEtwzZYOn1fHKeCRbEigSQWgl&X-Amz-Signature=dfe7dc2b2c5513e93f0bc492aad06c3ff40f61d74bbd8ce4ebbc6165fcf0e1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
