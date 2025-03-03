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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7BVLXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENHgI7691XIV%2B8UE%2FQRBCp%2B1eyxX%2BRM2ilpwLmHu5MMAiAi905oAaOZwp%2Bx9kkFaymt2yoFWYfJkyetFmVlUkmV9iqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6x1Yp7yRf5pZjiBbKtwDTJPXMFQm6q5ap7CMdNiVmPp%2FL%2B3TT6qt%2FnHaTzfS0oFZ8Q94u6VOY6z1Z6dado8g6%2B2isbJ1OX5vbP0tZIfiMmsK6XNTOQh4NDqadloTVwMkPmG4CCUQVHLR4T0bSOPXNDN5vbG8dkuo8aSLUFC5w3zk1lTqsg1kj48tca8evG15Pyq2tkvWVflltJnYFqQzspyBaE5sWr4Yy%2BQrACkLuNjpH7%2FIj%2FeC2Df4SAwmKHjfUAeMOfRFBH%2FZYNUYEOmCMoa34p16BdY85uOeSkf7WnfM0rHdQZDczqBdy1sBdMRDIZygZsPdlnjY7X0DI2g1O5FA%2BfC61a%2BCfWIj6dIrMHY763%2FPVAX0AI4PMX0aAC74dXF%2FVaHknQOkq7QzOXAofIZtJJhsQ6mHGXgKThC1cSEF%2B%2BkApBE2FnAA95fNkkOLBCCTPTJ9cPgeYfmx4Ad9y5QkUr1uvPh5qVQdahHlcu3Spas%2Fvy0Je6SBQkVSot0qOWOworY8v6q7t2%2F0FnP0TyLgtVtL8Al6JeW9zShnol%2BkOdwntGKFJ%2B%2FhXjhRW%2BtEzqf%2B7ehgCOp60BF04VjcSjHJvnaa8Otvmh3qQmbfjObBRDh9qAzLMfLy0g2Zoed5QD9gQvo2E6uhqIIw8fyVvgY6pgE8z3%2BJA9Y%2Fz765iAsN8%2F34Fdr5ga1AS0k24K07Uepm2TQRv9LfyKA3Z1Ol3eKJ1q%2FXNCUm7%2BwQ0d%2FRSnlTDKdHry%2FE4mvhOGeNZBzcCjBb7NAdwHDtzh0mcLDStXxyhK%2B7KCTQBZFwQOS%2BE2MuG%2BEMK5eyRCqz%2BxRFNuHug3EyL4jANAEupkIuo0utNLpkxq0q%2BgJnnefN57N6ZxGvJQVYmZ2qAoDM&X-Amz-Signature=c2014200da6db91e684f759395f203f9e4c34e2748040e3f21980af18a226d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7BVLXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENHgI7691XIV%2B8UE%2FQRBCp%2B1eyxX%2BRM2ilpwLmHu5MMAiAi905oAaOZwp%2Bx9kkFaymt2yoFWYfJkyetFmVlUkmV9iqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6x1Yp7yRf5pZjiBbKtwDTJPXMFQm6q5ap7CMdNiVmPp%2FL%2B3TT6qt%2FnHaTzfS0oFZ8Q94u6VOY6z1Z6dado8g6%2B2isbJ1OX5vbP0tZIfiMmsK6XNTOQh4NDqadloTVwMkPmG4CCUQVHLR4T0bSOPXNDN5vbG8dkuo8aSLUFC5w3zk1lTqsg1kj48tca8evG15Pyq2tkvWVflltJnYFqQzspyBaE5sWr4Yy%2BQrACkLuNjpH7%2FIj%2FeC2Df4SAwmKHjfUAeMOfRFBH%2FZYNUYEOmCMoa34p16BdY85uOeSkf7WnfM0rHdQZDczqBdy1sBdMRDIZygZsPdlnjY7X0DI2g1O5FA%2BfC61a%2BCfWIj6dIrMHY763%2FPVAX0AI4PMX0aAC74dXF%2FVaHknQOkq7QzOXAofIZtJJhsQ6mHGXgKThC1cSEF%2B%2BkApBE2FnAA95fNkkOLBCCTPTJ9cPgeYfmx4Ad9y5QkUr1uvPh5qVQdahHlcu3Spas%2Fvy0Je6SBQkVSot0qOWOworY8v6q7t2%2F0FnP0TyLgtVtL8Al6JeW9zShnol%2BkOdwntGKFJ%2B%2FhXjhRW%2BtEzqf%2B7ehgCOp60BF04VjcSjHJvnaa8Otvmh3qQmbfjObBRDh9qAzLMfLy0g2Zoed5QD9gQvo2E6uhqIIw8fyVvgY6pgE8z3%2BJA9Y%2Fz765iAsN8%2F34Fdr5ga1AS0k24K07Uepm2TQRv9LfyKA3Z1Ol3eKJ1q%2FXNCUm7%2BwQ0d%2FRSnlTDKdHry%2FE4mvhOGeNZBzcCjBb7NAdwHDtzh0mcLDStXxyhK%2B7KCTQBZFwQOS%2BE2MuG%2BEMK5eyRCqz%2BxRFNuHug3EyL4jANAEupkIuo0utNLpkxq0q%2BgJnnefN57N6ZxGvJQVYmZ2qAoDM&X-Amz-Signature=a4f844dd9e24789525c5dc12dc407005a3fc64e25a9dc6de5fdf1e2241247fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7BVLXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENHgI7691XIV%2B8UE%2FQRBCp%2B1eyxX%2BRM2ilpwLmHu5MMAiAi905oAaOZwp%2Bx9kkFaymt2yoFWYfJkyetFmVlUkmV9iqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6x1Yp7yRf5pZjiBbKtwDTJPXMFQm6q5ap7CMdNiVmPp%2FL%2B3TT6qt%2FnHaTzfS0oFZ8Q94u6VOY6z1Z6dado8g6%2B2isbJ1OX5vbP0tZIfiMmsK6XNTOQh4NDqadloTVwMkPmG4CCUQVHLR4T0bSOPXNDN5vbG8dkuo8aSLUFC5w3zk1lTqsg1kj48tca8evG15Pyq2tkvWVflltJnYFqQzspyBaE5sWr4Yy%2BQrACkLuNjpH7%2FIj%2FeC2Df4SAwmKHjfUAeMOfRFBH%2FZYNUYEOmCMoa34p16BdY85uOeSkf7WnfM0rHdQZDczqBdy1sBdMRDIZygZsPdlnjY7X0DI2g1O5FA%2BfC61a%2BCfWIj6dIrMHY763%2FPVAX0AI4PMX0aAC74dXF%2FVaHknQOkq7QzOXAofIZtJJhsQ6mHGXgKThC1cSEF%2B%2BkApBE2FnAA95fNkkOLBCCTPTJ9cPgeYfmx4Ad9y5QkUr1uvPh5qVQdahHlcu3Spas%2Fvy0Je6SBQkVSot0qOWOworY8v6q7t2%2F0FnP0TyLgtVtL8Al6JeW9zShnol%2BkOdwntGKFJ%2B%2FhXjhRW%2BtEzqf%2B7ehgCOp60BF04VjcSjHJvnaa8Otvmh3qQmbfjObBRDh9qAzLMfLy0g2Zoed5QD9gQvo2E6uhqIIw8fyVvgY6pgE8z3%2BJA9Y%2Fz765iAsN8%2F34Fdr5ga1AS0k24K07Uepm2TQRv9LfyKA3Z1Ol3eKJ1q%2FXNCUm7%2BwQ0d%2FRSnlTDKdHry%2FE4mvhOGeNZBzcCjBb7NAdwHDtzh0mcLDStXxyhK%2B7KCTQBZFwQOS%2BE2MuG%2BEMK5eyRCqz%2BxRFNuHug3EyL4jANAEupkIuo0utNLpkxq0q%2BgJnnefN57N6ZxGvJQVYmZ2qAoDM&X-Amz-Signature=1a8a1d52e982903253c5ab510e6ee7e3ccc61949ee6f26547581bc4c81dbde4b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7BVLXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENHgI7691XIV%2B8UE%2FQRBCp%2B1eyxX%2BRM2ilpwLmHu5MMAiAi905oAaOZwp%2Bx9kkFaymt2yoFWYfJkyetFmVlUkmV9iqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6x1Yp7yRf5pZjiBbKtwDTJPXMFQm6q5ap7CMdNiVmPp%2FL%2B3TT6qt%2FnHaTzfS0oFZ8Q94u6VOY6z1Z6dado8g6%2B2isbJ1OX5vbP0tZIfiMmsK6XNTOQh4NDqadloTVwMkPmG4CCUQVHLR4T0bSOPXNDN5vbG8dkuo8aSLUFC5w3zk1lTqsg1kj48tca8evG15Pyq2tkvWVflltJnYFqQzspyBaE5sWr4Yy%2BQrACkLuNjpH7%2FIj%2FeC2Df4SAwmKHjfUAeMOfRFBH%2FZYNUYEOmCMoa34p16BdY85uOeSkf7WnfM0rHdQZDczqBdy1sBdMRDIZygZsPdlnjY7X0DI2g1O5FA%2BfC61a%2BCfWIj6dIrMHY763%2FPVAX0AI4PMX0aAC74dXF%2FVaHknQOkq7QzOXAofIZtJJhsQ6mHGXgKThC1cSEF%2B%2BkApBE2FnAA95fNkkOLBCCTPTJ9cPgeYfmx4Ad9y5QkUr1uvPh5qVQdahHlcu3Spas%2Fvy0Je6SBQkVSot0qOWOworY8v6q7t2%2F0FnP0TyLgtVtL8Al6JeW9zShnol%2BkOdwntGKFJ%2B%2FhXjhRW%2BtEzqf%2B7ehgCOp60BF04VjcSjHJvnaa8Otvmh3qQmbfjObBRDh9qAzLMfLy0g2Zoed5QD9gQvo2E6uhqIIw8fyVvgY6pgE8z3%2BJA9Y%2Fz765iAsN8%2F34Fdr5ga1AS0k24K07Uepm2TQRv9LfyKA3Z1Ol3eKJ1q%2FXNCUm7%2BwQ0d%2FRSnlTDKdHry%2FE4mvhOGeNZBzcCjBb7NAdwHDtzh0mcLDStXxyhK%2B7KCTQBZFwQOS%2BE2MuG%2BEMK5eyRCqz%2BxRFNuHug3EyL4jANAEupkIuo0utNLpkxq0q%2BgJnnefN57N6ZxGvJQVYmZ2qAoDM&X-Amz-Signature=1619f8700cbd24fdee40694ac9be7072b269e59770a5f2f67e8bfdc94c6ca064&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7BVLXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENHgI7691XIV%2B8UE%2FQRBCp%2B1eyxX%2BRM2ilpwLmHu5MMAiAi905oAaOZwp%2Bx9kkFaymt2yoFWYfJkyetFmVlUkmV9iqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6x1Yp7yRf5pZjiBbKtwDTJPXMFQm6q5ap7CMdNiVmPp%2FL%2B3TT6qt%2FnHaTzfS0oFZ8Q94u6VOY6z1Z6dado8g6%2B2isbJ1OX5vbP0tZIfiMmsK6XNTOQh4NDqadloTVwMkPmG4CCUQVHLR4T0bSOPXNDN5vbG8dkuo8aSLUFC5w3zk1lTqsg1kj48tca8evG15Pyq2tkvWVflltJnYFqQzspyBaE5sWr4Yy%2BQrACkLuNjpH7%2FIj%2FeC2Df4SAwmKHjfUAeMOfRFBH%2FZYNUYEOmCMoa34p16BdY85uOeSkf7WnfM0rHdQZDczqBdy1sBdMRDIZygZsPdlnjY7X0DI2g1O5FA%2BfC61a%2BCfWIj6dIrMHY763%2FPVAX0AI4PMX0aAC74dXF%2FVaHknQOkq7QzOXAofIZtJJhsQ6mHGXgKThC1cSEF%2B%2BkApBE2FnAA95fNkkOLBCCTPTJ9cPgeYfmx4Ad9y5QkUr1uvPh5qVQdahHlcu3Spas%2Fvy0Je6SBQkVSot0qOWOworY8v6q7t2%2F0FnP0TyLgtVtL8Al6JeW9zShnol%2BkOdwntGKFJ%2B%2FhXjhRW%2BtEzqf%2B7ehgCOp60BF04VjcSjHJvnaa8Otvmh3qQmbfjObBRDh9qAzLMfLy0g2Zoed5QD9gQvo2E6uhqIIw8fyVvgY6pgE8z3%2BJA9Y%2Fz765iAsN8%2F34Fdr5ga1AS0k24K07Uepm2TQRv9LfyKA3Z1Ol3eKJ1q%2FXNCUm7%2BwQ0d%2FRSnlTDKdHry%2FE4mvhOGeNZBzcCjBb7NAdwHDtzh0mcLDStXxyhK%2B7KCTQBZFwQOS%2BE2MuG%2BEMK5eyRCqz%2BxRFNuHug3EyL4jANAEupkIuo0utNLpkxq0q%2BgJnnefN57N6ZxGvJQVYmZ2qAoDM&X-Amz-Signature=ea4acb87ba0341c37a23af6b6b52571e50e11ac0efb764fb2b92e91bdd871804&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7BVLXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENHgI7691XIV%2B8UE%2FQRBCp%2B1eyxX%2BRM2ilpwLmHu5MMAiAi905oAaOZwp%2Bx9kkFaymt2yoFWYfJkyetFmVlUkmV9iqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6x1Yp7yRf5pZjiBbKtwDTJPXMFQm6q5ap7CMdNiVmPp%2FL%2B3TT6qt%2FnHaTzfS0oFZ8Q94u6VOY6z1Z6dado8g6%2B2isbJ1OX5vbP0tZIfiMmsK6XNTOQh4NDqadloTVwMkPmG4CCUQVHLR4T0bSOPXNDN5vbG8dkuo8aSLUFC5w3zk1lTqsg1kj48tca8evG15Pyq2tkvWVflltJnYFqQzspyBaE5sWr4Yy%2BQrACkLuNjpH7%2FIj%2FeC2Df4SAwmKHjfUAeMOfRFBH%2FZYNUYEOmCMoa34p16BdY85uOeSkf7WnfM0rHdQZDczqBdy1sBdMRDIZygZsPdlnjY7X0DI2g1O5FA%2BfC61a%2BCfWIj6dIrMHY763%2FPVAX0AI4PMX0aAC74dXF%2FVaHknQOkq7QzOXAofIZtJJhsQ6mHGXgKThC1cSEF%2B%2BkApBE2FnAA95fNkkOLBCCTPTJ9cPgeYfmx4Ad9y5QkUr1uvPh5qVQdahHlcu3Spas%2Fvy0Je6SBQkVSot0qOWOworY8v6q7t2%2F0FnP0TyLgtVtL8Al6JeW9zShnol%2BkOdwntGKFJ%2B%2FhXjhRW%2BtEzqf%2B7ehgCOp60BF04VjcSjHJvnaa8Otvmh3qQmbfjObBRDh9qAzLMfLy0g2Zoed5QD9gQvo2E6uhqIIw8fyVvgY6pgE8z3%2BJA9Y%2Fz765iAsN8%2F34Fdr5ga1AS0k24K07Uepm2TQRv9LfyKA3Z1Ol3eKJ1q%2FXNCUm7%2BwQ0d%2FRSnlTDKdHry%2FE4mvhOGeNZBzcCjBb7NAdwHDtzh0mcLDStXxyhK%2B7KCTQBZFwQOS%2BE2MuG%2BEMK5eyRCqz%2BxRFNuHug3EyL4jANAEupkIuo0utNLpkxq0q%2BgJnnefN57N6ZxGvJQVYmZ2qAoDM&X-Amz-Signature=5d95eb95f2d5a69f312937c9c8f6f2b74723a823c19adcaadfbb2ae827c455a5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7BVLXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENHgI7691XIV%2B8UE%2FQRBCp%2B1eyxX%2BRM2ilpwLmHu5MMAiAi905oAaOZwp%2Bx9kkFaymt2yoFWYfJkyetFmVlUkmV9iqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6x1Yp7yRf5pZjiBbKtwDTJPXMFQm6q5ap7CMdNiVmPp%2FL%2B3TT6qt%2FnHaTzfS0oFZ8Q94u6VOY6z1Z6dado8g6%2B2isbJ1OX5vbP0tZIfiMmsK6XNTOQh4NDqadloTVwMkPmG4CCUQVHLR4T0bSOPXNDN5vbG8dkuo8aSLUFC5w3zk1lTqsg1kj48tca8evG15Pyq2tkvWVflltJnYFqQzspyBaE5sWr4Yy%2BQrACkLuNjpH7%2FIj%2FeC2Df4SAwmKHjfUAeMOfRFBH%2FZYNUYEOmCMoa34p16BdY85uOeSkf7WnfM0rHdQZDczqBdy1sBdMRDIZygZsPdlnjY7X0DI2g1O5FA%2BfC61a%2BCfWIj6dIrMHY763%2FPVAX0AI4PMX0aAC74dXF%2FVaHknQOkq7QzOXAofIZtJJhsQ6mHGXgKThC1cSEF%2B%2BkApBE2FnAA95fNkkOLBCCTPTJ9cPgeYfmx4Ad9y5QkUr1uvPh5qVQdahHlcu3Spas%2Fvy0Je6SBQkVSot0qOWOworY8v6q7t2%2F0FnP0TyLgtVtL8Al6JeW9zShnol%2BkOdwntGKFJ%2B%2FhXjhRW%2BtEzqf%2B7ehgCOp60BF04VjcSjHJvnaa8Otvmh3qQmbfjObBRDh9qAzLMfLy0g2Zoed5QD9gQvo2E6uhqIIw8fyVvgY6pgE8z3%2BJA9Y%2Fz765iAsN8%2F34Fdr5ga1AS0k24K07Uepm2TQRv9LfyKA3Z1Ol3eKJ1q%2FXNCUm7%2BwQ0d%2FRSnlTDKdHry%2FE4mvhOGeNZBzcCjBb7NAdwHDtzh0mcLDStXxyhK%2B7KCTQBZFwQOS%2BE2MuG%2BEMK5eyRCqz%2BxRFNuHug3EyL4jANAEupkIuo0utNLpkxq0q%2BgJnnefN57N6ZxGvJQVYmZ2qAoDM&X-Amz-Signature=45378932ec7b5fe2b2b387e7a6a49f0324518b1cd90a138f4119b75cc90f8332&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
