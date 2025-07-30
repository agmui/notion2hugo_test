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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LNZWO54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2F5WFqOqALOObGfJTMBBwhKrOS3XdTpnxvxIjmnHf3gIgRgdwg%2F3LrIdYXdszSYzwlWKYob7YpaptZNaD8xWJUAMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk3%2FCU3h0cV0yQgPSrcA9M78uOeijFpLnCTfWFhBwl%2BCzRH6HMayl0d21GxaZxors98CKUQ11dNd2JY7barmiZ37ULfiRKYtF9%2Fc5Ne1ws%2FKpf1Ma%2Fa5uGn2K%2ByGTNnad0hBAGLgIYwAitaBsETPQHf1N%2BVVcCrunk%2BGens8bCq5N7ITpP8ZyAGxSM%2FnHwcGuCOrygiG1Bym6XwiR6F8EySHDEwXyNTCbFMDrBO5n7%2FK4cgPlbSGGoupGK%2FCXFiARSoGtAREseQsHOyDrzNYT0lMmNWoQlqECSaah3%2FtOBWrmHTTWBQ0myqoJ5EqWbj9HZv6gk0dYogJWffSILndoFsZ4kO5BQZ0gvwCJ%2B03ziG%2FrHzliHlwCVla3oUWaeYq7AgYsBoxQC%2BK7WKkZPqs3tnsVAqpTmxIKCWBevp7Ir4FPuLFc1EeySFMHrnvrjUdvw%2Bh5PiXLjvAKpYMcMf6fqpa4%2BtkM3YeZbtja2Wh8luQQBA%2BYWW6iTUtwi8lfUYIGPsdUf1djUWb9lYk%2Bmlf%2BbJvGGXA9i6mhaH5uOCHzQO%2B1j1pcTdPnM3cx5hQ0Pq6ACou4Ex7T1shcZ4FQAjquNaqLh7qL0ImxZUqPIqYTzDMLc06NqK5SrdynngafH%2F8nSvLaF%2FxFLYr8DcMN2IqcQGOqUBqqvvnQpnxeA%2BcMToEuQVOB5FhILkF2KeXghJlfWw1PwgIB5T%2BDV2hGeFN6vzhelfeh2Z7QTQEunIoQbaqLkXInBlfXl%2B5Ubxr71Ebl8L0T0yqUzmjIptj%2Fpl7hAZJovZ0e1o4EB2ma%2F9byGYH2N9C%2F5L4L0tgYWN9x6x3leVyJ5p%2BfZ5ZOd6xp5tF0oiKg8Z%2Fvj26%2FmPLGpJrJjcJ61hM38iVqv8&X-Amz-Signature=a9ecd7ae6d471ecd6715b6671c53b17dd912020a3129efd20308567a3f394647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LNZWO54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2F5WFqOqALOObGfJTMBBwhKrOS3XdTpnxvxIjmnHf3gIgRgdwg%2F3LrIdYXdszSYzwlWKYob7YpaptZNaD8xWJUAMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk3%2FCU3h0cV0yQgPSrcA9M78uOeijFpLnCTfWFhBwl%2BCzRH6HMayl0d21GxaZxors98CKUQ11dNd2JY7barmiZ37ULfiRKYtF9%2Fc5Ne1ws%2FKpf1Ma%2Fa5uGn2K%2ByGTNnad0hBAGLgIYwAitaBsETPQHf1N%2BVVcCrunk%2BGens8bCq5N7ITpP8ZyAGxSM%2FnHwcGuCOrygiG1Bym6XwiR6F8EySHDEwXyNTCbFMDrBO5n7%2FK4cgPlbSGGoupGK%2FCXFiARSoGtAREseQsHOyDrzNYT0lMmNWoQlqECSaah3%2FtOBWrmHTTWBQ0myqoJ5EqWbj9HZv6gk0dYogJWffSILndoFsZ4kO5BQZ0gvwCJ%2B03ziG%2FrHzliHlwCVla3oUWaeYq7AgYsBoxQC%2BK7WKkZPqs3tnsVAqpTmxIKCWBevp7Ir4FPuLFc1EeySFMHrnvrjUdvw%2Bh5PiXLjvAKpYMcMf6fqpa4%2BtkM3YeZbtja2Wh8luQQBA%2BYWW6iTUtwi8lfUYIGPsdUf1djUWb9lYk%2Bmlf%2BbJvGGXA9i6mhaH5uOCHzQO%2B1j1pcTdPnM3cx5hQ0Pq6ACou4Ex7T1shcZ4FQAjquNaqLh7qL0ImxZUqPIqYTzDMLc06NqK5SrdynngafH%2F8nSvLaF%2FxFLYr8DcMN2IqcQGOqUBqqvvnQpnxeA%2BcMToEuQVOB5FhILkF2KeXghJlfWw1PwgIB5T%2BDV2hGeFN6vzhelfeh2Z7QTQEunIoQbaqLkXInBlfXl%2B5Ubxr71Ebl8L0T0yqUzmjIptj%2Fpl7hAZJovZ0e1o4EB2ma%2F9byGYH2N9C%2F5L4L0tgYWN9x6x3leVyJ5p%2BfZ5ZOd6xp5tF0oiKg8Z%2Fvj26%2FmPLGpJrJjcJ61hM38iVqv8&X-Amz-Signature=b40677734432945519934caa598c0aead3398a35a814732be2ac3b324a551361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LNZWO54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2F5WFqOqALOObGfJTMBBwhKrOS3XdTpnxvxIjmnHf3gIgRgdwg%2F3LrIdYXdszSYzwlWKYob7YpaptZNaD8xWJUAMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk3%2FCU3h0cV0yQgPSrcA9M78uOeijFpLnCTfWFhBwl%2BCzRH6HMayl0d21GxaZxors98CKUQ11dNd2JY7barmiZ37ULfiRKYtF9%2Fc5Ne1ws%2FKpf1Ma%2Fa5uGn2K%2ByGTNnad0hBAGLgIYwAitaBsETPQHf1N%2BVVcCrunk%2BGens8bCq5N7ITpP8ZyAGxSM%2FnHwcGuCOrygiG1Bym6XwiR6F8EySHDEwXyNTCbFMDrBO5n7%2FK4cgPlbSGGoupGK%2FCXFiARSoGtAREseQsHOyDrzNYT0lMmNWoQlqECSaah3%2FtOBWrmHTTWBQ0myqoJ5EqWbj9HZv6gk0dYogJWffSILndoFsZ4kO5BQZ0gvwCJ%2B03ziG%2FrHzliHlwCVla3oUWaeYq7AgYsBoxQC%2BK7WKkZPqs3tnsVAqpTmxIKCWBevp7Ir4FPuLFc1EeySFMHrnvrjUdvw%2Bh5PiXLjvAKpYMcMf6fqpa4%2BtkM3YeZbtja2Wh8luQQBA%2BYWW6iTUtwi8lfUYIGPsdUf1djUWb9lYk%2Bmlf%2BbJvGGXA9i6mhaH5uOCHzQO%2B1j1pcTdPnM3cx5hQ0Pq6ACou4Ex7T1shcZ4FQAjquNaqLh7qL0ImxZUqPIqYTzDMLc06NqK5SrdynngafH%2F8nSvLaF%2FxFLYr8DcMN2IqcQGOqUBqqvvnQpnxeA%2BcMToEuQVOB5FhILkF2KeXghJlfWw1PwgIB5T%2BDV2hGeFN6vzhelfeh2Z7QTQEunIoQbaqLkXInBlfXl%2B5Ubxr71Ebl8L0T0yqUzmjIptj%2Fpl7hAZJovZ0e1o4EB2ma%2F9byGYH2N9C%2F5L4L0tgYWN9x6x3leVyJ5p%2BfZ5ZOd6xp5tF0oiKg8Z%2Fvj26%2FmPLGpJrJjcJ61hM38iVqv8&X-Amz-Signature=a099cc13a8506d6278ee3ffa1fe5d89eb0ab69c9398042f48466e4373fe289c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LNZWO54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2F5WFqOqALOObGfJTMBBwhKrOS3XdTpnxvxIjmnHf3gIgRgdwg%2F3LrIdYXdszSYzwlWKYob7YpaptZNaD8xWJUAMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk3%2FCU3h0cV0yQgPSrcA9M78uOeijFpLnCTfWFhBwl%2BCzRH6HMayl0d21GxaZxors98CKUQ11dNd2JY7barmiZ37ULfiRKYtF9%2Fc5Ne1ws%2FKpf1Ma%2Fa5uGn2K%2ByGTNnad0hBAGLgIYwAitaBsETPQHf1N%2BVVcCrunk%2BGens8bCq5N7ITpP8ZyAGxSM%2FnHwcGuCOrygiG1Bym6XwiR6F8EySHDEwXyNTCbFMDrBO5n7%2FK4cgPlbSGGoupGK%2FCXFiARSoGtAREseQsHOyDrzNYT0lMmNWoQlqECSaah3%2FtOBWrmHTTWBQ0myqoJ5EqWbj9HZv6gk0dYogJWffSILndoFsZ4kO5BQZ0gvwCJ%2B03ziG%2FrHzliHlwCVla3oUWaeYq7AgYsBoxQC%2BK7WKkZPqs3tnsVAqpTmxIKCWBevp7Ir4FPuLFc1EeySFMHrnvrjUdvw%2Bh5PiXLjvAKpYMcMf6fqpa4%2BtkM3YeZbtja2Wh8luQQBA%2BYWW6iTUtwi8lfUYIGPsdUf1djUWb9lYk%2Bmlf%2BbJvGGXA9i6mhaH5uOCHzQO%2B1j1pcTdPnM3cx5hQ0Pq6ACou4Ex7T1shcZ4FQAjquNaqLh7qL0ImxZUqPIqYTzDMLc06NqK5SrdynngafH%2F8nSvLaF%2FxFLYr8DcMN2IqcQGOqUBqqvvnQpnxeA%2BcMToEuQVOB5FhILkF2KeXghJlfWw1PwgIB5T%2BDV2hGeFN6vzhelfeh2Z7QTQEunIoQbaqLkXInBlfXl%2B5Ubxr71Ebl8L0T0yqUzmjIptj%2Fpl7hAZJovZ0e1o4EB2ma%2F9byGYH2N9C%2F5L4L0tgYWN9x6x3leVyJ5p%2BfZ5ZOd6xp5tF0oiKg8Z%2Fvj26%2FmPLGpJrJjcJ61hM38iVqv8&X-Amz-Signature=7d6a260800c90ef39cbbd913c3078bf6384abdd6cc7db5e2e458350786310feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LNZWO54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2F5WFqOqALOObGfJTMBBwhKrOS3XdTpnxvxIjmnHf3gIgRgdwg%2F3LrIdYXdszSYzwlWKYob7YpaptZNaD8xWJUAMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk3%2FCU3h0cV0yQgPSrcA9M78uOeijFpLnCTfWFhBwl%2BCzRH6HMayl0d21GxaZxors98CKUQ11dNd2JY7barmiZ37ULfiRKYtF9%2Fc5Ne1ws%2FKpf1Ma%2Fa5uGn2K%2ByGTNnad0hBAGLgIYwAitaBsETPQHf1N%2BVVcCrunk%2BGens8bCq5N7ITpP8ZyAGxSM%2FnHwcGuCOrygiG1Bym6XwiR6F8EySHDEwXyNTCbFMDrBO5n7%2FK4cgPlbSGGoupGK%2FCXFiARSoGtAREseQsHOyDrzNYT0lMmNWoQlqECSaah3%2FtOBWrmHTTWBQ0myqoJ5EqWbj9HZv6gk0dYogJWffSILndoFsZ4kO5BQZ0gvwCJ%2B03ziG%2FrHzliHlwCVla3oUWaeYq7AgYsBoxQC%2BK7WKkZPqs3tnsVAqpTmxIKCWBevp7Ir4FPuLFc1EeySFMHrnvrjUdvw%2Bh5PiXLjvAKpYMcMf6fqpa4%2BtkM3YeZbtja2Wh8luQQBA%2BYWW6iTUtwi8lfUYIGPsdUf1djUWb9lYk%2Bmlf%2BbJvGGXA9i6mhaH5uOCHzQO%2B1j1pcTdPnM3cx5hQ0Pq6ACou4Ex7T1shcZ4FQAjquNaqLh7qL0ImxZUqPIqYTzDMLc06NqK5SrdynngafH%2F8nSvLaF%2FxFLYr8DcMN2IqcQGOqUBqqvvnQpnxeA%2BcMToEuQVOB5FhILkF2KeXghJlfWw1PwgIB5T%2BDV2hGeFN6vzhelfeh2Z7QTQEunIoQbaqLkXInBlfXl%2B5Ubxr71Ebl8L0T0yqUzmjIptj%2Fpl7hAZJovZ0e1o4EB2ma%2F9byGYH2N9C%2F5L4L0tgYWN9x6x3leVyJ5p%2BfZ5ZOd6xp5tF0oiKg8Z%2Fvj26%2FmPLGpJrJjcJ61hM38iVqv8&X-Amz-Signature=762cde74e605cda4a49bc1fee878ff818f891554bf7ecd73125f4afa401713e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LNZWO54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2F5WFqOqALOObGfJTMBBwhKrOS3XdTpnxvxIjmnHf3gIgRgdwg%2F3LrIdYXdszSYzwlWKYob7YpaptZNaD8xWJUAMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk3%2FCU3h0cV0yQgPSrcA9M78uOeijFpLnCTfWFhBwl%2BCzRH6HMayl0d21GxaZxors98CKUQ11dNd2JY7barmiZ37ULfiRKYtF9%2Fc5Ne1ws%2FKpf1Ma%2Fa5uGn2K%2ByGTNnad0hBAGLgIYwAitaBsETPQHf1N%2BVVcCrunk%2BGens8bCq5N7ITpP8ZyAGxSM%2FnHwcGuCOrygiG1Bym6XwiR6F8EySHDEwXyNTCbFMDrBO5n7%2FK4cgPlbSGGoupGK%2FCXFiARSoGtAREseQsHOyDrzNYT0lMmNWoQlqECSaah3%2FtOBWrmHTTWBQ0myqoJ5EqWbj9HZv6gk0dYogJWffSILndoFsZ4kO5BQZ0gvwCJ%2B03ziG%2FrHzliHlwCVla3oUWaeYq7AgYsBoxQC%2BK7WKkZPqs3tnsVAqpTmxIKCWBevp7Ir4FPuLFc1EeySFMHrnvrjUdvw%2Bh5PiXLjvAKpYMcMf6fqpa4%2BtkM3YeZbtja2Wh8luQQBA%2BYWW6iTUtwi8lfUYIGPsdUf1djUWb9lYk%2Bmlf%2BbJvGGXA9i6mhaH5uOCHzQO%2B1j1pcTdPnM3cx5hQ0Pq6ACou4Ex7T1shcZ4FQAjquNaqLh7qL0ImxZUqPIqYTzDMLc06NqK5SrdynngafH%2F8nSvLaF%2FxFLYr8DcMN2IqcQGOqUBqqvvnQpnxeA%2BcMToEuQVOB5FhILkF2KeXghJlfWw1PwgIB5T%2BDV2hGeFN6vzhelfeh2Z7QTQEunIoQbaqLkXInBlfXl%2B5Ubxr71Ebl8L0T0yqUzmjIptj%2Fpl7hAZJovZ0e1o4EB2ma%2F9byGYH2N9C%2F5L4L0tgYWN9x6x3leVyJ5p%2BfZ5ZOd6xp5tF0oiKg8Z%2Fvj26%2FmPLGpJrJjcJ61hM38iVqv8&X-Amz-Signature=fd01533599a6c3cd51d6888bc8131e44569b98f166ecb04441aff1ef2506bf2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LNZWO54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2F5WFqOqALOObGfJTMBBwhKrOS3XdTpnxvxIjmnHf3gIgRgdwg%2F3LrIdYXdszSYzwlWKYob7YpaptZNaD8xWJUAMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk3%2FCU3h0cV0yQgPSrcA9M78uOeijFpLnCTfWFhBwl%2BCzRH6HMayl0d21GxaZxors98CKUQ11dNd2JY7barmiZ37ULfiRKYtF9%2Fc5Ne1ws%2FKpf1Ma%2Fa5uGn2K%2ByGTNnad0hBAGLgIYwAitaBsETPQHf1N%2BVVcCrunk%2BGens8bCq5N7ITpP8ZyAGxSM%2FnHwcGuCOrygiG1Bym6XwiR6F8EySHDEwXyNTCbFMDrBO5n7%2FK4cgPlbSGGoupGK%2FCXFiARSoGtAREseQsHOyDrzNYT0lMmNWoQlqECSaah3%2FtOBWrmHTTWBQ0myqoJ5EqWbj9HZv6gk0dYogJWffSILndoFsZ4kO5BQZ0gvwCJ%2B03ziG%2FrHzliHlwCVla3oUWaeYq7AgYsBoxQC%2BK7WKkZPqs3tnsVAqpTmxIKCWBevp7Ir4FPuLFc1EeySFMHrnvrjUdvw%2Bh5PiXLjvAKpYMcMf6fqpa4%2BtkM3YeZbtja2Wh8luQQBA%2BYWW6iTUtwi8lfUYIGPsdUf1djUWb9lYk%2Bmlf%2BbJvGGXA9i6mhaH5uOCHzQO%2B1j1pcTdPnM3cx5hQ0Pq6ACou4Ex7T1shcZ4FQAjquNaqLh7qL0ImxZUqPIqYTzDMLc06NqK5SrdynngafH%2F8nSvLaF%2FxFLYr8DcMN2IqcQGOqUBqqvvnQpnxeA%2BcMToEuQVOB5FhILkF2KeXghJlfWw1PwgIB5T%2BDV2hGeFN6vzhelfeh2Z7QTQEunIoQbaqLkXInBlfXl%2B5Ubxr71Ebl8L0T0yqUzmjIptj%2Fpl7hAZJovZ0e1o4EB2ma%2F9byGYH2N9C%2F5L4L0tgYWN9x6x3leVyJ5p%2BfZ5ZOd6xp5tF0oiKg8Z%2Fvj26%2FmPLGpJrJjcJ61hM38iVqv8&X-Amz-Signature=ee8d286ab04a783c206af5f1aeb79eb34b3dfc2e15fd1e97c0c769d6f13c01ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
