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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5ZYPF7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIH1VBW0WCTUUBu5x7rEyR7mujE6hGCHpsUM8m%2Fv1ISYFAiEAigek%2BoKws7Kz7gaIsDklbvpf8uZUv5K0fdbnwObDPo8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqA9%2BEHK21HvMkngCrcA7fWkkagAMa7KPnaXRjLjv4r7yvrGpCe1HJga%2FCvslE6DjoA9th%2FMqQOPGANzI84AoE9rcN0oZ4Xy1EoMqiPs57BDiF%2BdMJruaCmkeJpD2VA79ZBBMLMUB%2FQpU3S1TCXur0FTwvjt5Ry9psJfC3wrlRCIyXBW%2Fz%2FkZIDY3zucG8nTODh2yl7qNQCLNn9Fa2JXdkIohouzeEwEQcVPyRIvhzqVNALxpO4nP3769zCHe4UU0uItRPNrjUtN93smQfdQVegVNcZy3wClEy5NecEDsKH0sebYI69s5AMKQMzME7mRVQTSlIIn6UmbrX82XfhVXMvTXzHZQ%2FTwVlGNCtAagE%2BTiJK5h2PezTUeYLWO01iH9xqyFje4b3fXVC%2F1IawDPf3%2Fw7B69xSS60G0rCZi6jRv1NUBEWoVYMCJSKWsUBS5OF12ouNXVf28Upcg8sKf7Rbt4Zx1dnJOvAikkQl5gzurP0B%2BcA42NPYb8LJnEI%2FxKwn8ygT%2BO7gCuXKWd4bcB4sLlizPv3K1Mrig7VEG6MMSw%2FjH6uZ3J0D3kPZCdvM2oyZVPsjpP6K0Bx08KwtiIoWVfq0eKX86qKTVJ4vDkhIidRY%2FvzEumwFMQqEaZeHt5QeuQC6DpHIU51nMMbRnsQGOqUB01MYBQ0R82f2994qCXXJ5fRPdE4yO0sOCtNEKGkzUsPgnjROuZ3BpnkNpzfyX6Q%2FD%2BbSsgt4kJ2XSTx%2BYUyMu0SfDDU%2BBjGfdENQS7RawWh4KVTV%2Bl23AeiIZemLPlWQBDrm7zA5DunEgmok%2BAsXI8pFk8HQwLNhgwz7fX72IqYvUUST5ptOHb3NS5OXuxbMLROiqzl9tw2R9uFc3M43FKJj0tc2&X-Amz-Signature=c7143933e447081852878572229f3c93cc71c21a7e15bb191b4eeecf6b0b01b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5ZYPF7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIH1VBW0WCTUUBu5x7rEyR7mujE6hGCHpsUM8m%2Fv1ISYFAiEAigek%2BoKws7Kz7gaIsDklbvpf8uZUv5K0fdbnwObDPo8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqA9%2BEHK21HvMkngCrcA7fWkkagAMa7KPnaXRjLjv4r7yvrGpCe1HJga%2FCvslE6DjoA9th%2FMqQOPGANzI84AoE9rcN0oZ4Xy1EoMqiPs57BDiF%2BdMJruaCmkeJpD2VA79ZBBMLMUB%2FQpU3S1TCXur0FTwvjt5Ry9psJfC3wrlRCIyXBW%2Fz%2FkZIDY3zucG8nTODh2yl7qNQCLNn9Fa2JXdkIohouzeEwEQcVPyRIvhzqVNALxpO4nP3769zCHe4UU0uItRPNrjUtN93smQfdQVegVNcZy3wClEy5NecEDsKH0sebYI69s5AMKQMzME7mRVQTSlIIn6UmbrX82XfhVXMvTXzHZQ%2FTwVlGNCtAagE%2BTiJK5h2PezTUeYLWO01iH9xqyFje4b3fXVC%2F1IawDPf3%2Fw7B69xSS60G0rCZi6jRv1NUBEWoVYMCJSKWsUBS5OF12ouNXVf28Upcg8sKf7Rbt4Zx1dnJOvAikkQl5gzurP0B%2BcA42NPYb8LJnEI%2FxKwn8ygT%2BO7gCuXKWd4bcB4sLlizPv3K1Mrig7VEG6MMSw%2FjH6uZ3J0D3kPZCdvM2oyZVPsjpP6K0Bx08KwtiIoWVfq0eKX86qKTVJ4vDkhIidRY%2FvzEumwFMQqEaZeHt5QeuQC6DpHIU51nMMbRnsQGOqUB01MYBQ0R82f2994qCXXJ5fRPdE4yO0sOCtNEKGkzUsPgnjROuZ3BpnkNpzfyX6Q%2FD%2BbSsgt4kJ2XSTx%2BYUyMu0SfDDU%2BBjGfdENQS7RawWh4KVTV%2Bl23AeiIZemLPlWQBDrm7zA5DunEgmok%2BAsXI8pFk8HQwLNhgwz7fX72IqYvUUST5ptOHb3NS5OXuxbMLROiqzl9tw2R9uFc3M43FKJj0tc2&X-Amz-Signature=bdaabe220d3febc89a06c7815cfab66a2443b7756c20272fface5dbc91cfdc36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5ZYPF7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIH1VBW0WCTUUBu5x7rEyR7mujE6hGCHpsUM8m%2Fv1ISYFAiEAigek%2BoKws7Kz7gaIsDklbvpf8uZUv5K0fdbnwObDPo8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqA9%2BEHK21HvMkngCrcA7fWkkagAMa7KPnaXRjLjv4r7yvrGpCe1HJga%2FCvslE6DjoA9th%2FMqQOPGANzI84AoE9rcN0oZ4Xy1EoMqiPs57BDiF%2BdMJruaCmkeJpD2VA79ZBBMLMUB%2FQpU3S1TCXur0FTwvjt5Ry9psJfC3wrlRCIyXBW%2Fz%2FkZIDY3zucG8nTODh2yl7qNQCLNn9Fa2JXdkIohouzeEwEQcVPyRIvhzqVNALxpO4nP3769zCHe4UU0uItRPNrjUtN93smQfdQVegVNcZy3wClEy5NecEDsKH0sebYI69s5AMKQMzME7mRVQTSlIIn6UmbrX82XfhVXMvTXzHZQ%2FTwVlGNCtAagE%2BTiJK5h2PezTUeYLWO01iH9xqyFje4b3fXVC%2F1IawDPf3%2Fw7B69xSS60G0rCZi6jRv1NUBEWoVYMCJSKWsUBS5OF12ouNXVf28Upcg8sKf7Rbt4Zx1dnJOvAikkQl5gzurP0B%2BcA42NPYb8LJnEI%2FxKwn8ygT%2BO7gCuXKWd4bcB4sLlizPv3K1Mrig7VEG6MMSw%2FjH6uZ3J0D3kPZCdvM2oyZVPsjpP6K0Bx08KwtiIoWVfq0eKX86qKTVJ4vDkhIidRY%2FvzEumwFMQqEaZeHt5QeuQC6DpHIU51nMMbRnsQGOqUB01MYBQ0R82f2994qCXXJ5fRPdE4yO0sOCtNEKGkzUsPgnjROuZ3BpnkNpzfyX6Q%2FD%2BbSsgt4kJ2XSTx%2BYUyMu0SfDDU%2BBjGfdENQS7RawWh4KVTV%2Bl23AeiIZemLPlWQBDrm7zA5DunEgmok%2BAsXI8pFk8HQwLNhgwz7fX72IqYvUUST5ptOHb3NS5OXuxbMLROiqzl9tw2R9uFc3M43FKJj0tc2&X-Amz-Signature=ce4f03f939ffddd9120c22126722bed544e86282f2ba58a828f850b30f905a03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5ZYPF7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIH1VBW0WCTUUBu5x7rEyR7mujE6hGCHpsUM8m%2Fv1ISYFAiEAigek%2BoKws7Kz7gaIsDklbvpf8uZUv5K0fdbnwObDPo8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqA9%2BEHK21HvMkngCrcA7fWkkagAMa7KPnaXRjLjv4r7yvrGpCe1HJga%2FCvslE6DjoA9th%2FMqQOPGANzI84AoE9rcN0oZ4Xy1EoMqiPs57BDiF%2BdMJruaCmkeJpD2VA79ZBBMLMUB%2FQpU3S1TCXur0FTwvjt5Ry9psJfC3wrlRCIyXBW%2Fz%2FkZIDY3zucG8nTODh2yl7qNQCLNn9Fa2JXdkIohouzeEwEQcVPyRIvhzqVNALxpO4nP3769zCHe4UU0uItRPNrjUtN93smQfdQVegVNcZy3wClEy5NecEDsKH0sebYI69s5AMKQMzME7mRVQTSlIIn6UmbrX82XfhVXMvTXzHZQ%2FTwVlGNCtAagE%2BTiJK5h2PezTUeYLWO01iH9xqyFje4b3fXVC%2F1IawDPf3%2Fw7B69xSS60G0rCZi6jRv1NUBEWoVYMCJSKWsUBS5OF12ouNXVf28Upcg8sKf7Rbt4Zx1dnJOvAikkQl5gzurP0B%2BcA42NPYb8LJnEI%2FxKwn8ygT%2BO7gCuXKWd4bcB4sLlizPv3K1Mrig7VEG6MMSw%2FjH6uZ3J0D3kPZCdvM2oyZVPsjpP6K0Bx08KwtiIoWVfq0eKX86qKTVJ4vDkhIidRY%2FvzEumwFMQqEaZeHt5QeuQC6DpHIU51nMMbRnsQGOqUB01MYBQ0R82f2994qCXXJ5fRPdE4yO0sOCtNEKGkzUsPgnjROuZ3BpnkNpzfyX6Q%2FD%2BbSsgt4kJ2XSTx%2BYUyMu0SfDDU%2BBjGfdENQS7RawWh4KVTV%2Bl23AeiIZemLPlWQBDrm7zA5DunEgmok%2BAsXI8pFk8HQwLNhgwz7fX72IqYvUUST5ptOHb3NS5OXuxbMLROiqzl9tw2R9uFc3M43FKJj0tc2&X-Amz-Signature=bd66b9960899da43fe99d280c84694810027753a7b45ecd74a799b479ba8564b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5ZYPF7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIH1VBW0WCTUUBu5x7rEyR7mujE6hGCHpsUM8m%2Fv1ISYFAiEAigek%2BoKws7Kz7gaIsDklbvpf8uZUv5K0fdbnwObDPo8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqA9%2BEHK21HvMkngCrcA7fWkkagAMa7KPnaXRjLjv4r7yvrGpCe1HJga%2FCvslE6DjoA9th%2FMqQOPGANzI84AoE9rcN0oZ4Xy1EoMqiPs57BDiF%2BdMJruaCmkeJpD2VA79ZBBMLMUB%2FQpU3S1TCXur0FTwvjt5Ry9psJfC3wrlRCIyXBW%2Fz%2FkZIDY3zucG8nTODh2yl7qNQCLNn9Fa2JXdkIohouzeEwEQcVPyRIvhzqVNALxpO4nP3769zCHe4UU0uItRPNrjUtN93smQfdQVegVNcZy3wClEy5NecEDsKH0sebYI69s5AMKQMzME7mRVQTSlIIn6UmbrX82XfhVXMvTXzHZQ%2FTwVlGNCtAagE%2BTiJK5h2PezTUeYLWO01iH9xqyFje4b3fXVC%2F1IawDPf3%2Fw7B69xSS60G0rCZi6jRv1NUBEWoVYMCJSKWsUBS5OF12ouNXVf28Upcg8sKf7Rbt4Zx1dnJOvAikkQl5gzurP0B%2BcA42NPYb8LJnEI%2FxKwn8ygT%2BO7gCuXKWd4bcB4sLlizPv3K1Mrig7VEG6MMSw%2FjH6uZ3J0D3kPZCdvM2oyZVPsjpP6K0Bx08KwtiIoWVfq0eKX86qKTVJ4vDkhIidRY%2FvzEumwFMQqEaZeHt5QeuQC6DpHIU51nMMbRnsQGOqUB01MYBQ0R82f2994qCXXJ5fRPdE4yO0sOCtNEKGkzUsPgnjROuZ3BpnkNpzfyX6Q%2FD%2BbSsgt4kJ2XSTx%2BYUyMu0SfDDU%2BBjGfdENQS7RawWh4KVTV%2Bl23AeiIZemLPlWQBDrm7zA5DunEgmok%2BAsXI8pFk8HQwLNhgwz7fX72IqYvUUST5ptOHb3NS5OXuxbMLROiqzl9tw2R9uFc3M43FKJj0tc2&X-Amz-Signature=7f5eef5ab9fd74fba5e9bd7287416cfdd3abdfd51d91223496be506e6d9d59b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5ZYPF7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIH1VBW0WCTUUBu5x7rEyR7mujE6hGCHpsUM8m%2Fv1ISYFAiEAigek%2BoKws7Kz7gaIsDklbvpf8uZUv5K0fdbnwObDPo8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqA9%2BEHK21HvMkngCrcA7fWkkagAMa7KPnaXRjLjv4r7yvrGpCe1HJga%2FCvslE6DjoA9th%2FMqQOPGANzI84AoE9rcN0oZ4Xy1EoMqiPs57BDiF%2BdMJruaCmkeJpD2VA79ZBBMLMUB%2FQpU3S1TCXur0FTwvjt5Ry9psJfC3wrlRCIyXBW%2Fz%2FkZIDY3zucG8nTODh2yl7qNQCLNn9Fa2JXdkIohouzeEwEQcVPyRIvhzqVNALxpO4nP3769zCHe4UU0uItRPNrjUtN93smQfdQVegVNcZy3wClEy5NecEDsKH0sebYI69s5AMKQMzME7mRVQTSlIIn6UmbrX82XfhVXMvTXzHZQ%2FTwVlGNCtAagE%2BTiJK5h2PezTUeYLWO01iH9xqyFje4b3fXVC%2F1IawDPf3%2Fw7B69xSS60G0rCZi6jRv1NUBEWoVYMCJSKWsUBS5OF12ouNXVf28Upcg8sKf7Rbt4Zx1dnJOvAikkQl5gzurP0B%2BcA42NPYb8LJnEI%2FxKwn8ygT%2BO7gCuXKWd4bcB4sLlizPv3K1Mrig7VEG6MMSw%2FjH6uZ3J0D3kPZCdvM2oyZVPsjpP6K0Bx08KwtiIoWVfq0eKX86qKTVJ4vDkhIidRY%2FvzEumwFMQqEaZeHt5QeuQC6DpHIU51nMMbRnsQGOqUB01MYBQ0R82f2994qCXXJ5fRPdE4yO0sOCtNEKGkzUsPgnjROuZ3BpnkNpzfyX6Q%2FD%2BbSsgt4kJ2XSTx%2BYUyMu0SfDDU%2BBjGfdENQS7RawWh4KVTV%2Bl23AeiIZemLPlWQBDrm7zA5DunEgmok%2BAsXI8pFk8HQwLNhgwz7fX72IqYvUUST5ptOHb3NS5OXuxbMLROiqzl9tw2R9uFc3M43FKJj0tc2&X-Amz-Signature=9abc9b32e929290e6c92ff654ab20b96d3cfc5fd28d3a9ff2a94e8c2393bf450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5ZYPF7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIH1VBW0WCTUUBu5x7rEyR7mujE6hGCHpsUM8m%2Fv1ISYFAiEAigek%2BoKws7Kz7gaIsDklbvpf8uZUv5K0fdbnwObDPo8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqA9%2BEHK21HvMkngCrcA7fWkkagAMa7KPnaXRjLjv4r7yvrGpCe1HJga%2FCvslE6DjoA9th%2FMqQOPGANzI84AoE9rcN0oZ4Xy1EoMqiPs57BDiF%2BdMJruaCmkeJpD2VA79ZBBMLMUB%2FQpU3S1TCXur0FTwvjt5Ry9psJfC3wrlRCIyXBW%2Fz%2FkZIDY3zucG8nTODh2yl7qNQCLNn9Fa2JXdkIohouzeEwEQcVPyRIvhzqVNALxpO4nP3769zCHe4UU0uItRPNrjUtN93smQfdQVegVNcZy3wClEy5NecEDsKH0sebYI69s5AMKQMzME7mRVQTSlIIn6UmbrX82XfhVXMvTXzHZQ%2FTwVlGNCtAagE%2BTiJK5h2PezTUeYLWO01iH9xqyFje4b3fXVC%2F1IawDPf3%2Fw7B69xSS60G0rCZi6jRv1NUBEWoVYMCJSKWsUBS5OF12ouNXVf28Upcg8sKf7Rbt4Zx1dnJOvAikkQl5gzurP0B%2BcA42NPYb8LJnEI%2FxKwn8ygT%2BO7gCuXKWd4bcB4sLlizPv3K1Mrig7VEG6MMSw%2FjH6uZ3J0D3kPZCdvM2oyZVPsjpP6K0Bx08KwtiIoWVfq0eKX86qKTVJ4vDkhIidRY%2FvzEumwFMQqEaZeHt5QeuQC6DpHIU51nMMbRnsQGOqUB01MYBQ0R82f2994qCXXJ5fRPdE4yO0sOCtNEKGkzUsPgnjROuZ3BpnkNpzfyX6Q%2FD%2BbSsgt4kJ2XSTx%2BYUyMu0SfDDU%2BBjGfdENQS7RawWh4KVTV%2Bl23AeiIZemLPlWQBDrm7zA5DunEgmok%2BAsXI8pFk8HQwLNhgwz7fX72IqYvUUST5ptOHb3NS5OXuxbMLROiqzl9tw2R9uFc3M43FKJj0tc2&X-Amz-Signature=3ed96d7ca13bbecbfbcb37a389c2b49d0d15230beb14746e8d1cbf368523f88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
