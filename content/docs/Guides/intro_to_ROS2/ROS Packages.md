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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR23ZJG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvqrERqNqv3j1aIaou2DJlW4lIcbMSr0vsUzpCYVagpgIhALwibjTHZAUZOgexXrhHa%2BzO8be0katW0%2FmwClPabij%2BKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxIF5jxSuSDEDvuUq3ANGgpjM5zeqCfYxewHj2Dgr4SK5v5TLi2AnxWY%2BBf8mx8vQnwk228G9MOcp1FLMsXk9CcoLiwVaCQzaOLoAGUeHpyX6%2BNq10MCka4bCMKZa5amgbGGhJCBYevi0XlMfWuISOGdpb1nlVOIg4fyxr0RhbsaIxTPotsG6hwQua6ano4RaneOatYtlMsHYBgspIjgeZrND0XY8Pw9AIRJ9DfR3eAlfl%2BaECopN1BTHY8fIYgIzBYeYpTgqiBYskgfRrJVP2d0tT%2Fz5CRO4uVrwEwO6lx1xbRr%2FJFhXVdkEw6zybwOkvSVVgNvZv8CaNHTZErcotcSX7e%2Fuem1sUeRFQ1Dounz2T9Vl%2FUS9qJYYXpgU9sjo1CBfXmk8PZeDiNx9YOZ4BjKr1r81H9F78Q3zGGBAohw40eIvASWFff66qzSXipnDXz3lz85k1i5DKs6dN83QU4%2FG20H0Qpn4LE0EZcGd%2BrTVie96Bd7HT5rvXEf7yydQ3qVadrNxYgfp%2FgsExZ3uxgeLJ9CX33VnjyGzhuTRPfivIqugc6bVuL2%2Bq0NajVfjie108PiZk3jyuQcof%2FX%2FDMGQxe%2FcrwtMuasbg5ErewbNv2xXA7QnEj3Yryvn2upro0HOnmrHSfHE%2BTDKq%2B28BjqkAeDRCqFdeZ%2Bm2s4SSYd9gkMKZqAIumK4Z%2B8O8sZ2C0mZOdGzF5Q7tk%2F7K65wnq%2F%2FxZfqXThK3jiuT0dkDnNr%2F9w67zHn6Kp%2BiPqjSImDjZwb%2F1GqTHpWitdRVoDvZbSykrNTfHSFyoNVjhypCQwLOmEgD6g4MMphuAASSv3MM9r8KBsuk0zZIC5AanNKFWMzYHl%2FFRM%2Fm4sCYNw%2BgW54Ca7kDu0L&X-Amz-Signature=19cb0089e6b0b360b24e9c02bce8a708536b3b81935e7791b545f430300781c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR23ZJG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvqrERqNqv3j1aIaou2DJlW4lIcbMSr0vsUzpCYVagpgIhALwibjTHZAUZOgexXrhHa%2BzO8be0katW0%2FmwClPabij%2BKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxIF5jxSuSDEDvuUq3ANGgpjM5zeqCfYxewHj2Dgr4SK5v5TLi2AnxWY%2BBf8mx8vQnwk228G9MOcp1FLMsXk9CcoLiwVaCQzaOLoAGUeHpyX6%2BNq10MCka4bCMKZa5amgbGGhJCBYevi0XlMfWuISOGdpb1nlVOIg4fyxr0RhbsaIxTPotsG6hwQua6ano4RaneOatYtlMsHYBgspIjgeZrND0XY8Pw9AIRJ9DfR3eAlfl%2BaECopN1BTHY8fIYgIzBYeYpTgqiBYskgfRrJVP2d0tT%2Fz5CRO4uVrwEwO6lx1xbRr%2FJFhXVdkEw6zybwOkvSVVgNvZv8CaNHTZErcotcSX7e%2Fuem1sUeRFQ1Dounz2T9Vl%2FUS9qJYYXpgU9sjo1CBfXmk8PZeDiNx9YOZ4BjKr1r81H9F78Q3zGGBAohw40eIvASWFff66qzSXipnDXz3lz85k1i5DKs6dN83QU4%2FG20H0Qpn4LE0EZcGd%2BrTVie96Bd7HT5rvXEf7yydQ3qVadrNxYgfp%2FgsExZ3uxgeLJ9CX33VnjyGzhuTRPfivIqugc6bVuL2%2Bq0NajVfjie108PiZk3jyuQcof%2FX%2FDMGQxe%2FcrwtMuasbg5ErewbNv2xXA7QnEj3Yryvn2upro0HOnmrHSfHE%2BTDKq%2B28BjqkAeDRCqFdeZ%2Bm2s4SSYd9gkMKZqAIumK4Z%2B8O8sZ2C0mZOdGzF5Q7tk%2F7K65wnq%2F%2FxZfqXThK3jiuT0dkDnNr%2F9w67zHn6Kp%2BiPqjSImDjZwb%2F1GqTHpWitdRVoDvZbSykrNTfHSFyoNVjhypCQwLOmEgD6g4MMphuAASSv3MM9r8KBsuk0zZIC5AanNKFWMzYHl%2FFRM%2Fm4sCYNw%2BgW54Ca7kDu0L&X-Amz-Signature=059b652c9a4bc3777bf93a831ad078acb68130f274d9437dee12b6e1cca7d87b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR23ZJG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvqrERqNqv3j1aIaou2DJlW4lIcbMSr0vsUzpCYVagpgIhALwibjTHZAUZOgexXrhHa%2BzO8be0katW0%2FmwClPabij%2BKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxIF5jxSuSDEDvuUq3ANGgpjM5zeqCfYxewHj2Dgr4SK5v5TLi2AnxWY%2BBf8mx8vQnwk228G9MOcp1FLMsXk9CcoLiwVaCQzaOLoAGUeHpyX6%2BNq10MCka4bCMKZa5amgbGGhJCBYevi0XlMfWuISOGdpb1nlVOIg4fyxr0RhbsaIxTPotsG6hwQua6ano4RaneOatYtlMsHYBgspIjgeZrND0XY8Pw9AIRJ9DfR3eAlfl%2BaECopN1BTHY8fIYgIzBYeYpTgqiBYskgfRrJVP2d0tT%2Fz5CRO4uVrwEwO6lx1xbRr%2FJFhXVdkEw6zybwOkvSVVgNvZv8CaNHTZErcotcSX7e%2Fuem1sUeRFQ1Dounz2T9Vl%2FUS9qJYYXpgU9sjo1CBfXmk8PZeDiNx9YOZ4BjKr1r81H9F78Q3zGGBAohw40eIvASWFff66qzSXipnDXz3lz85k1i5DKs6dN83QU4%2FG20H0Qpn4LE0EZcGd%2BrTVie96Bd7HT5rvXEf7yydQ3qVadrNxYgfp%2FgsExZ3uxgeLJ9CX33VnjyGzhuTRPfivIqugc6bVuL2%2Bq0NajVfjie108PiZk3jyuQcof%2FX%2FDMGQxe%2FcrwtMuasbg5ErewbNv2xXA7QnEj3Yryvn2upro0HOnmrHSfHE%2BTDKq%2B28BjqkAeDRCqFdeZ%2Bm2s4SSYd9gkMKZqAIumK4Z%2B8O8sZ2C0mZOdGzF5Q7tk%2F7K65wnq%2F%2FxZfqXThK3jiuT0dkDnNr%2F9w67zHn6Kp%2BiPqjSImDjZwb%2F1GqTHpWitdRVoDvZbSykrNTfHSFyoNVjhypCQwLOmEgD6g4MMphuAASSv3MM9r8KBsuk0zZIC5AanNKFWMzYHl%2FFRM%2Fm4sCYNw%2BgW54Ca7kDu0L&X-Amz-Signature=01e32919cdcb950ff87417b7ca17e4b6b5b6a5709c1fa31b044d1195d7a26fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR23ZJG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvqrERqNqv3j1aIaou2DJlW4lIcbMSr0vsUzpCYVagpgIhALwibjTHZAUZOgexXrhHa%2BzO8be0katW0%2FmwClPabij%2BKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxIF5jxSuSDEDvuUq3ANGgpjM5zeqCfYxewHj2Dgr4SK5v5TLi2AnxWY%2BBf8mx8vQnwk228G9MOcp1FLMsXk9CcoLiwVaCQzaOLoAGUeHpyX6%2BNq10MCka4bCMKZa5amgbGGhJCBYevi0XlMfWuISOGdpb1nlVOIg4fyxr0RhbsaIxTPotsG6hwQua6ano4RaneOatYtlMsHYBgspIjgeZrND0XY8Pw9AIRJ9DfR3eAlfl%2BaECopN1BTHY8fIYgIzBYeYpTgqiBYskgfRrJVP2d0tT%2Fz5CRO4uVrwEwO6lx1xbRr%2FJFhXVdkEw6zybwOkvSVVgNvZv8CaNHTZErcotcSX7e%2Fuem1sUeRFQ1Dounz2T9Vl%2FUS9qJYYXpgU9sjo1CBfXmk8PZeDiNx9YOZ4BjKr1r81H9F78Q3zGGBAohw40eIvASWFff66qzSXipnDXz3lz85k1i5DKs6dN83QU4%2FG20H0Qpn4LE0EZcGd%2BrTVie96Bd7HT5rvXEf7yydQ3qVadrNxYgfp%2FgsExZ3uxgeLJ9CX33VnjyGzhuTRPfivIqugc6bVuL2%2Bq0NajVfjie108PiZk3jyuQcof%2FX%2FDMGQxe%2FcrwtMuasbg5ErewbNv2xXA7QnEj3Yryvn2upro0HOnmrHSfHE%2BTDKq%2B28BjqkAeDRCqFdeZ%2Bm2s4SSYd9gkMKZqAIumK4Z%2B8O8sZ2C0mZOdGzF5Q7tk%2F7K65wnq%2F%2FxZfqXThK3jiuT0dkDnNr%2F9w67zHn6Kp%2BiPqjSImDjZwb%2F1GqTHpWitdRVoDvZbSykrNTfHSFyoNVjhypCQwLOmEgD6g4MMphuAASSv3MM9r8KBsuk0zZIC5AanNKFWMzYHl%2FFRM%2Fm4sCYNw%2BgW54Ca7kDu0L&X-Amz-Signature=ab1f352d4295b03a45c1c430c435e5fa33c25b33d81f218245bc98d8f46adce7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR23ZJG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvqrERqNqv3j1aIaou2DJlW4lIcbMSr0vsUzpCYVagpgIhALwibjTHZAUZOgexXrhHa%2BzO8be0katW0%2FmwClPabij%2BKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxIF5jxSuSDEDvuUq3ANGgpjM5zeqCfYxewHj2Dgr4SK5v5TLi2AnxWY%2BBf8mx8vQnwk228G9MOcp1FLMsXk9CcoLiwVaCQzaOLoAGUeHpyX6%2BNq10MCka4bCMKZa5amgbGGhJCBYevi0XlMfWuISOGdpb1nlVOIg4fyxr0RhbsaIxTPotsG6hwQua6ano4RaneOatYtlMsHYBgspIjgeZrND0XY8Pw9AIRJ9DfR3eAlfl%2BaECopN1BTHY8fIYgIzBYeYpTgqiBYskgfRrJVP2d0tT%2Fz5CRO4uVrwEwO6lx1xbRr%2FJFhXVdkEw6zybwOkvSVVgNvZv8CaNHTZErcotcSX7e%2Fuem1sUeRFQ1Dounz2T9Vl%2FUS9qJYYXpgU9sjo1CBfXmk8PZeDiNx9YOZ4BjKr1r81H9F78Q3zGGBAohw40eIvASWFff66qzSXipnDXz3lz85k1i5DKs6dN83QU4%2FG20H0Qpn4LE0EZcGd%2BrTVie96Bd7HT5rvXEf7yydQ3qVadrNxYgfp%2FgsExZ3uxgeLJ9CX33VnjyGzhuTRPfivIqugc6bVuL2%2Bq0NajVfjie108PiZk3jyuQcof%2FX%2FDMGQxe%2FcrwtMuasbg5ErewbNv2xXA7QnEj3Yryvn2upro0HOnmrHSfHE%2BTDKq%2B28BjqkAeDRCqFdeZ%2Bm2s4SSYd9gkMKZqAIumK4Z%2B8O8sZ2C0mZOdGzF5Q7tk%2F7K65wnq%2F%2FxZfqXThK3jiuT0dkDnNr%2F9w67zHn6Kp%2BiPqjSImDjZwb%2F1GqTHpWitdRVoDvZbSykrNTfHSFyoNVjhypCQwLOmEgD6g4MMphuAASSv3MM9r8KBsuk0zZIC5AanNKFWMzYHl%2FFRM%2Fm4sCYNw%2BgW54Ca7kDu0L&X-Amz-Signature=395d1ac3652c63f6c593357121b3e7790bcaff95478a02ce233ed447d799b9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR23ZJG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvqrERqNqv3j1aIaou2DJlW4lIcbMSr0vsUzpCYVagpgIhALwibjTHZAUZOgexXrhHa%2BzO8be0katW0%2FmwClPabij%2BKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxIF5jxSuSDEDvuUq3ANGgpjM5zeqCfYxewHj2Dgr4SK5v5TLi2AnxWY%2BBf8mx8vQnwk228G9MOcp1FLMsXk9CcoLiwVaCQzaOLoAGUeHpyX6%2BNq10MCka4bCMKZa5amgbGGhJCBYevi0XlMfWuISOGdpb1nlVOIg4fyxr0RhbsaIxTPotsG6hwQua6ano4RaneOatYtlMsHYBgspIjgeZrND0XY8Pw9AIRJ9DfR3eAlfl%2BaECopN1BTHY8fIYgIzBYeYpTgqiBYskgfRrJVP2d0tT%2Fz5CRO4uVrwEwO6lx1xbRr%2FJFhXVdkEw6zybwOkvSVVgNvZv8CaNHTZErcotcSX7e%2Fuem1sUeRFQ1Dounz2T9Vl%2FUS9qJYYXpgU9sjo1CBfXmk8PZeDiNx9YOZ4BjKr1r81H9F78Q3zGGBAohw40eIvASWFff66qzSXipnDXz3lz85k1i5DKs6dN83QU4%2FG20H0Qpn4LE0EZcGd%2BrTVie96Bd7HT5rvXEf7yydQ3qVadrNxYgfp%2FgsExZ3uxgeLJ9CX33VnjyGzhuTRPfivIqugc6bVuL2%2Bq0NajVfjie108PiZk3jyuQcof%2FX%2FDMGQxe%2FcrwtMuasbg5ErewbNv2xXA7QnEj3Yryvn2upro0HOnmrHSfHE%2BTDKq%2B28BjqkAeDRCqFdeZ%2Bm2s4SSYd9gkMKZqAIumK4Z%2B8O8sZ2C0mZOdGzF5Q7tk%2F7K65wnq%2F%2FxZfqXThK3jiuT0dkDnNr%2F9w67zHn6Kp%2BiPqjSImDjZwb%2F1GqTHpWitdRVoDvZbSykrNTfHSFyoNVjhypCQwLOmEgD6g4MMphuAASSv3MM9r8KBsuk0zZIC5AanNKFWMzYHl%2FFRM%2Fm4sCYNw%2BgW54Ca7kDu0L&X-Amz-Signature=5a52216810dcccceeac96c477b5abfe839f01cc3bd98749cebefde9d35b7993f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR23ZJG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvqrERqNqv3j1aIaou2DJlW4lIcbMSr0vsUzpCYVagpgIhALwibjTHZAUZOgexXrhHa%2BzO8be0katW0%2FmwClPabij%2BKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxIF5jxSuSDEDvuUq3ANGgpjM5zeqCfYxewHj2Dgr4SK5v5TLi2AnxWY%2BBf8mx8vQnwk228G9MOcp1FLMsXk9CcoLiwVaCQzaOLoAGUeHpyX6%2BNq10MCka4bCMKZa5amgbGGhJCBYevi0XlMfWuISOGdpb1nlVOIg4fyxr0RhbsaIxTPotsG6hwQua6ano4RaneOatYtlMsHYBgspIjgeZrND0XY8Pw9AIRJ9DfR3eAlfl%2BaECopN1BTHY8fIYgIzBYeYpTgqiBYskgfRrJVP2d0tT%2Fz5CRO4uVrwEwO6lx1xbRr%2FJFhXVdkEw6zybwOkvSVVgNvZv8CaNHTZErcotcSX7e%2Fuem1sUeRFQ1Dounz2T9Vl%2FUS9qJYYXpgU9sjo1CBfXmk8PZeDiNx9YOZ4BjKr1r81H9F78Q3zGGBAohw40eIvASWFff66qzSXipnDXz3lz85k1i5DKs6dN83QU4%2FG20H0Qpn4LE0EZcGd%2BrTVie96Bd7HT5rvXEf7yydQ3qVadrNxYgfp%2FgsExZ3uxgeLJ9CX33VnjyGzhuTRPfivIqugc6bVuL2%2Bq0NajVfjie108PiZk3jyuQcof%2FX%2FDMGQxe%2FcrwtMuasbg5ErewbNv2xXA7QnEj3Yryvn2upro0HOnmrHSfHE%2BTDKq%2B28BjqkAeDRCqFdeZ%2Bm2s4SSYd9gkMKZqAIumK4Z%2B8O8sZ2C0mZOdGzF5Q7tk%2F7K65wnq%2F%2FxZfqXThK3jiuT0dkDnNr%2F9w67zHn6Kp%2BiPqjSImDjZwb%2F1GqTHpWitdRVoDvZbSykrNTfHSFyoNVjhypCQwLOmEgD6g4MMphuAASSv3MM9r8KBsuk0zZIC5AanNKFWMzYHl%2FFRM%2Fm4sCYNw%2BgW54Ca7kDu0L&X-Amz-Signature=d19cb23d34c9974c8d14602e38c54aeab8a37114be2beb58ad04213e07dc6848&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
