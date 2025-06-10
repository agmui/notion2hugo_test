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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3EKC5ZL%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9Nit%2BQVjKpvXl0jpSvnlyHWWeACSjOnc%2FfQROXE%2FxtAiAK%2F81u4HbJ5bxdzC86s%2Fnxu%2FZdIQZ4VzdB3roHPkqyfiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4aymSK0pFKCUXd29KtwDQqH70OKwL%2B8tQaSwzDalb39A17j9oIKLp2y45VULh3tf9w3EvqtyxPsIm8yuiwo5tJVqb4hWEZaIjKykxsBlGD%2FEGjP%2BWRH7O51i7OkMwaH9xqXMLWzvVVl4EblVVqDJ9vZR9qHKUqQEI0opXnICZ%2FfmSjVykPat6PAvyzt0oux3rk9YsxgNnzStcmk3NS6OCZaCj5Hcxn9hOm9ymm7nGISVhaP21Hkgpt59szMg%2BeEdQR8aQXQeOWJmKkK%2BgW7AynFUbQoF%2BcZv%2FKOsOOmDVb0fWWM1ZnzROlRmjkrAk8spkTAdQcyxc8EAs00%2BhCSAPUu3%2BY9z4fzMAWSLu0tSi%2FwW24uO0wddnN1Y7UNnjeqsSmcCtyfQ%2BLjyssJzvssUEs9d1XTeM4MPmC491crVJn3cl9wiZtEXhyVDh%2FrB%2Bn66u%2Fs7BUv9jf9JABDYy56U9A28%2B678GXrmA0HSYuNSGtfvk9I7rGfIRyI%2B%2BD4HpvZVnsdEmE9BbVcJrAl%2Blh6ymB16TzGLOKy3ttzEwSGfSw%2B3QoxqgU1wZCwRaizlsBTOeq7KatKZYpxpimqwbJ2WZkl%2BIJ6Dt14q8Y58Em3Sv6RO2Pr70A%2Bpsb4JH%2BBjQptJorqI7iAc%2FFbeF4Mw1YihwgY6pgELOGpl9GpoSgQtbOwlLpTI5SMCaJPFKZwNZE3An6peqMcvsX6Jo2iYUWrBFzQM7vp1EbuOv2e%2Btc8UJC2FaBwlDFqLP0GO2By9Ye10WuWMwk5juBgUrRaVHpNQFKnIx9kOLesb1A4MGcBLgjLcCfNGvM0lU%2B6DxTi5avgEzDzLGEREBmDKdV9tAg6qtUNTltoctrOW5Z8Dl8q4715jMAPZU3eFZl3G&X-Amz-Signature=2de41433d2846f4775aa8b80fbca30dd01272f386c1b3983371470d31f3cb2bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3EKC5ZL%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9Nit%2BQVjKpvXl0jpSvnlyHWWeACSjOnc%2FfQROXE%2FxtAiAK%2F81u4HbJ5bxdzC86s%2Fnxu%2FZdIQZ4VzdB3roHPkqyfiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4aymSK0pFKCUXd29KtwDQqH70OKwL%2B8tQaSwzDalb39A17j9oIKLp2y45VULh3tf9w3EvqtyxPsIm8yuiwo5tJVqb4hWEZaIjKykxsBlGD%2FEGjP%2BWRH7O51i7OkMwaH9xqXMLWzvVVl4EblVVqDJ9vZR9qHKUqQEI0opXnICZ%2FfmSjVykPat6PAvyzt0oux3rk9YsxgNnzStcmk3NS6OCZaCj5Hcxn9hOm9ymm7nGISVhaP21Hkgpt59szMg%2BeEdQR8aQXQeOWJmKkK%2BgW7AynFUbQoF%2BcZv%2FKOsOOmDVb0fWWM1ZnzROlRmjkrAk8spkTAdQcyxc8EAs00%2BhCSAPUu3%2BY9z4fzMAWSLu0tSi%2FwW24uO0wddnN1Y7UNnjeqsSmcCtyfQ%2BLjyssJzvssUEs9d1XTeM4MPmC491crVJn3cl9wiZtEXhyVDh%2FrB%2Bn66u%2Fs7BUv9jf9JABDYy56U9A28%2B678GXrmA0HSYuNSGtfvk9I7rGfIRyI%2B%2BD4HpvZVnsdEmE9BbVcJrAl%2Blh6ymB16TzGLOKy3ttzEwSGfSw%2B3QoxqgU1wZCwRaizlsBTOeq7KatKZYpxpimqwbJ2WZkl%2BIJ6Dt14q8Y58Em3Sv6RO2Pr70A%2Bpsb4JH%2BBjQptJorqI7iAc%2FFbeF4Mw1YihwgY6pgELOGpl9GpoSgQtbOwlLpTI5SMCaJPFKZwNZE3An6peqMcvsX6Jo2iYUWrBFzQM7vp1EbuOv2e%2Btc8UJC2FaBwlDFqLP0GO2By9Ye10WuWMwk5juBgUrRaVHpNQFKnIx9kOLesb1A4MGcBLgjLcCfNGvM0lU%2B6DxTi5avgEzDzLGEREBmDKdV9tAg6qtUNTltoctrOW5Z8Dl8q4715jMAPZU3eFZl3G&X-Amz-Signature=fb428fce050329b30f7e38faf0be5a9058c7631b53659337fb6f8ba4e328f300&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3EKC5ZL%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9Nit%2BQVjKpvXl0jpSvnlyHWWeACSjOnc%2FfQROXE%2FxtAiAK%2F81u4HbJ5bxdzC86s%2Fnxu%2FZdIQZ4VzdB3roHPkqyfiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4aymSK0pFKCUXd29KtwDQqH70OKwL%2B8tQaSwzDalb39A17j9oIKLp2y45VULh3tf9w3EvqtyxPsIm8yuiwo5tJVqb4hWEZaIjKykxsBlGD%2FEGjP%2BWRH7O51i7OkMwaH9xqXMLWzvVVl4EblVVqDJ9vZR9qHKUqQEI0opXnICZ%2FfmSjVykPat6PAvyzt0oux3rk9YsxgNnzStcmk3NS6OCZaCj5Hcxn9hOm9ymm7nGISVhaP21Hkgpt59szMg%2BeEdQR8aQXQeOWJmKkK%2BgW7AynFUbQoF%2BcZv%2FKOsOOmDVb0fWWM1ZnzROlRmjkrAk8spkTAdQcyxc8EAs00%2BhCSAPUu3%2BY9z4fzMAWSLu0tSi%2FwW24uO0wddnN1Y7UNnjeqsSmcCtyfQ%2BLjyssJzvssUEs9d1XTeM4MPmC491crVJn3cl9wiZtEXhyVDh%2FrB%2Bn66u%2Fs7BUv9jf9JABDYy56U9A28%2B678GXrmA0HSYuNSGtfvk9I7rGfIRyI%2B%2BD4HpvZVnsdEmE9BbVcJrAl%2Blh6ymB16TzGLOKy3ttzEwSGfSw%2B3QoxqgU1wZCwRaizlsBTOeq7KatKZYpxpimqwbJ2WZkl%2BIJ6Dt14q8Y58Em3Sv6RO2Pr70A%2Bpsb4JH%2BBjQptJorqI7iAc%2FFbeF4Mw1YihwgY6pgELOGpl9GpoSgQtbOwlLpTI5SMCaJPFKZwNZE3An6peqMcvsX6Jo2iYUWrBFzQM7vp1EbuOv2e%2Btc8UJC2FaBwlDFqLP0GO2By9Ye10WuWMwk5juBgUrRaVHpNQFKnIx9kOLesb1A4MGcBLgjLcCfNGvM0lU%2B6DxTi5avgEzDzLGEREBmDKdV9tAg6qtUNTltoctrOW5Z8Dl8q4715jMAPZU3eFZl3G&X-Amz-Signature=5e5d0cb3c23e431cabadeef87f467310f9fd3cc81fcab9439cc8e5a0c375ae96&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3EKC5ZL%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9Nit%2BQVjKpvXl0jpSvnlyHWWeACSjOnc%2FfQROXE%2FxtAiAK%2F81u4HbJ5bxdzC86s%2Fnxu%2FZdIQZ4VzdB3roHPkqyfiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4aymSK0pFKCUXd29KtwDQqH70OKwL%2B8tQaSwzDalb39A17j9oIKLp2y45VULh3tf9w3EvqtyxPsIm8yuiwo5tJVqb4hWEZaIjKykxsBlGD%2FEGjP%2BWRH7O51i7OkMwaH9xqXMLWzvVVl4EblVVqDJ9vZR9qHKUqQEI0opXnICZ%2FfmSjVykPat6PAvyzt0oux3rk9YsxgNnzStcmk3NS6OCZaCj5Hcxn9hOm9ymm7nGISVhaP21Hkgpt59szMg%2BeEdQR8aQXQeOWJmKkK%2BgW7AynFUbQoF%2BcZv%2FKOsOOmDVb0fWWM1ZnzROlRmjkrAk8spkTAdQcyxc8EAs00%2BhCSAPUu3%2BY9z4fzMAWSLu0tSi%2FwW24uO0wddnN1Y7UNnjeqsSmcCtyfQ%2BLjyssJzvssUEs9d1XTeM4MPmC491crVJn3cl9wiZtEXhyVDh%2FrB%2Bn66u%2Fs7BUv9jf9JABDYy56U9A28%2B678GXrmA0HSYuNSGtfvk9I7rGfIRyI%2B%2BD4HpvZVnsdEmE9BbVcJrAl%2Blh6ymB16TzGLOKy3ttzEwSGfSw%2B3QoxqgU1wZCwRaizlsBTOeq7KatKZYpxpimqwbJ2WZkl%2BIJ6Dt14q8Y58Em3Sv6RO2Pr70A%2Bpsb4JH%2BBjQptJorqI7iAc%2FFbeF4Mw1YihwgY6pgELOGpl9GpoSgQtbOwlLpTI5SMCaJPFKZwNZE3An6peqMcvsX6Jo2iYUWrBFzQM7vp1EbuOv2e%2Btc8UJC2FaBwlDFqLP0GO2By9Ye10WuWMwk5juBgUrRaVHpNQFKnIx9kOLesb1A4MGcBLgjLcCfNGvM0lU%2B6DxTi5avgEzDzLGEREBmDKdV9tAg6qtUNTltoctrOW5Z8Dl8q4715jMAPZU3eFZl3G&X-Amz-Signature=54bdc57009b307df0a69e1b01387bd060fd4590b4c1d8708f6512600ae7ad1fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3EKC5ZL%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9Nit%2BQVjKpvXl0jpSvnlyHWWeACSjOnc%2FfQROXE%2FxtAiAK%2F81u4HbJ5bxdzC86s%2Fnxu%2FZdIQZ4VzdB3roHPkqyfiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4aymSK0pFKCUXd29KtwDQqH70OKwL%2B8tQaSwzDalb39A17j9oIKLp2y45VULh3tf9w3EvqtyxPsIm8yuiwo5tJVqb4hWEZaIjKykxsBlGD%2FEGjP%2BWRH7O51i7OkMwaH9xqXMLWzvVVl4EblVVqDJ9vZR9qHKUqQEI0opXnICZ%2FfmSjVykPat6PAvyzt0oux3rk9YsxgNnzStcmk3NS6OCZaCj5Hcxn9hOm9ymm7nGISVhaP21Hkgpt59szMg%2BeEdQR8aQXQeOWJmKkK%2BgW7AynFUbQoF%2BcZv%2FKOsOOmDVb0fWWM1ZnzROlRmjkrAk8spkTAdQcyxc8EAs00%2BhCSAPUu3%2BY9z4fzMAWSLu0tSi%2FwW24uO0wddnN1Y7UNnjeqsSmcCtyfQ%2BLjyssJzvssUEs9d1XTeM4MPmC491crVJn3cl9wiZtEXhyVDh%2FrB%2Bn66u%2Fs7BUv9jf9JABDYy56U9A28%2B678GXrmA0HSYuNSGtfvk9I7rGfIRyI%2B%2BD4HpvZVnsdEmE9BbVcJrAl%2Blh6ymB16TzGLOKy3ttzEwSGfSw%2B3QoxqgU1wZCwRaizlsBTOeq7KatKZYpxpimqwbJ2WZkl%2BIJ6Dt14q8Y58Em3Sv6RO2Pr70A%2Bpsb4JH%2BBjQptJorqI7iAc%2FFbeF4Mw1YihwgY6pgELOGpl9GpoSgQtbOwlLpTI5SMCaJPFKZwNZE3An6peqMcvsX6Jo2iYUWrBFzQM7vp1EbuOv2e%2Btc8UJC2FaBwlDFqLP0GO2By9Ye10WuWMwk5juBgUrRaVHpNQFKnIx9kOLesb1A4MGcBLgjLcCfNGvM0lU%2B6DxTi5avgEzDzLGEREBmDKdV9tAg6qtUNTltoctrOW5Z8Dl8q4715jMAPZU3eFZl3G&X-Amz-Signature=f31136b936971a1d0dfe0fb9cf0d0d4d3c6716a06474ec25b00182f220b88323&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3EKC5ZL%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9Nit%2BQVjKpvXl0jpSvnlyHWWeACSjOnc%2FfQROXE%2FxtAiAK%2F81u4HbJ5bxdzC86s%2Fnxu%2FZdIQZ4VzdB3roHPkqyfiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4aymSK0pFKCUXd29KtwDQqH70OKwL%2B8tQaSwzDalb39A17j9oIKLp2y45VULh3tf9w3EvqtyxPsIm8yuiwo5tJVqb4hWEZaIjKykxsBlGD%2FEGjP%2BWRH7O51i7OkMwaH9xqXMLWzvVVl4EblVVqDJ9vZR9qHKUqQEI0opXnICZ%2FfmSjVykPat6PAvyzt0oux3rk9YsxgNnzStcmk3NS6OCZaCj5Hcxn9hOm9ymm7nGISVhaP21Hkgpt59szMg%2BeEdQR8aQXQeOWJmKkK%2BgW7AynFUbQoF%2BcZv%2FKOsOOmDVb0fWWM1ZnzROlRmjkrAk8spkTAdQcyxc8EAs00%2BhCSAPUu3%2BY9z4fzMAWSLu0tSi%2FwW24uO0wddnN1Y7UNnjeqsSmcCtyfQ%2BLjyssJzvssUEs9d1XTeM4MPmC491crVJn3cl9wiZtEXhyVDh%2FrB%2Bn66u%2Fs7BUv9jf9JABDYy56U9A28%2B678GXrmA0HSYuNSGtfvk9I7rGfIRyI%2B%2BD4HpvZVnsdEmE9BbVcJrAl%2Blh6ymB16TzGLOKy3ttzEwSGfSw%2B3QoxqgU1wZCwRaizlsBTOeq7KatKZYpxpimqwbJ2WZkl%2BIJ6Dt14q8Y58Em3Sv6RO2Pr70A%2Bpsb4JH%2BBjQptJorqI7iAc%2FFbeF4Mw1YihwgY6pgELOGpl9GpoSgQtbOwlLpTI5SMCaJPFKZwNZE3An6peqMcvsX6Jo2iYUWrBFzQM7vp1EbuOv2e%2Btc8UJC2FaBwlDFqLP0GO2By9Ye10WuWMwk5juBgUrRaVHpNQFKnIx9kOLesb1A4MGcBLgjLcCfNGvM0lU%2B6DxTi5avgEzDzLGEREBmDKdV9tAg6qtUNTltoctrOW5Z8Dl8q4715jMAPZU3eFZl3G&X-Amz-Signature=54fdb7f8eeda0c3f56784678d2c71e0fed69c6773e08fb4946e1d3964e1d84e8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3EKC5ZL%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9Nit%2BQVjKpvXl0jpSvnlyHWWeACSjOnc%2FfQROXE%2FxtAiAK%2F81u4HbJ5bxdzC86s%2Fnxu%2FZdIQZ4VzdB3roHPkqyfiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4aymSK0pFKCUXd29KtwDQqH70OKwL%2B8tQaSwzDalb39A17j9oIKLp2y45VULh3tf9w3EvqtyxPsIm8yuiwo5tJVqb4hWEZaIjKykxsBlGD%2FEGjP%2BWRH7O51i7OkMwaH9xqXMLWzvVVl4EblVVqDJ9vZR9qHKUqQEI0opXnICZ%2FfmSjVykPat6PAvyzt0oux3rk9YsxgNnzStcmk3NS6OCZaCj5Hcxn9hOm9ymm7nGISVhaP21Hkgpt59szMg%2BeEdQR8aQXQeOWJmKkK%2BgW7AynFUbQoF%2BcZv%2FKOsOOmDVb0fWWM1ZnzROlRmjkrAk8spkTAdQcyxc8EAs00%2BhCSAPUu3%2BY9z4fzMAWSLu0tSi%2FwW24uO0wddnN1Y7UNnjeqsSmcCtyfQ%2BLjyssJzvssUEs9d1XTeM4MPmC491crVJn3cl9wiZtEXhyVDh%2FrB%2Bn66u%2Fs7BUv9jf9JABDYy56U9A28%2B678GXrmA0HSYuNSGtfvk9I7rGfIRyI%2B%2BD4HpvZVnsdEmE9BbVcJrAl%2Blh6ymB16TzGLOKy3ttzEwSGfSw%2B3QoxqgU1wZCwRaizlsBTOeq7KatKZYpxpimqwbJ2WZkl%2BIJ6Dt14q8Y58Em3Sv6RO2Pr70A%2Bpsb4JH%2BBjQptJorqI7iAc%2FFbeF4Mw1YihwgY6pgELOGpl9GpoSgQtbOwlLpTI5SMCaJPFKZwNZE3An6peqMcvsX6Jo2iYUWrBFzQM7vp1EbuOv2e%2Btc8UJC2FaBwlDFqLP0GO2By9Ye10WuWMwk5juBgUrRaVHpNQFKnIx9kOLesb1A4MGcBLgjLcCfNGvM0lU%2B6DxTi5avgEzDzLGEREBmDKdV9tAg6qtUNTltoctrOW5Z8Dl8q4715jMAPZU3eFZl3G&X-Amz-Signature=417422d3f8977340cba144ad87e2aa00a3361bed2c40e3bf7e1747f45b8bc0b7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
