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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYPMAXF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRVjrb%2B6iucajtubmYBp%2FKUL9xArlCCrdCu%2BC%2FYqDJVAiEAzTYJXk104SYawE438piKt96Spjg%2BthavDoxbp3ptk6cqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr%2BQnnwWl19LLyNVCrcA3sRN%2FPe3eHK%2BeHzlsc077VuBAdQCy0%2BwGOhXNLSmsZ9roawJQgWiTyRvBf0cra3N%2FKKuoUpZ6kp1fro77u87Xr26MXML2wJs2vLd9Mjk4rlAYPPErAGR1yDPDCu%2F4pa8APKOPDSsQg8yNLHtC2dCJ2cMjfnces%2B4iFRFz31XgDq0GS3owgm3sihS5xnvC4nMSEuZ8eJ9sd6nF7C414Kitj9yji7WxeRkF%2B1564n02ONPJehcgCS2uD0ioYgVWPkuOh4udXFsnzBa6QdqQ0kwRpbM88Km8C3%2BUGcyVVBusiNgFthOsW5i2BxrzABhvANTeEgRwyXPhUxbvdxf7DaqT9he%2BvYhgOR3Ju5MO9KlmQySPpg%2Fw2F5LuJS9dBvnh%2B5lznF%2BmceJ%2BtFUY36zK3DVCot7DxfzOiQbLlbFq%2BzDl98IRcK8YonyhrovJT9dTBkY%2Ffhknl1K8e5YuCXnCNl13vub%2FQT%2Fkle83P70RCDRgbkfLSYjQRSANXxUiM6%2BRnSEQGSkrO5UEu1W5AIIR4IzozH5WbI4mwBw%2FbEZaS66DvHKZ12z3ZhQYD1Jui0yTfIrBowaqrVTlgF70lWKAe6XNdYXY5MUcx8g0vVIxjvHlWaQuPeXjKsKM1Jcr3MMTttMQGOqUBBHPk%2B4xBMqQuwZDAXOqXzTm5mwnUZ3BSgYzwrnsodJ%2BTmlBtWsNocQmurGIuel3BL5QN8RRvGa1gXDqG%2FgacHH60R3OdGFh9u506q%2BxLrJBfxcFZJaX%2FdtoS18UvS%2FPZSnATqW9%2FUDc1LYm2A73JPYgVeCxOw%2BXakslmuDJg0k077TA9a8txSv9PIxoC%2Bv2Lbwq2UEkCBtwSd3WJr4k7cdx6CsJF&X-Amz-Signature=817b73cf205d59acaa97ac73e8b23ce640bb3e82eba65ea339c3bd05278a0658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYPMAXF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRVjrb%2B6iucajtubmYBp%2FKUL9xArlCCrdCu%2BC%2FYqDJVAiEAzTYJXk104SYawE438piKt96Spjg%2BthavDoxbp3ptk6cqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr%2BQnnwWl19LLyNVCrcA3sRN%2FPe3eHK%2BeHzlsc077VuBAdQCy0%2BwGOhXNLSmsZ9roawJQgWiTyRvBf0cra3N%2FKKuoUpZ6kp1fro77u87Xr26MXML2wJs2vLd9Mjk4rlAYPPErAGR1yDPDCu%2F4pa8APKOPDSsQg8yNLHtC2dCJ2cMjfnces%2B4iFRFz31XgDq0GS3owgm3sihS5xnvC4nMSEuZ8eJ9sd6nF7C414Kitj9yji7WxeRkF%2B1564n02ONPJehcgCS2uD0ioYgVWPkuOh4udXFsnzBa6QdqQ0kwRpbM88Km8C3%2BUGcyVVBusiNgFthOsW5i2BxrzABhvANTeEgRwyXPhUxbvdxf7DaqT9he%2BvYhgOR3Ju5MO9KlmQySPpg%2Fw2F5LuJS9dBvnh%2B5lznF%2BmceJ%2BtFUY36zK3DVCot7DxfzOiQbLlbFq%2BzDl98IRcK8YonyhrovJT9dTBkY%2Ffhknl1K8e5YuCXnCNl13vub%2FQT%2Fkle83P70RCDRgbkfLSYjQRSANXxUiM6%2BRnSEQGSkrO5UEu1W5AIIR4IzozH5WbI4mwBw%2FbEZaS66DvHKZ12z3ZhQYD1Jui0yTfIrBowaqrVTlgF70lWKAe6XNdYXY5MUcx8g0vVIxjvHlWaQuPeXjKsKM1Jcr3MMTttMQGOqUBBHPk%2B4xBMqQuwZDAXOqXzTm5mwnUZ3BSgYzwrnsodJ%2BTmlBtWsNocQmurGIuel3BL5QN8RRvGa1gXDqG%2FgacHH60R3OdGFh9u506q%2BxLrJBfxcFZJaX%2FdtoS18UvS%2FPZSnATqW9%2FUDc1LYm2A73JPYgVeCxOw%2BXakslmuDJg0k077TA9a8txSv9PIxoC%2Bv2Lbwq2UEkCBtwSd3WJr4k7cdx6CsJF&X-Amz-Signature=4a030f5e01478cf89c685f7586aef98037457db64e99b4861195cc2078c48fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYPMAXF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRVjrb%2B6iucajtubmYBp%2FKUL9xArlCCrdCu%2BC%2FYqDJVAiEAzTYJXk104SYawE438piKt96Spjg%2BthavDoxbp3ptk6cqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr%2BQnnwWl19LLyNVCrcA3sRN%2FPe3eHK%2BeHzlsc077VuBAdQCy0%2BwGOhXNLSmsZ9roawJQgWiTyRvBf0cra3N%2FKKuoUpZ6kp1fro77u87Xr26MXML2wJs2vLd9Mjk4rlAYPPErAGR1yDPDCu%2F4pa8APKOPDSsQg8yNLHtC2dCJ2cMjfnces%2B4iFRFz31XgDq0GS3owgm3sihS5xnvC4nMSEuZ8eJ9sd6nF7C414Kitj9yji7WxeRkF%2B1564n02ONPJehcgCS2uD0ioYgVWPkuOh4udXFsnzBa6QdqQ0kwRpbM88Km8C3%2BUGcyVVBusiNgFthOsW5i2BxrzABhvANTeEgRwyXPhUxbvdxf7DaqT9he%2BvYhgOR3Ju5MO9KlmQySPpg%2Fw2F5LuJS9dBvnh%2B5lznF%2BmceJ%2BtFUY36zK3DVCot7DxfzOiQbLlbFq%2BzDl98IRcK8YonyhrovJT9dTBkY%2Ffhknl1K8e5YuCXnCNl13vub%2FQT%2Fkle83P70RCDRgbkfLSYjQRSANXxUiM6%2BRnSEQGSkrO5UEu1W5AIIR4IzozH5WbI4mwBw%2FbEZaS66DvHKZ12z3ZhQYD1Jui0yTfIrBowaqrVTlgF70lWKAe6XNdYXY5MUcx8g0vVIxjvHlWaQuPeXjKsKM1Jcr3MMTttMQGOqUBBHPk%2B4xBMqQuwZDAXOqXzTm5mwnUZ3BSgYzwrnsodJ%2BTmlBtWsNocQmurGIuel3BL5QN8RRvGa1gXDqG%2FgacHH60R3OdGFh9u506q%2BxLrJBfxcFZJaX%2FdtoS18UvS%2FPZSnATqW9%2FUDc1LYm2A73JPYgVeCxOw%2BXakslmuDJg0k077TA9a8txSv9PIxoC%2Bv2Lbwq2UEkCBtwSd3WJr4k7cdx6CsJF&X-Amz-Signature=20247ea1a1123227819c7db77598ba6f22d4d95ad605159a94ffb37cc0dd613e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYPMAXF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRVjrb%2B6iucajtubmYBp%2FKUL9xArlCCrdCu%2BC%2FYqDJVAiEAzTYJXk104SYawE438piKt96Spjg%2BthavDoxbp3ptk6cqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr%2BQnnwWl19LLyNVCrcA3sRN%2FPe3eHK%2BeHzlsc077VuBAdQCy0%2BwGOhXNLSmsZ9roawJQgWiTyRvBf0cra3N%2FKKuoUpZ6kp1fro77u87Xr26MXML2wJs2vLd9Mjk4rlAYPPErAGR1yDPDCu%2F4pa8APKOPDSsQg8yNLHtC2dCJ2cMjfnces%2B4iFRFz31XgDq0GS3owgm3sihS5xnvC4nMSEuZ8eJ9sd6nF7C414Kitj9yji7WxeRkF%2B1564n02ONPJehcgCS2uD0ioYgVWPkuOh4udXFsnzBa6QdqQ0kwRpbM88Km8C3%2BUGcyVVBusiNgFthOsW5i2BxrzABhvANTeEgRwyXPhUxbvdxf7DaqT9he%2BvYhgOR3Ju5MO9KlmQySPpg%2Fw2F5LuJS9dBvnh%2B5lznF%2BmceJ%2BtFUY36zK3DVCot7DxfzOiQbLlbFq%2BzDl98IRcK8YonyhrovJT9dTBkY%2Ffhknl1K8e5YuCXnCNl13vub%2FQT%2Fkle83P70RCDRgbkfLSYjQRSANXxUiM6%2BRnSEQGSkrO5UEu1W5AIIR4IzozH5WbI4mwBw%2FbEZaS66DvHKZ12z3ZhQYD1Jui0yTfIrBowaqrVTlgF70lWKAe6XNdYXY5MUcx8g0vVIxjvHlWaQuPeXjKsKM1Jcr3MMTttMQGOqUBBHPk%2B4xBMqQuwZDAXOqXzTm5mwnUZ3BSgYzwrnsodJ%2BTmlBtWsNocQmurGIuel3BL5QN8RRvGa1gXDqG%2FgacHH60R3OdGFh9u506q%2BxLrJBfxcFZJaX%2FdtoS18UvS%2FPZSnATqW9%2FUDc1LYm2A73JPYgVeCxOw%2BXakslmuDJg0k077TA9a8txSv9PIxoC%2Bv2Lbwq2UEkCBtwSd3WJr4k7cdx6CsJF&X-Amz-Signature=c29b2884d6a4585f029d806cdca6a808e078f653d00ddb2caaddecb24f2d9234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYPMAXF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRVjrb%2B6iucajtubmYBp%2FKUL9xArlCCrdCu%2BC%2FYqDJVAiEAzTYJXk104SYawE438piKt96Spjg%2BthavDoxbp3ptk6cqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr%2BQnnwWl19LLyNVCrcA3sRN%2FPe3eHK%2BeHzlsc077VuBAdQCy0%2BwGOhXNLSmsZ9roawJQgWiTyRvBf0cra3N%2FKKuoUpZ6kp1fro77u87Xr26MXML2wJs2vLd9Mjk4rlAYPPErAGR1yDPDCu%2F4pa8APKOPDSsQg8yNLHtC2dCJ2cMjfnces%2B4iFRFz31XgDq0GS3owgm3sihS5xnvC4nMSEuZ8eJ9sd6nF7C414Kitj9yji7WxeRkF%2B1564n02ONPJehcgCS2uD0ioYgVWPkuOh4udXFsnzBa6QdqQ0kwRpbM88Km8C3%2BUGcyVVBusiNgFthOsW5i2BxrzABhvANTeEgRwyXPhUxbvdxf7DaqT9he%2BvYhgOR3Ju5MO9KlmQySPpg%2Fw2F5LuJS9dBvnh%2B5lznF%2BmceJ%2BtFUY36zK3DVCot7DxfzOiQbLlbFq%2BzDl98IRcK8YonyhrovJT9dTBkY%2Ffhknl1K8e5YuCXnCNl13vub%2FQT%2Fkle83P70RCDRgbkfLSYjQRSANXxUiM6%2BRnSEQGSkrO5UEu1W5AIIR4IzozH5WbI4mwBw%2FbEZaS66DvHKZ12z3ZhQYD1Jui0yTfIrBowaqrVTlgF70lWKAe6XNdYXY5MUcx8g0vVIxjvHlWaQuPeXjKsKM1Jcr3MMTttMQGOqUBBHPk%2B4xBMqQuwZDAXOqXzTm5mwnUZ3BSgYzwrnsodJ%2BTmlBtWsNocQmurGIuel3BL5QN8RRvGa1gXDqG%2FgacHH60R3OdGFh9u506q%2BxLrJBfxcFZJaX%2FdtoS18UvS%2FPZSnATqW9%2FUDc1LYm2A73JPYgVeCxOw%2BXakslmuDJg0k077TA9a8txSv9PIxoC%2Bv2Lbwq2UEkCBtwSd3WJr4k7cdx6CsJF&X-Amz-Signature=9f98015fe68865ad9775af5d934ae380b7b4ed2f214abdfebd61f1f1cc79a7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYPMAXF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRVjrb%2B6iucajtubmYBp%2FKUL9xArlCCrdCu%2BC%2FYqDJVAiEAzTYJXk104SYawE438piKt96Spjg%2BthavDoxbp3ptk6cqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr%2BQnnwWl19LLyNVCrcA3sRN%2FPe3eHK%2BeHzlsc077VuBAdQCy0%2BwGOhXNLSmsZ9roawJQgWiTyRvBf0cra3N%2FKKuoUpZ6kp1fro77u87Xr26MXML2wJs2vLd9Mjk4rlAYPPErAGR1yDPDCu%2F4pa8APKOPDSsQg8yNLHtC2dCJ2cMjfnces%2B4iFRFz31XgDq0GS3owgm3sihS5xnvC4nMSEuZ8eJ9sd6nF7C414Kitj9yji7WxeRkF%2B1564n02ONPJehcgCS2uD0ioYgVWPkuOh4udXFsnzBa6QdqQ0kwRpbM88Km8C3%2BUGcyVVBusiNgFthOsW5i2BxrzABhvANTeEgRwyXPhUxbvdxf7DaqT9he%2BvYhgOR3Ju5MO9KlmQySPpg%2Fw2F5LuJS9dBvnh%2B5lznF%2BmceJ%2BtFUY36zK3DVCot7DxfzOiQbLlbFq%2BzDl98IRcK8YonyhrovJT9dTBkY%2Ffhknl1K8e5YuCXnCNl13vub%2FQT%2Fkle83P70RCDRgbkfLSYjQRSANXxUiM6%2BRnSEQGSkrO5UEu1W5AIIR4IzozH5WbI4mwBw%2FbEZaS66DvHKZ12z3ZhQYD1Jui0yTfIrBowaqrVTlgF70lWKAe6XNdYXY5MUcx8g0vVIxjvHlWaQuPeXjKsKM1Jcr3MMTttMQGOqUBBHPk%2B4xBMqQuwZDAXOqXzTm5mwnUZ3BSgYzwrnsodJ%2BTmlBtWsNocQmurGIuel3BL5QN8RRvGa1gXDqG%2FgacHH60R3OdGFh9u506q%2BxLrJBfxcFZJaX%2FdtoS18UvS%2FPZSnATqW9%2FUDc1LYm2A73JPYgVeCxOw%2BXakslmuDJg0k077TA9a8txSv9PIxoC%2Bv2Lbwq2UEkCBtwSd3WJr4k7cdx6CsJF&X-Amz-Signature=79393659736e67ba1b17a89260cb02db4327c0499cbb72e4e9c74ba99ffc889c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYPMAXF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRVjrb%2B6iucajtubmYBp%2FKUL9xArlCCrdCu%2BC%2FYqDJVAiEAzTYJXk104SYawE438piKt96Spjg%2BthavDoxbp3ptk6cqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr%2BQnnwWl19LLyNVCrcA3sRN%2FPe3eHK%2BeHzlsc077VuBAdQCy0%2BwGOhXNLSmsZ9roawJQgWiTyRvBf0cra3N%2FKKuoUpZ6kp1fro77u87Xr26MXML2wJs2vLd9Mjk4rlAYPPErAGR1yDPDCu%2F4pa8APKOPDSsQg8yNLHtC2dCJ2cMjfnces%2B4iFRFz31XgDq0GS3owgm3sihS5xnvC4nMSEuZ8eJ9sd6nF7C414Kitj9yji7WxeRkF%2B1564n02ONPJehcgCS2uD0ioYgVWPkuOh4udXFsnzBa6QdqQ0kwRpbM88Km8C3%2BUGcyVVBusiNgFthOsW5i2BxrzABhvANTeEgRwyXPhUxbvdxf7DaqT9he%2BvYhgOR3Ju5MO9KlmQySPpg%2Fw2F5LuJS9dBvnh%2B5lznF%2BmceJ%2BtFUY36zK3DVCot7DxfzOiQbLlbFq%2BzDl98IRcK8YonyhrovJT9dTBkY%2Ffhknl1K8e5YuCXnCNl13vub%2FQT%2Fkle83P70RCDRgbkfLSYjQRSANXxUiM6%2BRnSEQGSkrO5UEu1W5AIIR4IzozH5WbI4mwBw%2FbEZaS66DvHKZ12z3ZhQYD1Jui0yTfIrBowaqrVTlgF70lWKAe6XNdYXY5MUcx8g0vVIxjvHlWaQuPeXjKsKM1Jcr3MMTttMQGOqUBBHPk%2B4xBMqQuwZDAXOqXzTm5mwnUZ3BSgYzwrnsodJ%2BTmlBtWsNocQmurGIuel3BL5QN8RRvGa1gXDqG%2FgacHH60R3OdGFh9u506q%2BxLrJBfxcFZJaX%2FdtoS18UvS%2FPZSnATqW9%2FUDc1LYm2A73JPYgVeCxOw%2BXakslmuDJg0k077TA9a8txSv9PIxoC%2Bv2Lbwq2UEkCBtwSd3WJr4k7cdx6CsJF&X-Amz-Signature=2f235fc2c9f8bda36ece6fddf43c404f2749c6959a6219ad316366d3b84bf820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
