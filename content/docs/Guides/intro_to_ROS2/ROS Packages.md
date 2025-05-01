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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7MJONB7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBj7voDj6BUFkI8u9QqlDinXdfWTgMM%2FerBUmFrpwYQNAiAUMvrr9ntJVkRvjAkjm48aAq2xrCtP9bkIWqoUsapdCiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzwV8ZlpXBQHa71KKKtwDJRnNfEiZJO%2BYM0YuI9YcECCtTxMjdQb1Eh3TfnWnNeeFbb0HOa5bbYEj0lxzlUOLvmQrx3uV5gJCQY4Hrf%2FGOQmsWaC6Z1hFR9H%2BmT2GU42qLVMRSN3qzLo5yw7cyY4Qz9r5egT7feC7y87PrA%2BC9AhKeMF4x0R2bKIj0nBp32P2EtUg8i804leN9sd%2BLU5tAbgmchSMac2ovFY2r9ommOxkl1H4wfr3Ja8W3D1bUY8PZd4SttIWZ%2B65k9xuEvg8rQrLiwNH4B23KRACw%2BxNUPjRMNseb1Z%2Bi%2FfuP5WVx2gi%2ByEC9Fw0mxrsG4CervLD2fH4PDBiEpQa6e%2F8ZQ4%2F0u2rprK5x2OKydLKd0trNv03cJMFkb%2BFTVy1NbJvvaDLTb%2BTxaTwfdl%2FtlUEMjQeNtpNsAc2i8Df6AY5iy9vDe3%2Fu5vvFR7%2BpHTrNS4mJNZVcGJ1hPTov9RV3wC34R3cLOcgmsccMOh1WQsJVmYNmuyxAHXYyR%2FbLqbtrSClwux%2FY5GJFp1117p7%2BjgGH8LWwX1S8YdFkNc8aHJWt40X0ziQi3GEHOFYmfqHib%2BtDFLsOjP4wtixTIaGyIm2A9mZh5f6xpwOl1M5fjSV8RWjM%2B257RSfyInDw%2FGNFsww4avPwAY6pgFCfQHNEX6UhwoVSnkFrR3yazpuKCoE99GOb1apTdP6HjQ9ghcMEOIMY1ZRdDqpkAj1T2O3AyNieJNxptiZq1m66Ndf%2BtvhSpDJbXTctRsKeiWn6JM0Xu15fZQf68vgaBlgYx0Hbw0nPYnu9OhLCJ6MB7kueFXMrlvXCjrtjY5NWQ9HBde65MWEqMRSBHido0280dD3J5%2BwZ18A5v8pYY%2BAkCe8M2aI&X-Amz-Signature=465928c44dec01a7fa18f70469025935ec9a4510c3678e3898a4a11b10150020&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7MJONB7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBj7voDj6BUFkI8u9QqlDinXdfWTgMM%2FerBUmFrpwYQNAiAUMvrr9ntJVkRvjAkjm48aAq2xrCtP9bkIWqoUsapdCiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzwV8ZlpXBQHa71KKKtwDJRnNfEiZJO%2BYM0YuI9YcECCtTxMjdQb1Eh3TfnWnNeeFbb0HOa5bbYEj0lxzlUOLvmQrx3uV5gJCQY4Hrf%2FGOQmsWaC6Z1hFR9H%2BmT2GU42qLVMRSN3qzLo5yw7cyY4Qz9r5egT7feC7y87PrA%2BC9AhKeMF4x0R2bKIj0nBp32P2EtUg8i804leN9sd%2BLU5tAbgmchSMac2ovFY2r9ommOxkl1H4wfr3Ja8W3D1bUY8PZd4SttIWZ%2B65k9xuEvg8rQrLiwNH4B23KRACw%2BxNUPjRMNseb1Z%2Bi%2FfuP5WVx2gi%2ByEC9Fw0mxrsG4CervLD2fH4PDBiEpQa6e%2F8ZQ4%2F0u2rprK5x2OKydLKd0trNv03cJMFkb%2BFTVy1NbJvvaDLTb%2BTxaTwfdl%2FtlUEMjQeNtpNsAc2i8Df6AY5iy9vDe3%2Fu5vvFR7%2BpHTrNS4mJNZVcGJ1hPTov9RV3wC34R3cLOcgmsccMOh1WQsJVmYNmuyxAHXYyR%2FbLqbtrSClwux%2FY5GJFp1117p7%2BjgGH8LWwX1S8YdFkNc8aHJWt40X0ziQi3GEHOFYmfqHib%2BtDFLsOjP4wtixTIaGyIm2A9mZh5f6xpwOl1M5fjSV8RWjM%2B257RSfyInDw%2FGNFsww4avPwAY6pgFCfQHNEX6UhwoVSnkFrR3yazpuKCoE99GOb1apTdP6HjQ9ghcMEOIMY1ZRdDqpkAj1T2O3AyNieJNxptiZq1m66Ndf%2BtvhSpDJbXTctRsKeiWn6JM0Xu15fZQf68vgaBlgYx0Hbw0nPYnu9OhLCJ6MB7kueFXMrlvXCjrtjY5NWQ9HBde65MWEqMRSBHido0280dD3J5%2BwZ18A5v8pYY%2BAkCe8M2aI&X-Amz-Signature=8e4822858d0198942016c3532a9c0ba00d17f2abc892db2dc59bedb835fa61bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7MJONB7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBj7voDj6BUFkI8u9QqlDinXdfWTgMM%2FerBUmFrpwYQNAiAUMvrr9ntJVkRvjAkjm48aAq2xrCtP9bkIWqoUsapdCiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzwV8ZlpXBQHa71KKKtwDJRnNfEiZJO%2BYM0YuI9YcECCtTxMjdQb1Eh3TfnWnNeeFbb0HOa5bbYEj0lxzlUOLvmQrx3uV5gJCQY4Hrf%2FGOQmsWaC6Z1hFR9H%2BmT2GU42qLVMRSN3qzLo5yw7cyY4Qz9r5egT7feC7y87PrA%2BC9AhKeMF4x0R2bKIj0nBp32P2EtUg8i804leN9sd%2BLU5tAbgmchSMac2ovFY2r9ommOxkl1H4wfr3Ja8W3D1bUY8PZd4SttIWZ%2B65k9xuEvg8rQrLiwNH4B23KRACw%2BxNUPjRMNseb1Z%2Bi%2FfuP5WVx2gi%2ByEC9Fw0mxrsG4CervLD2fH4PDBiEpQa6e%2F8ZQ4%2F0u2rprK5x2OKydLKd0trNv03cJMFkb%2BFTVy1NbJvvaDLTb%2BTxaTwfdl%2FtlUEMjQeNtpNsAc2i8Df6AY5iy9vDe3%2Fu5vvFR7%2BpHTrNS4mJNZVcGJ1hPTov9RV3wC34R3cLOcgmsccMOh1WQsJVmYNmuyxAHXYyR%2FbLqbtrSClwux%2FY5GJFp1117p7%2BjgGH8LWwX1S8YdFkNc8aHJWt40X0ziQi3GEHOFYmfqHib%2BtDFLsOjP4wtixTIaGyIm2A9mZh5f6xpwOl1M5fjSV8RWjM%2B257RSfyInDw%2FGNFsww4avPwAY6pgFCfQHNEX6UhwoVSnkFrR3yazpuKCoE99GOb1apTdP6HjQ9ghcMEOIMY1ZRdDqpkAj1T2O3AyNieJNxptiZq1m66Ndf%2BtvhSpDJbXTctRsKeiWn6JM0Xu15fZQf68vgaBlgYx0Hbw0nPYnu9OhLCJ6MB7kueFXMrlvXCjrtjY5NWQ9HBde65MWEqMRSBHido0280dD3J5%2BwZ18A5v8pYY%2BAkCe8M2aI&X-Amz-Signature=3da5f3c778bc70b8b1c3141c944b7fbe6ce615574661230bd8687cacd67878bf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7MJONB7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBj7voDj6BUFkI8u9QqlDinXdfWTgMM%2FerBUmFrpwYQNAiAUMvrr9ntJVkRvjAkjm48aAq2xrCtP9bkIWqoUsapdCiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzwV8ZlpXBQHa71KKKtwDJRnNfEiZJO%2BYM0YuI9YcECCtTxMjdQb1Eh3TfnWnNeeFbb0HOa5bbYEj0lxzlUOLvmQrx3uV5gJCQY4Hrf%2FGOQmsWaC6Z1hFR9H%2BmT2GU42qLVMRSN3qzLo5yw7cyY4Qz9r5egT7feC7y87PrA%2BC9AhKeMF4x0R2bKIj0nBp32P2EtUg8i804leN9sd%2BLU5tAbgmchSMac2ovFY2r9ommOxkl1H4wfr3Ja8W3D1bUY8PZd4SttIWZ%2B65k9xuEvg8rQrLiwNH4B23KRACw%2BxNUPjRMNseb1Z%2Bi%2FfuP5WVx2gi%2ByEC9Fw0mxrsG4CervLD2fH4PDBiEpQa6e%2F8ZQ4%2F0u2rprK5x2OKydLKd0trNv03cJMFkb%2BFTVy1NbJvvaDLTb%2BTxaTwfdl%2FtlUEMjQeNtpNsAc2i8Df6AY5iy9vDe3%2Fu5vvFR7%2BpHTrNS4mJNZVcGJ1hPTov9RV3wC34R3cLOcgmsccMOh1WQsJVmYNmuyxAHXYyR%2FbLqbtrSClwux%2FY5GJFp1117p7%2BjgGH8LWwX1S8YdFkNc8aHJWt40X0ziQi3GEHOFYmfqHib%2BtDFLsOjP4wtixTIaGyIm2A9mZh5f6xpwOl1M5fjSV8RWjM%2B257RSfyInDw%2FGNFsww4avPwAY6pgFCfQHNEX6UhwoVSnkFrR3yazpuKCoE99GOb1apTdP6HjQ9ghcMEOIMY1ZRdDqpkAj1T2O3AyNieJNxptiZq1m66Ndf%2BtvhSpDJbXTctRsKeiWn6JM0Xu15fZQf68vgaBlgYx0Hbw0nPYnu9OhLCJ6MB7kueFXMrlvXCjrtjY5NWQ9HBde65MWEqMRSBHido0280dD3J5%2BwZ18A5v8pYY%2BAkCe8M2aI&X-Amz-Signature=2a404ac4271ed54eef6566cd68699f14d3d4bffdee755b22a2fbe2f7d8197a85&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7MJONB7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBj7voDj6BUFkI8u9QqlDinXdfWTgMM%2FerBUmFrpwYQNAiAUMvrr9ntJVkRvjAkjm48aAq2xrCtP9bkIWqoUsapdCiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzwV8ZlpXBQHa71KKKtwDJRnNfEiZJO%2BYM0YuI9YcECCtTxMjdQb1Eh3TfnWnNeeFbb0HOa5bbYEj0lxzlUOLvmQrx3uV5gJCQY4Hrf%2FGOQmsWaC6Z1hFR9H%2BmT2GU42qLVMRSN3qzLo5yw7cyY4Qz9r5egT7feC7y87PrA%2BC9AhKeMF4x0R2bKIj0nBp32P2EtUg8i804leN9sd%2BLU5tAbgmchSMac2ovFY2r9ommOxkl1H4wfr3Ja8W3D1bUY8PZd4SttIWZ%2B65k9xuEvg8rQrLiwNH4B23KRACw%2BxNUPjRMNseb1Z%2Bi%2FfuP5WVx2gi%2ByEC9Fw0mxrsG4CervLD2fH4PDBiEpQa6e%2F8ZQ4%2F0u2rprK5x2OKydLKd0trNv03cJMFkb%2BFTVy1NbJvvaDLTb%2BTxaTwfdl%2FtlUEMjQeNtpNsAc2i8Df6AY5iy9vDe3%2Fu5vvFR7%2BpHTrNS4mJNZVcGJ1hPTov9RV3wC34R3cLOcgmsccMOh1WQsJVmYNmuyxAHXYyR%2FbLqbtrSClwux%2FY5GJFp1117p7%2BjgGH8LWwX1S8YdFkNc8aHJWt40X0ziQi3GEHOFYmfqHib%2BtDFLsOjP4wtixTIaGyIm2A9mZh5f6xpwOl1M5fjSV8RWjM%2B257RSfyInDw%2FGNFsww4avPwAY6pgFCfQHNEX6UhwoVSnkFrR3yazpuKCoE99GOb1apTdP6HjQ9ghcMEOIMY1ZRdDqpkAj1T2O3AyNieJNxptiZq1m66Ndf%2BtvhSpDJbXTctRsKeiWn6JM0Xu15fZQf68vgaBlgYx0Hbw0nPYnu9OhLCJ6MB7kueFXMrlvXCjrtjY5NWQ9HBde65MWEqMRSBHido0280dD3J5%2BwZ18A5v8pYY%2BAkCe8M2aI&X-Amz-Signature=b446cda2044f932dd11d65caea9c46321aca1605afd598071e15d0f5d6d96f34&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7MJONB7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBj7voDj6BUFkI8u9QqlDinXdfWTgMM%2FerBUmFrpwYQNAiAUMvrr9ntJVkRvjAkjm48aAq2xrCtP9bkIWqoUsapdCiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzwV8ZlpXBQHa71KKKtwDJRnNfEiZJO%2BYM0YuI9YcECCtTxMjdQb1Eh3TfnWnNeeFbb0HOa5bbYEj0lxzlUOLvmQrx3uV5gJCQY4Hrf%2FGOQmsWaC6Z1hFR9H%2BmT2GU42qLVMRSN3qzLo5yw7cyY4Qz9r5egT7feC7y87PrA%2BC9AhKeMF4x0R2bKIj0nBp32P2EtUg8i804leN9sd%2BLU5tAbgmchSMac2ovFY2r9ommOxkl1H4wfr3Ja8W3D1bUY8PZd4SttIWZ%2B65k9xuEvg8rQrLiwNH4B23KRACw%2BxNUPjRMNseb1Z%2Bi%2FfuP5WVx2gi%2ByEC9Fw0mxrsG4CervLD2fH4PDBiEpQa6e%2F8ZQ4%2F0u2rprK5x2OKydLKd0trNv03cJMFkb%2BFTVy1NbJvvaDLTb%2BTxaTwfdl%2FtlUEMjQeNtpNsAc2i8Df6AY5iy9vDe3%2Fu5vvFR7%2BpHTrNS4mJNZVcGJ1hPTov9RV3wC34R3cLOcgmsccMOh1WQsJVmYNmuyxAHXYyR%2FbLqbtrSClwux%2FY5GJFp1117p7%2BjgGH8LWwX1S8YdFkNc8aHJWt40X0ziQi3GEHOFYmfqHib%2BtDFLsOjP4wtixTIaGyIm2A9mZh5f6xpwOl1M5fjSV8RWjM%2B257RSfyInDw%2FGNFsww4avPwAY6pgFCfQHNEX6UhwoVSnkFrR3yazpuKCoE99GOb1apTdP6HjQ9ghcMEOIMY1ZRdDqpkAj1T2O3AyNieJNxptiZq1m66Ndf%2BtvhSpDJbXTctRsKeiWn6JM0Xu15fZQf68vgaBlgYx0Hbw0nPYnu9OhLCJ6MB7kueFXMrlvXCjrtjY5NWQ9HBde65MWEqMRSBHido0280dD3J5%2BwZ18A5v8pYY%2BAkCe8M2aI&X-Amz-Signature=045b5b7ca0fe9410b51649762539ed766aee3ab39b0b4eb9165c7d00e624057a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7MJONB7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBj7voDj6BUFkI8u9QqlDinXdfWTgMM%2FerBUmFrpwYQNAiAUMvrr9ntJVkRvjAkjm48aAq2xrCtP9bkIWqoUsapdCiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzwV8ZlpXBQHa71KKKtwDJRnNfEiZJO%2BYM0YuI9YcECCtTxMjdQb1Eh3TfnWnNeeFbb0HOa5bbYEj0lxzlUOLvmQrx3uV5gJCQY4Hrf%2FGOQmsWaC6Z1hFR9H%2BmT2GU42qLVMRSN3qzLo5yw7cyY4Qz9r5egT7feC7y87PrA%2BC9AhKeMF4x0R2bKIj0nBp32P2EtUg8i804leN9sd%2BLU5tAbgmchSMac2ovFY2r9ommOxkl1H4wfr3Ja8W3D1bUY8PZd4SttIWZ%2B65k9xuEvg8rQrLiwNH4B23KRACw%2BxNUPjRMNseb1Z%2Bi%2FfuP5WVx2gi%2ByEC9Fw0mxrsG4CervLD2fH4PDBiEpQa6e%2F8ZQ4%2F0u2rprK5x2OKydLKd0trNv03cJMFkb%2BFTVy1NbJvvaDLTb%2BTxaTwfdl%2FtlUEMjQeNtpNsAc2i8Df6AY5iy9vDe3%2Fu5vvFR7%2BpHTrNS4mJNZVcGJ1hPTov9RV3wC34R3cLOcgmsccMOh1WQsJVmYNmuyxAHXYyR%2FbLqbtrSClwux%2FY5GJFp1117p7%2BjgGH8LWwX1S8YdFkNc8aHJWt40X0ziQi3GEHOFYmfqHib%2BtDFLsOjP4wtixTIaGyIm2A9mZh5f6xpwOl1M5fjSV8RWjM%2B257RSfyInDw%2FGNFsww4avPwAY6pgFCfQHNEX6UhwoVSnkFrR3yazpuKCoE99GOb1apTdP6HjQ9ghcMEOIMY1ZRdDqpkAj1T2O3AyNieJNxptiZq1m66Ndf%2BtvhSpDJbXTctRsKeiWn6JM0Xu15fZQf68vgaBlgYx0Hbw0nPYnu9OhLCJ6MB7kueFXMrlvXCjrtjY5NWQ9HBde65MWEqMRSBHido0280dD3J5%2BwZ18A5v8pYY%2BAkCe8M2aI&X-Amz-Signature=bd91f3c6f0ddef6ad7b0492667fdf9d91b52e76e43d1c9297b2bc513f7ff792c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
