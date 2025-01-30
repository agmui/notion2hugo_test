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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q73CTYT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJKNAT6%2FQNJofXDYYyLg67FzxglSktu4T9vl6g0248aAiEAikQXm8y5uJHxb9YNA7bEbUhoISL1yv%2BQhHdVtw1oeAEqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHxKegFZ8dB5IaBGircA1o5GttthTl7RVx9pG8RM%2BslORRlGRdPe5ZgmYe9rQeK3bO5dC1b%2FaR5%2FTIlwk72wfqGe8toGQNbAAr3dAFjTdZTf2BP0m87gUn2jP7n%2F3FzeIRQ%2FJEPZyuIRiJqwE5PQmytkMBbwXtqBjWsiwHasUlDVbsNy7JwUh9RZHl73ryJ5W0Cx%2FVwLqKzeLBROu8uoerAEzXP%2FQrPzBv9JP4g%2Br9RcbNv%2BvEjjxXCsegr5bauGKxljExmFjbMYQo88nqYYecdqYNxZGK1hSWdvWAuUkPxx6qBWO2CtZWThvM6eXuJ04dBvShtj%2BoYUfGPk98hTIhSIai3x1fF2TOxZjk%2BbQPUJPOlmuZPJKZzjn6sEKdFzZyoo0iSa6SeQFwaX3UHzqkXsI5PBkHkAT%2FjAfBCnt%2BsOHkLTJd4L0VNrtS%2F2de5mYEh4DbxOQdqMutYZQvEi3yKkZRfj0Aohi1PdZXHmQ1iSqYhkg70F3a%2Br7JQkl1qmyR%2FOrJQanaq6eXjK8xFpBpxXLh0f%2BYwsaU7wxdaiySTSX9dSUC1gbLPpt9ycd%2FFTY3K49AFbRDovuzm3NyFWvi7wVAvgTUEBysytVqg6xZPMXBijnVxUbV6zRgTd6xD1M2QL3GEXFpkj%2FtuMNKZ7rwGOqUBJqMHzhALjwtMX4CMn5gChnocaSiZE%2Fwj3BVYePncQlJIqbi0fspCB12LTuutns3w9w4Z1PZ4ihyQHkTXCfzG9HFGklzjmFIWnr6dqzU4ExNvXdxrFWhWSQ3A3KEBq6wQD84fyhodUzqRCo1Sz%2Frz%2FVpQP5CZZppkcsnFbEwhl1hs3SnCnp3v%2BwqwDhsiui3LldA0RoJ8plorhtuOgP2dB0eZQ7zQ&X-Amz-Signature=3aaa4348c6adbf03c2d670843f403b3b6bd1abd00b2349e2c87ac6d6d4b826ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q73CTYT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJKNAT6%2FQNJofXDYYyLg67FzxglSktu4T9vl6g0248aAiEAikQXm8y5uJHxb9YNA7bEbUhoISL1yv%2BQhHdVtw1oeAEqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHxKegFZ8dB5IaBGircA1o5GttthTl7RVx9pG8RM%2BslORRlGRdPe5ZgmYe9rQeK3bO5dC1b%2FaR5%2FTIlwk72wfqGe8toGQNbAAr3dAFjTdZTf2BP0m87gUn2jP7n%2F3FzeIRQ%2FJEPZyuIRiJqwE5PQmytkMBbwXtqBjWsiwHasUlDVbsNy7JwUh9RZHl73ryJ5W0Cx%2FVwLqKzeLBROu8uoerAEzXP%2FQrPzBv9JP4g%2Br9RcbNv%2BvEjjxXCsegr5bauGKxljExmFjbMYQo88nqYYecdqYNxZGK1hSWdvWAuUkPxx6qBWO2CtZWThvM6eXuJ04dBvShtj%2BoYUfGPk98hTIhSIai3x1fF2TOxZjk%2BbQPUJPOlmuZPJKZzjn6sEKdFzZyoo0iSa6SeQFwaX3UHzqkXsI5PBkHkAT%2FjAfBCnt%2BsOHkLTJd4L0VNrtS%2F2de5mYEh4DbxOQdqMutYZQvEi3yKkZRfj0Aohi1PdZXHmQ1iSqYhkg70F3a%2Br7JQkl1qmyR%2FOrJQanaq6eXjK8xFpBpxXLh0f%2BYwsaU7wxdaiySTSX9dSUC1gbLPpt9ycd%2FFTY3K49AFbRDovuzm3NyFWvi7wVAvgTUEBysytVqg6xZPMXBijnVxUbV6zRgTd6xD1M2QL3GEXFpkj%2FtuMNKZ7rwGOqUBJqMHzhALjwtMX4CMn5gChnocaSiZE%2Fwj3BVYePncQlJIqbi0fspCB12LTuutns3w9w4Z1PZ4ihyQHkTXCfzG9HFGklzjmFIWnr6dqzU4ExNvXdxrFWhWSQ3A3KEBq6wQD84fyhodUzqRCo1Sz%2Frz%2FVpQP5CZZppkcsnFbEwhl1hs3SnCnp3v%2BwqwDhsiui3LldA0RoJ8plorhtuOgP2dB0eZQ7zQ&X-Amz-Signature=98a2738427129df9a8061a1c06477f8f5eea88b8673397f0ff8a2d8a5a95d9b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q73CTYT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJKNAT6%2FQNJofXDYYyLg67FzxglSktu4T9vl6g0248aAiEAikQXm8y5uJHxb9YNA7bEbUhoISL1yv%2BQhHdVtw1oeAEqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHxKegFZ8dB5IaBGircA1o5GttthTl7RVx9pG8RM%2BslORRlGRdPe5ZgmYe9rQeK3bO5dC1b%2FaR5%2FTIlwk72wfqGe8toGQNbAAr3dAFjTdZTf2BP0m87gUn2jP7n%2F3FzeIRQ%2FJEPZyuIRiJqwE5PQmytkMBbwXtqBjWsiwHasUlDVbsNy7JwUh9RZHl73ryJ5W0Cx%2FVwLqKzeLBROu8uoerAEzXP%2FQrPzBv9JP4g%2Br9RcbNv%2BvEjjxXCsegr5bauGKxljExmFjbMYQo88nqYYecdqYNxZGK1hSWdvWAuUkPxx6qBWO2CtZWThvM6eXuJ04dBvShtj%2BoYUfGPk98hTIhSIai3x1fF2TOxZjk%2BbQPUJPOlmuZPJKZzjn6sEKdFzZyoo0iSa6SeQFwaX3UHzqkXsI5PBkHkAT%2FjAfBCnt%2BsOHkLTJd4L0VNrtS%2F2de5mYEh4DbxOQdqMutYZQvEi3yKkZRfj0Aohi1PdZXHmQ1iSqYhkg70F3a%2Br7JQkl1qmyR%2FOrJQanaq6eXjK8xFpBpxXLh0f%2BYwsaU7wxdaiySTSX9dSUC1gbLPpt9ycd%2FFTY3K49AFbRDovuzm3NyFWvi7wVAvgTUEBysytVqg6xZPMXBijnVxUbV6zRgTd6xD1M2QL3GEXFpkj%2FtuMNKZ7rwGOqUBJqMHzhALjwtMX4CMn5gChnocaSiZE%2Fwj3BVYePncQlJIqbi0fspCB12LTuutns3w9w4Z1PZ4ihyQHkTXCfzG9HFGklzjmFIWnr6dqzU4ExNvXdxrFWhWSQ3A3KEBq6wQD84fyhodUzqRCo1Sz%2Frz%2FVpQP5CZZppkcsnFbEwhl1hs3SnCnp3v%2BwqwDhsiui3LldA0RoJ8plorhtuOgP2dB0eZQ7zQ&X-Amz-Signature=bc24d1ecb98b7fbe9d422f11f19ce19c12eb1a0a2fc5c2055c162591efb61ed1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q73CTYT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJKNAT6%2FQNJofXDYYyLg67FzxglSktu4T9vl6g0248aAiEAikQXm8y5uJHxb9YNA7bEbUhoISL1yv%2BQhHdVtw1oeAEqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHxKegFZ8dB5IaBGircA1o5GttthTl7RVx9pG8RM%2BslORRlGRdPe5ZgmYe9rQeK3bO5dC1b%2FaR5%2FTIlwk72wfqGe8toGQNbAAr3dAFjTdZTf2BP0m87gUn2jP7n%2F3FzeIRQ%2FJEPZyuIRiJqwE5PQmytkMBbwXtqBjWsiwHasUlDVbsNy7JwUh9RZHl73ryJ5W0Cx%2FVwLqKzeLBROu8uoerAEzXP%2FQrPzBv9JP4g%2Br9RcbNv%2BvEjjxXCsegr5bauGKxljExmFjbMYQo88nqYYecdqYNxZGK1hSWdvWAuUkPxx6qBWO2CtZWThvM6eXuJ04dBvShtj%2BoYUfGPk98hTIhSIai3x1fF2TOxZjk%2BbQPUJPOlmuZPJKZzjn6sEKdFzZyoo0iSa6SeQFwaX3UHzqkXsI5PBkHkAT%2FjAfBCnt%2BsOHkLTJd4L0VNrtS%2F2de5mYEh4DbxOQdqMutYZQvEi3yKkZRfj0Aohi1PdZXHmQ1iSqYhkg70F3a%2Br7JQkl1qmyR%2FOrJQanaq6eXjK8xFpBpxXLh0f%2BYwsaU7wxdaiySTSX9dSUC1gbLPpt9ycd%2FFTY3K49AFbRDovuzm3NyFWvi7wVAvgTUEBysytVqg6xZPMXBijnVxUbV6zRgTd6xD1M2QL3GEXFpkj%2FtuMNKZ7rwGOqUBJqMHzhALjwtMX4CMn5gChnocaSiZE%2Fwj3BVYePncQlJIqbi0fspCB12LTuutns3w9w4Z1PZ4ihyQHkTXCfzG9HFGklzjmFIWnr6dqzU4ExNvXdxrFWhWSQ3A3KEBq6wQD84fyhodUzqRCo1Sz%2Frz%2FVpQP5CZZppkcsnFbEwhl1hs3SnCnp3v%2BwqwDhsiui3LldA0RoJ8plorhtuOgP2dB0eZQ7zQ&X-Amz-Signature=7070f52fda5aa936ae69080590144c52213d05300fae88f828dce86d9dc5d37c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q73CTYT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJKNAT6%2FQNJofXDYYyLg67FzxglSktu4T9vl6g0248aAiEAikQXm8y5uJHxb9YNA7bEbUhoISL1yv%2BQhHdVtw1oeAEqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHxKegFZ8dB5IaBGircA1o5GttthTl7RVx9pG8RM%2BslORRlGRdPe5ZgmYe9rQeK3bO5dC1b%2FaR5%2FTIlwk72wfqGe8toGQNbAAr3dAFjTdZTf2BP0m87gUn2jP7n%2F3FzeIRQ%2FJEPZyuIRiJqwE5PQmytkMBbwXtqBjWsiwHasUlDVbsNy7JwUh9RZHl73ryJ5W0Cx%2FVwLqKzeLBROu8uoerAEzXP%2FQrPzBv9JP4g%2Br9RcbNv%2BvEjjxXCsegr5bauGKxljExmFjbMYQo88nqYYecdqYNxZGK1hSWdvWAuUkPxx6qBWO2CtZWThvM6eXuJ04dBvShtj%2BoYUfGPk98hTIhSIai3x1fF2TOxZjk%2BbQPUJPOlmuZPJKZzjn6sEKdFzZyoo0iSa6SeQFwaX3UHzqkXsI5PBkHkAT%2FjAfBCnt%2BsOHkLTJd4L0VNrtS%2F2de5mYEh4DbxOQdqMutYZQvEi3yKkZRfj0Aohi1PdZXHmQ1iSqYhkg70F3a%2Br7JQkl1qmyR%2FOrJQanaq6eXjK8xFpBpxXLh0f%2BYwsaU7wxdaiySTSX9dSUC1gbLPpt9ycd%2FFTY3K49AFbRDovuzm3NyFWvi7wVAvgTUEBysytVqg6xZPMXBijnVxUbV6zRgTd6xD1M2QL3GEXFpkj%2FtuMNKZ7rwGOqUBJqMHzhALjwtMX4CMn5gChnocaSiZE%2Fwj3BVYePncQlJIqbi0fspCB12LTuutns3w9w4Z1PZ4ihyQHkTXCfzG9HFGklzjmFIWnr6dqzU4ExNvXdxrFWhWSQ3A3KEBq6wQD84fyhodUzqRCo1Sz%2Frz%2FVpQP5CZZppkcsnFbEwhl1hs3SnCnp3v%2BwqwDhsiui3LldA0RoJ8plorhtuOgP2dB0eZQ7zQ&X-Amz-Signature=92bfd17de6127fec3f78fdac3def1e8e5a40673be5057ca06b89aec7c208e9de&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q73CTYT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJKNAT6%2FQNJofXDYYyLg67FzxglSktu4T9vl6g0248aAiEAikQXm8y5uJHxb9YNA7bEbUhoISL1yv%2BQhHdVtw1oeAEqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHxKegFZ8dB5IaBGircA1o5GttthTl7RVx9pG8RM%2BslORRlGRdPe5ZgmYe9rQeK3bO5dC1b%2FaR5%2FTIlwk72wfqGe8toGQNbAAr3dAFjTdZTf2BP0m87gUn2jP7n%2F3FzeIRQ%2FJEPZyuIRiJqwE5PQmytkMBbwXtqBjWsiwHasUlDVbsNy7JwUh9RZHl73ryJ5W0Cx%2FVwLqKzeLBROu8uoerAEzXP%2FQrPzBv9JP4g%2Br9RcbNv%2BvEjjxXCsegr5bauGKxljExmFjbMYQo88nqYYecdqYNxZGK1hSWdvWAuUkPxx6qBWO2CtZWThvM6eXuJ04dBvShtj%2BoYUfGPk98hTIhSIai3x1fF2TOxZjk%2BbQPUJPOlmuZPJKZzjn6sEKdFzZyoo0iSa6SeQFwaX3UHzqkXsI5PBkHkAT%2FjAfBCnt%2BsOHkLTJd4L0VNrtS%2F2de5mYEh4DbxOQdqMutYZQvEi3yKkZRfj0Aohi1PdZXHmQ1iSqYhkg70F3a%2Br7JQkl1qmyR%2FOrJQanaq6eXjK8xFpBpxXLh0f%2BYwsaU7wxdaiySTSX9dSUC1gbLPpt9ycd%2FFTY3K49AFbRDovuzm3NyFWvi7wVAvgTUEBysytVqg6xZPMXBijnVxUbV6zRgTd6xD1M2QL3GEXFpkj%2FtuMNKZ7rwGOqUBJqMHzhALjwtMX4CMn5gChnocaSiZE%2Fwj3BVYePncQlJIqbi0fspCB12LTuutns3w9w4Z1PZ4ihyQHkTXCfzG9HFGklzjmFIWnr6dqzU4ExNvXdxrFWhWSQ3A3KEBq6wQD84fyhodUzqRCo1Sz%2Frz%2FVpQP5CZZppkcsnFbEwhl1hs3SnCnp3v%2BwqwDhsiui3LldA0RoJ8plorhtuOgP2dB0eZQ7zQ&X-Amz-Signature=9942cd366cb274976c84c816621d7a637e755bae3aefd3e58861799fd2a9b456&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q73CTYT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJKNAT6%2FQNJofXDYYyLg67FzxglSktu4T9vl6g0248aAiEAikQXm8y5uJHxb9YNA7bEbUhoISL1yv%2BQhHdVtw1oeAEqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHxKegFZ8dB5IaBGircA1o5GttthTl7RVx9pG8RM%2BslORRlGRdPe5ZgmYe9rQeK3bO5dC1b%2FaR5%2FTIlwk72wfqGe8toGQNbAAr3dAFjTdZTf2BP0m87gUn2jP7n%2F3FzeIRQ%2FJEPZyuIRiJqwE5PQmytkMBbwXtqBjWsiwHasUlDVbsNy7JwUh9RZHl73ryJ5W0Cx%2FVwLqKzeLBROu8uoerAEzXP%2FQrPzBv9JP4g%2Br9RcbNv%2BvEjjxXCsegr5bauGKxljExmFjbMYQo88nqYYecdqYNxZGK1hSWdvWAuUkPxx6qBWO2CtZWThvM6eXuJ04dBvShtj%2BoYUfGPk98hTIhSIai3x1fF2TOxZjk%2BbQPUJPOlmuZPJKZzjn6sEKdFzZyoo0iSa6SeQFwaX3UHzqkXsI5PBkHkAT%2FjAfBCnt%2BsOHkLTJd4L0VNrtS%2F2de5mYEh4DbxOQdqMutYZQvEi3yKkZRfj0Aohi1PdZXHmQ1iSqYhkg70F3a%2Br7JQkl1qmyR%2FOrJQanaq6eXjK8xFpBpxXLh0f%2BYwsaU7wxdaiySTSX9dSUC1gbLPpt9ycd%2FFTY3K49AFbRDovuzm3NyFWvi7wVAvgTUEBysytVqg6xZPMXBijnVxUbV6zRgTd6xD1M2QL3GEXFpkj%2FtuMNKZ7rwGOqUBJqMHzhALjwtMX4CMn5gChnocaSiZE%2Fwj3BVYePncQlJIqbi0fspCB12LTuutns3w9w4Z1PZ4ihyQHkTXCfzG9HFGklzjmFIWnr6dqzU4ExNvXdxrFWhWSQ3A3KEBq6wQD84fyhodUzqRCo1Sz%2Frz%2FVpQP5CZZppkcsnFbEwhl1hs3SnCnp3v%2BwqwDhsiui3LldA0RoJ8plorhtuOgP2dB0eZQ7zQ&X-Amz-Signature=8348f9290019f4451787275c1b934a4cbaaf4713bf22f8376cede2f467570a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
