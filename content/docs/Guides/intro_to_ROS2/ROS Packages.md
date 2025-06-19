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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDKGIQV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZUgtRy%2BeytLhkq3pFDAM14C4wAbyNZp0OAUoBj9JnAIhAJ4K5hspoI60MRZG09HAaqhlPvrBubec%2BizLVOivQSxSKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIs%2BsoyNwmn8J5vI4q3ANcri2WSGbXvFqn2M4OaHwmq8ThP5wpSgN8tneqvD%2BwHuQULF6VUW8saNmwquHsGx1O5Lh2oDisW6CryfaNnYvZ6HSPqelr5jEeMMC4wo4UNyf%2FvCP3ewWqjD%2F%2FDc%2FXiWiNTpoPiZYXQHl6rj2x%2BUTFR2JqBNtB%2FxAWlgkUoDKezAHfsuPfhc75jEZxb6wP45XT2zpMjq5JAbzP4BRB9Kin%2BbCm9lHIqDcjfKUFKSrMLE1YAKu2efwXQ%2FzDhZml4rxMPWS6hSeYyLDsW5yin8PhhUixo%2Bg9%2BpucsIr5AjjYuCCisqcTn5w8oPxy3eVZY9itb1j0oyEH%2Ff8alidCLWuDr8Q59pBDzin%2BL1aOyAvozzl84%2BYbNp3frlDQxES1CMXLSoEslqwHSHE0PWpGUULksftXwKKgRUIFDBuhhnxLoRorhHXaSxKxvMeA51bDVrhlumRFWeDGI%2Fjbk199GKJ9o%2BYqQK2M5Kt2ooDPEfXt9PwPM%2BM6kgs3rpv0hzkIFNcdG3ssuZ8qyqvkiRITLqUKaYv9CEumTSz7y6OAR8VkgF3EmFn%2FtOataubRIB8xwP9Vn3RK8s8FAhS8nZRI%2FT72%2F9oC83wUoulBtu7XokqZnTWEgaA2Zahnd9e55DD%2B3tDCBjqkASLIlLGhQQyj1tMHVdezDw9fIZc5ABq6uORW3Pc3gL0VZJP7Xa9T42RcvBaHzDFJWg6CYiqliuu8kVLV0P1kwKGBkokx4YreIZMdiCvvRv2QGQf4tdvln4jK8QNumwy191lv%2BaTNwrB3%2F7a%2BEyXlV6%2BvUxXe3flZrgPhZ%2FF9ffuDNCBtWzVMEnDL5RVhOa0l5I8%2BGtJ4nexIjGKK3j%2BmxrAG8p8N&X-Amz-Signature=fcd04d2ee24b094d8de10dbe509ee42e6831dc1ebb16cb07f1b163ec02b1e68a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDKGIQV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZUgtRy%2BeytLhkq3pFDAM14C4wAbyNZp0OAUoBj9JnAIhAJ4K5hspoI60MRZG09HAaqhlPvrBubec%2BizLVOivQSxSKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIs%2BsoyNwmn8J5vI4q3ANcri2WSGbXvFqn2M4OaHwmq8ThP5wpSgN8tneqvD%2BwHuQULF6VUW8saNmwquHsGx1O5Lh2oDisW6CryfaNnYvZ6HSPqelr5jEeMMC4wo4UNyf%2FvCP3ewWqjD%2F%2FDc%2FXiWiNTpoPiZYXQHl6rj2x%2BUTFR2JqBNtB%2FxAWlgkUoDKezAHfsuPfhc75jEZxb6wP45XT2zpMjq5JAbzP4BRB9Kin%2BbCm9lHIqDcjfKUFKSrMLE1YAKu2efwXQ%2FzDhZml4rxMPWS6hSeYyLDsW5yin8PhhUixo%2Bg9%2BpucsIr5AjjYuCCisqcTn5w8oPxy3eVZY9itb1j0oyEH%2Ff8alidCLWuDr8Q59pBDzin%2BL1aOyAvozzl84%2BYbNp3frlDQxES1CMXLSoEslqwHSHE0PWpGUULksftXwKKgRUIFDBuhhnxLoRorhHXaSxKxvMeA51bDVrhlumRFWeDGI%2Fjbk199GKJ9o%2BYqQK2M5Kt2ooDPEfXt9PwPM%2BM6kgs3rpv0hzkIFNcdG3ssuZ8qyqvkiRITLqUKaYv9CEumTSz7y6OAR8VkgF3EmFn%2FtOataubRIB8xwP9Vn3RK8s8FAhS8nZRI%2FT72%2F9oC83wUoulBtu7XokqZnTWEgaA2Zahnd9e55DD%2B3tDCBjqkASLIlLGhQQyj1tMHVdezDw9fIZc5ABq6uORW3Pc3gL0VZJP7Xa9T42RcvBaHzDFJWg6CYiqliuu8kVLV0P1kwKGBkokx4YreIZMdiCvvRv2QGQf4tdvln4jK8QNumwy191lv%2BaTNwrB3%2F7a%2BEyXlV6%2BvUxXe3flZrgPhZ%2FF9ffuDNCBtWzVMEnDL5RVhOa0l5I8%2BGtJ4nexIjGKK3j%2BmxrAG8p8N&X-Amz-Signature=d5abb9ea672cba6e69b09c435daf1fc19f364fed1536926d3b0339bf829af002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDKGIQV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZUgtRy%2BeytLhkq3pFDAM14C4wAbyNZp0OAUoBj9JnAIhAJ4K5hspoI60MRZG09HAaqhlPvrBubec%2BizLVOivQSxSKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIs%2BsoyNwmn8J5vI4q3ANcri2WSGbXvFqn2M4OaHwmq8ThP5wpSgN8tneqvD%2BwHuQULF6VUW8saNmwquHsGx1O5Lh2oDisW6CryfaNnYvZ6HSPqelr5jEeMMC4wo4UNyf%2FvCP3ewWqjD%2F%2FDc%2FXiWiNTpoPiZYXQHl6rj2x%2BUTFR2JqBNtB%2FxAWlgkUoDKezAHfsuPfhc75jEZxb6wP45XT2zpMjq5JAbzP4BRB9Kin%2BbCm9lHIqDcjfKUFKSrMLE1YAKu2efwXQ%2FzDhZml4rxMPWS6hSeYyLDsW5yin8PhhUixo%2Bg9%2BpucsIr5AjjYuCCisqcTn5w8oPxy3eVZY9itb1j0oyEH%2Ff8alidCLWuDr8Q59pBDzin%2BL1aOyAvozzl84%2BYbNp3frlDQxES1CMXLSoEslqwHSHE0PWpGUULksftXwKKgRUIFDBuhhnxLoRorhHXaSxKxvMeA51bDVrhlumRFWeDGI%2Fjbk199GKJ9o%2BYqQK2M5Kt2ooDPEfXt9PwPM%2BM6kgs3rpv0hzkIFNcdG3ssuZ8qyqvkiRITLqUKaYv9CEumTSz7y6OAR8VkgF3EmFn%2FtOataubRIB8xwP9Vn3RK8s8FAhS8nZRI%2FT72%2F9oC83wUoulBtu7XokqZnTWEgaA2Zahnd9e55DD%2B3tDCBjqkASLIlLGhQQyj1tMHVdezDw9fIZc5ABq6uORW3Pc3gL0VZJP7Xa9T42RcvBaHzDFJWg6CYiqliuu8kVLV0P1kwKGBkokx4YreIZMdiCvvRv2QGQf4tdvln4jK8QNumwy191lv%2BaTNwrB3%2F7a%2BEyXlV6%2BvUxXe3flZrgPhZ%2FF9ffuDNCBtWzVMEnDL5RVhOa0l5I8%2BGtJ4nexIjGKK3j%2BmxrAG8p8N&X-Amz-Signature=4482e5038e4dd5e52909bbf19c5a3b29ef337110882f2e6e61ae558516230269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDKGIQV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZUgtRy%2BeytLhkq3pFDAM14C4wAbyNZp0OAUoBj9JnAIhAJ4K5hspoI60MRZG09HAaqhlPvrBubec%2BizLVOivQSxSKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIs%2BsoyNwmn8J5vI4q3ANcri2WSGbXvFqn2M4OaHwmq8ThP5wpSgN8tneqvD%2BwHuQULF6VUW8saNmwquHsGx1O5Lh2oDisW6CryfaNnYvZ6HSPqelr5jEeMMC4wo4UNyf%2FvCP3ewWqjD%2F%2FDc%2FXiWiNTpoPiZYXQHl6rj2x%2BUTFR2JqBNtB%2FxAWlgkUoDKezAHfsuPfhc75jEZxb6wP45XT2zpMjq5JAbzP4BRB9Kin%2BbCm9lHIqDcjfKUFKSrMLE1YAKu2efwXQ%2FzDhZml4rxMPWS6hSeYyLDsW5yin8PhhUixo%2Bg9%2BpucsIr5AjjYuCCisqcTn5w8oPxy3eVZY9itb1j0oyEH%2Ff8alidCLWuDr8Q59pBDzin%2BL1aOyAvozzl84%2BYbNp3frlDQxES1CMXLSoEslqwHSHE0PWpGUULksftXwKKgRUIFDBuhhnxLoRorhHXaSxKxvMeA51bDVrhlumRFWeDGI%2Fjbk199GKJ9o%2BYqQK2M5Kt2ooDPEfXt9PwPM%2BM6kgs3rpv0hzkIFNcdG3ssuZ8qyqvkiRITLqUKaYv9CEumTSz7y6OAR8VkgF3EmFn%2FtOataubRIB8xwP9Vn3RK8s8FAhS8nZRI%2FT72%2F9oC83wUoulBtu7XokqZnTWEgaA2Zahnd9e55DD%2B3tDCBjqkASLIlLGhQQyj1tMHVdezDw9fIZc5ABq6uORW3Pc3gL0VZJP7Xa9T42RcvBaHzDFJWg6CYiqliuu8kVLV0P1kwKGBkokx4YreIZMdiCvvRv2QGQf4tdvln4jK8QNumwy191lv%2BaTNwrB3%2F7a%2BEyXlV6%2BvUxXe3flZrgPhZ%2FF9ffuDNCBtWzVMEnDL5RVhOa0l5I8%2BGtJ4nexIjGKK3j%2BmxrAG8p8N&X-Amz-Signature=192225fb6b82acd36d3eeb9d26b689af95eb23ca8fd639642f692c594ccaea28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDKGIQV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZUgtRy%2BeytLhkq3pFDAM14C4wAbyNZp0OAUoBj9JnAIhAJ4K5hspoI60MRZG09HAaqhlPvrBubec%2BizLVOivQSxSKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIs%2BsoyNwmn8J5vI4q3ANcri2WSGbXvFqn2M4OaHwmq8ThP5wpSgN8tneqvD%2BwHuQULF6VUW8saNmwquHsGx1O5Lh2oDisW6CryfaNnYvZ6HSPqelr5jEeMMC4wo4UNyf%2FvCP3ewWqjD%2F%2FDc%2FXiWiNTpoPiZYXQHl6rj2x%2BUTFR2JqBNtB%2FxAWlgkUoDKezAHfsuPfhc75jEZxb6wP45XT2zpMjq5JAbzP4BRB9Kin%2BbCm9lHIqDcjfKUFKSrMLE1YAKu2efwXQ%2FzDhZml4rxMPWS6hSeYyLDsW5yin8PhhUixo%2Bg9%2BpucsIr5AjjYuCCisqcTn5w8oPxy3eVZY9itb1j0oyEH%2Ff8alidCLWuDr8Q59pBDzin%2BL1aOyAvozzl84%2BYbNp3frlDQxES1CMXLSoEslqwHSHE0PWpGUULksftXwKKgRUIFDBuhhnxLoRorhHXaSxKxvMeA51bDVrhlumRFWeDGI%2Fjbk199GKJ9o%2BYqQK2M5Kt2ooDPEfXt9PwPM%2BM6kgs3rpv0hzkIFNcdG3ssuZ8qyqvkiRITLqUKaYv9CEumTSz7y6OAR8VkgF3EmFn%2FtOataubRIB8xwP9Vn3RK8s8FAhS8nZRI%2FT72%2F9oC83wUoulBtu7XokqZnTWEgaA2Zahnd9e55DD%2B3tDCBjqkASLIlLGhQQyj1tMHVdezDw9fIZc5ABq6uORW3Pc3gL0VZJP7Xa9T42RcvBaHzDFJWg6CYiqliuu8kVLV0P1kwKGBkokx4YreIZMdiCvvRv2QGQf4tdvln4jK8QNumwy191lv%2BaTNwrB3%2F7a%2BEyXlV6%2BvUxXe3flZrgPhZ%2FF9ffuDNCBtWzVMEnDL5RVhOa0l5I8%2BGtJ4nexIjGKK3j%2BmxrAG8p8N&X-Amz-Signature=0075d65eecf8a5e31f4f92641cdffedcb50e26fe498cd8adbfd0b24cfbf24364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDKGIQV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZUgtRy%2BeytLhkq3pFDAM14C4wAbyNZp0OAUoBj9JnAIhAJ4K5hspoI60MRZG09HAaqhlPvrBubec%2BizLVOivQSxSKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIs%2BsoyNwmn8J5vI4q3ANcri2WSGbXvFqn2M4OaHwmq8ThP5wpSgN8tneqvD%2BwHuQULF6VUW8saNmwquHsGx1O5Lh2oDisW6CryfaNnYvZ6HSPqelr5jEeMMC4wo4UNyf%2FvCP3ewWqjD%2F%2FDc%2FXiWiNTpoPiZYXQHl6rj2x%2BUTFR2JqBNtB%2FxAWlgkUoDKezAHfsuPfhc75jEZxb6wP45XT2zpMjq5JAbzP4BRB9Kin%2BbCm9lHIqDcjfKUFKSrMLE1YAKu2efwXQ%2FzDhZml4rxMPWS6hSeYyLDsW5yin8PhhUixo%2Bg9%2BpucsIr5AjjYuCCisqcTn5w8oPxy3eVZY9itb1j0oyEH%2Ff8alidCLWuDr8Q59pBDzin%2BL1aOyAvozzl84%2BYbNp3frlDQxES1CMXLSoEslqwHSHE0PWpGUULksftXwKKgRUIFDBuhhnxLoRorhHXaSxKxvMeA51bDVrhlumRFWeDGI%2Fjbk199GKJ9o%2BYqQK2M5Kt2ooDPEfXt9PwPM%2BM6kgs3rpv0hzkIFNcdG3ssuZ8qyqvkiRITLqUKaYv9CEumTSz7y6OAR8VkgF3EmFn%2FtOataubRIB8xwP9Vn3RK8s8FAhS8nZRI%2FT72%2F9oC83wUoulBtu7XokqZnTWEgaA2Zahnd9e55DD%2B3tDCBjqkASLIlLGhQQyj1tMHVdezDw9fIZc5ABq6uORW3Pc3gL0VZJP7Xa9T42RcvBaHzDFJWg6CYiqliuu8kVLV0P1kwKGBkokx4YreIZMdiCvvRv2QGQf4tdvln4jK8QNumwy191lv%2BaTNwrB3%2F7a%2BEyXlV6%2BvUxXe3flZrgPhZ%2FF9ffuDNCBtWzVMEnDL5RVhOa0l5I8%2BGtJ4nexIjGKK3j%2BmxrAG8p8N&X-Amz-Signature=13b0f2b3e7fff715110b4b07bf0f14c8cbdc85e32fbf55e7b6136588a3a247f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDKGIQV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZUgtRy%2BeytLhkq3pFDAM14C4wAbyNZp0OAUoBj9JnAIhAJ4K5hspoI60MRZG09HAaqhlPvrBubec%2BizLVOivQSxSKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIs%2BsoyNwmn8J5vI4q3ANcri2WSGbXvFqn2M4OaHwmq8ThP5wpSgN8tneqvD%2BwHuQULF6VUW8saNmwquHsGx1O5Lh2oDisW6CryfaNnYvZ6HSPqelr5jEeMMC4wo4UNyf%2FvCP3ewWqjD%2F%2FDc%2FXiWiNTpoPiZYXQHl6rj2x%2BUTFR2JqBNtB%2FxAWlgkUoDKezAHfsuPfhc75jEZxb6wP45XT2zpMjq5JAbzP4BRB9Kin%2BbCm9lHIqDcjfKUFKSrMLE1YAKu2efwXQ%2FzDhZml4rxMPWS6hSeYyLDsW5yin8PhhUixo%2Bg9%2BpucsIr5AjjYuCCisqcTn5w8oPxy3eVZY9itb1j0oyEH%2Ff8alidCLWuDr8Q59pBDzin%2BL1aOyAvozzl84%2BYbNp3frlDQxES1CMXLSoEslqwHSHE0PWpGUULksftXwKKgRUIFDBuhhnxLoRorhHXaSxKxvMeA51bDVrhlumRFWeDGI%2Fjbk199GKJ9o%2BYqQK2M5Kt2ooDPEfXt9PwPM%2BM6kgs3rpv0hzkIFNcdG3ssuZ8qyqvkiRITLqUKaYv9CEumTSz7y6OAR8VkgF3EmFn%2FtOataubRIB8xwP9Vn3RK8s8FAhS8nZRI%2FT72%2F9oC83wUoulBtu7XokqZnTWEgaA2Zahnd9e55DD%2B3tDCBjqkASLIlLGhQQyj1tMHVdezDw9fIZc5ABq6uORW3Pc3gL0VZJP7Xa9T42RcvBaHzDFJWg6CYiqliuu8kVLV0P1kwKGBkokx4YreIZMdiCvvRv2QGQf4tdvln4jK8QNumwy191lv%2BaTNwrB3%2F7a%2BEyXlV6%2BvUxXe3flZrgPhZ%2FF9ffuDNCBtWzVMEnDL5RVhOa0l5I8%2BGtJ4nexIjGKK3j%2BmxrAG8p8N&X-Amz-Signature=3c80219cf36f001c55d789df06bd4abc3119ab16751c2f6f6ddae915f0c0d318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
