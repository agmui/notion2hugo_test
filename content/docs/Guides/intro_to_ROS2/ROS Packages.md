---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDRFLWL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICG8F9O%2Bao8gKPUhXMbUSVXsPJpdVjMKgfKYcoEY0Bd6AiBCuSjhcnPUP1vs9dzZki6aPfo0Qz9z7l3HC9pS5OAEMCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX2PRrCP2Avm%2Fr%2BASKtwDCPtmnsFbNV%2F6ygfeUmCc7rW17sR5W%2F3MnwdPpypi%2Fwlb45JMfp%2FIya7zEtVqAgOKCu22GWGHT1LDKvOThFOtSWG2lP9unUF8H8BeIfkGxwiTgsPqZxs6cgtHabnHMw3ZUOmBd%2BKW1L%2Bom2vYstwCzhGPjiz5j5iYWG4vymvfQ%2BFPXVBbRqUp42iqz7SXjpa9Jzz76l91CA2e7%2FUaPXwI0HarEfnS1jTxLLQKi47E1%2BC9nfvqVUnsngJMNDFeVAEkWDY4uEPlNbL4fhEKPUyfYZsNVKONiGJtiLUK6IMQCCp%2B6coqzu5PxI9F5IBDwIhhg0k69spo2YJHd5XPtSIsFbftavHL5vIeMsnPxUnvYJjxDEBsEaohGisTtluzxO%2FbgV3Gi0u5mbkdNYXNEclAoG%2FGAMev9oSj4U49VUhF1fEHpPGXkhRU43E%2Fxpt4XvB3qumzpdUnNmM5z1vlQ6AZYPNWi9b1PnaNbkiMQP%2FrW799M%2BrBVnBz9SCjJuzhn0vL%2B8gZlbjs1t0kQcNjcFrurH3DFyVn8v2HXRqw2Mw5cZ91WcDHfoWZkSdiBctA4SJiYcnQB7gUY5qK4GbpDIUPv1UyCc7DoiR8wQcO%2FnBIwFB484l6A18J867ZgfUwoPn4wwY6pgGPbGQLBxswfZFwMPTDUM4EX1HaPvEnyiiv5D6YHjd5tSra405l3%2FA9shroFHvQCkGV9mpYDFoZf7%2BhN9TcS5heZ0wo6VNxWxp%2F0CoxnQEyYfzSl8JcPj3MvyNcEHdR4teLpEn2yWzgzsGRsW1zBwUZSTtJRrwnzh4q4Y5wQWF7wJrH2frbUv4vh91S847ozc9KLGrOsLxlb5%2Fb%2BdvJF6SYgNt98IjT&X-Amz-Signature=e5c5f183a485c2366df676e666ff25ef5ed6fe3c5c93308dc2bbb86776f10ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDRFLWL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICG8F9O%2Bao8gKPUhXMbUSVXsPJpdVjMKgfKYcoEY0Bd6AiBCuSjhcnPUP1vs9dzZki6aPfo0Qz9z7l3HC9pS5OAEMCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX2PRrCP2Avm%2Fr%2BASKtwDCPtmnsFbNV%2F6ygfeUmCc7rW17sR5W%2F3MnwdPpypi%2Fwlb45JMfp%2FIya7zEtVqAgOKCu22GWGHT1LDKvOThFOtSWG2lP9unUF8H8BeIfkGxwiTgsPqZxs6cgtHabnHMw3ZUOmBd%2BKW1L%2Bom2vYstwCzhGPjiz5j5iYWG4vymvfQ%2BFPXVBbRqUp42iqz7SXjpa9Jzz76l91CA2e7%2FUaPXwI0HarEfnS1jTxLLQKi47E1%2BC9nfvqVUnsngJMNDFeVAEkWDY4uEPlNbL4fhEKPUyfYZsNVKONiGJtiLUK6IMQCCp%2B6coqzu5PxI9F5IBDwIhhg0k69spo2YJHd5XPtSIsFbftavHL5vIeMsnPxUnvYJjxDEBsEaohGisTtluzxO%2FbgV3Gi0u5mbkdNYXNEclAoG%2FGAMev9oSj4U49VUhF1fEHpPGXkhRU43E%2Fxpt4XvB3qumzpdUnNmM5z1vlQ6AZYPNWi9b1PnaNbkiMQP%2FrW799M%2BrBVnBz9SCjJuzhn0vL%2B8gZlbjs1t0kQcNjcFrurH3DFyVn8v2HXRqw2Mw5cZ91WcDHfoWZkSdiBctA4SJiYcnQB7gUY5qK4GbpDIUPv1UyCc7DoiR8wQcO%2FnBIwFB484l6A18J867ZgfUwoPn4wwY6pgGPbGQLBxswfZFwMPTDUM4EX1HaPvEnyiiv5D6YHjd5tSra405l3%2FA9shroFHvQCkGV9mpYDFoZf7%2BhN9TcS5heZ0wo6VNxWxp%2F0CoxnQEyYfzSl8JcPj3MvyNcEHdR4teLpEn2yWzgzsGRsW1zBwUZSTtJRrwnzh4q4Y5wQWF7wJrH2frbUv4vh91S847ozc9KLGrOsLxlb5%2Fb%2BdvJF6SYgNt98IjT&X-Amz-Signature=2be07e64884f9cd97fe3ffc2ad9a883224de8a3af7e3492e71f276d9d2d5bddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDRFLWL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICG8F9O%2Bao8gKPUhXMbUSVXsPJpdVjMKgfKYcoEY0Bd6AiBCuSjhcnPUP1vs9dzZki6aPfo0Qz9z7l3HC9pS5OAEMCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX2PRrCP2Avm%2Fr%2BASKtwDCPtmnsFbNV%2F6ygfeUmCc7rW17sR5W%2F3MnwdPpypi%2Fwlb45JMfp%2FIya7zEtVqAgOKCu22GWGHT1LDKvOThFOtSWG2lP9unUF8H8BeIfkGxwiTgsPqZxs6cgtHabnHMw3ZUOmBd%2BKW1L%2Bom2vYstwCzhGPjiz5j5iYWG4vymvfQ%2BFPXVBbRqUp42iqz7SXjpa9Jzz76l91CA2e7%2FUaPXwI0HarEfnS1jTxLLQKi47E1%2BC9nfvqVUnsngJMNDFeVAEkWDY4uEPlNbL4fhEKPUyfYZsNVKONiGJtiLUK6IMQCCp%2B6coqzu5PxI9F5IBDwIhhg0k69spo2YJHd5XPtSIsFbftavHL5vIeMsnPxUnvYJjxDEBsEaohGisTtluzxO%2FbgV3Gi0u5mbkdNYXNEclAoG%2FGAMev9oSj4U49VUhF1fEHpPGXkhRU43E%2Fxpt4XvB3qumzpdUnNmM5z1vlQ6AZYPNWi9b1PnaNbkiMQP%2FrW799M%2BrBVnBz9SCjJuzhn0vL%2B8gZlbjs1t0kQcNjcFrurH3DFyVn8v2HXRqw2Mw5cZ91WcDHfoWZkSdiBctA4SJiYcnQB7gUY5qK4GbpDIUPv1UyCc7DoiR8wQcO%2FnBIwFB484l6A18J867ZgfUwoPn4wwY6pgGPbGQLBxswfZFwMPTDUM4EX1HaPvEnyiiv5D6YHjd5tSra405l3%2FA9shroFHvQCkGV9mpYDFoZf7%2BhN9TcS5heZ0wo6VNxWxp%2F0CoxnQEyYfzSl8JcPj3MvyNcEHdR4teLpEn2yWzgzsGRsW1zBwUZSTtJRrwnzh4q4Y5wQWF7wJrH2frbUv4vh91S847ozc9KLGrOsLxlb5%2Fb%2BdvJF6SYgNt98IjT&X-Amz-Signature=3d32f6c872a4b7e184c896c3b94ebeb7847cf779c88b6158685e13cddf9fcba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDRFLWL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICG8F9O%2Bao8gKPUhXMbUSVXsPJpdVjMKgfKYcoEY0Bd6AiBCuSjhcnPUP1vs9dzZki6aPfo0Qz9z7l3HC9pS5OAEMCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX2PRrCP2Avm%2Fr%2BASKtwDCPtmnsFbNV%2F6ygfeUmCc7rW17sR5W%2F3MnwdPpypi%2Fwlb45JMfp%2FIya7zEtVqAgOKCu22GWGHT1LDKvOThFOtSWG2lP9unUF8H8BeIfkGxwiTgsPqZxs6cgtHabnHMw3ZUOmBd%2BKW1L%2Bom2vYstwCzhGPjiz5j5iYWG4vymvfQ%2BFPXVBbRqUp42iqz7SXjpa9Jzz76l91CA2e7%2FUaPXwI0HarEfnS1jTxLLQKi47E1%2BC9nfvqVUnsngJMNDFeVAEkWDY4uEPlNbL4fhEKPUyfYZsNVKONiGJtiLUK6IMQCCp%2B6coqzu5PxI9F5IBDwIhhg0k69spo2YJHd5XPtSIsFbftavHL5vIeMsnPxUnvYJjxDEBsEaohGisTtluzxO%2FbgV3Gi0u5mbkdNYXNEclAoG%2FGAMev9oSj4U49VUhF1fEHpPGXkhRU43E%2Fxpt4XvB3qumzpdUnNmM5z1vlQ6AZYPNWi9b1PnaNbkiMQP%2FrW799M%2BrBVnBz9SCjJuzhn0vL%2B8gZlbjs1t0kQcNjcFrurH3DFyVn8v2HXRqw2Mw5cZ91WcDHfoWZkSdiBctA4SJiYcnQB7gUY5qK4GbpDIUPv1UyCc7DoiR8wQcO%2FnBIwFB484l6A18J867ZgfUwoPn4wwY6pgGPbGQLBxswfZFwMPTDUM4EX1HaPvEnyiiv5D6YHjd5tSra405l3%2FA9shroFHvQCkGV9mpYDFoZf7%2BhN9TcS5heZ0wo6VNxWxp%2F0CoxnQEyYfzSl8JcPj3MvyNcEHdR4teLpEn2yWzgzsGRsW1zBwUZSTtJRrwnzh4q4Y5wQWF7wJrH2frbUv4vh91S847ozc9KLGrOsLxlb5%2Fb%2BdvJF6SYgNt98IjT&X-Amz-Signature=983fb4f019466e6cf195041a1ebef290c6ae9d21193b87401e821e50e8fb5846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDRFLWL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICG8F9O%2Bao8gKPUhXMbUSVXsPJpdVjMKgfKYcoEY0Bd6AiBCuSjhcnPUP1vs9dzZki6aPfo0Qz9z7l3HC9pS5OAEMCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX2PRrCP2Avm%2Fr%2BASKtwDCPtmnsFbNV%2F6ygfeUmCc7rW17sR5W%2F3MnwdPpypi%2Fwlb45JMfp%2FIya7zEtVqAgOKCu22GWGHT1LDKvOThFOtSWG2lP9unUF8H8BeIfkGxwiTgsPqZxs6cgtHabnHMw3ZUOmBd%2BKW1L%2Bom2vYstwCzhGPjiz5j5iYWG4vymvfQ%2BFPXVBbRqUp42iqz7SXjpa9Jzz76l91CA2e7%2FUaPXwI0HarEfnS1jTxLLQKi47E1%2BC9nfvqVUnsngJMNDFeVAEkWDY4uEPlNbL4fhEKPUyfYZsNVKONiGJtiLUK6IMQCCp%2B6coqzu5PxI9F5IBDwIhhg0k69spo2YJHd5XPtSIsFbftavHL5vIeMsnPxUnvYJjxDEBsEaohGisTtluzxO%2FbgV3Gi0u5mbkdNYXNEclAoG%2FGAMev9oSj4U49VUhF1fEHpPGXkhRU43E%2Fxpt4XvB3qumzpdUnNmM5z1vlQ6AZYPNWi9b1PnaNbkiMQP%2FrW799M%2BrBVnBz9SCjJuzhn0vL%2B8gZlbjs1t0kQcNjcFrurH3DFyVn8v2HXRqw2Mw5cZ91WcDHfoWZkSdiBctA4SJiYcnQB7gUY5qK4GbpDIUPv1UyCc7DoiR8wQcO%2FnBIwFB484l6A18J867ZgfUwoPn4wwY6pgGPbGQLBxswfZFwMPTDUM4EX1HaPvEnyiiv5D6YHjd5tSra405l3%2FA9shroFHvQCkGV9mpYDFoZf7%2BhN9TcS5heZ0wo6VNxWxp%2F0CoxnQEyYfzSl8JcPj3MvyNcEHdR4teLpEn2yWzgzsGRsW1zBwUZSTtJRrwnzh4q4Y5wQWF7wJrH2frbUv4vh91S847ozc9KLGrOsLxlb5%2Fb%2BdvJF6SYgNt98IjT&X-Amz-Signature=925a03d1da89ef98e51b9f74607ad6cb4af42033addcb60a3c6e00e4a5332ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDRFLWL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICG8F9O%2Bao8gKPUhXMbUSVXsPJpdVjMKgfKYcoEY0Bd6AiBCuSjhcnPUP1vs9dzZki6aPfo0Qz9z7l3HC9pS5OAEMCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX2PRrCP2Avm%2Fr%2BASKtwDCPtmnsFbNV%2F6ygfeUmCc7rW17sR5W%2F3MnwdPpypi%2Fwlb45JMfp%2FIya7zEtVqAgOKCu22GWGHT1LDKvOThFOtSWG2lP9unUF8H8BeIfkGxwiTgsPqZxs6cgtHabnHMw3ZUOmBd%2BKW1L%2Bom2vYstwCzhGPjiz5j5iYWG4vymvfQ%2BFPXVBbRqUp42iqz7SXjpa9Jzz76l91CA2e7%2FUaPXwI0HarEfnS1jTxLLQKi47E1%2BC9nfvqVUnsngJMNDFeVAEkWDY4uEPlNbL4fhEKPUyfYZsNVKONiGJtiLUK6IMQCCp%2B6coqzu5PxI9F5IBDwIhhg0k69spo2YJHd5XPtSIsFbftavHL5vIeMsnPxUnvYJjxDEBsEaohGisTtluzxO%2FbgV3Gi0u5mbkdNYXNEclAoG%2FGAMev9oSj4U49VUhF1fEHpPGXkhRU43E%2Fxpt4XvB3qumzpdUnNmM5z1vlQ6AZYPNWi9b1PnaNbkiMQP%2FrW799M%2BrBVnBz9SCjJuzhn0vL%2B8gZlbjs1t0kQcNjcFrurH3DFyVn8v2HXRqw2Mw5cZ91WcDHfoWZkSdiBctA4SJiYcnQB7gUY5qK4GbpDIUPv1UyCc7DoiR8wQcO%2FnBIwFB484l6A18J867ZgfUwoPn4wwY6pgGPbGQLBxswfZFwMPTDUM4EX1HaPvEnyiiv5D6YHjd5tSra405l3%2FA9shroFHvQCkGV9mpYDFoZf7%2BhN9TcS5heZ0wo6VNxWxp%2F0CoxnQEyYfzSl8JcPj3MvyNcEHdR4teLpEn2yWzgzsGRsW1zBwUZSTtJRrwnzh4q4Y5wQWF7wJrH2frbUv4vh91S847ozc9KLGrOsLxlb5%2Fb%2BdvJF6SYgNt98IjT&X-Amz-Signature=d5414a806e3544eda6c04a6109e798736c9adb388eca322d76203e1c68e59a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDRFLWL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICG8F9O%2Bao8gKPUhXMbUSVXsPJpdVjMKgfKYcoEY0Bd6AiBCuSjhcnPUP1vs9dzZki6aPfo0Qz9z7l3HC9pS5OAEMCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX2PRrCP2Avm%2Fr%2BASKtwDCPtmnsFbNV%2F6ygfeUmCc7rW17sR5W%2F3MnwdPpypi%2Fwlb45JMfp%2FIya7zEtVqAgOKCu22GWGHT1LDKvOThFOtSWG2lP9unUF8H8BeIfkGxwiTgsPqZxs6cgtHabnHMw3ZUOmBd%2BKW1L%2Bom2vYstwCzhGPjiz5j5iYWG4vymvfQ%2BFPXVBbRqUp42iqz7SXjpa9Jzz76l91CA2e7%2FUaPXwI0HarEfnS1jTxLLQKi47E1%2BC9nfvqVUnsngJMNDFeVAEkWDY4uEPlNbL4fhEKPUyfYZsNVKONiGJtiLUK6IMQCCp%2B6coqzu5PxI9F5IBDwIhhg0k69spo2YJHd5XPtSIsFbftavHL5vIeMsnPxUnvYJjxDEBsEaohGisTtluzxO%2FbgV3Gi0u5mbkdNYXNEclAoG%2FGAMev9oSj4U49VUhF1fEHpPGXkhRU43E%2Fxpt4XvB3qumzpdUnNmM5z1vlQ6AZYPNWi9b1PnaNbkiMQP%2FrW799M%2BrBVnBz9SCjJuzhn0vL%2B8gZlbjs1t0kQcNjcFrurH3DFyVn8v2HXRqw2Mw5cZ91WcDHfoWZkSdiBctA4SJiYcnQB7gUY5qK4GbpDIUPv1UyCc7DoiR8wQcO%2FnBIwFB484l6A18J867ZgfUwoPn4wwY6pgGPbGQLBxswfZFwMPTDUM4EX1HaPvEnyiiv5D6YHjd5tSra405l3%2FA9shroFHvQCkGV9mpYDFoZf7%2BhN9TcS5heZ0wo6VNxWxp%2F0CoxnQEyYfzSl8JcPj3MvyNcEHdR4teLpEn2yWzgzsGRsW1zBwUZSTtJRrwnzh4q4Y5wQWF7wJrH2frbUv4vh91S847ozc9KLGrOsLxlb5%2Fb%2BdvJF6SYgNt98IjT&X-Amz-Signature=0e63f06ff177a155beaeceaf7dcc2f38eb7d43571af666c157c4278a143160a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
