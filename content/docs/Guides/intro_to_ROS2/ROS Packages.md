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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654Q5N5R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFbgdmb5aRlkQUpKAyfflMBJTMoUFzDyweQjnxm7DD5%2BAiBgFYt5BIrMtWzqnMhBUmS0vRDcvK3D%2F0m%2FKsN9pIVGcSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMpzejRfawEUq0b7dqKtwD6AldZSAMiTuJ9BG2CciEEd5YJ20YMactyYr4S%2FOVp4Tr4JKyyeeEUnLLZL7KO1b9yfC87lLt32aAIE4%2FWprmJo44qFOvPtux96Rey6Uwx0K153TM5WVHvlMVxk9LKBzF%2BGiM2QOb2Ef5JIP2cLNFTdu4D6gAvAfGiQulN2Px7ve%2BI2PXebSjMWuLRSliY8O3Y5yGAmaISrCCjG8Am8%2BvO4YjQeJZAyzhH0UzhW%2FvagqAVI9m3Ruhbt25tt55UL3f3ek2gYN8O9fdgMdByf01T3PILY%2FHwEF60PQD1P%2FGfd7i6JLAMDZRXyk4mXLCQYb6JnWoIbl2fYiBy6y9SCHuUA2bSYLJriL5PAktHG1hyGp9hHp8mM4QaN2zq5BfOXDPb8foFKpjUgyzjr9ro%2Fzd%2BQrvU9EkzpiCMK%2BDI7NidAzbHwUwsmMxM6e3aj%2F4HVi%2BzzCft0TK44aJhkOtgZVOGuzV7Jy11%2FoZOES4YtYYKO1WhmITMBJP4woT7qyWP%2BfOBpO4Ux9hwWf4usiEMoNIlAHkJZRWYvmtW4Xj7p9c%2FtuMF9hkerhfInGo%2BArY3nhAgFaZhTPquvnwvOnT%2BcNjCXARTG3JPxUvUOwnPh67ShDrJnjgdJpxbndYeEgwvP%2B4wgY6pgHCTnsw9bmYRgH3C0QdytGfgjDWAmF9G7w%2BYoqkZoBKZUvKNrJdYNrr%2FcdaMz73ylB8obr%2FDXrpITlrU8LHq4fRYjeNylnBIawumgpIFEuLZX%2BWDqdSPkZiMX%2FcAUWEjRBTlG3n64TqpilAfBeppOVPX6tynrDxpPiUD5c0O3cKk57fqnvJK5CXUIS7cCOKJH2ds4AFWQGJCe7aIV7%2FV00MSvvkLW9P&X-Amz-Signature=18c9113a3c3b5bdc342889ab27d458b16d23190994c90bb81f20a875545f108b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654Q5N5R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFbgdmb5aRlkQUpKAyfflMBJTMoUFzDyweQjnxm7DD5%2BAiBgFYt5BIrMtWzqnMhBUmS0vRDcvK3D%2F0m%2FKsN9pIVGcSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMpzejRfawEUq0b7dqKtwD6AldZSAMiTuJ9BG2CciEEd5YJ20YMactyYr4S%2FOVp4Tr4JKyyeeEUnLLZL7KO1b9yfC87lLt32aAIE4%2FWprmJo44qFOvPtux96Rey6Uwx0K153TM5WVHvlMVxk9LKBzF%2BGiM2QOb2Ef5JIP2cLNFTdu4D6gAvAfGiQulN2Px7ve%2BI2PXebSjMWuLRSliY8O3Y5yGAmaISrCCjG8Am8%2BvO4YjQeJZAyzhH0UzhW%2FvagqAVI9m3Ruhbt25tt55UL3f3ek2gYN8O9fdgMdByf01T3PILY%2FHwEF60PQD1P%2FGfd7i6JLAMDZRXyk4mXLCQYb6JnWoIbl2fYiBy6y9SCHuUA2bSYLJriL5PAktHG1hyGp9hHp8mM4QaN2zq5BfOXDPb8foFKpjUgyzjr9ro%2Fzd%2BQrvU9EkzpiCMK%2BDI7NidAzbHwUwsmMxM6e3aj%2F4HVi%2BzzCft0TK44aJhkOtgZVOGuzV7Jy11%2FoZOES4YtYYKO1WhmITMBJP4woT7qyWP%2BfOBpO4Ux9hwWf4usiEMoNIlAHkJZRWYvmtW4Xj7p9c%2FtuMF9hkerhfInGo%2BArY3nhAgFaZhTPquvnwvOnT%2BcNjCXARTG3JPxUvUOwnPh67ShDrJnjgdJpxbndYeEgwvP%2B4wgY6pgHCTnsw9bmYRgH3C0QdytGfgjDWAmF9G7w%2BYoqkZoBKZUvKNrJdYNrr%2FcdaMz73ylB8obr%2FDXrpITlrU8LHq4fRYjeNylnBIawumgpIFEuLZX%2BWDqdSPkZiMX%2FcAUWEjRBTlG3n64TqpilAfBeppOVPX6tynrDxpPiUD5c0O3cKk57fqnvJK5CXUIS7cCOKJH2ds4AFWQGJCe7aIV7%2FV00MSvvkLW9P&X-Amz-Signature=e493a1b6c63fe3065b913ab83ef3a7e5b9fb55a1b3f0f60c481d3cafa41870d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654Q5N5R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFbgdmb5aRlkQUpKAyfflMBJTMoUFzDyweQjnxm7DD5%2BAiBgFYt5BIrMtWzqnMhBUmS0vRDcvK3D%2F0m%2FKsN9pIVGcSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMpzejRfawEUq0b7dqKtwD6AldZSAMiTuJ9BG2CciEEd5YJ20YMactyYr4S%2FOVp4Tr4JKyyeeEUnLLZL7KO1b9yfC87lLt32aAIE4%2FWprmJo44qFOvPtux96Rey6Uwx0K153TM5WVHvlMVxk9LKBzF%2BGiM2QOb2Ef5JIP2cLNFTdu4D6gAvAfGiQulN2Px7ve%2BI2PXebSjMWuLRSliY8O3Y5yGAmaISrCCjG8Am8%2BvO4YjQeJZAyzhH0UzhW%2FvagqAVI9m3Ruhbt25tt55UL3f3ek2gYN8O9fdgMdByf01T3PILY%2FHwEF60PQD1P%2FGfd7i6JLAMDZRXyk4mXLCQYb6JnWoIbl2fYiBy6y9SCHuUA2bSYLJriL5PAktHG1hyGp9hHp8mM4QaN2zq5BfOXDPb8foFKpjUgyzjr9ro%2Fzd%2BQrvU9EkzpiCMK%2BDI7NidAzbHwUwsmMxM6e3aj%2F4HVi%2BzzCft0TK44aJhkOtgZVOGuzV7Jy11%2FoZOES4YtYYKO1WhmITMBJP4woT7qyWP%2BfOBpO4Ux9hwWf4usiEMoNIlAHkJZRWYvmtW4Xj7p9c%2FtuMF9hkerhfInGo%2BArY3nhAgFaZhTPquvnwvOnT%2BcNjCXARTG3JPxUvUOwnPh67ShDrJnjgdJpxbndYeEgwvP%2B4wgY6pgHCTnsw9bmYRgH3C0QdytGfgjDWAmF9G7w%2BYoqkZoBKZUvKNrJdYNrr%2FcdaMz73ylB8obr%2FDXrpITlrU8LHq4fRYjeNylnBIawumgpIFEuLZX%2BWDqdSPkZiMX%2FcAUWEjRBTlG3n64TqpilAfBeppOVPX6tynrDxpPiUD5c0O3cKk57fqnvJK5CXUIS7cCOKJH2ds4AFWQGJCe7aIV7%2FV00MSvvkLW9P&X-Amz-Signature=e07c639bce9c4e66d9577867fc3247b2d7c5761a87ba8fb276086455189cb4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654Q5N5R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFbgdmb5aRlkQUpKAyfflMBJTMoUFzDyweQjnxm7DD5%2BAiBgFYt5BIrMtWzqnMhBUmS0vRDcvK3D%2F0m%2FKsN9pIVGcSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMpzejRfawEUq0b7dqKtwD6AldZSAMiTuJ9BG2CciEEd5YJ20YMactyYr4S%2FOVp4Tr4JKyyeeEUnLLZL7KO1b9yfC87lLt32aAIE4%2FWprmJo44qFOvPtux96Rey6Uwx0K153TM5WVHvlMVxk9LKBzF%2BGiM2QOb2Ef5JIP2cLNFTdu4D6gAvAfGiQulN2Px7ve%2BI2PXebSjMWuLRSliY8O3Y5yGAmaISrCCjG8Am8%2BvO4YjQeJZAyzhH0UzhW%2FvagqAVI9m3Ruhbt25tt55UL3f3ek2gYN8O9fdgMdByf01T3PILY%2FHwEF60PQD1P%2FGfd7i6JLAMDZRXyk4mXLCQYb6JnWoIbl2fYiBy6y9SCHuUA2bSYLJriL5PAktHG1hyGp9hHp8mM4QaN2zq5BfOXDPb8foFKpjUgyzjr9ro%2Fzd%2BQrvU9EkzpiCMK%2BDI7NidAzbHwUwsmMxM6e3aj%2F4HVi%2BzzCft0TK44aJhkOtgZVOGuzV7Jy11%2FoZOES4YtYYKO1WhmITMBJP4woT7qyWP%2BfOBpO4Ux9hwWf4usiEMoNIlAHkJZRWYvmtW4Xj7p9c%2FtuMF9hkerhfInGo%2BArY3nhAgFaZhTPquvnwvOnT%2BcNjCXARTG3JPxUvUOwnPh67ShDrJnjgdJpxbndYeEgwvP%2B4wgY6pgHCTnsw9bmYRgH3C0QdytGfgjDWAmF9G7w%2BYoqkZoBKZUvKNrJdYNrr%2FcdaMz73ylB8obr%2FDXrpITlrU8LHq4fRYjeNylnBIawumgpIFEuLZX%2BWDqdSPkZiMX%2FcAUWEjRBTlG3n64TqpilAfBeppOVPX6tynrDxpPiUD5c0O3cKk57fqnvJK5CXUIS7cCOKJH2ds4AFWQGJCe7aIV7%2FV00MSvvkLW9P&X-Amz-Signature=5a2ba9fc14645dfdcdf06be56f8954f0a5bfc751e6277abfa48b66d1c6e9b653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654Q5N5R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFbgdmb5aRlkQUpKAyfflMBJTMoUFzDyweQjnxm7DD5%2BAiBgFYt5BIrMtWzqnMhBUmS0vRDcvK3D%2F0m%2FKsN9pIVGcSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMpzejRfawEUq0b7dqKtwD6AldZSAMiTuJ9BG2CciEEd5YJ20YMactyYr4S%2FOVp4Tr4JKyyeeEUnLLZL7KO1b9yfC87lLt32aAIE4%2FWprmJo44qFOvPtux96Rey6Uwx0K153TM5WVHvlMVxk9LKBzF%2BGiM2QOb2Ef5JIP2cLNFTdu4D6gAvAfGiQulN2Px7ve%2BI2PXebSjMWuLRSliY8O3Y5yGAmaISrCCjG8Am8%2BvO4YjQeJZAyzhH0UzhW%2FvagqAVI9m3Ruhbt25tt55UL3f3ek2gYN8O9fdgMdByf01T3PILY%2FHwEF60PQD1P%2FGfd7i6JLAMDZRXyk4mXLCQYb6JnWoIbl2fYiBy6y9SCHuUA2bSYLJriL5PAktHG1hyGp9hHp8mM4QaN2zq5BfOXDPb8foFKpjUgyzjr9ro%2Fzd%2BQrvU9EkzpiCMK%2BDI7NidAzbHwUwsmMxM6e3aj%2F4HVi%2BzzCft0TK44aJhkOtgZVOGuzV7Jy11%2FoZOES4YtYYKO1WhmITMBJP4woT7qyWP%2BfOBpO4Ux9hwWf4usiEMoNIlAHkJZRWYvmtW4Xj7p9c%2FtuMF9hkerhfInGo%2BArY3nhAgFaZhTPquvnwvOnT%2BcNjCXARTG3JPxUvUOwnPh67ShDrJnjgdJpxbndYeEgwvP%2B4wgY6pgHCTnsw9bmYRgH3C0QdytGfgjDWAmF9G7w%2BYoqkZoBKZUvKNrJdYNrr%2FcdaMz73ylB8obr%2FDXrpITlrU8LHq4fRYjeNylnBIawumgpIFEuLZX%2BWDqdSPkZiMX%2FcAUWEjRBTlG3n64TqpilAfBeppOVPX6tynrDxpPiUD5c0O3cKk57fqnvJK5CXUIS7cCOKJH2ds4AFWQGJCe7aIV7%2FV00MSvvkLW9P&X-Amz-Signature=f7a3a445a496d8729294f84f33a23facfcbe9ad84bae4a160835d669b09b821a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654Q5N5R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFbgdmb5aRlkQUpKAyfflMBJTMoUFzDyweQjnxm7DD5%2BAiBgFYt5BIrMtWzqnMhBUmS0vRDcvK3D%2F0m%2FKsN9pIVGcSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMpzejRfawEUq0b7dqKtwD6AldZSAMiTuJ9BG2CciEEd5YJ20YMactyYr4S%2FOVp4Tr4JKyyeeEUnLLZL7KO1b9yfC87lLt32aAIE4%2FWprmJo44qFOvPtux96Rey6Uwx0K153TM5WVHvlMVxk9LKBzF%2BGiM2QOb2Ef5JIP2cLNFTdu4D6gAvAfGiQulN2Px7ve%2BI2PXebSjMWuLRSliY8O3Y5yGAmaISrCCjG8Am8%2BvO4YjQeJZAyzhH0UzhW%2FvagqAVI9m3Ruhbt25tt55UL3f3ek2gYN8O9fdgMdByf01T3PILY%2FHwEF60PQD1P%2FGfd7i6JLAMDZRXyk4mXLCQYb6JnWoIbl2fYiBy6y9SCHuUA2bSYLJriL5PAktHG1hyGp9hHp8mM4QaN2zq5BfOXDPb8foFKpjUgyzjr9ro%2Fzd%2BQrvU9EkzpiCMK%2BDI7NidAzbHwUwsmMxM6e3aj%2F4HVi%2BzzCft0TK44aJhkOtgZVOGuzV7Jy11%2FoZOES4YtYYKO1WhmITMBJP4woT7qyWP%2BfOBpO4Ux9hwWf4usiEMoNIlAHkJZRWYvmtW4Xj7p9c%2FtuMF9hkerhfInGo%2BArY3nhAgFaZhTPquvnwvOnT%2BcNjCXARTG3JPxUvUOwnPh67ShDrJnjgdJpxbndYeEgwvP%2B4wgY6pgHCTnsw9bmYRgH3C0QdytGfgjDWAmF9G7w%2BYoqkZoBKZUvKNrJdYNrr%2FcdaMz73ylB8obr%2FDXrpITlrU8LHq4fRYjeNylnBIawumgpIFEuLZX%2BWDqdSPkZiMX%2FcAUWEjRBTlG3n64TqpilAfBeppOVPX6tynrDxpPiUD5c0O3cKk57fqnvJK5CXUIS7cCOKJH2ds4AFWQGJCe7aIV7%2FV00MSvvkLW9P&X-Amz-Signature=9eb9604f326b82a1648cf8a631dbcdf68635f8aad0d844f64d53b1cffad89ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654Q5N5R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFbgdmb5aRlkQUpKAyfflMBJTMoUFzDyweQjnxm7DD5%2BAiBgFYt5BIrMtWzqnMhBUmS0vRDcvK3D%2F0m%2FKsN9pIVGcSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMpzejRfawEUq0b7dqKtwD6AldZSAMiTuJ9BG2CciEEd5YJ20YMactyYr4S%2FOVp4Tr4JKyyeeEUnLLZL7KO1b9yfC87lLt32aAIE4%2FWprmJo44qFOvPtux96Rey6Uwx0K153TM5WVHvlMVxk9LKBzF%2BGiM2QOb2Ef5JIP2cLNFTdu4D6gAvAfGiQulN2Px7ve%2BI2PXebSjMWuLRSliY8O3Y5yGAmaISrCCjG8Am8%2BvO4YjQeJZAyzhH0UzhW%2FvagqAVI9m3Ruhbt25tt55UL3f3ek2gYN8O9fdgMdByf01T3PILY%2FHwEF60PQD1P%2FGfd7i6JLAMDZRXyk4mXLCQYb6JnWoIbl2fYiBy6y9SCHuUA2bSYLJriL5PAktHG1hyGp9hHp8mM4QaN2zq5BfOXDPb8foFKpjUgyzjr9ro%2Fzd%2BQrvU9EkzpiCMK%2BDI7NidAzbHwUwsmMxM6e3aj%2F4HVi%2BzzCft0TK44aJhkOtgZVOGuzV7Jy11%2FoZOES4YtYYKO1WhmITMBJP4woT7qyWP%2BfOBpO4Ux9hwWf4usiEMoNIlAHkJZRWYvmtW4Xj7p9c%2FtuMF9hkerhfInGo%2BArY3nhAgFaZhTPquvnwvOnT%2BcNjCXARTG3JPxUvUOwnPh67ShDrJnjgdJpxbndYeEgwvP%2B4wgY6pgHCTnsw9bmYRgH3C0QdytGfgjDWAmF9G7w%2BYoqkZoBKZUvKNrJdYNrr%2FcdaMz73ylB8obr%2FDXrpITlrU8LHq4fRYjeNylnBIawumgpIFEuLZX%2BWDqdSPkZiMX%2FcAUWEjRBTlG3n64TqpilAfBeppOVPX6tynrDxpPiUD5c0O3cKk57fqnvJK5CXUIS7cCOKJH2ds4AFWQGJCe7aIV7%2FV00MSvvkLW9P&X-Amz-Signature=18fdeb22e4f007cb4a7b393136e797a91edc29062209dbe8ee1926b9125acc3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
