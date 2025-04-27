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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXAUNUJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2B6M5PRIQwMgc9t5n03%2FJ8zsOoRtAw9DLcGh9f9Y%2FExAiEAyMWtMtY%2FmXwedSNLxCmpuSaEITN70NpshF18TBrj4iAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPSHt2FISumNnGXxrSrcA%2F4ec6npG76Sdo0L4ZbNFehWyQlWtoXyex%2FQN7ywgvBjywZXIaunepJJypG%2FPUmdwXC1eqp4Qj%2BIz0Kb%2F8U5I0OBnp7w2HBrsLxnF4K6iCyULqpo9EjFrkIhrqb8QRvmdCLfLmD1LS5vdZpFbvxL%2FboT8ABwc4NzbRZcs1DEAfssDGCZbfHyOuZF%2Bp19xpJQsbPrRa2nEKUoXQ%2B1eRrQeHpKMo2zJVQbjMWd5Ooc%2FgPbV7llWYoeKLJUt813MbknocmOmsNOBU46yPJD%2BNCznPDkc0ojiSrivUfYPPgFsfB2TeZoS5OC8GyzO2HrocYi3fZ8k5%2F%2BDuvLZeaA%2BjmoPrjJjykiwlkv83HlxwVcOWvZDPGPu6aLRAJ%2Bw8IjELN%2BjrBMGqdyXPrVG4FcuiijVsBVAPif2FEk%2FLM4LVnHw10aE0xs2aQIoPuMaZ8K%2BxjqDLU0%2BGY5VakHW0YCclNI3p0uw%2F336APYCauSWSDoK7Z%2B9vgIjPAVdw%2BT7jffMM9i4lZUBCRJtfPLHSzMDIwLyJ9XmKopHzIJ0XGcSZvuN9MN1Dgs1KzKg3SQeGLcpI53mJ8ii%2F7wwgx%2Bil%2FBnv3KkGeJzvemEE%2F41tCGnKsiM0hQfF4Ys9jRS%2FSe%2BB8WMOCKusAGOqUBGsPL8WxVFU%2FVIhi0TBvc3Z%2FDx7Nyqve2Pul3QCOYT%2BS6DdVNc6qNnUTBjmWP%2BpdqGLeSfRLhbq5T0yPUF%2BbkutalHBi7GB%2BkgWFW9pTbJsNM9XCvkVfXBN5en7Rl9F6ZGiGH6%2BcQYn6eRpAizgSS2RyCe8EIB9fMET0ejbO7%2FjMDefL3KUtAmD6ehYUfqiEwbKGB8DyBDF7MpChcxfBdVWh1fhaj&X-Amz-Signature=bf0c5411eea1d46ff402909d6e850bf74fd435bfeb7a293e283be3f4bb53dda2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXAUNUJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2B6M5PRIQwMgc9t5n03%2FJ8zsOoRtAw9DLcGh9f9Y%2FExAiEAyMWtMtY%2FmXwedSNLxCmpuSaEITN70NpshF18TBrj4iAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPSHt2FISumNnGXxrSrcA%2F4ec6npG76Sdo0L4ZbNFehWyQlWtoXyex%2FQN7ywgvBjywZXIaunepJJypG%2FPUmdwXC1eqp4Qj%2BIz0Kb%2F8U5I0OBnp7w2HBrsLxnF4K6iCyULqpo9EjFrkIhrqb8QRvmdCLfLmD1LS5vdZpFbvxL%2FboT8ABwc4NzbRZcs1DEAfssDGCZbfHyOuZF%2Bp19xpJQsbPrRa2nEKUoXQ%2B1eRrQeHpKMo2zJVQbjMWd5Ooc%2FgPbV7llWYoeKLJUt813MbknocmOmsNOBU46yPJD%2BNCznPDkc0ojiSrivUfYPPgFsfB2TeZoS5OC8GyzO2HrocYi3fZ8k5%2F%2BDuvLZeaA%2BjmoPrjJjykiwlkv83HlxwVcOWvZDPGPu6aLRAJ%2Bw8IjELN%2BjrBMGqdyXPrVG4FcuiijVsBVAPif2FEk%2FLM4LVnHw10aE0xs2aQIoPuMaZ8K%2BxjqDLU0%2BGY5VakHW0YCclNI3p0uw%2F336APYCauSWSDoK7Z%2B9vgIjPAVdw%2BT7jffMM9i4lZUBCRJtfPLHSzMDIwLyJ9XmKopHzIJ0XGcSZvuN9MN1Dgs1KzKg3SQeGLcpI53mJ8ii%2F7wwgx%2Bil%2FBnv3KkGeJzvemEE%2F41tCGnKsiM0hQfF4Ys9jRS%2FSe%2BB8WMOCKusAGOqUBGsPL8WxVFU%2FVIhi0TBvc3Z%2FDx7Nyqve2Pul3QCOYT%2BS6DdVNc6qNnUTBjmWP%2BpdqGLeSfRLhbq5T0yPUF%2BbkutalHBi7GB%2BkgWFW9pTbJsNM9XCvkVfXBN5en7Rl9F6ZGiGH6%2BcQYn6eRpAizgSS2RyCe8EIB9fMET0ejbO7%2FjMDefL3KUtAmD6ehYUfqiEwbKGB8DyBDF7MpChcxfBdVWh1fhaj&X-Amz-Signature=96aeb64be313b4c86548decbda829822204fb9c9a522486775dd0ad75f1b98ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXAUNUJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2B6M5PRIQwMgc9t5n03%2FJ8zsOoRtAw9DLcGh9f9Y%2FExAiEAyMWtMtY%2FmXwedSNLxCmpuSaEITN70NpshF18TBrj4iAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPSHt2FISumNnGXxrSrcA%2F4ec6npG76Sdo0L4ZbNFehWyQlWtoXyex%2FQN7ywgvBjywZXIaunepJJypG%2FPUmdwXC1eqp4Qj%2BIz0Kb%2F8U5I0OBnp7w2HBrsLxnF4K6iCyULqpo9EjFrkIhrqb8QRvmdCLfLmD1LS5vdZpFbvxL%2FboT8ABwc4NzbRZcs1DEAfssDGCZbfHyOuZF%2Bp19xpJQsbPrRa2nEKUoXQ%2B1eRrQeHpKMo2zJVQbjMWd5Ooc%2FgPbV7llWYoeKLJUt813MbknocmOmsNOBU46yPJD%2BNCznPDkc0ojiSrivUfYPPgFsfB2TeZoS5OC8GyzO2HrocYi3fZ8k5%2F%2BDuvLZeaA%2BjmoPrjJjykiwlkv83HlxwVcOWvZDPGPu6aLRAJ%2Bw8IjELN%2BjrBMGqdyXPrVG4FcuiijVsBVAPif2FEk%2FLM4LVnHw10aE0xs2aQIoPuMaZ8K%2BxjqDLU0%2BGY5VakHW0YCclNI3p0uw%2F336APYCauSWSDoK7Z%2B9vgIjPAVdw%2BT7jffMM9i4lZUBCRJtfPLHSzMDIwLyJ9XmKopHzIJ0XGcSZvuN9MN1Dgs1KzKg3SQeGLcpI53mJ8ii%2F7wwgx%2Bil%2FBnv3KkGeJzvemEE%2F41tCGnKsiM0hQfF4Ys9jRS%2FSe%2BB8WMOCKusAGOqUBGsPL8WxVFU%2FVIhi0TBvc3Z%2FDx7Nyqve2Pul3QCOYT%2BS6DdVNc6qNnUTBjmWP%2BpdqGLeSfRLhbq5T0yPUF%2BbkutalHBi7GB%2BkgWFW9pTbJsNM9XCvkVfXBN5en7Rl9F6ZGiGH6%2BcQYn6eRpAizgSS2RyCe8EIB9fMET0ejbO7%2FjMDefL3KUtAmD6ehYUfqiEwbKGB8DyBDF7MpChcxfBdVWh1fhaj&X-Amz-Signature=80a8e135570f6712656808380978d9e29a7c89417530bbea9a510db118ec9c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXAUNUJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2B6M5PRIQwMgc9t5n03%2FJ8zsOoRtAw9DLcGh9f9Y%2FExAiEAyMWtMtY%2FmXwedSNLxCmpuSaEITN70NpshF18TBrj4iAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPSHt2FISumNnGXxrSrcA%2F4ec6npG76Sdo0L4ZbNFehWyQlWtoXyex%2FQN7ywgvBjywZXIaunepJJypG%2FPUmdwXC1eqp4Qj%2BIz0Kb%2F8U5I0OBnp7w2HBrsLxnF4K6iCyULqpo9EjFrkIhrqb8QRvmdCLfLmD1LS5vdZpFbvxL%2FboT8ABwc4NzbRZcs1DEAfssDGCZbfHyOuZF%2Bp19xpJQsbPrRa2nEKUoXQ%2B1eRrQeHpKMo2zJVQbjMWd5Ooc%2FgPbV7llWYoeKLJUt813MbknocmOmsNOBU46yPJD%2BNCznPDkc0ojiSrivUfYPPgFsfB2TeZoS5OC8GyzO2HrocYi3fZ8k5%2F%2BDuvLZeaA%2BjmoPrjJjykiwlkv83HlxwVcOWvZDPGPu6aLRAJ%2Bw8IjELN%2BjrBMGqdyXPrVG4FcuiijVsBVAPif2FEk%2FLM4LVnHw10aE0xs2aQIoPuMaZ8K%2BxjqDLU0%2BGY5VakHW0YCclNI3p0uw%2F336APYCauSWSDoK7Z%2B9vgIjPAVdw%2BT7jffMM9i4lZUBCRJtfPLHSzMDIwLyJ9XmKopHzIJ0XGcSZvuN9MN1Dgs1KzKg3SQeGLcpI53mJ8ii%2F7wwgx%2Bil%2FBnv3KkGeJzvemEE%2F41tCGnKsiM0hQfF4Ys9jRS%2FSe%2BB8WMOCKusAGOqUBGsPL8WxVFU%2FVIhi0TBvc3Z%2FDx7Nyqve2Pul3QCOYT%2BS6DdVNc6qNnUTBjmWP%2BpdqGLeSfRLhbq5T0yPUF%2BbkutalHBi7GB%2BkgWFW9pTbJsNM9XCvkVfXBN5en7Rl9F6ZGiGH6%2BcQYn6eRpAizgSS2RyCe8EIB9fMET0ejbO7%2FjMDefL3KUtAmD6ehYUfqiEwbKGB8DyBDF7MpChcxfBdVWh1fhaj&X-Amz-Signature=46605b0eefc1a5ef9c1083064d31b95864608e21b277ff59d8a08b5162f83de2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXAUNUJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2B6M5PRIQwMgc9t5n03%2FJ8zsOoRtAw9DLcGh9f9Y%2FExAiEAyMWtMtY%2FmXwedSNLxCmpuSaEITN70NpshF18TBrj4iAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPSHt2FISumNnGXxrSrcA%2F4ec6npG76Sdo0L4ZbNFehWyQlWtoXyex%2FQN7ywgvBjywZXIaunepJJypG%2FPUmdwXC1eqp4Qj%2BIz0Kb%2F8U5I0OBnp7w2HBrsLxnF4K6iCyULqpo9EjFrkIhrqb8QRvmdCLfLmD1LS5vdZpFbvxL%2FboT8ABwc4NzbRZcs1DEAfssDGCZbfHyOuZF%2Bp19xpJQsbPrRa2nEKUoXQ%2B1eRrQeHpKMo2zJVQbjMWd5Ooc%2FgPbV7llWYoeKLJUt813MbknocmOmsNOBU46yPJD%2BNCznPDkc0ojiSrivUfYPPgFsfB2TeZoS5OC8GyzO2HrocYi3fZ8k5%2F%2BDuvLZeaA%2BjmoPrjJjykiwlkv83HlxwVcOWvZDPGPu6aLRAJ%2Bw8IjELN%2BjrBMGqdyXPrVG4FcuiijVsBVAPif2FEk%2FLM4LVnHw10aE0xs2aQIoPuMaZ8K%2BxjqDLU0%2BGY5VakHW0YCclNI3p0uw%2F336APYCauSWSDoK7Z%2B9vgIjPAVdw%2BT7jffMM9i4lZUBCRJtfPLHSzMDIwLyJ9XmKopHzIJ0XGcSZvuN9MN1Dgs1KzKg3SQeGLcpI53mJ8ii%2F7wwgx%2Bil%2FBnv3KkGeJzvemEE%2F41tCGnKsiM0hQfF4Ys9jRS%2FSe%2BB8WMOCKusAGOqUBGsPL8WxVFU%2FVIhi0TBvc3Z%2FDx7Nyqve2Pul3QCOYT%2BS6DdVNc6qNnUTBjmWP%2BpdqGLeSfRLhbq5T0yPUF%2BbkutalHBi7GB%2BkgWFW9pTbJsNM9XCvkVfXBN5en7Rl9F6ZGiGH6%2BcQYn6eRpAizgSS2RyCe8EIB9fMET0ejbO7%2FjMDefL3KUtAmD6ehYUfqiEwbKGB8DyBDF7MpChcxfBdVWh1fhaj&X-Amz-Signature=ac33288130cf2c0f1bd0f970bccc0712604d13c7b138f6c6696ee59fa2f90e62&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXAUNUJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2B6M5PRIQwMgc9t5n03%2FJ8zsOoRtAw9DLcGh9f9Y%2FExAiEAyMWtMtY%2FmXwedSNLxCmpuSaEITN70NpshF18TBrj4iAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPSHt2FISumNnGXxrSrcA%2F4ec6npG76Sdo0L4ZbNFehWyQlWtoXyex%2FQN7ywgvBjywZXIaunepJJypG%2FPUmdwXC1eqp4Qj%2BIz0Kb%2F8U5I0OBnp7w2HBrsLxnF4K6iCyULqpo9EjFrkIhrqb8QRvmdCLfLmD1LS5vdZpFbvxL%2FboT8ABwc4NzbRZcs1DEAfssDGCZbfHyOuZF%2Bp19xpJQsbPrRa2nEKUoXQ%2B1eRrQeHpKMo2zJVQbjMWd5Ooc%2FgPbV7llWYoeKLJUt813MbknocmOmsNOBU46yPJD%2BNCznPDkc0ojiSrivUfYPPgFsfB2TeZoS5OC8GyzO2HrocYi3fZ8k5%2F%2BDuvLZeaA%2BjmoPrjJjykiwlkv83HlxwVcOWvZDPGPu6aLRAJ%2Bw8IjELN%2BjrBMGqdyXPrVG4FcuiijVsBVAPif2FEk%2FLM4LVnHw10aE0xs2aQIoPuMaZ8K%2BxjqDLU0%2BGY5VakHW0YCclNI3p0uw%2F336APYCauSWSDoK7Z%2B9vgIjPAVdw%2BT7jffMM9i4lZUBCRJtfPLHSzMDIwLyJ9XmKopHzIJ0XGcSZvuN9MN1Dgs1KzKg3SQeGLcpI53mJ8ii%2F7wwgx%2Bil%2FBnv3KkGeJzvemEE%2F41tCGnKsiM0hQfF4Ys9jRS%2FSe%2BB8WMOCKusAGOqUBGsPL8WxVFU%2FVIhi0TBvc3Z%2FDx7Nyqve2Pul3QCOYT%2BS6DdVNc6qNnUTBjmWP%2BpdqGLeSfRLhbq5T0yPUF%2BbkutalHBi7GB%2BkgWFW9pTbJsNM9XCvkVfXBN5en7Rl9F6ZGiGH6%2BcQYn6eRpAizgSS2RyCe8EIB9fMET0ejbO7%2FjMDefL3KUtAmD6ehYUfqiEwbKGB8DyBDF7MpChcxfBdVWh1fhaj&X-Amz-Signature=11abc3025e6b43c927551447195455fe4cc589fa3698b0fd9e645744b141eb86&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXAUNUJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2B6M5PRIQwMgc9t5n03%2FJ8zsOoRtAw9DLcGh9f9Y%2FExAiEAyMWtMtY%2FmXwedSNLxCmpuSaEITN70NpshF18TBrj4iAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPSHt2FISumNnGXxrSrcA%2F4ec6npG76Sdo0L4ZbNFehWyQlWtoXyex%2FQN7ywgvBjywZXIaunepJJypG%2FPUmdwXC1eqp4Qj%2BIz0Kb%2F8U5I0OBnp7w2HBrsLxnF4K6iCyULqpo9EjFrkIhrqb8QRvmdCLfLmD1LS5vdZpFbvxL%2FboT8ABwc4NzbRZcs1DEAfssDGCZbfHyOuZF%2Bp19xpJQsbPrRa2nEKUoXQ%2B1eRrQeHpKMo2zJVQbjMWd5Ooc%2FgPbV7llWYoeKLJUt813MbknocmOmsNOBU46yPJD%2BNCznPDkc0ojiSrivUfYPPgFsfB2TeZoS5OC8GyzO2HrocYi3fZ8k5%2F%2BDuvLZeaA%2BjmoPrjJjykiwlkv83HlxwVcOWvZDPGPu6aLRAJ%2Bw8IjELN%2BjrBMGqdyXPrVG4FcuiijVsBVAPif2FEk%2FLM4LVnHw10aE0xs2aQIoPuMaZ8K%2BxjqDLU0%2BGY5VakHW0YCclNI3p0uw%2F336APYCauSWSDoK7Z%2B9vgIjPAVdw%2BT7jffMM9i4lZUBCRJtfPLHSzMDIwLyJ9XmKopHzIJ0XGcSZvuN9MN1Dgs1KzKg3SQeGLcpI53mJ8ii%2F7wwgx%2Bil%2FBnv3KkGeJzvemEE%2F41tCGnKsiM0hQfF4Ys9jRS%2FSe%2BB8WMOCKusAGOqUBGsPL8WxVFU%2FVIhi0TBvc3Z%2FDx7Nyqve2Pul3QCOYT%2BS6DdVNc6qNnUTBjmWP%2BpdqGLeSfRLhbq5T0yPUF%2BbkutalHBi7GB%2BkgWFW9pTbJsNM9XCvkVfXBN5en7Rl9F6ZGiGH6%2BcQYn6eRpAizgSS2RyCe8EIB9fMET0ejbO7%2FjMDefL3KUtAmD6ehYUfqiEwbKGB8DyBDF7MpChcxfBdVWh1fhaj&X-Amz-Signature=2988fb6ad281c93ac0dca6cf4dbd399bc77f5492106f0aa29352d8dc07b31595&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
