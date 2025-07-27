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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOCWFUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFeD4MWOWj1bdEON8xprk9eOOHovIS18Bylx5vSFNq5nAiEAitBrHKYszI8PlteyLxTm5mubE8M%2F5l3Gz5ku7mfsMSAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDPkQIb53HtQtIkCUCrcAzXhMRPMmT7JXOCRnBc%2B7SqSCNVe%2FU%2BVfmFdP6iF%2FDVOPnxSfV5xdjzwRciz%2BsOdI3Md6yTMe0Jmwk%2BuPB0W7XJbv8Bso0SZ89pmIg2oGY9TUuf59wd%2BvYgtQhZmborOmZukebUeegpe2BJOWCD9ZJJLUygTv0Z%2BvwaGd9yRDkGCk036%2BXNU%2FXs5Lgs02fvS52RDu45VMsCjxv9uvg9MxAETGA8cQcac1qSXuX0mIM%2BcT5VHXyVtjGBQUJxdqNDqiuM7LTfM8JWYA09V9YXatPypKnCwY%2BfrJeRp3RkWkKJrTLXtZbZzCym%2B9X4YoeDXotgQ6%2BHGFy096jt0HZGkEIDiaJaSpaahtZUNgNhoVCW%2BiqIdnWx9SdTo8CW%2BiJG2ur1dZqseESEzIKXJ639UaAewRy8z5JgiqVPNG31XqLneXS70LEorEfJOd9lpIrH1EOeh3aqVGYOt1kCo9FoMV2RlFss0p4tJ9wPlH%2F2KpLazS%2Fik3Tzwr9prbKCHdAC67YvnTvvO0QoPOCHHHUYnzyBlSbQ2R%2FSVxVxmT0woZJgkAMwp2nc8r56cL69EMGxrX6WDwc0KcNakp0NpBtjFfpRQibf7Ag7PbHtebeLx1K6fBEouv0gJAj4I7DJSMOSDmcQGOqUBc484fHszde7lXIbCGlZaTlRZ%2F8NpderNpPQRiPEq35hpbFWEXi97VjSb0mh1G%2Bjwd8eifGHJgFCv5rNTnYROoe2%2BVi8QOF8GoQBfoSh%2BTHQFBuez%2F4zJZQwGSYODyMmNsJEx0xJA52x2H9AEOSDWbXY0lUYfb8dDwtBdJznHi4Rawo4r6zhwA6tiuBFM2ipHCkDfDnLACesE2x59izugKlJQL7wN&X-Amz-Signature=cb32f7a85403eca973c857f2327acc3190675b534103684db7c5d58fc8c22564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOCWFUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFeD4MWOWj1bdEON8xprk9eOOHovIS18Bylx5vSFNq5nAiEAitBrHKYszI8PlteyLxTm5mubE8M%2F5l3Gz5ku7mfsMSAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDPkQIb53HtQtIkCUCrcAzXhMRPMmT7JXOCRnBc%2B7SqSCNVe%2FU%2BVfmFdP6iF%2FDVOPnxSfV5xdjzwRciz%2BsOdI3Md6yTMe0Jmwk%2BuPB0W7XJbv8Bso0SZ89pmIg2oGY9TUuf59wd%2BvYgtQhZmborOmZukebUeegpe2BJOWCD9ZJJLUygTv0Z%2BvwaGd9yRDkGCk036%2BXNU%2FXs5Lgs02fvS52RDu45VMsCjxv9uvg9MxAETGA8cQcac1qSXuX0mIM%2BcT5VHXyVtjGBQUJxdqNDqiuM7LTfM8JWYA09V9YXatPypKnCwY%2BfrJeRp3RkWkKJrTLXtZbZzCym%2B9X4YoeDXotgQ6%2BHGFy096jt0HZGkEIDiaJaSpaahtZUNgNhoVCW%2BiqIdnWx9SdTo8CW%2BiJG2ur1dZqseESEzIKXJ639UaAewRy8z5JgiqVPNG31XqLneXS70LEorEfJOd9lpIrH1EOeh3aqVGYOt1kCo9FoMV2RlFss0p4tJ9wPlH%2F2KpLazS%2Fik3Tzwr9prbKCHdAC67YvnTvvO0QoPOCHHHUYnzyBlSbQ2R%2FSVxVxmT0woZJgkAMwp2nc8r56cL69EMGxrX6WDwc0KcNakp0NpBtjFfpRQibf7Ag7PbHtebeLx1K6fBEouv0gJAj4I7DJSMOSDmcQGOqUBc484fHszde7lXIbCGlZaTlRZ%2F8NpderNpPQRiPEq35hpbFWEXi97VjSb0mh1G%2Bjwd8eifGHJgFCv5rNTnYROoe2%2BVi8QOF8GoQBfoSh%2BTHQFBuez%2F4zJZQwGSYODyMmNsJEx0xJA52x2H9AEOSDWbXY0lUYfb8dDwtBdJznHi4Rawo4r6zhwA6tiuBFM2ipHCkDfDnLACesE2x59izugKlJQL7wN&X-Amz-Signature=6fad0ee60d1f3717afd72b802b7965dfddd879b85b15e2790fc602c10d3fb4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOCWFUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFeD4MWOWj1bdEON8xprk9eOOHovIS18Bylx5vSFNq5nAiEAitBrHKYszI8PlteyLxTm5mubE8M%2F5l3Gz5ku7mfsMSAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDPkQIb53HtQtIkCUCrcAzXhMRPMmT7JXOCRnBc%2B7SqSCNVe%2FU%2BVfmFdP6iF%2FDVOPnxSfV5xdjzwRciz%2BsOdI3Md6yTMe0Jmwk%2BuPB0W7XJbv8Bso0SZ89pmIg2oGY9TUuf59wd%2BvYgtQhZmborOmZukebUeegpe2BJOWCD9ZJJLUygTv0Z%2BvwaGd9yRDkGCk036%2BXNU%2FXs5Lgs02fvS52RDu45VMsCjxv9uvg9MxAETGA8cQcac1qSXuX0mIM%2BcT5VHXyVtjGBQUJxdqNDqiuM7LTfM8JWYA09V9YXatPypKnCwY%2BfrJeRp3RkWkKJrTLXtZbZzCym%2B9X4YoeDXotgQ6%2BHGFy096jt0HZGkEIDiaJaSpaahtZUNgNhoVCW%2BiqIdnWx9SdTo8CW%2BiJG2ur1dZqseESEzIKXJ639UaAewRy8z5JgiqVPNG31XqLneXS70LEorEfJOd9lpIrH1EOeh3aqVGYOt1kCo9FoMV2RlFss0p4tJ9wPlH%2F2KpLazS%2Fik3Tzwr9prbKCHdAC67YvnTvvO0QoPOCHHHUYnzyBlSbQ2R%2FSVxVxmT0woZJgkAMwp2nc8r56cL69EMGxrX6WDwc0KcNakp0NpBtjFfpRQibf7Ag7PbHtebeLx1K6fBEouv0gJAj4I7DJSMOSDmcQGOqUBc484fHszde7lXIbCGlZaTlRZ%2F8NpderNpPQRiPEq35hpbFWEXi97VjSb0mh1G%2Bjwd8eifGHJgFCv5rNTnYROoe2%2BVi8QOF8GoQBfoSh%2BTHQFBuez%2F4zJZQwGSYODyMmNsJEx0xJA52x2H9AEOSDWbXY0lUYfb8dDwtBdJznHi4Rawo4r6zhwA6tiuBFM2ipHCkDfDnLACesE2x59izugKlJQL7wN&X-Amz-Signature=fcd761332c7d7837ff9bbb09ad4d212f5fec0fcf23615040e8c0b7be37ca82f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOCWFUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFeD4MWOWj1bdEON8xprk9eOOHovIS18Bylx5vSFNq5nAiEAitBrHKYszI8PlteyLxTm5mubE8M%2F5l3Gz5ku7mfsMSAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDPkQIb53HtQtIkCUCrcAzXhMRPMmT7JXOCRnBc%2B7SqSCNVe%2FU%2BVfmFdP6iF%2FDVOPnxSfV5xdjzwRciz%2BsOdI3Md6yTMe0Jmwk%2BuPB0W7XJbv8Bso0SZ89pmIg2oGY9TUuf59wd%2BvYgtQhZmborOmZukebUeegpe2BJOWCD9ZJJLUygTv0Z%2BvwaGd9yRDkGCk036%2BXNU%2FXs5Lgs02fvS52RDu45VMsCjxv9uvg9MxAETGA8cQcac1qSXuX0mIM%2BcT5VHXyVtjGBQUJxdqNDqiuM7LTfM8JWYA09V9YXatPypKnCwY%2BfrJeRp3RkWkKJrTLXtZbZzCym%2B9X4YoeDXotgQ6%2BHGFy096jt0HZGkEIDiaJaSpaahtZUNgNhoVCW%2BiqIdnWx9SdTo8CW%2BiJG2ur1dZqseESEzIKXJ639UaAewRy8z5JgiqVPNG31XqLneXS70LEorEfJOd9lpIrH1EOeh3aqVGYOt1kCo9FoMV2RlFss0p4tJ9wPlH%2F2KpLazS%2Fik3Tzwr9prbKCHdAC67YvnTvvO0QoPOCHHHUYnzyBlSbQ2R%2FSVxVxmT0woZJgkAMwp2nc8r56cL69EMGxrX6WDwc0KcNakp0NpBtjFfpRQibf7Ag7PbHtebeLx1K6fBEouv0gJAj4I7DJSMOSDmcQGOqUBc484fHszde7lXIbCGlZaTlRZ%2F8NpderNpPQRiPEq35hpbFWEXi97VjSb0mh1G%2Bjwd8eifGHJgFCv5rNTnYROoe2%2BVi8QOF8GoQBfoSh%2BTHQFBuez%2F4zJZQwGSYODyMmNsJEx0xJA52x2H9AEOSDWbXY0lUYfb8dDwtBdJznHi4Rawo4r6zhwA6tiuBFM2ipHCkDfDnLACesE2x59izugKlJQL7wN&X-Amz-Signature=f8ce86c83bacb2f4c36a0236f3544509b9d38514807a6ab34660dcac90278110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOCWFUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFeD4MWOWj1bdEON8xprk9eOOHovIS18Bylx5vSFNq5nAiEAitBrHKYszI8PlteyLxTm5mubE8M%2F5l3Gz5ku7mfsMSAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDPkQIb53HtQtIkCUCrcAzXhMRPMmT7JXOCRnBc%2B7SqSCNVe%2FU%2BVfmFdP6iF%2FDVOPnxSfV5xdjzwRciz%2BsOdI3Md6yTMe0Jmwk%2BuPB0W7XJbv8Bso0SZ89pmIg2oGY9TUuf59wd%2BvYgtQhZmborOmZukebUeegpe2BJOWCD9ZJJLUygTv0Z%2BvwaGd9yRDkGCk036%2BXNU%2FXs5Lgs02fvS52RDu45VMsCjxv9uvg9MxAETGA8cQcac1qSXuX0mIM%2BcT5VHXyVtjGBQUJxdqNDqiuM7LTfM8JWYA09V9YXatPypKnCwY%2BfrJeRp3RkWkKJrTLXtZbZzCym%2B9X4YoeDXotgQ6%2BHGFy096jt0HZGkEIDiaJaSpaahtZUNgNhoVCW%2BiqIdnWx9SdTo8CW%2BiJG2ur1dZqseESEzIKXJ639UaAewRy8z5JgiqVPNG31XqLneXS70LEorEfJOd9lpIrH1EOeh3aqVGYOt1kCo9FoMV2RlFss0p4tJ9wPlH%2F2KpLazS%2Fik3Tzwr9prbKCHdAC67YvnTvvO0QoPOCHHHUYnzyBlSbQ2R%2FSVxVxmT0woZJgkAMwp2nc8r56cL69EMGxrX6WDwc0KcNakp0NpBtjFfpRQibf7Ag7PbHtebeLx1K6fBEouv0gJAj4I7DJSMOSDmcQGOqUBc484fHszde7lXIbCGlZaTlRZ%2F8NpderNpPQRiPEq35hpbFWEXi97VjSb0mh1G%2Bjwd8eifGHJgFCv5rNTnYROoe2%2BVi8QOF8GoQBfoSh%2BTHQFBuez%2F4zJZQwGSYODyMmNsJEx0xJA52x2H9AEOSDWbXY0lUYfb8dDwtBdJznHi4Rawo4r6zhwA6tiuBFM2ipHCkDfDnLACesE2x59izugKlJQL7wN&X-Amz-Signature=533d92aac4585955b9b2e6b761e97b5f3e02874e18f5e40f14448a4eb17a0023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOCWFUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFeD4MWOWj1bdEON8xprk9eOOHovIS18Bylx5vSFNq5nAiEAitBrHKYszI8PlteyLxTm5mubE8M%2F5l3Gz5ku7mfsMSAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDPkQIb53HtQtIkCUCrcAzXhMRPMmT7JXOCRnBc%2B7SqSCNVe%2FU%2BVfmFdP6iF%2FDVOPnxSfV5xdjzwRciz%2BsOdI3Md6yTMe0Jmwk%2BuPB0W7XJbv8Bso0SZ89pmIg2oGY9TUuf59wd%2BvYgtQhZmborOmZukebUeegpe2BJOWCD9ZJJLUygTv0Z%2BvwaGd9yRDkGCk036%2BXNU%2FXs5Lgs02fvS52RDu45VMsCjxv9uvg9MxAETGA8cQcac1qSXuX0mIM%2BcT5VHXyVtjGBQUJxdqNDqiuM7LTfM8JWYA09V9YXatPypKnCwY%2BfrJeRp3RkWkKJrTLXtZbZzCym%2B9X4YoeDXotgQ6%2BHGFy096jt0HZGkEIDiaJaSpaahtZUNgNhoVCW%2BiqIdnWx9SdTo8CW%2BiJG2ur1dZqseESEzIKXJ639UaAewRy8z5JgiqVPNG31XqLneXS70LEorEfJOd9lpIrH1EOeh3aqVGYOt1kCo9FoMV2RlFss0p4tJ9wPlH%2F2KpLazS%2Fik3Tzwr9prbKCHdAC67YvnTvvO0QoPOCHHHUYnzyBlSbQ2R%2FSVxVxmT0woZJgkAMwp2nc8r56cL69EMGxrX6WDwc0KcNakp0NpBtjFfpRQibf7Ag7PbHtebeLx1K6fBEouv0gJAj4I7DJSMOSDmcQGOqUBc484fHszde7lXIbCGlZaTlRZ%2F8NpderNpPQRiPEq35hpbFWEXi97VjSb0mh1G%2Bjwd8eifGHJgFCv5rNTnYROoe2%2BVi8QOF8GoQBfoSh%2BTHQFBuez%2F4zJZQwGSYODyMmNsJEx0xJA52x2H9AEOSDWbXY0lUYfb8dDwtBdJznHi4Rawo4r6zhwA6tiuBFM2ipHCkDfDnLACesE2x59izugKlJQL7wN&X-Amz-Signature=02349b77dab88770a5d612f2202548f2f7b76203638a3eff79ba9185c7660c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOCWFUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFeD4MWOWj1bdEON8xprk9eOOHovIS18Bylx5vSFNq5nAiEAitBrHKYszI8PlteyLxTm5mubE8M%2F5l3Gz5ku7mfsMSAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDPkQIb53HtQtIkCUCrcAzXhMRPMmT7JXOCRnBc%2B7SqSCNVe%2FU%2BVfmFdP6iF%2FDVOPnxSfV5xdjzwRciz%2BsOdI3Md6yTMe0Jmwk%2BuPB0W7XJbv8Bso0SZ89pmIg2oGY9TUuf59wd%2BvYgtQhZmborOmZukebUeegpe2BJOWCD9ZJJLUygTv0Z%2BvwaGd9yRDkGCk036%2BXNU%2FXs5Lgs02fvS52RDu45VMsCjxv9uvg9MxAETGA8cQcac1qSXuX0mIM%2BcT5VHXyVtjGBQUJxdqNDqiuM7LTfM8JWYA09V9YXatPypKnCwY%2BfrJeRp3RkWkKJrTLXtZbZzCym%2B9X4YoeDXotgQ6%2BHGFy096jt0HZGkEIDiaJaSpaahtZUNgNhoVCW%2BiqIdnWx9SdTo8CW%2BiJG2ur1dZqseESEzIKXJ639UaAewRy8z5JgiqVPNG31XqLneXS70LEorEfJOd9lpIrH1EOeh3aqVGYOt1kCo9FoMV2RlFss0p4tJ9wPlH%2F2KpLazS%2Fik3Tzwr9prbKCHdAC67YvnTvvO0QoPOCHHHUYnzyBlSbQ2R%2FSVxVxmT0woZJgkAMwp2nc8r56cL69EMGxrX6WDwc0KcNakp0NpBtjFfpRQibf7Ag7PbHtebeLx1K6fBEouv0gJAj4I7DJSMOSDmcQGOqUBc484fHszde7lXIbCGlZaTlRZ%2F8NpderNpPQRiPEq35hpbFWEXi97VjSb0mh1G%2Bjwd8eifGHJgFCv5rNTnYROoe2%2BVi8QOF8GoQBfoSh%2BTHQFBuez%2F4zJZQwGSYODyMmNsJEx0xJA52x2H9AEOSDWbXY0lUYfb8dDwtBdJznHi4Rawo4r6zhwA6tiuBFM2ipHCkDfDnLACesE2x59izugKlJQL7wN&X-Amz-Signature=3f6c9de2b12e0ba38328bf015da41d2e09003ea79f027ca9ced6738a72840825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
