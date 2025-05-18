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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUXZYPM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGQfPh4TqqncyO1Kp0lOBWI%2BCcNWldeRRBfJ4RaQ6hzQIgMsCROipLSc%2F1WtAlMSpPfBjDaz6Y8feMWMWpQ1ajyi0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPhMpbvypjurpm6OWCrcA%2FqKbr8lDlbKUNYZn1gzThxGS%2B1IDHFj6Mds%2Fr5M%2FqXywli4uJvQ4rJvjwBNAuj7QpIguTkRp%2B3Mch1If6F5%2FtRdZy8O2Ljc3Tnf87zWTqqHnbuxabVdopju0Nl0x6mUS63C7CkC8G3%2FfzLif8VlejanbsBY8rqhc4WspKFwg2MwTJkDKV02s7nZ4qiN6FXK1jkXSBNm%2B%2FEX%2FdoCak%2F4I3jwOQfQ%2FVTlpmnIAC73BN5ReWleBAyfbJJxQFiWnS%2BVfUaZSvWX2XNjPz2ExO1jhIhs%2Fj7%2BGGqdBBvwMMfrTVYchROsZWpVS2N%2B3%2BBGLjXqxcBrCs9LcE5N1PLDC1MULdNKsrUCjtVgJ9TGzMo9nVgT7fwTkXrkoktEvjSGGnRPctid2cnEYUGLs5jcQn12O3wjag35N41G0iHePV%2BotjT75zJV9Ng4ttmplGhoruHhnfMUwf72fs2jySGDBtCdYwbefWjjeRZzc04L7SUAvQnFOyy0krCFyAP8DTq5EoDPgjyrprihQBPfZiCxq1fbAgjPfdpCG6Mev7g%2BdFWD1gtplerlrV6Hyp6aMg%2Fok%2BwnsSTYVsYj3T4jEODZgf%2B3l6atw09EVTJWv%2Bxc62IP9uIKHDO4POsk2EjF8eeRMO7VpsEGOqUBJj%2BJj%2B4Uo2iwhlwDdJg6GJG6IPV%2FkWLaE3ayVRPR4bLOwhYJyLp9ux3qsSy2Aoq4VEU4Vp7gU4RM%2BjoMNtCoHidUufjGqZfmeES2TqahfmGoyTdmTrthjHY%2FJFcm%2FIqFM4qgh9R7f2kmBwtRE%2FuDQujzgIlloaYq%2FKjUqM9LvP26Hworedp72gEXhfZx7gOum%2BJoVrhogqW5tvKpSNayu1GZ%2BR0x&X-Amz-Signature=9a1fc64824b7bf690f288a98336833142581d4b52b12d07ac600fd9fedea10b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUXZYPM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGQfPh4TqqncyO1Kp0lOBWI%2BCcNWldeRRBfJ4RaQ6hzQIgMsCROipLSc%2F1WtAlMSpPfBjDaz6Y8feMWMWpQ1ajyi0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPhMpbvypjurpm6OWCrcA%2FqKbr8lDlbKUNYZn1gzThxGS%2B1IDHFj6Mds%2Fr5M%2FqXywli4uJvQ4rJvjwBNAuj7QpIguTkRp%2B3Mch1If6F5%2FtRdZy8O2Ljc3Tnf87zWTqqHnbuxabVdopju0Nl0x6mUS63C7CkC8G3%2FfzLif8VlejanbsBY8rqhc4WspKFwg2MwTJkDKV02s7nZ4qiN6FXK1jkXSBNm%2B%2FEX%2FdoCak%2F4I3jwOQfQ%2FVTlpmnIAC73BN5ReWleBAyfbJJxQFiWnS%2BVfUaZSvWX2XNjPz2ExO1jhIhs%2Fj7%2BGGqdBBvwMMfrTVYchROsZWpVS2N%2B3%2BBGLjXqxcBrCs9LcE5N1PLDC1MULdNKsrUCjtVgJ9TGzMo9nVgT7fwTkXrkoktEvjSGGnRPctid2cnEYUGLs5jcQn12O3wjag35N41G0iHePV%2BotjT75zJV9Ng4ttmplGhoruHhnfMUwf72fs2jySGDBtCdYwbefWjjeRZzc04L7SUAvQnFOyy0krCFyAP8DTq5EoDPgjyrprihQBPfZiCxq1fbAgjPfdpCG6Mev7g%2BdFWD1gtplerlrV6Hyp6aMg%2Fok%2BwnsSTYVsYj3T4jEODZgf%2B3l6atw09EVTJWv%2Bxc62IP9uIKHDO4POsk2EjF8eeRMO7VpsEGOqUBJj%2BJj%2B4Uo2iwhlwDdJg6GJG6IPV%2FkWLaE3ayVRPR4bLOwhYJyLp9ux3qsSy2Aoq4VEU4Vp7gU4RM%2BjoMNtCoHidUufjGqZfmeES2TqahfmGoyTdmTrthjHY%2FJFcm%2FIqFM4qgh9R7f2kmBwtRE%2FuDQujzgIlloaYq%2FKjUqM9LvP26Hworedp72gEXhfZx7gOum%2BJoVrhogqW5tvKpSNayu1GZ%2BR0x&X-Amz-Signature=c3a08a3cec325f9721372fab79647a4046454dd82dd2d16e6d21c3a6099411a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUXZYPM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGQfPh4TqqncyO1Kp0lOBWI%2BCcNWldeRRBfJ4RaQ6hzQIgMsCROipLSc%2F1WtAlMSpPfBjDaz6Y8feMWMWpQ1ajyi0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPhMpbvypjurpm6OWCrcA%2FqKbr8lDlbKUNYZn1gzThxGS%2B1IDHFj6Mds%2Fr5M%2FqXywli4uJvQ4rJvjwBNAuj7QpIguTkRp%2B3Mch1If6F5%2FtRdZy8O2Ljc3Tnf87zWTqqHnbuxabVdopju0Nl0x6mUS63C7CkC8G3%2FfzLif8VlejanbsBY8rqhc4WspKFwg2MwTJkDKV02s7nZ4qiN6FXK1jkXSBNm%2B%2FEX%2FdoCak%2F4I3jwOQfQ%2FVTlpmnIAC73BN5ReWleBAyfbJJxQFiWnS%2BVfUaZSvWX2XNjPz2ExO1jhIhs%2Fj7%2BGGqdBBvwMMfrTVYchROsZWpVS2N%2B3%2BBGLjXqxcBrCs9LcE5N1PLDC1MULdNKsrUCjtVgJ9TGzMo9nVgT7fwTkXrkoktEvjSGGnRPctid2cnEYUGLs5jcQn12O3wjag35N41G0iHePV%2BotjT75zJV9Ng4ttmplGhoruHhnfMUwf72fs2jySGDBtCdYwbefWjjeRZzc04L7SUAvQnFOyy0krCFyAP8DTq5EoDPgjyrprihQBPfZiCxq1fbAgjPfdpCG6Mev7g%2BdFWD1gtplerlrV6Hyp6aMg%2Fok%2BwnsSTYVsYj3T4jEODZgf%2B3l6atw09EVTJWv%2Bxc62IP9uIKHDO4POsk2EjF8eeRMO7VpsEGOqUBJj%2BJj%2B4Uo2iwhlwDdJg6GJG6IPV%2FkWLaE3ayVRPR4bLOwhYJyLp9ux3qsSy2Aoq4VEU4Vp7gU4RM%2BjoMNtCoHidUufjGqZfmeES2TqahfmGoyTdmTrthjHY%2FJFcm%2FIqFM4qgh9R7f2kmBwtRE%2FuDQujzgIlloaYq%2FKjUqM9LvP26Hworedp72gEXhfZx7gOum%2BJoVrhogqW5tvKpSNayu1GZ%2BR0x&X-Amz-Signature=67d8b065d312d1832bed80615823169476f35b23ae833e7a8cd90a4c2898bb04&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUXZYPM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGQfPh4TqqncyO1Kp0lOBWI%2BCcNWldeRRBfJ4RaQ6hzQIgMsCROipLSc%2F1WtAlMSpPfBjDaz6Y8feMWMWpQ1ajyi0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPhMpbvypjurpm6OWCrcA%2FqKbr8lDlbKUNYZn1gzThxGS%2B1IDHFj6Mds%2Fr5M%2FqXywli4uJvQ4rJvjwBNAuj7QpIguTkRp%2B3Mch1If6F5%2FtRdZy8O2Ljc3Tnf87zWTqqHnbuxabVdopju0Nl0x6mUS63C7CkC8G3%2FfzLif8VlejanbsBY8rqhc4WspKFwg2MwTJkDKV02s7nZ4qiN6FXK1jkXSBNm%2B%2FEX%2FdoCak%2F4I3jwOQfQ%2FVTlpmnIAC73BN5ReWleBAyfbJJxQFiWnS%2BVfUaZSvWX2XNjPz2ExO1jhIhs%2Fj7%2BGGqdBBvwMMfrTVYchROsZWpVS2N%2B3%2BBGLjXqxcBrCs9LcE5N1PLDC1MULdNKsrUCjtVgJ9TGzMo9nVgT7fwTkXrkoktEvjSGGnRPctid2cnEYUGLs5jcQn12O3wjag35N41G0iHePV%2BotjT75zJV9Ng4ttmplGhoruHhnfMUwf72fs2jySGDBtCdYwbefWjjeRZzc04L7SUAvQnFOyy0krCFyAP8DTq5EoDPgjyrprihQBPfZiCxq1fbAgjPfdpCG6Mev7g%2BdFWD1gtplerlrV6Hyp6aMg%2Fok%2BwnsSTYVsYj3T4jEODZgf%2B3l6atw09EVTJWv%2Bxc62IP9uIKHDO4POsk2EjF8eeRMO7VpsEGOqUBJj%2BJj%2B4Uo2iwhlwDdJg6GJG6IPV%2FkWLaE3ayVRPR4bLOwhYJyLp9ux3qsSy2Aoq4VEU4Vp7gU4RM%2BjoMNtCoHidUufjGqZfmeES2TqahfmGoyTdmTrthjHY%2FJFcm%2FIqFM4qgh9R7f2kmBwtRE%2FuDQujzgIlloaYq%2FKjUqM9LvP26Hworedp72gEXhfZx7gOum%2BJoVrhogqW5tvKpSNayu1GZ%2BR0x&X-Amz-Signature=3c79a3b52b50c99832e225f20bd05888cdda9aa91240880ed72a5aeb44d51329&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUXZYPM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGQfPh4TqqncyO1Kp0lOBWI%2BCcNWldeRRBfJ4RaQ6hzQIgMsCROipLSc%2F1WtAlMSpPfBjDaz6Y8feMWMWpQ1ajyi0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPhMpbvypjurpm6OWCrcA%2FqKbr8lDlbKUNYZn1gzThxGS%2B1IDHFj6Mds%2Fr5M%2FqXywli4uJvQ4rJvjwBNAuj7QpIguTkRp%2B3Mch1If6F5%2FtRdZy8O2Ljc3Tnf87zWTqqHnbuxabVdopju0Nl0x6mUS63C7CkC8G3%2FfzLif8VlejanbsBY8rqhc4WspKFwg2MwTJkDKV02s7nZ4qiN6FXK1jkXSBNm%2B%2FEX%2FdoCak%2F4I3jwOQfQ%2FVTlpmnIAC73BN5ReWleBAyfbJJxQFiWnS%2BVfUaZSvWX2XNjPz2ExO1jhIhs%2Fj7%2BGGqdBBvwMMfrTVYchROsZWpVS2N%2B3%2BBGLjXqxcBrCs9LcE5N1PLDC1MULdNKsrUCjtVgJ9TGzMo9nVgT7fwTkXrkoktEvjSGGnRPctid2cnEYUGLs5jcQn12O3wjag35N41G0iHePV%2BotjT75zJV9Ng4ttmplGhoruHhnfMUwf72fs2jySGDBtCdYwbefWjjeRZzc04L7SUAvQnFOyy0krCFyAP8DTq5EoDPgjyrprihQBPfZiCxq1fbAgjPfdpCG6Mev7g%2BdFWD1gtplerlrV6Hyp6aMg%2Fok%2BwnsSTYVsYj3T4jEODZgf%2B3l6atw09EVTJWv%2Bxc62IP9uIKHDO4POsk2EjF8eeRMO7VpsEGOqUBJj%2BJj%2B4Uo2iwhlwDdJg6GJG6IPV%2FkWLaE3ayVRPR4bLOwhYJyLp9ux3qsSy2Aoq4VEU4Vp7gU4RM%2BjoMNtCoHidUufjGqZfmeES2TqahfmGoyTdmTrthjHY%2FJFcm%2FIqFM4qgh9R7f2kmBwtRE%2FuDQujzgIlloaYq%2FKjUqM9LvP26Hworedp72gEXhfZx7gOum%2BJoVrhogqW5tvKpSNayu1GZ%2BR0x&X-Amz-Signature=a40c88101b65d4571bcaaa2185b6dbfef4eed5ef1613811ff62f84aa38d6a841&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUXZYPM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGQfPh4TqqncyO1Kp0lOBWI%2BCcNWldeRRBfJ4RaQ6hzQIgMsCROipLSc%2F1WtAlMSpPfBjDaz6Y8feMWMWpQ1ajyi0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPhMpbvypjurpm6OWCrcA%2FqKbr8lDlbKUNYZn1gzThxGS%2B1IDHFj6Mds%2Fr5M%2FqXywli4uJvQ4rJvjwBNAuj7QpIguTkRp%2B3Mch1If6F5%2FtRdZy8O2Ljc3Tnf87zWTqqHnbuxabVdopju0Nl0x6mUS63C7CkC8G3%2FfzLif8VlejanbsBY8rqhc4WspKFwg2MwTJkDKV02s7nZ4qiN6FXK1jkXSBNm%2B%2FEX%2FdoCak%2F4I3jwOQfQ%2FVTlpmnIAC73BN5ReWleBAyfbJJxQFiWnS%2BVfUaZSvWX2XNjPz2ExO1jhIhs%2Fj7%2BGGqdBBvwMMfrTVYchROsZWpVS2N%2B3%2BBGLjXqxcBrCs9LcE5N1PLDC1MULdNKsrUCjtVgJ9TGzMo9nVgT7fwTkXrkoktEvjSGGnRPctid2cnEYUGLs5jcQn12O3wjag35N41G0iHePV%2BotjT75zJV9Ng4ttmplGhoruHhnfMUwf72fs2jySGDBtCdYwbefWjjeRZzc04L7SUAvQnFOyy0krCFyAP8DTq5EoDPgjyrprihQBPfZiCxq1fbAgjPfdpCG6Mev7g%2BdFWD1gtplerlrV6Hyp6aMg%2Fok%2BwnsSTYVsYj3T4jEODZgf%2B3l6atw09EVTJWv%2Bxc62IP9uIKHDO4POsk2EjF8eeRMO7VpsEGOqUBJj%2BJj%2B4Uo2iwhlwDdJg6GJG6IPV%2FkWLaE3ayVRPR4bLOwhYJyLp9ux3qsSy2Aoq4VEU4Vp7gU4RM%2BjoMNtCoHidUufjGqZfmeES2TqahfmGoyTdmTrthjHY%2FJFcm%2FIqFM4qgh9R7f2kmBwtRE%2FuDQujzgIlloaYq%2FKjUqM9LvP26Hworedp72gEXhfZx7gOum%2BJoVrhogqW5tvKpSNayu1GZ%2BR0x&X-Amz-Signature=612e68f3d95f5561c6a057c7247ca3f2539855b85a5e72528f0c79cc9bd10325&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUXZYPM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGQfPh4TqqncyO1Kp0lOBWI%2BCcNWldeRRBfJ4RaQ6hzQIgMsCROipLSc%2F1WtAlMSpPfBjDaz6Y8feMWMWpQ1ajyi0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPhMpbvypjurpm6OWCrcA%2FqKbr8lDlbKUNYZn1gzThxGS%2B1IDHFj6Mds%2Fr5M%2FqXywli4uJvQ4rJvjwBNAuj7QpIguTkRp%2B3Mch1If6F5%2FtRdZy8O2Ljc3Tnf87zWTqqHnbuxabVdopju0Nl0x6mUS63C7CkC8G3%2FfzLif8VlejanbsBY8rqhc4WspKFwg2MwTJkDKV02s7nZ4qiN6FXK1jkXSBNm%2B%2FEX%2FdoCak%2F4I3jwOQfQ%2FVTlpmnIAC73BN5ReWleBAyfbJJxQFiWnS%2BVfUaZSvWX2XNjPz2ExO1jhIhs%2Fj7%2BGGqdBBvwMMfrTVYchROsZWpVS2N%2B3%2BBGLjXqxcBrCs9LcE5N1PLDC1MULdNKsrUCjtVgJ9TGzMo9nVgT7fwTkXrkoktEvjSGGnRPctid2cnEYUGLs5jcQn12O3wjag35N41G0iHePV%2BotjT75zJV9Ng4ttmplGhoruHhnfMUwf72fs2jySGDBtCdYwbefWjjeRZzc04L7SUAvQnFOyy0krCFyAP8DTq5EoDPgjyrprihQBPfZiCxq1fbAgjPfdpCG6Mev7g%2BdFWD1gtplerlrV6Hyp6aMg%2Fok%2BwnsSTYVsYj3T4jEODZgf%2B3l6atw09EVTJWv%2Bxc62IP9uIKHDO4POsk2EjF8eeRMO7VpsEGOqUBJj%2BJj%2B4Uo2iwhlwDdJg6GJG6IPV%2FkWLaE3ayVRPR4bLOwhYJyLp9ux3qsSy2Aoq4VEU4Vp7gU4RM%2BjoMNtCoHidUufjGqZfmeES2TqahfmGoyTdmTrthjHY%2FJFcm%2FIqFM4qgh9R7f2kmBwtRE%2FuDQujzgIlloaYq%2FKjUqM9LvP26Hworedp72gEXhfZx7gOum%2BJoVrhogqW5tvKpSNayu1GZ%2BR0x&X-Amz-Signature=cb710d176cbf48198d6e6d389ed1ca7790ab441afa6e50bcbdb7bcd3eb8b242a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
