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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DSJHYCJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrUVvpmMK4fVo%2FnIBYeyHeHAaEI6f4jyuowfpqIUbiZAiEAxoGjupLCKrWJkL%2FomUsAtIAsiGJTJxGfQYWdo33WiMYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTtmbvv5H2pPz8BUCrcA0Sy9AyHLGCO5pLZPE%2FV2JW4gNU10Jj3%2FrJITSJUccvkqgpDzN5rucC0U0ozt%2BlOQ3hpS%2Fpx8eLBZGFiaMkPeJEubKo%2FzSmNLvFHv0Erg4fHDitA9SEGkdGneg9FHtT7QPBUh8ALtcdF7Upe%2FeRW6V5kQ%2F%2BlcGVh8l8dmyHX1CdYwZiNPu6J%2FXYuBswrjW7a%2FqVMxRCoQdua91nxV4spbZ0TdmQuTjCugreo6h2e%2FlMSDnyuWB37hjci18Z4sdJWn2t%2BhYFMhBe0Q6BH3xXSTjnZ9oSSptCRmBgMG5DLPrn7VEUX7d7pcQTSZ0BHYlyByUMa6EDXJgeqr8dATKRDrA082bo5m7yQmfu%2BlhiCAeoo5oPZZ9IhEmOJaG3VHBD8vRGeKv2jIqOgh5GNZXxQFzMp1NVi6C9cmkSJ2z7yyuXSqLkJZBfVTyr%2BVrrvNeQ8DQolsDlQf%2BWkUTCsc9EBXxOEFijQ6d9pONTKbVfaOFiPTFK7sbFQ0QP2AHbSvnTu1ozXzREvjhyGLSSbZ44xQHXEAeqrBvaUrXLA5tvVC8G1Ms97tP5msjhY9Zy0WIy2yFGGFtNBwSPUHzQ4w3QGaGnEWpIV%2BtRh7xVDk%2FPrbCDfA05AxP9kumkuDtskMITttcEGOqUBgE2IGZ57%2BiC7dmmqkFkoIwQhNOUGZWFJ4JY%2ByaKxJ9T31yvSKy8PPeLIPEh55haATngDCZxZzApypYsSJtO3GabkjItghMm5OrOxhajg%2FloWaX%2FVz9REeNgGiTO5O7ZITrCkMULEPFFiB2lb1ecf%2FRJa9n%2BzOnsM6JndAzfu%2BDfY%2F%2B78gVJsLml%2BJyDk6R8tZeaCEWb3SCMd7zUDHDHIJykGPALh&X-Amz-Signature=305e3b486721a908f8712883b460cf9f95ac6bc62bbf49e5b5fbc4664f418f49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DSJHYCJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrUVvpmMK4fVo%2FnIBYeyHeHAaEI6f4jyuowfpqIUbiZAiEAxoGjupLCKrWJkL%2FomUsAtIAsiGJTJxGfQYWdo33WiMYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTtmbvv5H2pPz8BUCrcA0Sy9AyHLGCO5pLZPE%2FV2JW4gNU10Jj3%2FrJITSJUccvkqgpDzN5rucC0U0ozt%2BlOQ3hpS%2Fpx8eLBZGFiaMkPeJEubKo%2FzSmNLvFHv0Erg4fHDitA9SEGkdGneg9FHtT7QPBUh8ALtcdF7Upe%2FeRW6V5kQ%2F%2BlcGVh8l8dmyHX1CdYwZiNPu6J%2FXYuBswrjW7a%2FqVMxRCoQdua91nxV4spbZ0TdmQuTjCugreo6h2e%2FlMSDnyuWB37hjci18Z4sdJWn2t%2BhYFMhBe0Q6BH3xXSTjnZ9oSSptCRmBgMG5DLPrn7VEUX7d7pcQTSZ0BHYlyByUMa6EDXJgeqr8dATKRDrA082bo5m7yQmfu%2BlhiCAeoo5oPZZ9IhEmOJaG3VHBD8vRGeKv2jIqOgh5GNZXxQFzMp1NVi6C9cmkSJ2z7yyuXSqLkJZBfVTyr%2BVrrvNeQ8DQolsDlQf%2BWkUTCsc9EBXxOEFijQ6d9pONTKbVfaOFiPTFK7sbFQ0QP2AHbSvnTu1ozXzREvjhyGLSSbZ44xQHXEAeqrBvaUrXLA5tvVC8G1Ms97tP5msjhY9Zy0WIy2yFGGFtNBwSPUHzQ4w3QGaGnEWpIV%2BtRh7xVDk%2FPrbCDfA05AxP9kumkuDtskMITttcEGOqUBgE2IGZ57%2BiC7dmmqkFkoIwQhNOUGZWFJ4JY%2ByaKxJ9T31yvSKy8PPeLIPEh55haATngDCZxZzApypYsSJtO3GabkjItghMm5OrOxhajg%2FloWaX%2FVz9REeNgGiTO5O7ZITrCkMULEPFFiB2lb1ecf%2FRJa9n%2BzOnsM6JndAzfu%2BDfY%2F%2B78gVJsLml%2BJyDk6R8tZeaCEWb3SCMd7zUDHDHIJykGPALh&X-Amz-Signature=b74fa12da714f444405cdd0ccc665a5615a3367a6eeb81662011d2046a6a0622&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DSJHYCJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrUVvpmMK4fVo%2FnIBYeyHeHAaEI6f4jyuowfpqIUbiZAiEAxoGjupLCKrWJkL%2FomUsAtIAsiGJTJxGfQYWdo33WiMYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTtmbvv5H2pPz8BUCrcA0Sy9AyHLGCO5pLZPE%2FV2JW4gNU10Jj3%2FrJITSJUccvkqgpDzN5rucC0U0ozt%2BlOQ3hpS%2Fpx8eLBZGFiaMkPeJEubKo%2FzSmNLvFHv0Erg4fHDitA9SEGkdGneg9FHtT7QPBUh8ALtcdF7Upe%2FeRW6V5kQ%2F%2BlcGVh8l8dmyHX1CdYwZiNPu6J%2FXYuBswrjW7a%2FqVMxRCoQdua91nxV4spbZ0TdmQuTjCugreo6h2e%2FlMSDnyuWB37hjci18Z4sdJWn2t%2BhYFMhBe0Q6BH3xXSTjnZ9oSSptCRmBgMG5DLPrn7VEUX7d7pcQTSZ0BHYlyByUMa6EDXJgeqr8dATKRDrA082bo5m7yQmfu%2BlhiCAeoo5oPZZ9IhEmOJaG3VHBD8vRGeKv2jIqOgh5GNZXxQFzMp1NVi6C9cmkSJ2z7yyuXSqLkJZBfVTyr%2BVrrvNeQ8DQolsDlQf%2BWkUTCsc9EBXxOEFijQ6d9pONTKbVfaOFiPTFK7sbFQ0QP2AHbSvnTu1ozXzREvjhyGLSSbZ44xQHXEAeqrBvaUrXLA5tvVC8G1Ms97tP5msjhY9Zy0WIy2yFGGFtNBwSPUHzQ4w3QGaGnEWpIV%2BtRh7xVDk%2FPrbCDfA05AxP9kumkuDtskMITttcEGOqUBgE2IGZ57%2BiC7dmmqkFkoIwQhNOUGZWFJ4JY%2ByaKxJ9T31yvSKy8PPeLIPEh55haATngDCZxZzApypYsSJtO3GabkjItghMm5OrOxhajg%2FloWaX%2FVz9REeNgGiTO5O7ZITrCkMULEPFFiB2lb1ecf%2FRJa9n%2BzOnsM6JndAzfu%2BDfY%2F%2B78gVJsLml%2BJyDk6R8tZeaCEWb3SCMd7zUDHDHIJykGPALh&X-Amz-Signature=22dfd08324f9ce856ae65086a8714ea0985110c5aafe1e9a45a3362671cd72d2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DSJHYCJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrUVvpmMK4fVo%2FnIBYeyHeHAaEI6f4jyuowfpqIUbiZAiEAxoGjupLCKrWJkL%2FomUsAtIAsiGJTJxGfQYWdo33WiMYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTtmbvv5H2pPz8BUCrcA0Sy9AyHLGCO5pLZPE%2FV2JW4gNU10Jj3%2FrJITSJUccvkqgpDzN5rucC0U0ozt%2BlOQ3hpS%2Fpx8eLBZGFiaMkPeJEubKo%2FzSmNLvFHv0Erg4fHDitA9SEGkdGneg9FHtT7QPBUh8ALtcdF7Upe%2FeRW6V5kQ%2F%2BlcGVh8l8dmyHX1CdYwZiNPu6J%2FXYuBswrjW7a%2FqVMxRCoQdua91nxV4spbZ0TdmQuTjCugreo6h2e%2FlMSDnyuWB37hjci18Z4sdJWn2t%2BhYFMhBe0Q6BH3xXSTjnZ9oSSptCRmBgMG5DLPrn7VEUX7d7pcQTSZ0BHYlyByUMa6EDXJgeqr8dATKRDrA082bo5m7yQmfu%2BlhiCAeoo5oPZZ9IhEmOJaG3VHBD8vRGeKv2jIqOgh5GNZXxQFzMp1NVi6C9cmkSJ2z7yyuXSqLkJZBfVTyr%2BVrrvNeQ8DQolsDlQf%2BWkUTCsc9EBXxOEFijQ6d9pONTKbVfaOFiPTFK7sbFQ0QP2AHbSvnTu1ozXzREvjhyGLSSbZ44xQHXEAeqrBvaUrXLA5tvVC8G1Ms97tP5msjhY9Zy0WIy2yFGGFtNBwSPUHzQ4w3QGaGnEWpIV%2BtRh7xVDk%2FPrbCDfA05AxP9kumkuDtskMITttcEGOqUBgE2IGZ57%2BiC7dmmqkFkoIwQhNOUGZWFJ4JY%2ByaKxJ9T31yvSKy8PPeLIPEh55haATngDCZxZzApypYsSJtO3GabkjItghMm5OrOxhajg%2FloWaX%2FVz9REeNgGiTO5O7ZITrCkMULEPFFiB2lb1ecf%2FRJa9n%2BzOnsM6JndAzfu%2BDfY%2F%2B78gVJsLml%2BJyDk6R8tZeaCEWb3SCMd7zUDHDHIJykGPALh&X-Amz-Signature=16c21913ecfa3f3650989b6a008376ad717055bcd5b3705274e2d2f40ecf884a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DSJHYCJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrUVvpmMK4fVo%2FnIBYeyHeHAaEI6f4jyuowfpqIUbiZAiEAxoGjupLCKrWJkL%2FomUsAtIAsiGJTJxGfQYWdo33WiMYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTtmbvv5H2pPz8BUCrcA0Sy9AyHLGCO5pLZPE%2FV2JW4gNU10Jj3%2FrJITSJUccvkqgpDzN5rucC0U0ozt%2BlOQ3hpS%2Fpx8eLBZGFiaMkPeJEubKo%2FzSmNLvFHv0Erg4fHDitA9SEGkdGneg9FHtT7QPBUh8ALtcdF7Upe%2FeRW6V5kQ%2F%2BlcGVh8l8dmyHX1CdYwZiNPu6J%2FXYuBswrjW7a%2FqVMxRCoQdua91nxV4spbZ0TdmQuTjCugreo6h2e%2FlMSDnyuWB37hjci18Z4sdJWn2t%2BhYFMhBe0Q6BH3xXSTjnZ9oSSptCRmBgMG5DLPrn7VEUX7d7pcQTSZ0BHYlyByUMa6EDXJgeqr8dATKRDrA082bo5m7yQmfu%2BlhiCAeoo5oPZZ9IhEmOJaG3VHBD8vRGeKv2jIqOgh5GNZXxQFzMp1NVi6C9cmkSJ2z7yyuXSqLkJZBfVTyr%2BVrrvNeQ8DQolsDlQf%2BWkUTCsc9EBXxOEFijQ6d9pONTKbVfaOFiPTFK7sbFQ0QP2AHbSvnTu1ozXzREvjhyGLSSbZ44xQHXEAeqrBvaUrXLA5tvVC8G1Ms97tP5msjhY9Zy0WIy2yFGGFtNBwSPUHzQ4w3QGaGnEWpIV%2BtRh7xVDk%2FPrbCDfA05AxP9kumkuDtskMITttcEGOqUBgE2IGZ57%2BiC7dmmqkFkoIwQhNOUGZWFJ4JY%2ByaKxJ9T31yvSKy8PPeLIPEh55haATngDCZxZzApypYsSJtO3GabkjItghMm5OrOxhajg%2FloWaX%2FVz9REeNgGiTO5O7ZITrCkMULEPFFiB2lb1ecf%2FRJa9n%2BzOnsM6JndAzfu%2BDfY%2F%2B78gVJsLml%2BJyDk6R8tZeaCEWb3SCMd7zUDHDHIJykGPALh&X-Amz-Signature=d028f7d2eed4c3d9c2e2913b30df9392ad088ee1c7d9157ba132ff64078cd9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DSJHYCJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrUVvpmMK4fVo%2FnIBYeyHeHAaEI6f4jyuowfpqIUbiZAiEAxoGjupLCKrWJkL%2FomUsAtIAsiGJTJxGfQYWdo33WiMYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTtmbvv5H2pPz8BUCrcA0Sy9AyHLGCO5pLZPE%2FV2JW4gNU10Jj3%2FrJITSJUccvkqgpDzN5rucC0U0ozt%2BlOQ3hpS%2Fpx8eLBZGFiaMkPeJEubKo%2FzSmNLvFHv0Erg4fHDitA9SEGkdGneg9FHtT7QPBUh8ALtcdF7Upe%2FeRW6V5kQ%2F%2BlcGVh8l8dmyHX1CdYwZiNPu6J%2FXYuBswrjW7a%2FqVMxRCoQdua91nxV4spbZ0TdmQuTjCugreo6h2e%2FlMSDnyuWB37hjci18Z4sdJWn2t%2BhYFMhBe0Q6BH3xXSTjnZ9oSSptCRmBgMG5DLPrn7VEUX7d7pcQTSZ0BHYlyByUMa6EDXJgeqr8dATKRDrA082bo5m7yQmfu%2BlhiCAeoo5oPZZ9IhEmOJaG3VHBD8vRGeKv2jIqOgh5GNZXxQFzMp1NVi6C9cmkSJ2z7yyuXSqLkJZBfVTyr%2BVrrvNeQ8DQolsDlQf%2BWkUTCsc9EBXxOEFijQ6d9pONTKbVfaOFiPTFK7sbFQ0QP2AHbSvnTu1ozXzREvjhyGLSSbZ44xQHXEAeqrBvaUrXLA5tvVC8G1Ms97tP5msjhY9Zy0WIy2yFGGFtNBwSPUHzQ4w3QGaGnEWpIV%2BtRh7xVDk%2FPrbCDfA05AxP9kumkuDtskMITttcEGOqUBgE2IGZ57%2BiC7dmmqkFkoIwQhNOUGZWFJ4JY%2ByaKxJ9T31yvSKy8PPeLIPEh55haATngDCZxZzApypYsSJtO3GabkjItghMm5OrOxhajg%2FloWaX%2FVz9REeNgGiTO5O7ZITrCkMULEPFFiB2lb1ecf%2FRJa9n%2BzOnsM6JndAzfu%2BDfY%2F%2B78gVJsLml%2BJyDk6R8tZeaCEWb3SCMd7zUDHDHIJykGPALh&X-Amz-Signature=82801095db3914bb9cf0754fc3f459c59429bbee5d45cc8c0425d772d6217048&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DSJHYCJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrUVvpmMK4fVo%2FnIBYeyHeHAaEI6f4jyuowfpqIUbiZAiEAxoGjupLCKrWJkL%2FomUsAtIAsiGJTJxGfQYWdo33WiMYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTtmbvv5H2pPz8BUCrcA0Sy9AyHLGCO5pLZPE%2FV2JW4gNU10Jj3%2FrJITSJUccvkqgpDzN5rucC0U0ozt%2BlOQ3hpS%2Fpx8eLBZGFiaMkPeJEubKo%2FzSmNLvFHv0Erg4fHDitA9SEGkdGneg9FHtT7QPBUh8ALtcdF7Upe%2FeRW6V5kQ%2F%2BlcGVh8l8dmyHX1CdYwZiNPu6J%2FXYuBswrjW7a%2FqVMxRCoQdua91nxV4spbZ0TdmQuTjCugreo6h2e%2FlMSDnyuWB37hjci18Z4sdJWn2t%2BhYFMhBe0Q6BH3xXSTjnZ9oSSptCRmBgMG5DLPrn7VEUX7d7pcQTSZ0BHYlyByUMa6EDXJgeqr8dATKRDrA082bo5m7yQmfu%2BlhiCAeoo5oPZZ9IhEmOJaG3VHBD8vRGeKv2jIqOgh5GNZXxQFzMp1NVi6C9cmkSJ2z7yyuXSqLkJZBfVTyr%2BVrrvNeQ8DQolsDlQf%2BWkUTCsc9EBXxOEFijQ6d9pONTKbVfaOFiPTFK7sbFQ0QP2AHbSvnTu1ozXzREvjhyGLSSbZ44xQHXEAeqrBvaUrXLA5tvVC8G1Ms97tP5msjhY9Zy0WIy2yFGGFtNBwSPUHzQ4w3QGaGnEWpIV%2BtRh7xVDk%2FPrbCDfA05AxP9kumkuDtskMITttcEGOqUBgE2IGZ57%2BiC7dmmqkFkoIwQhNOUGZWFJ4JY%2ByaKxJ9T31yvSKy8PPeLIPEh55haATngDCZxZzApypYsSJtO3GabkjItghMm5OrOxhajg%2FloWaX%2FVz9REeNgGiTO5O7ZITrCkMULEPFFiB2lb1ecf%2FRJa9n%2BzOnsM6JndAzfu%2BDfY%2F%2B78gVJsLml%2BJyDk6R8tZeaCEWb3SCMd7zUDHDHIJykGPALh&X-Amz-Signature=83c0f6f75c24f212be50c5b493e0c62c1620f41091a41718caf9d74119bacf80&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
