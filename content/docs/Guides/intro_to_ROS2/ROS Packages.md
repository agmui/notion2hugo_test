---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVLS6R7%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBRHE84AcdcHmWLGYXWFKXZNGNey6PiKraJXHH95hLZAiBGQaU47DLkmvGO%2FoL5KtWNXVF95WUvl6%2FFG7OVUUYhbyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWixy4CrF6M4r%2F0oKtwDhPVXrdz4Bn10CfBLX5zi5pvKpNoE0unKdd6mQZIsipJj4HS1cVId%2FkADefcaeDNNwRyH8pODuNdCU8JB%2B3bpHL%2B%2Fpx4vMLRsqrlvBLfpI0PjG%2F5xzS5MBi9f2zGI94xghxJ993IWU51%2Bti7KIQgzV0OmoHxJEkMicMJ8Gat5jCw1HrqsGRwXBx4XW%2Fg7SDpK75KR%2FXHTLFXeDCzQITRYz6ixDn7D9LIbx7seYwFi7xRJNJWD5vQ819ACc9l7R6tC%2B%2F7iaU742l8TrP0eGtyBFWJCXgYZGU7PU1Ka6xJFLR8NRbK4e9Po%2ByFGIbqBjKEBGOHcFZ0VsVtfyWx7W7ZbLa5TPKoX%2BELlnT6%2BEc5Cl3FShok3R6JUW2cnMJx04%2BONiQs%2BIVGgB8I92EFu8dSYXeMeP1%2BHE52ySXHjIiVMVy4v12BMDZACSnp28Jsq4JDzCPnRYLmHknhs5fwncLoyw5iMfxdBwiIUwpBfcKDq0aT5nEZcfSDvelcKpvo1urFrk78TFYIUl%2BnfXU2oIKE5XY6L6m5s1jMF9giVvQuNE%2Ft3Q1oO%2FwF9TTgKZRMv5mlXqF47xAY3U11cRcIoB9R0qALdg7F1RetTZc%2FD8NddgwsdJ8GYJsVWo5hqYRIw3NTDwwY6pgEGu4HJ3jlFmx123BgrCfcamj2Y5uoTHTXDJnW1p%2ByuqC2rBC%2FEbo7rvl2oeFuwYpALlkYXUMi%2Br%2FAPK2%2F67f83h3fusPP%2BgsJF3mM%2FPNqdq4JIIn0c2Ie2INN3wM8RAslWVGAlYrDyy9aLO1NA43MdGn9df8fBYPGgLQUPKOjQ3DVYxjpQYP8vhzGmTqhfqZC%2Fe8jbKJeVKWw2ab1tO4RgVOCBON%2Fr&X-Amz-Signature=e6cd045db4a7fd74f9157a285eb3b535e8e6dbf45f75c917327c1c2e9d974abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVLS6R7%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBRHE84AcdcHmWLGYXWFKXZNGNey6PiKraJXHH95hLZAiBGQaU47DLkmvGO%2FoL5KtWNXVF95WUvl6%2FFG7OVUUYhbyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWixy4CrF6M4r%2F0oKtwDhPVXrdz4Bn10CfBLX5zi5pvKpNoE0unKdd6mQZIsipJj4HS1cVId%2FkADefcaeDNNwRyH8pODuNdCU8JB%2B3bpHL%2B%2Fpx4vMLRsqrlvBLfpI0PjG%2F5xzS5MBi9f2zGI94xghxJ993IWU51%2Bti7KIQgzV0OmoHxJEkMicMJ8Gat5jCw1HrqsGRwXBx4XW%2Fg7SDpK75KR%2FXHTLFXeDCzQITRYz6ixDn7D9LIbx7seYwFi7xRJNJWD5vQ819ACc9l7R6tC%2B%2F7iaU742l8TrP0eGtyBFWJCXgYZGU7PU1Ka6xJFLR8NRbK4e9Po%2ByFGIbqBjKEBGOHcFZ0VsVtfyWx7W7ZbLa5TPKoX%2BELlnT6%2BEc5Cl3FShok3R6JUW2cnMJx04%2BONiQs%2BIVGgB8I92EFu8dSYXeMeP1%2BHE52ySXHjIiVMVy4v12BMDZACSnp28Jsq4JDzCPnRYLmHknhs5fwncLoyw5iMfxdBwiIUwpBfcKDq0aT5nEZcfSDvelcKpvo1urFrk78TFYIUl%2BnfXU2oIKE5XY6L6m5s1jMF9giVvQuNE%2Ft3Q1oO%2FwF9TTgKZRMv5mlXqF47xAY3U11cRcIoB9R0qALdg7F1RetTZc%2FD8NddgwsdJ8GYJsVWo5hqYRIw3NTDwwY6pgEGu4HJ3jlFmx123BgrCfcamj2Y5uoTHTXDJnW1p%2ByuqC2rBC%2FEbo7rvl2oeFuwYpALlkYXUMi%2Br%2FAPK2%2F67f83h3fusPP%2BgsJF3mM%2FPNqdq4JIIn0c2Ie2INN3wM8RAslWVGAlYrDyy9aLO1NA43MdGn9df8fBYPGgLQUPKOjQ3DVYxjpQYP8vhzGmTqhfqZC%2Fe8jbKJeVKWw2ab1tO4RgVOCBON%2Fr&X-Amz-Signature=c281942991d4f05a4e84f6be21a950e596d8097b66b4bb69e85bffaea89264c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVLS6R7%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBRHE84AcdcHmWLGYXWFKXZNGNey6PiKraJXHH95hLZAiBGQaU47DLkmvGO%2FoL5KtWNXVF95WUvl6%2FFG7OVUUYhbyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWixy4CrF6M4r%2F0oKtwDhPVXrdz4Bn10CfBLX5zi5pvKpNoE0unKdd6mQZIsipJj4HS1cVId%2FkADefcaeDNNwRyH8pODuNdCU8JB%2B3bpHL%2B%2Fpx4vMLRsqrlvBLfpI0PjG%2F5xzS5MBi9f2zGI94xghxJ993IWU51%2Bti7KIQgzV0OmoHxJEkMicMJ8Gat5jCw1HrqsGRwXBx4XW%2Fg7SDpK75KR%2FXHTLFXeDCzQITRYz6ixDn7D9LIbx7seYwFi7xRJNJWD5vQ819ACc9l7R6tC%2B%2F7iaU742l8TrP0eGtyBFWJCXgYZGU7PU1Ka6xJFLR8NRbK4e9Po%2ByFGIbqBjKEBGOHcFZ0VsVtfyWx7W7ZbLa5TPKoX%2BELlnT6%2BEc5Cl3FShok3R6JUW2cnMJx04%2BONiQs%2BIVGgB8I92EFu8dSYXeMeP1%2BHE52ySXHjIiVMVy4v12BMDZACSnp28Jsq4JDzCPnRYLmHknhs5fwncLoyw5iMfxdBwiIUwpBfcKDq0aT5nEZcfSDvelcKpvo1urFrk78TFYIUl%2BnfXU2oIKE5XY6L6m5s1jMF9giVvQuNE%2Ft3Q1oO%2FwF9TTgKZRMv5mlXqF47xAY3U11cRcIoB9R0qALdg7F1RetTZc%2FD8NddgwsdJ8GYJsVWo5hqYRIw3NTDwwY6pgEGu4HJ3jlFmx123BgrCfcamj2Y5uoTHTXDJnW1p%2ByuqC2rBC%2FEbo7rvl2oeFuwYpALlkYXUMi%2Br%2FAPK2%2F67f83h3fusPP%2BgsJF3mM%2FPNqdq4JIIn0c2Ie2INN3wM8RAslWVGAlYrDyy9aLO1NA43MdGn9df8fBYPGgLQUPKOjQ3DVYxjpQYP8vhzGmTqhfqZC%2Fe8jbKJeVKWw2ab1tO4RgVOCBON%2Fr&X-Amz-Signature=3ac5b5be673bb42e1b72c44673e72a343e4fec57670b014e23b7251803498ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVLS6R7%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBRHE84AcdcHmWLGYXWFKXZNGNey6PiKraJXHH95hLZAiBGQaU47DLkmvGO%2FoL5KtWNXVF95WUvl6%2FFG7OVUUYhbyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWixy4CrF6M4r%2F0oKtwDhPVXrdz4Bn10CfBLX5zi5pvKpNoE0unKdd6mQZIsipJj4HS1cVId%2FkADefcaeDNNwRyH8pODuNdCU8JB%2B3bpHL%2B%2Fpx4vMLRsqrlvBLfpI0PjG%2F5xzS5MBi9f2zGI94xghxJ993IWU51%2Bti7KIQgzV0OmoHxJEkMicMJ8Gat5jCw1HrqsGRwXBx4XW%2Fg7SDpK75KR%2FXHTLFXeDCzQITRYz6ixDn7D9LIbx7seYwFi7xRJNJWD5vQ819ACc9l7R6tC%2B%2F7iaU742l8TrP0eGtyBFWJCXgYZGU7PU1Ka6xJFLR8NRbK4e9Po%2ByFGIbqBjKEBGOHcFZ0VsVtfyWx7W7ZbLa5TPKoX%2BELlnT6%2BEc5Cl3FShok3R6JUW2cnMJx04%2BONiQs%2BIVGgB8I92EFu8dSYXeMeP1%2BHE52ySXHjIiVMVy4v12BMDZACSnp28Jsq4JDzCPnRYLmHknhs5fwncLoyw5iMfxdBwiIUwpBfcKDq0aT5nEZcfSDvelcKpvo1urFrk78TFYIUl%2BnfXU2oIKE5XY6L6m5s1jMF9giVvQuNE%2Ft3Q1oO%2FwF9TTgKZRMv5mlXqF47xAY3U11cRcIoB9R0qALdg7F1RetTZc%2FD8NddgwsdJ8GYJsVWo5hqYRIw3NTDwwY6pgEGu4HJ3jlFmx123BgrCfcamj2Y5uoTHTXDJnW1p%2ByuqC2rBC%2FEbo7rvl2oeFuwYpALlkYXUMi%2Br%2FAPK2%2F67f83h3fusPP%2BgsJF3mM%2FPNqdq4JIIn0c2Ie2INN3wM8RAslWVGAlYrDyy9aLO1NA43MdGn9df8fBYPGgLQUPKOjQ3DVYxjpQYP8vhzGmTqhfqZC%2Fe8jbKJeVKWw2ab1tO4RgVOCBON%2Fr&X-Amz-Signature=e1c38917a6cefa4e33eea96429b0495ce7d61c583faa010cf9fb52e190271cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVLS6R7%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBRHE84AcdcHmWLGYXWFKXZNGNey6PiKraJXHH95hLZAiBGQaU47DLkmvGO%2FoL5KtWNXVF95WUvl6%2FFG7OVUUYhbyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWixy4CrF6M4r%2F0oKtwDhPVXrdz4Bn10CfBLX5zi5pvKpNoE0unKdd6mQZIsipJj4HS1cVId%2FkADefcaeDNNwRyH8pODuNdCU8JB%2B3bpHL%2B%2Fpx4vMLRsqrlvBLfpI0PjG%2F5xzS5MBi9f2zGI94xghxJ993IWU51%2Bti7KIQgzV0OmoHxJEkMicMJ8Gat5jCw1HrqsGRwXBx4XW%2Fg7SDpK75KR%2FXHTLFXeDCzQITRYz6ixDn7D9LIbx7seYwFi7xRJNJWD5vQ819ACc9l7R6tC%2B%2F7iaU742l8TrP0eGtyBFWJCXgYZGU7PU1Ka6xJFLR8NRbK4e9Po%2ByFGIbqBjKEBGOHcFZ0VsVtfyWx7W7ZbLa5TPKoX%2BELlnT6%2BEc5Cl3FShok3R6JUW2cnMJx04%2BONiQs%2BIVGgB8I92EFu8dSYXeMeP1%2BHE52ySXHjIiVMVy4v12BMDZACSnp28Jsq4JDzCPnRYLmHknhs5fwncLoyw5iMfxdBwiIUwpBfcKDq0aT5nEZcfSDvelcKpvo1urFrk78TFYIUl%2BnfXU2oIKE5XY6L6m5s1jMF9giVvQuNE%2Ft3Q1oO%2FwF9TTgKZRMv5mlXqF47xAY3U11cRcIoB9R0qALdg7F1RetTZc%2FD8NddgwsdJ8GYJsVWo5hqYRIw3NTDwwY6pgEGu4HJ3jlFmx123BgrCfcamj2Y5uoTHTXDJnW1p%2ByuqC2rBC%2FEbo7rvl2oeFuwYpALlkYXUMi%2Br%2FAPK2%2F67f83h3fusPP%2BgsJF3mM%2FPNqdq4JIIn0c2Ie2INN3wM8RAslWVGAlYrDyy9aLO1NA43MdGn9df8fBYPGgLQUPKOjQ3DVYxjpQYP8vhzGmTqhfqZC%2Fe8jbKJeVKWw2ab1tO4RgVOCBON%2Fr&X-Amz-Signature=23710d595172290f60bc8bf5d1073ad9b3149c1868d727d4c8fdd5e897bd9374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVLS6R7%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBRHE84AcdcHmWLGYXWFKXZNGNey6PiKraJXHH95hLZAiBGQaU47DLkmvGO%2FoL5KtWNXVF95WUvl6%2FFG7OVUUYhbyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWixy4CrF6M4r%2F0oKtwDhPVXrdz4Bn10CfBLX5zi5pvKpNoE0unKdd6mQZIsipJj4HS1cVId%2FkADefcaeDNNwRyH8pODuNdCU8JB%2B3bpHL%2B%2Fpx4vMLRsqrlvBLfpI0PjG%2F5xzS5MBi9f2zGI94xghxJ993IWU51%2Bti7KIQgzV0OmoHxJEkMicMJ8Gat5jCw1HrqsGRwXBx4XW%2Fg7SDpK75KR%2FXHTLFXeDCzQITRYz6ixDn7D9LIbx7seYwFi7xRJNJWD5vQ819ACc9l7R6tC%2B%2F7iaU742l8TrP0eGtyBFWJCXgYZGU7PU1Ka6xJFLR8NRbK4e9Po%2ByFGIbqBjKEBGOHcFZ0VsVtfyWx7W7ZbLa5TPKoX%2BELlnT6%2BEc5Cl3FShok3R6JUW2cnMJx04%2BONiQs%2BIVGgB8I92EFu8dSYXeMeP1%2BHE52ySXHjIiVMVy4v12BMDZACSnp28Jsq4JDzCPnRYLmHknhs5fwncLoyw5iMfxdBwiIUwpBfcKDq0aT5nEZcfSDvelcKpvo1urFrk78TFYIUl%2BnfXU2oIKE5XY6L6m5s1jMF9giVvQuNE%2Ft3Q1oO%2FwF9TTgKZRMv5mlXqF47xAY3U11cRcIoB9R0qALdg7F1RetTZc%2FD8NddgwsdJ8GYJsVWo5hqYRIw3NTDwwY6pgEGu4HJ3jlFmx123BgrCfcamj2Y5uoTHTXDJnW1p%2ByuqC2rBC%2FEbo7rvl2oeFuwYpALlkYXUMi%2Br%2FAPK2%2F67f83h3fusPP%2BgsJF3mM%2FPNqdq4JIIn0c2Ie2INN3wM8RAslWVGAlYrDyy9aLO1NA43MdGn9df8fBYPGgLQUPKOjQ3DVYxjpQYP8vhzGmTqhfqZC%2Fe8jbKJeVKWw2ab1tO4RgVOCBON%2Fr&X-Amz-Signature=ae018221bd199993c9072fe9995d6b24618399b3f03a2bd5d72555713ea49d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVLS6R7%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBRHE84AcdcHmWLGYXWFKXZNGNey6PiKraJXHH95hLZAiBGQaU47DLkmvGO%2FoL5KtWNXVF95WUvl6%2FFG7OVUUYhbyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWixy4CrF6M4r%2F0oKtwDhPVXrdz4Bn10CfBLX5zi5pvKpNoE0unKdd6mQZIsipJj4HS1cVId%2FkADefcaeDNNwRyH8pODuNdCU8JB%2B3bpHL%2B%2Fpx4vMLRsqrlvBLfpI0PjG%2F5xzS5MBi9f2zGI94xghxJ993IWU51%2Bti7KIQgzV0OmoHxJEkMicMJ8Gat5jCw1HrqsGRwXBx4XW%2Fg7SDpK75KR%2FXHTLFXeDCzQITRYz6ixDn7D9LIbx7seYwFi7xRJNJWD5vQ819ACc9l7R6tC%2B%2F7iaU742l8TrP0eGtyBFWJCXgYZGU7PU1Ka6xJFLR8NRbK4e9Po%2ByFGIbqBjKEBGOHcFZ0VsVtfyWx7W7ZbLa5TPKoX%2BELlnT6%2BEc5Cl3FShok3R6JUW2cnMJx04%2BONiQs%2BIVGgB8I92EFu8dSYXeMeP1%2BHE52ySXHjIiVMVy4v12BMDZACSnp28Jsq4JDzCPnRYLmHknhs5fwncLoyw5iMfxdBwiIUwpBfcKDq0aT5nEZcfSDvelcKpvo1urFrk78TFYIUl%2BnfXU2oIKE5XY6L6m5s1jMF9giVvQuNE%2Ft3Q1oO%2FwF9TTgKZRMv5mlXqF47xAY3U11cRcIoB9R0qALdg7F1RetTZc%2FD8NddgwsdJ8GYJsVWo5hqYRIw3NTDwwY6pgEGu4HJ3jlFmx123BgrCfcamj2Y5uoTHTXDJnW1p%2ByuqC2rBC%2FEbo7rvl2oeFuwYpALlkYXUMi%2Br%2FAPK2%2F67f83h3fusPP%2BgsJF3mM%2FPNqdq4JIIn0c2Ie2INN3wM8RAslWVGAlYrDyy9aLO1NA43MdGn9df8fBYPGgLQUPKOjQ3DVYxjpQYP8vhzGmTqhfqZC%2Fe8jbKJeVKWw2ab1tO4RgVOCBON%2Fr&X-Amz-Signature=9b6fb71e901f304671415b28f158ff2de4ebbe3d73b8fb1f591ca7f97b768ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
