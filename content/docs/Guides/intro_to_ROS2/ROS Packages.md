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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP3VHVY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEHMp20031qkcM4TQxSFFPbXYZy4Rj%2B1WMniINymQCmwIhAOlTLAG%2B6knVDTCfHuOVFftPjZVs1J4rDyOQ2mt%2BedVeKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxouhKULKYeoHV8amQq3AMhmkeziLSJhZQeKHDJincJ2%2FH%2BRax1wViL%2Bz1BB50e7vDcFtDyttLdqosPZGmP9fc4VwBBDanz%2FwVmOZ6Kc7yIHgXRIbaiR42oy7PCHwleTcQM4EHgWP%2FIPmK8pY8wYSWzYnivpYc4N86dOqYQMmyLsyCJtQxTiZrjhBSdElgpv2vwJp7kmyyVtZmO0kXL8y%2F1mXDlQ6aO%2B3N%2Fzw6E2ocM9IsGt1BmYz2A%2FscZ%2BLKHzg1%2FVKZ%2BHMgS3ecHZjQYPKxwjw80XDvGJkdXX7wfN73XSHyaX%2BmHh17ghdjBC22kuIMbWpAzkQBGQs0TWwBwtG1WmdcNoWx7vc8kwhkZAZ7WL2y9bgZAG9bqo5bE2%2F3ATrotSG4u3PaUgCpI%2Flz57sZu6S8lDgAHzLuUobUOEvPITdRIzyWkuTeIhAw%2Bw5QSLGbP1OCcG9aJZfGt0rV8vC%2BooQnVBtRXlxhGBwYtJcY8QbkSC3U0KUXo%2BXaz3Nx5rOrB6tL3AyCbBc38ZGLweLrWIJIbZIAKjEOLqZAIsuoDwAdBIJVqKk3GvXpgmooh9fUNJYAhiM21BIxlKOUTeXRLW9Km5gxEziqQMytg8ek6zBNXHAT4ADXFqgaD2BnVZQcpIxhIWurmazaXQDCD8om%2BBjqkARAS5YyueJNM4reOqRnkcOk%2B3W%2Bk0IPeiZ4rwxEOQwcXhxo4iCdr5jkR6lSUbsQPi91jswBzcDVmdS%2FCCjFCTZQ3ZEZAY5XWkKmA6IjGxYUR1VCsVdqgQWP7xAy6UEex8dUO5M8Vp%2BrIEyD7xKhQFRnmKMKxJMDC391QkNK2hmSPNSnY6WGMsUq1DDL3d8z9q0A8VLsFEhzRetbyVqtYOblRqrdI&X-Amz-Signature=d0d3fa6286a8cc8ae4bcd867b2f20acd2652314214439c3d49d8f91c382bfd05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP3VHVY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEHMp20031qkcM4TQxSFFPbXYZy4Rj%2B1WMniINymQCmwIhAOlTLAG%2B6knVDTCfHuOVFftPjZVs1J4rDyOQ2mt%2BedVeKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxouhKULKYeoHV8amQq3AMhmkeziLSJhZQeKHDJincJ2%2FH%2BRax1wViL%2Bz1BB50e7vDcFtDyttLdqosPZGmP9fc4VwBBDanz%2FwVmOZ6Kc7yIHgXRIbaiR42oy7PCHwleTcQM4EHgWP%2FIPmK8pY8wYSWzYnivpYc4N86dOqYQMmyLsyCJtQxTiZrjhBSdElgpv2vwJp7kmyyVtZmO0kXL8y%2F1mXDlQ6aO%2B3N%2Fzw6E2ocM9IsGt1BmYz2A%2FscZ%2BLKHzg1%2FVKZ%2BHMgS3ecHZjQYPKxwjw80XDvGJkdXX7wfN73XSHyaX%2BmHh17ghdjBC22kuIMbWpAzkQBGQs0TWwBwtG1WmdcNoWx7vc8kwhkZAZ7WL2y9bgZAG9bqo5bE2%2F3ATrotSG4u3PaUgCpI%2Flz57sZu6S8lDgAHzLuUobUOEvPITdRIzyWkuTeIhAw%2Bw5QSLGbP1OCcG9aJZfGt0rV8vC%2BooQnVBtRXlxhGBwYtJcY8QbkSC3U0KUXo%2BXaz3Nx5rOrB6tL3AyCbBc38ZGLweLrWIJIbZIAKjEOLqZAIsuoDwAdBIJVqKk3GvXpgmooh9fUNJYAhiM21BIxlKOUTeXRLW9Km5gxEziqQMytg8ek6zBNXHAT4ADXFqgaD2BnVZQcpIxhIWurmazaXQDCD8om%2BBjqkARAS5YyueJNM4reOqRnkcOk%2B3W%2Bk0IPeiZ4rwxEOQwcXhxo4iCdr5jkR6lSUbsQPi91jswBzcDVmdS%2FCCjFCTZQ3ZEZAY5XWkKmA6IjGxYUR1VCsVdqgQWP7xAy6UEex8dUO5M8Vp%2BrIEyD7xKhQFRnmKMKxJMDC391QkNK2hmSPNSnY6WGMsUq1DDL3d8z9q0A8VLsFEhzRetbyVqtYOblRqrdI&X-Amz-Signature=553c7c0b6cdf11e48accef71788aea8097fd565fad189d3ec5f0be158958a275&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP3VHVY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEHMp20031qkcM4TQxSFFPbXYZy4Rj%2B1WMniINymQCmwIhAOlTLAG%2B6knVDTCfHuOVFftPjZVs1J4rDyOQ2mt%2BedVeKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxouhKULKYeoHV8amQq3AMhmkeziLSJhZQeKHDJincJ2%2FH%2BRax1wViL%2Bz1BB50e7vDcFtDyttLdqosPZGmP9fc4VwBBDanz%2FwVmOZ6Kc7yIHgXRIbaiR42oy7PCHwleTcQM4EHgWP%2FIPmK8pY8wYSWzYnivpYc4N86dOqYQMmyLsyCJtQxTiZrjhBSdElgpv2vwJp7kmyyVtZmO0kXL8y%2F1mXDlQ6aO%2B3N%2Fzw6E2ocM9IsGt1BmYz2A%2FscZ%2BLKHzg1%2FVKZ%2BHMgS3ecHZjQYPKxwjw80XDvGJkdXX7wfN73XSHyaX%2BmHh17ghdjBC22kuIMbWpAzkQBGQs0TWwBwtG1WmdcNoWx7vc8kwhkZAZ7WL2y9bgZAG9bqo5bE2%2F3ATrotSG4u3PaUgCpI%2Flz57sZu6S8lDgAHzLuUobUOEvPITdRIzyWkuTeIhAw%2Bw5QSLGbP1OCcG9aJZfGt0rV8vC%2BooQnVBtRXlxhGBwYtJcY8QbkSC3U0KUXo%2BXaz3Nx5rOrB6tL3AyCbBc38ZGLweLrWIJIbZIAKjEOLqZAIsuoDwAdBIJVqKk3GvXpgmooh9fUNJYAhiM21BIxlKOUTeXRLW9Km5gxEziqQMytg8ek6zBNXHAT4ADXFqgaD2BnVZQcpIxhIWurmazaXQDCD8om%2BBjqkARAS5YyueJNM4reOqRnkcOk%2B3W%2Bk0IPeiZ4rwxEOQwcXhxo4iCdr5jkR6lSUbsQPi91jswBzcDVmdS%2FCCjFCTZQ3ZEZAY5XWkKmA6IjGxYUR1VCsVdqgQWP7xAy6UEex8dUO5M8Vp%2BrIEyD7xKhQFRnmKMKxJMDC391QkNK2hmSPNSnY6WGMsUq1DDL3d8z9q0A8VLsFEhzRetbyVqtYOblRqrdI&X-Amz-Signature=87763e8130ca437a38c91c14d2ce830478c06dcf908b50e4d11a23c552e4d2be&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP3VHVY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEHMp20031qkcM4TQxSFFPbXYZy4Rj%2B1WMniINymQCmwIhAOlTLAG%2B6knVDTCfHuOVFftPjZVs1J4rDyOQ2mt%2BedVeKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxouhKULKYeoHV8amQq3AMhmkeziLSJhZQeKHDJincJ2%2FH%2BRax1wViL%2Bz1BB50e7vDcFtDyttLdqosPZGmP9fc4VwBBDanz%2FwVmOZ6Kc7yIHgXRIbaiR42oy7PCHwleTcQM4EHgWP%2FIPmK8pY8wYSWzYnivpYc4N86dOqYQMmyLsyCJtQxTiZrjhBSdElgpv2vwJp7kmyyVtZmO0kXL8y%2F1mXDlQ6aO%2B3N%2Fzw6E2ocM9IsGt1BmYz2A%2FscZ%2BLKHzg1%2FVKZ%2BHMgS3ecHZjQYPKxwjw80XDvGJkdXX7wfN73XSHyaX%2BmHh17ghdjBC22kuIMbWpAzkQBGQs0TWwBwtG1WmdcNoWx7vc8kwhkZAZ7WL2y9bgZAG9bqo5bE2%2F3ATrotSG4u3PaUgCpI%2Flz57sZu6S8lDgAHzLuUobUOEvPITdRIzyWkuTeIhAw%2Bw5QSLGbP1OCcG9aJZfGt0rV8vC%2BooQnVBtRXlxhGBwYtJcY8QbkSC3U0KUXo%2BXaz3Nx5rOrB6tL3AyCbBc38ZGLweLrWIJIbZIAKjEOLqZAIsuoDwAdBIJVqKk3GvXpgmooh9fUNJYAhiM21BIxlKOUTeXRLW9Km5gxEziqQMytg8ek6zBNXHAT4ADXFqgaD2BnVZQcpIxhIWurmazaXQDCD8om%2BBjqkARAS5YyueJNM4reOqRnkcOk%2B3W%2Bk0IPeiZ4rwxEOQwcXhxo4iCdr5jkR6lSUbsQPi91jswBzcDVmdS%2FCCjFCTZQ3ZEZAY5XWkKmA6IjGxYUR1VCsVdqgQWP7xAy6UEex8dUO5M8Vp%2BrIEyD7xKhQFRnmKMKxJMDC391QkNK2hmSPNSnY6WGMsUq1DDL3d8z9q0A8VLsFEhzRetbyVqtYOblRqrdI&X-Amz-Signature=838e49f7d945ce327724879f7116eb8d5dfa25e3c5a82e6ee944e4276a69de63&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP3VHVY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEHMp20031qkcM4TQxSFFPbXYZy4Rj%2B1WMniINymQCmwIhAOlTLAG%2B6knVDTCfHuOVFftPjZVs1J4rDyOQ2mt%2BedVeKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxouhKULKYeoHV8amQq3AMhmkeziLSJhZQeKHDJincJ2%2FH%2BRax1wViL%2Bz1BB50e7vDcFtDyttLdqosPZGmP9fc4VwBBDanz%2FwVmOZ6Kc7yIHgXRIbaiR42oy7PCHwleTcQM4EHgWP%2FIPmK8pY8wYSWzYnivpYc4N86dOqYQMmyLsyCJtQxTiZrjhBSdElgpv2vwJp7kmyyVtZmO0kXL8y%2F1mXDlQ6aO%2B3N%2Fzw6E2ocM9IsGt1BmYz2A%2FscZ%2BLKHzg1%2FVKZ%2BHMgS3ecHZjQYPKxwjw80XDvGJkdXX7wfN73XSHyaX%2BmHh17ghdjBC22kuIMbWpAzkQBGQs0TWwBwtG1WmdcNoWx7vc8kwhkZAZ7WL2y9bgZAG9bqo5bE2%2F3ATrotSG4u3PaUgCpI%2Flz57sZu6S8lDgAHzLuUobUOEvPITdRIzyWkuTeIhAw%2Bw5QSLGbP1OCcG9aJZfGt0rV8vC%2BooQnVBtRXlxhGBwYtJcY8QbkSC3U0KUXo%2BXaz3Nx5rOrB6tL3AyCbBc38ZGLweLrWIJIbZIAKjEOLqZAIsuoDwAdBIJVqKk3GvXpgmooh9fUNJYAhiM21BIxlKOUTeXRLW9Km5gxEziqQMytg8ek6zBNXHAT4ADXFqgaD2BnVZQcpIxhIWurmazaXQDCD8om%2BBjqkARAS5YyueJNM4reOqRnkcOk%2B3W%2Bk0IPeiZ4rwxEOQwcXhxo4iCdr5jkR6lSUbsQPi91jswBzcDVmdS%2FCCjFCTZQ3ZEZAY5XWkKmA6IjGxYUR1VCsVdqgQWP7xAy6UEex8dUO5M8Vp%2BrIEyD7xKhQFRnmKMKxJMDC391QkNK2hmSPNSnY6WGMsUq1DDL3d8z9q0A8VLsFEhzRetbyVqtYOblRqrdI&X-Amz-Signature=e6bc0c08ba1f46fb0d3b5af43cff2c50c82f0a786c5d57b2123a2fdcc2c390c1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP3VHVY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEHMp20031qkcM4TQxSFFPbXYZy4Rj%2B1WMniINymQCmwIhAOlTLAG%2B6knVDTCfHuOVFftPjZVs1J4rDyOQ2mt%2BedVeKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxouhKULKYeoHV8amQq3AMhmkeziLSJhZQeKHDJincJ2%2FH%2BRax1wViL%2Bz1BB50e7vDcFtDyttLdqosPZGmP9fc4VwBBDanz%2FwVmOZ6Kc7yIHgXRIbaiR42oy7PCHwleTcQM4EHgWP%2FIPmK8pY8wYSWzYnivpYc4N86dOqYQMmyLsyCJtQxTiZrjhBSdElgpv2vwJp7kmyyVtZmO0kXL8y%2F1mXDlQ6aO%2B3N%2Fzw6E2ocM9IsGt1BmYz2A%2FscZ%2BLKHzg1%2FVKZ%2BHMgS3ecHZjQYPKxwjw80XDvGJkdXX7wfN73XSHyaX%2BmHh17ghdjBC22kuIMbWpAzkQBGQs0TWwBwtG1WmdcNoWx7vc8kwhkZAZ7WL2y9bgZAG9bqo5bE2%2F3ATrotSG4u3PaUgCpI%2Flz57sZu6S8lDgAHzLuUobUOEvPITdRIzyWkuTeIhAw%2Bw5QSLGbP1OCcG9aJZfGt0rV8vC%2BooQnVBtRXlxhGBwYtJcY8QbkSC3U0KUXo%2BXaz3Nx5rOrB6tL3AyCbBc38ZGLweLrWIJIbZIAKjEOLqZAIsuoDwAdBIJVqKk3GvXpgmooh9fUNJYAhiM21BIxlKOUTeXRLW9Km5gxEziqQMytg8ek6zBNXHAT4ADXFqgaD2BnVZQcpIxhIWurmazaXQDCD8om%2BBjqkARAS5YyueJNM4reOqRnkcOk%2B3W%2Bk0IPeiZ4rwxEOQwcXhxo4iCdr5jkR6lSUbsQPi91jswBzcDVmdS%2FCCjFCTZQ3ZEZAY5XWkKmA6IjGxYUR1VCsVdqgQWP7xAy6UEex8dUO5M8Vp%2BrIEyD7xKhQFRnmKMKxJMDC391QkNK2hmSPNSnY6WGMsUq1DDL3d8z9q0A8VLsFEhzRetbyVqtYOblRqrdI&X-Amz-Signature=6bf7dd03b5af5e4574f061cda3b9825c82089a8a430d40690eeb306034674811&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP3VHVY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEHMp20031qkcM4TQxSFFPbXYZy4Rj%2B1WMniINymQCmwIhAOlTLAG%2B6knVDTCfHuOVFftPjZVs1J4rDyOQ2mt%2BedVeKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxouhKULKYeoHV8amQq3AMhmkeziLSJhZQeKHDJincJ2%2FH%2BRax1wViL%2Bz1BB50e7vDcFtDyttLdqosPZGmP9fc4VwBBDanz%2FwVmOZ6Kc7yIHgXRIbaiR42oy7PCHwleTcQM4EHgWP%2FIPmK8pY8wYSWzYnivpYc4N86dOqYQMmyLsyCJtQxTiZrjhBSdElgpv2vwJp7kmyyVtZmO0kXL8y%2F1mXDlQ6aO%2B3N%2Fzw6E2ocM9IsGt1BmYz2A%2FscZ%2BLKHzg1%2FVKZ%2BHMgS3ecHZjQYPKxwjw80XDvGJkdXX7wfN73XSHyaX%2BmHh17ghdjBC22kuIMbWpAzkQBGQs0TWwBwtG1WmdcNoWx7vc8kwhkZAZ7WL2y9bgZAG9bqo5bE2%2F3ATrotSG4u3PaUgCpI%2Flz57sZu6S8lDgAHzLuUobUOEvPITdRIzyWkuTeIhAw%2Bw5QSLGbP1OCcG9aJZfGt0rV8vC%2BooQnVBtRXlxhGBwYtJcY8QbkSC3U0KUXo%2BXaz3Nx5rOrB6tL3AyCbBc38ZGLweLrWIJIbZIAKjEOLqZAIsuoDwAdBIJVqKk3GvXpgmooh9fUNJYAhiM21BIxlKOUTeXRLW9Km5gxEziqQMytg8ek6zBNXHAT4ADXFqgaD2BnVZQcpIxhIWurmazaXQDCD8om%2BBjqkARAS5YyueJNM4reOqRnkcOk%2B3W%2Bk0IPeiZ4rwxEOQwcXhxo4iCdr5jkR6lSUbsQPi91jswBzcDVmdS%2FCCjFCTZQ3ZEZAY5XWkKmA6IjGxYUR1VCsVdqgQWP7xAy6UEex8dUO5M8Vp%2BrIEyD7xKhQFRnmKMKxJMDC391QkNK2hmSPNSnY6WGMsUq1DDL3d8z9q0A8VLsFEhzRetbyVqtYOblRqrdI&X-Amz-Signature=90604bfd690086a7aae123a157d3efebf2cfe556e16fce41768843365a1cffc2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
