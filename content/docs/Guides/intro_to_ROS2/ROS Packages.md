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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQZA7KK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDM7jpF9GtS8f%2Bh%2Fz%2FsDqjak%2BZRBbsYaRO5wE7uh4WLbgIhAITS5IyTnF3LrPEHJqeETes2hv%2BzFoKmH5jxTPazcIjfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv5B8Lb0t%2FRwiDsIsq3AOqnb0Zlrm3V6aKhwuQo7Hj%2FvEiqsgmk3l%2F3Ub1Fd9KDpquvyKEZKFXXMxCzbrK2qbDJkWEdNBv1Pi42gwRv3iaEoRdfsSHEAZwBXpb1yblAOu3%2F%2F2tRhRA%2FFV3a1a6EqMH0T8oX2QfQukfulv2CN5WbfGghe0LwzJrHjPUX9T8imhqSqdrE%2BelpMUoaVmAH20L5NplhZrTfGbyQc7po7Q9vJ5mlQzSIugx3943utuBy3YaoJ0KSW5iSaLeZF2YaBxe7Ah4HjfL87VKSrte4eeih7%2FChTtJ7WZ%2FqVxYc2V7CCiKfYmo4nqqK8S3j5JdknNVAI7co64kacXpMyfyP%2FwApuEmGqsu6AW%2BjqXp4MpNSeA3XCYPvTLxeqYwqq9xIEmlQ0iigNz1sFPEBO5zaJhYLFRLvga5BavJMD7sHE0obUAJRkkE%2BTANprORlITgNPBSsO1jubFwSfhoAsMcjs7HOSge%2FJUYP298Hm8AQ88qhkU3WthGKdfd2UBlPKMV%2Bl2gsPMoPst4v2FFbtX6ICo6dsxevAyYA3xKXrPT%2FZYHhem4rMAwITbe97RyByVdgWY%2FsTM5Qsm7cJZB1IewcZBrmzfqepYT2uggNrtUVgGb%2BZtmrM65GJZEmcklwzCj2%2FW%2BBjqkAT%2B9ASfv9l8OXbOhpRj4IWSVduxSSGVxatujEogiWYI65B0VJS93VL5XH30t0MZO3iUYuSbHW88PXfr1vr1gWDAZYIKlSXXNCoXv0NBooB6EeVTLa0habNRNlgNoqdv%2Ff9%2BNiyp0TdHzeoAcLgDQ6mhjarPxksvJ9SMVX12IhCyT4vf5udSirlGoT0mNp38Zo0lbXZFT9vyAHVlXuHFZxFGoxMtP&X-Amz-Signature=9a3ea6caa45d6b587fa649318e1732a475969073bcba8cf4e088a18591a397f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQZA7KK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDM7jpF9GtS8f%2Bh%2Fz%2FsDqjak%2BZRBbsYaRO5wE7uh4WLbgIhAITS5IyTnF3LrPEHJqeETes2hv%2BzFoKmH5jxTPazcIjfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv5B8Lb0t%2FRwiDsIsq3AOqnb0Zlrm3V6aKhwuQo7Hj%2FvEiqsgmk3l%2F3Ub1Fd9KDpquvyKEZKFXXMxCzbrK2qbDJkWEdNBv1Pi42gwRv3iaEoRdfsSHEAZwBXpb1yblAOu3%2F%2F2tRhRA%2FFV3a1a6EqMH0T8oX2QfQukfulv2CN5WbfGghe0LwzJrHjPUX9T8imhqSqdrE%2BelpMUoaVmAH20L5NplhZrTfGbyQc7po7Q9vJ5mlQzSIugx3943utuBy3YaoJ0KSW5iSaLeZF2YaBxe7Ah4HjfL87VKSrte4eeih7%2FChTtJ7WZ%2FqVxYc2V7CCiKfYmo4nqqK8S3j5JdknNVAI7co64kacXpMyfyP%2FwApuEmGqsu6AW%2BjqXp4MpNSeA3XCYPvTLxeqYwqq9xIEmlQ0iigNz1sFPEBO5zaJhYLFRLvga5BavJMD7sHE0obUAJRkkE%2BTANprORlITgNPBSsO1jubFwSfhoAsMcjs7HOSge%2FJUYP298Hm8AQ88qhkU3WthGKdfd2UBlPKMV%2Bl2gsPMoPst4v2FFbtX6ICo6dsxevAyYA3xKXrPT%2FZYHhem4rMAwITbe97RyByVdgWY%2FsTM5Qsm7cJZB1IewcZBrmzfqepYT2uggNrtUVgGb%2BZtmrM65GJZEmcklwzCj2%2FW%2BBjqkAT%2B9ASfv9l8OXbOhpRj4IWSVduxSSGVxatujEogiWYI65B0VJS93VL5XH30t0MZO3iUYuSbHW88PXfr1vr1gWDAZYIKlSXXNCoXv0NBooB6EeVTLa0habNRNlgNoqdv%2Ff9%2BNiyp0TdHzeoAcLgDQ6mhjarPxksvJ9SMVX12IhCyT4vf5udSirlGoT0mNp38Zo0lbXZFT9vyAHVlXuHFZxFGoxMtP&X-Amz-Signature=3823f47f5671c621488c5ca709fe0566630ee9cfed6191cb327eafa3cb9f7ba2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQZA7KK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDM7jpF9GtS8f%2Bh%2Fz%2FsDqjak%2BZRBbsYaRO5wE7uh4WLbgIhAITS5IyTnF3LrPEHJqeETes2hv%2BzFoKmH5jxTPazcIjfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv5B8Lb0t%2FRwiDsIsq3AOqnb0Zlrm3V6aKhwuQo7Hj%2FvEiqsgmk3l%2F3Ub1Fd9KDpquvyKEZKFXXMxCzbrK2qbDJkWEdNBv1Pi42gwRv3iaEoRdfsSHEAZwBXpb1yblAOu3%2F%2F2tRhRA%2FFV3a1a6EqMH0T8oX2QfQukfulv2CN5WbfGghe0LwzJrHjPUX9T8imhqSqdrE%2BelpMUoaVmAH20L5NplhZrTfGbyQc7po7Q9vJ5mlQzSIugx3943utuBy3YaoJ0KSW5iSaLeZF2YaBxe7Ah4HjfL87VKSrte4eeih7%2FChTtJ7WZ%2FqVxYc2V7CCiKfYmo4nqqK8S3j5JdknNVAI7co64kacXpMyfyP%2FwApuEmGqsu6AW%2BjqXp4MpNSeA3XCYPvTLxeqYwqq9xIEmlQ0iigNz1sFPEBO5zaJhYLFRLvga5BavJMD7sHE0obUAJRkkE%2BTANprORlITgNPBSsO1jubFwSfhoAsMcjs7HOSge%2FJUYP298Hm8AQ88qhkU3WthGKdfd2UBlPKMV%2Bl2gsPMoPst4v2FFbtX6ICo6dsxevAyYA3xKXrPT%2FZYHhem4rMAwITbe97RyByVdgWY%2FsTM5Qsm7cJZB1IewcZBrmzfqepYT2uggNrtUVgGb%2BZtmrM65GJZEmcklwzCj2%2FW%2BBjqkAT%2B9ASfv9l8OXbOhpRj4IWSVduxSSGVxatujEogiWYI65B0VJS93VL5XH30t0MZO3iUYuSbHW88PXfr1vr1gWDAZYIKlSXXNCoXv0NBooB6EeVTLa0habNRNlgNoqdv%2Ff9%2BNiyp0TdHzeoAcLgDQ6mhjarPxksvJ9SMVX12IhCyT4vf5udSirlGoT0mNp38Zo0lbXZFT9vyAHVlXuHFZxFGoxMtP&X-Amz-Signature=3fee8b36b173773a6b476bf765a9cdb0ab38e67366995e2af7804be57ff8dcc6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQZA7KK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDM7jpF9GtS8f%2Bh%2Fz%2FsDqjak%2BZRBbsYaRO5wE7uh4WLbgIhAITS5IyTnF3LrPEHJqeETes2hv%2BzFoKmH5jxTPazcIjfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv5B8Lb0t%2FRwiDsIsq3AOqnb0Zlrm3V6aKhwuQo7Hj%2FvEiqsgmk3l%2F3Ub1Fd9KDpquvyKEZKFXXMxCzbrK2qbDJkWEdNBv1Pi42gwRv3iaEoRdfsSHEAZwBXpb1yblAOu3%2F%2F2tRhRA%2FFV3a1a6EqMH0T8oX2QfQukfulv2CN5WbfGghe0LwzJrHjPUX9T8imhqSqdrE%2BelpMUoaVmAH20L5NplhZrTfGbyQc7po7Q9vJ5mlQzSIugx3943utuBy3YaoJ0KSW5iSaLeZF2YaBxe7Ah4HjfL87VKSrte4eeih7%2FChTtJ7WZ%2FqVxYc2V7CCiKfYmo4nqqK8S3j5JdknNVAI7co64kacXpMyfyP%2FwApuEmGqsu6AW%2BjqXp4MpNSeA3XCYPvTLxeqYwqq9xIEmlQ0iigNz1sFPEBO5zaJhYLFRLvga5BavJMD7sHE0obUAJRkkE%2BTANprORlITgNPBSsO1jubFwSfhoAsMcjs7HOSge%2FJUYP298Hm8AQ88qhkU3WthGKdfd2UBlPKMV%2Bl2gsPMoPst4v2FFbtX6ICo6dsxevAyYA3xKXrPT%2FZYHhem4rMAwITbe97RyByVdgWY%2FsTM5Qsm7cJZB1IewcZBrmzfqepYT2uggNrtUVgGb%2BZtmrM65GJZEmcklwzCj2%2FW%2BBjqkAT%2B9ASfv9l8OXbOhpRj4IWSVduxSSGVxatujEogiWYI65B0VJS93VL5XH30t0MZO3iUYuSbHW88PXfr1vr1gWDAZYIKlSXXNCoXv0NBooB6EeVTLa0habNRNlgNoqdv%2Ff9%2BNiyp0TdHzeoAcLgDQ6mhjarPxksvJ9SMVX12IhCyT4vf5udSirlGoT0mNp38Zo0lbXZFT9vyAHVlXuHFZxFGoxMtP&X-Amz-Signature=4fa0d01479544ece0e9d3f9b9733976ec0281d4bde116cc7d4841c62914995bb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQZA7KK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDM7jpF9GtS8f%2Bh%2Fz%2FsDqjak%2BZRBbsYaRO5wE7uh4WLbgIhAITS5IyTnF3LrPEHJqeETes2hv%2BzFoKmH5jxTPazcIjfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv5B8Lb0t%2FRwiDsIsq3AOqnb0Zlrm3V6aKhwuQo7Hj%2FvEiqsgmk3l%2F3Ub1Fd9KDpquvyKEZKFXXMxCzbrK2qbDJkWEdNBv1Pi42gwRv3iaEoRdfsSHEAZwBXpb1yblAOu3%2F%2F2tRhRA%2FFV3a1a6EqMH0T8oX2QfQukfulv2CN5WbfGghe0LwzJrHjPUX9T8imhqSqdrE%2BelpMUoaVmAH20L5NplhZrTfGbyQc7po7Q9vJ5mlQzSIugx3943utuBy3YaoJ0KSW5iSaLeZF2YaBxe7Ah4HjfL87VKSrte4eeih7%2FChTtJ7WZ%2FqVxYc2V7CCiKfYmo4nqqK8S3j5JdknNVAI7co64kacXpMyfyP%2FwApuEmGqsu6AW%2BjqXp4MpNSeA3XCYPvTLxeqYwqq9xIEmlQ0iigNz1sFPEBO5zaJhYLFRLvga5BavJMD7sHE0obUAJRkkE%2BTANprORlITgNPBSsO1jubFwSfhoAsMcjs7HOSge%2FJUYP298Hm8AQ88qhkU3WthGKdfd2UBlPKMV%2Bl2gsPMoPst4v2FFbtX6ICo6dsxevAyYA3xKXrPT%2FZYHhem4rMAwITbe97RyByVdgWY%2FsTM5Qsm7cJZB1IewcZBrmzfqepYT2uggNrtUVgGb%2BZtmrM65GJZEmcklwzCj2%2FW%2BBjqkAT%2B9ASfv9l8OXbOhpRj4IWSVduxSSGVxatujEogiWYI65B0VJS93VL5XH30t0MZO3iUYuSbHW88PXfr1vr1gWDAZYIKlSXXNCoXv0NBooB6EeVTLa0habNRNlgNoqdv%2Ff9%2BNiyp0TdHzeoAcLgDQ6mhjarPxksvJ9SMVX12IhCyT4vf5udSirlGoT0mNp38Zo0lbXZFT9vyAHVlXuHFZxFGoxMtP&X-Amz-Signature=68e4390dc7fccbcda253ad91d2f418f7d87c20e18538112306cf6a0fa0482f94&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQZA7KK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDM7jpF9GtS8f%2Bh%2Fz%2FsDqjak%2BZRBbsYaRO5wE7uh4WLbgIhAITS5IyTnF3LrPEHJqeETes2hv%2BzFoKmH5jxTPazcIjfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv5B8Lb0t%2FRwiDsIsq3AOqnb0Zlrm3V6aKhwuQo7Hj%2FvEiqsgmk3l%2F3Ub1Fd9KDpquvyKEZKFXXMxCzbrK2qbDJkWEdNBv1Pi42gwRv3iaEoRdfsSHEAZwBXpb1yblAOu3%2F%2F2tRhRA%2FFV3a1a6EqMH0T8oX2QfQukfulv2CN5WbfGghe0LwzJrHjPUX9T8imhqSqdrE%2BelpMUoaVmAH20L5NplhZrTfGbyQc7po7Q9vJ5mlQzSIugx3943utuBy3YaoJ0KSW5iSaLeZF2YaBxe7Ah4HjfL87VKSrte4eeih7%2FChTtJ7WZ%2FqVxYc2V7CCiKfYmo4nqqK8S3j5JdknNVAI7co64kacXpMyfyP%2FwApuEmGqsu6AW%2BjqXp4MpNSeA3XCYPvTLxeqYwqq9xIEmlQ0iigNz1sFPEBO5zaJhYLFRLvga5BavJMD7sHE0obUAJRkkE%2BTANprORlITgNPBSsO1jubFwSfhoAsMcjs7HOSge%2FJUYP298Hm8AQ88qhkU3WthGKdfd2UBlPKMV%2Bl2gsPMoPst4v2FFbtX6ICo6dsxevAyYA3xKXrPT%2FZYHhem4rMAwITbe97RyByVdgWY%2FsTM5Qsm7cJZB1IewcZBrmzfqepYT2uggNrtUVgGb%2BZtmrM65GJZEmcklwzCj2%2FW%2BBjqkAT%2B9ASfv9l8OXbOhpRj4IWSVduxSSGVxatujEogiWYI65B0VJS93VL5XH30t0MZO3iUYuSbHW88PXfr1vr1gWDAZYIKlSXXNCoXv0NBooB6EeVTLa0habNRNlgNoqdv%2Ff9%2BNiyp0TdHzeoAcLgDQ6mhjarPxksvJ9SMVX12IhCyT4vf5udSirlGoT0mNp38Zo0lbXZFT9vyAHVlXuHFZxFGoxMtP&X-Amz-Signature=970e09fcbcc7176128a69ccabd4635ffa0665b893e6086176c5a388357be4734&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQZA7KK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDM7jpF9GtS8f%2Bh%2Fz%2FsDqjak%2BZRBbsYaRO5wE7uh4WLbgIhAITS5IyTnF3LrPEHJqeETes2hv%2BzFoKmH5jxTPazcIjfKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv5B8Lb0t%2FRwiDsIsq3AOqnb0Zlrm3V6aKhwuQo7Hj%2FvEiqsgmk3l%2F3Ub1Fd9KDpquvyKEZKFXXMxCzbrK2qbDJkWEdNBv1Pi42gwRv3iaEoRdfsSHEAZwBXpb1yblAOu3%2F%2F2tRhRA%2FFV3a1a6EqMH0T8oX2QfQukfulv2CN5WbfGghe0LwzJrHjPUX9T8imhqSqdrE%2BelpMUoaVmAH20L5NplhZrTfGbyQc7po7Q9vJ5mlQzSIugx3943utuBy3YaoJ0KSW5iSaLeZF2YaBxe7Ah4HjfL87VKSrte4eeih7%2FChTtJ7WZ%2FqVxYc2V7CCiKfYmo4nqqK8S3j5JdknNVAI7co64kacXpMyfyP%2FwApuEmGqsu6AW%2BjqXp4MpNSeA3XCYPvTLxeqYwqq9xIEmlQ0iigNz1sFPEBO5zaJhYLFRLvga5BavJMD7sHE0obUAJRkkE%2BTANprORlITgNPBSsO1jubFwSfhoAsMcjs7HOSge%2FJUYP298Hm8AQ88qhkU3WthGKdfd2UBlPKMV%2Bl2gsPMoPst4v2FFbtX6ICo6dsxevAyYA3xKXrPT%2FZYHhem4rMAwITbe97RyByVdgWY%2FsTM5Qsm7cJZB1IewcZBrmzfqepYT2uggNrtUVgGb%2BZtmrM65GJZEmcklwzCj2%2FW%2BBjqkAT%2B9ASfv9l8OXbOhpRj4IWSVduxSSGVxatujEogiWYI65B0VJS93VL5XH30t0MZO3iUYuSbHW88PXfr1vr1gWDAZYIKlSXXNCoXv0NBooB6EeVTLa0habNRNlgNoqdv%2Ff9%2BNiyp0TdHzeoAcLgDQ6mhjarPxksvJ9SMVX12IhCyT4vf5udSirlGoT0mNp38Zo0lbXZFT9vyAHVlXuHFZxFGoxMtP&X-Amz-Signature=8e0336372e24dc23ef431509b31fcf2cf6fc2613d711a688a9318451321462fe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
