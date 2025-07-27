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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RBTFWX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCDjccgKjFiAxgVmb8X%2F552uS35Klx77zgFdRDSbdBJKgIhAN92koK43Z%2BNp3BmG5s8oukqjK8XneFW2gTbR5rLAID8Kv8DCG0QABoMNjM3NDIzMTgzODA1IgzbuXRZaf48ZIMbzH8q3AM9W0Mud2TfQUsTdmWWk8Bg%2FEtYi1nPesRkRirblYo4Q3oW4T4FkE51hb7RXds4MvPWh5TicLTeDLwMQdCtGJy%2F%2BT1oaH8RzvzsQQ12VrWW2H9C8f7Wht3zxYU9yi49TYOpsu4qW%2Br64M9fwWzzIqaF8aB0DX26Tx%2BwR%2BACFKcQi4Tq0OyE%2BnXMtRlrDYGrdCEkwKPShTPdU12c5edJ5FnG36IXXIWEar3uTQIIsydedIlFXuYE%2BxHBC0RLrLUH8IdeBdgWmGRAbEQVzuQ9qi6z%2B8xbBXjZARTi2y5tkjzj7ocujTCk5qPas9QCEWSGp8TDLZBFq471bmfG7Ajlaa5vk4pV1F7C0aquT%2BunQPWHz5NdlIRQf8UEyttUcB4j%2FMfMriIJqkbHIe1L5ElX0eRx9yQ%2Fze9zT6qhaieHNpV%2BTYWTJS4PqNYv%2BYn9Ya5RXc7rsFNvTnHEEETJnLFUarlMNikVwK%2BvM7OKtJI0iAQQskZL%2FMAZvbAPLX1NvbKrx3l1Sw9afAeW1HyscMLYiUx78ilxER8%2BPwad6O0mL2Dw266vRj7TSiKc003WBYSQOyotwhNoxHpkF11Zvq8BtfbfqHUl2rA5iJUnH3LYQbeOsdSs7UCg3bvGnDSCdDDGupbEBjqkAUCOglgcT61XwWZ6dGCmvx1TDX4tGpt%2Fqf0llUaaN5qAz0V6KTKoKNmKHOxSG1ckk94%2BEhxwFJNe8kPDb1KBhCv1M2ruGXe7uqB7Ey0LDIFD0hXSUnkJP5TFwWxVHVSP4KusFZ5n7NMkn7O8obgKgzY8A8HxYmzt%2BBkS%2Fb9h9rqRbfwVgZXt%2B%2FiKV4Sm8jgq%2Bg95UrW2Ba%2F4dGes50f%2B9e2Hzh1k&X-Amz-Signature=36005e60292bf0beb2761e872cb4e7760ddeab6db91a3f8c8d1e9fe01289154a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RBTFWX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCDjccgKjFiAxgVmb8X%2F552uS35Klx77zgFdRDSbdBJKgIhAN92koK43Z%2BNp3BmG5s8oukqjK8XneFW2gTbR5rLAID8Kv8DCG0QABoMNjM3NDIzMTgzODA1IgzbuXRZaf48ZIMbzH8q3AM9W0Mud2TfQUsTdmWWk8Bg%2FEtYi1nPesRkRirblYo4Q3oW4T4FkE51hb7RXds4MvPWh5TicLTeDLwMQdCtGJy%2F%2BT1oaH8RzvzsQQ12VrWW2H9C8f7Wht3zxYU9yi49TYOpsu4qW%2Br64M9fwWzzIqaF8aB0DX26Tx%2BwR%2BACFKcQi4Tq0OyE%2BnXMtRlrDYGrdCEkwKPShTPdU12c5edJ5FnG36IXXIWEar3uTQIIsydedIlFXuYE%2BxHBC0RLrLUH8IdeBdgWmGRAbEQVzuQ9qi6z%2B8xbBXjZARTi2y5tkjzj7ocujTCk5qPas9QCEWSGp8TDLZBFq471bmfG7Ajlaa5vk4pV1F7C0aquT%2BunQPWHz5NdlIRQf8UEyttUcB4j%2FMfMriIJqkbHIe1L5ElX0eRx9yQ%2Fze9zT6qhaieHNpV%2BTYWTJS4PqNYv%2BYn9Ya5RXc7rsFNvTnHEEETJnLFUarlMNikVwK%2BvM7OKtJI0iAQQskZL%2FMAZvbAPLX1NvbKrx3l1Sw9afAeW1HyscMLYiUx78ilxER8%2BPwad6O0mL2Dw266vRj7TSiKc003WBYSQOyotwhNoxHpkF11Zvq8BtfbfqHUl2rA5iJUnH3LYQbeOsdSs7UCg3bvGnDSCdDDGupbEBjqkAUCOglgcT61XwWZ6dGCmvx1TDX4tGpt%2Fqf0llUaaN5qAz0V6KTKoKNmKHOxSG1ckk94%2BEhxwFJNe8kPDb1KBhCv1M2ruGXe7uqB7Ey0LDIFD0hXSUnkJP5TFwWxVHVSP4KusFZ5n7NMkn7O8obgKgzY8A8HxYmzt%2BBkS%2Fb9h9rqRbfwVgZXt%2B%2FiKV4Sm8jgq%2Bg95UrW2Ba%2F4dGes50f%2B9e2Hzh1k&X-Amz-Signature=08bcee77277cb7bc9eccb8d203e5a00368c8fc0440e26aeee68baeb36419046e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RBTFWX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCDjccgKjFiAxgVmb8X%2F552uS35Klx77zgFdRDSbdBJKgIhAN92koK43Z%2BNp3BmG5s8oukqjK8XneFW2gTbR5rLAID8Kv8DCG0QABoMNjM3NDIzMTgzODA1IgzbuXRZaf48ZIMbzH8q3AM9W0Mud2TfQUsTdmWWk8Bg%2FEtYi1nPesRkRirblYo4Q3oW4T4FkE51hb7RXds4MvPWh5TicLTeDLwMQdCtGJy%2F%2BT1oaH8RzvzsQQ12VrWW2H9C8f7Wht3zxYU9yi49TYOpsu4qW%2Br64M9fwWzzIqaF8aB0DX26Tx%2BwR%2BACFKcQi4Tq0OyE%2BnXMtRlrDYGrdCEkwKPShTPdU12c5edJ5FnG36IXXIWEar3uTQIIsydedIlFXuYE%2BxHBC0RLrLUH8IdeBdgWmGRAbEQVzuQ9qi6z%2B8xbBXjZARTi2y5tkjzj7ocujTCk5qPas9QCEWSGp8TDLZBFq471bmfG7Ajlaa5vk4pV1F7C0aquT%2BunQPWHz5NdlIRQf8UEyttUcB4j%2FMfMriIJqkbHIe1L5ElX0eRx9yQ%2Fze9zT6qhaieHNpV%2BTYWTJS4PqNYv%2BYn9Ya5RXc7rsFNvTnHEEETJnLFUarlMNikVwK%2BvM7OKtJI0iAQQskZL%2FMAZvbAPLX1NvbKrx3l1Sw9afAeW1HyscMLYiUx78ilxER8%2BPwad6O0mL2Dw266vRj7TSiKc003WBYSQOyotwhNoxHpkF11Zvq8BtfbfqHUl2rA5iJUnH3LYQbeOsdSs7UCg3bvGnDSCdDDGupbEBjqkAUCOglgcT61XwWZ6dGCmvx1TDX4tGpt%2Fqf0llUaaN5qAz0V6KTKoKNmKHOxSG1ckk94%2BEhxwFJNe8kPDb1KBhCv1M2ruGXe7uqB7Ey0LDIFD0hXSUnkJP5TFwWxVHVSP4KusFZ5n7NMkn7O8obgKgzY8A8HxYmzt%2BBkS%2Fb9h9rqRbfwVgZXt%2B%2FiKV4Sm8jgq%2Bg95UrW2Ba%2F4dGes50f%2B9e2Hzh1k&X-Amz-Signature=ffac6fcbe600ac9e04bbadc8acbbe671258d3a623b7958af94f281636353def1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RBTFWX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCDjccgKjFiAxgVmb8X%2F552uS35Klx77zgFdRDSbdBJKgIhAN92koK43Z%2BNp3BmG5s8oukqjK8XneFW2gTbR5rLAID8Kv8DCG0QABoMNjM3NDIzMTgzODA1IgzbuXRZaf48ZIMbzH8q3AM9W0Mud2TfQUsTdmWWk8Bg%2FEtYi1nPesRkRirblYo4Q3oW4T4FkE51hb7RXds4MvPWh5TicLTeDLwMQdCtGJy%2F%2BT1oaH8RzvzsQQ12VrWW2H9C8f7Wht3zxYU9yi49TYOpsu4qW%2Br64M9fwWzzIqaF8aB0DX26Tx%2BwR%2BACFKcQi4Tq0OyE%2BnXMtRlrDYGrdCEkwKPShTPdU12c5edJ5FnG36IXXIWEar3uTQIIsydedIlFXuYE%2BxHBC0RLrLUH8IdeBdgWmGRAbEQVzuQ9qi6z%2B8xbBXjZARTi2y5tkjzj7ocujTCk5qPas9QCEWSGp8TDLZBFq471bmfG7Ajlaa5vk4pV1F7C0aquT%2BunQPWHz5NdlIRQf8UEyttUcB4j%2FMfMriIJqkbHIe1L5ElX0eRx9yQ%2Fze9zT6qhaieHNpV%2BTYWTJS4PqNYv%2BYn9Ya5RXc7rsFNvTnHEEETJnLFUarlMNikVwK%2BvM7OKtJI0iAQQskZL%2FMAZvbAPLX1NvbKrx3l1Sw9afAeW1HyscMLYiUx78ilxER8%2BPwad6O0mL2Dw266vRj7TSiKc003WBYSQOyotwhNoxHpkF11Zvq8BtfbfqHUl2rA5iJUnH3LYQbeOsdSs7UCg3bvGnDSCdDDGupbEBjqkAUCOglgcT61XwWZ6dGCmvx1TDX4tGpt%2Fqf0llUaaN5qAz0V6KTKoKNmKHOxSG1ckk94%2BEhxwFJNe8kPDb1KBhCv1M2ruGXe7uqB7Ey0LDIFD0hXSUnkJP5TFwWxVHVSP4KusFZ5n7NMkn7O8obgKgzY8A8HxYmzt%2BBkS%2Fb9h9rqRbfwVgZXt%2B%2FiKV4Sm8jgq%2Bg95UrW2Ba%2F4dGes50f%2B9e2Hzh1k&X-Amz-Signature=1c496eadfafafc4a142d102f11e34965076e3ac80248229ea7cf966d14eb5c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RBTFWX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCDjccgKjFiAxgVmb8X%2F552uS35Klx77zgFdRDSbdBJKgIhAN92koK43Z%2BNp3BmG5s8oukqjK8XneFW2gTbR5rLAID8Kv8DCG0QABoMNjM3NDIzMTgzODA1IgzbuXRZaf48ZIMbzH8q3AM9W0Mud2TfQUsTdmWWk8Bg%2FEtYi1nPesRkRirblYo4Q3oW4T4FkE51hb7RXds4MvPWh5TicLTeDLwMQdCtGJy%2F%2BT1oaH8RzvzsQQ12VrWW2H9C8f7Wht3zxYU9yi49TYOpsu4qW%2Br64M9fwWzzIqaF8aB0DX26Tx%2BwR%2BACFKcQi4Tq0OyE%2BnXMtRlrDYGrdCEkwKPShTPdU12c5edJ5FnG36IXXIWEar3uTQIIsydedIlFXuYE%2BxHBC0RLrLUH8IdeBdgWmGRAbEQVzuQ9qi6z%2B8xbBXjZARTi2y5tkjzj7ocujTCk5qPas9QCEWSGp8TDLZBFq471bmfG7Ajlaa5vk4pV1F7C0aquT%2BunQPWHz5NdlIRQf8UEyttUcB4j%2FMfMriIJqkbHIe1L5ElX0eRx9yQ%2Fze9zT6qhaieHNpV%2BTYWTJS4PqNYv%2BYn9Ya5RXc7rsFNvTnHEEETJnLFUarlMNikVwK%2BvM7OKtJI0iAQQskZL%2FMAZvbAPLX1NvbKrx3l1Sw9afAeW1HyscMLYiUx78ilxER8%2BPwad6O0mL2Dw266vRj7TSiKc003WBYSQOyotwhNoxHpkF11Zvq8BtfbfqHUl2rA5iJUnH3LYQbeOsdSs7UCg3bvGnDSCdDDGupbEBjqkAUCOglgcT61XwWZ6dGCmvx1TDX4tGpt%2Fqf0llUaaN5qAz0V6KTKoKNmKHOxSG1ckk94%2BEhxwFJNe8kPDb1KBhCv1M2ruGXe7uqB7Ey0LDIFD0hXSUnkJP5TFwWxVHVSP4KusFZ5n7NMkn7O8obgKgzY8A8HxYmzt%2BBkS%2Fb9h9rqRbfwVgZXt%2B%2FiKV4Sm8jgq%2Bg95UrW2Ba%2F4dGes50f%2B9e2Hzh1k&X-Amz-Signature=6caa06b30b132a3bce00cba6b864c0aee953ccb9d1ab8d6267283e48f3d753bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RBTFWX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCDjccgKjFiAxgVmb8X%2F552uS35Klx77zgFdRDSbdBJKgIhAN92koK43Z%2BNp3BmG5s8oukqjK8XneFW2gTbR5rLAID8Kv8DCG0QABoMNjM3NDIzMTgzODA1IgzbuXRZaf48ZIMbzH8q3AM9W0Mud2TfQUsTdmWWk8Bg%2FEtYi1nPesRkRirblYo4Q3oW4T4FkE51hb7RXds4MvPWh5TicLTeDLwMQdCtGJy%2F%2BT1oaH8RzvzsQQ12VrWW2H9C8f7Wht3zxYU9yi49TYOpsu4qW%2Br64M9fwWzzIqaF8aB0DX26Tx%2BwR%2BACFKcQi4Tq0OyE%2BnXMtRlrDYGrdCEkwKPShTPdU12c5edJ5FnG36IXXIWEar3uTQIIsydedIlFXuYE%2BxHBC0RLrLUH8IdeBdgWmGRAbEQVzuQ9qi6z%2B8xbBXjZARTi2y5tkjzj7ocujTCk5qPas9QCEWSGp8TDLZBFq471bmfG7Ajlaa5vk4pV1F7C0aquT%2BunQPWHz5NdlIRQf8UEyttUcB4j%2FMfMriIJqkbHIe1L5ElX0eRx9yQ%2Fze9zT6qhaieHNpV%2BTYWTJS4PqNYv%2BYn9Ya5RXc7rsFNvTnHEEETJnLFUarlMNikVwK%2BvM7OKtJI0iAQQskZL%2FMAZvbAPLX1NvbKrx3l1Sw9afAeW1HyscMLYiUx78ilxER8%2BPwad6O0mL2Dw266vRj7TSiKc003WBYSQOyotwhNoxHpkF11Zvq8BtfbfqHUl2rA5iJUnH3LYQbeOsdSs7UCg3bvGnDSCdDDGupbEBjqkAUCOglgcT61XwWZ6dGCmvx1TDX4tGpt%2Fqf0llUaaN5qAz0V6KTKoKNmKHOxSG1ckk94%2BEhxwFJNe8kPDb1KBhCv1M2ruGXe7uqB7Ey0LDIFD0hXSUnkJP5TFwWxVHVSP4KusFZ5n7NMkn7O8obgKgzY8A8HxYmzt%2BBkS%2Fb9h9rqRbfwVgZXt%2B%2FiKV4Sm8jgq%2Bg95UrW2Ba%2F4dGes50f%2B9e2Hzh1k&X-Amz-Signature=71da9bd1ee5b12b87d55523f45856b65c3ac0311060d3a505dcccc4db49c8620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RBTFWX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCDjccgKjFiAxgVmb8X%2F552uS35Klx77zgFdRDSbdBJKgIhAN92koK43Z%2BNp3BmG5s8oukqjK8XneFW2gTbR5rLAID8Kv8DCG0QABoMNjM3NDIzMTgzODA1IgzbuXRZaf48ZIMbzH8q3AM9W0Mud2TfQUsTdmWWk8Bg%2FEtYi1nPesRkRirblYo4Q3oW4T4FkE51hb7RXds4MvPWh5TicLTeDLwMQdCtGJy%2F%2BT1oaH8RzvzsQQ12VrWW2H9C8f7Wht3zxYU9yi49TYOpsu4qW%2Br64M9fwWzzIqaF8aB0DX26Tx%2BwR%2BACFKcQi4Tq0OyE%2BnXMtRlrDYGrdCEkwKPShTPdU12c5edJ5FnG36IXXIWEar3uTQIIsydedIlFXuYE%2BxHBC0RLrLUH8IdeBdgWmGRAbEQVzuQ9qi6z%2B8xbBXjZARTi2y5tkjzj7ocujTCk5qPas9QCEWSGp8TDLZBFq471bmfG7Ajlaa5vk4pV1F7C0aquT%2BunQPWHz5NdlIRQf8UEyttUcB4j%2FMfMriIJqkbHIe1L5ElX0eRx9yQ%2Fze9zT6qhaieHNpV%2BTYWTJS4PqNYv%2BYn9Ya5RXc7rsFNvTnHEEETJnLFUarlMNikVwK%2BvM7OKtJI0iAQQskZL%2FMAZvbAPLX1NvbKrx3l1Sw9afAeW1HyscMLYiUx78ilxER8%2BPwad6O0mL2Dw266vRj7TSiKc003WBYSQOyotwhNoxHpkF11Zvq8BtfbfqHUl2rA5iJUnH3LYQbeOsdSs7UCg3bvGnDSCdDDGupbEBjqkAUCOglgcT61XwWZ6dGCmvx1TDX4tGpt%2Fqf0llUaaN5qAz0V6KTKoKNmKHOxSG1ckk94%2BEhxwFJNe8kPDb1KBhCv1M2ruGXe7uqB7Ey0LDIFD0hXSUnkJP5TFwWxVHVSP4KusFZ5n7NMkn7O8obgKgzY8A8HxYmzt%2BBkS%2Fb9h9rqRbfwVgZXt%2B%2FiKV4Sm8jgq%2Bg95UrW2Ba%2F4dGes50f%2B9e2Hzh1k&X-Amz-Signature=75ead44ce48a632743c7563e326c1d6c5d73086ea9779e2c0bb7d58193da4fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
