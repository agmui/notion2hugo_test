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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NBGIWB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDH5uM%2Bydh96H0mTx6HvjLy3dgJe%2FEpSlPkjj5D63GRAiASg9GX9nE44iMjN6F2CGa51uY8BLwTG4cXDtgPuVCIfSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRv8LO%2FdDyRfIsKcuKtwD3reSH4clecWlmSGw96azTYw7q06M6LtjtR60gA8uoYAICWVXDz67Stu%2B42m26JM7efDLhvHOPkwzcj%2FrNS3aibgqfY9gmssQ6kkTibGYdBp9PqjKejc5j%2FVS0QYQyf37%2BE9%2B5jTD9oroXZfrY4zcv3AKtSDzZRsLNnUSxoYSIWz3kKjDpvOLvZUCp4DzaRFTTMxyXsdWfBwS1NsIelOdn4VnIDoKy7Ss6b2l4KQD45GTORDTpHMJB6lPHd2%2FZCRFL9gW7OfFzNXGeWzdBpKv7vi%2F9bNA92f5kc8SfvDtnMrCmlD19n%2FSBI2ejazaC8ZMyNhczIVwUMZt%2FW7MRaR0%2FKJbr4Zm8uXUm0QCl9LkVIeBz3bvfvgpYSD5zc536imV%2F3ZGIE3ckW6lA5KOJFbZ7ZwWWfcjIMWdKvtqpT%2BUUMyY2rYMvVBFdV%2FeF%2B2H6wZW%2FUNa44pAJaTybqY4OTv3iN8hy7ryw5ZSDK%2BYyLgAekqw%2FjUc65ApJXWRYRgd0t9nF9qQ3ICYmwL3pCN37TUdvlGRHsTYQ8hyg07vKHvZt9jaDWsFm2M5%2FzLu%2FeOsVK%2FT1MQm7tMEToRQEu6Vb8IHllfBApp9r%2FSOcEZMWO%2Bbi8qnSny1hd2OtNzrMoUw04mqwAY6pgGFrhgvYd6Gv3nGjtXIgVe2EyH1A0WFNHdnOVWjC%2BTe7fd2312%2Fdfd2frmO1MULor2z6x8rR9MuJleJOt6ukvWKNpeUGKFeNa5QqOEFdrK%2FJW7AfRsA55XUwdhFpTIfHoHi6vbkJOMdDf0TUlh0TACdeQe3DrMSPRAmt%2FTRyefspV4TN8i0%2Fwl%2FYPWfXNQDI%2FfvvIuzTXnSyXLvFz9clvvhrVfdppFu&X-Amz-Signature=38fa1ba93c04d07e93a1eaee03ee0e99f509cfbef802224d6ec99f6fe4108ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NBGIWB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDH5uM%2Bydh96H0mTx6HvjLy3dgJe%2FEpSlPkjj5D63GRAiASg9GX9nE44iMjN6F2CGa51uY8BLwTG4cXDtgPuVCIfSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRv8LO%2FdDyRfIsKcuKtwD3reSH4clecWlmSGw96azTYw7q06M6LtjtR60gA8uoYAICWVXDz67Stu%2B42m26JM7efDLhvHOPkwzcj%2FrNS3aibgqfY9gmssQ6kkTibGYdBp9PqjKejc5j%2FVS0QYQyf37%2BE9%2B5jTD9oroXZfrY4zcv3AKtSDzZRsLNnUSxoYSIWz3kKjDpvOLvZUCp4DzaRFTTMxyXsdWfBwS1NsIelOdn4VnIDoKy7Ss6b2l4KQD45GTORDTpHMJB6lPHd2%2FZCRFL9gW7OfFzNXGeWzdBpKv7vi%2F9bNA92f5kc8SfvDtnMrCmlD19n%2FSBI2ejazaC8ZMyNhczIVwUMZt%2FW7MRaR0%2FKJbr4Zm8uXUm0QCl9LkVIeBz3bvfvgpYSD5zc536imV%2F3ZGIE3ckW6lA5KOJFbZ7ZwWWfcjIMWdKvtqpT%2BUUMyY2rYMvVBFdV%2FeF%2B2H6wZW%2FUNa44pAJaTybqY4OTv3iN8hy7ryw5ZSDK%2BYyLgAekqw%2FjUc65ApJXWRYRgd0t9nF9qQ3ICYmwL3pCN37TUdvlGRHsTYQ8hyg07vKHvZt9jaDWsFm2M5%2FzLu%2FeOsVK%2FT1MQm7tMEToRQEu6Vb8IHllfBApp9r%2FSOcEZMWO%2Bbi8qnSny1hd2OtNzrMoUw04mqwAY6pgGFrhgvYd6Gv3nGjtXIgVe2EyH1A0WFNHdnOVWjC%2BTe7fd2312%2Fdfd2frmO1MULor2z6x8rR9MuJleJOt6ukvWKNpeUGKFeNa5QqOEFdrK%2FJW7AfRsA55XUwdhFpTIfHoHi6vbkJOMdDf0TUlh0TACdeQe3DrMSPRAmt%2FTRyefspV4TN8i0%2Fwl%2FYPWfXNQDI%2FfvvIuzTXnSyXLvFz9clvvhrVfdppFu&X-Amz-Signature=616ddc852ade6eae4ceeea7d06ac3373e4cde46085b74f7779496456e23d6a76&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NBGIWB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDH5uM%2Bydh96H0mTx6HvjLy3dgJe%2FEpSlPkjj5D63GRAiASg9GX9nE44iMjN6F2CGa51uY8BLwTG4cXDtgPuVCIfSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRv8LO%2FdDyRfIsKcuKtwD3reSH4clecWlmSGw96azTYw7q06M6LtjtR60gA8uoYAICWVXDz67Stu%2B42m26JM7efDLhvHOPkwzcj%2FrNS3aibgqfY9gmssQ6kkTibGYdBp9PqjKejc5j%2FVS0QYQyf37%2BE9%2B5jTD9oroXZfrY4zcv3AKtSDzZRsLNnUSxoYSIWz3kKjDpvOLvZUCp4DzaRFTTMxyXsdWfBwS1NsIelOdn4VnIDoKy7Ss6b2l4KQD45GTORDTpHMJB6lPHd2%2FZCRFL9gW7OfFzNXGeWzdBpKv7vi%2F9bNA92f5kc8SfvDtnMrCmlD19n%2FSBI2ejazaC8ZMyNhczIVwUMZt%2FW7MRaR0%2FKJbr4Zm8uXUm0QCl9LkVIeBz3bvfvgpYSD5zc536imV%2F3ZGIE3ckW6lA5KOJFbZ7ZwWWfcjIMWdKvtqpT%2BUUMyY2rYMvVBFdV%2FeF%2B2H6wZW%2FUNa44pAJaTybqY4OTv3iN8hy7ryw5ZSDK%2BYyLgAekqw%2FjUc65ApJXWRYRgd0t9nF9qQ3ICYmwL3pCN37TUdvlGRHsTYQ8hyg07vKHvZt9jaDWsFm2M5%2FzLu%2FeOsVK%2FT1MQm7tMEToRQEu6Vb8IHllfBApp9r%2FSOcEZMWO%2Bbi8qnSny1hd2OtNzrMoUw04mqwAY6pgGFrhgvYd6Gv3nGjtXIgVe2EyH1A0WFNHdnOVWjC%2BTe7fd2312%2Fdfd2frmO1MULor2z6x8rR9MuJleJOt6ukvWKNpeUGKFeNa5QqOEFdrK%2FJW7AfRsA55XUwdhFpTIfHoHi6vbkJOMdDf0TUlh0TACdeQe3DrMSPRAmt%2FTRyefspV4TN8i0%2Fwl%2FYPWfXNQDI%2FfvvIuzTXnSyXLvFz9clvvhrVfdppFu&X-Amz-Signature=5b775c2581d6d44afa59b58be2fe2b7159ba2251e0ddf0a42d5b9a57db520b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NBGIWB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDH5uM%2Bydh96H0mTx6HvjLy3dgJe%2FEpSlPkjj5D63GRAiASg9GX9nE44iMjN6F2CGa51uY8BLwTG4cXDtgPuVCIfSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRv8LO%2FdDyRfIsKcuKtwD3reSH4clecWlmSGw96azTYw7q06M6LtjtR60gA8uoYAICWVXDz67Stu%2B42m26JM7efDLhvHOPkwzcj%2FrNS3aibgqfY9gmssQ6kkTibGYdBp9PqjKejc5j%2FVS0QYQyf37%2BE9%2B5jTD9oroXZfrY4zcv3AKtSDzZRsLNnUSxoYSIWz3kKjDpvOLvZUCp4DzaRFTTMxyXsdWfBwS1NsIelOdn4VnIDoKy7Ss6b2l4KQD45GTORDTpHMJB6lPHd2%2FZCRFL9gW7OfFzNXGeWzdBpKv7vi%2F9bNA92f5kc8SfvDtnMrCmlD19n%2FSBI2ejazaC8ZMyNhczIVwUMZt%2FW7MRaR0%2FKJbr4Zm8uXUm0QCl9LkVIeBz3bvfvgpYSD5zc536imV%2F3ZGIE3ckW6lA5KOJFbZ7ZwWWfcjIMWdKvtqpT%2BUUMyY2rYMvVBFdV%2FeF%2B2H6wZW%2FUNa44pAJaTybqY4OTv3iN8hy7ryw5ZSDK%2BYyLgAekqw%2FjUc65ApJXWRYRgd0t9nF9qQ3ICYmwL3pCN37TUdvlGRHsTYQ8hyg07vKHvZt9jaDWsFm2M5%2FzLu%2FeOsVK%2FT1MQm7tMEToRQEu6Vb8IHllfBApp9r%2FSOcEZMWO%2Bbi8qnSny1hd2OtNzrMoUw04mqwAY6pgGFrhgvYd6Gv3nGjtXIgVe2EyH1A0WFNHdnOVWjC%2BTe7fd2312%2Fdfd2frmO1MULor2z6x8rR9MuJleJOt6ukvWKNpeUGKFeNa5QqOEFdrK%2FJW7AfRsA55XUwdhFpTIfHoHi6vbkJOMdDf0TUlh0TACdeQe3DrMSPRAmt%2FTRyefspV4TN8i0%2Fwl%2FYPWfXNQDI%2FfvvIuzTXnSyXLvFz9clvvhrVfdppFu&X-Amz-Signature=bedfafe754cc10427f8b01aa01f0cc7d9741a23b7aece5393db241704fb793e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NBGIWB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDH5uM%2Bydh96H0mTx6HvjLy3dgJe%2FEpSlPkjj5D63GRAiASg9GX9nE44iMjN6F2CGa51uY8BLwTG4cXDtgPuVCIfSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRv8LO%2FdDyRfIsKcuKtwD3reSH4clecWlmSGw96azTYw7q06M6LtjtR60gA8uoYAICWVXDz67Stu%2B42m26JM7efDLhvHOPkwzcj%2FrNS3aibgqfY9gmssQ6kkTibGYdBp9PqjKejc5j%2FVS0QYQyf37%2BE9%2B5jTD9oroXZfrY4zcv3AKtSDzZRsLNnUSxoYSIWz3kKjDpvOLvZUCp4DzaRFTTMxyXsdWfBwS1NsIelOdn4VnIDoKy7Ss6b2l4KQD45GTORDTpHMJB6lPHd2%2FZCRFL9gW7OfFzNXGeWzdBpKv7vi%2F9bNA92f5kc8SfvDtnMrCmlD19n%2FSBI2ejazaC8ZMyNhczIVwUMZt%2FW7MRaR0%2FKJbr4Zm8uXUm0QCl9LkVIeBz3bvfvgpYSD5zc536imV%2F3ZGIE3ckW6lA5KOJFbZ7ZwWWfcjIMWdKvtqpT%2BUUMyY2rYMvVBFdV%2FeF%2B2H6wZW%2FUNa44pAJaTybqY4OTv3iN8hy7ryw5ZSDK%2BYyLgAekqw%2FjUc65ApJXWRYRgd0t9nF9qQ3ICYmwL3pCN37TUdvlGRHsTYQ8hyg07vKHvZt9jaDWsFm2M5%2FzLu%2FeOsVK%2FT1MQm7tMEToRQEu6Vb8IHllfBApp9r%2FSOcEZMWO%2Bbi8qnSny1hd2OtNzrMoUw04mqwAY6pgGFrhgvYd6Gv3nGjtXIgVe2EyH1A0WFNHdnOVWjC%2BTe7fd2312%2Fdfd2frmO1MULor2z6x8rR9MuJleJOt6ukvWKNpeUGKFeNa5QqOEFdrK%2FJW7AfRsA55XUwdhFpTIfHoHi6vbkJOMdDf0TUlh0TACdeQe3DrMSPRAmt%2FTRyefspV4TN8i0%2Fwl%2FYPWfXNQDI%2FfvvIuzTXnSyXLvFz9clvvhrVfdppFu&X-Amz-Signature=ede5009da8605fc373d09d466857217c9377769c121bae2140d154e041f390f9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NBGIWB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDH5uM%2Bydh96H0mTx6HvjLy3dgJe%2FEpSlPkjj5D63GRAiASg9GX9nE44iMjN6F2CGa51uY8BLwTG4cXDtgPuVCIfSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRv8LO%2FdDyRfIsKcuKtwD3reSH4clecWlmSGw96azTYw7q06M6LtjtR60gA8uoYAICWVXDz67Stu%2B42m26JM7efDLhvHOPkwzcj%2FrNS3aibgqfY9gmssQ6kkTibGYdBp9PqjKejc5j%2FVS0QYQyf37%2BE9%2B5jTD9oroXZfrY4zcv3AKtSDzZRsLNnUSxoYSIWz3kKjDpvOLvZUCp4DzaRFTTMxyXsdWfBwS1NsIelOdn4VnIDoKy7Ss6b2l4KQD45GTORDTpHMJB6lPHd2%2FZCRFL9gW7OfFzNXGeWzdBpKv7vi%2F9bNA92f5kc8SfvDtnMrCmlD19n%2FSBI2ejazaC8ZMyNhczIVwUMZt%2FW7MRaR0%2FKJbr4Zm8uXUm0QCl9LkVIeBz3bvfvgpYSD5zc536imV%2F3ZGIE3ckW6lA5KOJFbZ7ZwWWfcjIMWdKvtqpT%2BUUMyY2rYMvVBFdV%2FeF%2B2H6wZW%2FUNa44pAJaTybqY4OTv3iN8hy7ryw5ZSDK%2BYyLgAekqw%2FjUc65ApJXWRYRgd0t9nF9qQ3ICYmwL3pCN37TUdvlGRHsTYQ8hyg07vKHvZt9jaDWsFm2M5%2FzLu%2FeOsVK%2FT1MQm7tMEToRQEu6Vb8IHllfBApp9r%2FSOcEZMWO%2Bbi8qnSny1hd2OtNzrMoUw04mqwAY6pgGFrhgvYd6Gv3nGjtXIgVe2EyH1A0WFNHdnOVWjC%2BTe7fd2312%2Fdfd2frmO1MULor2z6x8rR9MuJleJOt6ukvWKNpeUGKFeNa5QqOEFdrK%2FJW7AfRsA55XUwdhFpTIfHoHi6vbkJOMdDf0TUlh0TACdeQe3DrMSPRAmt%2FTRyefspV4TN8i0%2Fwl%2FYPWfXNQDI%2FfvvIuzTXnSyXLvFz9clvvhrVfdppFu&X-Amz-Signature=f18e63669c851b312f208c2fd8ee17f6c32760d072703a3947c24614b53859d8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NBGIWB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDH5uM%2Bydh96H0mTx6HvjLy3dgJe%2FEpSlPkjj5D63GRAiASg9GX9nE44iMjN6F2CGa51uY8BLwTG4cXDtgPuVCIfSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMRv8LO%2FdDyRfIsKcuKtwD3reSH4clecWlmSGw96azTYw7q06M6LtjtR60gA8uoYAICWVXDz67Stu%2B42m26JM7efDLhvHOPkwzcj%2FrNS3aibgqfY9gmssQ6kkTibGYdBp9PqjKejc5j%2FVS0QYQyf37%2BE9%2B5jTD9oroXZfrY4zcv3AKtSDzZRsLNnUSxoYSIWz3kKjDpvOLvZUCp4DzaRFTTMxyXsdWfBwS1NsIelOdn4VnIDoKy7Ss6b2l4KQD45GTORDTpHMJB6lPHd2%2FZCRFL9gW7OfFzNXGeWzdBpKv7vi%2F9bNA92f5kc8SfvDtnMrCmlD19n%2FSBI2ejazaC8ZMyNhczIVwUMZt%2FW7MRaR0%2FKJbr4Zm8uXUm0QCl9LkVIeBz3bvfvgpYSD5zc536imV%2F3ZGIE3ckW6lA5KOJFbZ7ZwWWfcjIMWdKvtqpT%2BUUMyY2rYMvVBFdV%2FeF%2B2H6wZW%2FUNa44pAJaTybqY4OTv3iN8hy7ryw5ZSDK%2BYyLgAekqw%2FjUc65ApJXWRYRgd0t9nF9qQ3ICYmwL3pCN37TUdvlGRHsTYQ8hyg07vKHvZt9jaDWsFm2M5%2FzLu%2FeOsVK%2FT1MQm7tMEToRQEu6Vb8IHllfBApp9r%2FSOcEZMWO%2Bbi8qnSny1hd2OtNzrMoUw04mqwAY6pgGFrhgvYd6Gv3nGjtXIgVe2EyH1A0WFNHdnOVWjC%2BTe7fd2312%2Fdfd2frmO1MULor2z6x8rR9MuJleJOt6ukvWKNpeUGKFeNa5QqOEFdrK%2FJW7AfRsA55XUwdhFpTIfHoHi6vbkJOMdDf0TUlh0TACdeQe3DrMSPRAmt%2FTRyefspV4TN8i0%2Fwl%2FYPWfXNQDI%2FfvvIuzTXnSyXLvFz9clvvhrVfdppFu&X-Amz-Signature=a35860609d44342bbdc7856d96aa4b1199638f659648fddba72d58d49853e902&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
