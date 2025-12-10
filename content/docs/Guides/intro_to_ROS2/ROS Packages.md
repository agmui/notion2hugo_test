---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y25EZK2V%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP5WanXXgyGOTZTUQc%2B7KLS%2Fc2yIYjdv3CnVejjdduRAiEA3Kyc%2FKtgOg%2FZCot1PFmORMi82NtNGjLTABowwOFfuVcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiOv8%2FZ22XLJw50fyrcA44SdcdK5qqT8u6vb1sCYEiWTppAoDSRX8qcwaXxEBU8Wq8Qu5BhP7Gux5c35%2BjjLVDA7hbQYnQ9mTWewxB2Ykijr%2FQqRrLI5uJSYZZOwsCXhFhc6PGb1SKKaa7%2BiiMqPBmvuibC7w4vVCGGgLtYMnMVFWQku25DfU98LrGio7m1Fc4Gmezw4W3Ny8uioLx9fpAtcCGphLQZkDPpF3h76OCQrFsxOi7OOBmJyV8nS3m%2FFL33oeQNpbRQqNGV3oDV3zK3wMKYw2%2BozSR8FXPYDVsZZJsW8tv4wBt9RVgTkvc8KAAYGx6rZIQfIPXvh0RV1iEgoLdQy4HeBRrXdGTPJS2dvy38soAcPzlasRRKGaSTihsCFfMNrs4yTJXW%2FKEHHQIzWHLdvsrLOj3%2FGS3MrogUnuUQgcj2Y0xBZ476auCII0ztgDwJ0ewRi%2Be0uetuZZWG%2FObOZrMjssIcLQtUFrP6whO2PGbNL1%2BqRintzuKdqH0LXsl6OjNI8fYL9R3KGLvr52puxEJAB1Mj8D34o9fELcklwZ4QxIDk6aEu4rZQXR3WGw6IzvAPv2kEFoL2Tez4i15IrKBERmrO5BYkTU%2FpZp4HX8xf7E2bFjJ%2BiRvAHL0HliBUKYfBJwvvMNDI4skGOqUBNk3gy0mz1FnKswonxK5O81ObUKtBqAhqyrIO6zYqvQMIOe7ZPQUrYoJYNj%2BLqAvHQJZBmm31bgYdjvNXHeScH0BYtlr5OqPgZMEfXmy5sghhlEq5lqgbYw2DDIkSwgDNRR9pXJp8hEk5gkpmC6q3H7tGyihlA4QTuIJkArZGB4rH5QJ7eMaNP6PqygkNkjXA2lOXKHrIhVIRtACdAKKO%2FbM%2FHyJU&X-Amz-Signature=85a4b0aeb4165c86392583fc090d33c3a834ba9974a94f838746c562ca364b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y25EZK2V%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP5WanXXgyGOTZTUQc%2B7KLS%2Fc2yIYjdv3CnVejjdduRAiEA3Kyc%2FKtgOg%2FZCot1PFmORMi82NtNGjLTABowwOFfuVcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiOv8%2FZ22XLJw50fyrcA44SdcdK5qqT8u6vb1sCYEiWTppAoDSRX8qcwaXxEBU8Wq8Qu5BhP7Gux5c35%2BjjLVDA7hbQYnQ9mTWewxB2Ykijr%2FQqRrLI5uJSYZZOwsCXhFhc6PGb1SKKaa7%2BiiMqPBmvuibC7w4vVCGGgLtYMnMVFWQku25DfU98LrGio7m1Fc4Gmezw4W3Ny8uioLx9fpAtcCGphLQZkDPpF3h76OCQrFsxOi7OOBmJyV8nS3m%2FFL33oeQNpbRQqNGV3oDV3zK3wMKYw2%2BozSR8FXPYDVsZZJsW8tv4wBt9RVgTkvc8KAAYGx6rZIQfIPXvh0RV1iEgoLdQy4HeBRrXdGTPJS2dvy38soAcPzlasRRKGaSTihsCFfMNrs4yTJXW%2FKEHHQIzWHLdvsrLOj3%2FGS3MrogUnuUQgcj2Y0xBZ476auCII0ztgDwJ0ewRi%2Be0uetuZZWG%2FObOZrMjssIcLQtUFrP6whO2PGbNL1%2BqRintzuKdqH0LXsl6OjNI8fYL9R3KGLvr52puxEJAB1Mj8D34o9fELcklwZ4QxIDk6aEu4rZQXR3WGw6IzvAPv2kEFoL2Tez4i15IrKBERmrO5BYkTU%2FpZp4HX8xf7E2bFjJ%2BiRvAHL0HliBUKYfBJwvvMNDI4skGOqUBNk3gy0mz1FnKswonxK5O81ObUKtBqAhqyrIO6zYqvQMIOe7ZPQUrYoJYNj%2BLqAvHQJZBmm31bgYdjvNXHeScH0BYtlr5OqPgZMEfXmy5sghhlEq5lqgbYw2DDIkSwgDNRR9pXJp8hEk5gkpmC6q3H7tGyihlA4QTuIJkArZGB4rH5QJ7eMaNP6PqygkNkjXA2lOXKHrIhVIRtACdAKKO%2FbM%2FHyJU&X-Amz-Signature=6e4d07929c60b419330d7c71f67c050380545a1c9a8e133e4995f05ddbffa6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y25EZK2V%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP5WanXXgyGOTZTUQc%2B7KLS%2Fc2yIYjdv3CnVejjdduRAiEA3Kyc%2FKtgOg%2FZCot1PFmORMi82NtNGjLTABowwOFfuVcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiOv8%2FZ22XLJw50fyrcA44SdcdK5qqT8u6vb1sCYEiWTppAoDSRX8qcwaXxEBU8Wq8Qu5BhP7Gux5c35%2BjjLVDA7hbQYnQ9mTWewxB2Ykijr%2FQqRrLI5uJSYZZOwsCXhFhc6PGb1SKKaa7%2BiiMqPBmvuibC7w4vVCGGgLtYMnMVFWQku25DfU98LrGio7m1Fc4Gmezw4W3Ny8uioLx9fpAtcCGphLQZkDPpF3h76OCQrFsxOi7OOBmJyV8nS3m%2FFL33oeQNpbRQqNGV3oDV3zK3wMKYw2%2BozSR8FXPYDVsZZJsW8tv4wBt9RVgTkvc8KAAYGx6rZIQfIPXvh0RV1iEgoLdQy4HeBRrXdGTPJS2dvy38soAcPzlasRRKGaSTihsCFfMNrs4yTJXW%2FKEHHQIzWHLdvsrLOj3%2FGS3MrogUnuUQgcj2Y0xBZ476auCII0ztgDwJ0ewRi%2Be0uetuZZWG%2FObOZrMjssIcLQtUFrP6whO2PGbNL1%2BqRintzuKdqH0LXsl6OjNI8fYL9R3KGLvr52puxEJAB1Mj8D34o9fELcklwZ4QxIDk6aEu4rZQXR3WGw6IzvAPv2kEFoL2Tez4i15IrKBERmrO5BYkTU%2FpZp4HX8xf7E2bFjJ%2BiRvAHL0HliBUKYfBJwvvMNDI4skGOqUBNk3gy0mz1FnKswonxK5O81ObUKtBqAhqyrIO6zYqvQMIOe7ZPQUrYoJYNj%2BLqAvHQJZBmm31bgYdjvNXHeScH0BYtlr5OqPgZMEfXmy5sghhlEq5lqgbYw2DDIkSwgDNRR9pXJp8hEk5gkpmC6q3H7tGyihlA4QTuIJkArZGB4rH5QJ7eMaNP6PqygkNkjXA2lOXKHrIhVIRtACdAKKO%2FbM%2FHyJU&X-Amz-Signature=3c34d5e24bd2d918dbd97635a9ad6d172a3adf60ac3de07169d79d7f5f70a596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y25EZK2V%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP5WanXXgyGOTZTUQc%2B7KLS%2Fc2yIYjdv3CnVejjdduRAiEA3Kyc%2FKtgOg%2FZCot1PFmORMi82NtNGjLTABowwOFfuVcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiOv8%2FZ22XLJw50fyrcA44SdcdK5qqT8u6vb1sCYEiWTppAoDSRX8qcwaXxEBU8Wq8Qu5BhP7Gux5c35%2BjjLVDA7hbQYnQ9mTWewxB2Ykijr%2FQqRrLI5uJSYZZOwsCXhFhc6PGb1SKKaa7%2BiiMqPBmvuibC7w4vVCGGgLtYMnMVFWQku25DfU98LrGio7m1Fc4Gmezw4W3Ny8uioLx9fpAtcCGphLQZkDPpF3h76OCQrFsxOi7OOBmJyV8nS3m%2FFL33oeQNpbRQqNGV3oDV3zK3wMKYw2%2BozSR8FXPYDVsZZJsW8tv4wBt9RVgTkvc8KAAYGx6rZIQfIPXvh0RV1iEgoLdQy4HeBRrXdGTPJS2dvy38soAcPzlasRRKGaSTihsCFfMNrs4yTJXW%2FKEHHQIzWHLdvsrLOj3%2FGS3MrogUnuUQgcj2Y0xBZ476auCII0ztgDwJ0ewRi%2Be0uetuZZWG%2FObOZrMjssIcLQtUFrP6whO2PGbNL1%2BqRintzuKdqH0LXsl6OjNI8fYL9R3KGLvr52puxEJAB1Mj8D34o9fELcklwZ4QxIDk6aEu4rZQXR3WGw6IzvAPv2kEFoL2Tez4i15IrKBERmrO5BYkTU%2FpZp4HX8xf7E2bFjJ%2BiRvAHL0HliBUKYfBJwvvMNDI4skGOqUBNk3gy0mz1FnKswonxK5O81ObUKtBqAhqyrIO6zYqvQMIOe7ZPQUrYoJYNj%2BLqAvHQJZBmm31bgYdjvNXHeScH0BYtlr5OqPgZMEfXmy5sghhlEq5lqgbYw2DDIkSwgDNRR9pXJp8hEk5gkpmC6q3H7tGyihlA4QTuIJkArZGB4rH5QJ7eMaNP6PqygkNkjXA2lOXKHrIhVIRtACdAKKO%2FbM%2FHyJU&X-Amz-Signature=08a667e07871c994da228e285bf94e88bea49ef951d9369ae7f79dd18ff72e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y25EZK2V%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP5WanXXgyGOTZTUQc%2B7KLS%2Fc2yIYjdv3CnVejjdduRAiEA3Kyc%2FKtgOg%2FZCot1PFmORMi82NtNGjLTABowwOFfuVcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiOv8%2FZ22XLJw50fyrcA44SdcdK5qqT8u6vb1sCYEiWTppAoDSRX8qcwaXxEBU8Wq8Qu5BhP7Gux5c35%2BjjLVDA7hbQYnQ9mTWewxB2Ykijr%2FQqRrLI5uJSYZZOwsCXhFhc6PGb1SKKaa7%2BiiMqPBmvuibC7w4vVCGGgLtYMnMVFWQku25DfU98LrGio7m1Fc4Gmezw4W3Ny8uioLx9fpAtcCGphLQZkDPpF3h76OCQrFsxOi7OOBmJyV8nS3m%2FFL33oeQNpbRQqNGV3oDV3zK3wMKYw2%2BozSR8FXPYDVsZZJsW8tv4wBt9RVgTkvc8KAAYGx6rZIQfIPXvh0RV1iEgoLdQy4HeBRrXdGTPJS2dvy38soAcPzlasRRKGaSTihsCFfMNrs4yTJXW%2FKEHHQIzWHLdvsrLOj3%2FGS3MrogUnuUQgcj2Y0xBZ476auCII0ztgDwJ0ewRi%2Be0uetuZZWG%2FObOZrMjssIcLQtUFrP6whO2PGbNL1%2BqRintzuKdqH0LXsl6OjNI8fYL9R3KGLvr52puxEJAB1Mj8D34o9fELcklwZ4QxIDk6aEu4rZQXR3WGw6IzvAPv2kEFoL2Tez4i15IrKBERmrO5BYkTU%2FpZp4HX8xf7E2bFjJ%2BiRvAHL0HliBUKYfBJwvvMNDI4skGOqUBNk3gy0mz1FnKswonxK5O81ObUKtBqAhqyrIO6zYqvQMIOe7ZPQUrYoJYNj%2BLqAvHQJZBmm31bgYdjvNXHeScH0BYtlr5OqPgZMEfXmy5sghhlEq5lqgbYw2DDIkSwgDNRR9pXJp8hEk5gkpmC6q3H7tGyihlA4QTuIJkArZGB4rH5QJ7eMaNP6PqygkNkjXA2lOXKHrIhVIRtACdAKKO%2FbM%2FHyJU&X-Amz-Signature=51c5b68ad425d18e38721549e9112c026b7ff44abfd2edd80b98acd23186212d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y25EZK2V%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP5WanXXgyGOTZTUQc%2B7KLS%2Fc2yIYjdv3CnVejjdduRAiEA3Kyc%2FKtgOg%2FZCot1PFmORMi82NtNGjLTABowwOFfuVcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiOv8%2FZ22XLJw50fyrcA44SdcdK5qqT8u6vb1sCYEiWTppAoDSRX8qcwaXxEBU8Wq8Qu5BhP7Gux5c35%2BjjLVDA7hbQYnQ9mTWewxB2Ykijr%2FQqRrLI5uJSYZZOwsCXhFhc6PGb1SKKaa7%2BiiMqPBmvuibC7w4vVCGGgLtYMnMVFWQku25DfU98LrGio7m1Fc4Gmezw4W3Ny8uioLx9fpAtcCGphLQZkDPpF3h76OCQrFsxOi7OOBmJyV8nS3m%2FFL33oeQNpbRQqNGV3oDV3zK3wMKYw2%2BozSR8FXPYDVsZZJsW8tv4wBt9RVgTkvc8KAAYGx6rZIQfIPXvh0RV1iEgoLdQy4HeBRrXdGTPJS2dvy38soAcPzlasRRKGaSTihsCFfMNrs4yTJXW%2FKEHHQIzWHLdvsrLOj3%2FGS3MrogUnuUQgcj2Y0xBZ476auCII0ztgDwJ0ewRi%2Be0uetuZZWG%2FObOZrMjssIcLQtUFrP6whO2PGbNL1%2BqRintzuKdqH0LXsl6OjNI8fYL9R3KGLvr52puxEJAB1Mj8D34o9fELcklwZ4QxIDk6aEu4rZQXR3WGw6IzvAPv2kEFoL2Tez4i15IrKBERmrO5BYkTU%2FpZp4HX8xf7E2bFjJ%2BiRvAHL0HliBUKYfBJwvvMNDI4skGOqUBNk3gy0mz1FnKswonxK5O81ObUKtBqAhqyrIO6zYqvQMIOe7ZPQUrYoJYNj%2BLqAvHQJZBmm31bgYdjvNXHeScH0BYtlr5OqPgZMEfXmy5sghhlEq5lqgbYw2DDIkSwgDNRR9pXJp8hEk5gkpmC6q3H7tGyihlA4QTuIJkArZGB4rH5QJ7eMaNP6PqygkNkjXA2lOXKHrIhVIRtACdAKKO%2FbM%2FHyJU&X-Amz-Signature=9697e8b66e8a4fd3833d141df9ae475be8cffc57977d9e448fb1cc6b7e575dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y25EZK2V%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP5WanXXgyGOTZTUQc%2B7KLS%2Fc2yIYjdv3CnVejjdduRAiEA3Kyc%2FKtgOg%2FZCot1PFmORMi82NtNGjLTABowwOFfuVcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiOv8%2FZ22XLJw50fyrcA44SdcdK5qqT8u6vb1sCYEiWTppAoDSRX8qcwaXxEBU8Wq8Qu5BhP7Gux5c35%2BjjLVDA7hbQYnQ9mTWewxB2Ykijr%2FQqRrLI5uJSYZZOwsCXhFhc6PGb1SKKaa7%2BiiMqPBmvuibC7w4vVCGGgLtYMnMVFWQku25DfU98LrGio7m1Fc4Gmezw4W3Ny8uioLx9fpAtcCGphLQZkDPpF3h76OCQrFsxOi7OOBmJyV8nS3m%2FFL33oeQNpbRQqNGV3oDV3zK3wMKYw2%2BozSR8FXPYDVsZZJsW8tv4wBt9RVgTkvc8KAAYGx6rZIQfIPXvh0RV1iEgoLdQy4HeBRrXdGTPJS2dvy38soAcPzlasRRKGaSTihsCFfMNrs4yTJXW%2FKEHHQIzWHLdvsrLOj3%2FGS3MrogUnuUQgcj2Y0xBZ476auCII0ztgDwJ0ewRi%2Be0uetuZZWG%2FObOZrMjssIcLQtUFrP6whO2PGbNL1%2BqRintzuKdqH0LXsl6OjNI8fYL9R3KGLvr52puxEJAB1Mj8D34o9fELcklwZ4QxIDk6aEu4rZQXR3WGw6IzvAPv2kEFoL2Tez4i15IrKBERmrO5BYkTU%2FpZp4HX8xf7E2bFjJ%2BiRvAHL0HliBUKYfBJwvvMNDI4skGOqUBNk3gy0mz1FnKswonxK5O81ObUKtBqAhqyrIO6zYqvQMIOe7ZPQUrYoJYNj%2BLqAvHQJZBmm31bgYdjvNXHeScH0BYtlr5OqPgZMEfXmy5sghhlEq5lqgbYw2DDIkSwgDNRR9pXJp8hEk5gkpmC6q3H7tGyihlA4QTuIJkArZGB4rH5QJ7eMaNP6PqygkNkjXA2lOXKHrIhVIRtACdAKKO%2FbM%2FHyJU&X-Amz-Signature=4bfc4ed709e6c825dd7915512e6edebeb65cf3e638d734ebbc84f84072b27a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
