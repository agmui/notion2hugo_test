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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOYBYFSA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEL2%2F3FWPB1Rv%2BuLtillRknQxlamjQdYErPEr6baviWuAiEAwb%2FuXFhvzahA9jfWNDTsIiAjwW5ktlQpmBN20gE5hQUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEk6delXHWIRJ%2BGaWyrcA31sN4CnWyEcdqcV73wgwgfDD8CO2EsowZtA9s3B9euYxBWl1Bzot%2BipFmHxdFJNogbGV8mg1NfoeMClYJiHXFjP9NyqVZHPF898AxJIki9gk7qlXLYy4BCO1y7x4E61d%2BskQC2Z4mMMomMENWY%2BJ9knYRFBv5uXEFsounyCu8oNzphkjGMsdbR7Ri7nkiba2hTOFeCrSWR%2BwvSrGwPwC34z2ENT7xUKs%2FQF6jj%2BvFCHq8vXiHgZsUcBiWNkacp6V9a%2Bl6PXAZMBlUkBo6Xlk86ttJC0WpP82Y8Z%2BIzA9%2FG%2BWhrQr2ANRHMM0M%2BP4Ptp%2F27IkbRGoLjRTM%2FEH6HKA%2Fcx70dUoRrdIfKNwUXLewKinNxZLnT7P1pkwLJMoMlw4uK6gGC1Yz6ym7FxwRVYP6v2RcqRB4bFeOy4Aj49cFmaQTpOsYFlv60puDqCNcOjTb4V1k5y4Z4kbbqxx7pHIllZbNvyGt%2FaIUyEyWTMSC0mstsAEELhV4iqx1nUMq1iz4Kj6QDHPuAbOqNfhTg5Lc1mBAplDIc17qbGQFWzWP16bm7Uo8WMGoMLds4nDclkADU8lVmeK14MuybXjehMgV0DhLMel3IRT3A7YZrv8vg1DE28wm8iShulXSuMMO%2Fc0sMGOqUBWl3ZuZPWvYVCWMpQsxau2F%2FFOHbOaVzvUvs%2BoOjyJ1Abf9C%2BW%2FvHL8nZNlIudtn2q5HnZlvKRD%2BvGdmtNIBy7NBRTt6Sy19Iov0VhSgckj9vf88lWSuVFML27WAlY2C3%2Be%2F5MWULtv4eEqttx6nwaDngaUtXguHL%2Fi91gNIU3b32khtId%2BO9F%2FMQV1toKSU9ZL%2BJzLWPUTnlc4dRv5QxnTh2lPSn&X-Amz-Signature=4186d607ed78745924bf7b7af69ee317a067f4e923eb092c99df750577c96121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOYBYFSA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEL2%2F3FWPB1Rv%2BuLtillRknQxlamjQdYErPEr6baviWuAiEAwb%2FuXFhvzahA9jfWNDTsIiAjwW5ktlQpmBN20gE5hQUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEk6delXHWIRJ%2BGaWyrcA31sN4CnWyEcdqcV73wgwgfDD8CO2EsowZtA9s3B9euYxBWl1Bzot%2BipFmHxdFJNogbGV8mg1NfoeMClYJiHXFjP9NyqVZHPF898AxJIki9gk7qlXLYy4BCO1y7x4E61d%2BskQC2Z4mMMomMENWY%2BJ9knYRFBv5uXEFsounyCu8oNzphkjGMsdbR7Ri7nkiba2hTOFeCrSWR%2BwvSrGwPwC34z2ENT7xUKs%2FQF6jj%2BvFCHq8vXiHgZsUcBiWNkacp6V9a%2Bl6PXAZMBlUkBo6Xlk86ttJC0WpP82Y8Z%2BIzA9%2FG%2BWhrQr2ANRHMM0M%2BP4Ptp%2F27IkbRGoLjRTM%2FEH6HKA%2Fcx70dUoRrdIfKNwUXLewKinNxZLnT7P1pkwLJMoMlw4uK6gGC1Yz6ym7FxwRVYP6v2RcqRB4bFeOy4Aj49cFmaQTpOsYFlv60puDqCNcOjTb4V1k5y4Z4kbbqxx7pHIllZbNvyGt%2FaIUyEyWTMSC0mstsAEELhV4iqx1nUMq1iz4Kj6QDHPuAbOqNfhTg5Lc1mBAplDIc17qbGQFWzWP16bm7Uo8WMGoMLds4nDclkADU8lVmeK14MuybXjehMgV0DhLMel3IRT3A7YZrv8vg1DE28wm8iShulXSuMMO%2Fc0sMGOqUBWl3ZuZPWvYVCWMpQsxau2F%2FFOHbOaVzvUvs%2BoOjyJ1Abf9C%2BW%2FvHL8nZNlIudtn2q5HnZlvKRD%2BvGdmtNIBy7NBRTt6Sy19Iov0VhSgckj9vf88lWSuVFML27WAlY2C3%2Be%2F5MWULtv4eEqttx6nwaDngaUtXguHL%2Fi91gNIU3b32khtId%2BO9F%2FMQV1toKSU9ZL%2BJzLWPUTnlc4dRv5QxnTh2lPSn&X-Amz-Signature=aa4b13f5ea464e6e1aa86a68c109fbb0ccdc652341d470c152082b99352a883f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOYBYFSA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEL2%2F3FWPB1Rv%2BuLtillRknQxlamjQdYErPEr6baviWuAiEAwb%2FuXFhvzahA9jfWNDTsIiAjwW5ktlQpmBN20gE5hQUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEk6delXHWIRJ%2BGaWyrcA31sN4CnWyEcdqcV73wgwgfDD8CO2EsowZtA9s3B9euYxBWl1Bzot%2BipFmHxdFJNogbGV8mg1NfoeMClYJiHXFjP9NyqVZHPF898AxJIki9gk7qlXLYy4BCO1y7x4E61d%2BskQC2Z4mMMomMENWY%2BJ9knYRFBv5uXEFsounyCu8oNzphkjGMsdbR7Ri7nkiba2hTOFeCrSWR%2BwvSrGwPwC34z2ENT7xUKs%2FQF6jj%2BvFCHq8vXiHgZsUcBiWNkacp6V9a%2Bl6PXAZMBlUkBo6Xlk86ttJC0WpP82Y8Z%2BIzA9%2FG%2BWhrQr2ANRHMM0M%2BP4Ptp%2F27IkbRGoLjRTM%2FEH6HKA%2Fcx70dUoRrdIfKNwUXLewKinNxZLnT7P1pkwLJMoMlw4uK6gGC1Yz6ym7FxwRVYP6v2RcqRB4bFeOy4Aj49cFmaQTpOsYFlv60puDqCNcOjTb4V1k5y4Z4kbbqxx7pHIllZbNvyGt%2FaIUyEyWTMSC0mstsAEELhV4iqx1nUMq1iz4Kj6QDHPuAbOqNfhTg5Lc1mBAplDIc17qbGQFWzWP16bm7Uo8WMGoMLds4nDclkADU8lVmeK14MuybXjehMgV0DhLMel3IRT3A7YZrv8vg1DE28wm8iShulXSuMMO%2Fc0sMGOqUBWl3ZuZPWvYVCWMpQsxau2F%2FFOHbOaVzvUvs%2BoOjyJ1Abf9C%2BW%2FvHL8nZNlIudtn2q5HnZlvKRD%2BvGdmtNIBy7NBRTt6Sy19Iov0VhSgckj9vf88lWSuVFML27WAlY2C3%2Be%2F5MWULtv4eEqttx6nwaDngaUtXguHL%2Fi91gNIU3b32khtId%2BO9F%2FMQV1toKSU9ZL%2BJzLWPUTnlc4dRv5QxnTh2lPSn&X-Amz-Signature=2914936d60565b0d152ff292cc86575360e47adb7b5f539a7fba6a4f321d6291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOYBYFSA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEL2%2F3FWPB1Rv%2BuLtillRknQxlamjQdYErPEr6baviWuAiEAwb%2FuXFhvzahA9jfWNDTsIiAjwW5ktlQpmBN20gE5hQUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEk6delXHWIRJ%2BGaWyrcA31sN4CnWyEcdqcV73wgwgfDD8CO2EsowZtA9s3B9euYxBWl1Bzot%2BipFmHxdFJNogbGV8mg1NfoeMClYJiHXFjP9NyqVZHPF898AxJIki9gk7qlXLYy4BCO1y7x4E61d%2BskQC2Z4mMMomMENWY%2BJ9knYRFBv5uXEFsounyCu8oNzphkjGMsdbR7Ri7nkiba2hTOFeCrSWR%2BwvSrGwPwC34z2ENT7xUKs%2FQF6jj%2BvFCHq8vXiHgZsUcBiWNkacp6V9a%2Bl6PXAZMBlUkBo6Xlk86ttJC0WpP82Y8Z%2BIzA9%2FG%2BWhrQr2ANRHMM0M%2BP4Ptp%2F27IkbRGoLjRTM%2FEH6HKA%2Fcx70dUoRrdIfKNwUXLewKinNxZLnT7P1pkwLJMoMlw4uK6gGC1Yz6ym7FxwRVYP6v2RcqRB4bFeOy4Aj49cFmaQTpOsYFlv60puDqCNcOjTb4V1k5y4Z4kbbqxx7pHIllZbNvyGt%2FaIUyEyWTMSC0mstsAEELhV4iqx1nUMq1iz4Kj6QDHPuAbOqNfhTg5Lc1mBAplDIc17qbGQFWzWP16bm7Uo8WMGoMLds4nDclkADU8lVmeK14MuybXjehMgV0DhLMel3IRT3A7YZrv8vg1DE28wm8iShulXSuMMO%2Fc0sMGOqUBWl3ZuZPWvYVCWMpQsxau2F%2FFOHbOaVzvUvs%2BoOjyJ1Abf9C%2BW%2FvHL8nZNlIudtn2q5HnZlvKRD%2BvGdmtNIBy7NBRTt6Sy19Iov0VhSgckj9vf88lWSuVFML27WAlY2C3%2Be%2F5MWULtv4eEqttx6nwaDngaUtXguHL%2Fi91gNIU3b32khtId%2BO9F%2FMQV1toKSU9ZL%2BJzLWPUTnlc4dRv5QxnTh2lPSn&X-Amz-Signature=d5a728031607cb017c78bc5c4f561878ad205c9b0e9469a7ce14118915458f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOYBYFSA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEL2%2F3FWPB1Rv%2BuLtillRknQxlamjQdYErPEr6baviWuAiEAwb%2FuXFhvzahA9jfWNDTsIiAjwW5ktlQpmBN20gE5hQUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEk6delXHWIRJ%2BGaWyrcA31sN4CnWyEcdqcV73wgwgfDD8CO2EsowZtA9s3B9euYxBWl1Bzot%2BipFmHxdFJNogbGV8mg1NfoeMClYJiHXFjP9NyqVZHPF898AxJIki9gk7qlXLYy4BCO1y7x4E61d%2BskQC2Z4mMMomMENWY%2BJ9knYRFBv5uXEFsounyCu8oNzphkjGMsdbR7Ri7nkiba2hTOFeCrSWR%2BwvSrGwPwC34z2ENT7xUKs%2FQF6jj%2BvFCHq8vXiHgZsUcBiWNkacp6V9a%2Bl6PXAZMBlUkBo6Xlk86ttJC0WpP82Y8Z%2BIzA9%2FG%2BWhrQr2ANRHMM0M%2BP4Ptp%2F27IkbRGoLjRTM%2FEH6HKA%2Fcx70dUoRrdIfKNwUXLewKinNxZLnT7P1pkwLJMoMlw4uK6gGC1Yz6ym7FxwRVYP6v2RcqRB4bFeOy4Aj49cFmaQTpOsYFlv60puDqCNcOjTb4V1k5y4Z4kbbqxx7pHIllZbNvyGt%2FaIUyEyWTMSC0mstsAEELhV4iqx1nUMq1iz4Kj6QDHPuAbOqNfhTg5Lc1mBAplDIc17qbGQFWzWP16bm7Uo8WMGoMLds4nDclkADU8lVmeK14MuybXjehMgV0DhLMel3IRT3A7YZrv8vg1DE28wm8iShulXSuMMO%2Fc0sMGOqUBWl3ZuZPWvYVCWMpQsxau2F%2FFOHbOaVzvUvs%2BoOjyJ1Abf9C%2BW%2FvHL8nZNlIudtn2q5HnZlvKRD%2BvGdmtNIBy7NBRTt6Sy19Iov0VhSgckj9vf88lWSuVFML27WAlY2C3%2Be%2F5MWULtv4eEqttx6nwaDngaUtXguHL%2Fi91gNIU3b32khtId%2BO9F%2FMQV1toKSU9ZL%2BJzLWPUTnlc4dRv5QxnTh2lPSn&X-Amz-Signature=e1eb9802151959376dba8dcc469a08c84f92b08b988043e19f7b8e96512be6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOYBYFSA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEL2%2F3FWPB1Rv%2BuLtillRknQxlamjQdYErPEr6baviWuAiEAwb%2FuXFhvzahA9jfWNDTsIiAjwW5ktlQpmBN20gE5hQUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEk6delXHWIRJ%2BGaWyrcA31sN4CnWyEcdqcV73wgwgfDD8CO2EsowZtA9s3B9euYxBWl1Bzot%2BipFmHxdFJNogbGV8mg1NfoeMClYJiHXFjP9NyqVZHPF898AxJIki9gk7qlXLYy4BCO1y7x4E61d%2BskQC2Z4mMMomMENWY%2BJ9knYRFBv5uXEFsounyCu8oNzphkjGMsdbR7Ri7nkiba2hTOFeCrSWR%2BwvSrGwPwC34z2ENT7xUKs%2FQF6jj%2BvFCHq8vXiHgZsUcBiWNkacp6V9a%2Bl6PXAZMBlUkBo6Xlk86ttJC0WpP82Y8Z%2BIzA9%2FG%2BWhrQr2ANRHMM0M%2BP4Ptp%2F27IkbRGoLjRTM%2FEH6HKA%2Fcx70dUoRrdIfKNwUXLewKinNxZLnT7P1pkwLJMoMlw4uK6gGC1Yz6ym7FxwRVYP6v2RcqRB4bFeOy4Aj49cFmaQTpOsYFlv60puDqCNcOjTb4V1k5y4Z4kbbqxx7pHIllZbNvyGt%2FaIUyEyWTMSC0mstsAEELhV4iqx1nUMq1iz4Kj6QDHPuAbOqNfhTg5Lc1mBAplDIc17qbGQFWzWP16bm7Uo8WMGoMLds4nDclkADU8lVmeK14MuybXjehMgV0DhLMel3IRT3A7YZrv8vg1DE28wm8iShulXSuMMO%2Fc0sMGOqUBWl3ZuZPWvYVCWMpQsxau2F%2FFOHbOaVzvUvs%2BoOjyJ1Abf9C%2BW%2FvHL8nZNlIudtn2q5HnZlvKRD%2BvGdmtNIBy7NBRTt6Sy19Iov0VhSgckj9vf88lWSuVFML27WAlY2C3%2Be%2F5MWULtv4eEqttx6nwaDngaUtXguHL%2Fi91gNIU3b32khtId%2BO9F%2FMQV1toKSU9ZL%2BJzLWPUTnlc4dRv5QxnTh2lPSn&X-Amz-Signature=61f6b6aa1b85289a2d615453282400b7a81724867e127ee1e5af33196b8347af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOYBYFSA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEL2%2F3FWPB1Rv%2BuLtillRknQxlamjQdYErPEr6baviWuAiEAwb%2FuXFhvzahA9jfWNDTsIiAjwW5ktlQpmBN20gE5hQUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEk6delXHWIRJ%2BGaWyrcA31sN4CnWyEcdqcV73wgwgfDD8CO2EsowZtA9s3B9euYxBWl1Bzot%2BipFmHxdFJNogbGV8mg1NfoeMClYJiHXFjP9NyqVZHPF898AxJIki9gk7qlXLYy4BCO1y7x4E61d%2BskQC2Z4mMMomMENWY%2BJ9knYRFBv5uXEFsounyCu8oNzphkjGMsdbR7Ri7nkiba2hTOFeCrSWR%2BwvSrGwPwC34z2ENT7xUKs%2FQF6jj%2BvFCHq8vXiHgZsUcBiWNkacp6V9a%2Bl6PXAZMBlUkBo6Xlk86ttJC0WpP82Y8Z%2BIzA9%2FG%2BWhrQr2ANRHMM0M%2BP4Ptp%2F27IkbRGoLjRTM%2FEH6HKA%2Fcx70dUoRrdIfKNwUXLewKinNxZLnT7P1pkwLJMoMlw4uK6gGC1Yz6ym7FxwRVYP6v2RcqRB4bFeOy4Aj49cFmaQTpOsYFlv60puDqCNcOjTb4V1k5y4Z4kbbqxx7pHIllZbNvyGt%2FaIUyEyWTMSC0mstsAEELhV4iqx1nUMq1iz4Kj6QDHPuAbOqNfhTg5Lc1mBAplDIc17qbGQFWzWP16bm7Uo8WMGoMLds4nDclkADU8lVmeK14MuybXjehMgV0DhLMel3IRT3A7YZrv8vg1DE28wm8iShulXSuMMO%2Fc0sMGOqUBWl3ZuZPWvYVCWMpQsxau2F%2FFOHbOaVzvUvs%2BoOjyJ1Abf9C%2BW%2FvHL8nZNlIudtn2q5HnZlvKRD%2BvGdmtNIBy7NBRTt6Sy19Iov0VhSgckj9vf88lWSuVFML27WAlY2C3%2Be%2F5MWULtv4eEqttx6nwaDngaUtXguHL%2Fi91gNIU3b32khtId%2BO9F%2FMQV1toKSU9ZL%2BJzLWPUTnlc4dRv5QxnTh2lPSn&X-Amz-Signature=1f657a6ca2a1b86f28f8f2e41e42ec3ee2a91b7dddb2f668289c17c778de7583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
