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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKSRO6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHagIj5YZ7aT2feyV%2BwQWgaX8fh5sc%2B1Gw3eINNXvy33AiBZhp17h0M4JUHMlDh1IwT7ZnKjKF7%2F4uVAbHe7TzKY4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx9U%2BJKF83VMJ8ABKtwDR5yLixGTKYuHyg7H%2B49segvWKavzzyonUMfp9IcscEzIHyOIl04AtomVfxUe9ZJ7Ou3hRjeGlzBtFLhKFwfdG%2BvE2dCL2W%2BxaA7ytdGZ05s69HA%2BeMKsq8TGvh55DaTs2G6Ghu42iJiz9r0z04DOWNlD3nO7HAuFoQlmv%2FVZVyG8%2B5lQhk%2BsfQg8S3f0QSiAV3u7LPLaA0IMzbGmBenAFyxR83DLZlbLDyYKPVLbIHVvpdxSy8X0hF86fGZ%2Bf2nVLi18EW6xLYr1XWdx1RSU%2FeNrfWshyD0wDoFlETXxN04L9C2obGUXfTNi7Q2PwPNpsJBKKjVlJTOt6i13s0m6jl4RvoohrI816RoI%2B94S6kaTBGKK0Kr5R6nMv5GvJn2nUUTRgadYwQWFoulM2OIESBbfLVNgSVuIK8NOLLXCYEU4bo1JqtZ9etYlfAPxvuyxnNRgV7bVXnCTdlgCdYblAcvnCjlsKHF0SCBJB8xd2gqlVEiTtKoLGeXsb9dZ%2Bo6wylWyfy9GFAODRh%2FTi5gzJGr3LqMGDYap%2BOLG%2FI5Jc3xdPWzDmbvNGZ1MKIUQSeI4kZCL%2BzgDcOf6xehLdMAo5kuRbV0PW%2BBZdl%2FGIVlYCmeQ8jSW2dfkFcTyX9cworXYvQY6pgEH%2Ft2RLToSBSseRF5NBuTK%2FQYXvId8g97k0LkmR8gbeXylUUUeZ83rv0qOenLBNJPECXMJfvf32gTHuMEvtg0rPLcDJ0vJgK5btWTk1KqaeB2NUx3huTPMGVj%2FeaC20EYOSyvQo7nE8mrVn28DM62EVVuVtH96o9h9z%2FG%2BFTPmvGSHg58s2wve8eUeIYUp5HGjRiZSzZ0Jd9LacMcC0j0SnykDArm4&X-Amz-Signature=a26083f324a55185fb79a0d5b7910249a5d44570c8db95e323dc3129d8ef0bea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKSRO6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHagIj5YZ7aT2feyV%2BwQWgaX8fh5sc%2B1Gw3eINNXvy33AiBZhp17h0M4JUHMlDh1IwT7ZnKjKF7%2F4uVAbHe7TzKY4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx9U%2BJKF83VMJ8ABKtwDR5yLixGTKYuHyg7H%2B49segvWKavzzyonUMfp9IcscEzIHyOIl04AtomVfxUe9ZJ7Ou3hRjeGlzBtFLhKFwfdG%2BvE2dCL2W%2BxaA7ytdGZ05s69HA%2BeMKsq8TGvh55DaTs2G6Ghu42iJiz9r0z04DOWNlD3nO7HAuFoQlmv%2FVZVyG8%2B5lQhk%2BsfQg8S3f0QSiAV3u7LPLaA0IMzbGmBenAFyxR83DLZlbLDyYKPVLbIHVvpdxSy8X0hF86fGZ%2Bf2nVLi18EW6xLYr1XWdx1RSU%2FeNrfWshyD0wDoFlETXxN04L9C2obGUXfTNi7Q2PwPNpsJBKKjVlJTOt6i13s0m6jl4RvoohrI816RoI%2B94S6kaTBGKK0Kr5R6nMv5GvJn2nUUTRgadYwQWFoulM2OIESBbfLVNgSVuIK8NOLLXCYEU4bo1JqtZ9etYlfAPxvuyxnNRgV7bVXnCTdlgCdYblAcvnCjlsKHF0SCBJB8xd2gqlVEiTtKoLGeXsb9dZ%2Bo6wylWyfy9GFAODRh%2FTi5gzJGr3LqMGDYap%2BOLG%2FI5Jc3xdPWzDmbvNGZ1MKIUQSeI4kZCL%2BzgDcOf6xehLdMAo5kuRbV0PW%2BBZdl%2FGIVlYCmeQ8jSW2dfkFcTyX9cworXYvQY6pgEH%2Ft2RLToSBSseRF5NBuTK%2FQYXvId8g97k0LkmR8gbeXylUUUeZ83rv0qOenLBNJPECXMJfvf32gTHuMEvtg0rPLcDJ0vJgK5btWTk1KqaeB2NUx3huTPMGVj%2FeaC20EYOSyvQo7nE8mrVn28DM62EVVuVtH96o9h9z%2FG%2BFTPmvGSHg58s2wve8eUeIYUp5HGjRiZSzZ0Jd9LacMcC0j0SnykDArm4&X-Amz-Signature=982fd6f9c13f8a8a68c314069c1cc69fe299d1fc78f4c9500628eb47496a0685&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKSRO6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHagIj5YZ7aT2feyV%2BwQWgaX8fh5sc%2B1Gw3eINNXvy33AiBZhp17h0M4JUHMlDh1IwT7ZnKjKF7%2F4uVAbHe7TzKY4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx9U%2BJKF83VMJ8ABKtwDR5yLixGTKYuHyg7H%2B49segvWKavzzyonUMfp9IcscEzIHyOIl04AtomVfxUe9ZJ7Ou3hRjeGlzBtFLhKFwfdG%2BvE2dCL2W%2BxaA7ytdGZ05s69HA%2BeMKsq8TGvh55DaTs2G6Ghu42iJiz9r0z04DOWNlD3nO7HAuFoQlmv%2FVZVyG8%2B5lQhk%2BsfQg8S3f0QSiAV3u7LPLaA0IMzbGmBenAFyxR83DLZlbLDyYKPVLbIHVvpdxSy8X0hF86fGZ%2Bf2nVLi18EW6xLYr1XWdx1RSU%2FeNrfWshyD0wDoFlETXxN04L9C2obGUXfTNi7Q2PwPNpsJBKKjVlJTOt6i13s0m6jl4RvoohrI816RoI%2B94S6kaTBGKK0Kr5R6nMv5GvJn2nUUTRgadYwQWFoulM2OIESBbfLVNgSVuIK8NOLLXCYEU4bo1JqtZ9etYlfAPxvuyxnNRgV7bVXnCTdlgCdYblAcvnCjlsKHF0SCBJB8xd2gqlVEiTtKoLGeXsb9dZ%2Bo6wylWyfy9GFAODRh%2FTi5gzJGr3LqMGDYap%2BOLG%2FI5Jc3xdPWzDmbvNGZ1MKIUQSeI4kZCL%2BzgDcOf6xehLdMAo5kuRbV0PW%2BBZdl%2FGIVlYCmeQ8jSW2dfkFcTyX9cworXYvQY6pgEH%2Ft2RLToSBSseRF5NBuTK%2FQYXvId8g97k0LkmR8gbeXylUUUeZ83rv0qOenLBNJPECXMJfvf32gTHuMEvtg0rPLcDJ0vJgK5btWTk1KqaeB2NUx3huTPMGVj%2FeaC20EYOSyvQo7nE8mrVn28DM62EVVuVtH96o9h9z%2FG%2BFTPmvGSHg58s2wve8eUeIYUp5HGjRiZSzZ0Jd9LacMcC0j0SnykDArm4&X-Amz-Signature=4a6d8bc3784dd9c9f6c2daf66dbcbdadedecbe83d3d626710469f44f63de2369&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKSRO6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHagIj5YZ7aT2feyV%2BwQWgaX8fh5sc%2B1Gw3eINNXvy33AiBZhp17h0M4JUHMlDh1IwT7ZnKjKF7%2F4uVAbHe7TzKY4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx9U%2BJKF83VMJ8ABKtwDR5yLixGTKYuHyg7H%2B49segvWKavzzyonUMfp9IcscEzIHyOIl04AtomVfxUe9ZJ7Ou3hRjeGlzBtFLhKFwfdG%2BvE2dCL2W%2BxaA7ytdGZ05s69HA%2BeMKsq8TGvh55DaTs2G6Ghu42iJiz9r0z04DOWNlD3nO7HAuFoQlmv%2FVZVyG8%2B5lQhk%2BsfQg8S3f0QSiAV3u7LPLaA0IMzbGmBenAFyxR83DLZlbLDyYKPVLbIHVvpdxSy8X0hF86fGZ%2Bf2nVLi18EW6xLYr1XWdx1RSU%2FeNrfWshyD0wDoFlETXxN04L9C2obGUXfTNi7Q2PwPNpsJBKKjVlJTOt6i13s0m6jl4RvoohrI816RoI%2B94S6kaTBGKK0Kr5R6nMv5GvJn2nUUTRgadYwQWFoulM2OIESBbfLVNgSVuIK8NOLLXCYEU4bo1JqtZ9etYlfAPxvuyxnNRgV7bVXnCTdlgCdYblAcvnCjlsKHF0SCBJB8xd2gqlVEiTtKoLGeXsb9dZ%2Bo6wylWyfy9GFAODRh%2FTi5gzJGr3LqMGDYap%2BOLG%2FI5Jc3xdPWzDmbvNGZ1MKIUQSeI4kZCL%2BzgDcOf6xehLdMAo5kuRbV0PW%2BBZdl%2FGIVlYCmeQ8jSW2dfkFcTyX9cworXYvQY6pgEH%2Ft2RLToSBSseRF5NBuTK%2FQYXvId8g97k0LkmR8gbeXylUUUeZ83rv0qOenLBNJPECXMJfvf32gTHuMEvtg0rPLcDJ0vJgK5btWTk1KqaeB2NUx3huTPMGVj%2FeaC20EYOSyvQo7nE8mrVn28DM62EVVuVtH96o9h9z%2FG%2BFTPmvGSHg58s2wve8eUeIYUp5HGjRiZSzZ0Jd9LacMcC0j0SnykDArm4&X-Amz-Signature=5593a823c97a6eddd8fc432c677d6c00e1fe2aba69d14888953713f1acce96c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKSRO6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHagIj5YZ7aT2feyV%2BwQWgaX8fh5sc%2B1Gw3eINNXvy33AiBZhp17h0M4JUHMlDh1IwT7ZnKjKF7%2F4uVAbHe7TzKY4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx9U%2BJKF83VMJ8ABKtwDR5yLixGTKYuHyg7H%2B49segvWKavzzyonUMfp9IcscEzIHyOIl04AtomVfxUe9ZJ7Ou3hRjeGlzBtFLhKFwfdG%2BvE2dCL2W%2BxaA7ytdGZ05s69HA%2BeMKsq8TGvh55DaTs2G6Ghu42iJiz9r0z04DOWNlD3nO7HAuFoQlmv%2FVZVyG8%2B5lQhk%2BsfQg8S3f0QSiAV3u7LPLaA0IMzbGmBenAFyxR83DLZlbLDyYKPVLbIHVvpdxSy8X0hF86fGZ%2Bf2nVLi18EW6xLYr1XWdx1RSU%2FeNrfWshyD0wDoFlETXxN04L9C2obGUXfTNi7Q2PwPNpsJBKKjVlJTOt6i13s0m6jl4RvoohrI816RoI%2B94S6kaTBGKK0Kr5R6nMv5GvJn2nUUTRgadYwQWFoulM2OIESBbfLVNgSVuIK8NOLLXCYEU4bo1JqtZ9etYlfAPxvuyxnNRgV7bVXnCTdlgCdYblAcvnCjlsKHF0SCBJB8xd2gqlVEiTtKoLGeXsb9dZ%2Bo6wylWyfy9GFAODRh%2FTi5gzJGr3LqMGDYap%2BOLG%2FI5Jc3xdPWzDmbvNGZ1MKIUQSeI4kZCL%2BzgDcOf6xehLdMAo5kuRbV0PW%2BBZdl%2FGIVlYCmeQ8jSW2dfkFcTyX9cworXYvQY6pgEH%2Ft2RLToSBSseRF5NBuTK%2FQYXvId8g97k0LkmR8gbeXylUUUeZ83rv0qOenLBNJPECXMJfvf32gTHuMEvtg0rPLcDJ0vJgK5btWTk1KqaeB2NUx3huTPMGVj%2FeaC20EYOSyvQo7nE8mrVn28DM62EVVuVtH96o9h9z%2FG%2BFTPmvGSHg58s2wve8eUeIYUp5HGjRiZSzZ0Jd9LacMcC0j0SnykDArm4&X-Amz-Signature=78be84509d5dfb9c6dd4a7aaf925525bb1e11662990ddcc197325d9f321827c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKSRO6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHagIj5YZ7aT2feyV%2BwQWgaX8fh5sc%2B1Gw3eINNXvy33AiBZhp17h0M4JUHMlDh1IwT7ZnKjKF7%2F4uVAbHe7TzKY4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx9U%2BJKF83VMJ8ABKtwDR5yLixGTKYuHyg7H%2B49segvWKavzzyonUMfp9IcscEzIHyOIl04AtomVfxUe9ZJ7Ou3hRjeGlzBtFLhKFwfdG%2BvE2dCL2W%2BxaA7ytdGZ05s69HA%2BeMKsq8TGvh55DaTs2G6Ghu42iJiz9r0z04DOWNlD3nO7HAuFoQlmv%2FVZVyG8%2B5lQhk%2BsfQg8S3f0QSiAV3u7LPLaA0IMzbGmBenAFyxR83DLZlbLDyYKPVLbIHVvpdxSy8X0hF86fGZ%2Bf2nVLi18EW6xLYr1XWdx1RSU%2FeNrfWshyD0wDoFlETXxN04L9C2obGUXfTNi7Q2PwPNpsJBKKjVlJTOt6i13s0m6jl4RvoohrI816RoI%2B94S6kaTBGKK0Kr5R6nMv5GvJn2nUUTRgadYwQWFoulM2OIESBbfLVNgSVuIK8NOLLXCYEU4bo1JqtZ9etYlfAPxvuyxnNRgV7bVXnCTdlgCdYblAcvnCjlsKHF0SCBJB8xd2gqlVEiTtKoLGeXsb9dZ%2Bo6wylWyfy9GFAODRh%2FTi5gzJGr3LqMGDYap%2BOLG%2FI5Jc3xdPWzDmbvNGZ1MKIUQSeI4kZCL%2BzgDcOf6xehLdMAo5kuRbV0PW%2BBZdl%2FGIVlYCmeQ8jSW2dfkFcTyX9cworXYvQY6pgEH%2Ft2RLToSBSseRF5NBuTK%2FQYXvId8g97k0LkmR8gbeXylUUUeZ83rv0qOenLBNJPECXMJfvf32gTHuMEvtg0rPLcDJ0vJgK5btWTk1KqaeB2NUx3huTPMGVj%2FeaC20EYOSyvQo7nE8mrVn28DM62EVVuVtH96o9h9z%2FG%2BFTPmvGSHg58s2wve8eUeIYUp5HGjRiZSzZ0Jd9LacMcC0j0SnykDArm4&X-Amz-Signature=0e79f90737a224fb57e03db73f8d09397d493f2df53af5ca78bec9abb3bf59a6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKSRO6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHagIj5YZ7aT2feyV%2BwQWgaX8fh5sc%2B1Gw3eINNXvy33AiBZhp17h0M4JUHMlDh1IwT7ZnKjKF7%2F4uVAbHe7TzKY4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx9U%2BJKF83VMJ8ABKtwDR5yLixGTKYuHyg7H%2B49segvWKavzzyonUMfp9IcscEzIHyOIl04AtomVfxUe9ZJ7Ou3hRjeGlzBtFLhKFwfdG%2BvE2dCL2W%2BxaA7ytdGZ05s69HA%2BeMKsq8TGvh55DaTs2G6Ghu42iJiz9r0z04DOWNlD3nO7HAuFoQlmv%2FVZVyG8%2B5lQhk%2BsfQg8S3f0QSiAV3u7LPLaA0IMzbGmBenAFyxR83DLZlbLDyYKPVLbIHVvpdxSy8X0hF86fGZ%2Bf2nVLi18EW6xLYr1XWdx1RSU%2FeNrfWshyD0wDoFlETXxN04L9C2obGUXfTNi7Q2PwPNpsJBKKjVlJTOt6i13s0m6jl4RvoohrI816RoI%2B94S6kaTBGKK0Kr5R6nMv5GvJn2nUUTRgadYwQWFoulM2OIESBbfLVNgSVuIK8NOLLXCYEU4bo1JqtZ9etYlfAPxvuyxnNRgV7bVXnCTdlgCdYblAcvnCjlsKHF0SCBJB8xd2gqlVEiTtKoLGeXsb9dZ%2Bo6wylWyfy9GFAODRh%2FTi5gzJGr3LqMGDYap%2BOLG%2FI5Jc3xdPWzDmbvNGZ1MKIUQSeI4kZCL%2BzgDcOf6xehLdMAo5kuRbV0PW%2BBZdl%2FGIVlYCmeQ8jSW2dfkFcTyX9cworXYvQY6pgEH%2Ft2RLToSBSseRF5NBuTK%2FQYXvId8g97k0LkmR8gbeXylUUUeZ83rv0qOenLBNJPECXMJfvf32gTHuMEvtg0rPLcDJ0vJgK5btWTk1KqaeB2NUx3huTPMGVj%2FeaC20EYOSyvQo7nE8mrVn28DM62EVVuVtH96o9h9z%2FG%2BFTPmvGSHg58s2wve8eUeIYUp5HGjRiZSzZ0Jd9LacMcC0j0SnykDArm4&X-Amz-Signature=251e84ee5e9a36e89b48975c23ea5ea0d8bec30e5fd6122afb9ea94dcc666b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
