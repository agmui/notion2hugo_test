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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47XWUPU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrlPnl660z3TbLO3xG4LYVdgIJqIylTzFJO3A39RXNQIhAISo4NGXNbzdM%2BFBmttAAb440LietI%2Bi8cED7IRkkclfKv8DCBEQABoMNjM3NDIzMTgzODA1IgwOd%2BwDZ4WbbGkyn7sq3ANYAcWqAOddcWy1TEIuvMkmCeNIWevkB4TDQdXqUTiUrxRc1pZOlTLeRuiTM3RGAB4XJyk4%2FdiJNOU6%2FOyM6f%2Btfndyo6MIfLnzmKXaWNhhLmShT%2BExiFm9Vv2HhwsgiNBPwx30B5SGAR54yAdXtLMPSHdH%2FCPqVmBTU3caEgs0WcUZeAQ3nkXjZapmG7BrkWDGYD5OhwnE7EUcu3iA3MT3AxfybtzGe%2FMIByhR0kof4hWx8%2FSjem%2Fl8yDdK8heDlqzyOXN7fh4OexIHt9us3l5YO85jge1iem8%2BvWgN9KVRzjMW6%2BZKw8wdPKQlCE55O06J1ewSTzegik5kwAtEOc4MyG%2BbGNavt5lkolXMnnNqA7zLjaeCcAGaT3dJGyWT%2B1tqqcWo%2BfDXe0DtLkzyaFLudDwJsq04R%2BJ3wXbtuqSxzSzccVDV95cW1GlOMbraXbzhAvUV0IAZOYZjDJIu3f9NmbK1SExShhDgE3Zo5kNeuwtvDv5E%2B720CLovEYZWogdyQN2hg%2BVKLywqtWpJO8vYvCA%2BII2gi953SicuiAKXmLKriR%2BN3snaaixX7FqbIlFVB3YuqeEhhKhUDOGNIbLHigpjUKDo%2FCmQifT6%2BVcZkgT5lAKULaRyNLm6DDri6C%2BBjqkAZjRy2TbdpGU7lqrAEZY%2B5EqTt91X7Y%2B%2Fe2vbjQNL2gknqkRWjLsTFQuq6lic85duMnddgHpq8GVBlUq970a7uoof5RjiAexBlpqzz5c5uvaaa6csVccOkBYrBkRAz6vvo0xtIWHdDNhB8YMVrBiCFHaTBKy%2B5BNxecgL3wA7lCgYMuJCPg89jjfeGWPAaR8yk6Sr1o7M%2BA8y%2FBLXXfPO5dDg%2Fwb&X-Amz-Signature=20fc050962b37c599454880bd8a079e7e3b90c4a518e8468b4d96aabbc9dfbc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47XWUPU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrlPnl660z3TbLO3xG4LYVdgIJqIylTzFJO3A39RXNQIhAISo4NGXNbzdM%2BFBmttAAb440LietI%2Bi8cED7IRkkclfKv8DCBEQABoMNjM3NDIzMTgzODA1IgwOd%2BwDZ4WbbGkyn7sq3ANYAcWqAOddcWy1TEIuvMkmCeNIWevkB4TDQdXqUTiUrxRc1pZOlTLeRuiTM3RGAB4XJyk4%2FdiJNOU6%2FOyM6f%2Btfndyo6MIfLnzmKXaWNhhLmShT%2BExiFm9Vv2HhwsgiNBPwx30B5SGAR54yAdXtLMPSHdH%2FCPqVmBTU3caEgs0WcUZeAQ3nkXjZapmG7BrkWDGYD5OhwnE7EUcu3iA3MT3AxfybtzGe%2FMIByhR0kof4hWx8%2FSjem%2Fl8yDdK8heDlqzyOXN7fh4OexIHt9us3l5YO85jge1iem8%2BvWgN9KVRzjMW6%2BZKw8wdPKQlCE55O06J1ewSTzegik5kwAtEOc4MyG%2BbGNavt5lkolXMnnNqA7zLjaeCcAGaT3dJGyWT%2B1tqqcWo%2BfDXe0DtLkzyaFLudDwJsq04R%2BJ3wXbtuqSxzSzccVDV95cW1GlOMbraXbzhAvUV0IAZOYZjDJIu3f9NmbK1SExShhDgE3Zo5kNeuwtvDv5E%2B720CLovEYZWogdyQN2hg%2BVKLywqtWpJO8vYvCA%2BII2gi953SicuiAKXmLKriR%2BN3snaaixX7FqbIlFVB3YuqeEhhKhUDOGNIbLHigpjUKDo%2FCmQifT6%2BVcZkgT5lAKULaRyNLm6DDri6C%2BBjqkAZjRy2TbdpGU7lqrAEZY%2B5EqTt91X7Y%2B%2Fe2vbjQNL2gknqkRWjLsTFQuq6lic85duMnddgHpq8GVBlUq970a7uoof5RjiAexBlpqzz5c5uvaaa6csVccOkBYrBkRAz6vvo0xtIWHdDNhB8YMVrBiCFHaTBKy%2B5BNxecgL3wA7lCgYMuJCPg89jjfeGWPAaR8yk6Sr1o7M%2BA8y%2FBLXXfPO5dDg%2Fwb&X-Amz-Signature=6d25eb332c91839e8c9c480a717f439712d77ceb70f07fdf2fce4214308b9b07&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47XWUPU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrlPnl660z3TbLO3xG4LYVdgIJqIylTzFJO3A39RXNQIhAISo4NGXNbzdM%2BFBmttAAb440LietI%2Bi8cED7IRkkclfKv8DCBEQABoMNjM3NDIzMTgzODA1IgwOd%2BwDZ4WbbGkyn7sq3ANYAcWqAOddcWy1TEIuvMkmCeNIWevkB4TDQdXqUTiUrxRc1pZOlTLeRuiTM3RGAB4XJyk4%2FdiJNOU6%2FOyM6f%2Btfndyo6MIfLnzmKXaWNhhLmShT%2BExiFm9Vv2HhwsgiNBPwx30B5SGAR54yAdXtLMPSHdH%2FCPqVmBTU3caEgs0WcUZeAQ3nkXjZapmG7BrkWDGYD5OhwnE7EUcu3iA3MT3AxfybtzGe%2FMIByhR0kof4hWx8%2FSjem%2Fl8yDdK8heDlqzyOXN7fh4OexIHt9us3l5YO85jge1iem8%2BvWgN9KVRzjMW6%2BZKw8wdPKQlCE55O06J1ewSTzegik5kwAtEOc4MyG%2BbGNavt5lkolXMnnNqA7zLjaeCcAGaT3dJGyWT%2B1tqqcWo%2BfDXe0DtLkzyaFLudDwJsq04R%2BJ3wXbtuqSxzSzccVDV95cW1GlOMbraXbzhAvUV0IAZOYZjDJIu3f9NmbK1SExShhDgE3Zo5kNeuwtvDv5E%2B720CLovEYZWogdyQN2hg%2BVKLywqtWpJO8vYvCA%2BII2gi953SicuiAKXmLKriR%2BN3snaaixX7FqbIlFVB3YuqeEhhKhUDOGNIbLHigpjUKDo%2FCmQifT6%2BVcZkgT5lAKULaRyNLm6DDri6C%2BBjqkAZjRy2TbdpGU7lqrAEZY%2B5EqTt91X7Y%2B%2Fe2vbjQNL2gknqkRWjLsTFQuq6lic85duMnddgHpq8GVBlUq970a7uoof5RjiAexBlpqzz5c5uvaaa6csVccOkBYrBkRAz6vvo0xtIWHdDNhB8YMVrBiCFHaTBKy%2B5BNxecgL3wA7lCgYMuJCPg89jjfeGWPAaR8yk6Sr1o7M%2BA8y%2FBLXXfPO5dDg%2Fwb&X-Amz-Signature=dcbfee9c98956b477ae39df650f9f7bd0c6dac2c1c2566e9c017faad82d69795&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47XWUPU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrlPnl660z3TbLO3xG4LYVdgIJqIylTzFJO3A39RXNQIhAISo4NGXNbzdM%2BFBmttAAb440LietI%2Bi8cED7IRkkclfKv8DCBEQABoMNjM3NDIzMTgzODA1IgwOd%2BwDZ4WbbGkyn7sq3ANYAcWqAOddcWy1TEIuvMkmCeNIWevkB4TDQdXqUTiUrxRc1pZOlTLeRuiTM3RGAB4XJyk4%2FdiJNOU6%2FOyM6f%2Btfndyo6MIfLnzmKXaWNhhLmShT%2BExiFm9Vv2HhwsgiNBPwx30B5SGAR54yAdXtLMPSHdH%2FCPqVmBTU3caEgs0WcUZeAQ3nkXjZapmG7BrkWDGYD5OhwnE7EUcu3iA3MT3AxfybtzGe%2FMIByhR0kof4hWx8%2FSjem%2Fl8yDdK8heDlqzyOXN7fh4OexIHt9us3l5YO85jge1iem8%2BvWgN9KVRzjMW6%2BZKw8wdPKQlCE55O06J1ewSTzegik5kwAtEOc4MyG%2BbGNavt5lkolXMnnNqA7zLjaeCcAGaT3dJGyWT%2B1tqqcWo%2BfDXe0DtLkzyaFLudDwJsq04R%2BJ3wXbtuqSxzSzccVDV95cW1GlOMbraXbzhAvUV0IAZOYZjDJIu3f9NmbK1SExShhDgE3Zo5kNeuwtvDv5E%2B720CLovEYZWogdyQN2hg%2BVKLywqtWpJO8vYvCA%2BII2gi953SicuiAKXmLKriR%2BN3snaaixX7FqbIlFVB3YuqeEhhKhUDOGNIbLHigpjUKDo%2FCmQifT6%2BVcZkgT5lAKULaRyNLm6DDri6C%2BBjqkAZjRy2TbdpGU7lqrAEZY%2B5EqTt91X7Y%2B%2Fe2vbjQNL2gknqkRWjLsTFQuq6lic85duMnddgHpq8GVBlUq970a7uoof5RjiAexBlpqzz5c5uvaaa6csVccOkBYrBkRAz6vvo0xtIWHdDNhB8YMVrBiCFHaTBKy%2B5BNxecgL3wA7lCgYMuJCPg89jjfeGWPAaR8yk6Sr1o7M%2BA8y%2FBLXXfPO5dDg%2Fwb&X-Amz-Signature=16267cad8a6812b5a98071b3048abf7ebb3da3cbcf1c9e51c22f7fbe1902a7d8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47XWUPU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrlPnl660z3TbLO3xG4LYVdgIJqIylTzFJO3A39RXNQIhAISo4NGXNbzdM%2BFBmttAAb440LietI%2Bi8cED7IRkkclfKv8DCBEQABoMNjM3NDIzMTgzODA1IgwOd%2BwDZ4WbbGkyn7sq3ANYAcWqAOddcWy1TEIuvMkmCeNIWevkB4TDQdXqUTiUrxRc1pZOlTLeRuiTM3RGAB4XJyk4%2FdiJNOU6%2FOyM6f%2Btfndyo6MIfLnzmKXaWNhhLmShT%2BExiFm9Vv2HhwsgiNBPwx30B5SGAR54yAdXtLMPSHdH%2FCPqVmBTU3caEgs0WcUZeAQ3nkXjZapmG7BrkWDGYD5OhwnE7EUcu3iA3MT3AxfybtzGe%2FMIByhR0kof4hWx8%2FSjem%2Fl8yDdK8heDlqzyOXN7fh4OexIHt9us3l5YO85jge1iem8%2BvWgN9KVRzjMW6%2BZKw8wdPKQlCE55O06J1ewSTzegik5kwAtEOc4MyG%2BbGNavt5lkolXMnnNqA7zLjaeCcAGaT3dJGyWT%2B1tqqcWo%2BfDXe0DtLkzyaFLudDwJsq04R%2BJ3wXbtuqSxzSzccVDV95cW1GlOMbraXbzhAvUV0IAZOYZjDJIu3f9NmbK1SExShhDgE3Zo5kNeuwtvDv5E%2B720CLovEYZWogdyQN2hg%2BVKLywqtWpJO8vYvCA%2BII2gi953SicuiAKXmLKriR%2BN3snaaixX7FqbIlFVB3YuqeEhhKhUDOGNIbLHigpjUKDo%2FCmQifT6%2BVcZkgT5lAKULaRyNLm6DDri6C%2BBjqkAZjRy2TbdpGU7lqrAEZY%2B5EqTt91X7Y%2B%2Fe2vbjQNL2gknqkRWjLsTFQuq6lic85duMnddgHpq8GVBlUq970a7uoof5RjiAexBlpqzz5c5uvaaa6csVccOkBYrBkRAz6vvo0xtIWHdDNhB8YMVrBiCFHaTBKy%2B5BNxecgL3wA7lCgYMuJCPg89jjfeGWPAaR8yk6Sr1o7M%2BA8y%2FBLXXfPO5dDg%2Fwb&X-Amz-Signature=168dec67b2b4ea44c0de67cb7a65c2cbd5c767430f5cc0a22711fa1b670c52b2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47XWUPU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrlPnl660z3TbLO3xG4LYVdgIJqIylTzFJO3A39RXNQIhAISo4NGXNbzdM%2BFBmttAAb440LietI%2Bi8cED7IRkkclfKv8DCBEQABoMNjM3NDIzMTgzODA1IgwOd%2BwDZ4WbbGkyn7sq3ANYAcWqAOddcWy1TEIuvMkmCeNIWevkB4TDQdXqUTiUrxRc1pZOlTLeRuiTM3RGAB4XJyk4%2FdiJNOU6%2FOyM6f%2Btfndyo6MIfLnzmKXaWNhhLmShT%2BExiFm9Vv2HhwsgiNBPwx30B5SGAR54yAdXtLMPSHdH%2FCPqVmBTU3caEgs0WcUZeAQ3nkXjZapmG7BrkWDGYD5OhwnE7EUcu3iA3MT3AxfybtzGe%2FMIByhR0kof4hWx8%2FSjem%2Fl8yDdK8heDlqzyOXN7fh4OexIHt9us3l5YO85jge1iem8%2BvWgN9KVRzjMW6%2BZKw8wdPKQlCE55O06J1ewSTzegik5kwAtEOc4MyG%2BbGNavt5lkolXMnnNqA7zLjaeCcAGaT3dJGyWT%2B1tqqcWo%2BfDXe0DtLkzyaFLudDwJsq04R%2BJ3wXbtuqSxzSzccVDV95cW1GlOMbraXbzhAvUV0IAZOYZjDJIu3f9NmbK1SExShhDgE3Zo5kNeuwtvDv5E%2B720CLovEYZWogdyQN2hg%2BVKLywqtWpJO8vYvCA%2BII2gi953SicuiAKXmLKriR%2BN3snaaixX7FqbIlFVB3YuqeEhhKhUDOGNIbLHigpjUKDo%2FCmQifT6%2BVcZkgT5lAKULaRyNLm6DDri6C%2BBjqkAZjRy2TbdpGU7lqrAEZY%2B5EqTt91X7Y%2B%2Fe2vbjQNL2gknqkRWjLsTFQuq6lic85duMnddgHpq8GVBlUq970a7uoof5RjiAexBlpqzz5c5uvaaa6csVccOkBYrBkRAz6vvo0xtIWHdDNhB8YMVrBiCFHaTBKy%2B5BNxecgL3wA7lCgYMuJCPg89jjfeGWPAaR8yk6Sr1o7M%2BA8y%2FBLXXfPO5dDg%2Fwb&X-Amz-Signature=24b611fececf2933b1ac89dad38cc05ec2948251b2ca8f62e243f0a91337e657&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47XWUPU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrlPnl660z3TbLO3xG4LYVdgIJqIylTzFJO3A39RXNQIhAISo4NGXNbzdM%2BFBmttAAb440LietI%2Bi8cED7IRkkclfKv8DCBEQABoMNjM3NDIzMTgzODA1IgwOd%2BwDZ4WbbGkyn7sq3ANYAcWqAOddcWy1TEIuvMkmCeNIWevkB4TDQdXqUTiUrxRc1pZOlTLeRuiTM3RGAB4XJyk4%2FdiJNOU6%2FOyM6f%2Btfndyo6MIfLnzmKXaWNhhLmShT%2BExiFm9Vv2HhwsgiNBPwx30B5SGAR54yAdXtLMPSHdH%2FCPqVmBTU3caEgs0WcUZeAQ3nkXjZapmG7BrkWDGYD5OhwnE7EUcu3iA3MT3AxfybtzGe%2FMIByhR0kof4hWx8%2FSjem%2Fl8yDdK8heDlqzyOXN7fh4OexIHt9us3l5YO85jge1iem8%2BvWgN9KVRzjMW6%2BZKw8wdPKQlCE55O06J1ewSTzegik5kwAtEOc4MyG%2BbGNavt5lkolXMnnNqA7zLjaeCcAGaT3dJGyWT%2B1tqqcWo%2BfDXe0DtLkzyaFLudDwJsq04R%2BJ3wXbtuqSxzSzccVDV95cW1GlOMbraXbzhAvUV0IAZOYZjDJIu3f9NmbK1SExShhDgE3Zo5kNeuwtvDv5E%2B720CLovEYZWogdyQN2hg%2BVKLywqtWpJO8vYvCA%2BII2gi953SicuiAKXmLKriR%2BN3snaaixX7FqbIlFVB3YuqeEhhKhUDOGNIbLHigpjUKDo%2FCmQifT6%2BVcZkgT5lAKULaRyNLm6DDri6C%2BBjqkAZjRy2TbdpGU7lqrAEZY%2B5EqTt91X7Y%2B%2Fe2vbjQNL2gknqkRWjLsTFQuq6lic85duMnddgHpq8GVBlUq970a7uoof5RjiAexBlpqzz5c5uvaaa6csVccOkBYrBkRAz6vvo0xtIWHdDNhB8YMVrBiCFHaTBKy%2B5BNxecgL3wA7lCgYMuJCPg89jjfeGWPAaR8yk6Sr1o7M%2BA8y%2FBLXXfPO5dDg%2Fwb&X-Amz-Signature=beb7c866738cf1319dcf48e00a3c3de8e6f1c388b3fe28810f9632ff747e8da0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
