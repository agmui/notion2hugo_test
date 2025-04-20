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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHTEME7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDy6FeB84zMQYoyJO%2F4AYPhxDW%2Bo5SpjGBFnaGceP7TbwIhALl0caYssfjbSki%2BS%2FsnHOloqsS03mWx8KP6e8C9XkE9KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkM6MfLFVGoJKjeBkq3ANWQLPYDW67CZrWlbldMAYVBYYYdKV3qDrZjQQBrT9d5DsHw5YyfwbYtldc8jDB3MxyHAqrq%2B2Uw1NKUfpHCQ5AeRAGKndKROHlqPqi6FrxdMiYv54LKeuAPTTX0gbqcRElND3KY0BF2xhN3AzpcS1HDMei5iM5Cc5I7LkaTL3EQ9ywVrpEy8i3insA6pUdekOHKjqTuiaCwXnxDABHa79uZmymmqozZPjFb1hZtQxRj%2Bdm%2F5gUiBeXdhmGbx4hua3UE0g0IOfaOu42L4zOq5%2FlAuJaqxIoZKB6QQSiwl3rYwNvdu5vIrcduifBLu5M4l4G%2FBHSJG3d3hMd0cHE25f1i2A0tjEWpV3koadRvUpQHW4WJt8zHBmPF5pxOiW191BOoDCht%2BUtjHV0%2B0hPWmqBmncmVGQbplcsHOvUeHJDILkcTv0bJKIQu09LftwgEQcCnunJyoe8TQdsMcXji88DJxrcyJ%2FASUVpwTMXI7FGzpVc3TOE9%2FmcZ7HJkagtqoQIHDJRNQSHUljcvu2l%2FTLQywdD6x82WOtqa3c59PYaiYm0LTPGFemaJc%2BJVoywwvoWoXpMPDBm7vozoZtyIk3W2Kq4yndk3gIXoIyUY19E%2BpzxHrPqzP0fjThCXjCDsZLABjqkAbFGl0cMvnTDqee40OF0Vrx6vMlpkf%2BuhHOMsKnoVzwd8uvWqC6RMUzDVRjauQrSuwZF%2Fwy2D8HRXF%2B%2BBHDAzfAzw8xC%2FIdGubBpgJX2DIuAqRbgy6vAulO%2FzQndePBmdcSW8H3a6Aq69LkhtiEkA0QsuEWb7qUGNPDh%2FigbPqkHiEtx4N4zkEbE3qgM6WWstzev5pWz83z2PSNhcYStfxjE3B2g&X-Amz-Signature=51c6707f3dd7ef1e3274dafd0c9b36753ab932601990e32ce60ebfa6b456fe32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHTEME7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDy6FeB84zMQYoyJO%2F4AYPhxDW%2Bo5SpjGBFnaGceP7TbwIhALl0caYssfjbSki%2BS%2FsnHOloqsS03mWx8KP6e8C9XkE9KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkM6MfLFVGoJKjeBkq3ANWQLPYDW67CZrWlbldMAYVBYYYdKV3qDrZjQQBrT9d5DsHw5YyfwbYtldc8jDB3MxyHAqrq%2B2Uw1NKUfpHCQ5AeRAGKndKROHlqPqi6FrxdMiYv54LKeuAPTTX0gbqcRElND3KY0BF2xhN3AzpcS1HDMei5iM5Cc5I7LkaTL3EQ9ywVrpEy8i3insA6pUdekOHKjqTuiaCwXnxDABHa79uZmymmqozZPjFb1hZtQxRj%2Bdm%2F5gUiBeXdhmGbx4hua3UE0g0IOfaOu42L4zOq5%2FlAuJaqxIoZKB6QQSiwl3rYwNvdu5vIrcduifBLu5M4l4G%2FBHSJG3d3hMd0cHE25f1i2A0tjEWpV3koadRvUpQHW4WJt8zHBmPF5pxOiW191BOoDCht%2BUtjHV0%2B0hPWmqBmncmVGQbplcsHOvUeHJDILkcTv0bJKIQu09LftwgEQcCnunJyoe8TQdsMcXji88DJxrcyJ%2FASUVpwTMXI7FGzpVc3TOE9%2FmcZ7HJkagtqoQIHDJRNQSHUljcvu2l%2FTLQywdD6x82WOtqa3c59PYaiYm0LTPGFemaJc%2BJVoywwvoWoXpMPDBm7vozoZtyIk3W2Kq4yndk3gIXoIyUY19E%2BpzxHrPqzP0fjThCXjCDsZLABjqkAbFGl0cMvnTDqee40OF0Vrx6vMlpkf%2BuhHOMsKnoVzwd8uvWqC6RMUzDVRjauQrSuwZF%2Fwy2D8HRXF%2B%2BBHDAzfAzw8xC%2FIdGubBpgJX2DIuAqRbgy6vAulO%2FzQndePBmdcSW8H3a6Aq69LkhtiEkA0QsuEWb7qUGNPDh%2FigbPqkHiEtx4N4zkEbE3qgM6WWstzev5pWz83z2PSNhcYStfxjE3B2g&X-Amz-Signature=85d45486732582593d4d82e432754ffa24a2ce8c9b7dd9724edf4bf4751f82ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHTEME7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDy6FeB84zMQYoyJO%2F4AYPhxDW%2Bo5SpjGBFnaGceP7TbwIhALl0caYssfjbSki%2BS%2FsnHOloqsS03mWx8KP6e8C9XkE9KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkM6MfLFVGoJKjeBkq3ANWQLPYDW67CZrWlbldMAYVBYYYdKV3qDrZjQQBrT9d5DsHw5YyfwbYtldc8jDB3MxyHAqrq%2B2Uw1NKUfpHCQ5AeRAGKndKROHlqPqi6FrxdMiYv54LKeuAPTTX0gbqcRElND3KY0BF2xhN3AzpcS1HDMei5iM5Cc5I7LkaTL3EQ9ywVrpEy8i3insA6pUdekOHKjqTuiaCwXnxDABHa79uZmymmqozZPjFb1hZtQxRj%2Bdm%2F5gUiBeXdhmGbx4hua3UE0g0IOfaOu42L4zOq5%2FlAuJaqxIoZKB6QQSiwl3rYwNvdu5vIrcduifBLu5M4l4G%2FBHSJG3d3hMd0cHE25f1i2A0tjEWpV3koadRvUpQHW4WJt8zHBmPF5pxOiW191BOoDCht%2BUtjHV0%2B0hPWmqBmncmVGQbplcsHOvUeHJDILkcTv0bJKIQu09LftwgEQcCnunJyoe8TQdsMcXji88DJxrcyJ%2FASUVpwTMXI7FGzpVc3TOE9%2FmcZ7HJkagtqoQIHDJRNQSHUljcvu2l%2FTLQywdD6x82WOtqa3c59PYaiYm0LTPGFemaJc%2BJVoywwvoWoXpMPDBm7vozoZtyIk3W2Kq4yndk3gIXoIyUY19E%2BpzxHrPqzP0fjThCXjCDsZLABjqkAbFGl0cMvnTDqee40OF0Vrx6vMlpkf%2BuhHOMsKnoVzwd8uvWqC6RMUzDVRjauQrSuwZF%2Fwy2D8HRXF%2B%2BBHDAzfAzw8xC%2FIdGubBpgJX2DIuAqRbgy6vAulO%2FzQndePBmdcSW8H3a6Aq69LkhtiEkA0QsuEWb7qUGNPDh%2FigbPqkHiEtx4N4zkEbE3qgM6WWstzev5pWz83z2PSNhcYStfxjE3B2g&X-Amz-Signature=6f365a32cb66a0c1f9a84395941b01dfdcb683f50389c55d757a3811a87c276a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHTEME7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDy6FeB84zMQYoyJO%2F4AYPhxDW%2Bo5SpjGBFnaGceP7TbwIhALl0caYssfjbSki%2BS%2FsnHOloqsS03mWx8KP6e8C9XkE9KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkM6MfLFVGoJKjeBkq3ANWQLPYDW67CZrWlbldMAYVBYYYdKV3qDrZjQQBrT9d5DsHw5YyfwbYtldc8jDB3MxyHAqrq%2B2Uw1NKUfpHCQ5AeRAGKndKROHlqPqi6FrxdMiYv54LKeuAPTTX0gbqcRElND3KY0BF2xhN3AzpcS1HDMei5iM5Cc5I7LkaTL3EQ9ywVrpEy8i3insA6pUdekOHKjqTuiaCwXnxDABHa79uZmymmqozZPjFb1hZtQxRj%2Bdm%2F5gUiBeXdhmGbx4hua3UE0g0IOfaOu42L4zOq5%2FlAuJaqxIoZKB6QQSiwl3rYwNvdu5vIrcduifBLu5M4l4G%2FBHSJG3d3hMd0cHE25f1i2A0tjEWpV3koadRvUpQHW4WJt8zHBmPF5pxOiW191BOoDCht%2BUtjHV0%2B0hPWmqBmncmVGQbplcsHOvUeHJDILkcTv0bJKIQu09LftwgEQcCnunJyoe8TQdsMcXji88DJxrcyJ%2FASUVpwTMXI7FGzpVc3TOE9%2FmcZ7HJkagtqoQIHDJRNQSHUljcvu2l%2FTLQywdD6x82WOtqa3c59PYaiYm0LTPGFemaJc%2BJVoywwvoWoXpMPDBm7vozoZtyIk3W2Kq4yndk3gIXoIyUY19E%2BpzxHrPqzP0fjThCXjCDsZLABjqkAbFGl0cMvnTDqee40OF0Vrx6vMlpkf%2BuhHOMsKnoVzwd8uvWqC6RMUzDVRjauQrSuwZF%2Fwy2D8HRXF%2B%2BBHDAzfAzw8xC%2FIdGubBpgJX2DIuAqRbgy6vAulO%2FzQndePBmdcSW8H3a6Aq69LkhtiEkA0QsuEWb7qUGNPDh%2FigbPqkHiEtx4N4zkEbE3qgM6WWstzev5pWz83z2PSNhcYStfxjE3B2g&X-Amz-Signature=7d1fe39c352485f4bb7af00b2d25c5886fdd5dee7e1fda935b1129f8735f783b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHTEME7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDy6FeB84zMQYoyJO%2F4AYPhxDW%2Bo5SpjGBFnaGceP7TbwIhALl0caYssfjbSki%2BS%2FsnHOloqsS03mWx8KP6e8C9XkE9KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkM6MfLFVGoJKjeBkq3ANWQLPYDW67CZrWlbldMAYVBYYYdKV3qDrZjQQBrT9d5DsHw5YyfwbYtldc8jDB3MxyHAqrq%2B2Uw1NKUfpHCQ5AeRAGKndKROHlqPqi6FrxdMiYv54LKeuAPTTX0gbqcRElND3KY0BF2xhN3AzpcS1HDMei5iM5Cc5I7LkaTL3EQ9ywVrpEy8i3insA6pUdekOHKjqTuiaCwXnxDABHa79uZmymmqozZPjFb1hZtQxRj%2Bdm%2F5gUiBeXdhmGbx4hua3UE0g0IOfaOu42L4zOq5%2FlAuJaqxIoZKB6QQSiwl3rYwNvdu5vIrcduifBLu5M4l4G%2FBHSJG3d3hMd0cHE25f1i2A0tjEWpV3koadRvUpQHW4WJt8zHBmPF5pxOiW191BOoDCht%2BUtjHV0%2B0hPWmqBmncmVGQbplcsHOvUeHJDILkcTv0bJKIQu09LftwgEQcCnunJyoe8TQdsMcXji88DJxrcyJ%2FASUVpwTMXI7FGzpVc3TOE9%2FmcZ7HJkagtqoQIHDJRNQSHUljcvu2l%2FTLQywdD6x82WOtqa3c59PYaiYm0LTPGFemaJc%2BJVoywwvoWoXpMPDBm7vozoZtyIk3W2Kq4yndk3gIXoIyUY19E%2BpzxHrPqzP0fjThCXjCDsZLABjqkAbFGl0cMvnTDqee40OF0Vrx6vMlpkf%2BuhHOMsKnoVzwd8uvWqC6RMUzDVRjauQrSuwZF%2Fwy2D8HRXF%2B%2BBHDAzfAzw8xC%2FIdGubBpgJX2DIuAqRbgy6vAulO%2FzQndePBmdcSW8H3a6Aq69LkhtiEkA0QsuEWb7qUGNPDh%2FigbPqkHiEtx4N4zkEbE3qgM6WWstzev5pWz83z2PSNhcYStfxjE3B2g&X-Amz-Signature=a922f9b3f4895c80a8b00b8d9817f16b7494a5f490363f250e2b20b0540ee2e7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHTEME7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDy6FeB84zMQYoyJO%2F4AYPhxDW%2Bo5SpjGBFnaGceP7TbwIhALl0caYssfjbSki%2BS%2FsnHOloqsS03mWx8KP6e8C9XkE9KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkM6MfLFVGoJKjeBkq3ANWQLPYDW67CZrWlbldMAYVBYYYdKV3qDrZjQQBrT9d5DsHw5YyfwbYtldc8jDB3MxyHAqrq%2B2Uw1NKUfpHCQ5AeRAGKndKROHlqPqi6FrxdMiYv54LKeuAPTTX0gbqcRElND3KY0BF2xhN3AzpcS1HDMei5iM5Cc5I7LkaTL3EQ9ywVrpEy8i3insA6pUdekOHKjqTuiaCwXnxDABHa79uZmymmqozZPjFb1hZtQxRj%2Bdm%2F5gUiBeXdhmGbx4hua3UE0g0IOfaOu42L4zOq5%2FlAuJaqxIoZKB6QQSiwl3rYwNvdu5vIrcduifBLu5M4l4G%2FBHSJG3d3hMd0cHE25f1i2A0tjEWpV3koadRvUpQHW4WJt8zHBmPF5pxOiW191BOoDCht%2BUtjHV0%2B0hPWmqBmncmVGQbplcsHOvUeHJDILkcTv0bJKIQu09LftwgEQcCnunJyoe8TQdsMcXji88DJxrcyJ%2FASUVpwTMXI7FGzpVc3TOE9%2FmcZ7HJkagtqoQIHDJRNQSHUljcvu2l%2FTLQywdD6x82WOtqa3c59PYaiYm0LTPGFemaJc%2BJVoywwvoWoXpMPDBm7vozoZtyIk3W2Kq4yndk3gIXoIyUY19E%2BpzxHrPqzP0fjThCXjCDsZLABjqkAbFGl0cMvnTDqee40OF0Vrx6vMlpkf%2BuhHOMsKnoVzwd8uvWqC6RMUzDVRjauQrSuwZF%2Fwy2D8HRXF%2B%2BBHDAzfAzw8xC%2FIdGubBpgJX2DIuAqRbgy6vAulO%2FzQndePBmdcSW8H3a6Aq69LkhtiEkA0QsuEWb7qUGNPDh%2FigbPqkHiEtx4N4zkEbE3qgM6WWstzev5pWz83z2PSNhcYStfxjE3B2g&X-Amz-Signature=f43f5be15b23b04ffa3b795b71d4f2faf18b90e2df3f81f86de824acb27db43f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHTEME7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDy6FeB84zMQYoyJO%2F4AYPhxDW%2Bo5SpjGBFnaGceP7TbwIhALl0caYssfjbSki%2BS%2FsnHOloqsS03mWx8KP6e8C9XkE9KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkM6MfLFVGoJKjeBkq3ANWQLPYDW67CZrWlbldMAYVBYYYdKV3qDrZjQQBrT9d5DsHw5YyfwbYtldc8jDB3MxyHAqrq%2B2Uw1NKUfpHCQ5AeRAGKndKROHlqPqi6FrxdMiYv54LKeuAPTTX0gbqcRElND3KY0BF2xhN3AzpcS1HDMei5iM5Cc5I7LkaTL3EQ9ywVrpEy8i3insA6pUdekOHKjqTuiaCwXnxDABHa79uZmymmqozZPjFb1hZtQxRj%2Bdm%2F5gUiBeXdhmGbx4hua3UE0g0IOfaOu42L4zOq5%2FlAuJaqxIoZKB6QQSiwl3rYwNvdu5vIrcduifBLu5M4l4G%2FBHSJG3d3hMd0cHE25f1i2A0tjEWpV3koadRvUpQHW4WJt8zHBmPF5pxOiW191BOoDCht%2BUtjHV0%2B0hPWmqBmncmVGQbplcsHOvUeHJDILkcTv0bJKIQu09LftwgEQcCnunJyoe8TQdsMcXji88DJxrcyJ%2FASUVpwTMXI7FGzpVc3TOE9%2FmcZ7HJkagtqoQIHDJRNQSHUljcvu2l%2FTLQywdD6x82WOtqa3c59PYaiYm0LTPGFemaJc%2BJVoywwvoWoXpMPDBm7vozoZtyIk3W2Kq4yndk3gIXoIyUY19E%2BpzxHrPqzP0fjThCXjCDsZLABjqkAbFGl0cMvnTDqee40OF0Vrx6vMlpkf%2BuhHOMsKnoVzwd8uvWqC6RMUzDVRjauQrSuwZF%2Fwy2D8HRXF%2B%2BBHDAzfAzw8xC%2FIdGubBpgJX2DIuAqRbgy6vAulO%2FzQndePBmdcSW8H3a6Aq69LkhtiEkA0QsuEWb7qUGNPDh%2FigbPqkHiEtx4N4zkEbE3qgM6WWstzev5pWz83z2PSNhcYStfxjE3B2g&X-Amz-Signature=76d9ae52c27399f218668e99b27b791ce765b011ceeec149174f6f2e09ec7dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
