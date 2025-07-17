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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHQFUH2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID5dkxY%2BgyHhtLfOOQ%2BmcsqDs%2FS4Qt1RBVwW0e%2BoOxf5AiBgcaM3XfFNV%2BjzdcG7vvKN6E6uR3TNgseBBmIDRzUX0iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvLixu0KxbAOWjxgLKtwDSgylooUZyQyhdoXWb1L2XSUbYT4wosvWenH2oAR%2F0iw66vWcAqK2NmbIxv6lHPVbLx1KjQdDuDD3DcSzm6xew4pQlh%2FeDP3ibP3jynRauF0PHcbQKcHvbPxs0MYdBOotzIY1DuoIuLmiZ2LQlrWrQ2VIFWhnQuwuzrqXKHBtFCUvln0SrQJkaccu31iK1MIbY8GyceyGin9IniyhQeWqKtTdUkcOEyTiAxjihQuZXk9gnhFj1nw0eCROAFhjIeLcWgYLO0onz9rE%2Bsg2wd5ml%2B%2FrsfnXehA9yrA9WA55Kh%2Bs5KMxzVpnLgDbWc0WAZ1oYRauSdRG3nZ%2F6LF%2BbqUh2ButzrCt3zeuNL3nA7oGM5zElz9U97o9pUf4Z45e7QcMbrCxQUjzG3eBwkW3I5EN3RwfKuplVvKccFLe9ugnLq1ak0UU00zqkN%2FtXfUm9lUfYtt%2FTYvuZ%2Fc5VhiVW7qhXSpSjYKojaePwVyKNTvatAUk3NqTtf3HtV5iCBW3T8J9IK2X1Lt6yiRdIOp%2FvwrWDZMCGwb0DwZxuuxJlxJXE8Gocfaphpog1tB5Pcsvbtz2a9T6D3R2Whkic3eCTy02OW0R6CpU%2FZvVTt4M4EJHD%2Bu8UoY5OaPWtsvvFw0wlfvlwwY6pgGtpHmB9HZrE%2BzTaGpcAuaiY4iQvLPsyA6T%2FCUSg8pl9VN4Qd4zqvS7%2FfIthcdynQDEgEy8FZIDsW2OlBjMVi%2BxLJDzWuqHpMPC8HnH5x6pbKbuTM%2FP7bdH44L0XudVVMJTdDe6RTMS0gtVQCn%2FwwaJLZL%2BEbJiadBlqU8%2BZxbvI2bf18ZbDwWUjMMn5B32OVCpeWBGIbD0QRwjC%2BA2%2FaEY4OlMahuS&X-Amz-Signature=436d6e03d48d933bc86a3a15ffa6940117d3c5eee30b340f06f2b6fdd3e8a61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHQFUH2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID5dkxY%2BgyHhtLfOOQ%2BmcsqDs%2FS4Qt1RBVwW0e%2BoOxf5AiBgcaM3XfFNV%2BjzdcG7vvKN6E6uR3TNgseBBmIDRzUX0iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvLixu0KxbAOWjxgLKtwDSgylooUZyQyhdoXWb1L2XSUbYT4wosvWenH2oAR%2F0iw66vWcAqK2NmbIxv6lHPVbLx1KjQdDuDD3DcSzm6xew4pQlh%2FeDP3ibP3jynRauF0PHcbQKcHvbPxs0MYdBOotzIY1DuoIuLmiZ2LQlrWrQ2VIFWhnQuwuzrqXKHBtFCUvln0SrQJkaccu31iK1MIbY8GyceyGin9IniyhQeWqKtTdUkcOEyTiAxjihQuZXk9gnhFj1nw0eCROAFhjIeLcWgYLO0onz9rE%2Bsg2wd5ml%2B%2FrsfnXehA9yrA9WA55Kh%2Bs5KMxzVpnLgDbWc0WAZ1oYRauSdRG3nZ%2F6LF%2BbqUh2ButzrCt3zeuNL3nA7oGM5zElz9U97o9pUf4Z45e7QcMbrCxQUjzG3eBwkW3I5EN3RwfKuplVvKccFLe9ugnLq1ak0UU00zqkN%2FtXfUm9lUfYtt%2FTYvuZ%2Fc5VhiVW7qhXSpSjYKojaePwVyKNTvatAUk3NqTtf3HtV5iCBW3T8J9IK2X1Lt6yiRdIOp%2FvwrWDZMCGwb0DwZxuuxJlxJXE8Gocfaphpog1tB5Pcsvbtz2a9T6D3R2Whkic3eCTy02OW0R6CpU%2FZvVTt4M4EJHD%2Bu8UoY5OaPWtsvvFw0wlfvlwwY6pgGtpHmB9HZrE%2BzTaGpcAuaiY4iQvLPsyA6T%2FCUSg8pl9VN4Qd4zqvS7%2FfIthcdynQDEgEy8FZIDsW2OlBjMVi%2BxLJDzWuqHpMPC8HnH5x6pbKbuTM%2FP7bdH44L0XudVVMJTdDe6RTMS0gtVQCn%2FwwaJLZL%2BEbJiadBlqU8%2BZxbvI2bf18ZbDwWUjMMn5B32OVCpeWBGIbD0QRwjC%2BA2%2FaEY4OlMahuS&X-Amz-Signature=62d7b6e7f4f7cd8397bce386a0c59b483fbbdfb3aff52ccde8b98cae9c509ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHQFUH2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID5dkxY%2BgyHhtLfOOQ%2BmcsqDs%2FS4Qt1RBVwW0e%2BoOxf5AiBgcaM3XfFNV%2BjzdcG7vvKN6E6uR3TNgseBBmIDRzUX0iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvLixu0KxbAOWjxgLKtwDSgylooUZyQyhdoXWb1L2XSUbYT4wosvWenH2oAR%2F0iw66vWcAqK2NmbIxv6lHPVbLx1KjQdDuDD3DcSzm6xew4pQlh%2FeDP3ibP3jynRauF0PHcbQKcHvbPxs0MYdBOotzIY1DuoIuLmiZ2LQlrWrQ2VIFWhnQuwuzrqXKHBtFCUvln0SrQJkaccu31iK1MIbY8GyceyGin9IniyhQeWqKtTdUkcOEyTiAxjihQuZXk9gnhFj1nw0eCROAFhjIeLcWgYLO0onz9rE%2Bsg2wd5ml%2B%2FrsfnXehA9yrA9WA55Kh%2Bs5KMxzVpnLgDbWc0WAZ1oYRauSdRG3nZ%2F6LF%2BbqUh2ButzrCt3zeuNL3nA7oGM5zElz9U97o9pUf4Z45e7QcMbrCxQUjzG3eBwkW3I5EN3RwfKuplVvKccFLe9ugnLq1ak0UU00zqkN%2FtXfUm9lUfYtt%2FTYvuZ%2Fc5VhiVW7qhXSpSjYKojaePwVyKNTvatAUk3NqTtf3HtV5iCBW3T8J9IK2X1Lt6yiRdIOp%2FvwrWDZMCGwb0DwZxuuxJlxJXE8Gocfaphpog1tB5Pcsvbtz2a9T6D3R2Whkic3eCTy02OW0R6CpU%2FZvVTt4M4EJHD%2Bu8UoY5OaPWtsvvFw0wlfvlwwY6pgGtpHmB9HZrE%2BzTaGpcAuaiY4iQvLPsyA6T%2FCUSg8pl9VN4Qd4zqvS7%2FfIthcdynQDEgEy8FZIDsW2OlBjMVi%2BxLJDzWuqHpMPC8HnH5x6pbKbuTM%2FP7bdH44L0XudVVMJTdDe6RTMS0gtVQCn%2FwwaJLZL%2BEbJiadBlqU8%2BZxbvI2bf18ZbDwWUjMMn5B32OVCpeWBGIbD0QRwjC%2BA2%2FaEY4OlMahuS&X-Amz-Signature=05825802c175ca4fe9402710ef87a34657a988d75b9adcb9d7be4ba03702fca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHQFUH2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID5dkxY%2BgyHhtLfOOQ%2BmcsqDs%2FS4Qt1RBVwW0e%2BoOxf5AiBgcaM3XfFNV%2BjzdcG7vvKN6E6uR3TNgseBBmIDRzUX0iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvLixu0KxbAOWjxgLKtwDSgylooUZyQyhdoXWb1L2XSUbYT4wosvWenH2oAR%2F0iw66vWcAqK2NmbIxv6lHPVbLx1KjQdDuDD3DcSzm6xew4pQlh%2FeDP3ibP3jynRauF0PHcbQKcHvbPxs0MYdBOotzIY1DuoIuLmiZ2LQlrWrQ2VIFWhnQuwuzrqXKHBtFCUvln0SrQJkaccu31iK1MIbY8GyceyGin9IniyhQeWqKtTdUkcOEyTiAxjihQuZXk9gnhFj1nw0eCROAFhjIeLcWgYLO0onz9rE%2Bsg2wd5ml%2B%2FrsfnXehA9yrA9WA55Kh%2Bs5KMxzVpnLgDbWc0WAZ1oYRauSdRG3nZ%2F6LF%2BbqUh2ButzrCt3zeuNL3nA7oGM5zElz9U97o9pUf4Z45e7QcMbrCxQUjzG3eBwkW3I5EN3RwfKuplVvKccFLe9ugnLq1ak0UU00zqkN%2FtXfUm9lUfYtt%2FTYvuZ%2Fc5VhiVW7qhXSpSjYKojaePwVyKNTvatAUk3NqTtf3HtV5iCBW3T8J9IK2X1Lt6yiRdIOp%2FvwrWDZMCGwb0DwZxuuxJlxJXE8Gocfaphpog1tB5Pcsvbtz2a9T6D3R2Whkic3eCTy02OW0R6CpU%2FZvVTt4M4EJHD%2Bu8UoY5OaPWtsvvFw0wlfvlwwY6pgGtpHmB9HZrE%2BzTaGpcAuaiY4iQvLPsyA6T%2FCUSg8pl9VN4Qd4zqvS7%2FfIthcdynQDEgEy8FZIDsW2OlBjMVi%2BxLJDzWuqHpMPC8HnH5x6pbKbuTM%2FP7bdH44L0XudVVMJTdDe6RTMS0gtVQCn%2FwwaJLZL%2BEbJiadBlqU8%2BZxbvI2bf18ZbDwWUjMMn5B32OVCpeWBGIbD0QRwjC%2BA2%2FaEY4OlMahuS&X-Amz-Signature=b6afdeffc29227b2abd265a74ec0c85c590edcc6f79cfd61656eba7e0640f2d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHQFUH2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID5dkxY%2BgyHhtLfOOQ%2BmcsqDs%2FS4Qt1RBVwW0e%2BoOxf5AiBgcaM3XfFNV%2BjzdcG7vvKN6E6uR3TNgseBBmIDRzUX0iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvLixu0KxbAOWjxgLKtwDSgylooUZyQyhdoXWb1L2XSUbYT4wosvWenH2oAR%2F0iw66vWcAqK2NmbIxv6lHPVbLx1KjQdDuDD3DcSzm6xew4pQlh%2FeDP3ibP3jynRauF0PHcbQKcHvbPxs0MYdBOotzIY1DuoIuLmiZ2LQlrWrQ2VIFWhnQuwuzrqXKHBtFCUvln0SrQJkaccu31iK1MIbY8GyceyGin9IniyhQeWqKtTdUkcOEyTiAxjihQuZXk9gnhFj1nw0eCROAFhjIeLcWgYLO0onz9rE%2Bsg2wd5ml%2B%2FrsfnXehA9yrA9WA55Kh%2Bs5KMxzVpnLgDbWc0WAZ1oYRauSdRG3nZ%2F6LF%2BbqUh2ButzrCt3zeuNL3nA7oGM5zElz9U97o9pUf4Z45e7QcMbrCxQUjzG3eBwkW3I5EN3RwfKuplVvKccFLe9ugnLq1ak0UU00zqkN%2FtXfUm9lUfYtt%2FTYvuZ%2Fc5VhiVW7qhXSpSjYKojaePwVyKNTvatAUk3NqTtf3HtV5iCBW3T8J9IK2X1Lt6yiRdIOp%2FvwrWDZMCGwb0DwZxuuxJlxJXE8Gocfaphpog1tB5Pcsvbtz2a9T6D3R2Whkic3eCTy02OW0R6CpU%2FZvVTt4M4EJHD%2Bu8UoY5OaPWtsvvFw0wlfvlwwY6pgGtpHmB9HZrE%2BzTaGpcAuaiY4iQvLPsyA6T%2FCUSg8pl9VN4Qd4zqvS7%2FfIthcdynQDEgEy8FZIDsW2OlBjMVi%2BxLJDzWuqHpMPC8HnH5x6pbKbuTM%2FP7bdH44L0XudVVMJTdDe6RTMS0gtVQCn%2FwwaJLZL%2BEbJiadBlqU8%2BZxbvI2bf18ZbDwWUjMMn5B32OVCpeWBGIbD0QRwjC%2BA2%2FaEY4OlMahuS&X-Amz-Signature=462b62ad1057d433d6542703572400436fdec9babb4d639231136d99b3405d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHQFUH2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID5dkxY%2BgyHhtLfOOQ%2BmcsqDs%2FS4Qt1RBVwW0e%2BoOxf5AiBgcaM3XfFNV%2BjzdcG7vvKN6E6uR3TNgseBBmIDRzUX0iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvLixu0KxbAOWjxgLKtwDSgylooUZyQyhdoXWb1L2XSUbYT4wosvWenH2oAR%2F0iw66vWcAqK2NmbIxv6lHPVbLx1KjQdDuDD3DcSzm6xew4pQlh%2FeDP3ibP3jynRauF0PHcbQKcHvbPxs0MYdBOotzIY1DuoIuLmiZ2LQlrWrQ2VIFWhnQuwuzrqXKHBtFCUvln0SrQJkaccu31iK1MIbY8GyceyGin9IniyhQeWqKtTdUkcOEyTiAxjihQuZXk9gnhFj1nw0eCROAFhjIeLcWgYLO0onz9rE%2Bsg2wd5ml%2B%2FrsfnXehA9yrA9WA55Kh%2Bs5KMxzVpnLgDbWc0WAZ1oYRauSdRG3nZ%2F6LF%2BbqUh2ButzrCt3zeuNL3nA7oGM5zElz9U97o9pUf4Z45e7QcMbrCxQUjzG3eBwkW3I5EN3RwfKuplVvKccFLe9ugnLq1ak0UU00zqkN%2FtXfUm9lUfYtt%2FTYvuZ%2Fc5VhiVW7qhXSpSjYKojaePwVyKNTvatAUk3NqTtf3HtV5iCBW3T8J9IK2X1Lt6yiRdIOp%2FvwrWDZMCGwb0DwZxuuxJlxJXE8Gocfaphpog1tB5Pcsvbtz2a9T6D3R2Whkic3eCTy02OW0R6CpU%2FZvVTt4M4EJHD%2Bu8UoY5OaPWtsvvFw0wlfvlwwY6pgGtpHmB9HZrE%2BzTaGpcAuaiY4iQvLPsyA6T%2FCUSg8pl9VN4Qd4zqvS7%2FfIthcdynQDEgEy8FZIDsW2OlBjMVi%2BxLJDzWuqHpMPC8HnH5x6pbKbuTM%2FP7bdH44L0XudVVMJTdDe6RTMS0gtVQCn%2FwwaJLZL%2BEbJiadBlqU8%2BZxbvI2bf18ZbDwWUjMMn5B32OVCpeWBGIbD0QRwjC%2BA2%2FaEY4OlMahuS&X-Amz-Signature=caa404a503327442201023641cb06d7f266bc9e35ecbda36958f33f5bb52a7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHQFUH2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID5dkxY%2BgyHhtLfOOQ%2BmcsqDs%2FS4Qt1RBVwW0e%2BoOxf5AiBgcaM3XfFNV%2BjzdcG7vvKN6E6uR3TNgseBBmIDRzUX0iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvLixu0KxbAOWjxgLKtwDSgylooUZyQyhdoXWb1L2XSUbYT4wosvWenH2oAR%2F0iw66vWcAqK2NmbIxv6lHPVbLx1KjQdDuDD3DcSzm6xew4pQlh%2FeDP3ibP3jynRauF0PHcbQKcHvbPxs0MYdBOotzIY1DuoIuLmiZ2LQlrWrQ2VIFWhnQuwuzrqXKHBtFCUvln0SrQJkaccu31iK1MIbY8GyceyGin9IniyhQeWqKtTdUkcOEyTiAxjihQuZXk9gnhFj1nw0eCROAFhjIeLcWgYLO0onz9rE%2Bsg2wd5ml%2B%2FrsfnXehA9yrA9WA55Kh%2Bs5KMxzVpnLgDbWc0WAZ1oYRauSdRG3nZ%2F6LF%2BbqUh2ButzrCt3zeuNL3nA7oGM5zElz9U97o9pUf4Z45e7QcMbrCxQUjzG3eBwkW3I5EN3RwfKuplVvKccFLe9ugnLq1ak0UU00zqkN%2FtXfUm9lUfYtt%2FTYvuZ%2Fc5VhiVW7qhXSpSjYKojaePwVyKNTvatAUk3NqTtf3HtV5iCBW3T8J9IK2X1Lt6yiRdIOp%2FvwrWDZMCGwb0DwZxuuxJlxJXE8Gocfaphpog1tB5Pcsvbtz2a9T6D3R2Whkic3eCTy02OW0R6CpU%2FZvVTt4M4EJHD%2Bu8UoY5OaPWtsvvFw0wlfvlwwY6pgGtpHmB9HZrE%2BzTaGpcAuaiY4iQvLPsyA6T%2FCUSg8pl9VN4Qd4zqvS7%2FfIthcdynQDEgEy8FZIDsW2OlBjMVi%2BxLJDzWuqHpMPC8HnH5x6pbKbuTM%2FP7bdH44L0XudVVMJTdDe6RTMS0gtVQCn%2FwwaJLZL%2BEbJiadBlqU8%2BZxbvI2bf18ZbDwWUjMMn5B32OVCpeWBGIbD0QRwjC%2BA2%2FaEY4OlMahuS&X-Amz-Signature=772918a374a615bde54fb233be8a57af4a348d28cfdceb5849f15ad7e24b30b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
