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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNBFUHV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWfHkNrE62rYNM0Vz9FyqU%2B6%2FAhc94L5rdaqZUZajHOAiA3wQck9n9O6V5HzFB6iBVejP%2FAjH4o5R3q3xv0c4wjYCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMSucuJGu0WQ2d6Xa1KtwDaD9KFsGJeYQ3ezLSf4bGxTnIroTBIlKKm%2BnVVaWU9WzqQg74%2Fa8yhiDLh1eN60zJOkyJv9GgnakxdB5Sdb2tp3evLyMu%2Fg8EqSgOoM5FVz5aevsa6XkwePzjiJXi9gw5n37ERRWlVjOXrAk3eT7XlVdQq5pgkRFP1nPRBwTcvXwvtc%2B%2Fe7gKErCAS87HbQPPdjckWpBie%2BSONAFbX7n9tmbaSIyUwFbXGcbOvGpE9yy5omsWybM0x7DdHjrtvpTIx8ryoU%2FaOm8gX%2FNcGotCv2JWdQabUXkuMN3bZuA0gikNL1CNN%2FFG0S4DK5rNQKHUHAojWzZSgr4utFX2xXWvTSV1D4dkELlqZgUpMtSXuWBJOirhY7EBMRZ1YtthkyHymAMElzOBEckGZ6YYdfjnI3ymCd%2FpJXBktwb3tUlVvGGv6X4DP6LaT03wPn%2B3JfkN0hk7idZrncoyxJyzvrvP7I6bOZD0T1tPvJBpBr3BSDt00iIfuUN471OYQ9SVtvb0u1UN%2BklVBxMQGhWUBGl5cy2a5d%2FpWxzRSvS2uUCujii7YXPA4aOF9NRuT9vYuFJorOA5uquabMnTh%2FHhSaZD%2BkYbAoMqmxO9l6G6BkbUv7uj1mByTcfE4KBioIYw%2BI%2BewQY6pgEYdtRyonxtpxzwetIMYmH9fYQR%2Bk8SozP%2FZzHVugYdkABQrbtS4CJtfK5Go56pArLTKbNB9GokCeKBfysniECBxuj3fZswdkc8jJOx25aQSwTI51GKcuPlu7MbpvszHkOmmEahdlJMhs1qGNIT6dRKeUl3d5HG6zm1B9cYvGU9NQBFkUuGPxXjbTnib4DdnmtcClT2Uma3fB7yBoJPG4g8u1xl9ZJE&X-Amz-Signature=9b1e3119c469fae842f38a77dca54612e621866d8481dcfbe099261fa42af0fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNBFUHV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWfHkNrE62rYNM0Vz9FyqU%2B6%2FAhc94L5rdaqZUZajHOAiA3wQck9n9O6V5HzFB6iBVejP%2FAjH4o5R3q3xv0c4wjYCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMSucuJGu0WQ2d6Xa1KtwDaD9KFsGJeYQ3ezLSf4bGxTnIroTBIlKKm%2BnVVaWU9WzqQg74%2Fa8yhiDLh1eN60zJOkyJv9GgnakxdB5Sdb2tp3evLyMu%2Fg8EqSgOoM5FVz5aevsa6XkwePzjiJXi9gw5n37ERRWlVjOXrAk3eT7XlVdQq5pgkRFP1nPRBwTcvXwvtc%2B%2Fe7gKErCAS87HbQPPdjckWpBie%2BSONAFbX7n9tmbaSIyUwFbXGcbOvGpE9yy5omsWybM0x7DdHjrtvpTIx8ryoU%2FaOm8gX%2FNcGotCv2JWdQabUXkuMN3bZuA0gikNL1CNN%2FFG0S4DK5rNQKHUHAojWzZSgr4utFX2xXWvTSV1D4dkELlqZgUpMtSXuWBJOirhY7EBMRZ1YtthkyHymAMElzOBEckGZ6YYdfjnI3ymCd%2FpJXBktwb3tUlVvGGv6X4DP6LaT03wPn%2B3JfkN0hk7idZrncoyxJyzvrvP7I6bOZD0T1tPvJBpBr3BSDt00iIfuUN471OYQ9SVtvb0u1UN%2BklVBxMQGhWUBGl5cy2a5d%2FpWxzRSvS2uUCujii7YXPA4aOF9NRuT9vYuFJorOA5uquabMnTh%2FHhSaZD%2BkYbAoMqmxO9l6G6BkbUv7uj1mByTcfE4KBioIYw%2BI%2BewQY6pgEYdtRyonxtpxzwetIMYmH9fYQR%2Bk8SozP%2FZzHVugYdkABQrbtS4CJtfK5Go56pArLTKbNB9GokCeKBfysniECBxuj3fZswdkc8jJOx25aQSwTI51GKcuPlu7MbpvszHkOmmEahdlJMhs1qGNIT6dRKeUl3d5HG6zm1B9cYvGU9NQBFkUuGPxXjbTnib4DdnmtcClT2Uma3fB7yBoJPG4g8u1xl9ZJE&X-Amz-Signature=a2ba3e55bade2bfac912754a1de36129b74457be6588b0cc27f4ecff6540baee&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNBFUHV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWfHkNrE62rYNM0Vz9FyqU%2B6%2FAhc94L5rdaqZUZajHOAiA3wQck9n9O6V5HzFB6iBVejP%2FAjH4o5R3q3xv0c4wjYCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMSucuJGu0WQ2d6Xa1KtwDaD9KFsGJeYQ3ezLSf4bGxTnIroTBIlKKm%2BnVVaWU9WzqQg74%2Fa8yhiDLh1eN60zJOkyJv9GgnakxdB5Sdb2tp3evLyMu%2Fg8EqSgOoM5FVz5aevsa6XkwePzjiJXi9gw5n37ERRWlVjOXrAk3eT7XlVdQq5pgkRFP1nPRBwTcvXwvtc%2B%2Fe7gKErCAS87HbQPPdjckWpBie%2BSONAFbX7n9tmbaSIyUwFbXGcbOvGpE9yy5omsWybM0x7DdHjrtvpTIx8ryoU%2FaOm8gX%2FNcGotCv2JWdQabUXkuMN3bZuA0gikNL1CNN%2FFG0S4DK5rNQKHUHAojWzZSgr4utFX2xXWvTSV1D4dkELlqZgUpMtSXuWBJOirhY7EBMRZ1YtthkyHymAMElzOBEckGZ6YYdfjnI3ymCd%2FpJXBktwb3tUlVvGGv6X4DP6LaT03wPn%2B3JfkN0hk7idZrncoyxJyzvrvP7I6bOZD0T1tPvJBpBr3BSDt00iIfuUN471OYQ9SVtvb0u1UN%2BklVBxMQGhWUBGl5cy2a5d%2FpWxzRSvS2uUCujii7YXPA4aOF9NRuT9vYuFJorOA5uquabMnTh%2FHhSaZD%2BkYbAoMqmxO9l6G6BkbUv7uj1mByTcfE4KBioIYw%2BI%2BewQY6pgEYdtRyonxtpxzwetIMYmH9fYQR%2Bk8SozP%2FZzHVugYdkABQrbtS4CJtfK5Go56pArLTKbNB9GokCeKBfysniECBxuj3fZswdkc8jJOx25aQSwTI51GKcuPlu7MbpvszHkOmmEahdlJMhs1qGNIT6dRKeUl3d5HG6zm1B9cYvGU9NQBFkUuGPxXjbTnib4DdnmtcClT2Uma3fB7yBoJPG4g8u1xl9ZJE&X-Amz-Signature=4911477d01c43dfc7304fd1ca350ff8034a90df1f973bb0b658604882f80f6f6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNBFUHV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWfHkNrE62rYNM0Vz9FyqU%2B6%2FAhc94L5rdaqZUZajHOAiA3wQck9n9O6V5HzFB6iBVejP%2FAjH4o5R3q3xv0c4wjYCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMSucuJGu0WQ2d6Xa1KtwDaD9KFsGJeYQ3ezLSf4bGxTnIroTBIlKKm%2BnVVaWU9WzqQg74%2Fa8yhiDLh1eN60zJOkyJv9GgnakxdB5Sdb2tp3evLyMu%2Fg8EqSgOoM5FVz5aevsa6XkwePzjiJXi9gw5n37ERRWlVjOXrAk3eT7XlVdQq5pgkRFP1nPRBwTcvXwvtc%2B%2Fe7gKErCAS87HbQPPdjckWpBie%2BSONAFbX7n9tmbaSIyUwFbXGcbOvGpE9yy5omsWybM0x7DdHjrtvpTIx8ryoU%2FaOm8gX%2FNcGotCv2JWdQabUXkuMN3bZuA0gikNL1CNN%2FFG0S4DK5rNQKHUHAojWzZSgr4utFX2xXWvTSV1D4dkELlqZgUpMtSXuWBJOirhY7EBMRZ1YtthkyHymAMElzOBEckGZ6YYdfjnI3ymCd%2FpJXBktwb3tUlVvGGv6X4DP6LaT03wPn%2B3JfkN0hk7idZrncoyxJyzvrvP7I6bOZD0T1tPvJBpBr3BSDt00iIfuUN471OYQ9SVtvb0u1UN%2BklVBxMQGhWUBGl5cy2a5d%2FpWxzRSvS2uUCujii7YXPA4aOF9NRuT9vYuFJorOA5uquabMnTh%2FHhSaZD%2BkYbAoMqmxO9l6G6BkbUv7uj1mByTcfE4KBioIYw%2BI%2BewQY6pgEYdtRyonxtpxzwetIMYmH9fYQR%2Bk8SozP%2FZzHVugYdkABQrbtS4CJtfK5Go56pArLTKbNB9GokCeKBfysniECBxuj3fZswdkc8jJOx25aQSwTI51GKcuPlu7MbpvszHkOmmEahdlJMhs1qGNIT6dRKeUl3d5HG6zm1B9cYvGU9NQBFkUuGPxXjbTnib4DdnmtcClT2Uma3fB7yBoJPG4g8u1xl9ZJE&X-Amz-Signature=40ea6eb40c71260ee40cb726e2dd8dfb71c70d661036e3f8dda41a1264fe9c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNBFUHV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWfHkNrE62rYNM0Vz9FyqU%2B6%2FAhc94L5rdaqZUZajHOAiA3wQck9n9O6V5HzFB6iBVejP%2FAjH4o5R3q3xv0c4wjYCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMSucuJGu0WQ2d6Xa1KtwDaD9KFsGJeYQ3ezLSf4bGxTnIroTBIlKKm%2BnVVaWU9WzqQg74%2Fa8yhiDLh1eN60zJOkyJv9GgnakxdB5Sdb2tp3evLyMu%2Fg8EqSgOoM5FVz5aevsa6XkwePzjiJXi9gw5n37ERRWlVjOXrAk3eT7XlVdQq5pgkRFP1nPRBwTcvXwvtc%2B%2Fe7gKErCAS87HbQPPdjckWpBie%2BSONAFbX7n9tmbaSIyUwFbXGcbOvGpE9yy5omsWybM0x7DdHjrtvpTIx8ryoU%2FaOm8gX%2FNcGotCv2JWdQabUXkuMN3bZuA0gikNL1CNN%2FFG0S4DK5rNQKHUHAojWzZSgr4utFX2xXWvTSV1D4dkELlqZgUpMtSXuWBJOirhY7EBMRZ1YtthkyHymAMElzOBEckGZ6YYdfjnI3ymCd%2FpJXBktwb3tUlVvGGv6X4DP6LaT03wPn%2B3JfkN0hk7idZrncoyxJyzvrvP7I6bOZD0T1tPvJBpBr3BSDt00iIfuUN471OYQ9SVtvb0u1UN%2BklVBxMQGhWUBGl5cy2a5d%2FpWxzRSvS2uUCujii7YXPA4aOF9NRuT9vYuFJorOA5uquabMnTh%2FHhSaZD%2BkYbAoMqmxO9l6G6BkbUv7uj1mByTcfE4KBioIYw%2BI%2BewQY6pgEYdtRyonxtpxzwetIMYmH9fYQR%2Bk8SozP%2FZzHVugYdkABQrbtS4CJtfK5Go56pArLTKbNB9GokCeKBfysniECBxuj3fZswdkc8jJOx25aQSwTI51GKcuPlu7MbpvszHkOmmEahdlJMhs1qGNIT6dRKeUl3d5HG6zm1B9cYvGU9NQBFkUuGPxXjbTnib4DdnmtcClT2Uma3fB7yBoJPG4g8u1xl9ZJE&X-Amz-Signature=8c7a415a25879d6be67ec911c978d1c2ff756af1d147dd2e97190ec557e37c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNBFUHV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWfHkNrE62rYNM0Vz9FyqU%2B6%2FAhc94L5rdaqZUZajHOAiA3wQck9n9O6V5HzFB6iBVejP%2FAjH4o5R3q3xv0c4wjYCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMSucuJGu0WQ2d6Xa1KtwDaD9KFsGJeYQ3ezLSf4bGxTnIroTBIlKKm%2BnVVaWU9WzqQg74%2Fa8yhiDLh1eN60zJOkyJv9GgnakxdB5Sdb2tp3evLyMu%2Fg8EqSgOoM5FVz5aevsa6XkwePzjiJXi9gw5n37ERRWlVjOXrAk3eT7XlVdQq5pgkRFP1nPRBwTcvXwvtc%2B%2Fe7gKErCAS87HbQPPdjckWpBie%2BSONAFbX7n9tmbaSIyUwFbXGcbOvGpE9yy5omsWybM0x7DdHjrtvpTIx8ryoU%2FaOm8gX%2FNcGotCv2JWdQabUXkuMN3bZuA0gikNL1CNN%2FFG0S4DK5rNQKHUHAojWzZSgr4utFX2xXWvTSV1D4dkELlqZgUpMtSXuWBJOirhY7EBMRZ1YtthkyHymAMElzOBEckGZ6YYdfjnI3ymCd%2FpJXBktwb3tUlVvGGv6X4DP6LaT03wPn%2B3JfkN0hk7idZrncoyxJyzvrvP7I6bOZD0T1tPvJBpBr3BSDt00iIfuUN471OYQ9SVtvb0u1UN%2BklVBxMQGhWUBGl5cy2a5d%2FpWxzRSvS2uUCujii7YXPA4aOF9NRuT9vYuFJorOA5uquabMnTh%2FHhSaZD%2BkYbAoMqmxO9l6G6BkbUv7uj1mByTcfE4KBioIYw%2BI%2BewQY6pgEYdtRyonxtpxzwetIMYmH9fYQR%2Bk8SozP%2FZzHVugYdkABQrbtS4CJtfK5Go56pArLTKbNB9GokCeKBfysniECBxuj3fZswdkc8jJOx25aQSwTI51GKcuPlu7MbpvszHkOmmEahdlJMhs1qGNIT6dRKeUl3d5HG6zm1B9cYvGU9NQBFkUuGPxXjbTnib4DdnmtcClT2Uma3fB7yBoJPG4g8u1xl9ZJE&X-Amz-Signature=f3b109e1c8790aadbd22727de467eee0952d84892292399541fa709a5be24446&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNBFUHV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWfHkNrE62rYNM0Vz9FyqU%2B6%2FAhc94L5rdaqZUZajHOAiA3wQck9n9O6V5HzFB6iBVejP%2FAjH4o5R3q3xv0c4wjYCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMSucuJGu0WQ2d6Xa1KtwDaD9KFsGJeYQ3ezLSf4bGxTnIroTBIlKKm%2BnVVaWU9WzqQg74%2Fa8yhiDLh1eN60zJOkyJv9GgnakxdB5Sdb2tp3evLyMu%2Fg8EqSgOoM5FVz5aevsa6XkwePzjiJXi9gw5n37ERRWlVjOXrAk3eT7XlVdQq5pgkRFP1nPRBwTcvXwvtc%2B%2Fe7gKErCAS87HbQPPdjckWpBie%2BSONAFbX7n9tmbaSIyUwFbXGcbOvGpE9yy5omsWybM0x7DdHjrtvpTIx8ryoU%2FaOm8gX%2FNcGotCv2JWdQabUXkuMN3bZuA0gikNL1CNN%2FFG0S4DK5rNQKHUHAojWzZSgr4utFX2xXWvTSV1D4dkELlqZgUpMtSXuWBJOirhY7EBMRZ1YtthkyHymAMElzOBEckGZ6YYdfjnI3ymCd%2FpJXBktwb3tUlVvGGv6X4DP6LaT03wPn%2B3JfkN0hk7idZrncoyxJyzvrvP7I6bOZD0T1tPvJBpBr3BSDt00iIfuUN471OYQ9SVtvb0u1UN%2BklVBxMQGhWUBGl5cy2a5d%2FpWxzRSvS2uUCujii7YXPA4aOF9NRuT9vYuFJorOA5uquabMnTh%2FHhSaZD%2BkYbAoMqmxO9l6G6BkbUv7uj1mByTcfE4KBioIYw%2BI%2BewQY6pgEYdtRyonxtpxzwetIMYmH9fYQR%2Bk8SozP%2FZzHVugYdkABQrbtS4CJtfK5Go56pArLTKbNB9GokCeKBfysniECBxuj3fZswdkc8jJOx25aQSwTI51GKcuPlu7MbpvszHkOmmEahdlJMhs1qGNIT6dRKeUl3d5HG6zm1B9cYvGU9NQBFkUuGPxXjbTnib4DdnmtcClT2Uma3fB7yBoJPG4g8u1xl9ZJE&X-Amz-Signature=01e1681e906ec6050468ab0b06e5e069be1e0d19c44601b9424bfbccac02ccae&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
