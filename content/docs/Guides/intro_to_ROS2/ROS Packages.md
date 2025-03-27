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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2HB57Y3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAgZEVWsRYoIxYqxvlsy1yp69fixjYeuX1Z36oUmtHmAiEA3Jm4VnUJpDGdDoX4NMtC0yW6RLM0NdExWPEjC%2BHuDiMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJMaSzyuJXe7lPU8byrcA0vjo2uyI7v0IXEkR9yYBNKTmZEMgH0Bf%2BhejU4HoChIygokqQ9XIBHDx69sgyF5ddeHP3mfsqRc1WEIOim6Y3e8vdUU5kmi7jYRWauCnRnhuYR%2F1R%2Bjxzwxu%2FOOOe17L5r9H6yPh2vuUz7ORk23pWW86OGD51FldnoKr%2B67moIqYf90Bd2JrofT9GV9ADDgPE4xenLgBmyKf6w2dU3oQV6yErUMH11rObaryIdNRqrAfLVur2glOHKXa5hSNTuRNwuJ3bt2O%2BBeA6s1hFZSjp17Jk7pbP2nCHvCsegnotuG4WVyk5PB8REv2m%2FjuyvKHnQTqdGqr6y4wdEWP1ZvRwnhXW1ksDCruNRCAiE60bUo1C4fjDOdBna0z7kJxwItgVBQnGzsCRORHF4C%2F458sLckSrLYE1D70n%2FtvVYpZ3VSBbzBi9FYeV7ZppeGZt88ybXUjRCmFeMSpj%2BOSIoM5MUZtgQz8awiK12Levq6%2B2Tj764cacEdrF6Rsi2Zk%2FHOCnta%2BL79LPIGuWbGoLWQ0j9FueYijjN54go4KhOzrQL3H%2F6w%2FFAGP9r7Kh7UBXLSkFNNwDuPv73A2Z1KMvoMpgbV6fp8n93kEtBXt7rT8i0XxqXM%2BVL69fLKSs%2FsMN3clr8GOqUBhye36%2FWi36HStbOzW5mk6LKfNb4Vw3YncX05HF8EK9wX9rzkKv%2FqEhqjz%2BZfHSiJ8%2BmV0e1gf7%2FtoLgXAR1j%2F1RsNLE09Qa0pBawd%2BihhEID23wfLkitH7c364JvO2UxqVjrV639Jmcp3l0axsBcQ6r0y3ferM7QltlyvE1tFmcVVvzPE8PfNVA0%2BdMwM23urRN6SmTmwuD8HYsrvk74X5%2Bmo08F&X-Amz-Signature=5a97b689f73b1a00e442f99068efdbbed7bbaac6a790a8e79f396637f801767e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2HB57Y3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAgZEVWsRYoIxYqxvlsy1yp69fixjYeuX1Z36oUmtHmAiEA3Jm4VnUJpDGdDoX4NMtC0yW6RLM0NdExWPEjC%2BHuDiMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJMaSzyuJXe7lPU8byrcA0vjo2uyI7v0IXEkR9yYBNKTmZEMgH0Bf%2BhejU4HoChIygokqQ9XIBHDx69sgyF5ddeHP3mfsqRc1WEIOim6Y3e8vdUU5kmi7jYRWauCnRnhuYR%2F1R%2Bjxzwxu%2FOOOe17L5r9H6yPh2vuUz7ORk23pWW86OGD51FldnoKr%2B67moIqYf90Bd2JrofT9GV9ADDgPE4xenLgBmyKf6w2dU3oQV6yErUMH11rObaryIdNRqrAfLVur2glOHKXa5hSNTuRNwuJ3bt2O%2BBeA6s1hFZSjp17Jk7pbP2nCHvCsegnotuG4WVyk5PB8REv2m%2FjuyvKHnQTqdGqr6y4wdEWP1ZvRwnhXW1ksDCruNRCAiE60bUo1C4fjDOdBna0z7kJxwItgVBQnGzsCRORHF4C%2F458sLckSrLYE1D70n%2FtvVYpZ3VSBbzBi9FYeV7ZppeGZt88ybXUjRCmFeMSpj%2BOSIoM5MUZtgQz8awiK12Levq6%2B2Tj764cacEdrF6Rsi2Zk%2FHOCnta%2BL79LPIGuWbGoLWQ0j9FueYijjN54go4KhOzrQL3H%2F6w%2FFAGP9r7Kh7UBXLSkFNNwDuPv73A2Z1KMvoMpgbV6fp8n93kEtBXt7rT8i0XxqXM%2BVL69fLKSs%2FsMN3clr8GOqUBhye36%2FWi36HStbOzW5mk6LKfNb4Vw3YncX05HF8EK9wX9rzkKv%2FqEhqjz%2BZfHSiJ8%2BmV0e1gf7%2FtoLgXAR1j%2F1RsNLE09Qa0pBawd%2BihhEID23wfLkitH7c364JvO2UxqVjrV639Jmcp3l0axsBcQ6r0y3ferM7QltlyvE1tFmcVVvzPE8PfNVA0%2BdMwM23urRN6SmTmwuD8HYsrvk74X5%2Bmo08F&X-Amz-Signature=3767543389e655a3209ae4c3f8c5c8b78de7432cab70642a9ad2e34735efba62&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2HB57Y3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAgZEVWsRYoIxYqxvlsy1yp69fixjYeuX1Z36oUmtHmAiEA3Jm4VnUJpDGdDoX4NMtC0yW6RLM0NdExWPEjC%2BHuDiMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJMaSzyuJXe7lPU8byrcA0vjo2uyI7v0IXEkR9yYBNKTmZEMgH0Bf%2BhejU4HoChIygokqQ9XIBHDx69sgyF5ddeHP3mfsqRc1WEIOim6Y3e8vdUU5kmi7jYRWauCnRnhuYR%2F1R%2Bjxzwxu%2FOOOe17L5r9H6yPh2vuUz7ORk23pWW86OGD51FldnoKr%2B67moIqYf90Bd2JrofT9GV9ADDgPE4xenLgBmyKf6w2dU3oQV6yErUMH11rObaryIdNRqrAfLVur2glOHKXa5hSNTuRNwuJ3bt2O%2BBeA6s1hFZSjp17Jk7pbP2nCHvCsegnotuG4WVyk5PB8REv2m%2FjuyvKHnQTqdGqr6y4wdEWP1ZvRwnhXW1ksDCruNRCAiE60bUo1C4fjDOdBna0z7kJxwItgVBQnGzsCRORHF4C%2F458sLckSrLYE1D70n%2FtvVYpZ3VSBbzBi9FYeV7ZppeGZt88ybXUjRCmFeMSpj%2BOSIoM5MUZtgQz8awiK12Levq6%2B2Tj764cacEdrF6Rsi2Zk%2FHOCnta%2BL79LPIGuWbGoLWQ0j9FueYijjN54go4KhOzrQL3H%2F6w%2FFAGP9r7Kh7UBXLSkFNNwDuPv73A2Z1KMvoMpgbV6fp8n93kEtBXt7rT8i0XxqXM%2BVL69fLKSs%2FsMN3clr8GOqUBhye36%2FWi36HStbOzW5mk6LKfNb4Vw3YncX05HF8EK9wX9rzkKv%2FqEhqjz%2BZfHSiJ8%2BmV0e1gf7%2FtoLgXAR1j%2F1RsNLE09Qa0pBawd%2BihhEID23wfLkitH7c364JvO2UxqVjrV639Jmcp3l0axsBcQ6r0y3ferM7QltlyvE1tFmcVVvzPE8PfNVA0%2BdMwM23urRN6SmTmwuD8HYsrvk74X5%2Bmo08F&X-Amz-Signature=6eb395c5215bf79aec2aac78f07fb840acbbf3a778b98735c1d598912b55287c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2HB57Y3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAgZEVWsRYoIxYqxvlsy1yp69fixjYeuX1Z36oUmtHmAiEA3Jm4VnUJpDGdDoX4NMtC0yW6RLM0NdExWPEjC%2BHuDiMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJMaSzyuJXe7lPU8byrcA0vjo2uyI7v0IXEkR9yYBNKTmZEMgH0Bf%2BhejU4HoChIygokqQ9XIBHDx69sgyF5ddeHP3mfsqRc1WEIOim6Y3e8vdUU5kmi7jYRWauCnRnhuYR%2F1R%2Bjxzwxu%2FOOOe17L5r9H6yPh2vuUz7ORk23pWW86OGD51FldnoKr%2B67moIqYf90Bd2JrofT9GV9ADDgPE4xenLgBmyKf6w2dU3oQV6yErUMH11rObaryIdNRqrAfLVur2glOHKXa5hSNTuRNwuJ3bt2O%2BBeA6s1hFZSjp17Jk7pbP2nCHvCsegnotuG4WVyk5PB8REv2m%2FjuyvKHnQTqdGqr6y4wdEWP1ZvRwnhXW1ksDCruNRCAiE60bUo1C4fjDOdBna0z7kJxwItgVBQnGzsCRORHF4C%2F458sLckSrLYE1D70n%2FtvVYpZ3VSBbzBi9FYeV7ZppeGZt88ybXUjRCmFeMSpj%2BOSIoM5MUZtgQz8awiK12Levq6%2B2Tj764cacEdrF6Rsi2Zk%2FHOCnta%2BL79LPIGuWbGoLWQ0j9FueYijjN54go4KhOzrQL3H%2F6w%2FFAGP9r7Kh7UBXLSkFNNwDuPv73A2Z1KMvoMpgbV6fp8n93kEtBXt7rT8i0XxqXM%2BVL69fLKSs%2FsMN3clr8GOqUBhye36%2FWi36HStbOzW5mk6LKfNb4Vw3YncX05HF8EK9wX9rzkKv%2FqEhqjz%2BZfHSiJ8%2BmV0e1gf7%2FtoLgXAR1j%2F1RsNLE09Qa0pBawd%2BihhEID23wfLkitH7c364JvO2UxqVjrV639Jmcp3l0axsBcQ6r0y3ferM7QltlyvE1tFmcVVvzPE8PfNVA0%2BdMwM23urRN6SmTmwuD8HYsrvk74X5%2Bmo08F&X-Amz-Signature=9966e4f0237d13a6aba0fc0878f829c802ea9dca05eeeaca1cfc4c374d7c5ebb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2HB57Y3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAgZEVWsRYoIxYqxvlsy1yp69fixjYeuX1Z36oUmtHmAiEA3Jm4VnUJpDGdDoX4NMtC0yW6RLM0NdExWPEjC%2BHuDiMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJMaSzyuJXe7lPU8byrcA0vjo2uyI7v0IXEkR9yYBNKTmZEMgH0Bf%2BhejU4HoChIygokqQ9XIBHDx69sgyF5ddeHP3mfsqRc1WEIOim6Y3e8vdUU5kmi7jYRWauCnRnhuYR%2F1R%2Bjxzwxu%2FOOOe17L5r9H6yPh2vuUz7ORk23pWW86OGD51FldnoKr%2B67moIqYf90Bd2JrofT9GV9ADDgPE4xenLgBmyKf6w2dU3oQV6yErUMH11rObaryIdNRqrAfLVur2glOHKXa5hSNTuRNwuJ3bt2O%2BBeA6s1hFZSjp17Jk7pbP2nCHvCsegnotuG4WVyk5PB8REv2m%2FjuyvKHnQTqdGqr6y4wdEWP1ZvRwnhXW1ksDCruNRCAiE60bUo1C4fjDOdBna0z7kJxwItgVBQnGzsCRORHF4C%2F458sLckSrLYE1D70n%2FtvVYpZ3VSBbzBi9FYeV7ZppeGZt88ybXUjRCmFeMSpj%2BOSIoM5MUZtgQz8awiK12Levq6%2B2Tj764cacEdrF6Rsi2Zk%2FHOCnta%2BL79LPIGuWbGoLWQ0j9FueYijjN54go4KhOzrQL3H%2F6w%2FFAGP9r7Kh7UBXLSkFNNwDuPv73A2Z1KMvoMpgbV6fp8n93kEtBXt7rT8i0XxqXM%2BVL69fLKSs%2FsMN3clr8GOqUBhye36%2FWi36HStbOzW5mk6LKfNb4Vw3YncX05HF8EK9wX9rzkKv%2FqEhqjz%2BZfHSiJ8%2BmV0e1gf7%2FtoLgXAR1j%2F1RsNLE09Qa0pBawd%2BihhEID23wfLkitH7c364JvO2UxqVjrV639Jmcp3l0axsBcQ6r0y3ferM7QltlyvE1tFmcVVvzPE8PfNVA0%2BdMwM23urRN6SmTmwuD8HYsrvk74X5%2Bmo08F&X-Amz-Signature=e83700e331b2752ff20e5406a617ae84963e47e2930ef3ccb0e6a1912a23796d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2HB57Y3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAgZEVWsRYoIxYqxvlsy1yp69fixjYeuX1Z36oUmtHmAiEA3Jm4VnUJpDGdDoX4NMtC0yW6RLM0NdExWPEjC%2BHuDiMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJMaSzyuJXe7lPU8byrcA0vjo2uyI7v0IXEkR9yYBNKTmZEMgH0Bf%2BhejU4HoChIygokqQ9XIBHDx69sgyF5ddeHP3mfsqRc1WEIOim6Y3e8vdUU5kmi7jYRWauCnRnhuYR%2F1R%2Bjxzwxu%2FOOOe17L5r9H6yPh2vuUz7ORk23pWW86OGD51FldnoKr%2B67moIqYf90Bd2JrofT9GV9ADDgPE4xenLgBmyKf6w2dU3oQV6yErUMH11rObaryIdNRqrAfLVur2glOHKXa5hSNTuRNwuJ3bt2O%2BBeA6s1hFZSjp17Jk7pbP2nCHvCsegnotuG4WVyk5PB8REv2m%2FjuyvKHnQTqdGqr6y4wdEWP1ZvRwnhXW1ksDCruNRCAiE60bUo1C4fjDOdBna0z7kJxwItgVBQnGzsCRORHF4C%2F458sLckSrLYE1D70n%2FtvVYpZ3VSBbzBi9FYeV7ZppeGZt88ybXUjRCmFeMSpj%2BOSIoM5MUZtgQz8awiK12Levq6%2B2Tj764cacEdrF6Rsi2Zk%2FHOCnta%2BL79LPIGuWbGoLWQ0j9FueYijjN54go4KhOzrQL3H%2F6w%2FFAGP9r7Kh7UBXLSkFNNwDuPv73A2Z1KMvoMpgbV6fp8n93kEtBXt7rT8i0XxqXM%2BVL69fLKSs%2FsMN3clr8GOqUBhye36%2FWi36HStbOzW5mk6LKfNb4Vw3YncX05HF8EK9wX9rzkKv%2FqEhqjz%2BZfHSiJ8%2BmV0e1gf7%2FtoLgXAR1j%2F1RsNLE09Qa0pBawd%2BihhEID23wfLkitH7c364JvO2UxqVjrV639Jmcp3l0axsBcQ6r0y3ferM7QltlyvE1tFmcVVvzPE8PfNVA0%2BdMwM23urRN6SmTmwuD8HYsrvk74X5%2Bmo08F&X-Amz-Signature=9fabb3a09cf1a8e09c04d956a83640d656e0a60e96275f998b50c008e4323e24&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2HB57Y3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAgZEVWsRYoIxYqxvlsy1yp69fixjYeuX1Z36oUmtHmAiEA3Jm4VnUJpDGdDoX4NMtC0yW6RLM0NdExWPEjC%2BHuDiMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJMaSzyuJXe7lPU8byrcA0vjo2uyI7v0IXEkR9yYBNKTmZEMgH0Bf%2BhejU4HoChIygokqQ9XIBHDx69sgyF5ddeHP3mfsqRc1WEIOim6Y3e8vdUU5kmi7jYRWauCnRnhuYR%2F1R%2Bjxzwxu%2FOOOe17L5r9H6yPh2vuUz7ORk23pWW86OGD51FldnoKr%2B67moIqYf90Bd2JrofT9GV9ADDgPE4xenLgBmyKf6w2dU3oQV6yErUMH11rObaryIdNRqrAfLVur2glOHKXa5hSNTuRNwuJ3bt2O%2BBeA6s1hFZSjp17Jk7pbP2nCHvCsegnotuG4WVyk5PB8REv2m%2FjuyvKHnQTqdGqr6y4wdEWP1ZvRwnhXW1ksDCruNRCAiE60bUo1C4fjDOdBna0z7kJxwItgVBQnGzsCRORHF4C%2F458sLckSrLYE1D70n%2FtvVYpZ3VSBbzBi9FYeV7ZppeGZt88ybXUjRCmFeMSpj%2BOSIoM5MUZtgQz8awiK12Levq6%2B2Tj764cacEdrF6Rsi2Zk%2FHOCnta%2BL79LPIGuWbGoLWQ0j9FueYijjN54go4KhOzrQL3H%2F6w%2FFAGP9r7Kh7UBXLSkFNNwDuPv73A2Z1KMvoMpgbV6fp8n93kEtBXt7rT8i0XxqXM%2BVL69fLKSs%2FsMN3clr8GOqUBhye36%2FWi36HStbOzW5mk6LKfNb4Vw3YncX05HF8EK9wX9rzkKv%2FqEhqjz%2BZfHSiJ8%2BmV0e1gf7%2FtoLgXAR1j%2F1RsNLE09Qa0pBawd%2BihhEID23wfLkitH7c364JvO2UxqVjrV639Jmcp3l0axsBcQ6r0y3ferM7QltlyvE1tFmcVVvzPE8PfNVA0%2BdMwM23urRN6SmTmwuD8HYsrvk74X5%2Bmo08F&X-Amz-Signature=57f07f50526db6c5dcaace0015e4799c07917a65e3e65554d5a07eebad95a6fe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
