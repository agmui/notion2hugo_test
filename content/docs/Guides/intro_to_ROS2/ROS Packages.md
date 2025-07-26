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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTLDMCP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEvaGHyxKTNH%2FouYUdno7KmOxITj40bWzzcD4Ue3mg74AiEA0G5kQVJt4ZqoLwGdL7jNAdAcn5nMdYqxd7BoHcKkUPAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOZXTMgpGG0oeX9SbyrcA56la8d0tOxtl4FXfTwj3BDDjaCERrlaJ92HusugaSgXy3lRxSc9A3YsTnP4UFbT%2B1lOnz%2B9Uw2u0%2B1kT4ymVHTk53T4TWVJ0zqTzpCeqipP13Jk6CoVe4YS9avani2lamdBYhdlx8fLLC6SaaURYvlQWsDzuEmH%2FWHVsjoACVrGHG2OM1u%2FHF5LGmUXnq3NY8EanWbupWD0CQd%2F3SCuI8hgFle1pvrvLiGu4XvFho1GETScgVFN8WNMbcIiD92UbDX9xjme%2Fzjf0bo71sXl6lDiRZ%2F8%2BF5yrmHb4qJ8GrIZ09T4Q%2BNJ9bv7cfrWGglcCU9j2W3G%2BPtvz%2FrHh4El9VhazHAim0aMC1%2B3Y8x6fES4rRu3r3mDZCDfSOYJ91WTgDW7fvuGOMf4888rCzU0g8e%2BL8xClA%2BXkBn2r5B9hKIdMOvprS6LZ1I2TqQYDgfYJ7s5Vl6UaU5ZjL6OGa2QEoUrSTsWdt4DAGCIrWCfGEZ5w1nW2QrAKSXHmnLnp1%2FbmdgK%2BNqLyhgBynnZIoBNgWNQJYsMTFrp92axwVuKWdrC7YZ6MXrc9JcwlrQLQwwKefbqx5fypxVl4pwCNt3d%2B9vnNXVAdzCCQochrdUc05JLeyf2G5kIcfwV0DujMLCrksQGOqUBO9BALyGZhagTV9a4t6qHf8kVmm0sHzK5kHXFJ86b6ZKM2XquLewul51150sfu0N7VwSg7FA0lFU1FDiT36mIP1tlUTaXGurShS7jl%2FK4bzS0PHvuIluBP%2FTRJkFtatuO9ewNuMvqbXdfAUN%2BAkcuv7zoxNEz036oCwwkmsyMcgSdW9oMNM%2FdTlFNg336qNpth4xx1K%2BjKXgwecNdYODX1ltXBf%2FU&X-Amz-Signature=e316afe7f6d5350c830471600de2119f4624779aba4ba763df075f167fef1c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTLDMCP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEvaGHyxKTNH%2FouYUdno7KmOxITj40bWzzcD4Ue3mg74AiEA0G5kQVJt4ZqoLwGdL7jNAdAcn5nMdYqxd7BoHcKkUPAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOZXTMgpGG0oeX9SbyrcA56la8d0tOxtl4FXfTwj3BDDjaCERrlaJ92HusugaSgXy3lRxSc9A3YsTnP4UFbT%2B1lOnz%2B9Uw2u0%2B1kT4ymVHTk53T4TWVJ0zqTzpCeqipP13Jk6CoVe4YS9avani2lamdBYhdlx8fLLC6SaaURYvlQWsDzuEmH%2FWHVsjoACVrGHG2OM1u%2FHF5LGmUXnq3NY8EanWbupWD0CQd%2F3SCuI8hgFle1pvrvLiGu4XvFho1GETScgVFN8WNMbcIiD92UbDX9xjme%2Fzjf0bo71sXl6lDiRZ%2F8%2BF5yrmHb4qJ8GrIZ09T4Q%2BNJ9bv7cfrWGglcCU9j2W3G%2BPtvz%2FrHh4El9VhazHAim0aMC1%2B3Y8x6fES4rRu3r3mDZCDfSOYJ91WTgDW7fvuGOMf4888rCzU0g8e%2BL8xClA%2BXkBn2r5B9hKIdMOvprS6LZ1I2TqQYDgfYJ7s5Vl6UaU5ZjL6OGa2QEoUrSTsWdt4DAGCIrWCfGEZ5w1nW2QrAKSXHmnLnp1%2FbmdgK%2BNqLyhgBynnZIoBNgWNQJYsMTFrp92axwVuKWdrC7YZ6MXrc9JcwlrQLQwwKefbqx5fypxVl4pwCNt3d%2B9vnNXVAdzCCQochrdUc05JLeyf2G5kIcfwV0DujMLCrksQGOqUBO9BALyGZhagTV9a4t6qHf8kVmm0sHzK5kHXFJ86b6ZKM2XquLewul51150sfu0N7VwSg7FA0lFU1FDiT36mIP1tlUTaXGurShS7jl%2FK4bzS0PHvuIluBP%2FTRJkFtatuO9ewNuMvqbXdfAUN%2BAkcuv7zoxNEz036oCwwkmsyMcgSdW9oMNM%2FdTlFNg336qNpth4xx1K%2BjKXgwecNdYODX1ltXBf%2FU&X-Amz-Signature=9ba3acb20e5b6045f1318efe977477c8fcd034ff732e5033689c19643c78b0cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTLDMCP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEvaGHyxKTNH%2FouYUdno7KmOxITj40bWzzcD4Ue3mg74AiEA0G5kQVJt4ZqoLwGdL7jNAdAcn5nMdYqxd7BoHcKkUPAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOZXTMgpGG0oeX9SbyrcA56la8d0tOxtl4FXfTwj3BDDjaCERrlaJ92HusugaSgXy3lRxSc9A3YsTnP4UFbT%2B1lOnz%2B9Uw2u0%2B1kT4ymVHTk53T4TWVJ0zqTzpCeqipP13Jk6CoVe4YS9avani2lamdBYhdlx8fLLC6SaaURYvlQWsDzuEmH%2FWHVsjoACVrGHG2OM1u%2FHF5LGmUXnq3NY8EanWbupWD0CQd%2F3SCuI8hgFle1pvrvLiGu4XvFho1GETScgVFN8WNMbcIiD92UbDX9xjme%2Fzjf0bo71sXl6lDiRZ%2F8%2BF5yrmHb4qJ8GrIZ09T4Q%2BNJ9bv7cfrWGglcCU9j2W3G%2BPtvz%2FrHh4El9VhazHAim0aMC1%2B3Y8x6fES4rRu3r3mDZCDfSOYJ91WTgDW7fvuGOMf4888rCzU0g8e%2BL8xClA%2BXkBn2r5B9hKIdMOvprS6LZ1I2TqQYDgfYJ7s5Vl6UaU5ZjL6OGa2QEoUrSTsWdt4DAGCIrWCfGEZ5w1nW2QrAKSXHmnLnp1%2FbmdgK%2BNqLyhgBynnZIoBNgWNQJYsMTFrp92axwVuKWdrC7YZ6MXrc9JcwlrQLQwwKefbqx5fypxVl4pwCNt3d%2B9vnNXVAdzCCQochrdUc05JLeyf2G5kIcfwV0DujMLCrksQGOqUBO9BALyGZhagTV9a4t6qHf8kVmm0sHzK5kHXFJ86b6ZKM2XquLewul51150sfu0N7VwSg7FA0lFU1FDiT36mIP1tlUTaXGurShS7jl%2FK4bzS0PHvuIluBP%2FTRJkFtatuO9ewNuMvqbXdfAUN%2BAkcuv7zoxNEz036oCwwkmsyMcgSdW9oMNM%2FdTlFNg336qNpth4xx1K%2BjKXgwecNdYODX1ltXBf%2FU&X-Amz-Signature=c81d56304b8d82325e6c813c0d4b324a153ea8629c768b89720a1e8c5dd4e8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTLDMCP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEvaGHyxKTNH%2FouYUdno7KmOxITj40bWzzcD4Ue3mg74AiEA0G5kQVJt4ZqoLwGdL7jNAdAcn5nMdYqxd7BoHcKkUPAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOZXTMgpGG0oeX9SbyrcA56la8d0tOxtl4FXfTwj3BDDjaCERrlaJ92HusugaSgXy3lRxSc9A3YsTnP4UFbT%2B1lOnz%2B9Uw2u0%2B1kT4ymVHTk53T4TWVJ0zqTzpCeqipP13Jk6CoVe4YS9avani2lamdBYhdlx8fLLC6SaaURYvlQWsDzuEmH%2FWHVsjoACVrGHG2OM1u%2FHF5LGmUXnq3NY8EanWbupWD0CQd%2F3SCuI8hgFle1pvrvLiGu4XvFho1GETScgVFN8WNMbcIiD92UbDX9xjme%2Fzjf0bo71sXl6lDiRZ%2F8%2BF5yrmHb4qJ8GrIZ09T4Q%2BNJ9bv7cfrWGglcCU9j2W3G%2BPtvz%2FrHh4El9VhazHAim0aMC1%2B3Y8x6fES4rRu3r3mDZCDfSOYJ91WTgDW7fvuGOMf4888rCzU0g8e%2BL8xClA%2BXkBn2r5B9hKIdMOvprS6LZ1I2TqQYDgfYJ7s5Vl6UaU5ZjL6OGa2QEoUrSTsWdt4DAGCIrWCfGEZ5w1nW2QrAKSXHmnLnp1%2FbmdgK%2BNqLyhgBynnZIoBNgWNQJYsMTFrp92axwVuKWdrC7YZ6MXrc9JcwlrQLQwwKefbqx5fypxVl4pwCNt3d%2B9vnNXVAdzCCQochrdUc05JLeyf2G5kIcfwV0DujMLCrksQGOqUBO9BALyGZhagTV9a4t6qHf8kVmm0sHzK5kHXFJ86b6ZKM2XquLewul51150sfu0N7VwSg7FA0lFU1FDiT36mIP1tlUTaXGurShS7jl%2FK4bzS0PHvuIluBP%2FTRJkFtatuO9ewNuMvqbXdfAUN%2BAkcuv7zoxNEz036oCwwkmsyMcgSdW9oMNM%2FdTlFNg336qNpth4xx1K%2BjKXgwecNdYODX1ltXBf%2FU&X-Amz-Signature=0b7cdbab3e6248d4668fd022532f244a0cd578c517bc8f6943929cb459995af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTLDMCP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEvaGHyxKTNH%2FouYUdno7KmOxITj40bWzzcD4Ue3mg74AiEA0G5kQVJt4ZqoLwGdL7jNAdAcn5nMdYqxd7BoHcKkUPAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOZXTMgpGG0oeX9SbyrcA56la8d0tOxtl4FXfTwj3BDDjaCERrlaJ92HusugaSgXy3lRxSc9A3YsTnP4UFbT%2B1lOnz%2B9Uw2u0%2B1kT4ymVHTk53T4TWVJ0zqTzpCeqipP13Jk6CoVe4YS9avani2lamdBYhdlx8fLLC6SaaURYvlQWsDzuEmH%2FWHVsjoACVrGHG2OM1u%2FHF5LGmUXnq3NY8EanWbupWD0CQd%2F3SCuI8hgFle1pvrvLiGu4XvFho1GETScgVFN8WNMbcIiD92UbDX9xjme%2Fzjf0bo71sXl6lDiRZ%2F8%2BF5yrmHb4qJ8GrIZ09T4Q%2BNJ9bv7cfrWGglcCU9j2W3G%2BPtvz%2FrHh4El9VhazHAim0aMC1%2B3Y8x6fES4rRu3r3mDZCDfSOYJ91WTgDW7fvuGOMf4888rCzU0g8e%2BL8xClA%2BXkBn2r5B9hKIdMOvprS6LZ1I2TqQYDgfYJ7s5Vl6UaU5ZjL6OGa2QEoUrSTsWdt4DAGCIrWCfGEZ5w1nW2QrAKSXHmnLnp1%2FbmdgK%2BNqLyhgBynnZIoBNgWNQJYsMTFrp92axwVuKWdrC7YZ6MXrc9JcwlrQLQwwKefbqx5fypxVl4pwCNt3d%2B9vnNXVAdzCCQochrdUc05JLeyf2G5kIcfwV0DujMLCrksQGOqUBO9BALyGZhagTV9a4t6qHf8kVmm0sHzK5kHXFJ86b6ZKM2XquLewul51150sfu0N7VwSg7FA0lFU1FDiT36mIP1tlUTaXGurShS7jl%2FK4bzS0PHvuIluBP%2FTRJkFtatuO9ewNuMvqbXdfAUN%2BAkcuv7zoxNEz036oCwwkmsyMcgSdW9oMNM%2FdTlFNg336qNpth4xx1K%2BjKXgwecNdYODX1ltXBf%2FU&X-Amz-Signature=208c00f0e20509cc5e069daf476dbb8044d55f49fde1d8c84d1fcbfd0dfc1e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTLDMCP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEvaGHyxKTNH%2FouYUdno7KmOxITj40bWzzcD4Ue3mg74AiEA0G5kQVJt4ZqoLwGdL7jNAdAcn5nMdYqxd7BoHcKkUPAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOZXTMgpGG0oeX9SbyrcA56la8d0tOxtl4FXfTwj3BDDjaCERrlaJ92HusugaSgXy3lRxSc9A3YsTnP4UFbT%2B1lOnz%2B9Uw2u0%2B1kT4ymVHTk53T4TWVJ0zqTzpCeqipP13Jk6CoVe4YS9avani2lamdBYhdlx8fLLC6SaaURYvlQWsDzuEmH%2FWHVsjoACVrGHG2OM1u%2FHF5LGmUXnq3NY8EanWbupWD0CQd%2F3SCuI8hgFle1pvrvLiGu4XvFho1GETScgVFN8WNMbcIiD92UbDX9xjme%2Fzjf0bo71sXl6lDiRZ%2F8%2BF5yrmHb4qJ8GrIZ09T4Q%2BNJ9bv7cfrWGglcCU9j2W3G%2BPtvz%2FrHh4El9VhazHAim0aMC1%2B3Y8x6fES4rRu3r3mDZCDfSOYJ91WTgDW7fvuGOMf4888rCzU0g8e%2BL8xClA%2BXkBn2r5B9hKIdMOvprS6LZ1I2TqQYDgfYJ7s5Vl6UaU5ZjL6OGa2QEoUrSTsWdt4DAGCIrWCfGEZ5w1nW2QrAKSXHmnLnp1%2FbmdgK%2BNqLyhgBynnZIoBNgWNQJYsMTFrp92axwVuKWdrC7YZ6MXrc9JcwlrQLQwwKefbqx5fypxVl4pwCNt3d%2B9vnNXVAdzCCQochrdUc05JLeyf2G5kIcfwV0DujMLCrksQGOqUBO9BALyGZhagTV9a4t6qHf8kVmm0sHzK5kHXFJ86b6ZKM2XquLewul51150sfu0N7VwSg7FA0lFU1FDiT36mIP1tlUTaXGurShS7jl%2FK4bzS0PHvuIluBP%2FTRJkFtatuO9ewNuMvqbXdfAUN%2BAkcuv7zoxNEz036oCwwkmsyMcgSdW9oMNM%2FdTlFNg336qNpth4xx1K%2BjKXgwecNdYODX1ltXBf%2FU&X-Amz-Signature=96b32795bb272103e606f500b564b49b085aa782a819fc6e03677c7acf85a3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTLDMCP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEvaGHyxKTNH%2FouYUdno7KmOxITj40bWzzcD4Ue3mg74AiEA0G5kQVJt4ZqoLwGdL7jNAdAcn5nMdYqxd7BoHcKkUPAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOZXTMgpGG0oeX9SbyrcA56la8d0tOxtl4FXfTwj3BDDjaCERrlaJ92HusugaSgXy3lRxSc9A3YsTnP4UFbT%2B1lOnz%2B9Uw2u0%2B1kT4ymVHTk53T4TWVJ0zqTzpCeqipP13Jk6CoVe4YS9avani2lamdBYhdlx8fLLC6SaaURYvlQWsDzuEmH%2FWHVsjoACVrGHG2OM1u%2FHF5LGmUXnq3NY8EanWbupWD0CQd%2F3SCuI8hgFle1pvrvLiGu4XvFho1GETScgVFN8WNMbcIiD92UbDX9xjme%2Fzjf0bo71sXl6lDiRZ%2F8%2BF5yrmHb4qJ8GrIZ09T4Q%2BNJ9bv7cfrWGglcCU9j2W3G%2BPtvz%2FrHh4El9VhazHAim0aMC1%2B3Y8x6fES4rRu3r3mDZCDfSOYJ91WTgDW7fvuGOMf4888rCzU0g8e%2BL8xClA%2BXkBn2r5B9hKIdMOvprS6LZ1I2TqQYDgfYJ7s5Vl6UaU5ZjL6OGa2QEoUrSTsWdt4DAGCIrWCfGEZ5w1nW2QrAKSXHmnLnp1%2FbmdgK%2BNqLyhgBynnZIoBNgWNQJYsMTFrp92axwVuKWdrC7YZ6MXrc9JcwlrQLQwwKefbqx5fypxVl4pwCNt3d%2B9vnNXVAdzCCQochrdUc05JLeyf2G5kIcfwV0DujMLCrksQGOqUBO9BALyGZhagTV9a4t6qHf8kVmm0sHzK5kHXFJ86b6ZKM2XquLewul51150sfu0N7VwSg7FA0lFU1FDiT36mIP1tlUTaXGurShS7jl%2FK4bzS0PHvuIluBP%2FTRJkFtatuO9ewNuMvqbXdfAUN%2BAkcuv7zoxNEz036oCwwkmsyMcgSdW9oMNM%2FdTlFNg336qNpth4xx1K%2BjKXgwecNdYODX1ltXBf%2FU&X-Amz-Signature=b2a9df8a706d6dba0ff93fcace33db87a13fe496e67498561c5639fac74f4e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
