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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFK6ARF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVOzHg6mVW0%2BrA9kF%2Fu%2BSXSTF4SLA2awUjfgFf%2BWfSIgIgFR18EhyLOpTw4q8qJaWNT%2BK4uafmeOMvETzgAMDNho8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc2tJOrJg1%2FWf0vqCrcA0FFQiCWhJuys9o0gGPanBip2jc8Xmm%2BHoTpdG%2BUKUVxe0oTFIMsGIZ3wupQjPq65HpGHQYr8u8YZHXK2CZD9HcHYb7hpzPL3vGpU3H9%2Fx0WfJ9fzdNdz%2Fm292D21NJiwD%2FuBJukODdRzaJJhKjaIlcMsuw1DFV3uUgqaRC4k62TlCbI96GmG%2BzBZjfCVXsgnFoTpECRvIygdY2kV737125YUtCNmLj%2BlCUPjJMq28oyQ9qpEJrLcSP98wleIM3JiZwyrenOaT6OZ2GMUxERet%2FluJKt23IKt65mnbYc3XRJ%2BdZIde3i0f4Sgfe7OBEW%2BTu1NO3z3MTSGEvHZp30vAmS3K%2BsiwNSQpL%2FoVU5A7sQJOxz8NxypnH2gCqpJP%2FCZkCW5xX5X%2BnQ2Blgs%2FilLJhKp%2FXdRvef1YgycZagwW1B761n%2BwGRU%2FtP7es8Wymn%2BHQAL%2F5LCroR02Qpn2fuSDA6oJS2PpbRlSoq5cD51eyCk7VFn5HuT1F6KYuLbvvKwfEDXtVjTbDp8AaL4wJ8A1bNO%2FOlEgaNShsJct07oU6C%2FTKzMF6muMFeujvN%2FGFD%2FLShapGAK3LYJdPjlycgaWcmWjFZojF%2FMbDzlbFtmLvgx7pqFwZpYe0QFnekMNfqhcEGOqUBR6%2B2K3%2BXpThEdkc55LdbzvB%2ByYnsCt27M0pF1JU%2FxsAOLBAmNoTibJX0Wq%2FTTwO2Rygvcd6ayEHWtjUbew%2Fr2K8vkXj3PVvZRpkB0mxWqWS75b6iynoqTGhimdEZz941brB%2BeqOzqAUgkWGQQU67H2oCQWdHR4xq5HTe4I3IGzq1aLZVtHYffF98oGfrAvTwOguXB2qy0T4x3oz9%2BqmhxFx3UsNQ&X-Amz-Signature=e0cf9e6e07d4c2ade84cb2a6fd3f0cb6b6d1d80d89bed1ce77e31863ac795082&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFK6ARF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVOzHg6mVW0%2BrA9kF%2Fu%2BSXSTF4SLA2awUjfgFf%2BWfSIgIgFR18EhyLOpTw4q8qJaWNT%2BK4uafmeOMvETzgAMDNho8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc2tJOrJg1%2FWf0vqCrcA0FFQiCWhJuys9o0gGPanBip2jc8Xmm%2BHoTpdG%2BUKUVxe0oTFIMsGIZ3wupQjPq65HpGHQYr8u8YZHXK2CZD9HcHYb7hpzPL3vGpU3H9%2Fx0WfJ9fzdNdz%2Fm292D21NJiwD%2FuBJukODdRzaJJhKjaIlcMsuw1DFV3uUgqaRC4k62TlCbI96GmG%2BzBZjfCVXsgnFoTpECRvIygdY2kV737125YUtCNmLj%2BlCUPjJMq28oyQ9qpEJrLcSP98wleIM3JiZwyrenOaT6OZ2GMUxERet%2FluJKt23IKt65mnbYc3XRJ%2BdZIde3i0f4Sgfe7OBEW%2BTu1NO3z3MTSGEvHZp30vAmS3K%2BsiwNSQpL%2FoVU5A7sQJOxz8NxypnH2gCqpJP%2FCZkCW5xX5X%2BnQ2Blgs%2FilLJhKp%2FXdRvef1YgycZagwW1B761n%2BwGRU%2FtP7es8Wymn%2BHQAL%2F5LCroR02Qpn2fuSDA6oJS2PpbRlSoq5cD51eyCk7VFn5HuT1F6KYuLbvvKwfEDXtVjTbDp8AaL4wJ8A1bNO%2FOlEgaNShsJct07oU6C%2FTKzMF6muMFeujvN%2FGFD%2FLShapGAK3LYJdPjlycgaWcmWjFZojF%2FMbDzlbFtmLvgx7pqFwZpYe0QFnekMNfqhcEGOqUBR6%2B2K3%2BXpThEdkc55LdbzvB%2ByYnsCt27M0pF1JU%2FxsAOLBAmNoTibJX0Wq%2FTTwO2Rygvcd6ayEHWtjUbew%2Fr2K8vkXj3PVvZRpkB0mxWqWS75b6iynoqTGhimdEZz941brB%2BeqOzqAUgkWGQQU67H2oCQWdHR4xq5HTe4I3IGzq1aLZVtHYffF98oGfrAvTwOguXB2qy0T4x3oz9%2BqmhxFx3UsNQ&X-Amz-Signature=f1d1d8d858b3b9d6eaf92212a7e0408af4a5f24c3b603dcf7f85bd5755672667&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFK6ARF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVOzHg6mVW0%2BrA9kF%2Fu%2BSXSTF4SLA2awUjfgFf%2BWfSIgIgFR18EhyLOpTw4q8qJaWNT%2BK4uafmeOMvETzgAMDNho8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc2tJOrJg1%2FWf0vqCrcA0FFQiCWhJuys9o0gGPanBip2jc8Xmm%2BHoTpdG%2BUKUVxe0oTFIMsGIZ3wupQjPq65HpGHQYr8u8YZHXK2CZD9HcHYb7hpzPL3vGpU3H9%2Fx0WfJ9fzdNdz%2Fm292D21NJiwD%2FuBJukODdRzaJJhKjaIlcMsuw1DFV3uUgqaRC4k62TlCbI96GmG%2BzBZjfCVXsgnFoTpECRvIygdY2kV737125YUtCNmLj%2BlCUPjJMq28oyQ9qpEJrLcSP98wleIM3JiZwyrenOaT6OZ2GMUxERet%2FluJKt23IKt65mnbYc3XRJ%2BdZIde3i0f4Sgfe7OBEW%2BTu1NO3z3MTSGEvHZp30vAmS3K%2BsiwNSQpL%2FoVU5A7sQJOxz8NxypnH2gCqpJP%2FCZkCW5xX5X%2BnQ2Blgs%2FilLJhKp%2FXdRvef1YgycZagwW1B761n%2BwGRU%2FtP7es8Wymn%2BHQAL%2F5LCroR02Qpn2fuSDA6oJS2PpbRlSoq5cD51eyCk7VFn5HuT1F6KYuLbvvKwfEDXtVjTbDp8AaL4wJ8A1bNO%2FOlEgaNShsJct07oU6C%2FTKzMF6muMFeujvN%2FGFD%2FLShapGAK3LYJdPjlycgaWcmWjFZojF%2FMbDzlbFtmLvgx7pqFwZpYe0QFnekMNfqhcEGOqUBR6%2B2K3%2BXpThEdkc55LdbzvB%2ByYnsCt27M0pF1JU%2FxsAOLBAmNoTibJX0Wq%2FTTwO2Rygvcd6ayEHWtjUbew%2Fr2K8vkXj3PVvZRpkB0mxWqWS75b6iynoqTGhimdEZz941brB%2BeqOzqAUgkWGQQU67H2oCQWdHR4xq5HTe4I3IGzq1aLZVtHYffF98oGfrAvTwOguXB2qy0T4x3oz9%2BqmhxFx3UsNQ&X-Amz-Signature=c6161f27b563a09757967aaaeb7cc0eb58f92a77da451417babcd78c2d9af925&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFK6ARF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVOzHg6mVW0%2BrA9kF%2Fu%2BSXSTF4SLA2awUjfgFf%2BWfSIgIgFR18EhyLOpTw4q8qJaWNT%2BK4uafmeOMvETzgAMDNho8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc2tJOrJg1%2FWf0vqCrcA0FFQiCWhJuys9o0gGPanBip2jc8Xmm%2BHoTpdG%2BUKUVxe0oTFIMsGIZ3wupQjPq65HpGHQYr8u8YZHXK2CZD9HcHYb7hpzPL3vGpU3H9%2Fx0WfJ9fzdNdz%2Fm292D21NJiwD%2FuBJukODdRzaJJhKjaIlcMsuw1DFV3uUgqaRC4k62TlCbI96GmG%2BzBZjfCVXsgnFoTpECRvIygdY2kV737125YUtCNmLj%2BlCUPjJMq28oyQ9qpEJrLcSP98wleIM3JiZwyrenOaT6OZ2GMUxERet%2FluJKt23IKt65mnbYc3XRJ%2BdZIde3i0f4Sgfe7OBEW%2BTu1NO3z3MTSGEvHZp30vAmS3K%2BsiwNSQpL%2FoVU5A7sQJOxz8NxypnH2gCqpJP%2FCZkCW5xX5X%2BnQ2Blgs%2FilLJhKp%2FXdRvef1YgycZagwW1B761n%2BwGRU%2FtP7es8Wymn%2BHQAL%2F5LCroR02Qpn2fuSDA6oJS2PpbRlSoq5cD51eyCk7VFn5HuT1F6KYuLbvvKwfEDXtVjTbDp8AaL4wJ8A1bNO%2FOlEgaNShsJct07oU6C%2FTKzMF6muMFeujvN%2FGFD%2FLShapGAK3LYJdPjlycgaWcmWjFZojF%2FMbDzlbFtmLvgx7pqFwZpYe0QFnekMNfqhcEGOqUBR6%2B2K3%2BXpThEdkc55LdbzvB%2ByYnsCt27M0pF1JU%2FxsAOLBAmNoTibJX0Wq%2FTTwO2Rygvcd6ayEHWtjUbew%2Fr2K8vkXj3PVvZRpkB0mxWqWS75b6iynoqTGhimdEZz941brB%2BeqOzqAUgkWGQQU67H2oCQWdHR4xq5HTe4I3IGzq1aLZVtHYffF98oGfrAvTwOguXB2qy0T4x3oz9%2BqmhxFx3UsNQ&X-Amz-Signature=a893927f343e538704e89c6a7a4eb81ed72fade1183c0c9f619fbb158ce339c0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFK6ARF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVOzHg6mVW0%2BrA9kF%2Fu%2BSXSTF4SLA2awUjfgFf%2BWfSIgIgFR18EhyLOpTw4q8qJaWNT%2BK4uafmeOMvETzgAMDNho8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc2tJOrJg1%2FWf0vqCrcA0FFQiCWhJuys9o0gGPanBip2jc8Xmm%2BHoTpdG%2BUKUVxe0oTFIMsGIZ3wupQjPq65HpGHQYr8u8YZHXK2CZD9HcHYb7hpzPL3vGpU3H9%2Fx0WfJ9fzdNdz%2Fm292D21NJiwD%2FuBJukODdRzaJJhKjaIlcMsuw1DFV3uUgqaRC4k62TlCbI96GmG%2BzBZjfCVXsgnFoTpECRvIygdY2kV737125YUtCNmLj%2BlCUPjJMq28oyQ9qpEJrLcSP98wleIM3JiZwyrenOaT6OZ2GMUxERet%2FluJKt23IKt65mnbYc3XRJ%2BdZIde3i0f4Sgfe7OBEW%2BTu1NO3z3MTSGEvHZp30vAmS3K%2BsiwNSQpL%2FoVU5A7sQJOxz8NxypnH2gCqpJP%2FCZkCW5xX5X%2BnQ2Blgs%2FilLJhKp%2FXdRvef1YgycZagwW1B761n%2BwGRU%2FtP7es8Wymn%2BHQAL%2F5LCroR02Qpn2fuSDA6oJS2PpbRlSoq5cD51eyCk7VFn5HuT1F6KYuLbvvKwfEDXtVjTbDp8AaL4wJ8A1bNO%2FOlEgaNShsJct07oU6C%2FTKzMF6muMFeujvN%2FGFD%2FLShapGAK3LYJdPjlycgaWcmWjFZojF%2FMbDzlbFtmLvgx7pqFwZpYe0QFnekMNfqhcEGOqUBR6%2B2K3%2BXpThEdkc55LdbzvB%2ByYnsCt27M0pF1JU%2FxsAOLBAmNoTibJX0Wq%2FTTwO2Rygvcd6ayEHWtjUbew%2Fr2K8vkXj3PVvZRpkB0mxWqWS75b6iynoqTGhimdEZz941brB%2BeqOzqAUgkWGQQU67H2oCQWdHR4xq5HTe4I3IGzq1aLZVtHYffF98oGfrAvTwOguXB2qy0T4x3oz9%2BqmhxFx3UsNQ&X-Amz-Signature=c0d67dd26d1e8010fc12ed26bf6c1bf458cb74fb17869a8cdb4d4ca47b2f2c85&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFK6ARF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVOzHg6mVW0%2BrA9kF%2Fu%2BSXSTF4SLA2awUjfgFf%2BWfSIgIgFR18EhyLOpTw4q8qJaWNT%2BK4uafmeOMvETzgAMDNho8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc2tJOrJg1%2FWf0vqCrcA0FFQiCWhJuys9o0gGPanBip2jc8Xmm%2BHoTpdG%2BUKUVxe0oTFIMsGIZ3wupQjPq65HpGHQYr8u8YZHXK2CZD9HcHYb7hpzPL3vGpU3H9%2Fx0WfJ9fzdNdz%2Fm292D21NJiwD%2FuBJukODdRzaJJhKjaIlcMsuw1DFV3uUgqaRC4k62TlCbI96GmG%2BzBZjfCVXsgnFoTpECRvIygdY2kV737125YUtCNmLj%2BlCUPjJMq28oyQ9qpEJrLcSP98wleIM3JiZwyrenOaT6OZ2GMUxERet%2FluJKt23IKt65mnbYc3XRJ%2BdZIde3i0f4Sgfe7OBEW%2BTu1NO3z3MTSGEvHZp30vAmS3K%2BsiwNSQpL%2FoVU5A7sQJOxz8NxypnH2gCqpJP%2FCZkCW5xX5X%2BnQ2Blgs%2FilLJhKp%2FXdRvef1YgycZagwW1B761n%2BwGRU%2FtP7es8Wymn%2BHQAL%2F5LCroR02Qpn2fuSDA6oJS2PpbRlSoq5cD51eyCk7VFn5HuT1F6KYuLbvvKwfEDXtVjTbDp8AaL4wJ8A1bNO%2FOlEgaNShsJct07oU6C%2FTKzMF6muMFeujvN%2FGFD%2FLShapGAK3LYJdPjlycgaWcmWjFZojF%2FMbDzlbFtmLvgx7pqFwZpYe0QFnekMNfqhcEGOqUBR6%2B2K3%2BXpThEdkc55LdbzvB%2ByYnsCt27M0pF1JU%2FxsAOLBAmNoTibJX0Wq%2FTTwO2Rygvcd6ayEHWtjUbew%2Fr2K8vkXj3PVvZRpkB0mxWqWS75b6iynoqTGhimdEZz941brB%2BeqOzqAUgkWGQQU67H2oCQWdHR4xq5HTe4I3IGzq1aLZVtHYffF98oGfrAvTwOguXB2qy0T4x3oz9%2BqmhxFx3UsNQ&X-Amz-Signature=a5f272d047f97b648e39b39c086b7c3d79f050466a3759629d231ae0bf79d42d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFK6ARF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVOzHg6mVW0%2BrA9kF%2Fu%2BSXSTF4SLA2awUjfgFf%2BWfSIgIgFR18EhyLOpTw4q8qJaWNT%2BK4uafmeOMvETzgAMDNho8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc2tJOrJg1%2FWf0vqCrcA0FFQiCWhJuys9o0gGPanBip2jc8Xmm%2BHoTpdG%2BUKUVxe0oTFIMsGIZ3wupQjPq65HpGHQYr8u8YZHXK2CZD9HcHYb7hpzPL3vGpU3H9%2Fx0WfJ9fzdNdz%2Fm292D21NJiwD%2FuBJukODdRzaJJhKjaIlcMsuw1DFV3uUgqaRC4k62TlCbI96GmG%2BzBZjfCVXsgnFoTpECRvIygdY2kV737125YUtCNmLj%2BlCUPjJMq28oyQ9qpEJrLcSP98wleIM3JiZwyrenOaT6OZ2GMUxERet%2FluJKt23IKt65mnbYc3XRJ%2BdZIde3i0f4Sgfe7OBEW%2BTu1NO3z3MTSGEvHZp30vAmS3K%2BsiwNSQpL%2FoVU5A7sQJOxz8NxypnH2gCqpJP%2FCZkCW5xX5X%2BnQ2Blgs%2FilLJhKp%2FXdRvef1YgycZagwW1B761n%2BwGRU%2FtP7es8Wymn%2BHQAL%2F5LCroR02Qpn2fuSDA6oJS2PpbRlSoq5cD51eyCk7VFn5HuT1F6KYuLbvvKwfEDXtVjTbDp8AaL4wJ8A1bNO%2FOlEgaNShsJct07oU6C%2FTKzMF6muMFeujvN%2FGFD%2FLShapGAK3LYJdPjlycgaWcmWjFZojF%2FMbDzlbFtmLvgx7pqFwZpYe0QFnekMNfqhcEGOqUBR6%2B2K3%2BXpThEdkc55LdbzvB%2ByYnsCt27M0pF1JU%2FxsAOLBAmNoTibJX0Wq%2FTTwO2Rygvcd6ayEHWtjUbew%2Fr2K8vkXj3PVvZRpkB0mxWqWS75b6iynoqTGhimdEZz941brB%2BeqOzqAUgkWGQQU67H2oCQWdHR4xq5HTe4I3IGzq1aLZVtHYffF98oGfrAvTwOguXB2qy0T4x3oz9%2BqmhxFx3UsNQ&X-Amz-Signature=73a93cebb6fa6bec24bbd8c212ef77f4f91744f3377e2d096d0f6a259266ec0f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
