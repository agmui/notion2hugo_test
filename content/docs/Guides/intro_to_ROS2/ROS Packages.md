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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOW46T5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLAyH1sAFECPJaM327xjns43n6T8OOR2eGxNK%2BUDx3nAiAu1QWpcTf8mFAhWXm5cnaqm8OhDb%2BXdiApA148WEmG%2BSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCU1IgDpoVIxmBG1KtwDeh1PtuiH7zJZxuH9XXKgR9t21cF7p%2FIk5m0b%2BHNzNTBWxZejc0aBG9ETurI%2BDl1dTP5vun43kpgRAG67EpqH2nIRpvjc8chnFr1pSA85wWLaX2tEVOhMOXP7HbRhzQbp4gDlSEY8sgm4kLGJnhRQe2dctbc0txdCgg%2BX%2BQbHRXK4KZ9HodWStauZWgStphtyCl%2FOmCyYYaaa4Ox8i48bcoLdj8M%2F1q%2FbUJ%2BMxssCoQSJoFxP94mX%2BNTePirdl3Bd2uT5sS5YpoDod%2FNRp3NDeTY8hD%2BvWAXfXH27RaRM4PAS0t%2B19oqr2rFZH%2FJbKhQvYLLSTI08coG4%2FolzP%2Bk5GIzPi9FddJ%2BTscNEun%2FZwW5CnBSvkR4jAzsbPY3Js%2FqxbzeKp4xtGnamXD1rDrb4A9%2B6hLX7llsAQJox00oZjZjPn0DF%2BLU9Rq0fENE77rHW8%2FFINFr7WKBuNn6e8Dec4CVNgP5GAZQAQk50cco%2B52Wtu8%2BHxpxhNH0yT5qOOQ6Wfd6EseZcnKLo7%2B2D%2F3HSiE%2B%2Fg4MyqLnA%2BmdlYoCjui%2FclX%2FIx9vZJ6w6abpa%2F8OREtPJvC4cXqGcEG2hXvc6XlYu92TFSCwbLvb6EKsQ0ez4UNGtGZEiisPA6qYwuJ2avgY6pgGqO8zIyLjwZKT%2F%2FL7xAqcZHlNjE8mElu0HN%2BULdCNp0ZIfSJnfWsEOrs6fPkyIdw6Uqoz7d4khCAs1uQQRFtaMSyWp%2Fy6Rb1EAJYpzUVt7UjqoOInBSy6oTR4fGxGwl3ZokvwlaKeZJSWXjq0As3OkBoVUTO2n6RLcvEAQ5MveC%2FKHWFZnInm3hFyRFQ9qI9IshYEY%2FokSAppf%2FZE6Us3Rmx4Z4ekj&X-Amz-Signature=030c7db7221e19559d6c6f5fab7e2a504ccf28462abdfe9ed8c877c5549d164e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOW46T5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLAyH1sAFECPJaM327xjns43n6T8OOR2eGxNK%2BUDx3nAiAu1QWpcTf8mFAhWXm5cnaqm8OhDb%2BXdiApA148WEmG%2BSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCU1IgDpoVIxmBG1KtwDeh1PtuiH7zJZxuH9XXKgR9t21cF7p%2FIk5m0b%2BHNzNTBWxZejc0aBG9ETurI%2BDl1dTP5vun43kpgRAG67EpqH2nIRpvjc8chnFr1pSA85wWLaX2tEVOhMOXP7HbRhzQbp4gDlSEY8sgm4kLGJnhRQe2dctbc0txdCgg%2BX%2BQbHRXK4KZ9HodWStauZWgStphtyCl%2FOmCyYYaaa4Ox8i48bcoLdj8M%2F1q%2FbUJ%2BMxssCoQSJoFxP94mX%2BNTePirdl3Bd2uT5sS5YpoDod%2FNRp3NDeTY8hD%2BvWAXfXH27RaRM4PAS0t%2B19oqr2rFZH%2FJbKhQvYLLSTI08coG4%2FolzP%2Bk5GIzPi9FddJ%2BTscNEun%2FZwW5CnBSvkR4jAzsbPY3Js%2FqxbzeKp4xtGnamXD1rDrb4A9%2B6hLX7llsAQJox00oZjZjPn0DF%2BLU9Rq0fENE77rHW8%2FFINFr7WKBuNn6e8Dec4CVNgP5GAZQAQk50cco%2B52Wtu8%2BHxpxhNH0yT5qOOQ6Wfd6EseZcnKLo7%2B2D%2F3HSiE%2B%2Fg4MyqLnA%2BmdlYoCjui%2FclX%2FIx9vZJ6w6abpa%2F8OREtPJvC4cXqGcEG2hXvc6XlYu92TFSCwbLvb6EKsQ0ez4UNGtGZEiisPA6qYwuJ2avgY6pgGqO8zIyLjwZKT%2F%2FL7xAqcZHlNjE8mElu0HN%2BULdCNp0ZIfSJnfWsEOrs6fPkyIdw6Uqoz7d4khCAs1uQQRFtaMSyWp%2Fy6Rb1EAJYpzUVt7UjqoOInBSy6oTR4fGxGwl3ZokvwlaKeZJSWXjq0As3OkBoVUTO2n6RLcvEAQ5MveC%2FKHWFZnInm3hFyRFQ9qI9IshYEY%2FokSAppf%2FZE6Us3Rmx4Z4ekj&X-Amz-Signature=cfa1caee1164ff25e74e035fd0d07908d23640a17a62ef6ec02c76600398ac2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOW46T5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLAyH1sAFECPJaM327xjns43n6T8OOR2eGxNK%2BUDx3nAiAu1QWpcTf8mFAhWXm5cnaqm8OhDb%2BXdiApA148WEmG%2BSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCU1IgDpoVIxmBG1KtwDeh1PtuiH7zJZxuH9XXKgR9t21cF7p%2FIk5m0b%2BHNzNTBWxZejc0aBG9ETurI%2BDl1dTP5vun43kpgRAG67EpqH2nIRpvjc8chnFr1pSA85wWLaX2tEVOhMOXP7HbRhzQbp4gDlSEY8sgm4kLGJnhRQe2dctbc0txdCgg%2BX%2BQbHRXK4KZ9HodWStauZWgStphtyCl%2FOmCyYYaaa4Ox8i48bcoLdj8M%2F1q%2FbUJ%2BMxssCoQSJoFxP94mX%2BNTePirdl3Bd2uT5sS5YpoDod%2FNRp3NDeTY8hD%2BvWAXfXH27RaRM4PAS0t%2B19oqr2rFZH%2FJbKhQvYLLSTI08coG4%2FolzP%2Bk5GIzPi9FddJ%2BTscNEun%2FZwW5CnBSvkR4jAzsbPY3Js%2FqxbzeKp4xtGnamXD1rDrb4A9%2B6hLX7llsAQJox00oZjZjPn0DF%2BLU9Rq0fENE77rHW8%2FFINFr7WKBuNn6e8Dec4CVNgP5GAZQAQk50cco%2B52Wtu8%2BHxpxhNH0yT5qOOQ6Wfd6EseZcnKLo7%2B2D%2F3HSiE%2B%2Fg4MyqLnA%2BmdlYoCjui%2FclX%2FIx9vZJ6w6abpa%2F8OREtPJvC4cXqGcEG2hXvc6XlYu92TFSCwbLvb6EKsQ0ez4UNGtGZEiisPA6qYwuJ2avgY6pgGqO8zIyLjwZKT%2F%2FL7xAqcZHlNjE8mElu0HN%2BULdCNp0ZIfSJnfWsEOrs6fPkyIdw6Uqoz7d4khCAs1uQQRFtaMSyWp%2Fy6Rb1EAJYpzUVt7UjqoOInBSy6oTR4fGxGwl3ZokvwlaKeZJSWXjq0As3OkBoVUTO2n6RLcvEAQ5MveC%2FKHWFZnInm3hFyRFQ9qI9IshYEY%2FokSAppf%2FZE6Us3Rmx4Z4ekj&X-Amz-Signature=d701e3c5d84dba67ed495e6bd37b19128fba12d91c44776debb0313827b58441&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOW46T5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLAyH1sAFECPJaM327xjns43n6T8OOR2eGxNK%2BUDx3nAiAu1QWpcTf8mFAhWXm5cnaqm8OhDb%2BXdiApA148WEmG%2BSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCU1IgDpoVIxmBG1KtwDeh1PtuiH7zJZxuH9XXKgR9t21cF7p%2FIk5m0b%2BHNzNTBWxZejc0aBG9ETurI%2BDl1dTP5vun43kpgRAG67EpqH2nIRpvjc8chnFr1pSA85wWLaX2tEVOhMOXP7HbRhzQbp4gDlSEY8sgm4kLGJnhRQe2dctbc0txdCgg%2BX%2BQbHRXK4KZ9HodWStauZWgStphtyCl%2FOmCyYYaaa4Ox8i48bcoLdj8M%2F1q%2FbUJ%2BMxssCoQSJoFxP94mX%2BNTePirdl3Bd2uT5sS5YpoDod%2FNRp3NDeTY8hD%2BvWAXfXH27RaRM4PAS0t%2B19oqr2rFZH%2FJbKhQvYLLSTI08coG4%2FolzP%2Bk5GIzPi9FddJ%2BTscNEun%2FZwW5CnBSvkR4jAzsbPY3Js%2FqxbzeKp4xtGnamXD1rDrb4A9%2B6hLX7llsAQJox00oZjZjPn0DF%2BLU9Rq0fENE77rHW8%2FFINFr7WKBuNn6e8Dec4CVNgP5GAZQAQk50cco%2B52Wtu8%2BHxpxhNH0yT5qOOQ6Wfd6EseZcnKLo7%2B2D%2F3HSiE%2B%2Fg4MyqLnA%2BmdlYoCjui%2FclX%2FIx9vZJ6w6abpa%2F8OREtPJvC4cXqGcEG2hXvc6XlYu92TFSCwbLvb6EKsQ0ez4UNGtGZEiisPA6qYwuJ2avgY6pgGqO8zIyLjwZKT%2F%2FL7xAqcZHlNjE8mElu0HN%2BULdCNp0ZIfSJnfWsEOrs6fPkyIdw6Uqoz7d4khCAs1uQQRFtaMSyWp%2Fy6Rb1EAJYpzUVt7UjqoOInBSy6oTR4fGxGwl3ZokvwlaKeZJSWXjq0As3OkBoVUTO2n6RLcvEAQ5MveC%2FKHWFZnInm3hFyRFQ9qI9IshYEY%2FokSAppf%2FZE6Us3Rmx4Z4ekj&X-Amz-Signature=221876f717fb263754fc47520ff512592814b76504cb5a8654231a5daabb3ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOW46T5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLAyH1sAFECPJaM327xjns43n6T8OOR2eGxNK%2BUDx3nAiAu1QWpcTf8mFAhWXm5cnaqm8OhDb%2BXdiApA148WEmG%2BSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCU1IgDpoVIxmBG1KtwDeh1PtuiH7zJZxuH9XXKgR9t21cF7p%2FIk5m0b%2BHNzNTBWxZejc0aBG9ETurI%2BDl1dTP5vun43kpgRAG67EpqH2nIRpvjc8chnFr1pSA85wWLaX2tEVOhMOXP7HbRhzQbp4gDlSEY8sgm4kLGJnhRQe2dctbc0txdCgg%2BX%2BQbHRXK4KZ9HodWStauZWgStphtyCl%2FOmCyYYaaa4Ox8i48bcoLdj8M%2F1q%2FbUJ%2BMxssCoQSJoFxP94mX%2BNTePirdl3Bd2uT5sS5YpoDod%2FNRp3NDeTY8hD%2BvWAXfXH27RaRM4PAS0t%2B19oqr2rFZH%2FJbKhQvYLLSTI08coG4%2FolzP%2Bk5GIzPi9FddJ%2BTscNEun%2FZwW5CnBSvkR4jAzsbPY3Js%2FqxbzeKp4xtGnamXD1rDrb4A9%2B6hLX7llsAQJox00oZjZjPn0DF%2BLU9Rq0fENE77rHW8%2FFINFr7WKBuNn6e8Dec4CVNgP5GAZQAQk50cco%2B52Wtu8%2BHxpxhNH0yT5qOOQ6Wfd6EseZcnKLo7%2B2D%2F3HSiE%2B%2Fg4MyqLnA%2BmdlYoCjui%2FclX%2FIx9vZJ6w6abpa%2F8OREtPJvC4cXqGcEG2hXvc6XlYu92TFSCwbLvb6EKsQ0ez4UNGtGZEiisPA6qYwuJ2avgY6pgGqO8zIyLjwZKT%2F%2FL7xAqcZHlNjE8mElu0HN%2BULdCNp0ZIfSJnfWsEOrs6fPkyIdw6Uqoz7d4khCAs1uQQRFtaMSyWp%2Fy6Rb1EAJYpzUVt7UjqoOInBSy6oTR4fGxGwl3ZokvwlaKeZJSWXjq0As3OkBoVUTO2n6RLcvEAQ5MveC%2FKHWFZnInm3hFyRFQ9qI9IshYEY%2FokSAppf%2FZE6Us3Rmx4Z4ekj&X-Amz-Signature=af97d94e42514ddd01be7f66808b82310e4bb0b025e4ab684490ab66e88a5cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOW46T5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLAyH1sAFECPJaM327xjns43n6T8OOR2eGxNK%2BUDx3nAiAu1QWpcTf8mFAhWXm5cnaqm8OhDb%2BXdiApA148WEmG%2BSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCU1IgDpoVIxmBG1KtwDeh1PtuiH7zJZxuH9XXKgR9t21cF7p%2FIk5m0b%2BHNzNTBWxZejc0aBG9ETurI%2BDl1dTP5vun43kpgRAG67EpqH2nIRpvjc8chnFr1pSA85wWLaX2tEVOhMOXP7HbRhzQbp4gDlSEY8sgm4kLGJnhRQe2dctbc0txdCgg%2BX%2BQbHRXK4KZ9HodWStauZWgStphtyCl%2FOmCyYYaaa4Ox8i48bcoLdj8M%2F1q%2FbUJ%2BMxssCoQSJoFxP94mX%2BNTePirdl3Bd2uT5sS5YpoDod%2FNRp3NDeTY8hD%2BvWAXfXH27RaRM4PAS0t%2B19oqr2rFZH%2FJbKhQvYLLSTI08coG4%2FolzP%2Bk5GIzPi9FddJ%2BTscNEun%2FZwW5CnBSvkR4jAzsbPY3Js%2FqxbzeKp4xtGnamXD1rDrb4A9%2B6hLX7llsAQJox00oZjZjPn0DF%2BLU9Rq0fENE77rHW8%2FFINFr7WKBuNn6e8Dec4CVNgP5GAZQAQk50cco%2B52Wtu8%2BHxpxhNH0yT5qOOQ6Wfd6EseZcnKLo7%2B2D%2F3HSiE%2B%2Fg4MyqLnA%2BmdlYoCjui%2FclX%2FIx9vZJ6w6abpa%2F8OREtPJvC4cXqGcEG2hXvc6XlYu92TFSCwbLvb6EKsQ0ez4UNGtGZEiisPA6qYwuJ2avgY6pgGqO8zIyLjwZKT%2F%2FL7xAqcZHlNjE8mElu0HN%2BULdCNp0ZIfSJnfWsEOrs6fPkyIdw6Uqoz7d4khCAs1uQQRFtaMSyWp%2Fy6Rb1EAJYpzUVt7UjqoOInBSy6oTR4fGxGwl3ZokvwlaKeZJSWXjq0As3OkBoVUTO2n6RLcvEAQ5MveC%2FKHWFZnInm3hFyRFQ9qI9IshYEY%2FokSAppf%2FZE6Us3Rmx4Z4ekj&X-Amz-Signature=c30408e5bed773e1b8bc6b4495e473d838123299ef2100e275237cc6a8b16733&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOW46T5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLAyH1sAFECPJaM327xjns43n6T8OOR2eGxNK%2BUDx3nAiAu1QWpcTf8mFAhWXm5cnaqm8OhDb%2BXdiApA148WEmG%2BSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCU1IgDpoVIxmBG1KtwDeh1PtuiH7zJZxuH9XXKgR9t21cF7p%2FIk5m0b%2BHNzNTBWxZejc0aBG9ETurI%2BDl1dTP5vun43kpgRAG67EpqH2nIRpvjc8chnFr1pSA85wWLaX2tEVOhMOXP7HbRhzQbp4gDlSEY8sgm4kLGJnhRQe2dctbc0txdCgg%2BX%2BQbHRXK4KZ9HodWStauZWgStphtyCl%2FOmCyYYaaa4Ox8i48bcoLdj8M%2F1q%2FbUJ%2BMxssCoQSJoFxP94mX%2BNTePirdl3Bd2uT5sS5YpoDod%2FNRp3NDeTY8hD%2BvWAXfXH27RaRM4PAS0t%2B19oqr2rFZH%2FJbKhQvYLLSTI08coG4%2FolzP%2Bk5GIzPi9FddJ%2BTscNEun%2FZwW5CnBSvkR4jAzsbPY3Js%2FqxbzeKp4xtGnamXD1rDrb4A9%2B6hLX7llsAQJox00oZjZjPn0DF%2BLU9Rq0fENE77rHW8%2FFINFr7WKBuNn6e8Dec4CVNgP5GAZQAQk50cco%2B52Wtu8%2BHxpxhNH0yT5qOOQ6Wfd6EseZcnKLo7%2B2D%2F3HSiE%2B%2Fg4MyqLnA%2BmdlYoCjui%2FclX%2FIx9vZJ6w6abpa%2F8OREtPJvC4cXqGcEG2hXvc6XlYu92TFSCwbLvb6EKsQ0ez4UNGtGZEiisPA6qYwuJ2avgY6pgGqO8zIyLjwZKT%2F%2FL7xAqcZHlNjE8mElu0HN%2BULdCNp0ZIfSJnfWsEOrs6fPkyIdw6Uqoz7d4khCAs1uQQRFtaMSyWp%2Fy6Rb1EAJYpzUVt7UjqoOInBSy6oTR4fGxGwl3ZokvwlaKeZJSWXjq0As3OkBoVUTO2n6RLcvEAQ5MveC%2FKHWFZnInm3hFyRFQ9qI9IshYEY%2FokSAppf%2FZE6Us3Rmx4Z4ekj&X-Amz-Signature=cd536c79616f5dc18dc92615b6dcc60f098c567fa882ec287ce0e0d4a22d832f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
