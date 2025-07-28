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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2FLT5W%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCUnH6YFsf%2FrexkIKiIBQQVkW%2Fy3NXnbIvAa853X5lZ5gIhAPk6HPFNuOwCS3%2FiTwfog1QI9CtRGJiTIOg7aVMCN%2BOVKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKQW11cDt3pxctXlQq3AMFkVOJjYia%2B2RsQ2m1qseUR%2B11JccLLQs7dqYWnGaOipcrVy%2BjR87sMoax6CcyayHQcIPPuin%2F0itce%2BlMtxKmj8bivOfqj1epfZQPr4996vy%2FHDZ5Ga83oDeOspWA8hIS5uFQAbvRqL3nAvVyLjq3H1v0fqK1kBi%2FNW9AF9e4bG6f9VUCEeQmb%2BL%2BExABI1FBgN4rR4Lt5yc8j4o%2BUWkbIX7Vb5fW7KKP0dFcmjDl%2Fn6jkyMoMXmDV%2BsQslO4Vewcgouq6yEDtgiCF4C02VEqmK8QDSH78IcoLkYlIOlY84D%2ByrP5CBG%2BwYn2JLXHeciB0m0rY2spgfhF1jVr5rM%2BUCAKv038Zjm9Fg0YaXF0DZw80rLVS%2BOmAwazEGbB59xkv0Ytu%2B9avyEijZyKrOO%2BZWclhH1l1aJTL1PTTQSvhvslkyMIaWbmQndCvWL0bdHex497DSwCbhdPMC0gEAJN%2BsEZIBQKOJH4z3B7swK%2BmMd3W9L5Qf2FuKIS9CNRnE2S9N7gBKMb%2BgCh3NrQc7x7xwwfNmNx1CbvgmEC%2FTUajvOdv8pFadCVmP8PxBh%2FhAIZ9kmAX8jZaadgJVaX3nw7MBmIScHy1sVGo%2BniKu3O7gvqZZljBWEiuAtorDCRxpzEBjqkAcVeDRtVQrQ0nP2nIzMceFywHt3nwyTjMzWCLKG4DAJSAAl8KZYT%2FTW2l8ahK0%2BPA0e5G3ZZ6LimKvsqM4at%2FKwqtGPbbRBnobsSBXEZeeXPOCR7dKjh%2FPj2xRxSDicDaAH3ca3Or8slSzbqJJCuQG0sAfm0Z6%2FggtDyt6fvVHxMvwIq%2B7nD2T6hnNVaPdrwIwMnZ8iMnt%2B341DuYOoiRR58ZZn0&X-Amz-Signature=3cc60e96e96f26cba8c51efecd8c3c21a64cf2caeb2dd4aa82952ad960605775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2FLT5W%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCUnH6YFsf%2FrexkIKiIBQQVkW%2Fy3NXnbIvAa853X5lZ5gIhAPk6HPFNuOwCS3%2FiTwfog1QI9CtRGJiTIOg7aVMCN%2BOVKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKQW11cDt3pxctXlQq3AMFkVOJjYia%2B2RsQ2m1qseUR%2B11JccLLQs7dqYWnGaOipcrVy%2BjR87sMoax6CcyayHQcIPPuin%2F0itce%2BlMtxKmj8bivOfqj1epfZQPr4996vy%2FHDZ5Ga83oDeOspWA8hIS5uFQAbvRqL3nAvVyLjq3H1v0fqK1kBi%2FNW9AF9e4bG6f9VUCEeQmb%2BL%2BExABI1FBgN4rR4Lt5yc8j4o%2BUWkbIX7Vb5fW7KKP0dFcmjDl%2Fn6jkyMoMXmDV%2BsQslO4Vewcgouq6yEDtgiCF4C02VEqmK8QDSH78IcoLkYlIOlY84D%2ByrP5CBG%2BwYn2JLXHeciB0m0rY2spgfhF1jVr5rM%2BUCAKv038Zjm9Fg0YaXF0DZw80rLVS%2BOmAwazEGbB59xkv0Ytu%2B9avyEijZyKrOO%2BZWclhH1l1aJTL1PTTQSvhvslkyMIaWbmQndCvWL0bdHex497DSwCbhdPMC0gEAJN%2BsEZIBQKOJH4z3B7swK%2BmMd3W9L5Qf2FuKIS9CNRnE2S9N7gBKMb%2BgCh3NrQc7x7xwwfNmNx1CbvgmEC%2FTUajvOdv8pFadCVmP8PxBh%2FhAIZ9kmAX8jZaadgJVaX3nw7MBmIScHy1sVGo%2BniKu3O7gvqZZljBWEiuAtorDCRxpzEBjqkAcVeDRtVQrQ0nP2nIzMceFywHt3nwyTjMzWCLKG4DAJSAAl8KZYT%2FTW2l8ahK0%2BPA0e5G3ZZ6LimKvsqM4at%2FKwqtGPbbRBnobsSBXEZeeXPOCR7dKjh%2FPj2xRxSDicDaAH3ca3Or8slSzbqJJCuQG0sAfm0Z6%2FggtDyt6fvVHxMvwIq%2B7nD2T6hnNVaPdrwIwMnZ8iMnt%2B341DuYOoiRR58ZZn0&X-Amz-Signature=8b8e6f66ceed1338900a36491b513e156f9aca50a8fedaee4c3e39030f232601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2FLT5W%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCUnH6YFsf%2FrexkIKiIBQQVkW%2Fy3NXnbIvAa853X5lZ5gIhAPk6HPFNuOwCS3%2FiTwfog1QI9CtRGJiTIOg7aVMCN%2BOVKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKQW11cDt3pxctXlQq3AMFkVOJjYia%2B2RsQ2m1qseUR%2B11JccLLQs7dqYWnGaOipcrVy%2BjR87sMoax6CcyayHQcIPPuin%2F0itce%2BlMtxKmj8bivOfqj1epfZQPr4996vy%2FHDZ5Ga83oDeOspWA8hIS5uFQAbvRqL3nAvVyLjq3H1v0fqK1kBi%2FNW9AF9e4bG6f9VUCEeQmb%2BL%2BExABI1FBgN4rR4Lt5yc8j4o%2BUWkbIX7Vb5fW7KKP0dFcmjDl%2Fn6jkyMoMXmDV%2BsQslO4Vewcgouq6yEDtgiCF4C02VEqmK8QDSH78IcoLkYlIOlY84D%2ByrP5CBG%2BwYn2JLXHeciB0m0rY2spgfhF1jVr5rM%2BUCAKv038Zjm9Fg0YaXF0DZw80rLVS%2BOmAwazEGbB59xkv0Ytu%2B9avyEijZyKrOO%2BZWclhH1l1aJTL1PTTQSvhvslkyMIaWbmQndCvWL0bdHex497DSwCbhdPMC0gEAJN%2BsEZIBQKOJH4z3B7swK%2BmMd3W9L5Qf2FuKIS9CNRnE2S9N7gBKMb%2BgCh3NrQc7x7xwwfNmNx1CbvgmEC%2FTUajvOdv8pFadCVmP8PxBh%2FhAIZ9kmAX8jZaadgJVaX3nw7MBmIScHy1sVGo%2BniKu3O7gvqZZljBWEiuAtorDCRxpzEBjqkAcVeDRtVQrQ0nP2nIzMceFywHt3nwyTjMzWCLKG4DAJSAAl8KZYT%2FTW2l8ahK0%2BPA0e5G3ZZ6LimKvsqM4at%2FKwqtGPbbRBnobsSBXEZeeXPOCR7dKjh%2FPj2xRxSDicDaAH3ca3Or8slSzbqJJCuQG0sAfm0Z6%2FggtDyt6fvVHxMvwIq%2B7nD2T6hnNVaPdrwIwMnZ8iMnt%2B341DuYOoiRR58ZZn0&X-Amz-Signature=669bb583d38f7ea3b7dd76827c069d456bc591d2384d6340df1e1e2dc709769c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2FLT5W%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCUnH6YFsf%2FrexkIKiIBQQVkW%2Fy3NXnbIvAa853X5lZ5gIhAPk6HPFNuOwCS3%2FiTwfog1QI9CtRGJiTIOg7aVMCN%2BOVKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKQW11cDt3pxctXlQq3AMFkVOJjYia%2B2RsQ2m1qseUR%2B11JccLLQs7dqYWnGaOipcrVy%2BjR87sMoax6CcyayHQcIPPuin%2F0itce%2BlMtxKmj8bivOfqj1epfZQPr4996vy%2FHDZ5Ga83oDeOspWA8hIS5uFQAbvRqL3nAvVyLjq3H1v0fqK1kBi%2FNW9AF9e4bG6f9VUCEeQmb%2BL%2BExABI1FBgN4rR4Lt5yc8j4o%2BUWkbIX7Vb5fW7KKP0dFcmjDl%2Fn6jkyMoMXmDV%2BsQslO4Vewcgouq6yEDtgiCF4C02VEqmK8QDSH78IcoLkYlIOlY84D%2ByrP5CBG%2BwYn2JLXHeciB0m0rY2spgfhF1jVr5rM%2BUCAKv038Zjm9Fg0YaXF0DZw80rLVS%2BOmAwazEGbB59xkv0Ytu%2B9avyEijZyKrOO%2BZWclhH1l1aJTL1PTTQSvhvslkyMIaWbmQndCvWL0bdHex497DSwCbhdPMC0gEAJN%2BsEZIBQKOJH4z3B7swK%2BmMd3W9L5Qf2FuKIS9CNRnE2S9N7gBKMb%2BgCh3NrQc7x7xwwfNmNx1CbvgmEC%2FTUajvOdv8pFadCVmP8PxBh%2FhAIZ9kmAX8jZaadgJVaX3nw7MBmIScHy1sVGo%2BniKu3O7gvqZZljBWEiuAtorDCRxpzEBjqkAcVeDRtVQrQ0nP2nIzMceFywHt3nwyTjMzWCLKG4DAJSAAl8KZYT%2FTW2l8ahK0%2BPA0e5G3ZZ6LimKvsqM4at%2FKwqtGPbbRBnobsSBXEZeeXPOCR7dKjh%2FPj2xRxSDicDaAH3ca3Or8slSzbqJJCuQG0sAfm0Z6%2FggtDyt6fvVHxMvwIq%2B7nD2T6hnNVaPdrwIwMnZ8iMnt%2B341DuYOoiRR58ZZn0&X-Amz-Signature=f2642c6cefb39c96126fba8c3442322db9e2b3e819f8232f44e4009e09d2f37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2FLT5W%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCUnH6YFsf%2FrexkIKiIBQQVkW%2Fy3NXnbIvAa853X5lZ5gIhAPk6HPFNuOwCS3%2FiTwfog1QI9CtRGJiTIOg7aVMCN%2BOVKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKQW11cDt3pxctXlQq3AMFkVOJjYia%2B2RsQ2m1qseUR%2B11JccLLQs7dqYWnGaOipcrVy%2BjR87sMoax6CcyayHQcIPPuin%2F0itce%2BlMtxKmj8bivOfqj1epfZQPr4996vy%2FHDZ5Ga83oDeOspWA8hIS5uFQAbvRqL3nAvVyLjq3H1v0fqK1kBi%2FNW9AF9e4bG6f9VUCEeQmb%2BL%2BExABI1FBgN4rR4Lt5yc8j4o%2BUWkbIX7Vb5fW7KKP0dFcmjDl%2Fn6jkyMoMXmDV%2BsQslO4Vewcgouq6yEDtgiCF4C02VEqmK8QDSH78IcoLkYlIOlY84D%2ByrP5CBG%2BwYn2JLXHeciB0m0rY2spgfhF1jVr5rM%2BUCAKv038Zjm9Fg0YaXF0DZw80rLVS%2BOmAwazEGbB59xkv0Ytu%2B9avyEijZyKrOO%2BZWclhH1l1aJTL1PTTQSvhvslkyMIaWbmQndCvWL0bdHex497DSwCbhdPMC0gEAJN%2BsEZIBQKOJH4z3B7swK%2BmMd3W9L5Qf2FuKIS9CNRnE2S9N7gBKMb%2BgCh3NrQc7x7xwwfNmNx1CbvgmEC%2FTUajvOdv8pFadCVmP8PxBh%2FhAIZ9kmAX8jZaadgJVaX3nw7MBmIScHy1sVGo%2BniKu3O7gvqZZljBWEiuAtorDCRxpzEBjqkAcVeDRtVQrQ0nP2nIzMceFywHt3nwyTjMzWCLKG4DAJSAAl8KZYT%2FTW2l8ahK0%2BPA0e5G3ZZ6LimKvsqM4at%2FKwqtGPbbRBnobsSBXEZeeXPOCR7dKjh%2FPj2xRxSDicDaAH3ca3Or8slSzbqJJCuQG0sAfm0Z6%2FggtDyt6fvVHxMvwIq%2B7nD2T6hnNVaPdrwIwMnZ8iMnt%2B341DuYOoiRR58ZZn0&X-Amz-Signature=e2b19ba2d030206f26dd992b3691e7802258dad47649f0ea2407fd22826a8d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2FLT5W%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCUnH6YFsf%2FrexkIKiIBQQVkW%2Fy3NXnbIvAa853X5lZ5gIhAPk6HPFNuOwCS3%2FiTwfog1QI9CtRGJiTIOg7aVMCN%2BOVKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKQW11cDt3pxctXlQq3AMFkVOJjYia%2B2RsQ2m1qseUR%2B11JccLLQs7dqYWnGaOipcrVy%2BjR87sMoax6CcyayHQcIPPuin%2F0itce%2BlMtxKmj8bivOfqj1epfZQPr4996vy%2FHDZ5Ga83oDeOspWA8hIS5uFQAbvRqL3nAvVyLjq3H1v0fqK1kBi%2FNW9AF9e4bG6f9VUCEeQmb%2BL%2BExABI1FBgN4rR4Lt5yc8j4o%2BUWkbIX7Vb5fW7KKP0dFcmjDl%2Fn6jkyMoMXmDV%2BsQslO4Vewcgouq6yEDtgiCF4C02VEqmK8QDSH78IcoLkYlIOlY84D%2ByrP5CBG%2BwYn2JLXHeciB0m0rY2spgfhF1jVr5rM%2BUCAKv038Zjm9Fg0YaXF0DZw80rLVS%2BOmAwazEGbB59xkv0Ytu%2B9avyEijZyKrOO%2BZWclhH1l1aJTL1PTTQSvhvslkyMIaWbmQndCvWL0bdHex497DSwCbhdPMC0gEAJN%2BsEZIBQKOJH4z3B7swK%2BmMd3W9L5Qf2FuKIS9CNRnE2S9N7gBKMb%2BgCh3NrQc7x7xwwfNmNx1CbvgmEC%2FTUajvOdv8pFadCVmP8PxBh%2FhAIZ9kmAX8jZaadgJVaX3nw7MBmIScHy1sVGo%2BniKu3O7gvqZZljBWEiuAtorDCRxpzEBjqkAcVeDRtVQrQ0nP2nIzMceFywHt3nwyTjMzWCLKG4DAJSAAl8KZYT%2FTW2l8ahK0%2BPA0e5G3ZZ6LimKvsqM4at%2FKwqtGPbbRBnobsSBXEZeeXPOCR7dKjh%2FPj2xRxSDicDaAH3ca3Or8slSzbqJJCuQG0sAfm0Z6%2FggtDyt6fvVHxMvwIq%2B7nD2T6hnNVaPdrwIwMnZ8iMnt%2B341DuYOoiRR58ZZn0&X-Amz-Signature=face82e161de0cb4355ab87c8149aba474a5c352eefef2b683d74f6d8077f148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP2FLT5W%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCUnH6YFsf%2FrexkIKiIBQQVkW%2Fy3NXnbIvAa853X5lZ5gIhAPk6HPFNuOwCS3%2FiTwfog1QI9CtRGJiTIOg7aVMCN%2BOVKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKQW11cDt3pxctXlQq3AMFkVOJjYia%2B2RsQ2m1qseUR%2B11JccLLQs7dqYWnGaOipcrVy%2BjR87sMoax6CcyayHQcIPPuin%2F0itce%2BlMtxKmj8bivOfqj1epfZQPr4996vy%2FHDZ5Ga83oDeOspWA8hIS5uFQAbvRqL3nAvVyLjq3H1v0fqK1kBi%2FNW9AF9e4bG6f9VUCEeQmb%2BL%2BExABI1FBgN4rR4Lt5yc8j4o%2BUWkbIX7Vb5fW7KKP0dFcmjDl%2Fn6jkyMoMXmDV%2BsQslO4Vewcgouq6yEDtgiCF4C02VEqmK8QDSH78IcoLkYlIOlY84D%2ByrP5CBG%2BwYn2JLXHeciB0m0rY2spgfhF1jVr5rM%2BUCAKv038Zjm9Fg0YaXF0DZw80rLVS%2BOmAwazEGbB59xkv0Ytu%2B9avyEijZyKrOO%2BZWclhH1l1aJTL1PTTQSvhvslkyMIaWbmQndCvWL0bdHex497DSwCbhdPMC0gEAJN%2BsEZIBQKOJH4z3B7swK%2BmMd3W9L5Qf2FuKIS9CNRnE2S9N7gBKMb%2BgCh3NrQc7x7xwwfNmNx1CbvgmEC%2FTUajvOdv8pFadCVmP8PxBh%2FhAIZ9kmAX8jZaadgJVaX3nw7MBmIScHy1sVGo%2BniKu3O7gvqZZljBWEiuAtorDCRxpzEBjqkAcVeDRtVQrQ0nP2nIzMceFywHt3nwyTjMzWCLKG4DAJSAAl8KZYT%2FTW2l8ahK0%2BPA0e5G3ZZ6LimKvsqM4at%2FKwqtGPbbRBnobsSBXEZeeXPOCR7dKjh%2FPj2xRxSDicDaAH3ca3Or8slSzbqJJCuQG0sAfm0Z6%2FggtDyt6fvVHxMvwIq%2B7nD2T6hnNVaPdrwIwMnZ8iMnt%2B341DuYOoiRR58ZZn0&X-Amz-Signature=566d4d126a4b3faaa0941842c44fe68c45b1e4d12f9fe1610afc003297ad334b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
