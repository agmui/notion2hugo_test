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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JVB5EE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDyIeF%2FXRdo%2FxMOg5bGLfDBL1ySvVCx8Ap%2BOnE5cbKY2AIgXM0PLCvsEikVPueRocRcXCbPsv1VeAu4uZejzu7oIagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOAK7UJyVEXGJ7h7rircA0DdrPf5RxVxnqpe0SC90VGGUP394leBBVA%2BYTwHMsBD1WtxqJqiMNL%2B9RKVP95dfM6X6GFVg78bQfnJafHr%2FewsKR1gYeiH86dTA8nB8BNBbRg6Qd6feC6BgCwgrbkHx1aJK3sPubgG1ilH2LIBQ25c3Pt%2F%2FgkvjfScMcnA5iPUyvlHToriJ0KRDGAISYcmUp8wSTh36D%2Bxug%2FUaJZMchhT%2FplamBJN5%2BXV5%2Fyosu2lds2q9Rw5J6IoUdlZtLfjguqsOjiZAzKiv7Z3hfShqU2Dy6JDwkZNQZQzFJZFgPnR2VmEXV02ax9OlbZryQHsUOud9oz%2BIQwDv5kLEx4I70UhWgdJ3TNRan%2BqnuXt70vdz7oL4%2By%2F6OsmL5ob76BDVE5choB9KZGrpW2UR2CI9jM3J232oYvnceC%2B8t2JNJW16rUEL2fNF0HazNWtTfbjPTA19VX6xcxcx5A%2FqFQjFuaqLeMWOZ8qPInr4%2F35nEjWrApJamFCZBOsMViiGc7ssu2s2qhtkTqESR5SFLWB4JZFCOPMTEHZmsqA%2Bh2ZXtrGdIYAwfJyxItuB9sk1o9G%2Fzi%2B8upZfX%2Bfh4eRg0P967l8a4UnUkh9BXX4NMp6%2BRkYtIfrX%2BL4Hg%2F0dlh3MMHd68IGOqUBBWICszLQIAEvfKaoNGxx9sPPU%2BVsd%2FsIBCvbr8XY50kWSwWdxvLgLuT%2BHmlzoKNi%2Fu6o%2FX6dB67XH1wM2wdhgu2%2BugOfm%2FUjlH%2Bo46OpXSFB%2FFKe1Ly0IGWKgg%2Be1%2FSrHUsoEd%2FxtQCKLi7kFj3hemj67P7xEhRWmBDJLbou%2B3K5%2BE4zj8b%2B89NvUITWr7Tw9IKO7wbEQBPs19RzNPJadsziCgp6&X-Amz-Signature=794858811f4404bd6eb011619667a86570b963a794dd8770f797c09efecda426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JVB5EE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDyIeF%2FXRdo%2FxMOg5bGLfDBL1ySvVCx8Ap%2BOnE5cbKY2AIgXM0PLCvsEikVPueRocRcXCbPsv1VeAu4uZejzu7oIagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOAK7UJyVEXGJ7h7rircA0DdrPf5RxVxnqpe0SC90VGGUP394leBBVA%2BYTwHMsBD1WtxqJqiMNL%2B9RKVP95dfM6X6GFVg78bQfnJafHr%2FewsKR1gYeiH86dTA8nB8BNBbRg6Qd6feC6BgCwgrbkHx1aJK3sPubgG1ilH2LIBQ25c3Pt%2F%2FgkvjfScMcnA5iPUyvlHToriJ0KRDGAISYcmUp8wSTh36D%2Bxug%2FUaJZMchhT%2FplamBJN5%2BXV5%2Fyosu2lds2q9Rw5J6IoUdlZtLfjguqsOjiZAzKiv7Z3hfShqU2Dy6JDwkZNQZQzFJZFgPnR2VmEXV02ax9OlbZryQHsUOud9oz%2BIQwDv5kLEx4I70UhWgdJ3TNRan%2BqnuXt70vdz7oL4%2By%2F6OsmL5ob76BDVE5choB9KZGrpW2UR2CI9jM3J232oYvnceC%2B8t2JNJW16rUEL2fNF0HazNWtTfbjPTA19VX6xcxcx5A%2FqFQjFuaqLeMWOZ8qPInr4%2F35nEjWrApJamFCZBOsMViiGc7ssu2s2qhtkTqESR5SFLWB4JZFCOPMTEHZmsqA%2Bh2ZXtrGdIYAwfJyxItuB9sk1o9G%2Fzi%2B8upZfX%2Bfh4eRg0P967l8a4UnUkh9BXX4NMp6%2BRkYtIfrX%2BL4Hg%2F0dlh3MMHd68IGOqUBBWICszLQIAEvfKaoNGxx9sPPU%2BVsd%2FsIBCvbr8XY50kWSwWdxvLgLuT%2BHmlzoKNi%2Fu6o%2FX6dB67XH1wM2wdhgu2%2BugOfm%2FUjlH%2Bo46OpXSFB%2FFKe1Ly0IGWKgg%2Be1%2FSrHUsoEd%2FxtQCKLi7kFj3hemj67P7xEhRWmBDJLbou%2B3K5%2BE4zj8b%2B89NvUITWr7Tw9IKO7wbEQBPs19RzNPJadsziCgp6&X-Amz-Signature=55dc9306366b64311e4c8e9b8659a2ba8af2def162f45740ea20f8ba67f17591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JVB5EE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDyIeF%2FXRdo%2FxMOg5bGLfDBL1ySvVCx8Ap%2BOnE5cbKY2AIgXM0PLCvsEikVPueRocRcXCbPsv1VeAu4uZejzu7oIagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOAK7UJyVEXGJ7h7rircA0DdrPf5RxVxnqpe0SC90VGGUP394leBBVA%2BYTwHMsBD1WtxqJqiMNL%2B9RKVP95dfM6X6GFVg78bQfnJafHr%2FewsKR1gYeiH86dTA8nB8BNBbRg6Qd6feC6BgCwgrbkHx1aJK3sPubgG1ilH2LIBQ25c3Pt%2F%2FgkvjfScMcnA5iPUyvlHToriJ0KRDGAISYcmUp8wSTh36D%2Bxug%2FUaJZMchhT%2FplamBJN5%2BXV5%2Fyosu2lds2q9Rw5J6IoUdlZtLfjguqsOjiZAzKiv7Z3hfShqU2Dy6JDwkZNQZQzFJZFgPnR2VmEXV02ax9OlbZryQHsUOud9oz%2BIQwDv5kLEx4I70UhWgdJ3TNRan%2BqnuXt70vdz7oL4%2By%2F6OsmL5ob76BDVE5choB9KZGrpW2UR2CI9jM3J232oYvnceC%2B8t2JNJW16rUEL2fNF0HazNWtTfbjPTA19VX6xcxcx5A%2FqFQjFuaqLeMWOZ8qPInr4%2F35nEjWrApJamFCZBOsMViiGc7ssu2s2qhtkTqESR5SFLWB4JZFCOPMTEHZmsqA%2Bh2ZXtrGdIYAwfJyxItuB9sk1o9G%2Fzi%2B8upZfX%2Bfh4eRg0P967l8a4UnUkh9BXX4NMp6%2BRkYtIfrX%2BL4Hg%2F0dlh3MMHd68IGOqUBBWICszLQIAEvfKaoNGxx9sPPU%2BVsd%2FsIBCvbr8XY50kWSwWdxvLgLuT%2BHmlzoKNi%2Fu6o%2FX6dB67XH1wM2wdhgu2%2BugOfm%2FUjlH%2Bo46OpXSFB%2FFKe1Ly0IGWKgg%2Be1%2FSrHUsoEd%2FxtQCKLi7kFj3hemj67P7xEhRWmBDJLbou%2B3K5%2BE4zj8b%2B89NvUITWr7Tw9IKO7wbEQBPs19RzNPJadsziCgp6&X-Amz-Signature=d4df18947ed1d3e642730677ef51e2f8785766ae92c4b30b683cb91ff20d187d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JVB5EE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDyIeF%2FXRdo%2FxMOg5bGLfDBL1ySvVCx8Ap%2BOnE5cbKY2AIgXM0PLCvsEikVPueRocRcXCbPsv1VeAu4uZejzu7oIagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOAK7UJyVEXGJ7h7rircA0DdrPf5RxVxnqpe0SC90VGGUP394leBBVA%2BYTwHMsBD1WtxqJqiMNL%2B9RKVP95dfM6X6GFVg78bQfnJafHr%2FewsKR1gYeiH86dTA8nB8BNBbRg6Qd6feC6BgCwgrbkHx1aJK3sPubgG1ilH2LIBQ25c3Pt%2F%2FgkvjfScMcnA5iPUyvlHToriJ0KRDGAISYcmUp8wSTh36D%2Bxug%2FUaJZMchhT%2FplamBJN5%2BXV5%2Fyosu2lds2q9Rw5J6IoUdlZtLfjguqsOjiZAzKiv7Z3hfShqU2Dy6JDwkZNQZQzFJZFgPnR2VmEXV02ax9OlbZryQHsUOud9oz%2BIQwDv5kLEx4I70UhWgdJ3TNRan%2BqnuXt70vdz7oL4%2By%2F6OsmL5ob76BDVE5choB9KZGrpW2UR2CI9jM3J232oYvnceC%2B8t2JNJW16rUEL2fNF0HazNWtTfbjPTA19VX6xcxcx5A%2FqFQjFuaqLeMWOZ8qPInr4%2F35nEjWrApJamFCZBOsMViiGc7ssu2s2qhtkTqESR5SFLWB4JZFCOPMTEHZmsqA%2Bh2ZXtrGdIYAwfJyxItuB9sk1o9G%2Fzi%2B8upZfX%2Bfh4eRg0P967l8a4UnUkh9BXX4NMp6%2BRkYtIfrX%2BL4Hg%2F0dlh3MMHd68IGOqUBBWICszLQIAEvfKaoNGxx9sPPU%2BVsd%2FsIBCvbr8XY50kWSwWdxvLgLuT%2BHmlzoKNi%2Fu6o%2FX6dB67XH1wM2wdhgu2%2BugOfm%2FUjlH%2Bo46OpXSFB%2FFKe1Ly0IGWKgg%2Be1%2FSrHUsoEd%2FxtQCKLi7kFj3hemj67P7xEhRWmBDJLbou%2B3K5%2BE4zj8b%2B89NvUITWr7Tw9IKO7wbEQBPs19RzNPJadsziCgp6&X-Amz-Signature=33f0b3c21dbad0ba57acf7ba0ec8ce805b047c722e64b9eb28e9fdc569f0a531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JVB5EE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDyIeF%2FXRdo%2FxMOg5bGLfDBL1ySvVCx8Ap%2BOnE5cbKY2AIgXM0PLCvsEikVPueRocRcXCbPsv1VeAu4uZejzu7oIagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOAK7UJyVEXGJ7h7rircA0DdrPf5RxVxnqpe0SC90VGGUP394leBBVA%2BYTwHMsBD1WtxqJqiMNL%2B9RKVP95dfM6X6GFVg78bQfnJafHr%2FewsKR1gYeiH86dTA8nB8BNBbRg6Qd6feC6BgCwgrbkHx1aJK3sPubgG1ilH2LIBQ25c3Pt%2F%2FgkvjfScMcnA5iPUyvlHToriJ0KRDGAISYcmUp8wSTh36D%2Bxug%2FUaJZMchhT%2FplamBJN5%2BXV5%2Fyosu2lds2q9Rw5J6IoUdlZtLfjguqsOjiZAzKiv7Z3hfShqU2Dy6JDwkZNQZQzFJZFgPnR2VmEXV02ax9OlbZryQHsUOud9oz%2BIQwDv5kLEx4I70UhWgdJ3TNRan%2BqnuXt70vdz7oL4%2By%2F6OsmL5ob76BDVE5choB9KZGrpW2UR2CI9jM3J232oYvnceC%2B8t2JNJW16rUEL2fNF0HazNWtTfbjPTA19VX6xcxcx5A%2FqFQjFuaqLeMWOZ8qPInr4%2F35nEjWrApJamFCZBOsMViiGc7ssu2s2qhtkTqESR5SFLWB4JZFCOPMTEHZmsqA%2Bh2ZXtrGdIYAwfJyxItuB9sk1o9G%2Fzi%2B8upZfX%2Bfh4eRg0P967l8a4UnUkh9BXX4NMp6%2BRkYtIfrX%2BL4Hg%2F0dlh3MMHd68IGOqUBBWICszLQIAEvfKaoNGxx9sPPU%2BVsd%2FsIBCvbr8XY50kWSwWdxvLgLuT%2BHmlzoKNi%2Fu6o%2FX6dB67XH1wM2wdhgu2%2BugOfm%2FUjlH%2Bo46OpXSFB%2FFKe1Ly0IGWKgg%2Be1%2FSrHUsoEd%2FxtQCKLi7kFj3hemj67P7xEhRWmBDJLbou%2B3K5%2BE4zj8b%2B89NvUITWr7Tw9IKO7wbEQBPs19RzNPJadsziCgp6&X-Amz-Signature=c9271a06b3bafc7a6fc0a20cb3fe06ab082f7385670958c16aa608ff4056512f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JVB5EE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDyIeF%2FXRdo%2FxMOg5bGLfDBL1ySvVCx8Ap%2BOnE5cbKY2AIgXM0PLCvsEikVPueRocRcXCbPsv1VeAu4uZejzu7oIagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOAK7UJyVEXGJ7h7rircA0DdrPf5RxVxnqpe0SC90VGGUP394leBBVA%2BYTwHMsBD1WtxqJqiMNL%2B9RKVP95dfM6X6GFVg78bQfnJafHr%2FewsKR1gYeiH86dTA8nB8BNBbRg6Qd6feC6BgCwgrbkHx1aJK3sPubgG1ilH2LIBQ25c3Pt%2F%2FgkvjfScMcnA5iPUyvlHToriJ0KRDGAISYcmUp8wSTh36D%2Bxug%2FUaJZMchhT%2FplamBJN5%2BXV5%2Fyosu2lds2q9Rw5J6IoUdlZtLfjguqsOjiZAzKiv7Z3hfShqU2Dy6JDwkZNQZQzFJZFgPnR2VmEXV02ax9OlbZryQHsUOud9oz%2BIQwDv5kLEx4I70UhWgdJ3TNRan%2BqnuXt70vdz7oL4%2By%2F6OsmL5ob76BDVE5choB9KZGrpW2UR2CI9jM3J232oYvnceC%2B8t2JNJW16rUEL2fNF0HazNWtTfbjPTA19VX6xcxcx5A%2FqFQjFuaqLeMWOZ8qPInr4%2F35nEjWrApJamFCZBOsMViiGc7ssu2s2qhtkTqESR5SFLWB4JZFCOPMTEHZmsqA%2Bh2ZXtrGdIYAwfJyxItuB9sk1o9G%2Fzi%2B8upZfX%2Bfh4eRg0P967l8a4UnUkh9BXX4NMp6%2BRkYtIfrX%2BL4Hg%2F0dlh3MMHd68IGOqUBBWICszLQIAEvfKaoNGxx9sPPU%2BVsd%2FsIBCvbr8XY50kWSwWdxvLgLuT%2BHmlzoKNi%2Fu6o%2FX6dB67XH1wM2wdhgu2%2BugOfm%2FUjlH%2Bo46OpXSFB%2FFKe1Ly0IGWKgg%2Be1%2FSrHUsoEd%2FxtQCKLi7kFj3hemj67P7xEhRWmBDJLbou%2B3K5%2BE4zj8b%2B89NvUITWr7Tw9IKO7wbEQBPs19RzNPJadsziCgp6&X-Amz-Signature=6c49db5bb70118723e57bbb15818f4fce85087583ebaf7df045f9f8b2e19d56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JVB5EE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDyIeF%2FXRdo%2FxMOg5bGLfDBL1ySvVCx8Ap%2BOnE5cbKY2AIgXM0PLCvsEikVPueRocRcXCbPsv1VeAu4uZejzu7oIagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOAK7UJyVEXGJ7h7rircA0DdrPf5RxVxnqpe0SC90VGGUP394leBBVA%2BYTwHMsBD1WtxqJqiMNL%2B9RKVP95dfM6X6GFVg78bQfnJafHr%2FewsKR1gYeiH86dTA8nB8BNBbRg6Qd6feC6BgCwgrbkHx1aJK3sPubgG1ilH2LIBQ25c3Pt%2F%2FgkvjfScMcnA5iPUyvlHToriJ0KRDGAISYcmUp8wSTh36D%2Bxug%2FUaJZMchhT%2FplamBJN5%2BXV5%2Fyosu2lds2q9Rw5J6IoUdlZtLfjguqsOjiZAzKiv7Z3hfShqU2Dy6JDwkZNQZQzFJZFgPnR2VmEXV02ax9OlbZryQHsUOud9oz%2BIQwDv5kLEx4I70UhWgdJ3TNRan%2BqnuXt70vdz7oL4%2By%2F6OsmL5ob76BDVE5choB9KZGrpW2UR2CI9jM3J232oYvnceC%2B8t2JNJW16rUEL2fNF0HazNWtTfbjPTA19VX6xcxcx5A%2FqFQjFuaqLeMWOZ8qPInr4%2F35nEjWrApJamFCZBOsMViiGc7ssu2s2qhtkTqESR5SFLWB4JZFCOPMTEHZmsqA%2Bh2ZXtrGdIYAwfJyxItuB9sk1o9G%2Fzi%2B8upZfX%2Bfh4eRg0P967l8a4UnUkh9BXX4NMp6%2BRkYtIfrX%2BL4Hg%2F0dlh3MMHd68IGOqUBBWICszLQIAEvfKaoNGxx9sPPU%2BVsd%2FsIBCvbr8XY50kWSwWdxvLgLuT%2BHmlzoKNi%2Fu6o%2FX6dB67XH1wM2wdhgu2%2BugOfm%2FUjlH%2Bo46OpXSFB%2FFKe1Ly0IGWKgg%2Be1%2FSrHUsoEd%2FxtQCKLi7kFj3hemj67P7xEhRWmBDJLbou%2B3K5%2BE4zj8b%2B89NvUITWr7Tw9IKO7wbEQBPs19RzNPJadsziCgp6&X-Amz-Signature=4e500a4b907da1fa8e3d4bd0a17cb2cb65b84ee35a970bec9d01fff852dec889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
