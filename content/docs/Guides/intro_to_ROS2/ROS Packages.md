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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSGM7XH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY60VVzmgGmShzYk1nqFdADMsN3Pgi6cwk1EnjI27p5AiEAo7ce3IXY5DV0it12rSF5fD9Wb4eenQHzgdcNmbQxVJAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FqHfSudoTYADSo7CrcA1iJqdj1VeLHRczPu6W%2B6zCwxQTSJABimkpRB3qlUYblHfJBKeeZwF4LXwZgr0e5fNyBP8J%2BhKgtt6%2BdSWmFGIkJTXfoGgoBm4TkhvGKcStjox5mfZJfrfw%2BW4cX12VWLSc0z62Ykyyidc4ZOJOdAwYcJof4Qh6wmKPtYlf35%2BOyXVapUB8qTXC9wW3nI2%2Bi4bv0Es1owfhlD8uaPpV5iRLdouF8OpWbyWn9v9n8kXOCPkqen%2B8%2Bjn30YT2qtF97lSOUEdH0YnE59L4cfV%2Fvypl5DoKRwCPUN86qtArzknStA6iTZbJ%2FwSMnINrYza78O9hTnCCh7%2BTewPNydF3elH4TLpFr6nXq3btBdK4BC4MMd9EvTKm7dxUNIxUsSVTNTqqCG6BNxIq9%2FJURAu62QcST0S06vMZ5GVoHHnQ05cbd8FT5Zii8HGcfS4LE0b9Lf7lVuMhkK3dbwJMXoFQpb%2Fiu5z56S%2BXP%2FKhaIb2i3FmMC647oPKgOjzIhlTtErgvLUXApSQgON1agaqwocPa8mOTWJzZlTl42IrG1wyiszqFOyfA6P51ySy7TZ5VvgpIM9HAkAZ1p%2BIUs7cxOiRlNm3ZCPYPQrsYZ69tBnjhC7Gh4WEpvZzUAT1RQxyDMIiLrb0GOqUBbQ8daV4874r8h3nVctvJcZA8Bcf5Cv52veCH7VxnHPkGDhNmDKcm1lMrGMSIhHVg%2BioT7rF5fj99UEsa4WHCFUloqwQn73KGKAgFw1%2Br00oI6fJc%2BtEyz2HdsxH1mo3X9LWZxiIY%2Fr1ybKXz0PZo3aSr8p260AZN28Hhg85RKN6kAVkys9wwoAd3gcvJPQqXTEUOwZw0TRJJ7kqE7mzWdb5zcvWf&X-Amz-Signature=528cef0abc7e8add07b8e299a33c1cddca236691573aa71ed74fbf962bc372e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSGM7XH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY60VVzmgGmShzYk1nqFdADMsN3Pgi6cwk1EnjI27p5AiEAo7ce3IXY5DV0it12rSF5fD9Wb4eenQHzgdcNmbQxVJAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FqHfSudoTYADSo7CrcA1iJqdj1VeLHRczPu6W%2B6zCwxQTSJABimkpRB3qlUYblHfJBKeeZwF4LXwZgr0e5fNyBP8J%2BhKgtt6%2BdSWmFGIkJTXfoGgoBm4TkhvGKcStjox5mfZJfrfw%2BW4cX12VWLSc0z62Ykyyidc4ZOJOdAwYcJof4Qh6wmKPtYlf35%2BOyXVapUB8qTXC9wW3nI2%2Bi4bv0Es1owfhlD8uaPpV5iRLdouF8OpWbyWn9v9n8kXOCPkqen%2B8%2Bjn30YT2qtF97lSOUEdH0YnE59L4cfV%2Fvypl5DoKRwCPUN86qtArzknStA6iTZbJ%2FwSMnINrYza78O9hTnCCh7%2BTewPNydF3elH4TLpFr6nXq3btBdK4BC4MMd9EvTKm7dxUNIxUsSVTNTqqCG6BNxIq9%2FJURAu62QcST0S06vMZ5GVoHHnQ05cbd8FT5Zii8HGcfS4LE0b9Lf7lVuMhkK3dbwJMXoFQpb%2Fiu5z56S%2BXP%2FKhaIb2i3FmMC647oPKgOjzIhlTtErgvLUXApSQgON1agaqwocPa8mOTWJzZlTl42IrG1wyiszqFOyfA6P51ySy7TZ5VvgpIM9HAkAZ1p%2BIUs7cxOiRlNm3ZCPYPQrsYZ69tBnjhC7Gh4WEpvZzUAT1RQxyDMIiLrb0GOqUBbQ8daV4874r8h3nVctvJcZA8Bcf5Cv52veCH7VxnHPkGDhNmDKcm1lMrGMSIhHVg%2BioT7rF5fj99UEsa4WHCFUloqwQn73KGKAgFw1%2Br00oI6fJc%2BtEyz2HdsxH1mo3X9LWZxiIY%2Fr1ybKXz0PZo3aSr8p260AZN28Hhg85RKN6kAVkys9wwoAd3gcvJPQqXTEUOwZw0TRJJ7kqE7mzWdb5zcvWf&X-Amz-Signature=cd2e3d4524399ed7b30f267c6618a7728794e8da7a127b176ddc55de93413a66&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSGM7XH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY60VVzmgGmShzYk1nqFdADMsN3Pgi6cwk1EnjI27p5AiEAo7ce3IXY5DV0it12rSF5fD9Wb4eenQHzgdcNmbQxVJAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FqHfSudoTYADSo7CrcA1iJqdj1VeLHRczPu6W%2B6zCwxQTSJABimkpRB3qlUYblHfJBKeeZwF4LXwZgr0e5fNyBP8J%2BhKgtt6%2BdSWmFGIkJTXfoGgoBm4TkhvGKcStjox5mfZJfrfw%2BW4cX12VWLSc0z62Ykyyidc4ZOJOdAwYcJof4Qh6wmKPtYlf35%2BOyXVapUB8qTXC9wW3nI2%2Bi4bv0Es1owfhlD8uaPpV5iRLdouF8OpWbyWn9v9n8kXOCPkqen%2B8%2Bjn30YT2qtF97lSOUEdH0YnE59L4cfV%2Fvypl5DoKRwCPUN86qtArzknStA6iTZbJ%2FwSMnINrYza78O9hTnCCh7%2BTewPNydF3elH4TLpFr6nXq3btBdK4BC4MMd9EvTKm7dxUNIxUsSVTNTqqCG6BNxIq9%2FJURAu62QcST0S06vMZ5GVoHHnQ05cbd8FT5Zii8HGcfS4LE0b9Lf7lVuMhkK3dbwJMXoFQpb%2Fiu5z56S%2BXP%2FKhaIb2i3FmMC647oPKgOjzIhlTtErgvLUXApSQgON1agaqwocPa8mOTWJzZlTl42IrG1wyiszqFOyfA6P51ySy7TZ5VvgpIM9HAkAZ1p%2BIUs7cxOiRlNm3ZCPYPQrsYZ69tBnjhC7Gh4WEpvZzUAT1RQxyDMIiLrb0GOqUBbQ8daV4874r8h3nVctvJcZA8Bcf5Cv52veCH7VxnHPkGDhNmDKcm1lMrGMSIhHVg%2BioT7rF5fj99UEsa4WHCFUloqwQn73KGKAgFw1%2Br00oI6fJc%2BtEyz2HdsxH1mo3X9LWZxiIY%2Fr1ybKXz0PZo3aSr8p260AZN28Hhg85RKN6kAVkys9wwoAd3gcvJPQqXTEUOwZw0TRJJ7kqE7mzWdb5zcvWf&X-Amz-Signature=90a792331cf9537e7cce81e67d8c9c65c72eec82a533c7ed8dd84b2d8e0a33d2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSGM7XH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY60VVzmgGmShzYk1nqFdADMsN3Pgi6cwk1EnjI27p5AiEAo7ce3IXY5DV0it12rSF5fD9Wb4eenQHzgdcNmbQxVJAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FqHfSudoTYADSo7CrcA1iJqdj1VeLHRczPu6W%2B6zCwxQTSJABimkpRB3qlUYblHfJBKeeZwF4LXwZgr0e5fNyBP8J%2BhKgtt6%2BdSWmFGIkJTXfoGgoBm4TkhvGKcStjox5mfZJfrfw%2BW4cX12VWLSc0z62Ykyyidc4ZOJOdAwYcJof4Qh6wmKPtYlf35%2BOyXVapUB8qTXC9wW3nI2%2Bi4bv0Es1owfhlD8uaPpV5iRLdouF8OpWbyWn9v9n8kXOCPkqen%2B8%2Bjn30YT2qtF97lSOUEdH0YnE59L4cfV%2Fvypl5DoKRwCPUN86qtArzknStA6iTZbJ%2FwSMnINrYza78O9hTnCCh7%2BTewPNydF3elH4TLpFr6nXq3btBdK4BC4MMd9EvTKm7dxUNIxUsSVTNTqqCG6BNxIq9%2FJURAu62QcST0S06vMZ5GVoHHnQ05cbd8FT5Zii8HGcfS4LE0b9Lf7lVuMhkK3dbwJMXoFQpb%2Fiu5z56S%2BXP%2FKhaIb2i3FmMC647oPKgOjzIhlTtErgvLUXApSQgON1agaqwocPa8mOTWJzZlTl42IrG1wyiszqFOyfA6P51ySy7TZ5VvgpIM9HAkAZ1p%2BIUs7cxOiRlNm3ZCPYPQrsYZ69tBnjhC7Gh4WEpvZzUAT1RQxyDMIiLrb0GOqUBbQ8daV4874r8h3nVctvJcZA8Bcf5Cv52veCH7VxnHPkGDhNmDKcm1lMrGMSIhHVg%2BioT7rF5fj99UEsa4WHCFUloqwQn73KGKAgFw1%2Br00oI6fJc%2BtEyz2HdsxH1mo3X9LWZxiIY%2Fr1ybKXz0PZo3aSr8p260AZN28Hhg85RKN6kAVkys9wwoAd3gcvJPQqXTEUOwZw0TRJJ7kqE7mzWdb5zcvWf&X-Amz-Signature=c002bacd070ab8c8ea8640e3938785002811a46aa8fecaf3c5d49c8b1d3aa033&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSGM7XH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY60VVzmgGmShzYk1nqFdADMsN3Pgi6cwk1EnjI27p5AiEAo7ce3IXY5DV0it12rSF5fD9Wb4eenQHzgdcNmbQxVJAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FqHfSudoTYADSo7CrcA1iJqdj1VeLHRczPu6W%2B6zCwxQTSJABimkpRB3qlUYblHfJBKeeZwF4LXwZgr0e5fNyBP8J%2BhKgtt6%2BdSWmFGIkJTXfoGgoBm4TkhvGKcStjox5mfZJfrfw%2BW4cX12VWLSc0z62Ykyyidc4ZOJOdAwYcJof4Qh6wmKPtYlf35%2BOyXVapUB8qTXC9wW3nI2%2Bi4bv0Es1owfhlD8uaPpV5iRLdouF8OpWbyWn9v9n8kXOCPkqen%2B8%2Bjn30YT2qtF97lSOUEdH0YnE59L4cfV%2Fvypl5DoKRwCPUN86qtArzknStA6iTZbJ%2FwSMnINrYza78O9hTnCCh7%2BTewPNydF3elH4TLpFr6nXq3btBdK4BC4MMd9EvTKm7dxUNIxUsSVTNTqqCG6BNxIq9%2FJURAu62QcST0S06vMZ5GVoHHnQ05cbd8FT5Zii8HGcfS4LE0b9Lf7lVuMhkK3dbwJMXoFQpb%2Fiu5z56S%2BXP%2FKhaIb2i3FmMC647oPKgOjzIhlTtErgvLUXApSQgON1agaqwocPa8mOTWJzZlTl42IrG1wyiszqFOyfA6P51ySy7TZ5VvgpIM9HAkAZ1p%2BIUs7cxOiRlNm3ZCPYPQrsYZ69tBnjhC7Gh4WEpvZzUAT1RQxyDMIiLrb0GOqUBbQ8daV4874r8h3nVctvJcZA8Bcf5Cv52veCH7VxnHPkGDhNmDKcm1lMrGMSIhHVg%2BioT7rF5fj99UEsa4WHCFUloqwQn73KGKAgFw1%2Br00oI6fJc%2BtEyz2HdsxH1mo3X9LWZxiIY%2Fr1ybKXz0PZo3aSr8p260AZN28Hhg85RKN6kAVkys9wwoAd3gcvJPQqXTEUOwZw0TRJJ7kqE7mzWdb5zcvWf&X-Amz-Signature=5d91b8e73d89e6c5be342227bb473399e7418d7c726f0a24f4e3c4b98069ab5c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSGM7XH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY60VVzmgGmShzYk1nqFdADMsN3Pgi6cwk1EnjI27p5AiEAo7ce3IXY5DV0it12rSF5fD9Wb4eenQHzgdcNmbQxVJAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FqHfSudoTYADSo7CrcA1iJqdj1VeLHRczPu6W%2B6zCwxQTSJABimkpRB3qlUYblHfJBKeeZwF4LXwZgr0e5fNyBP8J%2BhKgtt6%2BdSWmFGIkJTXfoGgoBm4TkhvGKcStjox5mfZJfrfw%2BW4cX12VWLSc0z62Ykyyidc4ZOJOdAwYcJof4Qh6wmKPtYlf35%2BOyXVapUB8qTXC9wW3nI2%2Bi4bv0Es1owfhlD8uaPpV5iRLdouF8OpWbyWn9v9n8kXOCPkqen%2B8%2Bjn30YT2qtF97lSOUEdH0YnE59L4cfV%2Fvypl5DoKRwCPUN86qtArzknStA6iTZbJ%2FwSMnINrYza78O9hTnCCh7%2BTewPNydF3elH4TLpFr6nXq3btBdK4BC4MMd9EvTKm7dxUNIxUsSVTNTqqCG6BNxIq9%2FJURAu62QcST0S06vMZ5GVoHHnQ05cbd8FT5Zii8HGcfS4LE0b9Lf7lVuMhkK3dbwJMXoFQpb%2Fiu5z56S%2BXP%2FKhaIb2i3FmMC647oPKgOjzIhlTtErgvLUXApSQgON1agaqwocPa8mOTWJzZlTl42IrG1wyiszqFOyfA6P51ySy7TZ5VvgpIM9HAkAZ1p%2BIUs7cxOiRlNm3ZCPYPQrsYZ69tBnjhC7Gh4WEpvZzUAT1RQxyDMIiLrb0GOqUBbQ8daV4874r8h3nVctvJcZA8Bcf5Cv52veCH7VxnHPkGDhNmDKcm1lMrGMSIhHVg%2BioT7rF5fj99UEsa4WHCFUloqwQn73KGKAgFw1%2Br00oI6fJc%2BtEyz2HdsxH1mo3X9LWZxiIY%2Fr1ybKXz0PZo3aSr8p260AZN28Hhg85RKN6kAVkys9wwoAd3gcvJPQqXTEUOwZw0TRJJ7kqE7mzWdb5zcvWf&X-Amz-Signature=ff4991e03c9c31011f6411c8964c066f38a56e1717547b09173509cd7113b78f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSGM7XH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY60VVzmgGmShzYk1nqFdADMsN3Pgi6cwk1EnjI27p5AiEAo7ce3IXY5DV0it12rSF5fD9Wb4eenQHzgdcNmbQxVJAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FqHfSudoTYADSo7CrcA1iJqdj1VeLHRczPu6W%2B6zCwxQTSJABimkpRB3qlUYblHfJBKeeZwF4LXwZgr0e5fNyBP8J%2BhKgtt6%2BdSWmFGIkJTXfoGgoBm4TkhvGKcStjox5mfZJfrfw%2BW4cX12VWLSc0z62Ykyyidc4ZOJOdAwYcJof4Qh6wmKPtYlf35%2BOyXVapUB8qTXC9wW3nI2%2Bi4bv0Es1owfhlD8uaPpV5iRLdouF8OpWbyWn9v9n8kXOCPkqen%2B8%2Bjn30YT2qtF97lSOUEdH0YnE59L4cfV%2Fvypl5DoKRwCPUN86qtArzknStA6iTZbJ%2FwSMnINrYza78O9hTnCCh7%2BTewPNydF3elH4TLpFr6nXq3btBdK4BC4MMd9EvTKm7dxUNIxUsSVTNTqqCG6BNxIq9%2FJURAu62QcST0S06vMZ5GVoHHnQ05cbd8FT5Zii8HGcfS4LE0b9Lf7lVuMhkK3dbwJMXoFQpb%2Fiu5z56S%2BXP%2FKhaIb2i3FmMC647oPKgOjzIhlTtErgvLUXApSQgON1agaqwocPa8mOTWJzZlTl42IrG1wyiszqFOyfA6P51ySy7TZ5VvgpIM9HAkAZ1p%2BIUs7cxOiRlNm3ZCPYPQrsYZ69tBnjhC7Gh4WEpvZzUAT1RQxyDMIiLrb0GOqUBbQ8daV4874r8h3nVctvJcZA8Bcf5Cv52veCH7VxnHPkGDhNmDKcm1lMrGMSIhHVg%2BioT7rF5fj99UEsa4WHCFUloqwQn73KGKAgFw1%2Br00oI6fJc%2BtEyz2HdsxH1mo3X9LWZxiIY%2Fr1ybKXz0PZo3aSr8p260AZN28Hhg85RKN6kAVkys9wwoAd3gcvJPQqXTEUOwZw0TRJJ7kqE7mzWdb5zcvWf&X-Amz-Signature=d96b845d0cb55f8e8c0727976e9f52ebc39f2e77c69a77ad7a1281c2d7a819df&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
