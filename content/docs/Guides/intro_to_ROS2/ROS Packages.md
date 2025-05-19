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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7MUV4O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM02wld1ERIKU1Qyvc4%2FGiXi6yzZm6GFa8eZYd9E92eAiEAjoQkqvA%2FMnjT%2Fj1X65tthNmtYf70nbx2OKlO5%2F22oXAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP4ILhgvXKX2k0ZfyrcA26y41%2BKdh0unYOg42wc6WbBBVhiv9LSh9iXmdvKta5Rh8b4913gEqrGG6OBt%2Fg3v2u5Uy%2FpIhlnGREKwy0skt7%2FQbsRnVfiIEdL6njnCA2LaXoHxIpCOAY6cGsua7tBpTiiEzCiqv2q372Ue%2BQeUuGcNw95bBq6%2BbY5VJMjM8GQNHZn2Dhmq7yD5RIG6dj2aTvl3eeHoYRzy175rh4KEIhv0jhZlVEnCs4QDMtN6aEulof%2F7ucslSUjDi9AqRuR%2B6uaYsDzCZAPM6ov7Mq4Lw1zL3V9pdKHx86nm3%2FU2z3DMV2HHqkFn72wWexfTJz8498Q9D1pcqP56ql%2BX%2BRayLgR0%2B3gUF2cSli%2FvY%2BkLOwmFJTtl4lIUoeLSySm%2BfYLSEH854UxeK9HjAjWd4p%2B9RG3XuQpfxB9k8X%2BtjL7a0NqtGhwsjRl22GeydCXwBaWJMV0868%2BfTnQdfBat0zr9I8b%2BX1fnDPGwG8lk8SzAmwh2o68sJUBZ7G6ph4STyBMf%2BqPVNNDqNwz5RKA%2FObdQ5rIGfQZ5%2BWAO2GMZtAJjTfxENdUwyuHA62CCkbQKNwtHHm5j4qf%2FFZZ%2B%2F36hKESeJmBkn%2Fr8CiwMD5puRpf15etVhbRhrwRnUCRMTtlMIrkrMEGOqUBVDTqcaQAI9Z6eAt%2B0%2FUt55dJdcn0iaxn%2FUk%2BkxJWW7Jy6BehJ3JrxArQBTnNKVJEcTxRqDH518aDLHvPrjQwg5rz2KW3HBku8Khrs97UHP1xy6k8aPe7DphKuALULc%2FUXUFEJiPnJH5BjVJVfsEYbUwolez7oSSjvfnfwuNikbUtjpOKjf2W53CvfxraZ9Lsqgpegn5ZNGt2hiTaTJrwSaae%2F5EB&X-Amz-Signature=893913626efc62f24008cc09a70718f2702ed410d1ea43b198a12e2f57e45f49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7MUV4O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM02wld1ERIKU1Qyvc4%2FGiXi6yzZm6GFa8eZYd9E92eAiEAjoQkqvA%2FMnjT%2Fj1X65tthNmtYf70nbx2OKlO5%2F22oXAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP4ILhgvXKX2k0ZfyrcA26y41%2BKdh0unYOg42wc6WbBBVhiv9LSh9iXmdvKta5Rh8b4913gEqrGG6OBt%2Fg3v2u5Uy%2FpIhlnGREKwy0skt7%2FQbsRnVfiIEdL6njnCA2LaXoHxIpCOAY6cGsua7tBpTiiEzCiqv2q372Ue%2BQeUuGcNw95bBq6%2BbY5VJMjM8GQNHZn2Dhmq7yD5RIG6dj2aTvl3eeHoYRzy175rh4KEIhv0jhZlVEnCs4QDMtN6aEulof%2F7ucslSUjDi9AqRuR%2B6uaYsDzCZAPM6ov7Mq4Lw1zL3V9pdKHx86nm3%2FU2z3DMV2HHqkFn72wWexfTJz8498Q9D1pcqP56ql%2BX%2BRayLgR0%2B3gUF2cSli%2FvY%2BkLOwmFJTtl4lIUoeLSySm%2BfYLSEH854UxeK9HjAjWd4p%2B9RG3XuQpfxB9k8X%2BtjL7a0NqtGhwsjRl22GeydCXwBaWJMV0868%2BfTnQdfBat0zr9I8b%2BX1fnDPGwG8lk8SzAmwh2o68sJUBZ7G6ph4STyBMf%2BqPVNNDqNwz5RKA%2FObdQ5rIGfQZ5%2BWAO2GMZtAJjTfxENdUwyuHA62CCkbQKNwtHHm5j4qf%2FFZZ%2B%2F36hKESeJmBkn%2Fr8CiwMD5puRpf15etVhbRhrwRnUCRMTtlMIrkrMEGOqUBVDTqcaQAI9Z6eAt%2B0%2FUt55dJdcn0iaxn%2FUk%2BkxJWW7Jy6BehJ3JrxArQBTnNKVJEcTxRqDH518aDLHvPrjQwg5rz2KW3HBku8Khrs97UHP1xy6k8aPe7DphKuALULc%2FUXUFEJiPnJH5BjVJVfsEYbUwolez7oSSjvfnfwuNikbUtjpOKjf2W53CvfxraZ9Lsqgpegn5ZNGt2hiTaTJrwSaae%2F5EB&X-Amz-Signature=fe92b99aef2c0d0ca6e1c4020c037bf6d2ae8f046ee6fe94deda62b3fda88578&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7MUV4O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM02wld1ERIKU1Qyvc4%2FGiXi6yzZm6GFa8eZYd9E92eAiEAjoQkqvA%2FMnjT%2Fj1X65tthNmtYf70nbx2OKlO5%2F22oXAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP4ILhgvXKX2k0ZfyrcA26y41%2BKdh0unYOg42wc6WbBBVhiv9LSh9iXmdvKta5Rh8b4913gEqrGG6OBt%2Fg3v2u5Uy%2FpIhlnGREKwy0skt7%2FQbsRnVfiIEdL6njnCA2LaXoHxIpCOAY6cGsua7tBpTiiEzCiqv2q372Ue%2BQeUuGcNw95bBq6%2BbY5VJMjM8GQNHZn2Dhmq7yD5RIG6dj2aTvl3eeHoYRzy175rh4KEIhv0jhZlVEnCs4QDMtN6aEulof%2F7ucslSUjDi9AqRuR%2B6uaYsDzCZAPM6ov7Mq4Lw1zL3V9pdKHx86nm3%2FU2z3DMV2HHqkFn72wWexfTJz8498Q9D1pcqP56ql%2BX%2BRayLgR0%2B3gUF2cSli%2FvY%2BkLOwmFJTtl4lIUoeLSySm%2BfYLSEH854UxeK9HjAjWd4p%2B9RG3XuQpfxB9k8X%2BtjL7a0NqtGhwsjRl22GeydCXwBaWJMV0868%2BfTnQdfBat0zr9I8b%2BX1fnDPGwG8lk8SzAmwh2o68sJUBZ7G6ph4STyBMf%2BqPVNNDqNwz5RKA%2FObdQ5rIGfQZ5%2BWAO2GMZtAJjTfxENdUwyuHA62CCkbQKNwtHHm5j4qf%2FFZZ%2B%2F36hKESeJmBkn%2Fr8CiwMD5puRpf15etVhbRhrwRnUCRMTtlMIrkrMEGOqUBVDTqcaQAI9Z6eAt%2B0%2FUt55dJdcn0iaxn%2FUk%2BkxJWW7Jy6BehJ3JrxArQBTnNKVJEcTxRqDH518aDLHvPrjQwg5rz2KW3HBku8Khrs97UHP1xy6k8aPe7DphKuALULc%2FUXUFEJiPnJH5BjVJVfsEYbUwolez7oSSjvfnfwuNikbUtjpOKjf2W53CvfxraZ9Lsqgpegn5ZNGt2hiTaTJrwSaae%2F5EB&X-Amz-Signature=ab9f8c80db5b5876e2255a2296b00a4f0d169b722eda3437615ce9a66a7bbcfe&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7MUV4O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM02wld1ERIKU1Qyvc4%2FGiXi6yzZm6GFa8eZYd9E92eAiEAjoQkqvA%2FMnjT%2Fj1X65tthNmtYf70nbx2OKlO5%2F22oXAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP4ILhgvXKX2k0ZfyrcA26y41%2BKdh0unYOg42wc6WbBBVhiv9LSh9iXmdvKta5Rh8b4913gEqrGG6OBt%2Fg3v2u5Uy%2FpIhlnGREKwy0skt7%2FQbsRnVfiIEdL6njnCA2LaXoHxIpCOAY6cGsua7tBpTiiEzCiqv2q372Ue%2BQeUuGcNw95bBq6%2BbY5VJMjM8GQNHZn2Dhmq7yD5RIG6dj2aTvl3eeHoYRzy175rh4KEIhv0jhZlVEnCs4QDMtN6aEulof%2F7ucslSUjDi9AqRuR%2B6uaYsDzCZAPM6ov7Mq4Lw1zL3V9pdKHx86nm3%2FU2z3DMV2HHqkFn72wWexfTJz8498Q9D1pcqP56ql%2BX%2BRayLgR0%2B3gUF2cSli%2FvY%2BkLOwmFJTtl4lIUoeLSySm%2BfYLSEH854UxeK9HjAjWd4p%2B9RG3XuQpfxB9k8X%2BtjL7a0NqtGhwsjRl22GeydCXwBaWJMV0868%2BfTnQdfBat0zr9I8b%2BX1fnDPGwG8lk8SzAmwh2o68sJUBZ7G6ph4STyBMf%2BqPVNNDqNwz5RKA%2FObdQ5rIGfQZ5%2BWAO2GMZtAJjTfxENdUwyuHA62CCkbQKNwtHHm5j4qf%2FFZZ%2B%2F36hKESeJmBkn%2Fr8CiwMD5puRpf15etVhbRhrwRnUCRMTtlMIrkrMEGOqUBVDTqcaQAI9Z6eAt%2B0%2FUt55dJdcn0iaxn%2FUk%2BkxJWW7Jy6BehJ3JrxArQBTnNKVJEcTxRqDH518aDLHvPrjQwg5rz2KW3HBku8Khrs97UHP1xy6k8aPe7DphKuALULc%2FUXUFEJiPnJH5BjVJVfsEYbUwolez7oSSjvfnfwuNikbUtjpOKjf2W53CvfxraZ9Lsqgpegn5ZNGt2hiTaTJrwSaae%2F5EB&X-Amz-Signature=7fb98bfa71510d7b91e5256dff41f11ae42d3a77bc55a580d15a3324fa0a9f12&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7MUV4O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM02wld1ERIKU1Qyvc4%2FGiXi6yzZm6GFa8eZYd9E92eAiEAjoQkqvA%2FMnjT%2Fj1X65tthNmtYf70nbx2OKlO5%2F22oXAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP4ILhgvXKX2k0ZfyrcA26y41%2BKdh0unYOg42wc6WbBBVhiv9LSh9iXmdvKta5Rh8b4913gEqrGG6OBt%2Fg3v2u5Uy%2FpIhlnGREKwy0skt7%2FQbsRnVfiIEdL6njnCA2LaXoHxIpCOAY6cGsua7tBpTiiEzCiqv2q372Ue%2BQeUuGcNw95bBq6%2BbY5VJMjM8GQNHZn2Dhmq7yD5RIG6dj2aTvl3eeHoYRzy175rh4KEIhv0jhZlVEnCs4QDMtN6aEulof%2F7ucslSUjDi9AqRuR%2B6uaYsDzCZAPM6ov7Mq4Lw1zL3V9pdKHx86nm3%2FU2z3DMV2HHqkFn72wWexfTJz8498Q9D1pcqP56ql%2BX%2BRayLgR0%2B3gUF2cSli%2FvY%2BkLOwmFJTtl4lIUoeLSySm%2BfYLSEH854UxeK9HjAjWd4p%2B9RG3XuQpfxB9k8X%2BtjL7a0NqtGhwsjRl22GeydCXwBaWJMV0868%2BfTnQdfBat0zr9I8b%2BX1fnDPGwG8lk8SzAmwh2o68sJUBZ7G6ph4STyBMf%2BqPVNNDqNwz5RKA%2FObdQ5rIGfQZ5%2BWAO2GMZtAJjTfxENdUwyuHA62CCkbQKNwtHHm5j4qf%2FFZZ%2B%2F36hKESeJmBkn%2Fr8CiwMD5puRpf15etVhbRhrwRnUCRMTtlMIrkrMEGOqUBVDTqcaQAI9Z6eAt%2B0%2FUt55dJdcn0iaxn%2FUk%2BkxJWW7Jy6BehJ3JrxArQBTnNKVJEcTxRqDH518aDLHvPrjQwg5rz2KW3HBku8Khrs97UHP1xy6k8aPe7DphKuALULc%2FUXUFEJiPnJH5BjVJVfsEYbUwolez7oSSjvfnfwuNikbUtjpOKjf2W53CvfxraZ9Lsqgpegn5ZNGt2hiTaTJrwSaae%2F5EB&X-Amz-Signature=a5423c286c4efc2ec2522eb15f5a83f85843d080e1d49478a32cb5b51f77c403&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7MUV4O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM02wld1ERIKU1Qyvc4%2FGiXi6yzZm6GFa8eZYd9E92eAiEAjoQkqvA%2FMnjT%2Fj1X65tthNmtYf70nbx2OKlO5%2F22oXAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP4ILhgvXKX2k0ZfyrcA26y41%2BKdh0unYOg42wc6WbBBVhiv9LSh9iXmdvKta5Rh8b4913gEqrGG6OBt%2Fg3v2u5Uy%2FpIhlnGREKwy0skt7%2FQbsRnVfiIEdL6njnCA2LaXoHxIpCOAY6cGsua7tBpTiiEzCiqv2q372Ue%2BQeUuGcNw95bBq6%2BbY5VJMjM8GQNHZn2Dhmq7yD5RIG6dj2aTvl3eeHoYRzy175rh4KEIhv0jhZlVEnCs4QDMtN6aEulof%2F7ucslSUjDi9AqRuR%2B6uaYsDzCZAPM6ov7Mq4Lw1zL3V9pdKHx86nm3%2FU2z3DMV2HHqkFn72wWexfTJz8498Q9D1pcqP56ql%2BX%2BRayLgR0%2B3gUF2cSli%2FvY%2BkLOwmFJTtl4lIUoeLSySm%2BfYLSEH854UxeK9HjAjWd4p%2B9RG3XuQpfxB9k8X%2BtjL7a0NqtGhwsjRl22GeydCXwBaWJMV0868%2BfTnQdfBat0zr9I8b%2BX1fnDPGwG8lk8SzAmwh2o68sJUBZ7G6ph4STyBMf%2BqPVNNDqNwz5RKA%2FObdQ5rIGfQZ5%2BWAO2GMZtAJjTfxENdUwyuHA62CCkbQKNwtHHm5j4qf%2FFZZ%2B%2F36hKESeJmBkn%2Fr8CiwMD5puRpf15etVhbRhrwRnUCRMTtlMIrkrMEGOqUBVDTqcaQAI9Z6eAt%2B0%2FUt55dJdcn0iaxn%2FUk%2BkxJWW7Jy6BehJ3JrxArQBTnNKVJEcTxRqDH518aDLHvPrjQwg5rz2KW3HBku8Khrs97UHP1xy6k8aPe7DphKuALULc%2FUXUFEJiPnJH5BjVJVfsEYbUwolez7oSSjvfnfwuNikbUtjpOKjf2W53CvfxraZ9Lsqgpegn5ZNGt2hiTaTJrwSaae%2F5EB&X-Amz-Signature=bcaf6f16263b8df2c22e52535cf21372f0a31bf445641c972c41e8256a3504e5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7MUV4O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM02wld1ERIKU1Qyvc4%2FGiXi6yzZm6GFa8eZYd9E92eAiEAjoQkqvA%2FMnjT%2Fj1X65tthNmtYf70nbx2OKlO5%2F22oXAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP4ILhgvXKX2k0ZfyrcA26y41%2BKdh0unYOg42wc6WbBBVhiv9LSh9iXmdvKta5Rh8b4913gEqrGG6OBt%2Fg3v2u5Uy%2FpIhlnGREKwy0skt7%2FQbsRnVfiIEdL6njnCA2LaXoHxIpCOAY6cGsua7tBpTiiEzCiqv2q372Ue%2BQeUuGcNw95bBq6%2BbY5VJMjM8GQNHZn2Dhmq7yD5RIG6dj2aTvl3eeHoYRzy175rh4KEIhv0jhZlVEnCs4QDMtN6aEulof%2F7ucslSUjDi9AqRuR%2B6uaYsDzCZAPM6ov7Mq4Lw1zL3V9pdKHx86nm3%2FU2z3DMV2HHqkFn72wWexfTJz8498Q9D1pcqP56ql%2BX%2BRayLgR0%2B3gUF2cSli%2FvY%2BkLOwmFJTtl4lIUoeLSySm%2BfYLSEH854UxeK9HjAjWd4p%2B9RG3XuQpfxB9k8X%2BtjL7a0NqtGhwsjRl22GeydCXwBaWJMV0868%2BfTnQdfBat0zr9I8b%2BX1fnDPGwG8lk8SzAmwh2o68sJUBZ7G6ph4STyBMf%2BqPVNNDqNwz5RKA%2FObdQ5rIGfQZ5%2BWAO2GMZtAJjTfxENdUwyuHA62CCkbQKNwtHHm5j4qf%2FFZZ%2B%2F36hKESeJmBkn%2Fr8CiwMD5puRpf15etVhbRhrwRnUCRMTtlMIrkrMEGOqUBVDTqcaQAI9Z6eAt%2B0%2FUt55dJdcn0iaxn%2FUk%2BkxJWW7Jy6BehJ3JrxArQBTnNKVJEcTxRqDH518aDLHvPrjQwg5rz2KW3HBku8Khrs97UHP1xy6k8aPe7DphKuALULc%2FUXUFEJiPnJH5BjVJVfsEYbUwolez7oSSjvfnfwuNikbUtjpOKjf2W53CvfxraZ9Lsqgpegn5ZNGt2hiTaTJrwSaae%2F5EB&X-Amz-Signature=3e56d42cf622f928cb836c209f59441bf268989a65d23c1dc79614484b4612ee&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
