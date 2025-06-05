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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LUMQXH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAThPBT8ks0B3Xcoa5xBcWfA%2B%2Fs%2F6%2FmCBaRLJmxSgPyqAiAxXMC27DsKH8PhSIkmb8q6XUAA1652lSdSXtReZ5vCJyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMIlqdalGikqLVZhloKtwDc5z8RGRMvqhJ%2BHnbFBlH5SZfqS7KRRE%2B8fzPGLFWrqESY5mY28LCLMKMmUZKpY5wtmraAjLJq48tUCzDm4kzhLu8Dl%2B%2FzHDdmFLmgY2RLTRcneygg2iKxpp%2Fix%2BkrI2ZWLEhrAkaf5fG7Yhil13komnhnQTGYvrL0BQNYvhadhGOpe3xN71%2FMP6sMkU%2F8trXJ6fdkaR1FKSfkNSBZ6zuz71Paelz4h9PocKF1M2uhQC0OFt99focY2CB7gipM%2Fv%2F%2FzJAPgdLqaAe%2FrVSeYWCDX9xc6DAu5QDh510fLzsczzoBHfIwsgjefVxjIzRAqQ9ChIdtryOtglEgTw7wqjfxP%2FM%2F2%2Fc%2BkDrPNz3f6oZh8caWDgJkD3QglpBW9D7PNjp2p6sB0WltotnyZno2OMdbMrqbqKRB9gD53JgmUHh%2FRVvy328Za66vHQNMdBSfmZhYbPZsi9IBSwPn67U1NyqfKyj3b%2Ffb1%2F2RCSZ%2BSNW9P0gGiIU%2Fmrn3Oq%2F3oGEPqY1l%2F7Dc5VN1xdHCxtwjKHPBy%2FxRP9riPXmCY%2Bir9pupmJCa%2FCUVuMBj7u9EA1cF5HeMKmw2URTLNnwbdZS8%2B0%2BUnfLucdWqGIvjI0jV32dnvP1LhrSKhWWMySyo8cwwcSGwgY6pgFOz0u5oBj8lILhCizbun7VAZzk8MMYpbmtTtUhQkFfi9R3xaBGDgLSbZpiANVlHRjUh%2BxmZ2Z4OAW%2BwVl%2BCUsYcU%2BtZncWyA75k2kBXALdg%2FTFizXfK9elHEvzVw%2Bs%2BRP6phCnMx0fLJOpb8TcB0SOWPCuhjco7Yq7Lrukx874xN2C%2BL4L7BCKeEALO0837x2Bd1HbSTHqpPnb2D%2BBzAdod5WbUHDQ&X-Amz-Signature=46fa4b516ced0b509a855e089720d6c2f1c8fa2cf57166a6e743235f91056913&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LUMQXH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAThPBT8ks0B3Xcoa5xBcWfA%2B%2Fs%2F6%2FmCBaRLJmxSgPyqAiAxXMC27DsKH8PhSIkmb8q6XUAA1652lSdSXtReZ5vCJyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMIlqdalGikqLVZhloKtwDc5z8RGRMvqhJ%2BHnbFBlH5SZfqS7KRRE%2B8fzPGLFWrqESY5mY28LCLMKMmUZKpY5wtmraAjLJq48tUCzDm4kzhLu8Dl%2B%2FzHDdmFLmgY2RLTRcneygg2iKxpp%2Fix%2BkrI2ZWLEhrAkaf5fG7Yhil13komnhnQTGYvrL0BQNYvhadhGOpe3xN71%2FMP6sMkU%2F8trXJ6fdkaR1FKSfkNSBZ6zuz71Paelz4h9PocKF1M2uhQC0OFt99focY2CB7gipM%2Fv%2F%2FzJAPgdLqaAe%2FrVSeYWCDX9xc6DAu5QDh510fLzsczzoBHfIwsgjefVxjIzRAqQ9ChIdtryOtglEgTw7wqjfxP%2FM%2F2%2Fc%2BkDrPNz3f6oZh8caWDgJkD3QglpBW9D7PNjp2p6sB0WltotnyZno2OMdbMrqbqKRB9gD53JgmUHh%2FRVvy328Za66vHQNMdBSfmZhYbPZsi9IBSwPn67U1NyqfKyj3b%2Ffb1%2F2RCSZ%2BSNW9P0gGiIU%2Fmrn3Oq%2F3oGEPqY1l%2F7Dc5VN1xdHCxtwjKHPBy%2FxRP9riPXmCY%2Bir9pupmJCa%2FCUVuMBj7u9EA1cF5HeMKmw2URTLNnwbdZS8%2B0%2BUnfLucdWqGIvjI0jV32dnvP1LhrSKhWWMySyo8cwwcSGwgY6pgFOz0u5oBj8lILhCizbun7VAZzk8MMYpbmtTtUhQkFfi9R3xaBGDgLSbZpiANVlHRjUh%2BxmZ2Z4OAW%2BwVl%2BCUsYcU%2BtZncWyA75k2kBXALdg%2FTFizXfK9elHEvzVw%2Bs%2BRP6phCnMx0fLJOpb8TcB0SOWPCuhjco7Yq7Lrukx874xN2C%2BL4L7BCKeEALO0837x2Bd1HbSTHqpPnb2D%2BBzAdod5WbUHDQ&X-Amz-Signature=656d7059478cd1a4474e9ebd45b40134a32f9856e3e33e7075126f3bc873578a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LUMQXH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAThPBT8ks0B3Xcoa5xBcWfA%2B%2Fs%2F6%2FmCBaRLJmxSgPyqAiAxXMC27DsKH8PhSIkmb8q6XUAA1652lSdSXtReZ5vCJyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMIlqdalGikqLVZhloKtwDc5z8RGRMvqhJ%2BHnbFBlH5SZfqS7KRRE%2B8fzPGLFWrqESY5mY28LCLMKMmUZKpY5wtmraAjLJq48tUCzDm4kzhLu8Dl%2B%2FzHDdmFLmgY2RLTRcneygg2iKxpp%2Fix%2BkrI2ZWLEhrAkaf5fG7Yhil13komnhnQTGYvrL0BQNYvhadhGOpe3xN71%2FMP6sMkU%2F8trXJ6fdkaR1FKSfkNSBZ6zuz71Paelz4h9PocKF1M2uhQC0OFt99focY2CB7gipM%2Fv%2F%2FzJAPgdLqaAe%2FrVSeYWCDX9xc6DAu5QDh510fLzsczzoBHfIwsgjefVxjIzRAqQ9ChIdtryOtglEgTw7wqjfxP%2FM%2F2%2Fc%2BkDrPNz3f6oZh8caWDgJkD3QglpBW9D7PNjp2p6sB0WltotnyZno2OMdbMrqbqKRB9gD53JgmUHh%2FRVvy328Za66vHQNMdBSfmZhYbPZsi9IBSwPn67U1NyqfKyj3b%2Ffb1%2F2RCSZ%2BSNW9P0gGiIU%2Fmrn3Oq%2F3oGEPqY1l%2F7Dc5VN1xdHCxtwjKHPBy%2FxRP9riPXmCY%2Bir9pupmJCa%2FCUVuMBj7u9EA1cF5HeMKmw2URTLNnwbdZS8%2B0%2BUnfLucdWqGIvjI0jV32dnvP1LhrSKhWWMySyo8cwwcSGwgY6pgFOz0u5oBj8lILhCizbun7VAZzk8MMYpbmtTtUhQkFfi9R3xaBGDgLSbZpiANVlHRjUh%2BxmZ2Z4OAW%2BwVl%2BCUsYcU%2BtZncWyA75k2kBXALdg%2FTFizXfK9elHEvzVw%2Bs%2BRP6phCnMx0fLJOpb8TcB0SOWPCuhjco7Yq7Lrukx874xN2C%2BL4L7BCKeEALO0837x2Bd1HbSTHqpPnb2D%2BBzAdod5WbUHDQ&X-Amz-Signature=5ef12368d76034ce8b484817a1e413f16069a1528c2e0cb90d879cd6fe9755ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LUMQXH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAThPBT8ks0B3Xcoa5xBcWfA%2B%2Fs%2F6%2FmCBaRLJmxSgPyqAiAxXMC27DsKH8PhSIkmb8q6XUAA1652lSdSXtReZ5vCJyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMIlqdalGikqLVZhloKtwDc5z8RGRMvqhJ%2BHnbFBlH5SZfqS7KRRE%2B8fzPGLFWrqESY5mY28LCLMKMmUZKpY5wtmraAjLJq48tUCzDm4kzhLu8Dl%2B%2FzHDdmFLmgY2RLTRcneygg2iKxpp%2Fix%2BkrI2ZWLEhrAkaf5fG7Yhil13komnhnQTGYvrL0BQNYvhadhGOpe3xN71%2FMP6sMkU%2F8trXJ6fdkaR1FKSfkNSBZ6zuz71Paelz4h9PocKF1M2uhQC0OFt99focY2CB7gipM%2Fv%2F%2FzJAPgdLqaAe%2FrVSeYWCDX9xc6DAu5QDh510fLzsczzoBHfIwsgjefVxjIzRAqQ9ChIdtryOtglEgTw7wqjfxP%2FM%2F2%2Fc%2BkDrPNz3f6oZh8caWDgJkD3QglpBW9D7PNjp2p6sB0WltotnyZno2OMdbMrqbqKRB9gD53JgmUHh%2FRVvy328Za66vHQNMdBSfmZhYbPZsi9IBSwPn67U1NyqfKyj3b%2Ffb1%2F2RCSZ%2BSNW9P0gGiIU%2Fmrn3Oq%2F3oGEPqY1l%2F7Dc5VN1xdHCxtwjKHPBy%2FxRP9riPXmCY%2Bir9pupmJCa%2FCUVuMBj7u9EA1cF5HeMKmw2URTLNnwbdZS8%2B0%2BUnfLucdWqGIvjI0jV32dnvP1LhrSKhWWMySyo8cwwcSGwgY6pgFOz0u5oBj8lILhCizbun7VAZzk8MMYpbmtTtUhQkFfi9R3xaBGDgLSbZpiANVlHRjUh%2BxmZ2Z4OAW%2BwVl%2BCUsYcU%2BtZncWyA75k2kBXALdg%2FTFizXfK9elHEvzVw%2Bs%2BRP6phCnMx0fLJOpb8TcB0SOWPCuhjco7Yq7Lrukx874xN2C%2BL4L7BCKeEALO0837x2Bd1HbSTHqpPnb2D%2BBzAdod5WbUHDQ&X-Amz-Signature=ab95febce5227921945d059e5000be55d40055312500a9f63056704bc74d8d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LUMQXH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAThPBT8ks0B3Xcoa5xBcWfA%2B%2Fs%2F6%2FmCBaRLJmxSgPyqAiAxXMC27DsKH8PhSIkmb8q6XUAA1652lSdSXtReZ5vCJyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMIlqdalGikqLVZhloKtwDc5z8RGRMvqhJ%2BHnbFBlH5SZfqS7KRRE%2B8fzPGLFWrqESY5mY28LCLMKMmUZKpY5wtmraAjLJq48tUCzDm4kzhLu8Dl%2B%2FzHDdmFLmgY2RLTRcneygg2iKxpp%2Fix%2BkrI2ZWLEhrAkaf5fG7Yhil13komnhnQTGYvrL0BQNYvhadhGOpe3xN71%2FMP6sMkU%2F8trXJ6fdkaR1FKSfkNSBZ6zuz71Paelz4h9PocKF1M2uhQC0OFt99focY2CB7gipM%2Fv%2F%2FzJAPgdLqaAe%2FrVSeYWCDX9xc6DAu5QDh510fLzsczzoBHfIwsgjefVxjIzRAqQ9ChIdtryOtglEgTw7wqjfxP%2FM%2F2%2Fc%2BkDrPNz3f6oZh8caWDgJkD3QglpBW9D7PNjp2p6sB0WltotnyZno2OMdbMrqbqKRB9gD53JgmUHh%2FRVvy328Za66vHQNMdBSfmZhYbPZsi9IBSwPn67U1NyqfKyj3b%2Ffb1%2F2RCSZ%2BSNW9P0gGiIU%2Fmrn3Oq%2F3oGEPqY1l%2F7Dc5VN1xdHCxtwjKHPBy%2FxRP9riPXmCY%2Bir9pupmJCa%2FCUVuMBj7u9EA1cF5HeMKmw2URTLNnwbdZS8%2B0%2BUnfLucdWqGIvjI0jV32dnvP1LhrSKhWWMySyo8cwwcSGwgY6pgFOz0u5oBj8lILhCizbun7VAZzk8MMYpbmtTtUhQkFfi9R3xaBGDgLSbZpiANVlHRjUh%2BxmZ2Z4OAW%2BwVl%2BCUsYcU%2BtZncWyA75k2kBXALdg%2FTFizXfK9elHEvzVw%2Bs%2BRP6phCnMx0fLJOpb8TcB0SOWPCuhjco7Yq7Lrukx874xN2C%2BL4L7BCKeEALO0837x2Bd1HbSTHqpPnb2D%2BBzAdod5WbUHDQ&X-Amz-Signature=5104263ae25314e3b03a95485222acd1ac17b1a4b72f24092d517a11c6e65d21&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LUMQXH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAThPBT8ks0B3Xcoa5xBcWfA%2B%2Fs%2F6%2FmCBaRLJmxSgPyqAiAxXMC27DsKH8PhSIkmb8q6XUAA1652lSdSXtReZ5vCJyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMIlqdalGikqLVZhloKtwDc5z8RGRMvqhJ%2BHnbFBlH5SZfqS7KRRE%2B8fzPGLFWrqESY5mY28LCLMKMmUZKpY5wtmraAjLJq48tUCzDm4kzhLu8Dl%2B%2FzHDdmFLmgY2RLTRcneygg2iKxpp%2Fix%2BkrI2ZWLEhrAkaf5fG7Yhil13komnhnQTGYvrL0BQNYvhadhGOpe3xN71%2FMP6sMkU%2F8trXJ6fdkaR1FKSfkNSBZ6zuz71Paelz4h9PocKF1M2uhQC0OFt99focY2CB7gipM%2Fv%2F%2FzJAPgdLqaAe%2FrVSeYWCDX9xc6DAu5QDh510fLzsczzoBHfIwsgjefVxjIzRAqQ9ChIdtryOtglEgTw7wqjfxP%2FM%2F2%2Fc%2BkDrPNz3f6oZh8caWDgJkD3QglpBW9D7PNjp2p6sB0WltotnyZno2OMdbMrqbqKRB9gD53JgmUHh%2FRVvy328Za66vHQNMdBSfmZhYbPZsi9IBSwPn67U1NyqfKyj3b%2Ffb1%2F2RCSZ%2BSNW9P0gGiIU%2Fmrn3Oq%2F3oGEPqY1l%2F7Dc5VN1xdHCxtwjKHPBy%2FxRP9riPXmCY%2Bir9pupmJCa%2FCUVuMBj7u9EA1cF5HeMKmw2URTLNnwbdZS8%2B0%2BUnfLucdWqGIvjI0jV32dnvP1LhrSKhWWMySyo8cwwcSGwgY6pgFOz0u5oBj8lILhCizbun7VAZzk8MMYpbmtTtUhQkFfi9R3xaBGDgLSbZpiANVlHRjUh%2BxmZ2Z4OAW%2BwVl%2BCUsYcU%2BtZncWyA75k2kBXALdg%2FTFizXfK9elHEvzVw%2Bs%2BRP6phCnMx0fLJOpb8TcB0SOWPCuhjco7Yq7Lrukx874xN2C%2BL4L7BCKeEALO0837x2Bd1HbSTHqpPnb2D%2BBzAdod5WbUHDQ&X-Amz-Signature=96abbcb782f85136e024625ec4672d77d8022204c6e4a8f227dd5861a7e28292&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LUMQXH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAThPBT8ks0B3Xcoa5xBcWfA%2B%2Fs%2F6%2FmCBaRLJmxSgPyqAiAxXMC27DsKH8PhSIkmb8q6XUAA1652lSdSXtReZ5vCJyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMIlqdalGikqLVZhloKtwDc5z8RGRMvqhJ%2BHnbFBlH5SZfqS7KRRE%2B8fzPGLFWrqESY5mY28LCLMKMmUZKpY5wtmraAjLJq48tUCzDm4kzhLu8Dl%2B%2FzHDdmFLmgY2RLTRcneygg2iKxpp%2Fix%2BkrI2ZWLEhrAkaf5fG7Yhil13komnhnQTGYvrL0BQNYvhadhGOpe3xN71%2FMP6sMkU%2F8trXJ6fdkaR1FKSfkNSBZ6zuz71Paelz4h9PocKF1M2uhQC0OFt99focY2CB7gipM%2Fv%2F%2FzJAPgdLqaAe%2FrVSeYWCDX9xc6DAu5QDh510fLzsczzoBHfIwsgjefVxjIzRAqQ9ChIdtryOtglEgTw7wqjfxP%2FM%2F2%2Fc%2BkDrPNz3f6oZh8caWDgJkD3QglpBW9D7PNjp2p6sB0WltotnyZno2OMdbMrqbqKRB9gD53JgmUHh%2FRVvy328Za66vHQNMdBSfmZhYbPZsi9IBSwPn67U1NyqfKyj3b%2Ffb1%2F2RCSZ%2BSNW9P0gGiIU%2Fmrn3Oq%2F3oGEPqY1l%2F7Dc5VN1xdHCxtwjKHPBy%2FxRP9riPXmCY%2Bir9pupmJCa%2FCUVuMBj7u9EA1cF5HeMKmw2URTLNnwbdZS8%2B0%2BUnfLucdWqGIvjI0jV32dnvP1LhrSKhWWMySyo8cwwcSGwgY6pgFOz0u5oBj8lILhCizbun7VAZzk8MMYpbmtTtUhQkFfi9R3xaBGDgLSbZpiANVlHRjUh%2BxmZ2Z4OAW%2BwVl%2BCUsYcU%2BtZncWyA75k2kBXALdg%2FTFizXfK9elHEvzVw%2Bs%2BRP6phCnMx0fLJOpb8TcB0SOWPCuhjco7Yq7Lrukx874xN2C%2BL4L7BCKeEALO0837x2Bd1HbSTHqpPnb2D%2BBzAdod5WbUHDQ&X-Amz-Signature=b9daf6284a093844d710c84d3ed0d350cdaab3ef57b66507c5551300f10957ff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
