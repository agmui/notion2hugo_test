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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVFTBVD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsLTILbFinjHFJJ5qMPNvvbMkBjXtGc9Zd7haBKmgyoAiEAqil4aBH3pFezGGE0Y03EuIoVqzabhxqBYAweuhrhe5MqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhF7IuWj%2FIV47Q5OircAyGVKOnv08M%2BRC3sGJVAqxxeHwfcKmC2e1QJkABUrmUBbYlaAkCgxD4gJzo1FpyC7uXRmRaYqJ0VHy6sAa30SjUZOE3wDGMfLKiWKqs%2FJzgAVb70xkk9TO%2BrP8PkeR8reSqsQrqb0kvjpZHwEy1Y2vzFngX0iOd5ErHLYQE9weU9%2FKX8cNgHJNDzmYh6Xbt8ZdXEhbVgI9SpE9cA1fUDS2uQf9vWxwgcOxbARJH1O9yOjPnrkkUC40yKVUhKbY6yE4oOJNSA8PY8KmRsuZ3CNj33W6rrhOSdf7b49vVJZu1rKkX4Ja687JC6QxZoXRSqkoOIvhVEibu7R%2FUO01hvEHhbhqxc6HTTZB6%2FUhRqR%2FGuDzrEjXfNzufvJ5cn98wx68fD9TYIzafzVTOj4tq%2BXYNhCPeXEHpROA7dr2LKhKuqmC2bg3VrWrqe%2Bj%2Bzb7YOMyA8%2Fcjzu3pK9jlL7EubuvfR58CgQRpip%2FMQjXy%2FgqeI0D74lYX4BLijvXuqSEmWtHxmQQ4afAQRqEknjPvtgGZhseSB%2FmyGTSt74Sr6%2F4kyoJrAT5%2BOifMqmPFPr0ztfEo2KT90j11EL4bxQGcgFMlXNhBd4Px%2FrGIeesnPaq94qtVCYAxS%2FK2uMBSGMNOGo70GOqUBFZz6xzjHk9Nedd4OiFUeZEQ%2F78V6wm8wntor7cdnL4wrRchUpdpAtVIGjD%2FQhtmI0x6cd%2FVmvwMpSykH37xstAQBdWyCwLDMrYeYzZ51fAsk2M2delfQPH1jyvccqUGS5%2B5RpeMiDaeoZSjGvTlEI5WTNAatBNTLsAti4O1b%2FwPEB%2BgBy43gbj%2BU%2F1vwKCNG1lXYUcoYpv3x7UG3F1XHmnsvP38z&X-Amz-Signature=a2e7a30911ad57ad53631d9b8c7728b11dda2d0eb935959857c1f57ec767f138&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVFTBVD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsLTILbFinjHFJJ5qMPNvvbMkBjXtGc9Zd7haBKmgyoAiEAqil4aBH3pFezGGE0Y03EuIoVqzabhxqBYAweuhrhe5MqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhF7IuWj%2FIV47Q5OircAyGVKOnv08M%2BRC3sGJVAqxxeHwfcKmC2e1QJkABUrmUBbYlaAkCgxD4gJzo1FpyC7uXRmRaYqJ0VHy6sAa30SjUZOE3wDGMfLKiWKqs%2FJzgAVb70xkk9TO%2BrP8PkeR8reSqsQrqb0kvjpZHwEy1Y2vzFngX0iOd5ErHLYQE9weU9%2FKX8cNgHJNDzmYh6Xbt8ZdXEhbVgI9SpE9cA1fUDS2uQf9vWxwgcOxbARJH1O9yOjPnrkkUC40yKVUhKbY6yE4oOJNSA8PY8KmRsuZ3CNj33W6rrhOSdf7b49vVJZu1rKkX4Ja687JC6QxZoXRSqkoOIvhVEibu7R%2FUO01hvEHhbhqxc6HTTZB6%2FUhRqR%2FGuDzrEjXfNzufvJ5cn98wx68fD9TYIzafzVTOj4tq%2BXYNhCPeXEHpROA7dr2LKhKuqmC2bg3VrWrqe%2Bj%2Bzb7YOMyA8%2Fcjzu3pK9jlL7EubuvfR58CgQRpip%2FMQjXy%2FgqeI0D74lYX4BLijvXuqSEmWtHxmQQ4afAQRqEknjPvtgGZhseSB%2FmyGTSt74Sr6%2F4kyoJrAT5%2BOifMqmPFPr0ztfEo2KT90j11EL4bxQGcgFMlXNhBd4Px%2FrGIeesnPaq94qtVCYAxS%2FK2uMBSGMNOGo70GOqUBFZz6xzjHk9Nedd4OiFUeZEQ%2F78V6wm8wntor7cdnL4wrRchUpdpAtVIGjD%2FQhtmI0x6cd%2FVmvwMpSykH37xstAQBdWyCwLDMrYeYzZ51fAsk2M2delfQPH1jyvccqUGS5%2B5RpeMiDaeoZSjGvTlEI5WTNAatBNTLsAti4O1b%2FwPEB%2BgBy43gbj%2BU%2F1vwKCNG1lXYUcoYpv3x7UG3F1XHmnsvP38z&X-Amz-Signature=d71d25b805224d5b2bc3b27d44dab82a0897463bdcd053a1faad2f2b753cd748&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVFTBVD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsLTILbFinjHFJJ5qMPNvvbMkBjXtGc9Zd7haBKmgyoAiEAqil4aBH3pFezGGE0Y03EuIoVqzabhxqBYAweuhrhe5MqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhF7IuWj%2FIV47Q5OircAyGVKOnv08M%2BRC3sGJVAqxxeHwfcKmC2e1QJkABUrmUBbYlaAkCgxD4gJzo1FpyC7uXRmRaYqJ0VHy6sAa30SjUZOE3wDGMfLKiWKqs%2FJzgAVb70xkk9TO%2BrP8PkeR8reSqsQrqb0kvjpZHwEy1Y2vzFngX0iOd5ErHLYQE9weU9%2FKX8cNgHJNDzmYh6Xbt8ZdXEhbVgI9SpE9cA1fUDS2uQf9vWxwgcOxbARJH1O9yOjPnrkkUC40yKVUhKbY6yE4oOJNSA8PY8KmRsuZ3CNj33W6rrhOSdf7b49vVJZu1rKkX4Ja687JC6QxZoXRSqkoOIvhVEibu7R%2FUO01hvEHhbhqxc6HTTZB6%2FUhRqR%2FGuDzrEjXfNzufvJ5cn98wx68fD9TYIzafzVTOj4tq%2BXYNhCPeXEHpROA7dr2LKhKuqmC2bg3VrWrqe%2Bj%2Bzb7YOMyA8%2Fcjzu3pK9jlL7EubuvfR58CgQRpip%2FMQjXy%2FgqeI0D74lYX4BLijvXuqSEmWtHxmQQ4afAQRqEknjPvtgGZhseSB%2FmyGTSt74Sr6%2F4kyoJrAT5%2BOifMqmPFPr0ztfEo2KT90j11EL4bxQGcgFMlXNhBd4Px%2FrGIeesnPaq94qtVCYAxS%2FK2uMBSGMNOGo70GOqUBFZz6xzjHk9Nedd4OiFUeZEQ%2F78V6wm8wntor7cdnL4wrRchUpdpAtVIGjD%2FQhtmI0x6cd%2FVmvwMpSykH37xstAQBdWyCwLDMrYeYzZ51fAsk2M2delfQPH1jyvccqUGS5%2B5RpeMiDaeoZSjGvTlEI5WTNAatBNTLsAti4O1b%2FwPEB%2BgBy43gbj%2BU%2F1vwKCNG1lXYUcoYpv3x7UG3F1XHmnsvP38z&X-Amz-Signature=534c1db522057aaf9af06bdb57bbb6f6087c46bfd78550c3ce4b5a8ab1798ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVFTBVD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsLTILbFinjHFJJ5qMPNvvbMkBjXtGc9Zd7haBKmgyoAiEAqil4aBH3pFezGGE0Y03EuIoVqzabhxqBYAweuhrhe5MqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhF7IuWj%2FIV47Q5OircAyGVKOnv08M%2BRC3sGJVAqxxeHwfcKmC2e1QJkABUrmUBbYlaAkCgxD4gJzo1FpyC7uXRmRaYqJ0VHy6sAa30SjUZOE3wDGMfLKiWKqs%2FJzgAVb70xkk9TO%2BrP8PkeR8reSqsQrqb0kvjpZHwEy1Y2vzFngX0iOd5ErHLYQE9weU9%2FKX8cNgHJNDzmYh6Xbt8ZdXEhbVgI9SpE9cA1fUDS2uQf9vWxwgcOxbARJH1O9yOjPnrkkUC40yKVUhKbY6yE4oOJNSA8PY8KmRsuZ3CNj33W6rrhOSdf7b49vVJZu1rKkX4Ja687JC6QxZoXRSqkoOIvhVEibu7R%2FUO01hvEHhbhqxc6HTTZB6%2FUhRqR%2FGuDzrEjXfNzufvJ5cn98wx68fD9TYIzafzVTOj4tq%2BXYNhCPeXEHpROA7dr2LKhKuqmC2bg3VrWrqe%2Bj%2Bzb7YOMyA8%2Fcjzu3pK9jlL7EubuvfR58CgQRpip%2FMQjXy%2FgqeI0D74lYX4BLijvXuqSEmWtHxmQQ4afAQRqEknjPvtgGZhseSB%2FmyGTSt74Sr6%2F4kyoJrAT5%2BOifMqmPFPr0ztfEo2KT90j11EL4bxQGcgFMlXNhBd4Px%2FrGIeesnPaq94qtVCYAxS%2FK2uMBSGMNOGo70GOqUBFZz6xzjHk9Nedd4OiFUeZEQ%2F78V6wm8wntor7cdnL4wrRchUpdpAtVIGjD%2FQhtmI0x6cd%2FVmvwMpSykH37xstAQBdWyCwLDMrYeYzZ51fAsk2M2delfQPH1jyvccqUGS5%2B5RpeMiDaeoZSjGvTlEI5WTNAatBNTLsAti4O1b%2FwPEB%2BgBy43gbj%2BU%2F1vwKCNG1lXYUcoYpv3x7UG3F1XHmnsvP38z&X-Amz-Signature=d2351507f2973efa502927bd44bc2808562cb14a1074758b41ac79304ede3cfa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVFTBVD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsLTILbFinjHFJJ5qMPNvvbMkBjXtGc9Zd7haBKmgyoAiEAqil4aBH3pFezGGE0Y03EuIoVqzabhxqBYAweuhrhe5MqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhF7IuWj%2FIV47Q5OircAyGVKOnv08M%2BRC3sGJVAqxxeHwfcKmC2e1QJkABUrmUBbYlaAkCgxD4gJzo1FpyC7uXRmRaYqJ0VHy6sAa30SjUZOE3wDGMfLKiWKqs%2FJzgAVb70xkk9TO%2BrP8PkeR8reSqsQrqb0kvjpZHwEy1Y2vzFngX0iOd5ErHLYQE9weU9%2FKX8cNgHJNDzmYh6Xbt8ZdXEhbVgI9SpE9cA1fUDS2uQf9vWxwgcOxbARJH1O9yOjPnrkkUC40yKVUhKbY6yE4oOJNSA8PY8KmRsuZ3CNj33W6rrhOSdf7b49vVJZu1rKkX4Ja687JC6QxZoXRSqkoOIvhVEibu7R%2FUO01hvEHhbhqxc6HTTZB6%2FUhRqR%2FGuDzrEjXfNzufvJ5cn98wx68fD9TYIzafzVTOj4tq%2BXYNhCPeXEHpROA7dr2LKhKuqmC2bg3VrWrqe%2Bj%2Bzb7YOMyA8%2Fcjzu3pK9jlL7EubuvfR58CgQRpip%2FMQjXy%2FgqeI0D74lYX4BLijvXuqSEmWtHxmQQ4afAQRqEknjPvtgGZhseSB%2FmyGTSt74Sr6%2F4kyoJrAT5%2BOifMqmPFPr0ztfEo2KT90j11EL4bxQGcgFMlXNhBd4Px%2FrGIeesnPaq94qtVCYAxS%2FK2uMBSGMNOGo70GOqUBFZz6xzjHk9Nedd4OiFUeZEQ%2F78V6wm8wntor7cdnL4wrRchUpdpAtVIGjD%2FQhtmI0x6cd%2FVmvwMpSykH37xstAQBdWyCwLDMrYeYzZ51fAsk2M2delfQPH1jyvccqUGS5%2B5RpeMiDaeoZSjGvTlEI5WTNAatBNTLsAti4O1b%2FwPEB%2BgBy43gbj%2BU%2F1vwKCNG1lXYUcoYpv3x7UG3F1XHmnsvP38z&X-Amz-Signature=af0efe5782647a55f0cf0e0cc3e8b40db8c5de69ae0f8e890c37bbad09e43155&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVFTBVD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsLTILbFinjHFJJ5qMPNvvbMkBjXtGc9Zd7haBKmgyoAiEAqil4aBH3pFezGGE0Y03EuIoVqzabhxqBYAweuhrhe5MqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhF7IuWj%2FIV47Q5OircAyGVKOnv08M%2BRC3sGJVAqxxeHwfcKmC2e1QJkABUrmUBbYlaAkCgxD4gJzo1FpyC7uXRmRaYqJ0VHy6sAa30SjUZOE3wDGMfLKiWKqs%2FJzgAVb70xkk9TO%2BrP8PkeR8reSqsQrqb0kvjpZHwEy1Y2vzFngX0iOd5ErHLYQE9weU9%2FKX8cNgHJNDzmYh6Xbt8ZdXEhbVgI9SpE9cA1fUDS2uQf9vWxwgcOxbARJH1O9yOjPnrkkUC40yKVUhKbY6yE4oOJNSA8PY8KmRsuZ3CNj33W6rrhOSdf7b49vVJZu1rKkX4Ja687JC6QxZoXRSqkoOIvhVEibu7R%2FUO01hvEHhbhqxc6HTTZB6%2FUhRqR%2FGuDzrEjXfNzufvJ5cn98wx68fD9TYIzafzVTOj4tq%2BXYNhCPeXEHpROA7dr2LKhKuqmC2bg3VrWrqe%2Bj%2Bzb7YOMyA8%2Fcjzu3pK9jlL7EubuvfR58CgQRpip%2FMQjXy%2FgqeI0D74lYX4BLijvXuqSEmWtHxmQQ4afAQRqEknjPvtgGZhseSB%2FmyGTSt74Sr6%2F4kyoJrAT5%2BOifMqmPFPr0ztfEo2KT90j11EL4bxQGcgFMlXNhBd4Px%2FrGIeesnPaq94qtVCYAxS%2FK2uMBSGMNOGo70GOqUBFZz6xzjHk9Nedd4OiFUeZEQ%2F78V6wm8wntor7cdnL4wrRchUpdpAtVIGjD%2FQhtmI0x6cd%2FVmvwMpSykH37xstAQBdWyCwLDMrYeYzZ51fAsk2M2delfQPH1jyvccqUGS5%2B5RpeMiDaeoZSjGvTlEI5WTNAatBNTLsAti4O1b%2FwPEB%2BgBy43gbj%2BU%2F1vwKCNG1lXYUcoYpv3x7UG3F1XHmnsvP38z&X-Amz-Signature=ac45538d2665b4a9ddf57891e53ddb6c347f9970086f98e387b10ee4045295ad&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVFTBVD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsLTILbFinjHFJJ5qMPNvvbMkBjXtGc9Zd7haBKmgyoAiEAqil4aBH3pFezGGE0Y03EuIoVqzabhxqBYAweuhrhe5MqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhF7IuWj%2FIV47Q5OircAyGVKOnv08M%2BRC3sGJVAqxxeHwfcKmC2e1QJkABUrmUBbYlaAkCgxD4gJzo1FpyC7uXRmRaYqJ0VHy6sAa30SjUZOE3wDGMfLKiWKqs%2FJzgAVb70xkk9TO%2BrP8PkeR8reSqsQrqb0kvjpZHwEy1Y2vzFngX0iOd5ErHLYQE9weU9%2FKX8cNgHJNDzmYh6Xbt8ZdXEhbVgI9SpE9cA1fUDS2uQf9vWxwgcOxbARJH1O9yOjPnrkkUC40yKVUhKbY6yE4oOJNSA8PY8KmRsuZ3CNj33W6rrhOSdf7b49vVJZu1rKkX4Ja687JC6QxZoXRSqkoOIvhVEibu7R%2FUO01hvEHhbhqxc6HTTZB6%2FUhRqR%2FGuDzrEjXfNzufvJ5cn98wx68fD9TYIzafzVTOj4tq%2BXYNhCPeXEHpROA7dr2LKhKuqmC2bg3VrWrqe%2Bj%2Bzb7YOMyA8%2Fcjzu3pK9jlL7EubuvfR58CgQRpip%2FMQjXy%2FgqeI0D74lYX4BLijvXuqSEmWtHxmQQ4afAQRqEknjPvtgGZhseSB%2FmyGTSt74Sr6%2F4kyoJrAT5%2BOifMqmPFPr0ztfEo2KT90j11EL4bxQGcgFMlXNhBd4Px%2FrGIeesnPaq94qtVCYAxS%2FK2uMBSGMNOGo70GOqUBFZz6xzjHk9Nedd4OiFUeZEQ%2F78V6wm8wntor7cdnL4wrRchUpdpAtVIGjD%2FQhtmI0x6cd%2FVmvwMpSykH37xstAQBdWyCwLDMrYeYzZ51fAsk2M2delfQPH1jyvccqUGS5%2B5RpeMiDaeoZSjGvTlEI5WTNAatBNTLsAti4O1b%2FwPEB%2BgBy43gbj%2BU%2F1vwKCNG1lXYUcoYpv3x7UG3F1XHmnsvP38z&X-Amz-Signature=451c91d949800a1b473173a274d0d20fb61b971890063996ad049b988f99eef2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
