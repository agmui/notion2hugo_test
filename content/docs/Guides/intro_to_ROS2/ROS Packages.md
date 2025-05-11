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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBGQ6ACP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQD9LZrI0fNa3oh7DUOusCT9QA6IKu2DkEpTD31%2FtuaVlgIgUxJTf7Tj%2BALpuzsCC9Kg4AVuiJ8CnWUWZbizfTt7qJkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIVDlqCSXFGZAVUjircAxvp2NQAdRfGA6tTm4cCxKzfrTx8eex24fthJVyvYyHQko7Mnnv3WlTyq%2Bx%2FF4lfA95b2L5xPae3%2FkSdLwSnAW4GhCDLsai8WwzZkUuSp3ABPKY2UuAhczvbzFJSq4%2BhHD8i4ymyQEfHqKy3VfrmgVxQYGzM7TTuuHIIXHArQ5UhBd6rT07AtX9IJBoRnvGKcx018y0t4em4GgB%2BbSyFcFdpT1fHeYea70EhToDVCk%2BikkhllLOJgDi%2FSvaGnai%2BdBMGgPJK27ISKIqfsa%2FJMi7W6yXfoELYhf0BlAfAZmEQXZCGtfmFKyykI7GNdjPS%2B8qdTNfsB8dAoqy9p5HggJ4tqSZK%2Fe34sHgukR5W6KiQDz5%2BHSIPU44fpPpjrPH9yAVZbxTD1bvn6Q9R6U%2Bvd8k3IJ5gpMPQ4KSdPJxRebMNS%2BykX1pjLmgLYqYvV5DyHicjxjtAKn6AzrydmPSHx3pL9GAR8sNSIh%2FNl4aDoOEfT3oIDkbg7PajIJEJA7JNV8H4keLdollCjl%2FAP34ugI3Np0xN8yitIfY3sBvjofq4g845NKruZHnmX%2BPlNevP2Ysqk670J0UuGRaQh0VTNy5bREfyj6NSVDAcSvF4dt3hCSKLefiyn2bT8yjUMNGWhMEGOqUBykYpjXNO9RWTGOxIgluWAfpUBgRYsMzj20g6tGh8dY1L1Wm5RBSzJ6rxrZXDhzNPl1nBJuJBEKhKYekgSKuMW11wRQggGLNFWHIds%2FRZvNIQWw9I9PtEF8exJ1kza6VFUh7PoN4fOeqxBmEosOe9BNp11IO%2FNtf0NF1%2FVqTxSqiAUTrJixoLntMFOiIbAGx%2FUHuoPgjEp0LN4IgvNppSWAt2r1hd&X-Amz-Signature=6a2535d3d4dd33f3c749a47d7e32a5e7e62cfb9a4f1b5472fbb4c6fef068e48c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBGQ6ACP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQD9LZrI0fNa3oh7DUOusCT9QA6IKu2DkEpTD31%2FtuaVlgIgUxJTf7Tj%2BALpuzsCC9Kg4AVuiJ8CnWUWZbizfTt7qJkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIVDlqCSXFGZAVUjircAxvp2NQAdRfGA6tTm4cCxKzfrTx8eex24fthJVyvYyHQko7Mnnv3WlTyq%2Bx%2FF4lfA95b2L5xPae3%2FkSdLwSnAW4GhCDLsai8WwzZkUuSp3ABPKY2UuAhczvbzFJSq4%2BhHD8i4ymyQEfHqKy3VfrmgVxQYGzM7TTuuHIIXHArQ5UhBd6rT07AtX9IJBoRnvGKcx018y0t4em4GgB%2BbSyFcFdpT1fHeYea70EhToDVCk%2BikkhllLOJgDi%2FSvaGnai%2BdBMGgPJK27ISKIqfsa%2FJMi7W6yXfoELYhf0BlAfAZmEQXZCGtfmFKyykI7GNdjPS%2B8qdTNfsB8dAoqy9p5HggJ4tqSZK%2Fe34sHgukR5W6KiQDz5%2BHSIPU44fpPpjrPH9yAVZbxTD1bvn6Q9R6U%2Bvd8k3IJ5gpMPQ4KSdPJxRebMNS%2BykX1pjLmgLYqYvV5DyHicjxjtAKn6AzrydmPSHx3pL9GAR8sNSIh%2FNl4aDoOEfT3oIDkbg7PajIJEJA7JNV8H4keLdollCjl%2FAP34ugI3Np0xN8yitIfY3sBvjofq4g845NKruZHnmX%2BPlNevP2Ysqk670J0UuGRaQh0VTNy5bREfyj6NSVDAcSvF4dt3hCSKLefiyn2bT8yjUMNGWhMEGOqUBykYpjXNO9RWTGOxIgluWAfpUBgRYsMzj20g6tGh8dY1L1Wm5RBSzJ6rxrZXDhzNPl1nBJuJBEKhKYekgSKuMW11wRQggGLNFWHIds%2FRZvNIQWw9I9PtEF8exJ1kza6VFUh7PoN4fOeqxBmEosOe9BNp11IO%2FNtf0NF1%2FVqTxSqiAUTrJixoLntMFOiIbAGx%2FUHuoPgjEp0LN4IgvNppSWAt2r1hd&X-Amz-Signature=15b2a15f16412bdac65407800e049dd44e77d837bcd7fc3af737072cf248801c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBGQ6ACP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQD9LZrI0fNa3oh7DUOusCT9QA6IKu2DkEpTD31%2FtuaVlgIgUxJTf7Tj%2BALpuzsCC9Kg4AVuiJ8CnWUWZbizfTt7qJkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIVDlqCSXFGZAVUjircAxvp2NQAdRfGA6tTm4cCxKzfrTx8eex24fthJVyvYyHQko7Mnnv3WlTyq%2Bx%2FF4lfA95b2L5xPae3%2FkSdLwSnAW4GhCDLsai8WwzZkUuSp3ABPKY2UuAhczvbzFJSq4%2BhHD8i4ymyQEfHqKy3VfrmgVxQYGzM7TTuuHIIXHArQ5UhBd6rT07AtX9IJBoRnvGKcx018y0t4em4GgB%2BbSyFcFdpT1fHeYea70EhToDVCk%2BikkhllLOJgDi%2FSvaGnai%2BdBMGgPJK27ISKIqfsa%2FJMi7W6yXfoELYhf0BlAfAZmEQXZCGtfmFKyykI7GNdjPS%2B8qdTNfsB8dAoqy9p5HggJ4tqSZK%2Fe34sHgukR5W6KiQDz5%2BHSIPU44fpPpjrPH9yAVZbxTD1bvn6Q9R6U%2Bvd8k3IJ5gpMPQ4KSdPJxRebMNS%2BykX1pjLmgLYqYvV5DyHicjxjtAKn6AzrydmPSHx3pL9GAR8sNSIh%2FNl4aDoOEfT3oIDkbg7PajIJEJA7JNV8H4keLdollCjl%2FAP34ugI3Np0xN8yitIfY3sBvjofq4g845NKruZHnmX%2BPlNevP2Ysqk670J0UuGRaQh0VTNy5bREfyj6NSVDAcSvF4dt3hCSKLefiyn2bT8yjUMNGWhMEGOqUBykYpjXNO9RWTGOxIgluWAfpUBgRYsMzj20g6tGh8dY1L1Wm5RBSzJ6rxrZXDhzNPl1nBJuJBEKhKYekgSKuMW11wRQggGLNFWHIds%2FRZvNIQWw9I9PtEF8exJ1kza6VFUh7PoN4fOeqxBmEosOe9BNp11IO%2FNtf0NF1%2FVqTxSqiAUTrJixoLntMFOiIbAGx%2FUHuoPgjEp0LN4IgvNppSWAt2r1hd&X-Amz-Signature=7e6e0dace6e82aa3cdecab163483249d6c648a48760f289bd9dcf76e64ba08c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBGQ6ACP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQD9LZrI0fNa3oh7DUOusCT9QA6IKu2DkEpTD31%2FtuaVlgIgUxJTf7Tj%2BALpuzsCC9Kg4AVuiJ8CnWUWZbizfTt7qJkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIVDlqCSXFGZAVUjircAxvp2NQAdRfGA6tTm4cCxKzfrTx8eex24fthJVyvYyHQko7Mnnv3WlTyq%2Bx%2FF4lfA95b2L5xPae3%2FkSdLwSnAW4GhCDLsai8WwzZkUuSp3ABPKY2UuAhczvbzFJSq4%2BhHD8i4ymyQEfHqKy3VfrmgVxQYGzM7TTuuHIIXHArQ5UhBd6rT07AtX9IJBoRnvGKcx018y0t4em4GgB%2BbSyFcFdpT1fHeYea70EhToDVCk%2BikkhllLOJgDi%2FSvaGnai%2BdBMGgPJK27ISKIqfsa%2FJMi7W6yXfoELYhf0BlAfAZmEQXZCGtfmFKyykI7GNdjPS%2B8qdTNfsB8dAoqy9p5HggJ4tqSZK%2Fe34sHgukR5W6KiQDz5%2BHSIPU44fpPpjrPH9yAVZbxTD1bvn6Q9R6U%2Bvd8k3IJ5gpMPQ4KSdPJxRebMNS%2BykX1pjLmgLYqYvV5DyHicjxjtAKn6AzrydmPSHx3pL9GAR8sNSIh%2FNl4aDoOEfT3oIDkbg7PajIJEJA7JNV8H4keLdollCjl%2FAP34ugI3Np0xN8yitIfY3sBvjofq4g845NKruZHnmX%2BPlNevP2Ysqk670J0UuGRaQh0VTNy5bREfyj6NSVDAcSvF4dt3hCSKLefiyn2bT8yjUMNGWhMEGOqUBykYpjXNO9RWTGOxIgluWAfpUBgRYsMzj20g6tGh8dY1L1Wm5RBSzJ6rxrZXDhzNPl1nBJuJBEKhKYekgSKuMW11wRQggGLNFWHIds%2FRZvNIQWw9I9PtEF8exJ1kza6VFUh7PoN4fOeqxBmEosOe9BNp11IO%2FNtf0NF1%2FVqTxSqiAUTrJixoLntMFOiIbAGx%2FUHuoPgjEp0LN4IgvNppSWAt2r1hd&X-Amz-Signature=529b27f1a2c036d8dabf4054065e6ee9e75d6507c262914bcc228a96ca2b1c19&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBGQ6ACP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQD9LZrI0fNa3oh7DUOusCT9QA6IKu2DkEpTD31%2FtuaVlgIgUxJTf7Tj%2BALpuzsCC9Kg4AVuiJ8CnWUWZbizfTt7qJkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIVDlqCSXFGZAVUjircAxvp2NQAdRfGA6tTm4cCxKzfrTx8eex24fthJVyvYyHQko7Mnnv3WlTyq%2Bx%2FF4lfA95b2L5xPae3%2FkSdLwSnAW4GhCDLsai8WwzZkUuSp3ABPKY2UuAhczvbzFJSq4%2BhHD8i4ymyQEfHqKy3VfrmgVxQYGzM7TTuuHIIXHArQ5UhBd6rT07AtX9IJBoRnvGKcx018y0t4em4GgB%2BbSyFcFdpT1fHeYea70EhToDVCk%2BikkhllLOJgDi%2FSvaGnai%2BdBMGgPJK27ISKIqfsa%2FJMi7W6yXfoELYhf0BlAfAZmEQXZCGtfmFKyykI7GNdjPS%2B8qdTNfsB8dAoqy9p5HggJ4tqSZK%2Fe34sHgukR5W6KiQDz5%2BHSIPU44fpPpjrPH9yAVZbxTD1bvn6Q9R6U%2Bvd8k3IJ5gpMPQ4KSdPJxRebMNS%2BykX1pjLmgLYqYvV5DyHicjxjtAKn6AzrydmPSHx3pL9GAR8sNSIh%2FNl4aDoOEfT3oIDkbg7PajIJEJA7JNV8H4keLdollCjl%2FAP34ugI3Np0xN8yitIfY3sBvjofq4g845NKruZHnmX%2BPlNevP2Ysqk670J0UuGRaQh0VTNy5bREfyj6NSVDAcSvF4dt3hCSKLefiyn2bT8yjUMNGWhMEGOqUBykYpjXNO9RWTGOxIgluWAfpUBgRYsMzj20g6tGh8dY1L1Wm5RBSzJ6rxrZXDhzNPl1nBJuJBEKhKYekgSKuMW11wRQggGLNFWHIds%2FRZvNIQWw9I9PtEF8exJ1kza6VFUh7PoN4fOeqxBmEosOe9BNp11IO%2FNtf0NF1%2FVqTxSqiAUTrJixoLntMFOiIbAGx%2FUHuoPgjEp0LN4IgvNppSWAt2r1hd&X-Amz-Signature=40e03f9c24f9028db68667ba95f9eaf73d783b905ce6d9453d96a07343dfa4ea&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBGQ6ACP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQD9LZrI0fNa3oh7DUOusCT9QA6IKu2DkEpTD31%2FtuaVlgIgUxJTf7Tj%2BALpuzsCC9Kg4AVuiJ8CnWUWZbizfTt7qJkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIVDlqCSXFGZAVUjircAxvp2NQAdRfGA6tTm4cCxKzfrTx8eex24fthJVyvYyHQko7Mnnv3WlTyq%2Bx%2FF4lfA95b2L5xPae3%2FkSdLwSnAW4GhCDLsai8WwzZkUuSp3ABPKY2UuAhczvbzFJSq4%2BhHD8i4ymyQEfHqKy3VfrmgVxQYGzM7TTuuHIIXHArQ5UhBd6rT07AtX9IJBoRnvGKcx018y0t4em4GgB%2BbSyFcFdpT1fHeYea70EhToDVCk%2BikkhllLOJgDi%2FSvaGnai%2BdBMGgPJK27ISKIqfsa%2FJMi7W6yXfoELYhf0BlAfAZmEQXZCGtfmFKyykI7GNdjPS%2B8qdTNfsB8dAoqy9p5HggJ4tqSZK%2Fe34sHgukR5W6KiQDz5%2BHSIPU44fpPpjrPH9yAVZbxTD1bvn6Q9R6U%2Bvd8k3IJ5gpMPQ4KSdPJxRebMNS%2BykX1pjLmgLYqYvV5DyHicjxjtAKn6AzrydmPSHx3pL9GAR8sNSIh%2FNl4aDoOEfT3oIDkbg7PajIJEJA7JNV8H4keLdollCjl%2FAP34ugI3Np0xN8yitIfY3sBvjofq4g845NKruZHnmX%2BPlNevP2Ysqk670J0UuGRaQh0VTNy5bREfyj6NSVDAcSvF4dt3hCSKLefiyn2bT8yjUMNGWhMEGOqUBykYpjXNO9RWTGOxIgluWAfpUBgRYsMzj20g6tGh8dY1L1Wm5RBSzJ6rxrZXDhzNPl1nBJuJBEKhKYekgSKuMW11wRQggGLNFWHIds%2FRZvNIQWw9I9PtEF8exJ1kza6VFUh7PoN4fOeqxBmEosOe9BNp11IO%2FNtf0NF1%2FVqTxSqiAUTrJixoLntMFOiIbAGx%2FUHuoPgjEp0LN4IgvNppSWAt2r1hd&X-Amz-Signature=0b588878ed11f62601923df831cc1c084163b13c7462c6bc07869e37ce30f9cb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBGQ6ACP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQD9LZrI0fNa3oh7DUOusCT9QA6IKu2DkEpTD31%2FtuaVlgIgUxJTf7Tj%2BALpuzsCC9Kg4AVuiJ8CnWUWZbizfTt7qJkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIVDlqCSXFGZAVUjircAxvp2NQAdRfGA6tTm4cCxKzfrTx8eex24fthJVyvYyHQko7Mnnv3WlTyq%2Bx%2FF4lfA95b2L5xPae3%2FkSdLwSnAW4GhCDLsai8WwzZkUuSp3ABPKY2UuAhczvbzFJSq4%2BhHD8i4ymyQEfHqKy3VfrmgVxQYGzM7TTuuHIIXHArQ5UhBd6rT07AtX9IJBoRnvGKcx018y0t4em4GgB%2BbSyFcFdpT1fHeYea70EhToDVCk%2BikkhllLOJgDi%2FSvaGnai%2BdBMGgPJK27ISKIqfsa%2FJMi7W6yXfoELYhf0BlAfAZmEQXZCGtfmFKyykI7GNdjPS%2B8qdTNfsB8dAoqy9p5HggJ4tqSZK%2Fe34sHgukR5W6KiQDz5%2BHSIPU44fpPpjrPH9yAVZbxTD1bvn6Q9R6U%2Bvd8k3IJ5gpMPQ4KSdPJxRebMNS%2BykX1pjLmgLYqYvV5DyHicjxjtAKn6AzrydmPSHx3pL9GAR8sNSIh%2FNl4aDoOEfT3oIDkbg7PajIJEJA7JNV8H4keLdollCjl%2FAP34ugI3Np0xN8yitIfY3sBvjofq4g845NKruZHnmX%2BPlNevP2Ysqk670J0UuGRaQh0VTNy5bREfyj6NSVDAcSvF4dt3hCSKLefiyn2bT8yjUMNGWhMEGOqUBykYpjXNO9RWTGOxIgluWAfpUBgRYsMzj20g6tGh8dY1L1Wm5RBSzJ6rxrZXDhzNPl1nBJuJBEKhKYekgSKuMW11wRQggGLNFWHIds%2FRZvNIQWw9I9PtEF8exJ1kza6VFUh7PoN4fOeqxBmEosOe9BNp11IO%2FNtf0NF1%2FVqTxSqiAUTrJixoLntMFOiIbAGx%2FUHuoPgjEp0LN4IgvNppSWAt2r1hd&X-Amz-Signature=cef6d172ee53ad0ac2df16d764ac29ad552964aab479babc5eb3872812d5f0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
