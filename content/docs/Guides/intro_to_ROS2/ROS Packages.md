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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WWZD2CY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4xcnb2QPhlxoPPbKqpMgL1xCMrhtS8bdaw45y00DqGAiBRB4qBNpB2J4bMD%2BrXCdQIx%2FRjsUWSMKrJr5poMI8BsyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMecUD47UjVtDGCR4GKtwDVaFTcqVCWhNJqOlG3EBWyp0hzlBwkRBPt2GmtJ9fzN1InL0NeTYQ2vW9lnMEdQockmQwPhEgqXObQnQt3yDP7z7rpAipCfKPLaNby3mcXxOcsOJo3qxqbDVoj5NUrUR5b4SRhpiqD5r3ZQWIQtm%2BOG1KfxlhCToW3AdmHDv3INA4%2Fmpo17h4Ggv3G2fUSL3Vdkb7jhIJOMYS%2BcoNiiFst22QoT8nZEiUX5Wm3%2B0RvcDUsThUbsBw7KIalnpJ5MQmUM%2BeMsFyjnkAK90ZHhVmBUatfGClUjO%2BI5ePYR5x2OE7Mt7ZZx%2BlZyWhEsFLh%2Ba%2FMccrgQy6kxadv4zm09vRi2FA%2BNiW%2F%2BNhwhc7P8YI7e5GhTwNIFVrVS%2BqNLI9KnjlhOt%2Bbd0zJX33L6L5SO8PsA6HvfX8yb7%2BjSR7det%2Fy7ujg7Kz8yha0gmalXObk0twiMkVdxjg68fqd3CUoaWjAKkn%2BKI7sxivyqp0bpfyi09JgedEnilKP2LGO5OuGAlCNxFJF2IyldJNihPZ%2Bwvrn2W2rBtw70%2Fvkjq1q1NRel7rK2FQs3r5w6Nz%2FLoOoXXKaByT6%2FNMUiS7D3FSaWP60DLG3fwxIUH%2BCF%2BVreLkO8HiqsAo%2BJ89Nbw5FiswkOypwQY6pgGcFEvsITwN5SHJYXQTwmrnKMZZKcZc4LoiOftiNU5c%2FA9b6Dmo9%2B565Ha6lEra9uV0hV2tNRG%2FM6nh0WQ6QvQ9QLJVopa%2FjvViuESS%2FxkH4739XAGt0JOEv3jCRzy2%2B%2FPk3lxyxocEhf3%2BRVAVI3b5%2FsUlGoQMyc%2Bgp1HbvJSsRB4VraoZNU72HzpgdhNzI0Hd1aCSxVKzSm0XuPciMJP%2FR0sTBITa&X-Amz-Signature=6a5c78ade696b9fbd82ae51a9ee78a5ce565687643bfeb39a7c4d00342c4f886&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WWZD2CY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4xcnb2QPhlxoPPbKqpMgL1xCMrhtS8bdaw45y00DqGAiBRB4qBNpB2J4bMD%2BrXCdQIx%2FRjsUWSMKrJr5poMI8BsyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMecUD47UjVtDGCR4GKtwDVaFTcqVCWhNJqOlG3EBWyp0hzlBwkRBPt2GmtJ9fzN1InL0NeTYQ2vW9lnMEdQockmQwPhEgqXObQnQt3yDP7z7rpAipCfKPLaNby3mcXxOcsOJo3qxqbDVoj5NUrUR5b4SRhpiqD5r3ZQWIQtm%2BOG1KfxlhCToW3AdmHDv3INA4%2Fmpo17h4Ggv3G2fUSL3Vdkb7jhIJOMYS%2BcoNiiFst22QoT8nZEiUX5Wm3%2B0RvcDUsThUbsBw7KIalnpJ5MQmUM%2BeMsFyjnkAK90ZHhVmBUatfGClUjO%2BI5ePYR5x2OE7Mt7ZZx%2BlZyWhEsFLh%2Ba%2FMccrgQy6kxadv4zm09vRi2FA%2BNiW%2F%2BNhwhc7P8YI7e5GhTwNIFVrVS%2BqNLI9KnjlhOt%2Bbd0zJX33L6L5SO8PsA6HvfX8yb7%2BjSR7det%2Fy7ujg7Kz8yha0gmalXObk0twiMkVdxjg68fqd3CUoaWjAKkn%2BKI7sxivyqp0bpfyi09JgedEnilKP2LGO5OuGAlCNxFJF2IyldJNihPZ%2Bwvrn2W2rBtw70%2Fvkjq1q1NRel7rK2FQs3r5w6Nz%2FLoOoXXKaByT6%2FNMUiS7D3FSaWP60DLG3fwxIUH%2BCF%2BVreLkO8HiqsAo%2BJ89Nbw5FiswkOypwQY6pgGcFEvsITwN5SHJYXQTwmrnKMZZKcZc4LoiOftiNU5c%2FA9b6Dmo9%2B565Ha6lEra9uV0hV2tNRG%2FM6nh0WQ6QvQ9QLJVopa%2FjvViuESS%2FxkH4739XAGt0JOEv3jCRzy2%2B%2FPk3lxyxocEhf3%2BRVAVI3b5%2FsUlGoQMyc%2Bgp1HbvJSsRB4VraoZNU72HzpgdhNzI0Hd1aCSxVKzSm0XuPciMJP%2FR0sTBITa&X-Amz-Signature=e476394d767ce5e85fe22dad2d14cc3192f564601041b8223fe767a568dad764&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WWZD2CY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4xcnb2QPhlxoPPbKqpMgL1xCMrhtS8bdaw45y00DqGAiBRB4qBNpB2J4bMD%2BrXCdQIx%2FRjsUWSMKrJr5poMI8BsyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMecUD47UjVtDGCR4GKtwDVaFTcqVCWhNJqOlG3EBWyp0hzlBwkRBPt2GmtJ9fzN1InL0NeTYQ2vW9lnMEdQockmQwPhEgqXObQnQt3yDP7z7rpAipCfKPLaNby3mcXxOcsOJo3qxqbDVoj5NUrUR5b4SRhpiqD5r3ZQWIQtm%2BOG1KfxlhCToW3AdmHDv3INA4%2Fmpo17h4Ggv3G2fUSL3Vdkb7jhIJOMYS%2BcoNiiFst22QoT8nZEiUX5Wm3%2B0RvcDUsThUbsBw7KIalnpJ5MQmUM%2BeMsFyjnkAK90ZHhVmBUatfGClUjO%2BI5ePYR5x2OE7Mt7ZZx%2BlZyWhEsFLh%2Ba%2FMccrgQy6kxadv4zm09vRi2FA%2BNiW%2F%2BNhwhc7P8YI7e5GhTwNIFVrVS%2BqNLI9KnjlhOt%2Bbd0zJX33L6L5SO8PsA6HvfX8yb7%2BjSR7det%2Fy7ujg7Kz8yha0gmalXObk0twiMkVdxjg68fqd3CUoaWjAKkn%2BKI7sxivyqp0bpfyi09JgedEnilKP2LGO5OuGAlCNxFJF2IyldJNihPZ%2Bwvrn2W2rBtw70%2Fvkjq1q1NRel7rK2FQs3r5w6Nz%2FLoOoXXKaByT6%2FNMUiS7D3FSaWP60DLG3fwxIUH%2BCF%2BVreLkO8HiqsAo%2BJ89Nbw5FiswkOypwQY6pgGcFEvsITwN5SHJYXQTwmrnKMZZKcZc4LoiOftiNU5c%2FA9b6Dmo9%2B565Ha6lEra9uV0hV2tNRG%2FM6nh0WQ6QvQ9QLJVopa%2FjvViuESS%2FxkH4739XAGt0JOEv3jCRzy2%2B%2FPk3lxyxocEhf3%2BRVAVI3b5%2FsUlGoQMyc%2Bgp1HbvJSsRB4VraoZNU72HzpgdhNzI0Hd1aCSxVKzSm0XuPciMJP%2FR0sTBITa&X-Amz-Signature=aa2919a2f65399a499d321b5653d5fe0e6f7a803e344790266f638d22169209c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WWZD2CY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4xcnb2QPhlxoPPbKqpMgL1xCMrhtS8bdaw45y00DqGAiBRB4qBNpB2J4bMD%2BrXCdQIx%2FRjsUWSMKrJr5poMI8BsyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMecUD47UjVtDGCR4GKtwDVaFTcqVCWhNJqOlG3EBWyp0hzlBwkRBPt2GmtJ9fzN1InL0NeTYQ2vW9lnMEdQockmQwPhEgqXObQnQt3yDP7z7rpAipCfKPLaNby3mcXxOcsOJo3qxqbDVoj5NUrUR5b4SRhpiqD5r3ZQWIQtm%2BOG1KfxlhCToW3AdmHDv3INA4%2Fmpo17h4Ggv3G2fUSL3Vdkb7jhIJOMYS%2BcoNiiFst22QoT8nZEiUX5Wm3%2B0RvcDUsThUbsBw7KIalnpJ5MQmUM%2BeMsFyjnkAK90ZHhVmBUatfGClUjO%2BI5ePYR5x2OE7Mt7ZZx%2BlZyWhEsFLh%2Ba%2FMccrgQy6kxadv4zm09vRi2FA%2BNiW%2F%2BNhwhc7P8YI7e5GhTwNIFVrVS%2BqNLI9KnjlhOt%2Bbd0zJX33L6L5SO8PsA6HvfX8yb7%2BjSR7det%2Fy7ujg7Kz8yha0gmalXObk0twiMkVdxjg68fqd3CUoaWjAKkn%2BKI7sxivyqp0bpfyi09JgedEnilKP2LGO5OuGAlCNxFJF2IyldJNihPZ%2Bwvrn2W2rBtw70%2Fvkjq1q1NRel7rK2FQs3r5w6Nz%2FLoOoXXKaByT6%2FNMUiS7D3FSaWP60DLG3fwxIUH%2BCF%2BVreLkO8HiqsAo%2BJ89Nbw5FiswkOypwQY6pgGcFEvsITwN5SHJYXQTwmrnKMZZKcZc4LoiOftiNU5c%2FA9b6Dmo9%2B565Ha6lEra9uV0hV2tNRG%2FM6nh0WQ6QvQ9QLJVopa%2FjvViuESS%2FxkH4739XAGt0JOEv3jCRzy2%2B%2FPk3lxyxocEhf3%2BRVAVI3b5%2FsUlGoQMyc%2Bgp1HbvJSsRB4VraoZNU72HzpgdhNzI0Hd1aCSxVKzSm0XuPciMJP%2FR0sTBITa&X-Amz-Signature=8b81a677dd4355f9e4786c25c9b67bbe83f8d01bf12ea6e553663c7045332b47&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WWZD2CY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4xcnb2QPhlxoPPbKqpMgL1xCMrhtS8bdaw45y00DqGAiBRB4qBNpB2J4bMD%2BrXCdQIx%2FRjsUWSMKrJr5poMI8BsyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMecUD47UjVtDGCR4GKtwDVaFTcqVCWhNJqOlG3EBWyp0hzlBwkRBPt2GmtJ9fzN1InL0NeTYQ2vW9lnMEdQockmQwPhEgqXObQnQt3yDP7z7rpAipCfKPLaNby3mcXxOcsOJo3qxqbDVoj5NUrUR5b4SRhpiqD5r3ZQWIQtm%2BOG1KfxlhCToW3AdmHDv3INA4%2Fmpo17h4Ggv3G2fUSL3Vdkb7jhIJOMYS%2BcoNiiFst22QoT8nZEiUX5Wm3%2B0RvcDUsThUbsBw7KIalnpJ5MQmUM%2BeMsFyjnkAK90ZHhVmBUatfGClUjO%2BI5ePYR5x2OE7Mt7ZZx%2BlZyWhEsFLh%2Ba%2FMccrgQy6kxadv4zm09vRi2FA%2BNiW%2F%2BNhwhc7P8YI7e5GhTwNIFVrVS%2BqNLI9KnjlhOt%2Bbd0zJX33L6L5SO8PsA6HvfX8yb7%2BjSR7det%2Fy7ujg7Kz8yha0gmalXObk0twiMkVdxjg68fqd3CUoaWjAKkn%2BKI7sxivyqp0bpfyi09JgedEnilKP2LGO5OuGAlCNxFJF2IyldJNihPZ%2Bwvrn2W2rBtw70%2Fvkjq1q1NRel7rK2FQs3r5w6Nz%2FLoOoXXKaByT6%2FNMUiS7D3FSaWP60DLG3fwxIUH%2BCF%2BVreLkO8HiqsAo%2BJ89Nbw5FiswkOypwQY6pgGcFEvsITwN5SHJYXQTwmrnKMZZKcZc4LoiOftiNU5c%2FA9b6Dmo9%2B565Ha6lEra9uV0hV2tNRG%2FM6nh0WQ6QvQ9QLJVopa%2FjvViuESS%2FxkH4739XAGt0JOEv3jCRzy2%2B%2FPk3lxyxocEhf3%2BRVAVI3b5%2FsUlGoQMyc%2Bgp1HbvJSsRB4VraoZNU72HzpgdhNzI0Hd1aCSxVKzSm0XuPciMJP%2FR0sTBITa&X-Amz-Signature=4c725129c653867080966a21e4b202c4c7b215d752ae84ad63a824f728b768ea&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WWZD2CY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4xcnb2QPhlxoPPbKqpMgL1xCMrhtS8bdaw45y00DqGAiBRB4qBNpB2J4bMD%2BrXCdQIx%2FRjsUWSMKrJr5poMI8BsyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMecUD47UjVtDGCR4GKtwDVaFTcqVCWhNJqOlG3EBWyp0hzlBwkRBPt2GmtJ9fzN1InL0NeTYQ2vW9lnMEdQockmQwPhEgqXObQnQt3yDP7z7rpAipCfKPLaNby3mcXxOcsOJo3qxqbDVoj5NUrUR5b4SRhpiqD5r3ZQWIQtm%2BOG1KfxlhCToW3AdmHDv3INA4%2Fmpo17h4Ggv3G2fUSL3Vdkb7jhIJOMYS%2BcoNiiFst22QoT8nZEiUX5Wm3%2B0RvcDUsThUbsBw7KIalnpJ5MQmUM%2BeMsFyjnkAK90ZHhVmBUatfGClUjO%2BI5ePYR5x2OE7Mt7ZZx%2BlZyWhEsFLh%2Ba%2FMccrgQy6kxadv4zm09vRi2FA%2BNiW%2F%2BNhwhc7P8YI7e5GhTwNIFVrVS%2BqNLI9KnjlhOt%2Bbd0zJX33L6L5SO8PsA6HvfX8yb7%2BjSR7det%2Fy7ujg7Kz8yha0gmalXObk0twiMkVdxjg68fqd3CUoaWjAKkn%2BKI7sxivyqp0bpfyi09JgedEnilKP2LGO5OuGAlCNxFJF2IyldJNihPZ%2Bwvrn2W2rBtw70%2Fvkjq1q1NRel7rK2FQs3r5w6Nz%2FLoOoXXKaByT6%2FNMUiS7D3FSaWP60DLG3fwxIUH%2BCF%2BVreLkO8HiqsAo%2BJ89Nbw5FiswkOypwQY6pgGcFEvsITwN5SHJYXQTwmrnKMZZKcZc4LoiOftiNU5c%2FA9b6Dmo9%2B565Ha6lEra9uV0hV2tNRG%2FM6nh0WQ6QvQ9QLJVopa%2FjvViuESS%2FxkH4739XAGt0JOEv3jCRzy2%2B%2FPk3lxyxocEhf3%2BRVAVI3b5%2FsUlGoQMyc%2Bgp1HbvJSsRB4VraoZNU72HzpgdhNzI0Hd1aCSxVKzSm0XuPciMJP%2FR0sTBITa&X-Amz-Signature=21cb8c217734d14e11a6273f18fa38e7f95cf1db100eb9aa9d409b9b343d5b09&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WWZD2CY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4xcnb2QPhlxoPPbKqpMgL1xCMrhtS8bdaw45y00DqGAiBRB4qBNpB2J4bMD%2BrXCdQIx%2FRjsUWSMKrJr5poMI8BsyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMecUD47UjVtDGCR4GKtwDVaFTcqVCWhNJqOlG3EBWyp0hzlBwkRBPt2GmtJ9fzN1InL0NeTYQ2vW9lnMEdQockmQwPhEgqXObQnQt3yDP7z7rpAipCfKPLaNby3mcXxOcsOJo3qxqbDVoj5NUrUR5b4SRhpiqD5r3ZQWIQtm%2BOG1KfxlhCToW3AdmHDv3INA4%2Fmpo17h4Ggv3G2fUSL3Vdkb7jhIJOMYS%2BcoNiiFst22QoT8nZEiUX5Wm3%2B0RvcDUsThUbsBw7KIalnpJ5MQmUM%2BeMsFyjnkAK90ZHhVmBUatfGClUjO%2BI5ePYR5x2OE7Mt7ZZx%2BlZyWhEsFLh%2Ba%2FMccrgQy6kxadv4zm09vRi2FA%2BNiW%2F%2BNhwhc7P8YI7e5GhTwNIFVrVS%2BqNLI9KnjlhOt%2Bbd0zJX33L6L5SO8PsA6HvfX8yb7%2BjSR7det%2Fy7ujg7Kz8yha0gmalXObk0twiMkVdxjg68fqd3CUoaWjAKkn%2BKI7sxivyqp0bpfyi09JgedEnilKP2LGO5OuGAlCNxFJF2IyldJNihPZ%2Bwvrn2W2rBtw70%2Fvkjq1q1NRel7rK2FQs3r5w6Nz%2FLoOoXXKaByT6%2FNMUiS7D3FSaWP60DLG3fwxIUH%2BCF%2BVreLkO8HiqsAo%2BJ89Nbw5FiswkOypwQY6pgGcFEvsITwN5SHJYXQTwmrnKMZZKcZc4LoiOftiNU5c%2FA9b6Dmo9%2B565Ha6lEra9uV0hV2tNRG%2FM6nh0WQ6QvQ9QLJVopa%2FjvViuESS%2FxkH4739XAGt0JOEv3jCRzy2%2B%2FPk3lxyxocEhf3%2BRVAVI3b5%2FsUlGoQMyc%2Bgp1HbvJSsRB4VraoZNU72HzpgdhNzI0Hd1aCSxVKzSm0XuPciMJP%2FR0sTBITa&X-Amz-Signature=06e4d444452d493aa3476e77fe5a37fc448bd82a1237ea9d075d6792e8d0d4a5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
