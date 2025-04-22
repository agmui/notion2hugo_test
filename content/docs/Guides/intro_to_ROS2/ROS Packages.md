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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZTZZXK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHeLCbs9YrRlvlMDHIc1UuDCtJiadrRwUXvpRnqU7Lw0AiEAmaEsYBjxdXcNmcmWCs7I73m6I%2BqIOnuaDlQ46dui10YqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BYEdarsA5BZU3x8CrcA8dGEKJrsk6OcMAgtgymz0fLshqiFejYroP6U%2BoFcX6OUIrdSPFEyPunuFM3kuamVUuaPnVaPgOlgkc52XwlR5Ff12NmXfWveEdHy%2B6vPD17VbA6ULroJp%2B2jwMhwwIlzLUmPBxR2IlBdpq6t8NZB6x%2BZ5b2FwWMfBu2udhMwCuHjYXINF9cIKCaWYPQK9%2BH4Zq5weWBruyWCuyTXsDv35fP6MqhRbCBBIntn09hffgcy91JzmG7aFl%2FVbItvTdH5nsdRwqA%2FeDX%2Bt3aoZ3pPZKDNun0LCZ6nvBdOsLZASp2%2F97Krgxcu3t9q%2FT12GaV5nMkLhktHUaGmAMKzJdEeFitkJvYakAxMxCgOnngHcXEmjdp0atWOqwCucTQIVxn6Z4HLoKwCcUPhvB9%2FFrYdw9tNF%2BCHhqX9YVGend6vt4RxHuOzCKLm%2FZvJ1CavM5WRJ9Karjirc1XsaAuXZz3ZjPej3dbQn6C3qFNZsTSwziBsY%2F5kNp3Z8HXUuku6KCyuU4n5elmeL24Pp0DIHD0Wum2FncMI58ima48buCwFkQiOlx%2BoeoPxMkXPVY4nVmiSwdDPX%2F4lvYiBksrokc3Bpi%2BumktmSR%2BYsVzAGmMwUqSn%2B11PdCvXHCiJsByMPaPnsAGOqUBUnWvrfM8mpO7FsfSwns8wHbFTfskYjH6DAPq%2F4H7GfJWAdB7lZTlOfm8%2B6dMFWXiT7EtbG8CnE8EGU0X%2FAVkVnh4SsADscjIM3YPY7q07cQAWkLQwFK2epvCnX80HgJa5FF3tUZM35PBcLVuxDlYymDv7KvaA057yCzlcQ0X9u74dd3GbpI%2FtnR9XiAx7S7s0Ikw8tWlfCXNF%2FJBpLzb7Ki5wDau&X-Amz-Signature=8bf6050034a12808032a37c50c28d67fc5327c5109005072cb87b646c408cedd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZTZZXK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHeLCbs9YrRlvlMDHIc1UuDCtJiadrRwUXvpRnqU7Lw0AiEAmaEsYBjxdXcNmcmWCs7I73m6I%2BqIOnuaDlQ46dui10YqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BYEdarsA5BZU3x8CrcA8dGEKJrsk6OcMAgtgymz0fLshqiFejYroP6U%2BoFcX6OUIrdSPFEyPunuFM3kuamVUuaPnVaPgOlgkc52XwlR5Ff12NmXfWveEdHy%2B6vPD17VbA6ULroJp%2B2jwMhwwIlzLUmPBxR2IlBdpq6t8NZB6x%2BZ5b2FwWMfBu2udhMwCuHjYXINF9cIKCaWYPQK9%2BH4Zq5weWBruyWCuyTXsDv35fP6MqhRbCBBIntn09hffgcy91JzmG7aFl%2FVbItvTdH5nsdRwqA%2FeDX%2Bt3aoZ3pPZKDNun0LCZ6nvBdOsLZASp2%2F97Krgxcu3t9q%2FT12GaV5nMkLhktHUaGmAMKzJdEeFitkJvYakAxMxCgOnngHcXEmjdp0atWOqwCucTQIVxn6Z4HLoKwCcUPhvB9%2FFrYdw9tNF%2BCHhqX9YVGend6vt4RxHuOzCKLm%2FZvJ1CavM5WRJ9Karjirc1XsaAuXZz3ZjPej3dbQn6C3qFNZsTSwziBsY%2F5kNp3Z8HXUuku6KCyuU4n5elmeL24Pp0DIHD0Wum2FncMI58ima48buCwFkQiOlx%2BoeoPxMkXPVY4nVmiSwdDPX%2F4lvYiBksrokc3Bpi%2BumktmSR%2BYsVzAGmMwUqSn%2B11PdCvXHCiJsByMPaPnsAGOqUBUnWvrfM8mpO7FsfSwns8wHbFTfskYjH6DAPq%2F4H7GfJWAdB7lZTlOfm8%2B6dMFWXiT7EtbG8CnE8EGU0X%2FAVkVnh4SsADscjIM3YPY7q07cQAWkLQwFK2epvCnX80HgJa5FF3tUZM35PBcLVuxDlYymDv7KvaA057yCzlcQ0X9u74dd3GbpI%2FtnR9XiAx7S7s0Ikw8tWlfCXNF%2FJBpLzb7Ki5wDau&X-Amz-Signature=2fd8d7a36bfbd30d85aa7f849cba04fdcf522952965fa0d7eae4c16ec049fcd7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZTZZXK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHeLCbs9YrRlvlMDHIc1UuDCtJiadrRwUXvpRnqU7Lw0AiEAmaEsYBjxdXcNmcmWCs7I73m6I%2BqIOnuaDlQ46dui10YqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BYEdarsA5BZU3x8CrcA8dGEKJrsk6OcMAgtgymz0fLshqiFejYroP6U%2BoFcX6OUIrdSPFEyPunuFM3kuamVUuaPnVaPgOlgkc52XwlR5Ff12NmXfWveEdHy%2B6vPD17VbA6ULroJp%2B2jwMhwwIlzLUmPBxR2IlBdpq6t8NZB6x%2BZ5b2FwWMfBu2udhMwCuHjYXINF9cIKCaWYPQK9%2BH4Zq5weWBruyWCuyTXsDv35fP6MqhRbCBBIntn09hffgcy91JzmG7aFl%2FVbItvTdH5nsdRwqA%2FeDX%2Bt3aoZ3pPZKDNun0LCZ6nvBdOsLZASp2%2F97Krgxcu3t9q%2FT12GaV5nMkLhktHUaGmAMKzJdEeFitkJvYakAxMxCgOnngHcXEmjdp0atWOqwCucTQIVxn6Z4HLoKwCcUPhvB9%2FFrYdw9tNF%2BCHhqX9YVGend6vt4RxHuOzCKLm%2FZvJ1CavM5WRJ9Karjirc1XsaAuXZz3ZjPej3dbQn6C3qFNZsTSwziBsY%2F5kNp3Z8HXUuku6KCyuU4n5elmeL24Pp0DIHD0Wum2FncMI58ima48buCwFkQiOlx%2BoeoPxMkXPVY4nVmiSwdDPX%2F4lvYiBksrokc3Bpi%2BumktmSR%2BYsVzAGmMwUqSn%2B11PdCvXHCiJsByMPaPnsAGOqUBUnWvrfM8mpO7FsfSwns8wHbFTfskYjH6DAPq%2F4H7GfJWAdB7lZTlOfm8%2B6dMFWXiT7EtbG8CnE8EGU0X%2FAVkVnh4SsADscjIM3YPY7q07cQAWkLQwFK2epvCnX80HgJa5FF3tUZM35PBcLVuxDlYymDv7KvaA057yCzlcQ0X9u74dd3GbpI%2FtnR9XiAx7S7s0Ikw8tWlfCXNF%2FJBpLzb7Ki5wDau&X-Amz-Signature=cb3bc9ff675bf9adaf3b2de39aa53325f510c386dabb9602fc3342bfbf65180b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZTZZXK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHeLCbs9YrRlvlMDHIc1UuDCtJiadrRwUXvpRnqU7Lw0AiEAmaEsYBjxdXcNmcmWCs7I73m6I%2BqIOnuaDlQ46dui10YqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BYEdarsA5BZU3x8CrcA8dGEKJrsk6OcMAgtgymz0fLshqiFejYroP6U%2BoFcX6OUIrdSPFEyPunuFM3kuamVUuaPnVaPgOlgkc52XwlR5Ff12NmXfWveEdHy%2B6vPD17VbA6ULroJp%2B2jwMhwwIlzLUmPBxR2IlBdpq6t8NZB6x%2BZ5b2FwWMfBu2udhMwCuHjYXINF9cIKCaWYPQK9%2BH4Zq5weWBruyWCuyTXsDv35fP6MqhRbCBBIntn09hffgcy91JzmG7aFl%2FVbItvTdH5nsdRwqA%2FeDX%2Bt3aoZ3pPZKDNun0LCZ6nvBdOsLZASp2%2F97Krgxcu3t9q%2FT12GaV5nMkLhktHUaGmAMKzJdEeFitkJvYakAxMxCgOnngHcXEmjdp0atWOqwCucTQIVxn6Z4HLoKwCcUPhvB9%2FFrYdw9tNF%2BCHhqX9YVGend6vt4RxHuOzCKLm%2FZvJ1CavM5WRJ9Karjirc1XsaAuXZz3ZjPej3dbQn6C3qFNZsTSwziBsY%2F5kNp3Z8HXUuku6KCyuU4n5elmeL24Pp0DIHD0Wum2FncMI58ima48buCwFkQiOlx%2BoeoPxMkXPVY4nVmiSwdDPX%2F4lvYiBksrokc3Bpi%2BumktmSR%2BYsVzAGmMwUqSn%2B11PdCvXHCiJsByMPaPnsAGOqUBUnWvrfM8mpO7FsfSwns8wHbFTfskYjH6DAPq%2F4H7GfJWAdB7lZTlOfm8%2B6dMFWXiT7EtbG8CnE8EGU0X%2FAVkVnh4SsADscjIM3YPY7q07cQAWkLQwFK2epvCnX80HgJa5FF3tUZM35PBcLVuxDlYymDv7KvaA057yCzlcQ0X9u74dd3GbpI%2FtnR9XiAx7S7s0Ikw8tWlfCXNF%2FJBpLzb7Ki5wDau&X-Amz-Signature=06cccf6b1556fa8b509ba1d7358640a3e4abd96053a7c033ac60e3b8f6a676ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZTZZXK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHeLCbs9YrRlvlMDHIc1UuDCtJiadrRwUXvpRnqU7Lw0AiEAmaEsYBjxdXcNmcmWCs7I73m6I%2BqIOnuaDlQ46dui10YqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BYEdarsA5BZU3x8CrcA8dGEKJrsk6OcMAgtgymz0fLshqiFejYroP6U%2BoFcX6OUIrdSPFEyPunuFM3kuamVUuaPnVaPgOlgkc52XwlR5Ff12NmXfWveEdHy%2B6vPD17VbA6ULroJp%2B2jwMhwwIlzLUmPBxR2IlBdpq6t8NZB6x%2BZ5b2FwWMfBu2udhMwCuHjYXINF9cIKCaWYPQK9%2BH4Zq5weWBruyWCuyTXsDv35fP6MqhRbCBBIntn09hffgcy91JzmG7aFl%2FVbItvTdH5nsdRwqA%2FeDX%2Bt3aoZ3pPZKDNun0LCZ6nvBdOsLZASp2%2F97Krgxcu3t9q%2FT12GaV5nMkLhktHUaGmAMKzJdEeFitkJvYakAxMxCgOnngHcXEmjdp0atWOqwCucTQIVxn6Z4HLoKwCcUPhvB9%2FFrYdw9tNF%2BCHhqX9YVGend6vt4RxHuOzCKLm%2FZvJ1CavM5WRJ9Karjirc1XsaAuXZz3ZjPej3dbQn6C3qFNZsTSwziBsY%2F5kNp3Z8HXUuku6KCyuU4n5elmeL24Pp0DIHD0Wum2FncMI58ima48buCwFkQiOlx%2BoeoPxMkXPVY4nVmiSwdDPX%2F4lvYiBksrokc3Bpi%2BumktmSR%2BYsVzAGmMwUqSn%2B11PdCvXHCiJsByMPaPnsAGOqUBUnWvrfM8mpO7FsfSwns8wHbFTfskYjH6DAPq%2F4H7GfJWAdB7lZTlOfm8%2B6dMFWXiT7EtbG8CnE8EGU0X%2FAVkVnh4SsADscjIM3YPY7q07cQAWkLQwFK2epvCnX80HgJa5FF3tUZM35PBcLVuxDlYymDv7KvaA057yCzlcQ0X9u74dd3GbpI%2FtnR9XiAx7S7s0Ikw8tWlfCXNF%2FJBpLzb7Ki5wDau&X-Amz-Signature=ff73ffc16e8e50808e28683f9bfbe2f53781a050feb416681e7128c55831baa5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZTZZXK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHeLCbs9YrRlvlMDHIc1UuDCtJiadrRwUXvpRnqU7Lw0AiEAmaEsYBjxdXcNmcmWCs7I73m6I%2BqIOnuaDlQ46dui10YqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BYEdarsA5BZU3x8CrcA8dGEKJrsk6OcMAgtgymz0fLshqiFejYroP6U%2BoFcX6OUIrdSPFEyPunuFM3kuamVUuaPnVaPgOlgkc52XwlR5Ff12NmXfWveEdHy%2B6vPD17VbA6ULroJp%2B2jwMhwwIlzLUmPBxR2IlBdpq6t8NZB6x%2BZ5b2FwWMfBu2udhMwCuHjYXINF9cIKCaWYPQK9%2BH4Zq5weWBruyWCuyTXsDv35fP6MqhRbCBBIntn09hffgcy91JzmG7aFl%2FVbItvTdH5nsdRwqA%2FeDX%2Bt3aoZ3pPZKDNun0LCZ6nvBdOsLZASp2%2F97Krgxcu3t9q%2FT12GaV5nMkLhktHUaGmAMKzJdEeFitkJvYakAxMxCgOnngHcXEmjdp0atWOqwCucTQIVxn6Z4HLoKwCcUPhvB9%2FFrYdw9tNF%2BCHhqX9YVGend6vt4RxHuOzCKLm%2FZvJ1CavM5WRJ9Karjirc1XsaAuXZz3ZjPej3dbQn6C3qFNZsTSwziBsY%2F5kNp3Z8HXUuku6KCyuU4n5elmeL24Pp0DIHD0Wum2FncMI58ima48buCwFkQiOlx%2BoeoPxMkXPVY4nVmiSwdDPX%2F4lvYiBksrokc3Bpi%2BumktmSR%2BYsVzAGmMwUqSn%2B11PdCvXHCiJsByMPaPnsAGOqUBUnWvrfM8mpO7FsfSwns8wHbFTfskYjH6DAPq%2F4H7GfJWAdB7lZTlOfm8%2B6dMFWXiT7EtbG8CnE8EGU0X%2FAVkVnh4SsADscjIM3YPY7q07cQAWkLQwFK2epvCnX80HgJa5FF3tUZM35PBcLVuxDlYymDv7KvaA057yCzlcQ0X9u74dd3GbpI%2FtnR9XiAx7S7s0Ikw8tWlfCXNF%2FJBpLzb7Ki5wDau&X-Amz-Signature=3724067e8a9bb3e1b1d2ec43b0e0d89604fa3485f8ceda28d20b9fc41ef70987&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZTZZXK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHeLCbs9YrRlvlMDHIc1UuDCtJiadrRwUXvpRnqU7Lw0AiEAmaEsYBjxdXcNmcmWCs7I73m6I%2BqIOnuaDlQ46dui10YqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BYEdarsA5BZU3x8CrcA8dGEKJrsk6OcMAgtgymz0fLshqiFejYroP6U%2BoFcX6OUIrdSPFEyPunuFM3kuamVUuaPnVaPgOlgkc52XwlR5Ff12NmXfWveEdHy%2B6vPD17VbA6ULroJp%2B2jwMhwwIlzLUmPBxR2IlBdpq6t8NZB6x%2BZ5b2FwWMfBu2udhMwCuHjYXINF9cIKCaWYPQK9%2BH4Zq5weWBruyWCuyTXsDv35fP6MqhRbCBBIntn09hffgcy91JzmG7aFl%2FVbItvTdH5nsdRwqA%2FeDX%2Bt3aoZ3pPZKDNun0LCZ6nvBdOsLZASp2%2F97Krgxcu3t9q%2FT12GaV5nMkLhktHUaGmAMKzJdEeFitkJvYakAxMxCgOnngHcXEmjdp0atWOqwCucTQIVxn6Z4HLoKwCcUPhvB9%2FFrYdw9tNF%2BCHhqX9YVGend6vt4RxHuOzCKLm%2FZvJ1CavM5WRJ9Karjirc1XsaAuXZz3ZjPej3dbQn6C3qFNZsTSwziBsY%2F5kNp3Z8HXUuku6KCyuU4n5elmeL24Pp0DIHD0Wum2FncMI58ima48buCwFkQiOlx%2BoeoPxMkXPVY4nVmiSwdDPX%2F4lvYiBksrokc3Bpi%2BumktmSR%2BYsVzAGmMwUqSn%2B11PdCvXHCiJsByMPaPnsAGOqUBUnWvrfM8mpO7FsfSwns8wHbFTfskYjH6DAPq%2F4H7GfJWAdB7lZTlOfm8%2B6dMFWXiT7EtbG8CnE8EGU0X%2FAVkVnh4SsADscjIM3YPY7q07cQAWkLQwFK2epvCnX80HgJa5FF3tUZM35PBcLVuxDlYymDv7KvaA057yCzlcQ0X9u74dd3GbpI%2FtnR9XiAx7S7s0Ikw8tWlfCXNF%2FJBpLzb7Ki5wDau&X-Amz-Signature=a9f62b1374c26b2287344bdcd65febaaaccc6905289760312e45d3fce9f8a3d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
