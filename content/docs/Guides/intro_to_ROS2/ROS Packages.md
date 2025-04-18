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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKRDSON%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1DlRRwN5VH%2B5%2BpJF6oidGhiWYIBUwlsYlrxEQ6zduUAiEA%2B3rCEgrfqZVhCRPwQwcUXi6E9A30plr4f6hpida8rWMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL%2FsNX8T26NPjJLvNCrcAxFIVBTwly%2Ba9NMmqn4hkaJbnsKmDIYXpo2e8LVmz%2BTOmB2B3R%2Fl4L4SIRNy2A3R%2FtShf5mRuDkXb3LlgSTA9%2BKNXdFOkN9QJGABPQYQjcfx2%2BTb2AWHEgm03uyx6HTzd8tXFX%2BEQYt1kDpHkrlMwzhj%2FOQa1%2FfJg2IduUM6CHFuaYlelnkRhySvbRuPR%2FKDCb6L7czOkgoLIXwDmrr69vY079zR0YfqJMLfJP2DKH0f8GD25BWh02CkcmvjykSYQCUsrbI7ujvxwzMx3gK0QQqPTKeDt8VXjTE0CeR7xorgT5OY1GqyCyDMbjfYhu5hB0gDqgWOEAvnUN8n0BWQwvNmjQu%2FbwoQ4vmwBSTcTDgF7S4Qu2pw8qnFMpHtRcpWlAFzUgDaEbSeANFP6%2BMCRFZHGVyoMXBf%2BFN7HKi4pbZCsq5%2BPAaH5mcfw9KXjU02PFhbJILzjHzZwB4iT%2FyQ6MTjG6hObfrsbSGKZ%2Blnv7hhH2n9R9ynxHPQ01vzWs8uXTZp%2FlhOL%2BIGc6BI1EI4Oq8y0MoHC%2B0BCvPlaSjqVrCxIzWLoUN0EZ6W3Glks5REnbfTDVZm%2Bi44Wch1naz2XyEB8aTBEfQUvz3vq8CeYxH8YgehXp1IibLQmpeJMIGTiMAGOqUBSM4Pj3Ts8urjcE5Z7Tp7uSX4%2FnFOaUibr3%2Fu8LbZr7oTiolg8iSEl%2B%2F4LrMs70L9jyiHQR6E5P2RTxNg44guadM1lnJ5fXOaP9yxHNLJPwRqna%2FxRu0%2F7uMSlONGaKhDSn6Vak3Nh8%2FAFYGYWsRd9aWZg%2BS44qqutM%2FR7U4xBQqyuc655LOUavGdys6A5PMnkbBqm3i2k%2FO6GMe1NKEwjVIzV6Aa&X-Amz-Signature=93ee20b8a65cee3cca7bd92e31b1dd8c53ffa33f93b1cbdb8338a5854784e65e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKRDSON%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1DlRRwN5VH%2B5%2BpJF6oidGhiWYIBUwlsYlrxEQ6zduUAiEA%2B3rCEgrfqZVhCRPwQwcUXi6E9A30plr4f6hpida8rWMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL%2FsNX8T26NPjJLvNCrcAxFIVBTwly%2Ba9NMmqn4hkaJbnsKmDIYXpo2e8LVmz%2BTOmB2B3R%2Fl4L4SIRNy2A3R%2FtShf5mRuDkXb3LlgSTA9%2BKNXdFOkN9QJGABPQYQjcfx2%2BTb2AWHEgm03uyx6HTzd8tXFX%2BEQYt1kDpHkrlMwzhj%2FOQa1%2FfJg2IduUM6CHFuaYlelnkRhySvbRuPR%2FKDCb6L7czOkgoLIXwDmrr69vY079zR0YfqJMLfJP2DKH0f8GD25BWh02CkcmvjykSYQCUsrbI7ujvxwzMx3gK0QQqPTKeDt8VXjTE0CeR7xorgT5OY1GqyCyDMbjfYhu5hB0gDqgWOEAvnUN8n0BWQwvNmjQu%2FbwoQ4vmwBSTcTDgF7S4Qu2pw8qnFMpHtRcpWlAFzUgDaEbSeANFP6%2BMCRFZHGVyoMXBf%2BFN7HKi4pbZCsq5%2BPAaH5mcfw9KXjU02PFhbJILzjHzZwB4iT%2FyQ6MTjG6hObfrsbSGKZ%2Blnv7hhH2n9R9ynxHPQ01vzWs8uXTZp%2FlhOL%2BIGc6BI1EI4Oq8y0MoHC%2B0BCvPlaSjqVrCxIzWLoUN0EZ6W3Glks5REnbfTDVZm%2Bi44Wch1naz2XyEB8aTBEfQUvz3vq8CeYxH8YgehXp1IibLQmpeJMIGTiMAGOqUBSM4Pj3Ts8urjcE5Z7Tp7uSX4%2FnFOaUibr3%2Fu8LbZr7oTiolg8iSEl%2B%2F4LrMs70L9jyiHQR6E5P2RTxNg44guadM1lnJ5fXOaP9yxHNLJPwRqna%2FxRu0%2F7uMSlONGaKhDSn6Vak3Nh8%2FAFYGYWsRd9aWZg%2BS44qqutM%2FR7U4xBQqyuc655LOUavGdys6A5PMnkbBqm3i2k%2FO6GMe1NKEwjVIzV6Aa&X-Amz-Signature=9eb76a5e554a2d2990efa1476d96b76767ac5f3b7e0b2f6d1518395959f45214&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKRDSON%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1DlRRwN5VH%2B5%2BpJF6oidGhiWYIBUwlsYlrxEQ6zduUAiEA%2B3rCEgrfqZVhCRPwQwcUXi6E9A30plr4f6hpida8rWMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL%2FsNX8T26NPjJLvNCrcAxFIVBTwly%2Ba9NMmqn4hkaJbnsKmDIYXpo2e8LVmz%2BTOmB2B3R%2Fl4L4SIRNy2A3R%2FtShf5mRuDkXb3LlgSTA9%2BKNXdFOkN9QJGABPQYQjcfx2%2BTb2AWHEgm03uyx6HTzd8tXFX%2BEQYt1kDpHkrlMwzhj%2FOQa1%2FfJg2IduUM6CHFuaYlelnkRhySvbRuPR%2FKDCb6L7czOkgoLIXwDmrr69vY079zR0YfqJMLfJP2DKH0f8GD25BWh02CkcmvjykSYQCUsrbI7ujvxwzMx3gK0QQqPTKeDt8VXjTE0CeR7xorgT5OY1GqyCyDMbjfYhu5hB0gDqgWOEAvnUN8n0BWQwvNmjQu%2FbwoQ4vmwBSTcTDgF7S4Qu2pw8qnFMpHtRcpWlAFzUgDaEbSeANFP6%2BMCRFZHGVyoMXBf%2BFN7HKi4pbZCsq5%2BPAaH5mcfw9KXjU02PFhbJILzjHzZwB4iT%2FyQ6MTjG6hObfrsbSGKZ%2Blnv7hhH2n9R9ynxHPQ01vzWs8uXTZp%2FlhOL%2BIGc6BI1EI4Oq8y0MoHC%2B0BCvPlaSjqVrCxIzWLoUN0EZ6W3Glks5REnbfTDVZm%2Bi44Wch1naz2XyEB8aTBEfQUvz3vq8CeYxH8YgehXp1IibLQmpeJMIGTiMAGOqUBSM4Pj3Ts8urjcE5Z7Tp7uSX4%2FnFOaUibr3%2Fu8LbZr7oTiolg8iSEl%2B%2F4LrMs70L9jyiHQR6E5P2RTxNg44guadM1lnJ5fXOaP9yxHNLJPwRqna%2FxRu0%2F7uMSlONGaKhDSn6Vak3Nh8%2FAFYGYWsRd9aWZg%2BS44qqutM%2FR7U4xBQqyuc655LOUavGdys6A5PMnkbBqm3i2k%2FO6GMe1NKEwjVIzV6Aa&X-Amz-Signature=e83ebf2f2431f329690f49b35dff2272f715c6f895b684fffc822eb37553df10&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKRDSON%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1DlRRwN5VH%2B5%2BpJF6oidGhiWYIBUwlsYlrxEQ6zduUAiEA%2B3rCEgrfqZVhCRPwQwcUXi6E9A30plr4f6hpida8rWMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL%2FsNX8T26NPjJLvNCrcAxFIVBTwly%2Ba9NMmqn4hkaJbnsKmDIYXpo2e8LVmz%2BTOmB2B3R%2Fl4L4SIRNy2A3R%2FtShf5mRuDkXb3LlgSTA9%2BKNXdFOkN9QJGABPQYQjcfx2%2BTb2AWHEgm03uyx6HTzd8tXFX%2BEQYt1kDpHkrlMwzhj%2FOQa1%2FfJg2IduUM6CHFuaYlelnkRhySvbRuPR%2FKDCb6L7czOkgoLIXwDmrr69vY079zR0YfqJMLfJP2DKH0f8GD25BWh02CkcmvjykSYQCUsrbI7ujvxwzMx3gK0QQqPTKeDt8VXjTE0CeR7xorgT5OY1GqyCyDMbjfYhu5hB0gDqgWOEAvnUN8n0BWQwvNmjQu%2FbwoQ4vmwBSTcTDgF7S4Qu2pw8qnFMpHtRcpWlAFzUgDaEbSeANFP6%2BMCRFZHGVyoMXBf%2BFN7HKi4pbZCsq5%2BPAaH5mcfw9KXjU02PFhbJILzjHzZwB4iT%2FyQ6MTjG6hObfrsbSGKZ%2Blnv7hhH2n9R9ynxHPQ01vzWs8uXTZp%2FlhOL%2BIGc6BI1EI4Oq8y0MoHC%2B0BCvPlaSjqVrCxIzWLoUN0EZ6W3Glks5REnbfTDVZm%2Bi44Wch1naz2XyEB8aTBEfQUvz3vq8CeYxH8YgehXp1IibLQmpeJMIGTiMAGOqUBSM4Pj3Ts8urjcE5Z7Tp7uSX4%2FnFOaUibr3%2Fu8LbZr7oTiolg8iSEl%2B%2F4LrMs70L9jyiHQR6E5P2RTxNg44guadM1lnJ5fXOaP9yxHNLJPwRqna%2FxRu0%2F7uMSlONGaKhDSn6Vak3Nh8%2FAFYGYWsRd9aWZg%2BS44qqutM%2FR7U4xBQqyuc655LOUavGdys6A5PMnkbBqm3i2k%2FO6GMe1NKEwjVIzV6Aa&X-Amz-Signature=bf68ce0b1c198bd085b551e78e41e478de6a33ac7484c59fbdaadccb61aa4e34&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKRDSON%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1DlRRwN5VH%2B5%2BpJF6oidGhiWYIBUwlsYlrxEQ6zduUAiEA%2B3rCEgrfqZVhCRPwQwcUXi6E9A30plr4f6hpida8rWMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL%2FsNX8T26NPjJLvNCrcAxFIVBTwly%2Ba9NMmqn4hkaJbnsKmDIYXpo2e8LVmz%2BTOmB2B3R%2Fl4L4SIRNy2A3R%2FtShf5mRuDkXb3LlgSTA9%2BKNXdFOkN9QJGABPQYQjcfx2%2BTb2AWHEgm03uyx6HTzd8tXFX%2BEQYt1kDpHkrlMwzhj%2FOQa1%2FfJg2IduUM6CHFuaYlelnkRhySvbRuPR%2FKDCb6L7czOkgoLIXwDmrr69vY079zR0YfqJMLfJP2DKH0f8GD25BWh02CkcmvjykSYQCUsrbI7ujvxwzMx3gK0QQqPTKeDt8VXjTE0CeR7xorgT5OY1GqyCyDMbjfYhu5hB0gDqgWOEAvnUN8n0BWQwvNmjQu%2FbwoQ4vmwBSTcTDgF7S4Qu2pw8qnFMpHtRcpWlAFzUgDaEbSeANFP6%2BMCRFZHGVyoMXBf%2BFN7HKi4pbZCsq5%2BPAaH5mcfw9KXjU02PFhbJILzjHzZwB4iT%2FyQ6MTjG6hObfrsbSGKZ%2Blnv7hhH2n9R9ynxHPQ01vzWs8uXTZp%2FlhOL%2BIGc6BI1EI4Oq8y0MoHC%2B0BCvPlaSjqVrCxIzWLoUN0EZ6W3Glks5REnbfTDVZm%2Bi44Wch1naz2XyEB8aTBEfQUvz3vq8CeYxH8YgehXp1IibLQmpeJMIGTiMAGOqUBSM4Pj3Ts8urjcE5Z7Tp7uSX4%2FnFOaUibr3%2Fu8LbZr7oTiolg8iSEl%2B%2F4LrMs70L9jyiHQR6E5P2RTxNg44guadM1lnJ5fXOaP9yxHNLJPwRqna%2FxRu0%2F7uMSlONGaKhDSn6Vak3Nh8%2FAFYGYWsRd9aWZg%2BS44qqutM%2FR7U4xBQqyuc655LOUavGdys6A5PMnkbBqm3i2k%2FO6GMe1NKEwjVIzV6Aa&X-Amz-Signature=9a94acd6dc0f401cf6f134dda719e99d4241cfc30acda4ccb37decb05d1ff919&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKRDSON%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1DlRRwN5VH%2B5%2BpJF6oidGhiWYIBUwlsYlrxEQ6zduUAiEA%2B3rCEgrfqZVhCRPwQwcUXi6E9A30plr4f6hpida8rWMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL%2FsNX8T26NPjJLvNCrcAxFIVBTwly%2Ba9NMmqn4hkaJbnsKmDIYXpo2e8LVmz%2BTOmB2B3R%2Fl4L4SIRNy2A3R%2FtShf5mRuDkXb3LlgSTA9%2BKNXdFOkN9QJGABPQYQjcfx2%2BTb2AWHEgm03uyx6HTzd8tXFX%2BEQYt1kDpHkrlMwzhj%2FOQa1%2FfJg2IduUM6CHFuaYlelnkRhySvbRuPR%2FKDCb6L7czOkgoLIXwDmrr69vY079zR0YfqJMLfJP2DKH0f8GD25BWh02CkcmvjykSYQCUsrbI7ujvxwzMx3gK0QQqPTKeDt8VXjTE0CeR7xorgT5OY1GqyCyDMbjfYhu5hB0gDqgWOEAvnUN8n0BWQwvNmjQu%2FbwoQ4vmwBSTcTDgF7S4Qu2pw8qnFMpHtRcpWlAFzUgDaEbSeANFP6%2BMCRFZHGVyoMXBf%2BFN7HKi4pbZCsq5%2BPAaH5mcfw9KXjU02PFhbJILzjHzZwB4iT%2FyQ6MTjG6hObfrsbSGKZ%2Blnv7hhH2n9R9ynxHPQ01vzWs8uXTZp%2FlhOL%2BIGc6BI1EI4Oq8y0MoHC%2B0BCvPlaSjqVrCxIzWLoUN0EZ6W3Glks5REnbfTDVZm%2Bi44Wch1naz2XyEB8aTBEfQUvz3vq8CeYxH8YgehXp1IibLQmpeJMIGTiMAGOqUBSM4Pj3Ts8urjcE5Z7Tp7uSX4%2FnFOaUibr3%2Fu8LbZr7oTiolg8iSEl%2B%2F4LrMs70L9jyiHQR6E5P2RTxNg44guadM1lnJ5fXOaP9yxHNLJPwRqna%2FxRu0%2F7uMSlONGaKhDSn6Vak3Nh8%2FAFYGYWsRd9aWZg%2BS44qqutM%2FR7U4xBQqyuc655LOUavGdys6A5PMnkbBqm3i2k%2FO6GMe1NKEwjVIzV6Aa&X-Amz-Signature=79ea9030103d60ca9fed80c5a0fe73a572f13fb34a4eb0253beb70358ed8b48a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKRDSON%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1DlRRwN5VH%2B5%2BpJF6oidGhiWYIBUwlsYlrxEQ6zduUAiEA%2B3rCEgrfqZVhCRPwQwcUXi6E9A30plr4f6hpida8rWMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL%2FsNX8T26NPjJLvNCrcAxFIVBTwly%2Ba9NMmqn4hkaJbnsKmDIYXpo2e8LVmz%2BTOmB2B3R%2Fl4L4SIRNy2A3R%2FtShf5mRuDkXb3LlgSTA9%2BKNXdFOkN9QJGABPQYQjcfx2%2BTb2AWHEgm03uyx6HTzd8tXFX%2BEQYt1kDpHkrlMwzhj%2FOQa1%2FfJg2IduUM6CHFuaYlelnkRhySvbRuPR%2FKDCb6L7czOkgoLIXwDmrr69vY079zR0YfqJMLfJP2DKH0f8GD25BWh02CkcmvjykSYQCUsrbI7ujvxwzMx3gK0QQqPTKeDt8VXjTE0CeR7xorgT5OY1GqyCyDMbjfYhu5hB0gDqgWOEAvnUN8n0BWQwvNmjQu%2FbwoQ4vmwBSTcTDgF7S4Qu2pw8qnFMpHtRcpWlAFzUgDaEbSeANFP6%2BMCRFZHGVyoMXBf%2BFN7HKi4pbZCsq5%2BPAaH5mcfw9KXjU02PFhbJILzjHzZwB4iT%2FyQ6MTjG6hObfrsbSGKZ%2Blnv7hhH2n9R9ynxHPQ01vzWs8uXTZp%2FlhOL%2BIGc6BI1EI4Oq8y0MoHC%2B0BCvPlaSjqVrCxIzWLoUN0EZ6W3Glks5REnbfTDVZm%2Bi44Wch1naz2XyEB8aTBEfQUvz3vq8CeYxH8YgehXp1IibLQmpeJMIGTiMAGOqUBSM4Pj3Ts8urjcE5Z7Tp7uSX4%2FnFOaUibr3%2Fu8LbZr7oTiolg8iSEl%2B%2F4LrMs70L9jyiHQR6E5P2RTxNg44guadM1lnJ5fXOaP9yxHNLJPwRqna%2FxRu0%2F7uMSlONGaKhDSn6Vak3Nh8%2FAFYGYWsRd9aWZg%2BS44qqutM%2FR7U4xBQqyuc655LOUavGdys6A5PMnkbBqm3i2k%2FO6GMe1NKEwjVIzV6Aa&X-Amz-Signature=613e9e8701011421b162bc7985c05e56694c16c6e2412da37ead2a22e2cff278&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
