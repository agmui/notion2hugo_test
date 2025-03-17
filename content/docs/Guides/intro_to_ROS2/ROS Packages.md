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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAKTDFRR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBzoy65DR90FNKRUfym7rdsv0%2BsX%2BqNFromFPgDJVnHAiBylX4g9NM8jYNhvYqninHiyVQc71pQ32yShMdFBhS12Sr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMhoTA9JJoliZG71cHKtwDCAQ%2BEwAbzI7H%2FEwV%2F%2FpysTAvBFD5VVWtQrUV9boX%2FvVr9O89WunVw0f0OlKOgg%2FhxyPh2c0q0BGruaxMyjSV1mOnL3lMZ9VkhmSTYDZlsWwEfLsYJcu79AhyfTTpMwQ6xNOBc6%2FHHwCGo8YrNpf92sV1DODHxqwxCckDYp0n99x3CP0YG3T8x%2BZ%2BCHftEb%2B559o1QmzuLstfv7%2Fvjwwl2KZVnPX4HyR0IVhQdUm3r27dHkCO%2FdeP9x18fJt9O1j%2FhbyhyzHjoDqtmg%2FHsHj0m0TfPMJdAC0z5V4NeJK1TNTwbDD6WMaKGRWW1uL8s9wAOgvSUgjm%2B0SnY0Oo2aguB44IzyVdcY0voNRmV5N52joD6LeCwEPlUy1dkTrrarGu3EcjzB%2Bx%2Bq%2BGXv%2BRXt8xi4NearI2QMIta00mzPMNke%2BklzsOTBXzOi1WN9m%2BLhAN9f408MSMZDgxf3JcHu5SEINv04D0CFCcka2wLd8YvB8WQTfnTLwHwBLQe4AhkZvhgnGP3DxEgtX30HjqAnlO2yoGSBvcPGMMfgv0JTtvPZxz0HZv1fzFs%2BuLPkhOiiYRMiXvyRHswN16TEowpuvQgTbYwGzmopMzBMAot52yyr527EGfy13vz0qsq0EwsOXhvgY6pgGfbjQX0QH3WsymR1u6zN%2FINTG3Mt9d07xeWU0Jgi%2FNpuuz7sFiJKAzO8tNMFPyo9Gge12IFsdAq2esPQw2H7leae%2BnVdYR4RhzU1pEed0anZgKEpz5KqcwsM4PeWESaGTKQ4%2F3I5IXoJctcks1psAKp5xeLayEiBpufu1aubXCsG19o2Ixq584gm6PmkC7gGvzKPNTjaXyDOkbMF15wHNY6Yw9Lj71&X-Amz-Signature=f1aa64b9bebf63680841a1ff07c0ccc580880a3c6c8fe5b8b2d01b27fa8360e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAKTDFRR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBzoy65DR90FNKRUfym7rdsv0%2BsX%2BqNFromFPgDJVnHAiBylX4g9NM8jYNhvYqninHiyVQc71pQ32yShMdFBhS12Sr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMhoTA9JJoliZG71cHKtwDCAQ%2BEwAbzI7H%2FEwV%2F%2FpysTAvBFD5VVWtQrUV9boX%2FvVr9O89WunVw0f0OlKOgg%2FhxyPh2c0q0BGruaxMyjSV1mOnL3lMZ9VkhmSTYDZlsWwEfLsYJcu79AhyfTTpMwQ6xNOBc6%2FHHwCGo8YrNpf92sV1DODHxqwxCckDYp0n99x3CP0YG3T8x%2BZ%2BCHftEb%2B559o1QmzuLstfv7%2Fvjwwl2KZVnPX4HyR0IVhQdUm3r27dHkCO%2FdeP9x18fJt9O1j%2FhbyhyzHjoDqtmg%2FHsHj0m0TfPMJdAC0z5V4NeJK1TNTwbDD6WMaKGRWW1uL8s9wAOgvSUgjm%2B0SnY0Oo2aguB44IzyVdcY0voNRmV5N52joD6LeCwEPlUy1dkTrrarGu3EcjzB%2Bx%2Bq%2BGXv%2BRXt8xi4NearI2QMIta00mzPMNke%2BklzsOTBXzOi1WN9m%2BLhAN9f408MSMZDgxf3JcHu5SEINv04D0CFCcka2wLd8YvB8WQTfnTLwHwBLQe4AhkZvhgnGP3DxEgtX30HjqAnlO2yoGSBvcPGMMfgv0JTtvPZxz0HZv1fzFs%2BuLPkhOiiYRMiXvyRHswN16TEowpuvQgTbYwGzmopMzBMAot52yyr527EGfy13vz0qsq0EwsOXhvgY6pgGfbjQX0QH3WsymR1u6zN%2FINTG3Mt9d07xeWU0Jgi%2FNpuuz7sFiJKAzO8tNMFPyo9Gge12IFsdAq2esPQw2H7leae%2BnVdYR4RhzU1pEed0anZgKEpz5KqcwsM4PeWESaGTKQ4%2F3I5IXoJctcks1psAKp5xeLayEiBpufu1aubXCsG19o2Ixq584gm6PmkC7gGvzKPNTjaXyDOkbMF15wHNY6Yw9Lj71&X-Amz-Signature=516803c18b8865f3a25964469793775ac38c2d1bc97f7f70db3edfc465b7271a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAKTDFRR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBzoy65DR90FNKRUfym7rdsv0%2BsX%2BqNFromFPgDJVnHAiBylX4g9NM8jYNhvYqninHiyVQc71pQ32yShMdFBhS12Sr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMhoTA9JJoliZG71cHKtwDCAQ%2BEwAbzI7H%2FEwV%2F%2FpysTAvBFD5VVWtQrUV9boX%2FvVr9O89WunVw0f0OlKOgg%2FhxyPh2c0q0BGruaxMyjSV1mOnL3lMZ9VkhmSTYDZlsWwEfLsYJcu79AhyfTTpMwQ6xNOBc6%2FHHwCGo8YrNpf92sV1DODHxqwxCckDYp0n99x3CP0YG3T8x%2BZ%2BCHftEb%2B559o1QmzuLstfv7%2Fvjwwl2KZVnPX4HyR0IVhQdUm3r27dHkCO%2FdeP9x18fJt9O1j%2FhbyhyzHjoDqtmg%2FHsHj0m0TfPMJdAC0z5V4NeJK1TNTwbDD6WMaKGRWW1uL8s9wAOgvSUgjm%2B0SnY0Oo2aguB44IzyVdcY0voNRmV5N52joD6LeCwEPlUy1dkTrrarGu3EcjzB%2Bx%2Bq%2BGXv%2BRXt8xi4NearI2QMIta00mzPMNke%2BklzsOTBXzOi1WN9m%2BLhAN9f408MSMZDgxf3JcHu5SEINv04D0CFCcka2wLd8YvB8WQTfnTLwHwBLQe4AhkZvhgnGP3DxEgtX30HjqAnlO2yoGSBvcPGMMfgv0JTtvPZxz0HZv1fzFs%2BuLPkhOiiYRMiXvyRHswN16TEowpuvQgTbYwGzmopMzBMAot52yyr527EGfy13vz0qsq0EwsOXhvgY6pgGfbjQX0QH3WsymR1u6zN%2FINTG3Mt9d07xeWU0Jgi%2FNpuuz7sFiJKAzO8tNMFPyo9Gge12IFsdAq2esPQw2H7leae%2BnVdYR4RhzU1pEed0anZgKEpz5KqcwsM4PeWESaGTKQ4%2F3I5IXoJctcks1psAKp5xeLayEiBpufu1aubXCsG19o2Ixq584gm6PmkC7gGvzKPNTjaXyDOkbMF15wHNY6Yw9Lj71&X-Amz-Signature=3d76f00039abc8fc6622f6ff062d530c799bb39c8264d8823ab42bd33fd136ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAKTDFRR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBzoy65DR90FNKRUfym7rdsv0%2BsX%2BqNFromFPgDJVnHAiBylX4g9NM8jYNhvYqninHiyVQc71pQ32yShMdFBhS12Sr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMhoTA9JJoliZG71cHKtwDCAQ%2BEwAbzI7H%2FEwV%2F%2FpysTAvBFD5VVWtQrUV9boX%2FvVr9O89WunVw0f0OlKOgg%2FhxyPh2c0q0BGruaxMyjSV1mOnL3lMZ9VkhmSTYDZlsWwEfLsYJcu79AhyfTTpMwQ6xNOBc6%2FHHwCGo8YrNpf92sV1DODHxqwxCckDYp0n99x3CP0YG3T8x%2BZ%2BCHftEb%2B559o1QmzuLstfv7%2Fvjwwl2KZVnPX4HyR0IVhQdUm3r27dHkCO%2FdeP9x18fJt9O1j%2FhbyhyzHjoDqtmg%2FHsHj0m0TfPMJdAC0z5V4NeJK1TNTwbDD6WMaKGRWW1uL8s9wAOgvSUgjm%2B0SnY0Oo2aguB44IzyVdcY0voNRmV5N52joD6LeCwEPlUy1dkTrrarGu3EcjzB%2Bx%2Bq%2BGXv%2BRXt8xi4NearI2QMIta00mzPMNke%2BklzsOTBXzOi1WN9m%2BLhAN9f408MSMZDgxf3JcHu5SEINv04D0CFCcka2wLd8YvB8WQTfnTLwHwBLQe4AhkZvhgnGP3DxEgtX30HjqAnlO2yoGSBvcPGMMfgv0JTtvPZxz0HZv1fzFs%2BuLPkhOiiYRMiXvyRHswN16TEowpuvQgTbYwGzmopMzBMAot52yyr527EGfy13vz0qsq0EwsOXhvgY6pgGfbjQX0QH3WsymR1u6zN%2FINTG3Mt9d07xeWU0Jgi%2FNpuuz7sFiJKAzO8tNMFPyo9Gge12IFsdAq2esPQw2H7leae%2BnVdYR4RhzU1pEed0anZgKEpz5KqcwsM4PeWESaGTKQ4%2F3I5IXoJctcks1psAKp5xeLayEiBpufu1aubXCsG19o2Ixq584gm6PmkC7gGvzKPNTjaXyDOkbMF15wHNY6Yw9Lj71&X-Amz-Signature=431ec1273c928e2969786f9dfad86df8cf17914b1ceb316c4dc463b1bbb64b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAKTDFRR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBzoy65DR90FNKRUfym7rdsv0%2BsX%2BqNFromFPgDJVnHAiBylX4g9NM8jYNhvYqninHiyVQc71pQ32yShMdFBhS12Sr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMhoTA9JJoliZG71cHKtwDCAQ%2BEwAbzI7H%2FEwV%2F%2FpysTAvBFD5VVWtQrUV9boX%2FvVr9O89WunVw0f0OlKOgg%2FhxyPh2c0q0BGruaxMyjSV1mOnL3lMZ9VkhmSTYDZlsWwEfLsYJcu79AhyfTTpMwQ6xNOBc6%2FHHwCGo8YrNpf92sV1DODHxqwxCckDYp0n99x3CP0YG3T8x%2BZ%2BCHftEb%2B559o1QmzuLstfv7%2Fvjwwl2KZVnPX4HyR0IVhQdUm3r27dHkCO%2FdeP9x18fJt9O1j%2FhbyhyzHjoDqtmg%2FHsHj0m0TfPMJdAC0z5V4NeJK1TNTwbDD6WMaKGRWW1uL8s9wAOgvSUgjm%2B0SnY0Oo2aguB44IzyVdcY0voNRmV5N52joD6LeCwEPlUy1dkTrrarGu3EcjzB%2Bx%2Bq%2BGXv%2BRXt8xi4NearI2QMIta00mzPMNke%2BklzsOTBXzOi1WN9m%2BLhAN9f408MSMZDgxf3JcHu5SEINv04D0CFCcka2wLd8YvB8WQTfnTLwHwBLQe4AhkZvhgnGP3DxEgtX30HjqAnlO2yoGSBvcPGMMfgv0JTtvPZxz0HZv1fzFs%2BuLPkhOiiYRMiXvyRHswN16TEowpuvQgTbYwGzmopMzBMAot52yyr527EGfy13vz0qsq0EwsOXhvgY6pgGfbjQX0QH3WsymR1u6zN%2FINTG3Mt9d07xeWU0Jgi%2FNpuuz7sFiJKAzO8tNMFPyo9Gge12IFsdAq2esPQw2H7leae%2BnVdYR4RhzU1pEed0anZgKEpz5KqcwsM4PeWESaGTKQ4%2F3I5IXoJctcks1psAKp5xeLayEiBpufu1aubXCsG19o2Ixq584gm6PmkC7gGvzKPNTjaXyDOkbMF15wHNY6Yw9Lj71&X-Amz-Signature=f3ff88d87cd53a5b56e507ea30c012cda0c04d457ec673ad56165c17e05c998c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAKTDFRR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBzoy65DR90FNKRUfym7rdsv0%2BsX%2BqNFromFPgDJVnHAiBylX4g9NM8jYNhvYqninHiyVQc71pQ32yShMdFBhS12Sr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMhoTA9JJoliZG71cHKtwDCAQ%2BEwAbzI7H%2FEwV%2F%2FpysTAvBFD5VVWtQrUV9boX%2FvVr9O89WunVw0f0OlKOgg%2FhxyPh2c0q0BGruaxMyjSV1mOnL3lMZ9VkhmSTYDZlsWwEfLsYJcu79AhyfTTpMwQ6xNOBc6%2FHHwCGo8YrNpf92sV1DODHxqwxCckDYp0n99x3CP0YG3T8x%2BZ%2BCHftEb%2B559o1QmzuLstfv7%2Fvjwwl2KZVnPX4HyR0IVhQdUm3r27dHkCO%2FdeP9x18fJt9O1j%2FhbyhyzHjoDqtmg%2FHsHj0m0TfPMJdAC0z5V4NeJK1TNTwbDD6WMaKGRWW1uL8s9wAOgvSUgjm%2B0SnY0Oo2aguB44IzyVdcY0voNRmV5N52joD6LeCwEPlUy1dkTrrarGu3EcjzB%2Bx%2Bq%2BGXv%2BRXt8xi4NearI2QMIta00mzPMNke%2BklzsOTBXzOi1WN9m%2BLhAN9f408MSMZDgxf3JcHu5SEINv04D0CFCcka2wLd8YvB8WQTfnTLwHwBLQe4AhkZvhgnGP3DxEgtX30HjqAnlO2yoGSBvcPGMMfgv0JTtvPZxz0HZv1fzFs%2BuLPkhOiiYRMiXvyRHswN16TEowpuvQgTbYwGzmopMzBMAot52yyr527EGfy13vz0qsq0EwsOXhvgY6pgGfbjQX0QH3WsymR1u6zN%2FINTG3Mt9d07xeWU0Jgi%2FNpuuz7sFiJKAzO8tNMFPyo9Gge12IFsdAq2esPQw2H7leae%2BnVdYR4RhzU1pEed0anZgKEpz5KqcwsM4PeWESaGTKQ4%2F3I5IXoJctcks1psAKp5xeLayEiBpufu1aubXCsG19o2Ixq584gm6PmkC7gGvzKPNTjaXyDOkbMF15wHNY6Yw9Lj71&X-Amz-Signature=c8078e060a51ae4bb94d9db545e5f3910430872ab73ae70509709d6ab1564ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAKTDFRR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBzoy65DR90FNKRUfym7rdsv0%2BsX%2BqNFromFPgDJVnHAiBylX4g9NM8jYNhvYqninHiyVQc71pQ32yShMdFBhS12Sr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMhoTA9JJoliZG71cHKtwDCAQ%2BEwAbzI7H%2FEwV%2F%2FpysTAvBFD5VVWtQrUV9boX%2FvVr9O89WunVw0f0OlKOgg%2FhxyPh2c0q0BGruaxMyjSV1mOnL3lMZ9VkhmSTYDZlsWwEfLsYJcu79AhyfTTpMwQ6xNOBc6%2FHHwCGo8YrNpf92sV1DODHxqwxCckDYp0n99x3CP0YG3T8x%2BZ%2BCHftEb%2B559o1QmzuLstfv7%2Fvjwwl2KZVnPX4HyR0IVhQdUm3r27dHkCO%2FdeP9x18fJt9O1j%2FhbyhyzHjoDqtmg%2FHsHj0m0TfPMJdAC0z5V4NeJK1TNTwbDD6WMaKGRWW1uL8s9wAOgvSUgjm%2B0SnY0Oo2aguB44IzyVdcY0voNRmV5N52joD6LeCwEPlUy1dkTrrarGu3EcjzB%2Bx%2Bq%2BGXv%2BRXt8xi4NearI2QMIta00mzPMNke%2BklzsOTBXzOi1WN9m%2BLhAN9f408MSMZDgxf3JcHu5SEINv04D0CFCcka2wLd8YvB8WQTfnTLwHwBLQe4AhkZvhgnGP3DxEgtX30HjqAnlO2yoGSBvcPGMMfgv0JTtvPZxz0HZv1fzFs%2BuLPkhOiiYRMiXvyRHswN16TEowpuvQgTbYwGzmopMzBMAot52yyr527EGfy13vz0qsq0EwsOXhvgY6pgGfbjQX0QH3WsymR1u6zN%2FINTG3Mt9d07xeWU0Jgi%2FNpuuz7sFiJKAzO8tNMFPyo9Gge12IFsdAq2esPQw2H7leae%2BnVdYR4RhzU1pEed0anZgKEpz5KqcwsM4PeWESaGTKQ4%2F3I5IXoJctcks1psAKp5xeLayEiBpufu1aubXCsG19o2Ixq584gm6PmkC7gGvzKPNTjaXyDOkbMF15wHNY6Yw9Lj71&X-Amz-Signature=b30e42c37ccf0f330825ca40486334f258b6aed57b63e7b4be7d52dff8450cec&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
