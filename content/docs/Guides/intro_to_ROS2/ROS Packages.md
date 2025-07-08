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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVIXLW6%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC5zDUmbYP87ac%2FdDdqspp%2BzjkhDZUSGaekXAZynJZzwAIgG2tJlI5y4udfgeFDxg4iVkpH5cmcDEejwNq4Hq5r%2B%2B8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlrCJ02EekPJOrPiCrcAye1sL%2FzoEIXcNBUHxr7woeiuUTrk8zvre2j3FByRik%2Fg4D60AfteJ5ezqRMvsCKnBnPIVCwiTGyely8Leh1XhNcpwecFBKk5GMY6YPHV%2BqvTgmqONgW7GV42nYQK%2FZcff%2BzT%2BJYJeDLBaRlJbT%2B%2FQ7bDf1fA7wNZXdh4zUgKNcLU0rJbFDLvh%2F3dg1LsCJw0Yq%2FIGFa51sRbIbjRQZeJywTUmrgy2XV62DOSJL1jcfj4qTMKHW5EuY4LleXzP6dMVQpWqJtk2eAbQsw8VaHR2lS7qnpWuRAKAhXhFVJbDiI5R7Ww0PM6AThhhocIdj9zzIzyxqfnxhv7I94rkcwAst%2FWwwdusJbwnx%2FKwUl%2FoVCt8L6LFdX4uu%2B9wD1PkMXwb0E1bEl1ATSrzW9qvCwa8EP7GlFAeZyATFq%2BK1z5qWjzobGVchMKANjOJcCOXDPfqJ4zkA7I1KcAu1hcQ4FpHiQrbN7jU9QzLdk3Nw6IYFKzgYVGuhpr2uc%2BoDCFFyzhsrsPSJhSgBBSGoluMZq3NpURSxTMuRO%2BbOb04T%2FMMukzmRPxkuH5TxEyaPedPykfRkl7Bz2yxIfVUYA1OkykLQJWznFTM%2BIEcQhMyyH7yV4s%2B0lozt4QQQSgWLOMI2EssMGOqUBLYGzgVoSSE7BvK8q9EY3DycSmfko9MiqsQLf%2FPtqGWtJiQJkDH%2F7qQRdCUzZRm2%2FNVHTMRXOAzLEpH84OMD%2F3q5cDT%2FYhtiHJ%2BSkqjKm0ybAhVZvF1CLxe5pbBCltaBX6CT1AOaH9iInIj%2FiOdMa1mwipUB3UkHOP%2BUZC%2F8byYZiBHxX9rBtw9ZgPDTAsD76dHQhFguXATDs2Fi%2B%2BQQp5k%2BiMZn%2B&X-Amz-Signature=af35f3f8b25e87117d074120159b2af7ac52b092c38f1c0ff48b152268a0f778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVIXLW6%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC5zDUmbYP87ac%2FdDdqspp%2BzjkhDZUSGaekXAZynJZzwAIgG2tJlI5y4udfgeFDxg4iVkpH5cmcDEejwNq4Hq5r%2B%2B8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlrCJ02EekPJOrPiCrcAye1sL%2FzoEIXcNBUHxr7woeiuUTrk8zvre2j3FByRik%2Fg4D60AfteJ5ezqRMvsCKnBnPIVCwiTGyely8Leh1XhNcpwecFBKk5GMY6YPHV%2BqvTgmqONgW7GV42nYQK%2FZcff%2BzT%2BJYJeDLBaRlJbT%2B%2FQ7bDf1fA7wNZXdh4zUgKNcLU0rJbFDLvh%2F3dg1LsCJw0Yq%2FIGFa51sRbIbjRQZeJywTUmrgy2XV62DOSJL1jcfj4qTMKHW5EuY4LleXzP6dMVQpWqJtk2eAbQsw8VaHR2lS7qnpWuRAKAhXhFVJbDiI5R7Ww0PM6AThhhocIdj9zzIzyxqfnxhv7I94rkcwAst%2FWwwdusJbwnx%2FKwUl%2FoVCt8L6LFdX4uu%2B9wD1PkMXwb0E1bEl1ATSrzW9qvCwa8EP7GlFAeZyATFq%2BK1z5qWjzobGVchMKANjOJcCOXDPfqJ4zkA7I1KcAu1hcQ4FpHiQrbN7jU9QzLdk3Nw6IYFKzgYVGuhpr2uc%2BoDCFFyzhsrsPSJhSgBBSGoluMZq3NpURSxTMuRO%2BbOb04T%2FMMukzmRPxkuH5TxEyaPedPykfRkl7Bz2yxIfVUYA1OkykLQJWznFTM%2BIEcQhMyyH7yV4s%2B0lozt4QQQSgWLOMI2EssMGOqUBLYGzgVoSSE7BvK8q9EY3DycSmfko9MiqsQLf%2FPtqGWtJiQJkDH%2F7qQRdCUzZRm2%2FNVHTMRXOAzLEpH84OMD%2F3q5cDT%2FYhtiHJ%2BSkqjKm0ybAhVZvF1CLxe5pbBCltaBX6CT1AOaH9iInIj%2FiOdMa1mwipUB3UkHOP%2BUZC%2F8byYZiBHxX9rBtw9ZgPDTAsD76dHQhFguXATDs2Fi%2B%2BQQp5k%2BiMZn%2B&X-Amz-Signature=667f4ec0834cc224cb5192f41a0ac5c18c4d8e23a99043c8e79d3db4590584f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVIXLW6%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC5zDUmbYP87ac%2FdDdqspp%2BzjkhDZUSGaekXAZynJZzwAIgG2tJlI5y4udfgeFDxg4iVkpH5cmcDEejwNq4Hq5r%2B%2B8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlrCJ02EekPJOrPiCrcAye1sL%2FzoEIXcNBUHxr7woeiuUTrk8zvre2j3FByRik%2Fg4D60AfteJ5ezqRMvsCKnBnPIVCwiTGyely8Leh1XhNcpwecFBKk5GMY6YPHV%2BqvTgmqONgW7GV42nYQK%2FZcff%2BzT%2BJYJeDLBaRlJbT%2B%2FQ7bDf1fA7wNZXdh4zUgKNcLU0rJbFDLvh%2F3dg1LsCJw0Yq%2FIGFa51sRbIbjRQZeJywTUmrgy2XV62DOSJL1jcfj4qTMKHW5EuY4LleXzP6dMVQpWqJtk2eAbQsw8VaHR2lS7qnpWuRAKAhXhFVJbDiI5R7Ww0PM6AThhhocIdj9zzIzyxqfnxhv7I94rkcwAst%2FWwwdusJbwnx%2FKwUl%2FoVCt8L6LFdX4uu%2B9wD1PkMXwb0E1bEl1ATSrzW9qvCwa8EP7GlFAeZyATFq%2BK1z5qWjzobGVchMKANjOJcCOXDPfqJ4zkA7I1KcAu1hcQ4FpHiQrbN7jU9QzLdk3Nw6IYFKzgYVGuhpr2uc%2BoDCFFyzhsrsPSJhSgBBSGoluMZq3NpURSxTMuRO%2BbOb04T%2FMMukzmRPxkuH5TxEyaPedPykfRkl7Bz2yxIfVUYA1OkykLQJWznFTM%2BIEcQhMyyH7yV4s%2B0lozt4QQQSgWLOMI2EssMGOqUBLYGzgVoSSE7BvK8q9EY3DycSmfko9MiqsQLf%2FPtqGWtJiQJkDH%2F7qQRdCUzZRm2%2FNVHTMRXOAzLEpH84OMD%2F3q5cDT%2FYhtiHJ%2BSkqjKm0ybAhVZvF1CLxe5pbBCltaBX6CT1AOaH9iInIj%2FiOdMa1mwipUB3UkHOP%2BUZC%2F8byYZiBHxX9rBtw9ZgPDTAsD76dHQhFguXATDs2Fi%2B%2BQQp5k%2BiMZn%2B&X-Amz-Signature=56f830a377a7692e75413a424c55351a99d2f95bcaffa1c6dbe4c08e22f8d915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVIXLW6%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC5zDUmbYP87ac%2FdDdqspp%2BzjkhDZUSGaekXAZynJZzwAIgG2tJlI5y4udfgeFDxg4iVkpH5cmcDEejwNq4Hq5r%2B%2B8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlrCJ02EekPJOrPiCrcAye1sL%2FzoEIXcNBUHxr7woeiuUTrk8zvre2j3FByRik%2Fg4D60AfteJ5ezqRMvsCKnBnPIVCwiTGyely8Leh1XhNcpwecFBKk5GMY6YPHV%2BqvTgmqONgW7GV42nYQK%2FZcff%2BzT%2BJYJeDLBaRlJbT%2B%2FQ7bDf1fA7wNZXdh4zUgKNcLU0rJbFDLvh%2F3dg1LsCJw0Yq%2FIGFa51sRbIbjRQZeJywTUmrgy2XV62DOSJL1jcfj4qTMKHW5EuY4LleXzP6dMVQpWqJtk2eAbQsw8VaHR2lS7qnpWuRAKAhXhFVJbDiI5R7Ww0PM6AThhhocIdj9zzIzyxqfnxhv7I94rkcwAst%2FWwwdusJbwnx%2FKwUl%2FoVCt8L6LFdX4uu%2B9wD1PkMXwb0E1bEl1ATSrzW9qvCwa8EP7GlFAeZyATFq%2BK1z5qWjzobGVchMKANjOJcCOXDPfqJ4zkA7I1KcAu1hcQ4FpHiQrbN7jU9QzLdk3Nw6IYFKzgYVGuhpr2uc%2BoDCFFyzhsrsPSJhSgBBSGoluMZq3NpURSxTMuRO%2BbOb04T%2FMMukzmRPxkuH5TxEyaPedPykfRkl7Bz2yxIfVUYA1OkykLQJWznFTM%2BIEcQhMyyH7yV4s%2B0lozt4QQQSgWLOMI2EssMGOqUBLYGzgVoSSE7BvK8q9EY3DycSmfko9MiqsQLf%2FPtqGWtJiQJkDH%2F7qQRdCUzZRm2%2FNVHTMRXOAzLEpH84OMD%2F3q5cDT%2FYhtiHJ%2BSkqjKm0ybAhVZvF1CLxe5pbBCltaBX6CT1AOaH9iInIj%2FiOdMa1mwipUB3UkHOP%2BUZC%2F8byYZiBHxX9rBtw9ZgPDTAsD76dHQhFguXATDs2Fi%2B%2BQQp5k%2BiMZn%2B&X-Amz-Signature=cc4fe7f2f98a2538c20c5e705fb3b17e688673a2462f456472f7bb53ec32a884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVIXLW6%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC5zDUmbYP87ac%2FdDdqspp%2BzjkhDZUSGaekXAZynJZzwAIgG2tJlI5y4udfgeFDxg4iVkpH5cmcDEejwNq4Hq5r%2B%2B8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlrCJ02EekPJOrPiCrcAye1sL%2FzoEIXcNBUHxr7woeiuUTrk8zvre2j3FByRik%2Fg4D60AfteJ5ezqRMvsCKnBnPIVCwiTGyely8Leh1XhNcpwecFBKk5GMY6YPHV%2BqvTgmqONgW7GV42nYQK%2FZcff%2BzT%2BJYJeDLBaRlJbT%2B%2FQ7bDf1fA7wNZXdh4zUgKNcLU0rJbFDLvh%2F3dg1LsCJw0Yq%2FIGFa51sRbIbjRQZeJywTUmrgy2XV62DOSJL1jcfj4qTMKHW5EuY4LleXzP6dMVQpWqJtk2eAbQsw8VaHR2lS7qnpWuRAKAhXhFVJbDiI5R7Ww0PM6AThhhocIdj9zzIzyxqfnxhv7I94rkcwAst%2FWwwdusJbwnx%2FKwUl%2FoVCt8L6LFdX4uu%2B9wD1PkMXwb0E1bEl1ATSrzW9qvCwa8EP7GlFAeZyATFq%2BK1z5qWjzobGVchMKANjOJcCOXDPfqJ4zkA7I1KcAu1hcQ4FpHiQrbN7jU9QzLdk3Nw6IYFKzgYVGuhpr2uc%2BoDCFFyzhsrsPSJhSgBBSGoluMZq3NpURSxTMuRO%2BbOb04T%2FMMukzmRPxkuH5TxEyaPedPykfRkl7Bz2yxIfVUYA1OkykLQJWznFTM%2BIEcQhMyyH7yV4s%2B0lozt4QQQSgWLOMI2EssMGOqUBLYGzgVoSSE7BvK8q9EY3DycSmfko9MiqsQLf%2FPtqGWtJiQJkDH%2F7qQRdCUzZRm2%2FNVHTMRXOAzLEpH84OMD%2F3q5cDT%2FYhtiHJ%2BSkqjKm0ybAhVZvF1CLxe5pbBCltaBX6CT1AOaH9iInIj%2FiOdMa1mwipUB3UkHOP%2BUZC%2F8byYZiBHxX9rBtw9ZgPDTAsD76dHQhFguXATDs2Fi%2B%2BQQp5k%2BiMZn%2B&X-Amz-Signature=b19930dcef226f2108a851018ce4e49f92819299aba94ef89829818314364687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVIXLW6%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC5zDUmbYP87ac%2FdDdqspp%2BzjkhDZUSGaekXAZynJZzwAIgG2tJlI5y4udfgeFDxg4iVkpH5cmcDEejwNq4Hq5r%2B%2B8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlrCJ02EekPJOrPiCrcAye1sL%2FzoEIXcNBUHxr7woeiuUTrk8zvre2j3FByRik%2Fg4D60AfteJ5ezqRMvsCKnBnPIVCwiTGyely8Leh1XhNcpwecFBKk5GMY6YPHV%2BqvTgmqONgW7GV42nYQK%2FZcff%2BzT%2BJYJeDLBaRlJbT%2B%2FQ7bDf1fA7wNZXdh4zUgKNcLU0rJbFDLvh%2F3dg1LsCJw0Yq%2FIGFa51sRbIbjRQZeJywTUmrgy2XV62DOSJL1jcfj4qTMKHW5EuY4LleXzP6dMVQpWqJtk2eAbQsw8VaHR2lS7qnpWuRAKAhXhFVJbDiI5R7Ww0PM6AThhhocIdj9zzIzyxqfnxhv7I94rkcwAst%2FWwwdusJbwnx%2FKwUl%2FoVCt8L6LFdX4uu%2B9wD1PkMXwb0E1bEl1ATSrzW9qvCwa8EP7GlFAeZyATFq%2BK1z5qWjzobGVchMKANjOJcCOXDPfqJ4zkA7I1KcAu1hcQ4FpHiQrbN7jU9QzLdk3Nw6IYFKzgYVGuhpr2uc%2BoDCFFyzhsrsPSJhSgBBSGoluMZq3NpURSxTMuRO%2BbOb04T%2FMMukzmRPxkuH5TxEyaPedPykfRkl7Bz2yxIfVUYA1OkykLQJWznFTM%2BIEcQhMyyH7yV4s%2B0lozt4QQQSgWLOMI2EssMGOqUBLYGzgVoSSE7BvK8q9EY3DycSmfko9MiqsQLf%2FPtqGWtJiQJkDH%2F7qQRdCUzZRm2%2FNVHTMRXOAzLEpH84OMD%2F3q5cDT%2FYhtiHJ%2BSkqjKm0ybAhVZvF1CLxe5pbBCltaBX6CT1AOaH9iInIj%2FiOdMa1mwipUB3UkHOP%2BUZC%2F8byYZiBHxX9rBtw9ZgPDTAsD76dHQhFguXATDs2Fi%2B%2BQQp5k%2BiMZn%2B&X-Amz-Signature=23f911a233da96e52bf014c1a2b5eb757e04311f041659b4567e80bd39da5ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVIXLW6%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC5zDUmbYP87ac%2FdDdqspp%2BzjkhDZUSGaekXAZynJZzwAIgG2tJlI5y4udfgeFDxg4iVkpH5cmcDEejwNq4Hq5r%2B%2B8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlrCJ02EekPJOrPiCrcAye1sL%2FzoEIXcNBUHxr7woeiuUTrk8zvre2j3FByRik%2Fg4D60AfteJ5ezqRMvsCKnBnPIVCwiTGyely8Leh1XhNcpwecFBKk5GMY6YPHV%2BqvTgmqONgW7GV42nYQK%2FZcff%2BzT%2BJYJeDLBaRlJbT%2B%2FQ7bDf1fA7wNZXdh4zUgKNcLU0rJbFDLvh%2F3dg1LsCJw0Yq%2FIGFa51sRbIbjRQZeJywTUmrgy2XV62DOSJL1jcfj4qTMKHW5EuY4LleXzP6dMVQpWqJtk2eAbQsw8VaHR2lS7qnpWuRAKAhXhFVJbDiI5R7Ww0PM6AThhhocIdj9zzIzyxqfnxhv7I94rkcwAst%2FWwwdusJbwnx%2FKwUl%2FoVCt8L6LFdX4uu%2B9wD1PkMXwb0E1bEl1ATSrzW9qvCwa8EP7GlFAeZyATFq%2BK1z5qWjzobGVchMKANjOJcCOXDPfqJ4zkA7I1KcAu1hcQ4FpHiQrbN7jU9QzLdk3Nw6IYFKzgYVGuhpr2uc%2BoDCFFyzhsrsPSJhSgBBSGoluMZq3NpURSxTMuRO%2BbOb04T%2FMMukzmRPxkuH5TxEyaPedPykfRkl7Bz2yxIfVUYA1OkykLQJWznFTM%2BIEcQhMyyH7yV4s%2B0lozt4QQQSgWLOMI2EssMGOqUBLYGzgVoSSE7BvK8q9EY3DycSmfko9MiqsQLf%2FPtqGWtJiQJkDH%2F7qQRdCUzZRm2%2FNVHTMRXOAzLEpH84OMD%2F3q5cDT%2FYhtiHJ%2BSkqjKm0ybAhVZvF1CLxe5pbBCltaBX6CT1AOaH9iInIj%2FiOdMa1mwipUB3UkHOP%2BUZC%2F8byYZiBHxX9rBtw9ZgPDTAsD76dHQhFguXATDs2Fi%2B%2BQQp5k%2BiMZn%2B&X-Amz-Signature=f8a04c95265e567682e5db9ffbf761cbc3c1ae1f916c39f1a4a337a670323d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
