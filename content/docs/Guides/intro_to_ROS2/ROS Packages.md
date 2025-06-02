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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY32C2JY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICzd4iYDvCdHKGV4n4ylImAH%2FAmofoEkPf3agXfudwCHAiEAqgJyuZOq6DR3915pooAbigAMQTEWqEyttdf%2F%2FJXjVHkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANt4gvp4A5y6nMZsCrcAyElT%2FPohFVeVCCLd4p%2BzwxHM9KNOMtSWvXIEWS5LmAR8kQCiSxzT0%2FBid7A56udvLE67RY7SaM%2BKoiX6sAhgfPdEfzYA0oi1EPC6eldgI5jANj51rEXPJ4ZUSTd4dq1ZJofyDMIXbB9J6UVg8cy9IBpAVIvzd8VT46safqFiHE0FM%2BYykh5AbFltnR4LazLIl7IX%2BKrkZJVfA1WyzhEluMSMte0oqmJZlyfT5jqnaoKq%2BK0wwNp7451UNs1C92pgBiZCOXA6zKW%2BXfzB8xeu3pzONMFylmOiYAbo7FxZdkVXfkib6UuDrLS86XB%2BKd%2FXcdB0GvWqz0JE4PIeYK9vWRKHv6Z%2FS4sd70ImDV59FS6DgmxRxODHnC0BFcqclAjGnCjlBqt4aC08GHvH2P9j6XZJRHgg9gCreVVpXwqtiTMhN884zS552r5R9YJNEgpOvWuw8hB1dR5cMS0DLYlDdpMTm0aWIpqcH36FDyIiZLl0OZqBpV4Ahd6ksZnRwrAxN3Hl6q%2BjHEIPq%2B3oOg3D%2FHW%2F7ZvKPd37NEX8Sq8xgpYXVJrdjAYo1z49Y5md5GzT9zvqVa6f7Uu5FTe2YZd3HwiOt7PTV6eicwa3MNAwBKHiYRhjWTsoy83W3fRMOqQ9cEGOqUBtzTIg4plS4E3rRelbGkXPAvxSLPV%2Bmm57mhEamr1GPbguDCuz%2FXvaWQjl3nEE3BL9eTvpkhPsbVONRYbrUF2obzCD%2B3ElV%2F7SxELuDgY1%2B2k2E3fh0fwBb1AL3hyz8vq7ocupcP5VgEp3eGfDmfc2VNYWt%2BXyA7Cm8kCK4hVBE%2B%2B0XgUVxkAgGM%2FIGIiwu3csRhMBbFgJh1u7uLott7uO7IS9uvD&X-Amz-Signature=9591cebb5d527814c7d8cb8568b55085b0e34451fd910ad3d34733d0a1a58e87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY32C2JY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICzd4iYDvCdHKGV4n4ylImAH%2FAmofoEkPf3agXfudwCHAiEAqgJyuZOq6DR3915pooAbigAMQTEWqEyttdf%2F%2FJXjVHkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANt4gvp4A5y6nMZsCrcAyElT%2FPohFVeVCCLd4p%2BzwxHM9KNOMtSWvXIEWS5LmAR8kQCiSxzT0%2FBid7A56udvLE67RY7SaM%2BKoiX6sAhgfPdEfzYA0oi1EPC6eldgI5jANj51rEXPJ4ZUSTd4dq1ZJofyDMIXbB9J6UVg8cy9IBpAVIvzd8VT46safqFiHE0FM%2BYykh5AbFltnR4LazLIl7IX%2BKrkZJVfA1WyzhEluMSMte0oqmJZlyfT5jqnaoKq%2BK0wwNp7451UNs1C92pgBiZCOXA6zKW%2BXfzB8xeu3pzONMFylmOiYAbo7FxZdkVXfkib6UuDrLS86XB%2BKd%2FXcdB0GvWqz0JE4PIeYK9vWRKHv6Z%2FS4sd70ImDV59FS6DgmxRxODHnC0BFcqclAjGnCjlBqt4aC08GHvH2P9j6XZJRHgg9gCreVVpXwqtiTMhN884zS552r5R9YJNEgpOvWuw8hB1dR5cMS0DLYlDdpMTm0aWIpqcH36FDyIiZLl0OZqBpV4Ahd6ksZnRwrAxN3Hl6q%2BjHEIPq%2B3oOg3D%2FHW%2F7ZvKPd37NEX8Sq8xgpYXVJrdjAYo1z49Y5md5GzT9zvqVa6f7Uu5FTe2YZd3HwiOt7PTV6eicwa3MNAwBKHiYRhjWTsoy83W3fRMOqQ9cEGOqUBtzTIg4plS4E3rRelbGkXPAvxSLPV%2Bmm57mhEamr1GPbguDCuz%2FXvaWQjl3nEE3BL9eTvpkhPsbVONRYbrUF2obzCD%2B3ElV%2F7SxELuDgY1%2B2k2E3fh0fwBb1AL3hyz8vq7ocupcP5VgEp3eGfDmfc2VNYWt%2BXyA7Cm8kCK4hVBE%2B%2B0XgUVxkAgGM%2FIGIiwu3csRhMBbFgJh1u7uLott7uO7IS9uvD&X-Amz-Signature=e6b45b3fe1aed940acace9cb2b5549266d70c41d9e30bb81a82007e5b9ed8392&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY32C2JY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICzd4iYDvCdHKGV4n4ylImAH%2FAmofoEkPf3agXfudwCHAiEAqgJyuZOq6DR3915pooAbigAMQTEWqEyttdf%2F%2FJXjVHkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANt4gvp4A5y6nMZsCrcAyElT%2FPohFVeVCCLd4p%2BzwxHM9KNOMtSWvXIEWS5LmAR8kQCiSxzT0%2FBid7A56udvLE67RY7SaM%2BKoiX6sAhgfPdEfzYA0oi1EPC6eldgI5jANj51rEXPJ4ZUSTd4dq1ZJofyDMIXbB9J6UVg8cy9IBpAVIvzd8VT46safqFiHE0FM%2BYykh5AbFltnR4LazLIl7IX%2BKrkZJVfA1WyzhEluMSMte0oqmJZlyfT5jqnaoKq%2BK0wwNp7451UNs1C92pgBiZCOXA6zKW%2BXfzB8xeu3pzONMFylmOiYAbo7FxZdkVXfkib6UuDrLS86XB%2BKd%2FXcdB0GvWqz0JE4PIeYK9vWRKHv6Z%2FS4sd70ImDV59FS6DgmxRxODHnC0BFcqclAjGnCjlBqt4aC08GHvH2P9j6XZJRHgg9gCreVVpXwqtiTMhN884zS552r5R9YJNEgpOvWuw8hB1dR5cMS0DLYlDdpMTm0aWIpqcH36FDyIiZLl0OZqBpV4Ahd6ksZnRwrAxN3Hl6q%2BjHEIPq%2B3oOg3D%2FHW%2F7ZvKPd37NEX8Sq8xgpYXVJrdjAYo1z49Y5md5GzT9zvqVa6f7Uu5FTe2YZd3HwiOt7PTV6eicwa3MNAwBKHiYRhjWTsoy83W3fRMOqQ9cEGOqUBtzTIg4plS4E3rRelbGkXPAvxSLPV%2Bmm57mhEamr1GPbguDCuz%2FXvaWQjl3nEE3BL9eTvpkhPsbVONRYbrUF2obzCD%2B3ElV%2F7SxELuDgY1%2B2k2E3fh0fwBb1AL3hyz8vq7ocupcP5VgEp3eGfDmfc2VNYWt%2BXyA7Cm8kCK4hVBE%2B%2B0XgUVxkAgGM%2FIGIiwu3csRhMBbFgJh1u7uLott7uO7IS9uvD&X-Amz-Signature=a9d848d2b81aa20541f5cdc4dbbc5a70973c24083e64399bd8d09e8568898087&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY32C2JY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICzd4iYDvCdHKGV4n4ylImAH%2FAmofoEkPf3agXfudwCHAiEAqgJyuZOq6DR3915pooAbigAMQTEWqEyttdf%2F%2FJXjVHkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANt4gvp4A5y6nMZsCrcAyElT%2FPohFVeVCCLd4p%2BzwxHM9KNOMtSWvXIEWS5LmAR8kQCiSxzT0%2FBid7A56udvLE67RY7SaM%2BKoiX6sAhgfPdEfzYA0oi1EPC6eldgI5jANj51rEXPJ4ZUSTd4dq1ZJofyDMIXbB9J6UVg8cy9IBpAVIvzd8VT46safqFiHE0FM%2BYykh5AbFltnR4LazLIl7IX%2BKrkZJVfA1WyzhEluMSMte0oqmJZlyfT5jqnaoKq%2BK0wwNp7451UNs1C92pgBiZCOXA6zKW%2BXfzB8xeu3pzONMFylmOiYAbo7FxZdkVXfkib6UuDrLS86XB%2BKd%2FXcdB0GvWqz0JE4PIeYK9vWRKHv6Z%2FS4sd70ImDV59FS6DgmxRxODHnC0BFcqclAjGnCjlBqt4aC08GHvH2P9j6XZJRHgg9gCreVVpXwqtiTMhN884zS552r5R9YJNEgpOvWuw8hB1dR5cMS0DLYlDdpMTm0aWIpqcH36FDyIiZLl0OZqBpV4Ahd6ksZnRwrAxN3Hl6q%2BjHEIPq%2B3oOg3D%2FHW%2F7ZvKPd37NEX8Sq8xgpYXVJrdjAYo1z49Y5md5GzT9zvqVa6f7Uu5FTe2YZd3HwiOt7PTV6eicwa3MNAwBKHiYRhjWTsoy83W3fRMOqQ9cEGOqUBtzTIg4plS4E3rRelbGkXPAvxSLPV%2Bmm57mhEamr1GPbguDCuz%2FXvaWQjl3nEE3BL9eTvpkhPsbVONRYbrUF2obzCD%2B3ElV%2F7SxELuDgY1%2B2k2E3fh0fwBb1AL3hyz8vq7ocupcP5VgEp3eGfDmfc2VNYWt%2BXyA7Cm8kCK4hVBE%2B%2B0XgUVxkAgGM%2FIGIiwu3csRhMBbFgJh1u7uLott7uO7IS9uvD&X-Amz-Signature=076dd34028357defd39da1bb81db8549f77563c1051849c317262fd625d6e588&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY32C2JY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICzd4iYDvCdHKGV4n4ylImAH%2FAmofoEkPf3agXfudwCHAiEAqgJyuZOq6DR3915pooAbigAMQTEWqEyttdf%2F%2FJXjVHkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANt4gvp4A5y6nMZsCrcAyElT%2FPohFVeVCCLd4p%2BzwxHM9KNOMtSWvXIEWS5LmAR8kQCiSxzT0%2FBid7A56udvLE67RY7SaM%2BKoiX6sAhgfPdEfzYA0oi1EPC6eldgI5jANj51rEXPJ4ZUSTd4dq1ZJofyDMIXbB9J6UVg8cy9IBpAVIvzd8VT46safqFiHE0FM%2BYykh5AbFltnR4LazLIl7IX%2BKrkZJVfA1WyzhEluMSMte0oqmJZlyfT5jqnaoKq%2BK0wwNp7451UNs1C92pgBiZCOXA6zKW%2BXfzB8xeu3pzONMFylmOiYAbo7FxZdkVXfkib6UuDrLS86XB%2BKd%2FXcdB0GvWqz0JE4PIeYK9vWRKHv6Z%2FS4sd70ImDV59FS6DgmxRxODHnC0BFcqclAjGnCjlBqt4aC08GHvH2P9j6XZJRHgg9gCreVVpXwqtiTMhN884zS552r5R9YJNEgpOvWuw8hB1dR5cMS0DLYlDdpMTm0aWIpqcH36FDyIiZLl0OZqBpV4Ahd6ksZnRwrAxN3Hl6q%2BjHEIPq%2B3oOg3D%2FHW%2F7ZvKPd37NEX8Sq8xgpYXVJrdjAYo1z49Y5md5GzT9zvqVa6f7Uu5FTe2YZd3HwiOt7PTV6eicwa3MNAwBKHiYRhjWTsoy83W3fRMOqQ9cEGOqUBtzTIg4plS4E3rRelbGkXPAvxSLPV%2Bmm57mhEamr1GPbguDCuz%2FXvaWQjl3nEE3BL9eTvpkhPsbVONRYbrUF2obzCD%2B3ElV%2F7SxELuDgY1%2B2k2E3fh0fwBb1AL3hyz8vq7ocupcP5VgEp3eGfDmfc2VNYWt%2BXyA7Cm8kCK4hVBE%2B%2B0XgUVxkAgGM%2FIGIiwu3csRhMBbFgJh1u7uLott7uO7IS9uvD&X-Amz-Signature=e6907a546e7b235a38463e888a5d9369debe804b1e7a12edc9b1c9e0c06cbacd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY32C2JY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICzd4iYDvCdHKGV4n4ylImAH%2FAmofoEkPf3agXfudwCHAiEAqgJyuZOq6DR3915pooAbigAMQTEWqEyttdf%2F%2FJXjVHkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANt4gvp4A5y6nMZsCrcAyElT%2FPohFVeVCCLd4p%2BzwxHM9KNOMtSWvXIEWS5LmAR8kQCiSxzT0%2FBid7A56udvLE67RY7SaM%2BKoiX6sAhgfPdEfzYA0oi1EPC6eldgI5jANj51rEXPJ4ZUSTd4dq1ZJofyDMIXbB9J6UVg8cy9IBpAVIvzd8VT46safqFiHE0FM%2BYykh5AbFltnR4LazLIl7IX%2BKrkZJVfA1WyzhEluMSMte0oqmJZlyfT5jqnaoKq%2BK0wwNp7451UNs1C92pgBiZCOXA6zKW%2BXfzB8xeu3pzONMFylmOiYAbo7FxZdkVXfkib6UuDrLS86XB%2BKd%2FXcdB0GvWqz0JE4PIeYK9vWRKHv6Z%2FS4sd70ImDV59FS6DgmxRxODHnC0BFcqclAjGnCjlBqt4aC08GHvH2P9j6XZJRHgg9gCreVVpXwqtiTMhN884zS552r5R9YJNEgpOvWuw8hB1dR5cMS0DLYlDdpMTm0aWIpqcH36FDyIiZLl0OZqBpV4Ahd6ksZnRwrAxN3Hl6q%2BjHEIPq%2B3oOg3D%2FHW%2F7ZvKPd37NEX8Sq8xgpYXVJrdjAYo1z49Y5md5GzT9zvqVa6f7Uu5FTe2YZd3HwiOt7PTV6eicwa3MNAwBKHiYRhjWTsoy83W3fRMOqQ9cEGOqUBtzTIg4plS4E3rRelbGkXPAvxSLPV%2Bmm57mhEamr1GPbguDCuz%2FXvaWQjl3nEE3BL9eTvpkhPsbVONRYbrUF2obzCD%2B3ElV%2F7SxELuDgY1%2B2k2E3fh0fwBb1AL3hyz8vq7ocupcP5VgEp3eGfDmfc2VNYWt%2BXyA7Cm8kCK4hVBE%2B%2B0XgUVxkAgGM%2FIGIiwu3csRhMBbFgJh1u7uLott7uO7IS9uvD&X-Amz-Signature=98af7bbd5bd90465a66c398074bada0fcf0e1117fe5044fde4786c65d39236d0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY32C2JY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICzd4iYDvCdHKGV4n4ylImAH%2FAmofoEkPf3agXfudwCHAiEAqgJyuZOq6DR3915pooAbigAMQTEWqEyttdf%2F%2FJXjVHkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANt4gvp4A5y6nMZsCrcAyElT%2FPohFVeVCCLd4p%2BzwxHM9KNOMtSWvXIEWS5LmAR8kQCiSxzT0%2FBid7A56udvLE67RY7SaM%2BKoiX6sAhgfPdEfzYA0oi1EPC6eldgI5jANj51rEXPJ4ZUSTd4dq1ZJofyDMIXbB9J6UVg8cy9IBpAVIvzd8VT46safqFiHE0FM%2BYykh5AbFltnR4LazLIl7IX%2BKrkZJVfA1WyzhEluMSMte0oqmJZlyfT5jqnaoKq%2BK0wwNp7451UNs1C92pgBiZCOXA6zKW%2BXfzB8xeu3pzONMFylmOiYAbo7FxZdkVXfkib6UuDrLS86XB%2BKd%2FXcdB0GvWqz0JE4PIeYK9vWRKHv6Z%2FS4sd70ImDV59FS6DgmxRxODHnC0BFcqclAjGnCjlBqt4aC08GHvH2P9j6XZJRHgg9gCreVVpXwqtiTMhN884zS552r5R9YJNEgpOvWuw8hB1dR5cMS0DLYlDdpMTm0aWIpqcH36FDyIiZLl0OZqBpV4Ahd6ksZnRwrAxN3Hl6q%2BjHEIPq%2B3oOg3D%2FHW%2F7ZvKPd37NEX8Sq8xgpYXVJrdjAYo1z49Y5md5GzT9zvqVa6f7Uu5FTe2YZd3HwiOt7PTV6eicwa3MNAwBKHiYRhjWTsoy83W3fRMOqQ9cEGOqUBtzTIg4plS4E3rRelbGkXPAvxSLPV%2Bmm57mhEamr1GPbguDCuz%2FXvaWQjl3nEE3BL9eTvpkhPsbVONRYbrUF2obzCD%2B3ElV%2F7SxELuDgY1%2B2k2E3fh0fwBb1AL3hyz8vq7ocupcP5VgEp3eGfDmfc2VNYWt%2BXyA7Cm8kCK4hVBE%2B%2B0XgUVxkAgGM%2FIGIiwu3csRhMBbFgJh1u7uLott7uO7IS9uvD&X-Amz-Signature=0108ae5ded522b1b8abf7e9bca8858f8ae763b80c6e75199a49821a4c3d7433a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
