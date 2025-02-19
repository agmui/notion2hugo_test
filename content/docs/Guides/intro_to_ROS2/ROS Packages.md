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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQYKB45%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDSjfaBR0x%2F%2F2YP2GBZ%2BIDln3yQZjf%2FGfA1c4tbv7kVNgIhAO0WdOM5y5DixK1W43dXy0C4eSHz1qlltW%2BzuJGDMhENKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySF0VqHtx2kEIj03oq3APFrJXv7NA7g6XEut1bYPfgkCjF8KUK1pflLq0TfXT3eJi7qWhnNMWMXv%2FWrDhBi72uTm1OJy3tlUfGXclksdtkg9MCgfCk9OKC0wUKAZIdPtcj9LPUy7BKDuMDuM94wex8HV2cTNrcddPnMrRtsMiecSIYnT0YiDHoyirq9zh83k3YXJFQ18mVgqRNwTT8TQhyQGlz6mZZ64SKUCuj0jG1X41Zyo%2FD50fgBZdg5g%2FIHXuMQxGigJLclQ9vdDe9h8ohSHmwEkHks7oWXxENysondddV%2BY7UsO%2BiyjkRgKhsMoTLbT1XeDBuUvVvJH%2BB0uw6mYHDzuRzihQ86Q9D2DzjW9U2lPnilkvcRHLFfwuwHNV09jfOZBB7uIOS9DDNjLNRuJJXBabg1Mt%2FMnGkAb2S6jXT1gFA8U7Yt1syweii6JZf8UQebX5%2BlWzT1HmBYA9nqdbnrHNCX358EiXNOEYR0YfpoyE%2BP%2BoZGilIPweyMrPsC0ozqOACbPkOV87war0K2SR2H8pXrY871FqBJMgQIzLujmihJQobIaxFmXkmz%2BHzEAg1Q3w%2FpgkN8rr2Z%2Fkb0QhjPEA5I93CCL6ofdkD6PUDPlhNC7Cg7EWlIuuHnMd5AFlo8n6Nfdp6gjCc%2B9a9BjqkAejr1%2Fb2LFcg0ln%2BwImSpuZk4p%2FPOp9xS9lq8SIxTc1pyxHqgvQ5PA%2B6fC1To6YWXDg%2FKn0XiV6%2FKtdns7k331T4aGoy2bE%2FEFqvF73Nthnt0uPYURExB4RLsNrr%2FFxOJbdx6zOx6B3GMFtlzYikqbfmLIqy1QYLVDhjosOQIOY2dK%2FYdzMEUivAagFpx1%2F1CUfmu44tY83LPUQVhFvfcBNjp1lq&X-Amz-Signature=c3cbb53fb9dcaf48d2eb37d31b2a3d9459f47c2eeeeb68520d69eee93eec022c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQYKB45%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDSjfaBR0x%2F%2F2YP2GBZ%2BIDln3yQZjf%2FGfA1c4tbv7kVNgIhAO0WdOM5y5DixK1W43dXy0C4eSHz1qlltW%2BzuJGDMhENKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySF0VqHtx2kEIj03oq3APFrJXv7NA7g6XEut1bYPfgkCjF8KUK1pflLq0TfXT3eJi7qWhnNMWMXv%2FWrDhBi72uTm1OJy3tlUfGXclksdtkg9MCgfCk9OKC0wUKAZIdPtcj9LPUy7BKDuMDuM94wex8HV2cTNrcddPnMrRtsMiecSIYnT0YiDHoyirq9zh83k3YXJFQ18mVgqRNwTT8TQhyQGlz6mZZ64SKUCuj0jG1X41Zyo%2FD50fgBZdg5g%2FIHXuMQxGigJLclQ9vdDe9h8ohSHmwEkHks7oWXxENysondddV%2BY7UsO%2BiyjkRgKhsMoTLbT1XeDBuUvVvJH%2BB0uw6mYHDzuRzihQ86Q9D2DzjW9U2lPnilkvcRHLFfwuwHNV09jfOZBB7uIOS9DDNjLNRuJJXBabg1Mt%2FMnGkAb2S6jXT1gFA8U7Yt1syweii6JZf8UQebX5%2BlWzT1HmBYA9nqdbnrHNCX358EiXNOEYR0YfpoyE%2BP%2BoZGilIPweyMrPsC0ozqOACbPkOV87war0K2SR2H8pXrY871FqBJMgQIzLujmihJQobIaxFmXkmz%2BHzEAg1Q3w%2FpgkN8rr2Z%2Fkb0QhjPEA5I93CCL6ofdkD6PUDPlhNC7Cg7EWlIuuHnMd5AFlo8n6Nfdp6gjCc%2B9a9BjqkAejr1%2Fb2LFcg0ln%2BwImSpuZk4p%2FPOp9xS9lq8SIxTc1pyxHqgvQ5PA%2B6fC1To6YWXDg%2FKn0XiV6%2FKtdns7k331T4aGoy2bE%2FEFqvF73Nthnt0uPYURExB4RLsNrr%2FFxOJbdx6zOx6B3GMFtlzYikqbfmLIqy1QYLVDhjosOQIOY2dK%2FYdzMEUivAagFpx1%2F1CUfmu44tY83LPUQVhFvfcBNjp1lq&X-Amz-Signature=06b42cfbd178506b511e968a91a532967af253d721a1f56aacff20ecd6cb0ac5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQYKB45%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDSjfaBR0x%2F%2F2YP2GBZ%2BIDln3yQZjf%2FGfA1c4tbv7kVNgIhAO0WdOM5y5DixK1W43dXy0C4eSHz1qlltW%2BzuJGDMhENKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySF0VqHtx2kEIj03oq3APFrJXv7NA7g6XEut1bYPfgkCjF8KUK1pflLq0TfXT3eJi7qWhnNMWMXv%2FWrDhBi72uTm1OJy3tlUfGXclksdtkg9MCgfCk9OKC0wUKAZIdPtcj9LPUy7BKDuMDuM94wex8HV2cTNrcddPnMrRtsMiecSIYnT0YiDHoyirq9zh83k3YXJFQ18mVgqRNwTT8TQhyQGlz6mZZ64SKUCuj0jG1X41Zyo%2FD50fgBZdg5g%2FIHXuMQxGigJLclQ9vdDe9h8ohSHmwEkHks7oWXxENysondddV%2BY7UsO%2BiyjkRgKhsMoTLbT1XeDBuUvVvJH%2BB0uw6mYHDzuRzihQ86Q9D2DzjW9U2lPnilkvcRHLFfwuwHNV09jfOZBB7uIOS9DDNjLNRuJJXBabg1Mt%2FMnGkAb2S6jXT1gFA8U7Yt1syweii6JZf8UQebX5%2BlWzT1HmBYA9nqdbnrHNCX358EiXNOEYR0YfpoyE%2BP%2BoZGilIPweyMrPsC0ozqOACbPkOV87war0K2SR2H8pXrY871FqBJMgQIzLujmihJQobIaxFmXkmz%2BHzEAg1Q3w%2FpgkN8rr2Z%2Fkb0QhjPEA5I93CCL6ofdkD6PUDPlhNC7Cg7EWlIuuHnMd5AFlo8n6Nfdp6gjCc%2B9a9BjqkAejr1%2Fb2LFcg0ln%2BwImSpuZk4p%2FPOp9xS9lq8SIxTc1pyxHqgvQ5PA%2B6fC1To6YWXDg%2FKn0XiV6%2FKtdns7k331T4aGoy2bE%2FEFqvF73Nthnt0uPYURExB4RLsNrr%2FFxOJbdx6zOx6B3GMFtlzYikqbfmLIqy1QYLVDhjosOQIOY2dK%2FYdzMEUivAagFpx1%2F1CUfmu44tY83LPUQVhFvfcBNjp1lq&X-Amz-Signature=1cd105399284e47d5df6660471a90135abdaa6f150d474b7156209188271c230&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQYKB45%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDSjfaBR0x%2F%2F2YP2GBZ%2BIDln3yQZjf%2FGfA1c4tbv7kVNgIhAO0WdOM5y5DixK1W43dXy0C4eSHz1qlltW%2BzuJGDMhENKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySF0VqHtx2kEIj03oq3APFrJXv7NA7g6XEut1bYPfgkCjF8KUK1pflLq0TfXT3eJi7qWhnNMWMXv%2FWrDhBi72uTm1OJy3tlUfGXclksdtkg9MCgfCk9OKC0wUKAZIdPtcj9LPUy7BKDuMDuM94wex8HV2cTNrcddPnMrRtsMiecSIYnT0YiDHoyirq9zh83k3YXJFQ18mVgqRNwTT8TQhyQGlz6mZZ64SKUCuj0jG1X41Zyo%2FD50fgBZdg5g%2FIHXuMQxGigJLclQ9vdDe9h8ohSHmwEkHks7oWXxENysondddV%2BY7UsO%2BiyjkRgKhsMoTLbT1XeDBuUvVvJH%2BB0uw6mYHDzuRzihQ86Q9D2DzjW9U2lPnilkvcRHLFfwuwHNV09jfOZBB7uIOS9DDNjLNRuJJXBabg1Mt%2FMnGkAb2S6jXT1gFA8U7Yt1syweii6JZf8UQebX5%2BlWzT1HmBYA9nqdbnrHNCX358EiXNOEYR0YfpoyE%2BP%2BoZGilIPweyMrPsC0ozqOACbPkOV87war0K2SR2H8pXrY871FqBJMgQIzLujmihJQobIaxFmXkmz%2BHzEAg1Q3w%2FpgkN8rr2Z%2Fkb0QhjPEA5I93CCL6ofdkD6PUDPlhNC7Cg7EWlIuuHnMd5AFlo8n6Nfdp6gjCc%2B9a9BjqkAejr1%2Fb2LFcg0ln%2BwImSpuZk4p%2FPOp9xS9lq8SIxTc1pyxHqgvQ5PA%2B6fC1To6YWXDg%2FKn0XiV6%2FKtdns7k331T4aGoy2bE%2FEFqvF73Nthnt0uPYURExB4RLsNrr%2FFxOJbdx6zOx6B3GMFtlzYikqbfmLIqy1QYLVDhjosOQIOY2dK%2FYdzMEUivAagFpx1%2F1CUfmu44tY83LPUQVhFvfcBNjp1lq&X-Amz-Signature=488e801e0c3cc3c1726578ed47125924ade2c8027c71df231c9f61f8068f619c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQYKB45%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDSjfaBR0x%2F%2F2YP2GBZ%2BIDln3yQZjf%2FGfA1c4tbv7kVNgIhAO0WdOM5y5DixK1W43dXy0C4eSHz1qlltW%2BzuJGDMhENKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySF0VqHtx2kEIj03oq3APFrJXv7NA7g6XEut1bYPfgkCjF8KUK1pflLq0TfXT3eJi7qWhnNMWMXv%2FWrDhBi72uTm1OJy3tlUfGXclksdtkg9MCgfCk9OKC0wUKAZIdPtcj9LPUy7BKDuMDuM94wex8HV2cTNrcddPnMrRtsMiecSIYnT0YiDHoyirq9zh83k3YXJFQ18mVgqRNwTT8TQhyQGlz6mZZ64SKUCuj0jG1X41Zyo%2FD50fgBZdg5g%2FIHXuMQxGigJLclQ9vdDe9h8ohSHmwEkHks7oWXxENysondddV%2BY7UsO%2BiyjkRgKhsMoTLbT1XeDBuUvVvJH%2BB0uw6mYHDzuRzihQ86Q9D2DzjW9U2lPnilkvcRHLFfwuwHNV09jfOZBB7uIOS9DDNjLNRuJJXBabg1Mt%2FMnGkAb2S6jXT1gFA8U7Yt1syweii6JZf8UQebX5%2BlWzT1HmBYA9nqdbnrHNCX358EiXNOEYR0YfpoyE%2BP%2BoZGilIPweyMrPsC0ozqOACbPkOV87war0K2SR2H8pXrY871FqBJMgQIzLujmihJQobIaxFmXkmz%2BHzEAg1Q3w%2FpgkN8rr2Z%2Fkb0QhjPEA5I93CCL6ofdkD6PUDPlhNC7Cg7EWlIuuHnMd5AFlo8n6Nfdp6gjCc%2B9a9BjqkAejr1%2Fb2LFcg0ln%2BwImSpuZk4p%2FPOp9xS9lq8SIxTc1pyxHqgvQ5PA%2B6fC1To6YWXDg%2FKn0XiV6%2FKtdns7k331T4aGoy2bE%2FEFqvF73Nthnt0uPYURExB4RLsNrr%2FFxOJbdx6zOx6B3GMFtlzYikqbfmLIqy1QYLVDhjosOQIOY2dK%2FYdzMEUivAagFpx1%2F1CUfmu44tY83LPUQVhFvfcBNjp1lq&X-Amz-Signature=745ea6a08ba8bec9eb00ff0461a09f7dea97232437cb339868c00ef93fd1d7bc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQYKB45%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDSjfaBR0x%2F%2F2YP2GBZ%2BIDln3yQZjf%2FGfA1c4tbv7kVNgIhAO0WdOM5y5DixK1W43dXy0C4eSHz1qlltW%2BzuJGDMhENKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySF0VqHtx2kEIj03oq3APFrJXv7NA7g6XEut1bYPfgkCjF8KUK1pflLq0TfXT3eJi7qWhnNMWMXv%2FWrDhBi72uTm1OJy3tlUfGXclksdtkg9MCgfCk9OKC0wUKAZIdPtcj9LPUy7BKDuMDuM94wex8HV2cTNrcddPnMrRtsMiecSIYnT0YiDHoyirq9zh83k3YXJFQ18mVgqRNwTT8TQhyQGlz6mZZ64SKUCuj0jG1X41Zyo%2FD50fgBZdg5g%2FIHXuMQxGigJLclQ9vdDe9h8ohSHmwEkHks7oWXxENysondddV%2BY7UsO%2BiyjkRgKhsMoTLbT1XeDBuUvVvJH%2BB0uw6mYHDzuRzihQ86Q9D2DzjW9U2lPnilkvcRHLFfwuwHNV09jfOZBB7uIOS9DDNjLNRuJJXBabg1Mt%2FMnGkAb2S6jXT1gFA8U7Yt1syweii6JZf8UQebX5%2BlWzT1HmBYA9nqdbnrHNCX358EiXNOEYR0YfpoyE%2BP%2BoZGilIPweyMrPsC0ozqOACbPkOV87war0K2SR2H8pXrY871FqBJMgQIzLujmihJQobIaxFmXkmz%2BHzEAg1Q3w%2FpgkN8rr2Z%2Fkb0QhjPEA5I93CCL6ofdkD6PUDPlhNC7Cg7EWlIuuHnMd5AFlo8n6Nfdp6gjCc%2B9a9BjqkAejr1%2Fb2LFcg0ln%2BwImSpuZk4p%2FPOp9xS9lq8SIxTc1pyxHqgvQ5PA%2B6fC1To6YWXDg%2FKn0XiV6%2FKtdns7k331T4aGoy2bE%2FEFqvF73Nthnt0uPYURExB4RLsNrr%2FFxOJbdx6zOx6B3GMFtlzYikqbfmLIqy1QYLVDhjosOQIOY2dK%2FYdzMEUivAagFpx1%2F1CUfmu44tY83LPUQVhFvfcBNjp1lq&X-Amz-Signature=4f7abe4e63a7aa186eb0ad8223efaca24d32e902a2a2c95c5509a5332f8f1a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQYKB45%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDSjfaBR0x%2F%2F2YP2GBZ%2BIDln3yQZjf%2FGfA1c4tbv7kVNgIhAO0WdOM5y5DixK1W43dXy0C4eSHz1qlltW%2BzuJGDMhENKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySF0VqHtx2kEIj03oq3APFrJXv7NA7g6XEut1bYPfgkCjF8KUK1pflLq0TfXT3eJi7qWhnNMWMXv%2FWrDhBi72uTm1OJy3tlUfGXclksdtkg9MCgfCk9OKC0wUKAZIdPtcj9LPUy7BKDuMDuM94wex8HV2cTNrcddPnMrRtsMiecSIYnT0YiDHoyirq9zh83k3YXJFQ18mVgqRNwTT8TQhyQGlz6mZZ64SKUCuj0jG1X41Zyo%2FD50fgBZdg5g%2FIHXuMQxGigJLclQ9vdDe9h8ohSHmwEkHks7oWXxENysondddV%2BY7UsO%2BiyjkRgKhsMoTLbT1XeDBuUvVvJH%2BB0uw6mYHDzuRzihQ86Q9D2DzjW9U2lPnilkvcRHLFfwuwHNV09jfOZBB7uIOS9DDNjLNRuJJXBabg1Mt%2FMnGkAb2S6jXT1gFA8U7Yt1syweii6JZf8UQebX5%2BlWzT1HmBYA9nqdbnrHNCX358EiXNOEYR0YfpoyE%2BP%2BoZGilIPweyMrPsC0ozqOACbPkOV87war0K2SR2H8pXrY871FqBJMgQIzLujmihJQobIaxFmXkmz%2BHzEAg1Q3w%2FpgkN8rr2Z%2Fkb0QhjPEA5I93CCL6ofdkD6PUDPlhNC7Cg7EWlIuuHnMd5AFlo8n6Nfdp6gjCc%2B9a9BjqkAejr1%2Fb2LFcg0ln%2BwImSpuZk4p%2FPOp9xS9lq8SIxTc1pyxHqgvQ5PA%2B6fC1To6YWXDg%2FKn0XiV6%2FKtdns7k331T4aGoy2bE%2FEFqvF73Nthnt0uPYURExB4RLsNrr%2FFxOJbdx6zOx6B3GMFtlzYikqbfmLIqy1QYLVDhjosOQIOY2dK%2FYdzMEUivAagFpx1%2F1CUfmu44tY83LPUQVhFvfcBNjp1lq&X-Amz-Signature=8e50ba07451aac01d75f7f73570355e71b78915b811670655a908c39acc8a0be&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
