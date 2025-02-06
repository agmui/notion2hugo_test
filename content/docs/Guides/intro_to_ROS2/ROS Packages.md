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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QSQ4ELR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA2hRuBQ5v7CA9iufGc1wAy%2BaCAvhBQf0doVuh1dG%2FDVAiAwqW0EjaGGmGV8jA1BOMM%2FUdgI1aFYXc9mS%2F7P7uqMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMEmNvKhumLXj3fcyvKtwDX9CA2XV0LDdetojG2TYfNfjkCu%2FgA4pSZYfOiBiFuQgo4AM52pKbCh4dS9e%2FHBcKjnbzNE8S9ZS%2Bujg2BezDGuM%2FR1eU0ApD%2Fr65kj1KtExJOZN%2BBKHjtzTpnteEGi7UBp26AnnQTjaXLVedCsQMZQ5fWxk9%2FoQ3EWUOv7Osx8bYSPOAA6c8M%2BsIFW%2BtfXiAzuMjukhK5%2Fbx%2BCjI5Qq%2BM%2BFJE8xcAsFFjU%2FmddzVEeT6mjoDSaaqc3FY64lyjtPF1t%2Baaz1lZnwRbuc5a8CHby6JO%2BtNOFGr0c0Vcz%2FBWww4B1HONl8c9AoKn2Ye1vFhCD8Y3N6G9aDZdpoaThU%2ByxMdXRKj3wEJ6R6NC9dkggfTb9cYsWjTEYDz91EFoVA5LhMtfD0td8f2xYgQccpwBWHeCRuT3wckGbh7WedR%2BUhNSelkuiIWATP2DcRG0NfGGoMQOKmDqn0qSyfi2GZ%2BBevXumxR5MfGzlLc%2F3sb%2FMTfy4FvEVL1ImnvCTlKkRRXaRI%2BeqLpwbnr6CHr4o7trY%2BOlb88M3TtpnvKNYMBMHLkkS21%2F5R5JEnUf%2FUzGRfoOtPEJClcA%2B1Ya4BTz6QTKDu6m%2BoDUSAk2%2FxJm9KtYDkgOjIGWOX1D4ViW7Aw6u2RvQY6pgGnbUFbLL%2Fu0Q%2FoAtM0ITfuasXUIIc%2FCq%2Bp6%2BtDjfUKsEbvB4d7pJbcRFgv8u1M9PWBOvcL%2BEV%2BlpWz4enNy6DTrPXx7tloXY8fcESe%2Bz81FzrhHaDhxyk45DAiTOeNY8Zsdc1k4MorvDuhXj9RUOBVd2FLg0WToeClOa%2F29gy46DVH%2BTGm2ss0bGqXWsIQ3cVllsR5r24Gyh2FBBYNwmii94K0OzB%2B&X-Amz-Signature=4c6ffd9f3d8e1fb2bfe2c71a98322e2b16517cfe84a078783bb8bf528b49d286&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QSQ4ELR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA2hRuBQ5v7CA9iufGc1wAy%2BaCAvhBQf0doVuh1dG%2FDVAiAwqW0EjaGGmGV8jA1BOMM%2FUdgI1aFYXc9mS%2F7P7uqMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMEmNvKhumLXj3fcyvKtwDX9CA2XV0LDdetojG2TYfNfjkCu%2FgA4pSZYfOiBiFuQgo4AM52pKbCh4dS9e%2FHBcKjnbzNE8S9ZS%2Bujg2BezDGuM%2FR1eU0ApD%2Fr65kj1KtExJOZN%2BBKHjtzTpnteEGi7UBp26AnnQTjaXLVedCsQMZQ5fWxk9%2FoQ3EWUOv7Osx8bYSPOAA6c8M%2BsIFW%2BtfXiAzuMjukhK5%2Fbx%2BCjI5Qq%2BM%2BFJE8xcAsFFjU%2FmddzVEeT6mjoDSaaqc3FY64lyjtPF1t%2Baaz1lZnwRbuc5a8CHby6JO%2BtNOFGr0c0Vcz%2FBWww4B1HONl8c9AoKn2Ye1vFhCD8Y3N6G9aDZdpoaThU%2ByxMdXRKj3wEJ6R6NC9dkggfTb9cYsWjTEYDz91EFoVA5LhMtfD0td8f2xYgQccpwBWHeCRuT3wckGbh7WedR%2BUhNSelkuiIWATP2DcRG0NfGGoMQOKmDqn0qSyfi2GZ%2BBevXumxR5MfGzlLc%2F3sb%2FMTfy4FvEVL1ImnvCTlKkRRXaRI%2BeqLpwbnr6CHr4o7trY%2BOlb88M3TtpnvKNYMBMHLkkS21%2F5R5JEnUf%2FUzGRfoOtPEJClcA%2B1Ya4BTz6QTKDu6m%2BoDUSAk2%2FxJm9KtYDkgOjIGWOX1D4ViW7Aw6u2RvQY6pgGnbUFbLL%2Fu0Q%2FoAtM0ITfuasXUIIc%2FCq%2Bp6%2BtDjfUKsEbvB4d7pJbcRFgv8u1M9PWBOvcL%2BEV%2BlpWz4enNy6DTrPXx7tloXY8fcESe%2Bz81FzrhHaDhxyk45DAiTOeNY8Zsdc1k4MorvDuhXj9RUOBVd2FLg0WToeClOa%2F29gy46DVH%2BTGm2ss0bGqXWsIQ3cVllsR5r24Gyh2FBBYNwmii94K0OzB%2B&X-Amz-Signature=2c07052d719a4fd75fc11f30fc8303804d7be66a973dcf4e61ef76b77795f5ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QSQ4ELR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA2hRuBQ5v7CA9iufGc1wAy%2BaCAvhBQf0doVuh1dG%2FDVAiAwqW0EjaGGmGV8jA1BOMM%2FUdgI1aFYXc9mS%2F7P7uqMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMEmNvKhumLXj3fcyvKtwDX9CA2XV0LDdetojG2TYfNfjkCu%2FgA4pSZYfOiBiFuQgo4AM52pKbCh4dS9e%2FHBcKjnbzNE8S9ZS%2Bujg2BezDGuM%2FR1eU0ApD%2Fr65kj1KtExJOZN%2BBKHjtzTpnteEGi7UBp26AnnQTjaXLVedCsQMZQ5fWxk9%2FoQ3EWUOv7Osx8bYSPOAA6c8M%2BsIFW%2BtfXiAzuMjukhK5%2Fbx%2BCjI5Qq%2BM%2BFJE8xcAsFFjU%2FmddzVEeT6mjoDSaaqc3FY64lyjtPF1t%2Baaz1lZnwRbuc5a8CHby6JO%2BtNOFGr0c0Vcz%2FBWww4B1HONl8c9AoKn2Ye1vFhCD8Y3N6G9aDZdpoaThU%2ByxMdXRKj3wEJ6R6NC9dkggfTb9cYsWjTEYDz91EFoVA5LhMtfD0td8f2xYgQccpwBWHeCRuT3wckGbh7WedR%2BUhNSelkuiIWATP2DcRG0NfGGoMQOKmDqn0qSyfi2GZ%2BBevXumxR5MfGzlLc%2F3sb%2FMTfy4FvEVL1ImnvCTlKkRRXaRI%2BeqLpwbnr6CHr4o7trY%2BOlb88M3TtpnvKNYMBMHLkkS21%2F5R5JEnUf%2FUzGRfoOtPEJClcA%2B1Ya4BTz6QTKDu6m%2BoDUSAk2%2FxJm9KtYDkgOjIGWOX1D4ViW7Aw6u2RvQY6pgGnbUFbLL%2Fu0Q%2FoAtM0ITfuasXUIIc%2FCq%2Bp6%2BtDjfUKsEbvB4d7pJbcRFgv8u1M9PWBOvcL%2BEV%2BlpWz4enNy6DTrPXx7tloXY8fcESe%2Bz81FzrhHaDhxyk45DAiTOeNY8Zsdc1k4MorvDuhXj9RUOBVd2FLg0WToeClOa%2F29gy46DVH%2BTGm2ss0bGqXWsIQ3cVllsR5r24Gyh2FBBYNwmii94K0OzB%2B&X-Amz-Signature=2c7a922f83e8621ba02ec0d6366e084fe7d9cc0f028c6c6452d3215c0cac89ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QSQ4ELR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA2hRuBQ5v7CA9iufGc1wAy%2BaCAvhBQf0doVuh1dG%2FDVAiAwqW0EjaGGmGV8jA1BOMM%2FUdgI1aFYXc9mS%2F7P7uqMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMEmNvKhumLXj3fcyvKtwDX9CA2XV0LDdetojG2TYfNfjkCu%2FgA4pSZYfOiBiFuQgo4AM52pKbCh4dS9e%2FHBcKjnbzNE8S9ZS%2Bujg2BezDGuM%2FR1eU0ApD%2Fr65kj1KtExJOZN%2BBKHjtzTpnteEGi7UBp26AnnQTjaXLVedCsQMZQ5fWxk9%2FoQ3EWUOv7Osx8bYSPOAA6c8M%2BsIFW%2BtfXiAzuMjukhK5%2Fbx%2BCjI5Qq%2BM%2BFJE8xcAsFFjU%2FmddzVEeT6mjoDSaaqc3FY64lyjtPF1t%2Baaz1lZnwRbuc5a8CHby6JO%2BtNOFGr0c0Vcz%2FBWww4B1HONl8c9AoKn2Ye1vFhCD8Y3N6G9aDZdpoaThU%2ByxMdXRKj3wEJ6R6NC9dkggfTb9cYsWjTEYDz91EFoVA5LhMtfD0td8f2xYgQccpwBWHeCRuT3wckGbh7WedR%2BUhNSelkuiIWATP2DcRG0NfGGoMQOKmDqn0qSyfi2GZ%2BBevXumxR5MfGzlLc%2F3sb%2FMTfy4FvEVL1ImnvCTlKkRRXaRI%2BeqLpwbnr6CHr4o7trY%2BOlb88M3TtpnvKNYMBMHLkkS21%2F5R5JEnUf%2FUzGRfoOtPEJClcA%2B1Ya4BTz6QTKDu6m%2BoDUSAk2%2FxJm9KtYDkgOjIGWOX1D4ViW7Aw6u2RvQY6pgGnbUFbLL%2Fu0Q%2FoAtM0ITfuasXUIIc%2FCq%2Bp6%2BtDjfUKsEbvB4d7pJbcRFgv8u1M9PWBOvcL%2BEV%2BlpWz4enNy6DTrPXx7tloXY8fcESe%2Bz81FzrhHaDhxyk45DAiTOeNY8Zsdc1k4MorvDuhXj9RUOBVd2FLg0WToeClOa%2F29gy46DVH%2BTGm2ss0bGqXWsIQ3cVllsR5r24Gyh2FBBYNwmii94K0OzB%2B&X-Amz-Signature=7f1b2e13f9fcb711d10078d9aeca4d1b69a415e4acaab401673e5ee269705fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QSQ4ELR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA2hRuBQ5v7CA9iufGc1wAy%2BaCAvhBQf0doVuh1dG%2FDVAiAwqW0EjaGGmGV8jA1BOMM%2FUdgI1aFYXc9mS%2F7P7uqMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMEmNvKhumLXj3fcyvKtwDX9CA2XV0LDdetojG2TYfNfjkCu%2FgA4pSZYfOiBiFuQgo4AM52pKbCh4dS9e%2FHBcKjnbzNE8S9ZS%2Bujg2BezDGuM%2FR1eU0ApD%2Fr65kj1KtExJOZN%2BBKHjtzTpnteEGi7UBp26AnnQTjaXLVedCsQMZQ5fWxk9%2FoQ3EWUOv7Osx8bYSPOAA6c8M%2BsIFW%2BtfXiAzuMjukhK5%2Fbx%2BCjI5Qq%2BM%2BFJE8xcAsFFjU%2FmddzVEeT6mjoDSaaqc3FY64lyjtPF1t%2Baaz1lZnwRbuc5a8CHby6JO%2BtNOFGr0c0Vcz%2FBWww4B1HONl8c9AoKn2Ye1vFhCD8Y3N6G9aDZdpoaThU%2ByxMdXRKj3wEJ6R6NC9dkggfTb9cYsWjTEYDz91EFoVA5LhMtfD0td8f2xYgQccpwBWHeCRuT3wckGbh7WedR%2BUhNSelkuiIWATP2DcRG0NfGGoMQOKmDqn0qSyfi2GZ%2BBevXumxR5MfGzlLc%2F3sb%2FMTfy4FvEVL1ImnvCTlKkRRXaRI%2BeqLpwbnr6CHr4o7trY%2BOlb88M3TtpnvKNYMBMHLkkS21%2F5R5JEnUf%2FUzGRfoOtPEJClcA%2B1Ya4BTz6QTKDu6m%2BoDUSAk2%2FxJm9KtYDkgOjIGWOX1D4ViW7Aw6u2RvQY6pgGnbUFbLL%2Fu0Q%2FoAtM0ITfuasXUIIc%2FCq%2Bp6%2BtDjfUKsEbvB4d7pJbcRFgv8u1M9PWBOvcL%2BEV%2BlpWz4enNy6DTrPXx7tloXY8fcESe%2Bz81FzrhHaDhxyk45DAiTOeNY8Zsdc1k4MorvDuhXj9RUOBVd2FLg0WToeClOa%2F29gy46DVH%2BTGm2ss0bGqXWsIQ3cVllsR5r24Gyh2FBBYNwmii94K0OzB%2B&X-Amz-Signature=593f801eee17b5bf638b95b1c3691e956fa44719d8778767d72db8ee0c28e078&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QSQ4ELR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA2hRuBQ5v7CA9iufGc1wAy%2BaCAvhBQf0doVuh1dG%2FDVAiAwqW0EjaGGmGV8jA1BOMM%2FUdgI1aFYXc9mS%2F7P7uqMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMEmNvKhumLXj3fcyvKtwDX9CA2XV0LDdetojG2TYfNfjkCu%2FgA4pSZYfOiBiFuQgo4AM52pKbCh4dS9e%2FHBcKjnbzNE8S9ZS%2Bujg2BezDGuM%2FR1eU0ApD%2Fr65kj1KtExJOZN%2BBKHjtzTpnteEGi7UBp26AnnQTjaXLVedCsQMZQ5fWxk9%2FoQ3EWUOv7Osx8bYSPOAA6c8M%2BsIFW%2BtfXiAzuMjukhK5%2Fbx%2BCjI5Qq%2BM%2BFJE8xcAsFFjU%2FmddzVEeT6mjoDSaaqc3FY64lyjtPF1t%2Baaz1lZnwRbuc5a8CHby6JO%2BtNOFGr0c0Vcz%2FBWww4B1HONl8c9AoKn2Ye1vFhCD8Y3N6G9aDZdpoaThU%2ByxMdXRKj3wEJ6R6NC9dkggfTb9cYsWjTEYDz91EFoVA5LhMtfD0td8f2xYgQccpwBWHeCRuT3wckGbh7WedR%2BUhNSelkuiIWATP2DcRG0NfGGoMQOKmDqn0qSyfi2GZ%2BBevXumxR5MfGzlLc%2F3sb%2FMTfy4FvEVL1ImnvCTlKkRRXaRI%2BeqLpwbnr6CHr4o7trY%2BOlb88M3TtpnvKNYMBMHLkkS21%2F5R5JEnUf%2FUzGRfoOtPEJClcA%2B1Ya4BTz6QTKDu6m%2BoDUSAk2%2FxJm9KtYDkgOjIGWOX1D4ViW7Aw6u2RvQY6pgGnbUFbLL%2Fu0Q%2FoAtM0ITfuasXUIIc%2FCq%2Bp6%2BtDjfUKsEbvB4d7pJbcRFgv8u1M9PWBOvcL%2BEV%2BlpWz4enNy6DTrPXx7tloXY8fcESe%2Bz81FzrhHaDhxyk45DAiTOeNY8Zsdc1k4MorvDuhXj9RUOBVd2FLg0WToeClOa%2F29gy46DVH%2BTGm2ss0bGqXWsIQ3cVllsR5r24Gyh2FBBYNwmii94K0OzB%2B&X-Amz-Signature=19838c8eec77d4c5427f34036367fb7b1ea3593f5087d854f4d13a7e288b29c2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QSQ4ELR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA2hRuBQ5v7CA9iufGc1wAy%2BaCAvhBQf0doVuh1dG%2FDVAiAwqW0EjaGGmGV8jA1BOMM%2FUdgI1aFYXc9mS%2F7P7uqMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMEmNvKhumLXj3fcyvKtwDX9CA2XV0LDdetojG2TYfNfjkCu%2FgA4pSZYfOiBiFuQgo4AM52pKbCh4dS9e%2FHBcKjnbzNE8S9ZS%2Bujg2BezDGuM%2FR1eU0ApD%2Fr65kj1KtExJOZN%2BBKHjtzTpnteEGi7UBp26AnnQTjaXLVedCsQMZQ5fWxk9%2FoQ3EWUOv7Osx8bYSPOAA6c8M%2BsIFW%2BtfXiAzuMjukhK5%2Fbx%2BCjI5Qq%2BM%2BFJE8xcAsFFjU%2FmddzVEeT6mjoDSaaqc3FY64lyjtPF1t%2Baaz1lZnwRbuc5a8CHby6JO%2BtNOFGr0c0Vcz%2FBWww4B1HONl8c9AoKn2Ye1vFhCD8Y3N6G9aDZdpoaThU%2ByxMdXRKj3wEJ6R6NC9dkggfTb9cYsWjTEYDz91EFoVA5LhMtfD0td8f2xYgQccpwBWHeCRuT3wckGbh7WedR%2BUhNSelkuiIWATP2DcRG0NfGGoMQOKmDqn0qSyfi2GZ%2BBevXumxR5MfGzlLc%2F3sb%2FMTfy4FvEVL1ImnvCTlKkRRXaRI%2BeqLpwbnr6CHr4o7trY%2BOlb88M3TtpnvKNYMBMHLkkS21%2F5R5JEnUf%2FUzGRfoOtPEJClcA%2B1Ya4BTz6QTKDu6m%2BoDUSAk2%2FxJm9KtYDkgOjIGWOX1D4ViW7Aw6u2RvQY6pgGnbUFbLL%2Fu0Q%2FoAtM0ITfuasXUIIc%2FCq%2Bp6%2BtDjfUKsEbvB4d7pJbcRFgv8u1M9PWBOvcL%2BEV%2BlpWz4enNy6DTrPXx7tloXY8fcESe%2Bz81FzrhHaDhxyk45DAiTOeNY8Zsdc1k4MorvDuhXj9RUOBVd2FLg0WToeClOa%2F29gy46DVH%2BTGm2ss0bGqXWsIQ3cVllsR5r24Gyh2FBBYNwmii94K0OzB%2B&X-Amz-Signature=012ff116d11772fa9865b3b5d814ab41b0a3695e50251d6333223a25a32e1e43&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
