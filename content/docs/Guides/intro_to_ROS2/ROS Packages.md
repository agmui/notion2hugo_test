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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFLKA24%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJYARdfXmrQgmca2nPJPMLlCb8K42jiX8X7Cw5VikgbQIgVmcFOdQNUo2dBPrHcmKZ45f4yR9GotwiXCFv%2FTbzHG4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO6IPWLT894%2FMNW4LircA3EXqCArCP6A9hKFWbaZluwPkdgCBPtDNsggVa8ZmvAFAVKEPeRbKwG884A8H%2BIPqFLje9H84AbzoSgv%2FfL321%2Bv5XoWp6ODAu63Si8LSNnQSQbb9XAk1%2Fvpu6JVFG3ZiTRpS2VYiM1CmEGRj88rwBYGLurr4bGK1yKwwXCsK0bwr2ND6Dkc7TFLLsaNQiOPaHs%2FsNo%2Fyiq6tjcoIaZpTTq3DEW2Hfl6SldUZUhGoxnqhxMWkQMOA5x%2BV3F92dDYq2q5bd7IuA8N4dNgGBOuPhPqL6OvGFKGIXOWiBBePfjnS%2BNbd%2FNYS0yY6x6XRlhsDGrRssZxw2jQEAik%2FRxuV4Pi0Jzzaga%2BfIz7bBx2q%2FBFszGExDepJhO6zkNNDSzC5zVSprc1A155kl5yQ71xfSr1fbPSrI2ylDokjgM3wNyO2x1SQkRXcM7fHQlMM27zBI89JKqsM6LlV5LkrJn6bkEKf6CqaqiUHJMwFeYDs%2FVQWn6MSpNNrtApD8S%2FI4XLy%2Fucwq5xtLuHT8R9ZZNt4p7oVxHrUlHLXeIasaup8lN34Nc9yXiDL3xWUVWd4uqwWzg8L1ufP6SjD4kYdf3HfZ%2FY9%2B0yrurIDaNZgyPOLt79gun%2BzofL4M8szaKEMJPxucAGOqUBEDaRex5wWK1zMHzy5gxvRUJu5LVjt3mFIHjD7h5QSblsNrod1uLf%2Bt054lgkZ4%2B8rKafyLckAxEXkvYJja3nRMMHUcYgkxXDYPfHm3rFGZpt%2FlYKW1W6O8%2FoxU0s0rd0tPPpvLi%2BGChK9Rqy625x2jCZ52p23%2FrtnJiRYpeRFbm3tfAvkpBpSDsT23bPjfFEAlAren9JLgtDHfw3Bz5DjYJjQITY&X-Amz-Signature=036ac98579fbe41fec6f77ab63b26a7ce07fab6d9d56375b98e86887e3496f86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFLKA24%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJYARdfXmrQgmca2nPJPMLlCb8K42jiX8X7Cw5VikgbQIgVmcFOdQNUo2dBPrHcmKZ45f4yR9GotwiXCFv%2FTbzHG4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO6IPWLT894%2FMNW4LircA3EXqCArCP6A9hKFWbaZluwPkdgCBPtDNsggVa8ZmvAFAVKEPeRbKwG884A8H%2BIPqFLje9H84AbzoSgv%2FfL321%2Bv5XoWp6ODAu63Si8LSNnQSQbb9XAk1%2Fvpu6JVFG3ZiTRpS2VYiM1CmEGRj88rwBYGLurr4bGK1yKwwXCsK0bwr2ND6Dkc7TFLLsaNQiOPaHs%2FsNo%2Fyiq6tjcoIaZpTTq3DEW2Hfl6SldUZUhGoxnqhxMWkQMOA5x%2BV3F92dDYq2q5bd7IuA8N4dNgGBOuPhPqL6OvGFKGIXOWiBBePfjnS%2BNbd%2FNYS0yY6x6XRlhsDGrRssZxw2jQEAik%2FRxuV4Pi0Jzzaga%2BfIz7bBx2q%2FBFszGExDepJhO6zkNNDSzC5zVSprc1A155kl5yQ71xfSr1fbPSrI2ylDokjgM3wNyO2x1SQkRXcM7fHQlMM27zBI89JKqsM6LlV5LkrJn6bkEKf6CqaqiUHJMwFeYDs%2FVQWn6MSpNNrtApD8S%2FI4XLy%2Fucwq5xtLuHT8R9ZZNt4p7oVxHrUlHLXeIasaup8lN34Nc9yXiDL3xWUVWd4uqwWzg8L1ufP6SjD4kYdf3HfZ%2FY9%2B0yrurIDaNZgyPOLt79gun%2BzofL4M8szaKEMJPxucAGOqUBEDaRex5wWK1zMHzy5gxvRUJu5LVjt3mFIHjD7h5QSblsNrod1uLf%2Bt054lgkZ4%2B8rKafyLckAxEXkvYJja3nRMMHUcYgkxXDYPfHm3rFGZpt%2FlYKW1W6O8%2FoxU0s0rd0tPPpvLi%2BGChK9Rqy625x2jCZ52p23%2FrtnJiRYpeRFbm3tfAvkpBpSDsT23bPjfFEAlAren9JLgtDHfw3Bz5DjYJjQITY&X-Amz-Signature=eeed0954686e88b5adc422b9177735df19a56e0629e4290b323a143eb420810c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFLKA24%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJYARdfXmrQgmca2nPJPMLlCb8K42jiX8X7Cw5VikgbQIgVmcFOdQNUo2dBPrHcmKZ45f4yR9GotwiXCFv%2FTbzHG4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO6IPWLT894%2FMNW4LircA3EXqCArCP6A9hKFWbaZluwPkdgCBPtDNsggVa8ZmvAFAVKEPeRbKwG884A8H%2BIPqFLje9H84AbzoSgv%2FfL321%2Bv5XoWp6ODAu63Si8LSNnQSQbb9XAk1%2Fvpu6JVFG3ZiTRpS2VYiM1CmEGRj88rwBYGLurr4bGK1yKwwXCsK0bwr2ND6Dkc7TFLLsaNQiOPaHs%2FsNo%2Fyiq6tjcoIaZpTTq3DEW2Hfl6SldUZUhGoxnqhxMWkQMOA5x%2BV3F92dDYq2q5bd7IuA8N4dNgGBOuPhPqL6OvGFKGIXOWiBBePfjnS%2BNbd%2FNYS0yY6x6XRlhsDGrRssZxw2jQEAik%2FRxuV4Pi0Jzzaga%2BfIz7bBx2q%2FBFszGExDepJhO6zkNNDSzC5zVSprc1A155kl5yQ71xfSr1fbPSrI2ylDokjgM3wNyO2x1SQkRXcM7fHQlMM27zBI89JKqsM6LlV5LkrJn6bkEKf6CqaqiUHJMwFeYDs%2FVQWn6MSpNNrtApD8S%2FI4XLy%2Fucwq5xtLuHT8R9ZZNt4p7oVxHrUlHLXeIasaup8lN34Nc9yXiDL3xWUVWd4uqwWzg8L1ufP6SjD4kYdf3HfZ%2FY9%2B0yrurIDaNZgyPOLt79gun%2BzofL4M8szaKEMJPxucAGOqUBEDaRex5wWK1zMHzy5gxvRUJu5LVjt3mFIHjD7h5QSblsNrod1uLf%2Bt054lgkZ4%2B8rKafyLckAxEXkvYJja3nRMMHUcYgkxXDYPfHm3rFGZpt%2FlYKW1W6O8%2FoxU0s0rd0tPPpvLi%2BGChK9Rqy625x2jCZ52p23%2FrtnJiRYpeRFbm3tfAvkpBpSDsT23bPjfFEAlAren9JLgtDHfw3Bz5DjYJjQITY&X-Amz-Signature=2160edca7f4803a1a95a9639ab8cc05b3ced3ad2b9e25393dc2cb35297ac9799&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFLKA24%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJYARdfXmrQgmca2nPJPMLlCb8K42jiX8X7Cw5VikgbQIgVmcFOdQNUo2dBPrHcmKZ45f4yR9GotwiXCFv%2FTbzHG4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO6IPWLT894%2FMNW4LircA3EXqCArCP6A9hKFWbaZluwPkdgCBPtDNsggVa8ZmvAFAVKEPeRbKwG884A8H%2BIPqFLje9H84AbzoSgv%2FfL321%2Bv5XoWp6ODAu63Si8LSNnQSQbb9XAk1%2Fvpu6JVFG3ZiTRpS2VYiM1CmEGRj88rwBYGLurr4bGK1yKwwXCsK0bwr2ND6Dkc7TFLLsaNQiOPaHs%2FsNo%2Fyiq6tjcoIaZpTTq3DEW2Hfl6SldUZUhGoxnqhxMWkQMOA5x%2BV3F92dDYq2q5bd7IuA8N4dNgGBOuPhPqL6OvGFKGIXOWiBBePfjnS%2BNbd%2FNYS0yY6x6XRlhsDGrRssZxw2jQEAik%2FRxuV4Pi0Jzzaga%2BfIz7bBx2q%2FBFszGExDepJhO6zkNNDSzC5zVSprc1A155kl5yQ71xfSr1fbPSrI2ylDokjgM3wNyO2x1SQkRXcM7fHQlMM27zBI89JKqsM6LlV5LkrJn6bkEKf6CqaqiUHJMwFeYDs%2FVQWn6MSpNNrtApD8S%2FI4XLy%2Fucwq5xtLuHT8R9ZZNt4p7oVxHrUlHLXeIasaup8lN34Nc9yXiDL3xWUVWd4uqwWzg8L1ufP6SjD4kYdf3HfZ%2FY9%2B0yrurIDaNZgyPOLt79gun%2BzofL4M8szaKEMJPxucAGOqUBEDaRex5wWK1zMHzy5gxvRUJu5LVjt3mFIHjD7h5QSblsNrod1uLf%2Bt054lgkZ4%2B8rKafyLckAxEXkvYJja3nRMMHUcYgkxXDYPfHm3rFGZpt%2FlYKW1W6O8%2FoxU0s0rd0tPPpvLi%2BGChK9Rqy625x2jCZ52p23%2FrtnJiRYpeRFbm3tfAvkpBpSDsT23bPjfFEAlAren9JLgtDHfw3Bz5DjYJjQITY&X-Amz-Signature=3c04cf0a2d5c3f765f3a85addcd656c207d2ad26e7ade0f437998bbaa4ecbc34&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFLKA24%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJYARdfXmrQgmca2nPJPMLlCb8K42jiX8X7Cw5VikgbQIgVmcFOdQNUo2dBPrHcmKZ45f4yR9GotwiXCFv%2FTbzHG4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO6IPWLT894%2FMNW4LircA3EXqCArCP6A9hKFWbaZluwPkdgCBPtDNsggVa8ZmvAFAVKEPeRbKwG884A8H%2BIPqFLje9H84AbzoSgv%2FfL321%2Bv5XoWp6ODAu63Si8LSNnQSQbb9XAk1%2Fvpu6JVFG3ZiTRpS2VYiM1CmEGRj88rwBYGLurr4bGK1yKwwXCsK0bwr2ND6Dkc7TFLLsaNQiOPaHs%2FsNo%2Fyiq6tjcoIaZpTTq3DEW2Hfl6SldUZUhGoxnqhxMWkQMOA5x%2BV3F92dDYq2q5bd7IuA8N4dNgGBOuPhPqL6OvGFKGIXOWiBBePfjnS%2BNbd%2FNYS0yY6x6XRlhsDGrRssZxw2jQEAik%2FRxuV4Pi0Jzzaga%2BfIz7bBx2q%2FBFszGExDepJhO6zkNNDSzC5zVSprc1A155kl5yQ71xfSr1fbPSrI2ylDokjgM3wNyO2x1SQkRXcM7fHQlMM27zBI89JKqsM6LlV5LkrJn6bkEKf6CqaqiUHJMwFeYDs%2FVQWn6MSpNNrtApD8S%2FI4XLy%2Fucwq5xtLuHT8R9ZZNt4p7oVxHrUlHLXeIasaup8lN34Nc9yXiDL3xWUVWd4uqwWzg8L1ufP6SjD4kYdf3HfZ%2FY9%2B0yrurIDaNZgyPOLt79gun%2BzofL4M8szaKEMJPxucAGOqUBEDaRex5wWK1zMHzy5gxvRUJu5LVjt3mFIHjD7h5QSblsNrod1uLf%2Bt054lgkZ4%2B8rKafyLckAxEXkvYJja3nRMMHUcYgkxXDYPfHm3rFGZpt%2FlYKW1W6O8%2FoxU0s0rd0tPPpvLi%2BGChK9Rqy625x2jCZ52p23%2FrtnJiRYpeRFbm3tfAvkpBpSDsT23bPjfFEAlAren9JLgtDHfw3Bz5DjYJjQITY&X-Amz-Signature=2dbf9e90b61af30eeff5e9d8d5a7ec0d067396b39227a2d4d3ec33ca5d006f07&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFLKA24%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJYARdfXmrQgmca2nPJPMLlCb8K42jiX8X7Cw5VikgbQIgVmcFOdQNUo2dBPrHcmKZ45f4yR9GotwiXCFv%2FTbzHG4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO6IPWLT894%2FMNW4LircA3EXqCArCP6A9hKFWbaZluwPkdgCBPtDNsggVa8ZmvAFAVKEPeRbKwG884A8H%2BIPqFLje9H84AbzoSgv%2FfL321%2Bv5XoWp6ODAu63Si8LSNnQSQbb9XAk1%2Fvpu6JVFG3ZiTRpS2VYiM1CmEGRj88rwBYGLurr4bGK1yKwwXCsK0bwr2ND6Dkc7TFLLsaNQiOPaHs%2FsNo%2Fyiq6tjcoIaZpTTq3DEW2Hfl6SldUZUhGoxnqhxMWkQMOA5x%2BV3F92dDYq2q5bd7IuA8N4dNgGBOuPhPqL6OvGFKGIXOWiBBePfjnS%2BNbd%2FNYS0yY6x6XRlhsDGrRssZxw2jQEAik%2FRxuV4Pi0Jzzaga%2BfIz7bBx2q%2FBFszGExDepJhO6zkNNDSzC5zVSprc1A155kl5yQ71xfSr1fbPSrI2ylDokjgM3wNyO2x1SQkRXcM7fHQlMM27zBI89JKqsM6LlV5LkrJn6bkEKf6CqaqiUHJMwFeYDs%2FVQWn6MSpNNrtApD8S%2FI4XLy%2Fucwq5xtLuHT8R9ZZNt4p7oVxHrUlHLXeIasaup8lN34Nc9yXiDL3xWUVWd4uqwWzg8L1ufP6SjD4kYdf3HfZ%2FY9%2B0yrurIDaNZgyPOLt79gun%2BzofL4M8szaKEMJPxucAGOqUBEDaRex5wWK1zMHzy5gxvRUJu5LVjt3mFIHjD7h5QSblsNrod1uLf%2Bt054lgkZ4%2B8rKafyLckAxEXkvYJja3nRMMHUcYgkxXDYPfHm3rFGZpt%2FlYKW1W6O8%2FoxU0s0rd0tPPpvLi%2BGChK9Rqy625x2jCZ52p23%2FrtnJiRYpeRFbm3tfAvkpBpSDsT23bPjfFEAlAren9JLgtDHfw3Bz5DjYJjQITY&X-Amz-Signature=79cbb4d5e53a5d6a46b6597a24f6367f355d1f734b69645e6c83a9dabb9ca047&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFLKA24%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJYARdfXmrQgmca2nPJPMLlCb8K42jiX8X7Cw5VikgbQIgVmcFOdQNUo2dBPrHcmKZ45f4yR9GotwiXCFv%2FTbzHG4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO6IPWLT894%2FMNW4LircA3EXqCArCP6A9hKFWbaZluwPkdgCBPtDNsggVa8ZmvAFAVKEPeRbKwG884A8H%2BIPqFLje9H84AbzoSgv%2FfL321%2Bv5XoWp6ODAu63Si8LSNnQSQbb9XAk1%2Fvpu6JVFG3ZiTRpS2VYiM1CmEGRj88rwBYGLurr4bGK1yKwwXCsK0bwr2ND6Dkc7TFLLsaNQiOPaHs%2FsNo%2Fyiq6tjcoIaZpTTq3DEW2Hfl6SldUZUhGoxnqhxMWkQMOA5x%2BV3F92dDYq2q5bd7IuA8N4dNgGBOuPhPqL6OvGFKGIXOWiBBePfjnS%2BNbd%2FNYS0yY6x6XRlhsDGrRssZxw2jQEAik%2FRxuV4Pi0Jzzaga%2BfIz7bBx2q%2FBFszGExDepJhO6zkNNDSzC5zVSprc1A155kl5yQ71xfSr1fbPSrI2ylDokjgM3wNyO2x1SQkRXcM7fHQlMM27zBI89JKqsM6LlV5LkrJn6bkEKf6CqaqiUHJMwFeYDs%2FVQWn6MSpNNrtApD8S%2FI4XLy%2Fucwq5xtLuHT8R9ZZNt4p7oVxHrUlHLXeIasaup8lN34Nc9yXiDL3xWUVWd4uqwWzg8L1ufP6SjD4kYdf3HfZ%2FY9%2B0yrurIDaNZgyPOLt79gun%2BzofL4M8szaKEMJPxucAGOqUBEDaRex5wWK1zMHzy5gxvRUJu5LVjt3mFIHjD7h5QSblsNrod1uLf%2Bt054lgkZ4%2B8rKafyLckAxEXkvYJja3nRMMHUcYgkxXDYPfHm3rFGZpt%2FlYKW1W6O8%2FoxU0s0rd0tPPpvLi%2BGChK9Rqy625x2jCZ52p23%2FrtnJiRYpeRFbm3tfAvkpBpSDsT23bPjfFEAlAren9JLgtDHfw3Bz5DjYJjQITY&X-Amz-Signature=15beb11b17407bef48dc1eb68a92d432b125104e79b698e0f2d1e86c35ac35b8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
