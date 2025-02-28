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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W343RGIR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEbP%2FrzwK5SVe1V5czZexlMEqsvL68HCK%2Bc8qVYcZzC%2FAiEAv7QAdJ4Ll4msv0v4ZWHIughwUtWsw5P5DchLqafpMNUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhXkV4amCMU1t%2BceCrcA332zfPJSzJKiVMP7wcdNFrDpGvNgC%2FLi1NstfE5BqnhmYBX8lh%2B1KqXv5Vzuei%2B4qPaizmO8Ga8efe1PS1JO9C0zqt5zcYQuTEV78l9A6bXN%2B3emGHQ4W1yhGLVgUOhbc%2Fufiy4yqQPRZ82ARR%2FrJhb%2FPcmWzA64t3%2B%2F7REvHNccwUgnm1tg58uDBfTo9n6PV7yD2RYgboL1gJCeBFKTt0XJG3e551LhH%2FXlhbDa3Gv0aRJyPeMeDKN9xzpcqqEVqMgEU4DdUJ0asGsE9aooP4G9SSVW%2BAiaW8elNXmNag2sAcWzlBOR2U7rEUAipFjsIdDvxAe5JGdTOYkVqnDZKWFHK4QgqAGd36nBNaVW%2FkzQopXAU8UioVdx1BOqJuvklQZizdGnP05%2BPTUNBVASZB6RC%2FeZUtCfPwRLhsB476WZ9zVtW87lXqekA5xUQakS9jAjNwXY%2FknCPkNf98N2Rz%2F08%2BnnmrjG8H9v20mA58PVRJKZ5hAq7gfl9kW84xtJP37fTVY7XXCNcGaVQ01kLeB%2BeNAUZoiu%2FHy3qYLV2A3d2W%2Fp%2BDTw4Wqro1wDN6h%2BK8cS%2B3chh3o%2BvVdj8zB3PaMaoLBMzpX0IXPHUsWJyf2urQcG8SV31GERxvAMKjShL4GOqUBiE7Dnvk7JjgIR3wGR%2B0u%2F%2FylBJlN2qNEoTzcFIByGioQ4SH7vxGrgNGceg3qSrtu5lYKTiA5rcKPKnf6eyWDFcNuGJwHax1ZU58r0283HjDf2qBPbKo7AgXVOrmGvi2MHQk%2Bci05pKJjLiMzosP2BzbPouDxhq6TIeqYezhYggZVIsMZhSl5Wrw0SoO39I%2FBioBYMmtMhgTI3sZ%2B1SVPyXtLhZzX&X-Amz-Signature=83aa35f168a59af123de287e4c4d22d974aab49dbb7e7d4092e3c0da12a10da2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W343RGIR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEbP%2FrzwK5SVe1V5czZexlMEqsvL68HCK%2Bc8qVYcZzC%2FAiEAv7QAdJ4Ll4msv0v4ZWHIughwUtWsw5P5DchLqafpMNUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhXkV4amCMU1t%2BceCrcA332zfPJSzJKiVMP7wcdNFrDpGvNgC%2FLi1NstfE5BqnhmYBX8lh%2B1KqXv5Vzuei%2B4qPaizmO8Ga8efe1PS1JO9C0zqt5zcYQuTEV78l9A6bXN%2B3emGHQ4W1yhGLVgUOhbc%2Fufiy4yqQPRZ82ARR%2FrJhb%2FPcmWzA64t3%2B%2F7REvHNccwUgnm1tg58uDBfTo9n6PV7yD2RYgboL1gJCeBFKTt0XJG3e551LhH%2FXlhbDa3Gv0aRJyPeMeDKN9xzpcqqEVqMgEU4DdUJ0asGsE9aooP4G9SSVW%2BAiaW8elNXmNag2sAcWzlBOR2U7rEUAipFjsIdDvxAe5JGdTOYkVqnDZKWFHK4QgqAGd36nBNaVW%2FkzQopXAU8UioVdx1BOqJuvklQZizdGnP05%2BPTUNBVASZB6RC%2FeZUtCfPwRLhsB476WZ9zVtW87lXqekA5xUQakS9jAjNwXY%2FknCPkNf98N2Rz%2F08%2BnnmrjG8H9v20mA58PVRJKZ5hAq7gfl9kW84xtJP37fTVY7XXCNcGaVQ01kLeB%2BeNAUZoiu%2FHy3qYLV2A3d2W%2Fp%2BDTw4Wqro1wDN6h%2BK8cS%2B3chh3o%2BvVdj8zB3PaMaoLBMzpX0IXPHUsWJyf2urQcG8SV31GERxvAMKjShL4GOqUBiE7Dnvk7JjgIR3wGR%2B0u%2F%2FylBJlN2qNEoTzcFIByGioQ4SH7vxGrgNGceg3qSrtu5lYKTiA5rcKPKnf6eyWDFcNuGJwHax1ZU58r0283HjDf2qBPbKo7AgXVOrmGvi2MHQk%2Bci05pKJjLiMzosP2BzbPouDxhq6TIeqYezhYggZVIsMZhSl5Wrw0SoO39I%2FBioBYMmtMhgTI3sZ%2B1SVPyXtLhZzX&X-Amz-Signature=139a8bc3d8ff042ea19d0603223e0db414d3024cef6e478836f33f8aa57a61c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W343RGIR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEbP%2FrzwK5SVe1V5czZexlMEqsvL68HCK%2Bc8qVYcZzC%2FAiEAv7QAdJ4Ll4msv0v4ZWHIughwUtWsw5P5DchLqafpMNUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhXkV4amCMU1t%2BceCrcA332zfPJSzJKiVMP7wcdNFrDpGvNgC%2FLi1NstfE5BqnhmYBX8lh%2B1KqXv5Vzuei%2B4qPaizmO8Ga8efe1PS1JO9C0zqt5zcYQuTEV78l9A6bXN%2B3emGHQ4W1yhGLVgUOhbc%2Fufiy4yqQPRZ82ARR%2FrJhb%2FPcmWzA64t3%2B%2F7REvHNccwUgnm1tg58uDBfTo9n6PV7yD2RYgboL1gJCeBFKTt0XJG3e551LhH%2FXlhbDa3Gv0aRJyPeMeDKN9xzpcqqEVqMgEU4DdUJ0asGsE9aooP4G9SSVW%2BAiaW8elNXmNag2sAcWzlBOR2U7rEUAipFjsIdDvxAe5JGdTOYkVqnDZKWFHK4QgqAGd36nBNaVW%2FkzQopXAU8UioVdx1BOqJuvklQZizdGnP05%2BPTUNBVASZB6RC%2FeZUtCfPwRLhsB476WZ9zVtW87lXqekA5xUQakS9jAjNwXY%2FknCPkNf98N2Rz%2F08%2BnnmrjG8H9v20mA58PVRJKZ5hAq7gfl9kW84xtJP37fTVY7XXCNcGaVQ01kLeB%2BeNAUZoiu%2FHy3qYLV2A3d2W%2Fp%2BDTw4Wqro1wDN6h%2BK8cS%2B3chh3o%2BvVdj8zB3PaMaoLBMzpX0IXPHUsWJyf2urQcG8SV31GERxvAMKjShL4GOqUBiE7Dnvk7JjgIR3wGR%2B0u%2F%2FylBJlN2qNEoTzcFIByGioQ4SH7vxGrgNGceg3qSrtu5lYKTiA5rcKPKnf6eyWDFcNuGJwHax1ZU58r0283HjDf2qBPbKo7AgXVOrmGvi2MHQk%2Bci05pKJjLiMzosP2BzbPouDxhq6TIeqYezhYggZVIsMZhSl5Wrw0SoO39I%2FBioBYMmtMhgTI3sZ%2B1SVPyXtLhZzX&X-Amz-Signature=54caa048a678ab552a454c0ffc8fdc8e8dae721b4d3e5840aaf88edbc7d14907&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W343RGIR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEbP%2FrzwK5SVe1V5czZexlMEqsvL68HCK%2Bc8qVYcZzC%2FAiEAv7QAdJ4Ll4msv0v4ZWHIughwUtWsw5P5DchLqafpMNUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhXkV4amCMU1t%2BceCrcA332zfPJSzJKiVMP7wcdNFrDpGvNgC%2FLi1NstfE5BqnhmYBX8lh%2B1KqXv5Vzuei%2B4qPaizmO8Ga8efe1PS1JO9C0zqt5zcYQuTEV78l9A6bXN%2B3emGHQ4W1yhGLVgUOhbc%2Fufiy4yqQPRZ82ARR%2FrJhb%2FPcmWzA64t3%2B%2F7REvHNccwUgnm1tg58uDBfTo9n6PV7yD2RYgboL1gJCeBFKTt0XJG3e551LhH%2FXlhbDa3Gv0aRJyPeMeDKN9xzpcqqEVqMgEU4DdUJ0asGsE9aooP4G9SSVW%2BAiaW8elNXmNag2sAcWzlBOR2U7rEUAipFjsIdDvxAe5JGdTOYkVqnDZKWFHK4QgqAGd36nBNaVW%2FkzQopXAU8UioVdx1BOqJuvklQZizdGnP05%2BPTUNBVASZB6RC%2FeZUtCfPwRLhsB476WZ9zVtW87lXqekA5xUQakS9jAjNwXY%2FknCPkNf98N2Rz%2F08%2BnnmrjG8H9v20mA58PVRJKZ5hAq7gfl9kW84xtJP37fTVY7XXCNcGaVQ01kLeB%2BeNAUZoiu%2FHy3qYLV2A3d2W%2Fp%2BDTw4Wqro1wDN6h%2BK8cS%2B3chh3o%2BvVdj8zB3PaMaoLBMzpX0IXPHUsWJyf2urQcG8SV31GERxvAMKjShL4GOqUBiE7Dnvk7JjgIR3wGR%2B0u%2F%2FylBJlN2qNEoTzcFIByGioQ4SH7vxGrgNGceg3qSrtu5lYKTiA5rcKPKnf6eyWDFcNuGJwHax1ZU58r0283HjDf2qBPbKo7AgXVOrmGvi2MHQk%2Bci05pKJjLiMzosP2BzbPouDxhq6TIeqYezhYggZVIsMZhSl5Wrw0SoO39I%2FBioBYMmtMhgTI3sZ%2B1SVPyXtLhZzX&X-Amz-Signature=884fd4e95452e682169479e702b371b19ae44755ff198f9bec08fa5923acfb43&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W343RGIR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEbP%2FrzwK5SVe1V5czZexlMEqsvL68HCK%2Bc8qVYcZzC%2FAiEAv7QAdJ4Ll4msv0v4ZWHIughwUtWsw5P5DchLqafpMNUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhXkV4amCMU1t%2BceCrcA332zfPJSzJKiVMP7wcdNFrDpGvNgC%2FLi1NstfE5BqnhmYBX8lh%2B1KqXv5Vzuei%2B4qPaizmO8Ga8efe1PS1JO9C0zqt5zcYQuTEV78l9A6bXN%2B3emGHQ4W1yhGLVgUOhbc%2Fufiy4yqQPRZ82ARR%2FrJhb%2FPcmWzA64t3%2B%2F7REvHNccwUgnm1tg58uDBfTo9n6PV7yD2RYgboL1gJCeBFKTt0XJG3e551LhH%2FXlhbDa3Gv0aRJyPeMeDKN9xzpcqqEVqMgEU4DdUJ0asGsE9aooP4G9SSVW%2BAiaW8elNXmNag2sAcWzlBOR2U7rEUAipFjsIdDvxAe5JGdTOYkVqnDZKWFHK4QgqAGd36nBNaVW%2FkzQopXAU8UioVdx1BOqJuvklQZizdGnP05%2BPTUNBVASZB6RC%2FeZUtCfPwRLhsB476WZ9zVtW87lXqekA5xUQakS9jAjNwXY%2FknCPkNf98N2Rz%2F08%2BnnmrjG8H9v20mA58PVRJKZ5hAq7gfl9kW84xtJP37fTVY7XXCNcGaVQ01kLeB%2BeNAUZoiu%2FHy3qYLV2A3d2W%2Fp%2BDTw4Wqro1wDN6h%2BK8cS%2B3chh3o%2BvVdj8zB3PaMaoLBMzpX0IXPHUsWJyf2urQcG8SV31GERxvAMKjShL4GOqUBiE7Dnvk7JjgIR3wGR%2B0u%2F%2FylBJlN2qNEoTzcFIByGioQ4SH7vxGrgNGceg3qSrtu5lYKTiA5rcKPKnf6eyWDFcNuGJwHax1ZU58r0283HjDf2qBPbKo7AgXVOrmGvi2MHQk%2Bci05pKJjLiMzosP2BzbPouDxhq6TIeqYezhYggZVIsMZhSl5Wrw0SoO39I%2FBioBYMmtMhgTI3sZ%2B1SVPyXtLhZzX&X-Amz-Signature=7d1e7d13219ef6ebbed4218d20cc962fac9350e3b053e24f41f1073c51eebee3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W343RGIR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEbP%2FrzwK5SVe1V5czZexlMEqsvL68HCK%2Bc8qVYcZzC%2FAiEAv7QAdJ4Ll4msv0v4ZWHIughwUtWsw5P5DchLqafpMNUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhXkV4amCMU1t%2BceCrcA332zfPJSzJKiVMP7wcdNFrDpGvNgC%2FLi1NstfE5BqnhmYBX8lh%2B1KqXv5Vzuei%2B4qPaizmO8Ga8efe1PS1JO9C0zqt5zcYQuTEV78l9A6bXN%2B3emGHQ4W1yhGLVgUOhbc%2Fufiy4yqQPRZ82ARR%2FrJhb%2FPcmWzA64t3%2B%2F7REvHNccwUgnm1tg58uDBfTo9n6PV7yD2RYgboL1gJCeBFKTt0XJG3e551LhH%2FXlhbDa3Gv0aRJyPeMeDKN9xzpcqqEVqMgEU4DdUJ0asGsE9aooP4G9SSVW%2BAiaW8elNXmNag2sAcWzlBOR2U7rEUAipFjsIdDvxAe5JGdTOYkVqnDZKWFHK4QgqAGd36nBNaVW%2FkzQopXAU8UioVdx1BOqJuvklQZizdGnP05%2BPTUNBVASZB6RC%2FeZUtCfPwRLhsB476WZ9zVtW87lXqekA5xUQakS9jAjNwXY%2FknCPkNf98N2Rz%2F08%2BnnmrjG8H9v20mA58PVRJKZ5hAq7gfl9kW84xtJP37fTVY7XXCNcGaVQ01kLeB%2BeNAUZoiu%2FHy3qYLV2A3d2W%2Fp%2BDTw4Wqro1wDN6h%2BK8cS%2B3chh3o%2BvVdj8zB3PaMaoLBMzpX0IXPHUsWJyf2urQcG8SV31GERxvAMKjShL4GOqUBiE7Dnvk7JjgIR3wGR%2B0u%2F%2FylBJlN2qNEoTzcFIByGioQ4SH7vxGrgNGceg3qSrtu5lYKTiA5rcKPKnf6eyWDFcNuGJwHax1ZU58r0283HjDf2qBPbKo7AgXVOrmGvi2MHQk%2Bci05pKJjLiMzosP2BzbPouDxhq6TIeqYezhYggZVIsMZhSl5Wrw0SoO39I%2FBioBYMmtMhgTI3sZ%2B1SVPyXtLhZzX&X-Amz-Signature=a2b0f8b564c5b59db1dcdecaaa581a5467fd7295a3dc9c627cfc282b58c3496f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W343RGIR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEbP%2FrzwK5SVe1V5czZexlMEqsvL68HCK%2Bc8qVYcZzC%2FAiEAv7QAdJ4Ll4msv0v4ZWHIughwUtWsw5P5DchLqafpMNUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhXkV4amCMU1t%2BceCrcA332zfPJSzJKiVMP7wcdNFrDpGvNgC%2FLi1NstfE5BqnhmYBX8lh%2B1KqXv5Vzuei%2B4qPaizmO8Ga8efe1PS1JO9C0zqt5zcYQuTEV78l9A6bXN%2B3emGHQ4W1yhGLVgUOhbc%2Fufiy4yqQPRZ82ARR%2FrJhb%2FPcmWzA64t3%2B%2F7REvHNccwUgnm1tg58uDBfTo9n6PV7yD2RYgboL1gJCeBFKTt0XJG3e551LhH%2FXlhbDa3Gv0aRJyPeMeDKN9xzpcqqEVqMgEU4DdUJ0asGsE9aooP4G9SSVW%2BAiaW8elNXmNag2sAcWzlBOR2U7rEUAipFjsIdDvxAe5JGdTOYkVqnDZKWFHK4QgqAGd36nBNaVW%2FkzQopXAU8UioVdx1BOqJuvklQZizdGnP05%2BPTUNBVASZB6RC%2FeZUtCfPwRLhsB476WZ9zVtW87lXqekA5xUQakS9jAjNwXY%2FknCPkNf98N2Rz%2F08%2BnnmrjG8H9v20mA58PVRJKZ5hAq7gfl9kW84xtJP37fTVY7XXCNcGaVQ01kLeB%2BeNAUZoiu%2FHy3qYLV2A3d2W%2Fp%2BDTw4Wqro1wDN6h%2BK8cS%2B3chh3o%2BvVdj8zB3PaMaoLBMzpX0IXPHUsWJyf2urQcG8SV31GERxvAMKjShL4GOqUBiE7Dnvk7JjgIR3wGR%2B0u%2F%2FylBJlN2qNEoTzcFIByGioQ4SH7vxGrgNGceg3qSrtu5lYKTiA5rcKPKnf6eyWDFcNuGJwHax1ZU58r0283HjDf2qBPbKo7AgXVOrmGvi2MHQk%2Bci05pKJjLiMzosP2BzbPouDxhq6TIeqYezhYggZVIsMZhSl5Wrw0SoO39I%2FBioBYMmtMhgTI3sZ%2B1SVPyXtLhZzX&X-Amz-Signature=3e6b8364ccb9f4fc5131cde2ba120a64723563106ccfaa15b708d64e76bb6d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
