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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3WQLEB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVHiRAIJeBz4psrFkQY2P9WYPcnk0YKeuPh%2FkdL%2BmwSAIgdU9lXN5FbEDomqNFkijOtQ95n73nKalkoWScXXByHqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKSnyA5dsSGnIeDivircAyEATXCrRLpvjmP1wMhDZqpH72i7EOZLkdjeC%2FStjZfOE9j%2ByxMOHGOmmlrciYlVMOv0LDJZuxyPsgDeVkYLG%2FVcx%2Fa78TTxMjr9JisPqUPiP78nsj58wCJrnLXeqAL8ZNhZrZO%2FdV%2BBgDFFwr1FAPoljNBhuKnuQxyIMHTKU7N83zCiACH52XGdTAJCCLivJrdecA7dSa75nCECpJ0gqsISKuMqugy4sv4Ou3oSO%2FHxLYSAWF%2FcQg43AVKkXX0Bou5gsbCmZpj09dNZPQKPS0yAkKOSdSH8jPgpHX7i956OV9L3kwgOQms%2BfepeEdn%2FpLerWEgBKJk1xG0PKLC%2FiP3ha0xjGC7HL5ct8Zr9069kqD3yk6ynvQUaJfZ8hEnui3EnWqHzZhpG2fC00LqtLGl2u24UIzyvgtc7EXhyJHQTI6CC3Yo6roCKmWPfCwQsakEMDHoee8P1RkZZqWy6RSdqGRafYI7UX8nQkCGK3T0qSqABYumY6J6swoCyvHwDVmB1SUbmuZW8yX43Ca8WU2X4K2pxOr%2B6OVbsL4%2FGuhrLPW8TEqM36ttf%2BTvps8R6v%2FAIfkUUsuVnYALvpexsPO%2FXzq1Qc6u9amcuUQMzT2nk4gjM9A9lfVB%2Bf7j0MNLdtMAGOqUB%2Flk09VkP2F1r1KILe28xgyDTB5g63wqMVtjhJBpRkejMdxth64%2BsWeWtkPRpJ1W5sb6X%2BvAeYrECKqbJG5O3eqXc808nXx%2F7aCt4ElbE%2FCHCuK2C4OW0ISgxpHD%2BKSMJSvR%2Fq2adStz4BGaYOaEucDvvIPdsBjRsoVkdSXIcXHr8%2FFcKcjYkjfHUezTChkWAR8%2BQzl4msVFoxqWK8FG5%2Br1RUMkc&X-Amz-Signature=f7f9d6b74adeaa3df7dffa28c028b5c21b74e26a67b64db53552007aeb4d823f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3WQLEB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVHiRAIJeBz4psrFkQY2P9WYPcnk0YKeuPh%2FkdL%2BmwSAIgdU9lXN5FbEDomqNFkijOtQ95n73nKalkoWScXXByHqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKSnyA5dsSGnIeDivircAyEATXCrRLpvjmP1wMhDZqpH72i7EOZLkdjeC%2FStjZfOE9j%2ByxMOHGOmmlrciYlVMOv0LDJZuxyPsgDeVkYLG%2FVcx%2Fa78TTxMjr9JisPqUPiP78nsj58wCJrnLXeqAL8ZNhZrZO%2FdV%2BBgDFFwr1FAPoljNBhuKnuQxyIMHTKU7N83zCiACH52XGdTAJCCLivJrdecA7dSa75nCECpJ0gqsISKuMqugy4sv4Ou3oSO%2FHxLYSAWF%2FcQg43AVKkXX0Bou5gsbCmZpj09dNZPQKPS0yAkKOSdSH8jPgpHX7i956OV9L3kwgOQms%2BfepeEdn%2FpLerWEgBKJk1xG0PKLC%2FiP3ha0xjGC7HL5ct8Zr9069kqD3yk6ynvQUaJfZ8hEnui3EnWqHzZhpG2fC00LqtLGl2u24UIzyvgtc7EXhyJHQTI6CC3Yo6roCKmWPfCwQsakEMDHoee8P1RkZZqWy6RSdqGRafYI7UX8nQkCGK3T0qSqABYumY6J6swoCyvHwDVmB1SUbmuZW8yX43Ca8WU2X4K2pxOr%2B6OVbsL4%2FGuhrLPW8TEqM36ttf%2BTvps8R6v%2FAIfkUUsuVnYALvpexsPO%2FXzq1Qc6u9amcuUQMzT2nk4gjM9A9lfVB%2Bf7j0MNLdtMAGOqUB%2Flk09VkP2F1r1KILe28xgyDTB5g63wqMVtjhJBpRkejMdxth64%2BsWeWtkPRpJ1W5sb6X%2BvAeYrECKqbJG5O3eqXc808nXx%2F7aCt4ElbE%2FCHCuK2C4OW0ISgxpHD%2BKSMJSvR%2Fq2adStz4BGaYOaEucDvvIPdsBjRsoVkdSXIcXHr8%2FFcKcjYkjfHUezTChkWAR8%2BQzl4msVFoxqWK8FG5%2Br1RUMkc&X-Amz-Signature=a4545756aeb11249ae026e411893319114587d1439591d107be5e9fbf4d599fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3WQLEB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVHiRAIJeBz4psrFkQY2P9WYPcnk0YKeuPh%2FkdL%2BmwSAIgdU9lXN5FbEDomqNFkijOtQ95n73nKalkoWScXXByHqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKSnyA5dsSGnIeDivircAyEATXCrRLpvjmP1wMhDZqpH72i7EOZLkdjeC%2FStjZfOE9j%2ByxMOHGOmmlrciYlVMOv0LDJZuxyPsgDeVkYLG%2FVcx%2Fa78TTxMjr9JisPqUPiP78nsj58wCJrnLXeqAL8ZNhZrZO%2FdV%2BBgDFFwr1FAPoljNBhuKnuQxyIMHTKU7N83zCiACH52XGdTAJCCLivJrdecA7dSa75nCECpJ0gqsISKuMqugy4sv4Ou3oSO%2FHxLYSAWF%2FcQg43AVKkXX0Bou5gsbCmZpj09dNZPQKPS0yAkKOSdSH8jPgpHX7i956OV9L3kwgOQms%2BfepeEdn%2FpLerWEgBKJk1xG0PKLC%2FiP3ha0xjGC7HL5ct8Zr9069kqD3yk6ynvQUaJfZ8hEnui3EnWqHzZhpG2fC00LqtLGl2u24UIzyvgtc7EXhyJHQTI6CC3Yo6roCKmWPfCwQsakEMDHoee8P1RkZZqWy6RSdqGRafYI7UX8nQkCGK3T0qSqABYumY6J6swoCyvHwDVmB1SUbmuZW8yX43Ca8WU2X4K2pxOr%2B6OVbsL4%2FGuhrLPW8TEqM36ttf%2BTvps8R6v%2FAIfkUUsuVnYALvpexsPO%2FXzq1Qc6u9amcuUQMzT2nk4gjM9A9lfVB%2Bf7j0MNLdtMAGOqUB%2Flk09VkP2F1r1KILe28xgyDTB5g63wqMVtjhJBpRkejMdxth64%2BsWeWtkPRpJ1W5sb6X%2BvAeYrECKqbJG5O3eqXc808nXx%2F7aCt4ElbE%2FCHCuK2C4OW0ISgxpHD%2BKSMJSvR%2Fq2adStz4BGaYOaEucDvvIPdsBjRsoVkdSXIcXHr8%2FFcKcjYkjfHUezTChkWAR8%2BQzl4msVFoxqWK8FG5%2Br1RUMkc&X-Amz-Signature=5c6f39c8aad7a1e955a9fc383646783814eeb517f5e30243bc8e9a88269bf333&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3WQLEB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVHiRAIJeBz4psrFkQY2P9WYPcnk0YKeuPh%2FkdL%2BmwSAIgdU9lXN5FbEDomqNFkijOtQ95n73nKalkoWScXXByHqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKSnyA5dsSGnIeDivircAyEATXCrRLpvjmP1wMhDZqpH72i7EOZLkdjeC%2FStjZfOE9j%2ByxMOHGOmmlrciYlVMOv0LDJZuxyPsgDeVkYLG%2FVcx%2Fa78TTxMjr9JisPqUPiP78nsj58wCJrnLXeqAL8ZNhZrZO%2FdV%2BBgDFFwr1FAPoljNBhuKnuQxyIMHTKU7N83zCiACH52XGdTAJCCLivJrdecA7dSa75nCECpJ0gqsISKuMqugy4sv4Ou3oSO%2FHxLYSAWF%2FcQg43AVKkXX0Bou5gsbCmZpj09dNZPQKPS0yAkKOSdSH8jPgpHX7i956OV9L3kwgOQms%2BfepeEdn%2FpLerWEgBKJk1xG0PKLC%2FiP3ha0xjGC7HL5ct8Zr9069kqD3yk6ynvQUaJfZ8hEnui3EnWqHzZhpG2fC00LqtLGl2u24UIzyvgtc7EXhyJHQTI6CC3Yo6roCKmWPfCwQsakEMDHoee8P1RkZZqWy6RSdqGRafYI7UX8nQkCGK3T0qSqABYumY6J6swoCyvHwDVmB1SUbmuZW8yX43Ca8WU2X4K2pxOr%2B6OVbsL4%2FGuhrLPW8TEqM36ttf%2BTvps8R6v%2FAIfkUUsuVnYALvpexsPO%2FXzq1Qc6u9amcuUQMzT2nk4gjM9A9lfVB%2Bf7j0MNLdtMAGOqUB%2Flk09VkP2F1r1KILe28xgyDTB5g63wqMVtjhJBpRkejMdxth64%2BsWeWtkPRpJ1W5sb6X%2BvAeYrECKqbJG5O3eqXc808nXx%2F7aCt4ElbE%2FCHCuK2C4OW0ISgxpHD%2BKSMJSvR%2Fq2adStz4BGaYOaEucDvvIPdsBjRsoVkdSXIcXHr8%2FFcKcjYkjfHUezTChkWAR8%2BQzl4msVFoxqWK8FG5%2Br1RUMkc&X-Amz-Signature=face02b8aee14a2a6bc7a4a713248f6ff250c17f124dc7b84b500681b12a6541&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3WQLEB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVHiRAIJeBz4psrFkQY2P9WYPcnk0YKeuPh%2FkdL%2BmwSAIgdU9lXN5FbEDomqNFkijOtQ95n73nKalkoWScXXByHqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKSnyA5dsSGnIeDivircAyEATXCrRLpvjmP1wMhDZqpH72i7EOZLkdjeC%2FStjZfOE9j%2ByxMOHGOmmlrciYlVMOv0LDJZuxyPsgDeVkYLG%2FVcx%2Fa78TTxMjr9JisPqUPiP78nsj58wCJrnLXeqAL8ZNhZrZO%2FdV%2BBgDFFwr1FAPoljNBhuKnuQxyIMHTKU7N83zCiACH52XGdTAJCCLivJrdecA7dSa75nCECpJ0gqsISKuMqugy4sv4Ou3oSO%2FHxLYSAWF%2FcQg43AVKkXX0Bou5gsbCmZpj09dNZPQKPS0yAkKOSdSH8jPgpHX7i956OV9L3kwgOQms%2BfepeEdn%2FpLerWEgBKJk1xG0PKLC%2FiP3ha0xjGC7HL5ct8Zr9069kqD3yk6ynvQUaJfZ8hEnui3EnWqHzZhpG2fC00LqtLGl2u24UIzyvgtc7EXhyJHQTI6CC3Yo6roCKmWPfCwQsakEMDHoee8P1RkZZqWy6RSdqGRafYI7UX8nQkCGK3T0qSqABYumY6J6swoCyvHwDVmB1SUbmuZW8yX43Ca8WU2X4K2pxOr%2B6OVbsL4%2FGuhrLPW8TEqM36ttf%2BTvps8R6v%2FAIfkUUsuVnYALvpexsPO%2FXzq1Qc6u9amcuUQMzT2nk4gjM9A9lfVB%2Bf7j0MNLdtMAGOqUB%2Flk09VkP2F1r1KILe28xgyDTB5g63wqMVtjhJBpRkejMdxth64%2BsWeWtkPRpJ1W5sb6X%2BvAeYrECKqbJG5O3eqXc808nXx%2F7aCt4ElbE%2FCHCuK2C4OW0ISgxpHD%2BKSMJSvR%2Fq2adStz4BGaYOaEucDvvIPdsBjRsoVkdSXIcXHr8%2FFcKcjYkjfHUezTChkWAR8%2BQzl4msVFoxqWK8FG5%2Br1RUMkc&X-Amz-Signature=f51b3f1badabfbc3a02a4f631461b1ed4b1a06f0182801d3162fc176afe36286&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3WQLEB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVHiRAIJeBz4psrFkQY2P9WYPcnk0YKeuPh%2FkdL%2BmwSAIgdU9lXN5FbEDomqNFkijOtQ95n73nKalkoWScXXByHqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKSnyA5dsSGnIeDivircAyEATXCrRLpvjmP1wMhDZqpH72i7EOZLkdjeC%2FStjZfOE9j%2ByxMOHGOmmlrciYlVMOv0LDJZuxyPsgDeVkYLG%2FVcx%2Fa78TTxMjr9JisPqUPiP78nsj58wCJrnLXeqAL8ZNhZrZO%2FdV%2BBgDFFwr1FAPoljNBhuKnuQxyIMHTKU7N83zCiACH52XGdTAJCCLivJrdecA7dSa75nCECpJ0gqsISKuMqugy4sv4Ou3oSO%2FHxLYSAWF%2FcQg43AVKkXX0Bou5gsbCmZpj09dNZPQKPS0yAkKOSdSH8jPgpHX7i956OV9L3kwgOQms%2BfepeEdn%2FpLerWEgBKJk1xG0PKLC%2FiP3ha0xjGC7HL5ct8Zr9069kqD3yk6ynvQUaJfZ8hEnui3EnWqHzZhpG2fC00LqtLGl2u24UIzyvgtc7EXhyJHQTI6CC3Yo6roCKmWPfCwQsakEMDHoee8P1RkZZqWy6RSdqGRafYI7UX8nQkCGK3T0qSqABYumY6J6swoCyvHwDVmB1SUbmuZW8yX43Ca8WU2X4K2pxOr%2B6OVbsL4%2FGuhrLPW8TEqM36ttf%2BTvps8R6v%2FAIfkUUsuVnYALvpexsPO%2FXzq1Qc6u9amcuUQMzT2nk4gjM9A9lfVB%2Bf7j0MNLdtMAGOqUB%2Flk09VkP2F1r1KILe28xgyDTB5g63wqMVtjhJBpRkejMdxth64%2BsWeWtkPRpJ1W5sb6X%2BvAeYrECKqbJG5O3eqXc808nXx%2F7aCt4ElbE%2FCHCuK2C4OW0ISgxpHD%2BKSMJSvR%2Fq2adStz4BGaYOaEucDvvIPdsBjRsoVkdSXIcXHr8%2FFcKcjYkjfHUezTChkWAR8%2BQzl4msVFoxqWK8FG5%2Br1RUMkc&X-Amz-Signature=ac6fb2afb61aeb4c3445a5cd3dc3dd908f9fc4ba73cac7724d639b1c35b4cc41&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3WQLEB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVHiRAIJeBz4psrFkQY2P9WYPcnk0YKeuPh%2FkdL%2BmwSAIgdU9lXN5FbEDomqNFkijOtQ95n73nKalkoWScXXByHqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKSnyA5dsSGnIeDivircAyEATXCrRLpvjmP1wMhDZqpH72i7EOZLkdjeC%2FStjZfOE9j%2ByxMOHGOmmlrciYlVMOv0LDJZuxyPsgDeVkYLG%2FVcx%2Fa78TTxMjr9JisPqUPiP78nsj58wCJrnLXeqAL8ZNhZrZO%2FdV%2BBgDFFwr1FAPoljNBhuKnuQxyIMHTKU7N83zCiACH52XGdTAJCCLivJrdecA7dSa75nCECpJ0gqsISKuMqugy4sv4Ou3oSO%2FHxLYSAWF%2FcQg43AVKkXX0Bou5gsbCmZpj09dNZPQKPS0yAkKOSdSH8jPgpHX7i956OV9L3kwgOQms%2BfepeEdn%2FpLerWEgBKJk1xG0PKLC%2FiP3ha0xjGC7HL5ct8Zr9069kqD3yk6ynvQUaJfZ8hEnui3EnWqHzZhpG2fC00LqtLGl2u24UIzyvgtc7EXhyJHQTI6CC3Yo6roCKmWPfCwQsakEMDHoee8P1RkZZqWy6RSdqGRafYI7UX8nQkCGK3T0qSqABYumY6J6swoCyvHwDVmB1SUbmuZW8yX43Ca8WU2X4K2pxOr%2B6OVbsL4%2FGuhrLPW8TEqM36ttf%2BTvps8R6v%2FAIfkUUsuVnYALvpexsPO%2FXzq1Qc6u9amcuUQMzT2nk4gjM9A9lfVB%2Bf7j0MNLdtMAGOqUB%2Flk09VkP2F1r1KILe28xgyDTB5g63wqMVtjhJBpRkejMdxth64%2BsWeWtkPRpJ1W5sb6X%2BvAeYrECKqbJG5O3eqXc808nXx%2F7aCt4ElbE%2FCHCuK2C4OW0ISgxpHD%2BKSMJSvR%2Fq2adStz4BGaYOaEucDvvIPdsBjRsoVkdSXIcXHr8%2FFcKcjYkjfHUezTChkWAR8%2BQzl4msVFoxqWK8FG5%2Br1RUMkc&X-Amz-Signature=6609afe8f8e1d4b6c36c295691b6187e0b96e9dd3ed09a004e019549fafd394f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
