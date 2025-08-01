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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663F4NB2P%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5kgvx7u38%2BTUW8X70gOAY72iy66IWkzOqhhnv5kEHbAIgeQwgFg6SKwDlPPc6GaG69EWQ79VipCCxX5zqxbWHy6EqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXWfze%2Bxvmpu%2FjbkCrcAywrEWym4rhjQ6EqaiS0LSSxfhoQrBD%2FEhH3y%2Bd2l7yU5%2B5Wcu06tIBpcBEOU3XeB7mM0VvZabTbRGx2ZFfRfwEaWk8m1nfv%2FrMaK0op6cTcCJx1uVunZI8JT%2B7gc1YpvACUowqj8UMk8cOBDzmuGnkTe51BiONhqDi0kFLbu194frhV9lOptNlKq2X3thC6B2rkmZ9fgZN%2B4vAXE3Wgbv1eL2Sq%2BmIKlXIUrB5DSk9Z8Snvud2YhPQoGX5cXUeradN%2Fpr723OZhMFK75ZSh5bXNsRdq95AsjS1efB0WEpnU0jWkeXZfjzRvkwi9PiLZvtkzaQ2D5EJzMt8x93PWZXI%2BO40lp%2BWPQm0N5H%2FsrII%2BnEm8FG3nrbnyVYOnIkNYfk4CYip1tED5RqDJ9zOiNHl6MC5ij038rmo4cwCn%2FZnY8iWuaNPFGh4gpAQ0mFAyFM3yJQ5%2BdMHUiEuWVFTGd9kmEBWJA2vdJpGfBM6xiYmyABPWP5wg7VMgmjpTqY8JWVG0FRCSr7LsAJxFJX1DObgVAMS1wLgSuMscStEfnprVPm%2FkIaH4FnqdD%2FX7ASb4hm78PfKG4ui914e9SKPxrrpUuxRIHydGdhRN7Gc8Sqvdm74mSJ%2BNktjBdUmDMKaws8QGOqUBthV6sUddAamhf11N7HlA5OXEbtBHSWoS4yfBDNNIH%2B5P1tT8evt1eftHrhlvwZVdJHgDH8k1uBN3yMINMzHu%2BqfvyHhncnRfHV4G%2Fc5jQnFG1y13np9KvD2C5VIKIsI1tpzgiO8PAt%2Fy166Xkb13%2FMkJMwvEP5wHAZ1Qf%2Buef7duLMqoFGBDlqLhZLOtRpu%2Bsl0nFM2N%2FGYQkHlNtrvOjISpqbKZ&X-Amz-Signature=bcfc89fd0c00773e3fb585678550929c2484d82a97c66684ac317d7af72cecc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663F4NB2P%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5kgvx7u38%2BTUW8X70gOAY72iy66IWkzOqhhnv5kEHbAIgeQwgFg6SKwDlPPc6GaG69EWQ79VipCCxX5zqxbWHy6EqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXWfze%2Bxvmpu%2FjbkCrcAywrEWym4rhjQ6EqaiS0LSSxfhoQrBD%2FEhH3y%2Bd2l7yU5%2B5Wcu06tIBpcBEOU3XeB7mM0VvZabTbRGx2ZFfRfwEaWk8m1nfv%2FrMaK0op6cTcCJx1uVunZI8JT%2B7gc1YpvACUowqj8UMk8cOBDzmuGnkTe51BiONhqDi0kFLbu194frhV9lOptNlKq2X3thC6B2rkmZ9fgZN%2B4vAXE3Wgbv1eL2Sq%2BmIKlXIUrB5DSk9Z8Snvud2YhPQoGX5cXUeradN%2Fpr723OZhMFK75ZSh5bXNsRdq95AsjS1efB0WEpnU0jWkeXZfjzRvkwi9PiLZvtkzaQ2D5EJzMt8x93PWZXI%2BO40lp%2BWPQm0N5H%2FsrII%2BnEm8FG3nrbnyVYOnIkNYfk4CYip1tED5RqDJ9zOiNHl6MC5ij038rmo4cwCn%2FZnY8iWuaNPFGh4gpAQ0mFAyFM3yJQ5%2BdMHUiEuWVFTGd9kmEBWJA2vdJpGfBM6xiYmyABPWP5wg7VMgmjpTqY8JWVG0FRCSr7LsAJxFJX1DObgVAMS1wLgSuMscStEfnprVPm%2FkIaH4FnqdD%2FX7ASb4hm78PfKG4ui914e9SKPxrrpUuxRIHydGdhRN7Gc8Sqvdm74mSJ%2BNktjBdUmDMKaws8QGOqUBthV6sUddAamhf11N7HlA5OXEbtBHSWoS4yfBDNNIH%2B5P1tT8evt1eftHrhlvwZVdJHgDH8k1uBN3yMINMzHu%2BqfvyHhncnRfHV4G%2Fc5jQnFG1y13np9KvD2C5VIKIsI1tpzgiO8PAt%2Fy166Xkb13%2FMkJMwvEP5wHAZ1Qf%2Buef7duLMqoFGBDlqLhZLOtRpu%2Bsl0nFM2N%2FGYQkHlNtrvOjISpqbKZ&X-Amz-Signature=12c6564042eddf5932f0ff8b9af168abd5d37982d13a7b0fb6d06fb6fc0fe3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663F4NB2P%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5kgvx7u38%2BTUW8X70gOAY72iy66IWkzOqhhnv5kEHbAIgeQwgFg6SKwDlPPc6GaG69EWQ79VipCCxX5zqxbWHy6EqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXWfze%2Bxvmpu%2FjbkCrcAywrEWym4rhjQ6EqaiS0LSSxfhoQrBD%2FEhH3y%2Bd2l7yU5%2B5Wcu06tIBpcBEOU3XeB7mM0VvZabTbRGx2ZFfRfwEaWk8m1nfv%2FrMaK0op6cTcCJx1uVunZI8JT%2B7gc1YpvACUowqj8UMk8cOBDzmuGnkTe51BiONhqDi0kFLbu194frhV9lOptNlKq2X3thC6B2rkmZ9fgZN%2B4vAXE3Wgbv1eL2Sq%2BmIKlXIUrB5DSk9Z8Snvud2YhPQoGX5cXUeradN%2Fpr723OZhMFK75ZSh5bXNsRdq95AsjS1efB0WEpnU0jWkeXZfjzRvkwi9PiLZvtkzaQ2D5EJzMt8x93PWZXI%2BO40lp%2BWPQm0N5H%2FsrII%2BnEm8FG3nrbnyVYOnIkNYfk4CYip1tED5RqDJ9zOiNHl6MC5ij038rmo4cwCn%2FZnY8iWuaNPFGh4gpAQ0mFAyFM3yJQ5%2BdMHUiEuWVFTGd9kmEBWJA2vdJpGfBM6xiYmyABPWP5wg7VMgmjpTqY8JWVG0FRCSr7LsAJxFJX1DObgVAMS1wLgSuMscStEfnprVPm%2FkIaH4FnqdD%2FX7ASb4hm78PfKG4ui914e9SKPxrrpUuxRIHydGdhRN7Gc8Sqvdm74mSJ%2BNktjBdUmDMKaws8QGOqUBthV6sUddAamhf11N7HlA5OXEbtBHSWoS4yfBDNNIH%2B5P1tT8evt1eftHrhlvwZVdJHgDH8k1uBN3yMINMzHu%2BqfvyHhncnRfHV4G%2Fc5jQnFG1y13np9KvD2C5VIKIsI1tpzgiO8PAt%2Fy166Xkb13%2FMkJMwvEP5wHAZ1Qf%2Buef7duLMqoFGBDlqLhZLOtRpu%2Bsl0nFM2N%2FGYQkHlNtrvOjISpqbKZ&X-Amz-Signature=94249777be48d54120b0991b42b2572dc2b68e30ba35d476df5ed92029c64f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663F4NB2P%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5kgvx7u38%2BTUW8X70gOAY72iy66IWkzOqhhnv5kEHbAIgeQwgFg6SKwDlPPc6GaG69EWQ79VipCCxX5zqxbWHy6EqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXWfze%2Bxvmpu%2FjbkCrcAywrEWym4rhjQ6EqaiS0LSSxfhoQrBD%2FEhH3y%2Bd2l7yU5%2B5Wcu06tIBpcBEOU3XeB7mM0VvZabTbRGx2ZFfRfwEaWk8m1nfv%2FrMaK0op6cTcCJx1uVunZI8JT%2B7gc1YpvACUowqj8UMk8cOBDzmuGnkTe51BiONhqDi0kFLbu194frhV9lOptNlKq2X3thC6B2rkmZ9fgZN%2B4vAXE3Wgbv1eL2Sq%2BmIKlXIUrB5DSk9Z8Snvud2YhPQoGX5cXUeradN%2Fpr723OZhMFK75ZSh5bXNsRdq95AsjS1efB0WEpnU0jWkeXZfjzRvkwi9PiLZvtkzaQ2D5EJzMt8x93PWZXI%2BO40lp%2BWPQm0N5H%2FsrII%2BnEm8FG3nrbnyVYOnIkNYfk4CYip1tED5RqDJ9zOiNHl6MC5ij038rmo4cwCn%2FZnY8iWuaNPFGh4gpAQ0mFAyFM3yJQ5%2BdMHUiEuWVFTGd9kmEBWJA2vdJpGfBM6xiYmyABPWP5wg7VMgmjpTqY8JWVG0FRCSr7LsAJxFJX1DObgVAMS1wLgSuMscStEfnprVPm%2FkIaH4FnqdD%2FX7ASb4hm78PfKG4ui914e9SKPxrrpUuxRIHydGdhRN7Gc8Sqvdm74mSJ%2BNktjBdUmDMKaws8QGOqUBthV6sUddAamhf11N7HlA5OXEbtBHSWoS4yfBDNNIH%2B5P1tT8evt1eftHrhlvwZVdJHgDH8k1uBN3yMINMzHu%2BqfvyHhncnRfHV4G%2Fc5jQnFG1y13np9KvD2C5VIKIsI1tpzgiO8PAt%2Fy166Xkb13%2FMkJMwvEP5wHAZ1Qf%2Buef7duLMqoFGBDlqLhZLOtRpu%2Bsl0nFM2N%2FGYQkHlNtrvOjISpqbKZ&X-Amz-Signature=a59bd957026168f055c2fb75307c5c60a998f7776c7d8e8b7a323ad4c97a6692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663F4NB2P%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5kgvx7u38%2BTUW8X70gOAY72iy66IWkzOqhhnv5kEHbAIgeQwgFg6SKwDlPPc6GaG69EWQ79VipCCxX5zqxbWHy6EqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXWfze%2Bxvmpu%2FjbkCrcAywrEWym4rhjQ6EqaiS0LSSxfhoQrBD%2FEhH3y%2Bd2l7yU5%2B5Wcu06tIBpcBEOU3XeB7mM0VvZabTbRGx2ZFfRfwEaWk8m1nfv%2FrMaK0op6cTcCJx1uVunZI8JT%2B7gc1YpvACUowqj8UMk8cOBDzmuGnkTe51BiONhqDi0kFLbu194frhV9lOptNlKq2X3thC6B2rkmZ9fgZN%2B4vAXE3Wgbv1eL2Sq%2BmIKlXIUrB5DSk9Z8Snvud2YhPQoGX5cXUeradN%2Fpr723OZhMFK75ZSh5bXNsRdq95AsjS1efB0WEpnU0jWkeXZfjzRvkwi9PiLZvtkzaQ2D5EJzMt8x93PWZXI%2BO40lp%2BWPQm0N5H%2FsrII%2BnEm8FG3nrbnyVYOnIkNYfk4CYip1tED5RqDJ9zOiNHl6MC5ij038rmo4cwCn%2FZnY8iWuaNPFGh4gpAQ0mFAyFM3yJQ5%2BdMHUiEuWVFTGd9kmEBWJA2vdJpGfBM6xiYmyABPWP5wg7VMgmjpTqY8JWVG0FRCSr7LsAJxFJX1DObgVAMS1wLgSuMscStEfnprVPm%2FkIaH4FnqdD%2FX7ASb4hm78PfKG4ui914e9SKPxrrpUuxRIHydGdhRN7Gc8Sqvdm74mSJ%2BNktjBdUmDMKaws8QGOqUBthV6sUddAamhf11N7HlA5OXEbtBHSWoS4yfBDNNIH%2B5P1tT8evt1eftHrhlvwZVdJHgDH8k1uBN3yMINMzHu%2BqfvyHhncnRfHV4G%2Fc5jQnFG1y13np9KvD2C5VIKIsI1tpzgiO8PAt%2Fy166Xkb13%2FMkJMwvEP5wHAZ1Qf%2Buef7duLMqoFGBDlqLhZLOtRpu%2Bsl0nFM2N%2FGYQkHlNtrvOjISpqbKZ&X-Amz-Signature=39f80adeffff03241a3a8c7d191c545b51e4faa7b1f16601a397ea0bc725d8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663F4NB2P%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5kgvx7u38%2BTUW8X70gOAY72iy66IWkzOqhhnv5kEHbAIgeQwgFg6SKwDlPPc6GaG69EWQ79VipCCxX5zqxbWHy6EqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXWfze%2Bxvmpu%2FjbkCrcAywrEWym4rhjQ6EqaiS0LSSxfhoQrBD%2FEhH3y%2Bd2l7yU5%2B5Wcu06tIBpcBEOU3XeB7mM0VvZabTbRGx2ZFfRfwEaWk8m1nfv%2FrMaK0op6cTcCJx1uVunZI8JT%2B7gc1YpvACUowqj8UMk8cOBDzmuGnkTe51BiONhqDi0kFLbu194frhV9lOptNlKq2X3thC6B2rkmZ9fgZN%2B4vAXE3Wgbv1eL2Sq%2BmIKlXIUrB5DSk9Z8Snvud2YhPQoGX5cXUeradN%2Fpr723OZhMFK75ZSh5bXNsRdq95AsjS1efB0WEpnU0jWkeXZfjzRvkwi9PiLZvtkzaQ2D5EJzMt8x93PWZXI%2BO40lp%2BWPQm0N5H%2FsrII%2BnEm8FG3nrbnyVYOnIkNYfk4CYip1tED5RqDJ9zOiNHl6MC5ij038rmo4cwCn%2FZnY8iWuaNPFGh4gpAQ0mFAyFM3yJQ5%2BdMHUiEuWVFTGd9kmEBWJA2vdJpGfBM6xiYmyABPWP5wg7VMgmjpTqY8JWVG0FRCSr7LsAJxFJX1DObgVAMS1wLgSuMscStEfnprVPm%2FkIaH4FnqdD%2FX7ASb4hm78PfKG4ui914e9SKPxrrpUuxRIHydGdhRN7Gc8Sqvdm74mSJ%2BNktjBdUmDMKaws8QGOqUBthV6sUddAamhf11N7HlA5OXEbtBHSWoS4yfBDNNIH%2B5P1tT8evt1eftHrhlvwZVdJHgDH8k1uBN3yMINMzHu%2BqfvyHhncnRfHV4G%2Fc5jQnFG1y13np9KvD2C5VIKIsI1tpzgiO8PAt%2Fy166Xkb13%2FMkJMwvEP5wHAZ1Qf%2Buef7duLMqoFGBDlqLhZLOtRpu%2Bsl0nFM2N%2FGYQkHlNtrvOjISpqbKZ&X-Amz-Signature=b7f484578ec63f3fbcbc22f2dd6d6e4fcac8739c03a283254139785dd238d33d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663F4NB2P%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5kgvx7u38%2BTUW8X70gOAY72iy66IWkzOqhhnv5kEHbAIgeQwgFg6SKwDlPPc6GaG69EWQ79VipCCxX5zqxbWHy6EqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXWfze%2Bxvmpu%2FjbkCrcAywrEWym4rhjQ6EqaiS0LSSxfhoQrBD%2FEhH3y%2Bd2l7yU5%2B5Wcu06tIBpcBEOU3XeB7mM0VvZabTbRGx2ZFfRfwEaWk8m1nfv%2FrMaK0op6cTcCJx1uVunZI8JT%2B7gc1YpvACUowqj8UMk8cOBDzmuGnkTe51BiONhqDi0kFLbu194frhV9lOptNlKq2X3thC6B2rkmZ9fgZN%2B4vAXE3Wgbv1eL2Sq%2BmIKlXIUrB5DSk9Z8Snvud2YhPQoGX5cXUeradN%2Fpr723OZhMFK75ZSh5bXNsRdq95AsjS1efB0WEpnU0jWkeXZfjzRvkwi9PiLZvtkzaQ2D5EJzMt8x93PWZXI%2BO40lp%2BWPQm0N5H%2FsrII%2BnEm8FG3nrbnyVYOnIkNYfk4CYip1tED5RqDJ9zOiNHl6MC5ij038rmo4cwCn%2FZnY8iWuaNPFGh4gpAQ0mFAyFM3yJQ5%2BdMHUiEuWVFTGd9kmEBWJA2vdJpGfBM6xiYmyABPWP5wg7VMgmjpTqY8JWVG0FRCSr7LsAJxFJX1DObgVAMS1wLgSuMscStEfnprVPm%2FkIaH4FnqdD%2FX7ASb4hm78PfKG4ui914e9SKPxrrpUuxRIHydGdhRN7Gc8Sqvdm74mSJ%2BNktjBdUmDMKaws8QGOqUBthV6sUddAamhf11N7HlA5OXEbtBHSWoS4yfBDNNIH%2B5P1tT8evt1eftHrhlvwZVdJHgDH8k1uBN3yMINMzHu%2BqfvyHhncnRfHV4G%2Fc5jQnFG1y13np9KvD2C5VIKIsI1tpzgiO8PAt%2Fy166Xkb13%2FMkJMwvEP5wHAZ1Qf%2Buef7duLMqoFGBDlqLhZLOtRpu%2Bsl0nFM2N%2FGYQkHlNtrvOjISpqbKZ&X-Amz-Signature=653a93c8ddfecca07732f36999ed3f69554165a6aba29c6ded959bde05740f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
