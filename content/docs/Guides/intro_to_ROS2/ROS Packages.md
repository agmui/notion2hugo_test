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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QYL4FGZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDSrq6LXSpQZepDAwPOPwvoJj61WS%2FuwAqDRnO4PY7XnAIgdCwjfpwHrl8E3%2F1INb6WZG3JfqbUeHONXtiZu%2BbdJnIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvucbfJHwbbOTrIwSrcA%2BN8pzBcd6ppb1tN2GM%2BqHkhchzZ0Z33Kw3Cp2f3H8N6MAGd%2FQ2fnjy9wT2pNYbpaHwUjmZf3QS5moesYizKh67X6cD%2BYJMa685TjvL2VHVfrpvixfNsVcK75b7Ovb5b6HG%2FCzfTcNbwlFpZub%2BbsDfxmCiqr%2FnpJEW%2BZ8L4q67oknZu1aG5EO7S5BLEM4pMlHVmen9nMAPxOVvO2%2F87SA4ydO21zDu7%2BCvnXZLqJkMkS8CIBi7HQxUYlVJpa7cioeM%2FtCocTJpSMNDA1%2BQFLZ57DVzHcxR0rCTlJKgFIPXzrI13IarjTUkpqAgC1IKaSNdtWDhLp8tiWXKHif9fOhDP3LXnAJpSHn2TFMIrr8Rj42%2BabJpXlXHoR%2FgG1vc8jkngZCumpZzp8mR6gDGExhTXdhPSkclKDzdwMF%2BaXwxDL9%2BjW6d9V5niNcn9xAYtnrwpsSCoo7xlZSUnFu8ypv6YgN5%2FjQUv9uLeiQBOUYxNHNwG%2FHz9XCT1WvhFauyhgxvu13PlcxhLIiaatVoTmh1Xisbsi6e3Ik98bQUfO0kEE83umbfB2ZyV%2F9BKG9p5mg2uk%2FaXPY0692hBvWCDDYUVQdJ31m8rugOKR6PV7Eo7eR0ZdcGuRXaoJy22MLbUhcEGOqUBOjivHdoRDykCz6hcJYCeGbor0LH%2BIUXpQ5zaHB5AyvTrBdwdzmxbB3hVZeshvJc%2FQSmmyP6N9ByQVqXyXocT5o%2BP9M5EhXO5YmjabNUepC7eNXvIMEpoXgoLiEBlXlPRrHTldXx5QDfWWp2wnqdxcPFnh2bvNh9YZwXSZ8gnaSvpkAKPtgV5Zd96y%2BtSSED485a2qyi51JCSvJ6LyCtJ0s6jfuej&X-Amz-Signature=90ae9d3feb3a33a6951e28bb146a7f77b28c4487fc913ed18771f01c6c7d13de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QYL4FGZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDSrq6LXSpQZepDAwPOPwvoJj61WS%2FuwAqDRnO4PY7XnAIgdCwjfpwHrl8E3%2F1INb6WZG3JfqbUeHONXtiZu%2BbdJnIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvucbfJHwbbOTrIwSrcA%2BN8pzBcd6ppb1tN2GM%2BqHkhchzZ0Z33Kw3Cp2f3H8N6MAGd%2FQ2fnjy9wT2pNYbpaHwUjmZf3QS5moesYizKh67X6cD%2BYJMa685TjvL2VHVfrpvixfNsVcK75b7Ovb5b6HG%2FCzfTcNbwlFpZub%2BbsDfxmCiqr%2FnpJEW%2BZ8L4q67oknZu1aG5EO7S5BLEM4pMlHVmen9nMAPxOVvO2%2F87SA4ydO21zDu7%2BCvnXZLqJkMkS8CIBi7HQxUYlVJpa7cioeM%2FtCocTJpSMNDA1%2BQFLZ57DVzHcxR0rCTlJKgFIPXzrI13IarjTUkpqAgC1IKaSNdtWDhLp8tiWXKHif9fOhDP3LXnAJpSHn2TFMIrr8Rj42%2BabJpXlXHoR%2FgG1vc8jkngZCumpZzp8mR6gDGExhTXdhPSkclKDzdwMF%2BaXwxDL9%2BjW6d9V5niNcn9xAYtnrwpsSCoo7xlZSUnFu8ypv6YgN5%2FjQUv9uLeiQBOUYxNHNwG%2FHz9XCT1WvhFauyhgxvu13PlcxhLIiaatVoTmh1Xisbsi6e3Ik98bQUfO0kEE83umbfB2ZyV%2F9BKG9p5mg2uk%2FaXPY0692hBvWCDDYUVQdJ31m8rugOKR6PV7Eo7eR0ZdcGuRXaoJy22MLbUhcEGOqUBOjivHdoRDykCz6hcJYCeGbor0LH%2BIUXpQ5zaHB5AyvTrBdwdzmxbB3hVZeshvJc%2FQSmmyP6N9ByQVqXyXocT5o%2BP9M5EhXO5YmjabNUepC7eNXvIMEpoXgoLiEBlXlPRrHTldXx5QDfWWp2wnqdxcPFnh2bvNh9YZwXSZ8gnaSvpkAKPtgV5Zd96y%2BtSSED485a2qyi51JCSvJ6LyCtJ0s6jfuej&X-Amz-Signature=2249ebd8c23117fb0012151cd1b9529e6b8b1ddd5ab97e64a84ff3b61f2c3e11&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QYL4FGZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDSrq6LXSpQZepDAwPOPwvoJj61WS%2FuwAqDRnO4PY7XnAIgdCwjfpwHrl8E3%2F1INb6WZG3JfqbUeHONXtiZu%2BbdJnIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvucbfJHwbbOTrIwSrcA%2BN8pzBcd6ppb1tN2GM%2BqHkhchzZ0Z33Kw3Cp2f3H8N6MAGd%2FQ2fnjy9wT2pNYbpaHwUjmZf3QS5moesYizKh67X6cD%2BYJMa685TjvL2VHVfrpvixfNsVcK75b7Ovb5b6HG%2FCzfTcNbwlFpZub%2BbsDfxmCiqr%2FnpJEW%2BZ8L4q67oknZu1aG5EO7S5BLEM4pMlHVmen9nMAPxOVvO2%2F87SA4ydO21zDu7%2BCvnXZLqJkMkS8CIBi7HQxUYlVJpa7cioeM%2FtCocTJpSMNDA1%2BQFLZ57DVzHcxR0rCTlJKgFIPXzrI13IarjTUkpqAgC1IKaSNdtWDhLp8tiWXKHif9fOhDP3LXnAJpSHn2TFMIrr8Rj42%2BabJpXlXHoR%2FgG1vc8jkngZCumpZzp8mR6gDGExhTXdhPSkclKDzdwMF%2BaXwxDL9%2BjW6d9V5niNcn9xAYtnrwpsSCoo7xlZSUnFu8ypv6YgN5%2FjQUv9uLeiQBOUYxNHNwG%2FHz9XCT1WvhFauyhgxvu13PlcxhLIiaatVoTmh1Xisbsi6e3Ik98bQUfO0kEE83umbfB2ZyV%2F9BKG9p5mg2uk%2FaXPY0692hBvWCDDYUVQdJ31m8rugOKR6PV7Eo7eR0ZdcGuRXaoJy22MLbUhcEGOqUBOjivHdoRDykCz6hcJYCeGbor0LH%2BIUXpQ5zaHB5AyvTrBdwdzmxbB3hVZeshvJc%2FQSmmyP6N9ByQVqXyXocT5o%2BP9M5EhXO5YmjabNUepC7eNXvIMEpoXgoLiEBlXlPRrHTldXx5QDfWWp2wnqdxcPFnh2bvNh9YZwXSZ8gnaSvpkAKPtgV5Zd96y%2BtSSED485a2qyi51JCSvJ6LyCtJ0s6jfuej&X-Amz-Signature=babd496ce8fddbe58e5f9fb4cfa7666bcd1fb0e1924fb98c5b9e74a562eb35f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QYL4FGZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDSrq6LXSpQZepDAwPOPwvoJj61WS%2FuwAqDRnO4PY7XnAIgdCwjfpwHrl8E3%2F1INb6WZG3JfqbUeHONXtiZu%2BbdJnIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvucbfJHwbbOTrIwSrcA%2BN8pzBcd6ppb1tN2GM%2BqHkhchzZ0Z33Kw3Cp2f3H8N6MAGd%2FQ2fnjy9wT2pNYbpaHwUjmZf3QS5moesYizKh67X6cD%2BYJMa685TjvL2VHVfrpvixfNsVcK75b7Ovb5b6HG%2FCzfTcNbwlFpZub%2BbsDfxmCiqr%2FnpJEW%2BZ8L4q67oknZu1aG5EO7S5BLEM4pMlHVmen9nMAPxOVvO2%2F87SA4ydO21zDu7%2BCvnXZLqJkMkS8CIBi7HQxUYlVJpa7cioeM%2FtCocTJpSMNDA1%2BQFLZ57DVzHcxR0rCTlJKgFIPXzrI13IarjTUkpqAgC1IKaSNdtWDhLp8tiWXKHif9fOhDP3LXnAJpSHn2TFMIrr8Rj42%2BabJpXlXHoR%2FgG1vc8jkngZCumpZzp8mR6gDGExhTXdhPSkclKDzdwMF%2BaXwxDL9%2BjW6d9V5niNcn9xAYtnrwpsSCoo7xlZSUnFu8ypv6YgN5%2FjQUv9uLeiQBOUYxNHNwG%2FHz9XCT1WvhFauyhgxvu13PlcxhLIiaatVoTmh1Xisbsi6e3Ik98bQUfO0kEE83umbfB2ZyV%2F9BKG9p5mg2uk%2FaXPY0692hBvWCDDYUVQdJ31m8rugOKR6PV7Eo7eR0ZdcGuRXaoJy22MLbUhcEGOqUBOjivHdoRDykCz6hcJYCeGbor0LH%2BIUXpQ5zaHB5AyvTrBdwdzmxbB3hVZeshvJc%2FQSmmyP6N9ByQVqXyXocT5o%2BP9M5EhXO5YmjabNUepC7eNXvIMEpoXgoLiEBlXlPRrHTldXx5QDfWWp2wnqdxcPFnh2bvNh9YZwXSZ8gnaSvpkAKPtgV5Zd96y%2BtSSED485a2qyi51JCSvJ6LyCtJ0s6jfuej&X-Amz-Signature=70ec730f503b73209a424a035ed71b60d3cc18f3ff37601229d82e458f58af4c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QYL4FGZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDSrq6LXSpQZepDAwPOPwvoJj61WS%2FuwAqDRnO4PY7XnAIgdCwjfpwHrl8E3%2F1INb6WZG3JfqbUeHONXtiZu%2BbdJnIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvucbfJHwbbOTrIwSrcA%2BN8pzBcd6ppb1tN2GM%2BqHkhchzZ0Z33Kw3Cp2f3H8N6MAGd%2FQ2fnjy9wT2pNYbpaHwUjmZf3QS5moesYizKh67X6cD%2BYJMa685TjvL2VHVfrpvixfNsVcK75b7Ovb5b6HG%2FCzfTcNbwlFpZub%2BbsDfxmCiqr%2FnpJEW%2BZ8L4q67oknZu1aG5EO7S5BLEM4pMlHVmen9nMAPxOVvO2%2F87SA4ydO21zDu7%2BCvnXZLqJkMkS8CIBi7HQxUYlVJpa7cioeM%2FtCocTJpSMNDA1%2BQFLZ57DVzHcxR0rCTlJKgFIPXzrI13IarjTUkpqAgC1IKaSNdtWDhLp8tiWXKHif9fOhDP3LXnAJpSHn2TFMIrr8Rj42%2BabJpXlXHoR%2FgG1vc8jkngZCumpZzp8mR6gDGExhTXdhPSkclKDzdwMF%2BaXwxDL9%2BjW6d9V5niNcn9xAYtnrwpsSCoo7xlZSUnFu8ypv6YgN5%2FjQUv9uLeiQBOUYxNHNwG%2FHz9XCT1WvhFauyhgxvu13PlcxhLIiaatVoTmh1Xisbsi6e3Ik98bQUfO0kEE83umbfB2ZyV%2F9BKG9p5mg2uk%2FaXPY0692hBvWCDDYUVQdJ31m8rugOKR6PV7Eo7eR0ZdcGuRXaoJy22MLbUhcEGOqUBOjivHdoRDykCz6hcJYCeGbor0LH%2BIUXpQ5zaHB5AyvTrBdwdzmxbB3hVZeshvJc%2FQSmmyP6N9ByQVqXyXocT5o%2BP9M5EhXO5YmjabNUepC7eNXvIMEpoXgoLiEBlXlPRrHTldXx5QDfWWp2wnqdxcPFnh2bvNh9YZwXSZ8gnaSvpkAKPtgV5Zd96y%2BtSSED485a2qyi51JCSvJ6LyCtJ0s6jfuej&X-Amz-Signature=ccb3bd311f04e0baef35aa5d7aa84888a9b853bae06bd3e72a40937d28c4205c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QYL4FGZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDSrq6LXSpQZepDAwPOPwvoJj61WS%2FuwAqDRnO4PY7XnAIgdCwjfpwHrl8E3%2F1INb6WZG3JfqbUeHONXtiZu%2BbdJnIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvucbfJHwbbOTrIwSrcA%2BN8pzBcd6ppb1tN2GM%2BqHkhchzZ0Z33Kw3Cp2f3H8N6MAGd%2FQ2fnjy9wT2pNYbpaHwUjmZf3QS5moesYizKh67X6cD%2BYJMa685TjvL2VHVfrpvixfNsVcK75b7Ovb5b6HG%2FCzfTcNbwlFpZub%2BbsDfxmCiqr%2FnpJEW%2BZ8L4q67oknZu1aG5EO7S5BLEM4pMlHVmen9nMAPxOVvO2%2F87SA4ydO21zDu7%2BCvnXZLqJkMkS8CIBi7HQxUYlVJpa7cioeM%2FtCocTJpSMNDA1%2BQFLZ57DVzHcxR0rCTlJKgFIPXzrI13IarjTUkpqAgC1IKaSNdtWDhLp8tiWXKHif9fOhDP3LXnAJpSHn2TFMIrr8Rj42%2BabJpXlXHoR%2FgG1vc8jkngZCumpZzp8mR6gDGExhTXdhPSkclKDzdwMF%2BaXwxDL9%2BjW6d9V5niNcn9xAYtnrwpsSCoo7xlZSUnFu8ypv6YgN5%2FjQUv9uLeiQBOUYxNHNwG%2FHz9XCT1WvhFauyhgxvu13PlcxhLIiaatVoTmh1Xisbsi6e3Ik98bQUfO0kEE83umbfB2ZyV%2F9BKG9p5mg2uk%2FaXPY0692hBvWCDDYUVQdJ31m8rugOKR6PV7Eo7eR0ZdcGuRXaoJy22MLbUhcEGOqUBOjivHdoRDykCz6hcJYCeGbor0LH%2BIUXpQ5zaHB5AyvTrBdwdzmxbB3hVZeshvJc%2FQSmmyP6N9ByQVqXyXocT5o%2BP9M5EhXO5YmjabNUepC7eNXvIMEpoXgoLiEBlXlPRrHTldXx5QDfWWp2wnqdxcPFnh2bvNh9YZwXSZ8gnaSvpkAKPtgV5Zd96y%2BtSSED485a2qyi51JCSvJ6LyCtJ0s6jfuej&X-Amz-Signature=3fd61d64fd6e4f85b20ecfd36c27a95d8a5fc493fb791ce87ccf5f525b4d14cc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QYL4FGZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDSrq6LXSpQZepDAwPOPwvoJj61WS%2FuwAqDRnO4PY7XnAIgdCwjfpwHrl8E3%2F1INb6WZG3JfqbUeHONXtiZu%2BbdJnIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvucbfJHwbbOTrIwSrcA%2BN8pzBcd6ppb1tN2GM%2BqHkhchzZ0Z33Kw3Cp2f3H8N6MAGd%2FQ2fnjy9wT2pNYbpaHwUjmZf3QS5moesYizKh67X6cD%2BYJMa685TjvL2VHVfrpvixfNsVcK75b7Ovb5b6HG%2FCzfTcNbwlFpZub%2BbsDfxmCiqr%2FnpJEW%2BZ8L4q67oknZu1aG5EO7S5BLEM4pMlHVmen9nMAPxOVvO2%2F87SA4ydO21zDu7%2BCvnXZLqJkMkS8CIBi7HQxUYlVJpa7cioeM%2FtCocTJpSMNDA1%2BQFLZ57DVzHcxR0rCTlJKgFIPXzrI13IarjTUkpqAgC1IKaSNdtWDhLp8tiWXKHif9fOhDP3LXnAJpSHn2TFMIrr8Rj42%2BabJpXlXHoR%2FgG1vc8jkngZCumpZzp8mR6gDGExhTXdhPSkclKDzdwMF%2BaXwxDL9%2BjW6d9V5niNcn9xAYtnrwpsSCoo7xlZSUnFu8ypv6YgN5%2FjQUv9uLeiQBOUYxNHNwG%2FHz9XCT1WvhFauyhgxvu13PlcxhLIiaatVoTmh1Xisbsi6e3Ik98bQUfO0kEE83umbfB2ZyV%2F9BKG9p5mg2uk%2FaXPY0692hBvWCDDYUVQdJ31m8rugOKR6PV7Eo7eR0ZdcGuRXaoJy22MLbUhcEGOqUBOjivHdoRDykCz6hcJYCeGbor0LH%2BIUXpQ5zaHB5AyvTrBdwdzmxbB3hVZeshvJc%2FQSmmyP6N9ByQVqXyXocT5o%2BP9M5EhXO5YmjabNUepC7eNXvIMEpoXgoLiEBlXlPRrHTldXx5QDfWWp2wnqdxcPFnh2bvNh9YZwXSZ8gnaSvpkAKPtgV5Zd96y%2BtSSED485a2qyi51JCSvJ6LyCtJ0s6jfuej&X-Amz-Signature=f77cedd1d03689c33aeee7cfd427296eb55c39a9d5c3f254d1e1d9c67ab842d6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
