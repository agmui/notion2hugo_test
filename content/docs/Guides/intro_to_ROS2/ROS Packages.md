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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJU7TMW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGyg1xz10sWLa4A3x3udApCBH8xgdAisMcZqezjFnxvYAiEAyJfgEugvr4SyqFzfRM9TpMjtY0SNcPZLkTLCC46ZWiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPsSgiFT8wuhYtvziSrcAwsBgIcU8vOQPeZf7o1XIqjlSCInxPNlOjMM6KlNu1ee9lP2bFaaRH2q4C4Szurj91YLJDXmYz%2F1JZu7QVouTziZY4ssZZ5zuQigSVajLfn9fxrfwtzbpWV3Xz2rjhLRuxBZwIO%2B1JBTgSyAk5tRrCkZJMUJ7wczjEemIsJ%2BjfBeZ8iM68uzF%2FK9HEJL14qUt7smyWzvlwbZ6qIJyin6nSSlO7X%2BEc2hiNk5ubtzKYDifY3A7zTi403Q6wRJmHwhYfILFEtTsQO%2BoXFZNVJctvjm95QBXUXkqlb%2F7AKEH8Uk8XKAlEKGBKgoBT16DSv5SxnVWLj6MVl8gzCKphPIKvexPP1QN%2Bf2WoUZg7p%2ByAjeuYWDIGBEW5Ymx7QmvuXDubUWmjUdCkq0tNQYzF%2BHxYrBaXPYioCqwkpbQ48NAac2112lUXlZxnxYgUGY0MFdIxXldUcFKnmIXplaiowWclgUq2UCXpVk3vjEBWMCuvp15KqpbrG3oHG%2BoMQkobW0EhjCjCVu%2BjtI1Uf7oDtoWHI2YlFLiArekKURL%2F9vkZB%2Fo5Jf5o7WB%2Bjci%2Bu0bE0iaXYxWZdAaH1eiFz1brmOlwB6BfHaizu4v3FC1LNA9VITqs9LveInMlJsMuvfMKPsn8MGOqUBktKmMDJGvEsRisiSlSZ%2FZUOALCqnpn74Aqd2GjPfRxp9KiM49nmZq1a630s5IcD%2Bfhrmk3uK7kWa8Zq0Sh9f6JGrPF%2BUgsARJPTCyfDcMvfTcF4IF30cWRB4kkytuE0OAQCtjhu0cYuxCYz%2FjeIv0imXzTZ0PVwmOcUQSb%2Fdh1xO2Gv01U68D7uw8BPt6IwQQDes%2FypUVp2QO8u9JWLudO2l2L1G&X-Amz-Signature=8042f7d0da6fa301595cfd4ee8d94637ab5e9b9d68e0f28117966fa6b43e91fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJU7TMW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGyg1xz10sWLa4A3x3udApCBH8xgdAisMcZqezjFnxvYAiEAyJfgEugvr4SyqFzfRM9TpMjtY0SNcPZLkTLCC46ZWiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPsSgiFT8wuhYtvziSrcAwsBgIcU8vOQPeZf7o1XIqjlSCInxPNlOjMM6KlNu1ee9lP2bFaaRH2q4C4Szurj91YLJDXmYz%2F1JZu7QVouTziZY4ssZZ5zuQigSVajLfn9fxrfwtzbpWV3Xz2rjhLRuxBZwIO%2B1JBTgSyAk5tRrCkZJMUJ7wczjEemIsJ%2BjfBeZ8iM68uzF%2FK9HEJL14qUt7smyWzvlwbZ6qIJyin6nSSlO7X%2BEc2hiNk5ubtzKYDifY3A7zTi403Q6wRJmHwhYfILFEtTsQO%2BoXFZNVJctvjm95QBXUXkqlb%2F7AKEH8Uk8XKAlEKGBKgoBT16DSv5SxnVWLj6MVl8gzCKphPIKvexPP1QN%2Bf2WoUZg7p%2ByAjeuYWDIGBEW5Ymx7QmvuXDubUWmjUdCkq0tNQYzF%2BHxYrBaXPYioCqwkpbQ48NAac2112lUXlZxnxYgUGY0MFdIxXldUcFKnmIXplaiowWclgUq2UCXpVk3vjEBWMCuvp15KqpbrG3oHG%2BoMQkobW0EhjCjCVu%2BjtI1Uf7oDtoWHI2YlFLiArekKURL%2F9vkZB%2Fo5Jf5o7WB%2Bjci%2Bu0bE0iaXYxWZdAaH1eiFz1brmOlwB6BfHaizu4v3FC1LNA9VITqs9LveInMlJsMuvfMKPsn8MGOqUBktKmMDJGvEsRisiSlSZ%2FZUOALCqnpn74Aqd2GjPfRxp9KiM49nmZq1a630s5IcD%2Bfhrmk3uK7kWa8Zq0Sh9f6JGrPF%2BUgsARJPTCyfDcMvfTcF4IF30cWRB4kkytuE0OAQCtjhu0cYuxCYz%2FjeIv0imXzTZ0PVwmOcUQSb%2Fdh1xO2Gv01U68D7uw8BPt6IwQQDes%2FypUVp2QO8u9JWLudO2l2L1G&X-Amz-Signature=4b8a87ae28182ab44d94a890eec52b6cfcf2e46939ad6b0130a0cf44e3350cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJU7TMW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGyg1xz10sWLa4A3x3udApCBH8xgdAisMcZqezjFnxvYAiEAyJfgEugvr4SyqFzfRM9TpMjtY0SNcPZLkTLCC46ZWiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPsSgiFT8wuhYtvziSrcAwsBgIcU8vOQPeZf7o1XIqjlSCInxPNlOjMM6KlNu1ee9lP2bFaaRH2q4C4Szurj91YLJDXmYz%2F1JZu7QVouTziZY4ssZZ5zuQigSVajLfn9fxrfwtzbpWV3Xz2rjhLRuxBZwIO%2B1JBTgSyAk5tRrCkZJMUJ7wczjEemIsJ%2BjfBeZ8iM68uzF%2FK9HEJL14qUt7smyWzvlwbZ6qIJyin6nSSlO7X%2BEc2hiNk5ubtzKYDifY3A7zTi403Q6wRJmHwhYfILFEtTsQO%2BoXFZNVJctvjm95QBXUXkqlb%2F7AKEH8Uk8XKAlEKGBKgoBT16DSv5SxnVWLj6MVl8gzCKphPIKvexPP1QN%2Bf2WoUZg7p%2ByAjeuYWDIGBEW5Ymx7QmvuXDubUWmjUdCkq0tNQYzF%2BHxYrBaXPYioCqwkpbQ48NAac2112lUXlZxnxYgUGY0MFdIxXldUcFKnmIXplaiowWclgUq2UCXpVk3vjEBWMCuvp15KqpbrG3oHG%2BoMQkobW0EhjCjCVu%2BjtI1Uf7oDtoWHI2YlFLiArekKURL%2F9vkZB%2Fo5Jf5o7WB%2Bjci%2Bu0bE0iaXYxWZdAaH1eiFz1brmOlwB6BfHaizu4v3FC1LNA9VITqs9LveInMlJsMuvfMKPsn8MGOqUBktKmMDJGvEsRisiSlSZ%2FZUOALCqnpn74Aqd2GjPfRxp9KiM49nmZq1a630s5IcD%2Bfhrmk3uK7kWa8Zq0Sh9f6JGrPF%2BUgsARJPTCyfDcMvfTcF4IF30cWRB4kkytuE0OAQCtjhu0cYuxCYz%2FjeIv0imXzTZ0PVwmOcUQSb%2Fdh1xO2Gv01U68D7uw8BPt6IwQQDes%2FypUVp2QO8u9JWLudO2l2L1G&X-Amz-Signature=c9c423b13e9121205416b1747fdf37dee6a7b2da930f4b8e9659dde6146a2512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJU7TMW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGyg1xz10sWLa4A3x3udApCBH8xgdAisMcZqezjFnxvYAiEAyJfgEugvr4SyqFzfRM9TpMjtY0SNcPZLkTLCC46ZWiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPsSgiFT8wuhYtvziSrcAwsBgIcU8vOQPeZf7o1XIqjlSCInxPNlOjMM6KlNu1ee9lP2bFaaRH2q4C4Szurj91YLJDXmYz%2F1JZu7QVouTziZY4ssZZ5zuQigSVajLfn9fxrfwtzbpWV3Xz2rjhLRuxBZwIO%2B1JBTgSyAk5tRrCkZJMUJ7wczjEemIsJ%2BjfBeZ8iM68uzF%2FK9HEJL14qUt7smyWzvlwbZ6qIJyin6nSSlO7X%2BEc2hiNk5ubtzKYDifY3A7zTi403Q6wRJmHwhYfILFEtTsQO%2BoXFZNVJctvjm95QBXUXkqlb%2F7AKEH8Uk8XKAlEKGBKgoBT16DSv5SxnVWLj6MVl8gzCKphPIKvexPP1QN%2Bf2WoUZg7p%2ByAjeuYWDIGBEW5Ymx7QmvuXDubUWmjUdCkq0tNQYzF%2BHxYrBaXPYioCqwkpbQ48NAac2112lUXlZxnxYgUGY0MFdIxXldUcFKnmIXplaiowWclgUq2UCXpVk3vjEBWMCuvp15KqpbrG3oHG%2BoMQkobW0EhjCjCVu%2BjtI1Uf7oDtoWHI2YlFLiArekKURL%2F9vkZB%2Fo5Jf5o7WB%2Bjci%2Bu0bE0iaXYxWZdAaH1eiFz1brmOlwB6BfHaizu4v3FC1LNA9VITqs9LveInMlJsMuvfMKPsn8MGOqUBktKmMDJGvEsRisiSlSZ%2FZUOALCqnpn74Aqd2GjPfRxp9KiM49nmZq1a630s5IcD%2Bfhrmk3uK7kWa8Zq0Sh9f6JGrPF%2BUgsARJPTCyfDcMvfTcF4IF30cWRB4kkytuE0OAQCtjhu0cYuxCYz%2FjeIv0imXzTZ0PVwmOcUQSb%2Fdh1xO2Gv01U68D7uw8BPt6IwQQDes%2FypUVp2QO8u9JWLudO2l2L1G&X-Amz-Signature=e8cc347331f8e134033801cb8073121a7e69af2296dcac7469f13d36326db164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJU7TMW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGyg1xz10sWLa4A3x3udApCBH8xgdAisMcZqezjFnxvYAiEAyJfgEugvr4SyqFzfRM9TpMjtY0SNcPZLkTLCC46ZWiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPsSgiFT8wuhYtvziSrcAwsBgIcU8vOQPeZf7o1XIqjlSCInxPNlOjMM6KlNu1ee9lP2bFaaRH2q4C4Szurj91YLJDXmYz%2F1JZu7QVouTziZY4ssZZ5zuQigSVajLfn9fxrfwtzbpWV3Xz2rjhLRuxBZwIO%2B1JBTgSyAk5tRrCkZJMUJ7wczjEemIsJ%2BjfBeZ8iM68uzF%2FK9HEJL14qUt7smyWzvlwbZ6qIJyin6nSSlO7X%2BEc2hiNk5ubtzKYDifY3A7zTi403Q6wRJmHwhYfILFEtTsQO%2BoXFZNVJctvjm95QBXUXkqlb%2F7AKEH8Uk8XKAlEKGBKgoBT16DSv5SxnVWLj6MVl8gzCKphPIKvexPP1QN%2Bf2WoUZg7p%2ByAjeuYWDIGBEW5Ymx7QmvuXDubUWmjUdCkq0tNQYzF%2BHxYrBaXPYioCqwkpbQ48NAac2112lUXlZxnxYgUGY0MFdIxXldUcFKnmIXplaiowWclgUq2UCXpVk3vjEBWMCuvp15KqpbrG3oHG%2BoMQkobW0EhjCjCVu%2BjtI1Uf7oDtoWHI2YlFLiArekKURL%2F9vkZB%2Fo5Jf5o7WB%2Bjci%2Bu0bE0iaXYxWZdAaH1eiFz1brmOlwB6BfHaizu4v3FC1LNA9VITqs9LveInMlJsMuvfMKPsn8MGOqUBktKmMDJGvEsRisiSlSZ%2FZUOALCqnpn74Aqd2GjPfRxp9KiM49nmZq1a630s5IcD%2Bfhrmk3uK7kWa8Zq0Sh9f6JGrPF%2BUgsARJPTCyfDcMvfTcF4IF30cWRB4kkytuE0OAQCtjhu0cYuxCYz%2FjeIv0imXzTZ0PVwmOcUQSb%2Fdh1xO2Gv01U68D7uw8BPt6IwQQDes%2FypUVp2QO8u9JWLudO2l2L1G&X-Amz-Signature=cb39ccfe87931c5217b0f5c9b5ac35149d35c3065c0c211d21d2d165b9d7cd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJU7TMW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGyg1xz10sWLa4A3x3udApCBH8xgdAisMcZqezjFnxvYAiEAyJfgEugvr4SyqFzfRM9TpMjtY0SNcPZLkTLCC46ZWiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPsSgiFT8wuhYtvziSrcAwsBgIcU8vOQPeZf7o1XIqjlSCInxPNlOjMM6KlNu1ee9lP2bFaaRH2q4C4Szurj91YLJDXmYz%2F1JZu7QVouTziZY4ssZZ5zuQigSVajLfn9fxrfwtzbpWV3Xz2rjhLRuxBZwIO%2B1JBTgSyAk5tRrCkZJMUJ7wczjEemIsJ%2BjfBeZ8iM68uzF%2FK9HEJL14qUt7smyWzvlwbZ6qIJyin6nSSlO7X%2BEc2hiNk5ubtzKYDifY3A7zTi403Q6wRJmHwhYfILFEtTsQO%2BoXFZNVJctvjm95QBXUXkqlb%2F7AKEH8Uk8XKAlEKGBKgoBT16DSv5SxnVWLj6MVl8gzCKphPIKvexPP1QN%2Bf2WoUZg7p%2ByAjeuYWDIGBEW5Ymx7QmvuXDubUWmjUdCkq0tNQYzF%2BHxYrBaXPYioCqwkpbQ48NAac2112lUXlZxnxYgUGY0MFdIxXldUcFKnmIXplaiowWclgUq2UCXpVk3vjEBWMCuvp15KqpbrG3oHG%2BoMQkobW0EhjCjCVu%2BjtI1Uf7oDtoWHI2YlFLiArekKURL%2F9vkZB%2Fo5Jf5o7WB%2Bjci%2Bu0bE0iaXYxWZdAaH1eiFz1brmOlwB6BfHaizu4v3FC1LNA9VITqs9LveInMlJsMuvfMKPsn8MGOqUBktKmMDJGvEsRisiSlSZ%2FZUOALCqnpn74Aqd2GjPfRxp9KiM49nmZq1a630s5IcD%2Bfhrmk3uK7kWa8Zq0Sh9f6JGrPF%2BUgsARJPTCyfDcMvfTcF4IF30cWRB4kkytuE0OAQCtjhu0cYuxCYz%2FjeIv0imXzTZ0PVwmOcUQSb%2Fdh1xO2Gv01U68D7uw8BPt6IwQQDes%2FypUVp2QO8u9JWLudO2l2L1G&X-Amz-Signature=d2a24b9f64536d5684466a7749c24ba856a4560f11a9f07ea4d66393fcbde6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJU7TMW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGyg1xz10sWLa4A3x3udApCBH8xgdAisMcZqezjFnxvYAiEAyJfgEugvr4SyqFzfRM9TpMjtY0SNcPZLkTLCC46ZWiIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPsSgiFT8wuhYtvziSrcAwsBgIcU8vOQPeZf7o1XIqjlSCInxPNlOjMM6KlNu1ee9lP2bFaaRH2q4C4Szurj91YLJDXmYz%2F1JZu7QVouTziZY4ssZZ5zuQigSVajLfn9fxrfwtzbpWV3Xz2rjhLRuxBZwIO%2B1JBTgSyAk5tRrCkZJMUJ7wczjEemIsJ%2BjfBeZ8iM68uzF%2FK9HEJL14qUt7smyWzvlwbZ6qIJyin6nSSlO7X%2BEc2hiNk5ubtzKYDifY3A7zTi403Q6wRJmHwhYfILFEtTsQO%2BoXFZNVJctvjm95QBXUXkqlb%2F7AKEH8Uk8XKAlEKGBKgoBT16DSv5SxnVWLj6MVl8gzCKphPIKvexPP1QN%2Bf2WoUZg7p%2ByAjeuYWDIGBEW5Ymx7QmvuXDubUWmjUdCkq0tNQYzF%2BHxYrBaXPYioCqwkpbQ48NAac2112lUXlZxnxYgUGY0MFdIxXldUcFKnmIXplaiowWclgUq2UCXpVk3vjEBWMCuvp15KqpbrG3oHG%2BoMQkobW0EhjCjCVu%2BjtI1Uf7oDtoWHI2YlFLiArekKURL%2F9vkZB%2Fo5Jf5o7WB%2Bjci%2Bu0bE0iaXYxWZdAaH1eiFz1brmOlwB6BfHaizu4v3FC1LNA9VITqs9LveInMlJsMuvfMKPsn8MGOqUBktKmMDJGvEsRisiSlSZ%2FZUOALCqnpn74Aqd2GjPfRxp9KiM49nmZq1a630s5IcD%2Bfhrmk3uK7kWa8Zq0Sh9f6JGrPF%2BUgsARJPTCyfDcMvfTcF4IF30cWRB4kkytuE0OAQCtjhu0cYuxCYz%2FjeIv0imXzTZ0PVwmOcUQSb%2Fdh1xO2Gv01U68D7uw8BPt6IwQQDes%2FypUVp2QO8u9JWLudO2l2L1G&X-Amz-Signature=2a9980f7e4daa076117ce23ab930990a9b1e73457a818ffb07cb89452a91d4a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
