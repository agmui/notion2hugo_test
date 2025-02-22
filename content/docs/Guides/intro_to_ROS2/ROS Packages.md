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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7OO6TAP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkU7DZaoXCqNPJLsl5zJehryNw%2FkoGeg6GWg%2BYaozoSAiBDC7ZgRPsCJXWIvDLeqhO%2F1T588sDgMuGDjSJAI5LPnCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJd%2BmZPGg50CTV%2BDKtwDzrDRx7BwjDjKruMOM%2BT9x3jovlFLQFC%2FqnGk6CLkcebrsUW1yAi%2BaBJjmStbZqLZ2ac4il%2F44JaPZ97bhZ41mLuj%2FkLhEED%2Fc%2Bpn3i%2BDTaOl3fv9rqBksc5vBXWLHUcpBtF4sgludm01DD1gnPhHi6fos%2Fsu0oL7vWkyPahBA1zuuUMudXhU6Q6Umsmfqegzpfuj1mFQ3lR62zp4kXMtYG%2BR%2F%2Bwe2HOiV89KKsZAuDYflKfXpByZ879Thzzxf48A1J79dRVKmszbXX0cWFF9SiaXQh%2FtwKHOKbNu%2Fxqhpma34XvvRObWmIGNlIuWl1HkDV4F7yeWdkSLHXpbMe8U2ozogFKD4XlCx3fevfVAL7KkBd%2Bm9eO%2FspBjKjs9kV6UXR%2FEk28yCWicqQtaNqDYli5pePicMvPR4TO0M8Xou%2F4FPFaLIDEhO8emeoJKkvaeknGEM2b4hs%2FpxvvEs3%2BQjw7tvE7TiMX2xnt7u%2BDS9P3XdDaWS1Cj7X4aiZX10q9Q990gfm7jg2joAmdQTFCw3AiYReUUAcL9gjeBVsUOCIm%2BXEfRGEfndMVPz0Wtpj743Q1sCZyw2WpdSFiRvSiChSRV2uhXoA9Bc2%2Faq7fx5%2BoxoAGAAWmBlxJKsQswo%2BnmvQY6pgHXa%2FfuBelLvZjcapEyU5EjM9rr6cg9ps1aar7bonGF8HzILLGpmEHrjb%2BYyUrHARQMCdb3wGG2hSlSO8K8A1RXzvwcR6N1vVFwXM8YH2VRItNJM1jrqGu5M4EGgp%2FRw%2B2E36qFgx2sBD1vjqKktkB%2FOexcjXLjibeGRzCELcF8diR6ZYwV2Q4csK5ViSjM%2Ff1UA7I1b3%2BmkTZby2Qzcv3aurmYyPIY&X-Amz-Signature=22e2e2d25d240e303ffae5934fa21bdaa1c894785803f465a4ae05c822235b59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7OO6TAP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkU7DZaoXCqNPJLsl5zJehryNw%2FkoGeg6GWg%2BYaozoSAiBDC7ZgRPsCJXWIvDLeqhO%2F1T588sDgMuGDjSJAI5LPnCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJd%2BmZPGg50CTV%2BDKtwDzrDRx7BwjDjKruMOM%2BT9x3jovlFLQFC%2FqnGk6CLkcebrsUW1yAi%2BaBJjmStbZqLZ2ac4il%2F44JaPZ97bhZ41mLuj%2FkLhEED%2Fc%2Bpn3i%2BDTaOl3fv9rqBksc5vBXWLHUcpBtF4sgludm01DD1gnPhHi6fos%2Fsu0oL7vWkyPahBA1zuuUMudXhU6Q6Umsmfqegzpfuj1mFQ3lR62zp4kXMtYG%2BR%2F%2Bwe2HOiV89KKsZAuDYflKfXpByZ879Thzzxf48A1J79dRVKmszbXX0cWFF9SiaXQh%2FtwKHOKbNu%2Fxqhpma34XvvRObWmIGNlIuWl1HkDV4F7yeWdkSLHXpbMe8U2ozogFKD4XlCx3fevfVAL7KkBd%2Bm9eO%2FspBjKjs9kV6UXR%2FEk28yCWicqQtaNqDYli5pePicMvPR4TO0M8Xou%2F4FPFaLIDEhO8emeoJKkvaeknGEM2b4hs%2FpxvvEs3%2BQjw7tvE7TiMX2xnt7u%2BDS9P3XdDaWS1Cj7X4aiZX10q9Q990gfm7jg2joAmdQTFCw3AiYReUUAcL9gjeBVsUOCIm%2BXEfRGEfndMVPz0Wtpj743Q1sCZyw2WpdSFiRvSiChSRV2uhXoA9Bc2%2Faq7fx5%2BoxoAGAAWmBlxJKsQswo%2BnmvQY6pgHXa%2FfuBelLvZjcapEyU5EjM9rr6cg9ps1aar7bonGF8HzILLGpmEHrjb%2BYyUrHARQMCdb3wGG2hSlSO8K8A1RXzvwcR6N1vVFwXM8YH2VRItNJM1jrqGu5M4EGgp%2FRw%2B2E36qFgx2sBD1vjqKktkB%2FOexcjXLjibeGRzCELcF8diR6ZYwV2Q4csK5ViSjM%2Ff1UA7I1b3%2BmkTZby2Qzcv3aurmYyPIY&X-Amz-Signature=2925e43ce2605dea09a7d727c5398841bc6f42aca42cafd5280a581eeb610198&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7OO6TAP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkU7DZaoXCqNPJLsl5zJehryNw%2FkoGeg6GWg%2BYaozoSAiBDC7ZgRPsCJXWIvDLeqhO%2F1T588sDgMuGDjSJAI5LPnCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJd%2BmZPGg50CTV%2BDKtwDzrDRx7BwjDjKruMOM%2BT9x3jovlFLQFC%2FqnGk6CLkcebrsUW1yAi%2BaBJjmStbZqLZ2ac4il%2F44JaPZ97bhZ41mLuj%2FkLhEED%2Fc%2Bpn3i%2BDTaOl3fv9rqBksc5vBXWLHUcpBtF4sgludm01DD1gnPhHi6fos%2Fsu0oL7vWkyPahBA1zuuUMudXhU6Q6Umsmfqegzpfuj1mFQ3lR62zp4kXMtYG%2BR%2F%2Bwe2HOiV89KKsZAuDYflKfXpByZ879Thzzxf48A1J79dRVKmszbXX0cWFF9SiaXQh%2FtwKHOKbNu%2Fxqhpma34XvvRObWmIGNlIuWl1HkDV4F7yeWdkSLHXpbMe8U2ozogFKD4XlCx3fevfVAL7KkBd%2Bm9eO%2FspBjKjs9kV6UXR%2FEk28yCWicqQtaNqDYli5pePicMvPR4TO0M8Xou%2F4FPFaLIDEhO8emeoJKkvaeknGEM2b4hs%2FpxvvEs3%2BQjw7tvE7TiMX2xnt7u%2BDS9P3XdDaWS1Cj7X4aiZX10q9Q990gfm7jg2joAmdQTFCw3AiYReUUAcL9gjeBVsUOCIm%2BXEfRGEfndMVPz0Wtpj743Q1sCZyw2WpdSFiRvSiChSRV2uhXoA9Bc2%2Faq7fx5%2BoxoAGAAWmBlxJKsQswo%2BnmvQY6pgHXa%2FfuBelLvZjcapEyU5EjM9rr6cg9ps1aar7bonGF8HzILLGpmEHrjb%2BYyUrHARQMCdb3wGG2hSlSO8K8A1RXzvwcR6N1vVFwXM8YH2VRItNJM1jrqGu5M4EGgp%2FRw%2B2E36qFgx2sBD1vjqKktkB%2FOexcjXLjibeGRzCELcF8diR6ZYwV2Q4csK5ViSjM%2Ff1UA7I1b3%2BmkTZby2Qzcv3aurmYyPIY&X-Amz-Signature=90f36f71ee9f13a40792592dc5dca0cf438bc8e02c75b4084be251b0c139ea05&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7OO6TAP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkU7DZaoXCqNPJLsl5zJehryNw%2FkoGeg6GWg%2BYaozoSAiBDC7ZgRPsCJXWIvDLeqhO%2F1T588sDgMuGDjSJAI5LPnCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJd%2BmZPGg50CTV%2BDKtwDzrDRx7BwjDjKruMOM%2BT9x3jovlFLQFC%2FqnGk6CLkcebrsUW1yAi%2BaBJjmStbZqLZ2ac4il%2F44JaPZ97bhZ41mLuj%2FkLhEED%2Fc%2Bpn3i%2BDTaOl3fv9rqBksc5vBXWLHUcpBtF4sgludm01DD1gnPhHi6fos%2Fsu0oL7vWkyPahBA1zuuUMudXhU6Q6Umsmfqegzpfuj1mFQ3lR62zp4kXMtYG%2BR%2F%2Bwe2HOiV89KKsZAuDYflKfXpByZ879Thzzxf48A1J79dRVKmszbXX0cWFF9SiaXQh%2FtwKHOKbNu%2Fxqhpma34XvvRObWmIGNlIuWl1HkDV4F7yeWdkSLHXpbMe8U2ozogFKD4XlCx3fevfVAL7KkBd%2Bm9eO%2FspBjKjs9kV6UXR%2FEk28yCWicqQtaNqDYli5pePicMvPR4TO0M8Xou%2F4FPFaLIDEhO8emeoJKkvaeknGEM2b4hs%2FpxvvEs3%2BQjw7tvE7TiMX2xnt7u%2BDS9P3XdDaWS1Cj7X4aiZX10q9Q990gfm7jg2joAmdQTFCw3AiYReUUAcL9gjeBVsUOCIm%2BXEfRGEfndMVPz0Wtpj743Q1sCZyw2WpdSFiRvSiChSRV2uhXoA9Bc2%2Faq7fx5%2BoxoAGAAWmBlxJKsQswo%2BnmvQY6pgHXa%2FfuBelLvZjcapEyU5EjM9rr6cg9ps1aar7bonGF8HzILLGpmEHrjb%2BYyUrHARQMCdb3wGG2hSlSO8K8A1RXzvwcR6N1vVFwXM8YH2VRItNJM1jrqGu5M4EGgp%2FRw%2B2E36qFgx2sBD1vjqKktkB%2FOexcjXLjibeGRzCELcF8diR6ZYwV2Q4csK5ViSjM%2Ff1UA7I1b3%2BmkTZby2Qzcv3aurmYyPIY&X-Amz-Signature=0574a41314fdd314266b407a35c12127d20184994dc60473134054833cd96989&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7OO6TAP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkU7DZaoXCqNPJLsl5zJehryNw%2FkoGeg6GWg%2BYaozoSAiBDC7ZgRPsCJXWIvDLeqhO%2F1T588sDgMuGDjSJAI5LPnCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJd%2BmZPGg50CTV%2BDKtwDzrDRx7BwjDjKruMOM%2BT9x3jovlFLQFC%2FqnGk6CLkcebrsUW1yAi%2BaBJjmStbZqLZ2ac4il%2F44JaPZ97bhZ41mLuj%2FkLhEED%2Fc%2Bpn3i%2BDTaOl3fv9rqBksc5vBXWLHUcpBtF4sgludm01DD1gnPhHi6fos%2Fsu0oL7vWkyPahBA1zuuUMudXhU6Q6Umsmfqegzpfuj1mFQ3lR62zp4kXMtYG%2BR%2F%2Bwe2HOiV89KKsZAuDYflKfXpByZ879Thzzxf48A1J79dRVKmszbXX0cWFF9SiaXQh%2FtwKHOKbNu%2Fxqhpma34XvvRObWmIGNlIuWl1HkDV4F7yeWdkSLHXpbMe8U2ozogFKD4XlCx3fevfVAL7KkBd%2Bm9eO%2FspBjKjs9kV6UXR%2FEk28yCWicqQtaNqDYli5pePicMvPR4TO0M8Xou%2F4FPFaLIDEhO8emeoJKkvaeknGEM2b4hs%2FpxvvEs3%2BQjw7tvE7TiMX2xnt7u%2BDS9P3XdDaWS1Cj7X4aiZX10q9Q990gfm7jg2joAmdQTFCw3AiYReUUAcL9gjeBVsUOCIm%2BXEfRGEfndMVPz0Wtpj743Q1sCZyw2WpdSFiRvSiChSRV2uhXoA9Bc2%2Faq7fx5%2BoxoAGAAWmBlxJKsQswo%2BnmvQY6pgHXa%2FfuBelLvZjcapEyU5EjM9rr6cg9ps1aar7bonGF8HzILLGpmEHrjb%2BYyUrHARQMCdb3wGG2hSlSO8K8A1RXzvwcR6N1vVFwXM8YH2VRItNJM1jrqGu5M4EGgp%2FRw%2B2E36qFgx2sBD1vjqKktkB%2FOexcjXLjibeGRzCELcF8diR6ZYwV2Q4csK5ViSjM%2Ff1UA7I1b3%2BmkTZby2Qzcv3aurmYyPIY&X-Amz-Signature=f22108cc4f1d8377c047a6c06350fc6fad1a09b6527506ca285e92a06ed0cb95&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7OO6TAP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkU7DZaoXCqNPJLsl5zJehryNw%2FkoGeg6GWg%2BYaozoSAiBDC7ZgRPsCJXWIvDLeqhO%2F1T588sDgMuGDjSJAI5LPnCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJd%2BmZPGg50CTV%2BDKtwDzrDRx7BwjDjKruMOM%2BT9x3jovlFLQFC%2FqnGk6CLkcebrsUW1yAi%2BaBJjmStbZqLZ2ac4il%2F44JaPZ97bhZ41mLuj%2FkLhEED%2Fc%2Bpn3i%2BDTaOl3fv9rqBksc5vBXWLHUcpBtF4sgludm01DD1gnPhHi6fos%2Fsu0oL7vWkyPahBA1zuuUMudXhU6Q6Umsmfqegzpfuj1mFQ3lR62zp4kXMtYG%2BR%2F%2Bwe2HOiV89KKsZAuDYflKfXpByZ879Thzzxf48A1J79dRVKmszbXX0cWFF9SiaXQh%2FtwKHOKbNu%2Fxqhpma34XvvRObWmIGNlIuWl1HkDV4F7yeWdkSLHXpbMe8U2ozogFKD4XlCx3fevfVAL7KkBd%2Bm9eO%2FspBjKjs9kV6UXR%2FEk28yCWicqQtaNqDYli5pePicMvPR4TO0M8Xou%2F4FPFaLIDEhO8emeoJKkvaeknGEM2b4hs%2FpxvvEs3%2BQjw7tvE7TiMX2xnt7u%2BDS9P3XdDaWS1Cj7X4aiZX10q9Q990gfm7jg2joAmdQTFCw3AiYReUUAcL9gjeBVsUOCIm%2BXEfRGEfndMVPz0Wtpj743Q1sCZyw2WpdSFiRvSiChSRV2uhXoA9Bc2%2Faq7fx5%2BoxoAGAAWmBlxJKsQswo%2BnmvQY6pgHXa%2FfuBelLvZjcapEyU5EjM9rr6cg9ps1aar7bonGF8HzILLGpmEHrjb%2BYyUrHARQMCdb3wGG2hSlSO8K8A1RXzvwcR6N1vVFwXM8YH2VRItNJM1jrqGu5M4EGgp%2FRw%2B2E36qFgx2sBD1vjqKktkB%2FOexcjXLjibeGRzCELcF8diR6ZYwV2Q4csK5ViSjM%2Ff1UA7I1b3%2BmkTZby2Qzcv3aurmYyPIY&X-Amz-Signature=ceba0c951dadcc0a3a26061cd72d1052c159fe67d5a6b0a50ebc4cfe40265616&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7OO6TAP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkU7DZaoXCqNPJLsl5zJehryNw%2FkoGeg6GWg%2BYaozoSAiBDC7ZgRPsCJXWIvDLeqhO%2F1T588sDgMuGDjSJAI5LPnCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJd%2BmZPGg50CTV%2BDKtwDzrDRx7BwjDjKruMOM%2BT9x3jovlFLQFC%2FqnGk6CLkcebrsUW1yAi%2BaBJjmStbZqLZ2ac4il%2F44JaPZ97bhZ41mLuj%2FkLhEED%2Fc%2Bpn3i%2BDTaOl3fv9rqBksc5vBXWLHUcpBtF4sgludm01DD1gnPhHi6fos%2Fsu0oL7vWkyPahBA1zuuUMudXhU6Q6Umsmfqegzpfuj1mFQ3lR62zp4kXMtYG%2BR%2F%2Bwe2HOiV89KKsZAuDYflKfXpByZ879Thzzxf48A1J79dRVKmszbXX0cWFF9SiaXQh%2FtwKHOKbNu%2Fxqhpma34XvvRObWmIGNlIuWl1HkDV4F7yeWdkSLHXpbMe8U2ozogFKD4XlCx3fevfVAL7KkBd%2Bm9eO%2FspBjKjs9kV6UXR%2FEk28yCWicqQtaNqDYli5pePicMvPR4TO0M8Xou%2F4FPFaLIDEhO8emeoJKkvaeknGEM2b4hs%2FpxvvEs3%2BQjw7tvE7TiMX2xnt7u%2BDS9P3XdDaWS1Cj7X4aiZX10q9Q990gfm7jg2joAmdQTFCw3AiYReUUAcL9gjeBVsUOCIm%2BXEfRGEfndMVPz0Wtpj743Q1sCZyw2WpdSFiRvSiChSRV2uhXoA9Bc2%2Faq7fx5%2BoxoAGAAWmBlxJKsQswo%2BnmvQY6pgHXa%2FfuBelLvZjcapEyU5EjM9rr6cg9ps1aar7bonGF8HzILLGpmEHrjb%2BYyUrHARQMCdb3wGG2hSlSO8K8A1RXzvwcR6N1vVFwXM8YH2VRItNJM1jrqGu5M4EGgp%2FRw%2B2E36qFgx2sBD1vjqKktkB%2FOexcjXLjibeGRzCELcF8diR6ZYwV2Q4csK5ViSjM%2Ff1UA7I1b3%2BmkTZby2Qzcv3aurmYyPIY&X-Amz-Signature=8f2a34f4b89aa3f1be937f7e527220052ecad5c49c80a63f02fd97a1c71363c4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
