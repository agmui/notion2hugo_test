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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUAEON3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAj5g8b3D%2Bg2rAOKg%2FpoUvCHMEJgCRYYMrz%2BpywVC9vOAiEAsJCGH64X7Eu%2FlLUAXXLF75wiqQmL2%2FDPo3ZQvxnmgfIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAf6mtEL5myBsh%2Bf8ircA1gt%2F54wNZBI9vIYpYvzmU4jJOqnvC%2B2RkAQm5LHAqTj0u64wJJH990%2BtkTQ%2Ff8pgwE24f3Tjm%2BVQ0vI81vBPw2BRgNE1epn3v7kGHl6MQMSbHwcJ9xpN34TTOf669oElnSoyzmMWBDRVHGrq%2BuRQf2ltnsQ6iWlIIhixCOMgnL%2BFiyyGNve9TLiGr57dusFbuY8ahVGU%2BSw1BhJLhLPrKJ4E3XWMXOlNiyZl904m9nyAUhSnawL2YG0ItHunb%2FE4%2FhDZaNWRpym5JSPikr2yaZ4wYDW8MmGYYM8c63EDQ3kMLojaUG8Bojae0O6ICbGbWui8J5C7LTJGhBYPc30gRzFAsC3AwVaq62dMws4FmBYNcD%2BajJjx8YIEXcKONkJ8iZLhCYhLmaiF0L%2Fq%2Fo7ZI9gpR4xaH0E%2B1v%2F9lD2%2BfzGppm3IqcOLVI1VYir5kAR%2BPAqS%2FGqD%2BIxySyj0slqt4ZdIXYP%2F34fIlk4F5kJBR622Xl5dr%2Fa%2Bjm6u7JCgNoSs3PmsR3b6PaCLHFJgPzpgKz%2BHllHw%2BwPf%2B1%2FewpI16meNRUZk9enQ8rQb9zhvp%2FrhyuJQA%2BuRjJStTB%2BS9ohBc0%2FaZHyTbxhJGD06GnlGIpnb61RhvoLJm6HzW8lMOL5%2FcIGOqUBYA9jPkJMFnWd6v%2BBKUBW83HZp9ocp3aOIl4NoJX7OK9UnbJ%2FDUjTdv6jyOwuD%2B%2FZLH5GzV%2FefG9LJn6hDhfDKIjqa0FcwZhGe%2Fm3Xp4chuTZhnPpHTn%2F5CvsmVelOxTAs%2BI6Z5OE0krX%2FdkehMkpT6uFxv9AuqNkSUOgXBBA8JIHoR%2Fpk%2Bnnu4RZ1Wrk6x0rC8f%2FLO%2Bz9kn7JDhRuKOovAmvZo8P&X-Amz-Signature=dce62edc941f4abf26d418455e264b133251199d4a8df88d497d6beb0154709b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUAEON3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAj5g8b3D%2Bg2rAOKg%2FpoUvCHMEJgCRYYMrz%2BpywVC9vOAiEAsJCGH64X7Eu%2FlLUAXXLF75wiqQmL2%2FDPo3ZQvxnmgfIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAf6mtEL5myBsh%2Bf8ircA1gt%2F54wNZBI9vIYpYvzmU4jJOqnvC%2B2RkAQm5LHAqTj0u64wJJH990%2BtkTQ%2Ff8pgwE24f3Tjm%2BVQ0vI81vBPw2BRgNE1epn3v7kGHl6MQMSbHwcJ9xpN34TTOf669oElnSoyzmMWBDRVHGrq%2BuRQf2ltnsQ6iWlIIhixCOMgnL%2BFiyyGNve9TLiGr57dusFbuY8ahVGU%2BSw1BhJLhLPrKJ4E3XWMXOlNiyZl904m9nyAUhSnawL2YG0ItHunb%2FE4%2FhDZaNWRpym5JSPikr2yaZ4wYDW8MmGYYM8c63EDQ3kMLojaUG8Bojae0O6ICbGbWui8J5C7LTJGhBYPc30gRzFAsC3AwVaq62dMws4FmBYNcD%2BajJjx8YIEXcKONkJ8iZLhCYhLmaiF0L%2Fq%2Fo7ZI9gpR4xaH0E%2B1v%2F9lD2%2BfzGppm3IqcOLVI1VYir5kAR%2BPAqS%2FGqD%2BIxySyj0slqt4ZdIXYP%2F34fIlk4F5kJBR622Xl5dr%2Fa%2Bjm6u7JCgNoSs3PmsR3b6PaCLHFJgPzpgKz%2BHllHw%2BwPf%2B1%2FewpI16meNRUZk9enQ8rQb9zhvp%2FrhyuJQA%2BuRjJStTB%2BS9ohBc0%2FaZHyTbxhJGD06GnlGIpnb61RhvoLJm6HzW8lMOL5%2FcIGOqUBYA9jPkJMFnWd6v%2BBKUBW83HZp9ocp3aOIl4NoJX7OK9UnbJ%2FDUjTdv6jyOwuD%2B%2FZLH5GzV%2FefG9LJn6hDhfDKIjqa0FcwZhGe%2Fm3Xp4chuTZhnPpHTn%2F5CvsmVelOxTAs%2BI6Z5OE0krX%2FdkehMkpT6uFxv9AuqNkSUOgXBBA8JIHoR%2Fpk%2Bnnu4RZ1Wrk6x0rC8f%2FLO%2Bz9kn7JDhRuKOovAmvZo8P&X-Amz-Signature=8ab8ae33600cbf4be21e4c4986b0965ca9d1a73307eb3c41d6d2dfb3ba14c856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUAEON3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAj5g8b3D%2Bg2rAOKg%2FpoUvCHMEJgCRYYMrz%2BpywVC9vOAiEAsJCGH64X7Eu%2FlLUAXXLF75wiqQmL2%2FDPo3ZQvxnmgfIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAf6mtEL5myBsh%2Bf8ircA1gt%2F54wNZBI9vIYpYvzmU4jJOqnvC%2B2RkAQm5LHAqTj0u64wJJH990%2BtkTQ%2Ff8pgwE24f3Tjm%2BVQ0vI81vBPw2BRgNE1epn3v7kGHl6MQMSbHwcJ9xpN34TTOf669oElnSoyzmMWBDRVHGrq%2BuRQf2ltnsQ6iWlIIhixCOMgnL%2BFiyyGNve9TLiGr57dusFbuY8ahVGU%2BSw1BhJLhLPrKJ4E3XWMXOlNiyZl904m9nyAUhSnawL2YG0ItHunb%2FE4%2FhDZaNWRpym5JSPikr2yaZ4wYDW8MmGYYM8c63EDQ3kMLojaUG8Bojae0O6ICbGbWui8J5C7LTJGhBYPc30gRzFAsC3AwVaq62dMws4FmBYNcD%2BajJjx8YIEXcKONkJ8iZLhCYhLmaiF0L%2Fq%2Fo7ZI9gpR4xaH0E%2B1v%2F9lD2%2BfzGppm3IqcOLVI1VYir5kAR%2BPAqS%2FGqD%2BIxySyj0slqt4ZdIXYP%2F34fIlk4F5kJBR622Xl5dr%2Fa%2Bjm6u7JCgNoSs3PmsR3b6PaCLHFJgPzpgKz%2BHllHw%2BwPf%2B1%2FewpI16meNRUZk9enQ8rQb9zhvp%2FrhyuJQA%2BuRjJStTB%2BS9ohBc0%2FaZHyTbxhJGD06GnlGIpnb61RhvoLJm6HzW8lMOL5%2FcIGOqUBYA9jPkJMFnWd6v%2BBKUBW83HZp9ocp3aOIl4NoJX7OK9UnbJ%2FDUjTdv6jyOwuD%2B%2FZLH5GzV%2FefG9LJn6hDhfDKIjqa0FcwZhGe%2Fm3Xp4chuTZhnPpHTn%2F5CvsmVelOxTAs%2BI6Z5OE0krX%2FdkehMkpT6uFxv9AuqNkSUOgXBBA8JIHoR%2Fpk%2Bnnu4RZ1Wrk6x0rC8f%2FLO%2Bz9kn7JDhRuKOovAmvZo8P&X-Amz-Signature=ab6179e0b755b8e74ae7f5a6efe9d2a8125d3a60d801084979a64ab06fa9bf5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUAEON3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAj5g8b3D%2Bg2rAOKg%2FpoUvCHMEJgCRYYMrz%2BpywVC9vOAiEAsJCGH64X7Eu%2FlLUAXXLF75wiqQmL2%2FDPo3ZQvxnmgfIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAf6mtEL5myBsh%2Bf8ircA1gt%2F54wNZBI9vIYpYvzmU4jJOqnvC%2B2RkAQm5LHAqTj0u64wJJH990%2BtkTQ%2Ff8pgwE24f3Tjm%2BVQ0vI81vBPw2BRgNE1epn3v7kGHl6MQMSbHwcJ9xpN34TTOf669oElnSoyzmMWBDRVHGrq%2BuRQf2ltnsQ6iWlIIhixCOMgnL%2BFiyyGNve9TLiGr57dusFbuY8ahVGU%2BSw1BhJLhLPrKJ4E3XWMXOlNiyZl904m9nyAUhSnawL2YG0ItHunb%2FE4%2FhDZaNWRpym5JSPikr2yaZ4wYDW8MmGYYM8c63EDQ3kMLojaUG8Bojae0O6ICbGbWui8J5C7LTJGhBYPc30gRzFAsC3AwVaq62dMws4FmBYNcD%2BajJjx8YIEXcKONkJ8iZLhCYhLmaiF0L%2Fq%2Fo7ZI9gpR4xaH0E%2B1v%2F9lD2%2BfzGppm3IqcOLVI1VYir5kAR%2BPAqS%2FGqD%2BIxySyj0slqt4ZdIXYP%2F34fIlk4F5kJBR622Xl5dr%2Fa%2Bjm6u7JCgNoSs3PmsR3b6PaCLHFJgPzpgKz%2BHllHw%2BwPf%2B1%2FewpI16meNRUZk9enQ8rQb9zhvp%2FrhyuJQA%2BuRjJStTB%2BS9ohBc0%2FaZHyTbxhJGD06GnlGIpnb61RhvoLJm6HzW8lMOL5%2FcIGOqUBYA9jPkJMFnWd6v%2BBKUBW83HZp9ocp3aOIl4NoJX7OK9UnbJ%2FDUjTdv6jyOwuD%2B%2FZLH5GzV%2FefG9LJn6hDhfDKIjqa0FcwZhGe%2Fm3Xp4chuTZhnPpHTn%2F5CvsmVelOxTAs%2BI6Z5OE0krX%2FdkehMkpT6uFxv9AuqNkSUOgXBBA8JIHoR%2Fpk%2Bnnu4RZ1Wrk6x0rC8f%2FLO%2Bz9kn7JDhRuKOovAmvZo8P&X-Amz-Signature=c2d59def4bba92d326a21608cfcc9e7027c81110c5e157356b297a965000b10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUAEON3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAj5g8b3D%2Bg2rAOKg%2FpoUvCHMEJgCRYYMrz%2BpywVC9vOAiEAsJCGH64X7Eu%2FlLUAXXLF75wiqQmL2%2FDPo3ZQvxnmgfIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAf6mtEL5myBsh%2Bf8ircA1gt%2F54wNZBI9vIYpYvzmU4jJOqnvC%2B2RkAQm5LHAqTj0u64wJJH990%2BtkTQ%2Ff8pgwE24f3Tjm%2BVQ0vI81vBPw2BRgNE1epn3v7kGHl6MQMSbHwcJ9xpN34TTOf669oElnSoyzmMWBDRVHGrq%2BuRQf2ltnsQ6iWlIIhixCOMgnL%2BFiyyGNve9TLiGr57dusFbuY8ahVGU%2BSw1BhJLhLPrKJ4E3XWMXOlNiyZl904m9nyAUhSnawL2YG0ItHunb%2FE4%2FhDZaNWRpym5JSPikr2yaZ4wYDW8MmGYYM8c63EDQ3kMLojaUG8Bojae0O6ICbGbWui8J5C7LTJGhBYPc30gRzFAsC3AwVaq62dMws4FmBYNcD%2BajJjx8YIEXcKONkJ8iZLhCYhLmaiF0L%2Fq%2Fo7ZI9gpR4xaH0E%2B1v%2F9lD2%2BfzGppm3IqcOLVI1VYir5kAR%2BPAqS%2FGqD%2BIxySyj0slqt4ZdIXYP%2F34fIlk4F5kJBR622Xl5dr%2Fa%2Bjm6u7JCgNoSs3PmsR3b6PaCLHFJgPzpgKz%2BHllHw%2BwPf%2B1%2FewpI16meNRUZk9enQ8rQb9zhvp%2FrhyuJQA%2BuRjJStTB%2BS9ohBc0%2FaZHyTbxhJGD06GnlGIpnb61RhvoLJm6HzW8lMOL5%2FcIGOqUBYA9jPkJMFnWd6v%2BBKUBW83HZp9ocp3aOIl4NoJX7OK9UnbJ%2FDUjTdv6jyOwuD%2B%2FZLH5GzV%2FefG9LJn6hDhfDKIjqa0FcwZhGe%2Fm3Xp4chuTZhnPpHTn%2F5CvsmVelOxTAs%2BI6Z5OE0krX%2FdkehMkpT6uFxv9AuqNkSUOgXBBA8JIHoR%2Fpk%2Bnnu4RZ1Wrk6x0rC8f%2FLO%2Bz9kn7JDhRuKOovAmvZo8P&X-Amz-Signature=0f471a86dbc2e793ca1eb7ffe92fd4657888ef274f0f945c9d6f66c702db2ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUAEON3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAj5g8b3D%2Bg2rAOKg%2FpoUvCHMEJgCRYYMrz%2BpywVC9vOAiEAsJCGH64X7Eu%2FlLUAXXLF75wiqQmL2%2FDPo3ZQvxnmgfIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAf6mtEL5myBsh%2Bf8ircA1gt%2F54wNZBI9vIYpYvzmU4jJOqnvC%2B2RkAQm5LHAqTj0u64wJJH990%2BtkTQ%2Ff8pgwE24f3Tjm%2BVQ0vI81vBPw2BRgNE1epn3v7kGHl6MQMSbHwcJ9xpN34TTOf669oElnSoyzmMWBDRVHGrq%2BuRQf2ltnsQ6iWlIIhixCOMgnL%2BFiyyGNve9TLiGr57dusFbuY8ahVGU%2BSw1BhJLhLPrKJ4E3XWMXOlNiyZl904m9nyAUhSnawL2YG0ItHunb%2FE4%2FhDZaNWRpym5JSPikr2yaZ4wYDW8MmGYYM8c63EDQ3kMLojaUG8Bojae0O6ICbGbWui8J5C7LTJGhBYPc30gRzFAsC3AwVaq62dMws4FmBYNcD%2BajJjx8YIEXcKONkJ8iZLhCYhLmaiF0L%2Fq%2Fo7ZI9gpR4xaH0E%2B1v%2F9lD2%2BfzGppm3IqcOLVI1VYir5kAR%2BPAqS%2FGqD%2BIxySyj0slqt4ZdIXYP%2F34fIlk4F5kJBR622Xl5dr%2Fa%2Bjm6u7JCgNoSs3PmsR3b6PaCLHFJgPzpgKz%2BHllHw%2BwPf%2B1%2FewpI16meNRUZk9enQ8rQb9zhvp%2FrhyuJQA%2BuRjJStTB%2BS9ohBc0%2FaZHyTbxhJGD06GnlGIpnb61RhvoLJm6HzW8lMOL5%2FcIGOqUBYA9jPkJMFnWd6v%2BBKUBW83HZp9ocp3aOIl4NoJX7OK9UnbJ%2FDUjTdv6jyOwuD%2B%2FZLH5GzV%2FefG9LJn6hDhfDKIjqa0FcwZhGe%2Fm3Xp4chuTZhnPpHTn%2F5CvsmVelOxTAs%2BI6Z5OE0krX%2FdkehMkpT6uFxv9AuqNkSUOgXBBA8JIHoR%2Fpk%2Bnnu4RZ1Wrk6x0rC8f%2FLO%2Bz9kn7JDhRuKOovAmvZo8P&X-Amz-Signature=9998a8b9ffa9559a30e7a2f4083517ef23c9ed125542574c14e47176f8ae2a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUAEON3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAj5g8b3D%2Bg2rAOKg%2FpoUvCHMEJgCRYYMrz%2BpywVC9vOAiEAsJCGH64X7Eu%2FlLUAXXLF75wiqQmL2%2FDPo3ZQvxnmgfIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAf6mtEL5myBsh%2Bf8ircA1gt%2F54wNZBI9vIYpYvzmU4jJOqnvC%2B2RkAQm5LHAqTj0u64wJJH990%2BtkTQ%2Ff8pgwE24f3Tjm%2BVQ0vI81vBPw2BRgNE1epn3v7kGHl6MQMSbHwcJ9xpN34TTOf669oElnSoyzmMWBDRVHGrq%2BuRQf2ltnsQ6iWlIIhixCOMgnL%2BFiyyGNve9TLiGr57dusFbuY8ahVGU%2BSw1BhJLhLPrKJ4E3XWMXOlNiyZl904m9nyAUhSnawL2YG0ItHunb%2FE4%2FhDZaNWRpym5JSPikr2yaZ4wYDW8MmGYYM8c63EDQ3kMLojaUG8Bojae0O6ICbGbWui8J5C7LTJGhBYPc30gRzFAsC3AwVaq62dMws4FmBYNcD%2BajJjx8YIEXcKONkJ8iZLhCYhLmaiF0L%2Fq%2Fo7ZI9gpR4xaH0E%2B1v%2F9lD2%2BfzGppm3IqcOLVI1VYir5kAR%2BPAqS%2FGqD%2BIxySyj0slqt4ZdIXYP%2F34fIlk4F5kJBR622Xl5dr%2Fa%2Bjm6u7JCgNoSs3PmsR3b6PaCLHFJgPzpgKz%2BHllHw%2BwPf%2B1%2FewpI16meNRUZk9enQ8rQb9zhvp%2FrhyuJQA%2BuRjJStTB%2BS9ohBc0%2FaZHyTbxhJGD06GnlGIpnb61RhvoLJm6HzW8lMOL5%2FcIGOqUBYA9jPkJMFnWd6v%2BBKUBW83HZp9ocp3aOIl4NoJX7OK9UnbJ%2FDUjTdv6jyOwuD%2B%2FZLH5GzV%2FefG9LJn6hDhfDKIjqa0FcwZhGe%2Fm3Xp4chuTZhnPpHTn%2F5CvsmVelOxTAs%2BI6Z5OE0krX%2FdkehMkpT6uFxv9AuqNkSUOgXBBA8JIHoR%2Fpk%2Bnnu4RZ1Wrk6x0rC8f%2FLO%2Bz9kn7JDhRuKOovAmvZo8P&X-Amz-Signature=7bb0881bbb0838213c0deecfa880b9d14c9480bcd351e922c30e04b9a8d7f3f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
