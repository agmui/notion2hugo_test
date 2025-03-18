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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T25TPGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC1heos4LmhWgOJuQl%2FnT98ESVU9mIHOtkYPZrO1CaBoQIhAKkXA23P6mzvmaMiwY9jvN7kXNfk4hFzuouMe2fSW10oKv8DCF4QABoMNjM3NDIzMTgzODA1Igw97MdzjtpoJudL3C4q3APJXzipM1qdtip12Ma2sd5RBKPu5h1tR%2FGuuC3PLOc1UdpLSEklmdSizJRnw1DjpkgBlpqoEi1uhJ4pb4AVJBWJf%2BxBvdTBkTTK70N7Gfh6yXo7zwSCK45XjmLL3YBXRe0cao58zC8C4HnPT%2FlIigsnwnWAZ0Yv6zkQ4OzEPJ2i0gx%2Bbfzv%2FBGZlTLuMWfrQFKEW%2FnSWiXGiwvdC6DHnB%2BJNFq3%2FhCW0uF8fFFg%2BvWkxdPJuXY4bWEVV5heKuGfgGO4I7ZmcELduWFUwvILTeT%2B0EAaJcoXRG7rAWeiJys9kkY%2B4fVUCnVptFD6X8c%2FMFRQsIVHAgdMgJcZOrQW4CDWtXtI7fccexYRJ1taulS8A6CwI5Jc3LlIYdIIQPOpRO%2FmypJxEpZyBpcBNMKAr0Mo1juMaEtBUkqcA742Da%2BAOzCGbAD3B4epRQUPoyvaequ4qDxU3TGS5fa4%2FvV4yBCbuWFWJGTAix91HAANanOg%2Bz52q%2FitN3weGBQqjY1MR0PHy4rm6hKfXvyUWCeYbnnOJ92OoAC%2Fsi5wlIfrlO2dDj1iyuXTnDXEusqqw8PDvaaUSqazFk6hEj6ViWapI8ONhT9k%2FDvwlDbM66TJfXOxwNEcviNC%2FPHuvM22iTCJ1uW%2BBjqkAcLEYQEEWWVyzkwk0dm3qmYuNmel2qVJf4evkFK5tSbd9eWBEr3OjizqYzf8tj3E1vBKRXpvq6Qk703KCt3mEBTBfzGgdqkQqNN%2FyJIV%2B04HjH7Mp51C1zyc4wljpG%2FMgcW%2FTCIM7touVDVVom7F7o5lpk7qfTka6XDwVtU6tuNoTGbXkafvQFmwRFZOh%2FzdbVSX2%2BC1po2a391jlTq6A5w8dCnJ&X-Amz-Signature=d1479389c79b11a7d70e336ee84eb9be8689c7d76b1b640c477e453b59104f68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T25TPGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC1heos4LmhWgOJuQl%2FnT98ESVU9mIHOtkYPZrO1CaBoQIhAKkXA23P6mzvmaMiwY9jvN7kXNfk4hFzuouMe2fSW10oKv8DCF4QABoMNjM3NDIzMTgzODA1Igw97MdzjtpoJudL3C4q3APJXzipM1qdtip12Ma2sd5RBKPu5h1tR%2FGuuC3PLOc1UdpLSEklmdSizJRnw1DjpkgBlpqoEi1uhJ4pb4AVJBWJf%2BxBvdTBkTTK70N7Gfh6yXo7zwSCK45XjmLL3YBXRe0cao58zC8C4HnPT%2FlIigsnwnWAZ0Yv6zkQ4OzEPJ2i0gx%2Bbfzv%2FBGZlTLuMWfrQFKEW%2FnSWiXGiwvdC6DHnB%2BJNFq3%2FhCW0uF8fFFg%2BvWkxdPJuXY4bWEVV5heKuGfgGO4I7ZmcELduWFUwvILTeT%2B0EAaJcoXRG7rAWeiJys9kkY%2B4fVUCnVptFD6X8c%2FMFRQsIVHAgdMgJcZOrQW4CDWtXtI7fccexYRJ1taulS8A6CwI5Jc3LlIYdIIQPOpRO%2FmypJxEpZyBpcBNMKAr0Mo1juMaEtBUkqcA742Da%2BAOzCGbAD3B4epRQUPoyvaequ4qDxU3TGS5fa4%2FvV4yBCbuWFWJGTAix91HAANanOg%2Bz52q%2FitN3weGBQqjY1MR0PHy4rm6hKfXvyUWCeYbnnOJ92OoAC%2Fsi5wlIfrlO2dDj1iyuXTnDXEusqqw8PDvaaUSqazFk6hEj6ViWapI8ONhT9k%2FDvwlDbM66TJfXOxwNEcviNC%2FPHuvM22iTCJ1uW%2BBjqkAcLEYQEEWWVyzkwk0dm3qmYuNmel2qVJf4evkFK5tSbd9eWBEr3OjizqYzf8tj3E1vBKRXpvq6Qk703KCt3mEBTBfzGgdqkQqNN%2FyJIV%2B04HjH7Mp51C1zyc4wljpG%2FMgcW%2FTCIM7touVDVVom7F7o5lpk7qfTka6XDwVtU6tuNoTGbXkafvQFmwRFZOh%2FzdbVSX2%2BC1po2a391jlTq6A5w8dCnJ&X-Amz-Signature=15a375021fbaca8c5aa09790f279f9409686d6556c075dd65a3e18569528880b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T25TPGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC1heos4LmhWgOJuQl%2FnT98ESVU9mIHOtkYPZrO1CaBoQIhAKkXA23P6mzvmaMiwY9jvN7kXNfk4hFzuouMe2fSW10oKv8DCF4QABoMNjM3NDIzMTgzODA1Igw97MdzjtpoJudL3C4q3APJXzipM1qdtip12Ma2sd5RBKPu5h1tR%2FGuuC3PLOc1UdpLSEklmdSizJRnw1DjpkgBlpqoEi1uhJ4pb4AVJBWJf%2BxBvdTBkTTK70N7Gfh6yXo7zwSCK45XjmLL3YBXRe0cao58zC8C4HnPT%2FlIigsnwnWAZ0Yv6zkQ4OzEPJ2i0gx%2Bbfzv%2FBGZlTLuMWfrQFKEW%2FnSWiXGiwvdC6DHnB%2BJNFq3%2FhCW0uF8fFFg%2BvWkxdPJuXY4bWEVV5heKuGfgGO4I7ZmcELduWFUwvILTeT%2B0EAaJcoXRG7rAWeiJys9kkY%2B4fVUCnVptFD6X8c%2FMFRQsIVHAgdMgJcZOrQW4CDWtXtI7fccexYRJ1taulS8A6CwI5Jc3LlIYdIIQPOpRO%2FmypJxEpZyBpcBNMKAr0Mo1juMaEtBUkqcA742Da%2BAOzCGbAD3B4epRQUPoyvaequ4qDxU3TGS5fa4%2FvV4yBCbuWFWJGTAix91HAANanOg%2Bz52q%2FitN3weGBQqjY1MR0PHy4rm6hKfXvyUWCeYbnnOJ92OoAC%2Fsi5wlIfrlO2dDj1iyuXTnDXEusqqw8PDvaaUSqazFk6hEj6ViWapI8ONhT9k%2FDvwlDbM66TJfXOxwNEcviNC%2FPHuvM22iTCJ1uW%2BBjqkAcLEYQEEWWVyzkwk0dm3qmYuNmel2qVJf4evkFK5tSbd9eWBEr3OjizqYzf8tj3E1vBKRXpvq6Qk703KCt3mEBTBfzGgdqkQqNN%2FyJIV%2B04HjH7Mp51C1zyc4wljpG%2FMgcW%2FTCIM7touVDVVom7F7o5lpk7qfTka6XDwVtU6tuNoTGbXkafvQFmwRFZOh%2FzdbVSX2%2BC1po2a391jlTq6A5w8dCnJ&X-Amz-Signature=6b4cdbb330b48383c5c491a5696b56d4d67c153e50dd8f9ad9874b83845033f1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T25TPGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC1heos4LmhWgOJuQl%2FnT98ESVU9mIHOtkYPZrO1CaBoQIhAKkXA23P6mzvmaMiwY9jvN7kXNfk4hFzuouMe2fSW10oKv8DCF4QABoMNjM3NDIzMTgzODA1Igw97MdzjtpoJudL3C4q3APJXzipM1qdtip12Ma2sd5RBKPu5h1tR%2FGuuC3PLOc1UdpLSEklmdSizJRnw1DjpkgBlpqoEi1uhJ4pb4AVJBWJf%2BxBvdTBkTTK70N7Gfh6yXo7zwSCK45XjmLL3YBXRe0cao58zC8C4HnPT%2FlIigsnwnWAZ0Yv6zkQ4OzEPJ2i0gx%2Bbfzv%2FBGZlTLuMWfrQFKEW%2FnSWiXGiwvdC6DHnB%2BJNFq3%2FhCW0uF8fFFg%2BvWkxdPJuXY4bWEVV5heKuGfgGO4I7ZmcELduWFUwvILTeT%2B0EAaJcoXRG7rAWeiJys9kkY%2B4fVUCnVptFD6X8c%2FMFRQsIVHAgdMgJcZOrQW4CDWtXtI7fccexYRJ1taulS8A6CwI5Jc3LlIYdIIQPOpRO%2FmypJxEpZyBpcBNMKAr0Mo1juMaEtBUkqcA742Da%2BAOzCGbAD3B4epRQUPoyvaequ4qDxU3TGS5fa4%2FvV4yBCbuWFWJGTAix91HAANanOg%2Bz52q%2FitN3weGBQqjY1MR0PHy4rm6hKfXvyUWCeYbnnOJ92OoAC%2Fsi5wlIfrlO2dDj1iyuXTnDXEusqqw8PDvaaUSqazFk6hEj6ViWapI8ONhT9k%2FDvwlDbM66TJfXOxwNEcviNC%2FPHuvM22iTCJ1uW%2BBjqkAcLEYQEEWWVyzkwk0dm3qmYuNmel2qVJf4evkFK5tSbd9eWBEr3OjizqYzf8tj3E1vBKRXpvq6Qk703KCt3mEBTBfzGgdqkQqNN%2FyJIV%2B04HjH7Mp51C1zyc4wljpG%2FMgcW%2FTCIM7touVDVVom7F7o5lpk7qfTka6XDwVtU6tuNoTGbXkafvQFmwRFZOh%2FzdbVSX2%2BC1po2a391jlTq6A5w8dCnJ&X-Amz-Signature=e2cac18bec7c8cfb405b1cf5b337c7b0288c9a50baf6966f0f32f6166ba55812&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T25TPGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC1heos4LmhWgOJuQl%2FnT98ESVU9mIHOtkYPZrO1CaBoQIhAKkXA23P6mzvmaMiwY9jvN7kXNfk4hFzuouMe2fSW10oKv8DCF4QABoMNjM3NDIzMTgzODA1Igw97MdzjtpoJudL3C4q3APJXzipM1qdtip12Ma2sd5RBKPu5h1tR%2FGuuC3PLOc1UdpLSEklmdSizJRnw1DjpkgBlpqoEi1uhJ4pb4AVJBWJf%2BxBvdTBkTTK70N7Gfh6yXo7zwSCK45XjmLL3YBXRe0cao58zC8C4HnPT%2FlIigsnwnWAZ0Yv6zkQ4OzEPJ2i0gx%2Bbfzv%2FBGZlTLuMWfrQFKEW%2FnSWiXGiwvdC6DHnB%2BJNFq3%2FhCW0uF8fFFg%2BvWkxdPJuXY4bWEVV5heKuGfgGO4I7ZmcELduWFUwvILTeT%2B0EAaJcoXRG7rAWeiJys9kkY%2B4fVUCnVptFD6X8c%2FMFRQsIVHAgdMgJcZOrQW4CDWtXtI7fccexYRJ1taulS8A6CwI5Jc3LlIYdIIQPOpRO%2FmypJxEpZyBpcBNMKAr0Mo1juMaEtBUkqcA742Da%2BAOzCGbAD3B4epRQUPoyvaequ4qDxU3TGS5fa4%2FvV4yBCbuWFWJGTAix91HAANanOg%2Bz52q%2FitN3weGBQqjY1MR0PHy4rm6hKfXvyUWCeYbnnOJ92OoAC%2Fsi5wlIfrlO2dDj1iyuXTnDXEusqqw8PDvaaUSqazFk6hEj6ViWapI8ONhT9k%2FDvwlDbM66TJfXOxwNEcviNC%2FPHuvM22iTCJ1uW%2BBjqkAcLEYQEEWWVyzkwk0dm3qmYuNmel2qVJf4evkFK5tSbd9eWBEr3OjizqYzf8tj3E1vBKRXpvq6Qk703KCt3mEBTBfzGgdqkQqNN%2FyJIV%2B04HjH7Mp51C1zyc4wljpG%2FMgcW%2FTCIM7touVDVVom7F7o5lpk7qfTka6XDwVtU6tuNoTGbXkafvQFmwRFZOh%2FzdbVSX2%2BC1po2a391jlTq6A5w8dCnJ&X-Amz-Signature=7fa414ec0fd4ce5fcaaaed0f2e9ffc7ff5c116ebf65cddee16be5b4f5c2170a3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T25TPGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC1heos4LmhWgOJuQl%2FnT98ESVU9mIHOtkYPZrO1CaBoQIhAKkXA23P6mzvmaMiwY9jvN7kXNfk4hFzuouMe2fSW10oKv8DCF4QABoMNjM3NDIzMTgzODA1Igw97MdzjtpoJudL3C4q3APJXzipM1qdtip12Ma2sd5RBKPu5h1tR%2FGuuC3PLOc1UdpLSEklmdSizJRnw1DjpkgBlpqoEi1uhJ4pb4AVJBWJf%2BxBvdTBkTTK70N7Gfh6yXo7zwSCK45XjmLL3YBXRe0cao58zC8C4HnPT%2FlIigsnwnWAZ0Yv6zkQ4OzEPJ2i0gx%2Bbfzv%2FBGZlTLuMWfrQFKEW%2FnSWiXGiwvdC6DHnB%2BJNFq3%2FhCW0uF8fFFg%2BvWkxdPJuXY4bWEVV5heKuGfgGO4I7ZmcELduWFUwvILTeT%2B0EAaJcoXRG7rAWeiJys9kkY%2B4fVUCnVptFD6X8c%2FMFRQsIVHAgdMgJcZOrQW4CDWtXtI7fccexYRJ1taulS8A6CwI5Jc3LlIYdIIQPOpRO%2FmypJxEpZyBpcBNMKAr0Mo1juMaEtBUkqcA742Da%2BAOzCGbAD3B4epRQUPoyvaequ4qDxU3TGS5fa4%2FvV4yBCbuWFWJGTAix91HAANanOg%2Bz52q%2FitN3weGBQqjY1MR0PHy4rm6hKfXvyUWCeYbnnOJ92OoAC%2Fsi5wlIfrlO2dDj1iyuXTnDXEusqqw8PDvaaUSqazFk6hEj6ViWapI8ONhT9k%2FDvwlDbM66TJfXOxwNEcviNC%2FPHuvM22iTCJ1uW%2BBjqkAcLEYQEEWWVyzkwk0dm3qmYuNmel2qVJf4evkFK5tSbd9eWBEr3OjizqYzf8tj3E1vBKRXpvq6Qk703KCt3mEBTBfzGgdqkQqNN%2FyJIV%2B04HjH7Mp51C1zyc4wljpG%2FMgcW%2FTCIM7touVDVVom7F7o5lpk7qfTka6XDwVtU6tuNoTGbXkafvQFmwRFZOh%2FzdbVSX2%2BC1po2a391jlTq6A5w8dCnJ&X-Amz-Signature=847ad70f44f002637b1c17dfc4141e1433726bf7cf70b6a4cf23f23d3fcde767&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T25TPGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC1heos4LmhWgOJuQl%2FnT98ESVU9mIHOtkYPZrO1CaBoQIhAKkXA23P6mzvmaMiwY9jvN7kXNfk4hFzuouMe2fSW10oKv8DCF4QABoMNjM3NDIzMTgzODA1Igw97MdzjtpoJudL3C4q3APJXzipM1qdtip12Ma2sd5RBKPu5h1tR%2FGuuC3PLOc1UdpLSEklmdSizJRnw1DjpkgBlpqoEi1uhJ4pb4AVJBWJf%2BxBvdTBkTTK70N7Gfh6yXo7zwSCK45XjmLL3YBXRe0cao58zC8C4HnPT%2FlIigsnwnWAZ0Yv6zkQ4OzEPJ2i0gx%2Bbfzv%2FBGZlTLuMWfrQFKEW%2FnSWiXGiwvdC6DHnB%2BJNFq3%2FhCW0uF8fFFg%2BvWkxdPJuXY4bWEVV5heKuGfgGO4I7ZmcELduWFUwvILTeT%2B0EAaJcoXRG7rAWeiJys9kkY%2B4fVUCnVptFD6X8c%2FMFRQsIVHAgdMgJcZOrQW4CDWtXtI7fccexYRJ1taulS8A6CwI5Jc3LlIYdIIQPOpRO%2FmypJxEpZyBpcBNMKAr0Mo1juMaEtBUkqcA742Da%2BAOzCGbAD3B4epRQUPoyvaequ4qDxU3TGS5fa4%2FvV4yBCbuWFWJGTAix91HAANanOg%2Bz52q%2FitN3weGBQqjY1MR0PHy4rm6hKfXvyUWCeYbnnOJ92OoAC%2Fsi5wlIfrlO2dDj1iyuXTnDXEusqqw8PDvaaUSqazFk6hEj6ViWapI8ONhT9k%2FDvwlDbM66TJfXOxwNEcviNC%2FPHuvM22iTCJ1uW%2BBjqkAcLEYQEEWWVyzkwk0dm3qmYuNmel2qVJf4evkFK5tSbd9eWBEr3OjizqYzf8tj3E1vBKRXpvq6Qk703KCt3mEBTBfzGgdqkQqNN%2FyJIV%2B04HjH7Mp51C1zyc4wljpG%2FMgcW%2FTCIM7touVDVVom7F7o5lpk7qfTka6XDwVtU6tuNoTGbXkafvQFmwRFZOh%2FzdbVSX2%2BC1po2a391jlTq6A5w8dCnJ&X-Amz-Signature=437281a648792f83534fcd3c268d980acfb84ef8b5990580e53d2e5c1a4d7855&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
