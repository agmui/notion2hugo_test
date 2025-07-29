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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47SDDGO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC7RPCRW3oHb29jXWb7ZtBYRB3lP2HE4YovFx8OmPhwhAiEAo09OF9B0jfCsB6FmMPtTuc2Nf5kt%2BF5vjZOhoJ%2B31%2FMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyQat%2FJYvZthD5ONCrcA0xIFjsz%2F6aB0MLK9P4YysBtlKkjaCfJTVziybKlvEbPka9NQSDC8ePaZyEDFuwS%2F5zexaVG82ITNpwOgl8tiQrTMsMcOG%2BsnaKjYJyTr4aI1W%2FE3wqqjk3ratsGZ%2F0xJdB7OHFS%2FvmXznFz8OeSLwAdDxRSERH%2BQf2t1zw%2FUyq5KqgEgQi2pKLW0QZnBXMSHtGr5trrTStB1%2FlOPK%2FFWMcGcEjn1%2FoR9oyOyEmgU9LwcdjT34b3GRiY45QDW0mWWnd9ZZ15o5Ba2kjLssw8Q5LkqPJTnnWeIQQLHxrgQqnNoT9P5LH6EhzPZthhl2Cw20CEs5%2FI5YIG7EIuZgLHnOHYfKegh1axDzRzdhB1%2BH92JzVswXP6gvKS%2BTZh3gw1YuAxjtpkkatvDpnlHibsY8Ace4zXulP0miBDV5uZQvL31GtsHnIrSNnhVQdASOTIOwNC%2FOFjrNX73burGhJEh8Pj0xDvtqTcPoutdWsZxP8dwWBf0Dm7SuWD8Z0XsKIotg5IaYpVNEfXUkp5Arcb3yyDJ3%2Fvcv19FUyVzM6gWPFK0ee3kTvnDrBPRWZJKW3DaKM47dfaRC7wNdvK9UsqhX%2FJnsvp9LEr7S4YbSuof5eeHYd2k0u9dJHB9PM1MNqYo8QGOqUB5zcwwP%2BbhpjKRB5S4RF%2FHr918gVyowGqedKebp3YoRAckwCxaZKQZ0PEHdyX%2BzPCeL5Ix5ljedHB9hz6h4QRi%2BzP7PF7S0rpbmXt3dAZYxBvgNetPwKSPUsdpkxXnklDN6JNNDx%2Bq%2BZNAKWI5Df8Z3XNnkYzKWUup24QmHHxwlt54%2B0Gl2%2BVR9RKQ05M4nIIDCM18X5cBGI3%2F4bZOF%2F8jmIA9dt8&X-Amz-Signature=6a13ba3c5faa71e74baedb5a43fe9ba9e6588fa8eb495dbd9f3dcade86c8f909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47SDDGO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC7RPCRW3oHb29jXWb7ZtBYRB3lP2HE4YovFx8OmPhwhAiEAo09OF9B0jfCsB6FmMPtTuc2Nf5kt%2BF5vjZOhoJ%2B31%2FMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyQat%2FJYvZthD5ONCrcA0xIFjsz%2F6aB0MLK9P4YysBtlKkjaCfJTVziybKlvEbPka9NQSDC8ePaZyEDFuwS%2F5zexaVG82ITNpwOgl8tiQrTMsMcOG%2BsnaKjYJyTr4aI1W%2FE3wqqjk3ratsGZ%2F0xJdB7OHFS%2FvmXznFz8OeSLwAdDxRSERH%2BQf2t1zw%2FUyq5KqgEgQi2pKLW0QZnBXMSHtGr5trrTStB1%2FlOPK%2FFWMcGcEjn1%2FoR9oyOyEmgU9LwcdjT34b3GRiY45QDW0mWWnd9ZZ15o5Ba2kjLssw8Q5LkqPJTnnWeIQQLHxrgQqnNoT9P5LH6EhzPZthhl2Cw20CEs5%2FI5YIG7EIuZgLHnOHYfKegh1axDzRzdhB1%2BH92JzVswXP6gvKS%2BTZh3gw1YuAxjtpkkatvDpnlHibsY8Ace4zXulP0miBDV5uZQvL31GtsHnIrSNnhVQdASOTIOwNC%2FOFjrNX73burGhJEh8Pj0xDvtqTcPoutdWsZxP8dwWBf0Dm7SuWD8Z0XsKIotg5IaYpVNEfXUkp5Arcb3yyDJ3%2Fvcv19FUyVzM6gWPFK0ee3kTvnDrBPRWZJKW3DaKM47dfaRC7wNdvK9UsqhX%2FJnsvp9LEr7S4YbSuof5eeHYd2k0u9dJHB9PM1MNqYo8QGOqUB5zcwwP%2BbhpjKRB5S4RF%2FHr918gVyowGqedKebp3YoRAckwCxaZKQZ0PEHdyX%2BzPCeL5Ix5ljedHB9hz6h4QRi%2BzP7PF7S0rpbmXt3dAZYxBvgNetPwKSPUsdpkxXnklDN6JNNDx%2Bq%2BZNAKWI5Df8Z3XNnkYzKWUup24QmHHxwlt54%2B0Gl2%2BVR9RKQ05M4nIIDCM18X5cBGI3%2F4bZOF%2F8jmIA9dt8&X-Amz-Signature=7b284568105bc3c5567112b779e68f6986cb7d2cc1a33e8dd009a1f075a72246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47SDDGO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC7RPCRW3oHb29jXWb7ZtBYRB3lP2HE4YovFx8OmPhwhAiEAo09OF9B0jfCsB6FmMPtTuc2Nf5kt%2BF5vjZOhoJ%2B31%2FMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyQat%2FJYvZthD5ONCrcA0xIFjsz%2F6aB0MLK9P4YysBtlKkjaCfJTVziybKlvEbPka9NQSDC8ePaZyEDFuwS%2F5zexaVG82ITNpwOgl8tiQrTMsMcOG%2BsnaKjYJyTr4aI1W%2FE3wqqjk3ratsGZ%2F0xJdB7OHFS%2FvmXznFz8OeSLwAdDxRSERH%2BQf2t1zw%2FUyq5KqgEgQi2pKLW0QZnBXMSHtGr5trrTStB1%2FlOPK%2FFWMcGcEjn1%2FoR9oyOyEmgU9LwcdjT34b3GRiY45QDW0mWWnd9ZZ15o5Ba2kjLssw8Q5LkqPJTnnWeIQQLHxrgQqnNoT9P5LH6EhzPZthhl2Cw20CEs5%2FI5YIG7EIuZgLHnOHYfKegh1axDzRzdhB1%2BH92JzVswXP6gvKS%2BTZh3gw1YuAxjtpkkatvDpnlHibsY8Ace4zXulP0miBDV5uZQvL31GtsHnIrSNnhVQdASOTIOwNC%2FOFjrNX73burGhJEh8Pj0xDvtqTcPoutdWsZxP8dwWBf0Dm7SuWD8Z0XsKIotg5IaYpVNEfXUkp5Arcb3yyDJ3%2Fvcv19FUyVzM6gWPFK0ee3kTvnDrBPRWZJKW3DaKM47dfaRC7wNdvK9UsqhX%2FJnsvp9LEr7S4YbSuof5eeHYd2k0u9dJHB9PM1MNqYo8QGOqUB5zcwwP%2BbhpjKRB5S4RF%2FHr918gVyowGqedKebp3YoRAckwCxaZKQZ0PEHdyX%2BzPCeL5Ix5ljedHB9hz6h4QRi%2BzP7PF7S0rpbmXt3dAZYxBvgNetPwKSPUsdpkxXnklDN6JNNDx%2Bq%2BZNAKWI5Df8Z3XNnkYzKWUup24QmHHxwlt54%2B0Gl2%2BVR9RKQ05M4nIIDCM18X5cBGI3%2F4bZOF%2F8jmIA9dt8&X-Amz-Signature=8e2f750624ffaf5e1bba85a04bd9a6eb317c98177248922d60aa888590100229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47SDDGO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC7RPCRW3oHb29jXWb7ZtBYRB3lP2HE4YovFx8OmPhwhAiEAo09OF9B0jfCsB6FmMPtTuc2Nf5kt%2BF5vjZOhoJ%2B31%2FMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyQat%2FJYvZthD5ONCrcA0xIFjsz%2F6aB0MLK9P4YysBtlKkjaCfJTVziybKlvEbPka9NQSDC8ePaZyEDFuwS%2F5zexaVG82ITNpwOgl8tiQrTMsMcOG%2BsnaKjYJyTr4aI1W%2FE3wqqjk3ratsGZ%2F0xJdB7OHFS%2FvmXznFz8OeSLwAdDxRSERH%2BQf2t1zw%2FUyq5KqgEgQi2pKLW0QZnBXMSHtGr5trrTStB1%2FlOPK%2FFWMcGcEjn1%2FoR9oyOyEmgU9LwcdjT34b3GRiY45QDW0mWWnd9ZZ15o5Ba2kjLssw8Q5LkqPJTnnWeIQQLHxrgQqnNoT9P5LH6EhzPZthhl2Cw20CEs5%2FI5YIG7EIuZgLHnOHYfKegh1axDzRzdhB1%2BH92JzVswXP6gvKS%2BTZh3gw1YuAxjtpkkatvDpnlHibsY8Ace4zXulP0miBDV5uZQvL31GtsHnIrSNnhVQdASOTIOwNC%2FOFjrNX73burGhJEh8Pj0xDvtqTcPoutdWsZxP8dwWBf0Dm7SuWD8Z0XsKIotg5IaYpVNEfXUkp5Arcb3yyDJ3%2Fvcv19FUyVzM6gWPFK0ee3kTvnDrBPRWZJKW3DaKM47dfaRC7wNdvK9UsqhX%2FJnsvp9LEr7S4YbSuof5eeHYd2k0u9dJHB9PM1MNqYo8QGOqUB5zcwwP%2BbhpjKRB5S4RF%2FHr918gVyowGqedKebp3YoRAckwCxaZKQZ0PEHdyX%2BzPCeL5Ix5ljedHB9hz6h4QRi%2BzP7PF7S0rpbmXt3dAZYxBvgNetPwKSPUsdpkxXnklDN6JNNDx%2Bq%2BZNAKWI5Df8Z3XNnkYzKWUup24QmHHxwlt54%2B0Gl2%2BVR9RKQ05M4nIIDCM18X5cBGI3%2F4bZOF%2F8jmIA9dt8&X-Amz-Signature=c7a7053ff0c92483063bbe61c8514cdbc80e89b4fc9115ab0cdad2407a934d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47SDDGO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC7RPCRW3oHb29jXWb7ZtBYRB3lP2HE4YovFx8OmPhwhAiEAo09OF9B0jfCsB6FmMPtTuc2Nf5kt%2BF5vjZOhoJ%2B31%2FMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyQat%2FJYvZthD5ONCrcA0xIFjsz%2F6aB0MLK9P4YysBtlKkjaCfJTVziybKlvEbPka9NQSDC8ePaZyEDFuwS%2F5zexaVG82ITNpwOgl8tiQrTMsMcOG%2BsnaKjYJyTr4aI1W%2FE3wqqjk3ratsGZ%2F0xJdB7OHFS%2FvmXznFz8OeSLwAdDxRSERH%2BQf2t1zw%2FUyq5KqgEgQi2pKLW0QZnBXMSHtGr5trrTStB1%2FlOPK%2FFWMcGcEjn1%2FoR9oyOyEmgU9LwcdjT34b3GRiY45QDW0mWWnd9ZZ15o5Ba2kjLssw8Q5LkqPJTnnWeIQQLHxrgQqnNoT9P5LH6EhzPZthhl2Cw20CEs5%2FI5YIG7EIuZgLHnOHYfKegh1axDzRzdhB1%2BH92JzVswXP6gvKS%2BTZh3gw1YuAxjtpkkatvDpnlHibsY8Ace4zXulP0miBDV5uZQvL31GtsHnIrSNnhVQdASOTIOwNC%2FOFjrNX73burGhJEh8Pj0xDvtqTcPoutdWsZxP8dwWBf0Dm7SuWD8Z0XsKIotg5IaYpVNEfXUkp5Arcb3yyDJ3%2Fvcv19FUyVzM6gWPFK0ee3kTvnDrBPRWZJKW3DaKM47dfaRC7wNdvK9UsqhX%2FJnsvp9LEr7S4YbSuof5eeHYd2k0u9dJHB9PM1MNqYo8QGOqUB5zcwwP%2BbhpjKRB5S4RF%2FHr918gVyowGqedKebp3YoRAckwCxaZKQZ0PEHdyX%2BzPCeL5Ix5ljedHB9hz6h4QRi%2BzP7PF7S0rpbmXt3dAZYxBvgNetPwKSPUsdpkxXnklDN6JNNDx%2Bq%2BZNAKWI5Df8Z3XNnkYzKWUup24QmHHxwlt54%2B0Gl2%2BVR9RKQ05M4nIIDCM18X5cBGI3%2F4bZOF%2F8jmIA9dt8&X-Amz-Signature=02b1db76edc6a7f3557863d71ceb91dfe006fdbe1c4ee931cc76492d2dfba96e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47SDDGO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC7RPCRW3oHb29jXWb7ZtBYRB3lP2HE4YovFx8OmPhwhAiEAo09OF9B0jfCsB6FmMPtTuc2Nf5kt%2BF5vjZOhoJ%2B31%2FMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyQat%2FJYvZthD5ONCrcA0xIFjsz%2F6aB0MLK9P4YysBtlKkjaCfJTVziybKlvEbPka9NQSDC8ePaZyEDFuwS%2F5zexaVG82ITNpwOgl8tiQrTMsMcOG%2BsnaKjYJyTr4aI1W%2FE3wqqjk3ratsGZ%2F0xJdB7OHFS%2FvmXznFz8OeSLwAdDxRSERH%2BQf2t1zw%2FUyq5KqgEgQi2pKLW0QZnBXMSHtGr5trrTStB1%2FlOPK%2FFWMcGcEjn1%2FoR9oyOyEmgU9LwcdjT34b3GRiY45QDW0mWWnd9ZZ15o5Ba2kjLssw8Q5LkqPJTnnWeIQQLHxrgQqnNoT9P5LH6EhzPZthhl2Cw20CEs5%2FI5YIG7EIuZgLHnOHYfKegh1axDzRzdhB1%2BH92JzVswXP6gvKS%2BTZh3gw1YuAxjtpkkatvDpnlHibsY8Ace4zXulP0miBDV5uZQvL31GtsHnIrSNnhVQdASOTIOwNC%2FOFjrNX73burGhJEh8Pj0xDvtqTcPoutdWsZxP8dwWBf0Dm7SuWD8Z0XsKIotg5IaYpVNEfXUkp5Arcb3yyDJ3%2Fvcv19FUyVzM6gWPFK0ee3kTvnDrBPRWZJKW3DaKM47dfaRC7wNdvK9UsqhX%2FJnsvp9LEr7S4YbSuof5eeHYd2k0u9dJHB9PM1MNqYo8QGOqUB5zcwwP%2BbhpjKRB5S4RF%2FHr918gVyowGqedKebp3YoRAckwCxaZKQZ0PEHdyX%2BzPCeL5Ix5ljedHB9hz6h4QRi%2BzP7PF7S0rpbmXt3dAZYxBvgNetPwKSPUsdpkxXnklDN6JNNDx%2Bq%2BZNAKWI5Df8Z3XNnkYzKWUup24QmHHxwlt54%2B0Gl2%2BVR9RKQ05M4nIIDCM18X5cBGI3%2F4bZOF%2F8jmIA9dt8&X-Amz-Signature=46606a11fee77622c48a3edd5eaf8e62f311c827459c1fe21d0c57e6280d86d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47SDDGO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC7RPCRW3oHb29jXWb7ZtBYRB3lP2HE4YovFx8OmPhwhAiEAo09OF9B0jfCsB6FmMPtTuc2Nf5kt%2BF5vjZOhoJ%2B31%2FMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyQat%2FJYvZthD5ONCrcA0xIFjsz%2F6aB0MLK9P4YysBtlKkjaCfJTVziybKlvEbPka9NQSDC8ePaZyEDFuwS%2F5zexaVG82ITNpwOgl8tiQrTMsMcOG%2BsnaKjYJyTr4aI1W%2FE3wqqjk3ratsGZ%2F0xJdB7OHFS%2FvmXznFz8OeSLwAdDxRSERH%2BQf2t1zw%2FUyq5KqgEgQi2pKLW0QZnBXMSHtGr5trrTStB1%2FlOPK%2FFWMcGcEjn1%2FoR9oyOyEmgU9LwcdjT34b3GRiY45QDW0mWWnd9ZZ15o5Ba2kjLssw8Q5LkqPJTnnWeIQQLHxrgQqnNoT9P5LH6EhzPZthhl2Cw20CEs5%2FI5YIG7EIuZgLHnOHYfKegh1axDzRzdhB1%2BH92JzVswXP6gvKS%2BTZh3gw1YuAxjtpkkatvDpnlHibsY8Ace4zXulP0miBDV5uZQvL31GtsHnIrSNnhVQdASOTIOwNC%2FOFjrNX73burGhJEh8Pj0xDvtqTcPoutdWsZxP8dwWBf0Dm7SuWD8Z0XsKIotg5IaYpVNEfXUkp5Arcb3yyDJ3%2Fvcv19FUyVzM6gWPFK0ee3kTvnDrBPRWZJKW3DaKM47dfaRC7wNdvK9UsqhX%2FJnsvp9LEr7S4YbSuof5eeHYd2k0u9dJHB9PM1MNqYo8QGOqUB5zcwwP%2BbhpjKRB5S4RF%2FHr918gVyowGqedKebp3YoRAckwCxaZKQZ0PEHdyX%2BzPCeL5Ix5ljedHB9hz6h4QRi%2BzP7PF7S0rpbmXt3dAZYxBvgNetPwKSPUsdpkxXnklDN6JNNDx%2Bq%2BZNAKWI5Df8Z3XNnkYzKWUup24QmHHxwlt54%2B0Gl2%2BVR9RKQ05M4nIIDCM18X5cBGI3%2F4bZOF%2F8jmIA9dt8&X-Amz-Signature=94ce406a591fc22ff7dff991b644c62e85c2c8e5f55dc5f2a335fd5c54d4cb86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
