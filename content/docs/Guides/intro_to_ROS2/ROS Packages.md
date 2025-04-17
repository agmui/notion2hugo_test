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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y45AF45D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqeKCaIa8irpnK%2BrMEbKf0jfCoUc3hgsHQbu1LkcdxXAiA2JVQv9mSQNw11aSamNkiM2VoPOpSkVG%2BZez3t%2FV%2BYRCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM8D%2BEv0qUkMD9%2BIDqKtwDEri1Ft9i912zdivJCDWa6OqG%2BNB%2FDv0xjyadHu09NrcUXn9etXHfKamW1yK8Y2%2FrnGLc3637viAjWJYXhhyOxdb2hYhAvYjEgTuhDXJ7NvmN1gqpBcU%2Btk6SZ2rxrVntTM%2Bm5GZV3CJuGCIRyB1rGEQZbi7S3TufwuYY9j%2BlVPmDWr2NSVlezRPibfPc8H9YFAba1qeEDmXbrzt3X%2FyRlnFwrFWHRXOUBtzygejaS9w7OY1deP1g%2FZ1HoBPKRfoRuhmkDALnB0WCvhlIQfckBg5ExdwIusDzJWW4r%2FuExcq%2B%2Be7M5Q%2BOHkCCYPivw%2FjS4QZz6MKr6wIZwD1%2B2dbU0qHINx09b3kFWtfKM9WFJNtCj6zk83JEifFFLyvX1OeMCDCOtxQFQq1tPXD0FkXPeMeUFRmfzxUYSjQm8pKZsQeTvAuweybvvyhpcdOxZ3%2FM0sLiCsFUvTYE8XYiCim4Tqs7u%2FVlyNV9YO%2BPFMDbbliU44KUubM3ns4ApqDRpNqfOWVMYoY52Tv56rDXK%2FGm8wmJ99PYOWpMWa4YaL06AqipudTdQBqNdGw8U7fHT%2B1KV8e2vQdjHdzbYYVORwKlTdywGdqQf2o9dxAlCQBYstEYg4ev3dzz3VE%2FzyMw3pSDwAY6pgGTrlMR%2BEApXIXEBWB5egvmpNCn2S6pM54xw22rSn9lasFTJntqEBJPARkyzRe2ag5RxPdaAnGlEmWkzA4VekjoDeppTMROzOjiZloC6UP0maOMXoTdND5PUk6CQZs7VB1VY3U%2Feadf1l3YM3jvL0sc2vroxtrYI1QgXu3SamG%2F1P4RG1nH4P1NDdeHv4Y6xcZlImH23SDNUEJpoX89JRxT1n5Ma%2F2U&X-Amz-Signature=2d6a402048b57152ef0e4ee41a9d79d17ca1b1f1183ad4ca3f3c4fff99039c47&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y45AF45D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqeKCaIa8irpnK%2BrMEbKf0jfCoUc3hgsHQbu1LkcdxXAiA2JVQv9mSQNw11aSamNkiM2VoPOpSkVG%2BZez3t%2FV%2BYRCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM8D%2BEv0qUkMD9%2BIDqKtwDEri1Ft9i912zdivJCDWa6OqG%2BNB%2FDv0xjyadHu09NrcUXn9etXHfKamW1yK8Y2%2FrnGLc3637viAjWJYXhhyOxdb2hYhAvYjEgTuhDXJ7NvmN1gqpBcU%2Btk6SZ2rxrVntTM%2Bm5GZV3CJuGCIRyB1rGEQZbi7S3TufwuYY9j%2BlVPmDWr2NSVlezRPibfPc8H9YFAba1qeEDmXbrzt3X%2FyRlnFwrFWHRXOUBtzygejaS9w7OY1deP1g%2FZ1HoBPKRfoRuhmkDALnB0WCvhlIQfckBg5ExdwIusDzJWW4r%2FuExcq%2B%2Be7M5Q%2BOHkCCYPivw%2FjS4QZz6MKr6wIZwD1%2B2dbU0qHINx09b3kFWtfKM9WFJNtCj6zk83JEifFFLyvX1OeMCDCOtxQFQq1tPXD0FkXPeMeUFRmfzxUYSjQm8pKZsQeTvAuweybvvyhpcdOxZ3%2FM0sLiCsFUvTYE8XYiCim4Tqs7u%2FVlyNV9YO%2BPFMDbbliU44KUubM3ns4ApqDRpNqfOWVMYoY52Tv56rDXK%2FGm8wmJ99PYOWpMWa4YaL06AqipudTdQBqNdGw8U7fHT%2B1KV8e2vQdjHdzbYYVORwKlTdywGdqQf2o9dxAlCQBYstEYg4ev3dzz3VE%2FzyMw3pSDwAY6pgGTrlMR%2BEApXIXEBWB5egvmpNCn2S6pM54xw22rSn9lasFTJntqEBJPARkyzRe2ag5RxPdaAnGlEmWkzA4VekjoDeppTMROzOjiZloC6UP0maOMXoTdND5PUk6CQZs7VB1VY3U%2Feadf1l3YM3jvL0sc2vroxtrYI1QgXu3SamG%2F1P4RG1nH4P1NDdeHv4Y6xcZlImH23SDNUEJpoX89JRxT1n5Ma%2F2U&X-Amz-Signature=3340c6de5a855c71f3fce7ae54bedba724bde3123a301fc5317362ce66dde73a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y45AF45D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqeKCaIa8irpnK%2BrMEbKf0jfCoUc3hgsHQbu1LkcdxXAiA2JVQv9mSQNw11aSamNkiM2VoPOpSkVG%2BZez3t%2FV%2BYRCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM8D%2BEv0qUkMD9%2BIDqKtwDEri1Ft9i912zdivJCDWa6OqG%2BNB%2FDv0xjyadHu09NrcUXn9etXHfKamW1yK8Y2%2FrnGLc3637viAjWJYXhhyOxdb2hYhAvYjEgTuhDXJ7NvmN1gqpBcU%2Btk6SZ2rxrVntTM%2Bm5GZV3CJuGCIRyB1rGEQZbi7S3TufwuYY9j%2BlVPmDWr2NSVlezRPibfPc8H9YFAba1qeEDmXbrzt3X%2FyRlnFwrFWHRXOUBtzygejaS9w7OY1deP1g%2FZ1HoBPKRfoRuhmkDALnB0WCvhlIQfckBg5ExdwIusDzJWW4r%2FuExcq%2B%2Be7M5Q%2BOHkCCYPivw%2FjS4QZz6MKr6wIZwD1%2B2dbU0qHINx09b3kFWtfKM9WFJNtCj6zk83JEifFFLyvX1OeMCDCOtxQFQq1tPXD0FkXPeMeUFRmfzxUYSjQm8pKZsQeTvAuweybvvyhpcdOxZ3%2FM0sLiCsFUvTYE8XYiCim4Tqs7u%2FVlyNV9YO%2BPFMDbbliU44KUubM3ns4ApqDRpNqfOWVMYoY52Tv56rDXK%2FGm8wmJ99PYOWpMWa4YaL06AqipudTdQBqNdGw8U7fHT%2B1KV8e2vQdjHdzbYYVORwKlTdywGdqQf2o9dxAlCQBYstEYg4ev3dzz3VE%2FzyMw3pSDwAY6pgGTrlMR%2BEApXIXEBWB5egvmpNCn2S6pM54xw22rSn9lasFTJntqEBJPARkyzRe2ag5RxPdaAnGlEmWkzA4VekjoDeppTMROzOjiZloC6UP0maOMXoTdND5PUk6CQZs7VB1VY3U%2Feadf1l3YM3jvL0sc2vroxtrYI1QgXu3SamG%2F1P4RG1nH4P1NDdeHv4Y6xcZlImH23SDNUEJpoX89JRxT1n5Ma%2F2U&X-Amz-Signature=784e3ca55c5f34f5c9c7562fdea5d85eaee294df787cfff6d6bff4ddf49efeb4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y45AF45D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqeKCaIa8irpnK%2BrMEbKf0jfCoUc3hgsHQbu1LkcdxXAiA2JVQv9mSQNw11aSamNkiM2VoPOpSkVG%2BZez3t%2FV%2BYRCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM8D%2BEv0qUkMD9%2BIDqKtwDEri1Ft9i912zdivJCDWa6OqG%2BNB%2FDv0xjyadHu09NrcUXn9etXHfKamW1yK8Y2%2FrnGLc3637viAjWJYXhhyOxdb2hYhAvYjEgTuhDXJ7NvmN1gqpBcU%2Btk6SZ2rxrVntTM%2Bm5GZV3CJuGCIRyB1rGEQZbi7S3TufwuYY9j%2BlVPmDWr2NSVlezRPibfPc8H9YFAba1qeEDmXbrzt3X%2FyRlnFwrFWHRXOUBtzygejaS9w7OY1deP1g%2FZ1HoBPKRfoRuhmkDALnB0WCvhlIQfckBg5ExdwIusDzJWW4r%2FuExcq%2B%2Be7M5Q%2BOHkCCYPivw%2FjS4QZz6MKr6wIZwD1%2B2dbU0qHINx09b3kFWtfKM9WFJNtCj6zk83JEifFFLyvX1OeMCDCOtxQFQq1tPXD0FkXPeMeUFRmfzxUYSjQm8pKZsQeTvAuweybvvyhpcdOxZ3%2FM0sLiCsFUvTYE8XYiCim4Tqs7u%2FVlyNV9YO%2BPFMDbbliU44KUubM3ns4ApqDRpNqfOWVMYoY52Tv56rDXK%2FGm8wmJ99PYOWpMWa4YaL06AqipudTdQBqNdGw8U7fHT%2B1KV8e2vQdjHdzbYYVORwKlTdywGdqQf2o9dxAlCQBYstEYg4ev3dzz3VE%2FzyMw3pSDwAY6pgGTrlMR%2BEApXIXEBWB5egvmpNCn2S6pM54xw22rSn9lasFTJntqEBJPARkyzRe2ag5RxPdaAnGlEmWkzA4VekjoDeppTMROzOjiZloC6UP0maOMXoTdND5PUk6CQZs7VB1VY3U%2Feadf1l3YM3jvL0sc2vroxtrYI1QgXu3SamG%2F1P4RG1nH4P1NDdeHv4Y6xcZlImH23SDNUEJpoX89JRxT1n5Ma%2F2U&X-Amz-Signature=7d71c2c9d5d3e22b1a07c37f16fd0adf3b6ff42356780dd04d3c57f8a1228679&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y45AF45D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqeKCaIa8irpnK%2BrMEbKf0jfCoUc3hgsHQbu1LkcdxXAiA2JVQv9mSQNw11aSamNkiM2VoPOpSkVG%2BZez3t%2FV%2BYRCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM8D%2BEv0qUkMD9%2BIDqKtwDEri1Ft9i912zdivJCDWa6OqG%2BNB%2FDv0xjyadHu09NrcUXn9etXHfKamW1yK8Y2%2FrnGLc3637viAjWJYXhhyOxdb2hYhAvYjEgTuhDXJ7NvmN1gqpBcU%2Btk6SZ2rxrVntTM%2Bm5GZV3CJuGCIRyB1rGEQZbi7S3TufwuYY9j%2BlVPmDWr2NSVlezRPibfPc8H9YFAba1qeEDmXbrzt3X%2FyRlnFwrFWHRXOUBtzygejaS9w7OY1deP1g%2FZ1HoBPKRfoRuhmkDALnB0WCvhlIQfckBg5ExdwIusDzJWW4r%2FuExcq%2B%2Be7M5Q%2BOHkCCYPivw%2FjS4QZz6MKr6wIZwD1%2B2dbU0qHINx09b3kFWtfKM9WFJNtCj6zk83JEifFFLyvX1OeMCDCOtxQFQq1tPXD0FkXPeMeUFRmfzxUYSjQm8pKZsQeTvAuweybvvyhpcdOxZ3%2FM0sLiCsFUvTYE8XYiCim4Tqs7u%2FVlyNV9YO%2BPFMDbbliU44KUubM3ns4ApqDRpNqfOWVMYoY52Tv56rDXK%2FGm8wmJ99PYOWpMWa4YaL06AqipudTdQBqNdGw8U7fHT%2B1KV8e2vQdjHdzbYYVORwKlTdywGdqQf2o9dxAlCQBYstEYg4ev3dzz3VE%2FzyMw3pSDwAY6pgGTrlMR%2BEApXIXEBWB5egvmpNCn2S6pM54xw22rSn9lasFTJntqEBJPARkyzRe2ag5RxPdaAnGlEmWkzA4VekjoDeppTMROzOjiZloC6UP0maOMXoTdND5PUk6CQZs7VB1VY3U%2Feadf1l3YM3jvL0sc2vroxtrYI1QgXu3SamG%2F1P4RG1nH4P1NDdeHv4Y6xcZlImH23SDNUEJpoX89JRxT1n5Ma%2F2U&X-Amz-Signature=e9c895b59449731dbedc5ad75172c1f60c92ebd2fe400ff9b74c9652d310c74d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y45AF45D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqeKCaIa8irpnK%2BrMEbKf0jfCoUc3hgsHQbu1LkcdxXAiA2JVQv9mSQNw11aSamNkiM2VoPOpSkVG%2BZez3t%2FV%2BYRCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM8D%2BEv0qUkMD9%2BIDqKtwDEri1Ft9i912zdivJCDWa6OqG%2BNB%2FDv0xjyadHu09NrcUXn9etXHfKamW1yK8Y2%2FrnGLc3637viAjWJYXhhyOxdb2hYhAvYjEgTuhDXJ7NvmN1gqpBcU%2Btk6SZ2rxrVntTM%2Bm5GZV3CJuGCIRyB1rGEQZbi7S3TufwuYY9j%2BlVPmDWr2NSVlezRPibfPc8H9YFAba1qeEDmXbrzt3X%2FyRlnFwrFWHRXOUBtzygejaS9w7OY1deP1g%2FZ1HoBPKRfoRuhmkDALnB0WCvhlIQfckBg5ExdwIusDzJWW4r%2FuExcq%2B%2Be7M5Q%2BOHkCCYPivw%2FjS4QZz6MKr6wIZwD1%2B2dbU0qHINx09b3kFWtfKM9WFJNtCj6zk83JEifFFLyvX1OeMCDCOtxQFQq1tPXD0FkXPeMeUFRmfzxUYSjQm8pKZsQeTvAuweybvvyhpcdOxZ3%2FM0sLiCsFUvTYE8XYiCim4Tqs7u%2FVlyNV9YO%2BPFMDbbliU44KUubM3ns4ApqDRpNqfOWVMYoY52Tv56rDXK%2FGm8wmJ99PYOWpMWa4YaL06AqipudTdQBqNdGw8U7fHT%2B1KV8e2vQdjHdzbYYVORwKlTdywGdqQf2o9dxAlCQBYstEYg4ev3dzz3VE%2FzyMw3pSDwAY6pgGTrlMR%2BEApXIXEBWB5egvmpNCn2S6pM54xw22rSn9lasFTJntqEBJPARkyzRe2ag5RxPdaAnGlEmWkzA4VekjoDeppTMROzOjiZloC6UP0maOMXoTdND5PUk6CQZs7VB1VY3U%2Feadf1l3YM3jvL0sc2vroxtrYI1QgXu3SamG%2F1P4RG1nH4P1NDdeHv4Y6xcZlImH23SDNUEJpoX89JRxT1n5Ma%2F2U&X-Amz-Signature=89a2784dfd69ec22efacbefede7233fdc75234451503b6264483a2193cbd3536&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y45AF45D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqeKCaIa8irpnK%2BrMEbKf0jfCoUc3hgsHQbu1LkcdxXAiA2JVQv9mSQNw11aSamNkiM2VoPOpSkVG%2BZez3t%2FV%2BYRCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM8D%2BEv0qUkMD9%2BIDqKtwDEri1Ft9i912zdivJCDWa6OqG%2BNB%2FDv0xjyadHu09NrcUXn9etXHfKamW1yK8Y2%2FrnGLc3637viAjWJYXhhyOxdb2hYhAvYjEgTuhDXJ7NvmN1gqpBcU%2Btk6SZ2rxrVntTM%2Bm5GZV3CJuGCIRyB1rGEQZbi7S3TufwuYY9j%2BlVPmDWr2NSVlezRPibfPc8H9YFAba1qeEDmXbrzt3X%2FyRlnFwrFWHRXOUBtzygejaS9w7OY1deP1g%2FZ1HoBPKRfoRuhmkDALnB0WCvhlIQfckBg5ExdwIusDzJWW4r%2FuExcq%2B%2Be7M5Q%2BOHkCCYPivw%2FjS4QZz6MKr6wIZwD1%2B2dbU0qHINx09b3kFWtfKM9WFJNtCj6zk83JEifFFLyvX1OeMCDCOtxQFQq1tPXD0FkXPeMeUFRmfzxUYSjQm8pKZsQeTvAuweybvvyhpcdOxZ3%2FM0sLiCsFUvTYE8XYiCim4Tqs7u%2FVlyNV9YO%2BPFMDbbliU44KUubM3ns4ApqDRpNqfOWVMYoY52Tv56rDXK%2FGm8wmJ99PYOWpMWa4YaL06AqipudTdQBqNdGw8U7fHT%2B1KV8e2vQdjHdzbYYVORwKlTdywGdqQf2o9dxAlCQBYstEYg4ev3dzz3VE%2FzyMw3pSDwAY6pgGTrlMR%2BEApXIXEBWB5egvmpNCn2S6pM54xw22rSn9lasFTJntqEBJPARkyzRe2ag5RxPdaAnGlEmWkzA4VekjoDeppTMROzOjiZloC6UP0maOMXoTdND5PUk6CQZs7VB1VY3U%2Feadf1l3YM3jvL0sc2vroxtrYI1QgXu3SamG%2F1P4RG1nH4P1NDdeHv4Y6xcZlImH23SDNUEJpoX89JRxT1n5Ma%2F2U&X-Amz-Signature=b9e21ba9c84f91c95d35a5631a517cb7319bfa1ab686df4e7c5602fbd5fd4072&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
