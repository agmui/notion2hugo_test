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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3E3XMZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICBGxucU8QtLlAeyO2NAsu7LfAxeI7vpomGSKqyeRBf6AiEAtZob07XagfEkmycy4PZuaZW4zctaKplc2sIh6YsF1UAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFCXpfnSLxBY3rMEmyrcAxpgd5flLrAwcxG8N%2FnqYFpd2wdF8%2FrA%2FZqaL6t7nL0%2FCNyaOUR08S2WLycjHap4u8VQYFD5%2F4iAg1XSykT6o3Eus9o78xD8r%2FFGbhgD97xBUrrUWlxbid97t158pNDVcAZiv3fXnb8CoRqsHD3OWUmpFHRbUuBWWqfWQv0mS%2FgOtrHRDV3hwoUr5eaL95JmJ3zUQBRuFVv%2BrrkW4il1Ur1p9aF72GghoxLR8k1bqq1p9rpOdhdwTEV%2FntdMLXLITtw1OM%2FO4UMH8Kn27A2hfwbgkNr7nXFitG4SwahG4%2FfzWAczMCL%2BxYhtgGBf2lPeks9jJUIM4wfNND%2FdEOsTy0PQN15WP%2BBv%2FCtI%2FDoX3urx5fLbYEhRTrNHLXZTA9hWCL77EbujIcSRqb7mgMwBwg8RwYrJC8ITjpJiRCX6UpKA35pJ6SHPCQ1VKExSNB2ZmhWDpem50QiAPKc5mXQvERjpDsRWd6O%2BHPsLtAYo7jo6gdDE8bvlRKVsFGwI%2BGKE6DKeADdT%2B5cRwlKS17Tx8Dp20jU0QD11Lpbi%2BKSEXM3SrqdiS6JLyLvfmY4GKKOpckuPUelCb0IQMCw31HHZuHcdSBLdcwnAuky2zyry8TBqhlx7e11ejFd8rsznMNiW9MIGOqUByY5J5rSvqKWbSSWg4XOqheUq7yqTk2CcGCnre7rpXN5HPOt59SYkAJ1BpHHeH8Tt%2BToXJ5ksYpQiNbfp92nNV%2FzVZWFfZuW86jIjEtmrxWEdJhJOd3ro5G5QW4p9GrZcgiSQ4q02hi6Klug0tX%2B6Kr5Lsbw9s0TFfRv5uGX2dIBL1cTVyVORwDCEiF0FyYrX9ZDemwNtTJj6AAbVdfqEPXkg412C&X-Amz-Signature=24312e9d5131afd6c0e29766fff0708014fc1062a29a834182d0c609c9c61d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3E3XMZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICBGxucU8QtLlAeyO2NAsu7LfAxeI7vpomGSKqyeRBf6AiEAtZob07XagfEkmycy4PZuaZW4zctaKplc2sIh6YsF1UAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFCXpfnSLxBY3rMEmyrcAxpgd5flLrAwcxG8N%2FnqYFpd2wdF8%2FrA%2FZqaL6t7nL0%2FCNyaOUR08S2WLycjHap4u8VQYFD5%2F4iAg1XSykT6o3Eus9o78xD8r%2FFGbhgD97xBUrrUWlxbid97t158pNDVcAZiv3fXnb8CoRqsHD3OWUmpFHRbUuBWWqfWQv0mS%2FgOtrHRDV3hwoUr5eaL95JmJ3zUQBRuFVv%2BrrkW4il1Ur1p9aF72GghoxLR8k1bqq1p9rpOdhdwTEV%2FntdMLXLITtw1OM%2FO4UMH8Kn27A2hfwbgkNr7nXFitG4SwahG4%2FfzWAczMCL%2BxYhtgGBf2lPeks9jJUIM4wfNND%2FdEOsTy0PQN15WP%2BBv%2FCtI%2FDoX3urx5fLbYEhRTrNHLXZTA9hWCL77EbujIcSRqb7mgMwBwg8RwYrJC8ITjpJiRCX6UpKA35pJ6SHPCQ1VKExSNB2ZmhWDpem50QiAPKc5mXQvERjpDsRWd6O%2BHPsLtAYo7jo6gdDE8bvlRKVsFGwI%2BGKE6DKeADdT%2B5cRwlKS17Tx8Dp20jU0QD11Lpbi%2BKSEXM3SrqdiS6JLyLvfmY4GKKOpckuPUelCb0IQMCw31HHZuHcdSBLdcwnAuky2zyry8TBqhlx7e11ejFd8rsznMNiW9MIGOqUByY5J5rSvqKWbSSWg4XOqheUq7yqTk2CcGCnre7rpXN5HPOt59SYkAJ1BpHHeH8Tt%2BToXJ5ksYpQiNbfp92nNV%2FzVZWFfZuW86jIjEtmrxWEdJhJOd3ro5G5QW4p9GrZcgiSQ4q02hi6Klug0tX%2B6Kr5Lsbw9s0TFfRv5uGX2dIBL1cTVyVORwDCEiF0FyYrX9ZDemwNtTJj6AAbVdfqEPXkg412C&X-Amz-Signature=083317887ce5f997ae561a3b9fd865a808cc1248fb16b1b3b2e609dbcd2c92ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3E3XMZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICBGxucU8QtLlAeyO2NAsu7LfAxeI7vpomGSKqyeRBf6AiEAtZob07XagfEkmycy4PZuaZW4zctaKplc2sIh6YsF1UAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFCXpfnSLxBY3rMEmyrcAxpgd5flLrAwcxG8N%2FnqYFpd2wdF8%2FrA%2FZqaL6t7nL0%2FCNyaOUR08S2WLycjHap4u8VQYFD5%2F4iAg1XSykT6o3Eus9o78xD8r%2FFGbhgD97xBUrrUWlxbid97t158pNDVcAZiv3fXnb8CoRqsHD3OWUmpFHRbUuBWWqfWQv0mS%2FgOtrHRDV3hwoUr5eaL95JmJ3zUQBRuFVv%2BrrkW4il1Ur1p9aF72GghoxLR8k1bqq1p9rpOdhdwTEV%2FntdMLXLITtw1OM%2FO4UMH8Kn27A2hfwbgkNr7nXFitG4SwahG4%2FfzWAczMCL%2BxYhtgGBf2lPeks9jJUIM4wfNND%2FdEOsTy0PQN15WP%2BBv%2FCtI%2FDoX3urx5fLbYEhRTrNHLXZTA9hWCL77EbujIcSRqb7mgMwBwg8RwYrJC8ITjpJiRCX6UpKA35pJ6SHPCQ1VKExSNB2ZmhWDpem50QiAPKc5mXQvERjpDsRWd6O%2BHPsLtAYo7jo6gdDE8bvlRKVsFGwI%2BGKE6DKeADdT%2B5cRwlKS17Tx8Dp20jU0QD11Lpbi%2BKSEXM3SrqdiS6JLyLvfmY4GKKOpckuPUelCb0IQMCw31HHZuHcdSBLdcwnAuky2zyry8TBqhlx7e11ejFd8rsznMNiW9MIGOqUByY5J5rSvqKWbSSWg4XOqheUq7yqTk2CcGCnre7rpXN5HPOt59SYkAJ1BpHHeH8Tt%2BToXJ5ksYpQiNbfp92nNV%2FzVZWFfZuW86jIjEtmrxWEdJhJOd3ro5G5QW4p9GrZcgiSQ4q02hi6Klug0tX%2B6Kr5Lsbw9s0TFfRv5uGX2dIBL1cTVyVORwDCEiF0FyYrX9ZDemwNtTJj6AAbVdfqEPXkg412C&X-Amz-Signature=e9492a6999c5dac47de372ed6a552b225bdec1bab25cf3e3dcc51bfb588106bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3E3XMZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICBGxucU8QtLlAeyO2NAsu7LfAxeI7vpomGSKqyeRBf6AiEAtZob07XagfEkmycy4PZuaZW4zctaKplc2sIh6YsF1UAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFCXpfnSLxBY3rMEmyrcAxpgd5flLrAwcxG8N%2FnqYFpd2wdF8%2FrA%2FZqaL6t7nL0%2FCNyaOUR08S2WLycjHap4u8VQYFD5%2F4iAg1XSykT6o3Eus9o78xD8r%2FFGbhgD97xBUrrUWlxbid97t158pNDVcAZiv3fXnb8CoRqsHD3OWUmpFHRbUuBWWqfWQv0mS%2FgOtrHRDV3hwoUr5eaL95JmJ3zUQBRuFVv%2BrrkW4il1Ur1p9aF72GghoxLR8k1bqq1p9rpOdhdwTEV%2FntdMLXLITtw1OM%2FO4UMH8Kn27A2hfwbgkNr7nXFitG4SwahG4%2FfzWAczMCL%2BxYhtgGBf2lPeks9jJUIM4wfNND%2FdEOsTy0PQN15WP%2BBv%2FCtI%2FDoX3urx5fLbYEhRTrNHLXZTA9hWCL77EbujIcSRqb7mgMwBwg8RwYrJC8ITjpJiRCX6UpKA35pJ6SHPCQ1VKExSNB2ZmhWDpem50QiAPKc5mXQvERjpDsRWd6O%2BHPsLtAYo7jo6gdDE8bvlRKVsFGwI%2BGKE6DKeADdT%2B5cRwlKS17Tx8Dp20jU0QD11Lpbi%2BKSEXM3SrqdiS6JLyLvfmY4GKKOpckuPUelCb0IQMCw31HHZuHcdSBLdcwnAuky2zyry8TBqhlx7e11ejFd8rsznMNiW9MIGOqUByY5J5rSvqKWbSSWg4XOqheUq7yqTk2CcGCnre7rpXN5HPOt59SYkAJ1BpHHeH8Tt%2BToXJ5ksYpQiNbfp92nNV%2FzVZWFfZuW86jIjEtmrxWEdJhJOd3ro5G5QW4p9GrZcgiSQ4q02hi6Klug0tX%2B6Kr5Lsbw9s0TFfRv5uGX2dIBL1cTVyVORwDCEiF0FyYrX9ZDemwNtTJj6AAbVdfqEPXkg412C&X-Amz-Signature=5899bafcf3ced8375e885e336930c182cacd6633ac6b70548b1b03047cd7dd4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3E3XMZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICBGxucU8QtLlAeyO2NAsu7LfAxeI7vpomGSKqyeRBf6AiEAtZob07XagfEkmycy4PZuaZW4zctaKplc2sIh6YsF1UAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFCXpfnSLxBY3rMEmyrcAxpgd5flLrAwcxG8N%2FnqYFpd2wdF8%2FrA%2FZqaL6t7nL0%2FCNyaOUR08S2WLycjHap4u8VQYFD5%2F4iAg1XSykT6o3Eus9o78xD8r%2FFGbhgD97xBUrrUWlxbid97t158pNDVcAZiv3fXnb8CoRqsHD3OWUmpFHRbUuBWWqfWQv0mS%2FgOtrHRDV3hwoUr5eaL95JmJ3zUQBRuFVv%2BrrkW4il1Ur1p9aF72GghoxLR8k1bqq1p9rpOdhdwTEV%2FntdMLXLITtw1OM%2FO4UMH8Kn27A2hfwbgkNr7nXFitG4SwahG4%2FfzWAczMCL%2BxYhtgGBf2lPeks9jJUIM4wfNND%2FdEOsTy0PQN15WP%2BBv%2FCtI%2FDoX3urx5fLbYEhRTrNHLXZTA9hWCL77EbujIcSRqb7mgMwBwg8RwYrJC8ITjpJiRCX6UpKA35pJ6SHPCQ1VKExSNB2ZmhWDpem50QiAPKc5mXQvERjpDsRWd6O%2BHPsLtAYo7jo6gdDE8bvlRKVsFGwI%2BGKE6DKeADdT%2B5cRwlKS17Tx8Dp20jU0QD11Lpbi%2BKSEXM3SrqdiS6JLyLvfmY4GKKOpckuPUelCb0IQMCw31HHZuHcdSBLdcwnAuky2zyry8TBqhlx7e11ejFd8rsznMNiW9MIGOqUByY5J5rSvqKWbSSWg4XOqheUq7yqTk2CcGCnre7rpXN5HPOt59SYkAJ1BpHHeH8Tt%2BToXJ5ksYpQiNbfp92nNV%2FzVZWFfZuW86jIjEtmrxWEdJhJOd3ro5G5QW4p9GrZcgiSQ4q02hi6Klug0tX%2B6Kr5Lsbw9s0TFfRv5uGX2dIBL1cTVyVORwDCEiF0FyYrX9ZDemwNtTJj6AAbVdfqEPXkg412C&X-Amz-Signature=a7c6e0ffa07ff48e67d693a341e782b9df1b7b6ed7fe776dacb0b43a004d402d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3E3XMZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICBGxucU8QtLlAeyO2NAsu7LfAxeI7vpomGSKqyeRBf6AiEAtZob07XagfEkmycy4PZuaZW4zctaKplc2sIh6YsF1UAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFCXpfnSLxBY3rMEmyrcAxpgd5flLrAwcxG8N%2FnqYFpd2wdF8%2FrA%2FZqaL6t7nL0%2FCNyaOUR08S2WLycjHap4u8VQYFD5%2F4iAg1XSykT6o3Eus9o78xD8r%2FFGbhgD97xBUrrUWlxbid97t158pNDVcAZiv3fXnb8CoRqsHD3OWUmpFHRbUuBWWqfWQv0mS%2FgOtrHRDV3hwoUr5eaL95JmJ3zUQBRuFVv%2BrrkW4il1Ur1p9aF72GghoxLR8k1bqq1p9rpOdhdwTEV%2FntdMLXLITtw1OM%2FO4UMH8Kn27A2hfwbgkNr7nXFitG4SwahG4%2FfzWAczMCL%2BxYhtgGBf2lPeks9jJUIM4wfNND%2FdEOsTy0PQN15WP%2BBv%2FCtI%2FDoX3urx5fLbYEhRTrNHLXZTA9hWCL77EbujIcSRqb7mgMwBwg8RwYrJC8ITjpJiRCX6UpKA35pJ6SHPCQ1VKExSNB2ZmhWDpem50QiAPKc5mXQvERjpDsRWd6O%2BHPsLtAYo7jo6gdDE8bvlRKVsFGwI%2BGKE6DKeADdT%2B5cRwlKS17Tx8Dp20jU0QD11Lpbi%2BKSEXM3SrqdiS6JLyLvfmY4GKKOpckuPUelCb0IQMCw31HHZuHcdSBLdcwnAuky2zyry8TBqhlx7e11ejFd8rsznMNiW9MIGOqUByY5J5rSvqKWbSSWg4XOqheUq7yqTk2CcGCnre7rpXN5HPOt59SYkAJ1BpHHeH8Tt%2BToXJ5ksYpQiNbfp92nNV%2FzVZWFfZuW86jIjEtmrxWEdJhJOd3ro5G5QW4p9GrZcgiSQ4q02hi6Klug0tX%2B6Kr5Lsbw9s0TFfRv5uGX2dIBL1cTVyVORwDCEiF0FyYrX9ZDemwNtTJj6AAbVdfqEPXkg412C&X-Amz-Signature=33ef298da637808e9242ca246966c6410296426cd79931e12d5524630cc62d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3E3XMZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICBGxucU8QtLlAeyO2NAsu7LfAxeI7vpomGSKqyeRBf6AiEAtZob07XagfEkmycy4PZuaZW4zctaKplc2sIh6YsF1UAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFCXpfnSLxBY3rMEmyrcAxpgd5flLrAwcxG8N%2FnqYFpd2wdF8%2FrA%2FZqaL6t7nL0%2FCNyaOUR08S2WLycjHap4u8VQYFD5%2F4iAg1XSykT6o3Eus9o78xD8r%2FFGbhgD97xBUrrUWlxbid97t158pNDVcAZiv3fXnb8CoRqsHD3OWUmpFHRbUuBWWqfWQv0mS%2FgOtrHRDV3hwoUr5eaL95JmJ3zUQBRuFVv%2BrrkW4il1Ur1p9aF72GghoxLR8k1bqq1p9rpOdhdwTEV%2FntdMLXLITtw1OM%2FO4UMH8Kn27A2hfwbgkNr7nXFitG4SwahG4%2FfzWAczMCL%2BxYhtgGBf2lPeks9jJUIM4wfNND%2FdEOsTy0PQN15WP%2BBv%2FCtI%2FDoX3urx5fLbYEhRTrNHLXZTA9hWCL77EbujIcSRqb7mgMwBwg8RwYrJC8ITjpJiRCX6UpKA35pJ6SHPCQ1VKExSNB2ZmhWDpem50QiAPKc5mXQvERjpDsRWd6O%2BHPsLtAYo7jo6gdDE8bvlRKVsFGwI%2BGKE6DKeADdT%2B5cRwlKS17Tx8Dp20jU0QD11Lpbi%2BKSEXM3SrqdiS6JLyLvfmY4GKKOpckuPUelCb0IQMCw31HHZuHcdSBLdcwnAuky2zyry8TBqhlx7e11ejFd8rsznMNiW9MIGOqUByY5J5rSvqKWbSSWg4XOqheUq7yqTk2CcGCnre7rpXN5HPOt59SYkAJ1BpHHeH8Tt%2BToXJ5ksYpQiNbfp92nNV%2FzVZWFfZuW86jIjEtmrxWEdJhJOd3ro5G5QW4p9GrZcgiSQ4q02hi6Klug0tX%2B6Kr5Lsbw9s0TFfRv5uGX2dIBL1cTVyVORwDCEiF0FyYrX9ZDemwNtTJj6AAbVdfqEPXkg412C&X-Amz-Signature=61a39b29012deecde7fcd745577e37503daa5aab1400de6396f69fe2e4d23c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
