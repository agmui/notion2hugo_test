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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466224G6KWD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbn5K3XItrBjisnIuOkX%2FhxZdOodMAaWtsyTiD5yrtnAiAMOJGx9veONHb6PSKcYWwJNWTLHdTvFw4DevHbWmft%2FyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPrrlM8mjVCeYeU%2BgKtwDKjlWxvh2%2FwMxw7Hs%2BHCjrTc51MK2SJc4ngTvWnjLhzJyAgZ%2FmLcPrL%2F29ip%2FsGagslty%2BL97Bhp7GxBKSndRRXNG0Q2k8yBf4M2cKu6h61kCNBBAUJ5tEI%2FolkG5NhxtWrjG780EbVOjZ1PTlCSBpLqv0oeFya6j4T6aGtITrUAo%2Flfl8TKn%2Bp19r3hMUvhJebA4O%2BXceggCBd7hAb%2FXSwIMq77oQAQdyDMXeQMCvV7p4%2B8PC4Y4dJKqrvHB2xxYredlnBeU8epsqEROl08ljO2UVrLVXa2QPyU58h1LSu8H67NREA1ENZ4nM9DceQXks3EcWBURw2V0%2FcalF2kClsqnSRQufp%2BorB96i%2B3jEVCFMBFjsUs1snHKM5iKoqwLW8YmkvN1GJiXZ972sH7tGfW%2B%2BscTLESraxtAl9lYiLX8eKBUyZ6UUSKmacg5XbARvZbgbsDaUquILYcXExXNBGB3kQZY3FB6jAU%2FSUrpQg1Q0DATeTEQ4myWSGzdEEKrs4fni3ct5E8iPQCC1z7V%2B5%2B2XDiyXhQG27vHrzl9RN0bYhK%2FhjSCP2xWaE0YySrsOQQcx8olzFhkA3PxFT3ZPneI1PZ7pSABf3mwPYHCS1ncVU2nVpgeWah%2FekEw2rLWwgY6pgGFl6tCXxg5m64J5Xsu9GCs5u3DkrxlbUV1OchD5jp6c3sqCn1zQuBd8bHW9ZhUrYozGu4q9Fxt%2FrIwwttxZPA1I2p30YPBKqB1oiciDBLcyPSqwPdFijyThEvG2Sti63B44PNSgTGxTyhwvC4YLajoBTpbv9Iw2YNanNVWAtA1dQrDmjTlv37%2BIeX1lUaRF7itW6%2B1c73uHgK7khnAHbRxZhCLLSvs&X-Amz-Signature=1ae822a108c87c771177f27fa897cc63f681d8c8e2120c5a2cb9196e5896f83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466224G6KWD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbn5K3XItrBjisnIuOkX%2FhxZdOodMAaWtsyTiD5yrtnAiAMOJGx9veONHb6PSKcYWwJNWTLHdTvFw4DevHbWmft%2FyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPrrlM8mjVCeYeU%2BgKtwDKjlWxvh2%2FwMxw7Hs%2BHCjrTc51MK2SJc4ngTvWnjLhzJyAgZ%2FmLcPrL%2F29ip%2FsGagslty%2BL97Bhp7GxBKSndRRXNG0Q2k8yBf4M2cKu6h61kCNBBAUJ5tEI%2FolkG5NhxtWrjG780EbVOjZ1PTlCSBpLqv0oeFya6j4T6aGtITrUAo%2Flfl8TKn%2Bp19r3hMUvhJebA4O%2BXceggCBd7hAb%2FXSwIMq77oQAQdyDMXeQMCvV7p4%2B8PC4Y4dJKqrvHB2xxYredlnBeU8epsqEROl08ljO2UVrLVXa2QPyU58h1LSu8H67NREA1ENZ4nM9DceQXks3EcWBURw2V0%2FcalF2kClsqnSRQufp%2BorB96i%2B3jEVCFMBFjsUs1snHKM5iKoqwLW8YmkvN1GJiXZ972sH7tGfW%2B%2BscTLESraxtAl9lYiLX8eKBUyZ6UUSKmacg5XbARvZbgbsDaUquILYcXExXNBGB3kQZY3FB6jAU%2FSUrpQg1Q0DATeTEQ4myWSGzdEEKrs4fni3ct5E8iPQCC1z7V%2B5%2B2XDiyXhQG27vHrzl9RN0bYhK%2FhjSCP2xWaE0YySrsOQQcx8olzFhkA3PxFT3ZPneI1PZ7pSABf3mwPYHCS1ncVU2nVpgeWah%2FekEw2rLWwgY6pgGFl6tCXxg5m64J5Xsu9GCs5u3DkrxlbUV1OchD5jp6c3sqCn1zQuBd8bHW9ZhUrYozGu4q9Fxt%2FrIwwttxZPA1I2p30YPBKqB1oiciDBLcyPSqwPdFijyThEvG2Sti63B44PNSgTGxTyhwvC4YLajoBTpbv9Iw2YNanNVWAtA1dQrDmjTlv37%2BIeX1lUaRF7itW6%2B1c73uHgK7khnAHbRxZhCLLSvs&X-Amz-Signature=49adf5f7f39717389798b0f27e45bfead857e14b9aceaba6d1115e0a7f3412c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466224G6KWD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbn5K3XItrBjisnIuOkX%2FhxZdOodMAaWtsyTiD5yrtnAiAMOJGx9veONHb6PSKcYWwJNWTLHdTvFw4DevHbWmft%2FyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPrrlM8mjVCeYeU%2BgKtwDKjlWxvh2%2FwMxw7Hs%2BHCjrTc51MK2SJc4ngTvWnjLhzJyAgZ%2FmLcPrL%2F29ip%2FsGagslty%2BL97Bhp7GxBKSndRRXNG0Q2k8yBf4M2cKu6h61kCNBBAUJ5tEI%2FolkG5NhxtWrjG780EbVOjZ1PTlCSBpLqv0oeFya6j4T6aGtITrUAo%2Flfl8TKn%2Bp19r3hMUvhJebA4O%2BXceggCBd7hAb%2FXSwIMq77oQAQdyDMXeQMCvV7p4%2B8PC4Y4dJKqrvHB2xxYredlnBeU8epsqEROl08ljO2UVrLVXa2QPyU58h1LSu8H67NREA1ENZ4nM9DceQXks3EcWBURw2V0%2FcalF2kClsqnSRQufp%2BorB96i%2B3jEVCFMBFjsUs1snHKM5iKoqwLW8YmkvN1GJiXZ972sH7tGfW%2B%2BscTLESraxtAl9lYiLX8eKBUyZ6UUSKmacg5XbARvZbgbsDaUquILYcXExXNBGB3kQZY3FB6jAU%2FSUrpQg1Q0DATeTEQ4myWSGzdEEKrs4fni3ct5E8iPQCC1z7V%2B5%2B2XDiyXhQG27vHrzl9RN0bYhK%2FhjSCP2xWaE0YySrsOQQcx8olzFhkA3PxFT3ZPneI1PZ7pSABf3mwPYHCS1ncVU2nVpgeWah%2FekEw2rLWwgY6pgGFl6tCXxg5m64J5Xsu9GCs5u3DkrxlbUV1OchD5jp6c3sqCn1zQuBd8bHW9ZhUrYozGu4q9Fxt%2FrIwwttxZPA1I2p30YPBKqB1oiciDBLcyPSqwPdFijyThEvG2Sti63B44PNSgTGxTyhwvC4YLajoBTpbv9Iw2YNanNVWAtA1dQrDmjTlv37%2BIeX1lUaRF7itW6%2B1c73uHgK7khnAHbRxZhCLLSvs&X-Amz-Signature=05faa91b8b0c0898a9ae622baf28d997a373438106fb9f3622fe9251a5d5fdc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466224G6KWD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbn5K3XItrBjisnIuOkX%2FhxZdOodMAaWtsyTiD5yrtnAiAMOJGx9veONHb6PSKcYWwJNWTLHdTvFw4DevHbWmft%2FyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPrrlM8mjVCeYeU%2BgKtwDKjlWxvh2%2FwMxw7Hs%2BHCjrTc51MK2SJc4ngTvWnjLhzJyAgZ%2FmLcPrL%2F29ip%2FsGagslty%2BL97Bhp7GxBKSndRRXNG0Q2k8yBf4M2cKu6h61kCNBBAUJ5tEI%2FolkG5NhxtWrjG780EbVOjZ1PTlCSBpLqv0oeFya6j4T6aGtITrUAo%2Flfl8TKn%2Bp19r3hMUvhJebA4O%2BXceggCBd7hAb%2FXSwIMq77oQAQdyDMXeQMCvV7p4%2B8PC4Y4dJKqrvHB2xxYredlnBeU8epsqEROl08ljO2UVrLVXa2QPyU58h1LSu8H67NREA1ENZ4nM9DceQXks3EcWBURw2V0%2FcalF2kClsqnSRQufp%2BorB96i%2B3jEVCFMBFjsUs1snHKM5iKoqwLW8YmkvN1GJiXZ972sH7tGfW%2B%2BscTLESraxtAl9lYiLX8eKBUyZ6UUSKmacg5XbARvZbgbsDaUquILYcXExXNBGB3kQZY3FB6jAU%2FSUrpQg1Q0DATeTEQ4myWSGzdEEKrs4fni3ct5E8iPQCC1z7V%2B5%2B2XDiyXhQG27vHrzl9RN0bYhK%2FhjSCP2xWaE0YySrsOQQcx8olzFhkA3PxFT3ZPneI1PZ7pSABf3mwPYHCS1ncVU2nVpgeWah%2FekEw2rLWwgY6pgGFl6tCXxg5m64J5Xsu9GCs5u3DkrxlbUV1OchD5jp6c3sqCn1zQuBd8bHW9ZhUrYozGu4q9Fxt%2FrIwwttxZPA1I2p30YPBKqB1oiciDBLcyPSqwPdFijyThEvG2Sti63B44PNSgTGxTyhwvC4YLajoBTpbv9Iw2YNanNVWAtA1dQrDmjTlv37%2BIeX1lUaRF7itW6%2B1c73uHgK7khnAHbRxZhCLLSvs&X-Amz-Signature=faac33d1b6f8352fed905f30c36cf2e985026bfa66c12b9d2744d8a2b925a73a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466224G6KWD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbn5K3XItrBjisnIuOkX%2FhxZdOodMAaWtsyTiD5yrtnAiAMOJGx9veONHb6PSKcYWwJNWTLHdTvFw4DevHbWmft%2FyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPrrlM8mjVCeYeU%2BgKtwDKjlWxvh2%2FwMxw7Hs%2BHCjrTc51MK2SJc4ngTvWnjLhzJyAgZ%2FmLcPrL%2F29ip%2FsGagslty%2BL97Bhp7GxBKSndRRXNG0Q2k8yBf4M2cKu6h61kCNBBAUJ5tEI%2FolkG5NhxtWrjG780EbVOjZ1PTlCSBpLqv0oeFya6j4T6aGtITrUAo%2Flfl8TKn%2Bp19r3hMUvhJebA4O%2BXceggCBd7hAb%2FXSwIMq77oQAQdyDMXeQMCvV7p4%2B8PC4Y4dJKqrvHB2xxYredlnBeU8epsqEROl08ljO2UVrLVXa2QPyU58h1LSu8H67NREA1ENZ4nM9DceQXks3EcWBURw2V0%2FcalF2kClsqnSRQufp%2BorB96i%2B3jEVCFMBFjsUs1snHKM5iKoqwLW8YmkvN1GJiXZ972sH7tGfW%2B%2BscTLESraxtAl9lYiLX8eKBUyZ6UUSKmacg5XbARvZbgbsDaUquILYcXExXNBGB3kQZY3FB6jAU%2FSUrpQg1Q0DATeTEQ4myWSGzdEEKrs4fni3ct5E8iPQCC1z7V%2B5%2B2XDiyXhQG27vHrzl9RN0bYhK%2FhjSCP2xWaE0YySrsOQQcx8olzFhkA3PxFT3ZPneI1PZ7pSABf3mwPYHCS1ncVU2nVpgeWah%2FekEw2rLWwgY6pgGFl6tCXxg5m64J5Xsu9GCs5u3DkrxlbUV1OchD5jp6c3sqCn1zQuBd8bHW9ZhUrYozGu4q9Fxt%2FrIwwttxZPA1I2p30YPBKqB1oiciDBLcyPSqwPdFijyThEvG2Sti63B44PNSgTGxTyhwvC4YLajoBTpbv9Iw2YNanNVWAtA1dQrDmjTlv37%2BIeX1lUaRF7itW6%2B1c73uHgK7khnAHbRxZhCLLSvs&X-Amz-Signature=774024a2df266299b07852b19d5c1f381f7e655a6c26b6739bed2811a4668931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466224G6KWD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbn5K3XItrBjisnIuOkX%2FhxZdOodMAaWtsyTiD5yrtnAiAMOJGx9veONHb6PSKcYWwJNWTLHdTvFw4DevHbWmft%2FyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPrrlM8mjVCeYeU%2BgKtwDKjlWxvh2%2FwMxw7Hs%2BHCjrTc51MK2SJc4ngTvWnjLhzJyAgZ%2FmLcPrL%2F29ip%2FsGagslty%2BL97Bhp7GxBKSndRRXNG0Q2k8yBf4M2cKu6h61kCNBBAUJ5tEI%2FolkG5NhxtWrjG780EbVOjZ1PTlCSBpLqv0oeFya6j4T6aGtITrUAo%2Flfl8TKn%2Bp19r3hMUvhJebA4O%2BXceggCBd7hAb%2FXSwIMq77oQAQdyDMXeQMCvV7p4%2B8PC4Y4dJKqrvHB2xxYredlnBeU8epsqEROl08ljO2UVrLVXa2QPyU58h1LSu8H67NREA1ENZ4nM9DceQXks3EcWBURw2V0%2FcalF2kClsqnSRQufp%2BorB96i%2B3jEVCFMBFjsUs1snHKM5iKoqwLW8YmkvN1GJiXZ972sH7tGfW%2B%2BscTLESraxtAl9lYiLX8eKBUyZ6UUSKmacg5XbARvZbgbsDaUquILYcXExXNBGB3kQZY3FB6jAU%2FSUrpQg1Q0DATeTEQ4myWSGzdEEKrs4fni3ct5E8iPQCC1z7V%2B5%2B2XDiyXhQG27vHrzl9RN0bYhK%2FhjSCP2xWaE0YySrsOQQcx8olzFhkA3PxFT3ZPneI1PZ7pSABf3mwPYHCS1ncVU2nVpgeWah%2FekEw2rLWwgY6pgGFl6tCXxg5m64J5Xsu9GCs5u3DkrxlbUV1OchD5jp6c3sqCn1zQuBd8bHW9ZhUrYozGu4q9Fxt%2FrIwwttxZPA1I2p30YPBKqB1oiciDBLcyPSqwPdFijyThEvG2Sti63B44PNSgTGxTyhwvC4YLajoBTpbv9Iw2YNanNVWAtA1dQrDmjTlv37%2BIeX1lUaRF7itW6%2B1c73uHgK7khnAHbRxZhCLLSvs&X-Amz-Signature=ddf2074602975754113aa5522e6ce06e9f490363bdfe59ffcc33426f27580fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466224G6KWD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbn5K3XItrBjisnIuOkX%2FhxZdOodMAaWtsyTiD5yrtnAiAMOJGx9veONHb6PSKcYWwJNWTLHdTvFw4DevHbWmft%2FyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPrrlM8mjVCeYeU%2BgKtwDKjlWxvh2%2FwMxw7Hs%2BHCjrTc51MK2SJc4ngTvWnjLhzJyAgZ%2FmLcPrL%2F29ip%2FsGagslty%2BL97Bhp7GxBKSndRRXNG0Q2k8yBf4M2cKu6h61kCNBBAUJ5tEI%2FolkG5NhxtWrjG780EbVOjZ1PTlCSBpLqv0oeFya6j4T6aGtITrUAo%2Flfl8TKn%2Bp19r3hMUvhJebA4O%2BXceggCBd7hAb%2FXSwIMq77oQAQdyDMXeQMCvV7p4%2B8PC4Y4dJKqrvHB2xxYredlnBeU8epsqEROl08ljO2UVrLVXa2QPyU58h1LSu8H67NREA1ENZ4nM9DceQXks3EcWBURw2V0%2FcalF2kClsqnSRQufp%2BorB96i%2B3jEVCFMBFjsUs1snHKM5iKoqwLW8YmkvN1GJiXZ972sH7tGfW%2B%2BscTLESraxtAl9lYiLX8eKBUyZ6UUSKmacg5XbARvZbgbsDaUquILYcXExXNBGB3kQZY3FB6jAU%2FSUrpQg1Q0DATeTEQ4myWSGzdEEKrs4fni3ct5E8iPQCC1z7V%2B5%2B2XDiyXhQG27vHrzl9RN0bYhK%2FhjSCP2xWaE0YySrsOQQcx8olzFhkA3PxFT3ZPneI1PZ7pSABf3mwPYHCS1ncVU2nVpgeWah%2FekEw2rLWwgY6pgGFl6tCXxg5m64J5Xsu9GCs5u3DkrxlbUV1OchD5jp6c3sqCn1zQuBd8bHW9ZhUrYozGu4q9Fxt%2FrIwwttxZPA1I2p30YPBKqB1oiciDBLcyPSqwPdFijyThEvG2Sti63B44PNSgTGxTyhwvC4YLajoBTpbv9Iw2YNanNVWAtA1dQrDmjTlv37%2BIeX1lUaRF7itW6%2B1c73uHgK7khnAHbRxZhCLLSvs&X-Amz-Signature=4570a7a5ecb3dee30e9e8ff59d3dabd08522e3a1a746a0dd7ad66a8bfc1b68d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
