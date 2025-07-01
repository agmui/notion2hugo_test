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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S263H4QT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGecuFpHEfDO%2FfI24onCZCSxE7yT4Hl2sMlwx06%2FzMsAAiBNk1E50eiQcw8eOpY%2Fmai2wMKImyNdbqipxG0Z9o7GrSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3RwxXJ9B6YYjqRjjKtwDFdLfgP%2Bu0%2BE%2BXApoNQxb6BadvLuHdxDIQ98IclsYqq5qs3Wy2ymRiHoVMj5iI8lwkuvIfG8Pr032Nhoa0zwv67%2BS8mkyMp5HqeamVYf3BxBVGCkvj02JkVXzJYmiLSuALIV%2B7fwY5sTQ6SkBHKZ%2Fvd2M7n6q14x5ZBLX6a81rwJRZxXcDwPxEjqWZAT%2FTfbKudZi9n2%2Fc09BI54Mvt1vm12BRhQLK6zIjzdqNuW3LeMWfhPQw7r6eon%2BMx2NliLMI%2B7Q5wyQSHSa9Im1tOm%2FabN3AM%2B6s4OmZF2L8HT7MPQnXHcgcLf%2Bb03kgLfRcyFsUOYe9woKjG3n4uN%2F0JrDIAGosmAMAZ5RIXnqvo9w24OrmQ%2BG1%2B0BNUu%2FVh2fRBvWeE%2FjkxFv13Jarv2S6yx4uIzDBdnLDhjyKEj5jhufPEAuZRwzrtQb6pPnQXTWYei7XM3EDA7V%2FfwdY3tMLVkEnyJ9lx39RsR9QHxA3U7jhvz1F%2BNroixeLztEPQUEHyZtUPLlH6ipNmSCDqLUCnGvK%2BgaHaCKu27ndoOYB1hSixRA9R73wcCGxhcZGa38VruBgqKuI0jGpxNfUTyupc%2BcCsmctDdpeUlrOJMgafEm3ul5nSf9Ca7BkdrBuuowm4eQwwY6pgE5dALEUIKr%2F5uYCop9UsxaP0ECho0AJNbSjFhtcO8MfdEmXF96QfOHm0UNxm1lRuJmcaVcxnvKCDX9nuDItE0C0xFFC%2BH0X2wMk2JJY5F4im42g1x9hVxDtK5rNttMa2y6lbVhAr1G7FLGGy2bOdR4NM4aCrqrza5oi1cbomyFVyns2CenHZKfRgj8hsNDmq9B2pzU779927q3l33Aa5uu4KJTfggF&X-Amz-Signature=ebf0015ad6e0bba883595d7223f8977c303bc232af6b7c86f5f0e1d89193d382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S263H4QT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGecuFpHEfDO%2FfI24onCZCSxE7yT4Hl2sMlwx06%2FzMsAAiBNk1E50eiQcw8eOpY%2Fmai2wMKImyNdbqipxG0Z9o7GrSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3RwxXJ9B6YYjqRjjKtwDFdLfgP%2Bu0%2BE%2BXApoNQxb6BadvLuHdxDIQ98IclsYqq5qs3Wy2ymRiHoVMj5iI8lwkuvIfG8Pr032Nhoa0zwv67%2BS8mkyMp5HqeamVYf3BxBVGCkvj02JkVXzJYmiLSuALIV%2B7fwY5sTQ6SkBHKZ%2Fvd2M7n6q14x5ZBLX6a81rwJRZxXcDwPxEjqWZAT%2FTfbKudZi9n2%2Fc09BI54Mvt1vm12BRhQLK6zIjzdqNuW3LeMWfhPQw7r6eon%2BMx2NliLMI%2B7Q5wyQSHSa9Im1tOm%2FabN3AM%2B6s4OmZF2L8HT7MPQnXHcgcLf%2Bb03kgLfRcyFsUOYe9woKjG3n4uN%2F0JrDIAGosmAMAZ5RIXnqvo9w24OrmQ%2BG1%2B0BNUu%2FVh2fRBvWeE%2FjkxFv13Jarv2S6yx4uIzDBdnLDhjyKEj5jhufPEAuZRwzrtQb6pPnQXTWYei7XM3EDA7V%2FfwdY3tMLVkEnyJ9lx39RsR9QHxA3U7jhvz1F%2BNroixeLztEPQUEHyZtUPLlH6ipNmSCDqLUCnGvK%2BgaHaCKu27ndoOYB1hSixRA9R73wcCGxhcZGa38VruBgqKuI0jGpxNfUTyupc%2BcCsmctDdpeUlrOJMgafEm3ul5nSf9Ca7BkdrBuuowm4eQwwY6pgE5dALEUIKr%2F5uYCop9UsxaP0ECho0AJNbSjFhtcO8MfdEmXF96QfOHm0UNxm1lRuJmcaVcxnvKCDX9nuDItE0C0xFFC%2BH0X2wMk2JJY5F4im42g1x9hVxDtK5rNttMa2y6lbVhAr1G7FLGGy2bOdR4NM4aCrqrza5oi1cbomyFVyns2CenHZKfRgj8hsNDmq9B2pzU779927q3l33Aa5uu4KJTfggF&X-Amz-Signature=25202e875fe35ff4ef55b3e2ec5330020438e3d270d5c4de6c84ac222fd5dcb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S263H4QT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGecuFpHEfDO%2FfI24onCZCSxE7yT4Hl2sMlwx06%2FzMsAAiBNk1E50eiQcw8eOpY%2Fmai2wMKImyNdbqipxG0Z9o7GrSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3RwxXJ9B6YYjqRjjKtwDFdLfgP%2Bu0%2BE%2BXApoNQxb6BadvLuHdxDIQ98IclsYqq5qs3Wy2ymRiHoVMj5iI8lwkuvIfG8Pr032Nhoa0zwv67%2BS8mkyMp5HqeamVYf3BxBVGCkvj02JkVXzJYmiLSuALIV%2B7fwY5sTQ6SkBHKZ%2Fvd2M7n6q14x5ZBLX6a81rwJRZxXcDwPxEjqWZAT%2FTfbKudZi9n2%2Fc09BI54Mvt1vm12BRhQLK6zIjzdqNuW3LeMWfhPQw7r6eon%2BMx2NliLMI%2B7Q5wyQSHSa9Im1tOm%2FabN3AM%2B6s4OmZF2L8HT7MPQnXHcgcLf%2Bb03kgLfRcyFsUOYe9woKjG3n4uN%2F0JrDIAGosmAMAZ5RIXnqvo9w24OrmQ%2BG1%2B0BNUu%2FVh2fRBvWeE%2FjkxFv13Jarv2S6yx4uIzDBdnLDhjyKEj5jhufPEAuZRwzrtQb6pPnQXTWYei7XM3EDA7V%2FfwdY3tMLVkEnyJ9lx39RsR9QHxA3U7jhvz1F%2BNroixeLztEPQUEHyZtUPLlH6ipNmSCDqLUCnGvK%2BgaHaCKu27ndoOYB1hSixRA9R73wcCGxhcZGa38VruBgqKuI0jGpxNfUTyupc%2BcCsmctDdpeUlrOJMgafEm3ul5nSf9Ca7BkdrBuuowm4eQwwY6pgE5dALEUIKr%2F5uYCop9UsxaP0ECho0AJNbSjFhtcO8MfdEmXF96QfOHm0UNxm1lRuJmcaVcxnvKCDX9nuDItE0C0xFFC%2BH0X2wMk2JJY5F4im42g1x9hVxDtK5rNttMa2y6lbVhAr1G7FLGGy2bOdR4NM4aCrqrza5oi1cbomyFVyns2CenHZKfRgj8hsNDmq9B2pzU779927q3l33Aa5uu4KJTfggF&X-Amz-Signature=334f5677580fddd5c60c75a338697962c6dfa86bb8bbc6a9a9cb6170065d9a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S263H4QT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGecuFpHEfDO%2FfI24onCZCSxE7yT4Hl2sMlwx06%2FzMsAAiBNk1E50eiQcw8eOpY%2Fmai2wMKImyNdbqipxG0Z9o7GrSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3RwxXJ9B6YYjqRjjKtwDFdLfgP%2Bu0%2BE%2BXApoNQxb6BadvLuHdxDIQ98IclsYqq5qs3Wy2ymRiHoVMj5iI8lwkuvIfG8Pr032Nhoa0zwv67%2BS8mkyMp5HqeamVYf3BxBVGCkvj02JkVXzJYmiLSuALIV%2B7fwY5sTQ6SkBHKZ%2Fvd2M7n6q14x5ZBLX6a81rwJRZxXcDwPxEjqWZAT%2FTfbKudZi9n2%2Fc09BI54Mvt1vm12BRhQLK6zIjzdqNuW3LeMWfhPQw7r6eon%2BMx2NliLMI%2B7Q5wyQSHSa9Im1tOm%2FabN3AM%2B6s4OmZF2L8HT7MPQnXHcgcLf%2Bb03kgLfRcyFsUOYe9woKjG3n4uN%2F0JrDIAGosmAMAZ5RIXnqvo9w24OrmQ%2BG1%2B0BNUu%2FVh2fRBvWeE%2FjkxFv13Jarv2S6yx4uIzDBdnLDhjyKEj5jhufPEAuZRwzrtQb6pPnQXTWYei7XM3EDA7V%2FfwdY3tMLVkEnyJ9lx39RsR9QHxA3U7jhvz1F%2BNroixeLztEPQUEHyZtUPLlH6ipNmSCDqLUCnGvK%2BgaHaCKu27ndoOYB1hSixRA9R73wcCGxhcZGa38VruBgqKuI0jGpxNfUTyupc%2BcCsmctDdpeUlrOJMgafEm3ul5nSf9Ca7BkdrBuuowm4eQwwY6pgE5dALEUIKr%2F5uYCop9UsxaP0ECho0AJNbSjFhtcO8MfdEmXF96QfOHm0UNxm1lRuJmcaVcxnvKCDX9nuDItE0C0xFFC%2BH0X2wMk2JJY5F4im42g1x9hVxDtK5rNttMa2y6lbVhAr1G7FLGGy2bOdR4NM4aCrqrza5oi1cbomyFVyns2CenHZKfRgj8hsNDmq9B2pzU779927q3l33Aa5uu4KJTfggF&X-Amz-Signature=0c1eadba333b9b1d53c941032bc70a39ba57ae4149bb3c872b324a8a577a83ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S263H4QT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGecuFpHEfDO%2FfI24onCZCSxE7yT4Hl2sMlwx06%2FzMsAAiBNk1E50eiQcw8eOpY%2Fmai2wMKImyNdbqipxG0Z9o7GrSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3RwxXJ9B6YYjqRjjKtwDFdLfgP%2Bu0%2BE%2BXApoNQxb6BadvLuHdxDIQ98IclsYqq5qs3Wy2ymRiHoVMj5iI8lwkuvIfG8Pr032Nhoa0zwv67%2BS8mkyMp5HqeamVYf3BxBVGCkvj02JkVXzJYmiLSuALIV%2B7fwY5sTQ6SkBHKZ%2Fvd2M7n6q14x5ZBLX6a81rwJRZxXcDwPxEjqWZAT%2FTfbKudZi9n2%2Fc09BI54Mvt1vm12BRhQLK6zIjzdqNuW3LeMWfhPQw7r6eon%2BMx2NliLMI%2B7Q5wyQSHSa9Im1tOm%2FabN3AM%2B6s4OmZF2L8HT7MPQnXHcgcLf%2Bb03kgLfRcyFsUOYe9woKjG3n4uN%2F0JrDIAGosmAMAZ5RIXnqvo9w24OrmQ%2BG1%2B0BNUu%2FVh2fRBvWeE%2FjkxFv13Jarv2S6yx4uIzDBdnLDhjyKEj5jhufPEAuZRwzrtQb6pPnQXTWYei7XM3EDA7V%2FfwdY3tMLVkEnyJ9lx39RsR9QHxA3U7jhvz1F%2BNroixeLztEPQUEHyZtUPLlH6ipNmSCDqLUCnGvK%2BgaHaCKu27ndoOYB1hSixRA9R73wcCGxhcZGa38VruBgqKuI0jGpxNfUTyupc%2BcCsmctDdpeUlrOJMgafEm3ul5nSf9Ca7BkdrBuuowm4eQwwY6pgE5dALEUIKr%2F5uYCop9UsxaP0ECho0AJNbSjFhtcO8MfdEmXF96QfOHm0UNxm1lRuJmcaVcxnvKCDX9nuDItE0C0xFFC%2BH0X2wMk2JJY5F4im42g1x9hVxDtK5rNttMa2y6lbVhAr1G7FLGGy2bOdR4NM4aCrqrza5oi1cbomyFVyns2CenHZKfRgj8hsNDmq9B2pzU779927q3l33Aa5uu4KJTfggF&X-Amz-Signature=f22698373a54ccd948357c5ffee3ade0cf3dd7d27a77929f2c3653ac3010128b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S263H4QT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGecuFpHEfDO%2FfI24onCZCSxE7yT4Hl2sMlwx06%2FzMsAAiBNk1E50eiQcw8eOpY%2Fmai2wMKImyNdbqipxG0Z9o7GrSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3RwxXJ9B6YYjqRjjKtwDFdLfgP%2Bu0%2BE%2BXApoNQxb6BadvLuHdxDIQ98IclsYqq5qs3Wy2ymRiHoVMj5iI8lwkuvIfG8Pr032Nhoa0zwv67%2BS8mkyMp5HqeamVYf3BxBVGCkvj02JkVXzJYmiLSuALIV%2B7fwY5sTQ6SkBHKZ%2Fvd2M7n6q14x5ZBLX6a81rwJRZxXcDwPxEjqWZAT%2FTfbKudZi9n2%2Fc09BI54Mvt1vm12BRhQLK6zIjzdqNuW3LeMWfhPQw7r6eon%2BMx2NliLMI%2B7Q5wyQSHSa9Im1tOm%2FabN3AM%2B6s4OmZF2L8HT7MPQnXHcgcLf%2Bb03kgLfRcyFsUOYe9woKjG3n4uN%2F0JrDIAGosmAMAZ5RIXnqvo9w24OrmQ%2BG1%2B0BNUu%2FVh2fRBvWeE%2FjkxFv13Jarv2S6yx4uIzDBdnLDhjyKEj5jhufPEAuZRwzrtQb6pPnQXTWYei7XM3EDA7V%2FfwdY3tMLVkEnyJ9lx39RsR9QHxA3U7jhvz1F%2BNroixeLztEPQUEHyZtUPLlH6ipNmSCDqLUCnGvK%2BgaHaCKu27ndoOYB1hSixRA9R73wcCGxhcZGa38VruBgqKuI0jGpxNfUTyupc%2BcCsmctDdpeUlrOJMgafEm3ul5nSf9Ca7BkdrBuuowm4eQwwY6pgE5dALEUIKr%2F5uYCop9UsxaP0ECho0AJNbSjFhtcO8MfdEmXF96QfOHm0UNxm1lRuJmcaVcxnvKCDX9nuDItE0C0xFFC%2BH0X2wMk2JJY5F4im42g1x9hVxDtK5rNttMa2y6lbVhAr1G7FLGGy2bOdR4NM4aCrqrza5oi1cbomyFVyns2CenHZKfRgj8hsNDmq9B2pzU779927q3l33Aa5uu4KJTfggF&X-Amz-Signature=34096217fa5630a1ff894a1d9e8780e71e112230bcc25dffab23657acf7c157d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S263H4QT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGecuFpHEfDO%2FfI24onCZCSxE7yT4Hl2sMlwx06%2FzMsAAiBNk1E50eiQcw8eOpY%2Fmai2wMKImyNdbqipxG0Z9o7GrSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3RwxXJ9B6YYjqRjjKtwDFdLfgP%2Bu0%2BE%2BXApoNQxb6BadvLuHdxDIQ98IclsYqq5qs3Wy2ymRiHoVMj5iI8lwkuvIfG8Pr032Nhoa0zwv67%2BS8mkyMp5HqeamVYf3BxBVGCkvj02JkVXzJYmiLSuALIV%2B7fwY5sTQ6SkBHKZ%2Fvd2M7n6q14x5ZBLX6a81rwJRZxXcDwPxEjqWZAT%2FTfbKudZi9n2%2Fc09BI54Mvt1vm12BRhQLK6zIjzdqNuW3LeMWfhPQw7r6eon%2BMx2NliLMI%2B7Q5wyQSHSa9Im1tOm%2FabN3AM%2B6s4OmZF2L8HT7MPQnXHcgcLf%2Bb03kgLfRcyFsUOYe9woKjG3n4uN%2F0JrDIAGosmAMAZ5RIXnqvo9w24OrmQ%2BG1%2B0BNUu%2FVh2fRBvWeE%2FjkxFv13Jarv2S6yx4uIzDBdnLDhjyKEj5jhufPEAuZRwzrtQb6pPnQXTWYei7XM3EDA7V%2FfwdY3tMLVkEnyJ9lx39RsR9QHxA3U7jhvz1F%2BNroixeLztEPQUEHyZtUPLlH6ipNmSCDqLUCnGvK%2BgaHaCKu27ndoOYB1hSixRA9R73wcCGxhcZGa38VruBgqKuI0jGpxNfUTyupc%2BcCsmctDdpeUlrOJMgafEm3ul5nSf9Ca7BkdrBuuowm4eQwwY6pgE5dALEUIKr%2F5uYCop9UsxaP0ECho0AJNbSjFhtcO8MfdEmXF96QfOHm0UNxm1lRuJmcaVcxnvKCDX9nuDItE0C0xFFC%2BH0X2wMk2JJY5F4im42g1x9hVxDtK5rNttMa2y6lbVhAr1G7FLGGy2bOdR4NM4aCrqrza5oi1cbomyFVyns2CenHZKfRgj8hsNDmq9B2pzU779927q3l33Aa5uu4KJTfggF&X-Amz-Signature=ccfccb6adc5bb1e0db4e4096ee4f9fdf0be6ecd110be1f068f4da1b6da45957d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
