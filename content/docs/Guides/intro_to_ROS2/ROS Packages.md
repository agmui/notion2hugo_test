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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGPNMF6B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGK0qbUOZkWgWiaQGX5XGyh1dQudbz%2BjPb3JSeyw5UdAIhAJZ6z4jeL%2FJIw8gO1WraIcHxLotyxibjXWXohUWXtDccKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb8QgOYZqkPzzdpRQq3AP%2FoRT2IFQ%2FZ8hbnYnvVVCEMHNmRiGITNXLtuoshKOYaGEvbCZi3b3C0dRmRv1W7zKJg5HlbwMRwU29EzL2z%2BSpQ0pMCAEiBcr7YM1POSUkCQLr4XF6j%2BssNFtrkdpt4o4dfC5Jv2ifeAtnqN8U6S3IisSuW9Lh%2B%2B6vO1%2BQUxBVKSOQAc0tWwUHFwIwrrA5W06KhBqC9MpvLiGlT%2Bphr8nUTbxohIYXDrGiz13hJBYrgSteqkp1MymxQZ6j6ZfeCTeXKGE7GWFX2sYFPDBxokP90dlm7iTUR5kqcxVqzuWhns8kHr1jtnVIit4%2BlE3HfAKdBjfQIl63wJ%2FfiiEQoTGD4rgITloTYS6RZrGm%2FtSpG15tNc%2FAAIO0%2Fp2ShtHQaTfQhh%2BjrBMxiPtrJ4w8qBKoUdyg7RR6tz33Xipq7TAYVpKPWVWrt9AOJwks48fUCC0grQLYwf%2Fsf7Rx9nGApniZgACoCzs5WlgKvkKTpT%2Bt3nx95vOoTlgTy8kV2T4gL64loQRkJ4g%2B%2FTn0JE4azZqOuJcDfT6GDt8Q8CnLRANJQvb1ZRFyd6SmOPiJRxrX3cg38nJenDrnYtL%2BamdjdlQRYOA56WlWZetGX2H5t3bzzGt5Qm7%2BbG%2BPMD%2BYVzC53J2%2BBjqkAUgqocUH%2Ba5QcpTHIHh6w%2F0vy%2B5R3S8qnEExqoUwWQyJop7YApXhMA9N8KQ0F%2FX4lboTl7GxSVHovuaqNfcDewTfYlzuch5VuRBlzVYBEfAtciCCYcerc0JUzDk3DeYRegb%2BtysaYvJmHgONmIFkoxM653nk9DKgDOxZWkHhdEBqSrhI2uLgUtukPpp6KT1A4khVXwHWFzWdiffi32WF6IlpX%2Buh&X-Amz-Signature=7ac3c9ead27954b07132e2ea3c672716e3d3cc22c22f4cdf9661dce28306206c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGPNMF6B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGK0qbUOZkWgWiaQGX5XGyh1dQudbz%2BjPb3JSeyw5UdAIhAJZ6z4jeL%2FJIw8gO1WraIcHxLotyxibjXWXohUWXtDccKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb8QgOYZqkPzzdpRQq3AP%2FoRT2IFQ%2FZ8hbnYnvVVCEMHNmRiGITNXLtuoshKOYaGEvbCZi3b3C0dRmRv1W7zKJg5HlbwMRwU29EzL2z%2BSpQ0pMCAEiBcr7YM1POSUkCQLr4XF6j%2BssNFtrkdpt4o4dfC5Jv2ifeAtnqN8U6S3IisSuW9Lh%2B%2B6vO1%2BQUxBVKSOQAc0tWwUHFwIwrrA5W06KhBqC9MpvLiGlT%2Bphr8nUTbxohIYXDrGiz13hJBYrgSteqkp1MymxQZ6j6ZfeCTeXKGE7GWFX2sYFPDBxokP90dlm7iTUR5kqcxVqzuWhns8kHr1jtnVIit4%2BlE3HfAKdBjfQIl63wJ%2FfiiEQoTGD4rgITloTYS6RZrGm%2FtSpG15tNc%2FAAIO0%2Fp2ShtHQaTfQhh%2BjrBMxiPtrJ4w8qBKoUdyg7RR6tz33Xipq7TAYVpKPWVWrt9AOJwks48fUCC0grQLYwf%2Fsf7Rx9nGApniZgACoCzs5WlgKvkKTpT%2Bt3nx95vOoTlgTy8kV2T4gL64loQRkJ4g%2B%2FTn0JE4azZqOuJcDfT6GDt8Q8CnLRANJQvb1ZRFyd6SmOPiJRxrX3cg38nJenDrnYtL%2BamdjdlQRYOA56WlWZetGX2H5t3bzzGt5Qm7%2BbG%2BPMD%2BYVzC53J2%2BBjqkAUgqocUH%2Ba5QcpTHIHh6w%2F0vy%2B5R3S8qnEExqoUwWQyJop7YApXhMA9N8KQ0F%2FX4lboTl7GxSVHovuaqNfcDewTfYlzuch5VuRBlzVYBEfAtciCCYcerc0JUzDk3DeYRegb%2BtysaYvJmHgONmIFkoxM653nk9DKgDOxZWkHhdEBqSrhI2uLgUtukPpp6KT1A4khVXwHWFzWdiffi32WF6IlpX%2Buh&X-Amz-Signature=890e484c430a5395be66d4abc459446765048daa8090431057237aa6c57e7197&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGPNMF6B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGK0qbUOZkWgWiaQGX5XGyh1dQudbz%2BjPb3JSeyw5UdAIhAJZ6z4jeL%2FJIw8gO1WraIcHxLotyxibjXWXohUWXtDccKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb8QgOYZqkPzzdpRQq3AP%2FoRT2IFQ%2FZ8hbnYnvVVCEMHNmRiGITNXLtuoshKOYaGEvbCZi3b3C0dRmRv1W7zKJg5HlbwMRwU29EzL2z%2BSpQ0pMCAEiBcr7YM1POSUkCQLr4XF6j%2BssNFtrkdpt4o4dfC5Jv2ifeAtnqN8U6S3IisSuW9Lh%2B%2B6vO1%2BQUxBVKSOQAc0tWwUHFwIwrrA5W06KhBqC9MpvLiGlT%2Bphr8nUTbxohIYXDrGiz13hJBYrgSteqkp1MymxQZ6j6ZfeCTeXKGE7GWFX2sYFPDBxokP90dlm7iTUR5kqcxVqzuWhns8kHr1jtnVIit4%2BlE3HfAKdBjfQIl63wJ%2FfiiEQoTGD4rgITloTYS6RZrGm%2FtSpG15tNc%2FAAIO0%2Fp2ShtHQaTfQhh%2BjrBMxiPtrJ4w8qBKoUdyg7RR6tz33Xipq7TAYVpKPWVWrt9AOJwks48fUCC0grQLYwf%2Fsf7Rx9nGApniZgACoCzs5WlgKvkKTpT%2Bt3nx95vOoTlgTy8kV2T4gL64loQRkJ4g%2B%2FTn0JE4azZqOuJcDfT6GDt8Q8CnLRANJQvb1ZRFyd6SmOPiJRxrX3cg38nJenDrnYtL%2BamdjdlQRYOA56WlWZetGX2H5t3bzzGt5Qm7%2BbG%2BPMD%2BYVzC53J2%2BBjqkAUgqocUH%2Ba5QcpTHIHh6w%2F0vy%2B5R3S8qnEExqoUwWQyJop7YApXhMA9N8KQ0F%2FX4lboTl7GxSVHovuaqNfcDewTfYlzuch5VuRBlzVYBEfAtciCCYcerc0JUzDk3DeYRegb%2BtysaYvJmHgONmIFkoxM653nk9DKgDOxZWkHhdEBqSrhI2uLgUtukPpp6KT1A4khVXwHWFzWdiffi32WF6IlpX%2Buh&X-Amz-Signature=37c3c24d457c0ef839aa12e71a7b4bdcf83761078d63d66b213fe2a22421bfe0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGPNMF6B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGK0qbUOZkWgWiaQGX5XGyh1dQudbz%2BjPb3JSeyw5UdAIhAJZ6z4jeL%2FJIw8gO1WraIcHxLotyxibjXWXohUWXtDccKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb8QgOYZqkPzzdpRQq3AP%2FoRT2IFQ%2FZ8hbnYnvVVCEMHNmRiGITNXLtuoshKOYaGEvbCZi3b3C0dRmRv1W7zKJg5HlbwMRwU29EzL2z%2BSpQ0pMCAEiBcr7YM1POSUkCQLr4XF6j%2BssNFtrkdpt4o4dfC5Jv2ifeAtnqN8U6S3IisSuW9Lh%2B%2B6vO1%2BQUxBVKSOQAc0tWwUHFwIwrrA5W06KhBqC9MpvLiGlT%2Bphr8nUTbxohIYXDrGiz13hJBYrgSteqkp1MymxQZ6j6ZfeCTeXKGE7GWFX2sYFPDBxokP90dlm7iTUR5kqcxVqzuWhns8kHr1jtnVIit4%2BlE3HfAKdBjfQIl63wJ%2FfiiEQoTGD4rgITloTYS6RZrGm%2FtSpG15tNc%2FAAIO0%2Fp2ShtHQaTfQhh%2BjrBMxiPtrJ4w8qBKoUdyg7RR6tz33Xipq7TAYVpKPWVWrt9AOJwks48fUCC0grQLYwf%2Fsf7Rx9nGApniZgACoCzs5WlgKvkKTpT%2Bt3nx95vOoTlgTy8kV2T4gL64loQRkJ4g%2B%2FTn0JE4azZqOuJcDfT6GDt8Q8CnLRANJQvb1ZRFyd6SmOPiJRxrX3cg38nJenDrnYtL%2BamdjdlQRYOA56WlWZetGX2H5t3bzzGt5Qm7%2BbG%2BPMD%2BYVzC53J2%2BBjqkAUgqocUH%2Ba5QcpTHIHh6w%2F0vy%2B5R3S8qnEExqoUwWQyJop7YApXhMA9N8KQ0F%2FX4lboTl7GxSVHovuaqNfcDewTfYlzuch5VuRBlzVYBEfAtciCCYcerc0JUzDk3DeYRegb%2BtysaYvJmHgONmIFkoxM653nk9DKgDOxZWkHhdEBqSrhI2uLgUtukPpp6KT1A4khVXwHWFzWdiffi32WF6IlpX%2Buh&X-Amz-Signature=58814d72e2609b13c6567917436a31db0354b2a29a386f6e70c87ecbc4af5542&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGPNMF6B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGK0qbUOZkWgWiaQGX5XGyh1dQudbz%2BjPb3JSeyw5UdAIhAJZ6z4jeL%2FJIw8gO1WraIcHxLotyxibjXWXohUWXtDccKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb8QgOYZqkPzzdpRQq3AP%2FoRT2IFQ%2FZ8hbnYnvVVCEMHNmRiGITNXLtuoshKOYaGEvbCZi3b3C0dRmRv1W7zKJg5HlbwMRwU29EzL2z%2BSpQ0pMCAEiBcr7YM1POSUkCQLr4XF6j%2BssNFtrkdpt4o4dfC5Jv2ifeAtnqN8U6S3IisSuW9Lh%2B%2B6vO1%2BQUxBVKSOQAc0tWwUHFwIwrrA5W06KhBqC9MpvLiGlT%2Bphr8nUTbxohIYXDrGiz13hJBYrgSteqkp1MymxQZ6j6ZfeCTeXKGE7GWFX2sYFPDBxokP90dlm7iTUR5kqcxVqzuWhns8kHr1jtnVIit4%2BlE3HfAKdBjfQIl63wJ%2FfiiEQoTGD4rgITloTYS6RZrGm%2FtSpG15tNc%2FAAIO0%2Fp2ShtHQaTfQhh%2BjrBMxiPtrJ4w8qBKoUdyg7RR6tz33Xipq7TAYVpKPWVWrt9AOJwks48fUCC0grQLYwf%2Fsf7Rx9nGApniZgACoCzs5WlgKvkKTpT%2Bt3nx95vOoTlgTy8kV2T4gL64loQRkJ4g%2B%2FTn0JE4azZqOuJcDfT6GDt8Q8CnLRANJQvb1ZRFyd6SmOPiJRxrX3cg38nJenDrnYtL%2BamdjdlQRYOA56WlWZetGX2H5t3bzzGt5Qm7%2BbG%2BPMD%2BYVzC53J2%2BBjqkAUgqocUH%2Ba5QcpTHIHh6w%2F0vy%2B5R3S8qnEExqoUwWQyJop7YApXhMA9N8KQ0F%2FX4lboTl7GxSVHovuaqNfcDewTfYlzuch5VuRBlzVYBEfAtciCCYcerc0JUzDk3DeYRegb%2BtysaYvJmHgONmIFkoxM653nk9DKgDOxZWkHhdEBqSrhI2uLgUtukPpp6KT1A4khVXwHWFzWdiffi32WF6IlpX%2Buh&X-Amz-Signature=f6eb042b338a88887b76f0230ecf74b6aa709b8c0bee0ffc63dc3b23be02df75&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGPNMF6B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGK0qbUOZkWgWiaQGX5XGyh1dQudbz%2BjPb3JSeyw5UdAIhAJZ6z4jeL%2FJIw8gO1WraIcHxLotyxibjXWXohUWXtDccKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb8QgOYZqkPzzdpRQq3AP%2FoRT2IFQ%2FZ8hbnYnvVVCEMHNmRiGITNXLtuoshKOYaGEvbCZi3b3C0dRmRv1W7zKJg5HlbwMRwU29EzL2z%2BSpQ0pMCAEiBcr7YM1POSUkCQLr4XF6j%2BssNFtrkdpt4o4dfC5Jv2ifeAtnqN8U6S3IisSuW9Lh%2B%2B6vO1%2BQUxBVKSOQAc0tWwUHFwIwrrA5W06KhBqC9MpvLiGlT%2Bphr8nUTbxohIYXDrGiz13hJBYrgSteqkp1MymxQZ6j6ZfeCTeXKGE7GWFX2sYFPDBxokP90dlm7iTUR5kqcxVqzuWhns8kHr1jtnVIit4%2BlE3HfAKdBjfQIl63wJ%2FfiiEQoTGD4rgITloTYS6RZrGm%2FtSpG15tNc%2FAAIO0%2Fp2ShtHQaTfQhh%2BjrBMxiPtrJ4w8qBKoUdyg7RR6tz33Xipq7TAYVpKPWVWrt9AOJwks48fUCC0grQLYwf%2Fsf7Rx9nGApniZgACoCzs5WlgKvkKTpT%2Bt3nx95vOoTlgTy8kV2T4gL64loQRkJ4g%2B%2FTn0JE4azZqOuJcDfT6GDt8Q8CnLRANJQvb1ZRFyd6SmOPiJRxrX3cg38nJenDrnYtL%2BamdjdlQRYOA56WlWZetGX2H5t3bzzGt5Qm7%2BbG%2BPMD%2BYVzC53J2%2BBjqkAUgqocUH%2Ba5QcpTHIHh6w%2F0vy%2B5R3S8qnEExqoUwWQyJop7YApXhMA9N8KQ0F%2FX4lboTl7GxSVHovuaqNfcDewTfYlzuch5VuRBlzVYBEfAtciCCYcerc0JUzDk3DeYRegb%2BtysaYvJmHgONmIFkoxM653nk9DKgDOxZWkHhdEBqSrhI2uLgUtukPpp6KT1A4khVXwHWFzWdiffi32WF6IlpX%2Buh&X-Amz-Signature=55abc2cd9103f6589ea30603fe65bdd29898f49abe7ab1398eea49c0b9bb3ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGPNMF6B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGK0qbUOZkWgWiaQGX5XGyh1dQudbz%2BjPb3JSeyw5UdAIhAJZ6z4jeL%2FJIw8gO1WraIcHxLotyxibjXWXohUWXtDccKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb8QgOYZqkPzzdpRQq3AP%2FoRT2IFQ%2FZ8hbnYnvVVCEMHNmRiGITNXLtuoshKOYaGEvbCZi3b3C0dRmRv1W7zKJg5HlbwMRwU29EzL2z%2BSpQ0pMCAEiBcr7YM1POSUkCQLr4XF6j%2BssNFtrkdpt4o4dfC5Jv2ifeAtnqN8U6S3IisSuW9Lh%2B%2B6vO1%2BQUxBVKSOQAc0tWwUHFwIwrrA5W06KhBqC9MpvLiGlT%2Bphr8nUTbxohIYXDrGiz13hJBYrgSteqkp1MymxQZ6j6ZfeCTeXKGE7GWFX2sYFPDBxokP90dlm7iTUR5kqcxVqzuWhns8kHr1jtnVIit4%2BlE3HfAKdBjfQIl63wJ%2FfiiEQoTGD4rgITloTYS6RZrGm%2FtSpG15tNc%2FAAIO0%2Fp2ShtHQaTfQhh%2BjrBMxiPtrJ4w8qBKoUdyg7RR6tz33Xipq7TAYVpKPWVWrt9AOJwks48fUCC0grQLYwf%2Fsf7Rx9nGApniZgACoCzs5WlgKvkKTpT%2Bt3nx95vOoTlgTy8kV2T4gL64loQRkJ4g%2B%2FTn0JE4azZqOuJcDfT6GDt8Q8CnLRANJQvb1ZRFyd6SmOPiJRxrX3cg38nJenDrnYtL%2BamdjdlQRYOA56WlWZetGX2H5t3bzzGt5Qm7%2BbG%2BPMD%2BYVzC53J2%2BBjqkAUgqocUH%2Ba5QcpTHIHh6w%2F0vy%2B5R3S8qnEExqoUwWQyJop7YApXhMA9N8KQ0F%2FX4lboTl7GxSVHovuaqNfcDewTfYlzuch5VuRBlzVYBEfAtciCCYcerc0JUzDk3DeYRegb%2BtysaYvJmHgONmIFkoxM653nk9DKgDOxZWkHhdEBqSrhI2uLgUtukPpp6KT1A4khVXwHWFzWdiffi32WF6IlpX%2Buh&X-Amz-Signature=7a32b7d7e2219f3a34a0f644f136d2560d73c18a899039c7aa96c6b3bb6947c8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
