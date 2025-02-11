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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2D2KGR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4oRhKeBf26c%2B5qi7%2FdMpcoeJ2XctxiznaQwhtzJloAAiEAtrCV9cfzB1rhGpKGYLhlJrNJwPgGfj5OYt0QVW5FQtQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtElJoXa15VgH40iyrcA5r4%2B3XAUV547y7JhV10NicRz1ZnMZNtm4U2dPUYeITSWmjz3h7kSveOzKGTe1Mbwy%2FeGx6V%2B4gTQ54M7wwmYjA%2FMzeVzfS9g5gQGREsHTLa7ShPUr7DvLYs1tSCaILZjWbUXqc8%2FBWIoXMlplH7bcXgE2ghbVkd96dD7dgUqPpq8kVpbj5%2FEzYEzGyeXLgFcxt9PJ8j97oDVfzqGx4Iit3FpnR15EGlYqmClFMbrQvxdAYXcS51ophtC09M0pqSIHCH38L0CEnbomZEziaGJ%2FYHIs8vGfDktP1zdaCpKNIpLqDyZxR%2Bp80XmdIHL%2F%2BljQTuLUJyvn%2BWsdZLAK6NHoKQ5e2EFa6zXb450WhiG6AG6fWFYYOLcr5AGr8zdChUGbryuWvGX1L3bUjMGgdbs%2FDCPHMhOfMf4mIff0Xk5xMGPfM6xZWNwwebotpIJ2S6jBHA0h7wfOyKM9bGLR9WW8xEGMg3jlNAeLv0LeVNWPCvHa9zQzC2qnnEo2cqS%2FUxIrWtel3HYadkMm8DlmKlxoEATgSKWPk2A4BK%2FzNGpceuAHlaJLp220U%2B58xXVR7o6ApZ0AqON%2Fa8UV7cByQOyLkOfQQzAqeTVBhoFg2wXUXxixChnt9XVX6PsWfkMPXjq70GOqUBzmBBVv7fRuZbd%2F%2Bs8gzVxPUvjJc6oYlBv7iJ53ac7UL%2Fuxkd0Ot9VQDqtbTVRY3F7MFVL9brNZw%2F9ijxaRjF%2F4ilr%2BS4h7Go8coLBTX4ieiRlegzT2LLEnB5Zb1ADNu4SPIB1YNFVPZynC4nBxiOiDca5WkQrGVYXLUO4pDZZ13v4e7lzgBRWzsNDtYbX1w5mexoA7DylFQhLpAv3xCtSn5cEsFD&X-Amz-Signature=7e9bebe6c19f1dca2120766a6b3fe117817bf55b137c486ece979165b41101a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2D2KGR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4oRhKeBf26c%2B5qi7%2FdMpcoeJ2XctxiznaQwhtzJloAAiEAtrCV9cfzB1rhGpKGYLhlJrNJwPgGfj5OYt0QVW5FQtQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtElJoXa15VgH40iyrcA5r4%2B3XAUV547y7JhV10NicRz1ZnMZNtm4U2dPUYeITSWmjz3h7kSveOzKGTe1Mbwy%2FeGx6V%2B4gTQ54M7wwmYjA%2FMzeVzfS9g5gQGREsHTLa7ShPUr7DvLYs1tSCaILZjWbUXqc8%2FBWIoXMlplH7bcXgE2ghbVkd96dD7dgUqPpq8kVpbj5%2FEzYEzGyeXLgFcxt9PJ8j97oDVfzqGx4Iit3FpnR15EGlYqmClFMbrQvxdAYXcS51ophtC09M0pqSIHCH38L0CEnbomZEziaGJ%2FYHIs8vGfDktP1zdaCpKNIpLqDyZxR%2Bp80XmdIHL%2F%2BljQTuLUJyvn%2BWsdZLAK6NHoKQ5e2EFa6zXb450WhiG6AG6fWFYYOLcr5AGr8zdChUGbryuWvGX1L3bUjMGgdbs%2FDCPHMhOfMf4mIff0Xk5xMGPfM6xZWNwwebotpIJ2S6jBHA0h7wfOyKM9bGLR9WW8xEGMg3jlNAeLv0LeVNWPCvHa9zQzC2qnnEo2cqS%2FUxIrWtel3HYadkMm8DlmKlxoEATgSKWPk2A4BK%2FzNGpceuAHlaJLp220U%2B58xXVR7o6ApZ0AqON%2Fa8UV7cByQOyLkOfQQzAqeTVBhoFg2wXUXxixChnt9XVX6PsWfkMPXjq70GOqUBzmBBVv7fRuZbd%2F%2Bs8gzVxPUvjJc6oYlBv7iJ53ac7UL%2Fuxkd0Ot9VQDqtbTVRY3F7MFVL9brNZw%2F9ijxaRjF%2F4ilr%2BS4h7Go8coLBTX4ieiRlegzT2LLEnB5Zb1ADNu4SPIB1YNFVPZynC4nBxiOiDca5WkQrGVYXLUO4pDZZ13v4e7lzgBRWzsNDtYbX1w5mexoA7DylFQhLpAv3xCtSn5cEsFD&X-Amz-Signature=620cc1d5c91fbfd53d8ab1b67e3b23d6a1dd4c0627264d7982be8775b2f1e332&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2D2KGR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4oRhKeBf26c%2B5qi7%2FdMpcoeJ2XctxiznaQwhtzJloAAiEAtrCV9cfzB1rhGpKGYLhlJrNJwPgGfj5OYt0QVW5FQtQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtElJoXa15VgH40iyrcA5r4%2B3XAUV547y7JhV10NicRz1ZnMZNtm4U2dPUYeITSWmjz3h7kSveOzKGTe1Mbwy%2FeGx6V%2B4gTQ54M7wwmYjA%2FMzeVzfS9g5gQGREsHTLa7ShPUr7DvLYs1tSCaILZjWbUXqc8%2FBWIoXMlplH7bcXgE2ghbVkd96dD7dgUqPpq8kVpbj5%2FEzYEzGyeXLgFcxt9PJ8j97oDVfzqGx4Iit3FpnR15EGlYqmClFMbrQvxdAYXcS51ophtC09M0pqSIHCH38L0CEnbomZEziaGJ%2FYHIs8vGfDktP1zdaCpKNIpLqDyZxR%2Bp80XmdIHL%2F%2BljQTuLUJyvn%2BWsdZLAK6NHoKQ5e2EFa6zXb450WhiG6AG6fWFYYOLcr5AGr8zdChUGbryuWvGX1L3bUjMGgdbs%2FDCPHMhOfMf4mIff0Xk5xMGPfM6xZWNwwebotpIJ2S6jBHA0h7wfOyKM9bGLR9WW8xEGMg3jlNAeLv0LeVNWPCvHa9zQzC2qnnEo2cqS%2FUxIrWtel3HYadkMm8DlmKlxoEATgSKWPk2A4BK%2FzNGpceuAHlaJLp220U%2B58xXVR7o6ApZ0AqON%2Fa8UV7cByQOyLkOfQQzAqeTVBhoFg2wXUXxixChnt9XVX6PsWfkMPXjq70GOqUBzmBBVv7fRuZbd%2F%2Bs8gzVxPUvjJc6oYlBv7iJ53ac7UL%2Fuxkd0Ot9VQDqtbTVRY3F7MFVL9brNZw%2F9ijxaRjF%2F4ilr%2BS4h7Go8coLBTX4ieiRlegzT2LLEnB5Zb1ADNu4SPIB1YNFVPZynC4nBxiOiDca5WkQrGVYXLUO4pDZZ13v4e7lzgBRWzsNDtYbX1w5mexoA7DylFQhLpAv3xCtSn5cEsFD&X-Amz-Signature=97cddfb7cec4a8570c1ecc1eb5ede6d66e697405451b28616fe1dc52eda8ac33&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2D2KGR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4oRhKeBf26c%2B5qi7%2FdMpcoeJ2XctxiznaQwhtzJloAAiEAtrCV9cfzB1rhGpKGYLhlJrNJwPgGfj5OYt0QVW5FQtQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtElJoXa15VgH40iyrcA5r4%2B3XAUV547y7JhV10NicRz1ZnMZNtm4U2dPUYeITSWmjz3h7kSveOzKGTe1Mbwy%2FeGx6V%2B4gTQ54M7wwmYjA%2FMzeVzfS9g5gQGREsHTLa7ShPUr7DvLYs1tSCaILZjWbUXqc8%2FBWIoXMlplH7bcXgE2ghbVkd96dD7dgUqPpq8kVpbj5%2FEzYEzGyeXLgFcxt9PJ8j97oDVfzqGx4Iit3FpnR15EGlYqmClFMbrQvxdAYXcS51ophtC09M0pqSIHCH38L0CEnbomZEziaGJ%2FYHIs8vGfDktP1zdaCpKNIpLqDyZxR%2Bp80XmdIHL%2F%2BljQTuLUJyvn%2BWsdZLAK6NHoKQ5e2EFa6zXb450WhiG6AG6fWFYYOLcr5AGr8zdChUGbryuWvGX1L3bUjMGgdbs%2FDCPHMhOfMf4mIff0Xk5xMGPfM6xZWNwwebotpIJ2S6jBHA0h7wfOyKM9bGLR9WW8xEGMg3jlNAeLv0LeVNWPCvHa9zQzC2qnnEo2cqS%2FUxIrWtel3HYadkMm8DlmKlxoEATgSKWPk2A4BK%2FzNGpceuAHlaJLp220U%2B58xXVR7o6ApZ0AqON%2Fa8UV7cByQOyLkOfQQzAqeTVBhoFg2wXUXxixChnt9XVX6PsWfkMPXjq70GOqUBzmBBVv7fRuZbd%2F%2Bs8gzVxPUvjJc6oYlBv7iJ53ac7UL%2Fuxkd0Ot9VQDqtbTVRY3F7MFVL9brNZw%2F9ijxaRjF%2F4ilr%2BS4h7Go8coLBTX4ieiRlegzT2LLEnB5Zb1ADNu4SPIB1YNFVPZynC4nBxiOiDca5WkQrGVYXLUO4pDZZ13v4e7lzgBRWzsNDtYbX1w5mexoA7DylFQhLpAv3xCtSn5cEsFD&X-Amz-Signature=77f23bee7ce6f5572eb4c38f98ee3e4096dda8e363444c2560f6a5a6cc5d8579&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2D2KGR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4oRhKeBf26c%2B5qi7%2FdMpcoeJ2XctxiznaQwhtzJloAAiEAtrCV9cfzB1rhGpKGYLhlJrNJwPgGfj5OYt0QVW5FQtQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtElJoXa15VgH40iyrcA5r4%2B3XAUV547y7JhV10NicRz1ZnMZNtm4U2dPUYeITSWmjz3h7kSveOzKGTe1Mbwy%2FeGx6V%2B4gTQ54M7wwmYjA%2FMzeVzfS9g5gQGREsHTLa7ShPUr7DvLYs1tSCaILZjWbUXqc8%2FBWIoXMlplH7bcXgE2ghbVkd96dD7dgUqPpq8kVpbj5%2FEzYEzGyeXLgFcxt9PJ8j97oDVfzqGx4Iit3FpnR15EGlYqmClFMbrQvxdAYXcS51ophtC09M0pqSIHCH38L0CEnbomZEziaGJ%2FYHIs8vGfDktP1zdaCpKNIpLqDyZxR%2Bp80XmdIHL%2F%2BljQTuLUJyvn%2BWsdZLAK6NHoKQ5e2EFa6zXb450WhiG6AG6fWFYYOLcr5AGr8zdChUGbryuWvGX1L3bUjMGgdbs%2FDCPHMhOfMf4mIff0Xk5xMGPfM6xZWNwwebotpIJ2S6jBHA0h7wfOyKM9bGLR9WW8xEGMg3jlNAeLv0LeVNWPCvHa9zQzC2qnnEo2cqS%2FUxIrWtel3HYadkMm8DlmKlxoEATgSKWPk2A4BK%2FzNGpceuAHlaJLp220U%2B58xXVR7o6ApZ0AqON%2Fa8UV7cByQOyLkOfQQzAqeTVBhoFg2wXUXxixChnt9XVX6PsWfkMPXjq70GOqUBzmBBVv7fRuZbd%2F%2Bs8gzVxPUvjJc6oYlBv7iJ53ac7UL%2Fuxkd0Ot9VQDqtbTVRY3F7MFVL9brNZw%2F9ijxaRjF%2F4ilr%2BS4h7Go8coLBTX4ieiRlegzT2LLEnB5Zb1ADNu4SPIB1YNFVPZynC4nBxiOiDca5WkQrGVYXLUO4pDZZ13v4e7lzgBRWzsNDtYbX1w5mexoA7DylFQhLpAv3xCtSn5cEsFD&X-Amz-Signature=fbb8addd7eaee3678d587efb886154c95f7ebab8c90fd26b01451ae3204ebc74&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2D2KGR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4oRhKeBf26c%2B5qi7%2FdMpcoeJ2XctxiznaQwhtzJloAAiEAtrCV9cfzB1rhGpKGYLhlJrNJwPgGfj5OYt0QVW5FQtQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtElJoXa15VgH40iyrcA5r4%2B3XAUV547y7JhV10NicRz1ZnMZNtm4U2dPUYeITSWmjz3h7kSveOzKGTe1Mbwy%2FeGx6V%2B4gTQ54M7wwmYjA%2FMzeVzfS9g5gQGREsHTLa7ShPUr7DvLYs1tSCaILZjWbUXqc8%2FBWIoXMlplH7bcXgE2ghbVkd96dD7dgUqPpq8kVpbj5%2FEzYEzGyeXLgFcxt9PJ8j97oDVfzqGx4Iit3FpnR15EGlYqmClFMbrQvxdAYXcS51ophtC09M0pqSIHCH38L0CEnbomZEziaGJ%2FYHIs8vGfDktP1zdaCpKNIpLqDyZxR%2Bp80XmdIHL%2F%2BljQTuLUJyvn%2BWsdZLAK6NHoKQ5e2EFa6zXb450WhiG6AG6fWFYYOLcr5AGr8zdChUGbryuWvGX1L3bUjMGgdbs%2FDCPHMhOfMf4mIff0Xk5xMGPfM6xZWNwwebotpIJ2S6jBHA0h7wfOyKM9bGLR9WW8xEGMg3jlNAeLv0LeVNWPCvHa9zQzC2qnnEo2cqS%2FUxIrWtel3HYadkMm8DlmKlxoEATgSKWPk2A4BK%2FzNGpceuAHlaJLp220U%2B58xXVR7o6ApZ0AqON%2Fa8UV7cByQOyLkOfQQzAqeTVBhoFg2wXUXxixChnt9XVX6PsWfkMPXjq70GOqUBzmBBVv7fRuZbd%2F%2Bs8gzVxPUvjJc6oYlBv7iJ53ac7UL%2Fuxkd0Ot9VQDqtbTVRY3F7MFVL9brNZw%2F9ijxaRjF%2F4ilr%2BS4h7Go8coLBTX4ieiRlegzT2LLEnB5Zb1ADNu4SPIB1YNFVPZynC4nBxiOiDca5WkQrGVYXLUO4pDZZ13v4e7lzgBRWzsNDtYbX1w5mexoA7DylFQhLpAv3xCtSn5cEsFD&X-Amz-Signature=d367de5cbfa9f6ebb82bbd0e44579e2b1fce4e25ac17c38f9311e650cef608bc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2D2KGR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4oRhKeBf26c%2B5qi7%2FdMpcoeJ2XctxiznaQwhtzJloAAiEAtrCV9cfzB1rhGpKGYLhlJrNJwPgGfj5OYt0QVW5FQtQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtElJoXa15VgH40iyrcA5r4%2B3XAUV547y7JhV10NicRz1ZnMZNtm4U2dPUYeITSWmjz3h7kSveOzKGTe1Mbwy%2FeGx6V%2B4gTQ54M7wwmYjA%2FMzeVzfS9g5gQGREsHTLa7ShPUr7DvLYs1tSCaILZjWbUXqc8%2FBWIoXMlplH7bcXgE2ghbVkd96dD7dgUqPpq8kVpbj5%2FEzYEzGyeXLgFcxt9PJ8j97oDVfzqGx4Iit3FpnR15EGlYqmClFMbrQvxdAYXcS51ophtC09M0pqSIHCH38L0CEnbomZEziaGJ%2FYHIs8vGfDktP1zdaCpKNIpLqDyZxR%2Bp80XmdIHL%2F%2BljQTuLUJyvn%2BWsdZLAK6NHoKQ5e2EFa6zXb450WhiG6AG6fWFYYOLcr5AGr8zdChUGbryuWvGX1L3bUjMGgdbs%2FDCPHMhOfMf4mIff0Xk5xMGPfM6xZWNwwebotpIJ2S6jBHA0h7wfOyKM9bGLR9WW8xEGMg3jlNAeLv0LeVNWPCvHa9zQzC2qnnEo2cqS%2FUxIrWtel3HYadkMm8DlmKlxoEATgSKWPk2A4BK%2FzNGpceuAHlaJLp220U%2B58xXVR7o6ApZ0AqON%2Fa8UV7cByQOyLkOfQQzAqeTVBhoFg2wXUXxixChnt9XVX6PsWfkMPXjq70GOqUBzmBBVv7fRuZbd%2F%2Bs8gzVxPUvjJc6oYlBv7iJ53ac7UL%2Fuxkd0Ot9VQDqtbTVRY3F7MFVL9brNZw%2F9ijxaRjF%2F4ilr%2BS4h7Go8coLBTX4ieiRlegzT2LLEnB5Zb1ADNu4SPIB1YNFVPZynC4nBxiOiDca5WkQrGVYXLUO4pDZZ13v4e7lzgBRWzsNDtYbX1w5mexoA7DylFQhLpAv3xCtSn5cEsFD&X-Amz-Signature=3304ba3d948fad7f46b2d819022df2f30c2d850638dc890b07f0956846973d33&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
