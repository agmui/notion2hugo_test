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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4XCU23%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW4F27564yKJipBWZbwef%2FYWcPzUdLf%2Byuy5UjZz%2FcgAiEAvHXKhrWtNB1xmJo23rAVsQHm8bnCE42pA38gW4zI4XAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoa3dnFVuWkJrgC2CrcAze1Jo0nEsooAy4QFI86jtI53FPCd%2BwSrxM4ESwSeWgIJBjI01OUtYJvKRAP1f8T0DxDmVpGNNa4sXX3bMSFrSY%2FwC2DpAXQIJJw0RPl3VbWYqpEMimaWgbXLCZAyrsteBXPZU9Yb57rbFRp%2BL%2BPRpr9%2Fb%2BWxttK%2F00XH1WFkHhCYeY8NcD%2FBP8BSvZySUB%2ByHY5POEAbOjQ6P3uLC3A1ej1BZZnHpECKcICUWANwE1cAk24OgaoVN2gwd7qMn8%2FZ4ITK0ZpwyfzFFLC1pp7SBgH6aTDeC6yX5J%2BUzpRXoMHLIdHhAYP3ABK6V8W63DyBwzWdeLoaBKFgGA1zGPkwHSdBQdXXJSMWe%2F26kVOabPQbpMvJT7gFzWbMnFKMRNwlED4g7BAkedmjwtKPTtOaCVh5wVi3luJIlNVcJIEHp82tvNX7gzh7DqfvZzmUz1ObKa6j1JQKYAVNbDwBiLNMy%2BNKHGCscDljlqlV0bYqoAV9kERce0Xow0Sw3EyDeo41gSVwdt%2B4dX3%2Bg48uXUiTttC%2FZ5o8tTK1aGJgllyxI8huJQGAMCcACha6ym5wNMPoVEULY31HImQyiHWfnZJmlbpQC1TzTK9n2MpOjgmr7z3eYuDJs1F1QK6eJbAMN2tscEGOqUBYmdPFhCeVoNCYxZYUvB0vteOYdlpmNXkWkBB2Gmi0KZfbMwPVAZSCLn2YvuEHtzBsMaBD9YqmghtlgNMLNUgSKhriJ9qKonP3m5rbclKAlL0c%2BTFFbiUwb2CNLNQSXxT8zgM%2BvMrM6lyKwoXsL%2Bg87drT%2FiuZmxWRWD4VzCyeWgYrCrW0UtR8okiJiP2fFSXMLrcjJhF%2FSz2ZX3iWQd4MPNXRkqk&X-Amz-Signature=e27774a1a98c00a89a16636f08e672c8cc3a48d5b404c112923864d74ecbb0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4XCU23%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW4F27564yKJipBWZbwef%2FYWcPzUdLf%2Byuy5UjZz%2FcgAiEAvHXKhrWtNB1xmJo23rAVsQHm8bnCE42pA38gW4zI4XAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoa3dnFVuWkJrgC2CrcAze1Jo0nEsooAy4QFI86jtI53FPCd%2BwSrxM4ESwSeWgIJBjI01OUtYJvKRAP1f8T0DxDmVpGNNa4sXX3bMSFrSY%2FwC2DpAXQIJJw0RPl3VbWYqpEMimaWgbXLCZAyrsteBXPZU9Yb57rbFRp%2BL%2BPRpr9%2Fb%2BWxttK%2F00XH1WFkHhCYeY8NcD%2FBP8BSvZySUB%2ByHY5POEAbOjQ6P3uLC3A1ej1BZZnHpECKcICUWANwE1cAk24OgaoVN2gwd7qMn8%2FZ4ITK0ZpwyfzFFLC1pp7SBgH6aTDeC6yX5J%2BUzpRXoMHLIdHhAYP3ABK6V8W63DyBwzWdeLoaBKFgGA1zGPkwHSdBQdXXJSMWe%2F26kVOabPQbpMvJT7gFzWbMnFKMRNwlED4g7BAkedmjwtKPTtOaCVh5wVi3luJIlNVcJIEHp82tvNX7gzh7DqfvZzmUz1ObKa6j1JQKYAVNbDwBiLNMy%2BNKHGCscDljlqlV0bYqoAV9kERce0Xow0Sw3EyDeo41gSVwdt%2B4dX3%2Bg48uXUiTttC%2FZ5o8tTK1aGJgllyxI8huJQGAMCcACha6ym5wNMPoVEULY31HImQyiHWfnZJmlbpQC1TzTK9n2MpOjgmr7z3eYuDJs1F1QK6eJbAMN2tscEGOqUBYmdPFhCeVoNCYxZYUvB0vteOYdlpmNXkWkBB2Gmi0KZfbMwPVAZSCLn2YvuEHtzBsMaBD9YqmghtlgNMLNUgSKhriJ9qKonP3m5rbclKAlL0c%2BTFFbiUwb2CNLNQSXxT8zgM%2BvMrM6lyKwoXsL%2Bg87drT%2FiuZmxWRWD4VzCyeWgYrCrW0UtR8okiJiP2fFSXMLrcjJhF%2FSz2ZX3iWQd4MPNXRkqk&X-Amz-Signature=5a799765b3347b02dcb5e4976d02ea23126789f092d6751e90c432f25a0a26f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4XCU23%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW4F27564yKJipBWZbwef%2FYWcPzUdLf%2Byuy5UjZz%2FcgAiEAvHXKhrWtNB1xmJo23rAVsQHm8bnCE42pA38gW4zI4XAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoa3dnFVuWkJrgC2CrcAze1Jo0nEsooAy4QFI86jtI53FPCd%2BwSrxM4ESwSeWgIJBjI01OUtYJvKRAP1f8T0DxDmVpGNNa4sXX3bMSFrSY%2FwC2DpAXQIJJw0RPl3VbWYqpEMimaWgbXLCZAyrsteBXPZU9Yb57rbFRp%2BL%2BPRpr9%2Fb%2BWxttK%2F00XH1WFkHhCYeY8NcD%2FBP8BSvZySUB%2ByHY5POEAbOjQ6P3uLC3A1ej1BZZnHpECKcICUWANwE1cAk24OgaoVN2gwd7qMn8%2FZ4ITK0ZpwyfzFFLC1pp7SBgH6aTDeC6yX5J%2BUzpRXoMHLIdHhAYP3ABK6V8W63DyBwzWdeLoaBKFgGA1zGPkwHSdBQdXXJSMWe%2F26kVOabPQbpMvJT7gFzWbMnFKMRNwlED4g7BAkedmjwtKPTtOaCVh5wVi3luJIlNVcJIEHp82tvNX7gzh7DqfvZzmUz1ObKa6j1JQKYAVNbDwBiLNMy%2BNKHGCscDljlqlV0bYqoAV9kERce0Xow0Sw3EyDeo41gSVwdt%2B4dX3%2Bg48uXUiTttC%2FZ5o8tTK1aGJgllyxI8huJQGAMCcACha6ym5wNMPoVEULY31HImQyiHWfnZJmlbpQC1TzTK9n2MpOjgmr7z3eYuDJs1F1QK6eJbAMN2tscEGOqUBYmdPFhCeVoNCYxZYUvB0vteOYdlpmNXkWkBB2Gmi0KZfbMwPVAZSCLn2YvuEHtzBsMaBD9YqmghtlgNMLNUgSKhriJ9qKonP3m5rbclKAlL0c%2BTFFbiUwb2CNLNQSXxT8zgM%2BvMrM6lyKwoXsL%2Bg87drT%2FiuZmxWRWD4VzCyeWgYrCrW0UtR8okiJiP2fFSXMLrcjJhF%2FSz2ZX3iWQd4MPNXRkqk&X-Amz-Signature=46eeb0d1c2a224dd0d6b426eebc8be258d070b58498ee1900a8ce439985b6e85&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4XCU23%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW4F27564yKJipBWZbwef%2FYWcPzUdLf%2Byuy5UjZz%2FcgAiEAvHXKhrWtNB1xmJo23rAVsQHm8bnCE42pA38gW4zI4XAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoa3dnFVuWkJrgC2CrcAze1Jo0nEsooAy4QFI86jtI53FPCd%2BwSrxM4ESwSeWgIJBjI01OUtYJvKRAP1f8T0DxDmVpGNNa4sXX3bMSFrSY%2FwC2DpAXQIJJw0RPl3VbWYqpEMimaWgbXLCZAyrsteBXPZU9Yb57rbFRp%2BL%2BPRpr9%2Fb%2BWxttK%2F00XH1WFkHhCYeY8NcD%2FBP8BSvZySUB%2ByHY5POEAbOjQ6P3uLC3A1ej1BZZnHpECKcICUWANwE1cAk24OgaoVN2gwd7qMn8%2FZ4ITK0ZpwyfzFFLC1pp7SBgH6aTDeC6yX5J%2BUzpRXoMHLIdHhAYP3ABK6V8W63DyBwzWdeLoaBKFgGA1zGPkwHSdBQdXXJSMWe%2F26kVOabPQbpMvJT7gFzWbMnFKMRNwlED4g7BAkedmjwtKPTtOaCVh5wVi3luJIlNVcJIEHp82tvNX7gzh7DqfvZzmUz1ObKa6j1JQKYAVNbDwBiLNMy%2BNKHGCscDljlqlV0bYqoAV9kERce0Xow0Sw3EyDeo41gSVwdt%2B4dX3%2Bg48uXUiTttC%2FZ5o8tTK1aGJgllyxI8huJQGAMCcACha6ym5wNMPoVEULY31HImQyiHWfnZJmlbpQC1TzTK9n2MpOjgmr7z3eYuDJs1F1QK6eJbAMN2tscEGOqUBYmdPFhCeVoNCYxZYUvB0vteOYdlpmNXkWkBB2Gmi0KZfbMwPVAZSCLn2YvuEHtzBsMaBD9YqmghtlgNMLNUgSKhriJ9qKonP3m5rbclKAlL0c%2BTFFbiUwb2CNLNQSXxT8zgM%2BvMrM6lyKwoXsL%2Bg87drT%2FiuZmxWRWD4VzCyeWgYrCrW0UtR8okiJiP2fFSXMLrcjJhF%2FSz2ZX3iWQd4MPNXRkqk&X-Amz-Signature=1eb95e552f7669251f449c22739ff6bd13f9250bd4ceb73bffd514cfeb2de76f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4XCU23%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW4F27564yKJipBWZbwef%2FYWcPzUdLf%2Byuy5UjZz%2FcgAiEAvHXKhrWtNB1xmJo23rAVsQHm8bnCE42pA38gW4zI4XAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoa3dnFVuWkJrgC2CrcAze1Jo0nEsooAy4QFI86jtI53FPCd%2BwSrxM4ESwSeWgIJBjI01OUtYJvKRAP1f8T0DxDmVpGNNa4sXX3bMSFrSY%2FwC2DpAXQIJJw0RPl3VbWYqpEMimaWgbXLCZAyrsteBXPZU9Yb57rbFRp%2BL%2BPRpr9%2Fb%2BWxttK%2F00XH1WFkHhCYeY8NcD%2FBP8BSvZySUB%2ByHY5POEAbOjQ6P3uLC3A1ej1BZZnHpECKcICUWANwE1cAk24OgaoVN2gwd7qMn8%2FZ4ITK0ZpwyfzFFLC1pp7SBgH6aTDeC6yX5J%2BUzpRXoMHLIdHhAYP3ABK6V8W63DyBwzWdeLoaBKFgGA1zGPkwHSdBQdXXJSMWe%2F26kVOabPQbpMvJT7gFzWbMnFKMRNwlED4g7BAkedmjwtKPTtOaCVh5wVi3luJIlNVcJIEHp82tvNX7gzh7DqfvZzmUz1ObKa6j1JQKYAVNbDwBiLNMy%2BNKHGCscDljlqlV0bYqoAV9kERce0Xow0Sw3EyDeo41gSVwdt%2B4dX3%2Bg48uXUiTttC%2FZ5o8tTK1aGJgllyxI8huJQGAMCcACha6ym5wNMPoVEULY31HImQyiHWfnZJmlbpQC1TzTK9n2MpOjgmr7z3eYuDJs1F1QK6eJbAMN2tscEGOqUBYmdPFhCeVoNCYxZYUvB0vteOYdlpmNXkWkBB2Gmi0KZfbMwPVAZSCLn2YvuEHtzBsMaBD9YqmghtlgNMLNUgSKhriJ9qKonP3m5rbclKAlL0c%2BTFFbiUwb2CNLNQSXxT8zgM%2BvMrM6lyKwoXsL%2Bg87drT%2FiuZmxWRWD4VzCyeWgYrCrW0UtR8okiJiP2fFSXMLrcjJhF%2FSz2ZX3iWQd4MPNXRkqk&X-Amz-Signature=df44b8e45a5f4e2053d877bab97447e012668974e7c134991442d952f87e4a03&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4XCU23%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW4F27564yKJipBWZbwef%2FYWcPzUdLf%2Byuy5UjZz%2FcgAiEAvHXKhrWtNB1xmJo23rAVsQHm8bnCE42pA38gW4zI4XAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoa3dnFVuWkJrgC2CrcAze1Jo0nEsooAy4QFI86jtI53FPCd%2BwSrxM4ESwSeWgIJBjI01OUtYJvKRAP1f8T0DxDmVpGNNa4sXX3bMSFrSY%2FwC2DpAXQIJJw0RPl3VbWYqpEMimaWgbXLCZAyrsteBXPZU9Yb57rbFRp%2BL%2BPRpr9%2Fb%2BWxttK%2F00XH1WFkHhCYeY8NcD%2FBP8BSvZySUB%2ByHY5POEAbOjQ6P3uLC3A1ej1BZZnHpECKcICUWANwE1cAk24OgaoVN2gwd7qMn8%2FZ4ITK0ZpwyfzFFLC1pp7SBgH6aTDeC6yX5J%2BUzpRXoMHLIdHhAYP3ABK6V8W63DyBwzWdeLoaBKFgGA1zGPkwHSdBQdXXJSMWe%2F26kVOabPQbpMvJT7gFzWbMnFKMRNwlED4g7BAkedmjwtKPTtOaCVh5wVi3luJIlNVcJIEHp82tvNX7gzh7DqfvZzmUz1ObKa6j1JQKYAVNbDwBiLNMy%2BNKHGCscDljlqlV0bYqoAV9kERce0Xow0Sw3EyDeo41gSVwdt%2B4dX3%2Bg48uXUiTttC%2FZ5o8tTK1aGJgllyxI8huJQGAMCcACha6ym5wNMPoVEULY31HImQyiHWfnZJmlbpQC1TzTK9n2MpOjgmr7z3eYuDJs1F1QK6eJbAMN2tscEGOqUBYmdPFhCeVoNCYxZYUvB0vteOYdlpmNXkWkBB2Gmi0KZfbMwPVAZSCLn2YvuEHtzBsMaBD9YqmghtlgNMLNUgSKhriJ9qKonP3m5rbclKAlL0c%2BTFFbiUwb2CNLNQSXxT8zgM%2BvMrM6lyKwoXsL%2Bg87drT%2FiuZmxWRWD4VzCyeWgYrCrW0UtR8okiJiP2fFSXMLrcjJhF%2FSz2ZX3iWQd4MPNXRkqk&X-Amz-Signature=02b7e2a24dafae9ced8a262775c327ce6a144653f483c1e68d74b6c6f4a088dd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4XCU23%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW4F27564yKJipBWZbwef%2FYWcPzUdLf%2Byuy5UjZz%2FcgAiEAvHXKhrWtNB1xmJo23rAVsQHm8bnCE42pA38gW4zI4XAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoa3dnFVuWkJrgC2CrcAze1Jo0nEsooAy4QFI86jtI53FPCd%2BwSrxM4ESwSeWgIJBjI01OUtYJvKRAP1f8T0DxDmVpGNNa4sXX3bMSFrSY%2FwC2DpAXQIJJw0RPl3VbWYqpEMimaWgbXLCZAyrsteBXPZU9Yb57rbFRp%2BL%2BPRpr9%2Fb%2BWxttK%2F00XH1WFkHhCYeY8NcD%2FBP8BSvZySUB%2ByHY5POEAbOjQ6P3uLC3A1ej1BZZnHpECKcICUWANwE1cAk24OgaoVN2gwd7qMn8%2FZ4ITK0ZpwyfzFFLC1pp7SBgH6aTDeC6yX5J%2BUzpRXoMHLIdHhAYP3ABK6V8W63DyBwzWdeLoaBKFgGA1zGPkwHSdBQdXXJSMWe%2F26kVOabPQbpMvJT7gFzWbMnFKMRNwlED4g7BAkedmjwtKPTtOaCVh5wVi3luJIlNVcJIEHp82tvNX7gzh7DqfvZzmUz1ObKa6j1JQKYAVNbDwBiLNMy%2BNKHGCscDljlqlV0bYqoAV9kERce0Xow0Sw3EyDeo41gSVwdt%2B4dX3%2Bg48uXUiTttC%2FZ5o8tTK1aGJgllyxI8huJQGAMCcACha6ym5wNMPoVEULY31HImQyiHWfnZJmlbpQC1TzTK9n2MpOjgmr7z3eYuDJs1F1QK6eJbAMN2tscEGOqUBYmdPFhCeVoNCYxZYUvB0vteOYdlpmNXkWkBB2Gmi0KZfbMwPVAZSCLn2YvuEHtzBsMaBD9YqmghtlgNMLNUgSKhriJ9qKonP3m5rbclKAlL0c%2BTFFbiUwb2CNLNQSXxT8zgM%2BvMrM6lyKwoXsL%2Bg87drT%2FiuZmxWRWD4VzCyeWgYrCrW0UtR8okiJiP2fFSXMLrcjJhF%2FSz2ZX3iWQd4MPNXRkqk&X-Amz-Signature=7133964eafd2d00885925e91558e4ce283e71120cf926095685c68d218b125d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
