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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBGVBMG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQC1viTMUgazuJco8boTu8LPjelrlVhI7atbMLXQOZrrtAIgBMfEmTE9cIaDo19ciZnnWT37G3czK1UJXQGq98Ezq58qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4J4LTYFb4o5Y%2BBmircA6to4%2Fu%2BAmZ4kbtnQ18TFToSeCr4Ruh98KOH3imRyoXHkiRxZneMWNrX9YOSE7IJ3W%2FxVaJ7NrQNrBWQrtm0MN8dWexKf2dcMJkiOP7FEheQJZtDLZQy%2FlsjTGxdjtAXSm04Ern74rIBm6uG0%2BoH4Px%2BuNOxcJyvE3Xo5AnyH8mAE%2FDA2jrlBqgcZn60gLYwdIWZ%2Ftt3aMikkoH3Zm9bm8aC7L7PYuXdWmdZaYgNXsYf0I4g0YkngZMtgBmZiro2ugrV0a8xOZ7DHX54lPKV%2FDllgIOHgNZAYg9I8PhFpudekrYypM2DSe0j1LeetTojUIqNS3ez%2FkRWn9UiH0aquEjZSqYQbUlje23aTeMqnSgdAjcyLvg1o4bH4s2S2RqYph3gBCgRNqi4B%2FNNm8BhN%2BtvxiI3K3WrCGKQ5SWTBKSxoR2wLB9%2B5oFVT96itD%2BGbjMypMuQHY214rg7FlLnOXeoBvwyyN%2B2kXwP3f094dZQdNN6%2BKbmwDGqhuYvEdArdkIt34jBUz0U3a0%2FRyGEVbwCutqHARuEz4Xsx%2Byxs3BPHsbUfFHjS408L3OIC%2Bx5G5cB2rCF2JCnQe1c5zvck2rvSaI90WeLNvIV0rEUQFXnYoJizpIyJdwSgjwgMNu3578GOqUBPsqdl73FOSaJWdK4OzBDZpU5IreTeySTXAqNswmEO7pZ6kACvXcp6HRnOBm71G43X2kNVWZiSm8PYmr01qriuaG%2B7NHZ7yuWxbLbfyDkYq%2F1AZs%2Fjj2boKlMxgrqHezsXHM0DISjv0x1KHAFUxXvT86tS3djHAoiVE7stvVlmkxT1WMK9bMYi0IKwLaLMd5r2I3juYLNP%2F8MA6WZvalWSGsDAO8b&X-Amz-Signature=606bcf943daf79da176abdfc0d8130b9e2ebbc2947e2d8f6519a289d6e94c305&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBGVBMG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQC1viTMUgazuJco8boTu8LPjelrlVhI7atbMLXQOZrrtAIgBMfEmTE9cIaDo19ciZnnWT37G3czK1UJXQGq98Ezq58qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4J4LTYFb4o5Y%2BBmircA6to4%2Fu%2BAmZ4kbtnQ18TFToSeCr4Ruh98KOH3imRyoXHkiRxZneMWNrX9YOSE7IJ3W%2FxVaJ7NrQNrBWQrtm0MN8dWexKf2dcMJkiOP7FEheQJZtDLZQy%2FlsjTGxdjtAXSm04Ern74rIBm6uG0%2BoH4Px%2BuNOxcJyvE3Xo5AnyH8mAE%2FDA2jrlBqgcZn60gLYwdIWZ%2Ftt3aMikkoH3Zm9bm8aC7L7PYuXdWmdZaYgNXsYf0I4g0YkngZMtgBmZiro2ugrV0a8xOZ7DHX54lPKV%2FDllgIOHgNZAYg9I8PhFpudekrYypM2DSe0j1LeetTojUIqNS3ez%2FkRWn9UiH0aquEjZSqYQbUlje23aTeMqnSgdAjcyLvg1o4bH4s2S2RqYph3gBCgRNqi4B%2FNNm8BhN%2BtvxiI3K3WrCGKQ5SWTBKSxoR2wLB9%2B5oFVT96itD%2BGbjMypMuQHY214rg7FlLnOXeoBvwyyN%2B2kXwP3f094dZQdNN6%2BKbmwDGqhuYvEdArdkIt34jBUz0U3a0%2FRyGEVbwCutqHARuEz4Xsx%2Byxs3BPHsbUfFHjS408L3OIC%2Bx5G5cB2rCF2JCnQe1c5zvck2rvSaI90WeLNvIV0rEUQFXnYoJizpIyJdwSgjwgMNu3578GOqUBPsqdl73FOSaJWdK4OzBDZpU5IreTeySTXAqNswmEO7pZ6kACvXcp6HRnOBm71G43X2kNVWZiSm8PYmr01qriuaG%2B7NHZ7yuWxbLbfyDkYq%2F1AZs%2Fjj2boKlMxgrqHezsXHM0DISjv0x1KHAFUxXvT86tS3djHAoiVE7stvVlmkxT1WMK9bMYi0IKwLaLMd5r2I3juYLNP%2F8MA6WZvalWSGsDAO8b&X-Amz-Signature=e4f4b442df4afa92410a1ac942ccd58c52017dc7a26757263509756184def592&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBGVBMG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQC1viTMUgazuJco8boTu8LPjelrlVhI7atbMLXQOZrrtAIgBMfEmTE9cIaDo19ciZnnWT37G3czK1UJXQGq98Ezq58qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4J4LTYFb4o5Y%2BBmircA6to4%2Fu%2BAmZ4kbtnQ18TFToSeCr4Ruh98KOH3imRyoXHkiRxZneMWNrX9YOSE7IJ3W%2FxVaJ7NrQNrBWQrtm0MN8dWexKf2dcMJkiOP7FEheQJZtDLZQy%2FlsjTGxdjtAXSm04Ern74rIBm6uG0%2BoH4Px%2BuNOxcJyvE3Xo5AnyH8mAE%2FDA2jrlBqgcZn60gLYwdIWZ%2Ftt3aMikkoH3Zm9bm8aC7L7PYuXdWmdZaYgNXsYf0I4g0YkngZMtgBmZiro2ugrV0a8xOZ7DHX54lPKV%2FDllgIOHgNZAYg9I8PhFpudekrYypM2DSe0j1LeetTojUIqNS3ez%2FkRWn9UiH0aquEjZSqYQbUlje23aTeMqnSgdAjcyLvg1o4bH4s2S2RqYph3gBCgRNqi4B%2FNNm8BhN%2BtvxiI3K3WrCGKQ5SWTBKSxoR2wLB9%2B5oFVT96itD%2BGbjMypMuQHY214rg7FlLnOXeoBvwyyN%2B2kXwP3f094dZQdNN6%2BKbmwDGqhuYvEdArdkIt34jBUz0U3a0%2FRyGEVbwCutqHARuEz4Xsx%2Byxs3BPHsbUfFHjS408L3OIC%2Bx5G5cB2rCF2JCnQe1c5zvck2rvSaI90WeLNvIV0rEUQFXnYoJizpIyJdwSgjwgMNu3578GOqUBPsqdl73FOSaJWdK4OzBDZpU5IreTeySTXAqNswmEO7pZ6kACvXcp6HRnOBm71G43X2kNVWZiSm8PYmr01qriuaG%2B7NHZ7yuWxbLbfyDkYq%2F1AZs%2Fjj2boKlMxgrqHezsXHM0DISjv0x1KHAFUxXvT86tS3djHAoiVE7stvVlmkxT1WMK9bMYi0IKwLaLMd5r2I3juYLNP%2F8MA6WZvalWSGsDAO8b&X-Amz-Signature=21942166e2f3e2a255eed9d9d4a8574049674fa8befaf6c5f09d0a43ea3dc8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBGVBMG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQC1viTMUgazuJco8boTu8LPjelrlVhI7atbMLXQOZrrtAIgBMfEmTE9cIaDo19ciZnnWT37G3czK1UJXQGq98Ezq58qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4J4LTYFb4o5Y%2BBmircA6to4%2Fu%2BAmZ4kbtnQ18TFToSeCr4Ruh98KOH3imRyoXHkiRxZneMWNrX9YOSE7IJ3W%2FxVaJ7NrQNrBWQrtm0MN8dWexKf2dcMJkiOP7FEheQJZtDLZQy%2FlsjTGxdjtAXSm04Ern74rIBm6uG0%2BoH4Px%2BuNOxcJyvE3Xo5AnyH8mAE%2FDA2jrlBqgcZn60gLYwdIWZ%2Ftt3aMikkoH3Zm9bm8aC7L7PYuXdWmdZaYgNXsYf0I4g0YkngZMtgBmZiro2ugrV0a8xOZ7DHX54lPKV%2FDllgIOHgNZAYg9I8PhFpudekrYypM2DSe0j1LeetTojUIqNS3ez%2FkRWn9UiH0aquEjZSqYQbUlje23aTeMqnSgdAjcyLvg1o4bH4s2S2RqYph3gBCgRNqi4B%2FNNm8BhN%2BtvxiI3K3WrCGKQ5SWTBKSxoR2wLB9%2B5oFVT96itD%2BGbjMypMuQHY214rg7FlLnOXeoBvwyyN%2B2kXwP3f094dZQdNN6%2BKbmwDGqhuYvEdArdkIt34jBUz0U3a0%2FRyGEVbwCutqHARuEz4Xsx%2Byxs3BPHsbUfFHjS408L3OIC%2Bx5G5cB2rCF2JCnQe1c5zvck2rvSaI90WeLNvIV0rEUQFXnYoJizpIyJdwSgjwgMNu3578GOqUBPsqdl73FOSaJWdK4OzBDZpU5IreTeySTXAqNswmEO7pZ6kACvXcp6HRnOBm71G43X2kNVWZiSm8PYmr01qriuaG%2B7NHZ7yuWxbLbfyDkYq%2F1AZs%2Fjj2boKlMxgrqHezsXHM0DISjv0x1KHAFUxXvT86tS3djHAoiVE7stvVlmkxT1WMK9bMYi0IKwLaLMd5r2I3juYLNP%2F8MA6WZvalWSGsDAO8b&X-Amz-Signature=91f2ca9480115ab573a65e467f42d8d9cf96eea7f4ae420f257d981d0c8229f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBGVBMG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQC1viTMUgazuJco8boTu8LPjelrlVhI7atbMLXQOZrrtAIgBMfEmTE9cIaDo19ciZnnWT37G3czK1UJXQGq98Ezq58qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4J4LTYFb4o5Y%2BBmircA6to4%2Fu%2BAmZ4kbtnQ18TFToSeCr4Ruh98KOH3imRyoXHkiRxZneMWNrX9YOSE7IJ3W%2FxVaJ7NrQNrBWQrtm0MN8dWexKf2dcMJkiOP7FEheQJZtDLZQy%2FlsjTGxdjtAXSm04Ern74rIBm6uG0%2BoH4Px%2BuNOxcJyvE3Xo5AnyH8mAE%2FDA2jrlBqgcZn60gLYwdIWZ%2Ftt3aMikkoH3Zm9bm8aC7L7PYuXdWmdZaYgNXsYf0I4g0YkngZMtgBmZiro2ugrV0a8xOZ7DHX54lPKV%2FDllgIOHgNZAYg9I8PhFpudekrYypM2DSe0j1LeetTojUIqNS3ez%2FkRWn9UiH0aquEjZSqYQbUlje23aTeMqnSgdAjcyLvg1o4bH4s2S2RqYph3gBCgRNqi4B%2FNNm8BhN%2BtvxiI3K3WrCGKQ5SWTBKSxoR2wLB9%2B5oFVT96itD%2BGbjMypMuQHY214rg7FlLnOXeoBvwyyN%2B2kXwP3f094dZQdNN6%2BKbmwDGqhuYvEdArdkIt34jBUz0U3a0%2FRyGEVbwCutqHARuEz4Xsx%2Byxs3BPHsbUfFHjS408L3OIC%2Bx5G5cB2rCF2JCnQe1c5zvck2rvSaI90WeLNvIV0rEUQFXnYoJizpIyJdwSgjwgMNu3578GOqUBPsqdl73FOSaJWdK4OzBDZpU5IreTeySTXAqNswmEO7pZ6kACvXcp6HRnOBm71G43X2kNVWZiSm8PYmr01qriuaG%2B7NHZ7yuWxbLbfyDkYq%2F1AZs%2Fjj2boKlMxgrqHezsXHM0DISjv0x1KHAFUxXvT86tS3djHAoiVE7stvVlmkxT1WMK9bMYi0IKwLaLMd5r2I3juYLNP%2F8MA6WZvalWSGsDAO8b&X-Amz-Signature=5fa57bef25684c33b839c97aa956bff38ed489dca8dc70f6df841ddd0f98af26&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBGVBMG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQC1viTMUgazuJco8boTu8LPjelrlVhI7atbMLXQOZrrtAIgBMfEmTE9cIaDo19ciZnnWT37G3czK1UJXQGq98Ezq58qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4J4LTYFb4o5Y%2BBmircA6to4%2Fu%2BAmZ4kbtnQ18TFToSeCr4Ruh98KOH3imRyoXHkiRxZneMWNrX9YOSE7IJ3W%2FxVaJ7NrQNrBWQrtm0MN8dWexKf2dcMJkiOP7FEheQJZtDLZQy%2FlsjTGxdjtAXSm04Ern74rIBm6uG0%2BoH4Px%2BuNOxcJyvE3Xo5AnyH8mAE%2FDA2jrlBqgcZn60gLYwdIWZ%2Ftt3aMikkoH3Zm9bm8aC7L7PYuXdWmdZaYgNXsYf0I4g0YkngZMtgBmZiro2ugrV0a8xOZ7DHX54lPKV%2FDllgIOHgNZAYg9I8PhFpudekrYypM2DSe0j1LeetTojUIqNS3ez%2FkRWn9UiH0aquEjZSqYQbUlje23aTeMqnSgdAjcyLvg1o4bH4s2S2RqYph3gBCgRNqi4B%2FNNm8BhN%2BtvxiI3K3WrCGKQ5SWTBKSxoR2wLB9%2B5oFVT96itD%2BGbjMypMuQHY214rg7FlLnOXeoBvwyyN%2B2kXwP3f094dZQdNN6%2BKbmwDGqhuYvEdArdkIt34jBUz0U3a0%2FRyGEVbwCutqHARuEz4Xsx%2Byxs3BPHsbUfFHjS408L3OIC%2Bx5G5cB2rCF2JCnQe1c5zvck2rvSaI90WeLNvIV0rEUQFXnYoJizpIyJdwSgjwgMNu3578GOqUBPsqdl73FOSaJWdK4OzBDZpU5IreTeySTXAqNswmEO7pZ6kACvXcp6HRnOBm71G43X2kNVWZiSm8PYmr01qriuaG%2B7NHZ7yuWxbLbfyDkYq%2F1AZs%2Fjj2boKlMxgrqHezsXHM0DISjv0x1KHAFUxXvT86tS3djHAoiVE7stvVlmkxT1WMK9bMYi0IKwLaLMd5r2I3juYLNP%2F8MA6WZvalWSGsDAO8b&X-Amz-Signature=f1fb990a9dc1ee65d4bda5171073a52ead431583bed9b6b762714f43ebf9b944&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBGVBMG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQC1viTMUgazuJco8boTu8LPjelrlVhI7atbMLXQOZrrtAIgBMfEmTE9cIaDo19ciZnnWT37G3czK1UJXQGq98Ezq58qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4J4LTYFb4o5Y%2BBmircA6to4%2Fu%2BAmZ4kbtnQ18TFToSeCr4Ruh98KOH3imRyoXHkiRxZneMWNrX9YOSE7IJ3W%2FxVaJ7NrQNrBWQrtm0MN8dWexKf2dcMJkiOP7FEheQJZtDLZQy%2FlsjTGxdjtAXSm04Ern74rIBm6uG0%2BoH4Px%2BuNOxcJyvE3Xo5AnyH8mAE%2FDA2jrlBqgcZn60gLYwdIWZ%2Ftt3aMikkoH3Zm9bm8aC7L7PYuXdWmdZaYgNXsYf0I4g0YkngZMtgBmZiro2ugrV0a8xOZ7DHX54lPKV%2FDllgIOHgNZAYg9I8PhFpudekrYypM2DSe0j1LeetTojUIqNS3ez%2FkRWn9UiH0aquEjZSqYQbUlje23aTeMqnSgdAjcyLvg1o4bH4s2S2RqYph3gBCgRNqi4B%2FNNm8BhN%2BtvxiI3K3WrCGKQ5SWTBKSxoR2wLB9%2B5oFVT96itD%2BGbjMypMuQHY214rg7FlLnOXeoBvwyyN%2B2kXwP3f094dZQdNN6%2BKbmwDGqhuYvEdArdkIt34jBUz0U3a0%2FRyGEVbwCutqHARuEz4Xsx%2Byxs3BPHsbUfFHjS408L3OIC%2Bx5G5cB2rCF2JCnQe1c5zvck2rvSaI90WeLNvIV0rEUQFXnYoJizpIyJdwSgjwgMNu3578GOqUBPsqdl73FOSaJWdK4OzBDZpU5IreTeySTXAqNswmEO7pZ6kACvXcp6HRnOBm71G43X2kNVWZiSm8PYmr01qriuaG%2B7NHZ7yuWxbLbfyDkYq%2F1AZs%2Fjj2boKlMxgrqHezsXHM0DISjv0x1KHAFUxXvT86tS3djHAoiVE7stvVlmkxT1WMK9bMYi0IKwLaLMd5r2I3juYLNP%2F8MA6WZvalWSGsDAO8b&X-Amz-Signature=f786bc221a371951f415c23aec139cd77119387bce8dc1000ae56ae2c4e7bba7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
