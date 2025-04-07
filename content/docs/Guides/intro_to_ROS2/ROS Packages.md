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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV4SSM5W%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbak5PRTOSKtzrgxxQEiixUZa97%2BC2k7%2FoJAJ%2BrQOlnAiEAgpKRZ2p2GENx57c41tOe0qbv2gbBO1rQ2PF4joTmZDwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPueH1wsl14D6kR4mircAz8cyVs2PxfeJw4Pf3HNOT%2FdXQu3FjLbDmqqt7F4RoMdJLbxmtbuknGG859lAMqEfpE7zhTMDSyDa5kS9GGYZz4MxOkCbwajQSYFKlFWY6l7dVejen%2B2Z7SetLbxz9GDfnGIQZCsnl7vqZlNPVgyzNacnp7NmX%2B29RsEPmoHXRN1mFKSZW1mFkQSMDFcBY13DRvzW2xSyqNasM%2BZIvaoSo5DLRxtk2SFpJ6DoOx7rZMrpr7ojUCH0MPkE6rm648y%2FtaQh0SuFlSoH3z3jOrct1D0xYVWv7JvL%2BqlKT9UkM4dW9pNobGJX4Z%2Foj8wvHzDK6kHE3XuhmtZ2wiXmcBLD%2FEx%2B2PYft4SACYhYhFUHMS1U2Ryu64Pqk8lYArM5vYqrsorow14XgPRakKOqWok2JrTOJTdJn%2Flg6vtsUa7Uk3tTKF84a%2FyyJbl0ZF2BfiQcBhVh8Z9qTkAVuqI7PsO25QAQiqSl8F6RFY2akHHltBx%2FCmBKIibJ25nj26pP6ZkIBLzsN5boHhHN7cBLcx0JVTXJoTuWLlm1EBsw0LsTUUK9Tf5i0Etcu9LPhvRsDBELZMZDzND9bR3dwpaFYpHl%2FTS4Z1GRpf725PBCaYpXzpZKJc%2FHTfaQ4zCLbAsMLCE0b8GOqUBUPilZXn9jNcTV40uISQAQlUHl%2FK%2F7mHAZj0phCDdhardo%2BMFpqMQ0sHeho00yQ04CTZmgFRuqXzvHtzRv7giVtN%2F%2F%2F6%2FhxsucE6%2Fih8eHpAakhuP8maDhT%2FWW8LkIbdxUsHEx8kTzF7WVfoymPzVS0%2Fk5sInedyiJT6j5cQjYagY107Htowsc0oulUIQvMQbJAOde5AOm5OTH9eMG%2BbxvLD4Aw3d&X-Amz-Signature=2bb06f56836ec36a380f722a2e7be2a5c4dcb62ad1c575ca83c3cac35cb00663&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV4SSM5W%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbak5PRTOSKtzrgxxQEiixUZa97%2BC2k7%2FoJAJ%2BrQOlnAiEAgpKRZ2p2GENx57c41tOe0qbv2gbBO1rQ2PF4joTmZDwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPueH1wsl14D6kR4mircAz8cyVs2PxfeJw4Pf3HNOT%2FdXQu3FjLbDmqqt7F4RoMdJLbxmtbuknGG859lAMqEfpE7zhTMDSyDa5kS9GGYZz4MxOkCbwajQSYFKlFWY6l7dVejen%2B2Z7SetLbxz9GDfnGIQZCsnl7vqZlNPVgyzNacnp7NmX%2B29RsEPmoHXRN1mFKSZW1mFkQSMDFcBY13DRvzW2xSyqNasM%2BZIvaoSo5DLRxtk2SFpJ6DoOx7rZMrpr7ojUCH0MPkE6rm648y%2FtaQh0SuFlSoH3z3jOrct1D0xYVWv7JvL%2BqlKT9UkM4dW9pNobGJX4Z%2Foj8wvHzDK6kHE3XuhmtZ2wiXmcBLD%2FEx%2B2PYft4SACYhYhFUHMS1U2Ryu64Pqk8lYArM5vYqrsorow14XgPRakKOqWok2JrTOJTdJn%2Flg6vtsUa7Uk3tTKF84a%2FyyJbl0ZF2BfiQcBhVh8Z9qTkAVuqI7PsO25QAQiqSl8F6RFY2akHHltBx%2FCmBKIibJ25nj26pP6ZkIBLzsN5boHhHN7cBLcx0JVTXJoTuWLlm1EBsw0LsTUUK9Tf5i0Etcu9LPhvRsDBELZMZDzND9bR3dwpaFYpHl%2FTS4Z1GRpf725PBCaYpXzpZKJc%2FHTfaQ4zCLbAsMLCE0b8GOqUBUPilZXn9jNcTV40uISQAQlUHl%2FK%2F7mHAZj0phCDdhardo%2BMFpqMQ0sHeho00yQ04CTZmgFRuqXzvHtzRv7giVtN%2F%2F%2F6%2FhxsucE6%2Fih8eHpAakhuP8maDhT%2FWW8LkIbdxUsHEx8kTzF7WVfoymPzVS0%2Fk5sInedyiJT6j5cQjYagY107Htowsc0oulUIQvMQbJAOde5AOm5OTH9eMG%2BbxvLD4Aw3d&X-Amz-Signature=ab51ec1dfc02b8b1260aa39ce65374407e0798e6b55d2b6815f1aa39d731d265&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV4SSM5W%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbak5PRTOSKtzrgxxQEiixUZa97%2BC2k7%2FoJAJ%2BrQOlnAiEAgpKRZ2p2GENx57c41tOe0qbv2gbBO1rQ2PF4joTmZDwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPueH1wsl14D6kR4mircAz8cyVs2PxfeJw4Pf3HNOT%2FdXQu3FjLbDmqqt7F4RoMdJLbxmtbuknGG859lAMqEfpE7zhTMDSyDa5kS9GGYZz4MxOkCbwajQSYFKlFWY6l7dVejen%2B2Z7SetLbxz9GDfnGIQZCsnl7vqZlNPVgyzNacnp7NmX%2B29RsEPmoHXRN1mFKSZW1mFkQSMDFcBY13DRvzW2xSyqNasM%2BZIvaoSo5DLRxtk2SFpJ6DoOx7rZMrpr7ojUCH0MPkE6rm648y%2FtaQh0SuFlSoH3z3jOrct1D0xYVWv7JvL%2BqlKT9UkM4dW9pNobGJX4Z%2Foj8wvHzDK6kHE3XuhmtZ2wiXmcBLD%2FEx%2B2PYft4SACYhYhFUHMS1U2Ryu64Pqk8lYArM5vYqrsorow14XgPRakKOqWok2JrTOJTdJn%2Flg6vtsUa7Uk3tTKF84a%2FyyJbl0ZF2BfiQcBhVh8Z9qTkAVuqI7PsO25QAQiqSl8F6RFY2akHHltBx%2FCmBKIibJ25nj26pP6ZkIBLzsN5boHhHN7cBLcx0JVTXJoTuWLlm1EBsw0LsTUUK9Tf5i0Etcu9LPhvRsDBELZMZDzND9bR3dwpaFYpHl%2FTS4Z1GRpf725PBCaYpXzpZKJc%2FHTfaQ4zCLbAsMLCE0b8GOqUBUPilZXn9jNcTV40uISQAQlUHl%2FK%2F7mHAZj0phCDdhardo%2BMFpqMQ0sHeho00yQ04CTZmgFRuqXzvHtzRv7giVtN%2F%2F%2F6%2FhxsucE6%2Fih8eHpAakhuP8maDhT%2FWW8LkIbdxUsHEx8kTzF7WVfoymPzVS0%2Fk5sInedyiJT6j5cQjYagY107Htowsc0oulUIQvMQbJAOde5AOm5OTH9eMG%2BbxvLD4Aw3d&X-Amz-Signature=28194f24d4c9a33b6ee6546392d82700d04ac5209bc38c0f74a7e6cece6c54cc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV4SSM5W%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbak5PRTOSKtzrgxxQEiixUZa97%2BC2k7%2FoJAJ%2BrQOlnAiEAgpKRZ2p2GENx57c41tOe0qbv2gbBO1rQ2PF4joTmZDwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPueH1wsl14D6kR4mircAz8cyVs2PxfeJw4Pf3HNOT%2FdXQu3FjLbDmqqt7F4RoMdJLbxmtbuknGG859lAMqEfpE7zhTMDSyDa5kS9GGYZz4MxOkCbwajQSYFKlFWY6l7dVejen%2B2Z7SetLbxz9GDfnGIQZCsnl7vqZlNPVgyzNacnp7NmX%2B29RsEPmoHXRN1mFKSZW1mFkQSMDFcBY13DRvzW2xSyqNasM%2BZIvaoSo5DLRxtk2SFpJ6DoOx7rZMrpr7ojUCH0MPkE6rm648y%2FtaQh0SuFlSoH3z3jOrct1D0xYVWv7JvL%2BqlKT9UkM4dW9pNobGJX4Z%2Foj8wvHzDK6kHE3XuhmtZ2wiXmcBLD%2FEx%2B2PYft4SACYhYhFUHMS1U2Ryu64Pqk8lYArM5vYqrsorow14XgPRakKOqWok2JrTOJTdJn%2Flg6vtsUa7Uk3tTKF84a%2FyyJbl0ZF2BfiQcBhVh8Z9qTkAVuqI7PsO25QAQiqSl8F6RFY2akHHltBx%2FCmBKIibJ25nj26pP6ZkIBLzsN5boHhHN7cBLcx0JVTXJoTuWLlm1EBsw0LsTUUK9Tf5i0Etcu9LPhvRsDBELZMZDzND9bR3dwpaFYpHl%2FTS4Z1GRpf725PBCaYpXzpZKJc%2FHTfaQ4zCLbAsMLCE0b8GOqUBUPilZXn9jNcTV40uISQAQlUHl%2FK%2F7mHAZj0phCDdhardo%2BMFpqMQ0sHeho00yQ04CTZmgFRuqXzvHtzRv7giVtN%2F%2F%2F6%2FhxsucE6%2Fih8eHpAakhuP8maDhT%2FWW8LkIbdxUsHEx8kTzF7WVfoymPzVS0%2Fk5sInedyiJT6j5cQjYagY107Htowsc0oulUIQvMQbJAOde5AOm5OTH9eMG%2BbxvLD4Aw3d&X-Amz-Signature=9ad2b171af98695f4e2ca229a7d9a54253906fbf92d595d409fd1be719a5c3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV4SSM5W%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbak5PRTOSKtzrgxxQEiixUZa97%2BC2k7%2FoJAJ%2BrQOlnAiEAgpKRZ2p2GENx57c41tOe0qbv2gbBO1rQ2PF4joTmZDwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPueH1wsl14D6kR4mircAz8cyVs2PxfeJw4Pf3HNOT%2FdXQu3FjLbDmqqt7F4RoMdJLbxmtbuknGG859lAMqEfpE7zhTMDSyDa5kS9GGYZz4MxOkCbwajQSYFKlFWY6l7dVejen%2B2Z7SetLbxz9GDfnGIQZCsnl7vqZlNPVgyzNacnp7NmX%2B29RsEPmoHXRN1mFKSZW1mFkQSMDFcBY13DRvzW2xSyqNasM%2BZIvaoSo5DLRxtk2SFpJ6DoOx7rZMrpr7ojUCH0MPkE6rm648y%2FtaQh0SuFlSoH3z3jOrct1D0xYVWv7JvL%2BqlKT9UkM4dW9pNobGJX4Z%2Foj8wvHzDK6kHE3XuhmtZ2wiXmcBLD%2FEx%2B2PYft4SACYhYhFUHMS1U2Ryu64Pqk8lYArM5vYqrsorow14XgPRakKOqWok2JrTOJTdJn%2Flg6vtsUa7Uk3tTKF84a%2FyyJbl0ZF2BfiQcBhVh8Z9qTkAVuqI7PsO25QAQiqSl8F6RFY2akHHltBx%2FCmBKIibJ25nj26pP6ZkIBLzsN5boHhHN7cBLcx0JVTXJoTuWLlm1EBsw0LsTUUK9Tf5i0Etcu9LPhvRsDBELZMZDzND9bR3dwpaFYpHl%2FTS4Z1GRpf725PBCaYpXzpZKJc%2FHTfaQ4zCLbAsMLCE0b8GOqUBUPilZXn9jNcTV40uISQAQlUHl%2FK%2F7mHAZj0phCDdhardo%2BMFpqMQ0sHeho00yQ04CTZmgFRuqXzvHtzRv7giVtN%2F%2F%2F6%2FhxsucE6%2Fih8eHpAakhuP8maDhT%2FWW8LkIbdxUsHEx8kTzF7WVfoymPzVS0%2Fk5sInedyiJT6j5cQjYagY107Htowsc0oulUIQvMQbJAOde5AOm5OTH9eMG%2BbxvLD4Aw3d&X-Amz-Signature=38d41ed9b405552fd11b77a80319cc0be0c673183f6e1a3ca90457317be29ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV4SSM5W%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbak5PRTOSKtzrgxxQEiixUZa97%2BC2k7%2FoJAJ%2BrQOlnAiEAgpKRZ2p2GENx57c41tOe0qbv2gbBO1rQ2PF4joTmZDwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPueH1wsl14D6kR4mircAz8cyVs2PxfeJw4Pf3HNOT%2FdXQu3FjLbDmqqt7F4RoMdJLbxmtbuknGG859lAMqEfpE7zhTMDSyDa5kS9GGYZz4MxOkCbwajQSYFKlFWY6l7dVejen%2B2Z7SetLbxz9GDfnGIQZCsnl7vqZlNPVgyzNacnp7NmX%2B29RsEPmoHXRN1mFKSZW1mFkQSMDFcBY13DRvzW2xSyqNasM%2BZIvaoSo5DLRxtk2SFpJ6DoOx7rZMrpr7ojUCH0MPkE6rm648y%2FtaQh0SuFlSoH3z3jOrct1D0xYVWv7JvL%2BqlKT9UkM4dW9pNobGJX4Z%2Foj8wvHzDK6kHE3XuhmtZ2wiXmcBLD%2FEx%2B2PYft4SACYhYhFUHMS1U2Ryu64Pqk8lYArM5vYqrsorow14XgPRakKOqWok2JrTOJTdJn%2Flg6vtsUa7Uk3tTKF84a%2FyyJbl0ZF2BfiQcBhVh8Z9qTkAVuqI7PsO25QAQiqSl8F6RFY2akHHltBx%2FCmBKIibJ25nj26pP6ZkIBLzsN5boHhHN7cBLcx0JVTXJoTuWLlm1EBsw0LsTUUK9Tf5i0Etcu9LPhvRsDBELZMZDzND9bR3dwpaFYpHl%2FTS4Z1GRpf725PBCaYpXzpZKJc%2FHTfaQ4zCLbAsMLCE0b8GOqUBUPilZXn9jNcTV40uISQAQlUHl%2FK%2F7mHAZj0phCDdhardo%2BMFpqMQ0sHeho00yQ04CTZmgFRuqXzvHtzRv7giVtN%2F%2F%2F6%2FhxsucE6%2Fih8eHpAakhuP8maDhT%2FWW8LkIbdxUsHEx8kTzF7WVfoymPzVS0%2Fk5sInedyiJT6j5cQjYagY107Htowsc0oulUIQvMQbJAOde5AOm5OTH9eMG%2BbxvLD4Aw3d&X-Amz-Signature=e44ad4efe028dac5df20519c83f07a0304ce34de98ab190f9dc6897f195df5e5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV4SSM5W%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbak5PRTOSKtzrgxxQEiixUZa97%2BC2k7%2FoJAJ%2BrQOlnAiEAgpKRZ2p2GENx57c41tOe0qbv2gbBO1rQ2PF4joTmZDwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPueH1wsl14D6kR4mircAz8cyVs2PxfeJw4Pf3HNOT%2FdXQu3FjLbDmqqt7F4RoMdJLbxmtbuknGG859lAMqEfpE7zhTMDSyDa5kS9GGYZz4MxOkCbwajQSYFKlFWY6l7dVejen%2B2Z7SetLbxz9GDfnGIQZCsnl7vqZlNPVgyzNacnp7NmX%2B29RsEPmoHXRN1mFKSZW1mFkQSMDFcBY13DRvzW2xSyqNasM%2BZIvaoSo5DLRxtk2SFpJ6DoOx7rZMrpr7ojUCH0MPkE6rm648y%2FtaQh0SuFlSoH3z3jOrct1D0xYVWv7JvL%2BqlKT9UkM4dW9pNobGJX4Z%2Foj8wvHzDK6kHE3XuhmtZ2wiXmcBLD%2FEx%2B2PYft4SACYhYhFUHMS1U2Ryu64Pqk8lYArM5vYqrsorow14XgPRakKOqWok2JrTOJTdJn%2Flg6vtsUa7Uk3tTKF84a%2FyyJbl0ZF2BfiQcBhVh8Z9qTkAVuqI7PsO25QAQiqSl8F6RFY2akHHltBx%2FCmBKIibJ25nj26pP6ZkIBLzsN5boHhHN7cBLcx0JVTXJoTuWLlm1EBsw0LsTUUK9Tf5i0Etcu9LPhvRsDBELZMZDzND9bR3dwpaFYpHl%2FTS4Z1GRpf725PBCaYpXzpZKJc%2FHTfaQ4zCLbAsMLCE0b8GOqUBUPilZXn9jNcTV40uISQAQlUHl%2FK%2F7mHAZj0phCDdhardo%2BMFpqMQ0sHeho00yQ04CTZmgFRuqXzvHtzRv7giVtN%2F%2F%2F6%2FhxsucE6%2Fih8eHpAakhuP8maDhT%2FWW8LkIbdxUsHEx8kTzF7WVfoymPzVS0%2Fk5sInedyiJT6j5cQjYagY107Htowsc0oulUIQvMQbJAOde5AOm5OTH9eMG%2BbxvLD4Aw3d&X-Amz-Signature=bee3c8dd95e122c5f7a7e289cecb376bad34258e139f930cf79b5d627723fe92&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
