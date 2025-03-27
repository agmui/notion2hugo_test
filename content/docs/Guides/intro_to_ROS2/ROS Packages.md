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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Q3VB4X%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOEFb1Swym0mD5p7oCcA%2FjVR1Ngi1ESA5z%2BckTQk1bhgIhAMyxHDCGoq9mZSf2Phbgk3xPa3R4SZzLbnIhdwsqOoWqKv8DCD0QABoMNjM3NDIzMTgzODA1IgxJHdmIcoBcsH%2FEyW8q3AN5jXCUlWxndYpSdE%2BRzLRu%2BitCctUEZNvXU88RrgNG9dvE06yWyS%2F99aMON41BBt5t1KVrbseMrkFjvR5ecKJZ7JfmyLZOkgJd0pQ1onc9aV3qJHWmUWiP7O7AJddZdAHjOf6Ep8CG50txQsH1Y7%2FMcmjGBJA8rzQJH4a8VR54CbwRO7uqFUviRkbVM5TLeraCQg0YgM28HHG9d1M5OYkxrRt7I%2BjtrSlPABhaQnBG3znp2%2FhqliNb%2F1FdXGjTFeEIFEPK0h1JeIYGYkwXsRzsQXr4OZ82v1q72vSmHmAokee%2B3lkhdj3zYlbV86qlAB0J5FnMtHbACxmYF3SlFgsXOP%2F5DpHMUmpleqjdTEblDxI0iceIVdeNRFO8H4%2Bxdx6CR%2BAL1ZuOrhTQWeFNb2CJX63QKCI35eCtNSW0Myvllgd4vitWHvpoFen9171SWx3NdFR5NL7tagss7iLBewmREaHoMYepBAzbp1Gg%2FtFu6AyUeGg6DuiJBqjCxYsVAGmmBvGeFVCObOie7hVZy1n7RN2SnFo0v48%2BrI7cJAM81dSVBF4QGIZQYX3FwkUnwBMoVVMsE%2BErt0CgicKBnkSaNmcnrB983R3NJilCdcvOJ%2BFHG2h6sxqZehcCyjDOiZO%2FBjqkAaYZKeoKVOkDwdhzQi2EiB76M8aMllqGGY3d4Nx5DNh%2B8yy5BDOiQpyREjJRvLnFdPwWOyKlXcQnaR1S3W6dQFbeRj1WRhkmO8GbW1%2BqBPn0mAKMOOTjBRqwNBEqqNoIX13ppptVQ8%2FHHNv1UOnLLpsKxLS3aTYr6u8wkFQqbQPydcWgm5%2FSe853L5v7cBlB7oNt21F2UPy2BnAb0R4DzkE3VQfn&X-Amz-Signature=f4dcbc3eeeca25e8f223ce2d4cb2cb67f1540882fc93ae138c8f240bb3bda27e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Q3VB4X%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOEFb1Swym0mD5p7oCcA%2FjVR1Ngi1ESA5z%2BckTQk1bhgIhAMyxHDCGoq9mZSf2Phbgk3xPa3R4SZzLbnIhdwsqOoWqKv8DCD0QABoMNjM3NDIzMTgzODA1IgxJHdmIcoBcsH%2FEyW8q3AN5jXCUlWxndYpSdE%2BRzLRu%2BitCctUEZNvXU88RrgNG9dvE06yWyS%2F99aMON41BBt5t1KVrbseMrkFjvR5ecKJZ7JfmyLZOkgJd0pQ1onc9aV3qJHWmUWiP7O7AJddZdAHjOf6Ep8CG50txQsH1Y7%2FMcmjGBJA8rzQJH4a8VR54CbwRO7uqFUviRkbVM5TLeraCQg0YgM28HHG9d1M5OYkxrRt7I%2BjtrSlPABhaQnBG3znp2%2FhqliNb%2F1FdXGjTFeEIFEPK0h1JeIYGYkwXsRzsQXr4OZ82v1q72vSmHmAokee%2B3lkhdj3zYlbV86qlAB0J5FnMtHbACxmYF3SlFgsXOP%2F5DpHMUmpleqjdTEblDxI0iceIVdeNRFO8H4%2Bxdx6CR%2BAL1ZuOrhTQWeFNb2CJX63QKCI35eCtNSW0Myvllgd4vitWHvpoFen9171SWx3NdFR5NL7tagss7iLBewmREaHoMYepBAzbp1Gg%2FtFu6AyUeGg6DuiJBqjCxYsVAGmmBvGeFVCObOie7hVZy1n7RN2SnFo0v48%2BrI7cJAM81dSVBF4QGIZQYX3FwkUnwBMoVVMsE%2BErt0CgicKBnkSaNmcnrB983R3NJilCdcvOJ%2BFHG2h6sxqZehcCyjDOiZO%2FBjqkAaYZKeoKVOkDwdhzQi2EiB76M8aMllqGGY3d4Nx5DNh%2B8yy5BDOiQpyREjJRvLnFdPwWOyKlXcQnaR1S3W6dQFbeRj1WRhkmO8GbW1%2BqBPn0mAKMOOTjBRqwNBEqqNoIX13ppptVQ8%2FHHNv1UOnLLpsKxLS3aTYr6u8wkFQqbQPydcWgm5%2FSe853L5v7cBlB7oNt21F2UPy2BnAb0R4DzkE3VQfn&X-Amz-Signature=3d6a7cf5f2b9bfc358b0e5a9667fdb40a89762d9c983115c2f134091cf044353&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Q3VB4X%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOEFb1Swym0mD5p7oCcA%2FjVR1Ngi1ESA5z%2BckTQk1bhgIhAMyxHDCGoq9mZSf2Phbgk3xPa3R4SZzLbnIhdwsqOoWqKv8DCD0QABoMNjM3NDIzMTgzODA1IgxJHdmIcoBcsH%2FEyW8q3AN5jXCUlWxndYpSdE%2BRzLRu%2BitCctUEZNvXU88RrgNG9dvE06yWyS%2F99aMON41BBt5t1KVrbseMrkFjvR5ecKJZ7JfmyLZOkgJd0pQ1onc9aV3qJHWmUWiP7O7AJddZdAHjOf6Ep8CG50txQsH1Y7%2FMcmjGBJA8rzQJH4a8VR54CbwRO7uqFUviRkbVM5TLeraCQg0YgM28HHG9d1M5OYkxrRt7I%2BjtrSlPABhaQnBG3znp2%2FhqliNb%2F1FdXGjTFeEIFEPK0h1JeIYGYkwXsRzsQXr4OZ82v1q72vSmHmAokee%2B3lkhdj3zYlbV86qlAB0J5FnMtHbACxmYF3SlFgsXOP%2F5DpHMUmpleqjdTEblDxI0iceIVdeNRFO8H4%2Bxdx6CR%2BAL1ZuOrhTQWeFNb2CJX63QKCI35eCtNSW0Myvllgd4vitWHvpoFen9171SWx3NdFR5NL7tagss7iLBewmREaHoMYepBAzbp1Gg%2FtFu6AyUeGg6DuiJBqjCxYsVAGmmBvGeFVCObOie7hVZy1n7RN2SnFo0v48%2BrI7cJAM81dSVBF4QGIZQYX3FwkUnwBMoVVMsE%2BErt0CgicKBnkSaNmcnrB983R3NJilCdcvOJ%2BFHG2h6sxqZehcCyjDOiZO%2FBjqkAaYZKeoKVOkDwdhzQi2EiB76M8aMllqGGY3d4Nx5DNh%2B8yy5BDOiQpyREjJRvLnFdPwWOyKlXcQnaR1S3W6dQFbeRj1WRhkmO8GbW1%2BqBPn0mAKMOOTjBRqwNBEqqNoIX13ppptVQ8%2FHHNv1UOnLLpsKxLS3aTYr6u8wkFQqbQPydcWgm5%2FSe853L5v7cBlB7oNt21F2UPy2BnAb0R4DzkE3VQfn&X-Amz-Signature=72aca3edf3efb82e382056b9ff4c845ee3df6f697615772cf479fa7562bf91b7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Q3VB4X%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOEFb1Swym0mD5p7oCcA%2FjVR1Ngi1ESA5z%2BckTQk1bhgIhAMyxHDCGoq9mZSf2Phbgk3xPa3R4SZzLbnIhdwsqOoWqKv8DCD0QABoMNjM3NDIzMTgzODA1IgxJHdmIcoBcsH%2FEyW8q3AN5jXCUlWxndYpSdE%2BRzLRu%2BitCctUEZNvXU88RrgNG9dvE06yWyS%2F99aMON41BBt5t1KVrbseMrkFjvR5ecKJZ7JfmyLZOkgJd0pQ1onc9aV3qJHWmUWiP7O7AJddZdAHjOf6Ep8CG50txQsH1Y7%2FMcmjGBJA8rzQJH4a8VR54CbwRO7uqFUviRkbVM5TLeraCQg0YgM28HHG9d1M5OYkxrRt7I%2BjtrSlPABhaQnBG3znp2%2FhqliNb%2F1FdXGjTFeEIFEPK0h1JeIYGYkwXsRzsQXr4OZ82v1q72vSmHmAokee%2B3lkhdj3zYlbV86qlAB0J5FnMtHbACxmYF3SlFgsXOP%2F5DpHMUmpleqjdTEblDxI0iceIVdeNRFO8H4%2Bxdx6CR%2BAL1ZuOrhTQWeFNb2CJX63QKCI35eCtNSW0Myvllgd4vitWHvpoFen9171SWx3NdFR5NL7tagss7iLBewmREaHoMYepBAzbp1Gg%2FtFu6AyUeGg6DuiJBqjCxYsVAGmmBvGeFVCObOie7hVZy1n7RN2SnFo0v48%2BrI7cJAM81dSVBF4QGIZQYX3FwkUnwBMoVVMsE%2BErt0CgicKBnkSaNmcnrB983R3NJilCdcvOJ%2BFHG2h6sxqZehcCyjDOiZO%2FBjqkAaYZKeoKVOkDwdhzQi2EiB76M8aMllqGGY3d4Nx5DNh%2B8yy5BDOiQpyREjJRvLnFdPwWOyKlXcQnaR1S3W6dQFbeRj1WRhkmO8GbW1%2BqBPn0mAKMOOTjBRqwNBEqqNoIX13ppptVQ8%2FHHNv1UOnLLpsKxLS3aTYr6u8wkFQqbQPydcWgm5%2FSe853L5v7cBlB7oNt21F2UPy2BnAb0R4DzkE3VQfn&X-Amz-Signature=f39004afd4928cb8a892fef764b8d96a14256e92e1257a0969c44861e27331b0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Q3VB4X%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOEFb1Swym0mD5p7oCcA%2FjVR1Ngi1ESA5z%2BckTQk1bhgIhAMyxHDCGoq9mZSf2Phbgk3xPa3R4SZzLbnIhdwsqOoWqKv8DCD0QABoMNjM3NDIzMTgzODA1IgxJHdmIcoBcsH%2FEyW8q3AN5jXCUlWxndYpSdE%2BRzLRu%2BitCctUEZNvXU88RrgNG9dvE06yWyS%2F99aMON41BBt5t1KVrbseMrkFjvR5ecKJZ7JfmyLZOkgJd0pQ1onc9aV3qJHWmUWiP7O7AJddZdAHjOf6Ep8CG50txQsH1Y7%2FMcmjGBJA8rzQJH4a8VR54CbwRO7uqFUviRkbVM5TLeraCQg0YgM28HHG9d1M5OYkxrRt7I%2BjtrSlPABhaQnBG3znp2%2FhqliNb%2F1FdXGjTFeEIFEPK0h1JeIYGYkwXsRzsQXr4OZ82v1q72vSmHmAokee%2B3lkhdj3zYlbV86qlAB0J5FnMtHbACxmYF3SlFgsXOP%2F5DpHMUmpleqjdTEblDxI0iceIVdeNRFO8H4%2Bxdx6CR%2BAL1ZuOrhTQWeFNb2CJX63QKCI35eCtNSW0Myvllgd4vitWHvpoFen9171SWx3NdFR5NL7tagss7iLBewmREaHoMYepBAzbp1Gg%2FtFu6AyUeGg6DuiJBqjCxYsVAGmmBvGeFVCObOie7hVZy1n7RN2SnFo0v48%2BrI7cJAM81dSVBF4QGIZQYX3FwkUnwBMoVVMsE%2BErt0CgicKBnkSaNmcnrB983R3NJilCdcvOJ%2BFHG2h6sxqZehcCyjDOiZO%2FBjqkAaYZKeoKVOkDwdhzQi2EiB76M8aMllqGGY3d4Nx5DNh%2B8yy5BDOiQpyREjJRvLnFdPwWOyKlXcQnaR1S3W6dQFbeRj1WRhkmO8GbW1%2BqBPn0mAKMOOTjBRqwNBEqqNoIX13ppptVQ8%2FHHNv1UOnLLpsKxLS3aTYr6u8wkFQqbQPydcWgm5%2FSe853L5v7cBlB7oNt21F2UPy2BnAb0R4DzkE3VQfn&X-Amz-Signature=e5877665d8f817471332bce34311dbf23f3d42f4ed9ea732c1368ecea7705abd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Q3VB4X%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOEFb1Swym0mD5p7oCcA%2FjVR1Ngi1ESA5z%2BckTQk1bhgIhAMyxHDCGoq9mZSf2Phbgk3xPa3R4SZzLbnIhdwsqOoWqKv8DCD0QABoMNjM3NDIzMTgzODA1IgxJHdmIcoBcsH%2FEyW8q3AN5jXCUlWxndYpSdE%2BRzLRu%2BitCctUEZNvXU88RrgNG9dvE06yWyS%2F99aMON41BBt5t1KVrbseMrkFjvR5ecKJZ7JfmyLZOkgJd0pQ1onc9aV3qJHWmUWiP7O7AJddZdAHjOf6Ep8CG50txQsH1Y7%2FMcmjGBJA8rzQJH4a8VR54CbwRO7uqFUviRkbVM5TLeraCQg0YgM28HHG9d1M5OYkxrRt7I%2BjtrSlPABhaQnBG3znp2%2FhqliNb%2F1FdXGjTFeEIFEPK0h1JeIYGYkwXsRzsQXr4OZ82v1q72vSmHmAokee%2B3lkhdj3zYlbV86qlAB0J5FnMtHbACxmYF3SlFgsXOP%2F5DpHMUmpleqjdTEblDxI0iceIVdeNRFO8H4%2Bxdx6CR%2BAL1ZuOrhTQWeFNb2CJX63QKCI35eCtNSW0Myvllgd4vitWHvpoFen9171SWx3NdFR5NL7tagss7iLBewmREaHoMYepBAzbp1Gg%2FtFu6AyUeGg6DuiJBqjCxYsVAGmmBvGeFVCObOie7hVZy1n7RN2SnFo0v48%2BrI7cJAM81dSVBF4QGIZQYX3FwkUnwBMoVVMsE%2BErt0CgicKBnkSaNmcnrB983R3NJilCdcvOJ%2BFHG2h6sxqZehcCyjDOiZO%2FBjqkAaYZKeoKVOkDwdhzQi2EiB76M8aMllqGGY3d4Nx5DNh%2B8yy5BDOiQpyREjJRvLnFdPwWOyKlXcQnaR1S3W6dQFbeRj1WRhkmO8GbW1%2BqBPn0mAKMOOTjBRqwNBEqqNoIX13ppptVQ8%2FHHNv1UOnLLpsKxLS3aTYr6u8wkFQqbQPydcWgm5%2FSe853L5v7cBlB7oNt21F2UPy2BnAb0R4DzkE3VQfn&X-Amz-Signature=33df8d1a92d7293a2b38130eaa62360f19eb89afe81ee36919943c3e5e1e1ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Q3VB4X%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOEFb1Swym0mD5p7oCcA%2FjVR1Ngi1ESA5z%2BckTQk1bhgIhAMyxHDCGoq9mZSf2Phbgk3xPa3R4SZzLbnIhdwsqOoWqKv8DCD0QABoMNjM3NDIzMTgzODA1IgxJHdmIcoBcsH%2FEyW8q3AN5jXCUlWxndYpSdE%2BRzLRu%2BitCctUEZNvXU88RrgNG9dvE06yWyS%2F99aMON41BBt5t1KVrbseMrkFjvR5ecKJZ7JfmyLZOkgJd0pQ1onc9aV3qJHWmUWiP7O7AJddZdAHjOf6Ep8CG50txQsH1Y7%2FMcmjGBJA8rzQJH4a8VR54CbwRO7uqFUviRkbVM5TLeraCQg0YgM28HHG9d1M5OYkxrRt7I%2BjtrSlPABhaQnBG3znp2%2FhqliNb%2F1FdXGjTFeEIFEPK0h1JeIYGYkwXsRzsQXr4OZ82v1q72vSmHmAokee%2B3lkhdj3zYlbV86qlAB0J5FnMtHbACxmYF3SlFgsXOP%2F5DpHMUmpleqjdTEblDxI0iceIVdeNRFO8H4%2Bxdx6CR%2BAL1ZuOrhTQWeFNb2CJX63QKCI35eCtNSW0Myvllgd4vitWHvpoFen9171SWx3NdFR5NL7tagss7iLBewmREaHoMYepBAzbp1Gg%2FtFu6AyUeGg6DuiJBqjCxYsVAGmmBvGeFVCObOie7hVZy1n7RN2SnFo0v48%2BrI7cJAM81dSVBF4QGIZQYX3FwkUnwBMoVVMsE%2BErt0CgicKBnkSaNmcnrB983R3NJilCdcvOJ%2BFHG2h6sxqZehcCyjDOiZO%2FBjqkAaYZKeoKVOkDwdhzQi2EiB76M8aMllqGGY3d4Nx5DNh%2B8yy5BDOiQpyREjJRvLnFdPwWOyKlXcQnaR1S3W6dQFbeRj1WRhkmO8GbW1%2BqBPn0mAKMOOTjBRqwNBEqqNoIX13ppptVQ8%2FHHNv1UOnLLpsKxLS3aTYr6u8wkFQqbQPydcWgm5%2FSe853L5v7cBlB7oNt21F2UPy2BnAb0R4DzkE3VQfn&X-Amz-Signature=c107b58dfd6de8258e406d398bce0b0b5528f3ee0fc3ac892298e7186831885e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
