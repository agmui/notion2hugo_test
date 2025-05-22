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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUAHT22%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCa5gPAE3rIe8dXHMWZpBZjFaV1TuY8oeMbad2fSRXwZQIgIdOUeefs8xtNtuBGX6KiOZAF1BYxiXBQlyC%2BdVYA5d4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgfKd1mfaJon00C%2FircA8l941LgDBeFC0c5XDoxpnWRLEGWARnolpM7VjzkxbBDI%2F6%2FXQRfb3UKvLKjbtNIkOVQ%2BD7PwP1fjO83B7fUEfDs2rfgq%2FDCeuV0Ud1Bt9cNSdogmnq2ZIJWAdr17JDtqbqMhD0yKRka34KnPjROGCa1Mk8noHwJm6yUOLgUQjBY3YY%2BjKpAo%2BTeZnV%2BaoXSusMD%2Fb89PgdYOL5qWjH%2BbSqmG77KZCGfWngFiRuyVNOV8bYl%2BimqjpXW0mxj%2B5lFo4jHMLnYjzfd1CQPJOBWyxu4MIp72sjD60rwVtm%2BiaquIAFNDiWrM8m10ht6ZLMX1UIROO5EINa%2BvC%2BTYt88oH5mQEDOk5DdunNJZSSYoNg1W4glcF9Q3YxVFYm53CetNIRwbbE4sWu45Klt0b0euM5Y%2FTf6RnRtbGuqi4MAYrv96xHatHIefk9fpWIQ%2FiqCQFq%2F%2B1sW0O6ZJpJ5E3%2BSvpt%2FeA8qF5dWNlJ1xgbWs0uXViGP6o9Wcl4a5mUGEaeMoGN15tkWZ1UwJnKi8OFM92xbd4Ce8shf%2FqPW48wBqBEYd%2FqtzB%2BU0C5CfkqVQ1xpHFQe4vQbfIaL56bjQ4AQH8sL85iLAti6Vsx8SCPYKKqhpOh65J81G3BHlI0uMIT3usEGOqUB%2BvmE%2FNAJ6tWhXWgcS89IhwAJpXFuv9baSbewAFppHSMl%2BgPb88sZwGWgQ9Ur9D1peap34%2BOsZMBUoA%2F%2BzTcd%2FVB77ChN7Nz3LQ8kBc8IjOs%2BR0jSvIyciJIaiKhc8RxPM89w812eIDcGvvV1C7GACfavEzgRWExZAKp5hGEaqKasw9jHey%2B1P%2BTdNQfoH4%2Fr9anrYNp9cGv0ql8lBbWqU9ROHjVI&X-Amz-Signature=b848a60902ee1675b15190dcf3fb7653a8d1c5b266f424fa36766616293cbc84&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUAHT22%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCa5gPAE3rIe8dXHMWZpBZjFaV1TuY8oeMbad2fSRXwZQIgIdOUeefs8xtNtuBGX6KiOZAF1BYxiXBQlyC%2BdVYA5d4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgfKd1mfaJon00C%2FircA8l941LgDBeFC0c5XDoxpnWRLEGWARnolpM7VjzkxbBDI%2F6%2FXQRfb3UKvLKjbtNIkOVQ%2BD7PwP1fjO83B7fUEfDs2rfgq%2FDCeuV0Ud1Bt9cNSdogmnq2ZIJWAdr17JDtqbqMhD0yKRka34KnPjROGCa1Mk8noHwJm6yUOLgUQjBY3YY%2BjKpAo%2BTeZnV%2BaoXSusMD%2Fb89PgdYOL5qWjH%2BbSqmG77KZCGfWngFiRuyVNOV8bYl%2BimqjpXW0mxj%2B5lFo4jHMLnYjzfd1CQPJOBWyxu4MIp72sjD60rwVtm%2BiaquIAFNDiWrM8m10ht6ZLMX1UIROO5EINa%2BvC%2BTYt88oH5mQEDOk5DdunNJZSSYoNg1W4glcF9Q3YxVFYm53CetNIRwbbE4sWu45Klt0b0euM5Y%2FTf6RnRtbGuqi4MAYrv96xHatHIefk9fpWIQ%2FiqCQFq%2F%2B1sW0O6ZJpJ5E3%2BSvpt%2FeA8qF5dWNlJ1xgbWs0uXViGP6o9Wcl4a5mUGEaeMoGN15tkWZ1UwJnKi8OFM92xbd4Ce8shf%2FqPW48wBqBEYd%2FqtzB%2BU0C5CfkqVQ1xpHFQe4vQbfIaL56bjQ4AQH8sL85iLAti6Vsx8SCPYKKqhpOh65J81G3BHlI0uMIT3usEGOqUB%2BvmE%2FNAJ6tWhXWgcS89IhwAJpXFuv9baSbewAFppHSMl%2BgPb88sZwGWgQ9Ur9D1peap34%2BOsZMBUoA%2F%2BzTcd%2FVB77ChN7Nz3LQ8kBc8IjOs%2BR0jSvIyciJIaiKhc8RxPM89w812eIDcGvvV1C7GACfavEzgRWExZAKp5hGEaqKasw9jHey%2B1P%2BTdNQfoH4%2Fr9anrYNp9cGv0ql8lBbWqU9ROHjVI&X-Amz-Signature=935102d05a19e1960ac2d31f8caad390593f6e83571aab59d4cb2a618cd371f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUAHT22%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCa5gPAE3rIe8dXHMWZpBZjFaV1TuY8oeMbad2fSRXwZQIgIdOUeefs8xtNtuBGX6KiOZAF1BYxiXBQlyC%2BdVYA5d4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgfKd1mfaJon00C%2FircA8l941LgDBeFC0c5XDoxpnWRLEGWARnolpM7VjzkxbBDI%2F6%2FXQRfb3UKvLKjbtNIkOVQ%2BD7PwP1fjO83B7fUEfDs2rfgq%2FDCeuV0Ud1Bt9cNSdogmnq2ZIJWAdr17JDtqbqMhD0yKRka34KnPjROGCa1Mk8noHwJm6yUOLgUQjBY3YY%2BjKpAo%2BTeZnV%2BaoXSusMD%2Fb89PgdYOL5qWjH%2BbSqmG77KZCGfWngFiRuyVNOV8bYl%2BimqjpXW0mxj%2B5lFo4jHMLnYjzfd1CQPJOBWyxu4MIp72sjD60rwVtm%2BiaquIAFNDiWrM8m10ht6ZLMX1UIROO5EINa%2BvC%2BTYt88oH5mQEDOk5DdunNJZSSYoNg1W4glcF9Q3YxVFYm53CetNIRwbbE4sWu45Klt0b0euM5Y%2FTf6RnRtbGuqi4MAYrv96xHatHIefk9fpWIQ%2FiqCQFq%2F%2B1sW0O6ZJpJ5E3%2BSvpt%2FeA8qF5dWNlJ1xgbWs0uXViGP6o9Wcl4a5mUGEaeMoGN15tkWZ1UwJnKi8OFM92xbd4Ce8shf%2FqPW48wBqBEYd%2FqtzB%2BU0C5CfkqVQ1xpHFQe4vQbfIaL56bjQ4AQH8sL85iLAti6Vsx8SCPYKKqhpOh65J81G3BHlI0uMIT3usEGOqUB%2BvmE%2FNAJ6tWhXWgcS89IhwAJpXFuv9baSbewAFppHSMl%2BgPb88sZwGWgQ9Ur9D1peap34%2BOsZMBUoA%2F%2BzTcd%2FVB77ChN7Nz3LQ8kBc8IjOs%2BR0jSvIyciJIaiKhc8RxPM89w812eIDcGvvV1C7GACfavEzgRWExZAKp5hGEaqKasw9jHey%2B1P%2BTdNQfoH4%2Fr9anrYNp9cGv0ql8lBbWqU9ROHjVI&X-Amz-Signature=302d37cc3c3a98e57225f6340192b85c2ab627d27d610465ee324d94f72b6466&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUAHT22%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCa5gPAE3rIe8dXHMWZpBZjFaV1TuY8oeMbad2fSRXwZQIgIdOUeefs8xtNtuBGX6KiOZAF1BYxiXBQlyC%2BdVYA5d4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgfKd1mfaJon00C%2FircA8l941LgDBeFC0c5XDoxpnWRLEGWARnolpM7VjzkxbBDI%2F6%2FXQRfb3UKvLKjbtNIkOVQ%2BD7PwP1fjO83B7fUEfDs2rfgq%2FDCeuV0Ud1Bt9cNSdogmnq2ZIJWAdr17JDtqbqMhD0yKRka34KnPjROGCa1Mk8noHwJm6yUOLgUQjBY3YY%2BjKpAo%2BTeZnV%2BaoXSusMD%2Fb89PgdYOL5qWjH%2BbSqmG77KZCGfWngFiRuyVNOV8bYl%2BimqjpXW0mxj%2B5lFo4jHMLnYjzfd1CQPJOBWyxu4MIp72sjD60rwVtm%2BiaquIAFNDiWrM8m10ht6ZLMX1UIROO5EINa%2BvC%2BTYt88oH5mQEDOk5DdunNJZSSYoNg1W4glcF9Q3YxVFYm53CetNIRwbbE4sWu45Klt0b0euM5Y%2FTf6RnRtbGuqi4MAYrv96xHatHIefk9fpWIQ%2FiqCQFq%2F%2B1sW0O6ZJpJ5E3%2BSvpt%2FeA8qF5dWNlJ1xgbWs0uXViGP6o9Wcl4a5mUGEaeMoGN15tkWZ1UwJnKi8OFM92xbd4Ce8shf%2FqPW48wBqBEYd%2FqtzB%2BU0C5CfkqVQ1xpHFQe4vQbfIaL56bjQ4AQH8sL85iLAti6Vsx8SCPYKKqhpOh65J81G3BHlI0uMIT3usEGOqUB%2BvmE%2FNAJ6tWhXWgcS89IhwAJpXFuv9baSbewAFppHSMl%2BgPb88sZwGWgQ9Ur9D1peap34%2BOsZMBUoA%2F%2BzTcd%2FVB77ChN7Nz3LQ8kBc8IjOs%2BR0jSvIyciJIaiKhc8RxPM89w812eIDcGvvV1C7GACfavEzgRWExZAKp5hGEaqKasw9jHey%2B1P%2BTdNQfoH4%2Fr9anrYNp9cGv0ql8lBbWqU9ROHjVI&X-Amz-Signature=e798ea9783fdc51ddb603b67a5f7ebc9e0e036c015db5906fff94a5c1c43aef4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUAHT22%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCa5gPAE3rIe8dXHMWZpBZjFaV1TuY8oeMbad2fSRXwZQIgIdOUeefs8xtNtuBGX6KiOZAF1BYxiXBQlyC%2BdVYA5d4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgfKd1mfaJon00C%2FircA8l941LgDBeFC0c5XDoxpnWRLEGWARnolpM7VjzkxbBDI%2F6%2FXQRfb3UKvLKjbtNIkOVQ%2BD7PwP1fjO83B7fUEfDs2rfgq%2FDCeuV0Ud1Bt9cNSdogmnq2ZIJWAdr17JDtqbqMhD0yKRka34KnPjROGCa1Mk8noHwJm6yUOLgUQjBY3YY%2BjKpAo%2BTeZnV%2BaoXSusMD%2Fb89PgdYOL5qWjH%2BbSqmG77KZCGfWngFiRuyVNOV8bYl%2BimqjpXW0mxj%2B5lFo4jHMLnYjzfd1CQPJOBWyxu4MIp72sjD60rwVtm%2BiaquIAFNDiWrM8m10ht6ZLMX1UIROO5EINa%2BvC%2BTYt88oH5mQEDOk5DdunNJZSSYoNg1W4glcF9Q3YxVFYm53CetNIRwbbE4sWu45Klt0b0euM5Y%2FTf6RnRtbGuqi4MAYrv96xHatHIefk9fpWIQ%2FiqCQFq%2F%2B1sW0O6ZJpJ5E3%2BSvpt%2FeA8qF5dWNlJ1xgbWs0uXViGP6o9Wcl4a5mUGEaeMoGN15tkWZ1UwJnKi8OFM92xbd4Ce8shf%2FqPW48wBqBEYd%2FqtzB%2BU0C5CfkqVQ1xpHFQe4vQbfIaL56bjQ4AQH8sL85iLAti6Vsx8SCPYKKqhpOh65J81G3BHlI0uMIT3usEGOqUB%2BvmE%2FNAJ6tWhXWgcS89IhwAJpXFuv9baSbewAFppHSMl%2BgPb88sZwGWgQ9Ur9D1peap34%2BOsZMBUoA%2F%2BzTcd%2FVB77ChN7Nz3LQ8kBc8IjOs%2BR0jSvIyciJIaiKhc8RxPM89w812eIDcGvvV1C7GACfavEzgRWExZAKp5hGEaqKasw9jHey%2B1P%2BTdNQfoH4%2Fr9anrYNp9cGv0ql8lBbWqU9ROHjVI&X-Amz-Signature=1969d98354f58d0da22a78c7760fd20562ae51a767997911495e97fb77bf5b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUAHT22%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCa5gPAE3rIe8dXHMWZpBZjFaV1TuY8oeMbad2fSRXwZQIgIdOUeefs8xtNtuBGX6KiOZAF1BYxiXBQlyC%2BdVYA5d4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgfKd1mfaJon00C%2FircA8l941LgDBeFC0c5XDoxpnWRLEGWARnolpM7VjzkxbBDI%2F6%2FXQRfb3UKvLKjbtNIkOVQ%2BD7PwP1fjO83B7fUEfDs2rfgq%2FDCeuV0Ud1Bt9cNSdogmnq2ZIJWAdr17JDtqbqMhD0yKRka34KnPjROGCa1Mk8noHwJm6yUOLgUQjBY3YY%2BjKpAo%2BTeZnV%2BaoXSusMD%2Fb89PgdYOL5qWjH%2BbSqmG77KZCGfWngFiRuyVNOV8bYl%2BimqjpXW0mxj%2B5lFo4jHMLnYjzfd1CQPJOBWyxu4MIp72sjD60rwVtm%2BiaquIAFNDiWrM8m10ht6ZLMX1UIROO5EINa%2BvC%2BTYt88oH5mQEDOk5DdunNJZSSYoNg1W4glcF9Q3YxVFYm53CetNIRwbbE4sWu45Klt0b0euM5Y%2FTf6RnRtbGuqi4MAYrv96xHatHIefk9fpWIQ%2FiqCQFq%2F%2B1sW0O6ZJpJ5E3%2BSvpt%2FeA8qF5dWNlJ1xgbWs0uXViGP6o9Wcl4a5mUGEaeMoGN15tkWZ1UwJnKi8OFM92xbd4Ce8shf%2FqPW48wBqBEYd%2FqtzB%2BU0C5CfkqVQ1xpHFQe4vQbfIaL56bjQ4AQH8sL85iLAti6Vsx8SCPYKKqhpOh65J81G3BHlI0uMIT3usEGOqUB%2BvmE%2FNAJ6tWhXWgcS89IhwAJpXFuv9baSbewAFppHSMl%2BgPb88sZwGWgQ9Ur9D1peap34%2BOsZMBUoA%2F%2BzTcd%2FVB77ChN7Nz3LQ8kBc8IjOs%2BR0jSvIyciJIaiKhc8RxPM89w812eIDcGvvV1C7GACfavEzgRWExZAKp5hGEaqKasw9jHey%2B1P%2BTdNQfoH4%2Fr9anrYNp9cGv0ql8lBbWqU9ROHjVI&X-Amz-Signature=b4ade71c4bad3490312606df8463e093ec8236547deef1b4ba5d2999af925f75&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUAHT22%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCa5gPAE3rIe8dXHMWZpBZjFaV1TuY8oeMbad2fSRXwZQIgIdOUeefs8xtNtuBGX6KiOZAF1BYxiXBQlyC%2BdVYA5d4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgfKd1mfaJon00C%2FircA8l941LgDBeFC0c5XDoxpnWRLEGWARnolpM7VjzkxbBDI%2F6%2FXQRfb3UKvLKjbtNIkOVQ%2BD7PwP1fjO83B7fUEfDs2rfgq%2FDCeuV0Ud1Bt9cNSdogmnq2ZIJWAdr17JDtqbqMhD0yKRka34KnPjROGCa1Mk8noHwJm6yUOLgUQjBY3YY%2BjKpAo%2BTeZnV%2BaoXSusMD%2Fb89PgdYOL5qWjH%2BbSqmG77KZCGfWngFiRuyVNOV8bYl%2BimqjpXW0mxj%2B5lFo4jHMLnYjzfd1CQPJOBWyxu4MIp72sjD60rwVtm%2BiaquIAFNDiWrM8m10ht6ZLMX1UIROO5EINa%2BvC%2BTYt88oH5mQEDOk5DdunNJZSSYoNg1W4glcF9Q3YxVFYm53CetNIRwbbE4sWu45Klt0b0euM5Y%2FTf6RnRtbGuqi4MAYrv96xHatHIefk9fpWIQ%2FiqCQFq%2F%2B1sW0O6ZJpJ5E3%2BSvpt%2FeA8qF5dWNlJ1xgbWs0uXViGP6o9Wcl4a5mUGEaeMoGN15tkWZ1UwJnKi8OFM92xbd4Ce8shf%2FqPW48wBqBEYd%2FqtzB%2BU0C5CfkqVQ1xpHFQe4vQbfIaL56bjQ4AQH8sL85iLAti6Vsx8SCPYKKqhpOh65J81G3BHlI0uMIT3usEGOqUB%2BvmE%2FNAJ6tWhXWgcS89IhwAJpXFuv9baSbewAFppHSMl%2BgPb88sZwGWgQ9Ur9D1peap34%2BOsZMBUoA%2F%2BzTcd%2FVB77ChN7Nz3LQ8kBc8IjOs%2BR0jSvIyciJIaiKhc8RxPM89w812eIDcGvvV1C7GACfavEzgRWExZAKp5hGEaqKasw9jHey%2B1P%2BTdNQfoH4%2Fr9anrYNp9cGv0ql8lBbWqU9ROHjVI&X-Amz-Signature=c9d441bbe893b2e3ae162f888f6f2ab40a9172cc0d50c3a5d90ad235766d526a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
