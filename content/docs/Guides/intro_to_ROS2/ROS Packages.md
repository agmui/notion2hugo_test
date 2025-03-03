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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U5RWO7D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc%2BbiT5UFR3JhgLwYQfEbqjn7qjMsLPYLF2ifU8164AAiBFRSbXri6kjXd9HCAa3zxzRfZCgjAbW5RbaIxsuxM5OSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0As%2FglRsagHNlrDKtwDY6lFHDK%2B%2F%2F4AZCHlxlcMeGIr%2BFO3VhaM%2FXZ%2BzYZ7Dk3NGmpSm%2BlkDFN36Jz75BeDeRKJ9AmNMaCT93JGkRXPCecN%2FDBRNVUm7hcDHehRmd3wXl9XwVsxfAlG3fDOSeGIG4YQtBA00dAe2i3SrH12zM6YZIYfiKVyuPK4PqZ4OCEaBnyOXPYELnFUOuduy10DEWuVCDLBUbrAzdiPvQOj5Nds8rz%2FgiwJBgDwj9uv9deihhMoPoXryzthOq3Wt7lAbDHsIev7WSHWzx2NEnqJjAzLoXRRFECFdeMpYxEWi6pjNhiMYTulAZTj1KDoSO4rRDyBTXrhXThkedfqguwLJuL8L2fU9CpKRoef2KT65cRExCLPV%2BLyl8Rgz7ydJjjwF7zOU%2Fr5%2FTNIB3eVWKbWz7wYtODHih4nOOJ6ExNYrPozptbo0xjX6Vi7TGfzD8VR9bsMg2khsK4D97adIHcf3h5aGs4wGUCU%2BDIh2udKci8fe5%2F%2BiUldkU2Z4TpiNfW1XhaFZ2kpdDJ4YL7yk3cRYSSjjdPUW8hYqvXb7RvSiZNZIw4mb335iRR0CywYKHgluHq7WOyp3INZyjxno8wn%2Bap%2F%2BsnBiFPxAmjrYysASwb%2F72usACAVHTBKVJ8w4PiUvgY6pgEdX58S%2Bkvk5b0iLXIgimNcBJme%2FdATOHmnXoqby2fxeOYeTMhrKox51pzcyLDcIXeQtNiaMQjycCCWyfhDzb7IR%2FyH77HGfsp6dNsXnhR88edhD8M%2FVhBH1%2Bab9a15CUwKYap2Qemj6WY76N4QaMUX6fQkCsJUQsIJw8PydNEwqZ2l1bnu7jTBKMVtDvsl9y28ojCQrd8rEev4mJR%2Bwqa%2FPjOM9lIe&X-Amz-Signature=5eef57c173501ca2132e6d172cd9629196d6031ee8e268dbefd7eb2e4bfe9c32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U5RWO7D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc%2BbiT5UFR3JhgLwYQfEbqjn7qjMsLPYLF2ifU8164AAiBFRSbXri6kjXd9HCAa3zxzRfZCgjAbW5RbaIxsuxM5OSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0As%2FglRsagHNlrDKtwDY6lFHDK%2B%2F%2F4AZCHlxlcMeGIr%2BFO3VhaM%2FXZ%2BzYZ7Dk3NGmpSm%2BlkDFN36Jz75BeDeRKJ9AmNMaCT93JGkRXPCecN%2FDBRNVUm7hcDHehRmd3wXl9XwVsxfAlG3fDOSeGIG4YQtBA00dAe2i3SrH12zM6YZIYfiKVyuPK4PqZ4OCEaBnyOXPYELnFUOuduy10DEWuVCDLBUbrAzdiPvQOj5Nds8rz%2FgiwJBgDwj9uv9deihhMoPoXryzthOq3Wt7lAbDHsIev7WSHWzx2NEnqJjAzLoXRRFECFdeMpYxEWi6pjNhiMYTulAZTj1KDoSO4rRDyBTXrhXThkedfqguwLJuL8L2fU9CpKRoef2KT65cRExCLPV%2BLyl8Rgz7ydJjjwF7zOU%2Fr5%2FTNIB3eVWKbWz7wYtODHih4nOOJ6ExNYrPozptbo0xjX6Vi7TGfzD8VR9bsMg2khsK4D97adIHcf3h5aGs4wGUCU%2BDIh2udKci8fe5%2F%2BiUldkU2Z4TpiNfW1XhaFZ2kpdDJ4YL7yk3cRYSSjjdPUW8hYqvXb7RvSiZNZIw4mb335iRR0CywYKHgluHq7WOyp3INZyjxno8wn%2Bap%2F%2BsnBiFPxAmjrYysASwb%2F72usACAVHTBKVJ8w4PiUvgY6pgEdX58S%2Bkvk5b0iLXIgimNcBJme%2FdATOHmnXoqby2fxeOYeTMhrKox51pzcyLDcIXeQtNiaMQjycCCWyfhDzb7IR%2FyH77HGfsp6dNsXnhR88edhD8M%2FVhBH1%2Bab9a15CUwKYap2Qemj6WY76N4QaMUX6fQkCsJUQsIJw8PydNEwqZ2l1bnu7jTBKMVtDvsl9y28ojCQrd8rEev4mJR%2Bwqa%2FPjOM9lIe&X-Amz-Signature=314e1c15e1463733ad8e531cb173f34d1cba51f2676ae8bbf6b00e3f8b3e13b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U5RWO7D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc%2BbiT5UFR3JhgLwYQfEbqjn7qjMsLPYLF2ifU8164AAiBFRSbXri6kjXd9HCAa3zxzRfZCgjAbW5RbaIxsuxM5OSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0As%2FglRsagHNlrDKtwDY6lFHDK%2B%2F%2F4AZCHlxlcMeGIr%2BFO3VhaM%2FXZ%2BzYZ7Dk3NGmpSm%2BlkDFN36Jz75BeDeRKJ9AmNMaCT93JGkRXPCecN%2FDBRNVUm7hcDHehRmd3wXl9XwVsxfAlG3fDOSeGIG4YQtBA00dAe2i3SrH12zM6YZIYfiKVyuPK4PqZ4OCEaBnyOXPYELnFUOuduy10DEWuVCDLBUbrAzdiPvQOj5Nds8rz%2FgiwJBgDwj9uv9deihhMoPoXryzthOq3Wt7lAbDHsIev7WSHWzx2NEnqJjAzLoXRRFECFdeMpYxEWi6pjNhiMYTulAZTj1KDoSO4rRDyBTXrhXThkedfqguwLJuL8L2fU9CpKRoef2KT65cRExCLPV%2BLyl8Rgz7ydJjjwF7zOU%2Fr5%2FTNIB3eVWKbWz7wYtODHih4nOOJ6ExNYrPozptbo0xjX6Vi7TGfzD8VR9bsMg2khsK4D97adIHcf3h5aGs4wGUCU%2BDIh2udKci8fe5%2F%2BiUldkU2Z4TpiNfW1XhaFZ2kpdDJ4YL7yk3cRYSSjjdPUW8hYqvXb7RvSiZNZIw4mb335iRR0CywYKHgluHq7WOyp3INZyjxno8wn%2Bap%2F%2BsnBiFPxAmjrYysASwb%2F72usACAVHTBKVJ8w4PiUvgY6pgEdX58S%2Bkvk5b0iLXIgimNcBJme%2FdATOHmnXoqby2fxeOYeTMhrKox51pzcyLDcIXeQtNiaMQjycCCWyfhDzb7IR%2FyH77HGfsp6dNsXnhR88edhD8M%2FVhBH1%2Bab9a15CUwKYap2Qemj6WY76N4QaMUX6fQkCsJUQsIJw8PydNEwqZ2l1bnu7jTBKMVtDvsl9y28ojCQrd8rEev4mJR%2Bwqa%2FPjOM9lIe&X-Amz-Signature=6c3a859cc58707ca45af90fee9b1ba79bd1015bdab76030ca339905c769e482f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U5RWO7D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc%2BbiT5UFR3JhgLwYQfEbqjn7qjMsLPYLF2ifU8164AAiBFRSbXri6kjXd9HCAa3zxzRfZCgjAbW5RbaIxsuxM5OSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0As%2FglRsagHNlrDKtwDY6lFHDK%2B%2F%2F4AZCHlxlcMeGIr%2BFO3VhaM%2FXZ%2BzYZ7Dk3NGmpSm%2BlkDFN36Jz75BeDeRKJ9AmNMaCT93JGkRXPCecN%2FDBRNVUm7hcDHehRmd3wXl9XwVsxfAlG3fDOSeGIG4YQtBA00dAe2i3SrH12zM6YZIYfiKVyuPK4PqZ4OCEaBnyOXPYELnFUOuduy10DEWuVCDLBUbrAzdiPvQOj5Nds8rz%2FgiwJBgDwj9uv9deihhMoPoXryzthOq3Wt7lAbDHsIev7WSHWzx2NEnqJjAzLoXRRFECFdeMpYxEWi6pjNhiMYTulAZTj1KDoSO4rRDyBTXrhXThkedfqguwLJuL8L2fU9CpKRoef2KT65cRExCLPV%2BLyl8Rgz7ydJjjwF7zOU%2Fr5%2FTNIB3eVWKbWz7wYtODHih4nOOJ6ExNYrPozptbo0xjX6Vi7TGfzD8VR9bsMg2khsK4D97adIHcf3h5aGs4wGUCU%2BDIh2udKci8fe5%2F%2BiUldkU2Z4TpiNfW1XhaFZ2kpdDJ4YL7yk3cRYSSjjdPUW8hYqvXb7RvSiZNZIw4mb335iRR0CywYKHgluHq7WOyp3INZyjxno8wn%2Bap%2F%2BsnBiFPxAmjrYysASwb%2F72usACAVHTBKVJ8w4PiUvgY6pgEdX58S%2Bkvk5b0iLXIgimNcBJme%2FdATOHmnXoqby2fxeOYeTMhrKox51pzcyLDcIXeQtNiaMQjycCCWyfhDzb7IR%2FyH77HGfsp6dNsXnhR88edhD8M%2FVhBH1%2Bab9a15CUwKYap2Qemj6WY76N4QaMUX6fQkCsJUQsIJw8PydNEwqZ2l1bnu7jTBKMVtDvsl9y28ojCQrd8rEev4mJR%2Bwqa%2FPjOM9lIe&X-Amz-Signature=686461f64033747bc3f33d43267203e5a6f5cd896477a7bfc66489084c140a74&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U5RWO7D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc%2BbiT5UFR3JhgLwYQfEbqjn7qjMsLPYLF2ifU8164AAiBFRSbXri6kjXd9HCAa3zxzRfZCgjAbW5RbaIxsuxM5OSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0As%2FglRsagHNlrDKtwDY6lFHDK%2B%2F%2F4AZCHlxlcMeGIr%2BFO3VhaM%2FXZ%2BzYZ7Dk3NGmpSm%2BlkDFN36Jz75BeDeRKJ9AmNMaCT93JGkRXPCecN%2FDBRNVUm7hcDHehRmd3wXl9XwVsxfAlG3fDOSeGIG4YQtBA00dAe2i3SrH12zM6YZIYfiKVyuPK4PqZ4OCEaBnyOXPYELnFUOuduy10DEWuVCDLBUbrAzdiPvQOj5Nds8rz%2FgiwJBgDwj9uv9deihhMoPoXryzthOq3Wt7lAbDHsIev7WSHWzx2NEnqJjAzLoXRRFECFdeMpYxEWi6pjNhiMYTulAZTj1KDoSO4rRDyBTXrhXThkedfqguwLJuL8L2fU9CpKRoef2KT65cRExCLPV%2BLyl8Rgz7ydJjjwF7zOU%2Fr5%2FTNIB3eVWKbWz7wYtODHih4nOOJ6ExNYrPozptbo0xjX6Vi7TGfzD8VR9bsMg2khsK4D97adIHcf3h5aGs4wGUCU%2BDIh2udKci8fe5%2F%2BiUldkU2Z4TpiNfW1XhaFZ2kpdDJ4YL7yk3cRYSSjjdPUW8hYqvXb7RvSiZNZIw4mb335iRR0CywYKHgluHq7WOyp3INZyjxno8wn%2Bap%2F%2BsnBiFPxAmjrYysASwb%2F72usACAVHTBKVJ8w4PiUvgY6pgEdX58S%2Bkvk5b0iLXIgimNcBJme%2FdATOHmnXoqby2fxeOYeTMhrKox51pzcyLDcIXeQtNiaMQjycCCWyfhDzb7IR%2FyH77HGfsp6dNsXnhR88edhD8M%2FVhBH1%2Bab9a15CUwKYap2Qemj6WY76N4QaMUX6fQkCsJUQsIJw8PydNEwqZ2l1bnu7jTBKMVtDvsl9y28ojCQrd8rEev4mJR%2Bwqa%2FPjOM9lIe&X-Amz-Signature=3a20c05ca5f8a58722557a182a0d028b55a4734bba04345c35b037e047a0c50c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U5RWO7D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc%2BbiT5UFR3JhgLwYQfEbqjn7qjMsLPYLF2ifU8164AAiBFRSbXri6kjXd9HCAa3zxzRfZCgjAbW5RbaIxsuxM5OSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0As%2FglRsagHNlrDKtwDY6lFHDK%2B%2F%2F4AZCHlxlcMeGIr%2BFO3VhaM%2FXZ%2BzYZ7Dk3NGmpSm%2BlkDFN36Jz75BeDeRKJ9AmNMaCT93JGkRXPCecN%2FDBRNVUm7hcDHehRmd3wXl9XwVsxfAlG3fDOSeGIG4YQtBA00dAe2i3SrH12zM6YZIYfiKVyuPK4PqZ4OCEaBnyOXPYELnFUOuduy10DEWuVCDLBUbrAzdiPvQOj5Nds8rz%2FgiwJBgDwj9uv9deihhMoPoXryzthOq3Wt7lAbDHsIev7WSHWzx2NEnqJjAzLoXRRFECFdeMpYxEWi6pjNhiMYTulAZTj1KDoSO4rRDyBTXrhXThkedfqguwLJuL8L2fU9CpKRoef2KT65cRExCLPV%2BLyl8Rgz7ydJjjwF7zOU%2Fr5%2FTNIB3eVWKbWz7wYtODHih4nOOJ6ExNYrPozptbo0xjX6Vi7TGfzD8VR9bsMg2khsK4D97adIHcf3h5aGs4wGUCU%2BDIh2udKci8fe5%2F%2BiUldkU2Z4TpiNfW1XhaFZ2kpdDJ4YL7yk3cRYSSjjdPUW8hYqvXb7RvSiZNZIw4mb335iRR0CywYKHgluHq7WOyp3INZyjxno8wn%2Bap%2F%2BsnBiFPxAmjrYysASwb%2F72usACAVHTBKVJ8w4PiUvgY6pgEdX58S%2Bkvk5b0iLXIgimNcBJme%2FdATOHmnXoqby2fxeOYeTMhrKox51pzcyLDcIXeQtNiaMQjycCCWyfhDzb7IR%2FyH77HGfsp6dNsXnhR88edhD8M%2FVhBH1%2Bab9a15CUwKYap2Qemj6WY76N4QaMUX6fQkCsJUQsIJw8PydNEwqZ2l1bnu7jTBKMVtDvsl9y28ojCQrd8rEev4mJR%2Bwqa%2FPjOM9lIe&X-Amz-Signature=3f7d3d267cf63ea5ad9e828ff667526076894b4bdf3ac2f8c40e43911b33c5b5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U5RWO7D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc%2BbiT5UFR3JhgLwYQfEbqjn7qjMsLPYLF2ifU8164AAiBFRSbXri6kjXd9HCAa3zxzRfZCgjAbW5RbaIxsuxM5OSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0As%2FglRsagHNlrDKtwDY6lFHDK%2B%2F%2F4AZCHlxlcMeGIr%2BFO3VhaM%2FXZ%2BzYZ7Dk3NGmpSm%2BlkDFN36Jz75BeDeRKJ9AmNMaCT93JGkRXPCecN%2FDBRNVUm7hcDHehRmd3wXl9XwVsxfAlG3fDOSeGIG4YQtBA00dAe2i3SrH12zM6YZIYfiKVyuPK4PqZ4OCEaBnyOXPYELnFUOuduy10DEWuVCDLBUbrAzdiPvQOj5Nds8rz%2FgiwJBgDwj9uv9deihhMoPoXryzthOq3Wt7lAbDHsIev7WSHWzx2NEnqJjAzLoXRRFECFdeMpYxEWi6pjNhiMYTulAZTj1KDoSO4rRDyBTXrhXThkedfqguwLJuL8L2fU9CpKRoef2KT65cRExCLPV%2BLyl8Rgz7ydJjjwF7zOU%2Fr5%2FTNIB3eVWKbWz7wYtODHih4nOOJ6ExNYrPozptbo0xjX6Vi7TGfzD8VR9bsMg2khsK4D97adIHcf3h5aGs4wGUCU%2BDIh2udKci8fe5%2F%2BiUldkU2Z4TpiNfW1XhaFZ2kpdDJ4YL7yk3cRYSSjjdPUW8hYqvXb7RvSiZNZIw4mb335iRR0CywYKHgluHq7WOyp3INZyjxno8wn%2Bap%2F%2BsnBiFPxAmjrYysASwb%2F72usACAVHTBKVJ8w4PiUvgY6pgEdX58S%2Bkvk5b0iLXIgimNcBJme%2FdATOHmnXoqby2fxeOYeTMhrKox51pzcyLDcIXeQtNiaMQjycCCWyfhDzb7IR%2FyH77HGfsp6dNsXnhR88edhD8M%2FVhBH1%2Bab9a15CUwKYap2Qemj6WY76N4QaMUX6fQkCsJUQsIJw8PydNEwqZ2l1bnu7jTBKMVtDvsl9y28ojCQrd8rEev4mJR%2Bwqa%2FPjOM9lIe&X-Amz-Signature=b3628a69227d51486a527fb0b50ea36038792c694aedbe7efa5882b4b1a5fa31&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
