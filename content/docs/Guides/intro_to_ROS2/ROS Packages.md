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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SGPZVJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG77wszz7LQLe741r12GnH8IpBwee5HXKgIq9My5Q3GUAiA8NIk3GRAcBsqdYZfgtcBW7USvX69xuyr4r8zG%2FeBZ9iqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQgx6zPZxpnfPb2uvKtwDtztYEtqNNnr9UEj1jQXYaseRSu196KfA73sVcK%2BRI6KS4RH9248YY0XvmqtbzaY0%2BAzL7UtQsmssLtnfuyy1gvjvaYJkxQ6fiRXcgC3TxTnOUhfTkTr5qySvjyemrlxsRaec6uVcQfQtEZ%2F43GJ%2FiCs6hTIJaOHaqLlNRR19ySuS1BtKxZXZffZOLAUDRzrFFVOlaxVhjBoPKI2ce6OWeQp80qSO1jFQflKqK3tPPtJWE9BIMbkxeY1Q4m5pDfx0U95KOOSfNPTrSydmg%2BP%2FfVkj5wmRpMvmefLaV41HKym7Cu15FtRNHS%2BiUSyH78rXe%2Blzi2GVZ93%2FEeRkdxZ73VYWgr%2FmR7ROGqbbs91JvIkCnEWa%2BibXWclghjPA4JBRTDoODVvkd2kyCQvc%2BGpznfj6EzPTRSPpv4V5zOc55D36M9XNEHdPBVMi5kkjv%2BjG4YgQFrXphYKWK7q4%2B9%2FIO9pVPYC0eyQt5nLmmsoy1hkF%2FvTYNNkPgls%2FgO5F9P%2FQAR46HJkFADd1FI9bLQGSoe85XqKQ5tMEflN80q370%2Fb0R6LpE6TOE2mwxxNG54rlBdrbZK%2FARh9p%2B3TEvGkWl%2Bb%2FTM5gNikIsUUZK5eOHpGBT0F5Sgvrk5OHqwkwsMflvQY6pgHB0f%2Bx4KQBvPK3H1zjoI9EI8NRiyVgOq3CJ5jG%2F6Yhbow%2FyT38Yoe%2BOsvZMxtrWImsixNufcfe3n4WANexZ2il35u1fmDUMhywY7JnWKMcDEKCapqkTc7M%2BnjLj2PFLCoPXEP8rQEv1oqTBHRA1P%2B65k5rswqhgGg7ayw1Od5T7ybAgsi%2Bho08rvsvg63hkkcrIDo%2F2HEhvmcvSuY%2FP5qCa2tKvXo1&X-Amz-Signature=ef67810aee7836c75a6205596253b008bea03ef1d78389c040e5a899d59ca459&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SGPZVJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG77wszz7LQLe741r12GnH8IpBwee5HXKgIq9My5Q3GUAiA8NIk3GRAcBsqdYZfgtcBW7USvX69xuyr4r8zG%2FeBZ9iqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQgx6zPZxpnfPb2uvKtwDtztYEtqNNnr9UEj1jQXYaseRSu196KfA73sVcK%2BRI6KS4RH9248YY0XvmqtbzaY0%2BAzL7UtQsmssLtnfuyy1gvjvaYJkxQ6fiRXcgC3TxTnOUhfTkTr5qySvjyemrlxsRaec6uVcQfQtEZ%2F43GJ%2FiCs6hTIJaOHaqLlNRR19ySuS1BtKxZXZffZOLAUDRzrFFVOlaxVhjBoPKI2ce6OWeQp80qSO1jFQflKqK3tPPtJWE9BIMbkxeY1Q4m5pDfx0U95KOOSfNPTrSydmg%2BP%2FfVkj5wmRpMvmefLaV41HKym7Cu15FtRNHS%2BiUSyH78rXe%2Blzi2GVZ93%2FEeRkdxZ73VYWgr%2FmR7ROGqbbs91JvIkCnEWa%2BibXWclghjPA4JBRTDoODVvkd2kyCQvc%2BGpznfj6EzPTRSPpv4V5zOc55D36M9XNEHdPBVMi5kkjv%2BjG4YgQFrXphYKWK7q4%2B9%2FIO9pVPYC0eyQt5nLmmsoy1hkF%2FvTYNNkPgls%2FgO5F9P%2FQAR46HJkFADd1FI9bLQGSoe85XqKQ5tMEflN80q370%2Fb0R6LpE6TOE2mwxxNG54rlBdrbZK%2FARh9p%2B3TEvGkWl%2Bb%2FTM5gNikIsUUZK5eOHpGBT0F5Sgvrk5OHqwkwsMflvQY6pgHB0f%2Bx4KQBvPK3H1zjoI9EI8NRiyVgOq3CJ5jG%2F6Yhbow%2FyT38Yoe%2BOsvZMxtrWImsixNufcfe3n4WANexZ2il35u1fmDUMhywY7JnWKMcDEKCapqkTc7M%2BnjLj2PFLCoPXEP8rQEv1oqTBHRA1P%2B65k5rswqhgGg7ayw1Od5T7ybAgsi%2Bho08rvsvg63hkkcrIDo%2F2HEhvmcvSuY%2FP5qCa2tKvXo1&X-Amz-Signature=db16bc9d76492816a06bdf39bb0853984c9837dfb7fcf4b4388efcfa0ab23f37&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SGPZVJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG77wszz7LQLe741r12GnH8IpBwee5HXKgIq9My5Q3GUAiA8NIk3GRAcBsqdYZfgtcBW7USvX69xuyr4r8zG%2FeBZ9iqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQgx6zPZxpnfPb2uvKtwDtztYEtqNNnr9UEj1jQXYaseRSu196KfA73sVcK%2BRI6KS4RH9248YY0XvmqtbzaY0%2BAzL7UtQsmssLtnfuyy1gvjvaYJkxQ6fiRXcgC3TxTnOUhfTkTr5qySvjyemrlxsRaec6uVcQfQtEZ%2F43GJ%2FiCs6hTIJaOHaqLlNRR19ySuS1BtKxZXZffZOLAUDRzrFFVOlaxVhjBoPKI2ce6OWeQp80qSO1jFQflKqK3tPPtJWE9BIMbkxeY1Q4m5pDfx0U95KOOSfNPTrSydmg%2BP%2FfVkj5wmRpMvmefLaV41HKym7Cu15FtRNHS%2BiUSyH78rXe%2Blzi2GVZ93%2FEeRkdxZ73VYWgr%2FmR7ROGqbbs91JvIkCnEWa%2BibXWclghjPA4JBRTDoODVvkd2kyCQvc%2BGpznfj6EzPTRSPpv4V5zOc55D36M9XNEHdPBVMi5kkjv%2BjG4YgQFrXphYKWK7q4%2B9%2FIO9pVPYC0eyQt5nLmmsoy1hkF%2FvTYNNkPgls%2FgO5F9P%2FQAR46HJkFADd1FI9bLQGSoe85XqKQ5tMEflN80q370%2Fb0R6LpE6TOE2mwxxNG54rlBdrbZK%2FARh9p%2B3TEvGkWl%2Bb%2FTM5gNikIsUUZK5eOHpGBT0F5Sgvrk5OHqwkwsMflvQY6pgHB0f%2Bx4KQBvPK3H1zjoI9EI8NRiyVgOq3CJ5jG%2F6Yhbow%2FyT38Yoe%2BOsvZMxtrWImsixNufcfe3n4WANexZ2il35u1fmDUMhywY7JnWKMcDEKCapqkTc7M%2BnjLj2PFLCoPXEP8rQEv1oqTBHRA1P%2B65k5rswqhgGg7ayw1Od5T7ybAgsi%2Bho08rvsvg63hkkcrIDo%2F2HEhvmcvSuY%2FP5qCa2tKvXo1&X-Amz-Signature=2c77f991c04723c1b893d137d1f48c77c54ab86220029150a76ba7d14780868f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SGPZVJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG77wszz7LQLe741r12GnH8IpBwee5HXKgIq9My5Q3GUAiA8NIk3GRAcBsqdYZfgtcBW7USvX69xuyr4r8zG%2FeBZ9iqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQgx6zPZxpnfPb2uvKtwDtztYEtqNNnr9UEj1jQXYaseRSu196KfA73sVcK%2BRI6KS4RH9248YY0XvmqtbzaY0%2BAzL7UtQsmssLtnfuyy1gvjvaYJkxQ6fiRXcgC3TxTnOUhfTkTr5qySvjyemrlxsRaec6uVcQfQtEZ%2F43GJ%2FiCs6hTIJaOHaqLlNRR19ySuS1BtKxZXZffZOLAUDRzrFFVOlaxVhjBoPKI2ce6OWeQp80qSO1jFQflKqK3tPPtJWE9BIMbkxeY1Q4m5pDfx0U95KOOSfNPTrSydmg%2BP%2FfVkj5wmRpMvmefLaV41HKym7Cu15FtRNHS%2BiUSyH78rXe%2Blzi2GVZ93%2FEeRkdxZ73VYWgr%2FmR7ROGqbbs91JvIkCnEWa%2BibXWclghjPA4JBRTDoODVvkd2kyCQvc%2BGpznfj6EzPTRSPpv4V5zOc55D36M9XNEHdPBVMi5kkjv%2BjG4YgQFrXphYKWK7q4%2B9%2FIO9pVPYC0eyQt5nLmmsoy1hkF%2FvTYNNkPgls%2FgO5F9P%2FQAR46HJkFADd1FI9bLQGSoe85XqKQ5tMEflN80q370%2Fb0R6LpE6TOE2mwxxNG54rlBdrbZK%2FARh9p%2B3TEvGkWl%2Bb%2FTM5gNikIsUUZK5eOHpGBT0F5Sgvrk5OHqwkwsMflvQY6pgHB0f%2Bx4KQBvPK3H1zjoI9EI8NRiyVgOq3CJ5jG%2F6Yhbow%2FyT38Yoe%2BOsvZMxtrWImsixNufcfe3n4WANexZ2il35u1fmDUMhywY7JnWKMcDEKCapqkTc7M%2BnjLj2PFLCoPXEP8rQEv1oqTBHRA1P%2B65k5rswqhgGg7ayw1Od5T7ybAgsi%2Bho08rvsvg63hkkcrIDo%2F2HEhvmcvSuY%2FP5qCa2tKvXo1&X-Amz-Signature=5e827c47523ead9a051a5894d36aeb037e19c910b1e01ee00e820e68f08d9761&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SGPZVJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG77wszz7LQLe741r12GnH8IpBwee5HXKgIq9My5Q3GUAiA8NIk3GRAcBsqdYZfgtcBW7USvX69xuyr4r8zG%2FeBZ9iqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQgx6zPZxpnfPb2uvKtwDtztYEtqNNnr9UEj1jQXYaseRSu196KfA73sVcK%2BRI6KS4RH9248YY0XvmqtbzaY0%2BAzL7UtQsmssLtnfuyy1gvjvaYJkxQ6fiRXcgC3TxTnOUhfTkTr5qySvjyemrlxsRaec6uVcQfQtEZ%2F43GJ%2FiCs6hTIJaOHaqLlNRR19ySuS1BtKxZXZffZOLAUDRzrFFVOlaxVhjBoPKI2ce6OWeQp80qSO1jFQflKqK3tPPtJWE9BIMbkxeY1Q4m5pDfx0U95KOOSfNPTrSydmg%2BP%2FfVkj5wmRpMvmefLaV41HKym7Cu15FtRNHS%2BiUSyH78rXe%2Blzi2GVZ93%2FEeRkdxZ73VYWgr%2FmR7ROGqbbs91JvIkCnEWa%2BibXWclghjPA4JBRTDoODVvkd2kyCQvc%2BGpznfj6EzPTRSPpv4V5zOc55D36M9XNEHdPBVMi5kkjv%2BjG4YgQFrXphYKWK7q4%2B9%2FIO9pVPYC0eyQt5nLmmsoy1hkF%2FvTYNNkPgls%2FgO5F9P%2FQAR46HJkFADd1FI9bLQGSoe85XqKQ5tMEflN80q370%2Fb0R6LpE6TOE2mwxxNG54rlBdrbZK%2FARh9p%2B3TEvGkWl%2Bb%2FTM5gNikIsUUZK5eOHpGBT0F5Sgvrk5OHqwkwsMflvQY6pgHB0f%2Bx4KQBvPK3H1zjoI9EI8NRiyVgOq3CJ5jG%2F6Yhbow%2FyT38Yoe%2BOsvZMxtrWImsixNufcfe3n4WANexZ2il35u1fmDUMhywY7JnWKMcDEKCapqkTc7M%2BnjLj2PFLCoPXEP8rQEv1oqTBHRA1P%2B65k5rswqhgGg7ayw1Od5T7ybAgsi%2Bho08rvsvg63hkkcrIDo%2F2HEhvmcvSuY%2FP5qCa2tKvXo1&X-Amz-Signature=257e3ec0f6001f54d7e3c0e5a0cdb6bb0de4c32c2c028cab466c27e11fdb16eb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SGPZVJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG77wszz7LQLe741r12GnH8IpBwee5HXKgIq9My5Q3GUAiA8NIk3GRAcBsqdYZfgtcBW7USvX69xuyr4r8zG%2FeBZ9iqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQgx6zPZxpnfPb2uvKtwDtztYEtqNNnr9UEj1jQXYaseRSu196KfA73sVcK%2BRI6KS4RH9248YY0XvmqtbzaY0%2BAzL7UtQsmssLtnfuyy1gvjvaYJkxQ6fiRXcgC3TxTnOUhfTkTr5qySvjyemrlxsRaec6uVcQfQtEZ%2F43GJ%2FiCs6hTIJaOHaqLlNRR19ySuS1BtKxZXZffZOLAUDRzrFFVOlaxVhjBoPKI2ce6OWeQp80qSO1jFQflKqK3tPPtJWE9BIMbkxeY1Q4m5pDfx0U95KOOSfNPTrSydmg%2BP%2FfVkj5wmRpMvmefLaV41HKym7Cu15FtRNHS%2BiUSyH78rXe%2Blzi2GVZ93%2FEeRkdxZ73VYWgr%2FmR7ROGqbbs91JvIkCnEWa%2BibXWclghjPA4JBRTDoODVvkd2kyCQvc%2BGpznfj6EzPTRSPpv4V5zOc55D36M9XNEHdPBVMi5kkjv%2BjG4YgQFrXphYKWK7q4%2B9%2FIO9pVPYC0eyQt5nLmmsoy1hkF%2FvTYNNkPgls%2FgO5F9P%2FQAR46HJkFADd1FI9bLQGSoe85XqKQ5tMEflN80q370%2Fb0R6LpE6TOE2mwxxNG54rlBdrbZK%2FARh9p%2B3TEvGkWl%2Bb%2FTM5gNikIsUUZK5eOHpGBT0F5Sgvrk5OHqwkwsMflvQY6pgHB0f%2Bx4KQBvPK3H1zjoI9EI8NRiyVgOq3CJ5jG%2F6Yhbow%2FyT38Yoe%2BOsvZMxtrWImsixNufcfe3n4WANexZ2il35u1fmDUMhywY7JnWKMcDEKCapqkTc7M%2BnjLj2PFLCoPXEP8rQEv1oqTBHRA1P%2B65k5rswqhgGg7ayw1Od5T7ybAgsi%2Bho08rvsvg63hkkcrIDo%2F2HEhvmcvSuY%2FP5qCa2tKvXo1&X-Amz-Signature=6b6bb7ede6d6c3386bcf17f9565bf62d5c7cf791cdadbd74b10293c53d9a9fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SGPZVJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG77wszz7LQLe741r12GnH8IpBwee5HXKgIq9My5Q3GUAiA8NIk3GRAcBsqdYZfgtcBW7USvX69xuyr4r8zG%2FeBZ9iqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQgx6zPZxpnfPb2uvKtwDtztYEtqNNnr9UEj1jQXYaseRSu196KfA73sVcK%2BRI6KS4RH9248YY0XvmqtbzaY0%2BAzL7UtQsmssLtnfuyy1gvjvaYJkxQ6fiRXcgC3TxTnOUhfTkTr5qySvjyemrlxsRaec6uVcQfQtEZ%2F43GJ%2FiCs6hTIJaOHaqLlNRR19ySuS1BtKxZXZffZOLAUDRzrFFVOlaxVhjBoPKI2ce6OWeQp80qSO1jFQflKqK3tPPtJWE9BIMbkxeY1Q4m5pDfx0U95KOOSfNPTrSydmg%2BP%2FfVkj5wmRpMvmefLaV41HKym7Cu15FtRNHS%2BiUSyH78rXe%2Blzi2GVZ93%2FEeRkdxZ73VYWgr%2FmR7ROGqbbs91JvIkCnEWa%2BibXWclghjPA4JBRTDoODVvkd2kyCQvc%2BGpznfj6EzPTRSPpv4V5zOc55D36M9XNEHdPBVMi5kkjv%2BjG4YgQFrXphYKWK7q4%2B9%2FIO9pVPYC0eyQt5nLmmsoy1hkF%2FvTYNNkPgls%2FgO5F9P%2FQAR46HJkFADd1FI9bLQGSoe85XqKQ5tMEflN80q370%2Fb0R6LpE6TOE2mwxxNG54rlBdrbZK%2FARh9p%2B3TEvGkWl%2Bb%2FTM5gNikIsUUZK5eOHpGBT0F5Sgvrk5OHqwkwsMflvQY6pgHB0f%2Bx4KQBvPK3H1zjoI9EI8NRiyVgOq3CJ5jG%2F6Yhbow%2FyT38Yoe%2BOsvZMxtrWImsixNufcfe3n4WANexZ2il35u1fmDUMhywY7JnWKMcDEKCapqkTc7M%2BnjLj2PFLCoPXEP8rQEv1oqTBHRA1P%2B65k5rswqhgGg7ayw1Od5T7ybAgsi%2Bho08rvsvg63hkkcrIDo%2F2HEhvmcvSuY%2FP5qCa2tKvXo1&X-Amz-Signature=ceed87d73d07c0151a0296088b941112143bd074c4f2d57b5d6c6a9c9c9205d9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
