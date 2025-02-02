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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCLM53Q%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2Bb8x6NQ%2F%2FLuFT4TCD23IyRE5v2CtxYT3UUox5ab1vgIgcZh3wQKaPMf6SwD68Q0VVJ5R2u2MxPOS33NI6HZ2F0QqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCVXpMDZmLyc04ZLCrcAwcECGdbdj%2BE2aVg1kZvBgsXJk24Fz%2BRUX0jlpq0Fb2r%2FVbnStCnZBAr9qq%2Fjc2RWX20iekVjyQHTSaBUxLs2Mr8hUWQ%2BvAuZANCkxusHlIS7mIE9CrtLjbg1%2FMIkfX1Xl3KCXtOdKnsip5UFZeeY3zE5BgV2PbCQ8lIoCd%2BaPIC3Y%2Fd2N%2FMXp6tQW3y0fECWr%2Fu9ICobjJLKDAfMF6n%2BqlcvGRdhvbOZ44uJSZcoT5XQJ7ZsI2rPzT3qSLUTctqctfEGGihxIwxGK9wyQqGoj4W%2BrKqUHA51CI%2F%2Fj1xqppED0cAjjpyDJbkNSscxBXp%2FdD1yjbqOZo3u4bc8k6O6CMRgEoAkylwYd8X9dzX6V1%2F9cLxAM98Z5s9lQ2ln%2BzhbNCn7DLTV9y%2Bo%2BugJCsxriHxE0cxMgdSimftWjbpB1nzF3hITPgGjdms8Yq6RvLcP2SScgWumC7wsDo6sD6SFTV5dU9Df744Bec4SyMmDR%2BOOtCup%2Blx7uhdKPAfYIbDHENn%2BQeL1gtETWLP5PrvTo7xSN3aYJ7ue%2BU4pCuHVxWL218Z%2BlCzavgsozxyvlzVKDwhnUw0r06zWS%2BBBRciJ%2FMwKs4EfjyEOfjbleg6UySmaBO8U1KigO4AwOSeMP%2Fi%2B7wGOqUB0RytexZGZIUoc6pFPkicYPjG5eRynRWTrIc1UEy5iI1AC4NlgPniMLFchm%2BQm%2FK0O6V0O7%2BqDU70j3FvGe67%2FZLNiXdQP175LPZrFiFqeAvwG93ocXuuq6IfsGIG9ayEZnaR3Ouej63p3wpJzwnH9AvY9dseNh48MFDbdeTU8uoooqxE4OSYdOdt5VGeVle44o3ooRlI%2FqHeIvxSUW8n0fD06TkU&X-Amz-Signature=d092bf7bb30d2fff471cadafa1fe01d6da8818167f5558f3c033974a02ab62e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCLM53Q%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2Bb8x6NQ%2F%2FLuFT4TCD23IyRE5v2CtxYT3UUox5ab1vgIgcZh3wQKaPMf6SwD68Q0VVJ5R2u2MxPOS33NI6HZ2F0QqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCVXpMDZmLyc04ZLCrcAwcECGdbdj%2BE2aVg1kZvBgsXJk24Fz%2BRUX0jlpq0Fb2r%2FVbnStCnZBAr9qq%2Fjc2RWX20iekVjyQHTSaBUxLs2Mr8hUWQ%2BvAuZANCkxusHlIS7mIE9CrtLjbg1%2FMIkfX1Xl3KCXtOdKnsip5UFZeeY3zE5BgV2PbCQ8lIoCd%2BaPIC3Y%2Fd2N%2FMXp6tQW3y0fECWr%2Fu9ICobjJLKDAfMF6n%2BqlcvGRdhvbOZ44uJSZcoT5XQJ7ZsI2rPzT3qSLUTctqctfEGGihxIwxGK9wyQqGoj4W%2BrKqUHA51CI%2F%2Fj1xqppED0cAjjpyDJbkNSscxBXp%2FdD1yjbqOZo3u4bc8k6O6CMRgEoAkylwYd8X9dzX6V1%2F9cLxAM98Z5s9lQ2ln%2BzhbNCn7DLTV9y%2Bo%2BugJCsxriHxE0cxMgdSimftWjbpB1nzF3hITPgGjdms8Yq6RvLcP2SScgWumC7wsDo6sD6SFTV5dU9Df744Bec4SyMmDR%2BOOtCup%2Blx7uhdKPAfYIbDHENn%2BQeL1gtETWLP5PrvTo7xSN3aYJ7ue%2BU4pCuHVxWL218Z%2BlCzavgsozxyvlzVKDwhnUw0r06zWS%2BBBRciJ%2FMwKs4EfjyEOfjbleg6UySmaBO8U1KigO4AwOSeMP%2Fi%2B7wGOqUB0RytexZGZIUoc6pFPkicYPjG5eRynRWTrIc1UEy5iI1AC4NlgPniMLFchm%2BQm%2FK0O6V0O7%2BqDU70j3FvGe67%2FZLNiXdQP175LPZrFiFqeAvwG93ocXuuq6IfsGIG9ayEZnaR3Ouej63p3wpJzwnH9AvY9dseNh48MFDbdeTU8uoooqxE4OSYdOdt5VGeVle44o3ooRlI%2FqHeIvxSUW8n0fD06TkU&X-Amz-Signature=8029aee5d896654c39f51825b324da16976291e869b927f167b4ca47907b4b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCLM53Q%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2Bb8x6NQ%2F%2FLuFT4TCD23IyRE5v2CtxYT3UUox5ab1vgIgcZh3wQKaPMf6SwD68Q0VVJ5R2u2MxPOS33NI6HZ2F0QqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCVXpMDZmLyc04ZLCrcAwcECGdbdj%2BE2aVg1kZvBgsXJk24Fz%2BRUX0jlpq0Fb2r%2FVbnStCnZBAr9qq%2Fjc2RWX20iekVjyQHTSaBUxLs2Mr8hUWQ%2BvAuZANCkxusHlIS7mIE9CrtLjbg1%2FMIkfX1Xl3KCXtOdKnsip5UFZeeY3zE5BgV2PbCQ8lIoCd%2BaPIC3Y%2Fd2N%2FMXp6tQW3y0fECWr%2Fu9ICobjJLKDAfMF6n%2BqlcvGRdhvbOZ44uJSZcoT5XQJ7ZsI2rPzT3qSLUTctqctfEGGihxIwxGK9wyQqGoj4W%2BrKqUHA51CI%2F%2Fj1xqppED0cAjjpyDJbkNSscxBXp%2FdD1yjbqOZo3u4bc8k6O6CMRgEoAkylwYd8X9dzX6V1%2F9cLxAM98Z5s9lQ2ln%2BzhbNCn7DLTV9y%2Bo%2BugJCsxriHxE0cxMgdSimftWjbpB1nzF3hITPgGjdms8Yq6RvLcP2SScgWumC7wsDo6sD6SFTV5dU9Df744Bec4SyMmDR%2BOOtCup%2Blx7uhdKPAfYIbDHENn%2BQeL1gtETWLP5PrvTo7xSN3aYJ7ue%2BU4pCuHVxWL218Z%2BlCzavgsozxyvlzVKDwhnUw0r06zWS%2BBBRciJ%2FMwKs4EfjyEOfjbleg6UySmaBO8U1KigO4AwOSeMP%2Fi%2B7wGOqUB0RytexZGZIUoc6pFPkicYPjG5eRynRWTrIc1UEy5iI1AC4NlgPniMLFchm%2BQm%2FK0O6V0O7%2BqDU70j3FvGe67%2FZLNiXdQP175LPZrFiFqeAvwG93ocXuuq6IfsGIG9ayEZnaR3Ouej63p3wpJzwnH9AvY9dseNh48MFDbdeTU8uoooqxE4OSYdOdt5VGeVle44o3ooRlI%2FqHeIvxSUW8n0fD06TkU&X-Amz-Signature=9d88b0bbf59c49bb54ec2c36111fd662d823dee798100d244335847a5a59da8b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCLM53Q%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2Bb8x6NQ%2F%2FLuFT4TCD23IyRE5v2CtxYT3UUox5ab1vgIgcZh3wQKaPMf6SwD68Q0VVJ5R2u2MxPOS33NI6HZ2F0QqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCVXpMDZmLyc04ZLCrcAwcECGdbdj%2BE2aVg1kZvBgsXJk24Fz%2BRUX0jlpq0Fb2r%2FVbnStCnZBAr9qq%2Fjc2RWX20iekVjyQHTSaBUxLs2Mr8hUWQ%2BvAuZANCkxusHlIS7mIE9CrtLjbg1%2FMIkfX1Xl3KCXtOdKnsip5UFZeeY3zE5BgV2PbCQ8lIoCd%2BaPIC3Y%2Fd2N%2FMXp6tQW3y0fECWr%2Fu9ICobjJLKDAfMF6n%2BqlcvGRdhvbOZ44uJSZcoT5XQJ7ZsI2rPzT3qSLUTctqctfEGGihxIwxGK9wyQqGoj4W%2BrKqUHA51CI%2F%2Fj1xqppED0cAjjpyDJbkNSscxBXp%2FdD1yjbqOZo3u4bc8k6O6CMRgEoAkylwYd8X9dzX6V1%2F9cLxAM98Z5s9lQ2ln%2BzhbNCn7DLTV9y%2Bo%2BugJCsxriHxE0cxMgdSimftWjbpB1nzF3hITPgGjdms8Yq6RvLcP2SScgWumC7wsDo6sD6SFTV5dU9Df744Bec4SyMmDR%2BOOtCup%2Blx7uhdKPAfYIbDHENn%2BQeL1gtETWLP5PrvTo7xSN3aYJ7ue%2BU4pCuHVxWL218Z%2BlCzavgsozxyvlzVKDwhnUw0r06zWS%2BBBRciJ%2FMwKs4EfjyEOfjbleg6UySmaBO8U1KigO4AwOSeMP%2Fi%2B7wGOqUB0RytexZGZIUoc6pFPkicYPjG5eRynRWTrIc1UEy5iI1AC4NlgPniMLFchm%2BQm%2FK0O6V0O7%2BqDU70j3FvGe67%2FZLNiXdQP175LPZrFiFqeAvwG93ocXuuq6IfsGIG9ayEZnaR3Ouej63p3wpJzwnH9AvY9dseNh48MFDbdeTU8uoooqxE4OSYdOdt5VGeVle44o3ooRlI%2FqHeIvxSUW8n0fD06TkU&X-Amz-Signature=9fe34f565a7ea4d6ab802a4350d223e7a7d299507732cc3f2b4697183ea75679&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCLM53Q%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2Bb8x6NQ%2F%2FLuFT4TCD23IyRE5v2CtxYT3UUox5ab1vgIgcZh3wQKaPMf6SwD68Q0VVJ5R2u2MxPOS33NI6HZ2F0QqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCVXpMDZmLyc04ZLCrcAwcECGdbdj%2BE2aVg1kZvBgsXJk24Fz%2BRUX0jlpq0Fb2r%2FVbnStCnZBAr9qq%2Fjc2RWX20iekVjyQHTSaBUxLs2Mr8hUWQ%2BvAuZANCkxusHlIS7mIE9CrtLjbg1%2FMIkfX1Xl3KCXtOdKnsip5UFZeeY3zE5BgV2PbCQ8lIoCd%2BaPIC3Y%2Fd2N%2FMXp6tQW3y0fECWr%2Fu9ICobjJLKDAfMF6n%2BqlcvGRdhvbOZ44uJSZcoT5XQJ7ZsI2rPzT3qSLUTctqctfEGGihxIwxGK9wyQqGoj4W%2BrKqUHA51CI%2F%2Fj1xqppED0cAjjpyDJbkNSscxBXp%2FdD1yjbqOZo3u4bc8k6O6CMRgEoAkylwYd8X9dzX6V1%2F9cLxAM98Z5s9lQ2ln%2BzhbNCn7DLTV9y%2Bo%2BugJCsxriHxE0cxMgdSimftWjbpB1nzF3hITPgGjdms8Yq6RvLcP2SScgWumC7wsDo6sD6SFTV5dU9Df744Bec4SyMmDR%2BOOtCup%2Blx7uhdKPAfYIbDHENn%2BQeL1gtETWLP5PrvTo7xSN3aYJ7ue%2BU4pCuHVxWL218Z%2BlCzavgsozxyvlzVKDwhnUw0r06zWS%2BBBRciJ%2FMwKs4EfjyEOfjbleg6UySmaBO8U1KigO4AwOSeMP%2Fi%2B7wGOqUB0RytexZGZIUoc6pFPkicYPjG5eRynRWTrIc1UEy5iI1AC4NlgPniMLFchm%2BQm%2FK0O6V0O7%2BqDU70j3FvGe67%2FZLNiXdQP175LPZrFiFqeAvwG93ocXuuq6IfsGIG9ayEZnaR3Ouej63p3wpJzwnH9AvY9dseNh48MFDbdeTU8uoooqxE4OSYdOdt5VGeVle44o3ooRlI%2FqHeIvxSUW8n0fD06TkU&X-Amz-Signature=5b1f45d5477f479492063c4cf19738417c3fa544ee4299ce026b6e79fa9785a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCLM53Q%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2Bb8x6NQ%2F%2FLuFT4TCD23IyRE5v2CtxYT3UUox5ab1vgIgcZh3wQKaPMf6SwD68Q0VVJ5R2u2MxPOS33NI6HZ2F0QqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCVXpMDZmLyc04ZLCrcAwcECGdbdj%2BE2aVg1kZvBgsXJk24Fz%2BRUX0jlpq0Fb2r%2FVbnStCnZBAr9qq%2Fjc2RWX20iekVjyQHTSaBUxLs2Mr8hUWQ%2BvAuZANCkxusHlIS7mIE9CrtLjbg1%2FMIkfX1Xl3KCXtOdKnsip5UFZeeY3zE5BgV2PbCQ8lIoCd%2BaPIC3Y%2Fd2N%2FMXp6tQW3y0fECWr%2Fu9ICobjJLKDAfMF6n%2BqlcvGRdhvbOZ44uJSZcoT5XQJ7ZsI2rPzT3qSLUTctqctfEGGihxIwxGK9wyQqGoj4W%2BrKqUHA51CI%2F%2Fj1xqppED0cAjjpyDJbkNSscxBXp%2FdD1yjbqOZo3u4bc8k6O6CMRgEoAkylwYd8X9dzX6V1%2F9cLxAM98Z5s9lQ2ln%2BzhbNCn7DLTV9y%2Bo%2BugJCsxriHxE0cxMgdSimftWjbpB1nzF3hITPgGjdms8Yq6RvLcP2SScgWumC7wsDo6sD6SFTV5dU9Df744Bec4SyMmDR%2BOOtCup%2Blx7uhdKPAfYIbDHENn%2BQeL1gtETWLP5PrvTo7xSN3aYJ7ue%2BU4pCuHVxWL218Z%2BlCzavgsozxyvlzVKDwhnUw0r06zWS%2BBBRciJ%2FMwKs4EfjyEOfjbleg6UySmaBO8U1KigO4AwOSeMP%2Fi%2B7wGOqUB0RytexZGZIUoc6pFPkicYPjG5eRynRWTrIc1UEy5iI1AC4NlgPniMLFchm%2BQm%2FK0O6V0O7%2BqDU70j3FvGe67%2FZLNiXdQP175LPZrFiFqeAvwG93ocXuuq6IfsGIG9ayEZnaR3Ouej63p3wpJzwnH9AvY9dseNh48MFDbdeTU8uoooqxE4OSYdOdt5VGeVle44o3ooRlI%2FqHeIvxSUW8n0fD06TkU&X-Amz-Signature=f7b9114e59828310b2fc7829deac22697e553f09ac81c617248b868d39bab209&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCLM53Q%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2Bb8x6NQ%2F%2FLuFT4TCD23IyRE5v2CtxYT3UUox5ab1vgIgcZh3wQKaPMf6SwD68Q0VVJ5R2u2MxPOS33NI6HZ2F0QqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCVXpMDZmLyc04ZLCrcAwcECGdbdj%2BE2aVg1kZvBgsXJk24Fz%2BRUX0jlpq0Fb2r%2FVbnStCnZBAr9qq%2Fjc2RWX20iekVjyQHTSaBUxLs2Mr8hUWQ%2BvAuZANCkxusHlIS7mIE9CrtLjbg1%2FMIkfX1Xl3KCXtOdKnsip5UFZeeY3zE5BgV2PbCQ8lIoCd%2BaPIC3Y%2Fd2N%2FMXp6tQW3y0fECWr%2Fu9ICobjJLKDAfMF6n%2BqlcvGRdhvbOZ44uJSZcoT5XQJ7ZsI2rPzT3qSLUTctqctfEGGihxIwxGK9wyQqGoj4W%2BrKqUHA51CI%2F%2Fj1xqppED0cAjjpyDJbkNSscxBXp%2FdD1yjbqOZo3u4bc8k6O6CMRgEoAkylwYd8X9dzX6V1%2F9cLxAM98Z5s9lQ2ln%2BzhbNCn7DLTV9y%2Bo%2BugJCsxriHxE0cxMgdSimftWjbpB1nzF3hITPgGjdms8Yq6RvLcP2SScgWumC7wsDo6sD6SFTV5dU9Df744Bec4SyMmDR%2BOOtCup%2Blx7uhdKPAfYIbDHENn%2BQeL1gtETWLP5PrvTo7xSN3aYJ7ue%2BU4pCuHVxWL218Z%2BlCzavgsozxyvlzVKDwhnUw0r06zWS%2BBBRciJ%2FMwKs4EfjyEOfjbleg6UySmaBO8U1KigO4AwOSeMP%2Fi%2B7wGOqUB0RytexZGZIUoc6pFPkicYPjG5eRynRWTrIc1UEy5iI1AC4NlgPniMLFchm%2BQm%2FK0O6V0O7%2BqDU70j3FvGe67%2FZLNiXdQP175LPZrFiFqeAvwG93ocXuuq6IfsGIG9ayEZnaR3Ouej63p3wpJzwnH9AvY9dseNh48MFDbdeTU8uoooqxE4OSYdOdt5VGeVle44o3ooRlI%2FqHeIvxSUW8n0fD06TkU&X-Amz-Signature=96eb9338fa7566689ab179d585eff2244866c6b062bf5b92036d419b46553ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
