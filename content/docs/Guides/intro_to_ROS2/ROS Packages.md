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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YY6AERU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH4ipdXTbxqzELVG1o83Z6B%2FJ9yaMnRZq8SgLRDOj2WJAiBACYSyWwVWaz%2B1xUglxay1Ey7LewkAkCiZumhNz0QbOyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGN%2FLyBWVZl0sJG1cKtwD9oXR%2B5F6Xji46zE5%2BUiucinVdIfZWQQY4xc8Hh4SfG6BgTgWkat6%2BcYvxl2%2FdbTzFS4ZJMsoL%2Fjd6CMd%2F4n93Hwio6a%2BfALWfO8ggindRe%2FDivCqbQIjezcjKHSAD9vcf%2BBwHj5CcDW4ePDri%2FgKWRRpxURGmUcdvMvXeBc%2FYJwbBoEoAEOKLjsdaa3l0PbUIl5CoHf2ngVuPjlBcAq7tW3PZrbn2RE%2BLCUEQy7rkOV1y7QVUCTIJ%2Bvlq%2FXb1r70J68djicvvxobQCDCKGVTbm9AcZ21C5YuOfcxzfFut%2FJr5xBRLpL1HVm9loeWYLxeZHDCS5LGuvbEgOkhf%2BSLO%2FLuUxQ7onLNdYxnz6lhL8xN08NDyP2BDVCZP1l4jAPNoe3wsjipQc7m0L%2BHtZDn%2F7G9xREs8eZ4PKET1ldeT07REBP02ZsOLuawmzN6YJI5I6W1PDcFz20aN8l2V%2F%2BasYFQ00ZwgS51jsf%2Ff43M5ZRGNCdEaVuoSe9Mdkco2Z5eT2RNp1winkSjUKbRvPXCe4Qg94RQfygP9GwAJxF6VtMrRa7k435ad%2BBmCxM2HDO1kBpha7kOKgOyIwJ7diZ3sIynDQKIXwvkUr2jiDh1SYdJ9rTISJmGMkUuEcYwlZDCvgY6pgGx06yMq%2BFRnFLZjLFbjgqkCsHfrqiXwBVZJ62HJdGvexwokGtWtPO5UjUNm9J%2BaMLZr9rA%2BAPocjs5SVgYpHVa8F5mu2deUH21yWaStyPxJTfdgUybywC5qMQZEDctwfumD0w2do2jrVvCUOueyOZ359q5wyD%2Fsn7teX6epYbWvc3P4gk9C%2BfDiuNakx7WEqFvarCFq%2FfuBqWojxA4iDSJR61P%2FzAz&X-Amz-Signature=81d70a9cd0ddffe416371685bd61aab2f24aa77762b0c4db4efaaf0d3d506ca8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YY6AERU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH4ipdXTbxqzELVG1o83Z6B%2FJ9yaMnRZq8SgLRDOj2WJAiBACYSyWwVWaz%2B1xUglxay1Ey7LewkAkCiZumhNz0QbOyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGN%2FLyBWVZl0sJG1cKtwD9oXR%2B5F6Xji46zE5%2BUiucinVdIfZWQQY4xc8Hh4SfG6BgTgWkat6%2BcYvxl2%2FdbTzFS4ZJMsoL%2Fjd6CMd%2F4n93Hwio6a%2BfALWfO8ggindRe%2FDivCqbQIjezcjKHSAD9vcf%2BBwHj5CcDW4ePDri%2FgKWRRpxURGmUcdvMvXeBc%2FYJwbBoEoAEOKLjsdaa3l0PbUIl5CoHf2ngVuPjlBcAq7tW3PZrbn2RE%2BLCUEQy7rkOV1y7QVUCTIJ%2Bvlq%2FXb1r70J68djicvvxobQCDCKGVTbm9AcZ21C5YuOfcxzfFut%2FJr5xBRLpL1HVm9loeWYLxeZHDCS5LGuvbEgOkhf%2BSLO%2FLuUxQ7onLNdYxnz6lhL8xN08NDyP2BDVCZP1l4jAPNoe3wsjipQc7m0L%2BHtZDn%2F7G9xREs8eZ4PKET1ldeT07REBP02ZsOLuawmzN6YJI5I6W1PDcFz20aN8l2V%2F%2BasYFQ00ZwgS51jsf%2Ff43M5ZRGNCdEaVuoSe9Mdkco2Z5eT2RNp1winkSjUKbRvPXCe4Qg94RQfygP9GwAJxF6VtMrRa7k435ad%2BBmCxM2HDO1kBpha7kOKgOyIwJ7diZ3sIynDQKIXwvkUr2jiDh1SYdJ9rTISJmGMkUuEcYwlZDCvgY6pgGx06yMq%2BFRnFLZjLFbjgqkCsHfrqiXwBVZJ62HJdGvexwokGtWtPO5UjUNm9J%2BaMLZr9rA%2BAPocjs5SVgYpHVa8F5mu2deUH21yWaStyPxJTfdgUybywC5qMQZEDctwfumD0w2do2jrVvCUOueyOZ359q5wyD%2Fsn7teX6epYbWvc3P4gk9C%2BfDiuNakx7WEqFvarCFq%2FfuBqWojxA4iDSJR61P%2FzAz&X-Amz-Signature=856b32bbe0fb515c437b23180b06941aceedada3e6341708c6929be4cb99122a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YY6AERU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH4ipdXTbxqzELVG1o83Z6B%2FJ9yaMnRZq8SgLRDOj2WJAiBACYSyWwVWaz%2B1xUglxay1Ey7LewkAkCiZumhNz0QbOyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGN%2FLyBWVZl0sJG1cKtwD9oXR%2B5F6Xji46zE5%2BUiucinVdIfZWQQY4xc8Hh4SfG6BgTgWkat6%2BcYvxl2%2FdbTzFS4ZJMsoL%2Fjd6CMd%2F4n93Hwio6a%2BfALWfO8ggindRe%2FDivCqbQIjezcjKHSAD9vcf%2BBwHj5CcDW4ePDri%2FgKWRRpxURGmUcdvMvXeBc%2FYJwbBoEoAEOKLjsdaa3l0PbUIl5CoHf2ngVuPjlBcAq7tW3PZrbn2RE%2BLCUEQy7rkOV1y7QVUCTIJ%2Bvlq%2FXb1r70J68djicvvxobQCDCKGVTbm9AcZ21C5YuOfcxzfFut%2FJr5xBRLpL1HVm9loeWYLxeZHDCS5LGuvbEgOkhf%2BSLO%2FLuUxQ7onLNdYxnz6lhL8xN08NDyP2BDVCZP1l4jAPNoe3wsjipQc7m0L%2BHtZDn%2F7G9xREs8eZ4PKET1ldeT07REBP02ZsOLuawmzN6YJI5I6W1PDcFz20aN8l2V%2F%2BasYFQ00ZwgS51jsf%2Ff43M5ZRGNCdEaVuoSe9Mdkco2Z5eT2RNp1winkSjUKbRvPXCe4Qg94RQfygP9GwAJxF6VtMrRa7k435ad%2BBmCxM2HDO1kBpha7kOKgOyIwJ7diZ3sIynDQKIXwvkUr2jiDh1SYdJ9rTISJmGMkUuEcYwlZDCvgY6pgGx06yMq%2BFRnFLZjLFbjgqkCsHfrqiXwBVZJ62HJdGvexwokGtWtPO5UjUNm9J%2BaMLZr9rA%2BAPocjs5SVgYpHVa8F5mu2deUH21yWaStyPxJTfdgUybywC5qMQZEDctwfumD0w2do2jrVvCUOueyOZ359q5wyD%2Fsn7teX6epYbWvc3P4gk9C%2BfDiuNakx7WEqFvarCFq%2FfuBqWojxA4iDSJR61P%2FzAz&X-Amz-Signature=29be282c2d75e482ee857762d8e0a91845f333d0bfd655090e9e1651f4a440fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YY6AERU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH4ipdXTbxqzELVG1o83Z6B%2FJ9yaMnRZq8SgLRDOj2WJAiBACYSyWwVWaz%2B1xUglxay1Ey7LewkAkCiZumhNz0QbOyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGN%2FLyBWVZl0sJG1cKtwD9oXR%2B5F6Xji46zE5%2BUiucinVdIfZWQQY4xc8Hh4SfG6BgTgWkat6%2BcYvxl2%2FdbTzFS4ZJMsoL%2Fjd6CMd%2F4n93Hwio6a%2BfALWfO8ggindRe%2FDivCqbQIjezcjKHSAD9vcf%2BBwHj5CcDW4ePDri%2FgKWRRpxURGmUcdvMvXeBc%2FYJwbBoEoAEOKLjsdaa3l0PbUIl5CoHf2ngVuPjlBcAq7tW3PZrbn2RE%2BLCUEQy7rkOV1y7QVUCTIJ%2Bvlq%2FXb1r70J68djicvvxobQCDCKGVTbm9AcZ21C5YuOfcxzfFut%2FJr5xBRLpL1HVm9loeWYLxeZHDCS5LGuvbEgOkhf%2BSLO%2FLuUxQ7onLNdYxnz6lhL8xN08NDyP2BDVCZP1l4jAPNoe3wsjipQc7m0L%2BHtZDn%2F7G9xREs8eZ4PKET1ldeT07REBP02ZsOLuawmzN6YJI5I6W1PDcFz20aN8l2V%2F%2BasYFQ00ZwgS51jsf%2Ff43M5ZRGNCdEaVuoSe9Mdkco2Z5eT2RNp1winkSjUKbRvPXCe4Qg94RQfygP9GwAJxF6VtMrRa7k435ad%2BBmCxM2HDO1kBpha7kOKgOyIwJ7diZ3sIynDQKIXwvkUr2jiDh1SYdJ9rTISJmGMkUuEcYwlZDCvgY6pgGx06yMq%2BFRnFLZjLFbjgqkCsHfrqiXwBVZJ62HJdGvexwokGtWtPO5UjUNm9J%2BaMLZr9rA%2BAPocjs5SVgYpHVa8F5mu2deUH21yWaStyPxJTfdgUybywC5qMQZEDctwfumD0w2do2jrVvCUOueyOZ359q5wyD%2Fsn7teX6epYbWvc3P4gk9C%2BfDiuNakx7WEqFvarCFq%2FfuBqWojxA4iDSJR61P%2FzAz&X-Amz-Signature=684f6970e7909decac81ecaded3bf7ce1bf7ce3cb60e82b57c9ec523a495deb8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YY6AERU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH4ipdXTbxqzELVG1o83Z6B%2FJ9yaMnRZq8SgLRDOj2WJAiBACYSyWwVWaz%2B1xUglxay1Ey7LewkAkCiZumhNz0QbOyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGN%2FLyBWVZl0sJG1cKtwD9oXR%2B5F6Xji46zE5%2BUiucinVdIfZWQQY4xc8Hh4SfG6BgTgWkat6%2BcYvxl2%2FdbTzFS4ZJMsoL%2Fjd6CMd%2F4n93Hwio6a%2BfALWfO8ggindRe%2FDivCqbQIjezcjKHSAD9vcf%2BBwHj5CcDW4ePDri%2FgKWRRpxURGmUcdvMvXeBc%2FYJwbBoEoAEOKLjsdaa3l0PbUIl5CoHf2ngVuPjlBcAq7tW3PZrbn2RE%2BLCUEQy7rkOV1y7QVUCTIJ%2Bvlq%2FXb1r70J68djicvvxobQCDCKGVTbm9AcZ21C5YuOfcxzfFut%2FJr5xBRLpL1HVm9loeWYLxeZHDCS5LGuvbEgOkhf%2BSLO%2FLuUxQ7onLNdYxnz6lhL8xN08NDyP2BDVCZP1l4jAPNoe3wsjipQc7m0L%2BHtZDn%2F7G9xREs8eZ4PKET1ldeT07REBP02ZsOLuawmzN6YJI5I6W1PDcFz20aN8l2V%2F%2BasYFQ00ZwgS51jsf%2Ff43M5ZRGNCdEaVuoSe9Mdkco2Z5eT2RNp1winkSjUKbRvPXCe4Qg94RQfygP9GwAJxF6VtMrRa7k435ad%2BBmCxM2HDO1kBpha7kOKgOyIwJ7diZ3sIynDQKIXwvkUr2jiDh1SYdJ9rTISJmGMkUuEcYwlZDCvgY6pgGx06yMq%2BFRnFLZjLFbjgqkCsHfrqiXwBVZJ62HJdGvexwokGtWtPO5UjUNm9J%2BaMLZr9rA%2BAPocjs5SVgYpHVa8F5mu2deUH21yWaStyPxJTfdgUybywC5qMQZEDctwfumD0w2do2jrVvCUOueyOZ359q5wyD%2Fsn7teX6epYbWvc3P4gk9C%2BfDiuNakx7WEqFvarCFq%2FfuBqWojxA4iDSJR61P%2FzAz&X-Amz-Signature=9ffffa39f7d748a6513c210ed212cf0c45045ba2bb2f3e02230a154efe3abb77&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YY6AERU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH4ipdXTbxqzELVG1o83Z6B%2FJ9yaMnRZq8SgLRDOj2WJAiBACYSyWwVWaz%2B1xUglxay1Ey7LewkAkCiZumhNz0QbOyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGN%2FLyBWVZl0sJG1cKtwD9oXR%2B5F6Xji46zE5%2BUiucinVdIfZWQQY4xc8Hh4SfG6BgTgWkat6%2BcYvxl2%2FdbTzFS4ZJMsoL%2Fjd6CMd%2F4n93Hwio6a%2BfALWfO8ggindRe%2FDivCqbQIjezcjKHSAD9vcf%2BBwHj5CcDW4ePDri%2FgKWRRpxURGmUcdvMvXeBc%2FYJwbBoEoAEOKLjsdaa3l0PbUIl5CoHf2ngVuPjlBcAq7tW3PZrbn2RE%2BLCUEQy7rkOV1y7QVUCTIJ%2Bvlq%2FXb1r70J68djicvvxobQCDCKGVTbm9AcZ21C5YuOfcxzfFut%2FJr5xBRLpL1HVm9loeWYLxeZHDCS5LGuvbEgOkhf%2BSLO%2FLuUxQ7onLNdYxnz6lhL8xN08NDyP2BDVCZP1l4jAPNoe3wsjipQc7m0L%2BHtZDn%2F7G9xREs8eZ4PKET1ldeT07REBP02ZsOLuawmzN6YJI5I6W1PDcFz20aN8l2V%2F%2BasYFQ00ZwgS51jsf%2Ff43M5ZRGNCdEaVuoSe9Mdkco2Z5eT2RNp1winkSjUKbRvPXCe4Qg94RQfygP9GwAJxF6VtMrRa7k435ad%2BBmCxM2HDO1kBpha7kOKgOyIwJ7diZ3sIynDQKIXwvkUr2jiDh1SYdJ9rTISJmGMkUuEcYwlZDCvgY6pgGx06yMq%2BFRnFLZjLFbjgqkCsHfrqiXwBVZJ62HJdGvexwokGtWtPO5UjUNm9J%2BaMLZr9rA%2BAPocjs5SVgYpHVa8F5mu2deUH21yWaStyPxJTfdgUybywC5qMQZEDctwfumD0w2do2jrVvCUOueyOZ359q5wyD%2Fsn7teX6epYbWvc3P4gk9C%2BfDiuNakx7WEqFvarCFq%2FfuBqWojxA4iDSJR61P%2FzAz&X-Amz-Signature=f7d012712ac243aa886d431380be328c2a426fe41ef473ea762e919c554e951f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YY6AERU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH4ipdXTbxqzELVG1o83Z6B%2FJ9yaMnRZq8SgLRDOj2WJAiBACYSyWwVWaz%2B1xUglxay1Ey7LewkAkCiZumhNz0QbOyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGN%2FLyBWVZl0sJG1cKtwD9oXR%2B5F6Xji46zE5%2BUiucinVdIfZWQQY4xc8Hh4SfG6BgTgWkat6%2BcYvxl2%2FdbTzFS4ZJMsoL%2Fjd6CMd%2F4n93Hwio6a%2BfALWfO8ggindRe%2FDivCqbQIjezcjKHSAD9vcf%2BBwHj5CcDW4ePDri%2FgKWRRpxURGmUcdvMvXeBc%2FYJwbBoEoAEOKLjsdaa3l0PbUIl5CoHf2ngVuPjlBcAq7tW3PZrbn2RE%2BLCUEQy7rkOV1y7QVUCTIJ%2Bvlq%2FXb1r70J68djicvvxobQCDCKGVTbm9AcZ21C5YuOfcxzfFut%2FJr5xBRLpL1HVm9loeWYLxeZHDCS5LGuvbEgOkhf%2BSLO%2FLuUxQ7onLNdYxnz6lhL8xN08NDyP2BDVCZP1l4jAPNoe3wsjipQc7m0L%2BHtZDn%2F7G9xREs8eZ4PKET1ldeT07REBP02ZsOLuawmzN6YJI5I6W1PDcFz20aN8l2V%2F%2BasYFQ00ZwgS51jsf%2Ff43M5ZRGNCdEaVuoSe9Mdkco2Z5eT2RNp1winkSjUKbRvPXCe4Qg94RQfygP9GwAJxF6VtMrRa7k435ad%2BBmCxM2HDO1kBpha7kOKgOyIwJ7diZ3sIynDQKIXwvkUr2jiDh1SYdJ9rTISJmGMkUuEcYwlZDCvgY6pgGx06yMq%2BFRnFLZjLFbjgqkCsHfrqiXwBVZJ62HJdGvexwokGtWtPO5UjUNm9J%2BaMLZr9rA%2BAPocjs5SVgYpHVa8F5mu2deUH21yWaStyPxJTfdgUybywC5qMQZEDctwfumD0w2do2jrVvCUOueyOZ359q5wyD%2Fsn7teX6epYbWvc3P4gk9C%2BfDiuNakx7WEqFvarCFq%2FfuBqWojxA4iDSJR61P%2FzAz&X-Amz-Signature=8e83f45b7374ad7c0eddfaad9617779d72b47e8ac2a106e9785b708669b808e7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
