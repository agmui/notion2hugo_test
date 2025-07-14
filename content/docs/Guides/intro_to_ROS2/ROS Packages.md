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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWWATUI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCK6bn0JS99%2B%2FwEKMNoasHZ%2B%2BZ29bS76fERYx67n4b%2F9AIhAJyvHka987WOaqyfuIhMAwSqpALQpvK%2BUQBnISiffxltKv8DCDQQABoMNjM3NDIzMTgzODA1IgwL1HCsD8L0qN2tcS4q3ANWvlHqfQF9Wq5HQ8kKMriKl2HoiUOuteH90sS5ut%2F%2Fvo3yBOvaA8com2yqCuczVdlhhdYxo7Jur5%2FjlSkerErVrKkm4nndTEjWvUjFhYhf4eRFl2GzgTSc9qT3vVXJaV0XPPeg4rHeBiG%2BPkKRSDWIpH4oBhc8kwKXRvMP7cDreWF1fCNyUUAcPUeoTNVUe6%2By%2F6oUndLj020qQXh0tAcGvqO8O26HvIE1Vw9Syy%2F7hSnAevw4ObyF8QyxqvIIaNKGJO9eq19dx4GDszIP7%2FpHF5ywjzOSIzwBR17J9j79mNBtIXXC%2BPBPZeSW53xhulkQwsHxp8hZwjEA5K%2FX6JENglp0oiT5a7fSQEf6pcMn49DsBG93COMTzJWxVZ84S%2F8FDbCBprK2kM%2BlcdcClPEn8xmISwot3SeSUCpBfzWyVHga58qTbqBAXEN7T6UMZF82OZ6J9v%2BD6w7JHpkOFRF0GpubOPaP%2F9n0Aa2Z%2Bj%2FodCXb9QDeDqlh%2FtKCf5fRLpLHt7yw4Bu9DfCW%2FiqgETvNlg7D4I8ZMluVs7uLm7Fuo0aBkAlBFPS9oRybcFJfzrIEaL8tpYJqw4MqQmZHhCDsrLzbLLVFRmrVpVAk63sH3axyQJEju%2FpXICeyqTDmpNXDBjqkAaRpq1JLFHd%2FmRpR%2BLXo8k7UD41CVRl4Ma1jndqzAmQNUyWCoSD%2FgmTxNN7UokNMYN8CisprxAMUGRRVjDdyPUFBHghQo18oV4mA5jj%2Fv8aAVQUDXyQ6rsa8792JZLJJBgg5kKRbZZlF8NZgq0HVy4%2FS%2Bkk3GDbV8k5YQ1RJJD4tc5qbPDqZ066NRKBxkqX72TJ8DAI8oqJ6L97m%2BQ4sHWSYdEt7&X-Amz-Signature=4f0dd01fe45ebd84fbc778169bbe75682f8c7634620fc7ae9460e7841154429f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWWATUI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCK6bn0JS99%2B%2FwEKMNoasHZ%2B%2BZ29bS76fERYx67n4b%2F9AIhAJyvHka987WOaqyfuIhMAwSqpALQpvK%2BUQBnISiffxltKv8DCDQQABoMNjM3NDIzMTgzODA1IgwL1HCsD8L0qN2tcS4q3ANWvlHqfQF9Wq5HQ8kKMriKl2HoiUOuteH90sS5ut%2F%2Fvo3yBOvaA8com2yqCuczVdlhhdYxo7Jur5%2FjlSkerErVrKkm4nndTEjWvUjFhYhf4eRFl2GzgTSc9qT3vVXJaV0XPPeg4rHeBiG%2BPkKRSDWIpH4oBhc8kwKXRvMP7cDreWF1fCNyUUAcPUeoTNVUe6%2By%2F6oUndLj020qQXh0tAcGvqO8O26HvIE1Vw9Syy%2F7hSnAevw4ObyF8QyxqvIIaNKGJO9eq19dx4GDszIP7%2FpHF5ywjzOSIzwBR17J9j79mNBtIXXC%2BPBPZeSW53xhulkQwsHxp8hZwjEA5K%2FX6JENglp0oiT5a7fSQEf6pcMn49DsBG93COMTzJWxVZ84S%2F8FDbCBprK2kM%2BlcdcClPEn8xmISwot3SeSUCpBfzWyVHga58qTbqBAXEN7T6UMZF82OZ6J9v%2BD6w7JHpkOFRF0GpubOPaP%2F9n0Aa2Z%2Bj%2FodCXb9QDeDqlh%2FtKCf5fRLpLHt7yw4Bu9DfCW%2FiqgETvNlg7D4I8ZMluVs7uLm7Fuo0aBkAlBFPS9oRybcFJfzrIEaL8tpYJqw4MqQmZHhCDsrLzbLLVFRmrVpVAk63sH3axyQJEju%2FpXICeyqTDmpNXDBjqkAaRpq1JLFHd%2FmRpR%2BLXo8k7UD41CVRl4Ma1jndqzAmQNUyWCoSD%2FgmTxNN7UokNMYN8CisprxAMUGRRVjDdyPUFBHghQo18oV4mA5jj%2Fv8aAVQUDXyQ6rsa8792JZLJJBgg5kKRbZZlF8NZgq0HVy4%2FS%2Bkk3GDbV8k5YQ1RJJD4tc5qbPDqZ066NRKBxkqX72TJ8DAI8oqJ6L97m%2BQ4sHWSYdEt7&X-Amz-Signature=bdd57d49406adbd5ef50cfa60045277a9b2707da65dbc347ad06848758428cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWWATUI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCK6bn0JS99%2B%2FwEKMNoasHZ%2B%2BZ29bS76fERYx67n4b%2F9AIhAJyvHka987WOaqyfuIhMAwSqpALQpvK%2BUQBnISiffxltKv8DCDQQABoMNjM3NDIzMTgzODA1IgwL1HCsD8L0qN2tcS4q3ANWvlHqfQF9Wq5HQ8kKMriKl2HoiUOuteH90sS5ut%2F%2Fvo3yBOvaA8com2yqCuczVdlhhdYxo7Jur5%2FjlSkerErVrKkm4nndTEjWvUjFhYhf4eRFl2GzgTSc9qT3vVXJaV0XPPeg4rHeBiG%2BPkKRSDWIpH4oBhc8kwKXRvMP7cDreWF1fCNyUUAcPUeoTNVUe6%2By%2F6oUndLj020qQXh0tAcGvqO8O26HvIE1Vw9Syy%2F7hSnAevw4ObyF8QyxqvIIaNKGJO9eq19dx4GDszIP7%2FpHF5ywjzOSIzwBR17J9j79mNBtIXXC%2BPBPZeSW53xhulkQwsHxp8hZwjEA5K%2FX6JENglp0oiT5a7fSQEf6pcMn49DsBG93COMTzJWxVZ84S%2F8FDbCBprK2kM%2BlcdcClPEn8xmISwot3SeSUCpBfzWyVHga58qTbqBAXEN7T6UMZF82OZ6J9v%2BD6w7JHpkOFRF0GpubOPaP%2F9n0Aa2Z%2Bj%2FodCXb9QDeDqlh%2FtKCf5fRLpLHt7yw4Bu9DfCW%2FiqgETvNlg7D4I8ZMluVs7uLm7Fuo0aBkAlBFPS9oRybcFJfzrIEaL8tpYJqw4MqQmZHhCDsrLzbLLVFRmrVpVAk63sH3axyQJEju%2FpXICeyqTDmpNXDBjqkAaRpq1JLFHd%2FmRpR%2BLXo8k7UD41CVRl4Ma1jndqzAmQNUyWCoSD%2FgmTxNN7UokNMYN8CisprxAMUGRRVjDdyPUFBHghQo18oV4mA5jj%2Fv8aAVQUDXyQ6rsa8792JZLJJBgg5kKRbZZlF8NZgq0HVy4%2FS%2Bkk3GDbV8k5YQ1RJJD4tc5qbPDqZ066NRKBxkqX72TJ8DAI8oqJ6L97m%2BQ4sHWSYdEt7&X-Amz-Signature=3eb5162e47edd0e2898fe43420edbbf65407094dd3fa54c10864ef3a1a8e96e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWWATUI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCK6bn0JS99%2B%2FwEKMNoasHZ%2B%2BZ29bS76fERYx67n4b%2F9AIhAJyvHka987WOaqyfuIhMAwSqpALQpvK%2BUQBnISiffxltKv8DCDQQABoMNjM3NDIzMTgzODA1IgwL1HCsD8L0qN2tcS4q3ANWvlHqfQF9Wq5HQ8kKMriKl2HoiUOuteH90sS5ut%2F%2Fvo3yBOvaA8com2yqCuczVdlhhdYxo7Jur5%2FjlSkerErVrKkm4nndTEjWvUjFhYhf4eRFl2GzgTSc9qT3vVXJaV0XPPeg4rHeBiG%2BPkKRSDWIpH4oBhc8kwKXRvMP7cDreWF1fCNyUUAcPUeoTNVUe6%2By%2F6oUndLj020qQXh0tAcGvqO8O26HvIE1Vw9Syy%2F7hSnAevw4ObyF8QyxqvIIaNKGJO9eq19dx4GDszIP7%2FpHF5ywjzOSIzwBR17J9j79mNBtIXXC%2BPBPZeSW53xhulkQwsHxp8hZwjEA5K%2FX6JENglp0oiT5a7fSQEf6pcMn49DsBG93COMTzJWxVZ84S%2F8FDbCBprK2kM%2BlcdcClPEn8xmISwot3SeSUCpBfzWyVHga58qTbqBAXEN7T6UMZF82OZ6J9v%2BD6w7JHpkOFRF0GpubOPaP%2F9n0Aa2Z%2Bj%2FodCXb9QDeDqlh%2FtKCf5fRLpLHt7yw4Bu9DfCW%2FiqgETvNlg7D4I8ZMluVs7uLm7Fuo0aBkAlBFPS9oRybcFJfzrIEaL8tpYJqw4MqQmZHhCDsrLzbLLVFRmrVpVAk63sH3axyQJEju%2FpXICeyqTDmpNXDBjqkAaRpq1JLFHd%2FmRpR%2BLXo8k7UD41CVRl4Ma1jndqzAmQNUyWCoSD%2FgmTxNN7UokNMYN8CisprxAMUGRRVjDdyPUFBHghQo18oV4mA5jj%2Fv8aAVQUDXyQ6rsa8792JZLJJBgg5kKRbZZlF8NZgq0HVy4%2FS%2Bkk3GDbV8k5YQ1RJJD4tc5qbPDqZ066NRKBxkqX72TJ8DAI8oqJ6L97m%2BQ4sHWSYdEt7&X-Amz-Signature=fa882ceb0ed1fe6936fddf6d303bf0d5e4a4bbaff213280cd730271f2e450b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWWATUI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCK6bn0JS99%2B%2FwEKMNoasHZ%2B%2BZ29bS76fERYx67n4b%2F9AIhAJyvHka987WOaqyfuIhMAwSqpALQpvK%2BUQBnISiffxltKv8DCDQQABoMNjM3NDIzMTgzODA1IgwL1HCsD8L0qN2tcS4q3ANWvlHqfQF9Wq5HQ8kKMriKl2HoiUOuteH90sS5ut%2F%2Fvo3yBOvaA8com2yqCuczVdlhhdYxo7Jur5%2FjlSkerErVrKkm4nndTEjWvUjFhYhf4eRFl2GzgTSc9qT3vVXJaV0XPPeg4rHeBiG%2BPkKRSDWIpH4oBhc8kwKXRvMP7cDreWF1fCNyUUAcPUeoTNVUe6%2By%2F6oUndLj020qQXh0tAcGvqO8O26HvIE1Vw9Syy%2F7hSnAevw4ObyF8QyxqvIIaNKGJO9eq19dx4GDszIP7%2FpHF5ywjzOSIzwBR17J9j79mNBtIXXC%2BPBPZeSW53xhulkQwsHxp8hZwjEA5K%2FX6JENglp0oiT5a7fSQEf6pcMn49DsBG93COMTzJWxVZ84S%2F8FDbCBprK2kM%2BlcdcClPEn8xmISwot3SeSUCpBfzWyVHga58qTbqBAXEN7T6UMZF82OZ6J9v%2BD6w7JHpkOFRF0GpubOPaP%2F9n0Aa2Z%2Bj%2FodCXb9QDeDqlh%2FtKCf5fRLpLHt7yw4Bu9DfCW%2FiqgETvNlg7D4I8ZMluVs7uLm7Fuo0aBkAlBFPS9oRybcFJfzrIEaL8tpYJqw4MqQmZHhCDsrLzbLLVFRmrVpVAk63sH3axyQJEju%2FpXICeyqTDmpNXDBjqkAaRpq1JLFHd%2FmRpR%2BLXo8k7UD41CVRl4Ma1jndqzAmQNUyWCoSD%2FgmTxNN7UokNMYN8CisprxAMUGRRVjDdyPUFBHghQo18oV4mA5jj%2Fv8aAVQUDXyQ6rsa8792JZLJJBgg5kKRbZZlF8NZgq0HVy4%2FS%2Bkk3GDbV8k5YQ1RJJD4tc5qbPDqZ066NRKBxkqX72TJ8DAI8oqJ6L97m%2BQ4sHWSYdEt7&X-Amz-Signature=c7099c2588dba15f01d184388df95f343b9f6bfc113bc2b9224f6b0f232f3e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWWATUI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCK6bn0JS99%2B%2FwEKMNoasHZ%2B%2BZ29bS76fERYx67n4b%2F9AIhAJyvHka987WOaqyfuIhMAwSqpALQpvK%2BUQBnISiffxltKv8DCDQQABoMNjM3NDIzMTgzODA1IgwL1HCsD8L0qN2tcS4q3ANWvlHqfQF9Wq5HQ8kKMriKl2HoiUOuteH90sS5ut%2F%2Fvo3yBOvaA8com2yqCuczVdlhhdYxo7Jur5%2FjlSkerErVrKkm4nndTEjWvUjFhYhf4eRFl2GzgTSc9qT3vVXJaV0XPPeg4rHeBiG%2BPkKRSDWIpH4oBhc8kwKXRvMP7cDreWF1fCNyUUAcPUeoTNVUe6%2By%2F6oUndLj020qQXh0tAcGvqO8O26HvIE1Vw9Syy%2F7hSnAevw4ObyF8QyxqvIIaNKGJO9eq19dx4GDszIP7%2FpHF5ywjzOSIzwBR17J9j79mNBtIXXC%2BPBPZeSW53xhulkQwsHxp8hZwjEA5K%2FX6JENglp0oiT5a7fSQEf6pcMn49DsBG93COMTzJWxVZ84S%2F8FDbCBprK2kM%2BlcdcClPEn8xmISwot3SeSUCpBfzWyVHga58qTbqBAXEN7T6UMZF82OZ6J9v%2BD6w7JHpkOFRF0GpubOPaP%2F9n0Aa2Z%2Bj%2FodCXb9QDeDqlh%2FtKCf5fRLpLHt7yw4Bu9DfCW%2FiqgETvNlg7D4I8ZMluVs7uLm7Fuo0aBkAlBFPS9oRybcFJfzrIEaL8tpYJqw4MqQmZHhCDsrLzbLLVFRmrVpVAk63sH3axyQJEju%2FpXICeyqTDmpNXDBjqkAaRpq1JLFHd%2FmRpR%2BLXo8k7UD41CVRl4Ma1jndqzAmQNUyWCoSD%2FgmTxNN7UokNMYN8CisprxAMUGRRVjDdyPUFBHghQo18oV4mA5jj%2Fv8aAVQUDXyQ6rsa8792JZLJJBgg5kKRbZZlF8NZgq0HVy4%2FS%2Bkk3GDbV8k5YQ1RJJD4tc5qbPDqZ066NRKBxkqX72TJ8DAI8oqJ6L97m%2BQ4sHWSYdEt7&X-Amz-Signature=59ceb0a66ca425fec237cd6f1a9fb273c29bd69c6a992324bcf84b67faed6796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWWATUI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCK6bn0JS99%2B%2FwEKMNoasHZ%2B%2BZ29bS76fERYx67n4b%2F9AIhAJyvHka987WOaqyfuIhMAwSqpALQpvK%2BUQBnISiffxltKv8DCDQQABoMNjM3NDIzMTgzODA1IgwL1HCsD8L0qN2tcS4q3ANWvlHqfQF9Wq5HQ8kKMriKl2HoiUOuteH90sS5ut%2F%2Fvo3yBOvaA8com2yqCuczVdlhhdYxo7Jur5%2FjlSkerErVrKkm4nndTEjWvUjFhYhf4eRFl2GzgTSc9qT3vVXJaV0XPPeg4rHeBiG%2BPkKRSDWIpH4oBhc8kwKXRvMP7cDreWF1fCNyUUAcPUeoTNVUe6%2By%2F6oUndLj020qQXh0tAcGvqO8O26HvIE1Vw9Syy%2F7hSnAevw4ObyF8QyxqvIIaNKGJO9eq19dx4GDszIP7%2FpHF5ywjzOSIzwBR17J9j79mNBtIXXC%2BPBPZeSW53xhulkQwsHxp8hZwjEA5K%2FX6JENglp0oiT5a7fSQEf6pcMn49DsBG93COMTzJWxVZ84S%2F8FDbCBprK2kM%2BlcdcClPEn8xmISwot3SeSUCpBfzWyVHga58qTbqBAXEN7T6UMZF82OZ6J9v%2BD6w7JHpkOFRF0GpubOPaP%2F9n0Aa2Z%2Bj%2FodCXb9QDeDqlh%2FtKCf5fRLpLHt7yw4Bu9DfCW%2FiqgETvNlg7D4I8ZMluVs7uLm7Fuo0aBkAlBFPS9oRybcFJfzrIEaL8tpYJqw4MqQmZHhCDsrLzbLLVFRmrVpVAk63sH3axyQJEju%2FpXICeyqTDmpNXDBjqkAaRpq1JLFHd%2FmRpR%2BLXo8k7UD41CVRl4Ma1jndqzAmQNUyWCoSD%2FgmTxNN7UokNMYN8CisprxAMUGRRVjDdyPUFBHghQo18oV4mA5jj%2Fv8aAVQUDXyQ6rsa8792JZLJJBgg5kKRbZZlF8NZgq0HVy4%2FS%2Bkk3GDbV8k5YQ1RJJD4tc5qbPDqZ066NRKBxkqX72TJ8DAI8oqJ6L97m%2BQ4sHWSYdEt7&X-Amz-Signature=e5f820a05e2e3bb33023260f047df60a054221aeda1481b2a59551f10f2b37ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
