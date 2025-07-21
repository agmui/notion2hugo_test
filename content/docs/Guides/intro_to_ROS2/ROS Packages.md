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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFEB3OL6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgPq3wKu%2B1HoJsblBWa%2Fz%2Bw%2ByWqgdHlfHQXptDR76CzwIhAK%2FM5nuil5YEyZmdAtpIcVUVGU7z1i6fMH3AJKEBV8uQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOLWa7nhrsqCgW0x8q3ANrojhQITKPhMjpkI55hxskePPgPPQhvMdaXUp34V3QrtuEsZw0f%2BpKVZ5CCGVV9dRv9%2FGYFfJZDZoEXHAKMKna74F0gYc3XsnEM0rey%2FXiVHwK9aQAiHzAPSZIjUYBhLeVhFlravTj5cG535cO4Oi3OPIANoOhXmSb5I8kQ%2BED52AQpuFSYZ7ch6Tal6t%2FWljZkaTXfLjwUp9utvgxZ5ixfGjRzG3r3AY3gTCraQIa9uIV80Q%2FNLTgLfWj8O9sgWcy16y0OabTM545z6FgOXMUN1NZoxHUWdFoLEnd1C9Qnyf8DXxYV8iZgfZTKqS45ehREOZjDQIcvCBnqXkLq5sRrP4SytpO5%2BK9uj6u1fy124N%2BLoZTTUOe8dOzFmitRyrD4O7mSbAeGivScfKPZi%2B7DGBGb1JXd%2FGmEc8ts4H4vczj%2BSPfn02C3eQxdZqUKGT9XJjOLeIKy9RR1Br1XDBGVCcZyT%2BnLX1KDBXJ%2BjG%2FvrjfZz5tIDp%2BDCdcwI%2B%2B8mkx2fL6c1dTIoROJVF55gLXtpcigrgyqJwgLr5xEr5ZG2rFFEIkh%2FnHtMDUOTfXOCSInETkvvcXK1howA51t0Rmo78k8jxhy%2FFKWRV9mBkyCwVe9so6qbWWWpZPXzDykvfDBjqkAWnuv7vnkgJzvTF9xJRlDqOKJogPsfIwxdjPdXpNvfSQrUPoMA0lAlz4uox5GEmb4UVT6LN4LTteUiBVz48pVlkRA1WmRI3APQvGh0a0XVzKWQdR1jIsWDVkluKR%2Bq8xZNSMMqbmeqUSbUbGOawT2eBmyTe%2BhpI3gKrbuckJ8Tf65oBF14zqwJHTg0chtBTF%2F70m4sg6EUBGvMkJRG4%2FFgDROXga&X-Amz-Signature=f2164e6f27adff8b1400d30af926399eba2d3b8570070794f5df00934dcef3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFEB3OL6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgPq3wKu%2B1HoJsblBWa%2Fz%2Bw%2ByWqgdHlfHQXptDR76CzwIhAK%2FM5nuil5YEyZmdAtpIcVUVGU7z1i6fMH3AJKEBV8uQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOLWa7nhrsqCgW0x8q3ANrojhQITKPhMjpkI55hxskePPgPPQhvMdaXUp34V3QrtuEsZw0f%2BpKVZ5CCGVV9dRv9%2FGYFfJZDZoEXHAKMKna74F0gYc3XsnEM0rey%2FXiVHwK9aQAiHzAPSZIjUYBhLeVhFlravTj5cG535cO4Oi3OPIANoOhXmSb5I8kQ%2BED52AQpuFSYZ7ch6Tal6t%2FWljZkaTXfLjwUp9utvgxZ5ixfGjRzG3r3AY3gTCraQIa9uIV80Q%2FNLTgLfWj8O9sgWcy16y0OabTM545z6FgOXMUN1NZoxHUWdFoLEnd1C9Qnyf8DXxYV8iZgfZTKqS45ehREOZjDQIcvCBnqXkLq5sRrP4SytpO5%2BK9uj6u1fy124N%2BLoZTTUOe8dOzFmitRyrD4O7mSbAeGivScfKPZi%2B7DGBGb1JXd%2FGmEc8ts4H4vczj%2BSPfn02C3eQxdZqUKGT9XJjOLeIKy9RR1Br1XDBGVCcZyT%2BnLX1KDBXJ%2BjG%2FvrjfZz5tIDp%2BDCdcwI%2B%2B8mkx2fL6c1dTIoROJVF55gLXtpcigrgyqJwgLr5xEr5ZG2rFFEIkh%2FnHtMDUOTfXOCSInETkvvcXK1howA51t0Rmo78k8jxhy%2FFKWRV9mBkyCwVe9so6qbWWWpZPXzDykvfDBjqkAWnuv7vnkgJzvTF9xJRlDqOKJogPsfIwxdjPdXpNvfSQrUPoMA0lAlz4uox5GEmb4UVT6LN4LTteUiBVz48pVlkRA1WmRI3APQvGh0a0XVzKWQdR1jIsWDVkluKR%2Bq8xZNSMMqbmeqUSbUbGOawT2eBmyTe%2BhpI3gKrbuckJ8Tf65oBF14zqwJHTg0chtBTF%2F70m4sg6EUBGvMkJRG4%2FFgDROXga&X-Amz-Signature=8e09291b2780ffafa761bb1df81e2a1d533a306cc441e766bd5784b859bd28fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFEB3OL6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgPq3wKu%2B1HoJsblBWa%2Fz%2Bw%2ByWqgdHlfHQXptDR76CzwIhAK%2FM5nuil5YEyZmdAtpIcVUVGU7z1i6fMH3AJKEBV8uQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOLWa7nhrsqCgW0x8q3ANrojhQITKPhMjpkI55hxskePPgPPQhvMdaXUp34V3QrtuEsZw0f%2BpKVZ5CCGVV9dRv9%2FGYFfJZDZoEXHAKMKna74F0gYc3XsnEM0rey%2FXiVHwK9aQAiHzAPSZIjUYBhLeVhFlravTj5cG535cO4Oi3OPIANoOhXmSb5I8kQ%2BED52AQpuFSYZ7ch6Tal6t%2FWljZkaTXfLjwUp9utvgxZ5ixfGjRzG3r3AY3gTCraQIa9uIV80Q%2FNLTgLfWj8O9sgWcy16y0OabTM545z6FgOXMUN1NZoxHUWdFoLEnd1C9Qnyf8DXxYV8iZgfZTKqS45ehREOZjDQIcvCBnqXkLq5sRrP4SytpO5%2BK9uj6u1fy124N%2BLoZTTUOe8dOzFmitRyrD4O7mSbAeGivScfKPZi%2B7DGBGb1JXd%2FGmEc8ts4H4vczj%2BSPfn02C3eQxdZqUKGT9XJjOLeIKy9RR1Br1XDBGVCcZyT%2BnLX1KDBXJ%2BjG%2FvrjfZz5tIDp%2BDCdcwI%2B%2B8mkx2fL6c1dTIoROJVF55gLXtpcigrgyqJwgLr5xEr5ZG2rFFEIkh%2FnHtMDUOTfXOCSInETkvvcXK1howA51t0Rmo78k8jxhy%2FFKWRV9mBkyCwVe9so6qbWWWpZPXzDykvfDBjqkAWnuv7vnkgJzvTF9xJRlDqOKJogPsfIwxdjPdXpNvfSQrUPoMA0lAlz4uox5GEmb4UVT6LN4LTteUiBVz48pVlkRA1WmRI3APQvGh0a0XVzKWQdR1jIsWDVkluKR%2Bq8xZNSMMqbmeqUSbUbGOawT2eBmyTe%2BhpI3gKrbuckJ8Tf65oBF14zqwJHTg0chtBTF%2F70m4sg6EUBGvMkJRG4%2FFgDROXga&X-Amz-Signature=b8714b0dba0ddd85d06a6d9bf215a9ea8c74ae0765e141431b3deb20254603e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFEB3OL6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgPq3wKu%2B1HoJsblBWa%2Fz%2Bw%2ByWqgdHlfHQXptDR76CzwIhAK%2FM5nuil5YEyZmdAtpIcVUVGU7z1i6fMH3AJKEBV8uQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOLWa7nhrsqCgW0x8q3ANrojhQITKPhMjpkI55hxskePPgPPQhvMdaXUp34V3QrtuEsZw0f%2BpKVZ5CCGVV9dRv9%2FGYFfJZDZoEXHAKMKna74F0gYc3XsnEM0rey%2FXiVHwK9aQAiHzAPSZIjUYBhLeVhFlravTj5cG535cO4Oi3OPIANoOhXmSb5I8kQ%2BED52AQpuFSYZ7ch6Tal6t%2FWljZkaTXfLjwUp9utvgxZ5ixfGjRzG3r3AY3gTCraQIa9uIV80Q%2FNLTgLfWj8O9sgWcy16y0OabTM545z6FgOXMUN1NZoxHUWdFoLEnd1C9Qnyf8DXxYV8iZgfZTKqS45ehREOZjDQIcvCBnqXkLq5sRrP4SytpO5%2BK9uj6u1fy124N%2BLoZTTUOe8dOzFmitRyrD4O7mSbAeGivScfKPZi%2B7DGBGb1JXd%2FGmEc8ts4H4vczj%2BSPfn02C3eQxdZqUKGT9XJjOLeIKy9RR1Br1XDBGVCcZyT%2BnLX1KDBXJ%2BjG%2FvrjfZz5tIDp%2BDCdcwI%2B%2B8mkx2fL6c1dTIoROJVF55gLXtpcigrgyqJwgLr5xEr5ZG2rFFEIkh%2FnHtMDUOTfXOCSInETkvvcXK1howA51t0Rmo78k8jxhy%2FFKWRV9mBkyCwVe9so6qbWWWpZPXzDykvfDBjqkAWnuv7vnkgJzvTF9xJRlDqOKJogPsfIwxdjPdXpNvfSQrUPoMA0lAlz4uox5GEmb4UVT6LN4LTteUiBVz48pVlkRA1WmRI3APQvGh0a0XVzKWQdR1jIsWDVkluKR%2Bq8xZNSMMqbmeqUSbUbGOawT2eBmyTe%2BhpI3gKrbuckJ8Tf65oBF14zqwJHTg0chtBTF%2F70m4sg6EUBGvMkJRG4%2FFgDROXga&X-Amz-Signature=a3bcffc3f706950adec548b63b4c27edb37bc6da11c6e7b467fb9294d0f7b4ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFEB3OL6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgPq3wKu%2B1HoJsblBWa%2Fz%2Bw%2ByWqgdHlfHQXptDR76CzwIhAK%2FM5nuil5YEyZmdAtpIcVUVGU7z1i6fMH3AJKEBV8uQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOLWa7nhrsqCgW0x8q3ANrojhQITKPhMjpkI55hxskePPgPPQhvMdaXUp34V3QrtuEsZw0f%2BpKVZ5CCGVV9dRv9%2FGYFfJZDZoEXHAKMKna74F0gYc3XsnEM0rey%2FXiVHwK9aQAiHzAPSZIjUYBhLeVhFlravTj5cG535cO4Oi3OPIANoOhXmSb5I8kQ%2BED52AQpuFSYZ7ch6Tal6t%2FWljZkaTXfLjwUp9utvgxZ5ixfGjRzG3r3AY3gTCraQIa9uIV80Q%2FNLTgLfWj8O9sgWcy16y0OabTM545z6FgOXMUN1NZoxHUWdFoLEnd1C9Qnyf8DXxYV8iZgfZTKqS45ehREOZjDQIcvCBnqXkLq5sRrP4SytpO5%2BK9uj6u1fy124N%2BLoZTTUOe8dOzFmitRyrD4O7mSbAeGivScfKPZi%2B7DGBGb1JXd%2FGmEc8ts4H4vczj%2BSPfn02C3eQxdZqUKGT9XJjOLeIKy9RR1Br1XDBGVCcZyT%2BnLX1KDBXJ%2BjG%2FvrjfZz5tIDp%2BDCdcwI%2B%2B8mkx2fL6c1dTIoROJVF55gLXtpcigrgyqJwgLr5xEr5ZG2rFFEIkh%2FnHtMDUOTfXOCSInETkvvcXK1howA51t0Rmo78k8jxhy%2FFKWRV9mBkyCwVe9so6qbWWWpZPXzDykvfDBjqkAWnuv7vnkgJzvTF9xJRlDqOKJogPsfIwxdjPdXpNvfSQrUPoMA0lAlz4uox5GEmb4UVT6LN4LTteUiBVz48pVlkRA1WmRI3APQvGh0a0XVzKWQdR1jIsWDVkluKR%2Bq8xZNSMMqbmeqUSbUbGOawT2eBmyTe%2BhpI3gKrbuckJ8Tf65oBF14zqwJHTg0chtBTF%2F70m4sg6EUBGvMkJRG4%2FFgDROXga&X-Amz-Signature=6540053375eedfd40740d76dbfb0c0afab40c7a1b2832a9543c29c902a7c0d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFEB3OL6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgPq3wKu%2B1HoJsblBWa%2Fz%2Bw%2ByWqgdHlfHQXptDR76CzwIhAK%2FM5nuil5YEyZmdAtpIcVUVGU7z1i6fMH3AJKEBV8uQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOLWa7nhrsqCgW0x8q3ANrojhQITKPhMjpkI55hxskePPgPPQhvMdaXUp34V3QrtuEsZw0f%2BpKVZ5CCGVV9dRv9%2FGYFfJZDZoEXHAKMKna74F0gYc3XsnEM0rey%2FXiVHwK9aQAiHzAPSZIjUYBhLeVhFlravTj5cG535cO4Oi3OPIANoOhXmSb5I8kQ%2BED52AQpuFSYZ7ch6Tal6t%2FWljZkaTXfLjwUp9utvgxZ5ixfGjRzG3r3AY3gTCraQIa9uIV80Q%2FNLTgLfWj8O9sgWcy16y0OabTM545z6FgOXMUN1NZoxHUWdFoLEnd1C9Qnyf8DXxYV8iZgfZTKqS45ehREOZjDQIcvCBnqXkLq5sRrP4SytpO5%2BK9uj6u1fy124N%2BLoZTTUOe8dOzFmitRyrD4O7mSbAeGivScfKPZi%2B7DGBGb1JXd%2FGmEc8ts4H4vczj%2BSPfn02C3eQxdZqUKGT9XJjOLeIKy9RR1Br1XDBGVCcZyT%2BnLX1KDBXJ%2BjG%2FvrjfZz5tIDp%2BDCdcwI%2B%2B8mkx2fL6c1dTIoROJVF55gLXtpcigrgyqJwgLr5xEr5ZG2rFFEIkh%2FnHtMDUOTfXOCSInETkvvcXK1howA51t0Rmo78k8jxhy%2FFKWRV9mBkyCwVe9so6qbWWWpZPXzDykvfDBjqkAWnuv7vnkgJzvTF9xJRlDqOKJogPsfIwxdjPdXpNvfSQrUPoMA0lAlz4uox5GEmb4UVT6LN4LTteUiBVz48pVlkRA1WmRI3APQvGh0a0XVzKWQdR1jIsWDVkluKR%2Bq8xZNSMMqbmeqUSbUbGOawT2eBmyTe%2BhpI3gKrbuckJ8Tf65oBF14zqwJHTg0chtBTF%2F70m4sg6EUBGvMkJRG4%2FFgDROXga&X-Amz-Signature=e6fc80f5a4013136e0780b041f7d4f347277521d7975219f1ef9b1dc8f68ed40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFEB3OL6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgPq3wKu%2B1HoJsblBWa%2Fz%2Bw%2ByWqgdHlfHQXptDR76CzwIhAK%2FM5nuil5YEyZmdAtpIcVUVGU7z1i6fMH3AJKEBV8uQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOLWa7nhrsqCgW0x8q3ANrojhQITKPhMjpkI55hxskePPgPPQhvMdaXUp34V3QrtuEsZw0f%2BpKVZ5CCGVV9dRv9%2FGYFfJZDZoEXHAKMKna74F0gYc3XsnEM0rey%2FXiVHwK9aQAiHzAPSZIjUYBhLeVhFlravTj5cG535cO4Oi3OPIANoOhXmSb5I8kQ%2BED52AQpuFSYZ7ch6Tal6t%2FWljZkaTXfLjwUp9utvgxZ5ixfGjRzG3r3AY3gTCraQIa9uIV80Q%2FNLTgLfWj8O9sgWcy16y0OabTM545z6FgOXMUN1NZoxHUWdFoLEnd1C9Qnyf8DXxYV8iZgfZTKqS45ehREOZjDQIcvCBnqXkLq5sRrP4SytpO5%2BK9uj6u1fy124N%2BLoZTTUOe8dOzFmitRyrD4O7mSbAeGivScfKPZi%2B7DGBGb1JXd%2FGmEc8ts4H4vczj%2BSPfn02C3eQxdZqUKGT9XJjOLeIKy9RR1Br1XDBGVCcZyT%2BnLX1KDBXJ%2BjG%2FvrjfZz5tIDp%2BDCdcwI%2B%2B8mkx2fL6c1dTIoROJVF55gLXtpcigrgyqJwgLr5xEr5ZG2rFFEIkh%2FnHtMDUOTfXOCSInETkvvcXK1howA51t0Rmo78k8jxhy%2FFKWRV9mBkyCwVe9so6qbWWWpZPXzDykvfDBjqkAWnuv7vnkgJzvTF9xJRlDqOKJogPsfIwxdjPdXpNvfSQrUPoMA0lAlz4uox5GEmb4UVT6LN4LTteUiBVz48pVlkRA1WmRI3APQvGh0a0XVzKWQdR1jIsWDVkluKR%2Bq8xZNSMMqbmeqUSbUbGOawT2eBmyTe%2BhpI3gKrbuckJ8Tf65oBF14zqwJHTg0chtBTF%2F70m4sg6EUBGvMkJRG4%2FFgDROXga&X-Amz-Signature=b71f19e1bb69490374b4fdd4e4c20a9e0b25db632836b57eee776aef70b9c99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
