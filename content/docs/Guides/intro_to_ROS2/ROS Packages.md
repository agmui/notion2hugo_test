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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEO2RTY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICOXTpvXZzsPbIpNwDUQJvKiaGKmBJFFq7HR18Uxkl7VAiBg5xj5r7gyTQjqeaqdH7npNT709pUg%2FNHRMDCvCEzMeSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMUudkc7sMCrPgN%2F3hKtwD%2BAAOkJmmFfhWezFI%2FXs6q9%2BTurQWDv%2BmFSnC77HLhoDqS0eq5b35DfQBe7Z0SQFpvi2ZDap6B2QyPbYnEvWc6rI0e%2F050keyRmSl5fbXj5q6rDFqm2%2B%2FrgV%2BlIOWKKp9RNfA1CtW0LRz1O%2BF4IU%2B6ocp6hGUINgB0GC1b%2FDz2Vt5ncyJyffvqWK1SRMsWwFVy7tqGLyU3zl17EEKyCoiRhH26Pz%2FB0x%2F3JoBbKfwAnsRwnWov5kXF%2FDg8hkm%2B0VYsdWlbIcQtA13Slcon7QqOPgjtqWiJsMRrKXOr23NzrIsgdhB52wMglaOwV3RpeQpWFoOzaKwjntspPuertITreCewF3MSPrjBrTX4r%2FTCu5UxgsAyMfNBnIjfOhdZ5O2EupJKMPUxgTvw6rJS516O3YQFjE1lklAapJ5nbBzV1N7O9xwTr4YJbrvxWfSZLE1wdgc0atvLKn%2BTklpcOKqR1TNrDV1zNf90QBf8dsCpSCN3IjF99eCxRVBvy3%2BcjihcmmIDid2WwFeO2qJ6Tx5lmyJFQ08r5M%2BfaQ%2FYzLeM3EcO%2FdOe0sR40oIPpItcOquv0fNtZ9eG0dMQWlSHSDl48uk3vVl35fiojqgGQE8nwB8m%2F3GlQAgrQwuy24wwruOvQY6pgHJ%2Fep%2BDRxL5GfxN%2Fi0YURYXbA1i4pLyRwGEZqW14d24gcwoP6LvdtWPKyRjv76EMnmOPf8BRIo%2Fwaw5K2CyWqIg7h9Xd4x193ARlPRw4YRx2zMy%2B8Df9R5deWrMrc%2Fl42Znt0VqNwiTa5YX4gwdSgb8g8WyJxATwEZHKD0JEOfPl2qGHnvzCPVfRGy2tASj7VV1Al8bLVk8YDxVFfiLX8KA3KTr5ag&X-Amz-Signature=5b8ab8991c9dd2839b8bf9536ccb5f817a2dd13b5e680d031a5cf904ef35ae3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEO2RTY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICOXTpvXZzsPbIpNwDUQJvKiaGKmBJFFq7HR18Uxkl7VAiBg5xj5r7gyTQjqeaqdH7npNT709pUg%2FNHRMDCvCEzMeSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMUudkc7sMCrPgN%2F3hKtwD%2BAAOkJmmFfhWezFI%2FXs6q9%2BTurQWDv%2BmFSnC77HLhoDqS0eq5b35DfQBe7Z0SQFpvi2ZDap6B2QyPbYnEvWc6rI0e%2F050keyRmSl5fbXj5q6rDFqm2%2B%2FrgV%2BlIOWKKp9RNfA1CtW0LRz1O%2BF4IU%2B6ocp6hGUINgB0GC1b%2FDz2Vt5ncyJyffvqWK1SRMsWwFVy7tqGLyU3zl17EEKyCoiRhH26Pz%2FB0x%2F3JoBbKfwAnsRwnWov5kXF%2FDg8hkm%2B0VYsdWlbIcQtA13Slcon7QqOPgjtqWiJsMRrKXOr23NzrIsgdhB52wMglaOwV3RpeQpWFoOzaKwjntspPuertITreCewF3MSPrjBrTX4r%2FTCu5UxgsAyMfNBnIjfOhdZ5O2EupJKMPUxgTvw6rJS516O3YQFjE1lklAapJ5nbBzV1N7O9xwTr4YJbrvxWfSZLE1wdgc0atvLKn%2BTklpcOKqR1TNrDV1zNf90QBf8dsCpSCN3IjF99eCxRVBvy3%2BcjihcmmIDid2WwFeO2qJ6Tx5lmyJFQ08r5M%2BfaQ%2FYzLeM3EcO%2FdOe0sR40oIPpItcOquv0fNtZ9eG0dMQWlSHSDl48uk3vVl35fiojqgGQE8nwB8m%2F3GlQAgrQwuy24wwruOvQY6pgHJ%2Fep%2BDRxL5GfxN%2Fi0YURYXbA1i4pLyRwGEZqW14d24gcwoP6LvdtWPKyRjv76EMnmOPf8BRIo%2Fwaw5K2CyWqIg7h9Xd4x193ARlPRw4YRx2zMy%2B8Df9R5deWrMrc%2Fl42Znt0VqNwiTa5YX4gwdSgb8g8WyJxATwEZHKD0JEOfPl2qGHnvzCPVfRGy2tASj7VV1Al8bLVk8YDxVFfiLX8KA3KTr5ag&X-Amz-Signature=58d3a3792069ef9c45d9800ac56b719a8868c4c4b8947dc35ea5fbe4c2e91c45&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEO2RTY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICOXTpvXZzsPbIpNwDUQJvKiaGKmBJFFq7HR18Uxkl7VAiBg5xj5r7gyTQjqeaqdH7npNT709pUg%2FNHRMDCvCEzMeSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMUudkc7sMCrPgN%2F3hKtwD%2BAAOkJmmFfhWezFI%2FXs6q9%2BTurQWDv%2BmFSnC77HLhoDqS0eq5b35DfQBe7Z0SQFpvi2ZDap6B2QyPbYnEvWc6rI0e%2F050keyRmSl5fbXj5q6rDFqm2%2B%2FrgV%2BlIOWKKp9RNfA1CtW0LRz1O%2BF4IU%2B6ocp6hGUINgB0GC1b%2FDz2Vt5ncyJyffvqWK1SRMsWwFVy7tqGLyU3zl17EEKyCoiRhH26Pz%2FB0x%2F3JoBbKfwAnsRwnWov5kXF%2FDg8hkm%2B0VYsdWlbIcQtA13Slcon7QqOPgjtqWiJsMRrKXOr23NzrIsgdhB52wMglaOwV3RpeQpWFoOzaKwjntspPuertITreCewF3MSPrjBrTX4r%2FTCu5UxgsAyMfNBnIjfOhdZ5O2EupJKMPUxgTvw6rJS516O3YQFjE1lklAapJ5nbBzV1N7O9xwTr4YJbrvxWfSZLE1wdgc0atvLKn%2BTklpcOKqR1TNrDV1zNf90QBf8dsCpSCN3IjF99eCxRVBvy3%2BcjihcmmIDid2WwFeO2qJ6Tx5lmyJFQ08r5M%2BfaQ%2FYzLeM3EcO%2FdOe0sR40oIPpItcOquv0fNtZ9eG0dMQWlSHSDl48uk3vVl35fiojqgGQE8nwB8m%2F3GlQAgrQwuy24wwruOvQY6pgHJ%2Fep%2BDRxL5GfxN%2Fi0YURYXbA1i4pLyRwGEZqW14d24gcwoP6LvdtWPKyRjv76EMnmOPf8BRIo%2Fwaw5K2CyWqIg7h9Xd4x193ARlPRw4YRx2zMy%2B8Df9R5deWrMrc%2Fl42Znt0VqNwiTa5YX4gwdSgb8g8WyJxATwEZHKD0JEOfPl2qGHnvzCPVfRGy2tASj7VV1Al8bLVk8YDxVFfiLX8KA3KTr5ag&X-Amz-Signature=2d697f792ab763191106a61155cf5f73582dd679a89373117fb6423a2291f76d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEO2RTY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICOXTpvXZzsPbIpNwDUQJvKiaGKmBJFFq7HR18Uxkl7VAiBg5xj5r7gyTQjqeaqdH7npNT709pUg%2FNHRMDCvCEzMeSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMUudkc7sMCrPgN%2F3hKtwD%2BAAOkJmmFfhWezFI%2FXs6q9%2BTurQWDv%2BmFSnC77HLhoDqS0eq5b35DfQBe7Z0SQFpvi2ZDap6B2QyPbYnEvWc6rI0e%2F050keyRmSl5fbXj5q6rDFqm2%2B%2FrgV%2BlIOWKKp9RNfA1CtW0LRz1O%2BF4IU%2B6ocp6hGUINgB0GC1b%2FDz2Vt5ncyJyffvqWK1SRMsWwFVy7tqGLyU3zl17EEKyCoiRhH26Pz%2FB0x%2F3JoBbKfwAnsRwnWov5kXF%2FDg8hkm%2B0VYsdWlbIcQtA13Slcon7QqOPgjtqWiJsMRrKXOr23NzrIsgdhB52wMglaOwV3RpeQpWFoOzaKwjntspPuertITreCewF3MSPrjBrTX4r%2FTCu5UxgsAyMfNBnIjfOhdZ5O2EupJKMPUxgTvw6rJS516O3YQFjE1lklAapJ5nbBzV1N7O9xwTr4YJbrvxWfSZLE1wdgc0atvLKn%2BTklpcOKqR1TNrDV1zNf90QBf8dsCpSCN3IjF99eCxRVBvy3%2BcjihcmmIDid2WwFeO2qJ6Tx5lmyJFQ08r5M%2BfaQ%2FYzLeM3EcO%2FdOe0sR40oIPpItcOquv0fNtZ9eG0dMQWlSHSDl48uk3vVl35fiojqgGQE8nwB8m%2F3GlQAgrQwuy24wwruOvQY6pgHJ%2Fep%2BDRxL5GfxN%2Fi0YURYXbA1i4pLyRwGEZqW14d24gcwoP6LvdtWPKyRjv76EMnmOPf8BRIo%2Fwaw5K2CyWqIg7h9Xd4x193ARlPRw4YRx2zMy%2B8Df9R5deWrMrc%2Fl42Znt0VqNwiTa5YX4gwdSgb8g8WyJxATwEZHKD0JEOfPl2qGHnvzCPVfRGy2tASj7VV1Al8bLVk8YDxVFfiLX8KA3KTr5ag&X-Amz-Signature=82272ffe08e5110806e6709d1353a4e85b20b1bf167390b867bc85f7c1bc2bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEO2RTY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICOXTpvXZzsPbIpNwDUQJvKiaGKmBJFFq7HR18Uxkl7VAiBg5xj5r7gyTQjqeaqdH7npNT709pUg%2FNHRMDCvCEzMeSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMUudkc7sMCrPgN%2F3hKtwD%2BAAOkJmmFfhWezFI%2FXs6q9%2BTurQWDv%2BmFSnC77HLhoDqS0eq5b35DfQBe7Z0SQFpvi2ZDap6B2QyPbYnEvWc6rI0e%2F050keyRmSl5fbXj5q6rDFqm2%2B%2FrgV%2BlIOWKKp9RNfA1CtW0LRz1O%2BF4IU%2B6ocp6hGUINgB0GC1b%2FDz2Vt5ncyJyffvqWK1SRMsWwFVy7tqGLyU3zl17EEKyCoiRhH26Pz%2FB0x%2F3JoBbKfwAnsRwnWov5kXF%2FDg8hkm%2B0VYsdWlbIcQtA13Slcon7QqOPgjtqWiJsMRrKXOr23NzrIsgdhB52wMglaOwV3RpeQpWFoOzaKwjntspPuertITreCewF3MSPrjBrTX4r%2FTCu5UxgsAyMfNBnIjfOhdZ5O2EupJKMPUxgTvw6rJS516O3YQFjE1lklAapJ5nbBzV1N7O9xwTr4YJbrvxWfSZLE1wdgc0atvLKn%2BTklpcOKqR1TNrDV1zNf90QBf8dsCpSCN3IjF99eCxRVBvy3%2BcjihcmmIDid2WwFeO2qJ6Tx5lmyJFQ08r5M%2BfaQ%2FYzLeM3EcO%2FdOe0sR40oIPpItcOquv0fNtZ9eG0dMQWlSHSDl48uk3vVl35fiojqgGQE8nwB8m%2F3GlQAgrQwuy24wwruOvQY6pgHJ%2Fep%2BDRxL5GfxN%2Fi0YURYXbA1i4pLyRwGEZqW14d24gcwoP6LvdtWPKyRjv76EMnmOPf8BRIo%2Fwaw5K2CyWqIg7h9Xd4x193ARlPRw4YRx2zMy%2B8Df9R5deWrMrc%2Fl42Znt0VqNwiTa5YX4gwdSgb8g8WyJxATwEZHKD0JEOfPl2qGHnvzCPVfRGy2tASj7VV1Al8bLVk8YDxVFfiLX8KA3KTr5ag&X-Amz-Signature=54f5466f94f1abde3d0f3b43d3298fd50a19ef618c258e8a15146c1d0506cc22&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEO2RTY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICOXTpvXZzsPbIpNwDUQJvKiaGKmBJFFq7HR18Uxkl7VAiBg5xj5r7gyTQjqeaqdH7npNT709pUg%2FNHRMDCvCEzMeSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMUudkc7sMCrPgN%2F3hKtwD%2BAAOkJmmFfhWezFI%2FXs6q9%2BTurQWDv%2BmFSnC77HLhoDqS0eq5b35DfQBe7Z0SQFpvi2ZDap6B2QyPbYnEvWc6rI0e%2F050keyRmSl5fbXj5q6rDFqm2%2B%2FrgV%2BlIOWKKp9RNfA1CtW0LRz1O%2BF4IU%2B6ocp6hGUINgB0GC1b%2FDz2Vt5ncyJyffvqWK1SRMsWwFVy7tqGLyU3zl17EEKyCoiRhH26Pz%2FB0x%2F3JoBbKfwAnsRwnWov5kXF%2FDg8hkm%2B0VYsdWlbIcQtA13Slcon7QqOPgjtqWiJsMRrKXOr23NzrIsgdhB52wMglaOwV3RpeQpWFoOzaKwjntspPuertITreCewF3MSPrjBrTX4r%2FTCu5UxgsAyMfNBnIjfOhdZ5O2EupJKMPUxgTvw6rJS516O3YQFjE1lklAapJ5nbBzV1N7O9xwTr4YJbrvxWfSZLE1wdgc0atvLKn%2BTklpcOKqR1TNrDV1zNf90QBf8dsCpSCN3IjF99eCxRVBvy3%2BcjihcmmIDid2WwFeO2qJ6Tx5lmyJFQ08r5M%2BfaQ%2FYzLeM3EcO%2FdOe0sR40oIPpItcOquv0fNtZ9eG0dMQWlSHSDl48uk3vVl35fiojqgGQE8nwB8m%2F3GlQAgrQwuy24wwruOvQY6pgHJ%2Fep%2BDRxL5GfxN%2Fi0YURYXbA1i4pLyRwGEZqW14d24gcwoP6LvdtWPKyRjv76EMnmOPf8BRIo%2Fwaw5K2CyWqIg7h9Xd4x193ARlPRw4YRx2zMy%2B8Df9R5deWrMrc%2Fl42Znt0VqNwiTa5YX4gwdSgb8g8WyJxATwEZHKD0JEOfPl2qGHnvzCPVfRGy2tASj7VV1Al8bLVk8YDxVFfiLX8KA3KTr5ag&X-Amz-Signature=3aea7c37683a1190a3533f1a3cd9d13995dc831f12f5fd6b3cf7135d5c4bb074&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEO2RTY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICOXTpvXZzsPbIpNwDUQJvKiaGKmBJFFq7HR18Uxkl7VAiBg5xj5r7gyTQjqeaqdH7npNT709pUg%2FNHRMDCvCEzMeSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMUudkc7sMCrPgN%2F3hKtwD%2BAAOkJmmFfhWezFI%2FXs6q9%2BTurQWDv%2BmFSnC77HLhoDqS0eq5b35DfQBe7Z0SQFpvi2ZDap6B2QyPbYnEvWc6rI0e%2F050keyRmSl5fbXj5q6rDFqm2%2B%2FrgV%2BlIOWKKp9RNfA1CtW0LRz1O%2BF4IU%2B6ocp6hGUINgB0GC1b%2FDz2Vt5ncyJyffvqWK1SRMsWwFVy7tqGLyU3zl17EEKyCoiRhH26Pz%2FB0x%2F3JoBbKfwAnsRwnWov5kXF%2FDg8hkm%2B0VYsdWlbIcQtA13Slcon7QqOPgjtqWiJsMRrKXOr23NzrIsgdhB52wMglaOwV3RpeQpWFoOzaKwjntspPuertITreCewF3MSPrjBrTX4r%2FTCu5UxgsAyMfNBnIjfOhdZ5O2EupJKMPUxgTvw6rJS516O3YQFjE1lklAapJ5nbBzV1N7O9xwTr4YJbrvxWfSZLE1wdgc0atvLKn%2BTklpcOKqR1TNrDV1zNf90QBf8dsCpSCN3IjF99eCxRVBvy3%2BcjihcmmIDid2WwFeO2qJ6Tx5lmyJFQ08r5M%2BfaQ%2FYzLeM3EcO%2FdOe0sR40oIPpItcOquv0fNtZ9eG0dMQWlSHSDl48uk3vVl35fiojqgGQE8nwB8m%2F3GlQAgrQwuy24wwruOvQY6pgHJ%2Fep%2BDRxL5GfxN%2Fi0YURYXbA1i4pLyRwGEZqW14d24gcwoP6LvdtWPKyRjv76EMnmOPf8BRIo%2Fwaw5K2CyWqIg7h9Xd4x193ARlPRw4YRx2zMy%2B8Df9R5deWrMrc%2Fl42Znt0VqNwiTa5YX4gwdSgb8g8WyJxATwEZHKD0JEOfPl2qGHnvzCPVfRGy2tASj7VV1Al8bLVk8YDxVFfiLX8KA3KTr5ag&X-Amz-Signature=82ba9f7673cae921729ba9ef15ce75c56cc0775620eccddec3ee2ad86bd38490&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
