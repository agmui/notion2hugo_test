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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOKPIWZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFziVK1xlvNw%2BdwcFI3tUZZTFG%2FzpbrorN9sQDty58d6AiEAlbe5qGjgE2Bq8thMFMCPmsSYH4MYF4oiazJ0b7KjHkUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTVUW0YAgaw1LkgqSrcAy%2B6XQKgizcadz5tnOJHGpOeAhvqRZUQeh%2BIyewRfiEa4jsU%2BvgMati1y%2FHWednpBxKFvDhcdogQC%2FDeiReUunZAM1ldsmuYZn3CXFrdEr9v4q9RGul3Jrvv67ndk2NvvahpcL4%2B39HQEA5dCkFqCLoFnt5RyO3HmQlcLQ6WJsFdh98HT1TOTWGL0MUSxyGJqyEBjwfPs6527XcBll%2FCU1fnwQkoadO7UV84%2BZmibsP5M4qZq89bNb21e8tQPJVB56NVN9552gtNMSEuGBN%2F3NWxysBzjDVsIuQtfdKfyadTnxaPDZWkSBIW1hUCip7v3gxm8kazIXWtiXHVca2tALqndez9HBKGFGbV3J9L4IrLH1Yx71PNYK8yUKdY%2BHBR13mzJeCtI1PAfxi6bgyDrrseukaaHgfUjtl82VvQ9q5fUEPq9gDKNz6XXfoH4KBXluxxrYBlO7NXykjQXuG6jsWXOezK%2BAT%2FEU0dM1WHrbgGByU%2B0UfZhZrQhRszNk9cgVojqHsfsgaR3LT99GQlWZTwEYsE4WKyu9p4g6%2FPfZKIz%2BIT55cnsAgdjGEEMZjxnj4%2FDqDQOQEOCIiYuVKZNZ85to1P6pEBLt1hmPtFw5RxllIsBpVlgrLqRAadMJ%2FQhr4GOqUB5%2FsyMIRw6nhaZW2a5nf4BM91dy0lsyMqZ5GIbSW%2FncZVuSJB1FsJwPme%2Bg4mcNZMH9MTCm3QSwBr%2BrvgBrW9s3aTfTKUAhe2mM83AyJC%2BCjl8h5RjRTD2zuZi1Ig4vnIxwcaxzg9294VPeJn%2FbJzuJ2ewayQLLrfkZs73DEyfkj5ZP51D0pWJeWq8l1%2F7l6cxQNTRFqYZZqPTpAtjL3p%2BFQREm5j&X-Amz-Signature=94718ef3d6b2e3ed3ab6efc86352b7a058e0c425de43e35ebe92e06cace1a256&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOKPIWZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFziVK1xlvNw%2BdwcFI3tUZZTFG%2FzpbrorN9sQDty58d6AiEAlbe5qGjgE2Bq8thMFMCPmsSYH4MYF4oiazJ0b7KjHkUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTVUW0YAgaw1LkgqSrcAy%2B6XQKgizcadz5tnOJHGpOeAhvqRZUQeh%2BIyewRfiEa4jsU%2BvgMati1y%2FHWednpBxKFvDhcdogQC%2FDeiReUunZAM1ldsmuYZn3CXFrdEr9v4q9RGul3Jrvv67ndk2NvvahpcL4%2B39HQEA5dCkFqCLoFnt5RyO3HmQlcLQ6WJsFdh98HT1TOTWGL0MUSxyGJqyEBjwfPs6527XcBll%2FCU1fnwQkoadO7UV84%2BZmibsP5M4qZq89bNb21e8tQPJVB56NVN9552gtNMSEuGBN%2F3NWxysBzjDVsIuQtfdKfyadTnxaPDZWkSBIW1hUCip7v3gxm8kazIXWtiXHVca2tALqndez9HBKGFGbV3J9L4IrLH1Yx71PNYK8yUKdY%2BHBR13mzJeCtI1PAfxi6bgyDrrseukaaHgfUjtl82VvQ9q5fUEPq9gDKNz6XXfoH4KBXluxxrYBlO7NXykjQXuG6jsWXOezK%2BAT%2FEU0dM1WHrbgGByU%2B0UfZhZrQhRszNk9cgVojqHsfsgaR3LT99GQlWZTwEYsE4WKyu9p4g6%2FPfZKIz%2BIT55cnsAgdjGEEMZjxnj4%2FDqDQOQEOCIiYuVKZNZ85to1P6pEBLt1hmPtFw5RxllIsBpVlgrLqRAadMJ%2FQhr4GOqUB5%2FsyMIRw6nhaZW2a5nf4BM91dy0lsyMqZ5GIbSW%2FncZVuSJB1FsJwPme%2Bg4mcNZMH9MTCm3QSwBr%2BrvgBrW9s3aTfTKUAhe2mM83AyJC%2BCjl8h5RjRTD2zuZi1Ig4vnIxwcaxzg9294VPeJn%2FbJzuJ2ewayQLLrfkZs73DEyfkj5ZP51D0pWJeWq8l1%2F7l6cxQNTRFqYZZqPTpAtjL3p%2BFQREm5j&X-Amz-Signature=b3381afaf3c08088434cd0453e83fbc2d7e605e501f8b0e1635da9cdf905033d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOKPIWZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFziVK1xlvNw%2BdwcFI3tUZZTFG%2FzpbrorN9sQDty58d6AiEAlbe5qGjgE2Bq8thMFMCPmsSYH4MYF4oiazJ0b7KjHkUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTVUW0YAgaw1LkgqSrcAy%2B6XQKgizcadz5tnOJHGpOeAhvqRZUQeh%2BIyewRfiEa4jsU%2BvgMati1y%2FHWednpBxKFvDhcdogQC%2FDeiReUunZAM1ldsmuYZn3CXFrdEr9v4q9RGul3Jrvv67ndk2NvvahpcL4%2B39HQEA5dCkFqCLoFnt5RyO3HmQlcLQ6WJsFdh98HT1TOTWGL0MUSxyGJqyEBjwfPs6527XcBll%2FCU1fnwQkoadO7UV84%2BZmibsP5M4qZq89bNb21e8tQPJVB56NVN9552gtNMSEuGBN%2F3NWxysBzjDVsIuQtfdKfyadTnxaPDZWkSBIW1hUCip7v3gxm8kazIXWtiXHVca2tALqndez9HBKGFGbV3J9L4IrLH1Yx71PNYK8yUKdY%2BHBR13mzJeCtI1PAfxi6bgyDrrseukaaHgfUjtl82VvQ9q5fUEPq9gDKNz6XXfoH4KBXluxxrYBlO7NXykjQXuG6jsWXOezK%2BAT%2FEU0dM1WHrbgGByU%2B0UfZhZrQhRszNk9cgVojqHsfsgaR3LT99GQlWZTwEYsE4WKyu9p4g6%2FPfZKIz%2BIT55cnsAgdjGEEMZjxnj4%2FDqDQOQEOCIiYuVKZNZ85to1P6pEBLt1hmPtFw5RxllIsBpVlgrLqRAadMJ%2FQhr4GOqUB5%2FsyMIRw6nhaZW2a5nf4BM91dy0lsyMqZ5GIbSW%2FncZVuSJB1FsJwPme%2Bg4mcNZMH9MTCm3QSwBr%2BrvgBrW9s3aTfTKUAhe2mM83AyJC%2BCjl8h5RjRTD2zuZi1Ig4vnIxwcaxzg9294VPeJn%2FbJzuJ2ewayQLLrfkZs73DEyfkj5ZP51D0pWJeWq8l1%2F7l6cxQNTRFqYZZqPTpAtjL3p%2BFQREm5j&X-Amz-Signature=ccf4f07c21f8eba4212b82452ba305ccdb08f8e36a8c8854cd755f666dd496ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOKPIWZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFziVK1xlvNw%2BdwcFI3tUZZTFG%2FzpbrorN9sQDty58d6AiEAlbe5qGjgE2Bq8thMFMCPmsSYH4MYF4oiazJ0b7KjHkUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTVUW0YAgaw1LkgqSrcAy%2B6XQKgizcadz5tnOJHGpOeAhvqRZUQeh%2BIyewRfiEa4jsU%2BvgMati1y%2FHWednpBxKFvDhcdogQC%2FDeiReUunZAM1ldsmuYZn3CXFrdEr9v4q9RGul3Jrvv67ndk2NvvahpcL4%2B39HQEA5dCkFqCLoFnt5RyO3HmQlcLQ6WJsFdh98HT1TOTWGL0MUSxyGJqyEBjwfPs6527XcBll%2FCU1fnwQkoadO7UV84%2BZmibsP5M4qZq89bNb21e8tQPJVB56NVN9552gtNMSEuGBN%2F3NWxysBzjDVsIuQtfdKfyadTnxaPDZWkSBIW1hUCip7v3gxm8kazIXWtiXHVca2tALqndez9HBKGFGbV3J9L4IrLH1Yx71PNYK8yUKdY%2BHBR13mzJeCtI1PAfxi6bgyDrrseukaaHgfUjtl82VvQ9q5fUEPq9gDKNz6XXfoH4KBXluxxrYBlO7NXykjQXuG6jsWXOezK%2BAT%2FEU0dM1WHrbgGByU%2B0UfZhZrQhRszNk9cgVojqHsfsgaR3LT99GQlWZTwEYsE4WKyu9p4g6%2FPfZKIz%2BIT55cnsAgdjGEEMZjxnj4%2FDqDQOQEOCIiYuVKZNZ85to1P6pEBLt1hmPtFw5RxllIsBpVlgrLqRAadMJ%2FQhr4GOqUB5%2FsyMIRw6nhaZW2a5nf4BM91dy0lsyMqZ5GIbSW%2FncZVuSJB1FsJwPme%2Bg4mcNZMH9MTCm3QSwBr%2BrvgBrW9s3aTfTKUAhe2mM83AyJC%2BCjl8h5RjRTD2zuZi1Ig4vnIxwcaxzg9294VPeJn%2FbJzuJ2ewayQLLrfkZs73DEyfkj5ZP51D0pWJeWq8l1%2F7l6cxQNTRFqYZZqPTpAtjL3p%2BFQREm5j&X-Amz-Signature=d3b38c7455ab497ffd03b07a99241f8ddc84edd155a23c6107cb3196f3b11983&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOKPIWZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFziVK1xlvNw%2BdwcFI3tUZZTFG%2FzpbrorN9sQDty58d6AiEAlbe5qGjgE2Bq8thMFMCPmsSYH4MYF4oiazJ0b7KjHkUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTVUW0YAgaw1LkgqSrcAy%2B6XQKgizcadz5tnOJHGpOeAhvqRZUQeh%2BIyewRfiEa4jsU%2BvgMati1y%2FHWednpBxKFvDhcdogQC%2FDeiReUunZAM1ldsmuYZn3CXFrdEr9v4q9RGul3Jrvv67ndk2NvvahpcL4%2B39HQEA5dCkFqCLoFnt5RyO3HmQlcLQ6WJsFdh98HT1TOTWGL0MUSxyGJqyEBjwfPs6527XcBll%2FCU1fnwQkoadO7UV84%2BZmibsP5M4qZq89bNb21e8tQPJVB56NVN9552gtNMSEuGBN%2F3NWxysBzjDVsIuQtfdKfyadTnxaPDZWkSBIW1hUCip7v3gxm8kazIXWtiXHVca2tALqndez9HBKGFGbV3J9L4IrLH1Yx71PNYK8yUKdY%2BHBR13mzJeCtI1PAfxi6bgyDrrseukaaHgfUjtl82VvQ9q5fUEPq9gDKNz6XXfoH4KBXluxxrYBlO7NXykjQXuG6jsWXOezK%2BAT%2FEU0dM1WHrbgGByU%2B0UfZhZrQhRszNk9cgVojqHsfsgaR3LT99GQlWZTwEYsE4WKyu9p4g6%2FPfZKIz%2BIT55cnsAgdjGEEMZjxnj4%2FDqDQOQEOCIiYuVKZNZ85to1P6pEBLt1hmPtFw5RxllIsBpVlgrLqRAadMJ%2FQhr4GOqUB5%2FsyMIRw6nhaZW2a5nf4BM91dy0lsyMqZ5GIbSW%2FncZVuSJB1FsJwPme%2Bg4mcNZMH9MTCm3QSwBr%2BrvgBrW9s3aTfTKUAhe2mM83AyJC%2BCjl8h5RjRTD2zuZi1Ig4vnIxwcaxzg9294VPeJn%2FbJzuJ2ewayQLLrfkZs73DEyfkj5ZP51D0pWJeWq8l1%2F7l6cxQNTRFqYZZqPTpAtjL3p%2BFQREm5j&X-Amz-Signature=f2408e2c1ab9f445a348a3dfeab841d7c15c24dd41893dc9830cdc84ed54976a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOKPIWZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFziVK1xlvNw%2BdwcFI3tUZZTFG%2FzpbrorN9sQDty58d6AiEAlbe5qGjgE2Bq8thMFMCPmsSYH4MYF4oiazJ0b7KjHkUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTVUW0YAgaw1LkgqSrcAy%2B6XQKgizcadz5tnOJHGpOeAhvqRZUQeh%2BIyewRfiEa4jsU%2BvgMati1y%2FHWednpBxKFvDhcdogQC%2FDeiReUunZAM1ldsmuYZn3CXFrdEr9v4q9RGul3Jrvv67ndk2NvvahpcL4%2B39HQEA5dCkFqCLoFnt5RyO3HmQlcLQ6WJsFdh98HT1TOTWGL0MUSxyGJqyEBjwfPs6527XcBll%2FCU1fnwQkoadO7UV84%2BZmibsP5M4qZq89bNb21e8tQPJVB56NVN9552gtNMSEuGBN%2F3NWxysBzjDVsIuQtfdKfyadTnxaPDZWkSBIW1hUCip7v3gxm8kazIXWtiXHVca2tALqndez9HBKGFGbV3J9L4IrLH1Yx71PNYK8yUKdY%2BHBR13mzJeCtI1PAfxi6bgyDrrseukaaHgfUjtl82VvQ9q5fUEPq9gDKNz6XXfoH4KBXluxxrYBlO7NXykjQXuG6jsWXOezK%2BAT%2FEU0dM1WHrbgGByU%2B0UfZhZrQhRszNk9cgVojqHsfsgaR3LT99GQlWZTwEYsE4WKyu9p4g6%2FPfZKIz%2BIT55cnsAgdjGEEMZjxnj4%2FDqDQOQEOCIiYuVKZNZ85to1P6pEBLt1hmPtFw5RxllIsBpVlgrLqRAadMJ%2FQhr4GOqUB5%2FsyMIRw6nhaZW2a5nf4BM91dy0lsyMqZ5GIbSW%2FncZVuSJB1FsJwPme%2Bg4mcNZMH9MTCm3QSwBr%2BrvgBrW9s3aTfTKUAhe2mM83AyJC%2BCjl8h5RjRTD2zuZi1Ig4vnIxwcaxzg9294VPeJn%2FbJzuJ2ewayQLLrfkZs73DEyfkj5ZP51D0pWJeWq8l1%2F7l6cxQNTRFqYZZqPTpAtjL3p%2BFQREm5j&X-Amz-Signature=0af2d0340c6f67e8c81de25e841e349774f749cb6c0706357cb07be76b267c52&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOKPIWZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFziVK1xlvNw%2BdwcFI3tUZZTFG%2FzpbrorN9sQDty58d6AiEAlbe5qGjgE2Bq8thMFMCPmsSYH4MYF4oiazJ0b7KjHkUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTVUW0YAgaw1LkgqSrcAy%2B6XQKgizcadz5tnOJHGpOeAhvqRZUQeh%2BIyewRfiEa4jsU%2BvgMati1y%2FHWednpBxKFvDhcdogQC%2FDeiReUunZAM1ldsmuYZn3CXFrdEr9v4q9RGul3Jrvv67ndk2NvvahpcL4%2B39HQEA5dCkFqCLoFnt5RyO3HmQlcLQ6WJsFdh98HT1TOTWGL0MUSxyGJqyEBjwfPs6527XcBll%2FCU1fnwQkoadO7UV84%2BZmibsP5M4qZq89bNb21e8tQPJVB56NVN9552gtNMSEuGBN%2F3NWxysBzjDVsIuQtfdKfyadTnxaPDZWkSBIW1hUCip7v3gxm8kazIXWtiXHVca2tALqndez9HBKGFGbV3J9L4IrLH1Yx71PNYK8yUKdY%2BHBR13mzJeCtI1PAfxi6bgyDrrseukaaHgfUjtl82VvQ9q5fUEPq9gDKNz6XXfoH4KBXluxxrYBlO7NXykjQXuG6jsWXOezK%2BAT%2FEU0dM1WHrbgGByU%2B0UfZhZrQhRszNk9cgVojqHsfsgaR3LT99GQlWZTwEYsE4WKyu9p4g6%2FPfZKIz%2BIT55cnsAgdjGEEMZjxnj4%2FDqDQOQEOCIiYuVKZNZ85to1P6pEBLt1hmPtFw5RxllIsBpVlgrLqRAadMJ%2FQhr4GOqUB5%2FsyMIRw6nhaZW2a5nf4BM91dy0lsyMqZ5GIbSW%2FncZVuSJB1FsJwPme%2Bg4mcNZMH9MTCm3QSwBr%2BrvgBrW9s3aTfTKUAhe2mM83AyJC%2BCjl8h5RjRTD2zuZi1Ig4vnIxwcaxzg9294VPeJn%2FbJzuJ2ewayQLLrfkZs73DEyfkj5ZP51D0pWJeWq8l1%2F7l6cxQNTRFqYZZqPTpAtjL3p%2BFQREm5j&X-Amz-Signature=c29395cc25389f0e8e2411e67e6299c1f6406756414af00de2b905332a541e1c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
