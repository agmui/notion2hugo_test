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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKAIR4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCt4Q9nG1UrcOPPgTw7lBxv%2BQoDUwsT%2FMPci%2BJ2nVH5SQIgfL4h2M3rQjPKPLgjpSDMnT4MX7bARDWyfH4MhPwyv24qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7xXxycfLXZmaMVsircA8MTmJjARR56h9BM2bqAjLCcSn8PjjHfRTmVyTEHzZBg5YCjwgak4ObKIpIwHAkWfp2x5%2Bkg4xenCLDxPgU0MVSJ5GePMAQ3A7J6ywuXobxNmyUoLkAxOps4lbhAWSyGvCJlD9b%2FtAwXrTnILRQP9lvNqIb2Wie8YeKlYytX6meY%2FvQk5jUfOVyJb00KkfYiPvcWvjt8ZA9ypiEEyQbrL8xaoEi12YXaSTTmqVs9Ktx1f0H7MdQPdW5s7gQTu7CI2CI%2FM%2BLbeIol9UWh6JpzzUPt393jdRGD%2FNMoByFseoF4iSAza8jHR8HFvEhL1G8efIS9hPpOVqT6FBwktMGnStu4wwTqqGFKtVCpj5yQE54Ic4of0%2Fw1naHOvEP9DkE3cRzy3i6QaGdlNIj6peR0flNH7uOnvvfKuRMrgyskdrNVUJQpc%2FLoK3LB1k3Ygw74JTZ7MGerKcuAZmi9Cbx0K7NvQVae9bew6GYJ3HlBXzbRz%2Bmu4oGgtQp7g0Z9X%2BmFBb%2Ffp1UwbEiEzhJDUNEm%2FwIp1f9DPUQRbngP85v0sSjunamSRkUNdJkbw0965gpDBrr7YuD%2B4Ni6f866oh3v1RIpXs%2FAdZGZYLsV5NGI2C%2BfqvCKn5BU%2FtDJ9pb0MJ3F3L8GOqUBv%2BuNmCk2%2BQ%2BboOc32DP0mBNMNiQXyr5gwEn%2B81o05HRq%2FKQheSUYC1beaS%2BcG8xNYf9ls6kdV4zZSz9i6VGcDfoSYl%2FLEanbTOB4nfUUn89BvIbDkH0byekW%2BfFFskIMfUp%2BL6v22XR8WaW5mlUCtvpFd5WIU8F9LjXkQEGVKt5rwvCJ%2FPYv6HZ%2BXcd1uf7SIFDPXY3rW34T5cZbIf1r5ZYEUL7u&X-Amz-Signature=3b3177886cf8744a7f58b889691b37e1f01ad1007d9308fe73b8e3b325c329f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKAIR4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCt4Q9nG1UrcOPPgTw7lBxv%2BQoDUwsT%2FMPci%2BJ2nVH5SQIgfL4h2M3rQjPKPLgjpSDMnT4MX7bARDWyfH4MhPwyv24qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7xXxycfLXZmaMVsircA8MTmJjARR56h9BM2bqAjLCcSn8PjjHfRTmVyTEHzZBg5YCjwgak4ObKIpIwHAkWfp2x5%2Bkg4xenCLDxPgU0MVSJ5GePMAQ3A7J6ywuXobxNmyUoLkAxOps4lbhAWSyGvCJlD9b%2FtAwXrTnILRQP9lvNqIb2Wie8YeKlYytX6meY%2FvQk5jUfOVyJb00KkfYiPvcWvjt8ZA9ypiEEyQbrL8xaoEi12YXaSTTmqVs9Ktx1f0H7MdQPdW5s7gQTu7CI2CI%2FM%2BLbeIol9UWh6JpzzUPt393jdRGD%2FNMoByFseoF4iSAza8jHR8HFvEhL1G8efIS9hPpOVqT6FBwktMGnStu4wwTqqGFKtVCpj5yQE54Ic4of0%2Fw1naHOvEP9DkE3cRzy3i6QaGdlNIj6peR0flNH7uOnvvfKuRMrgyskdrNVUJQpc%2FLoK3LB1k3Ygw74JTZ7MGerKcuAZmi9Cbx0K7NvQVae9bew6GYJ3HlBXzbRz%2Bmu4oGgtQp7g0Z9X%2BmFBb%2Ffp1UwbEiEzhJDUNEm%2FwIp1f9DPUQRbngP85v0sSjunamSRkUNdJkbw0965gpDBrr7YuD%2B4Ni6f866oh3v1RIpXs%2FAdZGZYLsV5NGI2C%2BfqvCKn5BU%2FtDJ9pb0MJ3F3L8GOqUBv%2BuNmCk2%2BQ%2BboOc32DP0mBNMNiQXyr5gwEn%2B81o05HRq%2FKQheSUYC1beaS%2BcG8xNYf9ls6kdV4zZSz9i6VGcDfoSYl%2FLEanbTOB4nfUUn89BvIbDkH0byekW%2BfFFskIMfUp%2BL6v22XR8WaW5mlUCtvpFd5WIU8F9LjXkQEGVKt5rwvCJ%2FPYv6HZ%2BXcd1uf7SIFDPXY3rW34T5cZbIf1r5ZYEUL7u&X-Amz-Signature=dd02beae8ca039630868523df9e38cd4513d3b367ac170143bcc39bc0ba54db1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKAIR4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCt4Q9nG1UrcOPPgTw7lBxv%2BQoDUwsT%2FMPci%2BJ2nVH5SQIgfL4h2M3rQjPKPLgjpSDMnT4MX7bARDWyfH4MhPwyv24qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7xXxycfLXZmaMVsircA8MTmJjARR56h9BM2bqAjLCcSn8PjjHfRTmVyTEHzZBg5YCjwgak4ObKIpIwHAkWfp2x5%2Bkg4xenCLDxPgU0MVSJ5GePMAQ3A7J6ywuXobxNmyUoLkAxOps4lbhAWSyGvCJlD9b%2FtAwXrTnILRQP9lvNqIb2Wie8YeKlYytX6meY%2FvQk5jUfOVyJb00KkfYiPvcWvjt8ZA9ypiEEyQbrL8xaoEi12YXaSTTmqVs9Ktx1f0H7MdQPdW5s7gQTu7CI2CI%2FM%2BLbeIol9UWh6JpzzUPt393jdRGD%2FNMoByFseoF4iSAza8jHR8HFvEhL1G8efIS9hPpOVqT6FBwktMGnStu4wwTqqGFKtVCpj5yQE54Ic4of0%2Fw1naHOvEP9DkE3cRzy3i6QaGdlNIj6peR0flNH7uOnvvfKuRMrgyskdrNVUJQpc%2FLoK3LB1k3Ygw74JTZ7MGerKcuAZmi9Cbx0K7NvQVae9bew6GYJ3HlBXzbRz%2Bmu4oGgtQp7g0Z9X%2BmFBb%2Ffp1UwbEiEzhJDUNEm%2FwIp1f9DPUQRbngP85v0sSjunamSRkUNdJkbw0965gpDBrr7YuD%2B4Ni6f866oh3v1RIpXs%2FAdZGZYLsV5NGI2C%2BfqvCKn5BU%2FtDJ9pb0MJ3F3L8GOqUBv%2BuNmCk2%2BQ%2BboOc32DP0mBNMNiQXyr5gwEn%2B81o05HRq%2FKQheSUYC1beaS%2BcG8xNYf9ls6kdV4zZSz9i6VGcDfoSYl%2FLEanbTOB4nfUUn89BvIbDkH0byekW%2BfFFskIMfUp%2BL6v22XR8WaW5mlUCtvpFd5WIU8F9LjXkQEGVKt5rwvCJ%2FPYv6HZ%2BXcd1uf7SIFDPXY3rW34T5cZbIf1r5ZYEUL7u&X-Amz-Signature=1c4e2d814e516e3047a73be20debe0425a0f1190c0b585e8523d8f48676b64f9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKAIR4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCt4Q9nG1UrcOPPgTw7lBxv%2BQoDUwsT%2FMPci%2BJ2nVH5SQIgfL4h2M3rQjPKPLgjpSDMnT4MX7bARDWyfH4MhPwyv24qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7xXxycfLXZmaMVsircA8MTmJjARR56h9BM2bqAjLCcSn8PjjHfRTmVyTEHzZBg5YCjwgak4ObKIpIwHAkWfp2x5%2Bkg4xenCLDxPgU0MVSJ5GePMAQ3A7J6ywuXobxNmyUoLkAxOps4lbhAWSyGvCJlD9b%2FtAwXrTnILRQP9lvNqIb2Wie8YeKlYytX6meY%2FvQk5jUfOVyJb00KkfYiPvcWvjt8ZA9ypiEEyQbrL8xaoEi12YXaSTTmqVs9Ktx1f0H7MdQPdW5s7gQTu7CI2CI%2FM%2BLbeIol9UWh6JpzzUPt393jdRGD%2FNMoByFseoF4iSAza8jHR8HFvEhL1G8efIS9hPpOVqT6FBwktMGnStu4wwTqqGFKtVCpj5yQE54Ic4of0%2Fw1naHOvEP9DkE3cRzy3i6QaGdlNIj6peR0flNH7uOnvvfKuRMrgyskdrNVUJQpc%2FLoK3LB1k3Ygw74JTZ7MGerKcuAZmi9Cbx0K7NvQVae9bew6GYJ3HlBXzbRz%2Bmu4oGgtQp7g0Z9X%2BmFBb%2Ffp1UwbEiEzhJDUNEm%2FwIp1f9DPUQRbngP85v0sSjunamSRkUNdJkbw0965gpDBrr7YuD%2B4Ni6f866oh3v1RIpXs%2FAdZGZYLsV5NGI2C%2BfqvCKn5BU%2FtDJ9pb0MJ3F3L8GOqUBv%2BuNmCk2%2BQ%2BboOc32DP0mBNMNiQXyr5gwEn%2B81o05HRq%2FKQheSUYC1beaS%2BcG8xNYf9ls6kdV4zZSz9i6VGcDfoSYl%2FLEanbTOB4nfUUn89BvIbDkH0byekW%2BfFFskIMfUp%2BL6v22XR8WaW5mlUCtvpFd5WIU8F9LjXkQEGVKt5rwvCJ%2FPYv6HZ%2BXcd1uf7SIFDPXY3rW34T5cZbIf1r5ZYEUL7u&X-Amz-Signature=6b99a604596c654bb4b1a54d7b58d6492c165560da16ff5116d903b975b2a576&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKAIR4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCt4Q9nG1UrcOPPgTw7lBxv%2BQoDUwsT%2FMPci%2BJ2nVH5SQIgfL4h2M3rQjPKPLgjpSDMnT4MX7bARDWyfH4MhPwyv24qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7xXxycfLXZmaMVsircA8MTmJjARR56h9BM2bqAjLCcSn8PjjHfRTmVyTEHzZBg5YCjwgak4ObKIpIwHAkWfp2x5%2Bkg4xenCLDxPgU0MVSJ5GePMAQ3A7J6ywuXobxNmyUoLkAxOps4lbhAWSyGvCJlD9b%2FtAwXrTnILRQP9lvNqIb2Wie8YeKlYytX6meY%2FvQk5jUfOVyJb00KkfYiPvcWvjt8ZA9ypiEEyQbrL8xaoEi12YXaSTTmqVs9Ktx1f0H7MdQPdW5s7gQTu7CI2CI%2FM%2BLbeIol9UWh6JpzzUPt393jdRGD%2FNMoByFseoF4iSAza8jHR8HFvEhL1G8efIS9hPpOVqT6FBwktMGnStu4wwTqqGFKtVCpj5yQE54Ic4of0%2Fw1naHOvEP9DkE3cRzy3i6QaGdlNIj6peR0flNH7uOnvvfKuRMrgyskdrNVUJQpc%2FLoK3LB1k3Ygw74JTZ7MGerKcuAZmi9Cbx0K7NvQVae9bew6GYJ3HlBXzbRz%2Bmu4oGgtQp7g0Z9X%2BmFBb%2Ffp1UwbEiEzhJDUNEm%2FwIp1f9DPUQRbngP85v0sSjunamSRkUNdJkbw0965gpDBrr7YuD%2B4Ni6f866oh3v1RIpXs%2FAdZGZYLsV5NGI2C%2BfqvCKn5BU%2FtDJ9pb0MJ3F3L8GOqUBv%2BuNmCk2%2BQ%2BboOc32DP0mBNMNiQXyr5gwEn%2B81o05HRq%2FKQheSUYC1beaS%2BcG8xNYf9ls6kdV4zZSz9i6VGcDfoSYl%2FLEanbTOB4nfUUn89BvIbDkH0byekW%2BfFFskIMfUp%2BL6v22XR8WaW5mlUCtvpFd5WIU8F9LjXkQEGVKt5rwvCJ%2FPYv6HZ%2BXcd1uf7SIFDPXY3rW34T5cZbIf1r5ZYEUL7u&X-Amz-Signature=175967caf93bf2a046d04710b4b84660b2ec1e2bc3c6748ca18e53bc9cfa1f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKAIR4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCt4Q9nG1UrcOPPgTw7lBxv%2BQoDUwsT%2FMPci%2BJ2nVH5SQIgfL4h2M3rQjPKPLgjpSDMnT4MX7bARDWyfH4MhPwyv24qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7xXxycfLXZmaMVsircA8MTmJjARR56h9BM2bqAjLCcSn8PjjHfRTmVyTEHzZBg5YCjwgak4ObKIpIwHAkWfp2x5%2Bkg4xenCLDxPgU0MVSJ5GePMAQ3A7J6ywuXobxNmyUoLkAxOps4lbhAWSyGvCJlD9b%2FtAwXrTnILRQP9lvNqIb2Wie8YeKlYytX6meY%2FvQk5jUfOVyJb00KkfYiPvcWvjt8ZA9ypiEEyQbrL8xaoEi12YXaSTTmqVs9Ktx1f0H7MdQPdW5s7gQTu7CI2CI%2FM%2BLbeIol9UWh6JpzzUPt393jdRGD%2FNMoByFseoF4iSAza8jHR8HFvEhL1G8efIS9hPpOVqT6FBwktMGnStu4wwTqqGFKtVCpj5yQE54Ic4of0%2Fw1naHOvEP9DkE3cRzy3i6QaGdlNIj6peR0flNH7uOnvvfKuRMrgyskdrNVUJQpc%2FLoK3LB1k3Ygw74JTZ7MGerKcuAZmi9Cbx0K7NvQVae9bew6GYJ3HlBXzbRz%2Bmu4oGgtQp7g0Z9X%2BmFBb%2Ffp1UwbEiEzhJDUNEm%2FwIp1f9DPUQRbngP85v0sSjunamSRkUNdJkbw0965gpDBrr7YuD%2B4Ni6f866oh3v1RIpXs%2FAdZGZYLsV5NGI2C%2BfqvCKn5BU%2FtDJ9pb0MJ3F3L8GOqUBv%2BuNmCk2%2BQ%2BboOc32DP0mBNMNiQXyr5gwEn%2B81o05HRq%2FKQheSUYC1beaS%2BcG8xNYf9ls6kdV4zZSz9i6VGcDfoSYl%2FLEanbTOB4nfUUn89BvIbDkH0byekW%2BfFFskIMfUp%2BL6v22XR8WaW5mlUCtvpFd5WIU8F9LjXkQEGVKt5rwvCJ%2FPYv6HZ%2BXcd1uf7SIFDPXY3rW34T5cZbIf1r5ZYEUL7u&X-Amz-Signature=f746fe4c63faa746fc2cf28a21b83c21f19b4b1dd98f2abe673c28c5a3608676&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCKAIR4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCt4Q9nG1UrcOPPgTw7lBxv%2BQoDUwsT%2FMPci%2BJ2nVH5SQIgfL4h2M3rQjPKPLgjpSDMnT4MX7bARDWyfH4MhPwyv24qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7xXxycfLXZmaMVsircA8MTmJjARR56h9BM2bqAjLCcSn8PjjHfRTmVyTEHzZBg5YCjwgak4ObKIpIwHAkWfp2x5%2Bkg4xenCLDxPgU0MVSJ5GePMAQ3A7J6ywuXobxNmyUoLkAxOps4lbhAWSyGvCJlD9b%2FtAwXrTnILRQP9lvNqIb2Wie8YeKlYytX6meY%2FvQk5jUfOVyJb00KkfYiPvcWvjt8ZA9ypiEEyQbrL8xaoEi12YXaSTTmqVs9Ktx1f0H7MdQPdW5s7gQTu7CI2CI%2FM%2BLbeIol9UWh6JpzzUPt393jdRGD%2FNMoByFseoF4iSAza8jHR8HFvEhL1G8efIS9hPpOVqT6FBwktMGnStu4wwTqqGFKtVCpj5yQE54Ic4of0%2Fw1naHOvEP9DkE3cRzy3i6QaGdlNIj6peR0flNH7uOnvvfKuRMrgyskdrNVUJQpc%2FLoK3LB1k3Ygw74JTZ7MGerKcuAZmi9Cbx0K7NvQVae9bew6GYJ3HlBXzbRz%2Bmu4oGgtQp7g0Z9X%2BmFBb%2Ffp1UwbEiEzhJDUNEm%2FwIp1f9DPUQRbngP85v0sSjunamSRkUNdJkbw0965gpDBrr7YuD%2B4Ni6f866oh3v1RIpXs%2FAdZGZYLsV5NGI2C%2BfqvCKn5BU%2FtDJ9pb0MJ3F3L8GOqUBv%2BuNmCk2%2BQ%2BboOc32DP0mBNMNiQXyr5gwEn%2B81o05HRq%2FKQheSUYC1beaS%2BcG8xNYf9ls6kdV4zZSz9i6VGcDfoSYl%2FLEanbTOB4nfUUn89BvIbDkH0byekW%2BfFFskIMfUp%2BL6v22XR8WaW5mlUCtvpFd5WIU8F9LjXkQEGVKt5rwvCJ%2FPYv6HZ%2BXcd1uf7SIFDPXY3rW34T5cZbIf1r5ZYEUL7u&X-Amz-Signature=98430dac9accb1545cddf17fc516de428a61087842b1adba46748a81a41bf07a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
