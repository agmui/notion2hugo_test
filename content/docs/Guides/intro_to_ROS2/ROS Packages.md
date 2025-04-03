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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWSZAKJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0zVKJArHFRQSFOLrzQcVOW0Pd7gJmhv8v0RWkF%2FfDlAiEAqhoEpQolKlGpiLctBHVNoTaPDOwh3o3o1bpcGZ95bPsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfL3EhXdagcpn0IircA3h1RnOdX5OwuFIJZ4rdvFtJhThVne4t6BcWvw1Y4JEJzx9U6aUEcvYAjJ%2Bx8wV3HZoGm2h7K1ocFluEJaw3w59h2eNdA7suEfdh5tqVyOo1hkQP4vVkPpbzYt8hg%2BmqSGttm8B5D8AtiVyvE9JMQYnkPsjDXkerwiyLiZTtfRFNEi10JkJGZ5l3zzztCpaAt1rU8O80rShYGBjQKBOPfu5hmCvCMXVUQSxuznfERzwrtvYioXQOiP9CadogkBJO8I3cCZFsKGsxoZXjo6T6mugNX5mpnqIJrobmwYOFs84iLHBXorKzjrROr7wZ9RJE%2FZ7%2BKMbN4tL4pcQ7TM6HovP66F3uNu%2FKhYqO8Uvodi%2BeiaUnO1%2FKC5ZoZpmwYs11NInajyyN9zjvUqkZZ8fgRAJFz5gYi1jwJBYz0M8%2FdXZ9iulut6O%2FSUSMhsSGnoR%2FrDK%2Bu8HfA3l36V1LB%2BmBMDgDFprCpj1bZZBW%2FAUh%2FUpe32rUxBPKvWR%2F0LPAzf354askuEeQF07wAklzTbPZid%2BdinCJue6l2eugHxuoctzHTofJZxWn3PDXzd6kKTY8agPVa%2Ffi2ydmHS9o5aSmPC5xavrixQA6aSNSYRZ3rRgaQyEaDLZaa5N5tzyWMMuyur8GOqUBeNOdQ0sJGlYYv3Te1xC5nFGIt3W%2FGIPCZiYeINm3zkpaxpHh5q3BTm3IsRXrlOXAmkYJA%2B5NhPADH8DY8FFu5Y0ep52DysjzEfXZmLV1aQaegIMZ%2FNeUnPCRVc%2BWr1uf12YAvqX9o8NZGCz%2Bh7qNCoMFXfefsgDakgdKJAnHG1wTfcVzA04M1M8DfP3sXEfnVkx5t7Cnk2db8pgYqDYQKwBSTFj0&X-Amz-Signature=0a5703939f690e89cc6d56328a32d1bb78d9f60d4e7bf4edd182a4acd727bf1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWSZAKJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0zVKJArHFRQSFOLrzQcVOW0Pd7gJmhv8v0RWkF%2FfDlAiEAqhoEpQolKlGpiLctBHVNoTaPDOwh3o3o1bpcGZ95bPsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfL3EhXdagcpn0IircA3h1RnOdX5OwuFIJZ4rdvFtJhThVne4t6BcWvw1Y4JEJzx9U6aUEcvYAjJ%2Bx8wV3HZoGm2h7K1ocFluEJaw3w59h2eNdA7suEfdh5tqVyOo1hkQP4vVkPpbzYt8hg%2BmqSGttm8B5D8AtiVyvE9JMQYnkPsjDXkerwiyLiZTtfRFNEi10JkJGZ5l3zzztCpaAt1rU8O80rShYGBjQKBOPfu5hmCvCMXVUQSxuznfERzwrtvYioXQOiP9CadogkBJO8I3cCZFsKGsxoZXjo6T6mugNX5mpnqIJrobmwYOFs84iLHBXorKzjrROr7wZ9RJE%2FZ7%2BKMbN4tL4pcQ7TM6HovP66F3uNu%2FKhYqO8Uvodi%2BeiaUnO1%2FKC5ZoZpmwYs11NInajyyN9zjvUqkZZ8fgRAJFz5gYi1jwJBYz0M8%2FdXZ9iulut6O%2FSUSMhsSGnoR%2FrDK%2Bu8HfA3l36V1LB%2BmBMDgDFprCpj1bZZBW%2FAUh%2FUpe32rUxBPKvWR%2F0LPAzf354askuEeQF07wAklzTbPZid%2BdinCJue6l2eugHxuoctzHTofJZxWn3PDXzd6kKTY8agPVa%2Ffi2ydmHS9o5aSmPC5xavrixQA6aSNSYRZ3rRgaQyEaDLZaa5N5tzyWMMuyur8GOqUBeNOdQ0sJGlYYv3Te1xC5nFGIt3W%2FGIPCZiYeINm3zkpaxpHh5q3BTm3IsRXrlOXAmkYJA%2B5NhPADH8DY8FFu5Y0ep52DysjzEfXZmLV1aQaegIMZ%2FNeUnPCRVc%2BWr1uf12YAvqX9o8NZGCz%2Bh7qNCoMFXfefsgDakgdKJAnHG1wTfcVzA04M1M8DfP3sXEfnVkx5t7Cnk2db8pgYqDYQKwBSTFj0&X-Amz-Signature=a7d6eee7af86d8837900b5fac5075cc7f89f27fb42dfdfc6933a2a0aeefb5497&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWSZAKJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0zVKJArHFRQSFOLrzQcVOW0Pd7gJmhv8v0RWkF%2FfDlAiEAqhoEpQolKlGpiLctBHVNoTaPDOwh3o3o1bpcGZ95bPsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfL3EhXdagcpn0IircA3h1RnOdX5OwuFIJZ4rdvFtJhThVne4t6BcWvw1Y4JEJzx9U6aUEcvYAjJ%2Bx8wV3HZoGm2h7K1ocFluEJaw3w59h2eNdA7suEfdh5tqVyOo1hkQP4vVkPpbzYt8hg%2BmqSGttm8B5D8AtiVyvE9JMQYnkPsjDXkerwiyLiZTtfRFNEi10JkJGZ5l3zzztCpaAt1rU8O80rShYGBjQKBOPfu5hmCvCMXVUQSxuznfERzwrtvYioXQOiP9CadogkBJO8I3cCZFsKGsxoZXjo6T6mugNX5mpnqIJrobmwYOFs84iLHBXorKzjrROr7wZ9RJE%2FZ7%2BKMbN4tL4pcQ7TM6HovP66F3uNu%2FKhYqO8Uvodi%2BeiaUnO1%2FKC5ZoZpmwYs11NInajyyN9zjvUqkZZ8fgRAJFz5gYi1jwJBYz0M8%2FdXZ9iulut6O%2FSUSMhsSGnoR%2FrDK%2Bu8HfA3l36V1LB%2BmBMDgDFprCpj1bZZBW%2FAUh%2FUpe32rUxBPKvWR%2F0LPAzf354askuEeQF07wAklzTbPZid%2BdinCJue6l2eugHxuoctzHTofJZxWn3PDXzd6kKTY8agPVa%2Ffi2ydmHS9o5aSmPC5xavrixQA6aSNSYRZ3rRgaQyEaDLZaa5N5tzyWMMuyur8GOqUBeNOdQ0sJGlYYv3Te1xC5nFGIt3W%2FGIPCZiYeINm3zkpaxpHh5q3BTm3IsRXrlOXAmkYJA%2B5NhPADH8DY8FFu5Y0ep52DysjzEfXZmLV1aQaegIMZ%2FNeUnPCRVc%2BWr1uf12YAvqX9o8NZGCz%2Bh7qNCoMFXfefsgDakgdKJAnHG1wTfcVzA04M1M8DfP3sXEfnVkx5t7Cnk2db8pgYqDYQKwBSTFj0&X-Amz-Signature=ca469a72a1c0d966397f8ee4e1eeb9f2d75d539033143bf8c0c76988c9622624&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWSZAKJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0zVKJArHFRQSFOLrzQcVOW0Pd7gJmhv8v0RWkF%2FfDlAiEAqhoEpQolKlGpiLctBHVNoTaPDOwh3o3o1bpcGZ95bPsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfL3EhXdagcpn0IircA3h1RnOdX5OwuFIJZ4rdvFtJhThVne4t6BcWvw1Y4JEJzx9U6aUEcvYAjJ%2Bx8wV3HZoGm2h7K1ocFluEJaw3w59h2eNdA7suEfdh5tqVyOo1hkQP4vVkPpbzYt8hg%2BmqSGttm8B5D8AtiVyvE9JMQYnkPsjDXkerwiyLiZTtfRFNEi10JkJGZ5l3zzztCpaAt1rU8O80rShYGBjQKBOPfu5hmCvCMXVUQSxuznfERzwrtvYioXQOiP9CadogkBJO8I3cCZFsKGsxoZXjo6T6mugNX5mpnqIJrobmwYOFs84iLHBXorKzjrROr7wZ9RJE%2FZ7%2BKMbN4tL4pcQ7TM6HovP66F3uNu%2FKhYqO8Uvodi%2BeiaUnO1%2FKC5ZoZpmwYs11NInajyyN9zjvUqkZZ8fgRAJFz5gYi1jwJBYz0M8%2FdXZ9iulut6O%2FSUSMhsSGnoR%2FrDK%2Bu8HfA3l36V1LB%2BmBMDgDFprCpj1bZZBW%2FAUh%2FUpe32rUxBPKvWR%2F0LPAzf354askuEeQF07wAklzTbPZid%2BdinCJue6l2eugHxuoctzHTofJZxWn3PDXzd6kKTY8agPVa%2Ffi2ydmHS9o5aSmPC5xavrixQA6aSNSYRZ3rRgaQyEaDLZaa5N5tzyWMMuyur8GOqUBeNOdQ0sJGlYYv3Te1xC5nFGIt3W%2FGIPCZiYeINm3zkpaxpHh5q3BTm3IsRXrlOXAmkYJA%2B5NhPADH8DY8FFu5Y0ep52DysjzEfXZmLV1aQaegIMZ%2FNeUnPCRVc%2BWr1uf12YAvqX9o8NZGCz%2Bh7qNCoMFXfefsgDakgdKJAnHG1wTfcVzA04M1M8DfP3sXEfnVkx5t7Cnk2db8pgYqDYQKwBSTFj0&X-Amz-Signature=8c9bb8779229172ab8e05ed467ff11d500ceff880e69660f5d5b9b811c8a8a68&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWSZAKJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0zVKJArHFRQSFOLrzQcVOW0Pd7gJmhv8v0RWkF%2FfDlAiEAqhoEpQolKlGpiLctBHVNoTaPDOwh3o3o1bpcGZ95bPsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfL3EhXdagcpn0IircA3h1RnOdX5OwuFIJZ4rdvFtJhThVne4t6BcWvw1Y4JEJzx9U6aUEcvYAjJ%2Bx8wV3HZoGm2h7K1ocFluEJaw3w59h2eNdA7suEfdh5tqVyOo1hkQP4vVkPpbzYt8hg%2BmqSGttm8B5D8AtiVyvE9JMQYnkPsjDXkerwiyLiZTtfRFNEi10JkJGZ5l3zzztCpaAt1rU8O80rShYGBjQKBOPfu5hmCvCMXVUQSxuznfERzwrtvYioXQOiP9CadogkBJO8I3cCZFsKGsxoZXjo6T6mugNX5mpnqIJrobmwYOFs84iLHBXorKzjrROr7wZ9RJE%2FZ7%2BKMbN4tL4pcQ7TM6HovP66F3uNu%2FKhYqO8Uvodi%2BeiaUnO1%2FKC5ZoZpmwYs11NInajyyN9zjvUqkZZ8fgRAJFz5gYi1jwJBYz0M8%2FdXZ9iulut6O%2FSUSMhsSGnoR%2FrDK%2Bu8HfA3l36V1LB%2BmBMDgDFprCpj1bZZBW%2FAUh%2FUpe32rUxBPKvWR%2F0LPAzf354askuEeQF07wAklzTbPZid%2BdinCJue6l2eugHxuoctzHTofJZxWn3PDXzd6kKTY8agPVa%2Ffi2ydmHS9o5aSmPC5xavrixQA6aSNSYRZ3rRgaQyEaDLZaa5N5tzyWMMuyur8GOqUBeNOdQ0sJGlYYv3Te1xC5nFGIt3W%2FGIPCZiYeINm3zkpaxpHh5q3BTm3IsRXrlOXAmkYJA%2B5NhPADH8DY8FFu5Y0ep52DysjzEfXZmLV1aQaegIMZ%2FNeUnPCRVc%2BWr1uf12YAvqX9o8NZGCz%2Bh7qNCoMFXfefsgDakgdKJAnHG1wTfcVzA04M1M8DfP3sXEfnVkx5t7Cnk2db8pgYqDYQKwBSTFj0&X-Amz-Signature=4e1c702d72125412f9fd5bae90268496c80bae36203b9d6c3980fe3d9dee2d55&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWSZAKJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0zVKJArHFRQSFOLrzQcVOW0Pd7gJmhv8v0RWkF%2FfDlAiEAqhoEpQolKlGpiLctBHVNoTaPDOwh3o3o1bpcGZ95bPsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfL3EhXdagcpn0IircA3h1RnOdX5OwuFIJZ4rdvFtJhThVne4t6BcWvw1Y4JEJzx9U6aUEcvYAjJ%2Bx8wV3HZoGm2h7K1ocFluEJaw3w59h2eNdA7suEfdh5tqVyOo1hkQP4vVkPpbzYt8hg%2BmqSGttm8B5D8AtiVyvE9JMQYnkPsjDXkerwiyLiZTtfRFNEi10JkJGZ5l3zzztCpaAt1rU8O80rShYGBjQKBOPfu5hmCvCMXVUQSxuznfERzwrtvYioXQOiP9CadogkBJO8I3cCZFsKGsxoZXjo6T6mugNX5mpnqIJrobmwYOFs84iLHBXorKzjrROr7wZ9RJE%2FZ7%2BKMbN4tL4pcQ7TM6HovP66F3uNu%2FKhYqO8Uvodi%2BeiaUnO1%2FKC5ZoZpmwYs11NInajyyN9zjvUqkZZ8fgRAJFz5gYi1jwJBYz0M8%2FdXZ9iulut6O%2FSUSMhsSGnoR%2FrDK%2Bu8HfA3l36V1LB%2BmBMDgDFprCpj1bZZBW%2FAUh%2FUpe32rUxBPKvWR%2F0LPAzf354askuEeQF07wAklzTbPZid%2BdinCJue6l2eugHxuoctzHTofJZxWn3PDXzd6kKTY8agPVa%2Ffi2ydmHS9o5aSmPC5xavrixQA6aSNSYRZ3rRgaQyEaDLZaa5N5tzyWMMuyur8GOqUBeNOdQ0sJGlYYv3Te1xC5nFGIt3W%2FGIPCZiYeINm3zkpaxpHh5q3BTm3IsRXrlOXAmkYJA%2B5NhPADH8DY8FFu5Y0ep52DysjzEfXZmLV1aQaegIMZ%2FNeUnPCRVc%2BWr1uf12YAvqX9o8NZGCz%2Bh7qNCoMFXfefsgDakgdKJAnHG1wTfcVzA04M1M8DfP3sXEfnVkx5t7Cnk2db8pgYqDYQKwBSTFj0&X-Amz-Signature=c2c4c249302857028de457d96bd1d7bb58a939abcaea1c255f9f281b7ee9dd9a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWSZAKJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0zVKJArHFRQSFOLrzQcVOW0Pd7gJmhv8v0RWkF%2FfDlAiEAqhoEpQolKlGpiLctBHVNoTaPDOwh3o3o1bpcGZ95bPsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfL3EhXdagcpn0IircA3h1RnOdX5OwuFIJZ4rdvFtJhThVne4t6BcWvw1Y4JEJzx9U6aUEcvYAjJ%2Bx8wV3HZoGm2h7K1ocFluEJaw3w59h2eNdA7suEfdh5tqVyOo1hkQP4vVkPpbzYt8hg%2BmqSGttm8B5D8AtiVyvE9JMQYnkPsjDXkerwiyLiZTtfRFNEi10JkJGZ5l3zzztCpaAt1rU8O80rShYGBjQKBOPfu5hmCvCMXVUQSxuznfERzwrtvYioXQOiP9CadogkBJO8I3cCZFsKGsxoZXjo6T6mugNX5mpnqIJrobmwYOFs84iLHBXorKzjrROr7wZ9RJE%2FZ7%2BKMbN4tL4pcQ7TM6HovP66F3uNu%2FKhYqO8Uvodi%2BeiaUnO1%2FKC5ZoZpmwYs11NInajyyN9zjvUqkZZ8fgRAJFz5gYi1jwJBYz0M8%2FdXZ9iulut6O%2FSUSMhsSGnoR%2FrDK%2Bu8HfA3l36V1LB%2BmBMDgDFprCpj1bZZBW%2FAUh%2FUpe32rUxBPKvWR%2F0LPAzf354askuEeQF07wAklzTbPZid%2BdinCJue6l2eugHxuoctzHTofJZxWn3PDXzd6kKTY8agPVa%2Ffi2ydmHS9o5aSmPC5xavrixQA6aSNSYRZ3rRgaQyEaDLZaa5N5tzyWMMuyur8GOqUBeNOdQ0sJGlYYv3Te1xC5nFGIt3W%2FGIPCZiYeINm3zkpaxpHh5q3BTm3IsRXrlOXAmkYJA%2B5NhPADH8DY8FFu5Y0ep52DysjzEfXZmLV1aQaegIMZ%2FNeUnPCRVc%2BWr1uf12YAvqX9o8NZGCz%2Bh7qNCoMFXfefsgDakgdKJAnHG1wTfcVzA04M1M8DfP3sXEfnVkx5t7Cnk2db8pgYqDYQKwBSTFj0&X-Amz-Signature=d45dee8a137bc5dc67f62237de35a6000f32523b24a01da411a3cb33eefbae11&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
