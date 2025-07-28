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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNP53SA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCbHNWWTgCG9iQXuitAzgNfR6zKwHPasDpTA6AbHgFVswIgYEPV9YrY4Jo1wVvLZiNNQblx%2BCP1etg0z2NJq9VDMIMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbArABtbCkd4uJbuSrcA1NJVQk8fKYxSr8S9AhYres%2FZv%2BBuzV7AEInpPRITfou%2FUGrk9Jp7pDDdUnWyWcxT8mOWyV4XIFGWIqsm2ee8r3hY4FuxrKcp7b2msioOIJaCoij0XscF2653sw0UWhiLt54fPndvwNF0CDSZy48bp8%2B4dsPdlecwoBdjbsT%2FtbElG43RwwR4XU69uBBpp%2FItInBO%2FKcCQSopfpphMK%2B1FxMzYhtRwY4mMvW6G1Iamz8%2FFbQD8uKTyamw%2Fnc8rKuAHdey6b2pUH3Yrh4LqqKv6MIqStzpqFikS%2F2eAJKjED4Ced0Jn0uNmgs3zXJO1aazDiS15eoGWhteOYPKXtICmu7%2Flx88IH1cmQtCYHD%2B347%2BoWozQgz%2FqBSyhYVMemPMPwiCgJblL6v42ba0ZGjxwZdVTAEQHK0mQYDtC%2F84NbkacgyZIfCP4YY7VVGQGj363T%2FoFXDx%2Bb2j%2BdJLcM2C48HatUQno4Dq7Q72ojwI28QNMrLGZhEwTGIxIkozpAaPcLz6s1r4EVJuap4RwEJr1uXIyhBKTgPsL8vE7Iim2%2F1kVnEm3Lx7nNTXast4MG7AVm4Xr%2FSuGYjGMtjgcjTWVOrV8eyiveB7GFX9ybd1B8tMrVhWW2CLtcztWPTMMWLn8QGOqUB3yRBPd4ydNCqIhjGlnBcSvLvzYnbT91TyjTWR1Fk9%2BrQMSUQg%2B2g%2FoMDa5E2U7Rn5GYg5iQNbfjtPCLUuCW54Dlo%2FiNADoxF9kQalx9QOrzrB9z4gyXzKD6ItNwpqU13DP0MVOaxYHfACYtgAVVVBRbVSE5bISEZuMQq6Y4GtoCr0NQIoZrwyZ7HBFOwriNbRCxIR7u6iKF7Ii8yLNTcxa68%2FNkl&X-Amz-Signature=b059f7ea55b0f0c4f495ee56f1473842e89665a17223ed4a54ef8eedb3fd828b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNP53SA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCbHNWWTgCG9iQXuitAzgNfR6zKwHPasDpTA6AbHgFVswIgYEPV9YrY4Jo1wVvLZiNNQblx%2BCP1etg0z2NJq9VDMIMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbArABtbCkd4uJbuSrcA1NJVQk8fKYxSr8S9AhYres%2FZv%2BBuzV7AEInpPRITfou%2FUGrk9Jp7pDDdUnWyWcxT8mOWyV4XIFGWIqsm2ee8r3hY4FuxrKcp7b2msioOIJaCoij0XscF2653sw0UWhiLt54fPndvwNF0CDSZy48bp8%2B4dsPdlecwoBdjbsT%2FtbElG43RwwR4XU69uBBpp%2FItInBO%2FKcCQSopfpphMK%2B1FxMzYhtRwY4mMvW6G1Iamz8%2FFbQD8uKTyamw%2Fnc8rKuAHdey6b2pUH3Yrh4LqqKv6MIqStzpqFikS%2F2eAJKjED4Ced0Jn0uNmgs3zXJO1aazDiS15eoGWhteOYPKXtICmu7%2Flx88IH1cmQtCYHD%2B347%2BoWozQgz%2FqBSyhYVMemPMPwiCgJblL6v42ba0ZGjxwZdVTAEQHK0mQYDtC%2F84NbkacgyZIfCP4YY7VVGQGj363T%2FoFXDx%2Bb2j%2BdJLcM2C48HatUQno4Dq7Q72ojwI28QNMrLGZhEwTGIxIkozpAaPcLz6s1r4EVJuap4RwEJr1uXIyhBKTgPsL8vE7Iim2%2F1kVnEm3Lx7nNTXast4MG7AVm4Xr%2FSuGYjGMtjgcjTWVOrV8eyiveB7GFX9ybd1B8tMrVhWW2CLtcztWPTMMWLn8QGOqUB3yRBPd4ydNCqIhjGlnBcSvLvzYnbT91TyjTWR1Fk9%2BrQMSUQg%2B2g%2FoMDa5E2U7Rn5GYg5iQNbfjtPCLUuCW54Dlo%2FiNADoxF9kQalx9QOrzrB9z4gyXzKD6ItNwpqU13DP0MVOaxYHfACYtgAVVVBRbVSE5bISEZuMQq6Y4GtoCr0NQIoZrwyZ7HBFOwriNbRCxIR7u6iKF7Ii8yLNTcxa68%2FNkl&X-Amz-Signature=fc5a508254591e4a74182474730315a27cb989f2d869a76504d94d5fc441a456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNP53SA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCbHNWWTgCG9iQXuitAzgNfR6zKwHPasDpTA6AbHgFVswIgYEPV9YrY4Jo1wVvLZiNNQblx%2BCP1etg0z2NJq9VDMIMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbArABtbCkd4uJbuSrcA1NJVQk8fKYxSr8S9AhYres%2FZv%2BBuzV7AEInpPRITfou%2FUGrk9Jp7pDDdUnWyWcxT8mOWyV4XIFGWIqsm2ee8r3hY4FuxrKcp7b2msioOIJaCoij0XscF2653sw0UWhiLt54fPndvwNF0CDSZy48bp8%2B4dsPdlecwoBdjbsT%2FtbElG43RwwR4XU69uBBpp%2FItInBO%2FKcCQSopfpphMK%2B1FxMzYhtRwY4mMvW6G1Iamz8%2FFbQD8uKTyamw%2Fnc8rKuAHdey6b2pUH3Yrh4LqqKv6MIqStzpqFikS%2F2eAJKjED4Ced0Jn0uNmgs3zXJO1aazDiS15eoGWhteOYPKXtICmu7%2Flx88IH1cmQtCYHD%2B347%2BoWozQgz%2FqBSyhYVMemPMPwiCgJblL6v42ba0ZGjxwZdVTAEQHK0mQYDtC%2F84NbkacgyZIfCP4YY7VVGQGj363T%2FoFXDx%2Bb2j%2BdJLcM2C48HatUQno4Dq7Q72ojwI28QNMrLGZhEwTGIxIkozpAaPcLz6s1r4EVJuap4RwEJr1uXIyhBKTgPsL8vE7Iim2%2F1kVnEm3Lx7nNTXast4MG7AVm4Xr%2FSuGYjGMtjgcjTWVOrV8eyiveB7GFX9ybd1B8tMrVhWW2CLtcztWPTMMWLn8QGOqUB3yRBPd4ydNCqIhjGlnBcSvLvzYnbT91TyjTWR1Fk9%2BrQMSUQg%2B2g%2FoMDa5E2U7Rn5GYg5iQNbfjtPCLUuCW54Dlo%2FiNADoxF9kQalx9QOrzrB9z4gyXzKD6ItNwpqU13DP0MVOaxYHfACYtgAVVVBRbVSE5bISEZuMQq6Y4GtoCr0NQIoZrwyZ7HBFOwriNbRCxIR7u6iKF7Ii8yLNTcxa68%2FNkl&X-Amz-Signature=b92e564ea1114fbbef30f92bf885bcd884fe145597fb4453aabcfe6cd4d40b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNP53SA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCbHNWWTgCG9iQXuitAzgNfR6zKwHPasDpTA6AbHgFVswIgYEPV9YrY4Jo1wVvLZiNNQblx%2BCP1etg0z2NJq9VDMIMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbArABtbCkd4uJbuSrcA1NJVQk8fKYxSr8S9AhYres%2FZv%2BBuzV7AEInpPRITfou%2FUGrk9Jp7pDDdUnWyWcxT8mOWyV4XIFGWIqsm2ee8r3hY4FuxrKcp7b2msioOIJaCoij0XscF2653sw0UWhiLt54fPndvwNF0CDSZy48bp8%2B4dsPdlecwoBdjbsT%2FtbElG43RwwR4XU69uBBpp%2FItInBO%2FKcCQSopfpphMK%2B1FxMzYhtRwY4mMvW6G1Iamz8%2FFbQD8uKTyamw%2Fnc8rKuAHdey6b2pUH3Yrh4LqqKv6MIqStzpqFikS%2F2eAJKjED4Ced0Jn0uNmgs3zXJO1aazDiS15eoGWhteOYPKXtICmu7%2Flx88IH1cmQtCYHD%2B347%2BoWozQgz%2FqBSyhYVMemPMPwiCgJblL6v42ba0ZGjxwZdVTAEQHK0mQYDtC%2F84NbkacgyZIfCP4YY7VVGQGj363T%2FoFXDx%2Bb2j%2BdJLcM2C48HatUQno4Dq7Q72ojwI28QNMrLGZhEwTGIxIkozpAaPcLz6s1r4EVJuap4RwEJr1uXIyhBKTgPsL8vE7Iim2%2F1kVnEm3Lx7nNTXast4MG7AVm4Xr%2FSuGYjGMtjgcjTWVOrV8eyiveB7GFX9ybd1B8tMrVhWW2CLtcztWPTMMWLn8QGOqUB3yRBPd4ydNCqIhjGlnBcSvLvzYnbT91TyjTWR1Fk9%2BrQMSUQg%2B2g%2FoMDa5E2U7Rn5GYg5iQNbfjtPCLUuCW54Dlo%2FiNADoxF9kQalx9QOrzrB9z4gyXzKD6ItNwpqU13DP0MVOaxYHfACYtgAVVVBRbVSE5bISEZuMQq6Y4GtoCr0NQIoZrwyZ7HBFOwriNbRCxIR7u6iKF7Ii8yLNTcxa68%2FNkl&X-Amz-Signature=c3d00d9e1d3e3954061a2091d34f6987d7501b3b3545f6dc4bc84d87fe4ddaeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNP53SA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCbHNWWTgCG9iQXuitAzgNfR6zKwHPasDpTA6AbHgFVswIgYEPV9YrY4Jo1wVvLZiNNQblx%2BCP1etg0z2NJq9VDMIMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbArABtbCkd4uJbuSrcA1NJVQk8fKYxSr8S9AhYres%2FZv%2BBuzV7AEInpPRITfou%2FUGrk9Jp7pDDdUnWyWcxT8mOWyV4XIFGWIqsm2ee8r3hY4FuxrKcp7b2msioOIJaCoij0XscF2653sw0UWhiLt54fPndvwNF0CDSZy48bp8%2B4dsPdlecwoBdjbsT%2FtbElG43RwwR4XU69uBBpp%2FItInBO%2FKcCQSopfpphMK%2B1FxMzYhtRwY4mMvW6G1Iamz8%2FFbQD8uKTyamw%2Fnc8rKuAHdey6b2pUH3Yrh4LqqKv6MIqStzpqFikS%2F2eAJKjED4Ced0Jn0uNmgs3zXJO1aazDiS15eoGWhteOYPKXtICmu7%2Flx88IH1cmQtCYHD%2B347%2BoWozQgz%2FqBSyhYVMemPMPwiCgJblL6v42ba0ZGjxwZdVTAEQHK0mQYDtC%2F84NbkacgyZIfCP4YY7VVGQGj363T%2FoFXDx%2Bb2j%2BdJLcM2C48HatUQno4Dq7Q72ojwI28QNMrLGZhEwTGIxIkozpAaPcLz6s1r4EVJuap4RwEJr1uXIyhBKTgPsL8vE7Iim2%2F1kVnEm3Lx7nNTXast4MG7AVm4Xr%2FSuGYjGMtjgcjTWVOrV8eyiveB7GFX9ybd1B8tMrVhWW2CLtcztWPTMMWLn8QGOqUB3yRBPd4ydNCqIhjGlnBcSvLvzYnbT91TyjTWR1Fk9%2BrQMSUQg%2B2g%2FoMDa5E2U7Rn5GYg5iQNbfjtPCLUuCW54Dlo%2FiNADoxF9kQalx9QOrzrB9z4gyXzKD6ItNwpqU13DP0MVOaxYHfACYtgAVVVBRbVSE5bISEZuMQq6Y4GtoCr0NQIoZrwyZ7HBFOwriNbRCxIR7u6iKF7Ii8yLNTcxa68%2FNkl&X-Amz-Signature=2b79a28df2c53cf4c8a1f24fdf8f0a13a480d28f7ff402171413905bffe21fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNP53SA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCbHNWWTgCG9iQXuitAzgNfR6zKwHPasDpTA6AbHgFVswIgYEPV9YrY4Jo1wVvLZiNNQblx%2BCP1etg0z2NJq9VDMIMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbArABtbCkd4uJbuSrcA1NJVQk8fKYxSr8S9AhYres%2FZv%2BBuzV7AEInpPRITfou%2FUGrk9Jp7pDDdUnWyWcxT8mOWyV4XIFGWIqsm2ee8r3hY4FuxrKcp7b2msioOIJaCoij0XscF2653sw0UWhiLt54fPndvwNF0CDSZy48bp8%2B4dsPdlecwoBdjbsT%2FtbElG43RwwR4XU69uBBpp%2FItInBO%2FKcCQSopfpphMK%2B1FxMzYhtRwY4mMvW6G1Iamz8%2FFbQD8uKTyamw%2Fnc8rKuAHdey6b2pUH3Yrh4LqqKv6MIqStzpqFikS%2F2eAJKjED4Ced0Jn0uNmgs3zXJO1aazDiS15eoGWhteOYPKXtICmu7%2Flx88IH1cmQtCYHD%2B347%2BoWozQgz%2FqBSyhYVMemPMPwiCgJblL6v42ba0ZGjxwZdVTAEQHK0mQYDtC%2F84NbkacgyZIfCP4YY7VVGQGj363T%2FoFXDx%2Bb2j%2BdJLcM2C48HatUQno4Dq7Q72ojwI28QNMrLGZhEwTGIxIkozpAaPcLz6s1r4EVJuap4RwEJr1uXIyhBKTgPsL8vE7Iim2%2F1kVnEm3Lx7nNTXast4MG7AVm4Xr%2FSuGYjGMtjgcjTWVOrV8eyiveB7GFX9ybd1B8tMrVhWW2CLtcztWPTMMWLn8QGOqUB3yRBPd4ydNCqIhjGlnBcSvLvzYnbT91TyjTWR1Fk9%2BrQMSUQg%2B2g%2FoMDa5E2U7Rn5GYg5iQNbfjtPCLUuCW54Dlo%2FiNADoxF9kQalx9QOrzrB9z4gyXzKD6ItNwpqU13DP0MVOaxYHfACYtgAVVVBRbVSE5bISEZuMQq6Y4GtoCr0NQIoZrwyZ7HBFOwriNbRCxIR7u6iKF7Ii8yLNTcxa68%2FNkl&X-Amz-Signature=5bb627479e7dfd127c5cbc2f5fae16bdbe22e89a96833c1301c016aeebc1b476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNP53SA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCbHNWWTgCG9iQXuitAzgNfR6zKwHPasDpTA6AbHgFVswIgYEPV9YrY4Jo1wVvLZiNNQblx%2BCP1etg0z2NJq9VDMIMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbArABtbCkd4uJbuSrcA1NJVQk8fKYxSr8S9AhYres%2FZv%2BBuzV7AEInpPRITfou%2FUGrk9Jp7pDDdUnWyWcxT8mOWyV4XIFGWIqsm2ee8r3hY4FuxrKcp7b2msioOIJaCoij0XscF2653sw0UWhiLt54fPndvwNF0CDSZy48bp8%2B4dsPdlecwoBdjbsT%2FtbElG43RwwR4XU69uBBpp%2FItInBO%2FKcCQSopfpphMK%2B1FxMzYhtRwY4mMvW6G1Iamz8%2FFbQD8uKTyamw%2Fnc8rKuAHdey6b2pUH3Yrh4LqqKv6MIqStzpqFikS%2F2eAJKjED4Ced0Jn0uNmgs3zXJO1aazDiS15eoGWhteOYPKXtICmu7%2Flx88IH1cmQtCYHD%2B347%2BoWozQgz%2FqBSyhYVMemPMPwiCgJblL6v42ba0ZGjxwZdVTAEQHK0mQYDtC%2F84NbkacgyZIfCP4YY7VVGQGj363T%2FoFXDx%2Bb2j%2BdJLcM2C48HatUQno4Dq7Q72ojwI28QNMrLGZhEwTGIxIkozpAaPcLz6s1r4EVJuap4RwEJr1uXIyhBKTgPsL8vE7Iim2%2F1kVnEm3Lx7nNTXast4MG7AVm4Xr%2FSuGYjGMtjgcjTWVOrV8eyiveB7GFX9ybd1B8tMrVhWW2CLtcztWPTMMWLn8QGOqUB3yRBPd4ydNCqIhjGlnBcSvLvzYnbT91TyjTWR1Fk9%2BrQMSUQg%2B2g%2FoMDa5E2U7Rn5GYg5iQNbfjtPCLUuCW54Dlo%2FiNADoxF9kQalx9QOrzrB9z4gyXzKD6ItNwpqU13DP0MVOaxYHfACYtgAVVVBRbVSE5bISEZuMQq6Y4GtoCr0NQIoZrwyZ7HBFOwriNbRCxIR7u6iKF7Ii8yLNTcxa68%2FNkl&X-Amz-Signature=766e4932717db8161f4b2a495c04ccc5d6a5b1962e856f301b9f27ee66b24d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
