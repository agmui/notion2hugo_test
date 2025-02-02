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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHFWEMDV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1FL2vSkshEn1jl6rZttqXfS91VdFCUmCWDWdrMcxYLQIgYFdFxTCbnWPQXlZ%2FLd3e0lvzDYisuQjVdYtFsJ3Ml7EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOW8KA6xLWkSfryKKyrcA8FV5Hib9iiPKdSxlrwVqIJJ8tJl%2Bw3h0pLAF7GV%2Bdv%2B7vxL1wOWr%2FDbS8KcG3Z0A7mKUd09B7W9y3Y8cARtL1BKygepibm18jS92JCS%2BZQLgXuNlR1gxB3YtJ1aqZwGY30OZPo0EaqI7Iymp2ywhr8uNR4ZzBhJOfSLu0VcUlDMYhNsZiSUqP%2B%2FTO0ozOxWOOFmiOZTr4u18m64dEGX1BMJ4nITQJjAP1AR1CSJXe3QR5xhnDaR290WEk85mglVWf3zIrGlB7SF4ymGcHxH%2F3JuC7aKU4HP1iJy0SSOEslgPTWA0sCvAZcEcVO0%2F0VUCftHlJ3yMR7sHg%2Bwe%2F72t%2BSV2OUMqrvfZywbK7DFM3OxBQsnhQYv8GJtypbLaMYbr9QFig2gSTuWNye9Jj3QYh3JH8TJac6cpOcFZyN6hFLHR5EP%2FAnvBa8SNc2cw8aZlI29WnQw7%2FxO8IQYUbX4WD5Pk1Ph9dgzxR5a1nBp9iiB0EokdvNvSfTyE%2FIXq290DtCXvFjUSNjrCFU8mu%2Fehep%2BVfyl24xfREDiQPKYGyBeb%2BLk8A3PUfB2i58VRLb%2BqczKxmhKIeU8qWsFhV6FKhc868IDpIHzRuYKWkTBQPtTcbO2VO5EfOYVg5W1MLbz%2BrwGOqUBehpJ9U5Pg2eEXwQCJHihZfRPGU2iY9MiAGiLEErBB76dySTly%2B5u8wwLQsDKdA6b7T0PZxLFYueRNrsO7ARFNHf78LpwfeaMbDwGS5PZDfO%2FPaX%2FoEZzl2a0OQkBMrOlnxZATkapPWOe2PnBWQ7W310kVlwWDvoLVLs6uLXAsgJbQgEWdop1NJtneV%2FWHN8D6fq32G7Oi1Hl62VgPHlTNX%2B%2BAFGz&X-Amz-Signature=37a126e9b380cc90d59fd57bc0631aa43d6b7d0e354463b5d7eaca58d5c59a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHFWEMDV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1FL2vSkshEn1jl6rZttqXfS91VdFCUmCWDWdrMcxYLQIgYFdFxTCbnWPQXlZ%2FLd3e0lvzDYisuQjVdYtFsJ3Ml7EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOW8KA6xLWkSfryKKyrcA8FV5Hib9iiPKdSxlrwVqIJJ8tJl%2Bw3h0pLAF7GV%2Bdv%2B7vxL1wOWr%2FDbS8KcG3Z0A7mKUd09B7W9y3Y8cARtL1BKygepibm18jS92JCS%2BZQLgXuNlR1gxB3YtJ1aqZwGY30OZPo0EaqI7Iymp2ywhr8uNR4ZzBhJOfSLu0VcUlDMYhNsZiSUqP%2B%2FTO0ozOxWOOFmiOZTr4u18m64dEGX1BMJ4nITQJjAP1AR1CSJXe3QR5xhnDaR290WEk85mglVWf3zIrGlB7SF4ymGcHxH%2F3JuC7aKU4HP1iJy0SSOEslgPTWA0sCvAZcEcVO0%2F0VUCftHlJ3yMR7sHg%2Bwe%2F72t%2BSV2OUMqrvfZywbK7DFM3OxBQsnhQYv8GJtypbLaMYbr9QFig2gSTuWNye9Jj3QYh3JH8TJac6cpOcFZyN6hFLHR5EP%2FAnvBa8SNc2cw8aZlI29WnQw7%2FxO8IQYUbX4WD5Pk1Ph9dgzxR5a1nBp9iiB0EokdvNvSfTyE%2FIXq290DtCXvFjUSNjrCFU8mu%2Fehep%2BVfyl24xfREDiQPKYGyBeb%2BLk8A3PUfB2i58VRLb%2BqczKxmhKIeU8qWsFhV6FKhc868IDpIHzRuYKWkTBQPtTcbO2VO5EfOYVg5W1MLbz%2BrwGOqUBehpJ9U5Pg2eEXwQCJHihZfRPGU2iY9MiAGiLEErBB76dySTly%2B5u8wwLQsDKdA6b7T0PZxLFYueRNrsO7ARFNHf78LpwfeaMbDwGS5PZDfO%2FPaX%2FoEZzl2a0OQkBMrOlnxZATkapPWOe2PnBWQ7W310kVlwWDvoLVLs6uLXAsgJbQgEWdop1NJtneV%2FWHN8D6fq32G7Oi1Hl62VgPHlTNX%2B%2BAFGz&X-Amz-Signature=e9fa03a34cd032a6eef6a6f3e78b92c85038211ada5b32408d2b5ce3acdddda8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHFWEMDV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1FL2vSkshEn1jl6rZttqXfS91VdFCUmCWDWdrMcxYLQIgYFdFxTCbnWPQXlZ%2FLd3e0lvzDYisuQjVdYtFsJ3Ml7EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOW8KA6xLWkSfryKKyrcA8FV5Hib9iiPKdSxlrwVqIJJ8tJl%2Bw3h0pLAF7GV%2Bdv%2B7vxL1wOWr%2FDbS8KcG3Z0A7mKUd09B7W9y3Y8cARtL1BKygepibm18jS92JCS%2BZQLgXuNlR1gxB3YtJ1aqZwGY30OZPo0EaqI7Iymp2ywhr8uNR4ZzBhJOfSLu0VcUlDMYhNsZiSUqP%2B%2FTO0ozOxWOOFmiOZTr4u18m64dEGX1BMJ4nITQJjAP1AR1CSJXe3QR5xhnDaR290WEk85mglVWf3zIrGlB7SF4ymGcHxH%2F3JuC7aKU4HP1iJy0SSOEslgPTWA0sCvAZcEcVO0%2F0VUCftHlJ3yMR7sHg%2Bwe%2F72t%2BSV2OUMqrvfZywbK7DFM3OxBQsnhQYv8GJtypbLaMYbr9QFig2gSTuWNye9Jj3QYh3JH8TJac6cpOcFZyN6hFLHR5EP%2FAnvBa8SNc2cw8aZlI29WnQw7%2FxO8IQYUbX4WD5Pk1Ph9dgzxR5a1nBp9iiB0EokdvNvSfTyE%2FIXq290DtCXvFjUSNjrCFU8mu%2Fehep%2BVfyl24xfREDiQPKYGyBeb%2BLk8A3PUfB2i58VRLb%2BqczKxmhKIeU8qWsFhV6FKhc868IDpIHzRuYKWkTBQPtTcbO2VO5EfOYVg5W1MLbz%2BrwGOqUBehpJ9U5Pg2eEXwQCJHihZfRPGU2iY9MiAGiLEErBB76dySTly%2B5u8wwLQsDKdA6b7T0PZxLFYueRNrsO7ARFNHf78LpwfeaMbDwGS5PZDfO%2FPaX%2FoEZzl2a0OQkBMrOlnxZATkapPWOe2PnBWQ7W310kVlwWDvoLVLs6uLXAsgJbQgEWdop1NJtneV%2FWHN8D6fq32G7Oi1Hl62VgPHlTNX%2B%2BAFGz&X-Amz-Signature=ad5c3614576234795e02876ec64f2c0f719fb284fdbe4aac7c7db2836dba0788&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHFWEMDV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1FL2vSkshEn1jl6rZttqXfS91VdFCUmCWDWdrMcxYLQIgYFdFxTCbnWPQXlZ%2FLd3e0lvzDYisuQjVdYtFsJ3Ml7EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOW8KA6xLWkSfryKKyrcA8FV5Hib9iiPKdSxlrwVqIJJ8tJl%2Bw3h0pLAF7GV%2Bdv%2B7vxL1wOWr%2FDbS8KcG3Z0A7mKUd09B7W9y3Y8cARtL1BKygepibm18jS92JCS%2BZQLgXuNlR1gxB3YtJ1aqZwGY30OZPo0EaqI7Iymp2ywhr8uNR4ZzBhJOfSLu0VcUlDMYhNsZiSUqP%2B%2FTO0ozOxWOOFmiOZTr4u18m64dEGX1BMJ4nITQJjAP1AR1CSJXe3QR5xhnDaR290WEk85mglVWf3zIrGlB7SF4ymGcHxH%2F3JuC7aKU4HP1iJy0SSOEslgPTWA0sCvAZcEcVO0%2F0VUCftHlJ3yMR7sHg%2Bwe%2F72t%2BSV2OUMqrvfZywbK7DFM3OxBQsnhQYv8GJtypbLaMYbr9QFig2gSTuWNye9Jj3QYh3JH8TJac6cpOcFZyN6hFLHR5EP%2FAnvBa8SNc2cw8aZlI29WnQw7%2FxO8IQYUbX4WD5Pk1Ph9dgzxR5a1nBp9iiB0EokdvNvSfTyE%2FIXq290DtCXvFjUSNjrCFU8mu%2Fehep%2BVfyl24xfREDiQPKYGyBeb%2BLk8A3PUfB2i58VRLb%2BqczKxmhKIeU8qWsFhV6FKhc868IDpIHzRuYKWkTBQPtTcbO2VO5EfOYVg5W1MLbz%2BrwGOqUBehpJ9U5Pg2eEXwQCJHihZfRPGU2iY9MiAGiLEErBB76dySTly%2B5u8wwLQsDKdA6b7T0PZxLFYueRNrsO7ARFNHf78LpwfeaMbDwGS5PZDfO%2FPaX%2FoEZzl2a0OQkBMrOlnxZATkapPWOe2PnBWQ7W310kVlwWDvoLVLs6uLXAsgJbQgEWdop1NJtneV%2FWHN8D6fq32G7Oi1Hl62VgPHlTNX%2B%2BAFGz&X-Amz-Signature=e9b7c9bf3a4b96117bf19b93e6899e74c8b4a08b1cd856bf0997e47815a3434b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHFWEMDV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1FL2vSkshEn1jl6rZttqXfS91VdFCUmCWDWdrMcxYLQIgYFdFxTCbnWPQXlZ%2FLd3e0lvzDYisuQjVdYtFsJ3Ml7EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOW8KA6xLWkSfryKKyrcA8FV5Hib9iiPKdSxlrwVqIJJ8tJl%2Bw3h0pLAF7GV%2Bdv%2B7vxL1wOWr%2FDbS8KcG3Z0A7mKUd09B7W9y3Y8cARtL1BKygepibm18jS92JCS%2BZQLgXuNlR1gxB3YtJ1aqZwGY30OZPo0EaqI7Iymp2ywhr8uNR4ZzBhJOfSLu0VcUlDMYhNsZiSUqP%2B%2FTO0ozOxWOOFmiOZTr4u18m64dEGX1BMJ4nITQJjAP1AR1CSJXe3QR5xhnDaR290WEk85mglVWf3zIrGlB7SF4ymGcHxH%2F3JuC7aKU4HP1iJy0SSOEslgPTWA0sCvAZcEcVO0%2F0VUCftHlJ3yMR7sHg%2Bwe%2F72t%2BSV2OUMqrvfZywbK7DFM3OxBQsnhQYv8GJtypbLaMYbr9QFig2gSTuWNye9Jj3QYh3JH8TJac6cpOcFZyN6hFLHR5EP%2FAnvBa8SNc2cw8aZlI29WnQw7%2FxO8IQYUbX4WD5Pk1Ph9dgzxR5a1nBp9iiB0EokdvNvSfTyE%2FIXq290DtCXvFjUSNjrCFU8mu%2Fehep%2BVfyl24xfREDiQPKYGyBeb%2BLk8A3PUfB2i58VRLb%2BqczKxmhKIeU8qWsFhV6FKhc868IDpIHzRuYKWkTBQPtTcbO2VO5EfOYVg5W1MLbz%2BrwGOqUBehpJ9U5Pg2eEXwQCJHihZfRPGU2iY9MiAGiLEErBB76dySTly%2B5u8wwLQsDKdA6b7T0PZxLFYueRNrsO7ARFNHf78LpwfeaMbDwGS5PZDfO%2FPaX%2FoEZzl2a0OQkBMrOlnxZATkapPWOe2PnBWQ7W310kVlwWDvoLVLs6uLXAsgJbQgEWdop1NJtneV%2FWHN8D6fq32G7Oi1Hl62VgPHlTNX%2B%2BAFGz&X-Amz-Signature=b70b490de62bced72af44e1f02849a7620296a1387e994a5c2fab1fed073d02b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHFWEMDV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1FL2vSkshEn1jl6rZttqXfS91VdFCUmCWDWdrMcxYLQIgYFdFxTCbnWPQXlZ%2FLd3e0lvzDYisuQjVdYtFsJ3Ml7EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOW8KA6xLWkSfryKKyrcA8FV5Hib9iiPKdSxlrwVqIJJ8tJl%2Bw3h0pLAF7GV%2Bdv%2B7vxL1wOWr%2FDbS8KcG3Z0A7mKUd09B7W9y3Y8cARtL1BKygepibm18jS92JCS%2BZQLgXuNlR1gxB3YtJ1aqZwGY30OZPo0EaqI7Iymp2ywhr8uNR4ZzBhJOfSLu0VcUlDMYhNsZiSUqP%2B%2FTO0ozOxWOOFmiOZTr4u18m64dEGX1BMJ4nITQJjAP1AR1CSJXe3QR5xhnDaR290WEk85mglVWf3zIrGlB7SF4ymGcHxH%2F3JuC7aKU4HP1iJy0SSOEslgPTWA0sCvAZcEcVO0%2F0VUCftHlJ3yMR7sHg%2Bwe%2F72t%2BSV2OUMqrvfZywbK7DFM3OxBQsnhQYv8GJtypbLaMYbr9QFig2gSTuWNye9Jj3QYh3JH8TJac6cpOcFZyN6hFLHR5EP%2FAnvBa8SNc2cw8aZlI29WnQw7%2FxO8IQYUbX4WD5Pk1Ph9dgzxR5a1nBp9iiB0EokdvNvSfTyE%2FIXq290DtCXvFjUSNjrCFU8mu%2Fehep%2BVfyl24xfREDiQPKYGyBeb%2BLk8A3PUfB2i58VRLb%2BqczKxmhKIeU8qWsFhV6FKhc868IDpIHzRuYKWkTBQPtTcbO2VO5EfOYVg5W1MLbz%2BrwGOqUBehpJ9U5Pg2eEXwQCJHihZfRPGU2iY9MiAGiLEErBB76dySTly%2B5u8wwLQsDKdA6b7T0PZxLFYueRNrsO7ARFNHf78LpwfeaMbDwGS5PZDfO%2FPaX%2FoEZzl2a0OQkBMrOlnxZATkapPWOe2PnBWQ7W310kVlwWDvoLVLs6uLXAsgJbQgEWdop1NJtneV%2FWHN8D6fq32G7Oi1Hl62VgPHlTNX%2B%2BAFGz&X-Amz-Signature=dedbc5ff88b72099d660971840da6941402943a4d744c0516809625244229ade&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHFWEMDV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1FL2vSkshEn1jl6rZttqXfS91VdFCUmCWDWdrMcxYLQIgYFdFxTCbnWPQXlZ%2FLd3e0lvzDYisuQjVdYtFsJ3Ml7EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOW8KA6xLWkSfryKKyrcA8FV5Hib9iiPKdSxlrwVqIJJ8tJl%2Bw3h0pLAF7GV%2Bdv%2B7vxL1wOWr%2FDbS8KcG3Z0A7mKUd09B7W9y3Y8cARtL1BKygepibm18jS92JCS%2BZQLgXuNlR1gxB3YtJ1aqZwGY30OZPo0EaqI7Iymp2ywhr8uNR4ZzBhJOfSLu0VcUlDMYhNsZiSUqP%2B%2FTO0ozOxWOOFmiOZTr4u18m64dEGX1BMJ4nITQJjAP1AR1CSJXe3QR5xhnDaR290WEk85mglVWf3zIrGlB7SF4ymGcHxH%2F3JuC7aKU4HP1iJy0SSOEslgPTWA0sCvAZcEcVO0%2F0VUCftHlJ3yMR7sHg%2Bwe%2F72t%2BSV2OUMqrvfZywbK7DFM3OxBQsnhQYv8GJtypbLaMYbr9QFig2gSTuWNye9Jj3QYh3JH8TJac6cpOcFZyN6hFLHR5EP%2FAnvBa8SNc2cw8aZlI29WnQw7%2FxO8IQYUbX4WD5Pk1Ph9dgzxR5a1nBp9iiB0EokdvNvSfTyE%2FIXq290DtCXvFjUSNjrCFU8mu%2Fehep%2BVfyl24xfREDiQPKYGyBeb%2BLk8A3PUfB2i58VRLb%2BqczKxmhKIeU8qWsFhV6FKhc868IDpIHzRuYKWkTBQPtTcbO2VO5EfOYVg5W1MLbz%2BrwGOqUBehpJ9U5Pg2eEXwQCJHihZfRPGU2iY9MiAGiLEErBB76dySTly%2B5u8wwLQsDKdA6b7T0PZxLFYueRNrsO7ARFNHf78LpwfeaMbDwGS5PZDfO%2FPaX%2FoEZzl2a0OQkBMrOlnxZATkapPWOe2PnBWQ7W310kVlwWDvoLVLs6uLXAsgJbQgEWdop1NJtneV%2FWHN8D6fq32G7Oi1Hl62VgPHlTNX%2B%2BAFGz&X-Amz-Signature=ed2e76802305f595f96da90e000fd83550adf86f739c51c332a100b3d95e61dc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
