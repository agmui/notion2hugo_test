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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGKYBO5E%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyCtXzd%2FzRbY7%2FpCOBzYtFx%2Be3qc2IrFaWqvOvmSFDVAiEAyOzvTnLtaOwo%2FE%2FPyNuKG1R68IofphlaITWoy23WH1kqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHds4IH1MMvVPAoo0ircA11ya8tgxvY9dRPmdTOCkXxBKaM8kjy3SzHX86Nb0WDVt8dNh0ShAvf0cpgVzCJjSmnVhFMOlJnK27L0f7gN3CyJjrXApmkbX1A90B5htPnSR1aCTUr43zbt48grwCmBM6DdRqSgIdoFHQE59NHN1SuwEKoHOydIupiS6YCDnNTBoOgbelspSjb8vvCwViaFvjo%2Fy7R8WkKKpTC0kbrTzcasDDDVt%2Fim8n7ka5%2B6rDjv95fT7HAQB6xI%2BMQP6ZtA%2B0WYmchX%2Fb5OA84C9LqLLt%2BY%2FOTFysPTYO%2FIWHkO8KFsGhIvjVJ7LLFKnwv%2FhaosnKhJD3lODOkDmw%2FxiQn8XCsL4mVJpB0Be7UhAytGlqarn1PTc9styPTYnkRzLjcklipZ4Tv2H8sQd9Gn%2BIIhj2IZ0UC6k2NYtWsZqrh8IzOp6hEPlclugTmQkjM%2B6l5YUtm50qhMFsAQKFQuMa7x%2FFCbvaR6nQg5VV3sVt3jra5DuNDV6yWLNxZR%2BCHVjnvmCFaDMgyv%2FnIyUy8xqhy1iDnX7Z3KPL7qGa4YgbqJ0nV7kOQ6YYdYyMxVc7luutaSTpVhXCq6tqNm2yKeih%2BzwEbe9pGs8EsxFRws%2FMeWpU3mfxynuoJpSnXs7RXoMKf8jMAGOqUBxhHojgdKFRNfE0wexc08qoVkguv8FGNbxnWsBN37BtTx7ukY0xhgeNuwJ0uWaqsObnRxem6R2Q7NCDOwZ1pFRZcnNW1241YHcLNygt6BLnRhOPpUs2u8wSzZm6S7lT3ClYleFtmo%2Bs66MGMYPQVl5dT1IFxKIRPNXaRwj%2F9e2qR%2FyPF9%2BEpBX%2FpMXZAO3XWtlgiCQL3FKsaNlJeWb%2B6Uar35LVRO&X-Amz-Signature=5290a195f15b5eb4bc3ac264864fe0c2d619d1895b6f68c3231f375f5da0d21b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGKYBO5E%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyCtXzd%2FzRbY7%2FpCOBzYtFx%2Be3qc2IrFaWqvOvmSFDVAiEAyOzvTnLtaOwo%2FE%2FPyNuKG1R68IofphlaITWoy23WH1kqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHds4IH1MMvVPAoo0ircA11ya8tgxvY9dRPmdTOCkXxBKaM8kjy3SzHX86Nb0WDVt8dNh0ShAvf0cpgVzCJjSmnVhFMOlJnK27L0f7gN3CyJjrXApmkbX1A90B5htPnSR1aCTUr43zbt48grwCmBM6DdRqSgIdoFHQE59NHN1SuwEKoHOydIupiS6YCDnNTBoOgbelspSjb8vvCwViaFvjo%2Fy7R8WkKKpTC0kbrTzcasDDDVt%2Fim8n7ka5%2B6rDjv95fT7HAQB6xI%2BMQP6ZtA%2B0WYmchX%2Fb5OA84C9LqLLt%2BY%2FOTFysPTYO%2FIWHkO8KFsGhIvjVJ7LLFKnwv%2FhaosnKhJD3lODOkDmw%2FxiQn8XCsL4mVJpB0Be7UhAytGlqarn1PTc9styPTYnkRzLjcklipZ4Tv2H8sQd9Gn%2BIIhj2IZ0UC6k2NYtWsZqrh8IzOp6hEPlclugTmQkjM%2B6l5YUtm50qhMFsAQKFQuMa7x%2FFCbvaR6nQg5VV3sVt3jra5DuNDV6yWLNxZR%2BCHVjnvmCFaDMgyv%2FnIyUy8xqhy1iDnX7Z3KPL7qGa4YgbqJ0nV7kOQ6YYdYyMxVc7luutaSTpVhXCq6tqNm2yKeih%2BzwEbe9pGs8EsxFRws%2FMeWpU3mfxynuoJpSnXs7RXoMKf8jMAGOqUBxhHojgdKFRNfE0wexc08qoVkguv8FGNbxnWsBN37BtTx7ukY0xhgeNuwJ0uWaqsObnRxem6R2Q7NCDOwZ1pFRZcnNW1241YHcLNygt6BLnRhOPpUs2u8wSzZm6S7lT3ClYleFtmo%2Bs66MGMYPQVl5dT1IFxKIRPNXaRwj%2F9e2qR%2FyPF9%2BEpBX%2FpMXZAO3XWtlgiCQL3FKsaNlJeWb%2B6Uar35LVRO&X-Amz-Signature=c581aa1a2a54427166b28a444be5333c4177f8f4eec153122d15321d2a66f821&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGKYBO5E%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyCtXzd%2FzRbY7%2FpCOBzYtFx%2Be3qc2IrFaWqvOvmSFDVAiEAyOzvTnLtaOwo%2FE%2FPyNuKG1R68IofphlaITWoy23WH1kqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHds4IH1MMvVPAoo0ircA11ya8tgxvY9dRPmdTOCkXxBKaM8kjy3SzHX86Nb0WDVt8dNh0ShAvf0cpgVzCJjSmnVhFMOlJnK27L0f7gN3CyJjrXApmkbX1A90B5htPnSR1aCTUr43zbt48grwCmBM6DdRqSgIdoFHQE59NHN1SuwEKoHOydIupiS6YCDnNTBoOgbelspSjb8vvCwViaFvjo%2Fy7R8WkKKpTC0kbrTzcasDDDVt%2Fim8n7ka5%2B6rDjv95fT7HAQB6xI%2BMQP6ZtA%2B0WYmchX%2Fb5OA84C9LqLLt%2BY%2FOTFysPTYO%2FIWHkO8KFsGhIvjVJ7LLFKnwv%2FhaosnKhJD3lODOkDmw%2FxiQn8XCsL4mVJpB0Be7UhAytGlqarn1PTc9styPTYnkRzLjcklipZ4Tv2H8sQd9Gn%2BIIhj2IZ0UC6k2NYtWsZqrh8IzOp6hEPlclugTmQkjM%2B6l5YUtm50qhMFsAQKFQuMa7x%2FFCbvaR6nQg5VV3sVt3jra5DuNDV6yWLNxZR%2BCHVjnvmCFaDMgyv%2FnIyUy8xqhy1iDnX7Z3KPL7qGa4YgbqJ0nV7kOQ6YYdYyMxVc7luutaSTpVhXCq6tqNm2yKeih%2BzwEbe9pGs8EsxFRws%2FMeWpU3mfxynuoJpSnXs7RXoMKf8jMAGOqUBxhHojgdKFRNfE0wexc08qoVkguv8FGNbxnWsBN37BtTx7ukY0xhgeNuwJ0uWaqsObnRxem6R2Q7NCDOwZ1pFRZcnNW1241YHcLNygt6BLnRhOPpUs2u8wSzZm6S7lT3ClYleFtmo%2Bs66MGMYPQVl5dT1IFxKIRPNXaRwj%2F9e2qR%2FyPF9%2BEpBX%2FpMXZAO3XWtlgiCQL3FKsaNlJeWb%2B6Uar35LVRO&X-Amz-Signature=2cd1294993ce95960fdda52d7b6c2af3fc1b7fc6690aaddca90b85585727b9dd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGKYBO5E%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyCtXzd%2FzRbY7%2FpCOBzYtFx%2Be3qc2IrFaWqvOvmSFDVAiEAyOzvTnLtaOwo%2FE%2FPyNuKG1R68IofphlaITWoy23WH1kqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHds4IH1MMvVPAoo0ircA11ya8tgxvY9dRPmdTOCkXxBKaM8kjy3SzHX86Nb0WDVt8dNh0ShAvf0cpgVzCJjSmnVhFMOlJnK27L0f7gN3CyJjrXApmkbX1A90B5htPnSR1aCTUr43zbt48grwCmBM6DdRqSgIdoFHQE59NHN1SuwEKoHOydIupiS6YCDnNTBoOgbelspSjb8vvCwViaFvjo%2Fy7R8WkKKpTC0kbrTzcasDDDVt%2Fim8n7ka5%2B6rDjv95fT7HAQB6xI%2BMQP6ZtA%2B0WYmchX%2Fb5OA84C9LqLLt%2BY%2FOTFysPTYO%2FIWHkO8KFsGhIvjVJ7LLFKnwv%2FhaosnKhJD3lODOkDmw%2FxiQn8XCsL4mVJpB0Be7UhAytGlqarn1PTc9styPTYnkRzLjcklipZ4Tv2H8sQd9Gn%2BIIhj2IZ0UC6k2NYtWsZqrh8IzOp6hEPlclugTmQkjM%2B6l5YUtm50qhMFsAQKFQuMa7x%2FFCbvaR6nQg5VV3sVt3jra5DuNDV6yWLNxZR%2BCHVjnvmCFaDMgyv%2FnIyUy8xqhy1iDnX7Z3KPL7qGa4YgbqJ0nV7kOQ6YYdYyMxVc7luutaSTpVhXCq6tqNm2yKeih%2BzwEbe9pGs8EsxFRws%2FMeWpU3mfxynuoJpSnXs7RXoMKf8jMAGOqUBxhHojgdKFRNfE0wexc08qoVkguv8FGNbxnWsBN37BtTx7ukY0xhgeNuwJ0uWaqsObnRxem6R2Q7NCDOwZ1pFRZcnNW1241YHcLNygt6BLnRhOPpUs2u8wSzZm6S7lT3ClYleFtmo%2Bs66MGMYPQVl5dT1IFxKIRPNXaRwj%2F9e2qR%2FyPF9%2BEpBX%2FpMXZAO3XWtlgiCQL3FKsaNlJeWb%2B6Uar35LVRO&X-Amz-Signature=429217d273cd4589f8901634c836e97795efb390fe22db0b99d0afc1b7e3bc31&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGKYBO5E%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyCtXzd%2FzRbY7%2FpCOBzYtFx%2Be3qc2IrFaWqvOvmSFDVAiEAyOzvTnLtaOwo%2FE%2FPyNuKG1R68IofphlaITWoy23WH1kqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHds4IH1MMvVPAoo0ircA11ya8tgxvY9dRPmdTOCkXxBKaM8kjy3SzHX86Nb0WDVt8dNh0ShAvf0cpgVzCJjSmnVhFMOlJnK27L0f7gN3CyJjrXApmkbX1A90B5htPnSR1aCTUr43zbt48grwCmBM6DdRqSgIdoFHQE59NHN1SuwEKoHOydIupiS6YCDnNTBoOgbelspSjb8vvCwViaFvjo%2Fy7R8WkKKpTC0kbrTzcasDDDVt%2Fim8n7ka5%2B6rDjv95fT7HAQB6xI%2BMQP6ZtA%2B0WYmchX%2Fb5OA84C9LqLLt%2BY%2FOTFysPTYO%2FIWHkO8KFsGhIvjVJ7LLFKnwv%2FhaosnKhJD3lODOkDmw%2FxiQn8XCsL4mVJpB0Be7UhAytGlqarn1PTc9styPTYnkRzLjcklipZ4Tv2H8sQd9Gn%2BIIhj2IZ0UC6k2NYtWsZqrh8IzOp6hEPlclugTmQkjM%2B6l5YUtm50qhMFsAQKFQuMa7x%2FFCbvaR6nQg5VV3sVt3jra5DuNDV6yWLNxZR%2BCHVjnvmCFaDMgyv%2FnIyUy8xqhy1iDnX7Z3KPL7qGa4YgbqJ0nV7kOQ6YYdYyMxVc7luutaSTpVhXCq6tqNm2yKeih%2BzwEbe9pGs8EsxFRws%2FMeWpU3mfxynuoJpSnXs7RXoMKf8jMAGOqUBxhHojgdKFRNfE0wexc08qoVkguv8FGNbxnWsBN37BtTx7ukY0xhgeNuwJ0uWaqsObnRxem6R2Q7NCDOwZ1pFRZcnNW1241YHcLNygt6BLnRhOPpUs2u8wSzZm6S7lT3ClYleFtmo%2Bs66MGMYPQVl5dT1IFxKIRPNXaRwj%2F9e2qR%2FyPF9%2BEpBX%2FpMXZAO3XWtlgiCQL3FKsaNlJeWb%2B6Uar35LVRO&X-Amz-Signature=fd736ba582302cc6b99bf1688b8a56434524703fcc61302f0ca654a0496adf6d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGKYBO5E%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyCtXzd%2FzRbY7%2FpCOBzYtFx%2Be3qc2IrFaWqvOvmSFDVAiEAyOzvTnLtaOwo%2FE%2FPyNuKG1R68IofphlaITWoy23WH1kqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHds4IH1MMvVPAoo0ircA11ya8tgxvY9dRPmdTOCkXxBKaM8kjy3SzHX86Nb0WDVt8dNh0ShAvf0cpgVzCJjSmnVhFMOlJnK27L0f7gN3CyJjrXApmkbX1A90B5htPnSR1aCTUr43zbt48grwCmBM6DdRqSgIdoFHQE59NHN1SuwEKoHOydIupiS6YCDnNTBoOgbelspSjb8vvCwViaFvjo%2Fy7R8WkKKpTC0kbrTzcasDDDVt%2Fim8n7ka5%2B6rDjv95fT7HAQB6xI%2BMQP6ZtA%2B0WYmchX%2Fb5OA84C9LqLLt%2BY%2FOTFysPTYO%2FIWHkO8KFsGhIvjVJ7LLFKnwv%2FhaosnKhJD3lODOkDmw%2FxiQn8XCsL4mVJpB0Be7UhAytGlqarn1PTc9styPTYnkRzLjcklipZ4Tv2H8sQd9Gn%2BIIhj2IZ0UC6k2NYtWsZqrh8IzOp6hEPlclugTmQkjM%2B6l5YUtm50qhMFsAQKFQuMa7x%2FFCbvaR6nQg5VV3sVt3jra5DuNDV6yWLNxZR%2BCHVjnvmCFaDMgyv%2FnIyUy8xqhy1iDnX7Z3KPL7qGa4YgbqJ0nV7kOQ6YYdYyMxVc7luutaSTpVhXCq6tqNm2yKeih%2BzwEbe9pGs8EsxFRws%2FMeWpU3mfxynuoJpSnXs7RXoMKf8jMAGOqUBxhHojgdKFRNfE0wexc08qoVkguv8FGNbxnWsBN37BtTx7ukY0xhgeNuwJ0uWaqsObnRxem6R2Q7NCDOwZ1pFRZcnNW1241YHcLNygt6BLnRhOPpUs2u8wSzZm6S7lT3ClYleFtmo%2Bs66MGMYPQVl5dT1IFxKIRPNXaRwj%2F9e2qR%2FyPF9%2BEpBX%2FpMXZAO3XWtlgiCQL3FKsaNlJeWb%2B6Uar35LVRO&X-Amz-Signature=679e3a4cfc42c73c4d9bd1296902eb638fb46f751895dd8ff4f9d32900b849e7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGKYBO5E%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyCtXzd%2FzRbY7%2FpCOBzYtFx%2Be3qc2IrFaWqvOvmSFDVAiEAyOzvTnLtaOwo%2FE%2FPyNuKG1R68IofphlaITWoy23WH1kqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHds4IH1MMvVPAoo0ircA11ya8tgxvY9dRPmdTOCkXxBKaM8kjy3SzHX86Nb0WDVt8dNh0ShAvf0cpgVzCJjSmnVhFMOlJnK27L0f7gN3CyJjrXApmkbX1A90B5htPnSR1aCTUr43zbt48grwCmBM6DdRqSgIdoFHQE59NHN1SuwEKoHOydIupiS6YCDnNTBoOgbelspSjb8vvCwViaFvjo%2Fy7R8WkKKpTC0kbrTzcasDDDVt%2Fim8n7ka5%2B6rDjv95fT7HAQB6xI%2BMQP6ZtA%2B0WYmchX%2Fb5OA84C9LqLLt%2BY%2FOTFysPTYO%2FIWHkO8KFsGhIvjVJ7LLFKnwv%2FhaosnKhJD3lODOkDmw%2FxiQn8XCsL4mVJpB0Be7UhAytGlqarn1PTc9styPTYnkRzLjcklipZ4Tv2H8sQd9Gn%2BIIhj2IZ0UC6k2NYtWsZqrh8IzOp6hEPlclugTmQkjM%2B6l5YUtm50qhMFsAQKFQuMa7x%2FFCbvaR6nQg5VV3sVt3jra5DuNDV6yWLNxZR%2BCHVjnvmCFaDMgyv%2FnIyUy8xqhy1iDnX7Z3KPL7qGa4YgbqJ0nV7kOQ6YYdYyMxVc7luutaSTpVhXCq6tqNm2yKeih%2BzwEbe9pGs8EsxFRws%2FMeWpU3mfxynuoJpSnXs7RXoMKf8jMAGOqUBxhHojgdKFRNfE0wexc08qoVkguv8FGNbxnWsBN37BtTx7ukY0xhgeNuwJ0uWaqsObnRxem6R2Q7NCDOwZ1pFRZcnNW1241YHcLNygt6BLnRhOPpUs2u8wSzZm6S7lT3ClYleFtmo%2Bs66MGMYPQVl5dT1IFxKIRPNXaRwj%2F9e2qR%2FyPF9%2BEpBX%2FpMXZAO3XWtlgiCQL3FKsaNlJeWb%2B6Uar35LVRO&X-Amz-Signature=9bce1784f197210ed6400bf22652d128bf274488d22420d30f28f3fc66133fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
