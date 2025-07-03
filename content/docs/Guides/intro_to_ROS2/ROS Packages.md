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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJVRTZ5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGA5KCmUeG2P9wzG6XyrStl%2F3xN9Rah%2BuWlRH74qfjTtAiB0W4Fnog13G%2F6uvS%2FgvgIxcoXBAiJ7i0PPddz4jZy4kSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwwBW%2FW7HuOqrCpXbKtwD2OWAT1DuMmCgCk6jBV4CJUgcQUb1Q0LPW6fgG9DiYKCRofRCCeHWuDYdk12oswRUYLsk2Fax9BC%2BJLT64EPlrZd2QBGA0Tby7afHG2AkxFqhyGBe6rq9s9uUJgXMDad6qYl6E24Bj2spCRY%2BfzE3PPvgC4YDwQCMYHe7c8otgESso5yz3F7UMkJr%2BzeqnAsICEUI202f97nG7vBi%2FXZiefUvnFMaE1yNVnfnFUPSxp6e9hdzBWwOSEBhHdU%2FbTVpb7wthsebgYOLgUmqT4LoOABCBS6IFEdS6ZeDwrMxnAHZzu7nWQY1wq3h12A7b1NIi3zCc6km3qHiWDcTNHLvKSTFqLWm8pL4l3Ss2d97Sjy7DtDgwxEzo98irCIu8Yk9UBx5nifAXl9kJ8p9rOcq9qgzjg01emEoBPF7EJRW7grRu%2B5r3G9gGV5uI%2BmtkDShwZY4z1vXDVoJxd%2FRRWjCYJzpexfdsUPzcCNZhUFLgi0QIrW8QnZmqN588W4ZY1ibHFFXlzAXO3lcOx%2Fke84oORyhRV8cIyAQXThPJHvk72jIXPQu537kTyX%2BTQCYbRbJe9B0WuN0OlsZTWB36c1869qxMnbCxqvPYOJK3yhXZfKZADujz1WzmXQ%2FGbQwya%2BYwwY6pgEhgOjB2kBSes2UuS9k4jQFwrrQo5egMvj8jtgNd3xvOW%2BXp5K1uZ86oOZlxyTLs%2B7EP4lGUKrOBQtcTZQHccSarht6bOLKwTZDpDy8bdMtVLT62KbGmarOf1wN9YDeSwEE7%2BjP4aMgiRXgdID%2FbyGKQKqZjvEYKB2gfZRyDtLeGc7RUk0%2BT8D62gPfR6RR5Kc2zfW5ye5VAVpcEc76ZuBzj%2F3rVky1&X-Amz-Signature=2ca80b70dcd4333695f24e2ca67031bf697c7d69b51cd3bb05339e7bf81cecbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJVRTZ5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGA5KCmUeG2P9wzG6XyrStl%2F3xN9Rah%2BuWlRH74qfjTtAiB0W4Fnog13G%2F6uvS%2FgvgIxcoXBAiJ7i0PPddz4jZy4kSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwwBW%2FW7HuOqrCpXbKtwD2OWAT1DuMmCgCk6jBV4CJUgcQUb1Q0LPW6fgG9DiYKCRofRCCeHWuDYdk12oswRUYLsk2Fax9BC%2BJLT64EPlrZd2QBGA0Tby7afHG2AkxFqhyGBe6rq9s9uUJgXMDad6qYl6E24Bj2spCRY%2BfzE3PPvgC4YDwQCMYHe7c8otgESso5yz3F7UMkJr%2BzeqnAsICEUI202f97nG7vBi%2FXZiefUvnFMaE1yNVnfnFUPSxp6e9hdzBWwOSEBhHdU%2FbTVpb7wthsebgYOLgUmqT4LoOABCBS6IFEdS6ZeDwrMxnAHZzu7nWQY1wq3h12A7b1NIi3zCc6km3qHiWDcTNHLvKSTFqLWm8pL4l3Ss2d97Sjy7DtDgwxEzo98irCIu8Yk9UBx5nifAXl9kJ8p9rOcq9qgzjg01emEoBPF7EJRW7grRu%2B5r3G9gGV5uI%2BmtkDShwZY4z1vXDVoJxd%2FRRWjCYJzpexfdsUPzcCNZhUFLgi0QIrW8QnZmqN588W4ZY1ibHFFXlzAXO3lcOx%2Fke84oORyhRV8cIyAQXThPJHvk72jIXPQu537kTyX%2BTQCYbRbJe9B0WuN0OlsZTWB36c1869qxMnbCxqvPYOJK3yhXZfKZADujz1WzmXQ%2FGbQwya%2BYwwY6pgEhgOjB2kBSes2UuS9k4jQFwrrQo5egMvj8jtgNd3xvOW%2BXp5K1uZ86oOZlxyTLs%2B7EP4lGUKrOBQtcTZQHccSarht6bOLKwTZDpDy8bdMtVLT62KbGmarOf1wN9YDeSwEE7%2BjP4aMgiRXgdID%2FbyGKQKqZjvEYKB2gfZRyDtLeGc7RUk0%2BT8D62gPfR6RR5Kc2zfW5ye5VAVpcEc76ZuBzj%2F3rVky1&X-Amz-Signature=4abed137f2f2488f4ae731e780a4ed94a24b3d0128c67b830482434692ece8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJVRTZ5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGA5KCmUeG2P9wzG6XyrStl%2F3xN9Rah%2BuWlRH74qfjTtAiB0W4Fnog13G%2F6uvS%2FgvgIxcoXBAiJ7i0PPddz4jZy4kSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwwBW%2FW7HuOqrCpXbKtwD2OWAT1DuMmCgCk6jBV4CJUgcQUb1Q0LPW6fgG9DiYKCRofRCCeHWuDYdk12oswRUYLsk2Fax9BC%2BJLT64EPlrZd2QBGA0Tby7afHG2AkxFqhyGBe6rq9s9uUJgXMDad6qYl6E24Bj2spCRY%2BfzE3PPvgC4YDwQCMYHe7c8otgESso5yz3F7UMkJr%2BzeqnAsICEUI202f97nG7vBi%2FXZiefUvnFMaE1yNVnfnFUPSxp6e9hdzBWwOSEBhHdU%2FbTVpb7wthsebgYOLgUmqT4LoOABCBS6IFEdS6ZeDwrMxnAHZzu7nWQY1wq3h12A7b1NIi3zCc6km3qHiWDcTNHLvKSTFqLWm8pL4l3Ss2d97Sjy7DtDgwxEzo98irCIu8Yk9UBx5nifAXl9kJ8p9rOcq9qgzjg01emEoBPF7EJRW7grRu%2B5r3G9gGV5uI%2BmtkDShwZY4z1vXDVoJxd%2FRRWjCYJzpexfdsUPzcCNZhUFLgi0QIrW8QnZmqN588W4ZY1ibHFFXlzAXO3lcOx%2Fke84oORyhRV8cIyAQXThPJHvk72jIXPQu537kTyX%2BTQCYbRbJe9B0WuN0OlsZTWB36c1869qxMnbCxqvPYOJK3yhXZfKZADujz1WzmXQ%2FGbQwya%2BYwwY6pgEhgOjB2kBSes2UuS9k4jQFwrrQo5egMvj8jtgNd3xvOW%2BXp5K1uZ86oOZlxyTLs%2B7EP4lGUKrOBQtcTZQHccSarht6bOLKwTZDpDy8bdMtVLT62KbGmarOf1wN9YDeSwEE7%2BjP4aMgiRXgdID%2FbyGKQKqZjvEYKB2gfZRyDtLeGc7RUk0%2BT8D62gPfR6RR5Kc2zfW5ye5VAVpcEc76ZuBzj%2F3rVky1&X-Amz-Signature=ec6129cee89c30e8b282b888ebf579679d4490e2b31e7331d30bc91c6d6f7d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJVRTZ5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGA5KCmUeG2P9wzG6XyrStl%2F3xN9Rah%2BuWlRH74qfjTtAiB0W4Fnog13G%2F6uvS%2FgvgIxcoXBAiJ7i0PPddz4jZy4kSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwwBW%2FW7HuOqrCpXbKtwD2OWAT1DuMmCgCk6jBV4CJUgcQUb1Q0LPW6fgG9DiYKCRofRCCeHWuDYdk12oswRUYLsk2Fax9BC%2BJLT64EPlrZd2QBGA0Tby7afHG2AkxFqhyGBe6rq9s9uUJgXMDad6qYl6E24Bj2spCRY%2BfzE3PPvgC4YDwQCMYHe7c8otgESso5yz3F7UMkJr%2BzeqnAsICEUI202f97nG7vBi%2FXZiefUvnFMaE1yNVnfnFUPSxp6e9hdzBWwOSEBhHdU%2FbTVpb7wthsebgYOLgUmqT4LoOABCBS6IFEdS6ZeDwrMxnAHZzu7nWQY1wq3h12A7b1NIi3zCc6km3qHiWDcTNHLvKSTFqLWm8pL4l3Ss2d97Sjy7DtDgwxEzo98irCIu8Yk9UBx5nifAXl9kJ8p9rOcq9qgzjg01emEoBPF7EJRW7grRu%2B5r3G9gGV5uI%2BmtkDShwZY4z1vXDVoJxd%2FRRWjCYJzpexfdsUPzcCNZhUFLgi0QIrW8QnZmqN588W4ZY1ibHFFXlzAXO3lcOx%2Fke84oORyhRV8cIyAQXThPJHvk72jIXPQu537kTyX%2BTQCYbRbJe9B0WuN0OlsZTWB36c1869qxMnbCxqvPYOJK3yhXZfKZADujz1WzmXQ%2FGbQwya%2BYwwY6pgEhgOjB2kBSes2UuS9k4jQFwrrQo5egMvj8jtgNd3xvOW%2BXp5K1uZ86oOZlxyTLs%2B7EP4lGUKrOBQtcTZQHccSarht6bOLKwTZDpDy8bdMtVLT62KbGmarOf1wN9YDeSwEE7%2BjP4aMgiRXgdID%2FbyGKQKqZjvEYKB2gfZRyDtLeGc7RUk0%2BT8D62gPfR6RR5Kc2zfW5ye5VAVpcEc76ZuBzj%2F3rVky1&X-Amz-Signature=6d279ba4e70ab61b9da42a7b371b3b4e65e02c60b975aba2f87b6ffc3f0e10a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJVRTZ5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGA5KCmUeG2P9wzG6XyrStl%2F3xN9Rah%2BuWlRH74qfjTtAiB0W4Fnog13G%2F6uvS%2FgvgIxcoXBAiJ7i0PPddz4jZy4kSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwwBW%2FW7HuOqrCpXbKtwD2OWAT1DuMmCgCk6jBV4CJUgcQUb1Q0LPW6fgG9DiYKCRofRCCeHWuDYdk12oswRUYLsk2Fax9BC%2BJLT64EPlrZd2QBGA0Tby7afHG2AkxFqhyGBe6rq9s9uUJgXMDad6qYl6E24Bj2spCRY%2BfzE3PPvgC4YDwQCMYHe7c8otgESso5yz3F7UMkJr%2BzeqnAsICEUI202f97nG7vBi%2FXZiefUvnFMaE1yNVnfnFUPSxp6e9hdzBWwOSEBhHdU%2FbTVpb7wthsebgYOLgUmqT4LoOABCBS6IFEdS6ZeDwrMxnAHZzu7nWQY1wq3h12A7b1NIi3zCc6km3qHiWDcTNHLvKSTFqLWm8pL4l3Ss2d97Sjy7DtDgwxEzo98irCIu8Yk9UBx5nifAXl9kJ8p9rOcq9qgzjg01emEoBPF7EJRW7grRu%2B5r3G9gGV5uI%2BmtkDShwZY4z1vXDVoJxd%2FRRWjCYJzpexfdsUPzcCNZhUFLgi0QIrW8QnZmqN588W4ZY1ibHFFXlzAXO3lcOx%2Fke84oORyhRV8cIyAQXThPJHvk72jIXPQu537kTyX%2BTQCYbRbJe9B0WuN0OlsZTWB36c1869qxMnbCxqvPYOJK3yhXZfKZADujz1WzmXQ%2FGbQwya%2BYwwY6pgEhgOjB2kBSes2UuS9k4jQFwrrQo5egMvj8jtgNd3xvOW%2BXp5K1uZ86oOZlxyTLs%2B7EP4lGUKrOBQtcTZQHccSarht6bOLKwTZDpDy8bdMtVLT62KbGmarOf1wN9YDeSwEE7%2BjP4aMgiRXgdID%2FbyGKQKqZjvEYKB2gfZRyDtLeGc7RUk0%2BT8D62gPfR6RR5Kc2zfW5ye5VAVpcEc76ZuBzj%2F3rVky1&X-Amz-Signature=53075c6165c6b52c6766deaca4fe884c8c4ce17f3d257383f15df6f8aff2174d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJVRTZ5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGA5KCmUeG2P9wzG6XyrStl%2F3xN9Rah%2BuWlRH74qfjTtAiB0W4Fnog13G%2F6uvS%2FgvgIxcoXBAiJ7i0PPddz4jZy4kSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwwBW%2FW7HuOqrCpXbKtwD2OWAT1DuMmCgCk6jBV4CJUgcQUb1Q0LPW6fgG9DiYKCRofRCCeHWuDYdk12oswRUYLsk2Fax9BC%2BJLT64EPlrZd2QBGA0Tby7afHG2AkxFqhyGBe6rq9s9uUJgXMDad6qYl6E24Bj2spCRY%2BfzE3PPvgC4YDwQCMYHe7c8otgESso5yz3F7UMkJr%2BzeqnAsICEUI202f97nG7vBi%2FXZiefUvnFMaE1yNVnfnFUPSxp6e9hdzBWwOSEBhHdU%2FbTVpb7wthsebgYOLgUmqT4LoOABCBS6IFEdS6ZeDwrMxnAHZzu7nWQY1wq3h12A7b1NIi3zCc6km3qHiWDcTNHLvKSTFqLWm8pL4l3Ss2d97Sjy7DtDgwxEzo98irCIu8Yk9UBx5nifAXl9kJ8p9rOcq9qgzjg01emEoBPF7EJRW7grRu%2B5r3G9gGV5uI%2BmtkDShwZY4z1vXDVoJxd%2FRRWjCYJzpexfdsUPzcCNZhUFLgi0QIrW8QnZmqN588W4ZY1ibHFFXlzAXO3lcOx%2Fke84oORyhRV8cIyAQXThPJHvk72jIXPQu537kTyX%2BTQCYbRbJe9B0WuN0OlsZTWB36c1869qxMnbCxqvPYOJK3yhXZfKZADujz1WzmXQ%2FGbQwya%2BYwwY6pgEhgOjB2kBSes2UuS9k4jQFwrrQo5egMvj8jtgNd3xvOW%2BXp5K1uZ86oOZlxyTLs%2B7EP4lGUKrOBQtcTZQHccSarht6bOLKwTZDpDy8bdMtVLT62KbGmarOf1wN9YDeSwEE7%2BjP4aMgiRXgdID%2FbyGKQKqZjvEYKB2gfZRyDtLeGc7RUk0%2BT8D62gPfR6RR5Kc2zfW5ye5VAVpcEc76ZuBzj%2F3rVky1&X-Amz-Signature=f2e4b9c7790f105d11df61d8e9ab13a4e4c94aef98f099e1c0bd8ad7784e005b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJVRTZ5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGA5KCmUeG2P9wzG6XyrStl%2F3xN9Rah%2BuWlRH74qfjTtAiB0W4Fnog13G%2F6uvS%2FgvgIxcoXBAiJ7i0PPddz4jZy4kSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwwBW%2FW7HuOqrCpXbKtwD2OWAT1DuMmCgCk6jBV4CJUgcQUb1Q0LPW6fgG9DiYKCRofRCCeHWuDYdk12oswRUYLsk2Fax9BC%2BJLT64EPlrZd2QBGA0Tby7afHG2AkxFqhyGBe6rq9s9uUJgXMDad6qYl6E24Bj2spCRY%2BfzE3PPvgC4YDwQCMYHe7c8otgESso5yz3F7UMkJr%2BzeqnAsICEUI202f97nG7vBi%2FXZiefUvnFMaE1yNVnfnFUPSxp6e9hdzBWwOSEBhHdU%2FbTVpb7wthsebgYOLgUmqT4LoOABCBS6IFEdS6ZeDwrMxnAHZzu7nWQY1wq3h12A7b1NIi3zCc6km3qHiWDcTNHLvKSTFqLWm8pL4l3Ss2d97Sjy7DtDgwxEzo98irCIu8Yk9UBx5nifAXl9kJ8p9rOcq9qgzjg01emEoBPF7EJRW7grRu%2B5r3G9gGV5uI%2BmtkDShwZY4z1vXDVoJxd%2FRRWjCYJzpexfdsUPzcCNZhUFLgi0QIrW8QnZmqN588W4ZY1ibHFFXlzAXO3lcOx%2Fke84oORyhRV8cIyAQXThPJHvk72jIXPQu537kTyX%2BTQCYbRbJe9B0WuN0OlsZTWB36c1869qxMnbCxqvPYOJK3yhXZfKZADujz1WzmXQ%2FGbQwya%2BYwwY6pgEhgOjB2kBSes2UuS9k4jQFwrrQo5egMvj8jtgNd3xvOW%2BXp5K1uZ86oOZlxyTLs%2B7EP4lGUKrOBQtcTZQHccSarht6bOLKwTZDpDy8bdMtVLT62KbGmarOf1wN9YDeSwEE7%2BjP4aMgiRXgdID%2FbyGKQKqZjvEYKB2gfZRyDtLeGc7RUk0%2BT8D62gPfR6RR5Kc2zfW5ye5VAVpcEc76ZuBzj%2F3rVky1&X-Amz-Signature=8fc6197f9a7075eacc30ed30525f8a2ceb40113503cb8c7b690bb903fa24c63c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
