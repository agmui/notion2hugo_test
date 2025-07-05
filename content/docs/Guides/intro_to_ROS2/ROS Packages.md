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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXLGS7CO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIEv%2BlyfH6kaX0lQo85ERq6KH4UE0rALfuQ8YgfujVLFNAiEAr2RdKaQS68VBddR9jbhG5ynAkplWdwEDc0qubRAT1FEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOZQkVdTfBdMrQ1M%2FSrcA8sODsbaWIOnd6M%2FMZmJsumoxTuxSAwG6guEDfJGf%2F%2F2Q1iU6dSl%2F29SljS4%2BGZ%2Bv8735BdW4DsCZBHRi9dmROEl1%2BHn8mwyGNzC8DaioRXU98jNEoIQ8ddn1H9UqTfwceL%2B6Cyvp9GqSS5kdzUkIewmbSviE%2B5aIZSYlF4x9bDEcQh8Q5psKn2XP5vKBy2k29sSnMZe%2FO0yPOY%2FBkdsj7b4OLsBptgVRSnTzfwsHHTGx3WsBD9rMyY6PM9QVgTTfP3i0ppoH%2BhXPZO9e%2BXxbxmn9JeMQtvnUKV2TOZ8kUyGzwkjfkS523qKNNqJpgl08LMm1Q5zKWVz8C5F8RIKAF2uHFRGLr%2B6rFoS%2By43EkI5wCoUnRVpkVT2ZjhOlM9KBXxfbjooJ8bhzhDPgRyLV%2BYrIZ6brb5Rofr9RUi8SE1i0ltC7wm2Mo5KZlEmxfgZxRnqYUsJjpFh%2BayRcFwpV5rvO55%2F6%2B9AqXDxG%2BxphxDIXH%2FerxgbjK2a3%2BEcYsOitKLOvUJSRnJGzdqwIvKoib5PsYufJWFe90djxEBIlf21JuOMUf8J0vfbhkmItoAFl4KLvugvQgzqY%2Bn%2BXolM%2F3dDDpmh6Y%2Fp%2FfLR1Fa6VMEwLPEiVNbZuwxN0NchMMnUpMMGOqUBYgypu%2F1rYUYkjH9dOAVs743CI8bY%2FtnPyw3L9H4TJSOzxc%2BAb2yyD0sKkzmJ44S2l7sdohpXAV7%2FBASRLqxhYlb2AE6pT8xyF%2BIfjlEhok%2FfeijoSC9qV4HVQsMtCJOWViF%2FjkVRydsfmRyedD2WSV%2FD4UYtAfNgy8%2BFOv7QnuJrlyIJXlsW3RjUrAypbvLvPfyJQOrsTH298ryk73wx0xFFFkNr&X-Amz-Signature=1e4028f3d4cd4c803913f86d8400a4d52fddbea898f17fffdffff1b71f58169d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXLGS7CO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIEv%2BlyfH6kaX0lQo85ERq6KH4UE0rALfuQ8YgfujVLFNAiEAr2RdKaQS68VBddR9jbhG5ynAkplWdwEDc0qubRAT1FEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOZQkVdTfBdMrQ1M%2FSrcA8sODsbaWIOnd6M%2FMZmJsumoxTuxSAwG6guEDfJGf%2F%2F2Q1iU6dSl%2F29SljS4%2BGZ%2Bv8735BdW4DsCZBHRi9dmROEl1%2BHn8mwyGNzC8DaioRXU98jNEoIQ8ddn1H9UqTfwceL%2B6Cyvp9GqSS5kdzUkIewmbSviE%2B5aIZSYlF4x9bDEcQh8Q5psKn2XP5vKBy2k29sSnMZe%2FO0yPOY%2FBkdsj7b4OLsBptgVRSnTzfwsHHTGx3WsBD9rMyY6PM9QVgTTfP3i0ppoH%2BhXPZO9e%2BXxbxmn9JeMQtvnUKV2TOZ8kUyGzwkjfkS523qKNNqJpgl08LMm1Q5zKWVz8C5F8RIKAF2uHFRGLr%2B6rFoS%2By43EkI5wCoUnRVpkVT2ZjhOlM9KBXxfbjooJ8bhzhDPgRyLV%2BYrIZ6brb5Rofr9RUi8SE1i0ltC7wm2Mo5KZlEmxfgZxRnqYUsJjpFh%2BayRcFwpV5rvO55%2F6%2B9AqXDxG%2BxphxDIXH%2FerxgbjK2a3%2BEcYsOitKLOvUJSRnJGzdqwIvKoib5PsYufJWFe90djxEBIlf21JuOMUf8J0vfbhkmItoAFl4KLvugvQgzqY%2Bn%2BXolM%2F3dDDpmh6Y%2Fp%2FfLR1Fa6VMEwLPEiVNbZuwxN0NchMMnUpMMGOqUBYgypu%2F1rYUYkjH9dOAVs743CI8bY%2FtnPyw3L9H4TJSOzxc%2BAb2yyD0sKkzmJ44S2l7sdohpXAV7%2FBASRLqxhYlb2AE6pT8xyF%2BIfjlEhok%2FfeijoSC9qV4HVQsMtCJOWViF%2FjkVRydsfmRyedD2WSV%2FD4UYtAfNgy8%2BFOv7QnuJrlyIJXlsW3RjUrAypbvLvPfyJQOrsTH298ryk73wx0xFFFkNr&X-Amz-Signature=944901d8d1f1863052037e93c583f3b9ef80274b2727ff0a6f2bb9c4e1611326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXLGS7CO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIEv%2BlyfH6kaX0lQo85ERq6KH4UE0rALfuQ8YgfujVLFNAiEAr2RdKaQS68VBddR9jbhG5ynAkplWdwEDc0qubRAT1FEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOZQkVdTfBdMrQ1M%2FSrcA8sODsbaWIOnd6M%2FMZmJsumoxTuxSAwG6guEDfJGf%2F%2F2Q1iU6dSl%2F29SljS4%2BGZ%2Bv8735BdW4DsCZBHRi9dmROEl1%2BHn8mwyGNzC8DaioRXU98jNEoIQ8ddn1H9UqTfwceL%2B6Cyvp9GqSS5kdzUkIewmbSviE%2B5aIZSYlF4x9bDEcQh8Q5psKn2XP5vKBy2k29sSnMZe%2FO0yPOY%2FBkdsj7b4OLsBptgVRSnTzfwsHHTGx3WsBD9rMyY6PM9QVgTTfP3i0ppoH%2BhXPZO9e%2BXxbxmn9JeMQtvnUKV2TOZ8kUyGzwkjfkS523qKNNqJpgl08LMm1Q5zKWVz8C5F8RIKAF2uHFRGLr%2B6rFoS%2By43EkI5wCoUnRVpkVT2ZjhOlM9KBXxfbjooJ8bhzhDPgRyLV%2BYrIZ6brb5Rofr9RUi8SE1i0ltC7wm2Mo5KZlEmxfgZxRnqYUsJjpFh%2BayRcFwpV5rvO55%2F6%2B9AqXDxG%2BxphxDIXH%2FerxgbjK2a3%2BEcYsOitKLOvUJSRnJGzdqwIvKoib5PsYufJWFe90djxEBIlf21JuOMUf8J0vfbhkmItoAFl4KLvugvQgzqY%2Bn%2BXolM%2F3dDDpmh6Y%2Fp%2FfLR1Fa6VMEwLPEiVNbZuwxN0NchMMnUpMMGOqUBYgypu%2F1rYUYkjH9dOAVs743CI8bY%2FtnPyw3L9H4TJSOzxc%2BAb2yyD0sKkzmJ44S2l7sdohpXAV7%2FBASRLqxhYlb2AE6pT8xyF%2BIfjlEhok%2FfeijoSC9qV4HVQsMtCJOWViF%2FjkVRydsfmRyedD2WSV%2FD4UYtAfNgy8%2BFOv7QnuJrlyIJXlsW3RjUrAypbvLvPfyJQOrsTH298ryk73wx0xFFFkNr&X-Amz-Signature=c88e1fc8f5fc29a1ba518eef037ec6fd7f86e731238128fb7e4f4d6c69180b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXLGS7CO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIEv%2BlyfH6kaX0lQo85ERq6KH4UE0rALfuQ8YgfujVLFNAiEAr2RdKaQS68VBddR9jbhG5ynAkplWdwEDc0qubRAT1FEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOZQkVdTfBdMrQ1M%2FSrcA8sODsbaWIOnd6M%2FMZmJsumoxTuxSAwG6guEDfJGf%2F%2F2Q1iU6dSl%2F29SljS4%2BGZ%2Bv8735BdW4DsCZBHRi9dmROEl1%2BHn8mwyGNzC8DaioRXU98jNEoIQ8ddn1H9UqTfwceL%2B6Cyvp9GqSS5kdzUkIewmbSviE%2B5aIZSYlF4x9bDEcQh8Q5psKn2XP5vKBy2k29sSnMZe%2FO0yPOY%2FBkdsj7b4OLsBptgVRSnTzfwsHHTGx3WsBD9rMyY6PM9QVgTTfP3i0ppoH%2BhXPZO9e%2BXxbxmn9JeMQtvnUKV2TOZ8kUyGzwkjfkS523qKNNqJpgl08LMm1Q5zKWVz8C5F8RIKAF2uHFRGLr%2B6rFoS%2By43EkI5wCoUnRVpkVT2ZjhOlM9KBXxfbjooJ8bhzhDPgRyLV%2BYrIZ6brb5Rofr9RUi8SE1i0ltC7wm2Mo5KZlEmxfgZxRnqYUsJjpFh%2BayRcFwpV5rvO55%2F6%2B9AqXDxG%2BxphxDIXH%2FerxgbjK2a3%2BEcYsOitKLOvUJSRnJGzdqwIvKoib5PsYufJWFe90djxEBIlf21JuOMUf8J0vfbhkmItoAFl4KLvugvQgzqY%2Bn%2BXolM%2F3dDDpmh6Y%2Fp%2FfLR1Fa6VMEwLPEiVNbZuwxN0NchMMnUpMMGOqUBYgypu%2F1rYUYkjH9dOAVs743CI8bY%2FtnPyw3L9H4TJSOzxc%2BAb2yyD0sKkzmJ44S2l7sdohpXAV7%2FBASRLqxhYlb2AE6pT8xyF%2BIfjlEhok%2FfeijoSC9qV4HVQsMtCJOWViF%2FjkVRydsfmRyedD2WSV%2FD4UYtAfNgy8%2BFOv7QnuJrlyIJXlsW3RjUrAypbvLvPfyJQOrsTH298ryk73wx0xFFFkNr&X-Amz-Signature=209c4d87cc49b1c4f7479513fe03e7ddc2c60453d220463c60f2185e5b684bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXLGS7CO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIEv%2BlyfH6kaX0lQo85ERq6KH4UE0rALfuQ8YgfujVLFNAiEAr2RdKaQS68VBddR9jbhG5ynAkplWdwEDc0qubRAT1FEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOZQkVdTfBdMrQ1M%2FSrcA8sODsbaWIOnd6M%2FMZmJsumoxTuxSAwG6guEDfJGf%2F%2F2Q1iU6dSl%2F29SljS4%2BGZ%2Bv8735BdW4DsCZBHRi9dmROEl1%2BHn8mwyGNzC8DaioRXU98jNEoIQ8ddn1H9UqTfwceL%2B6Cyvp9GqSS5kdzUkIewmbSviE%2B5aIZSYlF4x9bDEcQh8Q5psKn2XP5vKBy2k29sSnMZe%2FO0yPOY%2FBkdsj7b4OLsBptgVRSnTzfwsHHTGx3WsBD9rMyY6PM9QVgTTfP3i0ppoH%2BhXPZO9e%2BXxbxmn9JeMQtvnUKV2TOZ8kUyGzwkjfkS523qKNNqJpgl08LMm1Q5zKWVz8C5F8RIKAF2uHFRGLr%2B6rFoS%2By43EkI5wCoUnRVpkVT2ZjhOlM9KBXxfbjooJ8bhzhDPgRyLV%2BYrIZ6brb5Rofr9RUi8SE1i0ltC7wm2Mo5KZlEmxfgZxRnqYUsJjpFh%2BayRcFwpV5rvO55%2F6%2B9AqXDxG%2BxphxDIXH%2FerxgbjK2a3%2BEcYsOitKLOvUJSRnJGzdqwIvKoib5PsYufJWFe90djxEBIlf21JuOMUf8J0vfbhkmItoAFl4KLvugvQgzqY%2Bn%2BXolM%2F3dDDpmh6Y%2Fp%2FfLR1Fa6VMEwLPEiVNbZuwxN0NchMMnUpMMGOqUBYgypu%2F1rYUYkjH9dOAVs743CI8bY%2FtnPyw3L9H4TJSOzxc%2BAb2yyD0sKkzmJ44S2l7sdohpXAV7%2FBASRLqxhYlb2AE6pT8xyF%2BIfjlEhok%2FfeijoSC9qV4HVQsMtCJOWViF%2FjkVRydsfmRyedD2WSV%2FD4UYtAfNgy8%2BFOv7QnuJrlyIJXlsW3RjUrAypbvLvPfyJQOrsTH298ryk73wx0xFFFkNr&X-Amz-Signature=d8a81b876c20870e229d8907406257cb2c331c41d24bfbc3687537cd916296a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXLGS7CO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIEv%2BlyfH6kaX0lQo85ERq6KH4UE0rALfuQ8YgfujVLFNAiEAr2RdKaQS68VBddR9jbhG5ynAkplWdwEDc0qubRAT1FEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOZQkVdTfBdMrQ1M%2FSrcA8sODsbaWIOnd6M%2FMZmJsumoxTuxSAwG6guEDfJGf%2F%2F2Q1iU6dSl%2F29SljS4%2BGZ%2Bv8735BdW4DsCZBHRi9dmROEl1%2BHn8mwyGNzC8DaioRXU98jNEoIQ8ddn1H9UqTfwceL%2B6Cyvp9GqSS5kdzUkIewmbSviE%2B5aIZSYlF4x9bDEcQh8Q5psKn2XP5vKBy2k29sSnMZe%2FO0yPOY%2FBkdsj7b4OLsBptgVRSnTzfwsHHTGx3WsBD9rMyY6PM9QVgTTfP3i0ppoH%2BhXPZO9e%2BXxbxmn9JeMQtvnUKV2TOZ8kUyGzwkjfkS523qKNNqJpgl08LMm1Q5zKWVz8C5F8RIKAF2uHFRGLr%2B6rFoS%2By43EkI5wCoUnRVpkVT2ZjhOlM9KBXxfbjooJ8bhzhDPgRyLV%2BYrIZ6brb5Rofr9RUi8SE1i0ltC7wm2Mo5KZlEmxfgZxRnqYUsJjpFh%2BayRcFwpV5rvO55%2F6%2B9AqXDxG%2BxphxDIXH%2FerxgbjK2a3%2BEcYsOitKLOvUJSRnJGzdqwIvKoib5PsYufJWFe90djxEBIlf21JuOMUf8J0vfbhkmItoAFl4KLvugvQgzqY%2Bn%2BXolM%2F3dDDpmh6Y%2Fp%2FfLR1Fa6VMEwLPEiVNbZuwxN0NchMMnUpMMGOqUBYgypu%2F1rYUYkjH9dOAVs743CI8bY%2FtnPyw3L9H4TJSOzxc%2BAb2yyD0sKkzmJ44S2l7sdohpXAV7%2FBASRLqxhYlb2AE6pT8xyF%2BIfjlEhok%2FfeijoSC9qV4HVQsMtCJOWViF%2FjkVRydsfmRyedD2WSV%2FD4UYtAfNgy8%2BFOv7QnuJrlyIJXlsW3RjUrAypbvLvPfyJQOrsTH298ryk73wx0xFFFkNr&X-Amz-Signature=d6e915847fb38a2737d992ee5f9ed70e517179274e7bf97a659285a5695c7833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXLGS7CO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIEv%2BlyfH6kaX0lQo85ERq6KH4UE0rALfuQ8YgfujVLFNAiEAr2RdKaQS68VBddR9jbhG5ynAkplWdwEDc0qubRAT1FEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOZQkVdTfBdMrQ1M%2FSrcA8sODsbaWIOnd6M%2FMZmJsumoxTuxSAwG6guEDfJGf%2F%2F2Q1iU6dSl%2F29SljS4%2BGZ%2Bv8735BdW4DsCZBHRi9dmROEl1%2BHn8mwyGNzC8DaioRXU98jNEoIQ8ddn1H9UqTfwceL%2B6Cyvp9GqSS5kdzUkIewmbSviE%2B5aIZSYlF4x9bDEcQh8Q5psKn2XP5vKBy2k29sSnMZe%2FO0yPOY%2FBkdsj7b4OLsBptgVRSnTzfwsHHTGx3WsBD9rMyY6PM9QVgTTfP3i0ppoH%2BhXPZO9e%2BXxbxmn9JeMQtvnUKV2TOZ8kUyGzwkjfkS523qKNNqJpgl08LMm1Q5zKWVz8C5F8RIKAF2uHFRGLr%2B6rFoS%2By43EkI5wCoUnRVpkVT2ZjhOlM9KBXxfbjooJ8bhzhDPgRyLV%2BYrIZ6brb5Rofr9RUi8SE1i0ltC7wm2Mo5KZlEmxfgZxRnqYUsJjpFh%2BayRcFwpV5rvO55%2F6%2B9AqXDxG%2BxphxDIXH%2FerxgbjK2a3%2BEcYsOitKLOvUJSRnJGzdqwIvKoib5PsYufJWFe90djxEBIlf21JuOMUf8J0vfbhkmItoAFl4KLvugvQgzqY%2Bn%2BXolM%2F3dDDpmh6Y%2Fp%2FfLR1Fa6VMEwLPEiVNbZuwxN0NchMMnUpMMGOqUBYgypu%2F1rYUYkjH9dOAVs743CI8bY%2FtnPyw3L9H4TJSOzxc%2BAb2yyD0sKkzmJ44S2l7sdohpXAV7%2FBASRLqxhYlb2AE6pT8xyF%2BIfjlEhok%2FfeijoSC9qV4HVQsMtCJOWViF%2FjkVRydsfmRyedD2WSV%2FD4UYtAfNgy8%2BFOv7QnuJrlyIJXlsW3RjUrAypbvLvPfyJQOrsTH298ryk73wx0xFFFkNr&X-Amz-Signature=559a046aa01cb315a93087c91576ae613ae7072d4fd988afa329e11460a0d36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
