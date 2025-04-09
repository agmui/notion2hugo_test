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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYNQ52S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFXgrpQ3oyEw1iGdx%2FEfop%2FFJ%2FrK1mDSl2LagjBUIwuuAiEA8s3KMeqRG7H6qoFNCcq%2FRf1JB3NdE5y1BOSMkYVc2skqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYVhOCzx7eYtYXGrCrcA8O1v6isfPSdzFgstw1DmZwKLhknOr2KjuvApK%2BQWkD8Q%2Fbdu48OxLgr1xFCv3vO6oNm40MWqocR1KlZIEngBwLz2LD0hfhPxk8ixToYwPX5mk4d%2FdU4IappqZ0icIaXzKgpiEa5jycRK%2Bm498qKOr5LLrAh5Fo4yVre9C8GA%2FURY6kU6q9VGMAKsl2q3%2FA%2FbFddxwKPDs6c0z2XpADBqJ%2BjNA6dRu%2F91wpwIZLONCF6QxiTdz3mkiqWmUv2vKROpEs00cuIQUshJAZ%2BxANk%2F0cSjY29YZHxQSjXYAq6V8IGqRUxzoOiR%2BO%2FMnAAy0lCSWe7c6uYRLZrQElfzv1WLxb6vLKA9h92t4YgSY3MGeP%2FYltmzJNBBkEb2qChh9BdgfAUn36HJoFBs9yguqH41GRVQHXeu2R5qfkIITysCpXEESpaUqJq07Y55m9X2igiMC9yeMHu8i4KxdVqdFvrS4LvWZHI71zmYx8mJEAozzFFDJKV%2BNqYXz76%2BA5kIjGa%2FgSe34pcGfnKnvkTTTz5GkhxNvF3Ull4pl%2F3MEQM8iPygE7YZo85WWURjX21GFKYYhcwefjcSpj7cl6%2B01V%2F9tl%2FAQuL3RHtngjhFDS6c8hyOgiSwlzGA9zrJqjlMLT82L8GOqUBap9nSR7n8aKx%2BdbG6hvsqsfy59JEhC58x1uiCegQiy1J%2B28bwtAgHmxUWI8W3mTjNSPhR4CrkbsyjcVAuPSN7BKh64P5VwZ8rSqXDwirwiq8iAl8u6%2F91kC4Su513N3fwiSt6yOmwHR3yGLYbRwStlmjy4clWb733JlLRgj8NW1ZEQRFCYvW8EJ6RASFV7aIM2VSZqtGo%2BtW33PUbWa2oUoAhfTE&X-Amz-Signature=710584f5dd23c0ae9356aec9e5ff1d96dc07d9acd5d74d51e8a97f2c71b262b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYNQ52S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFXgrpQ3oyEw1iGdx%2FEfop%2FFJ%2FrK1mDSl2LagjBUIwuuAiEA8s3KMeqRG7H6qoFNCcq%2FRf1JB3NdE5y1BOSMkYVc2skqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYVhOCzx7eYtYXGrCrcA8O1v6isfPSdzFgstw1DmZwKLhknOr2KjuvApK%2BQWkD8Q%2Fbdu48OxLgr1xFCv3vO6oNm40MWqocR1KlZIEngBwLz2LD0hfhPxk8ixToYwPX5mk4d%2FdU4IappqZ0icIaXzKgpiEa5jycRK%2Bm498qKOr5LLrAh5Fo4yVre9C8GA%2FURY6kU6q9VGMAKsl2q3%2FA%2FbFddxwKPDs6c0z2XpADBqJ%2BjNA6dRu%2F91wpwIZLONCF6QxiTdz3mkiqWmUv2vKROpEs00cuIQUshJAZ%2BxANk%2F0cSjY29YZHxQSjXYAq6V8IGqRUxzoOiR%2BO%2FMnAAy0lCSWe7c6uYRLZrQElfzv1WLxb6vLKA9h92t4YgSY3MGeP%2FYltmzJNBBkEb2qChh9BdgfAUn36HJoFBs9yguqH41GRVQHXeu2R5qfkIITysCpXEESpaUqJq07Y55m9X2igiMC9yeMHu8i4KxdVqdFvrS4LvWZHI71zmYx8mJEAozzFFDJKV%2BNqYXz76%2BA5kIjGa%2FgSe34pcGfnKnvkTTTz5GkhxNvF3Ull4pl%2F3MEQM8iPygE7YZo85WWURjX21GFKYYhcwefjcSpj7cl6%2B01V%2F9tl%2FAQuL3RHtngjhFDS6c8hyOgiSwlzGA9zrJqjlMLT82L8GOqUBap9nSR7n8aKx%2BdbG6hvsqsfy59JEhC58x1uiCegQiy1J%2B28bwtAgHmxUWI8W3mTjNSPhR4CrkbsyjcVAuPSN7BKh64P5VwZ8rSqXDwirwiq8iAl8u6%2F91kC4Su513N3fwiSt6yOmwHR3yGLYbRwStlmjy4clWb733JlLRgj8NW1ZEQRFCYvW8EJ6RASFV7aIM2VSZqtGo%2BtW33PUbWa2oUoAhfTE&X-Amz-Signature=f0decdc472c5497a23455eab35efc889a641555928d4b7d7e41b4d137b31cd0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYNQ52S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFXgrpQ3oyEw1iGdx%2FEfop%2FFJ%2FrK1mDSl2LagjBUIwuuAiEA8s3KMeqRG7H6qoFNCcq%2FRf1JB3NdE5y1BOSMkYVc2skqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYVhOCzx7eYtYXGrCrcA8O1v6isfPSdzFgstw1DmZwKLhknOr2KjuvApK%2BQWkD8Q%2Fbdu48OxLgr1xFCv3vO6oNm40MWqocR1KlZIEngBwLz2LD0hfhPxk8ixToYwPX5mk4d%2FdU4IappqZ0icIaXzKgpiEa5jycRK%2Bm498qKOr5LLrAh5Fo4yVre9C8GA%2FURY6kU6q9VGMAKsl2q3%2FA%2FbFddxwKPDs6c0z2XpADBqJ%2BjNA6dRu%2F91wpwIZLONCF6QxiTdz3mkiqWmUv2vKROpEs00cuIQUshJAZ%2BxANk%2F0cSjY29YZHxQSjXYAq6V8IGqRUxzoOiR%2BO%2FMnAAy0lCSWe7c6uYRLZrQElfzv1WLxb6vLKA9h92t4YgSY3MGeP%2FYltmzJNBBkEb2qChh9BdgfAUn36HJoFBs9yguqH41GRVQHXeu2R5qfkIITysCpXEESpaUqJq07Y55m9X2igiMC9yeMHu8i4KxdVqdFvrS4LvWZHI71zmYx8mJEAozzFFDJKV%2BNqYXz76%2BA5kIjGa%2FgSe34pcGfnKnvkTTTz5GkhxNvF3Ull4pl%2F3MEQM8iPygE7YZo85WWURjX21GFKYYhcwefjcSpj7cl6%2B01V%2F9tl%2FAQuL3RHtngjhFDS6c8hyOgiSwlzGA9zrJqjlMLT82L8GOqUBap9nSR7n8aKx%2BdbG6hvsqsfy59JEhC58x1uiCegQiy1J%2B28bwtAgHmxUWI8W3mTjNSPhR4CrkbsyjcVAuPSN7BKh64P5VwZ8rSqXDwirwiq8iAl8u6%2F91kC4Su513N3fwiSt6yOmwHR3yGLYbRwStlmjy4clWb733JlLRgj8NW1ZEQRFCYvW8EJ6RASFV7aIM2VSZqtGo%2BtW33PUbWa2oUoAhfTE&X-Amz-Signature=56ba13319a2ee304245791eb34dc1baf125bdc116db8ea7e43349fdc446761cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYNQ52S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFXgrpQ3oyEw1iGdx%2FEfop%2FFJ%2FrK1mDSl2LagjBUIwuuAiEA8s3KMeqRG7H6qoFNCcq%2FRf1JB3NdE5y1BOSMkYVc2skqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYVhOCzx7eYtYXGrCrcA8O1v6isfPSdzFgstw1DmZwKLhknOr2KjuvApK%2BQWkD8Q%2Fbdu48OxLgr1xFCv3vO6oNm40MWqocR1KlZIEngBwLz2LD0hfhPxk8ixToYwPX5mk4d%2FdU4IappqZ0icIaXzKgpiEa5jycRK%2Bm498qKOr5LLrAh5Fo4yVre9C8GA%2FURY6kU6q9VGMAKsl2q3%2FA%2FbFddxwKPDs6c0z2XpADBqJ%2BjNA6dRu%2F91wpwIZLONCF6QxiTdz3mkiqWmUv2vKROpEs00cuIQUshJAZ%2BxANk%2F0cSjY29YZHxQSjXYAq6V8IGqRUxzoOiR%2BO%2FMnAAy0lCSWe7c6uYRLZrQElfzv1WLxb6vLKA9h92t4YgSY3MGeP%2FYltmzJNBBkEb2qChh9BdgfAUn36HJoFBs9yguqH41GRVQHXeu2R5qfkIITysCpXEESpaUqJq07Y55m9X2igiMC9yeMHu8i4KxdVqdFvrS4LvWZHI71zmYx8mJEAozzFFDJKV%2BNqYXz76%2BA5kIjGa%2FgSe34pcGfnKnvkTTTz5GkhxNvF3Ull4pl%2F3MEQM8iPygE7YZo85WWURjX21GFKYYhcwefjcSpj7cl6%2B01V%2F9tl%2FAQuL3RHtngjhFDS6c8hyOgiSwlzGA9zrJqjlMLT82L8GOqUBap9nSR7n8aKx%2BdbG6hvsqsfy59JEhC58x1uiCegQiy1J%2B28bwtAgHmxUWI8W3mTjNSPhR4CrkbsyjcVAuPSN7BKh64P5VwZ8rSqXDwirwiq8iAl8u6%2F91kC4Su513N3fwiSt6yOmwHR3yGLYbRwStlmjy4clWb733JlLRgj8NW1ZEQRFCYvW8EJ6RASFV7aIM2VSZqtGo%2BtW33PUbWa2oUoAhfTE&X-Amz-Signature=7d21df01353a2eb0951f394e36e46ff708364429ef058236cbf7687e2dc7d0f6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYNQ52S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFXgrpQ3oyEw1iGdx%2FEfop%2FFJ%2FrK1mDSl2LagjBUIwuuAiEA8s3KMeqRG7H6qoFNCcq%2FRf1JB3NdE5y1BOSMkYVc2skqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYVhOCzx7eYtYXGrCrcA8O1v6isfPSdzFgstw1DmZwKLhknOr2KjuvApK%2BQWkD8Q%2Fbdu48OxLgr1xFCv3vO6oNm40MWqocR1KlZIEngBwLz2LD0hfhPxk8ixToYwPX5mk4d%2FdU4IappqZ0icIaXzKgpiEa5jycRK%2Bm498qKOr5LLrAh5Fo4yVre9C8GA%2FURY6kU6q9VGMAKsl2q3%2FA%2FbFddxwKPDs6c0z2XpADBqJ%2BjNA6dRu%2F91wpwIZLONCF6QxiTdz3mkiqWmUv2vKROpEs00cuIQUshJAZ%2BxANk%2F0cSjY29YZHxQSjXYAq6V8IGqRUxzoOiR%2BO%2FMnAAy0lCSWe7c6uYRLZrQElfzv1WLxb6vLKA9h92t4YgSY3MGeP%2FYltmzJNBBkEb2qChh9BdgfAUn36HJoFBs9yguqH41GRVQHXeu2R5qfkIITysCpXEESpaUqJq07Y55m9X2igiMC9yeMHu8i4KxdVqdFvrS4LvWZHI71zmYx8mJEAozzFFDJKV%2BNqYXz76%2BA5kIjGa%2FgSe34pcGfnKnvkTTTz5GkhxNvF3Ull4pl%2F3MEQM8iPygE7YZo85WWURjX21GFKYYhcwefjcSpj7cl6%2B01V%2F9tl%2FAQuL3RHtngjhFDS6c8hyOgiSwlzGA9zrJqjlMLT82L8GOqUBap9nSR7n8aKx%2BdbG6hvsqsfy59JEhC58x1uiCegQiy1J%2B28bwtAgHmxUWI8W3mTjNSPhR4CrkbsyjcVAuPSN7BKh64P5VwZ8rSqXDwirwiq8iAl8u6%2F91kC4Su513N3fwiSt6yOmwHR3yGLYbRwStlmjy4clWb733JlLRgj8NW1ZEQRFCYvW8EJ6RASFV7aIM2VSZqtGo%2BtW33PUbWa2oUoAhfTE&X-Amz-Signature=1e11581dbd71f63d546d42b3df26c16f9b7faaeb91f48c56d10f68d5b57abe8d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYNQ52S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFXgrpQ3oyEw1iGdx%2FEfop%2FFJ%2FrK1mDSl2LagjBUIwuuAiEA8s3KMeqRG7H6qoFNCcq%2FRf1JB3NdE5y1BOSMkYVc2skqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYVhOCzx7eYtYXGrCrcA8O1v6isfPSdzFgstw1DmZwKLhknOr2KjuvApK%2BQWkD8Q%2Fbdu48OxLgr1xFCv3vO6oNm40MWqocR1KlZIEngBwLz2LD0hfhPxk8ixToYwPX5mk4d%2FdU4IappqZ0icIaXzKgpiEa5jycRK%2Bm498qKOr5LLrAh5Fo4yVre9C8GA%2FURY6kU6q9VGMAKsl2q3%2FA%2FbFddxwKPDs6c0z2XpADBqJ%2BjNA6dRu%2F91wpwIZLONCF6QxiTdz3mkiqWmUv2vKROpEs00cuIQUshJAZ%2BxANk%2F0cSjY29YZHxQSjXYAq6V8IGqRUxzoOiR%2BO%2FMnAAy0lCSWe7c6uYRLZrQElfzv1WLxb6vLKA9h92t4YgSY3MGeP%2FYltmzJNBBkEb2qChh9BdgfAUn36HJoFBs9yguqH41GRVQHXeu2R5qfkIITysCpXEESpaUqJq07Y55m9X2igiMC9yeMHu8i4KxdVqdFvrS4LvWZHI71zmYx8mJEAozzFFDJKV%2BNqYXz76%2BA5kIjGa%2FgSe34pcGfnKnvkTTTz5GkhxNvF3Ull4pl%2F3MEQM8iPygE7YZo85WWURjX21GFKYYhcwefjcSpj7cl6%2B01V%2F9tl%2FAQuL3RHtngjhFDS6c8hyOgiSwlzGA9zrJqjlMLT82L8GOqUBap9nSR7n8aKx%2BdbG6hvsqsfy59JEhC58x1uiCegQiy1J%2B28bwtAgHmxUWI8W3mTjNSPhR4CrkbsyjcVAuPSN7BKh64P5VwZ8rSqXDwirwiq8iAl8u6%2F91kC4Su513N3fwiSt6yOmwHR3yGLYbRwStlmjy4clWb733JlLRgj8NW1ZEQRFCYvW8EJ6RASFV7aIM2VSZqtGo%2BtW33PUbWa2oUoAhfTE&X-Amz-Signature=d00486b15688ae7bb4626ffd8d673d7ccfc22349e4d805dde6d32023c5bfd2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYNQ52S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFXgrpQ3oyEw1iGdx%2FEfop%2FFJ%2FrK1mDSl2LagjBUIwuuAiEA8s3KMeqRG7H6qoFNCcq%2FRf1JB3NdE5y1BOSMkYVc2skqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYVhOCzx7eYtYXGrCrcA8O1v6isfPSdzFgstw1DmZwKLhknOr2KjuvApK%2BQWkD8Q%2Fbdu48OxLgr1xFCv3vO6oNm40MWqocR1KlZIEngBwLz2LD0hfhPxk8ixToYwPX5mk4d%2FdU4IappqZ0icIaXzKgpiEa5jycRK%2Bm498qKOr5LLrAh5Fo4yVre9C8GA%2FURY6kU6q9VGMAKsl2q3%2FA%2FbFddxwKPDs6c0z2XpADBqJ%2BjNA6dRu%2F91wpwIZLONCF6QxiTdz3mkiqWmUv2vKROpEs00cuIQUshJAZ%2BxANk%2F0cSjY29YZHxQSjXYAq6V8IGqRUxzoOiR%2BO%2FMnAAy0lCSWe7c6uYRLZrQElfzv1WLxb6vLKA9h92t4YgSY3MGeP%2FYltmzJNBBkEb2qChh9BdgfAUn36HJoFBs9yguqH41GRVQHXeu2R5qfkIITysCpXEESpaUqJq07Y55m9X2igiMC9yeMHu8i4KxdVqdFvrS4LvWZHI71zmYx8mJEAozzFFDJKV%2BNqYXz76%2BA5kIjGa%2FgSe34pcGfnKnvkTTTz5GkhxNvF3Ull4pl%2F3MEQM8iPygE7YZo85WWURjX21GFKYYhcwefjcSpj7cl6%2B01V%2F9tl%2FAQuL3RHtngjhFDS6c8hyOgiSwlzGA9zrJqjlMLT82L8GOqUBap9nSR7n8aKx%2BdbG6hvsqsfy59JEhC58x1uiCegQiy1J%2B28bwtAgHmxUWI8W3mTjNSPhR4CrkbsyjcVAuPSN7BKh64P5VwZ8rSqXDwirwiq8iAl8u6%2F91kC4Su513N3fwiSt6yOmwHR3yGLYbRwStlmjy4clWb733JlLRgj8NW1ZEQRFCYvW8EJ6RASFV7aIM2VSZqtGo%2BtW33PUbWa2oUoAhfTE&X-Amz-Signature=c0dc176c2e5dd4d3a194235488836bfa07285952785d5b5cbd93a391d8f0f0ad&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
