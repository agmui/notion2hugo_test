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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLGIALM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5la0400aPhmUKG3wLedvccCVBmWzY1VHQI54e0o2KmAiEAwmSH%2FO0iP9vKuxGjLQDx%2FVIbMpG4rg7iYna%2FKauhEloq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPz%2FIwOjw1kPQtOBiSrcAwj6c2iXpeVGJYZWP3Tw32RUbsADdKGecAD3UjpqnNu3Cd5r3DsOg4v%2Bz2PBbJjrWt6Jzx77pafNu4%2BGhFK2is6fjXaLuVAb0U2LHFod6qgaUbDMG5ixII5dM5CyoXAb4ji3cwH5SCIlKLdAvOMJSBTJl2x4yvmoD7xAnZPe0pVyM0%2BGUTwClNpfZOQ1dnR2x8unbTMRToNjpQ%2F1U%2FbCALTseQhxh8XWEG%2F5BT0kP1kBbuh3ROd9JW%2BNkVreUlZzgyYI%2F682Xk0Wub4YG21PekVqL0xyDvH7LbXksJlGvE7ttLk%2BG0wxj3jLc2ra7pnY9GQIOQo1%2FdT8QpaGoRI3tKkg6YCfgl5eYpG6b5%2BDcErXvRcWjnDDOkw5mw3yjvyYGu01As%2BQPrLxn%2BwZkzg0hEdRDk8D9rJ%2FItgKC0bRhFDPO1MmmRYAkWoeKJObgPX0agKpq%2BC4jGf0B2rcBl%2FxZA8ewA%2FHZnQeO2jD%2FoqfYLMXz4swAvs%2Bfn%2F6%2F3%2FLHznnssHojinVT7K2vtAuxWiZ%2FN1aRuUgA%2BFlazdrtDYJ6emNFD3YDZg46RMN0Z0tzlQMmOnEC1nJeoR%2BDBJ4%2BN1uFl4IzzuEexpVdamEh0Hxl8eoA96z3%2FVjmNbsoqH0MJiE0r8GOqUBPxZai%2BqymqLUpDDpqAYzNLEBy1LmDl7gJC12hnv7EhUQCw10x8p2PDzsxj6t6UmJTZTOF3fzX%2FyfDBLqci08SbRKxiJhowXCQjgkbLHjJEbrsL20ZJ%2FRq%2BBdVfDwfupxpHPEbZEPGRi1hTju%2BSQxfhBOQ%2FszE1hnL7pIoLSkqcAoKBPfbJlGDUypFaaChY390s9G12GIWbVD534B0Cxh%2FNo5UwD%2B&X-Amz-Signature=d6b9ab351571074a8dd440f2555865871e6bb5b562c82f2cc89e81f0aa6f60a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLGIALM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5la0400aPhmUKG3wLedvccCVBmWzY1VHQI54e0o2KmAiEAwmSH%2FO0iP9vKuxGjLQDx%2FVIbMpG4rg7iYna%2FKauhEloq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPz%2FIwOjw1kPQtOBiSrcAwj6c2iXpeVGJYZWP3Tw32RUbsADdKGecAD3UjpqnNu3Cd5r3DsOg4v%2Bz2PBbJjrWt6Jzx77pafNu4%2BGhFK2is6fjXaLuVAb0U2LHFod6qgaUbDMG5ixII5dM5CyoXAb4ji3cwH5SCIlKLdAvOMJSBTJl2x4yvmoD7xAnZPe0pVyM0%2BGUTwClNpfZOQ1dnR2x8unbTMRToNjpQ%2F1U%2FbCALTseQhxh8XWEG%2F5BT0kP1kBbuh3ROd9JW%2BNkVreUlZzgyYI%2F682Xk0Wub4YG21PekVqL0xyDvH7LbXksJlGvE7ttLk%2BG0wxj3jLc2ra7pnY9GQIOQo1%2FdT8QpaGoRI3tKkg6YCfgl5eYpG6b5%2BDcErXvRcWjnDDOkw5mw3yjvyYGu01As%2BQPrLxn%2BwZkzg0hEdRDk8D9rJ%2FItgKC0bRhFDPO1MmmRYAkWoeKJObgPX0agKpq%2BC4jGf0B2rcBl%2FxZA8ewA%2FHZnQeO2jD%2FoqfYLMXz4swAvs%2Bfn%2F6%2F3%2FLHznnssHojinVT7K2vtAuxWiZ%2FN1aRuUgA%2BFlazdrtDYJ6emNFD3YDZg46RMN0Z0tzlQMmOnEC1nJeoR%2BDBJ4%2BN1uFl4IzzuEexpVdamEh0Hxl8eoA96z3%2FVjmNbsoqH0MJiE0r8GOqUBPxZai%2BqymqLUpDDpqAYzNLEBy1LmDl7gJC12hnv7EhUQCw10x8p2PDzsxj6t6UmJTZTOF3fzX%2FyfDBLqci08SbRKxiJhowXCQjgkbLHjJEbrsL20ZJ%2FRq%2BBdVfDwfupxpHPEbZEPGRi1hTju%2BSQxfhBOQ%2FszE1hnL7pIoLSkqcAoKBPfbJlGDUypFaaChY390s9G12GIWbVD534B0Cxh%2FNo5UwD%2B&X-Amz-Signature=32a17125a9bf43a701096cfecc45be35d7381bd0a4ad5bacb945fdf16770ded8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLGIALM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5la0400aPhmUKG3wLedvccCVBmWzY1VHQI54e0o2KmAiEAwmSH%2FO0iP9vKuxGjLQDx%2FVIbMpG4rg7iYna%2FKauhEloq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPz%2FIwOjw1kPQtOBiSrcAwj6c2iXpeVGJYZWP3Tw32RUbsADdKGecAD3UjpqnNu3Cd5r3DsOg4v%2Bz2PBbJjrWt6Jzx77pafNu4%2BGhFK2is6fjXaLuVAb0U2LHFod6qgaUbDMG5ixII5dM5CyoXAb4ji3cwH5SCIlKLdAvOMJSBTJl2x4yvmoD7xAnZPe0pVyM0%2BGUTwClNpfZOQ1dnR2x8unbTMRToNjpQ%2F1U%2FbCALTseQhxh8XWEG%2F5BT0kP1kBbuh3ROd9JW%2BNkVreUlZzgyYI%2F682Xk0Wub4YG21PekVqL0xyDvH7LbXksJlGvE7ttLk%2BG0wxj3jLc2ra7pnY9GQIOQo1%2FdT8QpaGoRI3tKkg6YCfgl5eYpG6b5%2BDcErXvRcWjnDDOkw5mw3yjvyYGu01As%2BQPrLxn%2BwZkzg0hEdRDk8D9rJ%2FItgKC0bRhFDPO1MmmRYAkWoeKJObgPX0agKpq%2BC4jGf0B2rcBl%2FxZA8ewA%2FHZnQeO2jD%2FoqfYLMXz4swAvs%2Bfn%2F6%2F3%2FLHznnssHojinVT7K2vtAuxWiZ%2FN1aRuUgA%2BFlazdrtDYJ6emNFD3YDZg46RMN0Z0tzlQMmOnEC1nJeoR%2BDBJ4%2BN1uFl4IzzuEexpVdamEh0Hxl8eoA96z3%2FVjmNbsoqH0MJiE0r8GOqUBPxZai%2BqymqLUpDDpqAYzNLEBy1LmDl7gJC12hnv7EhUQCw10x8p2PDzsxj6t6UmJTZTOF3fzX%2FyfDBLqci08SbRKxiJhowXCQjgkbLHjJEbrsL20ZJ%2FRq%2BBdVfDwfupxpHPEbZEPGRi1hTju%2BSQxfhBOQ%2FszE1hnL7pIoLSkqcAoKBPfbJlGDUypFaaChY390s9G12GIWbVD534B0Cxh%2FNo5UwD%2B&X-Amz-Signature=380d974567e2feebe01da4e5da8992bb4b1c868b410c9b8ed3a3d277b71374bf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLGIALM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5la0400aPhmUKG3wLedvccCVBmWzY1VHQI54e0o2KmAiEAwmSH%2FO0iP9vKuxGjLQDx%2FVIbMpG4rg7iYna%2FKauhEloq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPz%2FIwOjw1kPQtOBiSrcAwj6c2iXpeVGJYZWP3Tw32RUbsADdKGecAD3UjpqnNu3Cd5r3DsOg4v%2Bz2PBbJjrWt6Jzx77pafNu4%2BGhFK2is6fjXaLuVAb0U2LHFod6qgaUbDMG5ixII5dM5CyoXAb4ji3cwH5SCIlKLdAvOMJSBTJl2x4yvmoD7xAnZPe0pVyM0%2BGUTwClNpfZOQ1dnR2x8unbTMRToNjpQ%2F1U%2FbCALTseQhxh8XWEG%2F5BT0kP1kBbuh3ROd9JW%2BNkVreUlZzgyYI%2F682Xk0Wub4YG21PekVqL0xyDvH7LbXksJlGvE7ttLk%2BG0wxj3jLc2ra7pnY9GQIOQo1%2FdT8QpaGoRI3tKkg6YCfgl5eYpG6b5%2BDcErXvRcWjnDDOkw5mw3yjvyYGu01As%2BQPrLxn%2BwZkzg0hEdRDk8D9rJ%2FItgKC0bRhFDPO1MmmRYAkWoeKJObgPX0agKpq%2BC4jGf0B2rcBl%2FxZA8ewA%2FHZnQeO2jD%2FoqfYLMXz4swAvs%2Bfn%2F6%2F3%2FLHznnssHojinVT7K2vtAuxWiZ%2FN1aRuUgA%2BFlazdrtDYJ6emNFD3YDZg46RMN0Z0tzlQMmOnEC1nJeoR%2BDBJ4%2BN1uFl4IzzuEexpVdamEh0Hxl8eoA96z3%2FVjmNbsoqH0MJiE0r8GOqUBPxZai%2BqymqLUpDDpqAYzNLEBy1LmDl7gJC12hnv7EhUQCw10x8p2PDzsxj6t6UmJTZTOF3fzX%2FyfDBLqci08SbRKxiJhowXCQjgkbLHjJEbrsL20ZJ%2FRq%2BBdVfDwfupxpHPEbZEPGRi1hTju%2BSQxfhBOQ%2FszE1hnL7pIoLSkqcAoKBPfbJlGDUypFaaChY390s9G12GIWbVD534B0Cxh%2FNo5UwD%2B&X-Amz-Signature=6709693edf5fe9d3cad89fd65326dbe9aa7e5b58d4034eaaf1bcc838d325d070&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLGIALM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5la0400aPhmUKG3wLedvccCVBmWzY1VHQI54e0o2KmAiEAwmSH%2FO0iP9vKuxGjLQDx%2FVIbMpG4rg7iYna%2FKauhEloq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPz%2FIwOjw1kPQtOBiSrcAwj6c2iXpeVGJYZWP3Tw32RUbsADdKGecAD3UjpqnNu3Cd5r3DsOg4v%2Bz2PBbJjrWt6Jzx77pafNu4%2BGhFK2is6fjXaLuVAb0U2LHFod6qgaUbDMG5ixII5dM5CyoXAb4ji3cwH5SCIlKLdAvOMJSBTJl2x4yvmoD7xAnZPe0pVyM0%2BGUTwClNpfZOQ1dnR2x8unbTMRToNjpQ%2F1U%2FbCALTseQhxh8XWEG%2F5BT0kP1kBbuh3ROd9JW%2BNkVreUlZzgyYI%2F682Xk0Wub4YG21PekVqL0xyDvH7LbXksJlGvE7ttLk%2BG0wxj3jLc2ra7pnY9GQIOQo1%2FdT8QpaGoRI3tKkg6YCfgl5eYpG6b5%2BDcErXvRcWjnDDOkw5mw3yjvyYGu01As%2BQPrLxn%2BwZkzg0hEdRDk8D9rJ%2FItgKC0bRhFDPO1MmmRYAkWoeKJObgPX0agKpq%2BC4jGf0B2rcBl%2FxZA8ewA%2FHZnQeO2jD%2FoqfYLMXz4swAvs%2Bfn%2F6%2F3%2FLHznnssHojinVT7K2vtAuxWiZ%2FN1aRuUgA%2BFlazdrtDYJ6emNFD3YDZg46RMN0Z0tzlQMmOnEC1nJeoR%2BDBJ4%2BN1uFl4IzzuEexpVdamEh0Hxl8eoA96z3%2FVjmNbsoqH0MJiE0r8GOqUBPxZai%2BqymqLUpDDpqAYzNLEBy1LmDl7gJC12hnv7EhUQCw10x8p2PDzsxj6t6UmJTZTOF3fzX%2FyfDBLqci08SbRKxiJhowXCQjgkbLHjJEbrsL20ZJ%2FRq%2BBdVfDwfupxpHPEbZEPGRi1hTju%2BSQxfhBOQ%2FszE1hnL7pIoLSkqcAoKBPfbJlGDUypFaaChY390s9G12GIWbVD534B0Cxh%2FNo5UwD%2B&X-Amz-Signature=bed03f8ffd89d820976144b25fd4990a76bc416efe81636a679821c8d310a90d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLGIALM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5la0400aPhmUKG3wLedvccCVBmWzY1VHQI54e0o2KmAiEAwmSH%2FO0iP9vKuxGjLQDx%2FVIbMpG4rg7iYna%2FKauhEloq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPz%2FIwOjw1kPQtOBiSrcAwj6c2iXpeVGJYZWP3Tw32RUbsADdKGecAD3UjpqnNu3Cd5r3DsOg4v%2Bz2PBbJjrWt6Jzx77pafNu4%2BGhFK2is6fjXaLuVAb0U2LHFod6qgaUbDMG5ixII5dM5CyoXAb4ji3cwH5SCIlKLdAvOMJSBTJl2x4yvmoD7xAnZPe0pVyM0%2BGUTwClNpfZOQ1dnR2x8unbTMRToNjpQ%2F1U%2FbCALTseQhxh8XWEG%2F5BT0kP1kBbuh3ROd9JW%2BNkVreUlZzgyYI%2F682Xk0Wub4YG21PekVqL0xyDvH7LbXksJlGvE7ttLk%2BG0wxj3jLc2ra7pnY9GQIOQo1%2FdT8QpaGoRI3tKkg6YCfgl5eYpG6b5%2BDcErXvRcWjnDDOkw5mw3yjvyYGu01As%2BQPrLxn%2BwZkzg0hEdRDk8D9rJ%2FItgKC0bRhFDPO1MmmRYAkWoeKJObgPX0agKpq%2BC4jGf0B2rcBl%2FxZA8ewA%2FHZnQeO2jD%2FoqfYLMXz4swAvs%2Bfn%2F6%2F3%2FLHznnssHojinVT7K2vtAuxWiZ%2FN1aRuUgA%2BFlazdrtDYJ6emNFD3YDZg46RMN0Z0tzlQMmOnEC1nJeoR%2BDBJ4%2BN1uFl4IzzuEexpVdamEh0Hxl8eoA96z3%2FVjmNbsoqH0MJiE0r8GOqUBPxZai%2BqymqLUpDDpqAYzNLEBy1LmDl7gJC12hnv7EhUQCw10x8p2PDzsxj6t6UmJTZTOF3fzX%2FyfDBLqci08SbRKxiJhowXCQjgkbLHjJEbrsL20ZJ%2FRq%2BBdVfDwfupxpHPEbZEPGRi1hTju%2BSQxfhBOQ%2FszE1hnL7pIoLSkqcAoKBPfbJlGDUypFaaChY390s9G12GIWbVD534B0Cxh%2FNo5UwD%2B&X-Amz-Signature=f22618479cc27bcefcf38f8878c746e38839dece8c1bbf19148cf849b0f73c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLGIALM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5la0400aPhmUKG3wLedvccCVBmWzY1VHQI54e0o2KmAiEAwmSH%2FO0iP9vKuxGjLQDx%2FVIbMpG4rg7iYna%2FKauhEloq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPz%2FIwOjw1kPQtOBiSrcAwj6c2iXpeVGJYZWP3Tw32RUbsADdKGecAD3UjpqnNu3Cd5r3DsOg4v%2Bz2PBbJjrWt6Jzx77pafNu4%2BGhFK2is6fjXaLuVAb0U2LHFod6qgaUbDMG5ixII5dM5CyoXAb4ji3cwH5SCIlKLdAvOMJSBTJl2x4yvmoD7xAnZPe0pVyM0%2BGUTwClNpfZOQ1dnR2x8unbTMRToNjpQ%2F1U%2FbCALTseQhxh8XWEG%2F5BT0kP1kBbuh3ROd9JW%2BNkVreUlZzgyYI%2F682Xk0Wub4YG21PekVqL0xyDvH7LbXksJlGvE7ttLk%2BG0wxj3jLc2ra7pnY9GQIOQo1%2FdT8QpaGoRI3tKkg6YCfgl5eYpG6b5%2BDcErXvRcWjnDDOkw5mw3yjvyYGu01As%2BQPrLxn%2BwZkzg0hEdRDk8D9rJ%2FItgKC0bRhFDPO1MmmRYAkWoeKJObgPX0agKpq%2BC4jGf0B2rcBl%2FxZA8ewA%2FHZnQeO2jD%2FoqfYLMXz4swAvs%2Bfn%2F6%2F3%2FLHznnssHojinVT7K2vtAuxWiZ%2FN1aRuUgA%2BFlazdrtDYJ6emNFD3YDZg46RMN0Z0tzlQMmOnEC1nJeoR%2BDBJ4%2BN1uFl4IzzuEexpVdamEh0Hxl8eoA96z3%2FVjmNbsoqH0MJiE0r8GOqUBPxZai%2BqymqLUpDDpqAYzNLEBy1LmDl7gJC12hnv7EhUQCw10x8p2PDzsxj6t6UmJTZTOF3fzX%2FyfDBLqci08SbRKxiJhowXCQjgkbLHjJEbrsL20ZJ%2FRq%2BBdVfDwfupxpHPEbZEPGRi1hTju%2BSQxfhBOQ%2FszE1hnL7pIoLSkqcAoKBPfbJlGDUypFaaChY390s9G12GIWbVD534B0Cxh%2FNo5UwD%2B&X-Amz-Signature=b7fd7e0689ea53c48210e3b9084b792456ad7b0f1a0bdca921585f378ac2ace8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
