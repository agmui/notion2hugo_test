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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTRM5DIJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6%2FBLLwEvi%2F%2B%2BpEunrjZB6t317uwZb6NPQjyALL9W%2BYAiALEEyLpsa5nlgYwBywPUZgXsRaBdWVAEUXqEW8lsw4xyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMloIZw225J4R7egquKtwDF1jAUL%2Fk7BTvHkoTmdBEpH6CXb%2Fid5obcdPjPm8DmCjBSGwY0crkjkTj4e3zQcQhjYhUoFhj5%2BfnlPmFkD6zPWm60GJaJDBt1dONqoQAfURn%2FYLiHKZCipxPaXrFKThTj5nraBxUG2kBl5doOdHpzx1OVFajQCgcOZ2IWFK7Xbgl%2BGB3amEPXe5jcF2etjSVM9PBS2LCDgSmESefdKbx9zp0T4D9mZw1YASH7QTPQ1sm1u0zp7tMjS8HpvVUF6NHFk1Ofihlur%2F%2BEyt0PXXsQ5Tt7xplz5PhFsxfIxU1w2QJsWCwiVr6og2Uh%2FQaywT5ACZERUUynmnDs4kEKn3W1GwP3HVQcU0ipVKpZ4hORDkF0HfElqXe89UNeyGQVjp0ClrKO58LBOeDMZaBbday6aBbqRhjgjTVbs6%2BVOJWqmXfthS19xsl61Chx%2BMEeWv8phjdUPaDno3YR3N2dDUwkZx65yioP5LlEXkmg0eCGpnjA36SB6NuHz6Fau255VKRkEmEzeALzbIOmzhmEupoh5oUCS3fZpiNYJZOlHxzPfv5KSiobiIF2zViZdoFq%2FlOZb%2F6vYz0guBcvozFRcaHy9CsayzTjUZPHrEwAXv%2B5dpiHSRrL01yH9ZPyfwwiJX1vAY6pgFl2Ad17mLY0KB%2B4YCc3Yru1a1xX8%2BfXCapdUEuEoQlVho4qS3B8sfjJU%2BTIDKPpnCTY21C8jTl9bJrxRIt6b0x1A2hlnu8TJqVyWcXszqCQ644IOb4NGdipq9j8dSrNvFa4JQNqAekS%2Bgim07%2FWwJm9ezR9Dj%2F8E8lIxfChojEG0hrFzfOk%2FnXVIl%2FuWrfgFPfsI6PqBiGsOiVJ4a3Z%2FTssJ0H5UEV&X-Amz-Signature=524242fbe3a6ba600ef9340a1536551561f874ee532653f892406e573ff0b8bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTRM5DIJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6%2FBLLwEvi%2F%2B%2BpEunrjZB6t317uwZb6NPQjyALL9W%2BYAiALEEyLpsa5nlgYwBywPUZgXsRaBdWVAEUXqEW8lsw4xyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMloIZw225J4R7egquKtwDF1jAUL%2Fk7BTvHkoTmdBEpH6CXb%2Fid5obcdPjPm8DmCjBSGwY0crkjkTj4e3zQcQhjYhUoFhj5%2BfnlPmFkD6zPWm60GJaJDBt1dONqoQAfURn%2FYLiHKZCipxPaXrFKThTj5nraBxUG2kBl5doOdHpzx1OVFajQCgcOZ2IWFK7Xbgl%2BGB3amEPXe5jcF2etjSVM9PBS2LCDgSmESefdKbx9zp0T4D9mZw1YASH7QTPQ1sm1u0zp7tMjS8HpvVUF6NHFk1Ofihlur%2F%2BEyt0PXXsQ5Tt7xplz5PhFsxfIxU1w2QJsWCwiVr6og2Uh%2FQaywT5ACZERUUynmnDs4kEKn3W1GwP3HVQcU0ipVKpZ4hORDkF0HfElqXe89UNeyGQVjp0ClrKO58LBOeDMZaBbday6aBbqRhjgjTVbs6%2BVOJWqmXfthS19xsl61Chx%2BMEeWv8phjdUPaDno3YR3N2dDUwkZx65yioP5LlEXkmg0eCGpnjA36SB6NuHz6Fau255VKRkEmEzeALzbIOmzhmEupoh5oUCS3fZpiNYJZOlHxzPfv5KSiobiIF2zViZdoFq%2FlOZb%2F6vYz0guBcvozFRcaHy9CsayzTjUZPHrEwAXv%2B5dpiHSRrL01yH9ZPyfwwiJX1vAY6pgFl2Ad17mLY0KB%2B4YCc3Yru1a1xX8%2BfXCapdUEuEoQlVho4qS3B8sfjJU%2BTIDKPpnCTY21C8jTl9bJrxRIt6b0x1A2hlnu8TJqVyWcXszqCQ644IOb4NGdipq9j8dSrNvFa4JQNqAekS%2Bgim07%2FWwJm9ezR9Dj%2F8E8lIxfChojEG0hrFzfOk%2FnXVIl%2FuWrfgFPfsI6PqBiGsOiVJ4a3Z%2FTssJ0H5UEV&X-Amz-Signature=68ab90c4201fc5375ba70bc5bce18a763f868216f8640b9fb15730faf969a51c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTRM5DIJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6%2FBLLwEvi%2F%2B%2BpEunrjZB6t317uwZb6NPQjyALL9W%2BYAiALEEyLpsa5nlgYwBywPUZgXsRaBdWVAEUXqEW8lsw4xyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMloIZw225J4R7egquKtwDF1jAUL%2Fk7BTvHkoTmdBEpH6CXb%2Fid5obcdPjPm8DmCjBSGwY0crkjkTj4e3zQcQhjYhUoFhj5%2BfnlPmFkD6zPWm60GJaJDBt1dONqoQAfURn%2FYLiHKZCipxPaXrFKThTj5nraBxUG2kBl5doOdHpzx1OVFajQCgcOZ2IWFK7Xbgl%2BGB3amEPXe5jcF2etjSVM9PBS2LCDgSmESefdKbx9zp0T4D9mZw1YASH7QTPQ1sm1u0zp7tMjS8HpvVUF6NHFk1Ofihlur%2F%2BEyt0PXXsQ5Tt7xplz5PhFsxfIxU1w2QJsWCwiVr6og2Uh%2FQaywT5ACZERUUynmnDs4kEKn3W1GwP3HVQcU0ipVKpZ4hORDkF0HfElqXe89UNeyGQVjp0ClrKO58LBOeDMZaBbday6aBbqRhjgjTVbs6%2BVOJWqmXfthS19xsl61Chx%2BMEeWv8phjdUPaDno3YR3N2dDUwkZx65yioP5LlEXkmg0eCGpnjA36SB6NuHz6Fau255VKRkEmEzeALzbIOmzhmEupoh5oUCS3fZpiNYJZOlHxzPfv5KSiobiIF2zViZdoFq%2FlOZb%2F6vYz0guBcvozFRcaHy9CsayzTjUZPHrEwAXv%2B5dpiHSRrL01yH9ZPyfwwiJX1vAY6pgFl2Ad17mLY0KB%2B4YCc3Yru1a1xX8%2BfXCapdUEuEoQlVho4qS3B8sfjJU%2BTIDKPpnCTY21C8jTl9bJrxRIt6b0x1A2hlnu8TJqVyWcXszqCQ644IOb4NGdipq9j8dSrNvFa4JQNqAekS%2Bgim07%2FWwJm9ezR9Dj%2F8E8lIxfChojEG0hrFzfOk%2FnXVIl%2FuWrfgFPfsI6PqBiGsOiVJ4a3Z%2FTssJ0H5UEV&X-Amz-Signature=a9653163083de08600afc524c776e41ec319e726e118605864ece2097d95ec07&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTRM5DIJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6%2FBLLwEvi%2F%2B%2BpEunrjZB6t317uwZb6NPQjyALL9W%2BYAiALEEyLpsa5nlgYwBywPUZgXsRaBdWVAEUXqEW8lsw4xyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMloIZw225J4R7egquKtwDF1jAUL%2Fk7BTvHkoTmdBEpH6CXb%2Fid5obcdPjPm8DmCjBSGwY0crkjkTj4e3zQcQhjYhUoFhj5%2BfnlPmFkD6zPWm60GJaJDBt1dONqoQAfURn%2FYLiHKZCipxPaXrFKThTj5nraBxUG2kBl5doOdHpzx1OVFajQCgcOZ2IWFK7Xbgl%2BGB3amEPXe5jcF2etjSVM9PBS2LCDgSmESefdKbx9zp0T4D9mZw1YASH7QTPQ1sm1u0zp7tMjS8HpvVUF6NHFk1Ofihlur%2F%2BEyt0PXXsQ5Tt7xplz5PhFsxfIxU1w2QJsWCwiVr6og2Uh%2FQaywT5ACZERUUynmnDs4kEKn3W1GwP3HVQcU0ipVKpZ4hORDkF0HfElqXe89UNeyGQVjp0ClrKO58LBOeDMZaBbday6aBbqRhjgjTVbs6%2BVOJWqmXfthS19xsl61Chx%2BMEeWv8phjdUPaDno3YR3N2dDUwkZx65yioP5LlEXkmg0eCGpnjA36SB6NuHz6Fau255VKRkEmEzeALzbIOmzhmEupoh5oUCS3fZpiNYJZOlHxzPfv5KSiobiIF2zViZdoFq%2FlOZb%2F6vYz0guBcvozFRcaHy9CsayzTjUZPHrEwAXv%2B5dpiHSRrL01yH9ZPyfwwiJX1vAY6pgFl2Ad17mLY0KB%2B4YCc3Yru1a1xX8%2BfXCapdUEuEoQlVho4qS3B8sfjJU%2BTIDKPpnCTY21C8jTl9bJrxRIt6b0x1A2hlnu8TJqVyWcXszqCQ644IOb4NGdipq9j8dSrNvFa4JQNqAekS%2Bgim07%2FWwJm9ezR9Dj%2F8E8lIxfChojEG0hrFzfOk%2FnXVIl%2FuWrfgFPfsI6PqBiGsOiVJ4a3Z%2FTssJ0H5UEV&X-Amz-Signature=01c07de3043b1511a310e680f26e4f9942992f8d601163bba607f6bbba29d5c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTRM5DIJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6%2FBLLwEvi%2F%2B%2BpEunrjZB6t317uwZb6NPQjyALL9W%2BYAiALEEyLpsa5nlgYwBywPUZgXsRaBdWVAEUXqEW8lsw4xyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMloIZw225J4R7egquKtwDF1jAUL%2Fk7BTvHkoTmdBEpH6CXb%2Fid5obcdPjPm8DmCjBSGwY0crkjkTj4e3zQcQhjYhUoFhj5%2BfnlPmFkD6zPWm60GJaJDBt1dONqoQAfURn%2FYLiHKZCipxPaXrFKThTj5nraBxUG2kBl5doOdHpzx1OVFajQCgcOZ2IWFK7Xbgl%2BGB3amEPXe5jcF2etjSVM9PBS2LCDgSmESefdKbx9zp0T4D9mZw1YASH7QTPQ1sm1u0zp7tMjS8HpvVUF6NHFk1Ofihlur%2F%2BEyt0PXXsQ5Tt7xplz5PhFsxfIxU1w2QJsWCwiVr6og2Uh%2FQaywT5ACZERUUynmnDs4kEKn3W1GwP3HVQcU0ipVKpZ4hORDkF0HfElqXe89UNeyGQVjp0ClrKO58LBOeDMZaBbday6aBbqRhjgjTVbs6%2BVOJWqmXfthS19xsl61Chx%2BMEeWv8phjdUPaDno3YR3N2dDUwkZx65yioP5LlEXkmg0eCGpnjA36SB6NuHz6Fau255VKRkEmEzeALzbIOmzhmEupoh5oUCS3fZpiNYJZOlHxzPfv5KSiobiIF2zViZdoFq%2FlOZb%2F6vYz0guBcvozFRcaHy9CsayzTjUZPHrEwAXv%2B5dpiHSRrL01yH9ZPyfwwiJX1vAY6pgFl2Ad17mLY0KB%2B4YCc3Yru1a1xX8%2BfXCapdUEuEoQlVho4qS3B8sfjJU%2BTIDKPpnCTY21C8jTl9bJrxRIt6b0x1A2hlnu8TJqVyWcXszqCQ644IOb4NGdipq9j8dSrNvFa4JQNqAekS%2Bgim07%2FWwJm9ezR9Dj%2F8E8lIxfChojEG0hrFzfOk%2FnXVIl%2FuWrfgFPfsI6PqBiGsOiVJ4a3Z%2FTssJ0H5UEV&X-Amz-Signature=0d3c922691a33e94fd63e636034b77c71738e3e71d0d2490476d68be747c3f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTRM5DIJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6%2FBLLwEvi%2F%2B%2BpEunrjZB6t317uwZb6NPQjyALL9W%2BYAiALEEyLpsa5nlgYwBywPUZgXsRaBdWVAEUXqEW8lsw4xyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMloIZw225J4R7egquKtwDF1jAUL%2Fk7BTvHkoTmdBEpH6CXb%2Fid5obcdPjPm8DmCjBSGwY0crkjkTj4e3zQcQhjYhUoFhj5%2BfnlPmFkD6zPWm60GJaJDBt1dONqoQAfURn%2FYLiHKZCipxPaXrFKThTj5nraBxUG2kBl5doOdHpzx1OVFajQCgcOZ2IWFK7Xbgl%2BGB3amEPXe5jcF2etjSVM9PBS2LCDgSmESefdKbx9zp0T4D9mZw1YASH7QTPQ1sm1u0zp7tMjS8HpvVUF6NHFk1Ofihlur%2F%2BEyt0PXXsQ5Tt7xplz5PhFsxfIxU1w2QJsWCwiVr6og2Uh%2FQaywT5ACZERUUynmnDs4kEKn3W1GwP3HVQcU0ipVKpZ4hORDkF0HfElqXe89UNeyGQVjp0ClrKO58LBOeDMZaBbday6aBbqRhjgjTVbs6%2BVOJWqmXfthS19xsl61Chx%2BMEeWv8phjdUPaDno3YR3N2dDUwkZx65yioP5LlEXkmg0eCGpnjA36SB6NuHz6Fau255VKRkEmEzeALzbIOmzhmEupoh5oUCS3fZpiNYJZOlHxzPfv5KSiobiIF2zViZdoFq%2FlOZb%2F6vYz0guBcvozFRcaHy9CsayzTjUZPHrEwAXv%2B5dpiHSRrL01yH9ZPyfwwiJX1vAY6pgFl2Ad17mLY0KB%2B4YCc3Yru1a1xX8%2BfXCapdUEuEoQlVho4qS3B8sfjJU%2BTIDKPpnCTY21C8jTl9bJrxRIt6b0x1A2hlnu8TJqVyWcXszqCQ644IOb4NGdipq9j8dSrNvFa4JQNqAekS%2Bgim07%2FWwJm9ezR9Dj%2F8E8lIxfChojEG0hrFzfOk%2FnXVIl%2FuWrfgFPfsI6PqBiGsOiVJ4a3Z%2FTssJ0H5UEV&X-Amz-Signature=2363669fd9d87eedbae44c8eb0ce9d3ace378969f8cf19e2e6b120f53665816f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTRM5DIJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6%2FBLLwEvi%2F%2B%2BpEunrjZB6t317uwZb6NPQjyALL9W%2BYAiALEEyLpsa5nlgYwBywPUZgXsRaBdWVAEUXqEW8lsw4xyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMloIZw225J4R7egquKtwDF1jAUL%2Fk7BTvHkoTmdBEpH6CXb%2Fid5obcdPjPm8DmCjBSGwY0crkjkTj4e3zQcQhjYhUoFhj5%2BfnlPmFkD6zPWm60GJaJDBt1dONqoQAfURn%2FYLiHKZCipxPaXrFKThTj5nraBxUG2kBl5doOdHpzx1OVFajQCgcOZ2IWFK7Xbgl%2BGB3amEPXe5jcF2etjSVM9PBS2LCDgSmESefdKbx9zp0T4D9mZw1YASH7QTPQ1sm1u0zp7tMjS8HpvVUF6NHFk1Ofihlur%2F%2BEyt0PXXsQ5Tt7xplz5PhFsxfIxU1w2QJsWCwiVr6og2Uh%2FQaywT5ACZERUUynmnDs4kEKn3W1GwP3HVQcU0ipVKpZ4hORDkF0HfElqXe89UNeyGQVjp0ClrKO58LBOeDMZaBbday6aBbqRhjgjTVbs6%2BVOJWqmXfthS19xsl61Chx%2BMEeWv8phjdUPaDno3YR3N2dDUwkZx65yioP5LlEXkmg0eCGpnjA36SB6NuHz6Fau255VKRkEmEzeALzbIOmzhmEupoh5oUCS3fZpiNYJZOlHxzPfv5KSiobiIF2zViZdoFq%2FlOZb%2F6vYz0guBcvozFRcaHy9CsayzTjUZPHrEwAXv%2B5dpiHSRrL01yH9ZPyfwwiJX1vAY6pgFl2Ad17mLY0KB%2B4YCc3Yru1a1xX8%2BfXCapdUEuEoQlVho4qS3B8sfjJU%2BTIDKPpnCTY21C8jTl9bJrxRIt6b0x1A2hlnu8TJqVyWcXszqCQ644IOb4NGdipq9j8dSrNvFa4JQNqAekS%2Bgim07%2FWwJm9ezR9Dj%2F8E8lIxfChojEG0hrFzfOk%2FnXVIl%2FuWrfgFPfsI6PqBiGsOiVJ4a3Z%2FTssJ0H5UEV&X-Amz-Signature=8b844dd5c45b0fcd304349d45f01c77c0240a60de555db07f1625584c6559933&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
