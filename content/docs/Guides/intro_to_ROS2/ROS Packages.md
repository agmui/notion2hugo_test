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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFFUHU6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpypSK57mB1NYNt%2BA3invn7WnaJCTl9%2BQxoi065OB6MgIhAKReXaTcrEOQMl661OuKnrwef6BJmAuPiNzt8a7hg1w%2FKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmA5wvTojgXBjAWIoq3ANSlL3H847Cx2UnV%2F6UnDEtoJe5wuuxp1oU5SIri5UZTe%2FbvOmOW11anJR44GSFyQN9oYSdpuMZ%2BwR26hv3WMQVrsOoNbxrw%2BgMmT1kxKS4IhcswtgukApUqMszubli3ACfaAfcTeVlVU96WQp32fwI9cijSA5%2BmJnsYG0AsJpuCjxd1iqk6lDp9iHx1bslu0VgUWgU9Je%2FjsDntZ6UlEaymiOWj9hGRPd5O%2BWhdTyTOP1hh2vjIpR6%2FedzyPkiOEAeRPl%2BNRhOVcZGJ2%2FCWWPkJe%2BNFp%2BvraoMEZxkfdXQvEuOv4kuZ0LVTjeb3C2dFJAS6JP76jpYxBBBiGJp7HHjBkAlRHQiAm%2BAidPa7W1IoTRiJ1cd1F%2FtidE%2B8S6%2B759icV5IXIoJ2gf0bPgaswLpeXOOTyxF207zsdWtOO4UmDO%2BLjHs15uJMg5Ar60VsBugGyia2xsJJM8xE5v%2FJSHIxpxmD56ZZIdDiy5MlfHlfbfQBBNNx5Z3ChrYIQC3zOmsGUkAvGE9okQHru95laL2UYzdo9LWaltNtcPGkOHsScg2ynNCx6G5NWsA0iOfU9vwIicbtFomlJXK0GK9Vws95LiLq7e0s4YvLl%2FG4sZp9p49%2BhkPDjUN7LJwNzDLz%2Bq9BjqkAb6l2Nd2DDp1TyeZ76MCnNC5TZ3sDacnPZua%2BckjZnnIpyR6zhB5qWG5wpvGxJws%2FAko6IHxzI%2FS9ttxSxU36ZbsaG%2FoK%2FiWy7OTQTduzs3y8loo2jrCI93SwmVbp3dWKKPEGZikS5aBBV2GMfZh312d8S825Pgphhy1XevE%2F1Mjb01teWWSF%2F2ww1bBV8lLW9CrJICIDRcuVSjr7k6aXU%2BUXZ2Y&X-Amz-Signature=55ee2f1a1e0ded91b697e1832e68e1a750a9bc0a60782128d47772ba0ef604b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFFUHU6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpypSK57mB1NYNt%2BA3invn7WnaJCTl9%2BQxoi065OB6MgIhAKReXaTcrEOQMl661OuKnrwef6BJmAuPiNzt8a7hg1w%2FKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmA5wvTojgXBjAWIoq3ANSlL3H847Cx2UnV%2F6UnDEtoJe5wuuxp1oU5SIri5UZTe%2FbvOmOW11anJR44GSFyQN9oYSdpuMZ%2BwR26hv3WMQVrsOoNbxrw%2BgMmT1kxKS4IhcswtgukApUqMszubli3ACfaAfcTeVlVU96WQp32fwI9cijSA5%2BmJnsYG0AsJpuCjxd1iqk6lDp9iHx1bslu0VgUWgU9Je%2FjsDntZ6UlEaymiOWj9hGRPd5O%2BWhdTyTOP1hh2vjIpR6%2FedzyPkiOEAeRPl%2BNRhOVcZGJ2%2FCWWPkJe%2BNFp%2BvraoMEZxkfdXQvEuOv4kuZ0LVTjeb3C2dFJAS6JP76jpYxBBBiGJp7HHjBkAlRHQiAm%2BAidPa7W1IoTRiJ1cd1F%2FtidE%2B8S6%2B759icV5IXIoJ2gf0bPgaswLpeXOOTyxF207zsdWtOO4UmDO%2BLjHs15uJMg5Ar60VsBugGyia2xsJJM8xE5v%2FJSHIxpxmD56ZZIdDiy5MlfHlfbfQBBNNx5Z3ChrYIQC3zOmsGUkAvGE9okQHru95laL2UYzdo9LWaltNtcPGkOHsScg2ynNCx6G5NWsA0iOfU9vwIicbtFomlJXK0GK9Vws95LiLq7e0s4YvLl%2FG4sZp9p49%2BhkPDjUN7LJwNzDLz%2Bq9BjqkAb6l2Nd2DDp1TyeZ76MCnNC5TZ3sDacnPZua%2BckjZnnIpyR6zhB5qWG5wpvGxJws%2FAko6IHxzI%2FS9ttxSxU36ZbsaG%2FoK%2FiWy7OTQTduzs3y8loo2jrCI93SwmVbp3dWKKPEGZikS5aBBV2GMfZh312d8S825Pgphhy1XevE%2F1Mjb01teWWSF%2F2ww1bBV8lLW9CrJICIDRcuVSjr7k6aXU%2BUXZ2Y&X-Amz-Signature=23aa7f17122818b36161f85e0933ba9ea5190d76cd447e6f1ea42792f45aa8a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFFUHU6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpypSK57mB1NYNt%2BA3invn7WnaJCTl9%2BQxoi065OB6MgIhAKReXaTcrEOQMl661OuKnrwef6BJmAuPiNzt8a7hg1w%2FKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmA5wvTojgXBjAWIoq3ANSlL3H847Cx2UnV%2F6UnDEtoJe5wuuxp1oU5SIri5UZTe%2FbvOmOW11anJR44GSFyQN9oYSdpuMZ%2BwR26hv3WMQVrsOoNbxrw%2BgMmT1kxKS4IhcswtgukApUqMszubli3ACfaAfcTeVlVU96WQp32fwI9cijSA5%2BmJnsYG0AsJpuCjxd1iqk6lDp9iHx1bslu0VgUWgU9Je%2FjsDntZ6UlEaymiOWj9hGRPd5O%2BWhdTyTOP1hh2vjIpR6%2FedzyPkiOEAeRPl%2BNRhOVcZGJ2%2FCWWPkJe%2BNFp%2BvraoMEZxkfdXQvEuOv4kuZ0LVTjeb3C2dFJAS6JP76jpYxBBBiGJp7HHjBkAlRHQiAm%2BAidPa7W1IoTRiJ1cd1F%2FtidE%2B8S6%2B759icV5IXIoJ2gf0bPgaswLpeXOOTyxF207zsdWtOO4UmDO%2BLjHs15uJMg5Ar60VsBugGyia2xsJJM8xE5v%2FJSHIxpxmD56ZZIdDiy5MlfHlfbfQBBNNx5Z3ChrYIQC3zOmsGUkAvGE9okQHru95laL2UYzdo9LWaltNtcPGkOHsScg2ynNCx6G5NWsA0iOfU9vwIicbtFomlJXK0GK9Vws95LiLq7e0s4YvLl%2FG4sZp9p49%2BhkPDjUN7LJwNzDLz%2Bq9BjqkAb6l2Nd2DDp1TyeZ76MCnNC5TZ3sDacnPZua%2BckjZnnIpyR6zhB5qWG5wpvGxJws%2FAko6IHxzI%2FS9ttxSxU36ZbsaG%2FoK%2FiWy7OTQTduzs3y8loo2jrCI93SwmVbp3dWKKPEGZikS5aBBV2GMfZh312d8S825Pgphhy1XevE%2F1Mjb01teWWSF%2F2ww1bBV8lLW9CrJICIDRcuVSjr7k6aXU%2BUXZ2Y&X-Amz-Signature=8fddfb78bcc060041852d2378c49b5be717368ec1cd2b847f93491c5ae9ef8dd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFFUHU6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpypSK57mB1NYNt%2BA3invn7WnaJCTl9%2BQxoi065OB6MgIhAKReXaTcrEOQMl661OuKnrwef6BJmAuPiNzt8a7hg1w%2FKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmA5wvTojgXBjAWIoq3ANSlL3H847Cx2UnV%2F6UnDEtoJe5wuuxp1oU5SIri5UZTe%2FbvOmOW11anJR44GSFyQN9oYSdpuMZ%2BwR26hv3WMQVrsOoNbxrw%2BgMmT1kxKS4IhcswtgukApUqMszubli3ACfaAfcTeVlVU96WQp32fwI9cijSA5%2BmJnsYG0AsJpuCjxd1iqk6lDp9iHx1bslu0VgUWgU9Je%2FjsDntZ6UlEaymiOWj9hGRPd5O%2BWhdTyTOP1hh2vjIpR6%2FedzyPkiOEAeRPl%2BNRhOVcZGJ2%2FCWWPkJe%2BNFp%2BvraoMEZxkfdXQvEuOv4kuZ0LVTjeb3C2dFJAS6JP76jpYxBBBiGJp7HHjBkAlRHQiAm%2BAidPa7W1IoTRiJ1cd1F%2FtidE%2B8S6%2B759icV5IXIoJ2gf0bPgaswLpeXOOTyxF207zsdWtOO4UmDO%2BLjHs15uJMg5Ar60VsBugGyia2xsJJM8xE5v%2FJSHIxpxmD56ZZIdDiy5MlfHlfbfQBBNNx5Z3ChrYIQC3zOmsGUkAvGE9okQHru95laL2UYzdo9LWaltNtcPGkOHsScg2ynNCx6G5NWsA0iOfU9vwIicbtFomlJXK0GK9Vws95LiLq7e0s4YvLl%2FG4sZp9p49%2BhkPDjUN7LJwNzDLz%2Bq9BjqkAb6l2Nd2DDp1TyeZ76MCnNC5TZ3sDacnPZua%2BckjZnnIpyR6zhB5qWG5wpvGxJws%2FAko6IHxzI%2FS9ttxSxU36ZbsaG%2FoK%2FiWy7OTQTduzs3y8loo2jrCI93SwmVbp3dWKKPEGZikS5aBBV2GMfZh312d8S825Pgphhy1XevE%2F1Mjb01teWWSF%2F2ww1bBV8lLW9CrJICIDRcuVSjr7k6aXU%2BUXZ2Y&X-Amz-Signature=85eb07abbeb760094248d4fc6d78a9d06ea03378059d1d41552cf8e730d30612&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFFUHU6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpypSK57mB1NYNt%2BA3invn7WnaJCTl9%2BQxoi065OB6MgIhAKReXaTcrEOQMl661OuKnrwef6BJmAuPiNzt8a7hg1w%2FKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmA5wvTojgXBjAWIoq3ANSlL3H847Cx2UnV%2F6UnDEtoJe5wuuxp1oU5SIri5UZTe%2FbvOmOW11anJR44GSFyQN9oYSdpuMZ%2BwR26hv3WMQVrsOoNbxrw%2BgMmT1kxKS4IhcswtgukApUqMszubli3ACfaAfcTeVlVU96WQp32fwI9cijSA5%2BmJnsYG0AsJpuCjxd1iqk6lDp9iHx1bslu0VgUWgU9Je%2FjsDntZ6UlEaymiOWj9hGRPd5O%2BWhdTyTOP1hh2vjIpR6%2FedzyPkiOEAeRPl%2BNRhOVcZGJ2%2FCWWPkJe%2BNFp%2BvraoMEZxkfdXQvEuOv4kuZ0LVTjeb3C2dFJAS6JP76jpYxBBBiGJp7HHjBkAlRHQiAm%2BAidPa7W1IoTRiJ1cd1F%2FtidE%2B8S6%2B759icV5IXIoJ2gf0bPgaswLpeXOOTyxF207zsdWtOO4UmDO%2BLjHs15uJMg5Ar60VsBugGyia2xsJJM8xE5v%2FJSHIxpxmD56ZZIdDiy5MlfHlfbfQBBNNx5Z3ChrYIQC3zOmsGUkAvGE9okQHru95laL2UYzdo9LWaltNtcPGkOHsScg2ynNCx6G5NWsA0iOfU9vwIicbtFomlJXK0GK9Vws95LiLq7e0s4YvLl%2FG4sZp9p49%2BhkPDjUN7LJwNzDLz%2Bq9BjqkAb6l2Nd2DDp1TyeZ76MCnNC5TZ3sDacnPZua%2BckjZnnIpyR6zhB5qWG5wpvGxJws%2FAko6IHxzI%2FS9ttxSxU36ZbsaG%2FoK%2FiWy7OTQTduzs3y8loo2jrCI93SwmVbp3dWKKPEGZikS5aBBV2GMfZh312d8S825Pgphhy1XevE%2F1Mjb01teWWSF%2F2ww1bBV8lLW9CrJICIDRcuVSjr7k6aXU%2BUXZ2Y&X-Amz-Signature=6992d3a47be7b0426555d6d290e61f646a89a114d77dcc8f18147a780a8b5b4a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFFUHU6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpypSK57mB1NYNt%2BA3invn7WnaJCTl9%2BQxoi065OB6MgIhAKReXaTcrEOQMl661OuKnrwef6BJmAuPiNzt8a7hg1w%2FKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmA5wvTojgXBjAWIoq3ANSlL3H847Cx2UnV%2F6UnDEtoJe5wuuxp1oU5SIri5UZTe%2FbvOmOW11anJR44GSFyQN9oYSdpuMZ%2BwR26hv3WMQVrsOoNbxrw%2BgMmT1kxKS4IhcswtgukApUqMszubli3ACfaAfcTeVlVU96WQp32fwI9cijSA5%2BmJnsYG0AsJpuCjxd1iqk6lDp9iHx1bslu0VgUWgU9Je%2FjsDntZ6UlEaymiOWj9hGRPd5O%2BWhdTyTOP1hh2vjIpR6%2FedzyPkiOEAeRPl%2BNRhOVcZGJ2%2FCWWPkJe%2BNFp%2BvraoMEZxkfdXQvEuOv4kuZ0LVTjeb3C2dFJAS6JP76jpYxBBBiGJp7HHjBkAlRHQiAm%2BAidPa7W1IoTRiJ1cd1F%2FtidE%2B8S6%2B759icV5IXIoJ2gf0bPgaswLpeXOOTyxF207zsdWtOO4UmDO%2BLjHs15uJMg5Ar60VsBugGyia2xsJJM8xE5v%2FJSHIxpxmD56ZZIdDiy5MlfHlfbfQBBNNx5Z3ChrYIQC3zOmsGUkAvGE9okQHru95laL2UYzdo9LWaltNtcPGkOHsScg2ynNCx6G5NWsA0iOfU9vwIicbtFomlJXK0GK9Vws95LiLq7e0s4YvLl%2FG4sZp9p49%2BhkPDjUN7LJwNzDLz%2Bq9BjqkAb6l2Nd2DDp1TyeZ76MCnNC5TZ3sDacnPZua%2BckjZnnIpyR6zhB5qWG5wpvGxJws%2FAko6IHxzI%2FS9ttxSxU36ZbsaG%2FoK%2FiWy7OTQTduzs3y8loo2jrCI93SwmVbp3dWKKPEGZikS5aBBV2GMfZh312d8S825Pgphhy1XevE%2F1Mjb01teWWSF%2F2ww1bBV8lLW9CrJICIDRcuVSjr7k6aXU%2BUXZ2Y&X-Amz-Signature=b53e7b64b4fdd912a0574d73ccc6ae4e34f4331401de35da4bb1842220d7b80e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFFUHU6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpypSK57mB1NYNt%2BA3invn7WnaJCTl9%2BQxoi065OB6MgIhAKReXaTcrEOQMl661OuKnrwef6BJmAuPiNzt8a7hg1w%2FKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmA5wvTojgXBjAWIoq3ANSlL3H847Cx2UnV%2F6UnDEtoJe5wuuxp1oU5SIri5UZTe%2FbvOmOW11anJR44GSFyQN9oYSdpuMZ%2BwR26hv3WMQVrsOoNbxrw%2BgMmT1kxKS4IhcswtgukApUqMszubli3ACfaAfcTeVlVU96WQp32fwI9cijSA5%2BmJnsYG0AsJpuCjxd1iqk6lDp9iHx1bslu0VgUWgU9Je%2FjsDntZ6UlEaymiOWj9hGRPd5O%2BWhdTyTOP1hh2vjIpR6%2FedzyPkiOEAeRPl%2BNRhOVcZGJ2%2FCWWPkJe%2BNFp%2BvraoMEZxkfdXQvEuOv4kuZ0LVTjeb3C2dFJAS6JP76jpYxBBBiGJp7HHjBkAlRHQiAm%2BAidPa7W1IoTRiJ1cd1F%2FtidE%2B8S6%2B759icV5IXIoJ2gf0bPgaswLpeXOOTyxF207zsdWtOO4UmDO%2BLjHs15uJMg5Ar60VsBugGyia2xsJJM8xE5v%2FJSHIxpxmD56ZZIdDiy5MlfHlfbfQBBNNx5Z3ChrYIQC3zOmsGUkAvGE9okQHru95laL2UYzdo9LWaltNtcPGkOHsScg2ynNCx6G5NWsA0iOfU9vwIicbtFomlJXK0GK9Vws95LiLq7e0s4YvLl%2FG4sZp9p49%2BhkPDjUN7LJwNzDLz%2Bq9BjqkAb6l2Nd2DDp1TyeZ76MCnNC5TZ3sDacnPZua%2BckjZnnIpyR6zhB5qWG5wpvGxJws%2FAko6IHxzI%2FS9ttxSxU36ZbsaG%2FoK%2FiWy7OTQTduzs3y8loo2jrCI93SwmVbp3dWKKPEGZikS5aBBV2GMfZh312d8S825Pgphhy1XevE%2F1Mjb01teWWSF%2F2ww1bBV8lLW9CrJICIDRcuVSjr7k6aXU%2BUXZ2Y&X-Amz-Signature=8dbca97bd859e79d84a7b250716fb5f135540d4e5b5f6af6b1535c1379d3ac7c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
