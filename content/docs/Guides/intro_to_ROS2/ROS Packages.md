---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLYENIO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIEufEERd6czKn3FUZT3r0okzaIh9R3PnQBWKmgRHoXPeAiBXzllk%2BlJ9%2BkPflI6R0V6kJ1yF7L6pM3k61Y0dbniKVSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMKWyIWNBdUQE6CdnoKtwDWaE7tT2t9PneBWpEPN0l%2BmMf%2BucCVBrAguQQRKGQBTKojqSkEdXsKr4WMOS0jU2FDtACOtX5gVztGhVdtuOlYQWnDFuRJ5c%2BIglgLJhrw97MWjDh%2BxFZe7H8JE%2FYGMD40jpyG61xV24KhUM3YA8tC4Z0LmW%2BAgGAQOx5efguwPBVm2BlmzphcF3ozaA92GZJt8X74a81MuSQLPx%2Bp%2FWkTJqs14cWSsoXsvOOsUDU2FF9L8x%2BOHXUKQkzYEuxV4PXCFfAus9wTwgNneZKd%2B%2BHWBU0rPNWM7m%2Bk4NBTnCImaxry9SraAhzAf6Sn350v%2B0t5jA424kcR6xDLtBDH4Sk9G%2BZX5DUmykXj71uTaP0fcney1XAGZJAJrnT2JJInN4BammBBNOfhacdVcirnkisyD0F9AHJ6ytkZ6GIQUzOjuLptDHeLZeadYkGEKzzKL03vZSRngqDSuqiL%2BjTEestFUmKumQUJ%2BJQhUMu9NoAFiR94MVLZ%2FkKjneLPQ%2F5EKcrPJf76wumB%2F%2FuwaNBnNrDx1Y3xAKABPGyy8QVJ1cMZ8MlrBWQlV8aRWpJ1WiyiyUsKXzxqMWSr94qI4u0h3iLCL4lHPuQ5lP%2FZHg%2BDEdpm5BdDyrfNCkyYYflHCAw6bCJxAY6pgGiVG9XvNQW24x5jqHu95QfT5o8P5%2FC0nT4Nm6yXPhgvQRst3NIa%2FcC67OmUU5Tl9nMpKLL9mY%2BR8VIiRbK9VArW%2FQhBGmc7qCZIF3Gh63Dly4rVHzzXYQYL%2Bh%2BqyCBpt6l0qyuEvKrXtPQEi2efyCD4XCunJ9UyXXQAnrUJaKBGblTULZMAQV21MBOtiHVWeEdg6U7JDD0hmllk8t08OSYvQ0jsYuT&X-Amz-Signature=66be9cec4be68435745323c7f6398748c8803461925ad0a6f8e211ef4bf703ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLYENIO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIEufEERd6czKn3FUZT3r0okzaIh9R3PnQBWKmgRHoXPeAiBXzllk%2BlJ9%2BkPflI6R0V6kJ1yF7L6pM3k61Y0dbniKVSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMKWyIWNBdUQE6CdnoKtwDWaE7tT2t9PneBWpEPN0l%2BmMf%2BucCVBrAguQQRKGQBTKojqSkEdXsKr4WMOS0jU2FDtACOtX5gVztGhVdtuOlYQWnDFuRJ5c%2BIglgLJhrw97MWjDh%2BxFZe7H8JE%2FYGMD40jpyG61xV24KhUM3YA8tC4Z0LmW%2BAgGAQOx5efguwPBVm2BlmzphcF3ozaA92GZJt8X74a81MuSQLPx%2Bp%2FWkTJqs14cWSsoXsvOOsUDU2FF9L8x%2BOHXUKQkzYEuxV4PXCFfAus9wTwgNneZKd%2B%2BHWBU0rPNWM7m%2Bk4NBTnCImaxry9SraAhzAf6Sn350v%2B0t5jA424kcR6xDLtBDH4Sk9G%2BZX5DUmykXj71uTaP0fcney1XAGZJAJrnT2JJInN4BammBBNOfhacdVcirnkisyD0F9AHJ6ytkZ6GIQUzOjuLptDHeLZeadYkGEKzzKL03vZSRngqDSuqiL%2BjTEestFUmKumQUJ%2BJQhUMu9NoAFiR94MVLZ%2FkKjneLPQ%2F5EKcrPJf76wumB%2F%2FuwaNBnNrDx1Y3xAKABPGyy8QVJ1cMZ8MlrBWQlV8aRWpJ1WiyiyUsKXzxqMWSr94qI4u0h3iLCL4lHPuQ5lP%2FZHg%2BDEdpm5BdDyrfNCkyYYflHCAw6bCJxAY6pgGiVG9XvNQW24x5jqHu95QfT5o8P5%2FC0nT4Nm6yXPhgvQRst3NIa%2FcC67OmUU5Tl9nMpKLL9mY%2BR8VIiRbK9VArW%2FQhBGmc7qCZIF3Gh63Dly4rVHzzXYQYL%2Bh%2BqyCBpt6l0qyuEvKrXtPQEi2efyCD4XCunJ9UyXXQAnrUJaKBGblTULZMAQV21MBOtiHVWeEdg6U7JDD0hmllk8t08OSYvQ0jsYuT&X-Amz-Signature=e05f4ee49143e78ce93c331669994a53dbb9bcaad059dc6c546795025b7ffc86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLYENIO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIEufEERd6czKn3FUZT3r0okzaIh9R3PnQBWKmgRHoXPeAiBXzllk%2BlJ9%2BkPflI6R0V6kJ1yF7L6pM3k61Y0dbniKVSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMKWyIWNBdUQE6CdnoKtwDWaE7tT2t9PneBWpEPN0l%2BmMf%2BucCVBrAguQQRKGQBTKojqSkEdXsKr4WMOS0jU2FDtACOtX5gVztGhVdtuOlYQWnDFuRJ5c%2BIglgLJhrw97MWjDh%2BxFZe7H8JE%2FYGMD40jpyG61xV24KhUM3YA8tC4Z0LmW%2BAgGAQOx5efguwPBVm2BlmzphcF3ozaA92GZJt8X74a81MuSQLPx%2Bp%2FWkTJqs14cWSsoXsvOOsUDU2FF9L8x%2BOHXUKQkzYEuxV4PXCFfAus9wTwgNneZKd%2B%2BHWBU0rPNWM7m%2Bk4NBTnCImaxry9SraAhzAf6Sn350v%2B0t5jA424kcR6xDLtBDH4Sk9G%2BZX5DUmykXj71uTaP0fcney1XAGZJAJrnT2JJInN4BammBBNOfhacdVcirnkisyD0F9AHJ6ytkZ6GIQUzOjuLptDHeLZeadYkGEKzzKL03vZSRngqDSuqiL%2BjTEestFUmKumQUJ%2BJQhUMu9NoAFiR94MVLZ%2FkKjneLPQ%2F5EKcrPJf76wumB%2F%2FuwaNBnNrDx1Y3xAKABPGyy8QVJ1cMZ8MlrBWQlV8aRWpJ1WiyiyUsKXzxqMWSr94qI4u0h3iLCL4lHPuQ5lP%2FZHg%2BDEdpm5BdDyrfNCkyYYflHCAw6bCJxAY6pgGiVG9XvNQW24x5jqHu95QfT5o8P5%2FC0nT4Nm6yXPhgvQRst3NIa%2FcC67OmUU5Tl9nMpKLL9mY%2BR8VIiRbK9VArW%2FQhBGmc7qCZIF3Gh63Dly4rVHzzXYQYL%2Bh%2BqyCBpt6l0qyuEvKrXtPQEi2efyCD4XCunJ9UyXXQAnrUJaKBGblTULZMAQV21MBOtiHVWeEdg6U7JDD0hmllk8t08OSYvQ0jsYuT&X-Amz-Signature=cd049db04d590a414d5500a2e50a49a1ee1e2519285b250417b31234a3099b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLYENIO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIEufEERd6czKn3FUZT3r0okzaIh9R3PnQBWKmgRHoXPeAiBXzllk%2BlJ9%2BkPflI6R0V6kJ1yF7L6pM3k61Y0dbniKVSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMKWyIWNBdUQE6CdnoKtwDWaE7tT2t9PneBWpEPN0l%2BmMf%2BucCVBrAguQQRKGQBTKojqSkEdXsKr4WMOS0jU2FDtACOtX5gVztGhVdtuOlYQWnDFuRJ5c%2BIglgLJhrw97MWjDh%2BxFZe7H8JE%2FYGMD40jpyG61xV24KhUM3YA8tC4Z0LmW%2BAgGAQOx5efguwPBVm2BlmzphcF3ozaA92GZJt8X74a81MuSQLPx%2Bp%2FWkTJqs14cWSsoXsvOOsUDU2FF9L8x%2BOHXUKQkzYEuxV4PXCFfAus9wTwgNneZKd%2B%2BHWBU0rPNWM7m%2Bk4NBTnCImaxry9SraAhzAf6Sn350v%2B0t5jA424kcR6xDLtBDH4Sk9G%2BZX5DUmykXj71uTaP0fcney1XAGZJAJrnT2JJInN4BammBBNOfhacdVcirnkisyD0F9AHJ6ytkZ6GIQUzOjuLptDHeLZeadYkGEKzzKL03vZSRngqDSuqiL%2BjTEestFUmKumQUJ%2BJQhUMu9NoAFiR94MVLZ%2FkKjneLPQ%2F5EKcrPJf76wumB%2F%2FuwaNBnNrDx1Y3xAKABPGyy8QVJ1cMZ8MlrBWQlV8aRWpJ1WiyiyUsKXzxqMWSr94qI4u0h3iLCL4lHPuQ5lP%2FZHg%2BDEdpm5BdDyrfNCkyYYflHCAw6bCJxAY6pgGiVG9XvNQW24x5jqHu95QfT5o8P5%2FC0nT4Nm6yXPhgvQRst3NIa%2FcC67OmUU5Tl9nMpKLL9mY%2BR8VIiRbK9VArW%2FQhBGmc7qCZIF3Gh63Dly4rVHzzXYQYL%2Bh%2BqyCBpt6l0qyuEvKrXtPQEi2efyCD4XCunJ9UyXXQAnrUJaKBGblTULZMAQV21MBOtiHVWeEdg6U7JDD0hmllk8t08OSYvQ0jsYuT&X-Amz-Signature=ca0515f7fbade9c6aa45234af78b566113452a4e74a88300a73c6b698cdd3156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLYENIO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIEufEERd6czKn3FUZT3r0okzaIh9R3PnQBWKmgRHoXPeAiBXzllk%2BlJ9%2BkPflI6R0V6kJ1yF7L6pM3k61Y0dbniKVSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMKWyIWNBdUQE6CdnoKtwDWaE7tT2t9PneBWpEPN0l%2BmMf%2BucCVBrAguQQRKGQBTKojqSkEdXsKr4WMOS0jU2FDtACOtX5gVztGhVdtuOlYQWnDFuRJ5c%2BIglgLJhrw97MWjDh%2BxFZe7H8JE%2FYGMD40jpyG61xV24KhUM3YA8tC4Z0LmW%2BAgGAQOx5efguwPBVm2BlmzphcF3ozaA92GZJt8X74a81MuSQLPx%2Bp%2FWkTJqs14cWSsoXsvOOsUDU2FF9L8x%2BOHXUKQkzYEuxV4PXCFfAus9wTwgNneZKd%2B%2BHWBU0rPNWM7m%2Bk4NBTnCImaxry9SraAhzAf6Sn350v%2B0t5jA424kcR6xDLtBDH4Sk9G%2BZX5DUmykXj71uTaP0fcney1XAGZJAJrnT2JJInN4BammBBNOfhacdVcirnkisyD0F9AHJ6ytkZ6GIQUzOjuLptDHeLZeadYkGEKzzKL03vZSRngqDSuqiL%2BjTEestFUmKumQUJ%2BJQhUMu9NoAFiR94MVLZ%2FkKjneLPQ%2F5EKcrPJf76wumB%2F%2FuwaNBnNrDx1Y3xAKABPGyy8QVJ1cMZ8MlrBWQlV8aRWpJ1WiyiyUsKXzxqMWSr94qI4u0h3iLCL4lHPuQ5lP%2FZHg%2BDEdpm5BdDyrfNCkyYYflHCAw6bCJxAY6pgGiVG9XvNQW24x5jqHu95QfT5o8P5%2FC0nT4Nm6yXPhgvQRst3NIa%2FcC67OmUU5Tl9nMpKLL9mY%2BR8VIiRbK9VArW%2FQhBGmc7qCZIF3Gh63Dly4rVHzzXYQYL%2Bh%2BqyCBpt6l0qyuEvKrXtPQEi2efyCD4XCunJ9UyXXQAnrUJaKBGblTULZMAQV21MBOtiHVWeEdg6U7JDD0hmllk8t08OSYvQ0jsYuT&X-Amz-Signature=1b9753fa5216d6483d28ab4da9a0cbfbf7774708713a712bf80aed3197e09cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLYENIO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIEufEERd6czKn3FUZT3r0okzaIh9R3PnQBWKmgRHoXPeAiBXzllk%2BlJ9%2BkPflI6R0V6kJ1yF7L6pM3k61Y0dbniKVSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMKWyIWNBdUQE6CdnoKtwDWaE7tT2t9PneBWpEPN0l%2BmMf%2BucCVBrAguQQRKGQBTKojqSkEdXsKr4WMOS0jU2FDtACOtX5gVztGhVdtuOlYQWnDFuRJ5c%2BIglgLJhrw97MWjDh%2BxFZe7H8JE%2FYGMD40jpyG61xV24KhUM3YA8tC4Z0LmW%2BAgGAQOx5efguwPBVm2BlmzphcF3ozaA92GZJt8X74a81MuSQLPx%2Bp%2FWkTJqs14cWSsoXsvOOsUDU2FF9L8x%2BOHXUKQkzYEuxV4PXCFfAus9wTwgNneZKd%2B%2BHWBU0rPNWM7m%2Bk4NBTnCImaxry9SraAhzAf6Sn350v%2B0t5jA424kcR6xDLtBDH4Sk9G%2BZX5DUmykXj71uTaP0fcney1XAGZJAJrnT2JJInN4BammBBNOfhacdVcirnkisyD0F9AHJ6ytkZ6GIQUzOjuLptDHeLZeadYkGEKzzKL03vZSRngqDSuqiL%2BjTEestFUmKumQUJ%2BJQhUMu9NoAFiR94MVLZ%2FkKjneLPQ%2F5EKcrPJf76wumB%2F%2FuwaNBnNrDx1Y3xAKABPGyy8QVJ1cMZ8MlrBWQlV8aRWpJ1WiyiyUsKXzxqMWSr94qI4u0h3iLCL4lHPuQ5lP%2FZHg%2BDEdpm5BdDyrfNCkyYYflHCAw6bCJxAY6pgGiVG9XvNQW24x5jqHu95QfT5o8P5%2FC0nT4Nm6yXPhgvQRst3NIa%2FcC67OmUU5Tl9nMpKLL9mY%2BR8VIiRbK9VArW%2FQhBGmc7qCZIF3Gh63Dly4rVHzzXYQYL%2Bh%2BqyCBpt6l0qyuEvKrXtPQEi2efyCD4XCunJ9UyXXQAnrUJaKBGblTULZMAQV21MBOtiHVWeEdg6U7JDD0hmllk8t08OSYvQ0jsYuT&X-Amz-Signature=5d8366c3dddb350a21075137527b6c4fd39237b1cf180ef16cfe2aef27adf34c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLYENIO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIEufEERd6czKn3FUZT3r0okzaIh9R3PnQBWKmgRHoXPeAiBXzllk%2BlJ9%2BkPflI6R0V6kJ1yF7L6pM3k61Y0dbniKVSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMKWyIWNBdUQE6CdnoKtwDWaE7tT2t9PneBWpEPN0l%2BmMf%2BucCVBrAguQQRKGQBTKojqSkEdXsKr4WMOS0jU2FDtACOtX5gVztGhVdtuOlYQWnDFuRJ5c%2BIglgLJhrw97MWjDh%2BxFZe7H8JE%2FYGMD40jpyG61xV24KhUM3YA8tC4Z0LmW%2BAgGAQOx5efguwPBVm2BlmzphcF3ozaA92GZJt8X74a81MuSQLPx%2Bp%2FWkTJqs14cWSsoXsvOOsUDU2FF9L8x%2BOHXUKQkzYEuxV4PXCFfAus9wTwgNneZKd%2B%2BHWBU0rPNWM7m%2Bk4NBTnCImaxry9SraAhzAf6Sn350v%2B0t5jA424kcR6xDLtBDH4Sk9G%2BZX5DUmykXj71uTaP0fcney1XAGZJAJrnT2JJInN4BammBBNOfhacdVcirnkisyD0F9AHJ6ytkZ6GIQUzOjuLptDHeLZeadYkGEKzzKL03vZSRngqDSuqiL%2BjTEestFUmKumQUJ%2BJQhUMu9NoAFiR94MVLZ%2FkKjneLPQ%2F5EKcrPJf76wumB%2F%2FuwaNBnNrDx1Y3xAKABPGyy8QVJ1cMZ8MlrBWQlV8aRWpJ1WiyiyUsKXzxqMWSr94qI4u0h3iLCL4lHPuQ5lP%2FZHg%2BDEdpm5BdDyrfNCkyYYflHCAw6bCJxAY6pgGiVG9XvNQW24x5jqHu95QfT5o8P5%2FC0nT4Nm6yXPhgvQRst3NIa%2FcC67OmUU5Tl9nMpKLL9mY%2BR8VIiRbK9VArW%2FQhBGmc7qCZIF3Gh63Dly4rVHzzXYQYL%2Bh%2BqyCBpt6l0qyuEvKrXtPQEi2efyCD4XCunJ9UyXXQAnrUJaKBGblTULZMAQV21MBOtiHVWeEdg6U7JDD0hmllk8t08OSYvQ0jsYuT&X-Amz-Signature=9f1163874ad9379cad55b515330da5664616cd85ce9f871efe6d586079b72237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
