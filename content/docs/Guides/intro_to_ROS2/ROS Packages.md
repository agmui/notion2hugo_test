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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KKJRYF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDIVR%2FJP6WASZEAJcnUGR92aypLh0N5ZmuSzdaBzabGpAiEAnYGY9sMnPrLlHpVnzC2WJjEYfs7fVYFimHsynmTnMNgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPtmbyRVoC8zF9vGyrcA3nR0k8oWB74ecYp6WBzPIBAmL9BIOA2QVTya4xYKZyF5lG%2BnxJmr1ctrOJ6F74824rLs%2B%2BgdV3iXCPQOTMkh6YLvgDp1dRemkJDXJJrtdODp7UW6RfTEU2xKcKRCoZvOCsDEsjYZLhXjH8CFS551a9Sl9AztnCZOzjbGKxPEZ9mdEVpZQGTmDb%2F8s8rKlbxgzIjOg7YD2kOBbe6c2V4TG5C2yf4v2NixwrgcFz8fauT3HIuOFf%2BGwaqwMNrmx7RtThXTrK%2BTZ5w3213Wg8nr%2Bvob2JbFq%2FTplLbkby4zoFAHABsvSbZ2O0ZjotsHQnB5vCa5saZT8ZLDV%2BAL0BKnVlyflcS2WX9RGf0wJEPGBivCnZULSg%2B4e9OAmxfuNa80zmrJh8gAw57Y7abY076UnX%2FtXDfrT09Ez1Kb9i0u5xHPo64kwxqVysvF2MI7O2L7sb0b5ufXSlxsAbHxuyhwWM7RlMiUrXS%2B1oSsO%2FuXfJcbGVqM5kbLznbzmH5ZMykadCDhkJKXRrJZJIB8c8wwrm5Mu8fiDvNuoHpAxv6Ek%2B%2FpuL94QB1JDD6WPfh7PMW8wrmYXHbTAzLZFWnCLJsMo9AnMQeAOo4Cc5nit%2FRfPzadXhgz92uayoeGbN7MIan7r4GOqUBKYOuHBYXhDGnvbHeo0%2BtOH%2FiejyynGMvYBU6D8LP%2FARkwV432BqQav1JUxJbeJIUujdV5Vk%2FqfV8t0dMxqJ7dASy%2FU93PQrQk92RkjwEBQfD53H8139fXTKhoGeiajxP%2BpZxtJb2sRCnrohhhGCyyZw5y6Kud%2FXqctYm0V7pqziUgeEodiMNGEz14Q7%2FweiXRz9xeSv%2BpKbcoQtQUKMqvAjJwgP8&X-Amz-Signature=646e2382f5a48db39efdc0d907640268a7b37121003dd48e8cbf42fc67125c01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KKJRYF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDIVR%2FJP6WASZEAJcnUGR92aypLh0N5ZmuSzdaBzabGpAiEAnYGY9sMnPrLlHpVnzC2WJjEYfs7fVYFimHsynmTnMNgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPtmbyRVoC8zF9vGyrcA3nR0k8oWB74ecYp6WBzPIBAmL9BIOA2QVTya4xYKZyF5lG%2BnxJmr1ctrOJ6F74824rLs%2B%2BgdV3iXCPQOTMkh6YLvgDp1dRemkJDXJJrtdODp7UW6RfTEU2xKcKRCoZvOCsDEsjYZLhXjH8CFS551a9Sl9AztnCZOzjbGKxPEZ9mdEVpZQGTmDb%2F8s8rKlbxgzIjOg7YD2kOBbe6c2V4TG5C2yf4v2NixwrgcFz8fauT3HIuOFf%2BGwaqwMNrmx7RtThXTrK%2BTZ5w3213Wg8nr%2Bvob2JbFq%2FTplLbkby4zoFAHABsvSbZ2O0ZjotsHQnB5vCa5saZT8ZLDV%2BAL0BKnVlyflcS2WX9RGf0wJEPGBivCnZULSg%2B4e9OAmxfuNa80zmrJh8gAw57Y7abY076UnX%2FtXDfrT09Ez1Kb9i0u5xHPo64kwxqVysvF2MI7O2L7sb0b5ufXSlxsAbHxuyhwWM7RlMiUrXS%2B1oSsO%2FuXfJcbGVqM5kbLznbzmH5ZMykadCDhkJKXRrJZJIB8c8wwrm5Mu8fiDvNuoHpAxv6Ek%2B%2FpuL94QB1JDD6WPfh7PMW8wrmYXHbTAzLZFWnCLJsMo9AnMQeAOo4Cc5nit%2FRfPzadXhgz92uayoeGbN7MIan7r4GOqUBKYOuHBYXhDGnvbHeo0%2BtOH%2FiejyynGMvYBU6D8LP%2FARkwV432BqQav1JUxJbeJIUujdV5Vk%2FqfV8t0dMxqJ7dASy%2FU93PQrQk92RkjwEBQfD53H8139fXTKhoGeiajxP%2BpZxtJb2sRCnrohhhGCyyZw5y6Kud%2FXqctYm0V7pqziUgeEodiMNGEz14Q7%2FweiXRz9xeSv%2BpKbcoQtQUKMqvAjJwgP8&X-Amz-Signature=16b995c646e9ba3b484970f78fb5093d4a13405adb3224e64d14fbce28601ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KKJRYF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDIVR%2FJP6WASZEAJcnUGR92aypLh0N5ZmuSzdaBzabGpAiEAnYGY9sMnPrLlHpVnzC2WJjEYfs7fVYFimHsynmTnMNgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPtmbyRVoC8zF9vGyrcA3nR0k8oWB74ecYp6WBzPIBAmL9BIOA2QVTya4xYKZyF5lG%2BnxJmr1ctrOJ6F74824rLs%2B%2BgdV3iXCPQOTMkh6YLvgDp1dRemkJDXJJrtdODp7UW6RfTEU2xKcKRCoZvOCsDEsjYZLhXjH8CFS551a9Sl9AztnCZOzjbGKxPEZ9mdEVpZQGTmDb%2F8s8rKlbxgzIjOg7YD2kOBbe6c2V4TG5C2yf4v2NixwrgcFz8fauT3HIuOFf%2BGwaqwMNrmx7RtThXTrK%2BTZ5w3213Wg8nr%2Bvob2JbFq%2FTplLbkby4zoFAHABsvSbZ2O0ZjotsHQnB5vCa5saZT8ZLDV%2BAL0BKnVlyflcS2WX9RGf0wJEPGBivCnZULSg%2B4e9OAmxfuNa80zmrJh8gAw57Y7abY076UnX%2FtXDfrT09Ez1Kb9i0u5xHPo64kwxqVysvF2MI7O2L7sb0b5ufXSlxsAbHxuyhwWM7RlMiUrXS%2B1oSsO%2FuXfJcbGVqM5kbLznbzmH5ZMykadCDhkJKXRrJZJIB8c8wwrm5Mu8fiDvNuoHpAxv6Ek%2B%2FpuL94QB1JDD6WPfh7PMW8wrmYXHbTAzLZFWnCLJsMo9AnMQeAOo4Cc5nit%2FRfPzadXhgz92uayoeGbN7MIan7r4GOqUBKYOuHBYXhDGnvbHeo0%2BtOH%2FiejyynGMvYBU6D8LP%2FARkwV432BqQav1JUxJbeJIUujdV5Vk%2FqfV8t0dMxqJ7dASy%2FU93PQrQk92RkjwEBQfD53H8139fXTKhoGeiajxP%2BpZxtJb2sRCnrohhhGCyyZw5y6Kud%2FXqctYm0V7pqziUgeEodiMNGEz14Q7%2FweiXRz9xeSv%2BpKbcoQtQUKMqvAjJwgP8&X-Amz-Signature=6f85b14e47208be93a85e650452990d9607799df2a7e0824c6f4220a6624ed56&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KKJRYF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDIVR%2FJP6WASZEAJcnUGR92aypLh0N5ZmuSzdaBzabGpAiEAnYGY9sMnPrLlHpVnzC2WJjEYfs7fVYFimHsynmTnMNgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPtmbyRVoC8zF9vGyrcA3nR0k8oWB74ecYp6WBzPIBAmL9BIOA2QVTya4xYKZyF5lG%2BnxJmr1ctrOJ6F74824rLs%2B%2BgdV3iXCPQOTMkh6YLvgDp1dRemkJDXJJrtdODp7UW6RfTEU2xKcKRCoZvOCsDEsjYZLhXjH8CFS551a9Sl9AztnCZOzjbGKxPEZ9mdEVpZQGTmDb%2F8s8rKlbxgzIjOg7YD2kOBbe6c2V4TG5C2yf4v2NixwrgcFz8fauT3HIuOFf%2BGwaqwMNrmx7RtThXTrK%2BTZ5w3213Wg8nr%2Bvob2JbFq%2FTplLbkby4zoFAHABsvSbZ2O0ZjotsHQnB5vCa5saZT8ZLDV%2BAL0BKnVlyflcS2WX9RGf0wJEPGBivCnZULSg%2B4e9OAmxfuNa80zmrJh8gAw57Y7abY076UnX%2FtXDfrT09Ez1Kb9i0u5xHPo64kwxqVysvF2MI7O2L7sb0b5ufXSlxsAbHxuyhwWM7RlMiUrXS%2B1oSsO%2FuXfJcbGVqM5kbLznbzmH5ZMykadCDhkJKXRrJZJIB8c8wwrm5Mu8fiDvNuoHpAxv6Ek%2B%2FpuL94QB1JDD6WPfh7PMW8wrmYXHbTAzLZFWnCLJsMo9AnMQeAOo4Cc5nit%2FRfPzadXhgz92uayoeGbN7MIan7r4GOqUBKYOuHBYXhDGnvbHeo0%2BtOH%2FiejyynGMvYBU6D8LP%2FARkwV432BqQav1JUxJbeJIUujdV5Vk%2FqfV8t0dMxqJ7dASy%2FU93PQrQk92RkjwEBQfD53H8139fXTKhoGeiajxP%2BpZxtJb2sRCnrohhhGCyyZw5y6Kud%2FXqctYm0V7pqziUgeEodiMNGEz14Q7%2FweiXRz9xeSv%2BpKbcoQtQUKMqvAjJwgP8&X-Amz-Signature=a7ffdf6b120b6ed7e9cb7cbeb52b1e950416de6a7c43db528e9eed1de23ff296&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KKJRYF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDIVR%2FJP6WASZEAJcnUGR92aypLh0N5ZmuSzdaBzabGpAiEAnYGY9sMnPrLlHpVnzC2WJjEYfs7fVYFimHsynmTnMNgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPtmbyRVoC8zF9vGyrcA3nR0k8oWB74ecYp6WBzPIBAmL9BIOA2QVTya4xYKZyF5lG%2BnxJmr1ctrOJ6F74824rLs%2B%2BgdV3iXCPQOTMkh6YLvgDp1dRemkJDXJJrtdODp7UW6RfTEU2xKcKRCoZvOCsDEsjYZLhXjH8CFS551a9Sl9AztnCZOzjbGKxPEZ9mdEVpZQGTmDb%2F8s8rKlbxgzIjOg7YD2kOBbe6c2V4TG5C2yf4v2NixwrgcFz8fauT3HIuOFf%2BGwaqwMNrmx7RtThXTrK%2BTZ5w3213Wg8nr%2Bvob2JbFq%2FTplLbkby4zoFAHABsvSbZ2O0ZjotsHQnB5vCa5saZT8ZLDV%2BAL0BKnVlyflcS2WX9RGf0wJEPGBivCnZULSg%2B4e9OAmxfuNa80zmrJh8gAw57Y7abY076UnX%2FtXDfrT09Ez1Kb9i0u5xHPo64kwxqVysvF2MI7O2L7sb0b5ufXSlxsAbHxuyhwWM7RlMiUrXS%2B1oSsO%2FuXfJcbGVqM5kbLznbzmH5ZMykadCDhkJKXRrJZJIB8c8wwrm5Mu8fiDvNuoHpAxv6Ek%2B%2FpuL94QB1JDD6WPfh7PMW8wrmYXHbTAzLZFWnCLJsMo9AnMQeAOo4Cc5nit%2FRfPzadXhgz92uayoeGbN7MIan7r4GOqUBKYOuHBYXhDGnvbHeo0%2BtOH%2FiejyynGMvYBU6D8LP%2FARkwV432BqQav1JUxJbeJIUujdV5Vk%2FqfV8t0dMxqJ7dASy%2FU93PQrQk92RkjwEBQfD53H8139fXTKhoGeiajxP%2BpZxtJb2sRCnrohhhGCyyZw5y6Kud%2FXqctYm0V7pqziUgeEodiMNGEz14Q7%2FweiXRz9xeSv%2BpKbcoQtQUKMqvAjJwgP8&X-Amz-Signature=b097ddd436089d9babb44fbb98d7d3fbd450e2f84410f38649d41c23afeef38e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KKJRYF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDIVR%2FJP6WASZEAJcnUGR92aypLh0N5ZmuSzdaBzabGpAiEAnYGY9sMnPrLlHpVnzC2WJjEYfs7fVYFimHsynmTnMNgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPtmbyRVoC8zF9vGyrcA3nR0k8oWB74ecYp6WBzPIBAmL9BIOA2QVTya4xYKZyF5lG%2BnxJmr1ctrOJ6F74824rLs%2B%2BgdV3iXCPQOTMkh6YLvgDp1dRemkJDXJJrtdODp7UW6RfTEU2xKcKRCoZvOCsDEsjYZLhXjH8CFS551a9Sl9AztnCZOzjbGKxPEZ9mdEVpZQGTmDb%2F8s8rKlbxgzIjOg7YD2kOBbe6c2V4TG5C2yf4v2NixwrgcFz8fauT3HIuOFf%2BGwaqwMNrmx7RtThXTrK%2BTZ5w3213Wg8nr%2Bvob2JbFq%2FTplLbkby4zoFAHABsvSbZ2O0ZjotsHQnB5vCa5saZT8ZLDV%2BAL0BKnVlyflcS2WX9RGf0wJEPGBivCnZULSg%2B4e9OAmxfuNa80zmrJh8gAw57Y7abY076UnX%2FtXDfrT09Ez1Kb9i0u5xHPo64kwxqVysvF2MI7O2L7sb0b5ufXSlxsAbHxuyhwWM7RlMiUrXS%2B1oSsO%2FuXfJcbGVqM5kbLznbzmH5ZMykadCDhkJKXRrJZJIB8c8wwrm5Mu8fiDvNuoHpAxv6Ek%2B%2FpuL94QB1JDD6WPfh7PMW8wrmYXHbTAzLZFWnCLJsMo9AnMQeAOo4Cc5nit%2FRfPzadXhgz92uayoeGbN7MIan7r4GOqUBKYOuHBYXhDGnvbHeo0%2BtOH%2FiejyynGMvYBU6D8LP%2FARkwV432BqQav1JUxJbeJIUujdV5Vk%2FqfV8t0dMxqJ7dASy%2FU93PQrQk92RkjwEBQfD53H8139fXTKhoGeiajxP%2BpZxtJb2sRCnrohhhGCyyZw5y6Kud%2FXqctYm0V7pqziUgeEodiMNGEz14Q7%2FweiXRz9xeSv%2BpKbcoQtQUKMqvAjJwgP8&X-Amz-Signature=f9304cea94eaeaa1e8976cfd208bfd7bed91cc9c88e9abe5238cb9f9d58d7f43&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KKJRYF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDIVR%2FJP6WASZEAJcnUGR92aypLh0N5ZmuSzdaBzabGpAiEAnYGY9sMnPrLlHpVnzC2WJjEYfs7fVYFimHsynmTnMNgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPtmbyRVoC8zF9vGyrcA3nR0k8oWB74ecYp6WBzPIBAmL9BIOA2QVTya4xYKZyF5lG%2BnxJmr1ctrOJ6F74824rLs%2B%2BgdV3iXCPQOTMkh6YLvgDp1dRemkJDXJJrtdODp7UW6RfTEU2xKcKRCoZvOCsDEsjYZLhXjH8CFS551a9Sl9AztnCZOzjbGKxPEZ9mdEVpZQGTmDb%2F8s8rKlbxgzIjOg7YD2kOBbe6c2V4TG5C2yf4v2NixwrgcFz8fauT3HIuOFf%2BGwaqwMNrmx7RtThXTrK%2BTZ5w3213Wg8nr%2Bvob2JbFq%2FTplLbkby4zoFAHABsvSbZ2O0ZjotsHQnB5vCa5saZT8ZLDV%2BAL0BKnVlyflcS2WX9RGf0wJEPGBivCnZULSg%2B4e9OAmxfuNa80zmrJh8gAw57Y7abY076UnX%2FtXDfrT09Ez1Kb9i0u5xHPo64kwxqVysvF2MI7O2L7sb0b5ufXSlxsAbHxuyhwWM7RlMiUrXS%2B1oSsO%2FuXfJcbGVqM5kbLznbzmH5ZMykadCDhkJKXRrJZJIB8c8wwrm5Mu8fiDvNuoHpAxv6Ek%2B%2FpuL94QB1JDD6WPfh7PMW8wrmYXHbTAzLZFWnCLJsMo9AnMQeAOo4Cc5nit%2FRfPzadXhgz92uayoeGbN7MIan7r4GOqUBKYOuHBYXhDGnvbHeo0%2BtOH%2FiejyynGMvYBU6D8LP%2FARkwV432BqQav1JUxJbeJIUujdV5Vk%2FqfV8t0dMxqJ7dASy%2FU93PQrQk92RkjwEBQfD53H8139fXTKhoGeiajxP%2BpZxtJb2sRCnrohhhGCyyZw5y6Kud%2FXqctYm0V7pqziUgeEodiMNGEz14Q7%2FweiXRz9xeSv%2BpKbcoQtQUKMqvAjJwgP8&X-Amz-Signature=defbc96d7173551ebf9ddb0de2e977f7e29bfb01db359d4d7a611d4797c15c46&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
