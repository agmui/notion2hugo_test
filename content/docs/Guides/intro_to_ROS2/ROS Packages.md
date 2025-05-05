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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKLMNC2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOcXj8rgMOMpouQaYuEDOTOj1W2K6a5rfPLmHoiwE4FgIhAMZOjbbGMSTP12YuXcbcD1unCHSzh6Yutpp9DVSicUukKv8DCDAQABoMNjM3NDIzMTgzODA1IgxOWxAAAl4s%2Bz3bTsQq3AOnX%2BzKj99x2wMrbgECLGrfBYStyknb95aC5T%2BxGVLXdguzmEPdgDEtdiYHstRZODYmVlvCyNoyzTSWF2CNazc1s4r7Ha3QI5g2%2FfUL1exUckzrG2txjTU9krqab4LdHZMujXGDd2y%2B3GV51XF%2F8aPJZ4U%2BnJ1ftojaZwgRrt3xhBnLfS2dqAP10mk99EuJiWXZKVuJVt4PGVnAN2Z%2Fup8cOg43wRPfvrrGMkGOdnenCCaVzevbAa6xqIYVa3iWnxnKedPlacHl%2BnMh%2FX7J%2BTP%2B7IWVm6Oht5%2B6MBJ2KfY1BJp3i9Zh8Z5ZSxamqkGpNalOylnbq5wJh6BP14vj6oVBX7Hda%2FVYVTj4fHVZErA%2BctAUlCaBc3BpQDQHfyu%2F4o0rImyovqH9IGX7fnu5amteEaDYmPjwiq1%2BN2PLxTQVPPq0zrk8Ssgn3BHXtMWUiVLx64s4gHoToNCSRLP4u%2F8t3tGBGhysiG%2BxQvOP8KkFMgrpnMmwnowYiPKBmJMHoNmOKp9cN3SF%2F%2FfCOVQuyg11XY8O2FbfLO4ENPVA9Y3OPLZ5XFWKTwzlxv2OnXPDiS5raU4Rd9OpSZweFg1ITx33O6lYMyK90g3mX%2BdUcJW%2BCPvakcZhdNhfl3124zCcluPABjqkAcZGbDuqJVydbdH5QNgWnUNKztIeX%2B3XWMNJ2FqYJ8oeh3CY2%2BbGAOqlEX0QE2P0SiSPNcg4tBb7edzzQUBTCgyCUVJ5R8c8xfyeiN1Vg6NJRXmnEZJ6N0EBRcrTSAocQr48z1x106Yzb8Sy%2BqlJ%2FOhZbMUC8jfMSC8kf9eRFZdAj57xKW71pGFSUsKOJWTyF4G4xOFAM9FDWFF1RVe7n54%2F2O6X&X-Amz-Signature=7b3814452f63fc239697ab01eccf7f78daadb396e26c7d74f4a00430cb846c3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKLMNC2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOcXj8rgMOMpouQaYuEDOTOj1W2K6a5rfPLmHoiwE4FgIhAMZOjbbGMSTP12YuXcbcD1unCHSzh6Yutpp9DVSicUukKv8DCDAQABoMNjM3NDIzMTgzODA1IgxOWxAAAl4s%2Bz3bTsQq3AOnX%2BzKj99x2wMrbgECLGrfBYStyknb95aC5T%2BxGVLXdguzmEPdgDEtdiYHstRZODYmVlvCyNoyzTSWF2CNazc1s4r7Ha3QI5g2%2FfUL1exUckzrG2txjTU9krqab4LdHZMujXGDd2y%2B3GV51XF%2F8aPJZ4U%2BnJ1ftojaZwgRrt3xhBnLfS2dqAP10mk99EuJiWXZKVuJVt4PGVnAN2Z%2Fup8cOg43wRPfvrrGMkGOdnenCCaVzevbAa6xqIYVa3iWnxnKedPlacHl%2BnMh%2FX7J%2BTP%2B7IWVm6Oht5%2B6MBJ2KfY1BJp3i9Zh8Z5ZSxamqkGpNalOylnbq5wJh6BP14vj6oVBX7Hda%2FVYVTj4fHVZErA%2BctAUlCaBc3BpQDQHfyu%2F4o0rImyovqH9IGX7fnu5amteEaDYmPjwiq1%2BN2PLxTQVPPq0zrk8Ssgn3BHXtMWUiVLx64s4gHoToNCSRLP4u%2F8t3tGBGhysiG%2BxQvOP8KkFMgrpnMmwnowYiPKBmJMHoNmOKp9cN3SF%2F%2FfCOVQuyg11XY8O2FbfLO4ENPVA9Y3OPLZ5XFWKTwzlxv2OnXPDiS5raU4Rd9OpSZweFg1ITx33O6lYMyK90g3mX%2BdUcJW%2BCPvakcZhdNhfl3124zCcluPABjqkAcZGbDuqJVydbdH5QNgWnUNKztIeX%2B3XWMNJ2FqYJ8oeh3CY2%2BbGAOqlEX0QE2P0SiSPNcg4tBb7edzzQUBTCgyCUVJ5R8c8xfyeiN1Vg6NJRXmnEZJ6N0EBRcrTSAocQr48z1x106Yzb8Sy%2BqlJ%2FOhZbMUC8jfMSC8kf9eRFZdAj57xKW71pGFSUsKOJWTyF4G4xOFAM9FDWFF1RVe7n54%2F2O6X&X-Amz-Signature=a0b7f967ce1098b8cf9e5c019aadcca0ff76b2cf0dbb23f389b84aa812808463&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKLMNC2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOcXj8rgMOMpouQaYuEDOTOj1W2K6a5rfPLmHoiwE4FgIhAMZOjbbGMSTP12YuXcbcD1unCHSzh6Yutpp9DVSicUukKv8DCDAQABoMNjM3NDIzMTgzODA1IgxOWxAAAl4s%2Bz3bTsQq3AOnX%2BzKj99x2wMrbgECLGrfBYStyknb95aC5T%2BxGVLXdguzmEPdgDEtdiYHstRZODYmVlvCyNoyzTSWF2CNazc1s4r7Ha3QI5g2%2FfUL1exUckzrG2txjTU9krqab4LdHZMujXGDd2y%2B3GV51XF%2F8aPJZ4U%2BnJ1ftojaZwgRrt3xhBnLfS2dqAP10mk99EuJiWXZKVuJVt4PGVnAN2Z%2Fup8cOg43wRPfvrrGMkGOdnenCCaVzevbAa6xqIYVa3iWnxnKedPlacHl%2BnMh%2FX7J%2BTP%2B7IWVm6Oht5%2B6MBJ2KfY1BJp3i9Zh8Z5ZSxamqkGpNalOylnbq5wJh6BP14vj6oVBX7Hda%2FVYVTj4fHVZErA%2BctAUlCaBc3BpQDQHfyu%2F4o0rImyovqH9IGX7fnu5amteEaDYmPjwiq1%2BN2PLxTQVPPq0zrk8Ssgn3BHXtMWUiVLx64s4gHoToNCSRLP4u%2F8t3tGBGhysiG%2BxQvOP8KkFMgrpnMmwnowYiPKBmJMHoNmOKp9cN3SF%2F%2FfCOVQuyg11XY8O2FbfLO4ENPVA9Y3OPLZ5XFWKTwzlxv2OnXPDiS5raU4Rd9OpSZweFg1ITx33O6lYMyK90g3mX%2BdUcJW%2BCPvakcZhdNhfl3124zCcluPABjqkAcZGbDuqJVydbdH5QNgWnUNKztIeX%2B3XWMNJ2FqYJ8oeh3CY2%2BbGAOqlEX0QE2P0SiSPNcg4tBb7edzzQUBTCgyCUVJ5R8c8xfyeiN1Vg6NJRXmnEZJ6N0EBRcrTSAocQr48z1x106Yzb8Sy%2BqlJ%2FOhZbMUC8jfMSC8kf9eRFZdAj57xKW71pGFSUsKOJWTyF4G4xOFAM9FDWFF1RVe7n54%2F2O6X&X-Amz-Signature=bd9920cca132547adf7b8d4d2d396a4b441a5499854c9ff715b7e5002de82cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKLMNC2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOcXj8rgMOMpouQaYuEDOTOj1W2K6a5rfPLmHoiwE4FgIhAMZOjbbGMSTP12YuXcbcD1unCHSzh6Yutpp9DVSicUukKv8DCDAQABoMNjM3NDIzMTgzODA1IgxOWxAAAl4s%2Bz3bTsQq3AOnX%2BzKj99x2wMrbgECLGrfBYStyknb95aC5T%2BxGVLXdguzmEPdgDEtdiYHstRZODYmVlvCyNoyzTSWF2CNazc1s4r7Ha3QI5g2%2FfUL1exUckzrG2txjTU9krqab4LdHZMujXGDd2y%2B3GV51XF%2F8aPJZ4U%2BnJ1ftojaZwgRrt3xhBnLfS2dqAP10mk99EuJiWXZKVuJVt4PGVnAN2Z%2Fup8cOg43wRPfvrrGMkGOdnenCCaVzevbAa6xqIYVa3iWnxnKedPlacHl%2BnMh%2FX7J%2BTP%2B7IWVm6Oht5%2B6MBJ2KfY1BJp3i9Zh8Z5ZSxamqkGpNalOylnbq5wJh6BP14vj6oVBX7Hda%2FVYVTj4fHVZErA%2BctAUlCaBc3BpQDQHfyu%2F4o0rImyovqH9IGX7fnu5amteEaDYmPjwiq1%2BN2PLxTQVPPq0zrk8Ssgn3BHXtMWUiVLx64s4gHoToNCSRLP4u%2F8t3tGBGhysiG%2BxQvOP8KkFMgrpnMmwnowYiPKBmJMHoNmOKp9cN3SF%2F%2FfCOVQuyg11XY8O2FbfLO4ENPVA9Y3OPLZ5XFWKTwzlxv2OnXPDiS5raU4Rd9OpSZweFg1ITx33O6lYMyK90g3mX%2BdUcJW%2BCPvakcZhdNhfl3124zCcluPABjqkAcZGbDuqJVydbdH5QNgWnUNKztIeX%2B3XWMNJ2FqYJ8oeh3CY2%2BbGAOqlEX0QE2P0SiSPNcg4tBb7edzzQUBTCgyCUVJ5R8c8xfyeiN1Vg6NJRXmnEZJ6N0EBRcrTSAocQr48z1x106Yzb8Sy%2BqlJ%2FOhZbMUC8jfMSC8kf9eRFZdAj57xKW71pGFSUsKOJWTyF4G4xOFAM9FDWFF1RVe7n54%2F2O6X&X-Amz-Signature=27e046f69044bacf8a5b39276213948b7be8b161175e13300c85921ddf81782f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKLMNC2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOcXj8rgMOMpouQaYuEDOTOj1W2K6a5rfPLmHoiwE4FgIhAMZOjbbGMSTP12YuXcbcD1unCHSzh6Yutpp9DVSicUukKv8DCDAQABoMNjM3NDIzMTgzODA1IgxOWxAAAl4s%2Bz3bTsQq3AOnX%2BzKj99x2wMrbgECLGrfBYStyknb95aC5T%2BxGVLXdguzmEPdgDEtdiYHstRZODYmVlvCyNoyzTSWF2CNazc1s4r7Ha3QI5g2%2FfUL1exUckzrG2txjTU9krqab4LdHZMujXGDd2y%2B3GV51XF%2F8aPJZ4U%2BnJ1ftojaZwgRrt3xhBnLfS2dqAP10mk99EuJiWXZKVuJVt4PGVnAN2Z%2Fup8cOg43wRPfvrrGMkGOdnenCCaVzevbAa6xqIYVa3iWnxnKedPlacHl%2BnMh%2FX7J%2BTP%2B7IWVm6Oht5%2B6MBJ2KfY1BJp3i9Zh8Z5ZSxamqkGpNalOylnbq5wJh6BP14vj6oVBX7Hda%2FVYVTj4fHVZErA%2BctAUlCaBc3BpQDQHfyu%2F4o0rImyovqH9IGX7fnu5amteEaDYmPjwiq1%2BN2PLxTQVPPq0zrk8Ssgn3BHXtMWUiVLx64s4gHoToNCSRLP4u%2F8t3tGBGhysiG%2BxQvOP8KkFMgrpnMmwnowYiPKBmJMHoNmOKp9cN3SF%2F%2FfCOVQuyg11XY8O2FbfLO4ENPVA9Y3OPLZ5XFWKTwzlxv2OnXPDiS5raU4Rd9OpSZweFg1ITx33O6lYMyK90g3mX%2BdUcJW%2BCPvakcZhdNhfl3124zCcluPABjqkAcZGbDuqJVydbdH5QNgWnUNKztIeX%2B3XWMNJ2FqYJ8oeh3CY2%2BbGAOqlEX0QE2P0SiSPNcg4tBb7edzzQUBTCgyCUVJ5R8c8xfyeiN1Vg6NJRXmnEZJ6N0EBRcrTSAocQr48z1x106Yzb8Sy%2BqlJ%2FOhZbMUC8jfMSC8kf9eRFZdAj57xKW71pGFSUsKOJWTyF4G4xOFAM9FDWFF1RVe7n54%2F2O6X&X-Amz-Signature=331f53168ff0d59bb77909da012d38dba4ba851a2394a5dc0dee24ed5a974009&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKLMNC2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOcXj8rgMOMpouQaYuEDOTOj1W2K6a5rfPLmHoiwE4FgIhAMZOjbbGMSTP12YuXcbcD1unCHSzh6Yutpp9DVSicUukKv8DCDAQABoMNjM3NDIzMTgzODA1IgxOWxAAAl4s%2Bz3bTsQq3AOnX%2BzKj99x2wMrbgECLGrfBYStyknb95aC5T%2BxGVLXdguzmEPdgDEtdiYHstRZODYmVlvCyNoyzTSWF2CNazc1s4r7Ha3QI5g2%2FfUL1exUckzrG2txjTU9krqab4LdHZMujXGDd2y%2B3GV51XF%2F8aPJZ4U%2BnJ1ftojaZwgRrt3xhBnLfS2dqAP10mk99EuJiWXZKVuJVt4PGVnAN2Z%2Fup8cOg43wRPfvrrGMkGOdnenCCaVzevbAa6xqIYVa3iWnxnKedPlacHl%2BnMh%2FX7J%2BTP%2B7IWVm6Oht5%2B6MBJ2KfY1BJp3i9Zh8Z5ZSxamqkGpNalOylnbq5wJh6BP14vj6oVBX7Hda%2FVYVTj4fHVZErA%2BctAUlCaBc3BpQDQHfyu%2F4o0rImyovqH9IGX7fnu5amteEaDYmPjwiq1%2BN2PLxTQVPPq0zrk8Ssgn3BHXtMWUiVLx64s4gHoToNCSRLP4u%2F8t3tGBGhysiG%2BxQvOP8KkFMgrpnMmwnowYiPKBmJMHoNmOKp9cN3SF%2F%2FfCOVQuyg11XY8O2FbfLO4ENPVA9Y3OPLZ5XFWKTwzlxv2OnXPDiS5raU4Rd9OpSZweFg1ITx33O6lYMyK90g3mX%2BdUcJW%2BCPvakcZhdNhfl3124zCcluPABjqkAcZGbDuqJVydbdH5QNgWnUNKztIeX%2B3XWMNJ2FqYJ8oeh3CY2%2BbGAOqlEX0QE2P0SiSPNcg4tBb7edzzQUBTCgyCUVJ5R8c8xfyeiN1Vg6NJRXmnEZJ6N0EBRcrTSAocQr48z1x106Yzb8Sy%2BqlJ%2FOhZbMUC8jfMSC8kf9eRFZdAj57xKW71pGFSUsKOJWTyF4G4xOFAM9FDWFF1RVe7n54%2F2O6X&X-Amz-Signature=20e46ab421c89eb0864eedeb4e6bbe518f13ce86ec86e937cf532a2f30c06c89&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKLMNC2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOcXj8rgMOMpouQaYuEDOTOj1W2K6a5rfPLmHoiwE4FgIhAMZOjbbGMSTP12YuXcbcD1unCHSzh6Yutpp9DVSicUukKv8DCDAQABoMNjM3NDIzMTgzODA1IgxOWxAAAl4s%2Bz3bTsQq3AOnX%2BzKj99x2wMrbgECLGrfBYStyknb95aC5T%2BxGVLXdguzmEPdgDEtdiYHstRZODYmVlvCyNoyzTSWF2CNazc1s4r7Ha3QI5g2%2FfUL1exUckzrG2txjTU9krqab4LdHZMujXGDd2y%2B3GV51XF%2F8aPJZ4U%2BnJ1ftojaZwgRrt3xhBnLfS2dqAP10mk99EuJiWXZKVuJVt4PGVnAN2Z%2Fup8cOg43wRPfvrrGMkGOdnenCCaVzevbAa6xqIYVa3iWnxnKedPlacHl%2BnMh%2FX7J%2BTP%2B7IWVm6Oht5%2B6MBJ2KfY1BJp3i9Zh8Z5ZSxamqkGpNalOylnbq5wJh6BP14vj6oVBX7Hda%2FVYVTj4fHVZErA%2BctAUlCaBc3BpQDQHfyu%2F4o0rImyovqH9IGX7fnu5amteEaDYmPjwiq1%2BN2PLxTQVPPq0zrk8Ssgn3BHXtMWUiVLx64s4gHoToNCSRLP4u%2F8t3tGBGhysiG%2BxQvOP8KkFMgrpnMmwnowYiPKBmJMHoNmOKp9cN3SF%2F%2FfCOVQuyg11XY8O2FbfLO4ENPVA9Y3OPLZ5XFWKTwzlxv2OnXPDiS5raU4Rd9OpSZweFg1ITx33O6lYMyK90g3mX%2BdUcJW%2BCPvakcZhdNhfl3124zCcluPABjqkAcZGbDuqJVydbdH5QNgWnUNKztIeX%2B3XWMNJ2FqYJ8oeh3CY2%2BbGAOqlEX0QE2P0SiSPNcg4tBb7edzzQUBTCgyCUVJ5R8c8xfyeiN1Vg6NJRXmnEZJ6N0EBRcrTSAocQr48z1x106Yzb8Sy%2BqlJ%2FOhZbMUC8jfMSC8kf9eRFZdAj57xKW71pGFSUsKOJWTyF4G4xOFAM9FDWFF1RVe7n54%2F2O6X&X-Amz-Signature=44a291c20250156c2bcd4456b3b51a3d1f0f2a1a861adc98bbf9cae53bdd647a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
