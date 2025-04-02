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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25A6YST%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFeiC9JvWUAd6XT5ywfGFwfJBdOYp5NtBCLmghYPnJwJAiEAvs%2FjHRnFPDRLAO57V53OiAFXuoDgkjxGR61Sf31t1cEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsid5SFS61E8tR0FircAwIGUAd4XsIWxcE%2F89kTzRTuMJwqqq11qQgc0bPtjlPbkM0hoPQ8ku3hwZvvMOnZI4PbPUdzmxEA9uJSdzjyYmJEa5UHhCz7UVxvd56Z9gN3tH3TsLdaJrBtXi4xuXuSnhq0d31F87GWJ7OM4vp9fuphsnO8MUr9oW31xcPxhusm6UYajxhHAlJCDQt4MeOLtDSaz%2BkeA0tQwLqfRT5DAgSsfuvrldCWFfzXC%2BDHWzJ0E%2BMrxzfHQ2lpgMP3oZ7Bx707Z2sPxW7JpvDIp05DZmQAG25YewihCL%2BD%2FnjiGhdK5zYq977XM4iIdu1GiP9xaOCrC6RIMvvg1W0zMI7xgCRmD9Bpnk4uau2pTsEUzkV9u6YtGv2Q9I7j%2BDYAOawal%2BLBiirjqWq52tG6Pvuu2%2BxQjg9dijfXhWCXTSHH2LakzPwT%2FbJMvt40vTUdQAkCRibWJQidOlGjcBSMgejqXkCKgU8nwc7py6PJFp3%2BncyiFuMXpjsYLWYvzqicSH4eZCI%2B1DE23HjvNePeNnG%2BagYzq2kqeB8cCfL2StwopoL1fQqXJe9QLFORGMijd7IJzOyubmJ9KwJTP%2BlwM0G0J0P%2FKCTCNS231Xz0Yfvw%2BwR0MYK0%2FKFkLWawElcXMO7usr8GOqUBHikJZydLRcrUytJ46PoPaDG55l%2BcLErOURwGskGsKetqC%2Bu4%2BK55L1PKihjiSUFdU6zfDiW860RZxJgcK8RaU29bIG6yUTVhx%2B%2BCM11U4Bk4EXrI3EAxsRgwiNB94XCagIfVkfHQkmQemhmyDUM8FKBwBP%2BWx0cAN4sFsgRnRtNX7WWS%2BZlXjyGMrs%2BRcFBNOCP%2By%2FWz2%2BAGxIECSH9k4V56IT31&X-Amz-Signature=2bbb0d1d54987f8eabdb650447e1bfc50827cb0f5c129bd2bcf52535dd439a85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25A6YST%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFeiC9JvWUAd6XT5ywfGFwfJBdOYp5NtBCLmghYPnJwJAiEAvs%2FjHRnFPDRLAO57V53OiAFXuoDgkjxGR61Sf31t1cEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsid5SFS61E8tR0FircAwIGUAd4XsIWxcE%2F89kTzRTuMJwqqq11qQgc0bPtjlPbkM0hoPQ8ku3hwZvvMOnZI4PbPUdzmxEA9uJSdzjyYmJEa5UHhCz7UVxvd56Z9gN3tH3TsLdaJrBtXi4xuXuSnhq0d31F87GWJ7OM4vp9fuphsnO8MUr9oW31xcPxhusm6UYajxhHAlJCDQt4MeOLtDSaz%2BkeA0tQwLqfRT5DAgSsfuvrldCWFfzXC%2BDHWzJ0E%2BMrxzfHQ2lpgMP3oZ7Bx707Z2sPxW7JpvDIp05DZmQAG25YewihCL%2BD%2FnjiGhdK5zYq977XM4iIdu1GiP9xaOCrC6RIMvvg1W0zMI7xgCRmD9Bpnk4uau2pTsEUzkV9u6YtGv2Q9I7j%2BDYAOawal%2BLBiirjqWq52tG6Pvuu2%2BxQjg9dijfXhWCXTSHH2LakzPwT%2FbJMvt40vTUdQAkCRibWJQidOlGjcBSMgejqXkCKgU8nwc7py6PJFp3%2BncyiFuMXpjsYLWYvzqicSH4eZCI%2B1DE23HjvNePeNnG%2BagYzq2kqeB8cCfL2StwopoL1fQqXJe9QLFORGMijd7IJzOyubmJ9KwJTP%2BlwM0G0J0P%2FKCTCNS231Xz0Yfvw%2BwR0MYK0%2FKFkLWawElcXMO7usr8GOqUBHikJZydLRcrUytJ46PoPaDG55l%2BcLErOURwGskGsKetqC%2Bu4%2BK55L1PKihjiSUFdU6zfDiW860RZxJgcK8RaU29bIG6yUTVhx%2B%2BCM11U4Bk4EXrI3EAxsRgwiNB94XCagIfVkfHQkmQemhmyDUM8FKBwBP%2BWx0cAN4sFsgRnRtNX7WWS%2BZlXjyGMrs%2BRcFBNOCP%2By%2FWz2%2BAGxIECSH9k4V56IT31&X-Amz-Signature=fad0042e23311c55dba2f5f733743a2216a1db733bc7be7206d260a0fe6aa37b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25A6YST%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFeiC9JvWUAd6XT5ywfGFwfJBdOYp5NtBCLmghYPnJwJAiEAvs%2FjHRnFPDRLAO57V53OiAFXuoDgkjxGR61Sf31t1cEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsid5SFS61E8tR0FircAwIGUAd4XsIWxcE%2F89kTzRTuMJwqqq11qQgc0bPtjlPbkM0hoPQ8ku3hwZvvMOnZI4PbPUdzmxEA9uJSdzjyYmJEa5UHhCz7UVxvd56Z9gN3tH3TsLdaJrBtXi4xuXuSnhq0d31F87GWJ7OM4vp9fuphsnO8MUr9oW31xcPxhusm6UYajxhHAlJCDQt4MeOLtDSaz%2BkeA0tQwLqfRT5DAgSsfuvrldCWFfzXC%2BDHWzJ0E%2BMrxzfHQ2lpgMP3oZ7Bx707Z2sPxW7JpvDIp05DZmQAG25YewihCL%2BD%2FnjiGhdK5zYq977XM4iIdu1GiP9xaOCrC6RIMvvg1W0zMI7xgCRmD9Bpnk4uau2pTsEUzkV9u6YtGv2Q9I7j%2BDYAOawal%2BLBiirjqWq52tG6Pvuu2%2BxQjg9dijfXhWCXTSHH2LakzPwT%2FbJMvt40vTUdQAkCRibWJQidOlGjcBSMgejqXkCKgU8nwc7py6PJFp3%2BncyiFuMXpjsYLWYvzqicSH4eZCI%2B1DE23HjvNePeNnG%2BagYzq2kqeB8cCfL2StwopoL1fQqXJe9QLFORGMijd7IJzOyubmJ9KwJTP%2BlwM0G0J0P%2FKCTCNS231Xz0Yfvw%2BwR0MYK0%2FKFkLWawElcXMO7usr8GOqUBHikJZydLRcrUytJ46PoPaDG55l%2BcLErOURwGskGsKetqC%2Bu4%2BK55L1PKihjiSUFdU6zfDiW860RZxJgcK8RaU29bIG6yUTVhx%2B%2BCM11U4Bk4EXrI3EAxsRgwiNB94XCagIfVkfHQkmQemhmyDUM8FKBwBP%2BWx0cAN4sFsgRnRtNX7WWS%2BZlXjyGMrs%2BRcFBNOCP%2By%2FWz2%2BAGxIECSH9k4V56IT31&X-Amz-Signature=550fc96402c2372f5f979bb471ac294d352798fd8f6b3654f47653566ac036e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25A6YST%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFeiC9JvWUAd6XT5ywfGFwfJBdOYp5NtBCLmghYPnJwJAiEAvs%2FjHRnFPDRLAO57V53OiAFXuoDgkjxGR61Sf31t1cEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsid5SFS61E8tR0FircAwIGUAd4XsIWxcE%2F89kTzRTuMJwqqq11qQgc0bPtjlPbkM0hoPQ8ku3hwZvvMOnZI4PbPUdzmxEA9uJSdzjyYmJEa5UHhCz7UVxvd56Z9gN3tH3TsLdaJrBtXi4xuXuSnhq0d31F87GWJ7OM4vp9fuphsnO8MUr9oW31xcPxhusm6UYajxhHAlJCDQt4MeOLtDSaz%2BkeA0tQwLqfRT5DAgSsfuvrldCWFfzXC%2BDHWzJ0E%2BMrxzfHQ2lpgMP3oZ7Bx707Z2sPxW7JpvDIp05DZmQAG25YewihCL%2BD%2FnjiGhdK5zYq977XM4iIdu1GiP9xaOCrC6RIMvvg1W0zMI7xgCRmD9Bpnk4uau2pTsEUzkV9u6YtGv2Q9I7j%2BDYAOawal%2BLBiirjqWq52tG6Pvuu2%2BxQjg9dijfXhWCXTSHH2LakzPwT%2FbJMvt40vTUdQAkCRibWJQidOlGjcBSMgejqXkCKgU8nwc7py6PJFp3%2BncyiFuMXpjsYLWYvzqicSH4eZCI%2B1DE23HjvNePeNnG%2BagYzq2kqeB8cCfL2StwopoL1fQqXJe9QLFORGMijd7IJzOyubmJ9KwJTP%2BlwM0G0J0P%2FKCTCNS231Xz0Yfvw%2BwR0MYK0%2FKFkLWawElcXMO7usr8GOqUBHikJZydLRcrUytJ46PoPaDG55l%2BcLErOURwGskGsKetqC%2Bu4%2BK55L1PKihjiSUFdU6zfDiW860RZxJgcK8RaU29bIG6yUTVhx%2B%2BCM11U4Bk4EXrI3EAxsRgwiNB94XCagIfVkfHQkmQemhmyDUM8FKBwBP%2BWx0cAN4sFsgRnRtNX7WWS%2BZlXjyGMrs%2BRcFBNOCP%2By%2FWz2%2BAGxIECSH9k4V56IT31&X-Amz-Signature=42f0f45f2085061066f9643b24e77571f844882c3b014182e37e01475e34c27f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25A6YST%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFeiC9JvWUAd6XT5ywfGFwfJBdOYp5NtBCLmghYPnJwJAiEAvs%2FjHRnFPDRLAO57V53OiAFXuoDgkjxGR61Sf31t1cEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsid5SFS61E8tR0FircAwIGUAd4XsIWxcE%2F89kTzRTuMJwqqq11qQgc0bPtjlPbkM0hoPQ8ku3hwZvvMOnZI4PbPUdzmxEA9uJSdzjyYmJEa5UHhCz7UVxvd56Z9gN3tH3TsLdaJrBtXi4xuXuSnhq0d31F87GWJ7OM4vp9fuphsnO8MUr9oW31xcPxhusm6UYajxhHAlJCDQt4MeOLtDSaz%2BkeA0tQwLqfRT5DAgSsfuvrldCWFfzXC%2BDHWzJ0E%2BMrxzfHQ2lpgMP3oZ7Bx707Z2sPxW7JpvDIp05DZmQAG25YewihCL%2BD%2FnjiGhdK5zYq977XM4iIdu1GiP9xaOCrC6RIMvvg1W0zMI7xgCRmD9Bpnk4uau2pTsEUzkV9u6YtGv2Q9I7j%2BDYAOawal%2BLBiirjqWq52tG6Pvuu2%2BxQjg9dijfXhWCXTSHH2LakzPwT%2FbJMvt40vTUdQAkCRibWJQidOlGjcBSMgejqXkCKgU8nwc7py6PJFp3%2BncyiFuMXpjsYLWYvzqicSH4eZCI%2B1DE23HjvNePeNnG%2BagYzq2kqeB8cCfL2StwopoL1fQqXJe9QLFORGMijd7IJzOyubmJ9KwJTP%2BlwM0G0J0P%2FKCTCNS231Xz0Yfvw%2BwR0MYK0%2FKFkLWawElcXMO7usr8GOqUBHikJZydLRcrUytJ46PoPaDG55l%2BcLErOURwGskGsKetqC%2Bu4%2BK55L1PKihjiSUFdU6zfDiW860RZxJgcK8RaU29bIG6yUTVhx%2B%2BCM11U4Bk4EXrI3EAxsRgwiNB94XCagIfVkfHQkmQemhmyDUM8FKBwBP%2BWx0cAN4sFsgRnRtNX7WWS%2BZlXjyGMrs%2BRcFBNOCP%2By%2FWz2%2BAGxIECSH9k4V56IT31&X-Amz-Signature=49f0e68cdd9025add17d77ecb0cb629df67d34dc9469bae12dac091f1698f38a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25A6YST%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFeiC9JvWUAd6XT5ywfGFwfJBdOYp5NtBCLmghYPnJwJAiEAvs%2FjHRnFPDRLAO57V53OiAFXuoDgkjxGR61Sf31t1cEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsid5SFS61E8tR0FircAwIGUAd4XsIWxcE%2F89kTzRTuMJwqqq11qQgc0bPtjlPbkM0hoPQ8ku3hwZvvMOnZI4PbPUdzmxEA9uJSdzjyYmJEa5UHhCz7UVxvd56Z9gN3tH3TsLdaJrBtXi4xuXuSnhq0d31F87GWJ7OM4vp9fuphsnO8MUr9oW31xcPxhusm6UYajxhHAlJCDQt4MeOLtDSaz%2BkeA0tQwLqfRT5DAgSsfuvrldCWFfzXC%2BDHWzJ0E%2BMrxzfHQ2lpgMP3oZ7Bx707Z2sPxW7JpvDIp05DZmQAG25YewihCL%2BD%2FnjiGhdK5zYq977XM4iIdu1GiP9xaOCrC6RIMvvg1W0zMI7xgCRmD9Bpnk4uau2pTsEUzkV9u6YtGv2Q9I7j%2BDYAOawal%2BLBiirjqWq52tG6Pvuu2%2BxQjg9dijfXhWCXTSHH2LakzPwT%2FbJMvt40vTUdQAkCRibWJQidOlGjcBSMgejqXkCKgU8nwc7py6PJFp3%2BncyiFuMXpjsYLWYvzqicSH4eZCI%2B1DE23HjvNePeNnG%2BagYzq2kqeB8cCfL2StwopoL1fQqXJe9QLFORGMijd7IJzOyubmJ9KwJTP%2BlwM0G0J0P%2FKCTCNS231Xz0Yfvw%2BwR0MYK0%2FKFkLWawElcXMO7usr8GOqUBHikJZydLRcrUytJ46PoPaDG55l%2BcLErOURwGskGsKetqC%2Bu4%2BK55L1PKihjiSUFdU6zfDiW860RZxJgcK8RaU29bIG6yUTVhx%2B%2BCM11U4Bk4EXrI3EAxsRgwiNB94XCagIfVkfHQkmQemhmyDUM8FKBwBP%2BWx0cAN4sFsgRnRtNX7WWS%2BZlXjyGMrs%2BRcFBNOCP%2By%2FWz2%2BAGxIECSH9k4V56IT31&X-Amz-Signature=4e1203539f09912a7684360edfe611a6d65ab07929c6ad29a6a628778dbafb40&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25A6YST%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFeiC9JvWUAd6XT5ywfGFwfJBdOYp5NtBCLmghYPnJwJAiEAvs%2FjHRnFPDRLAO57V53OiAFXuoDgkjxGR61Sf31t1cEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsid5SFS61E8tR0FircAwIGUAd4XsIWxcE%2F89kTzRTuMJwqqq11qQgc0bPtjlPbkM0hoPQ8ku3hwZvvMOnZI4PbPUdzmxEA9uJSdzjyYmJEa5UHhCz7UVxvd56Z9gN3tH3TsLdaJrBtXi4xuXuSnhq0d31F87GWJ7OM4vp9fuphsnO8MUr9oW31xcPxhusm6UYajxhHAlJCDQt4MeOLtDSaz%2BkeA0tQwLqfRT5DAgSsfuvrldCWFfzXC%2BDHWzJ0E%2BMrxzfHQ2lpgMP3oZ7Bx707Z2sPxW7JpvDIp05DZmQAG25YewihCL%2BD%2FnjiGhdK5zYq977XM4iIdu1GiP9xaOCrC6RIMvvg1W0zMI7xgCRmD9Bpnk4uau2pTsEUzkV9u6YtGv2Q9I7j%2BDYAOawal%2BLBiirjqWq52tG6Pvuu2%2BxQjg9dijfXhWCXTSHH2LakzPwT%2FbJMvt40vTUdQAkCRibWJQidOlGjcBSMgejqXkCKgU8nwc7py6PJFp3%2BncyiFuMXpjsYLWYvzqicSH4eZCI%2B1DE23HjvNePeNnG%2BagYzq2kqeB8cCfL2StwopoL1fQqXJe9QLFORGMijd7IJzOyubmJ9KwJTP%2BlwM0G0J0P%2FKCTCNS231Xz0Yfvw%2BwR0MYK0%2FKFkLWawElcXMO7usr8GOqUBHikJZydLRcrUytJ46PoPaDG55l%2BcLErOURwGskGsKetqC%2Bu4%2BK55L1PKihjiSUFdU6zfDiW860RZxJgcK8RaU29bIG6yUTVhx%2B%2BCM11U4Bk4EXrI3EAxsRgwiNB94XCagIfVkfHQkmQemhmyDUM8FKBwBP%2BWx0cAN4sFsgRnRtNX7WWS%2BZlXjyGMrs%2BRcFBNOCP%2By%2FWz2%2BAGxIECSH9k4V56IT31&X-Amz-Signature=7cf7f5ec1887f6fa8b6796d6c066b15d40b4874421cc95c41eae4a6e21db4bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
