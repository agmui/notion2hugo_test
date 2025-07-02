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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK4L2IUO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5u6graO2QPXtroop3NRfLQyMBDqrt5vQq4KM99JVosAiB%2FRijli9iwvBI%2BxjR8ji59hqr7gf6Xm7cloyWiaVPJFyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDU5klKMzEVjS%2BSRuKtwDQx6XF2aldNWo6ttOVKgUAUHGGGL%2FRDj9JlEBhhZPTkN5IYo7ui2iCyWLr7JNmT215cz%2B9wzCgauPoZEc4jE8zOL%2BLrokScpJlvm4R9QHh7VoycbmKgvcNym2WyTr9yPNwPcgO1zG84KHrmfKRm79fzpZXktING45xsPIIxUf5SQrBtPMNgx29HvYuVEhRXDNpickJtjPx%2BTGssS81umXfLwcj5fZry3CF%2BkN8f7M86zav5%2B4sdLYyF%2B5BAhEVtD1CrqwEk1tKNPbrMwfG01oe3udPW%2BTrAbz%2FU7SAfaa2xAqKGmz8RUoWlIAu4ttWsuoJdhQI9nlcCSh5w2eCCmaYK%2FRjZgPaliapLBBLxLy5bSSFRHUm8z4muB1UaHF9dsL%2FSGpC4wZpUIniqbzu2pv2touIzGkHj0IMx%2FTmMbisHzyB0gjfs1wqsN5jXmr3Ajmxws%2BDc77mtRkH9ePHP9k5rwEmuhpKHQ6QVxBPCXKWT8QxUsH%2FgFRyMTgvAGhmudhEATp9xeYZrRXVKN0gyoD%2FV2mLutYpw7l5fGWRX983%2BjZSpiaflqhIHHBVppsLzUvYnOMqiZHmjfP6aLaEFZ5QHdU0XzVtnN3nzD3s9pH0ovvtf6THjTZcpYpgQcw0rqUwwY6pgHJ60uruGu4b%2F5SD0HaPdrme5lfDFwcstzqa6YK4szlMoCj%2BWu%2BDyiqt1gK5J%2Ben8%2Ff0K1VZAf4VqrlBouXMTcuhdDJjyeFfRmqfZYEgkT4NielkjQCZWxUkWL9gDC%2FmXUOxEs2dYcgi1yVfPWy%2FbPQIgCSs%2F%2BX46H2Riabzb3zQiUcMQsTVqVDnEjJD5HIfbG2uN2va5BVptGOeV8XPBcIxWiiwg9Z&X-Amz-Signature=e96974fd72c751b7b2152e52b385a17a7fe1de1227d7a7c16e6b054538b9a0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK4L2IUO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5u6graO2QPXtroop3NRfLQyMBDqrt5vQq4KM99JVosAiB%2FRijli9iwvBI%2BxjR8ji59hqr7gf6Xm7cloyWiaVPJFyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDU5klKMzEVjS%2BSRuKtwDQx6XF2aldNWo6ttOVKgUAUHGGGL%2FRDj9JlEBhhZPTkN5IYo7ui2iCyWLr7JNmT215cz%2B9wzCgauPoZEc4jE8zOL%2BLrokScpJlvm4R9QHh7VoycbmKgvcNym2WyTr9yPNwPcgO1zG84KHrmfKRm79fzpZXktING45xsPIIxUf5SQrBtPMNgx29HvYuVEhRXDNpickJtjPx%2BTGssS81umXfLwcj5fZry3CF%2BkN8f7M86zav5%2B4sdLYyF%2B5BAhEVtD1CrqwEk1tKNPbrMwfG01oe3udPW%2BTrAbz%2FU7SAfaa2xAqKGmz8RUoWlIAu4ttWsuoJdhQI9nlcCSh5w2eCCmaYK%2FRjZgPaliapLBBLxLy5bSSFRHUm8z4muB1UaHF9dsL%2FSGpC4wZpUIniqbzu2pv2touIzGkHj0IMx%2FTmMbisHzyB0gjfs1wqsN5jXmr3Ajmxws%2BDc77mtRkH9ePHP9k5rwEmuhpKHQ6QVxBPCXKWT8QxUsH%2FgFRyMTgvAGhmudhEATp9xeYZrRXVKN0gyoD%2FV2mLutYpw7l5fGWRX983%2BjZSpiaflqhIHHBVppsLzUvYnOMqiZHmjfP6aLaEFZ5QHdU0XzVtnN3nzD3s9pH0ovvtf6THjTZcpYpgQcw0rqUwwY6pgHJ60uruGu4b%2F5SD0HaPdrme5lfDFwcstzqa6YK4szlMoCj%2BWu%2BDyiqt1gK5J%2Ben8%2Ff0K1VZAf4VqrlBouXMTcuhdDJjyeFfRmqfZYEgkT4NielkjQCZWxUkWL9gDC%2FmXUOxEs2dYcgi1yVfPWy%2FbPQIgCSs%2F%2BX46H2Riabzb3zQiUcMQsTVqVDnEjJD5HIfbG2uN2va5BVptGOeV8XPBcIxWiiwg9Z&X-Amz-Signature=dcb46c4f6471565febea64d0b29d921b3895440a15f521508fa803edcd8d1f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK4L2IUO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5u6graO2QPXtroop3NRfLQyMBDqrt5vQq4KM99JVosAiB%2FRijli9iwvBI%2BxjR8ji59hqr7gf6Xm7cloyWiaVPJFyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDU5klKMzEVjS%2BSRuKtwDQx6XF2aldNWo6ttOVKgUAUHGGGL%2FRDj9JlEBhhZPTkN5IYo7ui2iCyWLr7JNmT215cz%2B9wzCgauPoZEc4jE8zOL%2BLrokScpJlvm4R9QHh7VoycbmKgvcNym2WyTr9yPNwPcgO1zG84KHrmfKRm79fzpZXktING45xsPIIxUf5SQrBtPMNgx29HvYuVEhRXDNpickJtjPx%2BTGssS81umXfLwcj5fZry3CF%2BkN8f7M86zav5%2B4sdLYyF%2B5BAhEVtD1CrqwEk1tKNPbrMwfG01oe3udPW%2BTrAbz%2FU7SAfaa2xAqKGmz8RUoWlIAu4ttWsuoJdhQI9nlcCSh5w2eCCmaYK%2FRjZgPaliapLBBLxLy5bSSFRHUm8z4muB1UaHF9dsL%2FSGpC4wZpUIniqbzu2pv2touIzGkHj0IMx%2FTmMbisHzyB0gjfs1wqsN5jXmr3Ajmxws%2BDc77mtRkH9ePHP9k5rwEmuhpKHQ6QVxBPCXKWT8QxUsH%2FgFRyMTgvAGhmudhEATp9xeYZrRXVKN0gyoD%2FV2mLutYpw7l5fGWRX983%2BjZSpiaflqhIHHBVppsLzUvYnOMqiZHmjfP6aLaEFZ5QHdU0XzVtnN3nzD3s9pH0ovvtf6THjTZcpYpgQcw0rqUwwY6pgHJ60uruGu4b%2F5SD0HaPdrme5lfDFwcstzqa6YK4szlMoCj%2BWu%2BDyiqt1gK5J%2Ben8%2Ff0K1VZAf4VqrlBouXMTcuhdDJjyeFfRmqfZYEgkT4NielkjQCZWxUkWL9gDC%2FmXUOxEs2dYcgi1yVfPWy%2FbPQIgCSs%2F%2BX46H2Riabzb3zQiUcMQsTVqVDnEjJD5HIfbG2uN2va5BVptGOeV8XPBcIxWiiwg9Z&X-Amz-Signature=ae59406d4f5a431b7ea7e2cbf7cf72dd6b97e356c520af7a70d9d0213be03324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK4L2IUO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5u6graO2QPXtroop3NRfLQyMBDqrt5vQq4KM99JVosAiB%2FRijli9iwvBI%2BxjR8ji59hqr7gf6Xm7cloyWiaVPJFyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDU5klKMzEVjS%2BSRuKtwDQx6XF2aldNWo6ttOVKgUAUHGGGL%2FRDj9JlEBhhZPTkN5IYo7ui2iCyWLr7JNmT215cz%2B9wzCgauPoZEc4jE8zOL%2BLrokScpJlvm4R9QHh7VoycbmKgvcNym2WyTr9yPNwPcgO1zG84KHrmfKRm79fzpZXktING45xsPIIxUf5SQrBtPMNgx29HvYuVEhRXDNpickJtjPx%2BTGssS81umXfLwcj5fZry3CF%2BkN8f7M86zav5%2B4sdLYyF%2B5BAhEVtD1CrqwEk1tKNPbrMwfG01oe3udPW%2BTrAbz%2FU7SAfaa2xAqKGmz8RUoWlIAu4ttWsuoJdhQI9nlcCSh5w2eCCmaYK%2FRjZgPaliapLBBLxLy5bSSFRHUm8z4muB1UaHF9dsL%2FSGpC4wZpUIniqbzu2pv2touIzGkHj0IMx%2FTmMbisHzyB0gjfs1wqsN5jXmr3Ajmxws%2BDc77mtRkH9ePHP9k5rwEmuhpKHQ6QVxBPCXKWT8QxUsH%2FgFRyMTgvAGhmudhEATp9xeYZrRXVKN0gyoD%2FV2mLutYpw7l5fGWRX983%2BjZSpiaflqhIHHBVppsLzUvYnOMqiZHmjfP6aLaEFZ5QHdU0XzVtnN3nzD3s9pH0ovvtf6THjTZcpYpgQcw0rqUwwY6pgHJ60uruGu4b%2F5SD0HaPdrme5lfDFwcstzqa6YK4szlMoCj%2BWu%2BDyiqt1gK5J%2Ben8%2Ff0K1VZAf4VqrlBouXMTcuhdDJjyeFfRmqfZYEgkT4NielkjQCZWxUkWL9gDC%2FmXUOxEs2dYcgi1yVfPWy%2FbPQIgCSs%2F%2BX46H2Riabzb3zQiUcMQsTVqVDnEjJD5HIfbG2uN2va5BVptGOeV8XPBcIxWiiwg9Z&X-Amz-Signature=6b51aac043708befe5e2cdcd76f51e074a8ee65d87c451a417cbb404ed2d760c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK4L2IUO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5u6graO2QPXtroop3NRfLQyMBDqrt5vQq4KM99JVosAiB%2FRijli9iwvBI%2BxjR8ji59hqr7gf6Xm7cloyWiaVPJFyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDU5klKMzEVjS%2BSRuKtwDQx6XF2aldNWo6ttOVKgUAUHGGGL%2FRDj9JlEBhhZPTkN5IYo7ui2iCyWLr7JNmT215cz%2B9wzCgauPoZEc4jE8zOL%2BLrokScpJlvm4R9QHh7VoycbmKgvcNym2WyTr9yPNwPcgO1zG84KHrmfKRm79fzpZXktING45xsPIIxUf5SQrBtPMNgx29HvYuVEhRXDNpickJtjPx%2BTGssS81umXfLwcj5fZry3CF%2BkN8f7M86zav5%2B4sdLYyF%2B5BAhEVtD1CrqwEk1tKNPbrMwfG01oe3udPW%2BTrAbz%2FU7SAfaa2xAqKGmz8RUoWlIAu4ttWsuoJdhQI9nlcCSh5w2eCCmaYK%2FRjZgPaliapLBBLxLy5bSSFRHUm8z4muB1UaHF9dsL%2FSGpC4wZpUIniqbzu2pv2touIzGkHj0IMx%2FTmMbisHzyB0gjfs1wqsN5jXmr3Ajmxws%2BDc77mtRkH9ePHP9k5rwEmuhpKHQ6QVxBPCXKWT8QxUsH%2FgFRyMTgvAGhmudhEATp9xeYZrRXVKN0gyoD%2FV2mLutYpw7l5fGWRX983%2BjZSpiaflqhIHHBVppsLzUvYnOMqiZHmjfP6aLaEFZ5QHdU0XzVtnN3nzD3s9pH0ovvtf6THjTZcpYpgQcw0rqUwwY6pgHJ60uruGu4b%2F5SD0HaPdrme5lfDFwcstzqa6YK4szlMoCj%2BWu%2BDyiqt1gK5J%2Ben8%2Ff0K1VZAf4VqrlBouXMTcuhdDJjyeFfRmqfZYEgkT4NielkjQCZWxUkWL9gDC%2FmXUOxEs2dYcgi1yVfPWy%2FbPQIgCSs%2F%2BX46H2Riabzb3zQiUcMQsTVqVDnEjJD5HIfbG2uN2va5BVptGOeV8XPBcIxWiiwg9Z&X-Amz-Signature=0a6b5c7b667533045e16dffbbd519806e8aeabd04d9ea1efa1ae45c88ddb7a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK4L2IUO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5u6graO2QPXtroop3NRfLQyMBDqrt5vQq4KM99JVosAiB%2FRijli9iwvBI%2BxjR8ji59hqr7gf6Xm7cloyWiaVPJFyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDU5klKMzEVjS%2BSRuKtwDQx6XF2aldNWo6ttOVKgUAUHGGGL%2FRDj9JlEBhhZPTkN5IYo7ui2iCyWLr7JNmT215cz%2B9wzCgauPoZEc4jE8zOL%2BLrokScpJlvm4R9QHh7VoycbmKgvcNym2WyTr9yPNwPcgO1zG84KHrmfKRm79fzpZXktING45xsPIIxUf5SQrBtPMNgx29HvYuVEhRXDNpickJtjPx%2BTGssS81umXfLwcj5fZry3CF%2BkN8f7M86zav5%2B4sdLYyF%2B5BAhEVtD1CrqwEk1tKNPbrMwfG01oe3udPW%2BTrAbz%2FU7SAfaa2xAqKGmz8RUoWlIAu4ttWsuoJdhQI9nlcCSh5w2eCCmaYK%2FRjZgPaliapLBBLxLy5bSSFRHUm8z4muB1UaHF9dsL%2FSGpC4wZpUIniqbzu2pv2touIzGkHj0IMx%2FTmMbisHzyB0gjfs1wqsN5jXmr3Ajmxws%2BDc77mtRkH9ePHP9k5rwEmuhpKHQ6QVxBPCXKWT8QxUsH%2FgFRyMTgvAGhmudhEATp9xeYZrRXVKN0gyoD%2FV2mLutYpw7l5fGWRX983%2BjZSpiaflqhIHHBVppsLzUvYnOMqiZHmjfP6aLaEFZ5QHdU0XzVtnN3nzD3s9pH0ovvtf6THjTZcpYpgQcw0rqUwwY6pgHJ60uruGu4b%2F5SD0HaPdrme5lfDFwcstzqa6YK4szlMoCj%2BWu%2BDyiqt1gK5J%2Ben8%2Ff0K1VZAf4VqrlBouXMTcuhdDJjyeFfRmqfZYEgkT4NielkjQCZWxUkWL9gDC%2FmXUOxEs2dYcgi1yVfPWy%2FbPQIgCSs%2F%2BX46H2Riabzb3zQiUcMQsTVqVDnEjJD5HIfbG2uN2va5BVptGOeV8XPBcIxWiiwg9Z&X-Amz-Signature=40219308da26abe96673d15961266128f8f087471312128270f2b9c63a477921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK4L2IUO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5u6graO2QPXtroop3NRfLQyMBDqrt5vQq4KM99JVosAiB%2FRijli9iwvBI%2BxjR8ji59hqr7gf6Xm7cloyWiaVPJFyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDU5klKMzEVjS%2BSRuKtwDQx6XF2aldNWo6ttOVKgUAUHGGGL%2FRDj9JlEBhhZPTkN5IYo7ui2iCyWLr7JNmT215cz%2B9wzCgauPoZEc4jE8zOL%2BLrokScpJlvm4R9QHh7VoycbmKgvcNym2WyTr9yPNwPcgO1zG84KHrmfKRm79fzpZXktING45xsPIIxUf5SQrBtPMNgx29HvYuVEhRXDNpickJtjPx%2BTGssS81umXfLwcj5fZry3CF%2BkN8f7M86zav5%2B4sdLYyF%2B5BAhEVtD1CrqwEk1tKNPbrMwfG01oe3udPW%2BTrAbz%2FU7SAfaa2xAqKGmz8RUoWlIAu4ttWsuoJdhQI9nlcCSh5w2eCCmaYK%2FRjZgPaliapLBBLxLy5bSSFRHUm8z4muB1UaHF9dsL%2FSGpC4wZpUIniqbzu2pv2touIzGkHj0IMx%2FTmMbisHzyB0gjfs1wqsN5jXmr3Ajmxws%2BDc77mtRkH9ePHP9k5rwEmuhpKHQ6QVxBPCXKWT8QxUsH%2FgFRyMTgvAGhmudhEATp9xeYZrRXVKN0gyoD%2FV2mLutYpw7l5fGWRX983%2BjZSpiaflqhIHHBVppsLzUvYnOMqiZHmjfP6aLaEFZ5QHdU0XzVtnN3nzD3s9pH0ovvtf6THjTZcpYpgQcw0rqUwwY6pgHJ60uruGu4b%2F5SD0HaPdrme5lfDFwcstzqa6YK4szlMoCj%2BWu%2BDyiqt1gK5J%2Ben8%2Ff0K1VZAf4VqrlBouXMTcuhdDJjyeFfRmqfZYEgkT4NielkjQCZWxUkWL9gDC%2FmXUOxEs2dYcgi1yVfPWy%2FbPQIgCSs%2F%2BX46H2Riabzb3zQiUcMQsTVqVDnEjJD5HIfbG2uN2va5BVptGOeV8XPBcIxWiiwg9Z&X-Amz-Signature=871c02ba9da858f9e684b9ac09dc763ba1300fdc253c2754c59bed919032563c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
