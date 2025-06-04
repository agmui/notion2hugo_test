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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIXJHID%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDhQImurKbL5eJpN%2F5r3usyk8f3pmnj1r4yf7y9Tt4xAgIgd1FJn%2BjjGZ2t5iUIeDCBLiZkKgajUqOI%2F4zAOyVX9QQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPeW%2FfhGNwFn0h8%2FqSrcA64EZ0ycc8PcJi1FffWvmAYwGS6cuWV7Vki4jlMbqm0beNPCNzAjeJkbK4CNtuDMTSwIbTf1%2BY0cVeX4l4040f4U5SVxQ3ICBRErZByinLoZinF6MCe%2FCXYb3LDEB%2FzsqoVC4MGGiEPpnoUOvdfFnGdSz2Kb37XcNAqF7gnNc5sUv8WkHPkEiDuw12mq0dVD4s3sQn84CN6oiZaLiEPZzm0PB9yXyQTO2imvlMXE74eh1xEHE9tJMP9HFMJV3n5hjZOeJk5IziBfNXaRYFMe%2FzLhr41yd9yOWIj01Um5cdmlzeIp%2BJUBpKz4wnJo0JGeqhRoh8YSBs8N%2F7CBgaFuyaNZpmS7SDgr52hkWC71s3815ZO2HjDSbk47LUbDlBu6Nl7zI%2FrsOp0GBhF%2Fn%2BHqcwBv2CEdgjbjtxAMopxsYJe%2BUOrAzk6XG9Yz0H0k4UrGPW7In4U%2B8YkBoBiyBjRls9X4Tn7BXJzHHO%2BlSJt0ZGeY0NpJfwi1KB%2FYYtyrhe%2BntGMu4Zd22CP2bDXE20WiIHn0ogo4lXNo6%2FFiuqiKqFE%2B0IdW3pEcMnenzqbbHhjT5Xhs%2Bz%2FHMRfLr17AmZm7J5zaRTeTLrDNhNL6YvRi2ep1PFitxt8vowwLbBA0MLPh%2FsEGOqUBSk6POSB8thd3jk1zsm6DvumDKdh99vyV2UBhkanOjeFMMfxXSObytVG1%2BVjRMqE3NGjkveb44X69Riof1P6P2xBHAdhGcWJh4rpzsY6T6e5YgVRHV4BVZTC9o9T%2BQakN1HV%2BH%2BcPzP7SVQLqYC8XA1hx4Rv5Jj54qVd9mAjyyyMYxRFPNyv5H3qTlMGZnT5bk4s5HWcjeGbLhIYde72zInTbGyMv&X-Amz-Signature=b917b133b920da07a500551efd798197c2fac66ef2e46c19f51dfe13051d5bf1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIXJHID%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDhQImurKbL5eJpN%2F5r3usyk8f3pmnj1r4yf7y9Tt4xAgIgd1FJn%2BjjGZ2t5iUIeDCBLiZkKgajUqOI%2F4zAOyVX9QQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPeW%2FfhGNwFn0h8%2FqSrcA64EZ0ycc8PcJi1FffWvmAYwGS6cuWV7Vki4jlMbqm0beNPCNzAjeJkbK4CNtuDMTSwIbTf1%2BY0cVeX4l4040f4U5SVxQ3ICBRErZByinLoZinF6MCe%2FCXYb3LDEB%2FzsqoVC4MGGiEPpnoUOvdfFnGdSz2Kb37XcNAqF7gnNc5sUv8WkHPkEiDuw12mq0dVD4s3sQn84CN6oiZaLiEPZzm0PB9yXyQTO2imvlMXE74eh1xEHE9tJMP9HFMJV3n5hjZOeJk5IziBfNXaRYFMe%2FzLhr41yd9yOWIj01Um5cdmlzeIp%2BJUBpKz4wnJo0JGeqhRoh8YSBs8N%2F7CBgaFuyaNZpmS7SDgr52hkWC71s3815ZO2HjDSbk47LUbDlBu6Nl7zI%2FrsOp0GBhF%2Fn%2BHqcwBv2CEdgjbjtxAMopxsYJe%2BUOrAzk6XG9Yz0H0k4UrGPW7In4U%2B8YkBoBiyBjRls9X4Tn7BXJzHHO%2BlSJt0ZGeY0NpJfwi1KB%2FYYtyrhe%2BntGMu4Zd22CP2bDXE20WiIHn0ogo4lXNo6%2FFiuqiKqFE%2B0IdW3pEcMnenzqbbHhjT5Xhs%2Bz%2FHMRfLr17AmZm7J5zaRTeTLrDNhNL6YvRi2ep1PFitxt8vowwLbBA0MLPh%2FsEGOqUBSk6POSB8thd3jk1zsm6DvumDKdh99vyV2UBhkanOjeFMMfxXSObytVG1%2BVjRMqE3NGjkveb44X69Riof1P6P2xBHAdhGcWJh4rpzsY6T6e5YgVRHV4BVZTC9o9T%2BQakN1HV%2BH%2BcPzP7SVQLqYC8XA1hx4Rv5Jj54qVd9mAjyyyMYxRFPNyv5H3qTlMGZnT5bk4s5HWcjeGbLhIYde72zInTbGyMv&X-Amz-Signature=53ab038d9ad9f182210f1adba6e45e016af6f22f315b407aa72452b1f2b62350&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIXJHID%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDhQImurKbL5eJpN%2F5r3usyk8f3pmnj1r4yf7y9Tt4xAgIgd1FJn%2BjjGZ2t5iUIeDCBLiZkKgajUqOI%2F4zAOyVX9QQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPeW%2FfhGNwFn0h8%2FqSrcA64EZ0ycc8PcJi1FffWvmAYwGS6cuWV7Vki4jlMbqm0beNPCNzAjeJkbK4CNtuDMTSwIbTf1%2BY0cVeX4l4040f4U5SVxQ3ICBRErZByinLoZinF6MCe%2FCXYb3LDEB%2FzsqoVC4MGGiEPpnoUOvdfFnGdSz2Kb37XcNAqF7gnNc5sUv8WkHPkEiDuw12mq0dVD4s3sQn84CN6oiZaLiEPZzm0PB9yXyQTO2imvlMXE74eh1xEHE9tJMP9HFMJV3n5hjZOeJk5IziBfNXaRYFMe%2FzLhr41yd9yOWIj01Um5cdmlzeIp%2BJUBpKz4wnJo0JGeqhRoh8YSBs8N%2F7CBgaFuyaNZpmS7SDgr52hkWC71s3815ZO2HjDSbk47LUbDlBu6Nl7zI%2FrsOp0GBhF%2Fn%2BHqcwBv2CEdgjbjtxAMopxsYJe%2BUOrAzk6XG9Yz0H0k4UrGPW7In4U%2B8YkBoBiyBjRls9X4Tn7BXJzHHO%2BlSJt0ZGeY0NpJfwi1KB%2FYYtyrhe%2BntGMu4Zd22CP2bDXE20WiIHn0ogo4lXNo6%2FFiuqiKqFE%2B0IdW3pEcMnenzqbbHhjT5Xhs%2Bz%2FHMRfLr17AmZm7J5zaRTeTLrDNhNL6YvRi2ep1PFitxt8vowwLbBA0MLPh%2FsEGOqUBSk6POSB8thd3jk1zsm6DvumDKdh99vyV2UBhkanOjeFMMfxXSObytVG1%2BVjRMqE3NGjkveb44X69Riof1P6P2xBHAdhGcWJh4rpzsY6T6e5YgVRHV4BVZTC9o9T%2BQakN1HV%2BH%2BcPzP7SVQLqYC8XA1hx4Rv5Jj54qVd9mAjyyyMYxRFPNyv5H3qTlMGZnT5bk4s5HWcjeGbLhIYde72zInTbGyMv&X-Amz-Signature=1db77a3a4b5d41415e85dd66ae7c82deca902d2a05823864bea86f4a0d82f39c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIXJHID%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDhQImurKbL5eJpN%2F5r3usyk8f3pmnj1r4yf7y9Tt4xAgIgd1FJn%2BjjGZ2t5iUIeDCBLiZkKgajUqOI%2F4zAOyVX9QQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPeW%2FfhGNwFn0h8%2FqSrcA64EZ0ycc8PcJi1FffWvmAYwGS6cuWV7Vki4jlMbqm0beNPCNzAjeJkbK4CNtuDMTSwIbTf1%2BY0cVeX4l4040f4U5SVxQ3ICBRErZByinLoZinF6MCe%2FCXYb3LDEB%2FzsqoVC4MGGiEPpnoUOvdfFnGdSz2Kb37XcNAqF7gnNc5sUv8WkHPkEiDuw12mq0dVD4s3sQn84CN6oiZaLiEPZzm0PB9yXyQTO2imvlMXE74eh1xEHE9tJMP9HFMJV3n5hjZOeJk5IziBfNXaRYFMe%2FzLhr41yd9yOWIj01Um5cdmlzeIp%2BJUBpKz4wnJo0JGeqhRoh8YSBs8N%2F7CBgaFuyaNZpmS7SDgr52hkWC71s3815ZO2HjDSbk47LUbDlBu6Nl7zI%2FrsOp0GBhF%2Fn%2BHqcwBv2CEdgjbjtxAMopxsYJe%2BUOrAzk6XG9Yz0H0k4UrGPW7In4U%2B8YkBoBiyBjRls9X4Tn7BXJzHHO%2BlSJt0ZGeY0NpJfwi1KB%2FYYtyrhe%2BntGMu4Zd22CP2bDXE20WiIHn0ogo4lXNo6%2FFiuqiKqFE%2B0IdW3pEcMnenzqbbHhjT5Xhs%2Bz%2FHMRfLr17AmZm7J5zaRTeTLrDNhNL6YvRi2ep1PFitxt8vowwLbBA0MLPh%2FsEGOqUBSk6POSB8thd3jk1zsm6DvumDKdh99vyV2UBhkanOjeFMMfxXSObytVG1%2BVjRMqE3NGjkveb44X69Riof1P6P2xBHAdhGcWJh4rpzsY6T6e5YgVRHV4BVZTC9o9T%2BQakN1HV%2BH%2BcPzP7SVQLqYC8XA1hx4Rv5Jj54qVd9mAjyyyMYxRFPNyv5H3qTlMGZnT5bk4s5HWcjeGbLhIYde72zInTbGyMv&X-Amz-Signature=826762bbd27b701c799d2a726fe45cdcb89796574abd9ede6dad8d56470350d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIXJHID%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDhQImurKbL5eJpN%2F5r3usyk8f3pmnj1r4yf7y9Tt4xAgIgd1FJn%2BjjGZ2t5iUIeDCBLiZkKgajUqOI%2F4zAOyVX9QQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPeW%2FfhGNwFn0h8%2FqSrcA64EZ0ycc8PcJi1FffWvmAYwGS6cuWV7Vki4jlMbqm0beNPCNzAjeJkbK4CNtuDMTSwIbTf1%2BY0cVeX4l4040f4U5SVxQ3ICBRErZByinLoZinF6MCe%2FCXYb3LDEB%2FzsqoVC4MGGiEPpnoUOvdfFnGdSz2Kb37XcNAqF7gnNc5sUv8WkHPkEiDuw12mq0dVD4s3sQn84CN6oiZaLiEPZzm0PB9yXyQTO2imvlMXE74eh1xEHE9tJMP9HFMJV3n5hjZOeJk5IziBfNXaRYFMe%2FzLhr41yd9yOWIj01Um5cdmlzeIp%2BJUBpKz4wnJo0JGeqhRoh8YSBs8N%2F7CBgaFuyaNZpmS7SDgr52hkWC71s3815ZO2HjDSbk47LUbDlBu6Nl7zI%2FrsOp0GBhF%2Fn%2BHqcwBv2CEdgjbjtxAMopxsYJe%2BUOrAzk6XG9Yz0H0k4UrGPW7In4U%2B8YkBoBiyBjRls9X4Tn7BXJzHHO%2BlSJt0ZGeY0NpJfwi1KB%2FYYtyrhe%2BntGMu4Zd22CP2bDXE20WiIHn0ogo4lXNo6%2FFiuqiKqFE%2B0IdW3pEcMnenzqbbHhjT5Xhs%2Bz%2FHMRfLr17AmZm7J5zaRTeTLrDNhNL6YvRi2ep1PFitxt8vowwLbBA0MLPh%2FsEGOqUBSk6POSB8thd3jk1zsm6DvumDKdh99vyV2UBhkanOjeFMMfxXSObytVG1%2BVjRMqE3NGjkveb44X69Riof1P6P2xBHAdhGcWJh4rpzsY6T6e5YgVRHV4BVZTC9o9T%2BQakN1HV%2BH%2BcPzP7SVQLqYC8XA1hx4Rv5Jj54qVd9mAjyyyMYxRFPNyv5H3qTlMGZnT5bk4s5HWcjeGbLhIYde72zInTbGyMv&X-Amz-Signature=cea6423b949c1a571dea0c8d8be2a986982d8d10a7e75b32fa004ef5b9703803&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIXJHID%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDhQImurKbL5eJpN%2F5r3usyk8f3pmnj1r4yf7y9Tt4xAgIgd1FJn%2BjjGZ2t5iUIeDCBLiZkKgajUqOI%2F4zAOyVX9QQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPeW%2FfhGNwFn0h8%2FqSrcA64EZ0ycc8PcJi1FffWvmAYwGS6cuWV7Vki4jlMbqm0beNPCNzAjeJkbK4CNtuDMTSwIbTf1%2BY0cVeX4l4040f4U5SVxQ3ICBRErZByinLoZinF6MCe%2FCXYb3LDEB%2FzsqoVC4MGGiEPpnoUOvdfFnGdSz2Kb37XcNAqF7gnNc5sUv8WkHPkEiDuw12mq0dVD4s3sQn84CN6oiZaLiEPZzm0PB9yXyQTO2imvlMXE74eh1xEHE9tJMP9HFMJV3n5hjZOeJk5IziBfNXaRYFMe%2FzLhr41yd9yOWIj01Um5cdmlzeIp%2BJUBpKz4wnJo0JGeqhRoh8YSBs8N%2F7CBgaFuyaNZpmS7SDgr52hkWC71s3815ZO2HjDSbk47LUbDlBu6Nl7zI%2FrsOp0GBhF%2Fn%2BHqcwBv2CEdgjbjtxAMopxsYJe%2BUOrAzk6XG9Yz0H0k4UrGPW7In4U%2B8YkBoBiyBjRls9X4Tn7BXJzHHO%2BlSJt0ZGeY0NpJfwi1KB%2FYYtyrhe%2BntGMu4Zd22CP2bDXE20WiIHn0ogo4lXNo6%2FFiuqiKqFE%2B0IdW3pEcMnenzqbbHhjT5Xhs%2Bz%2FHMRfLr17AmZm7J5zaRTeTLrDNhNL6YvRi2ep1PFitxt8vowwLbBA0MLPh%2FsEGOqUBSk6POSB8thd3jk1zsm6DvumDKdh99vyV2UBhkanOjeFMMfxXSObytVG1%2BVjRMqE3NGjkveb44X69Riof1P6P2xBHAdhGcWJh4rpzsY6T6e5YgVRHV4BVZTC9o9T%2BQakN1HV%2BH%2BcPzP7SVQLqYC8XA1hx4Rv5Jj54qVd9mAjyyyMYxRFPNyv5H3qTlMGZnT5bk4s5HWcjeGbLhIYde72zInTbGyMv&X-Amz-Signature=570a23c2f91a9caff4ad41c730a98c2a1ee80a8b76486e6fedbe5c5929fe8359&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIXJHID%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDhQImurKbL5eJpN%2F5r3usyk8f3pmnj1r4yf7y9Tt4xAgIgd1FJn%2BjjGZ2t5iUIeDCBLiZkKgajUqOI%2F4zAOyVX9QQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPeW%2FfhGNwFn0h8%2FqSrcA64EZ0ycc8PcJi1FffWvmAYwGS6cuWV7Vki4jlMbqm0beNPCNzAjeJkbK4CNtuDMTSwIbTf1%2BY0cVeX4l4040f4U5SVxQ3ICBRErZByinLoZinF6MCe%2FCXYb3LDEB%2FzsqoVC4MGGiEPpnoUOvdfFnGdSz2Kb37XcNAqF7gnNc5sUv8WkHPkEiDuw12mq0dVD4s3sQn84CN6oiZaLiEPZzm0PB9yXyQTO2imvlMXE74eh1xEHE9tJMP9HFMJV3n5hjZOeJk5IziBfNXaRYFMe%2FzLhr41yd9yOWIj01Um5cdmlzeIp%2BJUBpKz4wnJo0JGeqhRoh8YSBs8N%2F7CBgaFuyaNZpmS7SDgr52hkWC71s3815ZO2HjDSbk47LUbDlBu6Nl7zI%2FrsOp0GBhF%2Fn%2BHqcwBv2CEdgjbjtxAMopxsYJe%2BUOrAzk6XG9Yz0H0k4UrGPW7In4U%2B8YkBoBiyBjRls9X4Tn7BXJzHHO%2BlSJt0ZGeY0NpJfwi1KB%2FYYtyrhe%2BntGMu4Zd22CP2bDXE20WiIHn0ogo4lXNo6%2FFiuqiKqFE%2B0IdW3pEcMnenzqbbHhjT5Xhs%2Bz%2FHMRfLr17AmZm7J5zaRTeTLrDNhNL6YvRi2ep1PFitxt8vowwLbBA0MLPh%2FsEGOqUBSk6POSB8thd3jk1zsm6DvumDKdh99vyV2UBhkanOjeFMMfxXSObytVG1%2BVjRMqE3NGjkveb44X69Riof1P6P2xBHAdhGcWJh4rpzsY6T6e5YgVRHV4BVZTC9o9T%2BQakN1HV%2BH%2BcPzP7SVQLqYC8XA1hx4Rv5Jj54qVd9mAjyyyMYxRFPNyv5H3qTlMGZnT5bk4s5HWcjeGbLhIYde72zInTbGyMv&X-Amz-Signature=1797c1cf99710486c0789f26067da07e570ccdc7fe2f38f96882915fb145c37d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
