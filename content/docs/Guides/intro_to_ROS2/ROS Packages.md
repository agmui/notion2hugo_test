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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLABP7N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIH7y7OsVDokoh7Z7EC3U6f%2FUkE0%2BtNheKS%2Bw0qv1eSqqAiBwbdlTzJh5xKWitlAGGhxkIxzdrxJhT8%2BYHBlGxG2p%2FSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuf%2BmW0EF8ueSNThqKtwDlb%2BI53LKLohEiEc5FJDurNpMx7eCpqHAg1kGgiN4EDGPNiZKrsyk%2BX8FcABiyvE5uw9SOaSbtthBqFMtnGtp1%2FJl8uycy56jnK8CsMaDVEraJtyO1mDB1IPkV0NsXT%2BZIyCW%2BFx2uw5ZMGX0wya47MCn3ZRPxehlclurg4%2F1bOPbVvXrQu%2BwVgYWMdmJEMve8lYHlp1vvohrZ%2B8ifUA4zNUF3QJyQCgIn3JRHjDHzR02IDtuF7%2FPAF98lw6hFptpLlBZhZsOb92ojxqSjy3lS%2BakhMOsSbxxIcbpwnRzmUOI2hg7G8Fu75O5tLQ8vUuu%2Bz2uWCxYv6Osh7tV7tzL3GtHkn6ewECOGEmCRiPKQszpvAH%2FU2FMiQWzr3%2FJdC%2BXW0Ka0oKh0v5MTQGfEvQ0OaIYyEeMrY2H4njPtPzRzXrLdUuzTazFM1Nx0uWjp4IQJqKD%2Bzk%2BLPNSsuHgv%2FBvjZcRGC2Rk6LdPg5lT8r6igWA%2FSBlk97oyBd8Rm6MeZjK9cwanV9IBbNXhNbAejan7uI7JwR%2F4Eav4Ka7PfcyeVxf3E7qPLmMAVXRs%2FLYfJdmTD%2Fe62SOb0nZD8ksTQypntJ9SQizh5P8LrTCL8%2FRSt67GZYF5m1QigO95kAwh42xvwY6pgHKb3jfL7NtyiNvKd27sIqklMRABvVtsAH69BJOU2DVg1%2BQg9jQspChWt%2FN77gmnm4QlktHHBXdzS9KoBlJGLb1sW%2FAERCx2dAKgswulSnLPE%2FehYeujo%2FuWkGS3rsfNt8Xxb%2B9MaCVKYhjvQeYEFnABwlmaEZ9awczOqz1%2BoLKz6YA91S0jRoLZOfn8ikcAe0gDS2CHZK7ySJoift5Rax66mtKvhBf&X-Amz-Signature=5681b04e387a4478635c6af8f7b0000a7917b7988f92825c3e5723902f72be45&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLABP7N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIH7y7OsVDokoh7Z7EC3U6f%2FUkE0%2BtNheKS%2Bw0qv1eSqqAiBwbdlTzJh5xKWitlAGGhxkIxzdrxJhT8%2BYHBlGxG2p%2FSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuf%2BmW0EF8ueSNThqKtwDlb%2BI53LKLohEiEc5FJDurNpMx7eCpqHAg1kGgiN4EDGPNiZKrsyk%2BX8FcABiyvE5uw9SOaSbtthBqFMtnGtp1%2FJl8uycy56jnK8CsMaDVEraJtyO1mDB1IPkV0NsXT%2BZIyCW%2BFx2uw5ZMGX0wya47MCn3ZRPxehlclurg4%2F1bOPbVvXrQu%2BwVgYWMdmJEMve8lYHlp1vvohrZ%2B8ifUA4zNUF3QJyQCgIn3JRHjDHzR02IDtuF7%2FPAF98lw6hFptpLlBZhZsOb92ojxqSjy3lS%2BakhMOsSbxxIcbpwnRzmUOI2hg7G8Fu75O5tLQ8vUuu%2Bz2uWCxYv6Osh7tV7tzL3GtHkn6ewECOGEmCRiPKQszpvAH%2FU2FMiQWzr3%2FJdC%2BXW0Ka0oKh0v5MTQGfEvQ0OaIYyEeMrY2H4njPtPzRzXrLdUuzTazFM1Nx0uWjp4IQJqKD%2Bzk%2BLPNSsuHgv%2FBvjZcRGC2Rk6LdPg5lT8r6igWA%2FSBlk97oyBd8Rm6MeZjK9cwanV9IBbNXhNbAejan7uI7JwR%2F4Eav4Ka7PfcyeVxf3E7qPLmMAVXRs%2FLYfJdmTD%2Fe62SOb0nZD8ksTQypntJ9SQizh5P8LrTCL8%2FRSt67GZYF5m1QigO95kAwh42xvwY6pgHKb3jfL7NtyiNvKd27sIqklMRABvVtsAH69BJOU2DVg1%2BQg9jQspChWt%2FN77gmnm4QlktHHBXdzS9KoBlJGLb1sW%2FAERCx2dAKgswulSnLPE%2FehYeujo%2FuWkGS3rsfNt8Xxb%2B9MaCVKYhjvQeYEFnABwlmaEZ9awczOqz1%2BoLKz6YA91S0jRoLZOfn8ikcAe0gDS2CHZK7ySJoift5Rax66mtKvhBf&X-Amz-Signature=31b1d2a502c8a6819bd66abdbcde7ba311a56f2196f38bbc33756fa6ac04b0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLABP7N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIH7y7OsVDokoh7Z7EC3U6f%2FUkE0%2BtNheKS%2Bw0qv1eSqqAiBwbdlTzJh5xKWitlAGGhxkIxzdrxJhT8%2BYHBlGxG2p%2FSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuf%2BmW0EF8ueSNThqKtwDlb%2BI53LKLohEiEc5FJDurNpMx7eCpqHAg1kGgiN4EDGPNiZKrsyk%2BX8FcABiyvE5uw9SOaSbtthBqFMtnGtp1%2FJl8uycy56jnK8CsMaDVEraJtyO1mDB1IPkV0NsXT%2BZIyCW%2BFx2uw5ZMGX0wya47MCn3ZRPxehlclurg4%2F1bOPbVvXrQu%2BwVgYWMdmJEMve8lYHlp1vvohrZ%2B8ifUA4zNUF3QJyQCgIn3JRHjDHzR02IDtuF7%2FPAF98lw6hFptpLlBZhZsOb92ojxqSjy3lS%2BakhMOsSbxxIcbpwnRzmUOI2hg7G8Fu75O5tLQ8vUuu%2Bz2uWCxYv6Osh7tV7tzL3GtHkn6ewECOGEmCRiPKQszpvAH%2FU2FMiQWzr3%2FJdC%2BXW0Ka0oKh0v5MTQGfEvQ0OaIYyEeMrY2H4njPtPzRzXrLdUuzTazFM1Nx0uWjp4IQJqKD%2Bzk%2BLPNSsuHgv%2FBvjZcRGC2Rk6LdPg5lT8r6igWA%2FSBlk97oyBd8Rm6MeZjK9cwanV9IBbNXhNbAejan7uI7JwR%2F4Eav4Ka7PfcyeVxf3E7qPLmMAVXRs%2FLYfJdmTD%2Fe62SOb0nZD8ksTQypntJ9SQizh5P8LrTCL8%2FRSt67GZYF5m1QigO95kAwh42xvwY6pgHKb3jfL7NtyiNvKd27sIqklMRABvVtsAH69BJOU2DVg1%2BQg9jQspChWt%2FN77gmnm4QlktHHBXdzS9KoBlJGLb1sW%2FAERCx2dAKgswulSnLPE%2FehYeujo%2FuWkGS3rsfNt8Xxb%2B9MaCVKYhjvQeYEFnABwlmaEZ9awczOqz1%2BoLKz6YA91S0jRoLZOfn8ikcAe0gDS2CHZK7ySJoift5Rax66mtKvhBf&X-Amz-Signature=6bf2f9af2f548124582be96d220e15203a87392d90cbc55dc7c3445793059eba&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLABP7N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIH7y7OsVDokoh7Z7EC3U6f%2FUkE0%2BtNheKS%2Bw0qv1eSqqAiBwbdlTzJh5xKWitlAGGhxkIxzdrxJhT8%2BYHBlGxG2p%2FSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuf%2BmW0EF8ueSNThqKtwDlb%2BI53LKLohEiEc5FJDurNpMx7eCpqHAg1kGgiN4EDGPNiZKrsyk%2BX8FcABiyvE5uw9SOaSbtthBqFMtnGtp1%2FJl8uycy56jnK8CsMaDVEraJtyO1mDB1IPkV0NsXT%2BZIyCW%2BFx2uw5ZMGX0wya47MCn3ZRPxehlclurg4%2F1bOPbVvXrQu%2BwVgYWMdmJEMve8lYHlp1vvohrZ%2B8ifUA4zNUF3QJyQCgIn3JRHjDHzR02IDtuF7%2FPAF98lw6hFptpLlBZhZsOb92ojxqSjy3lS%2BakhMOsSbxxIcbpwnRzmUOI2hg7G8Fu75O5tLQ8vUuu%2Bz2uWCxYv6Osh7tV7tzL3GtHkn6ewECOGEmCRiPKQszpvAH%2FU2FMiQWzr3%2FJdC%2BXW0Ka0oKh0v5MTQGfEvQ0OaIYyEeMrY2H4njPtPzRzXrLdUuzTazFM1Nx0uWjp4IQJqKD%2Bzk%2BLPNSsuHgv%2FBvjZcRGC2Rk6LdPg5lT8r6igWA%2FSBlk97oyBd8Rm6MeZjK9cwanV9IBbNXhNbAejan7uI7JwR%2F4Eav4Ka7PfcyeVxf3E7qPLmMAVXRs%2FLYfJdmTD%2Fe62SOb0nZD8ksTQypntJ9SQizh5P8LrTCL8%2FRSt67GZYF5m1QigO95kAwh42xvwY6pgHKb3jfL7NtyiNvKd27sIqklMRABvVtsAH69BJOU2DVg1%2BQg9jQspChWt%2FN77gmnm4QlktHHBXdzS9KoBlJGLb1sW%2FAERCx2dAKgswulSnLPE%2FehYeujo%2FuWkGS3rsfNt8Xxb%2B9MaCVKYhjvQeYEFnABwlmaEZ9awczOqz1%2BoLKz6YA91S0jRoLZOfn8ikcAe0gDS2CHZK7ySJoift5Rax66mtKvhBf&X-Amz-Signature=e8d601fcc1e07e45a12b063e4d80b4a4a10872a18bc3e9e868254294cccdb6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLABP7N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIH7y7OsVDokoh7Z7EC3U6f%2FUkE0%2BtNheKS%2Bw0qv1eSqqAiBwbdlTzJh5xKWitlAGGhxkIxzdrxJhT8%2BYHBlGxG2p%2FSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuf%2BmW0EF8ueSNThqKtwDlb%2BI53LKLohEiEc5FJDurNpMx7eCpqHAg1kGgiN4EDGPNiZKrsyk%2BX8FcABiyvE5uw9SOaSbtthBqFMtnGtp1%2FJl8uycy56jnK8CsMaDVEraJtyO1mDB1IPkV0NsXT%2BZIyCW%2BFx2uw5ZMGX0wya47MCn3ZRPxehlclurg4%2F1bOPbVvXrQu%2BwVgYWMdmJEMve8lYHlp1vvohrZ%2B8ifUA4zNUF3QJyQCgIn3JRHjDHzR02IDtuF7%2FPAF98lw6hFptpLlBZhZsOb92ojxqSjy3lS%2BakhMOsSbxxIcbpwnRzmUOI2hg7G8Fu75O5tLQ8vUuu%2Bz2uWCxYv6Osh7tV7tzL3GtHkn6ewECOGEmCRiPKQszpvAH%2FU2FMiQWzr3%2FJdC%2BXW0Ka0oKh0v5MTQGfEvQ0OaIYyEeMrY2H4njPtPzRzXrLdUuzTazFM1Nx0uWjp4IQJqKD%2Bzk%2BLPNSsuHgv%2FBvjZcRGC2Rk6LdPg5lT8r6igWA%2FSBlk97oyBd8Rm6MeZjK9cwanV9IBbNXhNbAejan7uI7JwR%2F4Eav4Ka7PfcyeVxf3E7qPLmMAVXRs%2FLYfJdmTD%2Fe62SOb0nZD8ksTQypntJ9SQizh5P8LrTCL8%2FRSt67GZYF5m1QigO95kAwh42xvwY6pgHKb3jfL7NtyiNvKd27sIqklMRABvVtsAH69BJOU2DVg1%2BQg9jQspChWt%2FN77gmnm4QlktHHBXdzS9KoBlJGLb1sW%2FAERCx2dAKgswulSnLPE%2FehYeujo%2FuWkGS3rsfNt8Xxb%2B9MaCVKYhjvQeYEFnABwlmaEZ9awczOqz1%2BoLKz6YA91S0jRoLZOfn8ikcAe0gDS2CHZK7ySJoift5Rax66mtKvhBf&X-Amz-Signature=8c9fe7f647d32d6be56b94aded3d1820d6505975be3e34928203f46df714e90c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLABP7N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIH7y7OsVDokoh7Z7EC3U6f%2FUkE0%2BtNheKS%2Bw0qv1eSqqAiBwbdlTzJh5xKWitlAGGhxkIxzdrxJhT8%2BYHBlGxG2p%2FSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuf%2BmW0EF8ueSNThqKtwDlb%2BI53LKLohEiEc5FJDurNpMx7eCpqHAg1kGgiN4EDGPNiZKrsyk%2BX8FcABiyvE5uw9SOaSbtthBqFMtnGtp1%2FJl8uycy56jnK8CsMaDVEraJtyO1mDB1IPkV0NsXT%2BZIyCW%2BFx2uw5ZMGX0wya47MCn3ZRPxehlclurg4%2F1bOPbVvXrQu%2BwVgYWMdmJEMve8lYHlp1vvohrZ%2B8ifUA4zNUF3QJyQCgIn3JRHjDHzR02IDtuF7%2FPAF98lw6hFptpLlBZhZsOb92ojxqSjy3lS%2BakhMOsSbxxIcbpwnRzmUOI2hg7G8Fu75O5tLQ8vUuu%2Bz2uWCxYv6Osh7tV7tzL3GtHkn6ewECOGEmCRiPKQszpvAH%2FU2FMiQWzr3%2FJdC%2BXW0Ka0oKh0v5MTQGfEvQ0OaIYyEeMrY2H4njPtPzRzXrLdUuzTazFM1Nx0uWjp4IQJqKD%2Bzk%2BLPNSsuHgv%2FBvjZcRGC2Rk6LdPg5lT8r6igWA%2FSBlk97oyBd8Rm6MeZjK9cwanV9IBbNXhNbAejan7uI7JwR%2F4Eav4Ka7PfcyeVxf3E7qPLmMAVXRs%2FLYfJdmTD%2Fe62SOb0nZD8ksTQypntJ9SQizh5P8LrTCL8%2FRSt67GZYF5m1QigO95kAwh42xvwY6pgHKb3jfL7NtyiNvKd27sIqklMRABvVtsAH69BJOU2DVg1%2BQg9jQspChWt%2FN77gmnm4QlktHHBXdzS9KoBlJGLb1sW%2FAERCx2dAKgswulSnLPE%2FehYeujo%2FuWkGS3rsfNt8Xxb%2B9MaCVKYhjvQeYEFnABwlmaEZ9awczOqz1%2BoLKz6YA91S0jRoLZOfn8ikcAe0gDS2CHZK7ySJoift5Rax66mtKvhBf&X-Amz-Signature=603dabff34d653562862720e0dec926dd959dcf4eda4a38862dec86349e98ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLABP7N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIH7y7OsVDokoh7Z7EC3U6f%2FUkE0%2BtNheKS%2Bw0qv1eSqqAiBwbdlTzJh5xKWitlAGGhxkIxzdrxJhT8%2BYHBlGxG2p%2FSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuf%2BmW0EF8ueSNThqKtwDlb%2BI53LKLohEiEc5FJDurNpMx7eCpqHAg1kGgiN4EDGPNiZKrsyk%2BX8FcABiyvE5uw9SOaSbtthBqFMtnGtp1%2FJl8uycy56jnK8CsMaDVEraJtyO1mDB1IPkV0NsXT%2BZIyCW%2BFx2uw5ZMGX0wya47MCn3ZRPxehlclurg4%2F1bOPbVvXrQu%2BwVgYWMdmJEMve8lYHlp1vvohrZ%2B8ifUA4zNUF3QJyQCgIn3JRHjDHzR02IDtuF7%2FPAF98lw6hFptpLlBZhZsOb92ojxqSjy3lS%2BakhMOsSbxxIcbpwnRzmUOI2hg7G8Fu75O5tLQ8vUuu%2Bz2uWCxYv6Osh7tV7tzL3GtHkn6ewECOGEmCRiPKQszpvAH%2FU2FMiQWzr3%2FJdC%2BXW0Ka0oKh0v5MTQGfEvQ0OaIYyEeMrY2H4njPtPzRzXrLdUuzTazFM1Nx0uWjp4IQJqKD%2Bzk%2BLPNSsuHgv%2FBvjZcRGC2Rk6LdPg5lT8r6igWA%2FSBlk97oyBd8Rm6MeZjK9cwanV9IBbNXhNbAejan7uI7JwR%2F4Eav4Ka7PfcyeVxf3E7qPLmMAVXRs%2FLYfJdmTD%2Fe62SOb0nZD8ksTQypntJ9SQizh5P8LrTCL8%2FRSt67GZYF5m1QigO95kAwh42xvwY6pgHKb3jfL7NtyiNvKd27sIqklMRABvVtsAH69BJOU2DVg1%2BQg9jQspChWt%2FN77gmnm4QlktHHBXdzS9KoBlJGLb1sW%2FAERCx2dAKgswulSnLPE%2FehYeujo%2FuWkGS3rsfNt8Xxb%2B9MaCVKYhjvQeYEFnABwlmaEZ9awczOqz1%2BoLKz6YA91S0jRoLZOfn8ikcAe0gDS2CHZK7ySJoift5Rax66mtKvhBf&X-Amz-Signature=cb14c24ecf02df8c9166685637e00caa3ee67b99338b78d442a32ac86a9b40f3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
