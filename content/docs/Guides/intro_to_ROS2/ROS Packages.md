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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQOH7YQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEVHctlzaXC0K%2BzPfow4ZeSEqlrmAIeRNXrd%2FHFAvwrNAiEApqz64BiJn5wV6Uq%2BBnfNy08COhswLgkWtkzJP0lhJtAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNAMp7qR9Lr7B3rVXSrcAwz%2FsphX8k1uJYWpZljs3X8pSGVWzmEO5V9B%2FKIJ%2FWojDLirtjhkAKK%2BUCBq1RolX6NG%2FdeWWhe33hbIEDMde175rTvAX2Ehy0jnAL2ZCYdUVeudxiv3jV7DQ9A0R9aaBD6D68OtedxNfxe4C3XPrQ%2B6jHJ2WX4WDxfcQeSkCPs4pDslfOa0NicbLlDCXsYOSx7TcOwhx7fBgy7fk11Bihu4mPkA01f54K8lwYDmeLGCKZGeRdgqIqSulxFWaxzEMlVxNFPqJIDxjBUfjQ7mvNSXPoBROls2Sz0S8W%2BRGC%2F5axnUP97bJyhfk2Qk2VCi2bXajIYH7zMx99RXRXu0MK86avN7GozQeSXHR%2BSc%2BW6QmHEUFARSlZGgK2V%2FflnmrS4p0vrJ9lpLlbaRKFhajFQ9HJitvbUzGXIs7jpPwUhyQ%2FGsxSFw4b6GxTyqsC6WTehQ%2B4EsDvtGJFGFOT6SAOyqFB8vyX62dvG1to7iBYOWRZEp3%2FaPTE2zknLB5GyEAIQdh%2FV9IrA%2B1rtg%2FxkdSAUCTTi27WJY54QlvjzzjLrDA5zqtM1VWQ%2BpLN5N3sdUDZCyc0rl8KNBGfBZ7jBSs8xWnUJ3HdpArVhw6Ofw9Jj6JZOcoCHjmcAP1hOYMKqgtcIGOqUBupC21xg%2FobH4z1CXY4oNbF5LrA3LhBD1DRMBCkco1yQw43TEOOqB43ocWJoDflaNd3bV3AJwNC%2BL5aPdt4iGpgZOMyuLO%2B11IYcpMg4DDAcxUS8NVRZlo23fH8S8ULYBbbwQpuA8kjum1Bw%2B%2BJPiNhjEo3khMoYLjhfun2VwUI6Y5vYukkM79WWl01Oe5VwhUHseckZmgFJEcgiCSggflhsK%2Bhd8&X-Amz-Signature=d15338cc5bab2a232c0b85a28ad1dfa70535b3762f4317e1aae2319c0270418e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQOH7YQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEVHctlzaXC0K%2BzPfow4ZeSEqlrmAIeRNXrd%2FHFAvwrNAiEApqz64BiJn5wV6Uq%2BBnfNy08COhswLgkWtkzJP0lhJtAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNAMp7qR9Lr7B3rVXSrcAwz%2FsphX8k1uJYWpZljs3X8pSGVWzmEO5V9B%2FKIJ%2FWojDLirtjhkAKK%2BUCBq1RolX6NG%2FdeWWhe33hbIEDMde175rTvAX2Ehy0jnAL2ZCYdUVeudxiv3jV7DQ9A0R9aaBD6D68OtedxNfxe4C3XPrQ%2B6jHJ2WX4WDxfcQeSkCPs4pDslfOa0NicbLlDCXsYOSx7TcOwhx7fBgy7fk11Bihu4mPkA01f54K8lwYDmeLGCKZGeRdgqIqSulxFWaxzEMlVxNFPqJIDxjBUfjQ7mvNSXPoBROls2Sz0S8W%2BRGC%2F5axnUP97bJyhfk2Qk2VCi2bXajIYH7zMx99RXRXu0MK86avN7GozQeSXHR%2BSc%2BW6QmHEUFARSlZGgK2V%2FflnmrS4p0vrJ9lpLlbaRKFhajFQ9HJitvbUzGXIs7jpPwUhyQ%2FGsxSFw4b6GxTyqsC6WTehQ%2B4EsDvtGJFGFOT6SAOyqFB8vyX62dvG1to7iBYOWRZEp3%2FaPTE2zknLB5GyEAIQdh%2FV9IrA%2B1rtg%2FxkdSAUCTTi27WJY54QlvjzzjLrDA5zqtM1VWQ%2BpLN5N3sdUDZCyc0rl8KNBGfBZ7jBSs8xWnUJ3HdpArVhw6Ofw9Jj6JZOcoCHjmcAP1hOYMKqgtcIGOqUBupC21xg%2FobH4z1CXY4oNbF5LrA3LhBD1DRMBCkco1yQw43TEOOqB43ocWJoDflaNd3bV3AJwNC%2BL5aPdt4iGpgZOMyuLO%2B11IYcpMg4DDAcxUS8NVRZlo23fH8S8ULYBbbwQpuA8kjum1Bw%2B%2BJPiNhjEo3khMoYLjhfun2VwUI6Y5vYukkM79WWl01Oe5VwhUHseckZmgFJEcgiCSggflhsK%2Bhd8&X-Amz-Signature=8a2a4fce2fd801ea3eda1d370b800fb126324f92d2059c2c18f643d320e5c7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQOH7YQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEVHctlzaXC0K%2BzPfow4ZeSEqlrmAIeRNXrd%2FHFAvwrNAiEApqz64BiJn5wV6Uq%2BBnfNy08COhswLgkWtkzJP0lhJtAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNAMp7qR9Lr7B3rVXSrcAwz%2FsphX8k1uJYWpZljs3X8pSGVWzmEO5V9B%2FKIJ%2FWojDLirtjhkAKK%2BUCBq1RolX6NG%2FdeWWhe33hbIEDMde175rTvAX2Ehy0jnAL2ZCYdUVeudxiv3jV7DQ9A0R9aaBD6D68OtedxNfxe4C3XPrQ%2B6jHJ2WX4WDxfcQeSkCPs4pDslfOa0NicbLlDCXsYOSx7TcOwhx7fBgy7fk11Bihu4mPkA01f54K8lwYDmeLGCKZGeRdgqIqSulxFWaxzEMlVxNFPqJIDxjBUfjQ7mvNSXPoBROls2Sz0S8W%2BRGC%2F5axnUP97bJyhfk2Qk2VCi2bXajIYH7zMx99RXRXu0MK86avN7GozQeSXHR%2BSc%2BW6QmHEUFARSlZGgK2V%2FflnmrS4p0vrJ9lpLlbaRKFhajFQ9HJitvbUzGXIs7jpPwUhyQ%2FGsxSFw4b6GxTyqsC6WTehQ%2B4EsDvtGJFGFOT6SAOyqFB8vyX62dvG1to7iBYOWRZEp3%2FaPTE2zknLB5GyEAIQdh%2FV9IrA%2B1rtg%2FxkdSAUCTTi27WJY54QlvjzzjLrDA5zqtM1VWQ%2BpLN5N3sdUDZCyc0rl8KNBGfBZ7jBSs8xWnUJ3HdpArVhw6Ofw9Jj6JZOcoCHjmcAP1hOYMKqgtcIGOqUBupC21xg%2FobH4z1CXY4oNbF5LrA3LhBD1DRMBCkco1yQw43TEOOqB43ocWJoDflaNd3bV3AJwNC%2BL5aPdt4iGpgZOMyuLO%2B11IYcpMg4DDAcxUS8NVRZlo23fH8S8ULYBbbwQpuA8kjum1Bw%2B%2BJPiNhjEo3khMoYLjhfun2VwUI6Y5vYukkM79WWl01Oe5VwhUHseckZmgFJEcgiCSggflhsK%2Bhd8&X-Amz-Signature=e92c78a2f783e84fab9d85de82e01214af2a6951504ae3d584626acaead215d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQOH7YQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEVHctlzaXC0K%2BzPfow4ZeSEqlrmAIeRNXrd%2FHFAvwrNAiEApqz64BiJn5wV6Uq%2BBnfNy08COhswLgkWtkzJP0lhJtAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNAMp7qR9Lr7B3rVXSrcAwz%2FsphX8k1uJYWpZljs3X8pSGVWzmEO5V9B%2FKIJ%2FWojDLirtjhkAKK%2BUCBq1RolX6NG%2FdeWWhe33hbIEDMde175rTvAX2Ehy0jnAL2ZCYdUVeudxiv3jV7DQ9A0R9aaBD6D68OtedxNfxe4C3XPrQ%2B6jHJ2WX4WDxfcQeSkCPs4pDslfOa0NicbLlDCXsYOSx7TcOwhx7fBgy7fk11Bihu4mPkA01f54K8lwYDmeLGCKZGeRdgqIqSulxFWaxzEMlVxNFPqJIDxjBUfjQ7mvNSXPoBROls2Sz0S8W%2BRGC%2F5axnUP97bJyhfk2Qk2VCi2bXajIYH7zMx99RXRXu0MK86avN7GozQeSXHR%2BSc%2BW6QmHEUFARSlZGgK2V%2FflnmrS4p0vrJ9lpLlbaRKFhajFQ9HJitvbUzGXIs7jpPwUhyQ%2FGsxSFw4b6GxTyqsC6WTehQ%2B4EsDvtGJFGFOT6SAOyqFB8vyX62dvG1to7iBYOWRZEp3%2FaPTE2zknLB5GyEAIQdh%2FV9IrA%2B1rtg%2FxkdSAUCTTi27WJY54QlvjzzjLrDA5zqtM1VWQ%2BpLN5N3sdUDZCyc0rl8KNBGfBZ7jBSs8xWnUJ3HdpArVhw6Ofw9Jj6JZOcoCHjmcAP1hOYMKqgtcIGOqUBupC21xg%2FobH4z1CXY4oNbF5LrA3LhBD1DRMBCkco1yQw43TEOOqB43ocWJoDflaNd3bV3AJwNC%2BL5aPdt4iGpgZOMyuLO%2B11IYcpMg4DDAcxUS8NVRZlo23fH8S8ULYBbbwQpuA8kjum1Bw%2B%2BJPiNhjEo3khMoYLjhfun2VwUI6Y5vYukkM79WWl01Oe5VwhUHseckZmgFJEcgiCSggflhsK%2Bhd8&X-Amz-Signature=f32a309293849e628f38eeb18e092b73d405e6676d5c88b69ff2920e4c5f249e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQOH7YQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEVHctlzaXC0K%2BzPfow4ZeSEqlrmAIeRNXrd%2FHFAvwrNAiEApqz64BiJn5wV6Uq%2BBnfNy08COhswLgkWtkzJP0lhJtAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNAMp7qR9Lr7B3rVXSrcAwz%2FsphX8k1uJYWpZljs3X8pSGVWzmEO5V9B%2FKIJ%2FWojDLirtjhkAKK%2BUCBq1RolX6NG%2FdeWWhe33hbIEDMde175rTvAX2Ehy0jnAL2ZCYdUVeudxiv3jV7DQ9A0R9aaBD6D68OtedxNfxe4C3XPrQ%2B6jHJ2WX4WDxfcQeSkCPs4pDslfOa0NicbLlDCXsYOSx7TcOwhx7fBgy7fk11Bihu4mPkA01f54K8lwYDmeLGCKZGeRdgqIqSulxFWaxzEMlVxNFPqJIDxjBUfjQ7mvNSXPoBROls2Sz0S8W%2BRGC%2F5axnUP97bJyhfk2Qk2VCi2bXajIYH7zMx99RXRXu0MK86avN7GozQeSXHR%2BSc%2BW6QmHEUFARSlZGgK2V%2FflnmrS4p0vrJ9lpLlbaRKFhajFQ9HJitvbUzGXIs7jpPwUhyQ%2FGsxSFw4b6GxTyqsC6WTehQ%2B4EsDvtGJFGFOT6SAOyqFB8vyX62dvG1to7iBYOWRZEp3%2FaPTE2zknLB5GyEAIQdh%2FV9IrA%2B1rtg%2FxkdSAUCTTi27WJY54QlvjzzjLrDA5zqtM1VWQ%2BpLN5N3sdUDZCyc0rl8KNBGfBZ7jBSs8xWnUJ3HdpArVhw6Ofw9Jj6JZOcoCHjmcAP1hOYMKqgtcIGOqUBupC21xg%2FobH4z1CXY4oNbF5LrA3LhBD1DRMBCkco1yQw43TEOOqB43ocWJoDflaNd3bV3AJwNC%2BL5aPdt4iGpgZOMyuLO%2B11IYcpMg4DDAcxUS8NVRZlo23fH8S8ULYBbbwQpuA8kjum1Bw%2B%2BJPiNhjEo3khMoYLjhfun2VwUI6Y5vYukkM79WWl01Oe5VwhUHseckZmgFJEcgiCSggflhsK%2Bhd8&X-Amz-Signature=ad3d652653550ac564f5620c028c0fd7184f28c4e2d2eaf517a31c87dec86b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQOH7YQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEVHctlzaXC0K%2BzPfow4ZeSEqlrmAIeRNXrd%2FHFAvwrNAiEApqz64BiJn5wV6Uq%2BBnfNy08COhswLgkWtkzJP0lhJtAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNAMp7qR9Lr7B3rVXSrcAwz%2FsphX8k1uJYWpZljs3X8pSGVWzmEO5V9B%2FKIJ%2FWojDLirtjhkAKK%2BUCBq1RolX6NG%2FdeWWhe33hbIEDMde175rTvAX2Ehy0jnAL2ZCYdUVeudxiv3jV7DQ9A0R9aaBD6D68OtedxNfxe4C3XPrQ%2B6jHJ2WX4WDxfcQeSkCPs4pDslfOa0NicbLlDCXsYOSx7TcOwhx7fBgy7fk11Bihu4mPkA01f54K8lwYDmeLGCKZGeRdgqIqSulxFWaxzEMlVxNFPqJIDxjBUfjQ7mvNSXPoBROls2Sz0S8W%2BRGC%2F5axnUP97bJyhfk2Qk2VCi2bXajIYH7zMx99RXRXu0MK86avN7GozQeSXHR%2BSc%2BW6QmHEUFARSlZGgK2V%2FflnmrS4p0vrJ9lpLlbaRKFhajFQ9HJitvbUzGXIs7jpPwUhyQ%2FGsxSFw4b6GxTyqsC6WTehQ%2B4EsDvtGJFGFOT6SAOyqFB8vyX62dvG1to7iBYOWRZEp3%2FaPTE2zknLB5GyEAIQdh%2FV9IrA%2B1rtg%2FxkdSAUCTTi27WJY54QlvjzzjLrDA5zqtM1VWQ%2BpLN5N3sdUDZCyc0rl8KNBGfBZ7jBSs8xWnUJ3HdpArVhw6Ofw9Jj6JZOcoCHjmcAP1hOYMKqgtcIGOqUBupC21xg%2FobH4z1CXY4oNbF5LrA3LhBD1DRMBCkco1yQw43TEOOqB43ocWJoDflaNd3bV3AJwNC%2BL5aPdt4iGpgZOMyuLO%2B11IYcpMg4DDAcxUS8NVRZlo23fH8S8ULYBbbwQpuA8kjum1Bw%2B%2BJPiNhjEo3khMoYLjhfun2VwUI6Y5vYukkM79WWl01Oe5VwhUHseckZmgFJEcgiCSggflhsK%2Bhd8&X-Amz-Signature=27607431b40832cd61375b6bda4693d28d9eedaba63390b39d8b6e4ae819fc77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQOH7YQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEVHctlzaXC0K%2BzPfow4ZeSEqlrmAIeRNXrd%2FHFAvwrNAiEApqz64BiJn5wV6Uq%2BBnfNy08COhswLgkWtkzJP0lhJtAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNAMp7qR9Lr7B3rVXSrcAwz%2FsphX8k1uJYWpZljs3X8pSGVWzmEO5V9B%2FKIJ%2FWojDLirtjhkAKK%2BUCBq1RolX6NG%2FdeWWhe33hbIEDMde175rTvAX2Ehy0jnAL2ZCYdUVeudxiv3jV7DQ9A0R9aaBD6D68OtedxNfxe4C3XPrQ%2B6jHJ2WX4WDxfcQeSkCPs4pDslfOa0NicbLlDCXsYOSx7TcOwhx7fBgy7fk11Bihu4mPkA01f54K8lwYDmeLGCKZGeRdgqIqSulxFWaxzEMlVxNFPqJIDxjBUfjQ7mvNSXPoBROls2Sz0S8W%2BRGC%2F5axnUP97bJyhfk2Qk2VCi2bXajIYH7zMx99RXRXu0MK86avN7GozQeSXHR%2BSc%2BW6QmHEUFARSlZGgK2V%2FflnmrS4p0vrJ9lpLlbaRKFhajFQ9HJitvbUzGXIs7jpPwUhyQ%2FGsxSFw4b6GxTyqsC6WTehQ%2B4EsDvtGJFGFOT6SAOyqFB8vyX62dvG1to7iBYOWRZEp3%2FaPTE2zknLB5GyEAIQdh%2FV9IrA%2B1rtg%2FxkdSAUCTTi27WJY54QlvjzzjLrDA5zqtM1VWQ%2BpLN5N3sdUDZCyc0rl8KNBGfBZ7jBSs8xWnUJ3HdpArVhw6Ofw9Jj6JZOcoCHjmcAP1hOYMKqgtcIGOqUBupC21xg%2FobH4z1CXY4oNbF5LrA3LhBD1DRMBCkco1yQw43TEOOqB43ocWJoDflaNd3bV3AJwNC%2BL5aPdt4iGpgZOMyuLO%2B11IYcpMg4DDAcxUS8NVRZlo23fH8S8ULYBbbwQpuA8kjum1Bw%2B%2BJPiNhjEo3khMoYLjhfun2VwUI6Y5vYukkM79WWl01Oe5VwhUHseckZmgFJEcgiCSggflhsK%2Bhd8&X-Amz-Signature=60eb1d6448af44ca288f8f4b8a30f7f4666b0f3f4c1da64faaf282c01126ad12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
