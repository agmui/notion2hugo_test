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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5UA3YSE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0QKkDCk18kcQ4kAWOVgM0w3MtdpDLsU2kDhu4EkeSDgIhANzoUwNeEz1JNj0OTUFg2wkaz4n3S4Znq4kxjDhYugk4Kv8DCHUQABoMNjM3NDIzMTgzODA1Igy3seev50bpcCc6Cocq3APfVz4iZ8n5fPaSfuY4pzPRIDIxYFRDdjyYboQ8o%2FJGIcsc9gEkPmCAx6Y964088aKLcXn0yHM931CQ2PM0XLPYHVXCsu2%2FohQ53vngl3NsutHD4MLoEdQkMoqM2jsAUz%2B3ESlcVxlpG%2BuyWq%2F7A%2FsLQ4HK1Ed%2FlLXb2Ondm3BnAcPGjkoZL9KfJFU7pQojdqi0qJdbtPYul6d5diPe%2B9foQkynLgMuA38vjWekN1olBk2nChJLKBErQKgOAcEwEHeL4tU%2B8A%2FL%2FrAonCoi1Xq8xWgZDPRe599e4wtj1he%2FvTQve9M%2F5I8gNBQf3U6CnJgwREM0TQy9mHzFUtNXGLdWoX5KUtiVuypa0qz7ap%2FQ4hI%2BESHNWpXqWEWn%2BgvzxgH3e89syC3wXU0rK6d33WzEOPr4htKTGZTY78lZ6XdJurOwT3aukEwAAvCIj9O%2FFs51647irlT4jFKr1Qn4L3OySxLILRUdBKiZw%2FgMH%2FtwfDlYnaDKgRBxOnXh%2Bz0LRxMY0uTBgq2qo%2FrlZreTT7JW3MCw9%2BIkcKxSbWfk8KeEqByINHFB8dBLYq5UmQ1CpL4NoHCQwJawBGFt4RFdA05Kkc610z2sNd2mvm3fYEmUsx7V81kvcHIVmHhzeTC1psXCBjqkAW31WrGxEaO4LDbZw4Y5dwr%2BNej7XE9FO%2BFBycEYHB%2FTjcxDNsLGUNHfZrobbDkStwn0%2FCWDIzwXZVSZdqMh3%2BCguaeXB15gFphqVjTJyrqQDqQXZA0%2FZmKhaOeAIgxrqDlMdBWBoicIz5QiAD5FTQ9rArFrnpHGDJsUIJ2bflfdxOOoqHp5ut2lnOLV0xEGeeT%2F5UruLUAU3rZbxEVJHv3mJ8Kp&X-Amz-Signature=286d93accde226c0e20279856e691bc22d73ecac25022c56b9dba8e7002e09cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5UA3YSE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0QKkDCk18kcQ4kAWOVgM0w3MtdpDLsU2kDhu4EkeSDgIhANzoUwNeEz1JNj0OTUFg2wkaz4n3S4Znq4kxjDhYugk4Kv8DCHUQABoMNjM3NDIzMTgzODA1Igy3seev50bpcCc6Cocq3APfVz4iZ8n5fPaSfuY4pzPRIDIxYFRDdjyYboQ8o%2FJGIcsc9gEkPmCAx6Y964088aKLcXn0yHM931CQ2PM0XLPYHVXCsu2%2FohQ53vngl3NsutHD4MLoEdQkMoqM2jsAUz%2B3ESlcVxlpG%2BuyWq%2F7A%2FsLQ4HK1Ed%2FlLXb2Ondm3BnAcPGjkoZL9KfJFU7pQojdqi0qJdbtPYul6d5diPe%2B9foQkynLgMuA38vjWekN1olBk2nChJLKBErQKgOAcEwEHeL4tU%2B8A%2FL%2FrAonCoi1Xq8xWgZDPRe599e4wtj1he%2FvTQve9M%2F5I8gNBQf3U6CnJgwREM0TQy9mHzFUtNXGLdWoX5KUtiVuypa0qz7ap%2FQ4hI%2BESHNWpXqWEWn%2BgvzxgH3e89syC3wXU0rK6d33WzEOPr4htKTGZTY78lZ6XdJurOwT3aukEwAAvCIj9O%2FFs51647irlT4jFKr1Qn4L3OySxLILRUdBKiZw%2FgMH%2FtwfDlYnaDKgRBxOnXh%2Bz0LRxMY0uTBgq2qo%2FrlZreTT7JW3MCw9%2BIkcKxSbWfk8KeEqByINHFB8dBLYq5UmQ1CpL4NoHCQwJawBGFt4RFdA05Kkc610z2sNd2mvm3fYEmUsx7V81kvcHIVmHhzeTC1psXCBjqkAW31WrGxEaO4LDbZw4Y5dwr%2BNej7XE9FO%2BFBycEYHB%2FTjcxDNsLGUNHfZrobbDkStwn0%2FCWDIzwXZVSZdqMh3%2BCguaeXB15gFphqVjTJyrqQDqQXZA0%2FZmKhaOeAIgxrqDlMdBWBoicIz5QiAD5FTQ9rArFrnpHGDJsUIJ2bflfdxOOoqHp5ut2lnOLV0xEGeeT%2F5UruLUAU3rZbxEVJHv3mJ8Kp&X-Amz-Signature=ebbaa00dcee7e56f5b03c4dfd9124280ba1c8c2bb2c6bbcf824799ab5a73ce78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5UA3YSE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0QKkDCk18kcQ4kAWOVgM0w3MtdpDLsU2kDhu4EkeSDgIhANzoUwNeEz1JNj0OTUFg2wkaz4n3S4Znq4kxjDhYugk4Kv8DCHUQABoMNjM3NDIzMTgzODA1Igy3seev50bpcCc6Cocq3APfVz4iZ8n5fPaSfuY4pzPRIDIxYFRDdjyYboQ8o%2FJGIcsc9gEkPmCAx6Y964088aKLcXn0yHM931CQ2PM0XLPYHVXCsu2%2FohQ53vngl3NsutHD4MLoEdQkMoqM2jsAUz%2B3ESlcVxlpG%2BuyWq%2F7A%2FsLQ4HK1Ed%2FlLXb2Ondm3BnAcPGjkoZL9KfJFU7pQojdqi0qJdbtPYul6d5diPe%2B9foQkynLgMuA38vjWekN1olBk2nChJLKBErQKgOAcEwEHeL4tU%2B8A%2FL%2FrAonCoi1Xq8xWgZDPRe599e4wtj1he%2FvTQve9M%2F5I8gNBQf3U6CnJgwREM0TQy9mHzFUtNXGLdWoX5KUtiVuypa0qz7ap%2FQ4hI%2BESHNWpXqWEWn%2BgvzxgH3e89syC3wXU0rK6d33WzEOPr4htKTGZTY78lZ6XdJurOwT3aukEwAAvCIj9O%2FFs51647irlT4jFKr1Qn4L3OySxLILRUdBKiZw%2FgMH%2FtwfDlYnaDKgRBxOnXh%2Bz0LRxMY0uTBgq2qo%2FrlZreTT7JW3MCw9%2BIkcKxSbWfk8KeEqByINHFB8dBLYq5UmQ1CpL4NoHCQwJawBGFt4RFdA05Kkc610z2sNd2mvm3fYEmUsx7V81kvcHIVmHhzeTC1psXCBjqkAW31WrGxEaO4LDbZw4Y5dwr%2BNej7XE9FO%2BFBycEYHB%2FTjcxDNsLGUNHfZrobbDkStwn0%2FCWDIzwXZVSZdqMh3%2BCguaeXB15gFphqVjTJyrqQDqQXZA0%2FZmKhaOeAIgxrqDlMdBWBoicIz5QiAD5FTQ9rArFrnpHGDJsUIJ2bflfdxOOoqHp5ut2lnOLV0xEGeeT%2F5UruLUAU3rZbxEVJHv3mJ8Kp&X-Amz-Signature=5436da3916e5bf07f6c131df38e0e8f2bb100a8cd6b3e18afb1c6c44fc428a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5UA3YSE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0QKkDCk18kcQ4kAWOVgM0w3MtdpDLsU2kDhu4EkeSDgIhANzoUwNeEz1JNj0OTUFg2wkaz4n3S4Znq4kxjDhYugk4Kv8DCHUQABoMNjM3NDIzMTgzODA1Igy3seev50bpcCc6Cocq3APfVz4iZ8n5fPaSfuY4pzPRIDIxYFRDdjyYboQ8o%2FJGIcsc9gEkPmCAx6Y964088aKLcXn0yHM931CQ2PM0XLPYHVXCsu2%2FohQ53vngl3NsutHD4MLoEdQkMoqM2jsAUz%2B3ESlcVxlpG%2BuyWq%2F7A%2FsLQ4HK1Ed%2FlLXb2Ondm3BnAcPGjkoZL9KfJFU7pQojdqi0qJdbtPYul6d5diPe%2B9foQkynLgMuA38vjWekN1olBk2nChJLKBErQKgOAcEwEHeL4tU%2B8A%2FL%2FrAonCoi1Xq8xWgZDPRe599e4wtj1he%2FvTQve9M%2F5I8gNBQf3U6CnJgwREM0TQy9mHzFUtNXGLdWoX5KUtiVuypa0qz7ap%2FQ4hI%2BESHNWpXqWEWn%2BgvzxgH3e89syC3wXU0rK6d33WzEOPr4htKTGZTY78lZ6XdJurOwT3aukEwAAvCIj9O%2FFs51647irlT4jFKr1Qn4L3OySxLILRUdBKiZw%2FgMH%2FtwfDlYnaDKgRBxOnXh%2Bz0LRxMY0uTBgq2qo%2FrlZreTT7JW3MCw9%2BIkcKxSbWfk8KeEqByINHFB8dBLYq5UmQ1CpL4NoHCQwJawBGFt4RFdA05Kkc610z2sNd2mvm3fYEmUsx7V81kvcHIVmHhzeTC1psXCBjqkAW31WrGxEaO4LDbZw4Y5dwr%2BNej7XE9FO%2BFBycEYHB%2FTjcxDNsLGUNHfZrobbDkStwn0%2FCWDIzwXZVSZdqMh3%2BCguaeXB15gFphqVjTJyrqQDqQXZA0%2FZmKhaOeAIgxrqDlMdBWBoicIz5QiAD5FTQ9rArFrnpHGDJsUIJ2bflfdxOOoqHp5ut2lnOLV0xEGeeT%2F5UruLUAU3rZbxEVJHv3mJ8Kp&X-Amz-Signature=5dd8681546ecd552f009135e000c958da8bf8e04c291cf161ac83996f691a720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5UA3YSE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0QKkDCk18kcQ4kAWOVgM0w3MtdpDLsU2kDhu4EkeSDgIhANzoUwNeEz1JNj0OTUFg2wkaz4n3S4Znq4kxjDhYugk4Kv8DCHUQABoMNjM3NDIzMTgzODA1Igy3seev50bpcCc6Cocq3APfVz4iZ8n5fPaSfuY4pzPRIDIxYFRDdjyYboQ8o%2FJGIcsc9gEkPmCAx6Y964088aKLcXn0yHM931CQ2PM0XLPYHVXCsu2%2FohQ53vngl3NsutHD4MLoEdQkMoqM2jsAUz%2B3ESlcVxlpG%2BuyWq%2F7A%2FsLQ4HK1Ed%2FlLXb2Ondm3BnAcPGjkoZL9KfJFU7pQojdqi0qJdbtPYul6d5diPe%2B9foQkynLgMuA38vjWekN1olBk2nChJLKBErQKgOAcEwEHeL4tU%2B8A%2FL%2FrAonCoi1Xq8xWgZDPRe599e4wtj1he%2FvTQve9M%2F5I8gNBQf3U6CnJgwREM0TQy9mHzFUtNXGLdWoX5KUtiVuypa0qz7ap%2FQ4hI%2BESHNWpXqWEWn%2BgvzxgH3e89syC3wXU0rK6d33WzEOPr4htKTGZTY78lZ6XdJurOwT3aukEwAAvCIj9O%2FFs51647irlT4jFKr1Qn4L3OySxLILRUdBKiZw%2FgMH%2FtwfDlYnaDKgRBxOnXh%2Bz0LRxMY0uTBgq2qo%2FrlZreTT7JW3MCw9%2BIkcKxSbWfk8KeEqByINHFB8dBLYq5UmQ1CpL4NoHCQwJawBGFt4RFdA05Kkc610z2sNd2mvm3fYEmUsx7V81kvcHIVmHhzeTC1psXCBjqkAW31WrGxEaO4LDbZw4Y5dwr%2BNej7XE9FO%2BFBycEYHB%2FTjcxDNsLGUNHfZrobbDkStwn0%2FCWDIzwXZVSZdqMh3%2BCguaeXB15gFphqVjTJyrqQDqQXZA0%2FZmKhaOeAIgxrqDlMdBWBoicIz5QiAD5FTQ9rArFrnpHGDJsUIJ2bflfdxOOoqHp5ut2lnOLV0xEGeeT%2F5UruLUAU3rZbxEVJHv3mJ8Kp&X-Amz-Signature=6be3cfc21d320a69776391ff90ab2cc5bf6242189a6e897dcbd777de7dda5734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5UA3YSE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0QKkDCk18kcQ4kAWOVgM0w3MtdpDLsU2kDhu4EkeSDgIhANzoUwNeEz1JNj0OTUFg2wkaz4n3S4Znq4kxjDhYugk4Kv8DCHUQABoMNjM3NDIzMTgzODA1Igy3seev50bpcCc6Cocq3APfVz4iZ8n5fPaSfuY4pzPRIDIxYFRDdjyYboQ8o%2FJGIcsc9gEkPmCAx6Y964088aKLcXn0yHM931CQ2PM0XLPYHVXCsu2%2FohQ53vngl3NsutHD4MLoEdQkMoqM2jsAUz%2B3ESlcVxlpG%2BuyWq%2F7A%2FsLQ4HK1Ed%2FlLXb2Ondm3BnAcPGjkoZL9KfJFU7pQojdqi0qJdbtPYul6d5diPe%2B9foQkynLgMuA38vjWekN1olBk2nChJLKBErQKgOAcEwEHeL4tU%2B8A%2FL%2FrAonCoi1Xq8xWgZDPRe599e4wtj1he%2FvTQve9M%2F5I8gNBQf3U6CnJgwREM0TQy9mHzFUtNXGLdWoX5KUtiVuypa0qz7ap%2FQ4hI%2BESHNWpXqWEWn%2BgvzxgH3e89syC3wXU0rK6d33WzEOPr4htKTGZTY78lZ6XdJurOwT3aukEwAAvCIj9O%2FFs51647irlT4jFKr1Qn4L3OySxLILRUdBKiZw%2FgMH%2FtwfDlYnaDKgRBxOnXh%2Bz0LRxMY0uTBgq2qo%2FrlZreTT7JW3MCw9%2BIkcKxSbWfk8KeEqByINHFB8dBLYq5UmQ1CpL4NoHCQwJawBGFt4RFdA05Kkc610z2sNd2mvm3fYEmUsx7V81kvcHIVmHhzeTC1psXCBjqkAW31WrGxEaO4LDbZw4Y5dwr%2BNej7XE9FO%2BFBycEYHB%2FTjcxDNsLGUNHfZrobbDkStwn0%2FCWDIzwXZVSZdqMh3%2BCguaeXB15gFphqVjTJyrqQDqQXZA0%2FZmKhaOeAIgxrqDlMdBWBoicIz5QiAD5FTQ9rArFrnpHGDJsUIJ2bflfdxOOoqHp5ut2lnOLV0xEGeeT%2F5UruLUAU3rZbxEVJHv3mJ8Kp&X-Amz-Signature=17174b73f18d767822daa8033004bb62ef78953529ae928115889fefa2e98aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5UA3YSE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0QKkDCk18kcQ4kAWOVgM0w3MtdpDLsU2kDhu4EkeSDgIhANzoUwNeEz1JNj0OTUFg2wkaz4n3S4Znq4kxjDhYugk4Kv8DCHUQABoMNjM3NDIzMTgzODA1Igy3seev50bpcCc6Cocq3APfVz4iZ8n5fPaSfuY4pzPRIDIxYFRDdjyYboQ8o%2FJGIcsc9gEkPmCAx6Y964088aKLcXn0yHM931CQ2PM0XLPYHVXCsu2%2FohQ53vngl3NsutHD4MLoEdQkMoqM2jsAUz%2B3ESlcVxlpG%2BuyWq%2F7A%2FsLQ4HK1Ed%2FlLXb2Ondm3BnAcPGjkoZL9KfJFU7pQojdqi0qJdbtPYul6d5diPe%2B9foQkynLgMuA38vjWekN1olBk2nChJLKBErQKgOAcEwEHeL4tU%2B8A%2FL%2FrAonCoi1Xq8xWgZDPRe599e4wtj1he%2FvTQve9M%2F5I8gNBQf3U6CnJgwREM0TQy9mHzFUtNXGLdWoX5KUtiVuypa0qz7ap%2FQ4hI%2BESHNWpXqWEWn%2BgvzxgH3e89syC3wXU0rK6d33WzEOPr4htKTGZTY78lZ6XdJurOwT3aukEwAAvCIj9O%2FFs51647irlT4jFKr1Qn4L3OySxLILRUdBKiZw%2FgMH%2FtwfDlYnaDKgRBxOnXh%2Bz0LRxMY0uTBgq2qo%2FrlZreTT7JW3MCw9%2BIkcKxSbWfk8KeEqByINHFB8dBLYq5UmQ1CpL4NoHCQwJawBGFt4RFdA05Kkc610z2sNd2mvm3fYEmUsx7V81kvcHIVmHhzeTC1psXCBjqkAW31WrGxEaO4LDbZw4Y5dwr%2BNej7XE9FO%2BFBycEYHB%2FTjcxDNsLGUNHfZrobbDkStwn0%2FCWDIzwXZVSZdqMh3%2BCguaeXB15gFphqVjTJyrqQDqQXZA0%2FZmKhaOeAIgxrqDlMdBWBoicIz5QiAD5FTQ9rArFrnpHGDJsUIJ2bflfdxOOoqHp5ut2lnOLV0xEGeeT%2F5UruLUAU3rZbxEVJHv3mJ8Kp&X-Amz-Signature=f5c4fdbbe8ab9d25a4ce18675c24d812c1caf70aa7592dc89ccd57589b9f4d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
