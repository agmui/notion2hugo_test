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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2FE7BV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZcc%2BnMLO0cfCsQZZY7LwHSErmFsCD4wgVlVyuZy9PBAiEAwLcf1xkDNZxHTV09FcjLiR9AGl5VCEeSEE60%2Fd01wUsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPgz4IQJdgwu9EsX2yrcA9dUqqJ7tMkVZQ2b%2B9ra2wwvld2gPGfP8O7ZBgdvd0yFmDnwxPWOgbz%2F9A0ehjHgLMKaAE03PSS102RQkANIo%2F2C0KYkRUMqR566vWs%2BBVt5q%2BUVJP%2Ft%2FFQFtnUVWVq07Hk%2BL8Sd8flQfynyUsEc5g9o0PhyJ26YO9r7Po%2FpwKtuf5rIqgr6YldxqdW7gKLr6Wa13a06GAs5HqCpOWEnxSHfRw5VM1VPmd5xLoRlD7EVWGVq2tDPC8dpTd842gdjLIM3dM4lxz5LwPZJZpzhSbWQGRnMarGk2k%2BMsKDhpFhLwC18dGmAu76oMuTZZhtflte75DUP4SZTXxOn6rRazigHseCwHB6KdcstgHhPQN4R1kLhgAygbOpo775AGh%2Fp6IJyMlsvuYy0CTsxZio3mS5LHC%2BWdsdtou%2B0c2dA8UFnFnoIbn%2BvsPH71GGvtiXji804%2BPkt2bfTq%2FSP3xrkVuxeSKHD5buTDhGdjUFZnVuFW7%2B3XK3kev2RYnNFV2%2FNvVXy6EwkBYjyDhXQcQUfKbSoUPfcXrV4LJe9BnwWvNk6y3m9oPl9tGseASI6oLVlZMIkwgudW5%2B5R1MOhqw%2B3p9iHBt7QAEbzpnkFqvQ%2B%2BjMOgZ8Bw5XFcB14OBTMN6iwr8GOqUB9GrdO3pwqwTXZZDuMf%2FMANGuqaO%2BEAHmlnNz7BXz%2B6hmQNQywtMJfSfuKDl7zVCndow7Q2D9%2Bmsuo6hemS6zCaoiRQZx2f9Z80yEjd9yV0truM6hVaEfWVpsGwj1FvlhMnAR%2FD7XEk0ypfVKuCE07Dd%2B%2FR0BxJ0GYyUdohJ7u2WM9ietY9eHiV%2FA%2BPyg0HSRPxwCV%2BKvhMa2XkC18o%2By9b6ludPC&X-Amz-Signature=1eb523cd20307f486253774bfb80bee4a58b7b5cc54bde08517ad525dae6fff1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2FE7BV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZcc%2BnMLO0cfCsQZZY7LwHSErmFsCD4wgVlVyuZy9PBAiEAwLcf1xkDNZxHTV09FcjLiR9AGl5VCEeSEE60%2Fd01wUsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPgz4IQJdgwu9EsX2yrcA9dUqqJ7tMkVZQ2b%2B9ra2wwvld2gPGfP8O7ZBgdvd0yFmDnwxPWOgbz%2F9A0ehjHgLMKaAE03PSS102RQkANIo%2F2C0KYkRUMqR566vWs%2BBVt5q%2BUVJP%2Ft%2FFQFtnUVWVq07Hk%2BL8Sd8flQfynyUsEc5g9o0PhyJ26YO9r7Po%2FpwKtuf5rIqgr6YldxqdW7gKLr6Wa13a06GAs5HqCpOWEnxSHfRw5VM1VPmd5xLoRlD7EVWGVq2tDPC8dpTd842gdjLIM3dM4lxz5LwPZJZpzhSbWQGRnMarGk2k%2BMsKDhpFhLwC18dGmAu76oMuTZZhtflte75DUP4SZTXxOn6rRazigHseCwHB6KdcstgHhPQN4R1kLhgAygbOpo775AGh%2Fp6IJyMlsvuYy0CTsxZio3mS5LHC%2BWdsdtou%2B0c2dA8UFnFnoIbn%2BvsPH71GGvtiXji804%2BPkt2bfTq%2FSP3xrkVuxeSKHD5buTDhGdjUFZnVuFW7%2B3XK3kev2RYnNFV2%2FNvVXy6EwkBYjyDhXQcQUfKbSoUPfcXrV4LJe9BnwWvNk6y3m9oPl9tGseASI6oLVlZMIkwgudW5%2B5R1MOhqw%2B3p9iHBt7QAEbzpnkFqvQ%2B%2BjMOgZ8Bw5XFcB14OBTMN6iwr8GOqUB9GrdO3pwqwTXZZDuMf%2FMANGuqaO%2BEAHmlnNz7BXz%2B6hmQNQywtMJfSfuKDl7zVCndow7Q2D9%2Bmsuo6hemS6zCaoiRQZx2f9Z80yEjd9yV0truM6hVaEfWVpsGwj1FvlhMnAR%2FD7XEk0ypfVKuCE07Dd%2B%2FR0BxJ0GYyUdohJ7u2WM9ietY9eHiV%2FA%2BPyg0HSRPxwCV%2BKvhMa2XkC18o%2By9b6ludPC&X-Amz-Signature=e47a34bb83d73803f6f2ce7ee9e3eacd7b18a07f48c2a0c40677982361fe755a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2FE7BV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZcc%2BnMLO0cfCsQZZY7LwHSErmFsCD4wgVlVyuZy9PBAiEAwLcf1xkDNZxHTV09FcjLiR9AGl5VCEeSEE60%2Fd01wUsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPgz4IQJdgwu9EsX2yrcA9dUqqJ7tMkVZQ2b%2B9ra2wwvld2gPGfP8O7ZBgdvd0yFmDnwxPWOgbz%2F9A0ehjHgLMKaAE03PSS102RQkANIo%2F2C0KYkRUMqR566vWs%2BBVt5q%2BUVJP%2Ft%2FFQFtnUVWVq07Hk%2BL8Sd8flQfynyUsEc5g9o0PhyJ26YO9r7Po%2FpwKtuf5rIqgr6YldxqdW7gKLr6Wa13a06GAs5HqCpOWEnxSHfRw5VM1VPmd5xLoRlD7EVWGVq2tDPC8dpTd842gdjLIM3dM4lxz5LwPZJZpzhSbWQGRnMarGk2k%2BMsKDhpFhLwC18dGmAu76oMuTZZhtflte75DUP4SZTXxOn6rRazigHseCwHB6KdcstgHhPQN4R1kLhgAygbOpo775AGh%2Fp6IJyMlsvuYy0CTsxZio3mS5LHC%2BWdsdtou%2B0c2dA8UFnFnoIbn%2BvsPH71GGvtiXji804%2BPkt2bfTq%2FSP3xrkVuxeSKHD5buTDhGdjUFZnVuFW7%2B3XK3kev2RYnNFV2%2FNvVXy6EwkBYjyDhXQcQUfKbSoUPfcXrV4LJe9BnwWvNk6y3m9oPl9tGseASI6oLVlZMIkwgudW5%2B5R1MOhqw%2B3p9iHBt7QAEbzpnkFqvQ%2B%2BjMOgZ8Bw5XFcB14OBTMN6iwr8GOqUB9GrdO3pwqwTXZZDuMf%2FMANGuqaO%2BEAHmlnNz7BXz%2B6hmQNQywtMJfSfuKDl7zVCndow7Q2D9%2Bmsuo6hemS6zCaoiRQZx2f9Z80yEjd9yV0truM6hVaEfWVpsGwj1FvlhMnAR%2FD7XEk0ypfVKuCE07Dd%2B%2FR0BxJ0GYyUdohJ7u2WM9ietY9eHiV%2FA%2BPyg0HSRPxwCV%2BKvhMa2XkC18o%2By9b6ludPC&X-Amz-Signature=af1c1baf412820b85203562b78208af85402484af310ac426c192e4beafeabec&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2FE7BV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZcc%2BnMLO0cfCsQZZY7LwHSErmFsCD4wgVlVyuZy9PBAiEAwLcf1xkDNZxHTV09FcjLiR9AGl5VCEeSEE60%2Fd01wUsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPgz4IQJdgwu9EsX2yrcA9dUqqJ7tMkVZQ2b%2B9ra2wwvld2gPGfP8O7ZBgdvd0yFmDnwxPWOgbz%2F9A0ehjHgLMKaAE03PSS102RQkANIo%2F2C0KYkRUMqR566vWs%2BBVt5q%2BUVJP%2Ft%2FFQFtnUVWVq07Hk%2BL8Sd8flQfynyUsEc5g9o0PhyJ26YO9r7Po%2FpwKtuf5rIqgr6YldxqdW7gKLr6Wa13a06GAs5HqCpOWEnxSHfRw5VM1VPmd5xLoRlD7EVWGVq2tDPC8dpTd842gdjLIM3dM4lxz5LwPZJZpzhSbWQGRnMarGk2k%2BMsKDhpFhLwC18dGmAu76oMuTZZhtflte75DUP4SZTXxOn6rRazigHseCwHB6KdcstgHhPQN4R1kLhgAygbOpo775AGh%2Fp6IJyMlsvuYy0CTsxZio3mS5LHC%2BWdsdtou%2B0c2dA8UFnFnoIbn%2BvsPH71GGvtiXji804%2BPkt2bfTq%2FSP3xrkVuxeSKHD5buTDhGdjUFZnVuFW7%2B3XK3kev2RYnNFV2%2FNvVXy6EwkBYjyDhXQcQUfKbSoUPfcXrV4LJe9BnwWvNk6y3m9oPl9tGseASI6oLVlZMIkwgudW5%2B5R1MOhqw%2B3p9iHBt7QAEbzpnkFqvQ%2B%2BjMOgZ8Bw5XFcB14OBTMN6iwr8GOqUB9GrdO3pwqwTXZZDuMf%2FMANGuqaO%2BEAHmlnNz7BXz%2B6hmQNQywtMJfSfuKDl7zVCndow7Q2D9%2Bmsuo6hemS6zCaoiRQZx2f9Z80yEjd9yV0truM6hVaEfWVpsGwj1FvlhMnAR%2FD7XEk0ypfVKuCE07Dd%2B%2FR0BxJ0GYyUdohJ7u2WM9ietY9eHiV%2FA%2BPyg0HSRPxwCV%2BKvhMa2XkC18o%2By9b6ludPC&X-Amz-Signature=5e20322748551758e0387599c20e1bd303889b2429b108714ab0ec8c2ca4911a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2FE7BV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZcc%2BnMLO0cfCsQZZY7LwHSErmFsCD4wgVlVyuZy9PBAiEAwLcf1xkDNZxHTV09FcjLiR9AGl5VCEeSEE60%2Fd01wUsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPgz4IQJdgwu9EsX2yrcA9dUqqJ7tMkVZQ2b%2B9ra2wwvld2gPGfP8O7ZBgdvd0yFmDnwxPWOgbz%2F9A0ehjHgLMKaAE03PSS102RQkANIo%2F2C0KYkRUMqR566vWs%2BBVt5q%2BUVJP%2Ft%2FFQFtnUVWVq07Hk%2BL8Sd8flQfynyUsEc5g9o0PhyJ26YO9r7Po%2FpwKtuf5rIqgr6YldxqdW7gKLr6Wa13a06GAs5HqCpOWEnxSHfRw5VM1VPmd5xLoRlD7EVWGVq2tDPC8dpTd842gdjLIM3dM4lxz5LwPZJZpzhSbWQGRnMarGk2k%2BMsKDhpFhLwC18dGmAu76oMuTZZhtflte75DUP4SZTXxOn6rRazigHseCwHB6KdcstgHhPQN4R1kLhgAygbOpo775AGh%2Fp6IJyMlsvuYy0CTsxZio3mS5LHC%2BWdsdtou%2B0c2dA8UFnFnoIbn%2BvsPH71GGvtiXji804%2BPkt2bfTq%2FSP3xrkVuxeSKHD5buTDhGdjUFZnVuFW7%2B3XK3kev2RYnNFV2%2FNvVXy6EwkBYjyDhXQcQUfKbSoUPfcXrV4LJe9BnwWvNk6y3m9oPl9tGseASI6oLVlZMIkwgudW5%2B5R1MOhqw%2B3p9iHBt7QAEbzpnkFqvQ%2B%2BjMOgZ8Bw5XFcB14OBTMN6iwr8GOqUB9GrdO3pwqwTXZZDuMf%2FMANGuqaO%2BEAHmlnNz7BXz%2B6hmQNQywtMJfSfuKDl7zVCndow7Q2D9%2Bmsuo6hemS6zCaoiRQZx2f9Z80yEjd9yV0truM6hVaEfWVpsGwj1FvlhMnAR%2FD7XEk0ypfVKuCE07Dd%2B%2FR0BxJ0GYyUdohJ7u2WM9ietY9eHiV%2FA%2BPyg0HSRPxwCV%2BKvhMa2XkC18o%2By9b6ludPC&X-Amz-Signature=67307c276370a594f8708d2bbd0f912c5ed242449f95749a3c2c83d701f7d93b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2FE7BV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZcc%2BnMLO0cfCsQZZY7LwHSErmFsCD4wgVlVyuZy9PBAiEAwLcf1xkDNZxHTV09FcjLiR9AGl5VCEeSEE60%2Fd01wUsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPgz4IQJdgwu9EsX2yrcA9dUqqJ7tMkVZQ2b%2B9ra2wwvld2gPGfP8O7ZBgdvd0yFmDnwxPWOgbz%2F9A0ehjHgLMKaAE03PSS102RQkANIo%2F2C0KYkRUMqR566vWs%2BBVt5q%2BUVJP%2Ft%2FFQFtnUVWVq07Hk%2BL8Sd8flQfynyUsEc5g9o0PhyJ26YO9r7Po%2FpwKtuf5rIqgr6YldxqdW7gKLr6Wa13a06GAs5HqCpOWEnxSHfRw5VM1VPmd5xLoRlD7EVWGVq2tDPC8dpTd842gdjLIM3dM4lxz5LwPZJZpzhSbWQGRnMarGk2k%2BMsKDhpFhLwC18dGmAu76oMuTZZhtflte75DUP4SZTXxOn6rRazigHseCwHB6KdcstgHhPQN4R1kLhgAygbOpo775AGh%2Fp6IJyMlsvuYy0CTsxZio3mS5LHC%2BWdsdtou%2B0c2dA8UFnFnoIbn%2BvsPH71GGvtiXji804%2BPkt2bfTq%2FSP3xrkVuxeSKHD5buTDhGdjUFZnVuFW7%2B3XK3kev2RYnNFV2%2FNvVXy6EwkBYjyDhXQcQUfKbSoUPfcXrV4LJe9BnwWvNk6y3m9oPl9tGseASI6oLVlZMIkwgudW5%2B5R1MOhqw%2B3p9iHBt7QAEbzpnkFqvQ%2B%2BjMOgZ8Bw5XFcB14OBTMN6iwr8GOqUB9GrdO3pwqwTXZZDuMf%2FMANGuqaO%2BEAHmlnNz7BXz%2B6hmQNQywtMJfSfuKDl7zVCndow7Q2D9%2Bmsuo6hemS6zCaoiRQZx2f9Z80yEjd9yV0truM6hVaEfWVpsGwj1FvlhMnAR%2FD7XEk0ypfVKuCE07Dd%2B%2FR0BxJ0GYyUdohJ7u2WM9ietY9eHiV%2FA%2BPyg0HSRPxwCV%2BKvhMa2XkC18o%2By9b6ludPC&X-Amz-Signature=5e9eda75d49a69b75cde087cabd0ae5535e6c8c4d811740ed211e783c4c62511&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2FE7BV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZcc%2BnMLO0cfCsQZZY7LwHSErmFsCD4wgVlVyuZy9PBAiEAwLcf1xkDNZxHTV09FcjLiR9AGl5VCEeSEE60%2Fd01wUsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPgz4IQJdgwu9EsX2yrcA9dUqqJ7tMkVZQ2b%2B9ra2wwvld2gPGfP8O7ZBgdvd0yFmDnwxPWOgbz%2F9A0ehjHgLMKaAE03PSS102RQkANIo%2F2C0KYkRUMqR566vWs%2BBVt5q%2BUVJP%2Ft%2FFQFtnUVWVq07Hk%2BL8Sd8flQfynyUsEc5g9o0PhyJ26YO9r7Po%2FpwKtuf5rIqgr6YldxqdW7gKLr6Wa13a06GAs5HqCpOWEnxSHfRw5VM1VPmd5xLoRlD7EVWGVq2tDPC8dpTd842gdjLIM3dM4lxz5LwPZJZpzhSbWQGRnMarGk2k%2BMsKDhpFhLwC18dGmAu76oMuTZZhtflte75DUP4SZTXxOn6rRazigHseCwHB6KdcstgHhPQN4R1kLhgAygbOpo775AGh%2Fp6IJyMlsvuYy0CTsxZio3mS5LHC%2BWdsdtou%2B0c2dA8UFnFnoIbn%2BvsPH71GGvtiXji804%2BPkt2bfTq%2FSP3xrkVuxeSKHD5buTDhGdjUFZnVuFW7%2B3XK3kev2RYnNFV2%2FNvVXy6EwkBYjyDhXQcQUfKbSoUPfcXrV4LJe9BnwWvNk6y3m9oPl9tGseASI6oLVlZMIkwgudW5%2B5R1MOhqw%2B3p9iHBt7QAEbzpnkFqvQ%2B%2BjMOgZ8Bw5XFcB14OBTMN6iwr8GOqUB9GrdO3pwqwTXZZDuMf%2FMANGuqaO%2BEAHmlnNz7BXz%2B6hmQNQywtMJfSfuKDl7zVCndow7Q2D9%2Bmsuo6hemS6zCaoiRQZx2f9Z80yEjd9yV0truM6hVaEfWVpsGwj1FvlhMnAR%2FD7XEk0ypfVKuCE07Dd%2B%2FR0BxJ0GYyUdohJ7u2WM9ietY9eHiV%2FA%2BPyg0HSRPxwCV%2BKvhMa2XkC18o%2By9b6ludPC&X-Amz-Signature=a7acdca94a01dce75f337110bcbcd20c5798c86f0fb8cbc6ccd772a2f44395d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
