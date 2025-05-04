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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVLAXRQH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFvwjMOxMlkRa4aAOiysPYKBOSHW8nS2O8hnKhxwrhFSAiBFXxoCOfN26CLxeBjovjXT3Cc8ve0DwVsVZaFUDjuOoyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMxvXDtUYL6qu8U7ZCKtwDkUcM4LBmj%2BHQWD3e%2BFHptSTVpf3DIsX3crv9gv8445c79j8LwXYo%2FcEdZDgDpQD7gKmZ65PB8wy2BC8Lw7eoGRZjMe%2F4sBJSnbhzka6pKVkO6%2FmP4c1qRpGcGupetOBGiyCEUAW6ypLFmmkUH6tHnFHj5QGVrr9mZc3NAgT%2BmIxZSP0x5WrTMk%2BCG3XLI95x7UbmL3BmpgAell2CaqP%2FP6s2IF3tMqdOkCW8QSH%2FemDpk6SYpni8lGnCYzZqkH4KJQbL0w2zAWhOxZcTKOtN9X6CUk42hQwQ6anbrP2DPkYiY9LH1HbuWsUCxFmD3pzfZLdMR1oTbsQzQhTSJsm%2BrKnCJsu3d%2F%2Fn8oJYyvezrXYlitnd%2FDIP3fLfC4Gau7UFJbvRQ2GHDYRMaIniBwUcceb52JW2s0rCD%2FsXTqeB2WgfQmjMJxvVUMiuI7kDquqK%2BNzw8F9fJ5nz6nkQmeirY2wAXU%2F4nCTv1wGzXQ1jD%2FR9a95xjw%2B34fCSrPSQYNI2Lv1GzNfYGwF2AiK6NCFIDIq%2FE%2BXb6AyrfY3OscrKYEGyVfduSAXg9A5T7beO3LcnSK7JKYks0P7fe9JCVLGXDs%2BHfFHUcoIokoHOeAit%2BzdEaP4IlNIE9WI626IwlYzdwAY6pgGp8OKdhlDYuAXYkt6EA2iNr9R1GJjXKuWOe7ipoYrzfS3BYnra%2BSXqcp6wDTPK1QwbtgqW4ALAIV2vObjALc7SJG%2BKJ%2ByS7i%2BydWrB8Epqc6PIcRbtKHwCF%2FftlJdpoXyEE8s8d%2BC6HfDDvTXcfIHuq7tTnI218ff4AY%2BpOn6%2B2caAy%2FbJwWGuKMS20J%2FpC5P7upj9os3pJp%2BvH%2F1eSPu4PQpc0Yx2&X-Amz-Signature=40d27890e9549fec51fa96dc94fcc6b20894e6d4717ad53f2b3a4c24c4cff7e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVLAXRQH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFvwjMOxMlkRa4aAOiysPYKBOSHW8nS2O8hnKhxwrhFSAiBFXxoCOfN26CLxeBjovjXT3Cc8ve0DwVsVZaFUDjuOoyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMxvXDtUYL6qu8U7ZCKtwDkUcM4LBmj%2BHQWD3e%2BFHptSTVpf3DIsX3crv9gv8445c79j8LwXYo%2FcEdZDgDpQD7gKmZ65PB8wy2BC8Lw7eoGRZjMe%2F4sBJSnbhzka6pKVkO6%2FmP4c1qRpGcGupetOBGiyCEUAW6ypLFmmkUH6tHnFHj5QGVrr9mZc3NAgT%2BmIxZSP0x5WrTMk%2BCG3XLI95x7UbmL3BmpgAell2CaqP%2FP6s2IF3tMqdOkCW8QSH%2FemDpk6SYpni8lGnCYzZqkH4KJQbL0w2zAWhOxZcTKOtN9X6CUk42hQwQ6anbrP2DPkYiY9LH1HbuWsUCxFmD3pzfZLdMR1oTbsQzQhTSJsm%2BrKnCJsu3d%2F%2Fn8oJYyvezrXYlitnd%2FDIP3fLfC4Gau7UFJbvRQ2GHDYRMaIniBwUcceb52JW2s0rCD%2FsXTqeB2WgfQmjMJxvVUMiuI7kDquqK%2BNzw8F9fJ5nz6nkQmeirY2wAXU%2F4nCTv1wGzXQ1jD%2FR9a95xjw%2B34fCSrPSQYNI2Lv1GzNfYGwF2AiK6NCFIDIq%2FE%2BXb6AyrfY3OscrKYEGyVfduSAXg9A5T7beO3LcnSK7JKYks0P7fe9JCVLGXDs%2BHfFHUcoIokoHOeAit%2BzdEaP4IlNIE9WI626IwlYzdwAY6pgGp8OKdhlDYuAXYkt6EA2iNr9R1GJjXKuWOe7ipoYrzfS3BYnra%2BSXqcp6wDTPK1QwbtgqW4ALAIV2vObjALc7SJG%2BKJ%2ByS7i%2BydWrB8Epqc6PIcRbtKHwCF%2FftlJdpoXyEE8s8d%2BC6HfDDvTXcfIHuq7tTnI218ff4AY%2BpOn6%2B2caAy%2FbJwWGuKMS20J%2FpC5P7upj9os3pJp%2BvH%2F1eSPu4PQpc0Yx2&X-Amz-Signature=9261e5bb6917e485d65564332f4e29fc5ff5b039cdb8b60828a917dc374b17a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVLAXRQH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFvwjMOxMlkRa4aAOiysPYKBOSHW8nS2O8hnKhxwrhFSAiBFXxoCOfN26CLxeBjovjXT3Cc8ve0DwVsVZaFUDjuOoyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMxvXDtUYL6qu8U7ZCKtwDkUcM4LBmj%2BHQWD3e%2BFHptSTVpf3DIsX3crv9gv8445c79j8LwXYo%2FcEdZDgDpQD7gKmZ65PB8wy2BC8Lw7eoGRZjMe%2F4sBJSnbhzka6pKVkO6%2FmP4c1qRpGcGupetOBGiyCEUAW6ypLFmmkUH6tHnFHj5QGVrr9mZc3NAgT%2BmIxZSP0x5WrTMk%2BCG3XLI95x7UbmL3BmpgAell2CaqP%2FP6s2IF3tMqdOkCW8QSH%2FemDpk6SYpni8lGnCYzZqkH4KJQbL0w2zAWhOxZcTKOtN9X6CUk42hQwQ6anbrP2DPkYiY9LH1HbuWsUCxFmD3pzfZLdMR1oTbsQzQhTSJsm%2BrKnCJsu3d%2F%2Fn8oJYyvezrXYlitnd%2FDIP3fLfC4Gau7UFJbvRQ2GHDYRMaIniBwUcceb52JW2s0rCD%2FsXTqeB2WgfQmjMJxvVUMiuI7kDquqK%2BNzw8F9fJ5nz6nkQmeirY2wAXU%2F4nCTv1wGzXQ1jD%2FR9a95xjw%2B34fCSrPSQYNI2Lv1GzNfYGwF2AiK6NCFIDIq%2FE%2BXb6AyrfY3OscrKYEGyVfduSAXg9A5T7beO3LcnSK7JKYks0P7fe9JCVLGXDs%2BHfFHUcoIokoHOeAit%2BzdEaP4IlNIE9WI626IwlYzdwAY6pgGp8OKdhlDYuAXYkt6EA2iNr9R1GJjXKuWOe7ipoYrzfS3BYnra%2BSXqcp6wDTPK1QwbtgqW4ALAIV2vObjALc7SJG%2BKJ%2ByS7i%2BydWrB8Epqc6PIcRbtKHwCF%2FftlJdpoXyEE8s8d%2BC6HfDDvTXcfIHuq7tTnI218ff4AY%2BpOn6%2B2caAy%2FbJwWGuKMS20J%2FpC5P7upj9os3pJp%2BvH%2F1eSPu4PQpc0Yx2&X-Amz-Signature=e73879591ac356da9eefeb1cae33624bd8f6eb3cc71131844f8e52bb05c482df&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVLAXRQH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFvwjMOxMlkRa4aAOiysPYKBOSHW8nS2O8hnKhxwrhFSAiBFXxoCOfN26CLxeBjovjXT3Cc8ve0DwVsVZaFUDjuOoyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMxvXDtUYL6qu8U7ZCKtwDkUcM4LBmj%2BHQWD3e%2BFHptSTVpf3DIsX3crv9gv8445c79j8LwXYo%2FcEdZDgDpQD7gKmZ65PB8wy2BC8Lw7eoGRZjMe%2F4sBJSnbhzka6pKVkO6%2FmP4c1qRpGcGupetOBGiyCEUAW6ypLFmmkUH6tHnFHj5QGVrr9mZc3NAgT%2BmIxZSP0x5WrTMk%2BCG3XLI95x7UbmL3BmpgAell2CaqP%2FP6s2IF3tMqdOkCW8QSH%2FemDpk6SYpni8lGnCYzZqkH4KJQbL0w2zAWhOxZcTKOtN9X6CUk42hQwQ6anbrP2DPkYiY9LH1HbuWsUCxFmD3pzfZLdMR1oTbsQzQhTSJsm%2BrKnCJsu3d%2F%2Fn8oJYyvezrXYlitnd%2FDIP3fLfC4Gau7UFJbvRQ2GHDYRMaIniBwUcceb52JW2s0rCD%2FsXTqeB2WgfQmjMJxvVUMiuI7kDquqK%2BNzw8F9fJ5nz6nkQmeirY2wAXU%2F4nCTv1wGzXQ1jD%2FR9a95xjw%2B34fCSrPSQYNI2Lv1GzNfYGwF2AiK6NCFIDIq%2FE%2BXb6AyrfY3OscrKYEGyVfduSAXg9A5T7beO3LcnSK7JKYks0P7fe9JCVLGXDs%2BHfFHUcoIokoHOeAit%2BzdEaP4IlNIE9WI626IwlYzdwAY6pgGp8OKdhlDYuAXYkt6EA2iNr9R1GJjXKuWOe7ipoYrzfS3BYnra%2BSXqcp6wDTPK1QwbtgqW4ALAIV2vObjALc7SJG%2BKJ%2ByS7i%2BydWrB8Epqc6PIcRbtKHwCF%2FftlJdpoXyEE8s8d%2BC6HfDDvTXcfIHuq7tTnI218ff4AY%2BpOn6%2B2caAy%2FbJwWGuKMS20J%2FpC5P7upj9os3pJp%2BvH%2F1eSPu4PQpc0Yx2&X-Amz-Signature=2ab34b39f30b86ac01127ca2fecb74b25c5df7110c4601573d353ac78a36ce60&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVLAXRQH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFvwjMOxMlkRa4aAOiysPYKBOSHW8nS2O8hnKhxwrhFSAiBFXxoCOfN26CLxeBjovjXT3Cc8ve0DwVsVZaFUDjuOoyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMxvXDtUYL6qu8U7ZCKtwDkUcM4LBmj%2BHQWD3e%2BFHptSTVpf3DIsX3crv9gv8445c79j8LwXYo%2FcEdZDgDpQD7gKmZ65PB8wy2BC8Lw7eoGRZjMe%2F4sBJSnbhzka6pKVkO6%2FmP4c1qRpGcGupetOBGiyCEUAW6ypLFmmkUH6tHnFHj5QGVrr9mZc3NAgT%2BmIxZSP0x5WrTMk%2BCG3XLI95x7UbmL3BmpgAell2CaqP%2FP6s2IF3tMqdOkCW8QSH%2FemDpk6SYpni8lGnCYzZqkH4KJQbL0w2zAWhOxZcTKOtN9X6CUk42hQwQ6anbrP2DPkYiY9LH1HbuWsUCxFmD3pzfZLdMR1oTbsQzQhTSJsm%2BrKnCJsu3d%2F%2Fn8oJYyvezrXYlitnd%2FDIP3fLfC4Gau7UFJbvRQ2GHDYRMaIniBwUcceb52JW2s0rCD%2FsXTqeB2WgfQmjMJxvVUMiuI7kDquqK%2BNzw8F9fJ5nz6nkQmeirY2wAXU%2F4nCTv1wGzXQ1jD%2FR9a95xjw%2B34fCSrPSQYNI2Lv1GzNfYGwF2AiK6NCFIDIq%2FE%2BXb6AyrfY3OscrKYEGyVfduSAXg9A5T7beO3LcnSK7JKYks0P7fe9JCVLGXDs%2BHfFHUcoIokoHOeAit%2BzdEaP4IlNIE9WI626IwlYzdwAY6pgGp8OKdhlDYuAXYkt6EA2iNr9R1GJjXKuWOe7ipoYrzfS3BYnra%2BSXqcp6wDTPK1QwbtgqW4ALAIV2vObjALc7SJG%2BKJ%2ByS7i%2BydWrB8Epqc6PIcRbtKHwCF%2FftlJdpoXyEE8s8d%2BC6HfDDvTXcfIHuq7tTnI218ff4AY%2BpOn6%2B2caAy%2FbJwWGuKMS20J%2FpC5P7upj9os3pJp%2BvH%2F1eSPu4PQpc0Yx2&X-Amz-Signature=aefabdf7c62a96b15062b71b0cfa19d87eb3ad699ebc88dca59da1b8baa5db6c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVLAXRQH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFvwjMOxMlkRa4aAOiysPYKBOSHW8nS2O8hnKhxwrhFSAiBFXxoCOfN26CLxeBjovjXT3Cc8ve0DwVsVZaFUDjuOoyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMxvXDtUYL6qu8U7ZCKtwDkUcM4LBmj%2BHQWD3e%2BFHptSTVpf3DIsX3crv9gv8445c79j8LwXYo%2FcEdZDgDpQD7gKmZ65PB8wy2BC8Lw7eoGRZjMe%2F4sBJSnbhzka6pKVkO6%2FmP4c1qRpGcGupetOBGiyCEUAW6ypLFmmkUH6tHnFHj5QGVrr9mZc3NAgT%2BmIxZSP0x5WrTMk%2BCG3XLI95x7UbmL3BmpgAell2CaqP%2FP6s2IF3tMqdOkCW8QSH%2FemDpk6SYpni8lGnCYzZqkH4KJQbL0w2zAWhOxZcTKOtN9X6CUk42hQwQ6anbrP2DPkYiY9LH1HbuWsUCxFmD3pzfZLdMR1oTbsQzQhTSJsm%2BrKnCJsu3d%2F%2Fn8oJYyvezrXYlitnd%2FDIP3fLfC4Gau7UFJbvRQ2GHDYRMaIniBwUcceb52JW2s0rCD%2FsXTqeB2WgfQmjMJxvVUMiuI7kDquqK%2BNzw8F9fJ5nz6nkQmeirY2wAXU%2F4nCTv1wGzXQ1jD%2FR9a95xjw%2B34fCSrPSQYNI2Lv1GzNfYGwF2AiK6NCFIDIq%2FE%2BXb6AyrfY3OscrKYEGyVfduSAXg9A5T7beO3LcnSK7JKYks0P7fe9JCVLGXDs%2BHfFHUcoIokoHOeAit%2BzdEaP4IlNIE9WI626IwlYzdwAY6pgGp8OKdhlDYuAXYkt6EA2iNr9R1GJjXKuWOe7ipoYrzfS3BYnra%2BSXqcp6wDTPK1QwbtgqW4ALAIV2vObjALc7SJG%2BKJ%2ByS7i%2BydWrB8Epqc6PIcRbtKHwCF%2FftlJdpoXyEE8s8d%2BC6HfDDvTXcfIHuq7tTnI218ff4AY%2BpOn6%2B2caAy%2FbJwWGuKMS20J%2FpC5P7upj9os3pJp%2BvH%2F1eSPu4PQpc0Yx2&X-Amz-Signature=d7043aa6a5b8b42fa35ccd4b9f06da38c3daac4217c26c46fd9e2469cfda60e4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVLAXRQH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFvwjMOxMlkRa4aAOiysPYKBOSHW8nS2O8hnKhxwrhFSAiBFXxoCOfN26CLxeBjovjXT3Cc8ve0DwVsVZaFUDjuOoyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMxvXDtUYL6qu8U7ZCKtwDkUcM4LBmj%2BHQWD3e%2BFHptSTVpf3DIsX3crv9gv8445c79j8LwXYo%2FcEdZDgDpQD7gKmZ65PB8wy2BC8Lw7eoGRZjMe%2F4sBJSnbhzka6pKVkO6%2FmP4c1qRpGcGupetOBGiyCEUAW6ypLFmmkUH6tHnFHj5QGVrr9mZc3NAgT%2BmIxZSP0x5WrTMk%2BCG3XLI95x7UbmL3BmpgAell2CaqP%2FP6s2IF3tMqdOkCW8QSH%2FemDpk6SYpni8lGnCYzZqkH4KJQbL0w2zAWhOxZcTKOtN9X6CUk42hQwQ6anbrP2DPkYiY9LH1HbuWsUCxFmD3pzfZLdMR1oTbsQzQhTSJsm%2BrKnCJsu3d%2F%2Fn8oJYyvezrXYlitnd%2FDIP3fLfC4Gau7UFJbvRQ2GHDYRMaIniBwUcceb52JW2s0rCD%2FsXTqeB2WgfQmjMJxvVUMiuI7kDquqK%2BNzw8F9fJ5nz6nkQmeirY2wAXU%2F4nCTv1wGzXQ1jD%2FR9a95xjw%2B34fCSrPSQYNI2Lv1GzNfYGwF2AiK6NCFIDIq%2FE%2BXb6AyrfY3OscrKYEGyVfduSAXg9A5T7beO3LcnSK7JKYks0P7fe9JCVLGXDs%2BHfFHUcoIokoHOeAit%2BzdEaP4IlNIE9WI626IwlYzdwAY6pgGp8OKdhlDYuAXYkt6EA2iNr9R1GJjXKuWOe7ipoYrzfS3BYnra%2BSXqcp6wDTPK1QwbtgqW4ALAIV2vObjALc7SJG%2BKJ%2ByS7i%2BydWrB8Epqc6PIcRbtKHwCF%2FftlJdpoXyEE8s8d%2BC6HfDDvTXcfIHuq7tTnI218ff4AY%2BpOn6%2B2caAy%2FbJwWGuKMS20J%2FpC5P7upj9os3pJp%2BvH%2F1eSPu4PQpc0Yx2&X-Amz-Signature=26bf2222e0d524b8c73e2837d2cdc94967e1b15741142654375fb55648a8e7c2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
