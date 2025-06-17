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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMRDDSLV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtv6tKxmlwNE2wP3JbM3o%2FWXeDPuh2f4bTAn1zL9MvPAIgVB9KuKInTB3vyLVCIJe8GciFo%2BQ1uFUx7fzcwQZvl5sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIy%2FHwVaH8U%2F7SERGSrcA8j7etdjMUlMq5DPhYfai5rCUnhUkFy5ysIMKhA%2BEIqq%2FTOHeatNTn6UrF9DFODjY7WoDQUvshQil8EDj%2FdxTL0%2BkNnNGgaWgWSrLkRhLa%2FEFP3YaFjHTOZXC2IodFo3NwujBBk03zdEbNuwi%2FFdXE0pqIZLcQ65ZZIv0LVGzB0puwvIKZnC6bNtJ%2BXWRgDzPBKc08otvw70by%2FobROQN5wN5i2utekLxN05lO3OYFOuXsmXB3IImLlp1IHKBRBhQoAgxjtv6OH4sTBU3zPJkG%2FuVp3GhGyBbzKUlf5lHCvKbSZ6SwVbxbFXo258zmkqs2GBQ%2BGyIkeNa776uChKque9l5Z0FQiYmEezejh6MpCrMJvBjyCTjlof5Ueezt8qB%2BET2dkZTvzEl9aGZ%2FeqNx27CwUlj8NYusjlqmFM8eDSHaUwR4hi4gq2BPEgt0r0kJVKSn2iIl6%2Bj1pIg0ZmBk8hOdsa4Ej50viroiZyULBfQSOwzG1CLmEy0%2FqQMQqyCbLf7rjzAEw5bxly%2Ff6%2BWvlznCRJcx0UltLv1lQZ9p9xY5cvbTzyZNTm%2F10ikRVqC3bXzmq0L%2FCf%2BKR%2F3DmERsq3d1zGYfHjVp8WHp7KlPS4aU56%2FODseYZ0CTn%2FMM6TxMIGOqUBuv8BjClBjsfuC0RoRtvX7k8%2FpvNa3B%2BezqCCKlB%2BnsDTv6gKgIXNNb6W31eFsnuOAlgHiHYNN2bv4BM7UiKx9J3VxDAY9E%2FgQ2Kz7F%2FOL91cWQQtFPD2bg7DJekJQ%2Fuk7nM8ECBuQ7KErz%2BciHhWZWcZBYzZnnqF7aRjqf6JMVoUogbQwgbSmVa2HVnHYPn8y4F45F12q2P9cW5iue4FrWUgYRUJ&X-Amz-Signature=78831e0e388da85ceea202a63a2c702508f6997a37c15d5b17ff633fb3c94516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMRDDSLV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtv6tKxmlwNE2wP3JbM3o%2FWXeDPuh2f4bTAn1zL9MvPAIgVB9KuKInTB3vyLVCIJe8GciFo%2BQ1uFUx7fzcwQZvl5sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIy%2FHwVaH8U%2F7SERGSrcA8j7etdjMUlMq5DPhYfai5rCUnhUkFy5ysIMKhA%2BEIqq%2FTOHeatNTn6UrF9DFODjY7WoDQUvshQil8EDj%2FdxTL0%2BkNnNGgaWgWSrLkRhLa%2FEFP3YaFjHTOZXC2IodFo3NwujBBk03zdEbNuwi%2FFdXE0pqIZLcQ65ZZIv0LVGzB0puwvIKZnC6bNtJ%2BXWRgDzPBKc08otvw70by%2FobROQN5wN5i2utekLxN05lO3OYFOuXsmXB3IImLlp1IHKBRBhQoAgxjtv6OH4sTBU3zPJkG%2FuVp3GhGyBbzKUlf5lHCvKbSZ6SwVbxbFXo258zmkqs2GBQ%2BGyIkeNa776uChKque9l5Z0FQiYmEezejh6MpCrMJvBjyCTjlof5Ueezt8qB%2BET2dkZTvzEl9aGZ%2FeqNx27CwUlj8NYusjlqmFM8eDSHaUwR4hi4gq2BPEgt0r0kJVKSn2iIl6%2Bj1pIg0ZmBk8hOdsa4Ej50viroiZyULBfQSOwzG1CLmEy0%2FqQMQqyCbLf7rjzAEw5bxly%2Ff6%2BWvlznCRJcx0UltLv1lQZ9p9xY5cvbTzyZNTm%2F10ikRVqC3bXzmq0L%2FCf%2BKR%2F3DmERsq3d1zGYfHjVp8WHp7KlPS4aU56%2FODseYZ0CTn%2FMM6TxMIGOqUBuv8BjClBjsfuC0RoRtvX7k8%2FpvNa3B%2BezqCCKlB%2BnsDTv6gKgIXNNb6W31eFsnuOAlgHiHYNN2bv4BM7UiKx9J3VxDAY9E%2FgQ2Kz7F%2FOL91cWQQtFPD2bg7DJekJQ%2Fuk7nM8ECBuQ7KErz%2BciHhWZWcZBYzZnnqF7aRjqf6JMVoUogbQwgbSmVa2HVnHYPn8y4F45F12q2P9cW5iue4FrWUgYRUJ&X-Amz-Signature=6240b273b889068bcb29fba8d9b68dd1a61267054e03e4f34ec488bf310017ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMRDDSLV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtv6tKxmlwNE2wP3JbM3o%2FWXeDPuh2f4bTAn1zL9MvPAIgVB9KuKInTB3vyLVCIJe8GciFo%2BQ1uFUx7fzcwQZvl5sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIy%2FHwVaH8U%2F7SERGSrcA8j7etdjMUlMq5DPhYfai5rCUnhUkFy5ysIMKhA%2BEIqq%2FTOHeatNTn6UrF9DFODjY7WoDQUvshQil8EDj%2FdxTL0%2BkNnNGgaWgWSrLkRhLa%2FEFP3YaFjHTOZXC2IodFo3NwujBBk03zdEbNuwi%2FFdXE0pqIZLcQ65ZZIv0LVGzB0puwvIKZnC6bNtJ%2BXWRgDzPBKc08otvw70by%2FobROQN5wN5i2utekLxN05lO3OYFOuXsmXB3IImLlp1IHKBRBhQoAgxjtv6OH4sTBU3zPJkG%2FuVp3GhGyBbzKUlf5lHCvKbSZ6SwVbxbFXo258zmkqs2GBQ%2BGyIkeNa776uChKque9l5Z0FQiYmEezejh6MpCrMJvBjyCTjlof5Ueezt8qB%2BET2dkZTvzEl9aGZ%2FeqNx27CwUlj8NYusjlqmFM8eDSHaUwR4hi4gq2BPEgt0r0kJVKSn2iIl6%2Bj1pIg0ZmBk8hOdsa4Ej50viroiZyULBfQSOwzG1CLmEy0%2FqQMQqyCbLf7rjzAEw5bxly%2Ff6%2BWvlznCRJcx0UltLv1lQZ9p9xY5cvbTzyZNTm%2F10ikRVqC3bXzmq0L%2FCf%2BKR%2F3DmERsq3d1zGYfHjVp8WHp7KlPS4aU56%2FODseYZ0CTn%2FMM6TxMIGOqUBuv8BjClBjsfuC0RoRtvX7k8%2FpvNa3B%2BezqCCKlB%2BnsDTv6gKgIXNNb6W31eFsnuOAlgHiHYNN2bv4BM7UiKx9J3VxDAY9E%2FgQ2Kz7F%2FOL91cWQQtFPD2bg7DJekJQ%2Fuk7nM8ECBuQ7KErz%2BciHhWZWcZBYzZnnqF7aRjqf6JMVoUogbQwgbSmVa2HVnHYPn8y4F45F12q2P9cW5iue4FrWUgYRUJ&X-Amz-Signature=3b103294ff9605f5eff75ce8fa8d7be33539bc7895b9a3d8ef293bddecbca476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMRDDSLV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtv6tKxmlwNE2wP3JbM3o%2FWXeDPuh2f4bTAn1zL9MvPAIgVB9KuKInTB3vyLVCIJe8GciFo%2BQ1uFUx7fzcwQZvl5sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIy%2FHwVaH8U%2F7SERGSrcA8j7etdjMUlMq5DPhYfai5rCUnhUkFy5ysIMKhA%2BEIqq%2FTOHeatNTn6UrF9DFODjY7WoDQUvshQil8EDj%2FdxTL0%2BkNnNGgaWgWSrLkRhLa%2FEFP3YaFjHTOZXC2IodFo3NwujBBk03zdEbNuwi%2FFdXE0pqIZLcQ65ZZIv0LVGzB0puwvIKZnC6bNtJ%2BXWRgDzPBKc08otvw70by%2FobROQN5wN5i2utekLxN05lO3OYFOuXsmXB3IImLlp1IHKBRBhQoAgxjtv6OH4sTBU3zPJkG%2FuVp3GhGyBbzKUlf5lHCvKbSZ6SwVbxbFXo258zmkqs2GBQ%2BGyIkeNa776uChKque9l5Z0FQiYmEezejh6MpCrMJvBjyCTjlof5Ueezt8qB%2BET2dkZTvzEl9aGZ%2FeqNx27CwUlj8NYusjlqmFM8eDSHaUwR4hi4gq2BPEgt0r0kJVKSn2iIl6%2Bj1pIg0ZmBk8hOdsa4Ej50viroiZyULBfQSOwzG1CLmEy0%2FqQMQqyCbLf7rjzAEw5bxly%2Ff6%2BWvlznCRJcx0UltLv1lQZ9p9xY5cvbTzyZNTm%2F10ikRVqC3bXzmq0L%2FCf%2BKR%2F3DmERsq3d1zGYfHjVp8WHp7KlPS4aU56%2FODseYZ0CTn%2FMM6TxMIGOqUBuv8BjClBjsfuC0RoRtvX7k8%2FpvNa3B%2BezqCCKlB%2BnsDTv6gKgIXNNb6W31eFsnuOAlgHiHYNN2bv4BM7UiKx9J3VxDAY9E%2FgQ2Kz7F%2FOL91cWQQtFPD2bg7DJekJQ%2Fuk7nM8ECBuQ7KErz%2BciHhWZWcZBYzZnnqF7aRjqf6JMVoUogbQwgbSmVa2HVnHYPn8y4F45F12q2P9cW5iue4FrWUgYRUJ&X-Amz-Signature=0b4bab0a1bee4d5cc69387c0963165fbb7a87949169ff857919617647b79c60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMRDDSLV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtv6tKxmlwNE2wP3JbM3o%2FWXeDPuh2f4bTAn1zL9MvPAIgVB9KuKInTB3vyLVCIJe8GciFo%2BQ1uFUx7fzcwQZvl5sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIy%2FHwVaH8U%2F7SERGSrcA8j7etdjMUlMq5DPhYfai5rCUnhUkFy5ysIMKhA%2BEIqq%2FTOHeatNTn6UrF9DFODjY7WoDQUvshQil8EDj%2FdxTL0%2BkNnNGgaWgWSrLkRhLa%2FEFP3YaFjHTOZXC2IodFo3NwujBBk03zdEbNuwi%2FFdXE0pqIZLcQ65ZZIv0LVGzB0puwvIKZnC6bNtJ%2BXWRgDzPBKc08otvw70by%2FobROQN5wN5i2utekLxN05lO3OYFOuXsmXB3IImLlp1IHKBRBhQoAgxjtv6OH4sTBU3zPJkG%2FuVp3GhGyBbzKUlf5lHCvKbSZ6SwVbxbFXo258zmkqs2GBQ%2BGyIkeNa776uChKque9l5Z0FQiYmEezejh6MpCrMJvBjyCTjlof5Ueezt8qB%2BET2dkZTvzEl9aGZ%2FeqNx27CwUlj8NYusjlqmFM8eDSHaUwR4hi4gq2BPEgt0r0kJVKSn2iIl6%2Bj1pIg0ZmBk8hOdsa4Ej50viroiZyULBfQSOwzG1CLmEy0%2FqQMQqyCbLf7rjzAEw5bxly%2Ff6%2BWvlznCRJcx0UltLv1lQZ9p9xY5cvbTzyZNTm%2F10ikRVqC3bXzmq0L%2FCf%2BKR%2F3DmERsq3d1zGYfHjVp8WHp7KlPS4aU56%2FODseYZ0CTn%2FMM6TxMIGOqUBuv8BjClBjsfuC0RoRtvX7k8%2FpvNa3B%2BezqCCKlB%2BnsDTv6gKgIXNNb6W31eFsnuOAlgHiHYNN2bv4BM7UiKx9J3VxDAY9E%2FgQ2Kz7F%2FOL91cWQQtFPD2bg7DJekJQ%2Fuk7nM8ECBuQ7KErz%2BciHhWZWcZBYzZnnqF7aRjqf6JMVoUogbQwgbSmVa2HVnHYPn8y4F45F12q2P9cW5iue4FrWUgYRUJ&X-Amz-Signature=20743b7e32444df105530ab428c013734f43f46ec97c34cbc69b3ea4bad765db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMRDDSLV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtv6tKxmlwNE2wP3JbM3o%2FWXeDPuh2f4bTAn1zL9MvPAIgVB9KuKInTB3vyLVCIJe8GciFo%2BQ1uFUx7fzcwQZvl5sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIy%2FHwVaH8U%2F7SERGSrcA8j7etdjMUlMq5DPhYfai5rCUnhUkFy5ysIMKhA%2BEIqq%2FTOHeatNTn6UrF9DFODjY7WoDQUvshQil8EDj%2FdxTL0%2BkNnNGgaWgWSrLkRhLa%2FEFP3YaFjHTOZXC2IodFo3NwujBBk03zdEbNuwi%2FFdXE0pqIZLcQ65ZZIv0LVGzB0puwvIKZnC6bNtJ%2BXWRgDzPBKc08otvw70by%2FobROQN5wN5i2utekLxN05lO3OYFOuXsmXB3IImLlp1IHKBRBhQoAgxjtv6OH4sTBU3zPJkG%2FuVp3GhGyBbzKUlf5lHCvKbSZ6SwVbxbFXo258zmkqs2GBQ%2BGyIkeNa776uChKque9l5Z0FQiYmEezejh6MpCrMJvBjyCTjlof5Ueezt8qB%2BET2dkZTvzEl9aGZ%2FeqNx27CwUlj8NYusjlqmFM8eDSHaUwR4hi4gq2BPEgt0r0kJVKSn2iIl6%2Bj1pIg0ZmBk8hOdsa4Ej50viroiZyULBfQSOwzG1CLmEy0%2FqQMQqyCbLf7rjzAEw5bxly%2Ff6%2BWvlznCRJcx0UltLv1lQZ9p9xY5cvbTzyZNTm%2F10ikRVqC3bXzmq0L%2FCf%2BKR%2F3DmERsq3d1zGYfHjVp8WHp7KlPS4aU56%2FODseYZ0CTn%2FMM6TxMIGOqUBuv8BjClBjsfuC0RoRtvX7k8%2FpvNa3B%2BezqCCKlB%2BnsDTv6gKgIXNNb6W31eFsnuOAlgHiHYNN2bv4BM7UiKx9J3VxDAY9E%2FgQ2Kz7F%2FOL91cWQQtFPD2bg7DJekJQ%2Fuk7nM8ECBuQ7KErz%2BciHhWZWcZBYzZnnqF7aRjqf6JMVoUogbQwgbSmVa2HVnHYPn8y4F45F12q2P9cW5iue4FrWUgYRUJ&X-Amz-Signature=0070ffe61211caa5c4d30f99385432c0b1a1c37a8799c79f4255a2523d0edf63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMRDDSLV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtv6tKxmlwNE2wP3JbM3o%2FWXeDPuh2f4bTAn1zL9MvPAIgVB9KuKInTB3vyLVCIJe8GciFo%2BQ1uFUx7fzcwQZvl5sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIy%2FHwVaH8U%2F7SERGSrcA8j7etdjMUlMq5DPhYfai5rCUnhUkFy5ysIMKhA%2BEIqq%2FTOHeatNTn6UrF9DFODjY7WoDQUvshQil8EDj%2FdxTL0%2BkNnNGgaWgWSrLkRhLa%2FEFP3YaFjHTOZXC2IodFo3NwujBBk03zdEbNuwi%2FFdXE0pqIZLcQ65ZZIv0LVGzB0puwvIKZnC6bNtJ%2BXWRgDzPBKc08otvw70by%2FobROQN5wN5i2utekLxN05lO3OYFOuXsmXB3IImLlp1IHKBRBhQoAgxjtv6OH4sTBU3zPJkG%2FuVp3GhGyBbzKUlf5lHCvKbSZ6SwVbxbFXo258zmkqs2GBQ%2BGyIkeNa776uChKque9l5Z0FQiYmEezejh6MpCrMJvBjyCTjlof5Ueezt8qB%2BET2dkZTvzEl9aGZ%2FeqNx27CwUlj8NYusjlqmFM8eDSHaUwR4hi4gq2BPEgt0r0kJVKSn2iIl6%2Bj1pIg0ZmBk8hOdsa4Ej50viroiZyULBfQSOwzG1CLmEy0%2FqQMQqyCbLf7rjzAEw5bxly%2Ff6%2BWvlznCRJcx0UltLv1lQZ9p9xY5cvbTzyZNTm%2F10ikRVqC3bXzmq0L%2FCf%2BKR%2F3DmERsq3d1zGYfHjVp8WHp7KlPS4aU56%2FODseYZ0CTn%2FMM6TxMIGOqUBuv8BjClBjsfuC0RoRtvX7k8%2FpvNa3B%2BezqCCKlB%2BnsDTv6gKgIXNNb6W31eFsnuOAlgHiHYNN2bv4BM7UiKx9J3VxDAY9E%2FgQ2Kz7F%2FOL91cWQQtFPD2bg7DJekJQ%2Fuk7nM8ECBuQ7KErz%2BciHhWZWcZBYzZnnqF7aRjqf6JMVoUogbQwgbSmVa2HVnHYPn8y4F45F12q2P9cW5iue4FrWUgYRUJ&X-Amz-Signature=73449b77da141a59fe1785aad0d573219dee1b3fbe75438f442c62182e63b391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
