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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLCO6TM2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6N0RMMHLrrkDTWmKTyES7O5bh9hnbz7IPp0YmAp5rwAiEA7XW%2FvgKkflWk%2F%2Bj4An86G%2BuIIYDyYx%2B9IuXDrXaYmcEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnh2Oug%2Fm0OCXMlKCrcAz81i%2BF%2BlT3jFh0Af2qxIKnq0CHkcpveFnN1HZ3%2FxxNobo%2BuoGS9xcsMlOcOIz%2FDH2XtypL5SajSB10aQz6eWtpGxfJENVFzPIlbtV1Fg3rQwVfSydiqVOpNd6Q1XEj5H%2BFbq7GfNXiqeTAhESXt3hcEW4d%2Bvs1Noder%2FIMQSGL80UIzYy0Ec0%2BasiBo25X1nYAX5PBJ5DdkFMHInX2cjq3ohi1kpZWH%2BBJY97YI%2Fo6uyc1GurKUl8heIzoK2EN7FI7Xf90g9aAoghz7lheZsbI%2FkxYn%2BsR5uKcl9gOkPDrJcqEwXZrMNtcJexhy3wokuPRkiYWWzHeNcGjsbzb6txv91Jf%2BruJHZ%2BaU3lSdRI02vnizzYRpQggiP6JTsqiCQn05Li2RkjmRcmvrbTnY2dPTfFXu01ZK4CjmrUMTLSQ2Wf%2BpWyK2t90oVHMsagLg%2FYPAODRFORwzB6VqZUxlZ8XeqUvlQS1P47tcN1ugJMYEvT2HT1IvXmvnv9DHToBsiLuaxFXpIDU0OOzNVknejH2X24w2cJ17dxhc9ZPE4KhXlKdqHLR36%2FJhY2c%2FW3tJegfBaL%2FKBIiauypGobDJpeaRBL13t2xLqS1FCJym9RRmF7Zp5WGxPT3cphwhMLyWzL4GOqUBKHsQqz3q3BY%2FFsTlQ9uU4Kq%2B5IA7BqIDZBtk717c2dnlF%2B4BpEoFa4iK8O7lwgBPvz9foVZ9GalOmuwgP1tnBFHF3CatjJYaPxC3vq4Uvahg7wJNc28MhdyoAUAjMEMUhU28OeVg3bv%2FOacqtw%2BZmMgv6ABkVycqWweMD0nfN8w%2FtOjn6Ihuim13gKWru138yEXlFMKxyGijGLl1EIB9YNJix6fb&X-Amz-Signature=c7d10709ed79c7665d0edd71ec75f6868838aeff8e11938fa563c4fd2a09f524&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLCO6TM2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6N0RMMHLrrkDTWmKTyES7O5bh9hnbz7IPp0YmAp5rwAiEA7XW%2FvgKkflWk%2F%2Bj4An86G%2BuIIYDyYx%2B9IuXDrXaYmcEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnh2Oug%2Fm0OCXMlKCrcAz81i%2BF%2BlT3jFh0Af2qxIKnq0CHkcpveFnN1HZ3%2FxxNobo%2BuoGS9xcsMlOcOIz%2FDH2XtypL5SajSB10aQz6eWtpGxfJENVFzPIlbtV1Fg3rQwVfSydiqVOpNd6Q1XEj5H%2BFbq7GfNXiqeTAhESXt3hcEW4d%2Bvs1Noder%2FIMQSGL80UIzYy0Ec0%2BasiBo25X1nYAX5PBJ5DdkFMHInX2cjq3ohi1kpZWH%2BBJY97YI%2Fo6uyc1GurKUl8heIzoK2EN7FI7Xf90g9aAoghz7lheZsbI%2FkxYn%2BsR5uKcl9gOkPDrJcqEwXZrMNtcJexhy3wokuPRkiYWWzHeNcGjsbzb6txv91Jf%2BruJHZ%2BaU3lSdRI02vnizzYRpQggiP6JTsqiCQn05Li2RkjmRcmvrbTnY2dPTfFXu01ZK4CjmrUMTLSQ2Wf%2BpWyK2t90oVHMsagLg%2FYPAODRFORwzB6VqZUxlZ8XeqUvlQS1P47tcN1ugJMYEvT2HT1IvXmvnv9DHToBsiLuaxFXpIDU0OOzNVknejH2X24w2cJ17dxhc9ZPE4KhXlKdqHLR36%2FJhY2c%2FW3tJegfBaL%2FKBIiauypGobDJpeaRBL13t2xLqS1FCJym9RRmF7Zp5WGxPT3cphwhMLyWzL4GOqUBKHsQqz3q3BY%2FFsTlQ9uU4Kq%2B5IA7BqIDZBtk717c2dnlF%2B4BpEoFa4iK8O7lwgBPvz9foVZ9GalOmuwgP1tnBFHF3CatjJYaPxC3vq4Uvahg7wJNc28MhdyoAUAjMEMUhU28OeVg3bv%2FOacqtw%2BZmMgv6ABkVycqWweMD0nfN8w%2FtOjn6Ihuim13gKWru138yEXlFMKxyGijGLl1EIB9YNJix6fb&X-Amz-Signature=f034751a794e25db6fbf0b7ae1834a0002146b31a4a58354ca2725331cbf47e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLCO6TM2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6N0RMMHLrrkDTWmKTyES7O5bh9hnbz7IPp0YmAp5rwAiEA7XW%2FvgKkflWk%2F%2Bj4An86G%2BuIIYDyYx%2B9IuXDrXaYmcEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnh2Oug%2Fm0OCXMlKCrcAz81i%2BF%2BlT3jFh0Af2qxIKnq0CHkcpveFnN1HZ3%2FxxNobo%2BuoGS9xcsMlOcOIz%2FDH2XtypL5SajSB10aQz6eWtpGxfJENVFzPIlbtV1Fg3rQwVfSydiqVOpNd6Q1XEj5H%2BFbq7GfNXiqeTAhESXt3hcEW4d%2Bvs1Noder%2FIMQSGL80UIzYy0Ec0%2BasiBo25X1nYAX5PBJ5DdkFMHInX2cjq3ohi1kpZWH%2BBJY97YI%2Fo6uyc1GurKUl8heIzoK2EN7FI7Xf90g9aAoghz7lheZsbI%2FkxYn%2BsR5uKcl9gOkPDrJcqEwXZrMNtcJexhy3wokuPRkiYWWzHeNcGjsbzb6txv91Jf%2BruJHZ%2BaU3lSdRI02vnizzYRpQggiP6JTsqiCQn05Li2RkjmRcmvrbTnY2dPTfFXu01ZK4CjmrUMTLSQ2Wf%2BpWyK2t90oVHMsagLg%2FYPAODRFORwzB6VqZUxlZ8XeqUvlQS1P47tcN1ugJMYEvT2HT1IvXmvnv9DHToBsiLuaxFXpIDU0OOzNVknejH2X24w2cJ17dxhc9ZPE4KhXlKdqHLR36%2FJhY2c%2FW3tJegfBaL%2FKBIiauypGobDJpeaRBL13t2xLqS1FCJym9RRmF7Zp5WGxPT3cphwhMLyWzL4GOqUBKHsQqz3q3BY%2FFsTlQ9uU4Kq%2B5IA7BqIDZBtk717c2dnlF%2B4BpEoFa4iK8O7lwgBPvz9foVZ9GalOmuwgP1tnBFHF3CatjJYaPxC3vq4Uvahg7wJNc28MhdyoAUAjMEMUhU28OeVg3bv%2FOacqtw%2BZmMgv6ABkVycqWweMD0nfN8w%2FtOjn6Ihuim13gKWru138yEXlFMKxyGijGLl1EIB9YNJix6fb&X-Amz-Signature=3a79d93a206f4b4a44b2e5fb95baa5002abf48d01a3c2c8c9239a95e6c8f7308&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLCO6TM2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6N0RMMHLrrkDTWmKTyES7O5bh9hnbz7IPp0YmAp5rwAiEA7XW%2FvgKkflWk%2F%2Bj4An86G%2BuIIYDyYx%2B9IuXDrXaYmcEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnh2Oug%2Fm0OCXMlKCrcAz81i%2BF%2BlT3jFh0Af2qxIKnq0CHkcpveFnN1HZ3%2FxxNobo%2BuoGS9xcsMlOcOIz%2FDH2XtypL5SajSB10aQz6eWtpGxfJENVFzPIlbtV1Fg3rQwVfSydiqVOpNd6Q1XEj5H%2BFbq7GfNXiqeTAhESXt3hcEW4d%2Bvs1Noder%2FIMQSGL80UIzYy0Ec0%2BasiBo25X1nYAX5PBJ5DdkFMHInX2cjq3ohi1kpZWH%2BBJY97YI%2Fo6uyc1GurKUl8heIzoK2EN7FI7Xf90g9aAoghz7lheZsbI%2FkxYn%2BsR5uKcl9gOkPDrJcqEwXZrMNtcJexhy3wokuPRkiYWWzHeNcGjsbzb6txv91Jf%2BruJHZ%2BaU3lSdRI02vnizzYRpQggiP6JTsqiCQn05Li2RkjmRcmvrbTnY2dPTfFXu01ZK4CjmrUMTLSQ2Wf%2BpWyK2t90oVHMsagLg%2FYPAODRFORwzB6VqZUxlZ8XeqUvlQS1P47tcN1ugJMYEvT2HT1IvXmvnv9DHToBsiLuaxFXpIDU0OOzNVknejH2X24w2cJ17dxhc9ZPE4KhXlKdqHLR36%2FJhY2c%2FW3tJegfBaL%2FKBIiauypGobDJpeaRBL13t2xLqS1FCJym9RRmF7Zp5WGxPT3cphwhMLyWzL4GOqUBKHsQqz3q3BY%2FFsTlQ9uU4Kq%2B5IA7BqIDZBtk717c2dnlF%2B4BpEoFa4iK8O7lwgBPvz9foVZ9GalOmuwgP1tnBFHF3CatjJYaPxC3vq4Uvahg7wJNc28MhdyoAUAjMEMUhU28OeVg3bv%2FOacqtw%2BZmMgv6ABkVycqWweMD0nfN8w%2FtOjn6Ihuim13gKWru138yEXlFMKxyGijGLl1EIB9YNJix6fb&X-Amz-Signature=6a885beba444ac5d7c08364d256b0091f5fedfb9b54d154718f57f3d22ba888e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLCO6TM2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6N0RMMHLrrkDTWmKTyES7O5bh9hnbz7IPp0YmAp5rwAiEA7XW%2FvgKkflWk%2F%2Bj4An86G%2BuIIYDyYx%2B9IuXDrXaYmcEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnh2Oug%2Fm0OCXMlKCrcAz81i%2BF%2BlT3jFh0Af2qxIKnq0CHkcpveFnN1HZ3%2FxxNobo%2BuoGS9xcsMlOcOIz%2FDH2XtypL5SajSB10aQz6eWtpGxfJENVFzPIlbtV1Fg3rQwVfSydiqVOpNd6Q1XEj5H%2BFbq7GfNXiqeTAhESXt3hcEW4d%2Bvs1Noder%2FIMQSGL80UIzYy0Ec0%2BasiBo25X1nYAX5PBJ5DdkFMHInX2cjq3ohi1kpZWH%2BBJY97YI%2Fo6uyc1GurKUl8heIzoK2EN7FI7Xf90g9aAoghz7lheZsbI%2FkxYn%2BsR5uKcl9gOkPDrJcqEwXZrMNtcJexhy3wokuPRkiYWWzHeNcGjsbzb6txv91Jf%2BruJHZ%2BaU3lSdRI02vnizzYRpQggiP6JTsqiCQn05Li2RkjmRcmvrbTnY2dPTfFXu01ZK4CjmrUMTLSQ2Wf%2BpWyK2t90oVHMsagLg%2FYPAODRFORwzB6VqZUxlZ8XeqUvlQS1P47tcN1ugJMYEvT2HT1IvXmvnv9DHToBsiLuaxFXpIDU0OOzNVknejH2X24w2cJ17dxhc9ZPE4KhXlKdqHLR36%2FJhY2c%2FW3tJegfBaL%2FKBIiauypGobDJpeaRBL13t2xLqS1FCJym9RRmF7Zp5WGxPT3cphwhMLyWzL4GOqUBKHsQqz3q3BY%2FFsTlQ9uU4Kq%2B5IA7BqIDZBtk717c2dnlF%2B4BpEoFa4iK8O7lwgBPvz9foVZ9GalOmuwgP1tnBFHF3CatjJYaPxC3vq4Uvahg7wJNc28MhdyoAUAjMEMUhU28OeVg3bv%2FOacqtw%2BZmMgv6ABkVycqWweMD0nfN8w%2FtOjn6Ihuim13gKWru138yEXlFMKxyGijGLl1EIB9YNJix6fb&X-Amz-Signature=5f3b41f947b5468c093530806e4b145924d2b2b23aa89a8e9a21d0dbab3cf457&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLCO6TM2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6N0RMMHLrrkDTWmKTyES7O5bh9hnbz7IPp0YmAp5rwAiEA7XW%2FvgKkflWk%2F%2Bj4An86G%2BuIIYDyYx%2B9IuXDrXaYmcEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnh2Oug%2Fm0OCXMlKCrcAz81i%2BF%2BlT3jFh0Af2qxIKnq0CHkcpveFnN1HZ3%2FxxNobo%2BuoGS9xcsMlOcOIz%2FDH2XtypL5SajSB10aQz6eWtpGxfJENVFzPIlbtV1Fg3rQwVfSydiqVOpNd6Q1XEj5H%2BFbq7GfNXiqeTAhESXt3hcEW4d%2Bvs1Noder%2FIMQSGL80UIzYy0Ec0%2BasiBo25X1nYAX5PBJ5DdkFMHInX2cjq3ohi1kpZWH%2BBJY97YI%2Fo6uyc1GurKUl8heIzoK2EN7FI7Xf90g9aAoghz7lheZsbI%2FkxYn%2BsR5uKcl9gOkPDrJcqEwXZrMNtcJexhy3wokuPRkiYWWzHeNcGjsbzb6txv91Jf%2BruJHZ%2BaU3lSdRI02vnizzYRpQggiP6JTsqiCQn05Li2RkjmRcmvrbTnY2dPTfFXu01ZK4CjmrUMTLSQ2Wf%2BpWyK2t90oVHMsagLg%2FYPAODRFORwzB6VqZUxlZ8XeqUvlQS1P47tcN1ugJMYEvT2HT1IvXmvnv9DHToBsiLuaxFXpIDU0OOzNVknejH2X24w2cJ17dxhc9ZPE4KhXlKdqHLR36%2FJhY2c%2FW3tJegfBaL%2FKBIiauypGobDJpeaRBL13t2xLqS1FCJym9RRmF7Zp5WGxPT3cphwhMLyWzL4GOqUBKHsQqz3q3BY%2FFsTlQ9uU4Kq%2B5IA7BqIDZBtk717c2dnlF%2B4BpEoFa4iK8O7lwgBPvz9foVZ9GalOmuwgP1tnBFHF3CatjJYaPxC3vq4Uvahg7wJNc28MhdyoAUAjMEMUhU28OeVg3bv%2FOacqtw%2BZmMgv6ABkVycqWweMD0nfN8w%2FtOjn6Ihuim13gKWru138yEXlFMKxyGijGLl1EIB9YNJix6fb&X-Amz-Signature=1fde1526d7e2d7eeb421ae31a3d1b31c330e0cde7e1abbbfb0fd7e3fbe9a0969&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLCO6TM2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6N0RMMHLrrkDTWmKTyES7O5bh9hnbz7IPp0YmAp5rwAiEA7XW%2FvgKkflWk%2F%2Bj4An86G%2BuIIYDyYx%2B9IuXDrXaYmcEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnh2Oug%2Fm0OCXMlKCrcAz81i%2BF%2BlT3jFh0Af2qxIKnq0CHkcpveFnN1HZ3%2FxxNobo%2BuoGS9xcsMlOcOIz%2FDH2XtypL5SajSB10aQz6eWtpGxfJENVFzPIlbtV1Fg3rQwVfSydiqVOpNd6Q1XEj5H%2BFbq7GfNXiqeTAhESXt3hcEW4d%2Bvs1Noder%2FIMQSGL80UIzYy0Ec0%2BasiBo25X1nYAX5PBJ5DdkFMHInX2cjq3ohi1kpZWH%2BBJY97YI%2Fo6uyc1GurKUl8heIzoK2EN7FI7Xf90g9aAoghz7lheZsbI%2FkxYn%2BsR5uKcl9gOkPDrJcqEwXZrMNtcJexhy3wokuPRkiYWWzHeNcGjsbzb6txv91Jf%2BruJHZ%2BaU3lSdRI02vnizzYRpQggiP6JTsqiCQn05Li2RkjmRcmvrbTnY2dPTfFXu01ZK4CjmrUMTLSQ2Wf%2BpWyK2t90oVHMsagLg%2FYPAODRFORwzB6VqZUxlZ8XeqUvlQS1P47tcN1ugJMYEvT2HT1IvXmvnv9DHToBsiLuaxFXpIDU0OOzNVknejH2X24w2cJ17dxhc9ZPE4KhXlKdqHLR36%2FJhY2c%2FW3tJegfBaL%2FKBIiauypGobDJpeaRBL13t2xLqS1FCJym9RRmF7Zp5WGxPT3cphwhMLyWzL4GOqUBKHsQqz3q3BY%2FFsTlQ9uU4Kq%2B5IA7BqIDZBtk717c2dnlF%2B4BpEoFa4iK8O7lwgBPvz9foVZ9GalOmuwgP1tnBFHF3CatjJYaPxC3vq4Uvahg7wJNc28MhdyoAUAjMEMUhU28OeVg3bv%2FOacqtw%2BZmMgv6ABkVycqWweMD0nfN8w%2FtOjn6Ihuim13gKWru138yEXlFMKxyGijGLl1EIB9YNJix6fb&X-Amz-Signature=ab0466bbe74b9a0b7905549410252a7aa60dd4a54a283ebb8f2dd3a9117196bf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
