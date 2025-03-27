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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCAYJWV%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG6UpxgFqLufnt%2BkagI884be%2BQcFcEQbfgSKF3ITN7yAiEA%2BaPKP0ioYLh2r%2FCvNiL%2BZTFmm84z0J9tF6zW94LSFOQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLT4O75oJbgKafYPXSrcA0xccnltY%2FTqIu6DK5rmoelqB3Hkqj2ZzqdwnUt0gP6vXMBu%2BNuWO3WjJteMhPFxd0qGUTAEiU7%2B9TAJ9o1yuqxKjqss5LfMh3KeRqWwl60vrgazQDrhIbKkx0P9LovopLZ%2BYZx0dJfJP%2BYEgsvOTB26DCJA%2B2ShG98Ktk1uqCUEhAWaPppWlKx9DagZFuyk2YZvMpbhvwo8X2WMwmpQwI%2F0aop2XJMblTYSzxd7xs63S1BLr5RJOqOWH5%2B5ID43oWs1aTNp1uwT4Sa89lFW%2Buf4dFpzxjrJm2KW6S9DJprxA7XD0yKZ7k9OTb0XpQz6F5VlplpGos%2F1BLsF1NzzMzYnBs0alwdAvrkxLa5blbtsk0OUJI7qeofnkOInkSU1%2F1MZIOO4k7x%2FMXZFBrR3Ul335eg8UH3mi4kVhEN8sagKrAkUu1nDC6UpDyW0UhPU1erGCpmYyU2jOwh%2BOnWzAgiJ9AICqdJoXU07LE1BqocCtABUrXuxGLd2wqZaRrtlb1ksu1xhUw9%2BKQ6Xk%2BdJiITWyRkEV3167%2FgUSEftuDA0Pf%2Bm%2BIvGMubnDHyt9Z272s6GzJIXdn1hDBZxHr5%2FtorZUfw7%2FD5Iy4croWd%2Fvt5BkckbD2FfR0v6eZ0vMMLdlr8GOqUBamhSDzC4P7Y2FT00X8bCse7f%2F2uFdm4mbSQCm9qBMUjWJLg4rLKVqdyHvfOpZC%2B%2Bkc2Uf%2FkDHLBawm8BApPM%2BHTzdCU%2BbOh3fNf6Qjqxrv6YNdtnM37iNsw30Xwpyhlz2Cfr1mQiHEuZ%2BmxxperPFA4K%2FVcti7iDRK0K4uYmiEeDEvLD9qRDWC7XKCKYWQwrXhweerAIwGG6aRfboffdZQ7wcrzt&X-Amz-Signature=34dc3e86d54bccc11f77306a1654feb90061dfba8f7eb4935708dd6130939424&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCAYJWV%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG6UpxgFqLufnt%2BkagI884be%2BQcFcEQbfgSKF3ITN7yAiEA%2BaPKP0ioYLh2r%2FCvNiL%2BZTFmm84z0J9tF6zW94LSFOQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLT4O75oJbgKafYPXSrcA0xccnltY%2FTqIu6DK5rmoelqB3Hkqj2ZzqdwnUt0gP6vXMBu%2BNuWO3WjJteMhPFxd0qGUTAEiU7%2B9TAJ9o1yuqxKjqss5LfMh3KeRqWwl60vrgazQDrhIbKkx0P9LovopLZ%2BYZx0dJfJP%2BYEgsvOTB26DCJA%2B2ShG98Ktk1uqCUEhAWaPppWlKx9DagZFuyk2YZvMpbhvwo8X2WMwmpQwI%2F0aop2XJMblTYSzxd7xs63S1BLr5RJOqOWH5%2B5ID43oWs1aTNp1uwT4Sa89lFW%2Buf4dFpzxjrJm2KW6S9DJprxA7XD0yKZ7k9OTb0XpQz6F5VlplpGos%2F1BLsF1NzzMzYnBs0alwdAvrkxLa5blbtsk0OUJI7qeofnkOInkSU1%2F1MZIOO4k7x%2FMXZFBrR3Ul335eg8UH3mi4kVhEN8sagKrAkUu1nDC6UpDyW0UhPU1erGCpmYyU2jOwh%2BOnWzAgiJ9AICqdJoXU07LE1BqocCtABUrXuxGLd2wqZaRrtlb1ksu1xhUw9%2BKQ6Xk%2BdJiITWyRkEV3167%2FgUSEftuDA0Pf%2Bm%2BIvGMubnDHyt9Z272s6GzJIXdn1hDBZxHr5%2FtorZUfw7%2FD5Iy4croWd%2Fvt5BkckbD2FfR0v6eZ0vMMLdlr8GOqUBamhSDzC4P7Y2FT00X8bCse7f%2F2uFdm4mbSQCm9qBMUjWJLg4rLKVqdyHvfOpZC%2B%2Bkc2Uf%2FkDHLBawm8BApPM%2BHTzdCU%2BbOh3fNf6Qjqxrv6YNdtnM37iNsw30Xwpyhlz2Cfr1mQiHEuZ%2BmxxperPFA4K%2FVcti7iDRK0K4uYmiEeDEvLD9qRDWC7XKCKYWQwrXhweerAIwGG6aRfboffdZQ7wcrzt&X-Amz-Signature=b523e580a52e13b8edce35fafced896f432df023ccf28e6a02d1251dff374eed&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCAYJWV%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG6UpxgFqLufnt%2BkagI884be%2BQcFcEQbfgSKF3ITN7yAiEA%2BaPKP0ioYLh2r%2FCvNiL%2BZTFmm84z0J9tF6zW94LSFOQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLT4O75oJbgKafYPXSrcA0xccnltY%2FTqIu6DK5rmoelqB3Hkqj2ZzqdwnUt0gP6vXMBu%2BNuWO3WjJteMhPFxd0qGUTAEiU7%2B9TAJ9o1yuqxKjqss5LfMh3KeRqWwl60vrgazQDrhIbKkx0P9LovopLZ%2BYZx0dJfJP%2BYEgsvOTB26DCJA%2B2ShG98Ktk1uqCUEhAWaPppWlKx9DagZFuyk2YZvMpbhvwo8X2WMwmpQwI%2F0aop2XJMblTYSzxd7xs63S1BLr5RJOqOWH5%2B5ID43oWs1aTNp1uwT4Sa89lFW%2Buf4dFpzxjrJm2KW6S9DJprxA7XD0yKZ7k9OTb0XpQz6F5VlplpGos%2F1BLsF1NzzMzYnBs0alwdAvrkxLa5blbtsk0OUJI7qeofnkOInkSU1%2F1MZIOO4k7x%2FMXZFBrR3Ul335eg8UH3mi4kVhEN8sagKrAkUu1nDC6UpDyW0UhPU1erGCpmYyU2jOwh%2BOnWzAgiJ9AICqdJoXU07LE1BqocCtABUrXuxGLd2wqZaRrtlb1ksu1xhUw9%2BKQ6Xk%2BdJiITWyRkEV3167%2FgUSEftuDA0Pf%2Bm%2BIvGMubnDHyt9Z272s6GzJIXdn1hDBZxHr5%2FtorZUfw7%2FD5Iy4croWd%2Fvt5BkckbD2FfR0v6eZ0vMMLdlr8GOqUBamhSDzC4P7Y2FT00X8bCse7f%2F2uFdm4mbSQCm9qBMUjWJLg4rLKVqdyHvfOpZC%2B%2Bkc2Uf%2FkDHLBawm8BApPM%2BHTzdCU%2BbOh3fNf6Qjqxrv6YNdtnM37iNsw30Xwpyhlz2Cfr1mQiHEuZ%2BmxxperPFA4K%2FVcti7iDRK0K4uYmiEeDEvLD9qRDWC7XKCKYWQwrXhweerAIwGG6aRfboffdZQ7wcrzt&X-Amz-Signature=63e92dce07610417976e47ba19fc00666ad654ee19c7173c25256f0f4b97e379&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCAYJWV%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG6UpxgFqLufnt%2BkagI884be%2BQcFcEQbfgSKF3ITN7yAiEA%2BaPKP0ioYLh2r%2FCvNiL%2BZTFmm84z0J9tF6zW94LSFOQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLT4O75oJbgKafYPXSrcA0xccnltY%2FTqIu6DK5rmoelqB3Hkqj2ZzqdwnUt0gP6vXMBu%2BNuWO3WjJteMhPFxd0qGUTAEiU7%2B9TAJ9o1yuqxKjqss5LfMh3KeRqWwl60vrgazQDrhIbKkx0P9LovopLZ%2BYZx0dJfJP%2BYEgsvOTB26DCJA%2B2ShG98Ktk1uqCUEhAWaPppWlKx9DagZFuyk2YZvMpbhvwo8X2WMwmpQwI%2F0aop2XJMblTYSzxd7xs63S1BLr5RJOqOWH5%2B5ID43oWs1aTNp1uwT4Sa89lFW%2Buf4dFpzxjrJm2KW6S9DJprxA7XD0yKZ7k9OTb0XpQz6F5VlplpGos%2F1BLsF1NzzMzYnBs0alwdAvrkxLa5blbtsk0OUJI7qeofnkOInkSU1%2F1MZIOO4k7x%2FMXZFBrR3Ul335eg8UH3mi4kVhEN8sagKrAkUu1nDC6UpDyW0UhPU1erGCpmYyU2jOwh%2BOnWzAgiJ9AICqdJoXU07LE1BqocCtABUrXuxGLd2wqZaRrtlb1ksu1xhUw9%2BKQ6Xk%2BdJiITWyRkEV3167%2FgUSEftuDA0Pf%2Bm%2BIvGMubnDHyt9Z272s6GzJIXdn1hDBZxHr5%2FtorZUfw7%2FD5Iy4croWd%2Fvt5BkckbD2FfR0v6eZ0vMMLdlr8GOqUBamhSDzC4P7Y2FT00X8bCse7f%2F2uFdm4mbSQCm9qBMUjWJLg4rLKVqdyHvfOpZC%2B%2Bkc2Uf%2FkDHLBawm8BApPM%2BHTzdCU%2BbOh3fNf6Qjqxrv6YNdtnM37iNsw30Xwpyhlz2Cfr1mQiHEuZ%2BmxxperPFA4K%2FVcti7iDRK0K4uYmiEeDEvLD9qRDWC7XKCKYWQwrXhweerAIwGG6aRfboffdZQ7wcrzt&X-Amz-Signature=709856514a2f810d6487a5a45ffcbe4fafcbe7cdc3f87426cc2ae93b9371efcc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCAYJWV%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG6UpxgFqLufnt%2BkagI884be%2BQcFcEQbfgSKF3ITN7yAiEA%2BaPKP0ioYLh2r%2FCvNiL%2BZTFmm84z0J9tF6zW94LSFOQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLT4O75oJbgKafYPXSrcA0xccnltY%2FTqIu6DK5rmoelqB3Hkqj2ZzqdwnUt0gP6vXMBu%2BNuWO3WjJteMhPFxd0qGUTAEiU7%2B9TAJ9o1yuqxKjqss5LfMh3KeRqWwl60vrgazQDrhIbKkx0P9LovopLZ%2BYZx0dJfJP%2BYEgsvOTB26DCJA%2B2ShG98Ktk1uqCUEhAWaPppWlKx9DagZFuyk2YZvMpbhvwo8X2WMwmpQwI%2F0aop2XJMblTYSzxd7xs63S1BLr5RJOqOWH5%2B5ID43oWs1aTNp1uwT4Sa89lFW%2Buf4dFpzxjrJm2KW6S9DJprxA7XD0yKZ7k9OTb0XpQz6F5VlplpGos%2F1BLsF1NzzMzYnBs0alwdAvrkxLa5blbtsk0OUJI7qeofnkOInkSU1%2F1MZIOO4k7x%2FMXZFBrR3Ul335eg8UH3mi4kVhEN8sagKrAkUu1nDC6UpDyW0UhPU1erGCpmYyU2jOwh%2BOnWzAgiJ9AICqdJoXU07LE1BqocCtABUrXuxGLd2wqZaRrtlb1ksu1xhUw9%2BKQ6Xk%2BdJiITWyRkEV3167%2FgUSEftuDA0Pf%2Bm%2BIvGMubnDHyt9Z272s6GzJIXdn1hDBZxHr5%2FtorZUfw7%2FD5Iy4croWd%2Fvt5BkckbD2FfR0v6eZ0vMMLdlr8GOqUBamhSDzC4P7Y2FT00X8bCse7f%2F2uFdm4mbSQCm9qBMUjWJLg4rLKVqdyHvfOpZC%2B%2Bkc2Uf%2FkDHLBawm8BApPM%2BHTzdCU%2BbOh3fNf6Qjqxrv6YNdtnM37iNsw30Xwpyhlz2Cfr1mQiHEuZ%2BmxxperPFA4K%2FVcti7iDRK0K4uYmiEeDEvLD9qRDWC7XKCKYWQwrXhweerAIwGG6aRfboffdZQ7wcrzt&X-Amz-Signature=aa0474b4cf598cf57ecae9899db994bbf754a204b9943a3e0154402678a5a920&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCAYJWV%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG6UpxgFqLufnt%2BkagI884be%2BQcFcEQbfgSKF3ITN7yAiEA%2BaPKP0ioYLh2r%2FCvNiL%2BZTFmm84z0J9tF6zW94LSFOQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLT4O75oJbgKafYPXSrcA0xccnltY%2FTqIu6DK5rmoelqB3Hkqj2ZzqdwnUt0gP6vXMBu%2BNuWO3WjJteMhPFxd0qGUTAEiU7%2B9TAJ9o1yuqxKjqss5LfMh3KeRqWwl60vrgazQDrhIbKkx0P9LovopLZ%2BYZx0dJfJP%2BYEgsvOTB26DCJA%2B2ShG98Ktk1uqCUEhAWaPppWlKx9DagZFuyk2YZvMpbhvwo8X2WMwmpQwI%2F0aop2XJMblTYSzxd7xs63S1BLr5RJOqOWH5%2B5ID43oWs1aTNp1uwT4Sa89lFW%2Buf4dFpzxjrJm2KW6S9DJprxA7XD0yKZ7k9OTb0XpQz6F5VlplpGos%2F1BLsF1NzzMzYnBs0alwdAvrkxLa5blbtsk0OUJI7qeofnkOInkSU1%2F1MZIOO4k7x%2FMXZFBrR3Ul335eg8UH3mi4kVhEN8sagKrAkUu1nDC6UpDyW0UhPU1erGCpmYyU2jOwh%2BOnWzAgiJ9AICqdJoXU07LE1BqocCtABUrXuxGLd2wqZaRrtlb1ksu1xhUw9%2BKQ6Xk%2BdJiITWyRkEV3167%2FgUSEftuDA0Pf%2Bm%2BIvGMubnDHyt9Z272s6GzJIXdn1hDBZxHr5%2FtorZUfw7%2FD5Iy4croWd%2Fvt5BkckbD2FfR0v6eZ0vMMLdlr8GOqUBamhSDzC4P7Y2FT00X8bCse7f%2F2uFdm4mbSQCm9qBMUjWJLg4rLKVqdyHvfOpZC%2B%2Bkc2Uf%2FkDHLBawm8BApPM%2BHTzdCU%2BbOh3fNf6Qjqxrv6YNdtnM37iNsw30Xwpyhlz2Cfr1mQiHEuZ%2BmxxperPFA4K%2FVcti7iDRK0K4uYmiEeDEvLD9qRDWC7XKCKYWQwrXhweerAIwGG6aRfboffdZQ7wcrzt&X-Amz-Signature=07f25baede571c678d288e7ba9cc81084de8f17131bb31df3b0e7d7322de7841&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCAYJWV%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG6UpxgFqLufnt%2BkagI884be%2BQcFcEQbfgSKF3ITN7yAiEA%2BaPKP0ioYLh2r%2FCvNiL%2BZTFmm84z0J9tF6zW94LSFOQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLT4O75oJbgKafYPXSrcA0xccnltY%2FTqIu6DK5rmoelqB3Hkqj2ZzqdwnUt0gP6vXMBu%2BNuWO3WjJteMhPFxd0qGUTAEiU7%2B9TAJ9o1yuqxKjqss5LfMh3KeRqWwl60vrgazQDrhIbKkx0P9LovopLZ%2BYZx0dJfJP%2BYEgsvOTB26DCJA%2B2ShG98Ktk1uqCUEhAWaPppWlKx9DagZFuyk2YZvMpbhvwo8X2WMwmpQwI%2F0aop2XJMblTYSzxd7xs63S1BLr5RJOqOWH5%2B5ID43oWs1aTNp1uwT4Sa89lFW%2Buf4dFpzxjrJm2KW6S9DJprxA7XD0yKZ7k9OTb0XpQz6F5VlplpGos%2F1BLsF1NzzMzYnBs0alwdAvrkxLa5blbtsk0OUJI7qeofnkOInkSU1%2F1MZIOO4k7x%2FMXZFBrR3Ul335eg8UH3mi4kVhEN8sagKrAkUu1nDC6UpDyW0UhPU1erGCpmYyU2jOwh%2BOnWzAgiJ9AICqdJoXU07LE1BqocCtABUrXuxGLd2wqZaRrtlb1ksu1xhUw9%2BKQ6Xk%2BdJiITWyRkEV3167%2FgUSEftuDA0Pf%2Bm%2BIvGMubnDHyt9Z272s6GzJIXdn1hDBZxHr5%2FtorZUfw7%2FD5Iy4croWd%2Fvt5BkckbD2FfR0v6eZ0vMMLdlr8GOqUBamhSDzC4P7Y2FT00X8bCse7f%2F2uFdm4mbSQCm9qBMUjWJLg4rLKVqdyHvfOpZC%2B%2Bkc2Uf%2FkDHLBawm8BApPM%2BHTzdCU%2BbOh3fNf6Qjqxrv6YNdtnM37iNsw30Xwpyhlz2Cfr1mQiHEuZ%2BmxxperPFA4K%2FVcti7iDRK0K4uYmiEeDEvLD9qRDWC7XKCKYWQwrXhweerAIwGG6aRfboffdZQ7wcrzt&X-Amz-Signature=d6117f82fe53132da645316e4d6a1b03eb2dd8544103b4a4bb5bb4fad0048500&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
