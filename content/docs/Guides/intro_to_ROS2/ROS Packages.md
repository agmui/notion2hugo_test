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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZNT2ZR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2FsOWRJiBvrC7admAUCGEyTVANWWkLNjuUBV2QrExMQIhANw1AQKE5Q%2FSci4Ze%2BzB9fCUl4%2BCQ7Msrva3cFl3N2nVKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqoNUVu%2FByXP9xMG8q3APuD6zrpdRqjjKIEv%2Bszz3dDUUHDKqQmnIdSvM%2BKccjLY4S3bpWRsj%2FTbaFDfrKvGGXbiATcXKy9v74VSNbtylk5JlKIfp5ck8r6LFKBcm2UH0WmK7s%2FJjcPWCO0%2BtdYgy9S%2B6GP3Eg%2BiNevqSpxBk%2BWvpq138hUwe04CW2FJNYVIJrckRM8ABHHe624cKxHuurHCIlH%2B6ikrAc61HphlG%2FJLuwQy4W4BH4n2Zlc3yI1cEbuOJhYJD7yfPuRQ6nXUnXqhoR3s3hRDw9Nah%2F5HAlHhXe7nvqwlb9MZAM7lu9PLgQv%2FSlrxPY5xVko4UKzJ23Yb7kDVwDmOEXIpCOIyBFU2cr3RWwEB7G8Y2MVU%2F1YSG34730S1woo8AdMjCytH%2FoWESpkIM8nkKVKzqWMsQ2b3HtyJQmp6Ok2Dfu9JVUNMgn0fqGOytQ56pr85SFJD2NwnTl1pfcezkckuwgJmhCopLLSuiH5xGCQlP2mlibe%2B8lFMf6llq8M0%2FS3DDLlOv1iPh2A7DXJKN5DoChZWEW0tjooRjCXMeMaKwyEtvfIR8H1puqyRZogfzVR9xwV8r2yi7XMStzm6ij4dHlBSTLiQmwJv8fCBtNPq3laKnHZMn2cGb1lKwgZZ%2BZjDDojOq9BjqkAYAH3hFV2maLqc%2Bxqr%2BYXZetJz6G06OvYy6Sk54019hsTD3hPfxnbj60uE2fpjmbZXhy00Ol7Gx1S0rYXRL58b%2F5GHoL6h6tyBZAYlRjwxY%2FuwB1x%2FTabeNJEHQ%2F7T8GfhatFzERQmVCBI8zTVwUkcWrbCIUQrgtN%2BTRdk%2F9C1wD8bDuLjCu2joDoqqOsnxAiGotBTUEweP%2BaBv04qqAnjsQb1kD&X-Amz-Signature=de297b1f6c95383a897a984be0b490b80b505a8db06d019e664461299fffa3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZNT2ZR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2FsOWRJiBvrC7admAUCGEyTVANWWkLNjuUBV2QrExMQIhANw1AQKE5Q%2FSci4Ze%2BzB9fCUl4%2BCQ7Msrva3cFl3N2nVKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqoNUVu%2FByXP9xMG8q3APuD6zrpdRqjjKIEv%2Bszz3dDUUHDKqQmnIdSvM%2BKccjLY4S3bpWRsj%2FTbaFDfrKvGGXbiATcXKy9v74VSNbtylk5JlKIfp5ck8r6LFKBcm2UH0WmK7s%2FJjcPWCO0%2BtdYgy9S%2B6GP3Eg%2BiNevqSpxBk%2BWvpq138hUwe04CW2FJNYVIJrckRM8ABHHe624cKxHuurHCIlH%2B6ikrAc61HphlG%2FJLuwQy4W4BH4n2Zlc3yI1cEbuOJhYJD7yfPuRQ6nXUnXqhoR3s3hRDw9Nah%2F5HAlHhXe7nvqwlb9MZAM7lu9PLgQv%2FSlrxPY5xVko4UKzJ23Yb7kDVwDmOEXIpCOIyBFU2cr3RWwEB7G8Y2MVU%2F1YSG34730S1woo8AdMjCytH%2FoWESpkIM8nkKVKzqWMsQ2b3HtyJQmp6Ok2Dfu9JVUNMgn0fqGOytQ56pr85SFJD2NwnTl1pfcezkckuwgJmhCopLLSuiH5xGCQlP2mlibe%2B8lFMf6llq8M0%2FS3DDLlOv1iPh2A7DXJKN5DoChZWEW0tjooRjCXMeMaKwyEtvfIR8H1puqyRZogfzVR9xwV8r2yi7XMStzm6ij4dHlBSTLiQmwJv8fCBtNPq3laKnHZMn2cGb1lKwgZZ%2BZjDDojOq9BjqkAYAH3hFV2maLqc%2Bxqr%2BYXZetJz6G06OvYy6Sk54019hsTD3hPfxnbj60uE2fpjmbZXhy00Ol7Gx1S0rYXRL58b%2F5GHoL6h6tyBZAYlRjwxY%2FuwB1x%2FTabeNJEHQ%2F7T8GfhatFzERQmVCBI8zTVwUkcWrbCIUQrgtN%2BTRdk%2F9C1wD8bDuLjCu2joDoqqOsnxAiGotBTUEweP%2BaBv04qqAnjsQb1kD&X-Amz-Signature=0cbb08f5054d9a44b1f911cd1b3b4306937a0f4add0db9e8700f3b262a86012c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZNT2ZR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2FsOWRJiBvrC7admAUCGEyTVANWWkLNjuUBV2QrExMQIhANw1AQKE5Q%2FSci4Ze%2BzB9fCUl4%2BCQ7Msrva3cFl3N2nVKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqoNUVu%2FByXP9xMG8q3APuD6zrpdRqjjKIEv%2Bszz3dDUUHDKqQmnIdSvM%2BKccjLY4S3bpWRsj%2FTbaFDfrKvGGXbiATcXKy9v74VSNbtylk5JlKIfp5ck8r6LFKBcm2UH0WmK7s%2FJjcPWCO0%2BtdYgy9S%2B6GP3Eg%2BiNevqSpxBk%2BWvpq138hUwe04CW2FJNYVIJrckRM8ABHHe624cKxHuurHCIlH%2B6ikrAc61HphlG%2FJLuwQy4W4BH4n2Zlc3yI1cEbuOJhYJD7yfPuRQ6nXUnXqhoR3s3hRDw9Nah%2F5HAlHhXe7nvqwlb9MZAM7lu9PLgQv%2FSlrxPY5xVko4UKzJ23Yb7kDVwDmOEXIpCOIyBFU2cr3RWwEB7G8Y2MVU%2F1YSG34730S1woo8AdMjCytH%2FoWESpkIM8nkKVKzqWMsQ2b3HtyJQmp6Ok2Dfu9JVUNMgn0fqGOytQ56pr85SFJD2NwnTl1pfcezkckuwgJmhCopLLSuiH5xGCQlP2mlibe%2B8lFMf6llq8M0%2FS3DDLlOv1iPh2A7DXJKN5DoChZWEW0tjooRjCXMeMaKwyEtvfIR8H1puqyRZogfzVR9xwV8r2yi7XMStzm6ij4dHlBSTLiQmwJv8fCBtNPq3laKnHZMn2cGb1lKwgZZ%2BZjDDojOq9BjqkAYAH3hFV2maLqc%2Bxqr%2BYXZetJz6G06OvYy6Sk54019hsTD3hPfxnbj60uE2fpjmbZXhy00Ol7Gx1S0rYXRL58b%2F5GHoL6h6tyBZAYlRjwxY%2FuwB1x%2FTabeNJEHQ%2F7T8GfhatFzERQmVCBI8zTVwUkcWrbCIUQrgtN%2BTRdk%2F9C1wD8bDuLjCu2joDoqqOsnxAiGotBTUEweP%2BaBv04qqAnjsQb1kD&X-Amz-Signature=9baa5d673b301f6603dda6f78c2e766715816cc43f5a6449479ce78361157ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZNT2ZR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2FsOWRJiBvrC7admAUCGEyTVANWWkLNjuUBV2QrExMQIhANw1AQKE5Q%2FSci4Ze%2BzB9fCUl4%2BCQ7Msrva3cFl3N2nVKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqoNUVu%2FByXP9xMG8q3APuD6zrpdRqjjKIEv%2Bszz3dDUUHDKqQmnIdSvM%2BKccjLY4S3bpWRsj%2FTbaFDfrKvGGXbiATcXKy9v74VSNbtylk5JlKIfp5ck8r6LFKBcm2UH0WmK7s%2FJjcPWCO0%2BtdYgy9S%2B6GP3Eg%2BiNevqSpxBk%2BWvpq138hUwe04CW2FJNYVIJrckRM8ABHHe624cKxHuurHCIlH%2B6ikrAc61HphlG%2FJLuwQy4W4BH4n2Zlc3yI1cEbuOJhYJD7yfPuRQ6nXUnXqhoR3s3hRDw9Nah%2F5HAlHhXe7nvqwlb9MZAM7lu9PLgQv%2FSlrxPY5xVko4UKzJ23Yb7kDVwDmOEXIpCOIyBFU2cr3RWwEB7G8Y2MVU%2F1YSG34730S1woo8AdMjCytH%2FoWESpkIM8nkKVKzqWMsQ2b3HtyJQmp6Ok2Dfu9JVUNMgn0fqGOytQ56pr85SFJD2NwnTl1pfcezkckuwgJmhCopLLSuiH5xGCQlP2mlibe%2B8lFMf6llq8M0%2FS3DDLlOv1iPh2A7DXJKN5DoChZWEW0tjooRjCXMeMaKwyEtvfIR8H1puqyRZogfzVR9xwV8r2yi7XMStzm6ij4dHlBSTLiQmwJv8fCBtNPq3laKnHZMn2cGb1lKwgZZ%2BZjDDojOq9BjqkAYAH3hFV2maLqc%2Bxqr%2BYXZetJz6G06OvYy6Sk54019hsTD3hPfxnbj60uE2fpjmbZXhy00Ol7Gx1S0rYXRL58b%2F5GHoL6h6tyBZAYlRjwxY%2FuwB1x%2FTabeNJEHQ%2F7T8GfhatFzERQmVCBI8zTVwUkcWrbCIUQrgtN%2BTRdk%2F9C1wD8bDuLjCu2joDoqqOsnxAiGotBTUEweP%2BaBv04qqAnjsQb1kD&X-Amz-Signature=50c7434cb3a0f76536f488665820652381c0b4df909798938da16fd99a1469d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZNT2ZR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2FsOWRJiBvrC7admAUCGEyTVANWWkLNjuUBV2QrExMQIhANw1AQKE5Q%2FSci4Ze%2BzB9fCUl4%2BCQ7Msrva3cFl3N2nVKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqoNUVu%2FByXP9xMG8q3APuD6zrpdRqjjKIEv%2Bszz3dDUUHDKqQmnIdSvM%2BKccjLY4S3bpWRsj%2FTbaFDfrKvGGXbiATcXKy9v74VSNbtylk5JlKIfp5ck8r6LFKBcm2UH0WmK7s%2FJjcPWCO0%2BtdYgy9S%2B6GP3Eg%2BiNevqSpxBk%2BWvpq138hUwe04CW2FJNYVIJrckRM8ABHHe624cKxHuurHCIlH%2B6ikrAc61HphlG%2FJLuwQy4W4BH4n2Zlc3yI1cEbuOJhYJD7yfPuRQ6nXUnXqhoR3s3hRDw9Nah%2F5HAlHhXe7nvqwlb9MZAM7lu9PLgQv%2FSlrxPY5xVko4UKzJ23Yb7kDVwDmOEXIpCOIyBFU2cr3RWwEB7G8Y2MVU%2F1YSG34730S1woo8AdMjCytH%2FoWESpkIM8nkKVKzqWMsQ2b3HtyJQmp6Ok2Dfu9JVUNMgn0fqGOytQ56pr85SFJD2NwnTl1pfcezkckuwgJmhCopLLSuiH5xGCQlP2mlibe%2B8lFMf6llq8M0%2FS3DDLlOv1iPh2A7DXJKN5DoChZWEW0tjooRjCXMeMaKwyEtvfIR8H1puqyRZogfzVR9xwV8r2yi7XMStzm6ij4dHlBSTLiQmwJv8fCBtNPq3laKnHZMn2cGb1lKwgZZ%2BZjDDojOq9BjqkAYAH3hFV2maLqc%2Bxqr%2BYXZetJz6G06OvYy6Sk54019hsTD3hPfxnbj60uE2fpjmbZXhy00Ol7Gx1S0rYXRL58b%2F5GHoL6h6tyBZAYlRjwxY%2FuwB1x%2FTabeNJEHQ%2F7T8GfhatFzERQmVCBI8zTVwUkcWrbCIUQrgtN%2BTRdk%2F9C1wD8bDuLjCu2joDoqqOsnxAiGotBTUEweP%2BaBv04qqAnjsQb1kD&X-Amz-Signature=ab962f11017d1dcdbd248ae779bcfb13633ac620501b23d07bb9dfb585cbbf5e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZNT2ZR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2FsOWRJiBvrC7admAUCGEyTVANWWkLNjuUBV2QrExMQIhANw1AQKE5Q%2FSci4Ze%2BzB9fCUl4%2BCQ7Msrva3cFl3N2nVKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqoNUVu%2FByXP9xMG8q3APuD6zrpdRqjjKIEv%2Bszz3dDUUHDKqQmnIdSvM%2BKccjLY4S3bpWRsj%2FTbaFDfrKvGGXbiATcXKy9v74VSNbtylk5JlKIfp5ck8r6LFKBcm2UH0WmK7s%2FJjcPWCO0%2BtdYgy9S%2B6GP3Eg%2BiNevqSpxBk%2BWvpq138hUwe04CW2FJNYVIJrckRM8ABHHe624cKxHuurHCIlH%2B6ikrAc61HphlG%2FJLuwQy4W4BH4n2Zlc3yI1cEbuOJhYJD7yfPuRQ6nXUnXqhoR3s3hRDw9Nah%2F5HAlHhXe7nvqwlb9MZAM7lu9PLgQv%2FSlrxPY5xVko4UKzJ23Yb7kDVwDmOEXIpCOIyBFU2cr3RWwEB7G8Y2MVU%2F1YSG34730S1woo8AdMjCytH%2FoWESpkIM8nkKVKzqWMsQ2b3HtyJQmp6Ok2Dfu9JVUNMgn0fqGOytQ56pr85SFJD2NwnTl1pfcezkckuwgJmhCopLLSuiH5xGCQlP2mlibe%2B8lFMf6llq8M0%2FS3DDLlOv1iPh2A7DXJKN5DoChZWEW0tjooRjCXMeMaKwyEtvfIR8H1puqyRZogfzVR9xwV8r2yi7XMStzm6ij4dHlBSTLiQmwJv8fCBtNPq3laKnHZMn2cGb1lKwgZZ%2BZjDDojOq9BjqkAYAH3hFV2maLqc%2Bxqr%2BYXZetJz6G06OvYy6Sk54019hsTD3hPfxnbj60uE2fpjmbZXhy00Ol7Gx1S0rYXRL58b%2F5GHoL6h6tyBZAYlRjwxY%2FuwB1x%2FTabeNJEHQ%2F7T8GfhatFzERQmVCBI8zTVwUkcWrbCIUQrgtN%2BTRdk%2F9C1wD8bDuLjCu2joDoqqOsnxAiGotBTUEweP%2BaBv04qqAnjsQb1kD&X-Amz-Signature=5bb2e67ddbde466654caff9eba2c909061acff2a43ee78391971a93616428e61&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZNT2ZR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2FsOWRJiBvrC7admAUCGEyTVANWWkLNjuUBV2QrExMQIhANw1AQKE5Q%2FSci4Ze%2BzB9fCUl4%2BCQ7Msrva3cFl3N2nVKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqoNUVu%2FByXP9xMG8q3APuD6zrpdRqjjKIEv%2Bszz3dDUUHDKqQmnIdSvM%2BKccjLY4S3bpWRsj%2FTbaFDfrKvGGXbiATcXKy9v74VSNbtylk5JlKIfp5ck8r6LFKBcm2UH0WmK7s%2FJjcPWCO0%2BtdYgy9S%2B6GP3Eg%2BiNevqSpxBk%2BWvpq138hUwe04CW2FJNYVIJrckRM8ABHHe624cKxHuurHCIlH%2B6ikrAc61HphlG%2FJLuwQy4W4BH4n2Zlc3yI1cEbuOJhYJD7yfPuRQ6nXUnXqhoR3s3hRDw9Nah%2F5HAlHhXe7nvqwlb9MZAM7lu9PLgQv%2FSlrxPY5xVko4UKzJ23Yb7kDVwDmOEXIpCOIyBFU2cr3RWwEB7G8Y2MVU%2F1YSG34730S1woo8AdMjCytH%2FoWESpkIM8nkKVKzqWMsQ2b3HtyJQmp6Ok2Dfu9JVUNMgn0fqGOytQ56pr85SFJD2NwnTl1pfcezkckuwgJmhCopLLSuiH5xGCQlP2mlibe%2B8lFMf6llq8M0%2FS3DDLlOv1iPh2A7DXJKN5DoChZWEW0tjooRjCXMeMaKwyEtvfIR8H1puqyRZogfzVR9xwV8r2yi7XMStzm6ij4dHlBSTLiQmwJv8fCBtNPq3laKnHZMn2cGb1lKwgZZ%2BZjDDojOq9BjqkAYAH3hFV2maLqc%2Bxqr%2BYXZetJz6G06OvYy6Sk54019hsTD3hPfxnbj60uE2fpjmbZXhy00Ol7Gx1S0rYXRL58b%2F5GHoL6h6tyBZAYlRjwxY%2FuwB1x%2FTabeNJEHQ%2F7T8GfhatFzERQmVCBI8zTVwUkcWrbCIUQrgtN%2BTRdk%2F9C1wD8bDuLjCu2joDoqqOsnxAiGotBTUEweP%2BaBv04qqAnjsQb1kD&X-Amz-Signature=889c44ce5a272e252b6de8ad0d2695b818720858fafa5395023cd43977e82241&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
