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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HIV7X5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJNA3oHnbNtkBKhXlnqEDoQlOgzzR1NbzOFjbwyvmoQIgTnouDIwmiFSKCiQjgzlSn%2FCQF0UcJp8VME6y3RSN7hIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD6jVHZRjmqfRZQDircA5pzJMPQOSUlMqeVXM6xHXx9qx1Z9FFlyhudfJ4i1jimDXRauS%2BAo7y8FMkrWCWWJ7H6U52IfTewQzMheE7nq1DcZkVKtDnCAi8WmC42xrmsTh9MivrUnNaz4arE0%2FFI70QNvCqXLvpVMjHZ%2F%2BcSLMqxh1aMDI1pLFRr19UNwgytH1h1kJUguyK8%2BsMZIn%2FL0t%2BX98Dd3AvXQ%2F1YytqpeUuZ6UZ7PrITcsriMOoa3Z%2B3M9ECooNYy0TB8TfSPqGgsddIZ1Nc0K8%2BhjrWIHsqwoQ8vkmDOzJjp6X9DmxgmPnWvINusowS3WmxYoSFO2SLZ%2FPpwOTdLH2Ggsgqz%2FMQtGM2bL21lQzCYHawwmcfo6wQn1qIemfSDScUC2zILO7R%2FSxYUZbT7ElBsutWTKXvTnCbz9xYEztxVyq%2BANexfWB93Hfa7DDykx%2BB1zvVZtjdpndUWXP%2B6RhocnqdFKA6xT0n6IgDTeK%2BnBcDCyYHe4hS%2BeHp14fxSSaMt4qGcxIX6MhsZvELGMpmiS%2FzScANV%2B716ep7qL%2B2vpoe50XN5xTQjdInFaaXVOaMzwr1CAsnafWPaiweW%2BvpRd9%2BIYvFfaJBIYovVQ3NwYAvWBwiJyPXCqfJeK1U7thVabnWMJ36i8MGOqUBV3NhpmrIWq4d89jv0bso9ENog6%2BMJsajR03pPJcWUQYiOeTpmZFF%2Bi4FZoeu%2B8Seh2SI%2FPS1wHqfiq3oGUNIfw9CqYvhiP9VmyzUDL51cCp89W4KScElPqWUhAPkotnLxfdtTUTO0Ra4FM%2B8%2BGMhSZbmTA0znJN0sqVjZrOlycb5D4Zr6V18RkZ71qn5ROdcV0OxOGpDIbGV30FzqpyNWrCBLsd6&X-Amz-Signature=f96699494de76fe79e9b4460c7ff72d5077c88af2ff370be3e8f13dc862c9879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HIV7X5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJNA3oHnbNtkBKhXlnqEDoQlOgzzR1NbzOFjbwyvmoQIgTnouDIwmiFSKCiQjgzlSn%2FCQF0UcJp8VME6y3RSN7hIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD6jVHZRjmqfRZQDircA5pzJMPQOSUlMqeVXM6xHXx9qx1Z9FFlyhudfJ4i1jimDXRauS%2BAo7y8FMkrWCWWJ7H6U52IfTewQzMheE7nq1DcZkVKtDnCAi8WmC42xrmsTh9MivrUnNaz4arE0%2FFI70QNvCqXLvpVMjHZ%2F%2BcSLMqxh1aMDI1pLFRr19UNwgytH1h1kJUguyK8%2BsMZIn%2FL0t%2BX98Dd3AvXQ%2F1YytqpeUuZ6UZ7PrITcsriMOoa3Z%2B3M9ECooNYy0TB8TfSPqGgsddIZ1Nc0K8%2BhjrWIHsqwoQ8vkmDOzJjp6X9DmxgmPnWvINusowS3WmxYoSFO2SLZ%2FPpwOTdLH2Ggsgqz%2FMQtGM2bL21lQzCYHawwmcfo6wQn1qIemfSDScUC2zILO7R%2FSxYUZbT7ElBsutWTKXvTnCbz9xYEztxVyq%2BANexfWB93Hfa7DDykx%2BB1zvVZtjdpndUWXP%2B6RhocnqdFKA6xT0n6IgDTeK%2BnBcDCyYHe4hS%2BeHp14fxSSaMt4qGcxIX6MhsZvELGMpmiS%2FzScANV%2B716ep7qL%2B2vpoe50XN5xTQjdInFaaXVOaMzwr1CAsnafWPaiweW%2BvpRd9%2BIYvFfaJBIYovVQ3NwYAvWBwiJyPXCqfJeK1U7thVabnWMJ36i8MGOqUBV3NhpmrIWq4d89jv0bso9ENog6%2BMJsajR03pPJcWUQYiOeTpmZFF%2Bi4FZoeu%2B8Seh2SI%2FPS1wHqfiq3oGUNIfw9CqYvhiP9VmyzUDL51cCp89W4KScElPqWUhAPkotnLxfdtTUTO0Ra4FM%2B8%2BGMhSZbmTA0znJN0sqVjZrOlycb5D4Zr6V18RkZ71qn5ROdcV0OxOGpDIbGV30FzqpyNWrCBLsd6&X-Amz-Signature=9ac1ae391f8b6279e8977284b8c8dc0fad7b824048d17f059e42f2aa938cf3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HIV7X5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJNA3oHnbNtkBKhXlnqEDoQlOgzzR1NbzOFjbwyvmoQIgTnouDIwmiFSKCiQjgzlSn%2FCQF0UcJp8VME6y3RSN7hIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD6jVHZRjmqfRZQDircA5pzJMPQOSUlMqeVXM6xHXx9qx1Z9FFlyhudfJ4i1jimDXRauS%2BAo7y8FMkrWCWWJ7H6U52IfTewQzMheE7nq1DcZkVKtDnCAi8WmC42xrmsTh9MivrUnNaz4arE0%2FFI70QNvCqXLvpVMjHZ%2F%2BcSLMqxh1aMDI1pLFRr19UNwgytH1h1kJUguyK8%2BsMZIn%2FL0t%2BX98Dd3AvXQ%2F1YytqpeUuZ6UZ7PrITcsriMOoa3Z%2B3M9ECooNYy0TB8TfSPqGgsddIZ1Nc0K8%2BhjrWIHsqwoQ8vkmDOzJjp6X9DmxgmPnWvINusowS3WmxYoSFO2SLZ%2FPpwOTdLH2Ggsgqz%2FMQtGM2bL21lQzCYHawwmcfo6wQn1qIemfSDScUC2zILO7R%2FSxYUZbT7ElBsutWTKXvTnCbz9xYEztxVyq%2BANexfWB93Hfa7DDykx%2BB1zvVZtjdpndUWXP%2B6RhocnqdFKA6xT0n6IgDTeK%2BnBcDCyYHe4hS%2BeHp14fxSSaMt4qGcxIX6MhsZvELGMpmiS%2FzScANV%2B716ep7qL%2B2vpoe50XN5xTQjdInFaaXVOaMzwr1CAsnafWPaiweW%2BvpRd9%2BIYvFfaJBIYovVQ3NwYAvWBwiJyPXCqfJeK1U7thVabnWMJ36i8MGOqUBV3NhpmrIWq4d89jv0bso9ENog6%2BMJsajR03pPJcWUQYiOeTpmZFF%2Bi4FZoeu%2B8Seh2SI%2FPS1wHqfiq3oGUNIfw9CqYvhiP9VmyzUDL51cCp89W4KScElPqWUhAPkotnLxfdtTUTO0Ra4FM%2B8%2BGMhSZbmTA0znJN0sqVjZrOlycb5D4Zr6V18RkZ71qn5ROdcV0OxOGpDIbGV30FzqpyNWrCBLsd6&X-Amz-Signature=31632463d82027ac5b19dcedf59853818d85a266bbbc53abe236d0d58846c37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HIV7X5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJNA3oHnbNtkBKhXlnqEDoQlOgzzR1NbzOFjbwyvmoQIgTnouDIwmiFSKCiQjgzlSn%2FCQF0UcJp8VME6y3RSN7hIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD6jVHZRjmqfRZQDircA5pzJMPQOSUlMqeVXM6xHXx9qx1Z9FFlyhudfJ4i1jimDXRauS%2BAo7y8FMkrWCWWJ7H6U52IfTewQzMheE7nq1DcZkVKtDnCAi8WmC42xrmsTh9MivrUnNaz4arE0%2FFI70QNvCqXLvpVMjHZ%2F%2BcSLMqxh1aMDI1pLFRr19UNwgytH1h1kJUguyK8%2BsMZIn%2FL0t%2BX98Dd3AvXQ%2F1YytqpeUuZ6UZ7PrITcsriMOoa3Z%2B3M9ECooNYy0TB8TfSPqGgsddIZ1Nc0K8%2BhjrWIHsqwoQ8vkmDOzJjp6X9DmxgmPnWvINusowS3WmxYoSFO2SLZ%2FPpwOTdLH2Ggsgqz%2FMQtGM2bL21lQzCYHawwmcfo6wQn1qIemfSDScUC2zILO7R%2FSxYUZbT7ElBsutWTKXvTnCbz9xYEztxVyq%2BANexfWB93Hfa7DDykx%2BB1zvVZtjdpndUWXP%2B6RhocnqdFKA6xT0n6IgDTeK%2BnBcDCyYHe4hS%2BeHp14fxSSaMt4qGcxIX6MhsZvELGMpmiS%2FzScANV%2B716ep7qL%2B2vpoe50XN5xTQjdInFaaXVOaMzwr1CAsnafWPaiweW%2BvpRd9%2BIYvFfaJBIYovVQ3NwYAvWBwiJyPXCqfJeK1U7thVabnWMJ36i8MGOqUBV3NhpmrIWq4d89jv0bso9ENog6%2BMJsajR03pPJcWUQYiOeTpmZFF%2Bi4FZoeu%2B8Seh2SI%2FPS1wHqfiq3oGUNIfw9CqYvhiP9VmyzUDL51cCp89W4KScElPqWUhAPkotnLxfdtTUTO0Ra4FM%2B8%2BGMhSZbmTA0znJN0sqVjZrOlycb5D4Zr6V18RkZ71qn5ROdcV0OxOGpDIbGV30FzqpyNWrCBLsd6&X-Amz-Signature=9482154617755012bae3471bc2963e5e6c5e408af481709d698d7af79a690971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HIV7X5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJNA3oHnbNtkBKhXlnqEDoQlOgzzR1NbzOFjbwyvmoQIgTnouDIwmiFSKCiQjgzlSn%2FCQF0UcJp8VME6y3RSN7hIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD6jVHZRjmqfRZQDircA5pzJMPQOSUlMqeVXM6xHXx9qx1Z9FFlyhudfJ4i1jimDXRauS%2BAo7y8FMkrWCWWJ7H6U52IfTewQzMheE7nq1DcZkVKtDnCAi8WmC42xrmsTh9MivrUnNaz4arE0%2FFI70QNvCqXLvpVMjHZ%2F%2BcSLMqxh1aMDI1pLFRr19UNwgytH1h1kJUguyK8%2BsMZIn%2FL0t%2BX98Dd3AvXQ%2F1YytqpeUuZ6UZ7PrITcsriMOoa3Z%2B3M9ECooNYy0TB8TfSPqGgsddIZ1Nc0K8%2BhjrWIHsqwoQ8vkmDOzJjp6X9DmxgmPnWvINusowS3WmxYoSFO2SLZ%2FPpwOTdLH2Ggsgqz%2FMQtGM2bL21lQzCYHawwmcfo6wQn1qIemfSDScUC2zILO7R%2FSxYUZbT7ElBsutWTKXvTnCbz9xYEztxVyq%2BANexfWB93Hfa7DDykx%2BB1zvVZtjdpndUWXP%2B6RhocnqdFKA6xT0n6IgDTeK%2BnBcDCyYHe4hS%2BeHp14fxSSaMt4qGcxIX6MhsZvELGMpmiS%2FzScANV%2B716ep7qL%2B2vpoe50XN5xTQjdInFaaXVOaMzwr1CAsnafWPaiweW%2BvpRd9%2BIYvFfaJBIYovVQ3NwYAvWBwiJyPXCqfJeK1U7thVabnWMJ36i8MGOqUBV3NhpmrIWq4d89jv0bso9ENog6%2BMJsajR03pPJcWUQYiOeTpmZFF%2Bi4FZoeu%2B8Seh2SI%2FPS1wHqfiq3oGUNIfw9CqYvhiP9VmyzUDL51cCp89W4KScElPqWUhAPkotnLxfdtTUTO0Ra4FM%2B8%2BGMhSZbmTA0znJN0sqVjZrOlycb5D4Zr6V18RkZ71qn5ROdcV0OxOGpDIbGV30FzqpyNWrCBLsd6&X-Amz-Signature=7cdf5601b20a759caf65109477fed130dca323aa13593cff52aa06fe423dd632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HIV7X5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJNA3oHnbNtkBKhXlnqEDoQlOgzzR1NbzOFjbwyvmoQIgTnouDIwmiFSKCiQjgzlSn%2FCQF0UcJp8VME6y3RSN7hIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD6jVHZRjmqfRZQDircA5pzJMPQOSUlMqeVXM6xHXx9qx1Z9FFlyhudfJ4i1jimDXRauS%2BAo7y8FMkrWCWWJ7H6U52IfTewQzMheE7nq1DcZkVKtDnCAi8WmC42xrmsTh9MivrUnNaz4arE0%2FFI70QNvCqXLvpVMjHZ%2F%2BcSLMqxh1aMDI1pLFRr19UNwgytH1h1kJUguyK8%2BsMZIn%2FL0t%2BX98Dd3AvXQ%2F1YytqpeUuZ6UZ7PrITcsriMOoa3Z%2B3M9ECooNYy0TB8TfSPqGgsddIZ1Nc0K8%2BhjrWIHsqwoQ8vkmDOzJjp6X9DmxgmPnWvINusowS3WmxYoSFO2SLZ%2FPpwOTdLH2Ggsgqz%2FMQtGM2bL21lQzCYHawwmcfo6wQn1qIemfSDScUC2zILO7R%2FSxYUZbT7ElBsutWTKXvTnCbz9xYEztxVyq%2BANexfWB93Hfa7DDykx%2BB1zvVZtjdpndUWXP%2B6RhocnqdFKA6xT0n6IgDTeK%2BnBcDCyYHe4hS%2BeHp14fxSSaMt4qGcxIX6MhsZvELGMpmiS%2FzScANV%2B716ep7qL%2B2vpoe50XN5xTQjdInFaaXVOaMzwr1CAsnafWPaiweW%2BvpRd9%2BIYvFfaJBIYovVQ3NwYAvWBwiJyPXCqfJeK1U7thVabnWMJ36i8MGOqUBV3NhpmrIWq4d89jv0bso9ENog6%2BMJsajR03pPJcWUQYiOeTpmZFF%2Bi4FZoeu%2B8Seh2SI%2FPS1wHqfiq3oGUNIfw9CqYvhiP9VmyzUDL51cCp89W4KScElPqWUhAPkotnLxfdtTUTO0Ra4FM%2B8%2BGMhSZbmTA0znJN0sqVjZrOlycb5D4Zr6V18RkZ71qn5ROdcV0OxOGpDIbGV30FzqpyNWrCBLsd6&X-Amz-Signature=7adca6823f64a074818dc234b475b6b4c7c20e781333626f5b5be4d19fcab9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HIV7X5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJNA3oHnbNtkBKhXlnqEDoQlOgzzR1NbzOFjbwyvmoQIgTnouDIwmiFSKCiQjgzlSn%2FCQF0UcJp8VME6y3RSN7hIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD6jVHZRjmqfRZQDircA5pzJMPQOSUlMqeVXM6xHXx9qx1Z9FFlyhudfJ4i1jimDXRauS%2BAo7y8FMkrWCWWJ7H6U52IfTewQzMheE7nq1DcZkVKtDnCAi8WmC42xrmsTh9MivrUnNaz4arE0%2FFI70QNvCqXLvpVMjHZ%2F%2BcSLMqxh1aMDI1pLFRr19UNwgytH1h1kJUguyK8%2BsMZIn%2FL0t%2BX98Dd3AvXQ%2F1YytqpeUuZ6UZ7PrITcsriMOoa3Z%2B3M9ECooNYy0TB8TfSPqGgsddIZ1Nc0K8%2BhjrWIHsqwoQ8vkmDOzJjp6X9DmxgmPnWvINusowS3WmxYoSFO2SLZ%2FPpwOTdLH2Ggsgqz%2FMQtGM2bL21lQzCYHawwmcfo6wQn1qIemfSDScUC2zILO7R%2FSxYUZbT7ElBsutWTKXvTnCbz9xYEztxVyq%2BANexfWB93Hfa7DDykx%2BB1zvVZtjdpndUWXP%2B6RhocnqdFKA6xT0n6IgDTeK%2BnBcDCyYHe4hS%2BeHp14fxSSaMt4qGcxIX6MhsZvELGMpmiS%2FzScANV%2B716ep7qL%2B2vpoe50XN5xTQjdInFaaXVOaMzwr1CAsnafWPaiweW%2BvpRd9%2BIYvFfaJBIYovVQ3NwYAvWBwiJyPXCqfJeK1U7thVabnWMJ36i8MGOqUBV3NhpmrIWq4d89jv0bso9ENog6%2BMJsajR03pPJcWUQYiOeTpmZFF%2Bi4FZoeu%2B8Seh2SI%2FPS1wHqfiq3oGUNIfw9CqYvhiP9VmyzUDL51cCp89W4KScElPqWUhAPkotnLxfdtTUTO0Ra4FM%2B8%2BGMhSZbmTA0znJN0sqVjZrOlycb5D4Zr6V18RkZ71qn5ROdcV0OxOGpDIbGV30FzqpyNWrCBLsd6&X-Amz-Signature=d8c4b0ba8600adb71868ee2aac42af4a115a1e8f94e8f31d89ecfc97f6165f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
