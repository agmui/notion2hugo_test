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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCBQGGP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2Bn%2FoyDpazcWyMFfTJtdHrlToYLkPv5GBZGNUW%2Bs9RxAiEA%2Fs2eWok4xZez53XfK4W1JtBwZs9P2obLY6uMKsKur2Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHQEQQeVRJ9OtEzSFSrcA940Gh%2FnR2IJd2FHQpzv5X93KO9MNm92o%2BzE8kNcGUc3dvcDWBi%2BYgs5dqWsOORncc94QolP3xIUYWpHW%2FzF%2FsTVgtEKnXTVVnKdezgAHc7wPjr%2FJ%2B4WJSg1kXKyzQMaN332zN0JK1QPl5ZEX%2B1%2FbiU2OEz9Lw4Z8KEk5L3ZYwI8tv8f4gREQIGm4U7JBz%2FReJlP3ohS73yS58IrN%2BxlkNVQCPzF8DYc9bU8iquEk879eg4Ps9cySq2wd9LNMWLhMgUwYw22mgDQbmIWWGl3R37ECdwpdaxdT9AcaYklc9V9EpdSMMGlVFxQ1WSh3JE6oQ2ArCT3E4mQQ3d8dHuuCs5sL9%2BT%2Bdcp%2BEE8Pyd%2FoTXDb7B%2FS%2FGQWbktNW6ZnkYNSzSUFxG7hW4tg2izwYhJJT%2FBtOo4xKL5zWFJ7b8AG7BJGx95DxKPdzFmXyao0jCy1bruNDPq5IzA52DQ%2Fs79JS4VQh340YNh80dLx%2FWYMYN0PKKH07LxawF2N0HisM%2BZhjGDkUoXwQmZ439c2frI%2BtdOGViUuP43nkTf2FesfPEA9BZBsuc6iK0ZOKtfjm139GbKkQs15JleMkpEiLbQkj1eznYimt844%2BrKr91%2BpAcWSCaoYXpmYT9TeGjSML%2BMmL0GOqUB3vM8598T%2F8cEdwc45SIc0QJDoOQbvfvumtWDtzb%2BC6eGt7KU5qdM00d7iw046o7ynG9d6VImo69RHQXw2h7Z5SC2vcpoOB8pnWF3j8MjAS1N9UEQba1sMMAtI6c%2F1qyQk2ym66PhGsWlrldsAnZXGpB%2FG9WEGaHXPyoUqsXVr2DOjhWDm8%2FGUtDkQ9Akn3Hyi3niAM0gM472xp8hcXwhzdaKhpH%2B&X-Amz-Signature=514a5bd200085f3764087fa46cea4bb9372247965a5077d9f3c0144d1be83b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCBQGGP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2Bn%2FoyDpazcWyMFfTJtdHrlToYLkPv5GBZGNUW%2Bs9RxAiEA%2Fs2eWok4xZez53XfK4W1JtBwZs9P2obLY6uMKsKur2Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHQEQQeVRJ9OtEzSFSrcA940Gh%2FnR2IJd2FHQpzv5X93KO9MNm92o%2BzE8kNcGUc3dvcDWBi%2BYgs5dqWsOORncc94QolP3xIUYWpHW%2FzF%2FsTVgtEKnXTVVnKdezgAHc7wPjr%2FJ%2B4WJSg1kXKyzQMaN332zN0JK1QPl5ZEX%2B1%2FbiU2OEz9Lw4Z8KEk5L3ZYwI8tv8f4gREQIGm4U7JBz%2FReJlP3ohS73yS58IrN%2BxlkNVQCPzF8DYc9bU8iquEk879eg4Ps9cySq2wd9LNMWLhMgUwYw22mgDQbmIWWGl3R37ECdwpdaxdT9AcaYklc9V9EpdSMMGlVFxQ1WSh3JE6oQ2ArCT3E4mQQ3d8dHuuCs5sL9%2BT%2Bdcp%2BEE8Pyd%2FoTXDb7B%2FS%2FGQWbktNW6ZnkYNSzSUFxG7hW4tg2izwYhJJT%2FBtOo4xKL5zWFJ7b8AG7BJGx95DxKPdzFmXyao0jCy1bruNDPq5IzA52DQ%2Fs79JS4VQh340YNh80dLx%2FWYMYN0PKKH07LxawF2N0HisM%2BZhjGDkUoXwQmZ439c2frI%2BtdOGViUuP43nkTf2FesfPEA9BZBsuc6iK0ZOKtfjm139GbKkQs15JleMkpEiLbQkj1eznYimt844%2BrKr91%2BpAcWSCaoYXpmYT9TeGjSML%2BMmL0GOqUB3vM8598T%2F8cEdwc45SIc0QJDoOQbvfvumtWDtzb%2BC6eGt7KU5qdM00d7iw046o7ynG9d6VImo69RHQXw2h7Z5SC2vcpoOB8pnWF3j8MjAS1N9UEQba1sMMAtI6c%2F1qyQk2ym66PhGsWlrldsAnZXGpB%2FG9WEGaHXPyoUqsXVr2DOjhWDm8%2FGUtDkQ9Akn3Hyi3niAM0gM472xp8hcXwhzdaKhpH%2B&X-Amz-Signature=ad33c5dcf161823e0962e743c8123a6a0d4b83f5bcdd61bcce194b490bca5a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCBQGGP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2Bn%2FoyDpazcWyMFfTJtdHrlToYLkPv5GBZGNUW%2Bs9RxAiEA%2Fs2eWok4xZez53XfK4W1JtBwZs9P2obLY6uMKsKur2Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHQEQQeVRJ9OtEzSFSrcA940Gh%2FnR2IJd2FHQpzv5X93KO9MNm92o%2BzE8kNcGUc3dvcDWBi%2BYgs5dqWsOORncc94QolP3xIUYWpHW%2FzF%2FsTVgtEKnXTVVnKdezgAHc7wPjr%2FJ%2B4WJSg1kXKyzQMaN332zN0JK1QPl5ZEX%2B1%2FbiU2OEz9Lw4Z8KEk5L3ZYwI8tv8f4gREQIGm4U7JBz%2FReJlP3ohS73yS58IrN%2BxlkNVQCPzF8DYc9bU8iquEk879eg4Ps9cySq2wd9LNMWLhMgUwYw22mgDQbmIWWGl3R37ECdwpdaxdT9AcaYklc9V9EpdSMMGlVFxQ1WSh3JE6oQ2ArCT3E4mQQ3d8dHuuCs5sL9%2BT%2Bdcp%2BEE8Pyd%2FoTXDb7B%2FS%2FGQWbktNW6ZnkYNSzSUFxG7hW4tg2izwYhJJT%2FBtOo4xKL5zWFJ7b8AG7BJGx95DxKPdzFmXyao0jCy1bruNDPq5IzA52DQ%2Fs79JS4VQh340YNh80dLx%2FWYMYN0PKKH07LxawF2N0HisM%2BZhjGDkUoXwQmZ439c2frI%2BtdOGViUuP43nkTf2FesfPEA9BZBsuc6iK0ZOKtfjm139GbKkQs15JleMkpEiLbQkj1eznYimt844%2BrKr91%2BpAcWSCaoYXpmYT9TeGjSML%2BMmL0GOqUB3vM8598T%2F8cEdwc45SIc0QJDoOQbvfvumtWDtzb%2BC6eGt7KU5qdM00d7iw046o7ynG9d6VImo69RHQXw2h7Z5SC2vcpoOB8pnWF3j8MjAS1N9UEQba1sMMAtI6c%2F1qyQk2ym66PhGsWlrldsAnZXGpB%2FG9WEGaHXPyoUqsXVr2DOjhWDm8%2FGUtDkQ9Akn3Hyi3niAM0gM472xp8hcXwhzdaKhpH%2B&X-Amz-Signature=e591c9645ebc3c1d4ff61a7b1cb660e4c417103a5fc5afa26105c2696eb559ac&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCBQGGP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2Bn%2FoyDpazcWyMFfTJtdHrlToYLkPv5GBZGNUW%2Bs9RxAiEA%2Fs2eWok4xZez53XfK4W1JtBwZs9P2obLY6uMKsKur2Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHQEQQeVRJ9OtEzSFSrcA940Gh%2FnR2IJd2FHQpzv5X93KO9MNm92o%2BzE8kNcGUc3dvcDWBi%2BYgs5dqWsOORncc94QolP3xIUYWpHW%2FzF%2FsTVgtEKnXTVVnKdezgAHc7wPjr%2FJ%2B4WJSg1kXKyzQMaN332zN0JK1QPl5ZEX%2B1%2FbiU2OEz9Lw4Z8KEk5L3ZYwI8tv8f4gREQIGm4U7JBz%2FReJlP3ohS73yS58IrN%2BxlkNVQCPzF8DYc9bU8iquEk879eg4Ps9cySq2wd9LNMWLhMgUwYw22mgDQbmIWWGl3R37ECdwpdaxdT9AcaYklc9V9EpdSMMGlVFxQ1WSh3JE6oQ2ArCT3E4mQQ3d8dHuuCs5sL9%2BT%2Bdcp%2BEE8Pyd%2FoTXDb7B%2FS%2FGQWbktNW6ZnkYNSzSUFxG7hW4tg2izwYhJJT%2FBtOo4xKL5zWFJ7b8AG7BJGx95DxKPdzFmXyao0jCy1bruNDPq5IzA52DQ%2Fs79JS4VQh340YNh80dLx%2FWYMYN0PKKH07LxawF2N0HisM%2BZhjGDkUoXwQmZ439c2frI%2BtdOGViUuP43nkTf2FesfPEA9BZBsuc6iK0ZOKtfjm139GbKkQs15JleMkpEiLbQkj1eznYimt844%2BrKr91%2BpAcWSCaoYXpmYT9TeGjSML%2BMmL0GOqUB3vM8598T%2F8cEdwc45SIc0QJDoOQbvfvumtWDtzb%2BC6eGt7KU5qdM00d7iw046o7ynG9d6VImo69RHQXw2h7Z5SC2vcpoOB8pnWF3j8MjAS1N9UEQba1sMMAtI6c%2F1qyQk2ym66PhGsWlrldsAnZXGpB%2FG9WEGaHXPyoUqsXVr2DOjhWDm8%2FGUtDkQ9Akn3Hyi3niAM0gM472xp8hcXwhzdaKhpH%2B&X-Amz-Signature=b39d54d73f74ce656b952639430d99cdd1baba6172fd8abaeb678a5747b89d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCBQGGP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2Bn%2FoyDpazcWyMFfTJtdHrlToYLkPv5GBZGNUW%2Bs9RxAiEA%2Fs2eWok4xZez53XfK4W1JtBwZs9P2obLY6uMKsKur2Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHQEQQeVRJ9OtEzSFSrcA940Gh%2FnR2IJd2FHQpzv5X93KO9MNm92o%2BzE8kNcGUc3dvcDWBi%2BYgs5dqWsOORncc94QolP3xIUYWpHW%2FzF%2FsTVgtEKnXTVVnKdezgAHc7wPjr%2FJ%2B4WJSg1kXKyzQMaN332zN0JK1QPl5ZEX%2B1%2FbiU2OEz9Lw4Z8KEk5L3ZYwI8tv8f4gREQIGm4U7JBz%2FReJlP3ohS73yS58IrN%2BxlkNVQCPzF8DYc9bU8iquEk879eg4Ps9cySq2wd9LNMWLhMgUwYw22mgDQbmIWWGl3R37ECdwpdaxdT9AcaYklc9V9EpdSMMGlVFxQ1WSh3JE6oQ2ArCT3E4mQQ3d8dHuuCs5sL9%2BT%2Bdcp%2BEE8Pyd%2FoTXDb7B%2FS%2FGQWbktNW6ZnkYNSzSUFxG7hW4tg2izwYhJJT%2FBtOo4xKL5zWFJ7b8AG7BJGx95DxKPdzFmXyao0jCy1bruNDPq5IzA52DQ%2Fs79JS4VQh340YNh80dLx%2FWYMYN0PKKH07LxawF2N0HisM%2BZhjGDkUoXwQmZ439c2frI%2BtdOGViUuP43nkTf2FesfPEA9BZBsuc6iK0ZOKtfjm139GbKkQs15JleMkpEiLbQkj1eznYimt844%2BrKr91%2BpAcWSCaoYXpmYT9TeGjSML%2BMmL0GOqUB3vM8598T%2F8cEdwc45SIc0QJDoOQbvfvumtWDtzb%2BC6eGt7KU5qdM00d7iw046o7ynG9d6VImo69RHQXw2h7Z5SC2vcpoOB8pnWF3j8MjAS1N9UEQba1sMMAtI6c%2F1qyQk2ym66PhGsWlrldsAnZXGpB%2FG9WEGaHXPyoUqsXVr2DOjhWDm8%2FGUtDkQ9Akn3Hyi3niAM0gM472xp8hcXwhzdaKhpH%2B&X-Amz-Signature=ea8f7c1eb909039b1d5000ed534d252859ce1a8246c86f32e3f2f596eca64f31&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCBQGGP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2Bn%2FoyDpazcWyMFfTJtdHrlToYLkPv5GBZGNUW%2Bs9RxAiEA%2Fs2eWok4xZez53XfK4W1JtBwZs9P2obLY6uMKsKur2Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHQEQQeVRJ9OtEzSFSrcA940Gh%2FnR2IJd2FHQpzv5X93KO9MNm92o%2BzE8kNcGUc3dvcDWBi%2BYgs5dqWsOORncc94QolP3xIUYWpHW%2FzF%2FsTVgtEKnXTVVnKdezgAHc7wPjr%2FJ%2B4WJSg1kXKyzQMaN332zN0JK1QPl5ZEX%2B1%2FbiU2OEz9Lw4Z8KEk5L3ZYwI8tv8f4gREQIGm4U7JBz%2FReJlP3ohS73yS58IrN%2BxlkNVQCPzF8DYc9bU8iquEk879eg4Ps9cySq2wd9LNMWLhMgUwYw22mgDQbmIWWGl3R37ECdwpdaxdT9AcaYklc9V9EpdSMMGlVFxQ1WSh3JE6oQ2ArCT3E4mQQ3d8dHuuCs5sL9%2BT%2Bdcp%2BEE8Pyd%2FoTXDb7B%2FS%2FGQWbktNW6ZnkYNSzSUFxG7hW4tg2izwYhJJT%2FBtOo4xKL5zWFJ7b8AG7BJGx95DxKPdzFmXyao0jCy1bruNDPq5IzA52DQ%2Fs79JS4VQh340YNh80dLx%2FWYMYN0PKKH07LxawF2N0HisM%2BZhjGDkUoXwQmZ439c2frI%2BtdOGViUuP43nkTf2FesfPEA9BZBsuc6iK0ZOKtfjm139GbKkQs15JleMkpEiLbQkj1eznYimt844%2BrKr91%2BpAcWSCaoYXpmYT9TeGjSML%2BMmL0GOqUB3vM8598T%2F8cEdwc45SIc0QJDoOQbvfvumtWDtzb%2BC6eGt7KU5qdM00d7iw046o7ynG9d6VImo69RHQXw2h7Z5SC2vcpoOB8pnWF3j8MjAS1N9UEQba1sMMAtI6c%2F1qyQk2ym66PhGsWlrldsAnZXGpB%2FG9WEGaHXPyoUqsXVr2DOjhWDm8%2FGUtDkQ9Akn3Hyi3niAM0gM472xp8hcXwhzdaKhpH%2B&X-Amz-Signature=7779dd27e9e3cbf795b907771e6a1d233c10d822ebb9bbaa9cf5dec4d108a9ba&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCBQGGP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2Bn%2FoyDpazcWyMFfTJtdHrlToYLkPv5GBZGNUW%2Bs9RxAiEA%2Fs2eWok4xZez53XfK4W1JtBwZs9P2obLY6uMKsKur2Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHQEQQeVRJ9OtEzSFSrcA940Gh%2FnR2IJd2FHQpzv5X93KO9MNm92o%2BzE8kNcGUc3dvcDWBi%2BYgs5dqWsOORncc94QolP3xIUYWpHW%2FzF%2FsTVgtEKnXTVVnKdezgAHc7wPjr%2FJ%2B4WJSg1kXKyzQMaN332zN0JK1QPl5ZEX%2B1%2FbiU2OEz9Lw4Z8KEk5L3ZYwI8tv8f4gREQIGm4U7JBz%2FReJlP3ohS73yS58IrN%2BxlkNVQCPzF8DYc9bU8iquEk879eg4Ps9cySq2wd9LNMWLhMgUwYw22mgDQbmIWWGl3R37ECdwpdaxdT9AcaYklc9V9EpdSMMGlVFxQ1WSh3JE6oQ2ArCT3E4mQQ3d8dHuuCs5sL9%2BT%2Bdcp%2BEE8Pyd%2FoTXDb7B%2FS%2FGQWbktNW6ZnkYNSzSUFxG7hW4tg2izwYhJJT%2FBtOo4xKL5zWFJ7b8AG7BJGx95DxKPdzFmXyao0jCy1bruNDPq5IzA52DQ%2Fs79JS4VQh340YNh80dLx%2FWYMYN0PKKH07LxawF2N0HisM%2BZhjGDkUoXwQmZ439c2frI%2BtdOGViUuP43nkTf2FesfPEA9BZBsuc6iK0ZOKtfjm139GbKkQs15JleMkpEiLbQkj1eznYimt844%2BrKr91%2BpAcWSCaoYXpmYT9TeGjSML%2BMmL0GOqUB3vM8598T%2F8cEdwc45SIc0QJDoOQbvfvumtWDtzb%2BC6eGt7KU5qdM00d7iw046o7ynG9d6VImo69RHQXw2h7Z5SC2vcpoOB8pnWF3j8MjAS1N9UEQba1sMMAtI6c%2F1qyQk2ym66PhGsWlrldsAnZXGpB%2FG9WEGaHXPyoUqsXVr2DOjhWDm8%2FGUtDkQ9Akn3Hyi3niAM0gM472xp8hcXwhzdaKhpH%2B&X-Amz-Signature=4415eadf3bfbed66e401329c695b0d77684f1dbc5a89c115cc9f62efae1b2a38&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
