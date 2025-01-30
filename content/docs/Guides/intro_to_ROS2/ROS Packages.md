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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDF6VWIJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrmtLl4qOA2jBWMl3SO6yh2I3yPPLsvPsf2Nb0hRcx6gIgUnbVsmpccfLV37lm2W6uiC0EkMajyg3TxXR10FjKc44qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQpG33mvdL3ZDjXvircA1kYcHNp03wqGOrlX7Sju5dAyxpouMXzkrA2N5my2ELkhH%2BNGqNhK7HgEAvVnxXMU%2Fea6jt4assCEfpFqa2nYAQ2WeRYe4uydCnnhdIFsEJBaqooFR64fV%2FLh%2B26L6HJC%2FQuyZ4y%2BvEDb4A%2F%2F54TF%2B9HYHjypN1hqieGhL8h%2FlZOjCF9W%2F9A%2BhAY%2FV282lEiyM73RV72cuoAs1qjkI0sMPfU2T0JHxkOcIy6rb3ZfWF8gUdINVmL9HTqjyOOQgJ1zvS1IcIZDUxWv9aK%2BoYMFjVc8HxNbDHRQsJi6RwgySyMsVKsaxFlLDcJqqKNWaMXUVsMt6aiprSRHCs8KaTsk%2B049cE9pcxLSBU3YfNGGmezYYAoI3EDXJMYrh8hR2uDToNBkQgS%2BpnHuUKVMo04Gx7d4vZF0ohVbtdjQ%2F6RMgnKVdMfpnrtQ%2B7zSfvEclKCWsbd%2Ba2mDGRXhvUZ41MVw0zbDmnIfQfXKuvb0d%2B0vBZ4flhVvTSePblUdWIy2kg5c68dtlN%2FwMoRlwXKJOzGMvyslkE%2BQ6gDEs7uvFel1iPQvMCQ%2BqopnKvk6UZXY1nZ6AZVRuzQcr6Zv%2FYFCh6zIPKnMIcOfuWWpETm4h910%2B1ZhsIE%2BC2Toy1zEgiVMLTr67wGOqUBfhroSEX1XPll1TCBY3PDbP0H%2BJFYlidO2bXFLyYQqb6PtzMdKf5v3H%2BXOPI6waTdj8veOMBmKPzqcBQCzfrBvqp3PnoBT4pmy20Q%2B1YbOtazqarIytjsmDsCU0PQTHP1xZ3FWEowJGTjD4R24hxF5jquCQXIk2OlmZReGbmYTjP%2B90u4xUHIiRMcbb6czL4iWUr3Xt6Y%2BifRrbb4PEQs9girGLNh&X-Amz-Signature=ac26c1245f2bf1ecfc84a3f7fba5d58be8b1292788174cb10b73c3a3b1d55d02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDF6VWIJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrmtLl4qOA2jBWMl3SO6yh2I3yPPLsvPsf2Nb0hRcx6gIgUnbVsmpccfLV37lm2W6uiC0EkMajyg3TxXR10FjKc44qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQpG33mvdL3ZDjXvircA1kYcHNp03wqGOrlX7Sju5dAyxpouMXzkrA2N5my2ELkhH%2BNGqNhK7HgEAvVnxXMU%2Fea6jt4assCEfpFqa2nYAQ2WeRYe4uydCnnhdIFsEJBaqooFR64fV%2FLh%2B26L6HJC%2FQuyZ4y%2BvEDb4A%2F%2F54TF%2B9HYHjypN1hqieGhL8h%2FlZOjCF9W%2F9A%2BhAY%2FV282lEiyM73RV72cuoAs1qjkI0sMPfU2T0JHxkOcIy6rb3ZfWF8gUdINVmL9HTqjyOOQgJ1zvS1IcIZDUxWv9aK%2BoYMFjVc8HxNbDHRQsJi6RwgySyMsVKsaxFlLDcJqqKNWaMXUVsMt6aiprSRHCs8KaTsk%2B049cE9pcxLSBU3YfNGGmezYYAoI3EDXJMYrh8hR2uDToNBkQgS%2BpnHuUKVMo04Gx7d4vZF0ohVbtdjQ%2F6RMgnKVdMfpnrtQ%2B7zSfvEclKCWsbd%2Ba2mDGRXhvUZ41MVw0zbDmnIfQfXKuvb0d%2B0vBZ4flhVvTSePblUdWIy2kg5c68dtlN%2FwMoRlwXKJOzGMvyslkE%2BQ6gDEs7uvFel1iPQvMCQ%2BqopnKvk6UZXY1nZ6AZVRuzQcr6Zv%2FYFCh6zIPKnMIcOfuWWpETm4h910%2B1ZhsIE%2BC2Toy1zEgiVMLTr67wGOqUBfhroSEX1XPll1TCBY3PDbP0H%2BJFYlidO2bXFLyYQqb6PtzMdKf5v3H%2BXOPI6waTdj8veOMBmKPzqcBQCzfrBvqp3PnoBT4pmy20Q%2B1YbOtazqarIytjsmDsCU0PQTHP1xZ3FWEowJGTjD4R24hxF5jquCQXIk2OlmZReGbmYTjP%2B90u4xUHIiRMcbb6czL4iWUr3Xt6Y%2BifRrbb4PEQs9girGLNh&X-Amz-Signature=01f4fb75140250948de14c4c912d5214f3dea95df68d1cb98d3c0ee893dcecd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDF6VWIJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrmtLl4qOA2jBWMl3SO6yh2I3yPPLsvPsf2Nb0hRcx6gIgUnbVsmpccfLV37lm2W6uiC0EkMajyg3TxXR10FjKc44qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQpG33mvdL3ZDjXvircA1kYcHNp03wqGOrlX7Sju5dAyxpouMXzkrA2N5my2ELkhH%2BNGqNhK7HgEAvVnxXMU%2Fea6jt4assCEfpFqa2nYAQ2WeRYe4uydCnnhdIFsEJBaqooFR64fV%2FLh%2B26L6HJC%2FQuyZ4y%2BvEDb4A%2F%2F54TF%2B9HYHjypN1hqieGhL8h%2FlZOjCF9W%2F9A%2BhAY%2FV282lEiyM73RV72cuoAs1qjkI0sMPfU2T0JHxkOcIy6rb3ZfWF8gUdINVmL9HTqjyOOQgJ1zvS1IcIZDUxWv9aK%2BoYMFjVc8HxNbDHRQsJi6RwgySyMsVKsaxFlLDcJqqKNWaMXUVsMt6aiprSRHCs8KaTsk%2B049cE9pcxLSBU3YfNGGmezYYAoI3EDXJMYrh8hR2uDToNBkQgS%2BpnHuUKVMo04Gx7d4vZF0ohVbtdjQ%2F6RMgnKVdMfpnrtQ%2B7zSfvEclKCWsbd%2Ba2mDGRXhvUZ41MVw0zbDmnIfQfXKuvb0d%2B0vBZ4flhVvTSePblUdWIy2kg5c68dtlN%2FwMoRlwXKJOzGMvyslkE%2BQ6gDEs7uvFel1iPQvMCQ%2BqopnKvk6UZXY1nZ6AZVRuzQcr6Zv%2FYFCh6zIPKnMIcOfuWWpETm4h910%2B1ZhsIE%2BC2Toy1zEgiVMLTr67wGOqUBfhroSEX1XPll1TCBY3PDbP0H%2BJFYlidO2bXFLyYQqb6PtzMdKf5v3H%2BXOPI6waTdj8veOMBmKPzqcBQCzfrBvqp3PnoBT4pmy20Q%2B1YbOtazqarIytjsmDsCU0PQTHP1xZ3FWEowJGTjD4R24hxF5jquCQXIk2OlmZReGbmYTjP%2B90u4xUHIiRMcbb6czL4iWUr3Xt6Y%2BifRrbb4PEQs9girGLNh&X-Amz-Signature=55bc4471b52fa668dd48be32fbdbd7d78a8d0cf0cd02f284b9fc35382b55ba54&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDF6VWIJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrmtLl4qOA2jBWMl3SO6yh2I3yPPLsvPsf2Nb0hRcx6gIgUnbVsmpccfLV37lm2W6uiC0EkMajyg3TxXR10FjKc44qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQpG33mvdL3ZDjXvircA1kYcHNp03wqGOrlX7Sju5dAyxpouMXzkrA2N5my2ELkhH%2BNGqNhK7HgEAvVnxXMU%2Fea6jt4assCEfpFqa2nYAQ2WeRYe4uydCnnhdIFsEJBaqooFR64fV%2FLh%2B26L6HJC%2FQuyZ4y%2BvEDb4A%2F%2F54TF%2B9HYHjypN1hqieGhL8h%2FlZOjCF9W%2F9A%2BhAY%2FV282lEiyM73RV72cuoAs1qjkI0sMPfU2T0JHxkOcIy6rb3ZfWF8gUdINVmL9HTqjyOOQgJ1zvS1IcIZDUxWv9aK%2BoYMFjVc8HxNbDHRQsJi6RwgySyMsVKsaxFlLDcJqqKNWaMXUVsMt6aiprSRHCs8KaTsk%2B049cE9pcxLSBU3YfNGGmezYYAoI3EDXJMYrh8hR2uDToNBkQgS%2BpnHuUKVMo04Gx7d4vZF0ohVbtdjQ%2F6RMgnKVdMfpnrtQ%2B7zSfvEclKCWsbd%2Ba2mDGRXhvUZ41MVw0zbDmnIfQfXKuvb0d%2B0vBZ4flhVvTSePblUdWIy2kg5c68dtlN%2FwMoRlwXKJOzGMvyslkE%2BQ6gDEs7uvFel1iPQvMCQ%2BqopnKvk6UZXY1nZ6AZVRuzQcr6Zv%2FYFCh6zIPKnMIcOfuWWpETm4h910%2B1ZhsIE%2BC2Toy1zEgiVMLTr67wGOqUBfhroSEX1XPll1TCBY3PDbP0H%2BJFYlidO2bXFLyYQqb6PtzMdKf5v3H%2BXOPI6waTdj8veOMBmKPzqcBQCzfrBvqp3PnoBT4pmy20Q%2B1YbOtazqarIytjsmDsCU0PQTHP1xZ3FWEowJGTjD4R24hxF5jquCQXIk2OlmZReGbmYTjP%2B90u4xUHIiRMcbb6czL4iWUr3Xt6Y%2BifRrbb4PEQs9girGLNh&X-Amz-Signature=8538c773217b78ce2be00c25cac8675566c1122b98a511054951260bb0968f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDF6VWIJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrmtLl4qOA2jBWMl3SO6yh2I3yPPLsvPsf2Nb0hRcx6gIgUnbVsmpccfLV37lm2W6uiC0EkMajyg3TxXR10FjKc44qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQpG33mvdL3ZDjXvircA1kYcHNp03wqGOrlX7Sju5dAyxpouMXzkrA2N5my2ELkhH%2BNGqNhK7HgEAvVnxXMU%2Fea6jt4assCEfpFqa2nYAQ2WeRYe4uydCnnhdIFsEJBaqooFR64fV%2FLh%2B26L6HJC%2FQuyZ4y%2BvEDb4A%2F%2F54TF%2B9HYHjypN1hqieGhL8h%2FlZOjCF9W%2F9A%2BhAY%2FV282lEiyM73RV72cuoAs1qjkI0sMPfU2T0JHxkOcIy6rb3ZfWF8gUdINVmL9HTqjyOOQgJ1zvS1IcIZDUxWv9aK%2BoYMFjVc8HxNbDHRQsJi6RwgySyMsVKsaxFlLDcJqqKNWaMXUVsMt6aiprSRHCs8KaTsk%2B049cE9pcxLSBU3YfNGGmezYYAoI3EDXJMYrh8hR2uDToNBkQgS%2BpnHuUKVMo04Gx7d4vZF0ohVbtdjQ%2F6RMgnKVdMfpnrtQ%2B7zSfvEclKCWsbd%2Ba2mDGRXhvUZ41MVw0zbDmnIfQfXKuvb0d%2B0vBZ4flhVvTSePblUdWIy2kg5c68dtlN%2FwMoRlwXKJOzGMvyslkE%2BQ6gDEs7uvFel1iPQvMCQ%2BqopnKvk6UZXY1nZ6AZVRuzQcr6Zv%2FYFCh6zIPKnMIcOfuWWpETm4h910%2B1ZhsIE%2BC2Toy1zEgiVMLTr67wGOqUBfhroSEX1XPll1TCBY3PDbP0H%2BJFYlidO2bXFLyYQqb6PtzMdKf5v3H%2BXOPI6waTdj8veOMBmKPzqcBQCzfrBvqp3PnoBT4pmy20Q%2B1YbOtazqarIytjsmDsCU0PQTHP1xZ3FWEowJGTjD4R24hxF5jquCQXIk2OlmZReGbmYTjP%2B90u4xUHIiRMcbb6czL4iWUr3Xt6Y%2BifRrbb4PEQs9girGLNh&X-Amz-Signature=5c84c433f5380d060918b16bd93fb0ce90db57f48dda7a0cba4dd872e2641dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDF6VWIJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrmtLl4qOA2jBWMl3SO6yh2I3yPPLsvPsf2Nb0hRcx6gIgUnbVsmpccfLV37lm2W6uiC0EkMajyg3TxXR10FjKc44qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQpG33mvdL3ZDjXvircA1kYcHNp03wqGOrlX7Sju5dAyxpouMXzkrA2N5my2ELkhH%2BNGqNhK7HgEAvVnxXMU%2Fea6jt4assCEfpFqa2nYAQ2WeRYe4uydCnnhdIFsEJBaqooFR64fV%2FLh%2B26L6HJC%2FQuyZ4y%2BvEDb4A%2F%2F54TF%2B9HYHjypN1hqieGhL8h%2FlZOjCF9W%2F9A%2BhAY%2FV282lEiyM73RV72cuoAs1qjkI0sMPfU2T0JHxkOcIy6rb3ZfWF8gUdINVmL9HTqjyOOQgJ1zvS1IcIZDUxWv9aK%2BoYMFjVc8HxNbDHRQsJi6RwgySyMsVKsaxFlLDcJqqKNWaMXUVsMt6aiprSRHCs8KaTsk%2B049cE9pcxLSBU3YfNGGmezYYAoI3EDXJMYrh8hR2uDToNBkQgS%2BpnHuUKVMo04Gx7d4vZF0ohVbtdjQ%2F6RMgnKVdMfpnrtQ%2B7zSfvEclKCWsbd%2Ba2mDGRXhvUZ41MVw0zbDmnIfQfXKuvb0d%2B0vBZ4flhVvTSePblUdWIy2kg5c68dtlN%2FwMoRlwXKJOzGMvyslkE%2BQ6gDEs7uvFel1iPQvMCQ%2BqopnKvk6UZXY1nZ6AZVRuzQcr6Zv%2FYFCh6zIPKnMIcOfuWWpETm4h910%2B1ZhsIE%2BC2Toy1zEgiVMLTr67wGOqUBfhroSEX1XPll1TCBY3PDbP0H%2BJFYlidO2bXFLyYQqb6PtzMdKf5v3H%2BXOPI6waTdj8veOMBmKPzqcBQCzfrBvqp3PnoBT4pmy20Q%2B1YbOtazqarIytjsmDsCU0PQTHP1xZ3FWEowJGTjD4R24hxF5jquCQXIk2OlmZReGbmYTjP%2B90u4xUHIiRMcbb6czL4iWUr3Xt6Y%2BifRrbb4PEQs9girGLNh&X-Amz-Signature=ad4ad7b9c1ec0cc3cb284895d248df8cfd186cf2f4c95d2f7bb23e00ed2c30f3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDF6VWIJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrmtLl4qOA2jBWMl3SO6yh2I3yPPLsvPsf2Nb0hRcx6gIgUnbVsmpccfLV37lm2W6uiC0EkMajyg3TxXR10FjKc44qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQpG33mvdL3ZDjXvircA1kYcHNp03wqGOrlX7Sju5dAyxpouMXzkrA2N5my2ELkhH%2BNGqNhK7HgEAvVnxXMU%2Fea6jt4assCEfpFqa2nYAQ2WeRYe4uydCnnhdIFsEJBaqooFR64fV%2FLh%2B26L6HJC%2FQuyZ4y%2BvEDb4A%2F%2F54TF%2B9HYHjypN1hqieGhL8h%2FlZOjCF9W%2F9A%2BhAY%2FV282lEiyM73RV72cuoAs1qjkI0sMPfU2T0JHxkOcIy6rb3ZfWF8gUdINVmL9HTqjyOOQgJ1zvS1IcIZDUxWv9aK%2BoYMFjVc8HxNbDHRQsJi6RwgySyMsVKsaxFlLDcJqqKNWaMXUVsMt6aiprSRHCs8KaTsk%2B049cE9pcxLSBU3YfNGGmezYYAoI3EDXJMYrh8hR2uDToNBkQgS%2BpnHuUKVMo04Gx7d4vZF0ohVbtdjQ%2F6RMgnKVdMfpnrtQ%2B7zSfvEclKCWsbd%2Ba2mDGRXhvUZ41MVw0zbDmnIfQfXKuvb0d%2B0vBZ4flhVvTSePblUdWIy2kg5c68dtlN%2FwMoRlwXKJOzGMvyslkE%2BQ6gDEs7uvFel1iPQvMCQ%2BqopnKvk6UZXY1nZ6AZVRuzQcr6Zv%2FYFCh6zIPKnMIcOfuWWpETm4h910%2B1ZhsIE%2BC2Toy1zEgiVMLTr67wGOqUBfhroSEX1XPll1TCBY3PDbP0H%2BJFYlidO2bXFLyYQqb6PtzMdKf5v3H%2BXOPI6waTdj8veOMBmKPzqcBQCzfrBvqp3PnoBT4pmy20Q%2B1YbOtazqarIytjsmDsCU0PQTHP1xZ3FWEowJGTjD4R24hxF5jquCQXIk2OlmZReGbmYTjP%2B90u4xUHIiRMcbb6czL4iWUr3Xt6Y%2BifRrbb4PEQs9girGLNh&X-Amz-Signature=af49148d0874cf28b202516203bb01a000b7c9df33fc516b2f24cb5bacfcfe70&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
