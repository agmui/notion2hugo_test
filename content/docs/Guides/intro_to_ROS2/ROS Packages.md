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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAJZCMT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDdZYUGT4p%2FEYIuJGsySRzfjAdv3F5Bw43g%2FjFeAh4BzQIhANIsPR37KXwzWjwmSdlAGAi%2F3zwLxg51gTGLJAgD5JF1KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2BYCYBtkyVoM3eA0q3AO3sOSKb%2FCeZHnh1U3Vgv7kuV9c8IXJUcKPqTgHdnwRPQ8p6aPtPKa%2BH36v6x2%2F9F9O1pH56%2FaTWTFW6tf02HYiJOk%2F0lQlv3fB4Z1KxXeejj693Imfi7TVjkSWv79hqk9Z78Z8lecLOUpzil6xu4UPtjnAs0CvktCItxAu64%2FLYt4RzfGVCXo9gB1qMQGk2buMxSRTGzO8V3NLh5FWFthAfpHWi6mlGLQg%2Fj0C61pEMsq%2B9lUov8J2S5eXSpKOatPJRtfSErir5TZ9e7Tlmv3jA1U0Q5t9Ts%2BO6MSyw7VYlNUdZJelt1w3%2FJsuqQDYJNkvZuqVZ%2FB5ZM%2FuK4xCbdwZJnChoKxMP3IeTB8KYVP901ovtpmcanNeK046AE6rBgbhwibAcki85q5cfnC9cfW%2B22zNjCRyzbm0T%2BRLckQ1eK6vXBdrhRZZRQpUy1BCFDBBb2EXtdkc8wCMCRnLLxIPMKrz6l%2BkHosciXFzIB3Fsz%2BZPsxbbOMxKEataBkBivldkqM53L%2BpHqDqHGhMjv5kEdKjxrRonMvOYWbvnTjQhLJtzR0D3rc9gk4yHHvpLhw2%2Fxdj5FAMrY3PrgSNsGFxi4WIDhn2rbZ3ktMWHXBR4xTxZJcuBoeto9TvZDDHj%2FXBBjqkAbtR9jbJb37PSg5G%2FOg%2Bt9U%2BMhhRKtaEtCwzvlL1ckUIAF75HzoBBRWbsd50uGmyLiVwwyvuT1cXdoY87LQWv1CwGb3SawUfEWsK7wrTNqSwrpVTFXSXvrDTcjEGR3IQe2iK7bl1TQDJpQKTXJ9lAQJk6kER6aK8o12XkJ5zDrB4zUQr2UNHnMzI63hYhn1Ge8W%2B4TUY356pFPVxjuvdlmDphW45&X-Amz-Signature=d69c3405d2fadcfcdd558335469e57f6fb063477eb53969f3488043d63f5d1bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAJZCMT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDdZYUGT4p%2FEYIuJGsySRzfjAdv3F5Bw43g%2FjFeAh4BzQIhANIsPR37KXwzWjwmSdlAGAi%2F3zwLxg51gTGLJAgD5JF1KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2BYCYBtkyVoM3eA0q3AO3sOSKb%2FCeZHnh1U3Vgv7kuV9c8IXJUcKPqTgHdnwRPQ8p6aPtPKa%2BH36v6x2%2F9F9O1pH56%2FaTWTFW6tf02HYiJOk%2F0lQlv3fB4Z1KxXeejj693Imfi7TVjkSWv79hqk9Z78Z8lecLOUpzil6xu4UPtjnAs0CvktCItxAu64%2FLYt4RzfGVCXo9gB1qMQGk2buMxSRTGzO8V3NLh5FWFthAfpHWi6mlGLQg%2Fj0C61pEMsq%2B9lUov8J2S5eXSpKOatPJRtfSErir5TZ9e7Tlmv3jA1U0Q5t9Ts%2BO6MSyw7VYlNUdZJelt1w3%2FJsuqQDYJNkvZuqVZ%2FB5ZM%2FuK4xCbdwZJnChoKxMP3IeTB8KYVP901ovtpmcanNeK046AE6rBgbhwibAcki85q5cfnC9cfW%2B22zNjCRyzbm0T%2BRLckQ1eK6vXBdrhRZZRQpUy1BCFDBBb2EXtdkc8wCMCRnLLxIPMKrz6l%2BkHosciXFzIB3Fsz%2BZPsxbbOMxKEataBkBivldkqM53L%2BpHqDqHGhMjv5kEdKjxrRonMvOYWbvnTjQhLJtzR0D3rc9gk4yHHvpLhw2%2Fxdj5FAMrY3PrgSNsGFxi4WIDhn2rbZ3ktMWHXBR4xTxZJcuBoeto9TvZDDHj%2FXBBjqkAbtR9jbJb37PSg5G%2FOg%2Bt9U%2BMhhRKtaEtCwzvlL1ckUIAF75HzoBBRWbsd50uGmyLiVwwyvuT1cXdoY87LQWv1CwGb3SawUfEWsK7wrTNqSwrpVTFXSXvrDTcjEGR3IQe2iK7bl1TQDJpQKTXJ9lAQJk6kER6aK8o12XkJ5zDrB4zUQr2UNHnMzI63hYhn1Ge8W%2B4TUY356pFPVxjuvdlmDphW45&X-Amz-Signature=dbbe96eb3c530941f72bcd86694715f3980f20d77bc371a221fd2e1bbe078051&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAJZCMT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDdZYUGT4p%2FEYIuJGsySRzfjAdv3F5Bw43g%2FjFeAh4BzQIhANIsPR37KXwzWjwmSdlAGAi%2F3zwLxg51gTGLJAgD5JF1KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2BYCYBtkyVoM3eA0q3AO3sOSKb%2FCeZHnh1U3Vgv7kuV9c8IXJUcKPqTgHdnwRPQ8p6aPtPKa%2BH36v6x2%2F9F9O1pH56%2FaTWTFW6tf02HYiJOk%2F0lQlv3fB4Z1KxXeejj693Imfi7TVjkSWv79hqk9Z78Z8lecLOUpzil6xu4UPtjnAs0CvktCItxAu64%2FLYt4RzfGVCXo9gB1qMQGk2buMxSRTGzO8V3NLh5FWFthAfpHWi6mlGLQg%2Fj0C61pEMsq%2B9lUov8J2S5eXSpKOatPJRtfSErir5TZ9e7Tlmv3jA1U0Q5t9Ts%2BO6MSyw7VYlNUdZJelt1w3%2FJsuqQDYJNkvZuqVZ%2FB5ZM%2FuK4xCbdwZJnChoKxMP3IeTB8KYVP901ovtpmcanNeK046AE6rBgbhwibAcki85q5cfnC9cfW%2B22zNjCRyzbm0T%2BRLckQ1eK6vXBdrhRZZRQpUy1BCFDBBb2EXtdkc8wCMCRnLLxIPMKrz6l%2BkHosciXFzIB3Fsz%2BZPsxbbOMxKEataBkBivldkqM53L%2BpHqDqHGhMjv5kEdKjxrRonMvOYWbvnTjQhLJtzR0D3rc9gk4yHHvpLhw2%2Fxdj5FAMrY3PrgSNsGFxi4WIDhn2rbZ3ktMWHXBR4xTxZJcuBoeto9TvZDDHj%2FXBBjqkAbtR9jbJb37PSg5G%2FOg%2Bt9U%2BMhhRKtaEtCwzvlL1ckUIAF75HzoBBRWbsd50uGmyLiVwwyvuT1cXdoY87LQWv1CwGb3SawUfEWsK7wrTNqSwrpVTFXSXvrDTcjEGR3IQe2iK7bl1TQDJpQKTXJ9lAQJk6kER6aK8o12XkJ5zDrB4zUQr2UNHnMzI63hYhn1Ge8W%2B4TUY356pFPVxjuvdlmDphW45&X-Amz-Signature=538b4d13bf7f097fd47611fe29a29be5530089fbbd188f1054887e56bdbc6b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAJZCMT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDdZYUGT4p%2FEYIuJGsySRzfjAdv3F5Bw43g%2FjFeAh4BzQIhANIsPR37KXwzWjwmSdlAGAi%2F3zwLxg51gTGLJAgD5JF1KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2BYCYBtkyVoM3eA0q3AO3sOSKb%2FCeZHnh1U3Vgv7kuV9c8IXJUcKPqTgHdnwRPQ8p6aPtPKa%2BH36v6x2%2F9F9O1pH56%2FaTWTFW6tf02HYiJOk%2F0lQlv3fB4Z1KxXeejj693Imfi7TVjkSWv79hqk9Z78Z8lecLOUpzil6xu4UPtjnAs0CvktCItxAu64%2FLYt4RzfGVCXo9gB1qMQGk2buMxSRTGzO8V3NLh5FWFthAfpHWi6mlGLQg%2Fj0C61pEMsq%2B9lUov8J2S5eXSpKOatPJRtfSErir5TZ9e7Tlmv3jA1U0Q5t9Ts%2BO6MSyw7VYlNUdZJelt1w3%2FJsuqQDYJNkvZuqVZ%2FB5ZM%2FuK4xCbdwZJnChoKxMP3IeTB8KYVP901ovtpmcanNeK046AE6rBgbhwibAcki85q5cfnC9cfW%2B22zNjCRyzbm0T%2BRLckQ1eK6vXBdrhRZZRQpUy1BCFDBBb2EXtdkc8wCMCRnLLxIPMKrz6l%2BkHosciXFzIB3Fsz%2BZPsxbbOMxKEataBkBivldkqM53L%2BpHqDqHGhMjv5kEdKjxrRonMvOYWbvnTjQhLJtzR0D3rc9gk4yHHvpLhw2%2Fxdj5FAMrY3PrgSNsGFxi4WIDhn2rbZ3ktMWHXBR4xTxZJcuBoeto9TvZDDHj%2FXBBjqkAbtR9jbJb37PSg5G%2FOg%2Bt9U%2BMhhRKtaEtCwzvlL1ckUIAF75HzoBBRWbsd50uGmyLiVwwyvuT1cXdoY87LQWv1CwGb3SawUfEWsK7wrTNqSwrpVTFXSXvrDTcjEGR3IQe2iK7bl1TQDJpQKTXJ9lAQJk6kER6aK8o12XkJ5zDrB4zUQr2UNHnMzI63hYhn1Ge8W%2B4TUY356pFPVxjuvdlmDphW45&X-Amz-Signature=e649995f81c858f9e8a1b27feee89e688cca0ce583a2562e0acb99c275320964&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAJZCMT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDdZYUGT4p%2FEYIuJGsySRzfjAdv3F5Bw43g%2FjFeAh4BzQIhANIsPR37KXwzWjwmSdlAGAi%2F3zwLxg51gTGLJAgD5JF1KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2BYCYBtkyVoM3eA0q3AO3sOSKb%2FCeZHnh1U3Vgv7kuV9c8IXJUcKPqTgHdnwRPQ8p6aPtPKa%2BH36v6x2%2F9F9O1pH56%2FaTWTFW6tf02HYiJOk%2F0lQlv3fB4Z1KxXeejj693Imfi7TVjkSWv79hqk9Z78Z8lecLOUpzil6xu4UPtjnAs0CvktCItxAu64%2FLYt4RzfGVCXo9gB1qMQGk2buMxSRTGzO8V3NLh5FWFthAfpHWi6mlGLQg%2Fj0C61pEMsq%2B9lUov8J2S5eXSpKOatPJRtfSErir5TZ9e7Tlmv3jA1U0Q5t9Ts%2BO6MSyw7VYlNUdZJelt1w3%2FJsuqQDYJNkvZuqVZ%2FB5ZM%2FuK4xCbdwZJnChoKxMP3IeTB8KYVP901ovtpmcanNeK046AE6rBgbhwibAcki85q5cfnC9cfW%2B22zNjCRyzbm0T%2BRLckQ1eK6vXBdrhRZZRQpUy1BCFDBBb2EXtdkc8wCMCRnLLxIPMKrz6l%2BkHosciXFzIB3Fsz%2BZPsxbbOMxKEataBkBivldkqM53L%2BpHqDqHGhMjv5kEdKjxrRonMvOYWbvnTjQhLJtzR0D3rc9gk4yHHvpLhw2%2Fxdj5FAMrY3PrgSNsGFxi4WIDhn2rbZ3ktMWHXBR4xTxZJcuBoeto9TvZDDHj%2FXBBjqkAbtR9jbJb37PSg5G%2FOg%2Bt9U%2BMhhRKtaEtCwzvlL1ckUIAF75HzoBBRWbsd50uGmyLiVwwyvuT1cXdoY87LQWv1CwGb3SawUfEWsK7wrTNqSwrpVTFXSXvrDTcjEGR3IQe2iK7bl1TQDJpQKTXJ9lAQJk6kER6aK8o12XkJ5zDrB4zUQr2UNHnMzI63hYhn1Ge8W%2B4TUY356pFPVxjuvdlmDphW45&X-Amz-Signature=700234377f471e91725261078f6cd36fe9a49a3e24557c8adc2cdfe2d6ace4e5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAJZCMT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDdZYUGT4p%2FEYIuJGsySRzfjAdv3F5Bw43g%2FjFeAh4BzQIhANIsPR37KXwzWjwmSdlAGAi%2F3zwLxg51gTGLJAgD5JF1KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2BYCYBtkyVoM3eA0q3AO3sOSKb%2FCeZHnh1U3Vgv7kuV9c8IXJUcKPqTgHdnwRPQ8p6aPtPKa%2BH36v6x2%2F9F9O1pH56%2FaTWTFW6tf02HYiJOk%2F0lQlv3fB4Z1KxXeejj693Imfi7TVjkSWv79hqk9Z78Z8lecLOUpzil6xu4UPtjnAs0CvktCItxAu64%2FLYt4RzfGVCXo9gB1qMQGk2buMxSRTGzO8V3NLh5FWFthAfpHWi6mlGLQg%2Fj0C61pEMsq%2B9lUov8J2S5eXSpKOatPJRtfSErir5TZ9e7Tlmv3jA1U0Q5t9Ts%2BO6MSyw7VYlNUdZJelt1w3%2FJsuqQDYJNkvZuqVZ%2FB5ZM%2FuK4xCbdwZJnChoKxMP3IeTB8KYVP901ovtpmcanNeK046AE6rBgbhwibAcki85q5cfnC9cfW%2B22zNjCRyzbm0T%2BRLckQ1eK6vXBdrhRZZRQpUy1BCFDBBb2EXtdkc8wCMCRnLLxIPMKrz6l%2BkHosciXFzIB3Fsz%2BZPsxbbOMxKEataBkBivldkqM53L%2BpHqDqHGhMjv5kEdKjxrRonMvOYWbvnTjQhLJtzR0D3rc9gk4yHHvpLhw2%2Fxdj5FAMrY3PrgSNsGFxi4WIDhn2rbZ3ktMWHXBR4xTxZJcuBoeto9TvZDDHj%2FXBBjqkAbtR9jbJb37PSg5G%2FOg%2Bt9U%2BMhhRKtaEtCwzvlL1ckUIAF75HzoBBRWbsd50uGmyLiVwwyvuT1cXdoY87LQWv1CwGb3SawUfEWsK7wrTNqSwrpVTFXSXvrDTcjEGR3IQe2iK7bl1TQDJpQKTXJ9lAQJk6kER6aK8o12XkJ5zDrB4zUQr2UNHnMzI63hYhn1Ge8W%2B4TUY356pFPVxjuvdlmDphW45&X-Amz-Signature=c9269734d22b413938826f1de7ef9d87c6025f0e94e4c180cad9a51039523247&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAJZCMT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDdZYUGT4p%2FEYIuJGsySRzfjAdv3F5Bw43g%2FjFeAh4BzQIhANIsPR37KXwzWjwmSdlAGAi%2F3zwLxg51gTGLJAgD5JF1KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2BYCYBtkyVoM3eA0q3AO3sOSKb%2FCeZHnh1U3Vgv7kuV9c8IXJUcKPqTgHdnwRPQ8p6aPtPKa%2BH36v6x2%2F9F9O1pH56%2FaTWTFW6tf02HYiJOk%2F0lQlv3fB4Z1KxXeejj693Imfi7TVjkSWv79hqk9Z78Z8lecLOUpzil6xu4UPtjnAs0CvktCItxAu64%2FLYt4RzfGVCXo9gB1qMQGk2buMxSRTGzO8V3NLh5FWFthAfpHWi6mlGLQg%2Fj0C61pEMsq%2B9lUov8J2S5eXSpKOatPJRtfSErir5TZ9e7Tlmv3jA1U0Q5t9Ts%2BO6MSyw7VYlNUdZJelt1w3%2FJsuqQDYJNkvZuqVZ%2FB5ZM%2FuK4xCbdwZJnChoKxMP3IeTB8KYVP901ovtpmcanNeK046AE6rBgbhwibAcki85q5cfnC9cfW%2B22zNjCRyzbm0T%2BRLckQ1eK6vXBdrhRZZRQpUy1BCFDBBb2EXtdkc8wCMCRnLLxIPMKrz6l%2BkHosciXFzIB3Fsz%2BZPsxbbOMxKEataBkBivldkqM53L%2BpHqDqHGhMjv5kEdKjxrRonMvOYWbvnTjQhLJtzR0D3rc9gk4yHHvpLhw2%2Fxdj5FAMrY3PrgSNsGFxi4WIDhn2rbZ3ktMWHXBR4xTxZJcuBoeto9TvZDDHj%2FXBBjqkAbtR9jbJb37PSg5G%2FOg%2Bt9U%2BMhhRKtaEtCwzvlL1ckUIAF75HzoBBRWbsd50uGmyLiVwwyvuT1cXdoY87LQWv1CwGb3SawUfEWsK7wrTNqSwrpVTFXSXvrDTcjEGR3IQe2iK7bl1TQDJpQKTXJ9lAQJk6kER6aK8o12XkJ5zDrB4zUQr2UNHnMzI63hYhn1Ge8W%2B4TUY356pFPVxjuvdlmDphW45&X-Amz-Signature=940932a6869cb1fd35e02414e43326b350aafc825158c6a7b78629ad71d3caa0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
