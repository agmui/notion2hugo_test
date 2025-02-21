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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWEC3QS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyJyM3nQIOAvztyabT181yC9MLP%2BihhRr%2FvQfUcoESVAiAcQwjznIHpdWsXNRz7n7GEiLkgPRhAd1WLPllb9dcfpSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcEXY%2FgVC7eHPPfiKKtwDm3%2FhFGyOlMnN%2Fo4r1hPy3ojDdXQt%2BvcoAqFh3eW6%2Flgfaq2WJ3z6%2B2sGshBVTpVIooA2McTzQbYu%2BoO9vZ3V9M8sVp0x0RWut9t7vvDiayHEJP2KHFIcNWJyZ8eZiPR4KNB3VtOWF4ue5Oj3Q2ejWcIqzncO9OPJRupxwAB7P5Ihl04zTq9sz%2F%2BoLg3t%2F0VsBD2QhN0DS6JX%2FLpnw4fZ1GIw7LLXOLyYH2UBfBzNKybqpZwEASPmCVoUqzAdjDgQcW7cS38GklTVHzyqV%2BRjV7YD2dhcEZ9e88rjJjWe%2BUriK1rmOIe4HomysMcq1XCuhVCUWziWXKufo%2FDg3ddTm8md%2FB9K2Z4ilrTfP%2FaXi%2BPDWA9K95chE0lbt9sZ1jN3nHBnPoAIsWgxYaLGXBGcz90HN0CnLuNs04ElgDOG6hcMmToKYFmHAS5c1UA1GHNv%2FfkSHJgdvnijkclPfMoC1DZwZnptzG%2BAGTF8unkQbX%2Fjttp8YIl9FT9wxCJTAHX7IRxnkWBHwgNw%2FhU28Vn15ossBI2lBL3qgZA4Hy%2FZOWuG%2BgeAJ8R22ek6pfqy%2FeBV1egr46Tzng1C4MBNupN8yHVEOGgSRjawl%2BH4hWoW7hInAgL9FY1RPfsLszkwxMjhvQY6pgFXpDhcNUB5CfvzfM36vL32gn8oGqesq1lW7EPwsE8wHjYzgx6remBh2ifByMDyvwd1ehaiRH1c1Jvx5X8B5oOPLOO3mXMwipmHUp9R4LCtGJ031i4T%2F71MHomqovLi%2FToJyy9i2HLrV4WpvkjUkkXXL8T83HsGmPBLb6jpX4Rrdg2etwO%2FalFm7oFtxtvFAi7O4F%2FUTjodQd0arUcRriNwJqVghszc&X-Amz-Signature=9ad0c443335ab5b330d5a6689a7f0e815e9f8fd33887843a120172df37d97ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWEC3QS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyJyM3nQIOAvztyabT181yC9MLP%2BihhRr%2FvQfUcoESVAiAcQwjznIHpdWsXNRz7n7GEiLkgPRhAd1WLPllb9dcfpSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcEXY%2FgVC7eHPPfiKKtwDm3%2FhFGyOlMnN%2Fo4r1hPy3ojDdXQt%2BvcoAqFh3eW6%2Flgfaq2WJ3z6%2B2sGshBVTpVIooA2McTzQbYu%2BoO9vZ3V9M8sVp0x0RWut9t7vvDiayHEJP2KHFIcNWJyZ8eZiPR4KNB3VtOWF4ue5Oj3Q2ejWcIqzncO9OPJRupxwAB7P5Ihl04zTq9sz%2F%2BoLg3t%2F0VsBD2QhN0DS6JX%2FLpnw4fZ1GIw7LLXOLyYH2UBfBzNKybqpZwEASPmCVoUqzAdjDgQcW7cS38GklTVHzyqV%2BRjV7YD2dhcEZ9e88rjJjWe%2BUriK1rmOIe4HomysMcq1XCuhVCUWziWXKufo%2FDg3ddTm8md%2FB9K2Z4ilrTfP%2FaXi%2BPDWA9K95chE0lbt9sZ1jN3nHBnPoAIsWgxYaLGXBGcz90HN0CnLuNs04ElgDOG6hcMmToKYFmHAS5c1UA1GHNv%2FfkSHJgdvnijkclPfMoC1DZwZnptzG%2BAGTF8unkQbX%2Fjttp8YIl9FT9wxCJTAHX7IRxnkWBHwgNw%2FhU28Vn15ossBI2lBL3qgZA4Hy%2FZOWuG%2BgeAJ8R22ek6pfqy%2FeBV1egr46Tzng1C4MBNupN8yHVEOGgSRjawl%2BH4hWoW7hInAgL9FY1RPfsLszkwxMjhvQY6pgFXpDhcNUB5CfvzfM36vL32gn8oGqesq1lW7EPwsE8wHjYzgx6remBh2ifByMDyvwd1ehaiRH1c1Jvx5X8B5oOPLOO3mXMwipmHUp9R4LCtGJ031i4T%2F71MHomqovLi%2FToJyy9i2HLrV4WpvkjUkkXXL8T83HsGmPBLb6jpX4Rrdg2etwO%2FalFm7oFtxtvFAi7O4F%2FUTjodQd0arUcRriNwJqVghszc&X-Amz-Signature=c7656299e1b9f647baf60002f8a48dd7a8b8c41fc5636941ab4079f7ce43a8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWEC3QS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyJyM3nQIOAvztyabT181yC9MLP%2BihhRr%2FvQfUcoESVAiAcQwjznIHpdWsXNRz7n7GEiLkgPRhAd1WLPllb9dcfpSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcEXY%2FgVC7eHPPfiKKtwDm3%2FhFGyOlMnN%2Fo4r1hPy3ojDdXQt%2BvcoAqFh3eW6%2Flgfaq2WJ3z6%2B2sGshBVTpVIooA2McTzQbYu%2BoO9vZ3V9M8sVp0x0RWut9t7vvDiayHEJP2KHFIcNWJyZ8eZiPR4KNB3VtOWF4ue5Oj3Q2ejWcIqzncO9OPJRupxwAB7P5Ihl04zTq9sz%2F%2BoLg3t%2F0VsBD2QhN0DS6JX%2FLpnw4fZ1GIw7LLXOLyYH2UBfBzNKybqpZwEASPmCVoUqzAdjDgQcW7cS38GklTVHzyqV%2BRjV7YD2dhcEZ9e88rjJjWe%2BUriK1rmOIe4HomysMcq1XCuhVCUWziWXKufo%2FDg3ddTm8md%2FB9K2Z4ilrTfP%2FaXi%2BPDWA9K95chE0lbt9sZ1jN3nHBnPoAIsWgxYaLGXBGcz90HN0CnLuNs04ElgDOG6hcMmToKYFmHAS5c1UA1GHNv%2FfkSHJgdvnijkclPfMoC1DZwZnptzG%2BAGTF8unkQbX%2Fjttp8YIl9FT9wxCJTAHX7IRxnkWBHwgNw%2FhU28Vn15ossBI2lBL3qgZA4Hy%2FZOWuG%2BgeAJ8R22ek6pfqy%2FeBV1egr46Tzng1C4MBNupN8yHVEOGgSRjawl%2BH4hWoW7hInAgL9FY1RPfsLszkwxMjhvQY6pgFXpDhcNUB5CfvzfM36vL32gn8oGqesq1lW7EPwsE8wHjYzgx6remBh2ifByMDyvwd1ehaiRH1c1Jvx5X8B5oOPLOO3mXMwipmHUp9R4LCtGJ031i4T%2F71MHomqovLi%2FToJyy9i2HLrV4WpvkjUkkXXL8T83HsGmPBLb6jpX4Rrdg2etwO%2FalFm7oFtxtvFAi7O4F%2FUTjodQd0arUcRriNwJqVghszc&X-Amz-Signature=52a443c2ef38bcc9a970b534a6df7f7ffdb360fb31fcd0eb0b62ffe7ca2199de&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWEC3QS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyJyM3nQIOAvztyabT181yC9MLP%2BihhRr%2FvQfUcoESVAiAcQwjznIHpdWsXNRz7n7GEiLkgPRhAd1WLPllb9dcfpSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcEXY%2FgVC7eHPPfiKKtwDm3%2FhFGyOlMnN%2Fo4r1hPy3ojDdXQt%2BvcoAqFh3eW6%2Flgfaq2WJ3z6%2B2sGshBVTpVIooA2McTzQbYu%2BoO9vZ3V9M8sVp0x0RWut9t7vvDiayHEJP2KHFIcNWJyZ8eZiPR4KNB3VtOWF4ue5Oj3Q2ejWcIqzncO9OPJRupxwAB7P5Ihl04zTq9sz%2F%2BoLg3t%2F0VsBD2QhN0DS6JX%2FLpnw4fZ1GIw7LLXOLyYH2UBfBzNKybqpZwEASPmCVoUqzAdjDgQcW7cS38GklTVHzyqV%2BRjV7YD2dhcEZ9e88rjJjWe%2BUriK1rmOIe4HomysMcq1XCuhVCUWziWXKufo%2FDg3ddTm8md%2FB9K2Z4ilrTfP%2FaXi%2BPDWA9K95chE0lbt9sZ1jN3nHBnPoAIsWgxYaLGXBGcz90HN0CnLuNs04ElgDOG6hcMmToKYFmHAS5c1UA1GHNv%2FfkSHJgdvnijkclPfMoC1DZwZnptzG%2BAGTF8unkQbX%2Fjttp8YIl9FT9wxCJTAHX7IRxnkWBHwgNw%2FhU28Vn15ossBI2lBL3qgZA4Hy%2FZOWuG%2BgeAJ8R22ek6pfqy%2FeBV1egr46Tzng1C4MBNupN8yHVEOGgSRjawl%2BH4hWoW7hInAgL9FY1RPfsLszkwxMjhvQY6pgFXpDhcNUB5CfvzfM36vL32gn8oGqesq1lW7EPwsE8wHjYzgx6remBh2ifByMDyvwd1ehaiRH1c1Jvx5X8B5oOPLOO3mXMwipmHUp9R4LCtGJ031i4T%2F71MHomqovLi%2FToJyy9i2HLrV4WpvkjUkkXXL8T83HsGmPBLb6jpX4Rrdg2etwO%2FalFm7oFtxtvFAi7O4F%2FUTjodQd0arUcRriNwJqVghszc&X-Amz-Signature=3f49dde224e7402c19eba54a8100ce231e6200f75eca549cde852cd07d7c25f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWEC3QS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyJyM3nQIOAvztyabT181yC9MLP%2BihhRr%2FvQfUcoESVAiAcQwjznIHpdWsXNRz7n7GEiLkgPRhAd1WLPllb9dcfpSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcEXY%2FgVC7eHPPfiKKtwDm3%2FhFGyOlMnN%2Fo4r1hPy3ojDdXQt%2BvcoAqFh3eW6%2Flgfaq2WJ3z6%2B2sGshBVTpVIooA2McTzQbYu%2BoO9vZ3V9M8sVp0x0RWut9t7vvDiayHEJP2KHFIcNWJyZ8eZiPR4KNB3VtOWF4ue5Oj3Q2ejWcIqzncO9OPJRupxwAB7P5Ihl04zTq9sz%2F%2BoLg3t%2F0VsBD2QhN0DS6JX%2FLpnw4fZ1GIw7LLXOLyYH2UBfBzNKybqpZwEASPmCVoUqzAdjDgQcW7cS38GklTVHzyqV%2BRjV7YD2dhcEZ9e88rjJjWe%2BUriK1rmOIe4HomysMcq1XCuhVCUWziWXKufo%2FDg3ddTm8md%2FB9K2Z4ilrTfP%2FaXi%2BPDWA9K95chE0lbt9sZ1jN3nHBnPoAIsWgxYaLGXBGcz90HN0CnLuNs04ElgDOG6hcMmToKYFmHAS5c1UA1GHNv%2FfkSHJgdvnijkclPfMoC1DZwZnptzG%2BAGTF8unkQbX%2Fjttp8YIl9FT9wxCJTAHX7IRxnkWBHwgNw%2FhU28Vn15ossBI2lBL3qgZA4Hy%2FZOWuG%2BgeAJ8R22ek6pfqy%2FeBV1egr46Tzng1C4MBNupN8yHVEOGgSRjawl%2BH4hWoW7hInAgL9FY1RPfsLszkwxMjhvQY6pgFXpDhcNUB5CfvzfM36vL32gn8oGqesq1lW7EPwsE8wHjYzgx6remBh2ifByMDyvwd1ehaiRH1c1Jvx5X8B5oOPLOO3mXMwipmHUp9R4LCtGJ031i4T%2F71MHomqovLi%2FToJyy9i2HLrV4WpvkjUkkXXL8T83HsGmPBLb6jpX4Rrdg2etwO%2FalFm7oFtxtvFAi7O4F%2FUTjodQd0arUcRriNwJqVghszc&X-Amz-Signature=4bc42b242c96f8886aa0885a114abbbfb760f8781b70d28297ca2fe8c4a81ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWEC3QS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyJyM3nQIOAvztyabT181yC9MLP%2BihhRr%2FvQfUcoESVAiAcQwjznIHpdWsXNRz7n7GEiLkgPRhAd1WLPllb9dcfpSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcEXY%2FgVC7eHPPfiKKtwDm3%2FhFGyOlMnN%2Fo4r1hPy3ojDdXQt%2BvcoAqFh3eW6%2Flgfaq2WJ3z6%2B2sGshBVTpVIooA2McTzQbYu%2BoO9vZ3V9M8sVp0x0RWut9t7vvDiayHEJP2KHFIcNWJyZ8eZiPR4KNB3VtOWF4ue5Oj3Q2ejWcIqzncO9OPJRupxwAB7P5Ihl04zTq9sz%2F%2BoLg3t%2F0VsBD2QhN0DS6JX%2FLpnw4fZ1GIw7LLXOLyYH2UBfBzNKybqpZwEASPmCVoUqzAdjDgQcW7cS38GklTVHzyqV%2BRjV7YD2dhcEZ9e88rjJjWe%2BUriK1rmOIe4HomysMcq1XCuhVCUWziWXKufo%2FDg3ddTm8md%2FB9K2Z4ilrTfP%2FaXi%2BPDWA9K95chE0lbt9sZ1jN3nHBnPoAIsWgxYaLGXBGcz90HN0CnLuNs04ElgDOG6hcMmToKYFmHAS5c1UA1GHNv%2FfkSHJgdvnijkclPfMoC1DZwZnptzG%2BAGTF8unkQbX%2Fjttp8YIl9FT9wxCJTAHX7IRxnkWBHwgNw%2FhU28Vn15ossBI2lBL3qgZA4Hy%2FZOWuG%2BgeAJ8R22ek6pfqy%2FeBV1egr46Tzng1C4MBNupN8yHVEOGgSRjawl%2BH4hWoW7hInAgL9FY1RPfsLszkwxMjhvQY6pgFXpDhcNUB5CfvzfM36vL32gn8oGqesq1lW7EPwsE8wHjYzgx6remBh2ifByMDyvwd1ehaiRH1c1Jvx5X8B5oOPLOO3mXMwipmHUp9R4LCtGJ031i4T%2F71MHomqovLi%2FToJyy9i2HLrV4WpvkjUkkXXL8T83HsGmPBLb6jpX4Rrdg2etwO%2FalFm7oFtxtvFAi7O4F%2FUTjodQd0arUcRriNwJqVghszc&X-Amz-Signature=f26a77533e09f87b1e05b5472700fc3048f5974108d034fe24530cf93cb02cd1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWEC3QS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyJyM3nQIOAvztyabT181yC9MLP%2BihhRr%2FvQfUcoESVAiAcQwjznIHpdWsXNRz7n7GEiLkgPRhAd1WLPllb9dcfpSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcEXY%2FgVC7eHPPfiKKtwDm3%2FhFGyOlMnN%2Fo4r1hPy3ojDdXQt%2BvcoAqFh3eW6%2Flgfaq2WJ3z6%2B2sGshBVTpVIooA2McTzQbYu%2BoO9vZ3V9M8sVp0x0RWut9t7vvDiayHEJP2KHFIcNWJyZ8eZiPR4KNB3VtOWF4ue5Oj3Q2ejWcIqzncO9OPJRupxwAB7P5Ihl04zTq9sz%2F%2BoLg3t%2F0VsBD2QhN0DS6JX%2FLpnw4fZ1GIw7LLXOLyYH2UBfBzNKybqpZwEASPmCVoUqzAdjDgQcW7cS38GklTVHzyqV%2BRjV7YD2dhcEZ9e88rjJjWe%2BUriK1rmOIe4HomysMcq1XCuhVCUWziWXKufo%2FDg3ddTm8md%2FB9K2Z4ilrTfP%2FaXi%2BPDWA9K95chE0lbt9sZ1jN3nHBnPoAIsWgxYaLGXBGcz90HN0CnLuNs04ElgDOG6hcMmToKYFmHAS5c1UA1GHNv%2FfkSHJgdvnijkclPfMoC1DZwZnptzG%2BAGTF8unkQbX%2Fjttp8YIl9FT9wxCJTAHX7IRxnkWBHwgNw%2FhU28Vn15ossBI2lBL3qgZA4Hy%2FZOWuG%2BgeAJ8R22ek6pfqy%2FeBV1egr46Tzng1C4MBNupN8yHVEOGgSRjawl%2BH4hWoW7hInAgL9FY1RPfsLszkwxMjhvQY6pgFXpDhcNUB5CfvzfM36vL32gn8oGqesq1lW7EPwsE8wHjYzgx6remBh2ifByMDyvwd1ehaiRH1c1Jvx5X8B5oOPLOO3mXMwipmHUp9R4LCtGJ031i4T%2F71MHomqovLi%2FToJyy9i2HLrV4WpvkjUkkXXL8T83HsGmPBLb6jpX4Rrdg2etwO%2FalFm7oFtxtvFAi7O4F%2FUTjodQd0arUcRriNwJqVghszc&X-Amz-Signature=55f903ae32b3eb906bf5d4bd914bdd94d3ce120916fbf92bfe18e3bc70b45c61&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
