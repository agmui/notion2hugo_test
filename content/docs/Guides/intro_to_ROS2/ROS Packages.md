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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNDOEOU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwp0ROW3M2IuKxScbUxUSEtAt3WiTxUhXaKJPJAhE5cAiBhdR3toGt0y2b8uk97%2Bd9gawpKhMs8%2FDYfu%2BHJTBZ9CSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMU9Gx449N8gOYvetMKtwDdU7cWrx8Z3Mkgb%2BS5KuXTQmQSOgJ4DHVeoU0CCG59C%2BG%2Bpe%2FXE6Uu46UctmKFHpPH0RuaCyZg%2BlRzQnnRjLjvJOhfqsmjHTaBbsnLn8RWb9RqJu9cxPgE3AcCgNkGPiC1ZqNmY8nDVDgZf47OvP5tmL0dmGRrNjxaboCAY0yo%2FEY2YevRdo3sbrPFoA%2FMLlA3dDzs5LBtKj1TMI1El1UctpV6C1jSZh7LUDXhfIwSZjoIjTbDuusD%2FJ304yBrlQ15PT7789hoGNYyGG%2ByDrUvaej1002v2GxmYxSJhJ1bHRxn%2Fm%2BWvXKraVKVvj0x9gEKng5%2BEqUUsdV%2F1si3e2ajeU2i0bmCmMu6O3PzBgGHSNPd0g0u5cyI8w6Dwl7gZPR4N7aoHRyLq%2FBdxAr7vtfHcj9lOp%2BB4w9ccriyoVunuaOJ7u2l3zuV21Lpa9Dsoa48L5BnGcQPGEIL6e%2FcabE3BPN5%2BvGA2aB7answDHZmx5Ni0%2BKSB%2BZ373zHg%2FcuM5mMMDc6qBnuPG1Pmp6Lg4NheQMwryKsMN%2BcAZ04vAIFdzbT5J%2B8gCxcAyBjsNoBzm4w%2F%2BQM7z4%2Bl7D7KIAdco%2FyBexbdgci7ZLVj2VsWu9CVCZpYCfE%2BSy5q9%2FSx8wyYGjvgY6pgHO7BLwB2WDDOGxy53Zdk8tP2FoMRAcEkQ37n3JDK1JGn0a9NONbkhchffUh9FCtz2QuV7YAh51qDZ8EleVz1LJ16qJ5NEuGCVQl0dCJ0TRhjVOIcEbVrrDIMdfFwre6%2FPhwpLds%2BLDzXhSqscVC5nNYzVqWZiHbbW1Mz%2BLo6IiblyeR1%2FUdilpr308KK9kbYAZ9PMpD%2F53XwX6P711q6FLwhSVey8e&X-Amz-Signature=bf38b31af263b2281f1c6733c6621333162429c9b8eff86203334537ff1e45ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNDOEOU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwp0ROW3M2IuKxScbUxUSEtAt3WiTxUhXaKJPJAhE5cAiBhdR3toGt0y2b8uk97%2Bd9gawpKhMs8%2FDYfu%2BHJTBZ9CSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMU9Gx449N8gOYvetMKtwDdU7cWrx8Z3Mkgb%2BS5KuXTQmQSOgJ4DHVeoU0CCG59C%2BG%2Bpe%2FXE6Uu46UctmKFHpPH0RuaCyZg%2BlRzQnnRjLjvJOhfqsmjHTaBbsnLn8RWb9RqJu9cxPgE3AcCgNkGPiC1ZqNmY8nDVDgZf47OvP5tmL0dmGRrNjxaboCAY0yo%2FEY2YevRdo3sbrPFoA%2FMLlA3dDzs5LBtKj1TMI1El1UctpV6C1jSZh7LUDXhfIwSZjoIjTbDuusD%2FJ304yBrlQ15PT7789hoGNYyGG%2ByDrUvaej1002v2GxmYxSJhJ1bHRxn%2Fm%2BWvXKraVKVvj0x9gEKng5%2BEqUUsdV%2F1si3e2ajeU2i0bmCmMu6O3PzBgGHSNPd0g0u5cyI8w6Dwl7gZPR4N7aoHRyLq%2FBdxAr7vtfHcj9lOp%2BB4w9ccriyoVunuaOJ7u2l3zuV21Lpa9Dsoa48L5BnGcQPGEIL6e%2FcabE3BPN5%2BvGA2aB7answDHZmx5Ni0%2BKSB%2BZ373zHg%2FcuM5mMMDc6qBnuPG1Pmp6Lg4NheQMwryKsMN%2BcAZ04vAIFdzbT5J%2B8gCxcAyBjsNoBzm4w%2F%2BQM7z4%2Bl7D7KIAdco%2FyBexbdgci7ZLVj2VsWu9CVCZpYCfE%2BSy5q9%2FSx8wyYGjvgY6pgHO7BLwB2WDDOGxy53Zdk8tP2FoMRAcEkQ37n3JDK1JGn0a9NONbkhchffUh9FCtz2QuV7YAh51qDZ8EleVz1LJ16qJ5NEuGCVQl0dCJ0TRhjVOIcEbVrrDIMdfFwre6%2FPhwpLds%2BLDzXhSqscVC5nNYzVqWZiHbbW1Mz%2BLo6IiblyeR1%2FUdilpr308KK9kbYAZ9PMpD%2F53XwX6P711q6FLwhSVey8e&X-Amz-Signature=e168cb97d916c93313f3d7c203171b14462d3424b399c79036755a5d56bbfce6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNDOEOU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwp0ROW3M2IuKxScbUxUSEtAt3WiTxUhXaKJPJAhE5cAiBhdR3toGt0y2b8uk97%2Bd9gawpKhMs8%2FDYfu%2BHJTBZ9CSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMU9Gx449N8gOYvetMKtwDdU7cWrx8Z3Mkgb%2BS5KuXTQmQSOgJ4DHVeoU0CCG59C%2BG%2Bpe%2FXE6Uu46UctmKFHpPH0RuaCyZg%2BlRzQnnRjLjvJOhfqsmjHTaBbsnLn8RWb9RqJu9cxPgE3AcCgNkGPiC1ZqNmY8nDVDgZf47OvP5tmL0dmGRrNjxaboCAY0yo%2FEY2YevRdo3sbrPFoA%2FMLlA3dDzs5LBtKj1TMI1El1UctpV6C1jSZh7LUDXhfIwSZjoIjTbDuusD%2FJ304yBrlQ15PT7789hoGNYyGG%2ByDrUvaej1002v2GxmYxSJhJ1bHRxn%2Fm%2BWvXKraVKVvj0x9gEKng5%2BEqUUsdV%2F1si3e2ajeU2i0bmCmMu6O3PzBgGHSNPd0g0u5cyI8w6Dwl7gZPR4N7aoHRyLq%2FBdxAr7vtfHcj9lOp%2BB4w9ccriyoVunuaOJ7u2l3zuV21Lpa9Dsoa48L5BnGcQPGEIL6e%2FcabE3BPN5%2BvGA2aB7answDHZmx5Ni0%2BKSB%2BZ373zHg%2FcuM5mMMDc6qBnuPG1Pmp6Lg4NheQMwryKsMN%2BcAZ04vAIFdzbT5J%2B8gCxcAyBjsNoBzm4w%2F%2BQM7z4%2Bl7D7KIAdco%2FyBexbdgci7ZLVj2VsWu9CVCZpYCfE%2BSy5q9%2FSx8wyYGjvgY6pgHO7BLwB2WDDOGxy53Zdk8tP2FoMRAcEkQ37n3JDK1JGn0a9NONbkhchffUh9FCtz2QuV7YAh51qDZ8EleVz1LJ16qJ5NEuGCVQl0dCJ0TRhjVOIcEbVrrDIMdfFwre6%2FPhwpLds%2BLDzXhSqscVC5nNYzVqWZiHbbW1Mz%2BLo6IiblyeR1%2FUdilpr308KK9kbYAZ9PMpD%2F53XwX6P711q6FLwhSVey8e&X-Amz-Signature=e3b691a8c94f715afeb91af3dcc8b0dbf3ae590b177c2088a2feb669d9965abc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNDOEOU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwp0ROW3M2IuKxScbUxUSEtAt3WiTxUhXaKJPJAhE5cAiBhdR3toGt0y2b8uk97%2Bd9gawpKhMs8%2FDYfu%2BHJTBZ9CSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMU9Gx449N8gOYvetMKtwDdU7cWrx8Z3Mkgb%2BS5KuXTQmQSOgJ4DHVeoU0CCG59C%2BG%2Bpe%2FXE6Uu46UctmKFHpPH0RuaCyZg%2BlRzQnnRjLjvJOhfqsmjHTaBbsnLn8RWb9RqJu9cxPgE3AcCgNkGPiC1ZqNmY8nDVDgZf47OvP5tmL0dmGRrNjxaboCAY0yo%2FEY2YevRdo3sbrPFoA%2FMLlA3dDzs5LBtKj1TMI1El1UctpV6C1jSZh7LUDXhfIwSZjoIjTbDuusD%2FJ304yBrlQ15PT7789hoGNYyGG%2ByDrUvaej1002v2GxmYxSJhJ1bHRxn%2Fm%2BWvXKraVKVvj0x9gEKng5%2BEqUUsdV%2F1si3e2ajeU2i0bmCmMu6O3PzBgGHSNPd0g0u5cyI8w6Dwl7gZPR4N7aoHRyLq%2FBdxAr7vtfHcj9lOp%2BB4w9ccriyoVunuaOJ7u2l3zuV21Lpa9Dsoa48L5BnGcQPGEIL6e%2FcabE3BPN5%2BvGA2aB7answDHZmx5Ni0%2BKSB%2BZ373zHg%2FcuM5mMMDc6qBnuPG1Pmp6Lg4NheQMwryKsMN%2BcAZ04vAIFdzbT5J%2B8gCxcAyBjsNoBzm4w%2F%2BQM7z4%2Bl7D7KIAdco%2FyBexbdgci7ZLVj2VsWu9CVCZpYCfE%2BSy5q9%2FSx8wyYGjvgY6pgHO7BLwB2WDDOGxy53Zdk8tP2FoMRAcEkQ37n3JDK1JGn0a9NONbkhchffUh9FCtz2QuV7YAh51qDZ8EleVz1LJ16qJ5NEuGCVQl0dCJ0TRhjVOIcEbVrrDIMdfFwre6%2FPhwpLds%2BLDzXhSqscVC5nNYzVqWZiHbbW1Mz%2BLo6IiblyeR1%2FUdilpr308KK9kbYAZ9PMpD%2F53XwX6P711q6FLwhSVey8e&X-Amz-Signature=ec8edff85750467e5d81beaa90c33c21aeb71f00ba88779e58e08b04fbc94917&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNDOEOU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwp0ROW3M2IuKxScbUxUSEtAt3WiTxUhXaKJPJAhE5cAiBhdR3toGt0y2b8uk97%2Bd9gawpKhMs8%2FDYfu%2BHJTBZ9CSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMU9Gx449N8gOYvetMKtwDdU7cWrx8Z3Mkgb%2BS5KuXTQmQSOgJ4DHVeoU0CCG59C%2BG%2Bpe%2FXE6Uu46UctmKFHpPH0RuaCyZg%2BlRzQnnRjLjvJOhfqsmjHTaBbsnLn8RWb9RqJu9cxPgE3AcCgNkGPiC1ZqNmY8nDVDgZf47OvP5tmL0dmGRrNjxaboCAY0yo%2FEY2YevRdo3sbrPFoA%2FMLlA3dDzs5LBtKj1TMI1El1UctpV6C1jSZh7LUDXhfIwSZjoIjTbDuusD%2FJ304yBrlQ15PT7789hoGNYyGG%2ByDrUvaej1002v2GxmYxSJhJ1bHRxn%2Fm%2BWvXKraVKVvj0x9gEKng5%2BEqUUsdV%2F1si3e2ajeU2i0bmCmMu6O3PzBgGHSNPd0g0u5cyI8w6Dwl7gZPR4N7aoHRyLq%2FBdxAr7vtfHcj9lOp%2BB4w9ccriyoVunuaOJ7u2l3zuV21Lpa9Dsoa48L5BnGcQPGEIL6e%2FcabE3BPN5%2BvGA2aB7answDHZmx5Ni0%2BKSB%2BZ373zHg%2FcuM5mMMDc6qBnuPG1Pmp6Lg4NheQMwryKsMN%2BcAZ04vAIFdzbT5J%2B8gCxcAyBjsNoBzm4w%2F%2BQM7z4%2Bl7D7KIAdco%2FyBexbdgci7ZLVj2VsWu9CVCZpYCfE%2BSy5q9%2FSx8wyYGjvgY6pgHO7BLwB2WDDOGxy53Zdk8tP2FoMRAcEkQ37n3JDK1JGn0a9NONbkhchffUh9FCtz2QuV7YAh51qDZ8EleVz1LJ16qJ5NEuGCVQl0dCJ0TRhjVOIcEbVrrDIMdfFwre6%2FPhwpLds%2BLDzXhSqscVC5nNYzVqWZiHbbW1Mz%2BLo6IiblyeR1%2FUdilpr308KK9kbYAZ9PMpD%2F53XwX6P711q6FLwhSVey8e&X-Amz-Signature=3f81d7353792d3285198e48cce5b4930ade175218c74ba0f21bebe8abfc0e849&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNDOEOU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwp0ROW3M2IuKxScbUxUSEtAt3WiTxUhXaKJPJAhE5cAiBhdR3toGt0y2b8uk97%2Bd9gawpKhMs8%2FDYfu%2BHJTBZ9CSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMU9Gx449N8gOYvetMKtwDdU7cWrx8Z3Mkgb%2BS5KuXTQmQSOgJ4DHVeoU0CCG59C%2BG%2Bpe%2FXE6Uu46UctmKFHpPH0RuaCyZg%2BlRzQnnRjLjvJOhfqsmjHTaBbsnLn8RWb9RqJu9cxPgE3AcCgNkGPiC1ZqNmY8nDVDgZf47OvP5tmL0dmGRrNjxaboCAY0yo%2FEY2YevRdo3sbrPFoA%2FMLlA3dDzs5LBtKj1TMI1El1UctpV6C1jSZh7LUDXhfIwSZjoIjTbDuusD%2FJ304yBrlQ15PT7789hoGNYyGG%2ByDrUvaej1002v2GxmYxSJhJ1bHRxn%2Fm%2BWvXKraVKVvj0x9gEKng5%2BEqUUsdV%2F1si3e2ajeU2i0bmCmMu6O3PzBgGHSNPd0g0u5cyI8w6Dwl7gZPR4N7aoHRyLq%2FBdxAr7vtfHcj9lOp%2BB4w9ccriyoVunuaOJ7u2l3zuV21Lpa9Dsoa48L5BnGcQPGEIL6e%2FcabE3BPN5%2BvGA2aB7answDHZmx5Ni0%2BKSB%2BZ373zHg%2FcuM5mMMDc6qBnuPG1Pmp6Lg4NheQMwryKsMN%2BcAZ04vAIFdzbT5J%2B8gCxcAyBjsNoBzm4w%2F%2BQM7z4%2Bl7D7KIAdco%2FyBexbdgci7ZLVj2VsWu9CVCZpYCfE%2BSy5q9%2FSx8wyYGjvgY6pgHO7BLwB2WDDOGxy53Zdk8tP2FoMRAcEkQ37n3JDK1JGn0a9NONbkhchffUh9FCtz2QuV7YAh51qDZ8EleVz1LJ16qJ5NEuGCVQl0dCJ0TRhjVOIcEbVrrDIMdfFwre6%2FPhwpLds%2BLDzXhSqscVC5nNYzVqWZiHbbW1Mz%2BLo6IiblyeR1%2FUdilpr308KK9kbYAZ9PMpD%2F53XwX6P711q6FLwhSVey8e&X-Amz-Signature=51dab23a39abe28354545103c65569697d902c04b4f1291189bbaf792499e63f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNDOEOU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwp0ROW3M2IuKxScbUxUSEtAt3WiTxUhXaKJPJAhE5cAiBhdR3toGt0y2b8uk97%2Bd9gawpKhMs8%2FDYfu%2BHJTBZ9CSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMU9Gx449N8gOYvetMKtwDdU7cWrx8Z3Mkgb%2BS5KuXTQmQSOgJ4DHVeoU0CCG59C%2BG%2Bpe%2FXE6Uu46UctmKFHpPH0RuaCyZg%2BlRzQnnRjLjvJOhfqsmjHTaBbsnLn8RWb9RqJu9cxPgE3AcCgNkGPiC1ZqNmY8nDVDgZf47OvP5tmL0dmGRrNjxaboCAY0yo%2FEY2YevRdo3sbrPFoA%2FMLlA3dDzs5LBtKj1TMI1El1UctpV6C1jSZh7LUDXhfIwSZjoIjTbDuusD%2FJ304yBrlQ15PT7789hoGNYyGG%2ByDrUvaej1002v2GxmYxSJhJ1bHRxn%2Fm%2BWvXKraVKVvj0x9gEKng5%2BEqUUsdV%2F1si3e2ajeU2i0bmCmMu6O3PzBgGHSNPd0g0u5cyI8w6Dwl7gZPR4N7aoHRyLq%2FBdxAr7vtfHcj9lOp%2BB4w9ccriyoVunuaOJ7u2l3zuV21Lpa9Dsoa48L5BnGcQPGEIL6e%2FcabE3BPN5%2BvGA2aB7answDHZmx5Ni0%2BKSB%2BZ373zHg%2FcuM5mMMDc6qBnuPG1Pmp6Lg4NheQMwryKsMN%2BcAZ04vAIFdzbT5J%2B8gCxcAyBjsNoBzm4w%2F%2BQM7z4%2Bl7D7KIAdco%2FyBexbdgci7ZLVj2VsWu9CVCZpYCfE%2BSy5q9%2FSx8wyYGjvgY6pgHO7BLwB2WDDOGxy53Zdk8tP2FoMRAcEkQ37n3JDK1JGn0a9NONbkhchffUh9FCtz2QuV7YAh51qDZ8EleVz1LJ16qJ5NEuGCVQl0dCJ0TRhjVOIcEbVrrDIMdfFwre6%2FPhwpLds%2BLDzXhSqscVC5nNYzVqWZiHbbW1Mz%2BLo6IiblyeR1%2FUdilpr308KK9kbYAZ9PMpD%2F53XwX6P711q6FLwhSVey8e&X-Amz-Signature=2a0679e7661813734e5dc6477cac53252af16a1b3186d7354a59d9c9eb531ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
