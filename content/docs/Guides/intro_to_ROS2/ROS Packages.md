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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNZXT45%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIE0EAW3ofgtHlb91D2pOFr7NuPaDtUkTAiW9hcOlYa1aAiAk1BulZaMrs5PtyfecbuJQh8rPhh2a18D7as0CaVIWViqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUuYkyxMCTkVNvDdKtwDTKwHYHR0vWsFuO76PtvfqiYKzyv2Yn9I7OFLKWXCZP5SEu1rpBXh%2B6ipWjl6W5U6qx42NOOnmTXBiE1L2TuNDKvchEP0k1RIo7iUdNXIXeFg3FC3MLZruTsn0iOvy6m9ZmhGKOxMIzvBZ3VvCIrjGQvz3NUdox1jPz1tlytBvnCXsLYSk7CtGPp66w2w5vAzgsOcS8pv5aMFyQJQA2C2LYQzWJeCUpcUSjYNdC8uZA3Vyz6eESTengdIf5%2FZeRFNylFmuQtJI6ZyN1Mp43NbgIRDNXnA4JkPB2x10EYlBEyThitb6KPskAwc2VvcD5D4eCVO4FvWHTaAHneuWKAauwIMuT7CRgykYetIZDSIYjD5iYFMlXLrUTQf2K%2BGx1JCbvN%2BskdRyYouMestFAfItpRnVWIWbmA5TkS5LPEfjIORUBOeLukicUWIf6%2FeF3AzwNa2%2FQS%2Fch2Y2f94C51cxjEG5hwG9fzvQOhOd9chAaUz6zuKTEHevX0luQYnit6T92ArqcXKmxRtRbtumgAqOo66lI29rkCtUVgE68wA8xOiVzr7THdjX5YjZ5Af5vzOqgVRVxV87N6BUVXZtRzDBYXKJIOsbvONwqR2t5nG%2BBQOVP2SbdxWc8nVk%2Bcwhu%2F7vgY6pgE2HjEUNxisrLxUbwRRT4t9RC04Xngeh5v2wfHwuI8%2Bvjw0rQL5FqZB7clD3tPSPP7Unubg%2BGjNOcc8J95VHJuuUOj58fRNMUOKfntSgV489vyM6HOCtPDLJpFCsVS6nSI4zdJadPCbxeC2wSeST4vR42ECf5renlWKAzl1YeZoXsVAqbwdS7vFFPp1uXJzOAu%2F9MMgRsVXlW5wDUNIASw21iztbgcP&X-Amz-Signature=6ee52f6935444cda4158499ae1f9653a3907d48fb8c39f4af30b452d35906404&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNZXT45%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIE0EAW3ofgtHlb91D2pOFr7NuPaDtUkTAiW9hcOlYa1aAiAk1BulZaMrs5PtyfecbuJQh8rPhh2a18D7as0CaVIWViqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUuYkyxMCTkVNvDdKtwDTKwHYHR0vWsFuO76PtvfqiYKzyv2Yn9I7OFLKWXCZP5SEu1rpBXh%2B6ipWjl6W5U6qx42NOOnmTXBiE1L2TuNDKvchEP0k1RIo7iUdNXIXeFg3FC3MLZruTsn0iOvy6m9ZmhGKOxMIzvBZ3VvCIrjGQvz3NUdox1jPz1tlytBvnCXsLYSk7CtGPp66w2w5vAzgsOcS8pv5aMFyQJQA2C2LYQzWJeCUpcUSjYNdC8uZA3Vyz6eESTengdIf5%2FZeRFNylFmuQtJI6ZyN1Mp43NbgIRDNXnA4JkPB2x10EYlBEyThitb6KPskAwc2VvcD5D4eCVO4FvWHTaAHneuWKAauwIMuT7CRgykYetIZDSIYjD5iYFMlXLrUTQf2K%2BGx1JCbvN%2BskdRyYouMestFAfItpRnVWIWbmA5TkS5LPEfjIORUBOeLukicUWIf6%2FeF3AzwNa2%2FQS%2Fch2Y2f94C51cxjEG5hwG9fzvQOhOd9chAaUz6zuKTEHevX0luQYnit6T92ArqcXKmxRtRbtumgAqOo66lI29rkCtUVgE68wA8xOiVzr7THdjX5YjZ5Af5vzOqgVRVxV87N6BUVXZtRzDBYXKJIOsbvONwqR2t5nG%2BBQOVP2SbdxWc8nVk%2Bcwhu%2F7vgY6pgE2HjEUNxisrLxUbwRRT4t9RC04Xngeh5v2wfHwuI8%2Bvjw0rQL5FqZB7clD3tPSPP7Unubg%2BGjNOcc8J95VHJuuUOj58fRNMUOKfntSgV489vyM6HOCtPDLJpFCsVS6nSI4zdJadPCbxeC2wSeST4vR42ECf5renlWKAzl1YeZoXsVAqbwdS7vFFPp1uXJzOAu%2F9MMgRsVXlW5wDUNIASw21iztbgcP&X-Amz-Signature=649aac75f09397356cae705c839db1c115e66d69eceb631857e536ee856b2b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNZXT45%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIE0EAW3ofgtHlb91D2pOFr7NuPaDtUkTAiW9hcOlYa1aAiAk1BulZaMrs5PtyfecbuJQh8rPhh2a18D7as0CaVIWViqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUuYkyxMCTkVNvDdKtwDTKwHYHR0vWsFuO76PtvfqiYKzyv2Yn9I7OFLKWXCZP5SEu1rpBXh%2B6ipWjl6W5U6qx42NOOnmTXBiE1L2TuNDKvchEP0k1RIo7iUdNXIXeFg3FC3MLZruTsn0iOvy6m9ZmhGKOxMIzvBZ3VvCIrjGQvz3NUdox1jPz1tlytBvnCXsLYSk7CtGPp66w2w5vAzgsOcS8pv5aMFyQJQA2C2LYQzWJeCUpcUSjYNdC8uZA3Vyz6eESTengdIf5%2FZeRFNylFmuQtJI6ZyN1Mp43NbgIRDNXnA4JkPB2x10EYlBEyThitb6KPskAwc2VvcD5D4eCVO4FvWHTaAHneuWKAauwIMuT7CRgykYetIZDSIYjD5iYFMlXLrUTQf2K%2BGx1JCbvN%2BskdRyYouMestFAfItpRnVWIWbmA5TkS5LPEfjIORUBOeLukicUWIf6%2FeF3AzwNa2%2FQS%2Fch2Y2f94C51cxjEG5hwG9fzvQOhOd9chAaUz6zuKTEHevX0luQYnit6T92ArqcXKmxRtRbtumgAqOo66lI29rkCtUVgE68wA8xOiVzr7THdjX5YjZ5Af5vzOqgVRVxV87N6BUVXZtRzDBYXKJIOsbvONwqR2t5nG%2BBQOVP2SbdxWc8nVk%2Bcwhu%2F7vgY6pgE2HjEUNxisrLxUbwRRT4t9RC04Xngeh5v2wfHwuI8%2Bvjw0rQL5FqZB7clD3tPSPP7Unubg%2BGjNOcc8J95VHJuuUOj58fRNMUOKfntSgV489vyM6HOCtPDLJpFCsVS6nSI4zdJadPCbxeC2wSeST4vR42ECf5renlWKAzl1YeZoXsVAqbwdS7vFFPp1uXJzOAu%2F9MMgRsVXlW5wDUNIASw21iztbgcP&X-Amz-Signature=51f2cc982c08430aaca9e83c8b95319fc8ca5317dc28c69f70c96f68d9111c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNZXT45%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIE0EAW3ofgtHlb91D2pOFr7NuPaDtUkTAiW9hcOlYa1aAiAk1BulZaMrs5PtyfecbuJQh8rPhh2a18D7as0CaVIWViqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUuYkyxMCTkVNvDdKtwDTKwHYHR0vWsFuO76PtvfqiYKzyv2Yn9I7OFLKWXCZP5SEu1rpBXh%2B6ipWjl6W5U6qx42NOOnmTXBiE1L2TuNDKvchEP0k1RIo7iUdNXIXeFg3FC3MLZruTsn0iOvy6m9ZmhGKOxMIzvBZ3VvCIrjGQvz3NUdox1jPz1tlytBvnCXsLYSk7CtGPp66w2w5vAzgsOcS8pv5aMFyQJQA2C2LYQzWJeCUpcUSjYNdC8uZA3Vyz6eESTengdIf5%2FZeRFNylFmuQtJI6ZyN1Mp43NbgIRDNXnA4JkPB2x10EYlBEyThitb6KPskAwc2VvcD5D4eCVO4FvWHTaAHneuWKAauwIMuT7CRgykYetIZDSIYjD5iYFMlXLrUTQf2K%2BGx1JCbvN%2BskdRyYouMestFAfItpRnVWIWbmA5TkS5LPEfjIORUBOeLukicUWIf6%2FeF3AzwNa2%2FQS%2Fch2Y2f94C51cxjEG5hwG9fzvQOhOd9chAaUz6zuKTEHevX0luQYnit6T92ArqcXKmxRtRbtumgAqOo66lI29rkCtUVgE68wA8xOiVzr7THdjX5YjZ5Af5vzOqgVRVxV87N6BUVXZtRzDBYXKJIOsbvONwqR2t5nG%2BBQOVP2SbdxWc8nVk%2Bcwhu%2F7vgY6pgE2HjEUNxisrLxUbwRRT4t9RC04Xngeh5v2wfHwuI8%2Bvjw0rQL5FqZB7clD3tPSPP7Unubg%2BGjNOcc8J95VHJuuUOj58fRNMUOKfntSgV489vyM6HOCtPDLJpFCsVS6nSI4zdJadPCbxeC2wSeST4vR42ECf5renlWKAzl1YeZoXsVAqbwdS7vFFPp1uXJzOAu%2F9MMgRsVXlW5wDUNIASw21iztbgcP&X-Amz-Signature=8701f9f2594d5b42850c58dc173db4a48eb3ef6207cc4f282e553075f56fa6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNZXT45%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIE0EAW3ofgtHlb91D2pOFr7NuPaDtUkTAiW9hcOlYa1aAiAk1BulZaMrs5PtyfecbuJQh8rPhh2a18D7as0CaVIWViqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUuYkyxMCTkVNvDdKtwDTKwHYHR0vWsFuO76PtvfqiYKzyv2Yn9I7OFLKWXCZP5SEu1rpBXh%2B6ipWjl6W5U6qx42NOOnmTXBiE1L2TuNDKvchEP0k1RIo7iUdNXIXeFg3FC3MLZruTsn0iOvy6m9ZmhGKOxMIzvBZ3VvCIrjGQvz3NUdox1jPz1tlytBvnCXsLYSk7CtGPp66w2w5vAzgsOcS8pv5aMFyQJQA2C2LYQzWJeCUpcUSjYNdC8uZA3Vyz6eESTengdIf5%2FZeRFNylFmuQtJI6ZyN1Mp43NbgIRDNXnA4JkPB2x10EYlBEyThitb6KPskAwc2VvcD5D4eCVO4FvWHTaAHneuWKAauwIMuT7CRgykYetIZDSIYjD5iYFMlXLrUTQf2K%2BGx1JCbvN%2BskdRyYouMestFAfItpRnVWIWbmA5TkS5LPEfjIORUBOeLukicUWIf6%2FeF3AzwNa2%2FQS%2Fch2Y2f94C51cxjEG5hwG9fzvQOhOd9chAaUz6zuKTEHevX0luQYnit6T92ArqcXKmxRtRbtumgAqOo66lI29rkCtUVgE68wA8xOiVzr7THdjX5YjZ5Af5vzOqgVRVxV87N6BUVXZtRzDBYXKJIOsbvONwqR2t5nG%2BBQOVP2SbdxWc8nVk%2Bcwhu%2F7vgY6pgE2HjEUNxisrLxUbwRRT4t9RC04Xngeh5v2wfHwuI8%2Bvjw0rQL5FqZB7clD3tPSPP7Unubg%2BGjNOcc8J95VHJuuUOj58fRNMUOKfntSgV489vyM6HOCtPDLJpFCsVS6nSI4zdJadPCbxeC2wSeST4vR42ECf5renlWKAzl1YeZoXsVAqbwdS7vFFPp1uXJzOAu%2F9MMgRsVXlW5wDUNIASw21iztbgcP&X-Amz-Signature=a6cec26c35eced72fc6905373c3787921519456d7c7c2ce3185bacfc946e0f58&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNZXT45%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIE0EAW3ofgtHlb91D2pOFr7NuPaDtUkTAiW9hcOlYa1aAiAk1BulZaMrs5PtyfecbuJQh8rPhh2a18D7as0CaVIWViqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUuYkyxMCTkVNvDdKtwDTKwHYHR0vWsFuO76PtvfqiYKzyv2Yn9I7OFLKWXCZP5SEu1rpBXh%2B6ipWjl6W5U6qx42NOOnmTXBiE1L2TuNDKvchEP0k1RIo7iUdNXIXeFg3FC3MLZruTsn0iOvy6m9ZmhGKOxMIzvBZ3VvCIrjGQvz3NUdox1jPz1tlytBvnCXsLYSk7CtGPp66w2w5vAzgsOcS8pv5aMFyQJQA2C2LYQzWJeCUpcUSjYNdC8uZA3Vyz6eESTengdIf5%2FZeRFNylFmuQtJI6ZyN1Mp43NbgIRDNXnA4JkPB2x10EYlBEyThitb6KPskAwc2VvcD5D4eCVO4FvWHTaAHneuWKAauwIMuT7CRgykYetIZDSIYjD5iYFMlXLrUTQf2K%2BGx1JCbvN%2BskdRyYouMestFAfItpRnVWIWbmA5TkS5LPEfjIORUBOeLukicUWIf6%2FeF3AzwNa2%2FQS%2Fch2Y2f94C51cxjEG5hwG9fzvQOhOd9chAaUz6zuKTEHevX0luQYnit6T92ArqcXKmxRtRbtumgAqOo66lI29rkCtUVgE68wA8xOiVzr7THdjX5YjZ5Af5vzOqgVRVxV87N6BUVXZtRzDBYXKJIOsbvONwqR2t5nG%2BBQOVP2SbdxWc8nVk%2Bcwhu%2F7vgY6pgE2HjEUNxisrLxUbwRRT4t9RC04Xngeh5v2wfHwuI8%2Bvjw0rQL5FqZB7clD3tPSPP7Unubg%2BGjNOcc8J95VHJuuUOj58fRNMUOKfntSgV489vyM6HOCtPDLJpFCsVS6nSI4zdJadPCbxeC2wSeST4vR42ECf5renlWKAzl1YeZoXsVAqbwdS7vFFPp1uXJzOAu%2F9MMgRsVXlW5wDUNIASw21iztbgcP&X-Amz-Signature=fb4024981725e74f56591065ceda384cb1a4e1629a8d7a48491f4983d307f003&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNZXT45%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIE0EAW3ofgtHlb91D2pOFr7NuPaDtUkTAiW9hcOlYa1aAiAk1BulZaMrs5PtyfecbuJQh8rPhh2a18D7as0CaVIWViqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUuYkyxMCTkVNvDdKtwDTKwHYHR0vWsFuO76PtvfqiYKzyv2Yn9I7OFLKWXCZP5SEu1rpBXh%2B6ipWjl6W5U6qx42NOOnmTXBiE1L2TuNDKvchEP0k1RIo7iUdNXIXeFg3FC3MLZruTsn0iOvy6m9ZmhGKOxMIzvBZ3VvCIrjGQvz3NUdox1jPz1tlytBvnCXsLYSk7CtGPp66w2w5vAzgsOcS8pv5aMFyQJQA2C2LYQzWJeCUpcUSjYNdC8uZA3Vyz6eESTengdIf5%2FZeRFNylFmuQtJI6ZyN1Mp43NbgIRDNXnA4JkPB2x10EYlBEyThitb6KPskAwc2VvcD5D4eCVO4FvWHTaAHneuWKAauwIMuT7CRgykYetIZDSIYjD5iYFMlXLrUTQf2K%2BGx1JCbvN%2BskdRyYouMestFAfItpRnVWIWbmA5TkS5LPEfjIORUBOeLukicUWIf6%2FeF3AzwNa2%2FQS%2Fch2Y2f94C51cxjEG5hwG9fzvQOhOd9chAaUz6zuKTEHevX0luQYnit6T92ArqcXKmxRtRbtumgAqOo66lI29rkCtUVgE68wA8xOiVzr7THdjX5YjZ5Af5vzOqgVRVxV87N6BUVXZtRzDBYXKJIOsbvONwqR2t5nG%2BBQOVP2SbdxWc8nVk%2Bcwhu%2F7vgY6pgE2HjEUNxisrLxUbwRRT4t9RC04Xngeh5v2wfHwuI8%2Bvjw0rQL5FqZB7clD3tPSPP7Unubg%2BGjNOcc8J95VHJuuUOj58fRNMUOKfntSgV489vyM6HOCtPDLJpFCsVS6nSI4zdJadPCbxeC2wSeST4vR42ECf5renlWKAzl1YeZoXsVAqbwdS7vFFPp1uXJzOAu%2F9MMgRsVXlW5wDUNIASw21iztbgcP&X-Amz-Signature=91d2db68ce00975a8719c4b1848cf0a071acc840cd70e1d59c205049293c48d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
