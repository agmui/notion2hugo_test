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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536NKDYJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE9p%2Fyxl2faFoT9UORzqSBUIry2DdP89Tgr8NpF0AJrAiEAg49r4lQp045nHFRT1D%2BeULIBUsNNOIFnoMnnLc69%2FLAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE27kSEj7PK1dbU9NCrcA0nEUlHAxs6lBuyljFYT9luLMJYtQr599gFjH9H%2FPKolIRIDy4FeghEB6xyMa8dYF7WdHZ3ou1akIKH04gNFU819wPSuBibrBAFr54OBmsXzWigJBT7F1otyPfKtH7nBap%2BZoKvHybJ%2BRuvdklJrNhLiCrmrdLE83DsFV2SR8uZmutrYd2TMcwlNSBB7RA5X%2BckNBLtROViTMo4h%2FtDQG%2BCKG3HhSEtQ6unOetqZytVTQTb5%2FdHB6RoMgOSZYcaTYtL%2B%2FtsLYjRuXYPo5E3W%2Fo3Ls7J2%2BEfdHNhrZaiusfIiac%2F%2Fi7XtfwGkPm%2BJWA25F0m7ffSYM%2FZo8sDYca3rHuykKWjgk5TKngA5ZLJNrZFs2NM84XiuUaCgVw3gHEVxmFGGhMlls6%2FZhdWXGl0KB1wHGDMMpiUgNcgI2F8j4xh9BSGbSu0Nget0BGZ8OVbpdyYtNecFaGN%2BStuYFT1gb4eRYQJcw2ZqPHwwoDgwE9DBMtyehRY8RO9cjyavW1gr5BWsW2C2HHMJus8t3DmKx2PDfYs7TXC%2BbsPZSbBoG37QA1KMBCm5iGIqh5gluwJTA6V95FNqKa2%2B%2BlP6qNt88kbr5KM7FNQsIo3W0CMeD0N6OsaT3N71AxuAUxgsMKSI38EGOqUBxlJgw%2Fu8icJCACG5TRvEVEO3SOTJ8hneJ0YCSs3zwB3TQ2z%2B03pKdNwrXPapZVazZO9G7X5owwHDfKXja40Uh8A4QRsrGDaCDDRYA8aX%2BVyITa362tEq%2BlBmXG%2F678UgvCyYR%2Fmh2AXKjEqHXR21uUbwlQw2lOk8kcmxEB1DYt3h9KNVeJ63J9Vo4pbCi9shYlVf3DbrpksB2N0xotSFn0cegVQN&X-Amz-Signature=e8115ba4b12f506102447014806f44b85401299ad40c1323ec27765138988ccb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536NKDYJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE9p%2Fyxl2faFoT9UORzqSBUIry2DdP89Tgr8NpF0AJrAiEAg49r4lQp045nHFRT1D%2BeULIBUsNNOIFnoMnnLc69%2FLAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE27kSEj7PK1dbU9NCrcA0nEUlHAxs6lBuyljFYT9luLMJYtQr599gFjH9H%2FPKolIRIDy4FeghEB6xyMa8dYF7WdHZ3ou1akIKH04gNFU819wPSuBibrBAFr54OBmsXzWigJBT7F1otyPfKtH7nBap%2BZoKvHybJ%2BRuvdklJrNhLiCrmrdLE83DsFV2SR8uZmutrYd2TMcwlNSBB7RA5X%2BckNBLtROViTMo4h%2FtDQG%2BCKG3HhSEtQ6unOetqZytVTQTb5%2FdHB6RoMgOSZYcaTYtL%2B%2FtsLYjRuXYPo5E3W%2Fo3Ls7J2%2BEfdHNhrZaiusfIiac%2F%2Fi7XtfwGkPm%2BJWA25F0m7ffSYM%2FZo8sDYca3rHuykKWjgk5TKngA5ZLJNrZFs2NM84XiuUaCgVw3gHEVxmFGGhMlls6%2FZhdWXGl0KB1wHGDMMpiUgNcgI2F8j4xh9BSGbSu0Nget0BGZ8OVbpdyYtNecFaGN%2BStuYFT1gb4eRYQJcw2ZqPHwwoDgwE9DBMtyehRY8RO9cjyavW1gr5BWsW2C2HHMJus8t3DmKx2PDfYs7TXC%2BbsPZSbBoG37QA1KMBCm5iGIqh5gluwJTA6V95FNqKa2%2B%2BlP6qNt88kbr5KM7FNQsIo3W0CMeD0N6OsaT3N71AxuAUxgsMKSI38EGOqUBxlJgw%2Fu8icJCACG5TRvEVEO3SOTJ8hneJ0YCSs3zwB3TQ2z%2B03pKdNwrXPapZVazZO9G7X5owwHDfKXja40Uh8A4QRsrGDaCDDRYA8aX%2BVyITa362tEq%2BlBmXG%2F678UgvCyYR%2Fmh2AXKjEqHXR21uUbwlQw2lOk8kcmxEB1DYt3h9KNVeJ63J9Vo4pbCi9shYlVf3DbrpksB2N0xotSFn0cegVQN&X-Amz-Signature=226532aa5aaa44a74726b5139db93dd691bb4072b89cbb14b737714dbca50d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536NKDYJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE9p%2Fyxl2faFoT9UORzqSBUIry2DdP89Tgr8NpF0AJrAiEAg49r4lQp045nHFRT1D%2BeULIBUsNNOIFnoMnnLc69%2FLAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE27kSEj7PK1dbU9NCrcA0nEUlHAxs6lBuyljFYT9luLMJYtQr599gFjH9H%2FPKolIRIDy4FeghEB6xyMa8dYF7WdHZ3ou1akIKH04gNFU819wPSuBibrBAFr54OBmsXzWigJBT7F1otyPfKtH7nBap%2BZoKvHybJ%2BRuvdklJrNhLiCrmrdLE83DsFV2SR8uZmutrYd2TMcwlNSBB7RA5X%2BckNBLtROViTMo4h%2FtDQG%2BCKG3HhSEtQ6unOetqZytVTQTb5%2FdHB6RoMgOSZYcaTYtL%2B%2FtsLYjRuXYPo5E3W%2Fo3Ls7J2%2BEfdHNhrZaiusfIiac%2F%2Fi7XtfwGkPm%2BJWA25F0m7ffSYM%2FZo8sDYca3rHuykKWjgk5TKngA5ZLJNrZFs2NM84XiuUaCgVw3gHEVxmFGGhMlls6%2FZhdWXGl0KB1wHGDMMpiUgNcgI2F8j4xh9BSGbSu0Nget0BGZ8OVbpdyYtNecFaGN%2BStuYFT1gb4eRYQJcw2ZqPHwwoDgwE9DBMtyehRY8RO9cjyavW1gr5BWsW2C2HHMJus8t3DmKx2PDfYs7TXC%2BbsPZSbBoG37QA1KMBCm5iGIqh5gluwJTA6V95FNqKa2%2B%2BlP6qNt88kbr5KM7FNQsIo3W0CMeD0N6OsaT3N71AxuAUxgsMKSI38EGOqUBxlJgw%2Fu8icJCACG5TRvEVEO3SOTJ8hneJ0YCSs3zwB3TQ2z%2B03pKdNwrXPapZVazZO9G7X5owwHDfKXja40Uh8A4QRsrGDaCDDRYA8aX%2BVyITa362tEq%2BlBmXG%2F678UgvCyYR%2Fmh2AXKjEqHXR21uUbwlQw2lOk8kcmxEB1DYt3h9KNVeJ63J9Vo4pbCi9shYlVf3DbrpksB2N0xotSFn0cegVQN&X-Amz-Signature=f7a1b1e02d2a07994bded7570fdb4a7b9c7fb66ed335d9ca3e5da8a123260b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536NKDYJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE9p%2Fyxl2faFoT9UORzqSBUIry2DdP89Tgr8NpF0AJrAiEAg49r4lQp045nHFRT1D%2BeULIBUsNNOIFnoMnnLc69%2FLAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE27kSEj7PK1dbU9NCrcA0nEUlHAxs6lBuyljFYT9luLMJYtQr599gFjH9H%2FPKolIRIDy4FeghEB6xyMa8dYF7WdHZ3ou1akIKH04gNFU819wPSuBibrBAFr54OBmsXzWigJBT7F1otyPfKtH7nBap%2BZoKvHybJ%2BRuvdklJrNhLiCrmrdLE83DsFV2SR8uZmutrYd2TMcwlNSBB7RA5X%2BckNBLtROViTMo4h%2FtDQG%2BCKG3HhSEtQ6unOetqZytVTQTb5%2FdHB6RoMgOSZYcaTYtL%2B%2FtsLYjRuXYPo5E3W%2Fo3Ls7J2%2BEfdHNhrZaiusfIiac%2F%2Fi7XtfwGkPm%2BJWA25F0m7ffSYM%2FZo8sDYca3rHuykKWjgk5TKngA5ZLJNrZFs2NM84XiuUaCgVw3gHEVxmFGGhMlls6%2FZhdWXGl0KB1wHGDMMpiUgNcgI2F8j4xh9BSGbSu0Nget0BGZ8OVbpdyYtNecFaGN%2BStuYFT1gb4eRYQJcw2ZqPHwwoDgwE9DBMtyehRY8RO9cjyavW1gr5BWsW2C2HHMJus8t3DmKx2PDfYs7TXC%2BbsPZSbBoG37QA1KMBCm5iGIqh5gluwJTA6V95FNqKa2%2B%2BlP6qNt88kbr5KM7FNQsIo3W0CMeD0N6OsaT3N71AxuAUxgsMKSI38EGOqUBxlJgw%2Fu8icJCACG5TRvEVEO3SOTJ8hneJ0YCSs3zwB3TQ2z%2B03pKdNwrXPapZVazZO9G7X5owwHDfKXja40Uh8A4QRsrGDaCDDRYA8aX%2BVyITa362tEq%2BlBmXG%2F678UgvCyYR%2Fmh2AXKjEqHXR21uUbwlQw2lOk8kcmxEB1DYt3h9KNVeJ63J9Vo4pbCi9shYlVf3DbrpksB2N0xotSFn0cegVQN&X-Amz-Signature=b217f0e1c57e760324851cebaa7ef7f75255ecca84ac65e470d9c3a20778d3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536NKDYJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE9p%2Fyxl2faFoT9UORzqSBUIry2DdP89Tgr8NpF0AJrAiEAg49r4lQp045nHFRT1D%2BeULIBUsNNOIFnoMnnLc69%2FLAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE27kSEj7PK1dbU9NCrcA0nEUlHAxs6lBuyljFYT9luLMJYtQr599gFjH9H%2FPKolIRIDy4FeghEB6xyMa8dYF7WdHZ3ou1akIKH04gNFU819wPSuBibrBAFr54OBmsXzWigJBT7F1otyPfKtH7nBap%2BZoKvHybJ%2BRuvdklJrNhLiCrmrdLE83DsFV2SR8uZmutrYd2TMcwlNSBB7RA5X%2BckNBLtROViTMo4h%2FtDQG%2BCKG3HhSEtQ6unOetqZytVTQTb5%2FdHB6RoMgOSZYcaTYtL%2B%2FtsLYjRuXYPo5E3W%2Fo3Ls7J2%2BEfdHNhrZaiusfIiac%2F%2Fi7XtfwGkPm%2BJWA25F0m7ffSYM%2FZo8sDYca3rHuykKWjgk5TKngA5ZLJNrZFs2NM84XiuUaCgVw3gHEVxmFGGhMlls6%2FZhdWXGl0KB1wHGDMMpiUgNcgI2F8j4xh9BSGbSu0Nget0BGZ8OVbpdyYtNecFaGN%2BStuYFT1gb4eRYQJcw2ZqPHwwoDgwE9DBMtyehRY8RO9cjyavW1gr5BWsW2C2HHMJus8t3DmKx2PDfYs7TXC%2BbsPZSbBoG37QA1KMBCm5iGIqh5gluwJTA6V95FNqKa2%2B%2BlP6qNt88kbr5KM7FNQsIo3W0CMeD0N6OsaT3N71AxuAUxgsMKSI38EGOqUBxlJgw%2Fu8icJCACG5TRvEVEO3SOTJ8hneJ0YCSs3zwB3TQ2z%2B03pKdNwrXPapZVazZO9G7X5owwHDfKXja40Uh8A4QRsrGDaCDDRYA8aX%2BVyITa362tEq%2BlBmXG%2F678UgvCyYR%2Fmh2AXKjEqHXR21uUbwlQw2lOk8kcmxEB1DYt3h9KNVeJ63J9Vo4pbCi9shYlVf3DbrpksB2N0xotSFn0cegVQN&X-Amz-Signature=59c1d14812e71f64ece35c767c30c0186235885bc813bffc713a906c2b3aafbe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536NKDYJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE9p%2Fyxl2faFoT9UORzqSBUIry2DdP89Tgr8NpF0AJrAiEAg49r4lQp045nHFRT1D%2BeULIBUsNNOIFnoMnnLc69%2FLAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE27kSEj7PK1dbU9NCrcA0nEUlHAxs6lBuyljFYT9luLMJYtQr599gFjH9H%2FPKolIRIDy4FeghEB6xyMa8dYF7WdHZ3ou1akIKH04gNFU819wPSuBibrBAFr54OBmsXzWigJBT7F1otyPfKtH7nBap%2BZoKvHybJ%2BRuvdklJrNhLiCrmrdLE83DsFV2SR8uZmutrYd2TMcwlNSBB7RA5X%2BckNBLtROViTMo4h%2FtDQG%2BCKG3HhSEtQ6unOetqZytVTQTb5%2FdHB6RoMgOSZYcaTYtL%2B%2FtsLYjRuXYPo5E3W%2Fo3Ls7J2%2BEfdHNhrZaiusfIiac%2F%2Fi7XtfwGkPm%2BJWA25F0m7ffSYM%2FZo8sDYca3rHuykKWjgk5TKngA5ZLJNrZFs2NM84XiuUaCgVw3gHEVxmFGGhMlls6%2FZhdWXGl0KB1wHGDMMpiUgNcgI2F8j4xh9BSGbSu0Nget0BGZ8OVbpdyYtNecFaGN%2BStuYFT1gb4eRYQJcw2ZqPHwwoDgwE9DBMtyehRY8RO9cjyavW1gr5BWsW2C2HHMJus8t3DmKx2PDfYs7TXC%2BbsPZSbBoG37QA1KMBCm5iGIqh5gluwJTA6V95FNqKa2%2B%2BlP6qNt88kbr5KM7FNQsIo3W0CMeD0N6OsaT3N71AxuAUxgsMKSI38EGOqUBxlJgw%2Fu8icJCACG5TRvEVEO3SOTJ8hneJ0YCSs3zwB3TQ2z%2B03pKdNwrXPapZVazZO9G7X5owwHDfKXja40Uh8A4QRsrGDaCDDRYA8aX%2BVyITa362tEq%2BlBmXG%2F678UgvCyYR%2Fmh2AXKjEqHXR21uUbwlQw2lOk8kcmxEB1DYt3h9KNVeJ63J9Vo4pbCi9shYlVf3DbrpksB2N0xotSFn0cegVQN&X-Amz-Signature=9a23f4907563c7b781f4e0276924a6289a54bd3ca90761f0c8aa2631810bb210&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536NKDYJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE9p%2Fyxl2faFoT9UORzqSBUIry2DdP89Tgr8NpF0AJrAiEAg49r4lQp045nHFRT1D%2BeULIBUsNNOIFnoMnnLc69%2FLAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE27kSEj7PK1dbU9NCrcA0nEUlHAxs6lBuyljFYT9luLMJYtQr599gFjH9H%2FPKolIRIDy4FeghEB6xyMa8dYF7WdHZ3ou1akIKH04gNFU819wPSuBibrBAFr54OBmsXzWigJBT7F1otyPfKtH7nBap%2BZoKvHybJ%2BRuvdklJrNhLiCrmrdLE83DsFV2SR8uZmutrYd2TMcwlNSBB7RA5X%2BckNBLtROViTMo4h%2FtDQG%2BCKG3HhSEtQ6unOetqZytVTQTb5%2FdHB6RoMgOSZYcaTYtL%2B%2FtsLYjRuXYPo5E3W%2Fo3Ls7J2%2BEfdHNhrZaiusfIiac%2F%2Fi7XtfwGkPm%2BJWA25F0m7ffSYM%2FZo8sDYca3rHuykKWjgk5TKngA5ZLJNrZFs2NM84XiuUaCgVw3gHEVxmFGGhMlls6%2FZhdWXGl0KB1wHGDMMpiUgNcgI2F8j4xh9BSGbSu0Nget0BGZ8OVbpdyYtNecFaGN%2BStuYFT1gb4eRYQJcw2ZqPHwwoDgwE9DBMtyehRY8RO9cjyavW1gr5BWsW2C2HHMJus8t3DmKx2PDfYs7TXC%2BbsPZSbBoG37QA1KMBCm5iGIqh5gluwJTA6V95FNqKa2%2B%2BlP6qNt88kbr5KM7FNQsIo3W0CMeD0N6OsaT3N71AxuAUxgsMKSI38EGOqUBxlJgw%2Fu8icJCACG5TRvEVEO3SOTJ8hneJ0YCSs3zwB3TQ2z%2B03pKdNwrXPapZVazZO9G7X5owwHDfKXja40Uh8A4QRsrGDaCDDRYA8aX%2BVyITa362tEq%2BlBmXG%2F678UgvCyYR%2Fmh2AXKjEqHXR21uUbwlQw2lOk8kcmxEB1DYt3h9KNVeJ63J9Vo4pbCi9shYlVf3DbrpksB2N0xotSFn0cegVQN&X-Amz-Signature=ecdae87897bd62215bdbb92d73a38ad30d54d28521959a54b3af5af998ad28af&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
