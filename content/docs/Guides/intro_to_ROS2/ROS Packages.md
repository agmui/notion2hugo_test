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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIMADJPM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgn6QQGSwtAvfDXb7WOPc7CyWBitSDqq5N6oUfgb0buwIhALcON%2BqRCILjEawaxL3MOLpocm1q9LJMer5YSt33RmKuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysWVIeap6siAAbZn8q3AOkCuMUjnqpt%2BlSq1YLR7hopN1F39uD5I1sry1FdpTn2lCljf21Og6npDX496uTFuFp0Y8gRZ7alP2sRjc%2BX0Se%2FXJZvNDNSHU0OpR3EjFk%2FvTlEkDmYiTthZr9KjCXSl53puSP68rS9IVLo2OiMzmSkie3aXQQyPSmTEzkQDIa0EaTkQy4RNtLSl0Tu8C1RygYFNaRmgVyBfejtWIA4P6V%2Bk68Sc6FCZFmERV2yNbMJXGYJdviF3%2BmLPdFPR4v4Ah7%2FckEQpBjneV8Glu4YjgwHuJhBpmf9JVXmsSBPUA2GiyXFwAmFFDyZfmRrogLLkiVVOYWbbPc%2FBic%2BKe99O%2B5PdGzJk%2Bnjs77IrgTYUDTsSv3WWYicY%2B%2BjtyFi77LNal%2BBn1K7YZRnOQljPfjYb2AaRvsasR8whK7vljPSwRBYhEwAIGmyF56DIR1KDzuycPNKPLelxa5Wde%2Fn1TmELaaEcT%2FbOrRNcx1FRJIoEuRrNSBro98An2vnd640AJVZpTXBCf2RYqvc4YtitIGhEecIhGjPdEEPINCFjvwM5VpZUYoIz%2FnIuFHwUlh7L8WDTFPArmpPNtTkZ9FzE68cw593Upgc5z9L0EnrLzHQZuR0efJB8%2BhvQfDH63DYTDqjd69BjqkAfB0a4WvnLV5fem95OU1OM9D7J%2BCR9%2F%2Bw32S8jdAm3tA0zbmvwZoMXRU5cOFP6A1AFv3y8z5AvAEkzYa2JvUy9UJOsheD1%2FGG5pHPp0fl00J%2F5Xlo3e2xsKYEO%2FjGpqk3AJbDrOiT%2Bnf4Zp2OR1ncfO9bm6gcb9cri2cZCr82h74v8sKluoYLKc9oipuaVMA2I43rlS4kzqZsWthFNm4EGBhADtL&X-Amz-Signature=46963c645e4bcbdfe80c7be0cc5d124cda918bc01877c672746e5523b4757b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIMADJPM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgn6QQGSwtAvfDXb7WOPc7CyWBitSDqq5N6oUfgb0buwIhALcON%2BqRCILjEawaxL3MOLpocm1q9LJMer5YSt33RmKuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysWVIeap6siAAbZn8q3AOkCuMUjnqpt%2BlSq1YLR7hopN1F39uD5I1sry1FdpTn2lCljf21Og6npDX496uTFuFp0Y8gRZ7alP2sRjc%2BX0Se%2FXJZvNDNSHU0OpR3EjFk%2FvTlEkDmYiTthZr9KjCXSl53puSP68rS9IVLo2OiMzmSkie3aXQQyPSmTEzkQDIa0EaTkQy4RNtLSl0Tu8C1RygYFNaRmgVyBfejtWIA4P6V%2Bk68Sc6FCZFmERV2yNbMJXGYJdviF3%2BmLPdFPR4v4Ah7%2FckEQpBjneV8Glu4YjgwHuJhBpmf9JVXmsSBPUA2GiyXFwAmFFDyZfmRrogLLkiVVOYWbbPc%2FBic%2BKe99O%2B5PdGzJk%2Bnjs77IrgTYUDTsSv3WWYicY%2B%2BjtyFi77LNal%2BBn1K7YZRnOQljPfjYb2AaRvsasR8whK7vljPSwRBYhEwAIGmyF56DIR1KDzuycPNKPLelxa5Wde%2Fn1TmELaaEcT%2FbOrRNcx1FRJIoEuRrNSBro98An2vnd640AJVZpTXBCf2RYqvc4YtitIGhEecIhGjPdEEPINCFjvwM5VpZUYoIz%2FnIuFHwUlh7L8WDTFPArmpPNtTkZ9FzE68cw593Upgc5z9L0EnrLzHQZuR0efJB8%2BhvQfDH63DYTDqjd69BjqkAfB0a4WvnLV5fem95OU1OM9D7J%2BCR9%2F%2Bw32S8jdAm3tA0zbmvwZoMXRU5cOFP6A1AFv3y8z5AvAEkzYa2JvUy9UJOsheD1%2FGG5pHPp0fl00J%2F5Xlo3e2xsKYEO%2FjGpqk3AJbDrOiT%2Bnf4Zp2OR1ncfO9bm6gcb9cri2cZCr82h74v8sKluoYLKc9oipuaVMA2I43rlS4kzqZsWthFNm4EGBhADtL&X-Amz-Signature=dbc89903755ed5c57f738ee3159165ab5c1cabe836912d5e14b5d4d3dd7c2203&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIMADJPM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgn6QQGSwtAvfDXb7WOPc7CyWBitSDqq5N6oUfgb0buwIhALcON%2BqRCILjEawaxL3MOLpocm1q9LJMer5YSt33RmKuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysWVIeap6siAAbZn8q3AOkCuMUjnqpt%2BlSq1YLR7hopN1F39uD5I1sry1FdpTn2lCljf21Og6npDX496uTFuFp0Y8gRZ7alP2sRjc%2BX0Se%2FXJZvNDNSHU0OpR3EjFk%2FvTlEkDmYiTthZr9KjCXSl53puSP68rS9IVLo2OiMzmSkie3aXQQyPSmTEzkQDIa0EaTkQy4RNtLSl0Tu8C1RygYFNaRmgVyBfejtWIA4P6V%2Bk68Sc6FCZFmERV2yNbMJXGYJdviF3%2BmLPdFPR4v4Ah7%2FckEQpBjneV8Glu4YjgwHuJhBpmf9JVXmsSBPUA2GiyXFwAmFFDyZfmRrogLLkiVVOYWbbPc%2FBic%2BKe99O%2B5PdGzJk%2Bnjs77IrgTYUDTsSv3WWYicY%2B%2BjtyFi77LNal%2BBn1K7YZRnOQljPfjYb2AaRvsasR8whK7vljPSwRBYhEwAIGmyF56DIR1KDzuycPNKPLelxa5Wde%2Fn1TmELaaEcT%2FbOrRNcx1FRJIoEuRrNSBro98An2vnd640AJVZpTXBCf2RYqvc4YtitIGhEecIhGjPdEEPINCFjvwM5VpZUYoIz%2FnIuFHwUlh7L8WDTFPArmpPNtTkZ9FzE68cw593Upgc5z9L0EnrLzHQZuR0efJB8%2BhvQfDH63DYTDqjd69BjqkAfB0a4WvnLV5fem95OU1OM9D7J%2BCR9%2F%2Bw32S8jdAm3tA0zbmvwZoMXRU5cOFP6A1AFv3y8z5AvAEkzYa2JvUy9UJOsheD1%2FGG5pHPp0fl00J%2F5Xlo3e2xsKYEO%2FjGpqk3AJbDrOiT%2Bnf4Zp2OR1ncfO9bm6gcb9cri2cZCr82h74v8sKluoYLKc9oipuaVMA2I43rlS4kzqZsWthFNm4EGBhADtL&X-Amz-Signature=0ba4bd2975d8d3e06ab22721cb5e368dd018f71ebebf6b98221fbd738d6e7c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIMADJPM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgn6QQGSwtAvfDXb7WOPc7CyWBitSDqq5N6oUfgb0buwIhALcON%2BqRCILjEawaxL3MOLpocm1q9LJMer5YSt33RmKuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysWVIeap6siAAbZn8q3AOkCuMUjnqpt%2BlSq1YLR7hopN1F39uD5I1sry1FdpTn2lCljf21Og6npDX496uTFuFp0Y8gRZ7alP2sRjc%2BX0Se%2FXJZvNDNSHU0OpR3EjFk%2FvTlEkDmYiTthZr9KjCXSl53puSP68rS9IVLo2OiMzmSkie3aXQQyPSmTEzkQDIa0EaTkQy4RNtLSl0Tu8C1RygYFNaRmgVyBfejtWIA4P6V%2Bk68Sc6FCZFmERV2yNbMJXGYJdviF3%2BmLPdFPR4v4Ah7%2FckEQpBjneV8Glu4YjgwHuJhBpmf9JVXmsSBPUA2GiyXFwAmFFDyZfmRrogLLkiVVOYWbbPc%2FBic%2BKe99O%2B5PdGzJk%2Bnjs77IrgTYUDTsSv3WWYicY%2B%2BjtyFi77LNal%2BBn1K7YZRnOQljPfjYb2AaRvsasR8whK7vljPSwRBYhEwAIGmyF56DIR1KDzuycPNKPLelxa5Wde%2Fn1TmELaaEcT%2FbOrRNcx1FRJIoEuRrNSBro98An2vnd640AJVZpTXBCf2RYqvc4YtitIGhEecIhGjPdEEPINCFjvwM5VpZUYoIz%2FnIuFHwUlh7L8WDTFPArmpPNtTkZ9FzE68cw593Upgc5z9L0EnrLzHQZuR0efJB8%2BhvQfDH63DYTDqjd69BjqkAfB0a4WvnLV5fem95OU1OM9D7J%2BCR9%2F%2Bw32S8jdAm3tA0zbmvwZoMXRU5cOFP6A1AFv3y8z5AvAEkzYa2JvUy9UJOsheD1%2FGG5pHPp0fl00J%2F5Xlo3e2xsKYEO%2FjGpqk3AJbDrOiT%2Bnf4Zp2OR1ncfO9bm6gcb9cri2cZCr82h74v8sKluoYLKc9oipuaVMA2I43rlS4kzqZsWthFNm4EGBhADtL&X-Amz-Signature=84152edef0f37aed0b85867780563ace8d334b60090b567637debb6edb4d649a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIMADJPM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgn6QQGSwtAvfDXb7WOPc7CyWBitSDqq5N6oUfgb0buwIhALcON%2BqRCILjEawaxL3MOLpocm1q9LJMer5YSt33RmKuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysWVIeap6siAAbZn8q3AOkCuMUjnqpt%2BlSq1YLR7hopN1F39uD5I1sry1FdpTn2lCljf21Og6npDX496uTFuFp0Y8gRZ7alP2sRjc%2BX0Se%2FXJZvNDNSHU0OpR3EjFk%2FvTlEkDmYiTthZr9KjCXSl53puSP68rS9IVLo2OiMzmSkie3aXQQyPSmTEzkQDIa0EaTkQy4RNtLSl0Tu8C1RygYFNaRmgVyBfejtWIA4P6V%2Bk68Sc6FCZFmERV2yNbMJXGYJdviF3%2BmLPdFPR4v4Ah7%2FckEQpBjneV8Glu4YjgwHuJhBpmf9JVXmsSBPUA2GiyXFwAmFFDyZfmRrogLLkiVVOYWbbPc%2FBic%2BKe99O%2B5PdGzJk%2Bnjs77IrgTYUDTsSv3WWYicY%2B%2BjtyFi77LNal%2BBn1K7YZRnOQljPfjYb2AaRvsasR8whK7vljPSwRBYhEwAIGmyF56DIR1KDzuycPNKPLelxa5Wde%2Fn1TmELaaEcT%2FbOrRNcx1FRJIoEuRrNSBro98An2vnd640AJVZpTXBCf2RYqvc4YtitIGhEecIhGjPdEEPINCFjvwM5VpZUYoIz%2FnIuFHwUlh7L8WDTFPArmpPNtTkZ9FzE68cw593Upgc5z9L0EnrLzHQZuR0efJB8%2BhvQfDH63DYTDqjd69BjqkAfB0a4WvnLV5fem95OU1OM9D7J%2BCR9%2F%2Bw32S8jdAm3tA0zbmvwZoMXRU5cOFP6A1AFv3y8z5AvAEkzYa2JvUy9UJOsheD1%2FGG5pHPp0fl00J%2F5Xlo3e2xsKYEO%2FjGpqk3AJbDrOiT%2Bnf4Zp2OR1ncfO9bm6gcb9cri2cZCr82h74v8sKluoYLKc9oipuaVMA2I43rlS4kzqZsWthFNm4EGBhADtL&X-Amz-Signature=d3314eb5bbafb78d043310ccab17ad2a42cc08d1241ab4684211a20ad93666ca&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIMADJPM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgn6QQGSwtAvfDXb7WOPc7CyWBitSDqq5N6oUfgb0buwIhALcON%2BqRCILjEawaxL3MOLpocm1q9LJMer5YSt33RmKuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysWVIeap6siAAbZn8q3AOkCuMUjnqpt%2BlSq1YLR7hopN1F39uD5I1sry1FdpTn2lCljf21Og6npDX496uTFuFp0Y8gRZ7alP2sRjc%2BX0Se%2FXJZvNDNSHU0OpR3EjFk%2FvTlEkDmYiTthZr9KjCXSl53puSP68rS9IVLo2OiMzmSkie3aXQQyPSmTEzkQDIa0EaTkQy4RNtLSl0Tu8C1RygYFNaRmgVyBfejtWIA4P6V%2Bk68Sc6FCZFmERV2yNbMJXGYJdviF3%2BmLPdFPR4v4Ah7%2FckEQpBjneV8Glu4YjgwHuJhBpmf9JVXmsSBPUA2GiyXFwAmFFDyZfmRrogLLkiVVOYWbbPc%2FBic%2BKe99O%2B5PdGzJk%2Bnjs77IrgTYUDTsSv3WWYicY%2B%2BjtyFi77LNal%2BBn1K7YZRnOQljPfjYb2AaRvsasR8whK7vljPSwRBYhEwAIGmyF56DIR1KDzuycPNKPLelxa5Wde%2Fn1TmELaaEcT%2FbOrRNcx1FRJIoEuRrNSBro98An2vnd640AJVZpTXBCf2RYqvc4YtitIGhEecIhGjPdEEPINCFjvwM5VpZUYoIz%2FnIuFHwUlh7L8WDTFPArmpPNtTkZ9FzE68cw593Upgc5z9L0EnrLzHQZuR0efJB8%2BhvQfDH63DYTDqjd69BjqkAfB0a4WvnLV5fem95OU1OM9D7J%2BCR9%2F%2Bw32S8jdAm3tA0zbmvwZoMXRU5cOFP6A1AFv3y8z5AvAEkzYa2JvUy9UJOsheD1%2FGG5pHPp0fl00J%2F5Xlo3e2xsKYEO%2FjGpqk3AJbDrOiT%2Bnf4Zp2OR1ncfO9bm6gcb9cri2cZCr82h74v8sKluoYLKc9oipuaVMA2I43rlS4kzqZsWthFNm4EGBhADtL&X-Amz-Signature=1f9df2f7a57ad073cacc203cc1aa7e804f5a7040ac9aa3e1e17cb2c2d5fe4150&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIMADJPM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgn6QQGSwtAvfDXb7WOPc7CyWBitSDqq5N6oUfgb0buwIhALcON%2BqRCILjEawaxL3MOLpocm1q9LJMer5YSt33RmKuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysWVIeap6siAAbZn8q3AOkCuMUjnqpt%2BlSq1YLR7hopN1F39uD5I1sry1FdpTn2lCljf21Og6npDX496uTFuFp0Y8gRZ7alP2sRjc%2BX0Se%2FXJZvNDNSHU0OpR3EjFk%2FvTlEkDmYiTthZr9KjCXSl53puSP68rS9IVLo2OiMzmSkie3aXQQyPSmTEzkQDIa0EaTkQy4RNtLSl0Tu8C1RygYFNaRmgVyBfejtWIA4P6V%2Bk68Sc6FCZFmERV2yNbMJXGYJdviF3%2BmLPdFPR4v4Ah7%2FckEQpBjneV8Glu4YjgwHuJhBpmf9JVXmsSBPUA2GiyXFwAmFFDyZfmRrogLLkiVVOYWbbPc%2FBic%2BKe99O%2B5PdGzJk%2Bnjs77IrgTYUDTsSv3WWYicY%2B%2BjtyFi77LNal%2BBn1K7YZRnOQljPfjYb2AaRvsasR8whK7vljPSwRBYhEwAIGmyF56DIR1KDzuycPNKPLelxa5Wde%2Fn1TmELaaEcT%2FbOrRNcx1FRJIoEuRrNSBro98An2vnd640AJVZpTXBCf2RYqvc4YtitIGhEecIhGjPdEEPINCFjvwM5VpZUYoIz%2FnIuFHwUlh7L8WDTFPArmpPNtTkZ9FzE68cw593Upgc5z9L0EnrLzHQZuR0efJB8%2BhvQfDH63DYTDqjd69BjqkAfB0a4WvnLV5fem95OU1OM9D7J%2BCR9%2F%2Bw32S8jdAm3tA0zbmvwZoMXRU5cOFP6A1AFv3y8z5AvAEkzYa2JvUy9UJOsheD1%2FGG5pHPp0fl00J%2F5Xlo3e2xsKYEO%2FjGpqk3AJbDrOiT%2Bnf4Zp2OR1ncfO9bm6gcb9cri2cZCr82h74v8sKluoYLKc9oipuaVMA2I43rlS4kzqZsWthFNm4EGBhADtL&X-Amz-Signature=9e3cea7a11014da4bf0cbf150580210990faf062aaddcd59bc965971d4e90b50&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
