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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPM62NE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDgdtB5%2Fm%2BLTzP3h0lOazMtjhzXFNpB%2BoQ9SGzD%2FJLJJAiEAzZ2iurMnxqOklOMIZjbPZSnvdXXNO5kMZeMKpzxB%2FKYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZ04jZoEi2XCKnOCrcA6pFzxnWty08yBjrYEXm0zK6%2Fcdm2BrqFUrlIBQOZSB7K4KprSZdxcRNaZOfrI04%2B4RQ5CYkzFvTkRkLeh3ad5l3QF9pyHGWEr7IfSKGfinyaBj4WaJHP6czmbPzNsSAxhl8flWFoHZTcqNHzNXAAXoKn%2FAww%2FgAcoCP6isckJVw9M0CrUn52g1PYEIOq5pPZ2iLmYgFwA9S%2FS7UN5DZkr9aD3GYnSKor7LY6Cq%2FgRPSKXVV6r4%2FxFeX5JqiR%2Bc3r7iWZXCjHK2dFQslM4B8zQs%2FL5waohRdXUf0hjGqKIRs3851jdnQgDgpIOJZIlghF8dswWuc5pVqsOS7zj5kjGzxB2o%2FuObtQt9oAmY3t7n%2BcYdzwou%2BSOdKpMV8XnXsMETFlo4dlT0LvyIfwri1j6DD4jmYC08yucISTLPEgrE%2BdXmOE4TD0FznFu7G%2FRo4gu2nRcnQF4cY0gJs7c4ghszAr1BeXZ0luis9yEpHVTJeVTiucdL9DRXb3doZBz%2Be3Ec9GbpO%2Fvwf9VjMrMg1Y66Ko71KHjhCKgqRZONHXZ6OfquFPdecqEQaiov4SGQjkvjjI%2BRtL4TVNYTSVn1EBP9uNnhAoZdlDBStqvpE9YUO1xhO7OtoErylQi5sMMOVjL4GOqUB0vfQ0CM%2FMVaHXi7OuNH5JPAXWAVWTmoBNpO9FfMZAFTFj7Fck0fKKbZwUM2nyuijOus9AlYClHAWjoSBgL%2F3DqWufbWSLWTof6DwXgToiD8fFmw4FlS4ExAJVBaFWE4kJemmm9jZAinoA3p6CUHItc7hpcnRnt5wUlt%2FT4CLtyytlAJmWzEKEmP3tUktof93qa%2BJQw919c2WY3ZUpaDhxCaoOIys&X-Amz-Signature=5d0ff535aae44cf539d94659cfdb8eaa72988a0509760045532e3e95a0fa93ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPM62NE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDgdtB5%2Fm%2BLTzP3h0lOazMtjhzXFNpB%2BoQ9SGzD%2FJLJJAiEAzZ2iurMnxqOklOMIZjbPZSnvdXXNO5kMZeMKpzxB%2FKYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZ04jZoEi2XCKnOCrcA6pFzxnWty08yBjrYEXm0zK6%2Fcdm2BrqFUrlIBQOZSB7K4KprSZdxcRNaZOfrI04%2B4RQ5CYkzFvTkRkLeh3ad5l3QF9pyHGWEr7IfSKGfinyaBj4WaJHP6czmbPzNsSAxhl8flWFoHZTcqNHzNXAAXoKn%2FAww%2FgAcoCP6isckJVw9M0CrUn52g1PYEIOq5pPZ2iLmYgFwA9S%2FS7UN5DZkr9aD3GYnSKor7LY6Cq%2FgRPSKXVV6r4%2FxFeX5JqiR%2Bc3r7iWZXCjHK2dFQslM4B8zQs%2FL5waohRdXUf0hjGqKIRs3851jdnQgDgpIOJZIlghF8dswWuc5pVqsOS7zj5kjGzxB2o%2FuObtQt9oAmY3t7n%2BcYdzwou%2BSOdKpMV8XnXsMETFlo4dlT0LvyIfwri1j6DD4jmYC08yucISTLPEgrE%2BdXmOE4TD0FznFu7G%2FRo4gu2nRcnQF4cY0gJs7c4ghszAr1BeXZ0luis9yEpHVTJeVTiucdL9DRXb3doZBz%2Be3Ec9GbpO%2Fvwf9VjMrMg1Y66Ko71KHjhCKgqRZONHXZ6OfquFPdecqEQaiov4SGQjkvjjI%2BRtL4TVNYTSVn1EBP9uNnhAoZdlDBStqvpE9YUO1xhO7OtoErylQi5sMMOVjL4GOqUB0vfQ0CM%2FMVaHXi7OuNH5JPAXWAVWTmoBNpO9FfMZAFTFj7Fck0fKKbZwUM2nyuijOus9AlYClHAWjoSBgL%2F3DqWufbWSLWTof6DwXgToiD8fFmw4FlS4ExAJVBaFWE4kJemmm9jZAinoA3p6CUHItc7hpcnRnt5wUlt%2FT4CLtyytlAJmWzEKEmP3tUktof93qa%2BJQw919c2WY3ZUpaDhxCaoOIys&X-Amz-Signature=0e3dddcefa8d3d22acb937aea064eede289c050d2787aceccb14dfa1e0253f12&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPM62NE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDgdtB5%2Fm%2BLTzP3h0lOazMtjhzXFNpB%2BoQ9SGzD%2FJLJJAiEAzZ2iurMnxqOklOMIZjbPZSnvdXXNO5kMZeMKpzxB%2FKYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZ04jZoEi2XCKnOCrcA6pFzxnWty08yBjrYEXm0zK6%2Fcdm2BrqFUrlIBQOZSB7K4KprSZdxcRNaZOfrI04%2B4RQ5CYkzFvTkRkLeh3ad5l3QF9pyHGWEr7IfSKGfinyaBj4WaJHP6czmbPzNsSAxhl8flWFoHZTcqNHzNXAAXoKn%2FAww%2FgAcoCP6isckJVw9M0CrUn52g1PYEIOq5pPZ2iLmYgFwA9S%2FS7UN5DZkr9aD3GYnSKor7LY6Cq%2FgRPSKXVV6r4%2FxFeX5JqiR%2Bc3r7iWZXCjHK2dFQslM4B8zQs%2FL5waohRdXUf0hjGqKIRs3851jdnQgDgpIOJZIlghF8dswWuc5pVqsOS7zj5kjGzxB2o%2FuObtQt9oAmY3t7n%2BcYdzwou%2BSOdKpMV8XnXsMETFlo4dlT0LvyIfwri1j6DD4jmYC08yucISTLPEgrE%2BdXmOE4TD0FznFu7G%2FRo4gu2nRcnQF4cY0gJs7c4ghszAr1BeXZ0luis9yEpHVTJeVTiucdL9DRXb3doZBz%2Be3Ec9GbpO%2Fvwf9VjMrMg1Y66Ko71KHjhCKgqRZONHXZ6OfquFPdecqEQaiov4SGQjkvjjI%2BRtL4TVNYTSVn1EBP9uNnhAoZdlDBStqvpE9YUO1xhO7OtoErylQi5sMMOVjL4GOqUB0vfQ0CM%2FMVaHXi7OuNH5JPAXWAVWTmoBNpO9FfMZAFTFj7Fck0fKKbZwUM2nyuijOus9AlYClHAWjoSBgL%2F3DqWufbWSLWTof6DwXgToiD8fFmw4FlS4ExAJVBaFWE4kJemmm9jZAinoA3p6CUHItc7hpcnRnt5wUlt%2FT4CLtyytlAJmWzEKEmP3tUktof93qa%2BJQw919c2WY3ZUpaDhxCaoOIys&X-Amz-Signature=fcedbf28e001b5e9bc14e198e767b79acb5ac2b988675f97e34f9d996f33ce97&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPM62NE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDgdtB5%2Fm%2BLTzP3h0lOazMtjhzXFNpB%2BoQ9SGzD%2FJLJJAiEAzZ2iurMnxqOklOMIZjbPZSnvdXXNO5kMZeMKpzxB%2FKYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZ04jZoEi2XCKnOCrcA6pFzxnWty08yBjrYEXm0zK6%2Fcdm2BrqFUrlIBQOZSB7K4KprSZdxcRNaZOfrI04%2B4RQ5CYkzFvTkRkLeh3ad5l3QF9pyHGWEr7IfSKGfinyaBj4WaJHP6czmbPzNsSAxhl8flWFoHZTcqNHzNXAAXoKn%2FAww%2FgAcoCP6isckJVw9M0CrUn52g1PYEIOq5pPZ2iLmYgFwA9S%2FS7UN5DZkr9aD3GYnSKor7LY6Cq%2FgRPSKXVV6r4%2FxFeX5JqiR%2Bc3r7iWZXCjHK2dFQslM4B8zQs%2FL5waohRdXUf0hjGqKIRs3851jdnQgDgpIOJZIlghF8dswWuc5pVqsOS7zj5kjGzxB2o%2FuObtQt9oAmY3t7n%2BcYdzwou%2BSOdKpMV8XnXsMETFlo4dlT0LvyIfwri1j6DD4jmYC08yucISTLPEgrE%2BdXmOE4TD0FznFu7G%2FRo4gu2nRcnQF4cY0gJs7c4ghszAr1BeXZ0luis9yEpHVTJeVTiucdL9DRXb3doZBz%2Be3Ec9GbpO%2Fvwf9VjMrMg1Y66Ko71KHjhCKgqRZONHXZ6OfquFPdecqEQaiov4SGQjkvjjI%2BRtL4TVNYTSVn1EBP9uNnhAoZdlDBStqvpE9YUO1xhO7OtoErylQi5sMMOVjL4GOqUB0vfQ0CM%2FMVaHXi7OuNH5JPAXWAVWTmoBNpO9FfMZAFTFj7Fck0fKKbZwUM2nyuijOus9AlYClHAWjoSBgL%2F3DqWufbWSLWTof6DwXgToiD8fFmw4FlS4ExAJVBaFWE4kJemmm9jZAinoA3p6CUHItc7hpcnRnt5wUlt%2FT4CLtyytlAJmWzEKEmP3tUktof93qa%2BJQw919c2WY3ZUpaDhxCaoOIys&X-Amz-Signature=6bb6faa54a45a08cd86433d3c180385e38bb1490a03552dde8be638d9aaed121&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPM62NE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDgdtB5%2Fm%2BLTzP3h0lOazMtjhzXFNpB%2BoQ9SGzD%2FJLJJAiEAzZ2iurMnxqOklOMIZjbPZSnvdXXNO5kMZeMKpzxB%2FKYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZ04jZoEi2XCKnOCrcA6pFzxnWty08yBjrYEXm0zK6%2Fcdm2BrqFUrlIBQOZSB7K4KprSZdxcRNaZOfrI04%2B4RQ5CYkzFvTkRkLeh3ad5l3QF9pyHGWEr7IfSKGfinyaBj4WaJHP6czmbPzNsSAxhl8flWFoHZTcqNHzNXAAXoKn%2FAww%2FgAcoCP6isckJVw9M0CrUn52g1PYEIOq5pPZ2iLmYgFwA9S%2FS7UN5DZkr9aD3GYnSKor7LY6Cq%2FgRPSKXVV6r4%2FxFeX5JqiR%2Bc3r7iWZXCjHK2dFQslM4B8zQs%2FL5waohRdXUf0hjGqKIRs3851jdnQgDgpIOJZIlghF8dswWuc5pVqsOS7zj5kjGzxB2o%2FuObtQt9oAmY3t7n%2BcYdzwou%2BSOdKpMV8XnXsMETFlo4dlT0LvyIfwri1j6DD4jmYC08yucISTLPEgrE%2BdXmOE4TD0FznFu7G%2FRo4gu2nRcnQF4cY0gJs7c4ghszAr1BeXZ0luis9yEpHVTJeVTiucdL9DRXb3doZBz%2Be3Ec9GbpO%2Fvwf9VjMrMg1Y66Ko71KHjhCKgqRZONHXZ6OfquFPdecqEQaiov4SGQjkvjjI%2BRtL4TVNYTSVn1EBP9uNnhAoZdlDBStqvpE9YUO1xhO7OtoErylQi5sMMOVjL4GOqUB0vfQ0CM%2FMVaHXi7OuNH5JPAXWAVWTmoBNpO9FfMZAFTFj7Fck0fKKbZwUM2nyuijOus9AlYClHAWjoSBgL%2F3DqWufbWSLWTof6DwXgToiD8fFmw4FlS4ExAJVBaFWE4kJemmm9jZAinoA3p6CUHItc7hpcnRnt5wUlt%2FT4CLtyytlAJmWzEKEmP3tUktof93qa%2BJQw919c2WY3ZUpaDhxCaoOIys&X-Amz-Signature=ad122c23150364f84b2d075974103edd1dd8614743e154a82a4e6d5783db92d7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPM62NE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDgdtB5%2Fm%2BLTzP3h0lOazMtjhzXFNpB%2BoQ9SGzD%2FJLJJAiEAzZ2iurMnxqOklOMIZjbPZSnvdXXNO5kMZeMKpzxB%2FKYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZ04jZoEi2XCKnOCrcA6pFzxnWty08yBjrYEXm0zK6%2Fcdm2BrqFUrlIBQOZSB7K4KprSZdxcRNaZOfrI04%2B4RQ5CYkzFvTkRkLeh3ad5l3QF9pyHGWEr7IfSKGfinyaBj4WaJHP6czmbPzNsSAxhl8flWFoHZTcqNHzNXAAXoKn%2FAww%2FgAcoCP6isckJVw9M0CrUn52g1PYEIOq5pPZ2iLmYgFwA9S%2FS7UN5DZkr9aD3GYnSKor7LY6Cq%2FgRPSKXVV6r4%2FxFeX5JqiR%2Bc3r7iWZXCjHK2dFQslM4B8zQs%2FL5waohRdXUf0hjGqKIRs3851jdnQgDgpIOJZIlghF8dswWuc5pVqsOS7zj5kjGzxB2o%2FuObtQt9oAmY3t7n%2BcYdzwou%2BSOdKpMV8XnXsMETFlo4dlT0LvyIfwri1j6DD4jmYC08yucISTLPEgrE%2BdXmOE4TD0FznFu7G%2FRo4gu2nRcnQF4cY0gJs7c4ghszAr1BeXZ0luis9yEpHVTJeVTiucdL9DRXb3doZBz%2Be3Ec9GbpO%2Fvwf9VjMrMg1Y66Ko71KHjhCKgqRZONHXZ6OfquFPdecqEQaiov4SGQjkvjjI%2BRtL4TVNYTSVn1EBP9uNnhAoZdlDBStqvpE9YUO1xhO7OtoErylQi5sMMOVjL4GOqUB0vfQ0CM%2FMVaHXi7OuNH5JPAXWAVWTmoBNpO9FfMZAFTFj7Fck0fKKbZwUM2nyuijOus9AlYClHAWjoSBgL%2F3DqWufbWSLWTof6DwXgToiD8fFmw4FlS4ExAJVBaFWE4kJemmm9jZAinoA3p6CUHItc7hpcnRnt5wUlt%2FT4CLtyytlAJmWzEKEmP3tUktof93qa%2BJQw919c2WY3ZUpaDhxCaoOIys&X-Amz-Signature=99c38379c6ac9f1e48a15c24376def54b97d824e21a1e7d7e8b44ee9a94efc3a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPM62NE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDgdtB5%2Fm%2BLTzP3h0lOazMtjhzXFNpB%2BoQ9SGzD%2FJLJJAiEAzZ2iurMnxqOklOMIZjbPZSnvdXXNO5kMZeMKpzxB%2FKYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZ04jZoEi2XCKnOCrcA6pFzxnWty08yBjrYEXm0zK6%2Fcdm2BrqFUrlIBQOZSB7K4KprSZdxcRNaZOfrI04%2B4RQ5CYkzFvTkRkLeh3ad5l3QF9pyHGWEr7IfSKGfinyaBj4WaJHP6czmbPzNsSAxhl8flWFoHZTcqNHzNXAAXoKn%2FAww%2FgAcoCP6isckJVw9M0CrUn52g1PYEIOq5pPZ2iLmYgFwA9S%2FS7UN5DZkr9aD3GYnSKor7LY6Cq%2FgRPSKXVV6r4%2FxFeX5JqiR%2Bc3r7iWZXCjHK2dFQslM4B8zQs%2FL5waohRdXUf0hjGqKIRs3851jdnQgDgpIOJZIlghF8dswWuc5pVqsOS7zj5kjGzxB2o%2FuObtQt9oAmY3t7n%2BcYdzwou%2BSOdKpMV8XnXsMETFlo4dlT0LvyIfwri1j6DD4jmYC08yucISTLPEgrE%2BdXmOE4TD0FznFu7G%2FRo4gu2nRcnQF4cY0gJs7c4ghszAr1BeXZ0luis9yEpHVTJeVTiucdL9DRXb3doZBz%2Be3Ec9GbpO%2Fvwf9VjMrMg1Y66Ko71KHjhCKgqRZONHXZ6OfquFPdecqEQaiov4SGQjkvjjI%2BRtL4TVNYTSVn1EBP9uNnhAoZdlDBStqvpE9YUO1xhO7OtoErylQi5sMMOVjL4GOqUB0vfQ0CM%2FMVaHXi7OuNH5JPAXWAVWTmoBNpO9FfMZAFTFj7Fck0fKKbZwUM2nyuijOus9AlYClHAWjoSBgL%2F3DqWufbWSLWTof6DwXgToiD8fFmw4FlS4ExAJVBaFWE4kJemmm9jZAinoA3p6CUHItc7hpcnRnt5wUlt%2FT4CLtyytlAJmWzEKEmP3tUktof93qa%2BJQw919c2WY3ZUpaDhxCaoOIys&X-Amz-Signature=ea7dcd04d6f3ffd9c7aec6c632f0209711f40d9bfa03841a1f72ed4d0f00dd53&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
