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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ3GBDP%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDsxe%2Bpv7jVDAaBMPL9SsahAScwJWzzMvmco%2BWh687ocgIgT3y3QsWQSTCc4zQfjHS7lBpVK2EVOhOCjb4wMVsnONYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuiFYu2DzD5NrT69SrcA2UTvx4Ms1FP0HQ6MZo4H7XRHbJ7m80K7Ekf0064fP9tA6GgMavyIjC2aTfE4NG60aWQ5Nh3t0JqcklrS7SqiV6%2BCcxdDwhu%2B29hQFa%2FT7q%2FvjFVuN8AntvTDi9lznlACwUZNTHvm%2FVeZ2Wt2Ss7u8U4XHJbnmKqjlSTeMjYAY16TIOcZjA7p5Qlm6vq0r%2FcmFLF8Sgb32d8MwIdeExTpqea5Kx%2FMPj%2FLsP92xUnvOTRnQR2kvWGQxeU3vHbClOLJG8nRE4DpABKDU4dwlP%2Fs6SzxLcWBegFc1CtB%2FjpypqtxbbsnXmsPSj8t9mTiq4dWGCFCRFehR%2B1VN%2BsCykm8zg9Xlb6hC0m2d7Rj3Lku%2BJmagndrvW1fnvzhYNmWSnQACTZcS7NfhKOt4D7az9b%2FAzlgZT9QpKRHGQxhre815lqEnI8r3FARlr1l8iQTP8O9Fo2SYNPsMuy4s8jgtWwllc3HYZExoUDD7HdOG4Sv81NsdpzgbCva5lX2%2BLLdFyxehU0XqtGhqgKEAXI%2BMIbs8PmyviJk90xThCe4fXEaKrq7gsxABZhd7%2BFLvs05PTSY20Cd7vAlj9Z8d%2BtNo6CLW%2FheXkfyVCZvcKTzk0S%2Fng5sFCLw8hk9Ole96GLMOCw58MGOqUBi4Y0HNcwcsLYCpy4uNMOBYFg%2Ft8xJatiKb%2BB4xe%2FDGWDEMgl0WFwBHourDr6YoCZwf2X1%2B%2FvGP6%2BCkDS2W9iwDF2EMo28TrTprMJBEPazrS3EmV1pclvbPwPRb5FrQS6oW9fdqV2xJEYyA8kRDjkNqDeyWlkyHH7BUyv0ypAZlDh5kXsPOkmYEEI6qnAKfjqKkBIsXlKUGerSBqZXZh%2BYppyhRvb&X-Amz-Signature=78fe33ed088d1ad300ff4f7b94dd8ddf900647abe8133dd6ae6e93fd26c9fceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ3GBDP%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDsxe%2Bpv7jVDAaBMPL9SsahAScwJWzzMvmco%2BWh687ocgIgT3y3QsWQSTCc4zQfjHS7lBpVK2EVOhOCjb4wMVsnONYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuiFYu2DzD5NrT69SrcA2UTvx4Ms1FP0HQ6MZo4H7XRHbJ7m80K7Ekf0064fP9tA6GgMavyIjC2aTfE4NG60aWQ5Nh3t0JqcklrS7SqiV6%2BCcxdDwhu%2B29hQFa%2FT7q%2FvjFVuN8AntvTDi9lznlACwUZNTHvm%2FVeZ2Wt2Ss7u8U4XHJbnmKqjlSTeMjYAY16TIOcZjA7p5Qlm6vq0r%2FcmFLF8Sgb32d8MwIdeExTpqea5Kx%2FMPj%2FLsP92xUnvOTRnQR2kvWGQxeU3vHbClOLJG8nRE4DpABKDU4dwlP%2Fs6SzxLcWBegFc1CtB%2FjpypqtxbbsnXmsPSj8t9mTiq4dWGCFCRFehR%2B1VN%2BsCykm8zg9Xlb6hC0m2d7Rj3Lku%2BJmagndrvW1fnvzhYNmWSnQACTZcS7NfhKOt4D7az9b%2FAzlgZT9QpKRHGQxhre815lqEnI8r3FARlr1l8iQTP8O9Fo2SYNPsMuy4s8jgtWwllc3HYZExoUDD7HdOG4Sv81NsdpzgbCva5lX2%2BLLdFyxehU0XqtGhqgKEAXI%2BMIbs8PmyviJk90xThCe4fXEaKrq7gsxABZhd7%2BFLvs05PTSY20Cd7vAlj9Z8d%2BtNo6CLW%2FheXkfyVCZvcKTzk0S%2Fng5sFCLw8hk9Ole96GLMOCw58MGOqUBi4Y0HNcwcsLYCpy4uNMOBYFg%2Ft8xJatiKb%2BB4xe%2FDGWDEMgl0WFwBHourDr6YoCZwf2X1%2B%2FvGP6%2BCkDS2W9iwDF2EMo28TrTprMJBEPazrS3EmV1pclvbPwPRb5FrQS6oW9fdqV2xJEYyA8kRDjkNqDeyWlkyHH7BUyv0ypAZlDh5kXsPOkmYEEI6qnAKfjqKkBIsXlKUGerSBqZXZh%2BYppyhRvb&X-Amz-Signature=4541d8792214f600fba6c2a50a2a7544946324c564f725470a25551ad13b1f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ3GBDP%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDsxe%2Bpv7jVDAaBMPL9SsahAScwJWzzMvmco%2BWh687ocgIgT3y3QsWQSTCc4zQfjHS7lBpVK2EVOhOCjb4wMVsnONYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuiFYu2DzD5NrT69SrcA2UTvx4Ms1FP0HQ6MZo4H7XRHbJ7m80K7Ekf0064fP9tA6GgMavyIjC2aTfE4NG60aWQ5Nh3t0JqcklrS7SqiV6%2BCcxdDwhu%2B29hQFa%2FT7q%2FvjFVuN8AntvTDi9lznlACwUZNTHvm%2FVeZ2Wt2Ss7u8U4XHJbnmKqjlSTeMjYAY16TIOcZjA7p5Qlm6vq0r%2FcmFLF8Sgb32d8MwIdeExTpqea5Kx%2FMPj%2FLsP92xUnvOTRnQR2kvWGQxeU3vHbClOLJG8nRE4DpABKDU4dwlP%2Fs6SzxLcWBegFc1CtB%2FjpypqtxbbsnXmsPSj8t9mTiq4dWGCFCRFehR%2B1VN%2BsCykm8zg9Xlb6hC0m2d7Rj3Lku%2BJmagndrvW1fnvzhYNmWSnQACTZcS7NfhKOt4D7az9b%2FAzlgZT9QpKRHGQxhre815lqEnI8r3FARlr1l8iQTP8O9Fo2SYNPsMuy4s8jgtWwllc3HYZExoUDD7HdOG4Sv81NsdpzgbCva5lX2%2BLLdFyxehU0XqtGhqgKEAXI%2BMIbs8PmyviJk90xThCe4fXEaKrq7gsxABZhd7%2BFLvs05PTSY20Cd7vAlj9Z8d%2BtNo6CLW%2FheXkfyVCZvcKTzk0S%2Fng5sFCLw8hk9Ole96GLMOCw58MGOqUBi4Y0HNcwcsLYCpy4uNMOBYFg%2Ft8xJatiKb%2BB4xe%2FDGWDEMgl0WFwBHourDr6YoCZwf2X1%2B%2FvGP6%2BCkDS2W9iwDF2EMo28TrTprMJBEPazrS3EmV1pclvbPwPRb5FrQS6oW9fdqV2xJEYyA8kRDjkNqDeyWlkyHH7BUyv0ypAZlDh5kXsPOkmYEEI6qnAKfjqKkBIsXlKUGerSBqZXZh%2BYppyhRvb&X-Amz-Signature=5264f27dd6192cfc14e3bc527566d02e40fba5a78aa834b5c807412cccc7f89a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ3GBDP%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDsxe%2Bpv7jVDAaBMPL9SsahAScwJWzzMvmco%2BWh687ocgIgT3y3QsWQSTCc4zQfjHS7lBpVK2EVOhOCjb4wMVsnONYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuiFYu2DzD5NrT69SrcA2UTvx4Ms1FP0HQ6MZo4H7XRHbJ7m80K7Ekf0064fP9tA6GgMavyIjC2aTfE4NG60aWQ5Nh3t0JqcklrS7SqiV6%2BCcxdDwhu%2B29hQFa%2FT7q%2FvjFVuN8AntvTDi9lznlACwUZNTHvm%2FVeZ2Wt2Ss7u8U4XHJbnmKqjlSTeMjYAY16TIOcZjA7p5Qlm6vq0r%2FcmFLF8Sgb32d8MwIdeExTpqea5Kx%2FMPj%2FLsP92xUnvOTRnQR2kvWGQxeU3vHbClOLJG8nRE4DpABKDU4dwlP%2Fs6SzxLcWBegFc1CtB%2FjpypqtxbbsnXmsPSj8t9mTiq4dWGCFCRFehR%2B1VN%2BsCykm8zg9Xlb6hC0m2d7Rj3Lku%2BJmagndrvW1fnvzhYNmWSnQACTZcS7NfhKOt4D7az9b%2FAzlgZT9QpKRHGQxhre815lqEnI8r3FARlr1l8iQTP8O9Fo2SYNPsMuy4s8jgtWwllc3HYZExoUDD7HdOG4Sv81NsdpzgbCva5lX2%2BLLdFyxehU0XqtGhqgKEAXI%2BMIbs8PmyviJk90xThCe4fXEaKrq7gsxABZhd7%2BFLvs05PTSY20Cd7vAlj9Z8d%2BtNo6CLW%2FheXkfyVCZvcKTzk0S%2Fng5sFCLw8hk9Ole96GLMOCw58MGOqUBi4Y0HNcwcsLYCpy4uNMOBYFg%2Ft8xJatiKb%2BB4xe%2FDGWDEMgl0WFwBHourDr6YoCZwf2X1%2B%2FvGP6%2BCkDS2W9iwDF2EMo28TrTprMJBEPazrS3EmV1pclvbPwPRb5FrQS6oW9fdqV2xJEYyA8kRDjkNqDeyWlkyHH7BUyv0ypAZlDh5kXsPOkmYEEI6qnAKfjqKkBIsXlKUGerSBqZXZh%2BYppyhRvb&X-Amz-Signature=9dc0f49324ed07ab14a170c0b8ec1bbece903a0aeb4bf91ffe724fb4e58df3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ3GBDP%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDsxe%2Bpv7jVDAaBMPL9SsahAScwJWzzMvmco%2BWh687ocgIgT3y3QsWQSTCc4zQfjHS7lBpVK2EVOhOCjb4wMVsnONYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuiFYu2DzD5NrT69SrcA2UTvx4Ms1FP0HQ6MZo4H7XRHbJ7m80K7Ekf0064fP9tA6GgMavyIjC2aTfE4NG60aWQ5Nh3t0JqcklrS7SqiV6%2BCcxdDwhu%2B29hQFa%2FT7q%2FvjFVuN8AntvTDi9lznlACwUZNTHvm%2FVeZ2Wt2Ss7u8U4XHJbnmKqjlSTeMjYAY16TIOcZjA7p5Qlm6vq0r%2FcmFLF8Sgb32d8MwIdeExTpqea5Kx%2FMPj%2FLsP92xUnvOTRnQR2kvWGQxeU3vHbClOLJG8nRE4DpABKDU4dwlP%2Fs6SzxLcWBegFc1CtB%2FjpypqtxbbsnXmsPSj8t9mTiq4dWGCFCRFehR%2B1VN%2BsCykm8zg9Xlb6hC0m2d7Rj3Lku%2BJmagndrvW1fnvzhYNmWSnQACTZcS7NfhKOt4D7az9b%2FAzlgZT9QpKRHGQxhre815lqEnI8r3FARlr1l8iQTP8O9Fo2SYNPsMuy4s8jgtWwllc3HYZExoUDD7HdOG4Sv81NsdpzgbCva5lX2%2BLLdFyxehU0XqtGhqgKEAXI%2BMIbs8PmyviJk90xThCe4fXEaKrq7gsxABZhd7%2BFLvs05PTSY20Cd7vAlj9Z8d%2BtNo6CLW%2FheXkfyVCZvcKTzk0S%2Fng5sFCLw8hk9Ole96GLMOCw58MGOqUBi4Y0HNcwcsLYCpy4uNMOBYFg%2Ft8xJatiKb%2BB4xe%2FDGWDEMgl0WFwBHourDr6YoCZwf2X1%2B%2FvGP6%2BCkDS2W9iwDF2EMo28TrTprMJBEPazrS3EmV1pclvbPwPRb5FrQS6oW9fdqV2xJEYyA8kRDjkNqDeyWlkyHH7BUyv0ypAZlDh5kXsPOkmYEEI6qnAKfjqKkBIsXlKUGerSBqZXZh%2BYppyhRvb&X-Amz-Signature=bbb0ee83117f7f41ef8a8131a6d04d53c4bc44359b20657efb250c47fdaf4517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ3GBDP%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDsxe%2Bpv7jVDAaBMPL9SsahAScwJWzzMvmco%2BWh687ocgIgT3y3QsWQSTCc4zQfjHS7lBpVK2EVOhOCjb4wMVsnONYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuiFYu2DzD5NrT69SrcA2UTvx4Ms1FP0HQ6MZo4H7XRHbJ7m80K7Ekf0064fP9tA6GgMavyIjC2aTfE4NG60aWQ5Nh3t0JqcklrS7SqiV6%2BCcxdDwhu%2B29hQFa%2FT7q%2FvjFVuN8AntvTDi9lznlACwUZNTHvm%2FVeZ2Wt2Ss7u8U4XHJbnmKqjlSTeMjYAY16TIOcZjA7p5Qlm6vq0r%2FcmFLF8Sgb32d8MwIdeExTpqea5Kx%2FMPj%2FLsP92xUnvOTRnQR2kvWGQxeU3vHbClOLJG8nRE4DpABKDU4dwlP%2Fs6SzxLcWBegFc1CtB%2FjpypqtxbbsnXmsPSj8t9mTiq4dWGCFCRFehR%2B1VN%2BsCykm8zg9Xlb6hC0m2d7Rj3Lku%2BJmagndrvW1fnvzhYNmWSnQACTZcS7NfhKOt4D7az9b%2FAzlgZT9QpKRHGQxhre815lqEnI8r3FARlr1l8iQTP8O9Fo2SYNPsMuy4s8jgtWwllc3HYZExoUDD7HdOG4Sv81NsdpzgbCva5lX2%2BLLdFyxehU0XqtGhqgKEAXI%2BMIbs8PmyviJk90xThCe4fXEaKrq7gsxABZhd7%2BFLvs05PTSY20Cd7vAlj9Z8d%2BtNo6CLW%2FheXkfyVCZvcKTzk0S%2Fng5sFCLw8hk9Ole96GLMOCw58MGOqUBi4Y0HNcwcsLYCpy4uNMOBYFg%2Ft8xJatiKb%2BB4xe%2FDGWDEMgl0WFwBHourDr6YoCZwf2X1%2B%2FvGP6%2BCkDS2W9iwDF2EMo28TrTprMJBEPazrS3EmV1pclvbPwPRb5FrQS6oW9fdqV2xJEYyA8kRDjkNqDeyWlkyHH7BUyv0ypAZlDh5kXsPOkmYEEI6qnAKfjqKkBIsXlKUGerSBqZXZh%2BYppyhRvb&X-Amz-Signature=b8e821d1b9380f7116f30fb3dc2c448fea3d803e813626769ebedb2af1ae887f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ3GBDP%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDsxe%2Bpv7jVDAaBMPL9SsahAScwJWzzMvmco%2BWh687ocgIgT3y3QsWQSTCc4zQfjHS7lBpVK2EVOhOCjb4wMVsnONYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuiFYu2DzD5NrT69SrcA2UTvx4Ms1FP0HQ6MZo4H7XRHbJ7m80K7Ekf0064fP9tA6GgMavyIjC2aTfE4NG60aWQ5Nh3t0JqcklrS7SqiV6%2BCcxdDwhu%2B29hQFa%2FT7q%2FvjFVuN8AntvTDi9lznlACwUZNTHvm%2FVeZ2Wt2Ss7u8U4XHJbnmKqjlSTeMjYAY16TIOcZjA7p5Qlm6vq0r%2FcmFLF8Sgb32d8MwIdeExTpqea5Kx%2FMPj%2FLsP92xUnvOTRnQR2kvWGQxeU3vHbClOLJG8nRE4DpABKDU4dwlP%2Fs6SzxLcWBegFc1CtB%2FjpypqtxbbsnXmsPSj8t9mTiq4dWGCFCRFehR%2B1VN%2BsCykm8zg9Xlb6hC0m2d7Rj3Lku%2BJmagndrvW1fnvzhYNmWSnQACTZcS7NfhKOt4D7az9b%2FAzlgZT9QpKRHGQxhre815lqEnI8r3FARlr1l8iQTP8O9Fo2SYNPsMuy4s8jgtWwllc3HYZExoUDD7HdOG4Sv81NsdpzgbCva5lX2%2BLLdFyxehU0XqtGhqgKEAXI%2BMIbs8PmyviJk90xThCe4fXEaKrq7gsxABZhd7%2BFLvs05PTSY20Cd7vAlj9Z8d%2BtNo6CLW%2FheXkfyVCZvcKTzk0S%2Fng5sFCLw8hk9Ole96GLMOCw58MGOqUBi4Y0HNcwcsLYCpy4uNMOBYFg%2Ft8xJatiKb%2BB4xe%2FDGWDEMgl0WFwBHourDr6YoCZwf2X1%2B%2FvGP6%2BCkDS2W9iwDF2EMo28TrTprMJBEPazrS3EmV1pclvbPwPRb5FrQS6oW9fdqV2xJEYyA8kRDjkNqDeyWlkyHH7BUyv0ypAZlDh5kXsPOkmYEEI6qnAKfjqKkBIsXlKUGerSBqZXZh%2BYppyhRvb&X-Amz-Signature=8004178b3544b4b9292501eeeac65d641c564be275ba4d1be787168018452002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
