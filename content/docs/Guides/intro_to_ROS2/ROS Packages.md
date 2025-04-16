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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMPUKV7Q%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3HnIucjKjb%2FLZHIHwpyNQX7E8iucQ2ij3kyT6CLxCuAiEAnzDPbjaIx%2FtmkyT9zI37LbUw7g2LOlaSNlFudWNu22oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDETHNFB%2B1Vn9Cb1FASrcA6UKZ3BgWjVI3548jc4vXEhH49GsZHZi3srxYASN8xa7GfjaAy6VOwVudIeMAgT2Ee02K6KKfe%2BfsEHH6l6bb%2BXDEAw%2F9m%2Fm4%2F6%2BWAG4jhr%2BKTJn4XH9r5twTtOjOQrHWknIa67mfAIrB1QAoCOQKAoew2n825r4HKOn9EyCINNo%2FXXh9bvXwb%2FUpQwaOo8pnmfoDmILhimBJxGSilCFF1dZAatkmMBcoku%2FuAGptA8ledWjNIPR65zn%2F6QgmRoyl96v4EZW2uFJdtiLjhTLd27Ft1LJfO9epvLFxv8xvok04iOObVvgdRJT1yGcvFxweWqec3DX8uKsYnoQus3M5hxcHz6rah8VZVeKZqoQbrdB%2Bc3ZgcW9DqhXmEMgvRDhEu%2F4LvhVSRqNSFif6I%2B3lSIx0XV9UD1FKhT0EbtjujyMroGhZGUyy5heRJHp6DRIZjmqCZAyTr6%2FAAk0XjZmQ1u3SqPMS%2BOVdbphAC59iefr9rX6j7dvcc5YzeilaqygCJdrZhiiwvx%2FsRdxO0FprXbe4dJO7jLH%2BIEhgvg5GZipHJ%2FGAR7veC7jxEYyWkHjbj6XISXCAr99eZtbBSF8TqO%2F2Bz1N97PEa0k9X8VwCkiVizS5%2BHCwag39yP6ML7Z%2Fb8GOqUBAYAvdtkdw%2B9xgHrkqUSG3tVmlm0BlBTzMIUEZxzdrPN6LyP1OJrsKYT8ovezliQIla825BJ%2BPpIPqQo9N0HPV1CGoel%2BCT0Ax41WT%2F6Iyzkycs1lkHzJ37%2FH2KUBhU4SjjY73tXnT7M9vp%2Btn2IzL7YkuCAq7JqlBOyMw1QnrD5PbjwfNhE9TmVFBIgG%2B8O2Is4qavvwwra0tGMSahVDPLQvlXoJ&X-Amz-Signature=01f55d8e6ae269c63d72b28c7813ab328527d5627425c2372242f710b794f066&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMPUKV7Q%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3HnIucjKjb%2FLZHIHwpyNQX7E8iucQ2ij3kyT6CLxCuAiEAnzDPbjaIx%2FtmkyT9zI37LbUw7g2LOlaSNlFudWNu22oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDETHNFB%2B1Vn9Cb1FASrcA6UKZ3BgWjVI3548jc4vXEhH49GsZHZi3srxYASN8xa7GfjaAy6VOwVudIeMAgT2Ee02K6KKfe%2BfsEHH6l6bb%2BXDEAw%2F9m%2Fm4%2F6%2BWAG4jhr%2BKTJn4XH9r5twTtOjOQrHWknIa67mfAIrB1QAoCOQKAoew2n825r4HKOn9EyCINNo%2FXXh9bvXwb%2FUpQwaOo8pnmfoDmILhimBJxGSilCFF1dZAatkmMBcoku%2FuAGptA8ledWjNIPR65zn%2F6QgmRoyl96v4EZW2uFJdtiLjhTLd27Ft1LJfO9epvLFxv8xvok04iOObVvgdRJT1yGcvFxweWqec3DX8uKsYnoQus3M5hxcHz6rah8VZVeKZqoQbrdB%2Bc3ZgcW9DqhXmEMgvRDhEu%2F4LvhVSRqNSFif6I%2B3lSIx0XV9UD1FKhT0EbtjujyMroGhZGUyy5heRJHp6DRIZjmqCZAyTr6%2FAAk0XjZmQ1u3SqPMS%2BOVdbphAC59iefr9rX6j7dvcc5YzeilaqygCJdrZhiiwvx%2FsRdxO0FprXbe4dJO7jLH%2BIEhgvg5GZipHJ%2FGAR7veC7jxEYyWkHjbj6XISXCAr99eZtbBSF8TqO%2F2Bz1N97PEa0k9X8VwCkiVizS5%2BHCwag39yP6ML7Z%2Fb8GOqUBAYAvdtkdw%2B9xgHrkqUSG3tVmlm0BlBTzMIUEZxzdrPN6LyP1OJrsKYT8ovezliQIla825BJ%2BPpIPqQo9N0HPV1CGoel%2BCT0Ax41WT%2F6Iyzkycs1lkHzJ37%2FH2KUBhU4SjjY73tXnT7M9vp%2Btn2IzL7YkuCAq7JqlBOyMw1QnrD5PbjwfNhE9TmVFBIgG%2B8O2Is4qavvwwra0tGMSahVDPLQvlXoJ&X-Amz-Signature=215e73a4738f3b41ebf11c643c9837cfe2bf2cc2f463bbf5ce80148efc0418a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMPUKV7Q%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3HnIucjKjb%2FLZHIHwpyNQX7E8iucQ2ij3kyT6CLxCuAiEAnzDPbjaIx%2FtmkyT9zI37LbUw7g2LOlaSNlFudWNu22oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDETHNFB%2B1Vn9Cb1FASrcA6UKZ3BgWjVI3548jc4vXEhH49GsZHZi3srxYASN8xa7GfjaAy6VOwVudIeMAgT2Ee02K6KKfe%2BfsEHH6l6bb%2BXDEAw%2F9m%2Fm4%2F6%2BWAG4jhr%2BKTJn4XH9r5twTtOjOQrHWknIa67mfAIrB1QAoCOQKAoew2n825r4HKOn9EyCINNo%2FXXh9bvXwb%2FUpQwaOo8pnmfoDmILhimBJxGSilCFF1dZAatkmMBcoku%2FuAGptA8ledWjNIPR65zn%2F6QgmRoyl96v4EZW2uFJdtiLjhTLd27Ft1LJfO9epvLFxv8xvok04iOObVvgdRJT1yGcvFxweWqec3DX8uKsYnoQus3M5hxcHz6rah8VZVeKZqoQbrdB%2Bc3ZgcW9DqhXmEMgvRDhEu%2F4LvhVSRqNSFif6I%2B3lSIx0XV9UD1FKhT0EbtjujyMroGhZGUyy5heRJHp6DRIZjmqCZAyTr6%2FAAk0XjZmQ1u3SqPMS%2BOVdbphAC59iefr9rX6j7dvcc5YzeilaqygCJdrZhiiwvx%2FsRdxO0FprXbe4dJO7jLH%2BIEhgvg5GZipHJ%2FGAR7veC7jxEYyWkHjbj6XISXCAr99eZtbBSF8TqO%2F2Bz1N97PEa0k9X8VwCkiVizS5%2BHCwag39yP6ML7Z%2Fb8GOqUBAYAvdtkdw%2B9xgHrkqUSG3tVmlm0BlBTzMIUEZxzdrPN6LyP1OJrsKYT8ovezliQIla825BJ%2BPpIPqQo9N0HPV1CGoel%2BCT0Ax41WT%2F6Iyzkycs1lkHzJ37%2FH2KUBhU4SjjY73tXnT7M9vp%2Btn2IzL7YkuCAq7JqlBOyMw1QnrD5PbjwfNhE9TmVFBIgG%2B8O2Is4qavvwwra0tGMSahVDPLQvlXoJ&X-Amz-Signature=dc5907518aad607730b46bb03f6d023582279b3ee9b4c480d54a3e6815ff1b86&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMPUKV7Q%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3HnIucjKjb%2FLZHIHwpyNQX7E8iucQ2ij3kyT6CLxCuAiEAnzDPbjaIx%2FtmkyT9zI37LbUw7g2LOlaSNlFudWNu22oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDETHNFB%2B1Vn9Cb1FASrcA6UKZ3BgWjVI3548jc4vXEhH49GsZHZi3srxYASN8xa7GfjaAy6VOwVudIeMAgT2Ee02K6KKfe%2BfsEHH6l6bb%2BXDEAw%2F9m%2Fm4%2F6%2BWAG4jhr%2BKTJn4XH9r5twTtOjOQrHWknIa67mfAIrB1QAoCOQKAoew2n825r4HKOn9EyCINNo%2FXXh9bvXwb%2FUpQwaOo8pnmfoDmILhimBJxGSilCFF1dZAatkmMBcoku%2FuAGptA8ledWjNIPR65zn%2F6QgmRoyl96v4EZW2uFJdtiLjhTLd27Ft1LJfO9epvLFxv8xvok04iOObVvgdRJT1yGcvFxweWqec3DX8uKsYnoQus3M5hxcHz6rah8VZVeKZqoQbrdB%2Bc3ZgcW9DqhXmEMgvRDhEu%2F4LvhVSRqNSFif6I%2B3lSIx0XV9UD1FKhT0EbtjujyMroGhZGUyy5heRJHp6DRIZjmqCZAyTr6%2FAAk0XjZmQ1u3SqPMS%2BOVdbphAC59iefr9rX6j7dvcc5YzeilaqygCJdrZhiiwvx%2FsRdxO0FprXbe4dJO7jLH%2BIEhgvg5GZipHJ%2FGAR7veC7jxEYyWkHjbj6XISXCAr99eZtbBSF8TqO%2F2Bz1N97PEa0k9X8VwCkiVizS5%2BHCwag39yP6ML7Z%2Fb8GOqUBAYAvdtkdw%2B9xgHrkqUSG3tVmlm0BlBTzMIUEZxzdrPN6LyP1OJrsKYT8ovezliQIla825BJ%2BPpIPqQo9N0HPV1CGoel%2BCT0Ax41WT%2F6Iyzkycs1lkHzJ37%2FH2KUBhU4SjjY73tXnT7M9vp%2Btn2IzL7YkuCAq7JqlBOyMw1QnrD5PbjwfNhE9TmVFBIgG%2B8O2Is4qavvwwra0tGMSahVDPLQvlXoJ&X-Amz-Signature=77407b40f9b642dd4bbb520135bbf1fdb7bca6c43d9c3bcc1aa9c4010b7755ab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMPUKV7Q%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3HnIucjKjb%2FLZHIHwpyNQX7E8iucQ2ij3kyT6CLxCuAiEAnzDPbjaIx%2FtmkyT9zI37LbUw7g2LOlaSNlFudWNu22oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDETHNFB%2B1Vn9Cb1FASrcA6UKZ3BgWjVI3548jc4vXEhH49GsZHZi3srxYASN8xa7GfjaAy6VOwVudIeMAgT2Ee02K6KKfe%2BfsEHH6l6bb%2BXDEAw%2F9m%2Fm4%2F6%2BWAG4jhr%2BKTJn4XH9r5twTtOjOQrHWknIa67mfAIrB1QAoCOQKAoew2n825r4HKOn9EyCINNo%2FXXh9bvXwb%2FUpQwaOo8pnmfoDmILhimBJxGSilCFF1dZAatkmMBcoku%2FuAGptA8ledWjNIPR65zn%2F6QgmRoyl96v4EZW2uFJdtiLjhTLd27Ft1LJfO9epvLFxv8xvok04iOObVvgdRJT1yGcvFxweWqec3DX8uKsYnoQus3M5hxcHz6rah8VZVeKZqoQbrdB%2Bc3ZgcW9DqhXmEMgvRDhEu%2F4LvhVSRqNSFif6I%2B3lSIx0XV9UD1FKhT0EbtjujyMroGhZGUyy5heRJHp6DRIZjmqCZAyTr6%2FAAk0XjZmQ1u3SqPMS%2BOVdbphAC59iefr9rX6j7dvcc5YzeilaqygCJdrZhiiwvx%2FsRdxO0FprXbe4dJO7jLH%2BIEhgvg5GZipHJ%2FGAR7veC7jxEYyWkHjbj6XISXCAr99eZtbBSF8TqO%2F2Bz1N97PEa0k9X8VwCkiVizS5%2BHCwag39yP6ML7Z%2Fb8GOqUBAYAvdtkdw%2B9xgHrkqUSG3tVmlm0BlBTzMIUEZxzdrPN6LyP1OJrsKYT8ovezliQIla825BJ%2BPpIPqQo9N0HPV1CGoel%2BCT0Ax41WT%2F6Iyzkycs1lkHzJ37%2FH2KUBhU4SjjY73tXnT7M9vp%2Btn2IzL7YkuCAq7JqlBOyMw1QnrD5PbjwfNhE9TmVFBIgG%2B8O2Is4qavvwwra0tGMSahVDPLQvlXoJ&X-Amz-Signature=d7ffc97f684f7093da1d1d5aacb9e14aedbddd5a1d6d46ec0bcf0d8e817a6822&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMPUKV7Q%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3HnIucjKjb%2FLZHIHwpyNQX7E8iucQ2ij3kyT6CLxCuAiEAnzDPbjaIx%2FtmkyT9zI37LbUw7g2LOlaSNlFudWNu22oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDETHNFB%2B1Vn9Cb1FASrcA6UKZ3BgWjVI3548jc4vXEhH49GsZHZi3srxYASN8xa7GfjaAy6VOwVudIeMAgT2Ee02K6KKfe%2BfsEHH6l6bb%2BXDEAw%2F9m%2Fm4%2F6%2BWAG4jhr%2BKTJn4XH9r5twTtOjOQrHWknIa67mfAIrB1QAoCOQKAoew2n825r4HKOn9EyCINNo%2FXXh9bvXwb%2FUpQwaOo8pnmfoDmILhimBJxGSilCFF1dZAatkmMBcoku%2FuAGptA8ledWjNIPR65zn%2F6QgmRoyl96v4EZW2uFJdtiLjhTLd27Ft1LJfO9epvLFxv8xvok04iOObVvgdRJT1yGcvFxweWqec3DX8uKsYnoQus3M5hxcHz6rah8VZVeKZqoQbrdB%2Bc3ZgcW9DqhXmEMgvRDhEu%2F4LvhVSRqNSFif6I%2B3lSIx0XV9UD1FKhT0EbtjujyMroGhZGUyy5heRJHp6DRIZjmqCZAyTr6%2FAAk0XjZmQ1u3SqPMS%2BOVdbphAC59iefr9rX6j7dvcc5YzeilaqygCJdrZhiiwvx%2FsRdxO0FprXbe4dJO7jLH%2BIEhgvg5GZipHJ%2FGAR7veC7jxEYyWkHjbj6XISXCAr99eZtbBSF8TqO%2F2Bz1N97PEa0k9X8VwCkiVizS5%2BHCwag39yP6ML7Z%2Fb8GOqUBAYAvdtkdw%2B9xgHrkqUSG3tVmlm0BlBTzMIUEZxzdrPN6LyP1OJrsKYT8ovezliQIla825BJ%2BPpIPqQo9N0HPV1CGoel%2BCT0Ax41WT%2F6Iyzkycs1lkHzJ37%2FH2KUBhU4SjjY73tXnT7M9vp%2Btn2IzL7YkuCAq7JqlBOyMw1QnrD5PbjwfNhE9TmVFBIgG%2B8O2Is4qavvwwra0tGMSahVDPLQvlXoJ&X-Amz-Signature=e5646dc04c463715f671c3dfdf9176b3c6e799cf8347d6ebfad191b62c2ac9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMPUKV7Q%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3HnIucjKjb%2FLZHIHwpyNQX7E8iucQ2ij3kyT6CLxCuAiEAnzDPbjaIx%2FtmkyT9zI37LbUw7g2LOlaSNlFudWNu22oq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDETHNFB%2B1Vn9Cb1FASrcA6UKZ3BgWjVI3548jc4vXEhH49GsZHZi3srxYASN8xa7GfjaAy6VOwVudIeMAgT2Ee02K6KKfe%2BfsEHH6l6bb%2BXDEAw%2F9m%2Fm4%2F6%2BWAG4jhr%2BKTJn4XH9r5twTtOjOQrHWknIa67mfAIrB1QAoCOQKAoew2n825r4HKOn9EyCINNo%2FXXh9bvXwb%2FUpQwaOo8pnmfoDmILhimBJxGSilCFF1dZAatkmMBcoku%2FuAGptA8ledWjNIPR65zn%2F6QgmRoyl96v4EZW2uFJdtiLjhTLd27Ft1LJfO9epvLFxv8xvok04iOObVvgdRJT1yGcvFxweWqec3DX8uKsYnoQus3M5hxcHz6rah8VZVeKZqoQbrdB%2Bc3ZgcW9DqhXmEMgvRDhEu%2F4LvhVSRqNSFif6I%2B3lSIx0XV9UD1FKhT0EbtjujyMroGhZGUyy5heRJHp6DRIZjmqCZAyTr6%2FAAk0XjZmQ1u3SqPMS%2BOVdbphAC59iefr9rX6j7dvcc5YzeilaqygCJdrZhiiwvx%2FsRdxO0FprXbe4dJO7jLH%2BIEhgvg5GZipHJ%2FGAR7veC7jxEYyWkHjbj6XISXCAr99eZtbBSF8TqO%2F2Bz1N97PEa0k9X8VwCkiVizS5%2BHCwag39yP6ML7Z%2Fb8GOqUBAYAvdtkdw%2B9xgHrkqUSG3tVmlm0BlBTzMIUEZxzdrPN6LyP1OJrsKYT8ovezliQIla825BJ%2BPpIPqQo9N0HPV1CGoel%2BCT0Ax41WT%2F6Iyzkycs1lkHzJ37%2FH2KUBhU4SjjY73tXnT7M9vp%2Btn2IzL7YkuCAq7JqlBOyMw1QnrD5PbjwfNhE9TmVFBIgG%2B8O2Is4qavvwwra0tGMSahVDPLQvlXoJ&X-Amz-Signature=90a399f73659f9e60a78ead55433c71c5d823f0e39f994ffc1fb8c9c97341cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
