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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHLLMGFL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sHgRWyoLiYnx1mQlupfgrxj%2BrAPU2ahexKT7YZ5E7wIhAKuGOz63VHgtezecxAD0E%2BMMXz8mZolVZAXmljwVoELEKv8DCEwQABoMNjM3NDIzMTgzODA1IgxozwS0j%2B3Ynozbgecq3AOROnZRu5Z5I3nChkIb45KqJ8XAD4k9eC%2BQsGkIYIxJ38QINQFHf9woXsY%2FJs%2Fv0iVdHb7piXdCq4YUebdsxa6KSarckEa7mjHY0GLv06507r0qkJCzzwABRg0q2OT6mFK1qd99p%2BtsVNSTzacTTVvUspbVH4kq%2BWM%2FbJdkilhm4NKn9wAMa6mV7q4RjJBiItarmWfRnjiMMPFYi3ATuwf7V%2FqLvp%2BNLkbO%2BsIt3o%2FGbdwOYsCaLKo%2FynWT7cAOFNCym2PvNZFufxXW%2B46tp%2Fm2nXzJqKeQgPN2vMZNh4unYjKNY%2FzecvjnIpIUlBEGH%2FDmrL6YC0u07Te7Ro028pqxV0e6wPuL1rvrxe4zn5StJ5D8RCUSUn0MC1O%2FezYb4DLfdUlvqDzqelExLz7UKL079j1g3Oczn5mSHNB9w6Jx%2BIUeS%2B8Rbnb74ukf%2B20edCvRx86bnThH1yEn54a9txru94BoP%2FZW6SK%2BLi6LY0nlmv05We4vi3wTgP%2Bth16la7jAL2Fa3EVKotn5fIcYUzR%2BSOApq%2Bqcn0kskWDdDhwDsSSC3EKVtOOggHbiFpMpVCs%2F4VmcmTuAc404HXsScUjQYaX9gvVRhmJDUIPOWO2VdzJ7OUUoKmaMLmKt7TCZtOnABjqkAf3IQQhqd%2BXOTj3UyHl0ilvy%2BUg6ScSobGkvHWb3oDkNXwYdf6qjXtluaD3PzG%2Fr%2B39BrqFXJVD6He1aZyKOWcdwEZbguFaZ0cRsLMoX%2F3wv161mSUceBb%2Bq0XkQcAGgXbikUbh5GN47SeQ4gyU5bd2Q0dzlzgmeFJoWgMAolVpCBYCg4DmsNmR%2FJEItW3%2Ficndr64SClrGFJ1ead88a7w%2FeU3hg&X-Amz-Signature=be379e307232d8749f96730ef171e936d01c87844195e2a2db19aa4174e76cca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHLLMGFL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sHgRWyoLiYnx1mQlupfgrxj%2BrAPU2ahexKT7YZ5E7wIhAKuGOz63VHgtezecxAD0E%2BMMXz8mZolVZAXmljwVoELEKv8DCEwQABoMNjM3NDIzMTgzODA1IgxozwS0j%2B3Ynozbgecq3AOROnZRu5Z5I3nChkIb45KqJ8XAD4k9eC%2BQsGkIYIxJ38QINQFHf9woXsY%2FJs%2Fv0iVdHb7piXdCq4YUebdsxa6KSarckEa7mjHY0GLv06507r0qkJCzzwABRg0q2OT6mFK1qd99p%2BtsVNSTzacTTVvUspbVH4kq%2BWM%2FbJdkilhm4NKn9wAMa6mV7q4RjJBiItarmWfRnjiMMPFYi3ATuwf7V%2FqLvp%2BNLkbO%2BsIt3o%2FGbdwOYsCaLKo%2FynWT7cAOFNCym2PvNZFufxXW%2B46tp%2Fm2nXzJqKeQgPN2vMZNh4unYjKNY%2FzecvjnIpIUlBEGH%2FDmrL6YC0u07Te7Ro028pqxV0e6wPuL1rvrxe4zn5StJ5D8RCUSUn0MC1O%2FezYb4DLfdUlvqDzqelExLz7UKL079j1g3Oczn5mSHNB9w6Jx%2BIUeS%2B8Rbnb74ukf%2B20edCvRx86bnThH1yEn54a9txru94BoP%2FZW6SK%2BLi6LY0nlmv05We4vi3wTgP%2Bth16la7jAL2Fa3EVKotn5fIcYUzR%2BSOApq%2Bqcn0kskWDdDhwDsSSC3EKVtOOggHbiFpMpVCs%2F4VmcmTuAc404HXsScUjQYaX9gvVRhmJDUIPOWO2VdzJ7OUUoKmaMLmKt7TCZtOnABjqkAf3IQQhqd%2BXOTj3UyHl0ilvy%2BUg6ScSobGkvHWb3oDkNXwYdf6qjXtluaD3PzG%2Fr%2B39BrqFXJVD6He1aZyKOWcdwEZbguFaZ0cRsLMoX%2F3wv161mSUceBb%2Bq0XkQcAGgXbikUbh5GN47SeQ4gyU5bd2Q0dzlzgmeFJoWgMAolVpCBYCg4DmsNmR%2FJEItW3%2Ficndr64SClrGFJ1ead88a7w%2FeU3hg&X-Amz-Signature=2659003e41298cfa73c7df03d46f91ae374c7287fc4fa200a1c84bf94920c978&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHLLMGFL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sHgRWyoLiYnx1mQlupfgrxj%2BrAPU2ahexKT7YZ5E7wIhAKuGOz63VHgtezecxAD0E%2BMMXz8mZolVZAXmljwVoELEKv8DCEwQABoMNjM3NDIzMTgzODA1IgxozwS0j%2B3Ynozbgecq3AOROnZRu5Z5I3nChkIb45KqJ8XAD4k9eC%2BQsGkIYIxJ38QINQFHf9woXsY%2FJs%2Fv0iVdHb7piXdCq4YUebdsxa6KSarckEa7mjHY0GLv06507r0qkJCzzwABRg0q2OT6mFK1qd99p%2BtsVNSTzacTTVvUspbVH4kq%2BWM%2FbJdkilhm4NKn9wAMa6mV7q4RjJBiItarmWfRnjiMMPFYi3ATuwf7V%2FqLvp%2BNLkbO%2BsIt3o%2FGbdwOYsCaLKo%2FynWT7cAOFNCym2PvNZFufxXW%2B46tp%2Fm2nXzJqKeQgPN2vMZNh4unYjKNY%2FzecvjnIpIUlBEGH%2FDmrL6YC0u07Te7Ro028pqxV0e6wPuL1rvrxe4zn5StJ5D8RCUSUn0MC1O%2FezYb4DLfdUlvqDzqelExLz7UKL079j1g3Oczn5mSHNB9w6Jx%2BIUeS%2B8Rbnb74ukf%2B20edCvRx86bnThH1yEn54a9txru94BoP%2FZW6SK%2BLi6LY0nlmv05We4vi3wTgP%2Bth16la7jAL2Fa3EVKotn5fIcYUzR%2BSOApq%2Bqcn0kskWDdDhwDsSSC3EKVtOOggHbiFpMpVCs%2F4VmcmTuAc404HXsScUjQYaX9gvVRhmJDUIPOWO2VdzJ7OUUoKmaMLmKt7TCZtOnABjqkAf3IQQhqd%2BXOTj3UyHl0ilvy%2BUg6ScSobGkvHWb3oDkNXwYdf6qjXtluaD3PzG%2Fr%2B39BrqFXJVD6He1aZyKOWcdwEZbguFaZ0cRsLMoX%2F3wv161mSUceBb%2Bq0XkQcAGgXbikUbh5GN47SeQ4gyU5bd2Q0dzlzgmeFJoWgMAolVpCBYCg4DmsNmR%2FJEItW3%2Ficndr64SClrGFJ1ead88a7w%2FeU3hg&X-Amz-Signature=741ddcf87334b91e5b269526ae8357c729c6e6de8c87ad0f9c895bd55e14f0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHLLMGFL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sHgRWyoLiYnx1mQlupfgrxj%2BrAPU2ahexKT7YZ5E7wIhAKuGOz63VHgtezecxAD0E%2BMMXz8mZolVZAXmljwVoELEKv8DCEwQABoMNjM3NDIzMTgzODA1IgxozwS0j%2B3Ynozbgecq3AOROnZRu5Z5I3nChkIb45KqJ8XAD4k9eC%2BQsGkIYIxJ38QINQFHf9woXsY%2FJs%2Fv0iVdHb7piXdCq4YUebdsxa6KSarckEa7mjHY0GLv06507r0qkJCzzwABRg0q2OT6mFK1qd99p%2BtsVNSTzacTTVvUspbVH4kq%2BWM%2FbJdkilhm4NKn9wAMa6mV7q4RjJBiItarmWfRnjiMMPFYi3ATuwf7V%2FqLvp%2BNLkbO%2BsIt3o%2FGbdwOYsCaLKo%2FynWT7cAOFNCym2PvNZFufxXW%2B46tp%2Fm2nXzJqKeQgPN2vMZNh4unYjKNY%2FzecvjnIpIUlBEGH%2FDmrL6YC0u07Te7Ro028pqxV0e6wPuL1rvrxe4zn5StJ5D8RCUSUn0MC1O%2FezYb4DLfdUlvqDzqelExLz7UKL079j1g3Oczn5mSHNB9w6Jx%2BIUeS%2B8Rbnb74ukf%2B20edCvRx86bnThH1yEn54a9txru94BoP%2FZW6SK%2BLi6LY0nlmv05We4vi3wTgP%2Bth16la7jAL2Fa3EVKotn5fIcYUzR%2BSOApq%2Bqcn0kskWDdDhwDsSSC3EKVtOOggHbiFpMpVCs%2F4VmcmTuAc404HXsScUjQYaX9gvVRhmJDUIPOWO2VdzJ7OUUoKmaMLmKt7TCZtOnABjqkAf3IQQhqd%2BXOTj3UyHl0ilvy%2BUg6ScSobGkvHWb3oDkNXwYdf6qjXtluaD3PzG%2Fr%2B39BrqFXJVD6He1aZyKOWcdwEZbguFaZ0cRsLMoX%2F3wv161mSUceBb%2Bq0XkQcAGgXbikUbh5GN47SeQ4gyU5bd2Q0dzlzgmeFJoWgMAolVpCBYCg4DmsNmR%2FJEItW3%2Ficndr64SClrGFJ1ead88a7w%2FeU3hg&X-Amz-Signature=9d3aa579e1f0575dd03b8bef9bbb116817411e8d2bed5267cfd128ebfa681fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHLLMGFL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sHgRWyoLiYnx1mQlupfgrxj%2BrAPU2ahexKT7YZ5E7wIhAKuGOz63VHgtezecxAD0E%2BMMXz8mZolVZAXmljwVoELEKv8DCEwQABoMNjM3NDIzMTgzODA1IgxozwS0j%2B3Ynozbgecq3AOROnZRu5Z5I3nChkIb45KqJ8XAD4k9eC%2BQsGkIYIxJ38QINQFHf9woXsY%2FJs%2Fv0iVdHb7piXdCq4YUebdsxa6KSarckEa7mjHY0GLv06507r0qkJCzzwABRg0q2OT6mFK1qd99p%2BtsVNSTzacTTVvUspbVH4kq%2BWM%2FbJdkilhm4NKn9wAMa6mV7q4RjJBiItarmWfRnjiMMPFYi3ATuwf7V%2FqLvp%2BNLkbO%2BsIt3o%2FGbdwOYsCaLKo%2FynWT7cAOFNCym2PvNZFufxXW%2B46tp%2Fm2nXzJqKeQgPN2vMZNh4unYjKNY%2FzecvjnIpIUlBEGH%2FDmrL6YC0u07Te7Ro028pqxV0e6wPuL1rvrxe4zn5StJ5D8RCUSUn0MC1O%2FezYb4DLfdUlvqDzqelExLz7UKL079j1g3Oczn5mSHNB9w6Jx%2BIUeS%2B8Rbnb74ukf%2B20edCvRx86bnThH1yEn54a9txru94BoP%2FZW6SK%2BLi6LY0nlmv05We4vi3wTgP%2Bth16la7jAL2Fa3EVKotn5fIcYUzR%2BSOApq%2Bqcn0kskWDdDhwDsSSC3EKVtOOggHbiFpMpVCs%2F4VmcmTuAc404HXsScUjQYaX9gvVRhmJDUIPOWO2VdzJ7OUUoKmaMLmKt7TCZtOnABjqkAf3IQQhqd%2BXOTj3UyHl0ilvy%2BUg6ScSobGkvHWb3oDkNXwYdf6qjXtluaD3PzG%2Fr%2B39BrqFXJVD6He1aZyKOWcdwEZbguFaZ0cRsLMoX%2F3wv161mSUceBb%2Bq0XkQcAGgXbikUbh5GN47SeQ4gyU5bd2Q0dzlzgmeFJoWgMAolVpCBYCg4DmsNmR%2FJEItW3%2Ficndr64SClrGFJ1ead88a7w%2FeU3hg&X-Amz-Signature=ae4b5540e4ffd8173167b78e0c98786abfcf3091ccadfee90057fff6602c70a5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHLLMGFL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sHgRWyoLiYnx1mQlupfgrxj%2BrAPU2ahexKT7YZ5E7wIhAKuGOz63VHgtezecxAD0E%2BMMXz8mZolVZAXmljwVoELEKv8DCEwQABoMNjM3NDIzMTgzODA1IgxozwS0j%2B3Ynozbgecq3AOROnZRu5Z5I3nChkIb45KqJ8XAD4k9eC%2BQsGkIYIxJ38QINQFHf9woXsY%2FJs%2Fv0iVdHb7piXdCq4YUebdsxa6KSarckEa7mjHY0GLv06507r0qkJCzzwABRg0q2OT6mFK1qd99p%2BtsVNSTzacTTVvUspbVH4kq%2BWM%2FbJdkilhm4NKn9wAMa6mV7q4RjJBiItarmWfRnjiMMPFYi3ATuwf7V%2FqLvp%2BNLkbO%2BsIt3o%2FGbdwOYsCaLKo%2FynWT7cAOFNCym2PvNZFufxXW%2B46tp%2Fm2nXzJqKeQgPN2vMZNh4unYjKNY%2FzecvjnIpIUlBEGH%2FDmrL6YC0u07Te7Ro028pqxV0e6wPuL1rvrxe4zn5StJ5D8RCUSUn0MC1O%2FezYb4DLfdUlvqDzqelExLz7UKL079j1g3Oczn5mSHNB9w6Jx%2BIUeS%2B8Rbnb74ukf%2B20edCvRx86bnThH1yEn54a9txru94BoP%2FZW6SK%2BLi6LY0nlmv05We4vi3wTgP%2Bth16la7jAL2Fa3EVKotn5fIcYUzR%2BSOApq%2Bqcn0kskWDdDhwDsSSC3EKVtOOggHbiFpMpVCs%2F4VmcmTuAc404HXsScUjQYaX9gvVRhmJDUIPOWO2VdzJ7OUUoKmaMLmKt7TCZtOnABjqkAf3IQQhqd%2BXOTj3UyHl0ilvy%2BUg6ScSobGkvHWb3oDkNXwYdf6qjXtluaD3PzG%2Fr%2B39BrqFXJVD6He1aZyKOWcdwEZbguFaZ0cRsLMoX%2F3wv161mSUceBb%2Bq0XkQcAGgXbikUbh5GN47SeQ4gyU5bd2Q0dzlzgmeFJoWgMAolVpCBYCg4DmsNmR%2FJEItW3%2Ficndr64SClrGFJ1ead88a7w%2FeU3hg&X-Amz-Signature=98ab481efcc5d8c277836074feeeb5b958053723b35b6f188585055c38be2050&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHLLMGFL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sHgRWyoLiYnx1mQlupfgrxj%2BrAPU2ahexKT7YZ5E7wIhAKuGOz63VHgtezecxAD0E%2BMMXz8mZolVZAXmljwVoELEKv8DCEwQABoMNjM3NDIzMTgzODA1IgxozwS0j%2B3Ynozbgecq3AOROnZRu5Z5I3nChkIb45KqJ8XAD4k9eC%2BQsGkIYIxJ38QINQFHf9woXsY%2FJs%2Fv0iVdHb7piXdCq4YUebdsxa6KSarckEa7mjHY0GLv06507r0qkJCzzwABRg0q2OT6mFK1qd99p%2BtsVNSTzacTTVvUspbVH4kq%2BWM%2FbJdkilhm4NKn9wAMa6mV7q4RjJBiItarmWfRnjiMMPFYi3ATuwf7V%2FqLvp%2BNLkbO%2BsIt3o%2FGbdwOYsCaLKo%2FynWT7cAOFNCym2PvNZFufxXW%2B46tp%2Fm2nXzJqKeQgPN2vMZNh4unYjKNY%2FzecvjnIpIUlBEGH%2FDmrL6YC0u07Te7Ro028pqxV0e6wPuL1rvrxe4zn5StJ5D8RCUSUn0MC1O%2FezYb4DLfdUlvqDzqelExLz7UKL079j1g3Oczn5mSHNB9w6Jx%2BIUeS%2B8Rbnb74ukf%2B20edCvRx86bnThH1yEn54a9txru94BoP%2FZW6SK%2BLi6LY0nlmv05We4vi3wTgP%2Bth16la7jAL2Fa3EVKotn5fIcYUzR%2BSOApq%2Bqcn0kskWDdDhwDsSSC3EKVtOOggHbiFpMpVCs%2F4VmcmTuAc404HXsScUjQYaX9gvVRhmJDUIPOWO2VdzJ7OUUoKmaMLmKt7TCZtOnABjqkAf3IQQhqd%2BXOTj3UyHl0ilvy%2BUg6ScSobGkvHWb3oDkNXwYdf6qjXtluaD3PzG%2Fr%2B39BrqFXJVD6He1aZyKOWcdwEZbguFaZ0cRsLMoX%2F3wv161mSUceBb%2Bq0XkQcAGgXbikUbh5GN47SeQ4gyU5bd2Q0dzlzgmeFJoWgMAolVpCBYCg4DmsNmR%2FJEItW3%2Ficndr64SClrGFJ1ead88a7w%2FeU3hg&X-Amz-Signature=afac8155204a33ab06e8f936abfb7b5f935bf47e8ad6d07b0cbdaec627604b44&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
