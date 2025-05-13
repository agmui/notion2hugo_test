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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKY43L5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDt%2B7doPPUI0L3gN1puvD2Ur3O%2F6J2fR1ALeoZxbuoK0wIgJO%2FtyGHz8HSa2QNBnAZxlMijijUqcteCV%2FWZF1yW2RUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2d7Du66r1Zx8m5TSrcAz0opKE2wp1MIaOEXjVKJCjxL4AIp%2FabL1Qp8%2F1pLxVEQYKoRBCSM7Z9LxpT2Cy2lZ4HYOPSc6GBY5%2BzE69bo9nwTIdre97pWMlM%2FRA5%2BNxwC0oRisarER6LJ1Z0A6rNOvGa0wlvck58vu3b9QFJx%2FRM2u%2FzUbkggK1gpiAKLVllS%2FGj4n5BSL3Vv8luhPRBz%2BMbdw2g9HN4iOoFJLHfawRC96YhiZfPRnWFmOFmjzR6mYSrLImMmWU2H3agTzCejT1CCSaMO13HgtPPvJj6xQC3yg5NddFeHKWdXP%2BgG5t6R9KznvUDhFzJXTLNZrqCJ7uise%2BNXiGmm%2BV%2BTZRuHVfbiyFTIAeRcVZ%2BFV1Cqtt2NfA%2FRIJquoh%2FHz0oPc7LyCDeY1JV02zxdQyap%2FTMyPbQC7bb6tMtB3Mz48%2B99%2BQzawNxPiNPpE2F%2FD7gDjeeem%2BCU0nEk8eVIk2CQQ%2BO3i8YZE1B36CEBHkmzrqN0DHUEHjltrdboFduOr61DpErCyApe%2FH4EljaMH39if0eWmJd8riA%2FYQsfwy0U8o%2BdVdg7dD4dMCNZVR%2BBAO4vu6Vpfwl5paJOmVsuHvftjMebH9RVJo0JcNqLTOV7oZJ9h0x6uSiAVBPaztSbvT5ML33isEGOqUB1rdef%2BrrFdrqlJFg4tGaUw%2FP%2BGw8E8Mp1yWl8ipg8QnH8yJftJxH5zzIYkplXouLMQBFLQvqkxNTY9gbvLQiNlYdV1R3htMeN%2FGQKSh3rShSjO3EdscyRHHPw%2FkJQtq6T0cwL69D7us4UoCVyYaNszp0GRqo3rHfzLnEPbcqREKCAXTGfZw0WF6dGivLgxdF4Pl3TqI3hkHzFNzgqu599J6rMRxo&X-Amz-Signature=35630376a182507b4f348d55997f68562fecd1d47afca5e7d61d1f0aa870ea33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKY43L5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDt%2B7doPPUI0L3gN1puvD2Ur3O%2F6J2fR1ALeoZxbuoK0wIgJO%2FtyGHz8HSa2QNBnAZxlMijijUqcteCV%2FWZF1yW2RUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2d7Du66r1Zx8m5TSrcAz0opKE2wp1MIaOEXjVKJCjxL4AIp%2FabL1Qp8%2F1pLxVEQYKoRBCSM7Z9LxpT2Cy2lZ4HYOPSc6GBY5%2BzE69bo9nwTIdre97pWMlM%2FRA5%2BNxwC0oRisarER6LJ1Z0A6rNOvGa0wlvck58vu3b9QFJx%2FRM2u%2FzUbkggK1gpiAKLVllS%2FGj4n5BSL3Vv8luhPRBz%2BMbdw2g9HN4iOoFJLHfawRC96YhiZfPRnWFmOFmjzR6mYSrLImMmWU2H3agTzCejT1CCSaMO13HgtPPvJj6xQC3yg5NddFeHKWdXP%2BgG5t6R9KznvUDhFzJXTLNZrqCJ7uise%2BNXiGmm%2BV%2BTZRuHVfbiyFTIAeRcVZ%2BFV1Cqtt2NfA%2FRIJquoh%2FHz0oPc7LyCDeY1JV02zxdQyap%2FTMyPbQC7bb6tMtB3Mz48%2B99%2BQzawNxPiNPpE2F%2FD7gDjeeem%2BCU0nEk8eVIk2CQQ%2BO3i8YZE1B36CEBHkmzrqN0DHUEHjltrdboFduOr61DpErCyApe%2FH4EljaMH39if0eWmJd8riA%2FYQsfwy0U8o%2BdVdg7dD4dMCNZVR%2BBAO4vu6Vpfwl5paJOmVsuHvftjMebH9RVJo0JcNqLTOV7oZJ9h0x6uSiAVBPaztSbvT5ML33isEGOqUB1rdef%2BrrFdrqlJFg4tGaUw%2FP%2BGw8E8Mp1yWl8ipg8QnH8yJftJxH5zzIYkplXouLMQBFLQvqkxNTY9gbvLQiNlYdV1R3htMeN%2FGQKSh3rShSjO3EdscyRHHPw%2FkJQtq6T0cwL69D7us4UoCVyYaNszp0GRqo3rHfzLnEPbcqREKCAXTGfZw0WF6dGivLgxdF4Pl3TqI3hkHzFNzgqu599J6rMRxo&X-Amz-Signature=814aaea2b9451165dfb736f0e0efffaaca374369a8fdcffd2e70ac5ac013ced5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKY43L5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDt%2B7doPPUI0L3gN1puvD2Ur3O%2F6J2fR1ALeoZxbuoK0wIgJO%2FtyGHz8HSa2QNBnAZxlMijijUqcteCV%2FWZF1yW2RUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2d7Du66r1Zx8m5TSrcAz0opKE2wp1MIaOEXjVKJCjxL4AIp%2FabL1Qp8%2F1pLxVEQYKoRBCSM7Z9LxpT2Cy2lZ4HYOPSc6GBY5%2BzE69bo9nwTIdre97pWMlM%2FRA5%2BNxwC0oRisarER6LJ1Z0A6rNOvGa0wlvck58vu3b9QFJx%2FRM2u%2FzUbkggK1gpiAKLVllS%2FGj4n5BSL3Vv8luhPRBz%2BMbdw2g9HN4iOoFJLHfawRC96YhiZfPRnWFmOFmjzR6mYSrLImMmWU2H3agTzCejT1CCSaMO13HgtPPvJj6xQC3yg5NddFeHKWdXP%2BgG5t6R9KznvUDhFzJXTLNZrqCJ7uise%2BNXiGmm%2BV%2BTZRuHVfbiyFTIAeRcVZ%2BFV1Cqtt2NfA%2FRIJquoh%2FHz0oPc7LyCDeY1JV02zxdQyap%2FTMyPbQC7bb6tMtB3Mz48%2B99%2BQzawNxPiNPpE2F%2FD7gDjeeem%2BCU0nEk8eVIk2CQQ%2BO3i8YZE1B36CEBHkmzrqN0DHUEHjltrdboFduOr61DpErCyApe%2FH4EljaMH39if0eWmJd8riA%2FYQsfwy0U8o%2BdVdg7dD4dMCNZVR%2BBAO4vu6Vpfwl5paJOmVsuHvftjMebH9RVJo0JcNqLTOV7oZJ9h0x6uSiAVBPaztSbvT5ML33isEGOqUB1rdef%2BrrFdrqlJFg4tGaUw%2FP%2BGw8E8Mp1yWl8ipg8QnH8yJftJxH5zzIYkplXouLMQBFLQvqkxNTY9gbvLQiNlYdV1R3htMeN%2FGQKSh3rShSjO3EdscyRHHPw%2FkJQtq6T0cwL69D7us4UoCVyYaNszp0GRqo3rHfzLnEPbcqREKCAXTGfZw0WF6dGivLgxdF4Pl3TqI3hkHzFNzgqu599J6rMRxo&X-Amz-Signature=77fead40176dd5012dad1854f42e7d9df7757caeed3aa6a11d67efb76c14c012&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKY43L5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDt%2B7doPPUI0L3gN1puvD2Ur3O%2F6J2fR1ALeoZxbuoK0wIgJO%2FtyGHz8HSa2QNBnAZxlMijijUqcteCV%2FWZF1yW2RUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2d7Du66r1Zx8m5TSrcAz0opKE2wp1MIaOEXjVKJCjxL4AIp%2FabL1Qp8%2F1pLxVEQYKoRBCSM7Z9LxpT2Cy2lZ4HYOPSc6GBY5%2BzE69bo9nwTIdre97pWMlM%2FRA5%2BNxwC0oRisarER6LJ1Z0A6rNOvGa0wlvck58vu3b9QFJx%2FRM2u%2FzUbkggK1gpiAKLVllS%2FGj4n5BSL3Vv8luhPRBz%2BMbdw2g9HN4iOoFJLHfawRC96YhiZfPRnWFmOFmjzR6mYSrLImMmWU2H3agTzCejT1CCSaMO13HgtPPvJj6xQC3yg5NddFeHKWdXP%2BgG5t6R9KznvUDhFzJXTLNZrqCJ7uise%2BNXiGmm%2BV%2BTZRuHVfbiyFTIAeRcVZ%2BFV1Cqtt2NfA%2FRIJquoh%2FHz0oPc7LyCDeY1JV02zxdQyap%2FTMyPbQC7bb6tMtB3Mz48%2B99%2BQzawNxPiNPpE2F%2FD7gDjeeem%2BCU0nEk8eVIk2CQQ%2BO3i8YZE1B36CEBHkmzrqN0DHUEHjltrdboFduOr61DpErCyApe%2FH4EljaMH39if0eWmJd8riA%2FYQsfwy0U8o%2BdVdg7dD4dMCNZVR%2BBAO4vu6Vpfwl5paJOmVsuHvftjMebH9RVJo0JcNqLTOV7oZJ9h0x6uSiAVBPaztSbvT5ML33isEGOqUB1rdef%2BrrFdrqlJFg4tGaUw%2FP%2BGw8E8Mp1yWl8ipg8QnH8yJftJxH5zzIYkplXouLMQBFLQvqkxNTY9gbvLQiNlYdV1R3htMeN%2FGQKSh3rShSjO3EdscyRHHPw%2FkJQtq6T0cwL69D7us4UoCVyYaNszp0GRqo3rHfzLnEPbcqREKCAXTGfZw0WF6dGivLgxdF4Pl3TqI3hkHzFNzgqu599J6rMRxo&X-Amz-Signature=b6f0a535a8773f22cbb010d1b4ce69f230d6ef63b591e03848e0678ee78f34f1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKY43L5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDt%2B7doPPUI0L3gN1puvD2Ur3O%2F6J2fR1ALeoZxbuoK0wIgJO%2FtyGHz8HSa2QNBnAZxlMijijUqcteCV%2FWZF1yW2RUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2d7Du66r1Zx8m5TSrcAz0opKE2wp1MIaOEXjVKJCjxL4AIp%2FabL1Qp8%2F1pLxVEQYKoRBCSM7Z9LxpT2Cy2lZ4HYOPSc6GBY5%2BzE69bo9nwTIdre97pWMlM%2FRA5%2BNxwC0oRisarER6LJ1Z0A6rNOvGa0wlvck58vu3b9QFJx%2FRM2u%2FzUbkggK1gpiAKLVllS%2FGj4n5BSL3Vv8luhPRBz%2BMbdw2g9HN4iOoFJLHfawRC96YhiZfPRnWFmOFmjzR6mYSrLImMmWU2H3agTzCejT1CCSaMO13HgtPPvJj6xQC3yg5NddFeHKWdXP%2BgG5t6R9KznvUDhFzJXTLNZrqCJ7uise%2BNXiGmm%2BV%2BTZRuHVfbiyFTIAeRcVZ%2BFV1Cqtt2NfA%2FRIJquoh%2FHz0oPc7LyCDeY1JV02zxdQyap%2FTMyPbQC7bb6tMtB3Mz48%2B99%2BQzawNxPiNPpE2F%2FD7gDjeeem%2BCU0nEk8eVIk2CQQ%2BO3i8YZE1B36CEBHkmzrqN0DHUEHjltrdboFduOr61DpErCyApe%2FH4EljaMH39if0eWmJd8riA%2FYQsfwy0U8o%2BdVdg7dD4dMCNZVR%2BBAO4vu6Vpfwl5paJOmVsuHvftjMebH9RVJo0JcNqLTOV7oZJ9h0x6uSiAVBPaztSbvT5ML33isEGOqUB1rdef%2BrrFdrqlJFg4tGaUw%2FP%2BGw8E8Mp1yWl8ipg8QnH8yJftJxH5zzIYkplXouLMQBFLQvqkxNTY9gbvLQiNlYdV1R3htMeN%2FGQKSh3rShSjO3EdscyRHHPw%2FkJQtq6T0cwL69D7us4UoCVyYaNszp0GRqo3rHfzLnEPbcqREKCAXTGfZw0WF6dGivLgxdF4Pl3TqI3hkHzFNzgqu599J6rMRxo&X-Amz-Signature=26b4e5ad6957a2341d92a78f6666c3a1651da499a122e0e3592c7577646b0424&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKY43L5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDt%2B7doPPUI0L3gN1puvD2Ur3O%2F6J2fR1ALeoZxbuoK0wIgJO%2FtyGHz8HSa2QNBnAZxlMijijUqcteCV%2FWZF1yW2RUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2d7Du66r1Zx8m5TSrcAz0opKE2wp1MIaOEXjVKJCjxL4AIp%2FabL1Qp8%2F1pLxVEQYKoRBCSM7Z9LxpT2Cy2lZ4HYOPSc6GBY5%2BzE69bo9nwTIdre97pWMlM%2FRA5%2BNxwC0oRisarER6LJ1Z0A6rNOvGa0wlvck58vu3b9QFJx%2FRM2u%2FzUbkggK1gpiAKLVllS%2FGj4n5BSL3Vv8luhPRBz%2BMbdw2g9HN4iOoFJLHfawRC96YhiZfPRnWFmOFmjzR6mYSrLImMmWU2H3agTzCejT1CCSaMO13HgtPPvJj6xQC3yg5NddFeHKWdXP%2BgG5t6R9KznvUDhFzJXTLNZrqCJ7uise%2BNXiGmm%2BV%2BTZRuHVfbiyFTIAeRcVZ%2BFV1Cqtt2NfA%2FRIJquoh%2FHz0oPc7LyCDeY1JV02zxdQyap%2FTMyPbQC7bb6tMtB3Mz48%2B99%2BQzawNxPiNPpE2F%2FD7gDjeeem%2BCU0nEk8eVIk2CQQ%2BO3i8YZE1B36CEBHkmzrqN0DHUEHjltrdboFduOr61DpErCyApe%2FH4EljaMH39if0eWmJd8riA%2FYQsfwy0U8o%2BdVdg7dD4dMCNZVR%2BBAO4vu6Vpfwl5paJOmVsuHvftjMebH9RVJo0JcNqLTOV7oZJ9h0x6uSiAVBPaztSbvT5ML33isEGOqUB1rdef%2BrrFdrqlJFg4tGaUw%2FP%2BGw8E8Mp1yWl8ipg8QnH8yJftJxH5zzIYkplXouLMQBFLQvqkxNTY9gbvLQiNlYdV1R3htMeN%2FGQKSh3rShSjO3EdscyRHHPw%2FkJQtq6T0cwL69D7us4UoCVyYaNszp0GRqo3rHfzLnEPbcqREKCAXTGfZw0WF6dGivLgxdF4Pl3TqI3hkHzFNzgqu599J6rMRxo&X-Amz-Signature=9c6dfab5b26a043d1d4a8c313b4df3d06ad42fbf18c71e247ce8316d0e6cfcc2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKY43L5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDt%2B7doPPUI0L3gN1puvD2Ur3O%2F6J2fR1ALeoZxbuoK0wIgJO%2FtyGHz8HSa2QNBnAZxlMijijUqcteCV%2FWZF1yW2RUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2d7Du66r1Zx8m5TSrcAz0opKE2wp1MIaOEXjVKJCjxL4AIp%2FabL1Qp8%2F1pLxVEQYKoRBCSM7Z9LxpT2Cy2lZ4HYOPSc6GBY5%2BzE69bo9nwTIdre97pWMlM%2FRA5%2BNxwC0oRisarER6LJ1Z0A6rNOvGa0wlvck58vu3b9QFJx%2FRM2u%2FzUbkggK1gpiAKLVllS%2FGj4n5BSL3Vv8luhPRBz%2BMbdw2g9HN4iOoFJLHfawRC96YhiZfPRnWFmOFmjzR6mYSrLImMmWU2H3agTzCejT1CCSaMO13HgtPPvJj6xQC3yg5NddFeHKWdXP%2BgG5t6R9KznvUDhFzJXTLNZrqCJ7uise%2BNXiGmm%2BV%2BTZRuHVfbiyFTIAeRcVZ%2BFV1Cqtt2NfA%2FRIJquoh%2FHz0oPc7LyCDeY1JV02zxdQyap%2FTMyPbQC7bb6tMtB3Mz48%2B99%2BQzawNxPiNPpE2F%2FD7gDjeeem%2BCU0nEk8eVIk2CQQ%2BO3i8YZE1B36CEBHkmzrqN0DHUEHjltrdboFduOr61DpErCyApe%2FH4EljaMH39if0eWmJd8riA%2FYQsfwy0U8o%2BdVdg7dD4dMCNZVR%2BBAO4vu6Vpfwl5paJOmVsuHvftjMebH9RVJo0JcNqLTOV7oZJ9h0x6uSiAVBPaztSbvT5ML33isEGOqUB1rdef%2BrrFdrqlJFg4tGaUw%2FP%2BGw8E8Mp1yWl8ipg8QnH8yJftJxH5zzIYkplXouLMQBFLQvqkxNTY9gbvLQiNlYdV1R3htMeN%2FGQKSh3rShSjO3EdscyRHHPw%2FkJQtq6T0cwL69D7us4UoCVyYaNszp0GRqo3rHfzLnEPbcqREKCAXTGfZw0WF6dGivLgxdF4Pl3TqI3hkHzFNzgqu599J6rMRxo&X-Amz-Signature=23615c49c5b99edd9a7b67bd9ff02a992b5e54ae6a9640298a360a353aacb650&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
