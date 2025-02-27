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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVABQT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHg%2BpE%2B%2BvffglId3bMONzOaZGbHhL6J8KXI%2FLQAhHOHXAiEA6AQ3KeuvKR5G0SxnqrFblhJcvfMJ4vtJtm4D%2FSOVNHUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOF4cygVHmLUjTWcuyrcA8ENt5NZH%2B17bOOtEpNUObX3Dy0E76PI9d8SKO0gTohbKeZHLwmgKZJCyl2AFyzdwoPPj3%2BM6UtRYdQfjFrWooWbrr7fDnuHrFlIjculWU62C3ZOuCfUhSeq3f5o1Sv5l1weXbFiHIYtkGteCvHwf6%2FrdTRUW94HJZgS5b%2B0fyA%2FLzasOoOt6AlEidDP3xmyUh76igNg51qgv3QczUQSClbAIuHzvxyDIo9S6GYGzmam9WVphgoH58b47%2BD1Va1NNkqypiyfR2LikaS70Z3aiCupjoIXMaeTkuqSqaZzbqSyA8PZaqOjRoqYWbs%2FgA9ZL8zjL0bxGRwscXdXS39x%2FKdQquhDA0yzb1xWeOHmzcx%2ByGFmK%2BLh2mJaxpwZp1LukpiCHnuivAc8TfWbg9k0zcEofdeEnev52y10F2OgER3Nezdx5D3eRvTyM%2Fp6ab1BaIlfaIULK3%2FAlqJW%2Fx48FIpqaocBFAkdap85f5Yd4Hxm0KwiAPw9cZSl4UZdk74igNcWhPOMu8UR4Xh2xt2u5o4ofpIY54c8wI2GnKlvlp1iUclId2kjXWhV7jr2DDpi8bp12n%2FgDM1ay1r92Bj8FoBpD3RUcNcbVHtTwTr9Tw5F5wLpldOLbro3pS%2FIMO7RgL4GOqUB5vBaCRimuLhfrz4A%2FAI6Rgrlms1pIWPRl%2Bkj8fI%2FUBHIlf5SKPLLyqHFCRshTruEiRm6G0DkK6KiENLHv9KXJn8Sr5XO0YehQncvZzZLycpYnSpJKDgIYXSNKLBZsl4F%2BqXzTjYPPe%2F2lbsjt1n0K8DXkLDJDfJIPI%2FD4nLDIJcAOhRHBDnK1hIFSfvkRLW%2BrgdKUjZ%2FD6RM7vhcrCFpv6g1qybA&X-Amz-Signature=31d2171cd4971d640096d193e02615704ff67b8a7e23ee9c96d834206c04da7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVABQT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHg%2BpE%2B%2BvffglId3bMONzOaZGbHhL6J8KXI%2FLQAhHOHXAiEA6AQ3KeuvKR5G0SxnqrFblhJcvfMJ4vtJtm4D%2FSOVNHUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOF4cygVHmLUjTWcuyrcA8ENt5NZH%2B17bOOtEpNUObX3Dy0E76PI9d8SKO0gTohbKeZHLwmgKZJCyl2AFyzdwoPPj3%2BM6UtRYdQfjFrWooWbrr7fDnuHrFlIjculWU62C3ZOuCfUhSeq3f5o1Sv5l1weXbFiHIYtkGteCvHwf6%2FrdTRUW94HJZgS5b%2B0fyA%2FLzasOoOt6AlEidDP3xmyUh76igNg51qgv3QczUQSClbAIuHzvxyDIo9S6GYGzmam9WVphgoH58b47%2BD1Va1NNkqypiyfR2LikaS70Z3aiCupjoIXMaeTkuqSqaZzbqSyA8PZaqOjRoqYWbs%2FgA9ZL8zjL0bxGRwscXdXS39x%2FKdQquhDA0yzb1xWeOHmzcx%2ByGFmK%2BLh2mJaxpwZp1LukpiCHnuivAc8TfWbg9k0zcEofdeEnev52y10F2OgER3Nezdx5D3eRvTyM%2Fp6ab1BaIlfaIULK3%2FAlqJW%2Fx48FIpqaocBFAkdap85f5Yd4Hxm0KwiAPw9cZSl4UZdk74igNcWhPOMu8UR4Xh2xt2u5o4ofpIY54c8wI2GnKlvlp1iUclId2kjXWhV7jr2DDpi8bp12n%2FgDM1ay1r92Bj8FoBpD3RUcNcbVHtTwTr9Tw5F5wLpldOLbro3pS%2FIMO7RgL4GOqUB5vBaCRimuLhfrz4A%2FAI6Rgrlms1pIWPRl%2Bkj8fI%2FUBHIlf5SKPLLyqHFCRshTruEiRm6G0DkK6KiENLHv9KXJn8Sr5XO0YehQncvZzZLycpYnSpJKDgIYXSNKLBZsl4F%2BqXzTjYPPe%2F2lbsjt1n0K8DXkLDJDfJIPI%2FD4nLDIJcAOhRHBDnK1hIFSfvkRLW%2BrgdKUjZ%2FD6RM7vhcrCFpv6g1qybA&X-Amz-Signature=2c0162ee70515087306a8325ef06f4685d62654ca8f98fb0bf164844f1cf25bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVABQT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHg%2BpE%2B%2BvffglId3bMONzOaZGbHhL6J8KXI%2FLQAhHOHXAiEA6AQ3KeuvKR5G0SxnqrFblhJcvfMJ4vtJtm4D%2FSOVNHUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOF4cygVHmLUjTWcuyrcA8ENt5NZH%2B17bOOtEpNUObX3Dy0E76PI9d8SKO0gTohbKeZHLwmgKZJCyl2AFyzdwoPPj3%2BM6UtRYdQfjFrWooWbrr7fDnuHrFlIjculWU62C3ZOuCfUhSeq3f5o1Sv5l1weXbFiHIYtkGteCvHwf6%2FrdTRUW94HJZgS5b%2B0fyA%2FLzasOoOt6AlEidDP3xmyUh76igNg51qgv3QczUQSClbAIuHzvxyDIo9S6GYGzmam9WVphgoH58b47%2BD1Va1NNkqypiyfR2LikaS70Z3aiCupjoIXMaeTkuqSqaZzbqSyA8PZaqOjRoqYWbs%2FgA9ZL8zjL0bxGRwscXdXS39x%2FKdQquhDA0yzb1xWeOHmzcx%2ByGFmK%2BLh2mJaxpwZp1LukpiCHnuivAc8TfWbg9k0zcEofdeEnev52y10F2OgER3Nezdx5D3eRvTyM%2Fp6ab1BaIlfaIULK3%2FAlqJW%2Fx48FIpqaocBFAkdap85f5Yd4Hxm0KwiAPw9cZSl4UZdk74igNcWhPOMu8UR4Xh2xt2u5o4ofpIY54c8wI2GnKlvlp1iUclId2kjXWhV7jr2DDpi8bp12n%2FgDM1ay1r92Bj8FoBpD3RUcNcbVHtTwTr9Tw5F5wLpldOLbro3pS%2FIMO7RgL4GOqUB5vBaCRimuLhfrz4A%2FAI6Rgrlms1pIWPRl%2Bkj8fI%2FUBHIlf5SKPLLyqHFCRshTruEiRm6G0DkK6KiENLHv9KXJn8Sr5XO0YehQncvZzZLycpYnSpJKDgIYXSNKLBZsl4F%2BqXzTjYPPe%2F2lbsjt1n0K8DXkLDJDfJIPI%2FD4nLDIJcAOhRHBDnK1hIFSfvkRLW%2BrgdKUjZ%2FD6RM7vhcrCFpv6g1qybA&X-Amz-Signature=4c5c0ea9ca0fb1a5b7a940f73ee9d8d55317ab27a96860fc0242476ac09027b5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVABQT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHg%2BpE%2B%2BvffglId3bMONzOaZGbHhL6J8KXI%2FLQAhHOHXAiEA6AQ3KeuvKR5G0SxnqrFblhJcvfMJ4vtJtm4D%2FSOVNHUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOF4cygVHmLUjTWcuyrcA8ENt5NZH%2B17bOOtEpNUObX3Dy0E76PI9d8SKO0gTohbKeZHLwmgKZJCyl2AFyzdwoPPj3%2BM6UtRYdQfjFrWooWbrr7fDnuHrFlIjculWU62C3ZOuCfUhSeq3f5o1Sv5l1weXbFiHIYtkGteCvHwf6%2FrdTRUW94HJZgS5b%2B0fyA%2FLzasOoOt6AlEidDP3xmyUh76igNg51qgv3QczUQSClbAIuHzvxyDIo9S6GYGzmam9WVphgoH58b47%2BD1Va1NNkqypiyfR2LikaS70Z3aiCupjoIXMaeTkuqSqaZzbqSyA8PZaqOjRoqYWbs%2FgA9ZL8zjL0bxGRwscXdXS39x%2FKdQquhDA0yzb1xWeOHmzcx%2ByGFmK%2BLh2mJaxpwZp1LukpiCHnuivAc8TfWbg9k0zcEofdeEnev52y10F2OgER3Nezdx5D3eRvTyM%2Fp6ab1BaIlfaIULK3%2FAlqJW%2Fx48FIpqaocBFAkdap85f5Yd4Hxm0KwiAPw9cZSl4UZdk74igNcWhPOMu8UR4Xh2xt2u5o4ofpIY54c8wI2GnKlvlp1iUclId2kjXWhV7jr2DDpi8bp12n%2FgDM1ay1r92Bj8FoBpD3RUcNcbVHtTwTr9Tw5F5wLpldOLbro3pS%2FIMO7RgL4GOqUB5vBaCRimuLhfrz4A%2FAI6Rgrlms1pIWPRl%2Bkj8fI%2FUBHIlf5SKPLLyqHFCRshTruEiRm6G0DkK6KiENLHv9KXJn8Sr5XO0YehQncvZzZLycpYnSpJKDgIYXSNKLBZsl4F%2BqXzTjYPPe%2F2lbsjt1n0K8DXkLDJDfJIPI%2FD4nLDIJcAOhRHBDnK1hIFSfvkRLW%2BrgdKUjZ%2FD6RM7vhcrCFpv6g1qybA&X-Amz-Signature=16ddf3ae6e927827af3f66aa8bf03f2cad07008ed896183e0bfe3755a0b765e3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVABQT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHg%2BpE%2B%2BvffglId3bMONzOaZGbHhL6J8KXI%2FLQAhHOHXAiEA6AQ3KeuvKR5G0SxnqrFblhJcvfMJ4vtJtm4D%2FSOVNHUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOF4cygVHmLUjTWcuyrcA8ENt5NZH%2B17bOOtEpNUObX3Dy0E76PI9d8SKO0gTohbKeZHLwmgKZJCyl2AFyzdwoPPj3%2BM6UtRYdQfjFrWooWbrr7fDnuHrFlIjculWU62C3ZOuCfUhSeq3f5o1Sv5l1weXbFiHIYtkGteCvHwf6%2FrdTRUW94HJZgS5b%2B0fyA%2FLzasOoOt6AlEidDP3xmyUh76igNg51qgv3QczUQSClbAIuHzvxyDIo9S6GYGzmam9WVphgoH58b47%2BD1Va1NNkqypiyfR2LikaS70Z3aiCupjoIXMaeTkuqSqaZzbqSyA8PZaqOjRoqYWbs%2FgA9ZL8zjL0bxGRwscXdXS39x%2FKdQquhDA0yzb1xWeOHmzcx%2ByGFmK%2BLh2mJaxpwZp1LukpiCHnuivAc8TfWbg9k0zcEofdeEnev52y10F2OgER3Nezdx5D3eRvTyM%2Fp6ab1BaIlfaIULK3%2FAlqJW%2Fx48FIpqaocBFAkdap85f5Yd4Hxm0KwiAPw9cZSl4UZdk74igNcWhPOMu8UR4Xh2xt2u5o4ofpIY54c8wI2GnKlvlp1iUclId2kjXWhV7jr2DDpi8bp12n%2FgDM1ay1r92Bj8FoBpD3RUcNcbVHtTwTr9Tw5F5wLpldOLbro3pS%2FIMO7RgL4GOqUB5vBaCRimuLhfrz4A%2FAI6Rgrlms1pIWPRl%2Bkj8fI%2FUBHIlf5SKPLLyqHFCRshTruEiRm6G0DkK6KiENLHv9KXJn8Sr5XO0YehQncvZzZLycpYnSpJKDgIYXSNKLBZsl4F%2BqXzTjYPPe%2F2lbsjt1n0K8DXkLDJDfJIPI%2FD4nLDIJcAOhRHBDnK1hIFSfvkRLW%2BrgdKUjZ%2FD6RM7vhcrCFpv6g1qybA&X-Amz-Signature=c47f24a386d160860369b371de2db4dc690a2868b40388c1c43409870cb76be8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVABQT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHg%2BpE%2B%2BvffglId3bMONzOaZGbHhL6J8KXI%2FLQAhHOHXAiEA6AQ3KeuvKR5G0SxnqrFblhJcvfMJ4vtJtm4D%2FSOVNHUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOF4cygVHmLUjTWcuyrcA8ENt5NZH%2B17bOOtEpNUObX3Dy0E76PI9d8SKO0gTohbKeZHLwmgKZJCyl2AFyzdwoPPj3%2BM6UtRYdQfjFrWooWbrr7fDnuHrFlIjculWU62C3ZOuCfUhSeq3f5o1Sv5l1weXbFiHIYtkGteCvHwf6%2FrdTRUW94HJZgS5b%2B0fyA%2FLzasOoOt6AlEidDP3xmyUh76igNg51qgv3QczUQSClbAIuHzvxyDIo9S6GYGzmam9WVphgoH58b47%2BD1Va1NNkqypiyfR2LikaS70Z3aiCupjoIXMaeTkuqSqaZzbqSyA8PZaqOjRoqYWbs%2FgA9ZL8zjL0bxGRwscXdXS39x%2FKdQquhDA0yzb1xWeOHmzcx%2ByGFmK%2BLh2mJaxpwZp1LukpiCHnuivAc8TfWbg9k0zcEofdeEnev52y10F2OgER3Nezdx5D3eRvTyM%2Fp6ab1BaIlfaIULK3%2FAlqJW%2Fx48FIpqaocBFAkdap85f5Yd4Hxm0KwiAPw9cZSl4UZdk74igNcWhPOMu8UR4Xh2xt2u5o4ofpIY54c8wI2GnKlvlp1iUclId2kjXWhV7jr2DDpi8bp12n%2FgDM1ay1r92Bj8FoBpD3RUcNcbVHtTwTr9Tw5F5wLpldOLbro3pS%2FIMO7RgL4GOqUB5vBaCRimuLhfrz4A%2FAI6Rgrlms1pIWPRl%2Bkj8fI%2FUBHIlf5SKPLLyqHFCRshTruEiRm6G0DkK6KiENLHv9KXJn8Sr5XO0YehQncvZzZLycpYnSpJKDgIYXSNKLBZsl4F%2BqXzTjYPPe%2F2lbsjt1n0K8DXkLDJDfJIPI%2FD4nLDIJcAOhRHBDnK1hIFSfvkRLW%2BrgdKUjZ%2FD6RM7vhcrCFpv6g1qybA&X-Amz-Signature=58304b4909b9a19cfaf1faaf2d2e4570b66a97f3b2fa444c600c53bf688edbdd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVABQT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHg%2BpE%2B%2BvffglId3bMONzOaZGbHhL6J8KXI%2FLQAhHOHXAiEA6AQ3KeuvKR5G0SxnqrFblhJcvfMJ4vtJtm4D%2FSOVNHUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOF4cygVHmLUjTWcuyrcA8ENt5NZH%2B17bOOtEpNUObX3Dy0E76PI9d8SKO0gTohbKeZHLwmgKZJCyl2AFyzdwoPPj3%2BM6UtRYdQfjFrWooWbrr7fDnuHrFlIjculWU62C3ZOuCfUhSeq3f5o1Sv5l1weXbFiHIYtkGteCvHwf6%2FrdTRUW94HJZgS5b%2B0fyA%2FLzasOoOt6AlEidDP3xmyUh76igNg51qgv3QczUQSClbAIuHzvxyDIo9S6GYGzmam9WVphgoH58b47%2BD1Va1NNkqypiyfR2LikaS70Z3aiCupjoIXMaeTkuqSqaZzbqSyA8PZaqOjRoqYWbs%2FgA9ZL8zjL0bxGRwscXdXS39x%2FKdQquhDA0yzb1xWeOHmzcx%2ByGFmK%2BLh2mJaxpwZp1LukpiCHnuivAc8TfWbg9k0zcEofdeEnev52y10F2OgER3Nezdx5D3eRvTyM%2Fp6ab1BaIlfaIULK3%2FAlqJW%2Fx48FIpqaocBFAkdap85f5Yd4Hxm0KwiAPw9cZSl4UZdk74igNcWhPOMu8UR4Xh2xt2u5o4ofpIY54c8wI2GnKlvlp1iUclId2kjXWhV7jr2DDpi8bp12n%2FgDM1ay1r92Bj8FoBpD3RUcNcbVHtTwTr9Tw5F5wLpldOLbro3pS%2FIMO7RgL4GOqUB5vBaCRimuLhfrz4A%2FAI6Rgrlms1pIWPRl%2Bkj8fI%2FUBHIlf5SKPLLyqHFCRshTruEiRm6G0DkK6KiENLHv9KXJn8Sr5XO0YehQncvZzZLycpYnSpJKDgIYXSNKLBZsl4F%2BqXzTjYPPe%2F2lbsjt1n0K8DXkLDJDfJIPI%2FD4nLDIJcAOhRHBDnK1hIFSfvkRLW%2BrgdKUjZ%2FD6RM7vhcrCFpv6g1qybA&X-Amz-Signature=071c41957702e0e91ce2c9e23b8faa2089f732be7a4782d55228180c470693b7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
