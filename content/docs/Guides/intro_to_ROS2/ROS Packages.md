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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJA52HFS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4Va0RcRojGlXzFCROzGNgSMt6FF5L427wyXJK2nSRMAiBQdSy1M8ZOi4BYxNCgXBl6EIjvg6Nau0t65UCjPaMe3SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDBogGIhtQr9fClSGKtwDaQAKI%2BjVfJXQUShup7Wl1NVDA5gfN0ePyYJ6pIFD6o31BAuOvEG2uR3CyFIqhgcGcWsYSHr0Ny%2Fa1F2OexzJ6fgv3pTle0uzUZ2S3PbnoeYI6LPpHB%2Bu86%2FRdNgwH0tzUqVLn%2Bu4DVY6ykgX87xmySGfj8SHfjWTZ6SulmZ5%2F7RqDwIRsmwOwh4QgoZ%2Btl0oT8juk6FOjqbdruu6bHnS6gk%2BMXYybeICxsU4Q4dk8hPXrq2hvc%2Be0AzMlM%2BpUCQt8NET%2BmqOfd8o4%2FlnXn4fmT%2FMVGxVW1WGcwGJyOKiK3xwZCoUhKeQLJfpcac9dDQKL7YxesOkyHr893czYiZIezu2HYXieo%2FCSNKV%2BcnSkiPBJQUxgHT23uwXwhPA8yxLPpVexU2s%2BlWnMLxsT8N53V2Qw8aXA8dCAEr1uHauqL0upnyk3kzIZ0hotFxaCT6hCMk4PU8bV1%2FrxVw26snOLHhv7Pnp01bwZONGFgSOg1fqUi8AugLJR5gjpROjfp3f1gx4M2Jfj1pLQujF6Pk1L4bfaXp%2BldIyHzFY9K45eKwwggh9An5NSKn3YcymLMB68Z2oBFjNbAiu9%2FInxyXW7fPvVxWjMpNLHBildxhcStz%2FHH%2Ff5vJTMT6zlTQwmp75wwY6pgEGaYMORhxr1UdXAi2RHJ%2BwpqEv1IQs1NKAFNNtMThK55lB3Opg%2BA%2Be9w85pvPDJbo4n3OCmejZVdLW4HGuWUss8yocOz%2FGb6SQuZoAviLGev%2FXaide0a0BDYKdRTQ4OX3vfMZAigg5%2B4nOuIbo8O%2BsBfv%2BN0wXC1gcag3mNGT8q46qcWU%2Ba9bNYZ46dNUJhOadCaCsVPyrPUaBMDZtvM1WddbLSjE9&X-Amz-Signature=08585c03c4eb20a69fb707c71e04b710cc8acb0edbd736c6ab90e04379af2b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJA52HFS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4Va0RcRojGlXzFCROzGNgSMt6FF5L427wyXJK2nSRMAiBQdSy1M8ZOi4BYxNCgXBl6EIjvg6Nau0t65UCjPaMe3SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDBogGIhtQr9fClSGKtwDaQAKI%2BjVfJXQUShup7Wl1NVDA5gfN0ePyYJ6pIFD6o31BAuOvEG2uR3CyFIqhgcGcWsYSHr0Ny%2Fa1F2OexzJ6fgv3pTle0uzUZ2S3PbnoeYI6LPpHB%2Bu86%2FRdNgwH0tzUqVLn%2Bu4DVY6ykgX87xmySGfj8SHfjWTZ6SulmZ5%2F7RqDwIRsmwOwh4QgoZ%2Btl0oT8juk6FOjqbdruu6bHnS6gk%2BMXYybeICxsU4Q4dk8hPXrq2hvc%2Be0AzMlM%2BpUCQt8NET%2BmqOfd8o4%2FlnXn4fmT%2FMVGxVW1WGcwGJyOKiK3xwZCoUhKeQLJfpcac9dDQKL7YxesOkyHr893czYiZIezu2HYXieo%2FCSNKV%2BcnSkiPBJQUxgHT23uwXwhPA8yxLPpVexU2s%2BlWnMLxsT8N53V2Qw8aXA8dCAEr1uHauqL0upnyk3kzIZ0hotFxaCT6hCMk4PU8bV1%2FrxVw26snOLHhv7Pnp01bwZONGFgSOg1fqUi8AugLJR5gjpROjfp3f1gx4M2Jfj1pLQujF6Pk1L4bfaXp%2BldIyHzFY9K45eKwwggh9An5NSKn3YcymLMB68Z2oBFjNbAiu9%2FInxyXW7fPvVxWjMpNLHBildxhcStz%2FHH%2Ff5vJTMT6zlTQwmp75wwY6pgEGaYMORhxr1UdXAi2RHJ%2BwpqEv1IQs1NKAFNNtMThK55lB3Opg%2BA%2Be9w85pvPDJbo4n3OCmejZVdLW4HGuWUss8yocOz%2FGb6SQuZoAviLGev%2FXaide0a0BDYKdRTQ4OX3vfMZAigg5%2B4nOuIbo8O%2BsBfv%2BN0wXC1gcag3mNGT8q46qcWU%2Ba9bNYZ46dNUJhOadCaCsVPyrPUaBMDZtvM1WddbLSjE9&X-Amz-Signature=2a0a609f607bbe2aec7e8169c483d84fd225d8dc7679ffcaf71f5cafa1e553df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJA52HFS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4Va0RcRojGlXzFCROzGNgSMt6FF5L427wyXJK2nSRMAiBQdSy1M8ZOi4BYxNCgXBl6EIjvg6Nau0t65UCjPaMe3SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDBogGIhtQr9fClSGKtwDaQAKI%2BjVfJXQUShup7Wl1NVDA5gfN0ePyYJ6pIFD6o31BAuOvEG2uR3CyFIqhgcGcWsYSHr0Ny%2Fa1F2OexzJ6fgv3pTle0uzUZ2S3PbnoeYI6LPpHB%2Bu86%2FRdNgwH0tzUqVLn%2Bu4DVY6ykgX87xmySGfj8SHfjWTZ6SulmZ5%2F7RqDwIRsmwOwh4QgoZ%2Btl0oT8juk6FOjqbdruu6bHnS6gk%2BMXYybeICxsU4Q4dk8hPXrq2hvc%2Be0AzMlM%2BpUCQt8NET%2BmqOfd8o4%2FlnXn4fmT%2FMVGxVW1WGcwGJyOKiK3xwZCoUhKeQLJfpcac9dDQKL7YxesOkyHr893czYiZIezu2HYXieo%2FCSNKV%2BcnSkiPBJQUxgHT23uwXwhPA8yxLPpVexU2s%2BlWnMLxsT8N53V2Qw8aXA8dCAEr1uHauqL0upnyk3kzIZ0hotFxaCT6hCMk4PU8bV1%2FrxVw26snOLHhv7Pnp01bwZONGFgSOg1fqUi8AugLJR5gjpROjfp3f1gx4M2Jfj1pLQujF6Pk1L4bfaXp%2BldIyHzFY9K45eKwwggh9An5NSKn3YcymLMB68Z2oBFjNbAiu9%2FInxyXW7fPvVxWjMpNLHBildxhcStz%2FHH%2Ff5vJTMT6zlTQwmp75wwY6pgEGaYMORhxr1UdXAi2RHJ%2BwpqEv1IQs1NKAFNNtMThK55lB3Opg%2BA%2Be9w85pvPDJbo4n3OCmejZVdLW4HGuWUss8yocOz%2FGb6SQuZoAviLGev%2FXaide0a0BDYKdRTQ4OX3vfMZAigg5%2B4nOuIbo8O%2BsBfv%2BN0wXC1gcag3mNGT8q46qcWU%2Ba9bNYZ46dNUJhOadCaCsVPyrPUaBMDZtvM1WddbLSjE9&X-Amz-Signature=fd2a2ead599e90353c98a984657ad15c31b91484878aaf49f89482ce364a0891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJA52HFS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4Va0RcRojGlXzFCROzGNgSMt6FF5L427wyXJK2nSRMAiBQdSy1M8ZOi4BYxNCgXBl6EIjvg6Nau0t65UCjPaMe3SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDBogGIhtQr9fClSGKtwDaQAKI%2BjVfJXQUShup7Wl1NVDA5gfN0ePyYJ6pIFD6o31BAuOvEG2uR3CyFIqhgcGcWsYSHr0Ny%2Fa1F2OexzJ6fgv3pTle0uzUZ2S3PbnoeYI6LPpHB%2Bu86%2FRdNgwH0tzUqVLn%2Bu4DVY6ykgX87xmySGfj8SHfjWTZ6SulmZ5%2F7RqDwIRsmwOwh4QgoZ%2Btl0oT8juk6FOjqbdruu6bHnS6gk%2BMXYybeICxsU4Q4dk8hPXrq2hvc%2Be0AzMlM%2BpUCQt8NET%2BmqOfd8o4%2FlnXn4fmT%2FMVGxVW1WGcwGJyOKiK3xwZCoUhKeQLJfpcac9dDQKL7YxesOkyHr893czYiZIezu2HYXieo%2FCSNKV%2BcnSkiPBJQUxgHT23uwXwhPA8yxLPpVexU2s%2BlWnMLxsT8N53V2Qw8aXA8dCAEr1uHauqL0upnyk3kzIZ0hotFxaCT6hCMk4PU8bV1%2FrxVw26snOLHhv7Pnp01bwZONGFgSOg1fqUi8AugLJR5gjpROjfp3f1gx4M2Jfj1pLQujF6Pk1L4bfaXp%2BldIyHzFY9K45eKwwggh9An5NSKn3YcymLMB68Z2oBFjNbAiu9%2FInxyXW7fPvVxWjMpNLHBildxhcStz%2FHH%2Ff5vJTMT6zlTQwmp75wwY6pgEGaYMORhxr1UdXAi2RHJ%2BwpqEv1IQs1NKAFNNtMThK55lB3Opg%2BA%2Be9w85pvPDJbo4n3OCmejZVdLW4HGuWUss8yocOz%2FGb6SQuZoAviLGev%2FXaide0a0BDYKdRTQ4OX3vfMZAigg5%2B4nOuIbo8O%2BsBfv%2BN0wXC1gcag3mNGT8q46qcWU%2Ba9bNYZ46dNUJhOadCaCsVPyrPUaBMDZtvM1WddbLSjE9&X-Amz-Signature=b7b9cad16b658533932e38db2413481bc835b203f794f3a2bc70385b95db16b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJA52HFS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4Va0RcRojGlXzFCROzGNgSMt6FF5L427wyXJK2nSRMAiBQdSy1M8ZOi4BYxNCgXBl6EIjvg6Nau0t65UCjPaMe3SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDBogGIhtQr9fClSGKtwDaQAKI%2BjVfJXQUShup7Wl1NVDA5gfN0ePyYJ6pIFD6o31BAuOvEG2uR3CyFIqhgcGcWsYSHr0Ny%2Fa1F2OexzJ6fgv3pTle0uzUZ2S3PbnoeYI6LPpHB%2Bu86%2FRdNgwH0tzUqVLn%2Bu4DVY6ykgX87xmySGfj8SHfjWTZ6SulmZ5%2F7RqDwIRsmwOwh4QgoZ%2Btl0oT8juk6FOjqbdruu6bHnS6gk%2BMXYybeICxsU4Q4dk8hPXrq2hvc%2Be0AzMlM%2BpUCQt8NET%2BmqOfd8o4%2FlnXn4fmT%2FMVGxVW1WGcwGJyOKiK3xwZCoUhKeQLJfpcac9dDQKL7YxesOkyHr893czYiZIezu2HYXieo%2FCSNKV%2BcnSkiPBJQUxgHT23uwXwhPA8yxLPpVexU2s%2BlWnMLxsT8N53V2Qw8aXA8dCAEr1uHauqL0upnyk3kzIZ0hotFxaCT6hCMk4PU8bV1%2FrxVw26snOLHhv7Pnp01bwZONGFgSOg1fqUi8AugLJR5gjpROjfp3f1gx4M2Jfj1pLQujF6Pk1L4bfaXp%2BldIyHzFY9K45eKwwggh9An5NSKn3YcymLMB68Z2oBFjNbAiu9%2FInxyXW7fPvVxWjMpNLHBildxhcStz%2FHH%2Ff5vJTMT6zlTQwmp75wwY6pgEGaYMORhxr1UdXAi2RHJ%2BwpqEv1IQs1NKAFNNtMThK55lB3Opg%2BA%2Be9w85pvPDJbo4n3OCmejZVdLW4HGuWUss8yocOz%2FGb6SQuZoAviLGev%2FXaide0a0BDYKdRTQ4OX3vfMZAigg5%2B4nOuIbo8O%2BsBfv%2BN0wXC1gcag3mNGT8q46qcWU%2Ba9bNYZ46dNUJhOadCaCsVPyrPUaBMDZtvM1WddbLSjE9&X-Amz-Signature=a9d3ad9787cf755baa49dcdca16d699bd25265f2fd511ec9a565084c15424797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJA52HFS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4Va0RcRojGlXzFCROzGNgSMt6FF5L427wyXJK2nSRMAiBQdSy1M8ZOi4BYxNCgXBl6EIjvg6Nau0t65UCjPaMe3SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDBogGIhtQr9fClSGKtwDaQAKI%2BjVfJXQUShup7Wl1NVDA5gfN0ePyYJ6pIFD6o31BAuOvEG2uR3CyFIqhgcGcWsYSHr0Ny%2Fa1F2OexzJ6fgv3pTle0uzUZ2S3PbnoeYI6LPpHB%2Bu86%2FRdNgwH0tzUqVLn%2Bu4DVY6ykgX87xmySGfj8SHfjWTZ6SulmZ5%2F7RqDwIRsmwOwh4QgoZ%2Btl0oT8juk6FOjqbdruu6bHnS6gk%2BMXYybeICxsU4Q4dk8hPXrq2hvc%2Be0AzMlM%2BpUCQt8NET%2BmqOfd8o4%2FlnXn4fmT%2FMVGxVW1WGcwGJyOKiK3xwZCoUhKeQLJfpcac9dDQKL7YxesOkyHr893czYiZIezu2HYXieo%2FCSNKV%2BcnSkiPBJQUxgHT23uwXwhPA8yxLPpVexU2s%2BlWnMLxsT8N53V2Qw8aXA8dCAEr1uHauqL0upnyk3kzIZ0hotFxaCT6hCMk4PU8bV1%2FrxVw26snOLHhv7Pnp01bwZONGFgSOg1fqUi8AugLJR5gjpROjfp3f1gx4M2Jfj1pLQujF6Pk1L4bfaXp%2BldIyHzFY9K45eKwwggh9An5NSKn3YcymLMB68Z2oBFjNbAiu9%2FInxyXW7fPvVxWjMpNLHBildxhcStz%2FHH%2Ff5vJTMT6zlTQwmp75wwY6pgEGaYMORhxr1UdXAi2RHJ%2BwpqEv1IQs1NKAFNNtMThK55lB3Opg%2BA%2Be9w85pvPDJbo4n3OCmejZVdLW4HGuWUss8yocOz%2FGb6SQuZoAviLGev%2FXaide0a0BDYKdRTQ4OX3vfMZAigg5%2B4nOuIbo8O%2BsBfv%2BN0wXC1gcag3mNGT8q46qcWU%2Ba9bNYZ46dNUJhOadCaCsVPyrPUaBMDZtvM1WddbLSjE9&X-Amz-Signature=071117258f818411a551da438a2f5ed2c4d8bf2fcae03f46ef90073a3bf14215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJA52HFS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4Va0RcRojGlXzFCROzGNgSMt6FF5L427wyXJK2nSRMAiBQdSy1M8ZOi4BYxNCgXBl6EIjvg6Nau0t65UCjPaMe3SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDBogGIhtQr9fClSGKtwDaQAKI%2BjVfJXQUShup7Wl1NVDA5gfN0ePyYJ6pIFD6o31BAuOvEG2uR3CyFIqhgcGcWsYSHr0Ny%2Fa1F2OexzJ6fgv3pTle0uzUZ2S3PbnoeYI6LPpHB%2Bu86%2FRdNgwH0tzUqVLn%2Bu4DVY6ykgX87xmySGfj8SHfjWTZ6SulmZ5%2F7RqDwIRsmwOwh4QgoZ%2Btl0oT8juk6FOjqbdruu6bHnS6gk%2BMXYybeICxsU4Q4dk8hPXrq2hvc%2Be0AzMlM%2BpUCQt8NET%2BmqOfd8o4%2FlnXn4fmT%2FMVGxVW1WGcwGJyOKiK3xwZCoUhKeQLJfpcac9dDQKL7YxesOkyHr893czYiZIezu2HYXieo%2FCSNKV%2BcnSkiPBJQUxgHT23uwXwhPA8yxLPpVexU2s%2BlWnMLxsT8N53V2Qw8aXA8dCAEr1uHauqL0upnyk3kzIZ0hotFxaCT6hCMk4PU8bV1%2FrxVw26snOLHhv7Pnp01bwZONGFgSOg1fqUi8AugLJR5gjpROjfp3f1gx4M2Jfj1pLQujF6Pk1L4bfaXp%2BldIyHzFY9K45eKwwggh9An5NSKn3YcymLMB68Z2oBFjNbAiu9%2FInxyXW7fPvVxWjMpNLHBildxhcStz%2FHH%2Ff5vJTMT6zlTQwmp75wwY6pgEGaYMORhxr1UdXAi2RHJ%2BwpqEv1IQs1NKAFNNtMThK55lB3Opg%2BA%2Be9w85pvPDJbo4n3OCmejZVdLW4HGuWUss8yocOz%2FGb6SQuZoAviLGev%2FXaide0a0BDYKdRTQ4OX3vfMZAigg5%2B4nOuIbo8O%2BsBfv%2BN0wXC1gcag3mNGT8q46qcWU%2Ba9bNYZ46dNUJhOadCaCsVPyrPUaBMDZtvM1WddbLSjE9&X-Amz-Signature=abc6200fa92e77c769d358cf2d1f9e076ce2ebb3a3f64c001a190ce676e58ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
