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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTZX4YM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGtBKuGfIv%2FXnVfsToaKXiGUn1iM8vmABseMhazOFKBWAiBZorK9NaDLaiQEojb8%2FEROGzunNYWZTulC2pfChgRcqCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfXxldAfo%2B4nk13fKtwDc70FS7Yl35ZI8YMxtHnufkO6E7gT5Usyz7AhT1KhipOHvi3QVtQblheqlu%2BQoC59rZ1JjLrF2TvKYJE14GQ63Rcdkxo6EnaX2Z73FDp3rCzLGS71x447lle0IjB63eLpixPocHD7D6SYuLCP%2FqVhiVPb7mEdtIIbIYoxIpVlB%2FsCBTVlKVlFBangYzgGpHyh1qov7Xz8e14ACyet9z1R5CwoP5nvMH9%2Bxvdpn%2BSRiJ0HzK0WJvLEzdyrJrXx9TZxVor%2BYYG9%2BvnkI63jeJDoNh4smIBwgtmW33FjHFKOt20C730etTUcFCf%2Bl1N1iE3FQAb4tYC3i9ikRbKakhA5mmKivUKxXFjwrsBnA8zFjBc3dq0c2f7sK8hctjk%2BITQGJq3BVRCBQ32Tl3rOMuK2TFnSRyAul949ZGtu6%2Fsv3tmxe%2FENKARPaJTV1ojfci5%2BwS0IL2fu%2BEWV%2FwF53hltLfTRxUO7Sq4zStfd%2B1sWIlfJ5xr7M48k0PPp1%2FX4sZ5y25jxXf%2FrRUvGt2kHUgxKgydoV1tFMQpz%2FBYPxH6Qtx%2B2phhT3tu0vHpcVX2mYNV%2FhbeDRHpVYw3Hdl9C4kG%2BLl5XwS%2BFQnYnCQGKlus6R3E%2BanwmqG1kWK1e3jows%2FCjvwY6pgFp7rSOrsYiDfgoq%2Fgq0m2Z%2FNos%2FfTnDT53C9oelnbB55REEmYaqQ7%2BiZEr6t5Rh9EEnoNQCyaJ5ivwW55c289Js5X7dqwwk8OU8ideuALHvbjkPetyf9QHjGqCcM4yISGyq1CcT3Z6ddJKrok0X%2ByVMttSlTNMFzIjGHIep%2F3u11xxakYz6d9N%2FxuR21iMPdRWB%2F43mcCFcVtbSUFvKHTjzN22KZSr&X-Amz-Signature=7a8ec1b36857da642179dd15b63f49918a474ea5996e2e97a08726ddc3f0a903&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTZX4YM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGtBKuGfIv%2FXnVfsToaKXiGUn1iM8vmABseMhazOFKBWAiBZorK9NaDLaiQEojb8%2FEROGzunNYWZTulC2pfChgRcqCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfXxldAfo%2B4nk13fKtwDc70FS7Yl35ZI8YMxtHnufkO6E7gT5Usyz7AhT1KhipOHvi3QVtQblheqlu%2BQoC59rZ1JjLrF2TvKYJE14GQ63Rcdkxo6EnaX2Z73FDp3rCzLGS71x447lle0IjB63eLpixPocHD7D6SYuLCP%2FqVhiVPb7mEdtIIbIYoxIpVlB%2FsCBTVlKVlFBangYzgGpHyh1qov7Xz8e14ACyet9z1R5CwoP5nvMH9%2Bxvdpn%2BSRiJ0HzK0WJvLEzdyrJrXx9TZxVor%2BYYG9%2BvnkI63jeJDoNh4smIBwgtmW33FjHFKOt20C730etTUcFCf%2Bl1N1iE3FQAb4tYC3i9ikRbKakhA5mmKivUKxXFjwrsBnA8zFjBc3dq0c2f7sK8hctjk%2BITQGJq3BVRCBQ32Tl3rOMuK2TFnSRyAul949ZGtu6%2Fsv3tmxe%2FENKARPaJTV1ojfci5%2BwS0IL2fu%2BEWV%2FwF53hltLfTRxUO7Sq4zStfd%2B1sWIlfJ5xr7M48k0PPp1%2FX4sZ5y25jxXf%2FrRUvGt2kHUgxKgydoV1tFMQpz%2FBYPxH6Qtx%2B2phhT3tu0vHpcVX2mYNV%2FhbeDRHpVYw3Hdl9C4kG%2BLl5XwS%2BFQnYnCQGKlus6R3E%2BanwmqG1kWK1e3jows%2FCjvwY6pgFp7rSOrsYiDfgoq%2Fgq0m2Z%2FNos%2FfTnDT53C9oelnbB55REEmYaqQ7%2BiZEr6t5Rh9EEnoNQCyaJ5ivwW55c289Js5X7dqwwk8OU8ideuALHvbjkPetyf9QHjGqCcM4yISGyq1CcT3Z6ddJKrok0X%2ByVMttSlTNMFzIjGHIep%2F3u11xxakYz6d9N%2FxuR21iMPdRWB%2F43mcCFcVtbSUFvKHTjzN22KZSr&X-Amz-Signature=6e26dcf395291a2386dcb4692f15eba681e3fd021570ec3cbf8e7ec031e12bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTZX4YM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGtBKuGfIv%2FXnVfsToaKXiGUn1iM8vmABseMhazOFKBWAiBZorK9NaDLaiQEojb8%2FEROGzunNYWZTulC2pfChgRcqCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfXxldAfo%2B4nk13fKtwDc70FS7Yl35ZI8YMxtHnufkO6E7gT5Usyz7AhT1KhipOHvi3QVtQblheqlu%2BQoC59rZ1JjLrF2TvKYJE14GQ63Rcdkxo6EnaX2Z73FDp3rCzLGS71x447lle0IjB63eLpixPocHD7D6SYuLCP%2FqVhiVPb7mEdtIIbIYoxIpVlB%2FsCBTVlKVlFBangYzgGpHyh1qov7Xz8e14ACyet9z1R5CwoP5nvMH9%2Bxvdpn%2BSRiJ0HzK0WJvLEzdyrJrXx9TZxVor%2BYYG9%2BvnkI63jeJDoNh4smIBwgtmW33FjHFKOt20C730etTUcFCf%2Bl1N1iE3FQAb4tYC3i9ikRbKakhA5mmKivUKxXFjwrsBnA8zFjBc3dq0c2f7sK8hctjk%2BITQGJq3BVRCBQ32Tl3rOMuK2TFnSRyAul949ZGtu6%2Fsv3tmxe%2FENKARPaJTV1ojfci5%2BwS0IL2fu%2BEWV%2FwF53hltLfTRxUO7Sq4zStfd%2B1sWIlfJ5xr7M48k0PPp1%2FX4sZ5y25jxXf%2FrRUvGt2kHUgxKgydoV1tFMQpz%2FBYPxH6Qtx%2B2phhT3tu0vHpcVX2mYNV%2FhbeDRHpVYw3Hdl9C4kG%2BLl5XwS%2BFQnYnCQGKlus6R3E%2BanwmqG1kWK1e3jows%2FCjvwY6pgFp7rSOrsYiDfgoq%2Fgq0m2Z%2FNos%2FfTnDT53C9oelnbB55REEmYaqQ7%2BiZEr6t5Rh9EEnoNQCyaJ5ivwW55c289Js5X7dqwwk8OU8ideuALHvbjkPetyf9QHjGqCcM4yISGyq1CcT3Z6ddJKrok0X%2ByVMttSlTNMFzIjGHIep%2F3u11xxakYz6d9N%2FxuR21iMPdRWB%2F43mcCFcVtbSUFvKHTjzN22KZSr&X-Amz-Signature=537a0493226b1e7db080452e6b5ec8037f623fa5eb9b7a5dc9c25f730cf0ee51&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTZX4YM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGtBKuGfIv%2FXnVfsToaKXiGUn1iM8vmABseMhazOFKBWAiBZorK9NaDLaiQEojb8%2FEROGzunNYWZTulC2pfChgRcqCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfXxldAfo%2B4nk13fKtwDc70FS7Yl35ZI8YMxtHnufkO6E7gT5Usyz7AhT1KhipOHvi3QVtQblheqlu%2BQoC59rZ1JjLrF2TvKYJE14GQ63Rcdkxo6EnaX2Z73FDp3rCzLGS71x447lle0IjB63eLpixPocHD7D6SYuLCP%2FqVhiVPb7mEdtIIbIYoxIpVlB%2FsCBTVlKVlFBangYzgGpHyh1qov7Xz8e14ACyet9z1R5CwoP5nvMH9%2Bxvdpn%2BSRiJ0HzK0WJvLEzdyrJrXx9TZxVor%2BYYG9%2BvnkI63jeJDoNh4smIBwgtmW33FjHFKOt20C730etTUcFCf%2Bl1N1iE3FQAb4tYC3i9ikRbKakhA5mmKivUKxXFjwrsBnA8zFjBc3dq0c2f7sK8hctjk%2BITQGJq3BVRCBQ32Tl3rOMuK2TFnSRyAul949ZGtu6%2Fsv3tmxe%2FENKARPaJTV1ojfci5%2BwS0IL2fu%2BEWV%2FwF53hltLfTRxUO7Sq4zStfd%2B1sWIlfJ5xr7M48k0PPp1%2FX4sZ5y25jxXf%2FrRUvGt2kHUgxKgydoV1tFMQpz%2FBYPxH6Qtx%2B2phhT3tu0vHpcVX2mYNV%2FhbeDRHpVYw3Hdl9C4kG%2BLl5XwS%2BFQnYnCQGKlus6R3E%2BanwmqG1kWK1e3jows%2FCjvwY6pgFp7rSOrsYiDfgoq%2Fgq0m2Z%2FNos%2FfTnDT53C9oelnbB55REEmYaqQ7%2BiZEr6t5Rh9EEnoNQCyaJ5ivwW55c289Js5X7dqwwk8OU8ideuALHvbjkPetyf9QHjGqCcM4yISGyq1CcT3Z6ddJKrok0X%2ByVMttSlTNMFzIjGHIep%2F3u11xxakYz6d9N%2FxuR21iMPdRWB%2F43mcCFcVtbSUFvKHTjzN22KZSr&X-Amz-Signature=4595ba084028fa1173ed210d204c1e35afc2195602a5e3010fb433a1b1bda4ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTZX4YM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGtBKuGfIv%2FXnVfsToaKXiGUn1iM8vmABseMhazOFKBWAiBZorK9NaDLaiQEojb8%2FEROGzunNYWZTulC2pfChgRcqCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfXxldAfo%2B4nk13fKtwDc70FS7Yl35ZI8YMxtHnufkO6E7gT5Usyz7AhT1KhipOHvi3QVtQblheqlu%2BQoC59rZ1JjLrF2TvKYJE14GQ63Rcdkxo6EnaX2Z73FDp3rCzLGS71x447lle0IjB63eLpixPocHD7D6SYuLCP%2FqVhiVPb7mEdtIIbIYoxIpVlB%2FsCBTVlKVlFBangYzgGpHyh1qov7Xz8e14ACyet9z1R5CwoP5nvMH9%2Bxvdpn%2BSRiJ0HzK0WJvLEzdyrJrXx9TZxVor%2BYYG9%2BvnkI63jeJDoNh4smIBwgtmW33FjHFKOt20C730etTUcFCf%2Bl1N1iE3FQAb4tYC3i9ikRbKakhA5mmKivUKxXFjwrsBnA8zFjBc3dq0c2f7sK8hctjk%2BITQGJq3BVRCBQ32Tl3rOMuK2TFnSRyAul949ZGtu6%2Fsv3tmxe%2FENKARPaJTV1ojfci5%2BwS0IL2fu%2BEWV%2FwF53hltLfTRxUO7Sq4zStfd%2B1sWIlfJ5xr7M48k0PPp1%2FX4sZ5y25jxXf%2FrRUvGt2kHUgxKgydoV1tFMQpz%2FBYPxH6Qtx%2B2phhT3tu0vHpcVX2mYNV%2FhbeDRHpVYw3Hdl9C4kG%2BLl5XwS%2BFQnYnCQGKlus6R3E%2BanwmqG1kWK1e3jows%2FCjvwY6pgFp7rSOrsYiDfgoq%2Fgq0m2Z%2FNos%2FfTnDT53C9oelnbB55REEmYaqQ7%2BiZEr6t5Rh9EEnoNQCyaJ5ivwW55c289Js5X7dqwwk8OU8ideuALHvbjkPetyf9QHjGqCcM4yISGyq1CcT3Z6ddJKrok0X%2ByVMttSlTNMFzIjGHIep%2F3u11xxakYz6d9N%2FxuR21iMPdRWB%2F43mcCFcVtbSUFvKHTjzN22KZSr&X-Amz-Signature=ea5b442c6a2a62aef086e246c8697e1b1a1d053f072a0d65e9f6ac2a210c8301&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTZX4YM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGtBKuGfIv%2FXnVfsToaKXiGUn1iM8vmABseMhazOFKBWAiBZorK9NaDLaiQEojb8%2FEROGzunNYWZTulC2pfChgRcqCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfXxldAfo%2B4nk13fKtwDc70FS7Yl35ZI8YMxtHnufkO6E7gT5Usyz7AhT1KhipOHvi3QVtQblheqlu%2BQoC59rZ1JjLrF2TvKYJE14GQ63Rcdkxo6EnaX2Z73FDp3rCzLGS71x447lle0IjB63eLpixPocHD7D6SYuLCP%2FqVhiVPb7mEdtIIbIYoxIpVlB%2FsCBTVlKVlFBangYzgGpHyh1qov7Xz8e14ACyet9z1R5CwoP5nvMH9%2Bxvdpn%2BSRiJ0HzK0WJvLEzdyrJrXx9TZxVor%2BYYG9%2BvnkI63jeJDoNh4smIBwgtmW33FjHFKOt20C730etTUcFCf%2Bl1N1iE3FQAb4tYC3i9ikRbKakhA5mmKivUKxXFjwrsBnA8zFjBc3dq0c2f7sK8hctjk%2BITQGJq3BVRCBQ32Tl3rOMuK2TFnSRyAul949ZGtu6%2Fsv3tmxe%2FENKARPaJTV1ojfci5%2BwS0IL2fu%2BEWV%2FwF53hltLfTRxUO7Sq4zStfd%2B1sWIlfJ5xr7M48k0PPp1%2FX4sZ5y25jxXf%2FrRUvGt2kHUgxKgydoV1tFMQpz%2FBYPxH6Qtx%2B2phhT3tu0vHpcVX2mYNV%2FhbeDRHpVYw3Hdl9C4kG%2BLl5XwS%2BFQnYnCQGKlus6R3E%2BanwmqG1kWK1e3jows%2FCjvwY6pgFp7rSOrsYiDfgoq%2Fgq0m2Z%2FNos%2FfTnDT53C9oelnbB55REEmYaqQ7%2BiZEr6t5Rh9EEnoNQCyaJ5ivwW55c289Js5X7dqwwk8OU8ideuALHvbjkPetyf9QHjGqCcM4yISGyq1CcT3Z6ddJKrok0X%2ByVMttSlTNMFzIjGHIep%2F3u11xxakYz6d9N%2FxuR21iMPdRWB%2F43mcCFcVtbSUFvKHTjzN22KZSr&X-Amz-Signature=1fa124c3c1ed9b18050e5bacd591020840a1eb7d3ea1580172948d9a481f75b0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTZX4YM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGtBKuGfIv%2FXnVfsToaKXiGUn1iM8vmABseMhazOFKBWAiBZorK9NaDLaiQEojb8%2FEROGzunNYWZTulC2pfChgRcqCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfXxldAfo%2B4nk13fKtwDc70FS7Yl35ZI8YMxtHnufkO6E7gT5Usyz7AhT1KhipOHvi3QVtQblheqlu%2BQoC59rZ1JjLrF2TvKYJE14GQ63Rcdkxo6EnaX2Z73FDp3rCzLGS71x447lle0IjB63eLpixPocHD7D6SYuLCP%2FqVhiVPb7mEdtIIbIYoxIpVlB%2FsCBTVlKVlFBangYzgGpHyh1qov7Xz8e14ACyet9z1R5CwoP5nvMH9%2Bxvdpn%2BSRiJ0HzK0WJvLEzdyrJrXx9TZxVor%2BYYG9%2BvnkI63jeJDoNh4smIBwgtmW33FjHFKOt20C730etTUcFCf%2Bl1N1iE3FQAb4tYC3i9ikRbKakhA5mmKivUKxXFjwrsBnA8zFjBc3dq0c2f7sK8hctjk%2BITQGJq3BVRCBQ32Tl3rOMuK2TFnSRyAul949ZGtu6%2Fsv3tmxe%2FENKARPaJTV1ojfci5%2BwS0IL2fu%2BEWV%2FwF53hltLfTRxUO7Sq4zStfd%2B1sWIlfJ5xr7M48k0PPp1%2FX4sZ5y25jxXf%2FrRUvGt2kHUgxKgydoV1tFMQpz%2FBYPxH6Qtx%2B2phhT3tu0vHpcVX2mYNV%2FhbeDRHpVYw3Hdl9C4kG%2BLl5XwS%2BFQnYnCQGKlus6R3E%2BanwmqG1kWK1e3jows%2FCjvwY6pgFp7rSOrsYiDfgoq%2Fgq0m2Z%2FNos%2FfTnDT53C9oelnbB55REEmYaqQ7%2BiZEr6t5Rh9EEnoNQCyaJ5ivwW55c289Js5X7dqwwk8OU8ideuALHvbjkPetyf9QHjGqCcM4yISGyq1CcT3Z6ddJKrok0X%2ByVMttSlTNMFzIjGHIep%2F3u11xxakYz6d9N%2FxuR21iMPdRWB%2F43mcCFcVtbSUFvKHTjzN22KZSr&X-Amz-Signature=d1880d1f035fb17d92cd4fb337bc5faebb4e7d205d36197afda2a49b4b74ba5c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
