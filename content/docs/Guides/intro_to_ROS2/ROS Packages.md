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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VMB7WK%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDdDQvC2fUivKVCQ%2BGpMtP1wRZNp%2Fx41jbHuuJNaAbAAQIgH9m9jWLhqkfsw%2FNSYjEZRH9PS6XDIDtTpR7%2FqFn3YtAqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3NMssPYVMD%2BNGQpircA8KxtCLVfkHCggJjQc2ukoirIU%2BrCbAOPqt02O0exIf1tPlntUfqP6td69l6Y07u%2BRL7G6yWKDuvV8PzR4Mdt2%2BEBL1jxpV5WsZ7q48IP3jW2iET%2B4D5ok1TwmG5AVIyM2hOvz2dhv%2B2dKKwKzWWtQtAXUikbl4PqXEMV285cxxcBTV4yJPcK796AiZUGi1ZClcgb0joNAQlTu2aE0ly9yj2MJh8U3uXAv%2BAtUv1Z00AsZa8bXcQlz6lTFDOyaIPTrYEO2gnfzKM0NAAdNZCXTpFQEJdEOnEfvAd2Tc4JUXIkS5%2B5FmYnvon2mYfx2JAd%2BEd6sIzlrMxWr%2F%2FZ6njTyPeKrMqEGaXnshQJTrtdKAPhS6L0Ac1%2BdR%2BDEvy2ZXTBMcdvoIMK%2B5X0nuumF6Qx11PWcrq8ut07VaPDErnrCw8nYgUGQGapL3YnWRH4%2FJELgqrp5IHm3K%2FnVRVJm9zTnjZyl4a85pIsWZpSCFPuGsbYpHjrsvOLMrxVOJBuiu0KUZtZPO7m0B4viMpg8bA7rRMNwztiBoxbzQJ58T0GwudwMbcQhfZQ1m6GejpUPaqq3oxLcpwgXC0R2d%2FDAwHjgYbuN41hYTf2HQe9P6f3gUzs%2B2XFgCec72Cgj50MJ7n%2BMEGOqUB1oDggypSnL3LDvCKW4nBWjjiPq949ImHhRz%2BTxkYkJ%2B8NffVdcJV6XA9MPFMEdYqoOtqWCjbgd%2BhVEPijtLq7iyILzUaeBLJj1qQltwkRnoGyDvpTC75sYGa4LSfauOS2RmPNru0blS%2BCaT%2FjnERZXh2RcZwB21dTz61Kv1GfI3GwdpZm0APmL3PpSopOGM4Boy2pgmUm2kuPGbRuy4LQ04jYqV9&X-Amz-Signature=7baab0dcac55644429cb84f96e322d7f261c02a0a9a4fd73e9c820f1bd7a0e76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VMB7WK%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDdDQvC2fUivKVCQ%2BGpMtP1wRZNp%2Fx41jbHuuJNaAbAAQIgH9m9jWLhqkfsw%2FNSYjEZRH9PS6XDIDtTpR7%2FqFn3YtAqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3NMssPYVMD%2BNGQpircA8KxtCLVfkHCggJjQc2ukoirIU%2BrCbAOPqt02O0exIf1tPlntUfqP6td69l6Y07u%2BRL7G6yWKDuvV8PzR4Mdt2%2BEBL1jxpV5WsZ7q48IP3jW2iET%2B4D5ok1TwmG5AVIyM2hOvz2dhv%2B2dKKwKzWWtQtAXUikbl4PqXEMV285cxxcBTV4yJPcK796AiZUGi1ZClcgb0joNAQlTu2aE0ly9yj2MJh8U3uXAv%2BAtUv1Z00AsZa8bXcQlz6lTFDOyaIPTrYEO2gnfzKM0NAAdNZCXTpFQEJdEOnEfvAd2Tc4JUXIkS5%2B5FmYnvon2mYfx2JAd%2BEd6sIzlrMxWr%2F%2FZ6njTyPeKrMqEGaXnshQJTrtdKAPhS6L0Ac1%2BdR%2BDEvy2ZXTBMcdvoIMK%2B5X0nuumF6Qx11PWcrq8ut07VaPDErnrCw8nYgUGQGapL3YnWRH4%2FJELgqrp5IHm3K%2FnVRVJm9zTnjZyl4a85pIsWZpSCFPuGsbYpHjrsvOLMrxVOJBuiu0KUZtZPO7m0B4viMpg8bA7rRMNwztiBoxbzQJ58T0GwudwMbcQhfZQ1m6GejpUPaqq3oxLcpwgXC0R2d%2FDAwHjgYbuN41hYTf2HQe9P6f3gUzs%2B2XFgCec72Cgj50MJ7n%2BMEGOqUB1oDggypSnL3LDvCKW4nBWjjiPq949ImHhRz%2BTxkYkJ%2B8NffVdcJV6XA9MPFMEdYqoOtqWCjbgd%2BhVEPijtLq7iyILzUaeBLJj1qQltwkRnoGyDvpTC75sYGa4LSfauOS2RmPNru0blS%2BCaT%2FjnERZXh2RcZwB21dTz61Kv1GfI3GwdpZm0APmL3PpSopOGM4Boy2pgmUm2kuPGbRuy4LQ04jYqV9&X-Amz-Signature=c07f85bfaa493c69a9f849bcbe939903a8ca4e5a3a44ac61b9dcc9551a06d8fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VMB7WK%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDdDQvC2fUivKVCQ%2BGpMtP1wRZNp%2Fx41jbHuuJNaAbAAQIgH9m9jWLhqkfsw%2FNSYjEZRH9PS6XDIDtTpR7%2FqFn3YtAqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3NMssPYVMD%2BNGQpircA8KxtCLVfkHCggJjQc2ukoirIU%2BrCbAOPqt02O0exIf1tPlntUfqP6td69l6Y07u%2BRL7G6yWKDuvV8PzR4Mdt2%2BEBL1jxpV5WsZ7q48IP3jW2iET%2B4D5ok1TwmG5AVIyM2hOvz2dhv%2B2dKKwKzWWtQtAXUikbl4PqXEMV285cxxcBTV4yJPcK796AiZUGi1ZClcgb0joNAQlTu2aE0ly9yj2MJh8U3uXAv%2BAtUv1Z00AsZa8bXcQlz6lTFDOyaIPTrYEO2gnfzKM0NAAdNZCXTpFQEJdEOnEfvAd2Tc4JUXIkS5%2B5FmYnvon2mYfx2JAd%2BEd6sIzlrMxWr%2F%2FZ6njTyPeKrMqEGaXnshQJTrtdKAPhS6L0Ac1%2BdR%2BDEvy2ZXTBMcdvoIMK%2B5X0nuumF6Qx11PWcrq8ut07VaPDErnrCw8nYgUGQGapL3YnWRH4%2FJELgqrp5IHm3K%2FnVRVJm9zTnjZyl4a85pIsWZpSCFPuGsbYpHjrsvOLMrxVOJBuiu0KUZtZPO7m0B4viMpg8bA7rRMNwztiBoxbzQJ58T0GwudwMbcQhfZQ1m6GejpUPaqq3oxLcpwgXC0R2d%2FDAwHjgYbuN41hYTf2HQe9P6f3gUzs%2B2XFgCec72Cgj50MJ7n%2BMEGOqUB1oDggypSnL3LDvCKW4nBWjjiPq949ImHhRz%2BTxkYkJ%2B8NffVdcJV6XA9MPFMEdYqoOtqWCjbgd%2BhVEPijtLq7iyILzUaeBLJj1qQltwkRnoGyDvpTC75sYGa4LSfauOS2RmPNru0blS%2BCaT%2FjnERZXh2RcZwB21dTz61Kv1GfI3GwdpZm0APmL3PpSopOGM4Boy2pgmUm2kuPGbRuy4LQ04jYqV9&X-Amz-Signature=9f6de50a259ab13adc7d96e1ef2faa755b13cc2e1ab111a61f5b1d0d6331bc83&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VMB7WK%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDdDQvC2fUivKVCQ%2BGpMtP1wRZNp%2Fx41jbHuuJNaAbAAQIgH9m9jWLhqkfsw%2FNSYjEZRH9PS6XDIDtTpR7%2FqFn3YtAqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3NMssPYVMD%2BNGQpircA8KxtCLVfkHCggJjQc2ukoirIU%2BrCbAOPqt02O0exIf1tPlntUfqP6td69l6Y07u%2BRL7G6yWKDuvV8PzR4Mdt2%2BEBL1jxpV5WsZ7q48IP3jW2iET%2B4D5ok1TwmG5AVIyM2hOvz2dhv%2B2dKKwKzWWtQtAXUikbl4PqXEMV285cxxcBTV4yJPcK796AiZUGi1ZClcgb0joNAQlTu2aE0ly9yj2MJh8U3uXAv%2BAtUv1Z00AsZa8bXcQlz6lTFDOyaIPTrYEO2gnfzKM0NAAdNZCXTpFQEJdEOnEfvAd2Tc4JUXIkS5%2B5FmYnvon2mYfx2JAd%2BEd6sIzlrMxWr%2F%2FZ6njTyPeKrMqEGaXnshQJTrtdKAPhS6L0Ac1%2BdR%2BDEvy2ZXTBMcdvoIMK%2B5X0nuumF6Qx11PWcrq8ut07VaPDErnrCw8nYgUGQGapL3YnWRH4%2FJELgqrp5IHm3K%2FnVRVJm9zTnjZyl4a85pIsWZpSCFPuGsbYpHjrsvOLMrxVOJBuiu0KUZtZPO7m0B4viMpg8bA7rRMNwztiBoxbzQJ58T0GwudwMbcQhfZQ1m6GejpUPaqq3oxLcpwgXC0R2d%2FDAwHjgYbuN41hYTf2HQe9P6f3gUzs%2B2XFgCec72Cgj50MJ7n%2BMEGOqUB1oDggypSnL3LDvCKW4nBWjjiPq949ImHhRz%2BTxkYkJ%2B8NffVdcJV6XA9MPFMEdYqoOtqWCjbgd%2BhVEPijtLq7iyILzUaeBLJj1qQltwkRnoGyDvpTC75sYGa4LSfauOS2RmPNru0blS%2BCaT%2FjnERZXh2RcZwB21dTz61Kv1GfI3GwdpZm0APmL3PpSopOGM4Boy2pgmUm2kuPGbRuy4LQ04jYqV9&X-Amz-Signature=c13d7efd0563ec3bc37468774c51516e2c09f05d009106ed5bfc8e4a932fca91&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VMB7WK%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDdDQvC2fUivKVCQ%2BGpMtP1wRZNp%2Fx41jbHuuJNaAbAAQIgH9m9jWLhqkfsw%2FNSYjEZRH9PS6XDIDtTpR7%2FqFn3YtAqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3NMssPYVMD%2BNGQpircA8KxtCLVfkHCggJjQc2ukoirIU%2BrCbAOPqt02O0exIf1tPlntUfqP6td69l6Y07u%2BRL7G6yWKDuvV8PzR4Mdt2%2BEBL1jxpV5WsZ7q48IP3jW2iET%2B4D5ok1TwmG5AVIyM2hOvz2dhv%2B2dKKwKzWWtQtAXUikbl4PqXEMV285cxxcBTV4yJPcK796AiZUGi1ZClcgb0joNAQlTu2aE0ly9yj2MJh8U3uXAv%2BAtUv1Z00AsZa8bXcQlz6lTFDOyaIPTrYEO2gnfzKM0NAAdNZCXTpFQEJdEOnEfvAd2Tc4JUXIkS5%2B5FmYnvon2mYfx2JAd%2BEd6sIzlrMxWr%2F%2FZ6njTyPeKrMqEGaXnshQJTrtdKAPhS6L0Ac1%2BdR%2BDEvy2ZXTBMcdvoIMK%2B5X0nuumF6Qx11PWcrq8ut07VaPDErnrCw8nYgUGQGapL3YnWRH4%2FJELgqrp5IHm3K%2FnVRVJm9zTnjZyl4a85pIsWZpSCFPuGsbYpHjrsvOLMrxVOJBuiu0KUZtZPO7m0B4viMpg8bA7rRMNwztiBoxbzQJ58T0GwudwMbcQhfZQ1m6GejpUPaqq3oxLcpwgXC0R2d%2FDAwHjgYbuN41hYTf2HQe9P6f3gUzs%2B2XFgCec72Cgj50MJ7n%2BMEGOqUB1oDggypSnL3LDvCKW4nBWjjiPq949ImHhRz%2BTxkYkJ%2B8NffVdcJV6XA9MPFMEdYqoOtqWCjbgd%2BhVEPijtLq7iyILzUaeBLJj1qQltwkRnoGyDvpTC75sYGa4LSfauOS2RmPNru0blS%2BCaT%2FjnERZXh2RcZwB21dTz61Kv1GfI3GwdpZm0APmL3PpSopOGM4Boy2pgmUm2kuPGbRuy4LQ04jYqV9&X-Amz-Signature=f2d9a0f94b8d8a1c82a2a21809fa3296f7ea7f69825cb37c48b70309d3593dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VMB7WK%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDdDQvC2fUivKVCQ%2BGpMtP1wRZNp%2Fx41jbHuuJNaAbAAQIgH9m9jWLhqkfsw%2FNSYjEZRH9PS6XDIDtTpR7%2FqFn3YtAqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3NMssPYVMD%2BNGQpircA8KxtCLVfkHCggJjQc2ukoirIU%2BrCbAOPqt02O0exIf1tPlntUfqP6td69l6Y07u%2BRL7G6yWKDuvV8PzR4Mdt2%2BEBL1jxpV5WsZ7q48IP3jW2iET%2B4D5ok1TwmG5AVIyM2hOvz2dhv%2B2dKKwKzWWtQtAXUikbl4PqXEMV285cxxcBTV4yJPcK796AiZUGi1ZClcgb0joNAQlTu2aE0ly9yj2MJh8U3uXAv%2BAtUv1Z00AsZa8bXcQlz6lTFDOyaIPTrYEO2gnfzKM0NAAdNZCXTpFQEJdEOnEfvAd2Tc4JUXIkS5%2B5FmYnvon2mYfx2JAd%2BEd6sIzlrMxWr%2F%2FZ6njTyPeKrMqEGaXnshQJTrtdKAPhS6L0Ac1%2BdR%2BDEvy2ZXTBMcdvoIMK%2B5X0nuumF6Qx11PWcrq8ut07VaPDErnrCw8nYgUGQGapL3YnWRH4%2FJELgqrp5IHm3K%2FnVRVJm9zTnjZyl4a85pIsWZpSCFPuGsbYpHjrsvOLMrxVOJBuiu0KUZtZPO7m0B4viMpg8bA7rRMNwztiBoxbzQJ58T0GwudwMbcQhfZQ1m6GejpUPaqq3oxLcpwgXC0R2d%2FDAwHjgYbuN41hYTf2HQe9P6f3gUzs%2B2XFgCec72Cgj50MJ7n%2BMEGOqUB1oDggypSnL3LDvCKW4nBWjjiPq949ImHhRz%2BTxkYkJ%2B8NffVdcJV6XA9MPFMEdYqoOtqWCjbgd%2BhVEPijtLq7iyILzUaeBLJj1qQltwkRnoGyDvpTC75sYGa4LSfauOS2RmPNru0blS%2BCaT%2FjnERZXh2RcZwB21dTz61Kv1GfI3GwdpZm0APmL3PpSopOGM4Boy2pgmUm2kuPGbRuy4LQ04jYqV9&X-Amz-Signature=451c825e36ee885df83c09ecdd3de963f91092b28d97bbb85832513ceac4d66c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VMB7WK%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDdDQvC2fUivKVCQ%2BGpMtP1wRZNp%2Fx41jbHuuJNaAbAAQIgH9m9jWLhqkfsw%2FNSYjEZRH9PS6XDIDtTpR7%2FqFn3YtAqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3NMssPYVMD%2BNGQpircA8KxtCLVfkHCggJjQc2ukoirIU%2BrCbAOPqt02O0exIf1tPlntUfqP6td69l6Y07u%2BRL7G6yWKDuvV8PzR4Mdt2%2BEBL1jxpV5WsZ7q48IP3jW2iET%2B4D5ok1TwmG5AVIyM2hOvz2dhv%2B2dKKwKzWWtQtAXUikbl4PqXEMV285cxxcBTV4yJPcK796AiZUGi1ZClcgb0joNAQlTu2aE0ly9yj2MJh8U3uXAv%2BAtUv1Z00AsZa8bXcQlz6lTFDOyaIPTrYEO2gnfzKM0NAAdNZCXTpFQEJdEOnEfvAd2Tc4JUXIkS5%2B5FmYnvon2mYfx2JAd%2BEd6sIzlrMxWr%2F%2FZ6njTyPeKrMqEGaXnshQJTrtdKAPhS6L0Ac1%2BdR%2BDEvy2ZXTBMcdvoIMK%2B5X0nuumF6Qx11PWcrq8ut07VaPDErnrCw8nYgUGQGapL3YnWRH4%2FJELgqrp5IHm3K%2FnVRVJm9zTnjZyl4a85pIsWZpSCFPuGsbYpHjrsvOLMrxVOJBuiu0KUZtZPO7m0B4viMpg8bA7rRMNwztiBoxbzQJ58T0GwudwMbcQhfZQ1m6GejpUPaqq3oxLcpwgXC0R2d%2FDAwHjgYbuN41hYTf2HQe9P6f3gUzs%2B2XFgCec72Cgj50MJ7n%2BMEGOqUB1oDggypSnL3LDvCKW4nBWjjiPq949ImHhRz%2BTxkYkJ%2B8NffVdcJV6XA9MPFMEdYqoOtqWCjbgd%2BhVEPijtLq7iyILzUaeBLJj1qQltwkRnoGyDvpTC75sYGa4LSfauOS2RmPNru0blS%2BCaT%2FjnERZXh2RcZwB21dTz61Kv1GfI3GwdpZm0APmL3PpSopOGM4Boy2pgmUm2kuPGbRuy4LQ04jYqV9&X-Amz-Signature=db32eaeaa72e03b307cd7eb79a719ba2e185b454f22bf1570ae2ea67faf53542&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
