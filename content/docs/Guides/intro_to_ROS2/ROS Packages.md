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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBN3R2OR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCiC15YTGvjeOD95wb%2F5CWr6B9UT9RdLOOFGYqCRyczgIhAJxE%2F7K1jF6Dv2LJx2Pno2puuO9T%2FIFMtUSwmIunyPWgKv8DCBMQABoMNjM3NDIzMTgzODA1IgzWSWr2ABsjFjhd0Lkq3APMuHUTpLXRPBLJ%2Fezj6sqaIoZH6PVx2ghyNBL1gISMLZyTYQwNPGwm3KMFKPEezmqzgJe4rEnXBSEzY%2BbRaoZVZZlpPg1lJIdOhu6kc5mEohLs1H0P6NKAF7m8VcbP9LwU6gCfKOJa0OAn7ht5h3sAsrBZ2rWA7B0y58B2pyU98pGOCZYon6B4H8WjDsMZzj2soruv2WBxwbf9QbxQTLAnYzIRhJu08o0BtIt6zpIt0LRcNn2E9Gqy4BuhSiFuRBkbT%2FoUik3Z0m7%2BnEqukHDXC6IkILw%2B%2BsVdFgEzieFKICDrW9MRbaU1yQNot7QjJscE4uIuSIIUFkUZWJI3d8fmA4zyJYjgLR%2BxDfNeU5Boh9jpkBZMLAd7H3xqPAhS%2BFshSTB5k22A46%2FAuetrxF8XbJEOWOninfsUV%2F6%2F99OZgJM8UM2kOiX6pziFEkR0bvPrBWzmxYNsnQmlMh4LeYZvlJMHFrfT8MezryXC0tj2xOAntkMIHEivxcJXKvQ06V%2FiAkTI1QHKlJwcdImLKhisW8HK%2BIqr%2BoO5%2FqdmIIQzK%2BZQHsA9yux1kzXwekdIzGqsRry7f0X%2BCpHxi0no3EntyMNMLsZnCdubrVCkN2akGpe%2BRP3ylkGKuozZAjCC6Ou9BjqkAavqlMb90NLn%2BEP1jSR7cxPgFeBg0PthYzlnNF3rh%2F%2FY7YtrpYAK1cweQNoaQTnsjBqwqmXFTkpDYKumGErg625ULMH8AoIJZfecMB0Kp1EeWl2qmoAhiu%2BYTy9T4oqMCcrY%2BSGn%2BaQkTeYuaBdeYKvx1UKtyGKntGrxmaVLoCX4ZKGkMccE36SI0mc64ohAyS7CuUOm6efILVkiBtkF%2FyqFBO7g&X-Amz-Signature=89857487d808908f6755de1d05185f5947f69b16c9b40d1da9115e88d8fed937&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBN3R2OR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCiC15YTGvjeOD95wb%2F5CWr6B9UT9RdLOOFGYqCRyczgIhAJxE%2F7K1jF6Dv2LJx2Pno2puuO9T%2FIFMtUSwmIunyPWgKv8DCBMQABoMNjM3NDIzMTgzODA1IgzWSWr2ABsjFjhd0Lkq3APMuHUTpLXRPBLJ%2Fezj6sqaIoZH6PVx2ghyNBL1gISMLZyTYQwNPGwm3KMFKPEezmqzgJe4rEnXBSEzY%2BbRaoZVZZlpPg1lJIdOhu6kc5mEohLs1H0P6NKAF7m8VcbP9LwU6gCfKOJa0OAn7ht5h3sAsrBZ2rWA7B0y58B2pyU98pGOCZYon6B4H8WjDsMZzj2soruv2WBxwbf9QbxQTLAnYzIRhJu08o0BtIt6zpIt0LRcNn2E9Gqy4BuhSiFuRBkbT%2FoUik3Z0m7%2BnEqukHDXC6IkILw%2B%2BsVdFgEzieFKICDrW9MRbaU1yQNot7QjJscE4uIuSIIUFkUZWJI3d8fmA4zyJYjgLR%2BxDfNeU5Boh9jpkBZMLAd7H3xqPAhS%2BFshSTB5k22A46%2FAuetrxF8XbJEOWOninfsUV%2F6%2F99OZgJM8UM2kOiX6pziFEkR0bvPrBWzmxYNsnQmlMh4LeYZvlJMHFrfT8MezryXC0tj2xOAntkMIHEivxcJXKvQ06V%2FiAkTI1QHKlJwcdImLKhisW8HK%2BIqr%2BoO5%2FqdmIIQzK%2BZQHsA9yux1kzXwekdIzGqsRry7f0X%2BCpHxi0no3EntyMNMLsZnCdubrVCkN2akGpe%2BRP3ylkGKuozZAjCC6Ou9BjqkAavqlMb90NLn%2BEP1jSR7cxPgFeBg0PthYzlnNF3rh%2F%2FY7YtrpYAK1cweQNoaQTnsjBqwqmXFTkpDYKumGErg625ULMH8AoIJZfecMB0Kp1EeWl2qmoAhiu%2BYTy9T4oqMCcrY%2BSGn%2BaQkTeYuaBdeYKvx1UKtyGKntGrxmaVLoCX4ZKGkMccE36SI0mc64ohAyS7CuUOm6efILVkiBtkF%2FyqFBO7g&X-Amz-Signature=5017118084ea06ed80982065b737eb31a432453c01891e94497efb28e67aa2e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBN3R2OR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCiC15YTGvjeOD95wb%2F5CWr6B9UT9RdLOOFGYqCRyczgIhAJxE%2F7K1jF6Dv2LJx2Pno2puuO9T%2FIFMtUSwmIunyPWgKv8DCBMQABoMNjM3NDIzMTgzODA1IgzWSWr2ABsjFjhd0Lkq3APMuHUTpLXRPBLJ%2Fezj6sqaIoZH6PVx2ghyNBL1gISMLZyTYQwNPGwm3KMFKPEezmqzgJe4rEnXBSEzY%2BbRaoZVZZlpPg1lJIdOhu6kc5mEohLs1H0P6NKAF7m8VcbP9LwU6gCfKOJa0OAn7ht5h3sAsrBZ2rWA7B0y58B2pyU98pGOCZYon6B4H8WjDsMZzj2soruv2WBxwbf9QbxQTLAnYzIRhJu08o0BtIt6zpIt0LRcNn2E9Gqy4BuhSiFuRBkbT%2FoUik3Z0m7%2BnEqukHDXC6IkILw%2B%2BsVdFgEzieFKICDrW9MRbaU1yQNot7QjJscE4uIuSIIUFkUZWJI3d8fmA4zyJYjgLR%2BxDfNeU5Boh9jpkBZMLAd7H3xqPAhS%2BFshSTB5k22A46%2FAuetrxF8XbJEOWOninfsUV%2F6%2F99OZgJM8UM2kOiX6pziFEkR0bvPrBWzmxYNsnQmlMh4LeYZvlJMHFrfT8MezryXC0tj2xOAntkMIHEivxcJXKvQ06V%2FiAkTI1QHKlJwcdImLKhisW8HK%2BIqr%2BoO5%2FqdmIIQzK%2BZQHsA9yux1kzXwekdIzGqsRry7f0X%2BCpHxi0no3EntyMNMLsZnCdubrVCkN2akGpe%2BRP3ylkGKuozZAjCC6Ou9BjqkAavqlMb90NLn%2BEP1jSR7cxPgFeBg0PthYzlnNF3rh%2F%2FY7YtrpYAK1cweQNoaQTnsjBqwqmXFTkpDYKumGErg625ULMH8AoIJZfecMB0Kp1EeWl2qmoAhiu%2BYTy9T4oqMCcrY%2BSGn%2BaQkTeYuaBdeYKvx1UKtyGKntGrxmaVLoCX4ZKGkMccE36SI0mc64ohAyS7CuUOm6efILVkiBtkF%2FyqFBO7g&X-Amz-Signature=ebcb125d43c374e0e4b0b0f70514d279f0f718d538a27fa68a98b8942350465b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBN3R2OR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCiC15YTGvjeOD95wb%2F5CWr6B9UT9RdLOOFGYqCRyczgIhAJxE%2F7K1jF6Dv2LJx2Pno2puuO9T%2FIFMtUSwmIunyPWgKv8DCBMQABoMNjM3NDIzMTgzODA1IgzWSWr2ABsjFjhd0Lkq3APMuHUTpLXRPBLJ%2Fezj6sqaIoZH6PVx2ghyNBL1gISMLZyTYQwNPGwm3KMFKPEezmqzgJe4rEnXBSEzY%2BbRaoZVZZlpPg1lJIdOhu6kc5mEohLs1H0P6NKAF7m8VcbP9LwU6gCfKOJa0OAn7ht5h3sAsrBZ2rWA7B0y58B2pyU98pGOCZYon6B4H8WjDsMZzj2soruv2WBxwbf9QbxQTLAnYzIRhJu08o0BtIt6zpIt0LRcNn2E9Gqy4BuhSiFuRBkbT%2FoUik3Z0m7%2BnEqukHDXC6IkILw%2B%2BsVdFgEzieFKICDrW9MRbaU1yQNot7QjJscE4uIuSIIUFkUZWJI3d8fmA4zyJYjgLR%2BxDfNeU5Boh9jpkBZMLAd7H3xqPAhS%2BFshSTB5k22A46%2FAuetrxF8XbJEOWOninfsUV%2F6%2F99OZgJM8UM2kOiX6pziFEkR0bvPrBWzmxYNsnQmlMh4LeYZvlJMHFrfT8MezryXC0tj2xOAntkMIHEivxcJXKvQ06V%2FiAkTI1QHKlJwcdImLKhisW8HK%2BIqr%2BoO5%2FqdmIIQzK%2BZQHsA9yux1kzXwekdIzGqsRry7f0X%2BCpHxi0no3EntyMNMLsZnCdubrVCkN2akGpe%2BRP3ylkGKuozZAjCC6Ou9BjqkAavqlMb90NLn%2BEP1jSR7cxPgFeBg0PthYzlnNF3rh%2F%2FY7YtrpYAK1cweQNoaQTnsjBqwqmXFTkpDYKumGErg625ULMH8AoIJZfecMB0Kp1EeWl2qmoAhiu%2BYTy9T4oqMCcrY%2BSGn%2BaQkTeYuaBdeYKvx1UKtyGKntGrxmaVLoCX4ZKGkMccE36SI0mc64ohAyS7CuUOm6efILVkiBtkF%2FyqFBO7g&X-Amz-Signature=90567434f7de5f5db261b286ece91de1d492c18cbf8168d3818f3b72e32f8b38&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBN3R2OR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCiC15YTGvjeOD95wb%2F5CWr6B9UT9RdLOOFGYqCRyczgIhAJxE%2F7K1jF6Dv2LJx2Pno2puuO9T%2FIFMtUSwmIunyPWgKv8DCBMQABoMNjM3NDIzMTgzODA1IgzWSWr2ABsjFjhd0Lkq3APMuHUTpLXRPBLJ%2Fezj6sqaIoZH6PVx2ghyNBL1gISMLZyTYQwNPGwm3KMFKPEezmqzgJe4rEnXBSEzY%2BbRaoZVZZlpPg1lJIdOhu6kc5mEohLs1H0P6NKAF7m8VcbP9LwU6gCfKOJa0OAn7ht5h3sAsrBZ2rWA7B0y58B2pyU98pGOCZYon6B4H8WjDsMZzj2soruv2WBxwbf9QbxQTLAnYzIRhJu08o0BtIt6zpIt0LRcNn2E9Gqy4BuhSiFuRBkbT%2FoUik3Z0m7%2BnEqukHDXC6IkILw%2B%2BsVdFgEzieFKICDrW9MRbaU1yQNot7QjJscE4uIuSIIUFkUZWJI3d8fmA4zyJYjgLR%2BxDfNeU5Boh9jpkBZMLAd7H3xqPAhS%2BFshSTB5k22A46%2FAuetrxF8XbJEOWOninfsUV%2F6%2F99OZgJM8UM2kOiX6pziFEkR0bvPrBWzmxYNsnQmlMh4LeYZvlJMHFrfT8MezryXC0tj2xOAntkMIHEivxcJXKvQ06V%2FiAkTI1QHKlJwcdImLKhisW8HK%2BIqr%2BoO5%2FqdmIIQzK%2BZQHsA9yux1kzXwekdIzGqsRry7f0X%2BCpHxi0no3EntyMNMLsZnCdubrVCkN2akGpe%2BRP3ylkGKuozZAjCC6Ou9BjqkAavqlMb90NLn%2BEP1jSR7cxPgFeBg0PthYzlnNF3rh%2F%2FY7YtrpYAK1cweQNoaQTnsjBqwqmXFTkpDYKumGErg625ULMH8AoIJZfecMB0Kp1EeWl2qmoAhiu%2BYTy9T4oqMCcrY%2BSGn%2BaQkTeYuaBdeYKvx1UKtyGKntGrxmaVLoCX4ZKGkMccE36SI0mc64ohAyS7CuUOm6efILVkiBtkF%2FyqFBO7g&X-Amz-Signature=48b8c392f165d4fd9b4ac5937d686fcee4b22119cbb5d9e0a558dc43541a6e98&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBN3R2OR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCiC15YTGvjeOD95wb%2F5CWr6B9UT9RdLOOFGYqCRyczgIhAJxE%2F7K1jF6Dv2LJx2Pno2puuO9T%2FIFMtUSwmIunyPWgKv8DCBMQABoMNjM3NDIzMTgzODA1IgzWSWr2ABsjFjhd0Lkq3APMuHUTpLXRPBLJ%2Fezj6sqaIoZH6PVx2ghyNBL1gISMLZyTYQwNPGwm3KMFKPEezmqzgJe4rEnXBSEzY%2BbRaoZVZZlpPg1lJIdOhu6kc5mEohLs1H0P6NKAF7m8VcbP9LwU6gCfKOJa0OAn7ht5h3sAsrBZ2rWA7B0y58B2pyU98pGOCZYon6B4H8WjDsMZzj2soruv2WBxwbf9QbxQTLAnYzIRhJu08o0BtIt6zpIt0LRcNn2E9Gqy4BuhSiFuRBkbT%2FoUik3Z0m7%2BnEqukHDXC6IkILw%2B%2BsVdFgEzieFKICDrW9MRbaU1yQNot7QjJscE4uIuSIIUFkUZWJI3d8fmA4zyJYjgLR%2BxDfNeU5Boh9jpkBZMLAd7H3xqPAhS%2BFshSTB5k22A46%2FAuetrxF8XbJEOWOninfsUV%2F6%2F99OZgJM8UM2kOiX6pziFEkR0bvPrBWzmxYNsnQmlMh4LeYZvlJMHFrfT8MezryXC0tj2xOAntkMIHEivxcJXKvQ06V%2FiAkTI1QHKlJwcdImLKhisW8HK%2BIqr%2BoO5%2FqdmIIQzK%2BZQHsA9yux1kzXwekdIzGqsRry7f0X%2BCpHxi0no3EntyMNMLsZnCdubrVCkN2akGpe%2BRP3ylkGKuozZAjCC6Ou9BjqkAavqlMb90NLn%2BEP1jSR7cxPgFeBg0PthYzlnNF3rh%2F%2FY7YtrpYAK1cweQNoaQTnsjBqwqmXFTkpDYKumGErg625ULMH8AoIJZfecMB0Kp1EeWl2qmoAhiu%2BYTy9T4oqMCcrY%2BSGn%2BaQkTeYuaBdeYKvx1UKtyGKntGrxmaVLoCX4ZKGkMccE36SI0mc64ohAyS7CuUOm6efILVkiBtkF%2FyqFBO7g&X-Amz-Signature=cd20652368282b83313cb078b6f4749ea49a719e3e9aadaab93a6ecc41ac86cd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBN3R2OR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCiC15YTGvjeOD95wb%2F5CWr6B9UT9RdLOOFGYqCRyczgIhAJxE%2F7K1jF6Dv2LJx2Pno2puuO9T%2FIFMtUSwmIunyPWgKv8DCBMQABoMNjM3NDIzMTgzODA1IgzWSWr2ABsjFjhd0Lkq3APMuHUTpLXRPBLJ%2Fezj6sqaIoZH6PVx2ghyNBL1gISMLZyTYQwNPGwm3KMFKPEezmqzgJe4rEnXBSEzY%2BbRaoZVZZlpPg1lJIdOhu6kc5mEohLs1H0P6NKAF7m8VcbP9LwU6gCfKOJa0OAn7ht5h3sAsrBZ2rWA7B0y58B2pyU98pGOCZYon6B4H8WjDsMZzj2soruv2WBxwbf9QbxQTLAnYzIRhJu08o0BtIt6zpIt0LRcNn2E9Gqy4BuhSiFuRBkbT%2FoUik3Z0m7%2BnEqukHDXC6IkILw%2B%2BsVdFgEzieFKICDrW9MRbaU1yQNot7QjJscE4uIuSIIUFkUZWJI3d8fmA4zyJYjgLR%2BxDfNeU5Boh9jpkBZMLAd7H3xqPAhS%2BFshSTB5k22A46%2FAuetrxF8XbJEOWOninfsUV%2F6%2F99OZgJM8UM2kOiX6pziFEkR0bvPrBWzmxYNsnQmlMh4LeYZvlJMHFrfT8MezryXC0tj2xOAntkMIHEivxcJXKvQ06V%2FiAkTI1QHKlJwcdImLKhisW8HK%2BIqr%2BoO5%2FqdmIIQzK%2BZQHsA9yux1kzXwekdIzGqsRry7f0X%2BCpHxi0no3EntyMNMLsZnCdubrVCkN2akGpe%2BRP3ylkGKuozZAjCC6Ou9BjqkAavqlMb90NLn%2BEP1jSR7cxPgFeBg0PthYzlnNF3rh%2F%2FY7YtrpYAK1cweQNoaQTnsjBqwqmXFTkpDYKumGErg625ULMH8AoIJZfecMB0Kp1EeWl2qmoAhiu%2BYTy9T4oqMCcrY%2BSGn%2BaQkTeYuaBdeYKvx1UKtyGKntGrxmaVLoCX4ZKGkMccE36SI0mc64ohAyS7CuUOm6efILVkiBtkF%2FyqFBO7g&X-Amz-Signature=9f23d2b13ca0542fafc185e47f562b89a77527ba258cbf5498b703c868c60eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
