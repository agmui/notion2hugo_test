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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFF2C5P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHb0QsHvffTlvMZS8940XSY8rpx3bcmTRHply6eF1AdyAiEAqrpeCDt8dsjIGwrrUYUSVsFTDVLCxZ%2BM1tfGuWocSNQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDY2UpwwbGFOpaQQircA6920ouIlZS2vw9nh6h1OC%2BSRI%2FuIpwU%2BsRhDGtOsHoSA9HJOKFopsfmZrwZtNj21klLsQrRq730W17ovQNH%2B9sZNAnMuJ8dAzokZqUdIkeArD7r5UgOgBpAqGfr9eWvDdZYqx3qmKJUmfTPczHnm1zPl9%2B1xwRyRBdM%2BHXqYA4a4axvZyoDQ74qp%2BPCshUMmpaJcFTZleRh2dqiTmFdSU7Ci4AIzrOWL6ls%2BcV6tDYp0GdFw%2B2ITQZ7MwQ9vRtDYeWB9GO8O3EtTJhxg%2FtzZTevxnkXcIxe6NO4q3lbuRWMjHPKfkD3VdIA7NrNZ%2FV7kjxIlwDxpBtucGGGskjsvjj57euAF33NLHSF8HNU57u4Bs7FykCTox9yrA11F7jaXz4iZB%2F%2BJviMyO30UMPx%2FY9gWJvOabOoOik08XLDv3PKwTMPRBWsaH1IukGOrHGeIp8OtRMjUFDnr6ry7rBWXZy6ERSMVlfyMqAbqh3YvEJpjPxnoU8bo%2F5gw610diGy0z07Aaphtn9d225yEEYqnWG0itcnD54S9gpRl4RnEa3I76WtAwEG2qxQC8f2hFlRZwWCfTaP%2B2AaGarODUdcfvI6Z6G8rW23CGqe63v0%2FuhtROCie%2FqfxDqk1w5wMIil78EGOqUBxrAgQs5b5dy4MVr3GiqKWjSK5e40tQr6eAfwjV%2FZ7UEwuTfAnJPZbM9tQuRZo%2FvEtVyjEm4%2Bzp3MZaphZ525a%2BqQ2AJPoBif8wmsJk6l8YgGBW0kVMEjPXWFZodD5%2FPgOCU4UaeByveOjkLYinEV75jnNKHFjHXVaz1wn58An%2Bmj47yYzj5Q7Uemt%2F0Y2eDPUcVrR%2FjkRW4d9Wa8fmAjxd8pZGoE&X-Amz-Signature=458af336455ad4b04e2df4a282312d7346f566348376fb1803d78b9263dd26a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFF2C5P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHb0QsHvffTlvMZS8940XSY8rpx3bcmTRHply6eF1AdyAiEAqrpeCDt8dsjIGwrrUYUSVsFTDVLCxZ%2BM1tfGuWocSNQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDY2UpwwbGFOpaQQircA6920ouIlZS2vw9nh6h1OC%2BSRI%2FuIpwU%2BsRhDGtOsHoSA9HJOKFopsfmZrwZtNj21klLsQrRq730W17ovQNH%2B9sZNAnMuJ8dAzokZqUdIkeArD7r5UgOgBpAqGfr9eWvDdZYqx3qmKJUmfTPczHnm1zPl9%2B1xwRyRBdM%2BHXqYA4a4axvZyoDQ74qp%2BPCshUMmpaJcFTZleRh2dqiTmFdSU7Ci4AIzrOWL6ls%2BcV6tDYp0GdFw%2B2ITQZ7MwQ9vRtDYeWB9GO8O3EtTJhxg%2FtzZTevxnkXcIxe6NO4q3lbuRWMjHPKfkD3VdIA7NrNZ%2FV7kjxIlwDxpBtucGGGskjsvjj57euAF33NLHSF8HNU57u4Bs7FykCTox9yrA11F7jaXz4iZB%2F%2BJviMyO30UMPx%2FY9gWJvOabOoOik08XLDv3PKwTMPRBWsaH1IukGOrHGeIp8OtRMjUFDnr6ry7rBWXZy6ERSMVlfyMqAbqh3YvEJpjPxnoU8bo%2F5gw610diGy0z07Aaphtn9d225yEEYqnWG0itcnD54S9gpRl4RnEa3I76WtAwEG2qxQC8f2hFlRZwWCfTaP%2B2AaGarODUdcfvI6Z6G8rW23CGqe63v0%2FuhtROCie%2FqfxDqk1w5wMIil78EGOqUBxrAgQs5b5dy4MVr3GiqKWjSK5e40tQr6eAfwjV%2FZ7UEwuTfAnJPZbM9tQuRZo%2FvEtVyjEm4%2Bzp3MZaphZ525a%2BqQ2AJPoBif8wmsJk6l8YgGBW0kVMEjPXWFZodD5%2FPgOCU4UaeByveOjkLYinEV75jnNKHFjHXVaz1wn58An%2Bmj47yYzj5Q7Uemt%2F0Y2eDPUcVrR%2FjkRW4d9Wa8fmAjxd8pZGoE&X-Amz-Signature=24c5517b4ed6b1e9ad7eed73adbdce2fd0492a32395da4415e6d7aa5329c25e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFF2C5P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHb0QsHvffTlvMZS8940XSY8rpx3bcmTRHply6eF1AdyAiEAqrpeCDt8dsjIGwrrUYUSVsFTDVLCxZ%2BM1tfGuWocSNQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDY2UpwwbGFOpaQQircA6920ouIlZS2vw9nh6h1OC%2BSRI%2FuIpwU%2BsRhDGtOsHoSA9HJOKFopsfmZrwZtNj21klLsQrRq730W17ovQNH%2B9sZNAnMuJ8dAzokZqUdIkeArD7r5UgOgBpAqGfr9eWvDdZYqx3qmKJUmfTPczHnm1zPl9%2B1xwRyRBdM%2BHXqYA4a4axvZyoDQ74qp%2BPCshUMmpaJcFTZleRh2dqiTmFdSU7Ci4AIzrOWL6ls%2BcV6tDYp0GdFw%2B2ITQZ7MwQ9vRtDYeWB9GO8O3EtTJhxg%2FtzZTevxnkXcIxe6NO4q3lbuRWMjHPKfkD3VdIA7NrNZ%2FV7kjxIlwDxpBtucGGGskjsvjj57euAF33NLHSF8HNU57u4Bs7FykCTox9yrA11F7jaXz4iZB%2F%2BJviMyO30UMPx%2FY9gWJvOabOoOik08XLDv3PKwTMPRBWsaH1IukGOrHGeIp8OtRMjUFDnr6ry7rBWXZy6ERSMVlfyMqAbqh3YvEJpjPxnoU8bo%2F5gw610diGy0z07Aaphtn9d225yEEYqnWG0itcnD54S9gpRl4RnEa3I76WtAwEG2qxQC8f2hFlRZwWCfTaP%2B2AaGarODUdcfvI6Z6G8rW23CGqe63v0%2FuhtROCie%2FqfxDqk1w5wMIil78EGOqUBxrAgQs5b5dy4MVr3GiqKWjSK5e40tQr6eAfwjV%2FZ7UEwuTfAnJPZbM9tQuRZo%2FvEtVyjEm4%2Bzp3MZaphZ525a%2BqQ2AJPoBif8wmsJk6l8YgGBW0kVMEjPXWFZodD5%2FPgOCU4UaeByveOjkLYinEV75jnNKHFjHXVaz1wn58An%2Bmj47yYzj5Q7Uemt%2F0Y2eDPUcVrR%2FjkRW4d9Wa8fmAjxd8pZGoE&X-Amz-Signature=fddb273cee09537e4a40bb5d2053222ce0f24361a3ac2205151d540045cfc573&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFF2C5P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHb0QsHvffTlvMZS8940XSY8rpx3bcmTRHply6eF1AdyAiEAqrpeCDt8dsjIGwrrUYUSVsFTDVLCxZ%2BM1tfGuWocSNQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDY2UpwwbGFOpaQQircA6920ouIlZS2vw9nh6h1OC%2BSRI%2FuIpwU%2BsRhDGtOsHoSA9HJOKFopsfmZrwZtNj21klLsQrRq730W17ovQNH%2B9sZNAnMuJ8dAzokZqUdIkeArD7r5UgOgBpAqGfr9eWvDdZYqx3qmKJUmfTPczHnm1zPl9%2B1xwRyRBdM%2BHXqYA4a4axvZyoDQ74qp%2BPCshUMmpaJcFTZleRh2dqiTmFdSU7Ci4AIzrOWL6ls%2BcV6tDYp0GdFw%2B2ITQZ7MwQ9vRtDYeWB9GO8O3EtTJhxg%2FtzZTevxnkXcIxe6NO4q3lbuRWMjHPKfkD3VdIA7NrNZ%2FV7kjxIlwDxpBtucGGGskjsvjj57euAF33NLHSF8HNU57u4Bs7FykCTox9yrA11F7jaXz4iZB%2F%2BJviMyO30UMPx%2FY9gWJvOabOoOik08XLDv3PKwTMPRBWsaH1IukGOrHGeIp8OtRMjUFDnr6ry7rBWXZy6ERSMVlfyMqAbqh3YvEJpjPxnoU8bo%2F5gw610diGy0z07Aaphtn9d225yEEYqnWG0itcnD54S9gpRl4RnEa3I76WtAwEG2qxQC8f2hFlRZwWCfTaP%2B2AaGarODUdcfvI6Z6G8rW23CGqe63v0%2FuhtROCie%2FqfxDqk1w5wMIil78EGOqUBxrAgQs5b5dy4MVr3GiqKWjSK5e40tQr6eAfwjV%2FZ7UEwuTfAnJPZbM9tQuRZo%2FvEtVyjEm4%2Bzp3MZaphZ525a%2BqQ2AJPoBif8wmsJk6l8YgGBW0kVMEjPXWFZodD5%2FPgOCU4UaeByveOjkLYinEV75jnNKHFjHXVaz1wn58An%2Bmj47yYzj5Q7Uemt%2F0Y2eDPUcVrR%2FjkRW4d9Wa8fmAjxd8pZGoE&X-Amz-Signature=724decb193dfa64e5a2989d003611723c5af035155bf24283168579d3b98fb86&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFF2C5P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHb0QsHvffTlvMZS8940XSY8rpx3bcmTRHply6eF1AdyAiEAqrpeCDt8dsjIGwrrUYUSVsFTDVLCxZ%2BM1tfGuWocSNQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDY2UpwwbGFOpaQQircA6920ouIlZS2vw9nh6h1OC%2BSRI%2FuIpwU%2BsRhDGtOsHoSA9HJOKFopsfmZrwZtNj21klLsQrRq730W17ovQNH%2B9sZNAnMuJ8dAzokZqUdIkeArD7r5UgOgBpAqGfr9eWvDdZYqx3qmKJUmfTPczHnm1zPl9%2B1xwRyRBdM%2BHXqYA4a4axvZyoDQ74qp%2BPCshUMmpaJcFTZleRh2dqiTmFdSU7Ci4AIzrOWL6ls%2BcV6tDYp0GdFw%2B2ITQZ7MwQ9vRtDYeWB9GO8O3EtTJhxg%2FtzZTevxnkXcIxe6NO4q3lbuRWMjHPKfkD3VdIA7NrNZ%2FV7kjxIlwDxpBtucGGGskjsvjj57euAF33NLHSF8HNU57u4Bs7FykCTox9yrA11F7jaXz4iZB%2F%2BJviMyO30UMPx%2FY9gWJvOabOoOik08XLDv3PKwTMPRBWsaH1IukGOrHGeIp8OtRMjUFDnr6ry7rBWXZy6ERSMVlfyMqAbqh3YvEJpjPxnoU8bo%2F5gw610diGy0z07Aaphtn9d225yEEYqnWG0itcnD54S9gpRl4RnEa3I76WtAwEG2qxQC8f2hFlRZwWCfTaP%2B2AaGarODUdcfvI6Z6G8rW23CGqe63v0%2FuhtROCie%2FqfxDqk1w5wMIil78EGOqUBxrAgQs5b5dy4MVr3GiqKWjSK5e40tQr6eAfwjV%2FZ7UEwuTfAnJPZbM9tQuRZo%2FvEtVyjEm4%2Bzp3MZaphZ525a%2BqQ2AJPoBif8wmsJk6l8YgGBW0kVMEjPXWFZodD5%2FPgOCU4UaeByveOjkLYinEV75jnNKHFjHXVaz1wn58An%2Bmj47yYzj5Q7Uemt%2F0Y2eDPUcVrR%2FjkRW4d9Wa8fmAjxd8pZGoE&X-Amz-Signature=41f7e2488a7d78645bcb3bc0970569824a9ee1e3ca7d2976a4d33a9b880c86ea&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFF2C5P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHb0QsHvffTlvMZS8940XSY8rpx3bcmTRHply6eF1AdyAiEAqrpeCDt8dsjIGwrrUYUSVsFTDVLCxZ%2BM1tfGuWocSNQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDY2UpwwbGFOpaQQircA6920ouIlZS2vw9nh6h1OC%2BSRI%2FuIpwU%2BsRhDGtOsHoSA9HJOKFopsfmZrwZtNj21klLsQrRq730W17ovQNH%2B9sZNAnMuJ8dAzokZqUdIkeArD7r5UgOgBpAqGfr9eWvDdZYqx3qmKJUmfTPczHnm1zPl9%2B1xwRyRBdM%2BHXqYA4a4axvZyoDQ74qp%2BPCshUMmpaJcFTZleRh2dqiTmFdSU7Ci4AIzrOWL6ls%2BcV6tDYp0GdFw%2B2ITQZ7MwQ9vRtDYeWB9GO8O3EtTJhxg%2FtzZTevxnkXcIxe6NO4q3lbuRWMjHPKfkD3VdIA7NrNZ%2FV7kjxIlwDxpBtucGGGskjsvjj57euAF33NLHSF8HNU57u4Bs7FykCTox9yrA11F7jaXz4iZB%2F%2BJviMyO30UMPx%2FY9gWJvOabOoOik08XLDv3PKwTMPRBWsaH1IukGOrHGeIp8OtRMjUFDnr6ry7rBWXZy6ERSMVlfyMqAbqh3YvEJpjPxnoU8bo%2F5gw610diGy0z07Aaphtn9d225yEEYqnWG0itcnD54S9gpRl4RnEa3I76WtAwEG2qxQC8f2hFlRZwWCfTaP%2B2AaGarODUdcfvI6Z6G8rW23CGqe63v0%2FuhtROCie%2FqfxDqk1w5wMIil78EGOqUBxrAgQs5b5dy4MVr3GiqKWjSK5e40tQr6eAfwjV%2FZ7UEwuTfAnJPZbM9tQuRZo%2FvEtVyjEm4%2Bzp3MZaphZ525a%2BqQ2AJPoBif8wmsJk6l8YgGBW0kVMEjPXWFZodD5%2FPgOCU4UaeByveOjkLYinEV75jnNKHFjHXVaz1wn58An%2Bmj47yYzj5Q7Uemt%2F0Y2eDPUcVrR%2FjkRW4d9Wa8fmAjxd8pZGoE&X-Amz-Signature=1719e724172918212768bb98da2263df49bfcc835d00629d603dedd405aec597&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFF2C5P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHb0QsHvffTlvMZS8940XSY8rpx3bcmTRHply6eF1AdyAiEAqrpeCDt8dsjIGwrrUYUSVsFTDVLCxZ%2BM1tfGuWocSNQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDY2UpwwbGFOpaQQircA6920ouIlZS2vw9nh6h1OC%2BSRI%2FuIpwU%2BsRhDGtOsHoSA9HJOKFopsfmZrwZtNj21klLsQrRq730W17ovQNH%2B9sZNAnMuJ8dAzokZqUdIkeArD7r5UgOgBpAqGfr9eWvDdZYqx3qmKJUmfTPczHnm1zPl9%2B1xwRyRBdM%2BHXqYA4a4axvZyoDQ74qp%2BPCshUMmpaJcFTZleRh2dqiTmFdSU7Ci4AIzrOWL6ls%2BcV6tDYp0GdFw%2B2ITQZ7MwQ9vRtDYeWB9GO8O3EtTJhxg%2FtzZTevxnkXcIxe6NO4q3lbuRWMjHPKfkD3VdIA7NrNZ%2FV7kjxIlwDxpBtucGGGskjsvjj57euAF33NLHSF8HNU57u4Bs7FykCTox9yrA11F7jaXz4iZB%2F%2BJviMyO30UMPx%2FY9gWJvOabOoOik08XLDv3PKwTMPRBWsaH1IukGOrHGeIp8OtRMjUFDnr6ry7rBWXZy6ERSMVlfyMqAbqh3YvEJpjPxnoU8bo%2F5gw610diGy0z07Aaphtn9d225yEEYqnWG0itcnD54S9gpRl4RnEa3I76WtAwEG2qxQC8f2hFlRZwWCfTaP%2B2AaGarODUdcfvI6Z6G8rW23CGqe63v0%2FuhtROCie%2FqfxDqk1w5wMIil78EGOqUBxrAgQs5b5dy4MVr3GiqKWjSK5e40tQr6eAfwjV%2FZ7UEwuTfAnJPZbM9tQuRZo%2FvEtVyjEm4%2Bzp3MZaphZ525a%2BqQ2AJPoBif8wmsJk6l8YgGBW0kVMEjPXWFZodD5%2FPgOCU4UaeByveOjkLYinEV75jnNKHFjHXVaz1wn58An%2Bmj47yYzj5Q7Uemt%2F0Y2eDPUcVrR%2FjkRW4d9Wa8fmAjxd8pZGoE&X-Amz-Signature=ba914173eb04578ee30289df0b2c6c57ee47d7112e897c56d277214d2f8f262c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
