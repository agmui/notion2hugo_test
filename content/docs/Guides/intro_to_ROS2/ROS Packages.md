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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DM7VHCW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjAfnJje8oKjfxk%2F4Z%2FNYqw78jWyuPs9eUtCSvivp4wgIhAMGNCaXH54ULCrEemGpUeUsA61D9wwAxvf4ex%2FEd5%2B4HKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE7SleN8sY6VHt4SEq3AN4MSm%2FJh%2BLH4ghIpE8Bj8YaVGdPJv1PjLNXdUKrIq5a%2B%2B%2ByPrRJB5hhq8L%2FSFaytTX4Fu6ZM9QaHSoXzznRHrAi4XhR1rlcOLoT6Oud1hCAfN523Lzclq5wdY1Y4ZXFOsGbyBubZdQJJ5hEJm8YHVYjKyNOKVUPBYQrHV%2FxdZ%2FLAaHLD%2BlyZtUfMasFeK4T0KUl3h%2B%2B7c8t544HyzNLeIfPOIU%2FDnBgsAvRCvH7w9T8mdy0jUDRLhA2q2Oj74P16W8vDhTtbfvbG3k2htB7WE%2B4uSdczMMibIBkgV9n8SuUWTUon8urAJFdWcWLY19t%2F6z0PvfW24U%2F4Z4qlQqudWTwXEJhRBH1LnreAu07UytChzuZSH6gZEf7SntgNxEjowPNzmYvkc45yvQoYK5y1UCkIOcG6v6iDEWOiX8mc3J8Vvo1AmVtdCdBgosTVKbqNfZ81CwfT8OkDn3u7Nh2CPGTFAb0RisQCbmePGmk%2BVCz6r1%2FFDLLLXITgaKhzjKJ051g%2FutKJr98TfovECvWioj7BV%2BgFskKjvqp0Iu8rSp3Dyk0G2lV6yBj1G9KacG61RyycKI0FpLrSQmgXdkGmQl6BO1hS2jIOetTHHyETxA%2BDjZZdzjATW2%2F7aYozDVoZK%2BBjqkAeR5IVhqzlykkoycLJyXfFCnh%2F0T1mpqHo4Lxrz3k05ANlsjE%2BDhcNBlJbRzUYlsLiRI66E%2FV9aUVRkXXQggogR3AwcR1Gz48cel833wsfWDoTHSeHy%2BkL2lzm1FLES4u1Q2SfPx7hWeXcSV29GdE0Az30Us1Of3xWHgkiEzZMvHTxzaqSVvFZMRtm3d6tCJhqXmaJmPLqFgiLZkd8lnowkPbf59&X-Amz-Signature=c6288e08cee91a50cfd2f1b81483c154514a6b36bfcea8a6ebede65356e7f7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DM7VHCW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjAfnJje8oKjfxk%2F4Z%2FNYqw78jWyuPs9eUtCSvivp4wgIhAMGNCaXH54ULCrEemGpUeUsA61D9wwAxvf4ex%2FEd5%2B4HKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE7SleN8sY6VHt4SEq3AN4MSm%2FJh%2BLH4ghIpE8Bj8YaVGdPJv1PjLNXdUKrIq5a%2B%2B%2ByPrRJB5hhq8L%2FSFaytTX4Fu6ZM9QaHSoXzznRHrAi4XhR1rlcOLoT6Oud1hCAfN523Lzclq5wdY1Y4ZXFOsGbyBubZdQJJ5hEJm8YHVYjKyNOKVUPBYQrHV%2FxdZ%2FLAaHLD%2BlyZtUfMasFeK4T0KUl3h%2B%2B7c8t544HyzNLeIfPOIU%2FDnBgsAvRCvH7w9T8mdy0jUDRLhA2q2Oj74P16W8vDhTtbfvbG3k2htB7WE%2B4uSdczMMibIBkgV9n8SuUWTUon8urAJFdWcWLY19t%2F6z0PvfW24U%2F4Z4qlQqudWTwXEJhRBH1LnreAu07UytChzuZSH6gZEf7SntgNxEjowPNzmYvkc45yvQoYK5y1UCkIOcG6v6iDEWOiX8mc3J8Vvo1AmVtdCdBgosTVKbqNfZ81CwfT8OkDn3u7Nh2CPGTFAb0RisQCbmePGmk%2BVCz6r1%2FFDLLLXITgaKhzjKJ051g%2FutKJr98TfovECvWioj7BV%2BgFskKjvqp0Iu8rSp3Dyk0G2lV6yBj1G9KacG61RyycKI0FpLrSQmgXdkGmQl6BO1hS2jIOetTHHyETxA%2BDjZZdzjATW2%2F7aYozDVoZK%2BBjqkAeR5IVhqzlykkoycLJyXfFCnh%2F0T1mpqHo4Lxrz3k05ANlsjE%2BDhcNBlJbRzUYlsLiRI66E%2FV9aUVRkXXQggogR3AwcR1Gz48cel833wsfWDoTHSeHy%2BkL2lzm1FLES4u1Q2SfPx7hWeXcSV29GdE0Az30Us1Of3xWHgkiEzZMvHTxzaqSVvFZMRtm3d6tCJhqXmaJmPLqFgiLZkd8lnowkPbf59&X-Amz-Signature=e726928f4fbfe0cfc71464a6fb8fc904786e8d6009c2e1dadc8023167f559ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DM7VHCW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjAfnJje8oKjfxk%2F4Z%2FNYqw78jWyuPs9eUtCSvivp4wgIhAMGNCaXH54ULCrEemGpUeUsA61D9wwAxvf4ex%2FEd5%2B4HKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE7SleN8sY6VHt4SEq3AN4MSm%2FJh%2BLH4ghIpE8Bj8YaVGdPJv1PjLNXdUKrIq5a%2B%2B%2ByPrRJB5hhq8L%2FSFaytTX4Fu6ZM9QaHSoXzznRHrAi4XhR1rlcOLoT6Oud1hCAfN523Lzclq5wdY1Y4ZXFOsGbyBubZdQJJ5hEJm8YHVYjKyNOKVUPBYQrHV%2FxdZ%2FLAaHLD%2BlyZtUfMasFeK4T0KUl3h%2B%2B7c8t544HyzNLeIfPOIU%2FDnBgsAvRCvH7w9T8mdy0jUDRLhA2q2Oj74P16W8vDhTtbfvbG3k2htB7WE%2B4uSdczMMibIBkgV9n8SuUWTUon8urAJFdWcWLY19t%2F6z0PvfW24U%2F4Z4qlQqudWTwXEJhRBH1LnreAu07UytChzuZSH6gZEf7SntgNxEjowPNzmYvkc45yvQoYK5y1UCkIOcG6v6iDEWOiX8mc3J8Vvo1AmVtdCdBgosTVKbqNfZ81CwfT8OkDn3u7Nh2CPGTFAb0RisQCbmePGmk%2BVCz6r1%2FFDLLLXITgaKhzjKJ051g%2FutKJr98TfovECvWioj7BV%2BgFskKjvqp0Iu8rSp3Dyk0G2lV6yBj1G9KacG61RyycKI0FpLrSQmgXdkGmQl6BO1hS2jIOetTHHyETxA%2BDjZZdzjATW2%2F7aYozDVoZK%2BBjqkAeR5IVhqzlykkoycLJyXfFCnh%2F0T1mpqHo4Lxrz3k05ANlsjE%2BDhcNBlJbRzUYlsLiRI66E%2FV9aUVRkXXQggogR3AwcR1Gz48cel833wsfWDoTHSeHy%2BkL2lzm1FLES4u1Q2SfPx7hWeXcSV29GdE0Az30Us1Of3xWHgkiEzZMvHTxzaqSVvFZMRtm3d6tCJhqXmaJmPLqFgiLZkd8lnowkPbf59&X-Amz-Signature=1fd064696688807a5b6050869a2e58d11a9d50dead5847f70621b2e7ada4a14a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DM7VHCW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjAfnJje8oKjfxk%2F4Z%2FNYqw78jWyuPs9eUtCSvivp4wgIhAMGNCaXH54ULCrEemGpUeUsA61D9wwAxvf4ex%2FEd5%2B4HKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE7SleN8sY6VHt4SEq3AN4MSm%2FJh%2BLH4ghIpE8Bj8YaVGdPJv1PjLNXdUKrIq5a%2B%2B%2ByPrRJB5hhq8L%2FSFaytTX4Fu6ZM9QaHSoXzznRHrAi4XhR1rlcOLoT6Oud1hCAfN523Lzclq5wdY1Y4ZXFOsGbyBubZdQJJ5hEJm8YHVYjKyNOKVUPBYQrHV%2FxdZ%2FLAaHLD%2BlyZtUfMasFeK4T0KUl3h%2B%2B7c8t544HyzNLeIfPOIU%2FDnBgsAvRCvH7w9T8mdy0jUDRLhA2q2Oj74P16W8vDhTtbfvbG3k2htB7WE%2B4uSdczMMibIBkgV9n8SuUWTUon8urAJFdWcWLY19t%2F6z0PvfW24U%2F4Z4qlQqudWTwXEJhRBH1LnreAu07UytChzuZSH6gZEf7SntgNxEjowPNzmYvkc45yvQoYK5y1UCkIOcG6v6iDEWOiX8mc3J8Vvo1AmVtdCdBgosTVKbqNfZ81CwfT8OkDn3u7Nh2CPGTFAb0RisQCbmePGmk%2BVCz6r1%2FFDLLLXITgaKhzjKJ051g%2FutKJr98TfovECvWioj7BV%2BgFskKjvqp0Iu8rSp3Dyk0G2lV6yBj1G9KacG61RyycKI0FpLrSQmgXdkGmQl6BO1hS2jIOetTHHyETxA%2BDjZZdzjATW2%2F7aYozDVoZK%2BBjqkAeR5IVhqzlykkoycLJyXfFCnh%2F0T1mpqHo4Lxrz3k05ANlsjE%2BDhcNBlJbRzUYlsLiRI66E%2FV9aUVRkXXQggogR3AwcR1Gz48cel833wsfWDoTHSeHy%2BkL2lzm1FLES4u1Q2SfPx7hWeXcSV29GdE0Az30Us1Of3xWHgkiEzZMvHTxzaqSVvFZMRtm3d6tCJhqXmaJmPLqFgiLZkd8lnowkPbf59&X-Amz-Signature=2e59cb02fb8c69395c8ec3cc6eeaca23b444c22a33ff922bd3057349d021e83f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DM7VHCW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjAfnJje8oKjfxk%2F4Z%2FNYqw78jWyuPs9eUtCSvivp4wgIhAMGNCaXH54ULCrEemGpUeUsA61D9wwAxvf4ex%2FEd5%2B4HKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE7SleN8sY6VHt4SEq3AN4MSm%2FJh%2BLH4ghIpE8Bj8YaVGdPJv1PjLNXdUKrIq5a%2B%2B%2ByPrRJB5hhq8L%2FSFaytTX4Fu6ZM9QaHSoXzznRHrAi4XhR1rlcOLoT6Oud1hCAfN523Lzclq5wdY1Y4ZXFOsGbyBubZdQJJ5hEJm8YHVYjKyNOKVUPBYQrHV%2FxdZ%2FLAaHLD%2BlyZtUfMasFeK4T0KUl3h%2B%2B7c8t544HyzNLeIfPOIU%2FDnBgsAvRCvH7w9T8mdy0jUDRLhA2q2Oj74P16W8vDhTtbfvbG3k2htB7WE%2B4uSdczMMibIBkgV9n8SuUWTUon8urAJFdWcWLY19t%2F6z0PvfW24U%2F4Z4qlQqudWTwXEJhRBH1LnreAu07UytChzuZSH6gZEf7SntgNxEjowPNzmYvkc45yvQoYK5y1UCkIOcG6v6iDEWOiX8mc3J8Vvo1AmVtdCdBgosTVKbqNfZ81CwfT8OkDn3u7Nh2CPGTFAb0RisQCbmePGmk%2BVCz6r1%2FFDLLLXITgaKhzjKJ051g%2FutKJr98TfovECvWioj7BV%2BgFskKjvqp0Iu8rSp3Dyk0G2lV6yBj1G9KacG61RyycKI0FpLrSQmgXdkGmQl6BO1hS2jIOetTHHyETxA%2BDjZZdzjATW2%2F7aYozDVoZK%2BBjqkAeR5IVhqzlykkoycLJyXfFCnh%2F0T1mpqHo4Lxrz3k05ANlsjE%2BDhcNBlJbRzUYlsLiRI66E%2FV9aUVRkXXQggogR3AwcR1Gz48cel833wsfWDoTHSeHy%2BkL2lzm1FLES4u1Q2SfPx7hWeXcSV29GdE0Az30Us1Of3xWHgkiEzZMvHTxzaqSVvFZMRtm3d6tCJhqXmaJmPLqFgiLZkd8lnowkPbf59&X-Amz-Signature=f178a766d354467d1f1fd382bfb04db0c4d55b44cc36de5de5235464a7cf6d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DM7VHCW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjAfnJje8oKjfxk%2F4Z%2FNYqw78jWyuPs9eUtCSvivp4wgIhAMGNCaXH54ULCrEemGpUeUsA61D9wwAxvf4ex%2FEd5%2B4HKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE7SleN8sY6VHt4SEq3AN4MSm%2FJh%2BLH4ghIpE8Bj8YaVGdPJv1PjLNXdUKrIq5a%2B%2B%2ByPrRJB5hhq8L%2FSFaytTX4Fu6ZM9QaHSoXzznRHrAi4XhR1rlcOLoT6Oud1hCAfN523Lzclq5wdY1Y4ZXFOsGbyBubZdQJJ5hEJm8YHVYjKyNOKVUPBYQrHV%2FxdZ%2FLAaHLD%2BlyZtUfMasFeK4T0KUl3h%2B%2B7c8t544HyzNLeIfPOIU%2FDnBgsAvRCvH7w9T8mdy0jUDRLhA2q2Oj74P16W8vDhTtbfvbG3k2htB7WE%2B4uSdczMMibIBkgV9n8SuUWTUon8urAJFdWcWLY19t%2F6z0PvfW24U%2F4Z4qlQqudWTwXEJhRBH1LnreAu07UytChzuZSH6gZEf7SntgNxEjowPNzmYvkc45yvQoYK5y1UCkIOcG6v6iDEWOiX8mc3J8Vvo1AmVtdCdBgosTVKbqNfZ81CwfT8OkDn3u7Nh2CPGTFAb0RisQCbmePGmk%2BVCz6r1%2FFDLLLXITgaKhzjKJ051g%2FutKJr98TfovECvWioj7BV%2BgFskKjvqp0Iu8rSp3Dyk0G2lV6yBj1G9KacG61RyycKI0FpLrSQmgXdkGmQl6BO1hS2jIOetTHHyETxA%2BDjZZdzjATW2%2F7aYozDVoZK%2BBjqkAeR5IVhqzlykkoycLJyXfFCnh%2F0T1mpqHo4Lxrz3k05ANlsjE%2BDhcNBlJbRzUYlsLiRI66E%2FV9aUVRkXXQggogR3AwcR1Gz48cel833wsfWDoTHSeHy%2BkL2lzm1FLES4u1Q2SfPx7hWeXcSV29GdE0Az30Us1Of3xWHgkiEzZMvHTxzaqSVvFZMRtm3d6tCJhqXmaJmPLqFgiLZkd8lnowkPbf59&X-Amz-Signature=78c33d583c669da0e02043f86dafd30e7ec8dd9b333d8f1b80b1d6966f36de2a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DM7VHCW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjAfnJje8oKjfxk%2F4Z%2FNYqw78jWyuPs9eUtCSvivp4wgIhAMGNCaXH54ULCrEemGpUeUsA61D9wwAxvf4ex%2FEd5%2B4HKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE7SleN8sY6VHt4SEq3AN4MSm%2FJh%2BLH4ghIpE8Bj8YaVGdPJv1PjLNXdUKrIq5a%2B%2B%2ByPrRJB5hhq8L%2FSFaytTX4Fu6ZM9QaHSoXzznRHrAi4XhR1rlcOLoT6Oud1hCAfN523Lzclq5wdY1Y4ZXFOsGbyBubZdQJJ5hEJm8YHVYjKyNOKVUPBYQrHV%2FxdZ%2FLAaHLD%2BlyZtUfMasFeK4T0KUl3h%2B%2B7c8t544HyzNLeIfPOIU%2FDnBgsAvRCvH7w9T8mdy0jUDRLhA2q2Oj74P16W8vDhTtbfvbG3k2htB7WE%2B4uSdczMMibIBkgV9n8SuUWTUon8urAJFdWcWLY19t%2F6z0PvfW24U%2F4Z4qlQqudWTwXEJhRBH1LnreAu07UytChzuZSH6gZEf7SntgNxEjowPNzmYvkc45yvQoYK5y1UCkIOcG6v6iDEWOiX8mc3J8Vvo1AmVtdCdBgosTVKbqNfZ81CwfT8OkDn3u7Nh2CPGTFAb0RisQCbmePGmk%2BVCz6r1%2FFDLLLXITgaKhzjKJ051g%2FutKJr98TfovECvWioj7BV%2BgFskKjvqp0Iu8rSp3Dyk0G2lV6yBj1G9KacG61RyycKI0FpLrSQmgXdkGmQl6BO1hS2jIOetTHHyETxA%2BDjZZdzjATW2%2F7aYozDVoZK%2BBjqkAeR5IVhqzlykkoycLJyXfFCnh%2F0T1mpqHo4Lxrz3k05ANlsjE%2BDhcNBlJbRzUYlsLiRI66E%2FV9aUVRkXXQggogR3AwcR1Gz48cel833wsfWDoTHSeHy%2BkL2lzm1FLES4u1Q2SfPx7hWeXcSV29GdE0Az30Us1Of3xWHgkiEzZMvHTxzaqSVvFZMRtm3d6tCJhqXmaJmPLqFgiLZkd8lnowkPbf59&X-Amz-Signature=1c0d27b6e7397a38ad9c1a8d954becfe16411ad28121bbd96c4422c37ed419e9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
