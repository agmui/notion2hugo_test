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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIK4NS7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHPzzPlpBpA33V66Ovk7th6qP5BHmf8Km8XPGURLgtsEAiBISymoD1HiYu8ncssAWusuaOv8JHS%2FU4OoswyioB%2Bj6ir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMsSTMW6zsqwXdfkN6KtwDC2MYyq3%2BQd9qCltFnHQWcvjcevtQZxgv7CWRaw2qsc9DRi%2BtUWahSZ1fZqwA33%2FRwDuHCIjb51ZVehrHbbdHNfK6LcZFHeGI4FVfdU5KrC1C08awcjM4wKU29BQTtWoVNELfN1Eeyxl55I4t1DCwFMXRYV4DwjiXqk6rpswyO6bHgn4sxscUlVYOKEb3Fp8jKz8Cc9W5Lps5nvzX9jVXerPoNqYm8mOvOcHJ%2FDvSecdlief%2FMcLvhi8eVG8HqRsoxc%2F1ladjbxqYh43wd5jT%2BahYyU4E%2BpXIBoO0f3GJgCgpuwe1sEyTx%2B%2BIaBLDEfl9oXrij%2Biids56EXevm%2FJSYBcEOnLLhLH5qWh%2FzrBbmIFz8GKfIIbyxrHoVmDdrm5MXv6oHhDXoD9zHyL4fW9VSTA25sRhWgZYR0RNixrlrBHnW5m7KeAIJFOFeg0%2FI0ziH40HICJWkIVhk%2FzfPS8UWBMtBlU85msBolavtJZj0ewjKnr4L2yWZU4hrzP%2B5SOEeqiERJTEtLr2i2Rmd%2FASrMw7RXYwNmmD5EK52ZhB%2BZZpI2TSRsY6gGlsHLBV6DyJPlmW%2BkAilrINCOJYcTVDI58O7AOCHmqbGpMF5TbbpXrMAKpK1J%2FZQ4jcEWMwvrqSwQY6pgFrx9jAgx7YZ9jjZqpzHcScKdQ1Uj9i20afye55mZPerNeOsQR2WFEldJhmIWqHv40wdu3UOcUV9xGG6XeCpmcrfE32RwMRY9vCtz6QgoPURjEVPhw2C8G2YuXuWdiCYGlRE8Gq053a8Bkxg3YC4WBbOqK00fZzh5DErAANLAJAF%2BNJWN4r1iZyxqonwad4FORrsxHBPW53EjEbe1nmpL6f0QKrhU4l&X-Amz-Signature=fb84bd72ada4d18b60b500ff769cbbbb1789aa51a8c309e2fe52407aaf2f1be5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIK4NS7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHPzzPlpBpA33V66Ovk7th6qP5BHmf8Km8XPGURLgtsEAiBISymoD1HiYu8ncssAWusuaOv8JHS%2FU4OoswyioB%2Bj6ir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMsSTMW6zsqwXdfkN6KtwDC2MYyq3%2BQd9qCltFnHQWcvjcevtQZxgv7CWRaw2qsc9DRi%2BtUWahSZ1fZqwA33%2FRwDuHCIjb51ZVehrHbbdHNfK6LcZFHeGI4FVfdU5KrC1C08awcjM4wKU29BQTtWoVNELfN1Eeyxl55I4t1DCwFMXRYV4DwjiXqk6rpswyO6bHgn4sxscUlVYOKEb3Fp8jKz8Cc9W5Lps5nvzX9jVXerPoNqYm8mOvOcHJ%2FDvSecdlief%2FMcLvhi8eVG8HqRsoxc%2F1ladjbxqYh43wd5jT%2BahYyU4E%2BpXIBoO0f3GJgCgpuwe1sEyTx%2B%2BIaBLDEfl9oXrij%2Biids56EXevm%2FJSYBcEOnLLhLH5qWh%2FzrBbmIFz8GKfIIbyxrHoVmDdrm5MXv6oHhDXoD9zHyL4fW9VSTA25sRhWgZYR0RNixrlrBHnW5m7KeAIJFOFeg0%2FI0ziH40HICJWkIVhk%2FzfPS8UWBMtBlU85msBolavtJZj0ewjKnr4L2yWZU4hrzP%2B5SOEeqiERJTEtLr2i2Rmd%2FASrMw7RXYwNmmD5EK52ZhB%2BZZpI2TSRsY6gGlsHLBV6DyJPlmW%2BkAilrINCOJYcTVDI58O7AOCHmqbGpMF5TbbpXrMAKpK1J%2FZQ4jcEWMwvrqSwQY6pgFrx9jAgx7YZ9jjZqpzHcScKdQ1Uj9i20afye55mZPerNeOsQR2WFEldJhmIWqHv40wdu3UOcUV9xGG6XeCpmcrfE32RwMRY9vCtz6QgoPURjEVPhw2C8G2YuXuWdiCYGlRE8Gq053a8Bkxg3YC4WBbOqK00fZzh5DErAANLAJAF%2BNJWN4r1iZyxqonwad4FORrsxHBPW53EjEbe1nmpL6f0QKrhU4l&X-Amz-Signature=728e815e902485a1c8a4d3e6031bf3c16e3c721283f02c2f034d6419826cf5c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIK4NS7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHPzzPlpBpA33V66Ovk7th6qP5BHmf8Km8XPGURLgtsEAiBISymoD1HiYu8ncssAWusuaOv8JHS%2FU4OoswyioB%2Bj6ir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMsSTMW6zsqwXdfkN6KtwDC2MYyq3%2BQd9qCltFnHQWcvjcevtQZxgv7CWRaw2qsc9DRi%2BtUWahSZ1fZqwA33%2FRwDuHCIjb51ZVehrHbbdHNfK6LcZFHeGI4FVfdU5KrC1C08awcjM4wKU29BQTtWoVNELfN1Eeyxl55I4t1DCwFMXRYV4DwjiXqk6rpswyO6bHgn4sxscUlVYOKEb3Fp8jKz8Cc9W5Lps5nvzX9jVXerPoNqYm8mOvOcHJ%2FDvSecdlief%2FMcLvhi8eVG8HqRsoxc%2F1ladjbxqYh43wd5jT%2BahYyU4E%2BpXIBoO0f3GJgCgpuwe1sEyTx%2B%2BIaBLDEfl9oXrij%2Biids56EXevm%2FJSYBcEOnLLhLH5qWh%2FzrBbmIFz8GKfIIbyxrHoVmDdrm5MXv6oHhDXoD9zHyL4fW9VSTA25sRhWgZYR0RNixrlrBHnW5m7KeAIJFOFeg0%2FI0ziH40HICJWkIVhk%2FzfPS8UWBMtBlU85msBolavtJZj0ewjKnr4L2yWZU4hrzP%2B5SOEeqiERJTEtLr2i2Rmd%2FASrMw7RXYwNmmD5EK52ZhB%2BZZpI2TSRsY6gGlsHLBV6DyJPlmW%2BkAilrINCOJYcTVDI58O7AOCHmqbGpMF5TbbpXrMAKpK1J%2FZQ4jcEWMwvrqSwQY6pgFrx9jAgx7YZ9jjZqpzHcScKdQ1Uj9i20afye55mZPerNeOsQR2WFEldJhmIWqHv40wdu3UOcUV9xGG6XeCpmcrfE32RwMRY9vCtz6QgoPURjEVPhw2C8G2YuXuWdiCYGlRE8Gq053a8Bkxg3YC4WBbOqK00fZzh5DErAANLAJAF%2BNJWN4r1iZyxqonwad4FORrsxHBPW53EjEbe1nmpL6f0QKrhU4l&X-Amz-Signature=f30ccf91d1a462736d559322c6cd7a5212c0b9ae668409dd1ada7769df8cad99&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIK4NS7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHPzzPlpBpA33V66Ovk7th6qP5BHmf8Km8XPGURLgtsEAiBISymoD1HiYu8ncssAWusuaOv8JHS%2FU4OoswyioB%2Bj6ir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMsSTMW6zsqwXdfkN6KtwDC2MYyq3%2BQd9qCltFnHQWcvjcevtQZxgv7CWRaw2qsc9DRi%2BtUWahSZ1fZqwA33%2FRwDuHCIjb51ZVehrHbbdHNfK6LcZFHeGI4FVfdU5KrC1C08awcjM4wKU29BQTtWoVNELfN1Eeyxl55I4t1DCwFMXRYV4DwjiXqk6rpswyO6bHgn4sxscUlVYOKEb3Fp8jKz8Cc9W5Lps5nvzX9jVXerPoNqYm8mOvOcHJ%2FDvSecdlief%2FMcLvhi8eVG8HqRsoxc%2F1ladjbxqYh43wd5jT%2BahYyU4E%2BpXIBoO0f3GJgCgpuwe1sEyTx%2B%2BIaBLDEfl9oXrij%2Biids56EXevm%2FJSYBcEOnLLhLH5qWh%2FzrBbmIFz8GKfIIbyxrHoVmDdrm5MXv6oHhDXoD9zHyL4fW9VSTA25sRhWgZYR0RNixrlrBHnW5m7KeAIJFOFeg0%2FI0ziH40HICJWkIVhk%2FzfPS8UWBMtBlU85msBolavtJZj0ewjKnr4L2yWZU4hrzP%2B5SOEeqiERJTEtLr2i2Rmd%2FASrMw7RXYwNmmD5EK52ZhB%2BZZpI2TSRsY6gGlsHLBV6DyJPlmW%2BkAilrINCOJYcTVDI58O7AOCHmqbGpMF5TbbpXrMAKpK1J%2FZQ4jcEWMwvrqSwQY6pgFrx9jAgx7YZ9jjZqpzHcScKdQ1Uj9i20afye55mZPerNeOsQR2WFEldJhmIWqHv40wdu3UOcUV9xGG6XeCpmcrfE32RwMRY9vCtz6QgoPURjEVPhw2C8G2YuXuWdiCYGlRE8Gq053a8Bkxg3YC4WBbOqK00fZzh5DErAANLAJAF%2BNJWN4r1iZyxqonwad4FORrsxHBPW53EjEbe1nmpL6f0QKrhU4l&X-Amz-Signature=547a0dcc9be790844b96fa0f1ef377bdb0ee2944d7f42ce16f51a77b2d19b1f5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIK4NS7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHPzzPlpBpA33V66Ovk7th6qP5BHmf8Km8XPGURLgtsEAiBISymoD1HiYu8ncssAWusuaOv8JHS%2FU4OoswyioB%2Bj6ir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMsSTMW6zsqwXdfkN6KtwDC2MYyq3%2BQd9qCltFnHQWcvjcevtQZxgv7CWRaw2qsc9DRi%2BtUWahSZ1fZqwA33%2FRwDuHCIjb51ZVehrHbbdHNfK6LcZFHeGI4FVfdU5KrC1C08awcjM4wKU29BQTtWoVNELfN1Eeyxl55I4t1DCwFMXRYV4DwjiXqk6rpswyO6bHgn4sxscUlVYOKEb3Fp8jKz8Cc9W5Lps5nvzX9jVXerPoNqYm8mOvOcHJ%2FDvSecdlief%2FMcLvhi8eVG8HqRsoxc%2F1ladjbxqYh43wd5jT%2BahYyU4E%2BpXIBoO0f3GJgCgpuwe1sEyTx%2B%2BIaBLDEfl9oXrij%2Biids56EXevm%2FJSYBcEOnLLhLH5qWh%2FzrBbmIFz8GKfIIbyxrHoVmDdrm5MXv6oHhDXoD9zHyL4fW9VSTA25sRhWgZYR0RNixrlrBHnW5m7KeAIJFOFeg0%2FI0ziH40HICJWkIVhk%2FzfPS8UWBMtBlU85msBolavtJZj0ewjKnr4L2yWZU4hrzP%2B5SOEeqiERJTEtLr2i2Rmd%2FASrMw7RXYwNmmD5EK52ZhB%2BZZpI2TSRsY6gGlsHLBV6DyJPlmW%2BkAilrINCOJYcTVDI58O7AOCHmqbGpMF5TbbpXrMAKpK1J%2FZQ4jcEWMwvrqSwQY6pgFrx9jAgx7YZ9jjZqpzHcScKdQ1Uj9i20afye55mZPerNeOsQR2WFEldJhmIWqHv40wdu3UOcUV9xGG6XeCpmcrfE32RwMRY9vCtz6QgoPURjEVPhw2C8G2YuXuWdiCYGlRE8Gq053a8Bkxg3YC4WBbOqK00fZzh5DErAANLAJAF%2BNJWN4r1iZyxqonwad4FORrsxHBPW53EjEbe1nmpL6f0QKrhU4l&X-Amz-Signature=22fe38c2a7bb773186dc1b143ed95c1a293c1d936ccf074acf4da1b850b52a02&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIK4NS7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHPzzPlpBpA33V66Ovk7th6qP5BHmf8Km8XPGURLgtsEAiBISymoD1HiYu8ncssAWusuaOv8JHS%2FU4OoswyioB%2Bj6ir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMsSTMW6zsqwXdfkN6KtwDC2MYyq3%2BQd9qCltFnHQWcvjcevtQZxgv7CWRaw2qsc9DRi%2BtUWahSZ1fZqwA33%2FRwDuHCIjb51ZVehrHbbdHNfK6LcZFHeGI4FVfdU5KrC1C08awcjM4wKU29BQTtWoVNELfN1Eeyxl55I4t1DCwFMXRYV4DwjiXqk6rpswyO6bHgn4sxscUlVYOKEb3Fp8jKz8Cc9W5Lps5nvzX9jVXerPoNqYm8mOvOcHJ%2FDvSecdlief%2FMcLvhi8eVG8HqRsoxc%2F1ladjbxqYh43wd5jT%2BahYyU4E%2BpXIBoO0f3GJgCgpuwe1sEyTx%2B%2BIaBLDEfl9oXrij%2Biids56EXevm%2FJSYBcEOnLLhLH5qWh%2FzrBbmIFz8GKfIIbyxrHoVmDdrm5MXv6oHhDXoD9zHyL4fW9VSTA25sRhWgZYR0RNixrlrBHnW5m7KeAIJFOFeg0%2FI0ziH40HICJWkIVhk%2FzfPS8UWBMtBlU85msBolavtJZj0ewjKnr4L2yWZU4hrzP%2B5SOEeqiERJTEtLr2i2Rmd%2FASrMw7RXYwNmmD5EK52ZhB%2BZZpI2TSRsY6gGlsHLBV6DyJPlmW%2BkAilrINCOJYcTVDI58O7AOCHmqbGpMF5TbbpXrMAKpK1J%2FZQ4jcEWMwvrqSwQY6pgFrx9jAgx7YZ9jjZqpzHcScKdQ1Uj9i20afye55mZPerNeOsQR2WFEldJhmIWqHv40wdu3UOcUV9xGG6XeCpmcrfE32RwMRY9vCtz6QgoPURjEVPhw2C8G2YuXuWdiCYGlRE8Gq053a8Bkxg3YC4WBbOqK00fZzh5DErAANLAJAF%2BNJWN4r1iZyxqonwad4FORrsxHBPW53EjEbe1nmpL6f0QKrhU4l&X-Amz-Signature=56ecad4dd9a109eeb8469bb4a78cdbedd6fe020499f5d8acc813db88cd030cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIK4NS7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHPzzPlpBpA33V66Ovk7th6qP5BHmf8Km8XPGURLgtsEAiBISymoD1HiYu8ncssAWusuaOv8JHS%2FU4OoswyioB%2Bj6ir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMsSTMW6zsqwXdfkN6KtwDC2MYyq3%2BQd9qCltFnHQWcvjcevtQZxgv7CWRaw2qsc9DRi%2BtUWahSZ1fZqwA33%2FRwDuHCIjb51ZVehrHbbdHNfK6LcZFHeGI4FVfdU5KrC1C08awcjM4wKU29BQTtWoVNELfN1Eeyxl55I4t1DCwFMXRYV4DwjiXqk6rpswyO6bHgn4sxscUlVYOKEb3Fp8jKz8Cc9W5Lps5nvzX9jVXerPoNqYm8mOvOcHJ%2FDvSecdlief%2FMcLvhi8eVG8HqRsoxc%2F1ladjbxqYh43wd5jT%2BahYyU4E%2BpXIBoO0f3GJgCgpuwe1sEyTx%2B%2BIaBLDEfl9oXrij%2Biids56EXevm%2FJSYBcEOnLLhLH5qWh%2FzrBbmIFz8GKfIIbyxrHoVmDdrm5MXv6oHhDXoD9zHyL4fW9VSTA25sRhWgZYR0RNixrlrBHnW5m7KeAIJFOFeg0%2FI0ziH40HICJWkIVhk%2FzfPS8UWBMtBlU85msBolavtJZj0ewjKnr4L2yWZU4hrzP%2B5SOEeqiERJTEtLr2i2Rmd%2FASrMw7RXYwNmmD5EK52ZhB%2BZZpI2TSRsY6gGlsHLBV6DyJPlmW%2BkAilrINCOJYcTVDI58O7AOCHmqbGpMF5TbbpXrMAKpK1J%2FZQ4jcEWMwvrqSwQY6pgFrx9jAgx7YZ9jjZqpzHcScKdQ1Uj9i20afye55mZPerNeOsQR2WFEldJhmIWqHv40wdu3UOcUV9xGG6XeCpmcrfE32RwMRY9vCtz6QgoPURjEVPhw2C8G2YuXuWdiCYGlRE8Gq053a8Bkxg3YC4WBbOqK00fZzh5DErAANLAJAF%2BNJWN4r1iZyxqonwad4FORrsxHBPW53EjEbe1nmpL6f0QKrhU4l&X-Amz-Signature=c8856a868d8c8efb8e931325b09dfd4a2277260d03ed6c1c93e806aedc477bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
