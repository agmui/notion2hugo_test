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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKXIMJSG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDKzDN6Roh%2F2zmhncvcLo1iPv9GHGAiigWQ%2B0jdvGqWKAiAiMwrczyJqX8VbExZFYPuTmd00uCmvbQjFBrDfbDfDGyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FpAzIc8GLauJm1jKtwDYk04ih6LuVdORbQJKoOM8D1YjO1VCzixLcrjaUKeT6tWPg%2FXDSDBNGQrHdo92ulbTWbe2g2sGcH0bcQVjloEWpVI4BsQR%2BFl1yPmn8su6VJp%2FITp%2F0rHfGGL53t7BD8szil3uDHl5nqt3t5M%2Fl%2F25Vg%2Fb2p0leHrr2xoAEHi1UatIWMzsGBfKKY61X1LSV%2ByPMTaPZ6V1t5%2B%2FXAhE0Pg%2F0Pb1sEnMBm%2FytSUmBs0LliWdtuXb9i5dag9QX0lwiQemg3dNFV9FyUyTG4tEFrhbz%2FOtZ4rXQORejuUg36XThDxGUhEcKsx2tqk8kOsA%2Ffvi4tg99hkb1GWmJPwxkyBhq7UYGH%2FdmQVuBk8UN2FP7SlKLH1HbSSd4Oim7WHRwURCyHMbhpT4rf%2B3NokaVqF3lnbOYucMimCCmCmN8BlK%2Bujfth%2BFbt1EUKz5Z8waMiZf1OwxXPV01Ws6J9gPPobCnKUEuYjpjGljDF8EHDF3%2B0ihJYZnzxvL02p3eHsV101AaxgazmE79GLgmUmYrTaiNiGFoQrEPbatkW9JBjeTTJargKAYiOOZ1ubuFPvrM4kNloSuuaFRfQPaxi4%2BPeYMP427T2Gdd10dQpfo8LvRVJcLcBkoyrsc8op5V8wza36vgY6pgF90BdbRnF1%2BP4YaHJGP4GMRYDj%2B5sqbLCHycUYfCSG5HCYG4V5SyHrCK%2FxFlUdLX5mpQGP%2BtfBGxLS%2B1t3gEVzKC8aui9Q9%2BO%2F0nZpcYbzE1oMmmyREZjLXueQvF7muQCME449A%2B5M9U0physwlN67kQRVYYhKTgUv5KWgblrkcAFwj8QAJW93AMW%2FpAdbGQF5KrWCkDi9ZdO3fYIGKc7%2B6SVA%2Ffex&X-Amz-Signature=214f42318045ab0f1fd090d1ddc4a336526e79b597e4b4b5626ebca28c7497f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKXIMJSG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDKzDN6Roh%2F2zmhncvcLo1iPv9GHGAiigWQ%2B0jdvGqWKAiAiMwrczyJqX8VbExZFYPuTmd00uCmvbQjFBrDfbDfDGyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FpAzIc8GLauJm1jKtwDYk04ih6LuVdORbQJKoOM8D1YjO1VCzixLcrjaUKeT6tWPg%2FXDSDBNGQrHdo92ulbTWbe2g2sGcH0bcQVjloEWpVI4BsQR%2BFl1yPmn8su6VJp%2FITp%2F0rHfGGL53t7BD8szil3uDHl5nqt3t5M%2Fl%2F25Vg%2Fb2p0leHrr2xoAEHi1UatIWMzsGBfKKY61X1LSV%2ByPMTaPZ6V1t5%2B%2FXAhE0Pg%2F0Pb1sEnMBm%2FytSUmBs0LliWdtuXb9i5dag9QX0lwiQemg3dNFV9FyUyTG4tEFrhbz%2FOtZ4rXQORejuUg36XThDxGUhEcKsx2tqk8kOsA%2Ffvi4tg99hkb1GWmJPwxkyBhq7UYGH%2FdmQVuBk8UN2FP7SlKLH1HbSSd4Oim7WHRwURCyHMbhpT4rf%2B3NokaVqF3lnbOYucMimCCmCmN8BlK%2Bujfth%2BFbt1EUKz5Z8waMiZf1OwxXPV01Ws6J9gPPobCnKUEuYjpjGljDF8EHDF3%2B0ihJYZnzxvL02p3eHsV101AaxgazmE79GLgmUmYrTaiNiGFoQrEPbatkW9JBjeTTJargKAYiOOZ1ubuFPvrM4kNloSuuaFRfQPaxi4%2BPeYMP427T2Gdd10dQpfo8LvRVJcLcBkoyrsc8op5V8wza36vgY6pgF90BdbRnF1%2BP4YaHJGP4GMRYDj%2B5sqbLCHycUYfCSG5HCYG4V5SyHrCK%2FxFlUdLX5mpQGP%2BtfBGxLS%2B1t3gEVzKC8aui9Q9%2BO%2F0nZpcYbzE1oMmmyREZjLXueQvF7muQCME449A%2B5M9U0physwlN67kQRVYYhKTgUv5KWgblrkcAFwj8QAJW93AMW%2FpAdbGQF5KrWCkDi9ZdO3fYIGKc7%2B6SVA%2Ffex&X-Amz-Signature=02aea5ee50e2a3c1b2fb88a145444fa9a6657197f4282e613e63f3ca87b1c97d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKXIMJSG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDKzDN6Roh%2F2zmhncvcLo1iPv9GHGAiigWQ%2B0jdvGqWKAiAiMwrczyJqX8VbExZFYPuTmd00uCmvbQjFBrDfbDfDGyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FpAzIc8GLauJm1jKtwDYk04ih6LuVdORbQJKoOM8D1YjO1VCzixLcrjaUKeT6tWPg%2FXDSDBNGQrHdo92ulbTWbe2g2sGcH0bcQVjloEWpVI4BsQR%2BFl1yPmn8su6VJp%2FITp%2F0rHfGGL53t7BD8szil3uDHl5nqt3t5M%2Fl%2F25Vg%2Fb2p0leHrr2xoAEHi1UatIWMzsGBfKKY61X1LSV%2ByPMTaPZ6V1t5%2B%2FXAhE0Pg%2F0Pb1sEnMBm%2FytSUmBs0LliWdtuXb9i5dag9QX0lwiQemg3dNFV9FyUyTG4tEFrhbz%2FOtZ4rXQORejuUg36XThDxGUhEcKsx2tqk8kOsA%2Ffvi4tg99hkb1GWmJPwxkyBhq7UYGH%2FdmQVuBk8UN2FP7SlKLH1HbSSd4Oim7WHRwURCyHMbhpT4rf%2B3NokaVqF3lnbOYucMimCCmCmN8BlK%2Bujfth%2BFbt1EUKz5Z8waMiZf1OwxXPV01Ws6J9gPPobCnKUEuYjpjGljDF8EHDF3%2B0ihJYZnzxvL02p3eHsV101AaxgazmE79GLgmUmYrTaiNiGFoQrEPbatkW9JBjeTTJargKAYiOOZ1ubuFPvrM4kNloSuuaFRfQPaxi4%2BPeYMP427T2Gdd10dQpfo8LvRVJcLcBkoyrsc8op5V8wza36vgY6pgF90BdbRnF1%2BP4YaHJGP4GMRYDj%2B5sqbLCHycUYfCSG5HCYG4V5SyHrCK%2FxFlUdLX5mpQGP%2BtfBGxLS%2B1t3gEVzKC8aui9Q9%2BO%2F0nZpcYbzE1oMmmyREZjLXueQvF7muQCME449A%2B5M9U0physwlN67kQRVYYhKTgUv5KWgblrkcAFwj8QAJW93AMW%2FpAdbGQF5KrWCkDi9ZdO3fYIGKc7%2B6SVA%2Ffex&X-Amz-Signature=37c7e4718e626586ee63bd5f7936c74d50e37de39e81f8da6fc6d4f4631e8553&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKXIMJSG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDKzDN6Roh%2F2zmhncvcLo1iPv9GHGAiigWQ%2B0jdvGqWKAiAiMwrczyJqX8VbExZFYPuTmd00uCmvbQjFBrDfbDfDGyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FpAzIc8GLauJm1jKtwDYk04ih6LuVdORbQJKoOM8D1YjO1VCzixLcrjaUKeT6tWPg%2FXDSDBNGQrHdo92ulbTWbe2g2sGcH0bcQVjloEWpVI4BsQR%2BFl1yPmn8su6VJp%2FITp%2F0rHfGGL53t7BD8szil3uDHl5nqt3t5M%2Fl%2F25Vg%2Fb2p0leHrr2xoAEHi1UatIWMzsGBfKKY61X1LSV%2ByPMTaPZ6V1t5%2B%2FXAhE0Pg%2F0Pb1sEnMBm%2FytSUmBs0LliWdtuXb9i5dag9QX0lwiQemg3dNFV9FyUyTG4tEFrhbz%2FOtZ4rXQORejuUg36XThDxGUhEcKsx2tqk8kOsA%2Ffvi4tg99hkb1GWmJPwxkyBhq7UYGH%2FdmQVuBk8UN2FP7SlKLH1HbSSd4Oim7WHRwURCyHMbhpT4rf%2B3NokaVqF3lnbOYucMimCCmCmN8BlK%2Bujfth%2BFbt1EUKz5Z8waMiZf1OwxXPV01Ws6J9gPPobCnKUEuYjpjGljDF8EHDF3%2B0ihJYZnzxvL02p3eHsV101AaxgazmE79GLgmUmYrTaiNiGFoQrEPbatkW9JBjeTTJargKAYiOOZ1ubuFPvrM4kNloSuuaFRfQPaxi4%2BPeYMP427T2Gdd10dQpfo8LvRVJcLcBkoyrsc8op5V8wza36vgY6pgF90BdbRnF1%2BP4YaHJGP4GMRYDj%2B5sqbLCHycUYfCSG5HCYG4V5SyHrCK%2FxFlUdLX5mpQGP%2BtfBGxLS%2B1t3gEVzKC8aui9Q9%2BO%2F0nZpcYbzE1oMmmyREZjLXueQvF7muQCME449A%2B5M9U0physwlN67kQRVYYhKTgUv5KWgblrkcAFwj8QAJW93AMW%2FpAdbGQF5KrWCkDi9ZdO3fYIGKc7%2B6SVA%2Ffex&X-Amz-Signature=76244e3875e1b5e5ed029b7f7828890abf6ff5b878a08079a76ca1dff8554407&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKXIMJSG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDKzDN6Roh%2F2zmhncvcLo1iPv9GHGAiigWQ%2B0jdvGqWKAiAiMwrczyJqX8VbExZFYPuTmd00uCmvbQjFBrDfbDfDGyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FpAzIc8GLauJm1jKtwDYk04ih6LuVdORbQJKoOM8D1YjO1VCzixLcrjaUKeT6tWPg%2FXDSDBNGQrHdo92ulbTWbe2g2sGcH0bcQVjloEWpVI4BsQR%2BFl1yPmn8su6VJp%2FITp%2F0rHfGGL53t7BD8szil3uDHl5nqt3t5M%2Fl%2F25Vg%2Fb2p0leHrr2xoAEHi1UatIWMzsGBfKKY61X1LSV%2ByPMTaPZ6V1t5%2B%2FXAhE0Pg%2F0Pb1sEnMBm%2FytSUmBs0LliWdtuXb9i5dag9QX0lwiQemg3dNFV9FyUyTG4tEFrhbz%2FOtZ4rXQORejuUg36XThDxGUhEcKsx2tqk8kOsA%2Ffvi4tg99hkb1GWmJPwxkyBhq7UYGH%2FdmQVuBk8UN2FP7SlKLH1HbSSd4Oim7WHRwURCyHMbhpT4rf%2B3NokaVqF3lnbOYucMimCCmCmN8BlK%2Bujfth%2BFbt1EUKz5Z8waMiZf1OwxXPV01Ws6J9gPPobCnKUEuYjpjGljDF8EHDF3%2B0ihJYZnzxvL02p3eHsV101AaxgazmE79GLgmUmYrTaiNiGFoQrEPbatkW9JBjeTTJargKAYiOOZ1ubuFPvrM4kNloSuuaFRfQPaxi4%2BPeYMP427T2Gdd10dQpfo8LvRVJcLcBkoyrsc8op5V8wza36vgY6pgF90BdbRnF1%2BP4YaHJGP4GMRYDj%2B5sqbLCHycUYfCSG5HCYG4V5SyHrCK%2FxFlUdLX5mpQGP%2BtfBGxLS%2B1t3gEVzKC8aui9Q9%2BO%2F0nZpcYbzE1oMmmyREZjLXueQvF7muQCME449A%2B5M9U0physwlN67kQRVYYhKTgUv5KWgblrkcAFwj8QAJW93AMW%2FpAdbGQF5KrWCkDi9ZdO3fYIGKc7%2B6SVA%2Ffex&X-Amz-Signature=5f31dcfb9483ad43673e6b4cfc3b10c52c65a4c07877da287ef60c2e6da83b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKXIMJSG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDKzDN6Roh%2F2zmhncvcLo1iPv9GHGAiigWQ%2B0jdvGqWKAiAiMwrczyJqX8VbExZFYPuTmd00uCmvbQjFBrDfbDfDGyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FpAzIc8GLauJm1jKtwDYk04ih6LuVdORbQJKoOM8D1YjO1VCzixLcrjaUKeT6tWPg%2FXDSDBNGQrHdo92ulbTWbe2g2sGcH0bcQVjloEWpVI4BsQR%2BFl1yPmn8su6VJp%2FITp%2F0rHfGGL53t7BD8szil3uDHl5nqt3t5M%2Fl%2F25Vg%2Fb2p0leHrr2xoAEHi1UatIWMzsGBfKKY61X1LSV%2ByPMTaPZ6V1t5%2B%2FXAhE0Pg%2F0Pb1sEnMBm%2FytSUmBs0LliWdtuXb9i5dag9QX0lwiQemg3dNFV9FyUyTG4tEFrhbz%2FOtZ4rXQORejuUg36XThDxGUhEcKsx2tqk8kOsA%2Ffvi4tg99hkb1GWmJPwxkyBhq7UYGH%2FdmQVuBk8UN2FP7SlKLH1HbSSd4Oim7WHRwURCyHMbhpT4rf%2B3NokaVqF3lnbOYucMimCCmCmN8BlK%2Bujfth%2BFbt1EUKz5Z8waMiZf1OwxXPV01Ws6J9gPPobCnKUEuYjpjGljDF8EHDF3%2B0ihJYZnzxvL02p3eHsV101AaxgazmE79GLgmUmYrTaiNiGFoQrEPbatkW9JBjeTTJargKAYiOOZ1ubuFPvrM4kNloSuuaFRfQPaxi4%2BPeYMP427T2Gdd10dQpfo8LvRVJcLcBkoyrsc8op5V8wza36vgY6pgF90BdbRnF1%2BP4YaHJGP4GMRYDj%2B5sqbLCHycUYfCSG5HCYG4V5SyHrCK%2FxFlUdLX5mpQGP%2BtfBGxLS%2B1t3gEVzKC8aui9Q9%2BO%2F0nZpcYbzE1oMmmyREZjLXueQvF7muQCME449A%2B5M9U0physwlN67kQRVYYhKTgUv5KWgblrkcAFwj8QAJW93AMW%2FpAdbGQF5KrWCkDi9ZdO3fYIGKc7%2B6SVA%2Ffex&X-Amz-Signature=8fc2c3d9d4d1212698bf0ceb91c6eb660adaa51bb78923a04fce9ce2b015a42d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKXIMJSG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDKzDN6Roh%2F2zmhncvcLo1iPv9GHGAiigWQ%2B0jdvGqWKAiAiMwrczyJqX8VbExZFYPuTmd00uCmvbQjFBrDfbDfDGyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FpAzIc8GLauJm1jKtwDYk04ih6LuVdORbQJKoOM8D1YjO1VCzixLcrjaUKeT6tWPg%2FXDSDBNGQrHdo92ulbTWbe2g2sGcH0bcQVjloEWpVI4BsQR%2BFl1yPmn8su6VJp%2FITp%2F0rHfGGL53t7BD8szil3uDHl5nqt3t5M%2Fl%2F25Vg%2Fb2p0leHrr2xoAEHi1UatIWMzsGBfKKY61X1LSV%2ByPMTaPZ6V1t5%2B%2FXAhE0Pg%2F0Pb1sEnMBm%2FytSUmBs0LliWdtuXb9i5dag9QX0lwiQemg3dNFV9FyUyTG4tEFrhbz%2FOtZ4rXQORejuUg36XThDxGUhEcKsx2tqk8kOsA%2Ffvi4tg99hkb1GWmJPwxkyBhq7UYGH%2FdmQVuBk8UN2FP7SlKLH1HbSSd4Oim7WHRwURCyHMbhpT4rf%2B3NokaVqF3lnbOYucMimCCmCmN8BlK%2Bujfth%2BFbt1EUKz5Z8waMiZf1OwxXPV01Ws6J9gPPobCnKUEuYjpjGljDF8EHDF3%2B0ihJYZnzxvL02p3eHsV101AaxgazmE79GLgmUmYrTaiNiGFoQrEPbatkW9JBjeTTJargKAYiOOZ1ubuFPvrM4kNloSuuaFRfQPaxi4%2BPeYMP427T2Gdd10dQpfo8LvRVJcLcBkoyrsc8op5V8wza36vgY6pgF90BdbRnF1%2BP4YaHJGP4GMRYDj%2B5sqbLCHycUYfCSG5HCYG4V5SyHrCK%2FxFlUdLX5mpQGP%2BtfBGxLS%2B1t3gEVzKC8aui9Q9%2BO%2F0nZpcYbzE1oMmmyREZjLXueQvF7muQCME449A%2B5M9U0physwlN67kQRVYYhKTgUv5KWgblrkcAFwj8QAJW93AMW%2FpAdbGQF5KrWCkDi9ZdO3fYIGKc7%2B6SVA%2Ffex&X-Amz-Signature=603bc6685501242506066fdf5a50c8441c5dd702909cc3a0ff9a9245869696ea&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
