---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYZVQ5H%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIE9Ak5BWeZgE6eYSoxJ8diX0wf69vjwIqRrNeL5IxJLKAiBarR02aw30Wf7ukLfH0%2FEGTbmqgcqhLrUSPahzDGbD1CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAsi%2FRkeqKwy0oESIKtwD3%2B5s8QUKpGNK89dRYKNO2ON9ViOf69uSvuESSpThVMs87yVqNlybQnaRQJi7Nz14PZSqnAmnpascUNTL5aL0R4X4Gz4FZSJr6IIiVYmumXQAWuRW%2BQSGmXCIOylMtyDk775He6RjxAF4U%2F7GxxoDeWadaSfkXxUkbqB0%2FC9zZGceGhriQtmkmGZwysk3jNWncAYwNBzvyglWzQ15nVCzpo3MADsOCoYa0lnbRyfRuSQsbrd2kqIG%2Fg9l5nAESLzsVxNvEyFr5azKz9KATXSPEHfUMfFgtAUOtxDi9zHa40ShxtoL2et%2FbJZ3t9Iw%2F%2BbTcJVj8dfC%2B%2BUj%2BDyrseIRFLE5c%2FUd3Rrua2AtMvzSGzCOnsJuozjSJ82lqaOz6qvqvmmo9amLpF1%2BgdU9ScIUNI1KLEXSqk2H3aj7kk2%2FHTzJjj7C1plOfZkrP%2BPl8TCC%2B%2FZsMKIpBPLmN3qz2CAGLMYgQ4tUK22xv9eB84l1TS%2B5yBAYpG79ybIcIznhaxOB8RHAA2wIrTEQho9ipbVXIriwMMas1JEoMYihII93i6fRGZ%2FZDjX4lbL6nRjT%2FkAOY1Mpdj%2B57ynNeISR7sk7JmiwG1jf4vTWJqoGY5e9CvD4E%2BXu1QbaL%2BxTkPgwy4SywwY6pgHNwJ0hvvy9Bt64zPpXoeY4DgKmEzo%2BamtE7aToMvxsmJP%2F3h3LdOAwaC42l8rIFktpUpXMzN1kLYOpkd8y93t3rufbFuKqfIr2m%2BhSrWheF8n9fIFvBWb2xxbK9qnnZYm34YVyPXGOlAD2sWrm%2F8tbGvbKqwxZbYuhoUWIpn1T2%2FZdWMw6tPeiDxeyoAeEsW2b2WpAsQjpVJ5w1ATUVesfgmpS1lFk&X-Amz-Signature=7c2e032502ba499a45cfcebd00611fcb3cabe5b05704bd3807d8e95e25da1838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYZVQ5H%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIE9Ak5BWeZgE6eYSoxJ8diX0wf69vjwIqRrNeL5IxJLKAiBarR02aw30Wf7ukLfH0%2FEGTbmqgcqhLrUSPahzDGbD1CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAsi%2FRkeqKwy0oESIKtwD3%2B5s8QUKpGNK89dRYKNO2ON9ViOf69uSvuESSpThVMs87yVqNlybQnaRQJi7Nz14PZSqnAmnpascUNTL5aL0R4X4Gz4FZSJr6IIiVYmumXQAWuRW%2BQSGmXCIOylMtyDk775He6RjxAF4U%2F7GxxoDeWadaSfkXxUkbqB0%2FC9zZGceGhriQtmkmGZwysk3jNWncAYwNBzvyglWzQ15nVCzpo3MADsOCoYa0lnbRyfRuSQsbrd2kqIG%2Fg9l5nAESLzsVxNvEyFr5azKz9KATXSPEHfUMfFgtAUOtxDi9zHa40ShxtoL2et%2FbJZ3t9Iw%2F%2BbTcJVj8dfC%2B%2BUj%2BDyrseIRFLE5c%2FUd3Rrua2AtMvzSGzCOnsJuozjSJ82lqaOz6qvqvmmo9amLpF1%2BgdU9ScIUNI1KLEXSqk2H3aj7kk2%2FHTzJjj7C1plOfZkrP%2BPl8TCC%2B%2FZsMKIpBPLmN3qz2CAGLMYgQ4tUK22xv9eB84l1TS%2B5yBAYpG79ybIcIznhaxOB8RHAA2wIrTEQho9ipbVXIriwMMas1JEoMYihII93i6fRGZ%2FZDjX4lbL6nRjT%2FkAOY1Mpdj%2B57ynNeISR7sk7JmiwG1jf4vTWJqoGY5e9CvD4E%2BXu1QbaL%2BxTkPgwy4SywwY6pgHNwJ0hvvy9Bt64zPpXoeY4DgKmEzo%2BamtE7aToMvxsmJP%2F3h3LdOAwaC42l8rIFktpUpXMzN1kLYOpkd8y93t3rufbFuKqfIr2m%2BhSrWheF8n9fIFvBWb2xxbK9qnnZYm34YVyPXGOlAD2sWrm%2F8tbGvbKqwxZbYuhoUWIpn1T2%2FZdWMw6tPeiDxeyoAeEsW2b2WpAsQjpVJ5w1ATUVesfgmpS1lFk&X-Amz-Signature=1a1e7090f5e41f8d1a2935b7395c05fb837da1275751be5772193c284e38500a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYZVQ5H%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIE9Ak5BWeZgE6eYSoxJ8diX0wf69vjwIqRrNeL5IxJLKAiBarR02aw30Wf7ukLfH0%2FEGTbmqgcqhLrUSPahzDGbD1CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAsi%2FRkeqKwy0oESIKtwD3%2B5s8QUKpGNK89dRYKNO2ON9ViOf69uSvuESSpThVMs87yVqNlybQnaRQJi7Nz14PZSqnAmnpascUNTL5aL0R4X4Gz4FZSJr6IIiVYmumXQAWuRW%2BQSGmXCIOylMtyDk775He6RjxAF4U%2F7GxxoDeWadaSfkXxUkbqB0%2FC9zZGceGhriQtmkmGZwysk3jNWncAYwNBzvyglWzQ15nVCzpo3MADsOCoYa0lnbRyfRuSQsbrd2kqIG%2Fg9l5nAESLzsVxNvEyFr5azKz9KATXSPEHfUMfFgtAUOtxDi9zHa40ShxtoL2et%2FbJZ3t9Iw%2F%2BbTcJVj8dfC%2B%2BUj%2BDyrseIRFLE5c%2FUd3Rrua2AtMvzSGzCOnsJuozjSJ82lqaOz6qvqvmmo9amLpF1%2BgdU9ScIUNI1KLEXSqk2H3aj7kk2%2FHTzJjj7C1plOfZkrP%2BPl8TCC%2B%2FZsMKIpBPLmN3qz2CAGLMYgQ4tUK22xv9eB84l1TS%2B5yBAYpG79ybIcIznhaxOB8RHAA2wIrTEQho9ipbVXIriwMMas1JEoMYihII93i6fRGZ%2FZDjX4lbL6nRjT%2FkAOY1Mpdj%2B57ynNeISR7sk7JmiwG1jf4vTWJqoGY5e9CvD4E%2BXu1QbaL%2BxTkPgwy4SywwY6pgHNwJ0hvvy9Bt64zPpXoeY4DgKmEzo%2BamtE7aToMvxsmJP%2F3h3LdOAwaC42l8rIFktpUpXMzN1kLYOpkd8y93t3rufbFuKqfIr2m%2BhSrWheF8n9fIFvBWb2xxbK9qnnZYm34YVyPXGOlAD2sWrm%2F8tbGvbKqwxZbYuhoUWIpn1T2%2FZdWMw6tPeiDxeyoAeEsW2b2WpAsQjpVJ5w1ATUVesfgmpS1lFk&X-Amz-Signature=8ab3aec662dcd3d3a3eb5caeb962cac2d7cd9e554cbebdccb9944a8371904ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYZVQ5H%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIE9Ak5BWeZgE6eYSoxJ8diX0wf69vjwIqRrNeL5IxJLKAiBarR02aw30Wf7ukLfH0%2FEGTbmqgcqhLrUSPahzDGbD1CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAsi%2FRkeqKwy0oESIKtwD3%2B5s8QUKpGNK89dRYKNO2ON9ViOf69uSvuESSpThVMs87yVqNlybQnaRQJi7Nz14PZSqnAmnpascUNTL5aL0R4X4Gz4FZSJr6IIiVYmumXQAWuRW%2BQSGmXCIOylMtyDk775He6RjxAF4U%2F7GxxoDeWadaSfkXxUkbqB0%2FC9zZGceGhriQtmkmGZwysk3jNWncAYwNBzvyglWzQ15nVCzpo3MADsOCoYa0lnbRyfRuSQsbrd2kqIG%2Fg9l5nAESLzsVxNvEyFr5azKz9KATXSPEHfUMfFgtAUOtxDi9zHa40ShxtoL2et%2FbJZ3t9Iw%2F%2BbTcJVj8dfC%2B%2BUj%2BDyrseIRFLE5c%2FUd3Rrua2AtMvzSGzCOnsJuozjSJ82lqaOz6qvqvmmo9amLpF1%2BgdU9ScIUNI1KLEXSqk2H3aj7kk2%2FHTzJjj7C1plOfZkrP%2BPl8TCC%2B%2FZsMKIpBPLmN3qz2CAGLMYgQ4tUK22xv9eB84l1TS%2B5yBAYpG79ybIcIznhaxOB8RHAA2wIrTEQho9ipbVXIriwMMas1JEoMYihII93i6fRGZ%2FZDjX4lbL6nRjT%2FkAOY1Mpdj%2B57ynNeISR7sk7JmiwG1jf4vTWJqoGY5e9CvD4E%2BXu1QbaL%2BxTkPgwy4SywwY6pgHNwJ0hvvy9Bt64zPpXoeY4DgKmEzo%2BamtE7aToMvxsmJP%2F3h3LdOAwaC42l8rIFktpUpXMzN1kLYOpkd8y93t3rufbFuKqfIr2m%2BhSrWheF8n9fIFvBWb2xxbK9qnnZYm34YVyPXGOlAD2sWrm%2F8tbGvbKqwxZbYuhoUWIpn1T2%2FZdWMw6tPeiDxeyoAeEsW2b2WpAsQjpVJ5w1ATUVesfgmpS1lFk&X-Amz-Signature=b87eabe333d7b2a707af8699254d436b72b316818ed404b69c98a80d9254cc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYZVQ5H%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIE9Ak5BWeZgE6eYSoxJ8diX0wf69vjwIqRrNeL5IxJLKAiBarR02aw30Wf7ukLfH0%2FEGTbmqgcqhLrUSPahzDGbD1CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAsi%2FRkeqKwy0oESIKtwD3%2B5s8QUKpGNK89dRYKNO2ON9ViOf69uSvuESSpThVMs87yVqNlybQnaRQJi7Nz14PZSqnAmnpascUNTL5aL0R4X4Gz4FZSJr6IIiVYmumXQAWuRW%2BQSGmXCIOylMtyDk775He6RjxAF4U%2F7GxxoDeWadaSfkXxUkbqB0%2FC9zZGceGhriQtmkmGZwysk3jNWncAYwNBzvyglWzQ15nVCzpo3MADsOCoYa0lnbRyfRuSQsbrd2kqIG%2Fg9l5nAESLzsVxNvEyFr5azKz9KATXSPEHfUMfFgtAUOtxDi9zHa40ShxtoL2et%2FbJZ3t9Iw%2F%2BbTcJVj8dfC%2B%2BUj%2BDyrseIRFLE5c%2FUd3Rrua2AtMvzSGzCOnsJuozjSJ82lqaOz6qvqvmmo9amLpF1%2BgdU9ScIUNI1KLEXSqk2H3aj7kk2%2FHTzJjj7C1plOfZkrP%2BPl8TCC%2B%2FZsMKIpBPLmN3qz2CAGLMYgQ4tUK22xv9eB84l1TS%2B5yBAYpG79ybIcIznhaxOB8RHAA2wIrTEQho9ipbVXIriwMMas1JEoMYihII93i6fRGZ%2FZDjX4lbL6nRjT%2FkAOY1Mpdj%2B57ynNeISR7sk7JmiwG1jf4vTWJqoGY5e9CvD4E%2BXu1QbaL%2BxTkPgwy4SywwY6pgHNwJ0hvvy9Bt64zPpXoeY4DgKmEzo%2BamtE7aToMvxsmJP%2F3h3LdOAwaC42l8rIFktpUpXMzN1kLYOpkd8y93t3rufbFuKqfIr2m%2BhSrWheF8n9fIFvBWb2xxbK9qnnZYm34YVyPXGOlAD2sWrm%2F8tbGvbKqwxZbYuhoUWIpn1T2%2FZdWMw6tPeiDxeyoAeEsW2b2WpAsQjpVJ5w1ATUVesfgmpS1lFk&X-Amz-Signature=7047e9426052ef0641baf84fe81177db5b849fe1c5e3aa031b59c9666944296b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYZVQ5H%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIE9Ak5BWeZgE6eYSoxJ8diX0wf69vjwIqRrNeL5IxJLKAiBarR02aw30Wf7ukLfH0%2FEGTbmqgcqhLrUSPahzDGbD1CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAsi%2FRkeqKwy0oESIKtwD3%2B5s8QUKpGNK89dRYKNO2ON9ViOf69uSvuESSpThVMs87yVqNlybQnaRQJi7Nz14PZSqnAmnpascUNTL5aL0R4X4Gz4FZSJr6IIiVYmumXQAWuRW%2BQSGmXCIOylMtyDk775He6RjxAF4U%2F7GxxoDeWadaSfkXxUkbqB0%2FC9zZGceGhriQtmkmGZwysk3jNWncAYwNBzvyglWzQ15nVCzpo3MADsOCoYa0lnbRyfRuSQsbrd2kqIG%2Fg9l5nAESLzsVxNvEyFr5azKz9KATXSPEHfUMfFgtAUOtxDi9zHa40ShxtoL2et%2FbJZ3t9Iw%2F%2BbTcJVj8dfC%2B%2BUj%2BDyrseIRFLE5c%2FUd3Rrua2AtMvzSGzCOnsJuozjSJ82lqaOz6qvqvmmo9amLpF1%2BgdU9ScIUNI1KLEXSqk2H3aj7kk2%2FHTzJjj7C1plOfZkrP%2BPl8TCC%2B%2FZsMKIpBPLmN3qz2CAGLMYgQ4tUK22xv9eB84l1TS%2B5yBAYpG79ybIcIznhaxOB8RHAA2wIrTEQho9ipbVXIriwMMas1JEoMYihII93i6fRGZ%2FZDjX4lbL6nRjT%2FkAOY1Mpdj%2B57ynNeISR7sk7JmiwG1jf4vTWJqoGY5e9CvD4E%2BXu1QbaL%2BxTkPgwy4SywwY6pgHNwJ0hvvy9Bt64zPpXoeY4DgKmEzo%2BamtE7aToMvxsmJP%2F3h3LdOAwaC42l8rIFktpUpXMzN1kLYOpkd8y93t3rufbFuKqfIr2m%2BhSrWheF8n9fIFvBWb2xxbK9qnnZYm34YVyPXGOlAD2sWrm%2F8tbGvbKqwxZbYuhoUWIpn1T2%2FZdWMw6tPeiDxeyoAeEsW2b2WpAsQjpVJ5w1ATUVesfgmpS1lFk&X-Amz-Signature=1d8b2ac0e6502336eab899b83003940243be4ed4db84a4f830de69add8daaa16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYZVQ5H%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIE9Ak5BWeZgE6eYSoxJ8diX0wf69vjwIqRrNeL5IxJLKAiBarR02aw30Wf7ukLfH0%2FEGTbmqgcqhLrUSPahzDGbD1CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAsi%2FRkeqKwy0oESIKtwD3%2B5s8QUKpGNK89dRYKNO2ON9ViOf69uSvuESSpThVMs87yVqNlybQnaRQJi7Nz14PZSqnAmnpascUNTL5aL0R4X4Gz4FZSJr6IIiVYmumXQAWuRW%2BQSGmXCIOylMtyDk775He6RjxAF4U%2F7GxxoDeWadaSfkXxUkbqB0%2FC9zZGceGhriQtmkmGZwysk3jNWncAYwNBzvyglWzQ15nVCzpo3MADsOCoYa0lnbRyfRuSQsbrd2kqIG%2Fg9l5nAESLzsVxNvEyFr5azKz9KATXSPEHfUMfFgtAUOtxDi9zHa40ShxtoL2et%2FbJZ3t9Iw%2F%2BbTcJVj8dfC%2B%2BUj%2BDyrseIRFLE5c%2FUd3Rrua2AtMvzSGzCOnsJuozjSJ82lqaOz6qvqvmmo9amLpF1%2BgdU9ScIUNI1KLEXSqk2H3aj7kk2%2FHTzJjj7C1plOfZkrP%2BPl8TCC%2B%2FZsMKIpBPLmN3qz2CAGLMYgQ4tUK22xv9eB84l1TS%2B5yBAYpG79ybIcIznhaxOB8RHAA2wIrTEQho9ipbVXIriwMMas1JEoMYihII93i6fRGZ%2FZDjX4lbL6nRjT%2FkAOY1Mpdj%2B57ynNeISR7sk7JmiwG1jf4vTWJqoGY5e9CvD4E%2BXu1QbaL%2BxTkPgwy4SywwY6pgHNwJ0hvvy9Bt64zPpXoeY4DgKmEzo%2BamtE7aToMvxsmJP%2F3h3LdOAwaC42l8rIFktpUpXMzN1kLYOpkd8y93t3rufbFuKqfIr2m%2BhSrWheF8n9fIFvBWb2xxbK9qnnZYm34YVyPXGOlAD2sWrm%2F8tbGvbKqwxZbYuhoUWIpn1T2%2FZdWMw6tPeiDxeyoAeEsW2b2WpAsQjpVJ5w1ATUVesfgmpS1lFk&X-Amz-Signature=5e138181ee5368d3ca2a6ac49bde3f829717eb2fa8e38631c14003a2ed04b793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
