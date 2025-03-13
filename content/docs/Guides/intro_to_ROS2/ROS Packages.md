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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKR66RFE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHidB5J%2FcTd4dbYwNUFiHQaYbEBz0mOeCQfqDsSwSHsHAiEAvG07x4jjQbAnx5TMWZjfDZIJXNcO0vq8DnKZMJ9LDG8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQMKZeoQ3B7dYNwnCrcA3pxJEc%2Fk1RmHoEFSaOvcH4rP0WjtvNqij1Ha0A%2FLfw%2BT6CIn%2FSBK7mWzHPP9dTJOtQfCMSGhOjEuGObNDRWInNLrMhKuO536iM04JHLUVHk2udwV%2FhoFZ%2BgWtw1TZAP%2FJzp4bPIE8xPodY6JxqYBB5KnctKBW538c80XQwU3ROAz1Tnzv7VJqvmZuJ6jXwUBe0Zjn3Dna%2F4BdBHfVUWj2BEmex8btUqacbMRFg93hJJV2jW%2BAe0du%2BzG2qhoaZ0Mv4UbLp5jDlLe%2BBfY%2ByJkw1%2Bbe7tHtk0Ne2V3F3eyGZmI03ij4YtIQyDhkw0UUbw07Xe27PV1tsbKBbkG%2FaoY0qMsRrDwgwMKpTLBCX2K4s9Pt3IYjx4hU%2FO%2BDRtFGmLJQX%2BEDGWXMhE99wKpOQy9E5cKgSWz1kOfcFyO0%2BJLhEoqfRQ4Al%2BS%2FIxSORFfFGc3Bx1S4JqEYjQR9TSbGajgWk9IZKK4DIuEd70W4IPTqDNyUqMkDpvAvR%2FfzU67HDMEEtX04BJvCLzS1yeEvgycPDnGiJHtUUwL8MUQGYI7frUWrPsDZ8PR75%2FJU6NgJRPv8QUMpphWjJTqSwEM3QS5ci8%2Be6CGuKAM452Ocd3ty%2BXrgpNBNgrkY%2FKEHXMMN%2FByr4GOqUBtfu0lDWfdSAWqimRRG0VCqvVmastGssIZUQrZn8N0NEoZxiurJhFuksvgt04Td7Sjp9KFIvzbG3JQ92Of1YcCxmaYL0p1ruebhNbRmAvJdf3glGLYSqsaqhBT9Ef5AKJXaM7WnwMGuklN6ZvFGO86qGFo1yeTw7MQTSG3qk%2BlUUonBIhMrkWuTNv0Z6SeJceRXUYURYrawJny%2BZuZr8C2ZrYX7pL&X-Amz-Signature=42dd021d882e121b6104829dc7fccc94156deeae7e1802b616f25ac3c460c0d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKR66RFE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHidB5J%2FcTd4dbYwNUFiHQaYbEBz0mOeCQfqDsSwSHsHAiEAvG07x4jjQbAnx5TMWZjfDZIJXNcO0vq8DnKZMJ9LDG8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQMKZeoQ3B7dYNwnCrcA3pxJEc%2Fk1RmHoEFSaOvcH4rP0WjtvNqij1Ha0A%2FLfw%2BT6CIn%2FSBK7mWzHPP9dTJOtQfCMSGhOjEuGObNDRWInNLrMhKuO536iM04JHLUVHk2udwV%2FhoFZ%2BgWtw1TZAP%2FJzp4bPIE8xPodY6JxqYBB5KnctKBW538c80XQwU3ROAz1Tnzv7VJqvmZuJ6jXwUBe0Zjn3Dna%2F4BdBHfVUWj2BEmex8btUqacbMRFg93hJJV2jW%2BAe0du%2BzG2qhoaZ0Mv4UbLp5jDlLe%2BBfY%2ByJkw1%2Bbe7tHtk0Ne2V3F3eyGZmI03ij4YtIQyDhkw0UUbw07Xe27PV1tsbKBbkG%2FaoY0qMsRrDwgwMKpTLBCX2K4s9Pt3IYjx4hU%2FO%2BDRtFGmLJQX%2BEDGWXMhE99wKpOQy9E5cKgSWz1kOfcFyO0%2BJLhEoqfRQ4Al%2BS%2FIxSORFfFGc3Bx1S4JqEYjQR9TSbGajgWk9IZKK4DIuEd70W4IPTqDNyUqMkDpvAvR%2FfzU67HDMEEtX04BJvCLzS1yeEvgycPDnGiJHtUUwL8MUQGYI7frUWrPsDZ8PR75%2FJU6NgJRPv8QUMpphWjJTqSwEM3QS5ci8%2Be6CGuKAM452Ocd3ty%2BXrgpNBNgrkY%2FKEHXMMN%2FByr4GOqUBtfu0lDWfdSAWqimRRG0VCqvVmastGssIZUQrZn8N0NEoZxiurJhFuksvgt04Td7Sjp9KFIvzbG3JQ92Of1YcCxmaYL0p1ruebhNbRmAvJdf3glGLYSqsaqhBT9Ef5AKJXaM7WnwMGuklN6ZvFGO86qGFo1yeTw7MQTSG3qk%2BlUUonBIhMrkWuTNv0Z6SeJceRXUYURYrawJny%2BZuZr8C2ZrYX7pL&X-Amz-Signature=a364652d1d6eae60aba4609f34ba769e047371989d45b23884c751f03d6e0dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKR66RFE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHidB5J%2FcTd4dbYwNUFiHQaYbEBz0mOeCQfqDsSwSHsHAiEAvG07x4jjQbAnx5TMWZjfDZIJXNcO0vq8DnKZMJ9LDG8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQMKZeoQ3B7dYNwnCrcA3pxJEc%2Fk1RmHoEFSaOvcH4rP0WjtvNqij1Ha0A%2FLfw%2BT6CIn%2FSBK7mWzHPP9dTJOtQfCMSGhOjEuGObNDRWInNLrMhKuO536iM04JHLUVHk2udwV%2FhoFZ%2BgWtw1TZAP%2FJzp4bPIE8xPodY6JxqYBB5KnctKBW538c80XQwU3ROAz1Tnzv7VJqvmZuJ6jXwUBe0Zjn3Dna%2F4BdBHfVUWj2BEmex8btUqacbMRFg93hJJV2jW%2BAe0du%2BzG2qhoaZ0Mv4UbLp5jDlLe%2BBfY%2ByJkw1%2Bbe7tHtk0Ne2V3F3eyGZmI03ij4YtIQyDhkw0UUbw07Xe27PV1tsbKBbkG%2FaoY0qMsRrDwgwMKpTLBCX2K4s9Pt3IYjx4hU%2FO%2BDRtFGmLJQX%2BEDGWXMhE99wKpOQy9E5cKgSWz1kOfcFyO0%2BJLhEoqfRQ4Al%2BS%2FIxSORFfFGc3Bx1S4JqEYjQR9TSbGajgWk9IZKK4DIuEd70W4IPTqDNyUqMkDpvAvR%2FfzU67HDMEEtX04BJvCLzS1yeEvgycPDnGiJHtUUwL8MUQGYI7frUWrPsDZ8PR75%2FJU6NgJRPv8QUMpphWjJTqSwEM3QS5ci8%2Be6CGuKAM452Ocd3ty%2BXrgpNBNgrkY%2FKEHXMMN%2FByr4GOqUBtfu0lDWfdSAWqimRRG0VCqvVmastGssIZUQrZn8N0NEoZxiurJhFuksvgt04Td7Sjp9KFIvzbG3JQ92Of1YcCxmaYL0p1ruebhNbRmAvJdf3glGLYSqsaqhBT9Ef5AKJXaM7WnwMGuklN6ZvFGO86qGFo1yeTw7MQTSG3qk%2BlUUonBIhMrkWuTNv0Z6SeJceRXUYURYrawJny%2BZuZr8C2ZrYX7pL&X-Amz-Signature=23d8193392670d4c6c0a3bf9fb468bea1bf432f1494d2cd59fa469b0bc88dbe0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKR66RFE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHidB5J%2FcTd4dbYwNUFiHQaYbEBz0mOeCQfqDsSwSHsHAiEAvG07x4jjQbAnx5TMWZjfDZIJXNcO0vq8DnKZMJ9LDG8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQMKZeoQ3B7dYNwnCrcA3pxJEc%2Fk1RmHoEFSaOvcH4rP0WjtvNqij1Ha0A%2FLfw%2BT6CIn%2FSBK7mWzHPP9dTJOtQfCMSGhOjEuGObNDRWInNLrMhKuO536iM04JHLUVHk2udwV%2FhoFZ%2BgWtw1TZAP%2FJzp4bPIE8xPodY6JxqYBB5KnctKBW538c80XQwU3ROAz1Tnzv7VJqvmZuJ6jXwUBe0Zjn3Dna%2F4BdBHfVUWj2BEmex8btUqacbMRFg93hJJV2jW%2BAe0du%2BzG2qhoaZ0Mv4UbLp5jDlLe%2BBfY%2ByJkw1%2Bbe7tHtk0Ne2V3F3eyGZmI03ij4YtIQyDhkw0UUbw07Xe27PV1tsbKBbkG%2FaoY0qMsRrDwgwMKpTLBCX2K4s9Pt3IYjx4hU%2FO%2BDRtFGmLJQX%2BEDGWXMhE99wKpOQy9E5cKgSWz1kOfcFyO0%2BJLhEoqfRQ4Al%2BS%2FIxSORFfFGc3Bx1S4JqEYjQR9TSbGajgWk9IZKK4DIuEd70W4IPTqDNyUqMkDpvAvR%2FfzU67HDMEEtX04BJvCLzS1yeEvgycPDnGiJHtUUwL8MUQGYI7frUWrPsDZ8PR75%2FJU6NgJRPv8QUMpphWjJTqSwEM3QS5ci8%2Be6CGuKAM452Ocd3ty%2BXrgpNBNgrkY%2FKEHXMMN%2FByr4GOqUBtfu0lDWfdSAWqimRRG0VCqvVmastGssIZUQrZn8N0NEoZxiurJhFuksvgt04Td7Sjp9KFIvzbG3JQ92Of1YcCxmaYL0p1ruebhNbRmAvJdf3glGLYSqsaqhBT9Ef5AKJXaM7WnwMGuklN6ZvFGO86qGFo1yeTw7MQTSG3qk%2BlUUonBIhMrkWuTNv0Z6SeJceRXUYURYrawJny%2BZuZr8C2ZrYX7pL&X-Amz-Signature=30f20e6272b40f61345020400c1ef352cf44c2e2cfc627c5d9c591454eccfa00&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKR66RFE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHidB5J%2FcTd4dbYwNUFiHQaYbEBz0mOeCQfqDsSwSHsHAiEAvG07x4jjQbAnx5TMWZjfDZIJXNcO0vq8DnKZMJ9LDG8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQMKZeoQ3B7dYNwnCrcA3pxJEc%2Fk1RmHoEFSaOvcH4rP0WjtvNqij1Ha0A%2FLfw%2BT6CIn%2FSBK7mWzHPP9dTJOtQfCMSGhOjEuGObNDRWInNLrMhKuO536iM04JHLUVHk2udwV%2FhoFZ%2BgWtw1TZAP%2FJzp4bPIE8xPodY6JxqYBB5KnctKBW538c80XQwU3ROAz1Tnzv7VJqvmZuJ6jXwUBe0Zjn3Dna%2F4BdBHfVUWj2BEmex8btUqacbMRFg93hJJV2jW%2BAe0du%2BzG2qhoaZ0Mv4UbLp5jDlLe%2BBfY%2ByJkw1%2Bbe7tHtk0Ne2V3F3eyGZmI03ij4YtIQyDhkw0UUbw07Xe27PV1tsbKBbkG%2FaoY0qMsRrDwgwMKpTLBCX2K4s9Pt3IYjx4hU%2FO%2BDRtFGmLJQX%2BEDGWXMhE99wKpOQy9E5cKgSWz1kOfcFyO0%2BJLhEoqfRQ4Al%2BS%2FIxSORFfFGc3Bx1S4JqEYjQR9TSbGajgWk9IZKK4DIuEd70W4IPTqDNyUqMkDpvAvR%2FfzU67HDMEEtX04BJvCLzS1yeEvgycPDnGiJHtUUwL8MUQGYI7frUWrPsDZ8PR75%2FJU6NgJRPv8QUMpphWjJTqSwEM3QS5ci8%2Be6CGuKAM452Ocd3ty%2BXrgpNBNgrkY%2FKEHXMMN%2FByr4GOqUBtfu0lDWfdSAWqimRRG0VCqvVmastGssIZUQrZn8N0NEoZxiurJhFuksvgt04Td7Sjp9KFIvzbG3JQ92Of1YcCxmaYL0p1ruebhNbRmAvJdf3glGLYSqsaqhBT9Ef5AKJXaM7WnwMGuklN6ZvFGO86qGFo1yeTw7MQTSG3qk%2BlUUonBIhMrkWuTNv0Z6SeJceRXUYURYrawJny%2BZuZr8C2ZrYX7pL&X-Amz-Signature=dc314090b27d23fe75d5a61c2af83201617cf58f2c19428ae58a04b4690251fc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKR66RFE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHidB5J%2FcTd4dbYwNUFiHQaYbEBz0mOeCQfqDsSwSHsHAiEAvG07x4jjQbAnx5TMWZjfDZIJXNcO0vq8DnKZMJ9LDG8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQMKZeoQ3B7dYNwnCrcA3pxJEc%2Fk1RmHoEFSaOvcH4rP0WjtvNqij1Ha0A%2FLfw%2BT6CIn%2FSBK7mWzHPP9dTJOtQfCMSGhOjEuGObNDRWInNLrMhKuO536iM04JHLUVHk2udwV%2FhoFZ%2BgWtw1TZAP%2FJzp4bPIE8xPodY6JxqYBB5KnctKBW538c80XQwU3ROAz1Tnzv7VJqvmZuJ6jXwUBe0Zjn3Dna%2F4BdBHfVUWj2BEmex8btUqacbMRFg93hJJV2jW%2BAe0du%2BzG2qhoaZ0Mv4UbLp5jDlLe%2BBfY%2ByJkw1%2Bbe7tHtk0Ne2V3F3eyGZmI03ij4YtIQyDhkw0UUbw07Xe27PV1tsbKBbkG%2FaoY0qMsRrDwgwMKpTLBCX2K4s9Pt3IYjx4hU%2FO%2BDRtFGmLJQX%2BEDGWXMhE99wKpOQy9E5cKgSWz1kOfcFyO0%2BJLhEoqfRQ4Al%2BS%2FIxSORFfFGc3Bx1S4JqEYjQR9TSbGajgWk9IZKK4DIuEd70W4IPTqDNyUqMkDpvAvR%2FfzU67HDMEEtX04BJvCLzS1yeEvgycPDnGiJHtUUwL8MUQGYI7frUWrPsDZ8PR75%2FJU6NgJRPv8QUMpphWjJTqSwEM3QS5ci8%2Be6CGuKAM452Ocd3ty%2BXrgpNBNgrkY%2FKEHXMMN%2FByr4GOqUBtfu0lDWfdSAWqimRRG0VCqvVmastGssIZUQrZn8N0NEoZxiurJhFuksvgt04Td7Sjp9KFIvzbG3JQ92Of1YcCxmaYL0p1ruebhNbRmAvJdf3glGLYSqsaqhBT9Ef5AKJXaM7WnwMGuklN6ZvFGO86qGFo1yeTw7MQTSG3qk%2BlUUonBIhMrkWuTNv0Z6SeJceRXUYURYrawJny%2BZuZr8C2ZrYX7pL&X-Amz-Signature=d9dcedc3d4ca162cfd122b7406fe55606fb2c0f7f6f728b73d0e922d2b16d3f5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKR66RFE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHidB5J%2FcTd4dbYwNUFiHQaYbEBz0mOeCQfqDsSwSHsHAiEAvG07x4jjQbAnx5TMWZjfDZIJXNcO0vq8DnKZMJ9LDG8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQMKZeoQ3B7dYNwnCrcA3pxJEc%2Fk1RmHoEFSaOvcH4rP0WjtvNqij1Ha0A%2FLfw%2BT6CIn%2FSBK7mWzHPP9dTJOtQfCMSGhOjEuGObNDRWInNLrMhKuO536iM04JHLUVHk2udwV%2FhoFZ%2BgWtw1TZAP%2FJzp4bPIE8xPodY6JxqYBB5KnctKBW538c80XQwU3ROAz1Tnzv7VJqvmZuJ6jXwUBe0Zjn3Dna%2F4BdBHfVUWj2BEmex8btUqacbMRFg93hJJV2jW%2BAe0du%2BzG2qhoaZ0Mv4UbLp5jDlLe%2BBfY%2ByJkw1%2Bbe7tHtk0Ne2V3F3eyGZmI03ij4YtIQyDhkw0UUbw07Xe27PV1tsbKBbkG%2FaoY0qMsRrDwgwMKpTLBCX2K4s9Pt3IYjx4hU%2FO%2BDRtFGmLJQX%2BEDGWXMhE99wKpOQy9E5cKgSWz1kOfcFyO0%2BJLhEoqfRQ4Al%2BS%2FIxSORFfFGc3Bx1S4JqEYjQR9TSbGajgWk9IZKK4DIuEd70W4IPTqDNyUqMkDpvAvR%2FfzU67HDMEEtX04BJvCLzS1yeEvgycPDnGiJHtUUwL8MUQGYI7frUWrPsDZ8PR75%2FJU6NgJRPv8QUMpphWjJTqSwEM3QS5ci8%2Be6CGuKAM452Ocd3ty%2BXrgpNBNgrkY%2FKEHXMMN%2FByr4GOqUBtfu0lDWfdSAWqimRRG0VCqvVmastGssIZUQrZn8N0NEoZxiurJhFuksvgt04Td7Sjp9KFIvzbG3JQ92Of1YcCxmaYL0p1ruebhNbRmAvJdf3glGLYSqsaqhBT9Ef5AKJXaM7WnwMGuklN6ZvFGO86qGFo1yeTw7MQTSG3qk%2BlUUonBIhMrkWuTNv0Z6SeJceRXUYURYrawJny%2BZuZr8C2ZrYX7pL&X-Amz-Signature=a536a3ad1cbc0bfff6bb7d16074fad12da32c37dc988770f48e62ad32252abbb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
