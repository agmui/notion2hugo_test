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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QPVXFT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFer2vxeVT41rh3mJmJaf1tl5qJpgewMWe2uLLGdVczVAiBVpEH1j3PveSh%2BiIJe2VgE71AkyVsnRcV7f%2Frp4mypyyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhd4hCpJXCafUCF9qKtwDAQ6K%2FbAhaix4dg6BXcXrqAZYFbD6bni78%2B7hWjWbN1E6dTxFyBM43GTeUdqMkFSXRjFzXth7LgT6o6wP96P0X99y0tbPKPJ0hHVLn74JHWl1U6zv%2F1TSNHBecwy51Q2PC8pf8qxxK0kKe2lk5m5jX7Le895JWQnTaL54ai8kh4L1C9KLjZRPON8iqljVjO27Rwi5MfbHPfJcvWpPmnCNN0EbuCriG96BUf6wLtBcMwr%2FJtKrkC%2B7ydEV8h8k%2F0tnGvB6PG9fQEdK7UarEYJU%2BzhGpRyggidmT93x30rLF6vZwvZHsiTUNY3AFqAHcX0YI6t7wp01%2FWyunX%2FNE1MgvbXHA%2FKHz5IUNVSbApqVhBzAkkklBynaNSt3T06BoGc4sQAOCacUtrGxgF%2Fnhho%2FDaJ1zYn8Z2aFVrXFxxXQ3t29yL5ci72pUVTen%2FyDOSjUDwANsG9J08rucv1Qjoq8YD3NCEjYz9IsPYucZxb843yhXHc57SyuIx5cG0xP77WBIUPZGOxmadqGa7U1Ga5UmOwy2k%2F4yWSB8JGxAndk2HcvZMIc2R2x8SZhgYeDRGHTLMwYU9slp2tSQUWEgYyvOZ8eU%2FemI6QStLgi6d62Q9B429JJ8uGDhDB3dnAwqc66vwY6pgGvHBZxkzrBzHJKYROyU1FAsfU7bw9hzLUpPrd7Vug8lzrsANXfy%2FbC8CtYhKPS4b9Ob7Sc%2F6ovt3ZAdDnFGi8kaPN6Yf7NHQW10sBjWhHZUlyo64k%2FtS2xptekoMESUbm%2BpJrpgKmKR7FhyURbz%2F%2BKI3ichU02aboMOz9KldI10V3DLbANL8tXk4KzXpKBTVAFTajLPPZKQxM8wvEqmRPX4ZNdJYAg&X-Amz-Signature=4e1a8b7766e72ee1532d769190db0828d38548b80d48c7884b62db3fe09aa77e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QPVXFT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFer2vxeVT41rh3mJmJaf1tl5qJpgewMWe2uLLGdVczVAiBVpEH1j3PveSh%2BiIJe2VgE71AkyVsnRcV7f%2Frp4mypyyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhd4hCpJXCafUCF9qKtwDAQ6K%2FbAhaix4dg6BXcXrqAZYFbD6bni78%2B7hWjWbN1E6dTxFyBM43GTeUdqMkFSXRjFzXth7LgT6o6wP96P0X99y0tbPKPJ0hHVLn74JHWl1U6zv%2F1TSNHBecwy51Q2PC8pf8qxxK0kKe2lk5m5jX7Le895JWQnTaL54ai8kh4L1C9KLjZRPON8iqljVjO27Rwi5MfbHPfJcvWpPmnCNN0EbuCriG96BUf6wLtBcMwr%2FJtKrkC%2B7ydEV8h8k%2F0tnGvB6PG9fQEdK7UarEYJU%2BzhGpRyggidmT93x30rLF6vZwvZHsiTUNY3AFqAHcX0YI6t7wp01%2FWyunX%2FNE1MgvbXHA%2FKHz5IUNVSbApqVhBzAkkklBynaNSt3T06BoGc4sQAOCacUtrGxgF%2Fnhho%2FDaJ1zYn8Z2aFVrXFxxXQ3t29yL5ci72pUVTen%2FyDOSjUDwANsG9J08rucv1Qjoq8YD3NCEjYz9IsPYucZxb843yhXHc57SyuIx5cG0xP77WBIUPZGOxmadqGa7U1Ga5UmOwy2k%2F4yWSB8JGxAndk2HcvZMIc2R2x8SZhgYeDRGHTLMwYU9slp2tSQUWEgYyvOZ8eU%2FemI6QStLgi6d62Q9B429JJ8uGDhDB3dnAwqc66vwY6pgGvHBZxkzrBzHJKYROyU1FAsfU7bw9hzLUpPrd7Vug8lzrsANXfy%2FbC8CtYhKPS4b9Ob7Sc%2F6ovt3ZAdDnFGi8kaPN6Yf7NHQW10sBjWhHZUlyo64k%2FtS2xptekoMESUbm%2BpJrpgKmKR7FhyURbz%2F%2BKI3ichU02aboMOz9KldI10V3DLbANL8tXk4KzXpKBTVAFTajLPPZKQxM8wvEqmRPX4ZNdJYAg&X-Amz-Signature=b83bdc6f10d4f282eb89feaa9416d471f6a4d12b69fac9a2cab506be0381b591&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QPVXFT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFer2vxeVT41rh3mJmJaf1tl5qJpgewMWe2uLLGdVczVAiBVpEH1j3PveSh%2BiIJe2VgE71AkyVsnRcV7f%2Frp4mypyyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhd4hCpJXCafUCF9qKtwDAQ6K%2FbAhaix4dg6BXcXrqAZYFbD6bni78%2B7hWjWbN1E6dTxFyBM43GTeUdqMkFSXRjFzXth7LgT6o6wP96P0X99y0tbPKPJ0hHVLn74JHWl1U6zv%2F1TSNHBecwy51Q2PC8pf8qxxK0kKe2lk5m5jX7Le895JWQnTaL54ai8kh4L1C9KLjZRPON8iqljVjO27Rwi5MfbHPfJcvWpPmnCNN0EbuCriG96BUf6wLtBcMwr%2FJtKrkC%2B7ydEV8h8k%2F0tnGvB6PG9fQEdK7UarEYJU%2BzhGpRyggidmT93x30rLF6vZwvZHsiTUNY3AFqAHcX0YI6t7wp01%2FWyunX%2FNE1MgvbXHA%2FKHz5IUNVSbApqVhBzAkkklBynaNSt3T06BoGc4sQAOCacUtrGxgF%2Fnhho%2FDaJ1zYn8Z2aFVrXFxxXQ3t29yL5ci72pUVTen%2FyDOSjUDwANsG9J08rucv1Qjoq8YD3NCEjYz9IsPYucZxb843yhXHc57SyuIx5cG0xP77WBIUPZGOxmadqGa7U1Ga5UmOwy2k%2F4yWSB8JGxAndk2HcvZMIc2R2x8SZhgYeDRGHTLMwYU9slp2tSQUWEgYyvOZ8eU%2FemI6QStLgi6d62Q9B429JJ8uGDhDB3dnAwqc66vwY6pgGvHBZxkzrBzHJKYROyU1FAsfU7bw9hzLUpPrd7Vug8lzrsANXfy%2FbC8CtYhKPS4b9Ob7Sc%2F6ovt3ZAdDnFGi8kaPN6Yf7NHQW10sBjWhHZUlyo64k%2FtS2xptekoMESUbm%2BpJrpgKmKR7FhyURbz%2F%2BKI3ichU02aboMOz9KldI10V3DLbANL8tXk4KzXpKBTVAFTajLPPZKQxM8wvEqmRPX4ZNdJYAg&X-Amz-Signature=8b8ac72b87b0c127c0bec67a371004371a573ff1cc12f8b3d2f9120be2474efc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QPVXFT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFer2vxeVT41rh3mJmJaf1tl5qJpgewMWe2uLLGdVczVAiBVpEH1j3PveSh%2BiIJe2VgE71AkyVsnRcV7f%2Frp4mypyyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhd4hCpJXCafUCF9qKtwDAQ6K%2FbAhaix4dg6BXcXrqAZYFbD6bni78%2B7hWjWbN1E6dTxFyBM43GTeUdqMkFSXRjFzXth7LgT6o6wP96P0X99y0tbPKPJ0hHVLn74JHWl1U6zv%2F1TSNHBecwy51Q2PC8pf8qxxK0kKe2lk5m5jX7Le895JWQnTaL54ai8kh4L1C9KLjZRPON8iqljVjO27Rwi5MfbHPfJcvWpPmnCNN0EbuCriG96BUf6wLtBcMwr%2FJtKrkC%2B7ydEV8h8k%2F0tnGvB6PG9fQEdK7UarEYJU%2BzhGpRyggidmT93x30rLF6vZwvZHsiTUNY3AFqAHcX0YI6t7wp01%2FWyunX%2FNE1MgvbXHA%2FKHz5IUNVSbApqVhBzAkkklBynaNSt3T06BoGc4sQAOCacUtrGxgF%2Fnhho%2FDaJ1zYn8Z2aFVrXFxxXQ3t29yL5ci72pUVTen%2FyDOSjUDwANsG9J08rucv1Qjoq8YD3NCEjYz9IsPYucZxb843yhXHc57SyuIx5cG0xP77WBIUPZGOxmadqGa7U1Ga5UmOwy2k%2F4yWSB8JGxAndk2HcvZMIc2R2x8SZhgYeDRGHTLMwYU9slp2tSQUWEgYyvOZ8eU%2FemI6QStLgi6d62Q9B429JJ8uGDhDB3dnAwqc66vwY6pgGvHBZxkzrBzHJKYROyU1FAsfU7bw9hzLUpPrd7Vug8lzrsANXfy%2FbC8CtYhKPS4b9Ob7Sc%2F6ovt3ZAdDnFGi8kaPN6Yf7NHQW10sBjWhHZUlyo64k%2FtS2xptekoMESUbm%2BpJrpgKmKR7FhyURbz%2F%2BKI3ichU02aboMOz9KldI10V3DLbANL8tXk4KzXpKBTVAFTajLPPZKQxM8wvEqmRPX4ZNdJYAg&X-Amz-Signature=6bf204134e8e7dda988f4e1bacecd1a33d3f73ab77d0c3198abfece331e27f55&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QPVXFT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFer2vxeVT41rh3mJmJaf1tl5qJpgewMWe2uLLGdVczVAiBVpEH1j3PveSh%2BiIJe2VgE71AkyVsnRcV7f%2Frp4mypyyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhd4hCpJXCafUCF9qKtwDAQ6K%2FbAhaix4dg6BXcXrqAZYFbD6bni78%2B7hWjWbN1E6dTxFyBM43GTeUdqMkFSXRjFzXth7LgT6o6wP96P0X99y0tbPKPJ0hHVLn74JHWl1U6zv%2F1TSNHBecwy51Q2PC8pf8qxxK0kKe2lk5m5jX7Le895JWQnTaL54ai8kh4L1C9KLjZRPON8iqljVjO27Rwi5MfbHPfJcvWpPmnCNN0EbuCriG96BUf6wLtBcMwr%2FJtKrkC%2B7ydEV8h8k%2F0tnGvB6PG9fQEdK7UarEYJU%2BzhGpRyggidmT93x30rLF6vZwvZHsiTUNY3AFqAHcX0YI6t7wp01%2FWyunX%2FNE1MgvbXHA%2FKHz5IUNVSbApqVhBzAkkklBynaNSt3T06BoGc4sQAOCacUtrGxgF%2Fnhho%2FDaJ1zYn8Z2aFVrXFxxXQ3t29yL5ci72pUVTen%2FyDOSjUDwANsG9J08rucv1Qjoq8YD3NCEjYz9IsPYucZxb843yhXHc57SyuIx5cG0xP77WBIUPZGOxmadqGa7U1Ga5UmOwy2k%2F4yWSB8JGxAndk2HcvZMIc2R2x8SZhgYeDRGHTLMwYU9slp2tSQUWEgYyvOZ8eU%2FemI6QStLgi6d62Q9B429JJ8uGDhDB3dnAwqc66vwY6pgGvHBZxkzrBzHJKYROyU1FAsfU7bw9hzLUpPrd7Vug8lzrsANXfy%2FbC8CtYhKPS4b9Ob7Sc%2F6ovt3ZAdDnFGi8kaPN6Yf7NHQW10sBjWhHZUlyo64k%2FtS2xptekoMESUbm%2BpJrpgKmKR7FhyURbz%2F%2BKI3ichU02aboMOz9KldI10V3DLbANL8tXk4KzXpKBTVAFTajLPPZKQxM8wvEqmRPX4ZNdJYAg&X-Amz-Signature=9d9af39d7fa0589041692a47a800cbff981a197491a5ca5edc7805cef1b70d46&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QPVXFT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFer2vxeVT41rh3mJmJaf1tl5qJpgewMWe2uLLGdVczVAiBVpEH1j3PveSh%2BiIJe2VgE71AkyVsnRcV7f%2Frp4mypyyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhd4hCpJXCafUCF9qKtwDAQ6K%2FbAhaix4dg6BXcXrqAZYFbD6bni78%2B7hWjWbN1E6dTxFyBM43GTeUdqMkFSXRjFzXth7LgT6o6wP96P0X99y0tbPKPJ0hHVLn74JHWl1U6zv%2F1TSNHBecwy51Q2PC8pf8qxxK0kKe2lk5m5jX7Le895JWQnTaL54ai8kh4L1C9KLjZRPON8iqljVjO27Rwi5MfbHPfJcvWpPmnCNN0EbuCriG96BUf6wLtBcMwr%2FJtKrkC%2B7ydEV8h8k%2F0tnGvB6PG9fQEdK7UarEYJU%2BzhGpRyggidmT93x30rLF6vZwvZHsiTUNY3AFqAHcX0YI6t7wp01%2FWyunX%2FNE1MgvbXHA%2FKHz5IUNVSbApqVhBzAkkklBynaNSt3T06BoGc4sQAOCacUtrGxgF%2Fnhho%2FDaJ1zYn8Z2aFVrXFxxXQ3t29yL5ci72pUVTen%2FyDOSjUDwANsG9J08rucv1Qjoq8YD3NCEjYz9IsPYucZxb843yhXHc57SyuIx5cG0xP77WBIUPZGOxmadqGa7U1Ga5UmOwy2k%2F4yWSB8JGxAndk2HcvZMIc2R2x8SZhgYeDRGHTLMwYU9slp2tSQUWEgYyvOZ8eU%2FemI6QStLgi6d62Q9B429JJ8uGDhDB3dnAwqc66vwY6pgGvHBZxkzrBzHJKYROyU1FAsfU7bw9hzLUpPrd7Vug8lzrsANXfy%2FbC8CtYhKPS4b9Ob7Sc%2F6ovt3ZAdDnFGi8kaPN6Yf7NHQW10sBjWhHZUlyo64k%2FtS2xptekoMESUbm%2BpJrpgKmKR7FhyURbz%2F%2BKI3ichU02aboMOz9KldI10V3DLbANL8tXk4KzXpKBTVAFTajLPPZKQxM8wvEqmRPX4ZNdJYAg&X-Amz-Signature=0c0b841ca7b59923193cc8f91334b9ef1b9c0fad2edfd2eefb339ee68a37136b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QPVXFT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFer2vxeVT41rh3mJmJaf1tl5qJpgewMWe2uLLGdVczVAiBVpEH1j3PveSh%2BiIJe2VgE71AkyVsnRcV7f%2Frp4mypyyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhd4hCpJXCafUCF9qKtwDAQ6K%2FbAhaix4dg6BXcXrqAZYFbD6bni78%2B7hWjWbN1E6dTxFyBM43GTeUdqMkFSXRjFzXth7LgT6o6wP96P0X99y0tbPKPJ0hHVLn74JHWl1U6zv%2F1TSNHBecwy51Q2PC8pf8qxxK0kKe2lk5m5jX7Le895JWQnTaL54ai8kh4L1C9KLjZRPON8iqljVjO27Rwi5MfbHPfJcvWpPmnCNN0EbuCriG96BUf6wLtBcMwr%2FJtKrkC%2B7ydEV8h8k%2F0tnGvB6PG9fQEdK7UarEYJU%2BzhGpRyggidmT93x30rLF6vZwvZHsiTUNY3AFqAHcX0YI6t7wp01%2FWyunX%2FNE1MgvbXHA%2FKHz5IUNVSbApqVhBzAkkklBynaNSt3T06BoGc4sQAOCacUtrGxgF%2Fnhho%2FDaJ1zYn8Z2aFVrXFxxXQ3t29yL5ci72pUVTen%2FyDOSjUDwANsG9J08rucv1Qjoq8YD3NCEjYz9IsPYucZxb843yhXHc57SyuIx5cG0xP77WBIUPZGOxmadqGa7U1Ga5UmOwy2k%2F4yWSB8JGxAndk2HcvZMIc2R2x8SZhgYeDRGHTLMwYU9slp2tSQUWEgYyvOZ8eU%2FemI6QStLgi6d62Q9B429JJ8uGDhDB3dnAwqc66vwY6pgGvHBZxkzrBzHJKYROyU1FAsfU7bw9hzLUpPrd7Vug8lzrsANXfy%2FbC8CtYhKPS4b9Ob7Sc%2F6ovt3ZAdDnFGi8kaPN6Yf7NHQW10sBjWhHZUlyo64k%2FtS2xptekoMESUbm%2BpJrpgKmKR7FhyURbz%2F%2BKI3ichU02aboMOz9KldI10V3DLbANL8tXk4KzXpKBTVAFTajLPPZKQxM8wvEqmRPX4ZNdJYAg&X-Amz-Signature=7f1705389a5aadd88bad86576e350aa23fb75f466a268d306e899bb13cb7e46d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
