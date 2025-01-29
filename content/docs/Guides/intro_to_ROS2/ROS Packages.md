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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WG6P3N6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgKQuf8bJXXJZQQAWSr47kpGwFzOxaIfZkhpwfJwN6DAiAtgJYI11HiTaEZTTQzz3kehy%2F9m%2FHU%2BsKCG94u98m0ISqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPGV%2BpP2fO4NWE7bKtwDlDHajbtrQDajMEPHcNe0WyWwLJamsaux3tQCnxdF2yR74xNdXnHj03MRwRb0EX48tQh2AwRB5ueGbjlIBjNByRvDtLOojHzCT3FzzBMylAqJJuT0wE1TtuFVhNdb1V5Rruh3SvLbrPOrP3joH0Z%2FN6SSjz1wJ300hqjSYEPUnWSB6rIkTg4pqRB6WkYtHgQay23x4EPRYh0sdEXoc4Cwe0Ndwj11Oc%2BkyLkUv8BI9pbBWvjcLUFEHqQ%2FQcSUzwvugE85262fVW4NS6X8ARYB0Vy2%2BEfy7B7s1A955TtwW4g%2F3iTNdbEA7ti%2FMLjSpoF87eD3Fo8r%2FrIbZrdx2KvSCLs%2FBHai90rVuc2%2BvzjcHlOnTKg1%2Btxm7R5YUMxQWRss6hGmTsGtlxTXUBRCZUb4p5kDeTfFwYCXFAo2eRSuJZE18tk6DaNRsdpogNVUAT2Z6K1CUMmgJFIqG9o64947sJ7LYBPSHesKHgbG2NqrJ9F%2BEGW6Ypt9ay07qe7gT4C%2FeJcQCep1OT5n%2FIzYGRwwFDNJf3YJnIB5SzV6Ci7zJwjWEC0Ad%2FphWAjRhPvd3XjwrE8kmc%2BS7Kx8e3SmSKMUcTUKNwtJUaOd9poxO0ybr5CNwVZxweb11rMPiZYw0L3pvAY6pgGdlLcITKUM8sWLdFbQDe789Yg%2B13dUU2eT1VoZ6JXRyobm46mT%2BLJlJdk4%2BVat2t89hH8%2FLIKWXv%2BEVuNTbQT%2BnUdeXC3mSg1dLWLkYqKQfPvDurNR4e6nOMu1uKTGPHLN6MtR%2FXWGf5xg1M0oaNYKMbJuFbr3XqZ9Zbxo8SHmpd4gLdP0SoyOxQeSQ%2B%2FBcuwDIMjQ5UngFZ8gIfpV8RYcbcXBh7nV&X-Amz-Signature=a736d05957aad2d6f256525d9b0336f388740020d6889d73f849ef6354252dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WG6P3N6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgKQuf8bJXXJZQQAWSr47kpGwFzOxaIfZkhpwfJwN6DAiAtgJYI11HiTaEZTTQzz3kehy%2F9m%2FHU%2BsKCG94u98m0ISqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPGV%2BpP2fO4NWE7bKtwDlDHajbtrQDajMEPHcNe0WyWwLJamsaux3tQCnxdF2yR74xNdXnHj03MRwRb0EX48tQh2AwRB5ueGbjlIBjNByRvDtLOojHzCT3FzzBMylAqJJuT0wE1TtuFVhNdb1V5Rruh3SvLbrPOrP3joH0Z%2FN6SSjz1wJ300hqjSYEPUnWSB6rIkTg4pqRB6WkYtHgQay23x4EPRYh0sdEXoc4Cwe0Ndwj11Oc%2BkyLkUv8BI9pbBWvjcLUFEHqQ%2FQcSUzwvugE85262fVW4NS6X8ARYB0Vy2%2BEfy7B7s1A955TtwW4g%2F3iTNdbEA7ti%2FMLjSpoF87eD3Fo8r%2FrIbZrdx2KvSCLs%2FBHai90rVuc2%2BvzjcHlOnTKg1%2Btxm7R5YUMxQWRss6hGmTsGtlxTXUBRCZUb4p5kDeTfFwYCXFAo2eRSuJZE18tk6DaNRsdpogNVUAT2Z6K1CUMmgJFIqG9o64947sJ7LYBPSHesKHgbG2NqrJ9F%2BEGW6Ypt9ay07qe7gT4C%2FeJcQCep1OT5n%2FIzYGRwwFDNJf3YJnIB5SzV6Ci7zJwjWEC0Ad%2FphWAjRhPvd3XjwrE8kmc%2BS7Kx8e3SmSKMUcTUKNwtJUaOd9poxO0ybr5CNwVZxweb11rMPiZYw0L3pvAY6pgGdlLcITKUM8sWLdFbQDe789Yg%2B13dUU2eT1VoZ6JXRyobm46mT%2BLJlJdk4%2BVat2t89hH8%2FLIKWXv%2BEVuNTbQT%2BnUdeXC3mSg1dLWLkYqKQfPvDurNR4e6nOMu1uKTGPHLN6MtR%2FXWGf5xg1M0oaNYKMbJuFbr3XqZ9Zbxo8SHmpd4gLdP0SoyOxQeSQ%2B%2FBcuwDIMjQ5UngFZ8gIfpV8RYcbcXBh7nV&X-Amz-Signature=f9bfcdee7641e410b4f587505aa563c99a48ebb02cbe5f02eba6e4b6b710ed3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WG6P3N6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgKQuf8bJXXJZQQAWSr47kpGwFzOxaIfZkhpwfJwN6DAiAtgJYI11HiTaEZTTQzz3kehy%2F9m%2FHU%2BsKCG94u98m0ISqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPGV%2BpP2fO4NWE7bKtwDlDHajbtrQDajMEPHcNe0WyWwLJamsaux3tQCnxdF2yR74xNdXnHj03MRwRb0EX48tQh2AwRB5ueGbjlIBjNByRvDtLOojHzCT3FzzBMylAqJJuT0wE1TtuFVhNdb1V5Rruh3SvLbrPOrP3joH0Z%2FN6SSjz1wJ300hqjSYEPUnWSB6rIkTg4pqRB6WkYtHgQay23x4EPRYh0sdEXoc4Cwe0Ndwj11Oc%2BkyLkUv8BI9pbBWvjcLUFEHqQ%2FQcSUzwvugE85262fVW4NS6X8ARYB0Vy2%2BEfy7B7s1A955TtwW4g%2F3iTNdbEA7ti%2FMLjSpoF87eD3Fo8r%2FrIbZrdx2KvSCLs%2FBHai90rVuc2%2BvzjcHlOnTKg1%2Btxm7R5YUMxQWRss6hGmTsGtlxTXUBRCZUb4p5kDeTfFwYCXFAo2eRSuJZE18tk6DaNRsdpogNVUAT2Z6K1CUMmgJFIqG9o64947sJ7LYBPSHesKHgbG2NqrJ9F%2BEGW6Ypt9ay07qe7gT4C%2FeJcQCep1OT5n%2FIzYGRwwFDNJf3YJnIB5SzV6Ci7zJwjWEC0Ad%2FphWAjRhPvd3XjwrE8kmc%2BS7Kx8e3SmSKMUcTUKNwtJUaOd9poxO0ybr5CNwVZxweb11rMPiZYw0L3pvAY6pgGdlLcITKUM8sWLdFbQDe789Yg%2B13dUU2eT1VoZ6JXRyobm46mT%2BLJlJdk4%2BVat2t89hH8%2FLIKWXv%2BEVuNTbQT%2BnUdeXC3mSg1dLWLkYqKQfPvDurNR4e6nOMu1uKTGPHLN6MtR%2FXWGf5xg1M0oaNYKMbJuFbr3XqZ9Zbxo8SHmpd4gLdP0SoyOxQeSQ%2B%2FBcuwDIMjQ5UngFZ8gIfpV8RYcbcXBh7nV&X-Amz-Signature=6ca76df0f703a5842ab11d1f74c2f82df0080c5f4bbc4151b112e053a959797f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WG6P3N6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgKQuf8bJXXJZQQAWSr47kpGwFzOxaIfZkhpwfJwN6DAiAtgJYI11HiTaEZTTQzz3kehy%2F9m%2FHU%2BsKCG94u98m0ISqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPGV%2BpP2fO4NWE7bKtwDlDHajbtrQDajMEPHcNe0WyWwLJamsaux3tQCnxdF2yR74xNdXnHj03MRwRb0EX48tQh2AwRB5ueGbjlIBjNByRvDtLOojHzCT3FzzBMylAqJJuT0wE1TtuFVhNdb1V5Rruh3SvLbrPOrP3joH0Z%2FN6SSjz1wJ300hqjSYEPUnWSB6rIkTg4pqRB6WkYtHgQay23x4EPRYh0sdEXoc4Cwe0Ndwj11Oc%2BkyLkUv8BI9pbBWvjcLUFEHqQ%2FQcSUzwvugE85262fVW4NS6X8ARYB0Vy2%2BEfy7B7s1A955TtwW4g%2F3iTNdbEA7ti%2FMLjSpoF87eD3Fo8r%2FrIbZrdx2KvSCLs%2FBHai90rVuc2%2BvzjcHlOnTKg1%2Btxm7R5YUMxQWRss6hGmTsGtlxTXUBRCZUb4p5kDeTfFwYCXFAo2eRSuJZE18tk6DaNRsdpogNVUAT2Z6K1CUMmgJFIqG9o64947sJ7LYBPSHesKHgbG2NqrJ9F%2BEGW6Ypt9ay07qe7gT4C%2FeJcQCep1OT5n%2FIzYGRwwFDNJf3YJnIB5SzV6Ci7zJwjWEC0Ad%2FphWAjRhPvd3XjwrE8kmc%2BS7Kx8e3SmSKMUcTUKNwtJUaOd9poxO0ybr5CNwVZxweb11rMPiZYw0L3pvAY6pgGdlLcITKUM8sWLdFbQDe789Yg%2B13dUU2eT1VoZ6JXRyobm46mT%2BLJlJdk4%2BVat2t89hH8%2FLIKWXv%2BEVuNTbQT%2BnUdeXC3mSg1dLWLkYqKQfPvDurNR4e6nOMu1uKTGPHLN6MtR%2FXWGf5xg1M0oaNYKMbJuFbr3XqZ9Zbxo8SHmpd4gLdP0SoyOxQeSQ%2B%2FBcuwDIMjQ5UngFZ8gIfpV8RYcbcXBh7nV&X-Amz-Signature=e14d8e9e3b6a21fcc267b9244841f4e764fd34e53595dc6850e50ef35a746f48&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WG6P3N6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgKQuf8bJXXJZQQAWSr47kpGwFzOxaIfZkhpwfJwN6DAiAtgJYI11HiTaEZTTQzz3kehy%2F9m%2FHU%2BsKCG94u98m0ISqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPGV%2BpP2fO4NWE7bKtwDlDHajbtrQDajMEPHcNe0WyWwLJamsaux3tQCnxdF2yR74xNdXnHj03MRwRb0EX48tQh2AwRB5ueGbjlIBjNByRvDtLOojHzCT3FzzBMylAqJJuT0wE1TtuFVhNdb1V5Rruh3SvLbrPOrP3joH0Z%2FN6SSjz1wJ300hqjSYEPUnWSB6rIkTg4pqRB6WkYtHgQay23x4EPRYh0sdEXoc4Cwe0Ndwj11Oc%2BkyLkUv8BI9pbBWvjcLUFEHqQ%2FQcSUzwvugE85262fVW4NS6X8ARYB0Vy2%2BEfy7B7s1A955TtwW4g%2F3iTNdbEA7ti%2FMLjSpoF87eD3Fo8r%2FrIbZrdx2KvSCLs%2FBHai90rVuc2%2BvzjcHlOnTKg1%2Btxm7R5YUMxQWRss6hGmTsGtlxTXUBRCZUb4p5kDeTfFwYCXFAo2eRSuJZE18tk6DaNRsdpogNVUAT2Z6K1CUMmgJFIqG9o64947sJ7LYBPSHesKHgbG2NqrJ9F%2BEGW6Ypt9ay07qe7gT4C%2FeJcQCep1OT5n%2FIzYGRwwFDNJf3YJnIB5SzV6Ci7zJwjWEC0Ad%2FphWAjRhPvd3XjwrE8kmc%2BS7Kx8e3SmSKMUcTUKNwtJUaOd9poxO0ybr5CNwVZxweb11rMPiZYw0L3pvAY6pgGdlLcITKUM8sWLdFbQDe789Yg%2B13dUU2eT1VoZ6JXRyobm46mT%2BLJlJdk4%2BVat2t89hH8%2FLIKWXv%2BEVuNTbQT%2BnUdeXC3mSg1dLWLkYqKQfPvDurNR4e6nOMu1uKTGPHLN6MtR%2FXWGf5xg1M0oaNYKMbJuFbr3XqZ9Zbxo8SHmpd4gLdP0SoyOxQeSQ%2B%2FBcuwDIMjQ5UngFZ8gIfpV8RYcbcXBh7nV&X-Amz-Signature=b42d8f2897564e48886771b2492a85b36b476d151dd6abe72bd5448634ad499c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WG6P3N6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgKQuf8bJXXJZQQAWSr47kpGwFzOxaIfZkhpwfJwN6DAiAtgJYI11HiTaEZTTQzz3kehy%2F9m%2FHU%2BsKCG94u98m0ISqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPGV%2BpP2fO4NWE7bKtwDlDHajbtrQDajMEPHcNe0WyWwLJamsaux3tQCnxdF2yR74xNdXnHj03MRwRb0EX48tQh2AwRB5ueGbjlIBjNByRvDtLOojHzCT3FzzBMylAqJJuT0wE1TtuFVhNdb1V5Rruh3SvLbrPOrP3joH0Z%2FN6SSjz1wJ300hqjSYEPUnWSB6rIkTg4pqRB6WkYtHgQay23x4EPRYh0sdEXoc4Cwe0Ndwj11Oc%2BkyLkUv8BI9pbBWvjcLUFEHqQ%2FQcSUzwvugE85262fVW4NS6X8ARYB0Vy2%2BEfy7B7s1A955TtwW4g%2F3iTNdbEA7ti%2FMLjSpoF87eD3Fo8r%2FrIbZrdx2KvSCLs%2FBHai90rVuc2%2BvzjcHlOnTKg1%2Btxm7R5YUMxQWRss6hGmTsGtlxTXUBRCZUb4p5kDeTfFwYCXFAo2eRSuJZE18tk6DaNRsdpogNVUAT2Z6K1CUMmgJFIqG9o64947sJ7LYBPSHesKHgbG2NqrJ9F%2BEGW6Ypt9ay07qe7gT4C%2FeJcQCep1OT5n%2FIzYGRwwFDNJf3YJnIB5SzV6Ci7zJwjWEC0Ad%2FphWAjRhPvd3XjwrE8kmc%2BS7Kx8e3SmSKMUcTUKNwtJUaOd9poxO0ybr5CNwVZxweb11rMPiZYw0L3pvAY6pgGdlLcITKUM8sWLdFbQDe789Yg%2B13dUU2eT1VoZ6JXRyobm46mT%2BLJlJdk4%2BVat2t89hH8%2FLIKWXv%2BEVuNTbQT%2BnUdeXC3mSg1dLWLkYqKQfPvDurNR4e6nOMu1uKTGPHLN6MtR%2FXWGf5xg1M0oaNYKMbJuFbr3XqZ9Zbxo8SHmpd4gLdP0SoyOxQeSQ%2B%2FBcuwDIMjQ5UngFZ8gIfpV8RYcbcXBh7nV&X-Amz-Signature=8305cfbdeb69707f8f58dc6441567dfccaba0651dafa892707039f9ef602c0ae&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WG6P3N6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgKQuf8bJXXJZQQAWSr47kpGwFzOxaIfZkhpwfJwN6DAiAtgJYI11HiTaEZTTQzz3kehy%2F9m%2FHU%2BsKCG94u98m0ISqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPGV%2BpP2fO4NWE7bKtwDlDHajbtrQDajMEPHcNe0WyWwLJamsaux3tQCnxdF2yR74xNdXnHj03MRwRb0EX48tQh2AwRB5ueGbjlIBjNByRvDtLOojHzCT3FzzBMylAqJJuT0wE1TtuFVhNdb1V5Rruh3SvLbrPOrP3joH0Z%2FN6SSjz1wJ300hqjSYEPUnWSB6rIkTg4pqRB6WkYtHgQay23x4EPRYh0sdEXoc4Cwe0Ndwj11Oc%2BkyLkUv8BI9pbBWvjcLUFEHqQ%2FQcSUzwvugE85262fVW4NS6X8ARYB0Vy2%2BEfy7B7s1A955TtwW4g%2F3iTNdbEA7ti%2FMLjSpoF87eD3Fo8r%2FrIbZrdx2KvSCLs%2FBHai90rVuc2%2BvzjcHlOnTKg1%2Btxm7R5YUMxQWRss6hGmTsGtlxTXUBRCZUb4p5kDeTfFwYCXFAo2eRSuJZE18tk6DaNRsdpogNVUAT2Z6K1CUMmgJFIqG9o64947sJ7LYBPSHesKHgbG2NqrJ9F%2BEGW6Ypt9ay07qe7gT4C%2FeJcQCep1OT5n%2FIzYGRwwFDNJf3YJnIB5SzV6Ci7zJwjWEC0Ad%2FphWAjRhPvd3XjwrE8kmc%2BS7Kx8e3SmSKMUcTUKNwtJUaOd9poxO0ybr5CNwVZxweb11rMPiZYw0L3pvAY6pgGdlLcITKUM8sWLdFbQDe789Yg%2B13dUU2eT1VoZ6JXRyobm46mT%2BLJlJdk4%2BVat2t89hH8%2FLIKWXv%2BEVuNTbQT%2BnUdeXC3mSg1dLWLkYqKQfPvDurNR4e6nOMu1uKTGPHLN6MtR%2FXWGf5xg1M0oaNYKMbJuFbr3XqZ9Zbxo8SHmpd4gLdP0SoyOxQeSQ%2B%2FBcuwDIMjQ5UngFZ8gIfpV8RYcbcXBh7nV&X-Amz-Signature=271422392875b60054aac1603a790507f8e7542afe423a5cb35bdffe0c6f2830&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
