---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQF6LXZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIPYnQjjVzSs%2F8I6JwCvGRP8ZfDnRkxwEDs4SINhdejAiEAsbQtG8E9LvtQezDv0d7anQ%2BUznMAQ%2FLNUVByO4qXsjUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOUeNEUD%2BfyoZcvvCrcAxV4iCNOqyjVf38xg9DMAOn7m%2BbdZxt%2B0c7MQtHk2JcZZdYNPjJDhv9x4PvnrwrAjNem86%2BPHl6qub4Z6%2Fk%2BuqA9QjQe8VVz%2Fxl7xbUnY%2FxjLSgX6KDM5kzUh%2FmNVDEBxc0CQaaWQcSz1AWCZ%2F7I5oxDgaVtmmScOJCys5jR3ZcMWP%2FaYGwaGXLETu6EvXZs9tE5e9FWxIU7GSDYdMF2cfSzgjqe36GBYy2E51JCQUUPbuBXpW4uMP3opHsv77AvNtlHUKA7JwV9veaah8LABvEgX7dc4vPyWiXZmyzp9pOmpBkGQXXAI5lKQ%2FyY5Fq%2Bzt53mM07nlTciaMb4pkK4MkTwHf1nWDp1mApc588K5e6GWG2aTmfVmueo0WAoehpaYecjFKV68rRvREr%2F%2FDtWTGp23J5eG8Pa4HVQyiYJvHGL0YYubYdDhPB79ltHOrokj6A9bLjDEhZ4Yan6W3FZs2C9QAQDic7K2Qye1KGvJgvYSisIaeYIl3wZMqSAkqLw7wnDVyHaxsOSiKZ3a3hRhk7jMVNlzRGc%2BotohBeomqPnRTozT8AmOW1l9DLeWX05%2FEiONpv9hgQOyc2RJPz9Di4P%2F4CpVGT3qtXvmIJxKC%2FIZ%2F5QwW%2Br67iKdyUMN3It8MGOqUB%2BP3RakCHiAlrfvU%2FSUx%2FEVVvk3b51ZMkdMW827D7Fw6QZ9sOTTysevAVRjpVrmNbH5K%2BTr%2FAGQrLWDWxVsqKPEe3cU8SA2mJh0EpvQED%2BcZ2591%2FNQCqpU38kWOccIi4kLVKN%2FEIs6Z5Q3N2Prg%2F8wdoMpOQHAl0gvXTY1S5CD2hfXnmg%2FxiOtJcuTnK6RMnEVeuvP%2Bf1hkH8ghYer0gsNVDOVEu&X-Amz-Signature=47fe4f83ef383892157ca6d7e6fa6dc9100873e20f0fca113a89aa93a795a351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQF6LXZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIPYnQjjVzSs%2F8I6JwCvGRP8ZfDnRkxwEDs4SINhdejAiEAsbQtG8E9LvtQezDv0d7anQ%2BUznMAQ%2FLNUVByO4qXsjUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOUeNEUD%2BfyoZcvvCrcAxV4iCNOqyjVf38xg9DMAOn7m%2BbdZxt%2B0c7MQtHk2JcZZdYNPjJDhv9x4PvnrwrAjNem86%2BPHl6qub4Z6%2Fk%2BuqA9QjQe8VVz%2Fxl7xbUnY%2FxjLSgX6KDM5kzUh%2FmNVDEBxc0CQaaWQcSz1AWCZ%2F7I5oxDgaVtmmScOJCys5jR3ZcMWP%2FaYGwaGXLETu6EvXZs9tE5e9FWxIU7GSDYdMF2cfSzgjqe36GBYy2E51JCQUUPbuBXpW4uMP3opHsv77AvNtlHUKA7JwV9veaah8LABvEgX7dc4vPyWiXZmyzp9pOmpBkGQXXAI5lKQ%2FyY5Fq%2Bzt53mM07nlTciaMb4pkK4MkTwHf1nWDp1mApc588K5e6GWG2aTmfVmueo0WAoehpaYecjFKV68rRvREr%2F%2FDtWTGp23J5eG8Pa4HVQyiYJvHGL0YYubYdDhPB79ltHOrokj6A9bLjDEhZ4Yan6W3FZs2C9QAQDic7K2Qye1KGvJgvYSisIaeYIl3wZMqSAkqLw7wnDVyHaxsOSiKZ3a3hRhk7jMVNlzRGc%2BotohBeomqPnRTozT8AmOW1l9DLeWX05%2FEiONpv9hgQOyc2RJPz9Di4P%2F4CpVGT3qtXvmIJxKC%2FIZ%2F5QwW%2Br67iKdyUMN3It8MGOqUB%2BP3RakCHiAlrfvU%2FSUx%2FEVVvk3b51ZMkdMW827D7Fw6QZ9sOTTysevAVRjpVrmNbH5K%2BTr%2FAGQrLWDWxVsqKPEe3cU8SA2mJh0EpvQED%2BcZ2591%2FNQCqpU38kWOccIi4kLVKN%2FEIs6Z5Q3N2Prg%2F8wdoMpOQHAl0gvXTY1S5CD2hfXnmg%2FxiOtJcuTnK6RMnEVeuvP%2Bf1hkH8ghYer0gsNVDOVEu&X-Amz-Signature=fbcf7076ff4b4ce07da0f495ca5aef02bd962d8789841dc9365d03c0b23e3812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQF6LXZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIPYnQjjVzSs%2F8I6JwCvGRP8ZfDnRkxwEDs4SINhdejAiEAsbQtG8E9LvtQezDv0d7anQ%2BUznMAQ%2FLNUVByO4qXsjUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOUeNEUD%2BfyoZcvvCrcAxV4iCNOqyjVf38xg9DMAOn7m%2BbdZxt%2B0c7MQtHk2JcZZdYNPjJDhv9x4PvnrwrAjNem86%2BPHl6qub4Z6%2Fk%2BuqA9QjQe8VVz%2Fxl7xbUnY%2FxjLSgX6KDM5kzUh%2FmNVDEBxc0CQaaWQcSz1AWCZ%2F7I5oxDgaVtmmScOJCys5jR3ZcMWP%2FaYGwaGXLETu6EvXZs9tE5e9FWxIU7GSDYdMF2cfSzgjqe36GBYy2E51JCQUUPbuBXpW4uMP3opHsv77AvNtlHUKA7JwV9veaah8LABvEgX7dc4vPyWiXZmyzp9pOmpBkGQXXAI5lKQ%2FyY5Fq%2Bzt53mM07nlTciaMb4pkK4MkTwHf1nWDp1mApc588K5e6GWG2aTmfVmueo0WAoehpaYecjFKV68rRvREr%2F%2FDtWTGp23J5eG8Pa4HVQyiYJvHGL0YYubYdDhPB79ltHOrokj6A9bLjDEhZ4Yan6W3FZs2C9QAQDic7K2Qye1KGvJgvYSisIaeYIl3wZMqSAkqLw7wnDVyHaxsOSiKZ3a3hRhk7jMVNlzRGc%2BotohBeomqPnRTozT8AmOW1l9DLeWX05%2FEiONpv9hgQOyc2RJPz9Di4P%2F4CpVGT3qtXvmIJxKC%2FIZ%2F5QwW%2Br67iKdyUMN3It8MGOqUB%2BP3RakCHiAlrfvU%2FSUx%2FEVVvk3b51ZMkdMW827D7Fw6QZ9sOTTysevAVRjpVrmNbH5K%2BTr%2FAGQrLWDWxVsqKPEe3cU8SA2mJh0EpvQED%2BcZ2591%2FNQCqpU38kWOccIi4kLVKN%2FEIs6Z5Q3N2Prg%2F8wdoMpOQHAl0gvXTY1S5CD2hfXnmg%2FxiOtJcuTnK6RMnEVeuvP%2Bf1hkH8ghYer0gsNVDOVEu&X-Amz-Signature=74e3fc2da65237b5a18366613893797f0689cd2875ffb8c8cc931eaabdec3cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQF6LXZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIPYnQjjVzSs%2F8I6JwCvGRP8ZfDnRkxwEDs4SINhdejAiEAsbQtG8E9LvtQezDv0d7anQ%2BUznMAQ%2FLNUVByO4qXsjUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOUeNEUD%2BfyoZcvvCrcAxV4iCNOqyjVf38xg9DMAOn7m%2BbdZxt%2B0c7MQtHk2JcZZdYNPjJDhv9x4PvnrwrAjNem86%2BPHl6qub4Z6%2Fk%2BuqA9QjQe8VVz%2Fxl7xbUnY%2FxjLSgX6KDM5kzUh%2FmNVDEBxc0CQaaWQcSz1AWCZ%2F7I5oxDgaVtmmScOJCys5jR3ZcMWP%2FaYGwaGXLETu6EvXZs9tE5e9FWxIU7GSDYdMF2cfSzgjqe36GBYy2E51JCQUUPbuBXpW4uMP3opHsv77AvNtlHUKA7JwV9veaah8LABvEgX7dc4vPyWiXZmyzp9pOmpBkGQXXAI5lKQ%2FyY5Fq%2Bzt53mM07nlTciaMb4pkK4MkTwHf1nWDp1mApc588K5e6GWG2aTmfVmueo0WAoehpaYecjFKV68rRvREr%2F%2FDtWTGp23J5eG8Pa4HVQyiYJvHGL0YYubYdDhPB79ltHOrokj6A9bLjDEhZ4Yan6W3FZs2C9QAQDic7K2Qye1KGvJgvYSisIaeYIl3wZMqSAkqLw7wnDVyHaxsOSiKZ3a3hRhk7jMVNlzRGc%2BotohBeomqPnRTozT8AmOW1l9DLeWX05%2FEiONpv9hgQOyc2RJPz9Di4P%2F4CpVGT3qtXvmIJxKC%2FIZ%2F5QwW%2Br67iKdyUMN3It8MGOqUB%2BP3RakCHiAlrfvU%2FSUx%2FEVVvk3b51ZMkdMW827D7Fw6QZ9sOTTysevAVRjpVrmNbH5K%2BTr%2FAGQrLWDWxVsqKPEe3cU8SA2mJh0EpvQED%2BcZ2591%2FNQCqpU38kWOccIi4kLVKN%2FEIs6Z5Q3N2Prg%2F8wdoMpOQHAl0gvXTY1S5CD2hfXnmg%2FxiOtJcuTnK6RMnEVeuvP%2Bf1hkH8ghYer0gsNVDOVEu&X-Amz-Signature=c455788d4df8bb00fed514b40f2a1c9c7c20c21724351f4085827161972d7651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQF6LXZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIPYnQjjVzSs%2F8I6JwCvGRP8ZfDnRkxwEDs4SINhdejAiEAsbQtG8E9LvtQezDv0d7anQ%2BUznMAQ%2FLNUVByO4qXsjUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOUeNEUD%2BfyoZcvvCrcAxV4iCNOqyjVf38xg9DMAOn7m%2BbdZxt%2B0c7MQtHk2JcZZdYNPjJDhv9x4PvnrwrAjNem86%2BPHl6qub4Z6%2Fk%2BuqA9QjQe8VVz%2Fxl7xbUnY%2FxjLSgX6KDM5kzUh%2FmNVDEBxc0CQaaWQcSz1AWCZ%2F7I5oxDgaVtmmScOJCys5jR3ZcMWP%2FaYGwaGXLETu6EvXZs9tE5e9FWxIU7GSDYdMF2cfSzgjqe36GBYy2E51JCQUUPbuBXpW4uMP3opHsv77AvNtlHUKA7JwV9veaah8LABvEgX7dc4vPyWiXZmyzp9pOmpBkGQXXAI5lKQ%2FyY5Fq%2Bzt53mM07nlTciaMb4pkK4MkTwHf1nWDp1mApc588K5e6GWG2aTmfVmueo0WAoehpaYecjFKV68rRvREr%2F%2FDtWTGp23J5eG8Pa4HVQyiYJvHGL0YYubYdDhPB79ltHOrokj6A9bLjDEhZ4Yan6W3FZs2C9QAQDic7K2Qye1KGvJgvYSisIaeYIl3wZMqSAkqLw7wnDVyHaxsOSiKZ3a3hRhk7jMVNlzRGc%2BotohBeomqPnRTozT8AmOW1l9DLeWX05%2FEiONpv9hgQOyc2RJPz9Di4P%2F4CpVGT3qtXvmIJxKC%2FIZ%2F5QwW%2Br67iKdyUMN3It8MGOqUB%2BP3RakCHiAlrfvU%2FSUx%2FEVVvk3b51ZMkdMW827D7Fw6QZ9sOTTysevAVRjpVrmNbH5K%2BTr%2FAGQrLWDWxVsqKPEe3cU8SA2mJh0EpvQED%2BcZ2591%2FNQCqpU38kWOccIi4kLVKN%2FEIs6Z5Q3N2Prg%2F8wdoMpOQHAl0gvXTY1S5CD2hfXnmg%2FxiOtJcuTnK6RMnEVeuvP%2Bf1hkH8ghYer0gsNVDOVEu&X-Amz-Signature=e8c802658196b64ad8cba5ab610639d8583ba189ba821def1745fed9b41110cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQF6LXZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIPYnQjjVzSs%2F8I6JwCvGRP8ZfDnRkxwEDs4SINhdejAiEAsbQtG8E9LvtQezDv0d7anQ%2BUznMAQ%2FLNUVByO4qXsjUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOUeNEUD%2BfyoZcvvCrcAxV4iCNOqyjVf38xg9DMAOn7m%2BbdZxt%2B0c7MQtHk2JcZZdYNPjJDhv9x4PvnrwrAjNem86%2BPHl6qub4Z6%2Fk%2BuqA9QjQe8VVz%2Fxl7xbUnY%2FxjLSgX6KDM5kzUh%2FmNVDEBxc0CQaaWQcSz1AWCZ%2F7I5oxDgaVtmmScOJCys5jR3ZcMWP%2FaYGwaGXLETu6EvXZs9tE5e9FWxIU7GSDYdMF2cfSzgjqe36GBYy2E51JCQUUPbuBXpW4uMP3opHsv77AvNtlHUKA7JwV9veaah8LABvEgX7dc4vPyWiXZmyzp9pOmpBkGQXXAI5lKQ%2FyY5Fq%2Bzt53mM07nlTciaMb4pkK4MkTwHf1nWDp1mApc588K5e6GWG2aTmfVmueo0WAoehpaYecjFKV68rRvREr%2F%2FDtWTGp23J5eG8Pa4HVQyiYJvHGL0YYubYdDhPB79ltHOrokj6A9bLjDEhZ4Yan6W3FZs2C9QAQDic7K2Qye1KGvJgvYSisIaeYIl3wZMqSAkqLw7wnDVyHaxsOSiKZ3a3hRhk7jMVNlzRGc%2BotohBeomqPnRTozT8AmOW1l9DLeWX05%2FEiONpv9hgQOyc2RJPz9Di4P%2F4CpVGT3qtXvmIJxKC%2FIZ%2F5QwW%2Br67iKdyUMN3It8MGOqUB%2BP3RakCHiAlrfvU%2FSUx%2FEVVvk3b51ZMkdMW827D7Fw6QZ9sOTTysevAVRjpVrmNbH5K%2BTr%2FAGQrLWDWxVsqKPEe3cU8SA2mJh0EpvQED%2BcZ2591%2FNQCqpU38kWOccIi4kLVKN%2FEIs6Z5Q3N2Prg%2F8wdoMpOQHAl0gvXTY1S5CD2hfXnmg%2FxiOtJcuTnK6RMnEVeuvP%2Bf1hkH8ghYer0gsNVDOVEu&X-Amz-Signature=00c3124492b315b987e08bc13cb0a26f4c6e2346fac00bd59d064b82c1bc99bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQF6LXZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIPYnQjjVzSs%2F8I6JwCvGRP8ZfDnRkxwEDs4SINhdejAiEAsbQtG8E9LvtQezDv0d7anQ%2BUznMAQ%2FLNUVByO4qXsjUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOUeNEUD%2BfyoZcvvCrcAxV4iCNOqyjVf38xg9DMAOn7m%2BbdZxt%2B0c7MQtHk2JcZZdYNPjJDhv9x4PvnrwrAjNem86%2BPHl6qub4Z6%2Fk%2BuqA9QjQe8VVz%2Fxl7xbUnY%2FxjLSgX6KDM5kzUh%2FmNVDEBxc0CQaaWQcSz1AWCZ%2F7I5oxDgaVtmmScOJCys5jR3ZcMWP%2FaYGwaGXLETu6EvXZs9tE5e9FWxIU7GSDYdMF2cfSzgjqe36GBYy2E51JCQUUPbuBXpW4uMP3opHsv77AvNtlHUKA7JwV9veaah8LABvEgX7dc4vPyWiXZmyzp9pOmpBkGQXXAI5lKQ%2FyY5Fq%2Bzt53mM07nlTciaMb4pkK4MkTwHf1nWDp1mApc588K5e6GWG2aTmfVmueo0WAoehpaYecjFKV68rRvREr%2F%2FDtWTGp23J5eG8Pa4HVQyiYJvHGL0YYubYdDhPB79ltHOrokj6A9bLjDEhZ4Yan6W3FZs2C9QAQDic7K2Qye1KGvJgvYSisIaeYIl3wZMqSAkqLw7wnDVyHaxsOSiKZ3a3hRhk7jMVNlzRGc%2BotohBeomqPnRTozT8AmOW1l9DLeWX05%2FEiONpv9hgQOyc2RJPz9Di4P%2F4CpVGT3qtXvmIJxKC%2FIZ%2F5QwW%2Br67iKdyUMN3It8MGOqUB%2BP3RakCHiAlrfvU%2FSUx%2FEVVvk3b51ZMkdMW827D7Fw6QZ9sOTTysevAVRjpVrmNbH5K%2BTr%2FAGQrLWDWxVsqKPEe3cU8SA2mJh0EpvQED%2BcZ2591%2FNQCqpU38kWOccIi4kLVKN%2FEIs6Z5Q3N2Prg%2F8wdoMpOQHAl0gvXTY1S5CD2hfXnmg%2FxiOtJcuTnK6RMnEVeuvP%2Bf1hkH8ghYer0gsNVDOVEu&X-Amz-Signature=9a5c3aee55663e2076eb8a14078d79901f8381bc2ab0761640f90f005657aa8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
