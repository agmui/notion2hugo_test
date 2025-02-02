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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466623TQGKE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE67IzhVFMdIpwP5iP7x17ISa7PXVgfTb2bhV0Q%2FsgIwAiEAkdsQ%2FLfBaeO4tgH1rQhOnY6te6hvj0UxC0DP9H87bhcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXKoMMvrZMC829uByrcAzPKOIk16jk%2Bzlwtc0XCv338AYQuH01JXZfMFfe%2FGkwDAKXd%2BoWQbZLYg7acgLze87zJ4ysIN5HemQogrEx8lodmNMDXEnF1mTyCiAgN26swFPklzMu6CiJ%2FyzBaegJBolo9b58F4KvbxCA3YOcHYSRYAV64Q3SR0QF2a4z2C5RBmhgkrgjqq7SWg%2F00prP3ke3UiXE5r5EIDFkZTeRQMQdMT3IN2NiRS5QrdybAZ0j4iANpUSdchQereM08B4hcp1UcHtM0WlTAKFsJQGz85WfNKxcUoEb8q5yroMSuFdkTX%2FA%2BiFKCrFLg0cPZz6d4llCp0auIdz2NFltpK%2B7RizUPznHaR3%2FNQIwst%2F9SqleQUParKds37cHsqQMFLvdnotab%2BFcFGTT8QOcl%2BG9pesLP77oEcPHbgNMv3q9edX7q4vzS4fkuoRP6cQ2qcTlDb3NJdJQB5LXmVg24JROFZW%2BmnnfY9e9uhpcih%2FNb7whpJXSZ5pGrkdg4jwVS6XlEUbg%2FfyLkO2WMgS4%2FWU51EFC58oi0Gq7P%2BIiaM9S44VNepqc%2FSkJfMDMGCAOG24SzJzKJwUDh29fwKFKomBapIvVDJNwg1JUAfgLpOkbugRUYiTdzs8FGuVY0VefaMIad%2FLwGOqUBspYs%2FsvZKk3S3WZ5P4CHXOlySwYYrMRazKKloHjQPRzOQDPt3FoZYLpcyDojV4auP3138IDkPiZRPNdhb6KKLYqo9CFfnbOcrJdZrw98jfKaqwNBywAdF6Xyey5V1PCalRMCUR1PPKkag7xT2ZR4RZozi2%2BOj9aR%2FZaxXDaVq%2FZM0U%2BYGXiE0oQ1kuxgPO0iEzlMYlr7R%2BPNRtqHdam0DAar%2FoB3&X-Amz-Signature=90170f2e6e11e31128b2539e57813b68933981e66780e9710764187ed2ca84e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466623TQGKE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE67IzhVFMdIpwP5iP7x17ISa7PXVgfTb2bhV0Q%2FsgIwAiEAkdsQ%2FLfBaeO4tgH1rQhOnY6te6hvj0UxC0DP9H87bhcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXKoMMvrZMC829uByrcAzPKOIk16jk%2Bzlwtc0XCv338AYQuH01JXZfMFfe%2FGkwDAKXd%2BoWQbZLYg7acgLze87zJ4ysIN5HemQogrEx8lodmNMDXEnF1mTyCiAgN26swFPklzMu6CiJ%2FyzBaegJBolo9b58F4KvbxCA3YOcHYSRYAV64Q3SR0QF2a4z2C5RBmhgkrgjqq7SWg%2F00prP3ke3UiXE5r5EIDFkZTeRQMQdMT3IN2NiRS5QrdybAZ0j4iANpUSdchQereM08B4hcp1UcHtM0WlTAKFsJQGz85WfNKxcUoEb8q5yroMSuFdkTX%2FA%2BiFKCrFLg0cPZz6d4llCp0auIdz2NFltpK%2B7RizUPznHaR3%2FNQIwst%2F9SqleQUParKds37cHsqQMFLvdnotab%2BFcFGTT8QOcl%2BG9pesLP77oEcPHbgNMv3q9edX7q4vzS4fkuoRP6cQ2qcTlDb3NJdJQB5LXmVg24JROFZW%2BmnnfY9e9uhpcih%2FNb7whpJXSZ5pGrkdg4jwVS6XlEUbg%2FfyLkO2WMgS4%2FWU51EFC58oi0Gq7P%2BIiaM9S44VNepqc%2FSkJfMDMGCAOG24SzJzKJwUDh29fwKFKomBapIvVDJNwg1JUAfgLpOkbugRUYiTdzs8FGuVY0VefaMIad%2FLwGOqUBspYs%2FsvZKk3S3WZ5P4CHXOlySwYYrMRazKKloHjQPRzOQDPt3FoZYLpcyDojV4auP3138IDkPiZRPNdhb6KKLYqo9CFfnbOcrJdZrw98jfKaqwNBywAdF6Xyey5V1PCalRMCUR1PPKkag7xT2ZR4RZozi2%2BOj9aR%2FZaxXDaVq%2FZM0U%2BYGXiE0oQ1kuxgPO0iEzlMYlr7R%2BPNRtqHdam0DAar%2FoB3&X-Amz-Signature=389b048dfb3df2a90d2baf0e188a70aee04a7645d6e8adc8c1d0c84b9aada691&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466623TQGKE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE67IzhVFMdIpwP5iP7x17ISa7PXVgfTb2bhV0Q%2FsgIwAiEAkdsQ%2FLfBaeO4tgH1rQhOnY6te6hvj0UxC0DP9H87bhcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXKoMMvrZMC829uByrcAzPKOIk16jk%2Bzlwtc0XCv338AYQuH01JXZfMFfe%2FGkwDAKXd%2BoWQbZLYg7acgLze87zJ4ysIN5HemQogrEx8lodmNMDXEnF1mTyCiAgN26swFPklzMu6CiJ%2FyzBaegJBolo9b58F4KvbxCA3YOcHYSRYAV64Q3SR0QF2a4z2C5RBmhgkrgjqq7SWg%2F00prP3ke3UiXE5r5EIDFkZTeRQMQdMT3IN2NiRS5QrdybAZ0j4iANpUSdchQereM08B4hcp1UcHtM0WlTAKFsJQGz85WfNKxcUoEb8q5yroMSuFdkTX%2FA%2BiFKCrFLg0cPZz6d4llCp0auIdz2NFltpK%2B7RizUPznHaR3%2FNQIwst%2F9SqleQUParKds37cHsqQMFLvdnotab%2BFcFGTT8QOcl%2BG9pesLP77oEcPHbgNMv3q9edX7q4vzS4fkuoRP6cQ2qcTlDb3NJdJQB5LXmVg24JROFZW%2BmnnfY9e9uhpcih%2FNb7whpJXSZ5pGrkdg4jwVS6XlEUbg%2FfyLkO2WMgS4%2FWU51EFC58oi0Gq7P%2BIiaM9S44VNepqc%2FSkJfMDMGCAOG24SzJzKJwUDh29fwKFKomBapIvVDJNwg1JUAfgLpOkbugRUYiTdzs8FGuVY0VefaMIad%2FLwGOqUBspYs%2FsvZKk3S3WZ5P4CHXOlySwYYrMRazKKloHjQPRzOQDPt3FoZYLpcyDojV4auP3138IDkPiZRPNdhb6KKLYqo9CFfnbOcrJdZrw98jfKaqwNBywAdF6Xyey5V1PCalRMCUR1PPKkag7xT2ZR4RZozi2%2BOj9aR%2FZaxXDaVq%2FZM0U%2BYGXiE0oQ1kuxgPO0iEzlMYlr7R%2BPNRtqHdam0DAar%2FoB3&X-Amz-Signature=ae51e036cd6d45c3c564ce014d1f0ffd657fa7d667e804537398d1f526384898&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466623TQGKE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE67IzhVFMdIpwP5iP7x17ISa7PXVgfTb2bhV0Q%2FsgIwAiEAkdsQ%2FLfBaeO4tgH1rQhOnY6te6hvj0UxC0DP9H87bhcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXKoMMvrZMC829uByrcAzPKOIk16jk%2Bzlwtc0XCv338AYQuH01JXZfMFfe%2FGkwDAKXd%2BoWQbZLYg7acgLze87zJ4ysIN5HemQogrEx8lodmNMDXEnF1mTyCiAgN26swFPklzMu6CiJ%2FyzBaegJBolo9b58F4KvbxCA3YOcHYSRYAV64Q3SR0QF2a4z2C5RBmhgkrgjqq7SWg%2F00prP3ke3UiXE5r5EIDFkZTeRQMQdMT3IN2NiRS5QrdybAZ0j4iANpUSdchQereM08B4hcp1UcHtM0WlTAKFsJQGz85WfNKxcUoEb8q5yroMSuFdkTX%2FA%2BiFKCrFLg0cPZz6d4llCp0auIdz2NFltpK%2B7RizUPznHaR3%2FNQIwst%2F9SqleQUParKds37cHsqQMFLvdnotab%2BFcFGTT8QOcl%2BG9pesLP77oEcPHbgNMv3q9edX7q4vzS4fkuoRP6cQ2qcTlDb3NJdJQB5LXmVg24JROFZW%2BmnnfY9e9uhpcih%2FNb7whpJXSZ5pGrkdg4jwVS6XlEUbg%2FfyLkO2WMgS4%2FWU51EFC58oi0Gq7P%2BIiaM9S44VNepqc%2FSkJfMDMGCAOG24SzJzKJwUDh29fwKFKomBapIvVDJNwg1JUAfgLpOkbugRUYiTdzs8FGuVY0VefaMIad%2FLwGOqUBspYs%2FsvZKk3S3WZ5P4CHXOlySwYYrMRazKKloHjQPRzOQDPt3FoZYLpcyDojV4auP3138IDkPiZRPNdhb6KKLYqo9CFfnbOcrJdZrw98jfKaqwNBywAdF6Xyey5V1PCalRMCUR1PPKkag7xT2ZR4RZozi2%2BOj9aR%2FZaxXDaVq%2FZM0U%2BYGXiE0oQ1kuxgPO0iEzlMYlr7R%2BPNRtqHdam0DAar%2FoB3&X-Amz-Signature=ed64bb237b260f894087829c229644f9193cb8229cca4c264bac6b71c58bd2a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466623TQGKE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE67IzhVFMdIpwP5iP7x17ISa7PXVgfTb2bhV0Q%2FsgIwAiEAkdsQ%2FLfBaeO4tgH1rQhOnY6te6hvj0UxC0DP9H87bhcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXKoMMvrZMC829uByrcAzPKOIk16jk%2Bzlwtc0XCv338AYQuH01JXZfMFfe%2FGkwDAKXd%2BoWQbZLYg7acgLze87zJ4ysIN5HemQogrEx8lodmNMDXEnF1mTyCiAgN26swFPklzMu6CiJ%2FyzBaegJBolo9b58F4KvbxCA3YOcHYSRYAV64Q3SR0QF2a4z2C5RBmhgkrgjqq7SWg%2F00prP3ke3UiXE5r5EIDFkZTeRQMQdMT3IN2NiRS5QrdybAZ0j4iANpUSdchQereM08B4hcp1UcHtM0WlTAKFsJQGz85WfNKxcUoEb8q5yroMSuFdkTX%2FA%2BiFKCrFLg0cPZz6d4llCp0auIdz2NFltpK%2B7RizUPznHaR3%2FNQIwst%2F9SqleQUParKds37cHsqQMFLvdnotab%2BFcFGTT8QOcl%2BG9pesLP77oEcPHbgNMv3q9edX7q4vzS4fkuoRP6cQ2qcTlDb3NJdJQB5LXmVg24JROFZW%2BmnnfY9e9uhpcih%2FNb7whpJXSZ5pGrkdg4jwVS6XlEUbg%2FfyLkO2WMgS4%2FWU51EFC58oi0Gq7P%2BIiaM9S44VNepqc%2FSkJfMDMGCAOG24SzJzKJwUDh29fwKFKomBapIvVDJNwg1JUAfgLpOkbugRUYiTdzs8FGuVY0VefaMIad%2FLwGOqUBspYs%2FsvZKk3S3WZ5P4CHXOlySwYYrMRazKKloHjQPRzOQDPt3FoZYLpcyDojV4auP3138IDkPiZRPNdhb6KKLYqo9CFfnbOcrJdZrw98jfKaqwNBywAdF6Xyey5V1PCalRMCUR1PPKkag7xT2ZR4RZozi2%2BOj9aR%2FZaxXDaVq%2FZM0U%2BYGXiE0oQ1kuxgPO0iEzlMYlr7R%2BPNRtqHdam0DAar%2FoB3&X-Amz-Signature=33588c4babb8be8e5fe58fd1243518a1ca19e3195cf79b9993c675732f638735&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466623TQGKE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE67IzhVFMdIpwP5iP7x17ISa7PXVgfTb2bhV0Q%2FsgIwAiEAkdsQ%2FLfBaeO4tgH1rQhOnY6te6hvj0UxC0DP9H87bhcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXKoMMvrZMC829uByrcAzPKOIk16jk%2Bzlwtc0XCv338AYQuH01JXZfMFfe%2FGkwDAKXd%2BoWQbZLYg7acgLze87zJ4ysIN5HemQogrEx8lodmNMDXEnF1mTyCiAgN26swFPklzMu6CiJ%2FyzBaegJBolo9b58F4KvbxCA3YOcHYSRYAV64Q3SR0QF2a4z2C5RBmhgkrgjqq7SWg%2F00prP3ke3UiXE5r5EIDFkZTeRQMQdMT3IN2NiRS5QrdybAZ0j4iANpUSdchQereM08B4hcp1UcHtM0WlTAKFsJQGz85WfNKxcUoEb8q5yroMSuFdkTX%2FA%2BiFKCrFLg0cPZz6d4llCp0auIdz2NFltpK%2B7RizUPznHaR3%2FNQIwst%2F9SqleQUParKds37cHsqQMFLvdnotab%2BFcFGTT8QOcl%2BG9pesLP77oEcPHbgNMv3q9edX7q4vzS4fkuoRP6cQ2qcTlDb3NJdJQB5LXmVg24JROFZW%2BmnnfY9e9uhpcih%2FNb7whpJXSZ5pGrkdg4jwVS6XlEUbg%2FfyLkO2WMgS4%2FWU51EFC58oi0Gq7P%2BIiaM9S44VNepqc%2FSkJfMDMGCAOG24SzJzKJwUDh29fwKFKomBapIvVDJNwg1JUAfgLpOkbugRUYiTdzs8FGuVY0VefaMIad%2FLwGOqUBspYs%2FsvZKk3S3WZ5P4CHXOlySwYYrMRazKKloHjQPRzOQDPt3FoZYLpcyDojV4auP3138IDkPiZRPNdhb6KKLYqo9CFfnbOcrJdZrw98jfKaqwNBywAdF6Xyey5V1PCalRMCUR1PPKkag7xT2ZR4RZozi2%2BOj9aR%2FZaxXDaVq%2FZM0U%2BYGXiE0oQ1kuxgPO0iEzlMYlr7R%2BPNRtqHdam0DAar%2FoB3&X-Amz-Signature=513c47d1a6b46c49849cfe39a52962d9c888390b03e77232b97bb1500a3ab224&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466623TQGKE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE67IzhVFMdIpwP5iP7x17ISa7PXVgfTb2bhV0Q%2FsgIwAiEAkdsQ%2FLfBaeO4tgH1rQhOnY6te6hvj0UxC0DP9H87bhcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXKoMMvrZMC829uByrcAzPKOIk16jk%2Bzlwtc0XCv338AYQuH01JXZfMFfe%2FGkwDAKXd%2BoWQbZLYg7acgLze87zJ4ysIN5HemQogrEx8lodmNMDXEnF1mTyCiAgN26swFPklzMu6CiJ%2FyzBaegJBolo9b58F4KvbxCA3YOcHYSRYAV64Q3SR0QF2a4z2C5RBmhgkrgjqq7SWg%2F00prP3ke3UiXE5r5EIDFkZTeRQMQdMT3IN2NiRS5QrdybAZ0j4iANpUSdchQereM08B4hcp1UcHtM0WlTAKFsJQGz85WfNKxcUoEb8q5yroMSuFdkTX%2FA%2BiFKCrFLg0cPZz6d4llCp0auIdz2NFltpK%2B7RizUPznHaR3%2FNQIwst%2F9SqleQUParKds37cHsqQMFLvdnotab%2BFcFGTT8QOcl%2BG9pesLP77oEcPHbgNMv3q9edX7q4vzS4fkuoRP6cQ2qcTlDb3NJdJQB5LXmVg24JROFZW%2BmnnfY9e9uhpcih%2FNb7whpJXSZ5pGrkdg4jwVS6XlEUbg%2FfyLkO2WMgS4%2FWU51EFC58oi0Gq7P%2BIiaM9S44VNepqc%2FSkJfMDMGCAOG24SzJzKJwUDh29fwKFKomBapIvVDJNwg1JUAfgLpOkbugRUYiTdzs8FGuVY0VefaMIad%2FLwGOqUBspYs%2FsvZKk3S3WZ5P4CHXOlySwYYrMRazKKloHjQPRzOQDPt3FoZYLpcyDojV4auP3138IDkPiZRPNdhb6KKLYqo9CFfnbOcrJdZrw98jfKaqwNBywAdF6Xyey5V1PCalRMCUR1PPKkag7xT2ZR4RZozi2%2BOj9aR%2FZaxXDaVq%2FZM0U%2BYGXiE0oQ1kuxgPO0iEzlMYlr7R%2BPNRtqHdam0DAar%2FoB3&X-Amz-Signature=5c75067bd32bc4fb48956eb326c037a28cfc999e3a1b4a0c0b725eff4665c5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
