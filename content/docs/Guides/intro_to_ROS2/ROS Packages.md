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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESVIWM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpuW9Ww83z%2F%2FFxmYD06vNUD6LYFbowmIczvtTAknYlcAiEA%2Fb1CIKvz3bjC5%2BGrByoJGe0wkwXwWxqV2m2eeXV6lQkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH3Rl2V6HEfuFJ5bircA43XxcMAin9SH%2FUPEaUYvmJxnJe%2BkE7%2BNKEAcXNqxR9624K5fGXu%2F5y%2FojQF%2Fa7bN2s0Tv6UwpcBlGGorwrjSNcj61Rvrz5KENVse9DcLdPBdg6b1GNT5RCUPzcuLMj5jVIit5CTH9SLIAWFYpdHvih9JJzATXKV4pD3RXuYSX6426PXHk2QFE0uylalHnVG0qyqL1Kp3kjxDqwm1AMD5V3NMgvwhIxNtLzHMUEaJzlwRX6ZD0ByOV3dAk9vOXPJv48wd2xAZzoEuQyRcGNQN1mjfvSL2JBmeA8hFeAN%2FttnJbd2qCrB9ITwx4XQNR6b6lz3wT5BTa%2FIhvhy%2Bh7aqnRdVLsNJeGxPPmurBiPaJlflmlN%2FIAZZaholw7OUgHJrO1zgZuHYqLqH6k5Dnd%2FAx%2BO1UwbMgrPp%2F7i6pkAz7n9biyQK0BdvrGQuk460%2B%2FDSUDmHSQo2S6CeESD9JiBLOXiB236Ae2KiyvFTpHIjxmGSVulz3vJvWi4j8TRtXUQG8Oov%2B%2BKjLFkB0wKqmp%2BGta0psLnvKW2Zy3fayMeEPBP0%2B7dOJo6nGuOxNJSjOpPXGHiN4HN7Yy6rJFYCetYsANg6Rbml8A8h6536%2F0i3LanKsvPbjkvV5p%2Bvj53MICz6sEGOqUBUj4yLexHnsrHHjLG6bZYW1fHkiZ%2BUzcFjBGYCB7RmHRmCZLibFr1aea2%2Fe6u6QUHi%2BUpY9gRA2UoQ6oO4efSVgGJ21dvOFL7MtvFPU1FkqnQGrKNhgpSR29FhJHjvKvz08Zk0X0p4vihks0YT76Co7O%2BHHUB%2B4kkkNNNyY7ugCDxYNWo7ku9DyB2Ycgwza%2F%2BycW9VGSBSPjDKinLAgfdsl1grLzn&X-Amz-Signature=ee28cdc270693ae58b8765294b01ee5caa80b0f372544511f0dd86432af3f047&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESVIWM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpuW9Ww83z%2F%2FFxmYD06vNUD6LYFbowmIczvtTAknYlcAiEA%2Fb1CIKvz3bjC5%2BGrByoJGe0wkwXwWxqV2m2eeXV6lQkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH3Rl2V6HEfuFJ5bircA43XxcMAin9SH%2FUPEaUYvmJxnJe%2BkE7%2BNKEAcXNqxR9624K5fGXu%2F5y%2FojQF%2Fa7bN2s0Tv6UwpcBlGGorwrjSNcj61Rvrz5KENVse9DcLdPBdg6b1GNT5RCUPzcuLMj5jVIit5CTH9SLIAWFYpdHvih9JJzATXKV4pD3RXuYSX6426PXHk2QFE0uylalHnVG0qyqL1Kp3kjxDqwm1AMD5V3NMgvwhIxNtLzHMUEaJzlwRX6ZD0ByOV3dAk9vOXPJv48wd2xAZzoEuQyRcGNQN1mjfvSL2JBmeA8hFeAN%2FttnJbd2qCrB9ITwx4XQNR6b6lz3wT5BTa%2FIhvhy%2Bh7aqnRdVLsNJeGxPPmurBiPaJlflmlN%2FIAZZaholw7OUgHJrO1zgZuHYqLqH6k5Dnd%2FAx%2BO1UwbMgrPp%2F7i6pkAz7n9biyQK0BdvrGQuk460%2B%2FDSUDmHSQo2S6CeESD9JiBLOXiB236Ae2KiyvFTpHIjxmGSVulz3vJvWi4j8TRtXUQG8Oov%2B%2BKjLFkB0wKqmp%2BGta0psLnvKW2Zy3fayMeEPBP0%2B7dOJo6nGuOxNJSjOpPXGHiN4HN7Yy6rJFYCetYsANg6Rbml8A8h6536%2F0i3LanKsvPbjkvV5p%2Bvj53MICz6sEGOqUBUj4yLexHnsrHHjLG6bZYW1fHkiZ%2BUzcFjBGYCB7RmHRmCZLibFr1aea2%2Fe6u6QUHi%2BUpY9gRA2UoQ6oO4efSVgGJ21dvOFL7MtvFPU1FkqnQGrKNhgpSR29FhJHjvKvz08Zk0X0p4vihks0YT76Co7O%2BHHUB%2B4kkkNNNyY7ugCDxYNWo7ku9DyB2Ycgwza%2F%2BycW9VGSBSPjDKinLAgfdsl1grLzn&X-Amz-Signature=bde783ebd3a380ae6317eadd3cba46ee26d706452d1e459d5c9d8900af44b268&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESVIWM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpuW9Ww83z%2F%2FFxmYD06vNUD6LYFbowmIczvtTAknYlcAiEA%2Fb1CIKvz3bjC5%2BGrByoJGe0wkwXwWxqV2m2eeXV6lQkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH3Rl2V6HEfuFJ5bircA43XxcMAin9SH%2FUPEaUYvmJxnJe%2BkE7%2BNKEAcXNqxR9624K5fGXu%2F5y%2FojQF%2Fa7bN2s0Tv6UwpcBlGGorwrjSNcj61Rvrz5KENVse9DcLdPBdg6b1GNT5RCUPzcuLMj5jVIit5CTH9SLIAWFYpdHvih9JJzATXKV4pD3RXuYSX6426PXHk2QFE0uylalHnVG0qyqL1Kp3kjxDqwm1AMD5V3NMgvwhIxNtLzHMUEaJzlwRX6ZD0ByOV3dAk9vOXPJv48wd2xAZzoEuQyRcGNQN1mjfvSL2JBmeA8hFeAN%2FttnJbd2qCrB9ITwx4XQNR6b6lz3wT5BTa%2FIhvhy%2Bh7aqnRdVLsNJeGxPPmurBiPaJlflmlN%2FIAZZaholw7OUgHJrO1zgZuHYqLqH6k5Dnd%2FAx%2BO1UwbMgrPp%2F7i6pkAz7n9biyQK0BdvrGQuk460%2B%2FDSUDmHSQo2S6CeESD9JiBLOXiB236Ae2KiyvFTpHIjxmGSVulz3vJvWi4j8TRtXUQG8Oov%2B%2BKjLFkB0wKqmp%2BGta0psLnvKW2Zy3fayMeEPBP0%2B7dOJo6nGuOxNJSjOpPXGHiN4HN7Yy6rJFYCetYsANg6Rbml8A8h6536%2F0i3LanKsvPbjkvV5p%2Bvj53MICz6sEGOqUBUj4yLexHnsrHHjLG6bZYW1fHkiZ%2BUzcFjBGYCB7RmHRmCZLibFr1aea2%2Fe6u6QUHi%2BUpY9gRA2UoQ6oO4efSVgGJ21dvOFL7MtvFPU1FkqnQGrKNhgpSR29FhJHjvKvz08Zk0X0p4vihks0YT76Co7O%2BHHUB%2B4kkkNNNyY7ugCDxYNWo7ku9DyB2Ycgwza%2F%2BycW9VGSBSPjDKinLAgfdsl1grLzn&X-Amz-Signature=7b141ea964c955dccdfa5088e893c499695de15bc631335f4998d4d569a79d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESVIWM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpuW9Ww83z%2F%2FFxmYD06vNUD6LYFbowmIczvtTAknYlcAiEA%2Fb1CIKvz3bjC5%2BGrByoJGe0wkwXwWxqV2m2eeXV6lQkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH3Rl2V6HEfuFJ5bircA43XxcMAin9SH%2FUPEaUYvmJxnJe%2BkE7%2BNKEAcXNqxR9624K5fGXu%2F5y%2FojQF%2Fa7bN2s0Tv6UwpcBlGGorwrjSNcj61Rvrz5KENVse9DcLdPBdg6b1GNT5RCUPzcuLMj5jVIit5CTH9SLIAWFYpdHvih9JJzATXKV4pD3RXuYSX6426PXHk2QFE0uylalHnVG0qyqL1Kp3kjxDqwm1AMD5V3NMgvwhIxNtLzHMUEaJzlwRX6ZD0ByOV3dAk9vOXPJv48wd2xAZzoEuQyRcGNQN1mjfvSL2JBmeA8hFeAN%2FttnJbd2qCrB9ITwx4XQNR6b6lz3wT5BTa%2FIhvhy%2Bh7aqnRdVLsNJeGxPPmurBiPaJlflmlN%2FIAZZaholw7OUgHJrO1zgZuHYqLqH6k5Dnd%2FAx%2BO1UwbMgrPp%2F7i6pkAz7n9biyQK0BdvrGQuk460%2B%2FDSUDmHSQo2S6CeESD9JiBLOXiB236Ae2KiyvFTpHIjxmGSVulz3vJvWi4j8TRtXUQG8Oov%2B%2BKjLFkB0wKqmp%2BGta0psLnvKW2Zy3fayMeEPBP0%2B7dOJo6nGuOxNJSjOpPXGHiN4HN7Yy6rJFYCetYsANg6Rbml8A8h6536%2F0i3LanKsvPbjkvV5p%2Bvj53MICz6sEGOqUBUj4yLexHnsrHHjLG6bZYW1fHkiZ%2BUzcFjBGYCB7RmHRmCZLibFr1aea2%2Fe6u6QUHi%2BUpY9gRA2UoQ6oO4efSVgGJ21dvOFL7MtvFPU1FkqnQGrKNhgpSR29FhJHjvKvz08Zk0X0p4vihks0YT76Co7O%2BHHUB%2B4kkkNNNyY7ugCDxYNWo7ku9DyB2Ycgwza%2F%2BycW9VGSBSPjDKinLAgfdsl1grLzn&X-Amz-Signature=4aa891c17674bf8cf9ccd52618756cca30595b63964bed26f8ff34ea1484d194&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESVIWM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpuW9Ww83z%2F%2FFxmYD06vNUD6LYFbowmIczvtTAknYlcAiEA%2Fb1CIKvz3bjC5%2BGrByoJGe0wkwXwWxqV2m2eeXV6lQkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH3Rl2V6HEfuFJ5bircA43XxcMAin9SH%2FUPEaUYvmJxnJe%2BkE7%2BNKEAcXNqxR9624K5fGXu%2F5y%2FojQF%2Fa7bN2s0Tv6UwpcBlGGorwrjSNcj61Rvrz5KENVse9DcLdPBdg6b1GNT5RCUPzcuLMj5jVIit5CTH9SLIAWFYpdHvih9JJzATXKV4pD3RXuYSX6426PXHk2QFE0uylalHnVG0qyqL1Kp3kjxDqwm1AMD5V3NMgvwhIxNtLzHMUEaJzlwRX6ZD0ByOV3dAk9vOXPJv48wd2xAZzoEuQyRcGNQN1mjfvSL2JBmeA8hFeAN%2FttnJbd2qCrB9ITwx4XQNR6b6lz3wT5BTa%2FIhvhy%2Bh7aqnRdVLsNJeGxPPmurBiPaJlflmlN%2FIAZZaholw7OUgHJrO1zgZuHYqLqH6k5Dnd%2FAx%2BO1UwbMgrPp%2F7i6pkAz7n9biyQK0BdvrGQuk460%2B%2FDSUDmHSQo2S6CeESD9JiBLOXiB236Ae2KiyvFTpHIjxmGSVulz3vJvWi4j8TRtXUQG8Oov%2B%2BKjLFkB0wKqmp%2BGta0psLnvKW2Zy3fayMeEPBP0%2B7dOJo6nGuOxNJSjOpPXGHiN4HN7Yy6rJFYCetYsANg6Rbml8A8h6536%2F0i3LanKsvPbjkvV5p%2Bvj53MICz6sEGOqUBUj4yLexHnsrHHjLG6bZYW1fHkiZ%2BUzcFjBGYCB7RmHRmCZLibFr1aea2%2Fe6u6QUHi%2BUpY9gRA2UoQ6oO4efSVgGJ21dvOFL7MtvFPU1FkqnQGrKNhgpSR29FhJHjvKvz08Zk0X0p4vihks0YT76Co7O%2BHHUB%2B4kkkNNNyY7ugCDxYNWo7ku9DyB2Ycgwza%2F%2BycW9VGSBSPjDKinLAgfdsl1grLzn&X-Amz-Signature=e3e317d962fb4558927a5752a321a2fbc98903603ceec434aecfc7a6d2a76b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESVIWM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpuW9Ww83z%2F%2FFxmYD06vNUD6LYFbowmIczvtTAknYlcAiEA%2Fb1CIKvz3bjC5%2BGrByoJGe0wkwXwWxqV2m2eeXV6lQkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH3Rl2V6HEfuFJ5bircA43XxcMAin9SH%2FUPEaUYvmJxnJe%2BkE7%2BNKEAcXNqxR9624K5fGXu%2F5y%2FojQF%2Fa7bN2s0Tv6UwpcBlGGorwrjSNcj61Rvrz5KENVse9DcLdPBdg6b1GNT5RCUPzcuLMj5jVIit5CTH9SLIAWFYpdHvih9JJzATXKV4pD3RXuYSX6426PXHk2QFE0uylalHnVG0qyqL1Kp3kjxDqwm1AMD5V3NMgvwhIxNtLzHMUEaJzlwRX6ZD0ByOV3dAk9vOXPJv48wd2xAZzoEuQyRcGNQN1mjfvSL2JBmeA8hFeAN%2FttnJbd2qCrB9ITwx4XQNR6b6lz3wT5BTa%2FIhvhy%2Bh7aqnRdVLsNJeGxPPmurBiPaJlflmlN%2FIAZZaholw7OUgHJrO1zgZuHYqLqH6k5Dnd%2FAx%2BO1UwbMgrPp%2F7i6pkAz7n9biyQK0BdvrGQuk460%2B%2FDSUDmHSQo2S6CeESD9JiBLOXiB236Ae2KiyvFTpHIjxmGSVulz3vJvWi4j8TRtXUQG8Oov%2B%2BKjLFkB0wKqmp%2BGta0psLnvKW2Zy3fayMeEPBP0%2B7dOJo6nGuOxNJSjOpPXGHiN4HN7Yy6rJFYCetYsANg6Rbml8A8h6536%2F0i3LanKsvPbjkvV5p%2Bvj53MICz6sEGOqUBUj4yLexHnsrHHjLG6bZYW1fHkiZ%2BUzcFjBGYCB7RmHRmCZLibFr1aea2%2Fe6u6QUHi%2BUpY9gRA2UoQ6oO4efSVgGJ21dvOFL7MtvFPU1FkqnQGrKNhgpSR29FhJHjvKvz08Zk0X0p4vihks0YT76Co7O%2BHHUB%2B4kkkNNNyY7ugCDxYNWo7ku9DyB2Ycgwza%2F%2BycW9VGSBSPjDKinLAgfdsl1grLzn&X-Amz-Signature=ca2fabc93d38fec46915c3d50ebbf9325b4b7824419af996fba4c3413771f1e9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESVIWM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpuW9Ww83z%2F%2FFxmYD06vNUD6LYFbowmIczvtTAknYlcAiEA%2Fb1CIKvz3bjC5%2BGrByoJGe0wkwXwWxqV2m2eeXV6lQkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH3Rl2V6HEfuFJ5bircA43XxcMAin9SH%2FUPEaUYvmJxnJe%2BkE7%2BNKEAcXNqxR9624K5fGXu%2F5y%2FojQF%2Fa7bN2s0Tv6UwpcBlGGorwrjSNcj61Rvrz5KENVse9DcLdPBdg6b1GNT5RCUPzcuLMj5jVIit5CTH9SLIAWFYpdHvih9JJzATXKV4pD3RXuYSX6426PXHk2QFE0uylalHnVG0qyqL1Kp3kjxDqwm1AMD5V3NMgvwhIxNtLzHMUEaJzlwRX6ZD0ByOV3dAk9vOXPJv48wd2xAZzoEuQyRcGNQN1mjfvSL2JBmeA8hFeAN%2FttnJbd2qCrB9ITwx4XQNR6b6lz3wT5BTa%2FIhvhy%2Bh7aqnRdVLsNJeGxPPmurBiPaJlflmlN%2FIAZZaholw7OUgHJrO1zgZuHYqLqH6k5Dnd%2FAx%2BO1UwbMgrPp%2F7i6pkAz7n9biyQK0BdvrGQuk460%2B%2FDSUDmHSQo2S6CeESD9JiBLOXiB236Ae2KiyvFTpHIjxmGSVulz3vJvWi4j8TRtXUQG8Oov%2B%2BKjLFkB0wKqmp%2BGta0psLnvKW2Zy3fayMeEPBP0%2B7dOJo6nGuOxNJSjOpPXGHiN4HN7Yy6rJFYCetYsANg6Rbml8A8h6536%2F0i3LanKsvPbjkvV5p%2Bvj53MICz6sEGOqUBUj4yLexHnsrHHjLG6bZYW1fHkiZ%2BUzcFjBGYCB7RmHRmCZLibFr1aea2%2Fe6u6QUHi%2BUpY9gRA2UoQ6oO4efSVgGJ21dvOFL7MtvFPU1FkqnQGrKNhgpSR29FhJHjvKvz08Zk0X0p4vihks0YT76Co7O%2BHHUB%2B4kkkNNNyY7ugCDxYNWo7ku9DyB2Ycgwza%2F%2BycW9VGSBSPjDKinLAgfdsl1grLzn&X-Amz-Signature=5f59ad9aa1f23fe1d16e1b881db2eb4e566b041178811a1ffb2dc5eb8fe2e2b9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
