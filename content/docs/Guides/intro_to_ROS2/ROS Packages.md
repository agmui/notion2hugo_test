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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LK4SXS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBARhhwFGzt71UpnRrMx8zcpbDYMZ8KIalH%2BcGQyO40NAiAOpmL6vk4%2BYIh%2F6ugjjZ82%2F5QYavNZW%2Bqe2Dhiq0TnJyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMa5t6OEuePKkIhz9gKtwDa%2F5pgE2%2BHbmsRoOmbHu1p3ewaerZzXbN6ogIs02SKkkD%2FxL8zmIKMq7Ko%2B7cP%2FXt8fMFdqJVg11NpteINr9zJF8fXOhi7g14ndr7wmxZzxGtO54R16mP5EeekPH3FP%2FY6eKBakNnJuNQAjZrUTP8tqkPaa98EvpXybL5Ju12uLEoaLcd2oQgweF9aUcnBCXUif9TsPWplRtT20W35smjrJ1AFJ1whZrmbXQ2l27MQmpNEImRE%2F482woZGFQI5PCucm47tacFgf1TNWVbGklW8ABkebfCBqH7%2BWbbDHLkyOzJ8aMqU6bdsa%2FY8R9aC3KZfK%2F5K0KkMzg8L41wqDLztV%2BD5KbLpdrKlvc1x5ZzhBhgdyixIu2da8DcE8Jgkjm1qTXTGGSaR4G%2FxCWcMIPQsChciPc6avbdzBppYrdW08nb7whAtg4PLhjXOa3h54oGiRZ8VAihCS68FuqNpOSq8OKqka3el%2BoVGBtfUWrqCXdw5vGLlGCNCLuqDOKofnSuKW%2B6aM%2BOZ0rTWq5lLfb0BK2wEervgKJLTbQh9Rt9MdlT8ULxtwElgalIEwbn6C17LINybsXbz6GUr0H5YjUT8we9trcUv5pTUHaJiwA9IAlP4bg29t7kZJlp64gw6Z%2BpwAY6pgFL2l1eqdpOttHYUq1dcqHZQFifl0SWYNgGVgxO0OccGUO4K7XFLYF9YocZV7d5H%2BVGrtjxokVvxekRE8f%2BHFQvKyKBKqgd0a8J5pXRScoB2lGFm2hkZkXprwMKlCBVq2feGYVDLUv%2Bvw%2BUrmhTWaYtxpUcvXFjjt23Vd%2F%2BAvaOclgJc7mBaCZxz%2BMpvWd7yiGQLf0HlHup9hdfaVhPm2iZHPkNaghU&X-Amz-Signature=b0a591bd3ab3c252dd8d2398e071942ce8951bb0c835cbfbeb81a79cb652519d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LK4SXS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBARhhwFGzt71UpnRrMx8zcpbDYMZ8KIalH%2BcGQyO40NAiAOpmL6vk4%2BYIh%2F6ugjjZ82%2F5QYavNZW%2Bqe2Dhiq0TnJyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMa5t6OEuePKkIhz9gKtwDa%2F5pgE2%2BHbmsRoOmbHu1p3ewaerZzXbN6ogIs02SKkkD%2FxL8zmIKMq7Ko%2B7cP%2FXt8fMFdqJVg11NpteINr9zJF8fXOhi7g14ndr7wmxZzxGtO54R16mP5EeekPH3FP%2FY6eKBakNnJuNQAjZrUTP8tqkPaa98EvpXybL5Ju12uLEoaLcd2oQgweF9aUcnBCXUif9TsPWplRtT20W35smjrJ1AFJ1whZrmbXQ2l27MQmpNEImRE%2F482woZGFQI5PCucm47tacFgf1TNWVbGklW8ABkebfCBqH7%2BWbbDHLkyOzJ8aMqU6bdsa%2FY8R9aC3KZfK%2F5K0KkMzg8L41wqDLztV%2BD5KbLpdrKlvc1x5ZzhBhgdyixIu2da8DcE8Jgkjm1qTXTGGSaR4G%2FxCWcMIPQsChciPc6avbdzBppYrdW08nb7whAtg4PLhjXOa3h54oGiRZ8VAihCS68FuqNpOSq8OKqka3el%2BoVGBtfUWrqCXdw5vGLlGCNCLuqDOKofnSuKW%2B6aM%2BOZ0rTWq5lLfb0BK2wEervgKJLTbQh9Rt9MdlT8ULxtwElgalIEwbn6C17LINybsXbz6GUr0H5YjUT8we9trcUv5pTUHaJiwA9IAlP4bg29t7kZJlp64gw6Z%2BpwAY6pgFL2l1eqdpOttHYUq1dcqHZQFifl0SWYNgGVgxO0OccGUO4K7XFLYF9YocZV7d5H%2BVGrtjxokVvxekRE8f%2BHFQvKyKBKqgd0a8J5pXRScoB2lGFm2hkZkXprwMKlCBVq2feGYVDLUv%2Bvw%2BUrmhTWaYtxpUcvXFjjt23Vd%2F%2BAvaOclgJc7mBaCZxz%2BMpvWd7yiGQLf0HlHup9hdfaVhPm2iZHPkNaghU&X-Amz-Signature=f176b913641d6f394ff146ff0cfc7018b15b3a9083428de12f03d6dc301888bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LK4SXS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBARhhwFGzt71UpnRrMx8zcpbDYMZ8KIalH%2BcGQyO40NAiAOpmL6vk4%2BYIh%2F6ugjjZ82%2F5QYavNZW%2Bqe2Dhiq0TnJyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMa5t6OEuePKkIhz9gKtwDa%2F5pgE2%2BHbmsRoOmbHu1p3ewaerZzXbN6ogIs02SKkkD%2FxL8zmIKMq7Ko%2B7cP%2FXt8fMFdqJVg11NpteINr9zJF8fXOhi7g14ndr7wmxZzxGtO54R16mP5EeekPH3FP%2FY6eKBakNnJuNQAjZrUTP8tqkPaa98EvpXybL5Ju12uLEoaLcd2oQgweF9aUcnBCXUif9TsPWplRtT20W35smjrJ1AFJ1whZrmbXQ2l27MQmpNEImRE%2F482woZGFQI5PCucm47tacFgf1TNWVbGklW8ABkebfCBqH7%2BWbbDHLkyOzJ8aMqU6bdsa%2FY8R9aC3KZfK%2F5K0KkMzg8L41wqDLztV%2BD5KbLpdrKlvc1x5ZzhBhgdyixIu2da8DcE8Jgkjm1qTXTGGSaR4G%2FxCWcMIPQsChciPc6avbdzBppYrdW08nb7whAtg4PLhjXOa3h54oGiRZ8VAihCS68FuqNpOSq8OKqka3el%2BoVGBtfUWrqCXdw5vGLlGCNCLuqDOKofnSuKW%2B6aM%2BOZ0rTWq5lLfb0BK2wEervgKJLTbQh9Rt9MdlT8ULxtwElgalIEwbn6C17LINybsXbz6GUr0H5YjUT8we9trcUv5pTUHaJiwA9IAlP4bg29t7kZJlp64gw6Z%2BpwAY6pgFL2l1eqdpOttHYUq1dcqHZQFifl0SWYNgGVgxO0OccGUO4K7XFLYF9YocZV7d5H%2BVGrtjxokVvxekRE8f%2BHFQvKyKBKqgd0a8J5pXRScoB2lGFm2hkZkXprwMKlCBVq2feGYVDLUv%2Bvw%2BUrmhTWaYtxpUcvXFjjt23Vd%2F%2BAvaOclgJc7mBaCZxz%2BMpvWd7yiGQLf0HlHup9hdfaVhPm2iZHPkNaghU&X-Amz-Signature=a92bfd94529636c53bde052a1603233b71dfd8e6c006ed8c5bc87063d2a9e325&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LK4SXS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBARhhwFGzt71UpnRrMx8zcpbDYMZ8KIalH%2BcGQyO40NAiAOpmL6vk4%2BYIh%2F6ugjjZ82%2F5QYavNZW%2Bqe2Dhiq0TnJyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMa5t6OEuePKkIhz9gKtwDa%2F5pgE2%2BHbmsRoOmbHu1p3ewaerZzXbN6ogIs02SKkkD%2FxL8zmIKMq7Ko%2B7cP%2FXt8fMFdqJVg11NpteINr9zJF8fXOhi7g14ndr7wmxZzxGtO54R16mP5EeekPH3FP%2FY6eKBakNnJuNQAjZrUTP8tqkPaa98EvpXybL5Ju12uLEoaLcd2oQgweF9aUcnBCXUif9TsPWplRtT20W35smjrJ1AFJ1whZrmbXQ2l27MQmpNEImRE%2F482woZGFQI5PCucm47tacFgf1TNWVbGklW8ABkebfCBqH7%2BWbbDHLkyOzJ8aMqU6bdsa%2FY8R9aC3KZfK%2F5K0KkMzg8L41wqDLztV%2BD5KbLpdrKlvc1x5ZzhBhgdyixIu2da8DcE8Jgkjm1qTXTGGSaR4G%2FxCWcMIPQsChciPc6avbdzBppYrdW08nb7whAtg4PLhjXOa3h54oGiRZ8VAihCS68FuqNpOSq8OKqka3el%2BoVGBtfUWrqCXdw5vGLlGCNCLuqDOKofnSuKW%2B6aM%2BOZ0rTWq5lLfb0BK2wEervgKJLTbQh9Rt9MdlT8ULxtwElgalIEwbn6C17LINybsXbz6GUr0H5YjUT8we9trcUv5pTUHaJiwA9IAlP4bg29t7kZJlp64gw6Z%2BpwAY6pgFL2l1eqdpOttHYUq1dcqHZQFifl0SWYNgGVgxO0OccGUO4K7XFLYF9YocZV7d5H%2BVGrtjxokVvxekRE8f%2BHFQvKyKBKqgd0a8J5pXRScoB2lGFm2hkZkXprwMKlCBVq2feGYVDLUv%2Bvw%2BUrmhTWaYtxpUcvXFjjt23Vd%2F%2BAvaOclgJc7mBaCZxz%2BMpvWd7yiGQLf0HlHup9hdfaVhPm2iZHPkNaghU&X-Amz-Signature=2af0df553744b9e79bf85b51b63a1ea88e5424768555e7c8ac0aee1e47911815&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LK4SXS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBARhhwFGzt71UpnRrMx8zcpbDYMZ8KIalH%2BcGQyO40NAiAOpmL6vk4%2BYIh%2F6ugjjZ82%2F5QYavNZW%2Bqe2Dhiq0TnJyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMa5t6OEuePKkIhz9gKtwDa%2F5pgE2%2BHbmsRoOmbHu1p3ewaerZzXbN6ogIs02SKkkD%2FxL8zmIKMq7Ko%2B7cP%2FXt8fMFdqJVg11NpteINr9zJF8fXOhi7g14ndr7wmxZzxGtO54R16mP5EeekPH3FP%2FY6eKBakNnJuNQAjZrUTP8tqkPaa98EvpXybL5Ju12uLEoaLcd2oQgweF9aUcnBCXUif9TsPWplRtT20W35smjrJ1AFJ1whZrmbXQ2l27MQmpNEImRE%2F482woZGFQI5PCucm47tacFgf1TNWVbGklW8ABkebfCBqH7%2BWbbDHLkyOzJ8aMqU6bdsa%2FY8R9aC3KZfK%2F5K0KkMzg8L41wqDLztV%2BD5KbLpdrKlvc1x5ZzhBhgdyixIu2da8DcE8Jgkjm1qTXTGGSaR4G%2FxCWcMIPQsChciPc6avbdzBppYrdW08nb7whAtg4PLhjXOa3h54oGiRZ8VAihCS68FuqNpOSq8OKqka3el%2BoVGBtfUWrqCXdw5vGLlGCNCLuqDOKofnSuKW%2B6aM%2BOZ0rTWq5lLfb0BK2wEervgKJLTbQh9Rt9MdlT8ULxtwElgalIEwbn6C17LINybsXbz6GUr0H5YjUT8we9trcUv5pTUHaJiwA9IAlP4bg29t7kZJlp64gw6Z%2BpwAY6pgFL2l1eqdpOttHYUq1dcqHZQFifl0SWYNgGVgxO0OccGUO4K7XFLYF9YocZV7d5H%2BVGrtjxokVvxekRE8f%2BHFQvKyKBKqgd0a8J5pXRScoB2lGFm2hkZkXprwMKlCBVq2feGYVDLUv%2Bvw%2BUrmhTWaYtxpUcvXFjjt23Vd%2F%2BAvaOclgJc7mBaCZxz%2BMpvWd7yiGQLf0HlHup9hdfaVhPm2iZHPkNaghU&X-Amz-Signature=4a7c6d4fc6fb89b380942bf4364f16904ed2c6d189261851942b2fed0ade2552&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LK4SXS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBARhhwFGzt71UpnRrMx8zcpbDYMZ8KIalH%2BcGQyO40NAiAOpmL6vk4%2BYIh%2F6ugjjZ82%2F5QYavNZW%2Bqe2Dhiq0TnJyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMa5t6OEuePKkIhz9gKtwDa%2F5pgE2%2BHbmsRoOmbHu1p3ewaerZzXbN6ogIs02SKkkD%2FxL8zmIKMq7Ko%2B7cP%2FXt8fMFdqJVg11NpteINr9zJF8fXOhi7g14ndr7wmxZzxGtO54R16mP5EeekPH3FP%2FY6eKBakNnJuNQAjZrUTP8tqkPaa98EvpXybL5Ju12uLEoaLcd2oQgweF9aUcnBCXUif9TsPWplRtT20W35smjrJ1AFJ1whZrmbXQ2l27MQmpNEImRE%2F482woZGFQI5PCucm47tacFgf1TNWVbGklW8ABkebfCBqH7%2BWbbDHLkyOzJ8aMqU6bdsa%2FY8R9aC3KZfK%2F5K0KkMzg8L41wqDLztV%2BD5KbLpdrKlvc1x5ZzhBhgdyixIu2da8DcE8Jgkjm1qTXTGGSaR4G%2FxCWcMIPQsChciPc6avbdzBppYrdW08nb7whAtg4PLhjXOa3h54oGiRZ8VAihCS68FuqNpOSq8OKqka3el%2BoVGBtfUWrqCXdw5vGLlGCNCLuqDOKofnSuKW%2B6aM%2BOZ0rTWq5lLfb0BK2wEervgKJLTbQh9Rt9MdlT8ULxtwElgalIEwbn6C17LINybsXbz6GUr0H5YjUT8we9trcUv5pTUHaJiwA9IAlP4bg29t7kZJlp64gw6Z%2BpwAY6pgFL2l1eqdpOttHYUq1dcqHZQFifl0SWYNgGVgxO0OccGUO4K7XFLYF9YocZV7d5H%2BVGrtjxokVvxekRE8f%2BHFQvKyKBKqgd0a8J5pXRScoB2lGFm2hkZkXprwMKlCBVq2feGYVDLUv%2Bvw%2BUrmhTWaYtxpUcvXFjjt23Vd%2F%2BAvaOclgJc7mBaCZxz%2BMpvWd7yiGQLf0HlHup9hdfaVhPm2iZHPkNaghU&X-Amz-Signature=2caef61db764f96a1d45a2c82c871566c5993c82502f6a3466403aa8b3662f56&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LK4SXS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBARhhwFGzt71UpnRrMx8zcpbDYMZ8KIalH%2BcGQyO40NAiAOpmL6vk4%2BYIh%2F6ugjjZ82%2F5QYavNZW%2Bqe2Dhiq0TnJyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMa5t6OEuePKkIhz9gKtwDa%2F5pgE2%2BHbmsRoOmbHu1p3ewaerZzXbN6ogIs02SKkkD%2FxL8zmIKMq7Ko%2B7cP%2FXt8fMFdqJVg11NpteINr9zJF8fXOhi7g14ndr7wmxZzxGtO54R16mP5EeekPH3FP%2FY6eKBakNnJuNQAjZrUTP8tqkPaa98EvpXybL5Ju12uLEoaLcd2oQgweF9aUcnBCXUif9TsPWplRtT20W35smjrJ1AFJ1whZrmbXQ2l27MQmpNEImRE%2F482woZGFQI5PCucm47tacFgf1TNWVbGklW8ABkebfCBqH7%2BWbbDHLkyOzJ8aMqU6bdsa%2FY8R9aC3KZfK%2F5K0KkMzg8L41wqDLztV%2BD5KbLpdrKlvc1x5ZzhBhgdyixIu2da8DcE8Jgkjm1qTXTGGSaR4G%2FxCWcMIPQsChciPc6avbdzBppYrdW08nb7whAtg4PLhjXOa3h54oGiRZ8VAihCS68FuqNpOSq8OKqka3el%2BoVGBtfUWrqCXdw5vGLlGCNCLuqDOKofnSuKW%2B6aM%2BOZ0rTWq5lLfb0BK2wEervgKJLTbQh9Rt9MdlT8ULxtwElgalIEwbn6C17LINybsXbz6GUr0H5YjUT8we9trcUv5pTUHaJiwA9IAlP4bg29t7kZJlp64gw6Z%2BpwAY6pgFL2l1eqdpOttHYUq1dcqHZQFifl0SWYNgGVgxO0OccGUO4K7XFLYF9YocZV7d5H%2BVGrtjxokVvxekRE8f%2BHFQvKyKBKqgd0a8J5pXRScoB2lGFm2hkZkXprwMKlCBVq2feGYVDLUv%2Bvw%2BUrmhTWaYtxpUcvXFjjt23Vd%2F%2BAvaOclgJc7mBaCZxz%2BMpvWd7yiGQLf0HlHup9hdfaVhPm2iZHPkNaghU&X-Amz-Signature=efb310ab871354c946342dbe03b76152562064bf9717248106e6690091494373&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
