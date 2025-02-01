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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLSLD3J%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV9e9U%2BjTAv3OHkKVRMBrbWegkEdvITQNPEeN3ejqw1AIgbwVwByVEtoisVd0zIFmPSYcGrXwgYJNRvtxvbtGIvY4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPKHw5uE8QHrSdMXSrcA6D5fPXyAVJInKyyGIH%2BudrnsqrY9QYMi4RzCWDjE6ZzEGU0Plz3gEjs8KwM4a1UFEUQul%2BbXbX8wHNrzpqcbq%2FL6J4IwZ0gJpF9SvtGVW41ZvRBhAFGWhaZ315pbkzO5dKcG%2By5EIOlQHAv%2BVgep9cMoCMHP7xIbS9P1zG0i8TKxCxiKJMTD4OdL8PPV%2BREtEXaFOskfqE7V9oW8HOOYHmeRkmDpUczr0yRIliu4Ka1BHTelUqWQHdLdJFA5XHWWX7bpEAFAz6vs3R4ejc08hJKK0STd9V9SdsCp4LP1fyqvNo1MkFefeSxSXvdCfe9TAAdUgU24izAebpSf9Oo8jL0PyAZrK%2BDyINodAuviQs81uKS4Zc3nkwAyDYtghiL1sApTHppySVosm81IminWoyBGUkXuJYc8cqXGjBRpHNxJFdvJZNIZ772OPDs6n3AYzDJpgdd6yNAdT9bC%2BDoa6S7ccvQUwQ8PRrhJwTbtb9Y3pDzk9Lw%2Fr62mIUiJ199ilCSidj25Z6J8LvSvgY%2FcQl%2FPyxfegqTe847OxW%2F3AKjCmAhRx6ArWghzhwWSprsCr6ftldgj9Rcz6R0UqKnOsCnYJO7SpRnkPWXjLD3j8rNf3KriPtbhn5HdYmuMJCm97wGOqUB54TWBRezJKxyWdjoJr8R1JHDlMKtkFSEPXqWNy9FGEu%2BjsJDv70c6bJqE6YNGpj5aM19DyFqqrBI7DB0wlaMNQUIxhTP%2Bi3RW9dXJN%2FnuvK740V5zgHWJXvdEH%2Bekd5KcG3Ag59FKugbYO8qKRjKHmGZR80t5wLxMLaOoBQqkbIHiVVhxZ4o7fFeIx4ulFbdxQL3Tj9i3JfP2V2%2BqNvpi0oMXX7q&X-Amz-Signature=a76c3f3254aefea540e3000dc4c16e8b8f87e9737bc54ccf6378eaebb789dcb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLSLD3J%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV9e9U%2BjTAv3OHkKVRMBrbWegkEdvITQNPEeN3ejqw1AIgbwVwByVEtoisVd0zIFmPSYcGrXwgYJNRvtxvbtGIvY4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPKHw5uE8QHrSdMXSrcA6D5fPXyAVJInKyyGIH%2BudrnsqrY9QYMi4RzCWDjE6ZzEGU0Plz3gEjs8KwM4a1UFEUQul%2BbXbX8wHNrzpqcbq%2FL6J4IwZ0gJpF9SvtGVW41ZvRBhAFGWhaZ315pbkzO5dKcG%2By5EIOlQHAv%2BVgep9cMoCMHP7xIbS9P1zG0i8TKxCxiKJMTD4OdL8PPV%2BREtEXaFOskfqE7V9oW8HOOYHmeRkmDpUczr0yRIliu4Ka1BHTelUqWQHdLdJFA5XHWWX7bpEAFAz6vs3R4ejc08hJKK0STd9V9SdsCp4LP1fyqvNo1MkFefeSxSXvdCfe9TAAdUgU24izAebpSf9Oo8jL0PyAZrK%2BDyINodAuviQs81uKS4Zc3nkwAyDYtghiL1sApTHppySVosm81IminWoyBGUkXuJYc8cqXGjBRpHNxJFdvJZNIZ772OPDs6n3AYzDJpgdd6yNAdT9bC%2BDoa6S7ccvQUwQ8PRrhJwTbtb9Y3pDzk9Lw%2Fr62mIUiJ199ilCSidj25Z6J8LvSvgY%2FcQl%2FPyxfegqTe847OxW%2F3AKjCmAhRx6ArWghzhwWSprsCr6ftldgj9Rcz6R0UqKnOsCnYJO7SpRnkPWXjLD3j8rNf3KriPtbhn5HdYmuMJCm97wGOqUB54TWBRezJKxyWdjoJr8R1JHDlMKtkFSEPXqWNy9FGEu%2BjsJDv70c6bJqE6YNGpj5aM19DyFqqrBI7DB0wlaMNQUIxhTP%2Bi3RW9dXJN%2FnuvK740V5zgHWJXvdEH%2Bekd5KcG3Ag59FKugbYO8qKRjKHmGZR80t5wLxMLaOoBQqkbIHiVVhxZ4o7fFeIx4ulFbdxQL3Tj9i3JfP2V2%2BqNvpi0oMXX7q&X-Amz-Signature=696f8132965c571f3848dcc62458b196cdec15879f5555ea87fc8c810c13a0d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLSLD3J%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV9e9U%2BjTAv3OHkKVRMBrbWegkEdvITQNPEeN3ejqw1AIgbwVwByVEtoisVd0zIFmPSYcGrXwgYJNRvtxvbtGIvY4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPKHw5uE8QHrSdMXSrcA6D5fPXyAVJInKyyGIH%2BudrnsqrY9QYMi4RzCWDjE6ZzEGU0Plz3gEjs8KwM4a1UFEUQul%2BbXbX8wHNrzpqcbq%2FL6J4IwZ0gJpF9SvtGVW41ZvRBhAFGWhaZ315pbkzO5dKcG%2By5EIOlQHAv%2BVgep9cMoCMHP7xIbS9P1zG0i8TKxCxiKJMTD4OdL8PPV%2BREtEXaFOskfqE7V9oW8HOOYHmeRkmDpUczr0yRIliu4Ka1BHTelUqWQHdLdJFA5XHWWX7bpEAFAz6vs3R4ejc08hJKK0STd9V9SdsCp4LP1fyqvNo1MkFefeSxSXvdCfe9TAAdUgU24izAebpSf9Oo8jL0PyAZrK%2BDyINodAuviQs81uKS4Zc3nkwAyDYtghiL1sApTHppySVosm81IminWoyBGUkXuJYc8cqXGjBRpHNxJFdvJZNIZ772OPDs6n3AYzDJpgdd6yNAdT9bC%2BDoa6S7ccvQUwQ8PRrhJwTbtb9Y3pDzk9Lw%2Fr62mIUiJ199ilCSidj25Z6J8LvSvgY%2FcQl%2FPyxfegqTe847OxW%2F3AKjCmAhRx6ArWghzhwWSprsCr6ftldgj9Rcz6R0UqKnOsCnYJO7SpRnkPWXjLD3j8rNf3KriPtbhn5HdYmuMJCm97wGOqUB54TWBRezJKxyWdjoJr8R1JHDlMKtkFSEPXqWNy9FGEu%2BjsJDv70c6bJqE6YNGpj5aM19DyFqqrBI7DB0wlaMNQUIxhTP%2Bi3RW9dXJN%2FnuvK740V5zgHWJXvdEH%2Bekd5KcG3Ag59FKugbYO8qKRjKHmGZR80t5wLxMLaOoBQqkbIHiVVhxZ4o7fFeIx4ulFbdxQL3Tj9i3JfP2V2%2BqNvpi0oMXX7q&X-Amz-Signature=4428a5fe58c9b5c52d5ad22f7d65ff79a6f2a422e9c1377d1c9766609893ddf2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLSLD3J%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV9e9U%2BjTAv3OHkKVRMBrbWegkEdvITQNPEeN3ejqw1AIgbwVwByVEtoisVd0zIFmPSYcGrXwgYJNRvtxvbtGIvY4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPKHw5uE8QHrSdMXSrcA6D5fPXyAVJInKyyGIH%2BudrnsqrY9QYMi4RzCWDjE6ZzEGU0Plz3gEjs8KwM4a1UFEUQul%2BbXbX8wHNrzpqcbq%2FL6J4IwZ0gJpF9SvtGVW41ZvRBhAFGWhaZ315pbkzO5dKcG%2By5EIOlQHAv%2BVgep9cMoCMHP7xIbS9P1zG0i8TKxCxiKJMTD4OdL8PPV%2BREtEXaFOskfqE7V9oW8HOOYHmeRkmDpUczr0yRIliu4Ka1BHTelUqWQHdLdJFA5XHWWX7bpEAFAz6vs3R4ejc08hJKK0STd9V9SdsCp4LP1fyqvNo1MkFefeSxSXvdCfe9TAAdUgU24izAebpSf9Oo8jL0PyAZrK%2BDyINodAuviQs81uKS4Zc3nkwAyDYtghiL1sApTHppySVosm81IminWoyBGUkXuJYc8cqXGjBRpHNxJFdvJZNIZ772OPDs6n3AYzDJpgdd6yNAdT9bC%2BDoa6S7ccvQUwQ8PRrhJwTbtb9Y3pDzk9Lw%2Fr62mIUiJ199ilCSidj25Z6J8LvSvgY%2FcQl%2FPyxfegqTe847OxW%2F3AKjCmAhRx6ArWghzhwWSprsCr6ftldgj9Rcz6R0UqKnOsCnYJO7SpRnkPWXjLD3j8rNf3KriPtbhn5HdYmuMJCm97wGOqUB54TWBRezJKxyWdjoJr8R1JHDlMKtkFSEPXqWNy9FGEu%2BjsJDv70c6bJqE6YNGpj5aM19DyFqqrBI7DB0wlaMNQUIxhTP%2Bi3RW9dXJN%2FnuvK740V5zgHWJXvdEH%2Bekd5KcG3Ag59FKugbYO8qKRjKHmGZR80t5wLxMLaOoBQqkbIHiVVhxZ4o7fFeIx4ulFbdxQL3Tj9i3JfP2V2%2BqNvpi0oMXX7q&X-Amz-Signature=5e13ece06ba94ab48f7860fb09d1a9dee10c511e6eeca8fc54a5c8bd5a06c811&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLSLD3J%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV9e9U%2BjTAv3OHkKVRMBrbWegkEdvITQNPEeN3ejqw1AIgbwVwByVEtoisVd0zIFmPSYcGrXwgYJNRvtxvbtGIvY4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPKHw5uE8QHrSdMXSrcA6D5fPXyAVJInKyyGIH%2BudrnsqrY9QYMi4RzCWDjE6ZzEGU0Plz3gEjs8KwM4a1UFEUQul%2BbXbX8wHNrzpqcbq%2FL6J4IwZ0gJpF9SvtGVW41ZvRBhAFGWhaZ315pbkzO5dKcG%2By5EIOlQHAv%2BVgep9cMoCMHP7xIbS9P1zG0i8TKxCxiKJMTD4OdL8PPV%2BREtEXaFOskfqE7V9oW8HOOYHmeRkmDpUczr0yRIliu4Ka1BHTelUqWQHdLdJFA5XHWWX7bpEAFAz6vs3R4ejc08hJKK0STd9V9SdsCp4LP1fyqvNo1MkFefeSxSXvdCfe9TAAdUgU24izAebpSf9Oo8jL0PyAZrK%2BDyINodAuviQs81uKS4Zc3nkwAyDYtghiL1sApTHppySVosm81IminWoyBGUkXuJYc8cqXGjBRpHNxJFdvJZNIZ772OPDs6n3AYzDJpgdd6yNAdT9bC%2BDoa6S7ccvQUwQ8PRrhJwTbtb9Y3pDzk9Lw%2Fr62mIUiJ199ilCSidj25Z6J8LvSvgY%2FcQl%2FPyxfegqTe847OxW%2F3AKjCmAhRx6ArWghzhwWSprsCr6ftldgj9Rcz6R0UqKnOsCnYJO7SpRnkPWXjLD3j8rNf3KriPtbhn5HdYmuMJCm97wGOqUB54TWBRezJKxyWdjoJr8R1JHDlMKtkFSEPXqWNy9FGEu%2BjsJDv70c6bJqE6YNGpj5aM19DyFqqrBI7DB0wlaMNQUIxhTP%2Bi3RW9dXJN%2FnuvK740V5zgHWJXvdEH%2Bekd5KcG3Ag59FKugbYO8qKRjKHmGZR80t5wLxMLaOoBQqkbIHiVVhxZ4o7fFeIx4ulFbdxQL3Tj9i3JfP2V2%2BqNvpi0oMXX7q&X-Amz-Signature=2aa768aa3424090019d02c4dcc76addbeb50bdffc7059c1efa1d842512a2fd20&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLSLD3J%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV9e9U%2BjTAv3OHkKVRMBrbWegkEdvITQNPEeN3ejqw1AIgbwVwByVEtoisVd0zIFmPSYcGrXwgYJNRvtxvbtGIvY4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPKHw5uE8QHrSdMXSrcA6D5fPXyAVJInKyyGIH%2BudrnsqrY9QYMi4RzCWDjE6ZzEGU0Plz3gEjs8KwM4a1UFEUQul%2BbXbX8wHNrzpqcbq%2FL6J4IwZ0gJpF9SvtGVW41ZvRBhAFGWhaZ315pbkzO5dKcG%2By5EIOlQHAv%2BVgep9cMoCMHP7xIbS9P1zG0i8TKxCxiKJMTD4OdL8PPV%2BREtEXaFOskfqE7V9oW8HOOYHmeRkmDpUczr0yRIliu4Ka1BHTelUqWQHdLdJFA5XHWWX7bpEAFAz6vs3R4ejc08hJKK0STd9V9SdsCp4LP1fyqvNo1MkFefeSxSXvdCfe9TAAdUgU24izAebpSf9Oo8jL0PyAZrK%2BDyINodAuviQs81uKS4Zc3nkwAyDYtghiL1sApTHppySVosm81IminWoyBGUkXuJYc8cqXGjBRpHNxJFdvJZNIZ772OPDs6n3AYzDJpgdd6yNAdT9bC%2BDoa6S7ccvQUwQ8PRrhJwTbtb9Y3pDzk9Lw%2Fr62mIUiJ199ilCSidj25Z6J8LvSvgY%2FcQl%2FPyxfegqTe847OxW%2F3AKjCmAhRx6ArWghzhwWSprsCr6ftldgj9Rcz6R0UqKnOsCnYJO7SpRnkPWXjLD3j8rNf3KriPtbhn5HdYmuMJCm97wGOqUB54TWBRezJKxyWdjoJr8R1JHDlMKtkFSEPXqWNy9FGEu%2BjsJDv70c6bJqE6YNGpj5aM19DyFqqrBI7DB0wlaMNQUIxhTP%2Bi3RW9dXJN%2FnuvK740V5zgHWJXvdEH%2Bekd5KcG3Ag59FKugbYO8qKRjKHmGZR80t5wLxMLaOoBQqkbIHiVVhxZ4o7fFeIx4ulFbdxQL3Tj9i3JfP2V2%2BqNvpi0oMXX7q&X-Amz-Signature=abc9e567dbdd114196ee1b3e904bc2d3eef69b651eda73bcaf3cf79adba29356&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLSLD3J%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV9e9U%2BjTAv3OHkKVRMBrbWegkEdvITQNPEeN3ejqw1AIgbwVwByVEtoisVd0zIFmPSYcGrXwgYJNRvtxvbtGIvY4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPKHw5uE8QHrSdMXSrcA6D5fPXyAVJInKyyGIH%2BudrnsqrY9QYMi4RzCWDjE6ZzEGU0Plz3gEjs8KwM4a1UFEUQul%2BbXbX8wHNrzpqcbq%2FL6J4IwZ0gJpF9SvtGVW41ZvRBhAFGWhaZ315pbkzO5dKcG%2By5EIOlQHAv%2BVgep9cMoCMHP7xIbS9P1zG0i8TKxCxiKJMTD4OdL8PPV%2BREtEXaFOskfqE7V9oW8HOOYHmeRkmDpUczr0yRIliu4Ka1BHTelUqWQHdLdJFA5XHWWX7bpEAFAz6vs3R4ejc08hJKK0STd9V9SdsCp4LP1fyqvNo1MkFefeSxSXvdCfe9TAAdUgU24izAebpSf9Oo8jL0PyAZrK%2BDyINodAuviQs81uKS4Zc3nkwAyDYtghiL1sApTHppySVosm81IminWoyBGUkXuJYc8cqXGjBRpHNxJFdvJZNIZ772OPDs6n3AYzDJpgdd6yNAdT9bC%2BDoa6S7ccvQUwQ8PRrhJwTbtb9Y3pDzk9Lw%2Fr62mIUiJ199ilCSidj25Z6J8LvSvgY%2FcQl%2FPyxfegqTe847OxW%2F3AKjCmAhRx6ArWghzhwWSprsCr6ftldgj9Rcz6R0UqKnOsCnYJO7SpRnkPWXjLD3j8rNf3KriPtbhn5HdYmuMJCm97wGOqUB54TWBRezJKxyWdjoJr8R1JHDlMKtkFSEPXqWNy9FGEu%2BjsJDv70c6bJqE6YNGpj5aM19DyFqqrBI7DB0wlaMNQUIxhTP%2Bi3RW9dXJN%2FnuvK740V5zgHWJXvdEH%2Bekd5KcG3Ag59FKugbYO8qKRjKHmGZR80t5wLxMLaOoBQqkbIHiVVhxZ4o7fFeIx4ulFbdxQL3Tj9i3JfP2V2%2BqNvpi0oMXX7q&X-Amz-Signature=41d49003e7271411f3d1a1544b01ccadda81a6071ed26c0ea9c5033eecc49130&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
