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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMNL3G2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsNGNFcKgcCeOkAdrZlliJ8MvlG%2Bsc6gMDyH3ke%2BBWhAiAmrIxZydNIlXINJoYSsS7V6RmoiiDCp8GQz21mR9WBHCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwKUoXXdWfWeVo7XpKtwDgObJBjL6tRw5MiiPG%2FKhWlCjcmpkb%2Fpyiyx9X6e%2Fb41mIkZd%2BczzylDZY%2B7kOyAZd8kVfZRYiLw5HjXpBd87FLmHzqwUwYXWbs2HMJ%2FMONdoStAw9mm1UiajxJQzxg3Suekgkm5%2BJ%2F5jd0NgvsEYgiM3HItJdAix5lZxhHpeFN1ijlHj32H8JYtMjvOR2A%2BXxcPeMl%2BeExs2TB7%2FXXx6tM%2BwJYySi0SjsSqZwnVfujs%2BgKGK9MSJz86bhCA1YVAByz93N9ncw4FfPhRJy8mGvXj1pk6ydNNZX7R%2FGy7Px8qOpGO%2BO8ZwRCch8gh7Qcni4ZU7icP%2FUm0GCIBahJ6grS4qBQ7KvzVYE5z6biPdb16q82PEq7Hfhh%2BwvpO5kQFs8esw3ypW4qOn62KBTDPP0e0t6slZyhrjPZrcMAe1Uma0yJPsilqr6YbvxKLZvGZT7rD2J8mULkhHrBIigohD4xUkygS0TL6FJQ8%2FlPiNAlYCOKYKuCVKFqJZvcQYKSAGCbdxzPDMYLhN0MsCInch0lWi4qFKLiNgzju2oBj3MQWlxz6N9vgoZ3YmXWEef9Dkw%2FN2hL3z%2BUXBRbyn24JtHmlbjeDecb%2FFTWfREQubaZD8p8mnwjWn0OFIVH8w1aG0xAY6pgFOZ4tR6MmXnef90bcCxegwA8V%2BdlYN74y7JjVpRwRSxhwhxgnzoh9qALBRSgSnGsYKQKCWc78I6FxqBz%2BtL8wS%2FPXQfCvG1n8yHmNfWuwyK0s%2BTgnLgQyadYQEkeUj2xIEtFECkk1sjdeIZZf01tQpOtynyRWDAT0IJc%2F75R%2BasJIa%2BzjHKhZtcxgqRh2O3jZBaoZezI3nOsLnP%2BXzgUBLOPxqMDS9&X-Amz-Signature=b8118f787dc375717dd5c60ef287a2dc4fda5e1567f07e11b21c49cfb9190a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMNL3G2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsNGNFcKgcCeOkAdrZlliJ8MvlG%2Bsc6gMDyH3ke%2BBWhAiAmrIxZydNIlXINJoYSsS7V6RmoiiDCp8GQz21mR9WBHCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwKUoXXdWfWeVo7XpKtwDgObJBjL6tRw5MiiPG%2FKhWlCjcmpkb%2Fpyiyx9X6e%2Fb41mIkZd%2BczzylDZY%2B7kOyAZd8kVfZRYiLw5HjXpBd87FLmHzqwUwYXWbs2HMJ%2FMONdoStAw9mm1UiajxJQzxg3Suekgkm5%2BJ%2F5jd0NgvsEYgiM3HItJdAix5lZxhHpeFN1ijlHj32H8JYtMjvOR2A%2BXxcPeMl%2BeExs2TB7%2FXXx6tM%2BwJYySi0SjsSqZwnVfujs%2BgKGK9MSJz86bhCA1YVAByz93N9ncw4FfPhRJy8mGvXj1pk6ydNNZX7R%2FGy7Px8qOpGO%2BO8ZwRCch8gh7Qcni4ZU7icP%2FUm0GCIBahJ6grS4qBQ7KvzVYE5z6biPdb16q82PEq7Hfhh%2BwvpO5kQFs8esw3ypW4qOn62KBTDPP0e0t6slZyhrjPZrcMAe1Uma0yJPsilqr6YbvxKLZvGZT7rD2J8mULkhHrBIigohD4xUkygS0TL6FJQ8%2FlPiNAlYCOKYKuCVKFqJZvcQYKSAGCbdxzPDMYLhN0MsCInch0lWi4qFKLiNgzju2oBj3MQWlxz6N9vgoZ3YmXWEef9Dkw%2FN2hL3z%2BUXBRbyn24JtHmlbjeDecb%2FFTWfREQubaZD8p8mnwjWn0OFIVH8w1aG0xAY6pgFOZ4tR6MmXnef90bcCxegwA8V%2BdlYN74y7JjVpRwRSxhwhxgnzoh9qALBRSgSnGsYKQKCWc78I6FxqBz%2BtL8wS%2FPXQfCvG1n8yHmNfWuwyK0s%2BTgnLgQyadYQEkeUj2xIEtFECkk1sjdeIZZf01tQpOtynyRWDAT0IJc%2F75R%2BasJIa%2BzjHKhZtcxgqRh2O3jZBaoZezI3nOsLnP%2BXzgUBLOPxqMDS9&X-Amz-Signature=2f8af1664e512c4c1fe9f212bca292fb538659cf6d1eff909f0caf88b3467ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMNL3G2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsNGNFcKgcCeOkAdrZlliJ8MvlG%2Bsc6gMDyH3ke%2BBWhAiAmrIxZydNIlXINJoYSsS7V6RmoiiDCp8GQz21mR9WBHCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwKUoXXdWfWeVo7XpKtwDgObJBjL6tRw5MiiPG%2FKhWlCjcmpkb%2Fpyiyx9X6e%2Fb41mIkZd%2BczzylDZY%2B7kOyAZd8kVfZRYiLw5HjXpBd87FLmHzqwUwYXWbs2HMJ%2FMONdoStAw9mm1UiajxJQzxg3Suekgkm5%2BJ%2F5jd0NgvsEYgiM3HItJdAix5lZxhHpeFN1ijlHj32H8JYtMjvOR2A%2BXxcPeMl%2BeExs2TB7%2FXXx6tM%2BwJYySi0SjsSqZwnVfujs%2BgKGK9MSJz86bhCA1YVAByz93N9ncw4FfPhRJy8mGvXj1pk6ydNNZX7R%2FGy7Px8qOpGO%2BO8ZwRCch8gh7Qcni4ZU7icP%2FUm0GCIBahJ6grS4qBQ7KvzVYE5z6biPdb16q82PEq7Hfhh%2BwvpO5kQFs8esw3ypW4qOn62KBTDPP0e0t6slZyhrjPZrcMAe1Uma0yJPsilqr6YbvxKLZvGZT7rD2J8mULkhHrBIigohD4xUkygS0TL6FJQ8%2FlPiNAlYCOKYKuCVKFqJZvcQYKSAGCbdxzPDMYLhN0MsCInch0lWi4qFKLiNgzju2oBj3MQWlxz6N9vgoZ3YmXWEef9Dkw%2FN2hL3z%2BUXBRbyn24JtHmlbjeDecb%2FFTWfREQubaZD8p8mnwjWn0OFIVH8w1aG0xAY6pgFOZ4tR6MmXnef90bcCxegwA8V%2BdlYN74y7JjVpRwRSxhwhxgnzoh9qALBRSgSnGsYKQKCWc78I6FxqBz%2BtL8wS%2FPXQfCvG1n8yHmNfWuwyK0s%2BTgnLgQyadYQEkeUj2xIEtFECkk1sjdeIZZf01tQpOtynyRWDAT0IJc%2F75R%2BasJIa%2BzjHKhZtcxgqRh2O3jZBaoZezI3nOsLnP%2BXzgUBLOPxqMDS9&X-Amz-Signature=d85a0e67a881c0b557bae41919a81365af870c402aa33f2948dcc039fed5d430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMNL3G2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsNGNFcKgcCeOkAdrZlliJ8MvlG%2Bsc6gMDyH3ke%2BBWhAiAmrIxZydNIlXINJoYSsS7V6RmoiiDCp8GQz21mR9WBHCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwKUoXXdWfWeVo7XpKtwDgObJBjL6tRw5MiiPG%2FKhWlCjcmpkb%2Fpyiyx9X6e%2Fb41mIkZd%2BczzylDZY%2B7kOyAZd8kVfZRYiLw5HjXpBd87FLmHzqwUwYXWbs2HMJ%2FMONdoStAw9mm1UiajxJQzxg3Suekgkm5%2BJ%2F5jd0NgvsEYgiM3HItJdAix5lZxhHpeFN1ijlHj32H8JYtMjvOR2A%2BXxcPeMl%2BeExs2TB7%2FXXx6tM%2BwJYySi0SjsSqZwnVfujs%2BgKGK9MSJz86bhCA1YVAByz93N9ncw4FfPhRJy8mGvXj1pk6ydNNZX7R%2FGy7Px8qOpGO%2BO8ZwRCch8gh7Qcni4ZU7icP%2FUm0GCIBahJ6grS4qBQ7KvzVYE5z6biPdb16q82PEq7Hfhh%2BwvpO5kQFs8esw3ypW4qOn62KBTDPP0e0t6slZyhrjPZrcMAe1Uma0yJPsilqr6YbvxKLZvGZT7rD2J8mULkhHrBIigohD4xUkygS0TL6FJQ8%2FlPiNAlYCOKYKuCVKFqJZvcQYKSAGCbdxzPDMYLhN0MsCInch0lWi4qFKLiNgzju2oBj3MQWlxz6N9vgoZ3YmXWEef9Dkw%2FN2hL3z%2BUXBRbyn24JtHmlbjeDecb%2FFTWfREQubaZD8p8mnwjWn0OFIVH8w1aG0xAY6pgFOZ4tR6MmXnef90bcCxegwA8V%2BdlYN74y7JjVpRwRSxhwhxgnzoh9qALBRSgSnGsYKQKCWc78I6FxqBz%2BtL8wS%2FPXQfCvG1n8yHmNfWuwyK0s%2BTgnLgQyadYQEkeUj2xIEtFECkk1sjdeIZZf01tQpOtynyRWDAT0IJc%2F75R%2BasJIa%2BzjHKhZtcxgqRh2O3jZBaoZezI3nOsLnP%2BXzgUBLOPxqMDS9&X-Amz-Signature=99e5c81bbc2ed51afe73f3bf46c57b2f1a485b828734cbfacda0f6e91a905848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMNL3G2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsNGNFcKgcCeOkAdrZlliJ8MvlG%2Bsc6gMDyH3ke%2BBWhAiAmrIxZydNIlXINJoYSsS7V6RmoiiDCp8GQz21mR9WBHCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwKUoXXdWfWeVo7XpKtwDgObJBjL6tRw5MiiPG%2FKhWlCjcmpkb%2Fpyiyx9X6e%2Fb41mIkZd%2BczzylDZY%2B7kOyAZd8kVfZRYiLw5HjXpBd87FLmHzqwUwYXWbs2HMJ%2FMONdoStAw9mm1UiajxJQzxg3Suekgkm5%2BJ%2F5jd0NgvsEYgiM3HItJdAix5lZxhHpeFN1ijlHj32H8JYtMjvOR2A%2BXxcPeMl%2BeExs2TB7%2FXXx6tM%2BwJYySi0SjsSqZwnVfujs%2BgKGK9MSJz86bhCA1YVAByz93N9ncw4FfPhRJy8mGvXj1pk6ydNNZX7R%2FGy7Px8qOpGO%2BO8ZwRCch8gh7Qcni4ZU7icP%2FUm0GCIBahJ6grS4qBQ7KvzVYE5z6biPdb16q82PEq7Hfhh%2BwvpO5kQFs8esw3ypW4qOn62KBTDPP0e0t6slZyhrjPZrcMAe1Uma0yJPsilqr6YbvxKLZvGZT7rD2J8mULkhHrBIigohD4xUkygS0TL6FJQ8%2FlPiNAlYCOKYKuCVKFqJZvcQYKSAGCbdxzPDMYLhN0MsCInch0lWi4qFKLiNgzju2oBj3MQWlxz6N9vgoZ3YmXWEef9Dkw%2FN2hL3z%2BUXBRbyn24JtHmlbjeDecb%2FFTWfREQubaZD8p8mnwjWn0OFIVH8w1aG0xAY6pgFOZ4tR6MmXnef90bcCxegwA8V%2BdlYN74y7JjVpRwRSxhwhxgnzoh9qALBRSgSnGsYKQKCWc78I6FxqBz%2BtL8wS%2FPXQfCvG1n8yHmNfWuwyK0s%2BTgnLgQyadYQEkeUj2xIEtFECkk1sjdeIZZf01tQpOtynyRWDAT0IJc%2F75R%2BasJIa%2BzjHKhZtcxgqRh2O3jZBaoZezI3nOsLnP%2BXzgUBLOPxqMDS9&X-Amz-Signature=56ece052b1ee09d9f91b20bc013410454c17ff9459719df751e0c0694ce79130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMNL3G2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsNGNFcKgcCeOkAdrZlliJ8MvlG%2Bsc6gMDyH3ke%2BBWhAiAmrIxZydNIlXINJoYSsS7V6RmoiiDCp8GQz21mR9WBHCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwKUoXXdWfWeVo7XpKtwDgObJBjL6tRw5MiiPG%2FKhWlCjcmpkb%2Fpyiyx9X6e%2Fb41mIkZd%2BczzylDZY%2B7kOyAZd8kVfZRYiLw5HjXpBd87FLmHzqwUwYXWbs2HMJ%2FMONdoStAw9mm1UiajxJQzxg3Suekgkm5%2BJ%2F5jd0NgvsEYgiM3HItJdAix5lZxhHpeFN1ijlHj32H8JYtMjvOR2A%2BXxcPeMl%2BeExs2TB7%2FXXx6tM%2BwJYySi0SjsSqZwnVfujs%2BgKGK9MSJz86bhCA1YVAByz93N9ncw4FfPhRJy8mGvXj1pk6ydNNZX7R%2FGy7Px8qOpGO%2BO8ZwRCch8gh7Qcni4ZU7icP%2FUm0GCIBahJ6grS4qBQ7KvzVYE5z6biPdb16q82PEq7Hfhh%2BwvpO5kQFs8esw3ypW4qOn62KBTDPP0e0t6slZyhrjPZrcMAe1Uma0yJPsilqr6YbvxKLZvGZT7rD2J8mULkhHrBIigohD4xUkygS0TL6FJQ8%2FlPiNAlYCOKYKuCVKFqJZvcQYKSAGCbdxzPDMYLhN0MsCInch0lWi4qFKLiNgzju2oBj3MQWlxz6N9vgoZ3YmXWEef9Dkw%2FN2hL3z%2BUXBRbyn24JtHmlbjeDecb%2FFTWfREQubaZD8p8mnwjWn0OFIVH8w1aG0xAY6pgFOZ4tR6MmXnef90bcCxegwA8V%2BdlYN74y7JjVpRwRSxhwhxgnzoh9qALBRSgSnGsYKQKCWc78I6FxqBz%2BtL8wS%2FPXQfCvG1n8yHmNfWuwyK0s%2BTgnLgQyadYQEkeUj2xIEtFECkk1sjdeIZZf01tQpOtynyRWDAT0IJc%2F75R%2BasJIa%2BzjHKhZtcxgqRh2O3jZBaoZezI3nOsLnP%2BXzgUBLOPxqMDS9&X-Amz-Signature=a16bc2e7458249e0bafb96bfd98b6d046f5f387537d0456fe08df493d6898a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMNL3G2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsNGNFcKgcCeOkAdrZlliJ8MvlG%2Bsc6gMDyH3ke%2BBWhAiAmrIxZydNIlXINJoYSsS7V6RmoiiDCp8GQz21mR9WBHCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwKUoXXdWfWeVo7XpKtwDgObJBjL6tRw5MiiPG%2FKhWlCjcmpkb%2Fpyiyx9X6e%2Fb41mIkZd%2BczzylDZY%2B7kOyAZd8kVfZRYiLw5HjXpBd87FLmHzqwUwYXWbs2HMJ%2FMONdoStAw9mm1UiajxJQzxg3Suekgkm5%2BJ%2F5jd0NgvsEYgiM3HItJdAix5lZxhHpeFN1ijlHj32H8JYtMjvOR2A%2BXxcPeMl%2BeExs2TB7%2FXXx6tM%2BwJYySi0SjsSqZwnVfujs%2BgKGK9MSJz86bhCA1YVAByz93N9ncw4FfPhRJy8mGvXj1pk6ydNNZX7R%2FGy7Px8qOpGO%2BO8ZwRCch8gh7Qcni4ZU7icP%2FUm0GCIBahJ6grS4qBQ7KvzVYE5z6biPdb16q82PEq7Hfhh%2BwvpO5kQFs8esw3ypW4qOn62KBTDPP0e0t6slZyhrjPZrcMAe1Uma0yJPsilqr6YbvxKLZvGZT7rD2J8mULkhHrBIigohD4xUkygS0TL6FJQ8%2FlPiNAlYCOKYKuCVKFqJZvcQYKSAGCbdxzPDMYLhN0MsCInch0lWi4qFKLiNgzju2oBj3MQWlxz6N9vgoZ3YmXWEef9Dkw%2FN2hL3z%2BUXBRbyn24JtHmlbjeDecb%2FFTWfREQubaZD8p8mnwjWn0OFIVH8w1aG0xAY6pgFOZ4tR6MmXnef90bcCxegwA8V%2BdlYN74y7JjVpRwRSxhwhxgnzoh9qALBRSgSnGsYKQKCWc78I6FxqBz%2BtL8wS%2FPXQfCvG1n8yHmNfWuwyK0s%2BTgnLgQyadYQEkeUj2xIEtFECkk1sjdeIZZf01tQpOtynyRWDAT0IJc%2F75R%2BasJIa%2BzjHKhZtcxgqRh2O3jZBaoZezI3nOsLnP%2BXzgUBLOPxqMDS9&X-Amz-Signature=d87472ca9ae1b6cec03e02ca4326a2f523fa323efdf341b3830b7a6936c8caaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
