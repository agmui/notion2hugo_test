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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUBUUYFR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDAENlxySAO2xFYWeqUIihC0r2mMqS9p%2B3fDJ7DokTKQQIhAPeGUn0IX9EY6nkTI172kNrNekXkBIXO7R6IMexJ0Sp1Kv8DCB4QABoMNjM3NDIzMTgzODA1Igw3uCSWwHh8YVg2%2FzQq3AN1Ei0hpsvXwTxnr1ONAC1A9PKbBr98lumWEMhk60uqbDKjLwfXhU8MxOIb3q8UPMrFdOREYuP%2B1m%2B9j3jlQFu3Pj6v5i7%2BegbVGXpBvE5yuQPhZM4vHviSZxsM1U8yrIJK%2BMPkXeZoqOAxNOIg1i1F6J6Cp9EJkNpBua4%2Fch6X12RMuOzyeGKEfHGXtEn8L4Ph9d6qpjqR0oyZCRVLyLjLpBEqNyulQI4kA5955aZkH%2FxEn5HYMpWYdarxlrcLXrh2z1jc3odq9t3rGVmjzXthL8RVOCDxZattmwn7Nqe6EEqJhzKOMU2AVViLHDrFIXEYzSGv7fCwFkn%2Fs%2BfvgqvI9l8A9PFHp4S3znXD%2FH1CK23CdHtFDtfiDkMrBB0QQDLuDMV4r4z5H%2B8iHpQU%2BuoBxZ%2BwPHnkqCmgug5%2FJK7B5Bt3prn7F7Acoo5xcgBNlA80gTfmO2153vA9RXNGAWzXyCjXkHckuwc%2FCr7dD5yHe6qwAvcqnU0hPXVNMBq2JkQNmep4%2BQ0mC%2FI6RvGKlY2zHu66L%2BDmXfhF24OppmhXaFbQ5zmvBoVx29qZ4lkBQxYC9ekBgi2SVBFsQciPZqwRgmO7ZRvenZMhPSzuARanguuYh3Jma7VN1DEXWTDL5JvDBjqkATQXRMwulbwrxz5bzyFU8z5IgHRUBl6w6iQdt3ovbEt7QLKrjSZb9LZ6A9%2BjH%2F8S2jlyOqCiaszYvy42LQcrpSsV1K5llIAR3Nh0qaoY1swDj3HvzJSQygXdvlpEyp%2Bzjzs%2BygrkoxeX8ACMadYgvJZvCXDtjE2Gic8KVTMYXnqP18kaEv%2B1yb9bK2irklefHiNbgOXCZ5HeOvFKWjtOSfsxnvJI&X-Amz-Signature=150dbb541038127a632eb9e2d152a020ad66247afd8fb2daa7118cd811893398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUBUUYFR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDAENlxySAO2xFYWeqUIihC0r2mMqS9p%2B3fDJ7DokTKQQIhAPeGUn0IX9EY6nkTI172kNrNekXkBIXO7R6IMexJ0Sp1Kv8DCB4QABoMNjM3NDIzMTgzODA1Igw3uCSWwHh8YVg2%2FzQq3AN1Ei0hpsvXwTxnr1ONAC1A9PKbBr98lumWEMhk60uqbDKjLwfXhU8MxOIb3q8UPMrFdOREYuP%2B1m%2B9j3jlQFu3Pj6v5i7%2BegbVGXpBvE5yuQPhZM4vHviSZxsM1U8yrIJK%2BMPkXeZoqOAxNOIg1i1F6J6Cp9EJkNpBua4%2Fch6X12RMuOzyeGKEfHGXtEn8L4Ph9d6qpjqR0oyZCRVLyLjLpBEqNyulQI4kA5955aZkH%2FxEn5HYMpWYdarxlrcLXrh2z1jc3odq9t3rGVmjzXthL8RVOCDxZattmwn7Nqe6EEqJhzKOMU2AVViLHDrFIXEYzSGv7fCwFkn%2Fs%2BfvgqvI9l8A9PFHp4S3znXD%2FH1CK23CdHtFDtfiDkMrBB0QQDLuDMV4r4z5H%2B8iHpQU%2BuoBxZ%2BwPHnkqCmgug5%2FJK7B5Bt3prn7F7Acoo5xcgBNlA80gTfmO2153vA9RXNGAWzXyCjXkHckuwc%2FCr7dD5yHe6qwAvcqnU0hPXVNMBq2JkQNmep4%2BQ0mC%2FI6RvGKlY2zHu66L%2BDmXfhF24OppmhXaFbQ5zmvBoVx29qZ4lkBQxYC9ekBgi2SVBFsQciPZqwRgmO7ZRvenZMhPSzuARanguuYh3Jma7VN1DEXWTDL5JvDBjqkATQXRMwulbwrxz5bzyFU8z5IgHRUBl6w6iQdt3ovbEt7QLKrjSZb9LZ6A9%2BjH%2F8S2jlyOqCiaszYvy42LQcrpSsV1K5llIAR3Nh0qaoY1swDj3HvzJSQygXdvlpEyp%2Bzjzs%2BygrkoxeX8ACMadYgvJZvCXDtjE2Gic8KVTMYXnqP18kaEv%2B1yb9bK2irklefHiNbgOXCZ5HeOvFKWjtOSfsxnvJI&X-Amz-Signature=06f4183f3df0d67c2e737cf0023f7b81e3fca528562b02d413b6fe8039e8712a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUBUUYFR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDAENlxySAO2xFYWeqUIihC0r2mMqS9p%2B3fDJ7DokTKQQIhAPeGUn0IX9EY6nkTI172kNrNekXkBIXO7R6IMexJ0Sp1Kv8DCB4QABoMNjM3NDIzMTgzODA1Igw3uCSWwHh8YVg2%2FzQq3AN1Ei0hpsvXwTxnr1ONAC1A9PKbBr98lumWEMhk60uqbDKjLwfXhU8MxOIb3q8UPMrFdOREYuP%2B1m%2B9j3jlQFu3Pj6v5i7%2BegbVGXpBvE5yuQPhZM4vHviSZxsM1U8yrIJK%2BMPkXeZoqOAxNOIg1i1F6J6Cp9EJkNpBua4%2Fch6X12RMuOzyeGKEfHGXtEn8L4Ph9d6qpjqR0oyZCRVLyLjLpBEqNyulQI4kA5955aZkH%2FxEn5HYMpWYdarxlrcLXrh2z1jc3odq9t3rGVmjzXthL8RVOCDxZattmwn7Nqe6EEqJhzKOMU2AVViLHDrFIXEYzSGv7fCwFkn%2Fs%2BfvgqvI9l8A9PFHp4S3znXD%2FH1CK23CdHtFDtfiDkMrBB0QQDLuDMV4r4z5H%2B8iHpQU%2BuoBxZ%2BwPHnkqCmgug5%2FJK7B5Bt3prn7F7Acoo5xcgBNlA80gTfmO2153vA9RXNGAWzXyCjXkHckuwc%2FCr7dD5yHe6qwAvcqnU0hPXVNMBq2JkQNmep4%2BQ0mC%2FI6RvGKlY2zHu66L%2BDmXfhF24OppmhXaFbQ5zmvBoVx29qZ4lkBQxYC9ekBgi2SVBFsQciPZqwRgmO7ZRvenZMhPSzuARanguuYh3Jma7VN1DEXWTDL5JvDBjqkATQXRMwulbwrxz5bzyFU8z5IgHRUBl6w6iQdt3ovbEt7QLKrjSZb9LZ6A9%2BjH%2F8S2jlyOqCiaszYvy42LQcrpSsV1K5llIAR3Nh0qaoY1swDj3HvzJSQygXdvlpEyp%2Bzjzs%2BygrkoxeX8ACMadYgvJZvCXDtjE2Gic8KVTMYXnqP18kaEv%2B1yb9bK2irklefHiNbgOXCZ5HeOvFKWjtOSfsxnvJI&X-Amz-Signature=deb729cfcdcc13f3d6f1aaa9f46a3dc5485a18d3932f2c48ef106b9a52a3d5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUBUUYFR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDAENlxySAO2xFYWeqUIihC0r2mMqS9p%2B3fDJ7DokTKQQIhAPeGUn0IX9EY6nkTI172kNrNekXkBIXO7R6IMexJ0Sp1Kv8DCB4QABoMNjM3NDIzMTgzODA1Igw3uCSWwHh8YVg2%2FzQq3AN1Ei0hpsvXwTxnr1ONAC1A9PKbBr98lumWEMhk60uqbDKjLwfXhU8MxOIb3q8UPMrFdOREYuP%2B1m%2B9j3jlQFu3Pj6v5i7%2BegbVGXpBvE5yuQPhZM4vHviSZxsM1U8yrIJK%2BMPkXeZoqOAxNOIg1i1F6J6Cp9EJkNpBua4%2Fch6X12RMuOzyeGKEfHGXtEn8L4Ph9d6qpjqR0oyZCRVLyLjLpBEqNyulQI4kA5955aZkH%2FxEn5HYMpWYdarxlrcLXrh2z1jc3odq9t3rGVmjzXthL8RVOCDxZattmwn7Nqe6EEqJhzKOMU2AVViLHDrFIXEYzSGv7fCwFkn%2Fs%2BfvgqvI9l8A9PFHp4S3znXD%2FH1CK23CdHtFDtfiDkMrBB0QQDLuDMV4r4z5H%2B8iHpQU%2BuoBxZ%2BwPHnkqCmgug5%2FJK7B5Bt3prn7F7Acoo5xcgBNlA80gTfmO2153vA9RXNGAWzXyCjXkHckuwc%2FCr7dD5yHe6qwAvcqnU0hPXVNMBq2JkQNmep4%2BQ0mC%2FI6RvGKlY2zHu66L%2BDmXfhF24OppmhXaFbQ5zmvBoVx29qZ4lkBQxYC9ekBgi2SVBFsQciPZqwRgmO7ZRvenZMhPSzuARanguuYh3Jma7VN1DEXWTDL5JvDBjqkATQXRMwulbwrxz5bzyFU8z5IgHRUBl6w6iQdt3ovbEt7QLKrjSZb9LZ6A9%2BjH%2F8S2jlyOqCiaszYvy42LQcrpSsV1K5llIAR3Nh0qaoY1swDj3HvzJSQygXdvlpEyp%2Bzjzs%2BygrkoxeX8ACMadYgvJZvCXDtjE2Gic8KVTMYXnqP18kaEv%2B1yb9bK2irklefHiNbgOXCZ5HeOvFKWjtOSfsxnvJI&X-Amz-Signature=671842f282c0dfb7c47c11e6e97024f61b36eb21876f46eb30ab3b7c93f1b76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUBUUYFR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDAENlxySAO2xFYWeqUIihC0r2mMqS9p%2B3fDJ7DokTKQQIhAPeGUn0IX9EY6nkTI172kNrNekXkBIXO7R6IMexJ0Sp1Kv8DCB4QABoMNjM3NDIzMTgzODA1Igw3uCSWwHh8YVg2%2FzQq3AN1Ei0hpsvXwTxnr1ONAC1A9PKbBr98lumWEMhk60uqbDKjLwfXhU8MxOIb3q8UPMrFdOREYuP%2B1m%2B9j3jlQFu3Pj6v5i7%2BegbVGXpBvE5yuQPhZM4vHviSZxsM1U8yrIJK%2BMPkXeZoqOAxNOIg1i1F6J6Cp9EJkNpBua4%2Fch6X12RMuOzyeGKEfHGXtEn8L4Ph9d6qpjqR0oyZCRVLyLjLpBEqNyulQI4kA5955aZkH%2FxEn5HYMpWYdarxlrcLXrh2z1jc3odq9t3rGVmjzXthL8RVOCDxZattmwn7Nqe6EEqJhzKOMU2AVViLHDrFIXEYzSGv7fCwFkn%2Fs%2BfvgqvI9l8A9PFHp4S3znXD%2FH1CK23CdHtFDtfiDkMrBB0QQDLuDMV4r4z5H%2B8iHpQU%2BuoBxZ%2BwPHnkqCmgug5%2FJK7B5Bt3prn7F7Acoo5xcgBNlA80gTfmO2153vA9RXNGAWzXyCjXkHckuwc%2FCr7dD5yHe6qwAvcqnU0hPXVNMBq2JkQNmep4%2BQ0mC%2FI6RvGKlY2zHu66L%2BDmXfhF24OppmhXaFbQ5zmvBoVx29qZ4lkBQxYC9ekBgi2SVBFsQciPZqwRgmO7ZRvenZMhPSzuARanguuYh3Jma7VN1DEXWTDL5JvDBjqkATQXRMwulbwrxz5bzyFU8z5IgHRUBl6w6iQdt3ovbEt7QLKrjSZb9LZ6A9%2BjH%2F8S2jlyOqCiaszYvy42LQcrpSsV1K5llIAR3Nh0qaoY1swDj3HvzJSQygXdvlpEyp%2Bzjzs%2BygrkoxeX8ACMadYgvJZvCXDtjE2Gic8KVTMYXnqP18kaEv%2B1yb9bK2irklefHiNbgOXCZ5HeOvFKWjtOSfsxnvJI&X-Amz-Signature=61c2e19047528900982bed9d33cf844a9b3c5f908f7694eecb1bd2a6656e41cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUBUUYFR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDAENlxySAO2xFYWeqUIihC0r2mMqS9p%2B3fDJ7DokTKQQIhAPeGUn0IX9EY6nkTI172kNrNekXkBIXO7R6IMexJ0Sp1Kv8DCB4QABoMNjM3NDIzMTgzODA1Igw3uCSWwHh8YVg2%2FzQq3AN1Ei0hpsvXwTxnr1ONAC1A9PKbBr98lumWEMhk60uqbDKjLwfXhU8MxOIb3q8UPMrFdOREYuP%2B1m%2B9j3jlQFu3Pj6v5i7%2BegbVGXpBvE5yuQPhZM4vHviSZxsM1U8yrIJK%2BMPkXeZoqOAxNOIg1i1F6J6Cp9EJkNpBua4%2Fch6X12RMuOzyeGKEfHGXtEn8L4Ph9d6qpjqR0oyZCRVLyLjLpBEqNyulQI4kA5955aZkH%2FxEn5HYMpWYdarxlrcLXrh2z1jc3odq9t3rGVmjzXthL8RVOCDxZattmwn7Nqe6EEqJhzKOMU2AVViLHDrFIXEYzSGv7fCwFkn%2Fs%2BfvgqvI9l8A9PFHp4S3znXD%2FH1CK23CdHtFDtfiDkMrBB0QQDLuDMV4r4z5H%2B8iHpQU%2BuoBxZ%2BwPHnkqCmgug5%2FJK7B5Bt3prn7F7Acoo5xcgBNlA80gTfmO2153vA9RXNGAWzXyCjXkHckuwc%2FCr7dD5yHe6qwAvcqnU0hPXVNMBq2JkQNmep4%2BQ0mC%2FI6RvGKlY2zHu66L%2BDmXfhF24OppmhXaFbQ5zmvBoVx29qZ4lkBQxYC9ekBgi2SVBFsQciPZqwRgmO7ZRvenZMhPSzuARanguuYh3Jma7VN1DEXWTDL5JvDBjqkATQXRMwulbwrxz5bzyFU8z5IgHRUBl6w6iQdt3ovbEt7QLKrjSZb9LZ6A9%2BjH%2F8S2jlyOqCiaszYvy42LQcrpSsV1K5llIAR3Nh0qaoY1swDj3HvzJSQygXdvlpEyp%2Bzjzs%2BygrkoxeX8ACMadYgvJZvCXDtjE2Gic8KVTMYXnqP18kaEv%2B1yb9bK2irklefHiNbgOXCZ5HeOvFKWjtOSfsxnvJI&X-Amz-Signature=6626f1a393c5707614d8e5de37c7c54ed3343b6b57f9748040c1a324c8f6c0dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUBUUYFR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDAENlxySAO2xFYWeqUIihC0r2mMqS9p%2B3fDJ7DokTKQQIhAPeGUn0IX9EY6nkTI172kNrNekXkBIXO7R6IMexJ0Sp1Kv8DCB4QABoMNjM3NDIzMTgzODA1Igw3uCSWwHh8YVg2%2FzQq3AN1Ei0hpsvXwTxnr1ONAC1A9PKbBr98lumWEMhk60uqbDKjLwfXhU8MxOIb3q8UPMrFdOREYuP%2B1m%2B9j3jlQFu3Pj6v5i7%2BegbVGXpBvE5yuQPhZM4vHviSZxsM1U8yrIJK%2BMPkXeZoqOAxNOIg1i1F6J6Cp9EJkNpBua4%2Fch6X12RMuOzyeGKEfHGXtEn8L4Ph9d6qpjqR0oyZCRVLyLjLpBEqNyulQI4kA5955aZkH%2FxEn5HYMpWYdarxlrcLXrh2z1jc3odq9t3rGVmjzXthL8RVOCDxZattmwn7Nqe6EEqJhzKOMU2AVViLHDrFIXEYzSGv7fCwFkn%2Fs%2BfvgqvI9l8A9PFHp4S3znXD%2FH1CK23CdHtFDtfiDkMrBB0QQDLuDMV4r4z5H%2B8iHpQU%2BuoBxZ%2BwPHnkqCmgug5%2FJK7B5Bt3prn7F7Acoo5xcgBNlA80gTfmO2153vA9RXNGAWzXyCjXkHckuwc%2FCr7dD5yHe6qwAvcqnU0hPXVNMBq2JkQNmep4%2BQ0mC%2FI6RvGKlY2zHu66L%2BDmXfhF24OppmhXaFbQ5zmvBoVx29qZ4lkBQxYC9ekBgi2SVBFsQciPZqwRgmO7ZRvenZMhPSzuARanguuYh3Jma7VN1DEXWTDL5JvDBjqkATQXRMwulbwrxz5bzyFU8z5IgHRUBl6w6iQdt3ovbEt7QLKrjSZb9LZ6A9%2BjH%2F8S2jlyOqCiaszYvy42LQcrpSsV1K5llIAR3Nh0qaoY1swDj3HvzJSQygXdvlpEyp%2Bzjzs%2BygrkoxeX8ACMadYgvJZvCXDtjE2Gic8KVTMYXnqP18kaEv%2B1yb9bK2irklefHiNbgOXCZ5HeOvFKWjtOSfsxnvJI&X-Amz-Signature=1876cf89e50b14cd2186f58e15aacc04961b8ab2a291e7ea102fe39306a371cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
