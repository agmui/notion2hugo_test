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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4PFB456%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8HUs240MYrV2dpl%2Bfqzx7980kk6T8xqVCq2Y%2Fc%2Fr19AiBDevCkaP%2Bfjy4rtGXSFeodDaNWlMxq4XMRHu8DUAiZMCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACVO6Jt7TdwWe59JKtwDU6WRysOs7XYKgm%2BfA%2BOO%2F4bIEsp%2Fiv7eiy1yZgSl0HwWXlUpECcJXmw4bLD%2F5ACMBX1RrK0jtJ38Bz1vM4rtEq%2BoyRHiCeE11OXELzFYZRetm6vAy7klji5v1XWHVG7BqyDqfkdun11Rf%2BB4nLnxYdmP5iGYC%2FQ8wNCic75oVSWZLYce3dTedNkHZ%2BbnYv%2BgCX%2BnWBKvRr37UBSD34jTI1WeDoJ91%2B6wj0Hqle1zMWhGFU39NofmnSIqLOyP2V2Eusq1KpEyOysQKtq1%2F0kf0GUxnvSImNSJMecAsCtDtgCO4lu3zOi4h6G1xXoqJ8JT5yBPFPYg1M%2Bf5GC6NttNpNiM9A42q5GL7jdcSknSG%2BkiaUrVZoqj9N3%2FZd7cQRUA9YYbuXoPxsh6Ox5EfY9DaIuSn%2F4w6pbDrXnN5pOThRn7UToBxwQBUZMZNBmq2tx4vWPUT%2BwZYWgqiMvsbwA2dz0qU4A12x3a69c91QZkFfmhtlau46j1Fdh3Ac%2BjAGY4O4Co3GRr7pZCuIf5H6EsqbrKSWk8sz6z0fVcVEaPoDUCbzwiKILTRiNu7fhnj8cVbu1P3HaVqTPb%2BozFckbssAlWTptXFwzfE32vFXmZGRkptqmgNApJ%2BIMQcxMwm5qsxAY6pgHQrwCL5bjuQDWon%2Fu523A8an43yzFyLL6CBFzqqE05mxeYagsgLbXRJMLQ%2BLacalJEaVu9MKvjGEePGVy6GkKmSPwAUa%2BekyWZM5XvorQjjhoE6IKrAPxKKYgkaLQrTpxgGV1ejK07P5xXjmAJg50A7pj1fEE3W6nwyOUFVtpM1mAafbOpd8PaBRnVvYttBDQnrDSiEolqAjtDP0IgegjYhddDpao5&X-Amz-Signature=c2205b7727898327a818a05865be51c8946c5a37350fee3b7de3233ddb56d86d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4PFB456%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8HUs240MYrV2dpl%2Bfqzx7980kk6T8xqVCq2Y%2Fc%2Fr19AiBDevCkaP%2Bfjy4rtGXSFeodDaNWlMxq4XMRHu8DUAiZMCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACVO6Jt7TdwWe59JKtwDU6WRysOs7XYKgm%2BfA%2BOO%2F4bIEsp%2Fiv7eiy1yZgSl0HwWXlUpECcJXmw4bLD%2F5ACMBX1RrK0jtJ38Bz1vM4rtEq%2BoyRHiCeE11OXELzFYZRetm6vAy7klji5v1XWHVG7BqyDqfkdun11Rf%2BB4nLnxYdmP5iGYC%2FQ8wNCic75oVSWZLYce3dTedNkHZ%2BbnYv%2BgCX%2BnWBKvRr37UBSD34jTI1WeDoJ91%2B6wj0Hqle1zMWhGFU39NofmnSIqLOyP2V2Eusq1KpEyOysQKtq1%2F0kf0GUxnvSImNSJMecAsCtDtgCO4lu3zOi4h6G1xXoqJ8JT5yBPFPYg1M%2Bf5GC6NttNpNiM9A42q5GL7jdcSknSG%2BkiaUrVZoqj9N3%2FZd7cQRUA9YYbuXoPxsh6Ox5EfY9DaIuSn%2F4w6pbDrXnN5pOThRn7UToBxwQBUZMZNBmq2tx4vWPUT%2BwZYWgqiMvsbwA2dz0qU4A12x3a69c91QZkFfmhtlau46j1Fdh3Ac%2BjAGY4O4Co3GRr7pZCuIf5H6EsqbrKSWk8sz6z0fVcVEaPoDUCbzwiKILTRiNu7fhnj8cVbu1P3HaVqTPb%2BozFckbssAlWTptXFwzfE32vFXmZGRkptqmgNApJ%2BIMQcxMwm5qsxAY6pgHQrwCL5bjuQDWon%2Fu523A8an43yzFyLL6CBFzqqE05mxeYagsgLbXRJMLQ%2BLacalJEaVu9MKvjGEePGVy6GkKmSPwAUa%2BekyWZM5XvorQjjhoE6IKrAPxKKYgkaLQrTpxgGV1ejK07P5xXjmAJg50A7pj1fEE3W6nwyOUFVtpM1mAafbOpd8PaBRnVvYttBDQnrDSiEolqAjtDP0IgegjYhddDpao5&X-Amz-Signature=6f4f68067b13fd271a1cfc610049fec1061b90100e1b30470576f37606ab0dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4PFB456%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8HUs240MYrV2dpl%2Bfqzx7980kk6T8xqVCq2Y%2Fc%2Fr19AiBDevCkaP%2Bfjy4rtGXSFeodDaNWlMxq4XMRHu8DUAiZMCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACVO6Jt7TdwWe59JKtwDU6WRysOs7XYKgm%2BfA%2BOO%2F4bIEsp%2Fiv7eiy1yZgSl0HwWXlUpECcJXmw4bLD%2F5ACMBX1RrK0jtJ38Bz1vM4rtEq%2BoyRHiCeE11OXELzFYZRetm6vAy7klji5v1XWHVG7BqyDqfkdun11Rf%2BB4nLnxYdmP5iGYC%2FQ8wNCic75oVSWZLYce3dTedNkHZ%2BbnYv%2BgCX%2BnWBKvRr37UBSD34jTI1WeDoJ91%2B6wj0Hqle1zMWhGFU39NofmnSIqLOyP2V2Eusq1KpEyOysQKtq1%2F0kf0GUxnvSImNSJMecAsCtDtgCO4lu3zOi4h6G1xXoqJ8JT5yBPFPYg1M%2Bf5GC6NttNpNiM9A42q5GL7jdcSknSG%2BkiaUrVZoqj9N3%2FZd7cQRUA9YYbuXoPxsh6Ox5EfY9DaIuSn%2F4w6pbDrXnN5pOThRn7UToBxwQBUZMZNBmq2tx4vWPUT%2BwZYWgqiMvsbwA2dz0qU4A12x3a69c91QZkFfmhtlau46j1Fdh3Ac%2BjAGY4O4Co3GRr7pZCuIf5H6EsqbrKSWk8sz6z0fVcVEaPoDUCbzwiKILTRiNu7fhnj8cVbu1P3HaVqTPb%2BozFckbssAlWTptXFwzfE32vFXmZGRkptqmgNApJ%2BIMQcxMwm5qsxAY6pgHQrwCL5bjuQDWon%2Fu523A8an43yzFyLL6CBFzqqE05mxeYagsgLbXRJMLQ%2BLacalJEaVu9MKvjGEePGVy6GkKmSPwAUa%2BekyWZM5XvorQjjhoE6IKrAPxKKYgkaLQrTpxgGV1ejK07P5xXjmAJg50A7pj1fEE3W6nwyOUFVtpM1mAafbOpd8PaBRnVvYttBDQnrDSiEolqAjtDP0IgegjYhddDpao5&X-Amz-Signature=d56d6d2ea5bc5f8a981b383ad91bfc793d9b61e1de23aeeb4afda2b889b5bee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4PFB456%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8HUs240MYrV2dpl%2Bfqzx7980kk6T8xqVCq2Y%2Fc%2Fr19AiBDevCkaP%2Bfjy4rtGXSFeodDaNWlMxq4XMRHu8DUAiZMCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACVO6Jt7TdwWe59JKtwDU6WRysOs7XYKgm%2BfA%2BOO%2F4bIEsp%2Fiv7eiy1yZgSl0HwWXlUpECcJXmw4bLD%2F5ACMBX1RrK0jtJ38Bz1vM4rtEq%2BoyRHiCeE11OXELzFYZRetm6vAy7klji5v1XWHVG7BqyDqfkdun11Rf%2BB4nLnxYdmP5iGYC%2FQ8wNCic75oVSWZLYce3dTedNkHZ%2BbnYv%2BgCX%2BnWBKvRr37UBSD34jTI1WeDoJ91%2B6wj0Hqle1zMWhGFU39NofmnSIqLOyP2V2Eusq1KpEyOysQKtq1%2F0kf0GUxnvSImNSJMecAsCtDtgCO4lu3zOi4h6G1xXoqJ8JT5yBPFPYg1M%2Bf5GC6NttNpNiM9A42q5GL7jdcSknSG%2BkiaUrVZoqj9N3%2FZd7cQRUA9YYbuXoPxsh6Ox5EfY9DaIuSn%2F4w6pbDrXnN5pOThRn7UToBxwQBUZMZNBmq2tx4vWPUT%2BwZYWgqiMvsbwA2dz0qU4A12x3a69c91QZkFfmhtlau46j1Fdh3Ac%2BjAGY4O4Co3GRr7pZCuIf5H6EsqbrKSWk8sz6z0fVcVEaPoDUCbzwiKILTRiNu7fhnj8cVbu1P3HaVqTPb%2BozFckbssAlWTptXFwzfE32vFXmZGRkptqmgNApJ%2BIMQcxMwm5qsxAY6pgHQrwCL5bjuQDWon%2Fu523A8an43yzFyLL6CBFzqqE05mxeYagsgLbXRJMLQ%2BLacalJEaVu9MKvjGEePGVy6GkKmSPwAUa%2BekyWZM5XvorQjjhoE6IKrAPxKKYgkaLQrTpxgGV1ejK07P5xXjmAJg50A7pj1fEE3W6nwyOUFVtpM1mAafbOpd8PaBRnVvYttBDQnrDSiEolqAjtDP0IgegjYhddDpao5&X-Amz-Signature=f2aa0aa47fb23b9fb96d0dec17c9899e340fd76ba4b9642ac32e97175d57d7ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4PFB456%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8HUs240MYrV2dpl%2Bfqzx7980kk6T8xqVCq2Y%2Fc%2Fr19AiBDevCkaP%2Bfjy4rtGXSFeodDaNWlMxq4XMRHu8DUAiZMCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACVO6Jt7TdwWe59JKtwDU6WRysOs7XYKgm%2BfA%2BOO%2F4bIEsp%2Fiv7eiy1yZgSl0HwWXlUpECcJXmw4bLD%2F5ACMBX1RrK0jtJ38Bz1vM4rtEq%2BoyRHiCeE11OXELzFYZRetm6vAy7klji5v1XWHVG7BqyDqfkdun11Rf%2BB4nLnxYdmP5iGYC%2FQ8wNCic75oVSWZLYce3dTedNkHZ%2BbnYv%2BgCX%2BnWBKvRr37UBSD34jTI1WeDoJ91%2B6wj0Hqle1zMWhGFU39NofmnSIqLOyP2V2Eusq1KpEyOysQKtq1%2F0kf0GUxnvSImNSJMecAsCtDtgCO4lu3zOi4h6G1xXoqJ8JT5yBPFPYg1M%2Bf5GC6NttNpNiM9A42q5GL7jdcSknSG%2BkiaUrVZoqj9N3%2FZd7cQRUA9YYbuXoPxsh6Ox5EfY9DaIuSn%2F4w6pbDrXnN5pOThRn7UToBxwQBUZMZNBmq2tx4vWPUT%2BwZYWgqiMvsbwA2dz0qU4A12x3a69c91QZkFfmhtlau46j1Fdh3Ac%2BjAGY4O4Co3GRr7pZCuIf5H6EsqbrKSWk8sz6z0fVcVEaPoDUCbzwiKILTRiNu7fhnj8cVbu1P3HaVqTPb%2BozFckbssAlWTptXFwzfE32vFXmZGRkptqmgNApJ%2BIMQcxMwm5qsxAY6pgHQrwCL5bjuQDWon%2Fu523A8an43yzFyLL6CBFzqqE05mxeYagsgLbXRJMLQ%2BLacalJEaVu9MKvjGEePGVy6GkKmSPwAUa%2BekyWZM5XvorQjjhoE6IKrAPxKKYgkaLQrTpxgGV1ejK07P5xXjmAJg50A7pj1fEE3W6nwyOUFVtpM1mAafbOpd8PaBRnVvYttBDQnrDSiEolqAjtDP0IgegjYhddDpao5&X-Amz-Signature=2c27d9c3e6e4b4c8643ae013a7bffd27cb436b9c8d9e23a80cd672beeb0dbfdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4PFB456%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8HUs240MYrV2dpl%2Bfqzx7980kk6T8xqVCq2Y%2Fc%2Fr19AiBDevCkaP%2Bfjy4rtGXSFeodDaNWlMxq4XMRHu8DUAiZMCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACVO6Jt7TdwWe59JKtwDU6WRysOs7XYKgm%2BfA%2BOO%2F4bIEsp%2Fiv7eiy1yZgSl0HwWXlUpECcJXmw4bLD%2F5ACMBX1RrK0jtJ38Bz1vM4rtEq%2BoyRHiCeE11OXELzFYZRetm6vAy7klji5v1XWHVG7BqyDqfkdun11Rf%2BB4nLnxYdmP5iGYC%2FQ8wNCic75oVSWZLYce3dTedNkHZ%2BbnYv%2BgCX%2BnWBKvRr37UBSD34jTI1WeDoJ91%2B6wj0Hqle1zMWhGFU39NofmnSIqLOyP2V2Eusq1KpEyOysQKtq1%2F0kf0GUxnvSImNSJMecAsCtDtgCO4lu3zOi4h6G1xXoqJ8JT5yBPFPYg1M%2Bf5GC6NttNpNiM9A42q5GL7jdcSknSG%2BkiaUrVZoqj9N3%2FZd7cQRUA9YYbuXoPxsh6Ox5EfY9DaIuSn%2F4w6pbDrXnN5pOThRn7UToBxwQBUZMZNBmq2tx4vWPUT%2BwZYWgqiMvsbwA2dz0qU4A12x3a69c91QZkFfmhtlau46j1Fdh3Ac%2BjAGY4O4Co3GRr7pZCuIf5H6EsqbrKSWk8sz6z0fVcVEaPoDUCbzwiKILTRiNu7fhnj8cVbu1P3HaVqTPb%2BozFckbssAlWTptXFwzfE32vFXmZGRkptqmgNApJ%2BIMQcxMwm5qsxAY6pgHQrwCL5bjuQDWon%2Fu523A8an43yzFyLL6CBFzqqE05mxeYagsgLbXRJMLQ%2BLacalJEaVu9MKvjGEePGVy6GkKmSPwAUa%2BekyWZM5XvorQjjhoE6IKrAPxKKYgkaLQrTpxgGV1ejK07P5xXjmAJg50A7pj1fEE3W6nwyOUFVtpM1mAafbOpd8PaBRnVvYttBDQnrDSiEolqAjtDP0IgegjYhddDpao5&X-Amz-Signature=c3da1b7754d471622e717055a93a41d96266ec9b3f534cb1ab947a574d5676d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4PFB456%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8HUs240MYrV2dpl%2Bfqzx7980kk6T8xqVCq2Y%2Fc%2Fr19AiBDevCkaP%2Bfjy4rtGXSFeodDaNWlMxq4XMRHu8DUAiZMCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACVO6Jt7TdwWe59JKtwDU6WRysOs7XYKgm%2BfA%2BOO%2F4bIEsp%2Fiv7eiy1yZgSl0HwWXlUpECcJXmw4bLD%2F5ACMBX1RrK0jtJ38Bz1vM4rtEq%2BoyRHiCeE11OXELzFYZRetm6vAy7klji5v1XWHVG7BqyDqfkdun11Rf%2BB4nLnxYdmP5iGYC%2FQ8wNCic75oVSWZLYce3dTedNkHZ%2BbnYv%2BgCX%2BnWBKvRr37UBSD34jTI1WeDoJ91%2B6wj0Hqle1zMWhGFU39NofmnSIqLOyP2V2Eusq1KpEyOysQKtq1%2F0kf0GUxnvSImNSJMecAsCtDtgCO4lu3zOi4h6G1xXoqJ8JT5yBPFPYg1M%2Bf5GC6NttNpNiM9A42q5GL7jdcSknSG%2BkiaUrVZoqj9N3%2FZd7cQRUA9YYbuXoPxsh6Ox5EfY9DaIuSn%2F4w6pbDrXnN5pOThRn7UToBxwQBUZMZNBmq2tx4vWPUT%2BwZYWgqiMvsbwA2dz0qU4A12x3a69c91QZkFfmhtlau46j1Fdh3Ac%2BjAGY4O4Co3GRr7pZCuIf5H6EsqbrKSWk8sz6z0fVcVEaPoDUCbzwiKILTRiNu7fhnj8cVbu1P3HaVqTPb%2BozFckbssAlWTptXFwzfE32vFXmZGRkptqmgNApJ%2BIMQcxMwm5qsxAY6pgHQrwCL5bjuQDWon%2Fu523A8an43yzFyLL6CBFzqqE05mxeYagsgLbXRJMLQ%2BLacalJEaVu9MKvjGEePGVy6GkKmSPwAUa%2BekyWZM5XvorQjjhoE6IKrAPxKKYgkaLQrTpxgGV1ejK07P5xXjmAJg50A7pj1fEE3W6nwyOUFVtpM1mAafbOpd8PaBRnVvYttBDQnrDSiEolqAjtDP0IgegjYhddDpao5&X-Amz-Signature=ff552c1dfc92b43921c5dc3c98f65f8c6766ec8d827f5a01fee325c538b9ac03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
