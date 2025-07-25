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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZG6LSNV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDSmfhpYLZAKGVkD%2FkJ7%2B2eQbXtqICFYGq27mU9kqMruwIgImSxWyU%2Ba6IVNHoNyBw16DxDb6nRV2PqQ6ggsbwpU%2Bsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDC5%2B5qgYOBAfBMWUoCrcA%2FIATzETXKc%2F4A6Uk%2FzzUoE%2BAyXcdfolXZ9yTFRPXY3u4skI%2FJItbDqsM21hPEUnDGdYEtaW%2BgbwUU4Azyox1rHdtc3pO9tytbpX3gWQg%2Batvb2RVepYrQeqKmhwHd%2FTk19LvHCh38iSxEv2T8WyjNYUhEvF5YBkvvN14NDwgyPnXz0p5T%2FSq9IivIgSx%2BOwrrcS%2B1lGhsFtwDAx2hlgcwnZbIRmZPJW0vZhD4AyFbBqiiv0rdypEWN3XI7xsRxpqQQyB87E%2F%2BWvbQoOjXu7xbBwu9uT3Go52jksr6L85YbL1MGimVQKs0izvMnPFhMepmT7mho3UMpNcoN4HICFu7YcQE9XbqcuDdS%2B%2BcL%2B09xR6McMGWYW6feMkZ4vbTlSq5d8Nsh2wT0fdjM6J39bFkc55emkicj%2FOz9bNbrYRcP3%2B7rYpe2GAI9DX2160sOdQp93ejx9%2FUBiaSPjuSbjkzwV3xvpBv%2FNS8QXmG55spdHBk4dxieUgMPge5kXT1i0IIVklEJSSzGoTCFgHpJJEj4tbDBXQ9%2FFDj0m2YUnML8eJ%2BnLJvPaOaWqBEwsS%2FF2Ljrpe2l3nIJy4T39ilEagGBxl6MDhBt8hms%2BSR2CZQRpPxvHvy96BnmAwgVKMM6qj8QGOqUBRTiWl89HUgWC%2Fx0bx3ke0l5A7VNQwOKLCQq%2FbO8aaZrMFjaJfQQs%2BuDa7SIKB5DRBx%2BrSJQFoq6BuulmeIyS7XrmqHka4u%2BrnNUwQMFF0PUfjP30ARMdkRtg1NQ%2FN0YTUucq482EoRBsWZ4YGDMC9Ngxt0QqeLMR1riMYBB221LnNOHznFKySmdlTwLIcS1A1P0MpNI7TPETKVZ8XgWtVkf4Lt6W&X-Amz-Signature=efb68bf18084edf1d2cf82aa603d6905a61e24a7bf72ce03ed1bf18c360d933c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZG6LSNV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDSmfhpYLZAKGVkD%2FkJ7%2B2eQbXtqICFYGq27mU9kqMruwIgImSxWyU%2Ba6IVNHoNyBw16DxDb6nRV2PqQ6ggsbwpU%2Bsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDC5%2B5qgYOBAfBMWUoCrcA%2FIATzETXKc%2F4A6Uk%2FzzUoE%2BAyXcdfolXZ9yTFRPXY3u4skI%2FJItbDqsM21hPEUnDGdYEtaW%2BgbwUU4Azyox1rHdtc3pO9tytbpX3gWQg%2Batvb2RVepYrQeqKmhwHd%2FTk19LvHCh38iSxEv2T8WyjNYUhEvF5YBkvvN14NDwgyPnXz0p5T%2FSq9IivIgSx%2BOwrrcS%2B1lGhsFtwDAx2hlgcwnZbIRmZPJW0vZhD4AyFbBqiiv0rdypEWN3XI7xsRxpqQQyB87E%2F%2BWvbQoOjXu7xbBwu9uT3Go52jksr6L85YbL1MGimVQKs0izvMnPFhMepmT7mho3UMpNcoN4HICFu7YcQE9XbqcuDdS%2B%2BcL%2B09xR6McMGWYW6feMkZ4vbTlSq5d8Nsh2wT0fdjM6J39bFkc55emkicj%2FOz9bNbrYRcP3%2B7rYpe2GAI9DX2160sOdQp93ejx9%2FUBiaSPjuSbjkzwV3xvpBv%2FNS8QXmG55spdHBk4dxieUgMPge5kXT1i0IIVklEJSSzGoTCFgHpJJEj4tbDBXQ9%2FFDj0m2YUnML8eJ%2BnLJvPaOaWqBEwsS%2FF2Ljrpe2l3nIJy4T39ilEagGBxl6MDhBt8hms%2BSR2CZQRpPxvHvy96BnmAwgVKMM6qj8QGOqUBRTiWl89HUgWC%2Fx0bx3ke0l5A7VNQwOKLCQq%2FbO8aaZrMFjaJfQQs%2BuDa7SIKB5DRBx%2BrSJQFoq6BuulmeIyS7XrmqHka4u%2BrnNUwQMFF0PUfjP30ARMdkRtg1NQ%2FN0YTUucq482EoRBsWZ4YGDMC9Ngxt0QqeLMR1riMYBB221LnNOHznFKySmdlTwLIcS1A1P0MpNI7TPETKVZ8XgWtVkf4Lt6W&X-Amz-Signature=888e2cb854ce7518888dfa7c4937dbeef677ed9c3d6e9962cc1cc0d50291143e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZG6LSNV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDSmfhpYLZAKGVkD%2FkJ7%2B2eQbXtqICFYGq27mU9kqMruwIgImSxWyU%2Ba6IVNHoNyBw16DxDb6nRV2PqQ6ggsbwpU%2Bsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDC5%2B5qgYOBAfBMWUoCrcA%2FIATzETXKc%2F4A6Uk%2FzzUoE%2BAyXcdfolXZ9yTFRPXY3u4skI%2FJItbDqsM21hPEUnDGdYEtaW%2BgbwUU4Azyox1rHdtc3pO9tytbpX3gWQg%2Batvb2RVepYrQeqKmhwHd%2FTk19LvHCh38iSxEv2T8WyjNYUhEvF5YBkvvN14NDwgyPnXz0p5T%2FSq9IivIgSx%2BOwrrcS%2B1lGhsFtwDAx2hlgcwnZbIRmZPJW0vZhD4AyFbBqiiv0rdypEWN3XI7xsRxpqQQyB87E%2F%2BWvbQoOjXu7xbBwu9uT3Go52jksr6L85YbL1MGimVQKs0izvMnPFhMepmT7mho3UMpNcoN4HICFu7YcQE9XbqcuDdS%2B%2BcL%2B09xR6McMGWYW6feMkZ4vbTlSq5d8Nsh2wT0fdjM6J39bFkc55emkicj%2FOz9bNbrYRcP3%2B7rYpe2GAI9DX2160sOdQp93ejx9%2FUBiaSPjuSbjkzwV3xvpBv%2FNS8QXmG55spdHBk4dxieUgMPge5kXT1i0IIVklEJSSzGoTCFgHpJJEj4tbDBXQ9%2FFDj0m2YUnML8eJ%2BnLJvPaOaWqBEwsS%2FF2Ljrpe2l3nIJy4T39ilEagGBxl6MDhBt8hms%2BSR2CZQRpPxvHvy96BnmAwgVKMM6qj8QGOqUBRTiWl89HUgWC%2Fx0bx3ke0l5A7VNQwOKLCQq%2FbO8aaZrMFjaJfQQs%2BuDa7SIKB5DRBx%2BrSJQFoq6BuulmeIyS7XrmqHka4u%2BrnNUwQMFF0PUfjP30ARMdkRtg1NQ%2FN0YTUucq482EoRBsWZ4YGDMC9Ngxt0QqeLMR1riMYBB221LnNOHznFKySmdlTwLIcS1A1P0MpNI7TPETKVZ8XgWtVkf4Lt6W&X-Amz-Signature=ba9c397338c56c2ef732fb1ba16318b80d7c70c630e89aadc084375e20648665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZG6LSNV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDSmfhpYLZAKGVkD%2FkJ7%2B2eQbXtqICFYGq27mU9kqMruwIgImSxWyU%2Ba6IVNHoNyBw16DxDb6nRV2PqQ6ggsbwpU%2Bsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDC5%2B5qgYOBAfBMWUoCrcA%2FIATzETXKc%2F4A6Uk%2FzzUoE%2BAyXcdfolXZ9yTFRPXY3u4skI%2FJItbDqsM21hPEUnDGdYEtaW%2BgbwUU4Azyox1rHdtc3pO9tytbpX3gWQg%2Batvb2RVepYrQeqKmhwHd%2FTk19LvHCh38iSxEv2T8WyjNYUhEvF5YBkvvN14NDwgyPnXz0p5T%2FSq9IivIgSx%2BOwrrcS%2B1lGhsFtwDAx2hlgcwnZbIRmZPJW0vZhD4AyFbBqiiv0rdypEWN3XI7xsRxpqQQyB87E%2F%2BWvbQoOjXu7xbBwu9uT3Go52jksr6L85YbL1MGimVQKs0izvMnPFhMepmT7mho3UMpNcoN4HICFu7YcQE9XbqcuDdS%2B%2BcL%2B09xR6McMGWYW6feMkZ4vbTlSq5d8Nsh2wT0fdjM6J39bFkc55emkicj%2FOz9bNbrYRcP3%2B7rYpe2GAI9DX2160sOdQp93ejx9%2FUBiaSPjuSbjkzwV3xvpBv%2FNS8QXmG55spdHBk4dxieUgMPge5kXT1i0IIVklEJSSzGoTCFgHpJJEj4tbDBXQ9%2FFDj0m2YUnML8eJ%2BnLJvPaOaWqBEwsS%2FF2Ljrpe2l3nIJy4T39ilEagGBxl6MDhBt8hms%2BSR2CZQRpPxvHvy96BnmAwgVKMM6qj8QGOqUBRTiWl89HUgWC%2Fx0bx3ke0l5A7VNQwOKLCQq%2FbO8aaZrMFjaJfQQs%2BuDa7SIKB5DRBx%2BrSJQFoq6BuulmeIyS7XrmqHka4u%2BrnNUwQMFF0PUfjP30ARMdkRtg1NQ%2FN0YTUucq482EoRBsWZ4YGDMC9Ngxt0QqeLMR1riMYBB221LnNOHznFKySmdlTwLIcS1A1P0MpNI7TPETKVZ8XgWtVkf4Lt6W&X-Amz-Signature=aefaea28437e6920afd129b51be843eda49024666138902b2c88fb84a5d864f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZG6LSNV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDSmfhpYLZAKGVkD%2FkJ7%2B2eQbXtqICFYGq27mU9kqMruwIgImSxWyU%2Ba6IVNHoNyBw16DxDb6nRV2PqQ6ggsbwpU%2Bsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDC5%2B5qgYOBAfBMWUoCrcA%2FIATzETXKc%2F4A6Uk%2FzzUoE%2BAyXcdfolXZ9yTFRPXY3u4skI%2FJItbDqsM21hPEUnDGdYEtaW%2BgbwUU4Azyox1rHdtc3pO9tytbpX3gWQg%2Batvb2RVepYrQeqKmhwHd%2FTk19LvHCh38iSxEv2T8WyjNYUhEvF5YBkvvN14NDwgyPnXz0p5T%2FSq9IivIgSx%2BOwrrcS%2B1lGhsFtwDAx2hlgcwnZbIRmZPJW0vZhD4AyFbBqiiv0rdypEWN3XI7xsRxpqQQyB87E%2F%2BWvbQoOjXu7xbBwu9uT3Go52jksr6L85YbL1MGimVQKs0izvMnPFhMepmT7mho3UMpNcoN4HICFu7YcQE9XbqcuDdS%2B%2BcL%2B09xR6McMGWYW6feMkZ4vbTlSq5d8Nsh2wT0fdjM6J39bFkc55emkicj%2FOz9bNbrYRcP3%2B7rYpe2GAI9DX2160sOdQp93ejx9%2FUBiaSPjuSbjkzwV3xvpBv%2FNS8QXmG55spdHBk4dxieUgMPge5kXT1i0IIVklEJSSzGoTCFgHpJJEj4tbDBXQ9%2FFDj0m2YUnML8eJ%2BnLJvPaOaWqBEwsS%2FF2Ljrpe2l3nIJy4T39ilEagGBxl6MDhBt8hms%2BSR2CZQRpPxvHvy96BnmAwgVKMM6qj8QGOqUBRTiWl89HUgWC%2Fx0bx3ke0l5A7VNQwOKLCQq%2FbO8aaZrMFjaJfQQs%2BuDa7SIKB5DRBx%2BrSJQFoq6BuulmeIyS7XrmqHka4u%2BrnNUwQMFF0PUfjP30ARMdkRtg1NQ%2FN0YTUucq482EoRBsWZ4YGDMC9Ngxt0QqeLMR1riMYBB221LnNOHznFKySmdlTwLIcS1A1P0MpNI7TPETKVZ8XgWtVkf4Lt6W&X-Amz-Signature=03cfcf082997dcd106a98cb56f9aa11ad2d0af58c38ea4ecff0b40d0b32e3bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZG6LSNV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDSmfhpYLZAKGVkD%2FkJ7%2B2eQbXtqICFYGq27mU9kqMruwIgImSxWyU%2Ba6IVNHoNyBw16DxDb6nRV2PqQ6ggsbwpU%2Bsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDC5%2B5qgYOBAfBMWUoCrcA%2FIATzETXKc%2F4A6Uk%2FzzUoE%2BAyXcdfolXZ9yTFRPXY3u4skI%2FJItbDqsM21hPEUnDGdYEtaW%2BgbwUU4Azyox1rHdtc3pO9tytbpX3gWQg%2Batvb2RVepYrQeqKmhwHd%2FTk19LvHCh38iSxEv2T8WyjNYUhEvF5YBkvvN14NDwgyPnXz0p5T%2FSq9IivIgSx%2BOwrrcS%2B1lGhsFtwDAx2hlgcwnZbIRmZPJW0vZhD4AyFbBqiiv0rdypEWN3XI7xsRxpqQQyB87E%2F%2BWvbQoOjXu7xbBwu9uT3Go52jksr6L85YbL1MGimVQKs0izvMnPFhMepmT7mho3UMpNcoN4HICFu7YcQE9XbqcuDdS%2B%2BcL%2B09xR6McMGWYW6feMkZ4vbTlSq5d8Nsh2wT0fdjM6J39bFkc55emkicj%2FOz9bNbrYRcP3%2B7rYpe2GAI9DX2160sOdQp93ejx9%2FUBiaSPjuSbjkzwV3xvpBv%2FNS8QXmG55spdHBk4dxieUgMPge5kXT1i0IIVklEJSSzGoTCFgHpJJEj4tbDBXQ9%2FFDj0m2YUnML8eJ%2BnLJvPaOaWqBEwsS%2FF2Ljrpe2l3nIJy4T39ilEagGBxl6MDhBt8hms%2BSR2CZQRpPxvHvy96BnmAwgVKMM6qj8QGOqUBRTiWl89HUgWC%2Fx0bx3ke0l5A7VNQwOKLCQq%2FbO8aaZrMFjaJfQQs%2BuDa7SIKB5DRBx%2BrSJQFoq6BuulmeIyS7XrmqHka4u%2BrnNUwQMFF0PUfjP30ARMdkRtg1NQ%2FN0YTUucq482EoRBsWZ4YGDMC9Ngxt0QqeLMR1riMYBB221LnNOHznFKySmdlTwLIcS1A1P0MpNI7TPETKVZ8XgWtVkf4Lt6W&X-Amz-Signature=d6c6d037852d9e8aae703252b8b0b6eb2cfe802cf8f7b6d67cb61ce9bacd32a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZG6LSNV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDSmfhpYLZAKGVkD%2FkJ7%2B2eQbXtqICFYGq27mU9kqMruwIgImSxWyU%2Ba6IVNHoNyBw16DxDb6nRV2PqQ6ggsbwpU%2Bsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDC5%2B5qgYOBAfBMWUoCrcA%2FIATzETXKc%2F4A6Uk%2FzzUoE%2BAyXcdfolXZ9yTFRPXY3u4skI%2FJItbDqsM21hPEUnDGdYEtaW%2BgbwUU4Azyox1rHdtc3pO9tytbpX3gWQg%2Batvb2RVepYrQeqKmhwHd%2FTk19LvHCh38iSxEv2T8WyjNYUhEvF5YBkvvN14NDwgyPnXz0p5T%2FSq9IivIgSx%2BOwrrcS%2B1lGhsFtwDAx2hlgcwnZbIRmZPJW0vZhD4AyFbBqiiv0rdypEWN3XI7xsRxpqQQyB87E%2F%2BWvbQoOjXu7xbBwu9uT3Go52jksr6L85YbL1MGimVQKs0izvMnPFhMepmT7mho3UMpNcoN4HICFu7YcQE9XbqcuDdS%2B%2BcL%2B09xR6McMGWYW6feMkZ4vbTlSq5d8Nsh2wT0fdjM6J39bFkc55emkicj%2FOz9bNbrYRcP3%2B7rYpe2GAI9DX2160sOdQp93ejx9%2FUBiaSPjuSbjkzwV3xvpBv%2FNS8QXmG55spdHBk4dxieUgMPge5kXT1i0IIVklEJSSzGoTCFgHpJJEj4tbDBXQ9%2FFDj0m2YUnML8eJ%2BnLJvPaOaWqBEwsS%2FF2Ljrpe2l3nIJy4T39ilEagGBxl6MDhBt8hms%2BSR2CZQRpPxvHvy96BnmAwgVKMM6qj8QGOqUBRTiWl89HUgWC%2Fx0bx3ke0l5A7VNQwOKLCQq%2FbO8aaZrMFjaJfQQs%2BuDa7SIKB5DRBx%2BrSJQFoq6BuulmeIyS7XrmqHka4u%2BrnNUwQMFF0PUfjP30ARMdkRtg1NQ%2FN0YTUucq482EoRBsWZ4YGDMC9Ngxt0QqeLMR1riMYBB221LnNOHznFKySmdlTwLIcS1A1P0MpNI7TPETKVZ8XgWtVkf4Lt6W&X-Amz-Signature=7e488139744bd3bda82d813e1c031c9fee8d7f4b247975496089802e54883e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
