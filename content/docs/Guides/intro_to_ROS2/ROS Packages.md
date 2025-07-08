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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMCDWFA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4gVxSWkUU5Uhds8FSH7BvypQjAvrHLly2TPxg92ZWZAiEAxRagIEe5Zwa95fD07fHTMf1ilHD%2FPf2uKNtv1YRIO00qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLilYhxAE1d5QXXQircA9ttgEwZtIrL4icfn8zRSPr3hzGzzCt4Y3VF%2BtR3ysAIpXG9rfISvMRZXA%2FRRN42y%2BplQ9sFkxv1tWCpNogJN49Mf7WDsimLHTUo8HL1W5ANw0lG2kJJvUYDmwNI%2FWeS8C3gLQGxexf0hotpQNF%2FEYXz%2FjqgkdGGgY0sJI9PgLZpSh1gK3%2BpRC9Flz1OVUg%2FsGA559YXMYnsHwAijEHZkUz1n7f6R1JviX44Ckz7oUesuLaiT%2FCLNAh01C1oZGmexgXEgoMKq9kGfB32ZdGOGjhwJOc%2BfWc9x4nO%2B%2B%2FRN3WL21P0eZSE0SJmqsaaTnCyEwCv8Y8wiikd1esaHVxY%2FVDzvKJVPPBKHUULtjDEEMkiHG1FTEBkEtH%2FXe2iFpJjT7SgsEAA09HKs5fENvAPQKwj6PMDAuuID6LqHWNUIYKLrLQlBYMiSk2QlnXO7vYctjAG%2FoborrLBU2MVKGx8OW85z2FQUlaMKz%2BMn12xzE4Vxro3LYFhDlWuBUB95ZWHbLdn%2FB8M17BnZfGvBM92nFHTw7NmrVsP7xoAEb9ICEstQaQKVb1Ht8qN5qfVVyi2BcxGE2%2BRJCIgrwYpg%2FdueB05GpIGCZ74rWpR%2BSwKTVfOHRLtsH1ToNkQ4UZjMK6DtsMGOqUB5preo8pH%2FDJreKDAsGONVr8nuTJK9gDMNORLliRPcRo21iJbqNPFqTZ67nAh4ux8LEpKfsu8jAnA3ltdOZ6V4JnqaDudhcQfeXqPFBdLE%2F3fUDouWYgYFpr1gImF%2FimispdKbACrcHHQ610RJknIOKlRSqxAutEKdR2KYrnCS3wAKMix7tef43vj3KymduEIJ1Trd4iG8Lw1BBcg3pZoLY38gvxf&X-Amz-Signature=9cf037eeea4eba47c52131441d40fe6f68e66ee146b81d43592f2e5e841254b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMCDWFA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4gVxSWkUU5Uhds8FSH7BvypQjAvrHLly2TPxg92ZWZAiEAxRagIEe5Zwa95fD07fHTMf1ilHD%2FPf2uKNtv1YRIO00qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLilYhxAE1d5QXXQircA9ttgEwZtIrL4icfn8zRSPr3hzGzzCt4Y3VF%2BtR3ysAIpXG9rfISvMRZXA%2FRRN42y%2BplQ9sFkxv1tWCpNogJN49Mf7WDsimLHTUo8HL1W5ANw0lG2kJJvUYDmwNI%2FWeS8C3gLQGxexf0hotpQNF%2FEYXz%2FjqgkdGGgY0sJI9PgLZpSh1gK3%2BpRC9Flz1OVUg%2FsGA559YXMYnsHwAijEHZkUz1n7f6R1JviX44Ckz7oUesuLaiT%2FCLNAh01C1oZGmexgXEgoMKq9kGfB32ZdGOGjhwJOc%2BfWc9x4nO%2B%2B%2FRN3WL21P0eZSE0SJmqsaaTnCyEwCv8Y8wiikd1esaHVxY%2FVDzvKJVPPBKHUULtjDEEMkiHG1FTEBkEtH%2FXe2iFpJjT7SgsEAA09HKs5fENvAPQKwj6PMDAuuID6LqHWNUIYKLrLQlBYMiSk2QlnXO7vYctjAG%2FoborrLBU2MVKGx8OW85z2FQUlaMKz%2BMn12xzE4Vxro3LYFhDlWuBUB95ZWHbLdn%2FB8M17BnZfGvBM92nFHTw7NmrVsP7xoAEb9ICEstQaQKVb1Ht8qN5qfVVyi2BcxGE2%2BRJCIgrwYpg%2FdueB05GpIGCZ74rWpR%2BSwKTVfOHRLtsH1ToNkQ4UZjMK6DtsMGOqUB5preo8pH%2FDJreKDAsGONVr8nuTJK9gDMNORLliRPcRo21iJbqNPFqTZ67nAh4ux8LEpKfsu8jAnA3ltdOZ6V4JnqaDudhcQfeXqPFBdLE%2F3fUDouWYgYFpr1gImF%2FimispdKbACrcHHQ610RJknIOKlRSqxAutEKdR2KYrnCS3wAKMix7tef43vj3KymduEIJ1Trd4iG8Lw1BBcg3pZoLY38gvxf&X-Amz-Signature=4de863b42b52cd92b82c9c722de1631b62b210fc6890969983d02e35c448ee5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMCDWFA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4gVxSWkUU5Uhds8FSH7BvypQjAvrHLly2TPxg92ZWZAiEAxRagIEe5Zwa95fD07fHTMf1ilHD%2FPf2uKNtv1YRIO00qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLilYhxAE1d5QXXQircA9ttgEwZtIrL4icfn8zRSPr3hzGzzCt4Y3VF%2BtR3ysAIpXG9rfISvMRZXA%2FRRN42y%2BplQ9sFkxv1tWCpNogJN49Mf7WDsimLHTUo8HL1W5ANw0lG2kJJvUYDmwNI%2FWeS8C3gLQGxexf0hotpQNF%2FEYXz%2FjqgkdGGgY0sJI9PgLZpSh1gK3%2BpRC9Flz1OVUg%2FsGA559YXMYnsHwAijEHZkUz1n7f6R1JviX44Ckz7oUesuLaiT%2FCLNAh01C1oZGmexgXEgoMKq9kGfB32ZdGOGjhwJOc%2BfWc9x4nO%2B%2B%2FRN3WL21P0eZSE0SJmqsaaTnCyEwCv8Y8wiikd1esaHVxY%2FVDzvKJVPPBKHUULtjDEEMkiHG1FTEBkEtH%2FXe2iFpJjT7SgsEAA09HKs5fENvAPQKwj6PMDAuuID6LqHWNUIYKLrLQlBYMiSk2QlnXO7vYctjAG%2FoborrLBU2MVKGx8OW85z2FQUlaMKz%2BMn12xzE4Vxro3LYFhDlWuBUB95ZWHbLdn%2FB8M17BnZfGvBM92nFHTw7NmrVsP7xoAEb9ICEstQaQKVb1Ht8qN5qfVVyi2BcxGE2%2BRJCIgrwYpg%2FdueB05GpIGCZ74rWpR%2BSwKTVfOHRLtsH1ToNkQ4UZjMK6DtsMGOqUB5preo8pH%2FDJreKDAsGONVr8nuTJK9gDMNORLliRPcRo21iJbqNPFqTZ67nAh4ux8LEpKfsu8jAnA3ltdOZ6V4JnqaDudhcQfeXqPFBdLE%2F3fUDouWYgYFpr1gImF%2FimispdKbACrcHHQ610RJknIOKlRSqxAutEKdR2KYrnCS3wAKMix7tef43vj3KymduEIJ1Trd4iG8Lw1BBcg3pZoLY38gvxf&X-Amz-Signature=63a48692b316f459553e5fda7c2c974c57e97691a988c9ce785dbdc21bd187ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMCDWFA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4gVxSWkUU5Uhds8FSH7BvypQjAvrHLly2TPxg92ZWZAiEAxRagIEe5Zwa95fD07fHTMf1ilHD%2FPf2uKNtv1YRIO00qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLilYhxAE1d5QXXQircA9ttgEwZtIrL4icfn8zRSPr3hzGzzCt4Y3VF%2BtR3ysAIpXG9rfISvMRZXA%2FRRN42y%2BplQ9sFkxv1tWCpNogJN49Mf7WDsimLHTUo8HL1W5ANw0lG2kJJvUYDmwNI%2FWeS8C3gLQGxexf0hotpQNF%2FEYXz%2FjqgkdGGgY0sJI9PgLZpSh1gK3%2BpRC9Flz1OVUg%2FsGA559YXMYnsHwAijEHZkUz1n7f6R1JviX44Ckz7oUesuLaiT%2FCLNAh01C1oZGmexgXEgoMKq9kGfB32ZdGOGjhwJOc%2BfWc9x4nO%2B%2B%2FRN3WL21P0eZSE0SJmqsaaTnCyEwCv8Y8wiikd1esaHVxY%2FVDzvKJVPPBKHUULtjDEEMkiHG1FTEBkEtH%2FXe2iFpJjT7SgsEAA09HKs5fENvAPQKwj6PMDAuuID6LqHWNUIYKLrLQlBYMiSk2QlnXO7vYctjAG%2FoborrLBU2MVKGx8OW85z2FQUlaMKz%2BMn12xzE4Vxro3LYFhDlWuBUB95ZWHbLdn%2FB8M17BnZfGvBM92nFHTw7NmrVsP7xoAEb9ICEstQaQKVb1Ht8qN5qfVVyi2BcxGE2%2BRJCIgrwYpg%2FdueB05GpIGCZ74rWpR%2BSwKTVfOHRLtsH1ToNkQ4UZjMK6DtsMGOqUB5preo8pH%2FDJreKDAsGONVr8nuTJK9gDMNORLliRPcRo21iJbqNPFqTZ67nAh4ux8LEpKfsu8jAnA3ltdOZ6V4JnqaDudhcQfeXqPFBdLE%2F3fUDouWYgYFpr1gImF%2FimispdKbACrcHHQ610RJknIOKlRSqxAutEKdR2KYrnCS3wAKMix7tef43vj3KymduEIJ1Trd4iG8Lw1BBcg3pZoLY38gvxf&X-Amz-Signature=a8de92e0a6a91daece0ef5946cf63b9884f3d661903d561b93abe0197df2d4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMCDWFA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4gVxSWkUU5Uhds8FSH7BvypQjAvrHLly2TPxg92ZWZAiEAxRagIEe5Zwa95fD07fHTMf1ilHD%2FPf2uKNtv1YRIO00qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLilYhxAE1d5QXXQircA9ttgEwZtIrL4icfn8zRSPr3hzGzzCt4Y3VF%2BtR3ysAIpXG9rfISvMRZXA%2FRRN42y%2BplQ9sFkxv1tWCpNogJN49Mf7WDsimLHTUo8HL1W5ANw0lG2kJJvUYDmwNI%2FWeS8C3gLQGxexf0hotpQNF%2FEYXz%2FjqgkdGGgY0sJI9PgLZpSh1gK3%2BpRC9Flz1OVUg%2FsGA559YXMYnsHwAijEHZkUz1n7f6R1JviX44Ckz7oUesuLaiT%2FCLNAh01C1oZGmexgXEgoMKq9kGfB32ZdGOGjhwJOc%2BfWc9x4nO%2B%2B%2FRN3WL21P0eZSE0SJmqsaaTnCyEwCv8Y8wiikd1esaHVxY%2FVDzvKJVPPBKHUULtjDEEMkiHG1FTEBkEtH%2FXe2iFpJjT7SgsEAA09HKs5fENvAPQKwj6PMDAuuID6LqHWNUIYKLrLQlBYMiSk2QlnXO7vYctjAG%2FoborrLBU2MVKGx8OW85z2FQUlaMKz%2BMn12xzE4Vxro3LYFhDlWuBUB95ZWHbLdn%2FB8M17BnZfGvBM92nFHTw7NmrVsP7xoAEb9ICEstQaQKVb1Ht8qN5qfVVyi2BcxGE2%2BRJCIgrwYpg%2FdueB05GpIGCZ74rWpR%2BSwKTVfOHRLtsH1ToNkQ4UZjMK6DtsMGOqUB5preo8pH%2FDJreKDAsGONVr8nuTJK9gDMNORLliRPcRo21iJbqNPFqTZ67nAh4ux8LEpKfsu8jAnA3ltdOZ6V4JnqaDudhcQfeXqPFBdLE%2F3fUDouWYgYFpr1gImF%2FimispdKbACrcHHQ610RJknIOKlRSqxAutEKdR2KYrnCS3wAKMix7tef43vj3KymduEIJ1Trd4iG8Lw1BBcg3pZoLY38gvxf&X-Amz-Signature=113c77e2423622a950a761315fd6992af6bf3576309d7f7f4ef2967a4b4bf710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMCDWFA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4gVxSWkUU5Uhds8FSH7BvypQjAvrHLly2TPxg92ZWZAiEAxRagIEe5Zwa95fD07fHTMf1ilHD%2FPf2uKNtv1YRIO00qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLilYhxAE1d5QXXQircA9ttgEwZtIrL4icfn8zRSPr3hzGzzCt4Y3VF%2BtR3ysAIpXG9rfISvMRZXA%2FRRN42y%2BplQ9sFkxv1tWCpNogJN49Mf7WDsimLHTUo8HL1W5ANw0lG2kJJvUYDmwNI%2FWeS8C3gLQGxexf0hotpQNF%2FEYXz%2FjqgkdGGgY0sJI9PgLZpSh1gK3%2BpRC9Flz1OVUg%2FsGA559YXMYnsHwAijEHZkUz1n7f6R1JviX44Ckz7oUesuLaiT%2FCLNAh01C1oZGmexgXEgoMKq9kGfB32ZdGOGjhwJOc%2BfWc9x4nO%2B%2B%2FRN3WL21P0eZSE0SJmqsaaTnCyEwCv8Y8wiikd1esaHVxY%2FVDzvKJVPPBKHUULtjDEEMkiHG1FTEBkEtH%2FXe2iFpJjT7SgsEAA09HKs5fENvAPQKwj6PMDAuuID6LqHWNUIYKLrLQlBYMiSk2QlnXO7vYctjAG%2FoborrLBU2MVKGx8OW85z2FQUlaMKz%2BMn12xzE4Vxro3LYFhDlWuBUB95ZWHbLdn%2FB8M17BnZfGvBM92nFHTw7NmrVsP7xoAEb9ICEstQaQKVb1Ht8qN5qfVVyi2BcxGE2%2BRJCIgrwYpg%2FdueB05GpIGCZ74rWpR%2BSwKTVfOHRLtsH1ToNkQ4UZjMK6DtsMGOqUB5preo8pH%2FDJreKDAsGONVr8nuTJK9gDMNORLliRPcRo21iJbqNPFqTZ67nAh4ux8LEpKfsu8jAnA3ltdOZ6V4JnqaDudhcQfeXqPFBdLE%2F3fUDouWYgYFpr1gImF%2FimispdKbACrcHHQ610RJknIOKlRSqxAutEKdR2KYrnCS3wAKMix7tef43vj3KymduEIJ1Trd4iG8Lw1BBcg3pZoLY38gvxf&X-Amz-Signature=255e71481a23c0dd4c9b0ad0cb74a3d70b87573abffcdd2e2b3ba670d00359e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMCDWFA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4gVxSWkUU5Uhds8FSH7BvypQjAvrHLly2TPxg92ZWZAiEAxRagIEe5Zwa95fD07fHTMf1ilHD%2FPf2uKNtv1YRIO00qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLilYhxAE1d5QXXQircA9ttgEwZtIrL4icfn8zRSPr3hzGzzCt4Y3VF%2BtR3ysAIpXG9rfISvMRZXA%2FRRN42y%2BplQ9sFkxv1tWCpNogJN49Mf7WDsimLHTUo8HL1W5ANw0lG2kJJvUYDmwNI%2FWeS8C3gLQGxexf0hotpQNF%2FEYXz%2FjqgkdGGgY0sJI9PgLZpSh1gK3%2BpRC9Flz1OVUg%2FsGA559YXMYnsHwAijEHZkUz1n7f6R1JviX44Ckz7oUesuLaiT%2FCLNAh01C1oZGmexgXEgoMKq9kGfB32ZdGOGjhwJOc%2BfWc9x4nO%2B%2B%2FRN3WL21P0eZSE0SJmqsaaTnCyEwCv8Y8wiikd1esaHVxY%2FVDzvKJVPPBKHUULtjDEEMkiHG1FTEBkEtH%2FXe2iFpJjT7SgsEAA09HKs5fENvAPQKwj6PMDAuuID6LqHWNUIYKLrLQlBYMiSk2QlnXO7vYctjAG%2FoborrLBU2MVKGx8OW85z2FQUlaMKz%2BMn12xzE4Vxro3LYFhDlWuBUB95ZWHbLdn%2FB8M17BnZfGvBM92nFHTw7NmrVsP7xoAEb9ICEstQaQKVb1Ht8qN5qfVVyi2BcxGE2%2BRJCIgrwYpg%2FdueB05GpIGCZ74rWpR%2BSwKTVfOHRLtsH1ToNkQ4UZjMK6DtsMGOqUB5preo8pH%2FDJreKDAsGONVr8nuTJK9gDMNORLliRPcRo21iJbqNPFqTZ67nAh4ux8LEpKfsu8jAnA3ltdOZ6V4JnqaDudhcQfeXqPFBdLE%2F3fUDouWYgYFpr1gImF%2FimispdKbACrcHHQ610RJknIOKlRSqxAutEKdR2KYrnCS3wAKMix7tef43vj3KymduEIJ1Trd4iG8Lw1BBcg3pZoLY38gvxf&X-Amz-Signature=7615611b66736a753d49e026c0a28c50626b462ef2d37f494de5c694c98f4494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
