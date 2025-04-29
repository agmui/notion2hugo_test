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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRYC3SU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxpLyZ3wXrgw9ne1RXRT0hiICnTw%2BiQ%2BH6n78xSZejhAIhAKth%2BZiNV57V0Z05kTtX0pi04jsbAYzavWgGAEf6nbddKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7QG83vw%2BSVowrB8Uq3AMDRO%2BhOFywqzoa9vtYt2mMtwD5iD1mImEQZbB5Zvh5F0RY0vCUy852%2B3m7c2wnm%2F%2FH4BPsmWUc4DbqiCHrub7AxYo2P1Or2zp9hiQ%2FgwUqZk0b%2BZghTguwPwzW9DtGf3X%2FmvrhxmzLZOsl%2FBBhH1h0URiJioGhYm8QKkLj1yYJFF4Pn88O7bzZVGKgXkP5vH3sR80Gfk%2FKQd5H3IOgi3Egofkky6TOzlWYNwnvNwuVrivauUFJVKZu3BJpRjeQKd9uyw3rLAVM2xXO%2FRJOLYBuuIX31y0dbw42csRRxqunijgjwr0GumR4kF3BU2s1BRVkSJX2e7Kn%2ByomNbBCTD%2BLPbpVja%2FyDSNN6L3awp1OJAXepCCcx23diQpidORn%2BFwIBRpUjIWB%2F9jyod6%2BH0Z6ga5t1nmf3ftZoH4jKa6zbix5%2Bw4zW4ZN%2FuKawKO8KL9cdqXBnxTOQXWgD8VGGnyMEIdZGZl2uHAHqRqRmvHiWyE91TbrjU8F5WxmnFulEoPkL3O8g9o4h%2FRlY1yqEXxHeXhyAk6UfzShAnXs6NIeQHqqnymnbgWCU60yTHheZKPupGLF84%2BCr7IetKazK0ov4dmQ9k9XqHIepaYGCVXajKc08OfQs9w0AawauDDBv8DABjqkAZF6K5uKH85FPgCK6LMLKRH2oN9malwIBXLQ3Hb9a%2BtDbchzS9bmWoPmcXG9agGIYyynusDTf%2BW69ZZwwPWyJ4J4QbLZh2ZCV4Nji7ANrycENTprMfEMp1%2FVqGRmsBGp2VbgiNC1015p1Enq5poC6hnlhf9NgerNsyGKyYsV%2FmqIEvz%2B3OHzd2LJIgXYh9tJh1EKcsoIZzIPdq3QudQPkgbxs1OE&X-Amz-Signature=a539c313ab9ef618933fe10796444dec8f03f970548f26275df4db6a11ceeb32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRYC3SU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxpLyZ3wXrgw9ne1RXRT0hiICnTw%2BiQ%2BH6n78xSZejhAIhAKth%2BZiNV57V0Z05kTtX0pi04jsbAYzavWgGAEf6nbddKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7QG83vw%2BSVowrB8Uq3AMDRO%2BhOFywqzoa9vtYt2mMtwD5iD1mImEQZbB5Zvh5F0RY0vCUy852%2B3m7c2wnm%2F%2FH4BPsmWUc4DbqiCHrub7AxYo2P1Or2zp9hiQ%2FgwUqZk0b%2BZghTguwPwzW9DtGf3X%2FmvrhxmzLZOsl%2FBBhH1h0URiJioGhYm8QKkLj1yYJFF4Pn88O7bzZVGKgXkP5vH3sR80Gfk%2FKQd5H3IOgi3Egofkky6TOzlWYNwnvNwuVrivauUFJVKZu3BJpRjeQKd9uyw3rLAVM2xXO%2FRJOLYBuuIX31y0dbw42csRRxqunijgjwr0GumR4kF3BU2s1BRVkSJX2e7Kn%2ByomNbBCTD%2BLPbpVja%2FyDSNN6L3awp1OJAXepCCcx23diQpidORn%2BFwIBRpUjIWB%2F9jyod6%2BH0Z6ga5t1nmf3ftZoH4jKa6zbix5%2Bw4zW4ZN%2FuKawKO8KL9cdqXBnxTOQXWgD8VGGnyMEIdZGZl2uHAHqRqRmvHiWyE91TbrjU8F5WxmnFulEoPkL3O8g9o4h%2FRlY1yqEXxHeXhyAk6UfzShAnXs6NIeQHqqnymnbgWCU60yTHheZKPupGLF84%2BCr7IetKazK0ov4dmQ9k9XqHIepaYGCVXajKc08OfQs9w0AawauDDBv8DABjqkAZF6K5uKH85FPgCK6LMLKRH2oN9malwIBXLQ3Hb9a%2BtDbchzS9bmWoPmcXG9agGIYyynusDTf%2BW69ZZwwPWyJ4J4QbLZh2ZCV4Nji7ANrycENTprMfEMp1%2FVqGRmsBGp2VbgiNC1015p1Enq5poC6hnlhf9NgerNsyGKyYsV%2FmqIEvz%2B3OHzd2LJIgXYh9tJh1EKcsoIZzIPdq3QudQPkgbxs1OE&X-Amz-Signature=5f9cde0a653e0cd6856b6b16fc426f9b11f9dda00e65269a32b95793e88172cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRYC3SU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxpLyZ3wXrgw9ne1RXRT0hiICnTw%2BiQ%2BH6n78xSZejhAIhAKth%2BZiNV57V0Z05kTtX0pi04jsbAYzavWgGAEf6nbddKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7QG83vw%2BSVowrB8Uq3AMDRO%2BhOFywqzoa9vtYt2mMtwD5iD1mImEQZbB5Zvh5F0RY0vCUy852%2B3m7c2wnm%2F%2FH4BPsmWUc4DbqiCHrub7AxYo2P1Or2zp9hiQ%2FgwUqZk0b%2BZghTguwPwzW9DtGf3X%2FmvrhxmzLZOsl%2FBBhH1h0URiJioGhYm8QKkLj1yYJFF4Pn88O7bzZVGKgXkP5vH3sR80Gfk%2FKQd5H3IOgi3Egofkky6TOzlWYNwnvNwuVrivauUFJVKZu3BJpRjeQKd9uyw3rLAVM2xXO%2FRJOLYBuuIX31y0dbw42csRRxqunijgjwr0GumR4kF3BU2s1BRVkSJX2e7Kn%2ByomNbBCTD%2BLPbpVja%2FyDSNN6L3awp1OJAXepCCcx23diQpidORn%2BFwIBRpUjIWB%2F9jyod6%2BH0Z6ga5t1nmf3ftZoH4jKa6zbix5%2Bw4zW4ZN%2FuKawKO8KL9cdqXBnxTOQXWgD8VGGnyMEIdZGZl2uHAHqRqRmvHiWyE91TbrjU8F5WxmnFulEoPkL3O8g9o4h%2FRlY1yqEXxHeXhyAk6UfzShAnXs6NIeQHqqnymnbgWCU60yTHheZKPupGLF84%2BCr7IetKazK0ov4dmQ9k9XqHIepaYGCVXajKc08OfQs9w0AawauDDBv8DABjqkAZF6K5uKH85FPgCK6LMLKRH2oN9malwIBXLQ3Hb9a%2BtDbchzS9bmWoPmcXG9agGIYyynusDTf%2BW69ZZwwPWyJ4J4QbLZh2ZCV4Nji7ANrycENTprMfEMp1%2FVqGRmsBGp2VbgiNC1015p1Enq5poC6hnlhf9NgerNsyGKyYsV%2FmqIEvz%2B3OHzd2LJIgXYh9tJh1EKcsoIZzIPdq3QudQPkgbxs1OE&X-Amz-Signature=a771cd02dd8880fa29824bed84033d458807df1528b012c2ca818581ea429361&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRYC3SU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxpLyZ3wXrgw9ne1RXRT0hiICnTw%2BiQ%2BH6n78xSZejhAIhAKth%2BZiNV57V0Z05kTtX0pi04jsbAYzavWgGAEf6nbddKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7QG83vw%2BSVowrB8Uq3AMDRO%2BhOFywqzoa9vtYt2mMtwD5iD1mImEQZbB5Zvh5F0RY0vCUy852%2B3m7c2wnm%2F%2FH4BPsmWUc4DbqiCHrub7AxYo2P1Or2zp9hiQ%2FgwUqZk0b%2BZghTguwPwzW9DtGf3X%2FmvrhxmzLZOsl%2FBBhH1h0URiJioGhYm8QKkLj1yYJFF4Pn88O7bzZVGKgXkP5vH3sR80Gfk%2FKQd5H3IOgi3Egofkky6TOzlWYNwnvNwuVrivauUFJVKZu3BJpRjeQKd9uyw3rLAVM2xXO%2FRJOLYBuuIX31y0dbw42csRRxqunijgjwr0GumR4kF3BU2s1BRVkSJX2e7Kn%2ByomNbBCTD%2BLPbpVja%2FyDSNN6L3awp1OJAXepCCcx23diQpidORn%2BFwIBRpUjIWB%2F9jyod6%2BH0Z6ga5t1nmf3ftZoH4jKa6zbix5%2Bw4zW4ZN%2FuKawKO8KL9cdqXBnxTOQXWgD8VGGnyMEIdZGZl2uHAHqRqRmvHiWyE91TbrjU8F5WxmnFulEoPkL3O8g9o4h%2FRlY1yqEXxHeXhyAk6UfzShAnXs6NIeQHqqnymnbgWCU60yTHheZKPupGLF84%2BCr7IetKazK0ov4dmQ9k9XqHIepaYGCVXajKc08OfQs9w0AawauDDBv8DABjqkAZF6K5uKH85FPgCK6LMLKRH2oN9malwIBXLQ3Hb9a%2BtDbchzS9bmWoPmcXG9agGIYyynusDTf%2BW69ZZwwPWyJ4J4QbLZh2ZCV4Nji7ANrycENTprMfEMp1%2FVqGRmsBGp2VbgiNC1015p1Enq5poC6hnlhf9NgerNsyGKyYsV%2FmqIEvz%2B3OHzd2LJIgXYh9tJh1EKcsoIZzIPdq3QudQPkgbxs1OE&X-Amz-Signature=486034d6ff5abff8002271f3d49ba2e99a4c2f846ad6603c1ac4b1b1afd5d341&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRYC3SU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxpLyZ3wXrgw9ne1RXRT0hiICnTw%2BiQ%2BH6n78xSZejhAIhAKth%2BZiNV57V0Z05kTtX0pi04jsbAYzavWgGAEf6nbddKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7QG83vw%2BSVowrB8Uq3AMDRO%2BhOFywqzoa9vtYt2mMtwD5iD1mImEQZbB5Zvh5F0RY0vCUy852%2B3m7c2wnm%2F%2FH4BPsmWUc4DbqiCHrub7AxYo2P1Or2zp9hiQ%2FgwUqZk0b%2BZghTguwPwzW9DtGf3X%2FmvrhxmzLZOsl%2FBBhH1h0URiJioGhYm8QKkLj1yYJFF4Pn88O7bzZVGKgXkP5vH3sR80Gfk%2FKQd5H3IOgi3Egofkky6TOzlWYNwnvNwuVrivauUFJVKZu3BJpRjeQKd9uyw3rLAVM2xXO%2FRJOLYBuuIX31y0dbw42csRRxqunijgjwr0GumR4kF3BU2s1BRVkSJX2e7Kn%2ByomNbBCTD%2BLPbpVja%2FyDSNN6L3awp1OJAXepCCcx23diQpidORn%2BFwIBRpUjIWB%2F9jyod6%2BH0Z6ga5t1nmf3ftZoH4jKa6zbix5%2Bw4zW4ZN%2FuKawKO8KL9cdqXBnxTOQXWgD8VGGnyMEIdZGZl2uHAHqRqRmvHiWyE91TbrjU8F5WxmnFulEoPkL3O8g9o4h%2FRlY1yqEXxHeXhyAk6UfzShAnXs6NIeQHqqnymnbgWCU60yTHheZKPupGLF84%2BCr7IetKazK0ov4dmQ9k9XqHIepaYGCVXajKc08OfQs9w0AawauDDBv8DABjqkAZF6K5uKH85FPgCK6LMLKRH2oN9malwIBXLQ3Hb9a%2BtDbchzS9bmWoPmcXG9agGIYyynusDTf%2BW69ZZwwPWyJ4J4QbLZh2ZCV4Nji7ANrycENTprMfEMp1%2FVqGRmsBGp2VbgiNC1015p1Enq5poC6hnlhf9NgerNsyGKyYsV%2FmqIEvz%2B3OHzd2LJIgXYh9tJh1EKcsoIZzIPdq3QudQPkgbxs1OE&X-Amz-Signature=14f2d82bb051b7b6e3d62688a3ea443dc28259304426e58d74edb423a7063ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRYC3SU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxpLyZ3wXrgw9ne1RXRT0hiICnTw%2BiQ%2BH6n78xSZejhAIhAKth%2BZiNV57V0Z05kTtX0pi04jsbAYzavWgGAEf6nbddKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7QG83vw%2BSVowrB8Uq3AMDRO%2BhOFywqzoa9vtYt2mMtwD5iD1mImEQZbB5Zvh5F0RY0vCUy852%2B3m7c2wnm%2F%2FH4BPsmWUc4DbqiCHrub7AxYo2P1Or2zp9hiQ%2FgwUqZk0b%2BZghTguwPwzW9DtGf3X%2FmvrhxmzLZOsl%2FBBhH1h0URiJioGhYm8QKkLj1yYJFF4Pn88O7bzZVGKgXkP5vH3sR80Gfk%2FKQd5H3IOgi3Egofkky6TOzlWYNwnvNwuVrivauUFJVKZu3BJpRjeQKd9uyw3rLAVM2xXO%2FRJOLYBuuIX31y0dbw42csRRxqunijgjwr0GumR4kF3BU2s1BRVkSJX2e7Kn%2ByomNbBCTD%2BLPbpVja%2FyDSNN6L3awp1OJAXepCCcx23diQpidORn%2BFwIBRpUjIWB%2F9jyod6%2BH0Z6ga5t1nmf3ftZoH4jKa6zbix5%2Bw4zW4ZN%2FuKawKO8KL9cdqXBnxTOQXWgD8VGGnyMEIdZGZl2uHAHqRqRmvHiWyE91TbrjU8F5WxmnFulEoPkL3O8g9o4h%2FRlY1yqEXxHeXhyAk6UfzShAnXs6NIeQHqqnymnbgWCU60yTHheZKPupGLF84%2BCr7IetKazK0ov4dmQ9k9XqHIepaYGCVXajKc08OfQs9w0AawauDDBv8DABjqkAZF6K5uKH85FPgCK6LMLKRH2oN9malwIBXLQ3Hb9a%2BtDbchzS9bmWoPmcXG9agGIYyynusDTf%2BW69ZZwwPWyJ4J4QbLZh2ZCV4Nji7ANrycENTprMfEMp1%2FVqGRmsBGp2VbgiNC1015p1Enq5poC6hnlhf9NgerNsyGKyYsV%2FmqIEvz%2B3OHzd2LJIgXYh9tJh1EKcsoIZzIPdq3QudQPkgbxs1OE&X-Amz-Signature=a570243576118267fb6ffd5080b40ce75bb26e1899ec5ed4e7f05ae8834e6735&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRYC3SU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxpLyZ3wXrgw9ne1RXRT0hiICnTw%2BiQ%2BH6n78xSZejhAIhAKth%2BZiNV57V0Z05kTtX0pi04jsbAYzavWgGAEf6nbddKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7QG83vw%2BSVowrB8Uq3AMDRO%2BhOFywqzoa9vtYt2mMtwD5iD1mImEQZbB5Zvh5F0RY0vCUy852%2B3m7c2wnm%2F%2FH4BPsmWUc4DbqiCHrub7AxYo2P1Or2zp9hiQ%2FgwUqZk0b%2BZghTguwPwzW9DtGf3X%2FmvrhxmzLZOsl%2FBBhH1h0URiJioGhYm8QKkLj1yYJFF4Pn88O7bzZVGKgXkP5vH3sR80Gfk%2FKQd5H3IOgi3Egofkky6TOzlWYNwnvNwuVrivauUFJVKZu3BJpRjeQKd9uyw3rLAVM2xXO%2FRJOLYBuuIX31y0dbw42csRRxqunijgjwr0GumR4kF3BU2s1BRVkSJX2e7Kn%2ByomNbBCTD%2BLPbpVja%2FyDSNN6L3awp1OJAXepCCcx23diQpidORn%2BFwIBRpUjIWB%2F9jyod6%2BH0Z6ga5t1nmf3ftZoH4jKa6zbix5%2Bw4zW4ZN%2FuKawKO8KL9cdqXBnxTOQXWgD8VGGnyMEIdZGZl2uHAHqRqRmvHiWyE91TbrjU8F5WxmnFulEoPkL3O8g9o4h%2FRlY1yqEXxHeXhyAk6UfzShAnXs6NIeQHqqnymnbgWCU60yTHheZKPupGLF84%2BCr7IetKazK0ov4dmQ9k9XqHIepaYGCVXajKc08OfQs9w0AawauDDBv8DABjqkAZF6K5uKH85FPgCK6LMLKRH2oN9malwIBXLQ3Hb9a%2BtDbchzS9bmWoPmcXG9agGIYyynusDTf%2BW69ZZwwPWyJ4J4QbLZh2ZCV4Nji7ANrycENTprMfEMp1%2FVqGRmsBGp2VbgiNC1015p1Enq5poC6hnlhf9NgerNsyGKyYsV%2FmqIEvz%2B3OHzd2LJIgXYh9tJh1EKcsoIZzIPdq3QudQPkgbxs1OE&X-Amz-Signature=3c59340a515c06661aedf9d8987187939bc05a7dcec6a08c5970b32f0ee0c8f8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
