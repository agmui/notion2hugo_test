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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4AZHGJR%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDErp99QNqwmQIYjC7FREowS6L2wjvxDQ8zNHwiyF1oPwIhANukfMyXPFke0B94g6QV3bfEdIyOWlB2v650He8gUuqZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweYfkYmmwy%2BFPw40Yq3ANSAtYwCD%2FVjCsNXReaIkEzOov8XGtoQdTaLMwVBL%2BWs7toLWSMyfufLZP4mW443pKgEX3jcT886mRvDefs%2B9P0XvUqT0dobOj5uom08M%2FDIBaNMjiGjAMrQsZBy3ilmHvuLW8aYIrlGnT8ZHwTQtG32bU0V9YaZ9bsqhLFXCWi2tz%2F%2Fguta%2FKPDkok3qXZ9tPdza00scUCxyxRbPaAULQx6sNrwHZa%2BbmpzKkIN8BPiWcDFgOpGmA6JV6lPFKfADTgN4Qm8o7y5wwL1RO70D%2BcpHK2nqVdcQEVmSzDfo8bZKkSBBIUGR614EhaRF%2FH1NTqIBKcUz9poxvqMdpEgBtCVwqAK9EXZHo4Ae9PRN3lX%2F%2F7MkBMg3ovsPOFijMU0yyTUjabYNutVTGoGQsptVXdPIii53a8pbLisO%2FLDX%2FQlu6TX0NkKUegM9YfAK2Z6UQkjP%2FkwyBsgV0nM5un2pSnTgQru2kPuymJxqq0gfE1WSFUvICJm730%2B7TXHvvsVJWnYVrCJTQ8dh3ephNUmYzBI%2Fa6zZEHRGHPNH%2FBYQSKPdKL5hgDsiLnGAWREGQCH7G7TN1sShBiG2ak%2BG9Irh0NAM6cqiXwijPIl%2FS7j6XfJ3CnRY93OIxQNgP1xDDN1O3JBjqkAb29ctn14gmwSD6k%2BVj%2BA%2F97wXDhZ1T8FsrN%2BLM%2BHIY8Mird7iwm2cXZvEXW6WgXKVmKryOZ6wOfvhuvtl5%2FP5%2Buht9Ggz30ohBAqynvRxn0ubInbIFAiSl1A5Bk2e4ubj9LUut%2BH8ZfUMONJyeoX2RBT2kVgxfMm%2ButElawwtWd3HDZxfKKH3PgeB4UyACjYJ0Ea4OVWcFnwXvsa%2Fa74b5NXy9g&X-Amz-Signature=fd24a63ad445de21929d855aec50a54fc1cfe3c1ab248be12cc9fefbbc930865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4AZHGJR%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDErp99QNqwmQIYjC7FREowS6L2wjvxDQ8zNHwiyF1oPwIhANukfMyXPFke0B94g6QV3bfEdIyOWlB2v650He8gUuqZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweYfkYmmwy%2BFPw40Yq3ANSAtYwCD%2FVjCsNXReaIkEzOov8XGtoQdTaLMwVBL%2BWs7toLWSMyfufLZP4mW443pKgEX3jcT886mRvDefs%2B9P0XvUqT0dobOj5uom08M%2FDIBaNMjiGjAMrQsZBy3ilmHvuLW8aYIrlGnT8ZHwTQtG32bU0V9YaZ9bsqhLFXCWi2tz%2F%2Fguta%2FKPDkok3qXZ9tPdza00scUCxyxRbPaAULQx6sNrwHZa%2BbmpzKkIN8BPiWcDFgOpGmA6JV6lPFKfADTgN4Qm8o7y5wwL1RO70D%2BcpHK2nqVdcQEVmSzDfo8bZKkSBBIUGR614EhaRF%2FH1NTqIBKcUz9poxvqMdpEgBtCVwqAK9EXZHo4Ae9PRN3lX%2F%2F7MkBMg3ovsPOFijMU0yyTUjabYNutVTGoGQsptVXdPIii53a8pbLisO%2FLDX%2FQlu6TX0NkKUegM9YfAK2Z6UQkjP%2FkwyBsgV0nM5un2pSnTgQru2kPuymJxqq0gfE1WSFUvICJm730%2B7TXHvvsVJWnYVrCJTQ8dh3ephNUmYzBI%2Fa6zZEHRGHPNH%2FBYQSKPdKL5hgDsiLnGAWREGQCH7G7TN1sShBiG2ak%2BG9Irh0NAM6cqiXwijPIl%2FS7j6XfJ3CnRY93OIxQNgP1xDDN1O3JBjqkAb29ctn14gmwSD6k%2BVj%2BA%2F97wXDhZ1T8FsrN%2BLM%2BHIY8Mird7iwm2cXZvEXW6WgXKVmKryOZ6wOfvhuvtl5%2FP5%2Buht9Ggz30ohBAqynvRxn0ubInbIFAiSl1A5Bk2e4ubj9LUut%2BH8ZfUMONJyeoX2RBT2kVgxfMm%2ButElawwtWd3HDZxfKKH3PgeB4UyACjYJ0Ea4OVWcFnwXvsa%2Fa74b5NXy9g&X-Amz-Signature=805a6b090b346d7eaa88b6b53d80c69170104a97cd7f67c62d3b207573a29e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4AZHGJR%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDErp99QNqwmQIYjC7FREowS6L2wjvxDQ8zNHwiyF1oPwIhANukfMyXPFke0B94g6QV3bfEdIyOWlB2v650He8gUuqZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweYfkYmmwy%2BFPw40Yq3ANSAtYwCD%2FVjCsNXReaIkEzOov8XGtoQdTaLMwVBL%2BWs7toLWSMyfufLZP4mW443pKgEX3jcT886mRvDefs%2B9P0XvUqT0dobOj5uom08M%2FDIBaNMjiGjAMrQsZBy3ilmHvuLW8aYIrlGnT8ZHwTQtG32bU0V9YaZ9bsqhLFXCWi2tz%2F%2Fguta%2FKPDkok3qXZ9tPdza00scUCxyxRbPaAULQx6sNrwHZa%2BbmpzKkIN8BPiWcDFgOpGmA6JV6lPFKfADTgN4Qm8o7y5wwL1RO70D%2BcpHK2nqVdcQEVmSzDfo8bZKkSBBIUGR614EhaRF%2FH1NTqIBKcUz9poxvqMdpEgBtCVwqAK9EXZHo4Ae9PRN3lX%2F%2F7MkBMg3ovsPOFijMU0yyTUjabYNutVTGoGQsptVXdPIii53a8pbLisO%2FLDX%2FQlu6TX0NkKUegM9YfAK2Z6UQkjP%2FkwyBsgV0nM5un2pSnTgQru2kPuymJxqq0gfE1WSFUvICJm730%2B7TXHvvsVJWnYVrCJTQ8dh3ephNUmYzBI%2Fa6zZEHRGHPNH%2FBYQSKPdKL5hgDsiLnGAWREGQCH7G7TN1sShBiG2ak%2BG9Irh0NAM6cqiXwijPIl%2FS7j6XfJ3CnRY93OIxQNgP1xDDN1O3JBjqkAb29ctn14gmwSD6k%2BVj%2BA%2F97wXDhZ1T8FsrN%2BLM%2BHIY8Mird7iwm2cXZvEXW6WgXKVmKryOZ6wOfvhuvtl5%2FP5%2Buht9Ggz30ohBAqynvRxn0ubInbIFAiSl1A5Bk2e4ubj9LUut%2BH8ZfUMONJyeoX2RBT2kVgxfMm%2ButElawwtWd3HDZxfKKH3PgeB4UyACjYJ0Ea4OVWcFnwXvsa%2Fa74b5NXy9g&X-Amz-Signature=16cd15cda5b105af2c3d2da50ca323ac02016c3943ca44c83d4c50b474e37a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4AZHGJR%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDErp99QNqwmQIYjC7FREowS6L2wjvxDQ8zNHwiyF1oPwIhANukfMyXPFke0B94g6QV3bfEdIyOWlB2v650He8gUuqZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweYfkYmmwy%2BFPw40Yq3ANSAtYwCD%2FVjCsNXReaIkEzOov8XGtoQdTaLMwVBL%2BWs7toLWSMyfufLZP4mW443pKgEX3jcT886mRvDefs%2B9P0XvUqT0dobOj5uom08M%2FDIBaNMjiGjAMrQsZBy3ilmHvuLW8aYIrlGnT8ZHwTQtG32bU0V9YaZ9bsqhLFXCWi2tz%2F%2Fguta%2FKPDkok3qXZ9tPdza00scUCxyxRbPaAULQx6sNrwHZa%2BbmpzKkIN8BPiWcDFgOpGmA6JV6lPFKfADTgN4Qm8o7y5wwL1RO70D%2BcpHK2nqVdcQEVmSzDfo8bZKkSBBIUGR614EhaRF%2FH1NTqIBKcUz9poxvqMdpEgBtCVwqAK9EXZHo4Ae9PRN3lX%2F%2F7MkBMg3ovsPOFijMU0yyTUjabYNutVTGoGQsptVXdPIii53a8pbLisO%2FLDX%2FQlu6TX0NkKUegM9YfAK2Z6UQkjP%2FkwyBsgV0nM5un2pSnTgQru2kPuymJxqq0gfE1WSFUvICJm730%2B7TXHvvsVJWnYVrCJTQ8dh3ephNUmYzBI%2Fa6zZEHRGHPNH%2FBYQSKPdKL5hgDsiLnGAWREGQCH7G7TN1sShBiG2ak%2BG9Irh0NAM6cqiXwijPIl%2FS7j6XfJ3CnRY93OIxQNgP1xDDN1O3JBjqkAb29ctn14gmwSD6k%2BVj%2BA%2F97wXDhZ1T8FsrN%2BLM%2BHIY8Mird7iwm2cXZvEXW6WgXKVmKryOZ6wOfvhuvtl5%2FP5%2Buht9Ggz30ohBAqynvRxn0ubInbIFAiSl1A5Bk2e4ubj9LUut%2BH8ZfUMONJyeoX2RBT2kVgxfMm%2ButElawwtWd3HDZxfKKH3PgeB4UyACjYJ0Ea4OVWcFnwXvsa%2Fa74b5NXy9g&X-Amz-Signature=76c3e79ff4edd68b21ecd323ea90f0d7b00bd429140f2a7e80d131788d55c3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4AZHGJR%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDErp99QNqwmQIYjC7FREowS6L2wjvxDQ8zNHwiyF1oPwIhANukfMyXPFke0B94g6QV3bfEdIyOWlB2v650He8gUuqZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweYfkYmmwy%2BFPw40Yq3ANSAtYwCD%2FVjCsNXReaIkEzOov8XGtoQdTaLMwVBL%2BWs7toLWSMyfufLZP4mW443pKgEX3jcT886mRvDefs%2B9P0XvUqT0dobOj5uom08M%2FDIBaNMjiGjAMrQsZBy3ilmHvuLW8aYIrlGnT8ZHwTQtG32bU0V9YaZ9bsqhLFXCWi2tz%2F%2Fguta%2FKPDkok3qXZ9tPdza00scUCxyxRbPaAULQx6sNrwHZa%2BbmpzKkIN8BPiWcDFgOpGmA6JV6lPFKfADTgN4Qm8o7y5wwL1RO70D%2BcpHK2nqVdcQEVmSzDfo8bZKkSBBIUGR614EhaRF%2FH1NTqIBKcUz9poxvqMdpEgBtCVwqAK9EXZHo4Ae9PRN3lX%2F%2F7MkBMg3ovsPOFijMU0yyTUjabYNutVTGoGQsptVXdPIii53a8pbLisO%2FLDX%2FQlu6TX0NkKUegM9YfAK2Z6UQkjP%2FkwyBsgV0nM5un2pSnTgQru2kPuymJxqq0gfE1WSFUvICJm730%2B7TXHvvsVJWnYVrCJTQ8dh3ephNUmYzBI%2Fa6zZEHRGHPNH%2FBYQSKPdKL5hgDsiLnGAWREGQCH7G7TN1sShBiG2ak%2BG9Irh0NAM6cqiXwijPIl%2FS7j6XfJ3CnRY93OIxQNgP1xDDN1O3JBjqkAb29ctn14gmwSD6k%2BVj%2BA%2F97wXDhZ1T8FsrN%2BLM%2BHIY8Mird7iwm2cXZvEXW6WgXKVmKryOZ6wOfvhuvtl5%2FP5%2Buht9Ggz30ohBAqynvRxn0ubInbIFAiSl1A5Bk2e4ubj9LUut%2BH8ZfUMONJyeoX2RBT2kVgxfMm%2ButElawwtWd3HDZxfKKH3PgeB4UyACjYJ0Ea4OVWcFnwXvsa%2Fa74b5NXy9g&X-Amz-Signature=4efcd1f7d68c37e15d64271316dc9ec55b1cc98a81e9bf678f733659735015c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4AZHGJR%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDErp99QNqwmQIYjC7FREowS6L2wjvxDQ8zNHwiyF1oPwIhANukfMyXPFke0B94g6QV3bfEdIyOWlB2v650He8gUuqZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweYfkYmmwy%2BFPw40Yq3ANSAtYwCD%2FVjCsNXReaIkEzOov8XGtoQdTaLMwVBL%2BWs7toLWSMyfufLZP4mW443pKgEX3jcT886mRvDefs%2B9P0XvUqT0dobOj5uom08M%2FDIBaNMjiGjAMrQsZBy3ilmHvuLW8aYIrlGnT8ZHwTQtG32bU0V9YaZ9bsqhLFXCWi2tz%2F%2Fguta%2FKPDkok3qXZ9tPdza00scUCxyxRbPaAULQx6sNrwHZa%2BbmpzKkIN8BPiWcDFgOpGmA6JV6lPFKfADTgN4Qm8o7y5wwL1RO70D%2BcpHK2nqVdcQEVmSzDfo8bZKkSBBIUGR614EhaRF%2FH1NTqIBKcUz9poxvqMdpEgBtCVwqAK9EXZHo4Ae9PRN3lX%2F%2F7MkBMg3ovsPOFijMU0yyTUjabYNutVTGoGQsptVXdPIii53a8pbLisO%2FLDX%2FQlu6TX0NkKUegM9YfAK2Z6UQkjP%2FkwyBsgV0nM5un2pSnTgQru2kPuymJxqq0gfE1WSFUvICJm730%2B7TXHvvsVJWnYVrCJTQ8dh3ephNUmYzBI%2Fa6zZEHRGHPNH%2FBYQSKPdKL5hgDsiLnGAWREGQCH7G7TN1sShBiG2ak%2BG9Irh0NAM6cqiXwijPIl%2FS7j6XfJ3CnRY93OIxQNgP1xDDN1O3JBjqkAb29ctn14gmwSD6k%2BVj%2BA%2F97wXDhZ1T8FsrN%2BLM%2BHIY8Mird7iwm2cXZvEXW6WgXKVmKryOZ6wOfvhuvtl5%2FP5%2Buht9Ggz30ohBAqynvRxn0ubInbIFAiSl1A5Bk2e4ubj9LUut%2BH8ZfUMONJyeoX2RBT2kVgxfMm%2ButElawwtWd3HDZxfKKH3PgeB4UyACjYJ0Ea4OVWcFnwXvsa%2Fa74b5NXy9g&X-Amz-Signature=c252e931c48c46fa5c9df0891d9d8ecd46237e4b0b8d9d71ac09c07a0105d1cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4AZHGJR%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDErp99QNqwmQIYjC7FREowS6L2wjvxDQ8zNHwiyF1oPwIhANukfMyXPFke0B94g6QV3bfEdIyOWlB2v650He8gUuqZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweYfkYmmwy%2BFPw40Yq3ANSAtYwCD%2FVjCsNXReaIkEzOov8XGtoQdTaLMwVBL%2BWs7toLWSMyfufLZP4mW443pKgEX3jcT886mRvDefs%2B9P0XvUqT0dobOj5uom08M%2FDIBaNMjiGjAMrQsZBy3ilmHvuLW8aYIrlGnT8ZHwTQtG32bU0V9YaZ9bsqhLFXCWi2tz%2F%2Fguta%2FKPDkok3qXZ9tPdza00scUCxyxRbPaAULQx6sNrwHZa%2BbmpzKkIN8BPiWcDFgOpGmA6JV6lPFKfADTgN4Qm8o7y5wwL1RO70D%2BcpHK2nqVdcQEVmSzDfo8bZKkSBBIUGR614EhaRF%2FH1NTqIBKcUz9poxvqMdpEgBtCVwqAK9EXZHo4Ae9PRN3lX%2F%2F7MkBMg3ovsPOFijMU0yyTUjabYNutVTGoGQsptVXdPIii53a8pbLisO%2FLDX%2FQlu6TX0NkKUegM9YfAK2Z6UQkjP%2FkwyBsgV0nM5un2pSnTgQru2kPuymJxqq0gfE1WSFUvICJm730%2B7TXHvvsVJWnYVrCJTQ8dh3ephNUmYzBI%2Fa6zZEHRGHPNH%2FBYQSKPdKL5hgDsiLnGAWREGQCH7G7TN1sShBiG2ak%2BG9Irh0NAM6cqiXwijPIl%2FS7j6XfJ3CnRY93OIxQNgP1xDDN1O3JBjqkAb29ctn14gmwSD6k%2BVj%2BA%2F97wXDhZ1T8FsrN%2BLM%2BHIY8Mird7iwm2cXZvEXW6WgXKVmKryOZ6wOfvhuvtl5%2FP5%2Buht9Ggz30ohBAqynvRxn0ubInbIFAiSl1A5Bk2e4ubj9LUut%2BH8ZfUMONJyeoX2RBT2kVgxfMm%2ButElawwtWd3HDZxfKKH3PgeB4UyACjYJ0Ea4OVWcFnwXvsa%2Fa74b5NXy9g&X-Amz-Signature=9d5d913556f19bff2215314ef25cc24c64a7cd7501886c85f466e0d012b13ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
