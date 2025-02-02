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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSW47X6H%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCla7rlut7P4IG6NISB8vc5TpSVitKHWlKYdQz7ZkQaAIhAOm%2FpHb2xoPTim271c4qdAensW5Fve8mhksM%2BoJ4QfeuKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYucEZIVnZpKF80bEq3ANU%2B%2Bo%2Fdi1F2a%2B4xAAKfDlFrA3wZ2ERyJbTu0vfh9OQsod%2FtFXErRZLOm6wl0ZB%2FYr2dpV17YJTehAQQ0dyrTr0m8ymvOaF9cNuTvgu7wNWoiwlMywieeVHR6Xm1FBG53C1YG6g8b1La3dpTjQPLDydhQ6sXO6VSWMhtQ5PZ%2BeM2Krv7k3FFehZjYvaCO9T8AxMJSioXIEa%2FmWRm5UoL7SNw1%2FDVyfv9QILTWEZkc6Jcw1l2HNwuaER54AY5KOtO1TSRXNi2U3HZVj7GC2%2Fi1xb3mDJHtzGvim%2FVVTlpl3r%2FXb9c6zryFRAhQxZEl8qjzICBeFj3Agqhg2vM0RwDO3h9zauH%2FRIHnbMWq5tsB9llAKZR3YkowvrlPJVrfXQjgzC3uqys3S8qi6%2BJtZQ%2F%2BBpnNqnz9bGdH0JKWz93HyD9H6zyXvfdgiZKvXe6soxvZdLZ5c8I5LDIBL%2BQjuO5zASbKcPqZrkCIixMK6JN332czNr%2FFyncQEkoPKJBVx3zAFXyI0wr8q%2BS2ZDu%2BfEKzS5QVNmwkV2TOLSAxOicFmrFihMBrLAIfFYL6nOm%2Bmmm5yCSIKJV87m%2BDY2EVE7mB4GpGMHEKtt6hAlBq8bbxxkV7OVsfbro1oK699oRjCD4v68BjqkAQzf3%2BqiJlqEkbjUwM%2BMGKEU8yV3ZYSwkRVl0Vbrtq%2B8dDJ0W13%2BKBIhiXfUoFQo3ndJLJP%2FEyCUy9tCWlz%2FcbxoGN55ZyLLLvUkJCH0xKZ1A4%2Bzu73XIqP1Q0OVNZuAnNl4c6jWu%2FnN3xjNgX%2F4N30BztjM8tsNoTsXscB7ldoimY2Bz9qYh4W4vnvSj9znA%2FLIGq9QzhKqQOwpR7jN5%2BvFHnOj&X-Amz-Signature=fd6956dddacf17078aed69cdee965333a0687136b13fd54b6b2e7924404649bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSW47X6H%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCla7rlut7P4IG6NISB8vc5TpSVitKHWlKYdQz7ZkQaAIhAOm%2FpHb2xoPTim271c4qdAensW5Fve8mhksM%2BoJ4QfeuKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYucEZIVnZpKF80bEq3ANU%2B%2Bo%2Fdi1F2a%2B4xAAKfDlFrA3wZ2ERyJbTu0vfh9OQsod%2FtFXErRZLOm6wl0ZB%2FYr2dpV17YJTehAQQ0dyrTr0m8ymvOaF9cNuTvgu7wNWoiwlMywieeVHR6Xm1FBG53C1YG6g8b1La3dpTjQPLDydhQ6sXO6VSWMhtQ5PZ%2BeM2Krv7k3FFehZjYvaCO9T8AxMJSioXIEa%2FmWRm5UoL7SNw1%2FDVyfv9QILTWEZkc6Jcw1l2HNwuaER54AY5KOtO1TSRXNi2U3HZVj7GC2%2Fi1xb3mDJHtzGvim%2FVVTlpl3r%2FXb9c6zryFRAhQxZEl8qjzICBeFj3Agqhg2vM0RwDO3h9zauH%2FRIHnbMWq5tsB9llAKZR3YkowvrlPJVrfXQjgzC3uqys3S8qi6%2BJtZQ%2F%2BBpnNqnz9bGdH0JKWz93HyD9H6zyXvfdgiZKvXe6soxvZdLZ5c8I5LDIBL%2BQjuO5zASbKcPqZrkCIixMK6JN332czNr%2FFyncQEkoPKJBVx3zAFXyI0wr8q%2BS2ZDu%2BfEKzS5QVNmwkV2TOLSAxOicFmrFihMBrLAIfFYL6nOm%2Bmmm5yCSIKJV87m%2BDY2EVE7mB4GpGMHEKtt6hAlBq8bbxxkV7OVsfbro1oK699oRjCD4v68BjqkAQzf3%2BqiJlqEkbjUwM%2BMGKEU8yV3ZYSwkRVl0Vbrtq%2B8dDJ0W13%2BKBIhiXfUoFQo3ndJLJP%2FEyCUy9tCWlz%2FcbxoGN55ZyLLLvUkJCH0xKZ1A4%2Bzu73XIqP1Q0OVNZuAnNl4c6jWu%2FnN3xjNgX%2F4N30BztjM8tsNoTsXscB7ldoimY2Bz9qYh4W4vnvSj9znA%2FLIGq9QzhKqQOwpR7jN5%2BvFHnOj&X-Amz-Signature=7b0ce3421db232c331cacdcea05b8b3581aecd74cbcfe88fc0f7b9e9bac9ca35&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSW47X6H%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCla7rlut7P4IG6NISB8vc5TpSVitKHWlKYdQz7ZkQaAIhAOm%2FpHb2xoPTim271c4qdAensW5Fve8mhksM%2BoJ4QfeuKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYucEZIVnZpKF80bEq3ANU%2B%2Bo%2Fdi1F2a%2B4xAAKfDlFrA3wZ2ERyJbTu0vfh9OQsod%2FtFXErRZLOm6wl0ZB%2FYr2dpV17YJTehAQQ0dyrTr0m8ymvOaF9cNuTvgu7wNWoiwlMywieeVHR6Xm1FBG53C1YG6g8b1La3dpTjQPLDydhQ6sXO6VSWMhtQ5PZ%2BeM2Krv7k3FFehZjYvaCO9T8AxMJSioXIEa%2FmWRm5UoL7SNw1%2FDVyfv9QILTWEZkc6Jcw1l2HNwuaER54AY5KOtO1TSRXNi2U3HZVj7GC2%2Fi1xb3mDJHtzGvim%2FVVTlpl3r%2FXb9c6zryFRAhQxZEl8qjzICBeFj3Agqhg2vM0RwDO3h9zauH%2FRIHnbMWq5tsB9llAKZR3YkowvrlPJVrfXQjgzC3uqys3S8qi6%2BJtZQ%2F%2BBpnNqnz9bGdH0JKWz93HyD9H6zyXvfdgiZKvXe6soxvZdLZ5c8I5LDIBL%2BQjuO5zASbKcPqZrkCIixMK6JN332czNr%2FFyncQEkoPKJBVx3zAFXyI0wr8q%2BS2ZDu%2BfEKzS5QVNmwkV2TOLSAxOicFmrFihMBrLAIfFYL6nOm%2Bmmm5yCSIKJV87m%2BDY2EVE7mB4GpGMHEKtt6hAlBq8bbxxkV7OVsfbro1oK699oRjCD4v68BjqkAQzf3%2BqiJlqEkbjUwM%2BMGKEU8yV3ZYSwkRVl0Vbrtq%2B8dDJ0W13%2BKBIhiXfUoFQo3ndJLJP%2FEyCUy9tCWlz%2FcbxoGN55ZyLLLvUkJCH0xKZ1A4%2Bzu73XIqP1Q0OVNZuAnNl4c6jWu%2FnN3xjNgX%2F4N30BztjM8tsNoTsXscB7ldoimY2Bz9qYh4W4vnvSj9znA%2FLIGq9QzhKqQOwpR7jN5%2BvFHnOj&X-Amz-Signature=d544a8251f337c142e8d7d284923f878029395e7e3b9db6ab96dea22ed247502&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSW47X6H%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCla7rlut7P4IG6NISB8vc5TpSVitKHWlKYdQz7ZkQaAIhAOm%2FpHb2xoPTim271c4qdAensW5Fve8mhksM%2BoJ4QfeuKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYucEZIVnZpKF80bEq3ANU%2B%2Bo%2Fdi1F2a%2B4xAAKfDlFrA3wZ2ERyJbTu0vfh9OQsod%2FtFXErRZLOm6wl0ZB%2FYr2dpV17YJTehAQQ0dyrTr0m8ymvOaF9cNuTvgu7wNWoiwlMywieeVHR6Xm1FBG53C1YG6g8b1La3dpTjQPLDydhQ6sXO6VSWMhtQ5PZ%2BeM2Krv7k3FFehZjYvaCO9T8AxMJSioXIEa%2FmWRm5UoL7SNw1%2FDVyfv9QILTWEZkc6Jcw1l2HNwuaER54AY5KOtO1TSRXNi2U3HZVj7GC2%2Fi1xb3mDJHtzGvim%2FVVTlpl3r%2FXb9c6zryFRAhQxZEl8qjzICBeFj3Agqhg2vM0RwDO3h9zauH%2FRIHnbMWq5tsB9llAKZR3YkowvrlPJVrfXQjgzC3uqys3S8qi6%2BJtZQ%2F%2BBpnNqnz9bGdH0JKWz93HyD9H6zyXvfdgiZKvXe6soxvZdLZ5c8I5LDIBL%2BQjuO5zASbKcPqZrkCIixMK6JN332czNr%2FFyncQEkoPKJBVx3zAFXyI0wr8q%2BS2ZDu%2BfEKzS5QVNmwkV2TOLSAxOicFmrFihMBrLAIfFYL6nOm%2Bmmm5yCSIKJV87m%2BDY2EVE7mB4GpGMHEKtt6hAlBq8bbxxkV7OVsfbro1oK699oRjCD4v68BjqkAQzf3%2BqiJlqEkbjUwM%2BMGKEU8yV3ZYSwkRVl0Vbrtq%2B8dDJ0W13%2BKBIhiXfUoFQo3ndJLJP%2FEyCUy9tCWlz%2FcbxoGN55ZyLLLvUkJCH0xKZ1A4%2Bzu73XIqP1Q0OVNZuAnNl4c6jWu%2FnN3xjNgX%2F4N30BztjM8tsNoTsXscB7ldoimY2Bz9qYh4W4vnvSj9znA%2FLIGq9QzhKqQOwpR7jN5%2BvFHnOj&X-Amz-Signature=4fda68c0ebd2383f7a0769ffb7414d3aaae06a2efd229400e92c33e45ebf1979&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSW47X6H%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCla7rlut7P4IG6NISB8vc5TpSVitKHWlKYdQz7ZkQaAIhAOm%2FpHb2xoPTim271c4qdAensW5Fve8mhksM%2BoJ4QfeuKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYucEZIVnZpKF80bEq3ANU%2B%2Bo%2Fdi1F2a%2B4xAAKfDlFrA3wZ2ERyJbTu0vfh9OQsod%2FtFXErRZLOm6wl0ZB%2FYr2dpV17YJTehAQQ0dyrTr0m8ymvOaF9cNuTvgu7wNWoiwlMywieeVHR6Xm1FBG53C1YG6g8b1La3dpTjQPLDydhQ6sXO6VSWMhtQ5PZ%2BeM2Krv7k3FFehZjYvaCO9T8AxMJSioXIEa%2FmWRm5UoL7SNw1%2FDVyfv9QILTWEZkc6Jcw1l2HNwuaER54AY5KOtO1TSRXNi2U3HZVj7GC2%2Fi1xb3mDJHtzGvim%2FVVTlpl3r%2FXb9c6zryFRAhQxZEl8qjzICBeFj3Agqhg2vM0RwDO3h9zauH%2FRIHnbMWq5tsB9llAKZR3YkowvrlPJVrfXQjgzC3uqys3S8qi6%2BJtZQ%2F%2BBpnNqnz9bGdH0JKWz93HyD9H6zyXvfdgiZKvXe6soxvZdLZ5c8I5LDIBL%2BQjuO5zASbKcPqZrkCIixMK6JN332czNr%2FFyncQEkoPKJBVx3zAFXyI0wr8q%2BS2ZDu%2BfEKzS5QVNmwkV2TOLSAxOicFmrFihMBrLAIfFYL6nOm%2Bmmm5yCSIKJV87m%2BDY2EVE7mB4GpGMHEKtt6hAlBq8bbxxkV7OVsfbro1oK699oRjCD4v68BjqkAQzf3%2BqiJlqEkbjUwM%2BMGKEU8yV3ZYSwkRVl0Vbrtq%2B8dDJ0W13%2BKBIhiXfUoFQo3ndJLJP%2FEyCUy9tCWlz%2FcbxoGN55ZyLLLvUkJCH0xKZ1A4%2Bzu73XIqP1Q0OVNZuAnNl4c6jWu%2FnN3xjNgX%2F4N30BztjM8tsNoTsXscB7ldoimY2Bz9qYh4W4vnvSj9znA%2FLIGq9QzhKqQOwpR7jN5%2BvFHnOj&X-Amz-Signature=a33f22c54c043e6ac3117fabf39b595b0d0c6b428e9216099df1e36dfc7943d2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSW47X6H%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCla7rlut7P4IG6NISB8vc5TpSVitKHWlKYdQz7ZkQaAIhAOm%2FpHb2xoPTim271c4qdAensW5Fve8mhksM%2BoJ4QfeuKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYucEZIVnZpKF80bEq3ANU%2B%2Bo%2Fdi1F2a%2B4xAAKfDlFrA3wZ2ERyJbTu0vfh9OQsod%2FtFXErRZLOm6wl0ZB%2FYr2dpV17YJTehAQQ0dyrTr0m8ymvOaF9cNuTvgu7wNWoiwlMywieeVHR6Xm1FBG53C1YG6g8b1La3dpTjQPLDydhQ6sXO6VSWMhtQ5PZ%2BeM2Krv7k3FFehZjYvaCO9T8AxMJSioXIEa%2FmWRm5UoL7SNw1%2FDVyfv9QILTWEZkc6Jcw1l2HNwuaER54AY5KOtO1TSRXNi2U3HZVj7GC2%2Fi1xb3mDJHtzGvim%2FVVTlpl3r%2FXb9c6zryFRAhQxZEl8qjzICBeFj3Agqhg2vM0RwDO3h9zauH%2FRIHnbMWq5tsB9llAKZR3YkowvrlPJVrfXQjgzC3uqys3S8qi6%2BJtZQ%2F%2BBpnNqnz9bGdH0JKWz93HyD9H6zyXvfdgiZKvXe6soxvZdLZ5c8I5LDIBL%2BQjuO5zASbKcPqZrkCIixMK6JN332czNr%2FFyncQEkoPKJBVx3zAFXyI0wr8q%2BS2ZDu%2BfEKzS5QVNmwkV2TOLSAxOicFmrFihMBrLAIfFYL6nOm%2Bmmm5yCSIKJV87m%2BDY2EVE7mB4GpGMHEKtt6hAlBq8bbxxkV7OVsfbro1oK699oRjCD4v68BjqkAQzf3%2BqiJlqEkbjUwM%2BMGKEU8yV3ZYSwkRVl0Vbrtq%2B8dDJ0W13%2BKBIhiXfUoFQo3ndJLJP%2FEyCUy9tCWlz%2FcbxoGN55ZyLLLvUkJCH0xKZ1A4%2Bzu73XIqP1Q0OVNZuAnNl4c6jWu%2FnN3xjNgX%2F4N30BztjM8tsNoTsXscB7ldoimY2Bz9qYh4W4vnvSj9znA%2FLIGq9QzhKqQOwpR7jN5%2BvFHnOj&X-Amz-Signature=ad8f83cff1a038ea1b98b2576a599d03656923ca8d2ddb9316c938c64a3266c3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSW47X6H%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCla7rlut7P4IG6NISB8vc5TpSVitKHWlKYdQz7ZkQaAIhAOm%2FpHb2xoPTim271c4qdAensW5Fve8mhksM%2BoJ4QfeuKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYucEZIVnZpKF80bEq3ANU%2B%2Bo%2Fdi1F2a%2B4xAAKfDlFrA3wZ2ERyJbTu0vfh9OQsod%2FtFXErRZLOm6wl0ZB%2FYr2dpV17YJTehAQQ0dyrTr0m8ymvOaF9cNuTvgu7wNWoiwlMywieeVHR6Xm1FBG53C1YG6g8b1La3dpTjQPLDydhQ6sXO6VSWMhtQ5PZ%2BeM2Krv7k3FFehZjYvaCO9T8AxMJSioXIEa%2FmWRm5UoL7SNw1%2FDVyfv9QILTWEZkc6Jcw1l2HNwuaER54AY5KOtO1TSRXNi2U3HZVj7GC2%2Fi1xb3mDJHtzGvim%2FVVTlpl3r%2FXb9c6zryFRAhQxZEl8qjzICBeFj3Agqhg2vM0RwDO3h9zauH%2FRIHnbMWq5tsB9llAKZR3YkowvrlPJVrfXQjgzC3uqys3S8qi6%2BJtZQ%2F%2BBpnNqnz9bGdH0JKWz93HyD9H6zyXvfdgiZKvXe6soxvZdLZ5c8I5LDIBL%2BQjuO5zASbKcPqZrkCIixMK6JN332czNr%2FFyncQEkoPKJBVx3zAFXyI0wr8q%2BS2ZDu%2BfEKzS5QVNmwkV2TOLSAxOicFmrFihMBrLAIfFYL6nOm%2Bmmm5yCSIKJV87m%2BDY2EVE7mB4GpGMHEKtt6hAlBq8bbxxkV7OVsfbro1oK699oRjCD4v68BjqkAQzf3%2BqiJlqEkbjUwM%2BMGKEU8yV3ZYSwkRVl0Vbrtq%2B8dDJ0W13%2BKBIhiXfUoFQo3ndJLJP%2FEyCUy9tCWlz%2FcbxoGN55ZyLLLvUkJCH0xKZ1A4%2Bzu73XIqP1Q0OVNZuAnNl4c6jWu%2FnN3xjNgX%2F4N30BztjM8tsNoTsXscB7ldoimY2Bz9qYh4W4vnvSj9znA%2FLIGq9QzhKqQOwpR7jN5%2BvFHnOj&X-Amz-Signature=458deaec3736861808513b5020fece3058c4dfb8f582600ac7c4ab9ab5b18f66&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
