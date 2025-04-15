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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTJ7ITD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBAg8Wm3MlRYogpDqkr3lAtjaIFnHBO%2BwW4syWfpawAIhAMKP0ydeKzNmHrvIPHCtbVOTl4LLGJ1%2Fl4iHF2pvwiHzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzZ9Zfh5%2BwRQTeTeWkq3AOYz8%2FYFAvvwHpxsaY7xM42JVaBViVXlusGjVxS9ODzWLtWQhaAe4eNdzqJZWF6l6LTTWEHaprl30Y5tNqzCiBHLidjgSBYijAG8eYNdrU%2BxOub%2FsoFgXQilNQEfwwbMeOqejIMkDQvYOMiL5RiEDPEi9MiCoZbGM9wuVm8rP3gVJ6nNofygujvLqj1MoghmIIomvFIwl6%2FyAhj4DhXKKj%2BGHsyY3jyV4PtFwoHicLMo7AqSCjfUafqjDkazrJhKlcyGH7CgtjlQcOOwM1z39JolaKtnMsPpK%2FDMO18ik3DNN9SBCSufgGUzjif9psvhgRUpsia4IeHe6teiVj8wOYQC9kTsrua65tITrhtiJMCrLo8H8unvcpTa2D4ENQ%2BdGsAyQGCA0ccbUiV6ljPqj5DL%2BB8t1f9gjAegr4fSs5QAdPYsCkeor2%2BpD1in%2FYBL%2BnQJdrKqWHxCh6LwfllQqBFhEM%2FlEhRfqPJCIQWosYqUjVoFw38t%2BbmBuGHSui0UZFGshbgLa27puBAjQaMMG9cCRDWpZ3yTA82vIFiHhqE69YE6J3XF9XuDm5H9Y1TRTnocdf%2FYmS%2F%2FsehB9WlkaghrUUJCYqgtvlLhdGtwCetePe%2FNzNsEajKr2T86zCz6fe%2FBjqkAfw5MYv7bqr1aAqfNkytt%2FkY2fK1V81pmnuD1qbbMDJEVWE9ZWIugXSENJCoV3CXnTOc%2BD5a60A%2FCov4tVjSJqCxxpEmDWY7WZlEs8fwU9FvIRJa8UplKe8cz2GD7YTWJhNrz714QYnXytHpsvSeoQxHvpyJIp%2Bkfzi3MLPQeUWegW39yQoSkEOmuJKd5YqqizKCo33TY69R1UNPkDPiBdp48R1q&X-Amz-Signature=e4a87967972a54351c6f60ad837fb22ba7bec3abe45ab568b7a8f8a4facb1975&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTJ7ITD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBAg8Wm3MlRYogpDqkr3lAtjaIFnHBO%2BwW4syWfpawAIhAMKP0ydeKzNmHrvIPHCtbVOTl4LLGJ1%2Fl4iHF2pvwiHzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzZ9Zfh5%2BwRQTeTeWkq3AOYz8%2FYFAvvwHpxsaY7xM42JVaBViVXlusGjVxS9ODzWLtWQhaAe4eNdzqJZWF6l6LTTWEHaprl30Y5tNqzCiBHLidjgSBYijAG8eYNdrU%2BxOub%2FsoFgXQilNQEfwwbMeOqejIMkDQvYOMiL5RiEDPEi9MiCoZbGM9wuVm8rP3gVJ6nNofygujvLqj1MoghmIIomvFIwl6%2FyAhj4DhXKKj%2BGHsyY3jyV4PtFwoHicLMo7AqSCjfUafqjDkazrJhKlcyGH7CgtjlQcOOwM1z39JolaKtnMsPpK%2FDMO18ik3DNN9SBCSufgGUzjif9psvhgRUpsia4IeHe6teiVj8wOYQC9kTsrua65tITrhtiJMCrLo8H8unvcpTa2D4ENQ%2BdGsAyQGCA0ccbUiV6ljPqj5DL%2BB8t1f9gjAegr4fSs5QAdPYsCkeor2%2BpD1in%2FYBL%2BnQJdrKqWHxCh6LwfllQqBFhEM%2FlEhRfqPJCIQWosYqUjVoFw38t%2BbmBuGHSui0UZFGshbgLa27puBAjQaMMG9cCRDWpZ3yTA82vIFiHhqE69YE6J3XF9XuDm5H9Y1TRTnocdf%2FYmS%2F%2FsehB9WlkaghrUUJCYqgtvlLhdGtwCetePe%2FNzNsEajKr2T86zCz6fe%2FBjqkAfw5MYv7bqr1aAqfNkytt%2FkY2fK1V81pmnuD1qbbMDJEVWE9ZWIugXSENJCoV3CXnTOc%2BD5a60A%2FCov4tVjSJqCxxpEmDWY7WZlEs8fwU9FvIRJa8UplKe8cz2GD7YTWJhNrz714QYnXytHpsvSeoQxHvpyJIp%2Bkfzi3MLPQeUWegW39yQoSkEOmuJKd5YqqizKCo33TY69R1UNPkDPiBdp48R1q&X-Amz-Signature=6589013e44a5a50a134e5e07e0691e360afdaf6e50e10fcbc7a40f2ba2a5eb50&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTJ7ITD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBAg8Wm3MlRYogpDqkr3lAtjaIFnHBO%2BwW4syWfpawAIhAMKP0ydeKzNmHrvIPHCtbVOTl4LLGJ1%2Fl4iHF2pvwiHzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzZ9Zfh5%2BwRQTeTeWkq3AOYz8%2FYFAvvwHpxsaY7xM42JVaBViVXlusGjVxS9ODzWLtWQhaAe4eNdzqJZWF6l6LTTWEHaprl30Y5tNqzCiBHLidjgSBYijAG8eYNdrU%2BxOub%2FsoFgXQilNQEfwwbMeOqejIMkDQvYOMiL5RiEDPEi9MiCoZbGM9wuVm8rP3gVJ6nNofygujvLqj1MoghmIIomvFIwl6%2FyAhj4DhXKKj%2BGHsyY3jyV4PtFwoHicLMo7AqSCjfUafqjDkazrJhKlcyGH7CgtjlQcOOwM1z39JolaKtnMsPpK%2FDMO18ik3DNN9SBCSufgGUzjif9psvhgRUpsia4IeHe6teiVj8wOYQC9kTsrua65tITrhtiJMCrLo8H8unvcpTa2D4ENQ%2BdGsAyQGCA0ccbUiV6ljPqj5DL%2BB8t1f9gjAegr4fSs5QAdPYsCkeor2%2BpD1in%2FYBL%2BnQJdrKqWHxCh6LwfllQqBFhEM%2FlEhRfqPJCIQWosYqUjVoFw38t%2BbmBuGHSui0UZFGshbgLa27puBAjQaMMG9cCRDWpZ3yTA82vIFiHhqE69YE6J3XF9XuDm5H9Y1TRTnocdf%2FYmS%2F%2FsehB9WlkaghrUUJCYqgtvlLhdGtwCetePe%2FNzNsEajKr2T86zCz6fe%2FBjqkAfw5MYv7bqr1aAqfNkytt%2FkY2fK1V81pmnuD1qbbMDJEVWE9ZWIugXSENJCoV3CXnTOc%2BD5a60A%2FCov4tVjSJqCxxpEmDWY7WZlEs8fwU9FvIRJa8UplKe8cz2GD7YTWJhNrz714QYnXytHpsvSeoQxHvpyJIp%2Bkfzi3MLPQeUWegW39yQoSkEOmuJKd5YqqizKCo33TY69R1UNPkDPiBdp48R1q&X-Amz-Signature=160afd060f2c3290caef96690bb2e024ef97c0f807a15f75a387a39e74188a96&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTJ7ITD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBAg8Wm3MlRYogpDqkr3lAtjaIFnHBO%2BwW4syWfpawAIhAMKP0ydeKzNmHrvIPHCtbVOTl4LLGJ1%2Fl4iHF2pvwiHzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzZ9Zfh5%2BwRQTeTeWkq3AOYz8%2FYFAvvwHpxsaY7xM42JVaBViVXlusGjVxS9ODzWLtWQhaAe4eNdzqJZWF6l6LTTWEHaprl30Y5tNqzCiBHLidjgSBYijAG8eYNdrU%2BxOub%2FsoFgXQilNQEfwwbMeOqejIMkDQvYOMiL5RiEDPEi9MiCoZbGM9wuVm8rP3gVJ6nNofygujvLqj1MoghmIIomvFIwl6%2FyAhj4DhXKKj%2BGHsyY3jyV4PtFwoHicLMo7AqSCjfUafqjDkazrJhKlcyGH7CgtjlQcOOwM1z39JolaKtnMsPpK%2FDMO18ik3DNN9SBCSufgGUzjif9psvhgRUpsia4IeHe6teiVj8wOYQC9kTsrua65tITrhtiJMCrLo8H8unvcpTa2D4ENQ%2BdGsAyQGCA0ccbUiV6ljPqj5DL%2BB8t1f9gjAegr4fSs5QAdPYsCkeor2%2BpD1in%2FYBL%2BnQJdrKqWHxCh6LwfllQqBFhEM%2FlEhRfqPJCIQWosYqUjVoFw38t%2BbmBuGHSui0UZFGshbgLa27puBAjQaMMG9cCRDWpZ3yTA82vIFiHhqE69YE6J3XF9XuDm5H9Y1TRTnocdf%2FYmS%2F%2FsehB9WlkaghrUUJCYqgtvlLhdGtwCetePe%2FNzNsEajKr2T86zCz6fe%2FBjqkAfw5MYv7bqr1aAqfNkytt%2FkY2fK1V81pmnuD1qbbMDJEVWE9ZWIugXSENJCoV3CXnTOc%2BD5a60A%2FCov4tVjSJqCxxpEmDWY7WZlEs8fwU9FvIRJa8UplKe8cz2GD7YTWJhNrz714QYnXytHpsvSeoQxHvpyJIp%2Bkfzi3MLPQeUWegW39yQoSkEOmuJKd5YqqizKCo33TY69R1UNPkDPiBdp48R1q&X-Amz-Signature=54dfdf185b2fe6fad8ff4596c186e4278d1bf15cd9dc24a617dc084299525812&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTJ7ITD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBAg8Wm3MlRYogpDqkr3lAtjaIFnHBO%2BwW4syWfpawAIhAMKP0ydeKzNmHrvIPHCtbVOTl4LLGJ1%2Fl4iHF2pvwiHzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzZ9Zfh5%2BwRQTeTeWkq3AOYz8%2FYFAvvwHpxsaY7xM42JVaBViVXlusGjVxS9ODzWLtWQhaAe4eNdzqJZWF6l6LTTWEHaprl30Y5tNqzCiBHLidjgSBYijAG8eYNdrU%2BxOub%2FsoFgXQilNQEfwwbMeOqejIMkDQvYOMiL5RiEDPEi9MiCoZbGM9wuVm8rP3gVJ6nNofygujvLqj1MoghmIIomvFIwl6%2FyAhj4DhXKKj%2BGHsyY3jyV4PtFwoHicLMo7AqSCjfUafqjDkazrJhKlcyGH7CgtjlQcOOwM1z39JolaKtnMsPpK%2FDMO18ik3DNN9SBCSufgGUzjif9psvhgRUpsia4IeHe6teiVj8wOYQC9kTsrua65tITrhtiJMCrLo8H8unvcpTa2D4ENQ%2BdGsAyQGCA0ccbUiV6ljPqj5DL%2BB8t1f9gjAegr4fSs5QAdPYsCkeor2%2BpD1in%2FYBL%2BnQJdrKqWHxCh6LwfllQqBFhEM%2FlEhRfqPJCIQWosYqUjVoFw38t%2BbmBuGHSui0UZFGshbgLa27puBAjQaMMG9cCRDWpZ3yTA82vIFiHhqE69YE6J3XF9XuDm5H9Y1TRTnocdf%2FYmS%2F%2FsehB9WlkaghrUUJCYqgtvlLhdGtwCetePe%2FNzNsEajKr2T86zCz6fe%2FBjqkAfw5MYv7bqr1aAqfNkytt%2FkY2fK1V81pmnuD1qbbMDJEVWE9ZWIugXSENJCoV3CXnTOc%2BD5a60A%2FCov4tVjSJqCxxpEmDWY7WZlEs8fwU9FvIRJa8UplKe8cz2GD7YTWJhNrz714QYnXytHpsvSeoQxHvpyJIp%2Bkfzi3MLPQeUWegW39yQoSkEOmuJKd5YqqizKCo33TY69R1UNPkDPiBdp48R1q&X-Amz-Signature=a154273be5f614eb369f811fd8c38cb17bcd168757b22406e991cf8663c61a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTJ7ITD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBAg8Wm3MlRYogpDqkr3lAtjaIFnHBO%2BwW4syWfpawAIhAMKP0ydeKzNmHrvIPHCtbVOTl4LLGJ1%2Fl4iHF2pvwiHzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzZ9Zfh5%2BwRQTeTeWkq3AOYz8%2FYFAvvwHpxsaY7xM42JVaBViVXlusGjVxS9ODzWLtWQhaAe4eNdzqJZWF6l6LTTWEHaprl30Y5tNqzCiBHLidjgSBYijAG8eYNdrU%2BxOub%2FsoFgXQilNQEfwwbMeOqejIMkDQvYOMiL5RiEDPEi9MiCoZbGM9wuVm8rP3gVJ6nNofygujvLqj1MoghmIIomvFIwl6%2FyAhj4DhXKKj%2BGHsyY3jyV4PtFwoHicLMo7AqSCjfUafqjDkazrJhKlcyGH7CgtjlQcOOwM1z39JolaKtnMsPpK%2FDMO18ik3DNN9SBCSufgGUzjif9psvhgRUpsia4IeHe6teiVj8wOYQC9kTsrua65tITrhtiJMCrLo8H8unvcpTa2D4ENQ%2BdGsAyQGCA0ccbUiV6ljPqj5DL%2BB8t1f9gjAegr4fSs5QAdPYsCkeor2%2BpD1in%2FYBL%2BnQJdrKqWHxCh6LwfllQqBFhEM%2FlEhRfqPJCIQWosYqUjVoFw38t%2BbmBuGHSui0UZFGshbgLa27puBAjQaMMG9cCRDWpZ3yTA82vIFiHhqE69YE6J3XF9XuDm5H9Y1TRTnocdf%2FYmS%2F%2FsehB9WlkaghrUUJCYqgtvlLhdGtwCetePe%2FNzNsEajKr2T86zCz6fe%2FBjqkAfw5MYv7bqr1aAqfNkytt%2FkY2fK1V81pmnuD1qbbMDJEVWE9ZWIugXSENJCoV3CXnTOc%2BD5a60A%2FCov4tVjSJqCxxpEmDWY7WZlEs8fwU9FvIRJa8UplKe8cz2GD7YTWJhNrz714QYnXytHpsvSeoQxHvpyJIp%2Bkfzi3MLPQeUWegW39yQoSkEOmuJKd5YqqizKCo33TY69R1UNPkDPiBdp48R1q&X-Amz-Signature=21d16b2bb7489781d6159fc2959f0d2e7a7e3a76e0f234db23b79cf41bc9c4c0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTJ7ITD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBAg8Wm3MlRYogpDqkr3lAtjaIFnHBO%2BwW4syWfpawAIhAMKP0ydeKzNmHrvIPHCtbVOTl4LLGJ1%2Fl4iHF2pvwiHzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzZ9Zfh5%2BwRQTeTeWkq3AOYz8%2FYFAvvwHpxsaY7xM42JVaBViVXlusGjVxS9ODzWLtWQhaAe4eNdzqJZWF6l6LTTWEHaprl30Y5tNqzCiBHLidjgSBYijAG8eYNdrU%2BxOub%2FsoFgXQilNQEfwwbMeOqejIMkDQvYOMiL5RiEDPEi9MiCoZbGM9wuVm8rP3gVJ6nNofygujvLqj1MoghmIIomvFIwl6%2FyAhj4DhXKKj%2BGHsyY3jyV4PtFwoHicLMo7AqSCjfUafqjDkazrJhKlcyGH7CgtjlQcOOwM1z39JolaKtnMsPpK%2FDMO18ik3DNN9SBCSufgGUzjif9psvhgRUpsia4IeHe6teiVj8wOYQC9kTsrua65tITrhtiJMCrLo8H8unvcpTa2D4ENQ%2BdGsAyQGCA0ccbUiV6ljPqj5DL%2BB8t1f9gjAegr4fSs5QAdPYsCkeor2%2BpD1in%2FYBL%2BnQJdrKqWHxCh6LwfllQqBFhEM%2FlEhRfqPJCIQWosYqUjVoFw38t%2BbmBuGHSui0UZFGshbgLa27puBAjQaMMG9cCRDWpZ3yTA82vIFiHhqE69YE6J3XF9XuDm5H9Y1TRTnocdf%2FYmS%2F%2FsehB9WlkaghrUUJCYqgtvlLhdGtwCetePe%2FNzNsEajKr2T86zCz6fe%2FBjqkAfw5MYv7bqr1aAqfNkytt%2FkY2fK1V81pmnuD1qbbMDJEVWE9ZWIugXSENJCoV3CXnTOc%2BD5a60A%2FCov4tVjSJqCxxpEmDWY7WZlEs8fwU9FvIRJa8UplKe8cz2GD7YTWJhNrz714QYnXytHpsvSeoQxHvpyJIp%2Bkfzi3MLPQeUWegW39yQoSkEOmuJKd5YqqizKCo33TY69R1UNPkDPiBdp48R1q&X-Amz-Signature=170769b3cbf8fe6eb88b470d15aaab0646a77ab276d16f786cd405e7bb3ee8bf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
