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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TKPQI2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF44aiY95AW1S%2FAC5QPBYZmOqVyxbwnXx0VMF2SZguzZAiEAof3qn4gm7WR%2BrwQmM608gj9fgXj2O3t%2F%2BFEtm1KuZI4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLLidxVkvVOIutW%2BUCrcA689jfXj7vuJBnqBTZWhsJeKI0Kvuvq%2B1sGG3uVk379cfrTFnyruok%2FDl0Kmbf2n6jcEWmllhkTJg1DZMld5vkBcHzTpIrII6IHoDTfCscDGyt%2B6sUjThE9EDK7VO%2FIVvDk%2BJ1ed6NIj1rCSje9RGYSFLhzBuiaMZ%2BKaMBGQ6tkOltAPgDWAbBu5FNualOSb2E0bipwCn%2Fp4MHwO2RXnlodrReUfR4ODhiSw8jZ%2Fw5JpwG2PRkk%2BgKIWw%2BC1yGD%2FxdEZdN%2FfZQSvfdQPYssDiJbzYOyAoEW14rAdKphrOs1aNdqiSLV5NCE8a1N5hxodWsM4iWscCdKSyUeSRYFzN%2FyKYAz1L1N3F866ohIOVAzqsfqGoYG48M993t%2F%2BuaHAaJkWZdcj4SyY76o98QTHIs58T2nDGAkXkhvaykPjyp87q85dWsw3sf9cbyYgTIhDw5NZwP7a79zBVKSBPUqwe3uOMhHjihkFy%2BA7Tafmx60scmNGGcMv0G1AHjI7U%2ByD%2BSb8Rb0Fr9mU8quAaxVhB3ZosoKJRSzGgcDQNp2pAmRvx%2FDg4SpC3QQ3Dd8%2FTUMcvlN321DOW6zsQAfGgHKiw9vq0Im7EWzwEOkA%2BxGwOjbBrGkuOGGnsQqce5m7MNL2t8IGOqUB7kn9Y2BExIFIbKNfJWpn4efFcby25RfHTsvuFODVpomG0p4P2TwD%2B4GiaQwwBa%2BdOgXTbe9YH0zvzqNk26GzuZ%2FXaDnIhTRUvOniLxHjOqYZ0TQ1sn0ECmcrAxT5hIX6qnhCpPTDJr0yB8a3VSUpvZ7m5ESF8o2SrtrNl48b5x%2FsHgvQR7kIdFahOfkCkbkrHlzZeNQNaXd9LOU3MhPRuUcXZr9b&X-Amz-Signature=14272c0d3216de78967672c8e4c6981c5f028b729a761de60874053adda4bce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TKPQI2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF44aiY95AW1S%2FAC5QPBYZmOqVyxbwnXx0VMF2SZguzZAiEAof3qn4gm7WR%2BrwQmM608gj9fgXj2O3t%2F%2BFEtm1KuZI4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLLidxVkvVOIutW%2BUCrcA689jfXj7vuJBnqBTZWhsJeKI0Kvuvq%2B1sGG3uVk379cfrTFnyruok%2FDl0Kmbf2n6jcEWmllhkTJg1DZMld5vkBcHzTpIrII6IHoDTfCscDGyt%2B6sUjThE9EDK7VO%2FIVvDk%2BJ1ed6NIj1rCSje9RGYSFLhzBuiaMZ%2BKaMBGQ6tkOltAPgDWAbBu5FNualOSb2E0bipwCn%2Fp4MHwO2RXnlodrReUfR4ODhiSw8jZ%2Fw5JpwG2PRkk%2BgKIWw%2BC1yGD%2FxdEZdN%2FfZQSvfdQPYssDiJbzYOyAoEW14rAdKphrOs1aNdqiSLV5NCE8a1N5hxodWsM4iWscCdKSyUeSRYFzN%2FyKYAz1L1N3F866ohIOVAzqsfqGoYG48M993t%2F%2BuaHAaJkWZdcj4SyY76o98QTHIs58T2nDGAkXkhvaykPjyp87q85dWsw3sf9cbyYgTIhDw5NZwP7a79zBVKSBPUqwe3uOMhHjihkFy%2BA7Tafmx60scmNGGcMv0G1AHjI7U%2ByD%2BSb8Rb0Fr9mU8quAaxVhB3ZosoKJRSzGgcDQNp2pAmRvx%2FDg4SpC3QQ3Dd8%2FTUMcvlN321DOW6zsQAfGgHKiw9vq0Im7EWzwEOkA%2BxGwOjbBrGkuOGGnsQqce5m7MNL2t8IGOqUB7kn9Y2BExIFIbKNfJWpn4efFcby25RfHTsvuFODVpomG0p4P2TwD%2B4GiaQwwBa%2BdOgXTbe9YH0zvzqNk26GzuZ%2FXaDnIhTRUvOniLxHjOqYZ0TQ1sn0ECmcrAxT5hIX6qnhCpPTDJr0yB8a3VSUpvZ7m5ESF8o2SrtrNl48b5x%2FsHgvQR7kIdFahOfkCkbkrHlzZeNQNaXd9LOU3MhPRuUcXZr9b&X-Amz-Signature=bde4ae6ebd592c348630bc4800c3b67cdc5cd55afde7caefd34ae2a4987bcb91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TKPQI2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF44aiY95AW1S%2FAC5QPBYZmOqVyxbwnXx0VMF2SZguzZAiEAof3qn4gm7WR%2BrwQmM608gj9fgXj2O3t%2F%2BFEtm1KuZI4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLLidxVkvVOIutW%2BUCrcA689jfXj7vuJBnqBTZWhsJeKI0Kvuvq%2B1sGG3uVk379cfrTFnyruok%2FDl0Kmbf2n6jcEWmllhkTJg1DZMld5vkBcHzTpIrII6IHoDTfCscDGyt%2B6sUjThE9EDK7VO%2FIVvDk%2BJ1ed6NIj1rCSje9RGYSFLhzBuiaMZ%2BKaMBGQ6tkOltAPgDWAbBu5FNualOSb2E0bipwCn%2Fp4MHwO2RXnlodrReUfR4ODhiSw8jZ%2Fw5JpwG2PRkk%2BgKIWw%2BC1yGD%2FxdEZdN%2FfZQSvfdQPYssDiJbzYOyAoEW14rAdKphrOs1aNdqiSLV5NCE8a1N5hxodWsM4iWscCdKSyUeSRYFzN%2FyKYAz1L1N3F866ohIOVAzqsfqGoYG48M993t%2F%2BuaHAaJkWZdcj4SyY76o98QTHIs58T2nDGAkXkhvaykPjyp87q85dWsw3sf9cbyYgTIhDw5NZwP7a79zBVKSBPUqwe3uOMhHjihkFy%2BA7Tafmx60scmNGGcMv0G1AHjI7U%2ByD%2BSb8Rb0Fr9mU8quAaxVhB3ZosoKJRSzGgcDQNp2pAmRvx%2FDg4SpC3QQ3Dd8%2FTUMcvlN321DOW6zsQAfGgHKiw9vq0Im7EWzwEOkA%2BxGwOjbBrGkuOGGnsQqce5m7MNL2t8IGOqUB7kn9Y2BExIFIbKNfJWpn4efFcby25RfHTsvuFODVpomG0p4P2TwD%2B4GiaQwwBa%2BdOgXTbe9YH0zvzqNk26GzuZ%2FXaDnIhTRUvOniLxHjOqYZ0TQ1sn0ECmcrAxT5hIX6qnhCpPTDJr0yB8a3VSUpvZ7m5ESF8o2SrtrNl48b5x%2FsHgvQR7kIdFahOfkCkbkrHlzZeNQNaXd9LOU3MhPRuUcXZr9b&X-Amz-Signature=59254668f07b1610b26832fc4cf32f85e587effb7b4989c7a18936ffc7fb3880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TKPQI2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF44aiY95AW1S%2FAC5QPBYZmOqVyxbwnXx0VMF2SZguzZAiEAof3qn4gm7WR%2BrwQmM608gj9fgXj2O3t%2F%2BFEtm1KuZI4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLLidxVkvVOIutW%2BUCrcA689jfXj7vuJBnqBTZWhsJeKI0Kvuvq%2B1sGG3uVk379cfrTFnyruok%2FDl0Kmbf2n6jcEWmllhkTJg1DZMld5vkBcHzTpIrII6IHoDTfCscDGyt%2B6sUjThE9EDK7VO%2FIVvDk%2BJ1ed6NIj1rCSje9RGYSFLhzBuiaMZ%2BKaMBGQ6tkOltAPgDWAbBu5FNualOSb2E0bipwCn%2Fp4MHwO2RXnlodrReUfR4ODhiSw8jZ%2Fw5JpwG2PRkk%2BgKIWw%2BC1yGD%2FxdEZdN%2FfZQSvfdQPYssDiJbzYOyAoEW14rAdKphrOs1aNdqiSLV5NCE8a1N5hxodWsM4iWscCdKSyUeSRYFzN%2FyKYAz1L1N3F866ohIOVAzqsfqGoYG48M993t%2F%2BuaHAaJkWZdcj4SyY76o98QTHIs58T2nDGAkXkhvaykPjyp87q85dWsw3sf9cbyYgTIhDw5NZwP7a79zBVKSBPUqwe3uOMhHjihkFy%2BA7Tafmx60scmNGGcMv0G1AHjI7U%2ByD%2BSb8Rb0Fr9mU8quAaxVhB3ZosoKJRSzGgcDQNp2pAmRvx%2FDg4SpC3QQ3Dd8%2FTUMcvlN321DOW6zsQAfGgHKiw9vq0Im7EWzwEOkA%2BxGwOjbBrGkuOGGnsQqce5m7MNL2t8IGOqUB7kn9Y2BExIFIbKNfJWpn4efFcby25RfHTsvuFODVpomG0p4P2TwD%2B4GiaQwwBa%2BdOgXTbe9YH0zvzqNk26GzuZ%2FXaDnIhTRUvOniLxHjOqYZ0TQ1sn0ECmcrAxT5hIX6qnhCpPTDJr0yB8a3VSUpvZ7m5ESF8o2SrtrNl48b5x%2FsHgvQR7kIdFahOfkCkbkrHlzZeNQNaXd9LOU3MhPRuUcXZr9b&X-Amz-Signature=88b76ea706ba416b19d86e5bbbf9db937f80792c3bffbc33f77090379773dad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TKPQI2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF44aiY95AW1S%2FAC5QPBYZmOqVyxbwnXx0VMF2SZguzZAiEAof3qn4gm7WR%2BrwQmM608gj9fgXj2O3t%2F%2BFEtm1KuZI4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLLidxVkvVOIutW%2BUCrcA689jfXj7vuJBnqBTZWhsJeKI0Kvuvq%2B1sGG3uVk379cfrTFnyruok%2FDl0Kmbf2n6jcEWmllhkTJg1DZMld5vkBcHzTpIrII6IHoDTfCscDGyt%2B6sUjThE9EDK7VO%2FIVvDk%2BJ1ed6NIj1rCSje9RGYSFLhzBuiaMZ%2BKaMBGQ6tkOltAPgDWAbBu5FNualOSb2E0bipwCn%2Fp4MHwO2RXnlodrReUfR4ODhiSw8jZ%2Fw5JpwG2PRkk%2BgKIWw%2BC1yGD%2FxdEZdN%2FfZQSvfdQPYssDiJbzYOyAoEW14rAdKphrOs1aNdqiSLV5NCE8a1N5hxodWsM4iWscCdKSyUeSRYFzN%2FyKYAz1L1N3F866ohIOVAzqsfqGoYG48M993t%2F%2BuaHAaJkWZdcj4SyY76o98QTHIs58T2nDGAkXkhvaykPjyp87q85dWsw3sf9cbyYgTIhDw5NZwP7a79zBVKSBPUqwe3uOMhHjihkFy%2BA7Tafmx60scmNGGcMv0G1AHjI7U%2ByD%2BSb8Rb0Fr9mU8quAaxVhB3ZosoKJRSzGgcDQNp2pAmRvx%2FDg4SpC3QQ3Dd8%2FTUMcvlN321DOW6zsQAfGgHKiw9vq0Im7EWzwEOkA%2BxGwOjbBrGkuOGGnsQqce5m7MNL2t8IGOqUB7kn9Y2BExIFIbKNfJWpn4efFcby25RfHTsvuFODVpomG0p4P2TwD%2B4GiaQwwBa%2BdOgXTbe9YH0zvzqNk26GzuZ%2FXaDnIhTRUvOniLxHjOqYZ0TQ1sn0ECmcrAxT5hIX6qnhCpPTDJr0yB8a3VSUpvZ7m5ESF8o2SrtrNl48b5x%2FsHgvQR7kIdFahOfkCkbkrHlzZeNQNaXd9LOU3MhPRuUcXZr9b&X-Amz-Signature=fbbdfec8c6f138499f8b06b70b63cbb8dabeac3b6fca0e20e00c44b1e73fd88c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TKPQI2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF44aiY95AW1S%2FAC5QPBYZmOqVyxbwnXx0VMF2SZguzZAiEAof3qn4gm7WR%2BrwQmM608gj9fgXj2O3t%2F%2BFEtm1KuZI4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLLidxVkvVOIutW%2BUCrcA689jfXj7vuJBnqBTZWhsJeKI0Kvuvq%2B1sGG3uVk379cfrTFnyruok%2FDl0Kmbf2n6jcEWmllhkTJg1DZMld5vkBcHzTpIrII6IHoDTfCscDGyt%2B6sUjThE9EDK7VO%2FIVvDk%2BJ1ed6NIj1rCSje9RGYSFLhzBuiaMZ%2BKaMBGQ6tkOltAPgDWAbBu5FNualOSb2E0bipwCn%2Fp4MHwO2RXnlodrReUfR4ODhiSw8jZ%2Fw5JpwG2PRkk%2BgKIWw%2BC1yGD%2FxdEZdN%2FfZQSvfdQPYssDiJbzYOyAoEW14rAdKphrOs1aNdqiSLV5NCE8a1N5hxodWsM4iWscCdKSyUeSRYFzN%2FyKYAz1L1N3F866ohIOVAzqsfqGoYG48M993t%2F%2BuaHAaJkWZdcj4SyY76o98QTHIs58T2nDGAkXkhvaykPjyp87q85dWsw3sf9cbyYgTIhDw5NZwP7a79zBVKSBPUqwe3uOMhHjihkFy%2BA7Tafmx60scmNGGcMv0G1AHjI7U%2ByD%2BSb8Rb0Fr9mU8quAaxVhB3ZosoKJRSzGgcDQNp2pAmRvx%2FDg4SpC3QQ3Dd8%2FTUMcvlN321DOW6zsQAfGgHKiw9vq0Im7EWzwEOkA%2BxGwOjbBrGkuOGGnsQqce5m7MNL2t8IGOqUB7kn9Y2BExIFIbKNfJWpn4efFcby25RfHTsvuFODVpomG0p4P2TwD%2B4GiaQwwBa%2BdOgXTbe9YH0zvzqNk26GzuZ%2FXaDnIhTRUvOniLxHjOqYZ0TQ1sn0ECmcrAxT5hIX6qnhCpPTDJr0yB8a3VSUpvZ7m5ESF8o2SrtrNl48b5x%2FsHgvQR7kIdFahOfkCkbkrHlzZeNQNaXd9LOU3MhPRuUcXZr9b&X-Amz-Signature=5e1e155b6a204d88f6fe5ef104e3aa4a67faca268cf647cc8a6787a0759652f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TKPQI2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF44aiY95AW1S%2FAC5QPBYZmOqVyxbwnXx0VMF2SZguzZAiEAof3qn4gm7WR%2BrwQmM608gj9fgXj2O3t%2F%2BFEtm1KuZI4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLLidxVkvVOIutW%2BUCrcA689jfXj7vuJBnqBTZWhsJeKI0Kvuvq%2B1sGG3uVk379cfrTFnyruok%2FDl0Kmbf2n6jcEWmllhkTJg1DZMld5vkBcHzTpIrII6IHoDTfCscDGyt%2B6sUjThE9EDK7VO%2FIVvDk%2BJ1ed6NIj1rCSje9RGYSFLhzBuiaMZ%2BKaMBGQ6tkOltAPgDWAbBu5FNualOSb2E0bipwCn%2Fp4MHwO2RXnlodrReUfR4ODhiSw8jZ%2Fw5JpwG2PRkk%2BgKIWw%2BC1yGD%2FxdEZdN%2FfZQSvfdQPYssDiJbzYOyAoEW14rAdKphrOs1aNdqiSLV5NCE8a1N5hxodWsM4iWscCdKSyUeSRYFzN%2FyKYAz1L1N3F866ohIOVAzqsfqGoYG48M993t%2F%2BuaHAaJkWZdcj4SyY76o98QTHIs58T2nDGAkXkhvaykPjyp87q85dWsw3sf9cbyYgTIhDw5NZwP7a79zBVKSBPUqwe3uOMhHjihkFy%2BA7Tafmx60scmNGGcMv0G1AHjI7U%2ByD%2BSb8Rb0Fr9mU8quAaxVhB3ZosoKJRSzGgcDQNp2pAmRvx%2FDg4SpC3QQ3Dd8%2FTUMcvlN321DOW6zsQAfGgHKiw9vq0Im7EWzwEOkA%2BxGwOjbBrGkuOGGnsQqce5m7MNL2t8IGOqUB7kn9Y2BExIFIbKNfJWpn4efFcby25RfHTsvuFODVpomG0p4P2TwD%2B4GiaQwwBa%2BdOgXTbe9YH0zvzqNk26GzuZ%2FXaDnIhTRUvOniLxHjOqYZ0TQ1sn0ECmcrAxT5hIX6qnhCpPTDJr0yB8a3VSUpvZ7m5ESF8o2SrtrNl48b5x%2FsHgvQR7kIdFahOfkCkbkrHlzZeNQNaXd9LOU3MhPRuUcXZr9b&X-Amz-Signature=659a22abadd4d105138bf09f6606ea0f76a9a64c2422b7407272b024081e3c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
