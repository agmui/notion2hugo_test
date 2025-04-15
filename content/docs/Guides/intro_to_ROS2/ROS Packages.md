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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAFB3UL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4KSWrTR7O5XaH0STDxa8MyTx9BQQAYxX8Km5%2F6oafQAiB1YRYunTg6rwQuPTMOXCCJuNj%2FchZVEE3wv8Kb5Rd1zCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMvMqC1qS4rLTHtgL0KtwDMXsvHW2gkicDwR2F7gmpbmtVIXN4CC8Rb2yFzKQJcHN5XrxMShLGupds%2BPdZ61zcabge4%2Bcp6TWQNVycVHHc%2B5fuO4heR9AWrtkHDDvqpkBZQ8iM3QrYvjG8HdGieccDi9Jyt9IDkHsr9NKAhEmykuMP5QF90mSfh6KHGmcJRYzzPvxTsrzfHk05V67ooek4aReTBDhctMkJBnv0KhG0IdLMoKWhmfuCUlpTEwyDvvgesiUYsbj8CT2%2FbrO82UwCfwDkmJF0KjCUxMm10mYtqDd%2FheF5gH5RFFOA%2Bia4hdVbWKPNH4BO58lwL%2FdROgWET%2Fc7FuZNChGnSvnQQIpk5U6RwRK8%2BJsNrUsFpcHqo8ZM5V6S0spNNTq77fLEdfaGsRPUqgd0QHRB%2FEOwZzisn8QsweshtQOiDKX4Rlr%2FN5sQ7Oh6cbQjHxZGW3AmD9C8BHGl%2B554N9YX5Z4ypFXfiEW00QMwU7NkAXqxVk%2F5CT8UFZdGlWMllSveDdLsYGh9aHsDnjiOpRQ2xfrLYE%2BOYL2DmUJriKdbt2n%2BCg9A20s8j4QUr%2Ftbrcjo22XYwNxvTZ0Q0fyIbktZ2BWV8zsSvXZW1aKbZUpjGa7xyo0Wsc47snrbhF8xHPf0QAIwy9z5vwY6pgFJctmwpQwD5EhEhPEnHwbBrWNhsd1w3HnCq%2FeH6I90FwZdYT5W4I%2BQUp2r0iu7y93VVAcxdirlyT4gLKxnOXxU1vXqeWfv2oJEszSL6A5IWAoWIjhAUXAoD4gYo5qQNblEGuf5O1HGgrwhvNQZtoocle9ipL8LPdp7Dakfj2x23WxYSLWmHT%2Bl0f1cqmAXL5aWburBcF%2F%2FL%2F%2BTmFg3STBUoszrXUkO&X-Amz-Signature=ddf88ff50dc1aa772aa829a0c29c10494144e76c68a55f69ec06ed94fee845f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAFB3UL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4KSWrTR7O5XaH0STDxa8MyTx9BQQAYxX8Km5%2F6oafQAiB1YRYunTg6rwQuPTMOXCCJuNj%2FchZVEE3wv8Kb5Rd1zCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMvMqC1qS4rLTHtgL0KtwDMXsvHW2gkicDwR2F7gmpbmtVIXN4CC8Rb2yFzKQJcHN5XrxMShLGupds%2BPdZ61zcabge4%2Bcp6TWQNVycVHHc%2B5fuO4heR9AWrtkHDDvqpkBZQ8iM3QrYvjG8HdGieccDi9Jyt9IDkHsr9NKAhEmykuMP5QF90mSfh6KHGmcJRYzzPvxTsrzfHk05V67ooek4aReTBDhctMkJBnv0KhG0IdLMoKWhmfuCUlpTEwyDvvgesiUYsbj8CT2%2FbrO82UwCfwDkmJF0KjCUxMm10mYtqDd%2FheF5gH5RFFOA%2Bia4hdVbWKPNH4BO58lwL%2FdROgWET%2Fc7FuZNChGnSvnQQIpk5U6RwRK8%2BJsNrUsFpcHqo8ZM5V6S0spNNTq77fLEdfaGsRPUqgd0QHRB%2FEOwZzisn8QsweshtQOiDKX4Rlr%2FN5sQ7Oh6cbQjHxZGW3AmD9C8BHGl%2B554N9YX5Z4ypFXfiEW00QMwU7NkAXqxVk%2F5CT8UFZdGlWMllSveDdLsYGh9aHsDnjiOpRQ2xfrLYE%2BOYL2DmUJriKdbt2n%2BCg9A20s8j4QUr%2Ftbrcjo22XYwNxvTZ0Q0fyIbktZ2BWV8zsSvXZW1aKbZUpjGa7xyo0Wsc47snrbhF8xHPf0QAIwy9z5vwY6pgFJctmwpQwD5EhEhPEnHwbBrWNhsd1w3HnCq%2FeH6I90FwZdYT5W4I%2BQUp2r0iu7y93VVAcxdirlyT4gLKxnOXxU1vXqeWfv2oJEszSL6A5IWAoWIjhAUXAoD4gYo5qQNblEGuf5O1HGgrwhvNQZtoocle9ipL8LPdp7Dakfj2x23WxYSLWmHT%2Bl0f1cqmAXL5aWburBcF%2F%2FL%2F%2BTmFg3STBUoszrXUkO&X-Amz-Signature=2c0748ad880e87ef045a5714cd372c396df8208471bc64e592b2334fb2033fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAFB3UL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4KSWrTR7O5XaH0STDxa8MyTx9BQQAYxX8Km5%2F6oafQAiB1YRYunTg6rwQuPTMOXCCJuNj%2FchZVEE3wv8Kb5Rd1zCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMvMqC1qS4rLTHtgL0KtwDMXsvHW2gkicDwR2F7gmpbmtVIXN4CC8Rb2yFzKQJcHN5XrxMShLGupds%2BPdZ61zcabge4%2Bcp6TWQNVycVHHc%2B5fuO4heR9AWrtkHDDvqpkBZQ8iM3QrYvjG8HdGieccDi9Jyt9IDkHsr9NKAhEmykuMP5QF90mSfh6KHGmcJRYzzPvxTsrzfHk05V67ooek4aReTBDhctMkJBnv0KhG0IdLMoKWhmfuCUlpTEwyDvvgesiUYsbj8CT2%2FbrO82UwCfwDkmJF0KjCUxMm10mYtqDd%2FheF5gH5RFFOA%2Bia4hdVbWKPNH4BO58lwL%2FdROgWET%2Fc7FuZNChGnSvnQQIpk5U6RwRK8%2BJsNrUsFpcHqo8ZM5V6S0spNNTq77fLEdfaGsRPUqgd0QHRB%2FEOwZzisn8QsweshtQOiDKX4Rlr%2FN5sQ7Oh6cbQjHxZGW3AmD9C8BHGl%2B554N9YX5Z4ypFXfiEW00QMwU7NkAXqxVk%2F5CT8UFZdGlWMllSveDdLsYGh9aHsDnjiOpRQ2xfrLYE%2BOYL2DmUJriKdbt2n%2BCg9A20s8j4QUr%2Ftbrcjo22XYwNxvTZ0Q0fyIbktZ2BWV8zsSvXZW1aKbZUpjGa7xyo0Wsc47snrbhF8xHPf0QAIwy9z5vwY6pgFJctmwpQwD5EhEhPEnHwbBrWNhsd1w3HnCq%2FeH6I90FwZdYT5W4I%2BQUp2r0iu7y93VVAcxdirlyT4gLKxnOXxU1vXqeWfv2oJEszSL6A5IWAoWIjhAUXAoD4gYo5qQNblEGuf5O1HGgrwhvNQZtoocle9ipL8LPdp7Dakfj2x23WxYSLWmHT%2Bl0f1cqmAXL5aWburBcF%2F%2FL%2F%2BTmFg3STBUoszrXUkO&X-Amz-Signature=c7f8833ea12de4d9d8dfead30fc71a0db85d00a699238d2ee882c05c7d3eba0e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAFB3UL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4KSWrTR7O5XaH0STDxa8MyTx9BQQAYxX8Km5%2F6oafQAiB1YRYunTg6rwQuPTMOXCCJuNj%2FchZVEE3wv8Kb5Rd1zCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMvMqC1qS4rLTHtgL0KtwDMXsvHW2gkicDwR2F7gmpbmtVIXN4CC8Rb2yFzKQJcHN5XrxMShLGupds%2BPdZ61zcabge4%2Bcp6TWQNVycVHHc%2B5fuO4heR9AWrtkHDDvqpkBZQ8iM3QrYvjG8HdGieccDi9Jyt9IDkHsr9NKAhEmykuMP5QF90mSfh6KHGmcJRYzzPvxTsrzfHk05V67ooek4aReTBDhctMkJBnv0KhG0IdLMoKWhmfuCUlpTEwyDvvgesiUYsbj8CT2%2FbrO82UwCfwDkmJF0KjCUxMm10mYtqDd%2FheF5gH5RFFOA%2Bia4hdVbWKPNH4BO58lwL%2FdROgWET%2Fc7FuZNChGnSvnQQIpk5U6RwRK8%2BJsNrUsFpcHqo8ZM5V6S0spNNTq77fLEdfaGsRPUqgd0QHRB%2FEOwZzisn8QsweshtQOiDKX4Rlr%2FN5sQ7Oh6cbQjHxZGW3AmD9C8BHGl%2B554N9YX5Z4ypFXfiEW00QMwU7NkAXqxVk%2F5CT8UFZdGlWMllSveDdLsYGh9aHsDnjiOpRQ2xfrLYE%2BOYL2DmUJriKdbt2n%2BCg9A20s8j4QUr%2Ftbrcjo22XYwNxvTZ0Q0fyIbktZ2BWV8zsSvXZW1aKbZUpjGa7xyo0Wsc47snrbhF8xHPf0QAIwy9z5vwY6pgFJctmwpQwD5EhEhPEnHwbBrWNhsd1w3HnCq%2FeH6I90FwZdYT5W4I%2BQUp2r0iu7y93VVAcxdirlyT4gLKxnOXxU1vXqeWfv2oJEszSL6A5IWAoWIjhAUXAoD4gYo5qQNblEGuf5O1HGgrwhvNQZtoocle9ipL8LPdp7Dakfj2x23WxYSLWmHT%2Bl0f1cqmAXL5aWburBcF%2F%2FL%2F%2BTmFg3STBUoszrXUkO&X-Amz-Signature=aab18a4257ac7c926f3b5b39fa79cecbeaba02d8a609f6702d4e5c0ae7ce0a42&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAFB3UL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4KSWrTR7O5XaH0STDxa8MyTx9BQQAYxX8Km5%2F6oafQAiB1YRYunTg6rwQuPTMOXCCJuNj%2FchZVEE3wv8Kb5Rd1zCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMvMqC1qS4rLTHtgL0KtwDMXsvHW2gkicDwR2F7gmpbmtVIXN4CC8Rb2yFzKQJcHN5XrxMShLGupds%2BPdZ61zcabge4%2Bcp6TWQNVycVHHc%2B5fuO4heR9AWrtkHDDvqpkBZQ8iM3QrYvjG8HdGieccDi9Jyt9IDkHsr9NKAhEmykuMP5QF90mSfh6KHGmcJRYzzPvxTsrzfHk05V67ooek4aReTBDhctMkJBnv0KhG0IdLMoKWhmfuCUlpTEwyDvvgesiUYsbj8CT2%2FbrO82UwCfwDkmJF0KjCUxMm10mYtqDd%2FheF5gH5RFFOA%2Bia4hdVbWKPNH4BO58lwL%2FdROgWET%2Fc7FuZNChGnSvnQQIpk5U6RwRK8%2BJsNrUsFpcHqo8ZM5V6S0spNNTq77fLEdfaGsRPUqgd0QHRB%2FEOwZzisn8QsweshtQOiDKX4Rlr%2FN5sQ7Oh6cbQjHxZGW3AmD9C8BHGl%2B554N9YX5Z4ypFXfiEW00QMwU7NkAXqxVk%2F5CT8UFZdGlWMllSveDdLsYGh9aHsDnjiOpRQ2xfrLYE%2BOYL2DmUJriKdbt2n%2BCg9A20s8j4QUr%2Ftbrcjo22XYwNxvTZ0Q0fyIbktZ2BWV8zsSvXZW1aKbZUpjGa7xyo0Wsc47snrbhF8xHPf0QAIwy9z5vwY6pgFJctmwpQwD5EhEhPEnHwbBrWNhsd1w3HnCq%2FeH6I90FwZdYT5W4I%2BQUp2r0iu7y93VVAcxdirlyT4gLKxnOXxU1vXqeWfv2oJEszSL6A5IWAoWIjhAUXAoD4gYo5qQNblEGuf5O1HGgrwhvNQZtoocle9ipL8LPdp7Dakfj2x23WxYSLWmHT%2Bl0f1cqmAXL5aWburBcF%2F%2FL%2F%2BTmFg3STBUoszrXUkO&X-Amz-Signature=040560409c99b02ea668443b91f7dcfbf8dd97f5ad3b1f0fdcd39e3edba0c3f3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAFB3UL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4KSWrTR7O5XaH0STDxa8MyTx9BQQAYxX8Km5%2F6oafQAiB1YRYunTg6rwQuPTMOXCCJuNj%2FchZVEE3wv8Kb5Rd1zCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMvMqC1qS4rLTHtgL0KtwDMXsvHW2gkicDwR2F7gmpbmtVIXN4CC8Rb2yFzKQJcHN5XrxMShLGupds%2BPdZ61zcabge4%2Bcp6TWQNVycVHHc%2B5fuO4heR9AWrtkHDDvqpkBZQ8iM3QrYvjG8HdGieccDi9Jyt9IDkHsr9NKAhEmykuMP5QF90mSfh6KHGmcJRYzzPvxTsrzfHk05V67ooek4aReTBDhctMkJBnv0KhG0IdLMoKWhmfuCUlpTEwyDvvgesiUYsbj8CT2%2FbrO82UwCfwDkmJF0KjCUxMm10mYtqDd%2FheF5gH5RFFOA%2Bia4hdVbWKPNH4BO58lwL%2FdROgWET%2Fc7FuZNChGnSvnQQIpk5U6RwRK8%2BJsNrUsFpcHqo8ZM5V6S0spNNTq77fLEdfaGsRPUqgd0QHRB%2FEOwZzisn8QsweshtQOiDKX4Rlr%2FN5sQ7Oh6cbQjHxZGW3AmD9C8BHGl%2B554N9YX5Z4ypFXfiEW00QMwU7NkAXqxVk%2F5CT8UFZdGlWMllSveDdLsYGh9aHsDnjiOpRQ2xfrLYE%2BOYL2DmUJriKdbt2n%2BCg9A20s8j4QUr%2Ftbrcjo22XYwNxvTZ0Q0fyIbktZ2BWV8zsSvXZW1aKbZUpjGa7xyo0Wsc47snrbhF8xHPf0QAIwy9z5vwY6pgFJctmwpQwD5EhEhPEnHwbBrWNhsd1w3HnCq%2FeH6I90FwZdYT5W4I%2BQUp2r0iu7y93VVAcxdirlyT4gLKxnOXxU1vXqeWfv2oJEszSL6A5IWAoWIjhAUXAoD4gYo5qQNblEGuf5O1HGgrwhvNQZtoocle9ipL8LPdp7Dakfj2x23WxYSLWmHT%2Bl0f1cqmAXL5aWburBcF%2F%2FL%2F%2BTmFg3STBUoszrXUkO&X-Amz-Signature=e3381e96925ef79a8272b7ff6a50e4f9ea59832eea488223d0f02b732cf3a311&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAFB3UL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4KSWrTR7O5XaH0STDxa8MyTx9BQQAYxX8Km5%2F6oafQAiB1YRYunTg6rwQuPTMOXCCJuNj%2FchZVEE3wv8Kb5Rd1zCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMvMqC1qS4rLTHtgL0KtwDMXsvHW2gkicDwR2F7gmpbmtVIXN4CC8Rb2yFzKQJcHN5XrxMShLGupds%2BPdZ61zcabge4%2Bcp6TWQNVycVHHc%2B5fuO4heR9AWrtkHDDvqpkBZQ8iM3QrYvjG8HdGieccDi9Jyt9IDkHsr9NKAhEmykuMP5QF90mSfh6KHGmcJRYzzPvxTsrzfHk05V67ooek4aReTBDhctMkJBnv0KhG0IdLMoKWhmfuCUlpTEwyDvvgesiUYsbj8CT2%2FbrO82UwCfwDkmJF0KjCUxMm10mYtqDd%2FheF5gH5RFFOA%2Bia4hdVbWKPNH4BO58lwL%2FdROgWET%2Fc7FuZNChGnSvnQQIpk5U6RwRK8%2BJsNrUsFpcHqo8ZM5V6S0spNNTq77fLEdfaGsRPUqgd0QHRB%2FEOwZzisn8QsweshtQOiDKX4Rlr%2FN5sQ7Oh6cbQjHxZGW3AmD9C8BHGl%2B554N9YX5Z4ypFXfiEW00QMwU7NkAXqxVk%2F5CT8UFZdGlWMllSveDdLsYGh9aHsDnjiOpRQ2xfrLYE%2BOYL2DmUJriKdbt2n%2BCg9A20s8j4QUr%2Ftbrcjo22XYwNxvTZ0Q0fyIbktZ2BWV8zsSvXZW1aKbZUpjGa7xyo0Wsc47snrbhF8xHPf0QAIwy9z5vwY6pgFJctmwpQwD5EhEhPEnHwbBrWNhsd1w3HnCq%2FeH6I90FwZdYT5W4I%2BQUp2r0iu7y93VVAcxdirlyT4gLKxnOXxU1vXqeWfv2oJEszSL6A5IWAoWIjhAUXAoD4gYo5qQNblEGuf5O1HGgrwhvNQZtoocle9ipL8LPdp7Dakfj2x23WxYSLWmHT%2Bl0f1cqmAXL5aWburBcF%2F%2FL%2F%2BTmFg3STBUoszrXUkO&X-Amz-Signature=dde6639d3a60652c4a4f7ef9855496e062023c4a67608d65d13ca6fc6e94e5d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
