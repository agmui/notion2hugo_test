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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BJVUX2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACAeTpVt1AeRbjZqnGfHvvgF0t6Wwdtd9Cx6BKTVDqKAiEA%2Fe4EcROPfIFWQgB9kqWu2nyucSyvpF35RGBvRUE9AUoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHwsGw18m5I9HNFGbSrcA0Uwcu%2FBzzaWitm7WMWFJwb8YjbE4wMHymwK3xQ%2B1B4wPZMiR6V94ULSQm7zuEMVmzCb2wf0bXP5R9H2ZCiTgGY%2F5A5zU3IEjDscQRez4gC4HVpZSVl%2BboRRfcIzJ81rySOY5xuHTislLkdTV%2FPDbKh0IbHffyQi6gZeXPL53zrp1Sn3eQHz%2BG%2BDrRDz052NZXek0u594Cyf1SabM%2Blq561QK0tF%2B7%2FQznBhrmkrfgPYxqk1rWDIIJr65L0IosYhflKN9FVAueFRY0Bx0VDD5aIgOTUOFUlDiCV9dOMf5fS6w6ZIUld04neDb8HsbBomYtjIKPyMRgIiyNCdyH0RX7WscB92EKbm4afAj9eh7O43PSRA7gFSxo4qk4NNlRWC40ic40rFbTS1fhWylFMYAN8S7nsGxfi4%2B6AsHvyt0N3EA4kVgPbr%2Bb5mFBKWC%2FO7VgdwkzK%2B%2FGGikX3CGfhpP7r1D%2FqwAfLvzcQH95eBYqmUp2HuCKcVdJgzkMiYxCeonFP%2BRKc79Z1XdaureWGpagMmIJlR66UR0h%2FWH53Y9tS5jUpDXHdfCS8mLsBo9axwHFpyVmOrqq1MdGhvdLPWMIx3XjJV7PYbbIm%2FsUzS8dPvOA%2Frmkrvup6fziaBMKnh1L4GOqUBEvDsgAvLfenk2fPUUNgrDx1WUOvOJuAhUIqeGQWB7LSTLFj11KSc6Blp6wuEI8RPVQrmwNpXS5bm%2F0y8T%2FF4Cyx%2FoGxolawEtnyvmNCWYIr8wnBBxk2z2p4RS8pU9K4nFK9bCTsiNZ%2BMtOmSLD27CA45bjxNp0px5Ouh7rAmqZA0%2Fd6T6I6DRU4g1VAAjKFyjvhAnuVa%2BfHMMVhWkoivwOD4F5ik&X-Amz-Signature=3c078b3bea9885b47bb1e53a67be5a0dfd5aaa4e06486e0b030f8dc29cb2baf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BJVUX2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACAeTpVt1AeRbjZqnGfHvvgF0t6Wwdtd9Cx6BKTVDqKAiEA%2Fe4EcROPfIFWQgB9kqWu2nyucSyvpF35RGBvRUE9AUoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHwsGw18m5I9HNFGbSrcA0Uwcu%2FBzzaWitm7WMWFJwb8YjbE4wMHymwK3xQ%2B1B4wPZMiR6V94ULSQm7zuEMVmzCb2wf0bXP5R9H2ZCiTgGY%2F5A5zU3IEjDscQRez4gC4HVpZSVl%2BboRRfcIzJ81rySOY5xuHTislLkdTV%2FPDbKh0IbHffyQi6gZeXPL53zrp1Sn3eQHz%2BG%2BDrRDz052NZXek0u594Cyf1SabM%2Blq561QK0tF%2B7%2FQznBhrmkrfgPYxqk1rWDIIJr65L0IosYhflKN9FVAueFRY0Bx0VDD5aIgOTUOFUlDiCV9dOMf5fS6w6ZIUld04neDb8HsbBomYtjIKPyMRgIiyNCdyH0RX7WscB92EKbm4afAj9eh7O43PSRA7gFSxo4qk4NNlRWC40ic40rFbTS1fhWylFMYAN8S7nsGxfi4%2B6AsHvyt0N3EA4kVgPbr%2Bb5mFBKWC%2FO7VgdwkzK%2B%2FGGikX3CGfhpP7r1D%2FqwAfLvzcQH95eBYqmUp2HuCKcVdJgzkMiYxCeonFP%2BRKc79Z1XdaureWGpagMmIJlR66UR0h%2FWH53Y9tS5jUpDXHdfCS8mLsBo9axwHFpyVmOrqq1MdGhvdLPWMIx3XjJV7PYbbIm%2FsUzS8dPvOA%2Frmkrvup6fziaBMKnh1L4GOqUBEvDsgAvLfenk2fPUUNgrDx1WUOvOJuAhUIqeGQWB7LSTLFj11KSc6Blp6wuEI8RPVQrmwNpXS5bm%2F0y8T%2FF4Cyx%2FoGxolawEtnyvmNCWYIr8wnBBxk2z2p4RS8pU9K4nFK9bCTsiNZ%2BMtOmSLD27CA45bjxNp0px5Ouh7rAmqZA0%2Fd6T6I6DRU4g1VAAjKFyjvhAnuVa%2BfHMMVhWkoivwOD4F5ik&X-Amz-Signature=eee21f2568f066411e99fb9a0d260b824eb24b1c8c6471c49950d81266235a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BJVUX2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACAeTpVt1AeRbjZqnGfHvvgF0t6Wwdtd9Cx6BKTVDqKAiEA%2Fe4EcROPfIFWQgB9kqWu2nyucSyvpF35RGBvRUE9AUoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHwsGw18m5I9HNFGbSrcA0Uwcu%2FBzzaWitm7WMWFJwb8YjbE4wMHymwK3xQ%2B1B4wPZMiR6V94ULSQm7zuEMVmzCb2wf0bXP5R9H2ZCiTgGY%2F5A5zU3IEjDscQRez4gC4HVpZSVl%2BboRRfcIzJ81rySOY5xuHTislLkdTV%2FPDbKh0IbHffyQi6gZeXPL53zrp1Sn3eQHz%2BG%2BDrRDz052NZXek0u594Cyf1SabM%2Blq561QK0tF%2B7%2FQznBhrmkrfgPYxqk1rWDIIJr65L0IosYhflKN9FVAueFRY0Bx0VDD5aIgOTUOFUlDiCV9dOMf5fS6w6ZIUld04neDb8HsbBomYtjIKPyMRgIiyNCdyH0RX7WscB92EKbm4afAj9eh7O43PSRA7gFSxo4qk4NNlRWC40ic40rFbTS1fhWylFMYAN8S7nsGxfi4%2B6AsHvyt0N3EA4kVgPbr%2Bb5mFBKWC%2FO7VgdwkzK%2B%2FGGikX3CGfhpP7r1D%2FqwAfLvzcQH95eBYqmUp2HuCKcVdJgzkMiYxCeonFP%2BRKc79Z1XdaureWGpagMmIJlR66UR0h%2FWH53Y9tS5jUpDXHdfCS8mLsBo9axwHFpyVmOrqq1MdGhvdLPWMIx3XjJV7PYbbIm%2FsUzS8dPvOA%2Frmkrvup6fziaBMKnh1L4GOqUBEvDsgAvLfenk2fPUUNgrDx1WUOvOJuAhUIqeGQWB7LSTLFj11KSc6Blp6wuEI8RPVQrmwNpXS5bm%2F0y8T%2FF4Cyx%2FoGxolawEtnyvmNCWYIr8wnBBxk2z2p4RS8pU9K4nFK9bCTsiNZ%2BMtOmSLD27CA45bjxNp0px5Ouh7rAmqZA0%2Fd6T6I6DRU4g1VAAjKFyjvhAnuVa%2BfHMMVhWkoivwOD4F5ik&X-Amz-Signature=4e7f139de115cae68d883846cc6fe09c1877934d3d31eaa9c845af5077faa5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BJVUX2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACAeTpVt1AeRbjZqnGfHvvgF0t6Wwdtd9Cx6BKTVDqKAiEA%2Fe4EcROPfIFWQgB9kqWu2nyucSyvpF35RGBvRUE9AUoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHwsGw18m5I9HNFGbSrcA0Uwcu%2FBzzaWitm7WMWFJwb8YjbE4wMHymwK3xQ%2B1B4wPZMiR6V94ULSQm7zuEMVmzCb2wf0bXP5R9H2ZCiTgGY%2F5A5zU3IEjDscQRez4gC4HVpZSVl%2BboRRfcIzJ81rySOY5xuHTislLkdTV%2FPDbKh0IbHffyQi6gZeXPL53zrp1Sn3eQHz%2BG%2BDrRDz052NZXek0u594Cyf1SabM%2Blq561QK0tF%2B7%2FQznBhrmkrfgPYxqk1rWDIIJr65L0IosYhflKN9FVAueFRY0Bx0VDD5aIgOTUOFUlDiCV9dOMf5fS6w6ZIUld04neDb8HsbBomYtjIKPyMRgIiyNCdyH0RX7WscB92EKbm4afAj9eh7O43PSRA7gFSxo4qk4NNlRWC40ic40rFbTS1fhWylFMYAN8S7nsGxfi4%2B6AsHvyt0N3EA4kVgPbr%2Bb5mFBKWC%2FO7VgdwkzK%2B%2FGGikX3CGfhpP7r1D%2FqwAfLvzcQH95eBYqmUp2HuCKcVdJgzkMiYxCeonFP%2BRKc79Z1XdaureWGpagMmIJlR66UR0h%2FWH53Y9tS5jUpDXHdfCS8mLsBo9axwHFpyVmOrqq1MdGhvdLPWMIx3XjJV7PYbbIm%2FsUzS8dPvOA%2Frmkrvup6fziaBMKnh1L4GOqUBEvDsgAvLfenk2fPUUNgrDx1WUOvOJuAhUIqeGQWB7LSTLFj11KSc6Blp6wuEI8RPVQrmwNpXS5bm%2F0y8T%2FF4Cyx%2FoGxolawEtnyvmNCWYIr8wnBBxk2z2p4RS8pU9K4nFK9bCTsiNZ%2BMtOmSLD27CA45bjxNp0px5Ouh7rAmqZA0%2Fd6T6I6DRU4g1VAAjKFyjvhAnuVa%2BfHMMVhWkoivwOD4F5ik&X-Amz-Signature=e497fb8ce58ecc4df1b3b42561a51f9b69470597baef91436b5f7b2015e3fe86&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BJVUX2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACAeTpVt1AeRbjZqnGfHvvgF0t6Wwdtd9Cx6BKTVDqKAiEA%2Fe4EcROPfIFWQgB9kqWu2nyucSyvpF35RGBvRUE9AUoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHwsGw18m5I9HNFGbSrcA0Uwcu%2FBzzaWitm7WMWFJwb8YjbE4wMHymwK3xQ%2B1B4wPZMiR6V94ULSQm7zuEMVmzCb2wf0bXP5R9H2ZCiTgGY%2F5A5zU3IEjDscQRez4gC4HVpZSVl%2BboRRfcIzJ81rySOY5xuHTislLkdTV%2FPDbKh0IbHffyQi6gZeXPL53zrp1Sn3eQHz%2BG%2BDrRDz052NZXek0u594Cyf1SabM%2Blq561QK0tF%2B7%2FQznBhrmkrfgPYxqk1rWDIIJr65L0IosYhflKN9FVAueFRY0Bx0VDD5aIgOTUOFUlDiCV9dOMf5fS6w6ZIUld04neDb8HsbBomYtjIKPyMRgIiyNCdyH0RX7WscB92EKbm4afAj9eh7O43PSRA7gFSxo4qk4NNlRWC40ic40rFbTS1fhWylFMYAN8S7nsGxfi4%2B6AsHvyt0N3EA4kVgPbr%2Bb5mFBKWC%2FO7VgdwkzK%2B%2FGGikX3CGfhpP7r1D%2FqwAfLvzcQH95eBYqmUp2HuCKcVdJgzkMiYxCeonFP%2BRKc79Z1XdaureWGpagMmIJlR66UR0h%2FWH53Y9tS5jUpDXHdfCS8mLsBo9axwHFpyVmOrqq1MdGhvdLPWMIx3XjJV7PYbbIm%2FsUzS8dPvOA%2Frmkrvup6fziaBMKnh1L4GOqUBEvDsgAvLfenk2fPUUNgrDx1WUOvOJuAhUIqeGQWB7LSTLFj11KSc6Blp6wuEI8RPVQrmwNpXS5bm%2F0y8T%2FF4Cyx%2FoGxolawEtnyvmNCWYIr8wnBBxk2z2p4RS8pU9K4nFK9bCTsiNZ%2BMtOmSLD27CA45bjxNp0px5Ouh7rAmqZA0%2Fd6T6I6DRU4g1VAAjKFyjvhAnuVa%2BfHMMVhWkoivwOD4F5ik&X-Amz-Signature=6029ec37335e1ecd6db5da921b4bec8d023b4c4927275f6d79dc9fcd9d7146e5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BJVUX2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACAeTpVt1AeRbjZqnGfHvvgF0t6Wwdtd9Cx6BKTVDqKAiEA%2Fe4EcROPfIFWQgB9kqWu2nyucSyvpF35RGBvRUE9AUoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHwsGw18m5I9HNFGbSrcA0Uwcu%2FBzzaWitm7WMWFJwb8YjbE4wMHymwK3xQ%2B1B4wPZMiR6V94ULSQm7zuEMVmzCb2wf0bXP5R9H2ZCiTgGY%2F5A5zU3IEjDscQRez4gC4HVpZSVl%2BboRRfcIzJ81rySOY5xuHTislLkdTV%2FPDbKh0IbHffyQi6gZeXPL53zrp1Sn3eQHz%2BG%2BDrRDz052NZXek0u594Cyf1SabM%2Blq561QK0tF%2B7%2FQznBhrmkrfgPYxqk1rWDIIJr65L0IosYhflKN9FVAueFRY0Bx0VDD5aIgOTUOFUlDiCV9dOMf5fS6w6ZIUld04neDb8HsbBomYtjIKPyMRgIiyNCdyH0RX7WscB92EKbm4afAj9eh7O43PSRA7gFSxo4qk4NNlRWC40ic40rFbTS1fhWylFMYAN8S7nsGxfi4%2B6AsHvyt0N3EA4kVgPbr%2Bb5mFBKWC%2FO7VgdwkzK%2B%2FGGikX3CGfhpP7r1D%2FqwAfLvzcQH95eBYqmUp2HuCKcVdJgzkMiYxCeonFP%2BRKc79Z1XdaureWGpagMmIJlR66UR0h%2FWH53Y9tS5jUpDXHdfCS8mLsBo9axwHFpyVmOrqq1MdGhvdLPWMIx3XjJV7PYbbIm%2FsUzS8dPvOA%2Frmkrvup6fziaBMKnh1L4GOqUBEvDsgAvLfenk2fPUUNgrDx1WUOvOJuAhUIqeGQWB7LSTLFj11KSc6Blp6wuEI8RPVQrmwNpXS5bm%2F0y8T%2FF4Cyx%2FoGxolawEtnyvmNCWYIr8wnBBxk2z2p4RS8pU9K4nFK9bCTsiNZ%2BMtOmSLD27CA45bjxNp0px5Ouh7rAmqZA0%2Fd6T6I6DRU4g1VAAjKFyjvhAnuVa%2BfHMMVhWkoivwOD4F5ik&X-Amz-Signature=b9486164267cac42f909b4204c14474782764cb936bd717468b823e8f0ec59b1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BJVUX2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACAeTpVt1AeRbjZqnGfHvvgF0t6Wwdtd9Cx6BKTVDqKAiEA%2Fe4EcROPfIFWQgB9kqWu2nyucSyvpF35RGBvRUE9AUoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHwsGw18m5I9HNFGbSrcA0Uwcu%2FBzzaWitm7WMWFJwb8YjbE4wMHymwK3xQ%2B1B4wPZMiR6V94ULSQm7zuEMVmzCb2wf0bXP5R9H2ZCiTgGY%2F5A5zU3IEjDscQRez4gC4HVpZSVl%2BboRRfcIzJ81rySOY5xuHTislLkdTV%2FPDbKh0IbHffyQi6gZeXPL53zrp1Sn3eQHz%2BG%2BDrRDz052NZXek0u594Cyf1SabM%2Blq561QK0tF%2B7%2FQznBhrmkrfgPYxqk1rWDIIJr65L0IosYhflKN9FVAueFRY0Bx0VDD5aIgOTUOFUlDiCV9dOMf5fS6w6ZIUld04neDb8HsbBomYtjIKPyMRgIiyNCdyH0RX7WscB92EKbm4afAj9eh7O43PSRA7gFSxo4qk4NNlRWC40ic40rFbTS1fhWylFMYAN8S7nsGxfi4%2B6AsHvyt0N3EA4kVgPbr%2Bb5mFBKWC%2FO7VgdwkzK%2B%2FGGikX3CGfhpP7r1D%2FqwAfLvzcQH95eBYqmUp2HuCKcVdJgzkMiYxCeonFP%2BRKc79Z1XdaureWGpagMmIJlR66UR0h%2FWH53Y9tS5jUpDXHdfCS8mLsBo9axwHFpyVmOrqq1MdGhvdLPWMIx3XjJV7PYbbIm%2FsUzS8dPvOA%2Frmkrvup6fziaBMKnh1L4GOqUBEvDsgAvLfenk2fPUUNgrDx1WUOvOJuAhUIqeGQWB7LSTLFj11KSc6Blp6wuEI8RPVQrmwNpXS5bm%2F0y8T%2FF4Cyx%2FoGxolawEtnyvmNCWYIr8wnBBxk2z2p4RS8pU9K4nFK9bCTsiNZ%2BMtOmSLD27CA45bjxNp0px5Ouh7rAmqZA0%2Fd6T6I6DRU4g1VAAjKFyjvhAnuVa%2BfHMMVhWkoivwOD4F5ik&X-Amz-Signature=95905f218a9246f337b0c7365f76e5d8d95ba3e0a5934b6fadcc3e1d47aa0d14&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
