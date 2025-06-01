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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYVHTQJA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCyp%2BBEqhxa16cO34s669Xp7aOIQ%2BaG79QbzwoJO6bk1gIhAM2FYpl2LlnCIsf3WL5vNE6gLyxKpxUyvhwJwTU0alZUKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgGrw1xtHd8I4XYpIq3APJq6DELM8d9G9ohghfAhXT9qmJtMdZnAUNciWapSPDsTAy8ypY6B5GEd3QWqUB0Csq98aekqzwKwb5cJGPayWCpeXVGO16KUPmva%2FFxvPpRzYxirapbBS1MbFwyXCpyrpirL2kzSL33mjJYeV0ptuGQB4tH4nMDsG1RWgajNbcQjDxeTDeM9ssyMFSUqaWzRjsr0DFLRaKaU0pwTNF4BlFa%2F14XPVEhyoMeK2Y6phYDC8XL2%2BGUzlqPbzQE48CI0RQE6dhgHl5tBc7Tu0sZHC3fvC3Q0ij7OPSpZV7kRbiBXXcxPAsRq83jA0E8Cu7Nu%2B%2FgY1qNnDjLB8SQOJR8H%2F8zMNDIdg8ZlAxAqK4%2BEw2iKapipJ3gqy7%2BpC0e1RvB7%2FavWhbTMjoox46JDMZBsI1mxMe4VfESZ5EiBL%2FKm3HjSw9jHndbHJdldUbkn4zLzBs%2FlhTD%2FNlukyqOa%2FX3dYTanWh4ee9N8XNC6mWJtrhTPuWDd50rTjShw6vLJw1LScN4jPW0tgloesb8ZNk03uE5%2FlJ4NDJC%2FdvLGKsT92plm7VfQy5rRfGChizxB2VZHFMZirnIUgvKPKMWfSHbgO80qDbPN9t4LHjY%2BDsw%2Bx5UX3QuzejR48m3Kb6oDC73vDBBjqkAc9aIkWVyjUfNCPOpGwnzfmZWl2%2FG4W3%2BGoVfvXf8%2FMGiKatwpjbmxFlRxxaZiXt2Ewq26OuzYbXBf5GxgSGhGLFHU%2FZFZXKPZ23kmRejzadi9%2BxFeY7fFdeX8qVy3PuodfsWQ7iz6GVLlcd1EOjZLhX2tFgYxox2%2B2DyNDvS%2FfMCcFnd6f6PWuFQe7pBuVr9VbBjjaSGVSVYrvA2fJTm58VwGIA&X-Amz-Signature=9fe9fe0e171505f9bad99f740b7674d22e1ddf4a243e930dd3eab5d6cf49ec5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYVHTQJA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCyp%2BBEqhxa16cO34s669Xp7aOIQ%2BaG79QbzwoJO6bk1gIhAM2FYpl2LlnCIsf3WL5vNE6gLyxKpxUyvhwJwTU0alZUKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgGrw1xtHd8I4XYpIq3APJq6DELM8d9G9ohghfAhXT9qmJtMdZnAUNciWapSPDsTAy8ypY6B5GEd3QWqUB0Csq98aekqzwKwb5cJGPayWCpeXVGO16KUPmva%2FFxvPpRzYxirapbBS1MbFwyXCpyrpirL2kzSL33mjJYeV0ptuGQB4tH4nMDsG1RWgajNbcQjDxeTDeM9ssyMFSUqaWzRjsr0DFLRaKaU0pwTNF4BlFa%2F14XPVEhyoMeK2Y6phYDC8XL2%2BGUzlqPbzQE48CI0RQE6dhgHl5tBc7Tu0sZHC3fvC3Q0ij7OPSpZV7kRbiBXXcxPAsRq83jA0E8Cu7Nu%2B%2FgY1qNnDjLB8SQOJR8H%2F8zMNDIdg8ZlAxAqK4%2BEw2iKapipJ3gqy7%2BpC0e1RvB7%2FavWhbTMjoox46JDMZBsI1mxMe4VfESZ5EiBL%2FKm3HjSw9jHndbHJdldUbkn4zLzBs%2FlhTD%2FNlukyqOa%2FX3dYTanWh4ee9N8XNC6mWJtrhTPuWDd50rTjShw6vLJw1LScN4jPW0tgloesb8ZNk03uE5%2FlJ4NDJC%2FdvLGKsT92plm7VfQy5rRfGChizxB2VZHFMZirnIUgvKPKMWfSHbgO80qDbPN9t4LHjY%2BDsw%2Bx5UX3QuzejR48m3Kb6oDC73vDBBjqkAc9aIkWVyjUfNCPOpGwnzfmZWl2%2FG4W3%2BGoVfvXf8%2FMGiKatwpjbmxFlRxxaZiXt2Ewq26OuzYbXBf5GxgSGhGLFHU%2FZFZXKPZ23kmRejzadi9%2BxFeY7fFdeX8qVy3PuodfsWQ7iz6GVLlcd1EOjZLhX2tFgYxox2%2B2DyNDvS%2FfMCcFnd6f6PWuFQe7pBuVr9VbBjjaSGVSVYrvA2fJTm58VwGIA&X-Amz-Signature=7d9e95c5c1c283c2516e90fbd89e059b0eab65132690137924a4c339ee67d849&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYVHTQJA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCyp%2BBEqhxa16cO34s669Xp7aOIQ%2BaG79QbzwoJO6bk1gIhAM2FYpl2LlnCIsf3WL5vNE6gLyxKpxUyvhwJwTU0alZUKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgGrw1xtHd8I4XYpIq3APJq6DELM8d9G9ohghfAhXT9qmJtMdZnAUNciWapSPDsTAy8ypY6B5GEd3QWqUB0Csq98aekqzwKwb5cJGPayWCpeXVGO16KUPmva%2FFxvPpRzYxirapbBS1MbFwyXCpyrpirL2kzSL33mjJYeV0ptuGQB4tH4nMDsG1RWgajNbcQjDxeTDeM9ssyMFSUqaWzRjsr0DFLRaKaU0pwTNF4BlFa%2F14XPVEhyoMeK2Y6phYDC8XL2%2BGUzlqPbzQE48CI0RQE6dhgHl5tBc7Tu0sZHC3fvC3Q0ij7OPSpZV7kRbiBXXcxPAsRq83jA0E8Cu7Nu%2B%2FgY1qNnDjLB8SQOJR8H%2F8zMNDIdg8ZlAxAqK4%2BEw2iKapipJ3gqy7%2BpC0e1RvB7%2FavWhbTMjoox46JDMZBsI1mxMe4VfESZ5EiBL%2FKm3HjSw9jHndbHJdldUbkn4zLzBs%2FlhTD%2FNlukyqOa%2FX3dYTanWh4ee9N8XNC6mWJtrhTPuWDd50rTjShw6vLJw1LScN4jPW0tgloesb8ZNk03uE5%2FlJ4NDJC%2FdvLGKsT92plm7VfQy5rRfGChizxB2VZHFMZirnIUgvKPKMWfSHbgO80qDbPN9t4LHjY%2BDsw%2Bx5UX3QuzejR48m3Kb6oDC73vDBBjqkAc9aIkWVyjUfNCPOpGwnzfmZWl2%2FG4W3%2BGoVfvXf8%2FMGiKatwpjbmxFlRxxaZiXt2Ewq26OuzYbXBf5GxgSGhGLFHU%2FZFZXKPZ23kmRejzadi9%2BxFeY7fFdeX8qVy3PuodfsWQ7iz6GVLlcd1EOjZLhX2tFgYxox2%2B2DyNDvS%2FfMCcFnd6f6PWuFQe7pBuVr9VbBjjaSGVSVYrvA2fJTm58VwGIA&X-Amz-Signature=074f7ea12115106a99731e49f10a0ae426161928c7ecb9b2f7e3e190fae6b726&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYVHTQJA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCyp%2BBEqhxa16cO34s669Xp7aOIQ%2BaG79QbzwoJO6bk1gIhAM2FYpl2LlnCIsf3WL5vNE6gLyxKpxUyvhwJwTU0alZUKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgGrw1xtHd8I4XYpIq3APJq6DELM8d9G9ohghfAhXT9qmJtMdZnAUNciWapSPDsTAy8ypY6B5GEd3QWqUB0Csq98aekqzwKwb5cJGPayWCpeXVGO16KUPmva%2FFxvPpRzYxirapbBS1MbFwyXCpyrpirL2kzSL33mjJYeV0ptuGQB4tH4nMDsG1RWgajNbcQjDxeTDeM9ssyMFSUqaWzRjsr0DFLRaKaU0pwTNF4BlFa%2F14XPVEhyoMeK2Y6phYDC8XL2%2BGUzlqPbzQE48CI0RQE6dhgHl5tBc7Tu0sZHC3fvC3Q0ij7OPSpZV7kRbiBXXcxPAsRq83jA0E8Cu7Nu%2B%2FgY1qNnDjLB8SQOJR8H%2F8zMNDIdg8ZlAxAqK4%2BEw2iKapipJ3gqy7%2BpC0e1RvB7%2FavWhbTMjoox46JDMZBsI1mxMe4VfESZ5EiBL%2FKm3HjSw9jHndbHJdldUbkn4zLzBs%2FlhTD%2FNlukyqOa%2FX3dYTanWh4ee9N8XNC6mWJtrhTPuWDd50rTjShw6vLJw1LScN4jPW0tgloesb8ZNk03uE5%2FlJ4NDJC%2FdvLGKsT92plm7VfQy5rRfGChizxB2VZHFMZirnIUgvKPKMWfSHbgO80qDbPN9t4LHjY%2BDsw%2Bx5UX3QuzejR48m3Kb6oDC73vDBBjqkAc9aIkWVyjUfNCPOpGwnzfmZWl2%2FG4W3%2BGoVfvXf8%2FMGiKatwpjbmxFlRxxaZiXt2Ewq26OuzYbXBf5GxgSGhGLFHU%2FZFZXKPZ23kmRejzadi9%2BxFeY7fFdeX8qVy3PuodfsWQ7iz6GVLlcd1EOjZLhX2tFgYxox2%2B2DyNDvS%2FfMCcFnd6f6PWuFQe7pBuVr9VbBjjaSGVSVYrvA2fJTm58VwGIA&X-Amz-Signature=902d508961beae3301530f283dcceee5588757e8a80766b21cad40fe08712ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYVHTQJA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCyp%2BBEqhxa16cO34s669Xp7aOIQ%2BaG79QbzwoJO6bk1gIhAM2FYpl2LlnCIsf3WL5vNE6gLyxKpxUyvhwJwTU0alZUKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgGrw1xtHd8I4XYpIq3APJq6DELM8d9G9ohghfAhXT9qmJtMdZnAUNciWapSPDsTAy8ypY6B5GEd3QWqUB0Csq98aekqzwKwb5cJGPayWCpeXVGO16KUPmva%2FFxvPpRzYxirapbBS1MbFwyXCpyrpirL2kzSL33mjJYeV0ptuGQB4tH4nMDsG1RWgajNbcQjDxeTDeM9ssyMFSUqaWzRjsr0DFLRaKaU0pwTNF4BlFa%2F14XPVEhyoMeK2Y6phYDC8XL2%2BGUzlqPbzQE48CI0RQE6dhgHl5tBc7Tu0sZHC3fvC3Q0ij7OPSpZV7kRbiBXXcxPAsRq83jA0E8Cu7Nu%2B%2FgY1qNnDjLB8SQOJR8H%2F8zMNDIdg8ZlAxAqK4%2BEw2iKapipJ3gqy7%2BpC0e1RvB7%2FavWhbTMjoox46JDMZBsI1mxMe4VfESZ5EiBL%2FKm3HjSw9jHndbHJdldUbkn4zLzBs%2FlhTD%2FNlukyqOa%2FX3dYTanWh4ee9N8XNC6mWJtrhTPuWDd50rTjShw6vLJw1LScN4jPW0tgloesb8ZNk03uE5%2FlJ4NDJC%2FdvLGKsT92plm7VfQy5rRfGChizxB2VZHFMZirnIUgvKPKMWfSHbgO80qDbPN9t4LHjY%2BDsw%2Bx5UX3QuzejR48m3Kb6oDC73vDBBjqkAc9aIkWVyjUfNCPOpGwnzfmZWl2%2FG4W3%2BGoVfvXf8%2FMGiKatwpjbmxFlRxxaZiXt2Ewq26OuzYbXBf5GxgSGhGLFHU%2FZFZXKPZ23kmRejzadi9%2BxFeY7fFdeX8qVy3PuodfsWQ7iz6GVLlcd1EOjZLhX2tFgYxox2%2B2DyNDvS%2FfMCcFnd6f6PWuFQe7pBuVr9VbBjjaSGVSVYrvA2fJTm58VwGIA&X-Amz-Signature=a99c9493f0f2598a406d8db4e971c295a22cbf04c2b429144df431f110ee5db9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYVHTQJA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCyp%2BBEqhxa16cO34s669Xp7aOIQ%2BaG79QbzwoJO6bk1gIhAM2FYpl2LlnCIsf3WL5vNE6gLyxKpxUyvhwJwTU0alZUKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgGrw1xtHd8I4XYpIq3APJq6DELM8d9G9ohghfAhXT9qmJtMdZnAUNciWapSPDsTAy8ypY6B5GEd3QWqUB0Csq98aekqzwKwb5cJGPayWCpeXVGO16KUPmva%2FFxvPpRzYxirapbBS1MbFwyXCpyrpirL2kzSL33mjJYeV0ptuGQB4tH4nMDsG1RWgajNbcQjDxeTDeM9ssyMFSUqaWzRjsr0DFLRaKaU0pwTNF4BlFa%2F14XPVEhyoMeK2Y6phYDC8XL2%2BGUzlqPbzQE48CI0RQE6dhgHl5tBc7Tu0sZHC3fvC3Q0ij7OPSpZV7kRbiBXXcxPAsRq83jA0E8Cu7Nu%2B%2FgY1qNnDjLB8SQOJR8H%2F8zMNDIdg8ZlAxAqK4%2BEw2iKapipJ3gqy7%2BpC0e1RvB7%2FavWhbTMjoox46JDMZBsI1mxMe4VfESZ5EiBL%2FKm3HjSw9jHndbHJdldUbkn4zLzBs%2FlhTD%2FNlukyqOa%2FX3dYTanWh4ee9N8XNC6mWJtrhTPuWDd50rTjShw6vLJw1LScN4jPW0tgloesb8ZNk03uE5%2FlJ4NDJC%2FdvLGKsT92plm7VfQy5rRfGChizxB2VZHFMZirnIUgvKPKMWfSHbgO80qDbPN9t4LHjY%2BDsw%2Bx5UX3QuzejR48m3Kb6oDC73vDBBjqkAc9aIkWVyjUfNCPOpGwnzfmZWl2%2FG4W3%2BGoVfvXf8%2FMGiKatwpjbmxFlRxxaZiXt2Ewq26OuzYbXBf5GxgSGhGLFHU%2FZFZXKPZ23kmRejzadi9%2BxFeY7fFdeX8qVy3PuodfsWQ7iz6GVLlcd1EOjZLhX2tFgYxox2%2B2DyNDvS%2FfMCcFnd6f6PWuFQe7pBuVr9VbBjjaSGVSVYrvA2fJTm58VwGIA&X-Amz-Signature=9926722f10f6f7f67938dc763d95458ac5bcc1f2e5497d23265ce9ae16de1f79&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYVHTQJA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCyp%2BBEqhxa16cO34s669Xp7aOIQ%2BaG79QbzwoJO6bk1gIhAM2FYpl2LlnCIsf3WL5vNE6gLyxKpxUyvhwJwTU0alZUKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgGrw1xtHd8I4XYpIq3APJq6DELM8d9G9ohghfAhXT9qmJtMdZnAUNciWapSPDsTAy8ypY6B5GEd3QWqUB0Csq98aekqzwKwb5cJGPayWCpeXVGO16KUPmva%2FFxvPpRzYxirapbBS1MbFwyXCpyrpirL2kzSL33mjJYeV0ptuGQB4tH4nMDsG1RWgajNbcQjDxeTDeM9ssyMFSUqaWzRjsr0DFLRaKaU0pwTNF4BlFa%2F14XPVEhyoMeK2Y6phYDC8XL2%2BGUzlqPbzQE48CI0RQE6dhgHl5tBc7Tu0sZHC3fvC3Q0ij7OPSpZV7kRbiBXXcxPAsRq83jA0E8Cu7Nu%2B%2FgY1qNnDjLB8SQOJR8H%2F8zMNDIdg8ZlAxAqK4%2BEw2iKapipJ3gqy7%2BpC0e1RvB7%2FavWhbTMjoox46JDMZBsI1mxMe4VfESZ5EiBL%2FKm3HjSw9jHndbHJdldUbkn4zLzBs%2FlhTD%2FNlukyqOa%2FX3dYTanWh4ee9N8XNC6mWJtrhTPuWDd50rTjShw6vLJw1LScN4jPW0tgloesb8ZNk03uE5%2FlJ4NDJC%2FdvLGKsT92plm7VfQy5rRfGChizxB2VZHFMZirnIUgvKPKMWfSHbgO80qDbPN9t4LHjY%2BDsw%2Bx5UX3QuzejR48m3Kb6oDC73vDBBjqkAc9aIkWVyjUfNCPOpGwnzfmZWl2%2FG4W3%2BGoVfvXf8%2FMGiKatwpjbmxFlRxxaZiXt2Ewq26OuzYbXBf5GxgSGhGLFHU%2FZFZXKPZ23kmRejzadi9%2BxFeY7fFdeX8qVy3PuodfsWQ7iz6GVLlcd1EOjZLhX2tFgYxox2%2B2DyNDvS%2FfMCcFnd6f6PWuFQe7pBuVr9VbBjjaSGVSVYrvA2fJTm58VwGIA&X-Amz-Signature=95ed2fa11702c7d414fe37087b0054e22e0963ae0568ac895167ec1f7f88b535&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
