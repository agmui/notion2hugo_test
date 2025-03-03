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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6KHQQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzLN5BqPonTH958StkTFxupzqZ8QGKp%2FJXfQjbhZliWAIgEr7Sqh%2BGRIm5hQpgwW%2BoxJwgGcYWTzyVVIxBtvdIbPIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvhyitbKoRogchRMCrcA40O2f%2FNQH5kZlvBejukvebtsR5igwjlCU2q0xn4uxYuN%2BFqGHTEZzCKMJbz6ymYK0G%2Bsy5uMdBLjudBoUcIjVMjiTVY0%2Fm0TCsYdPXAqJNMK6sGvoEDItDWnH96OFwAGNdeFmfMFjlbR%2FoWdUX9TtRdon85%2FqIR4cTFPZPdAghGVfWy5KPpvc3d%2BQdpIdigFzIzMfqJT51uUyEdHQU6MwdRPbM6AYepmHzQiVLdFwCfB8ijkklNk9UbRGz6kk%2FHNL6marewjKWRzxz3Ml1zM0t%2FHCrXr932OwmrjISE7SVYd2qfiVJALLAX3ZDyYXhOs0DAklEcq8r99t92no89pkQAouVvsN9NSoeNgETszwifZ7XQkASam8%2FFjaJo%2FTjI0gaZ%2ByAtGWGSAUxtYga5GL2DfDJuv3feFnof2kuptgr7icP6J0m26IZh%2FMgKad4rxiezaCkIqo1S9kIhShN4ZRTE0MvSaR8OoqMN8vbaUXXOGURZvSnbGIajOJE4saBwQKChIK02Yn6ckckOSy4PvYFXgh4cFkY%2F%2BVGhpZM7ceKf5xpeSw2XMzTg353kh6btKyLPYW2Zgjl1tcLLRiqCW%2BXJ74%2F8w4XD3cdzygiwDwWrcgYh2W0CEyRvhArDMNzJk74GOqUBud9C2W13eSwLUQqQby%2BR8o6rMy6zNhkMxKmhWXQgAJDmi9qs55Lrg1MYwKjf%2Fk025Ktl60cZwXuqNWTYLcV6AidfSx6WiqwMMQKBhsUlSkuRRAPzZmLyhcN6HJzzi%2BVK2cq0zPhT4pVtn2fKuCPboqz3dbWfJbB%2BhJSHy6nxw9cD%2BkVkV3AiBJMVU1ZxJriRVijEpOCizw%2BGTL4AdLJLrPjp3b18&X-Amz-Signature=1cef5c300e430b739c6bc5d13c314318a19a647faee4d13e80f72e47a840c453&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6KHQQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzLN5BqPonTH958StkTFxupzqZ8QGKp%2FJXfQjbhZliWAIgEr7Sqh%2BGRIm5hQpgwW%2BoxJwgGcYWTzyVVIxBtvdIbPIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvhyitbKoRogchRMCrcA40O2f%2FNQH5kZlvBejukvebtsR5igwjlCU2q0xn4uxYuN%2BFqGHTEZzCKMJbz6ymYK0G%2Bsy5uMdBLjudBoUcIjVMjiTVY0%2Fm0TCsYdPXAqJNMK6sGvoEDItDWnH96OFwAGNdeFmfMFjlbR%2FoWdUX9TtRdon85%2FqIR4cTFPZPdAghGVfWy5KPpvc3d%2BQdpIdigFzIzMfqJT51uUyEdHQU6MwdRPbM6AYepmHzQiVLdFwCfB8ijkklNk9UbRGz6kk%2FHNL6marewjKWRzxz3Ml1zM0t%2FHCrXr932OwmrjISE7SVYd2qfiVJALLAX3ZDyYXhOs0DAklEcq8r99t92no89pkQAouVvsN9NSoeNgETszwifZ7XQkASam8%2FFjaJo%2FTjI0gaZ%2ByAtGWGSAUxtYga5GL2DfDJuv3feFnof2kuptgr7icP6J0m26IZh%2FMgKad4rxiezaCkIqo1S9kIhShN4ZRTE0MvSaR8OoqMN8vbaUXXOGURZvSnbGIajOJE4saBwQKChIK02Yn6ckckOSy4PvYFXgh4cFkY%2F%2BVGhpZM7ceKf5xpeSw2XMzTg353kh6btKyLPYW2Zgjl1tcLLRiqCW%2BXJ74%2F8w4XD3cdzygiwDwWrcgYh2W0CEyRvhArDMNzJk74GOqUBud9C2W13eSwLUQqQby%2BR8o6rMy6zNhkMxKmhWXQgAJDmi9qs55Lrg1MYwKjf%2Fk025Ktl60cZwXuqNWTYLcV6AidfSx6WiqwMMQKBhsUlSkuRRAPzZmLyhcN6HJzzi%2BVK2cq0zPhT4pVtn2fKuCPboqz3dbWfJbB%2BhJSHy6nxw9cD%2BkVkV3AiBJMVU1ZxJriRVijEpOCizw%2BGTL4AdLJLrPjp3b18&X-Amz-Signature=ae07b604eebbc06c043daaffc8095c2da3fdc826cc4054428d4d990fd315dd15&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6KHQQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzLN5BqPonTH958StkTFxupzqZ8QGKp%2FJXfQjbhZliWAIgEr7Sqh%2BGRIm5hQpgwW%2BoxJwgGcYWTzyVVIxBtvdIbPIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvhyitbKoRogchRMCrcA40O2f%2FNQH5kZlvBejukvebtsR5igwjlCU2q0xn4uxYuN%2BFqGHTEZzCKMJbz6ymYK0G%2Bsy5uMdBLjudBoUcIjVMjiTVY0%2Fm0TCsYdPXAqJNMK6sGvoEDItDWnH96OFwAGNdeFmfMFjlbR%2FoWdUX9TtRdon85%2FqIR4cTFPZPdAghGVfWy5KPpvc3d%2BQdpIdigFzIzMfqJT51uUyEdHQU6MwdRPbM6AYepmHzQiVLdFwCfB8ijkklNk9UbRGz6kk%2FHNL6marewjKWRzxz3Ml1zM0t%2FHCrXr932OwmrjISE7SVYd2qfiVJALLAX3ZDyYXhOs0DAklEcq8r99t92no89pkQAouVvsN9NSoeNgETszwifZ7XQkASam8%2FFjaJo%2FTjI0gaZ%2ByAtGWGSAUxtYga5GL2DfDJuv3feFnof2kuptgr7icP6J0m26IZh%2FMgKad4rxiezaCkIqo1S9kIhShN4ZRTE0MvSaR8OoqMN8vbaUXXOGURZvSnbGIajOJE4saBwQKChIK02Yn6ckckOSy4PvYFXgh4cFkY%2F%2BVGhpZM7ceKf5xpeSw2XMzTg353kh6btKyLPYW2Zgjl1tcLLRiqCW%2BXJ74%2F8w4XD3cdzygiwDwWrcgYh2W0CEyRvhArDMNzJk74GOqUBud9C2W13eSwLUQqQby%2BR8o6rMy6zNhkMxKmhWXQgAJDmi9qs55Lrg1MYwKjf%2Fk025Ktl60cZwXuqNWTYLcV6AidfSx6WiqwMMQKBhsUlSkuRRAPzZmLyhcN6HJzzi%2BVK2cq0zPhT4pVtn2fKuCPboqz3dbWfJbB%2BhJSHy6nxw9cD%2BkVkV3AiBJMVU1ZxJriRVijEpOCizw%2BGTL4AdLJLrPjp3b18&X-Amz-Signature=347a72c11ac22533863022e7292fa04e6d798530c0043e99691c98726817c89a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6KHQQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzLN5BqPonTH958StkTFxupzqZ8QGKp%2FJXfQjbhZliWAIgEr7Sqh%2BGRIm5hQpgwW%2BoxJwgGcYWTzyVVIxBtvdIbPIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvhyitbKoRogchRMCrcA40O2f%2FNQH5kZlvBejukvebtsR5igwjlCU2q0xn4uxYuN%2BFqGHTEZzCKMJbz6ymYK0G%2Bsy5uMdBLjudBoUcIjVMjiTVY0%2Fm0TCsYdPXAqJNMK6sGvoEDItDWnH96OFwAGNdeFmfMFjlbR%2FoWdUX9TtRdon85%2FqIR4cTFPZPdAghGVfWy5KPpvc3d%2BQdpIdigFzIzMfqJT51uUyEdHQU6MwdRPbM6AYepmHzQiVLdFwCfB8ijkklNk9UbRGz6kk%2FHNL6marewjKWRzxz3Ml1zM0t%2FHCrXr932OwmrjISE7SVYd2qfiVJALLAX3ZDyYXhOs0DAklEcq8r99t92no89pkQAouVvsN9NSoeNgETszwifZ7XQkASam8%2FFjaJo%2FTjI0gaZ%2ByAtGWGSAUxtYga5GL2DfDJuv3feFnof2kuptgr7icP6J0m26IZh%2FMgKad4rxiezaCkIqo1S9kIhShN4ZRTE0MvSaR8OoqMN8vbaUXXOGURZvSnbGIajOJE4saBwQKChIK02Yn6ckckOSy4PvYFXgh4cFkY%2F%2BVGhpZM7ceKf5xpeSw2XMzTg353kh6btKyLPYW2Zgjl1tcLLRiqCW%2BXJ74%2F8w4XD3cdzygiwDwWrcgYh2W0CEyRvhArDMNzJk74GOqUBud9C2W13eSwLUQqQby%2BR8o6rMy6zNhkMxKmhWXQgAJDmi9qs55Lrg1MYwKjf%2Fk025Ktl60cZwXuqNWTYLcV6AidfSx6WiqwMMQKBhsUlSkuRRAPzZmLyhcN6HJzzi%2BVK2cq0zPhT4pVtn2fKuCPboqz3dbWfJbB%2BhJSHy6nxw9cD%2BkVkV3AiBJMVU1ZxJriRVijEpOCizw%2BGTL4AdLJLrPjp3b18&X-Amz-Signature=fb7aff6c17b93dc12767996e31779ed63548fc35af16630f55d75c86a123fcce&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6KHQQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzLN5BqPonTH958StkTFxupzqZ8QGKp%2FJXfQjbhZliWAIgEr7Sqh%2BGRIm5hQpgwW%2BoxJwgGcYWTzyVVIxBtvdIbPIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvhyitbKoRogchRMCrcA40O2f%2FNQH5kZlvBejukvebtsR5igwjlCU2q0xn4uxYuN%2BFqGHTEZzCKMJbz6ymYK0G%2Bsy5uMdBLjudBoUcIjVMjiTVY0%2Fm0TCsYdPXAqJNMK6sGvoEDItDWnH96OFwAGNdeFmfMFjlbR%2FoWdUX9TtRdon85%2FqIR4cTFPZPdAghGVfWy5KPpvc3d%2BQdpIdigFzIzMfqJT51uUyEdHQU6MwdRPbM6AYepmHzQiVLdFwCfB8ijkklNk9UbRGz6kk%2FHNL6marewjKWRzxz3Ml1zM0t%2FHCrXr932OwmrjISE7SVYd2qfiVJALLAX3ZDyYXhOs0DAklEcq8r99t92no89pkQAouVvsN9NSoeNgETszwifZ7XQkASam8%2FFjaJo%2FTjI0gaZ%2ByAtGWGSAUxtYga5GL2DfDJuv3feFnof2kuptgr7icP6J0m26IZh%2FMgKad4rxiezaCkIqo1S9kIhShN4ZRTE0MvSaR8OoqMN8vbaUXXOGURZvSnbGIajOJE4saBwQKChIK02Yn6ckckOSy4PvYFXgh4cFkY%2F%2BVGhpZM7ceKf5xpeSw2XMzTg353kh6btKyLPYW2Zgjl1tcLLRiqCW%2BXJ74%2F8w4XD3cdzygiwDwWrcgYh2W0CEyRvhArDMNzJk74GOqUBud9C2W13eSwLUQqQby%2BR8o6rMy6zNhkMxKmhWXQgAJDmi9qs55Lrg1MYwKjf%2Fk025Ktl60cZwXuqNWTYLcV6AidfSx6WiqwMMQKBhsUlSkuRRAPzZmLyhcN6HJzzi%2BVK2cq0zPhT4pVtn2fKuCPboqz3dbWfJbB%2BhJSHy6nxw9cD%2BkVkV3AiBJMVU1ZxJriRVijEpOCizw%2BGTL4AdLJLrPjp3b18&X-Amz-Signature=2c3098ec47109852649f68dcb8278a71b5d70663755f24b20287655ebddecba1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6KHQQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzLN5BqPonTH958StkTFxupzqZ8QGKp%2FJXfQjbhZliWAIgEr7Sqh%2BGRIm5hQpgwW%2BoxJwgGcYWTzyVVIxBtvdIbPIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvhyitbKoRogchRMCrcA40O2f%2FNQH5kZlvBejukvebtsR5igwjlCU2q0xn4uxYuN%2BFqGHTEZzCKMJbz6ymYK0G%2Bsy5uMdBLjudBoUcIjVMjiTVY0%2Fm0TCsYdPXAqJNMK6sGvoEDItDWnH96OFwAGNdeFmfMFjlbR%2FoWdUX9TtRdon85%2FqIR4cTFPZPdAghGVfWy5KPpvc3d%2BQdpIdigFzIzMfqJT51uUyEdHQU6MwdRPbM6AYepmHzQiVLdFwCfB8ijkklNk9UbRGz6kk%2FHNL6marewjKWRzxz3Ml1zM0t%2FHCrXr932OwmrjISE7SVYd2qfiVJALLAX3ZDyYXhOs0DAklEcq8r99t92no89pkQAouVvsN9NSoeNgETszwifZ7XQkASam8%2FFjaJo%2FTjI0gaZ%2ByAtGWGSAUxtYga5GL2DfDJuv3feFnof2kuptgr7icP6J0m26IZh%2FMgKad4rxiezaCkIqo1S9kIhShN4ZRTE0MvSaR8OoqMN8vbaUXXOGURZvSnbGIajOJE4saBwQKChIK02Yn6ckckOSy4PvYFXgh4cFkY%2F%2BVGhpZM7ceKf5xpeSw2XMzTg353kh6btKyLPYW2Zgjl1tcLLRiqCW%2BXJ74%2F8w4XD3cdzygiwDwWrcgYh2W0CEyRvhArDMNzJk74GOqUBud9C2W13eSwLUQqQby%2BR8o6rMy6zNhkMxKmhWXQgAJDmi9qs55Lrg1MYwKjf%2Fk025Ktl60cZwXuqNWTYLcV6AidfSx6WiqwMMQKBhsUlSkuRRAPzZmLyhcN6HJzzi%2BVK2cq0zPhT4pVtn2fKuCPboqz3dbWfJbB%2BhJSHy6nxw9cD%2BkVkV3AiBJMVU1ZxJriRVijEpOCizw%2BGTL4AdLJLrPjp3b18&X-Amz-Signature=0ce07c9dd9bfd61d0b67abcdd7bc1d31f3b6540f13241001c76a1b5f9c572df2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6KHQQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzLN5BqPonTH958StkTFxupzqZ8QGKp%2FJXfQjbhZliWAIgEr7Sqh%2BGRIm5hQpgwW%2BoxJwgGcYWTzyVVIxBtvdIbPIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvhyitbKoRogchRMCrcA40O2f%2FNQH5kZlvBejukvebtsR5igwjlCU2q0xn4uxYuN%2BFqGHTEZzCKMJbz6ymYK0G%2Bsy5uMdBLjudBoUcIjVMjiTVY0%2Fm0TCsYdPXAqJNMK6sGvoEDItDWnH96OFwAGNdeFmfMFjlbR%2FoWdUX9TtRdon85%2FqIR4cTFPZPdAghGVfWy5KPpvc3d%2BQdpIdigFzIzMfqJT51uUyEdHQU6MwdRPbM6AYepmHzQiVLdFwCfB8ijkklNk9UbRGz6kk%2FHNL6marewjKWRzxz3Ml1zM0t%2FHCrXr932OwmrjISE7SVYd2qfiVJALLAX3ZDyYXhOs0DAklEcq8r99t92no89pkQAouVvsN9NSoeNgETszwifZ7XQkASam8%2FFjaJo%2FTjI0gaZ%2ByAtGWGSAUxtYga5GL2DfDJuv3feFnof2kuptgr7icP6J0m26IZh%2FMgKad4rxiezaCkIqo1S9kIhShN4ZRTE0MvSaR8OoqMN8vbaUXXOGURZvSnbGIajOJE4saBwQKChIK02Yn6ckckOSy4PvYFXgh4cFkY%2F%2BVGhpZM7ceKf5xpeSw2XMzTg353kh6btKyLPYW2Zgjl1tcLLRiqCW%2BXJ74%2F8w4XD3cdzygiwDwWrcgYh2W0CEyRvhArDMNzJk74GOqUBud9C2W13eSwLUQqQby%2BR8o6rMy6zNhkMxKmhWXQgAJDmi9qs55Lrg1MYwKjf%2Fk025Ktl60cZwXuqNWTYLcV6AidfSx6WiqwMMQKBhsUlSkuRRAPzZmLyhcN6HJzzi%2BVK2cq0zPhT4pVtn2fKuCPboqz3dbWfJbB%2BhJSHy6nxw9cD%2BkVkV3AiBJMVU1ZxJriRVijEpOCizw%2BGTL4AdLJLrPjp3b18&X-Amz-Signature=4b53dbe549c6d60dfb044bd6fb5fbe47d80d345022328a79c236c6a7f815eed5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
