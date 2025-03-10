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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3S3QBA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC2MGyp460m8pkto3%2FJ1P0np45PzjeIo5rxPJrUeTfZ%2BwIhAIuwJZwwaHdCqdVQ%2BWRq8wVp44hljOVeGRUKRe78OOkMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpNAd9FvLN0bmhC%2FMq3APMAnKwtecGvAkAPncBsnDqzinjetGb%2FsMYq3eWRzVTGmtirYJpNKlyu5lmfupetGxbiYAN52HS%2FzSEKelnx0QzN8VUu33W%2B%2FV9ActFL1fYx1%2BM7bDf749EUVG%2B7DrH0plqWgEaGHP7ru4YzGZXcXGy8NSJT7GZwiGpX8jly8zubRBy6oFIaIxyA68cKY0IjZZomrT8wV8pAVPJxFfLEW2mPdV4L5jU%2FbtKUOsHCQ1dg1k3NswV4wn9JZiI8g7jzqVUdbMrLEI82%2FFdIGAuIgYp5PdTOGeGurawlmYWKfatp4pijTAECO0czfit4AcbYJa0JjkHleRzgbuEsqOGYLxvL%2FSoajrBvekdZcUmRnwvMkGwv1Y2KnBR5UHjsYkZSlMtMDxjJfEneYZ0yCOEDlNrt5cBJKOx4j74cHSrnUqfhK%2BHfArqJVoWDe%2F3aBK%2FVVZprH4KuXBKg3Qyz3wrezW6wPs0PA%2FpzhZdoVy8Z3%2FPEZqvbhXwD3CwueFfadI6pCCnWfRbSfV6caZbGod9HM5FZv4n9PkWYoA5NPKik98J1rq%2FDGkHErOZuCJO%2BgkhhH0h629TIB0qQeB3bgTE3LNN6AobGspXP3rOsT3XEuPczGgf6oJs1oexi3NTfjCp6Lq%2BBjqkAVYT2KthqTUSJfEV0PzxUY2rv8s2H22Ib7NMl4Ufuiys4uWesBgV4ZRTmnaw9io0K46f4yYBWWbYTZ%2FfEp1Rj1aqsq%2Fz%2B35wtaK2lZ67VRFaf8gHu%2B0aEgMUb4DCeyuHlf93I1QECl0jqcWHHOwa%2F3%2BMrKgCEVQzcyn8JIbz4vbaGO2HJMjzuOvArHcABW6QGHrgo6tzQSst2k2weBiGvfFIA0J3&X-Amz-Signature=16c08bcd514390a9a5fa10a1fe02dcf01833920b215c6fd73eb9c36aa25b8dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3S3QBA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC2MGyp460m8pkto3%2FJ1P0np45PzjeIo5rxPJrUeTfZ%2BwIhAIuwJZwwaHdCqdVQ%2BWRq8wVp44hljOVeGRUKRe78OOkMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpNAd9FvLN0bmhC%2FMq3APMAnKwtecGvAkAPncBsnDqzinjetGb%2FsMYq3eWRzVTGmtirYJpNKlyu5lmfupetGxbiYAN52HS%2FzSEKelnx0QzN8VUu33W%2B%2FV9ActFL1fYx1%2BM7bDf749EUVG%2B7DrH0plqWgEaGHP7ru4YzGZXcXGy8NSJT7GZwiGpX8jly8zubRBy6oFIaIxyA68cKY0IjZZomrT8wV8pAVPJxFfLEW2mPdV4L5jU%2FbtKUOsHCQ1dg1k3NswV4wn9JZiI8g7jzqVUdbMrLEI82%2FFdIGAuIgYp5PdTOGeGurawlmYWKfatp4pijTAECO0czfit4AcbYJa0JjkHleRzgbuEsqOGYLxvL%2FSoajrBvekdZcUmRnwvMkGwv1Y2KnBR5UHjsYkZSlMtMDxjJfEneYZ0yCOEDlNrt5cBJKOx4j74cHSrnUqfhK%2BHfArqJVoWDe%2F3aBK%2FVVZprH4KuXBKg3Qyz3wrezW6wPs0PA%2FpzhZdoVy8Z3%2FPEZqvbhXwD3CwueFfadI6pCCnWfRbSfV6caZbGod9HM5FZv4n9PkWYoA5NPKik98J1rq%2FDGkHErOZuCJO%2BgkhhH0h629TIB0qQeB3bgTE3LNN6AobGspXP3rOsT3XEuPczGgf6oJs1oexi3NTfjCp6Lq%2BBjqkAVYT2KthqTUSJfEV0PzxUY2rv8s2H22Ib7NMl4Ufuiys4uWesBgV4ZRTmnaw9io0K46f4yYBWWbYTZ%2FfEp1Rj1aqsq%2Fz%2B35wtaK2lZ67VRFaf8gHu%2B0aEgMUb4DCeyuHlf93I1QECl0jqcWHHOwa%2F3%2BMrKgCEVQzcyn8JIbz4vbaGO2HJMjzuOvArHcABW6QGHrgo6tzQSst2k2weBiGvfFIA0J3&X-Amz-Signature=05a2c68104cb78ec37f486ef27f754f59327e70f57c01a41676bcbafcdf67001&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3S3QBA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC2MGyp460m8pkto3%2FJ1P0np45PzjeIo5rxPJrUeTfZ%2BwIhAIuwJZwwaHdCqdVQ%2BWRq8wVp44hljOVeGRUKRe78OOkMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpNAd9FvLN0bmhC%2FMq3APMAnKwtecGvAkAPncBsnDqzinjetGb%2FsMYq3eWRzVTGmtirYJpNKlyu5lmfupetGxbiYAN52HS%2FzSEKelnx0QzN8VUu33W%2B%2FV9ActFL1fYx1%2BM7bDf749EUVG%2B7DrH0plqWgEaGHP7ru4YzGZXcXGy8NSJT7GZwiGpX8jly8zubRBy6oFIaIxyA68cKY0IjZZomrT8wV8pAVPJxFfLEW2mPdV4L5jU%2FbtKUOsHCQ1dg1k3NswV4wn9JZiI8g7jzqVUdbMrLEI82%2FFdIGAuIgYp5PdTOGeGurawlmYWKfatp4pijTAECO0czfit4AcbYJa0JjkHleRzgbuEsqOGYLxvL%2FSoajrBvekdZcUmRnwvMkGwv1Y2KnBR5UHjsYkZSlMtMDxjJfEneYZ0yCOEDlNrt5cBJKOx4j74cHSrnUqfhK%2BHfArqJVoWDe%2F3aBK%2FVVZprH4KuXBKg3Qyz3wrezW6wPs0PA%2FpzhZdoVy8Z3%2FPEZqvbhXwD3CwueFfadI6pCCnWfRbSfV6caZbGod9HM5FZv4n9PkWYoA5NPKik98J1rq%2FDGkHErOZuCJO%2BgkhhH0h629TIB0qQeB3bgTE3LNN6AobGspXP3rOsT3XEuPczGgf6oJs1oexi3NTfjCp6Lq%2BBjqkAVYT2KthqTUSJfEV0PzxUY2rv8s2H22Ib7NMl4Ufuiys4uWesBgV4ZRTmnaw9io0K46f4yYBWWbYTZ%2FfEp1Rj1aqsq%2Fz%2B35wtaK2lZ67VRFaf8gHu%2B0aEgMUb4DCeyuHlf93I1QECl0jqcWHHOwa%2F3%2BMrKgCEVQzcyn8JIbz4vbaGO2HJMjzuOvArHcABW6QGHrgo6tzQSst2k2weBiGvfFIA0J3&X-Amz-Signature=3db9af50444d75cbd683c1d1f18f3ee2385929ac34ec22361ce3eb6a7444d2bd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3S3QBA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC2MGyp460m8pkto3%2FJ1P0np45PzjeIo5rxPJrUeTfZ%2BwIhAIuwJZwwaHdCqdVQ%2BWRq8wVp44hljOVeGRUKRe78OOkMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpNAd9FvLN0bmhC%2FMq3APMAnKwtecGvAkAPncBsnDqzinjetGb%2FsMYq3eWRzVTGmtirYJpNKlyu5lmfupetGxbiYAN52HS%2FzSEKelnx0QzN8VUu33W%2B%2FV9ActFL1fYx1%2BM7bDf749EUVG%2B7DrH0plqWgEaGHP7ru4YzGZXcXGy8NSJT7GZwiGpX8jly8zubRBy6oFIaIxyA68cKY0IjZZomrT8wV8pAVPJxFfLEW2mPdV4L5jU%2FbtKUOsHCQ1dg1k3NswV4wn9JZiI8g7jzqVUdbMrLEI82%2FFdIGAuIgYp5PdTOGeGurawlmYWKfatp4pijTAECO0czfit4AcbYJa0JjkHleRzgbuEsqOGYLxvL%2FSoajrBvekdZcUmRnwvMkGwv1Y2KnBR5UHjsYkZSlMtMDxjJfEneYZ0yCOEDlNrt5cBJKOx4j74cHSrnUqfhK%2BHfArqJVoWDe%2F3aBK%2FVVZprH4KuXBKg3Qyz3wrezW6wPs0PA%2FpzhZdoVy8Z3%2FPEZqvbhXwD3CwueFfadI6pCCnWfRbSfV6caZbGod9HM5FZv4n9PkWYoA5NPKik98J1rq%2FDGkHErOZuCJO%2BgkhhH0h629TIB0qQeB3bgTE3LNN6AobGspXP3rOsT3XEuPczGgf6oJs1oexi3NTfjCp6Lq%2BBjqkAVYT2KthqTUSJfEV0PzxUY2rv8s2H22Ib7NMl4Ufuiys4uWesBgV4ZRTmnaw9io0K46f4yYBWWbYTZ%2FfEp1Rj1aqsq%2Fz%2B35wtaK2lZ67VRFaf8gHu%2B0aEgMUb4DCeyuHlf93I1QECl0jqcWHHOwa%2F3%2BMrKgCEVQzcyn8JIbz4vbaGO2HJMjzuOvArHcABW6QGHrgo6tzQSst2k2weBiGvfFIA0J3&X-Amz-Signature=883ae081983350680334b4bab0f2c7bb723ee943faa81a79b701f01b2f3c79b5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3S3QBA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC2MGyp460m8pkto3%2FJ1P0np45PzjeIo5rxPJrUeTfZ%2BwIhAIuwJZwwaHdCqdVQ%2BWRq8wVp44hljOVeGRUKRe78OOkMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpNAd9FvLN0bmhC%2FMq3APMAnKwtecGvAkAPncBsnDqzinjetGb%2FsMYq3eWRzVTGmtirYJpNKlyu5lmfupetGxbiYAN52HS%2FzSEKelnx0QzN8VUu33W%2B%2FV9ActFL1fYx1%2BM7bDf749EUVG%2B7DrH0plqWgEaGHP7ru4YzGZXcXGy8NSJT7GZwiGpX8jly8zubRBy6oFIaIxyA68cKY0IjZZomrT8wV8pAVPJxFfLEW2mPdV4L5jU%2FbtKUOsHCQ1dg1k3NswV4wn9JZiI8g7jzqVUdbMrLEI82%2FFdIGAuIgYp5PdTOGeGurawlmYWKfatp4pijTAECO0czfit4AcbYJa0JjkHleRzgbuEsqOGYLxvL%2FSoajrBvekdZcUmRnwvMkGwv1Y2KnBR5UHjsYkZSlMtMDxjJfEneYZ0yCOEDlNrt5cBJKOx4j74cHSrnUqfhK%2BHfArqJVoWDe%2F3aBK%2FVVZprH4KuXBKg3Qyz3wrezW6wPs0PA%2FpzhZdoVy8Z3%2FPEZqvbhXwD3CwueFfadI6pCCnWfRbSfV6caZbGod9HM5FZv4n9PkWYoA5NPKik98J1rq%2FDGkHErOZuCJO%2BgkhhH0h629TIB0qQeB3bgTE3LNN6AobGspXP3rOsT3XEuPczGgf6oJs1oexi3NTfjCp6Lq%2BBjqkAVYT2KthqTUSJfEV0PzxUY2rv8s2H22Ib7NMl4Ufuiys4uWesBgV4ZRTmnaw9io0K46f4yYBWWbYTZ%2FfEp1Rj1aqsq%2Fz%2B35wtaK2lZ67VRFaf8gHu%2B0aEgMUb4DCeyuHlf93I1QECl0jqcWHHOwa%2F3%2BMrKgCEVQzcyn8JIbz4vbaGO2HJMjzuOvArHcABW6QGHrgo6tzQSst2k2weBiGvfFIA0J3&X-Amz-Signature=c13d22ab0646c0f2e95dda23eafca233c6e6029f7c202f0fe3094c9e98e2bb87&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3S3QBA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC2MGyp460m8pkto3%2FJ1P0np45PzjeIo5rxPJrUeTfZ%2BwIhAIuwJZwwaHdCqdVQ%2BWRq8wVp44hljOVeGRUKRe78OOkMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpNAd9FvLN0bmhC%2FMq3APMAnKwtecGvAkAPncBsnDqzinjetGb%2FsMYq3eWRzVTGmtirYJpNKlyu5lmfupetGxbiYAN52HS%2FzSEKelnx0QzN8VUu33W%2B%2FV9ActFL1fYx1%2BM7bDf749EUVG%2B7DrH0plqWgEaGHP7ru4YzGZXcXGy8NSJT7GZwiGpX8jly8zubRBy6oFIaIxyA68cKY0IjZZomrT8wV8pAVPJxFfLEW2mPdV4L5jU%2FbtKUOsHCQ1dg1k3NswV4wn9JZiI8g7jzqVUdbMrLEI82%2FFdIGAuIgYp5PdTOGeGurawlmYWKfatp4pijTAECO0czfit4AcbYJa0JjkHleRzgbuEsqOGYLxvL%2FSoajrBvekdZcUmRnwvMkGwv1Y2KnBR5UHjsYkZSlMtMDxjJfEneYZ0yCOEDlNrt5cBJKOx4j74cHSrnUqfhK%2BHfArqJVoWDe%2F3aBK%2FVVZprH4KuXBKg3Qyz3wrezW6wPs0PA%2FpzhZdoVy8Z3%2FPEZqvbhXwD3CwueFfadI6pCCnWfRbSfV6caZbGod9HM5FZv4n9PkWYoA5NPKik98J1rq%2FDGkHErOZuCJO%2BgkhhH0h629TIB0qQeB3bgTE3LNN6AobGspXP3rOsT3XEuPczGgf6oJs1oexi3NTfjCp6Lq%2BBjqkAVYT2KthqTUSJfEV0PzxUY2rv8s2H22Ib7NMl4Ufuiys4uWesBgV4ZRTmnaw9io0K46f4yYBWWbYTZ%2FfEp1Rj1aqsq%2Fz%2B35wtaK2lZ67VRFaf8gHu%2B0aEgMUb4DCeyuHlf93I1QECl0jqcWHHOwa%2F3%2BMrKgCEVQzcyn8JIbz4vbaGO2HJMjzuOvArHcABW6QGHrgo6tzQSst2k2weBiGvfFIA0J3&X-Amz-Signature=5aeb269b7d5b7037d37ee327a409066773cc6996fa18992d0cb79290c35b3dca&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3S3QBA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC2MGyp460m8pkto3%2FJ1P0np45PzjeIo5rxPJrUeTfZ%2BwIhAIuwJZwwaHdCqdVQ%2BWRq8wVp44hljOVeGRUKRe78OOkMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpNAd9FvLN0bmhC%2FMq3APMAnKwtecGvAkAPncBsnDqzinjetGb%2FsMYq3eWRzVTGmtirYJpNKlyu5lmfupetGxbiYAN52HS%2FzSEKelnx0QzN8VUu33W%2B%2FV9ActFL1fYx1%2BM7bDf749EUVG%2B7DrH0plqWgEaGHP7ru4YzGZXcXGy8NSJT7GZwiGpX8jly8zubRBy6oFIaIxyA68cKY0IjZZomrT8wV8pAVPJxFfLEW2mPdV4L5jU%2FbtKUOsHCQ1dg1k3NswV4wn9JZiI8g7jzqVUdbMrLEI82%2FFdIGAuIgYp5PdTOGeGurawlmYWKfatp4pijTAECO0czfit4AcbYJa0JjkHleRzgbuEsqOGYLxvL%2FSoajrBvekdZcUmRnwvMkGwv1Y2KnBR5UHjsYkZSlMtMDxjJfEneYZ0yCOEDlNrt5cBJKOx4j74cHSrnUqfhK%2BHfArqJVoWDe%2F3aBK%2FVVZprH4KuXBKg3Qyz3wrezW6wPs0PA%2FpzhZdoVy8Z3%2FPEZqvbhXwD3CwueFfadI6pCCnWfRbSfV6caZbGod9HM5FZv4n9PkWYoA5NPKik98J1rq%2FDGkHErOZuCJO%2BgkhhH0h629TIB0qQeB3bgTE3LNN6AobGspXP3rOsT3XEuPczGgf6oJs1oexi3NTfjCp6Lq%2BBjqkAVYT2KthqTUSJfEV0PzxUY2rv8s2H22Ib7NMl4Ufuiys4uWesBgV4ZRTmnaw9io0K46f4yYBWWbYTZ%2FfEp1Rj1aqsq%2Fz%2B35wtaK2lZ67VRFaf8gHu%2B0aEgMUb4DCeyuHlf93I1QECl0jqcWHHOwa%2F3%2BMrKgCEVQzcyn8JIbz4vbaGO2HJMjzuOvArHcABW6QGHrgo6tzQSst2k2weBiGvfFIA0J3&X-Amz-Signature=c203017feb3de0d74f3c3564b015fa77c70937e5e4b03f93b70b2eba3d0e5ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
