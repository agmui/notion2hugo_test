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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ONSTPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDspIPwczvKJowxANlPiQRy4XljfiahmGKv5xBJaEGaZAIhAOSGeOalJ8fJu%2Fj%2BMDQd27UbJXWJDG27bwjoQLB4PAg6KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIi%2BNaIDWjsHOUliEq3AN6hbWHkEuQQ3ezm3%2FQEu%2FxK%2FmQ1Ssx0kODhdcqjaAUUF4AlywRklh5jXDrYltikSIPI2LtuvQ1GQLAXlZ7%2F%2FN004CbWf%2FWlcOzSsvUS%2BWuO59JAk%2FRjdGxD2w1AVbO1gNqn6WwthyDNa%2B93E1HTDNqdrxlHaHBX%2BrzrlFl3J89pYThAh5BGH2BVzTUb5hDj8DmzoEEW5Vy2FA2iSgIHcnIia%2FR4qu9plEkktGnKkhwfT3S2fGgfp4CTzJonn35yMRMyG1JvMm7JbQus8v1Umn47Rw%2B7%2FeXgaek28Pmmnz3X8AipHcC2pYh6bhYC2jse2ofhQ0dWrGt6wOocVGtWkSHuk6GuJaMcSSf20waVlzGmdr8unGwgwQCifxrZ749BuAjPMB2uC3ait54jYaosGpLKOnw7M2RiNI3w49w5n7E4X7G1DhrK4sC449mSmsGJ6VANqs3C8UTwijELk7VnOYpi7jsWnQsCK%2Bl7tr6kR%2Fr9MBNquX7Srsq59Kc5NAFRpwVJJpAsOI7l2GlzdBVphGFHeFyG4Qt59cYuYtp3evfUJQVQV4yL94pXoLkEsYvjZkDcbzfi7CB6eDyC4HL4IZFys30GtJxwd7tkPxb45fWs88LhoiyQ4dLP7VEIDDswr%2FBBjqkASlBiftC7VxIW1nIbJzwRcP6rpe8dgus2JNVzKr75gAAhhm9f78NZS4XgDqfbbzj9KppQaP7lqA1%2B6lq3SpxX9eB7ssyCpSJtuez1MGNfuKWO71tGfZX33BQmxHtthmx5B92sma8VqHT7xXR%2FFBbI0tTudQfvm8Ueje5UUfQOHwaVITepoXLPsC97iHhfXKG3cRYOgiH8VC1c%2FKg5SSDOA1Pjd%2BU&X-Amz-Signature=2fc3ab6db2281e9c65bf5d3f7a6e853dfd2c63d53284771b28de9c2394bbfd30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ONSTPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDspIPwczvKJowxANlPiQRy4XljfiahmGKv5xBJaEGaZAIhAOSGeOalJ8fJu%2Fj%2BMDQd27UbJXWJDG27bwjoQLB4PAg6KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIi%2BNaIDWjsHOUliEq3AN6hbWHkEuQQ3ezm3%2FQEu%2FxK%2FmQ1Ssx0kODhdcqjaAUUF4AlywRklh5jXDrYltikSIPI2LtuvQ1GQLAXlZ7%2F%2FN004CbWf%2FWlcOzSsvUS%2BWuO59JAk%2FRjdGxD2w1AVbO1gNqn6WwthyDNa%2B93E1HTDNqdrxlHaHBX%2BrzrlFl3J89pYThAh5BGH2BVzTUb5hDj8DmzoEEW5Vy2FA2iSgIHcnIia%2FR4qu9plEkktGnKkhwfT3S2fGgfp4CTzJonn35yMRMyG1JvMm7JbQus8v1Umn47Rw%2B7%2FeXgaek28Pmmnz3X8AipHcC2pYh6bhYC2jse2ofhQ0dWrGt6wOocVGtWkSHuk6GuJaMcSSf20waVlzGmdr8unGwgwQCifxrZ749BuAjPMB2uC3ait54jYaosGpLKOnw7M2RiNI3w49w5n7E4X7G1DhrK4sC449mSmsGJ6VANqs3C8UTwijELk7VnOYpi7jsWnQsCK%2Bl7tr6kR%2Fr9MBNquX7Srsq59Kc5NAFRpwVJJpAsOI7l2GlzdBVphGFHeFyG4Qt59cYuYtp3evfUJQVQV4yL94pXoLkEsYvjZkDcbzfi7CB6eDyC4HL4IZFys30GtJxwd7tkPxb45fWs88LhoiyQ4dLP7VEIDDswr%2FBBjqkASlBiftC7VxIW1nIbJzwRcP6rpe8dgus2JNVzKr75gAAhhm9f78NZS4XgDqfbbzj9KppQaP7lqA1%2B6lq3SpxX9eB7ssyCpSJtuez1MGNfuKWO71tGfZX33BQmxHtthmx5B92sma8VqHT7xXR%2FFBbI0tTudQfvm8Ueje5UUfQOHwaVITepoXLPsC97iHhfXKG3cRYOgiH8VC1c%2FKg5SSDOA1Pjd%2BU&X-Amz-Signature=ffff771d1fe2ededec3a07d144af31f1ee5820385cdff7f64f1908fd832c5570&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ONSTPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDspIPwczvKJowxANlPiQRy4XljfiahmGKv5xBJaEGaZAIhAOSGeOalJ8fJu%2Fj%2BMDQd27UbJXWJDG27bwjoQLB4PAg6KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIi%2BNaIDWjsHOUliEq3AN6hbWHkEuQQ3ezm3%2FQEu%2FxK%2FmQ1Ssx0kODhdcqjaAUUF4AlywRklh5jXDrYltikSIPI2LtuvQ1GQLAXlZ7%2F%2FN004CbWf%2FWlcOzSsvUS%2BWuO59JAk%2FRjdGxD2w1AVbO1gNqn6WwthyDNa%2B93E1HTDNqdrxlHaHBX%2BrzrlFl3J89pYThAh5BGH2BVzTUb5hDj8DmzoEEW5Vy2FA2iSgIHcnIia%2FR4qu9plEkktGnKkhwfT3S2fGgfp4CTzJonn35yMRMyG1JvMm7JbQus8v1Umn47Rw%2B7%2FeXgaek28Pmmnz3X8AipHcC2pYh6bhYC2jse2ofhQ0dWrGt6wOocVGtWkSHuk6GuJaMcSSf20waVlzGmdr8unGwgwQCifxrZ749BuAjPMB2uC3ait54jYaosGpLKOnw7M2RiNI3w49w5n7E4X7G1DhrK4sC449mSmsGJ6VANqs3C8UTwijELk7VnOYpi7jsWnQsCK%2Bl7tr6kR%2Fr9MBNquX7Srsq59Kc5NAFRpwVJJpAsOI7l2GlzdBVphGFHeFyG4Qt59cYuYtp3evfUJQVQV4yL94pXoLkEsYvjZkDcbzfi7CB6eDyC4HL4IZFys30GtJxwd7tkPxb45fWs88LhoiyQ4dLP7VEIDDswr%2FBBjqkASlBiftC7VxIW1nIbJzwRcP6rpe8dgus2JNVzKr75gAAhhm9f78NZS4XgDqfbbzj9KppQaP7lqA1%2B6lq3SpxX9eB7ssyCpSJtuez1MGNfuKWO71tGfZX33BQmxHtthmx5B92sma8VqHT7xXR%2FFBbI0tTudQfvm8Ueje5UUfQOHwaVITepoXLPsC97iHhfXKG3cRYOgiH8VC1c%2FKg5SSDOA1Pjd%2BU&X-Amz-Signature=51476160077a48b8ba8e8d43cc74d1e96c279585d929c8fc1eb2d5f9a00c7740&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ONSTPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDspIPwczvKJowxANlPiQRy4XljfiahmGKv5xBJaEGaZAIhAOSGeOalJ8fJu%2Fj%2BMDQd27UbJXWJDG27bwjoQLB4PAg6KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIi%2BNaIDWjsHOUliEq3AN6hbWHkEuQQ3ezm3%2FQEu%2FxK%2FmQ1Ssx0kODhdcqjaAUUF4AlywRklh5jXDrYltikSIPI2LtuvQ1GQLAXlZ7%2F%2FN004CbWf%2FWlcOzSsvUS%2BWuO59JAk%2FRjdGxD2w1AVbO1gNqn6WwthyDNa%2B93E1HTDNqdrxlHaHBX%2BrzrlFl3J89pYThAh5BGH2BVzTUb5hDj8DmzoEEW5Vy2FA2iSgIHcnIia%2FR4qu9plEkktGnKkhwfT3S2fGgfp4CTzJonn35yMRMyG1JvMm7JbQus8v1Umn47Rw%2B7%2FeXgaek28Pmmnz3X8AipHcC2pYh6bhYC2jse2ofhQ0dWrGt6wOocVGtWkSHuk6GuJaMcSSf20waVlzGmdr8unGwgwQCifxrZ749BuAjPMB2uC3ait54jYaosGpLKOnw7M2RiNI3w49w5n7E4X7G1DhrK4sC449mSmsGJ6VANqs3C8UTwijELk7VnOYpi7jsWnQsCK%2Bl7tr6kR%2Fr9MBNquX7Srsq59Kc5NAFRpwVJJpAsOI7l2GlzdBVphGFHeFyG4Qt59cYuYtp3evfUJQVQV4yL94pXoLkEsYvjZkDcbzfi7CB6eDyC4HL4IZFys30GtJxwd7tkPxb45fWs88LhoiyQ4dLP7VEIDDswr%2FBBjqkASlBiftC7VxIW1nIbJzwRcP6rpe8dgus2JNVzKr75gAAhhm9f78NZS4XgDqfbbzj9KppQaP7lqA1%2B6lq3SpxX9eB7ssyCpSJtuez1MGNfuKWO71tGfZX33BQmxHtthmx5B92sma8VqHT7xXR%2FFBbI0tTudQfvm8Ueje5UUfQOHwaVITepoXLPsC97iHhfXKG3cRYOgiH8VC1c%2FKg5SSDOA1Pjd%2BU&X-Amz-Signature=24b658d601aed263f69a162a7828b3655d12ce40798b764750234b50cbc9de0f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ONSTPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDspIPwczvKJowxANlPiQRy4XljfiahmGKv5xBJaEGaZAIhAOSGeOalJ8fJu%2Fj%2BMDQd27UbJXWJDG27bwjoQLB4PAg6KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIi%2BNaIDWjsHOUliEq3AN6hbWHkEuQQ3ezm3%2FQEu%2FxK%2FmQ1Ssx0kODhdcqjaAUUF4AlywRklh5jXDrYltikSIPI2LtuvQ1GQLAXlZ7%2F%2FN004CbWf%2FWlcOzSsvUS%2BWuO59JAk%2FRjdGxD2w1AVbO1gNqn6WwthyDNa%2B93E1HTDNqdrxlHaHBX%2BrzrlFl3J89pYThAh5BGH2BVzTUb5hDj8DmzoEEW5Vy2FA2iSgIHcnIia%2FR4qu9plEkktGnKkhwfT3S2fGgfp4CTzJonn35yMRMyG1JvMm7JbQus8v1Umn47Rw%2B7%2FeXgaek28Pmmnz3X8AipHcC2pYh6bhYC2jse2ofhQ0dWrGt6wOocVGtWkSHuk6GuJaMcSSf20waVlzGmdr8unGwgwQCifxrZ749BuAjPMB2uC3ait54jYaosGpLKOnw7M2RiNI3w49w5n7E4X7G1DhrK4sC449mSmsGJ6VANqs3C8UTwijELk7VnOYpi7jsWnQsCK%2Bl7tr6kR%2Fr9MBNquX7Srsq59Kc5NAFRpwVJJpAsOI7l2GlzdBVphGFHeFyG4Qt59cYuYtp3evfUJQVQV4yL94pXoLkEsYvjZkDcbzfi7CB6eDyC4HL4IZFys30GtJxwd7tkPxb45fWs88LhoiyQ4dLP7VEIDDswr%2FBBjqkASlBiftC7VxIW1nIbJzwRcP6rpe8dgus2JNVzKr75gAAhhm9f78NZS4XgDqfbbzj9KppQaP7lqA1%2B6lq3SpxX9eB7ssyCpSJtuez1MGNfuKWO71tGfZX33BQmxHtthmx5B92sma8VqHT7xXR%2FFBbI0tTudQfvm8Ueje5UUfQOHwaVITepoXLPsC97iHhfXKG3cRYOgiH8VC1c%2FKg5SSDOA1Pjd%2BU&X-Amz-Signature=5f84307d80132c59ef3c47fefe16426595410342723ab6d46fa53c2275c30531&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ONSTPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDspIPwczvKJowxANlPiQRy4XljfiahmGKv5xBJaEGaZAIhAOSGeOalJ8fJu%2Fj%2BMDQd27UbJXWJDG27bwjoQLB4PAg6KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIi%2BNaIDWjsHOUliEq3AN6hbWHkEuQQ3ezm3%2FQEu%2FxK%2FmQ1Ssx0kODhdcqjaAUUF4AlywRklh5jXDrYltikSIPI2LtuvQ1GQLAXlZ7%2F%2FN004CbWf%2FWlcOzSsvUS%2BWuO59JAk%2FRjdGxD2w1AVbO1gNqn6WwthyDNa%2B93E1HTDNqdrxlHaHBX%2BrzrlFl3J89pYThAh5BGH2BVzTUb5hDj8DmzoEEW5Vy2FA2iSgIHcnIia%2FR4qu9plEkktGnKkhwfT3S2fGgfp4CTzJonn35yMRMyG1JvMm7JbQus8v1Umn47Rw%2B7%2FeXgaek28Pmmnz3X8AipHcC2pYh6bhYC2jse2ofhQ0dWrGt6wOocVGtWkSHuk6GuJaMcSSf20waVlzGmdr8unGwgwQCifxrZ749BuAjPMB2uC3ait54jYaosGpLKOnw7M2RiNI3w49w5n7E4X7G1DhrK4sC449mSmsGJ6VANqs3C8UTwijELk7VnOYpi7jsWnQsCK%2Bl7tr6kR%2Fr9MBNquX7Srsq59Kc5NAFRpwVJJpAsOI7l2GlzdBVphGFHeFyG4Qt59cYuYtp3evfUJQVQV4yL94pXoLkEsYvjZkDcbzfi7CB6eDyC4HL4IZFys30GtJxwd7tkPxb45fWs88LhoiyQ4dLP7VEIDDswr%2FBBjqkASlBiftC7VxIW1nIbJzwRcP6rpe8dgus2JNVzKr75gAAhhm9f78NZS4XgDqfbbzj9KppQaP7lqA1%2B6lq3SpxX9eB7ssyCpSJtuez1MGNfuKWO71tGfZX33BQmxHtthmx5B92sma8VqHT7xXR%2FFBbI0tTudQfvm8Ueje5UUfQOHwaVITepoXLPsC97iHhfXKG3cRYOgiH8VC1c%2FKg5SSDOA1Pjd%2BU&X-Amz-Signature=3e1f238b442e9947f6a7b2081ceffd664507951400a550d4fae03e3dabf88bc5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ONSTPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDspIPwczvKJowxANlPiQRy4XljfiahmGKv5xBJaEGaZAIhAOSGeOalJ8fJu%2Fj%2BMDQd27UbJXWJDG27bwjoQLB4PAg6KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIi%2BNaIDWjsHOUliEq3AN6hbWHkEuQQ3ezm3%2FQEu%2FxK%2FmQ1Ssx0kODhdcqjaAUUF4AlywRklh5jXDrYltikSIPI2LtuvQ1GQLAXlZ7%2F%2FN004CbWf%2FWlcOzSsvUS%2BWuO59JAk%2FRjdGxD2w1AVbO1gNqn6WwthyDNa%2B93E1HTDNqdrxlHaHBX%2BrzrlFl3J89pYThAh5BGH2BVzTUb5hDj8DmzoEEW5Vy2FA2iSgIHcnIia%2FR4qu9plEkktGnKkhwfT3S2fGgfp4CTzJonn35yMRMyG1JvMm7JbQus8v1Umn47Rw%2B7%2FeXgaek28Pmmnz3X8AipHcC2pYh6bhYC2jse2ofhQ0dWrGt6wOocVGtWkSHuk6GuJaMcSSf20waVlzGmdr8unGwgwQCifxrZ749BuAjPMB2uC3ait54jYaosGpLKOnw7M2RiNI3w49w5n7E4X7G1DhrK4sC449mSmsGJ6VANqs3C8UTwijELk7VnOYpi7jsWnQsCK%2Bl7tr6kR%2Fr9MBNquX7Srsq59Kc5NAFRpwVJJpAsOI7l2GlzdBVphGFHeFyG4Qt59cYuYtp3evfUJQVQV4yL94pXoLkEsYvjZkDcbzfi7CB6eDyC4HL4IZFys30GtJxwd7tkPxb45fWs88LhoiyQ4dLP7VEIDDswr%2FBBjqkASlBiftC7VxIW1nIbJzwRcP6rpe8dgus2JNVzKr75gAAhhm9f78NZS4XgDqfbbzj9KppQaP7lqA1%2B6lq3SpxX9eB7ssyCpSJtuez1MGNfuKWO71tGfZX33BQmxHtthmx5B92sma8VqHT7xXR%2FFBbI0tTudQfvm8Ueje5UUfQOHwaVITepoXLPsC97iHhfXKG3cRYOgiH8VC1c%2FKg5SSDOA1Pjd%2BU&X-Amz-Signature=ba0901e9b751d60e94ccaa6f49b15fdb822ecb7e5238a96deea87f17dc66a651&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
