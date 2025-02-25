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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGPVT7K%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDXydfKbz6WKg01BBNxVhaOyNjZ4kPrZU2WRwWzZ7zafAIhALmcKprnAWAnCU1f2IRpOXfReSnzJSLJMWNFi7af5KReKv8DCE0QABoMNjM3NDIzMTgzODA1IgyaIwnkEvPdSDL7f0Mq3AOVnefO5exzRYcQ1sk4t9VPm70309UdkKCkGCnLhw81PyJTWMLVPVs%2Ff0jm9YJUYQFLmVxhttbrl7tZQACb0w%2BgVqco3sLrkhuMs6rrfYLhf3hfXsvAeM5Zni25g6HzPl9kwHoqqCIfgzqMDaNtmJQMTF%2FOjM%2F6PwoCrZMX%2BNkvHnrbkESE6PzXDHwBlxVdT6kBn3wR9ly6l1TAFQrebBy6G9pv0fHeClwk8hqpft%2BPwkK%2F87j%2BRmxoyjLIWZ820yt7OO%2BwKGAl%2BeD72ERItBispo67oPvhOis4eyIW%2Fqd%2BkzCZdLxOZfAHjdg24jjnCTlFMrnXu%2BMy%2BlbiBty8w4kQ8yfYVYUwL62y35qwtOSM%2B63tORmlHdE3QZQmPPjDi7EhPZLjk033%2F9rVOvDY0XIxOULivCpO%2F93Ui4KGeR20FhqMicZ0Das60nJ9N5HUwEW%2FOQSu%2Fz%2BP1Pa0OxE%2BEcoFLNQwy%2B2517cdigKGtNiYiOQHM8htm75lcdF4gTP%2BdYyDPFfjqgwpdk5lOM7HydHyYrbrPPKVorY5SHTKG9TT4vv2NL1F9h8YRZDgyiK0OUe%2B%2Fu%2Fgpgqti6nMCS2PJL4qFStzG9wmLV%2FslLg5sGzcQ72m7yvhgMRAY6lSezCWx%2Fi9BjqkAVHW2ru9IID0cNmDXgg2TAs%2FXGrIQKt7zJI3CV%2By3kD8alvMKGCg%2BfBPjNJqt9LdEvUIucmlSC5IMUDzz%2FGgr8elXc4daEx%2BoCGICMWOH6SVxS9roD%2Bwsu6Qi5vtZFXhm%2BQqB5dCms6%2BoWwy%2F7ktLfsqVWwCPnwzpW%2FRXmqUI3mWij5%2BjpwQaCzTFj6QhmfIuYFLOJc96QPnx%2FWy%2FvCjp1d5hlIe&X-Amz-Signature=00efa024a2e17c237e853495c8e27cf04744ec19338806f0ebd425c1fbaf9198&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGPVT7K%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDXydfKbz6WKg01BBNxVhaOyNjZ4kPrZU2WRwWzZ7zafAIhALmcKprnAWAnCU1f2IRpOXfReSnzJSLJMWNFi7af5KReKv8DCE0QABoMNjM3NDIzMTgzODA1IgyaIwnkEvPdSDL7f0Mq3AOVnefO5exzRYcQ1sk4t9VPm70309UdkKCkGCnLhw81PyJTWMLVPVs%2Ff0jm9YJUYQFLmVxhttbrl7tZQACb0w%2BgVqco3sLrkhuMs6rrfYLhf3hfXsvAeM5Zni25g6HzPl9kwHoqqCIfgzqMDaNtmJQMTF%2FOjM%2F6PwoCrZMX%2BNkvHnrbkESE6PzXDHwBlxVdT6kBn3wR9ly6l1TAFQrebBy6G9pv0fHeClwk8hqpft%2BPwkK%2F87j%2BRmxoyjLIWZ820yt7OO%2BwKGAl%2BeD72ERItBispo67oPvhOis4eyIW%2Fqd%2BkzCZdLxOZfAHjdg24jjnCTlFMrnXu%2BMy%2BlbiBty8w4kQ8yfYVYUwL62y35qwtOSM%2B63tORmlHdE3QZQmPPjDi7EhPZLjk033%2F9rVOvDY0XIxOULivCpO%2F93Ui4KGeR20FhqMicZ0Das60nJ9N5HUwEW%2FOQSu%2Fz%2BP1Pa0OxE%2BEcoFLNQwy%2B2517cdigKGtNiYiOQHM8htm75lcdF4gTP%2BdYyDPFfjqgwpdk5lOM7HydHyYrbrPPKVorY5SHTKG9TT4vv2NL1F9h8YRZDgyiK0OUe%2B%2Fu%2Fgpgqti6nMCS2PJL4qFStzG9wmLV%2FslLg5sGzcQ72m7yvhgMRAY6lSezCWx%2Fi9BjqkAVHW2ru9IID0cNmDXgg2TAs%2FXGrIQKt7zJI3CV%2By3kD8alvMKGCg%2BfBPjNJqt9LdEvUIucmlSC5IMUDzz%2FGgr8elXc4daEx%2BoCGICMWOH6SVxS9roD%2Bwsu6Qi5vtZFXhm%2BQqB5dCms6%2BoWwy%2F7ktLfsqVWwCPnwzpW%2FRXmqUI3mWij5%2BjpwQaCzTFj6QhmfIuYFLOJc96QPnx%2FWy%2FvCjp1d5hlIe&X-Amz-Signature=d88bd7c5a489e9c5cea633c2ac55134ebbd991edfa9d202d1954f98d78643c69&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGPVT7K%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDXydfKbz6WKg01BBNxVhaOyNjZ4kPrZU2WRwWzZ7zafAIhALmcKprnAWAnCU1f2IRpOXfReSnzJSLJMWNFi7af5KReKv8DCE0QABoMNjM3NDIzMTgzODA1IgyaIwnkEvPdSDL7f0Mq3AOVnefO5exzRYcQ1sk4t9VPm70309UdkKCkGCnLhw81PyJTWMLVPVs%2Ff0jm9YJUYQFLmVxhttbrl7tZQACb0w%2BgVqco3sLrkhuMs6rrfYLhf3hfXsvAeM5Zni25g6HzPl9kwHoqqCIfgzqMDaNtmJQMTF%2FOjM%2F6PwoCrZMX%2BNkvHnrbkESE6PzXDHwBlxVdT6kBn3wR9ly6l1TAFQrebBy6G9pv0fHeClwk8hqpft%2BPwkK%2F87j%2BRmxoyjLIWZ820yt7OO%2BwKGAl%2BeD72ERItBispo67oPvhOis4eyIW%2Fqd%2BkzCZdLxOZfAHjdg24jjnCTlFMrnXu%2BMy%2BlbiBty8w4kQ8yfYVYUwL62y35qwtOSM%2B63tORmlHdE3QZQmPPjDi7EhPZLjk033%2F9rVOvDY0XIxOULivCpO%2F93Ui4KGeR20FhqMicZ0Das60nJ9N5HUwEW%2FOQSu%2Fz%2BP1Pa0OxE%2BEcoFLNQwy%2B2517cdigKGtNiYiOQHM8htm75lcdF4gTP%2BdYyDPFfjqgwpdk5lOM7HydHyYrbrPPKVorY5SHTKG9TT4vv2NL1F9h8YRZDgyiK0OUe%2B%2Fu%2Fgpgqti6nMCS2PJL4qFStzG9wmLV%2FslLg5sGzcQ72m7yvhgMRAY6lSezCWx%2Fi9BjqkAVHW2ru9IID0cNmDXgg2TAs%2FXGrIQKt7zJI3CV%2By3kD8alvMKGCg%2BfBPjNJqt9LdEvUIucmlSC5IMUDzz%2FGgr8elXc4daEx%2BoCGICMWOH6SVxS9roD%2Bwsu6Qi5vtZFXhm%2BQqB5dCms6%2BoWwy%2F7ktLfsqVWwCPnwzpW%2FRXmqUI3mWij5%2BjpwQaCzTFj6QhmfIuYFLOJc96QPnx%2FWy%2FvCjp1d5hlIe&X-Amz-Signature=bf4ed9377563420e9dc8f1265651380c3dca79a1d99b2e85bd2145f0133bb08b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGPVT7K%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDXydfKbz6WKg01BBNxVhaOyNjZ4kPrZU2WRwWzZ7zafAIhALmcKprnAWAnCU1f2IRpOXfReSnzJSLJMWNFi7af5KReKv8DCE0QABoMNjM3NDIzMTgzODA1IgyaIwnkEvPdSDL7f0Mq3AOVnefO5exzRYcQ1sk4t9VPm70309UdkKCkGCnLhw81PyJTWMLVPVs%2Ff0jm9YJUYQFLmVxhttbrl7tZQACb0w%2BgVqco3sLrkhuMs6rrfYLhf3hfXsvAeM5Zni25g6HzPl9kwHoqqCIfgzqMDaNtmJQMTF%2FOjM%2F6PwoCrZMX%2BNkvHnrbkESE6PzXDHwBlxVdT6kBn3wR9ly6l1TAFQrebBy6G9pv0fHeClwk8hqpft%2BPwkK%2F87j%2BRmxoyjLIWZ820yt7OO%2BwKGAl%2BeD72ERItBispo67oPvhOis4eyIW%2Fqd%2BkzCZdLxOZfAHjdg24jjnCTlFMrnXu%2BMy%2BlbiBty8w4kQ8yfYVYUwL62y35qwtOSM%2B63tORmlHdE3QZQmPPjDi7EhPZLjk033%2F9rVOvDY0XIxOULivCpO%2F93Ui4KGeR20FhqMicZ0Das60nJ9N5HUwEW%2FOQSu%2Fz%2BP1Pa0OxE%2BEcoFLNQwy%2B2517cdigKGtNiYiOQHM8htm75lcdF4gTP%2BdYyDPFfjqgwpdk5lOM7HydHyYrbrPPKVorY5SHTKG9TT4vv2NL1F9h8YRZDgyiK0OUe%2B%2Fu%2Fgpgqti6nMCS2PJL4qFStzG9wmLV%2FslLg5sGzcQ72m7yvhgMRAY6lSezCWx%2Fi9BjqkAVHW2ru9IID0cNmDXgg2TAs%2FXGrIQKt7zJI3CV%2By3kD8alvMKGCg%2BfBPjNJqt9LdEvUIucmlSC5IMUDzz%2FGgr8elXc4daEx%2BoCGICMWOH6SVxS9roD%2Bwsu6Qi5vtZFXhm%2BQqB5dCms6%2BoWwy%2F7ktLfsqVWwCPnwzpW%2FRXmqUI3mWij5%2BjpwQaCzTFj6QhmfIuYFLOJc96QPnx%2FWy%2FvCjp1d5hlIe&X-Amz-Signature=112fc646fe838fa488935663f90cf9e3438b65a234177d7346f72a7349757617&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGPVT7K%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDXydfKbz6WKg01BBNxVhaOyNjZ4kPrZU2WRwWzZ7zafAIhALmcKprnAWAnCU1f2IRpOXfReSnzJSLJMWNFi7af5KReKv8DCE0QABoMNjM3NDIzMTgzODA1IgyaIwnkEvPdSDL7f0Mq3AOVnefO5exzRYcQ1sk4t9VPm70309UdkKCkGCnLhw81PyJTWMLVPVs%2Ff0jm9YJUYQFLmVxhttbrl7tZQACb0w%2BgVqco3sLrkhuMs6rrfYLhf3hfXsvAeM5Zni25g6HzPl9kwHoqqCIfgzqMDaNtmJQMTF%2FOjM%2F6PwoCrZMX%2BNkvHnrbkESE6PzXDHwBlxVdT6kBn3wR9ly6l1TAFQrebBy6G9pv0fHeClwk8hqpft%2BPwkK%2F87j%2BRmxoyjLIWZ820yt7OO%2BwKGAl%2BeD72ERItBispo67oPvhOis4eyIW%2Fqd%2BkzCZdLxOZfAHjdg24jjnCTlFMrnXu%2BMy%2BlbiBty8w4kQ8yfYVYUwL62y35qwtOSM%2B63tORmlHdE3QZQmPPjDi7EhPZLjk033%2F9rVOvDY0XIxOULivCpO%2F93Ui4KGeR20FhqMicZ0Das60nJ9N5HUwEW%2FOQSu%2Fz%2BP1Pa0OxE%2BEcoFLNQwy%2B2517cdigKGtNiYiOQHM8htm75lcdF4gTP%2BdYyDPFfjqgwpdk5lOM7HydHyYrbrPPKVorY5SHTKG9TT4vv2NL1F9h8YRZDgyiK0OUe%2B%2Fu%2Fgpgqti6nMCS2PJL4qFStzG9wmLV%2FslLg5sGzcQ72m7yvhgMRAY6lSezCWx%2Fi9BjqkAVHW2ru9IID0cNmDXgg2TAs%2FXGrIQKt7zJI3CV%2By3kD8alvMKGCg%2BfBPjNJqt9LdEvUIucmlSC5IMUDzz%2FGgr8elXc4daEx%2BoCGICMWOH6SVxS9roD%2Bwsu6Qi5vtZFXhm%2BQqB5dCms6%2BoWwy%2F7ktLfsqVWwCPnwzpW%2FRXmqUI3mWij5%2BjpwQaCzTFj6QhmfIuYFLOJc96QPnx%2FWy%2FvCjp1d5hlIe&X-Amz-Signature=108bbfdc739e27ee9ef4969173aae8b0e41ca5cd65c49ee3401debe9ea7686de&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGPVT7K%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDXydfKbz6WKg01BBNxVhaOyNjZ4kPrZU2WRwWzZ7zafAIhALmcKprnAWAnCU1f2IRpOXfReSnzJSLJMWNFi7af5KReKv8DCE0QABoMNjM3NDIzMTgzODA1IgyaIwnkEvPdSDL7f0Mq3AOVnefO5exzRYcQ1sk4t9VPm70309UdkKCkGCnLhw81PyJTWMLVPVs%2Ff0jm9YJUYQFLmVxhttbrl7tZQACb0w%2BgVqco3sLrkhuMs6rrfYLhf3hfXsvAeM5Zni25g6HzPl9kwHoqqCIfgzqMDaNtmJQMTF%2FOjM%2F6PwoCrZMX%2BNkvHnrbkESE6PzXDHwBlxVdT6kBn3wR9ly6l1TAFQrebBy6G9pv0fHeClwk8hqpft%2BPwkK%2F87j%2BRmxoyjLIWZ820yt7OO%2BwKGAl%2BeD72ERItBispo67oPvhOis4eyIW%2Fqd%2BkzCZdLxOZfAHjdg24jjnCTlFMrnXu%2BMy%2BlbiBty8w4kQ8yfYVYUwL62y35qwtOSM%2B63tORmlHdE3QZQmPPjDi7EhPZLjk033%2F9rVOvDY0XIxOULivCpO%2F93Ui4KGeR20FhqMicZ0Das60nJ9N5HUwEW%2FOQSu%2Fz%2BP1Pa0OxE%2BEcoFLNQwy%2B2517cdigKGtNiYiOQHM8htm75lcdF4gTP%2BdYyDPFfjqgwpdk5lOM7HydHyYrbrPPKVorY5SHTKG9TT4vv2NL1F9h8YRZDgyiK0OUe%2B%2Fu%2Fgpgqti6nMCS2PJL4qFStzG9wmLV%2FslLg5sGzcQ72m7yvhgMRAY6lSezCWx%2Fi9BjqkAVHW2ru9IID0cNmDXgg2TAs%2FXGrIQKt7zJI3CV%2By3kD8alvMKGCg%2BfBPjNJqt9LdEvUIucmlSC5IMUDzz%2FGgr8elXc4daEx%2BoCGICMWOH6SVxS9roD%2Bwsu6Qi5vtZFXhm%2BQqB5dCms6%2BoWwy%2F7ktLfsqVWwCPnwzpW%2FRXmqUI3mWij5%2BjpwQaCzTFj6QhmfIuYFLOJc96QPnx%2FWy%2FvCjp1d5hlIe&X-Amz-Signature=860935422f99053299a09afa02f20f371332b11206e26b5c3c817045defdfae5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGPVT7K%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDXydfKbz6WKg01BBNxVhaOyNjZ4kPrZU2WRwWzZ7zafAIhALmcKprnAWAnCU1f2IRpOXfReSnzJSLJMWNFi7af5KReKv8DCE0QABoMNjM3NDIzMTgzODA1IgyaIwnkEvPdSDL7f0Mq3AOVnefO5exzRYcQ1sk4t9VPm70309UdkKCkGCnLhw81PyJTWMLVPVs%2Ff0jm9YJUYQFLmVxhttbrl7tZQACb0w%2BgVqco3sLrkhuMs6rrfYLhf3hfXsvAeM5Zni25g6HzPl9kwHoqqCIfgzqMDaNtmJQMTF%2FOjM%2F6PwoCrZMX%2BNkvHnrbkESE6PzXDHwBlxVdT6kBn3wR9ly6l1TAFQrebBy6G9pv0fHeClwk8hqpft%2BPwkK%2F87j%2BRmxoyjLIWZ820yt7OO%2BwKGAl%2BeD72ERItBispo67oPvhOis4eyIW%2Fqd%2BkzCZdLxOZfAHjdg24jjnCTlFMrnXu%2BMy%2BlbiBty8w4kQ8yfYVYUwL62y35qwtOSM%2B63tORmlHdE3QZQmPPjDi7EhPZLjk033%2F9rVOvDY0XIxOULivCpO%2F93Ui4KGeR20FhqMicZ0Das60nJ9N5HUwEW%2FOQSu%2Fz%2BP1Pa0OxE%2BEcoFLNQwy%2B2517cdigKGtNiYiOQHM8htm75lcdF4gTP%2BdYyDPFfjqgwpdk5lOM7HydHyYrbrPPKVorY5SHTKG9TT4vv2NL1F9h8YRZDgyiK0OUe%2B%2Fu%2Fgpgqti6nMCS2PJL4qFStzG9wmLV%2FslLg5sGzcQ72m7yvhgMRAY6lSezCWx%2Fi9BjqkAVHW2ru9IID0cNmDXgg2TAs%2FXGrIQKt7zJI3CV%2By3kD8alvMKGCg%2BfBPjNJqt9LdEvUIucmlSC5IMUDzz%2FGgr8elXc4daEx%2BoCGICMWOH6SVxS9roD%2Bwsu6Qi5vtZFXhm%2BQqB5dCms6%2BoWwy%2F7ktLfsqVWwCPnwzpW%2FRXmqUI3mWij5%2BjpwQaCzTFj6QhmfIuYFLOJc96QPnx%2FWy%2FvCjp1d5hlIe&X-Amz-Signature=e3fcea0b01de6e409be504006a310be375759995b0ff7890a8b61ec007c81f00&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
