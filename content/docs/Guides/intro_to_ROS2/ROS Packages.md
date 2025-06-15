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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OIFXO2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDXrY%2Bi7%2B25z%2B81y8CXGcNR%2F4I6PKGHwiqZ1AVbjVuyIAiBUMFaIpBxR3hSLjSIupJeQv0liIqk9FD42sdz1%2B10BVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMEpkSvE54tp8FZDOdKtwD0cabCB5EL4of8OGXY8EkYz5Dk3Q7yntwBvVFlMewIrjJXWz1mN4RMR1ESx2BgPVzltW7ZYUtIOvbUMBsQd0%2BVJKKqDn1hy762%2B%2FWFjxT3Sh06tY3UzPODhU1qOsYgxJvjOCTm5bOLf7GhtVwaz6hqmu2V43eRPaVbH8xhSIXs2XNKpKGFq%2BjzOQt%2B0UPOpfiRLyDTzdk%2FmUUB8YXmrj9BJAlVmu0CNfnvsxLoY56%2BVkf4Z7%2Bv6Li3bPZXKATOTiaZuDSMIzztx%2BS2IRbSMXr62UZN10gLt0xRQgBGdlEsk8%2BWASoTGKHHLd1JK9E%2FaYjLLEx5u%2F%2Bi%2FPplZVqyVxcE44b30ReGucMLHf4M2uHLC7GWEgQxMbVCpFEAe4fONl8dyY0dfbrFoabMKFpZ%2FoK0y73D9CnXyXDtaDGULtUPUOdQpZehJwdOcmEkI%2BdtDaWQqmkz3dHpuCYfc44FUaovMKbS6CwTMqwMUEQLgVWvJLaAjn8IAbmPqV0feqD53wosKnjQyx3ATmO3q%2BAx0eas675r9DXd5wAWGyluP8I5AN8gAWFlLXkPJCpZARtjQ2jZcTjNoJ%2BFt27Uq93GcFNETEPM51H3F%2FjKigot1RqytnDjcYJxyRUh0PxKZkwvIO7wgY6pgHoAZq1QIFQiJSYdXinOe3%2BO%2FAhgT4oElFNJHSeI9vXw9MZGx9C7LW6h65A5tMPICMtoic3b%2B2V5n220oQtwjIYV4nuJzj7T%2FnDh7Yu92z0J7wSWk8J8DmfP91Hch7ynxWdTmnJ4p4oLzBhjevRXESyUntAMzlZytWG%2F865TUvYPM%2FfCx598f%2BgS3t9L39E4AQzJcnVOO2oXnWFAcGOMsxP2MYSkrWS&X-Amz-Signature=7ec05416ef2c4b1e0cd59509c5e694a3954c7bef3d064421b4ec6d925e556bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OIFXO2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDXrY%2Bi7%2B25z%2B81y8CXGcNR%2F4I6PKGHwiqZ1AVbjVuyIAiBUMFaIpBxR3hSLjSIupJeQv0liIqk9FD42sdz1%2B10BVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMEpkSvE54tp8FZDOdKtwD0cabCB5EL4of8OGXY8EkYz5Dk3Q7yntwBvVFlMewIrjJXWz1mN4RMR1ESx2BgPVzltW7ZYUtIOvbUMBsQd0%2BVJKKqDn1hy762%2B%2FWFjxT3Sh06tY3UzPODhU1qOsYgxJvjOCTm5bOLf7GhtVwaz6hqmu2V43eRPaVbH8xhSIXs2XNKpKGFq%2BjzOQt%2B0UPOpfiRLyDTzdk%2FmUUB8YXmrj9BJAlVmu0CNfnvsxLoY56%2BVkf4Z7%2Bv6Li3bPZXKATOTiaZuDSMIzztx%2BS2IRbSMXr62UZN10gLt0xRQgBGdlEsk8%2BWASoTGKHHLd1JK9E%2FaYjLLEx5u%2F%2Bi%2FPplZVqyVxcE44b30ReGucMLHf4M2uHLC7GWEgQxMbVCpFEAe4fONl8dyY0dfbrFoabMKFpZ%2FoK0y73D9CnXyXDtaDGULtUPUOdQpZehJwdOcmEkI%2BdtDaWQqmkz3dHpuCYfc44FUaovMKbS6CwTMqwMUEQLgVWvJLaAjn8IAbmPqV0feqD53wosKnjQyx3ATmO3q%2BAx0eas675r9DXd5wAWGyluP8I5AN8gAWFlLXkPJCpZARtjQ2jZcTjNoJ%2BFt27Uq93GcFNETEPM51H3F%2FjKigot1RqytnDjcYJxyRUh0PxKZkwvIO7wgY6pgHoAZq1QIFQiJSYdXinOe3%2BO%2FAhgT4oElFNJHSeI9vXw9MZGx9C7LW6h65A5tMPICMtoic3b%2B2V5n220oQtwjIYV4nuJzj7T%2FnDh7Yu92z0J7wSWk8J8DmfP91Hch7ynxWdTmnJ4p4oLzBhjevRXESyUntAMzlZytWG%2F865TUvYPM%2FfCx598f%2BgS3t9L39E4AQzJcnVOO2oXnWFAcGOMsxP2MYSkrWS&X-Amz-Signature=2dcd6e567ee24502744a665d3b3a7cf284dc240aaaf6e8d5cd4c42a23001f236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OIFXO2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDXrY%2Bi7%2B25z%2B81y8CXGcNR%2F4I6PKGHwiqZ1AVbjVuyIAiBUMFaIpBxR3hSLjSIupJeQv0liIqk9FD42sdz1%2B10BVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMEpkSvE54tp8FZDOdKtwD0cabCB5EL4of8OGXY8EkYz5Dk3Q7yntwBvVFlMewIrjJXWz1mN4RMR1ESx2BgPVzltW7ZYUtIOvbUMBsQd0%2BVJKKqDn1hy762%2B%2FWFjxT3Sh06tY3UzPODhU1qOsYgxJvjOCTm5bOLf7GhtVwaz6hqmu2V43eRPaVbH8xhSIXs2XNKpKGFq%2BjzOQt%2B0UPOpfiRLyDTzdk%2FmUUB8YXmrj9BJAlVmu0CNfnvsxLoY56%2BVkf4Z7%2Bv6Li3bPZXKATOTiaZuDSMIzztx%2BS2IRbSMXr62UZN10gLt0xRQgBGdlEsk8%2BWASoTGKHHLd1JK9E%2FaYjLLEx5u%2F%2Bi%2FPplZVqyVxcE44b30ReGucMLHf4M2uHLC7GWEgQxMbVCpFEAe4fONl8dyY0dfbrFoabMKFpZ%2FoK0y73D9CnXyXDtaDGULtUPUOdQpZehJwdOcmEkI%2BdtDaWQqmkz3dHpuCYfc44FUaovMKbS6CwTMqwMUEQLgVWvJLaAjn8IAbmPqV0feqD53wosKnjQyx3ATmO3q%2BAx0eas675r9DXd5wAWGyluP8I5AN8gAWFlLXkPJCpZARtjQ2jZcTjNoJ%2BFt27Uq93GcFNETEPM51H3F%2FjKigot1RqytnDjcYJxyRUh0PxKZkwvIO7wgY6pgHoAZq1QIFQiJSYdXinOe3%2BO%2FAhgT4oElFNJHSeI9vXw9MZGx9C7LW6h65A5tMPICMtoic3b%2B2V5n220oQtwjIYV4nuJzj7T%2FnDh7Yu92z0J7wSWk8J8DmfP91Hch7ynxWdTmnJ4p4oLzBhjevRXESyUntAMzlZytWG%2F865TUvYPM%2FfCx598f%2BgS3t9L39E4AQzJcnVOO2oXnWFAcGOMsxP2MYSkrWS&X-Amz-Signature=080d672a871f90fa6105623654cec6febf3fcb0e41240114b8e3a45e17bdc973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OIFXO2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDXrY%2Bi7%2B25z%2B81y8CXGcNR%2F4I6PKGHwiqZ1AVbjVuyIAiBUMFaIpBxR3hSLjSIupJeQv0liIqk9FD42sdz1%2B10BVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMEpkSvE54tp8FZDOdKtwD0cabCB5EL4of8OGXY8EkYz5Dk3Q7yntwBvVFlMewIrjJXWz1mN4RMR1ESx2BgPVzltW7ZYUtIOvbUMBsQd0%2BVJKKqDn1hy762%2B%2FWFjxT3Sh06tY3UzPODhU1qOsYgxJvjOCTm5bOLf7GhtVwaz6hqmu2V43eRPaVbH8xhSIXs2XNKpKGFq%2BjzOQt%2B0UPOpfiRLyDTzdk%2FmUUB8YXmrj9BJAlVmu0CNfnvsxLoY56%2BVkf4Z7%2Bv6Li3bPZXKATOTiaZuDSMIzztx%2BS2IRbSMXr62UZN10gLt0xRQgBGdlEsk8%2BWASoTGKHHLd1JK9E%2FaYjLLEx5u%2F%2Bi%2FPplZVqyVxcE44b30ReGucMLHf4M2uHLC7GWEgQxMbVCpFEAe4fONl8dyY0dfbrFoabMKFpZ%2FoK0y73D9CnXyXDtaDGULtUPUOdQpZehJwdOcmEkI%2BdtDaWQqmkz3dHpuCYfc44FUaovMKbS6CwTMqwMUEQLgVWvJLaAjn8IAbmPqV0feqD53wosKnjQyx3ATmO3q%2BAx0eas675r9DXd5wAWGyluP8I5AN8gAWFlLXkPJCpZARtjQ2jZcTjNoJ%2BFt27Uq93GcFNETEPM51H3F%2FjKigot1RqytnDjcYJxyRUh0PxKZkwvIO7wgY6pgHoAZq1QIFQiJSYdXinOe3%2BO%2FAhgT4oElFNJHSeI9vXw9MZGx9C7LW6h65A5tMPICMtoic3b%2B2V5n220oQtwjIYV4nuJzj7T%2FnDh7Yu92z0J7wSWk8J8DmfP91Hch7ynxWdTmnJ4p4oLzBhjevRXESyUntAMzlZytWG%2F865TUvYPM%2FfCx598f%2BgS3t9L39E4AQzJcnVOO2oXnWFAcGOMsxP2MYSkrWS&X-Amz-Signature=f3b50c93689fe68aa57778ed22c7f932d5781dc00b870c4c40c4e799ea23b90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OIFXO2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDXrY%2Bi7%2B25z%2B81y8CXGcNR%2F4I6PKGHwiqZ1AVbjVuyIAiBUMFaIpBxR3hSLjSIupJeQv0liIqk9FD42sdz1%2B10BVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMEpkSvE54tp8FZDOdKtwD0cabCB5EL4of8OGXY8EkYz5Dk3Q7yntwBvVFlMewIrjJXWz1mN4RMR1ESx2BgPVzltW7ZYUtIOvbUMBsQd0%2BVJKKqDn1hy762%2B%2FWFjxT3Sh06tY3UzPODhU1qOsYgxJvjOCTm5bOLf7GhtVwaz6hqmu2V43eRPaVbH8xhSIXs2XNKpKGFq%2BjzOQt%2B0UPOpfiRLyDTzdk%2FmUUB8YXmrj9BJAlVmu0CNfnvsxLoY56%2BVkf4Z7%2Bv6Li3bPZXKATOTiaZuDSMIzztx%2BS2IRbSMXr62UZN10gLt0xRQgBGdlEsk8%2BWASoTGKHHLd1JK9E%2FaYjLLEx5u%2F%2Bi%2FPplZVqyVxcE44b30ReGucMLHf4M2uHLC7GWEgQxMbVCpFEAe4fONl8dyY0dfbrFoabMKFpZ%2FoK0y73D9CnXyXDtaDGULtUPUOdQpZehJwdOcmEkI%2BdtDaWQqmkz3dHpuCYfc44FUaovMKbS6CwTMqwMUEQLgVWvJLaAjn8IAbmPqV0feqD53wosKnjQyx3ATmO3q%2BAx0eas675r9DXd5wAWGyluP8I5AN8gAWFlLXkPJCpZARtjQ2jZcTjNoJ%2BFt27Uq93GcFNETEPM51H3F%2FjKigot1RqytnDjcYJxyRUh0PxKZkwvIO7wgY6pgHoAZq1QIFQiJSYdXinOe3%2BO%2FAhgT4oElFNJHSeI9vXw9MZGx9C7LW6h65A5tMPICMtoic3b%2B2V5n220oQtwjIYV4nuJzj7T%2FnDh7Yu92z0J7wSWk8J8DmfP91Hch7ynxWdTmnJ4p4oLzBhjevRXESyUntAMzlZytWG%2F865TUvYPM%2FfCx598f%2BgS3t9L39E4AQzJcnVOO2oXnWFAcGOMsxP2MYSkrWS&X-Amz-Signature=f59760963b761ae03a43748c92486cb3fe999cdec5d4d06d686cd2cbe9adffc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OIFXO2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDXrY%2Bi7%2B25z%2B81y8CXGcNR%2F4I6PKGHwiqZ1AVbjVuyIAiBUMFaIpBxR3hSLjSIupJeQv0liIqk9FD42sdz1%2B10BVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMEpkSvE54tp8FZDOdKtwD0cabCB5EL4of8OGXY8EkYz5Dk3Q7yntwBvVFlMewIrjJXWz1mN4RMR1ESx2BgPVzltW7ZYUtIOvbUMBsQd0%2BVJKKqDn1hy762%2B%2FWFjxT3Sh06tY3UzPODhU1qOsYgxJvjOCTm5bOLf7GhtVwaz6hqmu2V43eRPaVbH8xhSIXs2XNKpKGFq%2BjzOQt%2B0UPOpfiRLyDTzdk%2FmUUB8YXmrj9BJAlVmu0CNfnvsxLoY56%2BVkf4Z7%2Bv6Li3bPZXKATOTiaZuDSMIzztx%2BS2IRbSMXr62UZN10gLt0xRQgBGdlEsk8%2BWASoTGKHHLd1JK9E%2FaYjLLEx5u%2F%2Bi%2FPplZVqyVxcE44b30ReGucMLHf4M2uHLC7GWEgQxMbVCpFEAe4fONl8dyY0dfbrFoabMKFpZ%2FoK0y73D9CnXyXDtaDGULtUPUOdQpZehJwdOcmEkI%2BdtDaWQqmkz3dHpuCYfc44FUaovMKbS6CwTMqwMUEQLgVWvJLaAjn8IAbmPqV0feqD53wosKnjQyx3ATmO3q%2BAx0eas675r9DXd5wAWGyluP8I5AN8gAWFlLXkPJCpZARtjQ2jZcTjNoJ%2BFt27Uq93GcFNETEPM51H3F%2FjKigot1RqytnDjcYJxyRUh0PxKZkwvIO7wgY6pgHoAZq1QIFQiJSYdXinOe3%2BO%2FAhgT4oElFNJHSeI9vXw9MZGx9C7LW6h65A5tMPICMtoic3b%2B2V5n220oQtwjIYV4nuJzj7T%2FnDh7Yu92z0J7wSWk8J8DmfP91Hch7ynxWdTmnJ4p4oLzBhjevRXESyUntAMzlZytWG%2F865TUvYPM%2FfCx598f%2BgS3t9L39E4AQzJcnVOO2oXnWFAcGOMsxP2MYSkrWS&X-Amz-Signature=556e4fdf5e9b4e2691b63ca5849f19b49059cd63a0ec205e1162fbad0008e664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OIFXO2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDXrY%2Bi7%2B25z%2B81y8CXGcNR%2F4I6PKGHwiqZ1AVbjVuyIAiBUMFaIpBxR3hSLjSIupJeQv0liIqk9FD42sdz1%2B10BVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMEpkSvE54tp8FZDOdKtwD0cabCB5EL4of8OGXY8EkYz5Dk3Q7yntwBvVFlMewIrjJXWz1mN4RMR1ESx2BgPVzltW7ZYUtIOvbUMBsQd0%2BVJKKqDn1hy762%2B%2FWFjxT3Sh06tY3UzPODhU1qOsYgxJvjOCTm5bOLf7GhtVwaz6hqmu2V43eRPaVbH8xhSIXs2XNKpKGFq%2BjzOQt%2B0UPOpfiRLyDTzdk%2FmUUB8YXmrj9BJAlVmu0CNfnvsxLoY56%2BVkf4Z7%2Bv6Li3bPZXKATOTiaZuDSMIzztx%2BS2IRbSMXr62UZN10gLt0xRQgBGdlEsk8%2BWASoTGKHHLd1JK9E%2FaYjLLEx5u%2F%2Bi%2FPplZVqyVxcE44b30ReGucMLHf4M2uHLC7GWEgQxMbVCpFEAe4fONl8dyY0dfbrFoabMKFpZ%2FoK0y73D9CnXyXDtaDGULtUPUOdQpZehJwdOcmEkI%2BdtDaWQqmkz3dHpuCYfc44FUaovMKbS6CwTMqwMUEQLgVWvJLaAjn8IAbmPqV0feqD53wosKnjQyx3ATmO3q%2BAx0eas675r9DXd5wAWGyluP8I5AN8gAWFlLXkPJCpZARtjQ2jZcTjNoJ%2BFt27Uq93GcFNETEPM51H3F%2FjKigot1RqytnDjcYJxyRUh0PxKZkwvIO7wgY6pgHoAZq1QIFQiJSYdXinOe3%2BO%2FAhgT4oElFNJHSeI9vXw9MZGx9C7LW6h65A5tMPICMtoic3b%2B2V5n220oQtwjIYV4nuJzj7T%2FnDh7Yu92z0J7wSWk8J8DmfP91Hch7ynxWdTmnJ4p4oLzBhjevRXESyUntAMzlZytWG%2F865TUvYPM%2FfCx598f%2BgS3t9L39E4AQzJcnVOO2oXnWFAcGOMsxP2MYSkrWS&X-Amz-Signature=87d6abe120b117a6f438038d99e474f2cb1bdc5ecf9a317397cd03c674307ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
