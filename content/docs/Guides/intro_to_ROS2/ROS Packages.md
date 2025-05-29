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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIGANCB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe98q4P9wL3C7Sbk3XxcwUNyjjqJ103w%2FcS6iExRwirAIhANmj523kZh0rIGBJTyzNEW4CjI%2B8EGaWTPP6mekvrtrpKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpdtbF96w5rSLkewQq3AOQS26e4j%2BosCaVLtrWKiea7%2B0VkbD3tv6xOEUzjGkTqroBKD1DKyGhIG4esfNaIMjSvtlSX%2BlyYAfj1xUP%2FL9G8q6zhnY2ST5SXaoQBKmTrWrphXWt6wWRbMsjLRYuGPNWa9RkEHaPJDbekMF3vNhRCiQVeCgNV%2FmAilMD2%2BGSpYLyCs25orQYvEemaia90KKvx1tLR9J0mZLvNwU5ZNJ7%2BZg6ljmdng2DDcSiaOzDONOOWb9RSj2o19e8%2FwlB3vGC8iBdMSv%2FZda%2FlYsyRWX6vajzEKKixDhB8B5AjfLZo2guSV7UnQ15qwKIpqDDwHmMLP3levxDwfZQSyY3vknTA5L0pH7GyuOh7Hmrvp20%2BIYSWb04zvW7KzvQTk9klq12aiKUS%2Fb2yI6q3O3yQaUgF%2B5TXKJeYsGe0GBr82YdPxESc0u08MAPpv8r5%2FGSKtH7DcrXj6pEiDKtwSYfZFWQl9y%2Bg0nlssLjXZwlssRwJeozQzPu%2FCN7%2B7OlTc44UYJ1U0FOwFMhoy7kusp66mY8xDe%2BpD%2B6zf648C2v7CZid18XNIlA8E%2BlgB2D%2BQ8W2BIbc0bK0FRbiNvXmk%2FOprLKQXnhktGG0t3wbWVD%2BwkbAatiiaAcbivmF%2FkxjjC62t%2FBBjqkAeB%2BSSdwY3VXA%2FBl%2B1jyww0C2QUYJCE1P1NSXNsXRtWKHT8Jk1aoMqRKEYeBD9bEhP1rHVxzONDDXOlvoYcDB1kmL3JbaAuQN0XW%2BoEeZTj0ByWoaNEGkXnWJAAN8d3HmrJEarWy3Eh01hDNigyuI9dOBaUfpesIkT%2FePuuVGLE8xZk5aj8ivmEpIBLpp2WNFPCN8KVxfiIFcWlg3O1wzJ4MKBv%2B&X-Amz-Signature=bf6dbb3d2239dab2acaa4543c554608f1f78fe0749868fcea8ec08285633cb02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIGANCB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe98q4P9wL3C7Sbk3XxcwUNyjjqJ103w%2FcS6iExRwirAIhANmj523kZh0rIGBJTyzNEW4CjI%2B8EGaWTPP6mekvrtrpKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpdtbF96w5rSLkewQq3AOQS26e4j%2BosCaVLtrWKiea7%2B0VkbD3tv6xOEUzjGkTqroBKD1DKyGhIG4esfNaIMjSvtlSX%2BlyYAfj1xUP%2FL9G8q6zhnY2ST5SXaoQBKmTrWrphXWt6wWRbMsjLRYuGPNWa9RkEHaPJDbekMF3vNhRCiQVeCgNV%2FmAilMD2%2BGSpYLyCs25orQYvEemaia90KKvx1tLR9J0mZLvNwU5ZNJ7%2BZg6ljmdng2DDcSiaOzDONOOWb9RSj2o19e8%2FwlB3vGC8iBdMSv%2FZda%2FlYsyRWX6vajzEKKixDhB8B5AjfLZo2guSV7UnQ15qwKIpqDDwHmMLP3levxDwfZQSyY3vknTA5L0pH7GyuOh7Hmrvp20%2BIYSWb04zvW7KzvQTk9klq12aiKUS%2Fb2yI6q3O3yQaUgF%2B5TXKJeYsGe0GBr82YdPxESc0u08MAPpv8r5%2FGSKtH7DcrXj6pEiDKtwSYfZFWQl9y%2Bg0nlssLjXZwlssRwJeozQzPu%2FCN7%2B7OlTc44UYJ1U0FOwFMhoy7kusp66mY8xDe%2BpD%2B6zf648C2v7CZid18XNIlA8E%2BlgB2D%2BQ8W2BIbc0bK0FRbiNvXmk%2FOprLKQXnhktGG0t3wbWVD%2BwkbAatiiaAcbivmF%2FkxjjC62t%2FBBjqkAeB%2BSSdwY3VXA%2FBl%2B1jyww0C2QUYJCE1P1NSXNsXRtWKHT8Jk1aoMqRKEYeBD9bEhP1rHVxzONDDXOlvoYcDB1kmL3JbaAuQN0XW%2BoEeZTj0ByWoaNEGkXnWJAAN8d3HmrJEarWy3Eh01hDNigyuI9dOBaUfpesIkT%2FePuuVGLE8xZk5aj8ivmEpIBLpp2WNFPCN8KVxfiIFcWlg3O1wzJ4MKBv%2B&X-Amz-Signature=f517c6227f36952fc9b7e132e1663097a5966c263b7eb6bbb933a24f8f2a9fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIGANCB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe98q4P9wL3C7Sbk3XxcwUNyjjqJ103w%2FcS6iExRwirAIhANmj523kZh0rIGBJTyzNEW4CjI%2B8EGaWTPP6mekvrtrpKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpdtbF96w5rSLkewQq3AOQS26e4j%2BosCaVLtrWKiea7%2B0VkbD3tv6xOEUzjGkTqroBKD1DKyGhIG4esfNaIMjSvtlSX%2BlyYAfj1xUP%2FL9G8q6zhnY2ST5SXaoQBKmTrWrphXWt6wWRbMsjLRYuGPNWa9RkEHaPJDbekMF3vNhRCiQVeCgNV%2FmAilMD2%2BGSpYLyCs25orQYvEemaia90KKvx1tLR9J0mZLvNwU5ZNJ7%2BZg6ljmdng2DDcSiaOzDONOOWb9RSj2o19e8%2FwlB3vGC8iBdMSv%2FZda%2FlYsyRWX6vajzEKKixDhB8B5AjfLZo2guSV7UnQ15qwKIpqDDwHmMLP3levxDwfZQSyY3vknTA5L0pH7GyuOh7Hmrvp20%2BIYSWb04zvW7KzvQTk9klq12aiKUS%2Fb2yI6q3O3yQaUgF%2B5TXKJeYsGe0GBr82YdPxESc0u08MAPpv8r5%2FGSKtH7DcrXj6pEiDKtwSYfZFWQl9y%2Bg0nlssLjXZwlssRwJeozQzPu%2FCN7%2B7OlTc44UYJ1U0FOwFMhoy7kusp66mY8xDe%2BpD%2B6zf648C2v7CZid18XNIlA8E%2BlgB2D%2BQ8W2BIbc0bK0FRbiNvXmk%2FOprLKQXnhktGG0t3wbWVD%2BwkbAatiiaAcbivmF%2FkxjjC62t%2FBBjqkAeB%2BSSdwY3VXA%2FBl%2B1jyww0C2QUYJCE1P1NSXNsXRtWKHT8Jk1aoMqRKEYeBD9bEhP1rHVxzONDDXOlvoYcDB1kmL3JbaAuQN0XW%2BoEeZTj0ByWoaNEGkXnWJAAN8d3HmrJEarWy3Eh01hDNigyuI9dOBaUfpesIkT%2FePuuVGLE8xZk5aj8ivmEpIBLpp2WNFPCN8KVxfiIFcWlg3O1wzJ4MKBv%2B&X-Amz-Signature=224a49cb04882a623d0c3da51bd9cfc68e982a07b6517118bda517a2f17acde2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIGANCB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe98q4P9wL3C7Sbk3XxcwUNyjjqJ103w%2FcS6iExRwirAIhANmj523kZh0rIGBJTyzNEW4CjI%2B8EGaWTPP6mekvrtrpKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpdtbF96w5rSLkewQq3AOQS26e4j%2BosCaVLtrWKiea7%2B0VkbD3tv6xOEUzjGkTqroBKD1DKyGhIG4esfNaIMjSvtlSX%2BlyYAfj1xUP%2FL9G8q6zhnY2ST5SXaoQBKmTrWrphXWt6wWRbMsjLRYuGPNWa9RkEHaPJDbekMF3vNhRCiQVeCgNV%2FmAilMD2%2BGSpYLyCs25orQYvEemaia90KKvx1tLR9J0mZLvNwU5ZNJ7%2BZg6ljmdng2DDcSiaOzDONOOWb9RSj2o19e8%2FwlB3vGC8iBdMSv%2FZda%2FlYsyRWX6vajzEKKixDhB8B5AjfLZo2guSV7UnQ15qwKIpqDDwHmMLP3levxDwfZQSyY3vknTA5L0pH7GyuOh7Hmrvp20%2BIYSWb04zvW7KzvQTk9klq12aiKUS%2Fb2yI6q3O3yQaUgF%2B5TXKJeYsGe0GBr82YdPxESc0u08MAPpv8r5%2FGSKtH7DcrXj6pEiDKtwSYfZFWQl9y%2Bg0nlssLjXZwlssRwJeozQzPu%2FCN7%2B7OlTc44UYJ1U0FOwFMhoy7kusp66mY8xDe%2BpD%2B6zf648C2v7CZid18XNIlA8E%2BlgB2D%2BQ8W2BIbc0bK0FRbiNvXmk%2FOprLKQXnhktGG0t3wbWVD%2BwkbAatiiaAcbivmF%2FkxjjC62t%2FBBjqkAeB%2BSSdwY3VXA%2FBl%2B1jyww0C2QUYJCE1P1NSXNsXRtWKHT8Jk1aoMqRKEYeBD9bEhP1rHVxzONDDXOlvoYcDB1kmL3JbaAuQN0XW%2BoEeZTj0ByWoaNEGkXnWJAAN8d3HmrJEarWy3Eh01hDNigyuI9dOBaUfpesIkT%2FePuuVGLE8xZk5aj8ivmEpIBLpp2WNFPCN8KVxfiIFcWlg3O1wzJ4MKBv%2B&X-Amz-Signature=11e63d8cc3e21ff5d581d86b4d8a84ea9cb58472041bc1aac0e6852825e0f316&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIGANCB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe98q4P9wL3C7Sbk3XxcwUNyjjqJ103w%2FcS6iExRwirAIhANmj523kZh0rIGBJTyzNEW4CjI%2B8EGaWTPP6mekvrtrpKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpdtbF96w5rSLkewQq3AOQS26e4j%2BosCaVLtrWKiea7%2B0VkbD3tv6xOEUzjGkTqroBKD1DKyGhIG4esfNaIMjSvtlSX%2BlyYAfj1xUP%2FL9G8q6zhnY2ST5SXaoQBKmTrWrphXWt6wWRbMsjLRYuGPNWa9RkEHaPJDbekMF3vNhRCiQVeCgNV%2FmAilMD2%2BGSpYLyCs25orQYvEemaia90KKvx1tLR9J0mZLvNwU5ZNJ7%2BZg6ljmdng2DDcSiaOzDONOOWb9RSj2o19e8%2FwlB3vGC8iBdMSv%2FZda%2FlYsyRWX6vajzEKKixDhB8B5AjfLZo2guSV7UnQ15qwKIpqDDwHmMLP3levxDwfZQSyY3vknTA5L0pH7GyuOh7Hmrvp20%2BIYSWb04zvW7KzvQTk9klq12aiKUS%2Fb2yI6q3O3yQaUgF%2B5TXKJeYsGe0GBr82YdPxESc0u08MAPpv8r5%2FGSKtH7DcrXj6pEiDKtwSYfZFWQl9y%2Bg0nlssLjXZwlssRwJeozQzPu%2FCN7%2B7OlTc44UYJ1U0FOwFMhoy7kusp66mY8xDe%2BpD%2B6zf648C2v7CZid18XNIlA8E%2BlgB2D%2BQ8W2BIbc0bK0FRbiNvXmk%2FOprLKQXnhktGG0t3wbWVD%2BwkbAatiiaAcbivmF%2FkxjjC62t%2FBBjqkAeB%2BSSdwY3VXA%2FBl%2B1jyww0C2QUYJCE1P1NSXNsXRtWKHT8Jk1aoMqRKEYeBD9bEhP1rHVxzONDDXOlvoYcDB1kmL3JbaAuQN0XW%2BoEeZTj0ByWoaNEGkXnWJAAN8d3HmrJEarWy3Eh01hDNigyuI9dOBaUfpesIkT%2FePuuVGLE8xZk5aj8ivmEpIBLpp2WNFPCN8KVxfiIFcWlg3O1wzJ4MKBv%2B&X-Amz-Signature=3efd59b7dd4d5300551acb7e05585666c38f7acd45355e1dabb55ee059ed870e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIGANCB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe98q4P9wL3C7Sbk3XxcwUNyjjqJ103w%2FcS6iExRwirAIhANmj523kZh0rIGBJTyzNEW4CjI%2B8EGaWTPP6mekvrtrpKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpdtbF96w5rSLkewQq3AOQS26e4j%2BosCaVLtrWKiea7%2B0VkbD3tv6xOEUzjGkTqroBKD1DKyGhIG4esfNaIMjSvtlSX%2BlyYAfj1xUP%2FL9G8q6zhnY2ST5SXaoQBKmTrWrphXWt6wWRbMsjLRYuGPNWa9RkEHaPJDbekMF3vNhRCiQVeCgNV%2FmAilMD2%2BGSpYLyCs25orQYvEemaia90KKvx1tLR9J0mZLvNwU5ZNJ7%2BZg6ljmdng2DDcSiaOzDONOOWb9RSj2o19e8%2FwlB3vGC8iBdMSv%2FZda%2FlYsyRWX6vajzEKKixDhB8B5AjfLZo2guSV7UnQ15qwKIpqDDwHmMLP3levxDwfZQSyY3vknTA5L0pH7GyuOh7Hmrvp20%2BIYSWb04zvW7KzvQTk9klq12aiKUS%2Fb2yI6q3O3yQaUgF%2B5TXKJeYsGe0GBr82YdPxESc0u08MAPpv8r5%2FGSKtH7DcrXj6pEiDKtwSYfZFWQl9y%2Bg0nlssLjXZwlssRwJeozQzPu%2FCN7%2B7OlTc44UYJ1U0FOwFMhoy7kusp66mY8xDe%2BpD%2B6zf648C2v7CZid18XNIlA8E%2BlgB2D%2BQ8W2BIbc0bK0FRbiNvXmk%2FOprLKQXnhktGG0t3wbWVD%2BwkbAatiiaAcbivmF%2FkxjjC62t%2FBBjqkAeB%2BSSdwY3VXA%2FBl%2B1jyww0C2QUYJCE1P1NSXNsXRtWKHT8Jk1aoMqRKEYeBD9bEhP1rHVxzONDDXOlvoYcDB1kmL3JbaAuQN0XW%2BoEeZTj0ByWoaNEGkXnWJAAN8d3HmrJEarWy3Eh01hDNigyuI9dOBaUfpesIkT%2FePuuVGLE8xZk5aj8ivmEpIBLpp2WNFPCN8KVxfiIFcWlg3O1wzJ4MKBv%2B&X-Amz-Signature=abff09309f58e3ec545d4842519ce30b31ad84f8e46161b6a9b255cb997590de&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIGANCB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe98q4P9wL3C7Sbk3XxcwUNyjjqJ103w%2FcS6iExRwirAIhANmj523kZh0rIGBJTyzNEW4CjI%2B8EGaWTPP6mekvrtrpKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpdtbF96w5rSLkewQq3AOQS26e4j%2BosCaVLtrWKiea7%2B0VkbD3tv6xOEUzjGkTqroBKD1DKyGhIG4esfNaIMjSvtlSX%2BlyYAfj1xUP%2FL9G8q6zhnY2ST5SXaoQBKmTrWrphXWt6wWRbMsjLRYuGPNWa9RkEHaPJDbekMF3vNhRCiQVeCgNV%2FmAilMD2%2BGSpYLyCs25orQYvEemaia90KKvx1tLR9J0mZLvNwU5ZNJ7%2BZg6ljmdng2DDcSiaOzDONOOWb9RSj2o19e8%2FwlB3vGC8iBdMSv%2FZda%2FlYsyRWX6vajzEKKixDhB8B5AjfLZo2guSV7UnQ15qwKIpqDDwHmMLP3levxDwfZQSyY3vknTA5L0pH7GyuOh7Hmrvp20%2BIYSWb04zvW7KzvQTk9klq12aiKUS%2Fb2yI6q3O3yQaUgF%2B5TXKJeYsGe0GBr82YdPxESc0u08MAPpv8r5%2FGSKtH7DcrXj6pEiDKtwSYfZFWQl9y%2Bg0nlssLjXZwlssRwJeozQzPu%2FCN7%2B7OlTc44UYJ1U0FOwFMhoy7kusp66mY8xDe%2BpD%2B6zf648C2v7CZid18XNIlA8E%2BlgB2D%2BQ8W2BIbc0bK0FRbiNvXmk%2FOprLKQXnhktGG0t3wbWVD%2BwkbAatiiaAcbivmF%2FkxjjC62t%2FBBjqkAeB%2BSSdwY3VXA%2FBl%2B1jyww0C2QUYJCE1P1NSXNsXRtWKHT8Jk1aoMqRKEYeBD9bEhP1rHVxzONDDXOlvoYcDB1kmL3JbaAuQN0XW%2BoEeZTj0ByWoaNEGkXnWJAAN8d3HmrJEarWy3Eh01hDNigyuI9dOBaUfpesIkT%2FePuuVGLE8xZk5aj8ivmEpIBLpp2WNFPCN8KVxfiIFcWlg3O1wzJ4MKBv%2B&X-Amz-Signature=d173fedef70a0ce495908a12073825fd1658e76696d216d66ff27dadc40c45ac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
