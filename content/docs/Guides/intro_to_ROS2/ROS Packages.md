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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USFN4A5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FsGJEKYVqN86iNMER7CLYfZZ4TB7K2u6%2FyeVjanWy2AiBglGEy6NA%2FvvClY7985UKjPwyTbKDBUvbsAUW%2FXP4luCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS2NkM9wouNQbf7EKKtwDvL7gEYAZdLB7HeO5ydcMGLp40lcztF0ffplZrkQpy7RVs3Aw85C6kMDc3qrjAbW8ZRNml97yMoKtVdRa8x5R7mSUGHGSNtRNS2tVfCyEw4E7ToX7o%2BE2h7WeBWofNhyp3NX9RmUO7wEOotThopMJ6Wch1aSx7m%2F3giCPnCFcLOREqxv9wuNE0In23yBZa4Ypzy1Kp0Y8n83lBemQQSivG%2FhdiS%2FhgTu8p9zeKmWIDjSLnkhk69NxydDax8JBgSjn60KPNs9i7zAOkRGz1fZSGhmpxykjbfsYLJ79S%2BKV3%2BU0hglUF8ekIgNZCgAcOr4Eb05cIB97aB9X5gNcsNj6DgQiDD372gEH6vaPAN%2FYGIZMIGNTUzmK2Oer5YQ%2Bzjtk2yKet7qrnpGYd9Gy9Mv1LCP0sVYruT65X0xTmOjliobURFk638lWL0zsXDzWNEeEp8aPd4pVcub85IMkmVSYCbWF1FurA7pR7y1gcWQWoiB6LT4gN7ESl8%2BJSVXyq66LMIwOLlsVHB5aGsxdzxFtaWejj967C5DajEyHrgs9sNZhxbpmxn7B9pzRFZFyTM63ff5h5FNUGSfFpisl5GsN2bYZW9boRwYbrbrLwRFnDHOPlggg7uY3ZcASnpkwk7bRwgY6pgHOjfmcChCnj2ieWVP%2FY5BOHPI9QlhT3ejqZPe4WOlXTenib1PalXhbOjD%2F2n77mhGR5ftgY1AlnNRgwl8mDfFe8DecwKQy%2BgW1F9ELTFU0RatV%2FvwysL69ADumDSRL1f8FO7QGOjld7wbqeVoU1uph3d0CjvQxdNZnhJVgSkBoywrs6gkrCeVskwOf6KJPXeWFVeSRxn4YAlf5b77DrL%2F5K41umt95&X-Amz-Signature=93f8e2fc7312892240dafc5cc5ed870615a1c89f37ba7961741c1677c5d2f591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USFN4A5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FsGJEKYVqN86iNMER7CLYfZZ4TB7K2u6%2FyeVjanWy2AiBglGEy6NA%2FvvClY7985UKjPwyTbKDBUvbsAUW%2FXP4luCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS2NkM9wouNQbf7EKKtwDvL7gEYAZdLB7HeO5ydcMGLp40lcztF0ffplZrkQpy7RVs3Aw85C6kMDc3qrjAbW8ZRNml97yMoKtVdRa8x5R7mSUGHGSNtRNS2tVfCyEw4E7ToX7o%2BE2h7WeBWofNhyp3NX9RmUO7wEOotThopMJ6Wch1aSx7m%2F3giCPnCFcLOREqxv9wuNE0In23yBZa4Ypzy1Kp0Y8n83lBemQQSivG%2FhdiS%2FhgTu8p9zeKmWIDjSLnkhk69NxydDax8JBgSjn60KPNs9i7zAOkRGz1fZSGhmpxykjbfsYLJ79S%2BKV3%2BU0hglUF8ekIgNZCgAcOr4Eb05cIB97aB9X5gNcsNj6DgQiDD372gEH6vaPAN%2FYGIZMIGNTUzmK2Oer5YQ%2Bzjtk2yKet7qrnpGYd9Gy9Mv1LCP0sVYruT65X0xTmOjliobURFk638lWL0zsXDzWNEeEp8aPd4pVcub85IMkmVSYCbWF1FurA7pR7y1gcWQWoiB6LT4gN7ESl8%2BJSVXyq66LMIwOLlsVHB5aGsxdzxFtaWejj967C5DajEyHrgs9sNZhxbpmxn7B9pzRFZFyTM63ff5h5FNUGSfFpisl5GsN2bYZW9boRwYbrbrLwRFnDHOPlggg7uY3ZcASnpkwk7bRwgY6pgHOjfmcChCnj2ieWVP%2FY5BOHPI9QlhT3ejqZPe4WOlXTenib1PalXhbOjD%2F2n77mhGR5ftgY1AlnNRgwl8mDfFe8DecwKQy%2BgW1F9ELTFU0RatV%2FvwysL69ADumDSRL1f8FO7QGOjld7wbqeVoU1uph3d0CjvQxdNZnhJVgSkBoywrs6gkrCeVskwOf6KJPXeWFVeSRxn4YAlf5b77DrL%2F5K41umt95&X-Amz-Signature=3b854d58ffffbd0b6d0a6718b9afd780a345bf6b5b28ca00652ec603d786e979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USFN4A5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FsGJEKYVqN86iNMER7CLYfZZ4TB7K2u6%2FyeVjanWy2AiBglGEy6NA%2FvvClY7985UKjPwyTbKDBUvbsAUW%2FXP4luCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS2NkM9wouNQbf7EKKtwDvL7gEYAZdLB7HeO5ydcMGLp40lcztF0ffplZrkQpy7RVs3Aw85C6kMDc3qrjAbW8ZRNml97yMoKtVdRa8x5R7mSUGHGSNtRNS2tVfCyEw4E7ToX7o%2BE2h7WeBWofNhyp3NX9RmUO7wEOotThopMJ6Wch1aSx7m%2F3giCPnCFcLOREqxv9wuNE0In23yBZa4Ypzy1Kp0Y8n83lBemQQSivG%2FhdiS%2FhgTu8p9zeKmWIDjSLnkhk69NxydDax8JBgSjn60KPNs9i7zAOkRGz1fZSGhmpxykjbfsYLJ79S%2BKV3%2BU0hglUF8ekIgNZCgAcOr4Eb05cIB97aB9X5gNcsNj6DgQiDD372gEH6vaPAN%2FYGIZMIGNTUzmK2Oer5YQ%2Bzjtk2yKet7qrnpGYd9Gy9Mv1LCP0sVYruT65X0xTmOjliobURFk638lWL0zsXDzWNEeEp8aPd4pVcub85IMkmVSYCbWF1FurA7pR7y1gcWQWoiB6LT4gN7ESl8%2BJSVXyq66LMIwOLlsVHB5aGsxdzxFtaWejj967C5DajEyHrgs9sNZhxbpmxn7B9pzRFZFyTM63ff5h5FNUGSfFpisl5GsN2bYZW9boRwYbrbrLwRFnDHOPlggg7uY3ZcASnpkwk7bRwgY6pgHOjfmcChCnj2ieWVP%2FY5BOHPI9QlhT3ejqZPe4WOlXTenib1PalXhbOjD%2F2n77mhGR5ftgY1AlnNRgwl8mDfFe8DecwKQy%2BgW1F9ELTFU0RatV%2FvwysL69ADumDSRL1f8FO7QGOjld7wbqeVoU1uph3d0CjvQxdNZnhJVgSkBoywrs6gkrCeVskwOf6KJPXeWFVeSRxn4YAlf5b77DrL%2F5K41umt95&X-Amz-Signature=20871a866ba6dcba84dfd54bf13f52e52ac28ed1f3a93517a0714385f72ff9d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USFN4A5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FsGJEKYVqN86iNMER7CLYfZZ4TB7K2u6%2FyeVjanWy2AiBglGEy6NA%2FvvClY7985UKjPwyTbKDBUvbsAUW%2FXP4luCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS2NkM9wouNQbf7EKKtwDvL7gEYAZdLB7HeO5ydcMGLp40lcztF0ffplZrkQpy7RVs3Aw85C6kMDc3qrjAbW8ZRNml97yMoKtVdRa8x5R7mSUGHGSNtRNS2tVfCyEw4E7ToX7o%2BE2h7WeBWofNhyp3NX9RmUO7wEOotThopMJ6Wch1aSx7m%2F3giCPnCFcLOREqxv9wuNE0In23yBZa4Ypzy1Kp0Y8n83lBemQQSivG%2FhdiS%2FhgTu8p9zeKmWIDjSLnkhk69NxydDax8JBgSjn60KPNs9i7zAOkRGz1fZSGhmpxykjbfsYLJ79S%2BKV3%2BU0hglUF8ekIgNZCgAcOr4Eb05cIB97aB9X5gNcsNj6DgQiDD372gEH6vaPAN%2FYGIZMIGNTUzmK2Oer5YQ%2Bzjtk2yKet7qrnpGYd9Gy9Mv1LCP0sVYruT65X0xTmOjliobURFk638lWL0zsXDzWNEeEp8aPd4pVcub85IMkmVSYCbWF1FurA7pR7y1gcWQWoiB6LT4gN7ESl8%2BJSVXyq66LMIwOLlsVHB5aGsxdzxFtaWejj967C5DajEyHrgs9sNZhxbpmxn7B9pzRFZFyTM63ff5h5FNUGSfFpisl5GsN2bYZW9boRwYbrbrLwRFnDHOPlggg7uY3ZcASnpkwk7bRwgY6pgHOjfmcChCnj2ieWVP%2FY5BOHPI9QlhT3ejqZPe4WOlXTenib1PalXhbOjD%2F2n77mhGR5ftgY1AlnNRgwl8mDfFe8DecwKQy%2BgW1F9ELTFU0RatV%2FvwysL69ADumDSRL1f8FO7QGOjld7wbqeVoU1uph3d0CjvQxdNZnhJVgSkBoywrs6gkrCeVskwOf6KJPXeWFVeSRxn4YAlf5b77DrL%2F5K41umt95&X-Amz-Signature=ec93c0b70130ba835753db3320663eee7b48a4568dde3e553f17cd01e6cb4232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USFN4A5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FsGJEKYVqN86iNMER7CLYfZZ4TB7K2u6%2FyeVjanWy2AiBglGEy6NA%2FvvClY7985UKjPwyTbKDBUvbsAUW%2FXP4luCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS2NkM9wouNQbf7EKKtwDvL7gEYAZdLB7HeO5ydcMGLp40lcztF0ffplZrkQpy7RVs3Aw85C6kMDc3qrjAbW8ZRNml97yMoKtVdRa8x5R7mSUGHGSNtRNS2tVfCyEw4E7ToX7o%2BE2h7WeBWofNhyp3NX9RmUO7wEOotThopMJ6Wch1aSx7m%2F3giCPnCFcLOREqxv9wuNE0In23yBZa4Ypzy1Kp0Y8n83lBemQQSivG%2FhdiS%2FhgTu8p9zeKmWIDjSLnkhk69NxydDax8JBgSjn60KPNs9i7zAOkRGz1fZSGhmpxykjbfsYLJ79S%2BKV3%2BU0hglUF8ekIgNZCgAcOr4Eb05cIB97aB9X5gNcsNj6DgQiDD372gEH6vaPAN%2FYGIZMIGNTUzmK2Oer5YQ%2Bzjtk2yKet7qrnpGYd9Gy9Mv1LCP0sVYruT65X0xTmOjliobURFk638lWL0zsXDzWNEeEp8aPd4pVcub85IMkmVSYCbWF1FurA7pR7y1gcWQWoiB6LT4gN7ESl8%2BJSVXyq66LMIwOLlsVHB5aGsxdzxFtaWejj967C5DajEyHrgs9sNZhxbpmxn7B9pzRFZFyTM63ff5h5FNUGSfFpisl5GsN2bYZW9boRwYbrbrLwRFnDHOPlggg7uY3ZcASnpkwk7bRwgY6pgHOjfmcChCnj2ieWVP%2FY5BOHPI9QlhT3ejqZPe4WOlXTenib1PalXhbOjD%2F2n77mhGR5ftgY1AlnNRgwl8mDfFe8DecwKQy%2BgW1F9ELTFU0RatV%2FvwysL69ADumDSRL1f8FO7QGOjld7wbqeVoU1uph3d0CjvQxdNZnhJVgSkBoywrs6gkrCeVskwOf6KJPXeWFVeSRxn4YAlf5b77DrL%2F5K41umt95&X-Amz-Signature=b9dca12604f2b3b6948b175bb5454c5d2462e71358dfdcd7773918508a861701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USFN4A5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FsGJEKYVqN86iNMER7CLYfZZ4TB7K2u6%2FyeVjanWy2AiBglGEy6NA%2FvvClY7985UKjPwyTbKDBUvbsAUW%2FXP4luCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS2NkM9wouNQbf7EKKtwDvL7gEYAZdLB7HeO5ydcMGLp40lcztF0ffplZrkQpy7RVs3Aw85C6kMDc3qrjAbW8ZRNml97yMoKtVdRa8x5R7mSUGHGSNtRNS2tVfCyEw4E7ToX7o%2BE2h7WeBWofNhyp3NX9RmUO7wEOotThopMJ6Wch1aSx7m%2F3giCPnCFcLOREqxv9wuNE0In23yBZa4Ypzy1Kp0Y8n83lBemQQSivG%2FhdiS%2FhgTu8p9zeKmWIDjSLnkhk69NxydDax8JBgSjn60KPNs9i7zAOkRGz1fZSGhmpxykjbfsYLJ79S%2BKV3%2BU0hglUF8ekIgNZCgAcOr4Eb05cIB97aB9X5gNcsNj6DgQiDD372gEH6vaPAN%2FYGIZMIGNTUzmK2Oer5YQ%2Bzjtk2yKet7qrnpGYd9Gy9Mv1LCP0sVYruT65X0xTmOjliobURFk638lWL0zsXDzWNEeEp8aPd4pVcub85IMkmVSYCbWF1FurA7pR7y1gcWQWoiB6LT4gN7ESl8%2BJSVXyq66LMIwOLlsVHB5aGsxdzxFtaWejj967C5DajEyHrgs9sNZhxbpmxn7B9pzRFZFyTM63ff5h5FNUGSfFpisl5GsN2bYZW9boRwYbrbrLwRFnDHOPlggg7uY3ZcASnpkwk7bRwgY6pgHOjfmcChCnj2ieWVP%2FY5BOHPI9QlhT3ejqZPe4WOlXTenib1PalXhbOjD%2F2n77mhGR5ftgY1AlnNRgwl8mDfFe8DecwKQy%2BgW1F9ELTFU0RatV%2FvwysL69ADumDSRL1f8FO7QGOjld7wbqeVoU1uph3d0CjvQxdNZnhJVgSkBoywrs6gkrCeVskwOf6KJPXeWFVeSRxn4YAlf5b77DrL%2F5K41umt95&X-Amz-Signature=6c509ad8f74acb0bdbada924f309877491750d3da4387fca994938436588e0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USFN4A5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FsGJEKYVqN86iNMER7CLYfZZ4TB7K2u6%2FyeVjanWy2AiBglGEy6NA%2FvvClY7985UKjPwyTbKDBUvbsAUW%2FXP4luCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS2NkM9wouNQbf7EKKtwDvL7gEYAZdLB7HeO5ydcMGLp40lcztF0ffplZrkQpy7RVs3Aw85C6kMDc3qrjAbW8ZRNml97yMoKtVdRa8x5R7mSUGHGSNtRNS2tVfCyEw4E7ToX7o%2BE2h7WeBWofNhyp3NX9RmUO7wEOotThopMJ6Wch1aSx7m%2F3giCPnCFcLOREqxv9wuNE0In23yBZa4Ypzy1Kp0Y8n83lBemQQSivG%2FhdiS%2FhgTu8p9zeKmWIDjSLnkhk69NxydDax8JBgSjn60KPNs9i7zAOkRGz1fZSGhmpxykjbfsYLJ79S%2BKV3%2BU0hglUF8ekIgNZCgAcOr4Eb05cIB97aB9X5gNcsNj6DgQiDD372gEH6vaPAN%2FYGIZMIGNTUzmK2Oer5YQ%2Bzjtk2yKet7qrnpGYd9Gy9Mv1LCP0sVYruT65X0xTmOjliobURFk638lWL0zsXDzWNEeEp8aPd4pVcub85IMkmVSYCbWF1FurA7pR7y1gcWQWoiB6LT4gN7ESl8%2BJSVXyq66LMIwOLlsVHB5aGsxdzxFtaWejj967C5DajEyHrgs9sNZhxbpmxn7B9pzRFZFyTM63ff5h5FNUGSfFpisl5GsN2bYZW9boRwYbrbrLwRFnDHOPlggg7uY3ZcASnpkwk7bRwgY6pgHOjfmcChCnj2ieWVP%2FY5BOHPI9QlhT3ejqZPe4WOlXTenib1PalXhbOjD%2F2n77mhGR5ftgY1AlnNRgwl8mDfFe8DecwKQy%2BgW1F9ELTFU0RatV%2FvwysL69ADumDSRL1f8FO7QGOjld7wbqeVoU1uph3d0CjvQxdNZnhJVgSkBoywrs6gkrCeVskwOf6KJPXeWFVeSRxn4YAlf5b77DrL%2F5K41umt95&X-Amz-Signature=7fdd2821dbc23851568078ab7a0baed89872a854ba1694deea91704061b39cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
