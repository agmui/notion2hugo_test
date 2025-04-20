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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7YAZLK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAtnBBH6zeZNueMX%2BOPi3YpFBkTWNYllBgwQllYdi8ZYAiEAz8mobO6sByO0Nbr3cuTNddWv8Ag8MLbl5IGqkI%2BY2WwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd22U4ZMEvMNGbhsSrcAwmTWEbyv%2BBiGovofXhxKAlvSFna%2BlYmZ7%2BOsxCNCKzA6%2B882FydYemPkNWIDj2fbqPUgiYCoKdeRJYNJOQKNnYAGxTWMVG4H3pycNEz%2FQeqFSUnmzrH%2BfNWxofyMVxuTXq9Qg%2Bc8OCkSryBrFK7eSB%2FdoN1IQPkJaQVLpp6%2BSJsNweNV69BFXw4Cq74yN5HOOgvez3tAdisBA9harjmiIClcX0iaDjpXEACSnCa1qJmRr%2Fiq75i1eLNqbE%2BAVD1KEA9ayUsFm7Ni8bi6g3gKXqIXY1dmiOKQhst3CLYBDrdCed%2BeIv9vqGV%2FKFg4KzXPCBmxNuMQchrfenX4qAUnnvhw1aQYx%2FJhUvXPHzFSZnfyN1xwP1UqL8K2VscWzDeuUlf%2F9v%2FQWAhmZ3XMst%2FpL%2BMKhSSEz1mcyFP2aEiPaHfKHEY1bC%2Bs3RWhwIFjMXbo2qjU1N7eG1ZTQ0jmU8yp4J2xVEk%2FN01SahaijJHlM2xUx8NG%2FlJpJ%2FvrEEDgUQNJ6MqcTahM4es5K7L4PHBvFwLL4JnTMsMz8VUdLMBWCpd5SHD5cZwI7aq9SIOsO7p86tLjcob1sZqwpC5zTwVitQZD1OJVg1zzBaFinIZgq1y0hn3T3rhd8CjHxULMNiBkcAGOqUB%2BtKQSZL4E4a9NHFzFddBs0c48GpPJKA4L5utNGWY%2BxEQ2NGoFhGvdVkOxRXcriG6Hc8fP%2BhjYeoi2Ms2Ik0DGTlm1ZFmzcXYl%2FI4EcC6dB705U%2BjVJSYji9Mvvd%2FJ%2B2iS5JTKvdP75ZLI8sxRxzllnv4PgRxgH5%2ByJgYpsw5hGqVcTj4JUE2uffMDML7XpKDFRqDWJEUzjwPiCAAKjEocjBy%2FKqD&X-Amz-Signature=3392b35a99a4f1f47cf63be7f542c9f8e012a11c0e15679fef8dddcb69b3f6c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7YAZLK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAtnBBH6zeZNueMX%2BOPi3YpFBkTWNYllBgwQllYdi8ZYAiEAz8mobO6sByO0Nbr3cuTNddWv8Ag8MLbl5IGqkI%2BY2WwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd22U4ZMEvMNGbhsSrcAwmTWEbyv%2BBiGovofXhxKAlvSFna%2BlYmZ7%2BOsxCNCKzA6%2B882FydYemPkNWIDj2fbqPUgiYCoKdeRJYNJOQKNnYAGxTWMVG4H3pycNEz%2FQeqFSUnmzrH%2BfNWxofyMVxuTXq9Qg%2Bc8OCkSryBrFK7eSB%2FdoN1IQPkJaQVLpp6%2BSJsNweNV69BFXw4Cq74yN5HOOgvez3tAdisBA9harjmiIClcX0iaDjpXEACSnCa1qJmRr%2Fiq75i1eLNqbE%2BAVD1KEA9ayUsFm7Ni8bi6g3gKXqIXY1dmiOKQhst3CLYBDrdCed%2BeIv9vqGV%2FKFg4KzXPCBmxNuMQchrfenX4qAUnnvhw1aQYx%2FJhUvXPHzFSZnfyN1xwP1UqL8K2VscWzDeuUlf%2F9v%2FQWAhmZ3XMst%2FpL%2BMKhSSEz1mcyFP2aEiPaHfKHEY1bC%2Bs3RWhwIFjMXbo2qjU1N7eG1ZTQ0jmU8yp4J2xVEk%2FN01SahaijJHlM2xUx8NG%2FlJpJ%2FvrEEDgUQNJ6MqcTahM4es5K7L4PHBvFwLL4JnTMsMz8VUdLMBWCpd5SHD5cZwI7aq9SIOsO7p86tLjcob1sZqwpC5zTwVitQZD1OJVg1zzBaFinIZgq1y0hn3T3rhd8CjHxULMNiBkcAGOqUB%2BtKQSZL4E4a9NHFzFddBs0c48GpPJKA4L5utNGWY%2BxEQ2NGoFhGvdVkOxRXcriG6Hc8fP%2BhjYeoi2Ms2Ik0DGTlm1ZFmzcXYl%2FI4EcC6dB705U%2BjVJSYji9Mvvd%2FJ%2B2iS5JTKvdP75ZLI8sxRxzllnv4PgRxgH5%2ByJgYpsw5hGqVcTj4JUE2uffMDML7XpKDFRqDWJEUzjwPiCAAKjEocjBy%2FKqD&X-Amz-Signature=add899f1dd044a59cd9819012c0463bdbaf1c37c14f3d60a38d8e309c48754bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7YAZLK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAtnBBH6zeZNueMX%2BOPi3YpFBkTWNYllBgwQllYdi8ZYAiEAz8mobO6sByO0Nbr3cuTNddWv8Ag8MLbl5IGqkI%2BY2WwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd22U4ZMEvMNGbhsSrcAwmTWEbyv%2BBiGovofXhxKAlvSFna%2BlYmZ7%2BOsxCNCKzA6%2B882FydYemPkNWIDj2fbqPUgiYCoKdeRJYNJOQKNnYAGxTWMVG4H3pycNEz%2FQeqFSUnmzrH%2BfNWxofyMVxuTXq9Qg%2Bc8OCkSryBrFK7eSB%2FdoN1IQPkJaQVLpp6%2BSJsNweNV69BFXw4Cq74yN5HOOgvez3tAdisBA9harjmiIClcX0iaDjpXEACSnCa1qJmRr%2Fiq75i1eLNqbE%2BAVD1KEA9ayUsFm7Ni8bi6g3gKXqIXY1dmiOKQhst3CLYBDrdCed%2BeIv9vqGV%2FKFg4KzXPCBmxNuMQchrfenX4qAUnnvhw1aQYx%2FJhUvXPHzFSZnfyN1xwP1UqL8K2VscWzDeuUlf%2F9v%2FQWAhmZ3XMst%2FpL%2BMKhSSEz1mcyFP2aEiPaHfKHEY1bC%2Bs3RWhwIFjMXbo2qjU1N7eG1ZTQ0jmU8yp4J2xVEk%2FN01SahaijJHlM2xUx8NG%2FlJpJ%2FvrEEDgUQNJ6MqcTahM4es5K7L4PHBvFwLL4JnTMsMz8VUdLMBWCpd5SHD5cZwI7aq9SIOsO7p86tLjcob1sZqwpC5zTwVitQZD1OJVg1zzBaFinIZgq1y0hn3T3rhd8CjHxULMNiBkcAGOqUB%2BtKQSZL4E4a9NHFzFddBs0c48GpPJKA4L5utNGWY%2BxEQ2NGoFhGvdVkOxRXcriG6Hc8fP%2BhjYeoi2Ms2Ik0DGTlm1ZFmzcXYl%2FI4EcC6dB705U%2BjVJSYji9Mvvd%2FJ%2B2iS5JTKvdP75ZLI8sxRxzllnv4PgRxgH5%2ByJgYpsw5hGqVcTj4JUE2uffMDML7XpKDFRqDWJEUzjwPiCAAKjEocjBy%2FKqD&X-Amz-Signature=1f93d18a47290dc996aa54f4f83803ff88a94f5085ca6282c1421495359c9245&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7YAZLK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAtnBBH6zeZNueMX%2BOPi3YpFBkTWNYllBgwQllYdi8ZYAiEAz8mobO6sByO0Nbr3cuTNddWv8Ag8MLbl5IGqkI%2BY2WwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd22U4ZMEvMNGbhsSrcAwmTWEbyv%2BBiGovofXhxKAlvSFna%2BlYmZ7%2BOsxCNCKzA6%2B882FydYemPkNWIDj2fbqPUgiYCoKdeRJYNJOQKNnYAGxTWMVG4H3pycNEz%2FQeqFSUnmzrH%2BfNWxofyMVxuTXq9Qg%2Bc8OCkSryBrFK7eSB%2FdoN1IQPkJaQVLpp6%2BSJsNweNV69BFXw4Cq74yN5HOOgvez3tAdisBA9harjmiIClcX0iaDjpXEACSnCa1qJmRr%2Fiq75i1eLNqbE%2BAVD1KEA9ayUsFm7Ni8bi6g3gKXqIXY1dmiOKQhst3CLYBDrdCed%2BeIv9vqGV%2FKFg4KzXPCBmxNuMQchrfenX4qAUnnvhw1aQYx%2FJhUvXPHzFSZnfyN1xwP1UqL8K2VscWzDeuUlf%2F9v%2FQWAhmZ3XMst%2FpL%2BMKhSSEz1mcyFP2aEiPaHfKHEY1bC%2Bs3RWhwIFjMXbo2qjU1N7eG1ZTQ0jmU8yp4J2xVEk%2FN01SahaijJHlM2xUx8NG%2FlJpJ%2FvrEEDgUQNJ6MqcTahM4es5K7L4PHBvFwLL4JnTMsMz8VUdLMBWCpd5SHD5cZwI7aq9SIOsO7p86tLjcob1sZqwpC5zTwVitQZD1OJVg1zzBaFinIZgq1y0hn3T3rhd8CjHxULMNiBkcAGOqUB%2BtKQSZL4E4a9NHFzFddBs0c48GpPJKA4L5utNGWY%2BxEQ2NGoFhGvdVkOxRXcriG6Hc8fP%2BhjYeoi2Ms2Ik0DGTlm1ZFmzcXYl%2FI4EcC6dB705U%2BjVJSYji9Mvvd%2FJ%2B2iS5JTKvdP75ZLI8sxRxzllnv4PgRxgH5%2ByJgYpsw5hGqVcTj4JUE2uffMDML7XpKDFRqDWJEUzjwPiCAAKjEocjBy%2FKqD&X-Amz-Signature=08e097c99863c8213719436138a6ba1e47a1c7c669a93adc8ceb39b1544c9f93&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7YAZLK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAtnBBH6zeZNueMX%2BOPi3YpFBkTWNYllBgwQllYdi8ZYAiEAz8mobO6sByO0Nbr3cuTNddWv8Ag8MLbl5IGqkI%2BY2WwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd22U4ZMEvMNGbhsSrcAwmTWEbyv%2BBiGovofXhxKAlvSFna%2BlYmZ7%2BOsxCNCKzA6%2B882FydYemPkNWIDj2fbqPUgiYCoKdeRJYNJOQKNnYAGxTWMVG4H3pycNEz%2FQeqFSUnmzrH%2BfNWxofyMVxuTXq9Qg%2Bc8OCkSryBrFK7eSB%2FdoN1IQPkJaQVLpp6%2BSJsNweNV69BFXw4Cq74yN5HOOgvez3tAdisBA9harjmiIClcX0iaDjpXEACSnCa1qJmRr%2Fiq75i1eLNqbE%2BAVD1KEA9ayUsFm7Ni8bi6g3gKXqIXY1dmiOKQhst3CLYBDrdCed%2BeIv9vqGV%2FKFg4KzXPCBmxNuMQchrfenX4qAUnnvhw1aQYx%2FJhUvXPHzFSZnfyN1xwP1UqL8K2VscWzDeuUlf%2F9v%2FQWAhmZ3XMst%2FpL%2BMKhSSEz1mcyFP2aEiPaHfKHEY1bC%2Bs3RWhwIFjMXbo2qjU1N7eG1ZTQ0jmU8yp4J2xVEk%2FN01SahaijJHlM2xUx8NG%2FlJpJ%2FvrEEDgUQNJ6MqcTahM4es5K7L4PHBvFwLL4JnTMsMz8VUdLMBWCpd5SHD5cZwI7aq9SIOsO7p86tLjcob1sZqwpC5zTwVitQZD1OJVg1zzBaFinIZgq1y0hn3T3rhd8CjHxULMNiBkcAGOqUB%2BtKQSZL4E4a9NHFzFddBs0c48GpPJKA4L5utNGWY%2BxEQ2NGoFhGvdVkOxRXcriG6Hc8fP%2BhjYeoi2Ms2Ik0DGTlm1ZFmzcXYl%2FI4EcC6dB705U%2BjVJSYji9Mvvd%2FJ%2B2iS5JTKvdP75ZLI8sxRxzllnv4PgRxgH5%2ByJgYpsw5hGqVcTj4JUE2uffMDML7XpKDFRqDWJEUzjwPiCAAKjEocjBy%2FKqD&X-Amz-Signature=492469430f3b639fbc88304a1258fe8a3e640cd9ac205fa402de1c7ceef37d25&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7YAZLK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAtnBBH6zeZNueMX%2BOPi3YpFBkTWNYllBgwQllYdi8ZYAiEAz8mobO6sByO0Nbr3cuTNddWv8Ag8MLbl5IGqkI%2BY2WwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd22U4ZMEvMNGbhsSrcAwmTWEbyv%2BBiGovofXhxKAlvSFna%2BlYmZ7%2BOsxCNCKzA6%2B882FydYemPkNWIDj2fbqPUgiYCoKdeRJYNJOQKNnYAGxTWMVG4H3pycNEz%2FQeqFSUnmzrH%2BfNWxofyMVxuTXq9Qg%2Bc8OCkSryBrFK7eSB%2FdoN1IQPkJaQVLpp6%2BSJsNweNV69BFXw4Cq74yN5HOOgvez3tAdisBA9harjmiIClcX0iaDjpXEACSnCa1qJmRr%2Fiq75i1eLNqbE%2BAVD1KEA9ayUsFm7Ni8bi6g3gKXqIXY1dmiOKQhst3CLYBDrdCed%2BeIv9vqGV%2FKFg4KzXPCBmxNuMQchrfenX4qAUnnvhw1aQYx%2FJhUvXPHzFSZnfyN1xwP1UqL8K2VscWzDeuUlf%2F9v%2FQWAhmZ3XMst%2FpL%2BMKhSSEz1mcyFP2aEiPaHfKHEY1bC%2Bs3RWhwIFjMXbo2qjU1N7eG1ZTQ0jmU8yp4J2xVEk%2FN01SahaijJHlM2xUx8NG%2FlJpJ%2FvrEEDgUQNJ6MqcTahM4es5K7L4PHBvFwLL4JnTMsMz8VUdLMBWCpd5SHD5cZwI7aq9SIOsO7p86tLjcob1sZqwpC5zTwVitQZD1OJVg1zzBaFinIZgq1y0hn3T3rhd8CjHxULMNiBkcAGOqUB%2BtKQSZL4E4a9NHFzFddBs0c48GpPJKA4L5utNGWY%2BxEQ2NGoFhGvdVkOxRXcriG6Hc8fP%2BhjYeoi2Ms2Ik0DGTlm1ZFmzcXYl%2FI4EcC6dB705U%2BjVJSYji9Mvvd%2FJ%2B2iS5JTKvdP75ZLI8sxRxzllnv4PgRxgH5%2ByJgYpsw5hGqVcTj4JUE2uffMDML7XpKDFRqDWJEUzjwPiCAAKjEocjBy%2FKqD&X-Amz-Signature=08bfb7b03eb4d8995b7d897c0e8e9c299ef68794b180e45ba69e417df8dfff7e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7YAZLK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAtnBBH6zeZNueMX%2BOPi3YpFBkTWNYllBgwQllYdi8ZYAiEAz8mobO6sByO0Nbr3cuTNddWv8Ag8MLbl5IGqkI%2BY2WwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd22U4ZMEvMNGbhsSrcAwmTWEbyv%2BBiGovofXhxKAlvSFna%2BlYmZ7%2BOsxCNCKzA6%2B882FydYemPkNWIDj2fbqPUgiYCoKdeRJYNJOQKNnYAGxTWMVG4H3pycNEz%2FQeqFSUnmzrH%2BfNWxofyMVxuTXq9Qg%2Bc8OCkSryBrFK7eSB%2FdoN1IQPkJaQVLpp6%2BSJsNweNV69BFXw4Cq74yN5HOOgvez3tAdisBA9harjmiIClcX0iaDjpXEACSnCa1qJmRr%2Fiq75i1eLNqbE%2BAVD1KEA9ayUsFm7Ni8bi6g3gKXqIXY1dmiOKQhst3CLYBDrdCed%2BeIv9vqGV%2FKFg4KzXPCBmxNuMQchrfenX4qAUnnvhw1aQYx%2FJhUvXPHzFSZnfyN1xwP1UqL8K2VscWzDeuUlf%2F9v%2FQWAhmZ3XMst%2FpL%2BMKhSSEz1mcyFP2aEiPaHfKHEY1bC%2Bs3RWhwIFjMXbo2qjU1N7eG1ZTQ0jmU8yp4J2xVEk%2FN01SahaijJHlM2xUx8NG%2FlJpJ%2FvrEEDgUQNJ6MqcTahM4es5K7L4PHBvFwLL4JnTMsMz8VUdLMBWCpd5SHD5cZwI7aq9SIOsO7p86tLjcob1sZqwpC5zTwVitQZD1OJVg1zzBaFinIZgq1y0hn3T3rhd8CjHxULMNiBkcAGOqUB%2BtKQSZL4E4a9NHFzFddBs0c48GpPJKA4L5utNGWY%2BxEQ2NGoFhGvdVkOxRXcriG6Hc8fP%2BhjYeoi2Ms2Ik0DGTlm1ZFmzcXYl%2FI4EcC6dB705U%2BjVJSYji9Mvvd%2FJ%2B2iS5JTKvdP75ZLI8sxRxzllnv4PgRxgH5%2ByJgYpsw5hGqVcTj4JUE2uffMDML7XpKDFRqDWJEUzjwPiCAAKjEocjBy%2FKqD&X-Amz-Signature=6d1af5f1ca3e54b073fbae9270d4f26253f80b0a0dda5d0a2c092478f914ac4c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
