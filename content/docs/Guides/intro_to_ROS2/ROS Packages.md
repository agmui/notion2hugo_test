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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUOJCJS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC0OMgZmwuK3Vou64HyhRLk5aeNoogF%2F%2F6qzL8glK1%2BugIhAKSTV0k73tb5OX%2BfJNyQbWd4N3BLtHGc2E4KDR8t5%2FmAKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXXFPJn3o%2BL0z9CYUq3ANH55AERROK1A2GmJqcaEftgVHdXTAV1w3UkqunVXwyhz5%2Fm8DZRbcO2JYIqE%2FToSafEec1G1ytgVL0zOrAZDFKRhIBo8bfvLDeDCUg4n09EphNH1fU%2FAuLdaoLaZjTM%2BA%2FnBB7VQKvox0e2phpFjKJ8mTrj6tu5RBqB6%2Fv2HTV0a60D%2F%2B9B%2FjDV9vn8d7EH6g1WOQSak1Xq0Bcqwko7VfstcBp%2BcNdvhi0RwuOsymm0gAgRdSeNEEiVjfWBWPZP4uDSpy2wrmaph1Hk68MY7vwW5OEGYIrdq%2FWrvNDOdPMC%2BuLRirGqJodVAYse3dOtcFJWjtKALwvuOlQAHwckxqat4yrlfmqpjTO472wKjp5bxlT5bH1%2BoNtzsqrkyucT47Rikp348H5wh6gIakRcHFbDTKphJkWO8cf31VSonQqv29W%2FQHel5JatOfH1k7gQakYlS9U9G18Kh4H%2BBbCvcF%2Fvyhn2UFfnPEG8zvAyxLxEhdWGMFUwU5dbxUlxAdqzVYRVFGX6cDHaBXgWusxuW6Bia29xYAsIKJTo392%2B%2FU4fWAdek23%2B0YAoc6C0sir%2FWHMRFme2F6f5pK57pXiwAHT%2FrcFWtwve46hIixKlR7gOXR%2FqBLKBMJ9VovGGDDVqtrEBjqkAadTuk68ARLg4Fun9MTIUSybEKSpwL3%2BnuyGv9xwq3%2Fl9L7YZO8fJJwPYlg4CTaCNLwSRLDm3T%2B4GIzo1n%2FsyA1hKSlTGgYhLoJ20YrgWCQmwJSFivvw%2BLx3%2BswrKYTCglhwXzwk3TKcuvAvaDULw%2BXfe2%2BdC1FXMq5%2FYAAcWkU2julmnHIVHExXROrgqigCIePb9rZO0fdv%2Ba8Uak7DAzQgWoJS&X-Amz-Signature=770534ac0d48fef75c6eccefac9d3b412e999d6953c608d9f965a6edf00103dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUOJCJS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC0OMgZmwuK3Vou64HyhRLk5aeNoogF%2F%2F6qzL8glK1%2BugIhAKSTV0k73tb5OX%2BfJNyQbWd4N3BLtHGc2E4KDR8t5%2FmAKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXXFPJn3o%2BL0z9CYUq3ANH55AERROK1A2GmJqcaEftgVHdXTAV1w3UkqunVXwyhz5%2Fm8DZRbcO2JYIqE%2FToSafEec1G1ytgVL0zOrAZDFKRhIBo8bfvLDeDCUg4n09EphNH1fU%2FAuLdaoLaZjTM%2BA%2FnBB7VQKvox0e2phpFjKJ8mTrj6tu5RBqB6%2Fv2HTV0a60D%2F%2B9B%2FjDV9vn8d7EH6g1WOQSak1Xq0Bcqwko7VfstcBp%2BcNdvhi0RwuOsymm0gAgRdSeNEEiVjfWBWPZP4uDSpy2wrmaph1Hk68MY7vwW5OEGYIrdq%2FWrvNDOdPMC%2BuLRirGqJodVAYse3dOtcFJWjtKALwvuOlQAHwckxqat4yrlfmqpjTO472wKjp5bxlT5bH1%2BoNtzsqrkyucT47Rikp348H5wh6gIakRcHFbDTKphJkWO8cf31VSonQqv29W%2FQHel5JatOfH1k7gQakYlS9U9G18Kh4H%2BBbCvcF%2Fvyhn2UFfnPEG8zvAyxLxEhdWGMFUwU5dbxUlxAdqzVYRVFGX6cDHaBXgWusxuW6Bia29xYAsIKJTo392%2B%2FU4fWAdek23%2B0YAoc6C0sir%2FWHMRFme2F6f5pK57pXiwAHT%2FrcFWtwve46hIixKlR7gOXR%2FqBLKBMJ9VovGGDDVqtrEBjqkAadTuk68ARLg4Fun9MTIUSybEKSpwL3%2BnuyGv9xwq3%2Fl9L7YZO8fJJwPYlg4CTaCNLwSRLDm3T%2B4GIzo1n%2FsyA1hKSlTGgYhLoJ20YrgWCQmwJSFivvw%2BLx3%2BswrKYTCglhwXzwk3TKcuvAvaDULw%2BXfe2%2BdC1FXMq5%2FYAAcWkU2julmnHIVHExXROrgqigCIePb9rZO0fdv%2Ba8Uak7DAzQgWoJS&X-Amz-Signature=8a16f3e802c93a2a6d15bf354af6d6d3574465e271d64a7cead28084997ca8ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUOJCJS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC0OMgZmwuK3Vou64HyhRLk5aeNoogF%2F%2F6qzL8glK1%2BugIhAKSTV0k73tb5OX%2BfJNyQbWd4N3BLtHGc2E4KDR8t5%2FmAKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXXFPJn3o%2BL0z9CYUq3ANH55AERROK1A2GmJqcaEftgVHdXTAV1w3UkqunVXwyhz5%2Fm8DZRbcO2JYIqE%2FToSafEec1G1ytgVL0zOrAZDFKRhIBo8bfvLDeDCUg4n09EphNH1fU%2FAuLdaoLaZjTM%2BA%2FnBB7VQKvox0e2phpFjKJ8mTrj6tu5RBqB6%2Fv2HTV0a60D%2F%2B9B%2FjDV9vn8d7EH6g1WOQSak1Xq0Bcqwko7VfstcBp%2BcNdvhi0RwuOsymm0gAgRdSeNEEiVjfWBWPZP4uDSpy2wrmaph1Hk68MY7vwW5OEGYIrdq%2FWrvNDOdPMC%2BuLRirGqJodVAYse3dOtcFJWjtKALwvuOlQAHwckxqat4yrlfmqpjTO472wKjp5bxlT5bH1%2BoNtzsqrkyucT47Rikp348H5wh6gIakRcHFbDTKphJkWO8cf31VSonQqv29W%2FQHel5JatOfH1k7gQakYlS9U9G18Kh4H%2BBbCvcF%2Fvyhn2UFfnPEG8zvAyxLxEhdWGMFUwU5dbxUlxAdqzVYRVFGX6cDHaBXgWusxuW6Bia29xYAsIKJTo392%2B%2FU4fWAdek23%2B0YAoc6C0sir%2FWHMRFme2F6f5pK57pXiwAHT%2FrcFWtwve46hIixKlR7gOXR%2FqBLKBMJ9VovGGDDVqtrEBjqkAadTuk68ARLg4Fun9MTIUSybEKSpwL3%2BnuyGv9xwq3%2Fl9L7YZO8fJJwPYlg4CTaCNLwSRLDm3T%2B4GIzo1n%2FsyA1hKSlTGgYhLoJ20YrgWCQmwJSFivvw%2BLx3%2BswrKYTCglhwXzwk3TKcuvAvaDULw%2BXfe2%2BdC1FXMq5%2FYAAcWkU2julmnHIVHExXROrgqigCIePb9rZO0fdv%2Ba8Uak7DAzQgWoJS&X-Amz-Signature=00d15096098dfbc698c0615c24d10af44394ad82fcf26bfc25ba785d491ada82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUOJCJS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC0OMgZmwuK3Vou64HyhRLk5aeNoogF%2F%2F6qzL8glK1%2BugIhAKSTV0k73tb5OX%2BfJNyQbWd4N3BLtHGc2E4KDR8t5%2FmAKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXXFPJn3o%2BL0z9CYUq3ANH55AERROK1A2GmJqcaEftgVHdXTAV1w3UkqunVXwyhz5%2Fm8DZRbcO2JYIqE%2FToSafEec1G1ytgVL0zOrAZDFKRhIBo8bfvLDeDCUg4n09EphNH1fU%2FAuLdaoLaZjTM%2BA%2FnBB7VQKvox0e2phpFjKJ8mTrj6tu5RBqB6%2Fv2HTV0a60D%2F%2B9B%2FjDV9vn8d7EH6g1WOQSak1Xq0Bcqwko7VfstcBp%2BcNdvhi0RwuOsymm0gAgRdSeNEEiVjfWBWPZP4uDSpy2wrmaph1Hk68MY7vwW5OEGYIrdq%2FWrvNDOdPMC%2BuLRirGqJodVAYse3dOtcFJWjtKALwvuOlQAHwckxqat4yrlfmqpjTO472wKjp5bxlT5bH1%2BoNtzsqrkyucT47Rikp348H5wh6gIakRcHFbDTKphJkWO8cf31VSonQqv29W%2FQHel5JatOfH1k7gQakYlS9U9G18Kh4H%2BBbCvcF%2Fvyhn2UFfnPEG8zvAyxLxEhdWGMFUwU5dbxUlxAdqzVYRVFGX6cDHaBXgWusxuW6Bia29xYAsIKJTo392%2B%2FU4fWAdek23%2B0YAoc6C0sir%2FWHMRFme2F6f5pK57pXiwAHT%2FrcFWtwve46hIixKlR7gOXR%2FqBLKBMJ9VovGGDDVqtrEBjqkAadTuk68ARLg4Fun9MTIUSybEKSpwL3%2BnuyGv9xwq3%2Fl9L7YZO8fJJwPYlg4CTaCNLwSRLDm3T%2B4GIzo1n%2FsyA1hKSlTGgYhLoJ20YrgWCQmwJSFivvw%2BLx3%2BswrKYTCglhwXzwk3TKcuvAvaDULw%2BXfe2%2BdC1FXMq5%2FYAAcWkU2julmnHIVHExXROrgqigCIePb9rZO0fdv%2Ba8Uak7DAzQgWoJS&X-Amz-Signature=8aa031b82b6837e8f5770d1e21956468b970ff4db2a3ff8cafd8c69cde27ae4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUOJCJS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC0OMgZmwuK3Vou64HyhRLk5aeNoogF%2F%2F6qzL8glK1%2BugIhAKSTV0k73tb5OX%2BfJNyQbWd4N3BLtHGc2E4KDR8t5%2FmAKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXXFPJn3o%2BL0z9CYUq3ANH55AERROK1A2GmJqcaEftgVHdXTAV1w3UkqunVXwyhz5%2Fm8DZRbcO2JYIqE%2FToSafEec1G1ytgVL0zOrAZDFKRhIBo8bfvLDeDCUg4n09EphNH1fU%2FAuLdaoLaZjTM%2BA%2FnBB7VQKvox0e2phpFjKJ8mTrj6tu5RBqB6%2Fv2HTV0a60D%2F%2B9B%2FjDV9vn8d7EH6g1WOQSak1Xq0Bcqwko7VfstcBp%2BcNdvhi0RwuOsymm0gAgRdSeNEEiVjfWBWPZP4uDSpy2wrmaph1Hk68MY7vwW5OEGYIrdq%2FWrvNDOdPMC%2BuLRirGqJodVAYse3dOtcFJWjtKALwvuOlQAHwckxqat4yrlfmqpjTO472wKjp5bxlT5bH1%2BoNtzsqrkyucT47Rikp348H5wh6gIakRcHFbDTKphJkWO8cf31VSonQqv29W%2FQHel5JatOfH1k7gQakYlS9U9G18Kh4H%2BBbCvcF%2Fvyhn2UFfnPEG8zvAyxLxEhdWGMFUwU5dbxUlxAdqzVYRVFGX6cDHaBXgWusxuW6Bia29xYAsIKJTo392%2B%2FU4fWAdek23%2B0YAoc6C0sir%2FWHMRFme2F6f5pK57pXiwAHT%2FrcFWtwve46hIixKlR7gOXR%2FqBLKBMJ9VovGGDDVqtrEBjqkAadTuk68ARLg4Fun9MTIUSybEKSpwL3%2BnuyGv9xwq3%2Fl9L7YZO8fJJwPYlg4CTaCNLwSRLDm3T%2B4GIzo1n%2FsyA1hKSlTGgYhLoJ20YrgWCQmwJSFivvw%2BLx3%2BswrKYTCglhwXzwk3TKcuvAvaDULw%2BXfe2%2BdC1FXMq5%2FYAAcWkU2julmnHIVHExXROrgqigCIePb9rZO0fdv%2Ba8Uak7DAzQgWoJS&X-Amz-Signature=5f25369b17c6fbaaca1db6da460a0f6e760ce6d06a3361b3d05b5c890e4d253c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUOJCJS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC0OMgZmwuK3Vou64HyhRLk5aeNoogF%2F%2F6qzL8glK1%2BugIhAKSTV0k73tb5OX%2BfJNyQbWd4N3BLtHGc2E4KDR8t5%2FmAKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXXFPJn3o%2BL0z9CYUq3ANH55AERROK1A2GmJqcaEftgVHdXTAV1w3UkqunVXwyhz5%2Fm8DZRbcO2JYIqE%2FToSafEec1G1ytgVL0zOrAZDFKRhIBo8bfvLDeDCUg4n09EphNH1fU%2FAuLdaoLaZjTM%2BA%2FnBB7VQKvox0e2phpFjKJ8mTrj6tu5RBqB6%2Fv2HTV0a60D%2F%2B9B%2FjDV9vn8d7EH6g1WOQSak1Xq0Bcqwko7VfstcBp%2BcNdvhi0RwuOsymm0gAgRdSeNEEiVjfWBWPZP4uDSpy2wrmaph1Hk68MY7vwW5OEGYIrdq%2FWrvNDOdPMC%2BuLRirGqJodVAYse3dOtcFJWjtKALwvuOlQAHwckxqat4yrlfmqpjTO472wKjp5bxlT5bH1%2BoNtzsqrkyucT47Rikp348H5wh6gIakRcHFbDTKphJkWO8cf31VSonQqv29W%2FQHel5JatOfH1k7gQakYlS9U9G18Kh4H%2BBbCvcF%2Fvyhn2UFfnPEG8zvAyxLxEhdWGMFUwU5dbxUlxAdqzVYRVFGX6cDHaBXgWusxuW6Bia29xYAsIKJTo392%2B%2FU4fWAdek23%2B0YAoc6C0sir%2FWHMRFme2F6f5pK57pXiwAHT%2FrcFWtwve46hIixKlR7gOXR%2FqBLKBMJ9VovGGDDVqtrEBjqkAadTuk68ARLg4Fun9MTIUSybEKSpwL3%2BnuyGv9xwq3%2Fl9L7YZO8fJJwPYlg4CTaCNLwSRLDm3T%2B4GIzo1n%2FsyA1hKSlTGgYhLoJ20YrgWCQmwJSFivvw%2BLx3%2BswrKYTCglhwXzwk3TKcuvAvaDULw%2BXfe2%2BdC1FXMq5%2FYAAcWkU2julmnHIVHExXROrgqigCIePb9rZO0fdv%2Ba8Uak7DAzQgWoJS&X-Amz-Signature=23fa731ef91b80d2b5cbc2aae7d168b7f45fe0e1a7fae5dd8b08b91ed21a521e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUOJCJS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC0OMgZmwuK3Vou64HyhRLk5aeNoogF%2F%2F6qzL8glK1%2BugIhAKSTV0k73tb5OX%2BfJNyQbWd4N3BLtHGc2E4KDR8t5%2FmAKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXXFPJn3o%2BL0z9CYUq3ANH55AERROK1A2GmJqcaEftgVHdXTAV1w3UkqunVXwyhz5%2Fm8DZRbcO2JYIqE%2FToSafEec1G1ytgVL0zOrAZDFKRhIBo8bfvLDeDCUg4n09EphNH1fU%2FAuLdaoLaZjTM%2BA%2FnBB7VQKvox0e2phpFjKJ8mTrj6tu5RBqB6%2Fv2HTV0a60D%2F%2B9B%2FjDV9vn8d7EH6g1WOQSak1Xq0Bcqwko7VfstcBp%2BcNdvhi0RwuOsymm0gAgRdSeNEEiVjfWBWPZP4uDSpy2wrmaph1Hk68MY7vwW5OEGYIrdq%2FWrvNDOdPMC%2BuLRirGqJodVAYse3dOtcFJWjtKALwvuOlQAHwckxqat4yrlfmqpjTO472wKjp5bxlT5bH1%2BoNtzsqrkyucT47Rikp348H5wh6gIakRcHFbDTKphJkWO8cf31VSonQqv29W%2FQHel5JatOfH1k7gQakYlS9U9G18Kh4H%2BBbCvcF%2Fvyhn2UFfnPEG8zvAyxLxEhdWGMFUwU5dbxUlxAdqzVYRVFGX6cDHaBXgWusxuW6Bia29xYAsIKJTo392%2B%2FU4fWAdek23%2B0YAoc6C0sir%2FWHMRFme2F6f5pK57pXiwAHT%2FrcFWtwve46hIixKlR7gOXR%2FqBLKBMJ9VovGGDDVqtrEBjqkAadTuk68ARLg4Fun9MTIUSybEKSpwL3%2BnuyGv9xwq3%2Fl9L7YZO8fJJwPYlg4CTaCNLwSRLDm3T%2B4GIzo1n%2FsyA1hKSlTGgYhLoJ20YrgWCQmwJSFivvw%2BLx3%2BswrKYTCglhwXzwk3TKcuvAvaDULw%2BXfe2%2BdC1FXMq5%2FYAAcWkU2julmnHIVHExXROrgqigCIePb9rZO0fdv%2Ba8Uak7DAzQgWoJS&X-Amz-Signature=efe0b039655dfb47a6916db18682635bbda99594764ebee8fae4b6a533062959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
