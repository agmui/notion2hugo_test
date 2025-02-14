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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS4W43O%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF2nO1c9k4Y5DDUGKEFPs4DJb5vrEySfV0m8nRE3XZvJAiEAlmmE7jc2b4t6SZJZ%2FdiNA%2FwJntI%2BqdA0qgrpx541FgMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDDvHz3xb%2BRW9D3m3yrcA8d02ncLSB8B5XX5IfNwu8OVsrvPoPizkQnSSF6duwrvGd5PBtvU0XB%2B1xvuRMZaD6MQE2%2FhkdcBsK0AbSlbf2XTnW%2BTXGCbpFqBvYBW%2FjGoor74mxvcfQkEwFpcqbQvc7FXrOMa3HWBoWoj5jfGP8UgViau%2BBliPxU3ziZhn8m08D%2FWJMROBt0%2F1L7HBpmpdhRuVPQ0TwPMn%2Bsk9xFlaJDFg%2B%2BeOksJ63UDSIkVjdktcjvzJgZetgk%2F9XWfbEqH5S4Z53yNQiQuEZ3YeUToB7%2F%2Fo4yrJT3gnpEqYv1VRtMNMHhZZcN42sN%2FcMhi%2F6%2BxvumDsuE0t2zxcjROQ2kEIQLZp2i2KhaGst2YUvxze%2B1zgcm9XyRS%2FBK%2Bh6lbveIE%2FjTYuf25xdQ5TVnMZOVP5ZpDNMhQ%2FZo9Esz8dCRq%2BIWnPrXgTiiPPHDsPLmsVKv6vUu6hQ09dF0%2BAY%2BpVhyuX%2FK4ieUTePzxeAukM%2F6kgqIP%2FkNreYlK5Dq3BT%2FXA4%2B%2BlabFzmEz2nj7pF2e9dtzqMF%2BaboQZuOMThSyPlolyHSMvzoxtYR7mjqguWjvraZLBvVpxk2YMACabyCLwhSFsw5okB5xmWtMSRVuIerMKOa%2Bp48F40yKeq%2BCxpmDMNecvr0GOqUB%2FWfs18T%2Fdptm9OuLavlHA920Sugn7een4JXLykPkzjDW%2BPtAmiuTNxEfj0sXZrDCg91PZNw3QWuOfNNJpZNt5pgoRy4fu%2BC%2BSmm4Y0PUEWDeE0tV1w0MgQPphsT0rdtZEzN4qCfZd%2FHgaid6JxlOHCccEQ4C%2BiybyeRhMGISaAZd%2FdBF5ESUngtb1%2BsTi7A8PzPB9M0sSI4p5UM0sbX3fdlmHHFe&X-Amz-Signature=c31d77b93ba6a5852eecf42c8e5ca4e220bb148bc5ad33085f94e1a96f182313&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS4W43O%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF2nO1c9k4Y5DDUGKEFPs4DJb5vrEySfV0m8nRE3XZvJAiEAlmmE7jc2b4t6SZJZ%2FdiNA%2FwJntI%2BqdA0qgrpx541FgMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDDvHz3xb%2BRW9D3m3yrcA8d02ncLSB8B5XX5IfNwu8OVsrvPoPizkQnSSF6duwrvGd5PBtvU0XB%2B1xvuRMZaD6MQE2%2FhkdcBsK0AbSlbf2XTnW%2BTXGCbpFqBvYBW%2FjGoor74mxvcfQkEwFpcqbQvc7FXrOMa3HWBoWoj5jfGP8UgViau%2BBliPxU3ziZhn8m08D%2FWJMROBt0%2F1L7HBpmpdhRuVPQ0TwPMn%2Bsk9xFlaJDFg%2B%2BeOksJ63UDSIkVjdktcjvzJgZetgk%2F9XWfbEqH5S4Z53yNQiQuEZ3YeUToB7%2F%2Fo4yrJT3gnpEqYv1VRtMNMHhZZcN42sN%2FcMhi%2F6%2BxvumDsuE0t2zxcjROQ2kEIQLZp2i2KhaGst2YUvxze%2B1zgcm9XyRS%2FBK%2Bh6lbveIE%2FjTYuf25xdQ5TVnMZOVP5ZpDNMhQ%2FZo9Esz8dCRq%2BIWnPrXgTiiPPHDsPLmsVKv6vUu6hQ09dF0%2BAY%2BpVhyuX%2FK4ieUTePzxeAukM%2F6kgqIP%2FkNreYlK5Dq3BT%2FXA4%2B%2BlabFzmEz2nj7pF2e9dtzqMF%2BaboQZuOMThSyPlolyHSMvzoxtYR7mjqguWjvraZLBvVpxk2YMACabyCLwhSFsw5okB5xmWtMSRVuIerMKOa%2Bp48F40yKeq%2BCxpmDMNecvr0GOqUB%2FWfs18T%2Fdptm9OuLavlHA920Sugn7een4JXLykPkzjDW%2BPtAmiuTNxEfj0sXZrDCg91PZNw3QWuOfNNJpZNt5pgoRy4fu%2BC%2BSmm4Y0PUEWDeE0tV1w0MgQPphsT0rdtZEzN4qCfZd%2FHgaid6JxlOHCccEQ4C%2BiybyeRhMGISaAZd%2FdBF5ESUngtb1%2BsTi7A8PzPB9M0sSI4p5UM0sbX3fdlmHHFe&X-Amz-Signature=002ab07abde5acb104823a517caf5845290ab6b8032f3953de32d3edd5aa5b36&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS4W43O%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF2nO1c9k4Y5DDUGKEFPs4DJb5vrEySfV0m8nRE3XZvJAiEAlmmE7jc2b4t6SZJZ%2FdiNA%2FwJntI%2BqdA0qgrpx541FgMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDDvHz3xb%2BRW9D3m3yrcA8d02ncLSB8B5XX5IfNwu8OVsrvPoPizkQnSSF6duwrvGd5PBtvU0XB%2B1xvuRMZaD6MQE2%2FhkdcBsK0AbSlbf2XTnW%2BTXGCbpFqBvYBW%2FjGoor74mxvcfQkEwFpcqbQvc7FXrOMa3HWBoWoj5jfGP8UgViau%2BBliPxU3ziZhn8m08D%2FWJMROBt0%2F1L7HBpmpdhRuVPQ0TwPMn%2Bsk9xFlaJDFg%2B%2BeOksJ63UDSIkVjdktcjvzJgZetgk%2F9XWfbEqH5S4Z53yNQiQuEZ3YeUToB7%2F%2Fo4yrJT3gnpEqYv1VRtMNMHhZZcN42sN%2FcMhi%2F6%2BxvumDsuE0t2zxcjROQ2kEIQLZp2i2KhaGst2YUvxze%2B1zgcm9XyRS%2FBK%2Bh6lbveIE%2FjTYuf25xdQ5TVnMZOVP5ZpDNMhQ%2FZo9Esz8dCRq%2BIWnPrXgTiiPPHDsPLmsVKv6vUu6hQ09dF0%2BAY%2BpVhyuX%2FK4ieUTePzxeAukM%2F6kgqIP%2FkNreYlK5Dq3BT%2FXA4%2B%2BlabFzmEz2nj7pF2e9dtzqMF%2BaboQZuOMThSyPlolyHSMvzoxtYR7mjqguWjvraZLBvVpxk2YMACabyCLwhSFsw5okB5xmWtMSRVuIerMKOa%2Bp48F40yKeq%2BCxpmDMNecvr0GOqUB%2FWfs18T%2Fdptm9OuLavlHA920Sugn7een4JXLykPkzjDW%2BPtAmiuTNxEfj0sXZrDCg91PZNw3QWuOfNNJpZNt5pgoRy4fu%2BC%2BSmm4Y0PUEWDeE0tV1w0MgQPphsT0rdtZEzN4qCfZd%2FHgaid6JxlOHCccEQ4C%2BiybyeRhMGISaAZd%2FdBF5ESUngtb1%2BsTi7A8PzPB9M0sSI4p5UM0sbX3fdlmHHFe&X-Amz-Signature=655d059e08d4c73c808b173461ba0a15911512cb9ef5d707ea154f6b1a0cb56d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS4W43O%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF2nO1c9k4Y5DDUGKEFPs4DJb5vrEySfV0m8nRE3XZvJAiEAlmmE7jc2b4t6SZJZ%2FdiNA%2FwJntI%2BqdA0qgrpx541FgMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDDvHz3xb%2BRW9D3m3yrcA8d02ncLSB8B5XX5IfNwu8OVsrvPoPizkQnSSF6duwrvGd5PBtvU0XB%2B1xvuRMZaD6MQE2%2FhkdcBsK0AbSlbf2XTnW%2BTXGCbpFqBvYBW%2FjGoor74mxvcfQkEwFpcqbQvc7FXrOMa3HWBoWoj5jfGP8UgViau%2BBliPxU3ziZhn8m08D%2FWJMROBt0%2F1L7HBpmpdhRuVPQ0TwPMn%2Bsk9xFlaJDFg%2B%2BeOksJ63UDSIkVjdktcjvzJgZetgk%2F9XWfbEqH5S4Z53yNQiQuEZ3YeUToB7%2F%2Fo4yrJT3gnpEqYv1VRtMNMHhZZcN42sN%2FcMhi%2F6%2BxvumDsuE0t2zxcjROQ2kEIQLZp2i2KhaGst2YUvxze%2B1zgcm9XyRS%2FBK%2Bh6lbveIE%2FjTYuf25xdQ5TVnMZOVP5ZpDNMhQ%2FZo9Esz8dCRq%2BIWnPrXgTiiPPHDsPLmsVKv6vUu6hQ09dF0%2BAY%2BpVhyuX%2FK4ieUTePzxeAukM%2F6kgqIP%2FkNreYlK5Dq3BT%2FXA4%2B%2BlabFzmEz2nj7pF2e9dtzqMF%2BaboQZuOMThSyPlolyHSMvzoxtYR7mjqguWjvraZLBvVpxk2YMACabyCLwhSFsw5okB5xmWtMSRVuIerMKOa%2Bp48F40yKeq%2BCxpmDMNecvr0GOqUB%2FWfs18T%2Fdptm9OuLavlHA920Sugn7een4JXLykPkzjDW%2BPtAmiuTNxEfj0sXZrDCg91PZNw3QWuOfNNJpZNt5pgoRy4fu%2BC%2BSmm4Y0PUEWDeE0tV1w0MgQPphsT0rdtZEzN4qCfZd%2FHgaid6JxlOHCccEQ4C%2BiybyeRhMGISaAZd%2FdBF5ESUngtb1%2BsTi7A8PzPB9M0sSI4p5UM0sbX3fdlmHHFe&X-Amz-Signature=918283c005d4080c7a83ea67be418713399287e3f5e8fcd02a828462d6d4c340&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS4W43O%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF2nO1c9k4Y5DDUGKEFPs4DJb5vrEySfV0m8nRE3XZvJAiEAlmmE7jc2b4t6SZJZ%2FdiNA%2FwJntI%2BqdA0qgrpx541FgMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDDvHz3xb%2BRW9D3m3yrcA8d02ncLSB8B5XX5IfNwu8OVsrvPoPizkQnSSF6duwrvGd5PBtvU0XB%2B1xvuRMZaD6MQE2%2FhkdcBsK0AbSlbf2XTnW%2BTXGCbpFqBvYBW%2FjGoor74mxvcfQkEwFpcqbQvc7FXrOMa3HWBoWoj5jfGP8UgViau%2BBliPxU3ziZhn8m08D%2FWJMROBt0%2F1L7HBpmpdhRuVPQ0TwPMn%2Bsk9xFlaJDFg%2B%2BeOksJ63UDSIkVjdktcjvzJgZetgk%2F9XWfbEqH5S4Z53yNQiQuEZ3YeUToB7%2F%2Fo4yrJT3gnpEqYv1VRtMNMHhZZcN42sN%2FcMhi%2F6%2BxvumDsuE0t2zxcjROQ2kEIQLZp2i2KhaGst2YUvxze%2B1zgcm9XyRS%2FBK%2Bh6lbveIE%2FjTYuf25xdQ5TVnMZOVP5ZpDNMhQ%2FZo9Esz8dCRq%2BIWnPrXgTiiPPHDsPLmsVKv6vUu6hQ09dF0%2BAY%2BpVhyuX%2FK4ieUTePzxeAukM%2F6kgqIP%2FkNreYlK5Dq3BT%2FXA4%2B%2BlabFzmEz2nj7pF2e9dtzqMF%2BaboQZuOMThSyPlolyHSMvzoxtYR7mjqguWjvraZLBvVpxk2YMACabyCLwhSFsw5okB5xmWtMSRVuIerMKOa%2Bp48F40yKeq%2BCxpmDMNecvr0GOqUB%2FWfs18T%2Fdptm9OuLavlHA920Sugn7een4JXLykPkzjDW%2BPtAmiuTNxEfj0sXZrDCg91PZNw3QWuOfNNJpZNt5pgoRy4fu%2BC%2BSmm4Y0PUEWDeE0tV1w0MgQPphsT0rdtZEzN4qCfZd%2FHgaid6JxlOHCccEQ4C%2BiybyeRhMGISaAZd%2FdBF5ESUngtb1%2BsTi7A8PzPB9M0sSI4p5UM0sbX3fdlmHHFe&X-Amz-Signature=eb518c873c1a6f3dc6b02457ec34879392d8ec5d5558e6ef30c2d0e8613ae93e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS4W43O%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF2nO1c9k4Y5DDUGKEFPs4DJb5vrEySfV0m8nRE3XZvJAiEAlmmE7jc2b4t6SZJZ%2FdiNA%2FwJntI%2BqdA0qgrpx541FgMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDDvHz3xb%2BRW9D3m3yrcA8d02ncLSB8B5XX5IfNwu8OVsrvPoPizkQnSSF6duwrvGd5PBtvU0XB%2B1xvuRMZaD6MQE2%2FhkdcBsK0AbSlbf2XTnW%2BTXGCbpFqBvYBW%2FjGoor74mxvcfQkEwFpcqbQvc7FXrOMa3HWBoWoj5jfGP8UgViau%2BBliPxU3ziZhn8m08D%2FWJMROBt0%2F1L7HBpmpdhRuVPQ0TwPMn%2Bsk9xFlaJDFg%2B%2BeOksJ63UDSIkVjdktcjvzJgZetgk%2F9XWfbEqH5S4Z53yNQiQuEZ3YeUToB7%2F%2Fo4yrJT3gnpEqYv1VRtMNMHhZZcN42sN%2FcMhi%2F6%2BxvumDsuE0t2zxcjROQ2kEIQLZp2i2KhaGst2YUvxze%2B1zgcm9XyRS%2FBK%2Bh6lbveIE%2FjTYuf25xdQ5TVnMZOVP5ZpDNMhQ%2FZo9Esz8dCRq%2BIWnPrXgTiiPPHDsPLmsVKv6vUu6hQ09dF0%2BAY%2BpVhyuX%2FK4ieUTePzxeAukM%2F6kgqIP%2FkNreYlK5Dq3BT%2FXA4%2B%2BlabFzmEz2nj7pF2e9dtzqMF%2BaboQZuOMThSyPlolyHSMvzoxtYR7mjqguWjvraZLBvVpxk2YMACabyCLwhSFsw5okB5xmWtMSRVuIerMKOa%2Bp48F40yKeq%2BCxpmDMNecvr0GOqUB%2FWfs18T%2Fdptm9OuLavlHA920Sugn7een4JXLykPkzjDW%2BPtAmiuTNxEfj0sXZrDCg91PZNw3QWuOfNNJpZNt5pgoRy4fu%2BC%2BSmm4Y0PUEWDeE0tV1w0MgQPphsT0rdtZEzN4qCfZd%2FHgaid6JxlOHCccEQ4C%2BiybyeRhMGISaAZd%2FdBF5ESUngtb1%2BsTi7A8PzPB9M0sSI4p5UM0sbX3fdlmHHFe&X-Amz-Signature=f686659eda18c0b74c473e9406edfd21a404454e227614ca8b4c07658a7af1cc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS4W43O%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF2nO1c9k4Y5DDUGKEFPs4DJb5vrEySfV0m8nRE3XZvJAiEAlmmE7jc2b4t6SZJZ%2FdiNA%2FwJntI%2BqdA0qgrpx541FgMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDDvHz3xb%2BRW9D3m3yrcA8d02ncLSB8B5XX5IfNwu8OVsrvPoPizkQnSSF6duwrvGd5PBtvU0XB%2B1xvuRMZaD6MQE2%2FhkdcBsK0AbSlbf2XTnW%2BTXGCbpFqBvYBW%2FjGoor74mxvcfQkEwFpcqbQvc7FXrOMa3HWBoWoj5jfGP8UgViau%2BBliPxU3ziZhn8m08D%2FWJMROBt0%2F1L7HBpmpdhRuVPQ0TwPMn%2Bsk9xFlaJDFg%2B%2BeOksJ63UDSIkVjdktcjvzJgZetgk%2F9XWfbEqH5S4Z53yNQiQuEZ3YeUToB7%2F%2Fo4yrJT3gnpEqYv1VRtMNMHhZZcN42sN%2FcMhi%2F6%2BxvumDsuE0t2zxcjROQ2kEIQLZp2i2KhaGst2YUvxze%2B1zgcm9XyRS%2FBK%2Bh6lbveIE%2FjTYuf25xdQ5TVnMZOVP5ZpDNMhQ%2FZo9Esz8dCRq%2BIWnPrXgTiiPPHDsPLmsVKv6vUu6hQ09dF0%2BAY%2BpVhyuX%2FK4ieUTePzxeAukM%2F6kgqIP%2FkNreYlK5Dq3BT%2FXA4%2B%2BlabFzmEz2nj7pF2e9dtzqMF%2BaboQZuOMThSyPlolyHSMvzoxtYR7mjqguWjvraZLBvVpxk2YMACabyCLwhSFsw5okB5xmWtMSRVuIerMKOa%2Bp48F40yKeq%2BCxpmDMNecvr0GOqUB%2FWfs18T%2Fdptm9OuLavlHA920Sugn7een4JXLykPkzjDW%2BPtAmiuTNxEfj0sXZrDCg91PZNw3QWuOfNNJpZNt5pgoRy4fu%2BC%2BSmm4Y0PUEWDeE0tV1w0MgQPphsT0rdtZEzN4qCfZd%2FHgaid6JxlOHCccEQ4C%2BiybyeRhMGISaAZd%2FdBF5ESUngtb1%2BsTi7A8PzPB9M0sSI4p5UM0sbX3fdlmHHFe&X-Amz-Signature=736603e2c53a9547f538752ead6e0f1f587d92b057b8bbcee1d1bca6eb4624aa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
