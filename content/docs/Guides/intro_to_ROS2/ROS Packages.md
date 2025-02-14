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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR76ZZG2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDpRO3dceghR%2BiH6oYoehWsdPNZVAF6mlJ%2Bu6cHlmXOMAiEAwoGXhN%2BzJdG9gOeKf2fpFuBgdYXzZltk2SQNWHUEvawq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO3zVrvRzBFT5cx9GSrcA646RRxb1mrLxuqduTgjLmC3ovQSMpt68baDhy%2BKADtFO%2BdYa8C3R%2Bvotl%2FuVCGk5OVOeIhtGU4ewIkOF48qTF5giwXgfbDROOVAZ3YIz9FcGtQgQfKPiKnis3Bcq3pzSBBdOeBR%2F7Dj09KKje%2FOykaFoWMWk79Zgqh0b8B63UJMy8wPOBnV3ZShvBO6Wy97v%2FMHazhCq7TRituUIXo82XYx76qY0sEe5HYih6Vlb%2BAqwfGU15OTfLJosmlqpqw1JtQ7nPkbTHHGWs3QoF4Ol9l1bPkWU6s6aeTcQJjuraw35J7sfbiV55eqCSd%2BDT4PtPyGCP1Qm7CHes6lYq7ppvC830rJNFUivCPsI%2FsFyWPSYk70sq5U0aAV2VvqX4ZtKZAWi7J4ejygwbo%2FwgFGr4GO9aLWlZpreC11lR88zEvnclxaKxqd%2FBjwyGIFWRsuOp4nUYl8hj%2B1n4I4njJ5OfOsKVWOQoWAZQA8Yt5I2mNisT%2F6FvxvYVFZuO3Pqn9cGZOQwt5dwc2FSd556ePh7rpr99qY48Xzv1iL%2FMt8V%2ByE4H%2Br64Rih09r0ovbZqFkLuxq%2By9GwerVme8FyvPWsFwWkTF%2Bdx1vwrc5SyAMDp7HsC23nYnb%2BCrbG5OgMIGVv70GOqUBMufON3KtIRPezNkPsDmBIpLIf4cWZBQDQb%2BdGYF4zXS3g23kK7oE%2Bbb8D47hkiWfx1K3qetzrShnHIdRWFAwtAESmwcej1%2BNgHNjBjBIW1v1%2BR6hqWqm4WzCBBwrBxlzSFsMpTk8esNNKxRdd5ZqvbD10C0OH%2BJZZ66IL4p5Lr%2B53Tj3oURfs3Qb3j0ab2rLGhAyY4tL%2BMAlCwE7VsWW3LYoNvxT&X-Amz-Signature=5a1321f83e41052f5b8d253325f6620c6f0da0dec462530a8a67f45153422444&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR76ZZG2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDpRO3dceghR%2BiH6oYoehWsdPNZVAF6mlJ%2Bu6cHlmXOMAiEAwoGXhN%2BzJdG9gOeKf2fpFuBgdYXzZltk2SQNWHUEvawq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO3zVrvRzBFT5cx9GSrcA646RRxb1mrLxuqduTgjLmC3ovQSMpt68baDhy%2BKADtFO%2BdYa8C3R%2Bvotl%2FuVCGk5OVOeIhtGU4ewIkOF48qTF5giwXgfbDROOVAZ3YIz9FcGtQgQfKPiKnis3Bcq3pzSBBdOeBR%2F7Dj09KKje%2FOykaFoWMWk79Zgqh0b8B63UJMy8wPOBnV3ZShvBO6Wy97v%2FMHazhCq7TRituUIXo82XYx76qY0sEe5HYih6Vlb%2BAqwfGU15OTfLJosmlqpqw1JtQ7nPkbTHHGWs3QoF4Ol9l1bPkWU6s6aeTcQJjuraw35J7sfbiV55eqCSd%2BDT4PtPyGCP1Qm7CHes6lYq7ppvC830rJNFUivCPsI%2FsFyWPSYk70sq5U0aAV2VvqX4ZtKZAWi7J4ejygwbo%2FwgFGr4GO9aLWlZpreC11lR88zEvnclxaKxqd%2FBjwyGIFWRsuOp4nUYl8hj%2B1n4I4njJ5OfOsKVWOQoWAZQA8Yt5I2mNisT%2F6FvxvYVFZuO3Pqn9cGZOQwt5dwc2FSd556ePh7rpr99qY48Xzv1iL%2FMt8V%2ByE4H%2Br64Rih09r0ovbZqFkLuxq%2By9GwerVme8FyvPWsFwWkTF%2Bdx1vwrc5SyAMDp7HsC23nYnb%2BCrbG5OgMIGVv70GOqUBMufON3KtIRPezNkPsDmBIpLIf4cWZBQDQb%2BdGYF4zXS3g23kK7oE%2Bbb8D47hkiWfx1K3qetzrShnHIdRWFAwtAESmwcej1%2BNgHNjBjBIW1v1%2BR6hqWqm4WzCBBwrBxlzSFsMpTk8esNNKxRdd5ZqvbD10C0OH%2BJZZ66IL4p5Lr%2B53Tj3oURfs3Qb3j0ab2rLGhAyY4tL%2BMAlCwE7VsWW3LYoNvxT&X-Amz-Signature=f05a8d5e565ecc6175383c2a762b35c08c2ced64b8e1b6db1bf25cc882356652&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR76ZZG2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDpRO3dceghR%2BiH6oYoehWsdPNZVAF6mlJ%2Bu6cHlmXOMAiEAwoGXhN%2BzJdG9gOeKf2fpFuBgdYXzZltk2SQNWHUEvawq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO3zVrvRzBFT5cx9GSrcA646RRxb1mrLxuqduTgjLmC3ovQSMpt68baDhy%2BKADtFO%2BdYa8C3R%2Bvotl%2FuVCGk5OVOeIhtGU4ewIkOF48qTF5giwXgfbDROOVAZ3YIz9FcGtQgQfKPiKnis3Bcq3pzSBBdOeBR%2F7Dj09KKje%2FOykaFoWMWk79Zgqh0b8B63UJMy8wPOBnV3ZShvBO6Wy97v%2FMHazhCq7TRituUIXo82XYx76qY0sEe5HYih6Vlb%2BAqwfGU15OTfLJosmlqpqw1JtQ7nPkbTHHGWs3QoF4Ol9l1bPkWU6s6aeTcQJjuraw35J7sfbiV55eqCSd%2BDT4PtPyGCP1Qm7CHes6lYq7ppvC830rJNFUivCPsI%2FsFyWPSYk70sq5U0aAV2VvqX4ZtKZAWi7J4ejygwbo%2FwgFGr4GO9aLWlZpreC11lR88zEvnclxaKxqd%2FBjwyGIFWRsuOp4nUYl8hj%2B1n4I4njJ5OfOsKVWOQoWAZQA8Yt5I2mNisT%2F6FvxvYVFZuO3Pqn9cGZOQwt5dwc2FSd556ePh7rpr99qY48Xzv1iL%2FMt8V%2ByE4H%2Br64Rih09r0ovbZqFkLuxq%2By9GwerVme8FyvPWsFwWkTF%2Bdx1vwrc5SyAMDp7HsC23nYnb%2BCrbG5OgMIGVv70GOqUBMufON3KtIRPezNkPsDmBIpLIf4cWZBQDQb%2BdGYF4zXS3g23kK7oE%2Bbb8D47hkiWfx1K3qetzrShnHIdRWFAwtAESmwcej1%2BNgHNjBjBIW1v1%2BR6hqWqm4WzCBBwrBxlzSFsMpTk8esNNKxRdd5ZqvbD10C0OH%2BJZZ66IL4p5Lr%2B53Tj3oURfs3Qb3j0ab2rLGhAyY4tL%2BMAlCwE7VsWW3LYoNvxT&X-Amz-Signature=7dc747bb27a305b4021e760bfc9501e4c63407bace77e642d67a8d572aa4fc09&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR76ZZG2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDpRO3dceghR%2BiH6oYoehWsdPNZVAF6mlJ%2Bu6cHlmXOMAiEAwoGXhN%2BzJdG9gOeKf2fpFuBgdYXzZltk2SQNWHUEvawq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO3zVrvRzBFT5cx9GSrcA646RRxb1mrLxuqduTgjLmC3ovQSMpt68baDhy%2BKADtFO%2BdYa8C3R%2Bvotl%2FuVCGk5OVOeIhtGU4ewIkOF48qTF5giwXgfbDROOVAZ3YIz9FcGtQgQfKPiKnis3Bcq3pzSBBdOeBR%2F7Dj09KKje%2FOykaFoWMWk79Zgqh0b8B63UJMy8wPOBnV3ZShvBO6Wy97v%2FMHazhCq7TRituUIXo82XYx76qY0sEe5HYih6Vlb%2BAqwfGU15OTfLJosmlqpqw1JtQ7nPkbTHHGWs3QoF4Ol9l1bPkWU6s6aeTcQJjuraw35J7sfbiV55eqCSd%2BDT4PtPyGCP1Qm7CHes6lYq7ppvC830rJNFUivCPsI%2FsFyWPSYk70sq5U0aAV2VvqX4ZtKZAWi7J4ejygwbo%2FwgFGr4GO9aLWlZpreC11lR88zEvnclxaKxqd%2FBjwyGIFWRsuOp4nUYl8hj%2B1n4I4njJ5OfOsKVWOQoWAZQA8Yt5I2mNisT%2F6FvxvYVFZuO3Pqn9cGZOQwt5dwc2FSd556ePh7rpr99qY48Xzv1iL%2FMt8V%2ByE4H%2Br64Rih09r0ovbZqFkLuxq%2By9GwerVme8FyvPWsFwWkTF%2Bdx1vwrc5SyAMDp7HsC23nYnb%2BCrbG5OgMIGVv70GOqUBMufON3KtIRPezNkPsDmBIpLIf4cWZBQDQb%2BdGYF4zXS3g23kK7oE%2Bbb8D47hkiWfx1K3qetzrShnHIdRWFAwtAESmwcej1%2BNgHNjBjBIW1v1%2BR6hqWqm4WzCBBwrBxlzSFsMpTk8esNNKxRdd5ZqvbD10C0OH%2BJZZ66IL4p5Lr%2B53Tj3oURfs3Qb3j0ab2rLGhAyY4tL%2BMAlCwE7VsWW3LYoNvxT&X-Amz-Signature=30a0b15e3d70c13ede9c1b5b26942c2beafe35c3020ad3e3b61010996612765e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR76ZZG2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDpRO3dceghR%2BiH6oYoehWsdPNZVAF6mlJ%2Bu6cHlmXOMAiEAwoGXhN%2BzJdG9gOeKf2fpFuBgdYXzZltk2SQNWHUEvawq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO3zVrvRzBFT5cx9GSrcA646RRxb1mrLxuqduTgjLmC3ovQSMpt68baDhy%2BKADtFO%2BdYa8C3R%2Bvotl%2FuVCGk5OVOeIhtGU4ewIkOF48qTF5giwXgfbDROOVAZ3YIz9FcGtQgQfKPiKnis3Bcq3pzSBBdOeBR%2F7Dj09KKje%2FOykaFoWMWk79Zgqh0b8B63UJMy8wPOBnV3ZShvBO6Wy97v%2FMHazhCq7TRituUIXo82XYx76qY0sEe5HYih6Vlb%2BAqwfGU15OTfLJosmlqpqw1JtQ7nPkbTHHGWs3QoF4Ol9l1bPkWU6s6aeTcQJjuraw35J7sfbiV55eqCSd%2BDT4PtPyGCP1Qm7CHes6lYq7ppvC830rJNFUivCPsI%2FsFyWPSYk70sq5U0aAV2VvqX4ZtKZAWi7J4ejygwbo%2FwgFGr4GO9aLWlZpreC11lR88zEvnclxaKxqd%2FBjwyGIFWRsuOp4nUYl8hj%2B1n4I4njJ5OfOsKVWOQoWAZQA8Yt5I2mNisT%2F6FvxvYVFZuO3Pqn9cGZOQwt5dwc2FSd556ePh7rpr99qY48Xzv1iL%2FMt8V%2ByE4H%2Br64Rih09r0ovbZqFkLuxq%2By9GwerVme8FyvPWsFwWkTF%2Bdx1vwrc5SyAMDp7HsC23nYnb%2BCrbG5OgMIGVv70GOqUBMufON3KtIRPezNkPsDmBIpLIf4cWZBQDQb%2BdGYF4zXS3g23kK7oE%2Bbb8D47hkiWfx1K3qetzrShnHIdRWFAwtAESmwcej1%2BNgHNjBjBIW1v1%2BR6hqWqm4WzCBBwrBxlzSFsMpTk8esNNKxRdd5ZqvbD10C0OH%2BJZZ66IL4p5Lr%2B53Tj3oURfs3Qb3j0ab2rLGhAyY4tL%2BMAlCwE7VsWW3LYoNvxT&X-Amz-Signature=f514401d66d6df76edd49e07ffb97e5dff266d15130972e2544d3075d7dab11b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR76ZZG2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDpRO3dceghR%2BiH6oYoehWsdPNZVAF6mlJ%2Bu6cHlmXOMAiEAwoGXhN%2BzJdG9gOeKf2fpFuBgdYXzZltk2SQNWHUEvawq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO3zVrvRzBFT5cx9GSrcA646RRxb1mrLxuqduTgjLmC3ovQSMpt68baDhy%2BKADtFO%2BdYa8C3R%2Bvotl%2FuVCGk5OVOeIhtGU4ewIkOF48qTF5giwXgfbDROOVAZ3YIz9FcGtQgQfKPiKnis3Bcq3pzSBBdOeBR%2F7Dj09KKje%2FOykaFoWMWk79Zgqh0b8B63UJMy8wPOBnV3ZShvBO6Wy97v%2FMHazhCq7TRituUIXo82XYx76qY0sEe5HYih6Vlb%2BAqwfGU15OTfLJosmlqpqw1JtQ7nPkbTHHGWs3QoF4Ol9l1bPkWU6s6aeTcQJjuraw35J7sfbiV55eqCSd%2BDT4PtPyGCP1Qm7CHes6lYq7ppvC830rJNFUivCPsI%2FsFyWPSYk70sq5U0aAV2VvqX4ZtKZAWi7J4ejygwbo%2FwgFGr4GO9aLWlZpreC11lR88zEvnclxaKxqd%2FBjwyGIFWRsuOp4nUYl8hj%2B1n4I4njJ5OfOsKVWOQoWAZQA8Yt5I2mNisT%2F6FvxvYVFZuO3Pqn9cGZOQwt5dwc2FSd556ePh7rpr99qY48Xzv1iL%2FMt8V%2ByE4H%2Br64Rih09r0ovbZqFkLuxq%2By9GwerVme8FyvPWsFwWkTF%2Bdx1vwrc5SyAMDp7HsC23nYnb%2BCrbG5OgMIGVv70GOqUBMufON3KtIRPezNkPsDmBIpLIf4cWZBQDQb%2BdGYF4zXS3g23kK7oE%2Bbb8D47hkiWfx1K3qetzrShnHIdRWFAwtAESmwcej1%2BNgHNjBjBIW1v1%2BR6hqWqm4WzCBBwrBxlzSFsMpTk8esNNKxRdd5ZqvbD10C0OH%2BJZZ66IL4p5Lr%2B53Tj3oURfs3Qb3j0ab2rLGhAyY4tL%2BMAlCwE7VsWW3LYoNvxT&X-Amz-Signature=0e9e537504f82aba72d3edea29be8008c70f9513510346362218cf746b90aa83&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR76ZZG2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDpRO3dceghR%2BiH6oYoehWsdPNZVAF6mlJ%2Bu6cHlmXOMAiEAwoGXhN%2BzJdG9gOeKf2fpFuBgdYXzZltk2SQNWHUEvawq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO3zVrvRzBFT5cx9GSrcA646RRxb1mrLxuqduTgjLmC3ovQSMpt68baDhy%2BKADtFO%2BdYa8C3R%2Bvotl%2FuVCGk5OVOeIhtGU4ewIkOF48qTF5giwXgfbDROOVAZ3YIz9FcGtQgQfKPiKnis3Bcq3pzSBBdOeBR%2F7Dj09KKje%2FOykaFoWMWk79Zgqh0b8B63UJMy8wPOBnV3ZShvBO6Wy97v%2FMHazhCq7TRituUIXo82XYx76qY0sEe5HYih6Vlb%2BAqwfGU15OTfLJosmlqpqw1JtQ7nPkbTHHGWs3QoF4Ol9l1bPkWU6s6aeTcQJjuraw35J7sfbiV55eqCSd%2BDT4PtPyGCP1Qm7CHes6lYq7ppvC830rJNFUivCPsI%2FsFyWPSYk70sq5U0aAV2VvqX4ZtKZAWi7J4ejygwbo%2FwgFGr4GO9aLWlZpreC11lR88zEvnclxaKxqd%2FBjwyGIFWRsuOp4nUYl8hj%2B1n4I4njJ5OfOsKVWOQoWAZQA8Yt5I2mNisT%2F6FvxvYVFZuO3Pqn9cGZOQwt5dwc2FSd556ePh7rpr99qY48Xzv1iL%2FMt8V%2ByE4H%2Br64Rih09r0ovbZqFkLuxq%2By9GwerVme8FyvPWsFwWkTF%2Bdx1vwrc5SyAMDp7HsC23nYnb%2BCrbG5OgMIGVv70GOqUBMufON3KtIRPezNkPsDmBIpLIf4cWZBQDQb%2BdGYF4zXS3g23kK7oE%2Bbb8D47hkiWfx1K3qetzrShnHIdRWFAwtAESmwcej1%2BNgHNjBjBIW1v1%2BR6hqWqm4WzCBBwrBxlzSFsMpTk8esNNKxRdd5ZqvbD10C0OH%2BJZZ66IL4p5Lr%2B53Tj3oURfs3Qb3j0ab2rLGhAyY4tL%2BMAlCwE7VsWW3LYoNvxT&X-Amz-Signature=536404988cd2c80a45a27a17be3565277dcdb1a3ff566b9429406cb0a0c99859&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
