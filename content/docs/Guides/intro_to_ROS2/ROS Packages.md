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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3BTPLY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD1EIfwaxkGT5tmubhndcTFt278mnTQUHsw7T7xRhkBvwIhAK0GPVuIavkU3X9F3bZU8Fm8mPWX3OsPGHKfR6B1WfPmKv8DCDIQABoMNjM3NDIzMTgzODA1IgzFGP9XDtuyA2jfufEq3ANjm5ZKptfj%2BPA%2F8%2BS1wYLdMlRvDWhwe%2FR9xAbXYS77xoZdoHQxtCsvlP%2Bvm6CI05JCgPIOdw%2B1ZzOKQR3GXp65QP0RCgvegxdF6NWPq4VqWuTKJNRICxm3LdYbUFlbfnGWRE5u%2FYCe2%2B5hQaORzJyBV6hRmNpvvKGAesAarxrcV0FAvoo5xlVCxlbOGWSUhmOG%2Fk%2F7pXessBHHo4jql5FpBw0FF8UBu%2FECgaKPrboy9vtI%2B9Z%2B7kP2pmOHojnYkWwaQwrQGHcljU%2FqkWcSN5UM6MMjZgPPrLOANWuR9tBBZsmtmFiqByD%2F7PcPryxLe1rDQFoI12dJ4X6jnSqW0Pnji7%2BW%2Foniw9o1yO1XJrFoCkT%2FVQBzz1bXzuYhNUxN96Hxp82q0L%2FaCYAuI%2F%2FOIVjnmUxzVzWAaJX9d0f5wLTFTu7ZQVr17NJKygU2cQ7daiSvprWnWG2bHNOttHArrp5kjMyA1DUP1um4CW5E4IApXWFRgdbHrvqalrXy9Moz5iav8k4LtW1jRNqCIbGJgsn5jT%2Fiu%2Bud7mTjG0bQHn%2FL3FZUHWH90duJS%2FPXsWqCHkuyLPGT2cojvzi0KjAIV5EjJh1cU30xMSrl%2Fp2KY6ViJGuIDBauKVQ2THU89TC8sInJBjqkAW8OqLqv86dRujB%2BWlaZTebZnPG2Z1qx7VoCfSRvPRzIzEPqQ5LI8LxasJQK7WVvfoBXu%2BCcAMqTVpQIUxlOtLQA0OJXmed6zgXgA6C44B8W42IlfSHm%2BSMDpHYZxxGDO8IjRj3g3wkR8Ff6uz1wKe8qwaeCHZa7vIRctFGljl6ZzrSE9rnQhalUpH00rBIXWL%2Fb%2FRfvh7eEgL7mxV7s0VRfoN%2Bc&X-Amz-Signature=5533a00b432492230f77c1450218ca272f1f0d314e2b84e39ebcdb3d63b92527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3BTPLY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD1EIfwaxkGT5tmubhndcTFt278mnTQUHsw7T7xRhkBvwIhAK0GPVuIavkU3X9F3bZU8Fm8mPWX3OsPGHKfR6B1WfPmKv8DCDIQABoMNjM3NDIzMTgzODA1IgzFGP9XDtuyA2jfufEq3ANjm5ZKptfj%2BPA%2F8%2BS1wYLdMlRvDWhwe%2FR9xAbXYS77xoZdoHQxtCsvlP%2Bvm6CI05JCgPIOdw%2B1ZzOKQR3GXp65QP0RCgvegxdF6NWPq4VqWuTKJNRICxm3LdYbUFlbfnGWRE5u%2FYCe2%2B5hQaORzJyBV6hRmNpvvKGAesAarxrcV0FAvoo5xlVCxlbOGWSUhmOG%2Fk%2F7pXessBHHo4jql5FpBw0FF8UBu%2FECgaKPrboy9vtI%2B9Z%2B7kP2pmOHojnYkWwaQwrQGHcljU%2FqkWcSN5UM6MMjZgPPrLOANWuR9tBBZsmtmFiqByD%2F7PcPryxLe1rDQFoI12dJ4X6jnSqW0Pnji7%2BW%2Foniw9o1yO1XJrFoCkT%2FVQBzz1bXzuYhNUxN96Hxp82q0L%2FaCYAuI%2F%2FOIVjnmUxzVzWAaJX9d0f5wLTFTu7ZQVr17NJKygU2cQ7daiSvprWnWG2bHNOttHArrp5kjMyA1DUP1um4CW5E4IApXWFRgdbHrvqalrXy9Moz5iav8k4LtW1jRNqCIbGJgsn5jT%2Fiu%2Bud7mTjG0bQHn%2FL3FZUHWH90duJS%2FPXsWqCHkuyLPGT2cojvzi0KjAIV5EjJh1cU30xMSrl%2Fp2KY6ViJGuIDBauKVQ2THU89TC8sInJBjqkAW8OqLqv86dRujB%2BWlaZTebZnPG2Z1qx7VoCfSRvPRzIzEPqQ5LI8LxasJQK7WVvfoBXu%2BCcAMqTVpQIUxlOtLQA0OJXmed6zgXgA6C44B8W42IlfSHm%2BSMDpHYZxxGDO8IjRj3g3wkR8Ff6uz1wKe8qwaeCHZa7vIRctFGljl6ZzrSE9rnQhalUpH00rBIXWL%2Fb%2FRfvh7eEgL7mxV7s0VRfoN%2Bc&X-Amz-Signature=c5934019570a5ec598216b155310aa51c771e01df2c337e3df4f87b362c3d8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3BTPLY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD1EIfwaxkGT5tmubhndcTFt278mnTQUHsw7T7xRhkBvwIhAK0GPVuIavkU3X9F3bZU8Fm8mPWX3OsPGHKfR6B1WfPmKv8DCDIQABoMNjM3NDIzMTgzODA1IgzFGP9XDtuyA2jfufEq3ANjm5ZKptfj%2BPA%2F8%2BS1wYLdMlRvDWhwe%2FR9xAbXYS77xoZdoHQxtCsvlP%2Bvm6CI05JCgPIOdw%2B1ZzOKQR3GXp65QP0RCgvegxdF6NWPq4VqWuTKJNRICxm3LdYbUFlbfnGWRE5u%2FYCe2%2B5hQaORzJyBV6hRmNpvvKGAesAarxrcV0FAvoo5xlVCxlbOGWSUhmOG%2Fk%2F7pXessBHHo4jql5FpBw0FF8UBu%2FECgaKPrboy9vtI%2B9Z%2B7kP2pmOHojnYkWwaQwrQGHcljU%2FqkWcSN5UM6MMjZgPPrLOANWuR9tBBZsmtmFiqByD%2F7PcPryxLe1rDQFoI12dJ4X6jnSqW0Pnji7%2BW%2Foniw9o1yO1XJrFoCkT%2FVQBzz1bXzuYhNUxN96Hxp82q0L%2FaCYAuI%2F%2FOIVjnmUxzVzWAaJX9d0f5wLTFTu7ZQVr17NJKygU2cQ7daiSvprWnWG2bHNOttHArrp5kjMyA1DUP1um4CW5E4IApXWFRgdbHrvqalrXy9Moz5iav8k4LtW1jRNqCIbGJgsn5jT%2Fiu%2Bud7mTjG0bQHn%2FL3FZUHWH90duJS%2FPXsWqCHkuyLPGT2cojvzi0KjAIV5EjJh1cU30xMSrl%2Fp2KY6ViJGuIDBauKVQ2THU89TC8sInJBjqkAW8OqLqv86dRujB%2BWlaZTebZnPG2Z1qx7VoCfSRvPRzIzEPqQ5LI8LxasJQK7WVvfoBXu%2BCcAMqTVpQIUxlOtLQA0OJXmed6zgXgA6C44B8W42IlfSHm%2BSMDpHYZxxGDO8IjRj3g3wkR8Ff6uz1wKe8qwaeCHZa7vIRctFGljl6ZzrSE9rnQhalUpH00rBIXWL%2Fb%2FRfvh7eEgL7mxV7s0VRfoN%2Bc&X-Amz-Signature=337446f8b8f1d72eb169ff48cda47facd1817288bf761537fd7e35406a13578a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3BTPLY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD1EIfwaxkGT5tmubhndcTFt278mnTQUHsw7T7xRhkBvwIhAK0GPVuIavkU3X9F3bZU8Fm8mPWX3OsPGHKfR6B1WfPmKv8DCDIQABoMNjM3NDIzMTgzODA1IgzFGP9XDtuyA2jfufEq3ANjm5ZKptfj%2BPA%2F8%2BS1wYLdMlRvDWhwe%2FR9xAbXYS77xoZdoHQxtCsvlP%2Bvm6CI05JCgPIOdw%2B1ZzOKQR3GXp65QP0RCgvegxdF6NWPq4VqWuTKJNRICxm3LdYbUFlbfnGWRE5u%2FYCe2%2B5hQaORzJyBV6hRmNpvvKGAesAarxrcV0FAvoo5xlVCxlbOGWSUhmOG%2Fk%2F7pXessBHHo4jql5FpBw0FF8UBu%2FECgaKPrboy9vtI%2B9Z%2B7kP2pmOHojnYkWwaQwrQGHcljU%2FqkWcSN5UM6MMjZgPPrLOANWuR9tBBZsmtmFiqByD%2F7PcPryxLe1rDQFoI12dJ4X6jnSqW0Pnji7%2BW%2Foniw9o1yO1XJrFoCkT%2FVQBzz1bXzuYhNUxN96Hxp82q0L%2FaCYAuI%2F%2FOIVjnmUxzVzWAaJX9d0f5wLTFTu7ZQVr17NJKygU2cQ7daiSvprWnWG2bHNOttHArrp5kjMyA1DUP1um4CW5E4IApXWFRgdbHrvqalrXy9Moz5iav8k4LtW1jRNqCIbGJgsn5jT%2Fiu%2Bud7mTjG0bQHn%2FL3FZUHWH90duJS%2FPXsWqCHkuyLPGT2cojvzi0KjAIV5EjJh1cU30xMSrl%2Fp2KY6ViJGuIDBauKVQ2THU89TC8sInJBjqkAW8OqLqv86dRujB%2BWlaZTebZnPG2Z1qx7VoCfSRvPRzIzEPqQ5LI8LxasJQK7WVvfoBXu%2BCcAMqTVpQIUxlOtLQA0OJXmed6zgXgA6C44B8W42IlfSHm%2BSMDpHYZxxGDO8IjRj3g3wkR8Ff6uz1wKe8qwaeCHZa7vIRctFGljl6ZzrSE9rnQhalUpH00rBIXWL%2Fb%2FRfvh7eEgL7mxV7s0VRfoN%2Bc&X-Amz-Signature=9b00f8759b0a5373d310ad8ffe6a70559c5cad6d1d8b66f4f4e5216538e24609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3BTPLY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD1EIfwaxkGT5tmubhndcTFt278mnTQUHsw7T7xRhkBvwIhAK0GPVuIavkU3X9F3bZU8Fm8mPWX3OsPGHKfR6B1WfPmKv8DCDIQABoMNjM3NDIzMTgzODA1IgzFGP9XDtuyA2jfufEq3ANjm5ZKptfj%2BPA%2F8%2BS1wYLdMlRvDWhwe%2FR9xAbXYS77xoZdoHQxtCsvlP%2Bvm6CI05JCgPIOdw%2B1ZzOKQR3GXp65QP0RCgvegxdF6NWPq4VqWuTKJNRICxm3LdYbUFlbfnGWRE5u%2FYCe2%2B5hQaORzJyBV6hRmNpvvKGAesAarxrcV0FAvoo5xlVCxlbOGWSUhmOG%2Fk%2F7pXessBHHo4jql5FpBw0FF8UBu%2FECgaKPrboy9vtI%2B9Z%2B7kP2pmOHojnYkWwaQwrQGHcljU%2FqkWcSN5UM6MMjZgPPrLOANWuR9tBBZsmtmFiqByD%2F7PcPryxLe1rDQFoI12dJ4X6jnSqW0Pnji7%2BW%2Foniw9o1yO1XJrFoCkT%2FVQBzz1bXzuYhNUxN96Hxp82q0L%2FaCYAuI%2F%2FOIVjnmUxzVzWAaJX9d0f5wLTFTu7ZQVr17NJKygU2cQ7daiSvprWnWG2bHNOttHArrp5kjMyA1DUP1um4CW5E4IApXWFRgdbHrvqalrXy9Moz5iav8k4LtW1jRNqCIbGJgsn5jT%2Fiu%2Bud7mTjG0bQHn%2FL3FZUHWH90duJS%2FPXsWqCHkuyLPGT2cojvzi0KjAIV5EjJh1cU30xMSrl%2Fp2KY6ViJGuIDBauKVQ2THU89TC8sInJBjqkAW8OqLqv86dRujB%2BWlaZTebZnPG2Z1qx7VoCfSRvPRzIzEPqQ5LI8LxasJQK7WVvfoBXu%2BCcAMqTVpQIUxlOtLQA0OJXmed6zgXgA6C44B8W42IlfSHm%2BSMDpHYZxxGDO8IjRj3g3wkR8Ff6uz1wKe8qwaeCHZa7vIRctFGljl6ZzrSE9rnQhalUpH00rBIXWL%2Fb%2FRfvh7eEgL7mxV7s0VRfoN%2Bc&X-Amz-Signature=9c50f7bc613cab004387d9f3047b98ba0dd59b6816043cb6916e955797fa76de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3BTPLY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD1EIfwaxkGT5tmubhndcTFt278mnTQUHsw7T7xRhkBvwIhAK0GPVuIavkU3X9F3bZU8Fm8mPWX3OsPGHKfR6B1WfPmKv8DCDIQABoMNjM3NDIzMTgzODA1IgzFGP9XDtuyA2jfufEq3ANjm5ZKptfj%2BPA%2F8%2BS1wYLdMlRvDWhwe%2FR9xAbXYS77xoZdoHQxtCsvlP%2Bvm6CI05JCgPIOdw%2B1ZzOKQR3GXp65QP0RCgvegxdF6NWPq4VqWuTKJNRICxm3LdYbUFlbfnGWRE5u%2FYCe2%2B5hQaORzJyBV6hRmNpvvKGAesAarxrcV0FAvoo5xlVCxlbOGWSUhmOG%2Fk%2F7pXessBHHo4jql5FpBw0FF8UBu%2FECgaKPrboy9vtI%2B9Z%2B7kP2pmOHojnYkWwaQwrQGHcljU%2FqkWcSN5UM6MMjZgPPrLOANWuR9tBBZsmtmFiqByD%2F7PcPryxLe1rDQFoI12dJ4X6jnSqW0Pnji7%2BW%2Foniw9o1yO1XJrFoCkT%2FVQBzz1bXzuYhNUxN96Hxp82q0L%2FaCYAuI%2F%2FOIVjnmUxzVzWAaJX9d0f5wLTFTu7ZQVr17NJKygU2cQ7daiSvprWnWG2bHNOttHArrp5kjMyA1DUP1um4CW5E4IApXWFRgdbHrvqalrXy9Moz5iav8k4LtW1jRNqCIbGJgsn5jT%2Fiu%2Bud7mTjG0bQHn%2FL3FZUHWH90duJS%2FPXsWqCHkuyLPGT2cojvzi0KjAIV5EjJh1cU30xMSrl%2Fp2KY6ViJGuIDBauKVQ2THU89TC8sInJBjqkAW8OqLqv86dRujB%2BWlaZTebZnPG2Z1qx7VoCfSRvPRzIzEPqQ5LI8LxasJQK7WVvfoBXu%2BCcAMqTVpQIUxlOtLQA0OJXmed6zgXgA6C44B8W42IlfSHm%2BSMDpHYZxxGDO8IjRj3g3wkR8Ff6uz1wKe8qwaeCHZa7vIRctFGljl6ZzrSE9rnQhalUpH00rBIXWL%2Fb%2FRfvh7eEgL7mxV7s0VRfoN%2Bc&X-Amz-Signature=0b2c666f2d899534f913effeffb8ea6fc5b95157b507cf0607080e2a23dc9980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3BTPLY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD1EIfwaxkGT5tmubhndcTFt278mnTQUHsw7T7xRhkBvwIhAK0GPVuIavkU3X9F3bZU8Fm8mPWX3OsPGHKfR6B1WfPmKv8DCDIQABoMNjM3NDIzMTgzODA1IgzFGP9XDtuyA2jfufEq3ANjm5ZKptfj%2BPA%2F8%2BS1wYLdMlRvDWhwe%2FR9xAbXYS77xoZdoHQxtCsvlP%2Bvm6CI05JCgPIOdw%2B1ZzOKQR3GXp65QP0RCgvegxdF6NWPq4VqWuTKJNRICxm3LdYbUFlbfnGWRE5u%2FYCe2%2B5hQaORzJyBV6hRmNpvvKGAesAarxrcV0FAvoo5xlVCxlbOGWSUhmOG%2Fk%2F7pXessBHHo4jql5FpBw0FF8UBu%2FECgaKPrboy9vtI%2B9Z%2B7kP2pmOHojnYkWwaQwrQGHcljU%2FqkWcSN5UM6MMjZgPPrLOANWuR9tBBZsmtmFiqByD%2F7PcPryxLe1rDQFoI12dJ4X6jnSqW0Pnji7%2BW%2Foniw9o1yO1XJrFoCkT%2FVQBzz1bXzuYhNUxN96Hxp82q0L%2FaCYAuI%2F%2FOIVjnmUxzVzWAaJX9d0f5wLTFTu7ZQVr17NJKygU2cQ7daiSvprWnWG2bHNOttHArrp5kjMyA1DUP1um4CW5E4IApXWFRgdbHrvqalrXy9Moz5iav8k4LtW1jRNqCIbGJgsn5jT%2Fiu%2Bud7mTjG0bQHn%2FL3FZUHWH90duJS%2FPXsWqCHkuyLPGT2cojvzi0KjAIV5EjJh1cU30xMSrl%2Fp2KY6ViJGuIDBauKVQ2THU89TC8sInJBjqkAW8OqLqv86dRujB%2BWlaZTebZnPG2Z1qx7VoCfSRvPRzIzEPqQ5LI8LxasJQK7WVvfoBXu%2BCcAMqTVpQIUxlOtLQA0OJXmed6zgXgA6C44B8W42IlfSHm%2BSMDpHYZxxGDO8IjRj3g3wkR8Ff6uz1wKe8qwaeCHZa7vIRctFGljl6ZzrSE9rnQhalUpH00rBIXWL%2Fb%2FRfvh7eEgL7mxV7s0VRfoN%2Bc&X-Amz-Signature=84c3f1d776ac9f0b423500b9160a9a0513e2acf36d8101d1d16c543f1b47fba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
