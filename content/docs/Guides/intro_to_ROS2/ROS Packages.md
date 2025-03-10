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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDI525RE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIF892DAeLTnCqLCy9dUNYezqTr9fIgggYkTKvFLgdmCrAiEA5zo4RPPkyUxSzSljyqNMGDls3le91DydnP7VrbeC72cqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTnvdgXMIWqYc5UOSrcA7KPABCt3walKgazl7QWDvSZu7y7hrn6PyO5cm4Df2u%2BAZExqkSusM7tK4I%2BtCDySxCIUPj7g3ta3RGYnRMAkwc434roX9Qx%2F3y4EmnyklA4tC1gg8oDC1NEblj6%2FLQrDdg4psIJQDb3JmwFRePvzhQmEEUoNCN6Na28WFRdvTpbPaYv5HVZ30iF1etXD17LM3bXx%2BWs7RYxl0b1vWLB27O1ZGVSPujfUvZWzio%2BkerNv1jP46YYDEX%2FMMEV99SkkGRjK8NyR5qSEPy79yGFZcNzQeGtFCn%2Bj9PpUCFhk5s%2FQ%2FpHBkLlk%2FECJ2BFz8FjJ2qecEYcHendvKV3AWJXaD6ApC5PSpCOfT9LWU5mfFTSSfC0JaoS%2BWmKgvUftJiVUNaOyBYkzJkSFaBQ3WaC3QNkCyLCLgyHLvsIa2XgM783XrPS334i3LhlysJJRkZdo5CDJFShzRoSvESWEfmd8RsAtADyDsL8TPh%2FTF%2BtuhByHeumgYi1SLpSXnI012JMrGUEeLTyMv90pS7gBVbgenddlnLj5syQQFEAfTYVd9NPQu3A69A6uIIZzrrf1emUoPDsQNh2w04hohYVV1fyQ1vSFIMb%2BcKyrx1furnhPPAr2LyzBQQK2ysTiN%2BNMPn5uL4GOqUBklFHRNUFeNqmrdzI2yehh%2FT3lkmxuXKMI8ibbpF5tdTom9dHq2QeI2WgNvw108oePUjtjQAPGYxnafKR6qlWRiDwxtd3ILqyaQ%2FedJrwsyLG6hOVGkzy8H7%2F%2B31PsNX%2F8qOJT8pYtJ3Jh8ILO1I9XUvr1sNwgpSMfxuRtq9ApUqy0GD1SBogkE2qkQ6bEv7wgkPqrzFIsCeB%2BDY5aerfsEvLyBln&X-Amz-Signature=7f5c33fcede19e2bb7ea67923d9255eea9cf740f5db3cc34af3e92b9bded4e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDI525RE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIF892DAeLTnCqLCy9dUNYezqTr9fIgggYkTKvFLgdmCrAiEA5zo4RPPkyUxSzSljyqNMGDls3le91DydnP7VrbeC72cqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTnvdgXMIWqYc5UOSrcA7KPABCt3walKgazl7QWDvSZu7y7hrn6PyO5cm4Df2u%2BAZExqkSusM7tK4I%2BtCDySxCIUPj7g3ta3RGYnRMAkwc434roX9Qx%2F3y4EmnyklA4tC1gg8oDC1NEblj6%2FLQrDdg4psIJQDb3JmwFRePvzhQmEEUoNCN6Na28WFRdvTpbPaYv5HVZ30iF1etXD17LM3bXx%2BWs7RYxl0b1vWLB27O1ZGVSPujfUvZWzio%2BkerNv1jP46YYDEX%2FMMEV99SkkGRjK8NyR5qSEPy79yGFZcNzQeGtFCn%2Bj9PpUCFhk5s%2FQ%2FpHBkLlk%2FECJ2BFz8FjJ2qecEYcHendvKV3AWJXaD6ApC5PSpCOfT9LWU5mfFTSSfC0JaoS%2BWmKgvUftJiVUNaOyBYkzJkSFaBQ3WaC3QNkCyLCLgyHLvsIa2XgM783XrPS334i3LhlysJJRkZdo5CDJFShzRoSvESWEfmd8RsAtADyDsL8TPh%2FTF%2BtuhByHeumgYi1SLpSXnI012JMrGUEeLTyMv90pS7gBVbgenddlnLj5syQQFEAfTYVd9NPQu3A69A6uIIZzrrf1emUoPDsQNh2w04hohYVV1fyQ1vSFIMb%2BcKyrx1furnhPPAr2LyzBQQK2ysTiN%2BNMPn5uL4GOqUBklFHRNUFeNqmrdzI2yehh%2FT3lkmxuXKMI8ibbpF5tdTom9dHq2QeI2WgNvw108oePUjtjQAPGYxnafKR6qlWRiDwxtd3ILqyaQ%2FedJrwsyLG6hOVGkzy8H7%2F%2B31PsNX%2F8qOJT8pYtJ3Jh8ILO1I9XUvr1sNwgpSMfxuRtq9ApUqy0GD1SBogkE2qkQ6bEv7wgkPqrzFIsCeB%2BDY5aerfsEvLyBln&X-Amz-Signature=3fe05d5e6d7d7ac0c8ab6fcdd29e1f0075b257b43b4be5b16644789076b44bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDI525RE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIF892DAeLTnCqLCy9dUNYezqTr9fIgggYkTKvFLgdmCrAiEA5zo4RPPkyUxSzSljyqNMGDls3le91DydnP7VrbeC72cqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTnvdgXMIWqYc5UOSrcA7KPABCt3walKgazl7QWDvSZu7y7hrn6PyO5cm4Df2u%2BAZExqkSusM7tK4I%2BtCDySxCIUPj7g3ta3RGYnRMAkwc434roX9Qx%2F3y4EmnyklA4tC1gg8oDC1NEblj6%2FLQrDdg4psIJQDb3JmwFRePvzhQmEEUoNCN6Na28WFRdvTpbPaYv5HVZ30iF1etXD17LM3bXx%2BWs7RYxl0b1vWLB27O1ZGVSPujfUvZWzio%2BkerNv1jP46YYDEX%2FMMEV99SkkGRjK8NyR5qSEPy79yGFZcNzQeGtFCn%2Bj9PpUCFhk5s%2FQ%2FpHBkLlk%2FECJ2BFz8FjJ2qecEYcHendvKV3AWJXaD6ApC5PSpCOfT9LWU5mfFTSSfC0JaoS%2BWmKgvUftJiVUNaOyBYkzJkSFaBQ3WaC3QNkCyLCLgyHLvsIa2XgM783XrPS334i3LhlysJJRkZdo5CDJFShzRoSvESWEfmd8RsAtADyDsL8TPh%2FTF%2BtuhByHeumgYi1SLpSXnI012JMrGUEeLTyMv90pS7gBVbgenddlnLj5syQQFEAfTYVd9NPQu3A69A6uIIZzrrf1emUoPDsQNh2w04hohYVV1fyQ1vSFIMb%2BcKyrx1furnhPPAr2LyzBQQK2ysTiN%2BNMPn5uL4GOqUBklFHRNUFeNqmrdzI2yehh%2FT3lkmxuXKMI8ibbpF5tdTom9dHq2QeI2WgNvw108oePUjtjQAPGYxnafKR6qlWRiDwxtd3ILqyaQ%2FedJrwsyLG6hOVGkzy8H7%2F%2B31PsNX%2F8qOJT8pYtJ3Jh8ILO1I9XUvr1sNwgpSMfxuRtq9ApUqy0GD1SBogkE2qkQ6bEv7wgkPqrzFIsCeB%2BDY5aerfsEvLyBln&X-Amz-Signature=3b7c8fecd24c1f75ecfc166880f7115e3e876ae96baa62d72c6fdadee4e8644f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDI525RE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIF892DAeLTnCqLCy9dUNYezqTr9fIgggYkTKvFLgdmCrAiEA5zo4RPPkyUxSzSljyqNMGDls3le91DydnP7VrbeC72cqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTnvdgXMIWqYc5UOSrcA7KPABCt3walKgazl7QWDvSZu7y7hrn6PyO5cm4Df2u%2BAZExqkSusM7tK4I%2BtCDySxCIUPj7g3ta3RGYnRMAkwc434roX9Qx%2F3y4EmnyklA4tC1gg8oDC1NEblj6%2FLQrDdg4psIJQDb3JmwFRePvzhQmEEUoNCN6Na28WFRdvTpbPaYv5HVZ30iF1etXD17LM3bXx%2BWs7RYxl0b1vWLB27O1ZGVSPujfUvZWzio%2BkerNv1jP46YYDEX%2FMMEV99SkkGRjK8NyR5qSEPy79yGFZcNzQeGtFCn%2Bj9PpUCFhk5s%2FQ%2FpHBkLlk%2FECJ2BFz8FjJ2qecEYcHendvKV3AWJXaD6ApC5PSpCOfT9LWU5mfFTSSfC0JaoS%2BWmKgvUftJiVUNaOyBYkzJkSFaBQ3WaC3QNkCyLCLgyHLvsIa2XgM783XrPS334i3LhlysJJRkZdo5CDJFShzRoSvESWEfmd8RsAtADyDsL8TPh%2FTF%2BtuhByHeumgYi1SLpSXnI012JMrGUEeLTyMv90pS7gBVbgenddlnLj5syQQFEAfTYVd9NPQu3A69A6uIIZzrrf1emUoPDsQNh2w04hohYVV1fyQ1vSFIMb%2BcKyrx1furnhPPAr2LyzBQQK2ysTiN%2BNMPn5uL4GOqUBklFHRNUFeNqmrdzI2yehh%2FT3lkmxuXKMI8ibbpF5tdTom9dHq2QeI2WgNvw108oePUjtjQAPGYxnafKR6qlWRiDwxtd3ILqyaQ%2FedJrwsyLG6hOVGkzy8H7%2F%2B31PsNX%2F8qOJT8pYtJ3Jh8ILO1I9XUvr1sNwgpSMfxuRtq9ApUqy0GD1SBogkE2qkQ6bEv7wgkPqrzFIsCeB%2BDY5aerfsEvLyBln&X-Amz-Signature=0a10393a2f7b532657ebb4e0c4603fbe78adaac42d4cc4bea556ed7d2425a37f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDI525RE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIF892DAeLTnCqLCy9dUNYezqTr9fIgggYkTKvFLgdmCrAiEA5zo4RPPkyUxSzSljyqNMGDls3le91DydnP7VrbeC72cqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTnvdgXMIWqYc5UOSrcA7KPABCt3walKgazl7QWDvSZu7y7hrn6PyO5cm4Df2u%2BAZExqkSusM7tK4I%2BtCDySxCIUPj7g3ta3RGYnRMAkwc434roX9Qx%2F3y4EmnyklA4tC1gg8oDC1NEblj6%2FLQrDdg4psIJQDb3JmwFRePvzhQmEEUoNCN6Na28WFRdvTpbPaYv5HVZ30iF1etXD17LM3bXx%2BWs7RYxl0b1vWLB27O1ZGVSPujfUvZWzio%2BkerNv1jP46YYDEX%2FMMEV99SkkGRjK8NyR5qSEPy79yGFZcNzQeGtFCn%2Bj9PpUCFhk5s%2FQ%2FpHBkLlk%2FECJ2BFz8FjJ2qecEYcHendvKV3AWJXaD6ApC5PSpCOfT9LWU5mfFTSSfC0JaoS%2BWmKgvUftJiVUNaOyBYkzJkSFaBQ3WaC3QNkCyLCLgyHLvsIa2XgM783XrPS334i3LhlysJJRkZdo5CDJFShzRoSvESWEfmd8RsAtADyDsL8TPh%2FTF%2BtuhByHeumgYi1SLpSXnI012JMrGUEeLTyMv90pS7gBVbgenddlnLj5syQQFEAfTYVd9NPQu3A69A6uIIZzrrf1emUoPDsQNh2w04hohYVV1fyQ1vSFIMb%2BcKyrx1furnhPPAr2LyzBQQK2ysTiN%2BNMPn5uL4GOqUBklFHRNUFeNqmrdzI2yehh%2FT3lkmxuXKMI8ibbpF5tdTom9dHq2QeI2WgNvw108oePUjtjQAPGYxnafKR6qlWRiDwxtd3ILqyaQ%2FedJrwsyLG6hOVGkzy8H7%2F%2B31PsNX%2F8qOJT8pYtJ3Jh8ILO1I9XUvr1sNwgpSMfxuRtq9ApUqy0GD1SBogkE2qkQ6bEv7wgkPqrzFIsCeB%2BDY5aerfsEvLyBln&X-Amz-Signature=f9e885a907084ce89ba98305e544ece453d10b81df62050aedf989a52b514f72&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDI525RE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIF892DAeLTnCqLCy9dUNYezqTr9fIgggYkTKvFLgdmCrAiEA5zo4RPPkyUxSzSljyqNMGDls3le91DydnP7VrbeC72cqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTnvdgXMIWqYc5UOSrcA7KPABCt3walKgazl7QWDvSZu7y7hrn6PyO5cm4Df2u%2BAZExqkSusM7tK4I%2BtCDySxCIUPj7g3ta3RGYnRMAkwc434roX9Qx%2F3y4EmnyklA4tC1gg8oDC1NEblj6%2FLQrDdg4psIJQDb3JmwFRePvzhQmEEUoNCN6Na28WFRdvTpbPaYv5HVZ30iF1etXD17LM3bXx%2BWs7RYxl0b1vWLB27O1ZGVSPujfUvZWzio%2BkerNv1jP46YYDEX%2FMMEV99SkkGRjK8NyR5qSEPy79yGFZcNzQeGtFCn%2Bj9PpUCFhk5s%2FQ%2FpHBkLlk%2FECJ2BFz8FjJ2qecEYcHendvKV3AWJXaD6ApC5PSpCOfT9LWU5mfFTSSfC0JaoS%2BWmKgvUftJiVUNaOyBYkzJkSFaBQ3WaC3QNkCyLCLgyHLvsIa2XgM783XrPS334i3LhlysJJRkZdo5CDJFShzRoSvESWEfmd8RsAtADyDsL8TPh%2FTF%2BtuhByHeumgYi1SLpSXnI012JMrGUEeLTyMv90pS7gBVbgenddlnLj5syQQFEAfTYVd9NPQu3A69A6uIIZzrrf1emUoPDsQNh2w04hohYVV1fyQ1vSFIMb%2BcKyrx1furnhPPAr2LyzBQQK2ysTiN%2BNMPn5uL4GOqUBklFHRNUFeNqmrdzI2yehh%2FT3lkmxuXKMI8ibbpF5tdTom9dHq2QeI2WgNvw108oePUjtjQAPGYxnafKR6qlWRiDwxtd3ILqyaQ%2FedJrwsyLG6hOVGkzy8H7%2F%2B31PsNX%2F8qOJT8pYtJ3Jh8ILO1I9XUvr1sNwgpSMfxuRtq9ApUqy0GD1SBogkE2qkQ6bEv7wgkPqrzFIsCeB%2BDY5aerfsEvLyBln&X-Amz-Signature=33ed08e7ea41d3bed35c89a7cc700e3c2471b400129d2a8d503321818eb79940&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDI525RE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIF892DAeLTnCqLCy9dUNYezqTr9fIgggYkTKvFLgdmCrAiEA5zo4RPPkyUxSzSljyqNMGDls3le91DydnP7VrbeC72cqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTnvdgXMIWqYc5UOSrcA7KPABCt3walKgazl7QWDvSZu7y7hrn6PyO5cm4Df2u%2BAZExqkSusM7tK4I%2BtCDySxCIUPj7g3ta3RGYnRMAkwc434roX9Qx%2F3y4EmnyklA4tC1gg8oDC1NEblj6%2FLQrDdg4psIJQDb3JmwFRePvzhQmEEUoNCN6Na28WFRdvTpbPaYv5HVZ30iF1etXD17LM3bXx%2BWs7RYxl0b1vWLB27O1ZGVSPujfUvZWzio%2BkerNv1jP46YYDEX%2FMMEV99SkkGRjK8NyR5qSEPy79yGFZcNzQeGtFCn%2Bj9PpUCFhk5s%2FQ%2FpHBkLlk%2FECJ2BFz8FjJ2qecEYcHendvKV3AWJXaD6ApC5PSpCOfT9LWU5mfFTSSfC0JaoS%2BWmKgvUftJiVUNaOyBYkzJkSFaBQ3WaC3QNkCyLCLgyHLvsIa2XgM783XrPS334i3LhlysJJRkZdo5CDJFShzRoSvESWEfmd8RsAtADyDsL8TPh%2FTF%2BtuhByHeumgYi1SLpSXnI012JMrGUEeLTyMv90pS7gBVbgenddlnLj5syQQFEAfTYVd9NPQu3A69A6uIIZzrrf1emUoPDsQNh2w04hohYVV1fyQ1vSFIMb%2BcKyrx1furnhPPAr2LyzBQQK2ysTiN%2BNMPn5uL4GOqUBklFHRNUFeNqmrdzI2yehh%2FT3lkmxuXKMI8ibbpF5tdTom9dHq2QeI2WgNvw108oePUjtjQAPGYxnafKR6qlWRiDwxtd3ILqyaQ%2FedJrwsyLG6hOVGkzy8H7%2F%2B31PsNX%2F8qOJT8pYtJ3Jh8ILO1I9XUvr1sNwgpSMfxuRtq9ApUqy0GD1SBogkE2qkQ6bEv7wgkPqrzFIsCeB%2BDY5aerfsEvLyBln&X-Amz-Signature=edae1adbb91782a2cd47555a65a3e05f0dec7fa27077083f3507f13f896ba8a7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
