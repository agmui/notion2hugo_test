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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RREUOUI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuTiMDLMegezSEXenmwQGvQjiZSJ2Xp30QLY%2BtKoXEnQIgQ0s1T8jtT5x82xEQiM1Psc%2FhFnF1dvY3jMFTzKJUQCIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMTpAK8fisIRWwTdlSrcAzu1rgrioqlV%2BMD8%2Faqryuo3%2FzUTSpIoBhmZAxwT%2FFHr81SrkSvZ6dqEdkwxSuGoa6gYjwJ1w9n%2BcO2fvl%2F7Ib7NweTZOzZC4KXWOaZomVXpbxkhKTrc%2BPLnNqSCo5n3OK5jTRGd5rqcDQ1h%2FwzjALDngIjBZMqx8yp%2BZil7tNtLb%2F3Bk%2F09jcSm%2BES1Sd0d05ElSoJKLpsyd1Pm9cb%2BRjAPRWOHE9F8WOwpXnQFINncem9X1ynnLMt9e4I4xU4Gkbjl6VaVYT5bqKIhm%2B%2F8BYUXJxjSiqdTpQ0ZbMhS0LwRnwEWBkvS%2BPPMwEvI0iJk8RcC5aDTrDPJPoKR36Q3K1KavnRViT07U2AIPHAP88GwpbahGMgULbnZgCX%2BnVSJCX%2FhEAQa%2B723TaVDxXz3hXsi5PZv9rGA3XXHrEpl%2BvlIvxk7%2FZnn8XMZf5h4MqJGVgagaC2p279vYDetssqTIANTsfqUGMKkmQTFZN2huKUfTMbsbnYYAHZXTjYpi%2BWdllrUOJDzEicakJagVudDLAo4Rb%2FZg7erOJMyYVA2qPo%2BiE3%2FnsAqLWvQ9MEtUfdGag1K2Mrq7xB5nUOtIWJTff5Xs8DHMVKrk%2BQIM7yRVqU0LI1vzkE%2FSLBvJFWHMLawgsAGOqUB1spopcmvfb45bnSreyfog86JTwfxAvrmr1EBLHnXuF0oj1cSMP%2FVeYasGpQ8oBb9MC2OAXwxh0OiaaPak%2FjIl6WagFfz0b1IMYk%2FfgUy0qGMmlLcgRFB%2F4SQkS0rCHgnGbEEGJRRd59m6z%2FBcKKyeNBRmsUCtQlmcaJoLYjZY%2BAO6Mu3oywS3dTg29Nl5xyesB9CaNdKIhDdJRUUtQ8U%2Beo4EKqo&X-Amz-Signature=2b2597c1e3afff59b7c4b45079f6b97bf2af7918cab24502f9c9941b0ad53ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RREUOUI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuTiMDLMegezSEXenmwQGvQjiZSJ2Xp30QLY%2BtKoXEnQIgQ0s1T8jtT5x82xEQiM1Psc%2FhFnF1dvY3jMFTzKJUQCIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMTpAK8fisIRWwTdlSrcAzu1rgrioqlV%2BMD8%2Faqryuo3%2FzUTSpIoBhmZAxwT%2FFHr81SrkSvZ6dqEdkwxSuGoa6gYjwJ1w9n%2BcO2fvl%2F7Ib7NweTZOzZC4KXWOaZomVXpbxkhKTrc%2BPLnNqSCo5n3OK5jTRGd5rqcDQ1h%2FwzjALDngIjBZMqx8yp%2BZil7tNtLb%2F3Bk%2F09jcSm%2BES1Sd0d05ElSoJKLpsyd1Pm9cb%2BRjAPRWOHE9F8WOwpXnQFINncem9X1ynnLMt9e4I4xU4Gkbjl6VaVYT5bqKIhm%2B%2F8BYUXJxjSiqdTpQ0ZbMhS0LwRnwEWBkvS%2BPPMwEvI0iJk8RcC5aDTrDPJPoKR36Q3K1KavnRViT07U2AIPHAP88GwpbahGMgULbnZgCX%2BnVSJCX%2FhEAQa%2B723TaVDxXz3hXsi5PZv9rGA3XXHrEpl%2BvlIvxk7%2FZnn8XMZf5h4MqJGVgagaC2p279vYDetssqTIANTsfqUGMKkmQTFZN2huKUfTMbsbnYYAHZXTjYpi%2BWdllrUOJDzEicakJagVudDLAo4Rb%2FZg7erOJMyYVA2qPo%2BiE3%2FnsAqLWvQ9MEtUfdGag1K2Mrq7xB5nUOtIWJTff5Xs8DHMVKrk%2BQIM7yRVqU0LI1vzkE%2FSLBvJFWHMLawgsAGOqUB1spopcmvfb45bnSreyfog86JTwfxAvrmr1EBLHnXuF0oj1cSMP%2FVeYasGpQ8oBb9MC2OAXwxh0OiaaPak%2FjIl6WagFfz0b1IMYk%2FfgUy0qGMmlLcgRFB%2F4SQkS0rCHgnGbEEGJRRd59m6z%2FBcKKyeNBRmsUCtQlmcaJoLYjZY%2BAO6Mu3oywS3dTg29Nl5xyesB9CaNdKIhDdJRUUtQ8U%2Beo4EKqo&X-Amz-Signature=7c903566aa84a97fcf8b1d62581bba86148b5a426271c3d4349b54d5bf09c8a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RREUOUI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuTiMDLMegezSEXenmwQGvQjiZSJ2Xp30QLY%2BtKoXEnQIgQ0s1T8jtT5x82xEQiM1Psc%2FhFnF1dvY3jMFTzKJUQCIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMTpAK8fisIRWwTdlSrcAzu1rgrioqlV%2BMD8%2Faqryuo3%2FzUTSpIoBhmZAxwT%2FFHr81SrkSvZ6dqEdkwxSuGoa6gYjwJ1w9n%2BcO2fvl%2F7Ib7NweTZOzZC4KXWOaZomVXpbxkhKTrc%2BPLnNqSCo5n3OK5jTRGd5rqcDQ1h%2FwzjALDngIjBZMqx8yp%2BZil7tNtLb%2F3Bk%2F09jcSm%2BES1Sd0d05ElSoJKLpsyd1Pm9cb%2BRjAPRWOHE9F8WOwpXnQFINncem9X1ynnLMt9e4I4xU4Gkbjl6VaVYT5bqKIhm%2B%2F8BYUXJxjSiqdTpQ0ZbMhS0LwRnwEWBkvS%2BPPMwEvI0iJk8RcC5aDTrDPJPoKR36Q3K1KavnRViT07U2AIPHAP88GwpbahGMgULbnZgCX%2BnVSJCX%2FhEAQa%2B723TaVDxXz3hXsi5PZv9rGA3XXHrEpl%2BvlIvxk7%2FZnn8XMZf5h4MqJGVgagaC2p279vYDetssqTIANTsfqUGMKkmQTFZN2huKUfTMbsbnYYAHZXTjYpi%2BWdllrUOJDzEicakJagVudDLAo4Rb%2FZg7erOJMyYVA2qPo%2BiE3%2FnsAqLWvQ9MEtUfdGag1K2Mrq7xB5nUOtIWJTff5Xs8DHMVKrk%2BQIM7yRVqU0LI1vzkE%2FSLBvJFWHMLawgsAGOqUB1spopcmvfb45bnSreyfog86JTwfxAvrmr1EBLHnXuF0oj1cSMP%2FVeYasGpQ8oBb9MC2OAXwxh0OiaaPak%2FjIl6WagFfz0b1IMYk%2FfgUy0qGMmlLcgRFB%2F4SQkS0rCHgnGbEEGJRRd59m6z%2FBcKKyeNBRmsUCtQlmcaJoLYjZY%2BAO6Mu3oywS3dTg29Nl5xyesB9CaNdKIhDdJRUUtQ8U%2Beo4EKqo&X-Amz-Signature=1c762be48c0d2f8dd57c5e6900c9837186e9e124752943fe8b23576e64c69a8d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RREUOUI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuTiMDLMegezSEXenmwQGvQjiZSJ2Xp30QLY%2BtKoXEnQIgQ0s1T8jtT5x82xEQiM1Psc%2FhFnF1dvY3jMFTzKJUQCIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMTpAK8fisIRWwTdlSrcAzu1rgrioqlV%2BMD8%2Faqryuo3%2FzUTSpIoBhmZAxwT%2FFHr81SrkSvZ6dqEdkwxSuGoa6gYjwJ1w9n%2BcO2fvl%2F7Ib7NweTZOzZC4KXWOaZomVXpbxkhKTrc%2BPLnNqSCo5n3OK5jTRGd5rqcDQ1h%2FwzjALDngIjBZMqx8yp%2BZil7tNtLb%2F3Bk%2F09jcSm%2BES1Sd0d05ElSoJKLpsyd1Pm9cb%2BRjAPRWOHE9F8WOwpXnQFINncem9X1ynnLMt9e4I4xU4Gkbjl6VaVYT5bqKIhm%2B%2F8BYUXJxjSiqdTpQ0ZbMhS0LwRnwEWBkvS%2BPPMwEvI0iJk8RcC5aDTrDPJPoKR36Q3K1KavnRViT07U2AIPHAP88GwpbahGMgULbnZgCX%2BnVSJCX%2FhEAQa%2B723TaVDxXz3hXsi5PZv9rGA3XXHrEpl%2BvlIvxk7%2FZnn8XMZf5h4MqJGVgagaC2p279vYDetssqTIANTsfqUGMKkmQTFZN2huKUfTMbsbnYYAHZXTjYpi%2BWdllrUOJDzEicakJagVudDLAo4Rb%2FZg7erOJMyYVA2qPo%2BiE3%2FnsAqLWvQ9MEtUfdGag1K2Mrq7xB5nUOtIWJTff5Xs8DHMVKrk%2BQIM7yRVqU0LI1vzkE%2FSLBvJFWHMLawgsAGOqUB1spopcmvfb45bnSreyfog86JTwfxAvrmr1EBLHnXuF0oj1cSMP%2FVeYasGpQ8oBb9MC2OAXwxh0OiaaPak%2FjIl6WagFfz0b1IMYk%2FfgUy0qGMmlLcgRFB%2F4SQkS0rCHgnGbEEGJRRd59m6z%2FBcKKyeNBRmsUCtQlmcaJoLYjZY%2BAO6Mu3oywS3dTg29Nl5xyesB9CaNdKIhDdJRUUtQ8U%2Beo4EKqo&X-Amz-Signature=408c020f11c1e04fa64d98b780963cf1d371f1dbccf93d3ff3ef009ddcfb0f56&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RREUOUI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuTiMDLMegezSEXenmwQGvQjiZSJ2Xp30QLY%2BtKoXEnQIgQ0s1T8jtT5x82xEQiM1Psc%2FhFnF1dvY3jMFTzKJUQCIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMTpAK8fisIRWwTdlSrcAzu1rgrioqlV%2BMD8%2Faqryuo3%2FzUTSpIoBhmZAxwT%2FFHr81SrkSvZ6dqEdkwxSuGoa6gYjwJ1w9n%2BcO2fvl%2F7Ib7NweTZOzZC4KXWOaZomVXpbxkhKTrc%2BPLnNqSCo5n3OK5jTRGd5rqcDQ1h%2FwzjALDngIjBZMqx8yp%2BZil7tNtLb%2F3Bk%2F09jcSm%2BES1Sd0d05ElSoJKLpsyd1Pm9cb%2BRjAPRWOHE9F8WOwpXnQFINncem9X1ynnLMt9e4I4xU4Gkbjl6VaVYT5bqKIhm%2B%2F8BYUXJxjSiqdTpQ0ZbMhS0LwRnwEWBkvS%2BPPMwEvI0iJk8RcC5aDTrDPJPoKR36Q3K1KavnRViT07U2AIPHAP88GwpbahGMgULbnZgCX%2BnVSJCX%2FhEAQa%2B723TaVDxXz3hXsi5PZv9rGA3XXHrEpl%2BvlIvxk7%2FZnn8XMZf5h4MqJGVgagaC2p279vYDetssqTIANTsfqUGMKkmQTFZN2huKUfTMbsbnYYAHZXTjYpi%2BWdllrUOJDzEicakJagVudDLAo4Rb%2FZg7erOJMyYVA2qPo%2BiE3%2FnsAqLWvQ9MEtUfdGag1K2Mrq7xB5nUOtIWJTff5Xs8DHMVKrk%2BQIM7yRVqU0LI1vzkE%2FSLBvJFWHMLawgsAGOqUB1spopcmvfb45bnSreyfog86JTwfxAvrmr1EBLHnXuF0oj1cSMP%2FVeYasGpQ8oBb9MC2OAXwxh0OiaaPak%2FjIl6WagFfz0b1IMYk%2FfgUy0qGMmlLcgRFB%2F4SQkS0rCHgnGbEEGJRRd59m6z%2FBcKKyeNBRmsUCtQlmcaJoLYjZY%2BAO6Mu3oywS3dTg29Nl5xyesB9CaNdKIhDdJRUUtQ8U%2Beo4EKqo&X-Amz-Signature=aa69c3537c892092e556aee91235511e6942cade133698c19f054f9c778e181b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RREUOUI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuTiMDLMegezSEXenmwQGvQjiZSJ2Xp30QLY%2BtKoXEnQIgQ0s1T8jtT5x82xEQiM1Psc%2FhFnF1dvY3jMFTzKJUQCIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMTpAK8fisIRWwTdlSrcAzu1rgrioqlV%2BMD8%2Faqryuo3%2FzUTSpIoBhmZAxwT%2FFHr81SrkSvZ6dqEdkwxSuGoa6gYjwJ1w9n%2BcO2fvl%2F7Ib7NweTZOzZC4KXWOaZomVXpbxkhKTrc%2BPLnNqSCo5n3OK5jTRGd5rqcDQ1h%2FwzjALDngIjBZMqx8yp%2BZil7tNtLb%2F3Bk%2F09jcSm%2BES1Sd0d05ElSoJKLpsyd1Pm9cb%2BRjAPRWOHE9F8WOwpXnQFINncem9X1ynnLMt9e4I4xU4Gkbjl6VaVYT5bqKIhm%2B%2F8BYUXJxjSiqdTpQ0ZbMhS0LwRnwEWBkvS%2BPPMwEvI0iJk8RcC5aDTrDPJPoKR36Q3K1KavnRViT07U2AIPHAP88GwpbahGMgULbnZgCX%2BnVSJCX%2FhEAQa%2B723TaVDxXz3hXsi5PZv9rGA3XXHrEpl%2BvlIvxk7%2FZnn8XMZf5h4MqJGVgagaC2p279vYDetssqTIANTsfqUGMKkmQTFZN2huKUfTMbsbnYYAHZXTjYpi%2BWdllrUOJDzEicakJagVudDLAo4Rb%2FZg7erOJMyYVA2qPo%2BiE3%2FnsAqLWvQ9MEtUfdGag1K2Mrq7xB5nUOtIWJTff5Xs8DHMVKrk%2BQIM7yRVqU0LI1vzkE%2FSLBvJFWHMLawgsAGOqUB1spopcmvfb45bnSreyfog86JTwfxAvrmr1EBLHnXuF0oj1cSMP%2FVeYasGpQ8oBb9MC2OAXwxh0OiaaPak%2FjIl6WagFfz0b1IMYk%2FfgUy0qGMmlLcgRFB%2F4SQkS0rCHgnGbEEGJRRd59m6z%2FBcKKyeNBRmsUCtQlmcaJoLYjZY%2BAO6Mu3oywS3dTg29Nl5xyesB9CaNdKIhDdJRUUtQ8U%2Beo4EKqo&X-Amz-Signature=ba4d9aa47521fc11766e209b7dc7432d9da446136944d48dbafe94f4f50910db&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RREUOUI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuTiMDLMegezSEXenmwQGvQjiZSJ2Xp30QLY%2BtKoXEnQIgQ0s1T8jtT5x82xEQiM1Psc%2FhFnF1dvY3jMFTzKJUQCIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMTpAK8fisIRWwTdlSrcAzu1rgrioqlV%2BMD8%2Faqryuo3%2FzUTSpIoBhmZAxwT%2FFHr81SrkSvZ6dqEdkwxSuGoa6gYjwJ1w9n%2BcO2fvl%2F7Ib7NweTZOzZC4KXWOaZomVXpbxkhKTrc%2BPLnNqSCo5n3OK5jTRGd5rqcDQ1h%2FwzjALDngIjBZMqx8yp%2BZil7tNtLb%2F3Bk%2F09jcSm%2BES1Sd0d05ElSoJKLpsyd1Pm9cb%2BRjAPRWOHE9F8WOwpXnQFINncem9X1ynnLMt9e4I4xU4Gkbjl6VaVYT5bqKIhm%2B%2F8BYUXJxjSiqdTpQ0ZbMhS0LwRnwEWBkvS%2BPPMwEvI0iJk8RcC5aDTrDPJPoKR36Q3K1KavnRViT07U2AIPHAP88GwpbahGMgULbnZgCX%2BnVSJCX%2FhEAQa%2B723TaVDxXz3hXsi5PZv9rGA3XXHrEpl%2BvlIvxk7%2FZnn8XMZf5h4MqJGVgagaC2p279vYDetssqTIANTsfqUGMKkmQTFZN2huKUfTMbsbnYYAHZXTjYpi%2BWdllrUOJDzEicakJagVudDLAo4Rb%2FZg7erOJMyYVA2qPo%2BiE3%2FnsAqLWvQ9MEtUfdGag1K2Mrq7xB5nUOtIWJTff5Xs8DHMVKrk%2BQIM7yRVqU0LI1vzkE%2FSLBvJFWHMLawgsAGOqUB1spopcmvfb45bnSreyfog86JTwfxAvrmr1EBLHnXuF0oj1cSMP%2FVeYasGpQ8oBb9MC2OAXwxh0OiaaPak%2FjIl6WagFfz0b1IMYk%2FfgUy0qGMmlLcgRFB%2F4SQkS0rCHgnGbEEGJRRd59m6z%2FBcKKyeNBRmsUCtQlmcaJoLYjZY%2BAO6Mu3oywS3dTg29Nl5xyesB9CaNdKIhDdJRUUtQ8U%2Beo4EKqo&X-Amz-Signature=4202807929db8bbbd76e1a88d12341f535744dc708cf18d5a61ae8fd087fbb0c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
