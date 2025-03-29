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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKPLKUY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFlrBxGM4mGJ38rSdXUAkoYgJkEnlNUdrjF%2BGaCd%2FLrIAiBplLRDJor%2FfukfZM4EL5Sy3uSCppI%2BB5kfDMGqsPMFpir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMUfh1muE9VBziBXytKtwD%2BuQJnDKm3ut%2BgSWYGxHP%2F4L3pTdc86U4ps8R9a041cgTtFfNGRgHOQNxvAcdjvpy1kO198IQ8ZmUrAkZCeT8mhk6abdqkVSyWUp68Yv5VKUiXlD%2FVkfXWUfYWHGNeWZW%2F2JvvDe49o9Dk4VhO9lfBBmIZu7Wa3c%2FKvJzzH3yNURhzhRhiPByjzuGrKL5AAKHX88xVadFWrGtEbsTdSxFdk5W4tdic%2BTAdVNK%2B%2BY6biICWXroMgb%2FoYW%2BFdpr7HZUnaBoaTDEGEk8ylc%2BE1y%2BdDn30UzxmiyfGU7Iv1fu9rIv0s%2BU6Vjbi%2BOPysrIyRPUWhONwfzpz4oXXf8MUy2MJ2zfFKiFn2zKiVzWU6EE3iW0X620vV8rRJ52FbwVn4GmcSxUzBKFX9ar%2BkFs4zToHCIGJRDMcVUiQMSIn%2BLXy6FTubjWOop4gexODgB4M60lpWZne6PQFtePND70LNBKYmqsyH4da%2F4JGCB1G0BOnegT9Vnw7rc1bwpTxnAUI%2BLtHw861QsmJ2G3XI55bHwVLencIWD6JBFxp3icT0InYoY%2Bhp6rnnOnMrTHp1kkQIK%2ByohfaHMpv3hrvsEKKS3zS0MyM0s5Ap5b%2BvtdQHwh42VhLnLtZeVAp9tJN4Qw5d6cvwY6pgGAiY3%2FfiRxWC%2FrzZcSjkHHbXH49SBhVbmlb%2BM76utySzwObZmVE2giDG8v0aMnGg9WAOZW0mSZS64vrOieoa5u1F2UBYltjymWcMDsxKxh3LRqNtNPCVV7v6%2Byd%2BSdqQjrF4Q2JJNiaQJIO0kmO%2FXxvh29rGRrfORV2y3xZIufUfRrQth6Dgdt%2FdZD%2BJNU6Ixhu%2BkbACmMkede6fFXE8x2jP1cBnhH&X-Amz-Signature=465c36a70f6b34ac9b351247b3e2c00654c2985b2162baf5c9e44ac71e2c9da9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKPLKUY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFlrBxGM4mGJ38rSdXUAkoYgJkEnlNUdrjF%2BGaCd%2FLrIAiBplLRDJor%2FfukfZM4EL5Sy3uSCppI%2BB5kfDMGqsPMFpir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMUfh1muE9VBziBXytKtwD%2BuQJnDKm3ut%2BgSWYGxHP%2F4L3pTdc86U4ps8R9a041cgTtFfNGRgHOQNxvAcdjvpy1kO198IQ8ZmUrAkZCeT8mhk6abdqkVSyWUp68Yv5VKUiXlD%2FVkfXWUfYWHGNeWZW%2F2JvvDe49o9Dk4VhO9lfBBmIZu7Wa3c%2FKvJzzH3yNURhzhRhiPByjzuGrKL5AAKHX88xVadFWrGtEbsTdSxFdk5W4tdic%2BTAdVNK%2B%2BY6biICWXroMgb%2FoYW%2BFdpr7HZUnaBoaTDEGEk8ylc%2BE1y%2BdDn30UzxmiyfGU7Iv1fu9rIv0s%2BU6Vjbi%2BOPysrIyRPUWhONwfzpz4oXXf8MUy2MJ2zfFKiFn2zKiVzWU6EE3iW0X620vV8rRJ52FbwVn4GmcSxUzBKFX9ar%2BkFs4zToHCIGJRDMcVUiQMSIn%2BLXy6FTubjWOop4gexODgB4M60lpWZne6PQFtePND70LNBKYmqsyH4da%2F4JGCB1G0BOnegT9Vnw7rc1bwpTxnAUI%2BLtHw861QsmJ2G3XI55bHwVLencIWD6JBFxp3icT0InYoY%2Bhp6rnnOnMrTHp1kkQIK%2ByohfaHMpv3hrvsEKKS3zS0MyM0s5Ap5b%2BvtdQHwh42VhLnLtZeVAp9tJN4Qw5d6cvwY6pgGAiY3%2FfiRxWC%2FrzZcSjkHHbXH49SBhVbmlb%2BM76utySzwObZmVE2giDG8v0aMnGg9WAOZW0mSZS64vrOieoa5u1F2UBYltjymWcMDsxKxh3LRqNtNPCVV7v6%2Byd%2BSdqQjrF4Q2JJNiaQJIO0kmO%2FXxvh29rGRrfORV2y3xZIufUfRrQth6Dgdt%2FdZD%2BJNU6Ixhu%2BkbACmMkede6fFXE8x2jP1cBnhH&X-Amz-Signature=99b00e3e26728481c7ad630cbfb6a221ab1b850ce98778e8ea80de035471ddb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKPLKUY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFlrBxGM4mGJ38rSdXUAkoYgJkEnlNUdrjF%2BGaCd%2FLrIAiBplLRDJor%2FfukfZM4EL5Sy3uSCppI%2BB5kfDMGqsPMFpir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMUfh1muE9VBziBXytKtwD%2BuQJnDKm3ut%2BgSWYGxHP%2F4L3pTdc86U4ps8R9a041cgTtFfNGRgHOQNxvAcdjvpy1kO198IQ8ZmUrAkZCeT8mhk6abdqkVSyWUp68Yv5VKUiXlD%2FVkfXWUfYWHGNeWZW%2F2JvvDe49o9Dk4VhO9lfBBmIZu7Wa3c%2FKvJzzH3yNURhzhRhiPByjzuGrKL5AAKHX88xVadFWrGtEbsTdSxFdk5W4tdic%2BTAdVNK%2B%2BY6biICWXroMgb%2FoYW%2BFdpr7HZUnaBoaTDEGEk8ylc%2BE1y%2BdDn30UzxmiyfGU7Iv1fu9rIv0s%2BU6Vjbi%2BOPysrIyRPUWhONwfzpz4oXXf8MUy2MJ2zfFKiFn2zKiVzWU6EE3iW0X620vV8rRJ52FbwVn4GmcSxUzBKFX9ar%2BkFs4zToHCIGJRDMcVUiQMSIn%2BLXy6FTubjWOop4gexODgB4M60lpWZne6PQFtePND70LNBKYmqsyH4da%2F4JGCB1G0BOnegT9Vnw7rc1bwpTxnAUI%2BLtHw861QsmJ2G3XI55bHwVLencIWD6JBFxp3icT0InYoY%2Bhp6rnnOnMrTHp1kkQIK%2ByohfaHMpv3hrvsEKKS3zS0MyM0s5Ap5b%2BvtdQHwh42VhLnLtZeVAp9tJN4Qw5d6cvwY6pgGAiY3%2FfiRxWC%2FrzZcSjkHHbXH49SBhVbmlb%2BM76utySzwObZmVE2giDG8v0aMnGg9WAOZW0mSZS64vrOieoa5u1F2UBYltjymWcMDsxKxh3LRqNtNPCVV7v6%2Byd%2BSdqQjrF4Q2JJNiaQJIO0kmO%2FXxvh29rGRrfORV2y3xZIufUfRrQth6Dgdt%2FdZD%2BJNU6Ixhu%2BkbACmMkede6fFXE8x2jP1cBnhH&X-Amz-Signature=80c151687c23b716125a2e2b6dd82273294d79708e083e80612a62d1f2f33896&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKPLKUY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFlrBxGM4mGJ38rSdXUAkoYgJkEnlNUdrjF%2BGaCd%2FLrIAiBplLRDJor%2FfukfZM4EL5Sy3uSCppI%2BB5kfDMGqsPMFpir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMUfh1muE9VBziBXytKtwD%2BuQJnDKm3ut%2BgSWYGxHP%2F4L3pTdc86U4ps8R9a041cgTtFfNGRgHOQNxvAcdjvpy1kO198IQ8ZmUrAkZCeT8mhk6abdqkVSyWUp68Yv5VKUiXlD%2FVkfXWUfYWHGNeWZW%2F2JvvDe49o9Dk4VhO9lfBBmIZu7Wa3c%2FKvJzzH3yNURhzhRhiPByjzuGrKL5AAKHX88xVadFWrGtEbsTdSxFdk5W4tdic%2BTAdVNK%2B%2BY6biICWXroMgb%2FoYW%2BFdpr7HZUnaBoaTDEGEk8ylc%2BE1y%2BdDn30UzxmiyfGU7Iv1fu9rIv0s%2BU6Vjbi%2BOPysrIyRPUWhONwfzpz4oXXf8MUy2MJ2zfFKiFn2zKiVzWU6EE3iW0X620vV8rRJ52FbwVn4GmcSxUzBKFX9ar%2BkFs4zToHCIGJRDMcVUiQMSIn%2BLXy6FTubjWOop4gexODgB4M60lpWZne6PQFtePND70LNBKYmqsyH4da%2F4JGCB1G0BOnegT9Vnw7rc1bwpTxnAUI%2BLtHw861QsmJ2G3XI55bHwVLencIWD6JBFxp3icT0InYoY%2Bhp6rnnOnMrTHp1kkQIK%2ByohfaHMpv3hrvsEKKS3zS0MyM0s5Ap5b%2BvtdQHwh42VhLnLtZeVAp9tJN4Qw5d6cvwY6pgGAiY3%2FfiRxWC%2FrzZcSjkHHbXH49SBhVbmlb%2BM76utySzwObZmVE2giDG8v0aMnGg9WAOZW0mSZS64vrOieoa5u1F2UBYltjymWcMDsxKxh3LRqNtNPCVV7v6%2Byd%2BSdqQjrF4Q2JJNiaQJIO0kmO%2FXxvh29rGRrfORV2y3xZIufUfRrQth6Dgdt%2FdZD%2BJNU6Ixhu%2BkbACmMkede6fFXE8x2jP1cBnhH&X-Amz-Signature=7e41774e270dfc74733505ac657aea57e595dfb2f05d7b95f3218804f540a3e3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKPLKUY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFlrBxGM4mGJ38rSdXUAkoYgJkEnlNUdrjF%2BGaCd%2FLrIAiBplLRDJor%2FfukfZM4EL5Sy3uSCppI%2BB5kfDMGqsPMFpir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMUfh1muE9VBziBXytKtwD%2BuQJnDKm3ut%2BgSWYGxHP%2F4L3pTdc86U4ps8R9a041cgTtFfNGRgHOQNxvAcdjvpy1kO198IQ8ZmUrAkZCeT8mhk6abdqkVSyWUp68Yv5VKUiXlD%2FVkfXWUfYWHGNeWZW%2F2JvvDe49o9Dk4VhO9lfBBmIZu7Wa3c%2FKvJzzH3yNURhzhRhiPByjzuGrKL5AAKHX88xVadFWrGtEbsTdSxFdk5W4tdic%2BTAdVNK%2B%2BY6biICWXroMgb%2FoYW%2BFdpr7HZUnaBoaTDEGEk8ylc%2BE1y%2BdDn30UzxmiyfGU7Iv1fu9rIv0s%2BU6Vjbi%2BOPysrIyRPUWhONwfzpz4oXXf8MUy2MJ2zfFKiFn2zKiVzWU6EE3iW0X620vV8rRJ52FbwVn4GmcSxUzBKFX9ar%2BkFs4zToHCIGJRDMcVUiQMSIn%2BLXy6FTubjWOop4gexODgB4M60lpWZne6PQFtePND70LNBKYmqsyH4da%2F4JGCB1G0BOnegT9Vnw7rc1bwpTxnAUI%2BLtHw861QsmJ2G3XI55bHwVLencIWD6JBFxp3icT0InYoY%2Bhp6rnnOnMrTHp1kkQIK%2ByohfaHMpv3hrvsEKKS3zS0MyM0s5Ap5b%2BvtdQHwh42VhLnLtZeVAp9tJN4Qw5d6cvwY6pgGAiY3%2FfiRxWC%2FrzZcSjkHHbXH49SBhVbmlb%2BM76utySzwObZmVE2giDG8v0aMnGg9WAOZW0mSZS64vrOieoa5u1F2UBYltjymWcMDsxKxh3LRqNtNPCVV7v6%2Byd%2BSdqQjrF4Q2JJNiaQJIO0kmO%2FXxvh29rGRrfORV2y3xZIufUfRrQth6Dgdt%2FdZD%2BJNU6Ixhu%2BkbACmMkede6fFXE8x2jP1cBnhH&X-Amz-Signature=c63d3639e308db93f883601ec12382f99315bfd51884589fe67311fdb13ff0d9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKPLKUY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFlrBxGM4mGJ38rSdXUAkoYgJkEnlNUdrjF%2BGaCd%2FLrIAiBplLRDJor%2FfukfZM4EL5Sy3uSCppI%2BB5kfDMGqsPMFpir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMUfh1muE9VBziBXytKtwD%2BuQJnDKm3ut%2BgSWYGxHP%2F4L3pTdc86U4ps8R9a041cgTtFfNGRgHOQNxvAcdjvpy1kO198IQ8ZmUrAkZCeT8mhk6abdqkVSyWUp68Yv5VKUiXlD%2FVkfXWUfYWHGNeWZW%2F2JvvDe49o9Dk4VhO9lfBBmIZu7Wa3c%2FKvJzzH3yNURhzhRhiPByjzuGrKL5AAKHX88xVadFWrGtEbsTdSxFdk5W4tdic%2BTAdVNK%2B%2BY6biICWXroMgb%2FoYW%2BFdpr7HZUnaBoaTDEGEk8ylc%2BE1y%2BdDn30UzxmiyfGU7Iv1fu9rIv0s%2BU6Vjbi%2BOPysrIyRPUWhONwfzpz4oXXf8MUy2MJ2zfFKiFn2zKiVzWU6EE3iW0X620vV8rRJ52FbwVn4GmcSxUzBKFX9ar%2BkFs4zToHCIGJRDMcVUiQMSIn%2BLXy6FTubjWOop4gexODgB4M60lpWZne6PQFtePND70LNBKYmqsyH4da%2F4JGCB1G0BOnegT9Vnw7rc1bwpTxnAUI%2BLtHw861QsmJ2G3XI55bHwVLencIWD6JBFxp3icT0InYoY%2Bhp6rnnOnMrTHp1kkQIK%2ByohfaHMpv3hrvsEKKS3zS0MyM0s5Ap5b%2BvtdQHwh42VhLnLtZeVAp9tJN4Qw5d6cvwY6pgGAiY3%2FfiRxWC%2FrzZcSjkHHbXH49SBhVbmlb%2BM76utySzwObZmVE2giDG8v0aMnGg9WAOZW0mSZS64vrOieoa5u1F2UBYltjymWcMDsxKxh3LRqNtNPCVV7v6%2Byd%2BSdqQjrF4Q2JJNiaQJIO0kmO%2FXxvh29rGRrfORV2y3xZIufUfRrQth6Dgdt%2FdZD%2BJNU6Ixhu%2BkbACmMkede6fFXE8x2jP1cBnhH&X-Amz-Signature=10153ee8e7fbd9e63869ec4eafd0d5f5e952bcdec75b74810f0e55f678ad13ca&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKPLKUY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFlrBxGM4mGJ38rSdXUAkoYgJkEnlNUdrjF%2BGaCd%2FLrIAiBplLRDJor%2FfukfZM4EL5Sy3uSCppI%2BB5kfDMGqsPMFpir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMUfh1muE9VBziBXytKtwD%2BuQJnDKm3ut%2BgSWYGxHP%2F4L3pTdc86U4ps8R9a041cgTtFfNGRgHOQNxvAcdjvpy1kO198IQ8ZmUrAkZCeT8mhk6abdqkVSyWUp68Yv5VKUiXlD%2FVkfXWUfYWHGNeWZW%2F2JvvDe49o9Dk4VhO9lfBBmIZu7Wa3c%2FKvJzzH3yNURhzhRhiPByjzuGrKL5AAKHX88xVadFWrGtEbsTdSxFdk5W4tdic%2BTAdVNK%2B%2BY6biICWXroMgb%2FoYW%2BFdpr7HZUnaBoaTDEGEk8ylc%2BE1y%2BdDn30UzxmiyfGU7Iv1fu9rIv0s%2BU6Vjbi%2BOPysrIyRPUWhONwfzpz4oXXf8MUy2MJ2zfFKiFn2zKiVzWU6EE3iW0X620vV8rRJ52FbwVn4GmcSxUzBKFX9ar%2BkFs4zToHCIGJRDMcVUiQMSIn%2BLXy6FTubjWOop4gexODgB4M60lpWZne6PQFtePND70LNBKYmqsyH4da%2F4JGCB1G0BOnegT9Vnw7rc1bwpTxnAUI%2BLtHw861QsmJ2G3XI55bHwVLencIWD6JBFxp3icT0InYoY%2Bhp6rnnOnMrTHp1kkQIK%2ByohfaHMpv3hrvsEKKS3zS0MyM0s5Ap5b%2BvtdQHwh42VhLnLtZeVAp9tJN4Qw5d6cvwY6pgGAiY3%2FfiRxWC%2FrzZcSjkHHbXH49SBhVbmlb%2BM76utySzwObZmVE2giDG8v0aMnGg9WAOZW0mSZS64vrOieoa5u1F2UBYltjymWcMDsxKxh3LRqNtNPCVV7v6%2Byd%2BSdqQjrF4Q2JJNiaQJIO0kmO%2FXxvh29rGRrfORV2y3xZIufUfRrQth6Dgdt%2FdZD%2BJNU6Ixhu%2BkbACmMkede6fFXE8x2jP1cBnhH&X-Amz-Signature=84ec94f435f0c4b2bab383820e1d744ff9a1cbe4a049cec01c6535816f371fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
