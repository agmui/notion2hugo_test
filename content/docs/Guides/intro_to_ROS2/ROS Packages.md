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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5KSIPJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDdWEgU5GyN8PfNUbp0iI%2B0htV0jkXVYgQ6%2BdIegzgbiAiEAw22IbI4IxjEy4rNjd%2FdZxsHDCUtJ5adbDQ2CaROFaXkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEonC4HUHyjNe7VwsCrcAwaSGpE9VT%2F3CnyJ9LWwBSLMxSMQ84r6oyO6hAw6JXSwzgHrjjcFjJyJoC9giO%2BMlkiUY8%2BadJKnXKVBAhZdow9C2lKOmxWwLVbQ8RCxN%2FzUsMgMyRrEFana6a2nM0yf6wA72dTk4nSqkJU9xzIjs2GkKT%2Bec07CpfNY%2Fku80O7gskJeHpR6Kbxg5mFqu34H8uVWZza0uOf5fSzGkNp98ZHDY3%2Fx9vyPclCp0mQom61ONrGcYJzhaWXHKY1xBLWquCsok2kw1Zvt0dijQrPznlGn3Zoe0CHXxQv5tR0vebWQF6KOQTqqDlmGbt2nNVUsR9GK0%2FWFoMLgxdC2wKIzdR6MZBZexLTQ%2FWBhZHNQ4yBximaBdOG3i8jthO74Q952wa2Up3jYkdmmgTMRZvHN8XtAZ%2FosLRdPhtPhvrgPPV4zmYd3VsN%2B6Cro7JgR%2BLQMFpHiz6mWWvxdbRLK2CKPwZ5ckGWHFVCNn9NYF1DJxTmyAa%2BFIYQwC58fLwd7JVVvsL2KZ4moHn5YJ5iA9Di%2FLrXVZ8pGKxnyhauRq4T%2BQpL9gsEilNctMpeKxtP6zbFEiY%2B0ympAts2SsmFmcMcsIm27OKjZ13vRq8beFyk%2F5itAPvy%2ByW%2BWosRIFgnyMJ%2Fb9r4GOqUB0jty5kE5RtX4WBGZpaFEU1fj1fCGrIOFnAANyp9mVKUWil9BdShsbkTboi%2FzMiLGC0O9tzc7VIOrWyLiDkK2p3KqqBLnjgLS8xMnIXgZWD1w%2Bk%2Fk0yH0dZwos1odT5ipowoF2aR%2BokiIhmK4kwFkS4Stuvc3hERy0Xiz6DihewnzrtyV4cw%2BRskSdyQb7DhffImNdc4am5eP094LgQ9uRFY%2FwNzq&X-Amz-Signature=6dde11b6c76c720af2018fd831bdacbc41857958adc135aac299c0722bb3d37f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5KSIPJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDdWEgU5GyN8PfNUbp0iI%2B0htV0jkXVYgQ6%2BdIegzgbiAiEAw22IbI4IxjEy4rNjd%2FdZxsHDCUtJ5adbDQ2CaROFaXkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEonC4HUHyjNe7VwsCrcAwaSGpE9VT%2F3CnyJ9LWwBSLMxSMQ84r6oyO6hAw6JXSwzgHrjjcFjJyJoC9giO%2BMlkiUY8%2BadJKnXKVBAhZdow9C2lKOmxWwLVbQ8RCxN%2FzUsMgMyRrEFana6a2nM0yf6wA72dTk4nSqkJU9xzIjs2GkKT%2Bec07CpfNY%2Fku80O7gskJeHpR6Kbxg5mFqu34H8uVWZza0uOf5fSzGkNp98ZHDY3%2Fx9vyPclCp0mQom61ONrGcYJzhaWXHKY1xBLWquCsok2kw1Zvt0dijQrPznlGn3Zoe0CHXxQv5tR0vebWQF6KOQTqqDlmGbt2nNVUsR9GK0%2FWFoMLgxdC2wKIzdR6MZBZexLTQ%2FWBhZHNQ4yBximaBdOG3i8jthO74Q952wa2Up3jYkdmmgTMRZvHN8XtAZ%2FosLRdPhtPhvrgPPV4zmYd3VsN%2B6Cro7JgR%2BLQMFpHiz6mWWvxdbRLK2CKPwZ5ckGWHFVCNn9NYF1DJxTmyAa%2BFIYQwC58fLwd7JVVvsL2KZ4moHn5YJ5iA9Di%2FLrXVZ8pGKxnyhauRq4T%2BQpL9gsEilNctMpeKxtP6zbFEiY%2B0ympAts2SsmFmcMcsIm27OKjZ13vRq8beFyk%2F5itAPvy%2ByW%2BWosRIFgnyMJ%2Fb9r4GOqUB0jty5kE5RtX4WBGZpaFEU1fj1fCGrIOFnAANyp9mVKUWil9BdShsbkTboi%2FzMiLGC0O9tzc7VIOrWyLiDkK2p3KqqBLnjgLS8xMnIXgZWD1w%2Bk%2Fk0yH0dZwos1odT5ipowoF2aR%2BokiIhmK4kwFkS4Stuvc3hERy0Xiz6DihewnzrtyV4cw%2BRskSdyQb7DhffImNdc4am5eP094LgQ9uRFY%2FwNzq&X-Amz-Signature=f8232bc06db917f51cdcfdcafd3b13254cc2b1484a8895abcf0d18f30586583c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5KSIPJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDdWEgU5GyN8PfNUbp0iI%2B0htV0jkXVYgQ6%2BdIegzgbiAiEAw22IbI4IxjEy4rNjd%2FdZxsHDCUtJ5adbDQ2CaROFaXkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEonC4HUHyjNe7VwsCrcAwaSGpE9VT%2F3CnyJ9LWwBSLMxSMQ84r6oyO6hAw6JXSwzgHrjjcFjJyJoC9giO%2BMlkiUY8%2BadJKnXKVBAhZdow9C2lKOmxWwLVbQ8RCxN%2FzUsMgMyRrEFana6a2nM0yf6wA72dTk4nSqkJU9xzIjs2GkKT%2Bec07CpfNY%2Fku80O7gskJeHpR6Kbxg5mFqu34H8uVWZza0uOf5fSzGkNp98ZHDY3%2Fx9vyPclCp0mQom61ONrGcYJzhaWXHKY1xBLWquCsok2kw1Zvt0dijQrPznlGn3Zoe0CHXxQv5tR0vebWQF6KOQTqqDlmGbt2nNVUsR9GK0%2FWFoMLgxdC2wKIzdR6MZBZexLTQ%2FWBhZHNQ4yBximaBdOG3i8jthO74Q952wa2Up3jYkdmmgTMRZvHN8XtAZ%2FosLRdPhtPhvrgPPV4zmYd3VsN%2B6Cro7JgR%2BLQMFpHiz6mWWvxdbRLK2CKPwZ5ckGWHFVCNn9NYF1DJxTmyAa%2BFIYQwC58fLwd7JVVvsL2KZ4moHn5YJ5iA9Di%2FLrXVZ8pGKxnyhauRq4T%2BQpL9gsEilNctMpeKxtP6zbFEiY%2B0ympAts2SsmFmcMcsIm27OKjZ13vRq8beFyk%2F5itAPvy%2ByW%2BWosRIFgnyMJ%2Fb9r4GOqUB0jty5kE5RtX4WBGZpaFEU1fj1fCGrIOFnAANyp9mVKUWil9BdShsbkTboi%2FzMiLGC0O9tzc7VIOrWyLiDkK2p3KqqBLnjgLS8xMnIXgZWD1w%2Bk%2Fk0yH0dZwos1odT5ipowoF2aR%2BokiIhmK4kwFkS4Stuvc3hERy0Xiz6DihewnzrtyV4cw%2BRskSdyQb7DhffImNdc4am5eP094LgQ9uRFY%2FwNzq&X-Amz-Signature=5edd939d269c48f427f68b9096b27a4018dc59a8b505b303ce4ef3de2478838d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5KSIPJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDdWEgU5GyN8PfNUbp0iI%2B0htV0jkXVYgQ6%2BdIegzgbiAiEAw22IbI4IxjEy4rNjd%2FdZxsHDCUtJ5adbDQ2CaROFaXkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEonC4HUHyjNe7VwsCrcAwaSGpE9VT%2F3CnyJ9LWwBSLMxSMQ84r6oyO6hAw6JXSwzgHrjjcFjJyJoC9giO%2BMlkiUY8%2BadJKnXKVBAhZdow9C2lKOmxWwLVbQ8RCxN%2FzUsMgMyRrEFana6a2nM0yf6wA72dTk4nSqkJU9xzIjs2GkKT%2Bec07CpfNY%2Fku80O7gskJeHpR6Kbxg5mFqu34H8uVWZza0uOf5fSzGkNp98ZHDY3%2Fx9vyPclCp0mQom61ONrGcYJzhaWXHKY1xBLWquCsok2kw1Zvt0dijQrPznlGn3Zoe0CHXxQv5tR0vebWQF6KOQTqqDlmGbt2nNVUsR9GK0%2FWFoMLgxdC2wKIzdR6MZBZexLTQ%2FWBhZHNQ4yBximaBdOG3i8jthO74Q952wa2Up3jYkdmmgTMRZvHN8XtAZ%2FosLRdPhtPhvrgPPV4zmYd3VsN%2B6Cro7JgR%2BLQMFpHiz6mWWvxdbRLK2CKPwZ5ckGWHFVCNn9NYF1DJxTmyAa%2BFIYQwC58fLwd7JVVvsL2KZ4moHn5YJ5iA9Di%2FLrXVZ8pGKxnyhauRq4T%2BQpL9gsEilNctMpeKxtP6zbFEiY%2B0ympAts2SsmFmcMcsIm27OKjZ13vRq8beFyk%2F5itAPvy%2ByW%2BWosRIFgnyMJ%2Fb9r4GOqUB0jty5kE5RtX4WBGZpaFEU1fj1fCGrIOFnAANyp9mVKUWil9BdShsbkTboi%2FzMiLGC0O9tzc7VIOrWyLiDkK2p3KqqBLnjgLS8xMnIXgZWD1w%2Bk%2Fk0yH0dZwos1odT5ipowoF2aR%2BokiIhmK4kwFkS4Stuvc3hERy0Xiz6DihewnzrtyV4cw%2BRskSdyQb7DhffImNdc4am5eP094LgQ9uRFY%2FwNzq&X-Amz-Signature=0eac112ed10ae7559a2ac8df879c7178d5ccd4a8200f9f78d5e862e580b71749&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5KSIPJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDdWEgU5GyN8PfNUbp0iI%2B0htV0jkXVYgQ6%2BdIegzgbiAiEAw22IbI4IxjEy4rNjd%2FdZxsHDCUtJ5adbDQ2CaROFaXkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEonC4HUHyjNe7VwsCrcAwaSGpE9VT%2F3CnyJ9LWwBSLMxSMQ84r6oyO6hAw6JXSwzgHrjjcFjJyJoC9giO%2BMlkiUY8%2BadJKnXKVBAhZdow9C2lKOmxWwLVbQ8RCxN%2FzUsMgMyRrEFana6a2nM0yf6wA72dTk4nSqkJU9xzIjs2GkKT%2Bec07CpfNY%2Fku80O7gskJeHpR6Kbxg5mFqu34H8uVWZza0uOf5fSzGkNp98ZHDY3%2Fx9vyPclCp0mQom61ONrGcYJzhaWXHKY1xBLWquCsok2kw1Zvt0dijQrPznlGn3Zoe0CHXxQv5tR0vebWQF6KOQTqqDlmGbt2nNVUsR9GK0%2FWFoMLgxdC2wKIzdR6MZBZexLTQ%2FWBhZHNQ4yBximaBdOG3i8jthO74Q952wa2Up3jYkdmmgTMRZvHN8XtAZ%2FosLRdPhtPhvrgPPV4zmYd3VsN%2B6Cro7JgR%2BLQMFpHiz6mWWvxdbRLK2CKPwZ5ckGWHFVCNn9NYF1DJxTmyAa%2BFIYQwC58fLwd7JVVvsL2KZ4moHn5YJ5iA9Di%2FLrXVZ8pGKxnyhauRq4T%2BQpL9gsEilNctMpeKxtP6zbFEiY%2B0ympAts2SsmFmcMcsIm27OKjZ13vRq8beFyk%2F5itAPvy%2ByW%2BWosRIFgnyMJ%2Fb9r4GOqUB0jty5kE5RtX4WBGZpaFEU1fj1fCGrIOFnAANyp9mVKUWil9BdShsbkTboi%2FzMiLGC0O9tzc7VIOrWyLiDkK2p3KqqBLnjgLS8xMnIXgZWD1w%2Bk%2Fk0yH0dZwos1odT5ipowoF2aR%2BokiIhmK4kwFkS4Stuvc3hERy0Xiz6DihewnzrtyV4cw%2BRskSdyQb7DhffImNdc4am5eP094LgQ9uRFY%2FwNzq&X-Amz-Signature=585c5930f1e0e7944db634e9b4cc681b870a40570d0ec3b36231c07d15574208&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5KSIPJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDdWEgU5GyN8PfNUbp0iI%2B0htV0jkXVYgQ6%2BdIegzgbiAiEAw22IbI4IxjEy4rNjd%2FdZxsHDCUtJ5adbDQ2CaROFaXkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEonC4HUHyjNe7VwsCrcAwaSGpE9VT%2F3CnyJ9LWwBSLMxSMQ84r6oyO6hAw6JXSwzgHrjjcFjJyJoC9giO%2BMlkiUY8%2BadJKnXKVBAhZdow9C2lKOmxWwLVbQ8RCxN%2FzUsMgMyRrEFana6a2nM0yf6wA72dTk4nSqkJU9xzIjs2GkKT%2Bec07CpfNY%2Fku80O7gskJeHpR6Kbxg5mFqu34H8uVWZza0uOf5fSzGkNp98ZHDY3%2Fx9vyPclCp0mQom61ONrGcYJzhaWXHKY1xBLWquCsok2kw1Zvt0dijQrPznlGn3Zoe0CHXxQv5tR0vebWQF6KOQTqqDlmGbt2nNVUsR9GK0%2FWFoMLgxdC2wKIzdR6MZBZexLTQ%2FWBhZHNQ4yBximaBdOG3i8jthO74Q952wa2Up3jYkdmmgTMRZvHN8XtAZ%2FosLRdPhtPhvrgPPV4zmYd3VsN%2B6Cro7JgR%2BLQMFpHiz6mWWvxdbRLK2CKPwZ5ckGWHFVCNn9NYF1DJxTmyAa%2BFIYQwC58fLwd7JVVvsL2KZ4moHn5YJ5iA9Di%2FLrXVZ8pGKxnyhauRq4T%2BQpL9gsEilNctMpeKxtP6zbFEiY%2B0ympAts2SsmFmcMcsIm27OKjZ13vRq8beFyk%2F5itAPvy%2ByW%2BWosRIFgnyMJ%2Fb9r4GOqUB0jty5kE5RtX4WBGZpaFEU1fj1fCGrIOFnAANyp9mVKUWil9BdShsbkTboi%2FzMiLGC0O9tzc7VIOrWyLiDkK2p3KqqBLnjgLS8xMnIXgZWD1w%2Bk%2Fk0yH0dZwos1odT5ipowoF2aR%2BokiIhmK4kwFkS4Stuvc3hERy0Xiz6DihewnzrtyV4cw%2BRskSdyQb7DhffImNdc4am5eP094LgQ9uRFY%2FwNzq&X-Amz-Signature=9a1a81f72ce33ff9665215a3bc8176c47d7343d5c69db7b0a0e627e432206adb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5KSIPJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDdWEgU5GyN8PfNUbp0iI%2B0htV0jkXVYgQ6%2BdIegzgbiAiEAw22IbI4IxjEy4rNjd%2FdZxsHDCUtJ5adbDQ2CaROFaXkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEonC4HUHyjNe7VwsCrcAwaSGpE9VT%2F3CnyJ9LWwBSLMxSMQ84r6oyO6hAw6JXSwzgHrjjcFjJyJoC9giO%2BMlkiUY8%2BadJKnXKVBAhZdow9C2lKOmxWwLVbQ8RCxN%2FzUsMgMyRrEFana6a2nM0yf6wA72dTk4nSqkJU9xzIjs2GkKT%2Bec07CpfNY%2Fku80O7gskJeHpR6Kbxg5mFqu34H8uVWZza0uOf5fSzGkNp98ZHDY3%2Fx9vyPclCp0mQom61ONrGcYJzhaWXHKY1xBLWquCsok2kw1Zvt0dijQrPznlGn3Zoe0CHXxQv5tR0vebWQF6KOQTqqDlmGbt2nNVUsR9GK0%2FWFoMLgxdC2wKIzdR6MZBZexLTQ%2FWBhZHNQ4yBximaBdOG3i8jthO74Q952wa2Up3jYkdmmgTMRZvHN8XtAZ%2FosLRdPhtPhvrgPPV4zmYd3VsN%2B6Cro7JgR%2BLQMFpHiz6mWWvxdbRLK2CKPwZ5ckGWHFVCNn9NYF1DJxTmyAa%2BFIYQwC58fLwd7JVVvsL2KZ4moHn5YJ5iA9Di%2FLrXVZ8pGKxnyhauRq4T%2BQpL9gsEilNctMpeKxtP6zbFEiY%2B0ympAts2SsmFmcMcsIm27OKjZ13vRq8beFyk%2F5itAPvy%2ByW%2BWosRIFgnyMJ%2Fb9r4GOqUB0jty5kE5RtX4WBGZpaFEU1fj1fCGrIOFnAANyp9mVKUWil9BdShsbkTboi%2FzMiLGC0O9tzc7VIOrWyLiDkK2p3KqqBLnjgLS8xMnIXgZWD1w%2Bk%2Fk0yH0dZwos1odT5ipowoF2aR%2BokiIhmK4kwFkS4Stuvc3hERy0Xiz6DihewnzrtyV4cw%2BRskSdyQb7DhffImNdc4am5eP094LgQ9uRFY%2FwNzq&X-Amz-Signature=4f7889131738ec42d7d85ce174c6a31c6a7da20ffadee2d83b1db62beb1a3514&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
