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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47MQXAY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG5bkn%2BaTGWiUifa86Zt2Yxdx%2Bh1DJyCarDC7o8OwDpmAiEAs3N28zPx8QM7kNCoyNRgAEgp7LqxWA6JlCodzUCE7MAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDM4ZzjnLP8D%2BycdaBCrcA6EugdXoSIDdYQCiQGMd8Ya71tkqNF78dSU1rdi8qiLEgGDDUj8e5Nrv9jOG1Ba3yrMkuD%2FAJS01YXItksOD89pCqK9fqFwKtzEg627mrz7UscgaKM7Dn36KQxRRo1TVD3Ma1VyRdHp56VbEr0ZdcXfkNO7Tr4oYgkvspwOzPWEl6M1ExcjCc2HHSYfb%2FFU%2B6Yf47WiWdJDMfDxwHuVZXXDeVbMBQZMRl7yBGMNsgM6ufJdsY0RoEXEGe01SgvlcTUZOXmjO22OcHCtoIvUl7KciatQKZRe0%2BH6TR5%2FDmz2i12viCz2RZbOjbvK9ZWl7VIwz9dIlrHD3ntOYDqGAowCjL2zk0DgmZtkLa5jG9P8dPs35tERVzoFTzYmA%2FQYXn264d13SWXZ85LhNnq47EmaVx5STOQlhuiQKwizyIsenm%2FJtQn813DXu6uIrEO0RwcqXrtu1%2BisDui3LHcfNRTx3ZAxCWWZsvMvPIfkenKe3%2B0G2Szot%2B6aXQP%2F5ufWDyS%2F0PxzwfKBlhQft3U5hRY2j4cyf5Zb7xJZ9BRKdvd3XzZXDHBMoFoMG3ytklFZqoCd8ApHtE7rrV2H4DdEGzn6RXTdmV8xvuoz43zVuyea%2FBvM20wxYNNHy4w4rMPTl0cEGOqUBZTJFPWRSU9%2Fbx9xrZnO2oJPYomDNV5rVS7zIY8pld64rifb%2Bf4KCw8Eq7t4Hy2YjC70UfZPFtxwKepMZOAmVFhtD%2BU%2FA8%2FBv%2F%2BUhvXvQMCrtHl7%2FjSZAi8ahigcf5pdt%2FWKSqOyxMj2fbbe%2Bgn1O5xUlVm2nE5RbIYIAiXn7wgc%2FWb22NDlaGmO4pCI75KfuZT5vb36SVw1Asn%2FTRGmxf%2BaNV8fb&X-Amz-Signature=40f3ab0a6f2e805c8710be5ee4e768bf96e987f2e92f0cc8f6ce52c6cf842de8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47MQXAY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG5bkn%2BaTGWiUifa86Zt2Yxdx%2Bh1DJyCarDC7o8OwDpmAiEAs3N28zPx8QM7kNCoyNRgAEgp7LqxWA6JlCodzUCE7MAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDM4ZzjnLP8D%2BycdaBCrcA6EugdXoSIDdYQCiQGMd8Ya71tkqNF78dSU1rdi8qiLEgGDDUj8e5Nrv9jOG1Ba3yrMkuD%2FAJS01YXItksOD89pCqK9fqFwKtzEg627mrz7UscgaKM7Dn36KQxRRo1TVD3Ma1VyRdHp56VbEr0ZdcXfkNO7Tr4oYgkvspwOzPWEl6M1ExcjCc2HHSYfb%2FFU%2B6Yf47WiWdJDMfDxwHuVZXXDeVbMBQZMRl7yBGMNsgM6ufJdsY0RoEXEGe01SgvlcTUZOXmjO22OcHCtoIvUl7KciatQKZRe0%2BH6TR5%2FDmz2i12viCz2RZbOjbvK9ZWl7VIwz9dIlrHD3ntOYDqGAowCjL2zk0DgmZtkLa5jG9P8dPs35tERVzoFTzYmA%2FQYXn264d13SWXZ85LhNnq47EmaVx5STOQlhuiQKwizyIsenm%2FJtQn813DXu6uIrEO0RwcqXrtu1%2BisDui3LHcfNRTx3ZAxCWWZsvMvPIfkenKe3%2B0G2Szot%2B6aXQP%2F5ufWDyS%2F0PxzwfKBlhQft3U5hRY2j4cyf5Zb7xJZ9BRKdvd3XzZXDHBMoFoMG3ytklFZqoCd8ApHtE7rrV2H4DdEGzn6RXTdmV8xvuoz43zVuyea%2FBvM20wxYNNHy4w4rMPTl0cEGOqUBZTJFPWRSU9%2Fbx9xrZnO2oJPYomDNV5rVS7zIY8pld64rifb%2Bf4KCw8Eq7t4Hy2YjC70UfZPFtxwKepMZOAmVFhtD%2BU%2FA8%2FBv%2F%2BUhvXvQMCrtHl7%2FjSZAi8ahigcf5pdt%2FWKSqOyxMj2fbbe%2Bgn1O5xUlVm2nE5RbIYIAiXn7wgc%2FWb22NDlaGmO4pCI75KfuZT5vb36SVw1Asn%2FTRGmxf%2BaNV8fb&X-Amz-Signature=3a92416425387ff66441646fb383beaa6ef66a2f4ef077f6697971fc80882036&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47MQXAY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG5bkn%2BaTGWiUifa86Zt2Yxdx%2Bh1DJyCarDC7o8OwDpmAiEAs3N28zPx8QM7kNCoyNRgAEgp7LqxWA6JlCodzUCE7MAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDM4ZzjnLP8D%2BycdaBCrcA6EugdXoSIDdYQCiQGMd8Ya71tkqNF78dSU1rdi8qiLEgGDDUj8e5Nrv9jOG1Ba3yrMkuD%2FAJS01YXItksOD89pCqK9fqFwKtzEg627mrz7UscgaKM7Dn36KQxRRo1TVD3Ma1VyRdHp56VbEr0ZdcXfkNO7Tr4oYgkvspwOzPWEl6M1ExcjCc2HHSYfb%2FFU%2B6Yf47WiWdJDMfDxwHuVZXXDeVbMBQZMRl7yBGMNsgM6ufJdsY0RoEXEGe01SgvlcTUZOXmjO22OcHCtoIvUl7KciatQKZRe0%2BH6TR5%2FDmz2i12viCz2RZbOjbvK9ZWl7VIwz9dIlrHD3ntOYDqGAowCjL2zk0DgmZtkLa5jG9P8dPs35tERVzoFTzYmA%2FQYXn264d13SWXZ85LhNnq47EmaVx5STOQlhuiQKwizyIsenm%2FJtQn813DXu6uIrEO0RwcqXrtu1%2BisDui3LHcfNRTx3ZAxCWWZsvMvPIfkenKe3%2B0G2Szot%2B6aXQP%2F5ufWDyS%2F0PxzwfKBlhQft3U5hRY2j4cyf5Zb7xJZ9BRKdvd3XzZXDHBMoFoMG3ytklFZqoCd8ApHtE7rrV2H4DdEGzn6RXTdmV8xvuoz43zVuyea%2FBvM20wxYNNHy4w4rMPTl0cEGOqUBZTJFPWRSU9%2Fbx9xrZnO2oJPYomDNV5rVS7zIY8pld64rifb%2Bf4KCw8Eq7t4Hy2YjC70UfZPFtxwKepMZOAmVFhtD%2BU%2FA8%2FBv%2F%2BUhvXvQMCrtHl7%2FjSZAi8ahigcf5pdt%2FWKSqOyxMj2fbbe%2Bgn1O5xUlVm2nE5RbIYIAiXn7wgc%2FWb22NDlaGmO4pCI75KfuZT5vb36SVw1Asn%2FTRGmxf%2BaNV8fb&X-Amz-Signature=46211589b5924b550f8d845192f543314a45a1e54427457b508a3112db62388d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47MQXAY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG5bkn%2BaTGWiUifa86Zt2Yxdx%2Bh1DJyCarDC7o8OwDpmAiEAs3N28zPx8QM7kNCoyNRgAEgp7LqxWA6JlCodzUCE7MAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDM4ZzjnLP8D%2BycdaBCrcA6EugdXoSIDdYQCiQGMd8Ya71tkqNF78dSU1rdi8qiLEgGDDUj8e5Nrv9jOG1Ba3yrMkuD%2FAJS01YXItksOD89pCqK9fqFwKtzEg627mrz7UscgaKM7Dn36KQxRRo1TVD3Ma1VyRdHp56VbEr0ZdcXfkNO7Tr4oYgkvspwOzPWEl6M1ExcjCc2HHSYfb%2FFU%2B6Yf47WiWdJDMfDxwHuVZXXDeVbMBQZMRl7yBGMNsgM6ufJdsY0RoEXEGe01SgvlcTUZOXmjO22OcHCtoIvUl7KciatQKZRe0%2BH6TR5%2FDmz2i12viCz2RZbOjbvK9ZWl7VIwz9dIlrHD3ntOYDqGAowCjL2zk0DgmZtkLa5jG9P8dPs35tERVzoFTzYmA%2FQYXn264d13SWXZ85LhNnq47EmaVx5STOQlhuiQKwizyIsenm%2FJtQn813DXu6uIrEO0RwcqXrtu1%2BisDui3LHcfNRTx3ZAxCWWZsvMvPIfkenKe3%2B0G2Szot%2B6aXQP%2F5ufWDyS%2F0PxzwfKBlhQft3U5hRY2j4cyf5Zb7xJZ9BRKdvd3XzZXDHBMoFoMG3ytklFZqoCd8ApHtE7rrV2H4DdEGzn6RXTdmV8xvuoz43zVuyea%2FBvM20wxYNNHy4w4rMPTl0cEGOqUBZTJFPWRSU9%2Fbx9xrZnO2oJPYomDNV5rVS7zIY8pld64rifb%2Bf4KCw8Eq7t4Hy2YjC70UfZPFtxwKepMZOAmVFhtD%2BU%2FA8%2FBv%2F%2BUhvXvQMCrtHl7%2FjSZAi8ahigcf5pdt%2FWKSqOyxMj2fbbe%2Bgn1O5xUlVm2nE5RbIYIAiXn7wgc%2FWb22NDlaGmO4pCI75KfuZT5vb36SVw1Asn%2FTRGmxf%2BaNV8fb&X-Amz-Signature=fb407deae38d4ac1840512aba57796b7f91f462df171a4451c5c773beb4b76d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47MQXAY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG5bkn%2BaTGWiUifa86Zt2Yxdx%2Bh1DJyCarDC7o8OwDpmAiEAs3N28zPx8QM7kNCoyNRgAEgp7LqxWA6JlCodzUCE7MAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDM4ZzjnLP8D%2BycdaBCrcA6EugdXoSIDdYQCiQGMd8Ya71tkqNF78dSU1rdi8qiLEgGDDUj8e5Nrv9jOG1Ba3yrMkuD%2FAJS01YXItksOD89pCqK9fqFwKtzEg627mrz7UscgaKM7Dn36KQxRRo1TVD3Ma1VyRdHp56VbEr0ZdcXfkNO7Tr4oYgkvspwOzPWEl6M1ExcjCc2HHSYfb%2FFU%2B6Yf47WiWdJDMfDxwHuVZXXDeVbMBQZMRl7yBGMNsgM6ufJdsY0RoEXEGe01SgvlcTUZOXmjO22OcHCtoIvUl7KciatQKZRe0%2BH6TR5%2FDmz2i12viCz2RZbOjbvK9ZWl7VIwz9dIlrHD3ntOYDqGAowCjL2zk0DgmZtkLa5jG9P8dPs35tERVzoFTzYmA%2FQYXn264d13SWXZ85LhNnq47EmaVx5STOQlhuiQKwizyIsenm%2FJtQn813DXu6uIrEO0RwcqXrtu1%2BisDui3LHcfNRTx3ZAxCWWZsvMvPIfkenKe3%2B0G2Szot%2B6aXQP%2F5ufWDyS%2F0PxzwfKBlhQft3U5hRY2j4cyf5Zb7xJZ9BRKdvd3XzZXDHBMoFoMG3ytklFZqoCd8ApHtE7rrV2H4DdEGzn6RXTdmV8xvuoz43zVuyea%2FBvM20wxYNNHy4w4rMPTl0cEGOqUBZTJFPWRSU9%2Fbx9xrZnO2oJPYomDNV5rVS7zIY8pld64rifb%2Bf4KCw8Eq7t4Hy2YjC70UfZPFtxwKepMZOAmVFhtD%2BU%2FA8%2FBv%2F%2BUhvXvQMCrtHl7%2FjSZAi8ahigcf5pdt%2FWKSqOyxMj2fbbe%2Bgn1O5xUlVm2nE5RbIYIAiXn7wgc%2FWb22NDlaGmO4pCI75KfuZT5vb36SVw1Asn%2FTRGmxf%2BaNV8fb&X-Amz-Signature=abc806096b17d7d9efbefe3ddea6078b4ba7df5dcd567242807eb43e72ad43eb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47MQXAY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG5bkn%2BaTGWiUifa86Zt2Yxdx%2Bh1DJyCarDC7o8OwDpmAiEAs3N28zPx8QM7kNCoyNRgAEgp7LqxWA6JlCodzUCE7MAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDM4ZzjnLP8D%2BycdaBCrcA6EugdXoSIDdYQCiQGMd8Ya71tkqNF78dSU1rdi8qiLEgGDDUj8e5Nrv9jOG1Ba3yrMkuD%2FAJS01YXItksOD89pCqK9fqFwKtzEg627mrz7UscgaKM7Dn36KQxRRo1TVD3Ma1VyRdHp56VbEr0ZdcXfkNO7Tr4oYgkvspwOzPWEl6M1ExcjCc2HHSYfb%2FFU%2B6Yf47WiWdJDMfDxwHuVZXXDeVbMBQZMRl7yBGMNsgM6ufJdsY0RoEXEGe01SgvlcTUZOXmjO22OcHCtoIvUl7KciatQKZRe0%2BH6TR5%2FDmz2i12viCz2RZbOjbvK9ZWl7VIwz9dIlrHD3ntOYDqGAowCjL2zk0DgmZtkLa5jG9P8dPs35tERVzoFTzYmA%2FQYXn264d13SWXZ85LhNnq47EmaVx5STOQlhuiQKwizyIsenm%2FJtQn813DXu6uIrEO0RwcqXrtu1%2BisDui3LHcfNRTx3ZAxCWWZsvMvPIfkenKe3%2B0G2Szot%2B6aXQP%2F5ufWDyS%2F0PxzwfKBlhQft3U5hRY2j4cyf5Zb7xJZ9BRKdvd3XzZXDHBMoFoMG3ytklFZqoCd8ApHtE7rrV2H4DdEGzn6RXTdmV8xvuoz43zVuyea%2FBvM20wxYNNHy4w4rMPTl0cEGOqUBZTJFPWRSU9%2Fbx9xrZnO2oJPYomDNV5rVS7zIY8pld64rifb%2Bf4KCw8Eq7t4Hy2YjC70UfZPFtxwKepMZOAmVFhtD%2BU%2FA8%2FBv%2F%2BUhvXvQMCrtHl7%2FjSZAi8ahigcf5pdt%2FWKSqOyxMj2fbbe%2Bgn1O5xUlVm2nE5RbIYIAiXn7wgc%2FWb22NDlaGmO4pCI75KfuZT5vb36SVw1Asn%2FTRGmxf%2BaNV8fb&X-Amz-Signature=4eedcde448a88f97e1dba76f7f0ef8b1743b407728ca060b04367cb05afc91a3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47MQXAY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG5bkn%2BaTGWiUifa86Zt2Yxdx%2Bh1DJyCarDC7o8OwDpmAiEAs3N28zPx8QM7kNCoyNRgAEgp7LqxWA6JlCodzUCE7MAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDM4ZzjnLP8D%2BycdaBCrcA6EugdXoSIDdYQCiQGMd8Ya71tkqNF78dSU1rdi8qiLEgGDDUj8e5Nrv9jOG1Ba3yrMkuD%2FAJS01YXItksOD89pCqK9fqFwKtzEg627mrz7UscgaKM7Dn36KQxRRo1TVD3Ma1VyRdHp56VbEr0ZdcXfkNO7Tr4oYgkvspwOzPWEl6M1ExcjCc2HHSYfb%2FFU%2B6Yf47WiWdJDMfDxwHuVZXXDeVbMBQZMRl7yBGMNsgM6ufJdsY0RoEXEGe01SgvlcTUZOXmjO22OcHCtoIvUl7KciatQKZRe0%2BH6TR5%2FDmz2i12viCz2RZbOjbvK9ZWl7VIwz9dIlrHD3ntOYDqGAowCjL2zk0DgmZtkLa5jG9P8dPs35tERVzoFTzYmA%2FQYXn264d13SWXZ85LhNnq47EmaVx5STOQlhuiQKwizyIsenm%2FJtQn813DXu6uIrEO0RwcqXrtu1%2BisDui3LHcfNRTx3ZAxCWWZsvMvPIfkenKe3%2B0G2Szot%2B6aXQP%2F5ufWDyS%2F0PxzwfKBlhQft3U5hRY2j4cyf5Zb7xJZ9BRKdvd3XzZXDHBMoFoMG3ytklFZqoCd8ApHtE7rrV2H4DdEGzn6RXTdmV8xvuoz43zVuyea%2FBvM20wxYNNHy4w4rMPTl0cEGOqUBZTJFPWRSU9%2Fbx9xrZnO2oJPYomDNV5rVS7zIY8pld64rifb%2Bf4KCw8Eq7t4Hy2YjC70UfZPFtxwKepMZOAmVFhtD%2BU%2FA8%2FBv%2F%2BUhvXvQMCrtHl7%2FjSZAi8ahigcf5pdt%2FWKSqOyxMj2fbbe%2Bgn1O5xUlVm2nE5RbIYIAiXn7wgc%2FWb22NDlaGmO4pCI75KfuZT5vb36SVw1Asn%2FTRGmxf%2BaNV8fb&X-Amz-Signature=4c2ebf7973c4e9d3468ca2b25d2d28d26e3e743c0ec41b3cf869cdd32903848a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
