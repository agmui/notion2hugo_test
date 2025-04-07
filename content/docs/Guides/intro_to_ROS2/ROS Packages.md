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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZVZPJ6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzS2%2Fhrc4uO7XMLHx7Ia0PWcyZcy6MRHmIsrYUKqyXeAiEAnOh1hiyPxn0gFi7br4PtwlU%2FlfYcH767v%2Bx9hyoxclwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDj2aRUmIMR92LcPICrcA4YpOOzlBu4WCHlzyvDJjg6Fi1TvXZAeX6Ih5XX28tKC2KTvR21DAfZTiuI6rEbCQQQDSZkJH8Lcax86sguk6OJGypRbc8ydUYipf9LmW%2FqJohTFBSoinmAg2wU2Kk%2F%2Bn%2BnE3mu%2F%2BqC2I8%2B5OKpqHzMNKTDrfvzQixjs6BJptXso0OE76U8k4mLA1vzpWnhFx6EnbcBDiJQ3JWonki9X5AenaMH3uTeyUbtcqbEtyz2zriR9KG1DxxVMgoFEix5XM96rZlBwSvI9hfILiF1jpROrIi6Ovyv1Io5VE5IVe8FJu1NS0aQ4CmyOjhJOKj5L7R2abZSiAIcknbwXNOeOVZ8DLg8ZVJL1ZoNkW3AFIxZW0p2Ua65OPo7c0MCAQPjP1VOfwWmAPzV%2Bkznk%2BDjUBRKVKU7Y%2FmyJcWUIiYAt4TrQCxnW4FZDxIh4pCeaKMasGlTvjIpN9oHbZSxp49zZP3x8Tv9q3OCECUEYGunsz2DUS9Wuu%2FuztXQ2IOdtTTXbfWU7LJ%2FOKnvspUnPCjBiEqj%2BxjMuZGTcQ2ln7ph7poSSg1npAOCeBVhUH8pgnoB4J3TY%2FrId16umswhTByFVbmvaeqlFHPdWrIJDXTqHX%2F2lKIzFvyrMoN%2B5gNVrMOy2z78GOqUBjzWrjnB6MWAcYtZLWoNQzsMMq%2Fw8d2WIbW1bUidYDYs0ikmwi5YdsDPLxLeDJ0f2qH4kC8njdXGbvl0%2BS47Oe87%2FznGGVcoHZ4dENCSgyF34DYSY002eC4GkaMGZB6I1jK6r9DFxIAIK7Mqp6ebaHSeKexMePvl5udHEgqr1UfD%2FLxKpcVjn%2F9wlf4yuIDFeY1Kc3msRq7RTSX3iChXqysDPw7Gy&X-Amz-Signature=74e0b7df32a8f296077c1818ea8e1beecbe6f85087c3242173ada0a63c0ca567&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZVZPJ6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzS2%2Fhrc4uO7XMLHx7Ia0PWcyZcy6MRHmIsrYUKqyXeAiEAnOh1hiyPxn0gFi7br4PtwlU%2FlfYcH767v%2Bx9hyoxclwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDj2aRUmIMR92LcPICrcA4YpOOzlBu4WCHlzyvDJjg6Fi1TvXZAeX6Ih5XX28tKC2KTvR21DAfZTiuI6rEbCQQQDSZkJH8Lcax86sguk6OJGypRbc8ydUYipf9LmW%2FqJohTFBSoinmAg2wU2Kk%2F%2Bn%2BnE3mu%2F%2BqC2I8%2B5OKpqHzMNKTDrfvzQixjs6BJptXso0OE76U8k4mLA1vzpWnhFx6EnbcBDiJQ3JWonki9X5AenaMH3uTeyUbtcqbEtyz2zriR9KG1DxxVMgoFEix5XM96rZlBwSvI9hfILiF1jpROrIi6Ovyv1Io5VE5IVe8FJu1NS0aQ4CmyOjhJOKj5L7R2abZSiAIcknbwXNOeOVZ8DLg8ZVJL1ZoNkW3AFIxZW0p2Ua65OPo7c0MCAQPjP1VOfwWmAPzV%2Bkznk%2BDjUBRKVKU7Y%2FmyJcWUIiYAt4TrQCxnW4FZDxIh4pCeaKMasGlTvjIpN9oHbZSxp49zZP3x8Tv9q3OCECUEYGunsz2DUS9Wuu%2FuztXQ2IOdtTTXbfWU7LJ%2FOKnvspUnPCjBiEqj%2BxjMuZGTcQ2ln7ph7poSSg1npAOCeBVhUH8pgnoB4J3TY%2FrId16umswhTByFVbmvaeqlFHPdWrIJDXTqHX%2F2lKIzFvyrMoN%2B5gNVrMOy2z78GOqUBjzWrjnB6MWAcYtZLWoNQzsMMq%2Fw8d2WIbW1bUidYDYs0ikmwi5YdsDPLxLeDJ0f2qH4kC8njdXGbvl0%2BS47Oe87%2FznGGVcoHZ4dENCSgyF34DYSY002eC4GkaMGZB6I1jK6r9DFxIAIK7Mqp6ebaHSeKexMePvl5udHEgqr1UfD%2FLxKpcVjn%2F9wlf4yuIDFeY1Kc3msRq7RTSX3iChXqysDPw7Gy&X-Amz-Signature=d5f0e14a9b43a490bd180990889ac95602470b54ba31dcc698f924c43c68f2d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZVZPJ6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzS2%2Fhrc4uO7XMLHx7Ia0PWcyZcy6MRHmIsrYUKqyXeAiEAnOh1hiyPxn0gFi7br4PtwlU%2FlfYcH767v%2Bx9hyoxclwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDj2aRUmIMR92LcPICrcA4YpOOzlBu4WCHlzyvDJjg6Fi1TvXZAeX6Ih5XX28tKC2KTvR21DAfZTiuI6rEbCQQQDSZkJH8Lcax86sguk6OJGypRbc8ydUYipf9LmW%2FqJohTFBSoinmAg2wU2Kk%2F%2Bn%2BnE3mu%2F%2BqC2I8%2B5OKpqHzMNKTDrfvzQixjs6BJptXso0OE76U8k4mLA1vzpWnhFx6EnbcBDiJQ3JWonki9X5AenaMH3uTeyUbtcqbEtyz2zriR9KG1DxxVMgoFEix5XM96rZlBwSvI9hfILiF1jpROrIi6Ovyv1Io5VE5IVe8FJu1NS0aQ4CmyOjhJOKj5L7R2abZSiAIcknbwXNOeOVZ8DLg8ZVJL1ZoNkW3AFIxZW0p2Ua65OPo7c0MCAQPjP1VOfwWmAPzV%2Bkznk%2BDjUBRKVKU7Y%2FmyJcWUIiYAt4TrQCxnW4FZDxIh4pCeaKMasGlTvjIpN9oHbZSxp49zZP3x8Tv9q3OCECUEYGunsz2DUS9Wuu%2FuztXQ2IOdtTTXbfWU7LJ%2FOKnvspUnPCjBiEqj%2BxjMuZGTcQ2ln7ph7poSSg1npAOCeBVhUH8pgnoB4J3TY%2FrId16umswhTByFVbmvaeqlFHPdWrIJDXTqHX%2F2lKIzFvyrMoN%2B5gNVrMOy2z78GOqUBjzWrjnB6MWAcYtZLWoNQzsMMq%2Fw8d2WIbW1bUidYDYs0ikmwi5YdsDPLxLeDJ0f2qH4kC8njdXGbvl0%2BS47Oe87%2FznGGVcoHZ4dENCSgyF34DYSY002eC4GkaMGZB6I1jK6r9DFxIAIK7Mqp6ebaHSeKexMePvl5udHEgqr1UfD%2FLxKpcVjn%2F9wlf4yuIDFeY1Kc3msRq7RTSX3iChXqysDPw7Gy&X-Amz-Signature=1ff4144ffe4fd7c4579a840ed39346e883b711ef05c9c6fed22339066e5fe04a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZVZPJ6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzS2%2Fhrc4uO7XMLHx7Ia0PWcyZcy6MRHmIsrYUKqyXeAiEAnOh1hiyPxn0gFi7br4PtwlU%2FlfYcH767v%2Bx9hyoxclwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDj2aRUmIMR92LcPICrcA4YpOOzlBu4WCHlzyvDJjg6Fi1TvXZAeX6Ih5XX28tKC2KTvR21DAfZTiuI6rEbCQQQDSZkJH8Lcax86sguk6OJGypRbc8ydUYipf9LmW%2FqJohTFBSoinmAg2wU2Kk%2F%2Bn%2BnE3mu%2F%2BqC2I8%2B5OKpqHzMNKTDrfvzQixjs6BJptXso0OE76U8k4mLA1vzpWnhFx6EnbcBDiJQ3JWonki9X5AenaMH3uTeyUbtcqbEtyz2zriR9KG1DxxVMgoFEix5XM96rZlBwSvI9hfILiF1jpROrIi6Ovyv1Io5VE5IVe8FJu1NS0aQ4CmyOjhJOKj5L7R2abZSiAIcknbwXNOeOVZ8DLg8ZVJL1ZoNkW3AFIxZW0p2Ua65OPo7c0MCAQPjP1VOfwWmAPzV%2Bkznk%2BDjUBRKVKU7Y%2FmyJcWUIiYAt4TrQCxnW4FZDxIh4pCeaKMasGlTvjIpN9oHbZSxp49zZP3x8Tv9q3OCECUEYGunsz2DUS9Wuu%2FuztXQ2IOdtTTXbfWU7LJ%2FOKnvspUnPCjBiEqj%2BxjMuZGTcQ2ln7ph7poSSg1npAOCeBVhUH8pgnoB4J3TY%2FrId16umswhTByFVbmvaeqlFHPdWrIJDXTqHX%2F2lKIzFvyrMoN%2B5gNVrMOy2z78GOqUBjzWrjnB6MWAcYtZLWoNQzsMMq%2Fw8d2WIbW1bUidYDYs0ikmwi5YdsDPLxLeDJ0f2qH4kC8njdXGbvl0%2BS47Oe87%2FznGGVcoHZ4dENCSgyF34DYSY002eC4GkaMGZB6I1jK6r9DFxIAIK7Mqp6ebaHSeKexMePvl5udHEgqr1UfD%2FLxKpcVjn%2F9wlf4yuIDFeY1Kc3msRq7RTSX3iChXqysDPw7Gy&X-Amz-Signature=78dc094f783ca0f81dda66a9514331f0464dcde093a5138a840937e5c4c4df32&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZVZPJ6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzS2%2Fhrc4uO7XMLHx7Ia0PWcyZcy6MRHmIsrYUKqyXeAiEAnOh1hiyPxn0gFi7br4PtwlU%2FlfYcH767v%2Bx9hyoxclwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDj2aRUmIMR92LcPICrcA4YpOOzlBu4WCHlzyvDJjg6Fi1TvXZAeX6Ih5XX28tKC2KTvR21DAfZTiuI6rEbCQQQDSZkJH8Lcax86sguk6OJGypRbc8ydUYipf9LmW%2FqJohTFBSoinmAg2wU2Kk%2F%2Bn%2BnE3mu%2F%2BqC2I8%2B5OKpqHzMNKTDrfvzQixjs6BJptXso0OE76U8k4mLA1vzpWnhFx6EnbcBDiJQ3JWonki9X5AenaMH3uTeyUbtcqbEtyz2zriR9KG1DxxVMgoFEix5XM96rZlBwSvI9hfILiF1jpROrIi6Ovyv1Io5VE5IVe8FJu1NS0aQ4CmyOjhJOKj5L7R2abZSiAIcknbwXNOeOVZ8DLg8ZVJL1ZoNkW3AFIxZW0p2Ua65OPo7c0MCAQPjP1VOfwWmAPzV%2Bkznk%2BDjUBRKVKU7Y%2FmyJcWUIiYAt4TrQCxnW4FZDxIh4pCeaKMasGlTvjIpN9oHbZSxp49zZP3x8Tv9q3OCECUEYGunsz2DUS9Wuu%2FuztXQ2IOdtTTXbfWU7LJ%2FOKnvspUnPCjBiEqj%2BxjMuZGTcQ2ln7ph7poSSg1npAOCeBVhUH8pgnoB4J3TY%2FrId16umswhTByFVbmvaeqlFHPdWrIJDXTqHX%2F2lKIzFvyrMoN%2B5gNVrMOy2z78GOqUBjzWrjnB6MWAcYtZLWoNQzsMMq%2Fw8d2WIbW1bUidYDYs0ikmwi5YdsDPLxLeDJ0f2qH4kC8njdXGbvl0%2BS47Oe87%2FznGGVcoHZ4dENCSgyF34DYSY002eC4GkaMGZB6I1jK6r9DFxIAIK7Mqp6ebaHSeKexMePvl5udHEgqr1UfD%2FLxKpcVjn%2F9wlf4yuIDFeY1Kc3msRq7RTSX3iChXqysDPw7Gy&X-Amz-Signature=eb8db65b39c0319038c8a1ff49932481941672e8e116b2afc1693623895008a3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZVZPJ6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzS2%2Fhrc4uO7XMLHx7Ia0PWcyZcy6MRHmIsrYUKqyXeAiEAnOh1hiyPxn0gFi7br4PtwlU%2FlfYcH767v%2Bx9hyoxclwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDj2aRUmIMR92LcPICrcA4YpOOzlBu4WCHlzyvDJjg6Fi1TvXZAeX6Ih5XX28tKC2KTvR21DAfZTiuI6rEbCQQQDSZkJH8Lcax86sguk6OJGypRbc8ydUYipf9LmW%2FqJohTFBSoinmAg2wU2Kk%2F%2Bn%2BnE3mu%2F%2BqC2I8%2B5OKpqHzMNKTDrfvzQixjs6BJptXso0OE76U8k4mLA1vzpWnhFx6EnbcBDiJQ3JWonki9X5AenaMH3uTeyUbtcqbEtyz2zriR9KG1DxxVMgoFEix5XM96rZlBwSvI9hfILiF1jpROrIi6Ovyv1Io5VE5IVe8FJu1NS0aQ4CmyOjhJOKj5L7R2abZSiAIcknbwXNOeOVZ8DLg8ZVJL1ZoNkW3AFIxZW0p2Ua65OPo7c0MCAQPjP1VOfwWmAPzV%2Bkznk%2BDjUBRKVKU7Y%2FmyJcWUIiYAt4TrQCxnW4FZDxIh4pCeaKMasGlTvjIpN9oHbZSxp49zZP3x8Tv9q3OCECUEYGunsz2DUS9Wuu%2FuztXQ2IOdtTTXbfWU7LJ%2FOKnvspUnPCjBiEqj%2BxjMuZGTcQ2ln7ph7poSSg1npAOCeBVhUH8pgnoB4J3TY%2FrId16umswhTByFVbmvaeqlFHPdWrIJDXTqHX%2F2lKIzFvyrMoN%2B5gNVrMOy2z78GOqUBjzWrjnB6MWAcYtZLWoNQzsMMq%2Fw8d2WIbW1bUidYDYs0ikmwi5YdsDPLxLeDJ0f2qH4kC8njdXGbvl0%2BS47Oe87%2FznGGVcoHZ4dENCSgyF34DYSY002eC4GkaMGZB6I1jK6r9DFxIAIK7Mqp6ebaHSeKexMePvl5udHEgqr1UfD%2FLxKpcVjn%2F9wlf4yuIDFeY1Kc3msRq7RTSX3iChXqysDPw7Gy&X-Amz-Signature=813b6104bc884366404478ec35c2c021f20d5fb7ccf5c8009e53047ecad123d9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZVZPJ6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzS2%2Fhrc4uO7XMLHx7Ia0PWcyZcy6MRHmIsrYUKqyXeAiEAnOh1hiyPxn0gFi7br4PtwlU%2FlfYcH767v%2Bx9hyoxclwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDj2aRUmIMR92LcPICrcA4YpOOzlBu4WCHlzyvDJjg6Fi1TvXZAeX6Ih5XX28tKC2KTvR21DAfZTiuI6rEbCQQQDSZkJH8Lcax86sguk6OJGypRbc8ydUYipf9LmW%2FqJohTFBSoinmAg2wU2Kk%2F%2Bn%2BnE3mu%2F%2BqC2I8%2B5OKpqHzMNKTDrfvzQixjs6BJptXso0OE76U8k4mLA1vzpWnhFx6EnbcBDiJQ3JWonki9X5AenaMH3uTeyUbtcqbEtyz2zriR9KG1DxxVMgoFEix5XM96rZlBwSvI9hfILiF1jpROrIi6Ovyv1Io5VE5IVe8FJu1NS0aQ4CmyOjhJOKj5L7R2abZSiAIcknbwXNOeOVZ8DLg8ZVJL1ZoNkW3AFIxZW0p2Ua65OPo7c0MCAQPjP1VOfwWmAPzV%2Bkznk%2BDjUBRKVKU7Y%2FmyJcWUIiYAt4TrQCxnW4FZDxIh4pCeaKMasGlTvjIpN9oHbZSxp49zZP3x8Tv9q3OCECUEYGunsz2DUS9Wuu%2FuztXQ2IOdtTTXbfWU7LJ%2FOKnvspUnPCjBiEqj%2BxjMuZGTcQ2ln7ph7poSSg1npAOCeBVhUH8pgnoB4J3TY%2FrId16umswhTByFVbmvaeqlFHPdWrIJDXTqHX%2F2lKIzFvyrMoN%2B5gNVrMOy2z78GOqUBjzWrjnB6MWAcYtZLWoNQzsMMq%2Fw8d2WIbW1bUidYDYs0ikmwi5YdsDPLxLeDJ0f2qH4kC8njdXGbvl0%2BS47Oe87%2FznGGVcoHZ4dENCSgyF34DYSY002eC4GkaMGZB6I1jK6r9DFxIAIK7Mqp6ebaHSeKexMePvl5udHEgqr1UfD%2FLxKpcVjn%2F9wlf4yuIDFeY1Kc3msRq7RTSX3iChXqysDPw7Gy&X-Amz-Signature=6124d7fbc9b328a487e174472c8589224f04f47ef069c6205ee478b40f26f995&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
