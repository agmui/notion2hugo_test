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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6L7BZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArkXcxCIDc4h6U9WUMIQQ96Pj1YZHdnSkiS4nkUlq%2FjAiABTMJfrpQVvD9esukspLE4x0%2FP%2F6f9tsdbJfiJJ4sLEiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqC19LrNPVJk5sw7KtwDddq%2F1Cx602hN8rTPX7D8a09ofQD2XQ7gGhb8FT3Qb0q8cLah9zB6fF9EjS7bWgEh0Up2R9%2BofJ%2B3MZ31vNKaAG%2F%2FCXP0jj%2ByUbe%2BQw%2FwnZBKqKPi8ClLHu4ECTV7qFyg22Zx9x7DPvuGUR9mvDFb2fpLSn4QuBS04dVQcH8NgANo%2B0ywQ4b2lw8VEct2ygZoRrjL91DsaTp1ziM2fqE%2FoDTkLzN62eXjhh9i4xffqNFrgItRPejOGx0YZvHKarN%2FQnkNFCjNjaDKbPKfKrWcXdUz6Xx1TdN7%2FgjcihH7%2FX2Az5NN22vI1kl0NQxXM8UYMJ8IJGZnWKxWFeqbD%2F%2BIUUMrmwgieBDH%2FIGtpkGE9KJrVX66KjWaTrRiTK25TN4oZ90rAhtsRzi990Ls1O9TzmBcYn6MkjBHwQEIIGHA%2BhFpMWGA6SPhwIyIJNMukn1rp3hgicRlMC4Bsq3DkyMh6N8VXlb6JZEpW8HxGwH5B23lPSw%2FksZRakk%2BmLltHI%2BIcg3d88vDIMXI6VDjuTtAaIkFL2tSt6MaK9UgqsoMKBlhClRE1cMNizDQUhwZowajcMH53cDGoPHCad1auPKlPkr2Jp46aDmazYmqYDb0YtOEHjbohvL4E1JBaGgw29TnwQY6pgF7%2Bw271GaH0zs8hGC9S0DGW5v7ZOEKgWLFpKwefku4T1qX5r9Knb%2FC71suv3z4A2Yltg98LGR%2F%2FfSa9dYpJTZE12I6D4DY7fAMLB7hUfozrr6nWVBYIIceiN8DIeKbVTefNgfolH%2FQ6I1ahqcLdNkX5a0r8E4bohNV3drLrdUM2U%2BunkGNtt5PPEDZTuU81Wpzn3UGp55CWdUAirDii0UZZLXCuFXR&X-Amz-Signature=e0b7fe8dcfb05aebd4dbcc4d60b534f270df0d74cce505e67025028827cef4a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6L7BZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArkXcxCIDc4h6U9WUMIQQ96Pj1YZHdnSkiS4nkUlq%2FjAiABTMJfrpQVvD9esukspLE4x0%2FP%2F6f9tsdbJfiJJ4sLEiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqC19LrNPVJk5sw7KtwDddq%2F1Cx602hN8rTPX7D8a09ofQD2XQ7gGhb8FT3Qb0q8cLah9zB6fF9EjS7bWgEh0Up2R9%2BofJ%2B3MZ31vNKaAG%2F%2FCXP0jj%2ByUbe%2BQw%2FwnZBKqKPi8ClLHu4ECTV7qFyg22Zx9x7DPvuGUR9mvDFb2fpLSn4QuBS04dVQcH8NgANo%2B0ywQ4b2lw8VEct2ygZoRrjL91DsaTp1ziM2fqE%2FoDTkLzN62eXjhh9i4xffqNFrgItRPejOGx0YZvHKarN%2FQnkNFCjNjaDKbPKfKrWcXdUz6Xx1TdN7%2FgjcihH7%2FX2Az5NN22vI1kl0NQxXM8UYMJ8IJGZnWKxWFeqbD%2F%2BIUUMrmwgieBDH%2FIGtpkGE9KJrVX66KjWaTrRiTK25TN4oZ90rAhtsRzi990Ls1O9TzmBcYn6MkjBHwQEIIGHA%2BhFpMWGA6SPhwIyIJNMukn1rp3hgicRlMC4Bsq3DkyMh6N8VXlb6JZEpW8HxGwH5B23lPSw%2FksZRakk%2BmLltHI%2BIcg3d88vDIMXI6VDjuTtAaIkFL2tSt6MaK9UgqsoMKBlhClRE1cMNizDQUhwZowajcMH53cDGoPHCad1auPKlPkr2Jp46aDmazYmqYDb0YtOEHjbohvL4E1JBaGgw29TnwQY6pgF7%2Bw271GaH0zs8hGC9S0DGW5v7ZOEKgWLFpKwefku4T1qX5r9Knb%2FC71suv3z4A2Yltg98LGR%2F%2FfSa9dYpJTZE12I6D4DY7fAMLB7hUfozrr6nWVBYIIceiN8DIeKbVTefNgfolH%2FQ6I1ahqcLdNkX5a0r8E4bohNV3drLrdUM2U%2BunkGNtt5PPEDZTuU81Wpzn3UGp55CWdUAirDii0UZZLXCuFXR&X-Amz-Signature=feb3f966e785e4dd4edb8fc55b58682b2d7b1ac17739ad913cbedbfe6d4688d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6L7BZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArkXcxCIDc4h6U9WUMIQQ96Pj1YZHdnSkiS4nkUlq%2FjAiABTMJfrpQVvD9esukspLE4x0%2FP%2F6f9tsdbJfiJJ4sLEiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqC19LrNPVJk5sw7KtwDddq%2F1Cx602hN8rTPX7D8a09ofQD2XQ7gGhb8FT3Qb0q8cLah9zB6fF9EjS7bWgEh0Up2R9%2BofJ%2B3MZ31vNKaAG%2F%2FCXP0jj%2ByUbe%2BQw%2FwnZBKqKPi8ClLHu4ECTV7qFyg22Zx9x7DPvuGUR9mvDFb2fpLSn4QuBS04dVQcH8NgANo%2B0ywQ4b2lw8VEct2ygZoRrjL91DsaTp1ziM2fqE%2FoDTkLzN62eXjhh9i4xffqNFrgItRPejOGx0YZvHKarN%2FQnkNFCjNjaDKbPKfKrWcXdUz6Xx1TdN7%2FgjcihH7%2FX2Az5NN22vI1kl0NQxXM8UYMJ8IJGZnWKxWFeqbD%2F%2BIUUMrmwgieBDH%2FIGtpkGE9KJrVX66KjWaTrRiTK25TN4oZ90rAhtsRzi990Ls1O9TzmBcYn6MkjBHwQEIIGHA%2BhFpMWGA6SPhwIyIJNMukn1rp3hgicRlMC4Bsq3DkyMh6N8VXlb6JZEpW8HxGwH5B23lPSw%2FksZRakk%2BmLltHI%2BIcg3d88vDIMXI6VDjuTtAaIkFL2tSt6MaK9UgqsoMKBlhClRE1cMNizDQUhwZowajcMH53cDGoPHCad1auPKlPkr2Jp46aDmazYmqYDb0YtOEHjbohvL4E1JBaGgw29TnwQY6pgF7%2Bw271GaH0zs8hGC9S0DGW5v7ZOEKgWLFpKwefku4T1qX5r9Knb%2FC71suv3z4A2Yltg98LGR%2F%2FfSa9dYpJTZE12I6D4DY7fAMLB7hUfozrr6nWVBYIIceiN8DIeKbVTefNgfolH%2FQ6I1ahqcLdNkX5a0r8E4bohNV3drLrdUM2U%2BunkGNtt5PPEDZTuU81Wpzn3UGp55CWdUAirDii0UZZLXCuFXR&X-Amz-Signature=235e04717b637d3b5427b45cd5a3ee36857e28054d72595b332e96067328e437&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6L7BZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArkXcxCIDc4h6U9WUMIQQ96Pj1YZHdnSkiS4nkUlq%2FjAiABTMJfrpQVvD9esukspLE4x0%2FP%2F6f9tsdbJfiJJ4sLEiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqC19LrNPVJk5sw7KtwDddq%2F1Cx602hN8rTPX7D8a09ofQD2XQ7gGhb8FT3Qb0q8cLah9zB6fF9EjS7bWgEh0Up2R9%2BofJ%2B3MZ31vNKaAG%2F%2FCXP0jj%2ByUbe%2BQw%2FwnZBKqKPi8ClLHu4ECTV7qFyg22Zx9x7DPvuGUR9mvDFb2fpLSn4QuBS04dVQcH8NgANo%2B0ywQ4b2lw8VEct2ygZoRrjL91DsaTp1ziM2fqE%2FoDTkLzN62eXjhh9i4xffqNFrgItRPejOGx0YZvHKarN%2FQnkNFCjNjaDKbPKfKrWcXdUz6Xx1TdN7%2FgjcihH7%2FX2Az5NN22vI1kl0NQxXM8UYMJ8IJGZnWKxWFeqbD%2F%2BIUUMrmwgieBDH%2FIGtpkGE9KJrVX66KjWaTrRiTK25TN4oZ90rAhtsRzi990Ls1O9TzmBcYn6MkjBHwQEIIGHA%2BhFpMWGA6SPhwIyIJNMukn1rp3hgicRlMC4Bsq3DkyMh6N8VXlb6JZEpW8HxGwH5B23lPSw%2FksZRakk%2BmLltHI%2BIcg3d88vDIMXI6VDjuTtAaIkFL2tSt6MaK9UgqsoMKBlhClRE1cMNizDQUhwZowajcMH53cDGoPHCad1auPKlPkr2Jp46aDmazYmqYDb0YtOEHjbohvL4E1JBaGgw29TnwQY6pgF7%2Bw271GaH0zs8hGC9S0DGW5v7ZOEKgWLFpKwefku4T1qX5r9Knb%2FC71suv3z4A2Yltg98LGR%2F%2FfSa9dYpJTZE12I6D4DY7fAMLB7hUfozrr6nWVBYIIceiN8DIeKbVTefNgfolH%2FQ6I1ahqcLdNkX5a0r8E4bohNV3drLrdUM2U%2BunkGNtt5PPEDZTuU81Wpzn3UGp55CWdUAirDii0UZZLXCuFXR&X-Amz-Signature=6f4c15415f48e667a49e5266d80c0ae1f86b3b1a675544bce66b13915cc642c7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6L7BZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArkXcxCIDc4h6U9WUMIQQ96Pj1YZHdnSkiS4nkUlq%2FjAiABTMJfrpQVvD9esukspLE4x0%2FP%2F6f9tsdbJfiJJ4sLEiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqC19LrNPVJk5sw7KtwDddq%2F1Cx602hN8rTPX7D8a09ofQD2XQ7gGhb8FT3Qb0q8cLah9zB6fF9EjS7bWgEh0Up2R9%2BofJ%2B3MZ31vNKaAG%2F%2FCXP0jj%2ByUbe%2BQw%2FwnZBKqKPi8ClLHu4ECTV7qFyg22Zx9x7DPvuGUR9mvDFb2fpLSn4QuBS04dVQcH8NgANo%2B0ywQ4b2lw8VEct2ygZoRrjL91DsaTp1ziM2fqE%2FoDTkLzN62eXjhh9i4xffqNFrgItRPejOGx0YZvHKarN%2FQnkNFCjNjaDKbPKfKrWcXdUz6Xx1TdN7%2FgjcihH7%2FX2Az5NN22vI1kl0NQxXM8UYMJ8IJGZnWKxWFeqbD%2F%2BIUUMrmwgieBDH%2FIGtpkGE9KJrVX66KjWaTrRiTK25TN4oZ90rAhtsRzi990Ls1O9TzmBcYn6MkjBHwQEIIGHA%2BhFpMWGA6SPhwIyIJNMukn1rp3hgicRlMC4Bsq3DkyMh6N8VXlb6JZEpW8HxGwH5B23lPSw%2FksZRakk%2BmLltHI%2BIcg3d88vDIMXI6VDjuTtAaIkFL2tSt6MaK9UgqsoMKBlhClRE1cMNizDQUhwZowajcMH53cDGoPHCad1auPKlPkr2Jp46aDmazYmqYDb0YtOEHjbohvL4E1JBaGgw29TnwQY6pgF7%2Bw271GaH0zs8hGC9S0DGW5v7ZOEKgWLFpKwefku4T1qX5r9Knb%2FC71suv3z4A2Yltg98LGR%2F%2FfSa9dYpJTZE12I6D4DY7fAMLB7hUfozrr6nWVBYIIceiN8DIeKbVTefNgfolH%2FQ6I1ahqcLdNkX5a0r8E4bohNV3drLrdUM2U%2BunkGNtt5PPEDZTuU81Wpzn3UGp55CWdUAirDii0UZZLXCuFXR&X-Amz-Signature=786a331ea7ead0c85673e5a2dee85336490aa8a56da316fbfb4532ef034a273f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6L7BZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArkXcxCIDc4h6U9WUMIQQ96Pj1YZHdnSkiS4nkUlq%2FjAiABTMJfrpQVvD9esukspLE4x0%2FP%2F6f9tsdbJfiJJ4sLEiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqC19LrNPVJk5sw7KtwDddq%2F1Cx602hN8rTPX7D8a09ofQD2XQ7gGhb8FT3Qb0q8cLah9zB6fF9EjS7bWgEh0Up2R9%2BofJ%2B3MZ31vNKaAG%2F%2FCXP0jj%2ByUbe%2BQw%2FwnZBKqKPi8ClLHu4ECTV7qFyg22Zx9x7DPvuGUR9mvDFb2fpLSn4QuBS04dVQcH8NgANo%2B0ywQ4b2lw8VEct2ygZoRrjL91DsaTp1ziM2fqE%2FoDTkLzN62eXjhh9i4xffqNFrgItRPejOGx0YZvHKarN%2FQnkNFCjNjaDKbPKfKrWcXdUz6Xx1TdN7%2FgjcihH7%2FX2Az5NN22vI1kl0NQxXM8UYMJ8IJGZnWKxWFeqbD%2F%2BIUUMrmwgieBDH%2FIGtpkGE9KJrVX66KjWaTrRiTK25TN4oZ90rAhtsRzi990Ls1O9TzmBcYn6MkjBHwQEIIGHA%2BhFpMWGA6SPhwIyIJNMukn1rp3hgicRlMC4Bsq3DkyMh6N8VXlb6JZEpW8HxGwH5B23lPSw%2FksZRakk%2BmLltHI%2BIcg3d88vDIMXI6VDjuTtAaIkFL2tSt6MaK9UgqsoMKBlhClRE1cMNizDQUhwZowajcMH53cDGoPHCad1auPKlPkr2Jp46aDmazYmqYDb0YtOEHjbohvL4E1JBaGgw29TnwQY6pgF7%2Bw271GaH0zs8hGC9S0DGW5v7ZOEKgWLFpKwefku4T1qX5r9Knb%2FC71suv3z4A2Yltg98LGR%2F%2FfSa9dYpJTZE12I6D4DY7fAMLB7hUfozrr6nWVBYIIceiN8DIeKbVTefNgfolH%2FQ6I1ahqcLdNkX5a0r8E4bohNV3drLrdUM2U%2BunkGNtt5PPEDZTuU81Wpzn3UGp55CWdUAirDii0UZZLXCuFXR&X-Amz-Signature=d49b314220503ee3bf192eefe4400b82dd3a9ab70371c936e9d023e39912cd66&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6L7BZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArkXcxCIDc4h6U9WUMIQQ96Pj1YZHdnSkiS4nkUlq%2FjAiABTMJfrpQVvD9esukspLE4x0%2FP%2F6f9tsdbJfiJJ4sLEiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqC19LrNPVJk5sw7KtwDddq%2F1Cx602hN8rTPX7D8a09ofQD2XQ7gGhb8FT3Qb0q8cLah9zB6fF9EjS7bWgEh0Up2R9%2BofJ%2B3MZ31vNKaAG%2F%2FCXP0jj%2ByUbe%2BQw%2FwnZBKqKPi8ClLHu4ECTV7qFyg22Zx9x7DPvuGUR9mvDFb2fpLSn4QuBS04dVQcH8NgANo%2B0ywQ4b2lw8VEct2ygZoRrjL91DsaTp1ziM2fqE%2FoDTkLzN62eXjhh9i4xffqNFrgItRPejOGx0YZvHKarN%2FQnkNFCjNjaDKbPKfKrWcXdUz6Xx1TdN7%2FgjcihH7%2FX2Az5NN22vI1kl0NQxXM8UYMJ8IJGZnWKxWFeqbD%2F%2BIUUMrmwgieBDH%2FIGtpkGE9KJrVX66KjWaTrRiTK25TN4oZ90rAhtsRzi990Ls1O9TzmBcYn6MkjBHwQEIIGHA%2BhFpMWGA6SPhwIyIJNMukn1rp3hgicRlMC4Bsq3DkyMh6N8VXlb6JZEpW8HxGwH5B23lPSw%2FksZRakk%2BmLltHI%2BIcg3d88vDIMXI6VDjuTtAaIkFL2tSt6MaK9UgqsoMKBlhClRE1cMNizDQUhwZowajcMH53cDGoPHCad1auPKlPkr2Jp46aDmazYmqYDb0YtOEHjbohvL4E1JBaGgw29TnwQY6pgF7%2Bw271GaH0zs8hGC9S0DGW5v7ZOEKgWLFpKwefku4T1qX5r9Knb%2FC71suv3z4A2Yltg98LGR%2F%2FfSa9dYpJTZE12I6D4DY7fAMLB7hUfozrr6nWVBYIIceiN8DIeKbVTefNgfolH%2FQ6I1ahqcLdNkX5a0r8E4bohNV3drLrdUM2U%2BunkGNtt5PPEDZTuU81Wpzn3UGp55CWdUAirDii0UZZLXCuFXR&X-Amz-Signature=8d97ce14867f8bef95c60801df27412e41fe8e744caf455902088cc23a24854c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
