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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHKNAEDK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWQ7ScwuF8xY5uUSWCBjK9yax5421yeso5DU0tHCf5RQIhAPsUPgQStVC3xyMd69Gwpd2I78IGrenQX4qfdaksyhpSKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf58lLUqLfQn5KPwkq3AMjuep2swOZo2A%2FnQMFWDNJRtaSTE6mAcUiZeOWVRLxZM9pDazniWImNhwngh%2FWKJCE%2F2Ym%2Fxzvv64Ihs2fF6%2B6jkq9Vob6RGpHnFZx54%2BcCQGkAKtErxr2mui0jd%2BwFz%2FkWhM7lt3vbt16a8sEcRTElH3D4naLnG0evUQGLkOvc2pwRrElY8fjsm53mBaFS00wg72x7W%2FRaOL0yNHgFNDllDf1yUixgiWey0sHItYI3KSEa%2Bpl9BZQN4ifuy4j8f19KP6TbXmLV66Ic5An1lSR7EbhOj7czf%2Bv0pC0dzfyZODI8pWQyNp3ti0bJHjlT7t%2FpIWWJToCbZOHON2H1tE2QcdJl56qbdDnAzSZFjgngDGH%2FFzSt7L73QGIvWQtsfegiXl5OMk%2Ft%2FhKCTTnv7jZez2oQypglmSBiN46t7PmLBUYSKmPIGv0aFUl3jjQUcHxgTN4Vp95%2BzWTlEfLMfr%2BjgerJEjlUVHKnOjSjcbgZSXA1uLzvuo4QV3Oja4W1DJqqPbtMUAzussm4oMpRNcnN%2FKiPifsrmn7MMwsBbnvll5Np%2Fz%2FSn57e6z156vBKVvJFlifLi9ALRXtEi8mizFvROu0Y%2FHwt5Y4WvqCCFQRbYlwSm6pijNIh1ZT9DDA696%2FBjqkAeU9UNESPS9ZR9ALTys3JtPIW1menqEU1Oi1CBT473TDyjUSQwtpCg6PoWMvX1B2zW3ja7wvpqxhGH%2F5pbNXPQr0HI5C0wrxFknkVwyo2nQK1VGC8t0N8NqNUrz1mz834QJ9%2FfHZ31%2Fu9cFPz7IOCxzFdPqlbeqLOoVDwVh8p9TcielZHl1SqUUQDiuVFL1bdCp5m1QyJ1ROTg60ztzQAuaygsW5&X-Amz-Signature=945079a08227e4be83985c888fc1ef57496765485d5c9cfc8810390df08a30c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHKNAEDK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWQ7ScwuF8xY5uUSWCBjK9yax5421yeso5DU0tHCf5RQIhAPsUPgQStVC3xyMd69Gwpd2I78IGrenQX4qfdaksyhpSKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf58lLUqLfQn5KPwkq3AMjuep2swOZo2A%2FnQMFWDNJRtaSTE6mAcUiZeOWVRLxZM9pDazniWImNhwngh%2FWKJCE%2F2Ym%2Fxzvv64Ihs2fF6%2B6jkq9Vob6RGpHnFZx54%2BcCQGkAKtErxr2mui0jd%2BwFz%2FkWhM7lt3vbt16a8sEcRTElH3D4naLnG0evUQGLkOvc2pwRrElY8fjsm53mBaFS00wg72x7W%2FRaOL0yNHgFNDllDf1yUixgiWey0sHItYI3KSEa%2Bpl9BZQN4ifuy4j8f19KP6TbXmLV66Ic5An1lSR7EbhOj7czf%2Bv0pC0dzfyZODI8pWQyNp3ti0bJHjlT7t%2FpIWWJToCbZOHON2H1tE2QcdJl56qbdDnAzSZFjgngDGH%2FFzSt7L73QGIvWQtsfegiXl5OMk%2Ft%2FhKCTTnv7jZez2oQypglmSBiN46t7PmLBUYSKmPIGv0aFUl3jjQUcHxgTN4Vp95%2BzWTlEfLMfr%2BjgerJEjlUVHKnOjSjcbgZSXA1uLzvuo4QV3Oja4W1DJqqPbtMUAzussm4oMpRNcnN%2FKiPifsrmn7MMwsBbnvll5Np%2Fz%2FSn57e6z156vBKVvJFlifLi9ALRXtEi8mizFvROu0Y%2FHwt5Y4WvqCCFQRbYlwSm6pijNIh1ZT9DDA696%2FBjqkAeU9UNESPS9ZR9ALTys3JtPIW1menqEU1Oi1CBT473TDyjUSQwtpCg6PoWMvX1B2zW3ja7wvpqxhGH%2F5pbNXPQr0HI5C0wrxFknkVwyo2nQK1VGC8t0N8NqNUrz1mz834QJ9%2FfHZ31%2Fu9cFPz7IOCxzFdPqlbeqLOoVDwVh8p9TcielZHl1SqUUQDiuVFL1bdCp5m1QyJ1ROTg60ztzQAuaygsW5&X-Amz-Signature=0749d383d2af21c21888b856c5187424c36339de075d9830939aef57d721221b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHKNAEDK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWQ7ScwuF8xY5uUSWCBjK9yax5421yeso5DU0tHCf5RQIhAPsUPgQStVC3xyMd69Gwpd2I78IGrenQX4qfdaksyhpSKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf58lLUqLfQn5KPwkq3AMjuep2swOZo2A%2FnQMFWDNJRtaSTE6mAcUiZeOWVRLxZM9pDazniWImNhwngh%2FWKJCE%2F2Ym%2Fxzvv64Ihs2fF6%2B6jkq9Vob6RGpHnFZx54%2BcCQGkAKtErxr2mui0jd%2BwFz%2FkWhM7lt3vbt16a8sEcRTElH3D4naLnG0evUQGLkOvc2pwRrElY8fjsm53mBaFS00wg72x7W%2FRaOL0yNHgFNDllDf1yUixgiWey0sHItYI3KSEa%2Bpl9BZQN4ifuy4j8f19KP6TbXmLV66Ic5An1lSR7EbhOj7czf%2Bv0pC0dzfyZODI8pWQyNp3ti0bJHjlT7t%2FpIWWJToCbZOHON2H1tE2QcdJl56qbdDnAzSZFjgngDGH%2FFzSt7L73QGIvWQtsfegiXl5OMk%2Ft%2FhKCTTnv7jZez2oQypglmSBiN46t7PmLBUYSKmPIGv0aFUl3jjQUcHxgTN4Vp95%2BzWTlEfLMfr%2BjgerJEjlUVHKnOjSjcbgZSXA1uLzvuo4QV3Oja4W1DJqqPbtMUAzussm4oMpRNcnN%2FKiPifsrmn7MMwsBbnvll5Np%2Fz%2FSn57e6z156vBKVvJFlifLi9ALRXtEi8mizFvROu0Y%2FHwt5Y4WvqCCFQRbYlwSm6pijNIh1ZT9DDA696%2FBjqkAeU9UNESPS9ZR9ALTys3JtPIW1menqEU1Oi1CBT473TDyjUSQwtpCg6PoWMvX1B2zW3ja7wvpqxhGH%2F5pbNXPQr0HI5C0wrxFknkVwyo2nQK1VGC8t0N8NqNUrz1mz834QJ9%2FfHZ31%2Fu9cFPz7IOCxzFdPqlbeqLOoVDwVh8p9TcielZHl1SqUUQDiuVFL1bdCp5m1QyJ1ROTg60ztzQAuaygsW5&X-Amz-Signature=75146e11855f505895ae8add65ab3ae75287f38764e23d351ebd67b27d51660f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHKNAEDK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWQ7ScwuF8xY5uUSWCBjK9yax5421yeso5DU0tHCf5RQIhAPsUPgQStVC3xyMd69Gwpd2I78IGrenQX4qfdaksyhpSKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf58lLUqLfQn5KPwkq3AMjuep2swOZo2A%2FnQMFWDNJRtaSTE6mAcUiZeOWVRLxZM9pDazniWImNhwngh%2FWKJCE%2F2Ym%2Fxzvv64Ihs2fF6%2B6jkq9Vob6RGpHnFZx54%2BcCQGkAKtErxr2mui0jd%2BwFz%2FkWhM7lt3vbt16a8sEcRTElH3D4naLnG0evUQGLkOvc2pwRrElY8fjsm53mBaFS00wg72x7W%2FRaOL0yNHgFNDllDf1yUixgiWey0sHItYI3KSEa%2Bpl9BZQN4ifuy4j8f19KP6TbXmLV66Ic5An1lSR7EbhOj7czf%2Bv0pC0dzfyZODI8pWQyNp3ti0bJHjlT7t%2FpIWWJToCbZOHON2H1tE2QcdJl56qbdDnAzSZFjgngDGH%2FFzSt7L73QGIvWQtsfegiXl5OMk%2Ft%2FhKCTTnv7jZez2oQypglmSBiN46t7PmLBUYSKmPIGv0aFUl3jjQUcHxgTN4Vp95%2BzWTlEfLMfr%2BjgerJEjlUVHKnOjSjcbgZSXA1uLzvuo4QV3Oja4W1DJqqPbtMUAzussm4oMpRNcnN%2FKiPifsrmn7MMwsBbnvll5Np%2Fz%2FSn57e6z156vBKVvJFlifLi9ALRXtEi8mizFvROu0Y%2FHwt5Y4WvqCCFQRbYlwSm6pijNIh1ZT9DDA696%2FBjqkAeU9UNESPS9ZR9ALTys3JtPIW1menqEU1Oi1CBT473TDyjUSQwtpCg6PoWMvX1B2zW3ja7wvpqxhGH%2F5pbNXPQr0HI5C0wrxFknkVwyo2nQK1VGC8t0N8NqNUrz1mz834QJ9%2FfHZ31%2Fu9cFPz7IOCxzFdPqlbeqLOoVDwVh8p9TcielZHl1SqUUQDiuVFL1bdCp5m1QyJ1ROTg60ztzQAuaygsW5&X-Amz-Signature=de6949d88cfb1949effa8d4cb988f7849e161b052185b882692a53e0659f5041&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHKNAEDK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWQ7ScwuF8xY5uUSWCBjK9yax5421yeso5DU0tHCf5RQIhAPsUPgQStVC3xyMd69Gwpd2I78IGrenQX4qfdaksyhpSKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf58lLUqLfQn5KPwkq3AMjuep2swOZo2A%2FnQMFWDNJRtaSTE6mAcUiZeOWVRLxZM9pDazniWImNhwngh%2FWKJCE%2F2Ym%2Fxzvv64Ihs2fF6%2B6jkq9Vob6RGpHnFZx54%2BcCQGkAKtErxr2mui0jd%2BwFz%2FkWhM7lt3vbt16a8sEcRTElH3D4naLnG0evUQGLkOvc2pwRrElY8fjsm53mBaFS00wg72x7W%2FRaOL0yNHgFNDllDf1yUixgiWey0sHItYI3KSEa%2Bpl9BZQN4ifuy4j8f19KP6TbXmLV66Ic5An1lSR7EbhOj7czf%2Bv0pC0dzfyZODI8pWQyNp3ti0bJHjlT7t%2FpIWWJToCbZOHON2H1tE2QcdJl56qbdDnAzSZFjgngDGH%2FFzSt7L73QGIvWQtsfegiXl5OMk%2Ft%2FhKCTTnv7jZez2oQypglmSBiN46t7PmLBUYSKmPIGv0aFUl3jjQUcHxgTN4Vp95%2BzWTlEfLMfr%2BjgerJEjlUVHKnOjSjcbgZSXA1uLzvuo4QV3Oja4W1DJqqPbtMUAzussm4oMpRNcnN%2FKiPifsrmn7MMwsBbnvll5Np%2Fz%2FSn57e6z156vBKVvJFlifLi9ALRXtEi8mizFvROu0Y%2FHwt5Y4WvqCCFQRbYlwSm6pijNIh1ZT9DDA696%2FBjqkAeU9UNESPS9ZR9ALTys3JtPIW1menqEU1Oi1CBT473TDyjUSQwtpCg6PoWMvX1B2zW3ja7wvpqxhGH%2F5pbNXPQr0HI5C0wrxFknkVwyo2nQK1VGC8t0N8NqNUrz1mz834QJ9%2FfHZ31%2Fu9cFPz7IOCxzFdPqlbeqLOoVDwVh8p9TcielZHl1SqUUQDiuVFL1bdCp5m1QyJ1ROTg60ztzQAuaygsW5&X-Amz-Signature=b6d72cf84c28b22357a8d5deec30ad37447ca9bd10792616608af62ceb2e2068&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHKNAEDK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWQ7ScwuF8xY5uUSWCBjK9yax5421yeso5DU0tHCf5RQIhAPsUPgQStVC3xyMd69Gwpd2I78IGrenQX4qfdaksyhpSKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf58lLUqLfQn5KPwkq3AMjuep2swOZo2A%2FnQMFWDNJRtaSTE6mAcUiZeOWVRLxZM9pDazniWImNhwngh%2FWKJCE%2F2Ym%2Fxzvv64Ihs2fF6%2B6jkq9Vob6RGpHnFZx54%2BcCQGkAKtErxr2mui0jd%2BwFz%2FkWhM7lt3vbt16a8sEcRTElH3D4naLnG0evUQGLkOvc2pwRrElY8fjsm53mBaFS00wg72x7W%2FRaOL0yNHgFNDllDf1yUixgiWey0sHItYI3KSEa%2Bpl9BZQN4ifuy4j8f19KP6TbXmLV66Ic5An1lSR7EbhOj7czf%2Bv0pC0dzfyZODI8pWQyNp3ti0bJHjlT7t%2FpIWWJToCbZOHON2H1tE2QcdJl56qbdDnAzSZFjgngDGH%2FFzSt7L73QGIvWQtsfegiXl5OMk%2Ft%2FhKCTTnv7jZez2oQypglmSBiN46t7PmLBUYSKmPIGv0aFUl3jjQUcHxgTN4Vp95%2BzWTlEfLMfr%2BjgerJEjlUVHKnOjSjcbgZSXA1uLzvuo4QV3Oja4W1DJqqPbtMUAzussm4oMpRNcnN%2FKiPifsrmn7MMwsBbnvll5Np%2Fz%2FSn57e6z156vBKVvJFlifLi9ALRXtEi8mizFvROu0Y%2FHwt5Y4WvqCCFQRbYlwSm6pijNIh1ZT9DDA696%2FBjqkAeU9UNESPS9ZR9ALTys3JtPIW1menqEU1Oi1CBT473TDyjUSQwtpCg6PoWMvX1B2zW3ja7wvpqxhGH%2F5pbNXPQr0HI5C0wrxFknkVwyo2nQK1VGC8t0N8NqNUrz1mz834QJ9%2FfHZ31%2Fu9cFPz7IOCxzFdPqlbeqLOoVDwVh8p9TcielZHl1SqUUQDiuVFL1bdCp5m1QyJ1ROTg60ztzQAuaygsW5&X-Amz-Signature=98d25aba53a3077aa82371e5b52938c38e6a94552b09611926dca44806d53856&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHKNAEDK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWQ7ScwuF8xY5uUSWCBjK9yax5421yeso5DU0tHCf5RQIhAPsUPgQStVC3xyMd69Gwpd2I78IGrenQX4qfdaksyhpSKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf58lLUqLfQn5KPwkq3AMjuep2swOZo2A%2FnQMFWDNJRtaSTE6mAcUiZeOWVRLxZM9pDazniWImNhwngh%2FWKJCE%2F2Ym%2Fxzvv64Ihs2fF6%2B6jkq9Vob6RGpHnFZx54%2BcCQGkAKtErxr2mui0jd%2BwFz%2FkWhM7lt3vbt16a8sEcRTElH3D4naLnG0evUQGLkOvc2pwRrElY8fjsm53mBaFS00wg72x7W%2FRaOL0yNHgFNDllDf1yUixgiWey0sHItYI3KSEa%2Bpl9BZQN4ifuy4j8f19KP6TbXmLV66Ic5An1lSR7EbhOj7czf%2Bv0pC0dzfyZODI8pWQyNp3ti0bJHjlT7t%2FpIWWJToCbZOHON2H1tE2QcdJl56qbdDnAzSZFjgngDGH%2FFzSt7L73QGIvWQtsfegiXl5OMk%2Ft%2FhKCTTnv7jZez2oQypglmSBiN46t7PmLBUYSKmPIGv0aFUl3jjQUcHxgTN4Vp95%2BzWTlEfLMfr%2BjgerJEjlUVHKnOjSjcbgZSXA1uLzvuo4QV3Oja4W1DJqqPbtMUAzussm4oMpRNcnN%2FKiPifsrmn7MMwsBbnvll5Np%2Fz%2FSn57e6z156vBKVvJFlifLi9ALRXtEi8mizFvROu0Y%2FHwt5Y4WvqCCFQRbYlwSm6pijNIh1ZT9DDA696%2FBjqkAeU9UNESPS9ZR9ALTys3JtPIW1menqEU1Oi1CBT473TDyjUSQwtpCg6PoWMvX1B2zW3ja7wvpqxhGH%2F5pbNXPQr0HI5C0wrxFknkVwyo2nQK1VGC8t0N8NqNUrz1mz834QJ9%2FfHZ31%2Fu9cFPz7IOCxzFdPqlbeqLOoVDwVh8p9TcielZHl1SqUUQDiuVFL1bdCp5m1QyJ1ROTg60ztzQAuaygsW5&X-Amz-Signature=efd6233b8d21a55fe2172dba72c1c8e07e5bdd9694e2ff7aa9142f3ec9982539&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
