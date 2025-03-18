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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNXNPID%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDOzegV7AJ0CeFRQbyao5DnJkWEk4GWkkk%2BzkuP8z9LQAiEAgFSsBumSPfPLaoUzD0jKgTgb%2FCaLhHtkMHiiXO8fPF0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO8JzEM8dQ8A6zh9pSrcA1Q83YZGAzIMAwi6WtYzi7E4D4CBVoV%2Biu%2B6dfq5p3Y%2B%2BdM4k3ZfVjSroGxl7nmtftQO8ee%2FlQR2Shu0giH7nQOfcyWmTJLnZmehnlQ70%2BVWKiDzuf1lSwVIesniirLDA4V%2FmctOxMyKwsWL9iI5%2FhLoba%2B9W8hqHoo9%2BfYqQ911%2FAVnWGt7njtIRj8os8RhIOjs7mVYkH2AVY89CfKx%2FShkNnisAFZPbKKYPHKUhrdBlYjtuR9i%2FBGgaPLKKfP1vXd8QwMa%2FKMCjNlE6IVaTVuzCA7hqexGbvioteRn24UNL5sSebiRZQUhjNqpsb7tTdhar%2BT6hXOZzdcQitzf6VtCwFZfPUNmdS2%2FIzOtON8H1cS8N8lJkh68COSZoCJvRcAZd5z4WZ%2FjBDZNcfpnSoUU2NGE8BXZz68pu%2FVNfPRYB%2FO2t9hCa%2FXASqNk7rsTeNDv%2BTQwMgqPOsvBkQR8wUwb%2BsNO83YRGfprnwSUOW2uSmL9WgQMIHgZLxSrtzvUz31lVvbwU0xonCmDsUfN4vJb%2B1vOkzPtk3sRyTiIkeOPSG4oyqjFNyKAOF%2FD2r9wiTJm1IxYwpg2xhHqjrp3Deb0A%2FOxQHsbacwBtn2R40SVVdAdEg0bGt1EvjJQMI%2F15b4GOqUBHt9i4rqQHNuhhkdRD19PLFTJPgMC0bIWJgQ9D5uFFgsHnugJHEdY15hS9F3b3SQ%2BVQdvfoPUZgyIFs8dVRnylkiTSHdJYpiF2Sw%2BY%2F8MTuMFnE5TrwDAT%2BHhuXEB4q9zubDxNFuhxnz6pcGVFGM5HrD4WhkwikDLiVwuk%2F7mw9G9rQ%2BPm4CtipMQvIHdF3owPR4Yjtq2rnfxO1MFiaKEkG%2BTBs%2FX&X-Amz-Signature=d288a649f91c37347f4eaeb99eb8e71b3633a252ea975fd226a6cc7e049e4b39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNXNPID%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDOzegV7AJ0CeFRQbyao5DnJkWEk4GWkkk%2BzkuP8z9LQAiEAgFSsBumSPfPLaoUzD0jKgTgb%2FCaLhHtkMHiiXO8fPF0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO8JzEM8dQ8A6zh9pSrcA1Q83YZGAzIMAwi6WtYzi7E4D4CBVoV%2Biu%2B6dfq5p3Y%2B%2BdM4k3ZfVjSroGxl7nmtftQO8ee%2FlQR2Shu0giH7nQOfcyWmTJLnZmehnlQ70%2BVWKiDzuf1lSwVIesniirLDA4V%2FmctOxMyKwsWL9iI5%2FhLoba%2B9W8hqHoo9%2BfYqQ911%2FAVnWGt7njtIRj8os8RhIOjs7mVYkH2AVY89CfKx%2FShkNnisAFZPbKKYPHKUhrdBlYjtuR9i%2FBGgaPLKKfP1vXd8QwMa%2FKMCjNlE6IVaTVuzCA7hqexGbvioteRn24UNL5sSebiRZQUhjNqpsb7tTdhar%2BT6hXOZzdcQitzf6VtCwFZfPUNmdS2%2FIzOtON8H1cS8N8lJkh68COSZoCJvRcAZd5z4WZ%2FjBDZNcfpnSoUU2NGE8BXZz68pu%2FVNfPRYB%2FO2t9hCa%2FXASqNk7rsTeNDv%2BTQwMgqPOsvBkQR8wUwb%2BsNO83YRGfprnwSUOW2uSmL9WgQMIHgZLxSrtzvUz31lVvbwU0xonCmDsUfN4vJb%2B1vOkzPtk3sRyTiIkeOPSG4oyqjFNyKAOF%2FD2r9wiTJm1IxYwpg2xhHqjrp3Deb0A%2FOxQHsbacwBtn2R40SVVdAdEg0bGt1EvjJQMI%2F15b4GOqUBHt9i4rqQHNuhhkdRD19PLFTJPgMC0bIWJgQ9D5uFFgsHnugJHEdY15hS9F3b3SQ%2BVQdvfoPUZgyIFs8dVRnylkiTSHdJYpiF2Sw%2BY%2F8MTuMFnE5TrwDAT%2BHhuXEB4q9zubDxNFuhxnz6pcGVFGM5HrD4WhkwikDLiVwuk%2F7mw9G9rQ%2BPm4CtipMQvIHdF3owPR4Yjtq2rnfxO1MFiaKEkG%2BTBs%2FX&X-Amz-Signature=ce4ea7537eafc2c00f114f904175943658f14c80755b36547db334c825e179dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNXNPID%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDOzegV7AJ0CeFRQbyao5DnJkWEk4GWkkk%2BzkuP8z9LQAiEAgFSsBumSPfPLaoUzD0jKgTgb%2FCaLhHtkMHiiXO8fPF0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO8JzEM8dQ8A6zh9pSrcA1Q83YZGAzIMAwi6WtYzi7E4D4CBVoV%2Biu%2B6dfq5p3Y%2B%2BdM4k3ZfVjSroGxl7nmtftQO8ee%2FlQR2Shu0giH7nQOfcyWmTJLnZmehnlQ70%2BVWKiDzuf1lSwVIesniirLDA4V%2FmctOxMyKwsWL9iI5%2FhLoba%2B9W8hqHoo9%2BfYqQ911%2FAVnWGt7njtIRj8os8RhIOjs7mVYkH2AVY89CfKx%2FShkNnisAFZPbKKYPHKUhrdBlYjtuR9i%2FBGgaPLKKfP1vXd8QwMa%2FKMCjNlE6IVaTVuzCA7hqexGbvioteRn24UNL5sSebiRZQUhjNqpsb7tTdhar%2BT6hXOZzdcQitzf6VtCwFZfPUNmdS2%2FIzOtON8H1cS8N8lJkh68COSZoCJvRcAZd5z4WZ%2FjBDZNcfpnSoUU2NGE8BXZz68pu%2FVNfPRYB%2FO2t9hCa%2FXASqNk7rsTeNDv%2BTQwMgqPOsvBkQR8wUwb%2BsNO83YRGfprnwSUOW2uSmL9WgQMIHgZLxSrtzvUz31lVvbwU0xonCmDsUfN4vJb%2B1vOkzPtk3sRyTiIkeOPSG4oyqjFNyKAOF%2FD2r9wiTJm1IxYwpg2xhHqjrp3Deb0A%2FOxQHsbacwBtn2R40SVVdAdEg0bGt1EvjJQMI%2F15b4GOqUBHt9i4rqQHNuhhkdRD19PLFTJPgMC0bIWJgQ9D5uFFgsHnugJHEdY15hS9F3b3SQ%2BVQdvfoPUZgyIFs8dVRnylkiTSHdJYpiF2Sw%2BY%2F8MTuMFnE5TrwDAT%2BHhuXEB4q9zubDxNFuhxnz6pcGVFGM5HrD4WhkwikDLiVwuk%2F7mw9G9rQ%2BPm4CtipMQvIHdF3owPR4Yjtq2rnfxO1MFiaKEkG%2BTBs%2FX&X-Amz-Signature=561ef36286fac63504174e47e1f0670917793c06d3627cf936bad8d57ac5d605&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNXNPID%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDOzegV7AJ0CeFRQbyao5DnJkWEk4GWkkk%2BzkuP8z9LQAiEAgFSsBumSPfPLaoUzD0jKgTgb%2FCaLhHtkMHiiXO8fPF0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO8JzEM8dQ8A6zh9pSrcA1Q83YZGAzIMAwi6WtYzi7E4D4CBVoV%2Biu%2B6dfq5p3Y%2B%2BdM4k3ZfVjSroGxl7nmtftQO8ee%2FlQR2Shu0giH7nQOfcyWmTJLnZmehnlQ70%2BVWKiDzuf1lSwVIesniirLDA4V%2FmctOxMyKwsWL9iI5%2FhLoba%2B9W8hqHoo9%2BfYqQ911%2FAVnWGt7njtIRj8os8RhIOjs7mVYkH2AVY89CfKx%2FShkNnisAFZPbKKYPHKUhrdBlYjtuR9i%2FBGgaPLKKfP1vXd8QwMa%2FKMCjNlE6IVaTVuzCA7hqexGbvioteRn24UNL5sSebiRZQUhjNqpsb7tTdhar%2BT6hXOZzdcQitzf6VtCwFZfPUNmdS2%2FIzOtON8H1cS8N8lJkh68COSZoCJvRcAZd5z4WZ%2FjBDZNcfpnSoUU2NGE8BXZz68pu%2FVNfPRYB%2FO2t9hCa%2FXASqNk7rsTeNDv%2BTQwMgqPOsvBkQR8wUwb%2BsNO83YRGfprnwSUOW2uSmL9WgQMIHgZLxSrtzvUz31lVvbwU0xonCmDsUfN4vJb%2B1vOkzPtk3sRyTiIkeOPSG4oyqjFNyKAOF%2FD2r9wiTJm1IxYwpg2xhHqjrp3Deb0A%2FOxQHsbacwBtn2R40SVVdAdEg0bGt1EvjJQMI%2F15b4GOqUBHt9i4rqQHNuhhkdRD19PLFTJPgMC0bIWJgQ9D5uFFgsHnugJHEdY15hS9F3b3SQ%2BVQdvfoPUZgyIFs8dVRnylkiTSHdJYpiF2Sw%2BY%2F8MTuMFnE5TrwDAT%2BHhuXEB4q9zubDxNFuhxnz6pcGVFGM5HrD4WhkwikDLiVwuk%2F7mw9G9rQ%2BPm4CtipMQvIHdF3owPR4Yjtq2rnfxO1MFiaKEkG%2BTBs%2FX&X-Amz-Signature=3291f56a066082d002c3aec0022ae0d4fefe00e8e857c7e66b328776a4c2c4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNXNPID%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDOzegV7AJ0CeFRQbyao5DnJkWEk4GWkkk%2BzkuP8z9LQAiEAgFSsBumSPfPLaoUzD0jKgTgb%2FCaLhHtkMHiiXO8fPF0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO8JzEM8dQ8A6zh9pSrcA1Q83YZGAzIMAwi6WtYzi7E4D4CBVoV%2Biu%2B6dfq5p3Y%2B%2BdM4k3ZfVjSroGxl7nmtftQO8ee%2FlQR2Shu0giH7nQOfcyWmTJLnZmehnlQ70%2BVWKiDzuf1lSwVIesniirLDA4V%2FmctOxMyKwsWL9iI5%2FhLoba%2B9W8hqHoo9%2BfYqQ911%2FAVnWGt7njtIRj8os8RhIOjs7mVYkH2AVY89CfKx%2FShkNnisAFZPbKKYPHKUhrdBlYjtuR9i%2FBGgaPLKKfP1vXd8QwMa%2FKMCjNlE6IVaTVuzCA7hqexGbvioteRn24UNL5sSebiRZQUhjNqpsb7tTdhar%2BT6hXOZzdcQitzf6VtCwFZfPUNmdS2%2FIzOtON8H1cS8N8lJkh68COSZoCJvRcAZd5z4WZ%2FjBDZNcfpnSoUU2NGE8BXZz68pu%2FVNfPRYB%2FO2t9hCa%2FXASqNk7rsTeNDv%2BTQwMgqPOsvBkQR8wUwb%2BsNO83YRGfprnwSUOW2uSmL9WgQMIHgZLxSrtzvUz31lVvbwU0xonCmDsUfN4vJb%2B1vOkzPtk3sRyTiIkeOPSG4oyqjFNyKAOF%2FD2r9wiTJm1IxYwpg2xhHqjrp3Deb0A%2FOxQHsbacwBtn2R40SVVdAdEg0bGt1EvjJQMI%2F15b4GOqUBHt9i4rqQHNuhhkdRD19PLFTJPgMC0bIWJgQ9D5uFFgsHnugJHEdY15hS9F3b3SQ%2BVQdvfoPUZgyIFs8dVRnylkiTSHdJYpiF2Sw%2BY%2F8MTuMFnE5TrwDAT%2BHhuXEB4q9zubDxNFuhxnz6pcGVFGM5HrD4WhkwikDLiVwuk%2F7mw9G9rQ%2BPm4CtipMQvIHdF3owPR4Yjtq2rnfxO1MFiaKEkG%2BTBs%2FX&X-Amz-Signature=ac14db140fc03f97c8e6e4616bdba527a12f16583e9fece63bdb59ef21fd1f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNXNPID%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDOzegV7AJ0CeFRQbyao5DnJkWEk4GWkkk%2BzkuP8z9LQAiEAgFSsBumSPfPLaoUzD0jKgTgb%2FCaLhHtkMHiiXO8fPF0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO8JzEM8dQ8A6zh9pSrcA1Q83YZGAzIMAwi6WtYzi7E4D4CBVoV%2Biu%2B6dfq5p3Y%2B%2BdM4k3ZfVjSroGxl7nmtftQO8ee%2FlQR2Shu0giH7nQOfcyWmTJLnZmehnlQ70%2BVWKiDzuf1lSwVIesniirLDA4V%2FmctOxMyKwsWL9iI5%2FhLoba%2B9W8hqHoo9%2BfYqQ911%2FAVnWGt7njtIRj8os8RhIOjs7mVYkH2AVY89CfKx%2FShkNnisAFZPbKKYPHKUhrdBlYjtuR9i%2FBGgaPLKKfP1vXd8QwMa%2FKMCjNlE6IVaTVuzCA7hqexGbvioteRn24UNL5sSebiRZQUhjNqpsb7tTdhar%2BT6hXOZzdcQitzf6VtCwFZfPUNmdS2%2FIzOtON8H1cS8N8lJkh68COSZoCJvRcAZd5z4WZ%2FjBDZNcfpnSoUU2NGE8BXZz68pu%2FVNfPRYB%2FO2t9hCa%2FXASqNk7rsTeNDv%2BTQwMgqPOsvBkQR8wUwb%2BsNO83YRGfprnwSUOW2uSmL9WgQMIHgZLxSrtzvUz31lVvbwU0xonCmDsUfN4vJb%2B1vOkzPtk3sRyTiIkeOPSG4oyqjFNyKAOF%2FD2r9wiTJm1IxYwpg2xhHqjrp3Deb0A%2FOxQHsbacwBtn2R40SVVdAdEg0bGt1EvjJQMI%2F15b4GOqUBHt9i4rqQHNuhhkdRD19PLFTJPgMC0bIWJgQ9D5uFFgsHnugJHEdY15hS9F3b3SQ%2BVQdvfoPUZgyIFs8dVRnylkiTSHdJYpiF2Sw%2BY%2F8MTuMFnE5TrwDAT%2BHhuXEB4q9zubDxNFuhxnz6pcGVFGM5HrD4WhkwikDLiVwuk%2F7mw9G9rQ%2BPm4CtipMQvIHdF3owPR4Yjtq2rnfxO1MFiaKEkG%2BTBs%2FX&X-Amz-Signature=20ae02a85b7c2ef2b9a205de2493c6631ec0208a356bebc6cdc85a452a385ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNXNPID%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDOzegV7AJ0CeFRQbyao5DnJkWEk4GWkkk%2BzkuP8z9LQAiEAgFSsBumSPfPLaoUzD0jKgTgb%2FCaLhHtkMHiiXO8fPF0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO8JzEM8dQ8A6zh9pSrcA1Q83YZGAzIMAwi6WtYzi7E4D4CBVoV%2Biu%2B6dfq5p3Y%2B%2BdM4k3ZfVjSroGxl7nmtftQO8ee%2FlQR2Shu0giH7nQOfcyWmTJLnZmehnlQ70%2BVWKiDzuf1lSwVIesniirLDA4V%2FmctOxMyKwsWL9iI5%2FhLoba%2B9W8hqHoo9%2BfYqQ911%2FAVnWGt7njtIRj8os8RhIOjs7mVYkH2AVY89CfKx%2FShkNnisAFZPbKKYPHKUhrdBlYjtuR9i%2FBGgaPLKKfP1vXd8QwMa%2FKMCjNlE6IVaTVuzCA7hqexGbvioteRn24UNL5sSebiRZQUhjNqpsb7tTdhar%2BT6hXOZzdcQitzf6VtCwFZfPUNmdS2%2FIzOtON8H1cS8N8lJkh68COSZoCJvRcAZd5z4WZ%2FjBDZNcfpnSoUU2NGE8BXZz68pu%2FVNfPRYB%2FO2t9hCa%2FXASqNk7rsTeNDv%2BTQwMgqPOsvBkQR8wUwb%2BsNO83YRGfprnwSUOW2uSmL9WgQMIHgZLxSrtzvUz31lVvbwU0xonCmDsUfN4vJb%2B1vOkzPtk3sRyTiIkeOPSG4oyqjFNyKAOF%2FD2r9wiTJm1IxYwpg2xhHqjrp3Deb0A%2FOxQHsbacwBtn2R40SVVdAdEg0bGt1EvjJQMI%2F15b4GOqUBHt9i4rqQHNuhhkdRD19PLFTJPgMC0bIWJgQ9D5uFFgsHnugJHEdY15hS9F3b3SQ%2BVQdvfoPUZgyIFs8dVRnylkiTSHdJYpiF2Sw%2BY%2F8MTuMFnE5TrwDAT%2BHhuXEB4q9zubDxNFuhxnz6pcGVFGM5HrD4WhkwikDLiVwuk%2F7mw9G9rQ%2BPm4CtipMQvIHdF3owPR4Yjtq2rnfxO1MFiaKEkG%2BTBs%2FX&X-Amz-Signature=bf1929696b9d01830e8b41558a4e18b8ce6fbc5671ade2d1c03daef8951eb481&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
