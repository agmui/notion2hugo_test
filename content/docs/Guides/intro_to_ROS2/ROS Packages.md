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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PVRUIW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1tkJ2OxBDKeZJWip1aK0fYabswVuIZWwnVdd61rYvQIhAOePBwzxTZI46BkwmDN13mCj1oZsVwwe7xYwcZWLjbloKv8DCFgQABoMNjM3NDIzMTgzODA1IgwP5Yg%2BGvl6I0iG2g8q3AOKE4aC43tUp%2FDazXxR39fXQ3v41GeLmPZfKDVfF%2FwkLorG7h45h3jVrmo%2FyHMEpSrnsRoNm1NCKkGbcbdz3BmClKkHWU4TsnHSNvhzPp5%2Bot56il8ikDhpOEtXG%2BsxCadZAywr2Ks1r37DZEt4hkhVJsYkw1r1k0lLLdz1ny4fQJna1OHn%2FeeFQd66g6ERjW0mbgaFqlsbcF7CLt2NzJOVK%2FCN%2FBfPkFyr1SK95jOF4hlHNa6zgDK%2BQ4viuBbobAuLkGySzQ0MyfrCC5oTpH6wkQJkKsEEAsml3h7i8c4jB7lh3Z5BUF1d1rdZyWhARJ8clxpFwTvpzQw8SEJyd9eT1pg5OToWKDmD4nYCM%2F8xIdQuP03X3PN4ZuHK4l5d0g%2B8iy86uBFIu9YNx%2FBW6earlgurk7T2UXwZdlg5pN4%2BauRORHMr2nx39aSpHfIEwC082sho3rCbebdw%2BzM2tc5cRDX4JDFq%2FYhFedQiUY3qJ3t5NvH4pcY0Nj7ZC5V95UY5yjwwUPGKIb%2BY2j3PZOFr%2F%2BYNqht%2FlgNr0Kv9RN7U5Ne6pSNq4ttZK4lxyOGro7nRpuo0dCZeOWix7lp9GjOg7Yv%2Fwf5Zwz19U8C2td7MsKChMEdFAx4jU0T3EjDz4KDBBjqkAaPqfLIKFQwuIrTJXoVr5dYrJ04azL8gLgk7qyD4jPX2lofLhTWkcjqQ6tURG2q%2FLz%2Fw%2FpczB3en5eDvcRUOLCnLaV%2BLCPVzls89ipEj6O255Wnr1%2Biz1HJflcH%2FaLhahbUDkDVMv4zaRcs2jT%2F%2B9bvLNeo7zguXrC00tYNKlD%2FOO%2BTyxxrKIWXQh18boe45K64KynhKmxngzrYR8nU1tY1%2BqeUf&X-Amz-Signature=b5b96c71296229ea10d5d30621309bb6967b927e279459cbbd5c431d439c7ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PVRUIW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1tkJ2OxBDKeZJWip1aK0fYabswVuIZWwnVdd61rYvQIhAOePBwzxTZI46BkwmDN13mCj1oZsVwwe7xYwcZWLjbloKv8DCFgQABoMNjM3NDIzMTgzODA1IgwP5Yg%2BGvl6I0iG2g8q3AOKE4aC43tUp%2FDazXxR39fXQ3v41GeLmPZfKDVfF%2FwkLorG7h45h3jVrmo%2FyHMEpSrnsRoNm1NCKkGbcbdz3BmClKkHWU4TsnHSNvhzPp5%2Bot56il8ikDhpOEtXG%2BsxCadZAywr2Ks1r37DZEt4hkhVJsYkw1r1k0lLLdz1ny4fQJna1OHn%2FeeFQd66g6ERjW0mbgaFqlsbcF7CLt2NzJOVK%2FCN%2FBfPkFyr1SK95jOF4hlHNa6zgDK%2BQ4viuBbobAuLkGySzQ0MyfrCC5oTpH6wkQJkKsEEAsml3h7i8c4jB7lh3Z5BUF1d1rdZyWhARJ8clxpFwTvpzQw8SEJyd9eT1pg5OToWKDmD4nYCM%2F8xIdQuP03X3PN4ZuHK4l5d0g%2B8iy86uBFIu9YNx%2FBW6earlgurk7T2UXwZdlg5pN4%2BauRORHMr2nx39aSpHfIEwC082sho3rCbebdw%2BzM2tc5cRDX4JDFq%2FYhFedQiUY3qJ3t5NvH4pcY0Nj7ZC5V95UY5yjwwUPGKIb%2BY2j3PZOFr%2F%2BYNqht%2FlgNr0Kv9RN7U5Ne6pSNq4ttZK4lxyOGro7nRpuo0dCZeOWix7lp9GjOg7Yv%2Fwf5Zwz19U8C2td7MsKChMEdFAx4jU0T3EjDz4KDBBjqkAaPqfLIKFQwuIrTJXoVr5dYrJ04azL8gLgk7qyD4jPX2lofLhTWkcjqQ6tURG2q%2FLz%2Fw%2FpczB3en5eDvcRUOLCnLaV%2BLCPVzls89ipEj6O255Wnr1%2Biz1HJflcH%2FaLhahbUDkDVMv4zaRcs2jT%2F%2B9bvLNeo7zguXrC00tYNKlD%2FOO%2BTyxxrKIWXQh18boe45K64KynhKmxngzrYR8nU1tY1%2BqeUf&X-Amz-Signature=e8a0420abaec3677f0cd171a7d37359dfd75bbdd9b35a9649b635eba5a9e2d14&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PVRUIW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1tkJ2OxBDKeZJWip1aK0fYabswVuIZWwnVdd61rYvQIhAOePBwzxTZI46BkwmDN13mCj1oZsVwwe7xYwcZWLjbloKv8DCFgQABoMNjM3NDIzMTgzODA1IgwP5Yg%2BGvl6I0iG2g8q3AOKE4aC43tUp%2FDazXxR39fXQ3v41GeLmPZfKDVfF%2FwkLorG7h45h3jVrmo%2FyHMEpSrnsRoNm1NCKkGbcbdz3BmClKkHWU4TsnHSNvhzPp5%2Bot56il8ikDhpOEtXG%2BsxCadZAywr2Ks1r37DZEt4hkhVJsYkw1r1k0lLLdz1ny4fQJna1OHn%2FeeFQd66g6ERjW0mbgaFqlsbcF7CLt2NzJOVK%2FCN%2FBfPkFyr1SK95jOF4hlHNa6zgDK%2BQ4viuBbobAuLkGySzQ0MyfrCC5oTpH6wkQJkKsEEAsml3h7i8c4jB7lh3Z5BUF1d1rdZyWhARJ8clxpFwTvpzQw8SEJyd9eT1pg5OToWKDmD4nYCM%2F8xIdQuP03X3PN4ZuHK4l5d0g%2B8iy86uBFIu9YNx%2FBW6earlgurk7T2UXwZdlg5pN4%2BauRORHMr2nx39aSpHfIEwC082sho3rCbebdw%2BzM2tc5cRDX4JDFq%2FYhFedQiUY3qJ3t5NvH4pcY0Nj7ZC5V95UY5yjwwUPGKIb%2BY2j3PZOFr%2F%2BYNqht%2FlgNr0Kv9RN7U5Ne6pSNq4ttZK4lxyOGro7nRpuo0dCZeOWix7lp9GjOg7Yv%2Fwf5Zwz19U8C2td7MsKChMEdFAx4jU0T3EjDz4KDBBjqkAaPqfLIKFQwuIrTJXoVr5dYrJ04azL8gLgk7qyD4jPX2lofLhTWkcjqQ6tURG2q%2FLz%2Fw%2FpczB3en5eDvcRUOLCnLaV%2BLCPVzls89ipEj6O255Wnr1%2Biz1HJflcH%2FaLhahbUDkDVMv4zaRcs2jT%2F%2B9bvLNeo7zguXrC00tYNKlD%2FOO%2BTyxxrKIWXQh18boe45K64KynhKmxngzrYR8nU1tY1%2BqeUf&X-Amz-Signature=13db9d7aaa6157165141fdc82a1f395ac7f6acf1732b849ae06f91d699c4b6fa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PVRUIW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1tkJ2OxBDKeZJWip1aK0fYabswVuIZWwnVdd61rYvQIhAOePBwzxTZI46BkwmDN13mCj1oZsVwwe7xYwcZWLjbloKv8DCFgQABoMNjM3NDIzMTgzODA1IgwP5Yg%2BGvl6I0iG2g8q3AOKE4aC43tUp%2FDazXxR39fXQ3v41GeLmPZfKDVfF%2FwkLorG7h45h3jVrmo%2FyHMEpSrnsRoNm1NCKkGbcbdz3BmClKkHWU4TsnHSNvhzPp5%2Bot56il8ikDhpOEtXG%2BsxCadZAywr2Ks1r37DZEt4hkhVJsYkw1r1k0lLLdz1ny4fQJna1OHn%2FeeFQd66g6ERjW0mbgaFqlsbcF7CLt2NzJOVK%2FCN%2FBfPkFyr1SK95jOF4hlHNa6zgDK%2BQ4viuBbobAuLkGySzQ0MyfrCC5oTpH6wkQJkKsEEAsml3h7i8c4jB7lh3Z5BUF1d1rdZyWhARJ8clxpFwTvpzQw8SEJyd9eT1pg5OToWKDmD4nYCM%2F8xIdQuP03X3PN4ZuHK4l5d0g%2B8iy86uBFIu9YNx%2FBW6earlgurk7T2UXwZdlg5pN4%2BauRORHMr2nx39aSpHfIEwC082sho3rCbebdw%2BzM2tc5cRDX4JDFq%2FYhFedQiUY3qJ3t5NvH4pcY0Nj7ZC5V95UY5yjwwUPGKIb%2BY2j3PZOFr%2F%2BYNqht%2FlgNr0Kv9RN7U5Ne6pSNq4ttZK4lxyOGro7nRpuo0dCZeOWix7lp9GjOg7Yv%2Fwf5Zwz19U8C2td7MsKChMEdFAx4jU0T3EjDz4KDBBjqkAaPqfLIKFQwuIrTJXoVr5dYrJ04azL8gLgk7qyD4jPX2lofLhTWkcjqQ6tURG2q%2FLz%2Fw%2FpczB3en5eDvcRUOLCnLaV%2BLCPVzls89ipEj6O255Wnr1%2Biz1HJflcH%2FaLhahbUDkDVMv4zaRcs2jT%2F%2B9bvLNeo7zguXrC00tYNKlD%2FOO%2BTyxxrKIWXQh18boe45K64KynhKmxngzrYR8nU1tY1%2BqeUf&X-Amz-Signature=12856199d7cec47517ff6f4929aa34149c16cfaaece0c186b478d11bbd00c081&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PVRUIW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1tkJ2OxBDKeZJWip1aK0fYabswVuIZWwnVdd61rYvQIhAOePBwzxTZI46BkwmDN13mCj1oZsVwwe7xYwcZWLjbloKv8DCFgQABoMNjM3NDIzMTgzODA1IgwP5Yg%2BGvl6I0iG2g8q3AOKE4aC43tUp%2FDazXxR39fXQ3v41GeLmPZfKDVfF%2FwkLorG7h45h3jVrmo%2FyHMEpSrnsRoNm1NCKkGbcbdz3BmClKkHWU4TsnHSNvhzPp5%2Bot56il8ikDhpOEtXG%2BsxCadZAywr2Ks1r37DZEt4hkhVJsYkw1r1k0lLLdz1ny4fQJna1OHn%2FeeFQd66g6ERjW0mbgaFqlsbcF7CLt2NzJOVK%2FCN%2FBfPkFyr1SK95jOF4hlHNa6zgDK%2BQ4viuBbobAuLkGySzQ0MyfrCC5oTpH6wkQJkKsEEAsml3h7i8c4jB7lh3Z5BUF1d1rdZyWhARJ8clxpFwTvpzQw8SEJyd9eT1pg5OToWKDmD4nYCM%2F8xIdQuP03X3PN4ZuHK4l5d0g%2B8iy86uBFIu9YNx%2FBW6earlgurk7T2UXwZdlg5pN4%2BauRORHMr2nx39aSpHfIEwC082sho3rCbebdw%2BzM2tc5cRDX4JDFq%2FYhFedQiUY3qJ3t5NvH4pcY0Nj7ZC5V95UY5yjwwUPGKIb%2BY2j3PZOFr%2F%2BYNqht%2FlgNr0Kv9RN7U5Ne6pSNq4ttZK4lxyOGro7nRpuo0dCZeOWix7lp9GjOg7Yv%2Fwf5Zwz19U8C2td7MsKChMEdFAx4jU0T3EjDz4KDBBjqkAaPqfLIKFQwuIrTJXoVr5dYrJ04azL8gLgk7qyD4jPX2lofLhTWkcjqQ6tURG2q%2FLz%2Fw%2FpczB3en5eDvcRUOLCnLaV%2BLCPVzls89ipEj6O255Wnr1%2Biz1HJflcH%2FaLhahbUDkDVMv4zaRcs2jT%2F%2B9bvLNeo7zguXrC00tYNKlD%2FOO%2BTyxxrKIWXQh18boe45K64KynhKmxngzrYR8nU1tY1%2BqeUf&X-Amz-Signature=63e17efa43a3336c15ed85c26ffcceae7cdafb9f8d6ee862c903f272e0bf7229&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PVRUIW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1tkJ2OxBDKeZJWip1aK0fYabswVuIZWwnVdd61rYvQIhAOePBwzxTZI46BkwmDN13mCj1oZsVwwe7xYwcZWLjbloKv8DCFgQABoMNjM3NDIzMTgzODA1IgwP5Yg%2BGvl6I0iG2g8q3AOKE4aC43tUp%2FDazXxR39fXQ3v41GeLmPZfKDVfF%2FwkLorG7h45h3jVrmo%2FyHMEpSrnsRoNm1NCKkGbcbdz3BmClKkHWU4TsnHSNvhzPp5%2Bot56il8ikDhpOEtXG%2BsxCadZAywr2Ks1r37DZEt4hkhVJsYkw1r1k0lLLdz1ny4fQJna1OHn%2FeeFQd66g6ERjW0mbgaFqlsbcF7CLt2NzJOVK%2FCN%2FBfPkFyr1SK95jOF4hlHNa6zgDK%2BQ4viuBbobAuLkGySzQ0MyfrCC5oTpH6wkQJkKsEEAsml3h7i8c4jB7lh3Z5BUF1d1rdZyWhARJ8clxpFwTvpzQw8SEJyd9eT1pg5OToWKDmD4nYCM%2F8xIdQuP03X3PN4ZuHK4l5d0g%2B8iy86uBFIu9YNx%2FBW6earlgurk7T2UXwZdlg5pN4%2BauRORHMr2nx39aSpHfIEwC082sho3rCbebdw%2BzM2tc5cRDX4JDFq%2FYhFedQiUY3qJ3t5NvH4pcY0Nj7ZC5V95UY5yjwwUPGKIb%2BY2j3PZOFr%2F%2BYNqht%2FlgNr0Kv9RN7U5Ne6pSNq4ttZK4lxyOGro7nRpuo0dCZeOWix7lp9GjOg7Yv%2Fwf5Zwz19U8C2td7MsKChMEdFAx4jU0T3EjDz4KDBBjqkAaPqfLIKFQwuIrTJXoVr5dYrJ04azL8gLgk7qyD4jPX2lofLhTWkcjqQ6tURG2q%2FLz%2Fw%2FpczB3en5eDvcRUOLCnLaV%2BLCPVzls89ipEj6O255Wnr1%2Biz1HJflcH%2FaLhahbUDkDVMv4zaRcs2jT%2F%2B9bvLNeo7zguXrC00tYNKlD%2FOO%2BTyxxrKIWXQh18boe45K64KynhKmxngzrYR8nU1tY1%2BqeUf&X-Amz-Signature=b4ca036fb3659fe3b39380bc2f98ba977a1ac39c193b9ca488217909a30bc9c9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PVRUIW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1tkJ2OxBDKeZJWip1aK0fYabswVuIZWwnVdd61rYvQIhAOePBwzxTZI46BkwmDN13mCj1oZsVwwe7xYwcZWLjbloKv8DCFgQABoMNjM3NDIzMTgzODA1IgwP5Yg%2BGvl6I0iG2g8q3AOKE4aC43tUp%2FDazXxR39fXQ3v41GeLmPZfKDVfF%2FwkLorG7h45h3jVrmo%2FyHMEpSrnsRoNm1NCKkGbcbdz3BmClKkHWU4TsnHSNvhzPp5%2Bot56il8ikDhpOEtXG%2BsxCadZAywr2Ks1r37DZEt4hkhVJsYkw1r1k0lLLdz1ny4fQJna1OHn%2FeeFQd66g6ERjW0mbgaFqlsbcF7CLt2NzJOVK%2FCN%2FBfPkFyr1SK95jOF4hlHNa6zgDK%2BQ4viuBbobAuLkGySzQ0MyfrCC5oTpH6wkQJkKsEEAsml3h7i8c4jB7lh3Z5BUF1d1rdZyWhARJ8clxpFwTvpzQw8SEJyd9eT1pg5OToWKDmD4nYCM%2F8xIdQuP03X3PN4ZuHK4l5d0g%2B8iy86uBFIu9YNx%2FBW6earlgurk7T2UXwZdlg5pN4%2BauRORHMr2nx39aSpHfIEwC082sho3rCbebdw%2BzM2tc5cRDX4JDFq%2FYhFedQiUY3qJ3t5NvH4pcY0Nj7ZC5V95UY5yjwwUPGKIb%2BY2j3PZOFr%2F%2BYNqht%2FlgNr0Kv9RN7U5Ne6pSNq4ttZK4lxyOGro7nRpuo0dCZeOWix7lp9GjOg7Yv%2Fwf5Zwz19U8C2td7MsKChMEdFAx4jU0T3EjDz4KDBBjqkAaPqfLIKFQwuIrTJXoVr5dYrJ04azL8gLgk7qyD4jPX2lofLhTWkcjqQ6tURG2q%2FLz%2Fw%2FpczB3en5eDvcRUOLCnLaV%2BLCPVzls89ipEj6O255Wnr1%2Biz1HJflcH%2FaLhahbUDkDVMv4zaRcs2jT%2F%2B9bvLNeo7zguXrC00tYNKlD%2FOO%2BTyxxrKIWXQh18boe45K64KynhKmxngzrYR8nU1tY1%2BqeUf&X-Amz-Signature=fa3bc81a06f13333a6b93f4357f2bd8ed96ed19c4644f0fea5d8326b601fc1ab&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
