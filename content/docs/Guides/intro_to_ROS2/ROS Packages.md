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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5G5CZY6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCCkp%2Fwk8HS2r%2FBtVJFlbyIr37Bbm%2BztV8tvtgiYnYUnAIgLeYGt8IaT6QByiBe5xV8AUhQqgkezlYGK7i6daDLwNQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvODNeDdQOLx%2ByPAircA6xLL2qkkREHpvJ0d9MvVtwq8rkqawrV%2FZRP9NvLRJUyaphgogMz8m7gYHttuNrBUkBwh60mhJDKMJ3Z7V0qmjq1IbToOibluJK7GjoDuftHcmJobwTt6%2F4ldFYOu%2By1DdmqOgUKgFJJsyFfIoVu%2Fx80TdkXs1%2FHsAxIlvxvHVihp5PXWlgJtDRkOvv6EjfuYow57VL5hKQf8%2BzBZUpx5o3KxGfNK2nAQnWq9U3vxcu1evWj6C8gB%2FLk8elMiWm6Ev7htgA5bgjHs62O1VeiG1h7L3l1M3bRD78GgHeIoTBpqvNncr61oYRIy5MXQt2rkt3UslhCuvRejaG67oI33qHwM03UFV9Ie1nOgLUcJo81Ml90%2FRpR0JcfCaQw%2FkC4%2B1RS2TfopjI7H5PwD3sOamk%2Fr%2BLSQlcdSUJgZGFtwfYzkWG4Mx7u4155rwL7xol704cdRXIvTQ2shHVkeqE80q4D3fdGU%2BW%2FeVfyU48kK1ESahYsZuU7AyB3a%2FUZtuvseD9YYU470rgb0ln449vsig5pKA%2Fxzu2AD%2ByCiITil4YSEB%2BgKUsL2Z7iEnkPz%2FwIqCKf1saria7coy44V5vqkbvVGvnSb8wU7IvuUS%2FmADiRmZNwZcPEE54O9bIPMJ7X%2Fb4GOqUBmyg9F26T75lYMpy3RnwtEz6pkumO8OvEZ60vJWZqUfi5l7qmYHCaN4W2F7sfYrbYAUw98VSTVcgKZjp9qnD9FndVdE1ES8OsUQpXXRjIUTLrfaKie244YkvoblxDyKKE0JG806rhqOZxw6QXkxuUmFF0pYz5TCj7JnC8avqeVu4hhftsFWYzGZ%2BqeZm%2ByudiFVRGex5kQFD%2FfnD9ugUN%2FwlO13pH&X-Amz-Signature=8a3a65cd81126786a113f1fe6b246e674c20cd2f21131275ea4804e829837952&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5G5CZY6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCCkp%2Fwk8HS2r%2FBtVJFlbyIr37Bbm%2BztV8tvtgiYnYUnAIgLeYGt8IaT6QByiBe5xV8AUhQqgkezlYGK7i6daDLwNQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvODNeDdQOLx%2ByPAircA6xLL2qkkREHpvJ0d9MvVtwq8rkqawrV%2FZRP9NvLRJUyaphgogMz8m7gYHttuNrBUkBwh60mhJDKMJ3Z7V0qmjq1IbToOibluJK7GjoDuftHcmJobwTt6%2F4ldFYOu%2By1DdmqOgUKgFJJsyFfIoVu%2Fx80TdkXs1%2FHsAxIlvxvHVihp5PXWlgJtDRkOvv6EjfuYow57VL5hKQf8%2BzBZUpx5o3KxGfNK2nAQnWq9U3vxcu1evWj6C8gB%2FLk8elMiWm6Ev7htgA5bgjHs62O1VeiG1h7L3l1M3bRD78GgHeIoTBpqvNncr61oYRIy5MXQt2rkt3UslhCuvRejaG67oI33qHwM03UFV9Ie1nOgLUcJo81Ml90%2FRpR0JcfCaQw%2FkC4%2B1RS2TfopjI7H5PwD3sOamk%2Fr%2BLSQlcdSUJgZGFtwfYzkWG4Mx7u4155rwL7xol704cdRXIvTQ2shHVkeqE80q4D3fdGU%2BW%2FeVfyU48kK1ESahYsZuU7AyB3a%2FUZtuvseD9YYU470rgb0ln449vsig5pKA%2Fxzu2AD%2ByCiITil4YSEB%2BgKUsL2Z7iEnkPz%2FwIqCKf1saria7coy44V5vqkbvVGvnSb8wU7IvuUS%2FmADiRmZNwZcPEE54O9bIPMJ7X%2Fb4GOqUBmyg9F26T75lYMpy3RnwtEz6pkumO8OvEZ60vJWZqUfi5l7qmYHCaN4W2F7sfYrbYAUw98VSTVcgKZjp9qnD9FndVdE1ES8OsUQpXXRjIUTLrfaKie244YkvoblxDyKKE0JG806rhqOZxw6QXkxuUmFF0pYz5TCj7JnC8avqeVu4hhftsFWYzGZ%2BqeZm%2ByudiFVRGex5kQFD%2FfnD9ugUN%2FwlO13pH&X-Amz-Signature=03bbf787c09329ea7d5058046c7287da232bf1b14d8a1fd6dc001ea2c872c8d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5G5CZY6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCCkp%2Fwk8HS2r%2FBtVJFlbyIr37Bbm%2BztV8tvtgiYnYUnAIgLeYGt8IaT6QByiBe5xV8AUhQqgkezlYGK7i6daDLwNQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvODNeDdQOLx%2ByPAircA6xLL2qkkREHpvJ0d9MvVtwq8rkqawrV%2FZRP9NvLRJUyaphgogMz8m7gYHttuNrBUkBwh60mhJDKMJ3Z7V0qmjq1IbToOibluJK7GjoDuftHcmJobwTt6%2F4ldFYOu%2By1DdmqOgUKgFJJsyFfIoVu%2Fx80TdkXs1%2FHsAxIlvxvHVihp5PXWlgJtDRkOvv6EjfuYow57VL5hKQf8%2BzBZUpx5o3KxGfNK2nAQnWq9U3vxcu1evWj6C8gB%2FLk8elMiWm6Ev7htgA5bgjHs62O1VeiG1h7L3l1M3bRD78GgHeIoTBpqvNncr61oYRIy5MXQt2rkt3UslhCuvRejaG67oI33qHwM03UFV9Ie1nOgLUcJo81Ml90%2FRpR0JcfCaQw%2FkC4%2B1RS2TfopjI7H5PwD3sOamk%2Fr%2BLSQlcdSUJgZGFtwfYzkWG4Mx7u4155rwL7xol704cdRXIvTQ2shHVkeqE80q4D3fdGU%2BW%2FeVfyU48kK1ESahYsZuU7AyB3a%2FUZtuvseD9YYU470rgb0ln449vsig5pKA%2Fxzu2AD%2ByCiITil4YSEB%2BgKUsL2Z7iEnkPz%2FwIqCKf1saria7coy44V5vqkbvVGvnSb8wU7IvuUS%2FmADiRmZNwZcPEE54O9bIPMJ7X%2Fb4GOqUBmyg9F26T75lYMpy3RnwtEz6pkumO8OvEZ60vJWZqUfi5l7qmYHCaN4W2F7sfYrbYAUw98VSTVcgKZjp9qnD9FndVdE1ES8OsUQpXXRjIUTLrfaKie244YkvoblxDyKKE0JG806rhqOZxw6QXkxuUmFF0pYz5TCj7JnC8avqeVu4hhftsFWYzGZ%2BqeZm%2ByudiFVRGex5kQFD%2FfnD9ugUN%2FwlO13pH&X-Amz-Signature=7437e5173367a3ee7533ada2090da802943b363311060ba5f87c55a6de46f9c6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5G5CZY6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCCkp%2Fwk8HS2r%2FBtVJFlbyIr37Bbm%2BztV8tvtgiYnYUnAIgLeYGt8IaT6QByiBe5xV8AUhQqgkezlYGK7i6daDLwNQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvODNeDdQOLx%2ByPAircA6xLL2qkkREHpvJ0d9MvVtwq8rkqawrV%2FZRP9NvLRJUyaphgogMz8m7gYHttuNrBUkBwh60mhJDKMJ3Z7V0qmjq1IbToOibluJK7GjoDuftHcmJobwTt6%2F4ldFYOu%2By1DdmqOgUKgFJJsyFfIoVu%2Fx80TdkXs1%2FHsAxIlvxvHVihp5PXWlgJtDRkOvv6EjfuYow57VL5hKQf8%2BzBZUpx5o3KxGfNK2nAQnWq9U3vxcu1evWj6C8gB%2FLk8elMiWm6Ev7htgA5bgjHs62O1VeiG1h7L3l1M3bRD78GgHeIoTBpqvNncr61oYRIy5MXQt2rkt3UslhCuvRejaG67oI33qHwM03UFV9Ie1nOgLUcJo81Ml90%2FRpR0JcfCaQw%2FkC4%2B1RS2TfopjI7H5PwD3sOamk%2Fr%2BLSQlcdSUJgZGFtwfYzkWG4Mx7u4155rwL7xol704cdRXIvTQ2shHVkeqE80q4D3fdGU%2BW%2FeVfyU48kK1ESahYsZuU7AyB3a%2FUZtuvseD9YYU470rgb0ln449vsig5pKA%2Fxzu2AD%2ByCiITil4YSEB%2BgKUsL2Z7iEnkPz%2FwIqCKf1saria7coy44V5vqkbvVGvnSb8wU7IvuUS%2FmADiRmZNwZcPEE54O9bIPMJ7X%2Fb4GOqUBmyg9F26T75lYMpy3RnwtEz6pkumO8OvEZ60vJWZqUfi5l7qmYHCaN4W2F7sfYrbYAUw98VSTVcgKZjp9qnD9FndVdE1ES8OsUQpXXRjIUTLrfaKie244YkvoblxDyKKE0JG806rhqOZxw6QXkxuUmFF0pYz5TCj7JnC8avqeVu4hhftsFWYzGZ%2BqeZm%2ByudiFVRGex5kQFD%2FfnD9ugUN%2FwlO13pH&X-Amz-Signature=96f34fb8a20b010d6bd02eae4572ad02f275202dc273478b6dd5e36fc05c9676&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5G5CZY6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCCkp%2Fwk8HS2r%2FBtVJFlbyIr37Bbm%2BztV8tvtgiYnYUnAIgLeYGt8IaT6QByiBe5xV8AUhQqgkezlYGK7i6daDLwNQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvODNeDdQOLx%2ByPAircA6xLL2qkkREHpvJ0d9MvVtwq8rkqawrV%2FZRP9NvLRJUyaphgogMz8m7gYHttuNrBUkBwh60mhJDKMJ3Z7V0qmjq1IbToOibluJK7GjoDuftHcmJobwTt6%2F4ldFYOu%2By1DdmqOgUKgFJJsyFfIoVu%2Fx80TdkXs1%2FHsAxIlvxvHVihp5PXWlgJtDRkOvv6EjfuYow57VL5hKQf8%2BzBZUpx5o3KxGfNK2nAQnWq9U3vxcu1evWj6C8gB%2FLk8elMiWm6Ev7htgA5bgjHs62O1VeiG1h7L3l1M3bRD78GgHeIoTBpqvNncr61oYRIy5MXQt2rkt3UslhCuvRejaG67oI33qHwM03UFV9Ie1nOgLUcJo81Ml90%2FRpR0JcfCaQw%2FkC4%2B1RS2TfopjI7H5PwD3sOamk%2Fr%2BLSQlcdSUJgZGFtwfYzkWG4Mx7u4155rwL7xol704cdRXIvTQ2shHVkeqE80q4D3fdGU%2BW%2FeVfyU48kK1ESahYsZuU7AyB3a%2FUZtuvseD9YYU470rgb0ln449vsig5pKA%2Fxzu2AD%2ByCiITil4YSEB%2BgKUsL2Z7iEnkPz%2FwIqCKf1saria7coy44V5vqkbvVGvnSb8wU7IvuUS%2FmADiRmZNwZcPEE54O9bIPMJ7X%2Fb4GOqUBmyg9F26T75lYMpy3RnwtEz6pkumO8OvEZ60vJWZqUfi5l7qmYHCaN4W2F7sfYrbYAUw98VSTVcgKZjp9qnD9FndVdE1ES8OsUQpXXRjIUTLrfaKie244YkvoblxDyKKE0JG806rhqOZxw6QXkxuUmFF0pYz5TCj7JnC8avqeVu4hhftsFWYzGZ%2BqeZm%2ByudiFVRGex5kQFD%2FfnD9ugUN%2FwlO13pH&X-Amz-Signature=bcb9569f10b338b4242be9486933c8ff1d7f8573f836dd9201e334f1af3af5cd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5G5CZY6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCCkp%2Fwk8HS2r%2FBtVJFlbyIr37Bbm%2BztV8tvtgiYnYUnAIgLeYGt8IaT6QByiBe5xV8AUhQqgkezlYGK7i6daDLwNQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvODNeDdQOLx%2ByPAircA6xLL2qkkREHpvJ0d9MvVtwq8rkqawrV%2FZRP9NvLRJUyaphgogMz8m7gYHttuNrBUkBwh60mhJDKMJ3Z7V0qmjq1IbToOibluJK7GjoDuftHcmJobwTt6%2F4ldFYOu%2By1DdmqOgUKgFJJsyFfIoVu%2Fx80TdkXs1%2FHsAxIlvxvHVihp5PXWlgJtDRkOvv6EjfuYow57VL5hKQf8%2BzBZUpx5o3KxGfNK2nAQnWq9U3vxcu1evWj6C8gB%2FLk8elMiWm6Ev7htgA5bgjHs62O1VeiG1h7L3l1M3bRD78GgHeIoTBpqvNncr61oYRIy5MXQt2rkt3UslhCuvRejaG67oI33qHwM03UFV9Ie1nOgLUcJo81Ml90%2FRpR0JcfCaQw%2FkC4%2B1RS2TfopjI7H5PwD3sOamk%2Fr%2BLSQlcdSUJgZGFtwfYzkWG4Mx7u4155rwL7xol704cdRXIvTQ2shHVkeqE80q4D3fdGU%2BW%2FeVfyU48kK1ESahYsZuU7AyB3a%2FUZtuvseD9YYU470rgb0ln449vsig5pKA%2Fxzu2AD%2ByCiITil4YSEB%2BgKUsL2Z7iEnkPz%2FwIqCKf1saria7coy44V5vqkbvVGvnSb8wU7IvuUS%2FmADiRmZNwZcPEE54O9bIPMJ7X%2Fb4GOqUBmyg9F26T75lYMpy3RnwtEz6pkumO8OvEZ60vJWZqUfi5l7qmYHCaN4W2F7sfYrbYAUw98VSTVcgKZjp9qnD9FndVdE1ES8OsUQpXXRjIUTLrfaKie244YkvoblxDyKKE0JG806rhqOZxw6QXkxuUmFF0pYz5TCj7JnC8avqeVu4hhftsFWYzGZ%2BqeZm%2ByudiFVRGex5kQFD%2FfnD9ugUN%2FwlO13pH&X-Amz-Signature=e3afd3f7c00922a88679388966492c4f2a41ddebbea6049aca521609a2985976&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5G5CZY6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCCkp%2Fwk8HS2r%2FBtVJFlbyIr37Bbm%2BztV8tvtgiYnYUnAIgLeYGt8IaT6QByiBe5xV8AUhQqgkezlYGK7i6daDLwNQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvODNeDdQOLx%2ByPAircA6xLL2qkkREHpvJ0d9MvVtwq8rkqawrV%2FZRP9NvLRJUyaphgogMz8m7gYHttuNrBUkBwh60mhJDKMJ3Z7V0qmjq1IbToOibluJK7GjoDuftHcmJobwTt6%2F4ldFYOu%2By1DdmqOgUKgFJJsyFfIoVu%2Fx80TdkXs1%2FHsAxIlvxvHVihp5PXWlgJtDRkOvv6EjfuYow57VL5hKQf8%2BzBZUpx5o3KxGfNK2nAQnWq9U3vxcu1evWj6C8gB%2FLk8elMiWm6Ev7htgA5bgjHs62O1VeiG1h7L3l1M3bRD78GgHeIoTBpqvNncr61oYRIy5MXQt2rkt3UslhCuvRejaG67oI33qHwM03UFV9Ie1nOgLUcJo81Ml90%2FRpR0JcfCaQw%2FkC4%2B1RS2TfopjI7H5PwD3sOamk%2Fr%2BLSQlcdSUJgZGFtwfYzkWG4Mx7u4155rwL7xol704cdRXIvTQ2shHVkeqE80q4D3fdGU%2BW%2FeVfyU48kK1ESahYsZuU7AyB3a%2FUZtuvseD9YYU470rgb0ln449vsig5pKA%2Fxzu2AD%2ByCiITil4YSEB%2BgKUsL2Z7iEnkPz%2FwIqCKf1saria7coy44V5vqkbvVGvnSb8wU7IvuUS%2FmADiRmZNwZcPEE54O9bIPMJ7X%2Fb4GOqUBmyg9F26T75lYMpy3RnwtEz6pkumO8OvEZ60vJWZqUfi5l7qmYHCaN4W2F7sfYrbYAUw98VSTVcgKZjp9qnD9FndVdE1ES8OsUQpXXRjIUTLrfaKie244YkvoblxDyKKE0JG806rhqOZxw6QXkxuUmFF0pYz5TCj7JnC8avqeVu4hhftsFWYzGZ%2BqeZm%2ByudiFVRGex5kQFD%2FfnD9ugUN%2FwlO13pH&X-Amz-Signature=4f92be53ee0ed9b01e3cb6d19e9b6a36f3dbb7f8e66bdc00950373d09bb5de32&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
