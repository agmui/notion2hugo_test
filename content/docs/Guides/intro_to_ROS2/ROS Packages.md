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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKC6YLU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbIFOq%2F7TcVZg7vbu7e4fEFX2jzcXTGVxKmX1a2qPSlAiBzZfmQZVePz0oBbe0PD9F5bwsWrF1huK5EBSiflb3xbyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjSSCZyHhLioJv9pOKtwDZ4h0uHg6P8Dh3X6rhmSLNAezIOzYnC6YrtW2JWakPbllTvVVxbqidTe%2B5sLc%2FyqLe%2FTPMfbDkElrDqqBm15DTDFRFqaFM7GJqnlqAbVqnMfw0nZGdDv79s8awibbi4XyXdYO6vuoUwpK9zps%2BSgUzUuB%2BjnArR7Xrx8yUfL4YicnHg41ZcZhyZY1wwcqBcGUMU8ueiZc%2F4p5gSTHKNO2BwBArLP0ukgvL2LIhmTIWpCFbrUJ2GH16V%2FKvS2Bb57E1P9Ib0J68SxoqvJtEXkUJHbkGXZ5m4IajE82hHqmqaMlQLl%2BfgTRyrQQkK8jDY8jDFVLVCI6fXkv5PTzlXsSZ4es1g7PB1u3gmccHh1VFJhf27%2FJ81y8E2a7kAReu0vEvuZv9egvQh%2BowYJ1YkdduLegfhgYT409%2BhHD3GWdB%2BVe1rfIztnWiAR6VH8Ustrj1GEJFtuDFgpMIiRj34ZidBpjk7ptasbawcNydO0kdQg%2B%2Beoxafbuery5C3PAeQcPD%2B4DCWEKEKX86%2Fy%2BgGe9TAb8DLRquJB85rJJAYLxyyguNbrQLNoOynTKkJ4drKc0%2BuCkTaOvMwZplPLI55o3k9W7hh4H41BSW%2BAC%2BlIDHG9lByGnG%2FXMyjckeMkw4s2LwAY6pgFFxyPxubc2UB9gDwY1XiRE706Rx%2BKYHu7bZqLJCUYOTKY99ZShlzHw27XL8PFAWPOpgqhQg9hgjzr%2FpIZWB1bfe3yB%2Bmnyd%2BF0POilK1XnL0okeAQamOby4YU6dq0EYPXC3wCVEPxL3SNSca0ecKx49GRdgeZ1BL0qSCV7dBwwutQls0DN8Em9S61Gyuw2LadIVX2fex9QrFPJCaZwMbLeuVThIk5x&X-Amz-Signature=429b6e01782360f1f26f7443642e22783280a5fe5285bd317c0b2d02ca3bf7c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKC6YLU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbIFOq%2F7TcVZg7vbu7e4fEFX2jzcXTGVxKmX1a2qPSlAiBzZfmQZVePz0oBbe0PD9F5bwsWrF1huK5EBSiflb3xbyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjSSCZyHhLioJv9pOKtwDZ4h0uHg6P8Dh3X6rhmSLNAezIOzYnC6YrtW2JWakPbllTvVVxbqidTe%2B5sLc%2FyqLe%2FTPMfbDkElrDqqBm15DTDFRFqaFM7GJqnlqAbVqnMfw0nZGdDv79s8awibbi4XyXdYO6vuoUwpK9zps%2BSgUzUuB%2BjnArR7Xrx8yUfL4YicnHg41ZcZhyZY1wwcqBcGUMU8ueiZc%2F4p5gSTHKNO2BwBArLP0ukgvL2LIhmTIWpCFbrUJ2GH16V%2FKvS2Bb57E1P9Ib0J68SxoqvJtEXkUJHbkGXZ5m4IajE82hHqmqaMlQLl%2BfgTRyrQQkK8jDY8jDFVLVCI6fXkv5PTzlXsSZ4es1g7PB1u3gmccHh1VFJhf27%2FJ81y8E2a7kAReu0vEvuZv9egvQh%2BowYJ1YkdduLegfhgYT409%2BhHD3GWdB%2BVe1rfIztnWiAR6VH8Ustrj1GEJFtuDFgpMIiRj34ZidBpjk7ptasbawcNydO0kdQg%2B%2Beoxafbuery5C3PAeQcPD%2B4DCWEKEKX86%2Fy%2BgGe9TAb8DLRquJB85rJJAYLxyyguNbrQLNoOynTKkJ4drKc0%2BuCkTaOvMwZplPLI55o3k9W7hh4H41BSW%2BAC%2BlIDHG9lByGnG%2FXMyjckeMkw4s2LwAY6pgFFxyPxubc2UB9gDwY1XiRE706Rx%2BKYHu7bZqLJCUYOTKY99ZShlzHw27XL8PFAWPOpgqhQg9hgjzr%2FpIZWB1bfe3yB%2Bmnyd%2BF0POilK1XnL0okeAQamOby4YU6dq0EYPXC3wCVEPxL3SNSca0ecKx49GRdgeZ1BL0qSCV7dBwwutQls0DN8Em9S61Gyuw2LadIVX2fex9QrFPJCaZwMbLeuVThIk5x&X-Amz-Signature=56f2e56522999e645bf67f2415df0b57f91ababd4ef16873e694b89a03ad8535&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKC6YLU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbIFOq%2F7TcVZg7vbu7e4fEFX2jzcXTGVxKmX1a2qPSlAiBzZfmQZVePz0oBbe0PD9F5bwsWrF1huK5EBSiflb3xbyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjSSCZyHhLioJv9pOKtwDZ4h0uHg6P8Dh3X6rhmSLNAezIOzYnC6YrtW2JWakPbllTvVVxbqidTe%2B5sLc%2FyqLe%2FTPMfbDkElrDqqBm15DTDFRFqaFM7GJqnlqAbVqnMfw0nZGdDv79s8awibbi4XyXdYO6vuoUwpK9zps%2BSgUzUuB%2BjnArR7Xrx8yUfL4YicnHg41ZcZhyZY1wwcqBcGUMU8ueiZc%2F4p5gSTHKNO2BwBArLP0ukgvL2LIhmTIWpCFbrUJ2GH16V%2FKvS2Bb57E1P9Ib0J68SxoqvJtEXkUJHbkGXZ5m4IajE82hHqmqaMlQLl%2BfgTRyrQQkK8jDY8jDFVLVCI6fXkv5PTzlXsSZ4es1g7PB1u3gmccHh1VFJhf27%2FJ81y8E2a7kAReu0vEvuZv9egvQh%2BowYJ1YkdduLegfhgYT409%2BhHD3GWdB%2BVe1rfIztnWiAR6VH8Ustrj1GEJFtuDFgpMIiRj34ZidBpjk7ptasbawcNydO0kdQg%2B%2Beoxafbuery5C3PAeQcPD%2B4DCWEKEKX86%2Fy%2BgGe9TAb8DLRquJB85rJJAYLxyyguNbrQLNoOynTKkJ4drKc0%2BuCkTaOvMwZplPLI55o3k9W7hh4H41BSW%2BAC%2BlIDHG9lByGnG%2FXMyjckeMkw4s2LwAY6pgFFxyPxubc2UB9gDwY1XiRE706Rx%2BKYHu7bZqLJCUYOTKY99ZShlzHw27XL8PFAWPOpgqhQg9hgjzr%2FpIZWB1bfe3yB%2Bmnyd%2BF0POilK1XnL0okeAQamOby4YU6dq0EYPXC3wCVEPxL3SNSca0ecKx49GRdgeZ1BL0qSCV7dBwwutQls0DN8Em9S61Gyuw2LadIVX2fex9QrFPJCaZwMbLeuVThIk5x&X-Amz-Signature=ac6f949c425fc82701591191ae0898960fad9dcf84899d74c99d1072355573d8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKC6YLU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbIFOq%2F7TcVZg7vbu7e4fEFX2jzcXTGVxKmX1a2qPSlAiBzZfmQZVePz0oBbe0PD9F5bwsWrF1huK5EBSiflb3xbyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjSSCZyHhLioJv9pOKtwDZ4h0uHg6P8Dh3X6rhmSLNAezIOzYnC6YrtW2JWakPbllTvVVxbqidTe%2B5sLc%2FyqLe%2FTPMfbDkElrDqqBm15DTDFRFqaFM7GJqnlqAbVqnMfw0nZGdDv79s8awibbi4XyXdYO6vuoUwpK9zps%2BSgUzUuB%2BjnArR7Xrx8yUfL4YicnHg41ZcZhyZY1wwcqBcGUMU8ueiZc%2F4p5gSTHKNO2BwBArLP0ukgvL2LIhmTIWpCFbrUJ2GH16V%2FKvS2Bb57E1P9Ib0J68SxoqvJtEXkUJHbkGXZ5m4IajE82hHqmqaMlQLl%2BfgTRyrQQkK8jDY8jDFVLVCI6fXkv5PTzlXsSZ4es1g7PB1u3gmccHh1VFJhf27%2FJ81y8E2a7kAReu0vEvuZv9egvQh%2BowYJ1YkdduLegfhgYT409%2BhHD3GWdB%2BVe1rfIztnWiAR6VH8Ustrj1GEJFtuDFgpMIiRj34ZidBpjk7ptasbawcNydO0kdQg%2B%2Beoxafbuery5C3PAeQcPD%2B4DCWEKEKX86%2Fy%2BgGe9TAb8DLRquJB85rJJAYLxyyguNbrQLNoOynTKkJ4drKc0%2BuCkTaOvMwZplPLI55o3k9W7hh4H41BSW%2BAC%2BlIDHG9lByGnG%2FXMyjckeMkw4s2LwAY6pgFFxyPxubc2UB9gDwY1XiRE706Rx%2BKYHu7bZqLJCUYOTKY99ZShlzHw27XL8PFAWPOpgqhQg9hgjzr%2FpIZWB1bfe3yB%2Bmnyd%2BF0POilK1XnL0okeAQamOby4YU6dq0EYPXC3wCVEPxL3SNSca0ecKx49GRdgeZ1BL0qSCV7dBwwutQls0DN8Em9S61Gyuw2LadIVX2fex9QrFPJCaZwMbLeuVThIk5x&X-Amz-Signature=148f9fd5ce01a7d3b47336d276bc6960ad5c6e9bf6706288ba0120540a4cf2fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKC6YLU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbIFOq%2F7TcVZg7vbu7e4fEFX2jzcXTGVxKmX1a2qPSlAiBzZfmQZVePz0oBbe0PD9F5bwsWrF1huK5EBSiflb3xbyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjSSCZyHhLioJv9pOKtwDZ4h0uHg6P8Dh3X6rhmSLNAezIOzYnC6YrtW2JWakPbllTvVVxbqidTe%2B5sLc%2FyqLe%2FTPMfbDkElrDqqBm15DTDFRFqaFM7GJqnlqAbVqnMfw0nZGdDv79s8awibbi4XyXdYO6vuoUwpK9zps%2BSgUzUuB%2BjnArR7Xrx8yUfL4YicnHg41ZcZhyZY1wwcqBcGUMU8ueiZc%2F4p5gSTHKNO2BwBArLP0ukgvL2LIhmTIWpCFbrUJ2GH16V%2FKvS2Bb57E1P9Ib0J68SxoqvJtEXkUJHbkGXZ5m4IajE82hHqmqaMlQLl%2BfgTRyrQQkK8jDY8jDFVLVCI6fXkv5PTzlXsSZ4es1g7PB1u3gmccHh1VFJhf27%2FJ81y8E2a7kAReu0vEvuZv9egvQh%2BowYJ1YkdduLegfhgYT409%2BhHD3GWdB%2BVe1rfIztnWiAR6VH8Ustrj1GEJFtuDFgpMIiRj34ZidBpjk7ptasbawcNydO0kdQg%2B%2Beoxafbuery5C3PAeQcPD%2B4DCWEKEKX86%2Fy%2BgGe9TAb8DLRquJB85rJJAYLxyyguNbrQLNoOynTKkJ4drKc0%2BuCkTaOvMwZplPLI55o3k9W7hh4H41BSW%2BAC%2BlIDHG9lByGnG%2FXMyjckeMkw4s2LwAY6pgFFxyPxubc2UB9gDwY1XiRE706Rx%2BKYHu7bZqLJCUYOTKY99ZShlzHw27XL8PFAWPOpgqhQg9hgjzr%2FpIZWB1bfe3yB%2Bmnyd%2BF0POilK1XnL0okeAQamOby4YU6dq0EYPXC3wCVEPxL3SNSca0ecKx49GRdgeZ1BL0qSCV7dBwwutQls0DN8Em9S61Gyuw2LadIVX2fex9QrFPJCaZwMbLeuVThIk5x&X-Amz-Signature=4ca5b0f90bc08bdc6d377edeaa27ab15925deda1b0a451d650cba24bf520423e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKC6YLU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbIFOq%2F7TcVZg7vbu7e4fEFX2jzcXTGVxKmX1a2qPSlAiBzZfmQZVePz0oBbe0PD9F5bwsWrF1huK5EBSiflb3xbyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjSSCZyHhLioJv9pOKtwDZ4h0uHg6P8Dh3X6rhmSLNAezIOzYnC6YrtW2JWakPbllTvVVxbqidTe%2B5sLc%2FyqLe%2FTPMfbDkElrDqqBm15DTDFRFqaFM7GJqnlqAbVqnMfw0nZGdDv79s8awibbi4XyXdYO6vuoUwpK9zps%2BSgUzUuB%2BjnArR7Xrx8yUfL4YicnHg41ZcZhyZY1wwcqBcGUMU8ueiZc%2F4p5gSTHKNO2BwBArLP0ukgvL2LIhmTIWpCFbrUJ2GH16V%2FKvS2Bb57E1P9Ib0J68SxoqvJtEXkUJHbkGXZ5m4IajE82hHqmqaMlQLl%2BfgTRyrQQkK8jDY8jDFVLVCI6fXkv5PTzlXsSZ4es1g7PB1u3gmccHh1VFJhf27%2FJ81y8E2a7kAReu0vEvuZv9egvQh%2BowYJ1YkdduLegfhgYT409%2BhHD3GWdB%2BVe1rfIztnWiAR6VH8Ustrj1GEJFtuDFgpMIiRj34ZidBpjk7ptasbawcNydO0kdQg%2B%2Beoxafbuery5C3PAeQcPD%2B4DCWEKEKX86%2Fy%2BgGe9TAb8DLRquJB85rJJAYLxyyguNbrQLNoOynTKkJ4drKc0%2BuCkTaOvMwZplPLI55o3k9W7hh4H41BSW%2BAC%2BlIDHG9lByGnG%2FXMyjckeMkw4s2LwAY6pgFFxyPxubc2UB9gDwY1XiRE706Rx%2BKYHu7bZqLJCUYOTKY99ZShlzHw27XL8PFAWPOpgqhQg9hgjzr%2FpIZWB1bfe3yB%2Bmnyd%2BF0POilK1XnL0okeAQamOby4YU6dq0EYPXC3wCVEPxL3SNSca0ecKx49GRdgeZ1BL0qSCV7dBwwutQls0DN8Em9S61Gyuw2LadIVX2fex9QrFPJCaZwMbLeuVThIk5x&X-Amz-Signature=d19eb76084cdc0dc3fc2f055845203b3352367983790d085c5717d29c3e37274&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKC6YLU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbIFOq%2F7TcVZg7vbu7e4fEFX2jzcXTGVxKmX1a2qPSlAiBzZfmQZVePz0oBbe0PD9F5bwsWrF1huK5EBSiflb3xbyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjSSCZyHhLioJv9pOKtwDZ4h0uHg6P8Dh3X6rhmSLNAezIOzYnC6YrtW2JWakPbllTvVVxbqidTe%2B5sLc%2FyqLe%2FTPMfbDkElrDqqBm15DTDFRFqaFM7GJqnlqAbVqnMfw0nZGdDv79s8awibbi4XyXdYO6vuoUwpK9zps%2BSgUzUuB%2BjnArR7Xrx8yUfL4YicnHg41ZcZhyZY1wwcqBcGUMU8ueiZc%2F4p5gSTHKNO2BwBArLP0ukgvL2LIhmTIWpCFbrUJ2GH16V%2FKvS2Bb57E1P9Ib0J68SxoqvJtEXkUJHbkGXZ5m4IajE82hHqmqaMlQLl%2BfgTRyrQQkK8jDY8jDFVLVCI6fXkv5PTzlXsSZ4es1g7PB1u3gmccHh1VFJhf27%2FJ81y8E2a7kAReu0vEvuZv9egvQh%2BowYJ1YkdduLegfhgYT409%2BhHD3GWdB%2BVe1rfIztnWiAR6VH8Ustrj1GEJFtuDFgpMIiRj34ZidBpjk7ptasbawcNydO0kdQg%2B%2Beoxafbuery5C3PAeQcPD%2B4DCWEKEKX86%2Fy%2BgGe9TAb8DLRquJB85rJJAYLxyyguNbrQLNoOynTKkJ4drKc0%2BuCkTaOvMwZplPLI55o3k9W7hh4H41BSW%2BAC%2BlIDHG9lByGnG%2FXMyjckeMkw4s2LwAY6pgFFxyPxubc2UB9gDwY1XiRE706Rx%2BKYHu7bZqLJCUYOTKY99ZShlzHw27XL8PFAWPOpgqhQg9hgjzr%2FpIZWB1bfe3yB%2Bmnyd%2BF0POilK1XnL0okeAQamOby4YU6dq0EYPXC3wCVEPxL3SNSca0ecKx49GRdgeZ1BL0qSCV7dBwwutQls0DN8Em9S61Gyuw2LadIVX2fex9QrFPJCaZwMbLeuVThIk5x&X-Amz-Signature=fc989956153c9e17fb6e129092eaa38265f29a9c032095dc62c70e31034c5edf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
