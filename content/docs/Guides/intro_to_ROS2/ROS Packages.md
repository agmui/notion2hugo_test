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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2KRYQD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdmlS1EL%2Fdsb%2FcAQ%2FFrdH4HWEo0MyaWlQw8XxLvIeGDAiEAoatmtsSXY7EP9YuKppndUNSunw3FK%2FglhoRiQvpzPkwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt6aVI9puL9%2Bzl%2FkircA2pjpXt6id%2Fx%2BtfplYLN9wugunIuTSJJ9pN1D1qUII%2B45dPzHPu4mWuWLwrkwLw7DzZpF83gIvCTwW9XCJVEBiRLk%2BjHT3cXnxFaWI9EG115GpzgXinJblFelqnOt0RAmwzjRfP%2FV8aQgM%2F7xmgVNmhiO4X04QscvojIv%2BlSZQaRW%2BgZ90tBhYTvF1lpWj%2BGN1mCKpPUYX03eCkOwZa7mEnjDYlU1tqHZrHoUZt%2BiJgFWFx6OVUyoqvIjmczERQw4ZJ4tNeTXCv%2BeKbt%2BHfDCFqt6gsNpaX0yDMrSPmQDUpxtLGTiytJqeTQ3%2FaRy7A8JtLUe4aTn9r72yTFxRLLdoDaLbaxBnoxEJn%2BY4xRfzwModmEcMgE%2BUSAt3fQiDuy5y2rFFJEhD3Hf72m2XnKztMxCF1%2Fo%2BYB%2FxcqwopVty04FXD4rLXBKw%2FVjLGjk9%2BUrPDmZAZ79dD9WZyP%2BtyUnUxU59mGeAMNFZ85OyhsuX%2Bkgxcu%2FvhH0FDNY2dLdv42XjbvEh9Ke4beTeAxknG9n%2F41pAw6H4hiJ5p3Wa7nc7JCV4ZXkCyp8aC9Pdp7P%2FMwB4d0DUHfz6W9eWSMmnSAySI6tHFYRUi7zoMTDhH1X8K4Q5x3%2FjTeg1oUDHJKMLy3j8IGOqUBVqKzMXuWF2kooyZuJfSK%2BNe6LYQ%2BjIIHJ4hzVJiKO7MdwqcDrBn9a1YJQT%2FofygduqvvFLK8rbi432qJWwE1MgTkZl8ZXehsNqaffS5HsiJQFLxrrw5Umv5kBivn25hbSDNepqePe9pxoKPOteyfz3P4SWDt12zde0B1h%2BLnYb0CQeLlmyHGNvB5XSb1M%2B31HD8sZ0hLuLXAAVQpu%2Fr9zEKv0Tag&X-Amz-Signature=f6b0b5b3651e02f3815ce85117ae29860413bbbfc4b8c5db44a0cf00e567e187&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2KRYQD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdmlS1EL%2Fdsb%2FcAQ%2FFrdH4HWEo0MyaWlQw8XxLvIeGDAiEAoatmtsSXY7EP9YuKppndUNSunw3FK%2FglhoRiQvpzPkwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt6aVI9puL9%2Bzl%2FkircA2pjpXt6id%2Fx%2BtfplYLN9wugunIuTSJJ9pN1D1qUII%2B45dPzHPu4mWuWLwrkwLw7DzZpF83gIvCTwW9XCJVEBiRLk%2BjHT3cXnxFaWI9EG115GpzgXinJblFelqnOt0RAmwzjRfP%2FV8aQgM%2F7xmgVNmhiO4X04QscvojIv%2BlSZQaRW%2BgZ90tBhYTvF1lpWj%2BGN1mCKpPUYX03eCkOwZa7mEnjDYlU1tqHZrHoUZt%2BiJgFWFx6OVUyoqvIjmczERQw4ZJ4tNeTXCv%2BeKbt%2BHfDCFqt6gsNpaX0yDMrSPmQDUpxtLGTiytJqeTQ3%2FaRy7A8JtLUe4aTn9r72yTFxRLLdoDaLbaxBnoxEJn%2BY4xRfzwModmEcMgE%2BUSAt3fQiDuy5y2rFFJEhD3Hf72m2XnKztMxCF1%2Fo%2BYB%2FxcqwopVty04FXD4rLXBKw%2FVjLGjk9%2BUrPDmZAZ79dD9WZyP%2BtyUnUxU59mGeAMNFZ85OyhsuX%2Bkgxcu%2FvhH0FDNY2dLdv42XjbvEh9Ke4beTeAxknG9n%2F41pAw6H4hiJ5p3Wa7nc7JCV4ZXkCyp8aC9Pdp7P%2FMwB4d0DUHfz6W9eWSMmnSAySI6tHFYRUi7zoMTDhH1X8K4Q5x3%2FjTeg1oUDHJKMLy3j8IGOqUBVqKzMXuWF2kooyZuJfSK%2BNe6LYQ%2BjIIHJ4hzVJiKO7MdwqcDrBn9a1YJQT%2FofygduqvvFLK8rbi432qJWwE1MgTkZl8ZXehsNqaffS5HsiJQFLxrrw5Umv5kBivn25hbSDNepqePe9pxoKPOteyfz3P4SWDt12zde0B1h%2BLnYb0CQeLlmyHGNvB5XSb1M%2B31HD8sZ0hLuLXAAVQpu%2Fr9zEKv0Tag&X-Amz-Signature=0cb85e8e23b5a6ede3d5520d78e57e4dfaec8ef1a504f8b5392231d7d107f9cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2KRYQD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdmlS1EL%2Fdsb%2FcAQ%2FFrdH4HWEo0MyaWlQw8XxLvIeGDAiEAoatmtsSXY7EP9YuKppndUNSunw3FK%2FglhoRiQvpzPkwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt6aVI9puL9%2Bzl%2FkircA2pjpXt6id%2Fx%2BtfplYLN9wugunIuTSJJ9pN1D1qUII%2B45dPzHPu4mWuWLwrkwLw7DzZpF83gIvCTwW9XCJVEBiRLk%2BjHT3cXnxFaWI9EG115GpzgXinJblFelqnOt0RAmwzjRfP%2FV8aQgM%2F7xmgVNmhiO4X04QscvojIv%2BlSZQaRW%2BgZ90tBhYTvF1lpWj%2BGN1mCKpPUYX03eCkOwZa7mEnjDYlU1tqHZrHoUZt%2BiJgFWFx6OVUyoqvIjmczERQw4ZJ4tNeTXCv%2BeKbt%2BHfDCFqt6gsNpaX0yDMrSPmQDUpxtLGTiytJqeTQ3%2FaRy7A8JtLUe4aTn9r72yTFxRLLdoDaLbaxBnoxEJn%2BY4xRfzwModmEcMgE%2BUSAt3fQiDuy5y2rFFJEhD3Hf72m2XnKztMxCF1%2Fo%2BYB%2FxcqwopVty04FXD4rLXBKw%2FVjLGjk9%2BUrPDmZAZ79dD9WZyP%2BtyUnUxU59mGeAMNFZ85OyhsuX%2Bkgxcu%2FvhH0FDNY2dLdv42XjbvEh9Ke4beTeAxknG9n%2F41pAw6H4hiJ5p3Wa7nc7JCV4ZXkCyp8aC9Pdp7P%2FMwB4d0DUHfz6W9eWSMmnSAySI6tHFYRUi7zoMTDhH1X8K4Q5x3%2FjTeg1oUDHJKMLy3j8IGOqUBVqKzMXuWF2kooyZuJfSK%2BNe6LYQ%2BjIIHJ4hzVJiKO7MdwqcDrBn9a1YJQT%2FofygduqvvFLK8rbi432qJWwE1MgTkZl8ZXehsNqaffS5HsiJQFLxrrw5Umv5kBivn25hbSDNepqePe9pxoKPOteyfz3P4SWDt12zde0B1h%2BLnYb0CQeLlmyHGNvB5XSb1M%2B31HD8sZ0hLuLXAAVQpu%2Fr9zEKv0Tag&X-Amz-Signature=dbd9158bf72f28a84375b67a5818a2537bddfabb110de9e401a2f00f8dc1b069&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2KRYQD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdmlS1EL%2Fdsb%2FcAQ%2FFrdH4HWEo0MyaWlQw8XxLvIeGDAiEAoatmtsSXY7EP9YuKppndUNSunw3FK%2FglhoRiQvpzPkwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt6aVI9puL9%2Bzl%2FkircA2pjpXt6id%2Fx%2BtfplYLN9wugunIuTSJJ9pN1D1qUII%2B45dPzHPu4mWuWLwrkwLw7DzZpF83gIvCTwW9XCJVEBiRLk%2BjHT3cXnxFaWI9EG115GpzgXinJblFelqnOt0RAmwzjRfP%2FV8aQgM%2F7xmgVNmhiO4X04QscvojIv%2BlSZQaRW%2BgZ90tBhYTvF1lpWj%2BGN1mCKpPUYX03eCkOwZa7mEnjDYlU1tqHZrHoUZt%2BiJgFWFx6OVUyoqvIjmczERQw4ZJ4tNeTXCv%2BeKbt%2BHfDCFqt6gsNpaX0yDMrSPmQDUpxtLGTiytJqeTQ3%2FaRy7A8JtLUe4aTn9r72yTFxRLLdoDaLbaxBnoxEJn%2BY4xRfzwModmEcMgE%2BUSAt3fQiDuy5y2rFFJEhD3Hf72m2XnKztMxCF1%2Fo%2BYB%2FxcqwopVty04FXD4rLXBKw%2FVjLGjk9%2BUrPDmZAZ79dD9WZyP%2BtyUnUxU59mGeAMNFZ85OyhsuX%2Bkgxcu%2FvhH0FDNY2dLdv42XjbvEh9Ke4beTeAxknG9n%2F41pAw6H4hiJ5p3Wa7nc7JCV4ZXkCyp8aC9Pdp7P%2FMwB4d0DUHfz6W9eWSMmnSAySI6tHFYRUi7zoMTDhH1X8K4Q5x3%2FjTeg1oUDHJKMLy3j8IGOqUBVqKzMXuWF2kooyZuJfSK%2BNe6LYQ%2BjIIHJ4hzVJiKO7MdwqcDrBn9a1YJQT%2FofygduqvvFLK8rbi432qJWwE1MgTkZl8ZXehsNqaffS5HsiJQFLxrrw5Umv5kBivn25hbSDNepqePe9pxoKPOteyfz3P4SWDt12zde0B1h%2BLnYb0CQeLlmyHGNvB5XSb1M%2B31HD8sZ0hLuLXAAVQpu%2Fr9zEKv0Tag&X-Amz-Signature=2a8e76158bde6c950c949fe42df6f4fb1f4841ff28ab692a845962e438dc21c9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2KRYQD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdmlS1EL%2Fdsb%2FcAQ%2FFrdH4HWEo0MyaWlQw8XxLvIeGDAiEAoatmtsSXY7EP9YuKppndUNSunw3FK%2FglhoRiQvpzPkwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt6aVI9puL9%2Bzl%2FkircA2pjpXt6id%2Fx%2BtfplYLN9wugunIuTSJJ9pN1D1qUII%2B45dPzHPu4mWuWLwrkwLw7DzZpF83gIvCTwW9XCJVEBiRLk%2BjHT3cXnxFaWI9EG115GpzgXinJblFelqnOt0RAmwzjRfP%2FV8aQgM%2F7xmgVNmhiO4X04QscvojIv%2BlSZQaRW%2BgZ90tBhYTvF1lpWj%2BGN1mCKpPUYX03eCkOwZa7mEnjDYlU1tqHZrHoUZt%2BiJgFWFx6OVUyoqvIjmczERQw4ZJ4tNeTXCv%2BeKbt%2BHfDCFqt6gsNpaX0yDMrSPmQDUpxtLGTiytJqeTQ3%2FaRy7A8JtLUe4aTn9r72yTFxRLLdoDaLbaxBnoxEJn%2BY4xRfzwModmEcMgE%2BUSAt3fQiDuy5y2rFFJEhD3Hf72m2XnKztMxCF1%2Fo%2BYB%2FxcqwopVty04FXD4rLXBKw%2FVjLGjk9%2BUrPDmZAZ79dD9WZyP%2BtyUnUxU59mGeAMNFZ85OyhsuX%2Bkgxcu%2FvhH0FDNY2dLdv42XjbvEh9Ke4beTeAxknG9n%2F41pAw6H4hiJ5p3Wa7nc7JCV4ZXkCyp8aC9Pdp7P%2FMwB4d0DUHfz6W9eWSMmnSAySI6tHFYRUi7zoMTDhH1X8K4Q5x3%2FjTeg1oUDHJKMLy3j8IGOqUBVqKzMXuWF2kooyZuJfSK%2BNe6LYQ%2BjIIHJ4hzVJiKO7MdwqcDrBn9a1YJQT%2FofygduqvvFLK8rbi432qJWwE1MgTkZl8ZXehsNqaffS5HsiJQFLxrrw5Umv5kBivn25hbSDNepqePe9pxoKPOteyfz3P4SWDt12zde0B1h%2BLnYb0CQeLlmyHGNvB5XSb1M%2B31HD8sZ0hLuLXAAVQpu%2Fr9zEKv0Tag&X-Amz-Signature=f0a32093749699543ab050b7e132941eac3757d95765afccca5a06e4d86b6893&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2KRYQD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdmlS1EL%2Fdsb%2FcAQ%2FFrdH4HWEo0MyaWlQw8XxLvIeGDAiEAoatmtsSXY7EP9YuKppndUNSunw3FK%2FglhoRiQvpzPkwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt6aVI9puL9%2Bzl%2FkircA2pjpXt6id%2Fx%2BtfplYLN9wugunIuTSJJ9pN1D1qUII%2B45dPzHPu4mWuWLwrkwLw7DzZpF83gIvCTwW9XCJVEBiRLk%2BjHT3cXnxFaWI9EG115GpzgXinJblFelqnOt0RAmwzjRfP%2FV8aQgM%2F7xmgVNmhiO4X04QscvojIv%2BlSZQaRW%2BgZ90tBhYTvF1lpWj%2BGN1mCKpPUYX03eCkOwZa7mEnjDYlU1tqHZrHoUZt%2BiJgFWFx6OVUyoqvIjmczERQw4ZJ4tNeTXCv%2BeKbt%2BHfDCFqt6gsNpaX0yDMrSPmQDUpxtLGTiytJqeTQ3%2FaRy7A8JtLUe4aTn9r72yTFxRLLdoDaLbaxBnoxEJn%2BY4xRfzwModmEcMgE%2BUSAt3fQiDuy5y2rFFJEhD3Hf72m2XnKztMxCF1%2Fo%2BYB%2FxcqwopVty04FXD4rLXBKw%2FVjLGjk9%2BUrPDmZAZ79dD9WZyP%2BtyUnUxU59mGeAMNFZ85OyhsuX%2Bkgxcu%2FvhH0FDNY2dLdv42XjbvEh9Ke4beTeAxknG9n%2F41pAw6H4hiJ5p3Wa7nc7JCV4ZXkCyp8aC9Pdp7P%2FMwB4d0DUHfz6W9eWSMmnSAySI6tHFYRUi7zoMTDhH1X8K4Q5x3%2FjTeg1oUDHJKMLy3j8IGOqUBVqKzMXuWF2kooyZuJfSK%2BNe6LYQ%2BjIIHJ4hzVJiKO7MdwqcDrBn9a1YJQT%2FofygduqvvFLK8rbi432qJWwE1MgTkZl8ZXehsNqaffS5HsiJQFLxrrw5Umv5kBivn25hbSDNepqePe9pxoKPOteyfz3P4SWDt12zde0B1h%2BLnYb0CQeLlmyHGNvB5XSb1M%2B31HD8sZ0hLuLXAAVQpu%2Fr9zEKv0Tag&X-Amz-Signature=1152b67557209afdb6f208f1de2d2f0d9547b3142f468c15d170e3268c293af0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2KRYQD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdmlS1EL%2Fdsb%2FcAQ%2FFrdH4HWEo0MyaWlQw8XxLvIeGDAiEAoatmtsSXY7EP9YuKppndUNSunw3FK%2FglhoRiQvpzPkwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGt6aVI9puL9%2Bzl%2FkircA2pjpXt6id%2Fx%2BtfplYLN9wugunIuTSJJ9pN1D1qUII%2B45dPzHPu4mWuWLwrkwLw7DzZpF83gIvCTwW9XCJVEBiRLk%2BjHT3cXnxFaWI9EG115GpzgXinJblFelqnOt0RAmwzjRfP%2FV8aQgM%2F7xmgVNmhiO4X04QscvojIv%2BlSZQaRW%2BgZ90tBhYTvF1lpWj%2BGN1mCKpPUYX03eCkOwZa7mEnjDYlU1tqHZrHoUZt%2BiJgFWFx6OVUyoqvIjmczERQw4ZJ4tNeTXCv%2BeKbt%2BHfDCFqt6gsNpaX0yDMrSPmQDUpxtLGTiytJqeTQ3%2FaRy7A8JtLUe4aTn9r72yTFxRLLdoDaLbaxBnoxEJn%2BY4xRfzwModmEcMgE%2BUSAt3fQiDuy5y2rFFJEhD3Hf72m2XnKztMxCF1%2Fo%2BYB%2FxcqwopVty04FXD4rLXBKw%2FVjLGjk9%2BUrPDmZAZ79dD9WZyP%2BtyUnUxU59mGeAMNFZ85OyhsuX%2Bkgxcu%2FvhH0FDNY2dLdv42XjbvEh9Ke4beTeAxknG9n%2F41pAw6H4hiJ5p3Wa7nc7JCV4ZXkCyp8aC9Pdp7P%2FMwB4d0DUHfz6W9eWSMmnSAySI6tHFYRUi7zoMTDhH1X8K4Q5x3%2FjTeg1oUDHJKMLy3j8IGOqUBVqKzMXuWF2kooyZuJfSK%2BNe6LYQ%2BjIIHJ4hzVJiKO7MdwqcDrBn9a1YJQT%2FofygduqvvFLK8rbi432qJWwE1MgTkZl8ZXehsNqaffS5HsiJQFLxrrw5Umv5kBivn25hbSDNepqePe9pxoKPOteyfz3P4SWDt12zde0B1h%2BLnYb0CQeLlmyHGNvB5XSb1M%2B31HD8sZ0hLuLXAAVQpu%2Fr9zEKv0Tag&X-Amz-Signature=506d0c58e7633e2de15e63816da242ef0dcbd83f6568b2acf80725b3fb680bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
