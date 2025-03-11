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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STT4K5K%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDeod0J8X%2BhsCvHA3RofILdL5zmbNMCagvZeU%2F5iNby%2BQIgRodEEUbedODiAs0LIBB7k3MH9yJqfbsN89LPzrRkarUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoAlWWmZP68TQLY8ircA0deolW40A%2FZ7LgOkbURNoY92I03QT1mOqVqZyFEtBaxupaomPATibCn5yn0qqCqmcQIlTSHeu7uWZ6RUmLvghQxiexujjNjlYK%2BGEE4799lL8yQHolDfx5soyQX2fV2vdXyth8JxlZ5q6o150Gp3wg2W3UmLFzteguQpQgw%2BodRdVFxPMbELITGkmiGCBVDIufI2O5X6OiSwy%2BS2JO4EYi3gxDl8ocGauRRw4Pu9gT%2F2%2F8uIZDNVcMqTta7zl1pllZYiZClbqNQ%2Bl6Pzc7JGJn1UhRYYqbW3A85RssxiPWwVeeWA2lODa1LVPBbBKFqDizsN7XXx2Jp1qXby1Wpqv%2BJmZt6q1HXNkLUCEA1Izd0HmHdkVBwyNs91IO37DmeYozGqLrwXOhQo%2BQJQNEJVAFje0BTv23%2Bvg5A86VdzsdfFdVD6p8N8Ubmya%2BhSGW8Wmuj3zPsODHnFSkTYprn07IkTMse%2F0zQqvl2j%2B6qT3c6%2F%2Bwb2jJKFbKWQyqI4X4wqRzt8HVLsYn6QWOWuucAy8Op%2Bj%2F3PLeyRnD%2F4W1AGwaaPqoj8bgS%2FpBdDn6Ewx%2Fp0ZOsOaALWgA8hgui4YgdSb7UTXNUdQeO65TTTsVF5RN3SPwIgkpM4gQ9OOcLMIPuvb4GOqUBcBMEo39OJBNXzYQ5NLIDXbM5b4ISw5WcHICQoj64Xj3iPjp87xemt0qJtzyLAmaKkn6152PGRk1NMAWopRSUX49JU%2F3335AlPoI%2BOI08f3UDPwBN0mGn3x4Ai8jOvzPoehHqyE6tFtCevzM0LUwX8TDJWVZVzlQVo72anFqd4SAhkvSPQ3Gej1zwcJnLk5TQX5ugwX8bXUDIZH1zXUP0DPMiz9mG&X-Amz-Signature=b1e064392f777c34999a1d5be0a19770bfef7b85a4a088896edde348b6177b34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STT4K5K%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDeod0J8X%2BhsCvHA3RofILdL5zmbNMCagvZeU%2F5iNby%2BQIgRodEEUbedODiAs0LIBB7k3MH9yJqfbsN89LPzrRkarUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoAlWWmZP68TQLY8ircA0deolW40A%2FZ7LgOkbURNoY92I03QT1mOqVqZyFEtBaxupaomPATibCn5yn0qqCqmcQIlTSHeu7uWZ6RUmLvghQxiexujjNjlYK%2BGEE4799lL8yQHolDfx5soyQX2fV2vdXyth8JxlZ5q6o150Gp3wg2W3UmLFzteguQpQgw%2BodRdVFxPMbELITGkmiGCBVDIufI2O5X6OiSwy%2BS2JO4EYi3gxDl8ocGauRRw4Pu9gT%2F2%2F8uIZDNVcMqTta7zl1pllZYiZClbqNQ%2Bl6Pzc7JGJn1UhRYYqbW3A85RssxiPWwVeeWA2lODa1LVPBbBKFqDizsN7XXx2Jp1qXby1Wpqv%2BJmZt6q1HXNkLUCEA1Izd0HmHdkVBwyNs91IO37DmeYozGqLrwXOhQo%2BQJQNEJVAFje0BTv23%2Bvg5A86VdzsdfFdVD6p8N8Ubmya%2BhSGW8Wmuj3zPsODHnFSkTYprn07IkTMse%2F0zQqvl2j%2B6qT3c6%2F%2Bwb2jJKFbKWQyqI4X4wqRzt8HVLsYn6QWOWuucAy8Op%2Bj%2F3PLeyRnD%2F4W1AGwaaPqoj8bgS%2FpBdDn6Ewx%2Fp0ZOsOaALWgA8hgui4YgdSb7UTXNUdQeO65TTTsVF5RN3SPwIgkpM4gQ9OOcLMIPuvb4GOqUBcBMEo39OJBNXzYQ5NLIDXbM5b4ISw5WcHICQoj64Xj3iPjp87xemt0qJtzyLAmaKkn6152PGRk1NMAWopRSUX49JU%2F3335AlPoI%2BOI08f3UDPwBN0mGn3x4Ai8jOvzPoehHqyE6tFtCevzM0LUwX8TDJWVZVzlQVo72anFqd4SAhkvSPQ3Gej1zwcJnLk5TQX5ugwX8bXUDIZH1zXUP0DPMiz9mG&X-Amz-Signature=9e65b6041ad26fbea05578b329f0ded7b7a3c1a0c51aa47dda567f02097c2609&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STT4K5K%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDeod0J8X%2BhsCvHA3RofILdL5zmbNMCagvZeU%2F5iNby%2BQIgRodEEUbedODiAs0LIBB7k3MH9yJqfbsN89LPzrRkarUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoAlWWmZP68TQLY8ircA0deolW40A%2FZ7LgOkbURNoY92I03QT1mOqVqZyFEtBaxupaomPATibCn5yn0qqCqmcQIlTSHeu7uWZ6RUmLvghQxiexujjNjlYK%2BGEE4799lL8yQHolDfx5soyQX2fV2vdXyth8JxlZ5q6o150Gp3wg2W3UmLFzteguQpQgw%2BodRdVFxPMbELITGkmiGCBVDIufI2O5X6OiSwy%2BS2JO4EYi3gxDl8ocGauRRw4Pu9gT%2F2%2F8uIZDNVcMqTta7zl1pllZYiZClbqNQ%2Bl6Pzc7JGJn1UhRYYqbW3A85RssxiPWwVeeWA2lODa1LVPBbBKFqDizsN7XXx2Jp1qXby1Wpqv%2BJmZt6q1HXNkLUCEA1Izd0HmHdkVBwyNs91IO37DmeYozGqLrwXOhQo%2BQJQNEJVAFje0BTv23%2Bvg5A86VdzsdfFdVD6p8N8Ubmya%2BhSGW8Wmuj3zPsODHnFSkTYprn07IkTMse%2F0zQqvl2j%2B6qT3c6%2F%2Bwb2jJKFbKWQyqI4X4wqRzt8HVLsYn6QWOWuucAy8Op%2Bj%2F3PLeyRnD%2F4W1AGwaaPqoj8bgS%2FpBdDn6Ewx%2Fp0ZOsOaALWgA8hgui4YgdSb7UTXNUdQeO65TTTsVF5RN3SPwIgkpM4gQ9OOcLMIPuvb4GOqUBcBMEo39OJBNXzYQ5NLIDXbM5b4ISw5WcHICQoj64Xj3iPjp87xemt0qJtzyLAmaKkn6152PGRk1NMAWopRSUX49JU%2F3335AlPoI%2BOI08f3UDPwBN0mGn3x4Ai8jOvzPoehHqyE6tFtCevzM0LUwX8TDJWVZVzlQVo72anFqd4SAhkvSPQ3Gej1zwcJnLk5TQX5ugwX8bXUDIZH1zXUP0DPMiz9mG&X-Amz-Signature=dde59e421445851e83f7cb64f09c846d7b9b3017455d1d5c9119c85a4c14f5a5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STT4K5K%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDeod0J8X%2BhsCvHA3RofILdL5zmbNMCagvZeU%2F5iNby%2BQIgRodEEUbedODiAs0LIBB7k3MH9yJqfbsN89LPzrRkarUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoAlWWmZP68TQLY8ircA0deolW40A%2FZ7LgOkbURNoY92I03QT1mOqVqZyFEtBaxupaomPATibCn5yn0qqCqmcQIlTSHeu7uWZ6RUmLvghQxiexujjNjlYK%2BGEE4799lL8yQHolDfx5soyQX2fV2vdXyth8JxlZ5q6o150Gp3wg2W3UmLFzteguQpQgw%2BodRdVFxPMbELITGkmiGCBVDIufI2O5X6OiSwy%2BS2JO4EYi3gxDl8ocGauRRw4Pu9gT%2F2%2F8uIZDNVcMqTta7zl1pllZYiZClbqNQ%2Bl6Pzc7JGJn1UhRYYqbW3A85RssxiPWwVeeWA2lODa1LVPBbBKFqDizsN7XXx2Jp1qXby1Wpqv%2BJmZt6q1HXNkLUCEA1Izd0HmHdkVBwyNs91IO37DmeYozGqLrwXOhQo%2BQJQNEJVAFje0BTv23%2Bvg5A86VdzsdfFdVD6p8N8Ubmya%2BhSGW8Wmuj3zPsODHnFSkTYprn07IkTMse%2F0zQqvl2j%2B6qT3c6%2F%2Bwb2jJKFbKWQyqI4X4wqRzt8HVLsYn6QWOWuucAy8Op%2Bj%2F3PLeyRnD%2F4W1AGwaaPqoj8bgS%2FpBdDn6Ewx%2Fp0ZOsOaALWgA8hgui4YgdSb7UTXNUdQeO65TTTsVF5RN3SPwIgkpM4gQ9OOcLMIPuvb4GOqUBcBMEo39OJBNXzYQ5NLIDXbM5b4ISw5WcHICQoj64Xj3iPjp87xemt0qJtzyLAmaKkn6152PGRk1NMAWopRSUX49JU%2F3335AlPoI%2BOI08f3UDPwBN0mGn3x4Ai8jOvzPoehHqyE6tFtCevzM0LUwX8TDJWVZVzlQVo72anFqd4SAhkvSPQ3Gej1zwcJnLk5TQX5ugwX8bXUDIZH1zXUP0DPMiz9mG&X-Amz-Signature=ccafdfd81185d14599d0da2b5f9224ac8e75e76ef7dc64f97ba4cd2da8952c02&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STT4K5K%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDeod0J8X%2BhsCvHA3RofILdL5zmbNMCagvZeU%2F5iNby%2BQIgRodEEUbedODiAs0LIBB7k3MH9yJqfbsN89LPzrRkarUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoAlWWmZP68TQLY8ircA0deolW40A%2FZ7LgOkbURNoY92I03QT1mOqVqZyFEtBaxupaomPATibCn5yn0qqCqmcQIlTSHeu7uWZ6RUmLvghQxiexujjNjlYK%2BGEE4799lL8yQHolDfx5soyQX2fV2vdXyth8JxlZ5q6o150Gp3wg2W3UmLFzteguQpQgw%2BodRdVFxPMbELITGkmiGCBVDIufI2O5X6OiSwy%2BS2JO4EYi3gxDl8ocGauRRw4Pu9gT%2F2%2F8uIZDNVcMqTta7zl1pllZYiZClbqNQ%2Bl6Pzc7JGJn1UhRYYqbW3A85RssxiPWwVeeWA2lODa1LVPBbBKFqDizsN7XXx2Jp1qXby1Wpqv%2BJmZt6q1HXNkLUCEA1Izd0HmHdkVBwyNs91IO37DmeYozGqLrwXOhQo%2BQJQNEJVAFje0BTv23%2Bvg5A86VdzsdfFdVD6p8N8Ubmya%2BhSGW8Wmuj3zPsODHnFSkTYprn07IkTMse%2F0zQqvl2j%2B6qT3c6%2F%2Bwb2jJKFbKWQyqI4X4wqRzt8HVLsYn6QWOWuucAy8Op%2Bj%2F3PLeyRnD%2F4W1AGwaaPqoj8bgS%2FpBdDn6Ewx%2Fp0ZOsOaALWgA8hgui4YgdSb7UTXNUdQeO65TTTsVF5RN3SPwIgkpM4gQ9OOcLMIPuvb4GOqUBcBMEo39OJBNXzYQ5NLIDXbM5b4ISw5WcHICQoj64Xj3iPjp87xemt0qJtzyLAmaKkn6152PGRk1NMAWopRSUX49JU%2F3335AlPoI%2BOI08f3UDPwBN0mGn3x4Ai8jOvzPoehHqyE6tFtCevzM0LUwX8TDJWVZVzlQVo72anFqd4SAhkvSPQ3Gej1zwcJnLk5TQX5ugwX8bXUDIZH1zXUP0DPMiz9mG&X-Amz-Signature=23dbe55270118b361e46942717ca698eba99dceeb084c827fcec44f9dba92d06&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STT4K5K%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDeod0J8X%2BhsCvHA3RofILdL5zmbNMCagvZeU%2F5iNby%2BQIgRodEEUbedODiAs0LIBB7k3MH9yJqfbsN89LPzrRkarUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoAlWWmZP68TQLY8ircA0deolW40A%2FZ7LgOkbURNoY92I03QT1mOqVqZyFEtBaxupaomPATibCn5yn0qqCqmcQIlTSHeu7uWZ6RUmLvghQxiexujjNjlYK%2BGEE4799lL8yQHolDfx5soyQX2fV2vdXyth8JxlZ5q6o150Gp3wg2W3UmLFzteguQpQgw%2BodRdVFxPMbELITGkmiGCBVDIufI2O5X6OiSwy%2BS2JO4EYi3gxDl8ocGauRRw4Pu9gT%2F2%2F8uIZDNVcMqTta7zl1pllZYiZClbqNQ%2Bl6Pzc7JGJn1UhRYYqbW3A85RssxiPWwVeeWA2lODa1LVPBbBKFqDizsN7XXx2Jp1qXby1Wpqv%2BJmZt6q1HXNkLUCEA1Izd0HmHdkVBwyNs91IO37DmeYozGqLrwXOhQo%2BQJQNEJVAFje0BTv23%2Bvg5A86VdzsdfFdVD6p8N8Ubmya%2BhSGW8Wmuj3zPsODHnFSkTYprn07IkTMse%2F0zQqvl2j%2B6qT3c6%2F%2Bwb2jJKFbKWQyqI4X4wqRzt8HVLsYn6QWOWuucAy8Op%2Bj%2F3PLeyRnD%2F4W1AGwaaPqoj8bgS%2FpBdDn6Ewx%2Fp0ZOsOaALWgA8hgui4YgdSb7UTXNUdQeO65TTTsVF5RN3SPwIgkpM4gQ9OOcLMIPuvb4GOqUBcBMEo39OJBNXzYQ5NLIDXbM5b4ISw5WcHICQoj64Xj3iPjp87xemt0qJtzyLAmaKkn6152PGRk1NMAWopRSUX49JU%2F3335AlPoI%2BOI08f3UDPwBN0mGn3x4Ai8jOvzPoehHqyE6tFtCevzM0LUwX8TDJWVZVzlQVo72anFqd4SAhkvSPQ3Gej1zwcJnLk5TQX5ugwX8bXUDIZH1zXUP0DPMiz9mG&X-Amz-Signature=058a05a32020795381a09c6dd07351a69a72362139b7f88da3cd9f9c5d7db343&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STT4K5K%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDeod0J8X%2BhsCvHA3RofILdL5zmbNMCagvZeU%2F5iNby%2BQIgRodEEUbedODiAs0LIBB7k3MH9yJqfbsN89LPzrRkarUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoAlWWmZP68TQLY8ircA0deolW40A%2FZ7LgOkbURNoY92I03QT1mOqVqZyFEtBaxupaomPATibCn5yn0qqCqmcQIlTSHeu7uWZ6RUmLvghQxiexujjNjlYK%2BGEE4799lL8yQHolDfx5soyQX2fV2vdXyth8JxlZ5q6o150Gp3wg2W3UmLFzteguQpQgw%2BodRdVFxPMbELITGkmiGCBVDIufI2O5X6OiSwy%2BS2JO4EYi3gxDl8ocGauRRw4Pu9gT%2F2%2F8uIZDNVcMqTta7zl1pllZYiZClbqNQ%2Bl6Pzc7JGJn1UhRYYqbW3A85RssxiPWwVeeWA2lODa1LVPBbBKFqDizsN7XXx2Jp1qXby1Wpqv%2BJmZt6q1HXNkLUCEA1Izd0HmHdkVBwyNs91IO37DmeYozGqLrwXOhQo%2BQJQNEJVAFje0BTv23%2Bvg5A86VdzsdfFdVD6p8N8Ubmya%2BhSGW8Wmuj3zPsODHnFSkTYprn07IkTMse%2F0zQqvl2j%2B6qT3c6%2F%2Bwb2jJKFbKWQyqI4X4wqRzt8HVLsYn6QWOWuucAy8Op%2Bj%2F3PLeyRnD%2F4W1AGwaaPqoj8bgS%2FpBdDn6Ewx%2Fp0ZOsOaALWgA8hgui4YgdSb7UTXNUdQeO65TTTsVF5RN3SPwIgkpM4gQ9OOcLMIPuvb4GOqUBcBMEo39OJBNXzYQ5NLIDXbM5b4ISw5WcHICQoj64Xj3iPjp87xemt0qJtzyLAmaKkn6152PGRk1NMAWopRSUX49JU%2F3335AlPoI%2BOI08f3UDPwBN0mGn3x4Ai8jOvzPoehHqyE6tFtCevzM0LUwX8TDJWVZVzlQVo72anFqd4SAhkvSPQ3Gej1zwcJnLk5TQX5ugwX8bXUDIZH1zXUP0DPMiz9mG&X-Amz-Signature=450749f0831abaf72efa1770950d349f923840029e7d0aac847aaa49992435f5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
