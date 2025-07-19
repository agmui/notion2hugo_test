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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZZEXHL7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyfD6dLyel3vgTWcIKNT5IHbfB2eh%2BH9usg%2BUHWAYLtAIhAJU5AoCsU7TOZ9rIY0JDH5x98dm2umSTrCzOTeS2j2cWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4yCT%2BIFC5CYtD5vwq3AO5A5M4XbtJPRFnmuNsAYq%2FvWEtE8XW%2Bk%2FFXgBfV6hxaUtxwQSapnXALJLVKJaCBBuKEmG4Xxgl9ECGMGKRLNopsUEFEOm5Mc7dR7ZMrxW3dKWQtQSsAazBkaJMuq8UTSOq15BuDtXv2Lwz60bD3Fi4jYe2023Hvz5zH0gz%2B8KKbYAPmXrTDRuYn20VL%2BXrRzywLUtcX%2FiREKyXbEbrQnODdiPr1gOW3qShqHdsWHo9cYzevXRFXzGrMMYiS36q0mzvdCmpT%2F41eMU1eG1JKtF05HPpuPygfymvr8JKXK085kaZZPn4lsfO7dYxu%2BG88SUNWJcG9KlzmU71j5jt2ziEYPr%2Fz%2BZUv0adC0%2FfeYCw%2FHXSu%2FFIkhvnX%2F%2BSbiQ%2BazfcpEHfFWjMI7MhEtVStlpLVj7Ev2EJe%2B6gYzW7SRqpBywOQMiNjXISlOXvHg5ao5JicwcakBbZT9NCf%2B6nKSBEFq7NMvgA6jWZ6gia%2BfM7UmqBpDSpJda%2By42ezfr%2BPBIEpUh9Hx3MQ%2Bk3Q8Glyw%2FGe3kTwJ4ndao2eoXAe9mR%2FXZ8HU3FuhpSsNQEGxX6KPD%2FmA42LcKwAmYUnkUy4LelXPoQ7SPLLbUt0BKly7gXWvCFvLaXg%2FapCD%2F5pzCAxezDBjqkAROrVNgoPVABrsUhrX2Bx1COUpAoYct8mACJlk4RXyQKuLRklfjdW0mJQMNcBVqwAgC0%2B%2FYrm02F9bOYI967jgLIi9zB3l3SBTaoR66l%2FLFEVaQzeQTZqjVBZhd%2B71zuoK%2BIxaNqbFRDzYmnsXvjCPdrmi5j0qTAE%2FGX0I1v0VdGmDLV%2BjLNNAvvAJi8CciYywxD9uoU9r005BpG8GBcu8KU%2Fogk&X-Amz-Signature=347dbfe05ea98eee821a561a741445318a1f1347cc08e8ee164c9c7e73e54ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZZEXHL7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyfD6dLyel3vgTWcIKNT5IHbfB2eh%2BH9usg%2BUHWAYLtAIhAJU5AoCsU7TOZ9rIY0JDH5x98dm2umSTrCzOTeS2j2cWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4yCT%2BIFC5CYtD5vwq3AO5A5M4XbtJPRFnmuNsAYq%2FvWEtE8XW%2Bk%2FFXgBfV6hxaUtxwQSapnXALJLVKJaCBBuKEmG4Xxgl9ECGMGKRLNopsUEFEOm5Mc7dR7ZMrxW3dKWQtQSsAazBkaJMuq8UTSOq15BuDtXv2Lwz60bD3Fi4jYe2023Hvz5zH0gz%2B8KKbYAPmXrTDRuYn20VL%2BXrRzywLUtcX%2FiREKyXbEbrQnODdiPr1gOW3qShqHdsWHo9cYzevXRFXzGrMMYiS36q0mzvdCmpT%2F41eMU1eG1JKtF05HPpuPygfymvr8JKXK085kaZZPn4lsfO7dYxu%2BG88SUNWJcG9KlzmU71j5jt2ziEYPr%2Fz%2BZUv0adC0%2FfeYCw%2FHXSu%2FFIkhvnX%2F%2BSbiQ%2BazfcpEHfFWjMI7MhEtVStlpLVj7Ev2EJe%2B6gYzW7SRqpBywOQMiNjXISlOXvHg5ao5JicwcakBbZT9NCf%2B6nKSBEFq7NMvgA6jWZ6gia%2BfM7UmqBpDSpJda%2By42ezfr%2BPBIEpUh9Hx3MQ%2Bk3Q8Glyw%2FGe3kTwJ4ndao2eoXAe9mR%2FXZ8HU3FuhpSsNQEGxX6KPD%2FmA42LcKwAmYUnkUy4LelXPoQ7SPLLbUt0BKly7gXWvCFvLaXg%2FapCD%2F5pzCAxezDBjqkAROrVNgoPVABrsUhrX2Bx1COUpAoYct8mACJlk4RXyQKuLRklfjdW0mJQMNcBVqwAgC0%2B%2FYrm02F9bOYI967jgLIi9zB3l3SBTaoR66l%2FLFEVaQzeQTZqjVBZhd%2B71zuoK%2BIxaNqbFRDzYmnsXvjCPdrmi5j0qTAE%2FGX0I1v0VdGmDLV%2BjLNNAvvAJi8CciYywxD9uoU9r005BpG8GBcu8KU%2Fogk&X-Amz-Signature=3bbcdcac165ace5a7067d035f9f64952b5955dd8cc5208be8257adf805e1ec6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZZEXHL7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyfD6dLyel3vgTWcIKNT5IHbfB2eh%2BH9usg%2BUHWAYLtAIhAJU5AoCsU7TOZ9rIY0JDH5x98dm2umSTrCzOTeS2j2cWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4yCT%2BIFC5CYtD5vwq3AO5A5M4XbtJPRFnmuNsAYq%2FvWEtE8XW%2Bk%2FFXgBfV6hxaUtxwQSapnXALJLVKJaCBBuKEmG4Xxgl9ECGMGKRLNopsUEFEOm5Mc7dR7ZMrxW3dKWQtQSsAazBkaJMuq8UTSOq15BuDtXv2Lwz60bD3Fi4jYe2023Hvz5zH0gz%2B8KKbYAPmXrTDRuYn20VL%2BXrRzywLUtcX%2FiREKyXbEbrQnODdiPr1gOW3qShqHdsWHo9cYzevXRFXzGrMMYiS36q0mzvdCmpT%2F41eMU1eG1JKtF05HPpuPygfymvr8JKXK085kaZZPn4lsfO7dYxu%2BG88SUNWJcG9KlzmU71j5jt2ziEYPr%2Fz%2BZUv0adC0%2FfeYCw%2FHXSu%2FFIkhvnX%2F%2BSbiQ%2BazfcpEHfFWjMI7MhEtVStlpLVj7Ev2EJe%2B6gYzW7SRqpBywOQMiNjXISlOXvHg5ao5JicwcakBbZT9NCf%2B6nKSBEFq7NMvgA6jWZ6gia%2BfM7UmqBpDSpJda%2By42ezfr%2BPBIEpUh9Hx3MQ%2Bk3Q8Glyw%2FGe3kTwJ4ndao2eoXAe9mR%2FXZ8HU3FuhpSsNQEGxX6KPD%2FmA42LcKwAmYUnkUy4LelXPoQ7SPLLbUt0BKly7gXWvCFvLaXg%2FapCD%2F5pzCAxezDBjqkAROrVNgoPVABrsUhrX2Bx1COUpAoYct8mACJlk4RXyQKuLRklfjdW0mJQMNcBVqwAgC0%2B%2FYrm02F9bOYI967jgLIi9zB3l3SBTaoR66l%2FLFEVaQzeQTZqjVBZhd%2B71zuoK%2BIxaNqbFRDzYmnsXvjCPdrmi5j0qTAE%2FGX0I1v0VdGmDLV%2BjLNNAvvAJi8CciYywxD9uoU9r005BpG8GBcu8KU%2Fogk&X-Amz-Signature=a13b59b4db852506676ddbed6879150130526a812d6b8c6ecfa2a2768883b01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZZEXHL7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyfD6dLyel3vgTWcIKNT5IHbfB2eh%2BH9usg%2BUHWAYLtAIhAJU5AoCsU7TOZ9rIY0JDH5x98dm2umSTrCzOTeS2j2cWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4yCT%2BIFC5CYtD5vwq3AO5A5M4XbtJPRFnmuNsAYq%2FvWEtE8XW%2Bk%2FFXgBfV6hxaUtxwQSapnXALJLVKJaCBBuKEmG4Xxgl9ECGMGKRLNopsUEFEOm5Mc7dR7ZMrxW3dKWQtQSsAazBkaJMuq8UTSOq15BuDtXv2Lwz60bD3Fi4jYe2023Hvz5zH0gz%2B8KKbYAPmXrTDRuYn20VL%2BXrRzywLUtcX%2FiREKyXbEbrQnODdiPr1gOW3qShqHdsWHo9cYzevXRFXzGrMMYiS36q0mzvdCmpT%2F41eMU1eG1JKtF05HPpuPygfymvr8JKXK085kaZZPn4lsfO7dYxu%2BG88SUNWJcG9KlzmU71j5jt2ziEYPr%2Fz%2BZUv0adC0%2FfeYCw%2FHXSu%2FFIkhvnX%2F%2BSbiQ%2BazfcpEHfFWjMI7MhEtVStlpLVj7Ev2EJe%2B6gYzW7SRqpBywOQMiNjXISlOXvHg5ao5JicwcakBbZT9NCf%2B6nKSBEFq7NMvgA6jWZ6gia%2BfM7UmqBpDSpJda%2By42ezfr%2BPBIEpUh9Hx3MQ%2Bk3Q8Glyw%2FGe3kTwJ4ndao2eoXAe9mR%2FXZ8HU3FuhpSsNQEGxX6KPD%2FmA42LcKwAmYUnkUy4LelXPoQ7SPLLbUt0BKly7gXWvCFvLaXg%2FapCD%2F5pzCAxezDBjqkAROrVNgoPVABrsUhrX2Bx1COUpAoYct8mACJlk4RXyQKuLRklfjdW0mJQMNcBVqwAgC0%2B%2FYrm02F9bOYI967jgLIi9zB3l3SBTaoR66l%2FLFEVaQzeQTZqjVBZhd%2B71zuoK%2BIxaNqbFRDzYmnsXvjCPdrmi5j0qTAE%2FGX0I1v0VdGmDLV%2BjLNNAvvAJi8CciYywxD9uoU9r005BpG8GBcu8KU%2Fogk&X-Amz-Signature=b8b57d5bca4d8a68fdfa8f5c5f42a6609bb666b3ff2a283e80d9326f055cdc18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZZEXHL7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyfD6dLyel3vgTWcIKNT5IHbfB2eh%2BH9usg%2BUHWAYLtAIhAJU5AoCsU7TOZ9rIY0JDH5x98dm2umSTrCzOTeS2j2cWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4yCT%2BIFC5CYtD5vwq3AO5A5M4XbtJPRFnmuNsAYq%2FvWEtE8XW%2Bk%2FFXgBfV6hxaUtxwQSapnXALJLVKJaCBBuKEmG4Xxgl9ECGMGKRLNopsUEFEOm5Mc7dR7ZMrxW3dKWQtQSsAazBkaJMuq8UTSOq15BuDtXv2Lwz60bD3Fi4jYe2023Hvz5zH0gz%2B8KKbYAPmXrTDRuYn20VL%2BXrRzywLUtcX%2FiREKyXbEbrQnODdiPr1gOW3qShqHdsWHo9cYzevXRFXzGrMMYiS36q0mzvdCmpT%2F41eMU1eG1JKtF05HPpuPygfymvr8JKXK085kaZZPn4lsfO7dYxu%2BG88SUNWJcG9KlzmU71j5jt2ziEYPr%2Fz%2BZUv0adC0%2FfeYCw%2FHXSu%2FFIkhvnX%2F%2BSbiQ%2BazfcpEHfFWjMI7MhEtVStlpLVj7Ev2EJe%2B6gYzW7SRqpBywOQMiNjXISlOXvHg5ao5JicwcakBbZT9NCf%2B6nKSBEFq7NMvgA6jWZ6gia%2BfM7UmqBpDSpJda%2By42ezfr%2BPBIEpUh9Hx3MQ%2Bk3Q8Glyw%2FGe3kTwJ4ndao2eoXAe9mR%2FXZ8HU3FuhpSsNQEGxX6KPD%2FmA42LcKwAmYUnkUy4LelXPoQ7SPLLbUt0BKly7gXWvCFvLaXg%2FapCD%2F5pzCAxezDBjqkAROrVNgoPVABrsUhrX2Bx1COUpAoYct8mACJlk4RXyQKuLRklfjdW0mJQMNcBVqwAgC0%2B%2FYrm02F9bOYI967jgLIi9zB3l3SBTaoR66l%2FLFEVaQzeQTZqjVBZhd%2B71zuoK%2BIxaNqbFRDzYmnsXvjCPdrmi5j0qTAE%2FGX0I1v0VdGmDLV%2BjLNNAvvAJi8CciYywxD9uoU9r005BpG8GBcu8KU%2Fogk&X-Amz-Signature=f258c42d00408ff32a8cafd7c65640136609cb32f2c30300145bdc0d3fae798b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZZEXHL7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyfD6dLyel3vgTWcIKNT5IHbfB2eh%2BH9usg%2BUHWAYLtAIhAJU5AoCsU7TOZ9rIY0JDH5x98dm2umSTrCzOTeS2j2cWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4yCT%2BIFC5CYtD5vwq3AO5A5M4XbtJPRFnmuNsAYq%2FvWEtE8XW%2Bk%2FFXgBfV6hxaUtxwQSapnXALJLVKJaCBBuKEmG4Xxgl9ECGMGKRLNopsUEFEOm5Mc7dR7ZMrxW3dKWQtQSsAazBkaJMuq8UTSOq15BuDtXv2Lwz60bD3Fi4jYe2023Hvz5zH0gz%2B8KKbYAPmXrTDRuYn20VL%2BXrRzywLUtcX%2FiREKyXbEbrQnODdiPr1gOW3qShqHdsWHo9cYzevXRFXzGrMMYiS36q0mzvdCmpT%2F41eMU1eG1JKtF05HPpuPygfymvr8JKXK085kaZZPn4lsfO7dYxu%2BG88SUNWJcG9KlzmU71j5jt2ziEYPr%2Fz%2BZUv0adC0%2FfeYCw%2FHXSu%2FFIkhvnX%2F%2BSbiQ%2BazfcpEHfFWjMI7MhEtVStlpLVj7Ev2EJe%2B6gYzW7SRqpBywOQMiNjXISlOXvHg5ao5JicwcakBbZT9NCf%2B6nKSBEFq7NMvgA6jWZ6gia%2BfM7UmqBpDSpJda%2By42ezfr%2BPBIEpUh9Hx3MQ%2Bk3Q8Glyw%2FGe3kTwJ4ndao2eoXAe9mR%2FXZ8HU3FuhpSsNQEGxX6KPD%2FmA42LcKwAmYUnkUy4LelXPoQ7SPLLbUt0BKly7gXWvCFvLaXg%2FapCD%2F5pzCAxezDBjqkAROrVNgoPVABrsUhrX2Bx1COUpAoYct8mACJlk4RXyQKuLRklfjdW0mJQMNcBVqwAgC0%2B%2FYrm02F9bOYI967jgLIi9zB3l3SBTaoR66l%2FLFEVaQzeQTZqjVBZhd%2B71zuoK%2BIxaNqbFRDzYmnsXvjCPdrmi5j0qTAE%2FGX0I1v0VdGmDLV%2BjLNNAvvAJi8CciYywxD9uoU9r005BpG8GBcu8KU%2Fogk&X-Amz-Signature=dd2d2ff58d335b64fe53678976fec1c26528c54685bde269b9bd876557cfb7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZZEXHL7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyfD6dLyel3vgTWcIKNT5IHbfB2eh%2BH9usg%2BUHWAYLtAIhAJU5AoCsU7TOZ9rIY0JDH5x98dm2umSTrCzOTeS2j2cWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4yCT%2BIFC5CYtD5vwq3AO5A5M4XbtJPRFnmuNsAYq%2FvWEtE8XW%2Bk%2FFXgBfV6hxaUtxwQSapnXALJLVKJaCBBuKEmG4Xxgl9ECGMGKRLNopsUEFEOm5Mc7dR7ZMrxW3dKWQtQSsAazBkaJMuq8UTSOq15BuDtXv2Lwz60bD3Fi4jYe2023Hvz5zH0gz%2B8KKbYAPmXrTDRuYn20VL%2BXrRzywLUtcX%2FiREKyXbEbrQnODdiPr1gOW3qShqHdsWHo9cYzevXRFXzGrMMYiS36q0mzvdCmpT%2F41eMU1eG1JKtF05HPpuPygfymvr8JKXK085kaZZPn4lsfO7dYxu%2BG88SUNWJcG9KlzmU71j5jt2ziEYPr%2Fz%2BZUv0adC0%2FfeYCw%2FHXSu%2FFIkhvnX%2F%2BSbiQ%2BazfcpEHfFWjMI7MhEtVStlpLVj7Ev2EJe%2B6gYzW7SRqpBywOQMiNjXISlOXvHg5ao5JicwcakBbZT9NCf%2B6nKSBEFq7NMvgA6jWZ6gia%2BfM7UmqBpDSpJda%2By42ezfr%2BPBIEpUh9Hx3MQ%2Bk3Q8Glyw%2FGe3kTwJ4ndao2eoXAe9mR%2FXZ8HU3FuhpSsNQEGxX6KPD%2FmA42LcKwAmYUnkUy4LelXPoQ7SPLLbUt0BKly7gXWvCFvLaXg%2FapCD%2F5pzCAxezDBjqkAROrVNgoPVABrsUhrX2Bx1COUpAoYct8mACJlk4RXyQKuLRklfjdW0mJQMNcBVqwAgC0%2B%2FYrm02F9bOYI967jgLIi9zB3l3SBTaoR66l%2FLFEVaQzeQTZqjVBZhd%2B71zuoK%2BIxaNqbFRDzYmnsXvjCPdrmi5j0qTAE%2FGX0I1v0VdGmDLV%2BjLNNAvvAJi8CciYywxD9uoU9r005BpG8GBcu8KU%2Fogk&X-Amz-Signature=c3cbf728deaffd86b18e5bdc4830e11c15acebd4675f20a669b0c3d41841204c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
