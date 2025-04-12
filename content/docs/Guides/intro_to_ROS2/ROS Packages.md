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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCW5K2S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBgWGVvMtQHG%2FL7upPsnKtNCJziDWsp%2Bzz9a4BiKUWcXAiBzT3L28mI2tQFvufDBhyrV1wq19ztPYZbuIoUkp0JbjyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXMUYU7SU8iIIcKxKtwDv7m0qRJ5RVE%2F3v4%2FRoc8PlNJQ5Q%2BO3ygznS3H16IFFto73KsNH5DhigN83DsYSFdnqPnNLD6VBdzeYuWsLYybH7W3IF4SUILz6kiHSdynltkWOqqkKgVmDUNF9Ov2A4RNOQwhQF%2Fpkf4d9ONk5MLGTMZ3uUfODHL6%2BPhZdrUGF6Abp7LNbd2fBLlmIe2ahZaafGy4Y4PsW%2FjYsaZHkKzx270OgT1B%2FO6DOCDXWLRPtK3CRp9XPi7Tn%2F1B9f%2F1FhJJXqWRJW%2F74lr7FiT6Y9kDeJQLXINInZUTkKxVg0YBcgPy7dc%2ByHs9OcC8Iluk2p7%2FQUPS%2B5BDhCOO2PlmkEVgo%2B58lfEijCVsLTKlaSpJ8UgorDzw4Inh0agG5n4ODer3rHTVO6eEl1%2BNJvz%2FrxyVhZZsQHG5HNvGG4gBBEoRspKsRY5gTHuozo5bU1%2BbF1VBmeRDRf6tGGSruUWm3XSC%2BgYTTNMqh22gco0oXap88s79RVgOAa8rSM6ZuTj5Tc4v5LCoNyXzLuPaALGMpPpKyIMJjGvhmlu5LuVKynbTkNWDROCygA0xHPpysw29ZwVPG1W9Q5vf504vxZr122WGOSKTia37DP5vaKrZRsnY5EOR515glt2lUdFhbcw%2FMPpvwY6pgFLj3YnTltPB6hAxf5APuXqnnr5FhVi4wbSN2tQR0hYWdi5tWMxl91JA44kl21NmSTzjfBS%2FFeLGZxFw9XJgmRgYsdHU7j6JMiHkMILz9nop7TskgwweQWrnrSnKhN3JobSXYVWoKNSKrPFesO0vZ5d9%2BxfuedoTm0088zRpf%2BCyBINzO%2BOLo1dkktOrbZQwTDQw3DCOeNO7ZFoho%2Fc%2F9HFe8LBxZSC&X-Amz-Signature=07120bb1ba3a1bc722df66fda88660c59408058ceb8490e67c374e6e2d3ca3f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCW5K2S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBgWGVvMtQHG%2FL7upPsnKtNCJziDWsp%2Bzz9a4BiKUWcXAiBzT3L28mI2tQFvufDBhyrV1wq19ztPYZbuIoUkp0JbjyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXMUYU7SU8iIIcKxKtwDv7m0qRJ5RVE%2F3v4%2FRoc8PlNJQ5Q%2BO3ygznS3H16IFFto73KsNH5DhigN83DsYSFdnqPnNLD6VBdzeYuWsLYybH7W3IF4SUILz6kiHSdynltkWOqqkKgVmDUNF9Ov2A4RNOQwhQF%2Fpkf4d9ONk5MLGTMZ3uUfODHL6%2BPhZdrUGF6Abp7LNbd2fBLlmIe2ahZaafGy4Y4PsW%2FjYsaZHkKzx270OgT1B%2FO6DOCDXWLRPtK3CRp9XPi7Tn%2F1B9f%2F1FhJJXqWRJW%2F74lr7FiT6Y9kDeJQLXINInZUTkKxVg0YBcgPy7dc%2ByHs9OcC8Iluk2p7%2FQUPS%2B5BDhCOO2PlmkEVgo%2B58lfEijCVsLTKlaSpJ8UgorDzw4Inh0agG5n4ODer3rHTVO6eEl1%2BNJvz%2FrxyVhZZsQHG5HNvGG4gBBEoRspKsRY5gTHuozo5bU1%2BbF1VBmeRDRf6tGGSruUWm3XSC%2BgYTTNMqh22gco0oXap88s79RVgOAa8rSM6ZuTj5Tc4v5LCoNyXzLuPaALGMpPpKyIMJjGvhmlu5LuVKynbTkNWDROCygA0xHPpysw29ZwVPG1W9Q5vf504vxZr122WGOSKTia37DP5vaKrZRsnY5EOR515glt2lUdFhbcw%2FMPpvwY6pgFLj3YnTltPB6hAxf5APuXqnnr5FhVi4wbSN2tQR0hYWdi5tWMxl91JA44kl21NmSTzjfBS%2FFeLGZxFw9XJgmRgYsdHU7j6JMiHkMILz9nop7TskgwweQWrnrSnKhN3JobSXYVWoKNSKrPFesO0vZ5d9%2BxfuedoTm0088zRpf%2BCyBINzO%2BOLo1dkktOrbZQwTDQw3DCOeNO7ZFoho%2Fc%2F9HFe8LBxZSC&X-Amz-Signature=35eb03987063b7f8b39b85f02308051d0eb064a17e28225959bed13d24413b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCW5K2S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBgWGVvMtQHG%2FL7upPsnKtNCJziDWsp%2Bzz9a4BiKUWcXAiBzT3L28mI2tQFvufDBhyrV1wq19ztPYZbuIoUkp0JbjyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXMUYU7SU8iIIcKxKtwDv7m0qRJ5RVE%2F3v4%2FRoc8PlNJQ5Q%2BO3ygznS3H16IFFto73KsNH5DhigN83DsYSFdnqPnNLD6VBdzeYuWsLYybH7W3IF4SUILz6kiHSdynltkWOqqkKgVmDUNF9Ov2A4RNOQwhQF%2Fpkf4d9ONk5MLGTMZ3uUfODHL6%2BPhZdrUGF6Abp7LNbd2fBLlmIe2ahZaafGy4Y4PsW%2FjYsaZHkKzx270OgT1B%2FO6DOCDXWLRPtK3CRp9XPi7Tn%2F1B9f%2F1FhJJXqWRJW%2F74lr7FiT6Y9kDeJQLXINInZUTkKxVg0YBcgPy7dc%2ByHs9OcC8Iluk2p7%2FQUPS%2B5BDhCOO2PlmkEVgo%2B58lfEijCVsLTKlaSpJ8UgorDzw4Inh0agG5n4ODer3rHTVO6eEl1%2BNJvz%2FrxyVhZZsQHG5HNvGG4gBBEoRspKsRY5gTHuozo5bU1%2BbF1VBmeRDRf6tGGSruUWm3XSC%2BgYTTNMqh22gco0oXap88s79RVgOAa8rSM6ZuTj5Tc4v5LCoNyXzLuPaALGMpPpKyIMJjGvhmlu5LuVKynbTkNWDROCygA0xHPpysw29ZwVPG1W9Q5vf504vxZr122WGOSKTia37DP5vaKrZRsnY5EOR515glt2lUdFhbcw%2FMPpvwY6pgFLj3YnTltPB6hAxf5APuXqnnr5FhVi4wbSN2tQR0hYWdi5tWMxl91JA44kl21NmSTzjfBS%2FFeLGZxFw9XJgmRgYsdHU7j6JMiHkMILz9nop7TskgwweQWrnrSnKhN3JobSXYVWoKNSKrPFesO0vZ5d9%2BxfuedoTm0088zRpf%2BCyBINzO%2BOLo1dkktOrbZQwTDQw3DCOeNO7ZFoho%2Fc%2F9HFe8LBxZSC&X-Amz-Signature=92a8e8e4d3f4ae0a2fa7eed918d5a42ae167f02101a9dba8be5a2da22f92ae2c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCW5K2S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBgWGVvMtQHG%2FL7upPsnKtNCJziDWsp%2Bzz9a4BiKUWcXAiBzT3L28mI2tQFvufDBhyrV1wq19ztPYZbuIoUkp0JbjyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXMUYU7SU8iIIcKxKtwDv7m0qRJ5RVE%2F3v4%2FRoc8PlNJQ5Q%2BO3ygznS3H16IFFto73KsNH5DhigN83DsYSFdnqPnNLD6VBdzeYuWsLYybH7W3IF4SUILz6kiHSdynltkWOqqkKgVmDUNF9Ov2A4RNOQwhQF%2Fpkf4d9ONk5MLGTMZ3uUfODHL6%2BPhZdrUGF6Abp7LNbd2fBLlmIe2ahZaafGy4Y4PsW%2FjYsaZHkKzx270OgT1B%2FO6DOCDXWLRPtK3CRp9XPi7Tn%2F1B9f%2F1FhJJXqWRJW%2F74lr7FiT6Y9kDeJQLXINInZUTkKxVg0YBcgPy7dc%2ByHs9OcC8Iluk2p7%2FQUPS%2B5BDhCOO2PlmkEVgo%2B58lfEijCVsLTKlaSpJ8UgorDzw4Inh0agG5n4ODer3rHTVO6eEl1%2BNJvz%2FrxyVhZZsQHG5HNvGG4gBBEoRspKsRY5gTHuozo5bU1%2BbF1VBmeRDRf6tGGSruUWm3XSC%2BgYTTNMqh22gco0oXap88s79RVgOAa8rSM6ZuTj5Tc4v5LCoNyXzLuPaALGMpPpKyIMJjGvhmlu5LuVKynbTkNWDROCygA0xHPpysw29ZwVPG1W9Q5vf504vxZr122WGOSKTia37DP5vaKrZRsnY5EOR515glt2lUdFhbcw%2FMPpvwY6pgFLj3YnTltPB6hAxf5APuXqnnr5FhVi4wbSN2tQR0hYWdi5tWMxl91JA44kl21NmSTzjfBS%2FFeLGZxFw9XJgmRgYsdHU7j6JMiHkMILz9nop7TskgwweQWrnrSnKhN3JobSXYVWoKNSKrPFesO0vZ5d9%2BxfuedoTm0088zRpf%2BCyBINzO%2BOLo1dkktOrbZQwTDQw3DCOeNO7ZFoho%2Fc%2F9HFe8LBxZSC&X-Amz-Signature=b12085c99021b0ea8e478635d226337683d2a5b5eb78e349bc66e958e7428377&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCW5K2S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBgWGVvMtQHG%2FL7upPsnKtNCJziDWsp%2Bzz9a4BiKUWcXAiBzT3L28mI2tQFvufDBhyrV1wq19ztPYZbuIoUkp0JbjyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXMUYU7SU8iIIcKxKtwDv7m0qRJ5RVE%2F3v4%2FRoc8PlNJQ5Q%2BO3ygznS3H16IFFto73KsNH5DhigN83DsYSFdnqPnNLD6VBdzeYuWsLYybH7W3IF4SUILz6kiHSdynltkWOqqkKgVmDUNF9Ov2A4RNOQwhQF%2Fpkf4d9ONk5MLGTMZ3uUfODHL6%2BPhZdrUGF6Abp7LNbd2fBLlmIe2ahZaafGy4Y4PsW%2FjYsaZHkKzx270OgT1B%2FO6DOCDXWLRPtK3CRp9XPi7Tn%2F1B9f%2F1FhJJXqWRJW%2F74lr7FiT6Y9kDeJQLXINInZUTkKxVg0YBcgPy7dc%2ByHs9OcC8Iluk2p7%2FQUPS%2B5BDhCOO2PlmkEVgo%2B58lfEijCVsLTKlaSpJ8UgorDzw4Inh0agG5n4ODer3rHTVO6eEl1%2BNJvz%2FrxyVhZZsQHG5HNvGG4gBBEoRspKsRY5gTHuozo5bU1%2BbF1VBmeRDRf6tGGSruUWm3XSC%2BgYTTNMqh22gco0oXap88s79RVgOAa8rSM6ZuTj5Tc4v5LCoNyXzLuPaALGMpPpKyIMJjGvhmlu5LuVKynbTkNWDROCygA0xHPpysw29ZwVPG1W9Q5vf504vxZr122WGOSKTia37DP5vaKrZRsnY5EOR515glt2lUdFhbcw%2FMPpvwY6pgFLj3YnTltPB6hAxf5APuXqnnr5FhVi4wbSN2tQR0hYWdi5tWMxl91JA44kl21NmSTzjfBS%2FFeLGZxFw9XJgmRgYsdHU7j6JMiHkMILz9nop7TskgwweQWrnrSnKhN3JobSXYVWoKNSKrPFesO0vZ5d9%2BxfuedoTm0088zRpf%2BCyBINzO%2BOLo1dkktOrbZQwTDQw3DCOeNO7ZFoho%2Fc%2F9HFe8LBxZSC&X-Amz-Signature=230340f6a6da2b672e4ce8ed003db6f4435eb579f36138fcb768b87ac83f0ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCW5K2S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBgWGVvMtQHG%2FL7upPsnKtNCJziDWsp%2Bzz9a4BiKUWcXAiBzT3L28mI2tQFvufDBhyrV1wq19ztPYZbuIoUkp0JbjyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXMUYU7SU8iIIcKxKtwDv7m0qRJ5RVE%2F3v4%2FRoc8PlNJQ5Q%2BO3ygznS3H16IFFto73KsNH5DhigN83DsYSFdnqPnNLD6VBdzeYuWsLYybH7W3IF4SUILz6kiHSdynltkWOqqkKgVmDUNF9Ov2A4RNOQwhQF%2Fpkf4d9ONk5MLGTMZ3uUfODHL6%2BPhZdrUGF6Abp7LNbd2fBLlmIe2ahZaafGy4Y4PsW%2FjYsaZHkKzx270OgT1B%2FO6DOCDXWLRPtK3CRp9XPi7Tn%2F1B9f%2F1FhJJXqWRJW%2F74lr7FiT6Y9kDeJQLXINInZUTkKxVg0YBcgPy7dc%2ByHs9OcC8Iluk2p7%2FQUPS%2B5BDhCOO2PlmkEVgo%2B58lfEijCVsLTKlaSpJ8UgorDzw4Inh0agG5n4ODer3rHTVO6eEl1%2BNJvz%2FrxyVhZZsQHG5HNvGG4gBBEoRspKsRY5gTHuozo5bU1%2BbF1VBmeRDRf6tGGSruUWm3XSC%2BgYTTNMqh22gco0oXap88s79RVgOAa8rSM6ZuTj5Tc4v5LCoNyXzLuPaALGMpPpKyIMJjGvhmlu5LuVKynbTkNWDROCygA0xHPpysw29ZwVPG1W9Q5vf504vxZr122WGOSKTia37DP5vaKrZRsnY5EOR515glt2lUdFhbcw%2FMPpvwY6pgFLj3YnTltPB6hAxf5APuXqnnr5FhVi4wbSN2tQR0hYWdi5tWMxl91JA44kl21NmSTzjfBS%2FFeLGZxFw9XJgmRgYsdHU7j6JMiHkMILz9nop7TskgwweQWrnrSnKhN3JobSXYVWoKNSKrPFesO0vZ5d9%2BxfuedoTm0088zRpf%2BCyBINzO%2BOLo1dkktOrbZQwTDQw3DCOeNO7ZFoho%2Fc%2F9HFe8LBxZSC&X-Amz-Signature=756aaa677950149a9c3babf766e7e33623dbe774abc8fac3aae2b4f457b8e376&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCW5K2S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBgWGVvMtQHG%2FL7upPsnKtNCJziDWsp%2Bzz9a4BiKUWcXAiBzT3L28mI2tQFvufDBhyrV1wq19ztPYZbuIoUkp0JbjyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXMUYU7SU8iIIcKxKtwDv7m0qRJ5RVE%2F3v4%2FRoc8PlNJQ5Q%2BO3ygznS3H16IFFto73KsNH5DhigN83DsYSFdnqPnNLD6VBdzeYuWsLYybH7W3IF4SUILz6kiHSdynltkWOqqkKgVmDUNF9Ov2A4RNOQwhQF%2Fpkf4d9ONk5MLGTMZ3uUfODHL6%2BPhZdrUGF6Abp7LNbd2fBLlmIe2ahZaafGy4Y4PsW%2FjYsaZHkKzx270OgT1B%2FO6DOCDXWLRPtK3CRp9XPi7Tn%2F1B9f%2F1FhJJXqWRJW%2F74lr7FiT6Y9kDeJQLXINInZUTkKxVg0YBcgPy7dc%2ByHs9OcC8Iluk2p7%2FQUPS%2B5BDhCOO2PlmkEVgo%2B58lfEijCVsLTKlaSpJ8UgorDzw4Inh0agG5n4ODer3rHTVO6eEl1%2BNJvz%2FrxyVhZZsQHG5HNvGG4gBBEoRspKsRY5gTHuozo5bU1%2BbF1VBmeRDRf6tGGSruUWm3XSC%2BgYTTNMqh22gco0oXap88s79RVgOAa8rSM6ZuTj5Tc4v5LCoNyXzLuPaALGMpPpKyIMJjGvhmlu5LuVKynbTkNWDROCygA0xHPpysw29ZwVPG1W9Q5vf504vxZr122WGOSKTia37DP5vaKrZRsnY5EOR515glt2lUdFhbcw%2FMPpvwY6pgFLj3YnTltPB6hAxf5APuXqnnr5FhVi4wbSN2tQR0hYWdi5tWMxl91JA44kl21NmSTzjfBS%2FFeLGZxFw9XJgmRgYsdHU7j6JMiHkMILz9nop7TskgwweQWrnrSnKhN3JobSXYVWoKNSKrPFesO0vZ5d9%2BxfuedoTm0088zRpf%2BCyBINzO%2BOLo1dkktOrbZQwTDQw3DCOeNO7ZFoho%2Fc%2F9HFe8LBxZSC&X-Amz-Signature=116f656b92dd7cdd1d7f6fcca73022447e60a85f47cab2fcb1c0e27d15b9370e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
