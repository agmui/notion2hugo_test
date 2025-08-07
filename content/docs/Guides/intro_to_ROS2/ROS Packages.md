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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZ3Y4FO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBoIMloAAVMb7m6RDZyA2xagyE%2BKLx8QO1nhjW3aFN9xAiEA9gEu4FYY3fQYQGE8%2FhfaaSp44Nm5zk7dRy4Bqm88DEcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD92chVe4Dep0LhdfircA79k1m4894Z5KA0LHk0V3aM68P1PmD8Fqgu2A52k5RM7zCXBn0H%2BPvA59V7xYZl2obKJfra6wgLYofaVzJ7xNGNZSl4BE2K1WoDLrq9rBzy2yTdVjDZDTjqWGDwu%2BEr3GZQeNZxeVKI9y%2BpUGN51r1YMtrcHYe0cwQeHYxcymlHkH7jgv6A%2BPwFCxeL8aiArF07gsq3A0NBJnA1WjdIk2TLt3KxkSJpPAplQszsC9MK4lrfLTw6dSrujCB1oQTo4LnfXLD5XMWm40V79TEXkGbn1UWGi9tebnkzEzDfaJ5JpWDEZZKzmcrfhIKXXPEWnmmghtIcSCKyw7Hn95ma6siPu7llcosla3B0RXNkCose4FWjhU7zuzY6%2FLl16%2F%2Fqwagzx7l8J0CjTMPapN8ZKUlZVAIRYtAwlNxQTi%2FkPyIQQmvw7MeAzQEzFvPlNyfudMlxnrc5DOXPLwCq6cpn2sDpHhSErZFnx5FDwe6llcPoguGjlg%2BsQZHjYq1RgUBbN9lg7B1%2FzfE0dE34MwICx7Kl4zl9f8aTn%2ByUaXxnv05CHAvKkZfazrkdEJUDeOGruliJ6pCXmg1ItO0ZtIkFip6auYJfbjtD28FVLNpRNeIuNit4YvBKlMMuxtodsMMSi08QGOqUBFtU6vKvMFHCe3lKPhfOiZkRzDvsH3BHjh05VivriReYc3BsaTKU7VSDr5WgQCE0HkurCMG4%2BsZ1O7UIbQ7EV5BoZAK1sp1vzapRRCWQkNfXqj0Bc95opcO6AoKixqsqY0ALgPEJ1B0dMO1ENbHfenhoVWqE4Qi0rkZ8g%2F%2BBjQzelzHEpo%2Bsj%2BpdHVrpR6FqA3GX%2BAJkrYYEFnAqC7piWd01u5tKZ&X-Amz-Signature=87d90278451babbaee8309be5c2cdca54d3642ffd002dd2cef3484d217d1de20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZ3Y4FO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBoIMloAAVMb7m6RDZyA2xagyE%2BKLx8QO1nhjW3aFN9xAiEA9gEu4FYY3fQYQGE8%2FhfaaSp44Nm5zk7dRy4Bqm88DEcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD92chVe4Dep0LhdfircA79k1m4894Z5KA0LHk0V3aM68P1PmD8Fqgu2A52k5RM7zCXBn0H%2BPvA59V7xYZl2obKJfra6wgLYofaVzJ7xNGNZSl4BE2K1WoDLrq9rBzy2yTdVjDZDTjqWGDwu%2BEr3GZQeNZxeVKI9y%2BpUGN51r1YMtrcHYe0cwQeHYxcymlHkH7jgv6A%2BPwFCxeL8aiArF07gsq3A0NBJnA1WjdIk2TLt3KxkSJpPAplQszsC9MK4lrfLTw6dSrujCB1oQTo4LnfXLD5XMWm40V79TEXkGbn1UWGi9tebnkzEzDfaJ5JpWDEZZKzmcrfhIKXXPEWnmmghtIcSCKyw7Hn95ma6siPu7llcosla3B0RXNkCose4FWjhU7zuzY6%2FLl16%2F%2Fqwagzx7l8J0CjTMPapN8ZKUlZVAIRYtAwlNxQTi%2FkPyIQQmvw7MeAzQEzFvPlNyfudMlxnrc5DOXPLwCq6cpn2sDpHhSErZFnx5FDwe6llcPoguGjlg%2BsQZHjYq1RgUBbN9lg7B1%2FzfE0dE34MwICx7Kl4zl9f8aTn%2ByUaXxnv05CHAvKkZfazrkdEJUDeOGruliJ6pCXmg1ItO0ZtIkFip6auYJfbjtD28FVLNpRNeIuNit4YvBKlMMuxtodsMMSi08QGOqUBFtU6vKvMFHCe3lKPhfOiZkRzDvsH3BHjh05VivriReYc3BsaTKU7VSDr5WgQCE0HkurCMG4%2BsZ1O7UIbQ7EV5BoZAK1sp1vzapRRCWQkNfXqj0Bc95opcO6AoKixqsqY0ALgPEJ1B0dMO1ENbHfenhoVWqE4Qi0rkZ8g%2F%2BBjQzelzHEpo%2Bsj%2BpdHVrpR6FqA3GX%2BAJkrYYEFnAqC7piWd01u5tKZ&X-Amz-Signature=7436870b89038145ed4d3b6559fd1cd7834b6d4c06b76c81738f7d8606101587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZ3Y4FO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBoIMloAAVMb7m6RDZyA2xagyE%2BKLx8QO1nhjW3aFN9xAiEA9gEu4FYY3fQYQGE8%2FhfaaSp44Nm5zk7dRy4Bqm88DEcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD92chVe4Dep0LhdfircA79k1m4894Z5KA0LHk0V3aM68P1PmD8Fqgu2A52k5RM7zCXBn0H%2BPvA59V7xYZl2obKJfra6wgLYofaVzJ7xNGNZSl4BE2K1WoDLrq9rBzy2yTdVjDZDTjqWGDwu%2BEr3GZQeNZxeVKI9y%2BpUGN51r1YMtrcHYe0cwQeHYxcymlHkH7jgv6A%2BPwFCxeL8aiArF07gsq3A0NBJnA1WjdIk2TLt3KxkSJpPAplQszsC9MK4lrfLTw6dSrujCB1oQTo4LnfXLD5XMWm40V79TEXkGbn1UWGi9tebnkzEzDfaJ5JpWDEZZKzmcrfhIKXXPEWnmmghtIcSCKyw7Hn95ma6siPu7llcosla3B0RXNkCose4FWjhU7zuzY6%2FLl16%2F%2Fqwagzx7l8J0CjTMPapN8ZKUlZVAIRYtAwlNxQTi%2FkPyIQQmvw7MeAzQEzFvPlNyfudMlxnrc5DOXPLwCq6cpn2sDpHhSErZFnx5FDwe6llcPoguGjlg%2BsQZHjYq1RgUBbN9lg7B1%2FzfE0dE34MwICx7Kl4zl9f8aTn%2ByUaXxnv05CHAvKkZfazrkdEJUDeOGruliJ6pCXmg1ItO0ZtIkFip6auYJfbjtD28FVLNpRNeIuNit4YvBKlMMuxtodsMMSi08QGOqUBFtU6vKvMFHCe3lKPhfOiZkRzDvsH3BHjh05VivriReYc3BsaTKU7VSDr5WgQCE0HkurCMG4%2BsZ1O7UIbQ7EV5BoZAK1sp1vzapRRCWQkNfXqj0Bc95opcO6AoKixqsqY0ALgPEJ1B0dMO1ENbHfenhoVWqE4Qi0rkZ8g%2F%2BBjQzelzHEpo%2Bsj%2BpdHVrpR6FqA3GX%2BAJkrYYEFnAqC7piWd01u5tKZ&X-Amz-Signature=75d24f40d0327e3949c46fc176644a19409b0cf5616702122642118babef8aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZ3Y4FO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBoIMloAAVMb7m6RDZyA2xagyE%2BKLx8QO1nhjW3aFN9xAiEA9gEu4FYY3fQYQGE8%2FhfaaSp44Nm5zk7dRy4Bqm88DEcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD92chVe4Dep0LhdfircA79k1m4894Z5KA0LHk0V3aM68P1PmD8Fqgu2A52k5RM7zCXBn0H%2BPvA59V7xYZl2obKJfra6wgLYofaVzJ7xNGNZSl4BE2K1WoDLrq9rBzy2yTdVjDZDTjqWGDwu%2BEr3GZQeNZxeVKI9y%2BpUGN51r1YMtrcHYe0cwQeHYxcymlHkH7jgv6A%2BPwFCxeL8aiArF07gsq3A0NBJnA1WjdIk2TLt3KxkSJpPAplQszsC9MK4lrfLTw6dSrujCB1oQTo4LnfXLD5XMWm40V79TEXkGbn1UWGi9tebnkzEzDfaJ5JpWDEZZKzmcrfhIKXXPEWnmmghtIcSCKyw7Hn95ma6siPu7llcosla3B0RXNkCose4FWjhU7zuzY6%2FLl16%2F%2Fqwagzx7l8J0CjTMPapN8ZKUlZVAIRYtAwlNxQTi%2FkPyIQQmvw7MeAzQEzFvPlNyfudMlxnrc5DOXPLwCq6cpn2sDpHhSErZFnx5FDwe6llcPoguGjlg%2BsQZHjYq1RgUBbN9lg7B1%2FzfE0dE34MwICx7Kl4zl9f8aTn%2ByUaXxnv05CHAvKkZfazrkdEJUDeOGruliJ6pCXmg1ItO0ZtIkFip6auYJfbjtD28FVLNpRNeIuNit4YvBKlMMuxtodsMMSi08QGOqUBFtU6vKvMFHCe3lKPhfOiZkRzDvsH3BHjh05VivriReYc3BsaTKU7VSDr5WgQCE0HkurCMG4%2BsZ1O7UIbQ7EV5BoZAK1sp1vzapRRCWQkNfXqj0Bc95opcO6AoKixqsqY0ALgPEJ1B0dMO1ENbHfenhoVWqE4Qi0rkZ8g%2F%2BBjQzelzHEpo%2Bsj%2BpdHVrpR6FqA3GX%2BAJkrYYEFnAqC7piWd01u5tKZ&X-Amz-Signature=ee9800dc0710ffc2d94f1ff330b9c45b776c4b3f18a34299c4b5ac7923f3be0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZ3Y4FO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBoIMloAAVMb7m6RDZyA2xagyE%2BKLx8QO1nhjW3aFN9xAiEA9gEu4FYY3fQYQGE8%2FhfaaSp44Nm5zk7dRy4Bqm88DEcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD92chVe4Dep0LhdfircA79k1m4894Z5KA0LHk0V3aM68P1PmD8Fqgu2A52k5RM7zCXBn0H%2BPvA59V7xYZl2obKJfra6wgLYofaVzJ7xNGNZSl4BE2K1WoDLrq9rBzy2yTdVjDZDTjqWGDwu%2BEr3GZQeNZxeVKI9y%2BpUGN51r1YMtrcHYe0cwQeHYxcymlHkH7jgv6A%2BPwFCxeL8aiArF07gsq3A0NBJnA1WjdIk2TLt3KxkSJpPAplQszsC9MK4lrfLTw6dSrujCB1oQTo4LnfXLD5XMWm40V79TEXkGbn1UWGi9tebnkzEzDfaJ5JpWDEZZKzmcrfhIKXXPEWnmmghtIcSCKyw7Hn95ma6siPu7llcosla3B0RXNkCose4FWjhU7zuzY6%2FLl16%2F%2Fqwagzx7l8J0CjTMPapN8ZKUlZVAIRYtAwlNxQTi%2FkPyIQQmvw7MeAzQEzFvPlNyfudMlxnrc5DOXPLwCq6cpn2sDpHhSErZFnx5FDwe6llcPoguGjlg%2BsQZHjYq1RgUBbN9lg7B1%2FzfE0dE34MwICx7Kl4zl9f8aTn%2ByUaXxnv05CHAvKkZfazrkdEJUDeOGruliJ6pCXmg1ItO0ZtIkFip6auYJfbjtD28FVLNpRNeIuNit4YvBKlMMuxtodsMMSi08QGOqUBFtU6vKvMFHCe3lKPhfOiZkRzDvsH3BHjh05VivriReYc3BsaTKU7VSDr5WgQCE0HkurCMG4%2BsZ1O7UIbQ7EV5BoZAK1sp1vzapRRCWQkNfXqj0Bc95opcO6AoKixqsqY0ALgPEJ1B0dMO1ENbHfenhoVWqE4Qi0rkZ8g%2F%2BBjQzelzHEpo%2Bsj%2BpdHVrpR6FqA3GX%2BAJkrYYEFnAqC7piWd01u5tKZ&X-Amz-Signature=c4eb6a143b51a593147d269848a038447127cfe6d758253b4997254611eb1bc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZ3Y4FO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBoIMloAAVMb7m6RDZyA2xagyE%2BKLx8QO1nhjW3aFN9xAiEA9gEu4FYY3fQYQGE8%2FhfaaSp44Nm5zk7dRy4Bqm88DEcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD92chVe4Dep0LhdfircA79k1m4894Z5KA0LHk0V3aM68P1PmD8Fqgu2A52k5RM7zCXBn0H%2BPvA59V7xYZl2obKJfra6wgLYofaVzJ7xNGNZSl4BE2K1WoDLrq9rBzy2yTdVjDZDTjqWGDwu%2BEr3GZQeNZxeVKI9y%2BpUGN51r1YMtrcHYe0cwQeHYxcymlHkH7jgv6A%2BPwFCxeL8aiArF07gsq3A0NBJnA1WjdIk2TLt3KxkSJpPAplQszsC9MK4lrfLTw6dSrujCB1oQTo4LnfXLD5XMWm40V79TEXkGbn1UWGi9tebnkzEzDfaJ5JpWDEZZKzmcrfhIKXXPEWnmmghtIcSCKyw7Hn95ma6siPu7llcosla3B0RXNkCose4FWjhU7zuzY6%2FLl16%2F%2Fqwagzx7l8J0CjTMPapN8ZKUlZVAIRYtAwlNxQTi%2FkPyIQQmvw7MeAzQEzFvPlNyfudMlxnrc5DOXPLwCq6cpn2sDpHhSErZFnx5FDwe6llcPoguGjlg%2BsQZHjYq1RgUBbN9lg7B1%2FzfE0dE34MwICx7Kl4zl9f8aTn%2ByUaXxnv05CHAvKkZfazrkdEJUDeOGruliJ6pCXmg1ItO0ZtIkFip6auYJfbjtD28FVLNpRNeIuNit4YvBKlMMuxtodsMMSi08QGOqUBFtU6vKvMFHCe3lKPhfOiZkRzDvsH3BHjh05VivriReYc3BsaTKU7VSDr5WgQCE0HkurCMG4%2BsZ1O7UIbQ7EV5BoZAK1sp1vzapRRCWQkNfXqj0Bc95opcO6AoKixqsqY0ALgPEJ1B0dMO1ENbHfenhoVWqE4Qi0rkZ8g%2F%2BBjQzelzHEpo%2Bsj%2BpdHVrpR6FqA3GX%2BAJkrYYEFnAqC7piWd01u5tKZ&X-Amz-Signature=1ade57ccf6678a72f922fc5f136811f5b97fcf8aa9b83895aa602690a7724a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZ3Y4FO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBoIMloAAVMb7m6RDZyA2xagyE%2BKLx8QO1nhjW3aFN9xAiEA9gEu4FYY3fQYQGE8%2FhfaaSp44Nm5zk7dRy4Bqm88DEcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD92chVe4Dep0LhdfircA79k1m4894Z5KA0LHk0V3aM68P1PmD8Fqgu2A52k5RM7zCXBn0H%2BPvA59V7xYZl2obKJfra6wgLYofaVzJ7xNGNZSl4BE2K1WoDLrq9rBzy2yTdVjDZDTjqWGDwu%2BEr3GZQeNZxeVKI9y%2BpUGN51r1YMtrcHYe0cwQeHYxcymlHkH7jgv6A%2BPwFCxeL8aiArF07gsq3A0NBJnA1WjdIk2TLt3KxkSJpPAplQszsC9MK4lrfLTw6dSrujCB1oQTo4LnfXLD5XMWm40V79TEXkGbn1UWGi9tebnkzEzDfaJ5JpWDEZZKzmcrfhIKXXPEWnmmghtIcSCKyw7Hn95ma6siPu7llcosla3B0RXNkCose4FWjhU7zuzY6%2FLl16%2F%2Fqwagzx7l8J0CjTMPapN8ZKUlZVAIRYtAwlNxQTi%2FkPyIQQmvw7MeAzQEzFvPlNyfudMlxnrc5DOXPLwCq6cpn2sDpHhSErZFnx5FDwe6llcPoguGjlg%2BsQZHjYq1RgUBbN9lg7B1%2FzfE0dE34MwICx7Kl4zl9f8aTn%2ByUaXxnv05CHAvKkZfazrkdEJUDeOGruliJ6pCXmg1ItO0ZtIkFip6auYJfbjtD28FVLNpRNeIuNit4YvBKlMMuxtodsMMSi08QGOqUBFtU6vKvMFHCe3lKPhfOiZkRzDvsH3BHjh05VivriReYc3BsaTKU7VSDr5WgQCE0HkurCMG4%2BsZ1O7UIbQ7EV5BoZAK1sp1vzapRRCWQkNfXqj0Bc95opcO6AoKixqsqY0ALgPEJ1B0dMO1ENbHfenhoVWqE4Qi0rkZ8g%2F%2BBjQzelzHEpo%2Bsj%2BpdHVrpR6FqA3GX%2BAJkrYYEFnAqC7piWd01u5tKZ&X-Amz-Signature=b57fe7edb04a363cf794fbf015b717c57be8fec510bfa28dcbaed9d0b4ea729f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
