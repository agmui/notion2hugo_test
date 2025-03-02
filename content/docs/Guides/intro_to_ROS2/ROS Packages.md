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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFAPPZAS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYgBk055s9ZV9C3G13nsJ7BYs3SQ6uRTylQUArSInPQgIgDWVkX74SNyoW6ghSOIdq6dl1BISTOAJYus6gHCCguJkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdTxXxQJWVIUkRTryrcAzgAyfqQiQjQqd8n6WyEKe4V0MwWltOLncPPTotpFg%2B9u1QCuWepAH03em%2FsgbR4STaq7M%2B7bf3lk4u4OvM%2BXPLFpxBaqyr1XIi8Nx2yMq1XqgpJa0XLB%2FH1%2FL8OiqNEU%2BjukgaUy8pS%2FKBpOV504zoUr%2FUvl%2Fpxh1KjO58HtPsWSU1XvbFKO7wKxQLPOT6jwpss6BUnHkeftDOT0fgDRAVkMhVRJ%2FyoQeW7Jhu20%2Bw93MUxqMfqU6BClOjYtxw%2BGzAZ%2FBq2NXvqm8M0oG0hP36P3Um3uNIcxrJV1D3AeGtjr4kVsJpIp%2FORY5d%2BPFzUVWud4Clc6acoTsB27XTiuNRqywf7bpHRU6DkLCrb%2Fx5AOKr8MMx%2FcYe5%2FTom%2BMDIJUR2haGZ8mDvwoYpHJbGPIIZiYBgLXijBifpxOZ3xDDrC24XlY3PQgGqVjKCVZa400AD%2F9Kw5ed%2Fb1f8R5mVFkR2X2PeD3F6jxGJdSg8n5Ps%2BAnOqWbB%2Fp1o4rNenADLKv7jfqQC4w5ljrMPqNlhgSUSzOfA2khzyiE157uf1mFJcC1bbKTNWpIIWbB1A0NGTLIg%2BiSAeRsCLgjr%2FSVULUrBIC47Ee3Tij%2FTfIuJPOxEiVKqPy6oVUok8Hy6MKz9kL4GOqUBNIaZRAapRzBzDxX5Qs1rTT5whX%2FFkJ6Wd5mEQMm7rSmB%2Fh%2FNn0fch13Qoa7ugYB6mmmr1rwhLc4eqdMfFCGBNSAJ%2FZT%2FbbnNW73Vcs%2F9pqus6wbGY%2Fr301FSN0sltKnbughI3mhFxb0Ryhnr8kJrVvZjuT0r9RrpRCzW8%2B6vc2vh54VCTNGGH6Z%2BjEf9t316Xz9fIqO7avfWtreHVZZGAV0VjWcJ&X-Amz-Signature=ab60d484999f8b641436c8d3eb3019172b71ac2227f0ed29673c30d161468b19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFAPPZAS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYgBk055s9ZV9C3G13nsJ7BYs3SQ6uRTylQUArSInPQgIgDWVkX74SNyoW6ghSOIdq6dl1BISTOAJYus6gHCCguJkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdTxXxQJWVIUkRTryrcAzgAyfqQiQjQqd8n6WyEKe4V0MwWltOLncPPTotpFg%2B9u1QCuWepAH03em%2FsgbR4STaq7M%2B7bf3lk4u4OvM%2BXPLFpxBaqyr1XIi8Nx2yMq1XqgpJa0XLB%2FH1%2FL8OiqNEU%2BjukgaUy8pS%2FKBpOV504zoUr%2FUvl%2Fpxh1KjO58HtPsWSU1XvbFKO7wKxQLPOT6jwpss6BUnHkeftDOT0fgDRAVkMhVRJ%2FyoQeW7Jhu20%2Bw93MUxqMfqU6BClOjYtxw%2BGzAZ%2FBq2NXvqm8M0oG0hP36P3Um3uNIcxrJV1D3AeGtjr4kVsJpIp%2FORY5d%2BPFzUVWud4Clc6acoTsB27XTiuNRqywf7bpHRU6DkLCrb%2Fx5AOKr8MMx%2FcYe5%2FTom%2BMDIJUR2haGZ8mDvwoYpHJbGPIIZiYBgLXijBifpxOZ3xDDrC24XlY3PQgGqVjKCVZa400AD%2F9Kw5ed%2Fb1f8R5mVFkR2X2PeD3F6jxGJdSg8n5Ps%2BAnOqWbB%2Fp1o4rNenADLKv7jfqQC4w5ljrMPqNlhgSUSzOfA2khzyiE157uf1mFJcC1bbKTNWpIIWbB1A0NGTLIg%2BiSAeRsCLgjr%2FSVULUrBIC47Ee3Tij%2FTfIuJPOxEiVKqPy6oVUok8Hy6MKz9kL4GOqUBNIaZRAapRzBzDxX5Qs1rTT5whX%2FFkJ6Wd5mEQMm7rSmB%2Fh%2FNn0fch13Qoa7ugYB6mmmr1rwhLc4eqdMfFCGBNSAJ%2FZT%2FbbnNW73Vcs%2F9pqus6wbGY%2Fr301FSN0sltKnbughI3mhFxb0Ryhnr8kJrVvZjuT0r9RrpRCzW8%2B6vc2vh54VCTNGGH6Z%2BjEf9t316Xz9fIqO7avfWtreHVZZGAV0VjWcJ&X-Amz-Signature=f15bf6125528b34ac4bbab2641d443d6a0b13eff1446744c427cb195c09e1208&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFAPPZAS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYgBk055s9ZV9C3G13nsJ7BYs3SQ6uRTylQUArSInPQgIgDWVkX74SNyoW6ghSOIdq6dl1BISTOAJYus6gHCCguJkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdTxXxQJWVIUkRTryrcAzgAyfqQiQjQqd8n6WyEKe4V0MwWltOLncPPTotpFg%2B9u1QCuWepAH03em%2FsgbR4STaq7M%2B7bf3lk4u4OvM%2BXPLFpxBaqyr1XIi8Nx2yMq1XqgpJa0XLB%2FH1%2FL8OiqNEU%2BjukgaUy8pS%2FKBpOV504zoUr%2FUvl%2Fpxh1KjO58HtPsWSU1XvbFKO7wKxQLPOT6jwpss6BUnHkeftDOT0fgDRAVkMhVRJ%2FyoQeW7Jhu20%2Bw93MUxqMfqU6BClOjYtxw%2BGzAZ%2FBq2NXvqm8M0oG0hP36P3Um3uNIcxrJV1D3AeGtjr4kVsJpIp%2FORY5d%2BPFzUVWud4Clc6acoTsB27XTiuNRqywf7bpHRU6DkLCrb%2Fx5AOKr8MMx%2FcYe5%2FTom%2BMDIJUR2haGZ8mDvwoYpHJbGPIIZiYBgLXijBifpxOZ3xDDrC24XlY3PQgGqVjKCVZa400AD%2F9Kw5ed%2Fb1f8R5mVFkR2X2PeD3F6jxGJdSg8n5Ps%2BAnOqWbB%2Fp1o4rNenADLKv7jfqQC4w5ljrMPqNlhgSUSzOfA2khzyiE157uf1mFJcC1bbKTNWpIIWbB1A0NGTLIg%2BiSAeRsCLgjr%2FSVULUrBIC47Ee3Tij%2FTfIuJPOxEiVKqPy6oVUok8Hy6MKz9kL4GOqUBNIaZRAapRzBzDxX5Qs1rTT5whX%2FFkJ6Wd5mEQMm7rSmB%2Fh%2FNn0fch13Qoa7ugYB6mmmr1rwhLc4eqdMfFCGBNSAJ%2FZT%2FbbnNW73Vcs%2F9pqus6wbGY%2Fr301FSN0sltKnbughI3mhFxb0Ryhnr8kJrVvZjuT0r9RrpRCzW8%2B6vc2vh54VCTNGGH6Z%2BjEf9t316Xz9fIqO7avfWtreHVZZGAV0VjWcJ&X-Amz-Signature=39c969b6b626e6214db80bd8240bb7762412b0be07cf3171592cf3bda0c4dc7e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFAPPZAS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYgBk055s9ZV9C3G13nsJ7BYs3SQ6uRTylQUArSInPQgIgDWVkX74SNyoW6ghSOIdq6dl1BISTOAJYus6gHCCguJkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdTxXxQJWVIUkRTryrcAzgAyfqQiQjQqd8n6WyEKe4V0MwWltOLncPPTotpFg%2B9u1QCuWepAH03em%2FsgbR4STaq7M%2B7bf3lk4u4OvM%2BXPLFpxBaqyr1XIi8Nx2yMq1XqgpJa0XLB%2FH1%2FL8OiqNEU%2BjukgaUy8pS%2FKBpOV504zoUr%2FUvl%2Fpxh1KjO58HtPsWSU1XvbFKO7wKxQLPOT6jwpss6BUnHkeftDOT0fgDRAVkMhVRJ%2FyoQeW7Jhu20%2Bw93MUxqMfqU6BClOjYtxw%2BGzAZ%2FBq2NXvqm8M0oG0hP36P3Um3uNIcxrJV1D3AeGtjr4kVsJpIp%2FORY5d%2BPFzUVWud4Clc6acoTsB27XTiuNRqywf7bpHRU6DkLCrb%2Fx5AOKr8MMx%2FcYe5%2FTom%2BMDIJUR2haGZ8mDvwoYpHJbGPIIZiYBgLXijBifpxOZ3xDDrC24XlY3PQgGqVjKCVZa400AD%2F9Kw5ed%2Fb1f8R5mVFkR2X2PeD3F6jxGJdSg8n5Ps%2BAnOqWbB%2Fp1o4rNenADLKv7jfqQC4w5ljrMPqNlhgSUSzOfA2khzyiE157uf1mFJcC1bbKTNWpIIWbB1A0NGTLIg%2BiSAeRsCLgjr%2FSVULUrBIC47Ee3Tij%2FTfIuJPOxEiVKqPy6oVUok8Hy6MKz9kL4GOqUBNIaZRAapRzBzDxX5Qs1rTT5whX%2FFkJ6Wd5mEQMm7rSmB%2Fh%2FNn0fch13Qoa7ugYB6mmmr1rwhLc4eqdMfFCGBNSAJ%2FZT%2FbbnNW73Vcs%2F9pqus6wbGY%2Fr301FSN0sltKnbughI3mhFxb0Ryhnr8kJrVvZjuT0r9RrpRCzW8%2B6vc2vh54VCTNGGH6Z%2BjEf9t316Xz9fIqO7avfWtreHVZZGAV0VjWcJ&X-Amz-Signature=b6f6ee3368f4a7556de8a79fbb20e50f8be28340d6453f9de2a07df3f49d83be&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFAPPZAS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYgBk055s9ZV9C3G13nsJ7BYs3SQ6uRTylQUArSInPQgIgDWVkX74SNyoW6ghSOIdq6dl1BISTOAJYus6gHCCguJkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdTxXxQJWVIUkRTryrcAzgAyfqQiQjQqd8n6WyEKe4V0MwWltOLncPPTotpFg%2B9u1QCuWepAH03em%2FsgbR4STaq7M%2B7bf3lk4u4OvM%2BXPLFpxBaqyr1XIi8Nx2yMq1XqgpJa0XLB%2FH1%2FL8OiqNEU%2BjukgaUy8pS%2FKBpOV504zoUr%2FUvl%2Fpxh1KjO58HtPsWSU1XvbFKO7wKxQLPOT6jwpss6BUnHkeftDOT0fgDRAVkMhVRJ%2FyoQeW7Jhu20%2Bw93MUxqMfqU6BClOjYtxw%2BGzAZ%2FBq2NXvqm8M0oG0hP36P3Um3uNIcxrJV1D3AeGtjr4kVsJpIp%2FORY5d%2BPFzUVWud4Clc6acoTsB27XTiuNRqywf7bpHRU6DkLCrb%2Fx5AOKr8MMx%2FcYe5%2FTom%2BMDIJUR2haGZ8mDvwoYpHJbGPIIZiYBgLXijBifpxOZ3xDDrC24XlY3PQgGqVjKCVZa400AD%2F9Kw5ed%2Fb1f8R5mVFkR2X2PeD3F6jxGJdSg8n5Ps%2BAnOqWbB%2Fp1o4rNenADLKv7jfqQC4w5ljrMPqNlhgSUSzOfA2khzyiE157uf1mFJcC1bbKTNWpIIWbB1A0NGTLIg%2BiSAeRsCLgjr%2FSVULUrBIC47Ee3Tij%2FTfIuJPOxEiVKqPy6oVUok8Hy6MKz9kL4GOqUBNIaZRAapRzBzDxX5Qs1rTT5whX%2FFkJ6Wd5mEQMm7rSmB%2Fh%2FNn0fch13Qoa7ugYB6mmmr1rwhLc4eqdMfFCGBNSAJ%2FZT%2FbbnNW73Vcs%2F9pqus6wbGY%2Fr301FSN0sltKnbughI3mhFxb0Ryhnr8kJrVvZjuT0r9RrpRCzW8%2B6vc2vh54VCTNGGH6Z%2BjEf9t316Xz9fIqO7avfWtreHVZZGAV0VjWcJ&X-Amz-Signature=7c7ba0147ed6e0181eec90d1aa75331c189adf2892de26f7428cc4633512fad6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFAPPZAS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYgBk055s9ZV9C3G13nsJ7BYs3SQ6uRTylQUArSInPQgIgDWVkX74SNyoW6ghSOIdq6dl1BISTOAJYus6gHCCguJkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdTxXxQJWVIUkRTryrcAzgAyfqQiQjQqd8n6WyEKe4V0MwWltOLncPPTotpFg%2B9u1QCuWepAH03em%2FsgbR4STaq7M%2B7bf3lk4u4OvM%2BXPLFpxBaqyr1XIi8Nx2yMq1XqgpJa0XLB%2FH1%2FL8OiqNEU%2BjukgaUy8pS%2FKBpOV504zoUr%2FUvl%2Fpxh1KjO58HtPsWSU1XvbFKO7wKxQLPOT6jwpss6BUnHkeftDOT0fgDRAVkMhVRJ%2FyoQeW7Jhu20%2Bw93MUxqMfqU6BClOjYtxw%2BGzAZ%2FBq2NXvqm8M0oG0hP36P3Um3uNIcxrJV1D3AeGtjr4kVsJpIp%2FORY5d%2BPFzUVWud4Clc6acoTsB27XTiuNRqywf7bpHRU6DkLCrb%2Fx5AOKr8MMx%2FcYe5%2FTom%2BMDIJUR2haGZ8mDvwoYpHJbGPIIZiYBgLXijBifpxOZ3xDDrC24XlY3PQgGqVjKCVZa400AD%2F9Kw5ed%2Fb1f8R5mVFkR2X2PeD3F6jxGJdSg8n5Ps%2BAnOqWbB%2Fp1o4rNenADLKv7jfqQC4w5ljrMPqNlhgSUSzOfA2khzyiE157uf1mFJcC1bbKTNWpIIWbB1A0NGTLIg%2BiSAeRsCLgjr%2FSVULUrBIC47Ee3Tij%2FTfIuJPOxEiVKqPy6oVUok8Hy6MKz9kL4GOqUBNIaZRAapRzBzDxX5Qs1rTT5whX%2FFkJ6Wd5mEQMm7rSmB%2Fh%2FNn0fch13Qoa7ugYB6mmmr1rwhLc4eqdMfFCGBNSAJ%2FZT%2FbbnNW73Vcs%2F9pqus6wbGY%2Fr301FSN0sltKnbughI3mhFxb0Ryhnr8kJrVvZjuT0r9RrpRCzW8%2B6vc2vh54VCTNGGH6Z%2BjEf9t316Xz9fIqO7avfWtreHVZZGAV0VjWcJ&X-Amz-Signature=58d60141a19e18c12ef7af91dde20c04a254ad48149390abb22ee2db4ef9aef5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFAPPZAS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYgBk055s9ZV9C3G13nsJ7BYs3SQ6uRTylQUArSInPQgIgDWVkX74SNyoW6ghSOIdq6dl1BISTOAJYus6gHCCguJkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdTxXxQJWVIUkRTryrcAzgAyfqQiQjQqd8n6WyEKe4V0MwWltOLncPPTotpFg%2B9u1QCuWepAH03em%2FsgbR4STaq7M%2B7bf3lk4u4OvM%2BXPLFpxBaqyr1XIi8Nx2yMq1XqgpJa0XLB%2FH1%2FL8OiqNEU%2BjukgaUy8pS%2FKBpOV504zoUr%2FUvl%2Fpxh1KjO58HtPsWSU1XvbFKO7wKxQLPOT6jwpss6BUnHkeftDOT0fgDRAVkMhVRJ%2FyoQeW7Jhu20%2Bw93MUxqMfqU6BClOjYtxw%2BGzAZ%2FBq2NXvqm8M0oG0hP36P3Um3uNIcxrJV1D3AeGtjr4kVsJpIp%2FORY5d%2BPFzUVWud4Clc6acoTsB27XTiuNRqywf7bpHRU6DkLCrb%2Fx5AOKr8MMx%2FcYe5%2FTom%2BMDIJUR2haGZ8mDvwoYpHJbGPIIZiYBgLXijBifpxOZ3xDDrC24XlY3PQgGqVjKCVZa400AD%2F9Kw5ed%2Fb1f8R5mVFkR2X2PeD3F6jxGJdSg8n5Ps%2BAnOqWbB%2Fp1o4rNenADLKv7jfqQC4w5ljrMPqNlhgSUSzOfA2khzyiE157uf1mFJcC1bbKTNWpIIWbB1A0NGTLIg%2BiSAeRsCLgjr%2FSVULUrBIC47Ee3Tij%2FTfIuJPOxEiVKqPy6oVUok8Hy6MKz9kL4GOqUBNIaZRAapRzBzDxX5Qs1rTT5whX%2FFkJ6Wd5mEQMm7rSmB%2Fh%2FNn0fch13Qoa7ugYB6mmmr1rwhLc4eqdMfFCGBNSAJ%2FZT%2FbbnNW73Vcs%2F9pqus6wbGY%2Fr301FSN0sltKnbughI3mhFxb0Ryhnr8kJrVvZjuT0r9RrpRCzW8%2B6vc2vh54VCTNGGH6Z%2BjEf9t316Xz9fIqO7avfWtreHVZZGAV0VjWcJ&X-Amz-Signature=58705e92d8108316783408631a344d99ceff1c7de068188752b059db46aab8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
