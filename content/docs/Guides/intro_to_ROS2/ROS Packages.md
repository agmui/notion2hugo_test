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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=b9a41c251882d9a7a6174adc3d3eaba57f2ba49eb8d74ffe91d165986882a804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=6c416f8c83c8a009545770037d984979277a3d9d986cf45f67fc47361db8b3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=f7f469b2a2ef4338a86d21cd05e8c0f500bba58cd1183de9f26cf9a3ad515477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=1fe9588f0988535c4d98d6260fd16f53f9de761b7a320c336d8d5c427fb9ff8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=f5b04c264441eed5f7bcb8ad9c06bf98957fcbfa11f76c1496608a3d1be1d4d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=c5d05d67bddfb0798bbfad31c918a06add1396c5ace6cd75018bebadcb84945c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=7b1ccecb1a9a0bd220913b52324d8fcd8017713bbfc00b683ed0c1daa886a6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
