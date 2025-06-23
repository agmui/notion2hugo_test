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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCXLRTK6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCIQFcvU6Wf4bLsujdDqsYwv0th0tVR1EHsglKw2446NAIgNsWKsDX0yBEcsokN0BWRkAZrEad%2F0sumdmxRpAgrbhEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2monS1wosi1DbdCyrcAyhC8fvo8x%2FA1t7K%2FO%2Ft50xtzunfvsl9HJp24Fuv4uygt3N1buAcPiB3bzZ%2BcuPzWAYF2L6aL82Lq46K9cCgW64tZZDstg6x3zNt5Oaf920m6%2FK6W36D39s2KxVne4zMxU4eGCXxTXYkdo2OGjr9zje%2FGsUQW6klYVPoAbxBbCdiO0g7qreBejV1qzpK%2BQREqMgZeBGdReHEqtPiPAuTxLjFlff3rk3hdByR13qzzSmwdcr45DDWCiL0k2%2Fp1VjCS1tLu%2FO3DB9jz%2F7kfNeJ0ZT2AeQ3jm8fhgEbEJOckZ8lAZGuYT7jwO0Q4xF0C%2F35nR9%2F4NQMNkYMpaAfLd5H8UOWSWg1rPfZdby4Gk9xpeLVwAb7Cz%2BMkKVwRLMK8BbWNx10l9spLv3KLvohtrTPG31d37Qq10pHWHP0JMEL%2BSDojKyeFvk4jKlzhyqbBAkBOaTaYfTdI7MbtB1Aq1lA%2FykyMi6ozF6hJgWGHK1IUbGX6kjXqDJyZluBMu96Cli4xDJDkaMstedQqi5R7gZl7mkAKhzChl9azba0OfYIU8%2Fm2yqKMTZ%2FSRuZfgNkjeL99dACUmlze5b7WvxI2XfSHJpdYFbqUsPDtXY2ADGjg3p8bpHpMF1HkjNVlEqGMLiv48IGOqUBD%2BC3cLe244dk9iBSwSVRMpjNG0Wl2fcC%2FJoZrOC%2BgqmB0WPWxpPOnsti4QO4u0bsG3Q%2FC8Enkj5DcGYH3nz8io4SMpU5K7r1tvsHG2VK6nf0K0GgFzdMQaL%2BjHKr6QiuUC16g6GvCrX6r0aVQdk9mMzuu%2FuYesavztfAHzhg2gcgIK4OYQvsNpMo3rtMT2DpV07eae%2F9Xaz%2BePNAJRZLlJ4dC2kv&X-Amz-Signature=875228aad41f997b124e5dafc3c75c707c3dfe8021133758659183ecc5b8434a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCXLRTK6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCIQFcvU6Wf4bLsujdDqsYwv0th0tVR1EHsglKw2446NAIgNsWKsDX0yBEcsokN0BWRkAZrEad%2F0sumdmxRpAgrbhEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2monS1wosi1DbdCyrcAyhC8fvo8x%2FA1t7K%2FO%2Ft50xtzunfvsl9HJp24Fuv4uygt3N1buAcPiB3bzZ%2BcuPzWAYF2L6aL82Lq46K9cCgW64tZZDstg6x3zNt5Oaf920m6%2FK6W36D39s2KxVne4zMxU4eGCXxTXYkdo2OGjr9zje%2FGsUQW6klYVPoAbxBbCdiO0g7qreBejV1qzpK%2BQREqMgZeBGdReHEqtPiPAuTxLjFlff3rk3hdByR13qzzSmwdcr45DDWCiL0k2%2Fp1VjCS1tLu%2FO3DB9jz%2F7kfNeJ0ZT2AeQ3jm8fhgEbEJOckZ8lAZGuYT7jwO0Q4xF0C%2F35nR9%2F4NQMNkYMpaAfLd5H8UOWSWg1rPfZdby4Gk9xpeLVwAb7Cz%2BMkKVwRLMK8BbWNx10l9spLv3KLvohtrTPG31d37Qq10pHWHP0JMEL%2BSDojKyeFvk4jKlzhyqbBAkBOaTaYfTdI7MbtB1Aq1lA%2FykyMi6ozF6hJgWGHK1IUbGX6kjXqDJyZluBMu96Cli4xDJDkaMstedQqi5R7gZl7mkAKhzChl9azba0OfYIU8%2Fm2yqKMTZ%2FSRuZfgNkjeL99dACUmlze5b7WvxI2XfSHJpdYFbqUsPDtXY2ADGjg3p8bpHpMF1HkjNVlEqGMLiv48IGOqUBD%2BC3cLe244dk9iBSwSVRMpjNG0Wl2fcC%2FJoZrOC%2BgqmB0WPWxpPOnsti4QO4u0bsG3Q%2FC8Enkj5DcGYH3nz8io4SMpU5K7r1tvsHG2VK6nf0K0GgFzdMQaL%2BjHKr6QiuUC16g6GvCrX6r0aVQdk9mMzuu%2FuYesavztfAHzhg2gcgIK4OYQvsNpMo3rtMT2DpV07eae%2F9Xaz%2BePNAJRZLlJ4dC2kv&X-Amz-Signature=2d3fc649c8b5520a31f15022fc05ae9731a11a48c6e2d2cdd8f84d8cc18bca72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCXLRTK6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCIQFcvU6Wf4bLsujdDqsYwv0th0tVR1EHsglKw2446NAIgNsWKsDX0yBEcsokN0BWRkAZrEad%2F0sumdmxRpAgrbhEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2monS1wosi1DbdCyrcAyhC8fvo8x%2FA1t7K%2FO%2Ft50xtzunfvsl9HJp24Fuv4uygt3N1buAcPiB3bzZ%2BcuPzWAYF2L6aL82Lq46K9cCgW64tZZDstg6x3zNt5Oaf920m6%2FK6W36D39s2KxVne4zMxU4eGCXxTXYkdo2OGjr9zje%2FGsUQW6klYVPoAbxBbCdiO0g7qreBejV1qzpK%2BQREqMgZeBGdReHEqtPiPAuTxLjFlff3rk3hdByR13qzzSmwdcr45DDWCiL0k2%2Fp1VjCS1tLu%2FO3DB9jz%2F7kfNeJ0ZT2AeQ3jm8fhgEbEJOckZ8lAZGuYT7jwO0Q4xF0C%2F35nR9%2F4NQMNkYMpaAfLd5H8UOWSWg1rPfZdby4Gk9xpeLVwAb7Cz%2BMkKVwRLMK8BbWNx10l9spLv3KLvohtrTPG31d37Qq10pHWHP0JMEL%2BSDojKyeFvk4jKlzhyqbBAkBOaTaYfTdI7MbtB1Aq1lA%2FykyMi6ozF6hJgWGHK1IUbGX6kjXqDJyZluBMu96Cli4xDJDkaMstedQqi5R7gZl7mkAKhzChl9azba0OfYIU8%2Fm2yqKMTZ%2FSRuZfgNkjeL99dACUmlze5b7WvxI2XfSHJpdYFbqUsPDtXY2ADGjg3p8bpHpMF1HkjNVlEqGMLiv48IGOqUBD%2BC3cLe244dk9iBSwSVRMpjNG0Wl2fcC%2FJoZrOC%2BgqmB0WPWxpPOnsti4QO4u0bsG3Q%2FC8Enkj5DcGYH3nz8io4SMpU5K7r1tvsHG2VK6nf0K0GgFzdMQaL%2BjHKr6QiuUC16g6GvCrX6r0aVQdk9mMzuu%2FuYesavztfAHzhg2gcgIK4OYQvsNpMo3rtMT2DpV07eae%2F9Xaz%2BePNAJRZLlJ4dC2kv&X-Amz-Signature=eea01de16955c368bab882451f4f936028391b824d3b2bbea6f2a862e523854a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCXLRTK6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCIQFcvU6Wf4bLsujdDqsYwv0th0tVR1EHsglKw2446NAIgNsWKsDX0yBEcsokN0BWRkAZrEad%2F0sumdmxRpAgrbhEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2monS1wosi1DbdCyrcAyhC8fvo8x%2FA1t7K%2FO%2Ft50xtzunfvsl9HJp24Fuv4uygt3N1buAcPiB3bzZ%2BcuPzWAYF2L6aL82Lq46K9cCgW64tZZDstg6x3zNt5Oaf920m6%2FK6W36D39s2KxVne4zMxU4eGCXxTXYkdo2OGjr9zje%2FGsUQW6klYVPoAbxBbCdiO0g7qreBejV1qzpK%2BQREqMgZeBGdReHEqtPiPAuTxLjFlff3rk3hdByR13qzzSmwdcr45DDWCiL0k2%2Fp1VjCS1tLu%2FO3DB9jz%2F7kfNeJ0ZT2AeQ3jm8fhgEbEJOckZ8lAZGuYT7jwO0Q4xF0C%2F35nR9%2F4NQMNkYMpaAfLd5H8UOWSWg1rPfZdby4Gk9xpeLVwAb7Cz%2BMkKVwRLMK8BbWNx10l9spLv3KLvohtrTPG31d37Qq10pHWHP0JMEL%2BSDojKyeFvk4jKlzhyqbBAkBOaTaYfTdI7MbtB1Aq1lA%2FykyMi6ozF6hJgWGHK1IUbGX6kjXqDJyZluBMu96Cli4xDJDkaMstedQqi5R7gZl7mkAKhzChl9azba0OfYIU8%2Fm2yqKMTZ%2FSRuZfgNkjeL99dACUmlze5b7WvxI2XfSHJpdYFbqUsPDtXY2ADGjg3p8bpHpMF1HkjNVlEqGMLiv48IGOqUBD%2BC3cLe244dk9iBSwSVRMpjNG0Wl2fcC%2FJoZrOC%2BgqmB0WPWxpPOnsti4QO4u0bsG3Q%2FC8Enkj5DcGYH3nz8io4SMpU5K7r1tvsHG2VK6nf0K0GgFzdMQaL%2BjHKr6QiuUC16g6GvCrX6r0aVQdk9mMzuu%2FuYesavztfAHzhg2gcgIK4OYQvsNpMo3rtMT2DpV07eae%2F9Xaz%2BePNAJRZLlJ4dC2kv&X-Amz-Signature=a2c7d05e302f51e1ffd48869a336c6713305a2230ed9d8bd434657ee95c69680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCXLRTK6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCIQFcvU6Wf4bLsujdDqsYwv0th0tVR1EHsglKw2446NAIgNsWKsDX0yBEcsokN0BWRkAZrEad%2F0sumdmxRpAgrbhEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2monS1wosi1DbdCyrcAyhC8fvo8x%2FA1t7K%2FO%2Ft50xtzunfvsl9HJp24Fuv4uygt3N1buAcPiB3bzZ%2BcuPzWAYF2L6aL82Lq46K9cCgW64tZZDstg6x3zNt5Oaf920m6%2FK6W36D39s2KxVne4zMxU4eGCXxTXYkdo2OGjr9zje%2FGsUQW6klYVPoAbxBbCdiO0g7qreBejV1qzpK%2BQREqMgZeBGdReHEqtPiPAuTxLjFlff3rk3hdByR13qzzSmwdcr45DDWCiL0k2%2Fp1VjCS1tLu%2FO3DB9jz%2F7kfNeJ0ZT2AeQ3jm8fhgEbEJOckZ8lAZGuYT7jwO0Q4xF0C%2F35nR9%2F4NQMNkYMpaAfLd5H8UOWSWg1rPfZdby4Gk9xpeLVwAb7Cz%2BMkKVwRLMK8BbWNx10l9spLv3KLvohtrTPG31d37Qq10pHWHP0JMEL%2BSDojKyeFvk4jKlzhyqbBAkBOaTaYfTdI7MbtB1Aq1lA%2FykyMi6ozF6hJgWGHK1IUbGX6kjXqDJyZluBMu96Cli4xDJDkaMstedQqi5R7gZl7mkAKhzChl9azba0OfYIU8%2Fm2yqKMTZ%2FSRuZfgNkjeL99dACUmlze5b7WvxI2XfSHJpdYFbqUsPDtXY2ADGjg3p8bpHpMF1HkjNVlEqGMLiv48IGOqUBD%2BC3cLe244dk9iBSwSVRMpjNG0Wl2fcC%2FJoZrOC%2BgqmB0WPWxpPOnsti4QO4u0bsG3Q%2FC8Enkj5DcGYH3nz8io4SMpU5K7r1tvsHG2VK6nf0K0GgFzdMQaL%2BjHKr6QiuUC16g6GvCrX6r0aVQdk9mMzuu%2FuYesavztfAHzhg2gcgIK4OYQvsNpMo3rtMT2DpV07eae%2F9Xaz%2BePNAJRZLlJ4dC2kv&X-Amz-Signature=d3424b0333324484d6a347583ab3f6a403fdfbc892af8a55dcad79a6abe18b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCXLRTK6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCIQFcvU6Wf4bLsujdDqsYwv0th0tVR1EHsglKw2446NAIgNsWKsDX0yBEcsokN0BWRkAZrEad%2F0sumdmxRpAgrbhEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2monS1wosi1DbdCyrcAyhC8fvo8x%2FA1t7K%2FO%2Ft50xtzunfvsl9HJp24Fuv4uygt3N1buAcPiB3bzZ%2BcuPzWAYF2L6aL82Lq46K9cCgW64tZZDstg6x3zNt5Oaf920m6%2FK6W36D39s2KxVne4zMxU4eGCXxTXYkdo2OGjr9zje%2FGsUQW6klYVPoAbxBbCdiO0g7qreBejV1qzpK%2BQREqMgZeBGdReHEqtPiPAuTxLjFlff3rk3hdByR13qzzSmwdcr45DDWCiL0k2%2Fp1VjCS1tLu%2FO3DB9jz%2F7kfNeJ0ZT2AeQ3jm8fhgEbEJOckZ8lAZGuYT7jwO0Q4xF0C%2F35nR9%2F4NQMNkYMpaAfLd5H8UOWSWg1rPfZdby4Gk9xpeLVwAb7Cz%2BMkKVwRLMK8BbWNx10l9spLv3KLvohtrTPG31d37Qq10pHWHP0JMEL%2BSDojKyeFvk4jKlzhyqbBAkBOaTaYfTdI7MbtB1Aq1lA%2FykyMi6ozF6hJgWGHK1IUbGX6kjXqDJyZluBMu96Cli4xDJDkaMstedQqi5R7gZl7mkAKhzChl9azba0OfYIU8%2Fm2yqKMTZ%2FSRuZfgNkjeL99dACUmlze5b7WvxI2XfSHJpdYFbqUsPDtXY2ADGjg3p8bpHpMF1HkjNVlEqGMLiv48IGOqUBD%2BC3cLe244dk9iBSwSVRMpjNG0Wl2fcC%2FJoZrOC%2BgqmB0WPWxpPOnsti4QO4u0bsG3Q%2FC8Enkj5DcGYH3nz8io4SMpU5K7r1tvsHG2VK6nf0K0GgFzdMQaL%2BjHKr6QiuUC16g6GvCrX6r0aVQdk9mMzuu%2FuYesavztfAHzhg2gcgIK4OYQvsNpMo3rtMT2DpV07eae%2F9Xaz%2BePNAJRZLlJ4dC2kv&X-Amz-Signature=5d8a13aac587fe0302e6355a967b0dd05d2ec59900aad0a24673c5323ea8fbeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCXLRTK6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCIQFcvU6Wf4bLsujdDqsYwv0th0tVR1EHsglKw2446NAIgNsWKsDX0yBEcsokN0BWRkAZrEad%2F0sumdmxRpAgrbhEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2monS1wosi1DbdCyrcAyhC8fvo8x%2FA1t7K%2FO%2Ft50xtzunfvsl9HJp24Fuv4uygt3N1buAcPiB3bzZ%2BcuPzWAYF2L6aL82Lq46K9cCgW64tZZDstg6x3zNt5Oaf920m6%2FK6W36D39s2KxVne4zMxU4eGCXxTXYkdo2OGjr9zje%2FGsUQW6klYVPoAbxBbCdiO0g7qreBejV1qzpK%2BQREqMgZeBGdReHEqtPiPAuTxLjFlff3rk3hdByR13qzzSmwdcr45DDWCiL0k2%2Fp1VjCS1tLu%2FO3DB9jz%2F7kfNeJ0ZT2AeQ3jm8fhgEbEJOckZ8lAZGuYT7jwO0Q4xF0C%2F35nR9%2F4NQMNkYMpaAfLd5H8UOWSWg1rPfZdby4Gk9xpeLVwAb7Cz%2BMkKVwRLMK8BbWNx10l9spLv3KLvohtrTPG31d37Qq10pHWHP0JMEL%2BSDojKyeFvk4jKlzhyqbBAkBOaTaYfTdI7MbtB1Aq1lA%2FykyMi6ozF6hJgWGHK1IUbGX6kjXqDJyZluBMu96Cli4xDJDkaMstedQqi5R7gZl7mkAKhzChl9azba0OfYIU8%2Fm2yqKMTZ%2FSRuZfgNkjeL99dACUmlze5b7WvxI2XfSHJpdYFbqUsPDtXY2ADGjg3p8bpHpMF1HkjNVlEqGMLiv48IGOqUBD%2BC3cLe244dk9iBSwSVRMpjNG0Wl2fcC%2FJoZrOC%2BgqmB0WPWxpPOnsti4QO4u0bsG3Q%2FC8Enkj5DcGYH3nz8io4SMpU5K7r1tvsHG2VK6nf0K0GgFzdMQaL%2BjHKr6QiuUC16g6GvCrX6r0aVQdk9mMzuu%2FuYesavztfAHzhg2gcgIK4OYQvsNpMo3rtMT2DpV07eae%2F9Xaz%2BePNAJRZLlJ4dC2kv&X-Amz-Signature=3252e5d05645b54d86af10a3732a26470ef1de944055504c67dc56d00ab7c060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
