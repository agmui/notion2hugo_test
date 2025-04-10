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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAUO3YU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFB5atmw5kVF7ILwuh0xx0petFkHXJlzei8T1Rbf0f0OAiEAjB61QDxGPJwQhdh7wqc2LdpPlSL%2ByYvTpAZiQwOwrfIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGS6p5vZOctDZVY3CrcA5SDGwlqkueqVr5XtJfmwsiHyeuHZwaSTOdjtOAQMXzqCTMIc2TuSSYrqhumUUnVqhcxpthtdEfiQiyI9OJJP%2FFcq%2BK%2Bz%2BWa8eMeJMc5IYcCt2ePQG3u2R4m750PjBHB6lwnS28S2CbvQwgLg9XmoNxmzg0w3s5bZe70RfIaTfQ%2Blq1gAipJ6C3cyPhYWecv2w8O%2FKup1J%2FVW%2BkUzMPaoPCBTD8Yxk7mZ54fb9XeJgH6G9SSVhfu1TWCuJz%2B0WouzdCikCrTbvmuFDFxRTEeakwQ0QF0uxN2GtHG4hJWWCJqmpczwOa5DQeyIJfeXu0FxPnU894fS3%2BJIuOtVU83Fo%2BBX%2BzKXh9%2FBHEciELXn3Xjetj%2B8xbqYTO5G6xpFSmzSetXl%2FJc%2Bs4XBNaCtljjXtN7gtqzjWdUCSVL5FzCM%2BUjNCxuU5HqfTaWVaIhpxThDXWzB7p%2BQ1%2BDBrCV22T5PYn1CqQn6ti5F%2B1xXgeCsmJ0h28CwefWzS65nPasiRUk7uW6ESmXFvn3I9OrllC%2B5E6nDfGA74NWh7aXyDXrcemh01rJx2uS8%2BTcfv3bx4UmYOyWAIiML1lBbeSXHSgSQBF2oz54OQArnnuoNKTeIY%2FhzrFyQYEA11iViz38MMah4L8GOqUBEt5nL3Q28Umh2G7osNcUvNbp%2BXc%2Bv%2FlGbT36lYLc4gUB2LF6TG2azI8wqVecLcKQZZu1KiqmhwBzMIGgPgUMaIUkVbKhtbKFGTBK4%2FlOqBwLwUzyB35deJzyar75mTwoFTIyFvh1DW62uvsAm56WehXeni3N4N7lZA36wvPbyOFqjDgrME%2F1ESfRaHqLbc8Y9KmCC9QfsAf8z1fcKNB%2FzTMNUKU4&X-Amz-Signature=4e213a80e19ddb356b231d67c4999c522c2d94e5a5e0a591d4607d50c6ddd815&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAUO3YU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFB5atmw5kVF7ILwuh0xx0petFkHXJlzei8T1Rbf0f0OAiEAjB61QDxGPJwQhdh7wqc2LdpPlSL%2ByYvTpAZiQwOwrfIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGS6p5vZOctDZVY3CrcA5SDGwlqkueqVr5XtJfmwsiHyeuHZwaSTOdjtOAQMXzqCTMIc2TuSSYrqhumUUnVqhcxpthtdEfiQiyI9OJJP%2FFcq%2BK%2Bz%2BWa8eMeJMc5IYcCt2ePQG3u2R4m750PjBHB6lwnS28S2CbvQwgLg9XmoNxmzg0w3s5bZe70RfIaTfQ%2Blq1gAipJ6C3cyPhYWecv2w8O%2FKup1J%2FVW%2BkUzMPaoPCBTD8Yxk7mZ54fb9XeJgH6G9SSVhfu1TWCuJz%2B0WouzdCikCrTbvmuFDFxRTEeakwQ0QF0uxN2GtHG4hJWWCJqmpczwOa5DQeyIJfeXu0FxPnU894fS3%2BJIuOtVU83Fo%2BBX%2BzKXh9%2FBHEciELXn3Xjetj%2B8xbqYTO5G6xpFSmzSetXl%2FJc%2Bs4XBNaCtljjXtN7gtqzjWdUCSVL5FzCM%2BUjNCxuU5HqfTaWVaIhpxThDXWzB7p%2BQ1%2BDBrCV22T5PYn1CqQn6ti5F%2B1xXgeCsmJ0h28CwefWzS65nPasiRUk7uW6ESmXFvn3I9OrllC%2B5E6nDfGA74NWh7aXyDXrcemh01rJx2uS8%2BTcfv3bx4UmYOyWAIiML1lBbeSXHSgSQBF2oz54OQArnnuoNKTeIY%2FhzrFyQYEA11iViz38MMah4L8GOqUBEt5nL3Q28Umh2G7osNcUvNbp%2BXc%2Bv%2FlGbT36lYLc4gUB2LF6TG2azI8wqVecLcKQZZu1KiqmhwBzMIGgPgUMaIUkVbKhtbKFGTBK4%2FlOqBwLwUzyB35deJzyar75mTwoFTIyFvh1DW62uvsAm56WehXeni3N4N7lZA36wvPbyOFqjDgrME%2F1ESfRaHqLbc8Y9KmCC9QfsAf8z1fcKNB%2FzTMNUKU4&X-Amz-Signature=8a250516ee168697f8f3352347c72838e7533728d8cf315f944ae9824c9a3a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAUO3YU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFB5atmw5kVF7ILwuh0xx0petFkHXJlzei8T1Rbf0f0OAiEAjB61QDxGPJwQhdh7wqc2LdpPlSL%2ByYvTpAZiQwOwrfIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGS6p5vZOctDZVY3CrcA5SDGwlqkueqVr5XtJfmwsiHyeuHZwaSTOdjtOAQMXzqCTMIc2TuSSYrqhumUUnVqhcxpthtdEfiQiyI9OJJP%2FFcq%2BK%2Bz%2BWa8eMeJMc5IYcCt2ePQG3u2R4m750PjBHB6lwnS28S2CbvQwgLg9XmoNxmzg0w3s5bZe70RfIaTfQ%2Blq1gAipJ6C3cyPhYWecv2w8O%2FKup1J%2FVW%2BkUzMPaoPCBTD8Yxk7mZ54fb9XeJgH6G9SSVhfu1TWCuJz%2B0WouzdCikCrTbvmuFDFxRTEeakwQ0QF0uxN2GtHG4hJWWCJqmpczwOa5DQeyIJfeXu0FxPnU894fS3%2BJIuOtVU83Fo%2BBX%2BzKXh9%2FBHEciELXn3Xjetj%2B8xbqYTO5G6xpFSmzSetXl%2FJc%2Bs4XBNaCtljjXtN7gtqzjWdUCSVL5FzCM%2BUjNCxuU5HqfTaWVaIhpxThDXWzB7p%2BQ1%2BDBrCV22T5PYn1CqQn6ti5F%2B1xXgeCsmJ0h28CwefWzS65nPasiRUk7uW6ESmXFvn3I9OrllC%2B5E6nDfGA74NWh7aXyDXrcemh01rJx2uS8%2BTcfv3bx4UmYOyWAIiML1lBbeSXHSgSQBF2oz54OQArnnuoNKTeIY%2FhzrFyQYEA11iViz38MMah4L8GOqUBEt5nL3Q28Umh2G7osNcUvNbp%2BXc%2Bv%2FlGbT36lYLc4gUB2LF6TG2azI8wqVecLcKQZZu1KiqmhwBzMIGgPgUMaIUkVbKhtbKFGTBK4%2FlOqBwLwUzyB35deJzyar75mTwoFTIyFvh1DW62uvsAm56WehXeni3N4N7lZA36wvPbyOFqjDgrME%2F1ESfRaHqLbc8Y9KmCC9QfsAf8z1fcKNB%2FzTMNUKU4&X-Amz-Signature=032021280f29fc063523de48b1d13931ec13c9f6348a964d6b62f0640d60717b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAUO3YU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFB5atmw5kVF7ILwuh0xx0petFkHXJlzei8T1Rbf0f0OAiEAjB61QDxGPJwQhdh7wqc2LdpPlSL%2ByYvTpAZiQwOwrfIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGS6p5vZOctDZVY3CrcA5SDGwlqkueqVr5XtJfmwsiHyeuHZwaSTOdjtOAQMXzqCTMIc2TuSSYrqhumUUnVqhcxpthtdEfiQiyI9OJJP%2FFcq%2BK%2Bz%2BWa8eMeJMc5IYcCt2ePQG3u2R4m750PjBHB6lwnS28S2CbvQwgLg9XmoNxmzg0w3s5bZe70RfIaTfQ%2Blq1gAipJ6C3cyPhYWecv2w8O%2FKup1J%2FVW%2BkUzMPaoPCBTD8Yxk7mZ54fb9XeJgH6G9SSVhfu1TWCuJz%2B0WouzdCikCrTbvmuFDFxRTEeakwQ0QF0uxN2GtHG4hJWWCJqmpczwOa5DQeyIJfeXu0FxPnU894fS3%2BJIuOtVU83Fo%2BBX%2BzKXh9%2FBHEciELXn3Xjetj%2B8xbqYTO5G6xpFSmzSetXl%2FJc%2Bs4XBNaCtljjXtN7gtqzjWdUCSVL5FzCM%2BUjNCxuU5HqfTaWVaIhpxThDXWzB7p%2BQ1%2BDBrCV22T5PYn1CqQn6ti5F%2B1xXgeCsmJ0h28CwefWzS65nPasiRUk7uW6ESmXFvn3I9OrllC%2B5E6nDfGA74NWh7aXyDXrcemh01rJx2uS8%2BTcfv3bx4UmYOyWAIiML1lBbeSXHSgSQBF2oz54OQArnnuoNKTeIY%2FhzrFyQYEA11iViz38MMah4L8GOqUBEt5nL3Q28Umh2G7osNcUvNbp%2BXc%2Bv%2FlGbT36lYLc4gUB2LF6TG2azI8wqVecLcKQZZu1KiqmhwBzMIGgPgUMaIUkVbKhtbKFGTBK4%2FlOqBwLwUzyB35deJzyar75mTwoFTIyFvh1DW62uvsAm56WehXeni3N4N7lZA36wvPbyOFqjDgrME%2F1ESfRaHqLbc8Y9KmCC9QfsAf8z1fcKNB%2FzTMNUKU4&X-Amz-Signature=db1db583d77082ae890226b21e6e3c48adfded0f6b19dcca205370fe6ec02606&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAUO3YU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFB5atmw5kVF7ILwuh0xx0petFkHXJlzei8T1Rbf0f0OAiEAjB61QDxGPJwQhdh7wqc2LdpPlSL%2ByYvTpAZiQwOwrfIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGS6p5vZOctDZVY3CrcA5SDGwlqkueqVr5XtJfmwsiHyeuHZwaSTOdjtOAQMXzqCTMIc2TuSSYrqhumUUnVqhcxpthtdEfiQiyI9OJJP%2FFcq%2BK%2Bz%2BWa8eMeJMc5IYcCt2ePQG3u2R4m750PjBHB6lwnS28S2CbvQwgLg9XmoNxmzg0w3s5bZe70RfIaTfQ%2Blq1gAipJ6C3cyPhYWecv2w8O%2FKup1J%2FVW%2BkUzMPaoPCBTD8Yxk7mZ54fb9XeJgH6G9SSVhfu1TWCuJz%2B0WouzdCikCrTbvmuFDFxRTEeakwQ0QF0uxN2GtHG4hJWWCJqmpczwOa5DQeyIJfeXu0FxPnU894fS3%2BJIuOtVU83Fo%2BBX%2BzKXh9%2FBHEciELXn3Xjetj%2B8xbqYTO5G6xpFSmzSetXl%2FJc%2Bs4XBNaCtljjXtN7gtqzjWdUCSVL5FzCM%2BUjNCxuU5HqfTaWVaIhpxThDXWzB7p%2BQ1%2BDBrCV22T5PYn1CqQn6ti5F%2B1xXgeCsmJ0h28CwefWzS65nPasiRUk7uW6ESmXFvn3I9OrllC%2B5E6nDfGA74NWh7aXyDXrcemh01rJx2uS8%2BTcfv3bx4UmYOyWAIiML1lBbeSXHSgSQBF2oz54OQArnnuoNKTeIY%2FhzrFyQYEA11iViz38MMah4L8GOqUBEt5nL3Q28Umh2G7osNcUvNbp%2BXc%2Bv%2FlGbT36lYLc4gUB2LF6TG2azI8wqVecLcKQZZu1KiqmhwBzMIGgPgUMaIUkVbKhtbKFGTBK4%2FlOqBwLwUzyB35deJzyar75mTwoFTIyFvh1DW62uvsAm56WehXeni3N4N7lZA36wvPbyOFqjDgrME%2F1ESfRaHqLbc8Y9KmCC9QfsAf8z1fcKNB%2FzTMNUKU4&X-Amz-Signature=78f4c06e926fc56a189400eafe0ae2d74324942e39b634dbe67aa7b2c4e4bc6d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAUO3YU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFB5atmw5kVF7ILwuh0xx0petFkHXJlzei8T1Rbf0f0OAiEAjB61QDxGPJwQhdh7wqc2LdpPlSL%2ByYvTpAZiQwOwrfIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGS6p5vZOctDZVY3CrcA5SDGwlqkueqVr5XtJfmwsiHyeuHZwaSTOdjtOAQMXzqCTMIc2TuSSYrqhumUUnVqhcxpthtdEfiQiyI9OJJP%2FFcq%2BK%2Bz%2BWa8eMeJMc5IYcCt2ePQG3u2R4m750PjBHB6lwnS28S2CbvQwgLg9XmoNxmzg0w3s5bZe70RfIaTfQ%2Blq1gAipJ6C3cyPhYWecv2w8O%2FKup1J%2FVW%2BkUzMPaoPCBTD8Yxk7mZ54fb9XeJgH6G9SSVhfu1TWCuJz%2B0WouzdCikCrTbvmuFDFxRTEeakwQ0QF0uxN2GtHG4hJWWCJqmpczwOa5DQeyIJfeXu0FxPnU894fS3%2BJIuOtVU83Fo%2BBX%2BzKXh9%2FBHEciELXn3Xjetj%2B8xbqYTO5G6xpFSmzSetXl%2FJc%2Bs4XBNaCtljjXtN7gtqzjWdUCSVL5FzCM%2BUjNCxuU5HqfTaWVaIhpxThDXWzB7p%2BQ1%2BDBrCV22T5PYn1CqQn6ti5F%2B1xXgeCsmJ0h28CwefWzS65nPasiRUk7uW6ESmXFvn3I9OrllC%2B5E6nDfGA74NWh7aXyDXrcemh01rJx2uS8%2BTcfv3bx4UmYOyWAIiML1lBbeSXHSgSQBF2oz54OQArnnuoNKTeIY%2FhzrFyQYEA11iViz38MMah4L8GOqUBEt5nL3Q28Umh2G7osNcUvNbp%2BXc%2Bv%2FlGbT36lYLc4gUB2LF6TG2azI8wqVecLcKQZZu1KiqmhwBzMIGgPgUMaIUkVbKhtbKFGTBK4%2FlOqBwLwUzyB35deJzyar75mTwoFTIyFvh1DW62uvsAm56WehXeni3N4N7lZA36wvPbyOFqjDgrME%2F1ESfRaHqLbc8Y9KmCC9QfsAf8z1fcKNB%2FzTMNUKU4&X-Amz-Signature=28e192e4cd3bae53212f25f91d9d472916df5e879868a01cb1dfd1f2187cc0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAUO3YU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFB5atmw5kVF7ILwuh0xx0petFkHXJlzei8T1Rbf0f0OAiEAjB61QDxGPJwQhdh7wqc2LdpPlSL%2ByYvTpAZiQwOwrfIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGS6p5vZOctDZVY3CrcA5SDGwlqkueqVr5XtJfmwsiHyeuHZwaSTOdjtOAQMXzqCTMIc2TuSSYrqhumUUnVqhcxpthtdEfiQiyI9OJJP%2FFcq%2BK%2Bz%2BWa8eMeJMc5IYcCt2ePQG3u2R4m750PjBHB6lwnS28S2CbvQwgLg9XmoNxmzg0w3s5bZe70RfIaTfQ%2Blq1gAipJ6C3cyPhYWecv2w8O%2FKup1J%2FVW%2BkUzMPaoPCBTD8Yxk7mZ54fb9XeJgH6G9SSVhfu1TWCuJz%2B0WouzdCikCrTbvmuFDFxRTEeakwQ0QF0uxN2GtHG4hJWWCJqmpczwOa5DQeyIJfeXu0FxPnU894fS3%2BJIuOtVU83Fo%2BBX%2BzKXh9%2FBHEciELXn3Xjetj%2B8xbqYTO5G6xpFSmzSetXl%2FJc%2Bs4XBNaCtljjXtN7gtqzjWdUCSVL5FzCM%2BUjNCxuU5HqfTaWVaIhpxThDXWzB7p%2BQ1%2BDBrCV22T5PYn1CqQn6ti5F%2B1xXgeCsmJ0h28CwefWzS65nPasiRUk7uW6ESmXFvn3I9OrllC%2B5E6nDfGA74NWh7aXyDXrcemh01rJx2uS8%2BTcfv3bx4UmYOyWAIiML1lBbeSXHSgSQBF2oz54OQArnnuoNKTeIY%2FhzrFyQYEA11iViz38MMah4L8GOqUBEt5nL3Q28Umh2G7osNcUvNbp%2BXc%2Bv%2FlGbT36lYLc4gUB2LF6TG2azI8wqVecLcKQZZu1KiqmhwBzMIGgPgUMaIUkVbKhtbKFGTBK4%2FlOqBwLwUzyB35deJzyar75mTwoFTIyFvh1DW62uvsAm56WehXeni3N4N7lZA36wvPbyOFqjDgrME%2F1ESfRaHqLbc8Y9KmCC9QfsAf8z1fcKNB%2FzTMNUKU4&X-Amz-Signature=5c90529a9ce230bc1b52deb0402915452b17079e44c0e030eb8393e9051dacd2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
