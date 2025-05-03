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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZ5LKOJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDt6uOlqgaXh9Pq%2BOeUwzWksQXinoYTemCLxhpeblGuSAiEAmCYDaHcOyHcb00BWXWnLP36SftYchJDsHS8nxNAO1T4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7FRq5uW1UMx8gw7ircA5IuuDWMCUGzYoFcjmUT09EX2g%2Bm1YsayWaDPeiv6DgAP8WkKP7%2FFCn0lttrPgSHfknpkgA%2FHgkXVjCyeuMky1zCZsznu5UjsvHJwTXviy4WBl6lQIijabGuhriF%2BQQZIim7OjTEoJdKPExG69MtfM0B7JuoYSDv4nPol%2BTfoLst%2FVxfRNs5D8x7A%2FXtG%2BqLlb%2FA8Yf1gExnjqOTbevM1fS0pKlR9wSW%2FFgfX4lCKJKJwo4Dch6yGT8BqAaXbUFSgd%2FRTiurgqTCOSpykncWMutLZ%2ByKLlMJCoW44fESKoSpBhmL16JEhREGSYtasktzUW%2BlTM%2FizURN5PYxQKxbpaClSh9dvIlmIxfqudL9%2FvM%2BgCrbcxqxwn9xxE9NZeZR%2BDbklY8%2FmXSe3smDRnHZdg0LMvwc1dLzakhcC9O9CJfAzjpJGuXqXYBGuPMRHzFcbwIS%2B1hDELnBmLlewB0JL5elFl1cBvbpyFvJk0q0c3Cng5Fd%2BnVpOd0UsxR3VRhL43MWZ6M9G%2B9wBxBmd51tmYOXgEM3Hm4g%2FTP0bJoD5ijqxjzOTBPIgWfC%2F%2Fc%2BhmUDm%2F4nE9ESAZIrytZSACgTGE9ZqnY4l%2FI5pd8JTY2ob2HjL4phIiQvBkVR%2B7bJMLD62MAGOqUBRF0oJttypjRlRwCkNfwMCf5CpqovWpKA8NgwhNT2AYWsh4RSzpsnUuR8o7WDjhaVAdZyTMWCYh5H53YBwCejVhQUPLTGJLWHZJx9sT5rYCQbU%2BGKrFzsTVTtcJ0El4M4anEtYvlz5o1CniMsfWOtKhxZHGZI0GOoXoManQ5yQc0XA3mZUrqocz2yWRyc%2FXN%2FDJ%2BT1pW6XnNGYfNuNLN4trlyAqno&X-Amz-Signature=263673807209f353f5920c2fa096316c8d3122d96421900ff250b67516274bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZ5LKOJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDt6uOlqgaXh9Pq%2BOeUwzWksQXinoYTemCLxhpeblGuSAiEAmCYDaHcOyHcb00BWXWnLP36SftYchJDsHS8nxNAO1T4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7FRq5uW1UMx8gw7ircA5IuuDWMCUGzYoFcjmUT09EX2g%2Bm1YsayWaDPeiv6DgAP8WkKP7%2FFCn0lttrPgSHfknpkgA%2FHgkXVjCyeuMky1zCZsznu5UjsvHJwTXviy4WBl6lQIijabGuhriF%2BQQZIim7OjTEoJdKPExG69MtfM0B7JuoYSDv4nPol%2BTfoLst%2FVxfRNs5D8x7A%2FXtG%2BqLlb%2FA8Yf1gExnjqOTbevM1fS0pKlR9wSW%2FFgfX4lCKJKJwo4Dch6yGT8BqAaXbUFSgd%2FRTiurgqTCOSpykncWMutLZ%2ByKLlMJCoW44fESKoSpBhmL16JEhREGSYtasktzUW%2BlTM%2FizURN5PYxQKxbpaClSh9dvIlmIxfqudL9%2FvM%2BgCrbcxqxwn9xxE9NZeZR%2BDbklY8%2FmXSe3smDRnHZdg0LMvwc1dLzakhcC9O9CJfAzjpJGuXqXYBGuPMRHzFcbwIS%2B1hDELnBmLlewB0JL5elFl1cBvbpyFvJk0q0c3Cng5Fd%2BnVpOd0UsxR3VRhL43MWZ6M9G%2B9wBxBmd51tmYOXgEM3Hm4g%2FTP0bJoD5ijqxjzOTBPIgWfC%2F%2Fc%2BhmUDm%2F4nE9ESAZIrytZSACgTGE9ZqnY4l%2FI5pd8JTY2ob2HjL4phIiQvBkVR%2B7bJMLD62MAGOqUBRF0oJttypjRlRwCkNfwMCf5CpqovWpKA8NgwhNT2AYWsh4RSzpsnUuR8o7WDjhaVAdZyTMWCYh5H53YBwCejVhQUPLTGJLWHZJx9sT5rYCQbU%2BGKrFzsTVTtcJ0El4M4anEtYvlz5o1CniMsfWOtKhxZHGZI0GOoXoManQ5yQc0XA3mZUrqocz2yWRyc%2FXN%2FDJ%2BT1pW6XnNGYfNuNLN4trlyAqno&X-Amz-Signature=08b146e4e043a071db843f73b1f319a8cd7a832733755125df8dc9a0510232ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZ5LKOJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDt6uOlqgaXh9Pq%2BOeUwzWksQXinoYTemCLxhpeblGuSAiEAmCYDaHcOyHcb00BWXWnLP36SftYchJDsHS8nxNAO1T4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7FRq5uW1UMx8gw7ircA5IuuDWMCUGzYoFcjmUT09EX2g%2Bm1YsayWaDPeiv6DgAP8WkKP7%2FFCn0lttrPgSHfknpkgA%2FHgkXVjCyeuMky1zCZsznu5UjsvHJwTXviy4WBl6lQIijabGuhriF%2BQQZIim7OjTEoJdKPExG69MtfM0B7JuoYSDv4nPol%2BTfoLst%2FVxfRNs5D8x7A%2FXtG%2BqLlb%2FA8Yf1gExnjqOTbevM1fS0pKlR9wSW%2FFgfX4lCKJKJwo4Dch6yGT8BqAaXbUFSgd%2FRTiurgqTCOSpykncWMutLZ%2ByKLlMJCoW44fESKoSpBhmL16JEhREGSYtasktzUW%2BlTM%2FizURN5PYxQKxbpaClSh9dvIlmIxfqudL9%2FvM%2BgCrbcxqxwn9xxE9NZeZR%2BDbklY8%2FmXSe3smDRnHZdg0LMvwc1dLzakhcC9O9CJfAzjpJGuXqXYBGuPMRHzFcbwIS%2B1hDELnBmLlewB0JL5elFl1cBvbpyFvJk0q0c3Cng5Fd%2BnVpOd0UsxR3VRhL43MWZ6M9G%2B9wBxBmd51tmYOXgEM3Hm4g%2FTP0bJoD5ijqxjzOTBPIgWfC%2F%2Fc%2BhmUDm%2F4nE9ESAZIrytZSACgTGE9ZqnY4l%2FI5pd8JTY2ob2HjL4phIiQvBkVR%2B7bJMLD62MAGOqUBRF0oJttypjRlRwCkNfwMCf5CpqovWpKA8NgwhNT2AYWsh4RSzpsnUuR8o7WDjhaVAdZyTMWCYh5H53YBwCejVhQUPLTGJLWHZJx9sT5rYCQbU%2BGKrFzsTVTtcJ0El4M4anEtYvlz5o1CniMsfWOtKhxZHGZI0GOoXoManQ5yQc0XA3mZUrqocz2yWRyc%2FXN%2FDJ%2BT1pW6XnNGYfNuNLN4trlyAqno&X-Amz-Signature=2aac9dc8eedb824778ed406df446550bab0a1ee10f82b488f1c102b06e328d13&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZ5LKOJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDt6uOlqgaXh9Pq%2BOeUwzWksQXinoYTemCLxhpeblGuSAiEAmCYDaHcOyHcb00BWXWnLP36SftYchJDsHS8nxNAO1T4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7FRq5uW1UMx8gw7ircA5IuuDWMCUGzYoFcjmUT09EX2g%2Bm1YsayWaDPeiv6DgAP8WkKP7%2FFCn0lttrPgSHfknpkgA%2FHgkXVjCyeuMky1zCZsznu5UjsvHJwTXviy4WBl6lQIijabGuhriF%2BQQZIim7OjTEoJdKPExG69MtfM0B7JuoYSDv4nPol%2BTfoLst%2FVxfRNs5D8x7A%2FXtG%2BqLlb%2FA8Yf1gExnjqOTbevM1fS0pKlR9wSW%2FFgfX4lCKJKJwo4Dch6yGT8BqAaXbUFSgd%2FRTiurgqTCOSpykncWMutLZ%2ByKLlMJCoW44fESKoSpBhmL16JEhREGSYtasktzUW%2BlTM%2FizURN5PYxQKxbpaClSh9dvIlmIxfqudL9%2FvM%2BgCrbcxqxwn9xxE9NZeZR%2BDbklY8%2FmXSe3smDRnHZdg0LMvwc1dLzakhcC9O9CJfAzjpJGuXqXYBGuPMRHzFcbwIS%2B1hDELnBmLlewB0JL5elFl1cBvbpyFvJk0q0c3Cng5Fd%2BnVpOd0UsxR3VRhL43MWZ6M9G%2B9wBxBmd51tmYOXgEM3Hm4g%2FTP0bJoD5ijqxjzOTBPIgWfC%2F%2Fc%2BhmUDm%2F4nE9ESAZIrytZSACgTGE9ZqnY4l%2FI5pd8JTY2ob2HjL4phIiQvBkVR%2B7bJMLD62MAGOqUBRF0oJttypjRlRwCkNfwMCf5CpqovWpKA8NgwhNT2AYWsh4RSzpsnUuR8o7WDjhaVAdZyTMWCYh5H53YBwCejVhQUPLTGJLWHZJx9sT5rYCQbU%2BGKrFzsTVTtcJ0El4M4anEtYvlz5o1CniMsfWOtKhxZHGZI0GOoXoManQ5yQc0XA3mZUrqocz2yWRyc%2FXN%2FDJ%2BT1pW6XnNGYfNuNLN4trlyAqno&X-Amz-Signature=19bb19aa49789fed96423e99716d1edc97d4a156454a40d44406dd0ce3cc5f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZ5LKOJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDt6uOlqgaXh9Pq%2BOeUwzWksQXinoYTemCLxhpeblGuSAiEAmCYDaHcOyHcb00BWXWnLP36SftYchJDsHS8nxNAO1T4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7FRq5uW1UMx8gw7ircA5IuuDWMCUGzYoFcjmUT09EX2g%2Bm1YsayWaDPeiv6DgAP8WkKP7%2FFCn0lttrPgSHfknpkgA%2FHgkXVjCyeuMky1zCZsznu5UjsvHJwTXviy4WBl6lQIijabGuhriF%2BQQZIim7OjTEoJdKPExG69MtfM0B7JuoYSDv4nPol%2BTfoLst%2FVxfRNs5D8x7A%2FXtG%2BqLlb%2FA8Yf1gExnjqOTbevM1fS0pKlR9wSW%2FFgfX4lCKJKJwo4Dch6yGT8BqAaXbUFSgd%2FRTiurgqTCOSpykncWMutLZ%2ByKLlMJCoW44fESKoSpBhmL16JEhREGSYtasktzUW%2BlTM%2FizURN5PYxQKxbpaClSh9dvIlmIxfqudL9%2FvM%2BgCrbcxqxwn9xxE9NZeZR%2BDbklY8%2FmXSe3smDRnHZdg0LMvwc1dLzakhcC9O9CJfAzjpJGuXqXYBGuPMRHzFcbwIS%2B1hDELnBmLlewB0JL5elFl1cBvbpyFvJk0q0c3Cng5Fd%2BnVpOd0UsxR3VRhL43MWZ6M9G%2B9wBxBmd51tmYOXgEM3Hm4g%2FTP0bJoD5ijqxjzOTBPIgWfC%2F%2Fc%2BhmUDm%2F4nE9ESAZIrytZSACgTGE9ZqnY4l%2FI5pd8JTY2ob2HjL4phIiQvBkVR%2B7bJMLD62MAGOqUBRF0oJttypjRlRwCkNfwMCf5CpqovWpKA8NgwhNT2AYWsh4RSzpsnUuR8o7WDjhaVAdZyTMWCYh5H53YBwCejVhQUPLTGJLWHZJx9sT5rYCQbU%2BGKrFzsTVTtcJ0El4M4anEtYvlz5o1CniMsfWOtKhxZHGZI0GOoXoManQ5yQc0XA3mZUrqocz2yWRyc%2FXN%2FDJ%2BT1pW6XnNGYfNuNLN4trlyAqno&X-Amz-Signature=a314f4a074667b143890f16ee430da241d4244b50d7627e485b8013c4ee8c366&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZ5LKOJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDt6uOlqgaXh9Pq%2BOeUwzWksQXinoYTemCLxhpeblGuSAiEAmCYDaHcOyHcb00BWXWnLP36SftYchJDsHS8nxNAO1T4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7FRq5uW1UMx8gw7ircA5IuuDWMCUGzYoFcjmUT09EX2g%2Bm1YsayWaDPeiv6DgAP8WkKP7%2FFCn0lttrPgSHfknpkgA%2FHgkXVjCyeuMky1zCZsznu5UjsvHJwTXviy4WBl6lQIijabGuhriF%2BQQZIim7OjTEoJdKPExG69MtfM0B7JuoYSDv4nPol%2BTfoLst%2FVxfRNs5D8x7A%2FXtG%2BqLlb%2FA8Yf1gExnjqOTbevM1fS0pKlR9wSW%2FFgfX4lCKJKJwo4Dch6yGT8BqAaXbUFSgd%2FRTiurgqTCOSpykncWMutLZ%2ByKLlMJCoW44fESKoSpBhmL16JEhREGSYtasktzUW%2BlTM%2FizURN5PYxQKxbpaClSh9dvIlmIxfqudL9%2FvM%2BgCrbcxqxwn9xxE9NZeZR%2BDbklY8%2FmXSe3smDRnHZdg0LMvwc1dLzakhcC9O9CJfAzjpJGuXqXYBGuPMRHzFcbwIS%2B1hDELnBmLlewB0JL5elFl1cBvbpyFvJk0q0c3Cng5Fd%2BnVpOd0UsxR3VRhL43MWZ6M9G%2B9wBxBmd51tmYOXgEM3Hm4g%2FTP0bJoD5ijqxjzOTBPIgWfC%2F%2Fc%2BhmUDm%2F4nE9ESAZIrytZSACgTGE9ZqnY4l%2FI5pd8JTY2ob2HjL4phIiQvBkVR%2B7bJMLD62MAGOqUBRF0oJttypjRlRwCkNfwMCf5CpqovWpKA8NgwhNT2AYWsh4RSzpsnUuR8o7WDjhaVAdZyTMWCYh5H53YBwCejVhQUPLTGJLWHZJx9sT5rYCQbU%2BGKrFzsTVTtcJ0El4M4anEtYvlz5o1CniMsfWOtKhxZHGZI0GOoXoManQ5yQc0XA3mZUrqocz2yWRyc%2FXN%2FDJ%2BT1pW6XnNGYfNuNLN4trlyAqno&X-Amz-Signature=cd0e078b3557ee818e14dfc775ddd9d5773065fc518d1d9a7fe8a2875079f578&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZ5LKOJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDt6uOlqgaXh9Pq%2BOeUwzWksQXinoYTemCLxhpeblGuSAiEAmCYDaHcOyHcb00BWXWnLP36SftYchJDsHS8nxNAO1T4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7FRq5uW1UMx8gw7ircA5IuuDWMCUGzYoFcjmUT09EX2g%2Bm1YsayWaDPeiv6DgAP8WkKP7%2FFCn0lttrPgSHfknpkgA%2FHgkXVjCyeuMky1zCZsznu5UjsvHJwTXviy4WBl6lQIijabGuhriF%2BQQZIim7OjTEoJdKPExG69MtfM0B7JuoYSDv4nPol%2BTfoLst%2FVxfRNs5D8x7A%2FXtG%2BqLlb%2FA8Yf1gExnjqOTbevM1fS0pKlR9wSW%2FFgfX4lCKJKJwo4Dch6yGT8BqAaXbUFSgd%2FRTiurgqTCOSpykncWMutLZ%2ByKLlMJCoW44fESKoSpBhmL16JEhREGSYtasktzUW%2BlTM%2FizURN5PYxQKxbpaClSh9dvIlmIxfqudL9%2FvM%2BgCrbcxqxwn9xxE9NZeZR%2BDbklY8%2FmXSe3smDRnHZdg0LMvwc1dLzakhcC9O9CJfAzjpJGuXqXYBGuPMRHzFcbwIS%2B1hDELnBmLlewB0JL5elFl1cBvbpyFvJk0q0c3Cng5Fd%2BnVpOd0UsxR3VRhL43MWZ6M9G%2B9wBxBmd51tmYOXgEM3Hm4g%2FTP0bJoD5ijqxjzOTBPIgWfC%2F%2Fc%2BhmUDm%2F4nE9ESAZIrytZSACgTGE9ZqnY4l%2FI5pd8JTY2ob2HjL4phIiQvBkVR%2B7bJMLD62MAGOqUBRF0oJttypjRlRwCkNfwMCf5CpqovWpKA8NgwhNT2AYWsh4RSzpsnUuR8o7WDjhaVAdZyTMWCYh5H53YBwCejVhQUPLTGJLWHZJx9sT5rYCQbU%2BGKrFzsTVTtcJ0El4M4anEtYvlz5o1CniMsfWOtKhxZHGZI0GOoXoManQ5yQc0XA3mZUrqocz2yWRyc%2FXN%2FDJ%2BT1pW6XnNGYfNuNLN4trlyAqno&X-Amz-Signature=d24b7e9e6148675496dd2150e98f553e91341d632d41610fbc3ea9862dbbc0b9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
