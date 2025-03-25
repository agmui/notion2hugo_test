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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637HSFXL4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7bRWdmiMDYxh91B9Sj0%2BRDQp%2BkO3IkpIXmaqwNR9agIgY2hhHZZ2DU%2BoRN23%2FdvyrMWF2wnbQ9%2Biz5V8CWalp7Iq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDMC1cLosn8LsURg%2FXircA10r76BdKDt%2BqrBwV%2B0TnS1VIVn1Rl1SwjLMYJ8RqYWtXrLNJ4SitcFJIhzmjQzld%2FE8CXuYnqfmRUB0uxdxu1PQ%2BctSG1%2BPMcEeU%2F%2B6oEW7UQkBv4YkRO3HFUFQNcx%2Fm6kzfjQoEuQNW7BNaCzC%2FHQo20M4ppOUxz5PU%2Fy0ZZapVe2r0A9XOd4kQydbeB1WsG%2FuqXaxFHry7jNHQLI4OK7c9bRj0a4YHTVTxfqyBEfAsRILZk4sFjZTyDTbSjdizJxA%2FaPsULThV%2FG4qRL34SlxLmxLDmfJTR7ssQW%2F1acmy128FndbVB81%2F5XbmGBEk9U%2F0NayK0XWU8oG%2FqQeuSighhowxvFDVRsothlD2vZFbZouJWXQoFlKE7tTrTTE2ZB4DSD1q4prr%2F2RY6gUEp6hz%2FzL74mwIAsIbHrnzopyPG2lQAq0ypLQqldeCs1aj0pMak4%2FJn54JPmEzhCBOPgrCKkX8jZDNiba1VhMKKj3Rq2kRXKBSMkP1WoGZbt3HiwUlC6%2B0%2BkLfJ6xwb%2FEnmuRLf%2BXqQYsYQWjXS1HHji1Tb0f5wpeamrns1rwtpn0MXSdZFg6%2F5IyFUKx%2F0OPXRO2qqJIVCRiUlNYKeOEq0%2BQ6GY0CqXKA3QARbs0MPmji78GOqUBpZDCFFsdMjvOmoRdXb5IuoaDwTNi%2BK5LhtIk2ITQnOy%2FY07vNypm%2Bog%2BezRJtTFhxXRIXaQisrf2PUc81aaRS2h%2FU0HskuQPkWk5nB%2BjgK0hgedxOJJr9z5Esto%2FNRAKB%2FDeKlJHY2dbgH0Kmdigo%2BwtAYemd%2BBYt%2FncXNfGbfId00%2BgVLdbAYKlplTwMc%2B6rSivJgVlMv4NUBVtc%2FkJdkAMSjiC&X-Amz-Signature=17e6eb2882565db8bd5235ec9a4692a3007aa2497ad0f71bee4321a2ae0ca43f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637HSFXL4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7bRWdmiMDYxh91B9Sj0%2BRDQp%2BkO3IkpIXmaqwNR9agIgY2hhHZZ2DU%2BoRN23%2FdvyrMWF2wnbQ9%2Biz5V8CWalp7Iq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDMC1cLosn8LsURg%2FXircA10r76BdKDt%2BqrBwV%2B0TnS1VIVn1Rl1SwjLMYJ8RqYWtXrLNJ4SitcFJIhzmjQzld%2FE8CXuYnqfmRUB0uxdxu1PQ%2BctSG1%2BPMcEeU%2F%2B6oEW7UQkBv4YkRO3HFUFQNcx%2Fm6kzfjQoEuQNW7BNaCzC%2FHQo20M4ppOUxz5PU%2Fy0ZZapVe2r0A9XOd4kQydbeB1WsG%2FuqXaxFHry7jNHQLI4OK7c9bRj0a4YHTVTxfqyBEfAsRILZk4sFjZTyDTbSjdizJxA%2FaPsULThV%2FG4qRL34SlxLmxLDmfJTR7ssQW%2F1acmy128FndbVB81%2F5XbmGBEk9U%2F0NayK0XWU8oG%2FqQeuSighhowxvFDVRsothlD2vZFbZouJWXQoFlKE7tTrTTE2ZB4DSD1q4prr%2F2RY6gUEp6hz%2FzL74mwIAsIbHrnzopyPG2lQAq0ypLQqldeCs1aj0pMak4%2FJn54JPmEzhCBOPgrCKkX8jZDNiba1VhMKKj3Rq2kRXKBSMkP1WoGZbt3HiwUlC6%2B0%2BkLfJ6xwb%2FEnmuRLf%2BXqQYsYQWjXS1HHji1Tb0f5wpeamrns1rwtpn0MXSdZFg6%2F5IyFUKx%2F0OPXRO2qqJIVCRiUlNYKeOEq0%2BQ6GY0CqXKA3QARbs0MPmji78GOqUBpZDCFFsdMjvOmoRdXb5IuoaDwTNi%2BK5LhtIk2ITQnOy%2FY07vNypm%2Bog%2BezRJtTFhxXRIXaQisrf2PUc81aaRS2h%2FU0HskuQPkWk5nB%2BjgK0hgedxOJJr9z5Esto%2FNRAKB%2FDeKlJHY2dbgH0Kmdigo%2BwtAYemd%2BBYt%2FncXNfGbfId00%2BgVLdbAYKlplTwMc%2B6rSivJgVlMv4NUBVtc%2FkJdkAMSjiC&X-Amz-Signature=26efff1453b77659cd9ffaa5a4ccfd85a9472588ebfc5f5a751752faa409c5a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637HSFXL4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7bRWdmiMDYxh91B9Sj0%2BRDQp%2BkO3IkpIXmaqwNR9agIgY2hhHZZ2DU%2BoRN23%2FdvyrMWF2wnbQ9%2Biz5V8CWalp7Iq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDMC1cLosn8LsURg%2FXircA10r76BdKDt%2BqrBwV%2B0TnS1VIVn1Rl1SwjLMYJ8RqYWtXrLNJ4SitcFJIhzmjQzld%2FE8CXuYnqfmRUB0uxdxu1PQ%2BctSG1%2BPMcEeU%2F%2B6oEW7UQkBv4YkRO3HFUFQNcx%2Fm6kzfjQoEuQNW7BNaCzC%2FHQo20M4ppOUxz5PU%2Fy0ZZapVe2r0A9XOd4kQydbeB1WsG%2FuqXaxFHry7jNHQLI4OK7c9bRj0a4YHTVTxfqyBEfAsRILZk4sFjZTyDTbSjdizJxA%2FaPsULThV%2FG4qRL34SlxLmxLDmfJTR7ssQW%2F1acmy128FndbVB81%2F5XbmGBEk9U%2F0NayK0XWU8oG%2FqQeuSighhowxvFDVRsothlD2vZFbZouJWXQoFlKE7tTrTTE2ZB4DSD1q4prr%2F2RY6gUEp6hz%2FzL74mwIAsIbHrnzopyPG2lQAq0ypLQqldeCs1aj0pMak4%2FJn54JPmEzhCBOPgrCKkX8jZDNiba1VhMKKj3Rq2kRXKBSMkP1WoGZbt3HiwUlC6%2B0%2BkLfJ6xwb%2FEnmuRLf%2BXqQYsYQWjXS1HHji1Tb0f5wpeamrns1rwtpn0MXSdZFg6%2F5IyFUKx%2F0OPXRO2qqJIVCRiUlNYKeOEq0%2BQ6GY0CqXKA3QARbs0MPmji78GOqUBpZDCFFsdMjvOmoRdXb5IuoaDwTNi%2BK5LhtIk2ITQnOy%2FY07vNypm%2Bog%2BezRJtTFhxXRIXaQisrf2PUc81aaRS2h%2FU0HskuQPkWk5nB%2BjgK0hgedxOJJr9z5Esto%2FNRAKB%2FDeKlJHY2dbgH0Kmdigo%2BwtAYemd%2BBYt%2FncXNfGbfId00%2BgVLdbAYKlplTwMc%2B6rSivJgVlMv4NUBVtc%2FkJdkAMSjiC&X-Amz-Signature=82216d031cc104cbae920d2baababc533ef81e76bdf9fbdec00a787967922ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637HSFXL4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7bRWdmiMDYxh91B9Sj0%2BRDQp%2BkO3IkpIXmaqwNR9agIgY2hhHZZ2DU%2BoRN23%2FdvyrMWF2wnbQ9%2Biz5V8CWalp7Iq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDMC1cLosn8LsURg%2FXircA10r76BdKDt%2BqrBwV%2B0TnS1VIVn1Rl1SwjLMYJ8RqYWtXrLNJ4SitcFJIhzmjQzld%2FE8CXuYnqfmRUB0uxdxu1PQ%2BctSG1%2BPMcEeU%2F%2B6oEW7UQkBv4YkRO3HFUFQNcx%2Fm6kzfjQoEuQNW7BNaCzC%2FHQo20M4ppOUxz5PU%2Fy0ZZapVe2r0A9XOd4kQydbeB1WsG%2FuqXaxFHry7jNHQLI4OK7c9bRj0a4YHTVTxfqyBEfAsRILZk4sFjZTyDTbSjdizJxA%2FaPsULThV%2FG4qRL34SlxLmxLDmfJTR7ssQW%2F1acmy128FndbVB81%2F5XbmGBEk9U%2F0NayK0XWU8oG%2FqQeuSighhowxvFDVRsothlD2vZFbZouJWXQoFlKE7tTrTTE2ZB4DSD1q4prr%2F2RY6gUEp6hz%2FzL74mwIAsIbHrnzopyPG2lQAq0ypLQqldeCs1aj0pMak4%2FJn54JPmEzhCBOPgrCKkX8jZDNiba1VhMKKj3Rq2kRXKBSMkP1WoGZbt3HiwUlC6%2B0%2BkLfJ6xwb%2FEnmuRLf%2BXqQYsYQWjXS1HHji1Tb0f5wpeamrns1rwtpn0MXSdZFg6%2F5IyFUKx%2F0OPXRO2qqJIVCRiUlNYKeOEq0%2BQ6GY0CqXKA3QARbs0MPmji78GOqUBpZDCFFsdMjvOmoRdXb5IuoaDwTNi%2BK5LhtIk2ITQnOy%2FY07vNypm%2Bog%2BezRJtTFhxXRIXaQisrf2PUc81aaRS2h%2FU0HskuQPkWk5nB%2BjgK0hgedxOJJr9z5Esto%2FNRAKB%2FDeKlJHY2dbgH0Kmdigo%2BwtAYemd%2BBYt%2FncXNfGbfId00%2BgVLdbAYKlplTwMc%2B6rSivJgVlMv4NUBVtc%2FkJdkAMSjiC&X-Amz-Signature=7422baa5f6b882a7d22a11fb223e661ad8d9a0a936a547b9cfb5fb7d6dad219b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637HSFXL4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7bRWdmiMDYxh91B9Sj0%2BRDQp%2BkO3IkpIXmaqwNR9agIgY2hhHZZ2DU%2BoRN23%2FdvyrMWF2wnbQ9%2Biz5V8CWalp7Iq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDMC1cLosn8LsURg%2FXircA10r76BdKDt%2BqrBwV%2B0TnS1VIVn1Rl1SwjLMYJ8RqYWtXrLNJ4SitcFJIhzmjQzld%2FE8CXuYnqfmRUB0uxdxu1PQ%2BctSG1%2BPMcEeU%2F%2B6oEW7UQkBv4YkRO3HFUFQNcx%2Fm6kzfjQoEuQNW7BNaCzC%2FHQo20M4ppOUxz5PU%2Fy0ZZapVe2r0A9XOd4kQydbeB1WsG%2FuqXaxFHry7jNHQLI4OK7c9bRj0a4YHTVTxfqyBEfAsRILZk4sFjZTyDTbSjdizJxA%2FaPsULThV%2FG4qRL34SlxLmxLDmfJTR7ssQW%2F1acmy128FndbVB81%2F5XbmGBEk9U%2F0NayK0XWU8oG%2FqQeuSighhowxvFDVRsothlD2vZFbZouJWXQoFlKE7tTrTTE2ZB4DSD1q4prr%2F2RY6gUEp6hz%2FzL74mwIAsIbHrnzopyPG2lQAq0ypLQqldeCs1aj0pMak4%2FJn54JPmEzhCBOPgrCKkX8jZDNiba1VhMKKj3Rq2kRXKBSMkP1WoGZbt3HiwUlC6%2B0%2BkLfJ6xwb%2FEnmuRLf%2BXqQYsYQWjXS1HHji1Tb0f5wpeamrns1rwtpn0MXSdZFg6%2F5IyFUKx%2F0OPXRO2qqJIVCRiUlNYKeOEq0%2BQ6GY0CqXKA3QARbs0MPmji78GOqUBpZDCFFsdMjvOmoRdXb5IuoaDwTNi%2BK5LhtIk2ITQnOy%2FY07vNypm%2Bog%2BezRJtTFhxXRIXaQisrf2PUc81aaRS2h%2FU0HskuQPkWk5nB%2BjgK0hgedxOJJr9z5Esto%2FNRAKB%2FDeKlJHY2dbgH0Kmdigo%2BwtAYemd%2BBYt%2FncXNfGbfId00%2BgVLdbAYKlplTwMc%2B6rSivJgVlMv4NUBVtc%2FkJdkAMSjiC&X-Amz-Signature=24ba5a67e79a364bf37d97d4dc5cb263f9c8a3ab3494e436e9f68de7612ba9e3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637HSFXL4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7bRWdmiMDYxh91B9Sj0%2BRDQp%2BkO3IkpIXmaqwNR9agIgY2hhHZZ2DU%2BoRN23%2FdvyrMWF2wnbQ9%2Biz5V8CWalp7Iq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDMC1cLosn8LsURg%2FXircA10r76BdKDt%2BqrBwV%2B0TnS1VIVn1Rl1SwjLMYJ8RqYWtXrLNJ4SitcFJIhzmjQzld%2FE8CXuYnqfmRUB0uxdxu1PQ%2BctSG1%2BPMcEeU%2F%2B6oEW7UQkBv4YkRO3HFUFQNcx%2Fm6kzfjQoEuQNW7BNaCzC%2FHQo20M4ppOUxz5PU%2Fy0ZZapVe2r0A9XOd4kQydbeB1WsG%2FuqXaxFHry7jNHQLI4OK7c9bRj0a4YHTVTxfqyBEfAsRILZk4sFjZTyDTbSjdizJxA%2FaPsULThV%2FG4qRL34SlxLmxLDmfJTR7ssQW%2F1acmy128FndbVB81%2F5XbmGBEk9U%2F0NayK0XWU8oG%2FqQeuSighhowxvFDVRsothlD2vZFbZouJWXQoFlKE7tTrTTE2ZB4DSD1q4prr%2F2RY6gUEp6hz%2FzL74mwIAsIbHrnzopyPG2lQAq0ypLQqldeCs1aj0pMak4%2FJn54JPmEzhCBOPgrCKkX8jZDNiba1VhMKKj3Rq2kRXKBSMkP1WoGZbt3HiwUlC6%2B0%2BkLfJ6xwb%2FEnmuRLf%2BXqQYsYQWjXS1HHji1Tb0f5wpeamrns1rwtpn0MXSdZFg6%2F5IyFUKx%2F0OPXRO2qqJIVCRiUlNYKeOEq0%2BQ6GY0CqXKA3QARbs0MPmji78GOqUBpZDCFFsdMjvOmoRdXb5IuoaDwTNi%2BK5LhtIk2ITQnOy%2FY07vNypm%2Bog%2BezRJtTFhxXRIXaQisrf2PUc81aaRS2h%2FU0HskuQPkWk5nB%2BjgK0hgedxOJJr9z5Esto%2FNRAKB%2FDeKlJHY2dbgH0Kmdigo%2BwtAYemd%2BBYt%2FncXNfGbfId00%2BgVLdbAYKlplTwMc%2B6rSivJgVlMv4NUBVtc%2FkJdkAMSjiC&X-Amz-Signature=c5e3a3fee0bb009b86de4e721e234a2184367341f73286abddd3123c1a0784ab&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637HSFXL4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7bRWdmiMDYxh91B9Sj0%2BRDQp%2BkO3IkpIXmaqwNR9agIgY2hhHZZ2DU%2BoRN23%2FdvyrMWF2wnbQ9%2Biz5V8CWalp7Iq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDMC1cLosn8LsURg%2FXircA10r76BdKDt%2BqrBwV%2B0TnS1VIVn1Rl1SwjLMYJ8RqYWtXrLNJ4SitcFJIhzmjQzld%2FE8CXuYnqfmRUB0uxdxu1PQ%2BctSG1%2BPMcEeU%2F%2B6oEW7UQkBv4YkRO3HFUFQNcx%2Fm6kzfjQoEuQNW7BNaCzC%2FHQo20M4ppOUxz5PU%2Fy0ZZapVe2r0A9XOd4kQydbeB1WsG%2FuqXaxFHry7jNHQLI4OK7c9bRj0a4YHTVTxfqyBEfAsRILZk4sFjZTyDTbSjdizJxA%2FaPsULThV%2FG4qRL34SlxLmxLDmfJTR7ssQW%2F1acmy128FndbVB81%2F5XbmGBEk9U%2F0NayK0XWU8oG%2FqQeuSighhowxvFDVRsothlD2vZFbZouJWXQoFlKE7tTrTTE2ZB4DSD1q4prr%2F2RY6gUEp6hz%2FzL74mwIAsIbHrnzopyPG2lQAq0ypLQqldeCs1aj0pMak4%2FJn54JPmEzhCBOPgrCKkX8jZDNiba1VhMKKj3Rq2kRXKBSMkP1WoGZbt3HiwUlC6%2B0%2BkLfJ6xwb%2FEnmuRLf%2BXqQYsYQWjXS1HHji1Tb0f5wpeamrns1rwtpn0MXSdZFg6%2F5IyFUKx%2F0OPXRO2qqJIVCRiUlNYKeOEq0%2BQ6GY0CqXKA3QARbs0MPmji78GOqUBpZDCFFsdMjvOmoRdXb5IuoaDwTNi%2BK5LhtIk2ITQnOy%2FY07vNypm%2Bog%2BezRJtTFhxXRIXaQisrf2PUc81aaRS2h%2FU0HskuQPkWk5nB%2BjgK0hgedxOJJr9z5Esto%2FNRAKB%2FDeKlJHY2dbgH0Kmdigo%2BwtAYemd%2BBYt%2FncXNfGbfId00%2BgVLdbAYKlplTwMc%2B6rSivJgVlMv4NUBVtc%2FkJdkAMSjiC&X-Amz-Signature=032db3c5e09c8b243bd97002bdf301661dddebf965c84c1d761f51d48c59c674&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
