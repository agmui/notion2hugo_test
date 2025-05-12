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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4RABGHR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCalBzo4wH9PiO%2FFUqBzzy06vTzoGXb6cfbOWJxl4chrgIgEB%2BdOU7xQ4vHc7q3SOZomtwx6SFnjbJnZZUKe4yL4SkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF226v%2BJPs4B3xqWJyrcA8m2Ne%2FvcZbuCbx%2B%2BUqr8fRBeqOSW8Gpw19oT1OW3mj26Zg%2F%2Fx65EayNE6irP3XIr3Z99Nj2FMdvSbFE5A35cZRCDNZyyrCPo7vKwgastAUMIxTPebAmU%2BtWWty9vdssDP0rpBIdrHnD2M3sNlo6mdB0NAglSongPneDtnpse9pEAhqL%2BNfI5Lp9kPnoOmwggdFcmfz8dHmB6NR4as1qyCDouxTrAKP0umTRNDDyKuFR0B%2FysX8RF1IxEONVhGUo%2BsnUWQTjGhkFNEhuZIY492A8swc1Fwucve8UnaEEVcfep3z722vg%2B4GphKNKT1D0bl3oLLq6%2BqKhS6jys6ANZq5X8SDiIyIfWe1Crzh%2FcyYnttuy2RNA9HHyb5t2%2FR52QDlMOh1K%2BQHlMM7W2FUkSFYBr7tF05jnac8Z%2BRt9%2BmcijFF7%2B0HnFQX3scCBIMNTkA8mmamcvIFMUbNRXFDJF4Mq%2Bb9zyZYK5%2F5PoT1cQ%2FevnLM43drzCJMayZg2mGZdld3G3wYkVibuuytSyNAkm%2FyCHhLy8lqp6ljSo5M%2FSlcKofW0JZiQnoTdH3wOjAWOMT0cyrjMsrnzCSXgL8USWpvauzNQrc46anb57%2BTwPZUN7DEjp0Tw8v3ivr10MMP3icEGOqUBbI3KWWk9oAl%2BLGNDAz036LZh5cnqfXnhbh8AJ%2FIX4yWDSj1R9YGHuh%2FOHYJm5adO3lW27Qois8ySybAnwz902cq3ef%2FCt1mdUuiqjuxNPtYYdG6WkaOHRFNbMkS%2FSg4k6FV6i40O71PYvq3RbgBuUoGJmiEbv9JszEMP%2BeP9ajG43MH9jcS009TJYm8MgtpF3wWah73AyjpbQF8uv%2FH0vrmOym2u&X-Amz-Signature=fa3e44dc46b6f32a704652be2079accd5d4c0802469456f76aef0f2373ed6177&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4RABGHR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCalBzo4wH9PiO%2FFUqBzzy06vTzoGXb6cfbOWJxl4chrgIgEB%2BdOU7xQ4vHc7q3SOZomtwx6SFnjbJnZZUKe4yL4SkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF226v%2BJPs4B3xqWJyrcA8m2Ne%2FvcZbuCbx%2B%2BUqr8fRBeqOSW8Gpw19oT1OW3mj26Zg%2F%2Fx65EayNE6irP3XIr3Z99Nj2FMdvSbFE5A35cZRCDNZyyrCPo7vKwgastAUMIxTPebAmU%2BtWWty9vdssDP0rpBIdrHnD2M3sNlo6mdB0NAglSongPneDtnpse9pEAhqL%2BNfI5Lp9kPnoOmwggdFcmfz8dHmB6NR4as1qyCDouxTrAKP0umTRNDDyKuFR0B%2FysX8RF1IxEONVhGUo%2BsnUWQTjGhkFNEhuZIY492A8swc1Fwucve8UnaEEVcfep3z722vg%2B4GphKNKT1D0bl3oLLq6%2BqKhS6jys6ANZq5X8SDiIyIfWe1Crzh%2FcyYnttuy2RNA9HHyb5t2%2FR52QDlMOh1K%2BQHlMM7W2FUkSFYBr7tF05jnac8Z%2BRt9%2BmcijFF7%2B0HnFQX3scCBIMNTkA8mmamcvIFMUbNRXFDJF4Mq%2Bb9zyZYK5%2F5PoT1cQ%2FevnLM43drzCJMayZg2mGZdld3G3wYkVibuuytSyNAkm%2FyCHhLy8lqp6ljSo5M%2FSlcKofW0JZiQnoTdH3wOjAWOMT0cyrjMsrnzCSXgL8USWpvauzNQrc46anb57%2BTwPZUN7DEjp0Tw8v3ivr10MMP3icEGOqUBbI3KWWk9oAl%2BLGNDAz036LZh5cnqfXnhbh8AJ%2FIX4yWDSj1R9YGHuh%2FOHYJm5adO3lW27Qois8ySybAnwz902cq3ef%2FCt1mdUuiqjuxNPtYYdG6WkaOHRFNbMkS%2FSg4k6FV6i40O71PYvq3RbgBuUoGJmiEbv9JszEMP%2BeP9ajG43MH9jcS009TJYm8MgtpF3wWah73AyjpbQF8uv%2FH0vrmOym2u&X-Amz-Signature=b92f4fbaf87332ec2b8f22426998afe26861fd5a579356d97ee8ed4a4cf04f02&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4RABGHR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCalBzo4wH9PiO%2FFUqBzzy06vTzoGXb6cfbOWJxl4chrgIgEB%2BdOU7xQ4vHc7q3SOZomtwx6SFnjbJnZZUKe4yL4SkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF226v%2BJPs4B3xqWJyrcA8m2Ne%2FvcZbuCbx%2B%2BUqr8fRBeqOSW8Gpw19oT1OW3mj26Zg%2F%2Fx65EayNE6irP3XIr3Z99Nj2FMdvSbFE5A35cZRCDNZyyrCPo7vKwgastAUMIxTPebAmU%2BtWWty9vdssDP0rpBIdrHnD2M3sNlo6mdB0NAglSongPneDtnpse9pEAhqL%2BNfI5Lp9kPnoOmwggdFcmfz8dHmB6NR4as1qyCDouxTrAKP0umTRNDDyKuFR0B%2FysX8RF1IxEONVhGUo%2BsnUWQTjGhkFNEhuZIY492A8swc1Fwucve8UnaEEVcfep3z722vg%2B4GphKNKT1D0bl3oLLq6%2BqKhS6jys6ANZq5X8SDiIyIfWe1Crzh%2FcyYnttuy2RNA9HHyb5t2%2FR52QDlMOh1K%2BQHlMM7W2FUkSFYBr7tF05jnac8Z%2BRt9%2BmcijFF7%2B0HnFQX3scCBIMNTkA8mmamcvIFMUbNRXFDJF4Mq%2Bb9zyZYK5%2F5PoT1cQ%2FevnLM43drzCJMayZg2mGZdld3G3wYkVibuuytSyNAkm%2FyCHhLy8lqp6ljSo5M%2FSlcKofW0JZiQnoTdH3wOjAWOMT0cyrjMsrnzCSXgL8USWpvauzNQrc46anb57%2BTwPZUN7DEjp0Tw8v3ivr10MMP3icEGOqUBbI3KWWk9oAl%2BLGNDAz036LZh5cnqfXnhbh8AJ%2FIX4yWDSj1R9YGHuh%2FOHYJm5adO3lW27Qois8ySybAnwz902cq3ef%2FCt1mdUuiqjuxNPtYYdG6WkaOHRFNbMkS%2FSg4k6FV6i40O71PYvq3RbgBuUoGJmiEbv9JszEMP%2BeP9ajG43MH9jcS009TJYm8MgtpF3wWah73AyjpbQF8uv%2FH0vrmOym2u&X-Amz-Signature=d74d387176b4414953db79b2799d766b4926befc224fb9ebc6eafb421b0c2fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4RABGHR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCalBzo4wH9PiO%2FFUqBzzy06vTzoGXb6cfbOWJxl4chrgIgEB%2BdOU7xQ4vHc7q3SOZomtwx6SFnjbJnZZUKe4yL4SkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF226v%2BJPs4B3xqWJyrcA8m2Ne%2FvcZbuCbx%2B%2BUqr8fRBeqOSW8Gpw19oT1OW3mj26Zg%2F%2Fx65EayNE6irP3XIr3Z99Nj2FMdvSbFE5A35cZRCDNZyyrCPo7vKwgastAUMIxTPebAmU%2BtWWty9vdssDP0rpBIdrHnD2M3sNlo6mdB0NAglSongPneDtnpse9pEAhqL%2BNfI5Lp9kPnoOmwggdFcmfz8dHmB6NR4as1qyCDouxTrAKP0umTRNDDyKuFR0B%2FysX8RF1IxEONVhGUo%2BsnUWQTjGhkFNEhuZIY492A8swc1Fwucve8UnaEEVcfep3z722vg%2B4GphKNKT1D0bl3oLLq6%2BqKhS6jys6ANZq5X8SDiIyIfWe1Crzh%2FcyYnttuy2RNA9HHyb5t2%2FR52QDlMOh1K%2BQHlMM7W2FUkSFYBr7tF05jnac8Z%2BRt9%2BmcijFF7%2B0HnFQX3scCBIMNTkA8mmamcvIFMUbNRXFDJF4Mq%2Bb9zyZYK5%2F5PoT1cQ%2FevnLM43drzCJMayZg2mGZdld3G3wYkVibuuytSyNAkm%2FyCHhLy8lqp6ljSo5M%2FSlcKofW0JZiQnoTdH3wOjAWOMT0cyrjMsrnzCSXgL8USWpvauzNQrc46anb57%2BTwPZUN7DEjp0Tw8v3ivr10MMP3icEGOqUBbI3KWWk9oAl%2BLGNDAz036LZh5cnqfXnhbh8AJ%2FIX4yWDSj1R9YGHuh%2FOHYJm5adO3lW27Qois8ySybAnwz902cq3ef%2FCt1mdUuiqjuxNPtYYdG6WkaOHRFNbMkS%2FSg4k6FV6i40O71PYvq3RbgBuUoGJmiEbv9JszEMP%2BeP9ajG43MH9jcS009TJYm8MgtpF3wWah73AyjpbQF8uv%2FH0vrmOym2u&X-Amz-Signature=08a60a3b87f64f13af5685cebf001faecec1612ce52d3d461959e1b5c7200c36&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4RABGHR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCalBzo4wH9PiO%2FFUqBzzy06vTzoGXb6cfbOWJxl4chrgIgEB%2BdOU7xQ4vHc7q3SOZomtwx6SFnjbJnZZUKe4yL4SkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF226v%2BJPs4B3xqWJyrcA8m2Ne%2FvcZbuCbx%2B%2BUqr8fRBeqOSW8Gpw19oT1OW3mj26Zg%2F%2Fx65EayNE6irP3XIr3Z99Nj2FMdvSbFE5A35cZRCDNZyyrCPo7vKwgastAUMIxTPebAmU%2BtWWty9vdssDP0rpBIdrHnD2M3sNlo6mdB0NAglSongPneDtnpse9pEAhqL%2BNfI5Lp9kPnoOmwggdFcmfz8dHmB6NR4as1qyCDouxTrAKP0umTRNDDyKuFR0B%2FysX8RF1IxEONVhGUo%2BsnUWQTjGhkFNEhuZIY492A8swc1Fwucve8UnaEEVcfep3z722vg%2B4GphKNKT1D0bl3oLLq6%2BqKhS6jys6ANZq5X8SDiIyIfWe1Crzh%2FcyYnttuy2RNA9HHyb5t2%2FR52QDlMOh1K%2BQHlMM7W2FUkSFYBr7tF05jnac8Z%2BRt9%2BmcijFF7%2B0HnFQX3scCBIMNTkA8mmamcvIFMUbNRXFDJF4Mq%2Bb9zyZYK5%2F5PoT1cQ%2FevnLM43drzCJMayZg2mGZdld3G3wYkVibuuytSyNAkm%2FyCHhLy8lqp6ljSo5M%2FSlcKofW0JZiQnoTdH3wOjAWOMT0cyrjMsrnzCSXgL8USWpvauzNQrc46anb57%2BTwPZUN7DEjp0Tw8v3ivr10MMP3icEGOqUBbI3KWWk9oAl%2BLGNDAz036LZh5cnqfXnhbh8AJ%2FIX4yWDSj1R9YGHuh%2FOHYJm5adO3lW27Qois8ySybAnwz902cq3ef%2FCt1mdUuiqjuxNPtYYdG6WkaOHRFNbMkS%2FSg4k6FV6i40O71PYvq3RbgBuUoGJmiEbv9JszEMP%2BeP9ajG43MH9jcS009TJYm8MgtpF3wWah73AyjpbQF8uv%2FH0vrmOym2u&X-Amz-Signature=65ca87f0d04b5f0475963ccc9887dce12a8626eb5f51398358064b0d6f5f1770&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4RABGHR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCalBzo4wH9PiO%2FFUqBzzy06vTzoGXb6cfbOWJxl4chrgIgEB%2BdOU7xQ4vHc7q3SOZomtwx6SFnjbJnZZUKe4yL4SkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF226v%2BJPs4B3xqWJyrcA8m2Ne%2FvcZbuCbx%2B%2BUqr8fRBeqOSW8Gpw19oT1OW3mj26Zg%2F%2Fx65EayNE6irP3XIr3Z99Nj2FMdvSbFE5A35cZRCDNZyyrCPo7vKwgastAUMIxTPebAmU%2BtWWty9vdssDP0rpBIdrHnD2M3sNlo6mdB0NAglSongPneDtnpse9pEAhqL%2BNfI5Lp9kPnoOmwggdFcmfz8dHmB6NR4as1qyCDouxTrAKP0umTRNDDyKuFR0B%2FysX8RF1IxEONVhGUo%2BsnUWQTjGhkFNEhuZIY492A8swc1Fwucve8UnaEEVcfep3z722vg%2B4GphKNKT1D0bl3oLLq6%2BqKhS6jys6ANZq5X8SDiIyIfWe1Crzh%2FcyYnttuy2RNA9HHyb5t2%2FR52QDlMOh1K%2BQHlMM7W2FUkSFYBr7tF05jnac8Z%2BRt9%2BmcijFF7%2B0HnFQX3scCBIMNTkA8mmamcvIFMUbNRXFDJF4Mq%2Bb9zyZYK5%2F5PoT1cQ%2FevnLM43drzCJMayZg2mGZdld3G3wYkVibuuytSyNAkm%2FyCHhLy8lqp6ljSo5M%2FSlcKofW0JZiQnoTdH3wOjAWOMT0cyrjMsrnzCSXgL8USWpvauzNQrc46anb57%2BTwPZUN7DEjp0Tw8v3ivr10MMP3icEGOqUBbI3KWWk9oAl%2BLGNDAz036LZh5cnqfXnhbh8AJ%2FIX4yWDSj1R9YGHuh%2FOHYJm5adO3lW27Qois8ySybAnwz902cq3ef%2FCt1mdUuiqjuxNPtYYdG6WkaOHRFNbMkS%2FSg4k6FV6i40O71PYvq3RbgBuUoGJmiEbv9JszEMP%2BeP9ajG43MH9jcS009TJYm8MgtpF3wWah73AyjpbQF8uv%2FH0vrmOym2u&X-Amz-Signature=2c3c494c300b7757e5cdb412b0aefc02c3907944ab42534d3d7ce2227d053ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4RABGHR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCalBzo4wH9PiO%2FFUqBzzy06vTzoGXb6cfbOWJxl4chrgIgEB%2BdOU7xQ4vHc7q3SOZomtwx6SFnjbJnZZUKe4yL4SkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF226v%2BJPs4B3xqWJyrcA8m2Ne%2FvcZbuCbx%2B%2BUqr8fRBeqOSW8Gpw19oT1OW3mj26Zg%2F%2Fx65EayNE6irP3XIr3Z99Nj2FMdvSbFE5A35cZRCDNZyyrCPo7vKwgastAUMIxTPebAmU%2BtWWty9vdssDP0rpBIdrHnD2M3sNlo6mdB0NAglSongPneDtnpse9pEAhqL%2BNfI5Lp9kPnoOmwggdFcmfz8dHmB6NR4as1qyCDouxTrAKP0umTRNDDyKuFR0B%2FysX8RF1IxEONVhGUo%2BsnUWQTjGhkFNEhuZIY492A8swc1Fwucve8UnaEEVcfep3z722vg%2B4GphKNKT1D0bl3oLLq6%2BqKhS6jys6ANZq5X8SDiIyIfWe1Crzh%2FcyYnttuy2RNA9HHyb5t2%2FR52QDlMOh1K%2BQHlMM7W2FUkSFYBr7tF05jnac8Z%2BRt9%2BmcijFF7%2B0HnFQX3scCBIMNTkA8mmamcvIFMUbNRXFDJF4Mq%2Bb9zyZYK5%2F5PoT1cQ%2FevnLM43drzCJMayZg2mGZdld3G3wYkVibuuytSyNAkm%2FyCHhLy8lqp6ljSo5M%2FSlcKofW0JZiQnoTdH3wOjAWOMT0cyrjMsrnzCSXgL8USWpvauzNQrc46anb57%2BTwPZUN7DEjp0Tw8v3ivr10MMP3icEGOqUBbI3KWWk9oAl%2BLGNDAz036LZh5cnqfXnhbh8AJ%2FIX4yWDSj1R9YGHuh%2FOHYJm5adO3lW27Qois8ySybAnwz902cq3ef%2FCt1mdUuiqjuxNPtYYdG6WkaOHRFNbMkS%2FSg4k6FV6i40O71PYvq3RbgBuUoGJmiEbv9JszEMP%2BeP9ajG43MH9jcS009TJYm8MgtpF3wWah73AyjpbQF8uv%2FH0vrmOym2u&X-Amz-Signature=236c303741ec5b027b4c8be9809930da41b395d25aa7ae1c7b0f18bb0bdac3c0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
