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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7XV6WM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEH0GucZfmQ1M488FM%2FHEgp5QdFTmzJRlYNVLToVG8kOAiBiJQffQEIvcWz1kmqgbR5Hnz4tPZ%2FpIkj2ExLdWF%2B6ByqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpNGoc0XeQCEzFtZKtwDI7LKtZQtZJRf%2BGsp9TD1cz1vaqmu9CmsWsC6jc0B83a7HFlsG1qhBkEQS%2FigoMLJN9d%2F4qb%2BfO3T44GHKF%2Bvvd8kX9d6UL17AG2p9NItBO2CMOFOqE7JuV2y%2FEE9hI84tPrgMh65qKgDIw9UyW6SZwNX7u71FtlGm2KOGoiSt8L96O%2BDWJ59Ll3%2B4FQK2Ba5WRVWCba7xw%2Fx1DZf9HiLvMfzBGkSlEP%2F2yzotK9Tu6HmnY4a1X7GupXWrzO8Pa6cqU%2FdzN6EgcLtkEdXfYxBJJZdfR7pueVXG1J%2BUMD7tVLNkfS4xt99ZL96rN02zXiS5GQxLr%2B0RZKnnz8TZBLvPFgTAvSLChvKZZDgMstyJ3Q2PEtjXk9%2F5Bt5oepdr3lbVQ3mfase8Dz3CPyc9wKkfEGaQ0yGnsXsDKPaI9poeSLjGQWJEleXF671xckriAj8ptf9svDlAk23MqMJavKucbFCT%2Bj7hPTA0Dk%2FpPmdeQIywhmsjSqLHE7LEH35%2FvP8Y5mSjOsVmbRE0VWFUrygdJeBn3dq4dh629gxRkVxOaTKvw8okclOSem%2BDNdAQZvilb1pgHrsH7H1KOVJLBz7icVKGY5yQxjYwslo1hQl7gDnWq4rswwdIRdBdSQw3YzBwQY6pgHy7hF1Kn4g4kFsr6f1AK6CwcxlYVsYWsFuZKGu5Jgt4QENN9LOd8VGppVGySSzV5eaGJpWuGdhyZGULX%2FRFwS%2FetvbV%2FTCNtVTYYe7ZLpLPxFHxL4ZtwRr%2BHyNUp3VtrMz2Mzg88EiNCeIcMmJoWFzi5OlgV%2BoQ76zfvIIwUJ0oz4FvZLZQsGjKY8YpsPYkT4lEgiRoYYM890v6GXN1Nm7Jv2wwRGe&X-Amz-Signature=510e487d47c659a28f2921207b0fb172c2e73897020b8ead34cd7d758731ade8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7XV6WM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEH0GucZfmQ1M488FM%2FHEgp5QdFTmzJRlYNVLToVG8kOAiBiJQffQEIvcWz1kmqgbR5Hnz4tPZ%2FpIkj2ExLdWF%2B6ByqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpNGoc0XeQCEzFtZKtwDI7LKtZQtZJRf%2BGsp9TD1cz1vaqmu9CmsWsC6jc0B83a7HFlsG1qhBkEQS%2FigoMLJN9d%2F4qb%2BfO3T44GHKF%2Bvvd8kX9d6UL17AG2p9NItBO2CMOFOqE7JuV2y%2FEE9hI84tPrgMh65qKgDIw9UyW6SZwNX7u71FtlGm2KOGoiSt8L96O%2BDWJ59Ll3%2B4FQK2Ba5WRVWCba7xw%2Fx1DZf9HiLvMfzBGkSlEP%2F2yzotK9Tu6HmnY4a1X7GupXWrzO8Pa6cqU%2FdzN6EgcLtkEdXfYxBJJZdfR7pueVXG1J%2BUMD7tVLNkfS4xt99ZL96rN02zXiS5GQxLr%2B0RZKnnz8TZBLvPFgTAvSLChvKZZDgMstyJ3Q2PEtjXk9%2F5Bt5oepdr3lbVQ3mfase8Dz3CPyc9wKkfEGaQ0yGnsXsDKPaI9poeSLjGQWJEleXF671xckriAj8ptf9svDlAk23MqMJavKucbFCT%2Bj7hPTA0Dk%2FpPmdeQIywhmsjSqLHE7LEH35%2FvP8Y5mSjOsVmbRE0VWFUrygdJeBn3dq4dh629gxRkVxOaTKvw8okclOSem%2BDNdAQZvilb1pgHrsH7H1KOVJLBz7icVKGY5yQxjYwslo1hQl7gDnWq4rswwdIRdBdSQw3YzBwQY6pgHy7hF1Kn4g4kFsr6f1AK6CwcxlYVsYWsFuZKGu5Jgt4QENN9LOd8VGppVGySSzV5eaGJpWuGdhyZGULX%2FRFwS%2FetvbV%2FTCNtVTYYe7ZLpLPxFHxL4ZtwRr%2BHyNUp3VtrMz2Mzg88EiNCeIcMmJoWFzi5OlgV%2BoQ76zfvIIwUJ0oz4FvZLZQsGjKY8YpsPYkT4lEgiRoYYM890v6GXN1Nm7Jv2wwRGe&X-Amz-Signature=0b5cd19250788a4fa180182e4a0ceef820b051202fff1c4f02318ac79e200086&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7XV6WM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEH0GucZfmQ1M488FM%2FHEgp5QdFTmzJRlYNVLToVG8kOAiBiJQffQEIvcWz1kmqgbR5Hnz4tPZ%2FpIkj2ExLdWF%2B6ByqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpNGoc0XeQCEzFtZKtwDI7LKtZQtZJRf%2BGsp9TD1cz1vaqmu9CmsWsC6jc0B83a7HFlsG1qhBkEQS%2FigoMLJN9d%2F4qb%2BfO3T44GHKF%2Bvvd8kX9d6UL17AG2p9NItBO2CMOFOqE7JuV2y%2FEE9hI84tPrgMh65qKgDIw9UyW6SZwNX7u71FtlGm2KOGoiSt8L96O%2BDWJ59Ll3%2B4FQK2Ba5WRVWCba7xw%2Fx1DZf9HiLvMfzBGkSlEP%2F2yzotK9Tu6HmnY4a1X7GupXWrzO8Pa6cqU%2FdzN6EgcLtkEdXfYxBJJZdfR7pueVXG1J%2BUMD7tVLNkfS4xt99ZL96rN02zXiS5GQxLr%2B0RZKnnz8TZBLvPFgTAvSLChvKZZDgMstyJ3Q2PEtjXk9%2F5Bt5oepdr3lbVQ3mfase8Dz3CPyc9wKkfEGaQ0yGnsXsDKPaI9poeSLjGQWJEleXF671xckriAj8ptf9svDlAk23MqMJavKucbFCT%2Bj7hPTA0Dk%2FpPmdeQIywhmsjSqLHE7LEH35%2FvP8Y5mSjOsVmbRE0VWFUrygdJeBn3dq4dh629gxRkVxOaTKvw8okclOSem%2BDNdAQZvilb1pgHrsH7H1KOVJLBz7icVKGY5yQxjYwslo1hQl7gDnWq4rswwdIRdBdSQw3YzBwQY6pgHy7hF1Kn4g4kFsr6f1AK6CwcxlYVsYWsFuZKGu5Jgt4QENN9LOd8VGppVGySSzV5eaGJpWuGdhyZGULX%2FRFwS%2FetvbV%2FTCNtVTYYe7ZLpLPxFHxL4ZtwRr%2BHyNUp3VtrMz2Mzg88EiNCeIcMmJoWFzi5OlgV%2BoQ76zfvIIwUJ0oz4FvZLZQsGjKY8YpsPYkT4lEgiRoYYM890v6GXN1Nm7Jv2wwRGe&X-Amz-Signature=91e014ae2165ebc16ebb038ed7c19ed8627ff90952ba782f414790ef571476b3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7XV6WM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEH0GucZfmQ1M488FM%2FHEgp5QdFTmzJRlYNVLToVG8kOAiBiJQffQEIvcWz1kmqgbR5Hnz4tPZ%2FpIkj2ExLdWF%2B6ByqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpNGoc0XeQCEzFtZKtwDI7LKtZQtZJRf%2BGsp9TD1cz1vaqmu9CmsWsC6jc0B83a7HFlsG1qhBkEQS%2FigoMLJN9d%2F4qb%2BfO3T44GHKF%2Bvvd8kX9d6UL17AG2p9NItBO2CMOFOqE7JuV2y%2FEE9hI84tPrgMh65qKgDIw9UyW6SZwNX7u71FtlGm2KOGoiSt8L96O%2BDWJ59Ll3%2B4FQK2Ba5WRVWCba7xw%2Fx1DZf9HiLvMfzBGkSlEP%2F2yzotK9Tu6HmnY4a1X7GupXWrzO8Pa6cqU%2FdzN6EgcLtkEdXfYxBJJZdfR7pueVXG1J%2BUMD7tVLNkfS4xt99ZL96rN02zXiS5GQxLr%2B0RZKnnz8TZBLvPFgTAvSLChvKZZDgMstyJ3Q2PEtjXk9%2F5Bt5oepdr3lbVQ3mfase8Dz3CPyc9wKkfEGaQ0yGnsXsDKPaI9poeSLjGQWJEleXF671xckriAj8ptf9svDlAk23MqMJavKucbFCT%2Bj7hPTA0Dk%2FpPmdeQIywhmsjSqLHE7LEH35%2FvP8Y5mSjOsVmbRE0VWFUrygdJeBn3dq4dh629gxRkVxOaTKvw8okclOSem%2BDNdAQZvilb1pgHrsH7H1KOVJLBz7icVKGY5yQxjYwslo1hQl7gDnWq4rswwdIRdBdSQw3YzBwQY6pgHy7hF1Kn4g4kFsr6f1AK6CwcxlYVsYWsFuZKGu5Jgt4QENN9LOd8VGppVGySSzV5eaGJpWuGdhyZGULX%2FRFwS%2FetvbV%2FTCNtVTYYe7ZLpLPxFHxL4ZtwRr%2BHyNUp3VtrMz2Mzg88EiNCeIcMmJoWFzi5OlgV%2BoQ76zfvIIwUJ0oz4FvZLZQsGjKY8YpsPYkT4lEgiRoYYM890v6GXN1Nm7Jv2wwRGe&X-Amz-Signature=9ca90d1554497734bdb373d94fd74e1b8e3e7dfeab7ee1b94e5044052018f801&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7XV6WM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEH0GucZfmQ1M488FM%2FHEgp5QdFTmzJRlYNVLToVG8kOAiBiJQffQEIvcWz1kmqgbR5Hnz4tPZ%2FpIkj2ExLdWF%2B6ByqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpNGoc0XeQCEzFtZKtwDI7LKtZQtZJRf%2BGsp9TD1cz1vaqmu9CmsWsC6jc0B83a7HFlsG1qhBkEQS%2FigoMLJN9d%2F4qb%2BfO3T44GHKF%2Bvvd8kX9d6UL17AG2p9NItBO2CMOFOqE7JuV2y%2FEE9hI84tPrgMh65qKgDIw9UyW6SZwNX7u71FtlGm2KOGoiSt8L96O%2BDWJ59Ll3%2B4FQK2Ba5WRVWCba7xw%2Fx1DZf9HiLvMfzBGkSlEP%2F2yzotK9Tu6HmnY4a1X7GupXWrzO8Pa6cqU%2FdzN6EgcLtkEdXfYxBJJZdfR7pueVXG1J%2BUMD7tVLNkfS4xt99ZL96rN02zXiS5GQxLr%2B0RZKnnz8TZBLvPFgTAvSLChvKZZDgMstyJ3Q2PEtjXk9%2F5Bt5oepdr3lbVQ3mfase8Dz3CPyc9wKkfEGaQ0yGnsXsDKPaI9poeSLjGQWJEleXF671xckriAj8ptf9svDlAk23MqMJavKucbFCT%2Bj7hPTA0Dk%2FpPmdeQIywhmsjSqLHE7LEH35%2FvP8Y5mSjOsVmbRE0VWFUrygdJeBn3dq4dh629gxRkVxOaTKvw8okclOSem%2BDNdAQZvilb1pgHrsH7H1KOVJLBz7icVKGY5yQxjYwslo1hQl7gDnWq4rswwdIRdBdSQw3YzBwQY6pgHy7hF1Kn4g4kFsr6f1AK6CwcxlYVsYWsFuZKGu5Jgt4QENN9LOd8VGppVGySSzV5eaGJpWuGdhyZGULX%2FRFwS%2FetvbV%2FTCNtVTYYe7ZLpLPxFHxL4ZtwRr%2BHyNUp3VtrMz2Mzg88EiNCeIcMmJoWFzi5OlgV%2BoQ76zfvIIwUJ0oz4FvZLZQsGjKY8YpsPYkT4lEgiRoYYM890v6GXN1Nm7Jv2wwRGe&X-Amz-Signature=ba9cba070b51e5120891b4ec8f4aef467b81705556428f71bfd1a9de01f48ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7XV6WM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEH0GucZfmQ1M488FM%2FHEgp5QdFTmzJRlYNVLToVG8kOAiBiJQffQEIvcWz1kmqgbR5Hnz4tPZ%2FpIkj2ExLdWF%2B6ByqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpNGoc0XeQCEzFtZKtwDI7LKtZQtZJRf%2BGsp9TD1cz1vaqmu9CmsWsC6jc0B83a7HFlsG1qhBkEQS%2FigoMLJN9d%2F4qb%2BfO3T44GHKF%2Bvvd8kX9d6UL17AG2p9NItBO2CMOFOqE7JuV2y%2FEE9hI84tPrgMh65qKgDIw9UyW6SZwNX7u71FtlGm2KOGoiSt8L96O%2BDWJ59Ll3%2B4FQK2Ba5WRVWCba7xw%2Fx1DZf9HiLvMfzBGkSlEP%2F2yzotK9Tu6HmnY4a1X7GupXWrzO8Pa6cqU%2FdzN6EgcLtkEdXfYxBJJZdfR7pueVXG1J%2BUMD7tVLNkfS4xt99ZL96rN02zXiS5GQxLr%2B0RZKnnz8TZBLvPFgTAvSLChvKZZDgMstyJ3Q2PEtjXk9%2F5Bt5oepdr3lbVQ3mfase8Dz3CPyc9wKkfEGaQ0yGnsXsDKPaI9poeSLjGQWJEleXF671xckriAj8ptf9svDlAk23MqMJavKucbFCT%2Bj7hPTA0Dk%2FpPmdeQIywhmsjSqLHE7LEH35%2FvP8Y5mSjOsVmbRE0VWFUrygdJeBn3dq4dh629gxRkVxOaTKvw8okclOSem%2BDNdAQZvilb1pgHrsH7H1KOVJLBz7icVKGY5yQxjYwslo1hQl7gDnWq4rswwdIRdBdSQw3YzBwQY6pgHy7hF1Kn4g4kFsr6f1AK6CwcxlYVsYWsFuZKGu5Jgt4QENN9LOd8VGppVGySSzV5eaGJpWuGdhyZGULX%2FRFwS%2FetvbV%2FTCNtVTYYe7ZLpLPxFHxL4ZtwRr%2BHyNUp3VtrMz2Mzg88EiNCeIcMmJoWFzi5OlgV%2BoQ76zfvIIwUJ0oz4FvZLZQsGjKY8YpsPYkT4lEgiRoYYM890v6GXN1Nm7Jv2wwRGe&X-Amz-Signature=bcbb25618d2199630401f365c7f2b520146f347a5b2301e3a2e4aefe30d97461&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7XV6WM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEH0GucZfmQ1M488FM%2FHEgp5QdFTmzJRlYNVLToVG8kOAiBiJQffQEIvcWz1kmqgbR5Hnz4tPZ%2FpIkj2ExLdWF%2B6ByqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpNGoc0XeQCEzFtZKtwDI7LKtZQtZJRf%2BGsp9TD1cz1vaqmu9CmsWsC6jc0B83a7HFlsG1qhBkEQS%2FigoMLJN9d%2F4qb%2BfO3T44GHKF%2Bvvd8kX9d6UL17AG2p9NItBO2CMOFOqE7JuV2y%2FEE9hI84tPrgMh65qKgDIw9UyW6SZwNX7u71FtlGm2KOGoiSt8L96O%2BDWJ59Ll3%2B4FQK2Ba5WRVWCba7xw%2Fx1DZf9HiLvMfzBGkSlEP%2F2yzotK9Tu6HmnY4a1X7GupXWrzO8Pa6cqU%2FdzN6EgcLtkEdXfYxBJJZdfR7pueVXG1J%2BUMD7tVLNkfS4xt99ZL96rN02zXiS5GQxLr%2B0RZKnnz8TZBLvPFgTAvSLChvKZZDgMstyJ3Q2PEtjXk9%2F5Bt5oepdr3lbVQ3mfase8Dz3CPyc9wKkfEGaQ0yGnsXsDKPaI9poeSLjGQWJEleXF671xckriAj8ptf9svDlAk23MqMJavKucbFCT%2Bj7hPTA0Dk%2FpPmdeQIywhmsjSqLHE7LEH35%2FvP8Y5mSjOsVmbRE0VWFUrygdJeBn3dq4dh629gxRkVxOaTKvw8okclOSem%2BDNdAQZvilb1pgHrsH7H1KOVJLBz7icVKGY5yQxjYwslo1hQl7gDnWq4rswwdIRdBdSQw3YzBwQY6pgHy7hF1Kn4g4kFsr6f1AK6CwcxlYVsYWsFuZKGu5Jgt4QENN9LOd8VGppVGySSzV5eaGJpWuGdhyZGULX%2FRFwS%2FetvbV%2FTCNtVTYYe7ZLpLPxFHxL4ZtwRr%2BHyNUp3VtrMz2Mzg88EiNCeIcMmJoWFzi5OlgV%2BoQ76zfvIIwUJ0oz4FvZLZQsGjKY8YpsPYkT4lEgiRoYYM890v6GXN1Nm7Jv2wwRGe&X-Amz-Signature=f1cd87b84d843d259e4f182e02bc85cd385753a01c63727c7b134c7a7c49523c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
