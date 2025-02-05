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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPARJ5FJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHT%2BgsHZ3iqpTeCyQX440Gddo3Qu3mJxAQx%2Fjx9XBBt6AiBmz532HVVPX94lILZrP8UaMtRoQh7uP9vP1%2Ff5SlwxHyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXjGKvRjGHapEcGtbKtwD9WDsvLHgMUGAis0F6b9k7%2B7xnUKeTxAODZeykPs6zIcgLms9nAKaL8C0x7uRYOdJcby8WLepNOUn4eeOFKCealZakQsro4Xzld8pJ6FSnLt22ZDW3DFdp1lPWnNxfyFfsFphe54Btkp7yyzjCY4mB2PbAkGkSOwqLqwAOSNU2FU9Mu5ySqRNNmgnFdvD%2BEflgPnvh3D3p3eTFK3mInE90quPindYL%2F2O0uIX2nBITtKqZu88zE34jxFeM6E4YjjtyeOI7xDV5lolH2aMADsjIQhlbKgwxTjoysXe3j8iCszYmY7GvziAZGNM94zdg8NGj497Y2ekmB2UOe3OicrQ3CZw5GTkue58fsXEKPlBANAbQ0gRUfHcz8kfRdION%2F5PDB%2BnHKQVc5aMm5cA4fv2S0xlXeYlWntYdrUSsmQ5VklUQC50ef29O4BVKLQDtl3dRzNr2bosA0KGRvzv1Fz%2Fj6YSDEnSM4Ytk%2BJcyxoJnWVvZHK%2FfusvfrKXU129Lm3JosiY%2FR8h21jBHHu4yJf%2FHc1GCncgLbRckl0UxtUtXumuYSJ3qyITsoneRdywTN2E1Ah5PXYP94oNGuvLd%2BdGjrjx90N%2F6iqlMvhhHisdD9M%2FgjcMBdKHby7VuKEw54uNvQY6pgEJl5h2%2BoOjjYICQRDtgRaCvqs4hdDAyrCmsQgFL%2B85WB1YO59Nbpr3SeoyJQ937lJtMNQNwKiKX5lwOGVnivlTJYwkhT4RcqcUuzeOfRZuf5hXNI%2BlkuBM5zLHVHjVPUuwY9FMJC2DCiGXXAxYWoASIgLhnHEx66Z5o%2FKrPxH8RIuBZuhjc3U1b8ZdBE4xlE8Da85wCCbfSHRFYtuo7g3LIhMmAS2E&X-Amz-Signature=15e9fdda4adb707c6f23fba8efbd78b6e09583560a56e834dcd67b7abaf812c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPARJ5FJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHT%2BgsHZ3iqpTeCyQX440Gddo3Qu3mJxAQx%2Fjx9XBBt6AiBmz532HVVPX94lILZrP8UaMtRoQh7uP9vP1%2Ff5SlwxHyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXjGKvRjGHapEcGtbKtwD9WDsvLHgMUGAis0F6b9k7%2B7xnUKeTxAODZeykPs6zIcgLms9nAKaL8C0x7uRYOdJcby8WLepNOUn4eeOFKCealZakQsro4Xzld8pJ6FSnLt22ZDW3DFdp1lPWnNxfyFfsFphe54Btkp7yyzjCY4mB2PbAkGkSOwqLqwAOSNU2FU9Mu5ySqRNNmgnFdvD%2BEflgPnvh3D3p3eTFK3mInE90quPindYL%2F2O0uIX2nBITtKqZu88zE34jxFeM6E4YjjtyeOI7xDV5lolH2aMADsjIQhlbKgwxTjoysXe3j8iCszYmY7GvziAZGNM94zdg8NGj497Y2ekmB2UOe3OicrQ3CZw5GTkue58fsXEKPlBANAbQ0gRUfHcz8kfRdION%2F5PDB%2BnHKQVc5aMm5cA4fv2S0xlXeYlWntYdrUSsmQ5VklUQC50ef29O4BVKLQDtl3dRzNr2bosA0KGRvzv1Fz%2Fj6YSDEnSM4Ytk%2BJcyxoJnWVvZHK%2FfusvfrKXU129Lm3JosiY%2FR8h21jBHHu4yJf%2FHc1GCncgLbRckl0UxtUtXumuYSJ3qyITsoneRdywTN2E1Ah5PXYP94oNGuvLd%2BdGjrjx90N%2F6iqlMvhhHisdD9M%2FgjcMBdKHby7VuKEw54uNvQY6pgEJl5h2%2BoOjjYICQRDtgRaCvqs4hdDAyrCmsQgFL%2B85WB1YO59Nbpr3SeoyJQ937lJtMNQNwKiKX5lwOGVnivlTJYwkhT4RcqcUuzeOfRZuf5hXNI%2BlkuBM5zLHVHjVPUuwY9FMJC2DCiGXXAxYWoASIgLhnHEx66Z5o%2FKrPxH8RIuBZuhjc3U1b8ZdBE4xlE8Da85wCCbfSHRFYtuo7g3LIhMmAS2E&X-Amz-Signature=c1fc6dfbdce1ff3ed24c1e055a80e030bff228a20fb38217b54ea851aee2a0ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPARJ5FJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHT%2BgsHZ3iqpTeCyQX440Gddo3Qu3mJxAQx%2Fjx9XBBt6AiBmz532HVVPX94lILZrP8UaMtRoQh7uP9vP1%2Ff5SlwxHyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXjGKvRjGHapEcGtbKtwD9WDsvLHgMUGAis0F6b9k7%2B7xnUKeTxAODZeykPs6zIcgLms9nAKaL8C0x7uRYOdJcby8WLepNOUn4eeOFKCealZakQsro4Xzld8pJ6FSnLt22ZDW3DFdp1lPWnNxfyFfsFphe54Btkp7yyzjCY4mB2PbAkGkSOwqLqwAOSNU2FU9Mu5ySqRNNmgnFdvD%2BEflgPnvh3D3p3eTFK3mInE90quPindYL%2F2O0uIX2nBITtKqZu88zE34jxFeM6E4YjjtyeOI7xDV5lolH2aMADsjIQhlbKgwxTjoysXe3j8iCszYmY7GvziAZGNM94zdg8NGj497Y2ekmB2UOe3OicrQ3CZw5GTkue58fsXEKPlBANAbQ0gRUfHcz8kfRdION%2F5PDB%2BnHKQVc5aMm5cA4fv2S0xlXeYlWntYdrUSsmQ5VklUQC50ef29O4BVKLQDtl3dRzNr2bosA0KGRvzv1Fz%2Fj6YSDEnSM4Ytk%2BJcyxoJnWVvZHK%2FfusvfrKXU129Lm3JosiY%2FR8h21jBHHu4yJf%2FHc1GCncgLbRckl0UxtUtXumuYSJ3qyITsoneRdywTN2E1Ah5PXYP94oNGuvLd%2BdGjrjx90N%2F6iqlMvhhHisdD9M%2FgjcMBdKHby7VuKEw54uNvQY6pgEJl5h2%2BoOjjYICQRDtgRaCvqs4hdDAyrCmsQgFL%2B85WB1YO59Nbpr3SeoyJQ937lJtMNQNwKiKX5lwOGVnivlTJYwkhT4RcqcUuzeOfRZuf5hXNI%2BlkuBM5zLHVHjVPUuwY9FMJC2DCiGXXAxYWoASIgLhnHEx66Z5o%2FKrPxH8RIuBZuhjc3U1b8ZdBE4xlE8Da85wCCbfSHRFYtuo7g3LIhMmAS2E&X-Amz-Signature=625e952b5abb64bb807b67928d0e003abf39c4fdfe0b3f55cb8bb7df2c9ade86&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPARJ5FJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHT%2BgsHZ3iqpTeCyQX440Gddo3Qu3mJxAQx%2Fjx9XBBt6AiBmz532HVVPX94lILZrP8UaMtRoQh7uP9vP1%2Ff5SlwxHyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXjGKvRjGHapEcGtbKtwD9WDsvLHgMUGAis0F6b9k7%2B7xnUKeTxAODZeykPs6zIcgLms9nAKaL8C0x7uRYOdJcby8WLepNOUn4eeOFKCealZakQsro4Xzld8pJ6FSnLt22ZDW3DFdp1lPWnNxfyFfsFphe54Btkp7yyzjCY4mB2PbAkGkSOwqLqwAOSNU2FU9Mu5ySqRNNmgnFdvD%2BEflgPnvh3D3p3eTFK3mInE90quPindYL%2F2O0uIX2nBITtKqZu88zE34jxFeM6E4YjjtyeOI7xDV5lolH2aMADsjIQhlbKgwxTjoysXe3j8iCszYmY7GvziAZGNM94zdg8NGj497Y2ekmB2UOe3OicrQ3CZw5GTkue58fsXEKPlBANAbQ0gRUfHcz8kfRdION%2F5PDB%2BnHKQVc5aMm5cA4fv2S0xlXeYlWntYdrUSsmQ5VklUQC50ef29O4BVKLQDtl3dRzNr2bosA0KGRvzv1Fz%2Fj6YSDEnSM4Ytk%2BJcyxoJnWVvZHK%2FfusvfrKXU129Lm3JosiY%2FR8h21jBHHu4yJf%2FHc1GCncgLbRckl0UxtUtXumuYSJ3qyITsoneRdywTN2E1Ah5PXYP94oNGuvLd%2BdGjrjx90N%2F6iqlMvhhHisdD9M%2FgjcMBdKHby7VuKEw54uNvQY6pgEJl5h2%2BoOjjYICQRDtgRaCvqs4hdDAyrCmsQgFL%2B85WB1YO59Nbpr3SeoyJQ937lJtMNQNwKiKX5lwOGVnivlTJYwkhT4RcqcUuzeOfRZuf5hXNI%2BlkuBM5zLHVHjVPUuwY9FMJC2DCiGXXAxYWoASIgLhnHEx66Z5o%2FKrPxH8RIuBZuhjc3U1b8ZdBE4xlE8Da85wCCbfSHRFYtuo7g3LIhMmAS2E&X-Amz-Signature=b3ce78eac8ceb887f8d95d936aac01442d6c28d0d10cd93970c143f0d588c2ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPARJ5FJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHT%2BgsHZ3iqpTeCyQX440Gddo3Qu3mJxAQx%2Fjx9XBBt6AiBmz532HVVPX94lILZrP8UaMtRoQh7uP9vP1%2Ff5SlwxHyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXjGKvRjGHapEcGtbKtwD9WDsvLHgMUGAis0F6b9k7%2B7xnUKeTxAODZeykPs6zIcgLms9nAKaL8C0x7uRYOdJcby8WLepNOUn4eeOFKCealZakQsro4Xzld8pJ6FSnLt22ZDW3DFdp1lPWnNxfyFfsFphe54Btkp7yyzjCY4mB2PbAkGkSOwqLqwAOSNU2FU9Mu5ySqRNNmgnFdvD%2BEflgPnvh3D3p3eTFK3mInE90quPindYL%2F2O0uIX2nBITtKqZu88zE34jxFeM6E4YjjtyeOI7xDV5lolH2aMADsjIQhlbKgwxTjoysXe3j8iCszYmY7GvziAZGNM94zdg8NGj497Y2ekmB2UOe3OicrQ3CZw5GTkue58fsXEKPlBANAbQ0gRUfHcz8kfRdION%2F5PDB%2BnHKQVc5aMm5cA4fv2S0xlXeYlWntYdrUSsmQ5VklUQC50ef29O4BVKLQDtl3dRzNr2bosA0KGRvzv1Fz%2Fj6YSDEnSM4Ytk%2BJcyxoJnWVvZHK%2FfusvfrKXU129Lm3JosiY%2FR8h21jBHHu4yJf%2FHc1GCncgLbRckl0UxtUtXumuYSJ3qyITsoneRdywTN2E1Ah5PXYP94oNGuvLd%2BdGjrjx90N%2F6iqlMvhhHisdD9M%2FgjcMBdKHby7VuKEw54uNvQY6pgEJl5h2%2BoOjjYICQRDtgRaCvqs4hdDAyrCmsQgFL%2B85WB1YO59Nbpr3SeoyJQ937lJtMNQNwKiKX5lwOGVnivlTJYwkhT4RcqcUuzeOfRZuf5hXNI%2BlkuBM5zLHVHjVPUuwY9FMJC2DCiGXXAxYWoASIgLhnHEx66Z5o%2FKrPxH8RIuBZuhjc3U1b8ZdBE4xlE8Da85wCCbfSHRFYtuo7g3LIhMmAS2E&X-Amz-Signature=6b361bda77bc984b964fb7754520b826dee3ceb22e247d9e4a7e93d66eebd3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPARJ5FJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHT%2BgsHZ3iqpTeCyQX440Gddo3Qu3mJxAQx%2Fjx9XBBt6AiBmz532HVVPX94lILZrP8UaMtRoQh7uP9vP1%2Ff5SlwxHyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXjGKvRjGHapEcGtbKtwD9WDsvLHgMUGAis0F6b9k7%2B7xnUKeTxAODZeykPs6zIcgLms9nAKaL8C0x7uRYOdJcby8WLepNOUn4eeOFKCealZakQsro4Xzld8pJ6FSnLt22ZDW3DFdp1lPWnNxfyFfsFphe54Btkp7yyzjCY4mB2PbAkGkSOwqLqwAOSNU2FU9Mu5ySqRNNmgnFdvD%2BEflgPnvh3D3p3eTFK3mInE90quPindYL%2F2O0uIX2nBITtKqZu88zE34jxFeM6E4YjjtyeOI7xDV5lolH2aMADsjIQhlbKgwxTjoysXe3j8iCszYmY7GvziAZGNM94zdg8NGj497Y2ekmB2UOe3OicrQ3CZw5GTkue58fsXEKPlBANAbQ0gRUfHcz8kfRdION%2F5PDB%2BnHKQVc5aMm5cA4fv2S0xlXeYlWntYdrUSsmQ5VklUQC50ef29O4BVKLQDtl3dRzNr2bosA0KGRvzv1Fz%2Fj6YSDEnSM4Ytk%2BJcyxoJnWVvZHK%2FfusvfrKXU129Lm3JosiY%2FR8h21jBHHu4yJf%2FHc1GCncgLbRckl0UxtUtXumuYSJ3qyITsoneRdywTN2E1Ah5PXYP94oNGuvLd%2BdGjrjx90N%2F6iqlMvhhHisdD9M%2FgjcMBdKHby7VuKEw54uNvQY6pgEJl5h2%2BoOjjYICQRDtgRaCvqs4hdDAyrCmsQgFL%2B85WB1YO59Nbpr3SeoyJQ937lJtMNQNwKiKX5lwOGVnivlTJYwkhT4RcqcUuzeOfRZuf5hXNI%2BlkuBM5zLHVHjVPUuwY9FMJC2DCiGXXAxYWoASIgLhnHEx66Z5o%2FKrPxH8RIuBZuhjc3U1b8ZdBE4xlE8Da85wCCbfSHRFYtuo7g3LIhMmAS2E&X-Amz-Signature=ce5dfa37b62f11c17f96eb98aa31877a9bd87ed6ed2cb1ac1519cb329d55e7cb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPARJ5FJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHT%2BgsHZ3iqpTeCyQX440Gddo3Qu3mJxAQx%2Fjx9XBBt6AiBmz532HVVPX94lILZrP8UaMtRoQh7uP9vP1%2Ff5SlwxHyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXjGKvRjGHapEcGtbKtwD9WDsvLHgMUGAis0F6b9k7%2B7xnUKeTxAODZeykPs6zIcgLms9nAKaL8C0x7uRYOdJcby8WLepNOUn4eeOFKCealZakQsro4Xzld8pJ6FSnLt22ZDW3DFdp1lPWnNxfyFfsFphe54Btkp7yyzjCY4mB2PbAkGkSOwqLqwAOSNU2FU9Mu5ySqRNNmgnFdvD%2BEflgPnvh3D3p3eTFK3mInE90quPindYL%2F2O0uIX2nBITtKqZu88zE34jxFeM6E4YjjtyeOI7xDV5lolH2aMADsjIQhlbKgwxTjoysXe3j8iCszYmY7GvziAZGNM94zdg8NGj497Y2ekmB2UOe3OicrQ3CZw5GTkue58fsXEKPlBANAbQ0gRUfHcz8kfRdION%2F5PDB%2BnHKQVc5aMm5cA4fv2S0xlXeYlWntYdrUSsmQ5VklUQC50ef29O4BVKLQDtl3dRzNr2bosA0KGRvzv1Fz%2Fj6YSDEnSM4Ytk%2BJcyxoJnWVvZHK%2FfusvfrKXU129Lm3JosiY%2FR8h21jBHHu4yJf%2FHc1GCncgLbRckl0UxtUtXumuYSJ3qyITsoneRdywTN2E1Ah5PXYP94oNGuvLd%2BdGjrjx90N%2F6iqlMvhhHisdD9M%2FgjcMBdKHby7VuKEw54uNvQY6pgEJl5h2%2BoOjjYICQRDtgRaCvqs4hdDAyrCmsQgFL%2B85WB1YO59Nbpr3SeoyJQ937lJtMNQNwKiKX5lwOGVnivlTJYwkhT4RcqcUuzeOfRZuf5hXNI%2BlkuBM5zLHVHjVPUuwY9FMJC2DCiGXXAxYWoASIgLhnHEx66Z5o%2FKrPxH8RIuBZuhjc3U1b8ZdBE4xlE8Da85wCCbfSHRFYtuo7g3LIhMmAS2E&X-Amz-Signature=6a2d9b10cc73bf803bec093b492d281b0492c803287515f61b2248e8b3852d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
