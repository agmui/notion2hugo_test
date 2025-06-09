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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5XBVHU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6t%2BoWhK%2BexkWdm0vH5pgJI3hoQ4akNV7NUR920VeijgIhALNQSvaacPV6uNfKPzqTwJPj7aKnggj%2BwyYhsn41m3NvKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOe3FsVqZGMGzE2CIq3ANp1QG2CwdG26RLViGRTnRerh4aajbRma7jd0B6csR%2BamtU%2BMBWYrt61F0TK0YNkPRoIYMlyrWkiWCOH4sKwi1phRYawzXQVdsYssw3FmY7mOaq26siR8d%2BfDfMnoETrUyOKljpcL9n9DOnf12paqjNXC2d%2Bn%2B%2B6hJdFy4xKrJXXPh0B5d2WPSJKVjztPPLr52pkuQlg%2Bn9%2FeCGpAM62NmzTVnQd7McXXVew0sG3CnDZs52wL7URpBk4MY4dHCbMvOX9jJuDciPM0M%2Bz8coHRofe%2FgB00Cqft7P8A4w7BvY%2Byux0xBUaRTNXBMjWOlbhLARYFzyStEId8P0p6eeF%2FNECBDTA4GXR4ezCIDMB1K8AYE196x6deAt5rA78FSIJ7YJ779Rp4lltVMzLo9OLi5Tr44BGH30NLkkypZHrsyAoWxcvv80MIQfksb7mgYNbSInFUMjX11o4h3jlNqMBAbTuOiJVPT%2FS3CuUlaFuMLWcRQvop3eSCiR5x92yEtGoH0%2FbzEiTUkx2xLLleMfsXgrUrS3DHx3O9AxpCXqJBXFq3wdhdhHkkHHr%2FAyhiyO1ZfNxMVUi%2Fl6zDLQ3mmMwKO%2B0gYPJzDYQdycNIH8rtJ%2B9eCwPsAvkIRTXiTE4zDcnZvCBjqkAfdCHA0hUGj%2B8Fq%2FgwSqAiKKTHS4kkqEZzXlX6by8XTzJ2741GsqrpmM3zfjYeqEAAQHOWMixmWmK8klPuXaq9oU7AoC0hgvQGgsw1%2BepOwvXXuOrk7Wifqkvyo320jxyGdPJpCpFYaYMFnwqKT5utZ0jHkcwpI2oIt9RsQhvIcmxOcguf3n8%2F1andOEBjadyMNThHYr3LELJVwxcYiMbUkcOPxr&X-Amz-Signature=a5b962fb094fb86c9dfe7804f8dadcc4ea4ebc8d135ffade883711ddcff72396&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5XBVHU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6t%2BoWhK%2BexkWdm0vH5pgJI3hoQ4akNV7NUR920VeijgIhALNQSvaacPV6uNfKPzqTwJPj7aKnggj%2BwyYhsn41m3NvKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOe3FsVqZGMGzE2CIq3ANp1QG2CwdG26RLViGRTnRerh4aajbRma7jd0B6csR%2BamtU%2BMBWYrt61F0TK0YNkPRoIYMlyrWkiWCOH4sKwi1phRYawzXQVdsYssw3FmY7mOaq26siR8d%2BfDfMnoETrUyOKljpcL9n9DOnf12paqjNXC2d%2Bn%2B%2B6hJdFy4xKrJXXPh0B5d2WPSJKVjztPPLr52pkuQlg%2Bn9%2FeCGpAM62NmzTVnQd7McXXVew0sG3CnDZs52wL7URpBk4MY4dHCbMvOX9jJuDciPM0M%2Bz8coHRofe%2FgB00Cqft7P8A4w7BvY%2Byux0xBUaRTNXBMjWOlbhLARYFzyStEId8P0p6eeF%2FNECBDTA4GXR4ezCIDMB1K8AYE196x6deAt5rA78FSIJ7YJ779Rp4lltVMzLo9OLi5Tr44BGH30NLkkypZHrsyAoWxcvv80MIQfksb7mgYNbSInFUMjX11o4h3jlNqMBAbTuOiJVPT%2FS3CuUlaFuMLWcRQvop3eSCiR5x92yEtGoH0%2FbzEiTUkx2xLLleMfsXgrUrS3DHx3O9AxpCXqJBXFq3wdhdhHkkHHr%2FAyhiyO1ZfNxMVUi%2Fl6zDLQ3mmMwKO%2B0gYPJzDYQdycNIH8rtJ%2B9eCwPsAvkIRTXiTE4zDcnZvCBjqkAfdCHA0hUGj%2B8Fq%2FgwSqAiKKTHS4kkqEZzXlX6by8XTzJ2741GsqrpmM3zfjYeqEAAQHOWMixmWmK8klPuXaq9oU7AoC0hgvQGgsw1%2BepOwvXXuOrk7Wifqkvyo320jxyGdPJpCpFYaYMFnwqKT5utZ0jHkcwpI2oIt9RsQhvIcmxOcguf3n8%2F1andOEBjadyMNThHYr3LELJVwxcYiMbUkcOPxr&X-Amz-Signature=4359c409f9802b475311c52995238c76c7364eb29a4470876d1ab640a5a21959&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5XBVHU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6t%2BoWhK%2BexkWdm0vH5pgJI3hoQ4akNV7NUR920VeijgIhALNQSvaacPV6uNfKPzqTwJPj7aKnggj%2BwyYhsn41m3NvKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOe3FsVqZGMGzE2CIq3ANp1QG2CwdG26RLViGRTnRerh4aajbRma7jd0B6csR%2BamtU%2BMBWYrt61F0TK0YNkPRoIYMlyrWkiWCOH4sKwi1phRYawzXQVdsYssw3FmY7mOaq26siR8d%2BfDfMnoETrUyOKljpcL9n9DOnf12paqjNXC2d%2Bn%2B%2B6hJdFy4xKrJXXPh0B5d2WPSJKVjztPPLr52pkuQlg%2Bn9%2FeCGpAM62NmzTVnQd7McXXVew0sG3CnDZs52wL7URpBk4MY4dHCbMvOX9jJuDciPM0M%2Bz8coHRofe%2FgB00Cqft7P8A4w7BvY%2Byux0xBUaRTNXBMjWOlbhLARYFzyStEId8P0p6eeF%2FNECBDTA4GXR4ezCIDMB1K8AYE196x6deAt5rA78FSIJ7YJ779Rp4lltVMzLo9OLi5Tr44BGH30NLkkypZHrsyAoWxcvv80MIQfksb7mgYNbSInFUMjX11o4h3jlNqMBAbTuOiJVPT%2FS3CuUlaFuMLWcRQvop3eSCiR5x92yEtGoH0%2FbzEiTUkx2xLLleMfsXgrUrS3DHx3O9AxpCXqJBXFq3wdhdhHkkHHr%2FAyhiyO1ZfNxMVUi%2Fl6zDLQ3mmMwKO%2B0gYPJzDYQdycNIH8rtJ%2B9eCwPsAvkIRTXiTE4zDcnZvCBjqkAfdCHA0hUGj%2B8Fq%2FgwSqAiKKTHS4kkqEZzXlX6by8XTzJ2741GsqrpmM3zfjYeqEAAQHOWMixmWmK8klPuXaq9oU7AoC0hgvQGgsw1%2BepOwvXXuOrk7Wifqkvyo320jxyGdPJpCpFYaYMFnwqKT5utZ0jHkcwpI2oIt9RsQhvIcmxOcguf3n8%2F1andOEBjadyMNThHYr3LELJVwxcYiMbUkcOPxr&X-Amz-Signature=f9c69095390854ef3050a6b015e64b4bf34c5c6f477f37292512a02d0fa48b23&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5XBVHU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6t%2BoWhK%2BexkWdm0vH5pgJI3hoQ4akNV7NUR920VeijgIhALNQSvaacPV6uNfKPzqTwJPj7aKnggj%2BwyYhsn41m3NvKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOe3FsVqZGMGzE2CIq3ANp1QG2CwdG26RLViGRTnRerh4aajbRma7jd0B6csR%2BamtU%2BMBWYrt61F0TK0YNkPRoIYMlyrWkiWCOH4sKwi1phRYawzXQVdsYssw3FmY7mOaq26siR8d%2BfDfMnoETrUyOKljpcL9n9DOnf12paqjNXC2d%2Bn%2B%2B6hJdFy4xKrJXXPh0B5d2WPSJKVjztPPLr52pkuQlg%2Bn9%2FeCGpAM62NmzTVnQd7McXXVew0sG3CnDZs52wL7URpBk4MY4dHCbMvOX9jJuDciPM0M%2Bz8coHRofe%2FgB00Cqft7P8A4w7BvY%2Byux0xBUaRTNXBMjWOlbhLARYFzyStEId8P0p6eeF%2FNECBDTA4GXR4ezCIDMB1K8AYE196x6deAt5rA78FSIJ7YJ779Rp4lltVMzLo9OLi5Tr44BGH30NLkkypZHrsyAoWxcvv80MIQfksb7mgYNbSInFUMjX11o4h3jlNqMBAbTuOiJVPT%2FS3CuUlaFuMLWcRQvop3eSCiR5x92yEtGoH0%2FbzEiTUkx2xLLleMfsXgrUrS3DHx3O9AxpCXqJBXFq3wdhdhHkkHHr%2FAyhiyO1ZfNxMVUi%2Fl6zDLQ3mmMwKO%2B0gYPJzDYQdycNIH8rtJ%2B9eCwPsAvkIRTXiTE4zDcnZvCBjqkAfdCHA0hUGj%2B8Fq%2FgwSqAiKKTHS4kkqEZzXlX6by8XTzJ2741GsqrpmM3zfjYeqEAAQHOWMixmWmK8klPuXaq9oU7AoC0hgvQGgsw1%2BepOwvXXuOrk7Wifqkvyo320jxyGdPJpCpFYaYMFnwqKT5utZ0jHkcwpI2oIt9RsQhvIcmxOcguf3n8%2F1andOEBjadyMNThHYr3LELJVwxcYiMbUkcOPxr&X-Amz-Signature=4e17a7a5e151f2481ff46b4c9f6abed3ec56c13b70b9ec7b41be407734545729&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5XBVHU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6t%2BoWhK%2BexkWdm0vH5pgJI3hoQ4akNV7NUR920VeijgIhALNQSvaacPV6uNfKPzqTwJPj7aKnggj%2BwyYhsn41m3NvKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOe3FsVqZGMGzE2CIq3ANp1QG2CwdG26RLViGRTnRerh4aajbRma7jd0B6csR%2BamtU%2BMBWYrt61F0TK0YNkPRoIYMlyrWkiWCOH4sKwi1phRYawzXQVdsYssw3FmY7mOaq26siR8d%2BfDfMnoETrUyOKljpcL9n9DOnf12paqjNXC2d%2Bn%2B%2B6hJdFy4xKrJXXPh0B5d2WPSJKVjztPPLr52pkuQlg%2Bn9%2FeCGpAM62NmzTVnQd7McXXVew0sG3CnDZs52wL7URpBk4MY4dHCbMvOX9jJuDciPM0M%2Bz8coHRofe%2FgB00Cqft7P8A4w7BvY%2Byux0xBUaRTNXBMjWOlbhLARYFzyStEId8P0p6eeF%2FNECBDTA4GXR4ezCIDMB1K8AYE196x6deAt5rA78FSIJ7YJ779Rp4lltVMzLo9OLi5Tr44BGH30NLkkypZHrsyAoWxcvv80MIQfksb7mgYNbSInFUMjX11o4h3jlNqMBAbTuOiJVPT%2FS3CuUlaFuMLWcRQvop3eSCiR5x92yEtGoH0%2FbzEiTUkx2xLLleMfsXgrUrS3DHx3O9AxpCXqJBXFq3wdhdhHkkHHr%2FAyhiyO1ZfNxMVUi%2Fl6zDLQ3mmMwKO%2B0gYPJzDYQdycNIH8rtJ%2B9eCwPsAvkIRTXiTE4zDcnZvCBjqkAfdCHA0hUGj%2B8Fq%2FgwSqAiKKTHS4kkqEZzXlX6by8XTzJ2741GsqrpmM3zfjYeqEAAQHOWMixmWmK8klPuXaq9oU7AoC0hgvQGgsw1%2BepOwvXXuOrk7Wifqkvyo320jxyGdPJpCpFYaYMFnwqKT5utZ0jHkcwpI2oIt9RsQhvIcmxOcguf3n8%2F1andOEBjadyMNThHYr3LELJVwxcYiMbUkcOPxr&X-Amz-Signature=081f31760134b94aad90357d6bf2dd9ebc5b05ff04de8c483b9d2b1840ac2915&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5XBVHU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6t%2BoWhK%2BexkWdm0vH5pgJI3hoQ4akNV7NUR920VeijgIhALNQSvaacPV6uNfKPzqTwJPj7aKnggj%2BwyYhsn41m3NvKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOe3FsVqZGMGzE2CIq3ANp1QG2CwdG26RLViGRTnRerh4aajbRma7jd0B6csR%2BamtU%2BMBWYrt61F0TK0YNkPRoIYMlyrWkiWCOH4sKwi1phRYawzXQVdsYssw3FmY7mOaq26siR8d%2BfDfMnoETrUyOKljpcL9n9DOnf12paqjNXC2d%2Bn%2B%2B6hJdFy4xKrJXXPh0B5d2WPSJKVjztPPLr52pkuQlg%2Bn9%2FeCGpAM62NmzTVnQd7McXXVew0sG3CnDZs52wL7URpBk4MY4dHCbMvOX9jJuDciPM0M%2Bz8coHRofe%2FgB00Cqft7P8A4w7BvY%2Byux0xBUaRTNXBMjWOlbhLARYFzyStEId8P0p6eeF%2FNECBDTA4GXR4ezCIDMB1K8AYE196x6deAt5rA78FSIJ7YJ779Rp4lltVMzLo9OLi5Tr44BGH30NLkkypZHrsyAoWxcvv80MIQfksb7mgYNbSInFUMjX11o4h3jlNqMBAbTuOiJVPT%2FS3CuUlaFuMLWcRQvop3eSCiR5x92yEtGoH0%2FbzEiTUkx2xLLleMfsXgrUrS3DHx3O9AxpCXqJBXFq3wdhdhHkkHHr%2FAyhiyO1ZfNxMVUi%2Fl6zDLQ3mmMwKO%2B0gYPJzDYQdycNIH8rtJ%2B9eCwPsAvkIRTXiTE4zDcnZvCBjqkAfdCHA0hUGj%2B8Fq%2FgwSqAiKKTHS4kkqEZzXlX6by8XTzJ2741GsqrpmM3zfjYeqEAAQHOWMixmWmK8klPuXaq9oU7AoC0hgvQGgsw1%2BepOwvXXuOrk7Wifqkvyo320jxyGdPJpCpFYaYMFnwqKT5utZ0jHkcwpI2oIt9RsQhvIcmxOcguf3n8%2F1andOEBjadyMNThHYr3LELJVwxcYiMbUkcOPxr&X-Amz-Signature=ea8cc8257aa9e1a1b3e6e94ced8dfaee0099028903bd9ab18232ee646c6902b1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5XBVHU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6t%2BoWhK%2BexkWdm0vH5pgJI3hoQ4akNV7NUR920VeijgIhALNQSvaacPV6uNfKPzqTwJPj7aKnggj%2BwyYhsn41m3NvKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOe3FsVqZGMGzE2CIq3ANp1QG2CwdG26RLViGRTnRerh4aajbRma7jd0B6csR%2BamtU%2BMBWYrt61F0TK0YNkPRoIYMlyrWkiWCOH4sKwi1phRYawzXQVdsYssw3FmY7mOaq26siR8d%2BfDfMnoETrUyOKljpcL9n9DOnf12paqjNXC2d%2Bn%2B%2B6hJdFy4xKrJXXPh0B5d2WPSJKVjztPPLr52pkuQlg%2Bn9%2FeCGpAM62NmzTVnQd7McXXVew0sG3CnDZs52wL7URpBk4MY4dHCbMvOX9jJuDciPM0M%2Bz8coHRofe%2FgB00Cqft7P8A4w7BvY%2Byux0xBUaRTNXBMjWOlbhLARYFzyStEId8P0p6eeF%2FNECBDTA4GXR4ezCIDMB1K8AYE196x6deAt5rA78FSIJ7YJ779Rp4lltVMzLo9OLi5Tr44BGH30NLkkypZHrsyAoWxcvv80MIQfksb7mgYNbSInFUMjX11o4h3jlNqMBAbTuOiJVPT%2FS3CuUlaFuMLWcRQvop3eSCiR5x92yEtGoH0%2FbzEiTUkx2xLLleMfsXgrUrS3DHx3O9AxpCXqJBXFq3wdhdhHkkHHr%2FAyhiyO1ZfNxMVUi%2Fl6zDLQ3mmMwKO%2B0gYPJzDYQdycNIH8rtJ%2B9eCwPsAvkIRTXiTE4zDcnZvCBjqkAfdCHA0hUGj%2B8Fq%2FgwSqAiKKTHS4kkqEZzXlX6by8XTzJ2741GsqrpmM3zfjYeqEAAQHOWMixmWmK8klPuXaq9oU7AoC0hgvQGgsw1%2BepOwvXXuOrk7Wifqkvyo320jxyGdPJpCpFYaYMFnwqKT5utZ0jHkcwpI2oIt9RsQhvIcmxOcguf3n8%2F1andOEBjadyMNThHYr3LELJVwxcYiMbUkcOPxr&X-Amz-Signature=da4228a63980f04cfe21e5d41a127b965787e33c45b30fd350c625c7494c85c9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
