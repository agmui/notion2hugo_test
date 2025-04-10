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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NIEB2O%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC8W5nUyeV%2Fj0%2Fi33USItRHYEgkvZ0XypsndOGYckT%2FhAIhAJ%2FoZBRpDM61jeKPPUnThR8ujgd5jyGJ%2FD%2FzHHkGQbGLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXQ3BP1aMWE7EdnLYq3AMQNw1aXXjxdlJV7fZ4K%2FLLvZAdhkN93TlRZU3PN19HqTd1CHTupuoer6qT43OiAvUaColyiJ9Oq%2B1Oh0CymyRAHeRaMT7D2J0c%2Bcuh8ARaLPYYFJJlxB7K0nO54tH5TWIw0tIk%2BD%2BY6huYBnIRVgcL%2BLE%2BkCastz%2FtOmsFb1uCeMc7qBpgItRuA5NAfa4ZJKxUBBtrdoljxlLD3Z3bRZ%2FsYf%2BjEnTtg%2BD%2BZSjPr5HSIW3XgNe6EUimcRJv7i%2B3ylcqhwPSzERMxEHNFOaBZ7vyNB8KrH4PD6Bb9G8T4xfo8WIgangA5QZkj9qRLI6kt6bVx7eRt%2F5710eaiZyyrOXCgQ6YoKx3oKyHx98ui4XwfaakyU1uWjDCOdPEDXLy%2FGeWiR7RpisVdC5bdtlBpcvY9ivu5A%2FjHEpRTTonUEdNftqgOLg7Ko08dhKyCQOncwKWrCUi2cdVbo19PtXjowKP4NjZeVZkippjWFKeda%2FOG0CG2C0VK2QIfe4cw8qWzR2nnKAjQbz5v%2BKfXrNWNe7uUrRceIIaxan6LDeKkbv0NLe3fM3JrgOsY4RH3noTjc8yggnFqvl2sHQHI080Y%2FqH6RG0RP6l5toYUg1ldJTHptJP1LoOw8LkrgyGczDIi96%2FBjqkAaBMphm407%2BJoqHK7mJFKcnQMCzvwnlWKbUlnMT33o9jiMwBNzQFTFYmSZbbhQlt8nlSaZb5huuph8iZCpD4c6XxlLSiEGO2Wd10BFFo%2FtoudM9j3yveXY6mpaOQEwuymc443%2BLvf%2FF10lLqYVzK0tVSU5wnQFjiXLfCpC91AQOlIEFRJxikftbdmrdMOTGBds5w8cj8Wjx0DMSeGAaOwrPWIAyF&X-Amz-Signature=c392c3cd51b668a31d055eb95dc44759e8bedaa9bcce98630af99b9c8bbd6cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NIEB2O%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC8W5nUyeV%2Fj0%2Fi33USItRHYEgkvZ0XypsndOGYckT%2FhAIhAJ%2FoZBRpDM61jeKPPUnThR8ujgd5jyGJ%2FD%2FzHHkGQbGLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXQ3BP1aMWE7EdnLYq3AMQNw1aXXjxdlJV7fZ4K%2FLLvZAdhkN93TlRZU3PN19HqTd1CHTupuoer6qT43OiAvUaColyiJ9Oq%2B1Oh0CymyRAHeRaMT7D2J0c%2Bcuh8ARaLPYYFJJlxB7K0nO54tH5TWIw0tIk%2BD%2BY6huYBnIRVgcL%2BLE%2BkCastz%2FtOmsFb1uCeMc7qBpgItRuA5NAfa4ZJKxUBBtrdoljxlLD3Z3bRZ%2FsYf%2BjEnTtg%2BD%2BZSjPr5HSIW3XgNe6EUimcRJv7i%2B3ylcqhwPSzERMxEHNFOaBZ7vyNB8KrH4PD6Bb9G8T4xfo8WIgangA5QZkj9qRLI6kt6bVx7eRt%2F5710eaiZyyrOXCgQ6YoKx3oKyHx98ui4XwfaakyU1uWjDCOdPEDXLy%2FGeWiR7RpisVdC5bdtlBpcvY9ivu5A%2FjHEpRTTonUEdNftqgOLg7Ko08dhKyCQOncwKWrCUi2cdVbo19PtXjowKP4NjZeVZkippjWFKeda%2FOG0CG2C0VK2QIfe4cw8qWzR2nnKAjQbz5v%2BKfXrNWNe7uUrRceIIaxan6LDeKkbv0NLe3fM3JrgOsY4RH3noTjc8yggnFqvl2sHQHI080Y%2FqH6RG0RP6l5toYUg1ldJTHptJP1LoOw8LkrgyGczDIi96%2FBjqkAaBMphm407%2BJoqHK7mJFKcnQMCzvwnlWKbUlnMT33o9jiMwBNzQFTFYmSZbbhQlt8nlSaZb5huuph8iZCpD4c6XxlLSiEGO2Wd10BFFo%2FtoudM9j3yveXY6mpaOQEwuymc443%2BLvf%2FF10lLqYVzK0tVSU5wnQFjiXLfCpC91AQOlIEFRJxikftbdmrdMOTGBds5w8cj8Wjx0DMSeGAaOwrPWIAyF&X-Amz-Signature=c7b5caa1c94c14ca8ccce99d1a532c4e06ab126e9b3d2327fbdc2e8c8ad0f097&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NIEB2O%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC8W5nUyeV%2Fj0%2Fi33USItRHYEgkvZ0XypsndOGYckT%2FhAIhAJ%2FoZBRpDM61jeKPPUnThR8ujgd5jyGJ%2FD%2FzHHkGQbGLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXQ3BP1aMWE7EdnLYq3AMQNw1aXXjxdlJV7fZ4K%2FLLvZAdhkN93TlRZU3PN19HqTd1CHTupuoer6qT43OiAvUaColyiJ9Oq%2B1Oh0CymyRAHeRaMT7D2J0c%2Bcuh8ARaLPYYFJJlxB7K0nO54tH5TWIw0tIk%2BD%2BY6huYBnIRVgcL%2BLE%2BkCastz%2FtOmsFb1uCeMc7qBpgItRuA5NAfa4ZJKxUBBtrdoljxlLD3Z3bRZ%2FsYf%2BjEnTtg%2BD%2BZSjPr5HSIW3XgNe6EUimcRJv7i%2B3ylcqhwPSzERMxEHNFOaBZ7vyNB8KrH4PD6Bb9G8T4xfo8WIgangA5QZkj9qRLI6kt6bVx7eRt%2F5710eaiZyyrOXCgQ6YoKx3oKyHx98ui4XwfaakyU1uWjDCOdPEDXLy%2FGeWiR7RpisVdC5bdtlBpcvY9ivu5A%2FjHEpRTTonUEdNftqgOLg7Ko08dhKyCQOncwKWrCUi2cdVbo19PtXjowKP4NjZeVZkippjWFKeda%2FOG0CG2C0VK2QIfe4cw8qWzR2nnKAjQbz5v%2BKfXrNWNe7uUrRceIIaxan6LDeKkbv0NLe3fM3JrgOsY4RH3noTjc8yggnFqvl2sHQHI080Y%2FqH6RG0RP6l5toYUg1ldJTHptJP1LoOw8LkrgyGczDIi96%2FBjqkAaBMphm407%2BJoqHK7mJFKcnQMCzvwnlWKbUlnMT33o9jiMwBNzQFTFYmSZbbhQlt8nlSaZb5huuph8iZCpD4c6XxlLSiEGO2Wd10BFFo%2FtoudM9j3yveXY6mpaOQEwuymc443%2BLvf%2FF10lLqYVzK0tVSU5wnQFjiXLfCpC91AQOlIEFRJxikftbdmrdMOTGBds5w8cj8Wjx0DMSeGAaOwrPWIAyF&X-Amz-Signature=5379626e0f9c9a44e35e7049e5b383deb65911adbaa29f38ac8f167c0b8fbb7c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NIEB2O%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC8W5nUyeV%2Fj0%2Fi33USItRHYEgkvZ0XypsndOGYckT%2FhAIhAJ%2FoZBRpDM61jeKPPUnThR8ujgd5jyGJ%2FD%2FzHHkGQbGLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXQ3BP1aMWE7EdnLYq3AMQNw1aXXjxdlJV7fZ4K%2FLLvZAdhkN93TlRZU3PN19HqTd1CHTupuoer6qT43OiAvUaColyiJ9Oq%2B1Oh0CymyRAHeRaMT7D2J0c%2Bcuh8ARaLPYYFJJlxB7K0nO54tH5TWIw0tIk%2BD%2BY6huYBnIRVgcL%2BLE%2BkCastz%2FtOmsFb1uCeMc7qBpgItRuA5NAfa4ZJKxUBBtrdoljxlLD3Z3bRZ%2FsYf%2BjEnTtg%2BD%2BZSjPr5HSIW3XgNe6EUimcRJv7i%2B3ylcqhwPSzERMxEHNFOaBZ7vyNB8KrH4PD6Bb9G8T4xfo8WIgangA5QZkj9qRLI6kt6bVx7eRt%2F5710eaiZyyrOXCgQ6YoKx3oKyHx98ui4XwfaakyU1uWjDCOdPEDXLy%2FGeWiR7RpisVdC5bdtlBpcvY9ivu5A%2FjHEpRTTonUEdNftqgOLg7Ko08dhKyCQOncwKWrCUi2cdVbo19PtXjowKP4NjZeVZkippjWFKeda%2FOG0CG2C0VK2QIfe4cw8qWzR2nnKAjQbz5v%2BKfXrNWNe7uUrRceIIaxan6LDeKkbv0NLe3fM3JrgOsY4RH3noTjc8yggnFqvl2sHQHI080Y%2FqH6RG0RP6l5toYUg1ldJTHptJP1LoOw8LkrgyGczDIi96%2FBjqkAaBMphm407%2BJoqHK7mJFKcnQMCzvwnlWKbUlnMT33o9jiMwBNzQFTFYmSZbbhQlt8nlSaZb5huuph8iZCpD4c6XxlLSiEGO2Wd10BFFo%2FtoudM9j3yveXY6mpaOQEwuymc443%2BLvf%2FF10lLqYVzK0tVSU5wnQFjiXLfCpC91AQOlIEFRJxikftbdmrdMOTGBds5w8cj8Wjx0DMSeGAaOwrPWIAyF&X-Amz-Signature=48186ea1a285ad90349cd00c92746a382d3babc16252962908a2280bdfd02e62&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NIEB2O%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC8W5nUyeV%2Fj0%2Fi33USItRHYEgkvZ0XypsndOGYckT%2FhAIhAJ%2FoZBRpDM61jeKPPUnThR8ujgd5jyGJ%2FD%2FzHHkGQbGLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXQ3BP1aMWE7EdnLYq3AMQNw1aXXjxdlJV7fZ4K%2FLLvZAdhkN93TlRZU3PN19HqTd1CHTupuoer6qT43OiAvUaColyiJ9Oq%2B1Oh0CymyRAHeRaMT7D2J0c%2Bcuh8ARaLPYYFJJlxB7K0nO54tH5TWIw0tIk%2BD%2BY6huYBnIRVgcL%2BLE%2BkCastz%2FtOmsFb1uCeMc7qBpgItRuA5NAfa4ZJKxUBBtrdoljxlLD3Z3bRZ%2FsYf%2BjEnTtg%2BD%2BZSjPr5HSIW3XgNe6EUimcRJv7i%2B3ylcqhwPSzERMxEHNFOaBZ7vyNB8KrH4PD6Bb9G8T4xfo8WIgangA5QZkj9qRLI6kt6bVx7eRt%2F5710eaiZyyrOXCgQ6YoKx3oKyHx98ui4XwfaakyU1uWjDCOdPEDXLy%2FGeWiR7RpisVdC5bdtlBpcvY9ivu5A%2FjHEpRTTonUEdNftqgOLg7Ko08dhKyCQOncwKWrCUi2cdVbo19PtXjowKP4NjZeVZkippjWFKeda%2FOG0CG2C0VK2QIfe4cw8qWzR2nnKAjQbz5v%2BKfXrNWNe7uUrRceIIaxan6LDeKkbv0NLe3fM3JrgOsY4RH3noTjc8yggnFqvl2sHQHI080Y%2FqH6RG0RP6l5toYUg1ldJTHptJP1LoOw8LkrgyGczDIi96%2FBjqkAaBMphm407%2BJoqHK7mJFKcnQMCzvwnlWKbUlnMT33o9jiMwBNzQFTFYmSZbbhQlt8nlSaZb5huuph8iZCpD4c6XxlLSiEGO2Wd10BFFo%2FtoudM9j3yveXY6mpaOQEwuymc443%2BLvf%2FF10lLqYVzK0tVSU5wnQFjiXLfCpC91AQOlIEFRJxikftbdmrdMOTGBds5w8cj8Wjx0DMSeGAaOwrPWIAyF&X-Amz-Signature=2eee97a17a4c94d457b0fb60fdb926035f36361d945c4f7e632a73a399ff85f1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NIEB2O%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC8W5nUyeV%2Fj0%2Fi33USItRHYEgkvZ0XypsndOGYckT%2FhAIhAJ%2FoZBRpDM61jeKPPUnThR8ujgd5jyGJ%2FD%2FzHHkGQbGLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXQ3BP1aMWE7EdnLYq3AMQNw1aXXjxdlJV7fZ4K%2FLLvZAdhkN93TlRZU3PN19HqTd1CHTupuoer6qT43OiAvUaColyiJ9Oq%2B1Oh0CymyRAHeRaMT7D2J0c%2Bcuh8ARaLPYYFJJlxB7K0nO54tH5TWIw0tIk%2BD%2BY6huYBnIRVgcL%2BLE%2BkCastz%2FtOmsFb1uCeMc7qBpgItRuA5NAfa4ZJKxUBBtrdoljxlLD3Z3bRZ%2FsYf%2BjEnTtg%2BD%2BZSjPr5HSIW3XgNe6EUimcRJv7i%2B3ylcqhwPSzERMxEHNFOaBZ7vyNB8KrH4PD6Bb9G8T4xfo8WIgangA5QZkj9qRLI6kt6bVx7eRt%2F5710eaiZyyrOXCgQ6YoKx3oKyHx98ui4XwfaakyU1uWjDCOdPEDXLy%2FGeWiR7RpisVdC5bdtlBpcvY9ivu5A%2FjHEpRTTonUEdNftqgOLg7Ko08dhKyCQOncwKWrCUi2cdVbo19PtXjowKP4NjZeVZkippjWFKeda%2FOG0CG2C0VK2QIfe4cw8qWzR2nnKAjQbz5v%2BKfXrNWNe7uUrRceIIaxan6LDeKkbv0NLe3fM3JrgOsY4RH3noTjc8yggnFqvl2sHQHI080Y%2FqH6RG0RP6l5toYUg1ldJTHptJP1LoOw8LkrgyGczDIi96%2FBjqkAaBMphm407%2BJoqHK7mJFKcnQMCzvwnlWKbUlnMT33o9jiMwBNzQFTFYmSZbbhQlt8nlSaZb5huuph8iZCpD4c6XxlLSiEGO2Wd10BFFo%2FtoudM9j3yveXY6mpaOQEwuymc443%2BLvf%2FF10lLqYVzK0tVSU5wnQFjiXLfCpC91AQOlIEFRJxikftbdmrdMOTGBds5w8cj8Wjx0DMSeGAaOwrPWIAyF&X-Amz-Signature=e448b1447ff721b2f7b59c20ef93c318b4ebe058fb43e9a5f00b89926dd7792a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NIEB2O%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC8W5nUyeV%2Fj0%2Fi33USItRHYEgkvZ0XypsndOGYckT%2FhAIhAJ%2FoZBRpDM61jeKPPUnThR8ujgd5jyGJ%2FD%2FzHHkGQbGLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXQ3BP1aMWE7EdnLYq3AMQNw1aXXjxdlJV7fZ4K%2FLLvZAdhkN93TlRZU3PN19HqTd1CHTupuoer6qT43OiAvUaColyiJ9Oq%2B1Oh0CymyRAHeRaMT7D2J0c%2Bcuh8ARaLPYYFJJlxB7K0nO54tH5TWIw0tIk%2BD%2BY6huYBnIRVgcL%2BLE%2BkCastz%2FtOmsFb1uCeMc7qBpgItRuA5NAfa4ZJKxUBBtrdoljxlLD3Z3bRZ%2FsYf%2BjEnTtg%2BD%2BZSjPr5HSIW3XgNe6EUimcRJv7i%2B3ylcqhwPSzERMxEHNFOaBZ7vyNB8KrH4PD6Bb9G8T4xfo8WIgangA5QZkj9qRLI6kt6bVx7eRt%2F5710eaiZyyrOXCgQ6YoKx3oKyHx98ui4XwfaakyU1uWjDCOdPEDXLy%2FGeWiR7RpisVdC5bdtlBpcvY9ivu5A%2FjHEpRTTonUEdNftqgOLg7Ko08dhKyCQOncwKWrCUi2cdVbo19PtXjowKP4NjZeVZkippjWFKeda%2FOG0CG2C0VK2QIfe4cw8qWzR2nnKAjQbz5v%2BKfXrNWNe7uUrRceIIaxan6LDeKkbv0NLe3fM3JrgOsY4RH3noTjc8yggnFqvl2sHQHI080Y%2FqH6RG0RP6l5toYUg1ldJTHptJP1LoOw8LkrgyGczDIi96%2FBjqkAaBMphm407%2BJoqHK7mJFKcnQMCzvwnlWKbUlnMT33o9jiMwBNzQFTFYmSZbbhQlt8nlSaZb5huuph8iZCpD4c6XxlLSiEGO2Wd10BFFo%2FtoudM9j3yveXY6mpaOQEwuymc443%2BLvf%2FF10lLqYVzK0tVSU5wnQFjiXLfCpC91AQOlIEFRJxikftbdmrdMOTGBds5w8cj8Wjx0DMSeGAaOwrPWIAyF&X-Amz-Signature=0086c68c0c78f5dff35ae537906485de68e4c6ee28e2a914291ed571cd5f8a1a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
