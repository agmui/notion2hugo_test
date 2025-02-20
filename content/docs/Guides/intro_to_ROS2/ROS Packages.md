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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OYER6K%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0q2HWI9ahO2Rr8RZHooOsb%2BJ%2Bk8IJReT14pQt11oB9AIgPB1t%2FXQUepx9bQpS8VtQTfFZTlY0kqQGpVeSxLfefqAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FJ9f%2Fq7xdudXTtfyrcA8RzpwAL2qZCV2%2F8u4JS4gCrsYzJlg2lmeSDQrCzznSPZsygtwM4wEKtoMqNQZgW7UStYxmezWNp8JHnV%2BZjvIXBMB53PyBYegjMcXITWwj35%2B1250Yr1sIEYab47r6b3ayClrJLL51R9cJj5tusjvLEGsJzkbdZVzprapuzcMxYyC9fjsqBBOHiP2vHNVw6fUZNNASuFX7WCDIumj6zT9kfm9TYbIbsgKHC78SQ1xp6e3XLcwkzMrKMjNO%2By2ChMMLkq15lDuGXEXEOjrPFosrLOa9slVO%2BvbtxhMnA1IzzKqHuuf30fQaLe8DrrCtm%2FX0ycnvPHEnFIpiCLi%2F2jOv4%2BgIlt2F3TqP0f8vdPP7Io3QLcnIWQv8QR5ljH4PrDOVZn2s60lnbyPLVUDKhpCRDBAmS4x3YKiW03vct4RJz7%2Bg4pPlYCpA%2BKNknu%2B3PSYmPILklPG5viagv8WRCkplZeQm%2F9oQzhPgwCmLtOjt3VwbrfUysRwGOq%2B0zkUTDcWIzKrwEAgz49DaPayfJJJ5ipk8FpRBJEOYhe8SjYvwdnCtNAc53Lat8QbnubQWxuT3kwRrAStLOS2MjTkvs%2FeY73BYIVP5uCgR3u5xfU9E81ma3AWF4Ax%2BAK8o0MPbx3b0GOqUB96NlJUNXZAiZpCAjziPTXtbM51hih6gD3Y%2BIkEm8UNMmEk25r6RMANNf5Oue5TUu%2Fkj62yoLJp3yFloU1gJR1bOnMXwcuQ2IWxNOqI8bE4j57yCaGWkes1gxcqGgchSZk3l6m73Z7lc76xG5RERX816%2Ba1DSrgeYTgPeHwq7hVGCzLxFD06Q9I9PZ4VrJGN2WOCfM67gr%2B7bj0fYkNWZCS32eulV&X-Amz-Signature=ed023a3a4f1847c18988796b0b7dc7797d13a091fb01c96716c9059e3a776a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OYER6K%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0q2HWI9ahO2Rr8RZHooOsb%2BJ%2Bk8IJReT14pQt11oB9AIgPB1t%2FXQUepx9bQpS8VtQTfFZTlY0kqQGpVeSxLfefqAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FJ9f%2Fq7xdudXTtfyrcA8RzpwAL2qZCV2%2F8u4JS4gCrsYzJlg2lmeSDQrCzznSPZsygtwM4wEKtoMqNQZgW7UStYxmezWNp8JHnV%2BZjvIXBMB53PyBYegjMcXITWwj35%2B1250Yr1sIEYab47r6b3ayClrJLL51R9cJj5tusjvLEGsJzkbdZVzprapuzcMxYyC9fjsqBBOHiP2vHNVw6fUZNNASuFX7WCDIumj6zT9kfm9TYbIbsgKHC78SQ1xp6e3XLcwkzMrKMjNO%2By2ChMMLkq15lDuGXEXEOjrPFosrLOa9slVO%2BvbtxhMnA1IzzKqHuuf30fQaLe8DrrCtm%2FX0ycnvPHEnFIpiCLi%2F2jOv4%2BgIlt2F3TqP0f8vdPP7Io3QLcnIWQv8QR5ljH4PrDOVZn2s60lnbyPLVUDKhpCRDBAmS4x3YKiW03vct4RJz7%2Bg4pPlYCpA%2BKNknu%2B3PSYmPILklPG5viagv8WRCkplZeQm%2F9oQzhPgwCmLtOjt3VwbrfUysRwGOq%2B0zkUTDcWIzKrwEAgz49DaPayfJJJ5ipk8FpRBJEOYhe8SjYvwdnCtNAc53Lat8QbnubQWxuT3kwRrAStLOS2MjTkvs%2FeY73BYIVP5uCgR3u5xfU9E81ma3AWF4Ax%2BAK8o0MPbx3b0GOqUB96NlJUNXZAiZpCAjziPTXtbM51hih6gD3Y%2BIkEm8UNMmEk25r6RMANNf5Oue5TUu%2Fkj62yoLJp3yFloU1gJR1bOnMXwcuQ2IWxNOqI8bE4j57yCaGWkes1gxcqGgchSZk3l6m73Z7lc76xG5RERX816%2Ba1DSrgeYTgPeHwq7hVGCzLxFD06Q9I9PZ4VrJGN2WOCfM67gr%2B7bj0fYkNWZCS32eulV&X-Amz-Signature=2a44b9331b633ce8c41dc31444618d9c35b232feedf3fadfb3760b7278f52e79&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OYER6K%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0q2HWI9ahO2Rr8RZHooOsb%2BJ%2Bk8IJReT14pQt11oB9AIgPB1t%2FXQUepx9bQpS8VtQTfFZTlY0kqQGpVeSxLfefqAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FJ9f%2Fq7xdudXTtfyrcA8RzpwAL2qZCV2%2F8u4JS4gCrsYzJlg2lmeSDQrCzznSPZsygtwM4wEKtoMqNQZgW7UStYxmezWNp8JHnV%2BZjvIXBMB53PyBYegjMcXITWwj35%2B1250Yr1sIEYab47r6b3ayClrJLL51R9cJj5tusjvLEGsJzkbdZVzprapuzcMxYyC9fjsqBBOHiP2vHNVw6fUZNNASuFX7WCDIumj6zT9kfm9TYbIbsgKHC78SQ1xp6e3XLcwkzMrKMjNO%2By2ChMMLkq15lDuGXEXEOjrPFosrLOa9slVO%2BvbtxhMnA1IzzKqHuuf30fQaLe8DrrCtm%2FX0ycnvPHEnFIpiCLi%2F2jOv4%2BgIlt2F3TqP0f8vdPP7Io3QLcnIWQv8QR5ljH4PrDOVZn2s60lnbyPLVUDKhpCRDBAmS4x3YKiW03vct4RJz7%2Bg4pPlYCpA%2BKNknu%2B3PSYmPILklPG5viagv8WRCkplZeQm%2F9oQzhPgwCmLtOjt3VwbrfUysRwGOq%2B0zkUTDcWIzKrwEAgz49DaPayfJJJ5ipk8FpRBJEOYhe8SjYvwdnCtNAc53Lat8QbnubQWxuT3kwRrAStLOS2MjTkvs%2FeY73BYIVP5uCgR3u5xfU9E81ma3AWF4Ax%2BAK8o0MPbx3b0GOqUB96NlJUNXZAiZpCAjziPTXtbM51hih6gD3Y%2BIkEm8UNMmEk25r6RMANNf5Oue5TUu%2Fkj62yoLJp3yFloU1gJR1bOnMXwcuQ2IWxNOqI8bE4j57yCaGWkes1gxcqGgchSZk3l6m73Z7lc76xG5RERX816%2Ba1DSrgeYTgPeHwq7hVGCzLxFD06Q9I9PZ4VrJGN2WOCfM67gr%2B7bj0fYkNWZCS32eulV&X-Amz-Signature=c7565a2c2a0abf8ea21edd3ff9e7c106280ccdf4e3cf1b0b35976875a81b4207&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OYER6K%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0q2HWI9ahO2Rr8RZHooOsb%2BJ%2Bk8IJReT14pQt11oB9AIgPB1t%2FXQUepx9bQpS8VtQTfFZTlY0kqQGpVeSxLfefqAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FJ9f%2Fq7xdudXTtfyrcA8RzpwAL2qZCV2%2F8u4JS4gCrsYzJlg2lmeSDQrCzznSPZsygtwM4wEKtoMqNQZgW7UStYxmezWNp8JHnV%2BZjvIXBMB53PyBYegjMcXITWwj35%2B1250Yr1sIEYab47r6b3ayClrJLL51R9cJj5tusjvLEGsJzkbdZVzprapuzcMxYyC9fjsqBBOHiP2vHNVw6fUZNNASuFX7WCDIumj6zT9kfm9TYbIbsgKHC78SQ1xp6e3XLcwkzMrKMjNO%2By2ChMMLkq15lDuGXEXEOjrPFosrLOa9slVO%2BvbtxhMnA1IzzKqHuuf30fQaLe8DrrCtm%2FX0ycnvPHEnFIpiCLi%2F2jOv4%2BgIlt2F3TqP0f8vdPP7Io3QLcnIWQv8QR5ljH4PrDOVZn2s60lnbyPLVUDKhpCRDBAmS4x3YKiW03vct4RJz7%2Bg4pPlYCpA%2BKNknu%2B3PSYmPILklPG5viagv8WRCkplZeQm%2F9oQzhPgwCmLtOjt3VwbrfUysRwGOq%2B0zkUTDcWIzKrwEAgz49DaPayfJJJ5ipk8FpRBJEOYhe8SjYvwdnCtNAc53Lat8QbnubQWxuT3kwRrAStLOS2MjTkvs%2FeY73BYIVP5uCgR3u5xfU9E81ma3AWF4Ax%2BAK8o0MPbx3b0GOqUB96NlJUNXZAiZpCAjziPTXtbM51hih6gD3Y%2BIkEm8UNMmEk25r6RMANNf5Oue5TUu%2Fkj62yoLJp3yFloU1gJR1bOnMXwcuQ2IWxNOqI8bE4j57yCaGWkes1gxcqGgchSZk3l6m73Z7lc76xG5RERX816%2Ba1DSrgeYTgPeHwq7hVGCzLxFD06Q9I9PZ4VrJGN2WOCfM67gr%2B7bj0fYkNWZCS32eulV&X-Amz-Signature=77e16684443a914e4ef1dba4bd15ec770022343ecdfb115f12eda82bef873ed1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OYER6K%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0q2HWI9ahO2Rr8RZHooOsb%2BJ%2Bk8IJReT14pQt11oB9AIgPB1t%2FXQUepx9bQpS8VtQTfFZTlY0kqQGpVeSxLfefqAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FJ9f%2Fq7xdudXTtfyrcA8RzpwAL2qZCV2%2F8u4JS4gCrsYzJlg2lmeSDQrCzznSPZsygtwM4wEKtoMqNQZgW7UStYxmezWNp8JHnV%2BZjvIXBMB53PyBYegjMcXITWwj35%2B1250Yr1sIEYab47r6b3ayClrJLL51R9cJj5tusjvLEGsJzkbdZVzprapuzcMxYyC9fjsqBBOHiP2vHNVw6fUZNNASuFX7WCDIumj6zT9kfm9TYbIbsgKHC78SQ1xp6e3XLcwkzMrKMjNO%2By2ChMMLkq15lDuGXEXEOjrPFosrLOa9slVO%2BvbtxhMnA1IzzKqHuuf30fQaLe8DrrCtm%2FX0ycnvPHEnFIpiCLi%2F2jOv4%2BgIlt2F3TqP0f8vdPP7Io3QLcnIWQv8QR5ljH4PrDOVZn2s60lnbyPLVUDKhpCRDBAmS4x3YKiW03vct4RJz7%2Bg4pPlYCpA%2BKNknu%2B3PSYmPILklPG5viagv8WRCkplZeQm%2F9oQzhPgwCmLtOjt3VwbrfUysRwGOq%2B0zkUTDcWIzKrwEAgz49DaPayfJJJ5ipk8FpRBJEOYhe8SjYvwdnCtNAc53Lat8QbnubQWxuT3kwRrAStLOS2MjTkvs%2FeY73BYIVP5uCgR3u5xfU9E81ma3AWF4Ax%2BAK8o0MPbx3b0GOqUB96NlJUNXZAiZpCAjziPTXtbM51hih6gD3Y%2BIkEm8UNMmEk25r6RMANNf5Oue5TUu%2Fkj62yoLJp3yFloU1gJR1bOnMXwcuQ2IWxNOqI8bE4j57yCaGWkes1gxcqGgchSZk3l6m73Z7lc76xG5RERX816%2Ba1DSrgeYTgPeHwq7hVGCzLxFD06Q9I9PZ4VrJGN2WOCfM67gr%2B7bj0fYkNWZCS32eulV&X-Amz-Signature=00e81ba24cc9a145dd1383a9a1dc61c6480427767a4f937d2acd4722d4218cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OYER6K%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0q2HWI9ahO2Rr8RZHooOsb%2BJ%2Bk8IJReT14pQt11oB9AIgPB1t%2FXQUepx9bQpS8VtQTfFZTlY0kqQGpVeSxLfefqAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FJ9f%2Fq7xdudXTtfyrcA8RzpwAL2qZCV2%2F8u4JS4gCrsYzJlg2lmeSDQrCzznSPZsygtwM4wEKtoMqNQZgW7UStYxmezWNp8JHnV%2BZjvIXBMB53PyBYegjMcXITWwj35%2B1250Yr1sIEYab47r6b3ayClrJLL51R9cJj5tusjvLEGsJzkbdZVzprapuzcMxYyC9fjsqBBOHiP2vHNVw6fUZNNASuFX7WCDIumj6zT9kfm9TYbIbsgKHC78SQ1xp6e3XLcwkzMrKMjNO%2By2ChMMLkq15lDuGXEXEOjrPFosrLOa9slVO%2BvbtxhMnA1IzzKqHuuf30fQaLe8DrrCtm%2FX0ycnvPHEnFIpiCLi%2F2jOv4%2BgIlt2F3TqP0f8vdPP7Io3QLcnIWQv8QR5ljH4PrDOVZn2s60lnbyPLVUDKhpCRDBAmS4x3YKiW03vct4RJz7%2Bg4pPlYCpA%2BKNknu%2B3PSYmPILklPG5viagv8WRCkplZeQm%2F9oQzhPgwCmLtOjt3VwbrfUysRwGOq%2B0zkUTDcWIzKrwEAgz49DaPayfJJJ5ipk8FpRBJEOYhe8SjYvwdnCtNAc53Lat8QbnubQWxuT3kwRrAStLOS2MjTkvs%2FeY73BYIVP5uCgR3u5xfU9E81ma3AWF4Ax%2BAK8o0MPbx3b0GOqUB96NlJUNXZAiZpCAjziPTXtbM51hih6gD3Y%2BIkEm8UNMmEk25r6RMANNf5Oue5TUu%2Fkj62yoLJp3yFloU1gJR1bOnMXwcuQ2IWxNOqI8bE4j57yCaGWkes1gxcqGgchSZk3l6m73Z7lc76xG5RERX816%2Ba1DSrgeYTgPeHwq7hVGCzLxFD06Q9I9PZ4VrJGN2WOCfM67gr%2B7bj0fYkNWZCS32eulV&X-Amz-Signature=63e21418054376144de904a8d6ee068091d805ad281b834de4c599508741b717&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OYER6K%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0q2HWI9ahO2Rr8RZHooOsb%2BJ%2Bk8IJReT14pQt11oB9AIgPB1t%2FXQUepx9bQpS8VtQTfFZTlY0kqQGpVeSxLfefqAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FJ9f%2Fq7xdudXTtfyrcA8RzpwAL2qZCV2%2F8u4JS4gCrsYzJlg2lmeSDQrCzznSPZsygtwM4wEKtoMqNQZgW7UStYxmezWNp8JHnV%2BZjvIXBMB53PyBYegjMcXITWwj35%2B1250Yr1sIEYab47r6b3ayClrJLL51R9cJj5tusjvLEGsJzkbdZVzprapuzcMxYyC9fjsqBBOHiP2vHNVw6fUZNNASuFX7WCDIumj6zT9kfm9TYbIbsgKHC78SQ1xp6e3XLcwkzMrKMjNO%2By2ChMMLkq15lDuGXEXEOjrPFosrLOa9slVO%2BvbtxhMnA1IzzKqHuuf30fQaLe8DrrCtm%2FX0ycnvPHEnFIpiCLi%2F2jOv4%2BgIlt2F3TqP0f8vdPP7Io3QLcnIWQv8QR5ljH4PrDOVZn2s60lnbyPLVUDKhpCRDBAmS4x3YKiW03vct4RJz7%2Bg4pPlYCpA%2BKNknu%2B3PSYmPILklPG5viagv8WRCkplZeQm%2F9oQzhPgwCmLtOjt3VwbrfUysRwGOq%2B0zkUTDcWIzKrwEAgz49DaPayfJJJ5ipk8FpRBJEOYhe8SjYvwdnCtNAc53Lat8QbnubQWxuT3kwRrAStLOS2MjTkvs%2FeY73BYIVP5uCgR3u5xfU9E81ma3AWF4Ax%2BAK8o0MPbx3b0GOqUB96NlJUNXZAiZpCAjziPTXtbM51hih6gD3Y%2BIkEm8UNMmEk25r6RMANNf5Oue5TUu%2Fkj62yoLJp3yFloU1gJR1bOnMXwcuQ2IWxNOqI8bE4j57yCaGWkes1gxcqGgchSZk3l6m73Z7lc76xG5RERX816%2Ba1DSrgeYTgPeHwq7hVGCzLxFD06Q9I9PZ4VrJGN2WOCfM67gr%2B7bj0fYkNWZCS32eulV&X-Amz-Signature=51a3a999e08abb91f66aaa184b4c695fe14e60d91496359bc55b5af2f7f4d298&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
