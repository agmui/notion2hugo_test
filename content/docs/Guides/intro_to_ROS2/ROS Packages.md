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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJJBWSQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDWATie80RiJNPLpE2YsL7XRt9vivgo10E7Sl8vxWmsowIgeqgsEULJ7%2BBHsBgv4FDnRt3lcUPN8VMXHLUtLV%2BE4nIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIofadZ5%2FguhKNY55ircA%2FwNf092tiGnc29OtQagmES82QWDVRxftNqQDo48LmHmD3U9MkvgmqOXko7AotOEIQ0VkP24Aa5U26P3lhEJERAIxVEa8%2B5dZ1q3iygYi3A7%2Bes2qCd24kUW6INwYwpnJvvIjH5bfaq1UGwqkBMOA1xWC%2Bu1E8cYCkx7TZcV9QP68TFE9EK0qS0BMbNKkwmwmOPoj3n%2BlDBbUBM2WgA3o7wgfpE5XTVJvJnb38WufbfnDM4qoQCDYdVQjlOGUqDbufA2adpaAZkLLwHExd%2FgaoKkWbcfMqxgLGySFr5Z0nPsV6w%2B7VlxG1fTFYtwabQFoAX%2F9BZi5NK3M0BPAR58yobAeQDP2iTIZ7oxw97jyAnfD8qpncl1T0KeFPXLtnw8MJWEBWdZOArM1LOw1Q4HKAq4Ag4qO37RZjV7grG7MqFtWEpNNxDZOmkscgQboE5C2T3j11Pe3VwAzkCb3xsQgrFxUKTLzFXYL%2B6k1jnQyMxdy%2FIE9Ix0ZoR4yyEuGh0UwdnYkx49Oq34BcRYcugzbWJdiGDaozYXPGyHZEDPjirX4V07JqHy3mm26TUFBMqMAB1Gy8tbIeJ1Xf4Ih3erHyWTqd8rxOJFWm%2FYH7EUdg3KbX3tO1PRH1fIC3ziMMfR4MAGOqUB24sYMIzlOUeLH2%2FlywvYV%2FwZ63CUy%2FznOAKdgibacAyoxxAb%2FetVt4aI%2BedB0WkOF82ufHOTEc7jO1HCMc1SMtXFE3iBnbIVt%2FD%2FgpMvBiR4mdM8Y8p61E5SueUBHkON3V47f%2F3tZi8%2BLZ1bHrZJSKD6ktEt58HV6FWHRXLY2%2FD6gKG9wPPjax%2BkJV2kHtiXuwdcv4JGku8qOgv77DK6vN%2BxplbZ&X-Amz-Signature=0c48a7119e90cbf758220ec33644eb4e1b289b974e422ce767d3a2dfbb9cf514&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJJBWSQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDWATie80RiJNPLpE2YsL7XRt9vivgo10E7Sl8vxWmsowIgeqgsEULJ7%2BBHsBgv4FDnRt3lcUPN8VMXHLUtLV%2BE4nIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIofadZ5%2FguhKNY55ircA%2FwNf092tiGnc29OtQagmES82QWDVRxftNqQDo48LmHmD3U9MkvgmqOXko7AotOEIQ0VkP24Aa5U26P3lhEJERAIxVEa8%2B5dZ1q3iygYi3A7%2Bes2qCd24kUW6INwYwpnJvvIjH5bfaq1UGwqkBMOA1xWC%2Bu1E8cYCkx7TZcV9QP68TFE9EK0qS0BMbNKkwmwmOPoj3n%2BlDBbUBM2WgA3o7wgfpE5XTVJvJnb38WufbfnDM4qoQCDYdVQjlOGUqDbufA2adpaAZkLLwHExd%2FgaoKkWbcfMqxgLGySFr5Z0nPsV6w%2B7VlxG1fTFYtwabQFoAX%2F9BZi5NK3M0BPAR58yobAeQDP2iTIZ7oxw97jyAnfD8qpncl1T0KeFPXLtnw8MJWEBWdZOArM1LOw1Q4HKAq4Ag4qO37RZjV7grG7MqFtWEpNNxDZOmkscgQboE5C2T3j11Pe3VwAzkCb3xsQgrFxUKTLzFXYL%2B6k1jnQyMxdy%2FIE9Ix0ZoR4yyEuGh0UwdnYkx49Oq34BcRYcugzbWJdiGDaozYXPGyHZEDPjirX4V07JqHy3mm26TUFBMqMAB1Gy8tbIeJ1Xf4Ih3erHyWTqd8rxOJFWm%2FYH7EUdg3KbX3tO1PRH1fIC3ziMMfR4MAGOqUB24sYMIzlOUeLH2%2FlywvYV%2FwZ63CUy%2FznOAKdgibacAyoxxAb%2FetVt4aI%2BedB0WkOF82ufHOTEc7jO1HCMc1SMtXFE3iBnbIVt%2FD%2FgpMvBiR4mdM8Y8p61E5SueUBHkON3V47f%2F3tZi8%2BLZ1bHrZJSKD6ktEt58HV6FWHRXLY2%2FD6gKG9wPPjax%2BkJV2kHtiXuwdcv4JGku8qOgv77DK6vN%2BxplbZ&X-Amz-Signature=a4e39c9f348b0567cf25d8e277b25a07e63de6583679af963ff449639df1e950&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJJBWSQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDWATie80RiJNPLpE2YsL7XRt9vivgo10E7Sl8vxWmsowIgeqgsEULJ7%2BBHsBgv4FDnRt3lcUPN8VMXHLUtLV%2BE4nIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIofadZ5%2FguhKNY55ircA%2FwNf092tiGnc29OtQagmES82QWDVRxftNqQDo48LmHmD3U9MkvgmqOXko7AotOEIQ0VkP24Aa5U26P3lhEJERAIxVEa8%2B5dZ1q3iygYi3A7%2Bes2qCd24kUW6INwYwpnJvvIjH5bfaq1UGwqkBMOA1xWC%2Bu1E8cYCkx7TZcV9QP68TFE9EK0qS0BMbNKkwmwmOPoj3n%2BlDBbUBM2WgA3o7wgfpE5XTVJvJnb38WufbfnDM4qoQCDYdVQjlOGUqDbufA2adpaAZkLLwHExd%2FgaoKkWbcfMqxgLGySFr5Z0nPsV6w%2B7VlxG1fTFYtwabQFoAX%2F9BZi5NK3M0BPAR58yobAeQDP2iTIZ7oxw97jyAnfD8qpncl1T0KeFPXLtnw8MJWEBWdZOArM1LOw1Q4HKAq4Ag4qO37RZjV7grG7MqFtWEpNNxDZOmkscgQboE5C2T3j11Pe3VwAzkCb3xsQgrFxUKTLzFXYL%2B6k1jnQyMxdy%2FIE9Ix0ZoR4yyEuGh0UwdnYkx49Oq34BcRYcugzbWJdiGDaozYXPGyHZEDPjirX4V07JqHy3mm26TUFBMqMAB1Gy8tbIeJ1Xf4Ih3erHyWTqd8rxOJFWm%2FYH7EUdg3KbX3tO1PRH1fIC3ziMMfR4MAGOqUB24sYMIzlOUeLH2%2FlywvYV%2FwZ63CUy%2FznOAKdgibacAyoxxAb%2FetVt4aI%2BedB0WkOF82ufHOTEc7jO1HCMc1SMtXFE3iBnbIVt%2FD%2FgpMvBiR4mdM8Y8p61E5SueUBHkON3V47f%2F3tZi8%2BLZ1bHrZJSKD6ktEt58HV6FWHRXLY2%2FD6gKG9wPPjax%2BkJV2kHtiXuwdcv4JGku8qOgv77DK6vN%2BxplbZ&X-Amz-Signature=6f0895dfe6ef794f5344facc8b609f9df0e607223bd691bf460524dfa673b1cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJJBWSQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDWATie80RiJNPLpE2YsL7XRt9vivgo10E7Sl8vxWmsowIgeqgsEULJ7%2BBHsBgv4FDnRt3lcUPN8VMXHLUtLV%2BE4nIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIofadZ5%2FguhKNY55ircA%2FwNf092tiGnc29OtQagmES82QWDVRxftNqQDo48LmHmD3U9MkvgmqOXko7AotOEIQ0VkP24Aa5U26P3lhEJERAIxVEa8%2B5dZ1q3iygYi3A7%2Bes2qCd24kUW6INwYwpnJvvIjH5bfaq1UGwqkBMOA1xWC%2Bu1E8cYCkx7TZcV9QP68TFE9EK0qS0BMbNKkwmwmOPoj3n%2BlDBbUBM2WgA3o7wgfpE5XTVJvJnb38WufbfnDM4qoQCDYdVQjlOGUqDbufA2adpaAZkLLwHExd%2FgaoKkWbcfMqxgLGySFr5Z0nPsV6w%2B7VlxG1fTFYtwabQFoAX%2F9BZi5NK3M0BPAR58yobAeQDP2iTIZ7oxw97jyAnfD8qpncl1T0KeFPXLtnw8MJWEBWdZOArM1LOw1Q4HKAq4Ag4qO37RZjV7grG7MqFtWEpNNxDZOmkscgQboE5C2T3j11Pe3VwAzkCb3xsQgrFxUKTLzFXYL%2B6k1jnQyMxdy%2FIE9Ix0ZoR4yyEuGh0UwdnYkx49Oq34BcRYcugzbWJdiGDaozYXPGyHZEDPjirX4V07JqHy3mm26TUFBMqMAB1Gy8tbIeJ1Xf4Ih3erHyWTqd8rxOJFWm%2FYH7EUdg3KbX3tO1PRH1fIC3ziMMfR4MAGOqUB24sYMIzlOUeLH2%2FlywvYV%2FwZ63CUy%2FznOAKdgibacAyoxxAb%2FetVt4aI%2BedB0WkOF82ufHOTEc7jO1HCMc1SMtXFE3iBnbIVt%2FD%2FgpMvBiR4mdM8Y8p61E5SueUBHkON3V47f%2F3tZi8%2BLZ1bHrZJSKD6ktEt58HV6FWHRXLY2%2FD6gKG9wPPjax%2BkJV2kHtiXuwdcv4JGku8qOgv77DK6vN%2BxplbZ&X-Amz-Signature=7c08c1e3dae7afe244fed788347f46423ef0066015c9817299861553c41ef407&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJJBWSQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDWATie80RiJNPLpE2YsL7XRt9vivgo10E7Sl8vxWmsowIgeqgsEULJ7%2BBHsBgv4FDnRt3lcUPN8VMXHLUtLV%2BE4nIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIofadZ5%2FguhKNY55ircA%2FwNf092tiGnc29OtQagmES82QWDVRxftNqQDo48LmHmD3U9MkvgmqOXko7AotOEIQ0VkP24Aa5U26P3lhEJERAIxVEa8%2B5dZ1q3iygYi3A7%2Bes2qCd24kUW6INwYwpnJvvIjH5bfaq1UGwqkBMOA1xWC%2Bu1E8cYCkx7TZcV9QP68TFE9EK0qS0BMbNKkwmwmOPoj3n%2BlDBbUBM2WgA3o7wgfpE5XTVJvJnb38WufbfnDM4qoQCDYdVQjlOGUqDbufA2adpaAZkLLwHExd%2FgaoKkWbcfMqxgLGySFr5Z0nPsV6w%2B7VlxG1fTFYtwabQFoAX%2F9BZi5NK3M0BPAR58yobAeQDP2iTIZ7oxw97jyAnfD8qpncl1T0KeFPXLtnw8MJWEBWdZOArM1LOw1Q4HKAq4Ag4qO37RZjV7grG7MqFtWEpNNxDZOmkscgQboE5C2T3j11Pe3VwAzkCb3xsQgrFxUKTLzFXYL%2B6k1jnQyMxdy%2FIE9Ix0ZoR4yyEuGh0UwdnYkx49Oq34BcRYcugzbWJdiGDaozYXPGyHZEDPjirX4V07JqHy3mm26TUFBMqMAB1Gy8tbIeJ1Xf4Ih3erHyWTqd8rxOJFWm%2FYH7EUdg3KbX3tO1PRH1fIC3ziMMfR4MAGOqUB24sYMIzlOUeLH2%2FlywvYV%2FwZ63CUy%2FznOAKdgibacAyoxxAb%2FetVt4aI%2BedB0WkOF82ufHOTEc7jO1HCMc1SMtXFE3iBnbIVt%2FD%2FgpMvBiR4mdM8Y8p61E5SueUBHkON3V47f%2F3tZi8%2BLZ1bHrZJSKD6ktEt58HV6FWHRXLY2%2FD6gKG9wPPjax%2BkJV2kHtiXuwdcv4JGku8qOgv77DK6vN%2BxplbZ&X-Amz-Signature=d0817c8edc425f0a4baa85294466ee8522d75564e4b0f991afd9c0547c1c7172&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJJBWSQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDWATie80RiJNPLpE2YsL7XRt9vivgo10E7Sl8vxWmsowIgeqgsEULJ7%2BBHsBgv4FDnRt3lcUPN8VMXHLUtLV%2BE4nIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIofadZ5%2FguhKNY55ircA%2FwNf092tiGnc29OtQagmES82QWDVRxftNqQDo48LmHmD3U9MkvgmqOXko7AotOEIQ0VkP24Aa5U26P3lhEJERAIxVEa8%2B5dZ1q3iygYi3A7%2Bes2qCd24kUW6INwYwpnJvvIjH5bfaq1UGwqkBMOA1xWC%2Bu1E8cYCkx7TZcV9QP68TFE9EK0qS0BMbNKkwmwmOPoj3n%2BlDBbUBM2WgA3o7wgfpE5XTVJvJnb38WufbfnDM4qoQCDYdVQjlOGUqDbufA2adpaAZkLLwHExd%2FgaoKkWbcfMqxgLGySFr5Z0nPsV6w%2B7VlxG1fTFYtwabQFoAX%2F9BZi5NK3M0BPAR58yobAeQDP2iTIZ7oxw97jyAnfD8qpncl1T0KeFPXLtnw8MJWEBWdZOArM1LOw1Q4HKAq4Ag4qO37RZjV7grG7MqFtWEpNNxDZOmkscgQboE5C2T3j11Pe3VwAzkCb3xsQgrFxUKTLzFXYL%2B6k1jnQyMxdy%2FIE9Ix0ZoR4yyEuGh0UwdnYkx49Oq34BcRYcugzbWJdiGDaozYXPGyHZEDPjirX4V07JqHy3mm26TUFBMqMAB1Gy8tbIeJ1Xf4Ih3erHyWTqd8rxOJFWm%2FYH7EUdg3KbX3tO1PRH1fIC3ziMMfR4MAGOqUB24sYMIzlOUeLH2%2FlywvYV%2FwZ63CUy%2FznOAKdgibacAyoxxAb%2FetVt4aI%2BedB0WkOF82ufHOTEc7jO1HCMc1SMtXFE3iBnbIVt%2FD%2FgpMvBiR4mdM8Y8p61E5SueUBHkON3V47f%2F3tZi8%2BLZ1bHrZJSKD6ktEt58HV6FWHRXLY2%2FD6gKG9wPPjax%2BkJV2kHtiXuwdcv4JGku8qOgv77DK6vN%2BxplbZ&X-Amz-Signature=5b64850cd3ace7d248f67bd8fb89f2ce59114ee3fd9626a4d3b05ae878b162e1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJJBWSQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDWATie80RiJNPLpE2YsL7XRt9vivgo10E7Sl8vxWmsowIgeqgsEULJ7%2BBHsBgv4FDnRt3lcUPN8VMXHLUtLV%2BE4nIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIofadZ5%2FguhKNY55ircA%2FwNf092tiGnc29OtQagmES82QWDVRxftNqQDo48LmHmD3U9MkvgmqOXko7AotOEIQ0VkP24Aa5U26P3lhEJERAIxVEa8%2B5dZ1q3iygYi3A7%2Bes2qCd24kUW6INwYwpnJvvIjH5bfaq1UGwqkBMOA1xWC%2Bu1E8cYCkx7TZcV9QP68TFE9EK0qS0BMbNKkwmwmOPoj3n%2BlDBbUBM2WgA3o7wgfpE5XTVJvJnb38WufbfnDM4qoQCDYdVQjlOGUqDbufA2adpaAZkLLwHExd%2FgaoKkWbcfMqxgLGySFr5Z0nPsV6w%2B7VlxG1fTFYtwabQFoAX%2F9BZi5NK3M0BPAR58yobAeQDP2iTIZ7oxw97jyAnfD8qpncl1T0KeFPXLtnw8MJWEBWdZOArM1LOw1Q4HKAq4Ag4qO37RZjV7grG7MqFtWEpNNxDZOmkscgQboE5C2T3j11Pe3VwAzkCb3xsQgrFxUKTLzFXYL%2B6k1jnQyMxdy%2FIE9Ix0ZoR4yyEuGh0UwdnYkx49Oq34BcRYcugzbWJdiGDaozYXPGyHZEDPjirX4V07JqHy3mm26TUFBMqMAB1Gy8tbIeJ1Xf4Ih3erHyWTqd8rxOJFWm%2FYH7EUdg3KbX3tO1PRH1fIC3ziMMfR4MAGOqUB24sYMIzlOUeLH2%2FlywvYV%2FwZ63CUy%2FznOAKdgibacAyoxxAb%2FetVt4aI%2BedB0WkOF82ufHOTEc7jO1HCMc1SMtXFE3iBnbIVt%2FD%2FgpMvBiR4mdM8Y8p61E5SueUBHkON3V47f%2F3tZi8%2BLZ1bHrZJSKD6ktEt58HV6FWHRXLY2%2FD6gKG9wPPjax%2BkJV2kHtiXuwdcv4JGku8qOgv77DK6vN%2BxplbZ&X-Amz-Signature=6692550b65ce4e6a24a62f8dfacbcc72640a11eecd61ba17c8a9c229b0e6c5ee&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
