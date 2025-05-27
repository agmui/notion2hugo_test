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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2WGQPG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtgQWT5pho8SVKIsxbLu9Gv%2FbJ%2FTRzSZc%2BMkOA9oRFgAiEA9hiyjKsn289lb7byRFdidGrVQ1BBn1BKg3R%2FaTunKf0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHf8Xc%2FNXAvzI4HwAyrcAwFMnAJSL4Kn5kb1U0cInU3W1JomJ45vhROarz3yknG7GgzcrdTLUvRZ62xifuaLpVVyfxMsoEtZVQfC%2F1x%2FjWO5spPO1yraIsHcV24cSvx2Ebbc2GB0jmqXKfKwUbGi1HC2NMY0v78GEwSZh9X6bG6dm9DcERQwwea7UAPo3WuZDZeAJElawdedaK%2BMyWoTd0NxRagP1axOIMvZN7GeQfITyHEjUmnquNw08pc3IMwJleM9o7cmGZP8pFfpyxrOlGKmsP5oM1rrqbFDunX6l5n91euMIUZ2GixfK1c3tytP36Tf87IcZgC%2BvPUy0f8j1q9y3Y1RW0mX2FnIacOIeZYsUR3SHcwkNt1F5%2Fx5NMgqK6fhiApG20dDjYvdZLEcCOcBLOQmt75xPG4MRcYA4vInr4yAsk3RveMTq0maSpHviUVyWyVPpdlWS1%2FMrdXDt5ZTn1iJnIvPc%2Be4%2BE6bijeeC8R5WiYeAL%2FQQTbFzXGK%2FvHiMJnL1vS%2FcQk8DTigfeuyFOnXuUY8JkbB7ny6lPHX37O0xiCAKal5qx8VNMvjDE%2FGw83UmZTooGXCxMzrV3ITEJDN1zfWjGTiy3dl8f2qyzaVek8GJ93%2BsizEiAMjfCocvmhg0L2M%2BlQBMI601cEGOqUBz%2BaJegrCYemrgjlyjt%2F%2F3I1dMEtQLChISWalLkFLpps76UfuqzRYiznc0pCMwQ7axbeOWcD1EgW0Jp%2FO4rZwMRVCo9kZfQ8TZVMtrgg5FfNBBtxjRPvSEKCUV8FL6trIDFEd1aCgNauslRfWI9Qpn3vY0YtWAnbH%2B%2BAU7PgthnR5H01snc3OgO6MEiUSy%2Bg2ef8SI%2FWNxKD1kxoijThy2HrdMWt0&X-Amz-Signature=afbb26a73f8f96e862699f227b3d1f58996461fcc5448dc726288d39572fa985&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2WGQPG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtgQWT5pho8SVKIsxbLu9Gv%2FbJ%2FTRzSZc%2BMkOA9oRFgAiEA9hiyjKsn289lb7byRFdidGrVQ1BBn1BKg3R%2FaTunKf0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHf8Xc%2FNXAvzI4HwAyrcAwFMnAJSL4Kn5kb1U0cInU3W1JomJ45vhROarz3yknG7GgzcrdTLUvRZ62xifuaLpVVyfxMsoEtZVQfC%2F1x%2FjWO5spPO1yraIsHcV24cSvx2Ebbc2GB0jmqXKfKwUbGi1HC2NMY0v78GEwSZh9X6bG6dm9DcERQwwea7UAPo3WuZDZeAJElawdedaK%2BMyWoTd0NxRagP1axOIMvZN7GeQfITyHEjUmnquNw08pc3IMwJleM9o7cmGZP8pFfpyxrOlGKmsP5oM1rrqbFDunX6l5n91euMIUZ2GixfK1c3tytP36Tf87IcZgC%2BvPUy0f8j1q9y3Y1RW0mX2FnIacOIeZYsUR3SHcwkNt1F5%2Fx5NMgqK6fhiApG20dDjYvdZLEcCOcBLOQmt75xPG4MRcYA4vInr4yAsk3RveMTq0maSpHviUVyWyVPpdlWS1%2FMrdXDt5ZTn1iJnIvPc%2Be4%2BE6bijeeC8R5WiYeAL%2FQQTbFzXGK%2FvHiMJnL1vS%2FcQk8DTigfeuyFOnXuUY8JkbB7ny6lPHX37O0xiCAKal5qx8VNMvjDE%2FGw83UmZTooGXCxMzrV3ITEJDN1zfWjGTiy3dl8f2qyzaVek8GJ93%2BsizEiAMjfCocvmhg0L2M%2BlQBMI601cEGOqUBz%2BaJegrCYemrgjlyjt%2F%2F3I1dMEtQLChISWalLkFLpps76UfuqzRYiznc0pCMwQ7axbeOWcD1EgW0Jp%2FO4rZwMRVCo9kZfQ8TZVMtrgg5FfNBBtxjRPvSEKCUV8FL6trIDFEd1aCgNauslRfWI9Qpn3vY0YtWAnbH%2B%2BAU7PgthnR5H01snc3OgO6MEiUSy%2Bg2ef8SI%2FWNxKD1kxoijThy2HrdMWt0&X-Amz-Signature=4b325f710a1463d0685fe0fae5a5ef6a4aa21edd16736d73cddd2a057dd18fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2WGQPG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtgQWT5pho8SVKIsxbLu9Gv%2FbJ%2FTRzSZc%2BMkOA9oRFgAiEA9hiyjKsn289lb7byRFdidGrVQ1BBn1BKg3R%2FaTunKf0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHf8Xc%2FNXAvzI4HwAyrcAwFMnAJSL4Kn5kb1U0cInU3W1JomJ45vhROarz3yknG7GgzcrdTLUvRZ62xifuaLpVVyfxMsoEtZVQfC%2F1x%2FjWO5spPO1yraIsHcV24cSvx2Ebbc2GB0jmqXKfKwUbGi1HC2NMY0v78GEwSZh9X6bG6dm9DcERQwwea7UAPo3WuZDZeAJElawdedaK%2BMyWoTd0NxRagP1axOIMvZN7GeQfITyHEjUmnquNw08pc3IMwJleM9o7cmGZP8pFfpyxrOlGKmsP5oM1rrqbFDunX6l5n91euMIUZ2GixfK1c3tytP36Tf87IcZgC%2BvPUy0f8j1q9y3Y1RW0mX2FnIacOIeZYsUR3SHcwkNt1F5%2Fx5NMgqK6fhiApG20dDjYvdZLEcCOcBLOQmt75xPG4MRcYA4vInr4yAsk3RveMTq0maSpHviUVyWyVPpdlWS1%2FMrdXDt5ZTn1iJnIvPc%2Be4%2BE6bijeeC8R5WiYeAL%2FQQTbFzXGK%2FvHiMJnL1vS%2FcQk8DTigfeuyFOnXuUY8JkbB7ny6lPHX37O0xiCAKal5qx8VNMvjDE%2FGw83UmZTooGXCxMzrV3ITEJDN1zfWjGTiy3dl8f2qyzaVek8GJ93%2BsizEiAMjfCocvmhg0L2M%2BlQBMI601cEGOqUBz%2BaJegrCYemrgjlyjt%2F%2F3I1dMEtQLChISWalLkFLpps76UfuqzRYiznc0pCMwQ7axbeOWcD1EgW0Jp%2FO4rZwMRVCo9kZfQ8TZVMtrgg5FfNBBtxjRPvSEKCUV8FL6trIDFEd1aCgNauslRfWI9Qpn3vY0YtWAnbH%2B%2BAU7PgthnR5H01snc3OgO6MEiUSy%2Bg2ef8SI%2FWNxKD1kxoijThy2HrdMWt0&X-Amz-Signature=abf2562034cddf1aafab44c249d612d9901e1dc5972158f6407d482af25089de&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2WGQPG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtgQWT5pho8SVKIsxbLu9Gv%2FbJ%2FTRzSZc%2BMkOA9oRFgAiEA9hiyjKsn289lb7byRFdidGrVQ1BBn1BKg3R%2FaTunKf0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHf8Xc%2FNXAvzI4HwAyrcAwFMnAJSL4Kn5kb1U0cInU3W1JomJ45vhROarz3yknG7GgzcrdTLUvRZ62xifuaLpVVyfxMsoEtZVQfC%2F1x%2FjWO5spPO1yraIsHcV24cSvx2Ebbc2GB0jmqXKfKwUbGi1HC2NMY0v78GEwSZh9X6bG6dm9DcERQwwea7UAPo3WuZDZeAJElawdedaK%2BMyWoTd0NxRagP1axOIMvZN7GeQfITyHEjUmnquNw08pc3IMwJleM9o7cmGZP8pFfpyxrOlGKmsP5oM1rrqbFDunX6l5n91euMIUZ2GixfK1c3tytP36Tf87IcZgC%2BvPUy0f8j1q9y3Y1RW0mX2FnIacOIeZYsUR3SHcwkNt1F5%2Fx5NMgqK6fhiApG20dDjYvdZLEcCOcBLOQmt75xPG4MRcYA4vInr4yAsk3RveMTq0maSpHviUVyWyVPpdlWS1%2FMrdXDt5ZTn1iJnIvPc%2Be4%2BE6bijeeC8R5WiYeAL%2FQQTbFzXGK%2FvHiMJnL1vS%2FcQk8DTigfeuyFOnXuUY8JkbB7ny6lPHX37O0xiCAKal5qx8VNMvjDE%2FGw83UmZTooGXCxMzrV3ITEJDN1zfWjGTiy3dl8f2qyzaVek8GJ93%2BsizEiAMjfCocvmhg0L2M%2BlQBMI601cEGOqUBz%2BaJegrCYemrgjlyjt%2F%2F3I1dMEtQLChISWalLkFLpps76UfuqzRYiznc0pCMwQ7axbeOWcD1EgW0Jp%2FO4rZwMRVCo9kZfQ8TZVMtrgg5FfNBBtxjRPvSEKCUV8FL6trIDFEd1aCgNauslRfWI9Qpn3vY0YtWAnbH%2B%2BAU7PgthnR5H01snc3OgO6MEiUSy%2Bg2ef8SI%2FWNxKD1kxoijThy2HrdMWt0&X-Amz-Signature=8625d563a67fcffdfaad6a53d3e5f08281b0ac953648eca40d40f780e8424c22&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2WGQPG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtgQWT5pho8SVKIsxbLu9Gv%2FbJ%2FTRzSZc%2BMkOA9oRFgAiEA9hiyjKsn289lb7byRFdidGrVQ1BBn1BKg3R%2FaTunKf0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHf8Xc%2FNXAvzI4HwAyrcAwFMnAJSL4Kn5kb1U0cInU3W1JomJ45vhROarz3yknG7GgzcrdTLUvRZ62xifuaLpVVyfxMsoEtZVQfC%2F1x%2FjWO5spPO1yraIsHcV24cSvx2Ebbc2GB0jmqXKfKwUbGi1HC2NMY0v78GEwSZh9X6bG6dm9DcERQwwea7UAPo3WuZDZeAJElawdedaK%2BMyWoTd0NxRagP1axOIMvZN7GeQfITyHEjUmnquNw08pc3IMwJleM9o7cmGZP8pFfpyxrOlGKmsP5oM1rrqbFDunX6l5n91euMIUZ2GixfK1c3tytP36Tf87IcZgC%2BvPUy0f8j1q9y3Y1RW0mX2FnIacOIeZYsUR3SHcwkNt1F5%2Fx5NMgqK6fhiApG20dDjYvdZLEcCOcBLOQmt75xPG4MRcYA4vInr4yAsk3RveMTq0maSpHviUVyWyVPpdlWS1%2FMrdXDt5ZTn1iJnIvPc%2Be4%2BE6bijeeC8R5WiYeAL%2FQQTbFzXGK%2FvHiMJnL1vS%2FcQk8DTigfeuyFOnXuUY8JkbB7ny6lPHX37O0xiCAKal5qx8VNMvjDE%2FGw83UmZTooGXCxMzrV3ITEJDN1zfWjGTiy3dl8f2qyzaVek8GJ93%2BsizEiAMjfCocvmhg0L2M%2BlQBMI601cEGOqUBz%2BaJegrCYemrgjlyjt%2F%2F3I1dMEtQLChISWalLkFLpps76UfuqzRYiznc0pCMwQ7axbeOWcD1EgW0Jp%2FO4rZwMRVCo9kZfQ8TZVMtrgg5FfNBBtxjRPvSEKCUV8FL6trIDFEd1aCgNauslRfWI9Qpn3vY0YtWAnbH%2B%2BAU7PgthnR5H01snc3OgO6MEiUSy%2Bg2ef8SI%2FWNxKD1kxoijThy2HrdMWt0&X-Amz-Signature=f38ccb54352b16498b56e6db7116c3da0335478ea463baf29f374e424288f773&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2WGQPG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtgQWT5pho8SVKIsxbLu9Gv%2FbJ%2FTRzSZc%2BMkOA9oRFgAiEA9hiyjKsn289lb7byRFdidGrVQ1BBn1BKg3R%2FaTunKf0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHf8Xc%2FNXAvzI4HwAyrcAwFMnAJSL4Kn5kb1U0cInU3W1JomJ45vhROarz3yknG7GgzcrdTLUvRZ62xifuaLpVVyfxMsoEtZVQfC%2F1x%2FjWO5spPO1yraIsHcV24cSvx2Ebbc2GB0jmqXKfKwUbGi1HC2NMY0v78GEwSZh9X6bG6dm9DcERQwwea7UAPo3WuZDZeAJElawdedaK%2BMyWoTd0NxRagP1axOIMvZN7GeQfITyHEjUmnquNw08pc3IMwJleM9o7cmGZP8pFfpyxrOlGKmsP5oM1rrqbFDunX6l5n91euMIUZ2GixfK1c3tytP36Tf87IcZgC%2BvPUy0f8j1q9y3Y1RW0mX2FnIacOIeZYsUR3SHcwkNt1F5%2Fx5NMgqK6fhiApG20dDjYvdZLEcCOcBLOQmt75xPG4MRcYA4vInr4yAsk3RveMTq0maSpHviUVyWyVPpdlWS1%2FMrdXDt5ZTn1iJnIvPc%2Be4%2BE6bijeeC8R5WiYeAL%2FQQTbFzXGK%2FvHiMJnL1vS%2FcQk8DTigfeuyFOnXuUY8JkbB7ny6lPHX37O0xiCAKal5qx8VNMvjDE%2FGw83UmZTooGXCxMzrV3ITEJDN1zfWjGTiy3dl8f2qyzaVek8GJ93%2BsizEiAMjfCocvmhg0L2M%2BlQBMI601cEGOqUBz%2BaJegrCYemrgjlyjt%2F%2F3I1dMEtQLChISWalLkFLpps76UfuqzRYiznc0pCMwQ7axbeOWcD1EgW0Jp%2FO4rZwMRVCo9kZfQ8TZVMtrgg5FfNBBtxjRPvSEKCUV8FL6trIDFEd1aCgNauslRfWI9Qpn3vY0YtWAnbH%2B%2BAU7PgthnR5H01snc3OgO6MEiUSy%2Bg2ef8SI%2FWNxKD1kxoijThy2HrdMWt0&X-Amz-Signature=ed1d3d9845831cc739d0bbd2a1c05f4cb2457c5894c38576e881a44592adc474&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2WGQPG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtgQWT5pho8SVKIsxbLu9Gv%2FbJ%2FTRzSZc%2BMkOA9oRFgAiEA9hiyjKsn289lb7byRFdidGrVQ1BBn1BKg3R%2FaTunKf0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHf8Xc%2FNXAvzI4HwAyrcAwFMnAJSL4Kn5kb1U0cInU3W1JomJ45vhROarz3yknG7GgzcrdTLUvRZ62xifuaLpVVyfxMsoEtZVQfC%2F1x%2FjWO5spPO1yraIsHcV24cSvx2Ebbc2GB0jmqXKfKwUbGi1HC2NMY0v78GEwSZh9X6bG6dm9DcERQwwea7UAPo3WuZDZeAJElawdedaK%2BMyWoTd0NxRagP1axOIMvZN7GeQfITyHEjUmnquNw08pc3IMwJleM9o7cmGZP8pFfpyxrOlGKmsP5oM1rrqbFDunX6l5n91euMIUZ2GixfK1c3tytP36Tf87IcZgC%2BvPUy0f8j1q9y3Y1RW0mX2FnIacOIeZYsUR3SHcwkNt1F5%2Fx5NMgqK6fhiApG20dDjYvdZLEcCOcBLOQmt75xPG4MRcYA4vInr4yAsk3RveMTq0maSpHviUVyWyVPpdlWS1%2FMrdXDt5ZTn1iJnIvPc%2Be4%2BE6bijeeC8R5WiYeAL%2FQQTbFzXGK%2FvHiMJnL1vS%2FcQk8DTigfeuyFOnXuUY8JkbB7ny6lPHX37O0xiCAKal5qx8VNMvjDE%2FGw83UmZTooGXCxMzrV3ITEJDN1zfWjGTiy3dl8f2qyzaVek8GJ93%2BsizEiAMjfCocvmhg0L2M%2BlQBMI601cEGOqUBz%2BaJegrCYemrgjlyjt%2F%2F3I1dMEtQLChISWalLkFLpps76UfuqzRYiznc0pCMwQ7axbeOWcD1EgW0Jp%2FO4rZwMRVCo9kZfQ8TZVMtrgg5FfNBBtxjRPvSEKCUV8FL6trIDFEd1aCgNauslRfWI9Qpn3vY0YtWAnbH%2B%2BAU7PgthnR5H01snc3OgO6MEiUSy%2Bg2ef8SI%2FWNxKD1kxoijThy2HrdMWt0&X-Amz-Signature=38f71397035ba378c5d166a9ea06f6909b4148b2d0fb5ac25fdcd2eec1f8c029&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
