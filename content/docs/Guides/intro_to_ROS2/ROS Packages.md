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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZM7LZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9CTvjI452IwrlTf1mIFjlb%2FHUzlta8mnvI%2FvuK0F4sAIhAMC0qO1tXnMIMvSL82G1dHpjvQ3gyXADPhwDki6lQfpBKv8DCFQQABoMNjM3NDIzMTgzODA1IgyRj0PtEYhyKSjiTnsq3AN%2F5KjL6u8Ta%2BeRmcYeFffgVFwpcg27KnnRZIf4%2FvLOM90RL2Pm9Z%2F6zQIJBwdkAwtjAt%2B7Fo2CTyNRVDyuOlat%2F3RT5EdWPoVvoW0Wn9BHETtT31S%2FNHryizhpFXHrG3XoANcsjMXLgWt4F95wKI1CxsQhXdzIuq6Sw7Ykwpns3iVgxeGdcy3RjIg9CfM3yNHG8n7xxHesIZjjo45si4BhFjZntSvUIQCIPtCmcrJgMN2M3SAkfM97s%2FsxFmGseh3D10zGjHLFxY02OuR7NnvA0ftDGF1XKOr41PIY62GIsLlB0Ye9yGg8I0JgkxCcKuYVUdaRUQN8xFEyC42dKRBg6H4piQAZEZgSE6hQ9W9F%2B7dOn7ZRzCAMXST3c%2BJpZ3Hk%2BJsJTt%2FaQBu4u8GW8653sgh1fQklfgodkiIEmZ94BAYr%2Fo%2B284l1FupXEgR%2B8oHW6AiWRaAwJexApPSWgnawJgDkhB5sfh74yDRXuo5WiEVT6oQRBGZPVnxqO7%2BjSAZkq0dDaUcPpwSQDlgsPNbhA7Yk3z4hkfTwQH8engN5wtB8V2bpLcvHwdXFQdfhr6%2BQwjDc%2F8RcNDtljIMRzQ2p7oCfV5EnavWHhRZpOHK9uGy6mkOGMsV1OpXoIjCfkuvABjqkAaGW60n8ldYRcgSkHmQ9YpAk27wuh3GskCrpnqMjHEzNZ6Hozur3ua0p9NWOYxp1YtTJ2w%2FuKebBuNa3UiS0RQbjQlx9I34qEpG0MnfRi5tleb6aB81BFs6AATdfUvy8gnxjzZXVkWYd39Ci3QMhNeIrLQwA6vpAIQJbU6E8ict4QBzV2MkOZRriMKy%2Brb%2FhbGoWJp6dY1CDVYIWmVCLq3e7y%2F3w&X-Amz-Signature=8132b024fe9daebbd3ca8c063e1ce6e43291b8ef218b11635b2cc9f8a57b87e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZM7LZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9CTvjI452IwrlTf1mIFjlb%2FHUzlta8mnvI%2FvuK0F4sAIhAMC0qO1tXnMIMvSL82G1dHpjvQ3gyXADPhwDki6lQfpBKv8DCFQQABoMNjM3NDIzMTgzODA1IgyRj0PtEYhyKSjiTnsq3AN%2F5KjL6u8Ta%2BeRmcYeFffgVFwpcg27KnnRZIf4%2FvLOM90RL2Pm9Z%2F6zQIJBwdkAwtjAt%2B7Fo2CTyNRVDyuOlat%2F3RT5EdWPoVvoW0Wn9BHETtT31S%2FNHryizhpFXHrG3XoANcsjMXLgWt4F95wKI1CxsQhXdzIuq6Sw7Ykwpns3iVgxeGdcy3RjIg9CfM3yNHG8n7xxHesIZjjo45si4BhFjZntSvUIQCIPtCmcrJgMN2M3SAkfM97s%2FsxFmGseh3D10zGjHLFxY02OuR7NnvA0ftDGF1XKOr41PIY62GIsLlB0Ye9yGg8I0JgkxCcKuYVUdaRUQN8xFEyC42dKRBg6H4piQAZEZgSE6hQ9W9F%2B7dOn7ZRzCAMXST3c%2BJpZ3Hk%2BJsJTt%2FaQBu4u8GW8653sgh1fQklfgodkiIEmZ94BAYr%2Fo%2B284l1FupXEgR%2B8oHW6AiWRaAwJexApPSWgnawJgDkhB5sfh74yDRXuo5WiEVT6oQRBGZPVnxqO7%2BjSAZkq0dDaUcPpwSQDlgsPNbhA7Yk3z4hkfTwQH8engN5wtB8V2bpLcvHwdXFQdfhr6%2BQwjDc%2F8RcNDtljIMRzQ2p7oCfV5EnavWHhRZpOHK9uGy6mkOGMsV1OpXoIjCfkuvABjqkAaGW60n8ldYRcgSkHmQ9YpAk27wuh3GskCrpnqMjHEzNZ6Hozur3ua0p9NWOYxp1YtTJ2w%2FuKebBuNa3UiS0RQbjQlx9I34qEpG0MnfRi5tleb6aB81BFs6AATdfUvy8gnxjzZXVkWYd39Ci3QMhNeIrLQwA6vpAIQJbU6E8ict4QBzV2MkOZRriMKy%2Brb%2FhbGoWJp6dY1CDVYIWmVCLq3e7y%2F3w&X-Amz-Signature=832af8f5a44219a0bb6ce4a79e96b2d66b53d42c2a21a20e3c849d5f3779a7cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZM7LZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9CTvjI452IwrlTf1mIFjlb%2FHUzlta8mnvI%2FvuK0F4sAIhAMC0qO1tXnMIMvSL82G1dHpjvQ3gyXADPhwDki6lQfpBKv8DCFQQABoMNjM3NDIzMTgzODA1IgyRj0PtEYhyKSjiTnsq3AN%2F5KjL6u8Ta%2BeRmcYeFffgVFwpcg27KnnRZIf4%2FvLOM90RL2Pm9Z%2F6zQIJBwdkAwtjAt%2B7Fo2CTyNRVDyuOlat%2F3RT5EdWPoVvoW0Wn9BHETtT31S%2FNHryizhpFXHrG3XoANcsjMXLgWt4F95wKI1CxsQhXdzIuq6Sw7Ykwpns3iVgxeGdcy3RjIg9CfM3yNHG8n7xxHesIZjjo45si4BhFjZntSvUIQCIPtCmcrJgMN2M3SAkfM97s%2FsxFmGseh3D10zGjHLFxY02OuR7NnvA0ftDGF1XKOr41PIY62GIsLlB0Ye9yGg8I0JgkxCcKuYVUdaRUQN8xFEyC42dKRBg6H4piQAZEZgSE6hQ9W9F%2B7dOn7ZRzCAMXST3c%2BJpZ3Hk%2BJsJTt%2FaQBu4u8GW8653sgh1fQklfgodkiIEmZ94BAYr%2Fo%2B284l1FupXEgR%2B8oHW6AiWRaAwJexApPSWgnawJgDkhB5sfh74yDRXuo5WiEVT6oQRBGZPVnxqO7%2BjSAZkq0dDaUcPpwSQDlgsPNbhA7Yk3z4hkfTwQH8engN5wtB8V2bpLcvHwdXFQdfhr6%2BQwjDc%2F8RcNDtljIMRzQ2p7oCfV5EnavWHhRZpOHK9uGy6mkOGMsV1OpXoIjCfkuvABjqkAaGW60n8ldYRcgSkHmQ9YpAk27wuh3GskCrpnqMjHEzNZ6Hozur3ua0p9NWOYxp1YtTJ2w%2FuKebBuNa3UiS0RQbjQlx9I34qEpG0MnfRi5tleb6aB81BFs6AATdfUvy8gnxjzZXVkWYd39Ci3QMhNeIrLQwA6vpAIQJbU6E8ict4QBzV2MkOZRriMKy%2Brb%2FhbGoWJp6dY1CDVYIWmVCLq3e7y%2F3w&X-Amz-Signature=e4d2a80b533a24cde70892dee61498a687e8dc1a70489bae301bcf0439bbfd4c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZM7LZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9CTvjI452IwrlTf1mIFjlb%2FHUzlta8mnvI%2FvuK0F4sAIhAMC0qO1tXnMIMvSL82G1dHpjvQ3gyXADPhwDki6lQfpBKv8DCFQQABoMNjM3NDIzMTgzODA1IgyRj0PtEYhyKSjiTnsq3AN%2F5KjL6u8Ta%2BeRmcYeFffgVFwpcg27KnnRZIf4%2FvLOM90RL2Pm9Z%2F6zQIJBwdkAwtjAt%2B7Fo2CTyNRVDyuOlat%2F3RT5EdWPoVvoW0Wn9BHETtT31S%2FNHryizhpFXHrG3XoANcsjMXLgWt4F95wKI1CxsQhXdzIuq6Sw7Ykwpns3iVgxeGdcy3RjIg9CfM3yNHG8n7xxHesIZjjo45si4BhFjZntSvUIQCIPtCmcrJgMN2M3SAkfM97s%2FsxFmGseh3D10zGjHLFxY02OuR7NnvA0ftDGF1XKOr41PIY62GIsLlB0Ye9yGg8I0JgkxCcKuYVUdaRUQN8xFEyC42dKRBg6H4piQAZEZgSE6hQ9W9F%2B7dOn7ZRzCAMXST3c%2BJpZ3Hk%2BJsJTt%2FaQBu4u8GW8653sgh1fQklfgodkiIEmZ94BAYr%2Fo%2B284l1FupXEgR%2B8oHW6AiWRaAwJexApPSWgnawJgDkhB5sfh74yDRXuo5WiEVT6oQRBGZPVnxqO7%2BjSAZkq0dDaUcPpwSQDlgsPNbhA7Yk3z4hkfTwQH8engN5wtB8V2bpLcvHwdXFQdfhr6%2BQwjDc%2F8RcNDtljIMRzQ2p7oCfV5EnavWHhRZpOHK9uGy6mkOGMsV1OpXoIjCfkuvABjqkAaGW60n8ldYRcgSkHmQ9YpAk27wuh3GskCrpnqMjHEzNZ6Hozur3ua0p9NWOYxp1YtTJ2w%2FuKebBuNa3UiS0RQbjQlx9I34qEpG0MnfRi5tleb6aB81BFs6AATdfUvy8gnxjzZXVkWYd39Ci3QMhNeIrLQwA6vpAIQJbU6E8ict4QBzV2MkOZRriMKy%2Brb%2FhbGoWJp6dY1CDVYIWmVCLq3e7y%2F3w&X-Amz-Signature=73dfddcc9003bc2f6d397bff8ebfc11d9c621f2c51a20f87451103a53cf152a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZM7LZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9CTvjI452IwrlTf1mIFjlb%2FHUzlta8mnvI%2FvuK0F4sAIhAMC0qO1tXnMIMvSL82G1dHpjvQ3gyXADPhwDki6lQfpBKv8DCFQQABoMNjM3NDIzMTgzODA1IgyRj0PtEYhyKSjiTnsq3AN%2F5KjL6u8Ta%2BeRmcYeFffgVFwpcg27KnnRZIf4%2FvLOM90RL2Pm9Z%2F6zQIJBwdkAwtjAt%2B7Fo2CTyNRVDyuOlat%2F3RT5EdWPoVvoW0Wn9BHETtT31S%2FNHryizhpFXHrG3XoANcsjMXLgWt4F95wKI1CxsQhXdzIuq6Sw7Ykwpns3iVgxeGdcy3RjIg9CfM3yNHG8n7xxHesIZjjo45si4BhFjZntSvUIQCIPtCmcrJgMN2M3SAkfM97s%2FsxFmGseh3D10zGjHLFxY02OuR7NnvA0ftDGF1XKOr41PIY62GIsLlB0Ye9yGg8I0JgkxCcKuYVUdaRUQN8xFEyC42dKRBg6H4piQAZEZgSE6hQ9W9F%2B7dOn7ZRzCAMXST3c%2BJpZ3Hk%2BJsJTt%2FaQBu4u8GW8653sgh1fQklfgodkiIEmZ94BAYr%2Fo%2B284l1FupXEgR%2B8oHW6AiWRaAwJexApPSWgnawJgDkhB5sfh74yDRXuo5WiEVT6oQRBGZPVnxqO7%2BjSAZkq0dDaUcPpwSQDlgsPNbhA7Yk3z4hkfTwQH8engN5wtB8V2bpLcvHwdXFQdfhr6%2BQwjDc%2F8RcNDtljIMRzQ2p7oCfV5EnavWHhRZpOHK9uGy6mkOGMsV1OpXoIjCfkuvABjqkAaGW60n8ldYRcgSkHmQ9YpAk27wuh3GskCrpnqMjHEzNZ6Hozur3ua0p9NWOYxp1YtTJ2w%2FuKebBuNa3UiS0RQbjQlx9I34qEpG0MnfRi5tleb6aB81BFs6AATdfUvy8gnxjzZXVkWYd39Ci3QMhNeIrLQwA6vpAIQJbU6E8ict4QBzV2MkOZRriMKy%2Brb%2FhbGoWJp6dY1CDVYIWmVCLq3e7y%2F3w&X-Amz-Signature=29625f18a3c962ba5c55229e47b01bdb14a7bd812fa077b191b3f0030ffff6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZM7LZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9CTvjI452IwrlTf1mIFjlb%2FHUzlta8mnvI%2FvuK0F4sAIhAMC0qO1tXnMIMvSL82G1dHpjvQ3gyXADPhwDki6lQfpBKv8DCFQQABoMNjM3NDIzMTgzODA1IgyRj0PtEYhyKSjiTnsq3AN%2F5KjL6u8Ta%2BeRmcYeFffgVFwpcg27KnnRZIf4%2FvLOM90RL2Pm9Z%2F6zQIJBwdkAwtjAt%2B7Fo2CTyNRVDyuOlat%2F3RT5EdWPoVvoW0Wn9BHETtT31S%2FNHryizhpFXHrG3XoANcsjMXLgWt4F95wKI1CxsQhXdzIuq6Sw7Ykwpns3iVgxeGdcy3RjIg9CfM3yNHG8n7xxHesIZjjo45si4BhFjZntSvUIQCIPtCmcrJgMN2M3SAkfM97s%2FsxFmGseh3D10zGjHLFxY02OuR7NnvA0ftDGF1XKOr41PIY62GIsLlB0Ye9yGg8I0JgkxCcKuYVUdaRUQN8xFEyC42dKRBg6H4piQAZEZgSE6hQ9W9F%2B7dOn7ZRzCAMXST3c%2BJpZ3Hk%2BJsJTt%2FaQBu4u8GW8653sgh1fQklfgodkiIEmZ94BAYr%2Fo%2B284l1FupXEgR%2B8oHW6AiWRaAwJexApPSWgnawJgDkhB5sfh74yDRXuo5WiEVT6oQRBGZPVnxqO7%2BjSAZkq0dDaUcPpwSQDlgsPNbhA7Yk3z4hkfTwQH8engN5wtB8V2bpLcvHwdXFQdfhr6%2BQwjDc%2F8RcNDtljIMRzQ2p7oCfV5EnavWHhRZpOHK9uGy6mkOGMsV1OpXoIjCfkuvABjqkAaGW60n8ldYRcgSkHmQ9YpAk27wuh3GskCrpnqMjHEzNZ6Hozur3ua0p9NWOYxp1YtTJ2w%2FuKebBuNa3UiS0RQbjQlx9I34qEpG0MnfRi5tleb6aB81BFs6AATdfUvy8gnxjzZXVkWYd39Ci3QMhNeIrLQwA6vpAIQJbU6E8ict4QBzV2MkOZRriMKy%2Brb%2FhbGoWJp6dY1CDVYIWmVCLq3e7y%2F3w&X-Amz-Signature=567af7484f86f214dc75e3b421a660e8b0593ecb81ae2cb3ae47112a0c5dcf54&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZM7LZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9CTvjI452IwrlTf1mIFjlb%2FHUzlta8mnvI%2FvuK0F4sAIhAMC0qO1tXnMIMvSL82G1dHpjvQ3gyXADPhwDki6lQfpBKv8DCFQQABoMNjM3NDIzMTgzODA1IgyRj0PtEYhyKSjiTnsq3AN%2F5KjL6u8Ta%2BeRmcYeFffgVFwpcg27KnnRZIf4%2FvLOM90RL2Pm9Z%2F6zQIJBwdkAwtjAt%2B7Fo2CTyNRVDyuOlat%2F3RT5EdWPoVvoW0Wn9BHETtT31S%2FNHryizhpFXHrG3XoANcsjMXLgWt4F95wKI1CxsQhXdzIuq6Sw7Ykwpns3iVgxeGdcy3RjIg9CfM3yNHG8n7xxHesIZjjo45si4BhFjZntSvUIQCIPtCmcrJgMN2M3SAkfM97s%2FsxFmGseh3D10zGjHLFxY02OuR7NnvA0ftDGF1XKOr41PIY62GIsLlB0Ye9yGg8I0JgkxCcKuYVUdaRUQN8xFEyC42dKRBg6H4piQAZEZgSE6hQ9W9F%2B7dOn7ZRzCAMXST3c%2BJpZ3Hk%2BJsJTt%2FaQBu4u8GW8653sgh1fQklfgodkiIEmZ94BAYr%2Fo%2B284l1FupXEgR%2B8oHW6AiWRaAwJexApPSWgnawJgDkhB5sfh74yDRXuo5WiEVT6oQRBGZPVnxqO7%2BjSAZkq0dDaUcPpwSQDlgsPNbhA7Yk3z4hkfTwQH8engN5wtB8V2bpLcvHwdXFQdfhr6%2BQwjDc%2F8RcNDtljIMRzQ2p7oCfV5EnavWHhRZpOHK9uGy6mkOGMsV1OpXoIjCfkuvABjqkAaGW60n8ldYRcgSkHmQ9YpAk27wuh3GskCrpnqMjHEzNZ6Hozur3ua0p9NWOYxp1YtTJ2w%2FuKebBuNa3UiS0RQbjQlx9I34qEpG0MnfRi5tleb6aB81BFs6AATdfUvy8gnxjzZXVkWYd39Ci3QMhNeIrLQwA6vpAIQJbU6E8ict4QBzV2MkOZRriMKy%2Brb%2FhbGoWJp6dY1CDVYIWmVCLq3e7y%2F3w&X-Amz-Signature=02df373535dfd1d3827cbe8c3df74361d938a8dc89832255dccd97a58d063c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
