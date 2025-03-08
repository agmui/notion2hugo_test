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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYXLTV7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGuymBqVcgjyCSYz4ejUvHKl2aXGEcbRrLoOjpPj%2FTDYAiAucQLNNDFgGN%2FdKusaFXaHyuYe2NYDgy2gcyBe1T5JvCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgVnCgKPclCeqdXUFKtwD0Om98hHomYeXScTamKu3ZmnkjV1uWD0jZfp9UMBaQ0oB5SEPcSmK4Yh%2BhanP0c8wGEpR85wE2%2FeltZrtY4MNHlsn4HXiBbrpfenbxK2M%2FSI%2B%2B7pMelASMWSy4csfgcQumbwV6o0IlLUl8jmgolN3W2TEMBgzT%2BmV5S59hWv22iN9Q2H2O8Gs8vAijf8MTUmhwIlrsqSXDKr6ydEwJYSubjH%2ButiS7qyuXHnXdKMCeK1PWXY%2FkUp9ZlKCki3t6wmerP74dbnuiF8j84cXuuOw6bKg%2FWu0iUWePBhfywCN0LTSxurV9kV3tmwRGc5U96gB%2B3dccL%2B0luhyTBFm%2BGMbAHxnLx5uoj%2BkQ6BwncZv2%2Fz04B7%2Fh8uWGQ7I%2BXI5VsdvLFkoipmZSGumlsEMY602xpsM6JjsbkW6lF8Jj5agcoXOPqf%2BzJ3pChpH4m7WcvkokkmLsLWQpEZEvPiS%2Fe%2ByZ%2FZxCprHhoA2P1a1TQ792xWTbGbMVQrenVWUE6POp5Jn9aEIMalooh24Es9bz5decig0dAB4xINOM862eCt4LkKcGK60z6lspG2jL63nVZUwhnoCFo1EVR%2BXLjvZ58G9vvVTtD2tGpj4w4YwZLLCDtqJ3aHxWaZDqnk%2BNtEwgISxvgY6pgEuEOzMk15T6ZRWCsJANvfl5wIpD5sXt0MROqV075vjwdr9dbZ%2BuwRCeD%2B4s40rVbMLodL%2FVrPB3qecCjRUCs1ckHPwYPbpBsrBupRDu2A6Fw8a7f%2B3nfM7M%2FZEstebfso%2FOlnXK0tnYd%2Bxdt3NIIr7fWopVRrN9oKwvPfSvr9y8oStYb2dNU6S8rJjOG7nl2ZDTMyP1Q5rDyctXa%2BL%2BNAx85XbPplg&X-Amz-Signature=1bbb6531c3c18f66d4f31ad2b90f1a8499bb90efd9ac22e22b1dc0363f1125db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYXLTV7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGuymBqVcgjyCSYz4ejUvHKl2aXGEcbRrLoOjpPj%2FTDYAiAucQLNNDFgGN%2FdKusaFXaHyuYe2NYDgy2gcyBe1T5JvCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgVnCgKPclCeqdXUFKtwD0Om98hHomYeXScTamKu3ZmnkjV1uWD0jZfp9UMBaQ0oB5SEPcSmK4Yh%2BhanP0c8wGEpR85wE2%2FeltZrtY4MNHlsn4HXiBbrpfenbxK2M%2FSI%2B%2B7pMelASMWSy4csfgcQumbwV6o0IlLUl8jmgolN3W2TEMBgzT%2BmV5S59hWv22iN9Q2H2O8Gs8vAijf8MTUmhwIlrsqSXDKr6ydEwJYSubjH%2ButiS7qyuXHnXdKMCeK1PWXY%2FkUp9ZlKCki3t6wmerP74dbnuiF8j84cXuuOw6bKg%2FWu0iUWePBhfywCN0LTSxurV9kV3tmwRGc5U96gB%2B3dccL%2B0luhyTBFm%2BGMbAHxnLx5uoj%2BkQ6BwncZv2%2Fz04B7%2Fh8uWGQ7I%2BXI5VsdvLFkoipmZSGumlsEMY602xpsM6JjsbkW6lF8Jj5agcoXOPqf%2BzJ3pChpH4m7WcvkokkmLsLWQpEZEvPiS%2Fe%2ByZ%2FZxCprHhoA2P1a1TQ792xWTbGbMVQrenVWUE6POp5Jn9aEIMalooh24Es9bz5decig0dAB4xINOM862eCt4LkKcGK60z6lspG2jL63nVZUwhnoCFo1EVR%2BXLjvZ58G9vvVTtD2tGpj4w4YwZLLCDtqJ3aHxWaZDqnk%2BNtEwgISxvgY6pgEuEOzMk15T6ZRWCsJANvfl5wIpD5sXt0MROqV075vjwdr9dbZ%2BuwRCeD%2B4s40rVbMLodL%2FVrPB3qecCjRUCs1ckHPwYPbpBsrBupRDu2A6Fw8a7f%2B3nfM7M%2FZEstebfso%2FOlnXK0tnYd%2Bxdt3NIIr7fWopVRrN9oKwvPfSvr9y8oStYb2dNU6S8rJjOG7nl2ZDTMyP1Q5rDyctXa%2BL%2BNAx85XbPplg&X-Amz-Signature=10b07059e1d6307ba62bb538699e1dede355f0480912d073dcedc3db73536703&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYXLTV7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGuymBqVcgjyCSYz4ejUvHKl2aXGEcbRrLoOjpPj%2FTDYAiAucQLNNDFgGN%2FdKusaFXaHyuYe2NYDgy2gcyBe1T5JvCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgVnCgKPclCeqdXUFKtwD0Om98hHomYeXScTamKu3ZmnkjV1uWD0jZfp9UMBaQ0oB5SEPcSmK4Yh%2BhanP0c8wGEpR85wE2%2FeltZrtY4MNHlsn4HXiBbrpfenbxK2M%2FSI%2B%2B7pMelASMWSy4csfgcQumbwV6o0IlLUl8jmgolN3W2TEMBgzT%2BmV5S59hWv22iN9Q2H2O8Gs8vAijf8MTUmhwIlrsqSXDKr6ydEwJYSubjH%2ButiS7qyuXHnXdKMCeK1PWXY%2FkUp9ZlKCki3t6wmerP74dbnuiF8j84cXuuOw6bKg%2FWu0iUWePBhfywCN0LTSxurV9kV3tmwRGc5U96gB%2B3dccL%2B0luhyTBFm%2BGMbAHxnLx5uoj%2BkQ6BwncZv2%2Fz04B7%2Fh8uWGQ7I%2BXI5VsdvLFkoipmZSGumlsEMY602xpsM6JjsbkW6lF8Jj5agcoXOPqf%2BzJ3pChpH4m7WcvkokkmLsLWQpEZEvPiS%2Fe%2ByZ%2FZxCprHhoA2P1a1TQ792xWTbGbMVQrenVWUE6POp5Jn9aEIMalooh24Es9bz5decig0dAB4xINOM862eCt4LkKcGK60z6lspG2jL63nVZUwhnoCFo1EVR%2BXLjvZ58G9vvVTtD2tGpj4w4YwZLLCDtqJ3aHxWaZDqnk%2BNtEwgISxvgY6pgEuEOzMk15T6ZRWCsJANvfl5wIpD5sXt0MROqV075vjwdr9dbZ%2BuwRCeD%2B4s40rVbMLodL%2FVrPB3qecCjRUCs1ckHPwYPbpBsrBupRDu2A6Fw8a7f%2B3nfM7M%2FZEstebfso%2FOlnXK0tnYd%2Bxdt3NIIr7fWopVRrN9oKwvPfSvr9y8oStYb2dNU6S8rJjOG7nl2ZDTMyP1Q5rDyctXa%2BL%2BNAx85XbPplg&X-Amz-Signature=32ee75ff6bf7ac09d25fcfd8afda7d7473a7311798109d44fa8940129573dd97&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYXLTV7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGuymBqVcgjyCSYz4ejUvHKl2aXGEcbRrLoOjpPj%2FTDYAiAucQLNNDFgGN%2FdKusaFXaHyuYe2NYDgy2gcyBe1T5JvCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgVnCgKPclCeqdXUFKtwD0Om98hHomYeXScTamKu3ZmnkjV1uWD0jZfp9UMBaQ0oB5SEPcSmK4Yh%2BhanP0c8wGEpR85wE2%2FeltZrtY4MNHlsn4HXiBbrpfenbxK2M%2FSI%2B%2B7pMelASMWSy4csfgcQumbwV6o0IlLUl8jmgolN3W2TEMBgzT%2BmV5S59hWv22iN9Q2H2O8Gs8vAijf8MTUmhwIlrsqSXDKr6ydEwJYSubjH%2ButiS7qyuXHnXdKMCeK1PWXY%2FkUp9ZlKCki3t6wmerP74dbnuiF8j84cXuuOw6bKg%2FWu0iUWePBhfywCN0LTSxurV9kV3tmwRGc5U96gB%2B3dccL%2B0luhyTBFm%2BGMbAHxnLx5uoj%2BkQ6BwncZv2%2Fz04B7%2Fh8uWGQ7I%2BXI5VsdvLFkoipmZSGumlsEMY602xpsM6JjsbkW6lF8Jj5agcoXOPqf%2BzJ3pChpH4m7WcvkokkmLsLWQpEZEvPiS%2Fe%2ByZ%2FZxCprHhoA2P1a1TQ792xWTbGbMVQrenVWUE6POp5Jn9aEIMalooh24Es9bz5decig0dAB4xINOM862eCt4LkKcGK60z6lspG2jL63nVZUwhnoCFo1EVR%2BXLjvZ58G9vvVTtD2tGpj4w4YwZLLCDtqJ3aHxWaZDqnk%2BNtEwgISxvgY6pgEuEOzMk15T6ZRWCsJANvfl5wIpD5sXt0MROqV075vjwdr9dbZ%2BuwRCeD%2B4s40rVbMLodL%2FVrPB3qecCjRUCs1ckHPwYPbpBsrBupRDu2A6Fw8a7f%2B3nfM7M%2FZEstebfso%2FOlnXK0tnYd%2Bxdt3NIIr7fWopVRrN9oKwvPfSvr9y8oStYb2dNU6S8rJjOG7nl2ZDTMyP1Q5rDyctXa%2BL%2BNAx85XbPplg&X-Amz-Signature=c6e6df53937ca1da229c77ac509fa0a6dd17b7832abad770819cb20f5ae1cc89&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYXLTV7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGuymBqVcgjyCSYz4ejUvHKl2aXGEcbRrLoOjpPj%2FTDYAiAucQLNNDFgGN%2FdKusaFXaHyuYe2NYDgy2gcyBe1T5JvCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgVnCgKPclCeqdXUFKtwD0Om98hHomYeXScTamKu3ZmnkjV1uWD0jZfp9UMBaQ0oB5SEPcSmK4Yh%2BhanP0c8wGEpR85wE2%2FeltZrtY4MNHlsn4HXiBbrpfenbxK2M%2FSI%2B%2B7pMelASMWSy4csfgcQumbwV6o0IlLUl8jmgolN3W2TEMBgzT%2BmV5S59hWv22iN9Q2H2O8Gs8vAijf8MTUmhwIlrsqSXDKr6ydEwJYSubjH%2ButiS7qyuXHnXdKMCeK1PWXY%2FkUp9ZlKCki3t6wmerP74dbnuiF8j84cXuuOw6bKg%2FWu0iUWePBhfywCN0LTSxurV9kV3tmwRGc5U96gB%2B3dccL%2B0luhyTBFm%2BGMbAHxnLx5uoj%2BkQ6BwncZv2%2Fz04B7%2Fh8uWGQ7I%2BXI5VsdvLFkoipmZSGumlsEMY602xpsM6JjsbkW6lF8Jj5agcoXOPqf%2BzJ3pChpH4m7WcvkokkmLsLWQpEZEvPiS%2Fe%2ByZ%2FZxCprHhoA2P1a1TQ792xWTbGbMVQrenVWUE6POp5Jn9aEIMalooh24Es9bz5decig0dAB4xINOM862eCt4LkKcGK60z6lspG2jL63nVZUwhnoCFo1EVR%2BXLjvZ58G9vvVTtD2tGpj4w4YwZLLCDtqJ3aHxWaZDqnk%2BNtEwgISxvgY6pgEuEOzMk15T6ZRWCsJANvfl5wIpD5sXt0MROqV075vjwdr9dbZ%2BuwRCeD%2B4s40rVbMLodL%2FVrPB3qecCjRUCs1ckHPwYPbpBsrBupRDu2A6Fw8a7f%2B3nfM7M%2FZEstebfso%2FOlnXK0tnYd%2Bxdt3NIIr7fWopVRrN9oKwvPfSvr9y8oStYb2dNU6S8rJjOG7nl2ZDTMyP1Q5rDyctXa%2BL%2BNAx85XbPplg&X-Amz-Signature=d7f0708c424f7498a871afb366400043aad1d29149c1334b73358e20197c71c5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYXLTV7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGuymBqVcgjyCSYz4ejUvHKl2aXGEcbRrLoOjpPj%2FTDYAiAucQLNNDFgGN%2FdKusaFXaHyuYe2NYDgy2gcyBe1T5JvCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgVnCgKPclCeqdXUFKtwD0Om98hHomYeXScTamKu3ZmnkjV1uWD0jZfp9UMBaQ0oB5SEPcSmK4Yh%2BhanP0c8wGEpR85wE2%2FeltZrtY4MNHlsn4HXiBbrpfenbxK2M%2FSI%2B%2B7pMelASMWSy4csfgcQumbwV6o0IlLUl8jmgolN3W2TEMBgzT%2BmV5S59hWv22iN9Q2H2O8Gs8vAijf8MTUmhwIlrsqSXDKr6ydEwJYSubjH%2ButiS7qyuXHnXdKMCeK1PWXY%2FkUp9ZlKCki3t6wmerP74dbnuiF8j84cXuuOw6bKg%2FWu0iUWePBhfywCN0LTSxurV9kV3tmwRGc5U96gB%2B3dccL%2B0luhyTBFm%2BGMbAHxnLx5uoj%2BkQ6BwncZv2%2Fz04B7%2Fh8uWGQ7I%2BXI5VsdvLFkoipmZSGumlsEMY602xpsM6JjsbkW6lF8Jj5agcoXOPqf%2BzJ3pChpH4m7WcvkokkmLsLWQpEZEvPiS%2Fe%2ByZ%2FZxCprHhoA2P1a1TQ792xWTbGbMVQrenVWUE6POp5Jn9aEIMalooh24Es9bz5decig0dAB4xINOM862eCt4LkKcGK60z6lspG2jL63nVZUwhnoCFo1EVR%2BXLjvZ58G9vvVTtD2tGpj4w4YwZLLCDtqJ3aHxWaZDqnk%2BNtEwgISxvgY6pgEuEOzMk15T6ZRWCsJANvfl5wIpD5sXt0MROqV075vjwdr9dbZ%2BuwRCeD%2B4s40rVbMLodL%2FVrPB3qecCjRUCs1ckHPwYPbpBsrBupRDu2A6Fw8a7f%2B3nfM7M%2FZEstebfso%2FOlnXK0tnYd%2Bxdt3NIIr7fWopVRrN9oKwvPfSvr9y8oStYb2dNU6S8rJjOG7nl2ZDTMyP1Q5rDyctXa%2BL%2BNAx85XbPplg&X-Amz-Signature=ff321a8e5ed3c1539fbeced1c7dcb99ae923f3a79f59a6586793d64412f0e8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYXLTV7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGuymBqVcgjyCSYz4ejUvHKl2aXGEcbRrLoOjpPj%2FTDYAiAucQLNNDFgGN%2FdKusaFXaHyuYe2NYDgy2gcyBe1T5JvCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgVnCgKPclCeqdXUFKtwD0Om98hHomYeXScTamKu3ZmnkjV1uWD0jZfp9UMBaQ0oB5SEPcSmK4Yh%2BhanP0c8wGEpR85wE2%2FeltZrtY4MNHlsn4HXiBbrpfenbxK2M%2FSI%2B%2B7pMelASMWSy4csfgcQumbwV6o0IlLUl8jmgolN3W2TEMBgzT%2BmV5S59hWv22iN9Q2H2O8Gs8vAijf8MTUmhwIlrsqSXDKr6ydEwJYSubjH%2ButiS7qyuXHnXdKMCeK1PWXY%2FkUp9ZlKCki3t6wmerP74dbnuiF8j84cXuuOw6bKg%2FWu0iUWePBhfywCN0LTSxurV9kV3tmwRGc5U96gB%2B3dccL%2B0luhyTBFm%2BGMbAHxnLx5uoj%2BkQ6BwncZv2%2Fz04B7%2Fh8uWGQ7I%2BXI5VsdvLFkoipmZSGumlsEMY602xpsM6JjsbkW6lF8Jj5agcoXOPqf%2BzJ3pChpH4m7WcvkokkmLsLWQpEZEvPiS%2Fe%2ByZ%2FZxCprHhoA2P1a1TQ792xWTbGbMVQrenVWUE6POp5Jn9aEIMalooh24Es9bz5decig0dAB4xINOM862eCt4LkKcGK60z6lspG2jL63nVZUwhnoCFo1EVR%2BXLjvZ58G9vvVTtD2tGpj4w4YwZLLCDtqJ3aHxWaZDqnk%2BNtEwgISxvgY6pgEuEOzMk15T6ZRWCsJANvfl5wIpD5sXt0MROqV075vjwdr9dbZ%2BuwRCeD%2B4s40rVbMLodL%2FVrPB3qecCjRUCs1ckHPwYPbpBsrBupRDu2A6Fw8a7f%2B3nfM7M%2FZEstebfso%2FOlnXK0tnYd%2Bxdt3NIIr7fWopVRrN9oKwvPfSvr9y8oStYb2dNU6S8rJjOG7nl2ZDTMyP1Q5rDyctXa%2BL%2BNAx85XbPplg&X-Amz-Signature=48107abff5f9e62fd058879ff6494ebb226f163e6f93d00b936bff37c93312e0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
