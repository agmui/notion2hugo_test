---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVBSFYSE%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAgZGthqYk6hixt2MPYXx5IQUb2uJ6B1HNqyy89LlpFfAiA3llxpk5jo4VOX5tPoIzY0k%2B7g5bNq8g3pgUepoP62JCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc4BzLlXCdWE%2F6bqKtwDtefN1tHTNYvZMXzQ4LQbw1qLsuw2jjvwf6Llzb4VVayh0IpQFs4cF0fVfsZ0GbRp3m9Bl9KHVNSkS1klcOXs2DHB%2B0YRegCOkszNrIwxYHficp%2Fk7JuHI1Hbj26u1op4MMcqIh4A4KN9qXaY9tiAnYycXQeaF7FEvN1JIIJv3A0DTufPgdkoQ4R%2FjpO9P1D%2BUR81HP7JFFLMLcdHjV20tWSBCovB6nECWkGNKAhxShighzRH5NHZb1TaIkS%2F17IYdKb3MDhAypUktOUZCwPzIyrs2CYY06phT10vFIUlFqPFn2Q5HTpNHfd%2F%2FCcG%2BwwC5%2F8azMLTj3Y1RjyK3AZeqXa5fjXKAgSjt61gOlSLKcN3g3Lod%2B6UG2y6EAKCPIv3nF%2FyUziKeOCHoityk0566h4tqsqU6TryVz%2FgAtRrjsi3D68z9ezQRXoVdsdb0XvXscxdQI8921WLdJPdPSTs%2FsO8itA9wI9gqjt0XPYltfYlPdDUJKG7%2Bqx5%2BObeWiq1YXbJDwkgC84rQObX%2Bmordx4Ach7WNdeBbOOVa0POFBGmX4VVCJl3cL46QeDiJaQsjslULuEhGByCM1it5rd45cyijVs%2Fp%2FSJGVYw%2FqrMjjH7K55hK8Tw364%2BVTkw2%2BDmwwY6pgHN6Km8wnYR%2BtC4KrBqPSsSosPwtu8RzxL48vDOMtfkTQYRSxVS8hPlhCPQRC6b1%2BadCFgOODxyWG7XfDM7ENVNzuhXmaF9tTfs0a0W1LiXR5SG1KxISKT0AbOU1522n80zs5RYYfie22YiJ2xtL2J95ia1InYKTN0GC%2BlZ6Uj6y0p0MOLip49wOYQcSeO39D9dmlHJMscpaEkEKWOao2h2kG9Uvf3y&X-Amz-Signature=46027bed34f8b22c8d1c5c60e4c8490f25053cf9110b3430d2edef6bbba81da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVBSFYSE%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAgZGthqYk6hixt2MPYXx5IQUb2uJ6B1HNqyy89LlpFfAiA3llxpk5jo4VOX5tPoIzY0k%2B7g5bNq8g3pgUepoP62JCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc4BzLlXCdWE%2F6bqKtwDtefN1tHTNYvZMXzQ4LQbw1qLsuw2jjvwf6Llzb4VVayh0IpQFs4cF0fVfsZ0GbRp3m9Bl9KHVNSkS1klcOXs2DHB%2B0YRegCOkszNrIwxYHficp%2Fk7JuHI1Hbj26u1op4MMcqIh4A4KN9qXaY9tiAnYycXQeaF7FEvN1JIIJv3A0DTufPgdkoQ4R%2FjpO9P1D%2BUR81HP7JFFLMLcdHjV20tWSBCovB6nECWkGNKAhxShighzRH5NHZb1TaIkS%2F17IYdKb3MDhAypUktOUZCwPzIyrs2CYY06phT10vFIUlFqPFn2Q5HTpNHfd%2F%2FCcG%2BwwC5%2F8azMLTj3Y1RjyK3AZeqXa5fjXKAgSjt61gOlSLKcN3g3Lod%2B6UG2y6EAKCPIv3nF%2FyUziKeOCHoityk0566h4tqsqU6TryVz%2FgAtRrjsi3D68z9ezQRXoVdsdb0XvXscxdQI8921WLdJPdPSTs%2FsO8itA9wI9gqjt0XPYltfYlPdDUJKG7%2Bqx5%2BObeWiq1YXbJDwkgC84rQObX%2Bmordx4Ach7WNdeBbOOVa0POFBGmX4VVCJl3cL46QeDiJaQsjslULuEhGByCM1it5rd45cyijVs%2Fp%2FSJGVYw%2FqrMjjH7K55hK8Tw364%2BVTkw2%2BDmwwY6pgHN6Km8wnYR%2BtC4KrBqPSsSosPwtu8RzxL48vDOMtfkTQYRSxVS8hPlhCPQRC6b1%2BadCFgOODxyWG7XfDM7ENVNzuhXmaF9tTfs0a0W1LiXR5SG1KxISKT0AbOU1522n80zs5RYYfie22YiJ2xtL2J95ia1InYKTN0GC%2BlZ6Uj6y0p0MOLip49wOYQcSeO39D9dmlHJMscpaEkEKWOao2h2kG9Uvf3y&X-Amz-Signature=1b6937356593c5d32dfb85d267b61e40470acb8dc3d48093495c9a24edc7209f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVBSFYSE%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAgZGthqYk6hixt2MPYXx5IQUb2uJ6B1HNqyy89LlpFfAiA3llxpk5jo4VOX5tPoIzY0k%2B7g5bNq8g3pgUepoP62JCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc4BzLlXCdWE%2F6bqKtwDtefN1tHTNYvZMXzQ4LQbw1qLsuw2jjvwf6Llzb4VVayh0IpQFs4cF0fVfsZ0GbRp3m9Bl9KHVNSkS1klcOXs2DHB%2B0YRegCOkszNrIwxYHficp%2Fk7JuHI1Hbj26u1op4MMcqIh4A4KN9qXaY9tiAnYycXQeaF7FEvN1JIIJv3A0DTufPgdkoQ4R%2FjpO9P1D%2BUR81HP7JFFLMLcdHjV20tWSBCovB6nECWkGNKAhxShighzRH5NHZb1TaIkS%2F17IYdKb3MDhAypUktOUZCwPzIyrs2CYY06phT10vFIUlFqPFn2Q5HTpNHfd%2F%2FCcG%2BwwC5%2F8azMLTj3Y1RjyK3AZeqXa5fjXKAgSjt61gOlSLKcN3g3Lod%2B6UG2y6EAKCPIv3nF%2FyUziKeOCHoityk0566h4tqsqU6TryVz%2FgAtRrjsi3D68z9ezQRXoVdsdb0XvXscxdQI8921WLdJPdPSTs%2FsO8itA9wI9gqjt0XPYltfYlPdDUJKG7%2Bqx5%2BObeWiq1YXbJDwkgC84rQObX%2Bmordx4Ach7WNdeBbOOVa0POFBGmX4VVCJl3cL46QeDiJaQsjslULuEhGByCM1it5rd45cyijVs%2Fp%2FSJGVYw%2FqrMjjH7K55hK8Tw364%2BVTkw2%2BDmwwY6pgHN6Km8wnYR%2BtC4KrBqPSsSosPwtu8RzxL48vDOMtfkTQYRSxVS8hPlhCPQRC6b1%2BadCFgOODxyWG7XfDM7ENVNzuhXmaF9tTfs0a0W1LiXR5SG1KxISKT0AbOU1522n80zs5RYYfie22YiJ2xtL2J95ia1InYKTN0GC%2BlZ6Uj6y0p0MOLip49wOYQcSeO39D9dmlHJMscpaEkEKWOao2h2kG9Uvf3y&X-Amz-Signature=38b17e538d8dab8c74eb24d0682629a1f13ae764703b562957acfa37aec4b0c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVBSFYSE%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAgZGthqYk6hixt2MPYXx5IQUb2uJ6B1HNqyy89LlpFfAiA3llxpk5jo4VOX5tPoIzY0k%2B7g5bNq8g3pgUepoP62JCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc4BzLlXCdWE%2F6bqKtwDtefN1tHTNYvZMXzQ4LQbw1qLsuw2jjvwf6Llzb4VVayh0IpQFs4cF0fVfsZ0GbRp3m9Bl9KHVNSkS1klcOXs2DHB%2B0YRegCOkszNrIwxYHficp%2Fk7JuHI1Hbj26u1op4MMcqIh4A4KN9qXaY9tiAnYycXQeaF7FEvN1JIIJv3A0DTufPgdkoQ4R%2FjpO9P1D%2BUR81HP7JFFLMLcdHjV20tWSBCovB6nECWkGNKAhxShighzRH5NHZb1TaIkS%2F17IYdKb3MDhAypUktOUZCwPzIyrs2CYY06phT10vFIUlFqPFn2Q5HTpNHfd%2F%2FCcG%2BwwC5%2F8azMLTj3Y1RjyK3AZeqXa5fjXKAgSjt61gOlSLKcN3g3Lod%2B6UG2y6EAKCPIv3nF%2FyUziKeOCHoityk0566h4tqsqU6TryVz%2FgAtRrjsi3D68z9ezQRXoVdsdb0XvXscxdQI8921WLdJPdPSTs%2FsO8itA9wI9gqjt0XPYltfYlPdDUJKG7%2Bqx5%2BObeWiq1YXbJDwkgC84rQObX%2Bmordx4Ach7WNdeBbOOVa0POFBGmX4VVCJl3cL46QeDiJaQsjslULuEhGByCM1it5rd45cyijVs%2Fp%2FSJGVYw%2FqrMjjH7K55hK8Tw364%2BVTkw2%2BDmwwY6pgHN6Km8wnYR%2BtC4KrBqPSsSosPwtu8RzxL48vDOMtfkTQYRSxVS8hPlhCPQRC6b1%2BadCFgOODxyWG7XfDM7ENVNzuhXmaF9tTfs0a0W1LiXR5SG1KxISKT0AbOU1522n80zs5RYYfie22YiJ2xtL2J95ia1InYKTN0GC%2BlZ6Uj6y0p0MOLip49wOYQcSeO39D9dmlHJMscpaEkEKWOao2h2kG9Uvf3y&X-Amz-Signature=f146a19ce678563eedc384814b2f5039544caf1552779bda8db916b4f4b7afa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVBSFYSE%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAgZGthqYk6hixt2MPYXx5IQUb2uJ6B1HNqyy89LlpFfAiA3llxpk5jo4VOX5tPoIzY0k%2B7g5bNq8g3pgUepoP62JCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc4BzLlXCdWE%2F6bqKtwDtefN1tHTNYvZMXzQ4LQbw1qLsuw2jjvwf6Llzb4VVayh0IpQFs4cF0fVfsZ0GbRp3m9Bl9KHVNSkS1klcOXs2DHB%2B0YRegCOkszNrIwxYHficp%2Fk7JuHI1Hbj26u1op4MMcqIh4A4KN9qXaY9tiAnYycXQeaF7FEvN1JIIJv3A0DTufPgdkoQ4R%2FjpO9P1D%2BUR81HP7JFFLMLcdHjV20tWSBCovB6nECWkGNKAhxShighzRH5NHZb1TaIkS%2F17IYdKb3MDhAypUktOUZCwPzIyrs2CYY06phT10vFIUlFqPFn2Q5HTpNHfd%2F%2FCcG%2BwwC5%2F8azMLTj3Y1RjyK3AZeqXa5fjXKAgSjt61gOlSLKcN3g3Lod%2B6UG2y6EAKCPIv3nF%2FyUziKeOCHoityk0566h4tqsqU6TryVz%2FgAtRrjsi3D68z9ezQRXoVdsdb0XvXscxdQI8921WLdJPdPSTs%2FsO8itA9wI9gqjt0XPYltfYlPdDUJKG7%2Bqx5%2BObeWiq1YXbJDwkgC84rQObX%2Bmordx4Ach7WNdeBbOOVa0POFBGmX4VVCJl3cL46QeDiJaQsjslULuEhGByCM1it5rd45cyijVs%2Fp%2FSJGVYw%2FqrMjjH7K55hK8Tw364%2BVTkw2%2BDmwwY6pgHN6Km8wnYR%2BtC4KrBqPSsSosPwtu8RzxL48vDOMtfkTQYRSxVS8hPlhCPQRC6b1%2BadCFgOODxyWG7XfDM7ENVNzuhXmaF9tTfs0a0W1LiXR5SG1KxISKT0AbOU1522n80zs5RYYfie22YiJ2xtL2J95ia1InYKTN0GC%2BlZ6Uj6y0p0MOLip49wOYQcSeO39D9dmlHJMscpaEkEKWOao2h2kG9Uvf3y&X-Amz-Signature=decd417c0e323e32a2295f19ab38d5ad5372886701532ad13a48e86731083314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVBSFYSE%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAgZGthqYk6hixt2MPYXx5IQUb2uJ6B1HNqyy89LlpFfAiA3llxpk5jo4VOX5tPoIzY0k%2B7g5bNq8g3pgUepoP62JCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc4BzLlXCdWE%2F6bqKtwDtefN1tHTNYvZMXzQ4LQbw1qLsuw2jjvwf6Llzb4VVayh0IpQFs4cF0fVfsZ0GbRp3m9Bl9KHVNSkS1klcOXs2DHB%2B0YRegCOkszNrIwxYHficp%2Fk7JuHI1Hbj26u1op4MMcqIh4A4KN9qXaY9tiAnYycXQeaF7FEvN1JIIJv3A0DTufPgdkoQ4R%2FjpO9P1D%2BUR81HP7JFFLMLcdHjV20tWSBCovB6nECWkGNKAhxShighzRH5NHZb1TaIkS%2F17IYdKb3MDhAypUktOUZCwPzIyrs2CYY06phT10vFIUlFqPFn2Q5HTpNHfd%2F%2FCcG%2BwwC5%2F8azMLTj3Y1RjyK3AZeqXa5fjXKAgSjt61gOlSLKcN3g3Lod%2B6UG2y6EAKCPIv3nF%2FyUziKeOCHoityk0566h4tqsqU6TryVz%2FgAtRrjsi3D68z9ezQRXoVdsdb0XvXscxdQI8921WLdJPdPSTs%2FsO8itA9wI9gqjt0XPYltfYlPdDUJKG7%2Bqx5%2BObeWiq1YXbJDwkgC84rQObX%2Bmordx4Ach7WNdeBbOOVa0POFBGmX4VVCJl3cL46QeDiJaQsjslULuEhGByCM1it5rd45cyijVs%2Fp%2FSJGVYw%2FqrMjjH7K55hK8Tw364%2BVTkw2%2BDmwwY6pgHN6Km8wnYR%2BtC4KrBqPSsSosPwtu8RzxL48vDOMtfkTQYRSxVS8hPlhCPQRC6b1%2BadCFgOODxyWG7XfDM7ENVNzuhXmaF9tTfs0a0W1LiXR5SG1KxISKT0AbOU1522n80zs5RYYfie22YiJ2xtL2J95ia1InYKTN0GC%2BlZ6Uj6y0p0MOLip49wOYQcSeO39D9dmlHJMscpaEkEKWOao2h2kG9Uvf3y&X-Amz-Signature=89a8d4af211415f7a091c8589122b2f25ce14c4f063d53ec2a36b608c5ff3ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVBSFYSE%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAgZGthqYk6hixt2MPYXx5IQUb2uJ6B1HNqyy89LlpFfAiA3llxpk5jo4VOX5tPoIzY0k%2B7g5bNq8g3pgUepoP62JCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc4BzLlXCdWE%2F6bqKtwDtefN1tHTNYvZMXzQ4LQbw1qLsuw2jjvwf6Llzb4VVayh0IpQFs4cF0fVfsZ0GbRp3m9Bl9KHVNSkS1klcOXs2DHB%2B0YRegCOkszNrIwxYHficp%2Fk7JuHI1Hbj26u1op4MMcqIh4A4KN9qXaY9tiAnYycXQeaF7FEvN1JIIJv3A0DTufPgdkoQ4R%2FjpO9P1D%2BUR81HP7JFFLMLcdHjV20tWSBCovB6nECWkGNKAhxShighzRH5NHZb1TaIkS%2F17IYdKb3MDhAypUktOUZCwPzIyrs2CYY06phT10vFIUlFqPFn2Q5HTpNHfd%2F%2FCcG%2BwwC5%2F8azMLTj3Y1RjyK3AZeqXa5fjXKAgSjt61gOlSLKcN3g3Lod%2B6UG2y6EAKCPIv3nF%2FyUziKeOCHoityk0566h4tqsqU6TryVz%2FgAtRrjsi3D68z9ezQRXoVdsdb0XvXscxdQI8921WLdJPdPSTs%2FsO8itA9wI9gqjt0XPYltfYlPdDUJKG7%2Bqx5%2BObeWiq1YXbJDwkgC84rQObX%2Bmordx4Ach7WNdeBbOOVa0POFBGmX4VVCJl3cL46QeDiJaQsjslULuEhGByCM1it5rd45cyijVs%2Fp%2FSJGVYw%2FqrMjjH7K55hK8Tw364%2BVTkw2%2BDmwwY6pgHN6Km8wnYR%2BtC4KrBqPSsSosPwtu8RzxL48vDOMtfkTQYRSxVS8hPlhCPQRC6b1%2BadCFgOODxyWG7XfDM7ENVNzuhXmaF9tTfs0a0W1LiXR5SG1KxISKT0AbOU1522n80zs5RYYfie22YiJ2xtL2J95ia1InYKTN0GC%2BlZ6Uj6y0p0MOLip49wOYQcSeO39D9dmlHJMscpaEkEKWOao2h2kG9Uvf3y&X-Amz-Signature=2c088aac428b03be559ea053c98dc6b34de857c68ca75bac2b4ab7a227388705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
