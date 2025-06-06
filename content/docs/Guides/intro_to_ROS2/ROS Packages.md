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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UOBIVY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvUkP96LZ2t49yE4WmRzvCXjWEVa85ikbDhpp%2Bj4oJiAiA8Nz5TbVc87Y6sIz%2BzGOz99kAuzmAFsFEd%2BtYBAFjdQyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMs1iHfl1yRvNpmMiIKtwDx7slEfm%2F4%2FA%2F6kJf1jSr9iuazuEjQCuNTHRaFGU1oamOj7tKsYJ1ZBrYGcI325odyPeM4CiZ8WuU9oeyQFqTMkeQoEntHatJZZ%2Bh8fcC1hkOzy2H9XHu5MotdyyLILty1ZQYnXjpctk39Wkx1Hd6G%2BaLf4WqMs4C9oGgA6IGrZz%2B52XKKHAbPr8qi6FxesVYeVhFIe4XHVbK3Bif56c4JMF4skneJn7E9b8GhVAoGgSJ8Wc1lV3vgeRNpIdZB5engaxAv1QBCusIRarAJK84qoltheBwm1ZtamedchWxJpHlpxPCD9jDp6kYUenEQn%2FtaCxxbM6ZnKGf%2FAjFgqeyfNefP0XxyfrBuKrUtWYN%2Bx24m03Xd6OTADeaBVIRsdh57h%2FxshPBppDHt0xjBzEQuz2Q8Z1zqjbXDjBcLeHImeP%2FnccA8lQsXNHvSdw7vwW1X6%2FBGK2U8Y8U3SnliXoBpQ2rVmR36wGcO36ht7iQ9ZubaWbsrrWfCyjccbh7G9slexLCYTyE%2BWK7Ozczms3GdalbfF1RfAZ2Xd2rF2Df6bXtoqedGSUc9M3iC3C6c%2B0WPWsx%2Fk6vk89GCImNjzjeV6lWUBrpBC5jkV9VANSlK00QMbLz66gwZu0kyZkwuIaLwgY6pgE7apYXYfbUM5urj9AyW1kUuN%2BpoJ6JpdaaFo8LvKWapflRDIsKlrlceiKIbiPQkOa0ZyNLHms0YGxokZo0%2BLNn6QkqZdrbmWflaSwn9t4QAWWlVG%2FCgVctn1%2Bf7sFEmvnQQ%2Fi7wbwAfnXRKOAX7aWmPNZnHQIdOeJdXYl75OoxyrXwjTyH4bjK0uOE5%2Bx28LdHl6AAe%2BRN2M2AGHtdQ%2FYZW2tQdUhv&X-Amz-Signature=8a89ca22e24c9340fe315a2317ed4928a407b6a40953d47b78ef4dfea938d1ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UOBIVY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvUkP96LZ2t49yE4WmRzvCXjWEVa85ikbDhpp%2Bj4oJiAiA8Nz5TbVc87Y6sIz%2BzGOz99kAuzmAFsFEd%2BtYBAFjdQyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMs1iHfl1yRvNpmMiIKtwDx7slEfm%2F4%2FA%2F6kJf1jSr9iuazuEjQCuNTHRaFGU1oamOj7tKsYJ1ZBrYGcI325odyPeM4CiZ8WuU9oeyQFqTMkeQoEntHatJZZ%2Bh8fcC1hkOzy2H9XHu5MotdyyLILty1ZQYnXjpctk39Wkx1Hd6G%2BaLf4WqMs4C9oGgA6IGrZz%2B52XKKHAbPr8qi6FxesVYeVhFIe4XHVbK3Bif56c4JMF4skneJn7E9b8GhVAoGgSJ8Wc1lV3vgeRNpIdZB5engaxAv1QBCusIRarAJK84qoltheBwm1ZtamedchWxJpHlpxPCD9jDp6kYUenEQn%2FtaCxxbM6ZnKGf%2FAjFgqeyfNefP0XxyfrBuKrUtWYN%2Bx24m03Xd6OTADeaBVIRsdh57h%2FxshPBppDHt0xjBzEQuz2Q8Z1zqjbXDjBcLeHImeP%2FnccA8lQsXNHvSdw7vwW1X6%2FBGK2U8Y8U3SnliXoBpQ2rVmR36wGcO36ht7iQ9ZubaWbsrrWfCyjccbh7G9slexLCYTyE%2BWK7Ozczms3GdalbfF1RfAZ2Xd2rF2Df6bXtoqedGSUc9M3iC3C6c%2B0WPWsx%2Fk6vk89GCImNjzjeV6lWUBrpBC5jkV9VANSlK00QMbLz66gwZu0kyZkwuIaLwgY6pgE7apYXYfbUM5urj9AyW1kUuN%2BpoJ6JpdaaFo8LvKWapflRDIsKlrlceiKIbiPQkOa0ZyNLHms0YGxokZo0%2BLNn6QkqZdrbmWflaSwn9t4QAWWlVG%2FCgVctn1%2Bf7sFEmvnQQ%2Fi7wbwAfnXRKOAX7aWmPNZnHQIdOeJdXYl75OoxyrXwjTyH4bjK0uOE5%2Bx28LdHl6AAe%2BRN2M2AGHtdQ%2FYZW2tQdUhv&X-Amz-Signature=9120fcb9d530d05eb760fbe56288c8b5129f6ab3ecc0cdcbc772a36ad2e22e82&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UOBIVY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvUkP96LZ2t49yE4WmRzvCXjWEVa85ikbDhpp%2Bj4oJiAiA8Nz5TbVc87Y6sIz%2BzGOz99kAuzmAFsFEd%2BtYBAFjdQyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMs1iHfl1yRvNpmMiIKtwDx7slEfm%2F4%2FA%2F6kJf1jSr9iuazuEjQCuNTHRaFGU1oamOj7tKsYJ1ZBrYGcI325odyPeM4CiZ8WuU9oeyQFqTMkeQoEntHatJZZ%2Bh8fcC1hkOzy2H9XHu5MotdyyLILty1ZQYnXjpctk39Wkx1Hd6G%2BaLf4WqMs4C9oGgA6IGrZz%2B52XKKHAbPr8qi6FxesVYeVhFIe4XHVbK3Bif56c4JMF4skneJn7E9b8GhVAoGgSJ8Wc1lV3vgeRNpIdZB5engaxAv1QBCusIRarAJK84qoltheBwm1ZtamedchWxJpHlpxPCD9jDp6kYUenEQn%2FtaCxxbM6ZnKGf%2FAjFgqeyfNefP0XxyfrBuKrUtWYN%2Bx24m03Xd6OTADeaBVIRsdh57h%2FxshPBppDHt0xjBzEQuz2Q8Z1zqjbXDjBcLeHImeP%2FnccA8lQsXNHvSdw7vwW1X6%2FBGK2U8Y8U3SnliXoBpQ2rVmR36wGcO36ht7iQ9ZubaWbsrrWfCyjccbh7G9slexLCYTyE%2BWK7Ozczms3GdalbfF1RfAZ2Xd2rF2Df6bXtoqedGSUc9M3iC3C6c%2B0WPWsx%2Fk6vk89GCImNjzjeV6lWUBrpBC5jkV9VANSlK00QMbLz66gwZu0kyZkwuIaLwgY6pgE7apYXYfbUM5urj9AyW1kUuN%2BpoJ6JpdaaFo8LvKWapflRDIsKlrlceiKIbiPQkOa0ZyNLHms0YGxokZo0%2BLNn6QkqZdrbmWflaSwn9t4QAWWlVG%2FCgVctn1%2Bf7sFEmvnQQ%2Fi7wbwAfnXRKOAX7aWmPNZnHQIdOeJdXYl75OoxyrXwjTyH4bjK0uOE5%2Bx28LdHl6AAe%2BRN2M2AGHtdQ%2FYZW2tQdUhv&X-Amz-Signature=78f400a2e316b6e3792f9c421341979104a5e92d2e2783c3281e5d88ebe0642a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UOBIVY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvUkP96LZ2t49yE4WmRzvCXjWEVa85ikbDhpp%2Bj4oJiAiA8Nz5TbVc87Y6sIz%2BzGOz99kAuzmAFsFEd%2BtYBAFjdQyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMs1iHfl1yRvNpmMiIKtwDx7slEfm%2F4%2FA%2F6kJf1jSr9iuazuEjQCuNTHRaFGU1oamOj7tKsYJ1ZBrYGcI325odyPeM4CiZ8WuU9oeyQFqTMkeQoEntHatJZZ%2Bh8fcC1hkOzy2H9XHu5MotdyyLILty1ZQYnXjpctk39Wkx1Hd6G%2BaLf4WqMs4C9oGgA6IGrZz%2B52XKKHAbPr8qi6FxesVYeVhFIe4XHVbK3Bif56c4JMF4skneJn7E9b8GhVAoGgSJ8Wc1lV3vgeRNpIdZB5engaxAv1QBCusIRarAJK84qoltheBwm1ZtamedchWxJpHlpxPCD9jDp6kYUenEQn%2FtaCxxbM6ZnKGf%2FAjFgqeyfNefP0XxyfrBuKrUtWYN%2Bx24m03Xd6OTADeaBVIRsdh57h%2FxshPBppDHt0xjBzEQuz2Q8Z1zqjbXDjBcLeHImeP%2FnccA8lQsXNHvSdw7vwW1X6%2FBGK2U8Y8U3SnliXoBpQ2rVmR36wGcO36ht7iQ9ZubaWbsrrWfCyjccbh7G9slexLCYTyE%2BWK7Ozczms3GdalbfF1RfAZ2Xd2rF2Df6bXtoqedGSUc9M3iC3C6c%2B0WPWsx%2Fk6vk89GCImNjzjeV6lWUBrpBC5jkV9VANSlK00QMbLz66gwZu0kyZkwuIaLwgY6pgE7apYXYfbUM5urj9AyW1kUuN%2BpoJ6JpdaaFo8LvKWapflRDIsKlrlceiKIbiPQkOa0ZyNLHms0YGxokZo0%2BLNn6QkqZdrbmWflaSwn9t4QAWWlVG%2FCgVctn1%2Bf7sFEmvnQQ%2Fi7wbwAfnXRKOAX7aWmPNZnHQIdOeJdXYl75OoxyrXwjTyH4bjK0uOE5%2Bx28LdHl6AAe%2BRN2M2AGHtdQ%2FYZW2tQdUhv&X-Amz-Signature=244f859d1794a9ee90fea7c1d933c76b006ed1e7938a8dc1fda0e2f8ef6667a2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UOBIVY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvUkP96LZ2t49yE4WmRzvCXjWEVa85ikbDhpp%2Bj4oJiAiA8Nz5TbVc87Y6sIz%2BzGOz99kAuzmAFsFEd%2BtYBAFjdQyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMs1iHfl1yRvNpmMiIKtwDx7slEfm%2F4%2FA%2F6kJf1jSr9iuazuEjQCuNTHRaFGU1oamOj7tKsYJ1ZBrYGcI325odyPeM4CiZ8WuU9oeyQFqTMkeQoEntHatJZZ%2Bh8fcC1hkOzy2H9XHu5MotdyyLILty1ZQYnXjpctk39Wkx1Hd6G%2BaLf4WqMs4C9oGgA6IGrZz%2B52XKKHAbPr8qi6FxesVYeVhFIe4XHVbK3Bif56c4JMF4skneJn7E9b8GhVAoGgSJ8Wc1lV3vgeRNpIdZB5engaxAv1QBCusIRarAJK84qoltheBwm1ZtamedchWxJpHlpxPCD9jDp6kYUenEQn%2FtaCxxbM6ZnKGf%2FAjFgqeyfNefP0XxyfrBuKrUtWYN%2Bx24m03Xd6OTADeaBVIRsdh57h%2FxshPBppDHt0xjBzEQuz2Q8Z1zqjbXDjBcLeHImeP%2FnccA8lQsXNHvSdw7vwW1X6%2FBGK2U8Y8U3SnliXoBpQ2rVmR36wGcO36ht7iQ9ZubaWbsrrWfCyjccbh7G9slexLCYTyE%2BWK7Ozczms3GdalbfF1RfAZ2Xd2rF2Df6bXtoqedGSUc9M3iC3C6c%2B0WPWsx%2Fk6vk89GCImNjzjeV6lWUBrpBC5jkV9VANSlK00QMbLz66gwZu0kyZkwuIaLwgY6pgE7apYXYfbUM5urj9AyW1kUuN%2BpoJ6JpdaaFo8LvKWapflRDIsKlrlceiKIbiPQkOa0ZyNLHms0YGxokZo0%2BLNn6QkqZdrbmWflaSwn9t4QAWWlVG%2FCgVctn1%2Bf7sFEmvnQQ%2Fi7wbwAfnXRKOAX7aWmPNZnHQIdOeJdXYl75OoxyrXwjTyH4bjK0uOE5%2Bx28LdHl6AAe%2BRN2M2AGHtdQ%2FYZW2tQdUhv&X-Amz-Signature=ff7c04d3517e8db5ad45e31260854a6f6408e5823b5b4bdc2e6994513914f94a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UOBIVY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvUkP96LZ2t49yE4WmRzvCXjWEVa85ikbDhpp%2Bj4oJiAiA8Nz5TbVc87Y6sIz%2BzGOz99kAuzmAFsFEd%2BtYBAFjdQyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMs1iHfl1yRvNpmMiIKtwDx7slEfm%2F4%2FA%2F6kJf1jSr9iuazuEjQCuNTHRaFGU1oamOj7tKsYJ1ZBrYGcI325odyPeM4CiZ8WuU9oeyQFqTMkeQoEntHatJZZ%2Bh8fcC1hkOzy2H9XHu5MotdyyLILty1ZQYnXjpctk39Wkx1Hd6G%2BaLf4WqMs4C9oGgA6IGrZz%2B52XKKHAbPr8qi6FxesVYeVhFIe4XHVbK3Bif56c4JMF4skneJn7E9b8GhVAoGgSJ8Wc1lV3vgeRNpIdZB5engaxAv1QBCusIRarAJK84qoltheBwm1ZtamedchWxJpHlpxPCD9jDp6kYUenEQn%2FtaCxxbM6ZnKGf%2FAjFgqeyfNefP0XxyfrBuKrUtWYN%2Bx24m03Xd6OTADeaBVIRsdh57h%2FxshPBppDHt0xjBzEQuz2Q8Z1zqjbXDjBcLeHImeP%2FnccA8lQsXNHvSdw7vwW1X6%2FBGK2U8Y8U3SnliXoBpQ2rVmR36wGcO36ht7iQ9ZubaWbsrrWfCyjccbh7G9slexLCYTyE%2BWK7Ozczms3GdalbfF1RfAZ2Xd2rF2Df6bXtoqedGSUc9M3iC3C6c%2B0WPWsx%2Fk6vk89GCImNjzjeV6lWUBrpBC5jkV9VANSlK00QMbLz66gwZu0kyZkwuIaLwgY6pgE7apYXYfbUM5urj9AyW1kUuN%2BpoJ6JpdaaFo8LvKWapflRDIsKlrlceiKIbiPQkOa0ZyNLHms0YGxokZo0%2BLNn6QkqZdrbmWflaSwn9t4QAWWlVG%2FCgVctn1%2Bf7sFEmvnQQ%2Fi7wbwAfnXRKOAX7aWmPNZnHQIdOeJdXYl75OoxyrXwjTyH4bjK0uOE5%2Bx28LdHl6AAe%2BRN2M2AGHtdQ%2FYZW2tQdUhv&X-Amz-Signature=07aaacc26765be2d3e99163573cf910fd90de62e3b6e798de9453b034887e206&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UOBIVY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvUkP96LZ2t49yE4WmRzvCXjWEVa85ikbDhpp%2Bj4oJiAiA8Nz5TbVc87Y6sIz%2BzGOz99kAuzmAFsFEd%2BtYBAFjdQyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMs1iHfl1yRvNpmMiIKtwDx7slEfm%2F4%2FA%2F6kJf1jSr9iuazuEjQCuNTHRaFGU1oamOj7tKsYJ1ZBrYGcI325odyPeM4CiZ8WuU9oeyQFqTMkeQoEntHatJZZ%2Bh8fcC1hkOzy2H9XHu5MotdyyLILty1ZQYnXjpctk39Wkx1Hd6G%2BaLf4WqMs4C9oGgA6IGrZz%2B52XKKHAbPr8qi6FxesVYeVhFIe4XHVbK3Bif56c4JMF4skneJn7E9b8GhVAoGgSJ8Wc1lV3vgeRNpIdZB5engaxAv1QBCusIRarAJK84qoltheBwm1ZtamedchWxJpHlpxPCD9jDp6kYUenEQn%2FtaCxxbM6ZnKGf%2FAjFgqeyfNefP0XxyfrBuKrUtWYN%2Bx24m03Xd6OTADeaBVIRsdh57h%2FxshPBppDHt0xjBzEQuz2Q8Z1zqjbXDjBcLeHImeP%2FnccA8lQsXNHvSdw7vwW1X6%2FBGK2U8Y8U3SnliXoBpQ2rVmR36wGcO36ht7iQ9ZubaWbsrrWfCyjccbh7G9slexLCYTyE%2BWK7Ozczms3GdalbfF1RfAZ2Xd2rF2Df6bXtoqedGSUc9M3iC3C6c%2B0WPWsx%2Fk6vk89GCImNjzjeV6lWUBrpBC5jkV9VANSlK00QMbLz66gwZu0kyZkwuIaLwgY6pgE7apYXYfbUM5urj9AyW1kUuN%2BpoJ6JpdaaFo8LvKWapflRDIsKlrlceiKIbiPQkOa0ZyNLHms0YGxokZo0%2BLNn6QkqZdrbmWflaSwn9t4QAWWlVG%2FCgVctn1%2Bf7sFEmvnQQ%2Fi7wbwAfnXRKOAX7aWmPNZnHQIdOeJdXYl75OoxyrXwjTyH4bjK0uOE5%2Bx28LdHl6AAe%2BRN2M2AGHtdQ%2FYZW2tQdUhv&X-Amz-Signature=715a72d761af9afa5c869941b6afffcdfe51c50dcba1dda2d1abcc7a4cd3a721&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
