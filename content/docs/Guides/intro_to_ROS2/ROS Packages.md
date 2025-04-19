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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETLTK64%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBdczpusd0KGgKyQfFyTBzs00GP8N29ufezSRW1LorhZAiEAmisK9V8cAOiQNtpcOBRMiETgKWsnMj%2FhN36b794j5ZsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1jLNJ7CRjpI4x2hCrcAy9VMFaEf6CuNqBZM2DI83VaE9yrShTmhAzI%2BN225QU77Fa3EeqVrjBpdXglYSHuV0qtTowlUQqmHml1u6tjThGWOZVEJzLM%2FTU9lG2aqgj48RBBrQ7EMcYdDtYDPZe6L5V413BN6r0n7Ul1fp2%2BRUusHpYOdGn4LtDpNKw7iF3RbBFj6x0xOGEUNUz7eg78IvpOmmRWP%2FepHdoA63Dp%2FqWQDfVsoIPwDhWw1GvwIv5T6OHOYHWWCLdgW8BtIIlLHPKVpMtLH8Ed6KomhDZ4Q42Ruh157G%2FtSrSwmAsGmHfO5PwxfkOUmIzbGayXTrbz1YHI1LkxdJ03lQGxofuLJbaqzixakLRtXcxpjqG65CbSVKW%2BjmbYE%2FXsKJ8fPSCJGwbTsH5zzxSigKoHX6kDU0nMGoC41wpLehhCnzIz%2FhJzgfERW8cJ9YbO29NBTmfknsuey1H7T%2F2YGDWuZZMY4t1pGClDzkoAd7QlpIKxpnb1ikQrc0BpUi7bss2Cu3PxWWfKvAk%2BFwMW8Y5jt3y0hFgrgzKDXoKiIYQpqZ0NIIwOB14dgzFwrljQSmLnQOHrx1teVcUGkj2tI1fHI0Yw7PRyNtFxoEEClyPSt7%2BkiOr3ejJaOWU54XHLRUXfMMWgj8AGOqUBjGyMEVDpUnYP7AiGPOEaeCmmG47hzj24OQ%2B2DlWYy07O4YimEqwYBk0f2JovGgUGioAxPmMXd9XI1aXYssR0ldRalk80kQnSKZCzFdqtcqyNge9G79%2FSy2WNBLr5mVEYGmJifBkr334vUMmNqCRAI8rQrjlC7m2%2FD71dZgD9mq3wvNqvOduZCipWnrZzKsvnCzXGDYNzxrpCg5uD34xpHcn%2Bvd6P&X-Amz-Signature=f8f9af1dd5e01eb941a5133c14c4c9823f780df13436e8599ad1b24e90ececa8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETLTK64%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBdczpusd0KGgKyQfFyTBzs00GP8N29ufezSRW1LorhZAiEAmisK9V8cAOiQNtpcOBRMiETgKWsnMj%2FhN36b794j5ZsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1jLNJ7CRjpI4x2hCrcAy9VMFaEf6CuNqBZM2DI83VaE9yrShTmhAzI%2BN225QU77Fa3EeqVrjBpdXglYSHuV0qtTowlUQqmHml1u6tjThGWOZVEJzLM%2FTU9lG2aqgj48RBBrQ7EMcYdDtYDPZe6L5V413BN6r0n7Ul1fp2%2BRUusHpYOdGn4LtDpNKw7iF3RbBFj6x0xOGEUNUz7eg78IvpOmmRWP%2FepHdoA63Dp%2FqWQDfVsoIPwDhWw1GvwIv5T6OHOYHWWCLdgW8BtIIlLHPKVpMtLH8Ed6KomhDZ4Q42Ruh157G%2FtSrSwmAsGmHfO5PwxfkOUmIzbGayXTrbz1YHI1LkxdJ03lQGxofuLJbaqzixakLRtXcxpjqG65CbSVKW%2BjmbYE%2FXsKJ8fPSCJGwbTsH5zzxSigKoHX6kDU0nMGoC41wpLehhCnzIz%2FhJzgfERW8cJ9YbO29NBTmfknsuey1H7T%2F2YGDWuZZMY4t1pGClDzkoAd7QlpIKxpnb1ikQrc0BpUi7bss2Cu3PxWWfKvAk%2BFwMW8Y5jt3y0hFgrgzKDXoKiIYQpqZ0NIIwOB14dgzFwrljQSmLnQOHrx1teVcUGkj2tI1fHI0Yw7PRyNtFxoEEClyPSt7%2BkiOr3ejJaOWU54XHLRUXfMMWgj8AGOqUBjGyMEVDpUnYP7AiGPOEaeCmmG47hzj24OQ%2B2DlWYy07O4YimEqwYBk0f2JovGgUGioAxPmMXd9XI1aXYssR0ldRalk80kQnSKZCzFdqtcqyNge9G79%2FSy2WNBLr5mVEYGmJifBkr334vUMmNqCRAI8rQrjlC7m2%2FD71dZgD9mq3wvNqvOduZCipWnrZzKsvnCzXGDYNzxrpCg5uD34xpHcn%2Bvd6P&X-Amz-Signature=952e7e86dce3844a35c3581843aba1f6ab26d7347d2c7f946f638344ea8258a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETLTK64%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBdczpusd0KGgKyQfFyTBzs00GP8N29ufezSRW1LorhZAiEAmisK9V8cAOiQNtpcOBRMiETgKWsnMj%2FhN36b794j5ZsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1jLNJ7CRjpI4x2hCrcAy9VMFaEf6CuNqBZM2DI83VaE9yrShTmhAzI%2BN225QU77Fa3EeqVrjBpdXglYSHuV0qtTowlUQqmHml1u6tjThGWOZVEJzLM%2FTU9lG2aqgj48RBBrQ7EMcYdDtYDPZe6L5V413BN6r0n7Ul1fp2%2BRUusHpYOdGn4LtDpNKw7iF3RbBFj6x0xOGEUNUz7eg78IvpOmmRWP%2FepHdoA63Dp%2FqWQDfVsoIPwDhWw1GvwIv5T6OHOYHWWCLdgW8BtIIlLHPKVpMtLH8Ed6KomhDZ4Q42Ruh157G%2FtSrSwmAsGmHfO5PwxfkOUmIzbGayXTrbz1YHI1LkxdJ03lQGxofuLJbaqzixakLRtXcxpjqG65CbSVKW%2BjmbYE%2FXsKJ8fPSCJGwbTsH5zzxSigKoHX6kDU0nMGoC41wpLehhCnzIz%2FhJzgfERW8cJ9YbO29NBTmfknsuey1H7T%2F2YGDWuZZMY4t1pGClDzkoAd7QlpIKxpnb1ikQrc0BpUi7bss2Cu3PxWWfKvAk%2BFwMW8Y5jt3y0hFgrgzKDXoKiIYQpqZ0NIIwOB14dgzFwrljQSmLnQOHrx1teVcUGkj2tI1fHI0Yw7PRyNtFxoEEClyPSt7%2BkiOr3ejJaOWU54XHLRUXfMMWgj8AGOqUBjGyMEVDpUnYP7AiGPOEaeCmmG47hzj24OQ%2B2DlWYy07O4YimEqwYBk0f2JovGgUGioAxPmMXd9XI1aXYssR0ldRalk80kQnSKZCzFdqtcqyNge9G79%2FSy2WNBLr5mVEYGmJifBkr334vUMmNqCRAI8rQrjlC7m2%2FD71dZgD9mq3wvNqvOduZCipWnrZzKsvnCzXGDYNzxrpCg5uD34xpHcn%2Bvd6P&X-Amz-Signature=dce061edb0c4b35ff277fabd430006c432de508c6a1dba3ad4a3c5385b1128dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETLTK64%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBdczpusd0KGgKyQfFyTBzs00GP8N29ufezSRW1LorhZAiEAmisK9V8cAOiQNtpcOBRMiETgKWsnMj%2FhN36b794j5ZsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1jLNJ7CRjpI4x2hCrcAy9VMFaEf6CuNqBZM2DI83VaE9yrShTmhAzI%2BN225QU77Fa3EeqVrjBpdXglYSHuV0qtTowlUQqmHml1u6tjThGWOZVEJzLM%2FTU9lG2aqgj48RBBrQ7EMcYdDtYDPZe6L5V413BN6r0n7Ul1fp2%2BRUusHpYOdGn4LtDpNKw7iF3RbBFj6x0xOGEUNUz7eg78IvpOmmRWP%2FepHdoA63Dp%2FqWQDfVsoIPwDhWw1GvwIv5T6OHOYHWWCLdgW8BtIIlLHPKVpMtLH8Ed6KomhDZ4Q42Ruh157G%2FtSrSwmAsGmHfO5PwxfkOUmIzbGayXTrbz1YHI1LkxdJ03lQGxofuLJbaqzixakLRtXcxpjqG65CbSVKW%2BjmbYE%2FXsKJ8fPSCJGwbTsH5zzxSigKoHX6kDU0nMGoC41wpLehhCnzIz%2FhJzgfERW8cJ9YbO29NBTmfknsuey1H7T%2F2YGDWuZZMY4t1pGClDzkoAd7QlpIKxpnb1ikQrc0BpUi7bss2Cu3PxWWfKvAk%2BFwMW8Y5jt3y0hFgrgzKDXoKiIYQpqZ0NIIwOB14dgzFwrljQSmLnQOHrx1teVcUGkj2tI1fHI0Yw7PRyNtFxoEEClyPSt7%2BkiOr3ejJaOWU54XHLRUXfMMWgj8AGOqUBjGyMEVDpUnYP7AiGPOEaeCmmG47hzj24OQ%2B2DlWYy07O4YimEqwYBk0f2JovGgUGioAxPmMXd9XI1aXYssR0ldRalk80kQnSKZCzFdqtcqyNge9G79%2FSy2WNBLr5mVEYGmJifBkr334vUMmNqCRAI8rQrjlC7m2%2FD71dZgD9mq3wvNqvOduZCipWnrZzKsvnCzXGDYNzxrpCg5uD34xpHcn%2Bvd6P&X-Amz-Signature=759c163ca6e4a2cd6e6a9013f267f7f88ae817ae660ce82d4cedd1855e060197&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETLTK64%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBdczpusd0KGgKyQfFyTBzs00GP8N29ufezSRW1LorhZAiEAmisK9V8cAOiQNtpcOBRMiETgKWsnMj%2FhN36b794j5ZsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1jLNJ7CRjpI4x2hCrcAy9VMFaEf6CuNqBZM2DI83VaE9yrShTmhAzI%2BN225QU77Fa3EeqVrjBpdXglYSHuV0qtTowlUQqmHml1u6tjThGWOZVEJzLM%2FTU9lG2aqgj48RBBrQ7EMcYdDtYDPZe6L5V413BN6r0n7Ul1fp2%2BRUusHpYOdGn4LtDpNKw7iF3RbBFj6x0xOGEUNUz7eg78IvpOmmRWP%2FepHdoA63Dp%2FqWQDfVsoIPwDhWw1GvwIv5T6OHOYHWWCLdgW8BtIIlLHPKVpMtLH8Ed6KomhDZ4Q42Ruh157G%2FtSrSwmAsGmHfO5PwxfkOUmIzbGayXTrbz1YHI1LkxdJ03lQGxofuLJbaqzixakLRtXcxpjqG65CbSVKW%2BjmbYE%2FXsKJ8fPSCJGwbTsH5zzxSigKoHX6kDU0nMGoC41wpLehhCnzIz%2FhJzgfERW8cJ9YbO29NBTmfknsuey1H7T%2F2YGDWuZZMY4t1pGClDzkoAd7QlpIKxpnb1ikQrc0BpUi7bss2Cu3PxWWfKvAk%2BFwMW8Y5jt3y0hFgrgzKDXoKiIYQpqZ0NIIwOB14dgzFwrljQSmLnQOHrx1teVcUGkj2tI1fHI0Yw7PRyNtFxoEEClyPSt7%2BkiOr3ejJaOWU54XHLRUXfMMWgj8AGOqUBjGyMEVDpUnYP7AiGPOEaeCmmG47hzj24OQ%2B2DlWYy07O4YimEqwYBk0f2JovGgUGioAxPmMXd9XI1aXYssR0ldRalk80kQnSKZCzFdqtcqyNge9G79%2FSy2WNBLr5mVEYGmJifBkr334vUMmNqCRAI8rQrjlC7m2%2FD71dZgD9mq3wvNqvOduZCipWnrZzKsvnCzXGDYNzxrpCg5uD34xpHcn%2Bvd6P&X-Amz-Signature=7a959c20120159a596cc8fee37d7e85bed5ecb2bccf1d3ea1e813ca5d5d0a950&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETLTK64%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBdczpusd0KGgKyQfFyTBzs00GP8N29ufezSRW1LorhZAiEAmisK9V8cAOiQNtpcOBRMiETgKWsnMj%2FhN36b794j5ZsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1jLNJ7CRjpI4x2hCrcAy9VMFaEf6CuNqBZM2DI83VaE9yrShTmhAzI%2BN225QU77Fa3EeqVrjBpdXglYSHuV0qtTowlUQqmHml1u6tjThGWOZVEJzLM%2FTU9lG2aqgj48RBBrQ7EMcYdDtYDPZe6L5V413BN6r0n7Ul1fp2%2BRUusHpYOdGn4LtDpNKw7iF3RbBFj6x0xOGEUNUz7eg78IvpOmmRWP%2FepHdoA63Dp%2FqWQDfVsoIPwDhWw1GvwIv5T6OHOYHWWCLdgW8BtIIlLHPKVpMtLH8Ed6KomhDZ4Q42Ruh157G%2FtSrSwmAsGmHfO5PwxfkOUmIzbGayXTrbz1YHI1LkxdJ03lQGxofuLJbaqzixakLRtXcxpjqG65CbSVKW%2BjmbYE%2FXsKJ8fPSCJGwbTsH5zzxSigKoHX6kDU0nMGoC41wpLehhCnzIz%2FhJzgfERW8cJ9YbO29NBTmfknsuey1H7T%2F2YGDWuZZMY4t1pGClDzkoAd7QlpIKxpnb1ikQrc0BpUi7bss2Cu3PxWWfKvAk%2BFwMW8Y5jt3y0hFgrgzKDXoKiIYQpqZ0NIIwOB14dgzFwrljQSmLnQOHrx1teVcUGkj2tI1fHI0Yw7PRyNtFxoEEClyPSt7%2BkiOr3ejJaOWU54XHLRUXfMMWgj8AGOqUBjGyMEVDpUnYP7AiGPOEaeCmmG47hzj24OQ%2B2DlWYy07O4YimEqwYBk0f2JovGgUGioAxPmMXd9XI1aXYssR0ldRalk80kQnSKZCzFdqtcqyNge9G79%2FSy2WNBLr5mVEYGmJifBkr334vUMmNqCRAI8rQrjlC7m2%2FD71dZgD9mq3wvNqvOduZCipWnrZzKsvnCzXGDYNzxrpCg5uD34xpHcn%2Bvd6P&X-Amz-Signature=4697ec01de9b973cde8536fa049164e83eaed3ef55b1f5f9fa538772a42e7cea&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETLTK64%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBdczpusd0KGgKyQfFyTBzs00GP8N29ufezSRW1LorhZAiEAmisK9V8cAOiQNtpcOBRMiETgKWsnMj%2FhN36b794j5ZsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1jLNJ7CRjpI4x2hCrcAy9VMFaEf6CuNqBZM2DI83VaE9yrShTmhAzI%2BN225QU77Fa3EeqVrjBpdXglYSHuV0qtTowlUQqmHml1u6tjThGWOZVEJzLM%2FTU9lG2aqgj48RBBrQ7EMcYdDtYDPZe6L5V413BN6r0n7Ul1fp2%2BRUusHpYOdGn4LtDpNKw7iF3RbBFj6x0xOGEUNUz7eg78IvpOmmRWP%2FepHdoA63Dp%2FqWQDfVsoIPwDhWw1GvwIv5T6OHOYHWWCLdgW8BtIIlLHPKVpMtLH8Ed6KomhDZ4Q42Ruh157G%2FtSrSwmAsGmHfO5PwxfkOUmIzbGayXTrbz1YHI1LkxdJ03lQGxofuLJbaqzixakLRtXcxpjqG65CbSVKW%2BjmbYE%2FXsKJ8fPSCJGwbTsH5zzxSigKoHX6kDU0nMGoC41wpLehhCnzIz%2FhJzgfERW8cJ9YbO29NBTmfknsuey1H7T%2F2YGDWuZZMY4t1pGClDzkoAd7QlpIKxpnb1ikQrc0BpUi7bss2Cu3PxWWfKvAk%2BFwMW8Y5jt3y0hFgrgzKDXoKiIYQpqZ0NIIwOB14dgzFwrljQSmLnQOHrx1teVcUGkj2tI1fHI0Yw7PRyNtFxoEEClyPSt7%2BkiOr3ejJaOWU54XHLRUXfMMWgj8AGOqUBjGyMEVDpUnYP7AiGPOEaeCmmG47hzj24OQ%2B2DlWYy07O4YimEqwYBk0f2JovGgUGioAxPmMXd9XI1aXYssR0ldRalk80kQnSKZCzFdqtcqyNge9G79%2FSy2WNBLr5mVEYGmJifBkr334vUMmNqCRAI8rQrjlC7m2%2FD71dZgD9mq3wvNqvOduZCipWnrZzKsvnCzXGDYNzxrpCg5uD34xpHcn%2Bvd6P&X-Amz-Signature=bd7e7e14a20c028e53b72306940146639966f221236786e38010a8334f23ad2c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
