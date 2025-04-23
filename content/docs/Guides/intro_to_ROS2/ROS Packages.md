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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSTTR77%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA%2FrrV%2BfBUDxCuEsOwSsKoSWlhkwlFttQeA2wKH8Zm5kAiACeSBWRwgsL8%2BvwbXvQMFXIQv8ahLnGmcVUovOiiecmSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FScQlI03mr602LONKtwDOptFevRP9waIs5cKLH878AFYVguIczTApJlLZvuThkvzIjVNw6sj0002AqAEB4MOQXIJeRGyiI8GbM19njq8NuQaxiygcGlfiBsJvr4z5%2Fl%2FSh8HfvFykiKJ%2FpNfYXcph0XbFuoDnxboLL5PZnRxkICrmUZlJGmbsB%2B%2F8QlGdez7n0Org1sSwtrZ7x3aKMA1YzL9XdAHfWpljJj0QyyBr4WT0M3ZNJauw3603cWbNB8AyLtSFZzis5uRiGKTt%2FOVGYVGjP%2F2zOj5uDiMP7l0kM04VjWxYPyDBSluL0IOo%2Fnzv8v%2Bo0Fs1ymNI%2FT7psg%2F3FRVeKJn76POBTeC2vv0KFevNrsc3UjHC287djEUs1cjlKEL%2B%2Fnvd7ETCCLAgbxGhxpdrEcoZTsHI4kiykmooo%2BAwTBqajenrSlYFxR1WMB6RztYz5pUzCfA3iDAu7gg4u7RLRPCZ44DL5B1%2B76iCjMLu7zxUWVuRidu0dUbo3Xb0RNqsllrrGDNBow0YQQHyUUtvWLAL8G9XmLPzxRonKfeu2Jv0E1gc1fYd9IiVYyseHivOAWNBwMJxj1fjeMcRUf8rKCD%2BfVlBJjk8RjR2HA7sooYNMGA0LQns6gio0kSVUsTlG2EN%2FMKUs8wy42lwAY6pgGMTvh8XbU4bZKnkj0BFIRxrIjCHtF17gFFa03zmDNesnTZuJXIsr%2BcwDbwmSiAZsmuvI1sATnFJ8GSEk73H29UOdYT2qlWnu3vlL2lg%2FVr3CmBwOLD0k2mpV16mydpDB7bdoeR2cEgDEHa8vDNOiYBYzAthlb1%2FfOPq90%2Fp5%2FXRiHc3hnQOj%2B5kTOkCnqjdesm3vnKSumBm1hsGnM1hjHmNgmT8Tlw&X-Amz-Signature=0471b7e20c3c5213a436e7128b0130c5e025ffb895fd493c9e04b5368e7e880b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSTTR77%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA%2FrrV%2BfBUDxCuEsOwSsKoSWlhkwlFttQeA2wKH8Zm5kAiACeSBWRwgsL8%2BvwbXvQMFXIQv8ahLnGmcVUovOiiecmSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FScQlI03mr602LONKtwDOptFevRP9waIs5cKLH878AFYVguIczTApJlLZvuThkvzIjVNw6sj0002AqAEB4MOQXIJeRGyiI8GbM19njq8NuQaxiygcGlfiBsJvr4z5%2Fl%2FSh8HfvFykiKJ%2FpNfYXcph0XbFuoDnxboLL5PZnRxkICrmUZlJGmbsB%2B%2F8QlGdez7n0Org1sSwtrZ7x3aKMA1YzL9XdAHfWpljJj0QyyBr4WT0M3ZNJauw3603cWbNB8AyLtSFZzis5uRiGKTt%2FOVGYVGjP%2F2zOj5uDiMP7l0kM04VjWxYPyDBSluL0IOo%2Fnzv8v%2Bo0Fs1ymNI%2FT7psg%2F3FRVeKJn76POBTeC2vv0KFevNrsc3UjHC287djEUs1cjlKEL%2B%2Fnvd7ETCCLAgbxGhxpdrEcoZTsHI4kiykmooo%2BAwTBqajenrSlYFxR1WMB6RztYz5pUzCfA3iDAu7gg4u7RLRPCZ44DL5B1%2B76iCjMLu7zxUWVuRidu0dUbo3Xb0RNqsllrrGDNBow0YQQHyUUtvWLAL8G9XmLPzxRonKfeu2Jv0E1gc1fYd9IiVYyseHivOAWNBwMJxj1fjeMcRUf8rKCD%2BfVlBJjk8RjR2HA7sooYNMGA0LQns6gio0kSVUsTlG2EN%2FMKUs8wy42lwAY6pgGMTvh8XbU4bZKnkj0BFIRxrIjCHtF17gFFa03zmDNesnTZuJXIsr%2BcwDbwmSiAZsmuvI1sATnFJ8GSEk73H29UOdYT2qlWnu3vlL2lg%2FVr3CmBwOLD0k2mpV16mydpDB7bdoeR2cEgDEHa8vDNOiYBYzAthlb1%2FfOPq90%2Fp5%2FXRiHc3hnQOj%2B5kTOkCnqjdesm3vnKSumBm1hsGnM1hjHmNgmT8Tlw&X-Amz-Signature=15474a25cced1ef321922a1af02e5bd97b0726dbf5c1a84799ddc7b2d6549cea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSTTR77%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA%2FrrV%2BfBUDxCuEsOwSsKoSWlhkwlFttQeA2wKH8Zm5kAiACeSBWRwgsL8%2BvwbXvQMFXIQv8ahLnGmcVUovOiiecmSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FScQlI03mr602LONKtwDOptFevRP9waIs5cKLH878AFYVguIczTApJlLZvuThkvzIjVNw6sj0002AqAEB4MOQXIJeRGyiI8GbM19njq8NuQaxiygcGlfiBsJvr4z5%2Fl%2FSh8HfvFykiKJ%2FpNfYXcph0XbFuoDnxboLL5PZnRxkICrmUZlJGmbsB%2B%2F8QlGdez7n0Org1sSwtrZ7x3aKMA1YzL9XdAHfWpljJj0QyyBr4WT0M3ZNJauw3603cWbNB8AyLtSFZzis5uRiGKTt%2FOVGYVGjP%2F2zOj5uDiMP7l0kM04VjWxYPyDBSluL0IOo%2Fnzv8v%2Bo0Fs1ymNI%2FT7psg%2F3FRVeKJn76POBTeC2vv0KFevNrsc3UjHC287djEUs1cjlKEL%2B%2Fnvd7ETCCLAgbxGhxpdrEcoZTsHI4kiykmooo%2BAwTBqajenrSlYFxR1WMB6RztYz5pUzCfA3iDAu7gg4u7RLRPCZ44DL5B1%2B76iCjMLu7zxUWVuRidu0dUbo3Xb0RNqsllrrGDNBow0YQQHyUUtvWLAL8G9XmLPzxRonKfeu2Jv0E1gc1fYd9IiVYyseHivOAWNBwMJxj1fjeMcRUf8rKCD%2BfVlBJjk8RjR2HA7sooYNMGA0LQns6gio0kSVUsTlG2EN%2FMKUs8wy42lwAY6pgGMTvh8XbU4bZKnkj0BFIRxrIjCHtF17gFFa03zmDNesnTZuJXIsr%2BcwDbwmSiAZsmuvI1sATnFJ8GSEk73H29UOdYT2qlWnu3vlL2lg%2FVr3CmBwOLD0k2mpV16mydpDB7bdoeR2cEgDEHa8vDNOiYBYzAthlb1%2FfOPq90%2Fp5%2FXRiHc3hnQOj%2B5kTOkCnqjdesm3vnKSumBm1hsGnM1hjHmNgmT8Tlw&X-Amz-Signature=14c519d3baf9015bde17dbf32ac69f21379624f655cc166e68e7c5bd9a8e4047&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSTTR77%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA%2FrrV%2BfBUDxCuEsOwSsKoSWlhkwlFttQeA2wKH8Zm5kAiACeSBWRwgsL8%2BvwbXvQMFXIQv8ahLnGmcVUovOiiecmSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FScQlI03mr602LONKtwDOptFevRP9waIs5cKLH878AFYVguIczTApJlLZvuThkvzIjVNw6sj0002AqAEB4MOQXIJeRGyiI8GbM19njq8NuQaxiygcGlfiBsJvr4z5%2Fl%2FSh8HfvFykiKJ%2FpNfYXcph0XbFuoDnxboLL5PZnRxkICrmUZlJGmbsB%2B%2F8QlGdez7n0Org1sSwtrZ7x3aKMA1YzL9XdAHfWpljJj0QyyBr4WT0M3ZNJauw3603cWbNB8AyLtSFZzis5uRiGKTt%2FOVGYVGjP%2F2zOj5uDiMP7l0kM04VjWxYPyDBSluL0IOo%2Fnzv8v%2Bo0Fs1ymNI%2FT7psg%2F3FRVeKJn76POBTeC2vv0KFevNrsc3UjHC287djEUs1cjlKEL%2B%2Fnvd7ETCCLAgbxGhxpdrEcoZTsHI4kiykmooo%2BAwTBqajenrSlYFxR1WMB6RztYz5pUzCfA3iDAu7gg4u7RLRPCZ44DL5B1%2B76iCjMLu7zxUWVuRidu0dUbo3Xb0RNqsllrrGDNBow0YQQHyUUtvWLAL8G9XmLPzxRonKfeu2Jv0E1gc1fYd9IiVYyseHivOAWNBwMJxj1fjeMcRUf8rKCD%2BfVlBJjk8RjR2HA7sooYNMGA0LQns6gio0kSVUsTlG2EN%2FMKUs8wy42lwAY6pgGMTvh8XbU4bZKnkj0BFIRxrIjCHtF17gFFa03zmDNesnTZuJXIsr%2BcwDbwmSiAZsmuvI1sATnFJ8GSEk73H29UOdYT2qlWnu3vlL2lg%2FVr3CmBwOLD0k2mpV16mydpDB7bdoeR2cEgDEHa8vDNOiYBYzAthlb1%2FfOPq90%2Fp5%2FXRiHc3hnQOj%2B5kTOkCnqjdesm3vnKSumBm1hsGnM1hjHmNgmT8Tlw&X-Amz-Signature=e352b1e571553290988b82109c55704636e65621661d9a2e59bfc748b3bf0347&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSTTR77%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA%2FrrV%2BfBUDxCuEsOwSsKoSWlhkwlFttQeA2wKH8Zm5kAiACeSBWRwgsL8%2BvwbXvQMFXIQv8ahLnGmcVUovOiiecmSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FScQlI03mr602LONKtwDOptFevRP9waIs5cKLH878AFYVguIczTApJlLZvuThkvzIjVNw6sj0002AqAEB4MOQXIJeRGyiI8GbM19njq8NuQaxiygcGlfiBsJvr4z5%2Fl%2FSh8HfvFykiKJ%2FpNfYXcph0XbFuoDnxboLL5PZnRxkICrmUZlJGmbsB%2B%2F8QlGdez7n0Org1sSwtrZ7x3aKMA1YzL9XdAHfWpljJj0QyyBr4WT0M3ZNJauw3603cWbNB8AyLtSFZzis5uRiGKTt%2FOVGYVGjP%2F2zOj5uDiMP7l0kM04VjWxYPyDBSluL0IOo%2Fnzv8v%2Bo0Fs1ymNI%2FT7psg%2F3FRVeKJn76POBTeC2vv0KFevNrsc3UjHC287djEUs1cjlKEL%2B%2Fnvd7ETCCLAgbxGhxpdrEcoZTsHI4kiykmooo%2BAwTBqajenrSlYFxR1WMB6RztYz5pUzCfA3iDAu7gg4u7RLRPCZ44DL5B1%2B76iCjMLu7zxUWVuRidu0dUbo3Xb0RNqsllrrGDNBow0YQQHyUUtvWLAL8G9XmLPzxRonKfeu2Jv0E1gc1fYd9IiVYyseHivOAWNBwMJxj1fjeMcRUf8rKCD%2BfVlBJjk8RjR2HA7sooYNMGA0LQns6gio0kSVUsTlG2EN%2FMKUs8wy42lwAY6pgGMTvh8XbU4bZKnkj0BFIRxrIjCHtF17gFFa03zmDNesnTZuJXIsr%2BcwDbwmSiAZsmuvI1sATnFJ8GSEk73H29UOdYT2qlWnu3vlL2lg%2FVr3CmBwOLD0k2mpV16mydpDB7bdoeR2cEgDEHa8vDNOiYBYzAthlb1%2FfOPq90%2Fp5%2FXRiHc3hnQOj%2B5kTOkCnqjdesm3vnKSumBm1hsGnM1hjHmNgmT8Tlw&X-Amz-Signature=d778866aa517ebd41a5cac92380708ba342fedd2ac07bf7b76ab755c55fee7c5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSTTR77%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA%2FrrV%2BfBUDxCuEsOwSsKoSWlhkwlFttQeA2wKH8Zm5kAiACeSBWRwgsL8%2BvwbXvQMFXIQv8ahLnGmcVUovOiiecmSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FScQlI03mr602LONKtwDOptFevRP9waIs5cKLH878AFYVguIczTApJlLZvuThkvzIjVNw6sj0002AqAEB4MOQXIJeRGyiI8GbM19njq8NuQaxiygcGlfiBsJvr4z5%2Fl%2FSh8HfvFykiKJ%2FpNfYXcph0XbFuoDnxboLL5PZnRxkICrmUZlJGmbsB%2B%2F8QlGdez7n0Org1sSwtrZ7x3aKMA1YzL9XdAHfWpljJj0QyyBr4WT0M3ZNJauw3603cWbNB8AyLtSFZzis5uRiGKTt%2FOVGYVGjP%2F2zOj5uDiMP7l0kM04VjWxYPyDBSluL0IOo%2Fnzv8v%2Bo0Fs1ymNI%2FT7psg%2F3FRVeKJn76POBTeC2vv0KFevNrsc3UjHC287djEUs1cjlKEL%2B%2Fnvd7ETCCLAgbxGhxpdrEcoZTsHI4kiykmooo%2BAwTBqajenrSlYFxR1WMB6RztYz5pUzCfA3iDAu7gg4u7RLRPCZ44DL5B1%2B76iCjMLu7zxUWVuRidu0dUbo3Xb0RNqsllrrGDNBow0YQQHyUUtvWLAL8G9XmLPzxRonKfeu2Jv0E1gc1fYd9IiVYyseHivOAWNBwMJxj1fjeMcRUf8rKCD%2BfVlBJjk8RjR2HA7sooYNMGA0LQns6gio0kSVUsTlG2EN%2FMKUs8wy42lwAY6pgGMTvh8XbU4bZKnkj0BFIRxrIjCHtF17gFFa03zmDNesnTZuJXIsr%2BcwDbwmSiAZsmuvI1sATnFJ8GSEk73H29UOdYT2qlWnu3vlL2lg%2FVr3CmBwOLD0k2mpV16mydpDB7bdoeR2cEgDEHa8vDNOiYBYzAthlb1%2FfOPq90%2Fp5%2FXRiHc3hnQOj%2B5kTOkCnqjdesm3vnKSumBm1hsGnM1hjHmNgmT8Tlw&X-Amz-Signature=d8929be7125a6e84ac5468cd99ea035abc61921e2c83d622feb1546967c307a0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSTTR77%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA%2FrrV%2BfBUDxCuEsOwSsKoSWlhkwlFttQeA2wKH8Zm5kAiACeSBWRwgsL8%2BvwbXvQMFXIQv8ahLnGmcVUovOiiecmSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FScQlI03mr602LONKtwDOptFevRP9waIs5cKLH878AFYVguIczTApJlLZvuThkvzIjVNw6sj0002AqAEB4MOQXIJeRGyiI8GbM19njq8NuQaxiygcGlfiBsJvr4z5%2Fl%2FSh8HfvFykiKJ%2FpNfYXcph0XbFuoDnxboLL5PZnRxkICrmUZlJGmbsB%2B%2F8QlGdez7n0Org1sSwtrZ7x3aKMA1YzL9XdAHfWpljJj0QyyBr4WT0M3ZNJauw3603cWbNB8AyLtSFZzis5uRiGKTt%2FOVGYVGjP%2F2zOj5uDiMP7l0kM04VjWxYPyDBSluL0IOo%2Fnzv8v%2Bo0Fs1ymNI%2FT7psg%2F3FRVeKJn76POBTeC2vv0KFevNrsc3UjHC287djEUs1cjlKEL%2B%2Fnvd7ETCCLAgbxGhxpdrEcoZTsHI4kiykmooo%2BAwTBqajenrSlYFxR1WMB6RztYz5pUzCfA3iDAu7gg4u7RLRPCZ44DL5B1%2B76iCjMLu7zxUWVuRidu0dUbo3Xb0RNqsllrrGDNBow0YQQHyUUtvWLAL8G9XmLPzxRonKfeu2Jv0E1gc1fYd9IiVYyseHivOAWNBwMJxj1fjeMcRUf8rKCD%2BfVlBJjk8RjR2HA7sooYNMGA0LQns6gio0kSVUsTlG2EN%2FMKUs8wy42lwAY6pgGMTvh8XbU4bZKnkj0BFIRxrIjCHtF17gFFa03zmDNesnTZuJXIsr%2BcwDbwmSiAZsmuvI1sATnFJ8GSEk73H29UOdYT2qlWnu3vlL2lg%2FVr3CmBwOLD0k2mpV16mydpDB7bdoeR2cEgDEHa8vDNOiYBYzAthlb1%2FfOPq90%2Fp5%2FXRiHc3hnQOj%2B5kTOkCnqjdesm3vnKSumBm1hsGnM1hjHmNgmT8Tlw&X-Amz-Signature=c06ce990785255b401a38152251cd5a6b2ac83db4b9cb27aaf530e7aa3d323c1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
