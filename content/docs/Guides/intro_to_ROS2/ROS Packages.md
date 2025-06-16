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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MFJI6EB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICb0LKQf1%2BMXVnO0WYUjpEMesvrIrCqGHA6cyUMFko2FAiEA7%2FqHJjYdy0fMpMdTtRGMFhaYIrBiQZTV%2FOiXLh9yxI0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBNUemU%2By%2FOAvp%2FnFircA39qV3mnYRLE8kY4QO3LVLIKJQwSC9Jhwuv79BZdMr0QvJ8%2FppjDNGhVKyLDn9fkQHm3sDx59eEb383kbhS%2FiT75Y%2BK%2FimLJM913tAS42cfAbcYaDG0Bv%2FAOR4l20OwjNlcHvt4gzM2qYOy4aOykIwyQWEl5lZ8iw3gzzt5Fm5H73E3sLlBW02nUxwqzPYBr70LTGshthyKRkahxopa4xDLVeXpt82V0ZVshOrSVH29baWinf9sDeG7QaNvrAoSzFJ4lIYJZvXNwZTDl1b%2FxlTQKXwHcjLMDzqOmlQR8kRPSO1hZDj1EfWx6OEzen3e%2FHyEjvs%2FJdI9L41rQMEhFEB2vqF27Tfg4Hla%2Bu4Z5%2FGRmuhTGQX6wJYrsMjP3j2fP8pICrB67M%2FQKorXsbb5N6GBQSqAV57WbFqWuO%2FoI4PX16HCohHZCZQPYJAC0IrP4oHzFCPve8a3aVFcVJ3eSkXaeGVo2I07lPHkGMX2D0oiLT3ld7RCwnYMEmLTvggBwSD7DFHc9Y6c3lnttR%2F4H6YVy19UxrLI9Q6H7VpuVdiBNvDsXz9Pnhyqg3Yx2mhPn7q4NZYGSvrSxAR8LY%2FZPxUW6hvGseOdUsvPFa89zmnW9UnBkwft6VZPHtExzMIbgwcIGOqUBowinlYpWhRnhgbUML63KH1KO9LsmkU2bqZXPmq86IxRrNwYTKAHh6sYnsFW6n7V2MF72plZf5QViwRQOZFoplqIkXOfBuYGyetem8JTzaYabs8LcqQ3pt995HUrModjLmKZPfliWjiEWz%2BYc6o2Zjd6XYS8gzw4Z73PsVvpAEH2myRPNvOj4H%2BjbUUSkZrki982crbeHb4oNL3%2FzPAVpwyXkvgp%2F&X-Amz-Signature=7d2c66224faab7bc4078c63a558cfd761baa58443da6c6d5a951a52844088efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MFJI6EB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICb0LKQf1%2BMXVnO0WYUjpEMesvrIrCqGHA6cyUMFko2FAiEA7%2FqHJjYdy0fMpMdTtRGMFhaYIrBiQZTV%2FOiXLh9yxI0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBNUemU%2By%2FOAvp%2FnFircA39qV3mnYRLE8kY4QO3LVLIKJQwSC9Jhwuv79BZdMr0QvJ8%2FppjDNGhVKyLDn9fkQHm3sDx59eEb383kbhS%2FiT75Y%2BK%2FimLJM913tAS42cfAbcYaDG0Bv%2FAOR4l20OwjNlcHvt4gzM2qYOy4aOykIwyQWEl5lZ8iw3gzzt5Fm5H73E3sLlBW02nUxwqzPYBr70LTGshthyKRkahxopa4xDLVeXpt82V0ZVshOrSVH29baWinf9sDeG7QaNvrAoSzFJ4lIYJZvXNwZTDl1b%2FxlTQKXwHcjLMDzqOmlQR8kRPSO1hZDj1EfWx6OEzen3e%2FHyEjvs%2FJdI9L41rQMEhFEB2vqF27Tfg4Hla%2Bu4Z5%2FGRmuhTGQX6wJYrsMjP3j2fP8pICrB67M%2FQKorXsbb5N6GBQSqAV57WbFqWuO%2FoI4PX16HCohHZCZQPYJAC0IrP4oHzFCPve8a3aVFcVJ3eSkXaeGVo2I07lPHkGMX2D0oiLT3ld7RCwnYMEmLTvggBwSD7DFHc9Y6c3lnttR%2F4H6YVy19UxrLI9Q6H7VpuVdiBNvDsXz9Pnhyqg3Yx2mhPn7q4NZYGSvrSxAR8LY%2FZPxUW6hvGseOdUsvPFa89zmnW9UnBkwft6VZPHtExzMIbgwcIGOqUBowinlYpWhRnhgbUML63KH1KO9LsmkU2bqZXPmq86IxRrNwYTKAHh6sYnsFW6n7V2MF72plZf5QViwRQOZFoplqIkXOfBuYGyetem8JTzaYabs8LcqQ3pt995HUrModjLmKZPfliWjiEWz%2BYc6o2Zjd6XYS8gzw4Z73PsVvpAEH2myRPNvOj4H%2BjbUUSkZrki982crbeHb4oNL3%2FzPAVpwyXkvgp%2F&X-Amz-Signature=b9b4957e5ac3f10ed2949c1287424e690824eccff241a00343dff0fedee14855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MFJI6EB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICb0LKQf1%2BMXVnO0WYUjpEMesvrIrCqGHA6cyUMFko2FAiEA7%2FqHJjYdy0fMpMdTtRGMFhaYIrBiQZTV%2FOiXLh9yxI0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBNUemU%2By%2FOAvp%2FnFircA39qV3mnYRLE8kY4QO3LVLIKJQwSC9Jhwuv79BZdMr0QvJ8%2FppjDNGhVKyLDn9fkQHm3sDx59eEb383kbhS%2FiT75Y%2BK%2FimLJM913tAS42cfAbcYaDG0Bv%2FAOR4l20OwjNlcHvt4gzM2qYOy4aOykIwyQWEl5lZ8iw3gzzt5Fm5H73E3sLlBW02nUxwqzPYBr70LTGshthyKRkahxopa4xDLVeXpt82V0ZVshOrSVH29baWinf9sDeG7QaNvrAoSzFJ4lIYJZvXNwZTDl1b%2FxlTQKXwHcjLMDzqOmlQR8kRPSO1hZDj1EfWx6OEzen3e%2FHyEjvs%2FJdI9L41rQMEhFEB2vqF27Tfg4Hla%2Bu4Z5%2FGRmuhTGQX6wJYrsMjP3j2fP8pICrB67M%2FQKorXsbb5N6GBQSqAV57WbFqWuO%2FoI4PX16HCohHZCZQPYJAC0IrP4oHzFCPve8a3aVFcVJ3eSkXaeGVo2I07lPHkGMX2D0oiLT3ld7RCwnYMEmLTvggBwSD7DFHc9Y6c3lnttR%2F4H6YVy19UxrLI9Q6H7VpuVdiBNvDsXz9Pnhyqg3Yx2mhPn7q4NZYGSvrSxAR8LY%2FZPxUW6hvGseOdUsvPFa89zmnW9UnBkwft6VZPHtExzMIbgwcIGOqUBowinlYpWhRnhgbUML63KH1KO9LsmkU2bqZXPmq86IxRrNwYTKAHh6sYnsFW6n7V2MF72plZf5QViwRQOZFoplqIkXOfBuYGyetem8JTzaYabs8LcqQ3pt995HUrModjLmKZPfliWjiEWz%2BYc6o2Zjd6XYS8gzw4Z73PsVvpAEH2myRPNvOj4H%2BjbUUSkZrki982crbeHb4oNL3%2FzPAVpwyXkvgp%2F&X-Amz-Signature=ac60e23976ce5eeecc846ca37c73ab917070a891ad99f7907d67d60b7fd09e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MFJI6EB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICb0LKQf1%2BMXVnO0WYUjpEMesvrIrCqGHA6cyUMFko2FAiEA7%2FqHJjYdy0fMpMdTtRGMFhaYIrBiQZTV%2FOiXLh9yxI0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBNUemU%2By%2FOAvp%2FnFircA39qV3mnYRLE8kY4QO3LVLIKJQwSC9Jhwuv79BZdMr0QvJ8%2FppjDNGhVKyLDn9fkQHm3sDx59eEb383kbhS%2FiT75Y%2BK%2FimLJM913tAS42cfAbcYaDG0Bv%2FAOR4l20OwjNlcHvt4gzM2qYOy4aOykIwyQWEl5lZ8iw3gzzt5Fm5H73E3sLlBW02nUxwqzPYBr70LTGshthyKRkahxopa4xDLVeXpt82V0ZVshOrSVH29baWinf9sDeG7QaNvrAoSzFJ4lIYJZvXNwZTDl1b%2FxlTQKXwHcjLMDzqOmlQR8kRPSO1hZDj1EfWx6OEzen3e%2FHyEjvs%2FJdI9L41rQMEhFEB2vqF27Tfg4Hla%2Bu4Z5%2FGRmuhTGQX6wJYrsMjP3j2fP8pICrB67M%2FQKorXsbb5N6GBQSqAV57WbFqWuO%2FoI4PX16HCohHZCZQPYJAC0IrP4oHzFCPve8a3aVFcVJ3eSkXaeGVo2I07lPHkGMX2D0oiLT3ld7RCwnYMEmLTvggBwSD7DFHc9Y6c3lnttR%2F4H6YVy19UxrLI9Q6H7VpuVdiBNvDsXz9Pnhyqg3Yx2mhPn7q4NZYGSvrSxAR8LY%2FZPxUW6hvGseOdUsvPFa89zmnW9UnBkwft6VZPHtExzMIbgwcIGOqUBowinlYpWhRnhgbUML63KH1KO9LsmkU2bqZXPmq86IxRrNwYTKAHh6sYnsFW6n7V2MF72plZf5QViwRQOZFoplqIkXOfBuYGyetem8JTzaYabs8LcqQ3pt995HUrModjLmKZPfliWjiEWz%2BYc6o2Zjd6XYS8gzw4Z73PsVvpAEH2myRPNvOj4H%2BjbUUSkZrki982crbeHb4oNL3%2FzPAVpwyXkvgp%2F&X-Amz-Signature=7ebffe3e22adb3a121cff455739e4e798820a7fd9c7d81e58d91a6b0f674efec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MFJI6EB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICb0LKQf1%2BMXVnO0WYUjpEMesvrIrCqGHA6cyUMFko2FAiEA7%2FqHJjYdy0fMpMdTtRGMFhaYIrBiQZTV%2FOiXLh9yxI0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBNUemU%2By%2FOAvp%2FnFircA39qV3mnYRLE8kY4QO3LVLIKJQwSC9Jhwuv79BZdMr0QvJ8%2FppjDNGhVKyLDn9fkQHm3sDx59eEb383kbhS%2FiT75Y%2BK%2FimLJM913tAS42cfAbcYaDG0Bv%2FAOR4l20OwjNlcHvt4gzM2qYOy4aOykIwyQWEl5lZ8iw3gzzt5Fm5H73E3sLlBW02nUxwqzPYBr70LTGshthyKRkahxopa4xDLVeXpt82V0ZVshOrSVH29baWinf9sDeG7QaNvrAoSzFJ4lIYJZvXNwZTDl1b%2FxlTQKXwHcjLMDzqOmlQR8kRPSO1hZDj1EfWx6OEzen3e%2FHyEjvs%2FJdI9L41rQMEhFEB2vqF27Tfg4Hla%2Bu4Z5%2FGRmuhTGQX6wJYrsMjP3j2fP8pICrB67M%2FQKorXsbb5N6GBQSqAV57WbFqWuO%2FoI4PX16HCohHZCZQPYJAC0IrP4oHzFCPve8a3aVFcVJ3eSkXaeGVo2I07lPHkGMX2D0oiLT3ld7RCwnYMEmLTvggBwSD7DFHc9Y6c3lnttR%2F4H6YVy19UxrLI9Q6H7VpuVdiBNvDsXz9Pnhyqg3Yx2mhPn7q4NZYGSvrSxAR8LY%2FZPxUW6hvGseOdUsvPFa89zmnW9UnBkwft6VZPHtExzMIbgwcIGOqUBowinlYpWhRnhgbUML63KH1KO9LsmkU2bqZXPmq86IxRrNwYTKAHh6sYnsFW6n7V2MF72plZf5QViwRQOZFoplqIkXOfBuYGyetem8JTzaYabs8LcqQ3pt995HUrModjLmKZPfliWjiEWz%2BYc6o2Zjd6XYS8gzw4Z73PsVvpAEH2myRPNvOj4H%2BjbUUSkZrki982crbeHb4oNL3%2FzPAVpwyXkvgp%2F&X-Amz-Signature=14e123d61ddf4a5e018a2679d982a81dd9f779c7d987ecfb38efc5864299cb78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MFJI6EB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICb0LKQf1%2BMXVnO0WYUjpEMesvrIrCqGHA6cyUMFko2FAiEA7%2FqHJjYdy0fMpMdTtRGMFhaYIrBiQZTV%2FOiXLh9yxI0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBNUemU%2By%2FOAvp%2FnFircA39qV3mnYRLE8kY4QO3LVLIKJQwSC9Jhwuv79BZdMr0QvJ8%2FppjDNGhVKyLDn9fkQHm3sDx59eEb383kbhS%2FiT75Y%2BK%2FimLJM913tAS42cfAbcYaDG0Bv%2FAOR4l20OwjNlcHvt4gzM2qYOy4aOykIwyQWEl5lZ8iw3gzzt5Fm5H73E3sLlBW02nUxwqzPYBr70LTGshthyKRkahxopa4xDLVeXpt82V0ZVshOrSVH29baWinf9sDeG7QaNvrAoSzFJ4lIYJZvXNwZTDl1b%2FxlTQKXwHcjLMDzqOmlQR8kRPSO1hZDj1EfWx6OEzen3e%2FHyEjvs%2FJdI9L41rQMEhFEB2vqF27Tfg4Hla%2Bu4Z5%2FGRmuhTGQX6wJYrsMjP3j2fP8pICrB67M%2FQKorXsbb5N6GBQSqAV57WbFqWuO%2FoI4PX16HCohHZCZQPYJAC0IrP4oHzFCPve8a3aVFcVJ3eSkXaeGVo2I07lPHkGMX2D0oiLT3ld7RCwnYMEmLTvggBwSD7DFHc9Y6c3lnttR%2F4H6YVy19UxrLI9Q6H7VpuVdiBNvDsXz9Pnhyqg3Yx2mhPn7q4NZYGSvrSxAR8LY%2FZPxUW6hvGseOdUsvPFa89zmnW9UnBkwft6VZPHtExzMIbgwcIGOqUBowinlYpWhRnhgbUML63KH1KO9LsmkU2bqZXPmq86IxRrNwYTKAHh6sYnsFW6n7V2MF72plZf5QViwRQOZFoplqIkXOfBuYGyetem8JTzaYabs8LcqQ3pt995HUrModjLmKZPfliWjiEWz%2BYc6o2Zjd6XYS8gzw4Z73PsVvpAEH2myRPNvOj4H%2BjbUUSkZrki982crbeHb4oNL3%2FzPAVpwyXkvgp%2F&X-Amz-Signature=ccecd3db67441fed281e8b7a9cf27d93cf7133ed6013b56d48ae3cc4189646d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MFJI6EB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICb0LKQf1%2BMXVnO0WYUjpEMesvrIrCqGHA6cyUMFko2FAiEA7%2FqHJjYdy0fMpMdTtRGMFhaYIrBiQZTV%2FOiXLh9yxI0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBNUemU%2By%2FOAvp%2FnFircA39qV3mnYRLE8kY4QO3LVLIKJQwSC9Jhwuv79BZdMr0QvJ8%2FppjDNGhVKyLDn9fkQHm3sDx59eEb383kbhS%2FiT75Y%2BK%2FimLJM913tAS42cfAbcYaDG0Bv%2FAOR4l20OwjNlcHvt4gzM2qYOy4aOykIwyQWEl5lZ8iw3gzzt5Fm5H73E3sLlBW02nUxwqzPYBr70LTGshthyKRkahxopa4xDLVeXpt82V0ZVshOrSVH29baWinf9sDeG7QaNvrAoSzFJ4lIYJZvXNwZTDl1b%2FxlTQKXwHcjLMDzqOmlQR8kRPSO1hZDj1EfWx6OEzen3e%2FHyEjvs%2FJdI9L41rQMEhFEB2vqF27Tfg4Hla%2Bu4Z5%2FGRmuhTGQX6wJYrsMjP3j2fP8pICrB67M%2FQKorXsbb5N6GBQSqAV57WbFqWuO%2FoI4PX16HCohHZCZQPYJAC0IrP4oHzFCPve8a3aVFcVJ3eSkXaeGVo2I07lPHkGMX2D0oiLT3ld7RCwnYMEmLTvggBwSD7DFHc9Y6c3lnttR%2F4H6YVy19UxrLI9Q6H7VpuVdiBNvDsXz9Pnhyqg3Yx2mhPn7q4NZYGSvrSxAR8LY%2FZPxUW6hvGseOdUsvPFa89zmnW9UnBkwft6VZPHtExzMIbgwcIGOqUBowinlYpWhRnhgbUML63KH1KO9LsmkU2bqZXPmq86IxRrNwYTKAHh6sYnsFW6n7V2MF72plZf5QViwRQOZFoplqIkXOfBuYGyetem8JTzaYabs8LcqQ3pt995HUrModjLmKZPfliWjiEWz%2BYc6o2Zjd6XYS8gzw4Z73PsVvpAEH2myRPNvOj4H%2BjbUUSkZrki982crbeHb4oNL3%2FzPAVpwyXkvgp%2F&X-Amz-Signature=4c18ae2d6ae767de6f70e8eab647f1dc3e134266f9ae20291817f64addbfb1e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
