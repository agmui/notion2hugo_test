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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4JVQQV3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFDXz6DUb%2Bg2nq2pwczbj37Yo390jiR4dAwRoOox0Z7tAiBOssqfzzP0OID2KHVDbbZlYsjz3omogufs9XWpzymC%2FSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM18sDzuUjseMfwZZkKtwDXX1IfISTwy89b07ue%2Fs65mHZDE9Bu7RpC%2BSmXUyuSfFx6OqPuFc9LQakVyUCzTl5B5lnCBwPg5cIEOBImE%2FIlO2MDwhPMNGd%2FSqDAO8iN1dqpC6kPCj0TP%2FnFNOlxLzk4JfHDVDbP2mTbqf4vCq%2BzN5utFLAsQb3593FNQPD0E8QDOeBZhxiQSRlpVn14S%2BbMvXtj4k5NHroOG3Gxaf0SlGXp1pnFYVjwt0l3vkun0Kp3MibxZo3v9kB4Zn1QPHS1XspkO2LggHQzBdIWXbtDWlM1Zxm5eoTaaUnzvneCXrjLB24eObUj0em6QjbfCy7ACT3yVjuNVMFNFkU67TIXIzPfEuZZ%2F7i%2FnJF8XjLmRQdpaCgJu59%2B%2B5pcAHjbg7wcKUsvNJsml1AGuRcW0AWQJZzztC3YPPFdPLeBYa6KYP3pcPLpi%2Ff6asHYH%2FGzJgJoQoBNf4aUbY%2FkfEPtGWGHfZcmMT%2Ff5BuqoCM1FsmYMbTRWlfdaI%2FSPanNr%2BGe1ZerEzqgSCcELCfPtjD2qBn18KFljbXBopQiRsqXbi57TTI8PqN0ILx%2B01sbWiUg8CHbYlel4HD%2Ftry94JWSTCa%2FsQ24Jbw3ZuI7z3VFqGx72dqsKb7UbhjZHeIUY0wlIiTwQY6pgHnXMutDqdeyWg7NvsZzJo2mKXStWtkHo8V%2BgInUbG2r6uQj5OjIxYTTGFUl0Y0QimM803ZAo4nG2snZIWjknxuHsnTCoQv%2FDl2CVS%2FfQH9mTmgUZNOcy%2BflqXQvwQ2SuTFhek6NsAVfcxNHWiP57Jeieb7r0BmdApUu7eWJZvQHFTKulU9Le9OkS6HMe844GeRbnpcd%2BT6W89D%2BMomPGaga5AtKdFx&X-Amz-Signature=4fcec786627c427232a2e77c036da120722b45a5b3a54877affda9e95ab90bba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4JVQQV3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFDXz6DUb%2Bg2nq2pwczbj37Yo390jiR4dAwRoOox0Z7tAiBOssqfzzP0OID2KHVDbbZlYsjz3omogufs9XWpzymC%2FSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM18sDzuUjseMfwZZkKtwDXX1IfISTwy89b07ue%2Fs65mHZDE9Bu7RpC%2BSmXUyuSfFx6OqPuFc9LQakVyUCzTl5B5lnCBwPg5cIEOBImE%2FIlO2MDwhPMNGd%2FSqDAO8iN1dqpC6kPCj0TP%2FnFNOlxLzk4JfHDVDbP2mTbqf4vCq%2BzN5utFLAsQb3593FNQPD0E8QDOeBZhxiQSRlpVn14S%2BbMvXtj4k5NHroOG3Gxaf0SlGXp1pnFYVjwt0l3vkun0Kp3MibxZo3v9kB4Zn1QPHS1XspkO2LggHQzBdIWXbtDWlM1Zxm5eoTaaUnzvneCXrjLB24eObUj0em6QjbfCy7ACT3yVjuNVMFNFkU67TIXIzPfEuZZ%2F7i%2FnJF8XjLmRQdpaCgJu59%2B%2B5pcAHjbg7wcKUsvNJsml1AGuRcW0AWQJZzztC3YPPFdPLeBYa6KYP3pcPLpi%2Ff6asHYH%2FGzJgJoQoBNf4aUbY%2FkfEPtGWGHfZcmMT%2Ff5BuqoCM1FsmYMbTRWlfdaI%2FSPanNr%2BGe1ZerEzqgSCcELCfPtjD2qBn18KFljbXBopQiRsqXbi57TTI8PqN0ILx%2B01sbWiUg8CHbYlel4HD%2Ftry94JWSTCa%2FsQ24Jbw3ZuI7z3VFqGx72dqsKb7UbhjZHeIUY0wlIiTwQY6pgHnXMutDqdeyWg7NvsZzJo2mKXStWtkHo8V%2BgInUbG2r6uQj5OjIxYTTGFUl0Y0QimM803ZAo4nG2snZIWjknxuHsnTCoQv%2FDl2CVS%2FfQH9mTmgUZNOcy%2BflqXQvwQ2SuTFhek6NsAVfcxNHWiP57Jeieb7r0BmdApUu7eWJZvQHFTKulU9Le9OkS6HMe844GeRbnpcd%2BT6W89D%2BMomPGaga5AtKdFx&X-Amz-Signature=6125c445db9f5ccc95e243ff4e89befd46d05e76806f601b8886f9ce317300b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4JVQQV3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFDXz6DUb%2Bg2nq2pwczbj37Yo390jiR4dAwRoOox0Z7tAiBOssqfzzP0OID2KHVDbbZlYsjz3omogufs9XWpzymC%2FSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM18sDzuUjseMfwZZkKtwDXX1IfISTwy89b07ue%2Fs65mHZDE9Bu7RpC%2BSmXUyuSfFx6OqPuFc9LQakVyUCzTl5B5lnCBwPg5cIEOBImE%2FIlO2MDwhPMNGd%2FSqDAO8iN1dqpC6kPCj0TP%2FnFNOlxLzk4JfHDVDbP2mTbqf4vCq%2BzN5utFLAsQb3593FNQPD0E8QDOeBZhxiQSRlpVn14S%2BbMvXtj4k5NHroOG3Gxaf0SlGXp1pnFYVjwt0l3vkun0Kp3MibxZo3v9kB4Zn1QPHS1XspkO2LggHQzBdIWXbtDWlM1Zxm5eoTaaUnzvneCXrjLB24eObUj0em6QjbfCy7ACT3yVjuNVMFNFkU67TIXIzPfEuZZ%2F7i%2FnJF8XjLmRQdpaCgJu59%2B%2B5pcAHjbg7wcKUsvNJsml1AGuRcW0AWQJZzztC3YPPFdPLeBYa6KYP3pcPLpi%2Ff6asHYH%2FGzJgJoQoBNf4aUbY%2FkfEPtGWGHfZcmMT%2Ff5BuqoCM1FsmYMbTRWlfdaI%2FSPanNr%2BGe1ZerEzqgSCcELCfPtjD2qBn18KFljbXBopQiRsqXbi57TTI8PqN0ILx%2B01sbWiUg8CHbYlel4HD%2Ftry94JWSTCa%2FsQ24Jbw3ZuI7z3VFqGx72dqsKb7UbhjZHeIUY0wlIiTwQY6pgHnXMutDqdeyWg7NvsZzJo2mKXStWtkHo8V%2BgInUbG2r6uQj5OjIxYTTGFUl0Y0QimM803ZAo4nG2snZIWjknxuHsnTCoQv%2FDl2CVS%2FfQH9mTmgUZNOcy%2BflqXQvwQ2SuTFhek6NsAVfcxNHWiP57Jeieb7r0BmdApUu7eWJZvQHFTKulU9Le9OkS6HMe844GeRbnpcd%2BT6W89D%2BMomPGaga5AtKdFx&X-Amz-Signature=d1dfa9c7a9d0ad30a4e318bce7ea0d765e446338003ac0562fca6817c6fb6bf4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4JVQQV3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFDXz6DUb%2Bg2nq2pwczbj37Yo390jiR4dAwRoOox0Z7tAiBOssqfzzP0OID2KHVDbbZlYsjz3omogufs9XWpzymC%2FSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM18sDzuUjseMfwZZkKtwDXX1IfISTwy89b07ue%2Fs65mHZDE9Bu7RpC%2BSmXUyuSfFx6OqPuFc9LQakVyUCzTl5B5lnCBwPg5cIEOBImE%2FIlO2MDwhPMNGd%2FSqDAO8iN1dqpC6kPCj0TP%2FnFNOlxLzk4JfHDVDbP2mTbqf4vCq%2BzN5utFLAsQb3593FNQPD0E8QDOeBZhxiQSRlpVn14S%2BbMvXtj4k5NHroOG3Gxaf0SlGXp1pnFYVjwt0l3vkun0Kp3MibxZo3v9kB4Zn1QPHS1XspkO2LggHQzBdIWXbtDWlM1Zxm5eoTaaUnzvneCXrjLB24eObUj0em6QjbfCy7ACT3yVjuNVMFNFkU67TIXIzPfEuZZ%2F7i%2FnJF8XjLmRQdpaCgJu59%2B%2B5pcAHjbg7wcKUsvNJsml1AGuRcW0AWQJZzztC3YPPFdPLeBYa6KYP3pcPLpi%2Ff6asHYH%2FGzJgJoQoBNf4aUbY%2FkfEPtGWGHfZcmMT%2Ff5BuqoCM1FsmYMbTRWlfdaI%2FSPanNr%2BGe1ZerEzqgSCcELCfPtjD2qBn18KFljbXBopQiRsqXbi57TTI8PqN0ILx%2B01sbWiUg8CHbYlel4HD%2Ftry94JWSTCa%2FsQ24Jbw3ZuI7z3VFqGx72dqsKb7UbhjZHeIUY0wlIiTwQY6pgHnXMutDqdeyWg7NvsZzJo2mKXStWtkHo8V%2BgInUbG2r6uQj5OjIxYTTGFUl0Y0QimM803ZAo4nG2snZIWjknxuHsnTCoQv%2FDl2CVS%2FfQH9mTmgUZNOcy%2BflqXQvwQ2SuTFhek6NsAVfcxNHWiP57Jeieb7r0BmdApUu7eWJZvQHFTKulU9Le9OkS6HMe844GeRbnpcd%2BT6W89D%2BMomPGaga5AtKdFx&X-Amz-Signature=e7a7d27615cef82c0912ffbf2e2d3f17f7f89e6c85da8f30300e7da1ba2d8349&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4JVQQV3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFDXz6DUb%2Bg2nq2pwczbj37Yo390jiR4dAwRoOox0Z7tAiBOssqfzzP0OID2KHVDbbZlYsjz3omogufs9XWpzymC%2FSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM18sDzuUjseMfwZZkKtwDXX1IfISTwy89b07ue%2Fs65mHZDE9Bu7RpC%2BSmXUyuSfFx6OqPuFc9LQakVyUCzTl5B5lnCBwPg5cIEOBImE%2FIlO2MDwhPMNGd%2FSqDAO8iN1dqpC6kPCj0TP%2FnFNOlxLzk4JfHDVDbP2mTbqf4vCq%2BzN5utFLAsQb3593FNQPD0E8QDOeBZhxiQSRlpVn14S%2BbMvXtj4k5NHroOG3Gxaf0SlGXp1pnFYVjwt0l3vkun0Kp3MibxZo3v9kB4Zn1QPHS1XspkO2LggHQzBdIWXbtDWlM1Zxm5eoTaaUnzvneCXrjLB24eObUj0em6QjbfCy7ACT3yVjuNVMFNFkU67TIXIzPfEuZZ%2F7i%2FnJF8XjLmRQdpaCgJu59%2B%2B5pcAHjbg7wcKUsvNJsml1AGuRcW0AWQJZzztC3YPPFdPLeBYa6KYP3pcPLpi%2Ff6asHYH%2FGzJgJoQoBNf4aUbY%2FkfEPtGWGHfZcmMT%2Ff5BuqoCM1FsmYMbTRWlfdaI%2FSPanNr%2BGe1ZerEzqgSCcELCfPtjD2qBn18KFljbXBopQiRsqXbi57TTI8PqN0ILx%2B01sbWiUg8CHbYlel4HD%2Ftry94JWSTCa%2FsQ24Jbw3ZuI7z3VFqGx72dqsKb7UbhjZHeIUY0wlIiTwQY6pgHnXMutDqdeyWg7NvsZzJo2mKXStWtkHo8V%2BgInUbG2r6uQj5OjIxYTTGFUl0Y0QimM803ZAo4nG2snZIWjknxuHsnTCoQv%2FDl2CVS%2FfQH9mTmgUZNOcy%2BflqXQvwQ2SuTFhek6NsAVfcxNHWiP57Jeieb7r0BmdApUu7eWJZvQHFTKulU9Le9OkS6HMe844GeRbnpcd%2BT6W89D%2BMomPGaga5AtKdFx&X-Amz-Signature=8b72f432064ec2258926abd806d16ba18e0f079752b54b0f9e7b39ac672bcb1d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4JVQQV3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFDXz6DUb%2Bg2nq2pwczbj37Yo390jiR4dAwRoOox0Z7tAiBOssqfzzP0OID2KHVDbbZlYsjz3omogufs9XWpzymC%2FSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM18sDzuUjseMfwZZkKtwDXX1IfISTwy89b07ue%2Fs65mHZDE9Bu7RpC%2BSmXUyuSfFx6OqPuFc9LQakVyUCzTl5B5lnCBwPg5cIEOBImE%2FIlO2MDwhPMNGd%2FSqDAO8iN1dqpC6kPCj0TP%2FnFNOlxLzk4JfHDVDbP2mTbqf4vCq%2BzN5utFLAsQb3593FNQPD0E8QDOeBZhxiQSRlpVn14S%2BbMvXtj4k5NHroOG3Gxaf0SlGXp1pnFYVjwt0l3vkun0Kp3MibxZo3v9kB4Zn1QPHS1XspkO2LggHQzBdIWXbtDWlM1Zxm5eoTaaUnzvneCXrjLB24eObUj0em6QjbfCy7ACT3yVjuNVMFNFkU67TIXIzPfEuZZ%2F7i%2FnJF8XjLmRQdpaCgJu59%2B%2B5pcAHjbg7wcKUsvNJsml1AGuRcW0AWQJZzztC3YPPFdPLeBYa6KYP3pcPLpi%2Ff6asHYH%2FGzJgJoQoBNf4aUbY%2FkfEPtGWGHfZcmMT%2Ff5BuqoCM1FsmYMbTRWlfdaI%2FSPanNr%2BGe1ZerEzqgSCcELCfPtjD2qBn18KFljbXBopQiRsqXbi57TTI8PqN0ILx%2B01sbWiUg8CHbYlel4HD%2Ftry94JWSTCa%2FsQ24Jbw3ZuI7z3VFqGx72dqsKb7UbhjZHeIUY0wlIiTwQY6pgHnXMutDqdeyWg7NvsZzJo2mKXStWtkHo8V%2BgInUbG2r6uQj5OjIxYTTGFUl0Y0QimM803ZAo4nG2snZIWjknxuHsnTCoQv%2FDl2CVS%2FfQH9mTmgUZNOcy%2BflqXQvwQ2SuTFhek6NsAVfcxNHWiP57Jeieb7r0BmdApUu7eWJZvQHFTKulU9Le9OkS6HMe844GeRbnpcd%2BT6W89D%2BMomPGaga5AtKdFx&X-Amz-Signature=bb5fa0dc5a8861fe671298f6f8a97936ef593e69f7565d4dfb5ddc987939a211&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4JVQQV3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFDXz6DUb%2Bg2nq2pwczbj37Yo390jiR4dAwRoOox0Z7tAiBOssqfzzP0OID2KHVDbbZlYsjz3omogufs9XWpzymC%2FSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM18sDzuUjseMfwZZkKtwDXX1IfISTwy89b07ue%2Fs65mHZDE9Bu7RpC%2BSmXUyuSfFx6OqPuFc9LQakVyUCzTl5B5lnCBwPg5cIEOBImE%2FIlO2MDwhPMNGd%2FSqDAO8iN1dqpC6kPCj0TP%2FnFNOlxLzk4JfHDVDbP2mTbqf4vCq%2BzN5utFLAsQb3593FNQPD0E8QDOeBZhxiQSRlpVn14S%2BbMvXtj4k5NHroOG3Gxaf0SlGXp1pnFYVjwt0l3vkun0Kp3MibxZo3v9kB4Zn1QPHS1XspkO2LggHQzBdIWXbtDWlM1Zxm5eoTaaUnzvneCXrjLB24eObUj0em6QjbfCy7ACT3yVjuNVMFNFkU67TIXIzPfEuZZ%2F7i%2FnJF8XjLmRQdpaCgJu59%2B%2B5pcAHjbg7wcKUsvNJsml1AGuRcW0AWQJZzztC3YPPFdPLeBYa6KYP3pcPLpi%2Ff6asHYH%2FGzJgJoQoBNf4aUbY%2FkfEPtGWGHfZcmMT%2Ff5BuqoCM1FsmYMbTRWlfdaI%2FSPanNr%2BGe1ZerEzqgSCcELCfPtjD2qBn18KFljbXBopQiRsqXbi57TTI8PqN0ILx%2B01sbWiUg8CHbYlel4HD%2Ftry94JWSTCa%2FsQ24Jbw3ZuI7z3VFqGx72dqsKb7UbhjZHeIUY0wlIiTwQY6pgHnXMutDqdeyWg7NvsZzJo2mKXStWtkHo8V%2BgInUbG2r6uQj5OjIxYTTGFUl0Y0QimM803ZAo4nG2snZIWjknxuHsnTCoQv%2FDl2CVS%2FfQH9mTmgUZNOcy%2BflqXQvwQ2SuTFhek6NsAVfcxNHWiP57Jeieb7r0BmdApUu7eWJZvQHFTKulU9Le9OkS6HMe844GeRbnpcd%2BT6W89D%2BMomPGaga5AtKdFx&X-Amz-Signature=6fd943fce9f86341ed6917713cb84a762e467b0c4a94edf8acdfda3fa79abe7b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
