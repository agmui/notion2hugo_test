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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KUGX5NA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxo6Doo93z5SdJJy9135TFaFfuKPBPKUFndHnL6TKmgCIFYli1MFVvmH9YvOa3Z3GddqGecgbEvAtLF6vqCxjzX8KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx153wRtofFagrf%2F7Mq3AOZ%2BujDZcmEwwCtjJHVcHxUP9J6Z9c%2Fs2BVoqZSa1z4gaJHlVLm%2BNKBdCYUZv0xCkBqV7eACoAzKZQsIZxOlBK9d9z3gAn%2F6mSaL0i0nLAfELu%2FedS7BlrMmHAJx3Ybcvr7YHvuZ%2FXfODkU5uOz0%2FPbrGv93WHP6Q%2Fiz9f4hBcPQ9pi3W2sEKiRiJZq9y8Z4s5SaBNlPyNSRd8I3gZ2oFha%2F7mpmBQ0i8cFHvMtILoHzXR16AOldChocpHlnHQayCc8rFP6G1%2BlUsZ9skC1Hd8%2F5Pu%2BxtoXHI286U9XQjL8CE52Ew8l9WKHiH7sIkmolijkiH%2BKegReOqokPRkW7RC00Y%2BQa9fPDI1ywdcvDfvtO7P9HP26fljBdsAppHewSwbgkSnyxToSVmNceopfXzKe%2F8OqqbYMh4M%2FZZtt2IQxCRXuZcouh%2B4F9WnpX%2FFe8hnJc70dnjSVA3wnAGEnr1RoizmH93aDJot1EF%2BVFrBSUEYkgHVu0jGm18QkJdlTA0uMYU53hYbenaM0n1tdBwVF62qFX8AcotIg4W1sE5xFGrSnedWrFRELjzDfdkQvrsezEaIj%2BJG0EN6b3rLNXi6YdKossKCN%2BN8hZG7KPYU%2FMgUFn502RKWpCqv08jDc5OnBBjqnAd8kUU6Z6EAlRPH9MoBTCPWziJRvDRLJnsLbpS%2Bk%2BTOFhW02OW9GJQGRNHtprjdQ3ZvO39zSoP%2BhEALvxgq6V7UtICgo5xobPDosrSTZfwvfJ1ZkXHinnu39WSw2T%2FhPPgzP0EpNYE4r%2FNjXfJ%2FmHXF2DVRoMBDGRm46TZ4Y1ihXspCMf9RZAAcrPIH0R%2FNmL9lccHqkz%2FwKI8zOP77WRHqhZJEH9OI7&X-Amz-Signature=620aa259a647a0ec9abe978232b7091118a4df16a81129c4fd74edcbc0fd670a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KUGX5NA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxo6Doo93z5SdJJy9135TFaFfuKPBPKUFndHnL6TKmgCIFYli1MFVvmH9YvOa3Z3GddqGecgbEvAtLF6vqCxjzX8KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx153wRtofFagrf%2F7Mq3AOZ%2BujDZcmEwwCtjJHVcHxUP9J6Z9c%2Fs2BVoqZSa1z4gaJHlVLm%2BNKBdCYUZv0xCkBqV7eACoAzKZQsIZxOlBK9d9z3gAn%2F6mSaL0i0nLAfELu%2FedS7BlrMmHAJx3Ybcvr7YHvuZ%2FXfODkU5uOz0%2FPbrGv93WHP6Q%2Fiz9f4hBcPQ9pi3W2sEKiRiJZq9y8Z4s5SaBNlPyNSRd8I3gZ2oFha%2F7mpmBQ0i8cFHvMtILoHzXR16AOldChocpHlnHQayCc8rFP6G1%2BlUsZ9skC1Hd8%2F5Pu%2BxtoXHI286U9XQjL8CE52Ew8l9WKHiH7sIkmolijkiH%2BKegReOqokPRkW7RC00Y%2BQa9fPDI1ywdcvDfvtO7P9HP26fljBdsAppHewSwbgkSnyxToSVmNceopfXzKe%2F8OqqbYMh4M%2FZZtt2IQxCRXuZcouh%2B4F9WnpX%2FFe8hnJc70dnjSVA3wnAGEnr1RoizmH93aDJot1EF%2BVFrBSUEYkgHVu0jGm18QkJdlTA0uMYU53hYbenaM0n1tdBwVF62qFX8AcotIg4W1sE5xFGrSnedWrFRELjzDfdkQvrsezEaIj%2BJG0EN6b3rLNXi6YdKossKCN%2BN8hZG7KPYU%2FMgUFn502RKWpCqv08jDc5OnBBjqnAd8kUU6Z6EAlRPH9MoBTCPWziJRvDRLJnsLbpS%2Bk%2BTOFhW02OW9GJQGRNHtprjdQ3ZvO39zSoP%2BhEALvxgq6V7UtICgo5xobPDosrSTZfwvfJ1ZkXHinnu39WSw2T%2FhPPgzP0EpNYE4r%2FNjXfJ%2FmHXF2DVRoMBDGRm46TZ4Y1ihXspCMf9RZAAcrPIH0R%2FNmL9lccHqkz%2FwKI8zOP77WRHqhZJEH9OI7&X-Amz-Signature=0c1f3e5aa5704d84533b97d604b4c680b4ed43fde9ef38dd065e27607169578f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KUGX5NA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxo6Doo93z5SdJJy9135TFaFfuKPBPKUFndHnL6TKmgCIFYli1MFVvmH9YvOa3Z3GddqGecgbEvAtLF6vqCxjzX8KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx153wRtofFagrf%2F7Mq3AOZ%2BujDZcmEwwCtjJHVcHxUP9J6Z9c%2Fs2BVoqZSa1z4gaJHlVLm%2BNKBdCYUZv0xCkBqV7eACoAzKZQsIZxOlBK9d9z3gAn%2F6mSaL0i0nLAfELu%2FedS7BlrMmHAJx3Ybcvr7YHvuZ%2FXfODkU5uOz0%2FPbrGv93WHP6Q%2Fiz9f4hBcPQ9pi3W2sEKiRiJZq9y8Z4s5SaBNlPyNSRd8I3gZ2oFha%2F7mpmBQ0i8cFHvMtILoHzXR16AOldChocpHlnHQayCc8rFP6G1%2BlUsZ9skC1Hd8%2F5Pu%2BxtoXHI286U9XQjL8CE52Ew8l9WKHiH7sIkmolijkiH%2BKegReOqokPRkW7RC00Y%2BQa9fPDI1ywdcvDfvtO7P9HP26fljBdsAppHewSwbgkSnyxToSVmNceopfXzKe%2F8OqqbYMh4M%2FZZtt2IQxCRXuZcouh%2B4F9WnpX%2FFe8hnJc70dnjSVA3wnAGEnr1RoizmH93aDJot1EF%2BVFrBSUEYkgHVu0jGm18QkJdlTA0uMYU53hYbenaM0n1tdBwVF62qFX8AcotIg4W1sE5xFGrSnedWrFRELjzDfdkQvrsezEaIj%2BJG0EN6b3rLNXi6YdKossKCN%2BN8hZG7KPYU%2FMgUFn502RKWpCqv08jDc5OnBBjqnAd8kUU6Z6EAlRPH9MoBTCPWziJRvDRLJnsLbpS%2Bk%2BTOFhW02OW9GJQGRNHtprjdQ3ZvO39zSoP%2BhEALvxgq6V7UtICgo5xobPDosrSTZfwvfJ1ZkXHinnu39WSw2T%2FhPPgzP0EpNYE4r%2FNjXfJ%2FmHXF2DVRoMBDGRm46TZ4Y1ihXspCMf9RZAAcrPIH0R%2FNmL9lccHqkz%2FwKI8zOP77WRHqhZJEH9OI7&X-Amz-Signature=2185ae5fbda40199bea4e80d582f3d8277f39a29d400d5d87dd0ee2bea42ec7a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KUGX5NA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxo6Doo93z5SdJJy9135TFaFfuKPBPKUFndHnL6TKmgCIFYli1MFVvmH9YvOa3Z3GddqGecgbEvAtLF6vqCxjzX8KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx153wRtofFagrf%2F7Mq3AOZ%2BujDZcmEwwCtjJHVcHxUP9J6Z9c%2Fs2BVoqZSa1z4gaJHlVLm%2BNKBdCYUZv0xCkBqV7eACoAzKZQsIZxOlBK9d9z3gAn%2F6mSaL0i0nLAfELu%2FedS7BlrMmHAJx3Ybcvr7YHvuZ%2FXfODkU5uOz0%2FPbrGv93WHP6Q%2Fiz9f4hBcPQ9pi3W2sEKiRiJZq9y8Z4s5SaBNlPyNSRd8I3gZ2oFha%2F7mpmBQ0i8cFHvMtILoHzXR16AOldChocpHlnHQayCc8rFP6G1%2BlUsZ9skC1Hd8%2F5Pu%2BxtoXHI286U9XQjL8CE52Ew8l9WKHiH7sIkmolijkiH%2BKegReOqokPRkW7RC00Y%2BQa9fPDI1ywdcvDfvtO7P9HP26fljBdsAppHewSwbgkSnyxToSVmNceopfXzKe%2F8OqqbYMh4M%2FZZtt2IQxCRXuZcouh%2B4F9WnpX%2FFe8hnJc70dnjSVA3wnAGEnr1RoizmH93aDJot1EF%2BVFrBSUEYkgHVu0jGm18QkJdlTA0uMYU53hYbenaM0n1tdBwVF62qFX8AcotIg4W1sE5xFGrSnedWrFRELjzDfdkQvrsezEaIj%2BJG0EN6b3rLNXi6YdKossKCN%2BN8hZG7KPYU%2FMgUFn502RKWpCqv08jDc5OnBBjqnAd8kUU6Z6EAlRPH9MoBTCPWziJRvDRLJnsLbpS%2Bk%2BTOFhW02OW9GJQGRNHtprjdQ3ZvO39zSoP%2BhEALvxgq6V7UtICgo5xobPDosrSTZfwvfJ1ZkXHinnu39WSw2T%2FhPPgzP0EpNYE4r%2FNjXfJ%2FmHXF2DVRoMBDGRm46TZ4Y1ihXspCMf9RZAAcrPIH0R%2FNmL9lccHqkz%2FwKI8zOP77WRHqhZJEH9OI7&X-Amz-Signature=b162ddc466188f0b487f897d8b88e645e809f4eabd621dc8b2eb8c08df87be9a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KUGX5NA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxo6Doo93z5SdJJy9135TFaFfuKPBPKUFndHnL6TKmgCIFYli1MFVvmH9YvOa3Z3GddqGecgbEvAtLF6vqCxjzX8KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx153wRtofFagrf%2F7Mq3AOZ%2BujDZcmEwwCtjJHVcHxUP9J6Z9c%2Fs2BVoqZSa1z4gaJHlVLm%2BNKBdCYUZv0xCkBqV7eACoAzKZQsIZxOlBK9d9z3gAn%2F6mSaL0i0nLAfELu%2FedS7BlrMmHAJx3Ybcvr7YHvuZ%2FXfODkU5uOz0%2FPbrGv93WHP6Q%2Fiz9f4hBcPQ9pi3W2sEKiRiJZq9y8Z4s5SaBNlPyNSRd8I3gZ2oFha%2F7mpmBQ0i8cFHvMtILoHzXR16AOldChocpHlnHQayCc8rFP6G1%2BlUsZ9skC1Hd8%2F5Pu%2BxtoXHI286U9XQjL8CE52Ew8l9WKHiH7sIkmolijkiH%2BKegReOqokPRkW7RC00Y%2BQa9fPDI1ywdcvDfvtO7P9HP26fljBdsAppHewSwbgkSnyxToSVmNceopfXzKe%2F8OqqbYMh4M%2FZZtt2IQxCRXuZcouh%2B4F9WnpX%2FFe8hnJc70dnjSVA3wnAGEnr1RoizmH93aDJot1EF%2BVFrBSUEYkgHVu0jGm18QkJdlTA0uMYU53hYbenaM0n1tdBwVF62qFX8AcotIg4W1sE5xFGrSnedWrFRELjzDfdkQvrsezEaIj%2BJG0EN6b3rLNXi6YdKossKCN%2BN8hZG7KPYU%2FMgUFn502RKWpCqv08jDc5OnBBjqnAd8kUU6Z6EAlRPH9MoBTCPWziJRvDRLJnsLbpS%2Bk%2BTOFhW02OW9GJQGRNHtprjdQ3ZvO39zSoP%2BhEALvxgq6V7UtICgo5xobPDosrSTZfwvfJ1ZkXHinnu39WSw2T%2FhPPgzP0EpNYE4r%2FNjXfJ%2FmHXF2DVRoMBDGRm46TZ4Y1ihXspCMf9RZAAcrPIH0R%2FNmL9lccHqkz%2FwKI8zOP77WRHqhZJEH9OI7&X-Amz-Signature=0b605deb57ef806367665a233534548d1c1e5da3378fd3ab578c8de896b89869&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KUGX5NA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxo6Doo93z5SdJJy9135TFaFfuKPBPKUFndHnL6TKmgCIFYli1MFVvmH9YvOa3Z3GddqGecgbEvAtLF6vqCxjzX8KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx153wRtofFagrf%2F7Mq3AOZ%2BujDZcmEwwCtjJHVcHxUP9J6Z9c%2Fs2BVoqZSa1z4gaJHlVLm%2BNKBdCYUZv0xCkBqV7eACoAzKZQsIZxOlBK9d9z3gAn%2F6mSaL0i0nLAfELu%2FedS7BlrMmHAJx3Ybcvr7YHvuZ%2FXfODkU5uOz0%2FPbrGv93WHP6Q%2Fiz9f4hBcPQ9pi3W2sEKiRiJZq9y8Z4s5SaBNlPyNSRd8I3gZ2oFha%2F7mpmBQ0i8cFHvMtILoHzXR16AOldChocpHlnHQayCc8rFP6G1%2BlUsZ9skC1Hd8%2F5Pu%2BxtoXHI286U9XQjL8CE52Ew8l9WKHiH7sIkmolijkiH%2BKegReOqokPRkW7RC00Y%2BQa9fPDI1ywdcvDfvtO7P9HP26fljBdsAppHewSwbgkSnyxToSVmNceopfXzKe%2F8OqqbYMh4M%2FZZtt2IQxCRXuZcouh%2B4F9WnpX%2FFe8hnJc70dnjSVA3wnAGEnr1RoizmH93aDJot1EF%2BVFrBSUEYkgHVu0jGm18QkJdlTA0uMYU53hYbenaM0n1tdBwVF62qFX8AcotIg4W1sE5xFGrSnedWrFRELjzDfdkQvrsezEaIj%2BJG0EN6b3rLNXi6YdKossKCN%2BN8hZG7KPYU%2FMgUFn502RKWpCqv08jDc5OnBBjqnAd8kUU6Z6EAlRPH9MoBTCPWziJRvDRLJnsLbpS%2Bk%2BTOFhW02OW9GJQGRNHtprjdQ3ZvO39zSoP%2BhEALvxgq6V7UtICgo5xobPDosrSTZfwvfJ1ZkXHinnu39WSw2T%2FhPPgzP0EpNYE4r%2FNjXfJ%2FmHXF2DVRoMBDGRm46TZ4Y1ihXspCMf9RZAAcrPIH0R%2FNmL9lccHqkz%2FwKI8zOP77WRHqhZJEH9OI7&X-Amz-Signature=a43b2c18edee0114e74212846345cfe8ef4d0dd8a771298c9713518c3775608f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KUGX5NA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxo6Doo93z5SdJJy9135TFaFfuKPBPKUFndHnL6TKmgCIFYli1MFVvmH9YvOa3Z3GddqGecgbEvAtLF6vqCxjzX8KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx153wRtofFagrf%2F7Mq3AOZ%2BujDZcmEwwCtjJHVcHxUP9J6Z9c%2Fs2BVoqZSa1z4gaJHlVLm%2BNKBdCYUZv0xCkBqV7eACoAzKZQsIZxOlBK9d9z3gAn%2F6mSaL0i0nLAfELu%2FedS7BlrMmHAJx3Ybcvr7YHvuZ%2FXfODkU5uOz0%2FPbrGv93WHP6Q%2Fiz9f4hBcPQ9pi3W2sEKiRiJZq9y8Z4s5SaBNlPyNSRd8I3gZ2oFha%2F7mpmBQ0i8cFHvMtILoHzXR16AOldChocpHlnHQayCc8rFP6G1%2BlUsZ9skC1Hd8%2F5Pu%2BxtoXHI286U9XQjL8CE52Ew8l9WKHiH7sIkmolijkiH%2BKegReOqokPRkW7RC00Y%2BQa9fPDI1ywdcvDfvtO7P9HP26fljBdsAppHewSwbgkSnyxToSVmNceopfXzKe%2F8OqqbYMh4M%2FZZtt2IQxCRXuZcouh%2B4F9WnpX%2FFe8hnJc70dnjSVA3wnAGEnr1RoizmH93aDJot1EF%2BVFrBSUEYkgHVu0jGm18QkJdlTA0uMYU53hYbenaM0n1tdBwVF62qFX8AcotIg4W1sE5xFGrSnedWrFRELjzDfdkQvrsezEaIj%2BJG0EN6b3rLNXi6YdKossKCN%2BN8hZG7KPYU%2FMgUFn502RKWpCqv08jDc5OnBBjqnAd8kUU6Z6EAlRPH9MoBTCPWziJRvDRLJnsLbpS%2Bk%2BTOFhW02OW9GJQGRNHtprjdQ3ZvO39zSoP%2BhEALvxgq6V7UtICgo5xobPDosrSTZfwvfJ1ZkXHinnu39WSw2T%2FhPPgzP0EpNYE4r%2FNjXfJ%2FmHXF2DVRoMBDGRm46TZ4Y1ihXspCMf9RZAAcrPIH0R%2FNmL9lccHqkz%2FwKI8zOP77WRHqhZJEH9OI7&X-Amz-Signature=88d6bfae2d41e2de955670db750326e5621c9134bb18c9bd25c6a6ffc7de46db&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
