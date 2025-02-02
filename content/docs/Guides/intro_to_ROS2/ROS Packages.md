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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3Z4ERB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzcYON7rH9qb1T7ieyGmZqHQy4tyev51XA9uMM2HAIDAiBTDQX90mHMj%2B1A1ueObQ342NfbI2%2FuJIXvSwEOppQr7SqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLXPrUt72R7XtO%2FZiKtwDYCPeVnEkbr8YHt3RjLoNpftvcMD4emCfu%2B39D3pvej5qMfBNnqKJaz%2FticaOd4miVZbEZ18mPBhhUuyatijwxgMKRZ4X1k%2BmBnJ9LV4btlaErkEfP%2FxqK3aUJfKgT0v9WyDXbvEh8OJJ1pmqBfGEsGBwqWCkWydZGqzUlvmvhl4frUYA%2F211C%2FUgA6AmwITxI98yM7MAHpuDLwyHmY%2BSCgAkVxuDUKzS1o71gN79wR%2FsaQxbt7rmfIjBlQ8SMaGJCZpyZOU6mthqRMRc4Zfk53PfGS8iiA%2BEJnuiwQZN1O9Xl3vDc7SEXh0tsg%2BPRcBm1gh9IxnD3fM05pOULgCL1XTNkxu9wz4TD3AQt%2BJZts56i5hn%2F0%2B1FWNgG3659S7p%2BWBQng6X6iYzzRx7%2BcSpzfTLEHKw7cy%2BX5LDAnnsEIv7kaaR%2Bt44gBKxi13rQCtzXmdYloraS7lHuVP0ZxQInyioFw9qQ2eUcx3ZtUKEFz9FFOiBSlhnBEdWhQHuH4fEcTiWXynAdDvxhDQvkC1mt%2F8QeKlOGkXat0Pf%2Bbg5gy9gWTKeExxVa1jxrapD3SPrJ2Ljxymk%2Belzr8p3Xf9ThYQ0UrhAy%2Fplo5%2FyKKleadQKVkvBM3Pn%2BZ%2FznNkwzrz7vAY6pgHzH5oj8Y8WuEpyRjRW0nsjYsr39s%2F8AfT10bzPMkZ7avQw1JxdZBlBe7uXQ0gDCbuNCkf9C5tKsgywW%2FQhVQLWiY0jjgWrMKrVYGy9fnShH4YF0idaMXboC6g4SFQuCim6Sdipqx%2FSibkY%2B2yIzEyYQPcv4gXxlCq04D4vJSi4Byn%2BdCOKi5lH6YaMadRsNqJ8ZZYz2L2en2v7Za%2FAtZ1CiAg10%2BRo&X-Amz-Signature=eaa2497cf52f47f8ded79b0204b8867476e5a68506ffa800ce790ea1ea560591&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3Z4ERB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzcYON7rH9qb1T7ieyGmZqHQy4tyev51XA9uMM2HAIDAiBTDQX90mHMj%2B1A1ueObQ342NfbI2%2FuJIXvSwEOppQr7SqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLXPrUt72R7XtO%2FZiKtwDYCPeVnEkbr8YHt3RjLoNpftvcMD4emCfu%2B39D3pvej5qMfBNnqKJaz%2FticaOd4miVZbEZ18mPBhhUuyatijwxgMKRZ4X1k%2BmBnJ9LV4btlaErkEfP%2FxqK3aUJfKgT0v9WyDXbvEh8OJJ1pmqBfGEsGBwqWCkWydZGqzUlvmvhl4frUYA%2F211C%2FUgA6AmwITxI98yM7MAHpuDLwyHmY%2BSCgAkVxuDUKzS1o71gN79wR%2FsaQxbt7rmfIjBlQ8SMaGJCZpyZOU6mthqRMRc4Zfk53PfGS8iiA%2BEJnuiwQZN1O9Xl3vDc7SEXh0tsg%2BPRcBm1gh9IxnD3fM05pOULgCL1XTNkxu9wz4TD3AQt%2BJZts56i5hn%2F0%2B1FWNgG3659S7p%2BWBQng6X6iYzzRx7%2BcSpzfTLEHKw7cy%2BX5LDAnnsEIv7kaaR%2Bt44gBKxi13rQCtzXmdYloraS7lHuVP0ZxQInyioFw9qQ2eUcx3ZtUKEFz9FFOiBSlhnBEdWhQHuH4fEcTiWXynAdDvxhDQvkC1mt%2F8QeKlOGkXat0Pf%2Bbg5gy9gWTKeExxVa1jxrapD3SPrJ2Ljxymk%2Belzr8p3Xf9ThYQ0UrhAy%2Fplo5%2FyKKleadQKVkvBM3Pn%2BZ%2FznNkwzrz7vAY6pgHzH5oj8Y8WuEpyRjRW0nsjYsr39s%2F8AfT10bzPMkZ7avQw1JxdZBlBe7uXQ0gDCbuNCkf9C5tKsgywW%2FQhVQLWiY0jjgWrMKrVYGy9fnShH4YF0idaMXboC6g4SFQuCim6Sdipqx%2FSibkY%2B2yIzEyYQPcv4gXxlCq04D4vJSi4Byn%2BdCOKi5lH6YaMadRsNqJ8ZZYz2L2en2v7Za%2FAtZ1CiAg10%2BRo&X-Amz-Signature=80f445f2ae4744ca76a9a07b9f2de39cdaa66deeaf6d41c27e3f1608f595aeae&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3Z4ERB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzcYON7rH9qb1T7ieyGmZqHQy4tyev51XA9uMM2HAIDAiBTDQX90mHMj%2B1A1ueObQ342NfbI2%2FuJIXvSwEOppQr7SqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLXPrUt72R7XtO%2FZiKtwDYCPeVnEkbr8YHt3RjLoNpftvcMD4emCfu%2B39D3pvej5qMfBNnqKJaz%2FticaOd4miVZbEZ18mPBhhUuyatijwxgMKRZ4X1k%2BmBnJ9LV4btlaErkEfP%2FxqK3aUJfKgT0v9WyDXbvEh8OJJ1pmqBfGEsGBwqWCkWydZGqzUlvmvhl4frUYA%2F211C%2FUgA6AmwITxI98yM7MAHpuDLwyHmY%2BSCgAkVxuDUKzS1o71gN79wR%2FsaQxbt7rmfIjBlQ8SMaGJCZpyZOU6mthqRMRc4Zfk53PfGS8iiA%2BEJnuiwQZN1O9Xl3vDc7SEXh0tsg%2BPRcBm1gh9IxnD3fM05pOULgCL1XTNkxu9wz4TD3AQt%2BJZts56i5hn%2F0%2B1FWNgG3659S7p%2BWBQng6X6iYzzRx7%2BcSpzfTLEHKw7cy%2BX5LDAnnsEIv7kaaR%2Bt44gBKxi13rQCtzXmdYloraS7lHuVP0ZxQInyioFw9qQ2eUcx3ZtUKEFz9FFOiBSlhnBEdWhQHuH4fEcTiWXynAdDvxhDQvkC1mt%2F8QeKlOGkXat0Pf%2Bbg5gy9gWTKeExxVa1jxrapD3SPrJ2Ljxymk%2Belzr8p3Xf9ThYQ0UrhAy%2Fplo5%2FyKKleadQKVkvBM3Pn%2BZ%2FznNkwzrz7vAY6pgHzH5oj8Y8WuEpyRjRW0nsjYsr39s%2F8AfT10bzPMkZ7avQw1JxdZBlBe7uXQ0gDCbuNCkf9C5tKsgywW%2FQhVQLWiY0jjgWrMKrVYGy9fnShH4YF0idaMXboC6g4SFQuCim6Sdipqx%2FSibkY%2B2yIzEyYQPcv4gXxlCq04D4vJSi4Byn%2BdCOKi5lH6YaMadRsNqJ8ZZYz2L2en2v7Za%2FAtZ1CiAg10%2BRo&X-Amz-Signature=0b3460527b994d3a60805439c1af6651dfb161eaebf50ee340d09d5d364cece2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3Z4ERB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzcYON7rH9qb1T7ieyGmZqHQy4tyev51XA9uMM2HAIDAiBTDQX90mHMj%2B1A1ueObQ342NfbI2%2FuJIXvSwEOppQr7SqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLXPrUt72R7XtO%2FZiKtwDYCPeVnEkbr8YHt3RjLoNpftvcMD4emCfu%2B39D3pvej5qMfBNnqKJaz%2FticaOd4miVZbEZ18mPBhhUuyatijwxgMKRZ4X1k%2BmBnJ9LV4btlaErkEfP%2FxqK3aUJfKgT0v9WyDXbvEh8OJJ1pmqBfGEsGBwqWCkWydZGqzUlvmvhl4frUYA%2F211C%2FUgA6AmwITxI98yM7MAHpuDLwyHmY%2BSCgAkVxuDUKzS1o71gN79wR%2FsaQxbt7rmfIjBlQ8SMaGJCZpyZOU6mthqRMRc4Zfk53PfGS8iiA%2BEJnuiwQZN1O9Xl3vDc7SEXh0tsg%2BPRcBm1gh9IxnD3fM05pOULgCL1XTNkxu9wz4TD3AQt%2BJZts56i5hn%2F0%2B1FWNgG3659S7p%2BWBQng6X6iYzzRx7%2BcSpzfTLEHKw7cy%2BX5LDAnnsEIv7kaaR%2Bt44gBKxi13rQCtzXmdYloraS7lHuVP0ZxQInyioFw9qQ2eUcx3ZtUKEFz9FFOiBSlhnBEdWhQHuH4fEcTiWXynAdDvxhDQvkC1mt%2F8QeKlOGkXat0Pf%2Bbg5gy9gWTKeExxVa1jxrapD3SPrJ2Ljxymk%2Belzr8p3Xf9ThYQ0UrhAy%2Fplo5%2FyKKleadQKVkvBM3Pn%2BZ%2FznNkwzrz7vAY6pgHzH5oj8Y8WuEpyRjRW0nsjYsr39s%2F8AfT10bzPMkZ7avQw1JxdZBlBe7uXQ0gDCbuNCkf9C5tKsgywW%2FQhVQLWiY0jjgWrMKrVYGy9fnShH4YF0idaMXboC6g4SFQuCim6Sdipqx%2FSibkY%2B2yIzEyYQPcv4gXxlCq04D4vJSi4Byn%2BdCOKi5lH6YaMadRsNqJ8ZZYz2L2en2v7Za%2FAtZ1CiAg10%2BRo&X-Amz-Signature=514839e7284f8651c875fb824fa235ff70a780491cd2fbde82456a83b9b3bd30&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3Z4ERB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzcYON7rH9qb1T7ieyGmZqHQy4tyev51XA9uMM2HAIDAiBTDQX90mHMj%2B1A1ueObQ342NfbI2%2FuJIXvSwEOppQr7SqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLXPrUt72R7XtO%2FZiKtwDYCPeVnEkbr8YHt3RjLoNpftvcMD4emCfu%2B39D3pvej5qMfBNnqKJaz%2FticaOd4miVZbEZ18mPBhhUuyatijwxgMKRZ4X1k%2BmBnJ9LV4btlaErkEfP%2FxqK3aUJfKgT0v9WyDXbvEh8OJJ1pmqBfGEsGBwqWCkWydZGqzUlvmvhl4frUYA%2F211C%2FUgA6AmwITxI98yM7MAHpuDLwyHmY%2BSCgAkVxuDUKzS1o71gN79wR%2FsaQxbt7rmfIjBlQ8SMaGJCZpyZOU6mthqRMRc4Zfk53PfGS8iiA%2BEJnuiwQZN1O9Xl3vDc7SEXh0tsg%2BPRcBm1gh9IxnD3fM05pOULgCL1XTNkxu9wz4TD3AQt%2BJZts56i5hn%2F0%2B1FWNgG3659S7p%2BWBQng6X6iYzzRx7%2BcSpzfTLEHKw7cy%2BX5LDAnnsEIv7kaaR%2Bt44gBKxi13rQCtzXmdYloraS7lHuVP0ZxQInyioFw9qQ2eUcx3ZtUKEFz9FFOiBSlhnBEdWhQHuH4fEcTiWXynAdDvxhDQvkC1mt%2F8QeKlOGkXat0Pf%2Bbg5gy9gWTKeExxVa1jxrapD3SPrJ2Ljxymk%2Belzr8p3Xf9ThYQ0UrhAy%2Fplo5%2FyKKleadQKVkvBM3Pn%2BZ%2FznNkwzrz7vAY6pgHzH5oj8Y8WuEpyRjRW0nsjYsr39s%2F8AfT10bzPMkZ7avQw1JxdZBlBe7uXQ0gDCbuNCkf9C5tKsgywW%2FQhVQLWiY0jjgWrMKrVYGy9fnShH4YF0idaMXboC6g4SFQuCim6Sdipqx%2FSibkY%2B2yIzEyYQPcv4gXxlCq04D4vJSi4Byn%2BdCOKi5lH6YaMadRsNqJ8ZZYz2L2en2v7Za%2FAtZ1CiAg10%2BRo&X-Amz-Signature=b55e786b169bfcb4835434f995ad880049dc78472193688c7fdaa0107fdb7595&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3Z4ERB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzcYON7rH9qb1T7ieyGmZqHQy4tyev51XA9uMM2HAIDAiBTDQX90mHMj%2B1A1ueObQ342NfbI2%2FuJIXvSwEOppQr7SqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLXPrUt72R7XtO%2FZiKtwDYCPeVnEkbr8YHt3RjLoNpftvcMD4emCfu%2B39D3pvej5qMfBNnqKJaz%2FticaOd4miVZbEZ18mPBhhUuyatijwxgMKRZ4X1k%2BmBnJ9LV4btlaErkEfP%2FxqK3aUJfKgT0v9WyDXbvEh8OJJ1pmqBfGEsGBwqWCkWydZGqzUlvmvhl4frUYA%2F211C%2FUgA6AmwITxI98yM7MAHpuDLwyHmY%2BSCgAkVxuDUKzS1o71gN79wR%2FsaQxbt7rmfIjBlQ8SMaGJCZpyZOU6mthqRMRc4Zfk53PfGS8iiA%2BEJnuiwQZN1O9Xl3vDc7SEXh0tsg%2BPRcBm1gh9IxnD3fM05pOULgCL1XTNkxu9wz4TD3AQt%2BJZts56i5hn%2F0%2B1FWNgG3659S7p%2BWBQng6X6iYzzRx7%2BcSpzfTLEHKw7cy%2BX5LDAnnsEIv7kaaR%2Bt44gBKxi13rQCtzXmdYloraS7lHuVP0ZxQInyioFw9qQ2eUcx3ZtUKEFz9FFOiBSlhnBEdWhQHuH4fEcTiWXynAdDvxhDQvkC1mt%2F8QeKlOGkXat0Pf%2Bbg5gy9gWTKeExxVa1jxrapD3SPrJ2Ljxymk%2Belzr8p3Xf9ThYQ0UrhAy%2Fplo5%2FyKKleadQKVkvBM3Pn%2BZ%2FznNkwzrz7vAY6pgHzH5oj8Y8WuEpyRjRW0nsjYsr39s%2F8AfT10bzPMkZ7avQw1JxdZBlBe7uXQ0gDCbuNCkf9C5tKsgywW%2FQhVQLWiY0jjgWrMKrVYGy9fnShH4YF0idaMXboC6g4SFQuCim6Sdipqx%2FSibkY%2B2yIzEyYQPcv4gXxlCq04D4vJSi4Byn%2BdCOKi5lH6YaMadRsNqJ8ZZYz2L2en2v7Za%2FAtZ1CiAg10%2BRo&X-Amz-Signature=a6e54a5ef669835675d97891d61faa1d796e26a17e6b4824f67e94bd51af2c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3Z4ERB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzcYON7rH9qb1T7ieyGmZqHQy4tyev51XA9uMM2HAIDAiBTDQX90mHMj%2B1A1ueObQ342NfbI2%2FuJIXvSwEOppQr7SqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLXPrUt72R7XtO%2FZiKtwDYCPeVnEkbr8YHt3RjLoNpftvcMD4emCfu%2B39D3pvej5qMfBNnqKJaz%2FticaOd4miVZbEZ18mPBhhUuyatijwxgMKRZ4X1k%2BmBnJ9LV4btlaErkEfP%2FxqK3aUJfKgT0v9WyDXbvEh8OJJ1pmqBfGEsGBwqWCkWydZGqzUlvmvhl4frUYA%2F211C%2FUgA6AmwITxI98yM7MAHpuDLwyHmY%2BSCgAkVxuDUKzS1o71gN79wR%2FsaQxbt7rmfIjBlQ8SMaGJCZpyZOU6mthqRMRc4Zfk53PfGS8iiA%2BEJnuiwQZN1O9Xl3vDc7SEXh0tsg%2BPRcBm1gh9IxnD3fM05pOULgCL1XTNkxu9wz4TD3AQt%2BJZts56i5hn%2F0%2B1FWNgG3659S7p%2BWBQng6X6iYzzRx7%2BcSpzfTLEHKw7cy%2BX5LDAnnsEIv7kaaR%2Bt44gBKxi13rQCtzXmdYloraS7lHuVP0ZxQInyioFw9qQ2eUcx3ZtUKEFz9FFOiBSlhnBEdWhQHuH4fEcTiWXynAdDvxhDQvkC1mt%2F8QeKlOGkXat0Pf%2Bbg5gy9gWTKeExxVa1jxrapD3SPrJ2Ljxymk%2Belzr8p3Xf9ThYQ0UrhAy%2Fplo5%2FyKKleadQKVkvBM3Pn%2BZ%2FznNkwzrz7vAY6pgHzH5oj8Y8WuEpyRjRW0nsjYsr39s%2F8AfT10bzPMkZ7avQw1JxdZBlBe7uXQ0gDCbuNCkf9C5tKsgywW%2FQhVQLWiY0jjgWrMKrVYGy9fnShH4YF0idaMXboC6g4SFQuCim6Sdipqx%2FSibkY%2B2yIzEyYQPcv4gXxlCq04D4vJSi4Byn%2BdCOKi5lH6YaMadRsNqJ8ZZYz2L2en2v7Za%2FAtZ1CiAg10%2BRo&X-Amz-Signature=5c0ea4ee8d45eea50fa4e7f25b9d62dcffbde8b9a9bdf478a44e597a100774b0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
