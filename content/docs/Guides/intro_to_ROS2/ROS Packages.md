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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKWBVLZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDPeoX0Z6vkY%2BWHwecmNMT0izBTY93DNxhPKSr%2FHFq14AiEAogdKDQGoW%2BMoPoQuwCu2CA021xMQrd4d6kiQDtR3KmMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIgGFSC6hY2OiMX8DCrcA4Hs6Egu9bmjrOBW3LB9RGauBsrL2HNX9sWWsKeyuWEEir8KTh9yk8BCUJ8LrRiF1P4s3aL%2FGE8z4Gl3Fm21mhBLhtBBcJJfmzFb89AQy3rTJsjAXYTAjP%2FeG%2BYaiQkE5NeevPwyDV%2BWHG8aX9zPWk3KosUNivSV429xIDCyn%2B21nwEWWkxq0HKrd92CnaVh1MH5Cn3wLps8e9s2ZJc4XO50wlPa3z3LpIxqBMGSiC5yqEPHTCaLIO%2BcpOqJ6wCDVWVtiVsyAm%2BGCrRbTTgkr1cE4ko9WZDDtOVq2bqtkC1t%2BUePAXiX%2BLjwupDQuk8PlGjpjSFEhSTCTLfxa%2BL13DjN%2BULKVX4S1zeIKSygQkeeIPKOz08mQBzLMZUj6e1XGI9pOqb2lYttS0YOmPMbWdQYCEeAzWIqXHILlmzo5odKmbM3vdhK3I1W2Nkqokfz7D8G%2BdKifCqIMvSe4UU1gPdalsQh6gXf8vkccWqmM1VyfzkqA08pddVykMB0DZyVbaa9DqPTSB6qTDOyZ4P3igK91dY%2FTRzKUeZ7C2KZGl%2FaA%2BWW3jdtQOyq%2BIE5dmCOcoWU0Ofvc6BC9o3EEU%2FSYuyQi8uDaL2S1NPo42BcT7I8iwJYyOgjdMz0NqV3MM3M9sIGOqUBTXJqLW4TRGUgUxdnF3pYQAOMsoqVohxRxZRLhYvroeOeYug8ycV2X2AdsC%2Bcd7aRszOWmS2A9vcZOeqLUraP0PljTX9pjMK9sKJkKEBdcFiaeFoaz5hOgIoGMf7H8AgcYC3dkKpVSCn7TMubRdG8saQ2jG%2FVwzJSnWSO2%2Bf7EsyToswfqGHhGu8qomsCTWzsocBh7PpZzZgV0HkXsOJHLIX%2BxbO0&X-Amz-Signature=426bb358b0a4060df3f99f9c8ceed913ef8b6b2bc354a46f917977296c687c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKWBVLZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDPeoX0Z6vkY%2BWHwecmNMT0izBTY93DNxhPKSr%2FHFq14AiEAogdKDQGoW%2BMoPoQuwCu2CA021xMQrd4d6kiQDtR3KmMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIgGFSC6hY2OiMX8DCrcA4Hs6Egu9bmjrOBW3LB9RGauBsrL2HNX9sWWsKeyuWEEir8KTh9yk8BCUJ8LrRiF1P4s3aL%2FGE8z4Gl3Fm21mhBLhtBBcJJfmzFb89AQy3rTJsjAXYTAjP%2FeG%2BYaiQkE5NeevPwyDV%2BWHG8aX9zPWk3KosUNivSV429xIDCyn%2B21nwEWWkxq0HKrd92CnaVh1MH5Cn3wLps8e9s2ZJc4XO50wlPa3z3LpIxqBMGSiC5yqEPHTCaLIO%2BcpOqJ6wCDVWVtiVsyAm%2BGCrRbTTgkr1cE4ko9WZDDtOVq2bqtkC1t%2BUePAXiX%2BLjwupDQuk8PlGjpjSFEhSTCTLfxa%2BL13DjN%2BULKVX4S1zeIKSygQkeeIPKOz08mQBzLMZUj6e1XGI9pOqb2lYttS0YOmPMbWdQYCEeAzWIqXHILlmzo5odKmbM3vdhK3I1W2Nkqokfz7D8G%2BdKifCqIMvSe4UU1gPdalsQh6gXf8vkccWqmM1VyfzkqA08pddVykMB0DZyVbaa9DqPTSB6qTDOyZ4P3igK91dY%2FTRzKUeZ7C2KZGl%2FaA%2BWW3jdtQOyq%2BIE5dmCOcoWU0Ofvc6BC9o3EEU%2FSYuyQi8uDaL2S1NPo42BcT7I8iwJYyOgjdMz0NqV3MM3M9sIGOqUBTXJqLW4TRGUgUxdnF3pYQAOMsoqVohxRxZRLhYvroeOeYug8ycV2X2AdsC%2Bcd7aRszOWmS2A9vcZOeqLUraP0PljTX9pjMK9sKJkKEBdcFiaeFoaz5hOgIoGMf7H8AgcYC3dkKpVSCn7TMubRdG8saQ2jG%2FVwzJSnWSO2%2Bf7EsyToswfqGHhGu8qomsCTWzsocBh7PpZzZgV0HkXsOJHLIX%2BxbO0&X-Amz-Signature=719f013f65af063e543a0fa45cbe5f9ebf9ecf0032d769993320adf1952933fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKWBVLZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDPeoX0Z6vkY%2BWHwecmNMT0izBTY93DNxhPKSr%2FHFq14AiEAogdKDQGoW%2BMoPoQuwCu2CA021xMQrd4d6kiQDtR3KmMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIgGFSC6hY2OiMX8DCrcA4Hs6Egu9bmjrOBW3LB9RGauBsrL2HNX9sWWsKeyuWEEir8KTh9yk8BCUJ8LrRiF1P4s3aL%2FGE8z4Gl3Fm21mhBLhtBBcJJfmzFb89AQy3rTJsjAXYTAjP%2FeG%2BYaiQkE5NeevPwyDV%2BWHG8aX9zPWk3KosUNivSV429xIDCyn%2B21nwEWWkxq0HKrd92CnaVh1MH5Cn3wLps8e9s2ZJc4XO50wlPa3z3LpIxqBMGSiC5yqEPHTCaLIO%2BcpOqJ6wCDVWVtiVsyAm%2BGCrRbTTgkr1cE4ko9WZDDtOVq2bqtkC1t%2BUePAXiX%2BLjwupDQuk8PlGjpjSFEhSTCTLfxa%2BL13DjN%2BULKVX4S1zeIKSygQkeeIPKOz08mQBzLMZUj6e1XGI9pOqb2lYttS0YOmPMbWdQYCEeAzWIqXHILlmzo5odKmbM3vdhK3I1W2Nkqokfz7D8G%2BdKifCqIMvSe4UU1gPdalsQh6gXf8vkccWqmM1VyfzkqA08pddVykMB0DZyVbaa9DqPTSB6qTDOyZ4P3igK91dY%2FTRzKUeZ7C2KZGl%2FaA%2BWW3jdtQOyq%2BIE5dmCOcoWU0Ofvc6BC9o3EEU%2FSYuyQi8uDaL2S1NPo42BcT7I8iwJYyOgjdMz0NqV3MM3M9sIGOqUBTXJqLW4TRGUgUxdnF3pYQAOMsoqVohxRxZRLhYvroeOeYug8ycV2X2AdsC%2Bcd7aRszOWmS2A9vcZOeqLUraP0PljTX9pjMK9sKJkKEBdcFiaeFoaz5hOgIoGMf7H8AgcYC3dkKpVSCn7TMubRdG8saQ2jG%2FVwzJSnWSO2%2Bf7EsyToswfqGHhGu8qomsCTWzsocBh7PpZzZgV0HkXsOJHLIX%2BxbO0&X-Amz-Signature=fe91d4205ea5d9931257c350924244ab3cb858e79c11aafd33c79ff5fc43a245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKWBVLZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDPeoX0Z6vkY%2BWHwecmNMT0izBTY93DNxhPKSr%2FHFq14AiEAogdKDQGoW%2BMoPoQuwCu2CA021xMQrd4d6kiQDtR3KmMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIgGFSC6hY2OiMX8DCrcA4Hs6Egu9bmjrOBW3LB9RGauBsrL2HNX9sWWsKeyuWEEir8KTh9yk8BCUJ8LrRiF1P4s3aL%2FGE8z4Gl3Fm21mhBLhtBBcJJfmzFb89AQy3rTJsjAXYTAjP%2FeG%2BYaiQkE5NeevPwyDV%2BWHG8aX9zPWk3KosUNivSV429xIDCyn%2B21nwEWWkxq0HKrd92CnaVh1MH5Cn3wLps8e9s2ZJc4XO50wlPa3z3LpIxqBMGSiC5yqEPHTCaLIO%2BcpOqJ6wCDVWVtiVsyAm%2BGCrRbTTgkr1cE4ko9WZDDtOVq2bqtkC1t%2BUePAXiX%2BLjwupDQuk8PlGjpjSFEhSTCTLfxa%2BL13DjN%2BULKVX4S1zeIKSygQkeeIPKOz08mQBzLMZUj6e1XGI9pOqb2lYttS0YOmPMbWdQYCEeAzWIqXHILlmzo5odKmbM3vdhK3I1W2Nkqokfz7D8G%2BdKifCqIMvSe4UU1gPdalsQh6gXf8vkccWqmM1VyfzkqA08pddVykMB0DZyVbaa9DqPTSB6qTDOyZ4P3igK91dY%2FTRzKUeZ7C2KZGl%2FaA%2BWW3jdtQOyq%2BIE5dmCOcoWU0Ofvc6BC9o3EEU%2FSYuyQi8uDaL2S1NPo42BcT7I8iwJYyOgjdMz0NqV3MM3M9sIGOqUBTXJqLW4TRGUgUxdnF3pYQAOMsoqVohxRxZRLhYvroeOeYug8ycV2X2AdsC%2Bcd7aRszOWmS2A9vcZOeqLUraP0PljTX9pjMK9sKJkKEBdcFiaeFoaz5hOgIoGMf7H8AgcYC3dkKpVSCn7TMubRdG8saQ2jG%2FVwzJSnWSO2%2Bf7EsyToswfqGHhGu8qomsCTWzsocBh7PpZzZgV0HkXsOJHLIX%2BxbO0&X-Amz-Signature=fe9e6b91ea49d2d51c58efabb16ca8422e1313e8683cfd0a8ebb950683a38dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKWBVLZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDPeoX0Z6vkY%2BWHwecmNMT0izBTY93DNxhPKSr%2FHFq14AiEAogdKDQGoW%2BMoPoQuwCu2CA021xMQrd4d6kiQDtR3KmMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIgGFSC6hY2OiMX8DCrcA4Hs6Egu9bmjrOBW3LB9RGauBsrL2HNX9sWWsKeyuWEEir8KTh9yk8BCUJ8LrRiF1P4s3aL%2FGE8z4Gl3Fm21mhBLhtBBcJJfmzFb89AQy3rTJsjAXYTAjP%2FeG%2BYaiQkE5NeevPwyDV%2BWHG8aX9zPWk3KosUNivSV429xIDCyn%2B21nwEWWkxq0HKrd92CnaVh1MH5Cn3wLps8e9s2ZJc4XO50wlPa3z3LpIxqBMGSiC5yqEPHTCaLIO%2BcpOqJ6wCDVWVtiVsyAm%2BGCrRbTTgkr1cE4ko9WZDDtOVq2bqtkC1t%2BUePAXiX%2BLjwupDQuk8PlGjpjSFEhSTCTLfxa%2BL13DjN%2BULKVX4S1zeIKSygQkeeIPKOz08mQBzLMZUj6e1XGI9pOqb2lYttS0YOmPMbWdQYCEeAzWIqXHILlmzo5odKmbM3vdhK3I1W2Nkqokfz7D8G%2BdKifCqIMvSe4UU1gPdalsQh6gXf8vkccWqmM1VyfzkqA08pddVykMB0DZyVbaa9DqPTSB6qTDOyZ4P3igK91dY%2FTRzKUeZ7C2KZGl%2FaA%2BWW3jdtQOyq%2BIE5dmCOcoWU0Ofvc6BC9o3EEU%2FSYuyQi8uDaL2S1NPo42BcT7I8iwJYyOgjdMz0NqV3MM3M9sIGOqUBTXJqLW4TRGUgUxdnF3pYQAOMsoqVohxRxZRLhYvroeOeYug8ycV2X2AdsC%2Bcd7aRszOWmS2A9vcZOeqLUraP0PljTX9pjMK9sKJkKEBdcFiaeFoaz5hOgIoGMf7H8AgcYC3dkKpVSCn7TMubRdG8saQ2jG%2FVwzJSnWSO2%2Bf7EsyToswfqGHhGu8qomsCTWzsocBh7PpZzZgV0HkXsOJHLIX%2BxbO0&X-Amz-Signature=f330d020e07a5c3e296142d8fcfebc9c32b186a3c6a491aa2106318facd49fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKWBVLZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDPeoX0Z6vkY%2BWHwecmNMT0izBTY93DNxhPKSr%2FHFq14AiEAogdKDQGoW%2BMoPoQuwCu2CA021xMQrd4d6kiQDtR3KmMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIgGFSC6hY2OiMX8DCrcA4Hs6Egu9bmjrOBW3LB9RGauBsrL2HNX9sWWsKeyuWEEir8KTh9yk8BCUJ8LrRiF1P4s3aL%2FGE8z4Gl3Fm21mhBLhtBBcJJfmzFb89AQy3rTJsjAXYTAjP%2FeG%2BYaiQkE5NeevPwyDV%2BWHG8aX9zPWk3KosUNivSV429xIDCyn%2B21nwEWWkxq0HKrd92CnaVh1MH5Cn3wLps8e9s2ZJc4XO50wlPa3z3LpIxqBMGSiC5yqEPHTCaLIO%2BcpOqJ6wCDVWVtiVsyAm%2BGCrRbTTgkr1cE4ko9WZDDtOVq2bqtkC1t%2BUePAXiX%2BLjwupDQuk8PlGjpjSFEhSTCTLfxa%2BL13DjN%2BULKVX4S1zeIKSygQkeeIPKOz08mQBzLMZUj6e1XGI9pOqb2lYttS0YOmPMbWdQYCEeAzWIqXHILlmzo5odKmbM3vdhK3I1W2Nkqokfz7D8G%2BdKifCqIMvSe4UU1gPdalsQh6gXf8vkccWqmM1VyfzkqA08pddVykMB0DZyVbaa9DqPTSB6qTDOyZ4P3igK91dY%2FTRzKUeZ7C2KZGl%2FaA%2BWW3jdtQOyq%2BIE5dmCOcoWU0Ofvc6BC9o3EEU%2FSYuyQi8uDaL2S1NPo42BcT7I8iwJYyOgjdMz0NqV3MM3M9sIGOqUBTXJqLW4TRGUgUxdnF3pYQAOMsoqVohxRxZRLhYvroeOeYug8ycV2X2AdsC%2Bcd7aRszOWmS2A9vcZOeqLUraP0PljTX9pjMK9sKJkKEBdcFiaeFoaz5hOgIoGMf7H8AgcYC3dkKpVSCn7TMubRdG8saQ2jG%2FVwzJSnWSO2%2Bf7EsyToswfqGHhGu8qomsCTWzsocBh7PpZzZgV0HkXsOJHLIX%2BxbO0&X-Amz-Signature=7d0da0f5e77d8706790b4e3dcc70577556fc0b0968800c45f1503f83fda77958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKWBVLZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDPeoX0Z6vkY%2BWHwecmNMT0izBTY93DNxhPKSr%2FHFq14AiEAogdKDQGoW%2BMoPoQuwCu2CA021xMQrd4d6kiQDtR3KmMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIgGFSC6hY2OiMX8DCrcA4Hs6Egu9bmjrOBW3LB9RGauBsrL2HNX9sWWsKeyuWEEir8KTh9yk8BCUJ8LrRiF1P4s3aL%2FGE8z4Gl3Fm21mhBLhtBBcJJfmzFb89AQy3rTJsjAXYTAjP%2FeG%2BYaiQkE5NeevPwyDV%2BWHG8aX9zPWk3KosUNivSV429xIDCyn%2B21nwEWWkxq0HKrd92CnaVh1MH5Cn3wLps8e9s2ZJc4XO50wlPa3z3LpIxqBMGSiC5yqEPHTCaLIO%2BcpOqJ6wCDVWVtiVsyAm%2BGCrRbTTgkr1cE4ko9WZDDtOVq2bqtkC1t%2BUePAXiX%2BLjwupDQuk8PlGjpjSFEhSTCTLfxa%2BL13DjN%2BULKVX4S1zeIKSygQkeeIPKOz08mQBzLMZUj6e1XGI9pOqb2lYttS0YOmPMbWdQYCEeAzWIqXHILlmzo5odKmbM3vdhK3I1W2Nkqokfz7D8G%2BdKifCqIMvSe4UU1gPdalsQh6gXf8vkccWqmM1VyfzkqA08pddVykMB0DZyVbaa9DqPTSB6qTDOyZ4P3igK91dY%2FTRzKUeZ7C2KZGl%2FaA%2BWW3jdtQOyq%2BIE5dmCOcoWU0Ofvc6BC9o3EEU%2FSYuyQi8uDaL2S1NPo42BcT7I8iwJYyOgjdMz0NqV3MM3M9sIGOqUBTXJqLW4TRGUgUxdnF3pYQAOMsoqVohxRxZRLhYvroeOeYug8ycV2X2AdsC%2Bcd7aRszOWmS2A9vcZOeqLUraP0PljTX9pjMK9sKJkKEBdcFiaeFoaz5hOgIoGMf7H8AgcYC3dkKpVSCn7TMubRdG8saQ2jG%2FVwzJSnWSO2%2Bf7EsyToswfqGHhGu8qomsCTWzsocBh7PpZzZgV0HkXsOJHLIX%2BxbO0&X-Amz-Signature=eda7480d57fca05f3bc524c09b8621e34540ae130367c410de033bb56fd21d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
