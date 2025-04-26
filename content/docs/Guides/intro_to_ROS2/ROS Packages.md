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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXFYHNM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV2Qe9aAqNP2aI9IcSGxwoOMCm8DXImfLytpRVSjnA%2FAiA4vLQv94N4RdArAvqt1xzSi%2Frwod1kdWDX3svLQDBtGSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMiDTszLfzw8I80HNbKtwD5gQjUk9BOgQ8e1orE7kx32ExkmxaG6A3BuVbeaOyK4qHNH7FLurkcgROuvPbVcvrumtLO0IZYLh71L%2FPStnL4QjCdwul%2BZdBEDxAXyGCxAp77RGppNc0%2BzTl59cn%2FYCc0tZ%2FsdNlb4Hht7tt49BHeeGHX6KYmi4hMBCQOJLhUBstyvanbIfJHsIWcjmnJptQBFftoySbJ4X1tutMH2mr49pKbGIvnDwImy5JodEEChpxjEqQGhipqk2cSqCeM3D5Vv%2F2So0x7FQbUMgsqH%2BwYkqftgpvcU6UI5OHUYQBh4ZR1VUPJNmAO%2BBSLezDipGTKyz6cbCRmiUw38NFqKbPbrOgF2phT498QBJeI9Cly8sl4PZwxAXhTyOH7YMhqo%2Bolz7%2F7D3zIwIBLwnhWBas8Rr3H%2BLnF%2BlDY%2F8mUz3473q%2BTJLX3VOw7wgie4A79y1FPdOsIAgV4ajOFDSlQ8aAlHAPtgMdkZVYjUxRY4nyKm%2BcKlLdU4xt4e%2FN6k5VTGsYkEd4ALOpctGjkBqP%2FaSRS8uKyTWulA21rILJL3ZzB0fvHWZPq%2FHYUejPXKGKLjL1GOfFHwVzV0XSk4fzFzqyUOYwPrmyDbCZseXquU2TTrOKaiNQEoEc%2B0oySd8wmt20wAY6pgHjQkO7JSo%2FeUWlSDnDcG4M8loj59Sfn4OPLZUiHPhVDGsKo9tSRgpOKIOEU3J40fXgNY%2BKpkc%2F2tNjf8UQeAJj5Ie7B5SS80QAcl2G69H%2BK5RKep32odX%2FDVUkdkmoii3J5%2BRry4QQuLV1TLknuALbBJoVSQchqAg%2F%2F08C%2BBFrfl9TvRYDp8%2FJpata8hJZebuc9ugS1IPiXmCHvNYodR91jcB%2FTbY8&X-Amz-Signature=dd40426f6c8eb12822b816ec31e9a39c715703d4cde9c3bcf3bddb7213229f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXFYHNM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV2Qe9aAqNP2aI9IcSGxwoOMCm8DXImfLytpRVSjnA%2FAiA4vLQv94N4RdArAvqt1xzSi%2Frwod1kdWDX3svLQDBtGSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMiDTszLfzw8I80HNbKtwD5gQjUk9BOgQ8e1orE7kx32ExkmxaG6A3BuVbeaOyK4qHNH7FLurkcgROuvPbVcvrumtLO0IZYLh71L%2FPStnL4QjCdwul%2BZdBEDxAXyGCxAp77RGppNc0%2BzTl59cn%2FYCc0tZ%2FsdNlb4Hht7tt49BHeeGHX6KYmi4hMBCQOJLhUBstyvanbIfJHsIWcjmnJptQBFftoySbJ4X1tutMH2mr49pKbGIvnDwImy5JodEEChpxjEqQGhipqk2cSqCeM3D5Vv%2F2So0x7FQbUMgsqH%2BwYkqftgpvcU6UI5OHUYQBh4ZR1VUPJNmAO%2BBSLezDipGTKyz6cbCRmiUw38NFqKbPbrOgF2phT498QBJeI9Cly8sl4PZwxAXhTyOH7YMhqo%2Bolz7%2F7D3zIwIBLwnhWBas8Rr3H%2BLnF%2BlDY%2F8mUz3473q%2BTJLX3VOw7wgie4A79y1FPdOsIAgV4ajOFDSlQ8aAlHAPtgMdkZVYjUxRY4nyKm%2BcKlLdU4xt4e%2FN6k5VTGsYkEd4ALOpctGjkBqP%2FaSRS8uKyTWulA21rILJL3ZzB0fvHWZPq%2FHYUejPXKGKLjL1GOfFHwVzV0XSk4fzFzqyUOYwPrmyDbCZseXquU2TTrOKaiNQEoEc%2B0oySd8wmt20wAY6pgHjQkO7JSo%2FeUWlSDnDcG4M8loj59Sfn4OPLZUiHPhVDGsKo9tSRgpOKIOEU3J40fXgNY%2BKpkc%2F2tNjf8UQeAJj5Ie7B5SS80QAcl2G69H%2BK5RKep32odX%2FDVUkdkmoii3J5%2BRry4QQuLV1TLknuALbBJoVSQchqAg%2F%2F08C%2BBFrfl9TvRYDp8%2FJpata8hJZebuc9ugS1IPiXmCHvNYodR91jcB%2FTbY8&X-Amz-Signature=93f74a1d825c4819faac70ec261393058476c17c2cf576765cf2e76c7680a312&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXFYHNM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV2Qe9aAqNP2aI9IcSGxwoOMCm8DXImfLytpRVSjnA%2FAiA4vLQv94N4RdArAvqt1xzSi%2Frwod1kdWDX3svLQDBtGSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMiDTszLfzw8I80HNbKtwD5gQjUk9BOgQ8e1orE7kx32ExkmxaG6A3BuVbeaOyK4qHNH7FLurkcgROuvPbVcvrumtLO0IZYLh71L%2FPStnL4QjCdwul%2BZdBEDxAXyGCxAp77RGppNc0%2BzTl59cn%2FYCc0tZ%2FsdNlb4Hht7tt49BHeeGHX6KYmi4hMBCQOJLhUBstyvanbIfJHsIWcjmnJptQBFftoySbJ4X1tutMH2mr49pKbGIvnDwImy5JodEEChpxjEqQGhipqk2cSqCeM3D5Vv%2F2So0x7FQbUMgsqH%2BwYkqftgpvcU6UI5OHUYQBh4ZR1VUPJNmAO%2BBSLezDipGTKyz6cbCRmiUw38NFqKbPbrOgF2phT498QBJeI9Cly8sl4PZwxAXhTyOH7YMhqo%2Bolz7%2F7D3zIwIBLwnhWBas8Rr3H%2BLnF%2BlDY%2F8mUz3473q%2BTJLX3VOw7wgie4A79y1FPdOsIAgV4ajOFDSlQ8aAlHAPtgMdkZVYjUxRY4nyKm%2BcKlLdU4xt4e%2FN6k5VTGsYkEd4ALOpctGjkBqP%2FaSRS8uKyTWulA21rILJL3ZzB0fvHWZPq%2FHYUejPXKGKLjL1GOfFHwVzV0XSk4fzFzqyUOYwPrmyDbCZseXquU2TTrOKaiNQEoEc%2B0oySd8wmt20wAY6pgHjQkO7JSo%2FeUWlSDnDcG4M8loj59Sfn4OPLZUiHPhVDGsKo9tSRgpOKIOEU3J40fXgNY%2BKpkc%2F2tNjf8UQeAJj5Ie7B5SS80QAcl2G69H%2BK5RKep32odX%2FDVUkdkmoii3J5%2BRry4QQuLV1TLknuALbBJoVSQchqAg%2F%2F08C%2BBFrfl9TvRYDp8%2FJpata8hJZebuc9ugS1IPiXmCHvNYodR91jcB%2FTbY8&X-Amz-Signature=725322dfdeb292d3d6c54fde5893e1b69aa3770e359c7d0748bf657c13d8154e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXFYHNM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV2Qe9aAqNP2aI9IcSGxwoOMCm8DXImfLytpRVSjnA%2FAiA4vLQv94N4RdArAvqt1xzSi%2Frwod1kdWDX3svLQDBtGSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMiDTszLfzw8I80HNbKtwD5gQjUk9BOgQ8e1orE7kx32ExkmxaG6A3BuVbeaOyK4qHNH7FLurkcgROuvPbVcvrumtLO0IZYLh71L%2FPStnL4QjCdwul%2BZdBEDxAXyGCxAp77RGppNc0%2BzTl59cn%2FYCc0tZ%2FsdNlb4Hht7tt49BHeeGHX6KYmi4hMBCQOJLhUBstyvanbIfJHsIWcjmnJptQBFftoySbJ4X1tutMH2mr49pKbGIvnDwImy5JodEEChpxjEqQGhipqk2cSqCeM3D5Vv%2F2So0x7FQbUMgsqH%2BwYkqftgpvcU6UI5OHUYQBh4ZR1VUPJNmAO%2BBSLezDipGTKyz6cbCRmiUw38NFqKbPbrOgF2phT498QBJeI9Cly8sl4PZwxAXhTyOH7YMhqo%2Bolz7%2F7D3zIwIBLwnhWBas8Rr3H%2BLnF%2BlDY%2F8mUz3473q%2BTJLX3VOw7wgie4A79y1FPdOsIAgV4ajOFDSlQ8aAlHAPtgMdkZVYjUxRY4nyKm%2BcKlLdU4xt4e%2FN6k5VTGsYkEd4ALOpctGjkBqP%2FaSRS8uKyTWulA21rILJL3ZzB0fvHWZPq%2FHYUejPXKGKLjL1GOfFHwVzV0XSk4fzFzqyUOYwPrmyDbCZseXquU2TTrOKaiNQEoEc%2B0oySd8wmt20wAY6pgHjQkO7JSo%2FeUWlSDnDcG4M8loj59Sfn4OPLZUiHPhVDGsKo9tSRgpOKIOEU3J40fXgNY%2BKpkc%2F2tNjf8UQeAJj5Ie7B5SS80QAcl2G69H%2BK5RKep32odX%2FDVUkdkmoii3J5%2BRry4QQuLV1TLknuALbBJoVSQchqAg%2F%2F08C%2BBFrfl9TvRYDp8%2FJpata8hJZebuc9ugS1IPiXmCHvNYodR91jcB%2FTbY8&X-Amz-Signature=49ae66f9597707976c1ca4b3b8bda28257ba82699eba9d064d7b361d77e8169a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXFYHNM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV2Qe9aAqNP2aI9IcSGxwoOMCm8DXImfLytpRVSjnA%2FAiA4vLQv94N4RdArAvqt1xzSi%2Frwod1kdWDX3svLQDBtGSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMiDTszLfzw8I80HNbKtwD5gQjUk9BOgQ8e1orE7kx32ExkmxaG6A3BuVbeaOyK4qHNH7FLurkcgROuvPbVcvrumtLO0IZYLh71L%2FPStnL4QjCdwul%2BZdBEDxAXyGCxAp77RGppNc0%2BzTl59cn%2FYCc0tZ%2FsdNlb4Hht7tt49BHeeGHX6KYmi4hMBCQOJLhUBstyvanbIfJHsIWcjmnJptQBFftoySbJ4X1tutMH2mr49pKbGIvnDwImy5JodEEChpxjEqQGhipqk2cSqCeM3D5Vv%2F2So0x7FQbUMgsqH%2BwYkqftgpvcU6UI5OHUYQBh4ZR1VUPJNmAO%2BBSLezDipGTKyz6cbCRmiUw38NFqKbPbrOgF2phT498QBJeI9Cly8sl4PZwxAXhTyOH7YMhqo%2Bolz7%2F7D3zIwIBLwnhWBas8Rr3H%2BLnF%2BlDY%2F8mUz3473q%2BTJLX3VOw7wgie4A79y1FPdOsIAgV4ajOFDSlQ8aAlHAPtgMdkZVYjUxRY4nyKm%2BcKlLdU4xt4e%2FN6k5VTGsYkEd4ALOpctGjkBqP%2FaSRS8uKyTWulA21rILJL3ZzB0fvHWZPq%2FHYUejPXKGKLjL1GOfFHwVzV0XSk4fzFzqyUOYwPrmyDbCZseXquU2TTrOKaiNQEoEc%2B0oySd8wmt20wAY6pgHjQkO7JSo%2FeUWlSDnDcG4M8loj59Sfn4OPLZUiHPhVDGsKo9tSRgpOKIOEU3J40fXgNY%2BKpkc%2F2tNjf8UQeAJj5Ie7B5SS80QAcl2G69H%2BK5RKep32odX%2FDVUkdkmoii3J5%2BRry4QQuLV1TLknuALbBJoVSQchqAg%2F%2F08C%2BBFrfl9TvRYDp8%2FJpata8hJZebuc9ugS1IPiXmCHvNYodR91jcB%2FTbY8&X-Amz-Signature=31675134d079a186e208f37f52ba4d86f0167611192cb0ee5e80ee1e6f95e306&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXFYHNM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV2Qe9aAqNP2aI9IcSGxwoOMCm8DXImfLytpRVSjnA%2FAiA4vLQv94N4RdArAvqt1xzSi%2Frwod1kdWDX3svLQDBtGSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMiDTszLfzw8I80HNbKtwD5gQjUk9BOgQ8e1orE7kx32ExkmxaG6A3BuVbeaOyK4qHNH7FLurkcgROuvPbVcvrumtLO0IZYLh71L%2FPStnL4QjCdwul%2BZdBEDxAXyGCxAp77RGppNc0%2BzTl59cn%2FYCc0tZ%2FsdNlb4Hht7tt49BHeeGHX6KYmi4hMBCQOJLhUBstyvanbIfJHsIWcjmnJptQBFftoySbJ4X1tutMH2mr49pKbGIvnDwImy5JodEEChpxjEqQGhipqk2cSqCeM3D5Vv%2F2So0x7FQbUMgsqH%2BwYkqftgpvcU6UI5OHUYQBh4ZR1VUPJNmAO%2BBSLezDipGTKyz6cbCRmiUw38NFqKbPbrOgF2phT498QBJeI9Cly8sl4PZwxAXhTyOH7YMhqo%2Bolz7%2F7D3zIwIBLwnhWBas8Rr3H%2BLnF%2BlDY%2F8mUz3473q%2BTJLX3VOw7wgie4A79y1FPdOsIAgV4ajOFDSlQ8aAlHAPtgMdkZVYjUxRY4nyKm%2BcKlLdU4xt4e%2FN6k5VTGsYkEd4ALOpctGjkBqP%2FaSRS8uKyTWulA21rILJL3ZzB0fvHWZPq%2FHYUejPXKGKLjL1GOfFHwVzV0XSk4fzFzqyUOYwPrmyDbCZseXquU2TTrOKaiNQEoEc%2B0oySd8wmt20wAY6pgHjQkO7JSo%2FeUWlSDnDcG4M8loj59Sfn4OPLZUiHPhVDGsKo9tSRgpOKIOEU3J40fXgNY%2BKpkc%2F2tNjf8UQeAJj5Ie7B5SS80QAcl2G69H%2BK5RKep32odX%2FDVUkdkmoii3J5%2BRry4QQuLV1TLknuALbBJoVSQchqAg%2F%2F08C%2BBFrfl9TvRYDp8%2FJpata8hJZebuc9ugS1IPiXmCHvNYodR91jcB%2FTbY8&X-Amz-Signature=d667888503442ad7b1919d08847166f994aaee1826521cac295a70733502a557&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXFYHNM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV2Qe9aAqNP2aI9IcSGxwoOMCm8DXImfLytpRVSjnA%2FAiA4vLQv94N4RdArAvqt1xzSi%2Frwod1kdWDX3svLQDBtGSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMiDTszLfzw8I80HNbKtwD5gQjUk9BOgQ8e1orE7kx32ExkmxaG6A3BuVbeaOyK4qHNH7FLurkcgROuvPbVcvrumtLO0IZYLh71L%2FPStnL4QjCdwul%2BZdBEDxAXyGCxAp77RGppNc0%2BzTl59cn%2FYCc0tZ%2FsdNlb4Hht7tt49BHeeGHX6KYmi4hMBCQOJLhUBstyvanbIfJHsIWcjmnJptQBFftoySbJ4X1tutMH2mr49pKbGIvnDwImy5JodEEChpxjEqQGhipqk2cSqCeM3D5Vv%2F2So0x7FQbUMgsqH%2BwYkqftgpvcU6UI5OHUYQBh4ZR1VUPJNmAO%2BBSLezDipGTKyz6cbCRmiUw38NFqKbPbrOgF2phT498QBJeI9Cly8sl4PZwxAXhTyOH7YMhqo%2Bolz7%2F7D3zIwIBLwnhWBas8Rr3H%2BLnF%2BlDY%2F8mUz3473q%2BTJLX3VOw7wgie4A79y1FPdOsIAgV4ajOFDSlQ8aAlHAPtgMdkZVYjUxRY4nyKm%2BcKlLdU4xt4e%2FN6k5VTGsYkEd4ALOpctGjkBqP%2FaSRS8uKyTWulA21rILJL3ZzB0fvHWZPq%2FHYUejPXKGKLjL1GOfFHwVzV0XSk4fzFzqyUOYwPrmyDbCZseXquU2TTrOKaiNQEoEc%2B0oySd8wmt20wAY6pgHjQkO7JSo%2FeUWlSDnDcG4M8loj59Sfn4OPLZUiHPhVDGsKo9tSRgpOKIOEU3J40fXgNY%2BKpkc%2F2tNjf8UQeAJj5Ie7B5SS80QAcl2G69H%2BK5RKep32odX%2FDVUkdkmoii3J5%2BRry4QQuLV1TLknuALbBJoVSQchqAg%2F%2F08C%2BBFrfl9TvRYDp8%2FJpata8hJZebuc9ugS1IPiXmCHvNYodR91jcB%2FTbY8&X-Amz-Signature=1d7a6a1dc8009ee61fe87f82564d41e6832bf7d548e680c5768d2b558327b143&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
