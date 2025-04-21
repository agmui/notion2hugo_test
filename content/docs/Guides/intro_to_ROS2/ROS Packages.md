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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QMUCKH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCuNwLgUO3EBv%2FIVCA8vJQ8SoHhSun8s9H0AtTZS64kOQIgGenH%2ByOtnIWNA9ziLakXJXgwUD8bWcGdoREfQTf%2FIlcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGsx8fLyD04u4%2BLyrcA7SnsVbdXXp8uGJApifq6vi7RQZlmeE9JB7IifgKVsyIztsAbhbRmyQ7movocLR2y4OvMZp3Zx9cC68ud4qLYnWCRwx7BIk7vLATd3Co%2FgHGmESVs05Mkj94zCaX3GWK9FMGNlrmnQmF03fsBmzckq1sRC5iJ4q6XmuXalenVuu6SiBw1bEt1j0KwxUrKDlpbdZ0hRpBa7l%2B3JQTMbpwluMt%2Fl2s7zKzpfiq5O%2BrkqmaCAAcpful%2FOt8u7O0DXvoZ2PE3QGdysh0peYVKoCMvY4LauETOpxhCL8qhLY7O5P8pyTSZ3azkDyn5A9peLbm5P%2F1WSSU0bKYXIgpu4D%2Breq8U%2FoHTpMEvgO8RoaNaVgMMS47ENhjWU%2FjpN8p%2Fw5Qbsxe%2FM9KaZGSmq6XaW5bQayHdCRQuvTD5QNwBnZY34p9XKy61hdpKy%2FHjv6E5SQMi%2F5PfLwEcM0C9o6UFGgTtlDxoYF%2FkjhTDhoALf4EWM4cBQ%2BSpWFFtFhfKQmWSh3XpEbpamyMwA3xdDGLigRbTaxMEmECiXjlw7oP%2FYNTmA8CXKczKkJWJQy3U4AQsOpkF95b5KpJAITPa0Vqv9Ub9O1IUku9QEniSJ84a7FkZAsTPM3exNMgUduJXDiIMIfsmcAGOqUBiIH9JAUTXzJyAq222YEjwKwQ68J43i7NSSGCLOt%2FuY2laCcnKJUco65NdX4iu1PpZJVbTooV3%2B99XLREwfD82IGKjJFTbgmsE0qms3KB4L5BkuSBtRLESQ0dWSml%2B%2Fiqw3kbQb6uV%2Ba6WJXy%2BylQEnsIApd5xvL09zoS9MmxdGmaPLZrPooNthpN4gqR7ykl0KkIyCfPyZ81pUT7apDky2qJTLso&X-Amz-Signature=289d5c27b45dc972bf12a222ca3eca01773fafed61a56fa5a16b236349273834&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QMUCKH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCuNwLgUO3EBv%2FIVCA8vJQ8SoHhSun8s9H0AtTZS64kOQIgGenH%2ByOtnIWNA9ziLakXJXgwUD8bWcGdoREfQTf%2FIlcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGsx8fLyD04u4%2BLyrcA7SnsVbdXXp8uGJApifq6vi7RQZlmeE9JB7IifgKVsyIztsAbhbRmyQ7movocLR2y4OvMZp3Zx9cC68ud4qLYnWCRwx7BIk7vLATd3Co%2FgHGmESVs05Mkj94zCaX3GWK9FMGNlrmnQmF03fsBmzckq1sRC5iJ4q6XmuXalenVuu6SiBw1bEt1j0KwxUrKDlpbdZ0hRpBa7l%2B3JQTMbpwluMt%2Fl2s7zKzpfiq5O%2BrkqmaCAAcpful%2FOt8u7O0DXvoZ2PE3QGdysh0peYVKoCMvY4LauETOpxhCL8qhLY7O5P8pyTSZ3azkDyn5A9peLbm5P%2F1WSSU0bKYXIgpu4D%2Breq8U%2FoHTpMEvgO8RoaNaVgMMS47ENhjWU%2FjpN8p%2Fw5Qbsxe%2FM9KaZGSmq6XaW5bQayHdCRQuvTD5QNwBnZY34p9XKy61hdpKy%2FHjv6E5SQMi%2F5PfLwEcM0C9o6UFGgTtlDxoYF%2FkjhTDhoALf4EWM4cBQ%2BSpWFFtFhfKQmWSh3XpEbpamyMwA3xdDGLigRbTaxMEmECiXjlw7oP%2FYNTmA8CXKczKkJWJQy3U4AQsOpkF95b5KpJAITPa0Vqv9Ub9O1IUku9QEniSJ84a7FkZAsTPM3exNMgUduJXDiIMIfsmcAGOqUBiIH9JAUTXzJyAq222YEjwKwQ68J43i7NSSGCLOt%2FuY2laCcnKJUco65NdX4iu1PpZJVbTooV3%2B99XLREwfD82IGKjJFTbgmsE0qms3KB4L5BkuSBtRLESQ0dWSml%2B%2Fiqw3kbQb6uV%2Ba6WJXy%2BylQEnsIApd5xvL09zoS9MmxdGmaPLZrPooNthpN4gqR7ykl0KkIyCfPyZ81pUT7apDky2qJTLso&X-Amz-Signature=93941baedf3dc16c044b00da67123d2b61d1d3fbc83160240c062bd9ecf410ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QMUCKH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCuNwLgUO3EBv%2FIVCA8vJQ8SoHhSun8s9H0AtTZS64kOQIgGenH%2ByOtnIWNA9ziLakXJXgwUD8bWcGdoREfQTf%2FIlcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGsx8fLyD04u4%2BLyrcA7SnsVbdXXp8uGJApifq6vi7RQZlmeE9JB7IifgKVsyIztsAbhbRmyQ7movocLR2y4OvMZp3Zx9cC68ud4qLYnWCRwx7BIk7vLATd3Co%2FgHGmESVs05Mkj94zCaX3GWK9FMGNlrmnQmF03fsBmzckq1sRC5iJ4q6XmuXalenVuu6SiBw1bEt1j0KwxUrKDlpbdZ0hRpBa7l%2B3JQTMbpwluMt%2Fl2s7zKzpfiq5O%2BrkqmaCAAcpful%2FOt8u7O0DXvoZ2PE3QGdysh0peYVKoCMvY4LauETOpxhCL8qhLY7O5P8pyTSZ3azkDyn5A9peLbm5P%2F1WSSU0bKYXIgpu4D%2Breq8U%2FoHTpMEvgO8RoaNaVgMMS47ENhjWU%2FjpN8p%2Fw5Qbsxe%2FM9KaZGSmq6XaW5bQayHdCRQuvTD5QNwBnZY34p9XKy61hdpKy%2FHjv6E5SQMi%2F5PfLwEcM0C9o6UFGgTtlDxoYF%2FkjhTDhoALf4EWM4cBQ%2BSpWFFtFhfKQmWSh3XpEbpamyMwA3xdDGLigRbTaxMEmECiXjlw7oP%2FYNTmA8CXKczKkJWJQy3U4AQsOpkF95b5KpJAITPa0Vqv9Ub9O1IUku9QEniSJ84a7FkZAsTPM3exNMgUduJXDiIMIfsmcAGOqUBiIH9JAUTXzJyAq222YEjwKwQ68J43i7NSSGCLOt%2FuY2laCcnKJUco65NdX4iu1PpZJVbTooV3%2B99XLREwfD82IGKjJFTbgmsE0qms3KB4L5BkuSBtRLESQ0dWSml%2B%2Fiqw3kbQb6uV%2Ba6WJXy%2BylQEnsIApd5xvL09zoS9MmxdGmaPLZrPooNthpN4gqR7ykl0KkIyCfPyZ81pUT7apDky2qJTLso&X-Amz-Signature=71c15fbf61bfa9f9dad5a777cb50cb0ee793642e00e5bf12a14ec8ec9a08e43c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QMUCKH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCuNwLgUO3EBv%2FIVCA8vJQ8SoHhSun8s9H0AtTZS64kOQIgGenH%2ByOtnIWNA9ziLakXJXgwUD8bWcGdoREfQTf%2FIlcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGsx8fLyD04u4%2BLyrcA7SnsVbdXXp8uGJApifq6vi7RQZlmeE9JB7IifgKVsyIztsAbhbRmyQ7movocLR2y4OvMZp3Zx9cC68ud4qLYnWCRwx7BIk7vLATd3Co%2FgHGmESVs05Mkj94zCaX3GWK9FMGNlrmnQmF03fsBmzckq1sRC5iJ4q6XmuXalenVuu6SiBw1bEt1j0KwxUrKDlpbdZ0hRpBa7l%2B3JQTMbpwluMt%2Fl2s7zKzpfiq5O%2BrkqmaCAAcpful%2FOt8u7O0DXvoZ2PE3QGdysh0peYVKoCMvY4LauETOpxhCL8qhLY7O5P8pyTSZ3azkDyn5A9peLbm5P%2F1WSSU0bKYXIgpu4D%2Breq8U%2FoHTpMEvgO8RoaNaVgMMS47ENhjWU%2FjpN8p%2Fw5Qbsxe%2FM9KaZGSmq6XaW5bQayHdCRQuvTD5QNwBnZY34p9XKy61hdpKy%2FHjv6E5SQMi%2F5PfLwEcM0C9o6UFGgTtlDxoYF%2FkjhTDhoALf4EWM4cBQ%2BSpWFFtFhfKQmWSh3XpEbpamyMwA3xdDGLigRbTaxMEmECiXjlw7oP%2FYNTmA8CXKczKkJWJQy3U4AQsOpkF95b5KpJAITPa0Vqv9Ub9O1IUku9QEniSJ84a7FkZAsTPM3exNMgUduJXDiIMIfsmcAGOqUBiIH9JAUTXzJyAq222YEjwKwQ68J43i7NSSGCLOt%2FuY2laCcnKJUco65NdX4iu1PpZJVbTooV3%2B99XLREwfD82IGKjJFTbgmsE0qms3KB4L5BkuSBtRLESQ0dWSml%2B%2Fiqw3kbQb6uV%2Ba6WJXy%2BylQEnsIApd5xvL09zoS9MmxdGmaPLZrPooNthpN4gqR7ykl0KkIyCfPyZ81pUT7apDky2qJTLso&X-Amz-Signature=d0fc393cb638f95759f8bbfc4d0982a812fbb0af3201ee9467b5c1162afbd6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QMUCKH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCuNwLgUO3EBv%2FIVCA8vJQ8SoHhSun8s9H0AtTZS64kOQIgGenH%2ByOtnIWNA9ziLakXJXgwUD8bWcGdoREfQTf%2FIlcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGsx8fLyD04u4%2BLyrcA7SnsVbdXXp8uGJApifq6vi7RQZlmeE9JB7IifgKVsyIztsAbhbRmyQ7movocLR2y4OvMZp3Zx9cC68ud4qLYnWCRwx7BIk7vLATd3Co%2FgHGmESVs05Mkj94zCaX3GWK9FMGNlrmnQmF03fsBmzckq1sRC5iJ4q6XmuXalenVuu6SiBw1bEt1j0KwxUrKDlpbdZ0hRpBa7l%2B3JQTMbpwluMt%2Fl2s7zKzpfiq5O%2BrkqmaCAAcpful%2FOt8u7O0DXvoZ2PE3QGdysh0peYVKoCMvY4LauETOpxhCL8qhLY7O5P8pyTSZ3azkDyn5A9peLbm5P%2F1WSSU0bKYXIgpu4D%2Breq8U%2FoHTpMEvgO8RoaNaVgMMS47ENhjWU%2FjpN8p%2Fw5Qbsxe%2FM9KaZGSmq6XaW5bQayHdCRQuvTD5QNwBnZY34p9XKy61hdpKy%2FHjv6E5SQMi%2F5PfLwEcM0C9o6UFGgTtlDxoYF%2FkjhTDhoALf4EWM4cBQ%2BSpWFFtFhfKQmWSh3XpEbpamyMwA3xdDGLigRbTaxMEmECiXjlw7oP%2FYNTmA8CXKczKkJWJQy3U4AQsOpkF95b5KpJAITPa0Vqv9Ub9O1IUku9QEniSJ84a7FkZAsTPM3exNMgUduJXDiIMIfsmcAGOqUBiIH9JAUTXzJyAq222YEjwKwQ68J43i7NSSGCLOt%2FuY2laCcnKJUco65NdX4iu1PpZJVbTooV3%2B99XLREwfD82IGKjJFTbgmsE0qms3KB4L5BkuSBtRLESQ0dWSml%2B%2Fiqw3kbQb6uV%2Ba6WJXy%2BylQEnsIApd5xvL09zoS9MmxdGmaPLZrPooNthpN4gqR7ykl0KkIyCfPyZ81pUT7apDky2qJTLso&X-Amz-Signature=1f2a0f502a765d175997256f17be1ec0d06e11be6d449a1aaebaf05918c5f7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QMUCKH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCuNwLgUO3EBv%2FIVCA8vJQ8SoHhSun8s9H0AtTZS64kOQIgGenH%2ByOtnIWNA9ziLakXJXgwUD8bWcGdoREfQTf%2FIlcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGsx8fLyD04u4%2BLyrcA7SnsVbdXXp8uGJApifq6vi7RQZlmeE9JB7IifgKVsyIztsAbhbRmyQ7movocLR2y4OvMZp3Zx9cC68ud4qLYnWCRwx7BIk7vLATd3Co%2FgHGmESVs05Mkj94zCaX3GWK9FMGNlrmnQmF03fsBmzckq1sRC5iJ4q6XmuXalenVuu6SiBw1bEt1j0KwxUrKDlpbdZ0hRpBa7l%2B3JQTMbpwluMt%2Fl2s7zKzpfiq5O%2BrkqmaCAAcpful%2FOt8u7O0DXvoZ2PE3QGdysh0peYVKoCMvY4LauETOpxhCL8qhLY7O5P8pyTSZ3azkDyn5A9peLbm5P%2F1WSSU0bKYXIgpu4D%2Breq8U%2FoHTpMEvgO8RoaNaVgMMS47ENhjWU%2FjpN8p%2Fw5Qbsxe%2FM9KaZGSmq6XaW5bQayHdCRQuvTD5QNwBnZY34p9XKy61hdpKy%2FHjv6E5SQMi%2F5PfLwEcM0C9o6UFGgTtlDxoYF%2FkjhTDhoALf4EWM4cBQ%2BSpWFFtFhfKQmWSh3XpEbpamyMwA3xdDGLigRbTaxMEmECiXjlw7oP%2FYNTmA8CXKczKkJWJQy3U4AQsOpkF95b5KpJAITPa0Vqv9Ub9O1IUku9QEniSJ84a7FkZAsTPM3exNMgUduJXDiIMIfsmcAGOqUBiIH9JAUTXzJyAq222YEjwKwQ68J43i7NSSGCLOt%2FuY2laCcnKJUco65NdX4iu1PpZJVbTooV3%2B99XLREwfD82IGKjJFTbgmsE0qms3KB4L5BkuSBtRLESQ0dWSml%2B%2Fiqw3kbQb6uV%2Ba6WJXy%2BylQEnsIApd5xvL09zoS9MmxdGmaPLZrPooNthpN4gqR7ykl0KkIyCfPyZ81pUT7apDky2qJTLso&X-Amz-Signature=06c1ebf968e2baabafdd1b11197707deb49e0793ac9b04267409e30eb2a605ce&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QMUCKH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCuNwLgUO3EBv%2FIVCA8vJQ8SoHhSun8s9H0AtTZS64kOQIgGenH%2ByOtnIWNA9ziLakXJXgwUD8bWcGdoREfQTf%2FIlcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGsx8fLyD04u4%2BLyrcA7SnsVbdXXp8uGJApifq6vi7RQZlmeE9JB7IifgKVsyIztsAbhbRmyQ7movocLR2y4OvMZp3Zx9cC68ud4qLYnWCRwx7BIk7vLATd3Co%2FgHGmESVs05Mkj94zCaX3GWK9FMGNlrmnQmF03fsBmzckq1sRC5iJ4q6XmuXalenVuu6SiBw1bEt1j0KwxUrKDlpbdZ0hRpBa7l%2B3JQTMbpwluMt%2Fl2s7zKzpfiq5O%2BrkqmaCAAcpful%2FOt8u7O0DXvoZ2PE3QGdysh0peYVKoCMvY4LauETOpxhCL8qhLY7O5P8pyTSZ3azkDyn5A9peLbm5P%2F1WSSU0bKYXIgpu4D%2Breq8U%2FoHTpMEvgO8RoaNaVgMMS47ENhjWU%2FjpN8p%2Fw5Qbsxe%2FM9KaZGSmq6XaW5bQayHdCRQuvTD5QNwBnZY34p9XKy61hdpKy%2FHjv6E5SQMi%2F5PfLwEcM0C9o6UFGgTtlDxoYF%2FkjhTDhoALf4EWM4cBQ%2BSpWFFtFhfKQmWSh3XpEbpamyMwA3xdDGLigRbTaxMEmECiXjlw7oP%2FYNTmA8CXKczKkJWJQy3U4AQsOpkF95b5KpJAITPa0Vqv9Ub9O1IUku9QEniSJ84a7FkZAsTPM3exNMgUduJXDiIMIfsmcAGOqUBiIH9JAUTXzJyAq222YEjwKwQ68J43i7NSSGCLOt%2FuY2laCcnKJUco65NdX4iu1PpZJVbTooV3%2B99XLREwfD82IGKjJFTbgmsE0qms3KB4L5BkuSBtRLESQ0dWSml%2B%2Fiqw3kbQb6uV%2Ba6WJXy%2BylQEnsIApd5xvL09zoS9MmxdGmaPLZrPooNthpN4gqR7ykl0KkIyCfPyZ81pUT7apDky2qJTLso&X-Amz-Signature=602e8177f6185eda415e26a8f591569958aad8601e154c130220750c8b09d7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
