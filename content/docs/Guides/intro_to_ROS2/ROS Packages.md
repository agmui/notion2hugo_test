---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633IU3HJY%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhr3GuZxDZ4x4cPRIvuIzsAfdLJHvEpaiEEDYtE%2FrdlAiAr3h1C2kshtWuK63fWsd1ZF%2BVf%2FPRSrSfGa69rGPkz1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Oc7jBETKbfGaM50KtwDR6cq%2Bw6UdgefLEibvXzHdpw8pbLIDqgTqyFReYtxJoYfZLVfrd8QrZ9kEBRNqtDMUVk2852XPvJaCVysKrkpMlXO3m4TUXL2qTQw5tLQuLRFpe3qeDx8sa7wbrLt2akk1tawA5NBhDj9ikFzVXGDN2gUJhRZ8t27dwH3kFXm9dVT9HMJxF8USLsFTcrGCAvZRF9%2FJl%2Fak2OCRHcBZhP2ByZVvgQSDUK4oo3Jk1KAIVY1zOXLVNbjmDknqfrsCehlYgVbEaDrSihnwjJACwIFY7jb3esmVIilgdFi8%2FCtHVChIm4ybK6EIcitpRa2q8PmwDf2jricpJ43VUlm77WbLYMlfiZluqWpIP4ivrl%2BFafMrj5zBZDdLKE5XH0d23w2C66%2Fjc3sFV6uONTrzxTMtRFRkqfYNUkmXAwoxEYsHDo%2BRLlY9ylhU297eR1Qdh36wJVFewGxjx2Pc58CP9bnYOGHswVODc5RIgdkqH%2Bv4kZq6wKBiGtfJThjQ%2F8txPtWINAB2%2BHNdmOVofadred0yORy558LhmFEAkiSw9F95sqCuh53vOZewZsoZRqIUCfqQOi%2F3uRCQO24ILbhnDCDV6Qd4Rk0kEE%2Fk43FdZ0oGxpnVC%2BpQmOpU6lQoGsw5LmwzwY6pgH9qeMrBel42NJOxSiLivX3szkgh5NgsgFkPqOw4J0C1FspCCz5%2Fd0iE5IH1BLKaWIMzOQQ9VD5J4hPzL%2BnNdl1ouVUqZyZzg3fNbEpgHXJcye118Gq1zLVLU%2BP8d59PCR%2FYwg8%2By40qAtBim771V3fAnNq9YpKN1aWcoQGljYkp3F4%2FiHLliKVVR3hjF8Ygi8k4T7kr800CbxmGxIkqhDt0comXXzb&X-Amz-Signature=4e1f94a0569f2ab9df4f3e95e178557e7a9f1b47e57d891bfd9848628f8ad377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633IU3HJY%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhr3GuZxDZ4x4cPRIvuIzsAfdLJHvEpaiEEDYtE%2FrdlAiAr3h1C2kshtWuK63fWsd1ZF%2BVf%2FPRSrSfGa69rGPkz1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Oc7jBETKbfGaM50KtwDR6cq%2Bw6UdgefLEibvXzHdpw8pbLIDqgTqyFReYtxJoYfZLVfrd8QrZ9kEBRNqtDMUVk2852XPvJaCVysKrkpMlXO3m4TUXL2qTQw5tLQuLRFpe3qeDx8sa7wbrLt2akk1tawA5NBhDj9ikFzVXGDN2gUJhRZ8t27dwH3kFXm9dVT9HMJxF8USLsFTcrGCAvZRF9%2FJl%2Fak2OCRHcBZhP2ByZVvgQSDUK4oo3Jk1KAIVY1zOXLVNbjmDknqfrsCehlYgVbEaDrSihnwjJACwIFY7jb3esmVIilgdFi8%2FCtHVChIm4ybK6EIcitpRa2q8PmwDf2jricpJ43VUlm77WbLYMlfiZluqWpIP4ivrl%2BFafMrj5zBZDdLKE5XH0d23w2C66%2Fjc3sFV6uONTrzxTMtRFRkqfYNUkmXAwoxEYsHDo%2BRLlY9ylhU297eR1Qdh36wJVFewGxjx2Pc58CP9bnYOGHswVODc5RIgdkqH%2Bv4kZq6wKBiGtfJThjQ%2F8txPtWINAB2%2BHNdmOVofadred0yORy558LhmFEAkiSw9F95sqCuh53vOZewZsoZRqIUCfqQOi%2F3uRCQO24ILbhnDCDV6Qd4Rk0kEE%2Fk43FdZ0oGxpnVC%2BpQmOpU6lQoGsw5LmwzwY6pgH9qeMrBel42NJOxSiLivX3szkgh5NgsgFkPqOw4J0C1FspCCz5%2Fd0iE5IH1BLKaWIMzOQQ9VD5J4hPzL%2BnNdl1ouVUqZyZzg3fNbEpgHXJcye118Gq1zLVLU%2BP8d59PCR%2FYwg8%2By40qAtBim771V3fAnNq9YpKN1aWcoQGljYkp3F4%2FiHLliKVVR3hjF8Ygi8k4T7kr800CbxmGxIkqhDt0comXXzb&X-Amz-Signature=4dd77eef94bcd02f72378e93a7c897971204ade07d20c8a8384e3c6ad26eaabc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633IU3HJY%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhr3GuZxDZ4x4cPRIvuIzsAfdLJHvEpaiEEDYtE%2FrdlAiAr3h1C2kshtWuK63fWsd1ZF%2BVf%2FPRSrSfGa69rGPkz1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Oc7jBETKbfGaM50KtwDR6cq%2Bw6UdgefLEibvXzHdpw8pbLIDqgTqyFReYtxJoYfZLVfrd8QrZ9kEBRNqtDMUVk2852XPvJaCVysKrkpMlXO3m4TUXL2qTQw5tLQuLRFpe3qeDx8sa7wbrLt2akk1tawA5NBhDj9ikFzVXGDN2gUJhRZ8t27dwH3kFXm9dVT9HMJxF8USLsFTcrGCAvZRF9%2FJl%2Fak2OCRHcBZhP2ByZVvgQSDUK4oo3Jk1KAIVY1zOXLVNbjmDknqfrsCehlYgVbEaDrSihnwjJACwIFY7jb3esmVIilgdFi8%2FCtHVChIm4ybK6EIcitpRa2q8PmwDf2jricpJ43VUlm77WbLYMlfiZluqWpIP4ivrl%2BFafMrj5zBZDdLKE5XH0d23w2C66%2Fjc3sFV6uONTrzxTMtRFRkqfYNUkmXAwoxEYsHDo%2BRLlY9ylhU297eR1Qdh36wJVFewGxjx2Pc58CP9bnYOGHswVODc5RIgdkqH%2Bv4kZq6wKBiGtfJThjQ%2F8txPtWINAB2%2BHNdmOVofadred0yORy558LhmFEAkiSw9F95sqCuh53vOZewZsoZRqIUCfqQOi%2F3uRCQO24ILbhnDCDV6Qd4Rk0kEE%2Fk43FdZ0oGxpnVC%2BpQmOpU6lQoGsw5LmwzwY6pgH9qeMrBel42NJOxSiLivX3szkgh5NgsgFkPqOw4J0C1FspCCz5%2Fd0iE5IH1BLKaWIMzOQQ9VD5J4hPzL%2BnNdl1ouVUqZyZzg3fNbEpgHXJcye118Gq1zLVLU%2BP8d59PCR%2FYwg8%2By40qAtBim771V3fAnNq9YpKN1aWcoQGljYkp3F4%2FiHLliKVVR3hjF8Ygi8k4T7kr800CbxmGxIkqhDt0comXXzb&X-Amz-Signature=de3d244ea06a4e8ff9ece2712fda5634e00fcc7293da12684318b38d944751e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633IU3HJY%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhr3GuZxDZ4x4cPRIvuIzsAfdLJHvEpaiEEDYtE%2FrdlAiAr3h1C2kshtWuK63fWsd1ZF%2BVf%2FPRSrSfGa69rGPkz1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Oc7jBETKbfGaM50KtwDR6cq%2Bw6UdgefLEibvXzHdpw8pbLIDqgTqyFReYtxJoYfZLVfrd8QrZ9kEBRNqtDMUVk2852XPvJaCVysKrkpMlXO3m4TUXL2qTQw5tLQuLRFpe3qeDx8sa7wbrLt2akk1tawA5NBhDj9ikFzVXGDN2gUJhRZ8t27dwH3kFXm9dVT9HMJxF8USLsFTcrGCAvZRF9%2FJl%2Fak2OCRHcBZhP2ByZVvgQSDUK4oo3Jk1KAIVY1zOXLVNbjmDknqfrsCehlYgVbEaDrSihnwjJACwIFY7jb3esmVIilgdFi8%2FCtHVChIm4ybK6EIcitpRa2q8PmwDf2jricpJ43VUlm77WbLYMlfiZluqWpIP4ivrl%2BFafMrj5zBZDdLKE5XH0d23w2C66%2Fjc3sFV6uONTrzxTMtRFRkqfYNUkmXAwoxEYsHDo%2BRLlY9ylhU297eR1Qdh36wJVFewGxjx2Pc58CP9bnYOGHswVODc5RIgdkqH%2Bv4kZq6wKBiGtfJThjQ%2F8txPtWINAB2%2BHNdmOVofadred0yORy558LhmFEAkiSw9F95sqCuh53vOZewZsoZRqIUCfqQOi%2F3uRCQO24ILbhnDCDV6Qd4Rk0kEE%2Fk43FdZ0oGxpnVC%2BpQmOpU6lQoGsw5LmwzwY6pgH9qeMrBel42NJOxSiLivX3szkgh5NgsgFkPqOw4J0C1FspCCz5%2Fd0iE5IH1BLKaWIMzOQQ9VD5J4hPzL%2BnNdl1ouVUqZyZzg3fNbEpgHXJcye118Gq1zLVLU%2BP8d59PCR%2FYwg8%2By40qAtBim771V3fAnNq9YpKN1aWcoQGljYkp3F4%2FiHLliKVVR3hjF8Ygi8k4T7kr800CbxmGxIkqhDt0comXXzb&X-Amz-Signature=168ad7ee67571737f7a9d915539e96caca3223a8f4d3ff2652502699ec09e42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633IU3HJY%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhr3GuZxDZ4x4cPRIvuIzsAfdLJHvEpaiEEDYtE%2FrdlAiAr3h1C2kshtWuK63fWsd1ZF%2BVf%2FPRSrSfGa69rGPkz1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Oc7jBETKbfGaM50KtwDR6cq%2Bw6UdgefLEibvXzHdpw8pbLIDqgTqyFReYtxJoYfZLVfrd8QrZ9kEBRNqtDMUVk2852XPvJaCVysKrkpMlXO3m4TUXL2qTQw5tLQuLRFpe3qeDx8sa7wbrLt2akk1tawA5NBhDj9ikFzVXGDN2gUJhRZ8t27dwH3kFXm9dVT9HMJxF8USLsFTcrGCAvZRF9%2FJl%2Fak2OCRHcBZhP2ByZVvgQSDUK4oo3Jk1KAIVY1zOXLVNbjmDknqfrsCehlYgVbEaDrSihnwjJACwIFY7jb3esmVIilgdFi8%2FCtHVChIm4ybK6EIcitpRa2q8PmwDf2jricpJ43VUlm77WbLYMlfiZluqWpIP4ivrl%2BFafMrj5zBZDdLKE5XH0d23w2C66%2Fjc3sFV6uONTrzxTMtRFRkqfYNUkmXAwoxEYsHDo%2BRLlY9ylhU297eR1Qdh36wJVFewGxjx2Pc58CP9bnYOGHswVODc5RIgdkqH%2Bv4kZq6wKBiGtfJThjQ%2F8txPtWINAB2%2BHNdmOVofadred0yORy558LhmFEAkiSw9F95sqCuh53vOZewZsoZRqIUCfqQOi%2F3uRCQO24ILbhnDCDV6Qd4Rk0kEE%2Fk43FdZ0oGxpnVC%2BpQmOpU6lQoGsw5LmwzwY6pgH9qeMrBel42NJOxSiLivX3szkgh5NgsgFkPqOw4J0C1FspCCz5%2Fd0iE5IH1BLKaWIMzOQQ9VD5J4hPzL%2BnNdl1ouVUqZyZzg3fNbEpgHXJcye118Gq1zLVLU%2BP8d59PCR%2FYwg8%2By40qAtBim771V3fAnNq9YpKN1aWcoQGljYkp3F4%2FiHLliKVVR3hjF8Ygi8k4T7kr800CbxmGxIkqhDt0comXXzb&X-Amz-Signature=4c733b7066ec6cf4703fa058b1c7b04d4db327f345ed5de3286b502fcc1784ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633IU3HJY%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhr3GuZxDZ4x4cPRIvuIzsAfdLJHvEpaiEEDYtE%2FrdlAiAr3h1C2kshtWuK63fWsd1ZF%2BVf%2FPRSrSfGa69rGPkz1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Oc7jBETKbfGaM50KtwDR6cq%2Bw6UdgefLEibvXzHdpw8pbLIDqgTqyFReYtxJoYfZLVfrd8QrZ9kEBRNqtDMUVk2852XPvJaCVysKrkpMlXO3m4TUXL2qTQw5tLQuLRFpe3qeDx8sa7wbrLt2akk1tawA5NBhDj9ikFzVXGDN2gUJhRZ8t27dwH3kFXm9dVT9HMJxF8USLsFTcrGCAvZRF9%2FJl%2Fak2OCRHcBZhP2ByZVvgQSDUK4oo3Jk1KAIVY1zOXLVNbjmDknqfrsCehlYgVbEaDrSihnwjJACwIFY7jb3esmVIilgdFi8%2FCtHVChIm4ybK6EIcitpRa2q8PmwDf2jricpJ43VUlm77WbLYMlfiZluqWpIP4ivrl%2BFafMrj5zBZDdLKE5XH0d23w2C66%2Fjc3sFV6uONTrzxTMtRFRkqfYNUkmXAwoxEYsHDo%2BRLlY9ylhU297eR1Qdh36wJVFewGxjx2Pc58CP9bnYOGHswVODc5RIgdkqH%2Bv4kZq6wKBiGtfJThjQ%2F8txPtWINAB2%2BHNdmOVofadred0yORy558LhmFEAkiSw9F95sqCuh53vOZewZsoZRqIUCfqQOi%2F3uRCQO24ILbhnDCDV6Qd4Rk0kEE%2Fk43FdZ0oGxpnVC%2BpQmOpU6lQoGsw5LmwzwY6pgH9qeMrBel42NJOxSiLivX3szkgh5NgsgFkPqOw4J0C1FspCCz5%2Fd0iE5IH1BLKaWIMzOQQ9VD5J4hPzL%2BnNdl1ouVUqZyZzg3fNbEpgHXJcye118Gq1zLVLU%2BP8d59PCR%2FYwg8%2By40qAtBim771V3fAnNq9YpKN1aWcoQGljYkp3F4%2FiHLliKVVR3hjF8Ygi8k4T7kr800CbxmGxIkqhDt0comXXzb&X-Amz-Signature=3caab89c0b3ed6877d005b15921fa9fd42c7cf7deb3193ccd906691389869ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633IU3HJY%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhr3GuZxDZ4x4cPRIvuIzsAfdLJHvEpaiEEDYtE%2FrdlAiAr3h1C2kshtWuK63fWsd1ZF%2BVf%2FPRSrSfGa69rGPkz1SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Oc7jBETKbfGaM50KtwDR6cq%2Bw6UdgefLEibvXzHdpw8pbLIDqgTqyFReYtxJoYfZLVfrd8QrZ9kEBRNqtDMUVk2852XPvJaCVysKrkpMlXO3m4TUXL2qTQw5tLQuLRFpe3qeDx8sa7wbrLt2akk1tawA5NBhDj9ikFzVXGDN2gUJhRZ8t27dwH3kFXm9dVT9HMJxF8USLsFTcrGCAvZRF9%2FJl%2Fak2OCRHcBZhP2ByZVvgQSDUK4oo3Jk1KAIVY1zOXLVNbjmDknqfrsCehlYgVbEaDrSihnwjJACwIFY7jb3esmVIilgdFi8%2FCtHVChIm4ybK6EIcitpRa2q8PmwDf2jricpJ43VUlm77WbLYMlfiZluqWpIP4ivrl%2BFafMrj5zBZDdLKE5XH0d23w2C66%2Fjc3sFV6uONTrzxTMtRFRkqfYNUkmXAwoxEYsHDo%2BRLlY9ylhU297eR1Qdh36wJVFewGxjx2Pc58CP9bnYOGHswVODc5RIgdkqH%2Bv4kZq6wKBiGtfJThjQ%2F8txPtWINAB2%2BHNdmOVofadred0yORy558LhmFEAkiSw9F95sqCuh53vOZewZsoZRqIUCfqQOi%2F3uRCQO24ILbhnDCDV6Qd4Rk0kEE%2Fk43FdZ0oGxpnVC%2BpQmOpU6lQoGsw5LmwzwY6pgH9qeMrBel42NJOxSiLivX3szkgh5NgsgFkPqOw4J0C1FspCCz5%2Fd0iE5IH1BLKaWIMzOQQ9VD5J4hPzL%2BnNdl1ouVUqZyZzg3fNbEpgHXJcye118Gq1zLVLU%2BP8d59PCR%2FYwg8%2By40qAtBim771V3fAnNq9YpKN1aWcoQGljYkp3F4%2FiHLliKVVR3hjF8Ygi8k4T7kr800CbxmGxIkqhDt0comXXzb&X-Amz-Signature=5e3582b5eafafdb2874aa0fbb89c5822f6c32967d0582af558d8cd715c4ad7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
