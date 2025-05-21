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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TB2XJWE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDiQoFm5Kos%2FbV56VWwNL1wH%2FTm9lvTWRfyJ919EZVlPwIgGPVJTI1fkgU1GsADjEZbJHTQ4UKpsW1F%2B56jGklIUJkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpOYE1%2B93PdhCrpSSrcA7kRSGmIGsI%2FADQXMQFz9vyXcbtEzB3LeVpgdQTEZjR1NztDopqP8BwVyZQ3FzmjDkS3VoAJV8Z0uZjUA%2FFksrg1nj45OM7zfwMR7Iwu3njhHKVomZPcX3DGjH8p4wQaSPIB%2FCI%2F5W3VbYOabD8dFb9fz8ol5X%2F%2FmbpV5pQvmrfAyf8pFBtD1I87tOeizBDQfCUkW2KXmCbdvR5PIL8byvjv078RGisDh469k36vKhVT0%2BJkwHlcUtUQ9VFhUoXRk2qO%2FKpwzuCwAXSrb2Zq2Rs%2Fe7s9YfYKk8dih2V13xHEZ0v5AAwaxTNmvlN%2Ffwy%2FGFoZ0QLoPgTqyGoQx609w9ZrW9q90PEeW6m4HlxGxUVmmQXbvqcH7P%2B%2B%2BPkT40kv37C%2Fec7n73lBl6SCRqh7O%2FZaEQhrLnhvl6pFNE2Pat%2BMjA4mj%2B5V88NJqgWMHhwP5Gd91h4dEljHUZxbsgxsdvzRp18n72eaqqZbkM0uwEYcpnjTkvXMekDR0UoudyqMfT4SHGbAzjLVjqMF3qt9qi53UexqaDtyKJ2LWz97achW%2Bc6eHcvwkry%2B467EjwwBUXIfvVv84tkv7DjymQY1eIDoRd4D1kH98IFXfgs0HOAFSiJX9j1KUzKc7fWTMN%2FDt8EGOqUBWCznP%2BUfqVFXctbFbqe0AHnXnVPOD4Cv%2F9hV0liV7vxj8NI%2BaT6tgMNI1uAu8CueRccBkqT0XwsQj95DVf1qRiMn6Z9ZR0pGJ5YS98zNeS%2FxKYhodjp%2BCCVlrjt4IO2ai6LforQ8CBdiCAHhhSkxlFKxDPhWUbyGMgWDMAHN50sfMTcKCulYz40fPNL9DBJTmeSAcSTuEAvEVzqbO3JbRz6TVLnB&X-Amz-Signature=4960715e2a933f98e8627011e1022b6bc474fe4bfbd76e3dfc87518c2442dfff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TB2XJWE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDiQoFm5Kos%2FbV56VWwNL1wH%2FTm9lvTWRfyJ919EZVlPwIgGPVJTI1fkgU1GsADjEZbJHTQ4UKpsW1F%2B56jGklIUJkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpOYE1%2B93PdhCrpSSrcA7kRSGmIGsI%2FADQXMQFz9vyXcbtEzB3LeVpgdQTEZjR1NztDopqP8BwVyZQ3FzmjDkS3VoAJV8Z0uZjUA%2FFksrg1nj45OM7zfwMR7Iwu3njhHKVomZPcX3DGjH8p4wQaSPIB%2FCI%2F5W3VbYOabD8dFb9fz8ol5X%2F%2FmbpV5pQvmrfAyf8pFBtD1I87tOeizBDQfCUkW2KXmCbdvR5PIL8byvjv078RGisDh469k36vKhVT0%2BJkwHlcUtUQ9VFhUoXRk2qO%2FKpwzuCwAXSrb2Zq2Rs%2Fe7s9YfYKk8dih2V13xHEZ0v5AAwaxTNmvlN%2Ffwy%2FGFoZ0QLoPgTqyGoQx609w9ZrW9q90PEeW6m4HlxGxUVmmQXbvqcH7P%2B%2B%2BPkT40kv37C%2Fec7n73lBl6SCRqh7O%2FZaEQhrLnhvl6pFNE2Pat%2BMjA4mj%2B5V88NJqgWMHhwP5Gd91h4dEljHUZxbsgxsdvzRp18n72eaqqZbkM0uwEYcpnjTkvXMekDR0UoudyqMfT4SHGbAzjLVjqMF3qt9qi53UexqaDtyKJ2LWz97achW%2Bc6eHcvwkry%2B467EjwwBUXIfvVv84tkv7DjymQY1eIDoRd4D1kH98IFXfgs0HOAFSiJX9j1KUzKc7fWTMN%2FDt8EGOqUBWCznP%2BUfqVFXctbFbqe0AHnXnVPOD4Cv%2F9hV0liV7vxj8NI%2BaT6tgMNI1uAu8CueRccBkqT0XwsQj95DVf1qRiMn6Z9ZR0pGJ5YS98zNeS%2FxKYhodjp%2BCCVlrjt4IO2ai6LforQ8CBdiCAHhhSkxlFKxDPhWUbyGMgWDMAHN50sfMTcKCulYz40fPNL9DBJTmeSAcSTuEAvEVzqbO3JbRz6TVLnB&X-Amz-Signature=8d5d1465d6b458f307d969ab3ea68259a9d239cf37db678576373fb64ad0e203&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TB2XJWE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDiQoFm5Kos%2FbV56VWwNL1wH%2FTm9lvTWRfyJ919EZVlPwIgGPVJTI1fkgU1GsADjEZbJHTQ4UKpsW1F%2B56jGklIUJkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpOYE1%2B93PdhCrpSSrcA7kRSGmIGsI%2FADQXMQFz9vyXcbtEzB3LeVpgdQTEZjR1NztDopqP8BwVyZQ3FzmjDkS3VoAJV8Z0uZjUA%2FFksrg1nj45OM7zfwMR7Iwu3njhHKVomZPcX3DGjH8p4wQaSPIB%2FCI%2F5W3VbYOabD8dFb9fz8ol5X%2F%2FmbpV5pQvmrfAyf8pFBtD1I87tOeizBDQfCUkW2KXmCbdvR5PIL8byvjv078RGisDh469k36vKhVT0%2BJkwHlcUtUQ9VFhUoXRk2qO%2FKpwzuCwAXSrb2Zq2Rs%2Fe7s9YfYKk8dih2V13xHEZ0v5AAwaxTNmvlN%2Ffwy%2FGFoZ0QLoPgTqyGoQx609w9ZrW9q90PEeW6m4HlxGxUVmmQXbvqcH7P%2B%2B%2BPkT40kv37C%2Fec7n73lBl6SCRqh7O%2FZaEQhrLnhvl6pFNE2Pat%2BMjA4mj%2B5V88NJqgWMHhwP5Gd91h4dEljHUZxbsgxsdvzRp18n72eaqqZbkM0uwEYcpnjTkvXMekDR0UoudyqMfT4SHGbAzjLVjqMF3qt9qi53UexqaDtyKJ2LWz97achW%2Bc6eHcvwkry%2B467EjwwBUXIfvVv84tkv7DjymQY1eIDoRd4D1kH98IFXfgs0HOAFSiJX9j1KUzKc7fWTMN%2FDt8EGOqUBWCznP%2BUfqVFXctbFbqe0AHnXnVPOD4Cv%2F9hV0liV7vxj8NI%2BaT6tgMNI1uAu8CueRccBkqT0XwsQj95DVf1qRiMn6Z9ZR0pGJ5YS98zNeS%2FxKYhodjp%2BCCVlrjt4IO2ai6LforQ8CBdiCAHhhSkxlFKxDPhWUbyGMgWDMAHN50sfMTcKCulYz40fPNL9DBJTmeSAcSTuEAvEVzqbO3JbRz6TVLnB&X-Amz-Signature=c645bc9353e489383a2cfb746afb4212c4fc00a378774c27ee53cac8f294dc3a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TB2XJWE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDiQoFm5Kos%2FbV56VWwNL1wH%2FTm9lvTWRfyJ919EZVlPwIgGPVJTI1fkgU1GsADjEZbJHTQ4UKpsW1F%2B56jGklIUJkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpOYE1%2B93PdhCrpSSrcA7kRSGmIGsI%2FADQXMQFz9vyXcbtEzB3LeVpgdQTEZjR1NztDopqP8BwVyZQ3FzmjDkS3VoAJV8Z0uZjUA%2FFksrg1nj45OM7zfwMR7Iwu3njhHKVomZPcX3DGjH8p4wQaSPIB%2FCI%2F5W3VbYOabD8dFb9fz8ol5X%2F%2FmbpV5pQvmrfAyf8pFBtD1I87tOeizBDQfCUkW2KXmCbdvR5PIL8byvjv078RGisDh469k36vKhVT0%2BJkwHlcUtUQ9VFhUoXRk2qO%2FKpwzuCwAXSrb2Zq2Rs%2Fe7s9YfYKk8dih2V13xHEZ0v5AAwaxTNmvlN%2Ffwy%2FGFoZ0QLoPgTqyGoQx609w9ZrW9q90PEeW6m4HlxGxUVmmQXbvqcH7P%2B%2B%2BPkT40kv37C%2Fec7n73lBl6SCRqh7O%2FZaEQhrLnhvl6pFNE2Pat%2BMjA4mj%2B5V88NJqgWMHhwP5Gd91h4dEljHUZxbsgxsdvzRp18n72eaqqZbkM0uwEYcpnjTkvXMekDR0UoudyqMfT4SHGbAzjLVjqMF3qt9qi53UexqaDtyKJ2LWz97achW%2Bc6eHcvwkry%2B467EjwwBUXIfvVv84tkv7DjymQY1eIDoRd4D1kH98IFXfgs0HOAFSiJX9j1KUzKc7fWTMN%2FDt8EGOqUBWCznP%2BUfqVFXctbFbqe0AHnXnVPOD4Cv%2F9hV0liV7vxj8NI%2BaT6tgMNI1uAu8CueRccBkqT0XwsQj95DVf1qRiMn6Z9ZR0pGJ5YS98zNeS%2FxKYhodjp%2BCCVlrjt4IO2ai6LforQ8CBdiCAHhhSkxlFKxDPhWUbyGMgWDMAHN50sfMTcKCulYz40fPNL9DBJTmeSAcSTuEAvEVzqbO3JbRz6TVLnB&X-Amz-Signature=4e0a0c0e666aa141901c0ff5ec7b66314b6408f9d5392a6d25263315130bb0fa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TB2XJWE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDiQoFm5Kos%2FbV56VWwNL1wH%2FTm9lvTWRfyJ919EZVlPwIgGPVJTI1fkgU1GsADjEZbJHTQ4UKpsW1F%2B56jGklIUJkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpOYE1%2B93PdhCrpSSrcA7kRSGmIGsI%2FADQXMQFz9vyXcbtEzB3LeVpgdQTEZjR1NztDopqP8BwVyZQ3FzmjDkS3VoAJV8Z0uZjUA%2FFksrg1nj45OM7zfwMR7Iwu3njhHKVomZPcX3DGjH8p4wQaSPIB%2FCI%2F5W3VbYOabD8dFb9fz8ol5X%2F%2FmbpV5pQvmrfAyf8pFBtD1I87tOeizBDQfCUkW2KXmCbdvR5PIL8byvjv078RGisDh469k36vKhVT0%2BJkwHlcUtUQ9VFhUoXRk2qO%2FKpwzuCwAXSrb2Zq2Rs%2Fe7s9YfYKk8dih2V13xHEZ0v5AAwaxTNmvlN%2Ffwy%2FGFoZ0QLoPgTqyGoQx609w9ZrW9q90PEeW6m4HlxGxUVmmQXbvqcH7P%2B%2B%2BPkT40kv37C%2Fec7n73lBl6SCRqh7O%2FZaEQhrLnhvl6pFNE2Pat%2BMjA4mj%2B5V88NJqgWMHhwP5Gd91h4dEljHUZxbsgxsdvzRp18n72eaqqZbkM0uwEYcpnjTkvXMekDR0UoudyqMfT4SHGbAzjLVjqMF3qt9qi53UexqaDtyKJ2LWz97achW%2Bc6eHcvwkry%2B467EjwwBUXIfvVv84tkv7DjymQY1eIDoRd4D1kH98IFXfgs0HOAFSiJX9j1KUzKc7fWTMN%2FDt8EGOqUBWCznP%2BUfqVFXctbFbqe0AHnXnVPOD4Cv%2F9hV0liV7vxj8NI%2BaT6tgMNI1uAu8CueRccBkqT0XwsQj95DVf1qRiMn6Z9ZR0pGJ5YS98zNeS%2FxKYhodjp%2BCCVlrjt4IO2ai6LforQ8CBdiCAHhhSkxlFKxDPhWUbyGMgWDMAHN50sfMTcKCulYz40fPNL9DBJTmeSAcSTuEAvEVzqbO3JbRz6TVLnB&X-Amz-Signature=0ddffcb11faddf221d84be78a15cf7db2be8e79cabd81d578b56c359adab105f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TB2XJWE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDiQoFm5Kos%2FbV56VWwNL1wH%2FTm9lvTWRfyJ919EZVlPwIgGPVJTI1fkgU1GsADjEZbJHTQ4UKpsW1F%2B56jGklIUJkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpOYE1%2B93PdhCrpSSrcA7kRSGmIGsI%2FADQXMQFz9vyXcbtEzB3LeVpgdQTEZjR1NztDopqP8BwVyZQ3FzmjDkS3VoAJV8Z0uZjUA%2FFksrg1nj45OM7zfwMR7Iwu3njhHKVomZPcX3DGjH8p4wQaSPIB%2FCI%2F5W3VbYOabD8dFb9fz8ol5X%2F%2FmbpV5pQvmrfAyf8pFBtD1I87tOeizBDQfCUkW2KXmCbdvR5PIL8byvjv078RGisDh469k36vKhVT0%2BJkwHlcUtUQ9VFhUoXRk2qO%2FKpwzuCwAXSrb2Zq2Rs%2Fe7s9YfYKk8dih2V13xHEZ0v5AAwaxTNmvlN%2Ffwy%2FGFoZ0QLoPgTqyGoQx609w9ZrW9q90PEeW6m4HlxGxUVmmQXbvqcH7P%2B%2B%2BPkT40kv37C%2Fec7n73lBl6SCRqh7O%2FZaEQhrLnhvl6pFNE2Pat%2BMjA4mj%2B5V88NJqgWMHhwP5Gd91h4dEljHUZxbsgxsdvzRp18n72eaqqZbkM0uwEYcpnjTkvXMekDR0UoudyqMfT4SHGbAzjLVjqMF3qt9qi53UexqaDtyKJ2LWz97achW%2Bc6eHcvwkry%2B467EjwwBUXIfvVv84tkv7DjymQY1eIDoRd4D1kH98IFXfgs0HOAFSiJX9j1KUzKc7fWTMN%2FDt8EGOqUBWCznP%2BUfqVFXctbFbqe0AHnXnVPOD4Cv%2F9hV0liV7vxj8NI%2BaT6tgMNI1uAu8CueRccBkqT0XwsQj95DVf1qRiMn6Z9ZR0pGJ5YS98zNeS%2FxKYhodjp%2BCCVlrjt4IO2ai6LforQ8CBdiCAHhhSkxlFKxDPhWUbyGMgWDMAHN50sfMTcKCulYz40fPNL9DBJTmeSAcSTuEAvEVzqbO3JbRz6TVLnB&X-Amz-Signature=bae54f9d76dcbd1a5e3e7951482c9c1a45a14a4a01ec8340b3606d1dc71686b5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TB2XJWE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDiQoFm5Kos%2FbV56VWwNL1wH%2FTm9lvTWRfyJ919EZVlPwIgGPVJTI1fkgU1GsADjEZbJHTQ4UKpsW1F%2B56jGklIUJkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpOYE1%2B93PdhCrpSSrcA7kRSGmIGsI%2FADQXMQFz9vyXcbtEzB3LeVpgdQTEZjR1NztDopqP8BwVyZQ3FzmjDkS3VoAJV8Z0uZjUA%2FFksrg1nj45OM7zfwMR7Iwu3njhHKVomZPcX3DGjH8p4wQaSPIB%2FCI%2F5W3VbYOabD8dFb9fz8ol5X%2F%2FmbpV5pQvmrfAyf8pFBtD1I87tOeizBDQfCUkW2KXmCbdvR5PIL8byvjv078RGisDh469k36vKhVT0%2BJkwHlcUtUQ9VFhUoXRk2qO%2FKpwzuCwAXSrb2Zq2Rs%2Fe7s9YfYKk8dih2V13xHEZ0v5AAwaxTNmvlN%2Ffwy%2FGFoZ0QLoPgTqyGoQx609w9ZrW9q90PEeW6m4HlxGxUVmmQXbvqcH7P%2B%2B%2BPkT40kv37C%2Fec7n73lBl6SCRqh7O%2FZaEQhrLnhvl6pFNE2Pat%2BMjA4mj%2B5V88NJqgWMHhwP5Gd91h4dEljHUZxbsgxsdvzRp18n72eaqqZbkM0uwEYcpnjTkvXMekDR0UoudyqMfT4SHGbAzjLVjqMF3qt9qi53UexqaDtyKJ2LWz97achW%2Bc6eHcvwkry%2B467EjwwBUXIfvVv84tkv7DjymQY1eIDoRd4D1kH98IFXfgs0HOAFSiJX9j1KUzKc7fWTMN%2FDt8EGOqUBWCznP%2BUfqVFXctbFbqe0AHnXnVPOD4Cv%2F9hV0liV7vxj8NI%2BaT6tgMNI1uAu8CueRccBkqT0XwsQj95DVf1qRiMn6Z9ZR0pGJ5YS98zNeS%2FxKYhodjp%2BCCVlrjt4IO2ai6LforQ8CBdiCAHhhSkxlFKxDPhWUbyGMgWDMAHN50sfMTcKCulYz40fPNL9DBJTmeSAcSTuEAvEVzqbO3JbRz6TVLnB&X-Amz-Signature=e5a4d70b658cf2b09c0874b0f2a73386972187358314b0db2aea930a3e496b95&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
