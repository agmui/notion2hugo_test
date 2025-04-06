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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YOUUPI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP6eknOfNbnAwNP7wruSp5UrnI5hwvNOcCh7pXSiHNvAIgJcV2J8Z4281YhB6UCAP%2BIgcU1yU7AeeJ1LelzZaFrIoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM8bdeoRLMptwbajBircA0HbhsTXbIiOHjAC06rWbuqcumq2mDe2Fh%2FbWndZ%2F4z6ixtzm5aa0RUgJklOjA%2FzX2QqGvE2Wly0rhI0LX%2BczH142xrrccXvBvWxdicgyqwAD3ZgF1sGtA9V5BfCku3ZuE1HdlHe%2Fi8ieUpeBS4qREBXpqetMIAEJ8XIseqGf2xJTnTjFsjsMlbGzvLvhrg7KFxxG4ja%2FgKrYCHSWbIPUH9SAX6Fhsuzp86t6sba7zILfc0ddF5BgJLYriCbaAgVx1khPsMT38M7RICTmnXzIMtbNBMYUR%2B6gZcPq27yUjFpVKvfBXnua5NcXjoypZxONDhcWXHZxfGBOV8HbbxLxUu2wTDuraN88rmhNzfLAdBeoX6Slxhtd%2BMY5f4FZyCp%2BT6BP%2FRolFiEDW9rDTloK4bfmqSabZrfjNvgj8XsGYaceoFdgC7vSXx4uOvrtXGtomGysTp5w60mQplK3PAER%2B8bI8VwoSpqHvVqQTe033VpMB6GpJtj2gBUnfUGwxXyAncoaZ3uZW8180uBPqR5NVi%2FNnjGlHgmctQD3o7R4qQA6Jy9VeEgot9SLe3jTpujXcRnZZNDojGGzeJBjlzYMMjTHX4W9YzPD9ACjsBWrH4UzelUGOuWRsYt4CrvMNr%2Fx78GOqUB2jYneIEt4U%2BaQjUFZNxJhk%2FbqbfIqZryZFZ9CywKdjn0bpGwJbyx4ws3pvhCtnGsvqF7Vq4bcJct6v6l82IwaCH%2F1Hh6wcJ1pH4ZvEC85DfDaV397JgXt8MHufhsoLEy36smpbnod1wSMcaYZJoxmSdhvOfV4w2Y%2FxS2Dvu5Ps3AlnA2BV8nl8mT5SwaHwru2aqXaemlCcXutk39lX4R8vwpuI7T&X-Amz-Signature=9879c2ee133c4bc8901869638f6f916cc298fdb021b684b327b45bcc7e97d978&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YOUUPI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP6eknOfNbnAwNP7wruSp5UrnI5hwvNOcCh7pXSiHNvAIgJcV2J8Z4281YhB6UCAP%2BIgcU1yU7AeeJ1LelzZaFrIoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM8bdeoRLMptwbajBircA0HbhsTXbIiOHjAC06rWbuqcumq2mDe2Fh%2FbWndZ%2F4z6ixtzm5aa0RUgJklOjA%2FzX2QqGvE2Wly0rhI0LX%2BczH142xrrccXvBvWxdicgyqwAD3ZgF1sGtA9V5BfCku3ZuE1HdlHe%2Fi8ieUpeBS4qREBXpqetMIAEJ8XIseqGf2xJTnTjFsjsMlbGzvLvhrg7KFxxG4ja%2FgKrYCHSWbIPUH9SAX6Fhsuzp86t6sba7zILfc0ddF5BgJLYriCbaAgVx1khPsMT38M7RICTmnXzIMtbNBMYUR%2B6gZcPq27yUjFpVKvfBXnua5NcXjoypZxONDhcWXHZxfGBOV8HbbxLxUu2wTDuraN88rmhNzfLAdBeoX6Slxhtd%2BMY5f4FZyCp%2BT6BP%2FRolFiEDW9rDTloK4bfmqSabZrfjNvgj8XsGYaceoFdgC7vSXx4uOvrtXGtomGysTp5w60mQplK3PAER%2B8bI8VwoSpqHvVqQTe033VpMB6GpJtj2gBUnfUGwxXyAncoaZ3uZW8180uBPqR5NVi%2FNnjGlHgmctQD3o7R4qQA6Jy9VeEgot9SLe3jTpujXcRnZZNDojGGzeJBjlzYMMjTHX4W9YzPD9ACjsBWrH4UzelUGOuWRsYt4CrvMNr%2Fx78GOqUB2jYneIEt4U%2BaQjUFZNxJhk%2FbqbfIqZryZFZ9CywKdjn0bpGwJbyx4ws3pvhCtnGsvqF7Vq4bcJct6v6l82IwaCH%2F1Hh6wcJ1pH4ZvEC85DfDaV397JgXt8MHufhsoLEy36smpbnod1wSMcaYZJoxmSdhvOfV4w2Y%2FxS2Dvu5Ps3AlnA2BV8nl8mT5SwaHwru2aqXaemlCcXutk39lX4R8vwpuI7T&X-Amz-Signature=d10f988a8773dcf01f03c54c8e4af403d3632918740359e38473f9fa0b09d6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YOUUPI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP6eknOfNbnAwNP7wruSp5UrnI5hwvNOcCh7pXSiHNvAIgJcV2J8Z4281YhB6UCAP%2BIgcU1yU7AeeJ1LelzZaFrIoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM8bdeoRLMptwbajBircA0HbhsTXbIiOHjAC06rWbuqcumq2mDe2Fh%2FbWndZ%2F4z6ixtzm5aa0RUgJklOjA%2FzX2QqGvE2Wly0rhI0LX%2BczH142xrrccXvBvWxdicgyqwAD3ZgF1sGtA9V5BfCku3ZuE1HdlHe%2Fi8ieUpeBS4qREBXpqetMIAEJ8XIseqGf2xJTnTjFsjsMlbGzvLvhrg7KFxxG4ja%2FgKrYCHSWbIPUH9SAX6Fhsuzp86t6sba7zILfc0ddF5BgJLYriCbaAgVx1khPsMT38M7RICTmnXzIMtbNBMYUR%2B6gZcPq27yUjFpVKvfBXnua5NcXjoypZxONDhcWXHZxfGBOV8HbbxLxUu2wTDuraN88rmhNzfLAdBeoX6Slxhtd%2BMY5f4FZyCp%2BT6BP%2FRolFiEDW9rDTloK4bfmqSabZrfjNvgj8XsGYaceoFdgC7vSXx4uOvrtXGtomGysTp5w60mQplK3PAER%2B8bI8VwoSpqHvVqQTe033VpMB6GpJtj2gBUnfUGwxXyAncoaZ3uZW8180uBPqR5NVi%2FNnjGlHgmctQD3o7R4qQA6Jy9VeEgot9SLe3jTpujXcRnZZNDojGGzeJBjlzYMMjTHX4W9YzPD9ACjsBWrH4UzelUGOuWRsYt4CrvMNr%2Fx78GOqUB2jYneIEt4U%2BaQjUFZNxJhk%2FbqbfIqZryZFZ9CywKdjn0bpGwJbyx4ws3pvhCtnGsvqF7Vq4bcJct6v6l82IwaCH%2F1Hh6wcJ1pH4ZvEC85DfDaV397JgXt8MHufhsoLEy36smpbnod1wSMcaYZJoxmSdhvOfV4w2Y%2FxS2Dvu5Ps3AlnA2BV8nl8mT5SwaHwru2aqXaemlCcXutk39lX4R8vwpuI7T&X-Amz-Signature=a3bfa6fc031fe6806f377e2c9ddfbb5b8bcca76d08a077f6e9241d94ecb1cb47&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YOUUPI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP6eknOfNbnAwNP7wruSp5UrnI5hwvNOcCh7pXSiHNvAIgJcV2J8Z4281YhB6UCAP%2BIgcU1yU7AeeJ1LelzZaFrIoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM8bdeoRLMptwbajBircA0HbhsTXbIiOHjAC06rWbuqcumq2mDe2Fh%2FbWndZ%2F4z6ixtzm5aa0RUgJklOjA%2FzX2QqGvE2Wly0rhI0LX%2BczH142xrrccXvBvWxdicgyqwAD3ZgF1sGtA9V5BfCku3ZuE1HdlHe%2Fi8ieUpeBS4qREBXpqetMIAEJ8XIseqGf2xJTnTjFsjsMlbGzvLvhrg7KFxxG4ja%2FgKrYCHSWbIPUH9SAX6Fhsuzp86t6sba7zILfc0ddF5BgJLYriCbaAgVx1khPsMT38M7RICTmnXzIMtbNBMYUR%2B6gZcPq27yUjFpVKvfBXnua5NcXjoypZxONDhcWXHZxfGBOV8HbbxLxUu2wTDuraN88rmhNzfLAdBeoX6Slxhtd%2BMY5f4FZyCp%2BT6BP%2FRolFiEDW9rDTloK4bfmqSabZrfjNvgj8XsGYaceoFdgC7vSXx4uOvrtXGtomGysTp5w60mQplK3PAER%2B8bI8VwoSpqHvVqQTe033VpMB6GpJtj2gBUnfUGwxXyAncoaZ3uZW8180uBPqR5NVi%2FNnjGlHgmctQD3o7R4qQA6Jy9VeEgot9SLe3jTpujXcRnZZNDojGGzeJBjlzYMMjTHX4W9YzPD9ACjsBWrH4UzelUGOuWRsYt4CrvMNr%2Fx78GOqUB2jYneIEt4U%2BaQjUFZNxJhk%2FbqbfIqZryZFZ9CywKdjn0bpGwJbyx4ws3pvhCtnGsvqF7Vq4bcJct6v6l82IwaCH%2F1Hh6wcJ1pH4ZvEC85DfDaV397JgXt8MHufhsoLEy36smpbnod1wSMcaYZJoxmSdhvOfV4w2Y%2FxS2Dvu5Ps3AlnA2BV8nl8mT5SwaHwru2aqXaemlCcXutk39lX4R8vwpuI7T&X-Amz-Signature=32c90e6b33068e1b4e85c8167fe01fcd5edf891dae6deaabacc89ed933b14cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YOUUPI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP6eknOfNbnAwNP7wruSp5UrnI5hwvNOcCh7pXSiHNvAIgJcV2J8Z4281YhB6UCAP%2BIgcU1yU7AeeJ1LelzZaFrIoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM8bdeoRLMptwbajBircA0HbhsTXbIiOHjAC06rWbuqcumq2mDe2Fh%2FbWndZ%2F4z6ixtzm5aa0RUgJklOjA%2FzX2QqGvE2Wly0rhI0LX%2BczH142xrrccXvBvWxdicgyqwAD3ZgF1sGtA9V5BfCku3ZuE1HdlHe%2Fi8ieUpeBS4qREBXpqetMIAEJ8XIseqGf2xJTnTjFsjsMlbGzvLvhrg7KFxxG4ja%2FgKrYCHSWbIPUH9SAX6Fhsuzp86t6sba7zILfc0ddF5BgJLYriCbaAgVx1khPsMT38M7RICTmnXzIMtbNBMYUR%2B6gZcPq27yUjFpVKvfBXnua5NcXjoypZxONDhcWXHZxfGBOV8HbbxLxUu2wTDuraN88rmhNzfLAdBeoX6Slxhtd%2BMY5f4FZyCp%2BT6BP%2FRolFiEDW9rDTloK4bfmqSabZrfjNvgj8XsGYaceoFdgC7vSXx4uOvrtXGtomGysTp5w60mQplK3PAER%2B8bI8VwoSpqHvVqQTe033VpMB6GpJtj2gBUnfUGwxXyAncoaZ3uZW8180uBPqR5NVi%2FNnjGlHgmctQD3o7R4qQA6Jy9VeEgot9SLe3jTpujXcRnZZNDojGGzeJBjlzYMMjTHX4W9YzPD9ACjsBWrH4UzelUGOuWRsYt4CrvMNr%2Fx78GOqUB2jYneIEt4U%2BaQjUFZNxJhk%2FbqbfIqZryZFZ9CywKdjn0bpGwJbyx4ws3pvhCtnGsvqF7Vq4bcJct6v6l82IwaCH%2F1Hh6wcJ1pH4ZvEC85DfDaV397JgXt8MHufhsoLEy36smpbnod1wSMcaYZJoxmSdhvOfV4w2Y%2FxS2Dvu5Ps3AlnA2BV8nl8mT5SwaHwru2aqXaemlCcXutk39lX4R8vwpuI7T&X-Amz-Signature=193777d45772639697b554502b58fde665aa5881726e7db3bc865f43e5301df4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YOUUPI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP6eknOfNbnAwNP7wruSp5UrnI5hwvNOcCh7pXSiHNvAIgJcV2J8Z4281YhB6UCAP%2BIgcU1yU7AeeJ1LelzZaFrIoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM8bdeoRLMptwbajBircA0HbhsTXbIiOHjAC06rWbuqcumq2mDe2Fh%2FbWndZ%2F4z6ixtzm5aa0RUgJklOjA%2FzX2QqGvE2Wly0rhI0LX%2BczH142xrrccXvBvWxdicgyqwAD3ZgF1sGtA9V5BfCku3ZuE1HdlHe%2Fi8ieUpeBS4qREBXpqetMIAEJ8XIseqGf2xJTnTjFsjsMlbGzvLvhrg7KFxxG4ja%2FgKrYCHSWbIPUH9SAX6Fhsuzp86t6sba7zILfc0ddF5BgJLYriCbaAgVx1khPsMT38M7RICTmnXzIMtbNBMYUR%2B6gZcPq27yUjFpVKvfBXnua5NcXjoypZxONDhcWXHZxfGBOV8HbbxLxUu2wTDuraN88rmhNzfLAdBeoX6Slxhtd%2BMY5f4FZyCp%2BT6BP%2FRolFiEDW9rDTloK4bfmqSabZrfjNvgj8XsGYaceoFdgC7vSXx4uOvrtXGtomGysTp5w60mQplK3PAER%2B8bI8VwoSpqHvVqQTe033VpMB6GpJtj2gBUnfUGwxXyAncoaZ3uZW8180uBPqR5NVi%2FNnjGlHgmctQD3o7R4qQA6Jy9VeEgot9SLe3jTpujXcRnZZNDojGGzeJBjlzYMMjTHX4W9YzPD9ACjsBWrH4UzelUGOuWRsYt4CrvMNr%2Fx78GOqUB2jYneIEt4U%2BaQjUFZNxJhk%2FbqbfIqZryZFZ9CywKdjn0bpGwJbyx4ws3pvhCtnGsvqF7Vq4bcJct6v6l82IwaCH%2F1Hh6wcJ1pH4ZvEC85DfDaV397JgXt8MHufhsoLEy36smpbnod1wSMcaYZJoxmSdhvOfV4w2Y%2FxS2Dvu5Ps3AlnA2BV8nl8mT5SwaHwru2aqXaemlCcXutk39lX4R8vwpuI7T&X-Amz-Signature=072b57a9a8f25e11f2992a8fb124125f43de48ed8567d8eef0e62876d19c0845&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YOUUPI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP6eknOfNbnAwNP7wruSp5UrnI5hwvNOcCh7pXSiHNvAIgJcV2J8Z4281YhB6UCAP%2BIgcU1yU7AeeJ1LelzZaFrIoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM8bdeoRLMptwbajBircA0HbhsTXbIiOHjAC06rWbuqcumq2mDe2Fh%2FbWndZ%2F4z6ixtzm5aa0RUgJklOjA%2FzX2QqGvE2Wly0rhI0LX%2BczH142xrrccXvBvWxdicgyqwAD3ZgF1sGtA9V5BfCku3ZuE1HdlHe%2Fi8ieUpeBS4qREBXpqetMIAEJ8XIseqGf2xJTnTjFsjsMlbGzvLvhrg7KFxxG4ja%2FgKrYCHSWbIPUH9SAX6Fhsuzp86t6sba7zILfc0ddF5BgJLYriCbaAgVx1khPsMT38M7RICTmnXzIMtbNBMYUR%2B6gZcPq27yUjFpVKvfBXnua5NcXjoypZxONDhcWXHZxfGBOV8HbbxLxUu2wTDuraN88rmhNzfLAdBeoX6Slxhtd%2BMY5f4FZyCp%2BT6BP%2FRolFiEDW9rDTloK4bfmqSabZrfjNvgj8XsGYaceoFdgC7vSXx4uOvrtXGtomGysTp5w60mQplK3PAER%2B8bI8VwoSpqHvVqQTe033VpMB6GpJtj2gBUnfUGwxXyAncoaZ3uZW8180uBPqR5NVi%2FNnjGlHgmctQD3o7R4qQA6Jy9VeEgot9SLe3jTpujXcRnZZNDojGGzeJBjlzYMMjTHX4W9YzPD9ACjsBWrH4UzelUGOuWRsYt4CrvMNr%2Fx78GOqUB2jYneIEt4U%2BaQjUFZNxJhk%2FbqbfIqZryZFZ9CywKdjn0bpGwJbyx4ws3pvhCtnGsvqF7Vq4bcJct6v6l82IwaCH%2F1Hh6wcJ1pH4ZvEC85DfDaV397JgXt8MHufhsoLEy36smpbnod1wSMcaYZJoxmSdhvOfV4w2Y%2FxS2Dvu5Ps3AlnA2BV8nl8mT5SwaHwru2aqXaemlCcXutk39lX4R8vwpuI7T&X-Amz-Signature=9359161530b2d86d053bdfe4c90189b59764760ff54acdebb6e1579d9298fc8e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
