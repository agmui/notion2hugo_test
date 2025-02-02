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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YSUNKKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCtdff7XbCONtd3wuJMX5sYodSEEpqDJBofHqBStxJHQIgW%2BBTa52DA3yneIpptwiA7%2FBpYfoUPRQadli7%2B92jfH4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBoiytjE%2Fuak69nsSrcA7R%2BjeZz9XEi9KFUCAGNs%2BgmQjKf706jY%2BJf50GdoaQlTbqrObSVFiI7H%2FYBFV3KN4HHA6qQp%2Fefoq2Pcqr9L5QNng1OUEtnxQyRV2L5EHMBwSojuO8wS9iUDa%2FFpCM3Z5EBPYu39%2FDj5JCmsDzDvdo0c%2FTYK6JPKdSmDCAcnV%2Fcq03J2%2B7gHneIYeOYMqWT6o8g9r0zk7sO%2F%2FfEhCk7ci2cZKSfAsBH6OQ1OiJaGIlkuJjXo4Axq8JCqu8mVWWpbP0QklillIK9LIAyWRF%2FDqlnAhGSIoClBv1hZW%2FCjrPgEjGF8l10ROf8ZGacopDkroeRS5%2Funh6rxkGdOHnmTBjLxTPT5p897rS3Yc%2BT6eL3WOILC%2FDYjavxiorcoEXnHRWf6uSiApvdH6UR3gNoJ4gFHmeLxPmjFwG6DgHwRlIcHiiNuVWphlgkToYvXtxCTfJHbj0uFfg%2FfWTtIUy25kJCGWLWo3u0zo9EJqoZeqizVxpWKFcrnWocmaIFljH5zkblWcnJejy07WvsSQwjvk3mZoqDtTc7zHMWdtFNi0WZklILDWs5LUruwYVboHweDY3fOYb7CQNSPh6HDEBQ72B%2FrfD6JE6QqQSKbma73VEdlLdvkU8t0aHdaPvrMOHC%2FbwGOqUBKUEHPcYAndchBAtWz9lHORBMADIqg2A5XuS19tITUFPvt1V5QfGBAsYovJ4ddRlsVwofHdN4A6ebZA84Yooddbim0CGVasyMJxyeLWV3WU%2B%2BP7W1hZFzeLy2t8iBVTVgW1BYPntHcP4CUE%2FR3iOhdzZpXd5lHR1dciemLvdaQg1t3SxnAv3c6SvkyAEvvwNwmR0vvKgVppaY%2F3ruvtVxwN3ZQ9sm&X-Amz-Signature=284989c01cfc764fecd81a6cc6f2a1eaa00e468c3a1db22885d9a82044594b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YSUNKKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCtdff7XbCONtd3wuJMX5sYodSEEpqDJBofHqBStxJHQIgW%2BBTa52DA3yneIpptwiA7%2FBpYfoUPRQadli7%2B92jfH4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBoiytjE%2Fuak69nsSrcA7R%2BjeZz9XEi9KFUCAGNs%2BgmQjKf706jY%2BJf50GdoaQlTbqrObSVFiI7H%2FYBFV3KN4HHA6qQp%2Fefoq2Pcqr9L5QNng1OUEtnxQyRV2L5EHMBwSojuO8wS9iUDa%2FFpCM3Z5EBPYu39%2FDj5JCmsDzDvdo0c%2FTYK6JPKdSmDCAcnV%2Fcq03J2%2B7gHneIYeOYMqWT6o8g9r0zk7sO%2F%2FfEhCk7ci2cZKSfAsBH6OQ1OiJaGIlkuJjXo4Axq8JCqu8mVWWpbP0QklillIK9LIAyWRF%2FDqlnAhGSIoClBv1hZW%2FCjrPgEjGF8l10ROf8ZGacopDkroeRS5%2Funh6rxkGdOHnmTBjLxTPT5p897rS3Yc%2BT6eL3WOILC%2FDYjavxiorcoEXnHRWf6uSiApvdH6UR3gNoJ4gFHmeLxPmjFwG6DgHwRlIcHiiNuVWphlgkToYvXtxCTfJHbj0uFfg%2FfWTtIUy25kJCGWLWo3u0zo9EJqoZeqizVxpWKFcrnWocmaIFljH5zkblWcnJejy07WvsSQwjvk3mZoqDtTc7zHMWdtFNi0WZklILDWs5LUruwYVboHweDY3fOYb7CQNSPh6HDEBQ72B%2FrfD6JE6QqQSKbma73VEdlLdvkU8t0aHdaPvrMOHC%2FbwGOqUBKUEHPcYAndchBAtWz9lHORBMADIqg2A5XuS19tITUFPvt1V5QfGBAsYovJ4ddRlsVwofHdN4A6ebZA84Yooddbim0CGVasyMJxyeLWV3WU%2B%2BP7W1hZFzeLy2t8iBVTVgW1BYPntHcP4CUE%2FR3iOhdzZpXd5lHR1dciemLvdaQg1t3SxnAv3c6SvkyAEvvwNwmR0vvKgVppaY%2F3ruvtVxwN3ZQ9sm&X-Amz-Signature=816b1743667a408399a9479fd2d7b4803add2c1365dfc93b263092e1ae3dbbd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YSUNKKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCtdff7XbCONtd3wuJMX5sYodSEEpqDJBofHqBStxJHQIgW%2BBTa52DA3yneIpptwiA7%2FBpYfoUPRQadli7%2B92jfH4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBoiytjE%2Fuak69nsSrcA7R%2BjeZz9XEi9KFUCAGNs%2BgmQjKf706jY%2BJf50GdoaQlTbqrObSVFiI7H%2FYBFV3KN4HHA6qQp%2Fefoq2Pcqr9L5QNng1OUEtnxQyRV2L5EHMBwSojuO8wS9iUDa%2FFpCM3Z5EBPYu39%2FDj5JCmsDzDvdo0c%2FTYK6JPKdSmDCAcnV%2Fcq03J2%2B7gHneIYeOYMqWT6o8g9r0zk7sO%2F%2FfEhCk7ci2cZKSfAsBH6OQ1OiJaGIlkuJjXo4Axq8JCqu8mVWWpbP0QklillIK9LIAyWRF%2FDqlnAhGSIoClBv1hZW%2FCjrPgEjGF8l10ROf8ZGacopDkroeRS5%2Funh6rxkGdOHnmTBjLxTPT5p897rS3Yc%2BT6eL3WOILC%2FDYjavxiorcoEXnHRWf6uSiApvdH6UR3gNoJ4gFHmeLxPmjFwG6DgHwRlIcHiiNuVWphlgkToYvXtxCTfJHbj0uFfg%2FfWTtIUy25kJCGWLWo3u0zo9EJqoZeqizVxpWKFcrnWocmaIFljH5zkblWcnJejy07WvsSQwjvk3mZoqDtTc7zHMWdtFNi0WZklILDWs5LUruwYVboHweDY3fOYb7CQNSPh6HDEBQ72B%2FrfD6JE6QqQSKbma73VEdlLdvkU8t0aHdaPvrMOHC%2FbwGOqUBKUEHPcYAndchBAtWz9lHORBMADIqg2A5XuS19tITUFPvt1V5QfGBAsYovJ4ddRlsVwofHdN4A6ebZA84Yooddbim0CGVasyMJxyeLWV3WU%2B%2BP7W1hZFzeLy2t8iBVTVgW1BYPntHcP4CUE%2FR3iOhdzZpXd5lHR1dciemLvdaQg1t3SxnAv3c6SvkyAEvvwNwmR0vvKgVppaY%2F3ruvtVxwN3ZQ9sm&X-Amz-Signature=e198a71026bca3bc3c1e9db953de0a358daa455dcc86b697ef3797a547472fb0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YSUNKKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCtdff7XbCONtd3wuJMX5sYodSEEpqDJBofHqBStxJHQIgW%2BBTa52DA3yneIpptwiA7%2FBpYfoUPRQadli7%2B92jfH4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBoiytjE%2Fuak69nsSrcA7R%2BjeZz9XEi9KFUCAGNs%2BgmQjKf706jY%2BJf50GdoaQlTbqrObSVFiI7H%2FYBFV3KN4HHA6qQp%2Fefoq2Pcqr9L5QNng1OUEtnxQyRV2L5EHMBwSojuO8wS9iUDa%2FFpCM3Z5EBPYu39%2FDj5JCmsDzDvdo0c%2FTYK6JPKdSmDCAcnV%2Fcq03J2%2B7gHneIYeOYMqWT6o8g9r0zk7sO%2F%2FfEhCk7ci2cZKSfAsBH6OQ1OiJaGIlkuJjXo4Axq8JCqu8mVWWpbP0QklillIK9LIAyWRF%2FDqlnAhGSIoClBv1hZW%2FCjrPgEjGF8l10ROf8ZGacopDkroeRS5%2Funh6rxkGdOHnmTBjLxTPT5p897rS3Yc%2BT6eL3WOILC%2FDYjavxiorcoEXnHRWf6uSiApvdH6UR3gNoJ4gFHmeLxPmjFwG6DgHwRlIcHiiNuVWphlgkToYvXtxCTfJHbj0uFfg%2FfWTtIUy25kJCGWLWo3u0zo9EJqoZeqizVxpWKFcrnWocmaIFljH5zkblWcnJejy07WvsSQwjvk3mZoqDtTc7zHMWdtFNi0WZklILDWs5LUruwYVboHweDY3fOYb7CQNSPh6HDEBQ72B%2FrfD6JE6QqQSKbma73VEdlLdvkU8t0aHdaPvrMOHC%2FbwGOqUBKUEHPcYAndchBAtWz9lHORBMADIqg2A5XuS19tITUFPvt1V5QfGBAsYovJ4ddRlsVwofHdN4A6ebZA84Yooddbim0CGVasyMJxyeLWV3WU%2B%2BP7W1hZFzeLy2t8iBVTVgW1BYPntHcP4CUE%2FR3iOhdzZpXd5lHR1dciemLvdaQg1t3SxnAv3c6SvkyAEvvwNwmR0vvKgVppaY%2F3ruvtVxwN3ZQ9sm&X-Amz-Signature=d3a7b6d732f03998990b141cf9a2315f40fc64e259ea6cc9be7503883860eb2c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YSUNKKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCtdff7XbCONtd3wuJMX5sYodSEEpqDJBofHqBStxJHQIgW%2BBTa52DA3yneIpptwiA7%2FBpYfoUPRQadli7%2B92jfH4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBoiytjE%2Fuak69nsSrcA7R%2BjeZz9XEi9KFUCAGNs%2BgmQjKf706jY%2BJf50GdoaQlTbqrObSVFiI7H%2FYBFV3KN4HHA6qQp%2Fefoq2Pcqr9L5QNng1OUEtnxQyRV2L5EHMBwSojuO8wS9iUDa%2FFpCM3Z5EBPYu39%2FDj5JCmsDzDvdo0c%2FTYK6JPKdSmDCAcnV%2Fcq03J2%2B7gHneIYeOYMqWT6o8g9r0zk7sO%2F%2FfEhCk7ci2cZKSfAsBH6OQ1OiJaGIlkuJjXo4Axq8JCqu8mVWWpbP0QklillIK9LIAyWRF%2FDqlnAhGSIoClBv1hZW%2FCjrPgEjGF8l10ROf8ZGacopDkroeRS5%2Funh6rxkGdOHnmTBjLxTPT5p897rS3Yc%2BT6eL3WOILC%2FDYjavxiorcoEXnHRWf6uSiApvdH6UR3gNoJ4gFHmeLxPmjFwG6DgHwRlIcHiiNuVWphlgkToYvXtxCTfJHbj0uFfg%2FfWTtIUy25kJCGWLWo3u0zo9EJqoZeqizVxpWKFcrnWocmaIFljH5zkblWcnJejy07WvsSQwjvk3mZoqDtTc7zHMWdtFNi0WZklILDWs5LUruwYVboHweDY3fOYb7CQNSPh6HDEBQ72B%2FrfD6JE6QqQSKbma73VEdlLdvkU8t0aHdaPvrMOHC%2FbwGOqUBKUEHPcYAndchBAtWz9lHORBMADIqg2A5XuS19tITUFPvt1V5QfGBAsYovJ4ddRlsVwofHdN4A6ebZA84Yooddbim0CGVasyMJxyeLWV3WU%2B%2BP7W1hZFzeLy2t8iBVTVgW1BYPntHcP4CUE%2FR3iOhdzZpXd5lHR1dciemLvdaQg1t3SxnAv3c6SvkyAEvvwNwmR0vvKgVppaY%2F3ruvtVxwN3ZQ9sm&X-Amz-Signature=93af97153491099678de6bf0867502eb4ff4f6d1e1ab57740f213d3f7670d2af&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YSUNKKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCtdff7XbCONtd3wuJMX5sYodSEEpqDJBofHqBStxJHQIgW%2BBTa52DA3yneIpptwiA7%2FBpYfoUPRQadli7%2B92jfH4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBoiytjE%2Fuak69nsSrcA7R%2BjeZz9XEi9KFUCAGNs%2BgmQjKf706jY%2BJf50GdoaQlTbqrObSVFiI7H%2FYBFV3KN4HHA6qQp%2Fefoq2Pcqr9L5QNng1OUEtnxQyRV2L5EHMBwSojuO8wS9iUDa%2FFpCM3Z5EBPYu39%2FDj5JCmsDzDvdo0c%2FTYK6JPKdSmDCAcnV%2Fcq03J2%2B7gHneIYeOYMqWT6o8g9r0zk7sO%2F%2FfEhCk7ci2cZKSfAsBH6OQ1OiJaGIlkuJjXo4Axq8JCqu8mVWWpbP0QklillIK9LIAyWRF%2FDqlnAhGSIoClBv1hZW%2FCjrPgEjGF8l10ROf8ZGacopDkroeRS5%2Funh6rxkGdOHnmTBjLxTPT5p897rS3Yc%2BT6eL3WOILC%2FDYjavxiorcoEXnHRWf6uSiApvdH6UR3gNoJ4gFHmeLxPmjFwG6DgHwRlIcHiiNuVWphlgkToYvXtxCTfJHbj0uFfg%2FfWTtIUy25kJCGWLWo3u0zo9EJqoZeqizVxpWKFcrnWocmaIFljH5zkblWcnJejy07WvsSQwjvk3mZoqDtTc7zHMWdtFNi0WZklILDWs5LUruwYVboHweDY3fOYb7CQNSPh6HDEBQ72B%2FrfD6JE6QqQSKbma73VEdlLdvkU8t0aHdaPvrMOHC%2FbwGOqUBKUEHPcYAndchBAtWz9lHORBMADIqg2A5XuS19tITUFPvt1V5QfGBAsYovJ4ddRlsVwofHdN4A6ebZA84Yooddbim0CGVasyMJxyeLWV3WU%2B%2BP7W1hZFzeLy2t8iBVTVgW1BYPntHcP4CUE%2FR3iOhdzZpXd5lHR1dciemLvdaQg1t3SxnAv3c6SvkyAEvvwNwmR0vvKgVppaY%2F3ruvtVxwN3ZQ9sm&X-Amz-Signature=72b08fa7f60975f0b17e92a41915d653c88d06900e4cba00c9ad36e0e4d4936a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YSUNKKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCtdff7XbCONtd3wuJMX5sYodSEEpqDJBofHqBStxJHQIgW%2BBTa52DA3yneIpptwiA7%2FBpYfoUPRQadli7%2B92jfH4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBoiytjE%2Fuak69nsSrcA7R%2BjeZz9XEi9KFUCAGNs%2BgmQjKf706jY%2BJf50GdoaQlTbqrObSVFiI7H%2FYBFV3KN4HHA6qQp%2Fefoq2Pcqr9L5QNng1OUEtnxQyRV2L5EHMBwSojuO8wS9iUDa%2FFpCM3Z5EBPYu39%2FDj5JCmsDzDvdo0c%2FTYK6JPKdSmDCAcnV%2Fcq03J2%2B7gHneIYeOYMqWT6o8g9r0zk7sO%2F%2FfEhCk7ci2cZKSfAsBH6OQ1OiJaGIlkuJjXo4Axq8JCqu8mVWWpbP0QklillIK9LIAyWRF%2FDqlnAhGSIoClBv1hZW%2FCjrPgEjGF8l10ROf8ZGacopDkroeRS5%2Funh6rxkGdOHnmTBjLxTPT5p897rS3Yc%2BT6eL3WOILC%2FDYjavxiorcoEXnHRWf6uSiApvdH6UR3gNoJ4gFHmeLxPmjFwG6DgHwRlIcHiiNuVWphlgkToYvXtxCTfJHbj0uFfg%2FfWTtIUy25kJCGWLWo3u0zo9EJqoZeqizVxpWKFcrnWocmaIFljH5zkblWcnJejy07WvsSQwjvk3mZoqDtTc7zHMWdtFNi0WZklILDWs5LUruwYVboHweDY3fOYb7CQNSPh6HDEBQ72B%2FrfD6JE6QqQSKbma73VEdlLdvkU8t0aHdaPvrMOHC%2FbwGOqUBKUEHPcYAndchBAtWz9lHORBMADIqg2A5XuS19tITUFPvt1V5QfGBAsYovJ4ddRlsVwofHdN4A6ebZA84Yooddbim0CGVasyMJxyeLWV3WU%2B%2BP7W1hZFzeLy2t8iBVTVgW1BYPntHcP4CUE%2FR3iOhdzZpXd5lHR1dciemLvdaQg1t3SxnAv3c6SvkyAEvvwNwmR0vvKgVppaY%2F3ruvtVxwN3ZQ9sm&X-Amz-Signature=cc00e215e3ce8df695afd55cbf4767e83c380bb2d2d21bb77aa70f49aaad482b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
