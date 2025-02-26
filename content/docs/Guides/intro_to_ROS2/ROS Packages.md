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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMF3A6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIB6N%2FcWo6MPPYLhhajYibF%2FkaSSEQbtqK68JGO3XTgpAAiB6IGulukr7TGj8xKZdmW5NnvHXo%2FTtoSVVFuVdZ1HxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2FdLnpuuGhwtnES9FKtwDTtp42HmhiduFbovE5X0Fw%2FTkQ95idIkDIqG2a%2FRVk4OffKByqY5xU0%2BvEk4XHqKFgG2AXqlmTao%2FzaMHdc7Yw1me8FUjnS3MX2saj%2F0zdGATjACHdW9ZCkD8v9u4tqKwa5SeZknhJ%2BNIhhM62gqb2KCt4AqaGeIg0RT3LniffceaJRLPhD1ci04TxRM8R5X1BmzL4BnptXuSF5lHMF26JNLjyK4lvcAnNMVKyuODyZFiv9cnPrl2Z9BFevAgMhLYm%2FESBt21%2FOgNiHFm%2BGqMaQnN7EBf%2BYetHaOSb4lYf9kgFcW5jFcd94dgakzm5pvdPsHe3l2V0edqx53PdlLJqQmVtO2VGCRzVAd8op%2FgyEWa%2Bhj%2BClTVGN7X1%2FZO7jtWXhDKDSsWoS2yMLBDk6nNAEvSNm1zBS9agw0tlQiN%2F6k%2BfCXGRMrA89nclRkCfmGLZvY6CabOW7Xa661HUTlZJ7JZQ4glpMZGO%2FAGekmCuNZI3%2BDol9DqccrYtnYreJfiJOkDM%2Bx3UNppJOVgCb5meqT0i6J9h9ezCeFDorfQjZvgx2mrrXOD0Q99X9jcnxT9g80pErWaWDMDAOdLxrDgJH2jS4Yvxs9zr1UxYsSzbU%2Fj1hlMDpMPRwhUXDcw74f8vQY6pgGAXQNn6CyQQbU%2BbYkAanWxCzjMhGMihqxZBgGDxdQBhdVIW3QofXoUYoBLZ9ndTh%2B4ATu%2FeqDGZz4wmX3HnD0AeURZqQ2xfhj6PrAkrQtgEFVAa4iejvQ2JT8CEKr9cn%2FEh3QjDH80w4JPX9MR5ltDO6z0Cjw7gxoF3dGZbOyvg2Bp5CPAkEB5xe41drpK2kVDuJujrEVtATEB35C20m%2FQ3hd6bFYP&X-Amz-Signature=42f36ea17f8b4e34782dab46945d2f4e3e14722cf44ee9c80f4d0b53ec20d728&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMF3A6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIB6N%2FcWo6MPPYLhhajYibF%2FkaSSEQbtqK68JGO3XTgpAAiB6IGulukr7TGj8xKZdmW5NnvHXo%2FTtoSVVFuVdZ1HxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2FdLnpuuGhwtnES9FKtwDTtp42HmhiduFbovE5X0Fw%2FTkQ95idIkDIqG2a%2FRVk4OffKByqY5xU0%2BvEk4XHqKFgG2AXqlmTao%2FzaMHdc7Yw1me8FUjnS3MX2saj%2F0zdGATjACHdW9ZCkD8v9u4tqKwa5SeZknhJ%2BNIhhM62gqb2KCt4AqaGeIg0RT3LniffceaJRLPhD1ci04TxRM8R5X1BmzL4BnptXuSF5lHMF26JNLjyK4lvcAnNMVKyuODyZFiv9cnPrl2Z9BFevAgMhLYm%2FESBt21%2FOgNiHFm%2BGqMaQnN7EBf%2BYetHaOSb4lYf9kgFcW5jFcd94dgakzm5pvdPsHe3l2V0edqx53PdlLJqQmVtO2VGCRzVAd8op%2FgyEWa%2Bhj%2BClTVGN7X1%2FZO7jtWXhDKDSsWoS2yMLBDk6nNAEvSNm1zBS9agw0tlQiN%2F6k%2BfCXGRMrA89nclRkCfmGLZvY6CabOW7Xa661HUTlZJ7JZQ4glpMZGO%2FAGekmCuNZI3%2BDol9DqccrYtnYreJfiJOkDM%2Bx3UNppJOVgCb5meqT0i6J9h9ezCeFDorfQjZvgx2mrrXOD0Q99X9jcnxT9g80pErWaWDMDAOdLxrDgJH2jS4Yvxs9zr1UxYsSzbU%2Fj1hlMDpMPRwhUXDcw74f8vQY6pgGAXQNn6CyQQbU%2BbYkAanWxCzjMhGMihqxZBgGDxdQBhdVIW3QofXoUYoBLZ9ndTh%2B4ATu%2FeqDGZz4wmX3HnD0AeURZqQ2xfhj6PrAkrQtgEFVAa4iejvQ2JT8CEKr9cn%2FEh3QjDH80w4JPX9MR5ltDO6z0Cjw7gxoF3dGZbOyvg2Bp5CPAkEB5xe41drpK2kVDuJujrEVtATEB35C20m%2FQ3hd6bFYP&X-Amz-Signature=8e1d3402eba9d90d9711c742030b6fc4e57b1cafae6e485356f29a95d6b1fef9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMF3A6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIB6N%2FcWo6MPPYLhhajYibF%2FkaSSEQbtqK68JGO3XTgpAAiB6IGulukr7TGj8xKZdmW5NnvHXo%2FTtoSVVFuVdZ1HxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2FdLnpuuGhwtnES9FKtwDTtp42HmhiduFbovE5X0Fw%2FTkQ95idIkDIqG2a%2FRVk4OffKByqY5xU0%2BvEk4XHqKFgG2AXqlmTao%2FzaMHdc7Yw1me8FUjnS3MX2saj%2F0zdGATjACHdW9ZCkD8v9u4tqKwa5SeZknhJ%2BNIhhM62gqb2KCt4AqaGeIg0RT3LniffceaJRLPhD1ci04TxRM8R5X1BmzL4BnptXuSF5lHMF26JNLjyK4lvcAnNMVKyuODyZFiv9cnPrl2Z9BFevAgMhLYm%2FESBt21%2FOgNiHFm%2BGqMaQnN7EBf%2BYetHaOSb4lYf9kgFcW5jFcd94dgakzm5pvdPsHe3l2V0edqx53PdlLJqQmVtO2VGCRzVAd8op%2FgyEWa%2Bhj%2BClTVGN7X1%2FZO7jtWXhDKDSsWoS2yMLBDk6nNAEvSNm1zBS9agw0tlQiN%2F6k%2BfCXGRMrA89nclRkCfmGLZvY6CabOW7Xa661HUTlZJ7JZQ4glpMZGO%2FAGekmCuNZI3%2BDol9DqccrYtnYreJfiJOkDM%2Bx3UNppJOVgCb5meqT0i6J9h9ezCeFDorfQjZvgx2mrrXOD0Q99X9jcnxT9g80pErWaWDMDAOdLxrDgJH2jS4Yvxs9zr1UxYsSzbU%2Fj1hlMDpMPRwhUXDcw74f8vQY6pgGAXQNn6CyQQbU%2BbYkAanWxCzjMhGMihqxZBgGDxdQBhdVIW3QofXoUYoBLZ9ndTh%2B4ATu%2FeqDGZz4wmX3HnD0AeURZqQ2xfhj6PrAkrQtgEFVAa4iejvQ2JT8CEKr9cn%2FEh3QjDH80w4JPX9MR5ltDO6z0Cjw7gxoF3dGZbOyvg2Bp5CPAkEB5xe41drpK2kVDuJujrEVtATEB35C20m%2FQ3hd6bFYP&X-Amz-Signature=37a4fe20a4df028baf6fce57f88512c5db81b5670a2b106f865f626a4bd4003c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMF3A6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIB6N%2FcWo6MPPYLhhajYibF%2FkaSSEQbtqK68JGO3XTgpAAiB6IGulukr7TGj8xKZdmW5NnvHXo%2FTtoSVVFuVdZ1HxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2FdLnpuuGhwtnES9FKtwDTtp42HmhiduFbovE5X0Fw%2FTkQ95idIkDIqG2a%2FRVk4OffKByqY5xU0%2BvEk4XHqKFgG2AXqlmTao%2FzaMHdc7Yw1me8FUjnS3MX2saj%2F0zdGATjACHdW9ZCkD8v9u4tqKwa5SeZknhJ%2BNIhhM62gqb2KCt4AqaGeIg0RT3LniffceaJRLPhD1ci04TxRM8R5X1BmzL4BnptXuSF5lHMF26JNLjyK4lvcAnNMVKyuODyZFiv9cnPrl2Z9BFevAgMhLYm%2FESBt21%2FOgNiHFm%2BGqMaQnN7EBf%2BYetHaOSb4lYf9kgFcW5jFcd94dgakzm5pvdPsHe3l2V0edqx53PdlLJqQmVtO2VGCRzVAd8op%2FgyEWa%2Bhj%2BClTVGN7X1%2FZO7jtWXhDKDSsWoS2yMLBDk6nNAEvSNm1zBS9agw0tlQiN%2F6k%2BfCXGRMrA89nclRkCfmGLZvY6CabOW7Xa661HUTlZJ7JZQ4glpMZGO%2FAGekmCuNZI3%2BDol9DqccrYtnYreJfiJOkDM%2Bx3UNppJOVgCb5meqT0i6J9h9ezCeFDorfQjZvgx2mrrXOD0Q99X9jcnxT9g80pErWaWDMDAOdLxrDgJH2jS4Yvxs9zr1UxYsSzbU%2Fj1hlMDpMPRwhUXDcw74f8vQY6pgGAXQNn6CyQQbU%2BbYkAanWxCzjMhGMihqxZBgGDxdQBhdVIW3QofXoUYoBLZ9ndTh%2B4ATu%2FeqDGZz4wmX3HnD0AeURZqQ2xfhj6PrAkrQtgEFVAa4iejvQ2JT8CEKr9cn%2FEh3QjDH80w4JPX9MR5ltDO6z0Cjw7gxoF3dGZbOyvg2Bp5CPAkEB5xe41drpK2kVDuJujrEVtATEB35C20m%2FQ3hd6bFYP&X-Amz-Signature=5280f84b5eabb7f5bde6a9df058493aeee49fdd688323a90a6e2afd899faf6e8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMF3A6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIB6N%2FcWo6MPPYLhhajYibF%2FkaSSEQbtqK68JGO3XTgpAAiB6IGulukr7TGj8xKZdmW5NnvHXo%2FTtoSVVFuVdZ1HxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2FdLnpuuGhwtnES9FKtwDTtp42HmhiduFbovE5X0Fw%2FTkQ95idIkDIqG2a%2FRVk4OffKByqY5xU0%2BvEk4XHqKFgG2AXqlmTao%2FzaMHdc7Yw1me8FUjnS3MX2saj%2F0zdGATjACHdW9ZCkD8v9u4tqKwa5SeZknhJ%2BNIhhM62gqb2KCt4AqaGeIg0RT3LniffceaJRLPhD1ci04TxRM8R5X1BmzL4BnptXuSF5lHMF26JNLjyK4lvcAnNMVKyuODyZFiv9cnPrl2Z9BFevAgMhLYm%2FESBt21%2FOgNiHFm%2BGqMaQnN7EBf%2BYetHaOSb4lYf9kgFcW5jFcd94dgakzm5pvdPsHe3l2V0edqx53PdlLJqQmVtO2VGCRzVAd8op%2FgyEWa%2Bhj%2BClTVGN7X1%2FZO7jtWXhDKDSsWoS2yMLBDk6nNAEvSNm1zBS9agw0tlQiN%2F6k%2BfCXGRMrA89nclRkCfmGLZvY6CabOW7Xa661HUTlZJ7JZQ4glpMZGO%2FAGekmCuNZI3%2BDol9DqccrYtnYreJfiJOkDM%2Bx3UNppJOVgCb5meqT0i6J9h9ezCeFDorfQjZvgx2mrrXOD0Q99X9jcnxT9g80pErWaWDMDAOdLxrDgJH2jS4Yvxs9zr1UxYsSzbU%2Fj1hlMDpMPRwhUXDcw74f8vQY6pgGAXQNn6CyQQbU%2BbYkAanWxCzjMhGMihqxZBgGDxdQBhdVIW3QofXoUYoBLZ9ndTh%2B4ATu%2FeqDGZz4wmX3HnD0AeURZqQ2xfhj6PrAkrQtgEFVAa4iejvQ2JT8CEKr9cn%2FEh3QjDH80w4JPX9MR5ltDO6z0Cjw7gxoF3dGZbOyvg2Bp5CPAkEB5xe41drpK2kVDuJujrEVtATEB35C20m%2FQ3hd6bFYP&X-Amz-Signature=dbb457eddbfa86b7380027e31c27b510aa851e78d0f087160e2a7f3a82d00eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMF3A6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIB6N%2FcWo6MPPYLhhajYibF%2FkaSSEQbtqK68JGO3XTgpAAiB6IGulukr7TGj8xKZdmW5NnvHXo%2FTtoSVVFuVdZ1HxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2FdLnpuuGhwtnES9FKtwDTtp42HmhiduFbovE5X0Fw%2FTkQ95idIkDIqG2a%2FRVk4OffKByqY5xU0%2BvEk4XHqKFgG2AXqlmTao%2FzaMHdc7Yw1me8FUjnS3MX2saj%2F0zdGATjACHdW9ZCkD8v9u4tqKwa5SeZknhJ%2BNIhhM62gqb2KCt4AqaGeIg0RT3LniffceaJRLPhD1ci04TxRM8R5X1BmzL4BnptXuSF5lHMF26JNLjyK4lvcAnNMVKyuODyZFiv9cnPrl2Z9BFevAgMhLYm%2FESBt21%2FOgNiHFm%2BGqMaQnN7EBf%2BYetHaOSb4lYf9kgFcW5jFcd94dgakzm5pvdPsHe3l2V0edqx53PdlLJqQmVtO2VGCRzVAd8op%2FgyEWa%2Bhj%2BClTVGN7X1%2FZO7jtWXhDKDSsWoS2yMLBDk6nNAEvSNm1zBS9agw0tlQiN%2F6k%2BfCXGRMrA89nclRkCfmGLZvY6CabOW7Xa661HUTlZJ7JZQ4glpMZGO%2FAGekmCuNZI3%2BDol9DqccrYtnYreJfiJOkDM%2Bx3UNppJOVgCb5meqT0i6J9h9ezCeFDorfQjZvgx2mrrXOD0Q99X9jcnxT9g80pErWaWDMDAOdLxrDgJH2jS4Yvxs9zr1UxYsSzbU%2Fj1hlMDpMPRwhUXDcw74f8vQY6pgGAXQNn6CyQQbU%2BbYkAanWxCzjMhGMihqxZBgGDxdQBhdVIW3QofXoUYoBLZ9ndTh%2B4ATu%2FeqDGZz4wmX3HnD0AeURZqQ2xfhj6PrAkrQtgEFVAa4iejvQ2JT8CEKr9cn%2FEh3QjDH80w4JPX9MR5ltDO6z0Cjw7gxoF3dGZbOyvg2Bp5CPAkEB5xe41drpK2kVDuJujrEVtATEB35C20m%2FQ3hd6bFYP&X-Amz-Signature=dcd4377e72c49c74cc30732f62230aa0291c397012bdf4111dfd934900ed0913&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMF3A6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIB6N%2FcWo6MPPYLhhajYibF%2FkaSSEQbtqK68JGO3XTgpAAiB6IGulukr7TGj8xKZdmW5NnvHXo%2FTtoSVVFuVdZ1HxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2FdLnpuuGhwtnES9FKtwDTtp42HmhiduFbovE5X0Fw%2FTkQ95idIkDIqG2a%2FRVk4OffKByqY5xU0%2BvEk4XHqKFgG2AXqlmTao%2FzaMHdc7Yw1me8FUjnS3MX2saj%2F0zdGATjACHdW9ZCkD8v9u4tqKwa5SeZknhJ%2BNIhhM62gqb2KCt4AqaGeIg0RT3LniffceaJRLPhD1ci04TxRM8R5X1BmzL4BnptXuSF5lHMF26JNLjyK4lvcAnNMVKyuODyZFiv9cnPrl2Z9BFevAgMhLYm%2FESBt21%2FOgNiHFm%2BGqMaQnN7EBf%2BYetHaOSb4lYf9kgFcW5jFcd94dgakzm5pvdPsHe3l2V0edqx53PdlLJqQmVtO2VGCRzVAd8op%2FgyEWa%2Bhj%2BClTVGN7X1%2FZO7jtWXhDKDSsWoS2yMLBDk6nNAEvSNm1zBS9agw0tlQiN%2F6k%2BfCXGRMrA89nclRkCfmGLZvY6CabOW7Xa661HUTlZJ7JZQ4glpMZGO%2FAGekmCuNZI3%2BDol9DqccrYtnYreJfiJOkDM%2Bx3UNppJOVgCb5meqT0i6J9h9ezCeFDorfQjZvgx2mrrXOD0Q99X9jcnxT9g80pErWaWDMDAOdLxrDgJH2jS4Yvxs9zr1UxYsSzbU%2Fj1hlMDpMPRwhUXDcw74f8vQY6pgGAXQNn6CyQQbU%2BbYkAanWxCzjMhGMihqxZBgGDxdQBhdVIW3QofXoUYoBLZ9ndTh%2B4ATu%2FeqDGZz4wmX3HnD0AeURZqQ2xfhj6PrAkrQtgEFVAa4iejvQ2JT8CEKr9cn%2FEh3QjDH80w4JPX9MR5ltDO6z0Cjw7gxoF3dGZbOyvg2Bp5CPAkEB5xe41drpK2kVDuJujrEVtATEB35C20m%2FQ3hd6bFYP&X-Amz-Signature=8e4022550827a9d9fa63f9e4e263b6b2967942cb90950fee6b0acbfd4e2304f7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
