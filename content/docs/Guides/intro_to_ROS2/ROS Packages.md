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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDPSEDH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv%2BwE%2FaPk4UeS9BBjwZFfRORD6hCC%2FX3wOvRbbZDyb3wIgW4z7YSev0cTggAQuRUVFuUlooK5sv%2B3qQtfSKeB5hhsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiWoHemi%2FOw9l6N6ircA93E4JuowUvDc1aNwARbkVFgYReCmY5VepGvE3UBsWGCPZR6zJvniM1tA81jzz6pV7dFVrBmrqZ3impBIj8sM1kv0Anhm%2B2FccHIv4d7WKxo7CkKJ2UQCRzYRNXB0SdbLlMo2UImbFDXFTK%2BNM%2BE5zlOmS9bYNfD01B%2FbQHzMBVE0B54AC5RXEYPNSZhALTJ1sfnbhqMWUJOwa9%2BajAijQMbN3rTPTf2amZcEja%2BcvofaBOlfj%2BnXxecuCz0NmsJ8ODdhRjZ5vELTHD6bL1WleylHTYNmidAE%2FH5ZTBIQNaWWfoUueBnAp%2BVcqS%2BMC%2FJAXoazXBrLSe7JS9Lei%2BMFRTU2xGsj3K1iBpVPB9MFZs3yuCVEMghI5yiC2rOpx81350yqxo%2FZMZJrvu9P9z9D0s7CYMD4mmlHxL6Vyg0WBlfFuwwi%2FxmXoIFp89hlj1z3pyEInvx0SZ6VWCK7Wq%2BHO0aNeg6xnUPHbwK%2BI63SOBnL6wgdgMoKcSnMYN94myAM%2Bpu3kRG8w9Hh3i3TRJiq2DtAlR%2FB7I9bQt9ghT%2BArlN2hsdfJJ65mptvudk%2FwkwDGCpHNlvFLFoTQ4ANoiKn5XiMpSmPmb%2FgqS8YUUbk8V9SY2ySrr58JdlvwyZMN%2FK%2FsIGOqUBJTeNv6xi8vaWsPL3O2vxrU4U6mIi5CHtkg2kjUvM18qhoHtXX8srDrBwgg9KOXQMZHe20693Ita56kI%2BS%2F2FmIvZTX6KgMlMnHOJZ3E%2Fzczu6%2FvAhjC62YmKsyKISctxWCA53IdvS7XxXV6fZkIk9OdfSwri4kLmUfGy%2B644CjsB2gp%2BuneVGkcDze8xY%2FNZyjXjpqm%2Fuy71aqcoNfB6dmpi7GwT&X-Amz-Signature=f5c87fd5df8902b771c0a8123163e139c2ad6129ec195682394150453e88be1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDPSEDH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv%2BwE%2FaPk4UeS9BBjwZFfRORD6hCC%2FX3wOvRbbZDyb3wIgW4z7YSev0cTggAQuRUVFuUlooK5sv%2B3qQtfSKeB5hhsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiWoHemi%2FOw9l6N6ircA93E4JuowUvDc1aNwARbkVFgYReCmY5VepGvE3UBsWGCPZR6zJvniM1tA81jzz6pV7dFVrBmrqZ3impBIj8sM1kv0Anhm%2B2FccHIv4d7WKxo7CkKJ2UQCRzYRNXB0SdbLlMo2UImbFDXFTK%2BNM%2BE5zlOmS9bYNfD01B%2FbQHzMBVE0B54AC5RXEYPNSZhALTJ1sfnbhqMWUJOwa9%2BajAijQMbN3rTPTf2amZcEja%2BcvofaBOlfj%2BnXxecuCz0NmsJ8ODdhRjZ5vELTHD6bL1WleylHTYNmidAE%2FH5ZTBIQNaWWfoUueBnAp%2BVcqS%2BMC%2FJAXoazXBrLSe7JS9Lei%2BMFRTU2xGsj3K1iBpVPB9MFZs3yuCVEMghI5yiC2rOpx81350yqxo%2FZMZJrvu9P9z9D0s7CYMD4mmlHxL6Vyg0WBlfFuwwi%2FxmXoIFp89hlj1z3pyEInvx0SZ6VWCK7Wq%2BHO0aNeg6xnUPHbwK%2BI63SOBnL6wgdgMoKcSnMYN94myAM%2Bpu3kRG8w9Hh3i3TRJiq2DtAlR%2FB7I9bQt9ghT%2BArlN2hsdfJJ65mptvudk%2FwkwDGCpHNlvFLFoTQ4ANoiKn5XiMpSmPmb%2FgqS8YUUbk8V9SY2ySrr58JdlvwyZMN%2FK%2FsIGOqUBJTeNv6xi8vaWsPL3O2vxrU4U6mIi5CHtkg2kjUvM18qhoHtXX8srDrBwgg9KOXQMZHe20693Ita56kI%2BS%2F2FmIvZTX6KgMlMnHOJZ3E%2Fzczu6%2FvAhjC62YmKsyKISctxWCA53IdvS7XxXV6fZkIk9OdfSwri4kLmUfGy%2B644CjsB2gp%2BuneVGkcDze8xY%2FNZyjXjpqm%2Fuy71aqcoNfB6dmpi7GwT&X-Amz-Signature=726726d0c17129050466889dd365d707ce99b3b5a37ed72e0956b14f24f7c08b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDPSEDH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv%2BwE%2FaPk4UeS9BBjwZFfRORD6hCC%2FX3wOvRbbZDyb3wIgW4z7YSev0cTggAQuRUVFuUlooK5sv%2B3qQtfSKeB5hhsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiWoHemi%2FOw9l6N6ircA93E4JuowUvDc1aNwARbkVFgYReCmY5VepGvE3UBsWGCPZR6zJvniM1tA81jzz6pV7dFVrBmrqZ3impBIj8sM1kv0Anhm%2B2FccHIv4d7WKxo7CkKJ2UQCRzYRNXB0SdbLlMo2UImbFDXFTK%2BNM%2BE5zlOmS9bYNfD01B%2FbQHzMBVE0B54AC5RXEYPNSZhALTJ1sfnbhqMWUJOwa9%2BajAijQMbN3rTPTf2amZcEja%2BcvofaBOlfj%2BnXxecuCz0NmsJ8ODdhRjZ5vELTHD6bL1WleylHTYNmidAE%2FH5ZTBIQNaWWfoUueBnAp%2BVcqS%2BMC%2FJAXoazXBrLSe7JS9Lei%2BMFRTU2xGsj3K1iBpVPB9MFZs3yuCVEMghI5yiC2rOpx81350yqxo%2FZMZJrvu9P9z9D0s7CYMD4mmlHxL6Vyg0WBlfFuwwi%2FxmXoIFp89hlj1z3pyEInvx0SZ6VWCK7Wq%2BHO0aNeg6xnUPHbwK%2BI63SOBnL6wgdgMoKcSnMYN94myAM%2Bpu3kRG8w9Hh3i3TRJiq2DtAlR%2FB7I9bQt9ghT%2BArlN2hsdfJJ65mptvudk%2FwkwDGCpHNlvFLFoTQ4ANoiKn5XiMpSmPmb%2FgqS8YUUbk8V9SY2ySrr58JdlvwyZMN%2FK%2FsIGOqUBJTeNv6xi8vaWsPL3O2vxrU4U6mIi5CHtkg2kjUvM18qhoHtXX8srDrBwgg9KOXQMZHe20693Ita56kI%2BS%2F2FmIvZTX6KgMlMnHOJZ3E%2Fzczu6%2FvAhjC62YmKsyKISctxWCA53IdvS7XxXV6fZkIk9OdfSwri4kLmUfGy%2B644CjsB2gp%2BuneVGkcDze8xY%2FNZyjXjpqm%2Fuy71aqcoNfB6dmpi7GwT&X-Amz-Signature=7ed736b59273098545148aa16c06e8106ac5b8a5a67eedd7dc8450997b022e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDPSEDH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv%2BwE%2FaPk4UeS9BBjwZFfRORD6hCC%2FX3wOvRbbZDyb3wIgW4z7YSev0cTggAQuRUVFuUlooK5sv%2B3qQtfSKeB5hhsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiWoHemi%2FOw9l6N6ircA93E4JuowUvDc1aNwARbkVFgYReCmY5VepGvE3UBsWGCPZR6zJvniM1tA81jzz6pV7dFVrBmrqZ3impBIj8sM1kv0Anhm%2B2FccHIv4d7WKxo7CkKJ2UQCRzYRNXB0SdbLlMo2UImbFDXFTK%2BNM%2BE5zlOmS9bYNfD01B%2FbQHzMBVE0B54AC5RXEYPNSZhALTJ1sfnbhqMWUJOwa9%2BajAijQMbN3rTPTf2amZcEja%2BcvofaBOlfj%2BnXxecuCz0NmsJ8ODdhRjZ5vELTHD6bL1WleylHTYNmidAE%2FH5ZTBIQNaWWfoUueBnAp%2BVcqS%2BMC%2FJAXoazXBrLSe7JS9Lei%2BMFRTU2xGsj3K1iBpVPB9MFZs3yuCVEMghI5yiC2rOpx81350yqxo%2FZMZJrvu9P9z9D0s7CYMD4mmlHxL6Vyg0WBlfFuwwi%2FxmXoIFp89hlj1z3pyEInvx0SZ6VWCK7Wq%2BHO0aNeg6xnUPHbwK%2BI63SOBnL6wgdgMoKcSnMYN94myAM%2Bpu3kRG8w9Hh3i3TRJiq2DtAlR%2FB7I9bQt9ghT%2BArlN2hsdfJJ65mptvudk%2FwkwDGCpHNlvFLFoTQ4ANoiKn5XiMpSmPmb%2FgqS8YUUbk8V9SY2ySrr58JdlvwyZMN%2FK%2FsIGOqUBJTeNv6xi8vaWsPL3O2vxrU4U6mIi5CHtkg2kjUvM18qhoHtXX8srDrBwgg9KOXQMZHe20693Ita56kI%2BS%2F2FmIvZTX6KgMlMnHOJZ3E%2Fzczu6%2FvAhjC62YmKsyKISctxWCA53IdvS7XxXV6fZkIk9OdfSwri4kLmUfGy%2B644CjsB2gp%2BuneVGkcDze8xY%2FNZyjXjpqm%2Fuy71aqcoNfB6dmpi7GwT&X-Amz-Signature=f4774a3f69b28359d2c1bfb9ffe22198babb70a98038c88d48fb19cdf030e169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDPSEDH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv%2BwE%2FaPk4UeS9BBjwZFfRORD6hCC%2FX3wOvRbbZDyb3wIgW4z7YSev0cTggAQuRUVFuUlooK5sv%2B3qQtfSKeB5hhsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiWoHemi%2FOw9l6N6ircA93E4JuowUvDc1aNwARbkVFgYReCmY5VepGvE3UBsWGCPZR6zJvniM1tA81jzz6pV7dFVrBmrqZ3impBIj8sM1kv0Anhm%2B2FccHIv4d7WKxo7CkKJ2UQCRzYRNXB0SdbLlMo2UImbFDXFTK%2BNM%2BE5zlOmS9bYNfD01B%2FbQHzMBVE0B54AC5RXEYPNSZhALTJ1sfnbhqMWUJOwa9%2BajAijQMbN3rTPTf2amZcEja%2BcvofaBOlfj%2BnXxecuCz0NmsJ8ODdhRjZ5vELTHD6bL1WleylHTYNmidAE%2FH5ZTBIQNaWWfoUueBnAp%2BVcqS%2BMC%2FJAXoazXBrLSe7JS9Lei%2BMFRTU2xGsj3K1iBpVPB9MFZs3yuCVEMghI5yiC2rOpx81350yqxo%2FZMZJrvu9P9z9D0s7CYMD4mmlHxL6Vyg0WBlfFuwwi%2FxmXoIFp89hlj1z3pyEInvx0SZ6VWCK7Wq%2BHO0aNeg6xnUPHbwK%2BI63SOBnL6wgdgMoKcSnMYN94myAM%2Bpu3kRG8w9Hh3i3TRJiq2DtAlR%2FB7I9bQt9ghT%2BArlN2hsdfJJ65mptvudk%2FwkwDGCpHNlvFLFoTQ4ANoiKn5XiMpSmPmb%2FgqS8YUUbk8V9SY2ySrr58JdlvwyZMN%2FK%2FsIGOqUBJTeNv6xi8vaWsPL3O2vxrU4U6mIi5CHtkg2kjUvM18qhoHtXX8srDrBwgg9KOXQMZHe20693Ita56kI%2BS%2F2FmIvZTX6KgMlMnHOJZ3E%2Fzczu6%2FvAhjC62YmKsyKISctxWCA53IdvS7XxXV6fZkIk9OdfSwri4kLmUfGy%2B644CjsB2gp%2BuneVGkcDze8xY%2FNZyjXjpqm%2Fuy71aqcoNfB6dmpi7GwT&X-Amz-Signature=f814426599b88239611638d6202000c2a8ce0a48f7ebe2025d8492b8d2b2239b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDPSEDH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv%2BwE%2FaPk4UeS9BBjwZFfRORD6hCC%2FX3wOvRbbZDyb3wIgW4z7YSev0cTggAQuRUVFuUlooK5sv%2B3qQtfSKeB5hhsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiWoHemi%2FOw9l6N6ircA93E4JuowUvDc1aNwARbkVFgYReCmY5VepGvE3UBsWGCPZR6zJvniM1tA81jzz6pV7dFVrBmrqZ3impBIj8sM1kv0Anhm%2B2FccHIv4d7WKxo7CkKJ2UQCRzYRNXB0SdbLlMo2UImbFDXFTK%2BNM%2BE5zlOmS9bYNfD01B%2FbQHzMBVE0B54AC5RXEYPNSZhALTJ1sfnbhqMWUJOwa9%2BajAijQMbN3rTPTf2amZcEja%2BcvofaBOlfj%2BnXxecuCz0NmsJ8ODdhRjZ5vELTHD6bL1WleylHTYNmidAE%2FH5ZTBIQNaWWfoUueBnAp%2BVcqS%2BMC%2FJAXoazXBrLSe7JS9Lei%2BMFRTU2xGsj3K1iBpVPB9MFZs3yuCVEMghI5yiC2rOpx81350yqxo%2FZMZJrvu9P9z9D0s7CYMD4mmlHxL6Vyg0WBlfFuwwi%2FxmXoIFp89hlj1z3pyEInvx0SZ6VWCK7Wq%2BHO0aNeg6xnUPHbwK%2BI63SOBnL6wgdgMoKcSnMYN94myAM%2Bpu3kRG8w9Hh3i3TRJiq2DtAlR%2FB7I9bQt9ghT%2BArlN2hsdfJJ65mptvudk%2FwkwDGCpHNlvFLFoTQ4ANoiKn5XiMpSmPmb%2FgqS8YUUbk8V9SY2ySrr58JdlvwyZMN%2FK%2FsIGOqUBJTeNv6xi8vaWsPL3O2vxrU4U6mIi5CHtkg2kjUvM18qhoHtXX8srDrBwgg9KOXQMZHe20693Ita56kI%2BS%2F2FmIvZTX6KgMlMnHOJZ3E%2Fzczu6%2FvAhjC62YmKsyKISctxWCA53IdvS7XxXV6fZkIk9OdfSwri4kLmUfGy%2B644CjsB2gp%2BuneVGkcDze8xY%2FNZyjXjpqm%2Fuy71aqcoNfB6dmpi7GwT&X-Amz-Signature=72398eef8dba8e0d4d746b99729ca62418be04d57c53c293e09e6bd6dd5a7fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDPSEDH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv%2BwE%2FaPk4UeS9BBjwZFfRORD6hCC%2FX3wOvRbbZDyb3wIgW4z7YSev0cTggAQuRUVFuUlooK5sv%2B3qQtfSKeB5hhsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiWoHemi%2FOw9l6N6ircA93E4JuowUvDc1aNwARbkVFgYReCmY5VepGvE3UBsWGCPZR6zJvniM1tA81jzz6pV7dFVrBmrqZ3impBIj8sM1kv0Anhm%2B2FccHIv4d7WKxo7CkKJ2UQCRzYRNXB0SdbLlMo2UImbFDXFTK%2BNM%2BE5zlOmS9bYNfD01B%2FbQHzMBVE0B54AC5RXEYPNSZhALTJ1sfnbhqMWUJOwa9%2BajAijQMbN3rTPTf2amZcEja%2BcvofaBOlfj%2BnXxecuCz0NmsJ8ODdhRjZ5vELTHD6bL1WleylHTYNmidAE%2FH5ZTBIQNaWWfoUueBnAp%2BVcqS%2BMC%2FJAXoazXBrLSe7JS9Lei%2BMFRTU2xGsj3K1iBpVPB9MFZs3yuCVEMghI5yiC2rOpx81350yqxo%2FZMZJrvu9P9z9D0s7CYMD4mmlHxL6Vyg0WBlfFuwwi%2FxmXoIFp89hlj1z3pyEInvx0SZ6VWCK7Wq%2BHO0aNeg6xnUPHbwK%2BI63SOBnL6wgdgMoKcSnMYN94myAM%2Bpu3kRG8w9Hh3i3TRJiq2DtAlR%2FB7I9bQt9ghT%2BArlN2hsdfJJ65mptvudk%2FwkwDGCpHNlvFLFoTQ4ANoiKn5XiMpSmPmb%2FgqS8YUUbk8V9SY2ySrr58JdlvwyZMN%2FK%2FsIGOqUBJTeNv6xi8vaWsPL3O2vxrU4U6mIi5CHtkg2kjUvM18qhoHtXX8srDrBwgg9KOXQMZHe20693Ita56kI%2BS%2F2FmIvZTX6KgMlMnHOJZ3E%2Fzczu6%2FvAhjC62YmKsyKISctxWCA53IdvS7XxXV6fZkIk9OdfSwri4kLmUfGy%2B644CjsB2gp%2BuneVGkcDze8xY%2FNZyjXjpqm%2Fuy71aqcoNfB6dmpi7GwT&X-Amz-Signature=cb682e30f59e4e6797e62c437c25fa087f922fec873ae58c83be973a2567abf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
