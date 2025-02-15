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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJORHK3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJjvkDNPXtOYXaHUqT6TOZNwoAOEg7Wr65dUCtsJrscgIhAKDmKwzY0m6MFgAtd0mx7yzlZRSrkXU7d5e%2B4I%2BjbcPhKv8DCD8QABoMNjM3NDIzMTgzODA1IgyISRkd%2FAYaGeWrBwEq3AMRFgpqQkGltJbtIHerkHtjQS1YfJz9uDDfFqJl1DIpOSU5llIt5rZaewAZ92t9eaUIZ9%2BBPkijOa2stGTm92tBC%2Bdz9OICmwkGGOZ3tqZu0fl80nK%2B9w9sG3GH%2BqssFrP66Q0GVmt7wl70k6aFC6IXhJJ%2Fg3aPBbOKJbfI%2BFemoWqFrpTnnpzsZeVIQZwLi4Tw%2FL50WzP9uBdO5S8kPyZkbQpcgwlWIhue%2FaI3zCgAcKiGUrlMsfDyf55o%2B0Z%2F4WkzRN3npE3zY9AInBH%2F8OXN6139gGFBzQt4NiIDRIY41q7yAP1HrTkyoUGnzBLcfIf%2Blnz4Ew13ghKNwclN35eAo19zuhOtzoX8Q5yb4kFF3zkp2Q4htISa1JEv1GJzSpELtgaWA8siayf2I9QJVha0D28mOj%2BWkIPhVEXpuvSiZGdG19ioinyW%2B3Tli7AONaiDGk6%2FjXIGI1Ve7zIwK0TOkilJJRbP2sBhr4oZX5ecmf%2BGXxGerEKnfG6LvGlCFtEVot08t72EekOa6bOxDV9CTPpA%2FK%2F5MprhNpzEvyCkKxTJokn7dwg2QywUO8sjIDeOmMAuYkZXr5XET2w4CfUVV4Gc9xiEQvCKkNkN9lEltfxtSCJIe9HySSN70TCg6cC9BjqkAUjIcbsW0uBhc7l5Q%2FOdeo6TcR2WeaYTZuXP79FtdOmzH6CL5OugettSGM55dAQ10LHFUix4xvHJhVHzwwICaP5dYs5jIcoZ5isP3Ib%2FiaFk4wPowh4FulEhENUE4PkTx7EErN3UJa3GQSEiJFkTGDzeH%2BbgtrjY5Z0v%2BwFHou5T18Sn3u7idyHr2TojB8P6z0yJVM0zPgqspDQeaUtN5N3UDpCL&X-Amz-Signature=141ebaf6bab1133f6f1d4e14a2441c0f0664cd6d3ece74e1c65bcb6845679fc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJORHK3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJjvkDNPXtOYXaHUqT6TOZNwoAOEg7Wr65dUCtsJrscgIhAKDmKwzY0m6MFgAtd0mx7yzlZRSrkXU7d5e%2B4I%2BjbcPhKv8DCD8QABoMNjM3NDIzMTgzODA1IgyISRkd%2FAYaGeWrBwEq3AMRFgpqQkGltJbtIHerkHtjQS1YfJz9uDDfFqJl1DIpOSU5llIt5rZaewAZ92t9eaUIZ9%2BBPkijOa2stGTm92tBC%2Bdz9OICmwkGGOZ3tqZu0fl80nK%2B9w9sG3GH%2BqssFrP66Q0GVmt7wl70k6aFC6IXhJJ%2Fg3aPBbOKJbfI%2BFemoWqFrpTnnpzsZeVIQZwLi4Tw%2FL50WzP9uBdO5S8kPyZkbQpcgwlWIhue%2FaI3zCgAcKiGUrlMsfDyf55o%2B0Z%2F4WkzRN3npE3zY9AInBH%2F8OXN6139gGFBzQt4NiIDRIY41q7yAP1HrTkyoUGnzBLcfIf%2Blnz4Ew13ghKNwclN35eAo19zuhOtzoX8Q5yb4kFF3zkp2Q4htISa1JEv1GJzSpELtgaWA8siayf2I9QJVha0D28mOj%2BWkIPhVEXpuvSiZGdG19ioinyW%2B3Tli7AONaiDGk6%2FjXIGI1Ve7zIwK0TOkilJJRbP2sBhr4oZX5ecmf%2BGXxGerEKnfG6LvGlCFtEVot08t72EekOa6bOxDV9CTPpA%2FK%2F5MprhNpzEvyCkKxTJokn7dwg2QywUO8sjIDeOmMAuYkZXr5XET2w4CfUVV4Gc9xiEQvCKkNkN9lEltfxtSCJIe9HySSN70TCg6cC9BjqkAUjIcbsW0uBhc7l5Q%2FOdeo6TcR2WeaYTZuXP79FtdOmzH6CL5OugettSGM55dAQ10LHFUix4xvHJhVHzwwICaP5dYs5jIcoZ5isP3Ib%2FiaFk4wPowh4FulEhENUE4PkTx7EErN3UJa3GQSEiJFkTGDzeH%2BbgtrjY5Z0v%2BwFHou5T18Sn3u7idyHr2TojB8P6z0yJVM0zPgqspDQeaUtN5N3UDpCL&X-Amz-Signature=7f2e2e097a9cc795cb7e3931e76ea75fce3a40972df099da428add471ca55e8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJORHK3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJjvkDNPXtOYXaHUqT6TOZNwoAOEg7Wr65dUCtsJrscgIhAKDmKwzY0m6MFgAtd0mx7yzlZRSrkXU7d5e%2B4I%2BjbcPhKv8DCD8QABoMNjM3NDIzMTgzODA1IgyISRkd%2FAYaGeWrBwEq3AMRFgpqQkGltJbtIHerkHtjQS1YfJz9uDDfFqJl1DIpOSU5llIt5rZaewAZ92t9eaUIZ9%2BBPkijOa2stGTm92tBC%2Bdz9OICmwkGGOZ3tqZu0fl80nK%2B9w9sG3GH%2BqssFrP66Q0GVmt7wl70k6aFC6IXhJJ%2Fg3aPBbOKJbfI%2BFemoWqFrpTnnpzsZeVIQZwLi4Tw%2FL50WzP9uBdO5S8kPyZkbQpcgwlWIhue%2FaI3zCgAcKiGUrlMsfDyf55o%2B0Z%2F4WkzRN3npE3zY9AInBH%2F8OXN6139gGFBzQt4NiIDRIY41q7yAP1HrTkyoUGnzBLcfIf%2Blnz4Ew13ghKNwclN35eAo19zuhOtzoX8Q5yb4kFF3zkp2Q4htISa1JEv1GJzSpELtgaWA8siayf2I9QJVha0D28mOj%2BWkIPhVEXpuvSiZGdG19ioinyW%2B3Tli7AONaiDGk6%2FjXIGI1Ve7zIwK0TOkilJJRbP2sBhr4oZX5ecmf%2BGXxGerEKnfG6LvGlCFtEVot08t72EekOa6bOxDV9CTPpA%2FK%2F5MprhNpzEvyCkKxTJokn7dwg2QywUO8sjIDeOmMAuYkZXr5XET2w4CfUVV4Gc9xiEQvCKkNkN9lEltfxtSCJIe9HySSN70TCg6cC9BjqkAUjIcbsW0uBhc7l5Q%2FOdeo6TcR2WeaYTZuXP79FtdOmzH6CL5OugettSGM55dAQ10LHFUix4xvHJhVHzwwICaP5dYs5jIcoZ5isP3Ib%2FiaFk4wPowh4FulEhENUE4PkTx7EErN3UJa3GQSEiJFkTGDzeH%2BbgtrjY5Z0v%2BwFHou5T18Sn3u7idyHr2TojB8P6z0yJVM0zPgqspDQeaUtN5N3UDpCL&X-Amz-Signature=0f4b72c6ff875e8d9a4f352c9d3f3e1d01f68816aa6dc58fa0c48eb67fe81cd8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJORHK3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJjvkDNPXtOYXaHUqT6TOZNwoAOEg7Wr65dUCtsJrscgIhAKDmKwzY0m6MFgAtd0mx7yzlZRSrkXU7d5e%2B4I%2BjbcPhKv8DCD8QABoMNjM3NDIzMTgzODA1IgyISRkd%2FAYaGeWrBwEq3AMRFgpqQkGltJbtIHerkHtjQS1YfJz9uDDfFqJl1DIpOSU5llIt5rZaewAZ92t9eaUIZ9%2BBPkijOa2stGTm92tBC%2Bdz9OICmwkGGOZ3tqZu0fl80nK%2B9w9sG3GH%2BqssFrP66Q0GVmt7wl70k6aFC6IXhJJ%2Fg3aPBbOKJbfI%2BFemoWqFrpTnnpzsZeVIQZwLi4Tw%2FL50WzP9uBdO5S8kPyZkbQpcgwlWIhue%2FaI3zCgAcKiGUrlMsfDyf55o%2B0Z%2F4WkzRN3npE3zY9AInBH%2F8OXN6139gGFBzQt4NiIDRIY41q7yAP1HrTkyoUGnzBLcfIf%2Blnz4Ew13ghKNwclN35eAo19zuhOtzoX8Q5yb4kFF3zkp2Q4htISa1JEv1GJzSpELtgaWA8siayf2I9QJVha0D28mOj%2BWkIPhVEXpuvSiZGdG19ioinyW%2B3Tli7AONaiDGk6%2FjXIGI1Ve7zIwK0TOkilJJRbP2sBhr4oZX5ecmf%2BGXxGerEKnfG6LvGlCFtEVot08t72EekOa6bOxDV9CTPpA%2FK%2F5MprhNpzEvyCkKxTJokn7dwg2QywUO8sjIDeOmMAuYkZXr5XET2w4CfUVV4Gc9xiEQvCKkNkN9lEltfxtSCJIe9HySSN70TCg6cC9BjqkAUjIcbsW0uBhc7l5Q%2FOdeo6TcR2WeaYTZuXP79FtdOmzH6CL5OugettSGM55dAQ10LHFUix4xvHJhVHzwwICaP5dYs5jIcoZ5isP3Ib%2FiaFk4wPowh4FulEhENUE4PkTx7EErN3UJa3GQSEiJFkTGDzeH%2BbgtrjY5Z0v%2BwFHou5T18Sn3u7idyHr2TojB8P6z0yJVM0zPgqspDQeaUtN5N3UDpCL&X-Amz-Signature=038a0b8ce4f955ac5dce7f51d1fa80f2484c9ef3207e8e162a27ddeb0a82e8d8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJORHK3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJjvkDNPXtOYXaHUqT6TOZNwoAOEg7Wr65dUCtsJrscgIhAKDmKwzY0m6MFgAtd0mx7yzlZRSrkXU7d5e%2B4I%2BjbcPhKv8DCD8QABoMNjM3NDIzMTgzODA1IgyISRkd%2FAYaGeWrBwEq3AMRFgpqQkGltJbtIHerkHtjQS1YfJz9uDDfFqJl1DIpOSU5llIt5rZaewAZ92t9eaUIZ9%2BBPkijOa2stGTm92tBC%2Bdz9OICmwkGGOZ3tqZu0fl80nK%2B9w9sG3GH%2BqssFrP66Q0GVmt7wl70k6aFC6IXhJJ%2Fg3aPBbOKJbfI%2BFemoWqFrpTnnpzsZeVIQZwLi4Tw%2FL50WzP9uBdO5S8kPyZkbQpcgwlWIhue%2FaI3zCgAcKiGUrlMsfDyf55o%2B0Z%2F4WkzRN3npE3zY9AInBH%2F8OXN6139gGFBzQt4NiIDRIY41q7yAP1HrTkyoUGnzBLcfIf%2Blnz4Ew13ghKNwclN35eAo19zuhOtzoX8Q5yb4kFF3zkp2Q4htISa1JEv1GJzSpELtgaWA8siayf2I9QJVha0D28mOj%2BWkIPhVEXpuvSiZGdG19ioinyW%2B3Tli7AONaiDGk6%2FjXIGI1Ve7zIwK0TOkilJJRbP2sBhr4oZX5ecmf%2BGXxGerEKnfG6LvGlCFtEVot08t72EekOa6bOxDV9CTPpA%2FK%2F5MprhNpzEvyCkKxTJokn7dwg2QywUO8sjIDeOmMAuYkZXr5XET2w4CfUVV4Gc9xiEQvCKkNkN9lEltfxtSCJIe9HySSN70TCg6cC9BjqkAUjIcbsW0uBhc7l5Q%2FOdeo6TcR2WeaYTZuXP79FtdOmzH6CL5OugettSGM55dAQ10LHFUix4xvHJhVHzwwICaP5dYs5jIcoZ5isP3Ib%2FiaFk4wPowh4FulEhENUE4PkTx7EErN3UJa3GQSEiJFkTGDzeH%2BbgtrjY5Z0v%2BwFHou5T18Sn3u7idyHr2TojB8P6z0yJVM0zPgqspDQeaUtN5N3UDpCL&X-Amz-Signature=9e003c38bb8cf5f0c96860840f059f5009f048be39ddbd30e5cbeecc851c55f6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJORHK3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJjvkDNPXtOYXaHUqT6TOZNwoAOEg7Wr65dUCtsJrscgIhAKDmKwzY0m6MFgAtd0mx7yzlZRSrkXU7d5e%2B4I%2BjbcPhKv8DCD8QABoMNjM3NDIzMTgzODA1IgyISRkd%2FAYaGeWrBwEq3AMRFgpqQkGltJbtIHerkHtjQS1YfJz9uDDfFqJl1DIpOSU5llIt5rZaewAZ92t9eaUIZ9%2BBPkijOa2stGTm92tBC%2Bdz9OICmwkGGOZ3tqZu0fl80nK%2B9w9sG3GH%2BqssFrP66Q0GVmt7wl70k6aFC6IXhJJ%2Fg3aPBbOKJbfI%2BFemoWqFrpTnnpzsZeVIQZwLi4Tw%2FL50WzP9uBdO5S8kPyZkbQpcgwlWIhue%2FaI3zCgAcKiGUrlMsfDyf55o%2B0Z%2F4WkzRN3npE3zY9AInBH%2F8OXN6139gGFBzQt4NiIDRIY41q7yAP1HrTkyoUGnzBLcfIf%2Blnz4Ew13ghKNwclN35eAo19zuhOtzoX8Q5yb4kFF3zkp2Q4htISa1JEv1GJzSpELtgaWA8siayf2I9QJVha0D28mOj%2BWkIPhVEXpuvSiZGdG19ioinyW%2B3Tli7AONaiDGk6%2FjXIGI1Ve7zIwK0TOkilJJRbP2sBhr4oZX5ecmf%2BGXxGerEKnfG6LvGlCFtEVot08t72EekOa6bOxDV9CTPpA%2FK%2F5MprhNpzEvyCkKxTJokn7dwg2QywUO8sjIDeOmMAuYkZXr5XET2w4CfUVV4Gc9xiEQvCKkNkN9lEltfxtSCJIe9HySSN70TCg6cC9BjqkAUjIcbsW0uBhc7l5Q%2FOdeo6TcR2WeaYTZuXP79FtdOmzH6CL5OugettSGM55dAQ10LHFUix4xvHJhVHzwwICaP5dYs5jIcoZ5isP3Ib%2FiaFk4wPowh4FulEhENUE4PkTx7EErN3UJa3GQSEiJFkTGDzeH%2BbgtrjY5Z0v%2BwFHou5T18Sn3u7idyHr2TojB8P6z0yJVM0zPgqspDQeaUtN5N3UDpCL&X-Amz-Signature=9d0a5004ff899f5de297b134144e4f8a146894038d7020181645bd6c65e30349&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJORHK3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJjvkDNPXtOYXaHUqT6TOZNwoAOEg7Wr65dUCtsJrscgIhAKDmKwzY0m6MFgAtd0mx7yzlZRSrkXU7d5e%2B4I%2BjbcPhKv8DCD8QABoMNjM3NDIzMTgzODA1IgyISRkd%2FAYaGeWrBwEq3AMRFgpqQkGltJbtIHerkHtjQS1YfJz9uDDfFqJl1DIpOSU5llIt5rZaewAZ92t9eaUIZ9%2BBPkijOa2stGTm92tBC%2Bdz9OICmwkGGOZ3tqZu0fl80nK%2B9w9sG3GH%2BqssFrP66Q0GVmt7wl70k6aFC6IXhJJ%2Fg3aPBbOKJbfI%2BFemoWqFrpTnnpzsZeVIQZwLi4Tw%2FL50WzP9uBdO5S8kPyZkbQpcgwlWIhue%2FaI3zCgAcKiGUrlMsfDyf55o%2B0Z%2F4WkzRN3npE3zY9AInBH%2F8OXN6139gGFBzQt4NiIDRIY41q7yAP1HrTkyoUGnzBLcfIf%2Blnz4Ew13ghKNwclN35eAo19zuhOtzoX8Q5yb4kFF3zkp2Q4htISa1JEv1GJzSpELtgaWA8siayf2I9QJVha0D28mOj%2BWkIPhVEXpuvSiZGdG19ioinyW%2B3Tli7AONaiDGk6%2FjXIGI1Ve7zIwK0TOkilJJRbP2sBhr4oZX5ecmf%2BGXxGerEKnfG6LvGlCFtEVot08t72EekOa6bOxDV9CTPpA%2FK%2F5MprhNpzEvyCkKxTJokn7dwg2QywUO8sjIDeOmMAuYkZXr5XET2w4CfUVV4Gc9xiEQvCKkNkN9lEltfxtSCJIe9HySSN70TCg6cC9BjqkAUjIcbsW0uBhc7l5Q%2FOdeo6TcR2WeaYTZuXP79FtdOmzH6CL5OugettSGM55dAQ10LHFUix4xvHJhVHzwwICaP5dYs5jIcoZ5isP3Ib%2FiaFk4wPowh4FulEhENUE4PkTx7EErN3UJa3GQSEiJFkTGDzeH%2BbgtrjY5Z0v%2BwFHou5T18Sn3u7idyHr2TojB8P6z0yJVM0zPgqspDQeaUtN5N3UDpCL&X-Amz-Signature=fd160190e95dcb572336deee751145f31b9e900c2b4b78ec5334a6e1e3fcc379&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
