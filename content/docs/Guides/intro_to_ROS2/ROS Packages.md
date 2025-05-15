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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DQHJ6M7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDUuhi6xkRJE7OaITQ9RgB%2Fqn6O8Pr7EPLiklJSv7SoFAiEA%2Bfoxwy62IhsPp%2BtynXbTAX5dLBYb%2F0F%2Fbim0siQpM9Mq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAH8U7Gu4jHLRlYijSrcA0CknmRplhDToF1TeOvA9jImG7pjuVrqk0NozuC0kdel7C3q4781DP%2BPom30xNFTUVi11SbZqA87tihWKe0QDmJhZq5s0zk6kIvjygdKSq8sWqyP5GkuEewYIpomBzRkWLqSiIg4ru1XP4yAE9939WB3sVJu9tOl84gHYjOeSIVkm1BEZi8S5InVujx%2BpoLHZzCo%2FT8qiZJFLiLiDKuGqbperLKpnrxupFuoYsZZXvyR6vgwg7sHWSUlTXADxIuaEHPS8FNMSvy5kwCRJJqjYyr8utE7sCX427kjX0FkMwJkuAwj7g%2FPfz%2BnTpYBzi%2FPkwehkEBa42djgBUCWHWwydHJN8wMAjuEJ%2B0Hya8x4fMSgPGXQ7yWzJUAZ%2FOqXftokwKIDbG%2FGm6it2qJfUZcl6SlP8MWgFQOdtoX6LlTw40nAEhcODp3lQ4hT2DuyCHGz21sX5KJZD1MVrsYE%2BMiLWz7DCIQI4cz6tbJB9FwRqHqopTc92%2BCttLFvmdqhjGSlXlCNh8YXPoJtQybNUZDXNuvcVDIKg0AGqXXyUYvCkW%2BHkvJsCvqHQB%2FmjWDhisS7BDULP337vQhq%2F3B0e3tPfxgRDD%2FzTGF%2FiBaA6uwmhrR%2FZV0KESpXn25EoL7MKDVl8EGOqUB3GasqRiZpCvmUpn2YSNwObwglYoiTFzPlP4PyuFBWIKYux7Om1tZUpuhj7FxlIjZ%2FKpGqvd1rbJtmVGxaUowhWqANSnSw2qL%2BvV6hUIkgKXuHz6RUAJjGbPDo2PlQkUY%2F1jLlLj6cT7IM9jjW64VDY02RffnLEXAiShreKT3rBS8LlMGbNtCjsSTmIduA9hrIDUIpM5SwVwVmwfv9FmbRo7R%2BaJI&X-Amz-Signature=a56c5455e20fdfec31574d1f0c61701ca565517cd2c79d687eb4dd41091a3fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DQHJ6M7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDUuhi6xkRJE7OaITQ9RgB%2Fqn6O8Pr7EPLiklJSv7SoFAiEA%2Bfoxwy62IhsPp%2BtynXbTAX5dLBYb%2F0F%2Fbim0siQpM9Mq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAH8U7Gu4jHLRlYijSrcA0CknmRplhDToF1TeOvA9jImG7pjuVrqk0NozuC0kdel7C3q4781DP%2BPom30xNFTUVi11SbZqA87tihWKe0QDmJhZq5s0zk6kIvjygdKSq8sWqyP5GkuEewYIpomBzRkWLqSiIg4ru1XP4yAE9939WB3sVJu9tOl84gHYjOeSIVkm1BEZi8S5InVujx%2BpoLHZzCo%2FT8qiZJFLiLiDKuGqbperLKpnrxupFuoYsZZXvyR6vgwg7sHWSUlTXADxIuaEHPS8FNMSvy5kwCRJJqjYyr8utE7sCX427kjX0FkMwJkuAwj7g%2FPfz%2BnTpYBzi%2FPkwehkEBa42djgBUCWHWwydHJN8wMAjuEJ%2B0Hya8x4fMSgPGXQ7yWzJUAZ%2FOqXftokwKIDbG%2FGm6it2qJfUZcl6SlP8MWgFQOdtoX6LlTw40nAEhcODp3lQ4hT2DuyCHGz21sX5KJZD1MVrsYE%2BMiLWz7DCIQI4cz6tbJB9FwRqHqopTc92%2BCttLFvmdqhjGSlXlCNh8YXPoJtQybNUZDXNuvcVDIKg0AGqXXyUYvCkW%2BHkvJsCvqHQB%2FmjWDhisS7BDULP337vQhq%2F3B0e3tPfxgRDD%2FzTGF%2FiBaA6uwmhrR%2FZV0KESpXn25EoL7MKDVl8EGOqUB3GasqRiZpCvmUpn2YSNwObwglYoiTFzPlP4PyuFBWIKYux7Om1tZUpuhj7FxlIjZ%2FKpGqvd1rbJtmVGxaUowhWqANSnSw2qL%2BvV6hUIkgKXuHz6RUAJjGbPDo2PlQkUY%2F1jLlLj6cT7IM9jjW64VDY02RffnLEXAiShreKT3rBS8LlMGbNtCjsSTmIduA9hrIDUIpM5SwVwVmwfv9FmbRo7R%2BaJI&X-Amz-Signature=4da648e24ddab1f60261fb4fc31428977927484a7c32188d2153fcf619971603&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DQHJ6M7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDUuhi6xkRJE7OaITQ9RgB%2Fqn6O8Pr7EPLiklJSv7SoFAiEA%2Bfoxwy62IhsPp%2BtynXbTAX5dLBYb%2F0F%2Fbim0siQpM9Mq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAH8U7Gu4jHLRlYijSrcA0CknmRplhDToF1TeOvA9jImG7pjuVrqk0NozuC0kdel7C3q4781DP%2BPom30xNFTUVi11SbZqA87tihWKe0QDmJhZq5s0zk6kIvjygdKSq8sWqyP5GkuEewYIpomBzRkWLqSiIg4ru1XP4yAE9939WB3sVJu9tOl84gHYjOeSIVkm1BEZi8S5InVujx%2BpoLHZzCo%2FT8qiZJFLiLiDKuGqbperLKpnrxupFuoYsZZXvyR6vgwg7sHWSUlTXADxIuaEHPS8FNMSvy5kwCRJJqjYyr8utE7sCX427kjX0FkMwJkuAwj7g%2FPfz%2BnTpYBzi%2FPkwehkEBa42djgBUCWHWwydHJN8wMAjuEJ%2B0Hya8x4fMSgPGXQ7yWzJUAZ%2FOqXftokwKIDbG%2FGm6it2qJfUZcl6SlP8MWgFQOdtoX6LlTw40nAEhcODp3lQ4hT2DuyCHGz21sX5KJZD1MVrsYE%2BMiLWz7DCIQI4cz6tbJB9FwRqHqopTc92%2BCttLFvmdqhjGSlXlCNh8YXPoJtQybNUZDXNuvcVDIKg0AGqXXyUYvCkW%2BHkvJsCvqHQB%2FmjWDhisS7BDULP337vQhq%2F3B0e3tPfxgRDD%2FzTGF%2FiBaA6uwmhrR%2FZV0KESpXn25EoL7MKDVl8EGOqUB3GasqRiZpCvmUpn2YSNwObwglYoiTFzPlP4PyuFBWIKYux7Om1tZUpuhj7FxlIjZ%2FKpGqvd1rbJtmVGxaUowhWqANSnSw2qL%2BvV6hUIkgKXuHz6RUAJjGbPDo2PlQkUY%2F1jLlLj6cT7IM9jjW64VDY02RffnLEXAiShreKT3rBS8LlMGbNtCjsSTmIduA9hrIDUIpM5SwVwVmwfv9FmbRo7R%2BaJI&X-Amz-Signature=2656d67346e04644212efa8b3a42146a22a8be46f978ca2fd666758ed688c2b3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DQHJ6M7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDUuhi6xkRJE7OaITQ9RgB%2Fqn6O8Pr7EPLiklJSv7SoFAiEA%2Bfoxwy62IhsPp%2BtynXbTAX5dLBYb%2F0F%2Fbim0siQpM9Mq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAH8U7Gu4jHLRlYijSrcA0CknmRplhDToF1TeOvA9jImG7pjuVrqk0NozuC0kdel7C3q4781DP%2BPom30xNFTUVi11SbZqA87tihWKe0QDmJhZq5s0zk6kIvjygdKSq8sWqyP5GkuEewYIpomBzRkWLqSiIg4ru1XP4yAE9939WB3sVJu9tOl84gHYjOeSIVkm1BEZi8S5InVujx%2BpoLHZzCo%2FT8qiZJFLiLiDKuGqbperLKpnrxupFuoYsZZXvyR6vgwg7sHWSUlTXADxIuaEHPS8FNMSvy5kwCRJJqjYyr8utE7sCX427kjX0FkMwJkuAwj7g%2FPfz%2BnTpYBzi%2FPkwehkEBa42djgBUCWHWwydHJN8wMAjuEJ%2B0Hya8x4fMSgPGXQ7yWzJUAZ%2FOqXftokwKIDbG%2FGm6it2qJfUZcl6SlP8MWgFQOdtoX6LlTw40nAEhcODp3lQ4hT2DuyCHGz21sX5KJZD1MVrsYE%2BMiLWz7DCIQI4cz6tbJB9FwRqHqopTc92%2BCttLFvmdqhjGSlXlCNh8YXPoJtQybNUZDXNuvcVDIKg0AGqXXyUYvCkW%2BHkvJsCvqHQB%2FmjWDhisS7BDULP337vQhq%2F3B0e3tPfxgRDD%2FzTGF%2FiBaA6uwmhrR%2FZV0KESpXn25EoL7MKDVl8EGOqUB3GasqRiZpCvmUpn2YSNwObwglYoiTFzPlP4PyuFBWIKYux7Om1tZUpuhj7FxlIjZ%2FKpGqvd1rbJtmVGxaUowhWqANSnSw2qL%2BvV6hUIkgKXuHz6RUAJjGbPDo2PlQkUY%2F1jLlLj6cT7IM9jjW64VDY02RffnLEXAiShreKT3rBS8LlMGbNtCjsSTmIduA9hrIDUIpM5SwVwVmwfv9FmbRo7R%2BaJI&X-Amz-Signature=f47655e2eed0b01e361295fafb50161425e31d1890a8ce95c3127387a7b908b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DQHJ6M7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDUuhi6xkRJE7OaITQ9RgB%2Fqn6O8Pr7EPLiklJSv7SoFAiEA%2Bfoxwy62IhsPp%2BtynXbTAX5dLBYb%2F0F%2Fbim0siQpM9Mq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAH8U7Gu4jHLRlYijSrcA0CknmRplhDToF1TeOvA9jImG7pjuVrqk0NozuC0kdel7C3q4781DP%2BPom30xNFTUVi11SbZqA87tihWKe0QDmJhZq5s0zk6kIvjygdKSq8sWqyP5GkuEewYIpomBzRkWLqSiIg4ru1XP4yAE9939WB3sVJu9tOl84gHYjOeSIVkm1BEZi8S5InVujx%2BpoLHZzCo%2FT8qiZJFLiLiDKuGqbperLKpnrxupFuoYsZZXvyR6vgwg7sHWSUlTXADxIuaEHPS8FNMSvy5kwCRJJqjYyr8utE7sCX427kjX0FkMwJkuAwj7g%2FPfz%2BnTpYBzi%2FPkwehkEBa42djgBUCWHWwydHJN8wMAjuEJ%2B0Hya8x4fMSgPGXQ7yWzJUAZ%2FOqXftokwKIDbG%2FGm6it2qJfUZcl6SlP8MWgFQOdtoX6LlTw40nAEhcODp3lQ4hT2DuyCHGz21sX5KJZD1MVrsYE%2BMiLWz7DCIQI4cz6tbJB9FwRqHqopTc92%2BCttLFvmdqhjGSlXlCNh8YXPoJtQybNUZDXNuvcVDIKg0AGqXXyUYvCkW%2BHkvJsCvqHQB%2FmjWDhisS7BDULP337vQhq%2F3B0e3tPfxgRDD%2FzTGF%2FiBaA6uwmhrR%2FZV0KESpXn25EoL7MKDVl8EGOqUB3GasqRiZpCvmUpn2YSNwObwglYoiTFzPlP4PyuFBWIKYux7Om1tZUpuhj7FxlIjZ%2FKpGqvd1rbJtmVGxaUowhWqANSnSw2qL%2BvV6hUIkgKXuHz6RUAJjGbPDo2PlQkUY%2F1jLlLj6cT7IM9jjW64VDY02RffnLEXAiShreKT3rBS8LlMGbNtCjsSTmIduA9hrIDUIpM5SwVwVmwfv9FmbRo7R%2BaJI&X-Amz-Signature=24590b3df2cbee6f8074b295727b1fded0a813dde6e592f601581fdf650234bc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DQHJ6M7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDUuhi6xkRJE7OaITQ9RgB%2Fqn6O8Pr7EPLiklJSv7SoFAiEA%2Bfoxwy62IhsPp%2BtynXbTAX5dLBYb%2F0F%2Fbim0siQpM9Mq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAH8U7Gu4jHLRlYijSrcA0CknmRplhDToF1TeOvA9jImG7pjuVrqk0NozuC0kdel7C3q4781DP%2BPom30xNFTUVi11SbZqA87tihWKe0QDmJhZq5s0zk6kIvjygdKSq8sWqyP5GkuEewYIpomBzRkWLqSiIg4ru1XP4yAE9939WB3sVJu9tOl84gHYjOeSIVkm1BEZi8S5InVujx%2BpoLHZzCo%2FT8qiZJFLiLiDKuGqbperLKpnrxupFuoYsZZXvyR6vgwg7sHWSUlTXADxIuaEHPS8FNMSvy5kwCRJJqjYyr8utE7sCX427kjX0FkMwJkuAwj7g%2FPfz%2BnTpYBzi%2FPkwehkEBa42djgBUCWHWwydHJN8wMAjuEJ%2B0Hya8x4fMSgPGXQ7yWzJUAZ%2FOqXftokwKIDbG%2FGm6it2qJfUZcl6SlP8MWgFQOdtoX6LlTw40nAEhcODp3lQ4hT2DuyCHGz21sX5KJZD1MVrsYE%2BMiLWz7DCIQI4cz6tbJB9FwRqHqopTc92%2BCttLFvmdqhjGSlXlCNh8YXPoJtQybNUZDXNuvcVDIKg0AGqXXyUYvCkW%2BHkvJsCvqHQB%2FmjWDhisS7BDULP337vQhq%2F3B0e3tPfxgRDD%2FzTGF%2FiBaA6uwmhrR%2FZV0KESpXn25EoL7MKDVl8EGOqUB3GasqRiZpCvmUpn2YSNwObwglYoiTFzPlP4PyuFBWIKYux7Om1tZUpuhj7FxlIjZ%2FKpGqvd1rbJtmVGxaUowhWqANSnSw2qL%2BvV6hUIkgKXuHz6RUAJjGbPDo2PlQkUY%2F1jLlLj6cT7IM9jjW64VDY02RffnLEXAiShreKT3rBS8LlMGbNtCjsSTmIduA9hrIDUIpM5SwVwVmwfv9FmbRo7R%2BaJI&X-Amz-Signature=9fdab70cdae35f7c0ee5bb1a9df79f8e184a858b1255815a0e114c5335debe50&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DQHJ6M7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDUuhi6xkRJE7OaITQ9RgB%2Fqn6O8Pr7EPLiklJSv7SoFAiEA%2Bfoxwy62IhsPp%2BtynXbTAX5dLBYb%2F0F%2Fbim0siQpM9Mq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAH8U7Gu4jHLRlYijSrcA0CknmRplhDToF1TeOvA9jImG7pjuVrqk0NozuC0kdel7C3q4781DP%2BPom30xNFTUVi11SbZqA87tihWKe0QDmJhZq5s0zk6kIvjygdKSq8sWqyP5GkuEewYIpomBzRkWLqSiIg4ru1XP4yAE9939WB3sVJu9tOl84gHYjOeSIVkm1BEZi8S5InVujx%2BpoLHZzCo%2FT8qiZJFLiLiDKuGqbperLKpnrxupFuoYsZZXvyR6vgwg7sHWSUlTXADxIuaEHPS8FNMSvy5kwCRJJqjYyr8utE7sCX427kjX0FkMwJkuAwj7g%2FPfz%2BnTpYBzi%2FPkwehkEBa42djgBUCWHWwydHJN8wMAjuEJ%2B0Hya8x4fMSgPGXQ7yWzJUAZ%2FOqXftokwKIDbG%2FGm6it2qJfUZcl6SlP8MWgFQOdtoX6LlTw40nAEhcODp3lQ4hT2DuyCHGz21sX5KJZD1MVrsYE%2BMiLWz7DCIQI4cz6tbJB9FwRqHqopTc92%2BCttLFvmdqhjGSlXlCNh8YXPoJtQybNUZDXNuvcVDIKg0AGqXXyUYvCkW%2BHkvJsCvqHQB%2FmjWDhisS7BDULP337vQhq%2F3B0e3tPfxgRDD%2FzTGF%2FiBaA6uwmhrR%2FZV0KESpXn25EoL7MKDVl8EGOqUB3GasqRiZpCvmUpn2YSNwObwglYoiTFzPlP4PyuFBWIKYux7Om1tZUpuhj7FxlIjZ%2FKpGqvd1rbJtmVGxaUowhWqANSnSw2qL%2BvV6hUIkgKXuHz6RUAJjGbPDo2PlQkUY%2F1jLlLj6cT7IM9jjW64VDY02RffnLEXAiShreKT3rBS8LlMGbNtCjsSTmIduA9hrIDUIpM5SwVwVmwfv9FmbRo7R%2BaJI&X-Amz-Signature=2eb2974f3e1526b678d420c6c5e0217e9638d753f1fcaf0062c428a5ea257281&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
