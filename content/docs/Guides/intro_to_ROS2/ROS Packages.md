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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VQXM27%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICLEg0TRt6QdpOWSxDyGXNx%2F%2BBdFnkrS8zJbXM5CIHyIAiEA1zUEZcgb9mWiGBR8CIoR97%2FROIPRdJjLwil6fKI%2Fir4q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBlETO7sBwKJxGtJgSrcAxFKBtgz%2BIqbW%2F%2BQ9xOqsjdkRgcbenaiH0SKeMwQv57BJJhCm%2FfsjBnw%2FNSLjRb10ULe6hEQFp11V3cX1PQjDh3VjuyAulk6NBIozn%2FX9pu7ygMjz1DmC83hekV8G2IH%2BgyQoG6g0K79uYPZjHlDEqqW4f0R%2B%2FseKVhoXHcOYbAn%2Fbk63lvaNafGlSyDJTJFVwg7FLj1nSijJJrw1hoNoO8V5mAJEOhOEDC%2FWfTA8ybNx6%2FN6TeXxhdZERzirjbaQGFna80kagVksKpzbiPIY%2BAumblRrXSO7sOMcl2soEcNKt5yre1vfnyn8jlUWUEjU7sA6sDrK25TfNqVL11EZaP6CZr4vpLqOm6eVmjFAZoJfZFlYR83OjcA%2FNndzWFVJCQV2Na9UkvpCMUoXZMckN%2F4xhsPqGx2FTlkZ%2FISZV6hKhClXgqe08fhsL7qf56F4J%2F3f48kd1KMFTCTCwWnZOLjwyQKhr0hykEVgx4MmFudWPilzoWMrzxVJPKpWYI5bB23NPqIyn0%2BVli5cCRxUhR%2BoiYw203G9HlyghyNJ6I8EvWR%2B5PxI8OZjGAhvwpUs4Rsck4NTcmTehI0UD6zoxDDzmYeBw3QduhP9kPCLdtaNemUr0P84mkCTmzWMJaE%2BcwGOqUBSFQygFWvu1mC7LRyVU6vPghKdDUfI0gh186Qz7dj4LiXbW1ACSrEjQb59hrM%2FhpWvye6vnmbZ0rWiuscSOHZKtovD8LNfPP5rWKK8f1eDklIfK2wng2DN%2BTPeo95zt4TGp%2FwrmFXkM%2BJM1R3NowSw6So2%2FqDnRMfjnlbj1yQFkg74fcsVbnZCyPLXU13Uw%2BkZy9Sh8adAYvkT03DXNiAypwcEikE&X-Amz-Signature=68a58b212b907d0a0253c8a0915d56fc17fd1ab54a464955d8a2a1a54ad61c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VQXM27%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICLEg0TRt6QdpOWSxDyGXNx%2F%2BBdFnkrS8zJbXM5CIHyIAiEA1zUEZcgb9mWiGBR8CIoR97%2FROIPRdJjLwil6fKI%2Fir4q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBlETO7sBwKJxGtJgSrcAxFKBtgz%2BIqbW%2F%2BQ9xOqsjdkRgcbenaiH0SKeMwQv57BJJhCm%2FfsjBnw%2FNSLjRb10ULe6hEQFp11V3cX1PQjDh3VjuyAulk6NBIozn%2FX9pu7ygMjz1DmC83hekV8G2IH%2BgyQoG6g0K79uYPZjHlDEqqW4f0R%2B%2FseKVhoXHcOYbAn%2Fbk63lvaNafGlSyDJTJFVwg7FLj1nSijJJrw1hoNoO8V5mAJEOhOEDC%2FWfTA8ybNx6%2FN6TeXxhdZERzirjbaQGFna80kagVksKpzbiPIY%2BAumblRrXSO7sOMcl2soEcNKt5yre1vfnyn8jlUWUEjU7sA6sDrK25TfNqVL11EZaP6CZr4vpLqOm6eVmjFAZoJfZFlYR83OjcA%2FNndzWFVJCQV2Na9UkvpCMUoXZMckN%2F4xhsPqGx2FTlkZ%2FISZV6hKhClXgqe08fhsL7qf56F4J%2F3f48kd1KMFTCTCwWnZOLjwyQKhr0hykEVgx4MmFudWPilzoWMrzxVJPKpWYI5bB23NPqIyn0%2BVli5cCRxUhR%2BoiYw203G9HlyghyNJ6I8EvWR%2B5PxI8OZjGAhvwpUs4Rsck4NTcmTehI0UD6zoxDDzmYeBw3QduhP9kPCLdtaNemUr0P84mkCTmzWMJaE%2BcwGOqUBSFQygFWvu1mC7LRyVU6vPghKdDUfI0gh186Qz7dj4LiXbW1ACSrEjQb59hrM%2FhpWvye6vnmbZ0rWiuscSOHZKtovD8LNfPP5rWKK8f1eDklIfK2wng2DN%2BTPeo95zt4TGp%2FwrmFXkM%2BJM1R3NowSw6So2%2FqDnRMfjnlbj1yQFkg74fcsVbnZCyPLXU13Uw%2BkZy9Sh8adAYvkT03DXNiAypwcEikE&X-Amz-Signature=94f2c636167c44c4d67314de79b6914695b70ca682eb339d3ca47ff93bbdb556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VQXM27%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICLEg0TRt6QdpOWSxDyGXNx%2F%2BBdFnkrS8zJbXM5CIHyIAiEA1zUEZcgb9mWiGBR8CIoR97%2FROIPRdJjLwil6fKI%2Fir4q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBlETO7sBwKJxGtJgSrcAxFKBtgz%2BIqbW%2F%2BQ9xOqsjdkRgcbenaiH0SKeMwQv57BJJhCm%2FfsjBnw%2FNSLjRb10ULe6hEQFp11V3cX1PQjDh3VjuyAulk6NBIozn%2FX9pu7ygMjz1DmC83hekV8G2IH%2BgyQoG6g0K79uYPZjHlDEqqW4f0R%2B%2FseKVhoXHcOYbAn%2Fbk63lvaNafGlSyDJTJFVwg7FLj1nSijJJrw1hoNoO8V5mAJEOhOEDC%2FWfTA8ybNx6%2FN6TeXxhdZERzirjbaQGFna80kagVksKpzbiPIY%2BAumblRrXSO7sOMcl2soEcNKt5yre1vfnyn8jlUWUEjU7sA6sDrK25TfNqVL11EZaP6CZr4vpLqOm6eVmjFAZoJfZFlYR83OjcA%2FNndzWFVJCQV2Na9UkvpCMUoXZMckN%2F4xhsPqGx2FTlkZ%2FISZV6hKhClXgqe08fhsL7qf56F4J%2F3f48kd1KMFTCTCwWnZOLjwyQKhr0hykEVgx4MmFudWPilzoWMrzxVJPKpWYI5bB23NPqIyn0%2BVli5cCRxUhR%2BoiYw203G9HlyghyNJ6I8EvWR%2B5PxI8OZjGAhvwpUs4Rsck4NTcmTehI0UD6zoxDDzmYeBw3QduhP9kPCLdtaNemUr0P84mkCTmzWMJaE%2BcwGOqUBSFQygFWvu1mC7LRyVU6vPghKdDUfI0gh186Qz7dj4LiXbW1ACSrEjQb59hrM%2FhpWvye6vnmbZ0rWiuscSOHZKtovD8LNfPP5rWKK8f1eDklIfK2wng2DN%2BTPeo95zt4TGp%2FwrmFXkM%2BJM1R3NowSw6So2%2FqDnRMfjnlbj1yQFkg74fcsVbnZCyPLXU13Uw%2BkZy9Sh8adAYvkT03DXNiAypwcEikE&X-Amz-Signature=31b8e8d3579d30188a0bd7937b5631b6be069c3733f1cbd196cb94fe26956600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VQXM27%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICLEg0TRt6QdpOWSxDyGXNx%2F%2BBdFnkrS8zJbXM5CIHyIAiEA1zUEZcgb9mWiGBR8CIoR97%2FROIPRdJjLwil6fKI%2Fir4q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBlETO7sBwKJxGtJgSrcAxFKBtgz%2BIqbW%2F%2BQ9xOqsjdkRgcbenaiH0SKeMwQv57BJJhCm%2FfsjBnw%2FNSLjRb10ULe6hEQFp11V3cX1PQjDh3VjuyAulk6NBIozn%2FX9pu7ygMjz1DmC83hekV8G2IH%2BgyQoG6g0K79uYPZjHlDEqqW4f0R%2B%2FseKVhoXHcOYbAn%2Fbk63lvaNafGlSyDJTJFVwg7FLj1nSijJJrw1hoNoO8V5mAJEOhOEDC%2FWfTA8ybNx6%2FN6TeXxhdZERzirjbaQGFna80kagVksKpzbiPIY%2BAumblRrXSO7sOMcl2soEcNKt5yre1vfnyn8jlUWUEjU7sA6sDrK25TfNqVL11EZaP6CZr4vpLqOm6eVmjFAZoJfZFlYR83OjcA%2FNndzWFVJCQV2Na9UkvpCMUoXZMckN%2F4xhsPqGx2FTlkZ%2FISZV6hKhClXgqe08fhsL7qf56F4J%2F3f48kd1KMFTCTCwWnZOLjwyQKhr0hykEVgx4MmFudWPilzoWMrzxVJPKpWYI5bB23NPqIyn0%2BVli5cCRxUhR%2BoiYw203G9HlyghyNJ6I8EvWR%2B5PxI8OZjGAhvwpUs4Rsck4NTcmTehI0UD6zoxDDzmYeBw3QduhP9kPCLdtaNemUr0P84mkCTmzWMJaE%2BcwGOqUBSFQygFWvu1mC7LRyVU6vPghKdDUfI0gh186Qz7dj4LiXbW1ACSrEjQb59hrM%2FhpWvye6vnmbZ0rWiuscSOHZKtovD8LNfPP5rWKK8f1eDklIfK2wng2DN%2BTPeo95zt4TGp%2FwrmFXkM%2BJM1R3NowSw6So2%2FqDnRMfjnlbj1yQFkg74fcsVbnZCyPLXU13Uw%2BkZy9Sh8adAYvkT03DXNiAypwcEikE&X-Amz-Signature=98aa9cd754149a797d06bc8dab795a772c7f888c80f4a5a45a82172b61b53832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VQXM27%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICLEg0TRt6QdpOWSxDyGXNx%2F%2BBdFnkrS8zJbXM5CIHyIAiEA1zUEZcgb9mWiGBR8CIoR97%2FROIPRdJjLwil6fKI%2Fir4q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBlETO7sBwKJxGtJgSrcAxFKBtgz%2BIqbW%2F%2BQ9xOqsjdkRgcbenaiH0SKeMwQv57BJJhCm%2FfsjBnw%2FNSLjRb10ULe6hEQFp11V3cX1PQjDh3VjuyAulk6NBIozn%2FX9pu7ygMjz1DmC83hekV8G2IH%2BgyQoG6g0K79uYPZjHlDEqqW4f0R%2B%2FseKVhoXHcOYbAn%2Fbk63lvaNafGlSyDJTJFVwg7FLj1nSijJJrw1hoNoO8V5mAJEOhOEDC%2FWfTA8ybNx6%2FN6TeXxhdZERzirjbaQGFna80kagVksKpzbiPIY%2BAumblRrXSO7sOMcl2soEcNKt5yre1vfnyn8jlUWUEjU7sA6sDrK25TfNqVL11EZaP6CZr4vpLqOm6eVmjFAZoJfZFlYR83OjcA%2FNndzWFVJCQV2Na9UkvpCMUoXZMckN%2F4xhsPqGx2FTlkZ%2FISZV6hKhClXgqe08fhsL7qf56F4J%2F3f48kd1KMFTCTCwWnZOLjwyQKhr0hykEVgx4MmFudWPilzoWMrzxVJPKpWYI5bB23NPqIyn0%2BVli5cCRxUhR%2BoiYw203G9HlyghyNJ6I8EvWR%2B5PxI8OZjGAhvwpUs4Rsck4NTcmTehI0UD6zoxDDzmYeBw3QduhP9kPCLdtaNemUr0P84mkCTmzWMJaE%2BcwGOqUBSFQygFWvu1mC7LRyVU6vPghKdDUfI0gh186Qz7dj4LiXbW1ACSrEjQb59hrM%2FhpWvye6vnmbZ0rWiuscSOHZKtovD8LNfPP5rWKK8f1eDklIfK2wng2DN%2BTPeo95zt4TGp%2FwrmFXkM%2BJM1R3NowSw6So2%2FqDnRMfjnlbj1yQFkg74fcsVbnZCyPLXU13Uw%2BkZy9Sh8adAYvkT03DXNiAypwcEikE&X-Amz-Signature=9e2a91ecbc9e7688ef6fca017035eb81eba7e866eb4e12b2160206e85326b426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VQXM27%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICLEg0TRt6QdpOWSxDyGXNx%2F%2BBdFnkrS8zJbXM5CIHyIAiEA1zUEZcgb9mWiGBR8CIoR97%2FROIPRdJjLwil6fKI%2Fir4q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBlETO7sBwKJxGtJgSrcAxFKBtgz%2BIqbW%2F%2BQ9xOqsjdkRgcbenaiH0SKeMwQv57BJJhCm%2FfsjBnw%2FNSLjRb10ULe6hEQFp11V3cX1PQjDh3VjuyAulk6NBIozn%2FX9pu7ygMjz1DmC83hekV8G2IH%2BgyQoG6g0K79uYPZjHlDEqqW4f0R%2B%2FseKVhoXHcOYbAn%2Fbk63lvaNafGlSyDJTJFVwg7FLj1nSijJJrw1hoNoO8V5mAJEOhOEDC%2FWfTA8ybNx6%2FN6TeXxhdZERzirjbaQGFna80kagVksKpzbiPIY%2BAumblRrXSO7sOMcl2soEcNKt5yre1vfnyn8jlUWUEjU7sA6sDrK25TfNqVL11EZaP6CZr4vpLqOm6eVmjFAZoJfZFlYR83OjcA%2FNndzWFVJCQV2Na9UkvpCMUoXZMckN%2F4xhsPqGx2FTlkZ%2FISZV6hKhClXgqe08fhsL7qf56F4J%2F3f48kd1KMFTCTCwWnZOLjwyQKhr0hykEVgx4MmFudWPilzoWMrzxVJPKpWYI5bB23NPqIyn0%2BVli5cCRxUhR%2BoiYw203G9HlyghyNJ6I8EvWR%2B5PxI8OZjGAhvwpUs4Rsck4NTcmTehI0UD6zoxDDzmYeBw3QduhP9kPCLdtaNemUr0P84mkCTmzWMJaE%2BcwGOqUBSFQygFWvu1mC7LRyVU6vPghKdDUfI0gh186Qz7dj4LiXbW1ACSrEjQb59hrM%2FhpWvye6vnmbZ0rWiuscSOHZKtovD8LNfPP5rWKK8f1eDklIfK2wng2DN%2BTPeo95zt4TGp%2FwrmFXkM%2BJM1R3NowSw6So2%2FqDnRMfjnlbj1yQFkg74fcsVbnZCyPLXU13Uw%2BkZy9Sh8adAYvkT03DXNiAypwcEikE&X-Amz-Signature=f0471adf2b7da9dba02a28d11d26a338e6478bd7205c16b039efe4f2496e57de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VQXM27%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICLEg0TRt6QdpOWSxDyGXNx%2F%2BBdFnkrS8zJbXM5CIHyIAiEA1zUEZcgb9mWiGBR8CIoR97%2FROIPRdJjLwil6fKI%2Fir4q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBlETO7sBwKJxGtJgSrcAxFKBtgz%2BIqbW%2F%2BQ9xOqsjdkRgcbenaiH0SKeMwQv57BJJhCm%2FfsjBnw%2FNSLjRb10ULe6hEQFp11V3cX1PQjDh3VjuyAulk6NBIozn%2FX9pu7ygMjz1DmC83hekV8G2IH%2BgyQoG6g0K79uYPZjHlDEqqW4f0R%2B%2FseKVhoXHcOYbAn%2Fbk63lvaNafGlSyDJTJFVwg7FLj1nSijJJrw1hoNoO8V5mAJEOhOEDC%2FWfTA8ybNx6%2FN6TeXxhdZERzirjbaQGFna80kagVksKpzbiPIY%2BAumblRrXSO7sOMcl2soEcNKt5yre1vfnyn8jlUWUEjU7sA6sDrK25TfNqVL11EZaP6CZr4vpLqOm6eVmjFAZoJfZFlYR83OjcA%2FNndzWFVJCQV2Na9UkvpCMUoXZMckN%2F4xhsPqGx2FTlkZ%2FISZV6hKhClXgqe08fhsL7qf56F4J%2F3f48kd1KMFTCTCwWnZOLjwyQKhr0hykEVgx4MmFudWPilzoWMrzxVJPKpWYI5bB23NPqIyn0%2BVli5cCRxUhR%2BoiYw203G9HlyghyNJ6I8EvWR%2B5PxI8OZjGAhvwpUs4Rsck4NTcmTehI0UD6zoxDDzmYeBw3QduhP9kPCLdtaNemUr0P84mkCTmzWMJaE%2BcwGOqUBSFQygFWvu1mC7LRyVU6vPghKdDUfI0gh186Qz7dj4LiXbW1ACSrEjQb59hrM%2FhpWvye6vnmbZ0rWiuscSOHZKtovD8LNfPP5rWKK8f1eDklIfK2wng2DN%2BTPeo95zt4TGp%2FwrmFXkM%2BJM1R3NowSw6So2%2FqDnRMfjnlbj1yQFkg74fcsVbnZCyPLXU13Uw%2BkZy9Sh8adAYvkT03DXNiAypwcEikE&X-Amz-Signature=f015bae8320fa06bf367d4b8550712285dc99c35a39a15e631c106533e7b3515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
