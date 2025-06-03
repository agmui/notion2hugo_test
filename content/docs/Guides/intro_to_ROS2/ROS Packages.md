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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKF2CCL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDz3jIUjun7VncRWWyF3XBtEEAJHicCNULgc1o%2FgiEV%2FwIhAMX9PITg8Iuo5jLUCXU50MVOx2t5hoO7sxefBnFcpT5tKv8DCBoQABoMNjM3NDIzMTgzODA1IgxK1thM277hTDfobdwq3ANLduE6M0SBaPJVcgSZ2UbbJwcFyl4DuApGffzJ1WD5VVQd8A2E2fOc%2Bryw7k5aDQWIAYmRK%2FSbli3rf8Uopn4rZUKEP5pb%2FBCnkOMpPd0BTfzo8IJbTn%2B06Y6LWxUbIwaRMlOeLpACg4ijNVIf8nHDEczByFPEsPYuR0x7x2xj2yAZLOnxQGtFxPcpZ6EoXCq%2F7XwC2zQ5tdPs5xzayAvY2cQCGEvWNejUUqIzJ6AccBYncE3ka2geBEi3HCMTUpLUCX82pXIznzutIzo%2BP95oMEmBwiDahyIZ5oxH2%2B%2FjOCcWyukMlZr4WLz4tSd1wR4pDcyOMYszW06YFc7sGoRInA6EYxfsoa7I2DIyG%2Fzd462FgIppkGjJ1yyELGTPjOgBr%2F6F04JQyv2QtlfZ3i7jUa9AtqCi2ZXDFS2DavlbeJ7LppPeBJxulWH83ObGrVcm2C%2B3C6GRxfRY1tDekQcjCj7dqpyX4b6huwXVIeVLBXfpDZPUs%2But9lsY7k3i4HTqTgcbpS356%2BfobC%2FTSMzOnCUtj%2FBzUZEHg1uSPNYkls%2FG8QMmbZ1GUxbugPNfwvaRxBKlEZf%2BWLq0L35okqix7%2Bfrg7AM2iLO3uK9lgu4V8ioSmF0%2FXo90%2BChsjCj0vzBBjqkAUEu8hcvZMGWUXUfAagYE%2B9Tuo2iwoh7qaKEdpB7eHn6vvBp28aemQSOQHvxKD3bnKPhgXiL%2FjAQNk2E4c68ahEalgEhu5wNZNMimvNXFFV03Ja61hQNZdroenicE4UNo0kL9t5fhtPXT7V30AMW17Av%2FSugvsNCZh7Q53qYL34m%2FAXOry2kkVZheSPg9m%2FZYRcGtXjcY0OFuVpUxZ4FiY2XPm4m&X-Amz-Signature=2d1518b36f7f24885ebb52958250ba6f26b8f70529c7b347c4ba9398fe57e006&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKF2CCL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDz3jIUjun7VncRWWyF3XBtEEAJHicCNULgc1o%2FgiEV%2FwIhAMX9PITg8Iuo5jLUCXU50MVOx2t5hoO7sxefBnFcpT5tKv8DCBoQABoMNjM3NDIzMTgzODA1IgxK1thM277hTDfobdwq3ANLduE6M0SBaPJVcgSZ2UbbJwcFyl4DuApGffzJ1WD5VVQd8A2E2fOc%2Bryw7k5aDQWIAYmRK%2FSbli3rf8Uopn4rZUKEP5pb%2FBCnkOMpPd0BTfzo8IJbTn%2B06Y6LWxUbIwaRMlOeLpACg4ijNVIf8nHDEczByFPEsPYuR0x7x2xj2yAZLOnxQGtFxPcpZ6EoXCq%2F7XwC2zQ5tdPs5xzayAvY2cQCGEvWNejUUqIzJ6AccBYncE3ka2geBEi3HCMTUpLUCX82pXIznzutIzo%2BP95oMEmBwiDahyIZ5oxH2%2B%2FjOCcWyukMlZr4WLz4tSd1wR4pDcyOMYszW06YFc7sGoRInA6EYxfsoa7I2DIyG%2Fzd462FgIppkGjJ1yyELGTPjOgBr%2F6F04JQyv2QtlfZ3i7jUa9AtqCi2ZXDFS2DavlbeJ7LppPeBJxulWH83ObGrVcm2C%2B3C6GRxfRY1tDekQcjCj7dqpyX4b6huwXVIeVLBXfpDZPUs%2But9lsY7k3i4HTqTgcbpS356%2BfobC%2FTSMzOnCUtj%2FBzUZEHg1uSPNYkls%2FG8QMmbZ1GUxbugPNfwvaRxBKlEZf%2BWLq0L35okqix7%2Bfrg7AM2iLO3uK9lgu4V8ioSmF0%2FXo90%2BChsjCj0vzBBjqkAUEu8hcvZMGWUXUfAagYE%2B9Tuo2iwoh7qaKEdpB7eHn6vvBp28aemQSOQHvxKD3bnKPhgXiL%2FjAQNk2E4c68ahEalgEhu5wNZNMimvNXFFV03Ja61hQNZdroenicE4UNo0kL9t5fhtPXT7V30AMW17Av%2FSugvsNCZh7Q53qYL34m%2FAXOry2kkVZheSPg9m%2FZYRcGtXjcY0OFuVpUxZ4FiY2XPm4m&X-Amz-Signature=38fc4b6e8efc510fdb86e61a55a2937b9ddad87418d772f6f4d189c8f38c8ca8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKF2CCL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDz3jIUjun7VncRWWyF3XBtEEAJHicCNULgc1o%2FgiEV%2FwIhAMX9PITg8Iuo5jLUCXU50MVOx2t5hoO7sxefBnFcpT5tKv8DCBoQABoMNjM3NDIzMTgzODA1IgxK1thM277hTDfobdwq3ANLduE6M0SBaPJVcgSZ2UbbJwcFyl4DuApGffzJ1WD5VVQd8A2E2fOc%2Bryw7k5aDQWIAYmRK%2FSbli3rf8Uopn4rZUKEP5pb%2FBCnkOMpPd0BTfzo8IJbTn%2B06Y6LWxUbIwaRMlOeLpACg4ijNVIf8nHDEczByFPEsPYuR0x7x2xj2yAZLOnxQGtFxPcpZ6EoXCq%2F7XwC2zQ5tdPs5xzayAvY2cQCGEvWNejUUqIzJ6AccBYncE3ka2geBEi3HCMTUpLUCX82pXIznzutIzo%2BP95oMEmBwiDahyIZ5oxH2%2B%2FjOCcWyukMlZr4WLz4tSd1wR4pDcyOMYszW06YFc7sGoRInA6EYxfsoa7I2DIyG%2Fzd462FgIppkGjJ1yyELGTPjOgBr%2F6F04JQyv2QtlfZ3i7jUa9AtqCi2ZXDFS2DavlbeJ7LppPeBJxulWH83ObGrVcm2C%2B3C6GRxfRY1tDekQcjCj7dqpyX4b6huwXVIeVLBXfpDZPUs%2But9lsY7k3i4HTqTgcbpS356%2BfobC%2FTSMzOnCUtj%2FBzUZEHg1uSPNYkls%2FG8QMmbZ1GUxbugPNfwvaRxBKlEZf%2BWLq0L35okqix7%2Bfrg7AM2iLO3uK9lgu4V8ioSmF0%2FXo90%2BChsjCj0vzBBjqkAUEu8hcvZMGWUXUfAagYE%2B9Tuo2iwoh7qaKEdpB7eHn6vvBp28aemQSOQHvxKD3bnKPhgXiL%2FjAQNk2E4c68ahEalgEhu5wNZNMimvNXFFV03Ja61hQNZdroenicE4UNo0kL9t5fhtPXT7V30AMW17Av%2FSugvsNCZh7Q53qYL34m%2FAXOry2kkVZheSPg9m%2FZYRcGtXjcY0OFuVpUxZ4FiY2XPm4m&X-Amz-Signature=11a6da7a0f808b8b10744acfdb11ac3c4baf4cd1f482a449258fb7aecc37baa4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKF2CCL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDz3jIUjun7VncRWWyF3XBtEEAJHicCNULgc1o%2FgiEV%2FwIhAMX9PITg8Iuo5jLUCXU50MVOx2t5hoO7sxefBnFcpT5tKv8DCBoQABoMNjM3NDIzMTgzODA1IgxK1thM277hTDfobdwq3ANLduE6M0SBaPJVcgSZ2UbbJwcFyl4DuApGffzJ1WD5VVQd8A2E2fOc%2Bryw7k5aDQWIAYmRK%2FSbli3rf8Uopn4rZUKEP5pb%2FBCnkOMpPd0BTfzo8IJbTn%2B06Y6LWxUbIwaRMlOeLpACg4ijNVIf8nHDEczByFPEsPYuR0x7x2xj2yAZLOnxQGtFxPcpZ6EoXCq%2F7XwC2zQ5tdPs5xzayAvY2cQCGEvWNejUUqIzJ6AccBYncE3ka2geBEi3HCMTUpLUCX82pXIznzutIzo%2BP95oMEmBwiDahyIZ5oxH2%2B%2FjOCcWyukMlZr4WLz4tSd1wR4pDcyOMYszW06YFc7sGoRInA6EYxfsoa7I2DIyG%2Fzd462FgIppkGjJ1yyELGTPjOgBr%2F6F04JQyv2QtlfZ3i7jUa9AtqCi2ZXDFS2DavlbeJ7LppPeBJxulWH83ObGrVcm2C%2B3C6GRxfRY1tDekQcjCj7dqpyX4b6huwXVIeVLBXfpDZPUs%2But9lsY7k3i4HTqTgcbpS356%2BfobC%2FTSMzOnCUtj%2FBzUZEHg1uSPNYkls%2FG8QMmbZ1GUxbugPNfwvaRxBKlEZf%2BWLq0L35okqix7%2Bfrg7AM2iLO3uK9lgu4V8ioSmF0%2FXo90%2BChsjCj0vzBBjqkAUEu8hcvZMGWUXUfAagYE%2B9Tuo2iwoh7qaKEdpB7eHn6vvBp28aemQSOQHvxKD3bnKPhgXiL%2FjAQNk2E4c68ahEalgEhu5wNZNMimvNXFFV03Ja61hQNZdroenicE4UNo0kL9t5fhtPXT7V30AMW17Av%2FSugvsNCZh7Q53qYL34m%2FAXOry2kkVZheSPg9m%2FZYRcGtXjcY0OFuVpUxZ4FiY2XPm4m&X-Amz-Signature=b453db263bf64567927104428efe84ec22822c8a0440ce3ddcf4bc291b093586&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKF2CCL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDz3jIUjun7VncRWWyF3XBtEEAJHicCNULgc1o%2FgiEV%2FwIhAMX9PITg8Iuo5jLUCXU50MVOx2t5hoO7sxefBnFcpT5tKv8DCBoQABoMNjM3NDIzMTgzODA1IgxK1thM277hTDfobdwq3ANLduE6M0SBaPJVcgSZ2UbbJwcFyl4DuApGffzJ1WD5VVQd8A2E2fOc%2Bryw7k5aDQWIAYmRK%2FSbli3rf8Uopn4rZUKEP5pb%2FBCnkOMpPd0BTfzo8IJbTn%2B06Y6LWxUbIwaRMlOeLpACg4ijNVIf8nHDEczByFPEsPYuR0x7x2xj2yAZLOnxQGtFxPcpZ6EoXCq%2F7XwC2zQ5tdPs5xzayAvY2cQCGEvWNejUUqIzJ6AccBYncE3ka2geBEi3HCMTUpLUCX82pXIznzutIzo%2BP95oMEmBwiDahyIZ5oxH2%2B%2FjOCcWyukMlZr4WLz4tSd1wR4pDcyOMYszW06YFc7sGoRInA6EYxfsoa7I2DIyG%2Fzd462FgIppkGjJ1yyELGTPjOgBr%2F6F04JQyv2QtlfZ3i7jUa9AtqCi2ZXDFS2DavlbeJ7LppPeBJxulWH83ObGrVcm2C%2B3C6GRxfRY1tDekQcjCj7dqpyX4b6huwXVIeVLBXfpDZPUs%2But9lsY7k3i4HTqTgcbpS356%2BfobC%2FTSMzOnCUtj%2FBzUZEHg1uSPNYkls%2FG8QMmbZ1GUxbugPNfwvaRxBKlEZf%2BWLq0L35okqix7%2Bfrg7AM2iLO3uK9lgu4V8ioSmF0%2FXo90%2BChsjCj0vzBBjqkAUEu8hcvZMGWUXUfAagYE%2B9Tuo2iwoh7qaKEdpB7eHn6vvBp28aemQSOQHvxKD3bnKPhgXiL%2FjAQNk2E4c68ahEalgEhu5wNZNMimvNXFFV03Ja61hQNZdroenicE4UNo0kL9t5fhtPXT7V30AMW17Av%2FSugvsNCZh7Q53qYL34m%2FAXOry2kkVZheSPg9m%2FZYRcGtXjcY0OFuVpUxZ4FiY2XPm4m&X-Amz-Signature=751fb8d63f6f3c89a6da000a14e9f6f5ae724d0333fb53ffb5a21460f4d712ef&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKF2CCL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDz3jIUjun7VncRWWyF3XBtEEAJHicCNULgc1o%2FgiEV%2FwIhAMX9PITg8Iuo5jLUCXU50MVOx2t5hoO7sxefBnFcpT5tKv8DCBoQABoMNjM3NDIzMTgzODA1IgxK1thM277hTDfobdwq3ANLduE6M0SBaPJVcgSZ2UbbJwcFyl4DuApGffzJ1WD5VVQd8A2E2fOc%2Bryw7k5aDQWIAYmRK%2FSbli3rf8Uopn4rZUKEP5pb%2FBCnkOMpPd0BTfzo8IJbTn%2B06Y6LWxUbIwaRMlOeLpACg4ijNVIf8nHDEczByFPEsPYuR0x7x2xj2yAZLOnxQGtFxPcpZ6EoXCq%2F7XwC2zQ5tdPs5xzayAvY2cQCGEvWNejUUqIzJ6AccBYncE3ka2geBEi3HCMTUpLUCX82pXIznzutIzo%2BP95oMEmBwiDahyIZ5oxH2%2B%2FjOCcWyukMlZr4WLz4tSd1wR4pDcyOMYszW06YFc7sGoRInA6EYxfsoa7I2DIyG%2Fzd462FgIppkGjJ1yyELGTPjOgBr%2F6F04JQyv2QtlfZ3i7jUa9AtqCi2ZXDFS2DavlbeJ7LppPeBJxulWH83ObGrVcm2C%2B3C6GRxfRY1tDekQcjCj7dqpyX4b6huwXVIeVLBXfpDZPUs%2But9lsY7k3i4HTqTgcbpS356%2BfobC%2FTSMzOnCUtj%2FBzUZEHg1uSPNYkls%2FG8QMmbZ1GUxbugPNfwvaRxBKlEZf%2BWLq0L35okqix7%2Bfrg7AM2iLO3uK9lgu4V8ioSmF0%2FXo90%2BChsjCj0vzBBjqkAUEu8hcvZMGWUXUfAagYE%2B9Tuo2iwoh7qaKEdpB7eHn6vvBp28aemQSOQHvxKD3bnKPhgXiL%2FjAQNk2E4c68ahEalgEhu5wNZNMimvNXFFV03Ja61hQNZdroenicE4UNo0kL9t5fhtPXT7V30AMW17Av%2FSugvsNCZh7Q53qYL34m%2FAXOry2kkVZheSPg9m%2FZYRcGtXjcY0OFuVpUxZ4FiY2XPm4m&X-Amz-Signature=7f4eebbbd13217a4f62d3e360503c8a81ce332a63f4d8381a23f64e0c048cce6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKF2CCL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDz3jIUjun7VncRWWyF3XBtEEAJHicCNULgc1o%2FgiEV%2FwIhAMX9PITg8Iuo5jLUCXU50MVOx2t5hoO7sxefBnFcpT5tKv8DCBoQABoMNjM3NDIzMTgzODA1IgxK1thM277hTDfobdwq3ANLduE6M0SBaPJVcgSZ2UbbJwcFyl4DuApGffzJ1WD5VVQd8A2E2fOc%2Bryw7k5aDQWIAYmRK%2FSbli3rf8Uopn4rZUKEP5pb%2FBCnkOMpPd0BTfzo8IJbTn%2B06Y6LWxUbIwaRMlOeLpACg4ijNVIf8nHDEczByFPEsPYuR0x7x2xj2yAZLOnxQGtFxPcpZ6EoXCq%2F7XwC2zQ5tdPs5xzayAvY2cQCGEvWNejUUqIzJ6AccBYncE3ka2geBEi3HCMTUpLUCX82pXIznzutIzo%2BP95oMEmBwiDahyIZ5oxH2%2B%2FjOCcWyukMlZr4WLz4tSd1wR4pDcyOMYszW06YFc7sGoRInA6EYxfsoa7I2DIyG%2Fzd462FgIppkGjJ1yyELGTPjOgBr%2F6F04JQyv2QtlfZ3i7jUa9AtqCi2ZXDFS2DavlbeJ7LppPeBJxulWH83ObGrVcm2C%2B3C6GRxfRY1tDekQcjCj7dqpyX4b6huwXVIeVLBXfpDZPUs%2But9lsY7k3i4HTqTgcbpS356%2BfobC%2FTSMzOnCUtj%2FBzUZEHg1uSPNYkls%2FG8QMmbZ1GUxbugPNfwvaRxBKlEZf%2BWLq0L35okqix7%2Bfrg7AM2iLO3uK9lgu4V8ioSmF0%2FXo90%2BChsjCj0vzBBjqkAUEu8hcvZMGWUXUfAagYE%2B9Tuo2iwoh7qaKEdpB7eHn6vvBp28aemQSOQHvxKD3bnKPhgXiL%2FjAQNk2E4c68ahEalgEhu5wNZNMimvNXFFV03Ja61hQNZdroenicE4UNo0kL9t5fhtPXT7V30AMW17Av%2FSugvsNCZh7Q53qYL34m%2FAXOry2kkVZheSPg9m%2FZYRcGtXjcY0OFuVpUxZ4FiY2XPm4m&X-Amz-Signature=fe12a5a2d2076b01503845076b8bd3b5f974e34d726ee6ab66fbd8df668ce740&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
