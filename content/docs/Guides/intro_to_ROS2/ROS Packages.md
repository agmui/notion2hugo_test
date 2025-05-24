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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFBZ6IA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDHSy0thY0IlDC3pA7VLrg9h%2BJF%2FkAuPdTK304Vo1ozUgIgIezChwQP4MEaeqBJNzYCY6Eq9lxboMbEo2HanKxJFpEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJH6MuFe2QqJW%2B71MircA6QcSp3uZCzThhfP%2Fxce7UAn3YE0UsB76AOBlEz2EbvVXC%2BYGXU5wTkXHG0Duk8ueUR6rzQ5RwyJa%2Fi%2FtOVenhM53KkBP81pQQte8D1LFGm3UXLj3i9Fj56m%2FKbmN0Fw1O%2ByX048LFvMDV2dXVKXl%2Bhm01SVH5aUl6xGn9K6s9xbIkmfNeIxkHeyc3RZaxtuQ%2FOALAuf3BSgHJriHsW%2BUnT%2BzIoavT9tLbqAgh5PSDH8yrMYGNXnyEvsqk%2FiFIkeu4yTuyM8c24%2BceiOMfDAaxPZRIyowTKwOHq5vA1Soy%2BeKBKdauEp8SInjTzRiZMYewa98qGFufOAh40KAuy82j7Te0kjXAvGuVGgeRnAsqeIPNe3sM6MyzPhvoxC68nOXzd1h0DYNp1oVADR2cppY0rWSYgn3BleyXm53l%2FxRZG%2F1fS7NFBGCA%2BKoZo4S8i3tw7DozLx1Byb4sNLFQFUZf96xs99%2FnehgvBL5oiJK4z7njQgj5k16HSl8NqEVk1eDeFNiphkumaKOIkEi0%2BE%2F2eknBv44CPtB%2BdPDkymWkAHM3pm%2FXevVqMeO6wXwuiQnE%2Bz0RES4%2B9SCFgcrk34T%2FR4ORsLJRT8w%2BHlZ5j16W0XkgY1Rv7UEeBn9e3lMOqVyMEGOqUB%2BS07IN4FRo%2FgzOQaSVoTZhr4W2pK%2B9HDRGT7rOqlvRSNcXtACFoQgPgGOr%2Bl6y5cz3jB1wQShJEkfERZbsDXA3R2xZONCdzFPS3%2FsputZ3nj0KZEbc1aCegVVRqH9B7z3MCTzMsbzCuZwW9Fma3r0q9%2BCDP6ys257zQjUiieZ9oIZJSwOgCwfEv9B6vZbX1RuDp1YWgXGQcCqP9%2FNkk6lqreUGti&X-Amz-Signature=761337769f2df0fc17cecadca406707ac14f37c1278c8e481f34a0cc551fc5b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFBZ6IA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDHSy0thY0IlDC3pA7VLrg9h%2BJF%2FkAuPdTK304Vo1ozUgIgIezChwQP4MEaeqBJNzYCY6Eq9lxboMbEo2HanKxJFpEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJH6MuFe2QqJW%2B71MircA6QcSp3uZCzThhfP%2Fxce7UAn3YE0UsB76AOBlEz2EbvVXC%2BYGXU5wTkXHG0Duk8ueUR6rzQ5RwyJa%2Fi%2FtOVenhM53KkBP81pQQte8D1LFGm3UXLj3i9Fj56m%2FKbmN0Fw1O%2ByX048LFvMDV2dXVKXl%2Bhm01SVH5aUl6xGn9K6s9xbIkmfNeIxkHeyc3RZaxtuQ%2FOALAuf3BSgHJriHsW%2BUnT%2BzIoavT9tLbqAgh5PSDH8yrMYGNXnyEvsqk%2FiFIkeu4yTuyM8c24%2BceiOMfDAaxPZRIyowTKwOHq5vA1Soy%2BeKBKdauEp8SInjTzRiZMYewa98qGFufOAh40KAuy82j7Te0kjXAvGuVGgeRnAsqeIPNe3sM6MyzPhvoxC68nOXzd1h0DYNp1oVADR2cppY0rWSYgn3BleyXm53l%2FxRZG%2F1fS7NFBGCA%2BKoZo4S8i3tw7DozLx1Byb4sNLFQFUZf96xs99%2FnehgvBL5oiJK4z7njQgj5k16HSl8NqEVk1eDeFNiphkumaKOIkEi0%2BE%2F2eknBv44CPtB%2BdPDkymWkAHM3pm%2FXevVqMeO6wXwuiQnE%2Bz0RES4%2B9SCFgcrk34T%2FR4ORsLJRT8w%2BHlZ5j16W0XkgY1Rv7UEeBn9e3lMOqVyMEGOqUB%2BS07IN4FRo%2FgzOQaSVoTZhr4W2pK%2B9HDRGT7rOqlvRSNcXtACFoQgPgGOr%2Bl6y5cz3jB1wQShJEkfERZbsDXA3R2xZONCdzFPS3%2FsputZ3nj0KZEbc1aCegVVRqH9B7z3MCTzMsbzCuZwW9Fma3r0q9%2BCDP6ys257zQjUiieZ9oIZJSwOgCwfEv9B6vZbX1RuDp1YWgXGQcCqP9%2FNkk6lqreUGti&X-Amz-Signature=9b54004c38a925c4ee75d7cf83a9d326ea7c4603c6a6b2bf74732f8eaaa62d92&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFBZ6IA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDHSy0thY0IlDC3pA7VLrg9h%2BJF%2FkAuPdTK304Vo1ozUgIgIezChwQP4MEaeqBJNzYCY6Eq9lxboMbEo2HanKxJFpEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJH6MuFe2QqJW%2B71MircA6QcSp3uZCzThhfP%2Fxce7UAn3YE0UsB76AOBlEz2EbvVXC%2BYGXU5wTkXHG0Duk8ueUR6rzQ5RwyJa%2Fi%2FtOVenhM53KkBP81pQQte8D1LFGm3UXLj3i9Fj56m%2FKbmN0Fw1O%2ByX048LFvMDV2dXVKXl%2Bhm01SVH5aUl6xGn9K6s9xbIkmfNeIxkHeyc3RZaxtuQ%2FOALAuf3BSgHJriHsW%2BUnT%2BzIoavT9tLbqAgh5PSDH8yrMYGNXnyEvsqk%2FiFIkeu4yTuyM8c24%2BceiOMfDAaxPZRIyowTKwOHq5vA1Soy%2BeKBKdauEp8SInjTzRiZMYewa98qGFufOAh40KAuy82j7Te0kjXAvGuVGgeRnAsqeIPNe3sM6MyzPhvoxC68nOXzd1h0DYNp1oVADR2cppY0rWSYgn3BleyXm53l%2FxRZG%2F1fS7NFBGCA%2BKoZo4S8i3tw7DozLx1Byb4sNLFQFUZf96xs99%2FnehgvBL5oiJK4z7njQgj5k16HSl8NqEVk1eDeFNiphkumaKOIkEi0%2BE%2F2eknBv44CPtB%2BdPDkymWkAHM3pm%2FXevVqMeO6wXwuiQnE%2Bz0RES4%2B9SCFgcrk34T%2FR4ORsLJRT8w%2BHlZ5j16W0XkgY1Rv7UEeBn9e3lMOqVyMEGOqUB%2BS07IN4FRo%2FgzOQaSVoTZhr4W2pK%2B9HDRGT7rOqlvRSNcXtACFoQgPgGOr%2Bl6y5cz3jB1wQShJEkfERZbsDXA3R2xZONCdzFPS3%2FsputZ3nj0KZEbc1aCegVVRqH9B7z3MCTzMsbzCuZwW9Fma3r0q9%2BCDP6ys257zQjUiieZ9oIZJSwOgCwfEv9B6vZbX1RuDp1YWgXGQcCqP9%2FNkk6lqreUGti&X-Amz-Signature=0b75103479c196d2f8fa471a363e0ab05aacfb7566efc81b94e37281bde0be3c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFBZ6IA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDHSy0thY0IlDC3pA7VLrg9h%2BJF%2FkAuPdTK304Vo1ozUgIgIezChwQP4MEaeqBJNzYCY6Eq9lxboMbEo2HanKxJFpEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJH6MuFe2QqJW%2B71MircA6QcSp3uZCzThhfP%2Fxce7UAn3YE0UsB76AOBlEz2EbvVXC%2BYGXU5wTkXHG0Duk8ueUR6rzQ5RwyJa%2Fi%2FtOVenhM53KkBP81pQQte8D1LFGm3UXLj3i9Fj56m%2FKbmN0Fw1O%2ByX048LFvMDV2dXVKXl%2Bhm01SVH5aUl6xGn9K6s9xbIkmfNeIxkHeyc3RZaxtuQ%2FOALAuf3BSgHJriHsW%2BUnT%2BzIoavT9tLbqAgh5PSDH8yrMYGNXnyEvsqk%2FiFIkeu4yTuyM8c24%2BceiOMfDAaxPZRIyowTKwOHq5vA1Soy%2BeKBKdauEp8SInjTzRiZMYewa98qGFufOAh40KAuy82j7Te0kjXAvGuVGgeRnAsqeIPNe3sM6MyzPhvoxC68nOXzd1h0DYNp1oVADR2cppY0rWSYgn3BleyXm53l%2FxRZG%2F1fS7NFBGCA%2BKoZo4S8i3tw7DozLx1Byb4sNLFQFUZf96xs99%2FnehgvBL5oiJK4z7njQgj5k16HSl8NqEVk1eDeFNiphkumaKOIkEi0%2BE%2F2eknBv44CPtB%2BdPDkymWkAHM3pm%2FXevVqMeO6wXwuiQnE%2Bz0RES4%2B9SCFgcrk34T%2FR4ORsLJRT8w%2BHlZ5j16W0XkgY1Rv7UEeBn9e3lMOqVyMEGOqUB%2BS07IN4FRo%2FgzOQaSVoTZhr4W2pK%2B9HDRGT7rOqlvRSNcXtACFoQgPgGOr%2Bl6y5cz3jB1wQShJEkfERZbsDXA3R2xZONCdzFPS3%2FsputZ3nj0KZEbc1aCegVVRqH9B7z3MCTzMsbzCuZwW9Fma3r0q9%2BCDP6ys257zQjUiieZ9oIZJSwOgCwfEv9B6vZbX1RuDp1YWgXGQcCqP9%2FNkk6lqreUGti&X-Amz-Signature=8fb3172a3216547003834981719e5ca752917ffdb0402198ff2d6dcba6189fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFBZ6IA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDHSy0thY0IlDC3pA7VLrg9h%2BJF%2FkAuPdTK304Vo1ozUgIgIezChwQP4MEaeqBJNzYCY6Eq9lxboMbEo2HanKxJFpEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJH6MuFe2QqJW%2B71MircA6QcSp3uZCzThhfP%2Fxce7UAn3YE0UsB76AOBlEz2EbvVXC%2BYGXU5wTkXHG0Duk8ueUR6rzQ5RwyJa%2Fi%2FtOVenhM53KkBP81pQQte8D1LFGm3UXLj3i9Fj56m%2FKbmN0Fw1O%2ByX048LFvMDV2dXVKXl%2Bhm01SVH5aUl6xGn9K6s9xbIkmfNeIxkHeyc3RZaxtuQ%2FOALAuf3BSgHJriHsW%2BUnT%2BzIoavT9tLbqAgh5PSDH8yrMYGNXnyEvsqk%2FiFIkeu4yTuyM8c24%2BceiOMfDAaxPZRIyowTKwOHq5vA1Soy%2BeKBKdauEp8SInjTzRiZMYewa98qGFufOAh40KAuy82j7Te0kjXAvGuVGgeRnAsqeIPNe3sM6MyzPhvoxC68nOXzd1h0DYNp1oVADR2cppY0rWSYgn3BleyXm53l%2FxRZG%2F1fS7NFBGCA%2BKoZo4S8i3tw7DozLx1Byb4sNLFQFUZf96xs99%2FnehgvBL5oiJK4z7njQgj5k16HSl8NqEVk1eDeFNiphkumaKOIkEi0%2BE%2F2eknBv44CPtB%2BdPDkymWkAHM3pm%2FXevVqMeO6wXwuiQnE%2Bz0RES4%2B9SCFgcrk34T%2FR4ORsLJRT8w%2BHlZ5j16W0XkgY1Rv7UEeBn9e3lMOqVyMEGOqUB%2BS07IN4FRo%2FgzOQaSVoTZhr4W2pK%2B9HDRGT7rOqlvRSNcXtACFoQgPgGOr%2Bl6y5cz3jB1wQShJEkfERZbsDXA3R2xZONCdzFPS3%2FsputZ3nj0KZEbc1aCegVVRqH9B7z3MCTzMsbzCuZwW9Fma3r0q9%2BCDP6ys257zQjUiieZ9oIZJSwOgCwfEv9B6vZbX1RuDp1YWgXGQcCqP9%2FNkk6lqreUGti&X-Amz-Signature=25794fb6b9dfd5bf17bbe2b36ebe977072d9c72f0ec87e3c1eb7c37c3a57bd90&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFBZ6IA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDHSy0thY0IlDC3pA7VLrg9h%2BJF%2FkAuPdTK304Vo1ozUgIgIezChwQP4MEaeqBJNzYCY6Eq9lxboMbEo2HanKxJFpEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJH6MuFe2QqJW%2B71MircA6QcSp3uZCzThhfP%2Fxce7UAn3YE0UsB76AOBlEz2EbvVXC%2BYGXU5wTkXHG0Duk8ueUR6rzQ5RwyJa%2Fi%2FtOVenhM53KkBP81pQQte8D1LFGm3UXLj3i9Fj56m%2FKbmN0Fw1O%2ByX048LFvMDV2dXVKXl%2Bhm01SVH5aUl6xGn9K6s9xbIkmfNeIxkHeyc3RZaxtuQ%2FOALAuf3BSgHJriHsW%2BUnT%2BzIoavT9tLbqAgh5PSDH8yrMYGNXnyEvsqk%2FiFIkeu4yTuyM8c24%2BceiOMfDAaxPZRIyowTKwOHq5vA1Soy%2BeKBKdauEp8SInjTzRiZMYewa98qGFufOAh40KAuy82j7Te0kjXAvGuVGgeRnAsqeIPNe3sM6MyzPhvoxC68nOXzd1h0DYNp1oVADR2cppY0rWSYgn3BleyXm53l%2FxRZG%2F1fS7NFBGCA%2BKoZo4S8i3tw7DozLx1Byb4sNLFQFUZf96xs99%2FnehgvBL5oiJK4z7njQgj5k16HSl8NqEVk1eDeFNiphkumaKOIkEi0%2BE%2F2eknBv44CPtB%2BdPDkymWkAHM3pm%2FXevVqMeO6wXwuiQnE%2Bz0RES4%2B9SCFgcrk34T%2FR4ORsLJRT8w%2BHlZ5j16W0XkgY1Rv7UEeBn9e3lMOqVyMEGOqUB%2BS07IN4FRo%2FgzOQaSVoTZhr4W2pK%2B9HDRGT7rOqlvRSNcXtACFoQgPgGOr%2Bl6y5cz3jB1wQShJEkfERZbsDXA3R2xZONCdzFPS3%2FsputZ3nj0KZEbc1aCegVVRqH9B7z3MCTzMsbzCuZwW9Fma3r0q9%2BCDP6ys257zQjUiieZ9oIZJSwOgCwfEv9B6vZbX1RuDp1YWgXGQcCqP9%2FNkk6lqreUGti&X-Amz-Signature=be91a08b4f6ad2fe0943d9be8c637953cd6737d46e9f81cd9c311cd03d2812b9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFBZ6IA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDHSy0thY0IlDC3pA7VLrg9h%2BJF%2FkAuPdTK304Vo1ozUgIgIezChwQP4MEaeqBJNzYCY6Eq9lxboMbEo2HanKxJFpEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJH6MuFe2QqJW%2B71MircA6QcSp3uZCzThhfP%2Fxce7UAn3YE0UsB76AOBlEz2EbvVXC%2BYGXU5wTkXHG0Duk8ueUR6rzQ5RwyJa%2Fi%2FtOVenhM53KkBP81pQQte8D1LFGm3UXLj3i9Fj56m%2FKbmN0Fw1O%2ByX048LFvMDV2dXVKXl%2Bhm01SVH5aUl6xGn9K6s9xbIkmfNeIxkHeyc3RZaxtuQ%2FOALAuf3BSgHJriHsW%2BUnT%2BzIoavT9tLbqAgh5PSDH8yrMYGNXnyEvsqk%2FiFIkeu4yTuyM8c24%2BceiOMfDAaxPZRIyowTKwOHq5vA1Soy%2BeKBKdauEp8SInjTzRiZMYewa98qGFufOAh40KAuy82j7Te0kjXAvGuVGgeRnAsqeIPNe3sM6MyzPhvoxC68nOXzd1h0DYNp1oVADR2cppY0rWSYgn3BleyXm53l%2FxRZG%2F1fS7NFBGCA%2BKoZo4S8i3tw7DozLx1Byb4sNLFQFUZf96xs99%2FnehgvBL5oiJK4z7njQgj5k16HSl8NqEVk1eDeFNiphkumaKOIkEi0%2BE%2F2eknBv44CPtB%2BdPDkymWkAHM3pm%2FXevVqMeO6wXwuiQnE%2Bz0RES4%2B9SCFgcrk34T%2FR4ORsLJRT8w%2BHlZ5j16W0XkgY1Rv7UEeBn9e3lMOqVyMEGOqUB%2BS07IN4FRo%2FgzOQaSVoTZhr4W2pK%2B9HDRGT7rOqlvRSNcXtACFoQgPgGOr%2Bl6y5cz3jB1wQShJEkfERZbsDXA3R2xZONCdzFPS3%2FsputZ3nj0KZEbc1aCegVVRqH9B7z3MCTzMsbzCuZwW9Fma3r0q9%2BCDP6ys257zQjUiieZ9oIZJSwOgCwfEv9B6vZbX1RuDp1YWgXGQcCqP9%2FNkk6lqreUGti&X-Amz-Signature=9cdc389d308e293f77965543a171f87c32d063fcdf5206785cceadf609e644c2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
