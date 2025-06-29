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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETE26H3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRYFvIbTAdQRllN2CrjuQ0o%2BOQbTsHf%2BVBoGij65JhRAiEAzhvMKegHIWJtrVmt5hDI6401oXnftI7AVK3pH7Ni2qEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkRykNTl7Uj0NFu2ircA8At9w3MCpHIUcz9znLb%2F3vXeKsPwFVaKmftlULbYaPlW2r%2Bcv93vevlcKd3WeCJ9B%2F7MH8Lza9tJlQKtpjtpE6YVrfY3OAOSdXEQhldxyufQzNAm93SG29ouWMbwQHVyWluNm3gp%2BXymoZnOfHUwpeOES5fohBgXkIAsCtH4QUuJiTStg%2FjCLLXze36CUA2VECJ%2BYGS%2BOHdHJ7iWSTSON7kYPqTIq7Yzt213M%2BgzwBMLeiALMlvHE%2B%2BuTMXUg82uFhA4nDEaBHmtWcfZoi4Vl6L35Cw3ylKnG5R0C6gjjPUUp1U%2BgCH8zIgZ9PuCdecuYAp%2F4Pa49kfEjunhtmV2GZzJwNXmThpmoyW772YJv4NwL%2FBk%2BYxA%2BdD6FMOEDAjjoUlvmU4MgNeAHr5kRg9fKr2SO907UOr%2BzSlkCFT8zx8OConj89aoC7iJxO8vum9FNpqxMROIDXch%2B2TK50%2FVfw5ct4%2Fre%2F%2Fc6rJ039cCuZ5529rYai6oF56FlcSDh3vpwdJLQ61ruFxJNQhX%2FRF0S6zWC6N6d%2FsfzjGLpXBpIVfVgqL8AUf5Qeu3RgErrimyMQIYqkvErwiKR1P9wuvpYYudVVagQ2ZxCXSEs9%2FCqkN2TlLIHZ%2Bj%2BLKVhjMML7ThMMGOqUBZ9S78n9PPt3OSOU3Lex17RjQ76nuVUCALYWEQ%2FqARGbbbXpeACuBoAtMzTfOodXjTL4V6aNAArRKwfu8oBUNZ1IMxxU3jkDlUk06%2BUm%2BvAwo%2BlzvTLGiOaocJ36R1Bt2jOeRfoRXsTNKseNwFjb9n3%2FQg68tEF7mM1She3peaz%2BkFAvGomPWVKkdhNLwsEVTMkUMbB%2FAE%2FTcsTfY7PVvhZy%2FyVrS&X-Amz-Signature=d657bc6088726cb46beac169df5843a6b38a48b7f5043f157f16c1e9b225b135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETE26H3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRYFvIbTAdQRllN2CrjuQ0o%2BOQbTsHf%2BVBoGij65JhRAiEAzhvMKegHIWJtrVmt5hDI6401oXnftI7AVK3pH7Ni2qEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkRykNTl7Uj0NFu2ircA8At9w3MCpHIUcz9znLb%2F3vXeKsPwFVaKmftlULbYaPlW2r%2Bcv93vevlcKd3WeCJ9B%2F7MH8Lza9tJlQKtpjtpE6YVrfY3OAOSdXEQhldxyufQzNAm93SG29ouWMbwQHVyWluNm3gp%2BXymoZnOfHUwpeOES5fohBgXkIAsCtH4QUuJiTStg%2FjCLLXze36CUA2VECJ%2BYGS%2BOHdHJ7iWSTSON7kYPqTIq7Yzt213M%2BgzwBMLeiALMlvHE%2B%2BuTMXUg82uFhA4nDEaBHmtWcfZoi4Vl6L35Cw3ylKnG5R0C6gjjPUUp1U%2BgCH8zIgZ9PuCdecuYAp%2F4Pa49kfEjunhtmV2GZzJwNXmThpmoyW772YJv4NwL%2FBk%2BYxA%2BdD6FMOEDAjjoUlvmU4MgNeAHr5kRg9fKr2SO907UOr%2BzSlkCFT8zx8OConj89aoC7iJxO8vum9FNpqxMROIDXch%2B2TK50%2FVfw5ct4%2Fre%2F%2Fc6rJ039cCuZ5529rYai6oF56FlcSDh3vpwdJLQ61ruFxJNQhX%2FRF0S6zWC6N6d%2FsfzjGLpXBpIVfVgqL8AUf5Qeu3RgErrimyMQIYqkvErwiKR1P9wuvpYYudVVagQ2ZxCXSEs9%2FCqkN2TlLIHZ%2Bj%2BLKVhjMML7ThMMGOqUBZ9S78n9PPt3OSOU3Lex17RjQ76nuVUCALYWEQ%2FqARGbbbXpeACuBoAtMzTfOodXjTL4V6aNAArRKwfu8oBUNZ1IMxxU3jkDlUk06%2BUm%2BvAwo%2BlzvTLGiOaocJ36R1Bt2jOeRfoRXsTNKseNwFjb9n3%2FQg68tEF7mM1She3peaz%2BkFAvGomPWVKkdhNLwsEVTMkUMbB%2FAE%2FTcsTfY7PVvhZy%2FyVrS&X-Amz-Signature=83d2064b6aed7c94fa07cab05ae2e23183656cf118b7f8201ec0a8b2d5f56312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETE26H3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRYFvIbTAdQRllN2CrjuQ0o%2BOQbTsHf%2BVBoGij65JhRAiEAzhvMKegHIWJtrVmt5hDI6401oXnftI7AVK3pH7Ni2qEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkRykNTl7Uj0NFu2ircA8At9w3MCpHIUcz9znLb%2F3vXeKsPwFVaKmftlULbYaPlW2r%2Bcv93vevlcKd3WeCJ9B%2F7MH8Lza9tJlQKtpjtpE6YVrfY3OAOSdXEQhldxyufQzNAm93SG29ouWMbwQHVyWluNm3gp%2BXymoZnOfHUwpeOES5fohBgXkIAsCtH4QUuJiTStg%2FjCLLXze36CUA2VECJ%2BYGS%2BOHdHJ7iWSTSON7kYPqTIq7Yzt213M%2BgzwBMLeiALMlvHE%2B%2BuTMXUg82uFhA4nDEaBHmtWcfZoi4Vl6L35Cw3ylKnG5R0C6gjjPUUp1U%2BgCH8zIgZ9PuCdecuYAp%2F4Pa49kfEjunhtmV2GZzJwNXmThpmoyW772YJv4NwL%2FBk%2BYxA%2BdD6FMOEDAjjoUlvmU4MgNeAHr5kRg9fKr2SO907UOr%2BzSlkCFT8zx8OConj89aoC7iJxO8vum9FNpqxMROIDXch%2B2TK50%2FVfw5ct4%2Fre%2F%2Fc6rJ039cCuZ5529rYai6oF56FlcSDh3vpwdJLQ61ruFxJNQhX%2FRF0S6zWC6N6d%2FsfzjGLpXBpIVfVgqL8AUf5Qeu3RgErrimyMQIYqkvErwiKR1P9wuvpYYudVVagQ2ZxCXSEs9%2FCqkN2TlLIHZ%2Bj%2BLKVhjMML7ThMMGOqUBZ9S78n9PPt3OSOU3Lex17RjQ76nuVUCALYWEQ%2FqARGbbbXpeACuBoAtMzTfOodXjTL4V6aNAArRKwfu8oBUNZ1IMxxU3jkDlUk06%2BUm%2BvAwo%2BlzvTLGiOaocJ36R1Bt2jOeRfoRXsTNKseNwFjb9n3%2FQg68tEF7mM1She3peaz%2BkFAvGomPWVKkdhNLwsEVTMkUMbB%2FAE%2FTcsTfY7PVvhZy%2FyVrS&X-Amz-Signature=60c5998263d3835369946053a64a2ae38f6503ad3b215ef1acde6723e4715617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETE26H3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRYFvIbTAdQRllN2CrjuQ0o%2BOQbTsHf%2BVBoGij65JhRAiEAzhvMKegHIWJtrVmt5hDI6401oXnftI7AVK3pH7Ni2qEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkRykNTl7Uj0NFu2ircA8At9w3MCpHIUcz9znLb%2F3vXeKsPwFVaKmftlULbYaPlW2r%2Bcv93vevlcKd3WeCJ9B%2F7MH8Lza9tJlQKtpjtpE6YVrfY3OAOSdXEQhldxyufQzNAm93SG29ouWMbwQHVyWluNm3gp%2BXymoZnOfHUwpeOES5fohBgXkIAsCtH4QUuJiTStg%2FjCLLXze36CUA2VECJ%2BYGS%2BOHdHJ7iWSTSON7kYPqTIq7Yzt213M%2BgzwBMLeiALMlvHE%2B%2BuTMXUg82uFhA4nDEaBHmtWcfZoi4Vl6L35Cw3ylKnG5R0C6gjjPUUp1U%2BgCH8zIgZ9PuCdecuYAp%2F4Pa49kfEjunhtmV2GZzJwNXmThpmoyW772YJv4NwL%2FBk%2BYxA%2BdD6FMOEDAjjoUlvmU4MgNeAHr5kRg9fKr2SO907UOr%2BzSlkCFT8zx8OConj89aoC7iJxO8vum9FNpqxMROIDXch%2B2TK50%2FVfw5ct4%2Fre%2F%2Fc6rJ039cCuZ5529rYai6oF56FlcSDh3vpwdJLQ61ruFxJNQhX%2FRF0S6zWC6N6d%2FsfzjGLpXBpIVfVgqL8AUf5Qeu3RgErrimyMQIYqkvErwiKR1P9wuvpYYudVVagQ2ZxCXSEs9%2FCqkN2TlLIHZ%2Bj%2BLKVhjMML7ThMMGOqUBZ9S78n9PPt3OSOU3Lex17RjQ76nuVUCALYWEQ%2FqARGbbbXpeACuBoAtMzTfOodXjTL4V6aNAArRKwfu8oBUNZ1IMxxU3jkDlUk06%2BUm%2BvAwo%2BlzvTLGiOaocJ36R1Bt2jOeRfoRXsTNKseNwFjb9n3%2FQg68tEF7mM1She3peaz%2BkFAvGomPWVKkdhNLwsEVTMkUMbB%2FAE%2FTcsTfY7PVvhZy%2FyVrS&X-Amz-Signature=10bb42bd9dfbba6a304b07c10ae80443c1c78eb12885a47fc1d828e40482b0ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETE26H3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRYFvIbTAdQRllN2CrjuQ0o%2BOQbTsHf%2BVBoGij65JhRAiEAzhvMKegHIWJtrVmt5hDI6401oXnftI7AVK3pH7Ni2qEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkRykNTl7Uj0NFu2ircA8At9w3MCpHIUcz9znLb%2F3vXeKsPwFVaKmftlULbYaPlW2r%2Bcv93vevlcKd3WeCJ9B%2F7MH8Lza9tJlQKtpjtpE6YVrfY3OAOSdXEQhldxyufQzNAm93SG29ouWMbwQHVyWluNm3gp%2BXymoZnOfHUwpeOES5fohBgXkIAsCtH4QUuJiTStg%2FjCLLXze36CUA2VECJ%2BYGS%2BOHdHJ7iWSTSON7kYPqTIq7Yzt213M%2BgzwBMLeiALMlvHE%2B%2BuTMXUg82uFhA4nDEaBHmtWcfZoi4Vl6L35Cw3ylKnG5R0C6gjjPUUp1U%2BgCH8zIgZ9PuCdecuYAp%2F4Pa49kfEjunhtmV2GZzJwNXmThpmoyW772YJv4NwL%2FBk%2BYxA%2BdD6FMOEDAjjoUlvmU4MgNeAHr5kRg9fKr2SO907UOr%2BzSlkCFT8zx8OConj89aoC7iJxO8vum9FNpqxMROIDXch%2B2TK50%2FVfw5ct4%2Fre%2F%2Fc6rJ039cCuZ5529rYai6oF56FlcSDh3vpwdJLQ61ruFxJNQhX%2FRF0S6zWC6N6d%2FsfzjGLpXBpIVfVgqL8AUf5Qeu3RgErrimyMQIYqkvErwiKR1P9wuvpYYudVVagQ2ZxCXSEs9%2FCqkN2TlLIHZ%2Bj%2BLKVhjMML7ThMMGOqUBZ9S78n9PPt3OSOU3Lex17RjQ76nuVUCALYWEQ%2FqARGbbbXpeACuBoAtMzTfOodXjTL4V6aNAArRKwfu8oBUNZ1IMxxU3jkDlUk06%2BUm%2BvAwo%2BlzvTLGiOaocJ36R1Bt2jOeRfoRXsTNKseNwFjb9n3%2FQg68tEF7mM1She3peaz%2BkFAvGomPWVKkdhNLwsEVTMkUMbB%2FAE%2FTcsTfY7PVvhZy%2FyVrS&X-Amz-Signature=81535afe95ea36bee794796115b4e2693231e895ffdaff2ae39285478a1831a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETE26H3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRYFvIbTAdQRllN2CrjuQ0o%2BOQbTsHf%2BVBoGij65JhRAiEAzhvMKegHIWJtrVmt5hDI6401oXnftI7AVK3pH7Ni2qEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkRykNTl7Uj0NFu2ircA8At9w3MCpHIUcz9znLb%2F3vXeKsPwFVaKmftlULbYaPlW2r%2Bcv93vevlcKd3WeCJ9B%2F7MH8Lza9tJlQKtpjtpE6YVrfY3OAOSdXEQhldxyufQzNAm93SG29ouWMbwQHVyWluNm3gp%2BXymoZnOfHUwpeOES5fohBgXkIAsCtH4QUuJiTStg%2FjCLLXze36CUA2VECJ%2BYGS%2BOHdHJ7iWSTSON7kYPqTIq7Yzt213M%2BgzwBMLeiALMlvHE%2B%2BuTMXUg82uFhA4nDEaBHmtWcfZoi4Vl6L35Cw3ylKnG5R0C6gjjPUUp1U%2BgCH8zIgZ9PuCdecuYAp%2F4Pa49kfEjunhtmV2GZzJwNXmThpmoyW772YJv4NwL%2FBk%2BYxA%2BdD6FMOEDAjjoUlvmU4MgNeAHr5kRg9fKr2SO907UOr%2BzSlkCFT8zx8OConj89aoC7iJxO8vum9FNpqxMROIDXch%2B2TK50%2FVfw5ct4%2Fre%2F%2Fc6rJ039cCuZ5529rYai6oF56FlcSDh3vpwdJLQ61ruFxJNQhX%2FRF0S6zWC6N6d%2FsfzjGLpXBpIVfVgqL8AUf5Qeu3RgErrimyMQIYqkvErwiKR1P9wuvpYYudVVagQ2ZxCXSEs9%2FCqkN2TlLIHZ%2Bj%2BLKVhjMML7ThMMGOqUBZ9S78n9PPt3OSOU3Lex17RjQ76nuVUCALYWEQ%2FqARGbbbXpeACuBoAtMzTfOodXjTL4V6aNAArRKwfu8oBUNZ1IMxxU3jkDlUk06%2BUm%2BvAwo%2BlzvTLGiOaocJ36R1Bt2jOeRfoRXsTNKseNwFjb9n3%2FQg68tEF7mM1She3peaz%2BkFAvGomPWVKkdhNLwsEVTMkUMbB%2FAE%2FTcsTfY7PVvhZy%2FyVrS&X-Amz-Signature=78ada9b2414ca102ec74c5093c06eb24a69e39da9495bc38c3bddff969e828c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETE26H3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRYFvIbTAdQRllN2CrjuQ0o%2BOQbTsHf%2BVBoGij65JhRAiEAzhvMKegHIWJtrVmt5hDI6401oXnftI7AVK3pH7Ni2qEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkRykNTl7Uj0NFu2ircA8At9w3MCpHIUcz9znLb%2F3vXeKsPwFVaKmftlULbYaPlW2r%2Bcv93vevlcKd3WeCJ9B%2F7MH8Lza9tJlQKtpjtpE6YVrfY3OAOSdXEQhldxyufQzNAm93SG29ouWMbwQHVyWluNm3gp%2BXymoZnOfHUwpeOES5fohBgXkIAsCtH4QUuJiTStg%2FjCLLXze36CUA2VECJ%2BYGS%2BOHdHJ7iWSTSON7kYPqTIq7Yzt213M%2BgzwBMLeiALMlvHE%2B%2BuTMXUg82uFhA4nDEaBHmtWcfZoi4Vl6L35Cw3ylKnG5R0C6gjjPUUp1U%2BgCH8zIgZ9PuCdecuYAp%2F4Pa49kfEjunhtmV2GZzJwNXmThpmoyW772YJv4NwL%2FBk%2BYxA%2BdD6FMOEDAjjoUlvmU4MgNeAHr5kRg9fKr2SO907UOr%2BzSlkCFT8zx8OConj89aoC7iJxO8vum9FNpqxMROIDXch%2B2TK50%2FVfw5ct4%2Fre%2F%2Fc6rJ039cCuZ5529rYai6oF56FlcSDh3vpwdJLQ61ruFxJNQhX%2FRF0S6zWC6N6d%2FsfzjGLpXBpIVfVgqL8AUf5Qeu3RgErrimyMQIYqkvErwiKR1P9wuvpYYudVVagQ2ZxCXSEs9%2FCqkN2TlLIHZ%2Bj%2BLKVhjMML7ThMMGOqUBZ9S78n9PPt3OSOU3Lex17RjQ76nuVUCALYWEQ%2FqARGbbbXpeACuBoAtMzTfOodXjTL4V6aNAArRKwfu8oBUNZ1IMxxU3jkDlUk06%2BUm%2BvAwo%2BlzvTLGiOaocJ36R1Bt2jOeRfoRXsTNKseNwFjb9n3%2FQg68tEF7mM1She3peaz%2BkFAvGomPWVKkdhNLwsEVTMkUMbB%2FAE%2FTcsTfY7PVvhZy%2FyVrS&X-Amz-Signature=d718ded24b4e68a76331007f65332657fd92bc25acb23a5f2a41fe52152866e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
