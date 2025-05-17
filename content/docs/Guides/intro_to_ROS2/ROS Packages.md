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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYA6CS6N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhYrXVsnaZnsKPPStP2QoaUUd2uWNth0J57bjrnxuoLQIgCnIDvIZrAwaFohMxIicdx5huGDCUCspHZTND2KjFiyAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDOJYwZ%2BtzxE5crJtyrcAyUIXsY85nyar5Dci4whBK6PC%2Bp8KbvZhWxPz7oAK%2FA%2BM1UyRkJjINxLJPgsiWqhNn8MaFPPMVIVV0dmyxdIfO%2F40XQESZQqA6ubujamblfMK%2B%2FEGjHwDxsl%2FYzEY%2BgX%2BZ5%2F%2B%2Bfc7VTj3GTq0dTzaVALElz4emZ8NUE4Pm9PVialKioszPFlp1crs4sI7yOFdFN4LcHEPU5MH3qYjb8hxNmIGZaDfjUpongTvxuWBO4C81SrawpUjTvolUsq8l4jF%2FVVzXRvfPpfhDTswYn%2F4x03afd4osJ4PNF0Ma7m6g888SPhB5f7FEb%2BrO1brw42JLZZxByNGkoKB0GbcnjCs8lZLuq9ri9ee%2F8TIlKSq5%2FCJLK%2FC6s66YNuO1EyrDKvWCnj9HB08yQTTyvZuU0iOSITqY506v5tk4z6sogY5pwgZ1LT4daWM%2BivMaVhmryxSkjLrw9YyJxqh47KZjKxtKirjI69%2BYNY%2BvJWTC2Ljkkn3ug5c1YrqfnJpwW1XrDSgFUehWBO7UjZX2HbQvtArfKNptRtfsVpSYCuPxfbJrEUfwp8oeLa85%2Byst92%2FumOOePwYrgRcfgA1NcjL3lJ99x5TgBd%2BVbZfasgMIpywj%2FpMFsgkD5XNt9sjX%2FbMKG9ocEGOqUBqxdte9aWI4dNC9Nlxw3Py%2F9n7HXExXpX%2BJl55o3VEv5FFa5c%2FNrqgHFtYtkLTSLCo9df%2BhjvUIuUHm9I65BqJhvspCK5xlaZKuSNHCQ66elU8GdcWjK5GbpL4ybUhK4IqaGz%2BhTTn5YIfx0%2BEOFmPnfmqiHg2pgpxrMczEeSkGwuWazqf0HgwP0IJXD2aHG1IAHwRwWNexOixZj6m%2FXaKiwTGiov&X-Amz-Signature=b1dcc21cb013c0b57962cdb2ebec7f7a98232eb3cdb70db6ddd5a55ec82dad54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYA6CS6N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhYrXVsnaZnsKPPStP2QoaUUd2uWNth0J57bjrnxuoLQIgCnIDvIZrAwaFohMxIicdx5huGDCUCspHZTND2KjFiyAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDOJYwZ%2BtzxE5crJtyrcAyUIXsY85nyar5Dci4whBK6PC%2Bp8KbvZhWxPz7oAK%2FA%2BM1UyRkJjINxLJPgsiWqhNn8MaFPPMVIVV0dmyxdIfO%2F40XQESZQqA6ubujamblfMK%2B%2FEGjHwDxsl%2FYzEY%2BgX%2BZ5%2F%2B%2Bfc7VTj3GTq0dTzaVALElz4emZ8NUE4Pm9PVialKioszPFlp1crs4sI7yOFdFN4LcHEPU5MH3qYjb8hxNmIGZaDfjUpongTvxuWBO4C81SrawpUjTvolUsq8l4jF%2FVVzXRvfPpfhDTswYn%2F4x03afd4osJ4PNF0Ma7m6g888SPhB5f7FEb%2BrO1brw42JLZZxByNGkoKB0GbcnjCs8lZLuq9ri9ee%2F8TIlKSq5%2FCJLK%2FC6s66YNuO1EyrDKvWCnj9HB08yQTTyvZuU0iOSITqY506v5tk4z6sogY5pwgZ1LT4daWM%2BivMaVhmryxSkjLrw9YyJxqh47KZjKxtKirjI69%2BYNY%2BvJWTC2Ljkkn3ug5c1YrqfnJpwW1XrDSgFUehWBO7UjZX2HbQvtArfKNptRtfsVpSYCuPxfbJrEUfwp8oeLa85%2Byst92%2FumOOePwYrgRcfgA1NcjL3lJ99x5TgBd%2BVbZfasgMIpywj%2FpMFsgkD5XNt9sjX%2FbMKG9ocEGOqUBqxdte9aWI4dNC9Nlxw3Py%2F9n7HXExXpX%2BJl55o3VEv5FFa5c%2FNrqgHFtYtkLTSLCo9df%2BhjvUIuUHm9I65BqJhvspCK5xlaZKuSNHCQ66elU8GdcWjK5GbpL4ybUhK4IqaGz%2BhTTn5YIfx0%2BEOFmPnfmqiHg2pgpxrMczEeSkGwuWazqf0HgwP0IJXD2aHG1IAHwRwWNexOixZj6m%2FXaKiwTGiov&X-Amz-Signature=40c103f4242d0eae638c3c332f30e0adb02716d36d1ebb95baa94f86f50a927c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYA6CS6N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhYrXVsnaZnsKPPStP2QoaUUd2uWNth0J57bjrnxuoLQIgCnIDvIZrAwaFohMxIicdx5huGDCUCspHZTND2KjFiyAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDOJYwZ%2BtzxE5crJtyrcAyUIXsY85nyar5Dci4whBK6PC%2Bp8KbvZhWxPz7oAK%2FA%2BM1UyRkJjINxLJPgsiWqhNn8MaFPPMVIVV0dmyxdIfO%2F40XQESZQqA6ubujamblfMK%2B%2FEGjHwDxsl%2FYzEY%2BgX%2BZ5%2F%2B%2Bfc7VTj3GTq0dTzaVALElz4emZ8NUE4Pm9PVialKioszPFlp1crs4sI7yOFdFN4LcHEPU5MH3qYjb8hxNmIGZaDfjUpongTvxuWBO4C81SrawpUjTvolUsq8l4jF%2FVVzXRvfPpfhDTswYn%2F4x03afd4osJ4PNF0Ma7m6g888SPhB5f7FEb%2BrO1brw42JLZZxByNGkoKB0GbcnjCs8lZLuq9ri9ee%2F8TIlKSq5%2FCJLK%2FC6s66YNuO1EyrDKvWCnj9HB08yQTTyvZuU0iOSITqY506v5tk4z6sogY5pwgZ1LT4daWM%2BivMaVhmryxSkjLrw9YyJxqh47KZjKxtKirjI69%2BYNY%2BvJWTC2Ljkkn3ug5c1YrqfnJpwW1XrDSgFUehWBO7UjZX2HbQvtArfKNptRtfsVpSYCuPxfbJrEUfwp8oeLa85%2Byst92%2FumOOePwYrgRcfgA1NcjL3lJ99x5TgBd%2BVbZfasgMIpywj%2FpMFsgkD5XNt9sjX%2FbMKG9ocEGOqUBqxdte9aWI4dNC9Nlxw3Py%2F9n7HXExXpX%2BJl55o3VEv5FFa5c%2FNrqgHFtYtkLTSLCo9df%2BhjvUIuUHm9I65BqJhvspCK5xlaZKuSNHCQ66elU8GdcWjK5GbpL4ybUhK4IqaGz%2BhTTn5YIfx0%2BEOFmPnfmqiHg2pgpxrMczEeSkGwuWazqf0HgwP0IJXD2aHG1IAHwRwWNexOixZj6m%2FXaKiwTGiov&X-Amz-Signature=b54688b05b5debeb82c5d7ebf3bcb2bdfafbff52a3effd35acc38371e003c09f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYA6CS6N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhYrXVsnaZnsKPPStP2QoaUUd2uWNth0J57bjrnxuoLQIgCnIDvIZrAwaFohMxIicdx5huGDCUCspHZTND2KjFiyAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDOJYwZ%2BtzxE5crJtyrcAyUIXsY85nyar5Dci4whBK6PC%2Bp8KbvZhWxPz7oAK%2FA%2BM1UyRkJjINxLJPgsiWqhNn8MaFPPMVIVV0dmyxdIfO%2F40XQESZQqA6ubujamblfMK%2B%2FEGjHwDxsl%2FYzEY%2BgX%2BZ5%2F%2B%2Bfc7VTj3GTq0dTzaVALElz4emZ8NUE4Pm9PVialKioszPFlp1crs4sI7yOFdFN4LcHEPU5MH3qYjb8hxNmIGZaDfjUpongTvxuWBO4C81SrawpUjTvolUsq8l4jF%2FVVzXRvfPpfhDTswYn%2F4x03afd4osJ4PNF0Ma7m6g888SPhB5f7FEb%2BrO1brw42JLZZxByNGkoKB0GbcnjCs8lZLuq9ri9ee%2F8TIlKSq5%2FCJLK%2FC6s66YNuO1EyrDKvWCnj9HB08yQTTyvZuU0iOSITqY506v5tk4z6sogY5pwgZ1LT4daWM%2BivMaVhmryxSkjLrw9YyJxqh47KZjKxtKirjI69%2BYNY%2BvJWTC2Ljkkn3ug5c1YrqfnJpwW1XrDSgFUehWBO7UjZX2HbQvtArfKNptRtfsVpSYCuPxfbJrEUfwp8oeLa85%2Byst92%2FumOOePwYrgRcfgA1NcjL3lJ99x5TgBd%2BVbZfasgMIpywj%2FpMFsgkD5XNt9sjX%2FbMKG9ocEGOqUBqxdte9aWI4dNC9Nlxw3Py%2F9n7HXExXpX%2BJl55o3VEv5FFa5c%2FNrqgHFtYtkLTSLCo9df%2BhjvUIuUHm9I65BqJhvspCK5xlaZKuSNHCQ66elU8GdcWjK5GbpL4ybUhK4IqaGz%2BhTTn5YIfx0%2BEOFmPnfmqiHg2pgpxrMczEeSkGwuWazqf0HgwP0IJXD2aHG1IAHwRwWNexOixZj6m%2FXaKiwTGiov&X-Amz-Signature=7486d17fdc0d0c6ee296f212e3e317f73301f2ceaf3aaad6a7e1257c89eb62a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYA6CS6N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhYrXVsnaZnsKPPStP2QoaUUd2uWNth0J57bjrnxuoLQIgCnIDvIZrAwaFohMxIicdx5huGDCUCspHZTND2KjFiyAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDOJYwZ%2BtzxE5crJtyrcAyUIXsY85nyar5Dci4whBK6PC%2Bp8KbvZhWxPz7oAK%2FA%2BM1UyRkJjINxLJPgsiWqhNn8MaFPPMVIVV0dmyxdIfO%2F40XQESZQqA6ubujamblfMK%2B%2FEGjHwDxsl%2FYzEY%2BgX%2BZ5%2F%2B%2Bfc7VTj3GTq0dTzaVALElz4emZ8NUE4Pm9PVialKioszPFlp1crs4sI7yOFdFN4LcHEPU5MH3qYjb8hxNmIGZaDfjUpongTvxuWBO4C81SrawpUjTvolUsq8l4jF%2FVVzXRvfPpfhDTswYn%2F4x03afd4osJ4PNF0Ma7m6g888SPhB5f7FEb%2BrO1brw42JLZZxByNGkoKB0GbcnjCs8lZLuq9ri9ee%2F8TIlKSq5%2FCJLK%2FC6s66YNuO1EyrDKvWCnj9HB08yQTTyvZuU0iOSITqY506v5tk4z6sogY5pwgZ1LT4daWM%2BivMaVhmryxSkjLrw9YyJxqh47KZjKxtKirjI69%2BYNY%2BvJWTC2Ljkkn3ug5c1YrqfnJpwW1XrDSgFUehWBO7UjZX2HbQvtArfKNptRtfsVpSYCuPxfbJrEUfwp8oeLa85%2Byst92%2FumOOePwYrgRcfgA1NcjL3lJ99x5TgBd%2BVbZfasgMIpywj%2FpMFsgkD5XNt9sjX%2FbMKG9ocEGOqUBqxdte9aWI4dNC9Nlxw3Py%2F9n7HXExXpX%2BJl55o3VEv5FFa5c%2FNrqgHFtYtkLTSLCo9df%2BhjvUIuUHm9I65BqJhvspCK5xlaZKuSNHCQ66elU8GdcWjK5GbpL4ybUhK4IqaGz%2BhTTn5YIfx0%2BEOFmPnfmqiHg2pgpxrMczEeSkGwuWazqf0HgwP0IJXD2aHG1IAHwRwWNexOixZj6m%2FXaKiwTGiov&X-Amz-Signature=27e56eda5b9b6478752a2ec6e5dbfb64eb7bdbbd39b524410484e9c1daa621e3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYA6CS6N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhYrXVsnaZnsKPPStP2QoaUUd2uWNth0J57bjrnxuoLQIgCnIDvIZrAwaFohMxIicdx5huGDCUCspHZTND2KjFiyAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDOJYwZ%2BtzxE5crJtyrcAyUIXsY85nyar5Dci4whBK6PC%2Bp8KbvZhWxPz7oAK%2FA%2BM1UyRkJjINxLJPgsiWqhNn8MaFPPMVIVV0dmyxdIfO%2F40XQESZQqA6ubujamblfMK%2B%2FEGjHwDxsl%2FYzEY%2BgX%2BZ5%2F%2B%2Bfc7VTj3GTq0dTzaVALElz4emZ8NUE4Pm9PVialKioszPFlp1crs4sI7yOFdFN4LcHEPU5MH3qYjb8hxNmIGZaDfjUpongTvxuWBO4C81SrawpUjTvolUsq8l4jF%2FVVzXRvfPpfhDTswYn%2F4x03afd4osJ4PNF0Ma7m6g888SPhB5f7FEb%2BrO1brw42JLZZxByNGkoKB0GbcnjCs8lZLuq9ri9ee%2F8TIlKSq5%2FCJLK%2FC6s66YNuO1EyrDKvWCnj9HB08yQTTyvZuU0iOSITqY506v5tk4z6sogY5pwgZ1LT4daWM%2BivMaVhmryxSkjLrw9YyJxqh47KZjKxtKirjI69%2BYNY%2BvJWTC2Ljkkn3ug5c1YrqfnJpwW1XrDSgFUehWBO7UjZX2HbQvtArfKNptRtfsVpSYCuPxfbJrEUfwp8oeLa85%2Byst92%2FumOOePwYrgRcfgA1NcjL3lJ99x5TgBd%2BVbZfasgMIpywj%2FpMFsgkD5XNt9sjX%2FbMKG9ocEGOqUBqxdte9aWI4dNC9Nlxw3Py%2F9n7HXExXpX%2BJl55o3VEv5FFa5c%2FNrqgHFtYtkLTSLCo9df%2BhjvUIuUHm9I65BqJhvspCK5xlaZKuSNHCQ66elU8GdcWjK5GbpL4ybUhK4IqaGz%2BhTTn5YIfx0%2BEOFmPnfmqiHg2pgpxrMczEeSkGwuWazqf0HgwP0IJXD2aHG1IAHwRwWNexOixZj6m%2FXaKiwTGiov&X-Amz-Signature=b57e510ccb557e203d80a50639795c4b0f31961a77357ccc75ad21b1a9e5d0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYA6CS6N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhYrXVsnaZnsKPPStP2QoaUUd2uWNth0J57bjrnxuoLQIgCnIDvIZrAwaFohMxIicdx5huGDCUCspHZTND2KjFiyAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDOJYwZ%2BtzxE5crJtyrcAyUIXsY85nyar5Dci4whBK6PC%2Bp8KbvZhWxPz7oAK%2FA%2BM1UyRkJjINxLJPgsiWqhNn8MaFPPMVIVV0dmyxdIfO%2F40XQESZQqA6ubujamblfMK%2B%2FEGjHwDxsl%2FYzEY%2BgX%2BZ5%2F%2B%2Bfc7VTj3GTq0dTzaVALElz4emZ8NUE4Pm9PVialKioszPFlp1crs4sI7yOFdFN4LcHEPU5MH3qYjb8hxNmIGZaDfjUpongTvxuWBO4C81SrawpUjTvolUsq8l4jF%2FVVzXRvfPpfhDTswYn%2F4x03afd4osJ4PNF0Ma7m6g888SPhB5f7FEb%2BrO1brw42JLZZxByNGkoKB0GbcnjCs8lZLuq9ri9ee%2F8TIlKSq5%2FCJLK%2FC6s66YNuO1EyrDKvWCnj9HB08yQTTyvZuU0iOSITqY506v5tk4z6sogY5pwgZ1LT4daWM%2BivMaVhmryxSkjLrw9YyJxqh47KZjKxtKirjI69%2BYNY%2BvJWTC2Ljkkn3ug5c1YrqfnJpwW1XrDSgFUehWBO7UjZX2HbQvtArfKNptRtfsVpSYCuPxfbJrEUfwp8oeLa85%2Byst92%2FumOOePwYrgRcfgA1NcjL3lJ99x5TgBd%2BVbZfasgMIpywj%2FpMFsgkD5XNt9sjX%2FbMKG9ocEGOqUBqxdte9aWI4dNC9Nlxw3Py%2F9n7HXExXpX%2BJl55o3VEv5FFa5c%2FNrqgHFtYtkLTSLCo9df%2BhjvUIuUHm9I65BqJhvspCK5xlaZKuSNHCQ66elU8GdcWjK5GbpL4ybUhK4IqaGz%2BhTTn5YIfx0%2BEOFmPnfmqiHg2pgpxrMczEeSkGwuWazqf0HgwP0IJXD2aHG1IAHwRwWNexOixZj6m%2FXaKiwTGiov&X-Amz-Signature=9ea59b92919e3ffc0641755df596ad2a8855b78538b71889c5e7d312ef6a44b9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
