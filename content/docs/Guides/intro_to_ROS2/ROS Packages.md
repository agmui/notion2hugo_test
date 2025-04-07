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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3GC66C%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUEzfIXAnxq0I8Ia5Th6%2BdMuavxbqOSpTv1idlCzbGQIhAK0xikAAxdDo4fIG9gqQG0DaSN5hf%2Fv%2BGvEcRKCIZwAFKv8DCGcQABoMNjM3NDIzMTgzODA1IgyCuBGjGyxQn4ZEFYkq3AN6ydv5ovs2qZJXbYuFKmLwLgSKL8Lia2W7aSyDt2TzD%2FtY3XTr6E5j7%2Bxt6qdwEtdz2C9cuIc6y8EwHDvUAcQPOV36RZSIObY%2FegteZBdeSrcQGBGVz44cQmjmXqN3QZP1HzL9nwb%2FRtw%2BAjvj96X7B6SFaBHDVIUlbrhx9h3SNIt9R3iX3Af1Kp3Ch%2Fd37hHeUydvm%2BfEe4RyBda7pRwl6Dvzru7aLZE1SdkoomeAYdJoxfKdAc8swjGPVs9ZcfRjIdmTfdkUo9rIEFRKRW1IL4okTj3FnVNLT5clddCzJeB07KJbtE3JebenZHu1qXy2PzsanflorthmESeXd%2F47OVL%2FgtQdsSCSU%2FBOFUj30UkCHZNEEpqrBu7kLGYJ68d5RIcBZ6KdHSiW6ulJWu9CDxjzWeNYvCbEmTibaxF097dXF7qYgTJrnxYoA%2FbVlYFo6aiL8TiElzqqbtHiy1N78sbhKTsPItjTUvGnE91ppHpu57UVEyTR13d%2BJ8n0nxS42MyLZjiZhyDxdqPlBU5zKsBsk%2FcmyfkO4odJzHNZUcHUYDJ36E7vJjv5Mi12Pr2MPI0m%2B4E8jIFVl7ukMzB9BVBYlh7w%2FoZzjEK5X5Y9ACKYzHQsNgcCQ3ZBVTDfn9G%2FBjqkAb69JnUOQkoxQji6sicao6%2BU%2BGlemVzGwQYQRp4PBf4txSfdaN8qGCcsfqdq3i2kn4ifSojCu0TDZF11u%2BMj6lbn7paVHR1OSW%2BbT%2B1jRv23nuW%2BkA0Nz2OD8JR6jZdtM8dp8YpAqitc5UPJMaMYpIfg%2BQuB5U2ai7H5uYbz1531Fec6GxpN6BbIM8%2BesyZfJTQ0krz7abezLAnbfqG9hT%2FLz0MZ&X-Amz-Signature=0eda24f6d40f5ee340398af83c483f5906cca64756a572b09ca66e16f28db73d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3GC66C%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUEzfIXAnxq0I8Ia5Th6%2BdMuavxbqOSpTv1idlCzbGQIhAK0xikAAxdDo4fIG9gqQG0DaSN5hf%2Fv%2BGvEcRKCIZwAFKv8DCGcQABoMNjM3NDIzMTgzODA1IgyCuBGjGyxQn4ZEFYkq3AN6ydv5ovs2qZJXbYuFKmLwLgSKL8Lia2W7aSyDt2TzD%2FtY3XTr6E5j7%2Bxt6qdwEtdz2C9cuIc6y8EwHDvUAcQPOV36RZSIObY%2FegteZBdeSrcQGBGVz44cQmjmXqN3QZP1HzL9nwb%2FRtw%2BAjvj96X7B6SFaBHDVIUlbrhx9h3SNIt9R3iX3Af1Kp3Ch%2Fd37hHeUydvm%2BfEe4RyBda7pRwl6Dvzru7aLZE1SdkoomeAYdJoxfKdAc8swjGPVs9ZcfRjIdmTfdkUo9rIEFRKRW1IL4okTj3FnVNLT5clddCzJeB07KJbtE3JebenZHu1qXy2PzsanflorthmESeXd%2F47OVL%2FgtQdsSCSU%2FBOFUj30UkCHZNEEpqrBu7kLGYJ68d5RIcBZ6KdHSiW6ulJWu9CDxjzWeNYvCbEmTibaxF097dXF7qYgTJrnxYoA%2FbVlYFo6aiL8TiElzqqbtHiy1N78sbhKTsPItjTUvGnE91ppHpu57UVEyTR13d%2BJ8n0nxS42MyLZjiZhyDxdqPlBU5zKsBsk%2FcmyfkO4odJzHNZUcHUYDJ36E7vJjv5Mi12Pr2MPI0m%2B4E8jIFVl7ukMzB9BVBYlh7w%2FoZzjEK5X5Y9ACKYzHQsNgcCQ3ZBVTDfn9G%2FBjqkAb69JnUOQkoxQji6sicao6%2BU%2BGlemVzGwQYQRp4PBf4txSfdaN8qGCcsfqdq3i2kn4ifSojCu0TDZF11u%2BMj6lbn7paVHR1OSW%2BbT%2B1jRv23nuW%2BkA0Nz2OD8JR6jZdtM8dp8YpAqitc5UPJMaMYpIfg%2BQuB5U2ai7H5uYbz1531Fec6GxpN6BbIM8%2BesyZfJTQ0krz7abezLAnbfqG9hT%2FLz0MZ&X-Amz-Signature=59e5eef08ef85a60acb31b5de8c9b367c85f7b04262359b5531ff6d02fbcc899&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3GC66C%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUEzfIXAnxq0I8Ia5Th6%2BdMuavxbqOSpTv1idlCzbGQIhAK0xikAAxdDo4fIG9gqQG0DaSN5hf%2Fv%2BGvEcRKCIZwAFKv8DCGcQABoMNjM3NDIzMTgzODA1IgyCuBGjGyxQn4ZEFYkq3AN6ydv5ovs2qZJXbYuFKmLwLgSKL8Lia2W7aSyDt2TzD%2FtY3XTr6E5j7%2Bxt6qdwEtdz2C9cuIc6y8EwHDvUAcQPOV36RZSIObY%2FegteZBdeSrcQGBGVz44cQmjmXqN3QZP1HzL9nwb%2FRtw%2BAjvj96X7B6SFaBHDVIUlbrhx9h3SNIt9R3iX3Af1Kp3Ch%2Fd37hHeUydvm%2BfEe4RyBda7pRwl6Dvzru7aLZE1SdkoomeAYdJoxfKdAc8swjGPVs9ZcfRjIdmTfdkUo9rIEFRKRW1IL4okTj3FnVNLT5clddCzJeB07KJbtE3JebenZHu1qXy2PzsanflorthmESeXd%2F47OVL%2FgtQdsSCSU%2FBOFUj30UkCHZNEEpqrBu7kLGYJ68d5RIcBZ6KdHSiW6ulJWu9CDxjzWeNYvCbEmTibaxF097dXF7qYgTJrnxYoA%2FbVlYFo6aiL8TiElzqqbtHiy1N78sbhKTsPItjTUvGnE91ppHpu57UVEyTR13d%2BJ8n0nxS42MyLZjiZhyDxdqPlBU5zKsBsk%2FcmyfkO4odJzHNZUcHUYDJ36E7vJjv5Mi12Pr2MPI0m%2B4E8jIFVl7ukMzB9BVBYlh7w%2FoZzjEK5X5Y9ACKYzHQsNgcCQ3ZBVTDfn9G%2FBjqkAb69JnUOQkoxQji6sicao6%2BU%2BGlemVzGwQYQRp4PBf4txSfdaN8qGCcsfqdq3i2kn4ifSojCu0TDZF11u%2BMj6lbn7paVHR1OSW%2BbT%2B1jRv23nuW%2BkA0Nz2OD8JR6jZdtM8dp8YpAqitc5UPJMaMYpIfg%2BQuB5U2ai7H5uYbz1531Fec6GxpN6BbIM8%2BesyZfJTQ0krz7abezLAnbfqG9hT%2FLz0MZ&X-Amz-Signature=a8e62d727fb8d37ccc41553823a2b16df4b3940ac1c1608adbdf3d1a1c6133e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3GC66C%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUEzfIXAnxq0I8Ia5Th6%2BdMuavxbqOSpTv1idlCzbGQIhAK0xikAAxdDo4fIG9gqQG0DaSN5hf%2Fv%2BGvEcRKCIZwAFKv8DCGcQABoMNjM3NDIzMTgzODA1IgyCuBGjGyxQn4ZEFYkq3AN6ydv5ovs2qZJXbYuFKmLwLgSKL8Lia2W7aSyDt2TzD%2FtY3XTr6E5j7%2Bxt6qdwEtdz2C9cuIc6y8EwHDvUAcQPOV36RZSIObY%2FegteZBdeSrcQGBGVz44cQmjmXqN3QZP1HzL9nwb%2FRtw%2BAjvj96X7B6SFaBHDVIUlbrhx9h3SNIt9R3iX3Af1Kp3Ch%2Fd37hHeUydvm%2BfEe4RyBda7pRwl6Dvzru7aLZE1SdkoomeAYdJoxfKdAc8swjGPVs9ZcfRjIdmTfdkUo9rIEFRKRW1IL4okTj3FnVNLT5clddCzJeB07KJbtE3JebenZHu1qXy2PzsanflorthmESeXd%2F47OVL%2FgtQdsSCSU%2FBOFUj30UkCHZNEEpqrBu7kLGYJ68d5RIcBZ6KdHSiW6ulJWu9CDxjzWeNYvCbEmTibaxF097dXF7qYgTJrnxYoA%2FbVlYFo6aiL8TiElzqqbtHiy1N78sbhKTsPItjTUvGnE91ppHpu57UVEyTR13d%2BJ8n0nxS42MyLZjiZhyDxdqPlBU5zKsBsk%2FcmyfkO4odJzHNZUcHUYDJ36E7vJjv5Mi12Pr2MPI0m%2B4E8jIFVl7ukMzB9BVBYlh7w%2FoZzjEK5X5Y9ACKYzHQsNgcCQ3ZBVTDfn9G%2FBjqkAb69JnUOQkoxQji6sicao6%2BU%2BGlemVzGwQYQRp4PBf4txSfdaN8qGCcsfqdq3i2kn4ifSojCu0TDZF11u%2BMj6lbn7paVHR1OSW%2BbT%2B1jRv23nuW%2BkA0Nz2OD8JR6jZdtM8dp8YpAqitc5UPJMaMYpIfg%2BQuB5U2ai7H5uYbz1531Fec6GxpN6BbIM8%2BesyZfJTQ0krz7abezLAnbfqG9hT%2FLz0MZ&X-Amz-Signature=00a85c00c655086a89cc1a6884ec44969e9abd635a68c7ca949a035113132afa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3GC66C%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUEzfIXAnxq0I8Ia5Th6%2BdMuavxbqOSpTv1idlCzbGQIhAK0xikAAxdDo4fIG9gqQG0DaSN5hf%2Fv%2BGvEcRKCIZwAFKv8DCGcQABoMNjM3NDIzMTgzODA1IgyCuBGjGyxQn4ZEFYkq3AN6ydv5ovs2qZJXbYuFKmLwLgSKL8Lia2W7aSyDt2TzD%2FtY3XTr6E5j7%2Bxt6qdwEtdz2C9cuIc6y8EwHDvUAcQPOV36RZSIObY%2FegteZBdeSrcQGBGVz44cQmjmXqN3QZP1HzL9nwb%2FRtw%2BAjvj96X7B6SFaBHDVIUlbrhx9h3SNIt9R3iX3Af1Kp3Ch%2Fd37hHeUydvm%2BfEe4RyBda7pRwl6Dvzru7aLZE1SdkoomeAYdJoxfKdAc8swjGPVs9ZcfRjIdmTfdkUo9rIEFRKRW1IL4okTj3FnVNLT5clddCzJeB07KJbtE3JebenZHu1qXy2PzsanflorthmESeXd%2F47OVL%2FgtQdsSCSU%2FBOFUj30UkCHZNEEpqrBu7kLGYJ68d5RIcBZ6KdHSiW6ulJWu9CDxjzWeNYvCbEmTibaxF097dXF7qYgTJrnxYoA%2FbVlYFo6aiL8TiElzqqbtHiy1N78sbhKTsPItjTUvGnE91ppHpu57UVEyTR13d%2BJ8n0nxS42MyLZjiZhyDxdqPlBU5zKsBsk%2FcmyfkO4odJzHNZUcHUYDJ36E7vJjv5Mi12Pr2MPI0m%2B4E8jIFVl7ukMzB9BVBYlh7w%2FoZzjEK5X5Y9ACKYzHQsNgcCQ3ZBVTDfn9G%2FBjqkAb69JnUOQkoxQji6sicao6%2BU%2BGlemVzGwQYQRp4PBf4txSfdaN8qGCcsfqdq3i2kn4ifSojCu0TDZF11u%2BMj6lbn7paVHR1OSW%2BbT%2B1jRv23nuW%2BkA0Nz2OD8JR6jZdtM8dp8YpAqitc5UPJMaMYpIfg%2BQuB5U2ai7H5uYbz1531Fec6GxpN6BbIM8%2BesyZfJTQ0krz7abezLAnbfqG9hT%2FLz0MZ&X-Amz-Signature=27816f4f6c28630aa3eaff285ebce270dbe6bb9904cc95b678e4d860a825ff84&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3GC66C%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUEzfIXAnxq0I8Ia5Th6%2BdMuavxbqOSpTv1idlCzbGQIhAK0xikAAxdDo4fIG9gqQG0DaSN5hf%2Fv%2BGvEcRKCIZwAFKv8DCGcQABoMNjM3NDIzMTgzODA1IgyCuBGjGyxQn4ZEFYkq3AN6ydv5ovs2qZJXbYuFKmLwLgSKL8Lia2W7aSyDt2TzD%2FtY3XTr6E5j7%2Bxt6qdwEtdz2C9cuIc6y8EwHDvUAcQPOV36RZSIObY%2FegteZBdeSrcQGBGVz44cQmjmXqN3QZP1HzL9nwb%2FRtw%2BAjvj96X7B6SFaBHDVIUlbrhx9h3SNIt9R3iX3Af1Kp3Ch%2Fd37hHeUydvm%2BfEe4RyBda7pRwl6Dvzru7aLZE1SdkoomeAYdJoxfKdAc8swjGPVs9ZcfRjIdmTfdkUo9rIEFRKRW1IL4okTj3FnVNLT5clddCzJeB07KJbtE3JebenZHu1qXy2PzsanflorthmESeXd%2F47OVL%2FgtQdsSCSU%2FBOFUj30UkCHZNEEpqrBu7kLGYJ68d5RIcBZ6KdHSiW6ulJWu9CDxjzWeNYvCbEmTibaxF097dXF7qYgTJrnxYoA%2FbVlYFo6aiL8TiElzqqbtHiy1N78sbhKTsPItjTUvGnE91ppHpu57UVEyTR13d%2BJ8n0nxS42MyLZjiZhyDxdqPlBU5zKsBsk%2FcmyfkO4odJzHNZUcHUYDJ36E7vJjv5Mi12Pr2MPI0m%2B4E8jIFVl7ukMzB9BVBYlh7w%2FoZzjEK5X5Y9ACKYzHQsNgcCQ3ZBVTDfn9G%2FBjqkAb69JnUOQkoxQji6sicao6%2BU%2BGlemVzGwQYQRp4PBf4txSfdaN8qGCcsfqdq3i2kn4ifSojCu0TDZF11u%2BMj6lbn7paVHR1OSW%2BbT%2B1jRv23nuW%2BkA0Nz2OD8JR6jZdtM8dp8YpAqitc5UPJMaMYpIfg%2BQuB5U2ai7H5uYbz1531Fec6GxpN6BbIM8%2BesyZfJTQ0krz7abezLAnbfqG9hT%2FLz0MZ&X-Amz-Signature=8117f847f98ea1a18588f076cd34e89555f3ce8136b2aff738773d98af91889b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3GC66C%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfUEzfIXAnxq0I8Ia5Th6%2BdMuavxbqOSpTv1idlCzbGQIhAK0xikAAxdDo4fIG9gqQG0DaSN5hf%2Fv%2BGvEcRKCIZwAFKv8DCGcQABoMNjM3NDIzMTgzODA1IgyCuBGjGyxQn4ZEFYkq3AN6ydv5ovs2qZJXbYuFKmLwLgSKL8Lia2W7aSyDt2TzD%2FtY3XTr6E5j7%2Bxt6qdwEtdz2C9cuIc6y8EwHDvUAcQPOV36RZSIObY%2FegteZBdeSrcQGBGVz44cQmjmXqN3QZP1HzL9nwb%2FRtw%2BAjvj96X7B6SFaBHDVIUlbrhx9h3SNIt9R3iX3Af1Kp3Ch%2Fd37hHeUydvm%2BfEe4RyBda7pRwl6Dvzru7aLZE1SdkoomeAYdJoxfKdAc8swjGPVs9ZcfRjIdmTfdkUo9rIEFRKRW1IL4okTj3FnVNLT5clddCzJeB07KJbtE3JebenZHu1qXy2PzsanflorthmESeXd%2F47OVL%2FgtQdsSCSU%2FBOFUj30UkCHZNEEpqrBu7kLGYJ68d5RIcBZ6KdHSiW6ulJWu9CDxjzWeNYvCbEmTibaxF097dXF7qYgTJrnxYoA%2FbVlYFo6aiL8TiElzqqbtHiy1N78sbhKTsPItjTUvGnE91ppHpu57UVEyTR13d%2BJ8n0nxS42MyLZjiZhyDxdqPlBU5zKsBsk%2FcmyfkO4odJzHNZUcHUYDJ36E7vJjv5Mi12Pr2MPI0m%2B4E8jIFVl7ukMzB9BVBYlh7w%2FoZzjEK5X5Y9ACKYzHQsNgcCQ3ZBVTDfn9G%2FBjqkAb69JnUOQkoxQji6sicao6%2BU%2BGlemVzGwQYQRp4PBf4txSfdaN8qGCcsfqdq3i2kn4ifSojCu0TDZF11u%2BMj6lbn7paVHR1OSW%2BbT%2B1jRv23nuW%2BkA0Nz2OD8JR6jZdtM8dp8YpAqitc5UPJMaMYpIfg%2BQuB5U2ai7H5uYbz1531Fec6GxpN6BbIM8%2BesyZfJTQ0krz7abezLAnbfqG9hT%2FLz0MZ&X-Amz-Signature=a92468bbb13c0a7d87fac9caa373c184f8dafa9748d46f742b7c8e8181454dee&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
