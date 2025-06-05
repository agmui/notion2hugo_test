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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657WTL4A6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD5GSxyZ44qtY%2BlfYXohoXgaboA24VTD%2F9KMxOlafKdxQIgVjPqdJKexIf0Gq9AzLddwq7zNtCHWQCxaI9I5rLrsZQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEdbk8Lu2U%2BJ9j8ZgSrcA4ZHMH7Hn1i1%2FP2aJsyCT%2BPZVw3ayP%2B6qX4R8kiFpQXGliPAl5xiltnHlrU9sF9pwbQep1t8I6DWyvzXdvXHkDWExEcYhTMLeGs8T8cWJcDXwNr7k87Mz2G8%2FWiOZdmdmTMWBpj5%2FCOCQMekhpXvFUvLMZCXVZKmasQ4sEsjbU9IRbjYFul5WL3G4PmAfJ5M7tBh5SfsKBtFraPBV1YXfbsQ3wkG%2BEf9EleLTlIjYp1RrhdrsSccEIy8ylvX3Yjlm3DezM5lSz6khsiTIOyz7ruAI1T8y3%2FmDxXxPvDQbvNa3GJUvvk0UIOFGCWslINjEj7AXhaps7EdOofo05dYF4vmc8w3Ut2agaviXI3%2BMQzDza83rnvd1ryb4c1XLvaYsLMBeoRcH9OK%2Fyp%2F4hxp%2FoHIdLv5Ih3Wvp14Djb7Qn9KQ%2Fa1r9ceA0akKwqpuFq4ixXtLReGYyy7Nh6wrUIMqgAvMiXgGVcHE%2B25amfSIdSoxd%2FK7%2F8dPg7xw5KnCAsTRw67%2BEadt2WlfrHw%2BcaessDxpvEgQf9DbU%2FqOyZAgLDRGkeIntJvoPe0yiOO3HRAfPnumzMZcUQXQj%2BrmZwtO76FqiGqRKaJVYcT%2BbexGh7QEghCsMywqjqsWjdOMKaph8IGOqUBisw%2B4kN1%2FuzwsivuTwId1NKqOYSb7Pul7lAw%2BZkQflCts%2F3rlz71FH4Jkfvkv4ud6z8Zg4yjFbwvGLnhKnIb%2Fc%2FUSg9iaRjCMyeAc65E6fZDGZQ6AUGyqBRvCxcUGIEXlx301ny0NsnIAArOVXPbfWXBO1Rnmug%2Ft0OglUvi6QGGvoffNIeETDHZ5oJM57HzJdun7N34oCL9FIt0b%2Fa%2FJRioafge&X-Amz-Signature=39547cf9ff801bc695f4756c2b901c639502a8fb6160e61b197f6469effaddbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657WTL4A6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD5GSxyZ44qtY%2BlfYXohoXgaboA24VTD%2F9KMxOlafKdxQIgVjPqdJKexIf0Gq9AzLddwq7zNtCHWQCxaI9I5rLrsZQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEdbk8Lu2U%2BJ9j8ZgSrcA4ZHMH7Hn1i1%2FP2aJsyCT%2BPZVw3ayP%2B6qX4R8kiFpQXGliPAl5xiltnHlrU9sF9pwbQep1t8I6DWyvzXdvXHkDWExEcYhTMLeGs8T8cWJcDXwNr7k87Mz2G8%2FWiOZdmdmTMWBpj5%2FCOCQMekhpXvFUvLMZCXVZKmasQ4sEsjbU9IRbjYFul5WL3G4PmAfJ5M7tBh5SfsKBtFraPBV1YXfbsQ3wkG%2BEf9EleLTlIjYp1RrhdrsSccEIy8ylvX3Yjlm3DezM5lSz6khsiTIOyz7ruAI1T8y3%2FmDxXxPvDQbvNa3GJUvvk0UIOFGCWslINjEj7AXhaps7EdOofo05dYF4vmc8w3Ut2agaviXI3%2BMQzDza83rnvd1ryb4c1XLvaYsLMBeoRcH9OK%2Fyp%2F4hxp%2FoHIdLv5Ih3Wvp14Djb7Qn9KQ%2Fa1r9ceA0akKwqpuFq4ixXtLReGYyy7Nh6wrUIMqgAvMiXgGVcHE%2B25amfSIdSoxd%2FK7%2F8dPg7xw5KnCAsTRw67%2BEadt2WlfrHw%2BcaessDxpvEgQf9DbU%2FqOyZAgLDRGkeIntJvoPe0yiOO3HRAfPnumzMZcUQXQj%2BrmZwtO76FqiGqRKaJVYcT%2BbexGh7QEghCsMywqjqsWjdOMKaph8IGOqUBisw%2B4kN1%2FuzwsivuTwId1NKqOYSb7Pul7lAw%2BZkQflCts%2F3rlz71FH4Jkfvkv4ud6z8Zg4yjFbwvGLnhKnIb%2Fc%2FUSg9iaRjCMyeAc65E6fZDGZQ6AUGyqBRvCxcUGIEXlx301ny0NsnIAArOVXPbfWXBO1Rnmug%2Ft0OglUvi6QGGvoffNIeETDHZ5oJM57HzJdun7N34oCL9FIt0b%2Fa%2FJRioafge&X-Amz-Signature=574ed93105a604daf150ab804c482e9dc51dbf75281d1157e41a3b5b40a3c248&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657WTL4A6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD5GSxyZ44qtY%2BlfYXohoXgaboA24VTD%2F9KMxOlafKdxQIgVjPqdJKexIf0Gq9AzLddwq7zNtCHWQCxaI9I5rLrsZQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEdbk8Lu2U%2BJ9j8ZgSrcA4ZHMH7Hn1i1%2FP2aJsyCT%2BPZVw3ayP%2B6qX4R8kiFpQXGliPAl5xiltnHlrU9sF9pwbQep1t8I6DWyvzXdvXHkDWExEcYhTMLeGs8T8cWJcDXwNr7k87Mz2G8%2FWiOZdmdmTMWBpj5%2FCOCQMekhpXvFUvLMZCXVZKmasQ4sEsjbU9IRbjYFul5WL3G4PmAfJ5M7tBh5SfsKBtFraPBV1YXfbsQ3wkG%2BEf9EleLTlIjYp1RrhdrsSccEIy8ylvX3Yjlm3DezM5lSz6khsiTIOyz7ruAI1T8y3%2FmDxXxPvDQbvNa3GJUvvk0UIOFGCWslINjEj7AXhaps7EdOofo05dYF4vmc8w3Ut2agaviXI3%2BMQzDza83rnvd1ryb4c1XLvaYsLMBeoRcH9OK%2Fyp%2F4hxp%2FoHIdLv5Ih3Wvp14Djb7Qn9KQ%2Fa1r9ceA0akKwqpuFq4ixXtLReGYyy7Nh6wrUIMqgAvMiXgGVcHE%2B25amfSIdSoxd%2FK7%2F8dPg7xw5KnCAsTRw67%2BEadt2WlfrHw%2BcaessDxpvEgQf9DbU%2FqOyZAgLDRGkeIntJvoPe0yiOO3HRAfPnumzMZcUQXQj%2BrmZwtO76FqiGqRKaJVYcT%2BbexGh7QEghCsMywqjqsWjdOMKaph8IGOqUBisw%2B4kN1%2FuzwsivuTwId1NKqOYSb7Pul7lAw%2BZkQflCts%2F3rlz71FH4Jkfvkv4ud6z8Zg4yjFbwvGLnhKnIb%2Fc%2FUSg9iaRjCMyeAc65E6fZDGZQ6AUGyqBRvCxcUGIEXlx301ny0NsnIAArOVXPbfWXBO1Rnmug%2Ft0OglUvi6QGGvoffNIeETDHZ5oJM57HzJdun7N34oCL9FIt0b%2Fa%2FJRioafge&X-Amz-Signature=f986737c7d360f42b066f62acf531845e01cffd22ff3ca8b242623ee29b37d70&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657WTL4A6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD5GSxyZ44qtY%2BlfYXohoXgaboA24VTD%2F9KMxOlafKdxQIgVjPqdJKexIf0Gq9AzLddwq7zNtCHWQCxaI9I5rLrsZQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEdbk8Lu2U%2BJ9j8ZgSrcA4ZHMH7Hn1i1%2FP2aJsyCT%2BPZVw3ayP%2B6qX4R8kiFpQXGliPAl5xiltnHlrU9sF9pwbQep1t8I6DWyvzXdvXHkDWExEcYhTMLeGs8T8cWJcDXwNr7k87Mz2G8%2FWiOZdmdmTMWBpj5%2FCOCQMekhpXvFUvLMZCXVZKmasQ4sEsjbU9IRbjYFul5WL3G4PmAfJ5M7tBh5SfsKBtFraPBV1YXfbsQ3wkG%2BEf9EleLTlIjYp1RrhdrsSccEIy8ylvX3Yjlm3DezM5lSz6khsiTIOyz7ruAI1T8y3%2FmDxXxPvDQbvNa3GJUvvk0UIOFGCWslINjEj7AXhaps7EdOofo05dYF4vmc8w3Ut2agaviXI3%2BMQzDza83rnvd1ryb4c1XLvaYsLMBeoRcH9OK%2Fyp%2F4hxp%2FoHIdLv5Ih3Wvp14Djb7Qn9KQ%2Fa1r9ceA0akKwqpuFq4ixXtLReGYyy7Nh6wrUIMqgAvMiXgGVcHE%2B25amfSIdSoxd%2FK7%2F8dPg7xw5KnCAsTRw67%2BEadt2WlfrHw%2BcaessDxpvEgQf9DbU%2FqOyZAgLDRGkeIntJvoPe0yiOO3HRAfPnumzMZcUQXQj%2BrmZwtO76FqiGqRKaJVYcT%2BbexGh7QEghCsMywqjqsWjdOMKaph8IGOqUBisw%2B4kN1%2FuzwsivuTwId1NKqOYSb7Pul7lAw%2BZkQflCts%2F3rlz71FH4Jkfvkv4ud6z8Zg4yjFbwvGLnhKnIb%2Fc%2FUSg9iaRjCMyeAc65E6fZDGZQ6AUGyqBRvCxcUGIEXlx301ny0NsnIAArOVXPbfWXBO1Rnmug%2Ft0OglUvi6QGGvoffNIeETDHZ5oJM57HzJdun7N34oCL9FIt0b%2Fa%2FJRioafge&X-Amz-Signature=2153e02a79a45948f5c499e1d92ebdd27a28bac5b09cf869479c739db6fdb97f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657WTL4A6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD5GSxyZ44qtY%2BlfYXohoXgaboA24VTD%2F9KMxOlafKdxQIgVjPqdJKexIf0Gq9AzLddwq7zNtCHWQCxaI9I5rLrsZQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEdbk8Lu2U%2BJ9j8ZgSrcA4ZHMH7Hn1i1%2FP2aJsyCT%2BPZVw3ayP%2B6qX4R8kiFpQXGliPAl5xiltnHlrU9sF9pwbQep1t8I6DWyvzXdvXHkDWExEcYhTMLeGs8T8cWJcDXwNr7k87Mz2G8%2FWiOZdmdmTMWBpj5%2FCOCQMekhpXvFUvLMZCXVZKmasQ4sEsjbU9IRbjYFul5WL3G4PmAfJ5M7tBh5SfsKBtFraPBV1YXfbsQ3wkG%2BEf9EleLTlIjYp1RrhdrsSccEIy8ylvX3Yjlm3DezM5lSz6khsiTIOyz7ruAI1T8y3%2FmDxXxPvDQbvNa3GJUvvk0UIOFGCWslINjEj7AXhaps7EdOofo05dYF4vmc8w3Ut2agaviXI3%2BMQzDza83rnvd1ryb4c1XLvaYsLMBeoRcH9OK%2Fyp%2F4hxp%2FoHIdLv5Ih3Wvp14Djb7Qn9KQ%2Fa1r9ceA0akKwqpuFq4ixXtLReGYyy7Nh6wrUIMqgAvMiXgGVcHE%2B25amfSIdSoxd%2FK7%2F8dPg7xw5KnCAsTRw67%2BEadt2WlfrHw%2BcaessDxpvEgQf9DbU%2FqOyZAgLDRGkeIntJvoPe0yiOO3HRAfPnumzMZcUQXQj%2BrmZwtO76FqiGqRKaJVYcT%2BbexGh7QEghCsMywqjqsWjdOMKaph8IGOqUBisw%2B4kN1%2FuzwsivuTwId1NKqOYSb7Pul7lAw%2BZkQflCts%2F3rlz71FH4Jkfvkv4ud6z8Zg4yjFbwvGLnhKnIb%2Fc%2FUSg9iaRjCMyeAc65E6fZDGZQ6AUGyqBRvCxcUGIEXlx301ny0NsnIAArOVXPbfWXBO1Rnmug%2Ft0OglUvi6QGGvoffNIeETDHZ5oJM57HzJdun7N34oCL9FIt0b%2Fa%2FJRioafge&X-Amz-Signature=500dc747f4378cfb0731750650eefa13b76d4ab5f0ac1a84b9868a0dc8af793f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657WTL4A6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD5GSxyZ44qtY%2BlfYXohoXgaboA24VTD%2F9KMxOlafKdxQIgVjPqdJKexIf0Gq9AzLddwq7zNtCHWQCxaI9I5rLrsZQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEdbk8Lu2U%2BJ9j8ZgSrcA4ZHMH7Hn1i1%2FP2aJsyCT%2BPZVw3ayP%2B6qX4R8kiFpQXGliPAl5xiltnHlrU9sF9pwbQep1t8I6DWyvzXdvXHkDWExEcYhTMLeGs8T8cWJcDXwNr7k87Mz2G8%2FWiOZdmdmTMWBpj5%2FCOCQMekhpXvFUvLMZCXVZKmasQ4sEsjbU9IRbjYFul5WL3G4PmAfJ5M7tBh5SfsKBtFraPBV1YXfbsQ3wkG%2BEf9EleLTlIjYp1RrhdrsSccEIy8ylvX3Yjlm3DezM5lSz6khsiTIOyz7ruAI1T8y3%2FmDxXxPvDQbvNa3GJUvvk0UIOFGCWslINjEj7AXhaps7EdOofo05dYF4vmc8w3Ut2agaviXI3%2BMQzDza83rnvd1ryb4c1XLvaYsLMBeoRcH9OK%2Fyp%2F4hxp%2FoHIdLv5Ih3Wvp14Djb7Qn9KQ%2Fa1r9ceA0akKwqpuFq4ixXtLReGYyy7Nh6wrUIMqgAvMiXgGVcHE%2B25amfSIdSoxd%2FK7%2F8dPg7xw5KnCAsTRw67%2BEadt2WlfrHw%2BcaessDxpvEgQf9DbU%2FqOyZAgLDRGkeIntJvoPe0yiOO3HRAfPnumzMZcUQXQj%2BrmZwtO76FqiGqRKaJVYcT%2BbexGh7QEghCsMywqjqsWjdOMKaph8IGOqUBisw%2B4kN1%2FuzwsivuTwId1NKqOYSb7Pul7lAw%2BZkQflCts%2F3rlz71FH4Jkfvkv4ud6z8Zg4yjFbwvGLnhKnIb%2Fc%2FUSg9iaRjCMyeAc65E6fZDGZQ6AUGyqBRvCxcUGIEXlx301ny0NsnIAArOVXPbfWXBO1Rnmug%2Ft0OglUvi6QGGvoffNIeETDHZ5oJM57HzJdun7N34oCL9FIt0b%2Fa%2FJRioafge&X-Amz-Signature=cafe95823aa1ef5aee27442d8aa8d2aa5308e9c3aa639348c1aa8cd88aa805b8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657WTL4A6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD5GSxyZ44qtY%2BlfYXohoXgaboA24VTD%2F9KMxOlafKdxQIgVjPqdJKexIf0Gq9AzLddwq7zNtCHWQCxaI9I5rLrsZQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEdbk8Lu2U%2BJ9j8ZgSrcA4ZHMH7Hn1i1%2FP2aJsyCT%2BPZVw3ayP%2B6qX4R8kiFpQXGliPAl5xiltnHlrU9sF9pwbQep1t8I6DWyvzXdvXHkDWExEcYhTMLeGs8T8cWJcDXwNr7k87Mz2G8%2FWiOZdmdmTMWBpj5%2FCOCQMekhpXvFUvLMZCXVZKmasQ4sEsjbU9IRbjYFul5WL3G4PmAfJ5M7tBh5SfsKBtFraPBV1YXfbsQ3wkG%2BEf9EleLTlIjYp1RrhdrsSccEIy8ylvX3Yjlm3DezM5lSz6khsiTIOyz7ruAI1T8y3%2FmDxXxPvDQbvNa3GJUvvk0UIOFGCWslINjEj7AXhaps7EdOofo05dYF4vmc8w3Ut2agaviXI3%2BMQzDza83rnvd1ryb4c1XLvaYsLMBeoRcH9OK%2Fyp%2F4hxp%2FoHIdLv5Ih3Wvp14Djb7Qn9KQ%2Fa1r9ceA0akKwqpuFq4ixXtLReGYyy7Nh6wrUIMqgAvMiXgGVcHE%2B25amfSIdSoxd%2FK7%2F8dPg7xw5KnCAsTRw67%2BEadt2WlfrHw%2BcaessDxpvEgQf9DbU%2FqOyZAgLDRGkeIntJvoPe0yiOO3HRAfPnumzMZcUQXQj%2BrmZwtO76FqiGqRKaJVYcT%2BbexGh7QEghCsMywqjqsWjdOMKaph8IGOqUBisw%2B4kN1%2FuzwsivuTwId1NKqOYSb7Pul7lAw%2BZkQflCts%2F3rlz71FH4Jkfvkv4ud6z8Zg4yjFbwvGLnhKnIb%2Fc%2FUSg9iaRjCMyeAc65E6fZDGZQ6AUGyqBRvCxcUGIEXlx301ny0NsnIAArOVXPbfWXBO1Rnmug%2Ft0OglUvi6QGGvoffNIeETDHZ5oJM57HzJdun7N34oCL9FIt0b%2Fa%2FJRioafge&X-Amz-Signature=6c3a6ebc1110272097cf36df086028136e32834261186fe50b737574b3076bab&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
