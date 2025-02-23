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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NW77CL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVGGD6dB1MEcRYUMGpo6NP4AXlxcMZ1rcz%2B89lE%2BQDgAIgI%2FUQB9ZPFa83Bfznx9draLO17P7gCIg5A%2FRlGQGVReEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPW5vW89%2FfNb2UoOTCrcA8hsc6FLGnx1Gxgq9s%2Bl7lukSsjIAaIOdD4ArYOaI3DutuEwVxPixPb4bKqoVc7Sb3K3LKbYcgaZ89iunhUbYqqOYBBzyCyzFE9PtWwe7oRWTol%2F315z5VqhSZP1RRQfFKIlTD9vkGXGjdqN8ZfnqfxRZrg2PVGD4pKzpDHcpf9Fz5G20YH51VFFauDy5pAyHtHidoIqviIavC7iwbUxY5G5wrXKApiwlTPZzs64N5TGAT4Xk9FY66CG7npSXun2Zozp5pYsZjp70jcMB%2FnoO3OYlCQnM%2BKLkSRHqL1FOFgxjtNUyRhh%2BSB0aFvsbFcix9dypQjOKTX8RAwkbjprmhDMt5eWQ8vNMvDJShbfxFrkmLvZUlfh3d%2FmJw9DSgUV43T4JO0rG96NLd91N05PFDO5Ca%2BdaV32BXVdeOSL8gP9bZo0ou4Ov12VBZIqY1WK1RdE%2B2gP5UBPcCfIFlurcTMTOpsNlM99ojlEj6Ivazubr2PIOIek%2BmQwwuBawhW%2BbU9nMOJe9ArhHGDoHes8wFVnbAJKglW5SU2D950SMu0TKQtKdVH%2FGZfZy0xPA82URIBFRmBVB0o5uq%2FGI0aEuByq%2FuTzq0BgT8RggGaElMy5pQgd3PZoPgVLY8rTMND7670GOqUBZEj%2FXea4dttWkPqIiDpaQAesLTJOso05l2qCtSoXeyxPWTsP7j79I%2Fn0G0%2FSH84XPkOXnR%2FNz3B5pAZAUoVSCFnnSoKUC8Sph0UtmS3acgLMXqMlAPznWrm%2B9Qs4qn6F9KTw3TCVKZXQ6gvTAxubYh1eAlqEeDBHTSQ2qz1lSHuEVuKyVCTQAsSKFSy%2B4MGhuw5QAQCq2bV%2F6dtFH50gLCO1r69n&X-Amz-Signature=443f03e6b2196f27e6d89ca9e4171514ca9960885ac472e45d5ac31a8f13125e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NW77CL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVGGD6dB1MEcRYUMGpo6NP4AXlxcMZ1rcz%2B89lE%2BQDgAIgI%2FUQB9ZPFa83Bfznx9draLO17P7gCIg5A%2FRlGQGVReEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPW5vW89%2FfNb2UoOTCrcA8hsc6FLGnx1Gxgq9s%2Bl7lukSsjIAaIOdD4ArYOaI3DutuEwVxPixPb4bKqoVc7Sb3K3LKbYcgaZ89iunhUbYqqOYBBzyCyzFE9PtWwe7oRWTol%2F315z5VqhSZP1RRQfFKIlTD9vkGXGjdqN8ZfnqfxRZrg2PVGD4pKzpDHcpf9Fz5G20YH51VFFauDy5pAyHtHidoIqviIavC7iwbUxY5G5wrXKApiwlTPZzs64N5TGAT4Xk9FY66CG7npSXun2Zozp5pYsZjp70jcMB%2FnoO3OYlCQnM%2BKLkSRHqL1FOFgxjtNUyRhh%2BSB0aFvsbFcix9dypQjOKTX8RAwkbjprmhDMt5eWQ8vNMvDJShbfxFrkmLvZUlfh3d%2FmJw9DSgUV43T4JO0rG96NLd91N05PFDO5Ca%2BdaV32BXVdeOSL8gP9bZo0ou4Ov12VBZIqY1WK1RdE%2B2gP5UBPcCfIFlurcTMTOpsNlM99ojlEj6Ivazubr2PIOIek%2BmQwwuBawhW%2BbU9nMOJe9ArhHGDoHes8wFVnbAJKglW5SU2D950SMu0TKQtKdVH%2FGZfZy0xPA82URIBFRmBVB0o5uq%2FGI0aEuByq%2FuTzq0BgT8RggGaElMy5pQgd3PZoPgVLY8rTMND7670GOqUBZEj%2FXea4dttWkPqIiDpaQAesLTJOso05l2qCtSoXeyxPWTsP7j79I%2Fn0G0%2FSH84XPkOXnR%2FNz3B5pAZAUoVSCFnnSoKUC8Sph0UtmS3acgLMXqMlAPznWrm%2B9Qs4qn6F9KTw3TCVKZXQ6gvTAxubYh1eAlqEeDBHTSQ2qz1lSHuEVuKyVCTQAsSKFSy%2B4MGhuw5QAQCq2bV%2F6dtFH50gLCO1r69n&X-Amz-Signature=301688d1e363bf91964d6c128db1a641b67cf3fada2489b4a6e954ca734a5f46&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NW77CL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVGGD6dB1MEcRYUMGpo6NP4AXlxcMZ1rcz%2B89lE%2BQDgAIgI%2FUQB9ZPFa83Bfznx9draLO17P7gCIg5A%2FRlGQGVReEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPW5vW89%2FfNb2UoOTCrcA8hsc6FLGnx1Gxgq9s%2Bl7lukSsjIAaIOdD4ArYOaI3DutuEwVxPixPb4bKqoVc7Sb3K3LKbYcgaZ89iunhUbYqqOYBBzyCyzFE9PtWwe7oRWTol%2F315z5VqhSZP1RRQfFKIlTD9vkGXGjdqN8ZfnqfxRZrg2PVGD4pKzpDHcpf9Fz5G20YH51VFFauDy5pAyHtHidoIqviIavC7iwbUxY5G5wrXKApiwlTPZzs64N5TGAT4Xk9FY66CG7npSXun2Zozp5pYsZjp70jcMB%2FnoO3OYlCQnM%2BKLkSRHqL1FOFgxjtNUyRhh%2BSB0aFvsbFcix9dypQjOKTX8RAwkbjprmhDMt5eWQ8vNMvDJShbfxFrkmLvZUlfh3d%2FmJw9DSgUV43T4JO0rG96NLd91N05PFDO5Ca%2BdaV32BXVdeOSL8gP9bZo0ou4Ov12VBZIqY1WK1RdE%2B2gP5UBPcCfIFlurcTMTOpsNlM99ojlEj6Ivazubr2PIOIek%2BmQwwuBawhW%2BbU9nMOJe9ArhHGDoHes8wFVnbAJKglW5SU2D950SMu0TKQtKdVH%2FGZfZy0xPA82URIBFRmBVB0o5uq%2FGI0aEuByq%2FuTzq0BgT8RggGaElMy5pQgd3PZoPgVLY8rTMND7670GOqUBZEj%2FXea4dttWkPqIiDpaQAesLTJOso05l2qCtSoXeyxPWTsP7j79I%2Fn0G0%2FSH84XPkOXnR%2FNz3B5pAZAUoVSCFnnSoKUC8Sph0UtmS3acgLMXqMlAPznWrm%2B9Qs4qn6F9KTw3TCVKZXQ6gvTAxubYh1eAlqEeDBHTSQ2qz1lSHuEVuKyVCTQAsSKFSy%2B4MGhuw5QAQCq2bV%2F6dtFH50gLCO1r69n&X-Amz-Signature=325143812fb3641455689d76c9fefcd5154663a506da66e6b02c356a5302e0bf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NW77CL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVGGD6dB1MEcRYUMGpo6NP4AXlxcMZ1rcz%2B89lE%2BQDgAIgI%2FUQB9ZPFa83Bfznx9draLO17P7gCIg5A%2FRlGQGVReEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPW5vW89%2FfNb2UoOTCrcA8hsc6FLGnx1Gxgq9s%2Bl7lukSsjIAaIOdD4ArYOaI3DutuEwVxPixPb4bKqoVc7Sb3K3LKbYcgaZ89iunhUbYqqOYBBzyCyzFE9PtWwe7oRWTol%2F315z5VqhSZP1RRQfFKIlTD9vkGXGjdqN8ZfnqfxRZrg2PVGD4pKzpDHcpf9Fz5G20YH51VFFauDy5pAyHtHidoIqviIavC7iwbUxY5G5wrXKApiwlTPZzs64N5TGAT4Xk9FY66CG7npSXun2Zozp5pYsZjp70jcMB%2FnoO3OYlCQnM%2BKLkSRHqL1FOFgxjtNUyRhh%2BSB0aFvsbFcix9dypQjOKTX8RAwkbjprmhDMt5eWQ8vNMvDJShbfxFrkmLvZUlfh3d%2FmJw9DSgUV43T4JO0rG96NLd91N05PFDO5Ca%2BdaV32BXVdeOSL8gP9bZo0ou4Ov12VBZIqY1WK1RdE%2B2gP5UBPcCfIFlurcTMTOpsNlM99ojlEj6Ivazubr2PIOIek%2BmQwwuBawhW%2BbU9nMOJe9ArhHGDoHes8wFVnbAJKglW5SU2D950SMu0TKQtKdVH%2FGZfZy0xPA82URIBFRmBVB0o5uq%2FGI0aEuByq%2FuTzq0BgT8RggGaElMy5pQgd3PZoPgVLY8rTMND7670GOqUBZEj%2FXea4dttWkPqIiDpaQAesLTJOso05l2qCtSoXeyxPWTsP7j79I%2Fn0G0%2FSH84XPkOXnR%2FNz3B5pAZAUoVSCFnnSoKUC8Sph0UtmS3acgLMXqMlAPznWrm%2B9Qs4qn6F9KTw3TCVKZXQ6gvTAxubYh1eAlqEeDBHTSQ2qz1lSHuEVuKyVCTQAsSKFSy%2B4MGhuw5QAQCq2bV%2F6dtFH50gLCO1r69n&X-Amz-Signature=bc073e0291a95fa1484d7b5a427ccfab59b0cfb0ef2eef6b456828b78c1c6cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NW77CL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVGGD6dB1MEcRYUMGpo6NP4AXlxcMZ1rcz%2B89lE%2BQDgAIgI%2FUQB9ZPFa83Bfznx9draLO17P7gCIg5A%2FRlGQGVReEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPW5vW89%2FfNb2UoOTCrcA8hsc6FLGnx1Gxgq9s%2Bl7lukSsjIAaIOdD4ArYOaI3DutuEwVxPixPb4bKqoVc7Sb3K3LKbYcgaZ89iunhUbYqqOYBBzyCyzFE9PtWwe7oRWTol%2F315z5VqhSZP1RRQfFKIlTD9vkGXGjdqN8ZfnqfxRZrg2PVGD4pKzpDHcpf9Fz5G20YH51VFFauDy5pAyHtHidoIqviIavC7iwbUxY5G5wrXKApiwlTPZzs64N5TGAT4Xk9FY66CG7npSXun2Zozp5pYsZjp70jcMB%2FnoO3OYlCQnM%2BKLkSRHqL1FOFgxjtNUyRhh%2BSB0aFvsbFcix9dypQjOKTX8RAwkbjprmhDMt5eWQ8vNMvDJShbfxFrkmLvZUlfh3d%2FmJw9DSgUV43T4JO0rG96NLd91N05PFDO5Ca%2BdaV32BXVdeOSL8gP9bZo0ou4Ov12VBZIqY1WK1RdE%2B2gP5UBPcCfIFlurcTMTOpsNlM99ojlEj6Ivazubr2PIOIek%2BmQwwuBawhW%2BbU9nMOJe9ArhHGDoHes8wFVnbAJKglW5SU2D950SMu0TKQtKdVH%2FGZfZy0xPA82URIBFRmBVB0o5uq%2FGI0aEuByq%2FuTzq0BgT8RggGaElMy5pQgd3PZoPgVLY8rTMND7670GOqUBZEj%2FXea4dttWkPqIiDpaQAesLTJOso05l2qCtSoXeyxPWTsP7j79I%2Fn0G0%2FSH84XPkOXnR%2FNz3B5pAZAUoVSCFnnSoKUC8Sph0UtmS3acgLMXqMlAPznWrm%2B9Qs4qn6F9KTw3TCVKZXQ6gvTAxubYh1eAlqEeDBHTSQ2qz1lSHuEVuKyVCTQAsSKFSy%2B4MGhuw5QAQCq2bV%2F6dtFH50gLCO1r69n&X-Amz-Signature=eb955b26e0fd37f62969f0fa8dd526888acb728dabb184ef5432d67cd14fda3f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NW77CL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVGGD6dB1MEcRYUMGpo6NP4AXlxcMZ1rcz%2B89lE%2BQDgAIgI%2FUQB9ZPFa83Bfznx9draLO17P7gCIg5A%2FRlGQGVReEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPW5vW89%2FfNb2UoOTCrcA8hsc6FLGnx1Gxgq9s%2Bl7lukSsjIAaIOdD4ArYOaI3DutuEwVxPixPb4bKqoVc7Sb3K3LKbYcgaZ89iunhUbYqqOYBBzyCyzFE9PtWwe7oRWTol%2F315z5VqhSZP1RRQfFKIlTD9vkGXGjdqN8ZfnqfxRZrg2PVGD4pKzpDHcpf9Fz5G20YH51VFFauDy5pAyHtHidoIqviIavC7iwbUxY5G5wrXKApiwlTPZzs64N5TGAT4Xk9FY66CG7npSXun2Zozp5pYsZjp70jcMB%2FnoO3OYlCQnM%2BKLkSRHqL1FOFgxjtNUyRhh%2BSB0aFvsbFcix9dypQjOKTX8RAwkbjprmhDMt5eWQ8vNMvDJShbfxFrkmLvZUlfh3d%2FmJw9DSgUV43T4JO0rG96NLd91N05PFDO5Ca%2BdaV32BXVdeOSL8gP9bZo0ou4Ov12VBZIqY1WK1RdE%2B2gP5UBPcCfIFlurcTMTOpsNlM99ojlEj6Ivazubr2PIOIek%2BmQwwuBawhW%2BbU9nMOJe9ArhHGDoHes8wFVnbAJKglW5SU2D950SMu0TKQtKdVH%2FGZfZy0xPA82URIBFRmBVB0o5uq%2FGI0aEuByq%2FuTzq0BgT8RggGaElMy5pQgd3PZoPgVLY8rTMND7670GOqUBZEj%2FXea4dttWkPqIiDpaQAesLTJOso05l2qCtSoXeyxPWTsP7j79I%2Fn0G0%2FSH84XPkOXnR%2FNz3B5pAZAUoVSCFnnSoKUC8Sph0UtmS3acgLMXqMlAPznWrm%2B9Qs4qn6F9KTw3TCVKZXQ6gvTAxubYh1eAlqEeDBHTSQ2qz1lSHuEVuKyVCTQAsSKFSy%2B4MGhuw5QAQCq2bV%2F6dtFH50gLCO1r69n&X-Amz-Signature=b9224ade742caf73f9224b4f1dc400b4365e9247bf13773051973b91c666fa04&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NW77CL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVGGD6dB1MEcRYUMGpo6NP4AXlxcMZ1rcz%2B89lE%2BQDgAIgI%2FUQB9ZPFa83Bfznx9draLO17P7gCIg5A%2FRlGQGVReEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPW5vW89%2FfNb2UoOTCrcA8hsc6FLGnx1Gxgq9s%2Bl7lukSsjIAaIOdD4ArYOaI3DutuEwVxPixPb4bKqoVc7Sb3K3LKbYcgaZ89iunhUbYqqOYBBzyCyzFE9PtWwe7oRWTol%2F315z5VqhSZP1RRQfFKIlTD9vkGXGjdqN8ZfnqfxRZrg2PVGD4pKzpDHcpf9Fz5G20YH51VFFauDy5pAyHtHidoIqviIavC7iwbUxY5G5wrXKApiwlTPZzs64N5TGAT4Xk9FY66CG7npSXun2Zozp5pYsZjp70jcMB%2FnoO3OYlCQnM%2BKLkSRHqL1FOFgxjtNUyRhh%2BSB0aFvsbFcix9dypQjOKTX8RAwkbjprmhDMt5eWQ8vNMvDJShbfxFrkmLvZUlfh3d%2FmJw9DSgUV43T4JO0rG96NLd91N05PFDO5Ca%2BdaV32BXVdeOSL8gP9bZo0ou4Ov12VBZIqY1WK1RdE%2B2gP5UBPcCfIFlurcTMTOpsNlM99ojlEj6Ivazubr2PIOIek%2BmQwwuBawhW%2BbU9nMOJe9ArhHGDoHes8wFVnbAJKglW5SU2D950SMu0TKQtKdVH%2FGZfZy0xPA82URIBFRmBVB0o5uq%2FGI0aEuByq%2FuTzq0BgT8RggGaElMy5pQgd3PZoPgVLY8rTMND7670GOqUBZEj%2FXea4dttWkPqIiDpaQAesLTJOso05l2qCtSoXeyxPWTsP7j79I%2Fn0G0%2FSH84XPkOXnR%2FNz3B5pAZAUoVSCFnnSoKUC8Sph0UtmS3acgLMXqMlAPznWrm%2B9Qs4qn6F9KTw3TCVKZXQ6gvTAxubYh1eAlqEeDBHTSQ2qz1lSHuEVuKyVCTQAsSKFSy%2B4MGhuw5QAQCq2bV%2F6dtFH50gLCO1r69n&X-Amz-Signature=a29b992549dc88c4e2cb48ed27a430937fd69cdf5a537b6e1db395e43ac49c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
