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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G2Z3RJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2QUeqFsLjs3Gty5U8I11MYjnogwcg7hQk96RJ6UV%2BYAiEAjC78LnRbA86wjL0gy3GuG4Qt2iRLV7V07e7%2F7074SoEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7ojGuC%2FFAURhJOqCrcA0zWbLYEqNuOTiQNBNGHTc%2F0BgmupWENUqkYDyd6mncPdsV7sXm%2Fb5W4MHd3VaBOFoYCmLuAMhc9Gt2HwVU2SDjO7hSAzF8tcKaf35XpWP2ktkZUG3sOb40IjMakdt1tsqUFZJuB6ebQ9374peaveYIKDgTz1eBfoSO3I5p3JjcTF%2FNhTfWmiVtjjqmWZf70UpIEkm8h2UceUqMywNOBi8Ld4n3hjuMgbxLnc2K1xZ1UF5E7fgAh2LLj4Z1LR4xRJQhJ2JIK%2F5NH36jBRQAhf%2FNN%2Fo%2B10B3uRr4SpGsrp6QxDu1sT6DYHik9CpJREYWrppUYSQkBd7tEsbhD9dVHNXdZW9tzy0ZHJILFaIvQt9xS5DCT0g3KaYYWFdIVDZdKPfnZn6Jhn6b56jtF45oJ2G7sEaOgWMio5kpi2bK3BloyoVb6nZQ15jGc3jWnDYl6Aw2nJF1JT%2BTcNTWjv5FzxE2%2BzDXC4psRgb0yi3XmNWE34Mn8m0k1SO0DouO3YqobhiAljyGiRqeY4ZIMka7TdBBfbQppQm8osTVp4MNawuCdHGhkjA63TbEtZBSLabGAEu24C4x5UsLgo%2BUDhBdycSlWWZNEhpjnxjDReqkkjVcIlTqA13mfeTqyiJStMM2y1sIGOqUBI0vX5Dto4R3iHBwIDY%2BLt47JwwUabKuAyEynjMYbLmKHh2j2WynOevhyLtLmAuNb%2FEzA0feGXx1BdwwaUTGN26fY08n1k71tdJhc9tgZ9wxvsswotM7WqfgaycW5iJWGYrVOVw%2BblWykXoHIpsbVmeGYhhjTXXdmfYMtsQaJrRu9tYFdKnpZ%2BsdSdXBBSm98VpuKAVxybVtC%2FNcJbWGySKSeOFnY&X-Amz-Signature=3fff725f2491434276ff0ad08d8edfba0255f1637fcf92d2221a55bd94b8ffc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G2Z3RJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2QUeqFsLjs3Gty5U8I11MYjnogwcg7hQk96RJ6UV%2BYAiEAjC78LnRbA86wjL0gy3GuG4Qt2iRLV7V07e7%2F7074SoEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7ojGuC%2FFAURhJOqCrcA0zWbLYEqNuOTiQNBNGHTc%2F0BgmupWENUqkYDyd6mncPdsV7sXm%2Fb5W4MHd3VaBOFoYCmLuAMhc9Gt2HwVU2SDjO7hSAzF8tcKaf35XpWP2ktkZUG3sOb40IjMakdt1tsqUFZJuB6ebQ9374peaveYIKDgTz1eBfoSO3I5p3JjcTF%2FNhTfWmiVtjjqmWZf70UpIEkm8h2UceUqMywNOBi8Ld4n3hjuMgbxLnc2K1xZ1UF5E7fgAh2LLj4Z1LR4xRJQhJ2JIK%2F5NH36jBRQAhf%2FNN%2Fo%2B10B3uRr4SpGsrp6QxDu1sT6DYHik9CpJREYWrppUYSQkBd7tEsbhD9dVHNXdZW9tzy0ZHJILFaIvQt9xS5DCT0g3KaYYWFdIVDZdKPfnZn6Jhn6b56jtF45oJ2G7sEaOgWMio5kpi2bK3BloyoVb6nZQ15jGc3jWnDYl6Aw2nJF1JT%2BTcNTWjv5FzxE2%2BzDXC4psRgb0yi3XmNWE34Mn8m0k1SO0DouO3YqobhiAljyGiRqeY4ZIMka7TdBBfbQppQm8osTVp4MNawuCdHGhkjA63TbEtZBSLabGAEu24C4x5UsLgo%2BUDhBdycSlWWZNEhpjnxjDReqkkjVcIlTqA13mfeTqyiJStMM2y1sIGOqUBI0vX5Dto4R3iHBwIDY%2BLt47JwwUabKuAyEynjMYbLmKHh2j2WynOevhyLtLmAuNb%2FEzA0feGXx1BdwwaUTGN26fY08n1k71tdJhc9tgZ9wxvsswotM7WqfgaycW5iJWGYrVOVw%2BblWykXoHIpsbVmeGYhhjTXXdmfYMtsQaJrRu9tYFdKnpZ%2BsdSdXBBSm98VpuKAVxybVtC%2FNcJbWGySKSeOFnY&X-Amz-Signature=373e6c3f8ef9141488f0bf586023e964da24bf55f285c8f9a63d16ef698cb0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G2Z3RJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2QUeqFsLjs3Gty5U8I11MYjnogwcg7hQk96RJ6UV%2BYAiEAjC78LnRbA86wjL0gy3GuG4Qt2iRLV7V07e7%2F7074SoEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7ojGuC%2FFAURhJOqCrcA0zWbLYEqNuOTiQNBNGHTc%2F0BgmupWENUqkYDyd6mncPdsV7sXm%2Fb5W4MHd3VaBOFoYCmLuAMhc9Gt2HwVU2SDjO7hSAzF8tcKaf35XpWP2ktkZUG3sOb40IjMakdt1tsqUFZJuB6ebQ9374peaveYIKDgTz1eBfoSO3I5p3JjcTF%2FNhTfWmiVtjjqmWZf70UpIEkm8h2UceUqMywNOBi8Ld4n3hjuMgbxLnc2K1xZ1UF5E7fgAh2LLj4Z1LR4xRJQhJ2JIK%2F5NH36jBRQAhf%2FNN%2Fo%2B10B3uRr4SpGsrp6QxDu1sT6DYHik9CpJREYWrppUYSQkBd7tEsbhD9dVHNXdZW9tzy0ZHJILFaIvQt9xS5DCT0g3KaYYWFdIVDZdKPfnZn6Jhn6b56jtF45oJ2G7sEaOgWMio5kpi2bK3BloyoVb6nZQ15jGc3jWnDYl6Aw2nJF1JT%2BTcNTWjv5FzxE2%2BzDXC4psRgb0yi3XmNWE34Mn8m0k1SO0DouO3YqobhiAljyGiRqeY4ZIMka7TdBBfbQppQm8osTVp4MNawuCdHGhkjA63TbEtZBSLabGAEu24C4x5UsLgo%2BUDhBdycSlWWZNEhpjnxjDReqkkjVcIlTqA13mfeTqyiJStMM2y1sIGOqUBI0vX5Dto4R3iHBwIDY%2BLt47JwwUabKuAyEynjMYbLmKHh2j2WynOevhyLtLmAuNb%2FEzA0feGXx1BdwwaUTGN26fY08n1k71tdJhc9tgZ9wxvsswotM7WqfgaycW5iJWGYrVOVw%2BblWykXoHIpsbVmeGYhhjTXXdmfYMtsQaJrRu9tYFdKnpZ%2BsdSdXBBSm98VpuKAVxybVtC%2FNcJbWGySKSeOFnY&X-Amz-Signature=7b7cbd944e479f4273ce76c972409dd0d27d799d3efb6fc8aeb74f9c48c143a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G2Z3RJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2QUeqFsLjs3Gty5U8I11MYjnogwcg7hQk96RJ6UV%2BYAiEAjC78LnRbA86wjL0gy3GuG4Qt2iRLV7V07e7%2F7074SoEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7ojGuC%2FFAURhJOqCrcA0zWbLYEqNuOTiQNBNGHTc%2F0BgmupWENUqkYDyd6mncPdsV7sXm%2Fb5W4MHd3VaBOFoYCmLuAMhc9Gt2HwVU2SDjO7hSAzF8tcKaf35XpWP2ktkZUG3sOb40IjMakdt1tsqUFZJuB6ebQ9374peaveYIKDgTz1eBfoSO3I5p3JjcTF%2FNhTfWmiVtjjqmWZf70UpIEkm8h2UceUqMywNOBi8Ld4n3hjuMgbxLnc2K1xZ1UF5E7fgAh2LLj4Z1LR4xRJQhJ2JIK%2F5NH36jBRQAhf%2FNN%2Fo%2B10B3uRr4SpGsrp6QxDu1sT6DYHik9CpJREYWrppUYSQkBd7tEsbhD9dVHNXdZW9tzy0ZHJILFaIvQt9xS5DCT0g3KaYYWFdIVDZdKPfnZn6Jhn6b56jtF45oJ2G7sEaOgWMio5kpi2bK3BloyoVb6nZQ15jGc3jWnDYl6Aw2nJF1JT%2BTcNTWjv5FzxE2%2BzDXC4psRgb0yi3XmNWE34Mn8m0k1SO0DouO3YqobhiAljyGiRqeY4ZIMka7TdBBfbQppQm8osTVp4MNawuCdHGhkjA63TbEtZBSLabGAEu24C4x5UsLgo%2BUDhBdycSlWWZNEhpjnxjDReqkkjVcIlTqA13mfeTqyiJStMM2y1sIGOqUBI0vX5Dto4R3iHBwIDY%2BLt47JwwUabKuAyEynjMYbLmKHh2j2WynOevhyLtLmAuNb%2FEzA0feGXx1BdwwaUTGN26fY08n1k71tdJhc9tgZ9wxvsswotM7WqfgaycW5iJWGYrVOVw%2BblWykXoHIpsbVmeGYhhjTXXdmfYMtsQaJrRu9tYFdKnpZ%2BsdSdXBBSm98VpuKAVxybVtC%2FNcJbWGySKSeOFnY&X-Amz-Signature=65adcf932abd4d820a901670c6547f2d01d55644bf1eb577182bae8b4a41b7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G2Z3RJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2QUeqFsLjs3Gty5U8I11MYjnogwcg7hQk96RJ6UV%2BYAiEAjC78LnRbA86wjL0gy3GuG4Qt2iRLV7V07e7%2F7074SoEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7ojGuC%2FFAURhJOqCrcA0zWbLYEqNuOTiQNBNGHTc%2F0BgmupWENUqkYDyd6mncPdsV7sXm%2Fb5W4MHd3VaBOFoYCmLuAMhc9Gt2HwVU2SDjO7hSAzF8tcKaf35XpWP2ktkZUG3sOb40IjMakdt1tsqUFZJuB6ebQ9374peaveYIKDgTz1eBfoSO3I5p3JjcTF%2FNhTfWmiVtjjqmWZf70UpIEkm8h2UceUqMywNOBi8Ld4n3hjuMgbxLnc2K1xZ1UF5E7fgAh2LLj4Z1LR4xRJQhJ2JIK%2F5NH36jBRQAhf%2FNN%2Fo%2B10B3uRr4SpGsrp6QxDu1sT6DYHik9CpJREYWrppUYSQkBd7tEsbhD9dVHNXdZW9tzy0ZHJILFaIvQt9xS5DCT0g3KaYYWFdIVDZdKPfnZn6Jhn6b56jtF45oJ2G7sEaOgWMio5kpi2bK3BloyoVb6nZQ15jGc3jWnDYl6Aw2nJF1JT%2BTcNTWjv5FzxE2%2BzDXC4psRgb0yi3XmNWE34Mn8m0k1SO0DouO3YqobhiAljyGiRqeY4ZIMka7TdBBfbQppQm8osTVp4MNawuCdHGhkjA63TbEtZBSLabGAEu24C4x5UsLgo%2BUDhBdycSlWWZNEhpjnxjDReqkkjVcIlTqA13mfeTqyiJStMM2y1sIGOqUBI0vX5Dto4R3iHBwIDY%2BLt47JwwUabKuAyEynjMYbLmKHh2j2WynOevhyLtLmAuNb%2FEzA0feGXx1BdwwaUTGN26fY08n1k71tdJhc9tgZ9wxvsswotM7WqfgaycW5iJWGYrVOVw%2BblWykXoHIpsbVmeGYhhjTXXdmfYMtsQaJrRu9tYFdKnpZ%2BsdSdXBBSm98VpuKAVxybVtC%2FNcJbWGySKSeOFnY&X-Amz-Signature=a4726d212887aaf0cc16e354f58482060913b16ba66dc55bd055b681facde358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G2Z3RJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2QUeqFsLjs3Gty5U8I11MYjnogwcg7hQk96RJ6UV%2BYAiEAjC78LnRbA86wjL0gy3GuG4Qt2iRLV7V07e7%2F7074SoEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7ojGuC%2FFAURhJOqCrcA0zWbLYEqNuOTiQNBNGHTc%2F0BgmupWENUqkYDyd6mncPdsV7sXm%2Fb5W4MHd3VaBOFoYCmLuAMhc9Gt2HwVU2SDjO7hSAzF8tcKaf35XpWP2ktkZUG3sOb40IjMakdt1tsqUFZJuB6ebQ9374peaveYIKDgTz1eBfoSO3I5p3JjcTF%2FNhTfWmiVtjjqmWZf70UpIEkm8h2UceUqMywNOBi8Ld4n3hjuMgbxLnc2K1xZ1UF5E7fgAh2LLj4Z1LR4xRJQhJ2JIK%2F5NH36jBRQAhf%2FNN%2Fo%2B10B3uRr4SpGsrp6QxDu1sT6DYHik9CpJREYWrppUYSQkBd7tEsbhD9dVHNXdZW9tzy0ZHJILFaIvQt9xS5DCT0g3KaYYWFdIVDZdKPfnZn6Jhn6b56jtF45oJ2G7sEaOgWMio5kpi2bK3BloyoVb6nZQ15jGc3jWnDYl6Aw2nJF1JT%2BTcNTWjv5FzxE2%2BzDXC4psRgb0yi3XmNWE34Mn8m0k1SO0DouO3YqobhiAljyGiRqeY4ZIMka7TdBBfbQppQm8osTVp4MNawuCdHGhkjA63TbEtZBSLabGAEu24C4x5UsLgo%2BUDhBdycSlWWZNEhpjnxjDReqkkjVcIlTqA13mfeTqyiJStMM2y1sIGOqUBI0vX5Dto4R3iHBwIDY%2BLt47JwwUabKuAyEynjMYbLmKHh2j2WynOevhyLtLmAuNb%2FEzA0feGXx1BdwwaUTGN26fY08n1k71tdJhc9tgZ9wxvsswotM7WqfgaycW5iJWGYrVOVw%2BblWykXoHIpsbVmeGYhhjTXXdmfYMtsQaJrRu9tYFdKnpZ%2BsdSdXBBSm98VpuKAVxybVtC%2FNcJbWGySKSeOFnY&X-Amz-Signature=bee2e0ae99af15b8e42f671bb5b63a5a9c2f8ffeaeca05f499fedfddcc50fbfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G2Z3RJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2QUeqFsLjs3Gty5U8I11MYjnogwcg7hQk96RJ6UV%2BYAiEAjC78LnRbA86wjL0gy3GuG4Qt2iRLV7V07e7%2F7074SoEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7ojGuC%2FFAURhJOqCrcA0zWbLYEqNuOTiQNBNGHTc%2F0BgmupWENUqkYDyd6mncPdsV7sXm%2Fb5W4MHd3VaBOFoYCmLuAMhc9Gt2HwVU2SDjO7hSAzF8tcKaf35XpWP2ktkZUG3sOb40IjMakdt1tsqUFZJuB6ebQ9374peaveYIKDgTz1eBfoSO3I5p3JjcTF%2FNhTfWmiVtjjqmWZf70UpIEkm8h2UceUqMywNOBi8Ld4n3hjuMgbxLnc2K1xZ1UF5E7fgAh2LLj4Z1LR4xRJQhJ2JIK%2F5NH36jBRQAhf%2FNN%2Fo%2B10B3uRr4SpGsrp6QxDu1sT6DYHik9CpJREYWrppUYSQkBd7tEsbhD9dVHNXdZW9tzy0ZHJILFaIvQt9xS5DCT0g3KaYYWFdIVDZdKPfnZn6Jhn6b56jtF45oJ2G7sEaOgWMio5kpi2bK3BloyoVb6nZQ15jGc3jWnDYl6Aw2nJF1JT%2BTcNTWjv5FzxE2%2BzDXC4psRgb0yi3XmNWE34Mn8m0k1SO0DouO3YqobhiAljyGiRqeY4ZIMka7TdBBfbQppQm8osTVp4MNawuCdHGhkjA63TbEtZBSLabGAEu24C4x5UsLgo%2BUDhBdycSlWWZNEhpjnxjDReqkkjVcIlTqA13mfeTqyiJStMM2y1sIGOqUBI0vX5Dto4R3iHBwIDY%2BLt47JwwUabKuAyEynjMYbLmKHh2j2WynOevhyLtLmAuNb%2FEzA0feGXx1BdwwaUTGN26fY08n1k71tdJhc9tgZ9wxvsswotM7WqfgaycW5iJWGYrVOVw%2BblWykXoHIpsbVmeGYhhjTXXdmfYMtsQaJrRu9tYFdKnpZ%2BsdSdXBBSm98VpuKAVxybVtC%2FNcJbWGySKSeOFnY&X-Amz-Signature=ebae6171025b60d2cf5ac4c46a37489fa68b1372998c351b57cf5e176d321b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
