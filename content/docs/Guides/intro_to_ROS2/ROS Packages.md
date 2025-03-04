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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=861fbf4bc0ba966f7eca9065b6327920cdf9d5d9eba7233beefe0074121bf2ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=5e44b3f4dc93e6fc5bf59e5cb789b2b4fa9e69751c2b7e7db00ea53eedcd1097&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=3b948500cf59fe0daf124a67b4b0a76db1664cc14f56182918575d309d1b9732&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=2d271be1dbe5db043f9b80f4b9484823eb093e860db3a005b924778a3043ca9a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=44f3be3bb0b4d8598ae7cd41c312036a4850ebf5e51759491fb5d8e6fa2019e0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=081cd25acd1182fb8acc6f326206153605dc32dd2914183c1435b27f7d892620&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=44b12f6fb396ddc8671ad30c64d859498a3703546ec3b422cc5e0df1c0ca0b15&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
