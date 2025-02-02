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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGC7PNPW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiRlSvIvpwDcHRutfihiaJjS8pxOT2xwRcAElmPbcVlgIhAMs08LGn%2BG%2FRc2wrWhqLDmLPU6ZIKIGXyppIubOMjRIUKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyprxqYsgOzFP2gHnwq3APAHAmy8dgaq1jxoF0pWPEYEQL6M3ci1CdV4%2FfMzqI0lRtLumvIdY%2FsjTCiN%2F0jakfQSDcj9kn%2FH55NVhNronb1Ca3453C59FWbXaEeb%2Fimc5gZVuhwbfGWBCC3IYPwcj%2F2efC4Raard2QEmY9FNsa7vclX%2BtMxiUrJebpBQnB1lQhxnnZ70bge7VSMNXFxXr0a0z2oRA0TNe4gQ%2BpUr%2Brd2T2NehLeGDqMQgrm80l8yxWkXWky0ZFUyqYml8gBn0AQ%2F1Sh2FvkiqxPZgV7hPZr05Wu56F0UtDaOxOGk4c3UBU61IQWzDY%2FZK5vp%2FQ2iWQrr6w9a86%2BCryzRXZSG3lF7bTW4IhYuudnAifaSf1CmMbKx9fWEpEG57kx70xxB7Uf8l4qLNvt8x%2FHSAQMeOYxPTUNg6pwPNhB7kR6GTT22h8E0AApi02XE%2ByuBfT6q6ZkRblflM7yhhfgn%2Fk8L923ptx3ODGZ7jDNZ30tCc4wAI6ZNSr%2FtTAMZAxtaz%2BzIacDV9DUUNd36CjW3u7WW5i7mQBfxdbSKGoFPTcXwEj7d2EZNwM%2FUMVNVraxdnwTBKsUfP1JZ%2BRaZX%2Fgsr3mXdmy%2BFuOlrQZWAlYln9X8xNUY3VGTbRxFwNeWvNpXjDfoPu8BjqkAZ1Fx%2BVr3x81pF9Ec2VVUDnvRO45u3%2BAkYn9Kgb1m%2FbQoX4co39bJ9j4%2FQ09lMOjeLjrY%2FmuoWy0B1CZUJ8%2FZYIHRELyjP%2Bl%2BHt%2BPCDzd8Z3mQpYJXhsD98KwMEFXCW7DkYz7aZf7UAI7YRmNEkivNEHtcj5wT36uJt88ZWXhwEOxRalisnDJO9VbFJ8aXJfH49jMRUN6a3Eq%2F5TNM6MT8iq6xkP&X-Amz-Signature=2cf13b9ee0541fa464b486178707f50d3316ed64aaf0037648fa9dd6bf6c9699&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGC7PNPW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiRlSvIvpwDcHRutfihiaJjS8pxOT2xwRcAElmPbcVlgIhAMs08LGn%2BG%2FRc2wrWhqLDmLPU6ZIKIGXyppIubOMjRIUKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyprxqYsgOzFP2gHnwq3APAHAmy8dgaq1jxoF0pWPEYEQL6M3ci1CdV4%2FfMzqI0lRtLumvIdY%2FsjTCiN%2F0jakfQSDcj9kn%2FH55NVhNronb1Ca3453C59FWbXaEeb%2Fimc5gZVuhwbfGWBCC3IYPwcj%2F2efC4Raard2QEmY9FNsa7vclX%2BtMxiUrJebpBQnB1lQhxnnZ70bge7VSMNXFxXr0a0z2oRA0TNe4gQ%2BpUr%2Brd2T2NehLeGDqMQgrm80l8yxWkXWky0ZFUyqYml8gBn0AQ%2F1Sh2FvkiqxPZgV7hPZr05Wu56F0UtDaOxOGk4c3UBU61IQWzDY%2FZK5vp%2FQ2iWQrr6w9a86%2BCryzRXZSG3lF7bTW4IhYuudnAifaSf1CmMbKx9fWEpEG57kx70xxB7Uf8l4qLNvt8x%2FHSAQMeOYxPTUNg6pwPNhB7kR6GTT22h8E0AApi02XE%2ByuBfT6q6ZkRblflM7yhhfgn%2Fk8L923ptx3ODGZ7jDNZ30tCc4wAI6ZNSr%2FtTAMZAxtaz%2BzIacDV9DUUNd36CjW3u7WW5i7mQBfxdbSKGoFPTcXwEj7d2EZNwM%2FUMVNVraxdnwTBKsUfP1JZ%2BRaZX%2Fgsr3mXdmy%2BFuOlrQZWAlYln9X8xNUY3VGTbRxFwNeWvNpXjDfoPu8BjqkAZ1Fx%2BVr3x81pF9Ec2VVUDnvRO45u3%2BAkYn9Kgb1m%2FbQoX4co39bJ9j4%2FQ09lMOjeLjrY%2FmuoWy0B1CZUJ8%2FZYIHRELyjP%2Bl%2BHt%2BPCDzd8Z3mQpYJXhsD98KwMEFXCW7DkYz7aZf7UAI7YRmNEkivNEHtcj5wT36uJt88ZWXhwEOxRalisnDJO9VbFJ8aXJfH49jMRUN6a3Eq%2F5TNM6MT8iq6xkP&X-Amz-Signature=985132d5d7951adc45b69c497211c152989cb126393ea42b20f29f29368a2112&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGC7PNPW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiRlSvIvpwDcHRutfihiaJjS8pxOT2xwRcAElmPbcVlgIhAMs08LGn%2BG%2FRc2wrWhqLDmLPU6ZIKIGXyppIubOMjRIUKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyprxqYsgOzFP2gHnwq3APAHAmy8dgaq1jxoF0pWPEYEQL6M3ci1CdV4%2FfMzqI0lRtLumvIdY%2FsjTCiN%2F0jakfQSDcj9kn%2FH55NVhNronb1Ca3453C59FWbXaEeb%2Fimc5gZVuhwbfGWBCC3IYPwcj%2F2efC4Raard2QEmY9FNsa7vclX%2BtMxiUrJebpBQnB1lQhxnnZ70bge7VSMNXFxXr0a0z2oRA0TNe4gQ%2BpUr%2Brd2T2NehLeGDqMQgrm80l8yxWkXWky0ZFUyqYml8gBn0AQ%2F1Sh2FvkiqxPZgV7hPZr05Wu56F0UtDaOxOGk4c3UBU61IQWzDY%2FZK5vp%2FQ2iWQrr6w9a86%2BCryzRXZSG3lF7bTW4IhYuudnAifaSf1CmMbKx9fWEpEG57kx70xxB7Uf8l4qLNvt8x%2FHSAQMeOYxPTUNg6pwPNhB7kR6GTT22h8E0AApi02XE%2ByuBfT6q6ZkRblflM7yhhfgn%2Fk8L923ptx3ODGZ7jDNZ30tCc4wAI6ZNSr%2FtTAMZAxtaz%2BzIacDV9DUUNd36CjW3u7WW5i7mQBfxdbSKGoFPTcXwEj7d2EZNwM%2FUMVNVraxdnwTBKsUfP1JZ%2BRaZX%2Fgsr3mXdmy%2BFuOlrQZWAlYln9X8xNUY3VGTbRxFwNeWvNpXjDfoPu8BjqkAZ1Fx%2BVr3x81pF9Ec2VVUDnvRO45u3%2BAkYn9Kgb1m%2FbQoX4co39bJ9j4%2FQ09lMOjeLjrY%2FmuoWy0B1CZUJ8%2FZYIHRELyjP%2Bl%2BHt%2BPCDzd8Z3mQpYJXhsD98KwMEFXCW7DkYz7aZf7UAI7YRmNEkivNEHtcj5wT36uJt88ZWXhwEOxRalisnDJO9VbFJ8aXJfH49jMRUN6a3Eq%2F5TNM6MT8iq6xkP&X-Amz-Signature=3c6245cf4921a1989e3c56710a2edf499f03a0e87da4501a8c6661b1cf86e888&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGC7PNPW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiRlSvIvpwDcHRutfihiaJjS8pxOT2xwRcAElmPbcVlgIhAMs08LGn%2BG%2FRc2wrWhqLDmLPU6ZIKIGXyppIubOMjRIUKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyprxqYsgOzFP2gHnwq3APAHAmy8dgaq1jxoF0pWPEYEQL6M3ci1CdV4%2FfMzqI0lRtLumvIdY%2FsjTCiN%2F0jakfQSDcj9kn%2FH55NVhNronb1Ca3453C59FWbXaEeb%2Fimc5gZVuhwbfGWBCC3IYPwcj%2F2efC4Raard2QEmY9FNsa7vclX%2BtMxiUrJebpBQnB1lQhxnnZ70bge7VSMNXFxXr0a0z2oRA0TNe4gQ%2BpUr%2Brd2T2NehLeGDqMQgrm80l8yxWkXWky0ZFUyqYml8gBn0AQ%2F1Sh2FvkiqxPZgV7hPZr05Wu56F0UtDaOxOGk4c3UBU61IQWzDY%2FZK5vp%2FQ2iWQrr6w9a86%2BCryzRXZSG3lF7bTW4IhYuudnAifaSf1CmMbKx9fWEpEG57kx70xxB7Uf8l4qLNvt8x%2FHSAQMeOYxPTUNg6pwPNhB7kR6GTT22h8E0AApi02XE%2ByuBfT6q6ZkRblflM7yhhfgn%2Fk8L923ptx3ODGZ7jDNZ30tCc4wAI6ZNSr%2FtTAMZAxtaz%2BzIacDV9DUUNd36CjW3u7WW5i7mQBfxdbSKGoFPTcXwEj7d2EZNwM%2FUMVNVraxdnwTBKsUfP1JZ%2BRaZX%2Fgsr3mXdmy%2BFuOlrQZWAlYln9X8xNUY3VGTbRxFwNeWvNpXjDfoPu8BjqkAZ1Fx%2BVr3x81pF9Ec2VVUDnvRO45u3%2BAkYn9Kgb1m%2FbQoX4co39bJ9j4%2FQ09lMOjeLjrY%2FmuoWy0B1CZUJ8%2FZYIHRELyjP%2Bl%2BHt%2BPCDzd8Z3mQpYJXhsD98KwMEFXCW7DkYz7aZf7UAI7YRmNEkivNEHtcj5wT36uJt88ZWXhwEOxRalisnDJO9VbFJ8aXJfH49jMRUN6a3Eq%2F5TNM6MT8iq6xkP&X-Amz-Signature=4fd62fff92f4d1b2a1591dd9c3c1e0b31e50fd31584d3565d446b5470c3a1fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGC7PNPW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiRlSvIvpwDcHRutfihiaJjS8pxOT2xwRcAElmPbcVlgIhAMs08LGn%2BG%2FRc2wrWhqLDmLPU6ZIKIGXyppIubOMjRIUKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyprxqYsgOzFP2gHnwq3APAHAmy8dgaq1jxoF0pWPEYEQL6M3ci1CdV4%2FfMzqI0lRtLumvIdY%2FsjTCiN%2F0jakfQSDcj9kn%2FH55NVhNronb1Ca3453C59FWbXaEeb%2Fimc5gZVuhwbfGWBCC3IYPwcj%2F2efC4Raard2QEmY9FNsa7vclX%2BtMxiUrJebpBQnB1lQhxnnZ70bge7VSMNXFxXr0a0z2oRA0TNe4gQ%2BpUr%2Brd2T2NehLeGDqMQgrm80l8yxWkXWky0ZFUyqYml8gBn0AQ%2F1Sh2FvkiqxPZgV7hPZr05Wu56F0UtDaOxOGk4c3UBU61IQWzDY%2FZK5vp%2FQ2iWQrr6w9a86%2BCryzRXZSG3lF7bTW4IhYuudnAifaSf1CmMbKx9fWEpEG57kx70xxB7Uf8l4qLNvt8x%2FHSAQMeOYxPTUNg6pwPNhB7kR6GTT22h8E0AApi02XE%2ByuBfT6q6ZkRblflM7yhhfgn%2Fk8L923ptx3ODGZ7jDNZ30tCc4wAI6ZNSr%2FtTAMZAxtaz%2BzIacDV9DUUNd36CjW3u7WW5i7mQBfxdbSKGoFPTcXwEj7d2EZNwM%2FUMVNVraxdnwTBKsUfP1JZ%2BRaZX%2Fgsr3mXdmy%2BFuOlrQZWAlYln9X8xNUY3VGTbRxFwNeWvNpXjDfoPu8BjqkAZ1Fx%2BVr3x81pF9Ec2VVUDnvRO45u3%2BAkYn9Kgb1m%2FbQoX4co39bJ9j4%2FQ09lMOjeLjrY%2FmuoWy0B1CZUJ8%2FZYIHRELyjP%2Bl%2BHt%2BPCDzd8Z3mQpYJXhsD98KwMEFXCW7DkYz7aZf7UAI7YRmNEkivNEHtcj5wT36uJt88ZWXhwEOxRalisnDJO9VbFJ8aXJfH49jMRUN6a3Eq%2F5TNM6MT8iq6xkP&X-Amz-Signature=a071ffea9eea84f09eb1d9a97a27273aa475e65710796de85101328622881bd9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGC7PNPW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiRlSvIvpwDcHRutfihiaJjS8pxOT2xwRcAElmPbcVlgIhAMs08LGn%2BG%2FRc2wrWhqLDmLPU6ZIKIGXyppIubOMjRIUKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyprxqYsgOzFP2gHnwq3APAHAmy8dgaq1jxoF0pWPEYEQL6M3ci1CdV4%2FfMzqI0lRtLumvIdY%2FsjTCiN%2F0jakfQSDcj9kn%2FH55NVhNronb1Ca3453C59FWbXaEeb%2Fimc5gZVuhwbfGWBCC3IYPwcj%2F2efC4Raard2QEmY9FNsa7vclX%2BtMxiUrJebpBQnB1lQhxnnZ70bge7VSMNXFxXr0a0z2oRA0TNe4gQ%2BpUr%2Brd2T2NehLeGDqMQgrm80l8yxWkXWky0ZFUyqYml8gBn0AQ%2F1Sh2FvkiqxPZgV7hPZr05Wu56F0UtDaOxOGk4c3UBU61IQWzDY%2FZK5vp%2FQ2iWQrr6w9a86%2BCryzRXZSG3lF7bTW4IhYuudnAifaSf1CmMbKx9fWEpEG57kx70xxB7Uf8l4qLNvt8x%2FHSAQMeOYxPTUNg6pwPNhB7kR6GTT22h8E0AApi02XE%2ByuBfT6q6ZkRblflM7yhhfgn%2Fk8L923ptx3ODGZ7jDNZ30tCc4wAI6ZNSr%2FtTAMZAxtaz%2BzIacDV9DUUNd36CjW3u7WW5i7mQBfxdbSKGoFPTcXwEj7d2EZNwM%2FUMVNVraxdnwTBKsUfP1JZ%2BRaZX%2Fgsr3mXdmy%2BFuOlrQZWAlYln9X8xNUY3VGTbRxFwNeWvNpXjDfoPu8BjqkAZ1Fx%2BVr3x81pF9Ec2VVUDnvRO45u3%2BAkYn9Kgb1m%2FbQoX4co39bJ9j4%2FQ09lMOjeLjrY%2FmuoWy0B1CZUJ8%2FZYIHRELyjP%2Bl%2BHt%2BPCDzd8Z3mQpYJXhsD98KwMEFXCW7DkYz7aZf7UAI7YRmNEkivNEHtcj5wT36uJt88ZWXhwEOxRalisnDJO9VbFJ8aXJfH49jMRUN6a3Eq%2F5TNM6MT8iq6xkP&X-Amz-Signature=e684cc309081348d076793f607a42ef9dc32a7cd935b009cba67739f9870628e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGC7PNPW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiRlSvIvpwDcHRutfihiaJjS8pxOT2xwRcAElmPbcVlgIhAMs08LGn%2BG%2FRc2wrWhqLDmLPU6ZIKIGXyppIubOMjRIUKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyprxqYsgOzFP2gHnwq3APAHAmy8dgaq1jxoF0pWPEYEQL6M3ci1CdV4%2FfMzqI0lRtLumvIdY%2FsjTCiN%2F0jakfQSDcj9kn%2FH55NVhNronb1Ca3453C59FWbXaEeb%2Fimc5gZVuhwbfGWBCC3IYPwcj%2F2efC4Raard2QEmY9FNsa7vclX%2BtMxiUrJebpBQnB1lQhxnnZ70bge7VSMNXFxXr0a0z2oRA0TNe4gQ%2BpUr%2Brd2T2NehLeGDqMQgrm80l8yxWkXWky0ZFUyqYml8gBn0AQ%2F1Sh2FvkiqxPZgV7hPZr05Wu56F0UtDaOxOGk4c3UBU61IQWzDY%2FZK5vp%2FQ2iWQrr6w9a86%2BCryzRXZSG3lF7bTW4IhYuudnAifaSf1CmMbKx9fWEpEG57kx70xxB7Uf8l4qLNvt8x%2FHSAQMeOYxPTUNg6pwPNhB7kR6GTT22h8E0AApi02XE%2ByuBfT6q6ZkRblflM7yhhfgn%2Fk8L923ptx3ODGZ7jDNZ30tCc4wAI6ZNSr%2FtTAMZAxtaz%2BzIacDV9DUUNd36CjW3u7WW5i7mQBfxdbSKGoFPTcXwEj7d2EZNwM%2FUMVNVraxdnwTBKsUfP1JZ%2BRaZX%2Fgsr3mXdmy%2BFuOlrQZWAlYln9X8xNUY3VGTbRxFwNeWvNpXjDfoPu8BjqkAZ1Fx%2BVr3x81pF9Ec2VVUDnvRO45u3%2BAkYn9Kgb1m%2FbQoX4co39bJ9j4%2FQ09lMOjeLjrY%2FmuoWy0B1CZUJ8%2FZYIHRELyjP%2Bl%2BHt%2BPCDzd8Z3mQpYJXhsD98KwMEFXCW7DkYz7aZf7UAI7YRmNEkivNEHtcj5wT36uJt88ZWXhwEOxRalisnDJO9VbFJ8aXJfH49jMRUN6a3Eq%2F5TNM6MT8iq6xkP&X-Amz-Signature=929f41a5516f0f15ab4847e8e987608823bdd1fb37308d9c4066245a3bfbf097&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
