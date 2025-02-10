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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZRBFJW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGf7%2FpvPafja2tI%2B4Ci6KPPvYjAZhHreS7Cue9eqsIhAAiEApRsSWVk7ZT9DYGcYq3c7GkSXzdGb4XGrYHAEZLppnXIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrVbvp3VFMctX6x5yrcAz0J5qOawAKDXtsstCzF2bINKHdoDFchq%2B9bjB1oQ4MJESA3KpnxgsR%2Bhfx0xKnT1ihRk8UjAA6tuwd2odVu5UAwiA8OdxovaAL35BRn40K1ytO%2B9sj8PdR7iG%2FupswQ5GTJNyajHbOjf1a8hR26bNx3Iyg6VvTjbKwHXGNiNigqUgzRiNdkK8psY%2BE%2FqFuY5bnopOlhV1CDtp1VlXUeyLqFeYo9KgudN4GDaWc5c1L4yjq0poxukzzEPM2s0%2F9xkjWzBDklu4INa6DB6ZKMPR6o20EcUOeiwnprc9j77a%2Brq8V%2Be%2Fo1YRbYsQZIb9bSJzEr9kWvbXiXyJzL7BOXPsrDhQdBwPfQdUxxGvL8zPs3XoOci0sTEi1DQhL%2BYWiQ%2BCyMVsn2pyva15sDo%2B1F3SVLAQP73Gjp6fPwcG4K56MCZ%2F1orey9d5vBXChW4ZSPdyGsB5A4wjt50GGgmcpA5T1mYSnGaxdnuY80yEGlaOGQhlqFM2YgCJTqd9OwJDD28aPEHdo78V49gXqf5t8sEuGl%2ByWSLFbWVrF2JIt31mg6D%2FzZqQnXzqZC%2BjzF5MheyjC6QEkdZxRNmWxqu6Ve198kTvL9p7045NRIKXlWfoS7lqQJOa5b3HVlUpi5MLmcpb0GOqUBYhALUWwa5MWCLJSEGKfgB9lyt721Ny1V0YrGmX7ztRyqg8am53TnZnvE3uzEINEFzSk7qqLysaAVfJCrJuzVDjixGRaGnVVi%2BGawwENDpdQfkZ%2FQg6RXMd%2F47734cZ31wTBuy8SCiJ5DktrEKJ%2BCufsmtqB%2FXjFtAhOCxiCWXpuFeLyH61jjDSoV4clTx%2BEzF4F70yYzhntD7UBd6TzxGvt2eNL0&X-Amz-Signature=e313a34033a6d66fbf30d20bf962900879840db9c7c3972d77df18ce85d76528&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZRBFJW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGf7%2FpvPafja2tI%2B4Ci6KPPvYjAZhHreS7Cue9eqsIhAAiEApRsSWVk7ZT9DYGcYq3c7GkSXzdGb4XGrYHAEZLppnXIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrVbvp3VFMctX6x5yrcAz0J5qOawAKDXtsstCzF2bINKHdoDFchq%2B9bjB1oQ4MJESA3KpnxgsR%2Bhfx0xKnT1ihRk8UjAA6tuwd2odVu5UAwiA8OdxovaAL35BRn40K1ytO%2B9sj8PdR7iG%2FupswQ5GTJNyajHbOjf1a8hR26bNx3Iyg6VvTjbKwHXGNiNigqUgzRiNdkK8psY%2BE%2FqFuY5bnopOlhV1CDtp1VlXUeyLqFeYo9KgudN4GDaWc5c1L4yjq0poxukzzEPM2s0%2F9xkjWzBDklu4INa6DB6ZKMPR6o20EcUOeiwnprc9j77a%2Brq8V%2Be%2Fo1YRbYsQZIb9bSJzEr9kWvbXiXyJzL7BOXPsrDhQdBwPfQdUxxGvL8zPs3XoOci0sTEi1DQhL%2BYWiQ%2BCyMVsn2pyva15sDo%2B1F3SVLAQP73Gjp6fPwcG4K56MCZ%2F1orey9d5vBXChW4ZSPdyGsB5A4wjt50GGgmcpA5T1mYSnGaxdnuY80yEGlaOGQhlqFM2YgCJTqd9OwJDD28aPEHdo78V49gXqf5t8sEuGl%2ByWSLFbWVrF2JIt31mg6D%2FzZqQnXzqZC%2BjzF5MheyjC6QEkdZxRNmWxqu6Ve198kTvL9p7045NRIKXlWfoS7lqQJOa5b3HVlUpi5MLmcpb0GOqUBYhALUWwa5MWCLJSEGKfgB9lyt721Ny1V0YrGmX7ztRyqg8am53TnZnvE3uzEINEFzSk7qqLysaAVfJCrJuzVDjixGRaGnVVi%2BGawwENDpdQfkZ%2FQg6RXMd%2F47734cZ31wTBuy8SCiJ5DktrEKJ%2BCufsmtqB%2FXjFtAhOCxiCWXpuFeLyH61jjDSoV4clTx%2BEzF4F70yYzhntD7UBd6TzxGvt2eNL0&X-Amz-Signature=571e2577a40c0e71afe17b312df00a9eecb40ac3c805899ce4d65fec251a02fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZRBFJW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGf7%2FpvPafja2tI%2B4Ci6KPPvYjAZhHreS7Cue9eqsIhAAiEApRsSWVk7ZT9DYGcYq3c7GkSXzdGb4XGrYHAEZLppnXIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrVbvp3VFMctX6x5yrcAz0J5qOawAKDXtsstCzF2bINKHdoDFchq%2B9bjB1oQ4MJESA3KpnxgsR%2Bhfx0xKnT1ihRk8UjAA6tuwd2odVu5UAwiA8OdxovaAL35BRn40K1ytO%2B9sj8PdR7iG%2FupswQ5GTJNyajHbOjf1a8hR26bNx3Iyg6VvTjbKwHXGNiNigqUgzRiNdkK8psY%2BE%2FqFuY5bnopOlhV1CDtp1VlXUeyLqFeYo9KgudN4GDaWc5c1L4yjq0poxukzzEPM2s0%2F9xkjWzBDklu4INa6DB6ZKMPR6o20EcUOeiwnprc9j77a%2Brq8V%2Be%2Fo1YRbYsQZIb9bSJzEr9kWvbXiXyJzL7BOXPsrDhQdBwPfQdUxxGvL8zPs3XoOci0sTEi1DQhL%2BYWiQ%2BCyMVsn2pyva15sDo%2B1F3SVLAQP73Gjp6fPwcG4K56MCZ%2F1orey9d5vBXChW4ZSPdyGsB5A4wjt50GGgmcpA5T1mYSnGaxdnuY80yEGlaOGQhlqFM2YgCJTqd9OwJDD28aPEHdo78V49gXqf5t8sEuGl%2ByWSLFbWVrF2JIt31mg6D%2FzZqQnXzqZC%2BjzF5MheyjC6QEkdZxRNmWxqu6Ve198kTvL9p7045NRIKXlWfoS7lqQJOa5b3HVlUpi5MLmcpb0GOqUBYhALUWwa5MWCLJSEGKfgB9lyt721Ny1V0YrGmX7ztRyqg8am53TnZnvE3uzEINEFzSk7qqLysaAVfJCrJuzVDjixGRaGnVVi%2BGawwENDpdQfkZ%2FQg6RXMd%2F47734cZ31wTBuy8SCiJ5DktrEKJ%2BCufsmtqB%2FXjFtAhOCxiCWXpuFeLyH61jjDSoV4clTx%2BEzF4F70yYzhntD7UBd6TzxGvt2eNL0&X-Amz-Signature=4431031f9312c73251f55f159e0a1145a27a4d0254021e925c74fe63fbe2be75&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZRBFJW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGf7%2FpvPafja2tI%2B4Ci6KPPvYjAZhHreS7Cue9eqsIhAAiEApRsSWVk7ZT9DYGcYq3c7GkSXzdGb4XGrYHAEZLppnXIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrVbvp3VFMctX6x5yrcAz0J5qOawAKDXtsstCzF2bINKHdoDFchq%2B9bjB1oQ4MJESA3KpnxgsR%2Bhfx0xKnT1ihRk8UjAA6tuwd2odVu5UAwiA8OdxovaAL35BRn40K1ytO%2B9sj8PdR7iG%2FupswQ5GTJNyajHbOjf1a8hR26bNx3Iyg6VvTjbKwHXGNiNigqUgzRiNdkK8psY%2BE%2FqFuY5bnopOlhV1CDtp1VlXUeyLqFeYo9KgudN4GDaWc5c1L4yjq0poxukzzEPM2s0%2F9xkjWzBDklu4INa6DB6ZKMPR6o20EcUOeiwnprc9j77a%2Brq8V%2Be%2Fo1YRbYsQZIb9bSJzEr9kWvbXiXyJzL7BOXPsrDhQdBwPfQdUxxGvL8zPs3XoOci0sTEi1DQhL%2BYWiQ%2BCyMVsn2pyva15sDo%2B1F3SVLAQP73Gjp6fPwcG4K56MCZ%2F1orey9d5vBXChW4ZSPdyGsB5A4wjt50GGgmcpA5T1mYSnGaxdnuY80yEGlaOGQhlqFM2YgCJTqd9OwJDD28aPEHdo78V49gXqf5t8sEuGl%2ByWSLFbWVrF2JIt31mg6D%2FzZqQnXzqZC%2BjzF5MheyjC6QEkdZxRNmWxqu6Ve198kTvL9p7045NRIKXlWfoS7lqQJOa5b3HVlUpi5MLmcpb0GOqUBYhALUWwa5MWCLJSEGKfgB9lyt721Ny1V0YrGmX7ztRyqg8am53TnZnvE3uzEINEFzSk7qqLysaAVfJCrJuzVDjixGRaGnVVi%2BGawwENDpdQfkZ%2FQg6RXMd%2F47734cZ31wTBuy8SCiJ5DktrEKJ%2BCufsmtqB%2FXjFtAhOCxiCWXpuFeLyH61jjDSoV4clTx%2BEzF4F70yYzhntD7UBd6TzxGvt2eNL0&X-Amz-Signature=3ebce31bf546df91acae4fbc9b4a1d8275609ab7c2403f9661fffee968b569da&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZRBFJW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGf7%2FpvPafja2tI%2B4Ci6KPPvYjAZhHreS7Cue9eqsIhAAiEApRsSWVk7ZT9DYGcYq3c7GkSXzdGb4XGrYHAEZLppnXIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrVbvp3VFMctX6x5yrcAz0J5qOawAKDXtsstCzF2bINKHdoDFchq%2B9bjB1oQ4MJESA3KpnxgsR%2Bhfx0xKnT1ihRk8UjAA6tuwd2odVu5UAwiA8OdxovaAL35BRn40K1ytO%2B9sj8PdR7iG%2FupswQ5GTJNyajHbOjf1a8hR26bNx3Iyg6VvTjbKwHXGNiNigqUgzRiNdkK8psY%2BE%2FqFuY5bnopOlhV1CDtp1VlXUeyLqFeYo9KgudN4GDaWc5c1L4yjq0poxukzzEPM2s0%2F9xkjWzBDklu4INa6DB6ZKMPR6o20EcUOeiwnprc9j77a%2Brq8V%2Be%2Fo1YRbYsQZIb9bSJzEr9kWvbXiXyJzL7BOXPsrDhQdBwPfQdUxxGvL8zPs3XoOci0sTEi1DQhL%2BYWiQ%2BCyMVsn2pyva15sDo%2B1F3SVLAQP73Gjp6fPwcG4K56MCZ%2F1orey9d5vBXChW4ZSPdyGsB5A4wjt50GGgmcpA5T1mYSnGaxdnuY80yEGlaOGQhlqFM2YgCJTqd9OwJDD28aPEHdo78V49gXqf5t8sEuGl%2ByWSLFbWVrF2JIt31mg6D%2FzZqQnXzqZC%2BjzF5MheyjC6QEkdZxRNmWxqu6Ve198kTvL9p7045NRIKXlWfoS7lqQJOa5b3HVlUpi5MLmcpb0GOqUBYhALUWwa5MWCLJSEGKfgB9lyt721Ny1V0YrGmX7ztRyqg8am53TnZnvE3uzEINEFzSk7qqLysaAVfJCrJuzVDjixGRaGnVVi%2BGawwENDpdQfkZ%2FQg6RXMd%2F47734cZ31wTBuy8SCiJ5DktrEKJ%2BCufsmtqB%2FXjFtAhOCxiCWXpuFeLyH61jjDSoV4clTx%2BEzF4F70yYzhntD7UBd6TzxGvt2eNL0&X-Amz-Signature=7754fa6a8efcfff26aece1cd840f4ea1e08be025ffb60831cdf511733f841138&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZRBFJW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGf7%2FpvPafja2tI%2B4Ci6KPPvYjAZhHreS7Cue9eqsIhAAiEApRsSWVk7ZT9DYGcYq3c7GkSXzdGb4XGrYHAEZLppnXIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrVbvp3VFMctX6x5yrcAz0J5qOawAKDXtsstCzF2bINKHdoDFchq%2B9bjB1oQ4MJESA3KpnxgsR%2Bhfx0xKnT1ihRk8UjAA6tuwd2odVu5UAwiA8OdxovaAL35BRn40K1ytO%2B9sj8PdR7iG%2FupswQ5GTJNyajHbOjf1a8hR26bNx3Iyg6VvTjbKwHXGNiNigqUgzRiNdkK8psY%2BE%2FqFuY5bnopOlhV1CDtp1VlXUeyLqFeYo9KgudN4GDaWc5c1L4yjq0poxukzzEPM2s0%2F9xkjWzBDklu4INa6DB6ZKMPR6o20EcUOeiwnprc9j77a%2Brq8V%2Be%2Fo1YRbYsQZIb9bSJzEr9kWvbXiXyJzL7BOXPsrDhQdBwPfQdUxxGvL8zPs3XoOci0sTEi1DQhL%2BYWiQ%2BCyMVsn2pyva15sDo%2B1F3SVLAQP73Gjp6fPwcG4K56MCZ%2F1orey9d5vBXChW4ZSPdyGsB5A4wjt50GGgmcpA5T1mYSnGaxdnuY80yEGlaOGQhlqFM2YgCJTqd9OwJDD28aPEHdo78V49gXqf5t8sEuGl%2ByWSLFbWVrF2JIt31mg6D%2FzZqQnXzqZC%2BjzF5MheyjC6QEkdZxRNmWxqu6Ve198kTvL9p7045NRIKXlWfoS7lqQJOa5b3HVlUpi5MLmcpb0GOqUBYhALUWwa5MWCLJSEGKfgB9lyt721Ny1V0YrGmX7ztRyqg8am53TnZnvE3uzEINEFzSk7qqLysaAVfJCrJuzVDjixGRaGnVVi%2BGawwENDpdQfkZ%2FQg6RXMd%2F47734cZ31wTBuy8SCiJ5DktrEKJ%2BCufsmtqB%2FXjFtAhOCxiCWXpuFeLyH61jjDSoV4clTx%2BEzF4F70yYzhntD7UBd6TzxGvt2eNL0&X-Amz-Signature=5dbc5c95a35c00f91660e3801918b037b5352062b517a9f5a8fa746bc4093ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZRBFJW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGf7%2FpvPafja2tI%2B4Ci6KPPvYjAZhHreS7Cue9eqsIhAAiEApRsSWVk7ZT9DYGcYq3c7GkSXzdGb4XGrYHAEZLppnXIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrVbvp3VFMctX6x5yrcAz0J5qOawAKDXtsstCzF2bINKHdoDFchq%2B9bjB1oQ4MJESA3KpnxgsR%2Bhfx0xKnT1ihRk8UjAA6tuwd2odVu5UAwiA8OdxovaAL35BRn40K1ytO%2B9sj8PdR7iG%2FupswQ5GTJNyajHbOjf1a8hR26bNx3Iyg6VvTjbKwHXGNiNigqUgzRiNdkK8psY%2BE%2FqFuY5bnopOlhV1CDtp1VlXUeyLqFeYo9KgudN4GDaWc5c1L4yjq0poxukzzEPM2s0%2F9xkjWzBDklu4INa6DB6ZKMPR6o20EcUOeiwnprc9j77a%2Brq8V%2Be%2Fo1YRbYsQZIb9bSJzEr9kWvbXiXyJzL7BOXPsrDhQdBwPfQdUxxGvL8zPs3XoOci0sTEi1DQhL%2BYWiQ%2BCyMVsn2pyva15sDo%2B1F3SVLAQP73Gjp6fPwcG4K56MCZ%2F1orey9d5vBXChW4ZSPdyGsB5A4wjt50GGgmcpA5T1mYSnGaxdnuY80yEGlaOGQhlqFM2YgCJTqd9OwJDD28aPEHdo78V49gXqf5t8sEuGl%2ByWSLFbWVrF2JIt31mg6D%2FzZqQnXzqZC%2BjzF5MheyjC6QEkdZxRNmWxqu6Ve198kTvL9p7045NRIKXlWfoS7lqQJOa5b3HVlUpi5MLmcpb0GOqUBYhALUWwa5MWCLJSEGKfgB9lyt721Ny1V0YrGmX7ztRyqg8am53TnZnvE3uzEINEFzSk7qqLysaAVfJCrJuzVDjixGRaGnVVi%2BGawwENDpdQfkZ%2FQg6RXMd%2F47734cZ31wTBuy8SCiJ5DktrEKJ%2BCufsmtqB%2FXjFtAhOCxiCWXpuFeLyH61jjDSoV4clTx%2BEzF4F70yYzhntD7UBd6TzxGvt2eNL0&X-Amz-Signature=2699bc518263e193d21cf1b0e0ca15ea5ee506a41db113cab9611af1d125eaf9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
