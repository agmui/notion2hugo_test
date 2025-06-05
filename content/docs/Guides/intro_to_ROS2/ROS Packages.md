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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2AFHAX2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB6wittuTWrdzK5WPKoa5uRwT4ylo3ZLbMqd5XeM0syYAiEArXoZU53BWsfpp6oY6jNmEZqhSoKKBTh3zDQDC0I%2BiWQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDI5oZtDq3DyNGb3XcircA7UAIXNPUZaRw1fLMv%2FQCVfkygsdBDdm48E%2FQ19aGxfFM2kIPWtM5bJXDY5SXz6jrev2Vpi8Ain%2BAqQD8I5xvWyViQ1jF6dNfEgluQXX2UJlvFxXAQOvWT86ihCMucpfcHpE9H7kvFrPKBaCrxkOiwBMpYftlubdwWCpN3nY2k2DNvYZgNUUYUKIjHTa%2F%2FMK8tKLtjbN92ezNTohhW2wyQuNfh8CV5Yr2YJsPOfCg7taY%2BHaXaOBzeFrQ%2BS6rzHMD7OgLTExB2%2FRKlrgzB%2BHrMP0eiLjpVT1ktexYq51HiLLWr5Ji3THnGBEtQN470fEMaXtj7sD%2BFh%2B9EHuO01FQoe%2F2paBtQ0P%2F%2F%2BlEszbvIYhzi2BuTg3V9RgyDtmaX4pRmxXjLE%2FodPD3iER3yeiq4d3Z6U5gqGzXxHmoBqN0fl5lrVpiG3Rruhqo39GwpEGczx8shcMmFkyP1HTteN4YiK94zrgx95z8FYhthlbTqkBstvZUwAz%2FGV8uMyLMiPw40YNL2RZG7yxSYHYU3wWza%2BvFcBwHSrjAOsAuTE9mBMyYPUwidqjqYL52INK141hgNmj2H2yo%2FQDZJqscvOWOmACSVz36h3v%2F37mbejPNjclM0QMqs5H29xUhkcnMJTnhsIGOqUBOAdzOdAuBjZuvVPtaSKi0EngzlXlWTmD%2BdrNhjtThRlMEwBnlKiUhmn1Aoc4GmpEaxbtKhSk8ROMePzrNdPmZD3k4DwPiH9mEYJ9fxKUhxAaF9W8lX0i36euymRxJbiz1ba%2Fmds2xH1UZNw%2BLIcwJxbzCkrmiS1Jd0zLe6Yi1GoXilU%2Fu2S1FupGBU8rQ388Hp0JKVb81B3J87l%2BV%2BgLwca8rFzS&X-Amz-Signature=4b841c236e1020ade17e793dbe9e2fd683d689627640d630a8b67be6042295e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2AFHAX2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB6wittuTWrdzK5WPKoa5uRwT4ylo3ZLbMqd5XeM0syYAiEArXoZU53BWsfpp6oY6jNmEZqhSoKKBTh3zDQDC0I%2BiWQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDI5oZtDq3DyNGb3XcircA7UAIXNPUZaRw1fLMv%2FQCVfkygsdBDdm48E%2FQ19aGxfFM2kIPWtM5bJXDY5SXz6jrev2Vpi8Ain%2BAqQD8I5xvWyViQ1jF6dNfEgluQXX2UJlvFxXAQOvWT86ihCMucpfcHpE9H7kvFrPKBaCrxkOiwBMpYftlubdwWCpN3nY2k2DNvYZgNUUYUKIjHTa%2F%2FMK8tKLtjbN92ezNTohhW2wyQuNfh8CV5Yr2YJsPOfCg7taY%2BHaXaOBzeFrQ%2BS6rzHMD7OgLTExB2%2FRKlrgzB%2BHrMP0eiLjpVT1ktexYq51HiLLWr5Ji3THnGBEtQN470fEMaXtj7sD%2BFh%2B9EHuO01FQoe%2F2paBtQ0P%2F%2F%2BlEszbvIYhzi2BuTg3V9RgyDtmaX4pRmxXjLE%2FodPD3iER3yeiq4d3Z6U5gqGzXxHmoBqN0fl5lrVpiG3Rruhqo39GwpEGczx8shcMmFkyP1HTteN4YiK94zrgx95z8FYhthlbTqkBstvZUwAz%2FGV8uMyLMiPw40YNL2RZG7yxSYHYU3wWza%2BvFcBwHSrjAOsAuTE9mBMyYPUwidqjqYL52INK141hgNmj2H2yo%2FQDZJqscvOWOmACSVz36h3v%2F37mbejPNjclM0QMqs5H29xUhkcnMJTnhsIGOqUBOAdzOdAuBjZuvVPtaSKi0EngzlXlWTmD%2BdrNhjtThRlMEwBnlKiUhmn1Aoc4GmpEaxbtKhSk8ROMePzrNdPmZD3k4DwPiH9mEYJ9fxKUhxAaF9W8lX0i36euymRxJbiz1ba%2Fmds2xH1UZNw%2BLIcwJxbzCkrmiS1Jd0zLe6Yi1GoXilU%2Fu2S1FupGBU8rQ388Hp0JKVb81B3J87l%2BV%2BgLwca8rFzS&X-Amz-Signature=51b8978dad01f03b7cee21da4b913364baaa6d4ab63b71957ed3ad6cad640f0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2AFHAX2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB6wittuTWrdzK5WPKoa5uRwT4ylo3ZLbMqd5XeM0syYAiEArXoZU53BWsfpp6oY6jNmEZqhSoKKBTh3zDQDC0I%2BiWQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDI5oZtDq3DyNGb3XcircA7UAIXNPUZaRw1fLMv%2FQCVfkygsdBDdm48E%2FQ19aGxfFM2kIPWtM5bJXDY5SXz6jrev2Vpi8Ain%2BAqQD8I5xvWyViQ1jF6dNfEgluQXX2UJlvFxXAQOvWT86ihCMucpfcHpE9H7kvFrPKBaCrxkOiwBMpYftlubdwWCpN3nY2k2DNvYZgNUUYUKIjHTa%2F%2FMK8tKLtjbN92ezNTohhW2wyQuNfh8CV5Yr2YJsPOfCg7taY%2BHaXaOBzeFrQ%2BS6rzHMD7OgLTExB2%2FRKlrgzB%2BHrMP0eiLjpVT1ktexYq51HiLLWr5Ji3THnGBEtQN470fEMaXtj7sD%2BFh%2B9EHuO01FQoe%2F2paBtQ0P%2F%2F%2BlEszbvIYhzi2BuTg3V9RgyDtmaX4pRmxXjLE%2FodPD3iER3yeiq4d3Z6U5gqGzXxHmoBqN0fl5lrVpiG3Rruhqo39GwpEGczx8shcMmFkyP1HTteN4YiK94zrgx95z8FYhthlbTqkBstvZUwAz%2FGV8uMyLMiPw40YNL2RZG7yxSYHYU3wWza%2BvFcBwHSrjAOsAuTE9mBMyYPUwidqjqYL52INK141hgNmj2H2yo%2FQDZJqscvOWOmACSVz36h3v%2F37mbejPNjclM0QMqs5H29xUhkcnMJTnhsIGOqUBOAdzOdAuBjZuvVPtaSKi0EngzlXlWTmD%2BdrNhjtThRlMEwBnlKiUhmn1Aoc4GmpEaxbtKhSk8ROMePzrNdPmZD3k4DwPiH9mEYJ9fxKUhxAaF9W8lX0i36euymRxJbiz1ba%2Fmds2xH1UZNw%2BLIcwJxbzCkrmiS1Jd0zLe6Yi1GoXilU%2Fu2S1FupGBU8rQ388Hp0JKVb81B3J87l%2BV%2BgLwca8rFzS&X-Amz-Signature=b2e07deb7257c2cd5fa1b9a52fa3e477be7509e1d5da730b91f7263f41294f96&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2AFHAX2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB6wittuTWrdzK5WPKoa5uRwT4ylo3ZLbMqd5XeM0syYAiEArXoZU53BWsfpp6oY6jNmEZqhSoKKBTh3zDQDC0I%2BiWQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDI5oZtDq3DyNGb3XcircA7UAIXNPUZaRw1fLMv%2FQCVfkygsdBDdm48E%2FQ19aGxfFM2kIPWtM5bJXDY5SXz6jrev2Vpi8Ain%2BAqQD8I5xvWyViQ1jF6dNfEgluQXX2UJlvFxXAQOvWT86ihCMucpfcHpE9H7kvFrPKBaCrxkOiwBMpYftlubdwWCpN3nY2k2DNvYZgNUUYUKIjHTa%2F%2FMK8tKLtjbN92ezNTohhW2wyQuNfh8CV5Yr2YJsPOfCg7taY%2BHaXaOBzeFrQ%2BS6rzHMD7OgLTExB2%2FRKlrgzB%2BHrMP0eiLjpVT1ktexYq51HiLLWr5Ji3THnGBEtQN470fEMaXtj7sD%2BFh%2B9EHuO01FQoe%2F2paBtQ0P%2F%2F%2BlEszbvIYhzi2BuTg3V9RgyDtmaX4pRmxXjLE%2FodPD3iER3yeiq4d3Z6U5gqGzXxHmoBqN0fl5lrVpiG3Rruhqo39GwpEGczx8shcMmFkyP1HTteN4YiK94zrgx95z8FYhthlbTqkBstvZUwAz%2FGV8uMyLMiPw40YNL2RZG7yxSYHYU3wWza%2BvFcBwHSrjAOsAuTE9mBMyYPUwidqjqYL52INK141hgNmj2H2yo%2FQDZJqscvOWOmACSVz36h3v%2F37mbejPNjclM0QMqs5H29xUhkcnMJTnhsIGOqUBOAdzOdAuBjZuvVPtaSKi0EngzlXlWTmD%2BdrNhjtThRlMEwBnlKiUhmn1Aoc4GmpEaxbtKhSk8ROMePzrNdPmZD3k4DwPiH9mEYJ9fxKUhxAaF9W8lX0i36euymRxJbiz1ba%2Fmds2xH1UZNw%2BLIcwJxbzCkrmiS1Jd0zLe6Yi1GoXilU%2Fu2S1FupGBU8rQ388Hp0JKVb81B3J87l%2BV%2BgLwca8rFzS&X-Amz-Signature=4df5b55965591e113b3358651b4fbe602d5ecd6e32bbc1037797a159f4b01b49&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2AFHAX2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB6wittuTWrdzK5WPKoa5uRwT4ylo3ZLbMqd5XeM0syYAiEArXoZU53BWsfpp6oY6jNmEZqhSoKKBTh3zDQDC0I%2BiWQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDI5oZtDq3DyNGb3XcircA7UAIXNPUZaRw1fLMv%2FQCVfkygsdBDdm48E%2FQ19aGxfFM2kIPWtM5bJXDY5SXz6jrev2Vpi8Ain%2BAqQD8I5xvWyViQ1jF6dNfEgluQXX2UJlvFxXAQOvWT86ihCMucpfcHpE9H7kvFrPKBaCrxkOiwBMpYftlubdwWCpN3nY2k2DNvYZgNUUYUKIjHTa%2F%2FMK8tKLtjbN92ezNTohhW2wyQuNfh8CV5Yr2YJsPOfCg7taY%2BHaXaOBzeFrQ%2BS6rzHMD7OgLTExB2%2FRKlrgzB%2BHrMP0eiLjpVT1ktexYq51HiLLWr5Ji3THnGBEtQN470fEMaXtj7sD%2BFh%2B9EHuO01FQoe%2F2paBtQ0P%2F%2F%2BlEszbvIYhzi2BuTg3V9RgyDtmaX4pRmxXjLE%2FodPD3iER3yeiq4d3Z6U5gqGzXxHmoBqN0fl5lrVpiG3Rruhqo39GwpEGczx8shcMmFkyP1HTteN4YiK94zrgx95z8FYhthlbTqkBstvZUwAz%2FGV8uMyLMiPw40YNL2RZG7yxSYHYU3wWza%2BvFcBwHSrjAOsAuTE9mBMyYPUwidqjqYL52INK141hgNmj2H2yo%2FQDZJqscvOWOmACSVz36h3v%2F37mbejPNjclM0QMqs5H29xUhkcnMJTnhsIGOqUBOAdzOdAuBjZuvVPtaSKi0EngzlXlWTmD%2BdrNhjtThRlMEwBnlKiUhmn1Aoc4GmpEaxbtKhSk8ROMePzrNdPmZD3k4DwPiH9mEYJ9fxKUhxAaF9W8lX0i36euymRxJbiz1ba%2Fmds2xH1UZNw%2BLIcwJxbzCkrmiS1Jd0zLe6Yi1GoXilU%2Fu2S1FupGBU8rQ388Hp0JKVb81B3J87l%2BV%2BgLwca8rFzS&X-Amz-Signature=fba9b60595e80fb272c5267f087d1c63f9d07e0880e7c83e2f17c641e0c690c9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2AFHAX2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB6wittuTWrdzK5WPKoa5uRwT4ylo3ZLbMqd5XeM0syYAiEArXoZU53BWsfpp6oY6jNmEZqhSoKKBTh3zDQDC0I%2BiWQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDI5oZtDq3DyNGb3XcircA7UAIXNPUZaRw1fLMv%2FQCVfkygsdBDdm48E%2FQ19aGxfFM2kIPWtM5bJXDY5SXz6jrev2Vpi8Ain%2BAqQD8I5xvWyViQ1jF6dNfEgluQXX2UJlvFxXAQOvWT86ihCMucpfcHpE9H7kvFrPKBaCrxkOiwBMpYftlubdwWCpN3nY2k2DNvYZgNUUYUKIjHTa%2F%2FMK8tKLtjbN92ezNTohhW2wyQuNfh8CV5Yr2YJsPOfCg7taY%2BHaXaOBzeFrQ%2BS6rzHMD7OgLTExB2%2FRKlrgzB%2BHrMP0eiLjpVT1ktexYq51HiLLWr5Ji3THnGBEtQN470fEMaXtj7sD%2BFh%2B9EHuO01FQoe%2F2paBtQ0P%2F%2F%2BlEszbvIYhzi2BuTg3V9RgyDtmaX4pRmxXjLE%2FodPD3iER3yeiq4d3Z6U5gqGzXxHmoBqN0fl5lrVpiG3Rruhqo39GwpEGczx8shcMmFkyP1HTteN4YiK94zrgx95z8FYhthlbTqkBstvZUwAz%2FGV8uMyLMiPw40YNL2RZG7yxSYHYU3wWza%2BvFcBwHSrjAOsAuTE9mBMyYPUwidqjqYL52INK141hgNmj2H2yo%2FQDZJqscvOWOmACSVz36h3v%2F37mbejPNjclM0QMqs5H29xUhkcnMJTnhsIGOqUBOAdzOdAuBjZuvVPtaSKi0EngzlXlWTmD%2BdrNhjtThRlMEwBnlKiUhmn1Aoc4GmpEaxbtKhSk8ROMePzrNdPmZD3k4DwPiH9mEYJ9fxKUhxAaF9W8lX0i36euymRxJbiz1ba%2Fmds2xH1UZNw%2BLIcwJxbzCkrmiS1Jd0zLe6Yi1GoXilU%2Fu2S1FupGBU8rQ388Hp0JKVb81B3J87l%2BV%2BgLwca8rFzS&X-Amz-Signature=4c48057e027c6f4dae7097f83a48a9c7ddde877fd69a5d08e7f8f913fbb9e604&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2AFHAX2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB6wittuTWrdzK5WPKoa5uRwT4ylo3ZLbMqd5XeM0syYAiEArXoZU53BWsfpp6oY6jNmEZqhSoKKBTh3zDQDC0I%2BiWQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDI5oZtDq3DyNGb3XcircA7UAIXNPUZaRw1fLMv%2FQCVfkygsdBDdm48E%2FQ19aGxfFM2kIPWtM5bJXDY5SXz6jrev2Vpi8Ain%2BAqQD8I5xvWyViQ1jF6dNfEgluQXX2UJlvFxXAQOvWT86ihCMucpfcHpE9H7kvFrPKBaCrxkOiwBMpYftlubdwWCpN3nY2k2DNvYZgNUUYUKIjHTa%2F%2FMK8tKLtjbN92ezNTohhW2wyQuNfh8CV5Yr2YJsPOfCg7taY%2BHaXaOBzeFrQ%2BS6rzHMD7OgLTExB2%2FRKlrgzB%2BHrMP0eiLjpVT1ktexYq51HiLLWr5Ji3THnGBEtQN470fEMaXtj7sD%2BFh%2B9EHuO01FQoe%2F2paBtQ0P%2F%2F%2BlEszbvIYhzi2BuTg3V9RgyDtmaX4pRmxXjLE%2FodPD3iER3yeiq4d3Z6U5gqGzXxHmoBqN0fl5lrVpiG3Rruhqo39GwpEGczx8shcMmFkyP1HTteN4YiK94zrgx95z8FYhthlbTqkBstvZUwAz%2FGV8uMyLMiPw40YNL2RZG7yxSYHYU3wWza%2BvFcBwHSrjAOsAuTE9mBMyYPUwidqjqYL52INK141hgNmj2H2yo%2FQDZJqscvOWOmACSVz36h3v%2F37mbejPNjclM0QMqs5H29xUhkcnMJTnhsIGOqUBOAdzOdAuBjZuvVPtaSKi0EngzlXlWTmD%2BdrNhjtThRlMEwBnlKiUhmn1Aoc4GmpEaxbtKhSk8ROMePzrNdPmZD3k4DwPiH9mEYJ9fxKUhxAaF9W8lX0i36euymRxJbiz1ba%2Fmds2xH1UZNw%2BLIcwJxbzCkrmiS1Jd0zLe6Yi1GoXilU%2Fu2S1FupGBU8rQ388Hp0JKVb81B3J87l%2BV%2BgLwca8rFzS&X-Amz-Signature=3781945497a5afe749ff6c359e696cc5681f2dcba14c653f923cae07aaf4e932&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
