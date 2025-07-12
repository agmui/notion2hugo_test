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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSCK5RR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Bicvuy8mLOq4t14CzpYqXHqoZeRCBbllnG7kFvMROAiANy1S%2BmilNR6XNdbSGzRPdcg5l8M10eRxh6id1zXfg8iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZjvCMTz4%2FtQm11cVKtwDy1Rijrw5NRBKAJbXfTWmeqEfGqL0kI5ru12%2FM1Zi8UgKIzceIhF6yFHD0C98Cy8lGvWXbDVTSnEhLssOC8spD3r4LsldiTBADcW1%2FBCEi8NaAOLEtsjGeHyDKDDisA8yiZ8njhmv2X%2BuqH%2FzZia%2BBqcZZ3jrJB0W%2BCNPnvpoUjTyNPEPu0Y3ZLM04D6bc7ks83X19%2Fuvcuv9%2FCo2FlpNmIIN0Lc%2FTYzPOkX%2B73n4K08kcms9ATfojioTk842e1FPrPmkhv4FLhygay6ARWTfBJ3Osh7CNINZU%2FVwO97l4CD8RX72O1Z3F6BGLQGVK84S1EF%2Bo9UfyBqXIdq4Z2X06Wtv35FgcwSe2OhuKf4QegblhB54eCfzbPE0wueembnl3KvatMpsn8cErqiQU4Q026EGOwKaXsFKVRaTbEfCrD3mdqwUaAY2BZuY2OK8yfC7rEBQTXlOQ4kMXhSvlctxpU0pKXr94sKhvSxYEV1wjliGLBNTt3vOLwv%2BNUYFbwY0iQQSMu4Rc6E5DKglfD2nYbdTEA%2BV8SSkyJM18qYZtNyB4EWMUKgLx6V%2FdoHcK2CAZ13LnLtUm2%2BzwF%2FM3mELLNk%2Bsukoddns8l1en%2BLWIEe9R%2BfC7cnVfzcyrd4whNDHwwY6pgFaktuZef7sjeIE6kFOJXqJzEPYz%2BVvUx6SPPO4bbgaVR81L9ZCuY%2FNlAKUtoycM49omJGWv8yW7CLS%2BwLmRgRSAtKzMLsRq%2FA%2FJ8Ano2obC%2B7sN06KVEoD2ExekdIeMUSSFtknV%2BlFyxz%2BdjI%2FL17V6wzptrCHDQdgSNjPiIHb7Reg8BvKZinPSMFU9bpUwtxiUBLZUxPXQc2y0Q%2B6DEyakUJQWXP1&X-Amz-Signature=d2f0cf06cc730cb9910e7a8fcd0769e91f3760ddafe28c2909bcd3aa74c46143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSCK5RR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Bicvuy8mLOq4t14CzpYqXHqoZeRCBbllnG7kFvMROAiANy1S%2BmilNR6XNdbSGzRPdcg5l8M10eRxh6id1zXfg8iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZjvCMTz4%2FtQm11cVKtwDy1Rijrw5NRBKAJbXfTWmeqEfGqL0kI5ru12%2FM1Zi8UgKIzceIhF6yFHD0C98Cy8lGvWXbDVTSnEhLssOC8spD3r4LsldiTBADcW1%2FBCEi8NaAOLEtsjGeHyDKDDisA8yiZ8njhmv2X%2BuqH%2FzZia%2BBqcZZ3jrJB0W%2BCNPnvpoUjTyNPEPu0Y3ZLM04D6bc7ks83X19%2Fuvcuv9%2FCo2FlpNmIIN0Lc%2FTYzPOkX%2B73n4K08kcms9ATfojioTk842e1FPrPmkhv4FLhygay6ARWTfBJ3Osh7CNINZU%2FVwO97l4CD8RX72O1Z3F6BGLQGVK84S1EF%2Bo9UfyBqXIdq4Z2X06Wtv35FgcwSe2OhuKf4QegblhB54eCfzbPE0wueembnl3KvatMpsn8cErqiQU4Q026EGOwKaXsFKVRaTbEfCrD3mdqwUaAY2BZuY2OK8yfC7rEBQTXlOQ4kMXhSvlctxpU0pKXr94sKhvSxYEV1wjliGLBNTt3vOLwv%2BNUYFbwY0iQQSMu4Rc6E5DKglfD2nYbdTEA%2BV8SSkyJM18qYZtNyB4EWMUKgLx6V%2FdoHcK2CAZ13LnLtUm2%2BzwF%2FM3mELLNk%2Bsukoddns8l1en%2BLWIEe9R%2BfC7cnVfzcyrd4whNDHwwY6pgFaktuZef7sjeIE6kFOJXqJzEPYz%2BVvUx6SPPO4bbgaVR81L9ZCuY%2FNlAKUtoycM49omJGWv8yW7CLS%2BwLmRgRSAtKzMLsRq%2FA%2FJ8Ano2obC%2B7sN06KVEoD2ExekdIeMUSSFtknV%2BlFyxz%2BdjI%2FL17V6wzptrCHDQdgSNjPiIHb7Reg8BvKZinPSMFU9bpUwtxiUBLZUxPXQc2y0Q%2B6DEyakUJQWXP1&X-Amz-Signature=20ed67d35a09e51fc863471081ce61bf3c706975dfb347c898b477f5b4ffa7e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSCK5RR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Bicvuy8mLOq4t14CzpYqXHqoZeRCBbllnG7kFvMROAiANy1S%2BmilNR6XNdbSGzRPdcg5l8M10eRxh6id1zXfg8iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZjvCMTz4%2FtQm11cVKtwDy1Rijrw5NRBKAJbXfTWmeqEfGqL0kI5ru12%2FM1Zi8UgKIzceIhF6yFHD0C98Cy8lGvWXbDVTSnEhLssOC8spD3r4LsldiTBADcW1%2FBCEi8NaAOLEtsjGeHyDKDDisA8yiZ8njhmv2X%2BuqH%2FzZia%2BBqcZZ3jrJB0W%2BCNPnvpoUjTyNPEPu0Y3ZLM04D6bc7ks83X19%2Fuvcuv9%2FCo2FlpNmIIN0Lc%2FTYzPOkX%2B73n4K08kcms9ATfojioTk842e1FPrPmkhv4FLhygay6ARWTfBJ3Osh7CNINZU%2FVwO97l4CD8RX72O1Z3F6BGLQGVK84S1EF%2Bo9UfyBqXIdq4Z2X06Wtv35FgcwSe2OhuKf4QegblhB54eCfzbPE0wueembnl3KvatMpsn8cErqiQU4Q026EGOwKaXsFKVRaTbEfCrD3mdqwUaAY2BZuY2OK8yfC7rEBQTXlOQ4kMXhSvlctxpU0pKXr94sKhvSxYEV1wjliGLBNTt3vOLwv%2BNUYFbwY0iQQSMu4Rc6E5DKglfD2nYbdTEA%2BV8SSkyJM18qYZtNyB4EWMUKgLx6V%2FdoHcK2CAZ13LnLtUm2%2BzwF%2FM3mELLNk%2Bsukoddns8l1en%2BLWIEe9R%2BfC7cnVfzcyrd4whNDHwwY6pgFaktuZef7sjeIE6kFOJXqJzEPYz%2BVvUx6SPPO4bbgaVR81L9ZCuY%2FNlAKUtoycM49omJGWv8yW7CLS%2BwLmRgRSAtKzMLsRq%2FA%2FJ8Ano2obC%2B7sN06KVEoD2ExekdIeMUSSFtknV%2BlFyxz%2BdjI%2FL17V6wzptrCHDQdgSNjPiIHb7Reg8BvKZinPSMFU9bpUwtxiUBLZUxPXQc2y0Q%2B6DEyakUJQWXP1&X-Amz-Signature=76af1124fd8addcf713e28630b6df152b73ba225ba89f0b43086f637e6965fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSCK5RR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Bicvuy8mLOq4t14CzpYqXHqoZeRCBbllnG7kFvMROAiANy1S%2BmilNR6XNdbSGzRPdcg5l8M10eRxh6id1zXfg8iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZjvCMTz4%2FtQm11cVKtwDy1Rijrw5NRBKAJbXfTWmeqEfGqL0kI5ru12%2FM1Zi8UgKIzceIhF6yFHD0C98Cy8lGvWXbDVTSnEhLssOC8spD3r4LsldiTBADcW1%2FBCEi8NaAOLEtsjGeHyDKDDisA8yiZ8njhmv2X%2BuqH%2FzZia%2BBqcZZ3jrJB0W%2BCNPnvpoUjTyNPEPu0Y3ZLM04D6bc7ks83X19%2Fuvcuv9%2FCo2FlpNmIIN0Lc%2FTYzPOkX%2B73n4K08kcms9ATfojioTk842e1FPrPmkhv4FLhygay6ARWTfBJ3Osh7CNINZU%2FVwO97l4CD8RX72O1Z3F6BGLQGVK84S1EF%2Bo9UfyBqXIdq4Z2X06Wtv35FgcwSe2OhuKf4QegblhB54eCfzbPE0wueembnl3KvatMpsn8cErqiQU4Q026EGOwKaXsFKVRaTbEfCrD3mdqwUaAY2BZuY2OK8yfC7rEBQTXlOQ4kMXhSvlctxpU0pKXr94sKhvSxYEV1wjliGLBNTt3vOLwv%2BNUYFbwY0iQQSMu4Rc6E5DKglfD2nYbdTEA%2BV8SSkyJM18qYZtNyB4EWMUKgLx6V%2FdoHcK2CAZ13LnLtUm2%2BzwF%2FM3mELLNk%2Bsukoddns8l1en%2BLWIEe9R%2BfC7cnVfzcyrd4whNDHwwY6pgFaktuZef7sjeIE6kFOJXqJzEPYz%2BVvUx6SPPO4bbgaVR81L9ZCuY%2FNlAKUtoycM49omJGWv8yW7CLS%2BwLmRgRSAtKzMLsRq%2FA%2FJ8Ano2obC%2B7sN06KVEoD2ExekdIeMUSSFtknV%2BlFyxz%2BdjI%2FL17V6wzptrCHDQdgSNjPiIHb7Reg8BvKZinPSMFU9bpUwtxiUBLZUxPXQc2y0Q%2B6DEyakUJQWXP1&X-Amz-Signature=6138f7d006113c8a506e8435ffc628270a388043801766c163c8a22608f548b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSCK5RR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Bicvuy8mLOq4t14CzpYqXHqoZeRCBbllnG7kFvMROAiANy1S%2BmilNR6XNdbSGzRPdcg5l8M10eRxh6id1zXfg8iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZjvCMTz4%2FtQm11cVKtwDy1Rijrw5NRBKAJbXfTWmeqEfGqL0kI5ru12%2FM1Zi8UgKIzceIhF6yFHD0C98Cy8lGvWXbDVTSnEhLssOC8spD3r4LsldiTBADcW1%2FBCEi8NaAOLEtsjGeHyDKDDisA8yiZ8njhmv2X%2BuqH%2FzZia%2BBqcZZ3jrJB0W%2BCNPnvpoUjTyNPEPu0Y3ZLM04D6bc7ks83X19%2Fuvcuv9%2FCo2FlpNmIIN0Lc%2FTYzPOkX%2B73n4K08kcms9ATfojioTk842e1FPrPmkhv4FLhygay6ARWTfBJ3Osh7CNINZU%2FVwO97l4CD8RX72O1Z3F6BGLQGVK84S1EF%2Bo9UfyBqXIdq4Z2X06Wtv35FgcwSe2OhuKf4QegblhB54eCfzbPE0wueembnl3KvatMpsn8cErqiQU4Q026EGOwKaXsFKVRaTbEfCrD3mdqwUaAY2BZuY2OK8yfC7rEBQTXlOQ4kMXhSvlctxpU0pKXr94sKhvSxYEV1wjliGLBNTt3vOLwv%2BNUYFbwY0iQQSMu4Rc6E5DKglfD2nYbdTEA%2BV8SSkyJM18qYZtNyB4EWMUKgLx6V%2FdoHcK2CAZ13LnLtUm2%2BzwF%2FM3mELLNk%2Bsukoddns8l1en%2BLWIEe9R%2BfC7cnVfzcyrd4whNDHwwY6pgFaktuZef7sjeIE6kFOJXqJzEPYz%2BVvUx6SPPO4bbgaVR81L9ZCuY%2FNlAKUtoycM49omJGWv8yW7CLS%2BwLmRgRSAtKzMLsRq%2FA%2FJ8Ano2obC%2B7sN06KVEoD2ExekdIeMUSSFtknV%2BlFyxz%2BdjI%2FL17V6wzptrCHDQdgSNjPiIHb7Reg8BvKZinPSMFU9bpUwtxiUBLZUxPXQc2y0Q%2B6DEyakUJQWXP1&X-Amz-Signature=de5981ca6bc194013bbc6066e449c05dc63803844a1433d3b7a360413048e084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSCK5RR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Bicvuy8mLOq4t14CzpYqXHqoZeRCBbllnG7kFvMROAiANy1S%2BmilNR6XNdbSGzRPdcg5l8M10eRxh6id1zXfg8iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZjvCMTz4%2FtQm11cVKtwDy1Rijrw5NRBKAJbXfTWmeqEfGqL0kI5ru12%2FM1Zi8UgKIzceIhF6yFHD0C98Cy8lGvWXbDVTSnEhLssOC8spD3r4LsldiTBADcW1%2FBCEi8NaAOLEtsjGeHyDKDDisA8yiZ8njhmv2X%2BuqH%2FzZia%2BBqcZZ3jrJB0W%2BCNPnvpoUjTyNPEPu0Y3ZLM04D6bc7ks83X19%2Fuvcuv9%2FCo2FlpNmIIN0Lc%2FTYzPOkX%2B73n4K08kcms9ATfojioTk842e1FPrPmkhv4FLhygay6ARWTfBJ3Osh7CNINZU%2FVwO97l4CD8RX72O1Z3F6BGLQGVK84S1EF%2Bo9UfyBqXIdq4Z2X06Wtv35FgcwSe2OhuKf4QegblhB54eCfzbPE0wueembnl3KvatMpsn8cErqiQU4Q026EGOwKaXsFKVRaTbEfCrD3mdqwUaAY2BZuY2OK8yfC7rEBQTXlOQ4kMXhSvlctxpU0pKXr94sKhvSxYEV1wjliGLBNTt3vOLwv%2BNUYFbwY0iQQSMu4Rc6E5DKglfD2nYbdTEA%2BV8SSkyJM18qYZtNyB4EWMUKgLx6V%2FdoHcK2CAZ13LnLtUm2%2BzwF%2FM3mELLNk%2Bsukoddns8l1en%2BLWIEe9R%2BfC7cnVfzcyrd4whNDHwwY6pgFaktuZef7sjeIE6kFOJXqJzEPYz%2BVvUx6SPPO4bbgaVR81L9ZCuY%2FNlAKUtoycM49omJGWv8yW7CLS%2BwLmRgRSAtKzMLsRq%2FA%2FJ8Ano2obC%2B7sN06KVEoD2ExekdIeMUSSFtknV%2BlFyxz%2BdjI%2FL17V6wzptrCHDQdgSNjPiIHb7Reg8BvKZinPSMFU9bpUwtxiUBLZUxPXQc2y0Q%2B6DEyakUJQWXP1&X-Amz-Signature=405563609e0eedb1c72ca64ddf11f0895f16bde6a821b66031d6016a28f04339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSCK5RR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Bicvuy8mLOq4t14CzpYqXHqoZeRCBbllnG7kFvMROAiANy1S%2BmilNR6XNdbSGzRPdcg5l8M10eRxh6id1zXfg8iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZjvCMTz4%2FtQm11cVKtwDy1Rijrw5NRBKAJbXfTWmeqEfGqL0kI5ru12%2FM1Zi8UgKIzceIhF6yFHD0C98Cy8lGvWXbDVTSnEhLssOC8spD3r4LsldiTBADcW1%2FBCEi8NaAOLEtsjGeHyDKDDisA8yiZ8njhmv2X%2BuqH%2FzZia%2BBqcZZ3jrJB0W%2BCNPnvpoUjTyNPEPu0Y3ZLM04D6bc7ks83X19%2Fuvcuv9%2FCo2FlpNmIIN0Lc%2FTYzPOkX%2B73n4K08kcms9ATfojioTk842e1FPrPmkhv4FLhygay6ARWTfBJ3Osh7CNINZU%2FVwO97l4CD8RX72O1Z3F6BGLQGVK84S1EF%2Bo9UfyBqXIdq4Z2X06Wtv35FgcwSe2OhuKf4QegblhB54eCfzbPE0wueembnl3KvatMpsn8cErqiQU4Q026EGOwKaXsFKVRaTbEfCrD3mdqwUaAY2BZuY2OK8yfC7rEBQTXlOQ4kMXhSvlctxpU0pKXr94sKhvSxYEV1wjliGLBNTt3vOLwv%2BNUYFbwY0iQQSMu4Rc6E5DKglfD2nYbdTEA%2BV8SSkyJM18qYZtNyB4EWMUKgLx6V%2FdoHcK2CAZ13LnLtUm2%2BzwF%2FM3mELLNk%2Bsukoddns8l1en%2BLWIEe9R%2BfC7cnVfzcyrd4whNDHwwY6pgFaktuZef7sjeIE6kFOJXqJzEPYz%2BVvUx6SPPO4bbgaVR81L9ZCuY%2FNlAKUtoycM49omJGWv8yW7CLS%2BwLmRgRSAtKzMLsRq%2FA%2FJ8Ano2obC%2B7sN06KVEoD2ExekdIeMUSSFtknV%2BlFyxz%2BdjI%2FL17V6wzptrCHDQdgSNjPiIHb7Reg8BvKZinPSMFU9bpUwtxiUBLZUxPXQc2y0Q%2B6DEyakUJQWXP1&X-Amz-Signature=5c4901354824e04968948921fb9753a25d26c113b057b770dc668695ab80a294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
