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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCIJNPZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ul8Y4WCXznHXugj%2FYEkeuM6aJl9JxoUAxQ4XIWy%2F4gIhAOlArHgC0guzMdOpwPHgECiGaGaH1ddo7uB0yFep6ZflKv8DCGYQABoMNjM3NDIzMTgzODA1Igx3LEAP2u9vFJlXk9Mq3AP4uN05SUcVovKmyGDxzMkJ%2FovQnR3svSdJ98%2FXx%2Bv1WgBWKmLJAjN9vczcyrQhgJChV%2FjNvr3aY7f6jxpBkg8bS3QfKg%2FVkbO3N5SVQum%2FCtj21u7ngBms3ptmNc3gsop80c2t3fzBCjvo7bmYnCWH8yfS%2FESZqjblYhfb66xWh8S5gE0CvGIfCStIZDIDKkh0Rz%2FzTBY2TUbrBku0PpDIOljRZBDjLb1li5g5xV5oludmRHJ%2FwE3GzgqSF0ZMCxVAOXwI9h%2F7sH3a9Osah6VwwqddqbU7ZBa6%2FaSkxFH5fpeevAZIDnFN7QIYocSVBgL8aRbzavnFSIiYKJVpoHKIpqxyBMX73L9PwiGJEUph4InsMYbpjrTNCy5m03nI0z3H%2Bvbj2tquvY59g9GEmgReMWgq2N9ZUnoQtz8c3ZUAGw%2BMdscOeXyygaNBKgNN%2Foxef8bE3Neivn2ECu%2BqW1QxEiHS%2FNWGOhbuySanviUrj9wfY%2FYZl19upTzwhjETIh1mMstZtU2duZMra3ZrfABW1izxZCCugiit1CzjqUCSAbVAGT7v08f1p0S%2Fa92inEeFuK%2FpunuaGvtJWv%2Fg%2Bgq%2BMLlXWrCzc2ZPxQXVzGAvuGymAwoZhNVCJU9ELDChje%2FABjqkAYC8RlgbdlDkBAUwk2H%2BABWEkveaiiCOvbcByGW7UWL0PhrvmHZ%2FhploJ%2FGW%2Fp8SV3Yg3W767nCs%2FHPCRBn%2Ffih6%2Bjgq%2BwAQFEzIv4ZJ5fW4Kb1GkmuPBH9xoqUcxrnod7wvylNSdPGg3D8i23xxt9PcOdQB3or5lvfcAG%2Bu1gm2Bv6BO51PjbLtpvp%2BpkJBPR52PKJno6bjYzoQBxcJm7ujIdD1&X-Amz-Signature=7cf688ed6f55ec51e64cf64c160aa2ee83fcb73f749f26a23dab2ce7e4b06a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCIJNPZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ul8Y4WCXznHXugj%2FYEkeuM6aJl9JxoUAxQ4XIWy%2F4gIhAOlArHgC0guzMdOpwPHgECiGaGaH1ddo7uB0yFep6ZflKv8DCGYQABoMNjM3NDIzMTgzODA1Igx3LEAP2u9vFJlXk9Mq3AP4uN05SUcVovKmyGDxzMkJ%2FovQnR3svSdJ98%2FXx%2Bv1WgBWKmLJAjN9vczcyrQhgJChV%2FjNvr3aY7f6jxpBkg8bS3QfKg%2FVkbO3N5SVQum%2FCtj21u7ngBms3ptmNc3gsop80c2t3fzBCjvo7bmYnCWH8yfS%2FESZqjblYhfb66xWh8S5gE0CvGIfCStIZDIDKkh0Rz%2FzTBY2TUbrBku0PpDIOljRZBDjLb1li5g5xV5oludmRHJ%2FwE3GzgqSF0ZMCxVAOXwI9h%2F7sH3a9Osah6VwwqddqbU7ZBa6%2FaSkxFH5fpeevAZIDnFN7QIYocSVBgL8aRbzavnFSIiYKJVpoHKIpqxyBMX73L9PwiGJEUph4InsMYbpjrTNCy5m03nI0z3H%2Bvbj2tquvY59g9GEmgReMWgq2N9ZUnoQtz8c3ZUAGw%2BMdscOeXyygaNBKgNN%2Foxef8bE3Neivn2ECu%2BqW1QxEiHS%2FNWGOhbuySanviUrj9wfY%2FYZl19upTzwhjETIh1mMstZtU2duZMra3ZrfABW1izxZCCugiit1CzjqUCSAbVAGT7v08f1p0S%2Fa92inEeFuK%2FpunuaGvtJWv%2Fg%2Bgq%2BMLlXWrCzc2ZPxQXVzGAvuGymAwoZhNVCJU9ELDChje%2FABjqkAYC8RlgbdlDkBAUwk2H%2BABWEkveaiiCOvbcByGW7UWL0PhrvmHZ%2FhploJ%2FGW%2Fp8SV3Yg3W767nCs%2FHPCRBn%2Ffih6%2Bjgq%2BwAQFEzIv4ZJ5fW4Kb1GkmuPBH9xoqUcxrnod7wvylNSdPGg3D8i23xxt9PcOdQB3or5lvfcAG%2Bu1gm2Bv6BO51PjbLtpvp%2BpkJBPR52PKJno6bjYzoQBxcJm7ujIdD1&X-Amz-Signature=8c8419fc9cf08c72774bb9c34051f4df55ddb46fb7e4cc22db0f4de3aef4a43f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCIJNPZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ul8Y4WCXznHXugj%2FYEkeuM6aJl9JxoUAxQ4XIWy%2F4gIhAOlArHgC0guzMdOpwPHgECiGaGaH1ddo7uB0yFep6ZflKv8DCGYQABoMNjM3NDIzMTgzODA1Igx3LEAP2u9vFJlXk9Mq3AP4uN05SUcVovKmyGDxzMkJ%2FovQnR3svSdJ98%2FXx%2Bv1WgBWKmLJAjN9vczcyrQhgJChV%2FjNvr3aY7f6jxpBkg8bS3QfKg%2FVkbO3N5SVQum%2FCtj21u7ngBms3ptmNc3gsop80c2t3fzBCjvo7bmYnCWH8yfS%2FESZqjblYhfb66xWh8S5gE0CvGIfCStIZDIDKkh0Rz%2FzTBY2TUbrBku0PpDIOljRZBDjLb1li5g5xV5oludmRHJ%2FwE3GzgqSF0ZMCxVAOXwI9h%2F7sH3a9Osah6VwwqddqbU7ZBa6%2FaSkxFH5fpeevAZIDnFN7QIYocSVBgL8aRbzavnFSIiYKJVpoHKIpqxyBMX73L9PwiGJEUph4InsMYbpjrTNCy5m03nI0z3H%2Bvbj2tquvY59g9GEmgReMWgq2N9ZUnoQtz8c3ZUAGw%2BMdscOeXyygaNBKgNN%2Foxef8bE3Neivn2ECu%2BqW1QxEiHS%2FNWGOhbuySanviUrj9wfY%2FYZl19upTzwhjETIh1mMstZtU2duZMra3ZrfABW1izxZCCugiit1CzjqUCSAbVAGT7v08f1p0S%2Fa92inEeFuK%2FpunuaGvtJWv%2Fg%2Bgq%2BMLlXWrCzc2ZPxQXVzGAvuGymAwoZhNVCJU9ELDChje%2FABjqkAYC8RlgbdlDkBAUwk2H%2BABWEkveaiiCOvbcByGW7UWL0PhrvmHZ%2FhploJ%2FGW%2Fp8SV3Yg3W767nCs%2FHPCRBn%2Ffih6%2Bjgq%2BwAQFEzIv4ZJ5fW4Kb1GkmuPBH9xoqUcxrnod7wvylNSdPGg3D8i23xxt9PcOdQB3or5lvfcAG%2Bu1gm2Bv6BO51PjbLtpvp%2BpkJBPR52PKJno6bjYzoQBxcJm7ujIdD1&X-Amz-Signature=776504fa7eb46ec13d24c118e4fabb07e55ae243da7cc7ee0118899bfcdfce52&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCIJNPZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ul8Y4WCXznHXugj%2FYEkeuM6aJl9JxoUAxQ4XIWy%2F4gIhAOlArHgC0guzMdOpwPHgECiGaGaH1ddo7uB0yFep6ZflKv8DCGYQABoMNjM3NDIzMTgzODA1Igx3LEAP2u9vFJlXk9Mq3AP4uN05SUcVovKmyGDxzMkJ%2FovQnR3svSdJ98%2FXx%2Bv1WgBWKmLJAjN9vczcyrQhgJChV%2FjNvr3aY7f6jxpBkg8bS3QfKg%2FVkbO3N5SVQum%2FCtj21u7ngBms3ptmNc3gsop80c2t3fzBCjvo7bmYnCWH8yfS%2FESZqjblYhfb66xWh8S5gE0CvGIfCStIZDIDKkh0Rz%2FzTBY2TUbrBku0PpDIOljRZBDjLb1li5g5xV5oludmRHJ%2FwE3GzgqSF0ZMCxVAOXwI9h%2F7sH3a9Osah6VwwqddqbU7ZBa6%2FaSkxFH5fpeevAZIDnFN7QIYocSVBgL8aRbzavnFSIiYKJVpoHKIpqxyBMX73L9PwiGJEUph4InsMYbpjrTNCy5m03nI0z3H%2Bvbj2tquvY59g9GEmgReMWgq2N9ZUnoQtz8c3ZUAGw%2BMdscOeXyygaNBKgNN%2Foxef8bE3Neivn2ECu%2BqW1QxEiHS%2FNWGOhbuySanviUrj9wfY%2FYZl19upTzwhjETIh1mMstZtU2duZMra3ZrfABW1izxZCCugiit1CzjqUCSAbVAGT7v08f1p0S%2Fa92inEeFuK%2FpunuaGvtJWv%2Fg%2Bgq%2BMLlXWrCzc2ZPxQXVzGAvuGymAwoZhNVCJU9ELDChje%2FABjqkAYC8RlgbdlDkBAUwk2H%2BABWEkveaiiCOvbcByGW7UWL0PhrvmHZ%2FhploJ%2FGW%2Fp8SV3Yg3W767nCs%2FHPCRBn%2Ffih6%2Bjgq%2BwAQFEzIv4ZJ5fW4Kb1GkmuPBH9xoqUcxrnod7wvylNSdPGg3D8i23xxt9PcOdQB3or5lvfcAG%2Bu1gm2Bv6BO51PjbLtpvp%2BpkJBPR52PKJno6bjYzoQBxcJm7ujIdD1&X-Amz-Signature=fd5d292681859fa850b51361c88646a97434e53bd4970ed5ec54c655425aa618&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCIJNPZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ul8Y4WCXznHXugj%2FYEkeuM6aJl9JxoUAxQ4XIWy%2F4gIhAOlArHgC0guzMdOpwPHgECiGaGaH1ddo7uB0yFep6ZflKv8DCGYQABoMNjM3NDIzMTgzODA1Igx3LEAP2u9vFJlXk9Mq3AP4uN05SUcVovKmyGDxzMkJ%2FovQnR3svSdJ98%2FXx%2Bv1WgBWKmLJAjN9vczcyrQhgJChV%2FjNvr3aY7f6jxpBkg8bS3QfKg%2FVkbO3N5SVQum%2FCtj21u7ngBms3ptmNc3gsop80c2t3fzBCjvo7bmYnCWH8yfS%2FESZqjblYhfb66xWh8S5gE0CvGIfCStIZDIDKkh0Rz%2FzTBY2TUbrBku0PpDIOljRZBDjLb1li5g5xV5oludmRHJ%2FwE3GzgqSF0ZMCxVAOXwI9h%2F7sH3a9Osah6VwwqddqbU7ZBa6%2FaSkxFH5fpeevAZIDnFN7QIYocSVBgL8aRbzavnFSIiYKJVpoHKIpqxyBMX73L9PwiGJEUph4InsMYbpjrTNCy5m03nI0z3H%2Bvbj2tquvY59g9GEmgReMWgq2N9ZUnoQtz8c3ZUAGw%2BMdscOeXyygaNBKgNN%2Foxef8bE3Neivn2ECu%2BqW1QxEiHS%2FNWGOhbuySanviUrj9wfY%2FYZl19upTzwhjETIh1mMstZtU2duZMra3ZrfABW1izxZCCugiit1CzjqUCSAbVAGT7v08f1p0S%2Fa92inEeFuK%2FpunuaGvtJWv%2Fg%2Bgq%2BMLlXWrCzc2ZPxQXVzGAvuGymAwoZhNVCJU9ELDChje%2FABjqkAYC8RlgbdlDkBAUwk2H%2BABWEkveaiiCOvbcByGW7UWL0PhrvmHZ%2FhploJ%2FGW%2Fp8SV3Yg3W767nCs%2FHPCRBn%2Ffih6%2Bjgq%2BwAQFEzIv4ZJ5fW4Kb1GkmuPBH9xoqUcxrnod7wvylNSdPGg3D8i23xxt9PcOdQB3or5lvfcAG%2Bu1gm2Bv6BO51PjbLtpvp%2BpkJBPR52PKJno6bjYzoQBxcJm7ujIdD1&X-Amz-Signature=6f4d0f770e8aaf6f4e5549e2315536697de3a534611f3922cb11288111f66f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCIJNPZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ul8Y4WCXznHXugj%2FYEkeuM6aJl9JxoUAxQ4XIWy%2F4gIhAOlArHgC0guzMdOpwPHgECiGaGaH1ddo7uB0yFep6ZflKv8DCGYQABoMNjM3NDIzMTgzODA1Igx3LEAP2u9vFJlXk9Mq3AP4uN05SUcVovKmyGDxzMkJ%2FovQnR3svSdJ98%2FXx%2Bv1WgBWKmLJAjN9vczcyrQhgJChV%2FjNvr3aY7f6jxpBkg8bS3QfKg%2FVkbO3N5SVQum%2FCtj21u7ngBms3ptmNc3gsop80c2t3fzBCjvo7bmYnCWH8yfS%2FESZqjblYhfb66xWh8S5gE0CvGIfCStIZDIDKkh0Rz%2FzTBY2TUbrBku0PpDIOljRZBDjLb1li5g5xV5oludmRHJ%2FwE3GzgqSF0ZMCxVAOXwI9h%2F7sH3a9Osah6VwwqddqbU7ZBa6%2FaSkxFH5fpeevAZIDnFN7QIYocSVBgL8aRbzavnFSIiYKJVpoHKIpqxyBMX73L9PwiGJEUph4InsMYbpjrTNCy5m03nI0z3H%2Bvbj2tquvY59g9GEmgReMWgq2N9ZUnoQtz8c3ZUAGw%2BMdscOeXyygaNBKgNN%2Foxef8bE3Neivn2ECu%2BqW1QxEiHS%2FNWGOhbuySanviUrj9wfY%2FYZl19upTzwhjETIh1mMstZtU2duZMra3ZrfABW1izxZCCugiit1CzjqUCSAbVAGT7v08f1p0S%2Fa92inEeFuK%2FpunuaGvtJWv%2Fg%2Bgq%2BMLlXWrCzc2ZPxQXVzGAvuGymAwoZhNVCJU9ELDChje%2FABjqkAYC8RlgbdlDkBAUwk2H%2BABWEkveaiiCOvbcByGW7UWL0PhrvmHZ%2FhploJ%2FGW%2Fp8SV3Yg3W767nCs%2FHPCRBn%2Ffih6%2Bjgq%2BwAQFEzIv4ZJ5fW4Kb1GkmuPBH9xoqUcxrnod7wvylNSdPGg3D8i23xxt9PcOdQB3or5lvfcAG%2Bu1gm2Bv6BO51PjbLtpvp%2BpkJBPR52PKJno6bjYzoQBxcJm7ujIdD1&X-Amz-Signature=9fcd935417584d3a8bfd4308ea60b7f4bd872983e15b7dc3001fd94430ea2913&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCIJNPZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ul8Y4WCXznHXugj%2FYEkeuM6aJl9JxoUAxQ4XIWy%2F4gIhAOlArHgC0guzMdOpwPHgECiGaGaH1ddo7uB0yFep6ZflKv8DCGYQABoMNjM3NDIzMTgzODA1Igx3LEAP2u9vFJlXk9Mq3AP4uN05SUcVovKmyGDxzMkJ%2FovQnR3svSdJ98%2FXx%2Bv1WgBWKmLJAjN9vczcyrQhgJChV%2FjNvr3aY7f6jxpBkg8bS3QfKg%2FVkbO3N5SVQum%2FCtj21u7ngBms3ptmNc3gsop80c2t3fzBCjvo7bmYnCWH8yfS%2FESZqjblYhfb66xWh8S5gE0CvGIfCStIZDIDKkh0Rz%2FzTBY2TUbrBku0PpDIOljRZBDjLb1li5g5xV5oludmRHJ%2FwE3GzgqSF0ZMCxVAOXwI9h%2F7sH3a9Osah6VwwqddqbU7ZBa6%2FaSkxFH5fpeevAZIDnFN7QIYocSVBgL8aRbzavnFSIiYKJVpoHKIpqxyBMX73L9PwiGJEUph4InsMYbpjrTNCy5m03nI0z3H%2Bvbj2tquvY59g9GEmgReMWgq2N9ZUnoQtz8c3ZUAGw%2BMdscOeXyygaNBKgNN%2Foxef8bE3Neivn2ECu%2BqW1QxEiHS%2FNWGOhbuySanviUrj9wfY%2FYZl19upTzwhjETIh1mMstZtU2duZMra3ZrfABW1izxZCCugiit1CzjqUCSAbVAGT7v08f1p0S%2Fa92inEeFuK%2FpunuaGvtJWv%2Fg%2Bgq%2BMLlXWrCzc2ZPxQXVzGAvuGymAwoZhNVCJU9ELDChje%2FABjqkAYC8RlgbdlDkBAUwk2H%2BABWEkveaiiCOvbcByGW7UWL0PhrvmHZ%2FhploJ%2FGW%2Fp8SV3Yg3W767nCs%2FHPCRBn%2Ffih6%2Bjgq%2BwAQFEzIv4ZJ5fW4Kb1GkmuPBH9xoqUcxrnod7wvylNSdPGg3D8i23xxt9PcOdQB3or5lvfcAG%2Bu1gm2Bv6BO51PjbLtpvp%2BpkJBPR52PKJno6bjYzoQBxcJm7ujIdD1&X-Amz-Signature=2952041995ad1c0fde8f6489c0e90b27e19d5fb363b83c7309b916941863f279&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
