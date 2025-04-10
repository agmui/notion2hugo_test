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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H6XAYO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFcI66qEReAE2ifq1KcYy3KAJnbiXK5CfwRr4EsE%2FlbOAiEAywCOxpU31tALCKqsgRJ2A2Os8S0EUMfZFiw3q1jikX4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKdxYjROjY%2F0%2FpRnSrcA%2BsQTfcvVAFUHbKwfGrq%2FLL4kaoO8SeWPsOoTV76965dpzaNpiZ3B3RHzlPbwSCUMHwqHVUrgUWDqCoGPBGz7krWFHsy7RA5AkloH%2BP7fCQ6DdHk17Y%2F0JaEnYYDuZxiTH8zEzz0QBLZiBfIrl%2F5Yj49wIMZzzOkWXe7xXcDYf2tXql%2BapbsG9Rkj5l3FnqN4uo7Z3BhLpKBNw9WJnzI2SS5J9WVDLasTtXqyiwA7KFKSC6GP7vKCnRBqF10HNCjabVJ6hRiKelY8p7tHSm5uTbVYIT1hooULdhv6OaJjEPYTagS7%2Bt0BcdXH6EVSmzOWgfVKz6gveLDISS16gdbUjuh%2F2jWF0VUlOSKRSXp9R1Vu30R%2BCi8S8CiwGpnb%2FvKw%2FsbGwOmcw%2BSbsru629a%2Bl3M1rlomk8dmb3RkdBsrrRdA1udNzhug%2FymT6Za5yTyTct9gNODFgVrJAO6EMVHS6xlc5FsYuVfq%2FVZ837FsXgr%2FdqkPMV3JVBN6hxNWCxR6h5DiLZR0uxZdNZ0jbRzVrLjgWV5I10k%2FOfrNqvSHQtM7%2BDd1t6%2Fp0DJoZHXH12hNvuE2rXX2kBUOZu336YmEEZaIv5bLY2EHp4Etomu4mFEMclMGBmEWpFq%2BN5LMOKR3L8GOqUBnZsmF7N8h7zypeujC%2FA%2F5am9NbeuzJ0TVjcvpee6HkXDrbQ%2FzVLkkAaK9zXCBGS1U7qW73IL8RhY4eiO0khYYh4Hp7kix8QNgxUERT7g6XGYffOpexosUVa%2BVChxpLhMR8RUlwwl5owa%2F05lAkxKu54%2F4PKhZQO8u6A0MKQq48Qg1fj93%2Ffu8A9zSYwoh2Hjp6bK0qOVE1Gx2iZ1PB2FiOYtLzgI&X-Amz-Signature=9715e7bbc86d8892e4deaad157fb766bc699d9cb222e736ac03057975047d90a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H6XAYO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFcI66qEReAE2ifq1KcYy3KAJnbiXK5CfwRr4EsE%2FlbOAiEAywCOxpU31tALCKqsgRJ2A2Os8S0EUMfZFiw3q1jikX4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKdxYjROjY%2F0%2FpRnSrcA%2BsQTfcvVAFUHbKwfGrq%2FLL4kaoO8SeWPsOoTV76965dpzaNpiZ3B3RHzlPbwSCUMHwqHVUrgUWDqCoGPBGz7krWFHsy7RA5AkloH%2BP7fCQ6DdHk17Y%2F0JaEnYYDuZxiTH8zEzz0QBLZiBfIrl%2F5Yj49wIMZzzOkWXe7xXcDYf2tXql%2BapbsG9Rkj5l3FnqN4uo7Z3BhLpKBNw9WJnzI2SS5J9WVDLasTtXqyiwA7KFKSC6GP7vKCnRBqF10HNCjabVJ6hRiKelY8p7tHSm5uTbVYIT1hooULdhv6OaJjEPYTagS7%2Bt0BcdXH6EVSmzOWgfVKz6gveLDISS16gdbUjuh%2F2jWF0VUlOSKRSXp9R1Vu30R%2BCi8S8CiwGpnb%2FvKw%2FsbGwOmcw%2BSbsru629a%2Bl3M1rlomk8dmb3RkdBsrrRdA1udNzhug%2FymT6Za5yTyTct9gNODFgVrJAO6EMVHS6xlc5FsYuVfq%2FVZ837FsXgr%2FdqkPMV3JVBN6hxNWCxR6h5DiLZR0uxZdNZ0jbRzVrLjgWV5I10k%2FOfrNqvSHQtM7%2BDd1t6%2Fp0DJoZHXH12hNvuE2rXX2kBUOZu336YmEEZaIv5bLY2EHp4Etomu4mFEMclMGBmEWpFq%2BN5LMOKR3L8GOqUBnZsmF7N8h7zypeujC%2FA%2F5am9NbeuzJ0TVjcvpee6HkXDrbQ%2FzVLkkAaK9zXCBGS1U7qW73IL8RhY4eiO0khYYh4Hp7kix8QNgxUERT7g6XGYffOpexosUVa%2BVChxpLhMR8RUlwwl5owa%2F05lAkxKu54%2F4PKhZQO8u6A0MKQq48Qg1fj93%2Ffu8A9zSYwoh2Hjp6bK0qOVE1Gx2iZ1PB2FiOYtLzgI&X-Amz-Signature=7c7fc0bb0d11ddf3f65a2494a929ff54d4f9cbc26e307e6c724819ffce227d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H6XAYO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFcI66qEReAE2ifq1KcYy3KAJnbiXK5CfwRr4EsE%2FlbOAiEAywCOxpU31tALCKqsgRJ2A2Os8S0EUMfZFiw3q1jikX4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKdxYjROjY%2F0%2FpRnSrcA%2BsQTfcvVAFUHbKwfGrq%2FLL4kaoO8SeWPsOoTV76965dpzaNpiZ3B3RHzlPbwSCUMHwqHVUrgUWDqCoGPBGz7krWFHsy7RA5AkloH%2BP7fCQ6DdHk17Y%2F0JaEnYYDuZxiTH8zEzz0QBLZiBfIrl%2F5Yj49wIMZzzOkWXe7xXcDYf2tXql%2BapbsG9Rkj5l3FnqN4uo7Z3BhLpKBNw9WJnzI2SS5J9WVDLasTtXqyiwA7KFKSC6GP7vKCnRBqF10HNCjabVJ6hRiKelY8p7tHSm5uTbVYIT1hooULdhv6OaJjEPYTagS7%2Bt0BcdXH6EVSmzOWgfVKz6gveLDISS16gdbUjuh%2F2jWF0VUlOSKRSXp9R1Vu30R%2BCi8S8CiwGpnb%2FvKw%2FsbGwOmcw%2BSbsru629a%2Bl3M1rlomk8dmb3RkdBsrrRdA1udNzhug%2FymT6Za5yTyTct9gNODFgVrJAO6EMVHS6xlc5FsYuVfq%2FVZ837FsXgr%2FdqkPMV3JVBN6hxNWCxR6h5DiLZR0uxZdNZ0jbRzVrLjgWV5I10k%2FOfrNqvSHQtM7%2BDd1t6%2Fp0DJoZHXH12hNvuE2rXX2kBUOZu336YmEEZaIv5bLY2EHp4Etomu4mFEMclMGBmEWpFq%2BN5LMOKR3L8GOqUBnZsmF7N8h7zypeujC%2FA%2F5am9NbeuzJ0TVjcvpee6HkXDrbQ%2FzVLkkAaK9zXCBGS1U7qW73IL8RhY4eiO0khYYh4Hp7kix8QNgxUERT7g6XGYffOpexosUVa%2BVChxpLhMR8RUlwwl5owa%2F05lAkxKu54%2F4PKhZQO8u6A0MKQq48Qg1fj93%2Ffu8A9zSYwoh2Hjp6bK0qOVE1Gx2iZ1PB2FiOYtLzgI&X-Amz-Signature=43f0365e1ad423eeeda68224a90546ee18eb3a45c6c93354d98aa2580470a281&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H6XAYO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFcI66qEReAE2ifq1KcYy3KAJnbiXK5CfwRr4EsE%2FlbOAiEAywCOxpU31tALCKqsgRJ2A2Os8S0EUMfZFiw3q1jikX4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKdxYjROjY%2F0%2FpRnSrcA%2BsQTfcvVAFUHbKwfGrq%2FLL4kaoO8SeWPsOoTV76965dpzaNpiZ3B3RHzlPbwSCUMHwqHVUrgUWDqCoGPBGz7krWFHsy7RA5AkloH%2BP7fCQ6DdHk17Y%2F0JaEnYYDuZxiTH8zEzz0QBLZiBfIrl%2F5Yj49wIMZzzOkWXe7xXcDYf2tXql%2BapbsG9Rkj5l3FnqN4uo7Z3BhLpKBNw9WJnzI2SS5J9WVDLasTtXqyiwA7KFKSC6GP7vKCnRBqF10HNCjabVJ6hRiKelY8p7tHSm5uTbVYIT1hooULdhv6OaJjEPYTagS7%2Bt0BcdXH6EVSmzOWgfVKz6gveLDISS16gdbUjuh%2F2jWF0VUlOSKRSXp9R1Vu30R%2BCi8S8CiwGpnb%2FvKw%2FsbGwOmcw%2BSbsru629a%2Bl3M1rlomk8dmb3RkdBsrrRdA1udNzhug%2FymT6Za5yTyTct9gNODFgVrJAO6EMVHS6xlc5FsYuVfq%2FVZ837FsXgr%2FdqkPMV3JVBN6hxNWCxR6h5DiLZR0uxZdNZ0jbRzVrLjgWV5I10k%2FOfrNqvSHQtM7%2BDd1t6%2Fp0DJoZHXH12hNvuE2rXX2kBUOZu336YmEEZaIv5bLY2EHp4Etomu4mFEMclMGBmEWpFq%2BN5LMOKR3L8GOqUBnZsmF7N8h7zypeujC%2FA%2F5am9NbeuzJ0TVjcvpee6HkXDrbQ%2FzVLkkAaK9zXCBGS1U7qW73IL8RhY4eiO0khYYh4Hp7kix8QNgxUERT7g6XGYffOpexosUVa%2BVChxpLhMR8RUlwwl5owa%2F05lAkxKu54%2F4PKhZQO8u6A0MKQq48Qg1fj93%2Ffu8A9zSYwoh2Hjp6bK0qOVE1Gx2iZ1PB2FiOYtLzgI&X-Amz-Signature=0928357d7e1ccf4173b44f3752d18e6ad9e9e625fba25aa6cf670c2f815f3f88&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H6XAYO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFcI66qEReAE2ifq1KcYy3KAJnbiXK5CfwRr4EsE%2FlbOAiEAywCOxpU31tALCKqsgRJ2A2Os8S0EUMfZFiw3q1jikX4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKdxYjROjY%2F0%2FpRnSrcA%2BsQTfcvVAFUHbKwfGrq%2FLL4kaoO8SeWPsOoTV76965dpzaNpiZ3B3RHzlPbwSCUMHwqHVUrgUWDqCoGPBGz7krWFHsy7RA5AkloH%2BP7fCQ6DdHk17Y%2F0JaEnYYDuZxiTH8zEzz0QBLZiBfIrl%2F5Yj49wIMZzzOkWXe7xXcDYf2tXql%2BapbsG9Rkj5l3FnqN4uo7Z3BhLpKBNw9WJnzI2SS5J9WVDLasTtXqyiwA7KFKSC6GP7vKCnRBqF10HNCjabVJ6hRiKelY8p7tHSm5uTbVYIT1hooULdhv6OaJjEPYTagS7%2Bt0BcdXH6EVSmzOWgfVKz6gveLDISS16gdbUjuh%2F2jWF0VUlOSKRSXp9R1Vu30R%2BCi8S8CiwGpnb%2FvKw%2FsbGwOmcw%2BSbsru629a%2Bl3M1rlomk8dmb3RkdBsrrRdA1udNzhug%2FymT6Za5yTyTct9gNODFgVrJAO6EMVHS6xlc5FsYuVfq%2FVZ837FsXgr%2FdqkPMV3JVBN6hxNWCxR6h5DiLZR0uxZdNZ0jbRzVrLjgWV5I10k%2FOfrNqvSHQtM7%2BDd1t6%2Fp0DJoZHXH12hNvuE2rXX2kBUOZu336YmEEZaIv5bLY2EHp4Etomu4mFEMclMGBmEWpFq%2BN5LMOKR3L8GOqUBnZsmF7N8h7zypeujC%2FA%2F5am9NbeuzJ0TVjcvpee6HkXDrbQ%2FzVLkkAaK9zXCBGS1U7qW73IL8RhY4eiO0khYYh4Hp7kix8QNgxUERT7g6XGYffOpexosUVa%2BVChxpLhMR8RUlwwl5owa%2F05lAkxKu54%2F4PKhZQO8u6A0MKQq48Qg1fj93%2Ffu8A9zSYwoh2Hjp6bK0qOVE1Gx2iZ1PB2FiOYtLzgI&X-Amz-Signature=b87450b62165a400782a26b009fdf3c3b83b7b8f76289aed3c82689007f0f07b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H6XAYO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFcI66qEReAE2ifq1KcYy3KAJnbiXK5CfwRr4EsE%2FlbOAiEAywCOxpU31tALCKqsgRJ2A2Os8S0EUMfZFiw3q1jikX4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKdxYjROjY%2F0%2FpRnSrcA%2BsQTfcvVAFUHbKwfGrq%2FLL4kaoO8SeWPsOoTV76965dpzaNpiZ3B3RHzlPbwSCUMHwqHVUrgUWDqCoGPBGz7krWFHsy7RA5AkloH%2BP7fCQ6DdHk17Y%2F0JaEnYYDuZxiTH8zEzz0QBLZiBfIrl%2F5Yj49wIMZzzOkWXe7xXcDYf2tXql%2BapbsG9Rkj5l3FnqN4uo7Z3BhLpKBNw9WJnzI2SS5J9WVDLasTtXqyiwA7KFKSC6GP7vKCnRBqF10HNCjabVJ6hRiKelY8p7tHSm5uTbVYIT1hooULdhv6OaJjEPYTagS7%2Bt0BcdXH6EVSmzOWgfVKz6gveLDISS16gdbUjuh%2F2jWF0VUlOSKRSXp9R1Vu30R%2BCi8S8CiwGpnb%2FvKw%2FsbGwOmcw%2BSbsru629a%2Bl3M1rlomk8dmb3RkdBsrrRdA1udNzhug%2FymT6Za5yTyTct9gNODFgVrJAO6EMVHS6xlc5FsYuVfq%2FVZ837FsXgr%2FdqkPMV3JVBN6hxNWCxR6h5DiLZR0uxZdNZ0jbRzVrLjgWV5I10k%2FOfrNqvSHQtM7%2BDd1t6%2Fp0DJoZHXH12hNvuE2rXX2kBUOZu336YmEEZaIv5bLY2EHp4Etomu4mFEMclMGBmEWpFq%2BN5LMOKR3L8GOqUBnZsmF7N8h7zypeujC%2FA%2F5am9NbeuzJ0TVjcvpee6HkXDrbQ%2FzVLkkAaK9zXCBGS1U7qW73IL8RhY4eiO0khYYh4Hp7kix8QNgxUERT7g6XGYffOpexosUVa%2BVChxpLhMR8RUlwwl5owa%2F05lAkxKu54%2F4PKhZQO8u6A0MKQq48Qg1fj93%2Ffu8A9zSYwoh2Hjp6bK0qOVE1Gx2iZ1PB2FiOYtLzgI&X-Amz-Signature=5fbefe93bf1afbbf6e4b54c86ddfbe5ae518f148e19c5feb9f53df47f30d230b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H6XAYO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFcI66qEReAE2ifq1KcYy3KAJnbiXK5CfwRr4EsE%2FlbOAiEAywCOxpU31tALCKqsgRJ2A2Os8S0EUMfZFiw3q1jikX4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKdxYjROjY%2F0%2FpRnSrcA%2BsQTfcvVAFUHbKwfGrq%2FLL4kaoO8SeWPsOoTV76965dpzaNpiZ3B3RHzlPbwSCUMHwqHVUrgUWDqCoGPBGz7krWFHsy7RA5AkloH%2BP7fCQ6DdHk17Y%2F0JaEnYYDuZxiTH8zEzz0QBLZiBfIrl%2F5Yj49wIMZzzOkWXe7xXcDYf2tXql%2BapbsG9Rkj5l3FnqN4uo7Z3BhLpKBNw9WJnzI2SS5J9WVDLasTtXqyiwA7KFKSC6GP7vKCnRBqF10HNCjabVJ6hRiKelY8p7tHSm5uTbVYIT1hooULdhv6OaJjEPYTagS7%2Bt0BcdXH6EVSmzOWgfVKz6gveLDISS16gdbUjuh%2F2jWF0VUlOSKRSXp9R1Vu30R%2BCi8S8CiwGpnb%2FvKw%2FsbGwOmcw%2BSbsru629a%2Bl3M1rlomk8dmb3RkdBsrrRdA1udNzhug%2FymT6Za5yTyTct9gNODFgVrJAO6EMVHS6xlc5FsYuVfq%2FVZ837FsXgr%2FdqkPMV3JVBN6hxNWCxR6h5DiLZR0uxZdNZ0jbRzVrLjgWV5I10k%2FOfrNqvSHQtM7%2BDd1t6%2Fp0DJoZHXH12hNvuE2rXX2kBUOZu336YmEEZaIv5bLY2EHp4Etomu4mFEMclMGBmEWpFq%2BN5LMOKR3L8GOqUBnZsmF7N8h7zypeujC%2FA%2F5am9NbeuzJ0TVjcvpee6HkXDrbQ%2FzVLkkAaK9zXCBGS1U7qW73IL8RhY4eiO0khYYh4Hp7kix8QNgxUERT7g6XGYffOpexosUVa%2BVChxpLhMR8RUlwwl5owa%2F05lAkxKu54%2F4PKhZQO8u6A0MKQq48Qg1fj93%2Ffu8A9zSYwoh2Hjp6bK0qOVE1Gx2iZ1PB2FiOYtLzgI&X-Amz-Signature=97fc281dacec10deab2e3d0d9de6cfce1f1beebb1ae4b63f50c45e9e4fcf160d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
