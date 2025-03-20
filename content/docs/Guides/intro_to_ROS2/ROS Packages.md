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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WY54TX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAU7Lth6sEnycAAOm4H7IiV%2FeP%2Bqfpk%2BbRzhTfZ0yRv3AiBBDwcUtg590wSzXRHy7AbUYkV7cW3kCLYi8OG8Q17UzyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgj%2F19SvF6tZ40ZcLKtwDU2jUd386QKy2Cn0QYsLl1poWZbdr1xl7KiqZfEYaMv6vC8daW0y%2F2TCTWXlfJW6rglSutY%2FcSbtsUmjEXQBta7H%2FmRZrF7n8EcCVD1bGYM9P4wcL9vatghnPksljcMQJeNJ82nGaifSJ47YGcK%2F8x1%2FX7KDoeA%2Bl49EnzwPJXhs6zLjCrFZVfqzWnGEdOFOJGWNrWBwHmtNSkbN4v8Sf2YiSHvKhZwlyewcA4Fzm59TpQiw42%2BtnV5%2B2TuOe7lydZEA8VFzLU8QpjbB4Rd8gxr8J%2B2zSjpK3nrVqavl5kyx9VBZRXlr3jUMxNvl%2FKX05ANAYY9tmhPZAYJm0r0GpY5ALUUzXP2mSlsed53zViHbtIYqrKN60AsvoTePWohMOzUwcfdsRQ5oj%2FiJcEewwNHcBEtzsUoZKgfbtDTLyj30%2BQsy0wy2b08VQRfs4vsuiyUzZGfdKjSpbm9FOcFei7MxleqDsQ8tJB3zKroHFH2LmSgF2WuJ2BuxXPFHKcxdCgJHIAcmG6xs5BOMhbzIHn4CjXE123mHsMRlAJ8%2FOB4wU2MngbPMJt7nLEZLkFDmA0gc0vsoX19T3ITi7A9MFhz%2BrDbXvQ2Xw1OLnq99b1PsEF%2F5s0oObCoBV%2Bdowt%2BbvvgY6pgEDxTjL8tNA2HLPSopW3qqSNacJ4Z4gzJIp2khQRY3Ok5IVaHyJ2z%2BFlwIauRHfR%2BWRZ3mghRKQhRi%2BZv7TVnIYJS7J25M8agJMbVyByq2fnL6rTC9yBNJ68Q8bdvRkgwDfCxf2yD0s%2FcfsjvZQ3OBCgSysrGSrhAzRDfOH14SPDj6lEu4bCnvTk23%2BeCGrWJZJ6%2BSRlXMtmbvmqJq5uEfgRjzkxYlG&X-Amz-Signature=67998fe7d76f9fec91acaf7c77dd2a5bb2c5d1280b05dbb1b3d1f5ddfaee5035&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WY54TX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAU7Lth6sEnycAAOm4H7IiV%2FeP%2Bqfpk%2BbRzhTfZ0yRv3AiBBDwcUtg590wSzXRHy7AbUYkV7cW3kCLYi8OG8Q17UzyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgj%2F19SvF6tZ40ZcLKtwDU2jUd386QKy2Cn0QYsLl1poWZbdr1xl7KiqZfEYaMv6vC8daW0y%2F2TCTWXlfJW6rglSutY%2FcSbtsUmjEXQBta7H%2FmRZrF7n8EcCVD1bGYM9P4wcL9vatghnPksljcMQJeNJ82nGaifSJ47YGcK%2F8x1%2FX7KDoeA%2Bl49EnzwPJXhs6zLjCrFZVfqzWnGEdOFOJGWNrWBwHmtNSkbN4v8Sf2YiSHvKhZwlyewcA4Fzm59TpQiw42%2BtnV5%2B2TuOe7lydZEA8VFzLU8QpjbB4Rd8gxr8J%2B2zSjpK3nrVqavl5kyx9VBZRXlr3jUMxNvl%2FKX05ANAYY9tmhPZAYJm0r0GpY5ALUUzXP2mSlsed53zViHbtIYqrKN60AsvoTePWohMOzUwcfdsRQ5oj%2FiJcEewwNHcBEtzsUoZKgfbtDTLyj30%2BQsy0wy2b08VQRfs4vsuiyUzZGfdKjSpbm9FOcFei7MxleqDsQ8tJB3zKroHFH2LmSgF2WuJ2BuxXPFHKcxdCgJHIAcmG6xs5BOMhbzIHn4CjXE123mHsMRlAJ8%2FOB4wU2MngbPMJt7nLEZLkFDmA0gc0vsoX19T3ITi7A9MFhz%2BrDbXvQ2Xw1OLnq99b1PsEF%2F5s0oObCoBV%2Bdowt%2BbvvgY6pgEDxTjL8tNA2HLPSopW3qqSNacJ4Z4gzJIp2khQRY3Ok5IVaHyJ2z%2BFlwIauRHfR%2BWRZ3mghRKQhRi%2BZv7TVnIYJS7J25M8agJMbVyByq2fnL6rTC9yBNJ68Q8bdvRkgwDfCxf2yD0s%2FcfsjvZQ3OBCgSysrGSrhAzRDfOH14SPDj6lEu4bCnvTk23%2BeCGrWJZJ6%2BSRlXMtmbvmqJq5uEfgRjzkxYlG&X-Amz-Signature=a39d119c16d867cb70e6c8876fbfbf835998010d00b11581e74c526301f50941&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WY54TX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAU7Lth6sEnycAAOm4H7IiV%2FeP%2Bqfpk%2BbRzhTfZ0yRv3AiBBDwcUtg590wSzXRHy7AbUYkV7cW3kCLYi8OG8Q17UzyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgj%2F19SvF6tZ40ZcLKtwDU2jUd386QKy2Cn0QYsLl1poWZbdr1xl7KiqZfEYaMv6vC8daW0y%2F2TCTWXlfJW6rglSutY%2FcSbtsUmjEXQBta7H%2FmRZrF7n8EcCVD1bGYM9P4wcL9vatghnPksljcMQJeNJ82nGaifSJ47YGcK%2F8x1%2FX7KDoeA%2Bl49EnzwPJXhs6zLjCrFZVfqzWnGEdOFOJGWNrWBwHmtNSkbN4v8Sf2YiSHvKhZwlyewcA4Fzm59TpQiw42%2BtnV5%2B2TuOe7lydZEA8VFzLU8QpjbB4Rd8gxr8J%2B2zSjpK3nrVqavl5kyx9VBZRXlr3jUMxNvl%2FKX05ANAYY9tmhPZAYJm0r0GpY5ALUUzXP2mSlsed53zViHbtIYqrKN60AsvoTePWohMOzUwcfdsRQ5oj%2FiJcEewwNHcBEtzsUoZKgfbtDTLyj30%2BQsy0wy2b08VQRfs4vsuiyUzZGfdKjSpbm9FOcFei7MxleqDsQ8tJB3zKroHFH2LmSgF2WuJ2BuxXPFHKcxdCgJHIAcmG6xs5BOMhbzIHn4CjXE123mHsMRlAJ8%2FOB4wU2MngbPMJt7nLEZLkFDmA0gc0vsoX19T3ITi7A9MFhz%2BrDbXvQ2Xw1OLnq99b1PsEF%2F5s0oObCoBV%2Bdowt%2BbvvgY6pgEDxTjL8tNA2HLPSopW3qqSNacJ4Z4gzJIp2khQRY3Ok5IVaHyJ2z%2BFlwIauRHfR%2BWRZ3mghRKQhRi%2BZv7TVnIYJS7J25M8agJMbVyByq2fnL6rTC9yBNJ68Q8bdvRkgwDfCxf2yD0s%2FcfsjvZQ3OBCgSysrGSrhAzRDfOH14SPDj6lEu4bCnvTk23%2BeCGrWJZJ6%2BSRlXMtmbvmqJq5uEfgRjzkxYlG&X-Amz-Signature=fcbe7906cbf19ccf714428bf711d2c24cc84b17900e8ae0897dd122ac14bc17a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WY54TX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAU7Lth6sEnycAAOm4H7IiV%2FeP%2Bqfpk%2BbRzhTfZ0yRv3AiBBDwcUtg590wSzXRHy7AbUYkV7cW3kCLYi8OG8Q17UzyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgj%2F19SvF6tZ40ZcLKtwDU2jUd386QKy2Cn0QYsLl1poWZbdr1xl7KiqZfEYaMv6vC8daW0y%2F2TCTWXlfJW6rglSutY%2FcSbtsUmjEXQBta7H%2FmRZrF7n8EcCVD1bGYM9P4wcL9vatghnPksljcMQJeNJ82nGaifSJ47YGcK%2F8x1%2FX7KDoeA%2Bl49EnzwPJXhs6zLjCrFZVfqzWnGEdOFOJGWNrWBwHmtNSkbN4v8Sf2YiSHvKhZwlyewcA4Fzm59TpQiw42%2BtnV5%2B2TuOe7lydZEA8VFzLU8QpjbB4Rd8gxr8J%2B2zSjpK3nrVqavl5kyx9VBZRXlr3jUMxNvl%2FKX05ANAYY9tmhPZAYJm0r0GpY5ALUUzXP2mSlsed53zViHbtIYqrKN60AsvoTePWohMOzUwcfdsRQ5oj%2FiJcEewwNHcBEtzsUoZKgfbtDTLyj30%2BQsy0wy2b08VQRfs4vsuiyUzZGfdKjSpbm9FOcFei7MxleqDsQ8tJB3zKroHFH2LmSgF2WuJ2BuxXPFHKcxdCgJHIAcmG6xs5BOMhbzIHn4CjXE123mHsMRlAJ8%2FOB4wU2MngbPMJt7nLEZLkFDmA0gc0vsoX19T3ITi7A9MFhz%2BrDbXvQ2Xw1OLnq99b1PsEF%2F5s0oObCoBV%2Bdowt%2BbvvgY6pgEDxTjL8tNA2HLPSopW3qqSNacJ4Z4gzJIp2khQRY3Ok5IVaHyJ2z%2BFlwIauRHfR%2BWRZ3mghRKQhRi%2BZv7TVnIYJS7J25M8agJMbVyByq2fnL6rTC9yBNJ68Q8bdvRkgwDfCxf2yD0s%2FcfsjvZQ3OBCgSysrGSrhAzRDfOH14SPDj6lEu4bCnvTk23%2BeCGrWJZJ6%2BSRlXMtmbvmqJq5uEfgRjzkxYlG&X-Amz-Signature=35c7b724b1acf005c56799764304417936cc245d70f467e79410f5e83882a8b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WY54TX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAU7Lth6sEnycAAOm4H7IiV%2FeP%2Bqfpk%2BbRzhTfZ0yRv3AiBBDwcUtg590wSzXRHy7AbUYkV7cW3kCLYi8OG8Q17UzyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgj%2F19SvF6tZ40ZcLKtwDU2jUd386QKy2Cn0QYsLl1poWZbdr1xl7KiqZfEYaMv6vC8daW0y%2F2TCTWXlfJW6rglSutY%2FcSbtsUmjEXQBta7H%2FmRZrF7n8EcCVD1bGYM9P4wcL9vatghnPksljcMQJeNJ82nGaifSJ47YGcK%2F8x1%2FX7KDoeA%2Bl49EnzwPJXhs6zLjCrFZVfqzWnGEdOFOJGWNrWBwHmtNSkbN4v8Sf2YiSHvKhZwlyewcA4Fzm59TpQiw42%2BtnV5%2B2TuOe7lydZEA8VFzLU8QpjbB4Rd8gxr8J%2B2zSjpK3nrVqavl5kyx9VBZRXlr3jUMxNvl%2FKX05ANAYY9tmhPZAYJm0r0GpY5ALUUzXP2mSlsed53zViHbtIYqrKN60AsvoTePWohMOzUwcfdsRQ5oj%2FiJcEewwNHcBEtzsUoZKgfbtDTLyj30%2BQsy0wy2b08VQRfs4vsuiyUzZGfdKjSpbm9FOcFei7MxleqDsQ8tJB3zKroHFH2LmSgF2WuJ2BuxXPFHKcxdCgJHIAcmG6xs5BOMhbzIHn4CjXE123mHsMRlAJ8%2FOB4wU2MngbPMJt7nLEZLkFDmA0gc0vsoX19T3ITi7A9MFhz%2BrDbXvQ2Xw1OLnq99b1PsEF%2F5s0oObCoBV%2Bdowt%2BbvvgY6pgEDxTjL8tNA2HLPSopW3qqSNacJ4Z4gzJIp2khQRY3Ok5IVaHyJ2z%2BFlwIauRHfR%2BWRZ3mghRKQhRi%2BZv7TVnIYJS7J25M8agJMbVyByq2fnL6rTC9yBNJ68Q8bdvRkgwDfCxf2yD0s%2FcfsjvZQ3OBCgSysrGSrhAzRDfOH14SPDj6lEu4bCnvTk23%2BeCGrWJZJ6%2BSRlXMtmbvmqJq5uEfgRjzkxYlG&X-Amz-Signature=cca7b245dedefbf62188172d557d4b3feb8cb3b7886dced8a1fbc5891a9c2e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WY54TX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAU7Lth6sEnycAAOm4H7IiV%2FeP%2Bqfpk%2BbRzhTfZ0yRv3AiBBDwcUtg590wSzXRHy7AbUYkV7cW3kCLYi8OG8Q17UzyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgj%2F19SvF6tZ40ZcLKtwDU2jUd386QKy2Cn0QYsLl1poWZbdr1xl7KiqZfEYaMv6vC8daW0y%2F2TCTWXlfJW6rglSutY%2FcSbtsUmjEXQBta7H%2FmRZrF7n8EcCVD1bGYM9P4wcL9vatghnPksljcMQJeNJ82nGaifSJ47YGcK%2F8x1%2FX7KDoeA%2Bl49EnzwPJXhs6zLjCrFZVfqzWnGEdOFOJGWNrWBwHmtNSkbN4v8Sf2YiSHvKhZwlyewcA4Fzm59TpQiw42%2BtnV5%2B2TuOe7lydZEA8VFzLU8QpjbB4Rd8gxr8J%2B2zSjpK3nrVqavl5kyx9VBZRXlr3jUMxNvl%2FKX05ANAYY9tmhPZAYJm0r0GpY5ALUUzXP2mSlsed53zViHbtIYqrKN60AsvoTePWohMOzUwcfdsRQ5oj%2FiJcEewwNHcBEtzsUoZKgfbtDTLyj30%2BQsy0wy2b08VQRfs4vsuiyUzZGfdKjSpbm9FOcFei7MxleqDsQ8tJB3zKroHFH2LmSgF2WuJ2BuxXPFHKcxdCgJHIAcmG6xs5BOMhbzIHn4CjXE123mHsMRlAJ8%2FOB4wU2MngbPMJt7nLEZLkFDmA0gc0vsoX19T3ITi7A9MFhz%2BrDbXvQ2Xw1OLnq99b1PsEF%2F5s0oObCoBV%2Bdowt%2BbvvgY6pgEDxTjL8tNA2HLPSopW3qqSNacJ4Z4gzJIp2khQRY3Ok5IVaHyJ2z%2BFlwIauRHfR%2BWRZ3mghRKQhRi%2BZv7TVnIYJS7J25M8agJMbVyByq2fnL6rTC9yBNJ68Q8bdvRkgwDfCxf2yD0s%2FcfsjvZQ3OBCgSysrGSrhAzRDfOH14SPDj6lEu4bCnvTk23%2BeCGrWJZJ6%2BSRlXMtmbvmqJq5uEfgRjzkxYlG&X-Amz-Signature=b3152e88b149d873124562370b07e85462ff628bcdf4a40f013e0408babfba36&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WY54TX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAU7Lth6sEnycAAOm4H7IiV%2FeP%2Bqfpk%2BbRzhTfZ0yRv3AiBBDwcUtg590wSzXRHy7AbUYkV7cW3kCLYi8OG8Q17UzyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgj%2F19SvF6tZ40ZcLKtwDU2jUd386QKy2Cn0QYsLl1poWZbdr1xl7KiqZfEYaMv6vC8daW0y%2F2TCTWXlfJW6rglSutY%2FcSbtsUmjEXQBta7H%2FmRZrF7n8EcCVD1bGYM9P4wcL9vatghnPksljcMQJeNJ82nGaifSJ47YGcK%2F8x1%2FX7KDoeA%2Bl49EnzwPJXhs6zLjCrFZVfqzWnGEdOFOJGWNrWBwHmtNSkbN4v8Sf2YiSHvKhZwlyewcA4Fzm59TpQiw42%2BtnV5%2B2TuOe7lydZEA8VFzLU8QpjbB4Rd8gxr8J%2B2zSjpK3nrVqavl5kyx9VBZRXlr3jUMxNvl%2FKX05ANAYY9tmhPZAYJm0r0GpY5ALUUzXP2mSlsed53zViHbtIYqrKN60AsvoTePWohMOzUwcfdsRQ5oj%2FiJcEewwNHcBEtzsUoZKgfbtDTLyj30%2BQsy0wy2b08VQRfs4vsuiyUzZGfdKjSpbm9FOcFei7MxleqDsQ8tJB3zKroHFH2LmSgF2WuJ2BuxXPFHKcxdCgJHIAcmG6xs5BOMhbzIHn4CjXE123mHsMRlAJ8%2FOB4wU2MngbPMJt7nLEZLkFDmA0gc0vsoX19T3ITi7A9MFhz%2BrDbXvQ2Xw1OLnq99b1PsEF%2F5s0oObCoBV%2Bdowt%2BbvvgY6pgEDxTjL8tNA2HLPSopW3qqSNacJ4Z4gzJIp2khQRY3Ok5IVaHyJ2z%2BFlwIauRHfR%2BWRZ3mghRKQhRi%2BZv7TVnIYJS7J25M8agJMbVyByq2fnL6rTC9yBNJ68Q8bdvRkgwDfCxf2yD0s%2FcfsjvZQ3OBCgSysrGSrhAzRDfOH14SPDj6lEu4bCnvTk23%2BeCGrWJZJ6%2BSRlXMtmbvmqJq5uEfgRjzkxYlG&X-Amz-Signature=0ba514cadc54a0f0cf34107169fab7c30835755168d953ea3b578065187fb1cc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
