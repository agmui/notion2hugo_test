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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKRJIFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLvn5Qr90%2FpnLC9%2Bi9rFMWYejcSsTIosj1K3ZkRt4bmAiEAnV485j4HF1XeWFhAcbW8mz3PQZ7O%2FgwmprBBvvFsjc4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0d12x3xHAx03%2BA7yrcA8bzP4eg9Q9pGrQDIKIukeKWIoN9unIk%2B8g0uo4tYyzcvnS0FQaIchYuM9nlYoxnldKXg3Diy05d9CljhfGnBL4ddpvOlHEfk7FYw1nk1DQqo9cAfOJKv%2BDTMLrsF%2Bn2OJxbryXbB6dU1m1vcx7Q9nk%2BKTBDPCIfUk4UbhhQMp5oUGm3p5niLrO%2B9NITlZAR5luwcqgghqz2JZxREfxLH%2BrU4ueq16%2BEQgIlP%2BOLwsFNctTd%2FdYePF7YfcvyGlPA6P2IxhxrbRL%2FZrnVCbDv2Hfhyh%2BcDnXJH4v6BaPjyekM6cpzZnKOUD4TYOKboAwcOk9IS4YL4hlXZACFroyaW9uWfUXp%2BkA6jVuR39AxXEX83qyCfSm1VbpdNHCEgKKV23tHExQIXDeWCp3s7Kv%2FPfKzEdyh94dyuoZGOuJrLctabx9UrYDZzP%2FbCwaCuIeo5qymiMjg9EczNOXgMskq6ZjWa4xRUOqCydGrhPkfKTe%2Fyt6DemdsuVrmMjh0Tq5%2Bh6N8c%2FAedbBoys8sIamJ1xtJDLUsrhnGga8kDpq153Qrtbdq4bbtpI%2FZoQHDx2ELu4T1qHNoFuIohVe%2ByfGImQDxr8mvPClcze%2B4MYUrUiB7lUEFJIS54Q1FoR06MKLC3sQGOqUBJTuXuiN0qGIZtn5YvlWV50pdwq33FEp6i2kcKwi6Lk%2Ft3b1er33izA%2F8kpWBFAu5x1e%2FTiWGBxISm7kiC%2FJ%2BjNQnQi3lgljpiD3xehVF97sgbJcWJEvMJmrAgHHQ5fcSzG3HqJEeSEArVBGkEKgF2jfQ09hJwm9djFr5AIAVzcE%2B%2BCOCNE5Ipabaa%2BnjpEIcXnyQEPQ2A9%2BrapBgFiCB5awwuYnR&X-Amz-Signature=ebda5a452621de27d88608105d1a0fde4612d63fb62906b5319ee0e2b413ee59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKRJIFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLvn5Qr90%2FpnLC9%2Bi9rFMWYejcSsTIosj1K3ZkRt4bmAiEAnV485j4HF1XeWFhAcbW8mz3PQZ7O%2FgwmprBBvvFsjc4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0d12x3xHAx03%2BA7yrcA8bzP4eg9Q9pGrQDIKIukeKWIoN9unIk%2B8g0uo4tYyzcvnS0FQaIchYuM9nlYoxnldKXg3Diy05d9CljhfGnBL4ddpvOlHEfk7FYw1nk1DQqo9cAfOJKv%2BDTMLrsF%2Bn2OJxbryXbB6dU1m1vcx7Q9nk%2BKTBDPCIfUk4UbhhQMp5oUGm3p5niLrO%2B9NITlZAR5luwcqgghqz2JZxREfxLH%2BrU4ueq16%2BEQgIlP%2BOLwsFNctTd%2FdYePF7YfcvyGlPA6P2IxhxrbRL%2FZrnVCbDv2Hfhyh%2BcDnXJH4v6BaPjyekM6cpzZnKOUD4TYOKboAwcOk9IS4YL4hlXZACFroyaW9uWfUXp%2BkA6jVuR39AxXEX83qyCfSm1VbpdNHCEgKKV23tHExQIXDeWCp3s7Kv%2FPfKzEdyh94dyuoZGOuJrLctabx9UrYDZzP%2FbCwaCuIeo5qymiMjg9EczNOXgMskq6ZjWa4xRUOqCydGrhPkfKTe%2Fyt6DemdsuVrmMjh0Tq5%2Bh6N8c%2FAedbBoys8sIamJ1xtJDLUsrhnGga8kDpq153Qrtbdq4bbtpI%2FZoQHDx2ELu4T1qHNoFuIohVe%2ByfGImQDxr8mvPClcze%2B4MYUrUiB7lUEFJIS54Q1FoR06MKLC3sQGOqUBJTuXuiN0qGIZtn5YvlWV50pdwq33FEp6i2kcKwi6Lk%2Ft3b1er33izA%2F8kpWBFAu5x1e%2FTiWGBxISm7kiC%2FJ%2BjNQnQi3lgljpiD3xehVF97sgbJcWJEvMJmrAgHHQ5fcSzG3HqJEeSEArVBGkEKgF2jfQ09hJwm9djFr5AIAVzcE%2B%2BCOCNE5Ipabaa%2BnjpEIcXnyQEPQ2A9%2BrapBgFiCB5awwuYnR&X-Amz-Signature=93cc28cdc3eaac7adfa759b500a9a11a0585f19df3cd629ead212d3976abac2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKRJIFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLvn5Qr90%2FpnLC9%2Bi9rFMWYejcSsTIosj1K3ZkRt4bmAiEAnV485j4HF1XeWFhAcbW8mz3PQZ7O%2FgwmprBBvvFsjc4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0d12x3xHAx03%2BA7yrcA8bzP4eg9Q9pGrQDIKIukeKWIoN9unIk%2B8g0uo4tYyzcvnS0FQaIchYuM9nlYoxnldKXg3Diy05d9CljhfGnBL4ddpvOlHEfk7FYw1nk1DQqo9cAfOJKv%2BDTMLrsF%2Bn2OJxbryXbB6dU1m1vcx7Q9nk%2BKTBDPCIfUk4UbhhQMp5oUGm3p5niLrO%2B9NITlZAR5luwcqgghqz2JZxREfxLH%2BrU4ueq16%2BEQgIlP%2BOLwsFNctTd%2FdYePF7YfcvyGlPA6P2IxhxrbRL%2FZrnVCbDv2Hfhyh%2BcDnXJH4v6BaPjyekM6cpzZnKOUD4TYOKboAwcOk9IS4YL4hlXZACFroyaW9uWfUXp%2BkA6jVuR39AxXEX83qyCfSm1VbpdNHCEgKKV23tHExQIXDeWCp3s7Kv%2FPfKzEdyh94dyuoZGOuJrLctabx9UrYDZzP%2FbCwaCuIeo5qymiMjg9EczNOXgMskq6ZjWa4xRUOqCydGrhPkfKTe%2Fyt6DemdsuVrmMjh0Tq5%2Bh6N8c%2FAedbBoys8sIamJ1xtJDLUsrhnGga8kDpq153Qrtbdq4bbtpI%2FZoQHDx2ELu4T1qHNoFuIohVe%2ByfGImQDxr8mvPClcze%2B4MYUrUiB7lUEFJIS54Q1FoR06MKLC3sQGOqUBJTuXuiN0qGIZtn5YvlWV50pdwq33FEp6i2kcKwi6Lk%2Ft3b1er33izA%2F8kpWBFAu5x1e%2FTiWGBxISm7kiC%2FJ%2BjNQnQi3lgljpiD3xehVF97sgbJcWJEvMJmrAgHHQ5fcSzG3HqJEeSEArVBGkEKgF2jfQ09hJwm9djFr5AIAVzcE%2B%2BCOCNE5Ipabaa%2BnjpEIcXnyQEPQ2A9%2BrapBgFiCB5awwuYnR&X-Amz-Signature=ee3d986780d3927092d98cf092c4c60900ec7f541d19c039734820d685935df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKRJIFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLvn5Qr90%2FpnLC9%2Bi9rFMWYejcSsTIosj1K3ZkRt4bmAiEAnV485j4HF1XeWFhAcbW8mz3PQZ7O%2FgwmprBBvvFsjc4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0d12x3xHAx03%2BA7yrcA8bzP4eg9Q9pGrQDIKIukeKWIoN9unIk%2B8g0uo4tYyzcvnS0FQaIchYuM9nlYoxnldKXg3Diy05d9CljhfGnBL4ddpvOlHEfk7FYw1nk1DQqo9cAfOJKv%2BDTMLrsF%2Bn2OJxbryXbB6dU1m1vcx7Q9nk%2BKTBDPCIfUk4UbhhQMp5oUGm3p5niLrO%2B9NITlZAR5luwcqgghqz2JZxREfxLH%2BrU4ueq16%2BEQgIlP%2BOLwsFNctTd%2FdYePF7YfcvyGlPA6P2IxhxrbRL%2FZrnVCbDv2Hfhyh%2BcDnXJH4v6BaPjyekM6cpzZnKOUD4TYOKboAwcOk9IS4YL4hlXZACFroyaW9uWfUXp%2BkA6jVuR39AxXEX83qyCfSm1VbpdNHCEgKKV23tHExQIXDeWCp3s7Kv%2FPfKzEdyh94dyuoZGOuJrLctabx9UrYDZzP%2FbCwaCuIeo5qymiMjg9EczNOXgMskq6ZjWa4xRUOqCydGrhPkfKTe%2Fyt6DemdsuVrmMjh0Tq5%2Bh6N8c%2FAedbBoys8sIamJ1xtJDLUsrhnGga8kDpq153Qrtbdq4bbtpI%2FZoQHDx2ELu4T1qHNoFuIohVe%2ByfGImQDxr8mvPClcze%2B4MYUrUiB7lUEFJIS54Q1FoR06MKLC3sQGOqUBJTuXuiN0qGIZtn5YvlWV50pdwq33FEp6i2kcKwi6Lk%2Ft3b1er33izA%2F8kpWBFAu5x1e%2FTiWGBxISm7kiC%2FJ%2BjNQnQi3lgljpiD3xehVF97sgbJcWJEvMJmrAgHHQ5fcSzG3HqJEeSEArVBGkEKgF2jfQ09hJwm9djFr5AIAVzcE%2B%2BCOCNE5Ipabaa%2BnjpEIcXnyQEPQ2A9%2BrapBgFiCB5awwuYnR&X-Amz-Signature=c9350d781b7a1c115ba045b568d1eeb0f73cbcf73101f498909ca0e638fba4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKRJIFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLvn5Qr90%2FpnLC9%2Bi9rFMWYejcSsTIosj1K3ZkRt4bmAiEAnV485j4HF1XeWFhAcbW8mz3PQZ7O%2FgwmprBBvvFsjc4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0d12x3xHAx03%2BA7yrcA8bzP4eg9Q9pGrQDIKIukeKWIoN9unIk%2B8g0uo4tYyzcvnS0FQaIchYuM9nlYoxnldKXg3Diy05d9CljhfGnBL4ddpvOlHEfk7FYw1nk1DQqo9cAfOJKv%2BDTMLrsF%2Bn2OJxbryXbB6dU1m1vcx7Q9nk%2BKTBDPCIfUk4UbhhQMp5oUGm3p5niLrO%2B9NITlZAR5luwcqgghqz2JZxREfxLH%2BrU4ueq16%2BEQgIlP%2BOLwsFNctTd%2FdYePF7YfcvyGlPA6P2IxhxrbRL%2FZrnVCbDv2Hfhyh%2BcDnXJH4v6BaPjyekM6cpzZnKOUD4TYOKboAwcOk9IS4YL4hlXZACFroyaW9uWfUXp%2BkA6jVuR39AxXEX83qyCfSm1VbpdNHCEgKKV23tHExQIXDeWCp3s7Kv%2FPfKzEdyh94dyuoZGOuJrLctabx9UrYDZzP%2FbCwaCuIeo5qymiMjg9EczNOXgMskq6ZjWa4xRUOqCydGrhPkfKTe%2Fyt6DemdsuVrmMjh0Tq5%2Bh6N8c%2FAedbBoys8sIamJ1xtJDLUsrhnGga8kDpq153Qrtbdq4bbtpI%2FZoQHDx2ELu4T1qHNoFuIohVe%2ByfGImQDxr8mvPClcze%2B4MYUrUiB7lUEFJIS54Q1FoR06MKLC3sQGOqUBJTuXuiN0qGIZtn5YvlWV50pdwq33FEp6i2kcKwi6Lk%2Ft3b1er33izA%2F8kpWBFAu5x1e%2FTiWGBxISm7kiC%2FJ%2BjNQnQi3lgljpiD3xehVF97sgbJcWJEvMJmrAgHHQ5fcSzG3HqJEeSEArVBGkEKgF2jfQ09hJwm9djFr5AIAVzcE%2B%2BCOCNE5Ipabaa%2BnjpEIcXnyQEPQ2A9%2BrapBgFiCB5awwuYnR&X-Amz-Signature=5b7c52e634d8b2b0ae292fc51ee7b65a68a7d9e28ec62c3e7c99a0b8b07323ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKRJIFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLvn5Qr90%2FpnLC9%2Bi9rFMWYejcSsTIosj1K3ZkRt4bmAiEAnV485j4HF1XeWFhAcbW8mz3PQZ7O%2FgwmprBBvvFsjc4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0d12x3xHAx03%2BA7yrcA8bzP4eg9Q9pGrQDIKIukeKWIoN9unIk%2B8g0uo4tYyzcvnS0FQaIchYuM9nlYoxnldKXg3Diy05d9CljhfGnBL4ddpvOlHEfk7FYw1nk1DQqo9cAfOJKv%2BDTMLrsF%2Bn2OJxbryXbB6dU1m1vcx7Q9nk%2BKTBDPCIfUk4UbhhQMp5oUGm3p5niLrO%2B9NITlZAR5luwcqgghqz2JZxREfxLH%2BrU4ueq16%2BEQgIlP%2BOLwsFNctTd%2FdYePF7YfcvyGlPA6P2IxhxrbRL%2FZrnVCbDv2Hfhyh%2BcDnXJH4v6BaPjyekM6cpzZnKOUD4TYOKboAwcOk9IS4YL4hlXZACFroyaW9uWfUXp%2BkA6jVuR39AxXEX83qyCfSm1VbpdNHCEgKKV23tHExQIXDeWCp3s7Kv%2FPfKzEdyh94dyuoZGOuJrLctabx9UrYDZzP%2FbCwaCuIeo5qymiMjg9EczNOXgMskq6ZjWa4xRUOqCydGrhPkfKTe%2Fyt6DemdsuVrmMjh0Tq5%2Bh6N8c%2FAedbBoys8sIamJ1xtJDLUsrhnGga8kDpq153Qrtbdq4bbtpI%2FZoQHDx2ELu4T1qHNoFuIohVe%2ByfGImQDxr8mvPClcze%2B4MYUrUiB7lUEFJIS54Q1FoR06MKLC3sQGOqUBJTuXuiN0qGIZtn5YvlWV50pdwq33FEp6i2kcKwi6Lk%2Ft3b1er33izA%2F8kpWBFAu5x1e%2FTiWGBxISm7kiC%2FJ%2BjNQnQi3lgljpiD3xehVF97sgbJcWJEvMJmrAgHHQ5fcSzG3HqJEeSEArVBGkEKgF2jfQ09hJwm9djFr5AIAVzcE%2B%2BCOCNE5Ipabaa%2BnjpEIcXnyQEPQ2A9%2BrapBgFiCB5awwuYnR&X-Amz-Signature=5d235e6444bfcd631cfa3c129fc265121d97c1626ee6edb2900399e8ad50ed9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKRJIFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLvn5Qr90%2FpnLC9%2Bi9rFMWYejcSsTIosj1K3ZkRt4bmAiEAnV485j4HF1XeWFhAcbW8mz3PQZ7O%2FgwmprBBvvFsjc4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0d12x3xHAx03%2BA7yrcA8bzP4eg9Q9pGrQDIKIukeKWIoN9unIk%2B8g0uo4tYyzcvnS0FQaIchYuM9nlYoxnldKXg3Diy05d9CljhfGnBL4ddpvOlHEfk7FYw1nk1DQqo9cAfOJKv%2BDTMLrsF%2Bn2OJxbryXbB6dU1m1vcx7Q9nk%2BKTBDPCIfUk4UbhhQMp5oUGm3p5niLrO%2B9NITlZAR5luwcqgghqz2JZxREfxLH%2BrU4ueq16%2BEQgIlP%2BOLwsFNctTd%2FdYePF7YfcvyGlPA6P2IxhxrbRL%2FZrnVCbDv2Hfhyh%2BcDnXJH4v6BaPjyekM6cpzZnKOUD4TYOKboAwcOk9IS4YL4hlXZACFroyaW9uWfUXp%2BkA6jVuR39AxXEX83qyCfSm1VbpdNHCEgKKV23tHExQIXDeWCp3s7Kv%2FPfKzEdyh94dyuoZGOuJrLctabx9UrYDZzP%2FbCwaCuIeo5qymiMjg9EczNOXgMskq6ZjWa4xRUOqCydGrhPkfKTe%2Fyt6DemdsuVrmMjh0Tq5%2Bh6N8c%2FAedbBoys8sIamJ1xtJDLUsrhnGga8kDpq153Qrtbdq4bbtpI%2FZoQHDx2ELu4T1qHNoFuIohVe%2ByfGImQDxr8mvPClcze%2B4MYUrUiB7lUEFJIS54Q1FoR06MKLC3sQGOqUBJTuXuiN0qGIZtn5YvlWV50pdwq33FEp6i2kcKwi6Lk%2Ft3b1er33izA%2F8kpWBFAu5x1e%2FTiWGBxISm7kiC%2FJ%2BjNQnQi3lgljpiD3xehVF97sgbJcWJEvMJmrAgHHQ5fcSzG3HqJEeSEArVBGkEKgF2jfQ09hJwm9djFr5AIAVzcE%2B%2BCOCNE5Ipabaa%2BnjpEIcXnyQEPQ2A9%2BrapBgFiCB5awwuYnR&X-Amz-Signature=7b00e34359794bec55506b73ca8079e918cbe9e9ae2a0528a2d6e1bd0c0c7ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
