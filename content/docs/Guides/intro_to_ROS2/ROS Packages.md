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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6T5VIBP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bmxb1RjMKshKzZMYYIlFa6eKER9bbUh38OfOX9Dyx2AiBCsEUi0KV%2FqYOuWwBXUZt3TIJEA0mNR8r3x%2FQkcL0S5yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh2Mqu3VQawVL9li0KtwD7kiYuSoWYZzkEr6IWDCtcxOJt5D5BQJA%2BK5dpzwtuwz2W0w%2FKAbk79XCO0B6iIu70XK6ebMutll5Vs0YE5Bj4AmT4%2BvOwl5cj7eEwTVLgWRpkxGH7Wo5oV5ADp5w5ZDXMskJUfD%2FPgmZYlEI%2FsX9UiONRQIdjdpKpKgl83yHnbIe%2FupX9fVbKwJfDlJ2SKWmFQkxmqSsyeqg%2FqagLRX3lQ%2BbC%2FIw9rWnhiw4NTUOeASAc7qQucCNCANf77aseB29bJhMl4OQRsKcxWWFRpmBIRXH5mNVFnqu0PD%2FO7OG1JWchfah25u45LX%2BeAKV8SUhxuJ9jghwID%2BPgai7JoYeN9EE0INQelfhgGTHBT%2BJSAXZYaNhQ%2Fl0bv8y4nroyNokBZ38z6rLGqILeTfA2B1WXH1C5GfeqonCxWbxRGnNVxYN7bRlPMQAjDBhm9auyCv6L8OB8KATMqbXKwYHMlfLgfh8NM7hL9mJ3reoQRavQzHHs8bqLDP06Hj2yrDFlSlWOZ7EKyUyyvERRHXkcidJWmglEnbVDc13%2FLvJE0xjm6qTj%2BXZHzgLgCCvOyN1U1yXpck%2BuQvlmj9jRCI4jNmlQqTQmdt2PZWmgeXKCHltE0edLQvhMEtayWSDgf8w4oaMwAY6pgEe5lzMn5UamkbrNLpayOuat4S9sEy4G%2FsTmPdsUU4IADHKWF4B3OwCcI0J2SrPg8ikWaXYMivr%2FTys19YayC%2FNPP1TBiARifZmhfIir8pe5qGZJ4WvLsCs9wD0CHnRJgDdnchq0iswnkjZraD2ExVZSP08Qkb%2FG%2FU6DTIMZz%2FJgTAvUL1bimvwFFc0VfP5K8yPdIgWBrLTi2I8UTOY1hI4zttEYxIg&X-Amz-Signature=ced4fe20cc45bb9e01683bb6fc20847dbf5afe5f999e4c64186efcdb1ce8b957&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6T5VIBP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bmxb1RjMKshKzZMYYIlFa6eKER9bbUh38OfOX9Dyx2AiBCsEUi0KV%2FqYOuWwBXUZt3TIJEA0mNR8r3x%2FQkcL0S5yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh2Mqu3VQawVL9li0KtwD7kiYuSoWYZzkEr6IWDCtcxOJt5D5BQJA%2BK5dpzwtuwz2W0w%2FKAbk79XCO0B6iIu70XK6ebMutll5Vs0YE5Bj4AmT4%2BvOwl5cj7eEwTVLgWRpkxGH7Wo5oV5ADp5w5ZDXMskJUfD%2FPgmZYlEI%2FsX9UiONRQIdjdpKpKgl83yHnbIe%2FupX9fVbKwJfDlJ2SKWmFQkxmqSsyeqg%2FqagLRX3lQ%2BbC%2FIw9rWnhiw4NTUOeASAc7qQucCNCANf77aseB29bJhMl4OQRsKcxWWFRpmBIRXH5mNVFnqu0PD%2FO7OG1JWchfah25u45LX%2BeAKV8SUhxuJ9jghwID%2BPgai7JoYeN9EE0INQelfhgGTHBT%2BJSAXZYaNhQ%2Fl0bv8y4nroyNokBZ38z6rLGqILeTfA2B1WXH1C5GfeqonCxWbxRGnNVxYN7bRlPMQAjDBhm9auyCv6L8OB8KATMqbXKwYHMlfLgfh8NM7hL9mJ3reoQRavQzHHs8bqLDP06Hj2yrDFlSlWOZ7EKyUyyvERRHXkcidJWmglEnbVDc13%2FLvJE0xjm6qTj%2BXZHzgLgCCvOyN1U1yXpck%2BuQvlmj9jRCI4jNmlQqTQmdt2PZWmgeXKCHltE0edLQvhMEtayWSDgf8w4oaMwAY6pgEe5lzMn5UamkbrNLpayOuat4S9sEy4G%2FsTmPdsUU4IADHKWF4B3OwCcI0J2SrPg8ikWaXYMivr%2FTys19YayC%2FNPP1TBiARifZmhfIir8pe5qGZJ4WvLsCs9wD0CHnRJgDdnchq0iswnkjZraD2ExVZSP08Qkb%2FG%2FU6DTIMZz%2FJgTAvUL1bimvwFFc0VfP5K8yPdIgWBrLTi2I8UTOY1hI4zttEYxIg&X-Amz-Signature=582220d22f2550b07ab7d071b311ed80dd90c26e62cafeb3e10e95bc5fabf4cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6T5VIBP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bmxb1RjMKshKzZMYYIlFa6eKER9bbUh38OfOX9Dyx2AiBCsEUi0KV%2FqYOuWwBXUZt3TIJEA0mNR8r3x%2FQkcL0S5yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh2Mqu3VQawVL9li0KtwD7kiYuSoWYZzkEr6IWDCtcxOJt5D5BQJA%2BK5dpzwtuwz2W0w%2FKAbk79XCO0B6iIu70XK6ebMutll5Vs0YE5Bj4AmT4%2BvOwl5cj7eEwTVLgWRpkxGH7Wo5oV5ADp5w5ZDXMskJUfD%2FPgmZYlEI%2FsX9UiONRQIdjdpKpKgl83yHnbIe%2FupX9fVbKwJfDlJ2SKWmFQkxmqSsyeqg%2FqagLRX3lQ%2BbC%2FIw9rWnhiw4NTUOeASAc7qQucCNCANf77aseB29bJhMl4OQRsKcxWWFRpmBIRXH5mNVFnqu0PD%2FO7OG1JWchfah25u45LX%2BeAKV8SUhxuJ9jghwID%2BPgai7JoYeN9EE0INQelfhgGTHBT%2BJSAXZYaNhQ%2Fl0bv8y4nroyNokBZ38z6rLGqILeTfA2B1WXH1C5GfeqonCxWbxRGnNVxYN7bRlPMQAjDBhm9auyCv6L8OB8KATMqbXKwYHMlfLgfh8NM7hL9mJ3reoQRavQzHHs8bqLDP06Hj2yrDFlSlWOZ7EKyUyyvERRHXkcidJWmglEnbVDc13%2FLvJE0xjm6qTj%2BXZHzgLgCCvOyN1U1yXpck%2BuQvlmj9jRCI4jNmlQqTQmdt2PZWmgeXKCHltE0edLQvhMEtayWSDgf8w4oaMwAY6pgEe5lzMn5UamkbrNLpayOuat4S9sEy4G%2FsTmPdsUU4IADHKWF4B3OwCcI0J2SrPg8ikWaXYMivr%2FTys19YayC%2FNPP1TBiARifZmhfIir8pe5qGZJ4WvLsCs9wD0CHnRJgDdnchq0iswnkjZraD2ExVZSP08Qkb%2FG%2FU6DTIMZz%2FJgTAvUL1bimvwFFc0VfP5K8yPdIgWBrLTi2I8UTOY1hI4zttEYxIg&X-Amz-Signature=0c3af1696ed003597e4a70726123372ef70ceccb891d66598ebf94d3168f2583&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6T5VIBP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bmxb1RjMKshKzZMYYIlFa6eKER9bbUh38OfOX9Dyx2AiBCsEUi0KV%2FqYOuWwBXUZt3TIJEA0mNR8r3x%2FQkcL0S5yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh2Mqu3VQawVL9li0KtwD7kiYuSoWYZzkEr6IWDCtcxOJt5D5BQJA%2BK5dpzwtuwz2W0w%2FKAbk79XCO0B6iIu70XK6ebMutll5Vs0YE5Bj4AmT4%2BvOwl5cj7eEwTVLgWRpkxGH7Wo5oV5ADp5w5ZDXMskJUfD%2FPgmZYlEI%2FsX9UiONRQIdjdpKpKgl83yHnbIe%2FupX9fVbKwJfDlJ2SKWmFQkxmqSsyeqg%2FqagLRX3lQ%2BbC%2FIw9rWnhiw4NTUOeASAc7qQucCNCANf77aseB29bJhMl4OQRsKcxWWFRpmBIRXH5mNVFnqu0PD%2FO7OG1JWchfah25u45LX%2BeAKV8SUhxuJ9jghwID%2BPgai7JoYeN9EE0INQelfhgGTHBT%2BJSAXZYaNhQ%2Fl0bv8y4nroyNokBZ38z6rLGqILeTfA2B1WXH1C5GfeqonCxWbxRGnNVxYN7bRlPMQAjDBhm9auyCv6L8OB8KATMqbXKwYHMlfLgfh8NM7hL9mJ3reoQRavQzHHs8bqLDP06Hj2yrDFlSlWOZ7EKyUyyvERRHXkcidJWmglEnbVDc13%2FLvJE0xjm6qTj%2BXZHzgLgCCvOyN1U1yXpck%2BuQvlmj9jRCI4jNmlQqTQmdt2PZWmgeXKCHltE0edLQvhMEtayWSDgf8w4oaMwAY6pgEe5lzMn5UamkbrNLpayOuat4S9sEy4G%2FsTmPdsUU4IADHKWF4B3OwCcI0J2SrPg8ikWaXYMivr%2FTys19YayC%2FNPP1TBiARifZmhfIir8pe5qGZJ4WvLsCs9wD0CHnRJgDdnchq0iswnkjZraD2ExVZSP08Qkb%2FG%2FU6DTIMZz%2FJgTAvUL1bimvwFFc0VfP5K8yPdIgWBrLTi2I8UTOY1hI4zttEYxIg&X-Amz-Signature=3a262a572613cc338b84f1368c7f2e2d380e2bbfe74ed8bf95e7e84871116eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6T5VIBP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bmxb1RjMKshKzZMYYIlFa6eKER9bbUh38OfOX9Dyx2AiBCsEUi0KV%2FqYOuWwBXUZt3TIJEA0mNR8r3x%2FQkcL0S5yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh2Mqu3VQawVL9li0KtwD7kiYuSoWYZzkEr6IWDCtcxOJt5D5BQJA%2BK5dpzwtuwz2W0w%2FKAbk79XCO0B6iIu70XK6ebMutll5Vs0YE5Bj4AmT4%2BvOwl5cj7eEwTVLgWRpkxGH7Wo5oV5ADp5w5ZDXMskJUfD%2FPgmZYlEI%2FsX9UiONRQIdjdpKpKgl83yHnbIe%2FupX9fVbKwJfDlJ2SKWmFQkxmqSsyeqg%2FqagLRX3lQ%2BbC%2FIw9rWnhiw4NTUOeASAc7qQucCNCANf77aseB29bJhMl4OQRsKcxWWFRpmBIRXH5mNVFnqu0PD%2FO7OG1JWchfah25u45LX%2BeAKV8SUhxuJ9jghwID%2BPgai7JoYeN9EE0INQelfhgGTHBT%2BJSAXZYaNhQ%2Fl0bv8y4nroyNokBZ38z6rLGqILeTfA2B1WXH1C5GfeqonCxWbxRGnNVxYN7bRlPMQAjDBhm9auyCv6L8OB8KATMqbXKwYHMlfLgfh8NM7hL9mJ3reoQRavQzHHs8bqLDP06Hj2yrDFlSlWOZ7EKyUyyvERRHXkcidJWmglEnbVDc13%2FLvJE0xjm6qTj%2BXZHzgLgCCvOyN1U1yXpck%2BuQvlmj9jRCI4jNmlQqTQmdt2PZWmgeXKCHltE0edLQvhMEtayWSDgf8w4oaMwAY6pgEe5lzMn5UamkbrNLpayOuat4S9sEy4G%2FsTmPdsUU4IADHKWF4B3OwCcI0J2SrPg8ikWaXYMivr%2FTys19YayC%2FNPP1TBiARifZmhfIir8pe5qGZJ4WvLsCs9wD0CHnRJgDdnchq0iswnkjZraD2ExVZSP08Qkb%2FG%2FU6DTIMZz%2FJgTAvUL1bimvwFFc0VfP5K8yPdIgWBrLTi2I8UTOY1hI4zttEYxIg&X-Amz-Signature=2414b914645cd0ddb5b7ace65b9e729fc981c79eabe6d5f0423e274d013475e3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6T5VIBP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bmxb1RjMKshKzZMYYIlFa6eKER9bbUh38OfOX9Dyx2AiBCsEUi0KV%2FqYOuWwBXUZt3TIJEA0mNR8r3x%2FQkcL0S5yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh2Mqu3VQawVL9li0KtwD7kiYuSoWYZzkEr6IWDCtcxOJt5D5BQJA%2BK5dpzwtuwz2W0w%2FKAbk79XCO0B6iIu70XK6ebMutll5Vs0YE5Bj4AmT4%2BvOwl5cj7eEwTVLgWRpkxGH7Wo5oV5ADp5w5ZDXMskJUfD%2FPgmZYlEI%2FsX9UiONRQIdjdpKpKgl83yHnbIe%2FupX9fVbKwJfDlJ2SKWmFQkxmqSsyeqg%2FqagLRX3lQ%2BbC%2FIw9rWnhiw4NTUOeASAc7qQucCNCANf77aseB29bJhMl4OQRsKcxWWFRpmBIRXH5mNVFnqu0PD%2FO7OG1JWchfah25u45LX%2BeAKV8SUhxuJ9jghwID%2BPgai7JoYeN9EE0INQelfhgGTHBT%2BJSAXZYaNhQ%2Fl0bv8y4nroyNokBZ38z6rLGqILeTfA2B1WXH1C5GfeqonCxWbxRGnNVxYN7bRlPMQAjDBhm9auyCv6L8OB8KATMqbXKwYHMlfLgfh8NM7hL9mJ3reoQRavQzHHs8bqLDP06Hj2yrDFlSlWOZ7EKyUyyvERRHXkcidJWmglEnbVDc13%2FLvJE0xjm6qTj%2BXZHzgLgCCvOyN1U1yXpck%2BuQvlmj9jRCI4jNmlQqTQmdt2PZWmgeXKCHltE0edLQvhMEtayWSDgf8w4oaMwAY6pgEe5lzMn5UamkbrNLpayOuat4S9sEy4G%2FsTmPdsUU4IADHKWF4B3OwCcI0J2SrPg8ikWaXYMivr%2FTys19YayC%2FNPP1TBiARifZmhfIir8pe5qGZJ4WvLsCs9wD0CHnRJgDdnchq0iswnkjZraD2ExVZSP08Qkb%2FG%2FU6DTIMZz%2FJgTAvUL1bimvwFFc0VfP5K8yPdIgWBrLTi2I8UTOY1hI4zttEYxIg&X-Amz-Signature=b11cb628e75fad80b85b863ef3eaac9233aa8ee2a5cc2f41c98c0792899fc665&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6T5VIBP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bmxb1RjMKshKzZMYYIlFa6eKER9bbUh38OfOX9Dyx2AiBCsEUi0KV%2FqYOuWwBXUZt3TIJEA0mNR8r3x%2FQkcL0S5yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh2Mqu3VQawVL9li0KtwD7kiYuSoWYZzkEr6IWDCtcxOJt5D5BQJA%2BK5dpzwtuwz2W0w%2FKAbk79XCO0B6iIu70XK6ebMutll5Vs0YE5Bj4AmT4%2BvOwl5cj7eEwTVLgWRpkxGH7Wo5oV5ADp5w5ZDXMskJUfD%2FPgmZYlEI%2FsX9UiONRQIdjdpKpKgl83yHnbIe%2FupX9fVbKwJfDlJ2SKWmFQkxmqSsyeqg%2FqagLRX3lQ%2BbC%2FIw9rWnhiw4NTUOeASAc7qQucCNCANf77aseB29bJhMl4OQRsKcxWWFRpmBIRXH5mNVFnqu0PD%2FO7OG1JWchfah25u45LX%2BeAKV8SUhxuJ9jghwID%2BPgai7JoYeN9EE0INQelfhgGTHBT%2BJSAXZYaNhQ%2Fl0bv8y4nroyNokBZ38z6rLGqILeTfA2B1WXH1C5GfeqonCxWbxRGnNVxYN7bRlPMQAjDBhm9auyCv6L8OB8KATMqbXKwYHMlfLgfh8NM7hL9mJ3reoQRavQzHHs8bqLDP06Hj2yrDFlSlWOZ7EKyUyyvERRHXkcidJWmglEnbVDc13%2FLvJE0xjm6qTj%2BXZHzgLgCCvOyN1U1yXpck%2BuQvlmj9jRCI4jNmlQqTQmdt2PZWmgeXKCHltE0edLQvhMEtayWSDgf8w4oaMwAY6pgEe5lzMn5UamkbrNLpayOuat4S9sEy4G%2FsTmPdsUU4IADHKWF4B3OwCcI0J2SrPg8ikWaXYMivr%2FTys19YayC%2FNPP1TBiARifZmhfIir8pe5qGZJ4WvLsCs9wD0CHnRJgDdnchq0iswnkjZraD2ExVZSP08Qkb%2FG%2FU6DTIMZz%2FJgTAvUL1bimvwFFc0VfP5K8yPdIgWBrLTi2I8UTOY1hI4zttEYxIg&X-Amz-Signature=9e2ac718e18b37a4737954d545cd12f154320319ec731aa00c4f4fe9c30b2da7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
