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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGW3Q3A%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCICLQTqTHJVdZZtTxmMd6xQUpeAiQoT3sJrt2QCdcTNy%2BAiEAszukHCa%2BBka3wvv7hPfWe0%2FLy1Qmm5G7ZPozaTTODBoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB06eiIPZxR5MWbr8SrcA2jZcXpfmvYtbjCfap5RYrHTprAE6UGLB7Ttee8cU4jzYgZ8FuNfgCPeWugexu3C5Uwt81f1XtCYgQWJNv34My3CcvreAPX7cEhtAlicqIFo3A9T9Bhs37EQiIh23sgoXVv73PqpvuX2sSy%2BJc8b2hm3bFmDscyFMtaiQjGu1WDFO7QBMfDnJdAicMSQ%2FVAzp4ZuFNQGmAKjYuZcZ8KecZmMxZUQufzPmirRDMVj3YBj9tqF2KTSVI46XGGZQ4M07tfHMytXpwy60Xyy2p7WQkTNOpzW8sidXWQskAR2Y4u301rzFiY0gjdFv5JiQW59d0yF4lz6lXNL8nXuQLj2aPF3K1TDF%2B8226we9MkZNqiA5j9KBroKHrGlUKJm0Zg8VQnnZ4%2FkWB5ou14ojK1L1N4l1ryJys76eEETfT5mVqT1m4Rs8OMCBTFWq6H%2Fi34aXJM2sd%2BbTAnroepQEg5ezJfNJVxZGLj%2Fjk9cd%2Ftdyr0qYWUyGp7aggOZIiGbXnfotQrs4ULfchU1KywMzZpBrlu9G6I5vLNrL8vcO05DXf8TUeMoykRQs8VLUFWSnjqLXyMG4vBeBW7RkPIsECoeerjSqryhEHrjUbeuAR%2B%2BHFfE7a7GZRDOju%2FmZYTbMJ3Cv8EGOqUB%2BkWvj0IJFfJTX4SFMpB1cH8FqTmdwtLtnuCigrloftLcLhcczUsW50SeV9YhNCheg6X3NR7heH6xwASeCkEbZvDzto2pdxoBRD0FzjPaw0E2G1zw%2FdlJdnn9IwQDvsZSGurrWFkJAdJKtStBnJ8F%2FOJXj3riPqWcqBhiqqdoClzIeO7VCqR%2B4TOwwJj1uW8bGKY9k%2FkaN37ODGOSIxnvGcUGiypq&X-Amz-Signature=e0a69550ff4997013b9534ab9597c156b29951af94e462d7f5268a8347bd3aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGW3Q3A%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCICLQTqTHJVdZZtTxmMd6xQUpeAiQoT3sJrt2QCdcTNy%2BAiEAszukHCa%2BBka3wvv7hPfWe0%2FLy1Qmm5G7ZPozaTTODBoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB06eiIPZxR5MWbr8SrcA2jZcXpfmvYtbjCfap5RYrHTprAE6UGLB7Ttee8cU4jzYgZ8FuNfgCPeWugexu3C5Uwt81f1XtCYgQWJNv34My3CcvreAPX7cEhtAlicqIFo3A9T9Bhs37EQiIh23sgoXVv73PqpvuX2sSy%2BJc8b2hm3bFmDscyFMtaiQjGu1WDFO7QBMfDnJdAicMSQ%2FVAzp4ZuFNQGmAKjYuZcZ8KecZmMxZUQufzPmirRDMVj3YBj9tqF2KTSVI46XGGZQ4M07tfHMytXpwy60Xyy2p7WQkTNOpzW8sidXWQskAR2Y4u301rzFiY0gjdFv5JiQW59d0yF4lz6lXNL8nXuQLj2aPF3K1TDF%2B8226we9MkZNqiA5j9KBroKHrGlUKJm0Zg8VQnnZ4%2FkWB5ou14ojK1L1N4l1ryJys76eEETfT5mVqT1m4Rs8OMCBTFWq6H%2Fi34aXJM2sd%2BbTAnroepQEg5ezJfNJVxZGLj%2Fjk9cd%2Ftdyr0qYWUyGp7aggOZIiGbXnfotQrs4ULfchU1KywMzZpBrlu9G6I5vLNrL8vcO05DXf8TUeMoykRQs8VLUFWSnjqLXyMG4vBeBW7RkPIsECoeerjSqryhEHrjUbeuAR%2B%2BHFfE7a7GZRDOju%2FmZYTbMJ3Cv8EGOqUB%2BkWvj0IJFfJTX4SFMpB1cH8FqTmdwtLtnuCigrloftLcLhcczUsW50SeV9YhNCheg6X3NR7heH6xwASeCkEbZvDzto2pdxoBRD0FzjPaw0E2G1zw%2FdlJdnn9IwQDvsZSGurrWFkJAdJKtStBnJ8F%2FOJXj3riPqWcqBhiqqdoClzIeO7VCqR%2B4TOwwJj1uW8bGKY9k%2FkaN37ODGOSIxnvGcUGiypq&X-Amz-Signature=989dd9bcc38c0665b8c7b1c0433a5499c8638cb592df009541e0d19111396e23&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGW3Q3A%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCICLQTqTHJVdZZtTxmMd6xQUpeAiQoT3sJrt2QCdcTNy%2BAiEAszukHCa%2BBka3wvv7hPfWe0%2FLy1Qmm5G7ZPozaTTODBoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB06eiIPZxR5MWbr8SrcA2jZcXpfmvYtbjCfap5RYrHTprAE6UGLB7Ttee8cU4jzYgZ8FuNfgCPeWugexu3C5Uwt81f1XtCYgQWJNv34My3CcvreAPX7cEhtAlicqIFo3A9T9Bhs37EQiIh23sgoXVv73PqpvuX2sSy%2BJc8b2hm3bFmDscyFMtaiQjGu1WDFO7QBMfDnJdAicMSQ%2FVAzp4ZuFNQGmAKjYuZcZ8KecZmMxZUQufzPmirRDMVj3YBj9tqF2KTSVI46XGGZQ4M07tfHMytXpwy60Xyy2p7WQkTNOpzW8sidXWQskAR2Y4u301rzFiY0gjdFv5JiQW59d0yF4lz6lXNL8nXuQLj2aPF3K1TDF%2B8226we9MkZNqiA5j9KBroKHrGlUKJm0Zg8VQnnZ4%2FkWB5ou14ojK1L1N4l1ryJys76eEETfT5mVqT1m4Rs8OMCBTFWq6H%2Fi34aXJM2sd%2BbTAnroepQEg5ezJfNJVxZGLj%2Fjk9cd%2Ftdyr0qYWUyGp7aggOZIiGbXnfotQrs4ULfchU1KywMzZpBrlu9G6I5vLNrL8vcO05DXf8TUeMoykRQs8VLUFWSnjqLXyMG4vBeBW7RkPIsECoeerjSqryhEHrjUbeuAR%2B%2BHFfE7a7GZRDOju%2FmZYTbMJ3Cv8EGOqUB%2BkWvj0IJFfJTX4SFMpB1cH8FqTmdwtLtnuCigrloftLcLhcczUsW50SeV9YhNCheg6X3NR7heH6xwASeCkEbZvDzto2pdxoBRD0FzjPaw0E2G1zw%2FdlJdnn9IwQDvsZSGurrWFkJAdJKtStBnJ8F%2FOJXj3riPqWcqBhiqqdoClzIeO7VCqR%2B4TOwwJj1uW8bGKY9k%2FkaN37ODGOSIxnvGcUGiypq&X-Amz-Signature=d514805ec820a5be8b010f1781c608882e979b29b2505623c4e9451e3ec5d54d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGW3Q3A%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCICLQTqTHJVdZZtTxmMd6xQUpeAiQoT3sJrt2QCdcTNy%2BAiEAszukHCa%2BBka3wvv7hPfWe0%2FLy1Qmm5G7ZPozaTTODBoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB06eiIPZxR5MWbr8SrcA2jZcXpfmvYtbjCfap5RYrHTprAE6UGLB7Ttee8cU4jzYgZ8FuNfgCPeWugexu3C5Uwt81f1XtCYgQWJNv34My3CcvreAPX7cEhtAlicqIFo3A9T9Bhs37EQiIh23sgoXVv73PqpvuX2sSy%2BJc8b2hm3bFmDscyFMtaiQjGu1WDFO7QBMfDnJdAicMSQ%2FVAzp4ZuFNQGmAKjYuZcZ8KecZmMxZUQufzPmirRDMVj3YBj9tqF2KTSVI46XGGZQ4M07tfHMytXpwy60Xyy2p7WQkTNOpzW8sidXWQskAR2Y4u301rzFiY0gjdFv5JiQW59d0yF4lz6lXNL8nXuQLj2aPF3K1TDF%2B8226we9MkZNqiA5j9KBroKHrGlUKJm0Zg8VQnnZ4%2FkWB5ou14ojK1L1N4l1ryJys76eEETfT5mVqT1m4Rs8OMCBTFWq6H%2Fi34aXJM2sd%2BbTAnroepQEg5ezJfNJVxZGLj%2Fjk9cd%2Ftdyr0qYWUyGp7aggOZIiGbXnfotQrs4ULfchU1KywMzZpBrlu9G6I5vLNrL8vcO05DXf8TUeMoykRQs8VLUFWSnjqLXyMG4vBeBW7RkPIsECoeerjSqryhEHrjUbeuAR%2B%2BHFfE7a7GZRDOju%2FmZYTbMJ3Cv8EGOqUB%2BkWvj0IJFfJTX4SFMpB1cH8FqTmdwtLtnuCigrloftLcLhcczUsW50SeV9YhNCheg6X3NR7heH6xwASeCkEbZvDzto2pdxoBRD0FzjPaw0E2G1zw%2FdlJdnn9IwQDvsZSGurrWFkJAdJKtStBnJ8F%2FOJXj3riPqWcqBhiqqdoClzIeO7VCqR%2B4TOwwJj1uW8bGKY9k%2FkaN37ODGOSIxnvGcUGiypq&X-Amz-Signature=9f58abf1d2db467b905784bf7fbbdee368b9c2565adccb5d5fc6c03b29cc1ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGW3Q3A%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCICLQTqTHJVdZZtTxmMd6xQUpeAiQoT3sJrt2QCdcTNy%2BAiEAszukHCa%2BBka3wvv7hPfWe0%2FLy1Qmm5G7ZPozaTTODBoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB06eiIPZxR5MWbr8SrcA2jZcXpfmvYtbjCfap5RYrHTprAE6UGLB7Ttee8cU4jzYgZ8FuNfgCPeWugexu3C5Uwt81f1XtCYgQWJNv34My3CcvreAPX7cEhtAlicqIFo3A9T9Bhs37EQiIh23sgoXVv73PqpvuX2sSy%2BJc8b2hm3bFmDscyFMtaiQjGu1WDFO7QBMfDnJdAicMSQ%2FVAzp4ZuFNQGmAKjYuZcZ8KecZmMxZUQufzPmirRDMVj3YBj9tqF2KTSVI46XGGZQ4M07tfHMytXpwy60Xyy2p7WQkTNOpzW8sidXWQskAR2Y4u301rzFiY0gjdFv5JiQW59d0yF4lz6lXNL8nXuQLj2aPF3K1TDF%2B8226we9MkZNqiA5j9KBroKHrGlUKJm0Zg8VQnnZ4%2FkWB5ou14ojK1L1N4l1ryJys76eEETfT5mVqT1m4Rs8OMCBTFWq6H%2Fi34aXJM2sd%2BbTAnroepQEg5ezJfNJVxZGLj%2Fjk9cd%2Ftdyr0qYWUyGp7aggOZIiGbXnfotQrs4ULfchU1KywMzZpBrlu9G6I5vLNrL8vcO05DXf8TUeMoykRQs8VLUFWSnjqLXyMG4vBeBW7RkPIsECoeerjSqryhEHrjUbeuAR%2B%2BHFfE7a7GZRDOju%2FmZYTbMJ3Cv8EGOqUB%2BkWvj0IJFfJTX4SFMpB1cH8FqTmdwtLtnuCigrloftLcLhcczUsW50SeV9YhNCheg6X3NR7heH6xwASeCkEbZvDzto2pdxoBRD0FzjPaw0E2G1zw%2FdlJdnn9IwQDvsZSGurrWFkJAdJKtStBnJ8F%2FOJXj3riPqWcqBhiqqdoClzIeO7VCqR%2B4TOwwJj1uW8bGKY9k%2FkaN37ODGOSIxnvGcUGiypq&X-Amz-Signature=86108136c913083f7fa0103eb134677bf8b877856e0a9abba59aa1583b6c921d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGW3Q3A%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCICLQTqTHJVdZZtTxmMd6xQUpeAiQoT3sJrt2QCdcTNy%2BAiEAszukHCa%2BBka3wvv7hPfWe0%2FLy1Qmm5G7ZPozaTTODBoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB06eiIPZxR5MWbr8SrcA2jZcXpfmvYtbjCfap5RYrHTprAE6UGLB7Ttee8cU4jzYgZ8FuNfgCPeWugexu3C5Uwt81f1XtCYgQWJNv34My3CcvreAPX7cEhtAlicqIFo3A9T9Bhs37EQiIh23sgoXVv73PqpvuX2sSy%2BJc8b2hm3bFmDscyFMtaiQjGu1WDFO7QBMfDnJdAicMSQ%2FVAzp4ZuFNQGmAKjYuZcZ8KecZmMxZUQufzPmirRDMVj3YBj9tqF2KTSVI46XGGZQ4M07tfHMytXpwy60Xyy2p7WQkTNOpzW8sidXWQskAR2Y4u301rzFiY0gjdFv5JiQW59d0yF4lz6lXNL8nXuQLj2aPF3K1TDF%2B8226we9MkZNqiA5j9KBroKHrGlUKJm0Zg8VQnnZ4%2FkWB5ou14ojK1L1N4l1ryJys76eEETfT5mVqT1m4Rs8OMCBTFWq6H%2Fi34aXJM2sd%2BbTAnroepQEg5ezJfNJVxZGLj%2Fjk9cd%2Ftdyr0qYWUyGp7aggOZIiGbXnfotQrs4ULfchU1KywMzZpBrlu9G6I5vLNrL8vcO05DXf8TUeMoykRQs8VLUFWSnjqLXyMG4vBeBW7RkPIsECoeerjSqryhEHrjUbeuAR%2B%2BHFfE7a7GZRDOju%2FmZYTbMJ3Cv8EGOqUB%2BkWvj0IJFfJTX4SFMpB1cH8FqTmdwtLtnuCigrloftLcLhcczUsW50SeV9YhNCheg6X3NR7heH6xwASeCkEbZvDzto2pdxoBRD0FzjPaw0E2G1zw%2FdlJdnn9IwQDvsZSGurrWFkJAdJKtStBnJ8F%2FOJXj3riPqWcqBhiqqdoClzIeO7VCqR%2B4TOwwJj1uW8bGKY9k%2FkaN37ODGOSIxnvGcUGiypq&X-Amz-Signature=66ee19811f6087aa89a9d70358dbf499b4662764211074b925f9e19f44274b58&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGW3Q3A%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCICLQTqTHJVdZZtTxmMd6xQUpeAiQoT3sJrt2QCdcTNy%2BAiEAszukHCa%2BBka3wvv7hPfWe0%2FLy1Qmm5G7ZPozaTTODBoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB06eiIPZxR5MWbr8SrcA2jZcXpfmvYtbjCfap5RYrHTprAE6UGLB7Ttee8cU4jzYgZ8FuNfgCPeWugexu3C5Uwt81f1XtCYgQWJNv34My3CcvreAPX7cEhtAlicqIFo3A9T9Bhs37EQiIh23sgoXVv73PqpvuX2sSy%2BJc8b2hm3bFmDscyFMtaiQjGu1WDFO7QBMfDnJdAicMSQ%2FVAzp4ZuFNQGmAKjYuZcZ8KecZmMxZUQufzPmirRDMVj3YBj9tqF2KTSVI46XGGZQ4M07tfHMytXpwy60Xyy2p7WQkTNOpzW8sidXWQskAR2Y4u301rzFiY0gjdFv5JiQW59d0yF4lz6lXNL8nXuQLj2aPF3K1TDF%2B8226we9MkZNqiA5j9KBroKHrGlUKJm0Zg8VQnnZ4%2FkWB5ou14ojK1L1N4l1ryJys76eEETfT5mVqT1m4Rs8OMCBTFWq6H%2Fi34aXJM2sd%2BbTAnroepQEg5ezJfNJVxZGLj%2Fjk9cd%2Ftdyr0qYWUyGp7aggOZIiGbXnfotQrs4ULfchU1KywMzZpBrlu9G6I5vLNrL8vcO05DXf8TUeMoykRQs8VLUFWSnjqLXyMG4vBeBW7RkPIsECoeerjSqryhEHrjUbeuAR%2B%2BHFfE7a7GZRDOju%2FmZYTbMJ3Cv8EGOqUB%2BkWvj0IJFfJTX4SFMpB1cH8FqTmdwtLtnuCigrloftLcLhcczUsW50SeV9YhNCheg6X3NR7heH6xwASeCkEbZvDzto2pdxoBRD0FzjPaw0E2G1zw%2FdlJdnn9IwQDvsZSGurrWFkJAdJKtStBnJ8F%2FOJXj3riPqWcqBhiqqdoClzIeO7VCqR%2B4TOwwJj1uW8bGKY9k%2FkaN37ODGOSIxnvGcUGiypq&X-Amz-Signature=690c76bbe8eaa5859c39324f074c622d797fcb6e7002a59cc59c4553f69274b0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
