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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQW4737%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHhdsiN6FOaksU5l8O3gjO3kqO67t2I82TBfxM5WX3joAiAxiRnc0Cc2YSTktoM34qEO5ahUrNfTGnlWH7dS4fisDCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU2YTIBUbmxi%2FdhIuKtwDd0XxDR4S3G%2FLHVg48y%2BKiH9sXlD6tgjnn2mVZOBqWnPF3%2FP4ZbNyK9us9PJvD7IhJFWdLpnZWJGD8LE%2Fe1OTmnhhvmL3jAi0Aw%2FPqjSXkZz25zJ6%2F%2FCtPqNqVDDKrtMFrHolhVQgrwwBQMhHOS0I5qH4%2F3uSRrvxMzdYMmXaARUkRZOTBQsBw7mW1dh%2B8bldKGSH%2BS0bSSEpNoq22yhFsDSX8g%2F7%2BB3zLN9EB7oX5hLjrcp6eof0IA2iFY2xhXDUXKSoYSifVqSQEp46bJWhB2OIhLiBc9k%2BvcXgiFZ4rC4banRt5fK0nzqPtoTKm4O77aRxqZbZIUrTwW9NxYsOFmv4I4pIQxdIEjtKTwM2Yz38lAGp1udiYyuNDU3MZRRjT0rnmzqvINoRcNrEn32w0ayj4%2BBQ%2BvKbwicWWLBe%2FZSe9g7aoboWo3ZpvqLlhRqQBrj3W6hz%2FdKbIE4G%2BzOwcz0xPdwtqpYKDFZCjcsEkbrSGl7KApC5w9Ls%2FXr1hfEwHK02wsP9aB3qys9JHtM4rVEMy2PbtuC5NtzGuA3Jpt7KNzS7f04jso7mHAqGWuRWWT4ji1tFYJeSkeDGIiVbzOgmuNALQdcQtUJFpsIA8HMCZONGWQ9ocAEUJwQw8N7XwAY6pgHrQXGh8%2F84hcjYhVOR6OE70ua5mR%2FofMhNpZ9Yd20O5HsJCG59TTV0GdSNGJktspLHZe5xtYkhhas6%2BfCNEz4fydQRaKVeuzbgLhSt5qUcPHQVF1OTx%2F%2Fb7s658Zrf6JxJX8l9p72A5%2FdT40yHnQSJKayWeJPyNplQu2f4DuuRiLTVMKQuKnngAb3OF52mQJDb0khexdcBN6fofL3Geuq3MYVNI4ot&X-Amz-Signature=b0f57e1db42466d4a39c8c4f74411fdd74de1c62afb416ff974215374ba0443b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQW4737%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHhdsiN6FOaksU5l8O3gjO3kqO67t2I82TBfxM5WX3joAiAxiRnc0Cc2YSTktoM34qEO5ahUrNfTGnlWH7dS4fisDCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU2YTIBUbmxi%2FdhIuKtwDd0XxDR4S3G%2FLHVg48y%2BKiH9sXlD6tgjnn2mVZOBqWnPF3%2FP4ZbNyK9us9PJvD7IhJFWdLpnZWJGD8LE%2Fe1OTmnhhvmL3jAi0Aw%2FPqjSXkZz25zJ6%2F%2FCtPqNqVDDKrtMFrHolhVQgrwwBQMhHOS0I5qH4%2F3uSRrvxMzdYMmXaARUkRZOTBQsBw7mW1dh%2B8bldKGSH%2BS0bSSEpNoq22yhFsDSX8g%2F7%2BB3zLN9EB7oX5hLjrcp6eof0IA2iFY2xhXDUXKSoYSifVqSQEp46bJWhB2OIhLiBc9k%2BvcXgiFZ4rC4banRt5fK0nzqPtoTKm4O77aRxqZbZIUrTwW9NxYsOFmv4I4pIQxdIEjtKTwM2Yz38lAGp1udiYyuNDU3MZRRjT0rnmzqvINoRcNrEn32w0ayj4%2BBQ%2BvKbwicWWLBe%2FZSe9g7aoboWo3ZpvqLlhRqQBrj3W6hz%2FdKbIE4G%2BzOwcz0xPdwtqpYKDFZCjcsEkbrSGl7KApC5w9Ls%2FXr1hfEwHK02wsP9aB3qys9JHtM4rVEMy2PbtuC5NtzGuA3Jpt7KNzS7f04jso7mHAqGWuRWWT4ji1tFYJeSkeDGIiVbzOgmuNALQdcQtUJFpsIA8HMCZONGWQ9ocAEUJwQw8N7XwAY6pgHrQXGh8%2F84hcjYhVOR6OE70ua5mR%2FofMhNpZ9Yd20O5HsJCG59TTV0GdSNGJktspLHZe5xtYkhhas6%2BfCNEz4fydQRaKVeuzbgLhSt5qUcPHQVF1OTx%2F%2Fb7s658Zrf6JxJX8l9p72A5%2FdT40yHnQSJKayWeJPyNplQu2f4DuuRiLTVMKQuKnngAb3OF52mQJDb0khexdcBN6fofL3Geuq3MYVNI4ot&X-Amz-Signature=c0ffcba42e1e8c364f2c8d9c2ebb759931ad80bdd9b9c1d9f7b2154c1cb98860&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQW4737%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHhdsiN6FOaksU5l8O3gjO3kqO67t2I82TBfxM5WX3joAiAxiRnc0Cc2YSTktoM34qEO5ahUrNfTGnlWH7dS4fisDCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU2YTIBUbmxi%2FdhIuKtwDd0XxDR4S3G%2FLHVg48y%2BKiH9sXlD6tgjnn2mVZOBqWnPF3%2FP4ZbNyK9us9PJvD7IhJFWdLpnZWJGD8LE%2Fe1OTmnhhvmL3jAi0Aw%2FPqjSXkZz25zJ6%2F%2FCtPqNqVDDKrtMFrHolhVQgrwwBQMhHOS0I5qH4%2F3uSRrvxMzdYMmXaARUkRZOTBQsBw7mW1dh%2B8bldKGSH%2BS0bSSEpNoq22yhFsDSX8g%2F7%2BB3zLN9EB7oX5hLjrcp6eof0IA2iFY2xhXDUXKSoYSifVqSQEp46bJWhB2OIhLiBc9k%2BvcXgiFZ4rC4banRt5fK0nzqPtoTKm4O77aRxqZbZIUrTwW9NxYsOFmv4I4pIQxdIEjtKTwM2Yz38lAGp1udiYyuNDU3MZRRjT0rnmzqvINoRcNrEn32w0ayj4%2BBQ%2BvKbwicWWLBe%2FZSe9g7aoboWo3ZpvqLlhRqQBrj3W6hz%2FdKbIE4G%2BzOwcz0xPdwtqpYKDFZCjcsEkbrSGl7KApC5w9Ls%2FXr1hfEwHK02wsP9aB3qys9JHtM4rVEMy2PbtuC5NtzGuA3Jpt7KNzS7f04jso7mHAqGWuRWWT4ji1tFYJeSkeDGIiVbzOgmuNALQdcQtUJFpsIA8HMCZONGWQ9ocAEUJwQw8N7XwAY6pgHrQXGh8%2F84hcjYhVOR6OE70ua5mR%2FofMhNpZ9Yd20O5HsJCG59TTV0GdSNGJktspLHZe5xtYkhhas6%2BfCNEz4fydQRaKVeuzbgLhSt5qUcPHQVF1OTx%2F%2Fb7s658Zrf6JxJX8l9p72A5%2FdT40yHnQSJKayWeJPyNplQu2f4DuuRiLTVMKQuKnngAb3OF52mQJDb0khexdcBN6fofL3Geuq3MYVNI4ot&X-Amz-Signature=fbbb1715df1b8c710bca790c860864e5b802bbd092dbc027c0e92fd2510b42a7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQW4737%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHhdsiN6FOaksU5l8O3gjO3kqO67t2I82TBfxM5WX3joAiAxiRnc0Cc2YSTktoM34qEO5ahUrNfTGnlWH7dS4fisDCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU2YTIBUbmxi%2FdhIuKtwDd0XxDR4S3G%2FLHVg48y%2BKiH9sXlD6tgjnn2mVZOBqWnPF3%2FP4ZbNyK9us9PJvD7IhJFWdLpnZWJGD8LE%2Fe1OTmnhhvmL3jAi0Aw%2FPqjSXkZz25zJ6%2F%2FCtPqNqVDDKrtMFrHolhVQgrwwBQMhHOS0I5qH4%2F3uSRrvxMzdYMmXaARUkRZOTBQsBw7mW1dh%2B8bldKGSH%2BS0bSSEpNoq22yhFsDSX8g%2F7%2BB3zLN9EB7oX5hLjrcp6eof0IA2iFY2xhXDUXKSoYSifVqSQEp46bJWhB2OIhLiBc9k%2BvcXgiFZ4rC4banRt5fK0nzqPtoTKm4O77aRxqZbZIUrTwW9NxYsOFmv4I4pIQxdIEjtKTwM2Yz38lAGp1udiYyuNDU3MZRRjT0rnmzqvINoRcNrEn32w0ayj4%2BBQ%2BvKbwicWWLBe%2FZSe9g7aoboWo3ZpvqLlhRqQBrj3W6hz%2FdKbIE4G%2BzOwcz0xPdwtqpYKDFZCjcsEkbrSGl7KApC5w9Ls%2FXr1hfEwHK02wsP9aB3qys9JHtM4rVEMy2PbtuC5NtzGuA3Jpt7KNzS7f04jso7mHAqGWuRWWT4ji1tFYJeSkeDGIiVbzOgmuNALQdcQtUJFpsIA8HMCZONGWQ9ocAEUJwQw8N7XwAY6pgHrQXGh8%2F84hcjYhVOR6OE70ua5mR%2FofMhNpZ9Yd20O5HsJCG59TTV0GdSNGJktspLHZe5xtYkhhas6%2BfCNEz4fydQRaKVeuzbgLhSt5qUcPHQVF1OTx%2F%2Fb7s658Zrf6JxJX8l9p72A5%2FdT40yHnQSJKayWeJPyNplQu2f4DuuRiLTVMKQuKnngAb3OF52mQJDb0khexdcBN6fofL3Geuq3MYVNI4ot&X-Amz-Signature=94da23232137f286d3096a6e0b78c28142b90d4f789772e8ab2c845c804f2344&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQW4737%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHhdsiN6FOaksU5l8O3gjO3kqO67t2I82TBfxM5WX3joAiAxiRnc0Cc2YSTktoM34qEO5ahUrNfTGnlWH7dS4fisDCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU2YTIBUbmxi%2FdhIuKtwDd0XxDR4S3G%2FLHVg48y%2BKiH9sXlD6tgjnn2mVZOBqWnPF3%2FP4ZbNyK9us9PJvD7IhJFWdLpnZWJGD8LE%2Fe1OTmnhhvmL3jAi0Aw%2FPqjSXkZz25zJ6%2F%2FCtPqNqVDDKrtMFrHolhVQgrwwBQMhHOS0I5qH4%2F3uSRrvxMzdYMmXaARUkRZOTBQsBw7mW1dh%2B8bldKGSH%2BS0bSSEpNoq22yhFsDSX8g%2F7%2BB3zLN9EB7oX5hLjrcp6eof0IA2iFY2xhXDUXKSoYSifVqSQEp46bJWhB2OIhLiBc9k%2BvcXgiFZ4rC4banRt5fK0nzqPtoTKm4O77aRxqZbZIUrTwW9NxYsOFmv4I4pIQxdIEjtKTwM2Yz38lAGp1udiYyuNDU3MZRRjT0rnmzqvINoRcNrEn32w0ayj4%2BBQ%2BvKbwicWWLBe%2FZSe9g7aoboWo3ZpvqLlhRqQBrj3W6hz%2FdKbIE4G%2BzOwcz0xPdwtqpYKDFZCjcsEkbrSGl7KApC5w9Ls%2FXr1hfEwHK02wsP9aB3qys9JHtM4rVEMy2PbtuC5NtzGuA3Jpt7KNzS7f04jso7mHAqGWuRWWT4ji1tFYJeSkeDGIiVbzOgmuNALQdcQtUJFpsIA8HMCZONGWQ9ocAEUJwQw8N7XwAY6pgHrQXGh8%2F84hcjYhVOR6OE70ua5mR%2FofMhNpZ9Yd20O5HsJCG59TTV0GdSNGJktspLHZe5xtYkhhas6%2BfCNEz4fydQRaKVeuzbgLhSt5qUcPHQVF1OTx%2F%2Fb7s658Zrf6JxJX8l9p72A5%2FdT40yHnQSJKayWeJPyNplQu2f4DuuRiLTVMKQuKnngAb3OF52mQJDb0khexdcBN6fofL3Geuq3MYVNI4ot&X-Amz-Signature=b98913c6c492c722048cb4a112fbc68575223a5b3f3af4cf005fed4f7855bb11&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQW4737%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHhdsiN6FOaksU5l8O3gjO3kqO67t2I82TBfxM5WX3joAiAxiRnc0Cc2YSTktoM34qEO5ahUrNfTGnlWH7dS4fisDCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU2YTIBUbmxi%2FdhIuKtwDd0XxDR4S3G%2FLHVg48y%2BKiH9sXlD6tgjnn2mVZOBqWnPF3%2FP4ZbNyK9us9PJvD7IhJFWdLpnZWJGD8LE%2Fe1OTmnhhvmL3jAi0Aw%2FPqjSXkZz25zJ6%2F%2FCtPqNqVDDKrtMFrHolhVQgrwwBQMhHOS0I5qH4%2F3uSRrvxMzdYMmXaARUkRZOTBQsBw7mW1dh%2B8bldKGSH%2BS0bSSEpNoq22yhFsDSX8g%2F7%2BB3zLN9EB7oX5hLjrcp6eof0IA2iFY2xhXDUXKSoYSifVqSQEp46bJWhB2OIhLiBc9k%2BvcXgiFZ4rC4banRt5fK0nzqPtoTKm4O77aRxqZbZIUrTwW9NxYsOFmv4I4pIQxdIEjtKTwM2Yz38lAGp1udiYyuNDU3MZRRjT0rnmzqvINoRcNrEn32w0ayj4%2BBQ%2BvKbwicWWLBe%2FZSe9g7aoboWo3ZpvqLlhRqQBrj3W6hz%2FdKbIE4G%2BzOwcz0xPdwtqpYKDFZCjcsEkbrSGl7KApC5w9Ls%2FXr1hfEwHK02wsP9aB3qys9JHtM4rVEMy2PbtuC5NtzGuA3Jpt7KNzS7f04jso7mHAqGWuRWWT4ji1tFYJeSkeDGIiVbzOgmuNALQdcQtUJFpsIA8HMCZONGWQ9ocAEUJwQw8N7XwAY6pgHrQXGh8%2F84hcjYhVOR6OE70ua5mR%2FofMhNpZ9Yd20O5HsJCG59TTV0GdSNGJktspLHZe5xtYkhhas6%2BfCNEz4fydQRaKVeuzbgLhSt5qUcPHQVF1OTx%2F%2Fb7s658Zrf6JxJX8l9p72A5%2FdT40yHnQSJKayWeJPyNplQu2f4DuuRiLTVMKQuKnngAb3OF52mQJDb0khexdcBN6fofL3Geuq3MYVNI4ot&X-Amz-Signature=e47f26553c6463b4ec9a1fc18356f63872c1fc205635cf549e8c8e283b9f59b5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQW4737%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHhdsiN6FOaksU5l8O3gjO3kqO67t2I82TBfxM5WX3joAiAxiRnc0Cc2YSTktoM34qEO5ahUrNfTGnlWH7dS4fisDCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU2YTIBUbmxi%2FdhIuKtwDd0XxDR4S3G%2FLHVg48y%2BKiH9sXlD6tgjnn2mVZOBqWnPF3%2FP4ZbNyK9us9PJvD7IhJFWdLpnZWJGD8LE%2Fe1OTmnhhvmL3jAi0Aw%2FPqjSXkZz25zJ6%2F%2FCtPqNqVDDKrtMFrHolhVQgrwwBQMhHOS0I5qH4%2F3uSRrvxMzdYMmXaARUkRZOTBQsBw7mW1dh%2B8bldKGSH%2BS0bSSEpNoq22yhFsDSX8g%2F7%2BB3zLN9EB7oX5hLjrcp6eof0IA2iFY2xhXDUXKSoYSifVqSQEp46bJWhB2OIhLiBc9k%2BvcXgiFZ4rC4banRt5fK0nzqPtoTKm4O77aRxqZbZIUrTwW9NxYsOFmv4I4pIQxdIEjtKTwM2Yz38lAGp1udiYyuNDU3MZRRjT0rnmzqvINoRcNrEn32w0ayj4%2BBQ%2BvKbwicWWLBe%2FZSe9g7aoboWo3ZpvqLlhRqQBrj3W6hz%2FdKbIE4G%2BzOwcz0xPdwtqpYKDFZCjcsEkbrSGl7KApC5w9Ls%2FXr1hfEwHK02wsP9aB3qys9JHtM4rVEMy2PbtuC5NtzGuA3Jpt7KNzS7f04jso7mHAqGWuRWWT4ji1tFYJeSkeDGIiVbzOgmuNALQdcQtUJFpsIA8HMCZONGWQ9ocAEUJwQw8N7XwAY6pgHrQXGh8%2F84hcjYhVOR6OE70ua5mR%2FofMhNpZ9Yd20O5HsJCG59TTV0GdSNGJktspLHZe5xtYkhhas6%2BfCNEz4fydQRaKVeuzbgLhSt5qUcPHQVF1OTx%2F%2Fb7s658Zrf6JxJX8l9p72A5%2FdT40yHnQSJKayWeJPyNplQu2f4DuuRiLTVMKQuKnngAb3OF52mQJDb0khexdcBN6fofL3Geuq3MYVNI4ot&X-Amz-Signature=351b503fa9357d1cd2f943997833830758818721b6a0551a69b024f7fbbb90e8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
