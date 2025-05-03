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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7D4SSH7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDtAHw%2Fs3iQfOXwr25jrDnveBMxyAYH0TDvRbItQdfOxAiBcBj1D1HsAS%2B7GHTqGRn4sd9z4nQ2xdQ00f3aJalWIiCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSisQOQYBmfwZ%2BPe%2FKtwDzwrEJE7pF0jU59IlfYa%2Bx4dJCRayB6YLoBRdvDZKue36HmOhCf7CJuqlEGxMY0ZGOORZlbF%2BOZDFcDoiDkwn7Pi3VAVyF3%2FsSKz8PQ4X3CDJDX%2F21wMg50u7G9sphpD6wLYbXqtQueUItl22Xke7fwIvI%2BvqSV4JeCgX5aKL%2FJ%2FlWBEEtfcoEn9R4XKS0N9DN%2BUzFQ6%2FwQqciwGF4dI2qI%2FsC7Rny1beH3bmdELN1TrheA2QAUkz%2F7lfkJ6N8y2nNf8V%2FtvnKwqpJpXthesvh18VNX%2FcGFQyJUjVQYHR7pvAg3HqfDJjlUg3UNN1DMkKJbjhMwgCBuHhVcQk8QX%2FI4Fte4u%2FF5D2N93cLCRaK1hN3zA8srQLv54y%2Bl6TOoMFBVwgrhsQaDlqJ6TDy%2B1zChi6THXJ0%2FvTj5u6GHkpa2wYn69MdDsPTcFQ%2FjUE4vOSjQRjMWHRJEboimOElrpTMn6FBXpLvgNFzi9%2B0HLyUXI%2FEQ02J%2FNdRn1R83jP1U0PnTCEtq6CE0eXlN9JZvWm6XhuVGdFXphhoD%2BtVbYPVHJRKpHXt8qP3FQS%2BdWeP%2BYM%2B%2F9hqNn0bj6pHFoJcSCvs8mNjwHYR6IEIi8AdDQXaod6ULdd9oOCL4vvSjow38HZwAY6pgGoEzd%2FlftOma9rkuTt%2BPGEY85Gr7z3qglGRs%2BeWzj3iPzFhiTwy22%2F%2B1L%2Faz0fyB3YduV0feIjIWF%2FzDq6LJEfNVE8avR6bbgIwsbTilY6ly8s%2FRvB30K3dyY8pK17rDIcQ7jsVS%2FGg4FPogIs8CPRsw67h548H9iggC0F5%2FdPlIZjxkWj8WIgAmWjVDIYZ8nIQHGMlqUqibjKZgKIPxDyk1txtoIq&X-Amz-Signature=f74db0a93a608f8e15134bc925ae71407b0526191ef4eb13b8bebe21e4dd7274&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7D4SSH7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDtAHw%2Fs3iQfOXwr25jrDnveBMxyAYH0TDvRbItQdfOxAiBcBj1D1HsAS%2B7GHTqGRn4sd9z4nQ2xdQ00f3aJalWIiCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSisQOQYBmfwZ%2BPe%2FKtwDzwrEJE7pF0jU59IlfYa%2Bx4dJCRayB6YLoBRdvDZKue36HmOhCf7CJuqlEGxMY0ZGOORZlbF%2BOZDFcDoiDkwn7Pi3VAVyF3%2FsSKz8PQ4X3CDJDX%2F21wMg50u7G9sphpD6wLYbXqtQueUItl22Xke7fwIvI%2BvqSV4JeCgX5aKL%2FJ%2FlWBEEtfcoEn9R4XKS0N9DN%2BUzFQ6%2FwQqciwGF4dI2qI%2FsC7Rny1beH3bmdELN1TrheA2QAUkz%2F7lfkJ6N8y2nNf8V%2FtvnKwqpJpXthesvh18VNX%2FcGFQyJUjVQYHR7pvAg3HqfDJjlUg3UNN1DMkKJbjhMwgCBuHhVcQk8QX%2FI4Fte4u%2FF5D2N93cLCRaK1hN3zA8srQLv54y%2Bl6TOoMFBVwgrhsQaDlqJ6TDy%2B1zChi6THXJ0%2FvTj5u6GHkpa2wYn69MdDsPTcFQ%2FjUE4vOSjQRjMWHRJEboimOElrpTMn6FBXpLvgNFzi9%2B0HLyUXI%2FEQ02J%2FNdRn1R83jP1U0PnTCEtq6CE0eXlN9JZvWm6XhuVGdFXphhoD%2BtVbYPVHJRKpHXt8qP3FQS%2BdWeP%2BYM%2B%2F9hqNn0bj6pHFoJcSCvs8mNjwHYR6IEIi8AdDQXaod6ULdd9oOCL4vvSjow38HZwAY6pgGoEzd%2FlftOma9rkuTt%2BPGEY85Gr7z3qglGRs%2BeWzj3iPzFhiTwy22%2F%2B1L%2Faz0fyB3YduV0feIjIWF%2FzDq6LJEfNVE8avR6bbgIwsbTilY6ly8s%2FRvB30K3dyY8pK17rDIcQ7jsVS%2FGg4FPogIs8CPRsw67h548H9iggC0F5%2FdPlIZjxkWj8WIgAmWjVDIYZ8nIQHGMlqUqibjKZgKIPxDyk1txtoIq&X-Amz-Signature=258b7da65f39f3db44da3688062312b04e2ce01a38d868a83070b34a6148e1b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7D4SSH7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDtAHw%2Fs3iQfOXwr25jrDnveBMxyAYH0TDvRbItQdfOxAiBcBj1D1HsAS%2B7GHTqGRn4sd9z4nQ2xdQ00f3aJalWIiCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSisQOQYBmfwZ%2BPe%2FKtwDzwrEJE7pF0jU59IlfYa%2Bx4dJCRayB6YLoBRdvDZKue36HmOhCf7CJuqlEGxMY0ZGOORZlbF%2BOZDFcDoiDkwn7Pi3VAVyF3%2FsSKz8PQ4X3CDJDX%2F21wMg50u7G9sphpD6wLYbXqtQueUItl22Xke7fwIvI%2BvqSV4JeCgX5aKL%2FJ%2FlWBEEtfcoEn9R4XKS0N9DN%2BUzFQ6%2FwQqciwGF4dI2qI%2FsC7Rny1beH3bmdELN1TrheA2QAUkz%2F7lfkJ6N8y2nNf8V%2FtvnKwqpJpXthesvh18VNX%2FcGFQyJUjVQYHR7pvAg3HqfDJjlUg3UNN1DMkKJbjhMwgCBuHhVcQk8QX%2FI4Fte4u%2FF5D2N93cLCRaK1hN3zA8srQLv54y%2Bl6TOoMFBVwgrhsQaDlqJ6TDy%2B1zChi6THXJ0%2FvTj5u6GHkpa2wYn69MdDsPTcFQ%2FjUE4vOSjQRjMWHRJEboimOElrpTMn6FBXpLvgNFzi9%2B0HLyUXI%2FEQ02J%2FNdRn1R83jP1U0PnTCEtq6CE0eXlN9JZvWm6XhuVGdFXphhoD%2BtVbYPVHJRKpHXt8qP3FQS%2BdWeP%2BYM%2B%2F9hqNn0bj6pHFoJcSCvs8mNjwHYR6IEIi8AdDQXaod6ULdd9oOCL4vvSjow38HZwAY6pgGoEzd%2FlftOma9rkuTt%2BPGEY85Gr7z3qglGRs%2BeWzj3iPzFhiTwy22%2F%2B1L%2Faz0fyB3YduV0feIjIWF%2FzDq6LJEfNVE8avR6bbgIwsbTilY6ly8s%2FRvB30K3dyY8pK17rDIcQ7jsVS%2FGg4FPogIs8CPRsw67h548H9iggC0F5%2FdPlIZjxkWj8WIgAmWjVDIYZ8nIQHGMlqUqibjKZgKIPxDyk1txtoIq&X-Amz-Signature=63a92fbe10755edb87c15257f32d1fc286a573aa6473476530e04a7fe2d4b1ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7D4SSH7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDtAHw%2Fs3iQfOXwr25jrDnveBMxyAYH0TDvRbItQdfOxAiBcBj1D1HsAS%2B7GHTqGRn4sd9z4nQ2xdQ00f3aJalWIiCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSisQOQYBmfwZ%2BPe%2FKtwDzwrEJE7pF0jU59IlfYa%2Bx4dJCRayB6YLoBRdvDZKue36HmOhCf7CJuqlEGxMY0ZGOORZlbF%2BOZDFcDoiDkwn7Pi3VAVyF3%2FsSKz8PQ4X3CDJDX%2F21wMg50u7G9sphpD6wLYbXqtQueUItl22Xke7fwIvI%2BvqSV4JeCgX5aKL%2FJ%2FlWBEEtfcoEn9R4XKS0N9DN%2BUzFQ6%2FwQqciwGF4dI2qI%2FsC7Rny1beH3bmdELN1TrheA2QAUkz%2F7lfkJ6N8y2nNf8V%2FtvnKwqpJpXthesvh18VNX%2FcGFQyJUjVQYHR7pvAg3HqfDJjlUg3UNN1DMkKJbjhMwgCBuHhVcQk8QX%2FI4Fte4u%2FF5D2N93cLCRaK1hN3zA8srQLv54y%2Bl6TOoMFBVwgrhsQaDlqJ6TDy%2B1zChi6THXJ0%2FvTj5u6GHkpa2wYn69MdDsPTcFQ%2FjUE4vOSjQRjMWHRJEboimOElrpTMn6FBXpLvgNFzi9%2B0HLyUXI%2FEQ02J%2FNdRn1R83jP1U0PnTCEtq6CE0eXlN9JZvWm6XhuVGdFXphhoD%2BtVbYPVHJRKpHXt8qP3FQS%2BdWeP%2BYM%2B%2F9hqNn0bj6pHFoJcSCvs8mNjwHYR6IEIi8AdDQXaod6ULdd9oOCL4vvSjow38HZwAY6pgGoEzd%2FlftOma9rkuTt%2BPGEY85Gr7z3qglGRs%2BeWzj3iPzFhiTwy22%2F%2B1L%2Faz0fyB3YduV0feIjIWF%2FzDq6LJEfNVE8avR6bbgIwsbTilY6ly8s%2FRvB30K3dyY8pK17rDIcQ7jsVS%2FGg4FPogIs8CPRsw67h548H9iggC0F5%2FdPlIZjxkWj8WIgAmWjVDIYZ8nIQHGMlqUqibjKZgKIPxDyk1txtoIq&X-Amz-Signature=c308c4145fb95db9ba5a2f992d52da7e1c9836ffbfb6bdf0a54fbe52eb4e9ade&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7D4SSH7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDtAHw%2Fs3iQfOXwr25jrDnveBMxyAYH0TDvRbItQdfOxAiBcBj1D1HsAS%2B7GHTqGRn4sd9z4nQ2xdQ00f3aJalWIiCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSisQOQYBmfwZ%2BPe%2FKtwDzwrEJE7pF0jU59IlfYa%2Bx4dJCRayB6YLoBRdvDZKue36HmOhCf7CJuqlEGxMY0ZGOORZlbF%2BOZDFcDoiDkwn7Pi3VAVyF3%2FsSKz8PQ4X3CDJDX%2F21wMg50u7G9sphpD6wLYbXqtQueUItl22Xke7fwIvI%2BvqSV4JeCgX5aKL%2FJ%2FlWBEEtfcoEn9R4XKS0N9DN%2BUzFQ6%2FwQqciwGF4dI2qI%2FsC7Rny1beH3bmdELN1TrheA2QAUkz%2F7lfkJ6N8y2nNf8V%2FtvnKwqpJpXthesvh18VNX%2FcGFQyJUjVQYHR7pvAg3HqfDJjlUg3UNN1DMkKJbjhMwgCBuHhVcQk8QX%2FI4Fte4u%2FF5D2N93cLCRaK1hN3zA8srQLv54y%2Bl6TOoMFBVwgrhsQaDlqJ6TDy%2B1zChi6THXJ0%2FvTj5u6GHkpa2wYn69MdDsPTcFQ%2FjUE4vOSjQRjMWHRJEboimOElrpTMn6FBXpLvgNFzi9%2B0HLyUXI%2FEQ02J%2FNdRn1R83jP1U0PnTCEtq6CE0eXlN9JZvWm6XhuVGdFXphhoD%2BtVbYPVHJRKpHXt8qP3FQS%2BdWeP%2BYM%2B%2F9hqNn0bj6pHFoJcSCvs8mNjwHYR6IEIi8AdDQXaod6ULdd9oOCL4vvSjow38HZwAY6pgGoEzd%2FlftOma9rkuTt%2BPGEY85Gr7z3qglGRs%2BeWzj3iPzFhiTwy22%2F%2B1L%2Faz0fyB3YduV0feIjIWF%2FzDq6LJEfNVE8avR6bbgIwsbTilY6ly8s%2FRvB30K3dyY8pK17rDIcQ7jsVS%2FGg4FPogIs8CPRsw67h548H9iggC0F5%2FdPlIZjxkWj8WIgAmWjVDIYZ8nIQHGMlqUqibjKZgKIPxDyk1txtoIq&X-Amz-Signature=ba5b26b6baf071b9a38e6734624f9f0719935c3536041aa0223b0692106c7a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7D4SSH7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDtAHw%2Fs3iQfOXwr25jrDnveBMxyAYH0TDvRbItQdfOxAiBcBj1D1HsAS%2B7GHTqGRn4sd9z4nQ2xdQ00f3aJalWIiCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSisQOQYBmfwZ%2BPe%2FKtwDzwrEJE7pF0jU59IlfYa%2Bx4dJCRayB6YLoBRdvDZKue36HmOhCf7CJuqlEGxMY0ZGOORZlbF%2BOZDFcDoiDkwn7Pi3VAVyF3%2FsSKz8PQ4X3CDJDX%2F21wMg50u7G9sphpD6wLYbXqtQueUItl22Xke7fwIvI%2BvqSV4JeCgX5aKL%2FJ%2FlWBEEtfcoEn9R4XKS0N9DN%2BUzFQ6%2FwQqciwGF4dI2qI%2FsC7Rny1beH3bmdELN1TrheA2QAUkz%2F7lfkJ6N8y2nNf8V%2FtvnKwqpJpXthesvh18VNX%2FcGFQyJUjVQYHR7pvAg3HqfDJjlUg3UNN1DMkKJbjhMwgCBuHhVcQk8QX%2FI4Fte4u%2FF5D2N93cLCRaK1hN3zA8srQLv54y%2Bl6TOoMFBVwgrhsQaDlqJ6TDy%2B1zChi6THXJ0%2FvTj5u6GHkpa2wYn69MdDsPTcFQ%2FjUE4vOSjQRjMWHRJEboimOElrpTMn6FBXpLvgNFzi9%2B0HLyUXI%2FEQ02J%2FNdRn1R83jP1U0PnTCEtq6CE0eXlN9JZvWm6XhuVGdFXphhoD%2BtVbYPVHJRKpHXt8qP3FQS%2BdWeP%2BYM%2B%2F9hqNn0bj6pHFoJcSCvs8mNjwHYR6IEIi8AdDQXaod6ULdd9oOCL4vvSjow38HZwAY6pgGoEzd%2FlftOma9rkuTt%2BPGEY85Gr7z3qglGRs%2BeWzj3iPzFhiTwy22%2F%2B1L%2Faz0fyB3YduV0feIjIWF%2FzDq6LJEfNVE8avR6bbgIwsbTilY6ly8s%2FRvB30K3dyY8pK17rDIcQ7jsVS%2FGg4FPogIs8CPRsw67h548H9iggC0F5%2FdPlIZjxkWj8WIgAmWjVDIYZ8nIQHGMlqUqibjKZgKIPxDyk1txtoIq&X-Amz-Signature=f594e6ab309bb4c1b17845694707539af57c00ee4950f868787339e3698117d2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7D4SSH7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDtAHw%2Fs3iQfOXwr25jrDnveBMxyAYH0TDvRbItQdfOxAiBcBj1D1HsAS%2B7GHTqGRn4sd9z4nQ2xdQ00f3aJalWIiCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSisQOQYBmfwZ%2BPe%2FKtwDzwrEJE7pF0jU59IlfYa%2Bx4dJCRayB6YLoBRdvDZKue36HmOhCf7CJuqlEGxMY0ZGOORZlbF%2BOZDFcDoiDkwn7Pi3VAVyF3%2FsSKz8PQ4X3CDJDX%2F21wMg50u7G9sphpD6wLYbXqtQueUItl22Xke7fwIvI%2BvqSV4JeCgX5aKL%2FJ%2FlWBEEtfcoEn9R4XKS0N9DN%2BUzFQ6%2FwQqciwGF4dI2qI%2FsC7Rny1beH3bmdELN1TrheA2QAUkz%2F7lfkJ6N8y2nNf8V%2FtvnKwqpJpXthesvh18VNX%2FcGFQyJUjVQYHR7pvAg3HqfDJjlUg3UNN1DMkKJbjhMwgCBuHhVcQk8QX%2FI4Fte4u%2FF5D2N93cLCRaK1hN3zA8srQLv54y%2Bl6TOoMFBVwgrhsQaDlqJ6TDy%2B1zChi6THXJ0%2FvTj5u6GHkpa2wYn69MdDsPTcFQ%2FjUE4vOSjQRjMWHRJEboimOElrpTMn6FBXpLvgNFzi9%2B0HLyUXI%2FEQ02J%2FNdRn1R83jP1U0PnTCEtq6CE0eXlN9JZvWm6XhuVGdFXphhoD%2BtVbYPVHJRKpHXt8qP3FQS%2BdWeP%2BYM%2B%2F9hqNn0bj6pHFoJcSCvs8mNjwHYR6IEIi8AdDQXaod6ULdd9oOCL4vvSjow38HZwAY6pgGoEzd%2FlftOma9rkuTt%2BPGEY85Gr7z3qglGRs%2BeWzj3iPzFhiTwy22%2F%2B1L%2Faz0fyB3YduV0feIjIWF%2FzDq6LJEfNVE8avR6bbgIwsbTilY6ly8s%2FRvB30K3dyY8pK17rDIcQ7jsVS%2FGg4FPogIs8CPRsw67h548H9iggC0F5%2FdPlIZjxkWj8WIgAmWjVDIYZ8nIQHGMlqUqibjKZgKIPxDyk1txtoIq&X-Amz-Signature=de071fe831f7436938c63d679b51045616d5ccaf59b1a15e45671b6fc50b6dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
