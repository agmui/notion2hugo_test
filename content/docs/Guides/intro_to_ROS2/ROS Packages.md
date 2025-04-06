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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667NIDGXH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsL6gXO%2FfWvMLYItt3As%2BQpGPZH1JlthrYbQCl0G62gIhALnUWb%2FPhMQnupCdOVeT2HDZkRbFmbc1zhdbn1z52YKAKv8DCEwQABoMNjM3NDIzMTgzODA1Igxh0VJ9emGDWTErUUgq3AM6auyjTyPf9FGhzJlnX%2FK8oALbsgqbd64QaMsMjlOy5lCsAiU67%2BI6YIjn02I7bM7uWWFGry5dCG%2BXe22QgOxM%2FStbkn1yr0SI%2BI43O1wDdjcoRrcIVBfnmMJBr2zCfCMsurY56fN%2FcUz%2F4wHMmz1wCbODoHPNOyvo%2F%2B%2F5JK3KHkXYk%2F40TL%2FUO8XTwgxvTMjcSgV9ux0kX4TF7QS5bNCoz6fJFD317BdBEWwHc1fRf5E0biPDREtYJs46r2%2FS6xxGTw8Mzm4HVhNkUCREequIdaU8KwO9qEWURxfLTKnjUaRdu%2FGTw5y95A9nuy3lH3We%2BVz9Vaut8gkegEMYx4%2F0P7WP8FVog418vgFaGMgUUmcmZi1C7%2FzwbBf1tHe4Iy8aEzashlnpYNpUC0sU4sA6RVGLZhUgcA5kCR2xJjxdDhL%2BjwSKlABL4kjJjeUe2%2BaWqCINjVl8mc9mk%2Br2mlEI8QPDa4vz46Y9DwDqm1rAQH1CTHgj3NOgKfpO3xsc3wo7KckIw%2Bai66lkt4tBYHL%2FNH%2FdlZ%2FYbxRZo2c2WcqPa3CTRESifh9vfbcgsg2Oupjl%2BcuD%2FeltRw%2B1n7gN5KKGxnwTplsGWi62NRrEB6d8IZEeJ6GflJfQqcu5TjDFnsu%2FBjqkAeAYKGGpdl38HSfLwOinEoBLt%2FHQ2HMGTBuN%2BzXawIFYkU1HamGDuwdQ5Fbq4H%2BYusVPvjqUOgEKKhiZUAqy0gEXW6DkSXaoTh%2FdGZtZxOBQntJdqEY04c1kV%2Fb3FCVNYNREX5M7lIr1wPtQdp0oockL%2Bn1RIX9sjMDCj8W%2FPrysijBRZ7KzzCrq2WbxUHcFWhsjicE7k8YXOtjAcLy%2BtnH4jOJw&X-Amz-Signature=bb5f6fd01ea8c92cb161ff00b69a45f165a10ae8d8549467f82e4fb2c836f52b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667NIDGXH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsL6gXO%2FfWvMLYItt3As%2BQpGPZH1JlthrYbQCl0G62gIhALnUWb%2FPhMQnupCdOVeT2HDZkRbFmbc1zhdbn1z52YKAKv8DCEwQABoMNjM3NDIzMTgzODA1Igxh0VJ9emGDWTErUUgq3AM6auyjTyPf9FGhzJlnX%2FK8oALbsgqbd64QaMsMjlOy5lCsAiU67%2BI6YIjn02I7bM7uWWFGry5dCG%2BXe22QgOxM%2FStbkn1yr0SI%2BI43O1wDdjcoRrcIVBfnmMJBr2zCfCMsurY56fN%2FcUz%2F4wHMmz1wCbODoHPNOyvo%2F%2B%2F5JK3KHkXYk%2F40TL%2FUO8XTwgxvTMjcSgV9ux0kX4TF7QS5bNCoz6fJFD317BdBEWwHc1fRf5E0biPDREtYJs46r2%2FS6xxGTw8Mzm4HVhNkUCREequIdaU8KwO9qEWURxfLTKnjUaRdu%2FGTw5y95A9nuy3lH3We%2BVz9Vaut8gkegEMYx4%2F0P7WP8FVog418vgFaGMgUUmcmZi1C7%2FzwbBf1tHe4Iy8aEzashlnpYNpUC0sU4sA6RVGLZhUgcA5kCR2xJjxdDhL%2BjwSKlABL4kjJjeUe2%2BaWqCINjVl8mc9mk%2Br2mlEI8QPDa4vz46Y9DwDqm1rAQH1CTHgj3NOgKfpO3xsc3wo7KckIw%2Bai66lkt4tBYHL%2FNH%2FdlZ%2FYbxRZo2c2WcqPa3CTRESifh9vfbcgsg2Oupjl%2BcuD%2FeltRw%2B1n7gN5KKGxnwTplsGWi62NRrEB6d8IZEeJ6GflJfQqcu5TjDFnsu%2FBjqkAeAYKGGpdl38HSfLwOinEoBLt%2FHQ2HMGTBuN%2BzXawIFYkU1HamGDuwdQ5Fbq4H%2BYusVPvjqUOgEKKhiZUAqy0gEXW6DkSXaoTh%2FdGZtZxOBQntJdqEY04c1kV%2Fb3FCVNYNREX5M7lIr1wPtQdp0oockL%2Bn1RIX9sjMDCj8W%2FPrysijBRZ7KzzCrq2WbxUHcFWhsjicE7k8YXOtjAcLy%2BtnH4jOJw&X-Amz-Signature=385efe2eb99dbd0e916725467e4db1b928767b38027ff337775bf9c7ba8ce904&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667NIDGXH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsL6gXO%2FfWvMLYItt3As%2BQpGPZH1JlthrYbQCl0G62gIhALnUWb%2FPhMQnupCdOVeT2HDZkRbFmbc1zhdbn1z52YKAKv8DCEwQABoMNjM3NDIzMTgzODA1Igxh0VJ9emGDWTErUUgq3AM6auyjTyPf9FGhzJlnX%2FK8oALbsgqbd64QaMsMjlOy5lCsAiU67%2BI6YIjn02I7bM7uWWFGry5dCG%2BXe22QgOxM%2FStbkn1yr0SI%2BI43O1wDdjcoRrcIVBfnmMJBr2zCfCMsurY56fN%2FcUz%2F4wHMmz1wCbODoHPNOyvo%2F%2B%2F5JK3KHkXYk%2F40TL%2FUO8XTwgxvTMjcSgV9ux0kX4TF7QS5bNCoz6fJFD317BdBEWwHc1fRf5E0biPDREtYJs46r2%2FS6xxGTw8Mzm4HVhNkUCREequIdaU8KwO9qEWURxfLTKnjUaRdu%2FGTw5y95A9nuy3lH3We%2BVz9Vaut8gkegEMYx4%2F0P7WP8FVog418vgFaGMgUUmcmZi1C7%2FzwbBf1tHe4Iy8aEzashlnpYNpUC0sU4sA6RVGLZhUgcA5kCR2xJjxdDhL%2BjwSKlABL4kjJjeUe2%2BaWqCINjVl8mc9mk%2Br2mlEI8QPDa4vz46Y9DwDqm1rAQH1CTHgj3NOgKfpO3xsc3wo7KckIw%2Bai66lkt4tBYHL%2FNH%2FdlZ%2FYbxRZo2c2WcqPa3CTRESifh9vfbcgsg2Oupjl%2BcuD%2FeltRw%2B1n7gN5KKGxnwTplsGWi62NRrEB6d8IZEeJ6GflJfQqcu5TjDFnsu%2FBjqkAeAYKGGpdl38HSfLwOinEoBLt%2FHQ2HMGTBuN%2BzXawIFYkU1HamGDuwdQ5Fbq4H%2BYusVPvjqUOgEKKhiZUAqy0gEXW6DkSXaoTh%2FdGZtZxOBQntJdqEY04c1kV%2Fb3FCVNYNREX5M7lIr1wPtQdp0oockL%2Bn1RIX9sjMDCj8W%2FPrysijBRZ7KzzCrq2WbxUHcFWhsjicE7k8YXOtjAcLy%2BtnH4jOJw&X-Amz-Signature=f6dedebeb7467a21bbe962db8c6082ad2de8f64b91a923a48d16a3e810004ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667NIDGXH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsL6gXO%2FfWvMLYItt3As%2BQpGPZH1JlthrYbQCl0G62gIhALnUWb%2FPhMQnupCdOVeT2HDZkRbFmbc1zhdbn1z52YKAKv8DCEwQABoMNjM3NDIzMTgzODA1Igxh0VJ9emGDWTErUUgq3AM6auyjTyPf9FGhzJlnX%2FK8oALbsgqbd64QaMsMjlOy5lCsAiU67%2BI6YIjn02I7bM7uWWFGry5dCG%2BXe22QgOxM%2FStbkn1yr0SI%2BI43O1wDdjcoRrcIVBfnmMJBr2zCfCMsurY56fN%2FcUz%2F4wHMmz1wCbODoHPNOyvo%2F%2B%2F5JK3KHkXYk%2F40TL%2FUO8XTwgxvTMjcSgV9ux0kX4TF7QS5bNCoz6fJFD317BdBEWwHc1fRf5E0biPDREtYJs46r2%2FS6xxGTw8Mzm4HVhNkUCREequIdaU8KwO9qEWURxfLTKnjUaRdu%2FGTw5y95A9nuy3lH3We%2BVz9Vaut8gkegEMYx4%2F0P7WP8FVog418vgFaGMgUUmcmZi1C7%2FzwbBf1tHe4Iy8aEzashlnpYNpUC0sU4sA6RVGLZhUgcA5kCR2xJjxdDhL%2BjwSKlABL4kjJjeUe2%2BaWqCINjVl8mc9mk%2Br2mlEI8QPDa4vz46Y9DwDqm1rAQH1CTHgj3NOgKfpO3xsc3wo7KckIw%2Bai66lkt4tBYHL%2FNH%2FdlZ%2FYbxRZo2c2WcqPa3CTRESifh9vfbcgsg2Oupjl%2BcuD%2FeltRw%2B1n7gN5KKGxnwTplsGWi62NRrEB6d8IZEeJ6GflJfQqcu5TjDFnsu%2FBjqkAeAYKGGpdl38HSfLwOinEoBLt%2FHQ2HMGTBuN%2BzXawIFYkU1HamGDuwdQ5Fbq4H%2BYusVPvjqUOgEKKhiZUAqy0gEXW6DkSXaoTh%2FdGZtZxOBQntJdqEY04c1kV%2Fb3FCVNYNREX5M7lIr1wPtQdp0oockL%2Bn1RIX9sjMDCj8W%2FPrysijBRZ7KzzCrq2WbxUHcFWhsjicE7k8YXOtjAcLy%2BtnH4jOJw&X-Amz-Signature=6c1952f92afe4fc11c6f48b097c0d65285071437e6518ba6eb623b6e14bc2619&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667NIDGXH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsL6gXO%2FfWvMLYItt3As%2BQpGPZH1JlthrYbQCl0G62gIhALnUWb%2FPhMQnupCdOVeT2HDZkRbFmbc1zhdbn1z52YKAKv8DCEwQABoMNjM3NDIzMTgzODA1Igxh0VJ9emGDWTErUUgq3AM6auyjTyPf9FGhzJlnX%2FK8oALbsgqbd64QaMsMjlOy5lCsAiU67%2BI6YIjn02I7bM7uWWFGry5dCG%2BXe22QgOxM%2FStbkn1yr0SI%2BI43O1wDdjcoRrcIVBfnmMJBr2zCfCMsurY56fN%2FcUz%2F4wHMmz1wCbODoHPNOyvo%2F%2B%2F5JK3KHkXYk%2F40TL%2FUO8XTwgxvTMjcSgV9ux0kX4TF7QS5bNCoz6fJFD317BdBEWwHc1fRf5E0biPDREtYJs46r2%2FS6xxGTw8Mzm4HVhNkUCREequIdaU8KwO9qEWURxfLTKnjUaRdu%2FGTw5y95A9nuy3lH3We%2BVz9Vaut8gkegEMYx4%2F0P7WP8FVog418vgFaGMgUUmcmZi1C7%2FzwbBf1tHe4Iy8aEzashlnpYNpUC0sU4sA6RVGLZhUgcA5kCR2xJjxdDhL%2BjwSKlABL4kjJjeUe2%2BaWqCINjVl8mc9mk%2Br2mlEI8QPDa4vz46Y9DwDqm1rAQH1CTHgj3NOgKfpO3xsc3wo7KckIw%2Bai66lkt4tBYHL%2FNH%2FdlZ%2FYbxRZo2c2WcqPa3CTRESifh9vfbcgsg2Oupjl%2BcuD%2FeltRw%2B1n7gN5KKGxnwTplsGWi62NRrEB6d8IZEeJ6GflJfQqcu5TjDFnsu%2FBjqkAeAYKGGpdl38HSfLwOinEoBLt%2FHQ2HMGTBuN%2BzXawIFYkU1HamGDuwdQ5Fbq4H%2BYusVPvjqUOgEKKhiZUAqy0gEXW6DkSXaoTh%2FdGZtZxOBQntJdqEY04c1kV%2Fb3FCVNYNREX5M7lIr1wPtQdp0oockL%2Bn1RIX9sjMDCj8W%2FPrysijBRZ7KzzCrq2WbxUHcFWhsjicE7k8YXOtjAcLy%2BtnH4jOJw&X-Amz-Signature=3b85169a187e523afba6497f710081a4f06e568f65d89b5839de7d4daca34573&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667NIDGXH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsL6gXO%2FfWvMLYItt3As%2BQpGPZH1JlthrYbQCl0G62gIhALnUWb%2FPhMQnupCdOVeT2HDZkRbFmbc1zhdbn1z52YKAKv8DCEwQABoMNjM3NDIzMTgzODA1Igxh0VJ9emGDWTErUUgq3AM6auyjTyPf9FGhzJlnX%2FK8oALbsgqbd64QaMsMjlOy5lCsAiU67%2BI6YIjn02I7bM7uWWFGry5dCG%2BXe22QgOxM%2FStbkn1yr0SI%2BI43O1wDdjcoRrcIVBfnmMJBr2zCfCMsurY56fN%2FcUz%2F4wHMmz1wCbODoHPNOyvo%2F%2B%2F5JK3KHkXYk%2F40TL%2FUO8XTwgxvTMjcSgV9ux0kX4TF7QS5bNCoz6fJFD317BdBEWwHc1fRf5E0biPDREtYJs46r2%2FS6xxGTw8Mzm4HVhNkUCREequIdaU8KwO9qEWURxfLTKnjUaRdu%2FGTw5y95A9nuy3lH3We%2BVz9Vaut8gkegEMYx4%2F0P7WP8FVog418vgFaGMgUUmcmZi1C7%2FzwbBf1tHe4Iy8aEzashlnpYNpUC0sU4sA6RVGLZhUgcA5kCR2xJjxdDhL%2BjwSKlABL4kjJjeUe2%2BaWqCINjVl8mc9mk%2Br2mlEI8QPDa4vz46Y9DwDqm1rAQH1CTHgj3NOgKfpO3xsc3wo7KckIw%2Bai66lkt4tBYHL%2FNH%2FdlZ%2FYbxRZo2c2WcqPa3CTRESifh9vfbcgsg2Oupjl%2BcuD%2FeltRw%2B1n7gN5KKGxnwTplsGWi62NRrEB6d8IZEeJ6GflJfQqcu5TjDFnsu%2FBjqkAeAYKGGpdl38HSfLwOinEoBLt%2FHQ2HMGTBuN%2BzXawIFYkU1HamGDuwdQ5Fbq4H%2BYusVPvjqUOgEKKhiZUAqy0gEXW6DkSXaoTh%2FdGZtZxOBQntJdqEY04c1kV%2Fb3FCVNYNREX5M7lIr1wPtQdp0oockL%2Bn1RIX9sjMDCj8W%2FPrysijBRZ7KzzCrq2WbxUHcFWhsjicE7k8YXOtjAcLy%2BtnH4jOJw&X-Amz-Signature=a32231d315fe3d45e9f16d8965f8c50dcc026a46f865e195eb8b8714e5eb1db6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667NIDGXH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsL6gXO%2FfWvMLYItt3As%2BQpGPZH1JlthrYbQCl0G62gIhALnUWb%2FPhMQnupCdOVeT2HDZkRbFmbc1zhdbn1z52YKAKv8DCEwQABoMNjM3NDIzMTgzODA1Igxh0VJ9emGDWTErUUgq3AM6auyjTyPf9FGhzJlnX%2FK8oALbsgqbd64QaMsMjlOy5lCsAiU67%2BI6YIjn02I7bM7uWWFGry5dCG%2BXe22QgOxM%2FStbkn1yr0SI%2BI43O1wDdjcoRrcIVBfnmMJBr2zCfCMsurY56fN%2FcUz%2F4wHMmz1wCbODoHPNOyvo%2F%2B%2F5JK3KHkXYk%2F40TL%2FUO8XTwgxvTMjcSgV9ux0kX4TF7QS5bNCoz6fJFD317BdBEWwHc1fRf5E0biPDREtYJs46r2%2FS6xxGTw8Mzm4HVhNkUCREequIdaU8KwO9qEWURxfLTKnjUaRdu%2FGTw5y95A9nuy3lH3We%2BVz9Vaut8gkegEMYx4%2F0P7WP8FVog418vgFaGMgUUmcmZi1C7%2FzwbBf1tHe4Iy8aEzashlnpYNpUC0sU4sA6RVGLZhUgcA5kCR2xJjxdDhL%2BjwSKlABL4kjJjeUe2%2BaWqCINjVl8mc9mk%2Br2mlEI8QPDa4vz46Y9DwDqm1rAQH1CTHgj3NOgKfpO3xsc3wo7KckIw%2Bai66lkt4tBYHL%2FNH%2FdlZ%2FYbxRZo2c2WcqPa3CTRESifh9vfbcgsg2Oupjl%2BcuD%2FeltRw%2B1n7gN5KKGxnwTplsGWi62NRrEB6d8IZEeJ6GflJfQqcu5TjDFnsu%2FBjqkAeAYKGGpdl38HSfLwOinEoBLt%2FHQ2HMGTBuN%2BzXawIFYkU1HamGDuwdQ5Fbq4H%2BYusVPvjqUOgEKKhiZUAqy0gEXW6DkSXaoTh%2FdGZtZxOBQntJdqEY04c1kV%2Fb3FCVNYNREX5M7lIr1wPtQdp0oockL%2Bn1RIX9sjMDCj8W%2FPrysijBRZ7KzzCrq2WbxUHcFWhsjicE7k8YXOtjAcLy%2BtnH4jOJw&X-Amz-Signature=dc840d38790efece7a742c08257881921bec3abb67e53efa32780b42f115c830&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
