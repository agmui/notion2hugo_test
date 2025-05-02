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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJTBPWY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2B6a34R%2Ba2nNaaj%2BmeX5Em2s7JYEMkd9j%2F1xMYlHZC3AIhANfqPnHQTWKXUZejOTb0ecBRlRt70ojUn2QbH%2FA3W7eIKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzrhoXBqUKF0eIfGIq3AMuQb2JwMaHB%2B3gHJqFZuNq0zrdlsPgfKLbE%2F8shhh9LprmfvfBNhq1q5ZtWBVvGtsKf0%2FunvtRIlQZNXWbL33kPvLw9LUjFEK3gxGToxF9oJkKJeALnmVZWUg6RCXSiOZAV9knwwZsBwqRQsSr%2FIWcO1JBYS1bw20l%2F9LnZ7AiR2UV7pa5yMGYoMyn6AkS8dgyRGZllXY7QFLuXxL%2BVZxbRFlUJahRePf4CW0wbgwW4NbmgPWbuIku1NvrONyHkOEBF4YEU8REIlODPCLA%2BiM528JfQU5VCLsscwRv2bCu%2FBZC0stvMIASn52rnW23QGCRk194PxEz4Kj48jVRztnZVHX%2Bm%2BxQotxdhiELQrMDydylnvJ0iBpKuEeicIg7eJyaB2u7aWG05WZ8wxA66z2M1OjbGqm2EFrDt8Oiin%2Be5FzEE3WEprAE43DjQUaPVKmwz7h5m844kEstFZXODmNxCgc1XMkKIkLe1vIX6FpiYstVNjtBkqEq9q299TsAiILzy2slxgEteeEuSuM2hZXfqH3sHiZnI7YcU3f9B1qjsMvTohrOZTsdU8qs9HlCJlcBIwpKcfQx5mDuYQzPsWUMKTKC%2ByNzMIVesWGszPwujwXZtxm93UA4SyQPuDDjyNPABjqkAeafUseJxGLbQUcqCvul2KkII%2FqnvB0UI7VXbjb2qEls42FNoVOelc1qVGYmVf6CUNCk3JIw12JdIdmP6aG9LY2qh%2BgLiFtZ993MBSrYSBg7Wg5q427AE%2BlGngIJHvH3vU9oIXV16fwvXCMYuwJVEDFQCvvqZlticGa0HVy0rrhhSsvbVmE%2Bdg5rkpUTz2DGRg4YWqYATfoaVDBNeipo8aOLRq8l&X-Amz-Signature=f281e881ec60cbe39d496fbb1bb2da2bcafa3cd636419448f987ac4d47eff2c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJTBPWY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2B6a34R%2Ba2nNaaj%2BmeX5Em2s7JYEMkd9j%2F1xMYlHZC3AIhANfqPnHQTWKXUZejOTb0ecBRlRt70ojUn2QbH%2FA3W7eIKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzrhoXBqUKF0eIfGIq3AMuQb2JwMaHB%2B3gHJqFZuNq0zrdlsPgfKLbE%2F8shhh9LprmfvfBNhq1q5ZtWBVvGtsKf0%2FunvtRIlQZNXWbL33kPvLw9LUjFEK3gxGToxF9oJkKJeALnmVZWUg6RCXSiOZAV9knwwZsBwqRQsSr%2FIWcO1JBYS1bw20l%2F9LnZ7AiR2UV7pa5yMGYoMyn6AkS8dgyRGZllXY7QFLuXxL%2BVZxbRFlUJahRePf4CW0wbgwW4NbmgPWbuIku1NvrONyHkOEBF4YEU8REIlODPCLA%2BiM528JfQU5VCLsscwRv2bCu%2FBZC0stvMIASn52rnW23QGCRk194PxEz4Kj48jVRztnZVHX%2Bm%2BxQotxdhiELQrMDydylnvJ0iBpKuEeicIg7eJyaB2u7aWG05WZ8wxA66z2M1OjbGqm2EFrDt8Oiin%2Be5FzEE3WEprAE43DjQUaPVKmwz7h5m844kEstFZXODmNxCgc1XMkKIkLe1vIX6FpiYstVNjtBkqEq9q299TsAiILzy2slxgEteeEuSuM2hZXfqH3sHiZnI7YcU3f9B1qjsMvTohrOZTsdU8qs9HlCJlcBIwpKcfQx5mDuYQzPsWUMKTKC%2ByNzMIVesWGszPwujwXZtxm93UA4SyQPuDDjyNPABjqkAeafUseJxGLbQUcqCvul2KkII%2FqnvB0UI7VXbjb2qEls42FNoVOelc1qVGYmVf6CUNCk3JIw12JdIdmP6aG9LY2qh%2BgLiFtZ993MBSrYSBg7Wg5q427AE%2BlGngIJHvH3vU9oIXV16fwvXCMYuwJVEDFQCvvqZlticGa0HVy0rrhhSsvbVmE%2Bdg5rkpUTz2DGRg4YWqYATfoaVDBNeipo8aOLRq8l&X-Amz-Signature=25a47c172a70c92e3c33b5a0f279cf6540bb07ecd27b4e36be4a16fd1a42244f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJTBPWY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2B6a34R%2Ba2nNaaj%2BmeX5Em2s7JYEMkd9j%2F1xMYlHZC3AIhANfqPnHQTWKXUZejOTb0ecBRlRt70ojUn2QbH%2FA3W7eIKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzrhoXBqUKF0eIfGIq3AMuQb2JwMaHB%2B3gHJqFZuNq0zrdlsPgfKLbE%2F8shhh9LprmfvfBNhq1q5ZtWBVvGtsKf0%2FunvtRIlQZNXWbL33kPvLw9LUjFEK3gxGToxF9oJkKJeALnmVZWUg6RCXSiOZAV9knwwZsBwqRQsSr%2FIWcO1JBYS1bw20l%2F9LnZ7AiR2UV7pa5yMGYoMyn6AkS8dgyRGZllXY7QFLuXxL%2BVZxbRFlUJahRePf4CW0wbgwW4NbmgPWbuIku1NvrONyHkOEBF4YEU8REIlODPCLA%2BiM528JfQU5VCLsscwRv2bCu%2FBZC0stvMIASn52rnW23QGCRk194PxEz4Kj48jVRztnZVHX%2Bm%2BxQotxdhiELQrMDydylnvJ0iBpKuEeicIg7eJyaB2u7aWG05WZ8wxA66z2M1OjbGqm2EFrDt8Oiin%2Be5FzEE3WEprAE43DjQUaPVKmwz7h5m844kEstFZXODmNxCgc1XMkKIkLe1vIX6FpiYstVNjtBkqEq9q299TsAiILzy2slxgEteeEuSuM2hZXfqH3sHiZnI7YcU3f9B1qjsMvTohrOZTsdU8qs9HlCJlcBIwpKcfQx5mDuYQzPsWUMKTKC%2ByNzMIVesWGszPwujwXZtxm93UA4SyQPuDDjyNPABjqkAeafUseJxGLbQUcqCvul2KkII%2FqnvB0UI7VXbjb2qEls42FNoVOelc1qVGYmVf6CUNCk3JIw12JdIdmP6aG9LY2qh%2BgLiFtZ993MBSrYSBg7Wg5q427AE%2BlGngIJHvH3vU9oIXV16fwvXCMYuwJVEDFQCvvqZlticGa0HVy0rrhhSsvbVmE%2Bdg5rkpUTz2DGRg4YWqYATfoaVDBNeipo8aOLRq8l&X-Amz-Signature=5bac565d513e10e81bec203d7be619bd9b9a59308568b32d75ed9a6a2e56fe2e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJTBPWY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2B6a34R%2Ba2nNaaj%2BmeX5Em2s7JYEMkd9j%2F1xMYlHZC3AIhANfqPnHQTWKXUZejOTb0ecBRlRt70ojUn2QbH%2FA3W7eIKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzrhoXBqUKF0eIfGIq3AMuQb2JwMaHB%2B3gHJqFZuNq0zrdlsPgfKLbE%2F8shhh9LprmfvfBNhq1q5ZtWBVvGtsKf0%2FunvtRIlQZNXWbL33kPvLw9LUjFEK3gxGToxF9oJkKJeALnmVZWUg6RCXSiOZAV9knwwZsBwqRQsSr%2FIWcO1JBYS1bw20l%2F9LnZ7AiR2UV7pa5yMGYoMyn6AkS8dgyRGZllXY7QFLuXxL%2BVZxbRFlUJahRePf4CW0wbgwW4NbmgPWbuIku1NvrONyHkOEBF4YEU8REIlODPCLA%2BiM528JfQU5VCLsscwRv2bCu%2FBZC0stvMIASn52rnW23QGCRk194PxEz4Kj48jVRztnZVHX%2Bm%2BxQotxdhiELQrMDydylnvJ0iBpKuEeicIg7eJyaB2u7aWG05WZ8wxA66z2M1OjbGqm2EFrDt8Oiin%2Be5FzEE3WEprAE43DjQUaPVKmwz7h5m844kEstFZXODmNxCgc1XMkKIkLe1vIX6FpiYstVNjtBkqEq9q299TsAiILzy2slxgEteeEuSuM2hZXfqH3sHiZnI7YcU3f9B1qjsMvTohrOZTsdU8qs9HlCJlcBIwpKcfQx5mDuYQzPsWUMKTKC%2ByNzMIVesWGszPwujwXZtxm93UA4SyQPuDDjyNPABjqkAeafUseJxGLbQUcqCvul2KkII%2FqnvB0UI7VXbjb2qEls42FNoVOelc1qVGYmVf6CUNCk3JIw12JdIdmP6aG9LY2qh%2BgLiFtZ993MBSrYSBg7Wg5q427AE%2BlGngIJHvH3vU9oIXV16fwvXCMYuwJVEDFQCvvqZlticGa0HVy0rrhhSsvbVmE%2Bdg5rkpUTz2DGRg4YWqYATfoaVDBNeipo8aOLRq8l&X-Amz-Signature=a755ec281570702cf81ed20e551e550a23cea549aaa65d4e81d7fcccfef7ea08&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJTBPWY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2B6a34R%2Ba2nNaaj%2BmeX5Em2s7JYEMkd9j%2F1xMYlHZC3AIhANfqPnHQTWKXUZejOTb0ecBRlRt70ojUn2QbH%2FA3W7eIKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzrhoXBqUKF0eIfGIq3AMuQb2JwMaHB%2B3gHJqFZuNq0zrdlsPgfKLbE%2F8shhh9LprmfvfBNhq1q5ZtWBVvGtsKf0%2FunvtRIlQZNXWbL33kPvLw9LUjFEK3gxGToxF9oJkKJeALnmVZWUg6RCXSiOZAV9knwwZsBwqRQsSr%2FIWcO1JBYS1bw20l%2F9LnZ7AiR2UV7pa5yMGYoMyn6AkS8dgyRGZllXY7QFLuXxL%2BVZxbRFlUJahRePf4CW0wbgwW4NbmgPWbuIku1NvrONyHkOEBF4YEU8REIlODPCLA%2BiM528JfQU5VCLsscwRv2bCu%2FBZC0stvMIASn52rnW23QGCRk194PxEz4Kj48jVRztnZVHX%2Bm%2BxQotxdhiELQrMDydylnvJ0iBpKuEeicIg7eJyaB2u7aWG05WZ8wxA66z2M1OjbGqm2EFrDt8Oiin%2Be5FzEE3WEprAE43DjQUaPVKmwz7h5m844kEstFZXODmNxCgc1XMkKIkLe1vIX6FpiYstVNjtBkqEq9q299TsAiILzy2slxgEteeEuSuM2hZXfqH3sHiZnI7YcU3f9B1qjsMvTohrOZTsdU8qs9HlCJlcBIwpKcfQx5mDuYQzPsWUMKTKC%2ByNzMIVesWGszPwujwXZtxm93UA4SyQPuDDjyNPABjqkAeafUseJxGLbQUcqCvul2KkII%2FqnvB0UI7VXbjb2qEls42FNoVOelc1qVGYmVf6CUNCk3JIw12JdIdmP6aG9LY2qh%2BgLiFtZ993MBSrYSBg7Wg5q427AE%2BlGngIJHvH3vU9oIXV16fwvXCMYuwJVEDFQCvvqZlticGa0HVy0rrhhSsvbVmE%2Bdg5rkpUTz2DGRg4YWqYATfoaVDBNeipo8aOLRq8l&X-Amz-Signature=6041e26cc3d22672d645e887166429d9aac1b20f83382494c30eeac01c0866f8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJTBPWY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2B6a34R%2Ba2nNaaj%2BmeX5Em2s7JYEMkd9j%2F1xMYlHZC3AIhANfqPnHQTWKXUZejOTb0ecBRlRt70ojUn2QbH%2FA3W7eIKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzrhoXBqUKF0eIfGIq3AMuQb2JwMaHB%2B3gHJqFZuNq0zrdlsPgfKLbE%2F8shhh9LprmfvfBNhq1q5ZtWBVvGtsKf0%2FunvtRIlQZNXWbL33kPvLw9LUjFEK3gxGToxF9oJkKJeALnmVZWUg6RCXSiOZAV9knwwZsBwqRQsSr%2FIWcO1JBYS1bw20l%2F9LnZ7AiR2UV7pa5yMGYoMyn6AkS8dgyRGZllXY7QFLuXxL%2BVZxbRFlUJahRePf4CW0wbgwW4NbmgPWbuIku1NvrONyHkOEBF4YEU8REIlODPCLA%2BiM528JfQU5VCLsscwRv2bCu%2FBZC0stvMIASn52rnW23QGCRk194PxEz4Kj48jVRztnZVHX%2Bm%2BxQotxdhiELQrMDydylnvJ0iBpKuEeicIg7eJyaB2u7aWG05WZ8wxA66z2M1OjbGqm2EFrDt8Oiin%2Be5FzEE3WEprAE43DjQUaPVKmwz7h5m844kEstFZXODmNxCgc1XMkKIkLe1vIX6FpiYstVNjtBkqEq9q299TsAiILzy2slxgEteeEuSuM2hZXfqH3sHiZnI7YcU3f9B1qjsMvTohrOZTsdU8qs9HlCJlcBIwpKcfQx5mDuYQzPsWUMKTKC%2ByNzMIVesWGszPwujwXZtxm93UA4SyQPuDDjyNPABjqkAeafUseJxGLbQUcqCvul2KkII%2FqnvB0UI7VXbjb2qEls42FNoVOelc1qVGYmVf6CUNCk3JIw12JdIdmP6aG9LY2qh%2BgLiFtZ993MBSrYSBg7Wg5q427AE%2BlGngIJHvH3vU9oIXV16fwvXCMYuwJVEDFQCvvqZlticGa0HVy0rrhhSsvbVmE%2Bdg5rkpUTz2DGRg4YWqYATfoaVDBNeipo8aOLRq8l&X-Amz-Signature=2e89c488cce6064f1d605b771d620fb373758d91648c951403e932e7d79067f7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJTBPWY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2B6a34R%2Ba2nNaaj%2BmeX5Em2s7JYEMkd9j%2F1xMYlHZC3AIhANfqPnHQTWKXUZejOTb0ecBRlRt70ojUn2QbH%2FA3W7eIKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzrhoXBqUKF0eIfGIq3AMuQb2JwMaHB%2B3gHJqFZuNq0zrdlsPgfKLbE%2F8shhh9LprmfvfBNhq1q5ZtWBVvGtsKf0%2FunvtRIlQZNXWbL33kPvLw9LUjFEK3gxGToxF9oJkKJeALnmVZWUg6RCXSiOZAV9knwwZsBwqRQsSr%2FIWcO1JBYS1bw20l%2F9LnZ7AiR2UV7pa5yMGYoMyn6AkS8dgyRGZllXY7QFLuXxL%2BVZxbRFlUJahRePf4CW0wbgwW4NbmgPWbuIku1NvrONyHkOEBF4YEU8REIlODPCLA%2BiM528JfQU5VCLsscwRv2bCu%2FBZC0stvMIASn52rnW23QGCRk194PxEz4Kj48jVRztnZVHX%2Bm%2BxQotxdhiELQrMDydylnvJ0iBpKuEeicIg7eJyaB2u7aWG05WZ8wxA66z2M1OjbGqm2EFrDt8Oiin%2Be5FzEE3WEprAE43DjQUaPVKmwz7h5m844kEstFZXODmNxCgc1XMkKIkLe1vIX6FpiYstVNjtBkqEq9q299TsAiILzy2slxgEteeEuSuM2hZXfqH3sHiZnI7YcU3f9B1qjsMvTohrOZTsdU8qs9HlCJlcBIwpKcfQx5mDuYQzPsWUMKTKC%2ByNzMIVesWGszPwujwXZtxm93UA4SyQPuDDjyNPABjqkAeafUseJxGLbQUcqCvul2KkII%2FqnvB0UI7VXbjb2qEls42FNoVOelc1qVGYmVf6CUNCk3JIw12JdIdmP6aG9LY2qh%2BgLiFtZ993MBSrYSBg7Wg5q427AE%2BlGngIJHvH3vU9oIXV16fwvXCMYuwJVEDFQCvvqZlticGa0HVy0rrhhSsvbVmE%2Bdg5rkpUTz2DGRg4YWqYATfoaVDBNeipo8aOLRq8l&X-Amz-Signature=b9f7ea925d241400cf830c95836c1c5f2bb6a8d9f7410e93501360f3c38bce92&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
