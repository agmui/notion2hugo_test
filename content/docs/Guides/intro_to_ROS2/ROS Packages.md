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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EFCMOR3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3rrowdvITpRpPvhffGHPpIHwagb7gZeUYTegApM%2BrdAIgAk1IoVGj5Z03s3IGPOsNdjmf8TLSwJJlGK2LlspukMwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB9jU4nVfYjjdvbQVSrcA9DYX3DOIRFuaTICcf9jB%2B0LNfSSQGpcO8sbZFRCLi1y8Gj3GFcmtq8UITpos4IdLYNERD%2Fx9undIxaDfumgI5iHOHWdBBMnIQ1ZxIYKVa5yD5yA%2BaQQsZxzRolUrTJda6rkeR0ae0Bb9z2VFupTJ8c8n6PSwiXSscUNXwiFzIj94HU1S9qtR4Ndg4xDqxfAufg13KXxDY%2BHF0C0SfyiipOSIkzH6kWiSFpOC3Q7%2F%2B%2FB%2Fcou9Okdu5SgJANzbGgLVVhHG1joKGtWGnXFob4nvjQHJu1f4OQMXXu5wBuxrmX5iVTMo84EDIhQFzfftswrONIkQG2uGBfh5swbD%2FH25ayMCqbuH38tSKq5WYCyqBwk%2FloM7KgLboy9ME0WAYuLdNT2e0DR%2Fbg7FyZ2uecgFiDHzDd9%2FN0UoeP%2BMLjmaiS6E59N%2BRfpn%2BfJhDe%2BB0kCHtcpY2%2FVwHA7lRHjIwlkHV13eloalLiZKhnxtJZHltXmNrXbvVvwdog22c1s9b16MbPBQSR%2FHimWkOf6t9LI3xHAGZsqC9sS2iuXdcpyGXQmsza76osaq0zxM5J4%2BXWJKkk1eL0gU9PsUPTHssUOEmWCFxpi8r63bJqW4JePIg4t9Tog5rTVxLhxmJZUMI%2Fv1b4GOqUB7evONKoE0DiXWZiiB1tfKmSm1DOOgM4zzIZf6ial0tHgdi6WcLMfTMusfRjLR%2BOPgEgfp4sMMHIqBfuLBqm2OD6LZgrq8V55dDNVfcjEjhVl3aZWDDyeeTskdo4KF6LGwpbUUThDq%2BxWAKNzYWaqHStrrG4Vzr9PUqAfR83rnvi9ReAKbhwIzPK9fWXLPnuF4AHkLs1z%2BJ%2F5qF22tmdQehA6LAPv&X-Amz-Signature=c140f1b8704eca0ff429d51315ede96f7578faf243931bbb2d20d7533a9427bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EFCMOR3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3rrowdvITpRpPvhffGHPpIHwagb7gZeUYTegApM%2BrdAIgAk1IoVGj5Z03s3IGPOsNdjmf8TLSwJJlGK2LlspukMwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB9jU4nVfYjjdvbQVSrcA9DYX3DOIRFuaTICcf9jB%2B0LNfSSQGpcO8sbZFRCLi1y8Gj3GFcmtq8UITpos4IdLYNERD%2Fx9undIxaDfumgI5iHOHWdBBMnIQ1ZxIYKVa5yD5yA%2BaQQsZxzRolUrTJda6rkeR0ae0Bb9z2VFupTJ8c8n6PSwiXSscUNXwiFzIj94HU1S9qtR4Ndg4xDqxfAufg13KXxDY%2BHF0C0SfyiipOSIkzH6kWiSFpOC3Q7%2F%2B%2FB%2Fcou9Okdu5SgJANzbGgLVVhHG1joKGtWGnXFob4nvjQHJu1f4OQMXXu5wBuxrmX5iVTMo84EDIhQFzfftswrONIkQG2uGBfh5swbD%2FH25ayMCqbuH38tSKq5WYCyqBwk%2FloM7KgLboy9ME0WAYuLdNT2e0DR%2Fbg7FyZ2uecgFiDHzDd9%2FN0UoeP%2BMLjmaiS6E59N%2BRfpn%2BfJhDe%2BB0kCHtcpY2%2FVwHA7lRHjIwlkHV13eloalLiZKhnxtJZHltXmNrXbvVvwdog22c1s9b16MbPBQSR%2FHimWkOf6t9LI3xHAGZsqC9sS2iuXdcpyGXQmsza76osaq0zxM5J4%2BXWJKkk1eL0gU9PsUPTHssUOEmWCFxpi8r63bJqW4JePIg4t9Tog5rTVxLhxmJZUMI%2Fv1b4GOqUB7evONKoE0DiXWZiiB1tfKmSm1DOOgM4zzIZf6ial0tHgdi6WcLMfTMusfRjLR%2BOPgEgfp4sMMHIqBfuLBqm2OD6LZgrq8V55dDNVfcjEjhVl3aZWDDyeeTskdo4KF6LGwpbUUThDq%2BxWAKNzYWaqHStrrG4Vzr9PUqAfR83rnvi9ReAKbhwIzPK9fWXLPnuF4AHkLs1z%2BJ%2F5qF22tmdQehA6LAPv&X-Amz-Signature=1c1255756e3987748fedbd5e33c83986dc3e50e7a15f0e3eca06ed0e7cc7a993&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EFCMOR3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3rrowdvITpRpPvhffGHPpIHwagb7gZeUYTegApM%2BrdAIgAk1IoVGj5Z03s3IGPOsNdjmf8TLSwJJlGK2LlspukMwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB9jU4nVfYjjdvbQVSrcA9DYX3DOIRFuaTICcf9jB%2B0LNfSSQGpcO8sbZFRCLi1y8Gj3GFcmtq8UITpos4IdLYNERD%2Fx9undIxaDfumgI5iHOHWdBBMnIQ1ZxIYKVa5yD5yA%2BaQQsZxzRolUrTJda6rkeR0ae0Bb9z2VFupTJ8c8n6PSwiXSscUNXwiFzIj94HU1S9qtR4Ndg4xDqxfAufg13KXxDY%2BHF0C0SfyiipOSIkzH6kWiSFpOC3Q7%2F%2B%2FB%2Fcou9Okdu5SgJANzbGgLVVhHG1joKGtWGnXFob4nvjQHJu1f4OQMXXu5wBuxrmX5iVTMo84EDIhQFzfftswrONIkQG2uGBfh5swbD%2FH25ayMCqbuH38tSKq5WYCyqBwk%2FloM7KgLboy9ME0WAYuLdNT2e0DR%2Fbg7FyZ2uecgFiDHzDd9%2FN0UoeP%2BMLjmaiS6E59N%2BRfpn%2BfJhDe%2BB0kCHtcpY2%2FVwHA7lRHjIwlkHV13eloalLiZKhnxtJZHltXmNrXbvVvwdog22c1s9b16MbPBQSR%2FHimWkOf6t9LI3xHAGZsqC9sS2iuXdcpyGXQmsza76osaq0zxM5J4%2BXWJKkk1eL0gU9PsUPTHssUOEmWCFxpi8r63bJqW4JePIg4t9Tog5rTVxLhxmJZUMI%2Fv1b4GOqUB7evONKoE0DiXWZiiB1tfKmSm1DOOgM4zzIZf6ial0tHgdi6WcLMfTMusfRjLR%2BOPgEgfp4sMMHIqBfuLBqm2OD6LZgrq8V55dDNVfcjEjhVl3aZWDDyeeTskdo4KF6LGwpbUUThDq%2BxWAKNzYWaqHStrrG4Vzr9PUqAfR83rnvi9ReAKbhwIzPK9fWXLPnuF4AHkLs1z%2BJ%2F5qF22tmdQehA6LAPv&X-Amz-Signature=c24265cdb6591ba052f1d7b6d7d6875543448d9d090dcda606b3810c71038dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EFCMOR3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3rrowdvITpRpPvhffGHPpIHwagb7gZeUYTegApM%2BrdAIgAk1IoVGj5Z03s3IGPOsNdjmf8TLSwJJlGK2LlspukMwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB9jU4nVfYjjdvbQVSrcA9DYX3DOIRFuaTICcf9jB%2B0LNfSSQGpcO8sbZFRCLi1y8Gj3GFcmtq8UITpos4IdLYNERD%2Fx9undIxaDfumgI5iHOHWdBBMnIQ1ZxIYKVa5yD5yA%2BaQQsZxzRolUrTJda6rkeR0ae0Bb9z2VFupTJ8c8n6PSwiXSscUNXwiFzIj94HU1S9qtR4Ndg4xDqxfAufg13KXxDY%2BHF0C0SfyiipOSIkzH6kWiSFpOC3Q7%2F%2B%2FB%2Fcou9Okdu5SgJANzbGgLVVhHG1joKGtWGnXFob4nvjQHJu1f4OQMXXu5wBuxrmX5iVTMo84EDIhQFzfftswrONIkQG2uGBfh5swbD%2FH25ayMCqbuH38tSKq5WYCyqBwk%2FloM7KgLboy9ME0WAYuLdNT2e0DR%2Fbg7FyZ2uecgFiDHzDd9%2FN0UoeP%2BMLjmaiS6E59N%2BRfpn%2BfJhDe%2BB0kCHtcpY2%2FVwHA7lRHjIwlkHV13eloalLiZKhnxtJZHltXmNrXbvVvwdog22c1s9b16MbPBQSR%2FHimWkOf6t9LI3xHAGZsqC9sS2iuXdcpyGXQmsza76osaq0zxM5J4%2BXWJKkk1eL0gU9PsUPTHssUOEmWCFxpi8r63bJqW4JePIg4t9Tog5rTVxLhxmJZUMI%2Fv1b4GOqUB7evONKoE0DiXWZiiB1tfKmSm1DOOgM4zzIZf6ial0tHgdi6WcLMfTMusfRjLR%2BOPgEgfp4sMMHIqBfuLBqm2OD6LZgrq8V55dDNVfcjEjhVl3aZWDDyeeTskdo4KF6LGwpbUUThDq%2BxWAKNzYWaqHStrrG4Vzr9PUqAfR83rnvi9ReAKbhwIzPK9fWXLPnuF4AHkLs1z%2BJ%2F5qF22tmdQehA6LAPv&X-Amz-Signature=63ea869d7fadd3f6716073d4b47fdf356c69eb638378744d3871071f8f79c279&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EFCMOR3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3rrowdvITpRpPvhffGHPpIHwagb7gZeUYTegApM%2BrdAIgAk1IoVGj5Z03s3IGPOsNdjmf8TLSwJJlGK2LlspukMwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB9jU4nVfYjjdvbQVSrcA9DYX3DOIRFuaTICcf9jB%2B0LNfSSQGpcO8sbZFRCLi1y8Gj3GFcmtq8UITpos4IdLYNERD%2Fx9undIxaDfumgI5iHOHWdBBMnIQ1ZxIYKVa5yD5yA%2BaQQsZxzRolUrTJda6rkeR0ae0Bb9z2VFupTJ8c8n6PSwiXSscUNXwiFzIj94HU1S9qtR4Ndg4xDqxfAufg13KXxDY%2BHF0C0SfyiipOSIkzH6kWiSFpOC3Q7%2F%2B%2FB%2Fcou9Okdu5SgJANzbGgLVVhHG1joKGtWGnXFob4nvjQHJu1f4OQMXXu5wBuxrmX5iVTMo84EDIhQFzfftswrONIkQG2uGBfh5swbD%2FH25ayMCqbuH38tSKq5WYCyqBwk%2FloM7KgLboy9ME0WAYuLdNT2e0DR%2Fbg7FyZ2uecgFiDHzDd9%2FN0UoeP%2BMLjmaiS6E59N%2BRfpn%2BfJhDe%2BB0kCHtcpY2%2FVwHA7lRHjIwlkHV13eloalLiZKhnxtJZHltXmNrXbvVvwdog22c1s9b16MbPBQSR%2FHimWkOf6t9LI3xHAGZsqC9sS2iuXdcpyGXQmsza76osaq0zxM5J4%2BXWJKkk1eL0gU9PsUPTHssUOEmWCFxpi8r63bJqW4JePIg4t9Tog5rTVxLhxmJZUMI%2Fv1b4GOqUB7evONKoE0DiXWZiiB1tfKmSm1DOOgM4zzIZf6ial0tHgdi6WcLMfTMusfRjLR%2BOPgEgfp4sMMHIqBfuLBqm2OD6LZgrq8V55dDNVfcjEjhVl3aZWDDyeeTskdo4KF6LGwpbUUThDq%2BxWAKNzYWaqHStrrG4Vzr9PUqAfR83rnvi9ReAKbhwIzPK9fWXLPnuF4AHkLs1z%2BJ%2F5qF22tmdQehA6LAPv&X-Amz-Signature=faf74f5ee21718b8be23e92c015efb3e55b34c4438d4a6abcfa5bf29f464c715&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EFCMOR3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3rrowdvITpRpPvhffGHPpIHwagb7gZeUYTegApM%2BrdAIgAk1IoVGj5Z03s3IGPOsNdjmf8TLSwJJlGK2LlspukMwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB9jU4nVfYjjdvbQVSrcA9DYX3DOIRFuaTICcf9jB%2B0LNfSSQGpcO8sbZFRCLi1y8Gj3GFcmtq8UITpos4IdLYNERD%2Fx9undIxaDfumgI5iHOHWdBBMnIQ1ZxIYKVa5yD5yA%2BaQQsZxzRolUrTJda6rkeR0ae0Bb9z2VFupTJ8c8n6PSwiXSscUNXwiFzIj94HU1S9qtR4Ndg4xDqxfAufg13KXxDY%2BHF0C0SfyiipOSIkzH6kWiSFpOC3Q7%2F%2B%2FB%2Fcou9Okdu5SgJANzbGgLVVhHG1joKGtWGnXFob4nvjQHJu1f4OQMXXu5wBuxrmX5iVTMo84EDIhQFzfftswrONIkQG2uGBfh5swbD%2FH25ayMCqbuH38tSKq5WYCyqBwk%2FloM7KgLboy9ME0WAYuLdNT2e0DR%2Fbg7FyZ2uecgFiDHzDd9%2FN0UoeP%2BMLjmaiS6E59N%2BRfpn%2BfJhDe%2BB0kCHtcpY2%2FVwHA7lRHjIwlkHV13eloalLiZKhnxtJZHltXmNrXbvVvwdog22c1s9b16MbPBQSR%2FHimWkOf6t9LI3xHAGZsqC9sS2iuXdcpyGXQmsza76osaq0zxM5J4%2BXWJKkk1eL0gU9PsUPTHssUOEmWCFxpi8r63bJqW4JePIg4t9Tog5rTVxLhxmJZUMI%2Fv1b4GOqUB7evONKoE0DiXWZiiB1tfKmSm1DOOgM4zzIZf6ial0tHgdi6WcLMfTMusfRjLR%2BOPgEgfp4sMMHIqBfuLBqm2OD6LZgrq8V55dDNVfcjEjhVl3aZWDDyeeTskdo4KF6LGwpbUUThDq%2BxWAKNzYWaqHStrrG4Vzr9PUqAfR83rnvi9ReAKbhwIzPK9fWXLPnuF4AHkLs1z%2BJ%2F5qF22tmdQehA6LAPv&X-Amz-Signature=eb4f38dfa922cf7628eae981c345868d6a27843cf9a321da369d073313e628b9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EFCMOR3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3rrowdvITpRpPvhffGHPpIHwagb7gZeUYTegApM%2BrdAIgAk1IoVGj5Z03s3IGPOsNdjmf8TLSwJJlGK2LlspukMwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB9jU4nVfYjjdvbQVSrcA9DYX3DOIRFuaTICcf9jB%2B0LNfSSQGpcO8sbZFRCLi1y8Gj3GFcmtq8UITpos4IdLYNERD%2Fx9undIxaDfumgI5iHOHWdBBMnIQ1ZxIYKVa5yD5yA%2BaQQsZxzRolUrTJda6rkeR0ae0Bb9z2VFupTJ8c8n6PSwiXSscUNXwiFzIj94HU1S9qtR4Ndg4xDqxfAufg13KXxDY%2BHF0C0SfyiipOSIkzH6kWiSFpOC3Q7%2F%2B%2FB%2Fcou9Okdu5SgJANzbGgLVVhHG1joKGtWGnXFob4nvjQHJu1f4OQMXXu5wBuxrmX5iVTMo84EDIhQFzfftswrONIkQG2uGBfh5swbD%2FH25ayMCqbuH38tSKq5WYCyqBwk%2FloM7KgLboy9ME0WAYuLdNT2e0DR%2Fbg7FyZ2uecgFiDHzDd9%2FN0UoeP%2BMLjmaiS6E59N%2BRfpn%2BfJhDe%2BB0kCHtcpY2%2FVwHA7lRHjIwlkHV13eloalLiZKhnxtJZHltXmNrXbvVvwdog22c1s9b16MbPBQSR%2FHimWkOf6t9LI3xHAGZsqC9sS2iuXdcpyGXQmsza76osaq0zxM5J4%2BXWJKkk1eL0gU9PsUPTHssUOEmWCFxpi8r63bJqW4JePIg4t9Tog5rTVxLhxmJZUMI%2Fv1b4GOqUB7evONKoE0DiXWZiiB1tfKmSm1DOOgM4zzIZf6ial0tHgdi6WcLMfTMusfRjLR%2BOPgEgfp4sMMHIqBfuLBqm2OD6LZgrq8V55dDNVfcjEjhVl3aZWDDyeeTskdo4KF6LGwpbUUThDq%2BxWAKNzYWaqHStrrG4Vzr9PUqAfR83rnvi9ReAKbhwIzPK9fWXLPnuF4AHkLs1z%2BJ%2F5qF22tmdQehA6LAPv&X-Amz-Signature=822f0fbe594ba5ac6c95d445c3543d2d28a7112b74ae2fbb4d2d56a0b902ea1e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
