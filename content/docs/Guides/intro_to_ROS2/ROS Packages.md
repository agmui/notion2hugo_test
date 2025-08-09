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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYV5U3KS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf5XuP042opEIEKYRIucv%2F43nLaZTb%2BDYA9%2FQPTCT5ywIgbNBFZuvXzJuAngrok2N5KXfj3pm5XvHsq9OSdnW1%2FqIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FvD0oWa9p8ugQvBCrcA%2BWITwE9hhuE9SpBDoDhmk4ffjiu7rmuYXzkJLj8QC8bTl4GdzEDxxRBltBn5PXpEzVTe2FK48Jdv1CRJuZ%2F9sH9IuUj%2FP2rJU%2Fzq8hqOjrHMY5CrgEtOx2MJBUQfPQLpcFOkIGKKq%2B5sjEFwZPBXTkjSTGZL4XD5i3abxN%2FmdatpAaT6kXM8lG0oi9JbnAe84WDdxpLM1ECmap9Acyg5ROekTc8AkOoxjQsvJDsFdmZI5eQ1QWAEgF32FXf8sM304sSBfEAkFO6mHj77KrNJiCzf9AptLjw6XpKcAJ0sr8HoCnvuozumNso0jmV2jeaCCPUBIhf6PDE9zgO74L%2F%2Fpl0JHUlsQiRP8z9Us6WsDKJ1a2sC%2BL2aZkWPsoCAFC4LiOXgbP1To53cOpVwSq%2FQV3z9UgFlb%2Fed7JvasT8XFOUFH%2BC%2BE8bT1kbqWH%2FYVqjxT1MIVTRXEhrlcyLqk%2F8360YwgPpZdJyZzSIJpn2RsLdymuu25SYRHA3MTm%2BZFI2TQoqJ723kDnPJwg%2BnUVe4s4e67A%2F6XAuRhUObNAOEXB5VUJXpycoeMGd2x7eHLz9HyduVDkuugnYssCvEVKk033o5Z1oi7%2B%2FDH7PeP1oZxwTcQtYTHSPLTySvWrRMIeD3sQGOqUB9B36KtDlPbaE0EBCqX4HlLNqS%2BWCibfO0%2Ft5GkF73CFpGNJdgpUTZsG42jM1Fj1b26WlFCjrs5TiTj0mSyzkf6%2FXDjkyed9YfnkIboDsOdqn9n5kD1oacxMS5AIRDZ9x8flkraY%2BaiHs%2BpL0RJE7UtWGFw25EP50mJi%2FQsSm%2BlpWTl%2F0qSb1PzAfgfoCoz6lehlrUP%2FfkQl9JGjX3UdrlFF2Dzdj&X-Amz-Signature=4aee655da981a1f1fcd758a3234a8ba2f6231d02f5a6814b936a03876951db85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYV5U3KS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf5XuP042opEIEKYRIucv%2F43nLaZTb%2BDYA9%2FQPTCT5ywIgbNBFZuvXzJuAngrok2N5KXfj3pm5XvHsq9OSdnW1%2FqIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FvD0oWa9p8ugQvBCrcA%2BWITwE9hhuE9SpBDoDhmk4ffjiu7rmuYXzkJLj8QC8bTl4GdzEDxxRBltBn5PXpEzVTe2FK48Jdv1CRJuZ%2F9sH9IuUj%2FP2rJU%2Fzq8hqOjrHMY5CrgEtOx2MJBUQfPQLpcFOkIGKKq%2B5sjEFwZPBXTkjSTGZL4XD5i3abxN%2FmdatpAaT6kXM8lG0oi9JbnAe84WDdxpLM1ECmap9Acyg5ROekTc8AkOoxjQsvJDsFdmZI5eQ1QWAEgF32FXf8sM304sSBfEAkFO6mHj77KrNJiCzf9AptLjw6XpKcAJ0sr8HoCnvuozumNso0jmV2jeaCCPUBIhf6PDE9zgO74L%2F%2Fpl0JHUlsQiRP8z9Us6WsDKJ1a2sC%2BL2aZkWPsoCAFC4LiOXgbP1To53cOpVwSq%2FQV3z9UgFlb%2Fed7JvasT8XFOUFH%2BC%2BE8bT1kbqWH%2FYVqjxT1MIVTRXEhrlcyLqk%2F8360YwgPpZdJyZzSIJpn2RsLdymuu25SYRHA3MTm%2BZFI2TQoqJ723kDnPJwg%2BnUVe4s4e67A%2F6XAuRhUObNAOEXB5VUJXpycoeMGd2x7eHLz9HyduVDkuugnYssCvEVKk033o5Z1oi7%2B%2FDH7PeP1oZxwTcQtYTHSPLTySvWrRMIeD3sQGOqUB9B36KtDlPbaE0EBCqX4HlLNqS%2BWCibfO0%2Ft5GkF73CFpGNJdgpUTZsG42jM1Fj1b26WlFCjrs5TiTj0mSyzkf6%2FXDjkyed9YfnkIboDsOdqn9n5kD1oacxMS5AIRDZ9x8flkraY%2BaiHs%2BpL0RJE7UtWGFw25EP50mJi%2FQsSm%2BlpWTl%2F0qSb1PzAfgfoCoz6lehlrUP%2FfkQl9JGjX3UdrlFF2Dzdj&X-Amz-Signature=a5f0153cbe85be5193e72bb120cedd203d338c1a170e92ee15a6a0ca3899b06f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYV5U3KS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf5XuP042opEIEKYRIucv%2F43nLaZTb%2BDYA9%2FQPTCT5ywIgbNBFZuvXzJuAngrok2N5KXfj3pm5XvHsq9OSdnW1%2FqIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FvD0oWa9p8ugQvBCrcA%2BWITwE9hhuE9SpBDoDhmk4ffjiu7rmuYXzkJLj8QC8bTl4GdzEDxxRBltBn5PXpEzVTe2FK48Jdv1CRJuZ%2F9sH9IuUj%2FP2rJU%2Fzq8hqOjrHMY5CrgEtOx2MJBUQfPQLpcFOkIGKKq%2B5sjEFwZPBXTkjSTGZL4XD5i3abxN%2FmdatpAaT6kXM8lG0oi9JbnAe84WDdxpLM1ECmap9Acyg5ROekTc8AkOoxjQsvJDsFdmZI5eQ1QWAEgF32FXf8sM304sSBfEAkFO6mHj77KrNJiCzf9AptLjw6XpKcAJ0sr8HoCnvuozumNso0jmV2jeaCCPUBIhf6PDE9zgO74L%2F%2Fpl0JHUlsQiRP8z9Us6WsDKJ1a2sC%2BL2aZkWPsoCAFC4LiOXgbP1To53cOpVwSq%2FQV3z9UgFlb%2Fed7JvasT8XFOUFH%2BC%2BE8bT1kbqWH%2FYVqjxT1MIVTRXEhrlcyLqk%2F8360YwgPpZdJyZzSIJpn2RsLdymuu25SYRHA3MTm%2BZFI2TQoqJ723kDnPJwg%2BnUVe4s4e67A%2F6XAuRhUObNAOEXB5VUJXpycoeMGd2x7eHLz9HyduVDkuugnYssCvEVKk033o5Z1oi7%2B%2FDH7PeP1oZxwTcQtYTHSPLTySvWrRMIeD3sQGOqUB9B36KtDlPbaE0EBCqX4HlLNqS%2BWCibfO0%2Ft5GkF73CFpGNJdgpUTZsG42jM1Fj1b26WlFCjrs5TiTj0mSyzkf6%2FXDjkyed9YfnkIboDsOdqn9n5kD1oacxMS5AIRDZ9x8flkraY%2BaiHs%2BpL0RJE7UtWGFw25EP50mJi%2FQsSm%2BlpWTl%2F0qSb1PzAfgfoCoz6lehlrUP%2FfkQl9JGjX3UdrlFF2Dzdj&X-Amz-Signature=fdef71e381e1d6c32b8f8a35568e66b62c02d1e261f2093674d9622041a620b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYV5U3KS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf5XuP042opEIEKYRIucv%2F43nLaZTb%2BDYA9%2FQPTCT5ywIgbNBFZuvXzJuAngrok2N5KXfj3pm5XvHsq9OSdnW1%2FqIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FvD0oWa9p8ugQvBCrcA%2BWITwE9hhuE9SpBDoDhmk4ffjiu7rmuYXzkJLj8QC8bTl4GdzEDxxRBltBn5PXpEzVTe2FK48Jdv1CRJuZ%2F9sH9IuUj%2FP2rJU%2Fzq8hqOjrHMY5CrgEtOx2MJBUQfPQLpcFOkIGKKq%2B5sjEFwZPBXTkjSTGZL4XD5i3abxN%2FmdatpAaT6kXM8lG0oi9JbnAe84WDdxpLM1ECmap9Acyg5ROekTc8AkOoxjQsvJDsFdmZI5eQ1QWAEgF32FXf8sM304sSBfEAkFO6mHj77KrNJiCzf9AptLjw6XpKcAJ0sr8HoCnvuozumNso0jmV2jeaCCPUBIhf6PDE9zgO74L%2F%2Fpl0JHUlsQiRP8z9Us6WsDKJ1a2sC%2BL2aZkWPsoCAFC4LiOXgbP1To53cOpVwSq%2FQV3z9UgFlb%2Fed7JvasT8XFOUFH%2BC%2BE8bT1kbqWH%2FYVqjxT1MIVTRXEhrlcyLqk%2F8360YwgPpZdJyZzSIJpn2RsLdymuu25SYRHA3MTm%2BZFI2TQoqJ723kDnPJwg%2BnUVe4s4e67A%2F6XAuRhUObNAOEXB5VUJXpycoeMGd2x7eHLz9HyduVDkuugnYssCvEVKk033o5Z1oi7%2B%2FDH7PeP1oZxwTcQtYTHSPLTySvWrRMIeD3sQGOqUB9B36KtDlPbaE0EBCqX4HlLNqS%2BWCibfO0%2Ft5GkF73CFpGNJdgpUTZsG42jM1Fj1b26WlFCjrs5TiTj0mSyzkf6%2FXDjkyed9YfnkIboDsOdqn9n5kD1oacxMS5AIRDZ9x8flkraY%2BaiHs%2BpL0RJE7UtWGFw25EP50mJi%2FQsSm%2BlpWTl%2F0qSb1PzAfgfoCoz6lehlrUP%2FfkQl9JGjX3UdrlFF2Dzdj&X-Amz-Signature=150b0f33d40bbafc126ff9614230d52eca47da318338d82471797ab0532b6412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYV5U3KS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf5XuP042opEIEKYRIucv%2F43nLaZTb%2BDYA9%2FQPTCT5ywIgbNBFZuvXzJuAngrok2N5KXfj3pm5XvHsq9OSdnW1%2FqIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FvD0oWa9p8ugQvBCrcA%2BWITwE9hhuE9SpBDoDhmk4ffjiu7rmuYXzkJLj8QC8bTl4GdzEDxxRBltBn5PXpEzVTe2FK48Jdv1CRJuZ%2F9sH9IuUj%2FP2rJU%2Fzq8hqOjrHMY5CrgEtOx2MJBUQfPQLpcFOkIGKKq%2B5sjEFwZPBXTkjSTGZL4XD5i3abxN%2FmdatpAaT6kXM8lG0oi9JbnAe84WDdxpLM1ECmap9Acyg5ROekTc8AkOoxjQsvJDsFdmZI5eQ1QWAEgF32FXf8sM304sSBfEAkFO6mHj77KrNJiCzf9AptLjw6XpKcAJ0sr8HoCnvuozumNso0jmV2jeaCCPUBIhf6PDE9zgO74L%2F%2Fpl0JHUlsQiRP8z9Us6WsDKJ1a2sC%2BL2aZkWPsoCAFC4LiOXgbP1To53cOpVwSq%2FQV3z9UgFlb%2Fed7JvasT8XFOUFH%2BC%2BE8bT1kbqWH%2FYVqjxT1MIVTRXEhrlcyLqk%2F8360YwgPpZdJyZzSIJpn2RsLdymuu25SYRHA3MTm%2BZFI2TQoqJ723kDnPJwg%2BnUVe4s4e67A%2F6XAuRhUObNAOEXB5VUJXpycoeMGd2x7eHLz9HyduVDkuugnYssCvEVKk033o5Z1oi7%2B%2FDH7PeP1oZxwTcQtYTHSPLTySvWrRMIeD3sQGOqUB9B36KtDlPbaE0EBCqX4HlLNqS%2BWCibfO0%2Ft5GkF73CFpGNJdgpUTZsG42jM1Fj1b26WlFCjrs5TiTj0mSyzkf6%2FXDjkyed9YfnkIboDsOdqn9n5kD1oacxMS5AIRDZ9x8flkraY%2BaiHs%2BpL0RJE7UtWGFw25EP50mJi%2FQsSm%2BlpWTl%2F0qSb1PzAfgfoCoz6lehlrUP%2FfkQl9JGjX3UdrlFF2Dzdj&X-Amz-Signature=ed750be9cafceba567086b6c9c508c2f23b2511959fd6967e3bc0d11141b86a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYV5U3KS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf5XuP042opEIEKYRIucv%2F43nLaZTb%2BDYA9%2FQPTCT5ywIgbNBFZuvXzJuAngrok2N5KXfj3pm5XvHsq9OSdnW1%2FqIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FvD0oWa9p8ugQvBCrcA%2BWITwE9hhuE9SpBDoDhmk4ffjiu7rmuYXzkJLj8QC8bTl4GdzEDxxRBltBn5PXpEzVTe2FK48Jdv1CRJuZ%2F9sH9IuUj%2FP2rJU%2Fzq8hqOjrHMY5CrgEtOx2MJBUQfPQLpcFOkIGKKq%2B5sjEFwZPBXTkjSTGZL4XD5i3abxN%2FmdatpAaT6kXM8lG0oi9JbnAe84WDdxpLM1ECmap9Acyg5ROekTc8AkOoxjQsvJDsFdmZI5eQ1QWAEgF32FXf8sM304sSBfEAkFO6mHj77KrNJiCzf9AptLjw6XpKcAJ0sr8HoCnvuozumNso0jmV2jeaCCPUBIhf6PDE9zgO74L%2F%2Fpl0JHUlsQiRP8z9Us6WsDKJ1a2sC%2BL2aZkWPsoCAFC4LiOXgbP1To53cOpVwSq%2FQV3z9UgFlb%2Fed7JvasT8XFOUFH%2BC%2BE8bT1kbqWH%2FYVqjxT1MIVTRXEhrlcyLqk%2F8360YwgPpZdJyZzSIJpn2RsLdymuu25SYRHA3MTm%2BZFI2TQoqJ723kDnPJwg%2BnUVe4s4e67A%2F6XAuRhUObNAOEXB5VUJXpycoeMGd2x7eHLz9HyduVDkuugnYssCvEVKk033o5Z1oi7%2B%2FDH7PeP1oZxwTcQtYTHSPLTySvWrRMIeD3sQGOqUB9B36KtDlPbaE0EBCqX4HlLNqS%2BWCibfO0%2Ft5GkF73CFpGNJdgpUTZsG42jM1Fj1b26WlFCjrs5TiTj0mSyzkf6%2FXDjkyed9YfnkIboDsOdqn9n5kD1oacxMS5AIRDZ9x8flkraY%2BaiHs%2BpL0RJE7UtWGFw25EP50mJi%2FQsSm%2BlpWTl%2F0qSb1PzAfgfoCoz6lehlrUP%2FfkQl9JGjX3UdrlFF2Dzdj&X-Amz-Signature=9b88878051ca6abd558cab5565166e57e02f9b32933ad8cc143055bb4370d552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYV5U3KS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf5XuP042opEIEKYRIucv%2F43nLaZTb%2BDYA9%2FQPTCT5ywIgbNBFZuvXzJuAngrok2N5KXfj3pm5XvHsq9OSdnW1%2FqIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FvD0oWa9p8ugQvBCrcA%2BWITwE9hhuE9SpBDoDhmk4ffjiu7rmuYXzkJLj8QC8bTl4GdzEDxxRBltBn5PXpEzVTe2FK48Jdv1CRJuZ%2F9sH9IuUj%2FP2rJU%2Fzq8hqOjrHMY5CrgEtOx2MJBUQfPQLpcFOkIGKKq%2B5sjEFwZPBXTkjSTGZL4XD5i3abxN%2FmdatpAaT6kXM8lG0oi9JbnAe84WDdxpLM1ECmap9Acyg5ROekTc8AkOoxjQsvJDsFdmZI5eQ1QWAEgF32FXf8sM304sSBfEAkFO6mHj77KrNJiCzf9AptLjw6XpKcAJ0sr8HoCnvuozumNso0jmV2jeaCCPUBIhf6PDE9zgO74L%2F%2Fpl0JHUlsQiRP8z9Us6WsDKJ1a2sC%2BL2aZkWPsoCAFC4LiOXgbP1To53cOpVwSq%2FQV3z9UgFlb%2Fed7JvasT8XFOUFH%2BC%2BE8bT1kbqWH%2FYVqjxT1MIVTRXEhrlcyLqk%2F8360YwgPpZdJyZzSIJpn2RsLdymuu25SYRHA3MTm%2BZFI2TQoqJ723kDnPJwg%2BnUVe4s4e67A%2F6XAuRhUObNAOEXB5VUJXpycoeMGd2x7eHLz9HyduVDkuugnYssCvEVKk033o5Z1oi7%2B%2FDH7PeP1oZxwTcQtYTHSPLTySvWrRMIeD3sQGOqUB9B36KtDlPbaE0EBCqX4HlLNqS%2BWCibfO0%2Ft5GkF73CFpGNJdgpUTZsG42jM1Fj1b26WlFCjrs5TiTj0mSyzkf6%2FXDjkyed9YfnkIboDsOdqn9n5kD1oacxMS5AIRDZ9x8flkraY%2BaiHs%2BpL0RJE7UtWGFw25EP50mJi%2FQsSm%2BlpWTl%2F0qSb1PzAfgfoCoz6lehlrUP%2FfkQl9JGjX3UdrlFF2Dzdj&X-Amz-Signature=8d79f795618ad4974d86767a96b55be8a9d963eb78a68424a7bfdc58dfe25aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
