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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTBYH45%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9pMBeari3%2Bqm24lvY1w%2BbGfpqJI%2B3RztR6Xhf7u8K%2BAiEAgE9iRVVvmFWEKA7Bxe1m%2BDQojugRLMzWw4c%2FewYf%2Fxkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKixhDwiCQq5P8KsUyrcAzJLjyNAcDtcO3o%2FYUSLpBI6aQu3Q4AEDVX8CIU2GaaoTYQHlPupUxLRbFGy%2BtifGeE6wa2R5jZCYuzxSLO6vhkL6DdQMlNVgPbVQpYRnKu389JMCXp3yuwvvWAeYDTcQwHRVFTNPl6VqSRag8L%2F8PqHXCCO9%2BTUKE6TYW2sLtl8lj8nx92%2FdnAYPfpEfBxkUTm4jRJ%2BZ6%2FTG28T4S%2B0hrvYWMtIvhEPw7GL4VuIIzOJN%2FDFjHeILwTENIUktPuxp6ZfpzOyhLOWrpjA9UqAKKg96Lp3u%2BKLZR1hLlFCoUNu9OX9r0Z%2Bq1Igf8rQk0poJeji%2F4fnKqoLfHRdsWO3rICjI7H9i2TCSHz%2BdK83B0d1Nt4UbbUrmiIHuNkvF3zCjpuvZqlKuMn5DkiEPUV%2FirPjcTiBiGJTzobG01BCFCahJg%2BzNsDo%2FNXuMRm8LPtz0KltVGW7VASXMs0%2BNbdfJxV172Yb4VFYHEg8M3fyPcIQ9iuFgn2jdqY25Irjc7w5isSDM5%2BxZeUG27YYhD22w0YXkZLcluTSs4aPNyMNXKAnmugGeJfB2MXStbrUeHdJfBN1D44B4vEp9sMMbTU8hVXA39KtizOy1jXRWr5FdJH7AlpGOoCXfbEV3bWPMN70gb0GOqUB4RaYH72hppFLAXk6yZpnUDjhKQG04VMJvlO0%2FQgG3llQuG3AzyCCnJBC4hBWpwA1fu6k%2F5zwdjZp69E4cU1Soapr3Y8wZAQNHdVNMHkWaPNnnjlrmCGKFsDRNgZ2daJJ2KrMyorgpee0%2Bq5A5fzD%2FHmunmd8%2FcABVGxv3xYCaHEkxhGsx98yKRgf4pIOL7FPUldT40aqF6%2F%2FkMvQmegCN4S4pmMB&X-Amz-Signature=ea5f056f88daef9d6021b358de27a6c086853621c7ac3466013e2caed3889646&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTBYH45%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9pMBeari3%2Bqm24lvY1w%2BbGfpqJI%2B3RztR6Xhf7u8K%2BAiEAgE9iRVVvmFWEKA7Bxe1m%2BDQojugRLMzWw4c%2FewYf%2Fxkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKixhDwiCQq5P8KsUyrcAzJLjyNAcDtcO3o%2FYUSLpBI6aQu3Q4AEDVX8CIU2GaaoTYQHlPupUxLRbFGy%2BtifGeE6wa2R5jZCYuzxSLO6vhkL6DdQMlNVgPbVQpYRnKu389JMCXp3yuwvvWAeYDTcQwHRVFTNPl6VqSRag8L%2F8PqHXCCO9%2BTUKE6TYW2sLtl8lj8nx92%2FdnAYPfpEfBxkUTm4jRJ%2BZ6%2FTG28T4S%2B0hrvYWMtIvhEPw7GL4VuIIzOJN%2FDFjHeILwTENIUktPuxp6ZfpzOyhLOWrpjA9UqAKKg96Lp3u%2BKLZR1hLlFCoUNu9OX9r0Z%2Bq1Igf8rQk0poJeji%2F4fnKqoLfHRdsWO3rICjI7H9i2TCSHz%2BdK83B0d1Nt4UbbUrmiIHuNkvF3zCjpuvZqlKuMn5DkiEPUV%2FirPjcTiBiGJTzobG01BCFCahJg%2BzNsDo%2FNXuMRm8LPtz0KltVGW7VASXMs0%2BNbdfJxV172Yb4VFYHEg8M3fyPcIQ9iuFgn2jdqY25Irjc7w5isSDM5%2BxZeUG27YYhD22w0YXkZLcluTSs4aPNyMNXKAnmugGeJfB2MXStbrUeHdJfBN1D44B4vEp9sMMbTU8hVXA39KtizOy1jXRWr5FdJH7AlpGOoCXfbEV3bWPMN70gb0GOqUB4RaYH72hppFLAXk6yZpnUDjhKQG04VMJvlO0%2FQgG3llQuG3AzyCCnJBC4hBWpwA1fu6k%2F5zwdjZp69E4cU1Soapr3Y8wZAQNHdVNMHkWaPNnnjlrmCGKFsDRNgZ2daJJ2KrMyorgpee0%2Bq5A5fzD%2FHmunmd8%2FcABVGxv3xYCaHEkxhGsx98yKRgf4pIOL7FPUldT40aqF6%2F%2FkMvQmegCN4S4pmMB&X-Amz-Signature=645c43d3a1e1ce015373521790f242ab8ad6cf193faca29905742342007b5dd4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTBYH45%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9pMBeari3%2Bqm24lvY1w%2BbGfpqJI%2B3RztR6Xhf7u8K%2BAiEAgE9iRVVvmFWEKA7Bxe1m%2BDQojugRLMzWw4c%2FewYf%2Fxkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKixhDwiCQq5P8KsUyrcAzJLjyNAcDtcO3o%2FYUSLpBI6aQu3Q4AEDVX8CIU2GaaoTYQHlPupUxLRbFGy%2BtifGeE6wa2R5jZCYuzxSLO6vhkL6DdQMlNVgPbVQpYRnKu389JMCXp3yuwvvWAeYDTcQwHRVFTNPl6VqSRag8L%2F8PqHXCCO9%2BTUKE6TYW2sLtl8lj8nx92%2FdnAYPfpEfBxkUTm4jRJ%2BZ6%2FTG28T4S%2B0hrvYWMtIvhEPw7GL4VuIIzOJN%2FDFjHeILwTENIUktPuxp6ZfpzOyhLOWrpjA9UqAKKg96Lp3u%2BKLZR1hLlFCoUNu9OX9r0Z%2Bq1Igf8rQk0poJeji%2F4fnKqoLfHRdsWO3rICjI7H9i2TCSHz%2BdK83B0d1Nt4UbbUrmiIHuNkvF3zCjpuvZqlKuMn5DkiEPUV%2FirPjcTiBiGJTzobG01BCFCahJg%2BzNsDo%2FNXuMRm8LPtz0KltVGW7VASXMs0%2BNbdfJxV172Yb4VFYHEg8M3fyPcIQ9iuFgn2jdqY25Irjc7w5isSDM5%2BxZeUG27YYhD22w0YXkZLcluTSs4aPNyMNXKAnmugGeJfB2MXStbrUeHdJfBN1D44B4vEp9sMMbTU8hVXA39KtizOy1jXRWr5FdJH7AlpGOoCXfbEV3bWPMN70gb0GOqUB4RaYH72hppFLAXk6yZpnUDjhKQG04VMJvlO0%2FQgG3llQuG3AzyCCnJBC4hBWpwA1fu6k%2F5zwdjZp69E4cU1Soapr3Y8wZAQNHdVNMHkWaPNnnjlrmCGKFsDRNgZ2daJJ2KrMyorgpee0%2Bq5A5fzD%2FHmunmd8%2FcABVGxv3xYCaHEkxhGsx98yKRgf4pIOL7FPUldT40aqF6%2F%2FkMvQmegCN4S4pmMB&X-Amz-Signature=61411269f289c41b73749dcd57d84c0fd5ecb0a0bf53ae84c54f6c5ee204b2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTBYH45%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9pMBeari3%2Bqm24lvY1w%2BbGfpqJI%2B3RztR6Xhf7u8K%2BAiEAgE9iRVVvmFWEKA7Bxe1m%2BDQojugRLMzWw4c%2FewYf%2Fxkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKixhDwiCQq5P8KsUyrcAzJLjyNAcDtcO3o%2FYUSLpBI6aQu3Q4AEDVX8CIU2GaaoTYQHlPupUxLRbFGy%2BtifGeE6wa2R5jZCYuzxSLO6vhkL6DdQMlNVgPbVQpYRnKu389JMCXp3yuwvvWAeYDTcQwHRVFTNPl6VqSRag8L%2F8PqHXCCO9%2BTUKE6TYW2sLtl8lj8nx92%2FdnAYPfpEfBxkUTm4jRJ%2BZ6%2FTG28T4S%2B0hrvYWMtIvhEPw7GL4VuIIzOJN%2FDFjHeILwTENIUktPuxp6ZfpzOyhLOWrpjA9UqAKKg96Lp3u%2BKLZR1hLlFCoUNu9OX9r0Z%2Bq1Igf8rQk0poJeji%2F4fnKqoLfHRdsWO3rICjI7H9i2TCSHz%2BdK83B0d1Nt4UbbUrmiIHuNkvF3zCjpuvZqlKuMn5DkiEPUV%2FirPjcTiBiGJTzobG01BCFCahJg%2BzNsDo%2FNXuMRm8LPtz0KltVGW7VASXMs0%2BNbdfJxV172Yb4VFYHEg8M3fyPcIQ9iuFgn2jdqY25Irjc7w5isSDM5%2BxZeUG27YYhD22w0YXkZLcluTSs4aPNyMNXKAnmugGeJfB2MXStbrUeHdJfBN1D44B4vEp9sMMbTU8hVXA39KtizOy1jXRWr5FdJH7AlpGOoCXfbEV3bWPMN70gb0GOqUB4RaYH72hppFLAXk6yZpnUDjhKQG04VMJvlO0%2FQgG3llQuG3AzyCCnJBC4hBWpwA1fu6k%2F5zwdjZp69E4cU1Soapr3Y8wZAQNHdVNMHkWaPNnnjlrmCGKFsDRNgZ2daJJ2KrMyorgpee0%2Bq5A5fzD%2FHmunmd8%2FcABVGxv3xYCaHEkxhGsx98yKRgf4pIOL7FPUldT40aqF6%2F%2FkMvQmegCN4S4pmMB&X-Amz-Signature=a6a54ab400df2985c6099937b78b0e5940f44bd36494efffaeb601555a0f16f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTBYH45%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9pMBeari3%2Bqm24lvY1w%2BbGfpqJI%2B3RztR6Xhf7u8K%2BAiEAgE9iRVVvmFWEKA7Bxe1m%2BDQojugRLMzWw4c%2FewYf%2Fxkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKixhDwiCQq5P8KsUyrcAzJLjyNAcDtcO3o%2FYUSLpBI6aQu3Q4AEDVX8CIU2GaaoTYQHlPupUxLRbFGy%2BtifGeE6wa2R5jZCYuzxSLO6vhkL6DdQMlNVgPbVQpYRnKu389JMCXp3yuwvvWAeYDTcQwHRVFTNPl6VqSRag8L%2F8PqHXCCO9%2BTUKE6TYW2sLtl8lj8nx92%2FdnAYPfpEfBxkUTm4jRJ%2BZ6%2FTG28T4S%2B0hrvYWMtIvhEPw7GL4VuIIzOJN%2FDFjHeILwTENIUktPuxp6ZfpzOyhLOWrpjA9UqAKKg96Lp3u%2BKLZR1hLlFCoUNu9OX9r0Z%2Bq1Igf8rQk0poJeji%2F4fnKqoLfHRdsWO3rICjI7H9i2TCSHz%2BdK83B0d1Nt4UbbUrmiIHuNkvF3zCjpuvZqlKuMn5DkiEPUV%2FirPjcTiBiGJTzobG01BCFCahJg%2BzNsDo%2FNXuMRm8LPtz0KltVGW7VASXMs0%2BNbdfJxV172Yb4VFYHEg8M3fyPcIQ9iuFgn2jdqY25Irjc7w5isSDM5%2BxZeUG27YYhD22w0YXkZLcluTSs4aPNyMNXKAnmugGeJfB2MXStbrUeHdJfBN1D44B4vEp9sMMbTU8hVXA39KtizOy1jXRWr5FdJH7AlpGOoCXfbEV3bWPMN70gb0GOqUB4RaYH72hppFLAXk6yZpnUDjhKQG04VMJvlO0%2FQgG3llQuG3AzyCCnJBC4hBWpwA1fu6k%2F5zwdjZp69E4cU1Soapr3Y8wZAQNHdVNMHkWaPNnnjlrmCGKFsDRNgZ2daJJ2KrMyorgpee0%2Bq5A5fzD%2FHmunmd8%2FcABVGxv3xYCaHEkxhGsx98yKRgf4pIOL7FPUldT40aqF6%2F%2FkMvQmegCN4S4pmMB&X-Amz-Signature=592070f442b446024ec447bea8f6ff906bff2223481c6028ae7d0e74a328a67e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTBYH45%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9pMBeari3%2Bqm24lvY1w%2BbGfpqJI%2B3RztR6Xhf7u8K%2BAiEAgE9iRVVvmFWEKA7Bxe1m%2BDQojugRLMzWw4c%2FewYf%2Fxkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKixhDwiCQq5P8KsUyrcAzJLjyNAcDtcO3o%2FYUSLpBI6aQu3Q4AEDVX8CIU2GaaoTYQHlPupUxLRbFGy%2BtifGeE6wa2R5jZCYuzxSLO6vhkL6DdQMlNVgPbVQpYRnKu389JMCXp3yuwvvWAeYDTcQwHRVFTNPl6VqSRag8L%2F8PqHXCCO9%2BTUKE6TYW2sLtl8lj8nx92%2FdnAYPfpEfBxkUTm4jRJ%2BZ6%2FTG28T4S%2B0hrvYWMtIvhEPw7GL4VuIIzOJN%2FDFjHeILwTENIUktPuxp6ZfpzOyhLOWrpjA9UqAKKg96Lp3u%2BKLZR1hLlFCoUNu9OX9r0Z%2Bq1Igf8rQk0poJeji%2F4fnKqoLfHRdsWO3rICjI7H9i2TCSHz%2BdK83B0d1Nt4UbbUrmiIHuNkvF3zCjpuvZqlKuMn5DkiEPUV%2FirPjcTiBiGJTzobG01BCFCahJg%2BzNsDo%2FNXuMRm8LPtz0KltVGW7VASXMs0%2BNbdfJxV172Yb4VFYHEg8M3fyPcIQ9iuFgn2jdqY25Irjc7w5isSDM5%2BxZeUG27YYhD22w0YXkZLcluTSs4aPNyMNXKAnmugGeJfB2MXStbrUeHdJfBN1D44B4vEp9sMMbTU8hVXA39KtizOy1jXRWr5FdJH7AlpGOoCXfbEV3bWPMN70gb0GOqUB4RaYH72hppFLAXk6yZpnUDjhKQG04VMJvlO0%2FQgG3llQuG3AzyCCnJBC4hBWpwA1fu6k%2F5zwdjZp69E4cU1Soapr3Y8wZAQNHdVNMHkWaPNnnjlrmCGKFsDRNgZ2daJJ2KrMyorgpee0%2Bq5A5fzD%2FHmunmd8%2FcABVGxv3xYCaHEkxhGsx98yKRgf4pIOL7FPUldT40aqF6%2F%2FkMvQmegCN4S4pmMB&X-Amz-Signature=61a505917d40b3c6663290f8e2f59200e539fd76c8480a2d85558d914c67972b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTBYH45%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9pMBeari3%2Bqm24lvY1w%2BbGfpqJI%2B3RztR6Xhf7u8K%2BAiEAgE9iRVVvmFWEKA7Bxe1m%2BDQojugRLMzWw4c%2FewYf%2Fxkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKixhDwiCQq5P8KsUyrcAzJLjyNAcDtcO3o%2FYUSLpBI6aQu3Q4AEDVX8CIU2GaaoTYQHlPupUxLRbFGy%2BtifGeE6wa2R5jZCYuzxSLO6vhkL6DdQMlNVgPbVQpYRnKu389JMCXp3yuwvvWAeYDTcQwHRVFTNPl6VqSRag8L%2F8PqHXCCO9%2BTUKE6TYW2sLtl8lj8nx92%2FdnAYPfpEfBxkUTm4jRJ%2BZ6%2FTG28T4S%2B0hrvYWMtIvhEPw7GL4VuIIzOJN%2FDFjHeILwTENIUktPuxp6ZfpzOyhLOWrpjA9UqAKKg96Lp3u%2BKLZR1hLlFCoUNu9OX9r0Z%2Bq1Igf8rQk0poJeji%2F4fnKqoLfHRdsWO3rICjI7H9i2TCSHz%2BdK83B0d1Nt4UbbUrmiIHuNkvF3zCjpuvZqlKuMn5DkiEPUV%2FirPjcTiBiGJTzobG01BCFCahJg%2BzNsDo%2FNXuMRm8LPtz0KltVGW7VASXMs0%2BNbdfJxV172Yb4VFYHEg8M3fyPcIQ9iuFgn2jdqY25Irjc7w5isSDM5%2BxZeUG27YYhD22w0YXkZLcluTSs4aPNyMNXKAnmugGeJfB2MXStbrUeHdJfBN1D44B4vEp9sMMbTU8hVXA39KtizOy1jXRWr5FdJH7AlpGOoCXfbEV3bWPMN70gb0GOqUB4RaYH72hppFLAXk6yZpnUDjhKQG04VMJvlO0%2FQgG3llQuG3AzyCCnJBC4hBWpwA1fu6k%2F5zwdjZp69E4cU1Soapr3Y8wZAQNHdVNMHkWaPNnnjlrmCGKFsDRNgZ2daJJ2KrMyorgpee0%2Bq5A5fzD%2FHmunmd8%2FcABVGxv3xYCaHEkxhGsx98yKRgf4pIOL7FPUldT40aqF6%2F%2FkMvQmegCN4S4pmMB&X-Amz-Signature=9312460dc8f6a07e1f592d1b32f6119af7e14182094b458d9310d64ebecb0ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
