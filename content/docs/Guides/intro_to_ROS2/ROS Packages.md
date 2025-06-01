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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3C5AOC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEvkqVjs93IxhA3zETvIUZ7bIw4nDvHEIa1MCqBoilpOAiEA%2B%2BF7bejsOIl78GBFmFNMgmqkjNUeTzB5VBDwQZk%2FT0wqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACWWWvKhOTlflKD4ircA2PVEBxA0lHD0juTt%2FCste4YtntI0erwogQCStBAvLFrKdYnT0NDxbhK8daTRQgX8Ap8feng7z0QXTMxrl4Q1o1mD2IhAJ95udHX5DcuKLEPFHdph6P8ZGECr1co4uxdwJ4k1evq2g%2FCPFeivlYJfszFyVJHJjUyYtahRKbogf4vsIodpkR63JZGcSr1Ls6ljEF2QFlC0xGoJ8FeZ5CcfQgYzUX4zVs9WDpcMTxUO3HcKkmayb9wyx8WOtKbtiHo7YQr3VzBXoEqf8Z%2FSWu2CMhhxLKZ3tou63QzWymMMsC7u42YxGeL16rlJm8cWjy5voK8uKosymJeMHDPPi%2Br%2B4AFlgVeX6Gyz0rT8RpPBzSIR7SD6OF0WZbNMVsRQ45Tly9rhW4xVvfMPEPp47djZexIRQVXQpWOOxskIzubNl4%2BnpUyx8K7jbfwkrcrl4ctRFhXCnYl%2ByhkN6MPtnRSnhQY7NPx51pSHiBECmzH9N4%2BkF9Vra%2F%2BCIBesouq2MjSYyDLAEmMZhT%2BU3gLpHyAF73mrNU02RsnbZqnsLwNrf08IKpu9kuPiOAazermIdi%2B4QEbFdbojJCawo5x2z%2FpTSQfAy9ApTcqfOm3bL06bak9XduT8tDBvKlpK%2Ba4MMff8MEGOqUBOZpRHXfuh2yra6%2FWP8T4sIcAeTYrcwzggrDjdZ%2FXMmMwSu4Uav1tkvnQ%2FnzjcvPQ%2Fe%2FZNfsF9nSTzy%2BUzGbH2igs8rv49rO8reErVqdV2scmoTChBbr9EkvDp7C54%2BPQabfqi0siK7XhgpdofVlUNhu9FgVkWcYLdFNq%2BAgeHf%2FSIaCfI%2FbahYBqVSradVm6RK5gJld%2F0oowf1fIFvXxxogCi8u7&X-Amz-Signature=95064404d1c9d28066292762a8f678e52b065580e23a4e8db18a9a9b5ee587ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3C5AOC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEvkqVjs93IxhA3zETvIUZ7bIw4nDvHEIa1MCqBoilpOAiEA%2B%2BF7bejsOIl78GBFmFNMgmqkjNUeTzB5VBDwQZk%2FT0wqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACWWWvKhOTlflKD4ircA2PVEBxA0lHD0juTt%2FCste4YtntI0erwogQCStBAvLFrKdYnT0NDxbhK8daTRQgX8Ap8feng7z0QXTMxrl4Q1o1mD2IhAJ95udHX5DcuKLEPFHdph6P8ZGECr1co4uxdwJ4k1evq2g%2FCPFeivlYJfszFyVJHJjUyYtahRKbogf4vsIodpkR63JZGcSr1Ls6ljEF2QFlC0xGoJ8FeZ5CcfQgYzUX4zVs9WDpcMTxUO3HcKkmayb9wyx8WOtKbtiHo7YQr3VzBXoEqf8Z%2FSWu2CMhhxLKZ3tou63QzWymMMsC7u42YxGeL16rlJm8cWjy5voK8uKosymJeMHDPPi%2Br%2B4AFlgVeX6Gyz0rT8RpPBzSIR7SD6OF0WZbNMVsRQ45Tly9rhW4xVvfMPEPp47djZexIRQVXQpWOOxskIzubNl4%2BnpUyx8K7jbfwkrcrl4ctRFhXCnYl%2ByhkN6MPtnRSnhQY7NPx51pSHiBECmzH9N4%2BkF9Vra%2F%2BCIBesouq2MjSYyDLAEmMZhT%2BU3gLpHyAF73mrNU02RsnbZqnsLwNrf08IKpu9kuPiOAazermIdi%2B4QEbFdbojJCawo5x2z%2FpTSQfAy9ApTcqfOm3bL06bak9XduT8tDBvKlpK%2Ba4MMff8MEGOqUBOZpRHXfuh2yra6%2FWP8T4sIcAeTYrcwzggrDjdZ%2FXMmMwSu4Uav1tkvnQ%2FnzjcvPQ%2Fe%2FZNfsF9nSTzy%2BUzGbH2igs8rv49rO8reErVqdV2scmoTChBbr9EkvDp7C54%2BPQabfqi0siK7XhgpdofVlUNhu9FgVkWcYLdFNq%2BAgeHf%2FSIaCfI%2FbahYBqVSradVm6RK5gJld%2F0oowf1fIFvXxxogCi8u7&X-Amz-Signature=6368391330bca29e55e3933698de9cca24320d22d4a190fed0a48241434c2e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3C5AOC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEvkqVjs93IxhA3zETvIUZ7bIw4nDvHEIa1MCqBoilpOAiEA%2B%2BF7bejsOIl78GBFmFNMgmqkjNUeTzB5VBDwQZk%2FT0wqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACWWWvKhOTlflKD4ircA2PVEBxA0lHD0juTt%2FCste4YtntI0erwogQCStBAvLFrKdYnT0NDxbhK8daTRQgX8Ap8feng7z0QXTMxrl4Q1o1mD2IhAJ95udHX5DcuKLEPFHdph6P8ZGECr1co4uxdwJ4k1evq2g%2FCPFeivlYJfszFyVJHJjUyYtahRKbogf4vsIodpkR63JZGcSr1Ls6ljEF2QFlC0xGoJ8FeZ5CcfQgYzUX4zVs9WDpcMTxUO3HcKkmayb9wyx8WOtKbtiHo7YQr3VzBXoEqf8Z%2FSWu2CMhhxLKZ3tou63QzWymMMsC7u42YxGeL16rlJm8cWjy5voK8uKosymJeMHDPPi%2Br%2B4AFlgVeX6Gyz0rT8RpPBzSIR7SD6OF0WZbNMVsRQ45Tly9rhW4xVvfMPEPp47djZexIRQVXQpWOOxskIzubNl4%2BnpUyx8K7jbfwkrcrl4ctRFhXCnYl%2ByhkN6MPtnRSnhQY7NPx51pSHiBECmzH9N4%2BkF9Vra%2F%2BCIBesouq2MjSYyDLAEmMZhT%2BU3gLpHyAF73mrNU02RsnbZqnsLwNrf08IKpu9kuPiOAazermIdi%2B4QEbFdbojJCawo5x2z%2FpTSQfAy9ApTcqfOm3bL06bak9XduT8tDBvKlpK%2Ba4MMff8MEGOqUBOZpRHXfuh2yra6%2FWP8T4sIcAeTYrcwzggrDjdZ%2FXMmMwSu4Uav1tkvnQ%2FnzjcvPQ%2Fe%2FZNfsF9nSTzy%2BUzGbH2igs8rv49rO8reErVqdV2scmoTChBbr9EkvDp7C54%2BPQabfqi0siK7XhgpdofVlUNhu9FgVkWcYLdFNq%2BAgeHf%2FSIaCfI%2FbahYBqVSradVm6RK5gJld%2F0oowf1fIFvXxxogCi8u7&X-Amz-Signature=349d4d90ce3fc6c8fcf7dc2e6bd6aaa1c7c6dd68c449fce04993ea928d77b0eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3C5AOC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEvkqVjs93IxhA3zETvIUZ7bIw4nDvHEIa1MCqBoilpOAiEA%2B%2BF7bejsOIl78GBFmFNMgmqkjNUeTzB5VBDwQZk%2FT0wqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACWWWvKhOTlflKD4ircA2PVEBxA0lHD0juTt%2FCste4YtntI0erwogQCStBAvLFrKdYnT0NDxbhK8daTRQgX8Ap8feng7z0QXTMxrl4Q1o1mD2IhAJ95udHX5DcuKLEPFHdph6P8ZGECr1co4uxdwJ4k1evq2g%2FCPFeivlYJfszFyVJHJjUyYtahRKbogf4vsIodpkR63JZGcSr1Ls6ljEF2QFlC0xGoJ8FeZ5CcfQgYzUX4zVs9WDpcMTxUO3HcKkmayb9wyx8WOtKbtiHo7YQr3VzBXoEqf8Z%2FSWu2CMhhxLKZ3tou63QzWymMMsC7u42YxGeL16rlJm8cWjy5voK8uKosymJeMHDPPi%2Br%2B4AFlgVeX6Gyz0rT8RpPBzSIR7SD6OF0WZbNMVsRQ45Tly9rhW4xVvfMPEPp47djZexIRQVXQpWOOxskIzubNl4%2BnpUyx8K7jbfwkrcrl4ctRFhXCnYl%2ByhkN6MPtnRSnhQY7NPx51pSHiBECmzH9N4%2BkF9Vra%2F%2BCIBesouq2MjSYyDLAEmMZhT%2BU3gLpHyAF73mrNU02RsnbZqnsLwNrf08IKpu9kuPiOAazermIdi%2B4QEbFdbojJCawo5x2z%2FpTSQfAy9ApTcqfOm3bL06bak9XduT8tDBvKlpK%2Ba4MMff8MEGOqUBOZpRHXfuh2yra6%2FWP8T4sIcAeTYrcwzggrDjdZ%2FXMmMwSu4Uav1tkvnQ%2FnzjcvPQ%2Fe%2FZNfsF9nSTzy%2BUzGbH2igs8rv49rO8reErVqdV2scmoTChBbr9EkvDp7C54%2BPQabfqi0siK7XhgpdofVlUNhu9FgVkWcYLdFNq%2BAgeHf%2FSIaCfI%2FbahYBqVSradVm6RK5gJld%2F0oowf1fIFvXxxogCi8u7&X-Amz-Signature=f5518ea255273f058dcef6bfedbd3cd93b786de723fade4aca5f7d17b1c8da9e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3C5AOC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEvkqVjs93IxhA3zETvIUZ7bIw4nDvHEIa1MCqBoilpOAiEA%2B%2BF7bejsOIl78GBFmFNMgmqkjNUeTzB5VBDwQZk%2FT0wqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACWWWvKhOTlflKD4ircA2PVEBxA0lHD0juTt%2FCste4YtntI0erwogQCStBAvLFrKdYnT0NDxbhK8daTRQgX8Ap8feng7z0QXTMxrl4Q1o1mD2IhAJ95udHX5DcuKLEPFHdph6P8ZGECr1co4uxdwJ4k1evq2g%2FCPFeivlYJfszFyVJHJjUyYtahRKbogf4vsIodpkR63JZGcSr1Ls6ljEF2QFlC0xGoJ8FeZ5CcfQgYzUX4zVs9WDpcMTxUO3HcKkmayb9wyx8WOtKbtiHo7YQr3VzBXoEqf8Z%2FSWu2CMhhxLKZ3tou63QzWymMMsC7u42YxGeL16rlJm8cWjy5voK8uKosymJeMHDPPi%2Br%2B4AFlgVeX6Gyz0rT8RpPBzSIR7SD6OF0WZbNMVsRQ45Tly9rhW4xVvfMPEPp47djZexIRQVXQpWOOxskIzubNl4%2BnpUyx8K7jbfwkrcrl4ctRFhXCnYl%2ByhkN6MPtnRSnhQY7NPx51pSHiBECmzH9N4%2BkF9Vra%2F%2BCIBesouq2MjSYyDLAEmMZhT%2BU3gLpHyAF73mrNU02RsnbZqnsLwNrf08IKpu9kuPiOAazermIdi%2B4QEbFdbojJCawo5x2z%2FpTSQfAy9ApTcqfOm3bL06bak9XduT8tDBvKlpK%2Ba4MMff8MEGOqUBOZpRHXfuh2yra6%2FWP8T4sIcAeTYrcwzggrDjdZ%2FXMmMwSu4Uav1tkvnQ%2FnzjcvPQ%2Fe%2FZNfsF9nSTzy%2BUzGbH2igs8rv49rO8reErVqdV2scmoTChBbr9EkvDp7C54%2BPQabfqi0siK7XhgpdofVlUNhu9FgVkWcYLdFNq%2BAgeHf%2FSIaCfI%2FbahYBqVSradVm6RK5gJld%2F0oowf1fIFvXxxogCi8u7&X-Amz-Signature=48ad4db4d9b5005c8fa49e20edb8e90e5e668c27b98eed9a0b05da2a759e8b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3C5AOC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEvkqVjs93IxhA3zETvIUZ7bIw4nDvHEIa1MCqBoilpOAiEA%2B%2BF7bejsOIl78GBFmFNMgmqkjNUeTzB5VBDwQZk%2FT0wqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACWWWvKhOTlflKD4ircA2PVEBxA0lHD0juTt%2FCste4YtntI0erwogQCStBAvLFrKdYnT0NDxbhK8daTRQgX8Ap8feng7z0QXTMxrl4Q1o1mD2IhAJ95udHX5DcuKLEPFHdph6P8ZGECr1co4uxdwJ4k1evq2g%2FCPFeivlYJfszFyVJHJjUyYtahRKbogf4vsIodpkR63JZGcSr1Ls6ljEF2QFlC0xGoJ8FeZ5CcfQgYzUX4zVs9WDpcMTxUO3HcKkmayb9wyx8WOtKbtiHo7YQr3VzBXoEqf8Z%2FSWu2CMhhxLKZ3tou63QzWymMMsC7u42YxGeL16rlJm8cWjy5voK8uKosymJeMHDPPi%2Br%2B4AFlgVeX6Gyz0rT8RpPBzSIR7SD6OF0WZbNMVsRQ45Tly9rhW4xVvfMPEPp47djZexIRQVXQpWOOxskIzubNl4%2BnpUyx8K7jbfwkrcrl4ctRFhXCnYl%2ByhkN6MPtnRSnhQY7NPx51pSHiBECmzH9N4%2BkF9Vra%2F%2BCIBesouq2MjSYyDLAEmMZhT%2BU3gLpHyAF73mrNU02RsnbZqnsLwNrf08IKpu9kuPiOAazermIdi%2B4QEbFdbojJCawo5x2z%2FpTSQfAy9ApTcqfOm3bL06bak9XduT8tDBvKlpK%2Ba4MMff8MEGOqUBOZpRHXfuh2yra6%2FWP8T4sIcAeTYrcwzggrDjdZ%2FXMmMwSu4Uav1tkvnQ%2FnzjcvPQ%2Fe%2FZNfsF9nSTzy%2BUzGbH2igs8rv49rO8reErVqdV2scmoTChBbr9EkvDp7C54%2BPQabfqi0siK7XhgpdofVlUNhu9FgVkWcYLdFNq%2BAgeHf%2FSIaCfI%2FbahYBqVSradVm6RK5gJld%2F0oowf1fIFvXxxogCi8u7&X-Amz-Signature=a8989f6a31e88d4bfd840a051367c3ee139cb1432febf80d3ed67e6a43e0dfdc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3C5AOC4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEvkqVjs93IxhA3zETvIUZ7bIw4nDvHEIa1MCqBoilpOAiEA%2B%2BF7bejsOIl78GBFmFNMgmqkjNUeTzB5VBDwQZk%2FT0wqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACWWWvKhOTlflKD4ircA2PVEBxA0lHD0juTt%2FCste4YtntI0erwogQCStBAvLFrKdYnT0NDxbhK8daTRQgX8Ap8feng7z0QXTMxrl4Q1o1mD2IhAJ95udHX5DcuKLEPFHdph6P8ZGECr1co4uxdwJ4k1evq2g%2FCPFeivlYJfszFyVJHJjUyYtahRKbogf4vsIodpkR63JZGcSr1Ls6ljEF2QFlC0xGoJ8FeZ5CcfQgYzUX4zVs9WDpcMTxUO3HcKkmayb9wyx8WOtKbtiHo7YQr3VzBXoEqf8Z%2FSWu2CMhhxLKZ3tou63QzWymMMsC7u42YxGeL16rlJm8cWjy5voK8uKosymJeMHDPPi%2Br%2B4AFlgVeX6Gyz0rT8RpPBzSIR7SD6OF0WZbNMVsRQ45Tly9rhW4xVvfMPEPp47djZexIRQVXQpWOOxskIzubNl4%2BnpUyx8K7jbfwkrcrl4ctRFhXCnYl%2ByhkN6MPtnRSnhQY7NPx51pSHiBECmzH9N4%2BkF9Vra%2F%2BCIBesouq2MjSYyDLAEmMZhT%2BU3gLpHyAF73mrNU02RsnbZqnsLwNrf08IKpu9kuPiOAazermIdi%2B4QEbFdbojJCawo5x2z%2FpTSQfAy9ApTcqfOm3bL06bak9XduT8tDBvKlpK%2Ba4MMff8MEGOqUBOZpRHXfuh2yra6%2FWP8T4sIcAeTYrcwzggrDjdZ%2FXMmMwSu4Uav1tkvnQ%2FnzjcvPQ%2Fe%2FZNfsF9nSTzy%2BUzGbH2igs8rv49rO8reErVqdV2scmoTChBbr9EkvDp7C54%2BPQabfqi0siK7XhgpdofVlUNhu9FgVkWcYLdFNq%2BAgeHf%2FSIaCfI%2FbahYBqVSradVm6RK5gJld%2F0oowf1fIFvXxxogCi8u7&X-Amz-Signature=205f16eca16a0a313e79874a9da0cd4e7d7095c614f72fb7b27ece4c111714f9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
