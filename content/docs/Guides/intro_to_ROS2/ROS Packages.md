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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUK27T4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCjO3vQH%2BPwX9Zl8BHGDmZQHEddN0nh3ILLOfF0VPn8XQIgALidyu8ibNCMo2O1GYjf%2BkUaJg06ywOPpFVvw5FZvNkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIYastQExaizpyZ2CrcA8Hl5z1LTzesCMDCU4AJQZYfzN6eGfuwSwW6nydRl43CNMDGw0pJEvPHfxdkg86c7GJACmvH56tSxpUgLOf92VkjV2txnUbx0d55uxSr7J6N0FDH5AevjPKf8lDbcbshXW%2FacShmDvahRBZt2%2FivudZUJjdB1CqrNy3DN3hjxuILlX%2BevmkKlilNZMXYMNFauu7VFecWcOGogN4vfyNgxIY7nROmcgDpt2XRxMosGdBf08L%2FIyfWACKyz9qUK5LVTlgdUIidFFoPVPjg1pJNnTXKKEyxdo9dz%2BjYMBkn%2BmggNsmjiXc1rNZrbaoXxRxQxcJubyy8KqwhAKYT4rr5600kkg9yh7YBFxKrcXaaJbqKI13DYtNJRjHbSByN1dKJdm7E4B8NwPgP2kXK39sREJhnmFhQ6iEMF4mLoyeLEYjtRxOnB%2BMqNPFlI%2BQyJToRvQb8Ge4prYXgqIWshzeF5y%2FJxWU9uAAL%2BVxeQ6FkhyyA%2Fzv3Pn%2BviM7LIL5SyVh3jxrHlfMXJsdclWs29dg0Csa8kQgH6TZxqkZS6Gilevk6yRoqSuHE57z6xvJowlAPB%2BVdGG%2F6w20TT5seRhpxHYBuzxCBMDXbF3S6mE4jbqUn8qmGelwNutaKweMtMMiTm8QGOqUBGcCvBGnnuMG70cgpg11XG84v%2FcmfV6H0b0l9QHfR0xHZFuFYGqoHiPUVFKul3HlxF2Hs7e4GsNbrUtFT75R0f7E0rEI3B%2Fmf94RnJq1%2BDzr3iE4XYaVdsg63EakXulClkHGsxO2d66FEakBiEr%2FQjTd3HSxZH6VTrilN%2BpIdfvvTbaTsh153hrfX6NHU%2BuqsYPz2HYvSX8Ir14ChubfWA7jWt4LJ&X-Amz-Signature=922411e45bcfcedf9e8d6f8474bdc26447a7a0072e6e9a1d6a2252395d53d9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUK27T4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCjO3vQH%2BPwX9Zl8BHGDmZQHEddN0nh3ILLOfF0VPn8XQIgALidyu8ibNCMo2O1GYjf%2BkUaJg06ywOPpFVvw5FZvNkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIYastQExaizpyZ2CrcA8Hl5z1LTzesCMDCU4AJQZYfzN6eGfuwSwW6nydRl43CNMDGw0pJEvPHfxdkg86c7GJACmvH56tSxpUgLOf92VkjV2txnUbx0d55uxSr7J6N0FDH5AevjPKf8lDbcbshXW%2FacShmDvahRBZt2%2FivudZUJjdB1CqrNy3DN3hjxuILlX%2BevmkKlilNZMXYMNFauu7VFecWcOGogN4vfyNgxIY7nROmcgDpt2XRxMosGdBf08L%2FIyfWACKyz9qUK5LVTlgdUIidFFoPVPjg1pJNnTXKKEyxdo9dz%2BjYMBkn%2BmggNsmjiXc1rNZrbaoXxRxQxcJubyy8KqwhAKYT4rr5600kkg9yh7YBFxKrcXaaJbqKI13DYtNJRjHbSByN1dKJdm7E4B8NwPgP2kXK39sREJhnmFhQ6iEMF4mLoyeLEYjtRxOnB%2BMqNPFlI%2BQyJToRvQb8Ge4prYXgqIWshzeF5y%2FJxWU9uAAL%2BVxeQ6FkhyyA%2Fzv3Pn%2BviM7LIL5SyVh3jxrHlfMXJsdclWs29dg0Csa8kQgH6TZxqkZS6Gilevk6yRoqSuHE57z6xvJowlAPB%2BVdGG%2F6w20TT5seRhpxHYBuzxCBMDXbF3S6mE4jbqUn8qmGelwNutaKweMtMMiTm8QGOqUBGcCvBGnnuMG70cgpg11XG84v%2FcmfV6H0b0l9QHfR0xHZFuFYGqoHiPUVFKul3HlxF2Hs7e4GsNbrUtFT75R0f7E0rEI3B%2Fmf94RnJq1%2BDzr3iE4XYaVdsg63EakXulClkHGsxO2d66FEakBiEr%2FQjTd3HSxZH6VTrilN%2BpIdfvvTbaTsh153hrfX6NHU%2BuqsYPz2HYvSX8Ir14ChubfWA7jWt4LJ&X-Amz-Signature=2990e001bed76949753734e634d8e146abb834d50f131c04efcdd531602a9788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUK27T4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCjO3vQH%2BPwX9Zl8BHGDmZQHEddN0nh3ILLOfF0VPn8XQIgALidyu8ibNCMo2O1GYjf%2BkUaJg06ywOPpFVvw5FZvNkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIYastQExaizpyZ2CrcA8Hl5z1LTzesCMDCU4AJQZYfzN6eGfuwSwW6nydRl43CNMDGw0pJEvPHfxdkg86c7GJACmvH56tSxpUgLOf92VkjV2txnUbx0d55uxSr7J6N0FDH5AevjPKf8lDbcbshXW%2FacShmDvahRBZt2%2FivudZUJjdB1CqrNy3DN3hjxuILlX%2BevmkKlilNZMXYMNFauu7VFecWcOGogN4vfyNgxIY7nROmcgDpt2XRxMosGdBf08L%2FIyfWACKyz9qUK5LVTlgdUIidFFoPVPjg1pJNnTXKKEyxdo9dz%2BjYMBkn%2BmggNsmjiXc1rNZrbaoXxRxQxcJubyy8KqwhAKYT4rr5600kkg9yh7YBFxKrcXaaJbqKI13DYtNJRjHbSByN1dKJdm7E4B8NwPgP2kXK39sREJhnmFhQ6iEMF4mLoyeLEYjtRxOnB%2BMqNPFlI%2BQyJToRvQb8Ge4prYXgqIWshzeF5y%2FJxWU9uAAL%2BVxeQ6FkhyyA%2Fzv3Pn%2BviM7LIL5SyVh3jxrHlfMXJsdclWs29dg0Csa8kQgH6TZxqkZS6Gilevk6yRoqSuHE57z6xvJowlAPB%2BVdGG%2F6w20TT5seRhpxHYBuzxCBMDXbF3S6mE4jbqUn8qmGelwNutaKweMtMMiTm8QGOqUBGcCvBGnnuMG70cgpg11XG84v%2FcmfV6H0b0l9QHfR0xHZFuFYGqoHiPUVFKul3HlxF2Hs7e4GsNbrUtFT75R0f7E0rEI3B%2Fmf94RnJq1%2BDzr3iE4XYaVdsg63EakXulClkHGsxO2d66FEakBiEr%2FQjTd3HSxZH6VTrilN%2BpIdfvvTbaTsh153hrfX6NHU%2BuqsYPz2HYvSX8Ir14ChubfWA7jWt4LJ&X-Amz-Signature=bea6578a8a7da4552140a7fc97c652df243eb060bb52eedb8b9d72a852e9179a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUK27T4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCjO3vQH%2BPwX9Zl8BHGDmZQHEddN0nh3ILLOfF0VPn8XQIgALidyu8ibNCMo2O1GYjf%2BkUaJg06ywOPpFVvw5FZvNkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIYastQExaizpyZ2CrcA8Hl5z1LTzesCMDCU4AJQZYfzN6eGfuwSwW6nydRl43CNMDGw0pJEvPHfxdkg86c7GJACmvH56tSxpUgLOf92VkjV2txnUbx0d55uxSr7J6N0FDH5AevjPKf8lDbcbshXW%2FacShmDvahRBZt2%2FivudZUJjdB1CqrNy3DN3hjxuILlX%2BevmkKlilNZMXYMNFauu7VFecWcOGogN4vfyNgxIY7nROmcgDpt2XRxMosGdBf08L%2FIyfWACKyz9qUK5LVTlgdUIidFFoPVPjg1pJNnTXKKEyxdo9dz%2BjYMBkn%2BmggNsmjiXc1rNZrbaoXxRxQxcJubyy8KqwhAKYT4rr5600kkg9yh7YBFxKrcXaaJbqKI13DYtNJRjHbSByN1dKJdm7E4B8NwPgP2kXK39sREJhnmFhQ6iEMF4mLoyeLEYjtRxOnB%2BMqNPFlI%2BQyJToRvQb8Ge4prYXgqIWshzeF5y%2FJxWU9uAAL%2BVxeQ6FkhyyA%2Fzv3Pn%2BviM7LIL5SyVh3jxrHlfMXJsdclWs29dg0Csa8kQgH6TZxqkZS6Gilevk6yRoqSuHE57z6xvJowlAPB%2BVdGG%2F6w20TT5seRhpxHYBuzxCBMDXbF3S6mE4jbqUn8qmGelwNutaKweMtMMiTm8QGOqUBGcCvBGnnuMG70cgpg11XG84v%2FcmfV6H0b0l9QHfR0xHZFuFYGqoHiPUVFKul3HlxF2Hs7e4GsNbrUtFT75R0f7E0rEI3B%2Fmf94RnJq1%2BDzr3iE4XYaVdsg63EakXulClkHGsxO2d66FEakBiEr%2FQjTd3HSxZH6VTrilN%2BpIdfvvTbaTsh153hrfX6NHU%2BuqsYPz2HYvSX8Ir14ChubfWA7jWt4LJ&X-Amz-Signature=892f33502bc990c5f08f793c245be6fad7a9f72607e728d189a4e6d3b51ae443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUK27T4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCjO3vQH%2BPwX9Zl8BHGDmZQHEddN0nh3ILLOfF0VPn8XQIgALidyu8ibNCMo2O1GYjf%2BkUaJg06ywOPpFVvw5FZvNkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIYastQExaizpyZ2CrcA8Hl5z1LTzesCMDCU4AJQZYfzN6eGfuwSwW6nydRl43CNMDGw0pJEvPHfxdkg86c7GJACmvH56tSxpUgLOf92VkjV2txnUbx0d55uxSr7J6N0FDH5AevjPKf8lDbcbshXW%2FacShmDvahRBZt2%2FivudZUJjdB1CqrNy3DN3hjxuILlX%2BevmkKlilNZMXYMNFauu7VFecWcOGogN4vfyNgxIY7nROmcgDpt2XRxMosGdBf08L%2FIyfWACKyz9qUK5LVTlgdUIidFFoPVPjg1pJNnTXKKEyxdo9dz%2BjYMBkn%2BmggNsmjiXc1rNZrbaoXxRxQxcJubyy8KqwhAKYT4rr5600kkg9yh7YBFxKrcXaaJbqKI13DYtNJRjHbSByN1dKJdm7E4B8NwPgP2kXK39sREJhnmFhQ6iEMF4mLoyeLEYjtRxOnB%2BMqNPFlI%2BQyJToRvQb8Ge4prYXgqIWshzeF5y%2FJxWU9uAAL%2BVxeQ6FkhyyA%2Fzv3Pn%2BviM7LIL5SyVh3jxrHlfMXJsdclWs29dg0Csa8kQgH6TZxqkZS6Gilevk6yRoqSuHE57z6xvJowlAPB%2BVdGG%2F6w20TT5seRhpxHYBuzxCBMDXbF3S6mE4jbqUn8qmGelwNutaKweMtMMiTm8QGOqUBGcCvBGnnuMG70cgpg11XG84v%2FcmfV6H0b0l9QHfR0xHZFuFYGqoHiPUVFKul3HlxF2Hs7e4GsNbrUtFT75R0f7E0rEI3B%2Fmf94RnJq1%2BDzr3iE4XYaVdsg63EakXulClkHGsxO2d66FEakBiEr%2FQjTd3HSxZH6VTrilN%2BpIdfvvTbaTsh153hrfX6NHU%2BuqsYPz2HYvSX8Ir14ChubfWA7jWt4LJ&X-Amz-Signature=b5c218e63147af2cceb1af3cb778053d8631ab808fadd73475244a6672713b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUK27T4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCjO3vQH%2BPwX9Zl8BHGDmZQHEddN0nh3ILLOfF0VPn8XQIgALidyu8ibNCMo2O1GYjf%2BkUaJg06ywOPpFVvw5FZvNkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIYastQExaizpyZ2CrcA8Hl5z1LTzesCMDCU4AJQZYfzN6eGfuwSwW6nydRl43CNMDGw0pJEvPHfxdkg86c7GJACmvH56tSxpUgLOf92VkjV2txnUbx0d55uxSr7J6N0FDH5AevjPKf8lDbcbshXW%2FacShmDvahRBZt2%2FivudZUJjdB1CqrNy3DN3hjxuILlX%2BevmkKlilNZMXYMNFauu7VFecWcOGogN4vfyNgxIY7nROmcgDpt2XRxMosGdBf08L%2FIyfWACKyz9qUK5LVTlgdUIidFFoPVPjg1pJNnTXKKEyxdo9dz%2BjYMBkn%2BmggNsmjiXc1rNZrbaoXxRxQxcJubyy8KqwhAKYT4rr5600kkg9yh7YBFxKrcXaaJbqKI13DYtNJRjHbSByN1dKJdm7E4B8NwPgP2kXK39sREJhnmFhQ6iEMF4mLoyeLEYjtRxOnB%2BMqNPFlI%2BQyJToRvQb8Ge4prYXgqIWshzeF5y%2FJxWU9uAAL%2BVxeQ6FkhyyA%2Fzv3Pn%2BviM7LIL5SyVh3jxrHlfMXJsdclWs29dg0Csa8kQgH6TZxqkZS6Gilevk6yRoqSuHE57z6xvJowlAPB%2BVdGG%2F6w20TT5seRhpxHYBuzxCBMDXbF3S6mE4jbqUn8qmGelwNutaKweMtMMiTm8QGOqUBGcCvBGnnuMG70cgpg11XG84v%2FcmfV6H0b0l9QHfR0xHZFuFYGqoHiPUVFKul3HlxF2Hs7e4GsNbrUtFT75R0f7E0rEI3B%2Fmf94RnJq1%2BDzr3iE4XYaVdsg63EakXulClkHGsxO2d66FEakBiEr%2FQjTd3HSxZH6VTrilN%2BpIdfvvTbaTsh153hrfX6NHU%2BuqsYPz2HYvSX8Ir14ChubfWA7jWt4LJ&X-Amz-Signature=2cbf8b7e9ccc2e598c3a58dd806ca17e55d113b73875ad448477c56b5346088b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUK27T4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCjO3vQH%2BPwX9Zl8BHGDmZQHEddN0nh3ILLOfF0VPn8XQIgALidyu8ibNCMo2O1GYjf%2BkUaJg06ywOPpFVvw5FZvNkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIYastQExaizpyZ2CrcA8Hl5z1LTzesCMDCU4AJQZYfzN6eGfuwSwW6nydRl43CNMDGw0pJEvPHfxdkg86c7GJACmvH56tSxpUgLOf92VkjV2txnUbx0d55uxSr7J6N0FDH5AevjPKf8lDbcbshXW%2FacShmDvahRBZt2%2FivudZUJjdB1CqrNy3DN3hjxuILlX%2BevmkKlilNZMXYMNFauu7VFecWcOGogN4vfyNgxIY7nROmcgDpt2XRxMosGdBf08L%2FIyfWACKyz9qUK5LVTlgdUIidFFoPVPjg1pJNnTXKKEyxdo9dz%2BjYMBkn%2BmggNsmjiXc1rNZrbaoXxRxQxcJubyy8KqwhAKYT4rr5600kkg9yh7YBFxKrcXaaJbqKI13DYtNJRjHbSByN1dKJdm7E4B8NwPgP2kXK39sREJhnmFhQ6iEMF4mLoyeLEYjtRxOnB%2BMqNPFlI%2BQyJToRvQb8Ge4prYXgqIWshzeF5y%2FJxWU9uAAL%2BVxeQ6FkhyyA%2Fzv3Pn%2BviM7LIL5SyVh3jxrHlfMXJsdclWs29dg0Csa8kQgH6TZxqkZS6Gilevk6yRoqSuHE57z6xvJowlAPB%2BVdGG%2F6w20TT5seRhpxHYBuzxCBMDXbF3S6mE4jbqUn8qmGelwNutaKweMtMMiTm8QGOqUBGcCvBGnnuMG70cgpg11XG84v%2FcmfV6H0b0l9QHfR0xHZFuFYGqoHiPUVFKul3HlxF2Hs7e4GsNbrUtFT75R0f7E0rEI3B%2Fmf94RnJq1%2BDzr3iE4XYaVdsg63EakXulClkHGsxO2d66FEakBiEr%2FQjTd3HSxZH6VTrilN%2BpIdfvvTbaTsh153hrfX6NHU%2BuqsYPz2HYvSX8Ir14ChubfWA7jWt4LJ&X-Amz-Signature=f3cb2cf64fd619fb095ef3a4ad529360e20bbce894ba91797779b49dda93a412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
