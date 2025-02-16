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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665446BZPL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHklC9irQqKA0P53yiHSmlkpSTmksjleEoG9feaOciH3AiBNhYE43UnT9m6cvtnaejD6Itos0DdkwRwcWDjyFPBh6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMCQaIIAqP3XWsfviKKtwDhF8buF11Rc%2FuRumpq5kKABHSKvSXVztV5%2Fg4BSOQNjeUnRppnhZYwrsZVjmwaJyCsyZWD1VfcCnrZlRO3C63VbUBe3QAUcPQxyJYEtw%2B%2B3voW02WkguLvgK0qFGPkfGrFeUu2BWi7qm33PrSf1wb5lerm2yGC3EXNTvnuWzLPCyr8y9FngogcjMKhK9m06YCaGuscHwiuQ3lFZraj%2FPv9tR8YAtQuD0Z2q0vpAJ4O0vi2da64JTDYJBCygZP6Ke9ApeUUf%2F9bR7QhoTlRThlP1o%2BMo9Jr4eg326bmP9pS91Ahl%2BpS3H9e74LlswNddstqCgQIbF6tVEUdaxIEV29lAzkw1TOdu%2Bxp%2B8ClrRE8r7KuWnzrqTw2nVUs5EWZhiKpPPwOW1vyoOYOwep8fKyMen7HcfCO0GQKYHA5qLZRUvF2x5UvNVOS7P53WoDZYWQTKb1ijEe63ARfRkIVm0Axs2xPg027EXqoz3Qy8CNPdsnSkpwihmcISmV2tDSAssRtseK4OzooVGwFuqcx53NLQIyluzHTN2AtT7EgDPj%2BK9tVpz4EyWn7MMu3g23sG3QOwvwcEyPEZ4ETAn0wUZhChSX7n7QlK8Q7Zv7sziHi26OBmLq5leM8wan%2BVww1v3FvQY6pgEuLlYcWnwCSp0xuzLxXQIIOEabB%2Bbzl%2FYMc%2FrVjQwQgd0Z3lJF27hoj56EvirQ1GhkZv0UZxpH4hPeXvrutpy4aGiR14Ut0wUjfSMq8d7ducz6HDzredj9RsY6Y3ZK7GjaUqEZ8C4pwRfWyfI7EPCMCR8QF8DSKPy%2BMYaau8SZZxanVHJOk%2B9IxPwIx21Gg06AZ%2Bo2nSw9oHxF8H4D4Fy8q%2F4d%2BvUK&X-Amz-Signature=b08f33c470b9e1826754aeb87d36db4a72180591271db1abe861b950a716afad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665446BZPL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHklC9irQqKA0P53yiHSmlkpSTmksjleEoG9feaOciH3AiBNhYE43UnT9m6cvtnaejD6Itos0DdkwRwcWDjyFPBh6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMCQaIIAqP3XWsfviKKtwDhF8buF11Rc%2FuRumpq5kKABHSKvSXVztV5%2Fg4BSOQNjeUnRppnhZYwrsZVjmwaJyCsyZWD1VfcCnrZlRO3C63VbUBe3QAUcPQxyJYEtw%2B%2B3voW02WkguLvgK0qFGPkfGrFeUu2BWi7qm33PrSf1wb5lerm2yGC3EXNTvnuWzLPCyr8y9FngogcjMKhK9m06YCaGuscHwiuQ3lFZraj%2FPv9tR8YAtQuD0Z2q0vpAJ4O0vi2da64JTDYJBCygZP6Ke9ApeUUf%2F9bR7QhoTlRThlP1o%2BMo9Jr4eg326bmP9pS91Ahl%2BpS3H9e74LlswNddstqCgQIbF6tVEUdaxIEV29lAzkw1TOdu%2Bxp%2B8ClrRE8r7KuWnzrqTw2nVUs5EWZhiKpPPwOW1vyoOYOwep8fKyMen7HcfCO0GQKYHA5qLZRUvF2x5UvNVOS7P53WoDZYWQTKb1ijEe63ARfRkIVm0Axs2xPg027EXqoz3Qy8CNPdsnSkpwihmcISmV2tDSAssRtseK4OzooVGwFuqcx53NLQIyluzHTN2AtT7EgDPj%2BK9tVpz4EyWn7MMu3g23sG3QOwvwcEyPEZ4ETAn0wUZhChSX7n7QlK8Q7Zv7sziHi26OBmLq5leM8wan%2BVww1v3FvQY6pgEuLlYcWnwCSp0xuzLxXQIIOEabB%2Bbzl%2FYMc%2FrVjQwQgd0Z3lJF27hoj56EvirQ1GhkZv0UZxpH4hPeXvrutpy4aGiR14Ut0wUjfSMq8d7ducz6HDzredj9RsY6Y3ZK7GjaUqEZ8C4pwRfWyfI7EPCMCR8QF8DSKPy%2BMYaau8SZZxanVHJOk%2B9IxPwIx21Gg06AZ%2Bo2nSw9oHxF8H4D4Fy8q%2F4d%2BvUK&X-Amz-Signature=8b585e87723dc3400eab5e3803eacefd2bf57d4ff93fa3e8806f54958580a4a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665446BZPL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHklC9irQqKA0P53yiHSmlkpSTmksjleEoG9feaOciH3AiBNhYE43UnT9m6cvtnaejD6Itos0DdkwRwcWDjyFPBh6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMCQaIIAqP3XWsfviKKtwDhF8buF11Rc%2FuRumpq5kKABHSKvSXVztV5%2Fg4BSOQNjeUnRppnhZYwrsZVjmwaJyCsyZWD1VfcCnrZlRO3C63VbUBe3QAUcPQxyJYEtw%2B%2B3voW02WkguLvgK0qFGPkfGrFeUu2BWi7qm33PrSf1wb5lerm2yGC3EXNTvnuWzLPCyr8y9FngogcjMKhK9m06YCaGuscHwiuQ3lFZraj%2FPv9tR8YAtQuD0Z2q0vpAJ4O0vi2da64JTDYJBCygZP6Ke9ApeUUf%2F9bR7QhoTlRThlP1o%2BMo9Jr4eg326bmP9pS91Ahl%2BpS3H9e74LlswNddstqCgQIbF6tVEUdaxIEV29lAzkw1TOdu%2Bxp%2B8ClrRE8r7KuWnzrqTw2nVUs5EWZhiKpPPwOW1vyoOYOwep8fKyMen7HcfCO0GQKYHA5qLZRUvF2x5UvNVOS7P53WoDZYWQTKb1ijEe63ARfRkIVm0Axs2xPg027EXqoz3Qy8CNPdsnSkpwihmcISmV2tDSAssRtseK4OzooVGwFuqcx53NLQIyluzHTN2AtT7EgDPj%2BK9tVpz4EyWn7MMu3g23sG3QOwvwcEyPEZ4ETAn0wUZhChSX7n7QlK8Q7Zv7sziHi26OBmLq5leM8wan%2BVww1v3FvQY6pgEuLlYcWnwCSp0xuzLxXQIIOEabB%2Bbzl%2FYMc%2FrVjQwQgd0Z3lJF27hoj56EvirQ1GhkZv0UZxpH4hPeXvrutpy4aGiR14Ut0wUjfSMq8d7ducz6HDzredj9RsY6Y3ZK7GjaUqEZ8C4pwRfWyfI7EPCMCR8QF8DSKPy%2BMYaau8SZZxanVHJOk%2B9IxPwIx21Gg06AZ%2Bo2nSw9oHxF8H4D4Fy8q%2F4d%2BvUK&X-Amz-Signature=35c250d85ed30d6de776602cc04735916cc3eda975abcec459849a37569c7469&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665446BZPL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHklC9irQqKA0P53yiHSmlkpSTmksjleEoG9feaOciH3AiBNhYE43UnT9m6cvtnaejD6Itos0DdkwRwcWDjyFPBh6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMCQaIIAqP3XWsfviKKtwDhF8buF11Rc%2FuRumpq5kKABHSKvSXVztV5%2Fg4BSOQNjeUnRppnhZYwrsZVjmwaJyCsyZWD1VfcCnrZlRO3C63VbUBe3QAUcPQxyJYEtw%2B%2B3voW02WkguLvgK0qFGPkfGrFeUu2BWi7qm33PrSf1wb5lerm2yGC3EXNTvnuWzLPCyr8y9FngogcjMKhK9m06YCaGuscHwiuQ3lFZraj%2FPv9tR8YAtQuD0Z2q0vpAJ4O0vi2da64JTDYJBCygZP6Ke9ApeUUf%2F9bR7QhoTlRThlP1o%2BMo9Jr4eg326bmP9pS91Ahl%2BpS3H9e74LlswNddstqCgQIbF6tVEUdaxIEV29lAzkw1TOdu%2Bxp%2B8ClrRE8r7KuWnzrqTw2nVUs5EWZhiKpPPwOW1vyoOYOwep8fKyMen7HcfCO0GQKYHA5qLZRUvF2x5UvNVOS7P53WoDZYWQTKb1ijEe63ARfRkIVm0Axs2xPg027EXqoz3Qy8CNPdsnSkpwihmcISmV2tDSAssRtseK4OzooVGwFuqcx53NLQIyluzHTN2AtT7EgDPj%2BK9tVpz4EyWn7MMu3g23sG3QOwvwcEyPEZ4ETAn0wUZhChSX7n7QlK8Q7Zv7sziHi26OBmLq5leM8wan%2BVww1v3FvQY6pgEuLlYcWnwCSp0xuzLxXQIIOEabB%2Bbzl%2FYMc%2FrVjQwQgd0Z3lJF27hoj56EvirQ1GhkZv0UZxpH4hPeXvrutpy4aGiR14Ut0wUjfSMq8d7ducz6HDzredj9RsY6Y3ZK7GjaUqEZ8C4pwRfWyfI7EPCMCR8QF8DSKPy%2BMYaau8SZZxanVHJOk%2B9IxPwIx21Gg06AZ%2Bo2nSw9oHxF8H4D4Fy8q%2F4d%2BvUK&X-Amz-Signature=d2695f6daafb95d4a8e11ff456fd0adc074a5d303489eb4240307b1fe1b42a6f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665446BZPL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHklC9irQqKA0P53yiHSmlkpSTmksjleEoG9feaOciH3AiBNhYE43UnT9m6cvtnaejD6Itos0DdkwRwcWDjyFPBh6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMCQaIIAqP3XWsfviKKtwDhF8buF11Rc%2FuRumpq5kKABHSKvSXVztV5%2Fg4BSOQNjeUnRppnhZYwrsZVjmwaJyCsyZWD1VfcCnrZlRO3C63VbUBe3QAUcPQxyJYEtw%2B%2B3voW02WkguLvgK0qFGPkfGrFeUu2BWi7qm33PrSf1wb5lerm2yGC3EXNTvnuWzLPCyr8y9FngogcjMKhK9m06YCaGuscHwiuQ3lFZraj%2FPv9tR8YAtQuD0Z2q0vpAJ4O0vi2da64JTDYJBCygZP6Ke9ApeUUf%2F9bR7QhoTlRThlP1o%2BMo9Jr4eg326bmP9pS91Ahl%2BpS3H9e74LlswNddstqCgQIbF6tVEUdaxIEV29lAzkw1TOdu%2Bxp%2B8ClrRE8r7KuWnzrqTw2nVUs5EWZhiKpPPwOW1vyoOYOwep8fKyMen7HcfCO0GQKYHA5qLZRUvF2x5UvNVOS7P53WoDZYWQTKb1ijEe63ARfRkIVm0Axs2xPg027EXqoz3Qy8CNPdsnSkpwihmcISmV2tDSAssRtseK4OzooVGwFuqcx53NLQIyluzHTN2AtT7EgDPj%2BK9tVpz4EyWn7MMu3g23sG3QOwvwcEyPEZ4ETAn0wUZhChSX7n7QlK8Q7Zv7sziHi26OBmLq5leM8wan%2BVww1v3FvQY6pgEuLlYcWnwCSp0xuzLxXQIIOEabB%2Bbzl%2FYMc%2FrVjQwQgd0Z3lJF27hoj56EvirQ1GhkZv0UZxpH4hPeXvrutpy4aGiR14Ut0wUjfSMq8d7ducz6HDzredj9RsY6Y3ZK7GjaUqEZ8C4pwRfWyfI7EPCMCR8QF8DSKPy%2BMYaau8SZZxanVHJOk%2B9IxPwIx21Gg06AZ%2Bo2nSw9oHxF8H4D4Fy8q%2F4d%2BvUK&X-Amz-Signature=1ad0d19770bbfc913974ddd032d456020179f6d3a7cfbf44f405fcefd6377496&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665446BZPL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHklC9irQqKA0P53yiHSmlkpSTmksjleEoG9feaOciH3AiBNhYE43UnT9m6cvtnaejD6Itos0DdkwRwcWDjyFPBh6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMCQaIIAqP3XWsfviKKtwDhF8buF11Rc%2FuRumpq5kKABHSKvSXVztV5%2Fg4BSOQNjeUnRppnhZYwrsZVjmwaJyCsyZWD1VfcCnrZlRO3C63VbUBe3QAUcPQxyJYEtw%2B%2B3voW02WkguLvgK0qFGPkfGrFeUu2BWi7qm33PrSf1wb5lerm2yGC3EXNTvnuWzLPCyr8y9FngogcjMKhK9m06YCaGuscHwiuQ3lFZraj%2FPv9tR8YAtQuD0Z2q0vpAJ4O0vi2da64JTDYJBCygZP6Ke9ApeUUf%2F9bR7QhoTlRThlP1o%2BMo9Jr4eg326bmP9pS91Ahl%2BpS3H9e74LlswNddstqCgQIbF6tVEUdaxIEV29lAzkw1TOdu%2Bxp%2B8ClrRE8r7KuWnzrqTw2nVUs5EWZhiKpPPwOW1vyoOYOwep8fKyMen7HcfCO0GQKYHA5qLZRUvF2x5UvNVOS7P53WoDZYWQTKb1ijEe63ARfRkIVm0Axs2xPg027EXqoz3Qy8CNPdsnSkpwihmcISmV2tDSAssRtseK4OzooVGwFuqcx53NLQIyluzHTN2AtT7EgDPj%2BK9tVpz4EyWn7MMu3g23sG3QOwvwcEyPEZ4ETAn0wUZhChSX7n7QlK8Q7Zv7sziHi26OBmLq5leM8wan%2BVww1v3FvQY6pgEuLlYcWnwCSp0xuzLxXQIIOEabB%2Bbzl%2FYMc%2FrVjQwQgd0Z3lJF27hoj56EvirQ1GhkZv0UZxpH4hPeXvrutpy4aGiR14Ut0wUjfSMq8d7ducz6HDzredj9RsY6Y3ZK7GjaUqEZ8C4pwRfWyfI7EPCMCR8QF8DSKPy%2BMYaau8SZZxanVHJOk%2B9IxPwIx21Gg06AZ%2Bo2nSw9oHxF8H4D4Fy8q%2F4d%2BvUK&X-Amz-Signature=343fce262b5c05927617f107ef77494a20f9c1d3725fba6537312e3cf2021ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665446BZPL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHklC9irQqKA0P53yiHSmlkpSTmksjleEoG9feaOciH3AiBNhYE43UnT9m6cvtnaejD6Itos0DdkwRwcWDjyFPBh6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMCQaIIAqP3XWsfviKKtwDhF8buF11Rc%2FuRumpq5kKABHSKvSXVztV5%2Fg4BSOQNjeUnRppnhZYwrsZVjmwaJyCsyZWD1VfcCnrZlRO3C63VbUBe3QAUcPQxyJYEtw%2B%2B3voW02WkguLvgK0qFGPkfGrFeUu2BWi7qm33PrSf1wb5lerm2yGC3EXNTvnuWzLPCyr8y9FngogcjMKhK9m06YCaGuscHwiuQ3lFZraj%2FPv9tR8YAtQuD0Z2q0vpAJ4O0vi2da64JTDYJBCygZP6Ke9ApeUUf%2F9bR7QhoTlRThlP1o%2BMo9Jr4eg326bmP9pS91Ahl%2BpS3H9e74LlswNddstqCgQIbF6tVEUdaxIEV29lAzkw1TOdu%2Bxp%2B8ClrRE8r7KuWnzrqTw2nVUs5EWZhiKpPPwOW1vyoOYOwep8fKyMen7HcfCO0GQKYHA5qLZRUvF2x5UvNVOS7P53WoDZYWQTKb1ijEe63ARfRkIVm0Axs2xPg027EXqoz3Qy8CNPdsnSkpwihmcISmV2tDSAssRtseK4OzooVGwFuqcx53NLQIyluzHTN2AtT7EgDPj%2BK9tVpz4EyWn7MMu3g23sG3QOwvwcEyPEZ4ETAn0wUZhChSX7n7QlK8Q7Zv7sziHi26OBmLq5leM8wan%2BVww1v3FvQY6pgEuLlYcWnwCSp0xuzLxXQIIOEabB%2Bbzl%2FYMc%2FrVjQwQgd0Z3lJF27hoj56EvirQ1GhkZv0UZxpH4hPeXvrutpy4aGiR14Ut0wUjfSMq8d7ducz6HDzredj9RsY6Y3ZK7GjaUqEZ8C4pwRfWyfI7EPCMCR8QF8DSKPy%2BMYaau8SZZxanVHJOk%2B9IxPwIx21Gg06AZ%2Bo2nSw9oHxF8H4D4Fy8q%2F4d%2BvUK&X-Amz-Signature=71fe21697a4e181ec1c87ee89d7ed60075097ea296ea0dc7f24a1f4f949434a3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
