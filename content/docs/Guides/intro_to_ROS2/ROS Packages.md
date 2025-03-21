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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4APBV4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICVWp0BG1KFR%2FA56kVsIcdJfGa5DI64h4PNx2ijZ1VAlAiBI155lJF8R47g2XJ2svn%2BUg7JVsFFZUTNTznWXgp5UTyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8I3iqs%2BqeyWF1EAwKtwDtTLFszRo42cLVpbMACfloFupWqBWCU6OPdo6xFhV5jkqxur3xMz3ymwYgTiLOWYJtGdd94ysGmtlj1tHblM%2BVCe2ovl%2BeUHpWid5REnwGB9452tNC6xl%2BRlm%2BjiyGngHiSadeFIZuSmKBul98CDmvwcqfF2yOPDlBZRD3y30X3GLJgaJhp0XNp4zZHKvipYmA%2BH1UOyqLUekn75INNLIMYLdRZmED4YpvqssmQ3quIOjXK8wSy0jd7DFNWkucdKYSyAr1hZisUEL28i%2BfXZE9ZkyF9heNn%2FAuuXKkNkbbkAC5ZQ4kI%2FvkG%2FX5pNgMjRCrnbSWw5sBuI%2FQBna0%2BPuSuxvpiyr8mV4SkSvV0jZL2xA%2FYjIv3%2BrgoeRrb487ZAYuH6RuZuPhvYiiryWDC0sR3T8%2BNrHjanhv%2FhgY%2Fr%2ByfiAdAwH7yvC%2BSCm2AAv6THf8fiHekEs34uUpPHS44A%2Frtp4VtHk1o2NfogLYtSBYH%2B2IqTIHnZhreMxIf0PhED5uFKUk0SEUHQEFFMIIkiQMlK2abNfak%2FXTqj6kBmZR3J4R2KTaK1EPVpSEfcpQ3%2FiA1NDlvOMXKdbi%2BQkqDH4NbT6njieajXaVai67UliVUOr3NdY5XQwPvRIeh0wx5n1vgY6pgEcxUHdkoIDYRCo19rKAIlhe7qhXvnU4Dv%2FOs%2Bfc9dUSBxQKsl%2FcSa%2BSSiahyRuuBnJJ4Fn%2FVfWi2QDkIjzANZuM2ngRa7Rr0EVwnFYdQlFAAXeWhDkU2knssPli%2BW2Pwzad1GJFtcLogInjSZWf08O4H0dWzw3FhHdfhGrdXC6CLc0fZ0STW6BqCG19lvuLd00YPwIdpTkoCYoBEF55M6BisHyp%2Fxp&X-Amz-Signature=bb7da53639795489e7069406d65bea2b452a3091bb3c57588e2768ca50ad7cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4APBV4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICVWp0BG1KFR%2FA56kVsIcdJfGa5DI64h4PNx2ijZ1VAlAiBI155lJF8R47g2XJ2svn%2BUg7JVsFFZUTNTznWXgp5UTyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8I3iqs%2BqeyWF1EAwKtwDtTLFszRo42cLVpbMACfloFupWqBWCU6OPdo6xFhV5jkqxur3xMz3ymwYgTiLOWYJtGdd94ysGmtlj1tHblM%2BVCe2ovl%2BeUHpWid5REnwGB9452tNC6xl%2BRlm%2BjiyGngHiSadeFIZuSmKBul98CDmvwcqfF2yOPDlBZRD3y30X3GLJgaJhp0XNp4zZHKvipYmA%2BH1UOyqLUekn75INNLIMYLdRZmED4YpvqssmQ3quIOjXK8wSy0jd7DFNWkucdKYSyAr1hZisUEL28i%2BfXZE9ZkyF9heNn%2FAuuXKkNkbbkAC5ZQ4kI%2FvkG%2FX5pNgMjRCrnbSWw5sBuI%2FQBna0%2BPuSuxvpiyr8mV4SkSvV0jZL2xA%2FYjIv3%2BrgoeRrb487ZAYuH6RuZuPhvYiiryWDC0sR3T8%2BNrHjanhv%2FhgY%2Fr%2ByfiAdAwH7yvC%2BSCm2AAv6THf8fiHekEs34uUpPHS44A%2Frtp4VtHk1o2NfogLYtSBYH%2B2IqTIHnZhreMxIf0PhED5uFKUk0SEUHQEFFMIIkiQMlK2abNfak%2FXTqj6kBmZR3J4R2KTaK1EPVpSEfcpQ3%2FiA1NDlvOMXKdbi%2BQkqDH4NbT6njieajXaVai67UliVUOr3NdY5XQwPvRIeh0wx5n1vgY6pgEcxUHdkoIDYRCo19rKAIlhe7qhXvnU4Dv%2FOs%2Bfc9dUSBxQKsl%2FcSa%2BSSiahyRuuBnJJ4Fn%2FVfWi2QDkIjzANZuM2ngRa7Rr0EVwnFYdQlFAAXeWhDkU2knssPli%2BW2Pwzad1GJFtcLogInjSZWf08O4H0dWzw3FhHdfhGrdXC6CLc0fZ0STW6BqCG19lvuLd00YPwIdpTkoCYoBEF55M6BisHyp%2Fxp&X-Amz-Signature=ece562a0d774f27ddabd618b4b895c0cbe8759e5574d84343511f721a5617bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4APBV4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICVWp0BG1KFR%2FA56kVsIcdJfGa5DI64h4PNx2ijZ1VAlAiBI155lJF8R47g2XJ2svn%2BUg7JVsFFZUTNTznWXgp5UTyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8I3iqs%2BqeyWF1EAwKtwDtTLFszRo42cLVpbMACfloFupWqBWCU6OPdo6xFhV5jkqxur3xMz3ymwYgTiLOWYJtGdd94ysGmtlj1tHblM%2BVCe2ovl%2BeUHpWid5REnwGB9452tNC6xl%2BRlm%2BjiyGngHiSadeFIZuSmKBul98CDmvwcqfF2yOPDlBZRD3y30X3GLJgaJhp0XNp4zZHKvipYmA%2BH1UOyqLUekn75INNLIMYLdRZmED4YpvqssmQ3quIOjXK8wSy0jd7DFNWkucdKYSyAr1hZisUEL28i%2BfXZE9ZkyF9heNn%2FAuuXKkNkbbkAC5ZQ4kI%2FvkG%2FX5pNgMjRCrnbSWw5sBuI%2FQBna0%2BPuSuxvpiyr8mV4SkSvV0jZL2xA%2FYjIv3%2BrgoeRrb487ZAYuH6RuZuPhvYiiryWDC0sR3T8%2BNrHjanhv%2FhgY%2Fr%2ByfiAdAwH7yvC%2BSCm2AAv6THf8fiHekEs34uUpPHS44A%2Frtp4VtHk1o2NfogLYtSBYH%2B2IqTIHnZhreMxIf0PhED5uFKUk0SEUHQEFFMIIkiQMlK2abNfak%2FXTqj6kBmZR3J4R2KTaK1EPVpSEfcpQ3%2FiA1NDlvOMXKdbi%2BQkqDH4NbT6njieajXaVai67UliVUOr3NdY5XQwPvRIeh0wx5n1vgY6pgEcxUHdkoIDYRCo19rKAIlhe7qhXvnU4Dv%2FOs%2Bfc9dUSBxQKsl%2FcSa%2BSSiahyRuuBnJJ4Fn%2FVfWi2QDkIjzANZuM2ngRa7Rr0EVwnFYdQlFAAXeWhDkU2knssPli%2BW2Pwzad1GJFtcLogInjSZWf08O4H0dWzw3FhHdfhGrdXC6CLc0fZ0STW6BqCG19lvuLd00YPwIdpTkoCYoBEF55M6BisHyp%2Fxp&X-Amz-Signature=0be974ffc611ea17f5b4766a8ae46b6e73962a97ba5660ab896bd78d277ae148&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4APBV4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICVWp0BG1KFR%2FA56kVsIcdJfGa5DI64h4PNx2ijZ1VAlAiBI155lJF8R47g2XJ2svn%2BUg7JVsFFZUTNTznWXgp5UTyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8I3iqs%2BqeyWF1EAwKtwDtTLFszRo42cLVpbMACfloFupWqBWCU6OPdo6xFhV5jkqxur3xMz3ymwYgTiLOWYJtGdd94ysGmtlj1tHblM%2BVCe2ovl%2BeUHpWid5REnwGB9452tNC6xl%2BRlm%2BjiyGngHiSadeFIZuSmKBul98CDmvwcqfF2yOPDlBZRD3y30X3GLJgaJhp0XNp4zZHKvipYmA%2BH1UOyqLUekn75INNLIMYLdRZmED4YpvqssmQ3quIOjXK8wSy0jd7DFNWkucdKYSyAr1hZisUEL28i%2BfXZE9ZkyF9heNn%2FAuuXKkNkbbkAC5ZQ4kI%2FvkG%2FX5pNgMjRCrnbSWw5sBuI%2FQBna0%2BPuSuxvpiyr8mV4SkSvV0jZL2xA%2FYjIv3%2BrgoeRrb487ZAYuH6RuZuPhvYiiryWDC0sR3T8%2BNrHjanhv%2FhgY%2Fr%2ByfiAdAwH7yvC%2BSCm2AAv6THf8fiHekEs34uUpPHS44A%2Frtp4VtHk1o2NfogLYtSBYH%2B2IqTIHnZhreMxIf0PhED5uFKUk0SEUHQEFFMIIkiQMlK2abNfak%2FXTqj6kBmZR3J4R2KTaK1EPVpSEfcpQ3%2FiA1NDlvOMXKdbi%2BQkqDH4NbT6njieajXaVai67UliVUOr3NdY5XQwPvRIeh0wx5n1vgY6pgEcxUHdkoIDYRCo19rKAIlhe7qhXvnU4Dv%2FOs%2Bfc9dUSBxQKsl%2FcSa%2BSSiahyRuuBnJJ4Fn%2FVfWi2QDkIjzANZuM2ngRa7Rr0EVwnFYdQlFAAXeWhDkU2knssPli%2BW2Pwzad1GJFtcLogInjSZWf08O4H0dWzw3FhHdfhGrdXC6CLc0fZ0STW6BqCG19lvuLd00YPwIdpTkoCYoBEF55M6BisHyp%2Fxp&X-Amz-Signature=c492ff3a65f7671c5147a003fbb6728519a9ee940b290246327e89d67dc792a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4APBV4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICVWp0BG1KFR%2FA56kVsIcdJfGa5DI64h4PNx2ijZ1VAlAiBI155lJF8R47g2XJ2svn%2BUg7JVsFFZUTNTznWXgp5UTyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8I3iqs%2BqeyWF1EAwKtwDtTLFszRo42cLVpbMACfloFupWqBWCU6OPdo6xFhV5jkqxur3xMz3ymwYgTiLOWYJtGdd94ysGmtlj1tHblM%2BVCe2ovl%2BeUHpWid5REnwGB9452tNC6xl%2BRlm%2BjiyGngHiSadeFIZuSmKBul98CDmvwcqfF2yOPDlBZRD3y30X3GLJgaJhp0XNp4zZHKvipYmA%2BH1UOyqLUekn75INNLIMYLdRZmED4YpvqssmQ3quIOjXK8wSy0jd7DFNWkucdKYSyAr1hZisUEL28i%2BfXZE9ZkyF9heNn%2FAuuXKkNkbbkAC5ZQ4kI%2FvkG%2FX5pNgMjRCrnbSWw5sBuI%2FQBna0%2BPuSuxvpiyr8mV4SkSvV0jZL2xA%2FYjIv3%2BrgoeRrb487ZAYuH6RuZuPhvYiiryWDC0sR3T8%2BNrHjanhv%2FhgY%2Fr%2ByfiAdAwH7yvC%2BSCm2AAv6THf8fiHekEs34uUpPHS44A%2Frtp4VtHk1o2NfogLYtSBYH%2B2IqTIHnZhreMxIf0PhED5uFKUk0SEUHQEFFMIIkiQMlK2abNfak%2FXTqj6kBmZR3J4R2KTaK1EPVpSEfcpQ3%2FiA1NDlvOMXKdbi%2BQkqDH4NbT6njieajXaVai67UliVUOr3NdY5XQwPvRIeh0wx5n1vgY6pgEcxUHdkoIDYRCo19rKAIlhe7qhXvnU4Dv%2FOs%2Bfc9dUSBxQKsl%2FcSa%2BSSiahyRuuBnJJ4Fn%2FVfWi2QDkIjzANZuM2ngRa7Rr0EVwnFYdQlFAAXeWhDkU2knssPli%2BW2Pwzad1GJFtcLogInjSZWf08O4H0dWzw3FhHdfhGrdXC6CLc0fZ0STW6BqCG19lvuLd00YPwIdpTkoCYoBEF55M6BisHyp%2Fxp&X-Amz-Signature=457f33bb61785ef44cdf539bfeffd51994c318b81e7bde6d812b733b8025d6d8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4APBV4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICVWp0BG1KFR%2FA56kVsIcdJfGa5DI64h4PNx2ijZ1VAlAiBI155lJF8R47g2XJ2svn%2BUg7JVsFFZUTNTznWXgp5UTyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8I3iqs%2BqeyWF1EAwKtwDtTLFszRo42cLVpbMACfloFupWqBWCU6OPdo6xFhV5jkqxur3xMz3ymwYgTiLOWYJtGdd94ysGmtlj1tHblM%2BVCe2ovl%2BeUHpWid5REnwGB9452tNC6xl%2BRlm%2BjiyGngHiSadeFIZuSmKBul98CDmvwcqfF2yOPDlBZRD3y30X3GLJgaJhp0XNp4zZHKvipYmA%2BH1UOyqLUekn75INNLIMYLdRZmED4YpvqssmQ3quIOjXK8wSy0jd7DFNWkucdKYSyAr1hZisUEL28i%2BfXZE9ZkyF9heNn%2FAuuXKkNkbbkAC5ZQ4kI%2FvkG%2FX5pNgMjRCrnbSWw5sBuI%2FQBna0%2BPuSuxvpiyr8mV4SkSvV0jZL2xA%2FYjIv3%2BrgoeRrb487ZAYuH6RuZuPhvYiiryWDC0sR3T8%2BNrHjanhv%2FhgY%2Fr%2ByfiAdAwH7yvC%2BSCm2AAv6THf8fiHekEs34uUpPHS44A%2Frtp4VtHk1o2NfogLYtSBYH%2B2IqTIHnZhreMxIf0PhED5uFKUk0SEUHQEFFMIIkiQMlK2abNfak%2FXTqj6kBmZR3J4R2KTaK1EPVpSEfcpQ3%2FiA1NDlvOMXKdbi%2BQkqDH4NbT6njieajXaVai67UliVUOr3NdY5XQwPvRIeh0wx5n1vgY6pgEcxUHdkoIDYRCo19rKAIlhe7qhXvnU4Dv%2FOs%2Bfc9dUSBxQKsl%2FcSa%2BSSiahyRuuBnJJ4Fn%2FVfWi2QDkIjzANZuM2ngRa7Rr0EVwnFYdQlFAAXeWhDkU2knssPli%2BW2Pwzad1GJFtcLogInjSZWf08O4H0dWzw3FhHdfhGrdXC6CLc0fZ0STW6BqCG19lvuLd00YPwIdpTkoCYoBEF55M6BisHyp%2Fxp&X-Amz-Signature=fb50ca58cdefc7a31275d4e3d251366353ee44d08207a8fa11cc9fe8e5b6082c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4APBV4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICVWp0BG1KFR%2FA56kVsIcdJfGa5DI64h4PNx2ijZ1VAlAiBI155lJF8R47g2XJ2svn%2BUg7JVsFFZUTNTznWXgp5UTyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8I3iqs%2BqeyWF1EAwKtwDtTLFszRo42cLVpbMACfloFupWqBWCU6OPdo6xFhV5jkqxur3xMz3ymwYgTiLOWYJtGdd94ysGmtlj1tHblM%2BVCe2ovl%2BeUHpWid5REnwGB9452tNC6xl%2BRlm%2BjiyGngHiSadeFIZuSmKBul98CDmvwcqfF2yOPDlBZRD3y30X3GLJgaJhp0XNp4zZHKvipYmA%2BH1UOyqLUekn75INNLIMYLdRZmED4YpvqssmQ3quIOjXK8wSy0jd7DFNWkucdKYSyAr1hZisUEL28i%2BfXZE9ZkyF9heNn%2FAuuXKkNkbbkAC5ZQ4kI%2FvkG%2FX5pNgMjRCrnbSWw5sBuI%2FQBna0%2BPuSuxvpiyr8mV4SkSvV0jZL2xA%2FYjIv3%2BrgoeRrb487ZAYuH6RuZuPhvYiiryWDC0sR3T8%2BNrHjanhv%2FhgY%2Fr%2ByfiAdAwH7yvC%2BSCm2AAv6THf8fiHekEs34uUpPHS44A%2Frtp4VtHk1o2NfogLYtSBYH%2B2IqTIHnZhreMxIf0PhED5uFKUk0SEUHQEFFMIIkiQMlK2abNfak%2FXTqj6kBmZR3J4R2KTaK1EPVpSEfcpQ3%2FiA1NDlvOMXKdbi%2BQkqDH4NbT6njieajXaVai67UliVUOr3NdY5XQwPvRIeh0wx5n1vgY6pgEcxUHdkoIDYRCo19rKAIlhe7qhXvnU4Dv%2FOs%2Bfc9dUSBxQKsl%2FcSa%2BSSiahyRuuBnJJ4Fn%2FVfWi2QDkIjzANZuM2ngRa7Rr0EVwnFYdQlFAAXeWhDkU2knssPli%2BW2Pwzad1GJFtcLogInjSZWf08O4H0dWzw3FhHdfhGrdXC6CLc0fZ0STW6BqCG19lvuLd00YPwIdpTkoCYoBEF55M6BisHyp%2Fxp&X-Amz-Signature=01f34a7f2f85ee1b67a237c8d30b5e7affd163ff9db6a09285b956ebe6b96ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
