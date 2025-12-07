---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRKFGCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB2M29YasBu%2FTmemRwDe95ankyDRto4LedvecY6I2M6AiAT3N1OOIFdPDxyPY5sTPyzbgDWUfpvUpBFc1iH3uhvmSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqS9pKT4NaDznbFacKtwDCkoYb6H8%2B1XAujyrczWGMptPisS9%2FMBIgD%2Bf5Xt00HYS1WgR25m%2FVZsKNXnOzjkDcpebqxQOP1Zn1FvPRAUUJ62S0Fmptzcc4FBFGVMzLdw%2FvVe8luOCesLH5JxfDKc4v%2Fx3mav7IvbdwipLRDmuXqlP%2FCHoPjifzt4uIW1EfagWeUe4edysLUZacSAOEbFJMHaJ8QT%2FPG234tYCtGBpb%2BTfdII800qVD2al1epyCeRxpjd75c%2FXIkwnSdsXeqrWTxfmeb%2FbMTKh%2BvfALwfu3VL7Kc8r4oaqC64QoPI0Id4TUnTCytis0ZuguEcVNWrVzeZ2M52ZgIjdfuRZU6pc75I2SUPHSndF020rScHcOhzYNeuEonUSMOGfyGGpGglp6zWaDAkK1Gq0rAz7e%2FPd8lOyeyE9Rz7Tfrs2uTRvcCNK6qAQUrVe5l4Q8ZrV1kftTW%2FwCO%2FEdN1wPQCdVBf5nFrVnYvgK4Yw4kgolpvI3rnjgQlfXFJTKwUxO4k%2B3s01LCMbhRoG%2BWXHpIyL%2FckIAYfsgjkoPqZ17OHpi4ly%2B5ZUr0PNK9DHPiR%2BXcszSgF6nTQc%2BAgwWOqwJ%2FGrhVY%2B7IcjhZTpU1HKECU43U43kLqvcrN3lh4Fxv0UJAkwpP3SyQY6pgG%2Fw5OFpmBZC1qKxruN2Fb1mY4Vs59mWZ2Vy6jPx8o2fNWVFA4nqHHJ%2Bvg%2BjHckZT%2Fjyu0o2x8d9WLCVyfCinZFSBX1EDCuMgUg8V3npd36YAnCFgsMPE8XO6fvl4ah08poCL3Jf4R8DDHdRkjWQlsjRLa1koHN75wl%2BpMJafwTjhkFe4jhgn6BtlkLdDOFT0emZDdPn64kuoMkPDA%2BLeAfWX8veAwu&X-Amz-Signature=ab08331d5ca39f2e808161b6f2ae8580d49d45da593df50e9bb816b0f9506118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRKFGCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB2M29YasBu%2FTmemRwDe95ankyDRto4LedvecY6I2M6AiAT3N1OOIFdPDxyPY5sTPyzbgDWUfpvUpBFc1iH3uhvmSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqS9pKT4NaDznbFacKtwDCkoYb6H8%2B1XAujyrczWGMptPisS9%2FMBIgD%2Bf5Xt00HYS1WgR25m%2FVZsKNXnOzjkDcpebqxQOP1Zn1FvPRAUUJ62S0Fmptzcc4FBFGVMzLdw%2FvVe8luOCesLH5JxfDKc4v%2Fx3mav7IvbdwipLRDmuXqlP%2FCHoPjifzt4uIW1EfagWeUe4edysLUZacSAOEbFJMHaJ8QT%2FPG234tYCtGBpb%2BTfdII800qVD2al1epyCeRxpjd75c%2FXIkwnSdsXeqrWTxfmeb%2FbMTKh%2BvfALwfu3VL7Kc8r4oaqC64QoPI0Id4TUnTCytis0ZuguEcVNWrVzeZ2M52ZgIjdfuRZU6pc75I2SUPHSndF020rScHcOhzYNeuEonUSMOGfyGGpGglp6zWaDAkK1Gq0rAz7e%2FPd8lOyeyE9Rz7Tfrs2uTRvcCNK6qAQUrVe5l4Q8ZrV1kftTW%2FwCO%2FEdN1wPQCdVBf5nFrVnYvgK4Yw4kgolpvI3rnjgQlfXFJTKwUxO4k%2B3s01LCMbhRoG%2BWXHpIyL%2FckIAYfsgjkoPqZ17OHpi4ly%2B5ZUr0PNK9DHPiR%2BXcszSgF6nTQc%2BAgwWOqwJ%2FGrhVY%2B7IcjhZTpU1HKECU43U43kLqvcrN3lh4Fxv0UJAkwpP3SyQY6pgG%2Fw5OFpmBZC1qKxruN2Fb1mY4Vs59mWZ2Vy6jPx8o2fNWVFA4nqHHJ%2Bvg%2BjHckZT%2Fjyu0o2x8d9WLCVyfCinZFSBX1EDCuMgUg8V3npd36YAnCFgsMPE8XO6fvl4ah08poCL3Jf4R8DDHdRkjWQlsjRLa1koHN75wl%2BpMJafwTjhkFe4jhgn6BtlkLdDOFT0emZDdPn64kuoMkPDA%2BLeAfWX8veAwu&X-Amz-Signature=e979b7af546274536f9e890c9f85fe7917e018342ddd999a1876105ccdb725e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRKFGCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB2M29YasBu%2FTmemRwDe95ankyDRto4LedvecY6I2M6AiAT3N1OOIFdPDxyPY5sTPyzbgDWUfpvUpBFc1iH3uhvmSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqS9pKT4NaDznbFacKtwDCkoYb6H8%2B1XAujyrczWGMptPisS9%2FMBIgD%2Bf5Xt00HYS1WgR25m%2FVZsKNXnOzjkDcpebqxQOP1Zn1FvPRAUUJ62S0Fmptzcc4FBFGVMzLdw%2FvVe8luOCesLH5JxfDKc4v%2Fx3mav7IvbdwipLRDmuXqlP%2FCHoPjifzt4uIW1EfagWeUe4edysLUZacSAOEbFJMHaJ8QT%2FPG234tYCtGBpb%2BTfdII800qVD2al1epyCeRxpjd75c%2FXIkwnSdsXeqrWTxfmeb%2FbMTKh%2BvfALwfu3VL7Kc8r4oaqC64QoPI0Id4TUnTCytis0ZuguEcVNWrVzeZ2M52ZgIjdfuRZU6pc75I2SUPHSndF020rScHcOhzYNeuEonUSMOGfyGGpGglp6zWaDAkK1Gq0rAz7e%2FPd8lOyeyE9Rz7Tfrs2uTRvcCNK6qAQUrVe5l4Q8ZrV1kftTW%2FwCO%2FEdN1wPQCdVBf5nFrVnYvgK4Yw4kgolpvI3rnjgQlfXFJTKwUxO4k%2B3s01LCMbhRoG%2BWXHpIyL%2FckIAYfsgjkoPqZ17OHpi4ly%2B5ZUr0PNK9DHPiR%2BXcszSgF6nTQc%2BAgwWOqwJ%2FGrhVY%2B7IcjhZTpU1HKECU43U43kLqvcrN3lh4Fxv0UJAkwpP3SyQY6pgG%2Fw5OFpmBZC1qKxruN2Fb1mY4Vs59mWZ2Vy6jPx8o2fNWVFA4nqHHJ%2Bvg%2BjHckZT%2Fjyu0o2x8d9WLCVyfCinZFSBX1EDCuMgUg8V3npd36YAnCFgsMPE8XO6fvl4ah08poCL3Jf4R8DDHdRkjWQlsjRLa1koHN75wl%2BpMJafwTjhkFe4jhgn6BtlkLdDOFT0emZDdPn64kuoMkPDA%2BLeAfWX8veAwu&X-Amz-Signature=28a6795659ac3403fdab82cecc3093b452ab872f3bc057c5c4bbe4d0136336b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRKFGCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB2M29YasBu%2FTmemRwDe95ankyDRto4LedvecY6I2M6AiAT3N1OOIFdPDxyPY5sTPyzbgDWUfpvUpBFc1iH3uhvmSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqS9pKT4NaDznbFacKtwDCkoYb6H8%2B1XAujyrczWGMptPisS9%2FMBIgD%2Bf5Xt00HYS1WgR25m%2FVZsKNXnOzjkDcpebqxQOP1Zn1FvPRAUUJ62S0Fmptzcc4FBFGVMzLdw%2FvVe8luOCesLH5JxfDKc4v%2Fx3mav7IvbdwipLRDmuXqlP%2FCHoPjifzt4uIW1EfagWeUe4edysLUZacSAOEbFJMHaJ8QT%2FPG234tYCtGBpb%2BTfdII800qVD2al1epyCeRxpjd75c%2FXIkwnSdsXeqrWTxfmeb%2FbMTKh%2BvfALwfu3VL7Kc8r4oaqC64QoPI0Id4TUnTCytis0ZuguEcVNWrVzeZ2M52ZgIjdfuRZU6pc75I2SUPHSndF020rScHcOhzYNeuEonUSMOGfyGGpGglp6zWaDAkK1Gq0rAz7e%2FPd8lOyeyE9Rz7Tfrs2uTRvcCNK6qAQUrVe5l4Q8ZrV1kftTW%2FwCO%2FEdN1wPQCdVBf5nFrVnYvgK4Yw4kgolpvI3rnjgQlfXFJTKwUxO4k%2B3s01LCMbhRoG%2BWXHpIyL%2FckIAYfsgjkoPqZ17OHpi4ly%2B5ZUr0PNK9DHPiR%2BXcszSgF6nTQc%2BAgwWOqwJ%2FGrhVY%2B7IcjhZTpU1HKECU43U43kLqvcrN3lh4Fxv0UJAkwpP3SyQY6pgG%2Fw5OFpmBZC1qKxruN2Fb1mY4Vs59mWZ2Vy6jPx8o2fNWVFA4nqHHJ%2Bvg%2BjHckZT%2Fjyu0o2x8d9WLCVyfCinZFSBX1EDCuMgUg8V3npd36YAnCFgsMPE8XO6fvl4ah08poCL3Jf4R8DDHdRkjWQlsjRLa1koHN75wl%2BpMJafwTjhkFe4jhgn6BtlkLdDOFT0emZDdPn64kuoMkPDA%2BLeAfWX8veAwu&X-Amz-Signature=0c28f778b55cfdc47a4b243383eadd944e0c8c468785b877e9f399680443ea33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRKFGCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB2M29YasBu%2FTmemRwDe95ankyDRto4LedvecY6I2M6AiAT3N1OOIFdPDxyPY5sTPyzbgDWUfpvUpBFc1iH3uhvmSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqS9pKT4NaDznbFacKtwDCkoYb6H8%2B1XAujyrczWGMptPisS9%2FMBIgD%2Bf5Xt00HYS1WgR25m%2FVZsKNXnOzjkDcpebqxQOP1Zn1FvPRAUUJ62S0Fmptzcc4FBFGVMzLdw%2FvVe8luOCesLH5JxfDKc4v%2Fx3mav7IvbdwipLRDmuXqlP%2FCHoPjifzt4uIW1EfagWeUe4edysLUZacSAOEbFJMHaJ8QT%2FPG234tYCtGBpb%2BTfdII800qVD2al1epyCeRxpjd75c%2FXIkwnSdsXeqrWTxfmeb%2FbMTKh%2BvfALwfu3VL7Kc8r4oaqC64QoPI0Id4TUnTCytis0ZuguEcVNWrVzeZ2M52ZgIjdfuRZU6pc75I2SUPHSndF020rScHcOhzYNeuEonUSMOGfyGGpGglp6zWaDAkK1Gq0rAz7e%2FPd8lOyeyE9Rz7Tfrs2uTRvcCNK6qAQUrVe5l4Q8ZrV1kftTW%2FwCO%2FEdN1wPQCdVBf5nFrVnYvgK4Yw4kgolpvI3rnjgQlfXFJTKwUxO4k%2B3s01LCMbhRoG%2BWXHpIyL%2FckIAYfsgjkoPqZ17OHpi4ly%2B5ZUr0PNK9DHPiR%2BXcszSgF6nTQc%2BAgwWOqwJ%2FGrhVY%2B7IcjhZTpU1HKECU43U43kLqvcrN3lh4Fxv0UJAkwpP3SyQY6pgG%2Fw5OFpmBZC1qKxruN2Fb1mY4Vs59mWZ2Vy6jPx8o2fNWVFA4nqHHJ%2Bvg%2BjHckZT%2Fjyu0o2x8d9WLCVyfCinZFSBX1EDCuMgUg8V3npd36YAnCFgsMPE8XO6fvl4ah08poCL3Jf4R8DDHdRkjWQlsjRLa1koHN75wl%2BpMJafwTjhkFe4jhgn6BtlkLdDOFT0emZDdPn64kuoMkPDA%2BLeAfWX8veAwu&X-Amz-Signature=74ebb0e849fc6f9fd11d4bbbf8e7d903f84eab95ad5cf389ae9b3d4f3644fb32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRKFGCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB2M29YasBu%2FTmemRwDe95ankyDRto4LedvecY6I2M6AiAT3N1OOIFdPDxyPY5sTPyzbgDWUfpvUpBFc1iH3uhvmSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqS9pKT4NaDznbFacKtwDCkoYb6H8%2B1XAujyrczWGMptPisS9%2FMBIgD%2Bf5Xt00HYS1WgR25m%2FVZsKNXnOzjkDcpebqxQOP1Zn1FvPRAUUJ62S0Fmptzcc4FBFGVMzLdw%2FvVe8luOCesLH5JxfDKc4v%2Fx3mav7IvbdwipLRDmuXqlP%2FCHoPjifzt4uIW1EfagWeUe4edysLUZacSAOEbFJMHaJ8QT%2FPG234tYCtGBpb%2BTfdII800qVD2al1epyCeRxpjd75c%2FXIkwnSdsXeqrWTxfmeb%2FbMTKh%2BvfALwfu3VL7Kc8r4oaqC64QoPI0Id4TUnTCytis0ZuguEcVNWrVzeZ2M52ZgIjdfuRZU6pc75I2SUPHSndF020rScHcOhzYNeuEonUSMOGfyGGpGglp6zWaDAkK1Gq0rAz7e%2FPd8lOyeyE9Rz7Tfrs2uTRvcCNK6qAQUrVe5l4Q8ZrV1kftTW%2FwCO%2FEdN1wPQCdVBf5nFrVnYvgK4Yw4kgolpvI3rnjgQlfXFJTKwUxO4k%2B3s01LCMbhRoG%2BWXHpIyL%2FckIAYfsgjkoPqZ17OHpi4ly%2B5ZUr0PNK9DHPiR%2BXcszSgF6nTQc%2BAgwWOqwJ%2FGrhVY%2B7IcjhZTpU1HKECU43U43kLqvcrN3lh4Fxv0UJAkwpP3SyQY6pgG%2Fw5OFpmBZC1qKxruN2Fb1mY4Vs59mWZ2Vy6jPx8o2fNWVFA4nqHHJ%2Bvg%2BjHckZT%2Fjyu0o2x8d9WLCVyfCinZFSBX1EDCuMgUg8V3npd36YAnCFgsMPE8XO6fvl4ah08poCL3Jf4R8DDHdRkjWQlsjRLa1koHN75wl%2BpMJafwTjhkFe4jhgn6BtlkLdDOFT0emZDdPn64kuoMkPDA%2BLeAfWX8veAwu&X-Amz-Signature=e0592a392b13d1076b0b3645d8aab6ab43f862f996280cbcdc9e55d196594a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRKFGCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB2M29YasBu%2FTmemRwDe95ankyDRto4LedvecY6I2M6AiAT3N1OOIFdPDxyPY5sTPyzbgDWUfpvUpBFc1iH3uhvmSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqS9pKT4NaDznbFacKtwDCkoYb6H8%2B1XAujyrczWGMptPisS9%2FMBIgD%2Bf5Xt00HYS1WgR25m%2FVZsKNXnOzjkDcpebqxQOP1Zn1FvPRAUUJ62S0Fmptzcc4FBFGVMzLdw%2FvVe8luOCesLH5JxfDKc4v%2Fx3mav7IvbdwipLRDmuXqlP%2FCHoPjifzt4uIW1EfagWeUe4edysLUZacSAOEbFJMHaJ8QT%2FPG234tYCtGBpb%2BTfdII800qVD2al1epyCeRxpjd75c%2FXIkwnSdsXeqrWTxfmeb%2FbMTKh%2BvfALwfu3VL7Kc8r4oaqC64QoPI0Id4TUnTCytis0ZuguEcVNWrVzeZ2M52ZgIjdfuRZU6pc75I2SUPHSndF020rScHcOhzYNeuEonUSMOGfyGGpGglp6zWaDAkK1Gq0rAz7e%2FPd8lOyeyE9Rz7Tfrs2uTRvcCNK6qAQUrVe5l4Q8ZrV1kftTW%2FwCO%2FEdN1wPQCdVBf5nFrVnYvgK4Yw4kgolpvI3rnjgQlfXFJTKwUxO4k%2B3s01LCMbhRoG%2BWXHpIyL%2FckIAYfsgjkoPqZ17OHpi4ly%2B5ZUr0PNK9DHPiR%2BXcszSgF6nTQc%2BAgwWOqwJ%2FGrhVY%2B7IcjhZTpU1HKECU43U43kLqvcrN3lh4Fxv0UJAkwpP3SyQY6pgG%2Fw5OFpmBZC1qKxruN2Fb1mY4Vs59mWZ2Vy6jPx8o2fNWVFA4nqHHJ%2Bvg%2BjHckZT%2Fjyu0o2x8d9WLCVyfCinZFSBX1EDCuMgUg8V3npd36YAnCFgsMPE8XO6fvl4ah08poCL3Jf4R8DDHdRkjWQlsjRLa1koHN75wl%2BpMJafwTjhkFe4jhgn6BtlkLdDOFT0emZDdPn64kuoMkPDA%2BLeAfWX8veAwu&X-Amz-Signature=58804cefde64556bc5333be8214a3f0d91d9799719b5c057b985e10d47364647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
