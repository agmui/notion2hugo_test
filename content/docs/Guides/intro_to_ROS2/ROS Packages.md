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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQMDXNA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoksYjlXayqYnIEUJ6SV1ZI3lkrAGPhUquPjcwsslV5gIgZOxhURrNV3wkIZN2NOca5DsjCKnnMPUEri0dlzEOhkUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAP8AZ9xjj2QaiTzmyrcAzl3mLSGMB4fkwbHM3Dm87nARznzNRwzaYvDtGPy06B%2Bf1%2FuEFNRwodjQvLcLgQPqqL6Kx5gdBXReKLCBFSxGjuzfoFCMdC4ltLlYQ%2FQxwujLwv%2F0nuFQgb01ACf3Bey14WSn4R8El5JxUxyBR1ZeyZN9x55sWYyT0FCAIIAPtJr8KIpKNK2HnLGZnBf7AxmUpPXhnuFs7jBKlprFO3R1Q9DECL5R6GWBt%2BIWnBsmvcN6x6p12MSf6qQBsmYiWYubQWFE48KBMb3n6jbvwYjdtircMgDX2j7n0FCL%2F8V5kc0ENGpOGB2hUUQdzyVaWNDIHvmfjUajoJC6ybRYLMdHuzvttUrbmON%2FiixpXgLcuECM%2BQMm5ZiwaQFcJQVV2Vws6paosPNYLsW%2BNVfTpAlfFBuxDJsodZBcuGpQgAbU%2BbvJqi4%2B6h36l9XI2%2BCuLb0QFoj2JhQUbzYPWUr3sDPFrm1BIwr%2F3cSw5eCrlwRWxxu4T0FP3IB8bTD9bGeWpA4qEAuFp%2FxPsoJhqQaDvwhtISL9VltrlGknvY7MbqqaUrJytV%2BeODqMaRcB92zoqEv2FEZlAPjiH0Fwcd0TKCKICE4FgGoi5FcYHNaVXOYTxyl1hxKJFwxSIYG2F3NMPr648AGOqUB7LAu1F%2FRdCEJsgxEUdtfONbXiF9LNgJ5XvNFyFXBt9Ii7PrgNS0pwo6oQvDjjn1K9odGVtOZ9r9eA8GhJtaIl5n5oDV4wF0Gp5Cub1YqrWa2Vbz9tmi1YOV3eCnUKysHKocCiLxJc7G0%2FNf4ALMWwjrcYy5wg71z7tj8keZ7%2Fqh3VWGmf%2F0Gt6avXPYOoRIkFSpqyK5V7FZKlW2AGcOXYRgr%2BEiy&X-Amz-Signature=baca879a1b9dfabf4b90a146a56be9da11ed1bbb41e2045ef881ad7b0b0e19c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQMDXNA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoksYjlXayqYnIEUJ6SV1ZI3lkrAGPhUquPjcwsslV5gIgZOxhURrNV3wkIZN2NOca5DsjCKnnMPUEri0dlzEOhkUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAP8AZ9xjj2QaiTzmyrcAzl3mLSGMB4fkwbHM3Dm87nARznzNRwzaYvDtGPy06B%2Bf1%2FuEFNRwodjQvLcLgQPqqL6Kx5gdBXReKLCBFSxGjuzfoFCMdC4ltLlYQ%2FQxwujLwv%2F0nuFQgb01ACf3Bey14WSn4R8El5JxUxyBR1ZeyZN9x55sWYyT0FCAIIAPtJr8KIpKNK2HnLGZnBf7AxmUpPXhnuFs7jBKlprFO3R1Q9DECL5R6GWBt%2BIWnBsmvcN6x6p12MSf6qQBsmYiWYubQWFE48KBMb3n6jbvwYjdtircMgDX2j7n0FCL%2F8V5kc0ENGpOGB2hUUQdzyVaWNDIHvmfjUajoJC6ybRYLMdHuzvttUrbmON%2FiixpXgLcuECM%2BQMm5ZiwaQFcJQVV2Vws6paosPNYLsW%2BNVfTpAlfFBuxDJsodZBcuGpQgAbU%2BbvJqi4%2B6h36l9XI2%2BCuLb0QFoj2JhQUbzYPWUr3sDPFrm1BIwr%2F3cSw5eCrlwRWxxu4T0FP3IB8bTD9bGeWpA4qEAuFp%2FxPsoJhqQaDvwhtISL9VltrlGknvY7MbqqaUrJytV%2BeODqMaRcB92zoqEv2FEZlAPjiH0Fwcd0TKCKICE4FgGoi5FcYHNaVXOYTxyl1hxKJFwxSIYG2F3NMPr648AGOqUB7LAu1F%2FRdCEJsgxEUdtfONbXiF9LNgJ5XvNFyFXBt9Ii7PrgNS0pwo6oQvDjjn1K9odGVtOZ9r9eA8GhJtaIl5n5oDV4wF0Gp5Cub1YqrWa2Vbz9tmi1YOV3eCnUKysHKocCiLxJc7G0%2FNf4ALMWwjrcYy5wg71z7tj8keZ7%2Fqh3VWGmf%2F0Gt6avXPYOoRIkFSpqyK5V7FZKlW2AGcOXYRgr%2BEiy&X-Amz-Signature=d31dbfa8ddf6e045fed73278a7863f2f32f47a47c07ded2246590a68e7bf3480&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQMDXNA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoksYjlXayqYnIEUJ6SV1ZI3lkrAGPhUquPjcwsslV5gIgZOxhURrNV3wkIZN2NOca5DsjCKnnMPUEri0dlzEOhkUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAP8AZ9xjj2QaiTzmyrcAzl3mLSGMB4fkwbHM3Dm87nARznzNRwzaYvDtGPy06B%2Bf1%2FuEFNRwodjQvLcLgQPqqL6Kx5gdBXReKLCBFSxGjuzfoFCMdC4ltLlYQ%2FQxwujLwv%2F0nuFQgb01ACf3Bey14WSn4R8El5JxUxyBR1ZeyZN9x55sWYyT0FCAIIAPtJr8KIpKNK2HnLGZnBf7AxmUpPXhnuFs7jBKlprFO3R1Q9DECL5R6GWBt%2BIWnBsmvcN6x6p12MSf6qQBsmYiWYubQWFE48KBMb3n6jbvwYjdtircMgDX2j7n0FCL%2F8V5kc0ENGpOGB2hUUQdzyVaWNDIHvmfjUajoJC6ybRYLMdHuzvttUrbmON%2FiixpXgLcuECM%2BQMm5ZiwaQFcJQVV2Vws6paosPNYLsW%2BNVfTpAlfFBuxDJsodZBcuGpQgAbU%2BbvJqi4%2B6h36l9XI2%2BCuLb0QFoj2JhQUbzYPWUr3sDPFrm1BIwr%2F3cSw5eCrlwRWxxu4T0FP3IB8bTD9bGeWpA4qEAuFp%2FxPsoJhqQaDvwhtISL9VltrlGknvY7MbqqaUrJytV%2BeODqMaRcB92zoqEv2FEZlAPjiH0Fwcd0TKCKICE4FgGoi5FcYHNaVXOYTxyl1hxKJFwxSIYG2F3NMPr648AGOqUB7LAu1F%2FRdCEJsgxEUdtfONbXiF9LNgJ5XvNFyFXBt9Ii7PrgNS0pwo6oQvDjjn1K9odGVtOZ9r9eA8GhJtaIl5n5oDV4wF0Gp5Cub1YqrWa2Vbz9tmi1YOV3eCnUKysHKocCiLxJc7G0%2FNf4ALMWwjrcYy5wg71z7tj8keZ7%2Fqh3VWGmf%2F0Gt6avXPYOoRIkFSpqyK5V7FZKlW2AGcOXYRgr%2BEiy&X-Amz-Signature=5be5eb793fccb428ded36849c497ea39d89e78ccd2337d017ea71fa82065311b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQMDXNA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoksYjlXayqYnIEUJ6SV1ZI3lkrAGPhUquPjcwsslV5gIgZOxhURrNV3wkIZN2NOca5DsjCKnnMPUEri0dlzEOhkUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAP8AZ9xjj2QaiTzmyrcAzl3mLSGMB4fkwbHM3Dm87nARznzNRwzaYvDtGPy06B%2Bf1%2FuEFNRwodjQvLcLgQPqqL6Kx5gdBXReKLCBFSxGjuzfoFCMdC4ltLlYQ%2FQxwujLwv%2F0nuFQgb01ACf3Bey14WSn4R8El5JxUxyBR1ZeyZN9x55sWYyT0FCAIIAPtJr8KIpKNK2HnLGZnBf7AxmUpPXhnuFs7jBKlprFO3R1Q9DECL5R6GWBt%2BIWnBsmvcN6x6p12MSf6qQBsmYiWYubQWFE48KBMb3n6jbvwYjdtircMgDX2j7n0FCL%2F8V5kc0ENGpOGB2hUUQdzyVaWNDIHvmfjUajoJC6ybRYLMdHuzvttUrbmON%2FiixpXgLcuECM%2BQMm5ZiwaQFcJQVV2Vws6paosPNYLsW%2BNVfTpAlfFBuxDJsodZBcuGpQgAbU%2BbvJqi4%2B6h36l9XI2%2BCuLb0QFoj2JhQUbzYPWUr3sDPFrm1BIwr%2F3cSw5eCrlwRWxxu4T0FP3IB8bTD9bGeWpA4qEAuFp%2FxPsoJhqQaDvwhtISL9VltrlGknvY7MbqqaUrJytV%2BeODqMaRcB92zoqEv2FEZlAPjiH0Fwcd0TKCKICE4FgGoi5FcYHNaVXOYTxyl1hxKJFwxSIYG2F3NMPr648AGOqUB7LAu1F%2FRdCEJsgxEUdtfONbXiF9LNgJ5XvNFyFXBt9Ii7PrgNS0pwo6oQvDjjn1K9odGVtOZ9r9eA8GhJtaIl5n5oDV4wF0Gp5Cub1YqrWa2Vbz9tmi1YOV3eCnUKysHKocCiLxJc7G0%2FNf4ALMWwjrcYy5wg71z7tj8keZ7%2Fqh3VWGmf%2F0Gt6avXPYOoRIkFSpqyK5V7FZKlW2AGcOXYRgr%2BEiy&X-Amz-Signature=a3e2f8157d59c06b15394cf5e3ca7504554e95c32b4e13f9c8c76f88716cc3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQMDXNA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoksYjlXayqYnIEUJ6SV1ZI3lkrAGPhUquPjcwsslV5gIgZOxhURrNV3wkIZN2NOca5DsjCKnnMPUEri0dlzEOhkUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAP8AZ9xjj2QaiTzmyrcAzl3mLSGMB4fkwbHM3Dm87nARznzNRwzaYvDtGPy06B%2Bf1%2FuEFNRwodjQvLcLgQPqqL6Kx5gdBXReKLCBFSxGjuzfoFCMdC4ltLlYQ%2FQxwujLwv%2F0nuFQgb01ACf3Bey14WSn4R8El5JxUxyBR1ZeyZN9x55sWYyT0FCAIIAPtJr8KIpKNK2HnLGZnBf7AxmUpPXhnuFs7jBKlprFO3R1Q9DECL5R6GWBt%2BIWnBsmvcN6x6p12MSf6qQBsmYiWYubQWFE48KBMb3n6jbvwYjdtircMgDX2j7n0FCL%2F8V5kc0ENGpOGB2hUUQdzyVaWNDIHvmfjUajoJC6ybRYLMdHuzvttUrbmON%2FiixpXgLcuECM%2BQMm5ZiwaQFcJQVV2Vws6paosPNYLsW%2BNVfTpAlfFBuxDJsodZBcuGpQgAbU%2BbvJqi4%2B6h36l9XI2%2BCuLb0QFoj2JhQUbzYPWUr3sDPFrm1BIwr%2F3cSw5eCrlwRWxxu4T0FP3IB8bTD9bGeWpA4qEAuFp%2FxPsoJhqQaDvwhtISL9VltrlGknvY7MbqqaUrJytV%2BeODqMaRcB92zoqEv2FEZlAPjiH0Fwcd0TKCKICE4FgGoi5FcYHNaVXOYTxyl1hxKJFwxSIYG2F3NMPr648AGOqUB7LAu1F%2FRdCEJsgxEUdtfONbXiF9LNgJ5XvNFyFXBt9Ii7PrgNS0pwo6oQvDjjn1K9odGVtOZ9r9eA8GhJtaIl5n5oDV4wF0Gp5Cub1YqrWa2Vbz9tmi1YOV3eCnUKysHKocCiLxJc7G0%2FNf4ALMWwjrcYy5wg71z7tj8keZ7%2Fqh3VWGmf%2F0Gt6avXPYOoRIkFSpqyK5V7FZKlW2AGcOXYRgr%2BEiy&X-Amz-Signature=b088057ca2906cb410803a63aefb06991e7b4b09d4487bf3edaa5c7ace3b3631&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQMDXNA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoksYjlXayqYnIEUJ6SV1ZI3lkrAGPhUquPjcwsslV5gIgZOxhURrNV3wkIZN2NOca5DsjCKnnMPUEri0dlzEOhkUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAP8AZ9xjj2QaiTzmyrcAzl3mLSGMB4fkwbHM3Dm87nARznzNRwzaYvDtGPy06B%2Bf1%2FuEFNRwodjQvLcLgQPqqL6Kx5gdBXReKLCBFSxGjuzfoFCMdC4ltLlYQ%2FQxwujLwv%2F0nuFQgb01ACf3Bey14WSn4R8El5JxUxyBR1ZeyZN9x55sWYyT0FCAIIAPtJr8KIpKNK2HnLGZnBf7AxmUpPXhnuFs7jBKlprFO3R1Q9DECL5R6GWBt%2BIWnBsmvcN6x6p12MSf6qQBsmYiWYubQWFE48KBMb3n6jbvwYjdtircMgDX2j7n0FCL%2F8V5kc0ENGpOGB2hUUQdzyVaWNDIHvmfjUajoJC6ybRYLMdHuzvttUrbmON%2FiixpXgLcuECM%2BQMm5ZiwaQFcJQVV2Vws6paosPNYLsW%2BNVfTpAlfFBuxDJsodZBcuGpQgAbU%2BbvJqi4%2B6h36l9XI2%2BCuLb0QFoj2JhQUbzYPWUr3sDPFrm1BIwr%2F3cSw5eCrlwRWxxu4T0FP3IB8bTD9bGeWpA4qEAuFp%2FxPsoJhqQaDvwhtISL9VltrlGknvY7MbqqaUrJytV%2BeODqMaRcB92zoqEv2FEZlAPjiH0Fwcd0TKCKICE4FgGoi5FcYHNaVXOYTxyl1hxKJFwxSIYG2F3NMPr648AGOqUB7LAu1F%2FRdCEJsgxEUdtfONbXiF9LNgJ5XvNFyFXBt9Ii7PrgNS0pwo6oQvDjjn1K9odGVtOZ9r9eA8GhJtaIl5n5oDV4wF0Gp5Cub1YqrWa2Vbz9tmi1YOV3eCnUKysHKocCiLxJc7G0%2FNf4ALMWwjrcYy5wg71z7tj8keZ7%2Fqh3VWGmf%2F0Gt6avXPYOoRIkFSpqyK5V7FZKlW2AGcOXYRgr%2BEiy&X-Amz-Signature=821a51e6427f24249b1ece65c490d68b9b227d1463bf4d8cbdb508728f5c9cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQMDXNA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoksYjlXayqYnIEUJ6SV1ZI3lkrAGPhUquPjcwsslV5gIgZOxhURrNV3wkIZN2NOca5DsjCKnnMPUEri0dlzEOhkUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAP8AZ9xjj2QaiTzmyrcAzl3mLSGMB4fkwbHM3Dm87nARznzNRwzaYvDtGPy06B%2Bf1%2FuEFNRwodjQvLcLgQPqqL6Kx5gdBXReKLCBFSxGjuzfoFCMdC4ltLlYQ%2FQxwujLwv%2F0nuFQgb01ACf3Bey14WSn4R8El5JxUxyBR1ZeyZN9x55sWYyT0FCAIIAPtJr8KIpKNK2HnLGZnBf7AxmUpPXhnuFs7jBKlprFO3R1Q9DECL5R6GWBt%2BIWnBsmvcN6x6p12MSf6qQBsmYiWYubQWFE48KBMb3n6jbvwYjdtircMgDX2j7n0FCL%2F8V5kc0ENGpOGB2hUUQdzyVaWNDIHvmfjUajoJC6ybRYLMdHuzvttUrbmON%2FiixpXgLcuECM%2BQMm5ZiwaQFcJQVV2Vws6paosPNYLsW%2BNVfTpAlfFBuxDJsodZBcuGpQgAbU%2BbvJqi4%2B6h36l9XI2%2BCuLb0QFoj2JhQUbzYPWUr3sDPFrm1BIwr%2F3cSw5eCrlwRWxxu4T0FP3IB8bTD9bGeWpA4qEAuFp%2FxPsoJhqQaDvwhtISL9VltrlGknvY7MbqqaUrJytV%2BeODqMaRcB92zoqEv2FEZlAPjiH0Fwcd0TKCKICE4FgGoi5FcYHNaVXOYTxyl1hxKJFwxSIYG2F3NMPr648AGOqUB7LAu1F%2FRdCEJsgxEUdtfONbXiF9LNgJ5XvNFyFXBt9Ii7PrgNS0pwo6oQvDjjn1K9odGVtOZ9r9eA8GhJtaIl5n5oDV4wF0Gp5Cub1YqrWa2Vbz9tmi1YOV3eCnUKysHKocCiLxJc7G0%2FNf4ALMWwjrcYy5wg71z7tj8keZ7%2Fqh3VWGmf%2F0Gt6avXPYOoRIkFSpqyK5V7FZKlW2AGcOXYRgr%2BEiy&X-Amz-Signature=09f31dafec38ac8db4c34d57593d420315e13269190e2d4132e877faf1c35bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
