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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3MNMW6L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyNntIVG%2BaF5EDmWzMAcpphrFI%2BM5hHlkpRDhDAIsHVQIhAK6G9HYkymOtGEPuzrEBA2EEyLEysaVkVoSuyGRowHBfKv8DCCAQABoMNjM3NDIzMTgzODA1IgxZXSOhXFcB6LLx0U8q3APJuhMVBJC79FusEnCCd4e8T79vbKBzvyDc241xJ2l%2F6nMRF3nc8EpUODtbwbo%2FDu%2FBAltke%2FfMi%2B473%2BjpM%2F%2BlcKMmENvefwWpC1k33OMFpyRVJ4foF4F3i73VCbXWL%2FGNPonu1n%2BoEllPPlTMxKfgC0qmfdUl8rBSD6GKcU8u40Nn8tPWUAb%2Fubu%2FZaZnhD12fTv%2BKrOypk8LsWGySKhlzgooaFimfVJFSwNWlj8Hyj3btzVlldIvCPUexyrX76JXJ6aMLXKr6PhqKg6d2MZTE03v%2FzZcSfHEk3ui2BTCwCgPfzckuFZp%2BG%2F3g6NreyA5u%2BMDN5pTVKJoycPj%2FfwvZ3%2FYi6GHAiL2FInGKYZZzqsU6R4QDH%2Fv1rhp2Sj3PUThX%2B2n5SYDhH0yJGT4O92cGRPXFEfIgbwOyIcRuf97Jp2lRKHChBf02W7eOyluMBh2zreKoFNrSSuKPY5sELpzYEcqGuaH3pWgnnReRr7dB6FG4XcxJ%2BfCcDRwfCAdcbfCN482myN80beQy%2BYoWEgWoqtIV4mznkahApiwax8Mug8H%2FOwaP5f8Wt%2BcY1B7uwdNqsXwN4nGAdAbrExfuePRYxDA4u4AJZHrVzlGRWxCV18IQ7FoXtIzKowwjzDPgdi%2BBjqkAT1WqHdijCPt7ydoilPmHQmTGUzzJtqfI3%2B7rvEUDdpoB%2FOEs3U6GWDgF8wv%2F9tRFHpmXdcB8l2oebz%2BE%2BVrotzmIKfREGg9sznX7dgr%2FpzmeSDSchGCP65tcx96H4aJHHdusg2syvNFauq0BDDmtCxqps%2BQY%2B%2B8%2BxkWfpTMB3EgvI8ksgUWWdew6BWEidB40A4rHFysmgBLDjIOsdzKu816E8mS&X-Amz-Signature=3ce3dcc1a81a4c930129b88f4febb87009b29278bc1409693c24db2acfca0379&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3MNMW6L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyNntIVG%2BaF5EDmWzMAcpphrFI%2BM5hHlkpRDhDAIsHVQIhAK6G9HYkymOtGEPuzrEBA2EEyLEysaVkVoSuyGRowHBfKv8DCCAQABoMNjM3NDIzMTgzODA1IgxZXSOhXFcB6LLx0U8q3APJuhMVBJC79FusEnCCd4e8T79vbKBzvyDc241xJ2l%2F6nMRF3nc8EpUODtbwbo%2FDu%2FBAltke%2FfMi%2B473%2BjpM%2F%2BlcKMmENvefwWpC1k33OMFpyRVJ4foF4F3i73VCbXWL%2FGNPonu1n%2BoEllPPlTMxKfgC0qmfdUl8rBSD6GKcU8u40Nn8tPWUAb%2Fubu%2FZaZnhD12fTv%2BKrOypk8LsWGySKhlzgooaFimfVJFSwNWlj8Hyj3btzVlldIvCPUexyrX76JXJ6aMLXKr6PhqKg6d2MZTE03v%2FzZcSfHEk3ui2BTCwCgPfzckuFZp%2BG%2F3g6NreyA5u%2BMDN5pTVKJoycPj%2FfwvZ3%2FYi6GHAiL2FInGKYZZzqsU6R4QDH%2Fv1rhp2Sj3PUThX%2B2n5SYDhH0yJGT4O92cGRPXFEfIgbwOyIcRuf97Jp2lRKHChBf02W7eOyluMBh2zreKoFNrSSuKPY5sELpzYEcqGuaH3pWgnnReRr7dB6FG4XcxJ%2BfCcDRwfCAdcbfCN482myN80beQy%2BYoWEgWoqtIV4mznkahApiwax8Mug8H%2FOwaP5f8Wt%2BcY1B7uwdNqsXwN4nGAdAbrExfuePRYxDA4u4AJZHrVzlGRWxCV18IQ7FoXtIzKowwjzDPgdi%2BBjqkAT1WqHdijCPt7ydoilPmHQmTGUzzJtqfI3%2B7rvEUDdpoB%2FOEs3U6GWDgF8wv%2F9tRFHpmXdcB8l2oebz%2BE%2BVrotzmIKfREGg9sznX7dgr%2FpzmeSDSchGCP65tcx96H4aJHHdusg2syvNFauq0BDDmtCxqps%2BQY%2B%2B8%2BxkWfpTMB3EgvI8ksgUWWdew6BWEidB40A4rHFysmgBLDjIOsdzKu816E8mS&X-Amz-Signature=feb6dcd283edaac70b2e3dd791f715acd7ee2cbe83e8f4506d0a9dae6798c6e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3MNMW6L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyNntIVG%2BaF5EDmWzMAcpphrFI%2BM5hHlkpRDhDAIsHVQIhAK6G9HYkymOtGEPuzrEBA2EEyLEysaVkVoSuyGRowHBfKv8DCCAQABoMNjM3NDIzMTgzODA1IgxZXSOhXFcB6LLx0U8q3APJuhMVBJC79FusEnCCd4e8T79vbKBzvyDc241xJ2l%2F6nMRF3nc8EpUODtbwbo%2FDu%2FBAltke%2FfMi%2B473%2BjpM%2F%2BlcKMmENvefwWpC1k33OMFpyRVJ4foF4F3i73VCbXWL%2FGNPonu1n%2BoEllPPlTMxKfgC0qmfdUl8rBSD6GKcU8u40Nn8tPWUAb%2Fubu%2FZaZnhD12fTv%2BKrOypk8LsWGySKhlzgooaFimfVJFSwNWlj8Hyj3btzVlldIvCPUexyrX76JXJ6aMLXKr6PhqKg6d2MZTE03v%2FzZcSfHEk3ui2BTCwCgPfzckuFZp%2BG%2F3g6NreyA5u%2BMDN5pTVKJoycPj%2FfwvZ3%2FYi6GHAiL2FInGKYZZzqsU6R4QDH%2Fv1rhp2Sj3PUThX%2B2n5SYDhH0yJGT4O92cGRPXFEfIgbwOyIcRuf97Jp2lRKHChBf02W7eOyluMBh2zreKoFNrSSuKPY5sELpzYEcqGuaH3pWgnnReRr7dB6FG4XcxJ%2BfCcDRwfCAdcbfCN482myN80beQy%2BYoWEgWoqtIV4mznkahApiwax8Mug8H%2FOwaP5f8Wt%2BcY1B7uwdNqsXwN4nGAdAbrExfuePRYxDA4u4AJZHrVzlGRWxCV18IQ7FoXtIzKowwjzDPgdi%2BBjqkAT1WqHdijCPt7ydoilPmHQmTGUzzJtqfI3%2B7rvEUDdpoB%2FOEs3U6GWDgF8wv%2F9tRFHpmXdcB8l2oebz%2BE%2BVrotzmIKfREGg9sznX7dgr%2FpzmeSDSchGCP65tcx96H4aJHHdusg2syvNFauq0BDDmtCxqps%2BQY%2B%2B8%2BxkWfpTMB3EgvI8ksgUWWdew6BWEidB40A4rHFysmgBLDjIOsdzKu816E8mS&X-Amz-Signature=0b6890fefcb59d4d7562e9b6a05d76e363dd255c3b1fc5c705dd3a3be1b35f26&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3MNMW6L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyNntIVG%2BaF5EDmWzMAcpphrFI%2BM5hHlkpRDhDAIsHVQIhAK6G9HYkymOtGEPuzrEBA2EEyLEysaVkVoSuyGRowHBfKv8DCCAQABoMNjM3NDIzMTgzODA1IgxZXSOhXFcB6LLx0U8q3APJuhMVBJC79FusEnCCd4e8T79vbKBzvyDc241xJ2l%2F6nMRF3nc8EpUODtbwbo%2FDu%2FBAltke%2FfMi%2B473%2BjpM%2F%2BlcKMmENvefwWpC1k33OMFpyRVJ4foF4F3i73VCbXWL%2FGNPonu1n%2BoEllPPlTMxKfgC0qmfdUl8rBSD6GKcU8u40Nn8tPWUAb%2Fubu%2FZaZnhD12fTv%2BKrOypk8LsWGySKhlzgooaFimfVJFSwNWlj8Hyj3btzVlldIvCPUexyrX76JXJ6aMLXKr6PhqKg6d2MZTE03v%2FzZcSfHEk3ui2BTCwCgPfzckuFZp%2BG%2F3g6NreyA5u%2BMDN5pTVKJoycPj%2FfwvZ3%2FYi6GHAiL2FInGKYZZzqsU6R4QDH%2Fv1rhp2Sj3PUThX%2B2n5SYDhH0yJGT4O92cGRPXFEfIgbwOyIcRuf97Jp2lRKHChBf02W7eOyluMBh2zreKoFNrSSuKPY5sELpzYEcqGuaH3pWgnnReRr7dB6FG4XcxJ%2BfCcDRwfCAdcbfCN482myN80beQy%2BYoWEgWoqtIV4mznkahApiwax8Mug8H%2FOwaP5f8Wt%2BcY1B7uwdNqsXwN4nGAdAbrExfuePRYxDA4u4AJZHrVzlGRWxCV18IQ7FoXtIzKowwjzDPgdi%2BBjqkAT1WqHdijCPt7ydoilPmHQmTGUzzJtqfI3%2B7rvEUDdpoB%2FOEs3U6GWDgF8wv%2F9tRFHpmXdcB8l2oebz%2BE%2BVrotzmIKfREGg9sznX7dgr%2FpzmeSDSchGCP65tcx96H4aJHHdusg2syvNFauq0BDDmtCxqps%2BQY%2B%2B8%2BxkWfpTMB3EgvI8ksgUWWdew6BWEidB40A4rHFysmgBLDjIOsdzKu816E8mS&X-Amz-Signature=bf01c45fca0a4c573376358664eeac837878df2fe63f32f55ff154cdcbba19a4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3MNMW6L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyNntIVG%2BaF5EDmWzMAcpphrFI%2BM5hHlkpRDhDAIsHVQIhAK6G9HYkymOtGEPuzrEBA2EEyLEysaVkVoSuyGRowHBfKv8DCCAQABoMNjM3NDIzMTgzODA1IgxZXSOhXFcB6LLx0U8q3APJuhMVBJC79FusEnCCd4e8T79vbKBzvyDc241xJ2l%2F6nMRF3nc8EpUODtbwbo%2FDu%2FBAltke%2FfMi%2B473%2BjpM%2F%2BlcKMmENvefwWpC1k33OMFpyRVJ4foF4F3i73VCbXWL%2FGNPonu1n%2BoEllPPlTMxKfgC0qmfdUl8rBSD6GKcU8u40Nn8tPWUAb%2Fubu%2FZaZnhD12fTv%2BKrOypk8LsWGySKhlzgooaFimfVJFSwNWlj8Hyj3btzVlldIvCPUexyrX76JXJ6aMLXKr6PhqKg6d2MZTE03v%2FzZcSfHEk3ui2BTCwCgPfzckuFZp%2BG%2F3g6NreyA5u%2BMDN5pTVKJoycPj%2FfwvZ3%2FYi6GHAiL2FInGKYZZzqsU6R4QDH%2Fv1rhp2Sj3PUThX%2B2n5SYDhH0yJGT4O92cGRPXFEfIgbwOyIcRuf97Jp2lRKHChBf02W7eOyluMBh2zreKoFNrSSuKPY5sELpzYEcqGuaH3pWgnnReRr7dB6FG4XcxJ%2BfCcDRwfCAdcbfCN482myN80beQy%2BYoWEgWoqtIV4mznkahApiwax8Mug8H%2FOwaP5f8Wt%2BcY1B7uwdNqsXwN4nGAdAbrExfuePRYxDA4u4AJZHrVzlGRWxCV18IQ7FoXtIzKowwjzDPgdi%2BBjqkAT1WqHdijCPt7ydoilPmHQmTGUzzJtqfI3%2B7rvEUDdpoB%2FOEs3U6GWDgF8wv%2F9tRFHpmXdcB8l2oebz%2BE%2BVrotzmIKfREGg9sznX7dgr%2FpzmeSDSchGCP65tcx96H4aJHHdusg2syvNFauq0BDDmtCxqps%2BQY%2B%2B8%2BxkWfpTMB3EgvI8ksgUWWdew6BWEidB40A4rHFysmgBLDjIOsdzKu816E8mS&X-Amz-Signature=00a9f491816317989a4ad39ba8ffe6b7da8fe230e07742ae4e2a1f6db621f017&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3MNMW6L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyNntIVG%2BaF5EDmWzMAcpphrFI%2BM5hHlkpRDhDAIsHVQIhAK6G9HYkymOtGEPuzrEBA2EEyLEysaVkVoSuyGRowHBfKv8DCCAQABoMNjM3NDIzMTgzODA1IgxZXSOhXFcB6LLx0U8q3APJuhMVBJC79FusEnCCd4e8T79vbKBzvyDc241xJ2l%2F6nMRF3nc8EpUODtbwbo%2FDu%2FBAltke%2FfMi%2B473%2BjpM%2F%2BlcKMmENvefwWpC1k33OMFpyRVJ4foF4F3i73VCbXWL%2FGNPonu1n%2BoEllPPlTMxKfgC0qmfdUl8rBSD6GKcU8u40Nn8tPWUAb%2Fubu%2FZaZnhD12fTv%2BKrOypk8LsWGySKhlzgooaFimfVJFSwNWlj8Hyj3btzVlldIvCPUexyrX76JXJ6aMLXKr6PhqKg6d2MZTE03v%2FzZcSfHEk3ui2BTCwCgPfzckuFZp%2BG%2F3g6NreyA5u%2BMDN5pTVKJoycPj%2FfwvZ3%2FYi6GHAiL2FInGKYZZzqsU6R4QDH%2Fv1rhp2Sj3PUThX%2B2n5SYDhH0yJGT4O92cGRPXFEfIgbwOyIcRuf97Jp2lRKHChBf02W7eOyluMBh2zreKoFNrSSuKPY5sELpzYEcqGuaH3pWgnnReRr7dB6FG4XcxJ%2BfCcDRwfCAdcbfCN482myN80beQy%2BYoWEgWoqtIV4mznkahApiwax8Mug8H%2FOwaP5f8Wt%2BcY1B7uwdNqsXwN4nGAdAbrExfuePRYxDA4u4AJZHrVzlGRWxCV18IQ7FoXtIzKowwjzDPgdi%2BBjqkAT1WqHdijCPt7ydoilPmHQmTGUzzJtqfI3%2B7rvEUDdpoB%2FOEs3U6GWDgF8wv%2F9tRFHpmXdcB8l2oebz%2BE%2BVrotzmIKfREGg9sznX7dgr%2FpzmeSDSchGCP65tcx96H4aJHHdusg2syvNFauq0BDDmtCxqps%2BQY%2B%2B8%2BxkWfpTMB3EgvI8ksgUWWdew6BWEidB40A4rHFysmgBLDjIOsdzKu816E8mS&X-Amz-Signature=5b3bad892f6b6936e6c074c86ebc86e5ceef9fa684ffa7dc5d1d28c522d76b46&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3MNMW6L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyNntIVG%2BaF5EDmWzMAcpphrFI%2BM5hHlkpRDhDAIsHVQIhAK6G9HYkymOtGEPuzrEBA2EEyLEysaVkVoSuyGRowHBfKv8DCCAQABoMNjM3NDIzMTgzODA1IgxZXSOhXFcB6LLx0U8q3APJuhMVBJC79FusEnCCd4e8T79vbKBzvyDc241xJ2l%2F6nMRF3nc8EpUODtbwbo%2FDu%2FBAltke%2FfMi%2B473%2BjpM%2F%2BlcKMmENvefwWpC1k33OMFpyRVJ4foF4F3i73VCbXWL%2FGNPonu1n%2BoEllPPlTMxKfgC0qmfdUl8rBSD6GKcU8u40Nn8tPWUAb%2Fubu%2FZaZnhD12fTv%2BKrOypk8LsWGySKhlzgooaFimfVJFSwNWlj8Hyj3btzVlldIvCPUexyrX76JXJ6aMLXKr6PhqKg6d2MZTE03v%2FzZcSfHEk3ui2BTCwCgPfzckuFZp%2BG%2F3g6NreyA5u%2BMDN5pTVKJoycPj%2FfwvZ3%2FYi6GHAiL2FInGKYZZzqsU6R4QDH%2Fv1rhp2Sj3PUThX%2B2n5SYDhH0yJGT4O92cGRPXFEfIgbwOyIcRuf97Jp2lRKHChBf02W7eOyluMBh2zreKoFNrSSuKPY5sELpzYEcqGuaH3pWgnnReRr7dB6FG4XcxJ%2BfCcDRwfCAdcbfCN482myN80beQy%2BYoWEgWoqtIV4mznkahApiwax8Mug8H%2FOwaP5f8Wt%2BcY1B7uwdNqsXwN4nGAdAbrExfuePRYxDA4u4AJZHrVzlGRWxCV18IQ7FoXtIzKowwjzDPgdi%2BBjqkAT1WqHdijCPt7ydoilPmHQmTGUzzJtqfI3%2B7rvEUDdpoB%2FOEs3U6GWDgF8wv%2F9tRFHpmXdcB8l2oebz%2BE%2BVrotzmIKfREGg9sznX7dgr%2FpzmeSDSchGCP65tcx96H4aJHHdusg2syvNFauq0BDDmtCxqps%2BQY%2B%2B8%2BxkWfpTMB3EgvI8ksgUWWdew6BWEidB40A4rHFysmgBLDjIOsdzKu816E8mS&X-Amz-Signature=7a6089943e1c0484525ba41af8659ec0f3a5c9b309eb7497e55987a3c3bac1f1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
