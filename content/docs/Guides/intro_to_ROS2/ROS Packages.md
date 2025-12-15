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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZ5YMJI%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBxabKXoBpAKEzse%2F6hlEsW6mbCWPTQpudpxL6EWOcWwAiBohcL9XtRWBldYpJ2lJ88qj%2BQeGyF%2Fx3m3bwp89n4ryyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQ1T93eKZK3qh%2B8BgKtwDnPbIIlrRaGUq3WRsWaGYLGFuUjGejfpLRwlZZF5FRG8YxOEmIKDmdYBgz8RnptomouaVgtTqP3Wvr9l%2F2P0OMH6iJwkM0zi3Bbng4odVeGqWB1znCGbvChQ9IdTpxaOA4RHtjvLL44uBuxLpUPQ3SNwa4NatCNtpcPJN20hwknywFFAuKKFYDxi8BqzQQZvjM3ZpiKBk6kTHkbO1UN24U%2BAqlp2Nvhci%2FVxA45rT%2B4Fsxj%2F9QSOywLGKe2XDCDuva%2BTZGIQz3oTRWf680Hm%2Fg9T1wQkKDyXp0e10vBAfmxxOet5ZRZKhP%2BoNzsK9L%2FVETXIuIOKiqwdiwcdJf1q5lXF8yBJPljBfw5vg6n04PDGfJ9ATHWaZzK%2F2X5onkpTX0hLQa78QaZdIKWq%2FHh0zUYGwXB1XaVXpcHDU9%2B9tsBU0Pvgqr1iQKRGkbGxslaS8dH4WyZSJHDt0%2B%2FkXP3WcX%2B1I0qkl3%2BWutnDcaqzkxkXRxI6D2HEwl%2FIaJmQrTviz5ydlq9AT49253l7qyvD1u8aR9W2eQ20ov4sKA6foYslisksksRR6WzD6cXPnPOvdOjQILe6FYb8Uf4o1xgohT1Sol5g%2FEIR8PjDVhXxuOWBzgCCg9GEy12uI%2Bk0wnNv8yQY6pgEAfx5qkzeDV%2FIux9jf5BUpVnkuxN7OGEwfgHzenFudV4kOOLkTTDh4hVcWxQqhDZDHcuQmkhaTi8BsuazV07elW6DNy234lTiILSg%2BZEhpSIak4b0P%2FOQPdlBOXADADKHsvy4SN6kX8uUixiSyFvXXCIP1oATk74lfv6HVbfumfJYqTci5RTBzk7vV2L1fmPKDoI1elZ28a0a4mKvfVtM8t3he%2Fb5q&X-Amz-Signature=685d6ac905ab2743f2ab7e855eb368a13a2ea37890ae39dbe48e6c1cee0da202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZ5YMJI%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBxabKXoBpAKEzse%2F6hlEsW6mbCWPTQpudpxL6EWOcWwAiBohcL9XtRWBldYpJ2lJ88qj%2BQeGyF%2Fx3m3bwp89n4ryyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQ1T93eKZK3qh%2B8BgKtwDnPbIIlrRaGUq3WRsWaGYLGFuUjGejfpLRwlZZF5FRG8YxOEmIKDmdYBgz8RnptomouaVgtTqP3Wvr9l%2F2P0OMH6iJwkM0zi3Bbng4odVeGqWB1znCGbvChQ9IdTpxaOA4RHtjvLL44uBuxLpUPQ3SNwa4NatCNtpcPJN20hwknywFFAuKKFYDxi8BqzQQZvjM3ZpiKBk6kTHkbO1UN24U%2BAqlp2Nvhci%2FVxA45rT%2B4Fsxj%2F9QSOywLGKe2XDCDuva%2BTZGIQz3oTRWf680Hm%2Fg9T1wQkKDyXp0e10vBAfmxxOet5ZRZKhP%2BoNzsK9L%2FVETXIuIOKiqwdiwcdJf1q5lXF8yBJPljBfw5vg6n04PDGfJ9ATHWaZzK%2F2X5onkpTX0hLQa78QaZdIKWq%2FHh0zUYGwXB1XaVXpcHDU9%2B9tsBU0Pvgqr1iQKRGkbGxslaS8dH4WyZSJHDt0%2B%2FkXP3WcX%2B1I0qkl3%2BWutnDcaqzkxkXRxI6D2HEwl%2FIaJmQrTviz5ydlq9AT49253l7qyvD1u8aR9W2eQ20ov4sKA6foYslisksksRR6WzD6cXPnPOvdOjQILe6FYb8Uf4o1xgohT1Sol5g%2FEIR8PjDVhXxuOWBzgCCg9GEy12uI%2Bk0wnNv8yQY6pgEAfx5qkzeDV%2FIux9jf5BUpVnkuxN7OGEwfgHzenFudV4kOOLkTTDh4hVcWxQqhDZDHcuQmkhaTi8BsuazV07elW6DNy234lTiILSg%2BZEhpSIak4b0P%2FOQPdlBOXADADKHsvy4SN6kX8uUixiSyFvXXCIP1oATk74lfv6HVbfumfJYqTci5RTBzk7vV2L1fmPKDoI1elZ28a0a4mKvfVtM8t3he%2Fb5q&X-Amz-Signature=9beeb4a70de1ee9a31c382ba6bc8830ac51fdcf7d58a6282c89bb7d4a72261d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZ5YMJI%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBxabKXoBpAKEzse%2F6hlEsW6mbCWPTQpudpxL6EWOcWwAiBohcL9XtRWBldYpJ2lJ88qj%2BQeGyF%2Fx3m3bwp89n4ryyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQ1T93eKZK3qh%2B8BgKtwDnPbIIlrRaGUq3WRsWaGYLGFuUjGejfpLRwlZZF5FRG8YxOEmIKDmdYBgz8RnptomouaVgtTqP3Wvr9l%2F2P0OMH6iJwkM0zi3Bbng4odVeGqWB1znCGbvChQ9IdTpxaOA4RHtjvLL44uBuxLpUPQ3SNwa4NatCNtpcPJN20hwknywFFAuKKFYDxi8BqzQQZvjM3ZpiKBk6kTHkbO1UN24U%2BAqlp2Nvhci%2FVxA45rT%2B4Fsxj%2F9QSOywLGKe2XDCDuva%2BTZGIQz3oTRWf680Hm%2Fg9T1wQkKDyXp0e10vBAfmxxOet5ZRZKhP%2BoNzsK9L%2FVETXIuIOKiqwdiwcdJf1q5lXF8yBJPljBfw5vg6n04PDGfJ9ATHWaZzK%2F2X5onkpTX0hLQa78QaZdIKWq%2FHh0zUYGwXB1XaVXpcHDU9%2B9tsBU0Pvgqr1iQKRGkbGxslaS8dH4WyZSJHDt0%2B%2FkXP3WcX%2B1I0qkl3%2BWutnDcaqzkxkXRxI6D2HEwl%2FIaJmQrTviz5ydlq9AT49253l7qyvD1u8aR9W2eQ20ov4sKA6foYslisksksRR6WzD6cXPnPOvdOjQILe6FYb8Uf4o1xgohT1Sol5g%2FEIR8PjDVhXxuOWBzgCCg9GEy12uI%2Bk0wnNv8yQY6pgEAfx5qkzeDV%2FIux9jf5BUpVnkuxN7OGEwfgHzenFudV4kOOLkTTDh4hVcWxQqhDZDHcuQmkhaTi8BsuazV07elW6DNy234lTiILSg%2BZEhpSIak4b0P%2FOQPdlBOXADADKHsvy4SN6kX8uUixiSyFvXXCIP1oATk74lfv6HVbfumfJYqTci5RTBzk7vV2L1fmPKDoI1elZ28a0a4mKvfVtM8t3he%2Fb5q&X-Amz-Signature=882391d42d379d37fd69801b1000224c9f3785c25317d5971f92b1d27202197e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZ5YMJI%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBxabKXoBpAKEzse%2F6hlEsW6mbCWPTQpudpxL6EWOcWwAiBohcL9XtRWBldYpJ2lJ88qj%2BQeGyF%2Fx3m3bwp89n4ryyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQ1T93eKZK3qh%2B8BgKtwDnPbIIlrRaGUq3WRsWaGYLGFuUjGejfpLRwlZZF5FRG8YxOEmIKDmdYBgz8RnptomouaVgtTqP3Wvr9l%2F2P0OMH6iJwkM0zi3Bbng4odVeGqWB1znCGbvChQ9IdTpxaOA4RHtjvLL44uBuxLpUPQ3SNwa4NatCNtpcPJN20hwknywFFAuKKFYDxi8BqzQQZvjM3ZpiKBk6kTHkbO1UN24U%2BAqlp2Nvhci%2FVxA45rT%2B4Fsxj%2F9QSOywLGKe2XDCDuva%2BTZGIQz3oTRWf680Hm%2Fg9T1wQkKDyXp0e10vBAfmxxOet5ZRZKhP%2BoNzsK9L%2FVETXIuIOKiqwdiwcdJf1q5lXF8yBJPljBfw5vg6n04PDGfJ9ATHWaZzK%2F2X5onkpTX0hLQa78QaZdIKWq%2FHh0zUYGwXB1XaVXpcHDU9%2B9tsBU0Pvgqr1iQKRGkbGxslaS8dH4WyZSJHDt0%2B%2FkXP3WcX%2B1I0qkl3%2BWutnDcaqzkxkXRxI6D2HEwl%2FIaJmQrTviz5ydlq9AT49253l7qyvD1u8aR9W2eQ20ov4sKA6foYslisksksRR6WzD6cXPnPOvdOjQILe6FYb8Uf4o1xgohT1Sol5g%2FEIR8PjDVhXxuOWBzgCCg9GEy12uI%2Bk0wnNv8yQY6pgEAfx5qkzeDV%2FIux9jf5BUpVnkuxN7OGEwfgHzenFudV4kOOLkTTDh4hVcWxQqhDZDHcuQmkhaTi8BsuazV07elW6DNy234lTiILSg%2BZEhpSIak4b0P%2FOQPdlBOXADADKHsvy4SN6kX8uUixiSyFvXXCIP1oATk74lfv6HVbfumfJYqTci5RTBzk7vV2L1fmPKDoI1elZ28a0a4mKvfVtM8t3he%2Fb5q&X-Amz-Signature=9078bc7ec8175a246a93eed243d8e19127225400f884b044a42c8585954633cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZ5YMJI%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBxabKXoBpAKEzse%2F6hlEsW6mbCWPTQpudpxL6EWOcWwAiBohcL9XtRWBldYpJ2lJ88qj%2BQeGyF%2Fx3m3bwp89n4ryyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQ1T93eKZK3qh%2B8BgKtwDnPbIIlrRaGUq3WRsWaGYLGFuUjGejfpLRwlZZF5FRG8YxOEmIKDmdYBgz8RnptomouaVgtTqP3Wvr9l%2F2P0OMH6iJwkM0zi3Bbng4odVeGqWB1znCGbvChQ9IdTpxaOA4RHtjvLL44uBuxLpUPQ3SNwa4NatCNtpcPJN20hwknywFFAuKKFYDxi8BqzQQZvjM3ZpiKBk6kTHkbO1UN24U%2BAqlp2Nvhci%2FVxA45rT%2B4Fsxj%2F9QSOywLGKe2XDCDuva%2BTZGIQz3oTRWf680Hm%2Fg9T1wQkKDyXp0e10vBAfmxxOet5ZRZKhP%2BoNzsK9L%2FVETXIuIOKiqwdiwcdJf1q5lXF8yBJPljBfw5vg6n04PDGfJ9ATHWaZzK%2F2X5onkpTX0hLQa78QaZdIKWq%2FHh0zUYGwXB1XaVXpcHDU9%2B9tsBU0Pvgqr1iQKRGkbGxslaS8dH4WyZSJHDt0%2B%2FkXP3WcX%2B1I0qkl3%2BWutnDcaqzkxkXRxI6D2HEwl%2FIaJmQrTviz5ydlq9AT49253l7qyvD1u8aR9W2eQ20ov4sKA6foYslisksksRR6WzD6cXPnPOvdOjQILe6FYb8Uf4o1xgohT1Sol5g%2FEIR8PjDVhXxuOWBzgCCg9GEy12uI%2Bk0wnNv8yQY6pgEAfx5qkzeDV%2FIux9jf5BUpVnkuxN7OGEwfgHzenFudV4kOOLkTTDh4hVcWxQqhDZDHcuQmkhaTi8BsuazV07elW6DNy234lTiILSg%2BZEhpSIak4b0P%2FOQPdlBOXADADKHsvy4SN6kX8uUixiSyFvXXCIP1oATk74lfv6HVbfumfJYqTci5RTBzk7vV2L1fmPKDoI1elZ28a0a4mKvfVtM8t3he%2Fb5q&X-Amz-Signature=0af33529edf7d47f5f6d858e48d889866e964fb3be68d870c68c2a8cc08d9e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZ5YMJI%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBxabKXoBpAKEzse%2F6hlEsW6mbCWPTQpudpxL6EWOcWwAiBohcL9XtRWBldYpJ2lJ88qj%2BQeGyF%2Fx3m3bwp89n4ryyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQ1T93eKZK3qh%2B8BgKtwDnPbIIlrRaGUq3WRsWaGYLGFuUjGejfpLRwlZZF5FRG8YxOEmIKDmdYBgz8RnptomouaVgtTqP3Wvr9l%2F2P0OMH6iJwkM0zi3Bbng4odVeGqWB1znCGbvChQ9IdTpxaOA4RHtjvLL44uBuxLpUPQ3SNwa4NatCNtpcPJN20hwknywFFAuKKFYDxi8BqzQQZvjM3ZpiKBk6kTHkbO1UN24U%2BAqlp2Nvhci%2FVxA45rT%2B4Fsxj%2F9QSOywLGKe2XDCDuva%2BTZGIQz3oTRWf680Hm%2Fg9T1wQkKDyXp0e10vBAfmxxOet5ZRZKhP%2BoNzsK9L%2FVETXIuIOKiqwdiwcdJf1q5lXF8yBJPljBfw5vg6n04PDGfJ9ATHWaZzK%2F2X5onkpTX0hLQa78QaZdIKWq%2FHh0zUYGwXB1XaVXpcHDU9%2B9tsBU0Pvgqr1iQKRGkbGxslaS8dH4WyZSJHDt0%2B%2FkXP3WcX%2B1I0qkl3%2BWutnDcaqzkxkXRxI6D2HEwl%2FIaJmQrTviz5ydlq9AT49253l7qyvD1u8aR9W2eQ20ov4sKA6foYslisksksRR6WzD6cXPnPOvdOjQILe6FYb8Uf4o1xgohT1Sol5g%2FEIR8PjDVhXxuOWBzgCCg9GEy12uI%2Bk0wnNv8yQY6pgEAfx5qkzeDV%2FIux9jf5BUpVnkuxN7OGEwfgHzenFudV4kOOLkTTDh4hVcWxQqhDZDHcuQmkhaTi8BsuazV07elW6DNy234lTiILSg%2BZEhpSIak4b0P%2FOQPdlBOXADADKHsvy4SN6kX8uUixiSyFvXXCIP1oATk74lfv6HVbfumfJYqTci5RTBzk7vV2L1fmPKDoI1elZ28a0a4mKvfVtM8t3he%2Fb5q&X-Amz-Signature=ced75b93b54d180dd29602053056182e516f67f93454fbfae85641a0d1415032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZ5YMJI%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBxabKXoBpAKEzse%2F6hlEsW6mbCWPTQpudpxL6EWOcWwAiBohcL9XtRWBldYpJ2lJ88qj%2BQeGyF%2Fx3m3bwp89n4ryyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQ1T93eKZK3qh%2B8BgKtwDnPbIIlrRaGUq3WRsWaGYLGFuUjGejfpLRwlZZF5FRG8YxOEmIKDmdYBgz8RnptomouaVgtTqP3Wvr9l%2F2P0OMH6iJwkM0zi3Bbng4odVeGqWB1znCGbvChQ9IdTpxaOA4RHtjvLL44uBuxLpUPQ3SNwa4NatCNtpcPJN20hwknywFFAuKKFYDxi8BqzQQZvjM3ZpiKBk6kTHkbO1UN24U%2BAqlp2Nvhci%2FVxA45rT%2B4Fsxj%2F9QSOywLGKe2XDCDuva%2BTZGIQz3oTRWf680Hm%2Fg9T1wQkKDyXp0e10vBAfmxxOet5ZRZKhP%2BoNzsK9L%2FVETXIuIOKiqwdiwcdJf1q5lXF8yBJPljBfw5vg6n04PDGfJ9ATHWaZzK%2F2X5onkpTX0hLQa78QaZdIKWq%2FHh0zUYGwXB1XaVXpcHDU9%2B9tsBU0Pvgqr1iQKRGkbGxslaS8dH4WyZSJHDt0%2B%2FkXP3WcX%2B1I0qkl3%2BWutnDcaqzkxkXRxI6D2HEwl%2FIaJmQrTviz5ydlq9AT49253l7qyvD1u8aR9W2eQ20ov4sKA6foYslisksksRR6WzD6cXPnPOvdOjQILe6FYb8Uf4o1xgohT1Sol5g%2FEIR8PjDVhXxuOWBzgCCg9GEy12uI%2Bk0wnNv8yQY6pgEAfx5qkzeDV%2FIux9jf5BUpVnkuxN7OGEwfgHzenFudV4kOOLkTTDh4hVcWxQqhDZDHcuQmkhaTi8BsuazV07elW6DNy234lTiILSg%2BZEhpSIak4b0P%2FOQPdlBOXADADKHsvy4SN6kX8uUixiSyFvXXCIP1oATk74lfv6HVbfumfJYqTci5RTBzk7vV2L1fmPKDoI1elZ28a0a4mKvfVtM8t3he%2Fb5q&X-Amz-Signature=cbc45fec1390dacb4daf8df6a3e2783bd6750cc001fcd406162d87491ece4bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
