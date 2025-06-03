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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL5U4DA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAMDfqfYNhCW0aSYTuFhjORzEPnpMwAmQ8hf9M2ZO1PXAiEA7fqHH99hDBQK5oGvunHEGXg1bLO4e1PnZK6TRoiPposqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUa3t7MEP7F9nltKSrcA9KhwNuznsp6KjxnrXqSsRuIJnxEfZektKjYrmdbX9WGbgaSkSGFnSOXq5q9e3q%2B91T%2FixhoS9AaBJMbsRzd7SnTBrira%2F1oqv0STNUyvhOo9AcEIgDt34yBn78njcZhqTbS0xyn9bfxQEPs4OsACK6o69b55u6ilrsTU7zCFvWHwFX14C1Dl6%2BPtwHsm97xURrmQtj1QU6C6DASpmJOemppxXmjoO0PkDbLXnPjo6FMk50%2BiSE2Ut%2FBWwuGNorBN%2F41Kjj3tHH0cG1yHT%2F8HQtaPO6m2gCvNj2ANGCDi8ap2v%2F%2FIAEKTD1UUz%2FNaleKlJ72rv8EJDkj8BV3aRFMgNWrHWgxJOm9czIiP%2FJIkL7Pu1B%2B9V6tE3D%2B2%2FnmoE5gPcbiet58ByOz6PGz7J6Yk9xWCT%2ByKfs1MFlgYCTwF91PwSQboldF8wW1uaGCsMwj%2FabKz9BJoWjpQg5SUXChn4mErA9wlx73NWRNz2WXZ%2F0dA72PVGqP3AYNILoq5BbXdY8mfSdDJBjJDQiwv%2BG2wmNPEb3p5yXU5Ot6d6ztJM1tvFVjpnOqX9lbSQmSBAA%2Buxuvy3GE7cO133nCjI8Wcv5el2R5ICHcAd3NmPvOt9N7EBb9Z4TEZ5k9ErdKMK%2Ft%2BcEGOqUBRljzYqm534SI2es%2F2QwBYmv55iU7knFTRW2%2FWANzt9PfEgJ3dImv%2B7JXnCJCmEta2JmpYLEKE4zTpsXFwAYbCiAgo0hbz%2Bxb7gL5iQbgQ9fX%2B08ifQLEftI%2Bc%2BJJG%2BHswxBmIxxHbF7WkCng%2FUf1xuVdVs2x%2FghAnKUy8HzTfLW6aGLFTwNXA6nOxtx1N9WBYQ8x7uiMkKc4f7S1pXjtuiZXDTuw&X-Amz-Signature=8fc61ff1303757a0c20d2906f3d9b039babbf0b84cfb9a7468d77ac4975e9844&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL5U4DA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAMDfqfYNhCW0aSYTuFhjORzEPnpMwAmQ8hf9M2ZO1PXAiEA7fqHH99hDBQK5oGvunHEGXg1bLO4e1PnZK6TRoiPposqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUa3t7MEP7F9nltKSrcA9KhwNuznsp6KjxnrXqSsRuIJnxEfZektKjYrmdbX9WGbgaSkSGFnSOXq5q9e3q%2B91T%2FixhoS9AaBJMbsRzd7SnTBrira%2F1oqv0STNUyvhOo9AcEIgDt34yBn78njcZhqTbS0xyn9bfxQEPs4OsACK6o69b55u6ilrsTU7zCFvWHwFX14C1Dl6%2BPtwHsm97xURrmQtj1QU6C6DASpmJOemppxXmjoO0PkDbLXnPjo6FMk50%2BiSE2Ut%2FBWwuGNorBN%2F41Kjj3tHH0cG1yHT%2F8HQtaPO6m2gCvNj2ANGCDi8ap2v%2F%2FIAEKTD1UUz%2FNaleKlJ72rv8EJDkj8BV3aRFMgNWrHWgxJOm9czIiP%2FJIkL7Pu1B%2B9V6tE3D%2B2%2FnmoE5gPcbiet58ByOz6PGz7J6Yk9xWCT%2ByKfs1MFlgYCTwF91PwSQboldF8wW1uaGCsMwj%2FabKz9BJoWjpQg5SUXChn4mErA9wlx73NWRNz2WXZ%2F0dA72PVGqP3AYNILoq5BbXdY8mfSdDJBjJDQiwv%2BG2wmNPEb3p5yXU5Ot6d6ztJM1tvFVjpnOqX9lbSQmSBAA%2Buxuvy3GE7cO133nCjI8Wcv5el2R5ICHcAd3NmPvOt9N7EBb9Z4TEZ5k9ErdKMK%2Ft%2BcEGOqUBRljzYqm534SI2es%2F2QwBYmv55iU7knFTRW2%2FWANzt9PfEgJ3dImv%2B7JXnCJCmEta2JmpYLEKE4zTpsXFwAYbCiAgo0hbz%2Bxb7gL5iQbgQ9fX%2B08ifQLEftI%2Bc%2BJJG%2BHswxBmIxxHbF7WkCng%2FUf1xuVdVs2x%2FghAnKUy8HzTfLW6aGLFTwNXA6nOxtx1N9WBYQ8x7uiMkKc4f7S1pXjtuiZXDTuw&X-Amz-Signature=2f89d41da3b71805e2acd79b3ca77b279df60cbdb856ba8aec9a68d5635b105e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL5U4DA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAMDfqfYNhCW0aSYTuFhjORzEPnpMwAmQ8hf9M2ZO1PXAiEA7fqHH99hDBQK5oGvunHEGXg1bLO4e1PnZK6TRoiPposqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUa3t7MEP7F9nltKSrcA9KhwNuznsp6KjxnrXqSsRuIJnxEfZektKjYrmdbX9WGbgaSkSGFnSOXq5q9e3q%2B91T%2FixhoS9AaBJMbsRzd7SnTBrira%2F1oqv0STNUyvhOo9AcEIgDt34yBn78njcZhqTbS0xyn9bfxQEPs4OsACK6o69b55u6ilrsTU7zCFvWHwFX14C1Dl6%2BPtwHsm97xURrmQtj1QU6C6DASpmJOemppxXmjoO0PkDbLXnPjo6FMk50%2BiSE2Ut%2FBWwuGNorBN%2F41Kjj3tHH0cG1yHT%2F8HQtaPO6m2gCvNj2ANGCDi8ap2v%2F%2FIAEKTD1UUz%2FNaleKlJ72rv8EJDkj8BV3aRFMgNWrHWgxJOm9czIiP%2FJIkL7Pu1B%2B9V6tE3D%2B2%2FnmoE5gPcbiet58ByOz6PGz7J6Yk9xWCT%2ByKfs1MFlgYCTwF91PwSQboldF8wW1uaGCsMwj%2FabKz9BJoWjpQg5SUXChn4mErA9wlx73NWRNz2WXZ%2F0dA72PVGqP3AYNILoq5BbXdY8mfSdDJBjJDQiwv%2BG2wmNPEb3p5yXU5Ot6d6ztJM1tvFVjpnOqX9lbSQmSBAA%2Buxuvy3GE7cO133nCjI8Wcv5el2R5ICHcAd3NmPvOt9N7EBb9Z4TEZ5k9ErdKMK%2Ft%2BcEGOqUBRljzYqm534SI2es%2F2QwBYmv55iU7knFTRW2%2FWANzt9PfEgJ3dImv%2B7JXnCJCmEta2JmpYLEKE4zTpsXFwAYbCiAgo0hbz%2Bxb7gL5iQbgQ9fX%2B08ifQLEftI%2Bc%2BJJG%2BHswxBmIxxHbF7WkCng%2FUf1xuVdVs2x%2FghAnKUy8HzTfLW6aGLFTwNXA6nOxtx1N9WBYQ8x7uiMkKc4f7S1pXjtuiZXDTuw&X-Amz-Signature=64f3862853d93c74ecd9809c8ce0c4adf8a0b2fba13f23398978e7831f8a0d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL5U4DA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAMDfqfYNhCW0aSYTuFhjORzEPnpMwAmQ8hf9M2ZO1PXAiEA7fqHH99hDBQK5oGvunHEGXg1bLO4e1PnZK6TRoiPposqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUa3t7MEP7F9nltKSrcA9KhwNuznsp6KjxnrXqSsRuIJnxEfZektKjYrmdbX9WGbgaSkSGFnSOXq5q9e3q%2B91T%2FixhoS9AaBJMbsRzd7SnTBrira%2F1oqv0STNUyvhOo9AcEIgDt34yBn78njcZhqTbS0xyn9bfxQEPs4OsACK6o69b55u6ilrsTU7zCFvWHwFX14C1Dl6%2BPtwHsm97xURrmQtj1QU6C6DASpmJOemppxXmjoO0PkDbLXnPjo6FMk50%2BiSE2Ut%2FBWwuGNorBN%2F41Kjj3tHH0cG1yHT%2F8HQtaPO6m2gCvNj2ANGCDi8ap2v%2F%2FIAEKTD1UUz%2FNaleKlJ72rv8EJDkj8BV3aRFMgNWrHWgxJOm9czIiP%2FJIkL7Pu1B%2B9V6tE3D%2B2%2FnmoE5gPcbiet58ByOz6PGz7J6Yk9xWCT%2ByKfs1MFlgYCTwF91PwSQboldF8wW1uaGCsMwj%2FabKz9BJoWjpQg5SUXChn4mErA9wlx73NWRNz2WXZ%2F0dA72PVGqP3AYNILoq5BbXdY8mfSdDJBjJDQiwv%2BG2wmNPEb3p5yXU5Ot6d6ztJM1tvFVjpnOqX9lbSQmSBAA%2Buxuvy3GE7cO133nCjI8Wcv5el2R5ICHcAd3NmPvOt9N7EBb9Z4TEZ5k9ErdKMK%2Ft%2BcEGOqUBRljzYqm534SI2es%2F2QwBYmv55iU7knFTRW2%2FWANzt9PfEgJ3dImv%2B7JXnCJCmEta2JmpYLEKE4zTpsXFwAYbCiAgo0hbz%2Bxb7gL5iQbgQ9fX%2B08ifQLEftI%2Bc%2BJJG%2BHswxBmIxxHbF7WkCng%2FUf1xuVdVs2x%2FghAnKUy8HzTfLW6aGLFTwNXA6nOxtx1N9WBYQ8x7uiMkKc4f7S1pXjtuiZXDTuw&X-Amz-Signature=8d4387f6def13f2dfb051712047ebca7f139ce724ba3c16cf37e1a0c738c927d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL5U4DA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAMDfqfYNhCW0aSYTuFhjORzEPnpMwAmQ8hf9M2ZO1PXAiEA7fqHH99hDBQK5oGvunHEGXg1bLO4e1PnZK6TRoiPposqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUa3t7MEP7F9nltKSrcA9KhwNuznsp6KjxnrXqSsRuIJnxEfZektKjYrmdbX9WGbgaSkSGFnSOXq5q9e3q%2B91T%2FixhoS9AaBJMbsRzd7SnTBrira%2F1oqv0STNUyvhOo9AcEIgDt34yBn78njcZhqTbS0xyn9bfxQEPs4OsACK6o69b55u6ilrsTU7zCFvWHwFX14C1Dl6%2BPtwHsm97xURrmQtj1QU6C6DASpmJOemppxXmjoO0PkDbLXnPjo6FMk50%2BiSE2Ut%2FBWwuGNorBN%2F41Kjj3tHH0cG1yHT%2F8HQtaPO6m2gCvNj2ANGCDi8ap2v%2F%2FIAEKTD1UUz%2FNaleKlJ72rv8EJDkj8BV3aRFMgNWrHWgxJOm9czIiP%2FJIkL7Pu1B%2B9V6tE3D%2B2%2FnmoE5gPcbiet58ByOz6PGz7J6Yk9xWCT%2ByKfs1MFlgYCTwF91PwSQboldF8wW1uaGCsMwj%2FabKz9BJoWjpQg5SUXChn4mErA9wlx73NWRNz2WXZ%2F0dA72PVGqP3AYNILoq5BbXdY8mfSdDJBjJDQiwv%2BG2wmNPEb3p5yXU5Ot6d6ztJM1tvFVjpnOqX9lbSQmSBAA%2Buxuvy3GE7cO133nCjI8Wcv5el2R5ICHcAd3NmPvOt9N7EBb9Z4TEZ5k9ErdKMK%2Ft%2BcEGOqUBRljzYqm534SI2es%2F2QwBYmv55iU7knFTRW2%2FWANzt9PfEgJ3dImv%2B7JXnCJCmEta2JmpYLEKE4zTpsXFwAYbCiAgo0hbz%2Bxb7gL5iQbgQ9fX%2B08ifQLEftI%2Bc%2BJJG%2BHswxBmIxxHbF7WkCng%2FUf1xuVdVs2x%2FghAnKUy8HzTfLW6aGLFTwNXA6nOxtx1N9WBYQ8x7uiMkKc4f7S1pXjtuiZXDTuw&X-Amz-Signature=8a35600158caa18744e03e161f618cc80075c55a7e4a7ff214bc852fe06ced64&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL5U4DA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAMDfqfYNhCW0aSYTuFhjORzEPnpMwAmQ8hf9M2ZO1PXAiEA7fqHH99hDBQK5oGvunHEGXg1bLO4e1PnZK6TRoiPposqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUa3t7MEP7F9nltKSrcA9KhwNuznsp6KjxnrXqSsRuIJnxEfZektKjYrmdbX9WGbgaSkSGFnSOXq5q9e3q%2B91T%2FixhoS9AaBJMbsRzd7SnTBrira%2F1oqv0STNUyvhOo9AcEIgDt34yBn78njcZhqTbS0xyn9bfxQEPs4OsACK6o69b55u6ilrsTU7zCFvWHwFX14C1Dl6%2BPtwHsm97xURrmQtj1QU6C6DASpmJOemppxXmjoO0PkDbLXnPjo6FMk50%2BiSE2Ut%2FBWwuGNorBN%2F41Kjj3tHH0cG1yHT%2F8HQtaPO6m2gCvNj2ANGCDi8ap2v%2F%2FIAEKTD1UUz%2FNaleKlJ72rv8EJDkj8BV3aRFMgNWrHWgxJOm9czIiP%2FJIkL7Pu1B%2B9V6tE3D%2B2%2FnmoE5gPcbiet58ByOz6PGz7J6Yk9xWCT%2ByKfs1MFlgYCTwF91PwSQboldF8wW1uaGCsMwj%2FabKz9BJoWjpQg5SUXChn4mErA9wlx73NWRNz2WXZ%2F0dA72PVGqP3AYNILoq5BbXdY8mfSdDJBjJDQiwv%2BG2wmNPEb3p5yXU5Ot6d6ztJM1tvFVjpnOqX9lbSQmSBAA%2Buxuvy3GE7cO133nCjI8Wcv5el2R5ICHcAd3NmPvOt9N7EBb9Z4TEZ5k9ErdKMK%2Ft%2BcEGOqUBRljzYqm534SI2es%2F2QwBYmv55iU7knFTRW2%2FWANzt9PfEgJ3dImv%2B7JXnCJCmEta2JmpYLEKE4zTpsXFwAYbCiAgo0hbz%2Bxb7gL5iQbgQ9fX%2B08ifQLEftI%2Bc%2BJJG%2BHswxBmIxxHbF7WkCng%2FUf1xuVdVs2x%2FghAnKUy8HzTfLW6aGLFTwNXA6nOxtx1N9WBYQ8x7uiMkKc4f7S1pXjtuiZXDTuw&X-Amz-Signature=b8b9c4f9da0da1bb0d669e27ea9a95ec35ddb44403788f91a86e816cece1b0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL5U4DA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAMDfqfYNhCW0aSYTuFhjORzEPnpMwAmQ8hf9M2ZO1PXAiEA7fqHH99hDBQK5oGvunHEGXg1bLO4e1PnZK6TRoiPposqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUa3t7MEP7F9nltKSrcA9KhwNuznsp6KjxnrXqSsRuIJnxEfZektKjYrmdbX9WGbgaSkSGFnSOXq5q9e3q%2B91T%2FixhoS9AaBJMbsRzd7SnTBrira%2F1oqv0STNUyvhOo9AcEIgDt34yBn78njcZhqTbS0xyn9bfxQEPs4OsACK6o69b55u6ilrsTU7zCFvWHwFX14C1Dl6%2BPtwHsm97xURrmQtj1QU6C6DASpmJOemppxXmjoO0PkDbLXnPjo6FMk50%2BiSE2Ut%2FBWwuGNorBN%2F41Kjj3tHH0cG1yHT%2F8HQtaPO6m2gCvNj2ANGCDi8ap2v%2F%2FIAEKTD1UUz%2FNaleKlJ72rv8EJDkj8BV3aRFMgNWrHWgxJOm9czIiP%2FJIkL7Pu1B%2B9V6tE3D%2B2%2FnmoE5gPcbiet58ByOz6PGz7J6Yk9xWCT%2ByKfs1MFlgYCTwF91PwSQboldF8wW1uaGCsMwj%2FabKz9BJoWjpQg5SUXChn4mErA9wlx73NWRNz2WXZ%2F0dA72PVGqP3AYNILoq5BbXdY8mfSdDJBjJDQiwv%2BG2wmNPEb3p5yXU5Ot6d6ztJM1tvFVjpnOqX9lbSQmSBAA%2Buxuvy3GE7cO133nCjI8Wcv5el2R5ICHcAd3NmPvOt9N7EBb9Z4TEZ5k9ErdKMK%2Ft%2BcEGOqUBRljzYqm534SI2es%2F2QwBYmv55iU7knFTRW2%2FWANzt9PfEgJ3dImv%2B7JXnCJCmEta2JmpYLEKE4zTpsXFwAYbCiAgo0hbz%2Bxb7gL5iQbgQ9fX%2B08ifQLEftI%2Bc%2BJJG%2BHswxBmIxxHbF7WkCng%2FUf1xuVdVs2x%2FghAnKUy8HzTfLW6aGLFTwNXA6nOxtx1N9WBYQ8x7uiMkKc4f7S1pXjtuiZXDTuw&X-Amz-Signature=eb3d9122ecd6b5e88fbd7ba2d50798e29b307878e8e90ea93f2f7e9d09e9aed6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
