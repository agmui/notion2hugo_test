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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU6N4DWB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDEWHFu%2F5kz1TSUYQCRIkvoyCVY08pT9WKEz3%2B1RvZefAiEAjA1hcqJP8Cn62X%2F4Qjt03p%2BTrfahH0C08wiXXC0yUnkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlzFNFbir%2BJveT00yrcAxg37cg2FSAQPFGA%2FnNL0MpDQ3vVjqciqRc9o2Ss1h5WqdtNSTeFRME%2BVWNipmFlz2VEVQIs2zMARFzjTCc6nlTJ0K98MVQCPL%2F68EaMgNatULD2NFYvBajEWQV%2FUOUcW9%2BZYlf5qw1nL7P00Plu0EHFpDc2tJhSNXaBx4sUT6ibTDYPoR%2FT9poGuZDRtXnfnoiZxy9BkA20m2cyzdujrjXB1smgoPzxZxibQqbUY6kmcyBce3pili53DnbIP1DS6cGVzoptdUm%2FcHBHSieYMRbA5gHgVHYhyWjkfaDf6hvC1nb7OehXvubFb7dxdBUBN6sPfrAEVSSE44YRT9IZp60ioRnc1zn8krf5agjWexa9Oe9VAr7aQ3rbClSuvIAxU3Vonu283MknTrLwBfHI4Zhdy3blcXo6dENoS3eUS4tnjht0Lj9X5Aq9ZveYsSAToB8uLROb0my1W7FG9FbytP%2FK81G%2Bpd385zvTN3hUK3ipRVQKsO2XRVfuuvDXNIwzumaU28esi6ZRwzwKN7Ts3Qxi8ewLdNBH%2FmoqLQhpG%2FnaNZOyRK44FPofPzFnWBxJ%2Bl1ZFfDR0lByxGPAcLMbSjGQy7ytnUSWTelPxhNuMKD5oGIYA2pYIJMgAtzzMNWZ0MAGOqUB2%2BRjxlqTxQm4gJVee4axuKQWWgzN3N1k2jhAKyLzjKXb6LeG5MuL8gNSnuwsq4vY0snAKa%2B8DFJ6o7pN5CpjBZVA0VMFAfHszWW8c%2B9l5b1IqqfIvFqWknp7CogKnS9OVkHhVFaJmNAU1JMuOkkI8pzh%2F4fP2JsTp8D7UCtWSblaLCY5vuiUzFpTG8Ws%2BS5UKU2WFewRL1jbf6N0237n5OGiEJ0%2B&X-Amz-Signature=9e4b3a198368c6fa3428d67b907fba128a7d7c19574a48a68963dcb6dc614476&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU6N4DWB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDEWHFu%2F5kz1TSUYQCRIkvoyCVY08pT9WKEz3%2B1RvZefAiEAjA1hcqJP8Cn62X%2F4Qjt03p%2BTrfahH0C08wiXXC0yUnkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlzFNFbir%2BJveT00yrcAxg37cg2FSAQPFGA%2FnNL0MpDQ3vVjqciqRc9o2Ss1h5WqdtNSTeFRME%2BVWNipmFlz2VEVQIs2zMARFzjTCc6nlTJ0K98MVQCPL%2F68EaMgNatULD2NFYvBajEWQV%2FUOUcW9%2BZYlf5qw1nL7P00Plu0EHFpDc2tJhSNXaBx4sUT6ibTDYPoR%2FT9poGuZDRtXnfnoiZxy9BkA20m2cyzdujrjXB1smgoPzxZxibQqbUY6kmcyBce3pili53DnbIP1DS6cGVzoptdUm%2FcHBHSieYMRbA5gHgVHYhyWjkfaDf6hvC1nb7OehXvubFb7dxdBUBN6sPfrAEVSSE44YRT9IZp60ioRnc1zn8krf5agjWexa9Oe9VAr7aQ3rbClSuvIAxU3Vonu283MknTrLwBfHI4Zhdy3blcXo6dENoS3eUS4tnjht0Lj9X5Aq9ZveYsSAToB8uLROb0my1W7FG9FbytP%2FK81G%2Bpd385zvTN3hUK3ipRVQKsO2XRVfuuvDXNIwzumaU28esi6ZRwzwKN7Ts3Qxi8ewLdNBH%2FmoqLQhpG%2FnaNZOyRK44FPofPzFnWBxJ%2Bl1ZFfDR0lByxGPAcLMbSjGQy7ytnUSWTelPxhNuMKD5oGIYA2pYIJMgAtzzMNWZ0MAGOqUB2%2BRjxlqTxQm4gJVee4axuKQWWgzN3N1k2jhAKyLzjKXb6LeG5MuL8gNSnuwsq4vY0snAKa%2B8DFJ6o7pN5CpjBZVA0VMFAfHszWW8c%2B9l5b1IqqfIvFqWknp7CogKnS9OVkHhVFaJmNAU1JMuOkkI8pzh%2F4fP2JsTp8D7UCtWSblaLCY5vuiUzFpTG8Ws%2BS5UKU2WFewRL1jbf6N0237n5OGiEJ0%2B&X-Amz-Signature=75c891d407fd967d9d71e107d265841259ef676a8817b3fee4444be877f1829d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU6N4DWB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDEWHFu%2F5kz1TSUYQCRIkvoyCVY08pT9WKEz3%2B1RvZefAiEAjA1hcqJP8Cn62X%2F4Qjt03p%2BTrfahH0C08wiXXC0yUnkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlzFNFbir%2BJveT00yrcAxg37cg2FSAQPFGA%2FnNL0MpDQ3vVjqciqRc9o2Ss1h5WqdtNSTeFRME%2BVWNipmFlz2VEVQIs2zMARFzjTCc6nlTJ0K98MVQCPL%2F68EaMgNatULD2NFYvBajEWQV%2FUOUcW9%2BZYlf5qw1nL7P00Plu0EHFpDc2tJhSNXaBx4sUT6ibTDYPoR%2FT9poGuZDRtXnfnoiZxy9BkA20m2cyzdujrjXB1smgoPzxZxibQqbUY6kmcyBce3pili53DnbIP1DS6cGVzoptdUm%2FcHBHSieYMRbA5gHgVHYhyWjkfaDf6hvC1nb7OehXvubFb7dxdBUBN6sPfrAEVSSE44YRT9IZp60ioRnc1zn8krf5agjWexa9Oe9VAr7aQ3rbClSuvIAxU3Vonu283MknTrLwBfHI4Zhdy3blcXo6dENoS3eUS4tnjht0Lj9X5Aq9ZveYsSAToB8uLROb0my1W7FG9FbytP%2FK81G%2Bpd385zvTN3hUK3ipRVQKsO2XRVfuuvDXNIwzumaU28esi6ZRwzwKN7Ts3Qxi8ewLdNBH%2FmoqLQhpG%2FnaNZOyRK44FPofPzFnWBxJ%2Bl1ZFfDR0lByxGPAcLMbSjGQy7ytnUSWTelPxhNuMKD5oGIYA2pYIJMgAtzzMNWZ0MAGOqUB2%2BRjxlqTxQm4gJVee4axuKQWWgzN3N1k2jhAKyLzjKXb6LeG5MuL8gNSnuwsq4vY0snAKa%2B8DFJ6o7pN5CpjBZVA0VMFAfHszWW8c%2B9l5b1IqqfIvFqWknp7CogKnS9OVkHhVFaJmNAU1JMuOkkI8pzh%2F4fP2JsTp8D7UCtWSblaLCY5vuiUzFpTG8Ws%2BS5UKU2WFewRL1jbf6N0237n5OGiEJ0%2B&X-Amz-Signature=cfc322c3c59542e027908e8b8a5779271e6a76970cd54320567f1490240f62ba&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU6N4DWB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDEWHFu%2F5kz1TSUYQCRIkvoyCVY08pT9WKEz3%2B1RvZefAiEAjA1hcqJP8Cn62X%2F4Qjt03p%2BTrfahH0C08wiXXC0yUnkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlzFNFbir%2BJveT00yrcAxg37cg2FSAQPFGA%2FnNL0MpDQ3vVjqciqRc9o2Ss1h5WqdtNSTeFRME%2BVWNipmFlz2VEVQIs2zMARFzjTCc6nlTJ0K98MVQCPL%2F68EaMgNatULD2NFYvBajEWQV%2FUOUcW9%2BZYlf5qw1nL7P00Plu0EHFpDc2tJhSNXaBx4sUT6ibTDYPoR%2FT9poGuZDRtXnfnoiZxy9BkA20m2cyzdujrjXB1smgoPzxZxibQqbUY6kmcyBce3pili53DnbIP1DS6cGVzoptdUm%2FcHBHSieYMRbA5gHgVHYhyWjkfaDf6hvC1nb7OehXvubFb7dxdBUBN6sPfrAEVSSE44YRT9IZp60ioRnc1zn8krf5agjWexa9Oe9VAr7aQ3rbClSuvIAxU3Vonu283MknTrLwBfHI4Zhdy3blcXo6dENoS3eUS4tnjht0Lj9X5Aq9ZveYsSAToB8uLROb0my1W7FG9FbytP%2FK81G%2Bpd385zvTN3hUK3ipRVQKsO2XRVfuuvDXNIwzumaU28esi6ZRwzwKN7Ts3Qxi8ewLdNBH%2FmoqLQhpG%2FnaNZOyRK44FPofPzFnWBxJ%2Bl1ZFfDR0lByxGPAcLMbSjGQy7ytnUSWTelPxhNuMKD5oGIYA2pYIJMgAtzzMNWZ0MAGOqUB2%2BRjxlqTxQm4gJVee4axuKQWWgzN3N1k2jhAKyLzjKXb6LeG5MuL8gNSnuwsq4vY0snAKa%2B8DFJ6o7pN5CpjBZVA0VMFAfHszWW8c%2B9l5b1IqqfIvFqWknp7CogKnS9OVkHhVFaJmNAU1JMuOkkI8pzh%2F4fP2JsTp8D7UCtWSblaLCY5vuiUzFpTG8Ws%2BS5UKU2WFewRL1jbf6N0237n5OGiEJ0%2B&X-Amz-Signature=ad92a7afc4f5b7e0209ffa123f1b55585bf50ff668d390e95a4207213a498516&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU6N4DWB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDEWHFu%2F5kz1TSUYQCRIkvoyCVY08pT9WKEz3%2B1RvZefAiEAjA1hcqJP8Cn62X%2F4Qjt03p%2BTrfahH0C08wiXXC0yUnkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlzFNFbir%2BJveT00yrcAxg37cg2FSAQPFGA%2FnNL0MpDQ3vVjqciqRc9o2Ss1h5WqdtNSTeFRME%2BVWNipmFlz2VEVQIs2zMARFzjTCc6nlTJ0K98MVQCPL%2F68EaMgNatULD2NFYvBajEWQV%2FUOUcW9%2BZYlf5qw1nL7P00Plu0EHFpDc2tJhSNXaBx4sUT6ibTDYPoR%2FT9poGuZDRtXnfnoiZxy9BkA20m2cyzdujrjXB1smgoPzxZxibQqbUY6kmcyBce3pili53DnbIP1DS6cGVzoptdUm%2FcHBHSieYMRbA5gHgVHYhyWjkfaDf6hvC1nb7OehXvubFb7dxdBUBN6sPfrAEVSSE44YRT9IZp60ioRnc1zn8krf5agjWexa9Oe9VAr7aQ3rbClSuvIAxU3Vonu283MknTrLwBfHI4Zhdy3blcXo6dENoS3eUS4tnjht0Lj9X5Aq9ZveYsSAToB8uLROb0my1W7FG9FbytP%2FK81G%2Bpd385zvTN3hUK3ipRVQKsO2XRVfuuvDXNIwzumaU28esi6ZRwzwKN7Ts3Qxi8ewLdNBH%2FmoqLQhpG%2FnaNZOyRK44FPofPzFnWBxJ%2Bl1ZFfDR0lByxGPAcLMbSjGQy7ytnUSWTelPxhNuMKD5oGIYA2pYIJMgAtzzMNWZ0MAGOqUB2%2BRjxlqTxQm4gJVee4axuKQWWgzN3N1k2jhAKyLzjKXb6LeG5MuL8gNSnuwsq4vY0snAKa%2B8DFJ6o7pN5CpjBZVA0VMFAfHszWW8c%2B9l5b1IqqfIvFqWknp7CogKnS9OVkHhVFaJmNAU1JMuOkkI8pzh%2F4fP2JsTp8D7UCtWSblaLCY5vuiUzFpTG8Ws%2BS5UKU2WFewRL1jbf6N0237n5OGiEJ0%2B&X-Amz-Signature=a249452ce2f1fcf19c76c2af1d8b4c05d6e7c1038e04a55272e4c6064ab87641&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU6N4DWB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDEWHFu%2F5kz1TSUYQCRIkvoyCVY08pT9WKEz3%2B1RvZefAiEAjA1hcqJP8Cn62X%2F4Qjt03p%2BTrfahH0C08wiXXC0yUnkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlzFNFbir%2BJveT00yrcAxg37cg2FSAQPFGA%2FnNL0MpDQ3vVjqciqRc9o2Ss1h5WqdtNSTeFRME%2BVWNipmFlz2VEVQIs2zMARFzjTCc6nlTJ0K98MVQCPL%2F68EaMgNatULD2NFYvBajEWQV%2FUOUcW9%2BZYlf5qw1nL7P00Plu0EHFpDc2tJhSNXaBx4sUT6ibTDYPoR%2FT9poGuZDRtXnfnoiZxy9BkA20m2cyzdujrjXB1smgoPzxZxibQqbUY6kmcyBce3pili53DnbIP1DS6cGVzoptdUm%2FcHBHSieYMRbA5gHgVHYhyWjkfaDf6hvC1nb7OehXvubFb7dxdBUBN6sPfrAEVSSE44YRT9IZp60ioRnc1zn8krf5agjWexa9Oe9VAr7aQ3rbClSuvIAxU3Vonu283MknTrLwBfHI4Zhdy3blcXo6dENoS3eUS4tnjht0Lj9X5Aq9ZveYsSAToB8uLROb0my1W7FG9FbytP%2FK81G%2Bpd385zvTN3hUK3ipRVQKsO2XRVfuuvDXNIwzumaU28esi6ZRwzwKN7Ts3Qxi8ewLdNBH%2FmoqLQhpG%2FnaNZOyRK44FPofPzFnWBxJ%2Bl1ZFfDR0lByxGPAcLMbSjGQy7ytnUSWTelPxhNuMKD5oGIYA2pYIJMgAtzzMNWZ0MAGOqUB2%2BRjxlqTxQm4gJVee4axuKQWWgzN3N1k2jhAKyLzjKXb6LeG5MuL8gNSnuwsq4vY0snAKa%2B8DFJ6o7pN5CpjBZVA0VMFAfHszWW8c%2B9l5b1IqqfIvFqWknp7CogKnS9OVkHhVFaJmNAU1JMuOkkI8pzh%2F4fP2JsTp8D7UCtWSblaLCY5vuiUzFpTG8Ws%2BS5UKU2WFewRL1jbf6N0237n5OGiEJ0%2B&X-Amz-Signature=0549c6e56f3709826b4901780664d1650a52dca9f15d2cfa5c284776772330e4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU6N4DWB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDEWHFu%2F5kz1TSUYQCRIkvoyCVY08pT9WKEz3%2B1RvZefAiEAjA1hcqJP8Cn62X%2F4Qjt03p%2BTrfahH0C08wiXXC0yUnkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlzFNFbir%2BJveT00yrcAxg37cg2FSAQPFGA%2FnNL0MpDQ3vVjqciqRc9o2Ss1h5WqdtNSTeFRME%2BVWNipmFlz2VEVQIs2zMARFzjTCc6nlTJ0K98MVQCPL%2F68EaMgNatULD2NFYvBajEWQV%2FUOUcW9%2BZYlf5qw1nL7P00Plu0EHFpDc2tJhSNXaBx4sUT6ibTDYPoR%2FT9poGuZDRtXnfnoiZxy9BkA20m2cyzdujrjXB1smgoPzxZxibQqbUY6kmcyBce3pili53DnbIP1DS6cGVzoptdUm%2FcHBHSieYMRbA5gHgVHYhyWjkfaDf6hvC1nb7OehXvubFb7dxdBUBN6sPfrAEVSSE44YRT9IZp60ioRnc1zn8krf5agjWexa9Oe9VAr7aQ3rbClSuvIAxU3Vonu283MknTrLwBfHI4Zhdy3blcXo6dENoS3eUS4tnjht0Lj9X5Aq9ZveYsSAToB8uLROb0my1W7FG9FbytP%2FK81G%2Bpd385zvTN3hUK3ipRVQKsO2XRVfuuvDXNIwzumaU28esi6ZRwzwKN7Ts3Qxi8ewLdNBH%2FmoqLQhpG%2FnaNZOyRK44FPofPzFnWBxJ%2Bl1ZFfDR0lByxGPAcLMbSjGQy7ytnUSWTelPxhNuMKD5oGIYA2pYIJMgAtzzMNWZ0MAGOqUB2%2BRjxlqTxQm4gJVee4axuKQWWgzN3N1k2jhAKyLzjKXb6LeG5MuL8gNSnuwsq4vY0snAKa%2B8DFJ6o7pN5CpjBZVA0VMFAfHszWW8c%2B9l5b1IqqfIvFqWknp7CogKnS9OVkHhVFaJmNAU1JMuOkkI8pzh%2F4fP2JsTp8D7UCtWSblaLCY5vuiUzFpTG8Ws%2BS5UKU2WFewRL1jbf6N0237n5OGiEJ0%2B&X-Amz-Signature=891291cb9d8ab1018a62192ad27eeef417d8c1f1e56eee9f5cec7fede508e897&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
