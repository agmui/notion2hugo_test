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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVHHO2Y%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICkZENxnAjjs%2FTw7h93mjyYiUg8QHE9NZD0fMSGVFRj0AiB6CuUYNjqjP%2BFMVYJ14s%2B5tx4T8Ed56XOuHgWnckD82yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZOnV3sXEPlPI5PWKtwDXX5VnhkoyXmtTNDOtTXxUefxfsnpbOgqnUgoNc64FUE1tpEw22hYrg3k2ZiMMRk4xjF5lXUgL2kbr%2F8excIeBGIwGdj40C0MhqWCFQqpJdbCyGNsdxkj9Uxm1Gv1aVR%2BQbtouertia7av8M1oR1cFAZATkf5m0aDh2J3eDezSTGVHFGgbmSKeGqbahkMDlQxlm4fEQfwbWIlWe7EPYd8gXhs0gJgQBwbY8sp3XBav8yZm%2FznRKIm5Q90Wxp2jsMi27p9gjJ8z6Y0mzGVbtHxPUJxkZeF18rDvieNEKJBNDmVvKIW5M5YzTkdDQHPYPCIfGSpKfA6S20tQllVamdIvQX0xmDPTkBy%2FsJRZRjiDOguf5PIhhzsYdCyxCKDy2EpG1wEedczv8pe%2FAOeJY8e224u1Ccs9m1RFbKuJt5yY%2FUcsvukdlyevMSWAe28CynVtrgO4AhLpY9u3Dht9IvvbT2lqPc570NsR2ldfBHuyuCT2AKaHSBMEHB%2FP1Cxs%2BPe4mGupFh8NRZ%2BZpkciEGJcix5wILdtEpv9t0TKRpKb%2BIQ0UFWOEYRArPlJawdZMeC8%2B6BPg5RqCWobWMIBlYca5KNJ%2Fh9bKyo9WlHWn%2FKeArIHqkDZcCt7HTBow4w5dWcwAY6pgHa1IkrKC916%2BgIoFCcRm8QAPWBJMciHNqHb12sgTqBOULdF07Em5S%2FkL21BolThvwi6hhPAvPv4aTeaws67wnPronav0d0VZzLUXmIl1uw9OgXgP5hkCO8IVMLuXjJDVjLRZ6kj4ZIDxOJ9bIGVTZlQkSLHJ3gkbalpwEr9NkR3opupwRLqcjgTwOxghTB4EmzFhwTlQIZd0KiU3gtg1FoSbXP%2F3aN&X-Amz-Signature=3bc79572d918cab62ee887a2edc282d2d524119c3f10fe6a059aa0a792ae3f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVHHO2Y%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICkZENxnAjjs%2FTw7h93mjyYiUg8QHE9NZD0fMSGVFRj0AiB6CuUYNjqjP%2BFMVYJ14s%2B5tx4T8Ed56XOuHgWnckD82yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZOnV3sXEPlPI5PWKtwDXX5VnhkoyXmtTNDOtTXxUefxfsnpbOgqnUgoNc64FUE1tpEw22hYrg3k2ZiMMRk4xjF5lXUgL2kbr%2F8excIeBGIwGdj40C0MhqWCFQqpJdbCyGNsdxkj9Uxm1Gv1aVR%2BQbtouertia7av8M1oR1cFAZATkf5m0aDh2J3eDezSTGVHFGgbmSKeGqbahkMDlQxlm4fEQfwbWIlWe7EPYd8gXhs0gJgQBwbY8sp3XBav8yZm%2FznRKIm5Q90Wxp2jsMi27p9gjJ8z6Y0mzGVbtHxPUJxkZeF18rDvieNEKJBNDmVvKIW5M5YzTkdDQHPYPCIfGSpKfA6S20tQllVamdIvQX0xmDPTkBy%2FsJRZRjiDOguf5PIhhzsYdCyxCKDy2EpG1wEedczv8pe%2FAOeJY8e224u1Ccs9m1RFbKuJt5yY%2FUcsvukdlyevMSWAe28CynVtrgO4AhLpY9u3Dht9IvvbT2lqPc570NsR2ldfBHuyuCT2AKaHSBMEHB%2FP1Cxs%2BPe4mGupFh8NRZ%2BZpkciEGJcix5wILdtEpv9t0TKRpKb%2BIQ0UFWOEYRArPlJawdZMeC8%2B6BPg5RqCWobWMIBlYca5KNJ%2Fh9bKyo9WlHWn%2FKeArIHqkDZcCt7HTBow4w5dWcwAY6pgHa1IkrKC916%2BgIoFCcRm8QAPWBJMciHNqHb12sgTqBOULdF07Em5S%2FkL21BolThvwi6hhPAvPv4aTeaws67wnPronav0d0VZzLUXmIl1uw9OgXgP5hkCO8IVMLuXjJDVjLRZ6kj4ZIDxOJ9bIGVTZlQkSLHJ3gkbalpwEr9NkR3opupwRLqcjgTwOxghTB4EmzFhwTlQIZd0KiU3gtg1FoSbXP%2F3aN&X-Amz-Signature=62115d69fc84586863fb9420e003810daebc8785a93a92a291d6edd7118228c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVHHO2Y%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICkZENxnAjjs%2FTw7h93mjyYiUg8QHE9NZD0fMSGVFRj0AiB6CuUYNjqjP%2BFMVYJ14s%2B5tx4T8Ed56XOuHgWnckD82yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZOnV3sXEPlPI5PWKtwDXX5VnhkoyXmtTNDOtTXxUefxfsnpbOgqnUgoNc64FUE1tpEw22hYrg3k2ZiMMRk4xjF5lXUgL2kbr%2F8excIeBGIwGdj40C0MhqWCFQqpJdbCyGNsdxkj9Uxm1Gv1aVR%2BQbtouertia7av8M1oR1cFAZATkf5m0aDh2J3eDezSTGVHFGgbmSKeGqbahkMDlQxlm4fEQfwbWIlWe7EPYd8gXhs0gJgQBwbY8sp3XBav8yZm%2FznRKIm5Q90Wxp2jsMi27p9gjJ8z6Y0mzGVbtHxPUJxkZeF18rDvieNEKJBNDmVvKIW5M5YzTkdDQHPYPCIfGSpKfA6S20tQllVamdIvQX0xmDPTkBy%2FsJRZRjiDOguf5PIhhzsYdCyxCKDy2EpG1wEedczv8pe%2FAOeJY8e224u1Ccs9m1RFbKuJt5yY%2FUcsvukdlyevMSWAe28CynVtrgO4AhLpY9u3Dht9IvvbT2lqPc570NsR2ldfBHuyuCT2AKaHSBMEHB%2FP1Cxs%2BPe4mGupFh8NRZ%2BZpkciEGJcix5wILdtEpv9t0TKRpKb%2BIQ0UFWOEYRArPlJawdZMeC8%2B6BPg5RqCWobWMIBlYca5KNJ%2Fh9bKyo9WlHWn%2FKeArIHqkDZcCt7HTBow4w5dWcwAY6pgHa1IkrKC916%2BgIoFCcRm8QAPWBJMciHNqHb12sgTqBOULdF07Em5S%2FkL21BolThvwi6hhPAvPv4aTeaws67wnPronav0d0VZzLUXmIl1uw9OgXgP5hkCO8IVMLuXjJDVjLRZ6kj4ZIDxOJ9bIGVTZlQkSLHJ3gkbalpwEr9NkR3opupwRLqcjgTwOxghTB4EmzFhwTlQIZd0KiU3gtg1FoSbXP%2F3aN&X-Amz-Signature=2f781d74042cf6fb024868f290ba72f1f8d9ecddb8c18f6eb8d55c554493f9a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVHHO2Y%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICkZENxnAjjs%2FTw7h93mjyYiUg8QHE9NZD0fMSGVFRj0AiB6CuUYNjqjP%2BFMVYJ14s%2B5tx4T8Ed56XOuHgWnckD82yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZOnV3sXEPlPI5PWKtwDXX5VnhkoyXmtTNDOtTXxUefxfsnpbOgqnUgoNc64FUE1tpEw22hYrg3k2ZiMMRk4xjF5lXUgL2kbr%2F8excIeBGIwGdj40C0MhqWCFQqpJdbCyGNsdxkj9Uxm1Gv1aVR%2BQbtouertia7av8M1oR1cFAZATkf5m0aDh2J3eDezSTGVHFGgbmSKeGqbahkMDlQxlm4fEQfwbWIlWe7EPYd8gXhs0gJgQBwbY8sp3XBav8yZm%2FznRKIm5Q90Wxp2jsMi27p9gjJ8z6Y0mzGVbtHxPUJxkZeF18rDvieNEKJBNDmVvKIW5M5YzTkdDQHPYPCIfGSpKfA6S20tQllVamdIvQX0xmDPTkBy%2FsJRZRjiDOguf5PIhhzsYdCyxCKDy2EpG1wEedczv8pe%2FAOeJY8e224u1Ccs9m1RFbKuJt5yY%2FUcsvukdlyevMSWAe28CynVtrgO4AhLpY9u3Dht9IvvbT2lqPc570NsR2ldfBHuyuCT2AKaHSBMEHB%2FP1Cxs%2BPe4mGupFh8NRZ%2BZpkciEGJcix5wILdtEpv9t0TKRpKb%2BIQ0UFWOEYRArPlJawdZMeC8%2B6BPg5RqCWobWMIBlYca5KNJ%2Fh9bKyo9WlHWn%2FKeArIHqkDZcCt7HTBow4w5dWcwAY6pgHa1IkrKC916%2BgIoFCcRm8QAPWBJMciHNqHb12sgTqBOULdF07Em5S%2FkL21BolThvwi6hhPAvPv4aTeaws67wnPronav0d0VZzLUXmIl1uw9OgXgP5hkCO8IVMLuXjJDVjLRZ6kj4ZIDxOJ9bIGVTZlQkSLHJ3gkbalpwEr9NkR3opupwRLqcjgTwOxghTB4EmzFhwTlQIZd0KiU3gtg1FoSbXP%2F3aN&X-Amz-Signature=344765fd2e537f5fa9e98d09ce4c9d3bf93aa44be6c9c8604e47b8f7efb9664f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVHHO2Y%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICkZENxnAjjs%2FTw7h93mjyYiUg8QHE9NZD0fMSGVFRj0AiB6CuUYNjqjP%2BFMVYJ14s%2B5tx4T8Ed56XOuHgWnckD82yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZOnV3sXEPlPI5PWKtwDXX5VnhkoyXmtTNDOtTXxUefxfsnpbOgqnUgoNc64FUE1tpEw22hYrg3k2ZiMMRk4xjF5lXUgL2kbr%2F8excIeBGIwGdj40C0MhqWCFQqpJdbCyGNsdxkj9Uxm1Gv1aVR%2BQbtouertia7av8M1oR1cFAZATkf5m0aDh2J3eDezSTGVHFGgbmSKeGqbahkMDlQxlm4fEQfwbWIlWe7EPYd8gXhs0gJgQBwbY8sp3XBav8yZm%2FznRKIm5Q90Wxp2jsMi27p9gjJ8z6Y0mzGVbtHxPUJxkZeF18rDvieNEKJBNDmVvKIW5M5YzTkdDQHPYPCIfGSpKfA6S20tQllVamdIvQX0xmDPTkBy%2FsJRZRjiDOguf5PIhhzsYdCyxCKDy2EpG1wEedczv8pe%2FAOeJY8e224u1Ccs9m1RFbKuJt5yY%2FUcsvukdlyevMSWAe28CynVtrgO4AhLpY9u3Dht9IvvbT2lqPc570NsR2ldfBHuyuCT2AKaHSBMEHB%2FP1Cxs%2BPe4mGupFh8NRZ%2BZpkciEGJcix5wILdtEpv9t0TKRpKb%2BIQ0UFWOEYRArPlJawdZMeC8%2B6BPg5RqCWobWMIBlYca5KNJ%2Fh9bKyo9WlHWn%2FKeArIHqkDZcCt7HTBow4w5dWcwAY6pgHa1IkrKC916%2BgIoFCcRm8QAPWBJMciHNqHb12sgTqBOULdF07Em5S%2FkL21BolThvwi6hhPAvPv4aTeaws67wnPronav0d0VZzLUXmIl1uw9OgXgP5hkCO8IVMLuXjJDVjLRZ6kj4ZIDxOJ9bIGVTZlQkSLHJ3gkbalpwEr9NkR3opupwRLqcjgTwOxghTB4EmzFhwTlQIZd0KiU3gtg1FoSbXP%2F3aN&X-Amz-Signature=cb5d7578712fe94ac24035bd2444c06c675cf3f740da5345bd2c47d941dd9c6f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVHHO2Y%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICkZENxnAjjs%2FTw7h93mjyYiUg8QHE9NZD0fMSGVFRj0AiB6CuUYNjqjP%2BFMVYJ14s%2B5tx4T8Ed56XOuHgWnckD82yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZOnV3sXEPlPI5PWKtwDXX5VnhkoyXmtTNDOtTXxUefxfsnpbOgqnUgoNc64FUE1tpEw22hYrg3k2ZiMMRk4xjF5lXUgL2kbr%2F8excIeBGIwGdj40C0MhqWCFQqpJdbCyGNsdxkj9Uxm1Gv1aVR%2BQbtouertia7av8M1oR1cFAZATkf5m0aDh2J3eDezSTGVHFGgbmSKeGqbahkMDlQxlm4fEQfwbWIlWe7EPYd8gXhs0gJgQBwbY8sp3XBav8yZm%2FznRKIm5Q90Wxp2jsMi27p9gjJ8z6Y0mzGVbtHxPUJxkZeF18rDvieNEKJBNDmVvKIW5M5YzTkdDQHPYPCIfGSpKfA6S20tQllVamdIvQX0xmDPTkBy%2FsJRZRjiDOguf5PIhhzsYdCyxCKDy2EpG1wEedczv8pe%2FAOeJY8e224u1Ccs9m1RFbKuJt5yY%2FUcsvukdlyevMSWAe28CynVtrgO4AhLpY9u3Dht9IvvbT2lqPc570NsR2ldfBHuyuCT2AKaHSBMEHB%2FP1Cxs%2BPe4mGupFh8NRZ%2BZpkciEGJcix5wILdtEpv9t0TKRpKb%2BIQ0UFWOEYRArPlJawdZMeC8%2B6BPg5RqCWobWMIBlYca5KNJ%2Fh9bKyo9WlHWn%2FKeArIHqkDZcCt7HTBow4w5dWcwAY6pgHa1IkrKC916%2BgIoFCcRm8QAPWBJMciHNqHb12sgTqBOULdF07Em5S%2FkL21BolThvwi6hhPAvPv4aTeaws67wnPronav0d0VZzLUXmIl1uw9OgXgP5hkCO8IVMLuXjJDVjLRZ6kj4ZIDxOJ9bIGVTZlQkSLHJ3gkbalpwEr9NkR3opupwRLqcjgTwOxghTB4EmzFhwTlQIZd0KiU3gtg1FoSbXP%2F3aN&X-Amz-Signature=c5b472b81c48e7ac2a222ea2e37a2b927f1021ee1c6bbdfeb53011e6170756d2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVHHO2Y%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICkZENxnAjjs%2FTw7h93mjyYiUg8QHE9NZD0fMSGVFRj0AiB6CuUYNjqjP%2BFMVYJ14s%2B5tx4T8Ed56XOuHgWnckD82yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZOnV3sXEPlPI5PWKtwDXX5VnhkoyXmtTNDOtTXxUefxfsnpbOgqnUgoNc64FUE1tpEw22hYrg3k2ZiMMRk4xjF5lXUgL2kbr%2F8excIeBGIwGdj40C0MhqWCFQqpJdbCyGNsdxkj9Uxm1Gv1aVR%2BQbtouertia7av8M1oR1cFAZATkf5m0aDh2J3eDezSTGVHFGgbmSKeGqbahkMDlQxlm4fEQfwbWIlWe7EPYd8gXhs0gJgQBwbY8sp3XBav8yZm%2FznRKIm5Q90Wxp2jsMi27p9gjJ8z6Y0mzGVbtHxPUJxkZeF18rDvieNEKJBNDmVvKIW5M5YzTkdDQHPYPCIfGSpKfA6S20tQllVamdIvQX0xmDPTkBy%2FsJRZRjiDOguf5PIhhzsYdCyxCKDy2EpG1wEedczv8pe%2FAOeJY8e224u1Ccs9m1RFbKuJt5yY%2FUcsvukdlyevMSWAe28CynVtrgO4AhLpY9u3Dht9IvvbT2lqPc570NsR2ldfBHuyuCT2AKaHSBMEHB%2FP1Cxs%2BPe4mGupFh8NRZ%2BZpkciEGJcix5wILdtEpv9t0TKRpKb%2BIQ0UFWOEYRArPlJawdZMeC8%2B6BPg5RqCWobWMIBlYca5KNJ%2Fh9bKyo9WlHWn%2FKeArIHqkDZcCt7HTBow4w5dWcwAY6pgHa1IkrKC916%2BgIoFCcRm8QAPWBJMciHNqHb12sgTqBOULdF07Em5S%2FkL21BolThvwi6hhPAvPv4aTeaws67wnPronav0d0VZzLUXmIl1uw9OgXgP5hkCO8IVMLuXjJDVjLRZ6kj4ZIDxOJ9bIGVTZlQkSLHJ3gkbalpwEr9NkR3opupwRLqcjgTwOxghTB4EmzFhwTlQIZd0KiU3gtg1FoSbXP%2F3aN&X-Amz-Signature=83f90de9b9ddd7fc01ae2586cbbfaa7f3e8fc4868322d4e0cf30f0af7f781b19&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
