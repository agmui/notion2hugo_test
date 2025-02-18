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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAVKDHR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIErHztrUQvmpwyeTEFrqN1lC4izeh10VRLT9oBkJ4zeTAiEAzrAqA4c2WzzxrZ%2BEw4QXOueI4aoQF%2BqOdXTYk%2BxDGTQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUhZ0ymBc5x8qJ8YyrcA4Ebx6ETQcNldyRFHe%2Bese82J3GACg9C%2F7%2FjF%2BUWVQ8jZHPG99DsTxYV5bI4BkaFs8M9sMpe0FoisjFl%2BnYLZQwpHRssnCFpoH7k4KNqXRMCw3V2fjyM1Ff31ad1OcavCdzvHkcBG0FfTvqQalIl5cX%2FQmq4P%2F453bjazjhvlF3fJU35NAfVjR59V0v7JH%2Fx7QZUU%2FtkUW0qJk86PmSqkhJGmniMKbJbUa58M4H38ZDl8XzWOYS7nfM4GqKd3zy0HM0e2ocOx0QQO1qWDG0H8oOof5AqD9Ywhy7L1%2FzrvMDqAikRlnkeXoTThSBxBVlDg2%2BvgIOQHhxOP3Wq8LAppr0vxAUnAmvTBcux4u23OpSpx4dIS3hn9YM%2FLP6MYLHPzeezFHUKhAsukli9WtvWrCoIpkzniszbQTFs%2B%2FBq0b70rWDP6Zzy589v6KiKFK2ob3pOmWN8u8ajwilFFXZxC0Ad6n1qMhmTAYC6vRyabZezrsOH7zi0Yyz%2Bep4Nlaeq7iKJsJpGOtPf7C%2FlafjWPZO7w2pQ7YFx5haMFLO85Kp2V8gcTag%2FCYPyrUl%2Bs%2BPpSCnYcjFTJaUWkSsOf6j1%2BROs9CoJy4huIAYPlFib659xJI7IHk%2Bubap1Bkf8MPj%2B0L0GOqUBlj7oSpF4riplIhNyb3BManCeNDRYiUMd9kMFSp%2F4rxZ%2BemlUj7xZdkyyAWz80Y4XGrWNYRmnI7cVRaLqiquFjTCh%2Ft2rMWH3vzLCMY53Wxzpi5HBviL8C08ksobhUWyNEoJ8%2Bbk9gv8xt26A4H1x6q%2F2PXcPISk98KfxMriiWZecLB4geMZKRgi4sJKwTQznL6%2FdbrwXez8DYEBxCcxwoFWK0Q1n&X-Amz-Signature=c7e225411ac4be3899095c5cd5e70eba06aadda82e7a357ff3d8bffb0c7062ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAVKDHR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIErHztrUQvmpwyeTEFrqN1lC4izeh10VRLT9oBkJ4zeTAiEAzrAqA4c2WzzxrZ%2BEw4QXOueI4aoQF%2BqOdXTYk%2BxDGTQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUhZ0ymBc5x8qJ8YyrcA4Ebx6ETQcNldyRFHe%2Bese82J3GACg9C%2F7%2FjF%2BUWVQ8jZHPG99DsTxYV5bI4BkaFs8M9sMpe0FoisjFl%2BnYLZQwpHRssnCFpoH7k4KNqXRMCw3V2fjyM1Ff31ad1OcavCdzvHkcBG0FfTvqQalIl5cX%2FQmq4P%2F453bjazjhvlF3fJU35NAfVjR59V0v7JH%2Fx7QZUU%2FtkUW0qJk86PmSqkhJGmniMKbJbUa58M4H38ZDl8XzWOYS7nfM4GqKd3zy0HM0e2ocOx0QQO1qWDG0H8oOof5AqD9Ywhy7L1%2FzrvMDqAikRlnkeXoTThSBxBVlDg2%2BvgIOQHhxOP3Wq8LAppr0vxAUnAmvTBcux4u23OpSpx4dIS3hn9YM%2FLP6MYLHPzeezFHUKhAsukli9WtvWrCoIpkzniszbQTFs%2B%2FBq0b70rWDP6Zzy589v6KiKFK2ob3pOmWN8u8ajwilFFXZxC0Ad6n1qMhmTAYC6vRyabZezrsOH7zi0Yyz%2Bep4Nlaeq7iKJsJpGOtPf7C%2FlafjWPZO7w2pQ7YFx5haMFLO85Kp2V8gcTag%2FCYPyrUl%2Bs%2BPpSCnYcjFTJaUWkSsOf6j1%2BROs9CoJy4huIAYPlFib659xJI7IHk%2Bubap1Bkf8MPj%2B0L0GOqUBlj7oSpF4riplIhNyb3BManCeNDRYiUMd9kMFSp%2F4rxZ%2BemlUj7xZdkyyAWz80Y4XGrWNYRmnI7cVRaLqiquFjTCh%2Ft2rMWH3vzLCMY53Wxzpi5HBviL8C08ksobhUWyNEoJ8%2Bbk9gv8xt26A4H1x6q%2F2PXcPISk98KfxMriiWZecLB4geMZKRgi4sJKwTQznL6%2FdbrwXez8DYEBxCcxwoFWK0Q1n&X-Amz-Signature=6fc64780ba1aa83d9f997e58250cd8e378451ae37cb77e8effaabb931d9d2750&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAVKDHR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIErHztrUQvmpwyeTEFrqN1lC4izeh10VRLT9oBkJ4zeTAiEAzrAqA4c2WzzxrZ%2BEw4QXOueI4aoQF%2BqOdXTYk%2BxDGTQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUhZ0ymBc5x8qJ8YyrcA4Ebx6ETQcNldyRFHe%2Bese82J3GACg9C%2F7%2FjF%2BUWVQ8jZHPG99DsTxYV5bI4BkaFs8M9sMpe0FoisjFl%2BnYLZQwpHRssnCFpoH7k4KNqXRMCw3V2fjyM1Ff31ad1OcavCdzvHkcBG0FfTvqQalIl5cX%2FQmq4P%2F453bjazjhvlF3fJU35NAfVjR59V0v7JH%2Fx7QZUU%2FtkUW0qJk86PmSqkhJGmniMKbJbUa58M4H38ZDl8XzWOYS7nfM4GqKd3zy0HM0e2ocOx0QQO1qWDG0H8oOof5AqD9Ywhy7L1%2FzrvMDqAikRlnkeXoTThSBxBVlDg2%2BvgIOQHhxOP3Wq8LAppr0vxAUnAmvTBcux4u23OpSpx4dIS3hn9YM%2FLP6MYLHPzeezFHUKhAsukli9WtvWrCoIpkzniszbQTFs%2B%2FBq0b70rWDP6Zzy589v6KiKFK2ob3pOmWN8u8ajwilFFXZxC0Ad6n1qMhmTAYC6vRyabZezrsOH7zi0Yyz%2Bep4Nlaeq7iKJsJpGOtPf7C%2FlafjWPZO7w2pQ7YFx5haMFLO85Kp2V8gcTag%2FCYPyrUl%2Bs%2BPpSCnYcjFTJaUWkSsOf6j1%2BROs9CoJy4huIAYPlFib659xJI7IHk%2Bubap1Bkf8MPj%2B0L0GOqUBlj7oSpF4riplIhNyb3BManCeNDRYiUMd9kMFSp%2F4rxZ%2BemlUj7xZdkyyAWz80Y4XGrWNYRmnI7cVRaLqiquFjTCh%2Ft2rMWH3vzLCMY53Wxzpi5HBviL8C08ksobhUWyNEoJ8%2Bbk9gv8xt26A4H1x6q%2F2PXcPISk98KfxMriiWZecLB4geMZKRgi4sJKwTQznL6%2FdbrwXez8DYEBxCcxwoFWK0Q1n&X-Amz-Signature=90b939aa104a893c694fc6db4dc3ed81d0baf54d6350abec09193ed26c33b948&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAVKDHR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIErHztrUQvmpwyeTEFrqN1lC4izeh10VRLT9oBkJ4zeTAiEAzrAqA4c2WzzxrZ%2BEw4QXOueI4aoQF%2BqOdXTYk%2BxDGTQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUhZ0ymBc5x8qJ8YyrcA4Ebx6ETQcNldyRFHe%2Bese82J3GACg9C%2F7%2FjF%2BUWVQ8jZHPG99DsTxYV5bI4BkaFs8M9sMpe0FoisjFl%2BnYLZQwpHRssnCFpoH7k4KNqXRMCw3V2fjyM1Ff31ad1OcavCdzvHkcBG0FfTvqQalIl5cX%2FQmq4P%2F453bjazjhvlF3fJU35NAfVjR59V0v7JH%2Fx7QZUU%2FtkUW0qJk86PmSqkhJGmniMKbJbUa58M4H38ZDl8XzWOYS7nfM4GqKd3zy0HM0e2ocOx0QQO1qWDG0H8oOof5AqD9Ywhy7L1%2FzrvMDqAikRlnkeXoTThSBxBVlDg2%2BvgIOQHhxOP3Wq8LAppr0vxAUnAmvTBcux4u23OpSpx4dIS3hn9YM%2FLP6MYLHPzeezFHUKhAsukli9WtvWrCoIpkzniszbQTFs%2B%2FBq0b70rWDP6Zzy589v6KiKFK2ob3pOmWN8u8ajwilFFXZxC0Ad6n1qMhmTAYC6vRyabZezrsOH7zi0Yyz%2Bep4Nlaeq7iKJsJpGOtPf7C%2FlafjWPZO7w2pQ7YFx5haMFLO85Kp2V8gcTag%2FCYPyrUl%2Bs%2BPpSCnYcjFTJaUWkSsOf6j1%2BROs9CoJy4huIAYPlFib659xJI7IHk%2Bubap1Bkf8MPj%2B0L0GOqUBlj7oSpF4riplIhNyb3BManCeNDRYiUMd9kMFSp%2F4rxZ%2BemlUj7xZdkyyAWz80Y4XGrWNYRmnI7cVRaLqiquFjTCh%2Ft2rMWH3vzLCMY53Wxzpi5HBviL8C08ksobhUWyNEoJ8%2Bbk9gv8xt26A4H1x6q%2F2PXcPISk98KfxMriiWZecLB4geMZKRgi4sJKwTQznL6%2FdbrwXez8DYEBxCcxwoFWK0Q1n&X-Amz-Signature=d7030a40741b18458f287aa6f103fdffe7bf7fdd93ba911d6acef9136eb0cb67&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAVKDHR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIErHztrUQvmpwyeTEFrqN1lC4izeh10VRLT9oBkJ4zeTAiEAzrAqA4c2WzzxrZ%2BEw4QXOueI4aoQF%2BqOdXTYk%2BxDGTQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUhZ0ymBc5x8qJ8YyrcA4Ebx6ETQcNldyRFHe%2Bese82J3GACg9C%2F7%2FjF%2BUWVQ8jZHPG99DsTxYV5bI4BkaFs8M9sMpe0FoisjFl%2BnYLZQwpHRssnCFpoH7k4KNqXRMCw3V2fjyM1Ff31ad1OcavCdzvHkcBG0FfTvqQalIl5cX%2FQmq4P%2F453bjazjhvlF3fJU35NAfVjR59V0v7JH%2Fx7QZUU%2FtkUW0qJk86PmSqkhJGmniMKbJbUa58M4H38ZDl8XzWOYS7nfM4GqKd3zy0HM0e2ocOx0QQO1qWDG0H8oOof5AqD9Ywhy7L1%2FzrvMDqAikRlnkeXoTThSBxBVlDg2%2BvgIOQHhxOP3Wq8LAppr0vxAUnAmvTBcux4u23OpSpx4dIS3hn9YM%2FLP6MYLHPzeezFHUKhAsukli9WtvWrCoIpkzniszbQTFs%2B%2FBq0b70rWDP6Zzy589v6KiKFK2ob3pOmWN8u8ajwilFFXZxC0Ad6n1qMhmTAYC6vRyabZezrsOH7zi0Yyz%2Bep4Nlaeq7iKJsJpGOtPf7C%2FlafjWPZO7w2pQ7YFx5haMFLO85Kp2V8gcTag%2FCYPyrUl%2Bs%2BPpSCnYcjFTJaUWkSsOf6j1%2BROs9CoJy4huIAYPlFib659xJI7IHk%2Bubap1Bkf8MPj%2B0L0GOqUBlj7oSpF4riplIhNyb3BManCeNDRYiUMd9kMFSp%2F4rxZ%2BemlUj7xZdkyyAWz80Y4XGrWNYRmnI7cVRaLqiquFjTCh%2Ft2rMWH3vzLCMY53Wxzpi5HBviL8C08ksobhUWyNEoJ8%2Bbk9gv8xt26A4H1x6q%2F2PXcPISk98KfxMriiWZecLB4geMZKRgi4sJKwTQznL6%2FdbrwXez8DYEBxCcxwoFWK0Q1n&X-Amz-Signature=cf7ea3f8fef5a43015e09492b69a3b0ab13a431b31c6ca4ee082a06d93cc3aef&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAVKDHR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIErHztrUQvmpwyeTEFrqN1lC4izeh10VRLT9oBkJ4zeTAiEAzrAqA4c2WzzxrZ%2BEw4QXOueI4aoQF%2BqOdXTYk%2BxDGTQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUhZ0ymBc5x8qJ8YyrcA4Ebx6ETQcNldyRFHe%2Bese82J3GACg9C%2F7%2FjF%2BUWVQ8jZHPG99DsTxYV5bI4BkaFs8M9sMpe0FoisjFl%2BnYLZQwpHRssnCFpoH7k4KNqXRMCw3V2fjyM1Ff31ad1OcavCdzvHkcBG0FfTvqQalIl5cX%2FQmq4P%2F453bjazjhvlF3fJU35NAfVjR59V0v7JH%2Fx7QZUU%2FtkUW0qJk86PmSqkhJGmniMKbJbUa58M4H38ZDl8XzWOYS7nfM4GqKd3zy0HM0e2ocOx0QQO1qWDG0H8oOof5AqD9Ywhy7L1%2FzrvMDqAikRlnkeXoTThSBxBVlDg2%2BvgIOQHhxOP3Wq8LAppr0vxAUnAmvTBcux4u23OpSpx4dIS3hn9YM%2FLP6MYLHPzeezFHUKhAsukli9WtvWrCoIpkzniszbQTFs%2B%2FBq0b70rWDP6Zzy589v6KiKFK2ob3pOmWN8u8ajwilFFXZxC0Ad6n1qMhmTAYC6vRyabZezrsOH7zi0Yyz%2Bep4Nlaeq7iKJsJpGOtPf7C%2FlafjWPZO7w2pQ7YFx5haMFLO85Kp2V8gcTag%2FCYPyrUl%2Bs%2BPpSCnYcjFTJaUWkSsOf6j1%2BROs9CoJy4huIAYPlFib659xJI7IHk%2Bubap1Bkf8MPj%2B0L0GOqUBlj7oSpF4riplIhNyb3BManCeNDRYiUMd9kMFSp%2F4rxZ%2BemlUj7xZdkyyAWz80Y4XGrWNYRmnI7cVRaLqiquFjTCh%2Ft2rMWH3vzLCMY53Wxzpi5HBviL8C08ksobhUWyNEoJ8%2Bbk9gv8xt26A4H1x6q%2F2PXcPISk98KfxMriiWZecLB4geMZKRgi4sJKwTQznL6%2FdbrwXez8DYEBxCcxwoFWK0Q1n&X-Amz-Signature=6ca59205148164c7504d7b78e7c835411f8ef8161a303bdde7c2a8c2de8a077a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAVKDHR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIErHztrUQvmpwyeTEFrqN1lC4izeh10VRLT9oBkJ4zeTAiEAzrAqA4c2WzzxrZ%2BEw4QXOueI4aoQF%2BqOdXTYk%2BxDGTQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUhZ0ymBc5x8qJ8YyrcA4Ebx6ETQcNldyRFHe%2Bese82J3GACg9C%2F7%2FjF%2BUWVQ8jZHPG99DsTxYV5bI4BkaFs8M9sMpe0FoisjFl%2BnYLZQwpHRssnCFpoH7k4KNqXRMCw3V2fjyM1Ff31ad1OcavCdzvHkcBG0FfTvqQalIl5cX%2FQmq4P%2F453bjazjhvlF3fJU35NAfVjR59V0v7JH%2Fx7QZUU%2FtkUW0qJk86PmSqkhJGmniMKbJbUa58M4H38ZDl8XzWOYS7nfM4GqKd3zy0HM0e2ocOx0QQO1qWDG0H8oOof5AqD9Ywhy7L1%2FzrvMDqAikRlnkeXoTThSBxBVlDg2%2BvgIOQHhxOP3Wq8LAppr0vxAUnAmvTBcux4u23OpSpx4dIS3hn9YM%2FLP6MYLHPzeezFHUKhAsukli9WtvWrCoIpkzniszbQTFs%2B%2FBq0b70rWDP6Zzy589v6KiKFK2ob3pOmWN8u8ajwilFFXZxC0Ad6n1qMhmTAYC6vRyabZezrsOH7zi0Yyz%2Bep4Nlaeq7iKJsJpGOtPf7C%2FlafjWPZO7w2pQ7YFx5haMFLO85Kp2V8gcTag%2FCYPyrUl%2Bs%2BPpSCnYcjFTJaUWkSsOf6j1%2BROs9CoJy4huIAYPlFib659xJI7IHk%2Bubap1Bkf8MPj%2B0L0GOqUBlj7oSpF4riplIhNyb3BManCeNDRYiUMd9kMFSp%2F4rxZ%2BemlUj7xZdkyyAWz80Y4XGrWNYRmnI7cVRaLqiquFjTCh%2Ft2rMWH3vzLCMY53Wxzpi5HBviL8C08ksobhUWyNEoJ8%2Bbk9gv8xt26A4H1x6q%2F2PXcPISk98KfxMriiWZecLB4geMZKRgi4sJKwTQznL6%2FdbrwXez8DYEBxCcxwoFWK0Q1n&X-Amz-Signature=3f8e0670eb3ddb0945d375cb2f25f5185f246359bfade742ada026d8e9fc2f0c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
