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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EAHBC6A%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZGmMRWN9BFRUEtCwsPyrRbxYO8wOYnwHDMvtb7dXKAiEA%2BA16l0quLi%2B8nJhf2W7j%2FKBo9VDHL5lDjZmoZ7q0pdMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDD%2B9vAuxJUgiS2r1uircA1iiaHyR5xoWIFV7bEyLKS7pt7Tm27PhNdKvyFDA9EEIeE754VNXVD%2BLwwpht6XchOqSo%2BoY%2FnNl0QZglLD%2BPD2aEPlSspXhOWiIoa80rTX%2Ft9oAA5ZDYIFlyT10OU7zoS%2B%2F%2BuhBEy0fp9%2Bp4UjRd0ygvuaQxSWK1v69jwmkmtMombLiaqjD5AaDoGARn41h4mhP4BgE0Fzkymb4qwGxAcRYH9XTYbJntnvr8GPeKy5to5gnFKo6qDluIYqP51Jfm6LKLeUYeNcqcugyil4loqF4%2BHz%2FybGuFN1xbeN7U%2BardZdvjenFYcJppV%2BlHu3RDctHMotSGcIPSiNqwNdYkMKt%2FLZ7S3D%2BPgHt0vqlz0r%2FPc98T8sDsSddxDEVRXb42MYudfxFN4Zy2GfKDOFBU5t%2FyEyVqu8ZTDyara5YtjpXawDqSf3RiaSD2osK37QNpuo%2FSnYn2%2FBzzBjqFDs0j4cwj9fJxWDNPOX5UFqoReg63emy58fwea46%2FCGCqll4D5q4MWkmETOqxV1ewvdEcmuN66M7mB5cAd7H2e6flf0gW1p03purrhtswjRdDG3ILNKMRqw0SYTX66oHG5Z2UfX%2BurMe2D7lxFf9WDOpDN8BoxZtOlRnFATgo9Y%2BMKr%2Bq74GOqUBLwGxB6bFUT9I6oJLWsQUzZHhavyMTgbECH%2FMqyLq1HDkKfiSocsxckBy7VPjSynhQeO5tTbQaBiJckt%2FlFmPeFR%2FmnkOhItUk8x8J2a4%2Bygm4aQDjbIy36wornDQW5iuroFvPCcXTBJ9qtKl4xX0gG4FO9VFw%2BdVZDbsX5hKFEP7sGcBONy8YOVYdxcbN96Wh%2F5QKqXpUsOKzNNxBLvIlDC0xRWt&X-Amz-Signature=7cd775be0a82d26bb1c624081517872c29140fe4a27d2499da66a2eade251174&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EAHBC6A%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZGmMRWN9BFRUEtCwsPyrRbxYO8wOYnwHDMvtb7dXKAiEA%2BA16l0quLi%2B8nJhf2W7j%2FKBo9VDHL5lDjZmoZ7q0pdMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDD%2B9vAuxJUgiS2r1uircA1iiaHyR5xoWIFV7bEyLKS7pt7Tm27PhNdKvyFDA9EEIeE754VNXVD%2BLwwpht6XchOqSo%2BoY%2FnNl0QZglLD%2BPD2aEPlSspXhOWiIoa80rTX%2Ft9oAA5ZDYIFlyT10OU7zoS%2B%2F%2BuhBEy0fp9%2Bp4UjRd0ygvuaQxSWK1v69jwmkmtMombLiaqjD5AaDoGARn41h4mhP4BgE0Fzkymb4qwGxAcRYH9XTYbJntnvr8GPeKy5to5gnFKo6qDluIYqP51Jfm6LKLeUYeNcqcugyil4loqF4%2BHz%2FybGuFN1xbeN7U%2BardZdvjenFYcJppV%2BlHu3RDctHMotSGcIPSiNqwNdYkMKt%2FLZ7S3D%2BPgHt0vqlz0r%2FPc98T8sDsSddxDEVRXb42MYudfxFN4Zy2GfKDOFBU5t%2FyEyVqu8ZTDyara5YtjpXawDqSf3RiaSD2osK37QNpuo%2FSnYn2%2FBzzBjqFDs0j4cwj9fJxWDNPOX5UFqoReg63emy58fwea46%2FCGCqll4D5q4MWkmETOqxV1ewvdEcmuN66M7mB5cAd7H2e6flf0gW1p03purrhtswjRdDG3ILNKMRqw0SYTX66oHG5Z2UfX%2BurMe2D7lxFf9WDOpDN8BoxZtOlRnFATgo9Y%2BMKr%2Bq74GOqUBLwGxB6bFUT9I6oJLWsQUzZHhavyMTgbECH%2FMqyLq1HDkKfiSocsxckBy7VPjSynhQeO5tTbQaBiJckt%2FlFmPeFR%2FmnkOhItUk8x8J2a4%2Bygm4aQDjbIy36wornDQW5iuroFvPCcXTBJ9qtKl4xX0gG4FO9VFw%2BdVZDbsX5hKFEP7sGcBONy8YOVYdxcbN96Wh%2F5QKqXpUsOKzNNxBLvIlDC0xRWt&X-Amz-Signature=cbd6e2556f89875860f8b7db77b01d28a0186f99b6e1d8e5608c460dca548cab&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EAHBC6A%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZGmMRWN9BFRUEtCwsPyrRbxYO8wOYnwHDMvtb7dXKAiEA%2BA16l0quLi%2B8nJhf2W7j%2FKBo9VDHL5lDjZmoZ7q0pdMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDD%2B9vAuxJUgiS2r1uircA1iiaHyR5xoWIFV7bEyLKS7pt7Tm27PhNdKvyFDA9EEIeE754VNXVD%2BLwwpht6XchOqSo%2BoY%2FnNl0QZglLD%2BPD2aEPlSspXhOWiIoa80rTX%2Ft9oAA5ZDYIFlyT10OU7zoS%2B%2F%2BuhBEy0fp9%2Bp4UjRd0ygvuaQxSWK1v69jwmkmtMombLiaqjD5AaDoGARn41h4mhP4BgE0Fzkymb4qwGxAcRYH9XTYbJntnvr8GPeKy5to5gnFKo6qDluIYqP51Jfm6LKLeUYeNcqcugyil4loqF4%2BHz%2FybGuFN1xbeN7U%2BardZdvjenFYcJppV%2BlHu3RDctHMotSGcIPSiNqwNdYkMKt%2FLZ7S3D%2BPgHt0vqlz0r%2FPc98T8sDsSddxDEVRXb42MYudfxFN4Zy2GfKDOFBU5t%2FyEyVqu8ZTDyara5YtjpXawDqSf3RiaSD2osK37QNpuo%2FSnYn2%2FBzzBjqFDs0j4cwj9fJxWDNPOX5UFqoReg63emy58fwea46%2FCGCqll4D5q4MWkmETOqxV1ewvdEcmuN66M7mB5cAd7H2e6flf0gW1p03purrhtswjRdDG3ILNKMRqw0SYTX66oHG5Z2UfX%2BurMe2D7lxFf9WDOpDN8BoxZtOlRnFATgo9Y%2BMKr%2Bq74GOqUBLwGxB6bFUT9I6oJLWsQUzZHhavyMTgbECH%2FMqyLq1HDkKfiSocsxckBy7VPjSynhQeO5tTbQaBiJckt%2FlFmPeFR%2FmnkOhItUk8x8J2a4%2Bygm4aQDjbIy36wornDQW5iuroFvPCcXTBJ9qtKl4xX0gG4FO9VFw%2BdVZDbsX5hKFEP7sGcBONy8YOVYdxcbN96Wh%2F5QKqXpUsOKzNNxBLvIlDC0xRWt&X-Amz-Signature=8559ff08257335d463fe171471cb057ea0681517d3dd36964337435c2399f4e9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EAHBC6A%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZGmMRWN9BFRUEtCwsPyrRbxYO8wOYnwHDMvtb7dXKAiEA%2BA16l0quLi%2B8nJhf2W7j%2FKBo9VDHL5lDjZmoZ7q0pdMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDD%2B9vAuxJUgiS2r1uircA1iiaHyR5xoWIFV7bEyLKS7pt7Tm27PhNdKvyFDA9EEIeE754VNXVD%2BLwwpht6XchOqSo%2BoY%2FnNl0QZglLD%2BPD2aEPlSspXhOWiIoa80rTX%2Ft9oAA5ZDYIFlyT10OU7zoS%2B%2F%2BuhBEy0fp9%2Bp4UjRd0ygvuaQxSWK1v69jwmkmtMombLiaqjD5AaDoGARn41h4mhP4BgE0Fzkymb4qwGxAcRYH9XTYbJntnvr8GPeKy5to5gnFKo6qDluIYqP51Jfm6LKLeUYeNcqcugyil4loqF4%2BHz%2FybGuFN1xbeN7U%2BardZdvjenFYcJppV%2BlHu3RDctHMotSGcIPSiNqwNdYkMKt%2FLZ7S3D%2BPgHt0vqlz0r%2FPc98T8sDsSddxDEVRXb42MYudfxFN4Zy2GfKDOFBU5t%2FyEyVqu8ZTDyara5YtjpXawDqSf3RiaSD2osK37QNpuo%2FSnYn2%2FBzzBjqFDs0j4cwj9fJxWDNPOX5UFqoReg63emy58fwea46%2FCGCqll4D5q4MWkmETOqxV1ewvdEcmuN66M7mB5cAd7H2e6flf0gW1p03purrhtswjRdDG3ILNKMRqw0SYTX66oHG5Z2UfX%2BurMe2D7lxFf9WDOpDN8BoxZtOlRnFATgo9Y%2BMKr%2Bq74GOqUBLwGxB6bFUT9I6oJLWsQUzZHhavyMTgbECH%2FMqyLq1HDkKfiSocsxckBy7VPjSynhQeO5tTbQaBiJckt%2FlFmPeFR%2FmnkOhItUk8x8J2a4%2Bygm4aQDjbIy36wornDQW5iuroFvPCcXTBJ9qtKl4xX0gG4FO9VFw%2BdVZDbsX5hKFEP7sGcBONy8YOVYdxcbN96Wh%2F5QKqXpUsOKzNNxBLvIlDC0xRWt&X-Amz-Signature=274086404dbcb196ce2b401aa3856d2b8c068c106064324b0bf5712b641b1aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EAHBC6A%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZGmMRWN9BFRUEtCwsPyrRbxYO8wOYnwHDMvtb7dXKAiEA%2BA16l0quLi%2B8nJhf2W7j%2FKBo9VDHL5lDjZmoZ7q0pdMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDD%2B9vAuxJUgiS2r1uircA1iiaHyR5xoWIFV7bEyLKS7pt7Tm27PhNdKvyFDA9EEIeE754VNXVD%2BLwwpht6XchOqSo%2BoY%2FnNl0QZglLD%2BPD2aEPlSspXhOWiIoa80rTX%2Ft9oAA5ZDYIFlyT10OU7zoS%2B%2F%2BuhBEy0fp9%2Bp4UjRd0ygvuaQxSWK1v69jwmkmtMombLiaqjD5AaDoGARn41h4mhP4BgE0Fzkymb4qwGxAcRYH9XTYbJntnvr8GPeKy5to5gnFKo6qDluIYqP51Jfm6LKLeUYeNcqcugyil4loqF4%2BHz%2FybGuFN1xbeN7U%2BardZdvjenFYcJppV%2BlHu3RDctHMotSGcIPSiNqwNdYkMKt%2FLZ7S3D%2BPgHt0vqlz0r%2FPc98T8sDsSddxDEVRXb42MYudfxFN4Zy2GfKDOFBU5t%2FyEyVqu8ZTDyara5YtjpXawDqSf3RiaSD2osK37QNpuo%2FSnYn2%2FBzzBjqFDs0j4cwj9fJxWDNPOX5UFqoReg63emy58fwea46%2FCGCqll4D5q4MWkmETOqxV1ewvdEcmuN66M7mB5cAd7H2e6flf0gW1p03purrhtswjRdDG3ILNKMRqw0SYTX66oHG5Z2UfX%2BurMe2D7lxFf9WDOpDN8BoxZtOlRnFATgo9Y%2BMKr%2Bq74GOqUBLwGxB6bFUT9I6oJLWsQUzZHhavyMTgbECH%2FMqyLq1HDkKfiSocsxckBy7VPjSynhQeO5tTbQaBiJckt%2FlFmPeFR%2FmnkOhItUk8x8J2a4%2Bygm4aQDjbIy36wornDQW5iuroFvPCcXTBJ9qtKl4xX0gG4FO9VFw%2BdVZDbsX5hKFEP7sGcBONy8YOVYdxcbN96Wh%2F5QKqXpUsOKzNNxBLvIlDC0xRWt&X-Amz-Signature=1d53df0e56563fc53952d5a8477ae2bd00c96759beb1b5d96b7f0e43a159aab4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EAHBC6A%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZGmMRWN9BFRUEtCwsPyrRbxYO8wOYnwHDMvtb7dXKAiEA%2BA16l0quLi%2B8nJhf2W7j%2FKBo9VDHL5lDjZmoZ7q0pdMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDD%2B9vAuxJUgiS2r1uircA1iiaHyR5xoWIFV7bEyLKS7pt7Tm27PhNdKvyFDA9EEIeE754VNXVD%2BLwwpht6XchOqSo%2BoY%2FnNl0QZglLD%2BPD2aEPlSspXhOWiIoa80rTX%2Ft9oAA5ZDYIFlyT10OU7zoS%2B%2F%2BuhBEy0fp9%2Bp4UjRd0ygvuaQxSWK1v69jwmkmtMombLiaqjD5AaDoGARn41h4mhP4BgE0Fzkymb4qwGxAcRYH9XTYbJntnvr8GPeKy5to5gnFKo6qDluIYqP51Jfm6LKLeUYeNcqcugyil4loqF4%2BHz%2FybGuFN1xbeN7U%2BardZdvjenFYcJppV%2BlHu3RDctHMotSGcIPSiNqwNdYkMKt%2FLZ7S3D%2BPgHt0vqlz0r%2FPc98T8sDsSddxDEVRXb42MYudfxFN4Zy2GfKDOFBU5t%2FyEyVqu8ZTDyara5YtjpXawDqSf3RiaSD2osK37QNpuo%2FSnYn2%2FBzzBjqFDs0j4cwj9fJxWDNPOX5UFqoReg63emy58fwea46%2FCGCqll4D5q4MWkmETOqxV1ewvdEcmuN66M7mB5cAd7H2e6flf0gW1p03purrhtswjRdDG3ILNKMRqw0SYTX66oHG5Z2UfX%2BurMe2D7lxFf9WDOpDN8BoxZtOlRnFATgo9Y%2BMKr%2Bq74GOqUBLwGxB6bFUT9I6oJLWsQUzZHhavyMTgbECH%2FMqyLq1HDkKfiSocsxckBy7VPjSynhQeO5tTbQaBiJckt%2FlFmPeFR%2FmnkOhItUk8x8J2a4%2Bygm4aQDjbIy36wornDQW5iuroFvPCcXTBJ9qtKl4xX0gG4FO9VFw%2BdVZDbsX5hKFEP7sGcBONy8YOVYdxcbN96Wh%2F5QKqXpUsOKzNNxBLvIlDC0xRWt&X-Amz-Signature=144cfebce933fbf13ee0e52ef7c313115dd7919c9bd380f5549f9faab99a002c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EAHBC6A%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZGmMRWN9BFRUEtCwsPyrRbxYO8wOYnwHDMvtb7dXKAiEA%2BA16l0quLi%2B8nJhf2W7j%2FKBo9VDHL5lDjZmoZ7q0pdMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDD%2B9vAuxJUgiS2r1uircA1iiaHyR5xoWIFV7bEyLKS7pt7Tm27PhNdKvyFDA9EEIeE754VNXVD%2BLwwpht6XchOqSo%2BoY%2FnNl0QZglLD%2BPD2aEPlSspXhOWiIoa80rTX%2Ft9oAA5ZDYIFlyT10OU7zoS%2B%2F%2BuhBEy0fp9%2Bp4UjRd0ygvuaQxSWK1v69jwmkmtMombLiaqjD5AaDoGARn41h4mhP4BgE0Fzkymb4qwGxAcRYH9XTYbJntnvr8GPeKy5to5gnFKo6qDluIYqP51Jfm6LKLeUYeNcqcugyil4loqF4%2BHz%2FybGuFN1xbeN7U%2BardZdvjenFYcJppV%2BlHu3RDctHMotSGcIPSiNqwNdYkMKt%2FLZ7S3D%2BPgHt0vqlz0r%2FPc98T8sDsSddxDEVRXb42MYudfxFN4Zy2GfKDOFBU5t%2FyEyVqu8ZTDyara5YtjpXawDqSf3RiaSD2osK37QNpuo%2FSnYn2%2FBzzBjqFDs0j4cwj9fJxWDNPOX5UFqoReg63emy58fwea46%2FCGCqll4D5q4MWkmETOqxV1ewvdEcmuN66M7mB5cAd7H2e6flf0gW1p03purrhtswjRdDG3ILNKMRqw0SYTX66oHG5Z2UfX%2BurMe2D7lxFf9WDOpDN8BoxZtOlRnFATgo9Y%2BMKr%2Bq74GOqUBLwGxB6bFUT9I6oJLWsQUzZHhavyMTgbECH%2FMqyLq1HDkKfiSocsxckBy7VPjSynhQeO5tTbQaBiJckt%2FlFmPeFR%2FmnkOhItUk8x8J2a4%2Bygm4aQDjbIy36wornDQW5iuroFvPCcXTBJ9qtKl4xX0gG4FO9VFw%2BdVZDbsX5hKFEP7sGcBONy8YOVYdxcbN96Wh%2F5QKqXpUsOKzNNxBLvIlDC0xRWt&X-Amz-Signature=3e2c7a6f3f5aca7779e2fcc43968825986949614bda2ca4e40f45dddd447cba2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
