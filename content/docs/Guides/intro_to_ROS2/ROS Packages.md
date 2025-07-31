---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCR7L7IK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAcceP6jdC75XMN7AcKHezJQZoLrDxSpmwqwJRUXxKcAiAqrKAr55mIOD%2FQzpFPhzKcDr2gPWHtD%2FM1qUmAtgaybSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjXhEwRkFfB%2Fm9siuKtwDF%2B8V3E10%2Fptrl024bb8pvPiz51eUMiylh%2FM16oY%2FNnIsL0LKSFscI29R3sBED47pV2495K4EH3jKZQaP%2F3yQ%2BwZB81TyYSpmHMPFTFxsQnNFyabj6KZczZYLCOSxo5rUOPhr4uTTRL2My5A%2Bo2TL1JSDEn%2BUZ15VRGgvPjH26ZF1Yeqxnjze0snEFVTDHAJN%2FWGujgmVAZaF%2B%2FdAqXKpS1WKUNcgkWimlFhp2FEnuZvZtuvl2uv0SWki6QCIySyRQiTJ6sJ7oZOGycNLOPf1p7AOIG0qhD%2BaoQTdc21fYA05TZYkUdG21UHhD2byckXqstuuFq8tofRGbSIdNHejWtPZkuQi3vR2%2FD3DpLzMKCs9vao8%2ByIvn5KzhBGRXOdOCAoOlVJzlRnEPv%2BBSlEEo3yQu%2FdFuiCNpo%2B0%2FBKq5F3u1PbuRogGGM839%2BDblBUTerKUkYvl9LL422J5KOkob3XFss7v0O8FrbRAKp64dj9rzSgxvFbDg8k6lpyO84r7Bd8SHthw0r8G6sScsD%2FhJZ8FWQ%2FQ9LSkvkCzDF4FzoOW1MfTBctT%2FOyH8UHnNJevxGiJdR251UFA371usxi9uS10%2BXheLcUbiAdP5rlhbO4Gtz1Gt%2FiTpzXcvqAw%2BpmsxAY6pgH4CHNN%2BS49kFqHLAfgSEXH3yl446dTC6zr%2Bec76Gjo5PaOdszqZ7BjZGhL2hBxaXZMQu2YnONLBFsF7C00n3Ozl%2B5UiCBR6GNNjPLz4FWVjZNo5kaiwnPb%2FSYsrTXv2XyR3KZ3uaHhrrmgtxSLy%2BjMY5EfuNOqDVJX%2BVWAzDtKtvIL6C2AedW%2FBGazN6gkoJsKbr8NG1DkH2Avpqx%2Foa60aKaXCswv&X-Amz-Signature=a85342956f1c0fee2163f3ec9468e79ae06dff6897f974679cc9b5f789f46248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCR7L7IK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAcceP6jdC75XMN7AcKHezJQZoLrDxSpmwqwJRUXxKcAiAqrKAr55mIOD%2FQzpFPhzKcDr2gPWHtD%2FM1qUmAtgaybSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjXhEwRkFfB%2Fm9siuKtwDF%2B8V3E10%2Fptrl024bb8pvPiz51eUMiylh%2FM16oY%2FNnIsL0LKSFscI29R3sBED47pV2495K4EH3jKZQaP%2F3yQ%2BwZB81TyYSpmHMPFTFxsQnNFyabj6KZczZYLCOSxo5rUOPhr4uTTRL2My5A%2Bo2TL1JSDEn%2BUZ15VRGgvPjH26ZF1Yeqxnjze0snEFVTDHAJN%2FWGujgmVAZaF%2B%2FdAqXKpS1WKUNcgkWimlFhp2FEnuZvZtuvl2uv0SWki6QCIySyRQiTJ6sJ7oZOGycNLOPf1p7AOIG0qhD%2BaoQTdc21fYA05TZYkUdG21UHhD2byckXqstuuFq8tofRGbSIdNHejWtPZkuQi3vR2%2FD3DpLzMKCs9vao8%2ByIvn5KzhBGRXOdOCAoOlVJzlRnEPv%2BBSlEEo3yQu%2FdFuiCNpo%2B0%2FBKq5F3u1PbuRogGGM839%2BDblBUTerKUkYvl9LL422J5KOkob3XFss7v0O8FrbRAKp64dj9rzSgxvFbDg8k6lpyO84r7Bd8SHthw0r8G6sScsD%2FhJZ8FWQ%2FQ9LSkvkCzDF4FzoOW1MfTBctT%2FOyH8UHnNJevxGiJdR251UFA371usxi9uS10%2BXheLcUbiAdP5rlhbO4Gtz1Gt%2FiTpzXcvqAw%2BpmsxAY6pgH4CHNN%2BS49kFqHLAfgSEXH3yl446dTC6zr%2Bec76Gjo5PaOdszqZ7BjZGhL2hBxaXZMQu2YnONLBFsF7C00n3Ozl%2B5UiCBR6GNNjPLz4FWVjZNo5kaiwnPb%2FSYsrTXv2XyR3KZ3uaHhrrmgtxSLy%2BjMY5EfuNOqDVJX%2BVWAzDtKtvIL6C2AedW%2FBGazN6gkoJsKbr8NG1DkH2Avpqx%2Foa60aKaXCswv&X-Amz-Signature=13192d2d2af09f6e8ff810fb46adc9ea4ecc06db0e97975186e6b9708ea3eadf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCR7L7IK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAcceP6jdC75XMN7AcKHezJQZoLrDxSpmwqwJRUXxKcAiAqrKAr55mIOD%2FQzpFPhzKcDr2gPWHtD%2FM1qUmAtgaybSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjXhEwRkFfB%2Fm9siuKtwDF%2B8V3E10%2Fptrl024bb8pvPiz51eUMiylh%2FM16oY%2FNnIsL0LKSFscI29R3sBED47pV2495K4EH3jKZQaP%2F3yQ%2BwZB81TyYSpmHMPFTFxsQnNFyabj6KZczZYLCOSxo5rUOPhr4uTTRL2My5A%2Bo2TL1JSDEn%2BUZ15VRGgvPjH26ZF1Yeqxnjze0snEFVTDHAJN%2FWGujgmVAZaF%2B%2FdAqXKpS1WKUNcgkWimlFhp2FEnuZvZtuvl2uv0SWki6QCIySyRQiTJ6sJ7oZOGycNLOPf1p7AOIG0qhD%2BaoQTdc21fYA05TZYkUdG21UHhD2byckXqstuuFq8tofRGbSIdNHejWtPZkuQi3vR2%2FD3DpLzMKCs9vao8%2ByIvn5KzhBGRXOdOCAoOlVJzlRnEPv%2BBSlEEo3yQu%2FdFuiCNpo%2B0%2FBKq5F3u1PbuRogGGM839%2BDblBUTerKUkYvl9LL422J5KOkob3XFss7v0O8FrbRAKp64dj9rzSgxvFbDg8k6lpyO84r7Bd8SHthw0r8G6sScsD%2FhJZ8FWQ%2FQ9LSkvkCzDF4FzoOW1MfTBctT%2FOyH8UHnNJevxGiJdR251UFA371usxi9uS10%2BXheLcUbiAdP5rlhbO4Gtz1Gt%2FiTpzXcvqAw%2BpmsxAY6pgH4CHNN%2BS49kFqHLAfgSEXH3yl446dTC6zr%2Bec76Gjo5PaOdszqZ7BjZGhL2hBxaXZMQu2YnONLBFsF7C00n3Ozl%2B5UiCBR6GNNjPLz4FWVjZNo5kaiwnPb%2FSYsrTXv2XyR3KZ3uaHhrrmgtxSLy%2BjMY5EfuNOqDVJX%2BVWAzDtKtvIL6C2AedW%2FBGazN6gkoJsKbr8NG1DkH2Avpqx%2Foa60aKaXCswv&X-Amz-Signature=20ee71eb0ffedb2674cf9bba625950a5e1d8667df5f31d7d979bae8594323bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCR7L7IK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAcceP6jdC75XMN7AcKHezJQZoLrDxSpmwqwJRUXxKcAiAqrKAr55mIOD%2FQzpFPhzKcDr2gPWHtD%2FM1qUmAtgaybSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjXhEwRkFfB%2Fm9siuKtwDF%2B8V3E10%2Fptrl024bb8pvPiz51eUMiylh%2FM16oY%2FNnIsL0LKSFscI29R3sBED47pV2495K4EH3jKZQaP%2F3yQ%2BwZB81TyYSpmHMPFTFxsQnNFyabj6KZczZYLCOSxo5rUOPhr4uTTRL2My5A%2Bo2TL1JSDEn%2BUZ15VRGgvPjH26ZF1Yeqxnjze0snEFVTDHAJN%2FWGujgmVAZaF%2B%2FdAqXKpS1WKUNcgkWimlFhp2FEnuZvZtuvl2uv0SWki6QCIySyRQiTJ6sJ7oZOGycNLOPf1p7AOIG0qhD%2BaoQTdc21fYA05TZYkUdG21UHhD2byckXqstuuFq8tofRGbSIdNHejWtPZkuQi3vR2%2FD3DpLzMKCs9vao8%2ByIvn5KzhBGRXOdOCAoOlVJzlRnEPv%2BBSlEEo3yQu%2FdFuiCNpo%2B0%2FBKq5F3u1PbuRogGGM839%2BDblBUTerKUkYvl9LL422J5KOkob3XFss7v0O8FrbRAKp64dj9rzSgxvFbDg8k6lpyO84r7Bd8SHthw0r8G6sScsD%2FhJZ8FWQ%2FQ9LSkvkCzDF4FzoOW1MfTBctT%2FOyH8UHnNJevxGiJdR251UFA371usxi9uS10%2BXheLcUbiAdP5rlhbO4Gtz1Gt%2FiTpzXcvqAw%2BpmsxAY6pgH4CHNN%2BS49kFqHLAfgSEXH3yl446dTC6zr%2Bec76Gjo5PaOdszqZ7BjZGhL2hBxaXZMQu2YnONLBFsF7C00n3Ozl%2B5UiCBR6GNNjPLz4FWVjZNo5kaiwnPb%2FSYsrTXv2XyR3KZ3uaHhrrmgtxSLy%2BjMY5EfuNOqDVJX%2BVWAzDtKtvIL6C2AedW%2FBGazN6gkoJsKbr8NG1DkH2Avpqx%2Foa60aKaXCswv&X-Amz-Signature=2c5a068d3cdf7607c57f86f6cccbb7d49de026e8c5775c9d22e5528236b6b923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCR7L7IK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAcceP6jdC75XMN7AcKHezJQZoLrDxSpmwqwJRUXxKcAiAqrKAr55mIOD%2FQzpFPhzKcDr2gPWHtD%2FM1qUmAtgaybSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjXhEwRkFfB%2Fm9siuKtwDF%2B8V3E10%2Fptrl024bb8pvPiz51eUMiylh%2FM16oY%2FNnIsL0LKSFscI29R3sBED47pV2495K4EH3jKZQaP%2F3yQ%2BwZB81TyYSpmHMPFTFxsQnNFyabj6KZczZYLCOSxo5rUOPhr4uTTRL2My5A%2Bo2TL1JSDEn%2BUZ15VRGgvPjH26ZF1Yeqxnjze0snEFVTDHAJN%2FWGujgmVAZaF%2B%2FdAqXKpS1WKUNcgkWimlFhp2FEnuZvZtuvl2uv0SWki6QCIySyRQiTJ6sJ7oZOGycNLOPf1p7AOIG0qhD%2BaoQTdc21fYA05TZYkUdG21UHhD2byckXqstuuFq8tofRGbSIdNHejWtPZkuQi3vR2%2FD3DpLzMKCs9vao8%2ByIvn5KzhBGRXOdOCAoOlVJzlRnEPv%2BBSlEEo3yQu%2FdFuiCNpo%2B0%2FBKq5F3u1PbuRogGGM839%2BDblBUTerKUkYvl9LL422J5KOkob3XFss7v0O8FrbRAKp64dj9rzSgxvFbDg8k6lpyO84r7Bd8SHthw0r8G6sScsD%2FhJZ8FWQ%2FQ9LSkvkCzDF4FzoOW1MfTBctT%2FOyH8UHnNJevxGiJdR251UFA371usxi9uS10%2BXheLcUbiAdP5rlhbO4Gtz1Gt%2FiTpzXcvqAw%2BpmsxAY6pgH4CHNN%2BS49kFqHLAfgSEXH3yl446dTC6zr%2Bec76Gjo5PaOdszqZ7BjZGhL2hBxaXZMQu2YnONLBFsF7C00n3Ozl%2B5UiCBR6GNNjPLz4FWVjZNo5kaiwnPb%2FSYsrTXv2XyR3KZ3uaHhrrmgtxSLy%2BjMY5EfuNOqDVJX%2BVWAzDtKtvIL6C2AedW%2FBGazN6gkoJsKbr8NG1DkH2Avpqx%2Foa60aKaXCswv&X-Amz-Signature=de54b7d5a8148a739641636c66d00f82fa8f8ae320b9572f96fdd49be94042c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCR7L7IK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAcceP6jdC75XMN7AcKHezJQZoLrDxSpmwqwJRUXxKcAiAqrKAr55mIOD%2FQzpFPhzKcDr2gPWHtD%2FM1qUmAtgaybSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjXhEwRkFfB%2Fm9siuKtwDF%2B8V3E10%2Fptrl024bb8pvPiz51eUMiylh%2FM16oY%2FNnIsL0LKSFscI29R3sBED47pV2495K4EH3jKZQaP%2F3yQ%2BwZB81TyYSpmHMPFTFxsQnNFyabj6KZczZYLCOSxo5rUOPhr4uTTRL2My5A%2Bo2TL1JSDEn%2BUZ15VRGgvPjH26ZF1Yeqxnjze0snEFVTDHAJN%2FWGujgmVAZaF%2B%2FdAqXKpS1WKUNcgkWimlFhp2FEnuZvZtuvl2uv0SWki6QCIySyRQiTJ6sJ7oZOGycNLOPf1p7AOIG0qhD%2BaoQTdc21fYA05TZYkUdG21UHhD2byckXqstuuFq8tofRGbSIdNHejWtPZkuQi3vR2%2FD3DpLzMKCs9vao8%2ByIvn5KzhBGRXOdOCAoOlVJzlRnEPv%2BBSlEEo3yQu%2FdFuiCNpo%2B0%2FBKq5F3u1PbuRogGGM839%2BDblBUTerKUkYvl9LL422J5KOkob3XFss7v0O8FrbRAKp64dj9rzSgxvFbDg8k6lpyO84r7Bd8SHthw0r8G6sScsD%2FhJZ8FWQ%2FQ9LSkvkCzDF4FzoOW1MfTBctT%2FOyH8UHnNJevxGiJdR251UFA371usxi9uS10%2BXheLcUbiAdP5rlhbO4Gtz1Gt%2FiTpzXcvqAw%2BpmsxAY6pgH4CHNN%2BS49kFqHLAfgSEXH3yl446dTC6zr%2Bec76Gjo5PaOdszqZ7BjZGhL2hBxaXZMQu2YnONLBFsF7C00n3Ozl%2B5UiCBR6GNNjPLz4FWVjZNo5kaiwnPb%2FSYsrTXv2XyR3KZ3uaHhrrmgtxSLy%2BjMY5EfuNOqDVJX%2BVWAzDtKtvIL6C2AedW%2FBGazN6gkoJsKbr8NG1DkH2Avpqx%2Foa60aKaXCswv&X-Amz-Signature=ffba08f2c8f36038b9e9417c9bb5c5fe9b73659b2d126d307c74b7594a2d3793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCR7L7IK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAcceP6jdC75XMN7AcKHezJQZoLrDxSpmwqwJRUXxKcAiAqrKAr55mIOD%2FQzpFPhzKcDr2gPWHtD%2FM1qUmAtgaybSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjXhEwRkFfB%2Fm9siuKtwDF%2B8V3E10%2Fptrl024bb8pvPiz51eUMiylh%2FM16oY%2FNnIsL0LKSFscI29R3sBED47pV2495K4EH3jKZQaP%2F3yQ%2BwZB81TyYSpmHMPFTFxsQnNFyabj6KZczZYLCOSxo5rUOPhr4uTTRL2My5A%2Bo2TL1JSDEn%2BUZ15VRGgvPjH26ZF1Yeqxnjze0snEFVTDHAJN%2FWGujgmVAZaF%2B%2FdAqXKpS1WKUNcgkWimlFhp2FEnuZvZtuvl2uv0SWki6QCIySyRQiTJ6sJ7oZOGycNLOPf1p7AOIG0qhD%2BaoQTdc21fYA05TZYkUdG21UHhD2byckXqstuuFq8tofRGbSIdNHejWtPZkuQi3vR2%2FD3DpLzMKCs9vao8%2ByIvn5KzhBGRXOdOCAoOlVJzlRnEPv%2BBSlEEo3yQu%2FdFuiCNpo%2B0%2FBKq5F3u1PbuRogGGM839%2BDblBUTerKUkYvl9LL422J5KOkob3XFss7v0O8FrbRAKp64dj9rzSgxvFbDg8k6lpyO84r7Bd8SHthw0r8G6sScsD%2FhJZ8FWQ%2FQ9LSkvkCzDF4FzoOW1MfTBctT%2FOyH8UHnNJevxGiJdR251UFA371usxi9uS10%2BXheLcUbiAdP5rlhbO4Gtz1Gt%2FiTpzXcvqAw%2BpmsxAY6pgH4CHNN%2BS49kFqHLAfgSEXH3yl446dTC6zr%2Bec76Gjo5PaOdszqZ7BjZGhL2hBxaXZMQu2YnONLBFsF7C00n3Ozl%2B5UiCBR6GNNjPLz4FWVjZNo5kaiwnPb%2FSYsrTXv2XyR3KZ3uaHhrrmgtxSLy%2BjMY5EfuNOqDVJX%2BVWAzDtKtvIL6C2AedW%2FBGazN6gkoJsKbr8NG1DkH2Avpqx%2Foa60aKaXCswv&X-Amz-Signature=92318a57776b4818487f6a3b57330f7f8e31404fdfc07a4faf87f2748aac0b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
