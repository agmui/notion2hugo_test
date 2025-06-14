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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUJDHER%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCyGnMJVTPp%2FyVY4GGKSi0aquHYQuQIJIIHEQpcXXqG6gIgPhYcUfLF%2BEDXnFcKZ9Rxk8R4fWtJQ5NnEkWGiKZxFMsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEZOMfiL5wQ48ZzPhCrcAwyBZHT6PHewIl8V4CssFT%2Fr37gmKmszwF0eTZ1UQkNAUl%2FH2wxi%2BZuMCps3b%2FQK3n9P74Td12s2kgM2NnUrTvclAjQMzy6HUj7TQ6N1kfRwZ%2BqDOla%2FNJcNeUiRqtfnSo%2Bjxt2O9NQkBvKR%2BzvvcZb%2ByItiEJcsKLgX1XYlOfoAF0qZ855N6ksfwqwNWNF6meKPWVIRFLaCTyJdynQaR%2FdTlIn2dgJ1l7wo9SO5QSmfjZULP9ldULj7lCdb0%2Bn4dYMW%2BruSzHeCD9%2Bup9LtLCduMHX%2BSkV%2F%2B5RWcWrq9DXOSfYAMNOoGg%2B9fAdtzGV%2Bmp36w8PyzImoNb4c8FkZuH3ZfYPqBPT3ZzjCclSZy3vXvJ7TVtmCbjxAYs9Uh0b3NIi0A3enKDbrftztfzH0ohuDt5F823aKn9mK3yc6a68JEAIGD2%2B%2FomKd1mpUA25NRnBJWRlsCrjsimSDOMyzMmGrnPTkXqmUvF425jVFcuu%2BB6sEEpwL3PxAUTLlatyqc91Pg6S1lHurhtBubDhuOCcRWesB2oB72DG26j2BWNFHIG8TxgdbbWDAImsOi6g1TnMTu5I8GBWu2DjL0kUF52Zntopk5oBriPNvBHBuI9YVW8i4GxQ1qWqFbztlMOLBtcIGOqUBBw%2BqLAlIz3Irlpce82GFVYyT6TvaQ7uLyvkg%2FdWVwaxNLljWrzYpZ2hEBRmcUkoYRyEQA6RjkHH0F1SDyl4YceBIRiNGfbPnMFJSd%2FJBVrxuewDI9IppbTmXVP2Y53fqCwS2cwaP3Ia7uBy0Nn783lQ%2FXSkghXzVp23BzPFPWQHCPDjeRnnvsopZvvB%2BdD9TMhg42FadlxNAWngk1K5hApJXCjSe&X-Amz-Signature=e5620a72de407ba0b515de485701fefa680bfc53e4281dd402a99ccde70913d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUJDHER%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCyGnMJVTPp%2FyVY4GGKSi0aquHYQuQIJIIHEQpcXXqG6gIgPhYcUfLF%2BEDXnFcKZ9Rxk8R4fWtJQ5NnEkWGiKZxFMsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEZOMfiL5wQ48ZzPhCrcAwyBZHT6PHewIl8V4CssFT%2Fr37gmKmszwF0eTZ1UQkNAUl%2FH2wxi%2BZuMCps3b%2FQK3n9P74Td12s2kgM2NnUrTvclAjQMzy6HUj7TQ6N1kfRwZ%2BqDOla%2FNJcNeUiRqtfnSo%2Bjxt2O9NQkBvKR%2BzvvcZb%2ByItiEJcsKLgX1XYlOfoAF0qZ855N6ksfwqwNWNF6meKPWVIRFLaCTyJdynQaR%2FdTlIn2dgJ1l7wo9SO5QSmfjZULP9ldULj7lCdb0%2Bn4dYMW%2BruSzHeCD9%2Bup9LtLCduMHX%2BSkV%2F%2B5RWcWrq9DXOSfYAMNOoGg%2B9fAdtzGV%2Bmp36w8PyzImoNb4c8FkZuH3ZfYPqBPT3ZzjCclSZy3vXvJ7TVtmCbjxAYs9Uh0b3NIi0A3enKDbrftztfzH0ohuDt5F823aKn9mK3yc6a68JEAIGD2%2B%2FomKd1mpUA25NRnBJWRlsCrjsimSDOMyzMmGrnPTkXqmUvF425jVFcuu%2BB6sEEpwL3PxAUTLlatyqc91Pg6S1lHurhtBubDhuOCcRWesB2oB72DG26j2BWNFHIG8TxgdbbWDAImsOi6g1TnMTu5I8GBWu2DjL0kUF52Zntopk5oBriPNvBHBuI9YVW8i4GxQ1qWqFbztlMOLBtcIGOqUBBw%2BqLAlIz3Irlpce82GFVYyT6TvaQ7uLyvkg%2FdWVwaxNLljWrzYpZ2hEBRmcUkoYRyEQA6RjkHH0F1SDyl4YceBIRiNGfbPnMFJSd%2FJBVrxuewDI9IppbTmXVP2Y53fqCwS2cwaP3Ia7uBy0Nn783lQ%2FXSkghXzVp23BzPFPWQHCPDjeRnnvsopZvvB%2BdD9TMhg42FadlxNAWngk1K5hApJXCjSe&X-Amz-Signature=2d903ba00694b0ad8eaedd150e17e71cd4747734df8d5bab87f2141f109762d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUJDHER%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCyGnMJVTPp%2FyVY4GGKSi0aquHYQuQIJIIHEQpcXXqG6gIgPhYcUfLF%2BEDXnFcKZ9Rxk8R4fWtJQ5NnEkWGiKZxFMsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEZOMfiL5wQ48ZzPhCrcAwyBZHT6PHewIl8V4CssFT%2Fr37gmKmszwF0eTZ1UQkNAUl%2FH2wxi%2BZuMCps3b%2FQK3n9P74Td12s2kgM2NnUrTvclAjQMzy6HUj7TQ6N1kfRwZ%2BqDOla%2FNJcNeUiRqtfnSo%2Bjxt2O9NQkBvKR%2BzvvcZb%2ByItiEJcsKLgX1XYlOfoAF0qZ855N6ksfwqwNWNF6meKPWVIRFLaCTyJdynQaR%2FdTlIn2dgJ1l7wo9SO5QSmfjZULP9ldULj7lCdb0%2Bn4dYMW%2BruSzHeCD9%2Bup9LtLCduMHX%2BSkV%2F%2B5RWcWrq9DXOSfYAMNOoGg%2B9fAdtzGV%2Bmp36w8PyzImoNb4c8FkZuH3ZfYPqBPT3ZzjCclSZy3vXvJ7TVtmCbjxAYs9Uh0b3NIi0A3enKDbrftztfzH0ohuDt5F823aKn9mK3yc6a68JEAIGD2%2B%2FomKd1mpUA25NRnBJWRlsCrjsimSDOMyzMmGrnPTkXqmUvF425jVFcuu%2BB6sEEpwL3PxAUTLlatyqc91Pg6S1lHurhtBubDhuOCcRWesB2oB72DG26j2BWNFHIG8TxgdbbWDAImsOi6g1TnMTu5I8GBWu2DjL0kUF52Zntopk5oBriPNvBHBuI9YVW8i4GxQ1qWqFbztlMOLBtcIGOqUBBw%2BqLAlIz3Irlpce82GFVYyT6TvaQ7uLyvkg%2FdWVwaxNLljWrzYpZ2hEBRmcUkoYRyEQA6RjkHH0F1SDyl4YceBIRiNGfbPnMFJSd%2FJBVrxuewDI9IppbTmXVP2Y53fqCwS2cwaP3Ia7uBy0Nn783lQ%2FXSkghXzVp23BzPFPWQHCPDjeRnnvsopZvvB%2BdD9TMhg42FadlxNAWngk1K5hApJXCjSe&X-Amz-Signature=08799aef177790c36bde782aeffe46585485a7890673f1fa1385c16ec918d8ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUJDHER%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCyGnMJVTPp%2FyVY4GGKSi0aquHYQuQIJIIHEQpcXXqG6gIgPhYcUfLF%2BEDXnFcKZ9Rxk8R4fWtJQ5NnEkWGiKZxFMsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEZOMfiL5wQ48ZzPhCrcAwyBZHT6PHewIl8V4CssFT%2Fr37gmKmszwF0eTZ1UQkNAUl%2FH2wxi%2BZuMCps3b%2FQK3n9P74Td12s2kgM2NnUrTvclAjQMzy6HUj7TQ6N1kfRwZ%2BqDOla%2FNJcNeUiRqtfnSo%2Bjxt2O9NQkBvKR%2BzvvcZb%2ByItiEJcsKLgX1XYlOfoAF0qZ855N6ksfwqwNWNF6meKPWVIRFLaCTyJdynQaR%2FdTlIn2dgJ1l7wo9SO5QSmfjZULP9ldULj7lCdb0%2Bn4dYMW%2BruSzHeCD9%2Bup9LtLCduMHX%2BSkV%2F%2B5RWcWrq9DXOSfYAMNOoGg%2B9fAdtzGV%2Bmp36w8PyzImoNb4c8FkZuH3ZfYPqBPT3ZzjCclSZy3vXvJ7TVtmCbjxAYs9Uh0b3NIi0A3enKDbrftztfzH0ohuDt5F823aKn9mK3yc6a68JEAIGD2%2B%2FomKd1mpUA25NRnBJWRlsCrjsimSDOMyzMmGrnPTkXqmUvF425jVFcuu%2BB6sEEpwL3PxAUTLlatyqc91Pg6S1lHurhtBubDhuOCcRWesB2oB72DG26j2BWNFHIG8TxgdbbWDAImsOi6g1TnMTu5I8GBWu2DjL0kUF52Zntopk5oBriPNvBHBuI9YVW8i4GxQ1qWqFbztlMOLBtcIGOqUBBw%2BqLAlIz3Irlpce82GFVYyT6TvaQ7uLyvkg%2FdWVwaxNLljWrzYpZ2hEBRmcUkoYRyEQA6RjkHH0F1SDyl4YceBIRiNGfbPnMFJSd%2FJBVrxuewDI9IppbTmXVP2Y53fqCwS2cwaP3Ia7uBy0Nn783lQ%2FXSkghXzVp23BzPFPWQHCPDjeRnnvsopZvvB%2BdD9TMhg42FadlxNAWngk1K5hApJXCjSe&X-Amz-Signature=1b39e4747c929b8fd816954741c55b5b676da26e069058723a8930d708642fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUJDHER%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCyGnMJVTPp%2FyVY4GGKSi0aquHYQuQIJIIHEQpcXXqG6gIgPhYcUfLF%2BEDXnFcKZ9Rxk8R4fWtJQ5NnEkWGiKZxFMsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEZOMfiL5wQ48ZzPhCrcAwyBZHT6PHewIl8V4CssFT%2Fr37gmKmszwF0eTZ1UQkNAUl%2FH2wxi%2BZuMCps3b%2FQK3n9P74Td12s2kgM2NnUrTvclAjQMzy6HUj7TQ6N1kfRwZ%2BqDOla%2FNJcNeUiRqtfnSo%2Bjxt2O9NQkBvKR%2BzvvcZb%2ByItiEJcsKLgX1XYlOfoAF0qZ855N6ksfwqwNWNF6meKPWVIRFLaCTyJdynQaR%2FdTlIn2dgJ1l7wo9SO5QSmfjZULP9ldULj7lCdb0%2Bn4dYMW%2BruSzHeCD9%2Bup9LtLCduMHX%2BSkV%2F%2B5RWcWrq9DXOSfYAMNOoGg%2B9fAdtzGV%2Bmp36w8PyzImoNb4c8FkZuH3ZfYPqBPT3ZzjCclSZy3vXvJ7TVtmCbjxAYs9Uh0b3NIi0A3enKDbrftztfzH0ohuDt5F823aKn9mK3yc6a68JEAIGD2%2B%2FomKd1mpUA25NRnBJWRlsCrjsimSDOMyzMmGrnPTkXqmUvF425jVFcuu%2BB6sEEpwL3PxAUTLlatyqc91Pg6S1lHurhtBubDhuOCcRWesB2oB72DG26j2BWNFHIG8TxgdbbWDAImsOi6g1TnMTu5I8GBWu2DjL0kUF52Zntopk5oBriPNvBHBuI9YVW8i4GxQ1qWqFbztlMOLBtcIGOqUBBw%2BqLAlIz3Irlpce82GFVYyT6TvaQ7uLyvkg%2FdWVwaxNLljWrzYpZ2hEBRmcUkoYRyEQA6RjkHH0F1SDyl4YceBIRiNGfbPnMFJSd%2FJBVrxuewDI9IppbTmXVP2Y53fqCwS2cwaP3Ia7uBy0Nn783lQ%2FXSkghXzVp23BzPFPWQHCPDjeRnnvsopZvvB%2BdD9TMhg42FadlxNAWngk1K5hApJXCjSe&X-Amz-Signature=56c0da2df0756d17580713197ac52c917c10067e13a2a1b55def0d457258cd44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUJDHER%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCyGnMJVTPp%2FyVY4GGKSi0aquHYQuQIJIIHEQpcXXqG6gIgPhYcUfLF%2BEDXnFcKZ9Rxk8R4fWtJQ5NnEkWGiKZxFMsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEZOMfiL5wQ48ZzPhCrcAwyBZHT6PHewIl8V4CssFT%2Fr37gmKmszwF0eTZ1UQkNAUl%2FH2wxi%2BZuMCps3b%2FQK3n9P74Td12s2kgM2NnUrTvclAjQMzy6HUj7TQ6N1kfRwZ%2BqDOla%2FNJcNeUiRqtfnSo%2Bjxt2O9NQkBvKR%2BzvvcZb%2ByItiEJcsKLgX1XYlOfoAF0qZ855N6ksfwqwNWNF6meKPWVIRFLaCTyJdynQaR%2FdTlIn2dgJ1l7wo9SO5QSmfjZULP9ldULj7lCdb0%2Bn4dYMW%2BruSzHeCD9%2Bup9LtLCduMHX%2BSkV%2F%2B5RWcWrq9DXOSfYAMNOoGg%2B9fAdtzGV%2Bmp36w8PyzImoNb4c8FkZuH3ZfYPqBPT3ZzjCclSZy3vXvJ7TVtmCbjxAYs9Uh0b3NIi0A3enKDbrftztfzH0ohuDt5F823aKn9mK3yc6a68JEAIGD2%2B%2FomKd1mpUA25NRnBJWRlsCrjsimSDOMyzMmGrnPTkXqmUvF425jVFcuu%2BB6sEEpwL3PxAUTLlatyqc91Pg6S1lHurhtBubDhuOCcRWesB2oB72DG26j2BWNFHIG8TxgdbbWDAImsOi6g1TnMTu5I8GBWu2DjL0kUF52Zntopk5oBriPNvBHBuI9YVW8i4GxQ1qWqFbztlMOLBtcIGOqUBBw%2BqLAlIz3Irlpce82GFVYyT6TvaQ7uLyvkg%2FdWVwaxNLljWrzYpZ2hEBRmcUkoYRyEQA6RjkHH0F1SDyl4YceBIRiNGfbPnMFJSd%2FJBVrxuewDI9IppbTmXVP2Y53fqCwS2cwaP3Ia7uBy0Nn783lQ%2FXSkghXzVp23BzPFPWQHCPDjeRnnvsopZvvB%2BdD9TMhg42FadlxNAWngk1K5hApJXCjSe&X-Amz-Signature=7381ec7ba35b53b94abfca10d743d3a6b76e9abb3909ae34d277a378a0bb4f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUJDHER%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCyGnMJVTPp%2FyVY4GGKSi0aquHYQuQIJIIHEQpcXXqG6gIgPhYcUfLF%2BEDXnFcKZ9Rxk8R4fWtJQ5NnEkWGiKZxFMsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEZOMfiL5wQ48ZzPhCrcAwyBZHT6PHewIl8V4CssFT%2Fr37gmKmszwF0eTZ1UQkNAUl%2FH2wxi%2BZuMCps3b%2FQK3n9P74Td12s2kgM2NnUrTvclAjQMzy6HUj7TQ6N1kfRwZ%2BqDOla%2FNJcNeUiRqtfnSo%2Bjxt2O9NQkBvKR%2BzvvcZb%2ByItiEJcsKLgX1XYlOfoAF0qZ855N6ksfwqwNWNF6meKPWVIRFLaCTyJdynQaR%2FdTlIn2dgJ1l7wo9SO5QSmfjZULP9ldULj7lCdb0%2Bn4dYMW%2BruSzHeCD9%2Bup9LtLCduMHX%2BSkV%2F%2B5RWcWrq9DXOSfYAMNOoGg%2B9fAdtzGV%2Bmp36w8PyzImoNb4c8FkZuH3ZfYPqBPT3ZzjCclSZy3vXvJ7TVtmCbjxAYs9Uh0b3NIi0A3enKDbrftztfzH0ohuDt5F823aKn9mK3yc6a68JEAIGD2%2B%2FomKd1mpUA25NRnBJWRlsCrjsimSDOMyzMmGrnPTkXqmUvF425jVFcuu%2BB6sEEpwL3PxAUTLlatyqc91Pg6S1lHurhtBubDhuOCcRWesB2oB72DG26j2BWNFHIG8TxgdbbWDAImsOi6g1TnMTu5I8GBWu2DjL0kUF52Zntopk5oBriPNvBHBuI9YVW8i4GxQ1qWqFbztlMOLBtcIGOqUBBw%2BqLAlIz3Irlpce82GFVYyT6TvaQ7uLyvkg%2FdWVwaxNLljWrzYpZ2hEBRmcUkoYRyEQA6RjkHH0F1SDyl4YceBIRiNGfbPnMFJSd%2FJBVrxuewDI9IppbTmXVP2Y53fqCwS2cwaP3Ia7uBy0Nn783lQ%2FXSkghXzVp23BzPFPWQHCPDjeRnnvsopZvvB%2BdD9TMhg42FadlxNAWngk1K5hApJXCjSe&X-Amz-Signature=0471c8458b6fa715fe9c47264698d3ae739cdbdd1c9cd974400e2a2356e5dba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
