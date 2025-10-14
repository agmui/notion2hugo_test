---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HO6AR3U%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2BH06mBAUwjmlRPPcEqUXgcyY6U9JDL0aUceQTsXrbAiEA7W5mU9voHVcFZGhFrnbo64xf6%2BHVXqBZYqrsdF5RVwsq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDK%2BHi9q6Brx%2FTryYJyrcA7tLedEnaFvZn%2Bjuoka87iU9bYObUznpVPIGdIeVCKhaFwTED4Z3Tn1%2FIcN6Wy8A4pQrmOerCKiMeU4OlQHhCLMZKAupPDmJFw9fTABinSZ3HRJoPNhdqvjHk19j1V%2BVMheEFMZ1HMjSNxh3SGe9MzJb5GFXtn%2F7SZgc41aNsbSLpue09d%2FY%2Fl6yi7iyA1yT3nlupYFjojCagizVJiyB7UAGeyyyhIwtPf1sHa0X7%2FT6emB%2Ffsj7eLVbakBNZ3%2Fj5Gk3JhfU68NmwKw53WVk9ROQIJlccMdL3AIqA0K3rSJVECTo1oN5LOIZfJBKXrXSACHzfXCfUBP%2BLimbITFR2nzhFNkwUAyqr0WnG1H1bpZRe8b0ZVN5d1YtGSX5vOLaGL2VOxa5yL65y%2BweX7%2FJvWQwJpqJDjE3jkh5Om5u2UCj6BHRAlLQyaRnJ9lOXPAEXqRG6LpMhhEc3Sw5dz%2FaaOpeCLwTEZ2mtJ7X%2F6R5mGTSyiea4792NZHhaZxzwEV87oKE1%2B33WmS6TAbTACJXa0kT24WlRG18bDJaDb14R4M4ktInl6WJ%2Bflit2pG9SaBcbSMbOHW199Txfu0%2BXWWWzDJSo3i7lKEvuTXqaDkHfuCMMalxZtJwZqR3W48ML2ptscGOqUBOH%2FpRM0VPSYKf0qoS4kntYPc6BelNpfQQymq%2FIfWs%2FpE38W0Xpe4ZD%2FJCSzSRJ9mxpNn4JmeIbgLPFHPg%2BOh3qraoQbkIWwgPJRAF1GgVDXb2IY3CKR%2FQQKZ57qbKH7YMKKtTRgIAaZ%2BzQ7eeVCvS1sbluFMYdOEeudOsTCPT6q9sYtkgadI0FecwFkVQkzF%2BDB127Os0BiH4xDkmYi4hnLA81Y1&X-Amz-Signature=8c5747e1f4de1dee51725fed00a2f32ab5b2ebbb320608a680409716c0fc18e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HO6AR3U%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2BH06mBAUwjmlRPPcEqUXgcyY6U9JDL0aUceQTsXrbAiEA7W5mU9voHVcFZGhFrnbo64xf6%2BHVXqBZYqrsdF5RVwsq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDK%2BHi9q6Brx%2FTryYJyrcA7tLedEnaFvZn%2Bjuoka87iU9bYObUznpVPIGdIeVCKhaFwTED4Z3Tn1%2FIcN6Wy8A4pQrmOerCKiMeU4OlQHhCLMZKAupPDmJFw9fTABinSZ3HRJoPNhdqvjHk19j1V%2BVMheEFMZ1HMjSNxh3SGe9MzJb5GFXtn%2F7SZgc41aNsbSLpue09d%2FY%2Fl6yi7iyA1yT3nlupYFjojCagizVJiyB7UAGeyyyhIwtPf1sHa0X7%2FT6emB%2Ffsj7eLVbakBNZ3%2Fj5Gk3JhfU68NmwKw53WVk9ROQIJlccMdL3AIqA0K3rSJVECTo1oN5LOIZfJBKXrXSACHzfXCfUBP%2BLimbITFR2nzhFNkwUAyqr0WnG1H1bpZRe8b0ZVN5d1YtGSX5vOLaGL2VOxa5yL65y%2BweX7%2FJvWQwJpqJDjE3jkh5Om5u2UCj6BHRAlLQyaRnJ9lOXPAEXqRG6LpMhhEc3Sw5dz%2FaaOpeCLwTEZ2mtJ7X%2F6R5mGTSyiea4792NZHhaZxzwEV87oKE1%2B33WmS6TAbTACJXa0kT24WlRG18bDJaDb14R4M4ktInl6WJ%2Bflit2pG9SaBcbSMbOHW199Txfu0%2BXWWWzDJSo3i7lKEvuTXqaDkHfuCMMalxZtJwZqR3W48ML2ptscGOqUBOH%2FpRM0VPSYKf0qoS4kntYPc6BelNpfQQymq%2FIfWs%2FpE38W0Xpe4ZD%2FJCSzSRJ9mxpNn4JmeIbgLPFHPg%2BOh3qraoQbkIWwgPJRAF1GgVDXb2IY3CKR%2FQQKZ57qbKH7YMKKtTRgIAaZ%2BzQ7eeVCvS1sbluFMYdOEeudOsTCPT6q9sYtkgadI0FecwFkVQkzF%2BDB127Os0BiH4xDkmYi4hnLA81Y1&X-Amz-Signature=28916f2f635e386b591bb6ebf8cf766bc214510f8aec9e427f6423ce3a866d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HO6AR3U%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2BH06mBAUwjmlRPPcEqUXgcyY6U9JDL0aUceQTsXrbAiEA7W5mU9voHVcFZGhFrnbo64xf6%2BHVXqBZYqrsdF5RVwsq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDK%2BHi9q6Brx%2FTryYJyrcA7tLedEnaFvZn%2Bjuoka87iU9bYObUznpVPIGdIeVCKhaFwTED4Z3Tn1%2FIcN6Wy8A4pQrmOerCKiMeU4OlQHhCLMZKAupPDmJFw9fTABinSZ3HRJoPNhdqvjHk19j1V%2BVMheEFMZ1HMjSNxh3SGe9MzJb5GFXtn%2F7SZgc41aNsbSLpue09d%2FY%2Fl6yi7iyA1yT3nlupYFjojCagizVJiyB7UAGeyyyhIwtPf1sHa0X7%2FT6emB%2Ffsj7eLVbakBNZ3%2Fj5Gk3JhfU68NmwKw53WVk9ROQIJlccMdL3AIqA0K3rSJVECTo1oN5LOIZfJBKXrXSACHzfXCfUBP%2BLimbITFR2nzhFNkwUAyqr0WnG1H1bpZRe8b0ZVN5d1YtGSX5vOLaGL2VOxa5yL65y%2BweX7%2FJvWQwJpqJDjE3jkh5Om5u2UCj6BHRAlLQyaRnJ9lOXPAEXqRG6LpMhhEc3Sw5dz%2FaaOpeCLwTEZ2mtJ7X%2F6R5mGTSyiea4792NZHhaZxzwEV87oKE1%2B33WmS6TAbTACJXa0kT24WlRG18bDJaDb14R4M4ktInl6WJ%2Bflit2pG9SaBcbSMbOHW199Txfu0%2BXWWWzDJSo3i7lKEvuTXqaDkHfuCMMalxZtJwZqR3W48ML2ptscGOqUBOH%2FpRM0VPSYKf0qoS4kntYPc6BelNpfQQymq%2FIfWs%2FpE38W0Xpe4ZD%2FJCSzSRJ9mxpNn4JmeIbgLPFHPg%2BOh3qraoQbkIWwgPJRAF1GgVDXb2IY3CKR%2FQQKZ57qbKH7YMKKtTRgIAaZ%2BzQ7eeVCvS1sbluFMYdOEeudOsTCPT6q9sYtkgadI0FecwFkVQkzF%2BDB127Os0BiH4xDkmYi4hnLA81Y1&X-Amz-Signature=db54b729e04a43e8886aa06360317a15df201dc682a24d698ef4cf8b7ec83e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HO6AR3U%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2BH06mBAUwjmlRPPcEqUXgcyY6U9JDL0aUceQTsXrbAiEA7W5mU9voHVcFZGhFrnbo64xf6%2BHVXqBZYqrsdF5RVwsq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDK%2BHi9q6Brx%2FTryYJyrcA7tLedEnaFvZn%2Bjuoka87iU9bYObUznpVPIGdIeVCKhaFwTED4Z3Tn1%2FIcN6Wy8A4pQrmOerCKiMeU4OlQHhCLMZKAupPDmJFw9fTABinSZ3HRJoPNhdqvjHk19j1V%2BVMheEFMZ1HMjSNxh3SGe9MzJb5GFXtn%2F7SZgc41aNsbSLpue09d%2FY%2Fl6yi7iyA1yT3nlupYFjojCagizVJiyB7UAGeyyyhIwtPf1sHa0X7%2FT6emB%2Ffsj7eLVbakBNZ3%2Fj5Gk3JhfU68NmwKw53WVk9ROQIJlccMdL3AIqA0K3rSJVECTo1oN5LOIZfJBKXrXSACHzfXCfUBP%2BLimbITFR2nzhFNkwUAyqr0WnG1H1bpZRe8b0ZVN5d1YtGSX5vOLaGL2VOxa5yL65y%2BweX7%2FJvWQwJpqJDjE3jkh5Om5u2UCj6BHRAlLQyaRnJ9lOXPAEXqRG6LpMhhEc3Sw5dz%2FaaOpeCLwTEZ2mtJ7X%2F6R5mGTSyiea4792NZHhaZxzwEV87oKE1%2B33WmS6TAbTACJXa0kT24WlRG18bDJaDb14R4M4ktInl6WJ%2Bflit2pG9SaBcbSMbOHW199Txfu0%2BXWWWzDJSo3i7lKEvuTXqaDkHfuCMMalxZtJwZqR3W48ML2ptscGOqUBOH%2FpRM0VPSYKf0qoS4kntYPc6BelNpfQQymq%2FIfWs%2FpE38W0Xpe4ZD%2FJCSzSRJ9mxpNn4JmeIbgLPFHPg%2BOh3qraoQbkIWwgPJRAF1GgVDXb2IY3CKR%2FQQKZ57qbKH7YMKKtTRgIAaZ%2BzQ7eeVCvS1sbluFMYdOEeudOsTCPT6q9sYtkgadI0FecwFkVQkzF%2BDB127Os0BiH4xDkmYi4hnLA81Y1&X-Amz-Signature=ab94b89b4aebe654aeef596b9e73955c1611f6ce734be20e0563b8fb7cf32fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HO6AR3U%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2BH06mBAUwjmlRPPcEqUXgcyY6U9JDL0aUceQTsXrbAiEA7W5mU9voHVcFZGhFrnbo64xf6%2BHVXqBZYqrsdF5RVwsq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDK%2BHi9q6Brx%2FTryYJyrcA7tLedEnaFvZn%2Bjuoka87iU9bYObUznpVPIGdIeVCKhaFwTED4Z3Tn1%2FIcN6Wy8A4pQrmOerCKiMeU4OlQHhCLMZKAupPDmJFw9fTABinSZ3HRJoPNhdqvjHk19j1V%2BVMheEFMZ1HMjSNxh3SGe9MzJb5GFXtn%2F7SZgc41aNsbSLpue09d%2FY%2Fl6yi7iyA1yT3nlupYFjojCagizVJiyB7UAGeyyyhIwtPf1sHa0X7%2FT6emB%2Ffsj7eLVbakBNZ3%2Fj5Gk3JhfU68NmwKw53WVk9ROQIJlccMdL3AIqA0K3rSJVECTo1oN5LOIZfJBKXrXSACHzfXCfUBP%2BLimbITFR2nzhFNkwUAyqr0WnG1H1bpZRe8b0ZVN5d1YtGSX5vOLaGL2VOxa5yL65y%2BweX7%2FJvWQwJpqJDjE3jkh5Om5u2UCj6BHRAlLQyaRnJ9lOXPAEXqRG6LpMhhEc3Sw5dz%2FaaOpeCLwTEZ2mtJ7X%2F6R5mGTSyiea4792NZHhaZxzwEV87oKE1%2B33WmS6TAbTACJXa0kT24WlRG18bDJaDb14R4M4ktInl6WJ%2Bflit2pG9SaBcbSMbOHW199Txfu0%2BXWWWzDJSo3i7lKEvuTXqaDkHfuCMMalxZtJwZqR3W48ML2ptscGOqUBOH%2FpRM0VPSYKf0qoS4kntYPc6BelNpfQQymq%2FIfWs%2FpE38W0Xpe4ZD%2FJCSzSRJ9mxpNn4JmeIbgLPFHPg%2BOh3qraoQbkIWwgPJRAF1GgVDXb2IY3CKR%2FQQKZ57qbKH7YMKKtTRgIAaZ%2BzQ7eeVCvS1sbluFMYdOEeudOsTCPT6q9sYtkgadI0FecwFkVQkzF%2BDB127Os0BiH4xDkmYi4hnLA81Y1&X-Amz-Signature=e0b41a05ff4f0a51f820f07e05fc29f6ce270e5c181f70caaeb1e6447503e0c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HO6AR3U%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2BH06mBAUwjmlRPPcEqUXgcyY6U9JDL0aUceQTsXrbAiEA7W5mU9voHVcFZGhFrnbo64xf6%2BHVXqBZYqrsdF5RVwsq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDK%2BHi9q6Brx%2FTryYJyrcA7tLedEnaFvZn%2Bjuoka87iU9bYObUznpVPIGdIeVCKhaFwTED4Z3Tn1%2FIcN6Wy8A4pQrmOerCKiMeU4OlQHhCLMZKAupPDmJFw9fTABinSZ3HRJoPNhdqvjHk19j1V%2BVMheEFMZ1HMjSNxh3SGe9MzJb5GFXtn%2F7SZgc41aNsbSLpue09d%2FY%2Fl6yi7iyA1yT3nlupYFjojCagizVJiyB7UAGeyyyhIwtPf1sHa0X7%2FT6emB%2Ffsj7eLVbakBNZ3%2Fj5Gk3JhfU68NmwKw53WVk9ROQIJlccMdL3AIqA0K3rSJVECTo1oN5LOIZfJBKXrXSACHzfXCfUBP%2BLimbITFR2nzhFNkwUAyqr0WnG1H1bpZRe8b0ZVN5d1YtGSX5vOLaGL2VOxa5yL65y%2BweX7%2FJvWQwJpqJDjE3jkh5Om5u2UCj6BHRAlLQyaRnJ9lOXPAEXqRG6LpMhhEc3Sw5dz%2FaaOpeCLwTEZ2mtJ7X%2F6R5mGTSyiea4792NZHhaZxzwEV87oKE1%2B33WmS6TAbTACJXa0kT24WlRG18bDJaDb14R4M4ktInl6WJ%2Bflit2pG9SaBcbSMbOHW199Txfu0%2BXWWWzDJSo3i7lKEvuTXqaDkHfuCMMalxZtJwZqR3W48ML2ptscGOqUBOH%2FpRM0VPSYKf0qoS4kntYPc6BelNpfQQymq%2FIfWs%2FpE38W0Xpe4ZD%2FJCSzSRJ9mxpNn4JmeIbgLPFHPg%2BOh3qraoQbkIWwgPJRAF1GgVDXb2IY3CKR%2FQQKZ57qbKH7YMKKtTRgIAaZ%2BzQ7eeVCvS1sbluFMYdOEeudOsTCPT6q9sYtkgadI0FecwFkVQkzF%2BDB127Os0BiH4xDkmYi4hnLA81Y1&X-Amz-Signature=a091351f0ce7ddb7630dc276b6add1a6d8d7bdc8e4192d80bc4722ceef2d992d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HO6AR3U%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2BH06mBAUwjmlRPPcEqUXgcyY6U9JDL0aUceQTsXrbAiEA7W5mU9voHVcFZGhFrnbo64xf6%2BHVXqBZYqrsdF5RVwsq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDK%2BHi9q6Brx%2FTryYJyrcA7tLedEnaFvZn%2Bjuoka87iU9bYObUznpVPIGdIeVCKhaFwTED4Z3Tn1%2FIcN6Wy8A4pQrmOerCKiMeU4OlQHhCLMZKAupPDmJFw9fTABinSZ3HRJoPNhdqvjHk19j1V%2BVMheEFMZ1HMjSNxh3SGe9MzJb5GFXtn%2F7SZgc41aNsbSLpue09d%2FY%2Fl6yi7iyA1yT3nlupYFjojCagizVJiyB7UAGeyyyhIwtPf1sHa0X7%2FT6emB%2Ffsj7eLVbakBNZ3%2Fj5Gk3JhfU68NmwKw53WVk9ROQIJlccMdL3AIqA0K3rSJVECTo1oN5LOIZfJBKXrXSACHzfXCfUBP%2BLimbITFR2nzhFNkwUAyqr0WnG1H1bpZRe8b0ZVN5d1YtGSX5vOLaGL2VOxa5yL65y%2BweX7%2FJvWQwJpqJDjE3jkh5Om5u2UCj6BHRAlLQyaRnJ9lOXPAEXqRG6LpMhhEc3Sw5dz%2FaaOpeCLwTEZ2mtJ7X%2F6R5mGTSyiea4792NZHhaZxzwEV87oKE1%2B33WmS6TAbTACJXa0kT24WlRG18bDJaDb14R4M4ktInl6WJ%2Bflit2pG9SaBcbSMbOHW199Txfu0%2BXWWWzDJSo3i7lKEvuTXqaDkHfuCMMalxZtJwZqR3W48ML2ptscGOqUBOH%2FpRM0VPSYKf0qoS4kntYPc6BelNpfQQymq%2FIfWs%2FpE38W0Xpe4ZD%2FJCSzSRJ9mxpNn4JmeIbgLPFHPg%2BOh3qraoQbkIWwgPJRAF1GgVDXb2IY3CKR%2FQQKZ57qbKH7YMKKtTRgIAaZ%2BzQ7eeVCvS1sbluFMYdOEeudOsTCPT6q9sYtkgadI0FecwFkVQkzF%2BDB127Os0BiH4xDkmYi4hnLA81Y1&X-Amz-Signature=827dbaf6b9b7435f6a0994dfb355c612440a829317e0dc36407b622a6466980e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
