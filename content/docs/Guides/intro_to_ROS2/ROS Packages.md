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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GX7UV3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFb3XCuxJ%2BMIcZ1VOuBxe8RVq1wg9F3tETxDyGgphBE%2BAiEAuL7sez4kaiFqIre1SkOV8ZPBV9MgIXVP2UltsEpw534q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGavlVepHQQqFVki8ircA6FpFY5Jo3AJ%2Bt58Ex6iLIuPw7FjRgoFb%2F3SAZWN8d%2BcHrJpoQijpEpf%2FVb1VxiZvoRAc7x00ssHMPpiwE8wYBXw6w4y6NtPFZnyQkzgjD7XVuI%2BWjMdJvTRTUGFGMdZ3yF5lWYwhFzTDOYGPz5FGreISMEqWHw6ODIfFJi0adKbpG6xjFHUnL0xYExiO61uzQLQwtPzp4w4YTJnccmvwLhzwvJ9Q%2F34FRY1ZjP7L7NzV7BsaXyasWS7LaGLzmlh9RpR45LkV%2F0BP8Oa99CdLOYVFzMdATjDPIt7BaWONY4WvJVB25gX5iCk5RhSRH6PJwdSvEDDd4vbTYxQPN%2BpUe%2BWpN1lU1kM21MVcEUBHW6vNinaRdlSKYJLoHx4mmcVjXqVrRRjBftafJS0I1zo%2FKeEwe198YcFP0%2Bez0WJBoXXr07lxq%2B%2FoM6sx0S%2BQ21OjzV4QdV%2FcfPUx6tHLmHUewvw9Z1%2BxSic2mTPCANpHdOFNvzqa1wh0eeb9oX8Y1l2el667V8TPtglKKzhQdXzbLv5mzYQDtEbz190JsTckDrlHAaC2DOz3xUzNCOk21R5O2GsmtHHt9L0Xct3UbOOxtr3f7a9w0o9qPLd7aYUy%2B7qp%2FMEo5FyJel77h%2BfMMGSssIGOqUByeau6fpZfEsf50LcQ2%2FrRztqd42rC8n7PK5OAF6Sx%2B6xAVfLp4jKo%2BkeqT%2F1eIJv8SgruqK8YUqfprdYE9jQrcT6i%2Fqf320yEIg2Gl1kTZzO5bIRLJuYuN7MpCauhEq7M9%2BUJMXShlskik5FC5TVEDtYiqG2TPEU1SdPggPrxuHcPCyTYlwyHy3mRDWb0TH4IDa%2FEgq9Tb6G6FY0YkEa8i%2BceMb0&X-Amz-Signature=6e9b4229060e83b367bed7d92d8aa64e7750c74b1b9459934e9ab504eebb6012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GX7UV3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFb3XCuxJ%2BMIcZ1VOuBxe8RVq1wg9F3tETxDyGgphBE%2BAiEAuL7sez4kaiFqIre1SkOV8ZPBV9MgIXVP2UltsEpw534q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGavlVepHQQqFVki8ircA6FpFY5Jo3AJ%2Bt58Ex6iLIuPw7FjRgoFb%2F3SAZWN8d%2BcHrJpoQijpEpf%2FVb1VxiZvoRAc7x00ssHMPpiwE8wYBXw6w4y6NtPFZnyQkzgjD7XVuI%2BWjMdJvTRTUGFGMdZ3yF5lWYwhFzTDOYGPz5FGreISMEqWHw6ODIfFJi0adKbpG6xjFHUnL0xYExiO61uzQLQwtPzp4w4YTJnccmvwLhzwvJ9Q%2F34FRY1ZjP7L7NzV7BsaXyasWS7LaGLzmlh9RpR45LkV%2F0BP8Oa99CdLOYVFzMdATjDPIt7BaWONY4WvJVB25gX5iCk5RhSRH6PJwdSvEDDd4vbTYxQPN%2BpUe%2BWpN1lU1kM21MVcEUBHW6vNinaRdlSKYJLoHx4mmcVjXqVrRRjBftafJS0I1zo%2FKeEwe198YcFP0%2Bez0WJBoXXr07lxq%2B%2FoM6sx0S%2BQ21OjzV4QdV%2FcfPUx6tHLmHUewvw9Z1%2BxSic2mTPCANpHdOFNvzqa1wh0eeb9oX8Y1l2el667V8TPtglKKzhQdXzbLv5mzYQDtEbz190JsTckDrlHAaC2DOz3xUzNCOk21R5O2GsmtHHt9L0Xct3UbOOxtr3f7a9w0o9qPLd7aYUy%2B7qp%2FMEo5FyJel77h%2BfMMGSssIGOqUByeau6fpZfEsf50LcQ2%2FrRztqd42rC8n7PK5OAF6Sx%2B6xAVfLp4jKo%2BkeqT%2F1eIJv8SgruqK8YUqfprdYE9jQrcT6i%2Fqf320yEIg2Gl1kTZzO5bIRLJuYuN7MpCauhEq7M9%2BUJMXShlskik5FC5TVEDtYiqG2TPEU1SdPggPrxuHcPCyTYlwyHy3mRDWb0TH4IDa%2FEgq9Tb6G6FY0YkEa8i%2BceMb0&X-Amz-Signature=a2a18b449a8a34d5c200f2903c1dd884cc782874af1c649b7d8a5a341cf798f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GX7UV3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFb3XCuxJ%2BMIcZ1VOuBxe8RVq1wg9F3tETxDyGgphBE%2BAiEAuL7sez4kaiFqIre1SkOV8ZPBV9MgIXVP2UltsEpw534q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGavlVepHQQqFVki8ircA6FpFY5Jo3AJ%2Bt58Ex6iLIuPw7FjRgoFb%2F3SAZWN8d%2BcHrJpoQijpEpf%2FVb1VxiZvoRAc7x00ssHMPpiwE8wYBXw6w4y6NtPFZnyQkzgjD7XVuI%2BWjMdJvTRTUGFGMdZ3yF5lWYwhFzTDOYGPz5FGreISMEqWHw6ODIfFJi0adKbpG6xjFHUnL0xYExiO61uzQLQwtPzp4w4YTJnccmvwLhzwvJ9Q%2F34FRY1ZjP7L7NzV7BsaXyasWS7LaGLzmlh9RpR45LkV%2F0BP8Oa99CdLOYVFzMdATjDPIt7BaWONY4WvJVB25gX5iCk5RhSRH6PJwdSvEDDd4vbTYxQPN%2BpUe%2BWpN1lU1kM21MVcEUBHW6vNinaRdlSKYJLoHx4mmcVjXqVrRRjBftafJS0I1zo%2FKeEwe198YcFP0%2Bez0WJBoXXr07lxq%2B%2FoM6sx0S%2BQ21OjzV4QdV%2FcfPUx6tHLmHUewvw9Z1%2BxSic2mTPCANpHdOFNvzqa1wh0eeb9oX8Y1l2el667V8TPtglKKzhQdXzbLv5mzYQDtEbz190JsTckDrlHAaC2DOz3xUzNCOk21R5O2GsmtHHt9L0Xct3UbOOxtr3f7a9w0o9qPLd7aYUy%2B7qp%2FMEo5FyJel77h%2BfMMGSssIGOqUByeau6fpZfEsf50LcQ2%2FrRztqd42rC8n7PK5OAF6Sx%2B6xAVfLp4jKo%2BkeqT%2F1eIJv8SgruqK8YUqfprdYE9jQrcT6i%2Fqf320yEIg2Gl1kTZzO5bIRLJuYuN7MpCauhEq7M9%2BUJMXShlskik5FC5TVEDtYiqG2TPEU1SdPggPrxuHcPCyTYlwyHy3mRDWb0TH4IDa%2FEgq9Tb6G6FY0YkEa8i%2BceMb0&X-Amz-Signature=d24875ee4ac6745ecbafb5390c1c0c8faca7c37dc9218523024e6705a30dcc00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GX7UV3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFb3XCuxJ%2BMIcZ1VOuBxe8RVq1wg9F3tETxDyGgphBE%2BAiEAuL7sez4kaiFqIre1SkOV8ZPBV9MgIXVP2UltsEpw534q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGavlVepHQQqFVki8ircA6FpFY5Jo3AJ%2Bt58Ex6iLIuPw7FjRgoFb%2F3SAZWN8d%2BcHrJpoQijpEpf%2FVb1VxiZvoRAc7x00ssHMPpiwE8wYBXw6w4y6NtPFZnyQkzgjD7XVuI%2BWjMdJvTRTUGFGMdZ3yF5lWYwhFzTDOYGPz5FGreISMEqWHw6ODIfFJi0adKbpG6xjFHUnL0xYExiO61uzQLQwtPzp4w4YTJnccmvwLhzwvJ9Q%2F34FRY1ZjP7L7NzV7BsaXyasWS7LaGLzmlh9RpR45LkV%2F0BP8Oa99CdLOYVFzMdATjDPIt7BaWONY4WvJVB25gX5iCk5RhSRH6PJwdSvEDDd4vbTYxQPN%2BpUe%2BWpN1lU1kM21MVcEUBHW6vNinaRdlSKYJLoHx4mmcVjXqVrRRjBftafJS0I1zo%2FKeEwe198YcFP0%2Bez0WJBoXXr07lxq%2B%2FoM6sx0S%2BQ21OjzV4QdV%2FcfPUx6tHLmHUewvw9Z1%2BxSic2mTPCANpHdOFNvzqa1wh0eeb9oX8Y1l2el667V8TPtglKKzhQdXzbLv5mzYQDtEbz190JsTckDrlHAaC2DOz3xUzNCOk21R5O2GsmtHHt9L0Xct3UbOOxtr3f7a9w0o9qPLd7aYUy%2B7qp%2FMEo5FyJel77h%2BfMMGSssIGOqUByeau6fpZfEsf50LcQ2%2FrRztqd42rC8n7PK5OAF6Sx%2B6xAVfLp4jKo%2BkeqT%2F1eIJv8SgruqK8YUqfprdYE9jQrcT6i%2Fqf320yEIg2Gl1kTZzO5bIRLJuYuN7MpCauhEq7M9%2BUJMXShlskik5FC5TVEDtYiqG2TPEU1SdPggPrxuHcPCyTYlwyHy3mRDWb0TH4IDa%2FEgq9Tb6G6FY0YkEa8i%2BceMb0&X-Amz-Signature=5e91547bbe73f32a0486d8258fd421969c2f9cb0d84490830103a534efe5cdfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GX7UV3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFb3XCuxJ%2BMIcZ1VOuBxe8RVq1wg9F3tETxDyGgphBE%2BAiEAuL7sez4kaiFqIre1SkOV8ZPBV9MgIXVP2UltsEpw534q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGavlVepHQQqFVki8ircA6FpFY5Jo3AJ%2Bt58Ex6iLIuPw7FjRgoFb%2F3SAZWN8d%2BcHrJpoQijpEpf%2FVb1VxiZvoRAc7x00ssHMPpiwE8wYBXw6w4y6NtPFZnyQkzgjD7XVuI%2BWjMdJvTRTUGFGMdZ3yF5lWYwhFzTDOYGPz5FGreISMEqWHw6ODIfFJi0adKbpG6xjFHUnL0xYExiO61uzQLQwtPzp4w4YTJnccmvwLhzwvJ9Q%2F34FRY1ZjP7L7NzV7BsaXyasWS7LaGLzmlh9RpR45LkV%2F0BP8Oa99CdLOYVFzMdATjDPIt7BaWONY4WvJVB25gX5iCk5RhSRH6PJwdSvEDDd4vbTYxQPN%2BpUe%2BWpN1lU1kM21MVcEUBHW6vNinaRdlSKYJLoHx4mmcVjXqVrRRjBftafJS0I1zo%2FKeEwe198YcFP0%2Bez0WJBoXXr07lxq%2B%2FoM6sx0S%2BQ21OjzV4QdV%2FcfPUx6tHLmHUewvw9Z1%2BxSic2mTPCANpHdOFNvzqa1wh0eeb9oX8Y1l2el667V8TPtglKKzhQdXzbLv5mzYQDtEbz190JsTckDrlHAaC2DOz3xUzNCOk21R5O2GsmtHHt9L0Xct3UbOOxtr3f7a9w0o9qPLd7aYUy%2B7qp%2FMEo5FyJel77h%2BfMMGSssIGOqUByeau6fpZfEsf50LcQ2%2FrRztqd42rC8n7PK5OAF6Sx%2B6xAVfLp4jKo%2BkeqT%2F1eIJv8SgruqK8YUqfprdYE9jQrcT6i%2Fqf320yEIg2Gl1kTZzO5bIRLJuYuN7MpCauhEq7M9%2BUJMXShlskik5FC5TVEDtYiqG2TPEU1SdPggPrxuHcPCyTYlwyHy3mRDWb0TH4IDa%2FEgq9Tb6G6FY0YkEa8i%2BceMb0&X-Amz-Signature=e4a908bd17249157ead7065355c2bc98e2cddcab3fbf38b706ec202fd79d68c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GX7UV3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFb3XCuxJ%2BMIcZ1VOuBxe8RVq1wg9F3tETxDyGgphBE%2BAiEAuL7sez4kaiFqIre1SkOV8ZPBV9MgIXVP2UltsEpw534q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGavlVepHQQqFVki8ircA6FpFY5Jo3AJ%2Bt58Ex6iLIuPw7FjRgoFb%2F3SAZWN8d%2BcHrJpoQijpEpf%2FVb1VxiZvoRAc7x00ssHMPpiwE8wYBXw6w4y6NtPFZnyQkzgjD7XVuI%2BWjMdJvTRTUGFGMdZ3yF5lWYwhFzTDOYGPz5FGreISMEqWHw6ODIfFJi0adKbpG6xjFHUnL0xYExiO61uzQLQwtPzp4w4YTJnccmvwLhzwvJ9Q%2F34FRY1ZjP7L7NzV7BsaXyasWS7LaGLzmlh9RpR45LkV%2F0BP8Oa99CdLOYVFzMdATjDPIt7BaWONY4WvJVB25gX5iCk5RhSRH6PJwdSvEDDd4vbTYxQPN%2BpUe%2BWpN1lU1kM21MVcEUBHW6vNinaRdlSKYJLoHx4mmcVjXqVrRRjBftafJS0I1zo%2FKeEwe198YcFP0%2Bez0WJBoXXr07lxq%2B%2FoM6sx0S%2BQ21OjzV4QdV%2FcfPUx6tHLmHUewvw9Z1%2BxSic2mTPCANpHdOFNvzqa1wh0eeb9oX8Y1l2el667V8TPtglKKzhQdXzbLv5mzYQDtEbz190JsTckDrlHAaC2DOz3xUzNCOk21R5O2GsmtHHt9L0Xct3UbOOxtr3f7a9w0o9qPLd7aYUy%2B7qp%2FMEo5FyJel77h%2BfMMGSssIGOqUByeau6fpZfEsf50LcQ2%2FrRztqd42rC8n7PK5OAF6Sx%2B6xAVfLp4jKo%2BkeqT%2F1eIJv8SgruqK8YUqfprdYE9jQrcT6i%2Fqf320yEIg2Gl1kTZzO5bIRLJuYuN7MpCauhEq7M9%2BUJMXShlskik5FC5TVEDtYiqG2TPEU1SdPggPrxuHcPCyTYlwyHy3mRDWb0TH4IDa%2FEgq9Tb6G6FY0YkEa8i%2BceMb0&X-Amz-Signature=ea1a24c86c9f3262ab205d0b0f47b2739b5cf26a7b550acef6fd415c66b13401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GX7UV3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFb3XCuxJ%2BMIcZ1VOuBxe8RVq1wg9F3tETxDyGgphBE%2BAiEAuL7sez4kaiFqIre1SkOV8ZPBV9MgIXVP2UltsEpw534q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGavlVepHQQqFVki8ircA6FpFY5Jo3AJ%2Bt58Ex6iLIuPw7FjRgoFb%2F3SAZWN8d%2BcHrJpoQijpEpf%2FVb1VxiZvoRAc7x00ssHMPpiwE8wYBXw6w4y6NtPFZnyQkzgjD7XVuI%2BWjMdJvTRTUGFGMdZ3yF5lWYwhFzTDOYGPz5FGreISMEqWHw6ODIfFJi0adKbpG6xjFHUnL0xYExiO61uzQLQwtPzp4w4YTJnccmvwLhzwvJ9Q%2F34FRY1ZjP7L7NzV7BsaXyasWS7LaGLzmlh9RpR45LkV%2F0BP8Oa99CdLOYVFzMdATjDPIt7BaWONY4WvJVB25gX5iCk5RhSRH6PJwdSvEDDd4vbTYxQPN%2BpUe%2BWpN1lU1kM21MVcEUBHW6vNinaRdlSKYJLoHx4mmcVjXqVrRRjBftafJS0I1zo%2FKeEwe198YcFP0%2Bez0WJBoXXr07lxq%2B%2FoM6sx0S%2BQ21OjzV4QdV%2FcfPUx6tHLmHUewvw9Z1%2BxSic2mTPCANpHdOFNvzqa1wh0eeb9oX8Y1l2el667V8TPtglKKzhQdXzbLv5mzYQDtEbz190JsTckDrlHAaC2DOz3xUzNCOk21R5O2GsmtHHt9L0Xct3UbOOxtr3f7a9w0o9qPLd7aYUy%2B7qp%2FMEo5FyJel77h%2BfMMGSssIGOqUByeau6fpZfEsf50LcQ2%2FrRztqd42rC8n7PK5OAF6Sx%2B6xAVfLp4jKo%2BkeqT%2F1eIJv8SgruqK8YUqfprdYE9jQrcT6i%2Fqf320yEIg2Gl1kTZzO5bIRLJuYuN7MpCauhEq7M9%2BUJMXShlskik5FC5TVEDtYiqG2TPEU1SdPggPrxuHcPCyTYlwyHy3mRDWb0TH4IDa%2FEgq9Tb6G6FY0YkEa8i%2BceMb0&X-Amz-Signature=33fe47f85089b177962acbaad38a83f62ca092c349bdd6291f670ddb91326dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
