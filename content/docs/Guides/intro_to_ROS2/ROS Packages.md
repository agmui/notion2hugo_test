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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2L3YZ4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8x8m%2F8WSqoA71mt6rYgBcAbSH4iavXmCCamIMBmm8wIgMGbEVORB0WUYRyJzwqILYJBNJH9Pg4sG8rc2PJVxeXUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBfmRYmbB8OMTjPH3CrcAzzaPZeNX9mkKJZxxC1Sxe8d93qOWrKujytsmfhOpaSYT%2BPgyKV4OFCG1EYnVu6o5bsvO7VuYUeqqkabBsyhCMU39AZHGmjVmTlp%2FKQP8wk7b6yQy%2BzRJwQ%2Bc4XibTbVS%2FLVB7ryb8edGc0tyiF9F5QnErfcd%2BP3y5dYcWDvfh8D2aMrl8JwmLcZZdXc3IuUJBvXvl9m26pBN9zLdWGXl4QZ8%2B7Q90Zlqk%2Fz7Rco5LWyVQ6a7HfvnpAbn84hx7ZWcSeqlnpVU3ixGT3%2BRfsHyOmFdup9jbwyVKG44jyO4bQWU6DMEvhsGmsFlCKL0YE%2FP39afhoJsLMtl9c7mcCtAldRlJRgIrqM8WZlGFwIR1n2lfxWkJNdi7t3dC2a%2FKNJ42owC4VvlS8paOu%2BMVI%2FnbyLkvV73PYb%2Bw6G63Bv2DxPWLpS5%2F2lp1ZUrYoQCO0LHRHy%2BGz3CjW8LpAATT80zmdFGI6NLvi77YM9kI%2BTWxJcVQTU0sAjruz5hb%2B%2F0X%2BHcpy7tdaaTfDviN19XhXA88okayYL9d36qqN%2BnCgQ0qQz639tlfg%2BLMN%2BgGoSGXeM07Wv4mNIpyiLktZ%2FukkT4aJ1TylXVd1yKoXhGkKnCZ3AKDFcWa1WqLW5BJV%2FMJOrvsQGOqUB2suQhT3e8xKp3Ur3x1SHAf3u4KAqHSgbRl54%2BnRmHXN%2B0tu5RHDvNfYwuiNeW7LSoGCdsuSVQf3smFMjKJpWeVO2BhrU0qy1OzQvweasaxeScaNn0zU3X7YdJ8n4zJ5aH4enSs9RAXaGr3YKBPUAHCKKoB6NnH0QGIBKwUrHTB%2BDmrnl8iQF%2BaSop01F95IUqWGrasSTLSBAiOkCW8vZFodJSrew&X-Amz-Signature=c47d165c1141e9016ed07cf3ad84ffa48d92dba2c80a2cd0d371f47062506ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2L3YZ4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8x8m%2F8WSqoA71mt6rYgBcAbSH4iavXmCCamIMBmm8wIgMGbEVORB0WUYRyJzwqILYJBNJH9Pg4sG8rc2PJVxeXUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBfmRYmbB8OMTjPH3CrcAzzaPZeNX9mkKJZxxC1Sxe8d93qOWrKujytsmfhOpaSYT%2BPgyKV4OFCG1EYnVu6o5bsvO7VuYUeqqkabBsyhCMU39AZHGmjVmTlp%2FKQP8wk7b6yQy%2BzRJwQ%2Bc4XibTbVS%2FLVB7ryb8edGc0tyiF9F5QnErfcd%2BP3y5dYcWDvfh8D2aMrl8JwmLcZZdXc3IuUJBvXvl9m26pBN9zLdWGXl4QZ8%2B7Q90Zlqk%2Fz7Rco5LWyVQ6a7HfvnpAbn84hx7ZWcSeqlnpVU3ixGT3%2BRfsHyOmFdup9jbwyVKG44jyO4bQWU6DMEvhsGmsFlCKL0YE%2FP39afhoJsLMtl9c7mcCtAldRlJRgIrqM8WZlGFwIR1n2lfxWkJNdi7t3dC2a%2FKNJ42owC4VvlS8paOu%2BMVI%2FnbyLkvV73PYb%2Bw6G63Bv2DxPWLpS5%2F2lp1ZUrYoQCO0LHRHy%2BGz3CjW8LpAATT80zmdFGI6NLvi77YM9kI%2BTWxJcVQTU0sAjruz5hb%2B%2F0X%2BHcpy7tdaaTfDviN19XhXA88okayYL9d36qqN%2BnCgQ0qQz639tlfg%2BLMN%2BgGoSGXeM07Wv4mNIpyiLktZ%2FukkT4aJ1TylXVd1yKoXhGkKnCZ3AKDFcWa1WqLW5BJV%2FMJOrvsQGOqUB2suQhT3e8xKp3Ur3x1SHAf3u4KAqHSgbRl54%2BnRmHXN%2B0tu5RHDvNfYwuiNeW7LSoGCdsuSVQf3smFMjKJpWeVO2BhrU0qy1OzQvweasaxeScaNn0zU3X7YdJ8n4zJ5aH4enSs9RAXaGr3YKBPUAHCKKoB6NnH0QGIBKwUrHTB%2BDmrnl8iQF%2BaSop01F95IUqWGrasSTLSBAiOkCW8vZFodJSrew&X-Amz-Signature=3a9aee732b96917f1af01716020127f737d83ddd29b35168f3e5c94a394ee112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2L3YZ4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8x8m%2F8WSqoA71mt6rYgBcAbSH4iavXmCCamIMBmm8wIgMGbEVORB0WUYRyJzwqILYJBNJH9Pg4sG8rc2PJVxeXUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBfmRYmbB8OMTjPH3CrcAzzaPZeNX9mkKJZxxC1Sxe8d93qOWrKujytsmfhOpaSYT%2BPgyKV4OFCG1EYnVu6o5bsvO7VuYUeqqkabBsyhCMU39AZHGmjVmTlp%2FKQP8wk7b6yQy%2BzRJwQ%2Bc4XibTbVS%2FLVB7ryb8edGc0tyiF9F5QnErfcd%2BP3y5dYcWDvfh8D2aMrl8JwmLcZZdXc3IuUJBvXvl9m26pBN9zLdWGXl4QZ8%2B7Q90Zlqk%2Fz7Rco5LWyVQ6a7HfvnpAbn84hx7ZWcSeqlnpVU3ixGT3%2BRfsHyOmFdup9jbwyVKG44jyO4bQWU6DMEvhsGmsFlCKL0YE%2FP39afhoJsLMtl9c7mcCtAldRlJRgIrqM8WZlGFwIR1n2lfxWkJNdi7t3dC2a%2FKNJ42owC4VvlS8paOu%2BMVI%2FnbyLkvV73PYb%2Bw6G63Bv2DxPWLpS5%2F2lp1ZUrYoQCO0LHRHy%2BGz3CjW8LpAATT80zmdFGI6NLvi77YM9kI%2BTWxJcVQTU0sAjruz5hb%2B%2F0X%2BHcpy7tdaaTfDviN19XhXA88okayYL9d36qqN%2BnCgQ0qQz639tlfg%2BLMN%2BgGoSGXeM07Wv4mNIpyiLktZ%2FukkT4aJ1TylXVd1yKoXhGkKnCZ3AKDFcWa1WqLW5BJV%2FMJOrvsQGOqUB2suQhT3e8xKp3Ur3x1SHAf3u4KAqHSgbRl54%2BnRmHXN%2B0tu5RHDvNfYwuiNeW7LSoGCdsuSVQf3smFMjKJpWeVO2BhrU0qy1OzQvweasaxeScaNn0zU3X7YdJ8n4zJ5aH4enSs9RAXaGr3YKBPUAHCKKoB6NnH0QGIBKwUrHTB%2BDmrnl8iQF%2BaSop01F95IUqWGrasSTLSBAiOkCW8vZFodJSrew&X-Amz-Signature=afa390b1dbd7451be6a633224aeecf7d0f80c794a6220a7834c9c5e706f86368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2L3YZ4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8x8m%2F8WSqoA71mt6rYgBcAbSH4iavXmCCamIMBmm8wIgMGbEVORB0WUYRyJzwqILYJBNJH9Pg4sG8rc2PJVxeXUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBfmRYmbB8OMTjPH3CrcAzzaPZeNX9mkKJZxxC1Sxe8d93qOWrKujytsmfhOpaSYT%2BPgyKV4OFCG1EYnVu6o5bsvO7VuYUeqqkabBsyhCMU39AZHGmjVmTlp%2FKQP8wk7b6yQy%2BzRJwQ%2Bc4XibTbVS%2FLVB7ryb8edGc0tyiF9F5QnErfcd%2BP3y5dYcWDvfh8D2aMrl8JwmLcZZdXc3IuUJBvXvl9m26pBN9zLdWGXl4QZ8%2B7Q90Zlqk%2Fz7Rco5LWyVQ6a7HfvnpAbn84hx7ZWcSeqlnpVU3ixGT3%2BRfsHyOmFdup9jbwyVKG44jyO4bQWU6DMEvhsGmsFlCKL0YE%2FP39afhoJsLMtl9c7mcCtAldRlJRgIrqM8WZlGFwIR1n2lfxWkJNdi7t3dC2a%2FKNJ42owC4VvlS8paOu%2BMVI%2FnbyLkvV73PYb%2Bw6G63Bv2DxPWLpS5%2F2lp1ZUrYoQCO0LHRHy%2BGz3CjW8LpAATT80zmdFGI6NLvi77YM9kI%2BTWxJcVQTU0sAjruz5hb%2B%2F0X%2BHcpy7tdaaTfDviN19XhXA88okayYL9d36qqN%2BnCgQ0qQz639tlfg%2BLMN%2BgGoSGXeM07Wv4mNIpyiLktZ%2FukkT4aJ1TylXVd1yKoXhGkKnCZ3AKDFcWa1WqLW5BJV%2FMJOrvsQGOqUB2suQhT3e8xKp3Ur3x1SHAf3u4KAqHSgbRl54%2BnRmHXN%2B0tu5RHDvNfYwuiNeW7LSoGCdsuSVQf3smFMjKJpWeVO2BhrU0qy1OzQvweasaxeScaNn0zU3X7YdJ8n4zJ5aH4enSs9RAXaGr3YKBPUAHCKKoB6NnH0QGIBKwUrHTB%2BDmrnl8iQF%2BaSop01F95IUqWGrasSTLSBAiOkCW8vZFodJSrew&X-Amz-Signature=15c02b56058c6a7e2c533e3f648345117e31a7c388af77058c8a6e87809b238e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2L3YZ4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8x8m%2F8WSqoA71mt6rYgBcAbSH4iavXmCCamIMBmm8wIgMGbEVORB0WUYRyJzwqILYJBNJH9Pg4sG8rc2PJVxeXUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBfmRYmbB8OMTjPH3CrcAzzaPZeNX9mkKJZxxC1Sxe8d93qOWrKujytsmfhOpaSYT%2BPgyKV4OFCG1EYnVu6o5bsvO7VuYUeqqkabBsyhCMU39AZHGmjVmTlp%2FKQP8wk7b6yQy%2BzRJwQ%2Bc4XibTbVS%2FLVB7ryb8edGc0tyiF9F5QnErfcd%2BP3y5dYcWDvfh8D2aMrl8JwmLcZZdXc3IuUJBvXvl9m26pBN9zLdWGXl4QZ8%2B7Q90Zlqk%2Fz7Rco5LWyVQ6a7HfvnpAbn84hx7ZWcSeqlnpVU3ixGT3%2BRfsHyOmFdup9jbwyVKG44jyO4bQWU6DMEvhsGmsFlCKL0YE%2FP39afhoJsLMtl9c7mcCtAldRlJRgIrqM8WZlGFwIR1n2lfxWkJNdi7t3dC2a%2FKNJ42owC4VvlS8paOu%2BMVI%2FnbyLkvV73PYb%2Bw6G63Bv2DxPWLpS5%2F2lp1ZUrYoQCO0LHRHy%2BGz3CjW8LpAATT80zmdFGI6NLvi77YM9kI%2BTWxJcVQTU0sAjruz5hb%2B%2F0X%2BHcpy7tdaaTfDviN19XhXA88okayYL9d36qqN%2BnCgQ0qQz639tlfg%2BLMN%2BgGoSGXeM07Wv4mNIpyiLktZ%2FukkT4aJ1TylXVd1yKoXhGkKnCZ3AKDFcWa1WqLW5BJV%2FMJOrvsQGOqUB2suQhT3e8xKp3Ur3x1SHAf3u4KAqHSgbRl54%2BnRmHXN%2B0tu5RHDvNfYwuiNeW7LSoGCdsuSVQf3smFMjKJpWeVO2BhrU0qy1OzQvweasaxeScaNn0zU3X7YdJ8n4zJ5aH4enSs9RAXaGr3YKBPUAHCKKoB6NnH0QGIBKwUrHTB%2BDmrnl8iQF%2BaSop01F95IUqWGrasSTLSBAiOkCW8vZFodJSrew&X-Amz-Signature=242ef46ee0623cb5a44929f4285293a5ac0831477a613f537bb705378b9ddaa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2L3YZ4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8x8m%2F8WSqoA71mt6rYgBcAbSH4iavXmCCamIMBmm8wIgMGbEVORB0WUYRyJzwqILYJBNJH9Pg4sG8rc2PJVxeXUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBfmRYmbB8OMTjPH3CrcAzzaPZeNX9mkKJZxxC1Sxe8d93qOWrKujytsmfhOpaSYT%2BPgyKV4OFCG1EYnVu6o5bsvO7VuYUeqqkabBsyhCMU39AZHGmjVmTlp%2FKQP8wk7b6yQy%2BzRJwQ%2Bc4XibTbVS%2FLVB7ryb8edGc0tyiF9F5QnErfcd%2BP3y5dYcWDvfh8D2aMrl8JwmLcZZdXc3IuUJBvXvl9m26pBN9zLdWGXl4QZ8%2B7Q90Zlqk%2Fz7Rco5LWyVQ6a7HfvnpAbn84hx7ZWcSeqlnpVU3ixGT3%2BRfsHyOmFdup9jbwyVKG44jyO4bQWU6DMEvhsGmsFlCKL0YE%2FP39afhoJsLMtl9c7mcCtAldRlJRgIrqM8WZlGFwIR1n2lfxWkJNdi7t3dC2a%2FKNJ42owC4VvlS8paOu%2BMVI%2FnbyLkvV73PYb%2Bw6G63Bv2DxPWLpS5%2F2lp1ZUrYoQCO0LHRHy%2BGz3CjW8LpAATT80zmdFGI6NLvi77YM9kI%2BTWxJcVQTU0sAjruz5hb%2B%2F0X%2BHcpy7tdaaTfDviN19XhXA88okayYL9d36qqN%2BnCgQ0qQz639tlfg%2BLMN%2BgGoSGXeM07Wv4mNIpyiLktZ%2FukkT4aJ1TylXVd1yKoXhGkKnCZ3AKDFcWa1WqLW5BJV%2FMJOrvsQGOqUB2suQhT3e8xKp3Ur3x1SHAf3u4KAqHSgbRl54%2BnRmHXN%2B0tu5RHDvNfYwuiNeW7LSoGCdsuSVQf3smFMjKJpWeVO2BhrU0qy1OzQvweasaxeScaNn0zU3X7YdJ8n4zJ5aH4enSs9RAXaGr3YKBPUAHCKKoB6NnH0QGIBKwUrHTB%2BDmrnl8iQF%2BaSop01F95IUqWGrasSTLSBAiOkCW8vZFodJSrew&X-Amz-Signature=f988d8897f6bda9ba9954ac6ec0b6a162bd2f72d000c26d6acbe33395098552c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2L3YZ4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8x8m%2F8WSqoA71mt6rYgBcAbSH4iavXmCCamIMBmm8wIgMGbEVORB0WUYRyJzwqILYJBNJH9Pg4sG8rc2PJVxeXUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBfmRYmbB8OMTjPH3CrcAzzaPZeNX9mkKJZxxC1Sxe8d93qOWrKujytsmfhOpaSYT%2BPgyKV4OFCG1EYnVu6o5bsvO7VuYUeqqkabBsyhCMU39AZHGmjVmTlp%2FKQP8wk7b6yQy%2BzRJwQ%2Bc4XibTbVS%2FLVB7ryb8edGc0tyiF9F5QnErfcd%2BP3y5dYcWDvfh8D2aMrl8JwmLcZZdXc3IuUJBvXvl9m26pBN9zLdWGXl4QZ8%2B7Q90Zlqk%2Fz7Rco5LWyVQ6a7HfvnpAbn84hx7ZWcSeqlnpVU3ixGT3%2BRfsHyOmFdup9jbwyVKG44jyO4bQWU6DMEvhsGmsFlCKL0YE%2FP39afhoJsLMtl9c7mcCtAldRlJRgIrqM8WZlGFwIR1n2lfxWkJNdi7t3dC2a%2FKNJ42owC4VvlS8paOu%2BMVI%2FnbyLkvV73PYb%2Bw6G63Bv2DxPWLpS5%2F2lp1ZUrYoQCO0LHRHy%2BGz3CjW8LpAATT80zmdFGI6NLvi77YM9kI%2BTWxJcVQTU0sAjruz5hb%2B%2F0X%2BHcpy7tdaaTfDviN19XhXA88okayYL9d36qqN%2BnCgQ0qQz639tlfg%2BLMN%2BgGoSGXeM07Wv4mNIpyiLktZ%2FukkT4aJ1TylXVd1yKoXhGkKnCZ3AKDFcWa1WqLW5BJV%2FMJOrvsQGOqUB2suQhT3e8xKp3Ur3x1SHAf3u4KAqHSgbRl54%2BnRmHXN%2B0tu5RHDvNfYwuiNeW7LSoGCdsuSVQf3smFMjKJpWeVO2BhrU0qy1OzQvweasaxeScaNn0zU3X7YdJ8n4zJ5aH4enSs9RAXaGr3YKBPUAHCKKoB6NnH0QGIBKwUrHTB%2BDmrnl8iQF%2BaSop01F95IUqWGrasSTLSBAiOkCW8vZFodJSrew&X-Amz-Signature=66c4c57614def4abccbed4ac62a19ba680c94f9978c80bebf86554425879af71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
