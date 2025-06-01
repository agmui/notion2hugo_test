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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODYLXYL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZXwfLPY21%2FwrVEqzD8x5IT%2FZjHb2EB8KmPUq07AXtjAiB1DywRWxLxMCoW6KtYwrpdwy9fhp%2FF9jDAJX3vvujqgyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BPrbid0Hh3TYzrF7KtwDFwXuoso36pbCcQ8%2F5lNV2zOar42QekA6OAwltfokVrDjh2gHTTU49KMBPIp%2Buq8Rw5vqvp6%2FhHo%2B16IpGEF6V9f0l3pyThuDfwNAK3C6yBV%2FSiARekyVO1KFFWOVB7rzmljykJj3Xu%2F4M094kUyBynyEExPHvuNwYWXdNM%2FeDUT0uPSDGahImcvuIE6EYeibxlusF8CDIfg6dKAnsBJ%2BQwVgq4VmvOC%2BUdHrf7YWRHSixkFQmxpFm8BUWuehglncubOFN3QM%2F1unOrrF%2FHzCpDgg0j90Y0cq8nmfuD2u6IhAZ3ZRdZHG%2BsGLwtkqwl4Sjlw3lwD1HGw1gArShZr0lLHJ7osPdLFoxUwXa7pq1iAwv%2FYeMKV3NdjjynILq6l53xKtb5jL1%2FEDaa7aB2b%2FYA5acNK%2Bd8W4ndFRHkv30fvcs3phPd%2FICrioYuEWmVZfUBxC8V02zAFgdphgNSW59MYXFgkOA29P%2FUkRqdJ2v6ozbFLzyHXvBm%2BdCft4nX9esKngwjbrTcnY6utWFb%2B1SnUG4RDeGlZOXxkwPDCvqQ%2FL%2B55tSd5I6GKDdcz1rLmor3e110Kdr0tzCJ23SriW6dNksvhC84wTRE9zvM%2FTowJuiBQuQMA3%2FYCWOXww4I7uwQY6pgGEOx9AoqEf%2BiepCKmLnjwMGUTC5aGDFLBn5CZS9gNVsCyHmFwfAVUanoASTkKj%2B1The%2FFHNOSBfzFT8WqEaxcAv%2F2XZ%2FZ%2Bb%2FUaJwAf9Wt9aFwuzOb92nDxHTaaV%2Bv4chZFZaHhCnx8KwRErfK%2BfZriU25zBFv9rdcpI2C1OfHELH9bTYfhvo7jj3oIVErY8yXkKTQXZX7psijslmOVbgzUVEYy8uiL&X-Amz-Signature=3aadfb6f5477a2a989db3b7b612e73d62e2bfd4809b71fab8de3fed1b37c0f92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODYLXYL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZXwfLPY21%2FwrVEqzD8x5IT%2FZjHb2EB8KmPUq07AXtjAiB1DywRWxLxMCoW6KtYwrpdwy9fhp%2FF9jDAJX3vvujqgyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BPrbid0Hh3TYzrF7KtwDFwXuoso36pbCcQ8%2F5lNV2zOar42QekA6OAwltfokVrDjh2gHTTU49KMBPIp%2Buq8Rw5vqvp6%2FhHo%2B16IpGEF6V9f0l3pyThuDfwNAK3C6yBV%2FSiARekyVO1KFFWOVB7rzmljykJj3Xu%2F4M094kUyBynyEExPHvuNwYWXdNM%2FeDUT0uPSDGahImcvuIE6EYeibxlusF8CDIfg6dKAnsBJ%2BQwVgq4VmvOC%2BUdHrf7YWRHSixkFQmxpFm8BUWuehglncubOFN3QM%2F1unOrrF%2FHzCpDgg0j90Y0cq8nmfuD2u6IhAZ3ZRdZHG%2BsGLwtkqwl4Sjlw3lwD1HGw1gArShZr0lLHJ7osPdLFoxUwXa7pq1iAwv%2FYeMKV3NdjjynILq6l53xKtb5jL1%2FEDaa7aB2b%2FYA5acNK%2Bd8W4ndFRHkv30fvcs3phPd%2FICrioYuEWmVZfUBxC8V02zAFgdphgNSW59MYXFgkOA29P%2FUkRqdJ2v6ozbFLzyHXvBm%2BdCft4nX9esKngwjbrTcnY6utWFb%2B1SnUG4RDeGlZOXxkwPDCvqQ%2FL%2B55tSd5I6GKDdcz1rLmor3e110Kdr0tzCJ23SriW6dNksvhC84wTRE9zvM%2FTowJuiBQuQMA3%2FYCWOXww4I7uwQY6pgGEOx9AoqEf%2BiepCKmLnjwMGUTC5aGDFLBn5CZS9gNVsCyHmFwfAVUanoASTkKj%2B1The%2FFHNOSBfzFT8WqEaxcAv%2F2XZ%2FZ%2Bb%2FUaJwAf9Wt9aFwuzOb92nDxHTaaV%2Bv4chZFZaHhCnx8KwRErfK%2BfZriU25zBFv9rdcpI2C1OfHELH9bTYfhvo7jj3oIVErY8yXkKTQXZX7psijslmOVbgzUVEYy8uiL&X-Amz-Signature=ba645de07c8ddbfd40ff46d1f70285ca85c1a06be922e33d25fa8fd3a13d7f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODYLXYL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZXwfLPY21%2FwrVEqzD8x5IT%2FZjHb2EB8KmPUq07AXtjAiB1DywRWxLxMCoW6KtYwrpdwy9fhp%2FF9jDAJX3vvujqgyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BPrbid0Hh3TYzrF7KtwDFwXuoso36pbCcQ8%2F5lNV2zOar42QekA6OAwltfokVrDjh2gHTTU49KMBPIp%2Buq8Rw5vqvp6%2FhHo%2B16IpGEF6V9f0l3pyThuDfwNAK3C6yBV%2FSiARekyVO1KFFWOVB7rzmljykJj3Xu%2F4M094kUyBynyEExPHvuNwYWXdNM%2FeDUT0uPSDGahImcvuIE6EYeibxlusF8CDIfg6dKAnsBJ%2BQwVgq4VmvOC%2BUdHrf7YWRHSixkFQmxpFm8BUWuehglncubOFN3QM%2F1unOrrF%2FHzCpDgg0j90Y0cq8nmfuD2u6IhAZ3ZRdZHG%2BsGLwtkqwl4Sjlw3lwD1HGw1gArShZr0lLHJ7osPdLFoxUwXa7pq1iAwv%2FYeMKV3NdjjynILq6l53xKtb5jL1%2FEDaa7aB2b%2FYA5acNK%2Bd8W4ndFRHkv30fvcs3phPd%2FICrioYuEWmVZfUBxC8V02zAFgdphgNSW59MYXFgkOA29P%2FUkRqdJ2v6ozbFLzyHXvBm%2BdCft4nX9esKngwjbrTcnY6utWFb%2B1SnUG4RDeGlZOXxkwPDCvqQ%2FL%2B55tSd5I6GKDdcz1rLmor3e110Kdr0tzCJ23SriW6dNksvhC84wTRE9zvM%2FTowJuiBQuQMA3%2FYCWOXww4I7uwQY6pgGEOx9AoqEf%2BiepCKmLnjwMGUTC5aGDFLBn5CZS9gNVsCyHmFwfAVUanoASTkKj%2B1The%2FFHNOSBfzFT8WqEaxcAv%2F2XZ%2FZ%2Bb%2FUaJwAf9Wt9aFwuzOb92nDxHTaaV%2Bv4chZFZaHhCnx8KwRErfK%2BfZriU25zBFv9rdcpI2C1OfHELH9bTYfhvo7jj3oIVErY8yXkKTQXZX7psijslmOVbgzUVEYy8uiL&X-Amz-Signature=1921ec845254f9fdcd896f840b8f69844659a41a26f65ddc6f37afa9087b4f49&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODYLXYL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZXwfLPY21%2FwrVEqzD8x5IT%2FZjHb2EB8KmPUq07AXtjAiB1DywRWxLxMCoW6KtYwrpdwy9fhp%2FF9jDAJX3vvujqgyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BPrbid0Hh3TYzrF7KtwDFwXuoso36pbCcQ8%2F5lNV2zOar42QekA6OAwltfokVrDjh2gHTTU49KMBPIp%2Buq8Rw5vqvp6%2FhHo%2B16IpGEF6V9f0l3pyThuDfwNAK3C6yBV%2FSiARekyVO1KFFWOVB7rzmljykJj3Xu%2F4M094kUyBynyEExPHvuNwYWXdNM%2FeDUT0uPSDGahImcvuIE6EYeibxlusF8CDIfg6dKAnsBJ%2BQwVgq4VmvOC%2BUdHrf7YWRHSixkFQmxpFm8BUWuehglncubOFN3QM%2F1unOrrF%2FHzCpDgg0j90Y0cq8nmfuD2u6IhAZ3ZRdZHG%2BsGLwtkqwl4Sjlw3lwD1HGw1gArShZr0lLHJ7osPdLFoxUwXa7pq1iAwv%2FYeMKV3NdjjynILq6l53xKtb5jL1%2FEDaa7aB2b%2FYA5acNK%2Bd8W4ndFRHkv30fvcs3phPd%2FICrioYuEWmVZfUBxC8V02zAFgdphgNSW59MYXFgkOA29P%2FUkRqdJ2v6ozbFLzyHXvBm%2BdCft4nX9esKngwjbrTcnY6utWFb%2B1SnUG4RDeGlZOXxkwPDCvqQ%2FL%2B55tSd5I6GKDdcz1rLmor3e110Kdr0tzCJ23SriW6dNksvhC84wTRE9zvM%2FTowJuiBQuQMA3%2FYCWOXww4I7uwQY6pgGEOx9AoqEf%2BiepCKmLnjwMGUTC5aGDFLBn5CZS9gNVsCyHmFwfAVUanoASTkKj%2B1The%2FFHNOSBfzFT8WqEaxcAv%2F2XZ%2FZ%2Bb%2FUaJwAf9Wt9aFwuzOb92nDxHTaaV%2Bv4chZFZaHhCnx8KwRErfK%2BfZriU25zBFv9rdcpI2C1OfHELH9bTYfhvo7jj3oIVErY8yXkKTQXZX7psijslmOVbgzUVEYy8uiL&X-Amz-Signature=dc77846454459fec399ce1c7c1a17cb0dd65ac181bd1fb4ffa3fe6149bec8069&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODYLXYL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZXwfLPY21%2FwrVEqzD8x5IT%2FZjHb2EB8KmPUq07AXtjAiB1DywRWxLxMCoW6KtYwrpdwy9fhp%2FF9jDAJX3vvujqgyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BPrbid0Hh3TYzrF7KtwDFwXuoso36pbCcQ8%2F5lNV2zOar42QekA6OAwltfokVrDjh2gHTTU49KMBPIp%2Buq8Rw5vqvp6%2FhHo%2B16IpGEF6V9f0l3pyThuDfwNAK3C6yBV%2FSiARekyVO1KFFWOVB7rzmljykJj3Xu%2F4M094kUyBynyEExPHvuNwYWXdNM%2FeDUT0uPSDGahImcvuIE6EYeibxlusF8CDIfg6dKAnsBJ%2BQwVgq4VmvOC%2BUdHrf7YWRHSixkFQmxpFm8BUWuehglncubOFN3QM%2F1unOrrF%2FHzCpDgg0j90Y0cq8nmfuD2u6IhAZ3ZRdZHG%2BsGLwtkqwl4Sjlw3lwD1HGw1gArShZr0lLHJ7osPdLFoxUwXa7pq1iAwv%2FYeMKV3NdjjynILq6l53xKtb5jL1%2FEDaa7aB2b%2FYA5acNK%2Bd8W4ndFRHkv30fvcs3phPd%2FICrioYuEWmVZfUBxC8V02zAFgdphgNSW59MYXFgkOA29P%2FUkRqdJ2v6ozbFLzyHXvBm%2BdCft4nX9esKngwjbrTcnY6utWFb%2B1SnUG4RDeGlZOXxkwPDCvqQ%2FL%2B55tSd5I6GKDdcz1rLmor3e110Kdr0tzCJ23SriW6dNksvhC84wTRE9zvM%2FTowJuiBQuQMA3%2FYCWOXww4I7uwQY6pgGEOx9AoqEf%2BiepCKmLnjwMGUTC5aGDFLBn5CZS9gNVsCyHmFwfAVUanoASTkKj%2B1The%2FFHNOSBfzFT8WqEaxcAv%2F2XZ%2FZ%2Bb%2FUaJwAf9Wt9aFwuzOb92nDxHTaaV%2Bv4chZFZaHhCnx8KwRErfK%2BfZriU25zBFv9rdcpI2C1OfHELH9bTYfhvo7jj3oIVErY8yXkKTQXZX7psijslmOVbgzUVEYy8uiL&X-Amz-Signature=d5e626c57fffe5bf38b0b5b1621db7e8602f2f9dadd732904afc43947b730b77&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODYLXYL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZXwfLPY21%2FwrVEqzD8x5IT%2FZjHb2EB8KmPUq07AXtjAiB1DywRWxLxMCoW6KtYwrpdwy9fhp%2FF9jDAJX3vvujqgyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BPrbid0Hh3TYzrF7KtwDFwXuoso36pbCcQ8%2F5lNV2zOar42QekA6OAwltfokVrDjh2gHTTU49KMBPIp%2Buq8Rw5vqvp6%2FhHo%2B16IpGEF6V9f0l3pyThuDfwNAK3C6yBV%2FSiARekyVO1KFFWOVB7rzmljykJj3Xu%2F4M094kUyBynyEExPHvuNwYWXdNM%2FeDUT0uPSDGahImcvuIE6EYeibxlusF8CDIfg6dKAnsBJ%2BQwVgq4VmvOC%2BUdHrf7YWRHSixkFQmxpFm8BUWuehglncubOFN3QM%2F1unOrrF%2FHzCpDgg0j90Y0cq8nmfuD2u6IhAZ3ZRdZHG%2BsGLwtkqwl4Sjlw3lwD1HGw1gArShZr0lLHJ7osPdLFoxUwXa7pq1iAwv%2FYeMKV3NdjjynILq6l53xKtb5jL1%2FEDaa7aB2b%2FYA5acNK%2Bd8W4ndFRHkv30fvcs3phPd%2FICrioYuEWmVZfUBxC8V02zAFgdphgNSW59MYXFgkOA29P%2FUkRqdJ2v6ozbFLzyHXvBm%2BdCft4nX9esKngwjbrTcnY6utWFb%2B1SnUG4RDeGlZOXxkwPDCvqQ%2FL%2B55tSd5I6GKDdcz1rLmor3e110Kdr0tzCJ23SriW6dNksvhC84wTRE9zvM%2FTowJuiBQuQMA3%2FYCWOXww4I7uwQY6pgGEOx9AoqEf%2BiepCKmLnjwMGUTC5aGDFLBn5CZS9gNVsCyHmFwfAVUanoASTkKj%2B1The%2FFHNOSBfzFT8WqEaxcAv%2F2XZ%2FZ%2Bb%2FUaJwAf9Wt9aFwuzOb92nDxHTaaV%2Bv4chZFZaHhCnx8KwRErfK%2BfZriU25zBFv9rdcpI2C1OfHELH9bTYfhvo7jj3oIVErY8yXkKTQXZX7psijslmOVbgzUVEYy8uiL&X-Amz-Signature=43b6538338acc9f52f8502cc3bdfad77d6481a8de534516dbdc0a2569a86b963&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODYLXYL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZXwfLPY21%2FwrVEqzD8x5IT%2FZjHb2EB8KmPUq07AXtjAiB1DywRWxLxMCoW6KtYwrpdwy9fhp%2FF9jDAJX3vvujqgyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BPrbid0Hh3TYzrF7KtwDFwXuoso36pbCcQ8%2F5lNV2zOar42QekA6OAwltfokVrDjh2gHTTU49KMBPIp%2Buq8Rw5vqvp6%2FhHo%2B16IpGEF6V9f0l3pyThuDfwNAK3C6yBV%2FSiARekyVO1KFFWOVB7rzmljykJj3Xu%2F4M094kUyBynyEExPHvuNwYWXdNM%2FeDUT0uPSDGahImcvuIE6EYeibxlusF8CDIfg6dKAnsBJ%2BQwVgq4VmvOC%2BUdHrf7YWRHSixkFQmxpFm8BUWuehglncubOFN3QM%2F1unOrrF%2FHzCpDgg0j90Y0cq8nmfuD2u6IhAZ3ZRdZHG%2BsGLwtkqwl4Sjlw3lwD1HGw1gArShZr0lLHJ7osPdLFoxUwXa7pq1iAwv%2FYeMKV3NdjjynILq6l53xKtb5jL1%2FEDaa7aB2b%2FYA5acNK%2Bd8W4ndFRHkv30fvcs3phPd%2FICrioYuEWmVZfUBxC8V02zAFgdphgNSW59MYXFgkOA29P%2FUkRqdJ2v6ozbFLzyHXvBm%2BdCft4nX9esKngwjbrTcnY6utWFb%2B1SnUG4RDeGlZOXxkwPDCvqQ%2FL%2B55tSd5I6GKDdcz1rLmor3e110Kdr0tzCJ23SriW6dNksvhC84wTRE9zvM%2FTowJuiBQuQMA3%2FYCWOXww4I7uwQY6pgGEOx9AoqEf%2BiepCKmLnjwMGUTC5aGDFLBn5CZS9gNVsCyHmFwfAVUanoASTkKj%2B1The%2FFHNOSBfzFT8WqEaxcAv%2F2XZ%2FZ%2Bb%2FUaJwAf9Wt9aFwuzOb92nDxHTaaV%2Bv4chZFZaHhCnx8KwRErfK%2BfZriU25zBFv9rdcpI2C1OfHELH9bTYfhvo7jj3oIVErY8yXkKTQXZX7psijslmOVbgzUVEYy8uiL&X-Amz-Signature=5a91f8e8634a495e3680bd08b5e62180bace2b903f7fc2bdf3e8ed0a0d367a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
