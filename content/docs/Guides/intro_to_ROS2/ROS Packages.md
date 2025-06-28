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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZZ2LN5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDti3f%2BxJhLpSz4wp%2Frn%2B6tKOLeVCDCTi9OiCZt%2F%2Fx6cwIgQpD8GDE0FLI2rqiVWRYPqov%2BFZoN81gCxXVmM7mi91YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwWndPcO5svOCOe2yrcA9%2F9RDAhow3fth9cVcyBhfh%2BND6iCzz3vbbBwBAM3RQhTaPCU%2BeU4O7IQooeeQyhlbWc3TOLJ%2FrwPyNHXNYO5cX434nzns2qr1U86vM0CZS7QS1WdhI6s2XTyXh6iC8xdTmQPM0zTeq%2BPh9AQKmMx%2BpH%2BdZEZ6fBCdxk%2FvnyTkEeSpYLSZL48nASv8j7RbLBxBoMnj3xSjq8CeMv8gv3Xh5%2B%2FmZUbDJO%2BM3Rrf5k128WC3OJN1OGqtjdbzDii%2Fc963H8b9RMvNvQdRY7Q%2FEThBrcp4s0PnlZY%2F9gT%2FD1pdOL6iGtOUb1LtsFsyPselDq2sT9JjVzKkC19dQb00g05kNaA0aqGCWjjfEf1tt2wNDktPOIWfDH0iZv%2BEv4cLashuCJlWXW%2FBRkxvcQHTqGkjQdyylK5LZdvtI7s6%2Bo33TK%2FYlz1AIDc7wXh0gEKvcOk8EaCLekTArh1pwld5OOxMxSqv5FmSZpay2f3IO2dGjjvJeJCPFdEtJYgBPLfn0kvhBoN9FeD53ZQ6P40Odj2cgNdAFiockp4JjQKUKPDKdAzrNoZ%2BbJRrnKgt%2ByIy8lZ3oHsHHlzYlYsgi56vTGUiIVDvIO3LqQIbzqd7oLAlZ0Jk5OZdv01nLUUaxCMI%2FX%2FMIGOqUB2A63lb%2F5yaruaLqsrTvLfiODeoVjKTqrx1vn%2BN3bG98P0fXHToLkfuyQYlk6XKUU00SCHF%2BD1u4EKimGjl9zHHC2nV9zfZI0nSW8dKJmH7uPZ1z6bLPKu3iAd%2B2aSDmRiTeccmAKkmN9Hg2v%2Bb0MrG3fXYEoG4azLJHrb5cx%2BgkN60RAZx0UzVSCd2Rwfk6wuu%2FSMq3Y9Yqj5c%2B0gNzzwBJ6JWyN&X-Amz-Signature=479d542c16d1f2a235fb4c051aed71050073a94a250dd0854dbfd3a35a544cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZZ2LN5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDti3f%2BxJhLpSz4wp%2Frn%2B6tKOLeVCDCTi9OiCZt%2F%2Fx6cwIgQpD8GDE0FLI2rqiVWRYPqov%2BFZoN81gCxXVmM7mi91YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwWndPcO5svOCOe2yrcA9%2F9RDAhow3fth9cVcyBhfh%2BND6iCzz3vbbBwBAM3RQhTaPCU%2BeU4O7IQooeeQyhlbWc3TOLJ%2FrwPyNHXNYO5cX434nzns2qr1U86vM0CZS7QS1WdhI6s2XTyXh6iC8xdTmQPM0zTeq%2BPh9AQKmMx%2BpH%2BdZEZ6fBCdxk%2FvnyTkEeSpYLSZL48nASv8j7RbLBxBoMnj3xSjq8CeMv8gv3Xh5%2B%2FmZUbDJO%2BM3Rrf5k128WC3OJN1OGqtjdbzDii%2Fc963H8b9RMvNvQdRY7Q%2FEThBrcp4s0PnlZY%2F9gT%2FD1pdOL6iGtOUb1LtsFsyPselDq2sT9JjVzKkC19dQb00g05kNaA0aqGCWjjfEf1tt2wNDktPOIWfDH0iZv%2BEv4cLashuCJlWXW%2FBRkxvcQHTqGkjQdyylK5LZdvtI7s6%2Bo33TK%2FYlz1AIDc7wXh0gEKvcOk8EaCLekTArh1pwld5OOxMxSqv5FmSZpay2f3IO2dGjjvJeJCPFdEtJYgBPLfn0kvhBoN9FeD53ZQ6P40Odj2cgNdAFiockp4JjQKUKPDKdAzrNoZ%2BbJRrnKgt%2ByIy8lZ3oHsHHlzYlYsgi56vTGUiIVDvIO3LqQIbzqd7oLAlZ0Jk5OZdv01nLUUaxCMI%2FX%2FMIGOqUB2A63lb%2F5yaruaLqsrTvLfiODeoVjKTqrx1vn%2BN3bG98P0fXHToLkfuyQYlk6XKUU00SCHF%2BD1u4EKimGjl9zHHC2nV9zfZI0nSW8dKJmH7uPZ1z6bLPKu3iAd%2B2aSDmRiTeccmAKkmN9Hg2v%2Bb0MrG3fXYEoG4azLJHrb5cx%2BgkN60RAZx0UzVSCd2Rwfk6wuu%2FSMq3Y9Yqj5c%2B0gNzzwBJ6JWyN&X-Amz-Signature=e5c0141202a4b123dc6d918cf4bc2343aa2a1b92e1e390c98398ea4da16e9f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZZ2LN5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDti3f%2BxJhLpSz4wp%2Frn%2B6tKOLeVCDCTi9OiCZt%2F%2Fx6cwIgQpD8GDE0FLI2rqiVWRYPqov%2BFZoN81gCxXVmM7mi91YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwWndPcO5svOCOe2yrcA9%2F9RDAhow3fth9cVcyBhfh%2BND6iCzz3vbbBwBAM3RQhTaPCU%2BeU4O7IQooeeQyhlbWc3TOLJ%2FrwPyNHXNYO5cX434nzns2qr1U86vM0CZS7QS1WdhI6s2XTyXh6iC8xdTmQPM0zTeq%2BPh9AQKmMx%2BpH%2BdZEZ6fBCdxk%2FvnyTkEeSpYLSZL48nASv8j7RbLBxBoMnj3xSjq8CeMv8gv3Xh5%2B%2FmZUbDJO%2BM3Rrf5k128WC3OJN1OGqtjdbzDii%2Fc963H8b9RMvNvQdRY7Q%2FEThBrcp4s0PnlZY%2F9gT%2FD1pdOL6iGtOUb1LtsFsyPselDq2sT9JjVzKkC19dQb00g05kNaA0aqGCWjjfEf1tt2wNDktPOIWfDH0iZv%2BEv4cLashuCJlWXW%2FBRkxvcQHTqGkjQdyylK5LZdvtI7s6%2Bo33TK%2FYlz1AIDc7wXh0gEKvcOk8EaCLekTArh1pwld5OOxMxSqv5FmSZpay2f3IO2dGjjvJeJCPFdEtJYgBPLfn0kvhBoN9FeD53ZQ6P40Odj2cgNdAFiockp4JjQKUKPDKdAzrNoZ%2BbJRrnKgt%2ByIy8lZ3oHsHHlzYlYsgi56vTGUiIVDvIO3LqQIbzqd7oLAlZ0Jk5OZdv01nLUUaxCMI%2FX%2FMIGOqUB2A63lb%2F5yaruaLqsrTvLfiODeoVjKTqrx1vn%2BN3bG98P0fXHToLkfuyQYlk6XKUU00SCHF%2BD1u4EKimGjl9zHHC2nV9zfZI0nSW8dKJmH7uPZ1z6bLPKu3iAd%2B2aSDmRiTeccmAKkmN9Hg2v%2Bb0MrG3fXYEoG4azLJHrb5cx%2BgkN60RAZx0UzVSCd2Rwfk6wuu%2FSMq3Y9Yqj5c%2B0gNzzwBJ6JWyN&X-Amz-Signature=ed3f0cb14de08d2f58ae789254ce71011964aac4164cc56b70e639799d4a11d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZZ2LN5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDti3f%2BxJhLpSz4wp%2Frn%2B6tKOLeVCDCTi9OiCZt%2F%2Fx6cwIgQpD8GDE0FLI2rqiVWRYPqov%2BFZoN81gCxXVmM7mi91YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwWndPcO5svOCOe2yrcA9%2F9RDAhow3fth9cVcyBhfh%2BND6iCzz3vbbBwBAM3RQhTaPCU%2BeU4O7IQooeeQyhlbWc3TOLJ%2FrwPyNHXNYO5cX434nzns2qr1U86vM0CZS7QS1WdhI6s2XTyXh6iC8xdTmQPM0zTeq%2BPh9AQKmMx%2BpH%2BdZEZ6fBCdxk%2FvnyTkEeSpYLSZL48nASv8j7RbLBxBoMnj3xSjq8CeMv8gv3Xh5%2B%2FmZUbDJO%2BM3Rrf5k128WC3OJN1OGqtjdbzDii%2Fc963H8b9RMvNvQdRY7Q%2FEThBrcp4s0PnlZY%2F9gT%2FD1pdOL6iGtOUb1LtsFsyPselDq2sT9JjVzKkC19dQb00g05kNaA0aqGCWjjfEf1tt2wNDktPOIWfDH0iZv%2BEv4cLashuCJlWXW%2FBRkxvcQHTqGkjQdyylK5LZdvtI7s6%2Bo33TK%2FYlz1AIDc7wXh0gEKvcOk8EaCLekTArh1pwld5OOxMxSqv5FmSZpay2f3IO2dGjjvJeJCPFdEtJYgBPLfn0kvhBoN9FeD53ZQ6P40Odj2cgNdAFiockp4JjQKUKPDKdAzrNoZ%2BbJRrnKgt%2ByIy8lZ3oHsHHlzYlYsgi56vTGUiIVDvIO3LqQIbzqd7oLAlZ0Jk5OZdv01nLUUaxCMI%2FX%2FMIGOqUB2A63lb%2F5yaruaLqsrTvLfiODeoVjKTqrx1vn%2BN3bG98P0fXHToLkfuyQYlk6XKUU00SCHF%2BD1u4EKimGjl9zHHC2nV9zfZI0nSW8dKJmH7uPZ1z6bLPKu3iAd%2B2aSDmRiTeccmAKkmN9Hg2v%2Bb0MrG3fXYEoG4azLJHrb5cx%2BgkN60RAZx0UzVSCd2Rwfk6wuu%2FSMq3Y9Yqj5c%2B0gNzzwBJ6JWyN&X-Amz-Signature=309de4a93ca424ec3e9b39bd1afdb0bf648275c3dd9bc01afc9b4a2236538262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZZ2LN5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDti3f%2BxJhLpSz4wp%2Frn%2B6tKOLeVCDCTi9OiCZt%2F%2Fx6cwIgQpD8GDE0FLI2rqiVWRYPqov%2BFZoN81gCxXVmM7mi91YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwWndPcO5svOCOe2yrcA9%2F9RDAhow3fth9cVcyBhfh%2BND6iCzz3vbbBwBAM3RQhTaPCU%2BeU4O7IQooeeQyhlbWc3TOLJ%2FrwPyNHXNYO5cX434nzns2qr1U86vM0CZS7QS1WdhI6s2XTyXh6iC8xdTmQPM0zTeq%2BPh9AQKmMx%2BpH%2BdZEZ6fBCdxk%2FvnyTkEeSpYLSZL48nASv8j7RbLBxBoMnj3xSjq8CeMv8gv3Xh5%2B%2FmZUbDJO%2BM3Rrf5k128WC3OJN1OGqtjdbzDii%2Fc963H8b9RMvNvQdRY7Q%2FEThBrcp4s0PnlZY%2F9gT%2FD1pdOL6iGtOUb1LtsFsyPselDq2sT9JjVzKkC19dQb00g05kNaA0aqGCWjjfEf1tt2wNDktPOIWfDH0iZv%2BEv4cLashuCJlWXW%2FBRkxvcQHTqGkjQdyylK5LZdvtI7s6%2Bo33TK%2FYlz1AIDc7wXh0gEKvcOk8EaCLekTArh1pwld5OOxMxSqv5FmSZpay2f3IO2dGjjvJeJCPFdEtJYgBPLfn0kvhBoN9FeD53ZQ6P40Odj2cgNdAFiockp4JjQKUKPDKdAzrNoZ%2BbJRrnKgt%2ByIy8lZ3oHsHHlzYlYsgi56vTGUiIVDvIO3LqQIbzqd7oLAlZ0Jk5OZdv01nLUUaxCMI%2FX%2FMIGOqUB2A63lb%2F5yaruaLqsrTvLfiODeoVjKTqrx1vn%2BN3bG98P0fXHToLkfuyQYlk6XKUU00SCHF%2BD1u4EKimGjl9zHHC2nV9zfZI0nSW8dKJmH7uPZ1z6bLPKu3iAd%2B2aSDmRiTeccmAKkmN9Hg2v%2Bb0MrG3fXYEoG4azLJHrb5cx%2BgkN60RAZx0UzVSCd2Rwfk6wuu%2FSMq3Y9Yqj5c%2B0gNzzwBJ6JWyN&X-Amz-Signature=0990b3a82f0f2613648ce1be97bb4fe0a4023a9e98e4c150714c4ef8358edb0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZZ2LN5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDti3f%2BxJhLpSz4wp%2Frn%2B6tKOLeVCDCTi9OiCZt%2F%2Fx6cwIgQpD8GDE0FLI2rqiVWRYPqov%2BFZoN81gCxXVmM7mi91YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwWndPcO5svOCOe2yrcA9%2F9RDAhow3fth9cVcyBhfh%2BND6iCzz3vbbBwBAM3RQhTaPCU%2BeU4O7IQooeeQyhlbWc3TOLJ%2FrwPyNHXNYO5cX434nzns2qr1U86vM0CZS7QS1WdhI6s2XTyXh6iC8xdTmQPM0zTeq%2BPh9AQKmMx%2BpH%2BdZEZ6fBCdxk%2FvnyTkEeSpYLSZL48nASv8j7RbLBxBoMnj3xSjq8CeMv8gv3Xh5%2B%2FmZUbDJO%2BM3Rrf5k128WC3OJN1OGqtjdbzDii%2Fc963H8b9RMvNvQdRY7Q%2FEThBrcp4s0PnlZY%2F9gT%2FD1pdOL6iGtOUb1LtsFsyPselDq2sT9JjVzKkC19dQb00g05kNaA0aqGCWjjfEf1tt2wNDktPOIWfDH0iZv%2BEv4cLashuCJlWXW%2FBRkxvcQHTqGkjQdyylK5LZdvtI7s6%2Bo33TK%2FYlz1AIDc7wXh0gEKvcOk8EaCLekTArh1pwld5OOxMxSqv5FmSZpay2f3IO2dGjjvJeJCPFdEtJYgBPLfn0kvhBoN9FeD53ZQ6P40Odj2cgNdAFiockp4JjQKUKPDKdAzrNoZ%2BbJRrnKgt%2ByIy8lZ3oHsHHlzYlYsgi56vTGUiIVDvIO3LqQIbzqd7oLAlZ0Jk5OZdv01nLUUaxCMI%2FX%2FMIGOqUB2A63lb%2F5yaruaLqsrTvLfiODeoVjKTqrx1vn%2BN3bG98P0fXHToLkfuyQYlk6XKUU00SCHF%2BD1u4EKimGjl9zHHC2nV9zfZI0nSW8dKJmH7uPZ1z6bLPKu3iAd%2B2aSDmRiTeccmAKkmN9Hg2v%2Bb0MrG3fXYEoG4azLJHrb5cx%2BgkN60RAZx0UzVSCd2Rwfk6wuu%2FSMq3Y9Yqj5c%2B0gNzzwBJ6JWyN&X-Amz-Signature=b7d9599e32bc157931f08b7363fde524b51486a5ef826d2f24bc9769481e3446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZZ2LN5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDti3f%2BxJhLpSz4wp%2Frn%2B6tKOLeVCDCTi9OiCZt%2F%2Fx6cwIgQpD8GDE0FLI2rqiVWRYPqov%2BFZoN81gCxXVmM7mi91YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwWndPcO5svOCOe2yrcA9%2F9RDAhow3fth9cVcyBhfh%2BND6iCzz3vbbBwBAM3RQhTaPCU%2BeU4O7IQooeeQyhlbWc3TOLJ%2FrwPyNHXNYO5cX434nzns2qr1U86vM0CZS7QS1WdhI6s2XTyXh6iC8xdTmQPM0zTeq%2BPh9AQKmMx%2BpH%2BdZEZ6fBCdxk%2FvnyTkEeSpYLSZL48nASv8j7RbLBxBoMnj3xSjq8CeMv8gv3Xh5%2B%2FmZUbDJO%2BM3Rrf5k128WC3OJN1OGqtjdbzDii%2Fc963H8b9RMvNvQdRY7Q%2FEThBrcp4s0PnlZY%2F9gT%2FD1pdOL6iGtOUb1LtsFsyPselDq2sT9JjVzKkC19dQb00g05kNaA0aqGCWjjfEf1tt2wNDktPOIWfDH0iZv%2BEv4cLashuCJlWXW%2FBRkxvcQHTqGkjQdyylK5LZdvtI7s6%2Bo33TK%2FYlz1AIDc7wXh0gEKvcOk8EaCLekTArh1pwld5OOxMxSqv5FmSZpay2f3IO2dGjjvJeJCPFdEtJYgBPLfn0kvhBoN9FeD53ZQ6P40Odj2cgNdAFiockp4JjQKUKPDKdAzrNoZ%2BbJRrnKgt%2ByIy8lZ3oHsHHlzYlYsgi56vTGUiIVDvIO3LqQIbzqd7oLAlZ0Jk5OZdv01nLUUaxCMI%2FX%2FMIGOqUB2A63lb%2F5yaruaLqsrTvLfiODeoVjKTqrx1vn%2BN3bG98P0fXHToLkfuyQYlk6XKUU00SCHF%2BD1u4EKimGjl9zHHC2nV9zfZI0nSW8dKJmH7uPZ1z6bLPKu3iAd%2B2aSDmRiTeccmAKkmN9Hg2v%2Bb0MrG3fXYEoG4azLJHrb5cx%2BgkN60RAZx0UzVSCd2Rwfk6wuu%2FSMq3Y9Yqj5c%2B0gNzzwBJ6JWyN&X-Amz-Signature=2a603f318b2f4a1041597c830d5a35c12ea3d3498a03d13b15226790dd05a981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
