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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK743BCK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEni6bq20WfUyRB4u%2B5LE08T8jgf8PrHYpCXUHzHMj1OAiEAjlRZ%2BysfzCxyb%2B4P9UfToQS5snQTU5snYCEFamDLxnQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe%2BrJFYSFB2HyfE4ircAx1HgpJptLq6T2%2BHPPOyoFxexVAu8QAi185kt4TDVGz56ZWXvoKr4eD6xHOqEmOizB1MGLXowlmBXFi5XpfyANCWeEo7CiB8pSlVT3YSUKZ2KqEqdtYZBnVq260ShB91b3u9zoL%2FPp7AEybDus5zbfy6%2BRcRiN0ORdPe7c5IS0H6d%2FGchebcdOymC3nd3UCqImpcFFwlvPvJXd%2Bb6witQCrgE8Q8Z3y6ukG8OfvXbFV7NKoYkUPpdZqYk6pBP2lxy0NDCUopE%2BGsz3BpPIi1jsVgdXwc6qxFt0mKZmIa7Oalxxq6d2%2Bh%2BTro2sH4Ipz35EX70Mz8j4VDbTjsvPu4qDXRP1N%2BIXuIhbToMcLWqCfgwxW1Nx3KV3LbakJocB0m23YJ0UFhTOcjKfIQi6ke%2F8XiOsGhpHuvdR%2FgJSNX6dUNSii0Qs0l7rKVVyWBKICjZglQ6pohp9Dlmb%2FhVeFo6RjRtE1GoJN2Q1OaFQhbWBmcm%2BP7DvJAH98L8DWWiIQ9jWXl%2FqlnerPEX%2Bttm12S5%2FZsbvoR%2BVUWZ3jx3vfPe%2Fm7kHio5pt9vczMw2grcuqW9eH0Ei8Ps1S%2F75zmi2ql90Fjn82xFoKfg0X63VnfzANDiI81k2EdW5EGK6lxMPbi%2B7wGOqUBKz8yCNDzfiPnLFxgoakePKQXmLkrpkJuXN7daJ8hhfsWIw1KuyV4S8QMIND%2F1v2Oa2n%2BSOeB2pf4W32rI6R%2BXlymAvJTbV%2BKhhlYIDIPxbmTvTmQd3S8mGtF21SB4Uoizh4sHmA5fARLodzzs69vHmhZEdBiV%2BZgjJZ%2BvUolT0E67HGAgW%2BqmU6mCQPiWFSvgvAEe4PgCEz5L7tGuxZSn01M7qok&X-Amz-Signature=30e37907ea42b58251bd6752a7ef8c3b750d5bf9e832cd21dbdd3bdbd3bab2a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK743BCK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEni6bq20WfUyRB4u%2B5LE08T8jgf8PrHYpCXUHzHMj1OAiEAjlRZ%2BysfzCxyb%2B4P9UfToQS5snQTU5snYCEFamDLxnQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe%2BrJFYSFB2HyfE4ircAx1HgpJptLq6T2%2BHPPOyoFxexVAu8QAi185kt4TDVGz56ZWXvoKr4eD6xHOqEmOizB1MGLXowlmBXFi5XpfyANCWeEo7CiB8pSlVT3YSUKZ2KqEqdtYZBnVq260ShB91b3u9zoL%2FPp7AEybDus5zbfy6%2BRcRiN0ORdPe7c5IS0H6d%2FGchebcdOymC3nd3UCqImpcFFwlvPvJXd%2Bb6witQCrgE8Q8Z3y6ukG8OfvXbFV7NKoYkUPpdZqYk6pBP2lxy0NDCUopE%2BGsz3BpPIi1jsVgdXwc6qxFt0mKZmIa7Oalxxq6d2%2Bh%2BTro2sH4Ipz35EX70Mz8j4VDbTjsvPu4qDXRP1N%2BIXuIhbToMcLWqCfgwxW1Nx3KV3LbakJocB0m23YJ0UFhTOcjKfIQi6ke%2F8XiOsGhpHuvdR%2FgJSNX6dUNSii0Qs0l7rKVVyWBKICjZglQ6pohp9Dlmb%2FhVeFo6RjRtE1GoJN2Q1OaFQhbWBmcm%2BP7DvJAH98L8DWWiIQ9jWXl%2FqlnerPEX%2Bttm12S5%2FZsbvoR%2BVUWZ3jx3vfPe%2Fm7kHio5pt9vczMw2grcuqW9eH0Ei8Ps1S%2F75zmi2ql90Fjn82xFoKfg0X63VnfzANDiI81k2EdW5EGK6lxMPbi%2B7wGOqUBKz8yCNDzfiPnLFxgoakePKQXmLkrpkJuXN7daJ8hhfsWIw1KuyV4S8QMIND%2F1v2Oa2n%2BSOeB2pf4W32rI6R%2BXlymAvJTbV%2BKhhlYIDIPxbmTvTmQd3S8mGtF21SB4Uoizh4sHmA5fARLodzzs69vHmhZEdBiV%2BZgjJZ%2BvUolT0E67HGAgW%2BqmU6mCQPiWFSvgvAEe4PgCEz5L7tGuxZSn01M7qok&X-Amz-Signature=ba1bd67934458580a5476b0b3155507e8a7cf54f4bb46b82946fba5938e8cb0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK743BCK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEni6bq20WfUyRB4u%2B5LE08T8jgf8PrHYpCXUHzHMj1OAiEAjlRZ%2BysfzCxyb%2B4P9UfToQS5snQTU5snYCEFamDLxnQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe%2BrJFYSFB2HyfE4ircAx1HgpJptLq6T2%2BHPPOyoFxexVAu8QAi185kt4TDVGz56ZWXvoKr4eD6xHOqEmOizB1MGLXowlmBXFi5XpfyANCWeEo7CiB8pSlVT3YSUKZ2KqEqdtYZBnVq260ShB91b3u9zoL%2FPp7AEybDus5zbfy6%2BRcRiN0ORdPe7c5IS0H6d%2FGchebcdOymC3nd3UCqImpcFFwlvPvJXd%2Bb6witQCrgE8Q8Z3y6ukG8OfvXbFV7NKoYkUPpdZqYk6pBP2lxy0NDCUopE%2BGsz3BpPIi1jsVgdXwc6qxFt0mKZmIa7Oalxxq6d2%2Bh%2BTro2sH4Ipz35EX70Mz8j4VDbTjsvPu4qDXRP1N%2BIXuIhbToMcLWqCfgwxW1Nx3KV3LbakJocB0m23YJ0UFhTOcjKfIQi6ke%2F8XiOsGhpHuvdR%2FgJSNX6dUNSii0Qs0l7rKVVyWBKICjZglQ6pohp9Dlmb%2FhVeFo6RjRtE1GoJN2Q1OaFQhbWBmcm%2BP7DvJAH98L8DWWiIQ9jWXl%2FqlnerPEX%2Bttm12S5%2FZsbvoR%2BVUWZ3jx3vfPe%2Fm7kHio5pt9vczMw2grcuqW9eH0Ei8Ps1S%2F75zmi2ql90Fjn82xFoKfg0X63VnfzANDiI81k2EdW5EGK6lxMPbi%2B7wGOqUBKz8yCNDzfiPnLFxgoakePKQXmLkrpkJuXN7daJ8hhfsWIw1KuyV4S8QMIND%2F1v2Oa2n%2BSOeB2pf4W32rI6R%2BXlymAvJTbV%2BKhhlYIDIPxbmTvTmQd3S8mGtF21SB4Uoizh4sHmA5fARLodzzs69vHmhZEdBiV%2BZgjJZ%2BvUolT0E67HGAgW%2BqmU6mCQPiWFSvgvAEe4PgCEz5L7tGuxZSn01M7qok&X-Amz-Signature=326429913ba8b66fc6c734e5a2c63069f9f89ad8079bc6155d11db97ca574f22&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK743BCK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEni6bq20WfUyRB4u%2B5LE08T8jgf8PrHYpCXUHzHMj1OAiEAjlRZ%2BysfzCxyb%2B4P9UfToQS5snQTU5snYCEFamDLxnQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe%2BrJFYSFB2HyfE4ircAx1HgpJptLq6T2%2BHPPOyoFxexVAu8QAi185kt4TDVGz56ZWXvoKr4eD6xHOqEmOizB1MGLXowlmBXFi5XpfyANCWeEo7CiB8pSlVT3YSUKZ2KqEqdtYZBnVq260ShB91b3u9zoL%2FPp7AEybDus5zbfy6%2BRcRiN0ORdPe7c5IS0H6d%2FGchebcdOymC3nd3UCqImpcFFwlvPvJXd%2Bb6witQCrgE8Q8Z3y6ukG8OfvXbFV7NKoYkUPpdZqYk6pBP2lxy0NDCUopE%2BGsz3BpPIi1jsVgdXwc6qxFt0mKZmIa7Oalxxq6d2%2Bh%2BTro2sH4Ipz35EX70Mz8j4VDbTjsvPu4qDXRP1N%2BIXuIhbToMcLWqCfgwxW1Nx3KV3LbakJocB0m23YJ0UFhTOcjKfIQi6ke%2F8XiOsGhpHuvdR%2FgJSNX6dUNSii0Qs0l7rKVVyWBKICjZglQ6pohp9Dlmb%2FhVeFo6RjRtE1GoJN2Q1OaFQhbWBmcm%2BP7DvJAH98L8DWWiIQ9jWXl%2FqlnerPEX%2Bttm12S5%2FZsbvoR%2BVUWZ3jx3vfPe%2Fm7kHio5pt9vczMw2grcuqW9eH0Ei8Ps1S%2F75zmi2ql90Fjn82xFoKfg0X63VnfzANDiI81k2EdW5EGK6lxMPbi%2B7wGOqUBKz8yCNDzfiPnLFxgoakePKQXmLkrpkJuXN7daJ8hhfsWIw1KuyV4S8QMIND%2F1v2Oa2n%2BSOeB2pf4W32rI6R%2BXlymAvJTbV%2BKhhlYIDIPxbmTvTmQd3S8mGtF21SB4Uoizh4sHmA5fARLodzzs69vHmhZEdBiV%2BZgjJZ%2BvUolT0E67HGAgW%2BqmU6mCQPiWFSvgvAEe4PgCEz5L7tGuxZSn01M7qok&X-Amz-Signature=7e3f49f61b16f285537d6b34c0f4c9146044569d5962373a29e3f2abfb3a27aa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK743BCK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEni6bq20WfUyRB4u%2B5LE08T8jgf8PrHYpCXUHzHMj1OAiEAjlRZ%2BysfzCxyb%2B4P9UfToQS5snQTU5snYCEFamDLxnQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe%2BrJFYSFB2HyfE4ircAx1HgpJptLq6T2%2BHPPOyoFxexVAu8QAi185kt4TDVGz56ZWXvoKr4eD6xHOqEmOizB1MGLXowlmBXFi5XpfyANCWeEo7CiB8pSlVT3YSUKZ2KqEqdtYZBnVq260ShB91b3u9zoL%2FPp7AEybDus5zbfy6%2BRcRiN0ORdPe7c5IS0H6d%2FGchebcdOymC3nd3UCqImpcFFwlvPvJXd%2Bb6witQCrgE8Q8Z3y6ukG8OfvXbFV7NKoYkUPpdZqYk6pBP2lxy0NDCUopE%2BGsz3BpPIi1jsVgdXwc6qxFt0mKZmIa7Oalxxq6d2%2Bh%2BTro2sH4Ipz35EX70Mz8j4VDbTjsvPu4qDXRP1N%2BIXuIhbToMcLWqCfgwxW1Nx3KV3LbakJocB0m23YJ0UFhTOcjKfIQi6ke%2F8XiOsGhpHuvdR%2FgJSNX6dUNSii0Qs0l7rKVVyWBKICjZglQ6pohp9Dlmb%2FhVeFo6RjRtE1GoJN2Q1OaFQhbWBmcm%2BP7DvJAH98L8DWWiIQ9jWXl%2FqlnerPEX%2Bttm12S5%2FZsbvoR%2BVUWZ3jx3vfPe%2Fm7kHio5pt9vczMw2grcuqW9eH0Ei8Ps1S%2F75zmi2ql90Fjn82xFoKfg0X63VnfzANDiI81k2EdW5EGK6lxMPbi%2B7wGOqUBKz8yCNDzfiPnLFxgoakePKQXmLkrpkJuXN7daJ8hhfsWIw1KuyV4S8QMIND%2F1v2Oa2n%2BSOeB2pf4W32rI6R%2BXlymAvJTbV%2BKhhlYIDIPxbmTvTmQd3S8mGtF21SB4Uoizh4sHmA5fARLodzzs69vHmhZEdBiV%2BZgjJZ%2BvUolT0E67HGAgW%2BqmU6mCQPiWFSvgvAEe4PgCEz5L7tGuxZSn01M7qok&X-Amz-Signature=ffdea2886c7d6eb9270a78494d8ee658f93fb20e70b57f7f140a56860443f5c0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK743BCK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEni6bq20WfUyRB4u%2B5LE08T8jgf8PrHYpCXUHzHMj1OAiEAjlRZ%2BysfzCxyb%2B4P9UfToQS5snQTU5snYCEFamDLxnQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe%2BrJFYSFB2HyfE4ircAx1HgpJptLq6T2%2BHPPOyoFxexVAu8QAi185kt4TDVGz56ZWXvoKr4eD6xHOqEmOizB1MGLXowlmBXFi5XpfyANCWeEo7CiB8pSlVT3YSUKZ2KqEqdtYZBnVq260ShB91b3u9zoL%2FPp7AEybDus5zbfy6%2BRcRiN0ORdPe7c5IS0H6d%2FGchebcdOymC3nd3UCqImpcFFwlvPvJXd%2Bb6witQCrgE8Q8Z3y6ukG8OfvXbFV7NKoYkUPpdZqYk6pBP2lxy0NDCUopE%2BGsz3BpPIi1jsVgdXwc6qxFt0mKZmIa7Oalxxq6d2%2Bh%2BTro2sH4Ipz35EX70Mz8j4VDbTjsvPu4qDXRP1N%2BIXuIhbToMcLWqCfgwxW1Nx3KV3LbakJocB0m23YJ0UFhTOcjKfIQi6ke%2F8XiOsGhpHuvdR%2FgJSNX6dUNSii0Qs0l7rKVVyWBKICjZglQ6pohp9Dlmb%2FhVeFo6RjRtE1GoJN2Q1OaFQhbWBmcm%2BP7DvJAH98L8DWWiIQ9jWXl%2FqlnerPEX%2Bttm12S5%2FZsbvoR%2BVUWZ3jx3vfPe%2Fm7kHio5pt9vczMw2grcuqW9eH0Ei8Ps1S%2F75zmi2ql90Fjn82xFoKfg0X63VnfzANDiI81k2EdW5EGK6lxMPbi%2B7wGOqUBKz8yCNDzfiPnLFxgoakePKQXmLkrpkJuXN7daJ8hhfsWIw1KuyV4S8QMIND%2F1v2Oa2n%2BSOeB2pf4W32rI6R%2BXlymAvJTbV%2BKhhlYIDIPxbmTvTmQd3S8mGtF21SB4Uoizh4sHmA5fARLodzzs69vHmhZEdBiV%2BZgjJZ%2BvUolT0E67HGAgW%2BqmU6mCQPiWFSvgvAEe4PgCEz5L7tGuxZSn01M7qok&X-Amz-Signature=20663feda3c5c7a40d1c25541143e6219df6baecdc8d066980b8e66725a42941&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK743BCK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEni6bq20WfUyRB4u%2B5LE08T8jgf8PrHYpCXUHzHMj1OAiEAjlRZ%2BysfzCxyb%2B4P9UfToQS5snQTU5snYCEFamDLxnQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe%2BrJFYSFB2HyfE4ircAx1HgpJptLq6T2%2BHPPOyoFxexVAu8QAi185kt4TDVGz56ZWXvoKr4eD6xHOqEmOizB1MGLXowlmBXFi5XpfyANCWeEo7CiB8pSlVT3YSUKZ2KqEqdtYZBnVq260ShB91b3u9zoL%2FPp7AEybDus5zbfy6%2BRcRiN0ORdPe7c5IS0H6d%2FGchebcdOymC3nd3UCqImpcFFwlvPvJXd%2Bb6witQCrgE8Q8Z3y6ukG8OfvXbFV7NKoYkUPpdZqYk6pBP2lxy0NDCUopE%2BGsz3BpPIi1jsVgdXwc6qxFt0mKZmIa7Oalxxq6d2%2Bh%2BTro2sH4Ipz35EX70Mz8j4VDbTjsvPu4qDXRP1N%2BIXuIhbToMcLWqCfgwxW1Nx3KV3LbakJocB0m23YJ0UFhTOcjKfIQi6ke%2F8XiOsGhpHuvdR%2FgJSNX6dUNSii0Qs0l7rKVVyWBKICjZglQ6pohp9Dlmb%2FhVeFo6RjRtE1GoJN2Q1OaFQhbWBmcm%2BP7DvJAH98L8DWWiIQ9jWXl%2FqlnerPEX%2Bttm12S5%2FZsbvoR%2BVUWZ3jx3vfPe%2Fm7kHio5pt9vczMw2grcuqW9eH0Ei8Ps1S%2F75zmi2ql90Fjn82xFoKfg0X63VnfzANDiI81k2EdW5EGK6lxMPbi%2B7wGOqUBKz8yCNDzfiPnLFxgoakePKQXmLkrpkJuXN7daJ8hhfsWIw1KuyV4S8QMIND%2F1v2Oa2n%2BSOeB2pf4W32rI6R%2BXlymAvJTbV%2BKhhlYIDIPxbmTvTmQd3S8mGtF21SB4Uoizh4sHmA5fARLodzzs69vHmhZEdBiV%2BZgjJZ%2BvUolT0E67HGAgW%2BqmU6mCQPiWFSvgvAEe4PgCEz5L7tGuxZSn01M7qok&X-Amz-Signature=855589992abffecf6a72c0974cc0e86d763464878d54267879c5f09b53e630fb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
