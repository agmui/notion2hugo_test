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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSNELCAJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDI70oWz%2BMfa7bgZCQyVywi7QMefGxIr6XKMzqYbKfZHgIgN233K6nYztg5u5u7fYLgJzTES%2F3cJ%2BYmiYTQM66lVhsq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE3RWzr3m1QnWM5u9CrcA2eD7qtBzcY%2FcHzKi%2FEhWbvcaKFpukLegbfcdRipafaSIbjCtaqe1MP%2BVNKc5IPoZhd%2B%2FBEOJwOGf1jn9cT8vKHE3fE7lgTUsWF3JjaF%2BEZpFNOCslYrAYluH8XutTg6%2BYuB9QI0r%2BVv6ufFWPlK3cU0lRoranlDjousw14EiwjtsfcZ0wEAHQcXvxU%2BcFnuh52syA6VNZLqfIP5xe2qhnCzXhi3Jmc0C2Td%2Fs4bBhTM0uM3J%2B4Q9AgbK3zprOnrFS43TntxDRmvQGvhfU8%2FJCpmmBKdnzTVSqfK9umipr%2BAqyW4%2FombB4L18gAgwIgc7ouJm9gjTRG9hgAgMdFQmqM6CIv6TCFtx3%2FG7YfV29dwJPfQaonHdyLdkss2UR6U5XqMMGAfHa2a7GgQFsBjXGhvxNJLUJsvHQutmlrfqDUxQ8G%2FHWnZLtOMwO1A61hPIXtGAMVu%2FtCvaKEz0IUy0BO2DNOv84PI886NupXzAcI6fQplGKsWouAYJDXw4fkbvFuHxw%2FRvugTcAY7sbA1TEkKD8EjKoUv6IhKTaTSmyXgegwzXOyfW049p1DDjzmEHFbch9%2FWuYgK0uvg0FFXvbZGBYFiuUUqMPulUv7eEqz%2FEBtQMRTC%2BhoNxwQfMN6AxsEGOqUB6lQWCUrmurbvOyeo3V%2BT6QOCkFLiJCGB4Av%2FEkFhocEDK1%2BCsbXpsOZCu0ul8weLK20hqndIWFBr3cjVaj6%2Fg1D32f8KhEO6LkHeknjbPvqLUJRUw92hwecQ1rPzIDCNum8ZeGxu5qYy5U3eKr0KZQPSpBN99WE9c5IF8Um0f95pzS6MqPBNDghWjwBxXq2398pO0uMndtkLFkIH%2FLuR1lP%2FxPeK&X-Amz-Signature=93411d149c6902c8d2a55fa91c67869d86590ee8a1e649d30110b241eca9dfda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSNELCAJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDI70oWz%2BMfa7bgZCQyVywi7QMefGxIr6XKMzqYbKfZHgIgN233K6nYztg5u5u7fYLgJzTES%2F3cJ%2BYmiYTQM66lVhsq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE3RWzr3m1QnWM5u9CrcA2eD7qtBzcY%2FcHzKi%2FEhWbvcaKFpukLegbfcdRipafaSIbjCtaqe1MP%2BVNKc5IPoZhd%2B%2FBEOJwOGf1jn9cT8vKHE3fE7lgTUsWF3JjaF%2BEZpFNOCslYrAYluH8XutTg6%2BYuB9QI0r%2BVv6ufFWPlK3cU0lRoranlDjousw14EiwjtsfcZ0wEAHQcXvxU%2BcFnuh52syA6VNZLqfIP5xe2qhnCzXhi3Jmc0C2Td%2Fs4bBhTM0uM3J%2B4Q9AgbK3zprOnrFS43TntxDRmvQGvhfU8%2FJCpmmBKdnzTVSqfK9umipr%2BAqyW4%2FombB4L18gAgwIgc7ouJm9gjTRG9hgAgMdFQmqM6CIv6TCFtx3%2FG7YfV29dwJPfQaonHdyLdkss2UR6U5XqMMGAfHa2a7GgQFsBjXGhvxNJLUJsvHQutmlrfqDUxQ8G%2FHWnZLtOMwO1A61hPIXtGAMVu%2FtCvaKEz0IUy0BO2DNOv84PI886NupXzAcI6fQplGKsWouAYJDXw4fkbvFuHxw%2FRvugTcAY7sbA1TEkKD8EjKoUv6IhKTaTSmyXgegwzXOyfW049p1DDjzmEHFbch9%2FWuYgK0uvg0FFXvbZGBYFiuUUqMPulUv7eEqz%2FEBtQMRTC%2BhoNxwQfMN6AxsEGOqUB6lQWCUrmurbvOyeo3V%2BT6QOCkFLiJCGB4Av%2FEkFhocEDK1%2BCsbXpsOZCu0ul8weLK20hqndIWFBr3cjVaj6%2Fg1D32f8KhEO6LkHeknjbPvqLUJRUw92hwecQ1rPzIDCNum8ZeGxu5qYy5U3eKr0KZQPSpBN99WE9c5IF8Um0f95pzS6MqPBNDghWjwBxXq2398pO0uMndtkLFkIH%2FLuR1lP%2FxPeK&X-Amz-Signature=9bf0974a2360e70a7ef59ca0d5da0a8a2258d481a8bf60eac087b8d1a9f54ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSNELCAJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDI70oWz%2BMfa7bgZCQyVywi7QMefGxIr6XKMzqYbKfZHgIgN233K6nYztg5u5u7fYLgJzTES%2F3cJ%2BYmiYTQM66lVhsq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE3RWzr3m1QnWM5u9CrcA2eD7qtBzcY%2FcHzKi%2FEhWbvcaKFpukLegbfcdRipafaSIbjCtaqe1MP%2BVNKc5IPoZhd%2B%2FBEOJwOGf1jn9cT8vKHE3fE7lgTUsWF3JjaF%2BEZpFNOCslYrAYluH8XutTg6%2BYuB9QI0r%2BVv6ufFWPlK3cU0lRoranlDjousw14EiwjtsfcZ0wEAHQcXvxU%2BcFnuh52syA6VNZLqfIP5xe2qhnCzXhi3Jmc0C2Td%2Fs4bBhTM0uM3J%2B4Q9AgbK3zprOnrFS43TntxDRmvQGvhfU8%2FJCpmmBKdnzTVSqfK9umipr%2BAqyW4%2FombB4L18gAgwIgc7ouJm9gjTRG9hgAgMdFQmqM6CIv6TCFtx3%2FG7YfV29dwJPfQaonHdyLdkss2UR6U5XqMMGAfHa2a7GgQFsBjXGhvxNJLUJsvHQutmlrfqDUxQ8G%2FHWnZLtOMwO1A61hPIXtGAMVu%2FtCvaKEz0IUy0BO2DNOv84PI886NupXzAcI6fQplGKsWouAYJDXw4fkbvFuHxw%2FRvugTcAY7sbA1TEkKD8EjKoUv6IhKTaTSmyXgegwzXOyfW049p1DDjzmEHFbch9%2FWuYgK0uvg0FFXvbZGBYFiuUUqMPulUv7eEqz%2FEBtQMRTC%2BhoNxwQfMN6AxsEGOqUB6lQWCUrmurbvOyeo3V%2BT6QOCkFLiJCGB4Av%2FEkFhocEDK1%2BCsbXpsOZCu0ul8weLK20hqndIWFBr3cjVaj6%2Fg1D32f8KhEO6LkHeknjbPvqLUJRUw92hwecQ1rPzIDCNum8ZeGxu5qYy5U3eKr0KZQPSpBN99WE9c5IF8Um0f95pzS6MqPBNDghWjwBxXq2398pO0uMndtkLFkIH%2FLuR1lP%2FxPeK&X-Amz-Signature=ba100c3ec96252630ea2df553037ca58fc64c80cf2980ca7ff9a14a88472b9be&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSNELCAJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDI70oWz%2BMfa7bgZCQyVywi7QMefGxIr6XKMzqYbKfZHgIgN233K6nYztg5u5u7fYLgJzTES%2F3cJ%2BYmiYTQM66lVhsq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE3RWzr3m1QnWM5u9CrcA2eD7qtBzcY%2FcHzKi%2FEhWbvcaKFpukLegbfcdRipafaSIbjCtaqe1MP%2BVNKc5IPoZhd%2B%2FBEOJwOGf1jn9cT8vKHE3fE7lgTUsWF3JjaF%2BEZpFNOCslYrAYluH8XutTg6%2BYuB9QI0r%2BVv6ufFWPlK3cU0lRoranlDjousw14EiwjtsfcZ0wEAHQcXvxU%2BcFnuh52syA6VNZLqfIP5xe2qhnCzXhi3Jmc0C2Td%2Fs4bBhTM0uM3J%2B4Q9AgbK3zprOnrFS43TntxDRmvQGvhfU8%2FJCpmmBKdnzTVSqfK9umipr%2BAqyW4%2FombB4L18gAgwIgc7ouJm9gjTRG9hgAgMdFQmqM6CIv6TCFtx3%2FG7YfV29dwJPfQaonHdyLdkss2UR6U5XqMMGAfHa2a7GgQFsBjXGhvxNJLUJsvHQutmlrfqDUxQ8G%2FHWnZLtOMwO1A61hPIXtGAMVu%2FtCvaKEz0IUy0BO2DNOv84PI886NupXzAcI6fQplGKsWouAYJDXw4fkbvFuHxw%2FRvugTcAY7sbA1TEkKD8EjKoUv6IhKTaTSmyXgegwzXOyfW049p1DDjzmEHFbch9%2FWuYgK0uvg0FFXvbZGBYFiuUUqMPulUv7eEqz%2FEBtQMRTC%2BhoNxwQfMN6AxsEGOqUB6lQWCUrmurbvOyeo3V%2BT6QOCkFLiJCGB4Av%2FEkFhocEDK1%2BCsbXpsOZCu0ul8weLK20hqndIWFBr3cjVaj6%2Fg1D32f8KhEO6LkHeknjbPvqLUJRUw92hwecQ1rPzIDCNum8ZeGxu5qYy5U3eKr0KZQPSpBN99WE9c5IF8Um0f95pzS6MqPBNDghWjwBxXq2398pO0uMndtkLFkIH%2FLuR1lP%2FxPeK&X-Amz-Signature=127159724126ce87a959ca23e19ee3a545cacf9e0a1fcae217dd559a643579b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSNELCAJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDI70oWz%2BMfa7bgZCQyVywi7QMefGxIr6XKMzqYbKfZHgIgN233K6nYztg5u5u7fYLgJzTES%2F3cJ%2BYmiYTQM66lVhsq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE3RWzr3m1QnWM5u9CrcA2eD7qtBzcY%2FcHzKi%2FEhWbvcaKFpukLegbfcdRipafaSIbjCtaqe1MP%2BVNKc5IPoZhd%2B%2FBEOJwOGf1jn9cT8vKHE3fE7lgTUsWF3JjaF%2BEZpFNOCslYrAYluH8XutTg6%2BYuB9QI0r%2BVv6ufFWPlK3cU0lRoranlDjousw14EiwjtsfcZ0wEAHQcXvxU%2BcFnuh52syA6VNZLqfIP5xe2qhnCzXhi3Jmc0C2Td%2Fs4bBhTM0uM3J%2B4Q9AgbK3zprOnrFS43TntxDRmvQGvhfU8%2FJCpmmBKdnzTVSqfK9umipr%2BAqyW4%2FombB4L18gAgwIgc7ouJm9gjTRG9hgAgMdFQmqM6CIv6TCFtx3%2FG7YfV29dwJPfQaonHdyLdkss2UR6U5XqMMGAfHa2a7GgQFsBjXGhvxNJLUJsvHQutmlrfqDUxQ8G%2FHWnZLtOMwO1A61hPIXtGAMVu%2FtCvaKEz0IUy0BO2DNOv84PI886NupXzAcI6fQplGKsWouAYJDXw4fkbvFuHxw%2FRvugTcAY7sbA1TEkKD8EjKoUv6IhKTaTSmyXgegwzXOyfW049p1DDjzmEHFbch9%2FWuYgK0uvg0FFXvbZGBYFiuUUqMPulUv7eEqz%2FEBtQMRTC%2BhoNxwQfMN6AxsEGOqUB6lQWCUrmurbvOyeo3V%2BT6QOCkFLiJCGB4Av%2FEkFhocEDK1%2BCsbXpsOZCu0ul8weLK20hqndIWFBr3cjVaj6%2Fg1D32f8KhEO6LkHeknjbPvqLUJRUw92hwecQ1rPzIDCNum8ZeGxu5qYy5U3eKr0KZQPSpBN99WE9c5IF8Um0f95pzS6MqPBNDghWjwBxXq2398pO0uMndtkLFkIH%2FLuR1lP%2FxPeK&X-Amz-Signature=d5640f5734631ea23fbfe1d7a322b5cf2b438df8e7e07cbaf711ef2dc31881c7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSNELCAJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDI70oWz%2BMfa7bgZCQyVywi7QMefGxIr6XKMzqYbKfZHgIgN233K6nYztg5u5u7fYLgJzTES%2F3cJ%2BYmiYTQM66lVhsq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE3RWzr3m1QnWM5u9CrcA2eD7qtBzcY%2FcHzKi%2FEhWbvcaKFpukLegbfcdRipafaSIbjCtaqe1MP%2BVNKc5IPoZhd%2B%2FBEOJwOGf1jn9cT8vKHE3fE7lgTUsWF3JjaF%2BEZpFNOCslYrAYluH8XutTg6%2BYuB9QI0r%2BVv6ufFWPlK3cU0lRoranlDjousw14EiwjtsfcZ0wEAHQcXvxU%2BcFnuh52syA6VNZLqfIP5xe2qhnCzXhi3Jmc0C2Td%2Fs4bBhTM0uM3J%2B4Q9AgbK3zprOnrFS43TntxDRmvQGvhfU8%2FJCpmmBKdnzTVSqfK9umipr%2BAqyW4%2FombB4L18gAgwIgc7ouJm9gjTRG9hgAgMdFQmqM6CIv6TCFtx3%2FG7YfV29dwJPfQaonHdyLdkss2UR6U5XqMMGAfHa2a7GgQFsBjXGhvxNJLUJsvHQutmlrfqDUxQ8G%2FHWnZLtOMwO1A61hPIXtGAMVu%2FtCvaKEz0IUy0BO2DNOv84PI886NupXzAcI6fQplGKsWouAYJDXw4fkbvFuHxw%2FRvugTcAY7sbA1TEkKD8EjKoUv6IhKTaTSmyXgegwzXOyfW049p1DDjzmEHFbch9%2FWuYgK0uvg0FFXvbZGBYFiuUUqMPulUv7eEqz%2FEBtQMRTC%2BhoNxwQfMN6AxsEGOqUB6lQWCUrmurbvOyeo3V%2BT6QOCkFLiJCGB4Av%2FEkFhocEDK1%2BCsbXpsOZCu0ul8weLK20hqndIWFBr3cjVaj6%2Fg1D32f8KhEO6LkHeknjbPvqLUJRUw92hwecQ1rPzIDCNum8ZeGxu5qYy5U3eKr0KZQPSpBN99WE9c5IF8Um0f95pzS6MqPBNDghWjwBxXq2398pO0uMndtkLFkIH%2FLuR1lP%2FxPeK&X-Amz-Signature=b23bc392c767e1bf28f963ce6a5728684fde864c5adc6ce67655be7f1eb0dce4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSNELCAJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDI70oWz%2BMfa7bgZCQyVywi7QMefGxIr6XKMzqYbKfZHgIgN233K6nYztg5u5u7fYLgJzTES%2F3cJ%2BYmiYTQM66lVhsq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE3RWzr3m1QnWM5u9CrcA2eD7qtBzcY%2FcHzKi%2FEhWbvcaKFpukLegbfcdRipafaSIbjCtaqe1MP%2BVNKc5IPoZhd%2B%2FBEOJwOGf1jn9cT8vKHE3fE7lgTUsWF3JjaF%2BEZpFNOCslYrAYluH8XutTg6%2BYuB9QI0r%2BVv6ufFWPlK3cU0lRoranlDjousw14EiwjtsfcZ0wEAHQcXvxU%2BcFnuh52syA6VNZLqfIP5xe2qhnCzXhi3Jmc0C2Td%2Fs4bBhTM0uM3J%2B4Q9AgbK3zprOnrFS43TntxDRmvQGvhfU8%2FJCpmmBKdnzTVSqfK9umipr%2BAqyW4%2FombB4L18gAgwIgc7ouJm9gjTRG9hgAgMdFQmqM6CIv6TCFtx3%2FG7YfV29dwJPfQaonHdyLdkss2UR6U5XqMMGAfHa2a7GgQFsBjXGhvxNJLUJsvHQutmlrfqDUxQ8G%2FHWnZLtOMwO1A61hPIXtGAMVu%2FtCvaKEz0IUy0BO2DNOv84PI886NupXzAcI6fQplGKsWouAYJDXw4fkbvFuHxw%2FRvugTcAY7sbA1TEkKD8EjKoUv6IhKTaTSmyXgegwzXOyfW049p1DDjzmEHFbch9%2FWuYgK0uvg0FFXvbZGBYFiuUUqMPulUv7eEqz%2FEBtQMRTC%2BhoNxwQfMN6AxsEGOqUB6lQWCUrmurbvOyeo3V%2BT6QOCkFLiJCGB4Av%2FEkFhocEDK1%2BCsbXpsOZCu0ul8weLK20hqndIWFBr3cjVaj6%2Fg1D32f8KhEO6LkHeknjbPvqLUJRUw92hwecQ1rPzIDCNum8ZeGxu5qYy5U3eKr0KZQPSpBN99WE9c5IF8Um0f95pzS6MqPBNDghWjwBxXq2398pO0uMndtkLFkIH%2FLuR1lP%2FxPeK&X-Amz-Signature=0474d7bdf10ee3ad48e6483ab6fffc8d55399e00a32531c446c98d954294c0eb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
