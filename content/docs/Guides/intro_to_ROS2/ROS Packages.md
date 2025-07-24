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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ74P3J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDoFRnggPj6t6%2BgL4lRjOGi%2Fgb1uRAKHqbZA9U4V36%2FGAIhAKe8G9O37V3a%2F2%2BTluDx35Pce8tqQ3GTtvhd0tfVNatKKv8DCC4QABoMNjM3NDIzMTgzODA1Igw1KgLupFijrsquPEIq3AOSX2JJonpp6Hn%2FM7%2BIGNFVSqLEKyScQclkRA0HLL7sCHRlHSCMaGBiNHiDo0e%2BkUoWQIRLLUfZBVr3yuMCJpdaNkbJ2Mj2xbM7utyF9RBNOERF%2F8r%2Fc%2FLl6bPIx1hYip58aendkKd0DxZ%2FbyUem2Sok8YfkdHAYe%2B325QjwLUW6avNtMphC0PbaoEbTXq9M0tKTBlCB2x1NEgmDjMUNT4bA3k%2FWK94PJY9l%2B7xGiPZ4R2g%2Bq3D7ohyeY7rud0l3lH%2Bbr8Z%2B45PqPbakRwT%2FxuQB84x87rf2kUSHMzrJ5jWgEVFTqT%2BV6xXgRBozz9YBzv5Dbk0iPJSP5I946ws5cqWMH%2Fc6JDupEzq8s0jtEBvtc%2FdXsjA4u%2FJr39kW7dvNAWVPVbQ4pr2c4eCMRu%2Fh0TFfobLIGKsM6ZKVjDcieE2LpCMv7fE6cbl3dOi%2BSi%2BFAc%2FOCS6zNme6UkxVgl5kNLKmaOetn1pUiQxJfQHo8t5wB5YMjhzCjzRX74oiEoEa0waf8TuIDwXhIoDysMN%2FFmWX2wd3WeTQh3VtWweNauIfwlkU4X%2B0VXg2DEPV%2B6KDMqJZ5Q3Q6eTRYV3JZzp7YHxWNBHz%2FdvV2M6cfVfz7vNRuzEJFVZmNCmP8paRjDJ2YjEBjqkAXO%2BntxoWvh0e39Ll%2By%2FkloO2zkpgm6DNBQ%2FniOBeFCLs7zID9uM2NWHRzcRcXgfUuSYgRFS632SmDbb%2FBIxiUHslqCTWQb%2FETQ%2BYmDVF5qR5xezQ6EdBRUF%2FrGiRoCYDZdOavQbaqF1dMIlw8LZ%2FVM17ZLwQBnkR8fjGEYYWSmu34%2BXM6lcxhVHjlfLVDYYOW%2BZRatr4AUftMhcrqwPmMoBvAPP&X-Amz-Signature=8191f97084f128cfd1eafaaa47da5e13145e65e9391bb074206805c544639ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ74P3J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDoFRnggPj6t6%2BgL4lRjOGi%2Fgb1uRAKHqbZA9U4V36%2FGAIhAKe8G9O37V3a%2F2%2BTluDx35Pce8tqQ3GTtvhd0tfVNatKKv8DCC4QABoMNjM3NDIzMTgzODA1Igw1KgLupFijrsquPEIq3AOSX2JJonpp6Hn%2FM7%2BIGNFVSqLEKyScQclkRA0HLL7sCHRlHSCMaGBiNHiDo0e%2BkUoWQIRLLUfZBVr3yuMCJpdaNkbJ2Mj2xbM7utyF9RBNOERF%2F8r%2Fc%2FLl6bPIx1hYip58aendkKd0DxZ%2FbyUem2Sok8YfkdHAYe%2B325QjwLUW6avNtMphC0PbaoEbTXq9M0tKTBlCB2x1NEgmDjMUNT4bA3k%2FWK94PJY9l%2B7xGiPZ4R2g%2Bq3D7ohyeY7rud0l3lH%2Bbr8Z%2B45PqPbakRwT%2FxuQB84x87rf2kUSHMzrJ5jWgEVFTqT%2BV6xXgRBozz9YBzv5Dbk0iPJSP5I946ws5cqWMH%2Fc6JDupEzq8s0jtEBvtc%2FdXsjA4u%2FJr39kW7dvNAWVPVbQ4pr2c4eCMRu%2Fh0TFfobLIGKsM6ZKVjDcieE2LpCMv7fE6cbl3dOi%2BSi%2BFAc%2FOCS6zNme6UkxVgl5kNLKmaOetn1pUiQxJfQHo8t5wB5YMjhzCjzRX74oiEoEa0waf8TuIDwXhIoDysMN%2FFmWX2wd3WeTQh3VtWweNauIfwlkU4X%2B0VXg2DEPV%2B6KDMqJZ5Q3Q6eTRYV3JZzp7YHxWNBHz%2FdvV2M6cfVfz7vNRuzEJFVZmNCmP8paRjDJ2YjEBjqkAXO%2BntxoWvh0e39Ll%2By%2FkloO2zkpgm6DNBQ%2FniOBeFCLs7zID9uM2NWHRzcRcXgfUuSYgRFS632SmDbb%2FBIxiUHslqCTWQb%2FETQ%2BYmDVF5qR5xezQ6EdBRUF%2FrGiRoCYDZdOavQbaqF1dMIlw8LZ%2FVM17ZLwQBnkR8fjGEYYWSmu34%2BXM6lcxhVHjlfLVDYYOW%2BZRatr4AUftMhcrqwPmMoBvAPP&X-Amz-Signature=5b7bab4beb1824c17966b5ab16d92b75c98732d2fce973f043140e06c6e4c48d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ74P3J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDoFRnggPj6t6%2BgL4lRjOGi%2Fgb1uRAKHqbZA9U4V36%2FGAIhAKe8G9O37V3a%2F2%2BTluDx35Pce8tqQ3GTtvhd0tfVNatKKv8DCC4QABoMNjM3NDIzMTgzODA1Igw1KgLupFijrsquPEIq3AOSX2JJonpp6Hn%2FM7%2BIGNFVSqLEKyScQclkRA0HLL7sCHRlHSCMaGBiNHiDo0e%2BkUoWQIRLLUfZBVr3yuMCJpdaNkbJ2Mj2xbM7utyF9RBNOERF%2F8r%2Fc%2FLl6bPIx1hYip58aendkKd0DxZ%2FbyUem2Sok8YfkdHAYe%2B325QjwLUW6avNtMphC0PbaoEbTXq9M0tKTBlCB2x1NEgmDjMUNT4bA3k%2FWK94PJY9l%2B7xGiPZ4R2g%2Bq3D7ohyeY7rud0l3lH%2Bbr8Z%2B45PqPbakRwT%2FxuQB84x87rf2kUSHMzrJ5jWgEVFTqT%2BV6xXgRBozz9YBzv5Dbk0iPJSP5I946ws5cqWMH%2Fc6JDupEzq8s0jtEBvtc%2FdXsjA4u%2FJr39kW7dvNAWVPVbQ4pr2c4eCMRu%2Fh0TFfobLIGKsM6ZKVjDcieE2LpCMv7fE6cbl3dOi%2BSi%2BFAc%2FOCS6zNme6UkxVgl5kNLKmaOetn1pUiQxJfQHo8t5wB5YMjhzCjzRX74oiEoEa0waf8TuIDwXhIoDysMN%2FFmWX2wd3WeTQh3VtWweNauIfwlkU4X%2B0VXg2DEPV%2B6KDMqJZ5Q3Q6eTRYV3JZzp7YHxWNBHz%2FdvV2M6cfVfz7vNRuzEJFVZmNCmP8paRjDJ2YjEBjqkAXO%2BntxoWvh0e39Ll%2By%2FkloO2zkpgm6DNBQ%2FniOBeFCLs7zID9uM2NWHRzcRcXgfUuSYgRFS632SmDbb%2FBIxiUHslqCTWQb%2FETQ%2BYmDVF5qR5xezQ6EdBRUF%2FrGiRoCYDZdOavQbaqF1dMIlw8LZ%2FVM17ZLwQBnkR8fjGEYYWSmu34%2BXM6lcxhVHjlfLVDYYOW%2BZRatr4AUftMhcrqwPmMoBvAPP&X-Amz-Signature=4aa0bef7a5c67c6c8547e982b34b7ab8ddd03a733b1bd543f10ba820dde24b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ74P3J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDoFRnggPj6t6%2BgL4lRjOGi%2Fgb1uRAKHqbZA9U4V36%2FGAIhAKe8G9O37V3a%2F2%2BTluDx35Pce8tqQ3GTtvhd0tfVNatKKv8DCC4QABoMNjM3NDIzMTgzODA1Igw1KgLupFijrsquPEIq3AOSX2JJonpp6Hn%2FM7%2BIGNFVSqLEKyScQclkRA0HLL7sCHRlHSCMaGBiNHiDo0e%2BkUoWQIRLLUfZBVr3yuMCJpdaNkbJ2Mj2xbM7utyF9RBNOERF%2F8r%2Fc%2FLl6bPIx1hYip58aendkKd0DxZ%2FbyUem2Sok8YfkdHAYe%2B325QjwLUW6avNtMphC0PbaoEbTXq9M0tKTBlCB2x1NEgmDjMUNT4bA3k%2FWK94PJY9l%2B7xGiPZ4R2g%2Bq3D7ohyeY7rud0l3lH%2Bbr8Z%2B45PqPbakRwT%2FxuQB84x87rf2kUSHMzrJ5jWgEVFTqT%2BV6xXgRBozz9YBzv5Dbk0iPJSP5I946ws5cqWMH%2Fc6JDupEzq8s0jtEBvtc%2FdXsjA4u%2FJr39kW7dvNAWVPVbQ4pr2c4eCMRu%2Fh0TFfobLIGKsM6ZKVjDcieE2LpCMv7fE6cbl3dOi%2BSi%2BFAc%2FOCS6zNme6UkxVgl5kNLKmaOetn1pUiQxJfQHo8t5wB5YMjhzCjzRX74oiEoEa0waf8TuIDwXhIoDysMN%2FFmWX2wd3WeTQh3VtWweNauIfwlkU4X%2B0VXg2DEPV%2B6KDMqJZ5Q3Q6eTRYV3JZzp7YHxWNBHz%2FdvV2M6cfVfz7vNRuzEJFVZmNCmP8paRjDJ2YjEBjqkAXO%2BntxoWvh0e39Ll%2By%2FkloO2zkpgm6DNBQ%2FniOBeFCLs7zID9uM2NWHRzcRcXgfUuSYgRFS632SmDbb%2FBIxiUHslqCTWQb%2FETQ%2BYmDVF5qR5xezQ6EdBRUF%2FrGiRoCYDZdOavQbaqF1dMIlw8LZ%2FVM17ZLwQBnkR8fjGEYYWSmu34%2BXM6lcxhVHjlfLVDYYOW%2BZRatr4AUftMhcrqwPmMoBvAPP&X-Amz-Signature=48b8c867c24c8e75426d40575abe9565985d2c1fd691bfe464803966bc1e71b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ74P3J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDoFRnggPj6t6%2BgL4lRjOGi%2Fgb1uRAKHqbZA9U4V36%2FGAIhAKe8G9O37V3a%2F2%2BTluDx35Pce8tqQ3GTtvhd0tfVNatKKv8DCC4QABoMNjM3NDIzMTgzODA1Igw1KgLupFijrsquPEIq3AOSX2JJonpp6Hn%2FM7%2BIGNFVSqLEKyScQclkRA0HLL7sCHRlHSCMaGBiNHiDo0e%2BkUoWQIRLLUfZBVr3yuMCJpdaNkbJ2Mj2xbM7utyF9RBNOERF%2F8r%2Fc%2FLl6bPIx1hYip58aendkKd0DxZ%2FbyUem2Sok8YfkdHAYe%2B325QjwLUW6avNtMphC0PbaoEbTXq9M0tKTBlCB2x1NEgmDjMUNT4bA3k%2FWK94PJY9l%2B7xGiPZ4R2g%2Bq3D7ohyeY7rud0l3lH%2Bbr8Z%2B45PqPbakRwT%2FxuQB84x87rf2kUSHMzrJ5jWgEVFTqT%2BV6xXgRBozz9YBzv5Dbk0iPJSP5I946ws5cqWMH%2Fc6JDupEzq8s0jtEBvtc%2FdXsjA4u%2FJr39kW7dvNAWVPVbQ4pr2c4eCMRu%2Fh0TFfobLIGKsM6ZKVjDcieE2LpCMv7fE6cbl3dOi%2BSi%2BFAc%2FOCS6zNme6UkxVgl5kNLKmaOetn1pUiQxJfQHo8t5wB5YMjhzCjzRX74oiEoEa0waf8TuIDwXhIoDysMN%2FFmWX2wd3WeTQh3VtWweNauIfwlkU4X%2B0VXg2DEPV%2B6KDMqJZ5Q3Q6eTRYV3JZzp7YHxWNBHz%2FdvV2M6cfVfz7vNRuzEJFVZmNCmP8paRjDJ2YjEBjqkAXO%2BntxoWvh0e39Ll%2By%2FkloO2zkpgm6DNBQ%2FniOBeFCLs7zID9uM2NWHRzcRcXgfUuSYgRFS632SmDbb%2FBIxiUHslqCTWQb%2FETQ%2BYmDVF5qR5xezQ6EdBRUF%2FrGiRoCYDZdOavQbaqF1dMIlw8LZ%2FVM17ZLwQBnkR8fjGEYYWSmu34%2BXM6lcxhVHjlfLVDYYOW%2BZRatr4AUftMhcrqwPmMoBvAPP&X-Amz-Signature=b8152d904fef1edf78b76b2023aa36a84575725386a206e0c3bfffa911c3f731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ74P3J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDoFRnggPj6t6%2BgL4lRjOGi%2Fgb1uRAKHqbZA9U4V36%2FGAIhAKe8G9O37V3a%2F2%2BTluDx35Pce8tqQ3GTtvhd0tfVNatKKv8DCC4QABoMNjM3NDIzMTgzODA1Igw1KgLupFijrsquPEIq3AOSX2JJonpp6Hn%2FM7%2BIGNFVSqLEKyScQclkRA0HLL7sCHRlHSCMaGBiNHiDo0e%2BkUoWQIRLLUfZBVr3yuMCJpdaNkbJ2Mj2xbM7utyF9RBNOERF%2F8r%2Fc%2FLl6bPIx1hYip58aendkKd0DxZ%2FbyUem2Sok8YfkdHAYe%2B325QjwLUW6avNtMphC0PbaoEbTXq9M0tKTBlCB2x1NEgmDjMUNT4bA3k%2FWK94PJY9l%2B7xGiPZ4R2g%2Bq3D7ohyeY7rud0l3lH%2Bbr8Z%2B45PqPbakRwT%2FxuQB84x87rf2kUSHMzrJ5jWgEVFTqT%2BV6xXgRBozz9YBzv5Dbk0iPJSP5I946ws5cqWMH%2Fc6JDupEzq8s0jtEBvtc%2FdXsjA4u%2FJr39kW7dvNAWVPVbQ4pr2c4eCMRu%2Fh0TFfobLIGKsM6ZKVjDcieE2LpCMv7fE6cbl3dOi%2BSi%2BFAc%2FOCS6zNme6UkxVgl5kNLKmaOetn1pUiQxJfQHo8t5wB5YMjhzCjzRX74oiEoEa0waf8TuIDwXhIoDysMN%2FFmWX2wd3WeTQh3VtWweNauIfwlkU4X%2B0VXg2DEPV%2B6KDMqJZ5Q3Q6eTRYV3JZzp7YHxWNBHz%2FdvV2M6cfVfz7vNRuzEJFVZmNCmP8paRjDJ2YjEBjqkAXO%2BntxoWvh0e39Ll%2By%2FkloO2zkpgm6DNBQ%2FniOBeFCLs7zID9uM2NWHRzcRcXgfUuSYgRFS632SmDbb%2FBIxiUHslqCTWQb%2FETQ%2BYmDVF5qR5xezQ6EdBRUF%2FrGiRoCYDZdOavQbaqF1dMIlw8LZ%2FVM17ZLwQBnkR8fjGEYYWSmu34%2BXM6lcxhVHjlfLVDYYOW%2BZRatr4AUftMhcrqwPmMoBvAPP&X-Amz-Signature=3eb5a75ec7cd0218ad3f0e8df4ee89500a54e1a69a5639e963870871ab94f5a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ74P3J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDoFRnggPj6t6%2BgL4lRjOGi%2Fgb1uRAKHqbZA9U4V36%2FGAIhAKe8G9O37V3a%2F2%2BTluDx35Pce8tqQ3GTtvhd0tfVNatKKv8DCC4QABoMNjM3NDIzMTgzODA1Igw1KgLupFijrsquPEIq3AOSX2JJonpp6Hn%2FM7%2BIGNFVSqLEKyScQclkRA0HLL7sCHRlHSCMaGBiNHiDo0e%2BkUoWQIRLLUfZBVr3yuMCJpdaNkbJ2Mj2xbM7utyF9RBNOERF%2F8r%2Fc%2FLl6bPIx1hYip58aendkKd0DxZ%2FbyUem2Sok8YfkdHAYe%2B325QjwLUW6avNtMphC0PbaoEbTXq9M0tKTBlCB2x1NEgmDjMUNT4bA3k%2FWK94PJY9l%2B7xGiPZ4R2g%2Bq3D7ohyeY7rud0l3lH%2Bbr8Z%2B45PqPbakRwT%2FxuQB84x87rf2kUSHMzrJ5jWgEVFTqT%2BV6xXgRBozz9YBzv5Dbk0iPJSP5I946ws5cqWMH%2Fc6JDupEzq8s0jtEBvtc%2FdXsjA4u%2FJr39kW7dvNAWVPVbQ4pr2c4eCMRu%2Fh0TFfobLIGKsM6ZKVjDcieE2LpCMv7fE6cbl3dOi%2BSi%2BFAc%2FOCS6zNme6UkxVgl5kNLKmaOetn1pUiQxJfQHo8t5wB5YMjhzCjzRX74oiEoEa0waf8TuIDwXhIoDysMN%2FFmWX2wd3WeTQh3VtWweNauIfwlkU4X%2B0VXg2DEPV%2B6KDMqJZ5Q3Q6eTRYV3JZzp7YHxWNBHz%2FdvV2M6cfVfz7vNRuzEJFVZmNCmP8paRjDJ2YjEBjqkAXO%2BntxoWvh0e39Ll%2By%2FkloO2zkpgm6DNBQ%2FniOBeFCLs7zID9uM2NWHRzcRcXgfUuSYgRFS632SmDbb%2FBIxiUHslqCTWQb%2FETQ%2BYmDVF5qR5xezQ6EdBRUF%2FrGiRoCYDZdOavQbaqF1dMIlw8LZ%2FVM17ZLwQBnkR8fjGEYYWSmu34%2BXM6lcxhVHjlfLVDYYOW%2BZRatr4AUftMhcrqwPmMoBvAPP&X-Amz-Signature=159866da159d55bd93639919dae0760e67489f8f8130821a590d036382c0dded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
