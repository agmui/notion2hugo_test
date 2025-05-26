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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663LPQPL7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYoJjIHWyoZ2N5LQKB6JclPFMNc77ZjaDYWWETVRdrkQIhAKnyY%2BtTO%2FJb835fF36zSQjRcRWBvnEge5K%2BKirI2Y%2BmKv8DCEkQABoMNjM3NDIzMTgzODA1IgxrLKGxjMCvWohuEekq3APZQw69DUCbVFGaJwrpHVjnJD3uMm1hFTe0tRdl%2B2QL9VP9cOPuAEKX%2FB%2FV%2BfY%2BTkGITUQzM1jueyLCCK89itBsegteZwCQv3o5ylkXIlEj6%2B1NxSr9vS4BLpgszWqHPmdQUuwmTWGEtr4VtZrqGe5%2BEkCFAR9eHyjKYEg4pVoZo8Xf%2FJiSNYv9UrnYcZsajU2AOQFZcrc9G%2B%2FR1Y3vZ0xFoLKbxqoRheqSw7Fgc79cudNV01TKVzw%2BQ%2BzI%2FZJkcWd5ehRu6HxegQzeEtcM3r6FwXat6bwo815jkSfzkK7d99Z1R1vstPUxuiw9DTbpImUIqI0HovgSHfUd4ao8OymS88mU3E29ufUI0gNsN66KP%2BmVU7uyDFxa2pFCU%2BemIMNU1AaRo2CEjc3h1wSM6a8n%2Brs6wmOCcFUaOhzkOPip%2ByfweHPvAEONbxc8WRnY1tQA6B%2BgqvvT98QH%2B2AG39XBEI%2BpQeXtPhxoBNM2I00oIlMpwxzlVUV7ry1dmO0Igs3dyOT6%2BtMH5bjbpbfgQLPwtMG6k7%2BO7cTFWqaXJH7hROWUZjXfMIyiQ6KQfQaXGTC7g4qEFBMdbfaTdjKUwWNDJesBnHfZVRa1KuIeHoVuJPKMUuvaSflTYrW0ETC7ktLBBjqkAVGnXEfl%2FMpUAqUlr1tSZufMim9UO7SdVR4W48H9YZA3Nkl4W67D3awHu0ZXIUIH1Ye9sGHz89byxDWD0u93SmFcOkOXh%2FbyiGpL0YrFLMOxK%2FUyYxWKuhGoys3%2F3sIGj25nCt33Qz6PgPGj5SYdgPMtuYDpAcSDRZV1n%2Fkwa89yPspuRM5RgWdHD6EF4Q3symvvm%2B1h08TWaFl9a3YhNDIKCj6f&X-Amz-Signature=c1ca04f1911dbb9738c898a4af974edb753e14a223c520746a10ce70d20e05a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663LPQPL7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYoJjIHWyoZ2N5LQKB6JclPFMNc77ZjaDYWWETVRdrkQIhAKnyY%2BtTO%2FJb835fF36zSQjRcRWBvnEge5K%2BKirI2Y%2BmKv8DCEkQABoMNjM3NDIzMTgzODA1IgxrLKGxjMCvWohuEekq3APZQw69DUCbVFGaJwrpHVjnJD3uMm1hFTe0tRdl%2B2QL9VP9cOPuAEKX%2FB%2FV%2BfY%2BTkGITUQzM1jueyLCCK89itBsegteZwCQv3o5ylkXIlEj6%2B1NxSr9vS4BLpgszWqHPmdQUuwmTWGEtr4VtZrqGe5%2BEkCFAR9eHyjKYEg4pVoZo8Xf%2FJiSNYv9UrnYcZsajU2AOQFZcrc9G%2B%2FR1Y3vZ0xFoLKbxqoRheqSw7Fgc79cudNV01TKVzw%2BQ%2BzI%2FZJkcWd5ehRu6HxegQzeEtcM3r6FwXat6bwo815jkSfzkK7d99Z1R1vstPUxuiw9DTbpImUIqI0HovgSHfUd4ao8OymS88mU3E29ufUI0gNsN66KP%2BmVU7uyDFxa2pFCU%2BemIMNU1AaRo2CEjc3h1wSM6a8n%2Brs6wmOCcFUaOhzkOPip%2ByfweHPvAEONbxc8WRnY1tQA6B%2BgqvvT98QH%2B2AG39XBEI%2BpQeXtPhxoBNM2I00oIlMpwxzlVUV7ry1dmO0Igs3dyOT6%2BtMH5bjbpbfgQLPwtMG6k7%2BO7cTFWqaXJH7hROWUZjXfMIyiQ6KQfQaXGTC7g4qEFBMdbfaTdjKUwWNDJesBnHfZVRa1KuIeHoVuJPKMUuvaSflTYrW0ETC7ktLBBjqkAVGnXEfl%2FMpUAqUlr1tSZufMim9UO7SdVR4W48H9YZA3Nkl4W67D3awHu0ZXIUIH1Ye9sGHz89byxDWD0u93SmFcOkOXh%2FbyiGpL0YrFLMOxK%2FUyYxWKuhGoys3%2F3sIGj25nCt33Qz6PgPGj5SYdgPMtuYDpAcSDRZV1n%2Fkwa89yPspuRM5RgWdHD6EF4Q3symvvm%2B1h08TWaFl9a3YhNDIKCj6f&X-Amz-Signature=6fad3021e920d598d72745e607d2b04bf8fc0f8c31c2ce095ec1608ebf42f5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663LPQPL7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYoJjIHWyoZ2N5LQKB6JclPFMNc77ZjaDYWWETVRdrkQIhAKnyY%2BtTO%2FJb835fF36zSQjRcRWBvnEge5K%2BKirI2Y%2BmKv8DCEkQABoMNjM3NDIzMTgzODA1IgxrLKGxjMCvWohuEekq3APZQw69DUCbVFGaJwrpHVjnJD3uMm1hFTe0tRdl%2B2QL9VP9cOPuAEKX%2FB%2FV%2BfY%2BTkGITUQzM1jueyLCCK89itBsegteZwCQv3o5ylkXIlEj6%2B1NxSr9vS4BLpgszWqHPmdQUuwmTWGEtr4VtZrqGe5%2BEkCFAR9eHyjKYEg4pVoZo8Xf%2FJiSNYv9UrnYcZsajU2AOQFZcrc9G%2B%2FR1Y3vZ0xFoLKbxqoRheqSw7Fgc79cudNV01TKVzw%2BQ%2BzI%2FZJkcWd5ehRu6HxegQzeEtcM3r6FwXat6bwo815jkSfzkK7d99Z1R1vstPUxuiw9DTbpImUIqI0HovgSHfUd4ao8OymS88mU3E29ufUI0gNsN66KP%2BmVU7uyDFxa2pFCU%2BemIMNU1AaRo2CEjc3h1wSM6a8n%2Brs6wmOCcFUaOhzkOPip%2ByfweHPvAEONbxc8WRnY1tQA6B%2BgqvvT98QH%2B2AG39XBEI%2BpQeXtPhxoBNM2I00oIlMpwxzlVUV7ry1dmO0Igs3dyOT6%2BtMH5bjbpbfgQLPwtMG6k7%2BO7cTFWqaXJH7hROWUZjXfMIyiQ6KQfQaXGTC7g4qEFBMdbfaTdjKUwWNDJesBnHfZVRa1KuIeHoVuJPKMUuvaSflTYrW0ETC7ktLBBjqkAVGnXEfl%2FMpUAqUlr1tSZufMim9UO7SdVR4W48H9YZA3Nkl4W67D3awHu0ZXIUIH1Ye9sGHz89byxDWD0u93SmFcOkOXh%2FbyiGpL0YrFLMOxK%2FUyYxWKuhGoys3%2F3sIGj25nCt33Qz6PgPGj5SYdgPMtuYDpAcSDRZV1n%2Fkwa89yPspuRM5RgWdHD6EF4Q3symvvm%2B1h08TWaFl9a3YhNDIKCj6f&X-Amz-Signature=e30b0362b2f8e0ed3d50196e6f7c234a113883f172a3cd748595e4db988a6984&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663LPQPL7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYoJjIHWyoZ2N5LQKB6JclPFMNc77ZjaDYWWETVRdrkQIhAKnyY%2BtTO%2FJb835fF36zSQjRcRWBvnEge5K%2BKirI2Y%2BmKv8DCEkQABoMNjM3NDIzMTgzODA1IgxrLKGxjMCvWohuEekq3APZQw69DUCbVFGaJwrpHVjnJD3uMm1hFTe0tRdl%2B2QL9VP9cOPuAEKX%2FB%2FV%2BfY%2BTkGITUQzM1jueyLCCK89itBsegteZwCQv3o5ylkXIlEj6%2B1NxSr9vS4BLpgszWqHPmdQUuwmTWGEtr4VtZrqGe5%2BEkCFAR9eHyjKYEg4pVoZo8Xf%2FJiSNYv9UrnYcZsajU2AOQFZcrc9G%2B%2FR1Y3vZ0xFoLKbxqoRheqSw7Fgc79cudNV01TKVzw%2BQ%2BzI%2FZJkcWd5ehRu6HxegQzeEtcM3r6FwXat6bwo815jkSfzkK7d99Z1R1vstPUxuiw9DTbpImUIqI0HovgSHfUd4ao8OymS88mU3E29ufUI0gNsN66KP%2BmVU7uyDFxa2pFCU%2BemIMNU1AaRo2CEjc3h1wSM6a8n%2Brs6wmOCcFUaOhzkOPip%2ByfweHPvAEONbxc8WRnY1tQA6B%2BgqvvT98QH%2B2AG39XBEI%2BpQeXtPhxoBNM2I00oIlMpwxzlVUV7ry1dmO0Igs3dyOT6%2BtMH5bjbpbfgQLPwtMG6k7%2BO7cTFWqaXJH7hROWUZjXfMIyiQ6KQfQaXGTC7g4qEFBMdbfaTdjKUwWNDJesBnHfZVRa1KuIeHoVuJPKMUuvaSflTYrW0ETC7ktLBBjqkAVGnXEfl%2FMpUAqUlr1tSZufMim9UO7SdVR4W48H9YZA3Nkl4W67D3awHu0ZXIUIH1Ye9sGHz89byxDWD0u93SmFcOkOXh%2FbyiGpL0YrFLMOxK%2FUyYxWKuhGoys3%2F3sIGj25nCt33Qz6PgPGj5SYdgPMtuYDpAcSDRZV1n%2Fkwa89yPspuRM5RgWdHD6EF4Q3symvvm%2B1h08TWaFl9a3YhNDIKCj6f&X-Amz-Signature=17cd60410d36073bdd213d82286c8c88fdfccd814c978c0bd9af74b63f3f9dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663LPQPL7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYoJjIHWyoZ2N5LQKB6JclPFMNc77ZjaDYWWETVRdrkQIhAKnyY%2BtTO%2FJb835fF36zSQjRcRWBvnEge5K%2BKirI2Y%2BmKv8DCEkQABoMNjM3NDIzMTgzODA1IgxrLKGxjMCvWohuEekq3APZQw69DUCbVFGaJwrpHVjnJD3uMm1hFTe0tRdl%2B2QL9VP9cOPuAEKX%2FB%2FV%2BfY%2BTkGITUQzM1jueyLCCK89itBsegteZwCQv3o5ylkXIlEj6%2B1NxSr9vS4BLpgszWqHPmdQUuwmTWGEtr4VtZrqGe5%2BEkCFAR9eHyjKYEg4pVoZo8Xf%2FJiSNYv9UrnYcZsajU2AOQFZcrc9G%2B%2FR1Y3vZ0xFoLKbxqoRheqSw7Fgc79cudNV01TKVzw%2BQ%2BzI%2FZJkcWd5ehRu6HxegQzeEtcM3r6FwXat6bwo815jkSfzkK7d99Z1R1vstPUxuiw9DTbpImUIqI0HovgSHfUd4ao8OymS88mU3E29ufUI0gNsN66KP%2BmVU7uyDFxa2pFCU%2BemIMNU1AaRo2CEjc3h1wSM6a8n%2Brs6wmOCcFUaOhzkOPip%2ByfweHPvAEONbxc8WRnY1tQA6B%2BgqvvT98QH%2B2AG39XBEI%2BpQeXtPhxoBNM2I00oIlMpwxzlVUV7ry1dmO0Igs3dyOT6%2BtMH5bjbpbfgQLPwtMG6k7%2BO7cTFWqaXJH7hROWUZjXfMIyiQ6KQfQaXGTC7g4qEFBMdbfaTdjKUwWNDJesBnHfZVRa1KuIeHoVuJPKMUuvaSflTYrW0ETC7ktLBBjqkAVGnXEfl%2FMpUAqUlr1tSZufMim9UO7SdVR4W48H9YZA3Nkl4W67D3awHu0ZXIUIH1Ye9sGHz89byxDWD0u93SmFcOkOXh%2FbyiGpL0YrFLMOxK%2FUyYxWKuhGoys3%2F3sIGj25nCt33Qz6PgPGj5SYdgPMtuYDpAcSDRZV1n%2Fkwa89yPspuRM5RgWdHD6EF4Q3symvvm%2B1h08TWaFl9a3YhNDIKCj6f&X-Amz-Signature=7d5b913a749f1306cae63594614445aeed1cf09338c7b10f41359dc7c95bc0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663LPQPL7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYoJjIHWyoZ2N5LQKB6JclPFMNc77ZjaDYWWETVRdrkQIhAKnyY%2BtTO%2FJb835fF36zSQjRcRWBvnEge5K%2BKirI2Y%2BmKv8DCEkQABoMNjM3NDIzMTgzODA1IgxrLKGxjMCvWohuEekq3APZQw69DUCbVFGaJwrpHVjnJD3uMm1hFTe0tRdl%2B2QL9VP9cOPuAEKX%2FB%2FV%2BfY%2BTkGITUQzM1jueyLCCK89itBsegteZwCQv3o5ylkXIlEj6%2B1NxSr9vS4BLpgszWqHPmdQUuwmTWGEtr4VtZrqGe5%2BEkCFAR9eHyjKYEg4pVoZo8Xf%2FJiSNYv9UrnYcZsajU2AOQFZcrc9G%2B%2FR1Y3vZ0xFoLKbxqoRheqSw7Fgc79cudNV01TKVzw%2BQ%2BzI%2FZJkcWd5ehRu6HxegQzeEtcM3r6FwXat6bwo815jkSfzkK7d99Z1R1vstPUxuiw9DTbpImUIqI0HovgSHfUd4ao8OymS88mU3E29ufUI0gNsN66KP%2BmVU7uyDFxa2pFCU%2BemIMNU1AaRo2CEjc3h1wSM6a8n%2Brs6wmOCcFUaOhzkOPip%2ByfweHPvAEONbxc8WRnY1tQA6B%2BgqvvT98QH%2B2AG39XBEI%2BpQeXtPhxoBNM2I00oIlMpwxzlVUV7ry1dmO0Igs3dyOT6%2BtMH5bjbpbfgQLPwtMG6k7%2BO7cTFWqaXJH7hROWUZjXfMIyiQ6KQfQaXGTC7g4qEFBMdbfaTdjKUwWNDJesBnHfZVRa1KuIeHoVuJPKMUuvaSflTYrW0ETC7ktLBBjqkAVGnXEfl%2FMpUAqUlr1tSZufMim9UO7SdVR4W48H9YZA3Nkl4W67D3awHu0ZXIUIH1Ye9sGHz89byxDWD0u93SmFcOkOXh%2FbyiGpL0YrFLMOxK%2FUyYxWKuhGoys3%2F3sIGj25nCt33Qz6PgPGj5SYdgPMtuYDpAcSDRZV1n%2Fkwa89yPspuRM5RgWdHD6EF4Q3symvvm%2B1h08TWaFl9a3YhNDIKCj6f&X-Amz-Signature=54e0c15610468b774d6e62137e3e38cfac4668bbf63691694c57b10ad931628b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663LPQPL7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYoJjIHWyoZ2N5LQKB6JclPFMNc77ZjaDYWWETVRdrkQIhAKnyY%2BtTO%2FJb835fF36zSQjRcRWBvnEge5K%2BKirI2Y%2BmKv8DCEkQABoMNjM3NDIzMTgzODA1IgxrLKGxjMCvWohuEekq3APZQw69DUCbVFGaJwrpHVjnJD3uMm1hFTe0tRdl%2B2QL9VP9cOPuAEKX%2FB%2FV%2BfY%2BTkGITUQzM1jueyLCCK89itBsegteZwCQv3o5ylkXIlEj6%2B1NxSr9vS4BLpgszWqHPmdQUuwmTWGEtr4VtZrqGe5%2BEkCFAR9eHyjKYEg4pVoZo8Xf%2FJiSNYv9UrnYcZsajU2AOQFZcrc9G%2B%2FR1Y3vZ0xFoLKbxqoRheqSw7Fgc79cudNV01TKVzw%2BQ%2BzI%2FZJkcWd5ehRu6HxegQzeEtcM3r6FwXat6bwo815jkSfzkK7d99Z1R1vstPUxuiw9DTbpImUIqI0HovgSHfUd4ao8OymS88mU3E29ufUI0gNsN66KP%2BmVU7uyDFxa2pFCU%2BemIMNU1AaRo2CEjc3h1wSM6a8n%2Brs6wmOCcFUaOhzkOPip%2ByfweHPvAEONbxc8WRnY1tQA6B%2BgqvvT98QH%2B2AG39XBEI%2BpQeXtPhxoBNM2I00oIlMpwxzlVUV7ry1dmO0Igs3dyOT6%2BtMH5bjbpbfgQLPwtMG6k7%2BO7cTFWqaXJH7hROWUZjXfMIyiQ6KQfQaXGTC7g4qEFBMdbfaTdjKUwWNDJesBnHfZVRa1KuIeHoVuJPKMUuvaSflTYrW0ETC7ktLBBjqkAVGnXEfl%2FMpUAqUlr1tSZufMim9UO7SdVR4W48H9YZA3Nkl4W67D3awHu0ZXIUIH1Ye9sGHz89byxDWD0u93SmFcOkOXh%2FbyiGpL0YrFLMOxK%2FUyYxWKuhGoys3%2F3sIGj25nCt33Qz6PgPGj5SYdgPMtuYDpAcSDRZV1n%2Fkwa89yPspuRM5RgWdHD6EF4Q3symvvm%2B1h08TWaFl9a3YhNDIKCj6f&X-Amz-Signature=014d8ce49f6cc81ea686eb1a0ea553c2299dbf3ef086f1b2e75803901bf5d154&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
