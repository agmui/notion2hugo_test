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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAPWSTD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDvQylkV4LlRzaNElUdSuIaAlqj04kqdRs9KgU5zhHLtwIgLZiyLx%2Fne%2FMJqnithxGJX2kY%2F7i7EMqqCBG6C%2B3NZcEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC8alwNfxDP%2FT0srjCrcAxt23ehyZBVaLRsGPYkvPhK8l6C2QuV959kKvF%2BAQI4spS%2FO%2B%2BEytL%2BVOTIJBVjNXo6DefklBRYrYiizZvH%2Bzq10oqS3etJ1jTsLLcelMHYAq%2FAm1NrfUaDwW8sIKk6lIMJvgpVOZHqY9%2FJ%2FV4jM6XBjBRvmMXnVBAIPRNpnH%2BV5BoHNcYNGwmfSXXdJH%2B%2BExycqGWC6x0pqKYWonUl4MCfjMP%2B4sAXYzDILXeFxp3TLB7l%2FMaNr7F1E9ImNLxyiARjithTFgZfyxzi4cVeqLEw%2FkIfrgPKvMmLLW%2F4poAfOC6ZMfdbY4NhoAPo%2BKFLVkXAhmy1BMeThWMfND19KZOhZyPlxhL6UJL0fLse6fJEiHjILnUiV6kncGS0cBgHLmoBf95nRBb0YCZUjJ4K1rb751kjkIl9g71kj%2BuEP9pen%2F3f%2BpOUqPtE7BBZCpLWHksy2ogqdelhNOs94MMre%2B9PkRJhOmNYzsitxIbT3hygAbKGzEOZcehrZubGJ%2F5JJFTI84s5RGaiwyc9pwev1WVWJHux6sCywYk8JY8jg0pMetq1n6BitGmf6piTVO77aIQsU6YDEmkYnDqn09Zs3f5hMIyBWvlAauGJSjTUn%2BVxIlhW1VZr320xYBo5pMO3LqcMGOqUBSgpG%2BemPZ%2F21%2BAUSyrsrGvo91eH6Oq%2FewtmKTMu9zUSU6eb%2By1HPAQwPis1E927sXQdMP8CuM5Jdbd9ScStOg49euygLJ5%2B%2FzcrTMSGIbxURgbWEPvCxYeQVvjR9SKZwGBRLXauIZHHAN79U1Kh57m7l1MGdNQuyy4S3I75XPgU75tgPr9RBRebDTHFbeCRl%2BecpeG4XZ4Hjy4B57TEZIGUqT4zO&X-Amz-Signature=ccda2f06e99714f2e79d466537c72f66311a673485841b1ae5ad12330ce9d070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAPWSTD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDvQylkV4LlRzaNElUdSuIaAlqj04kqdRs9KgU5zhHLtwIgLZiyLx%2Fne%2FMJqnithxGJX2kY%2F7i7EMqqCBG6C%2B3NZcEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC8alwNfxDP%2FT0srjCrcAxt23ehyZBVaLRsGPYkvPhK8l6C2QuV959kKvF%2BAQI4spS%2FO%2B%2BEytL%2BVOTIJBVjNXo6DefklBRYrYiizZvH%2Bzq10oqS3etJ1jTsLLcelMHYAq%2FAm1NrfUaDwW8sIKk6lIMJvgpVOZHqY9%2FJ%2FV4jM6XBjBRvmMXnVBAIPRNpnH%2BV5BoHNcYNGwmfSXXdJH%2B%2BExycqGWC6x0pqKYWonUl4MCfjMP%2B4sAXYzDILXeFxp3TLB7l%2FMaNr7F1E9ImNLxyiARjithTFgZfyxzi4cVeqLEw%2FkIfrgPKvMmLLW%2F4poAfOC6ZMfdbY4NhoAPo%2BKFLVkXAhmy1BMeThWMfND19KZOhZyPlxhL6UJL0fLse6fJEiHjILnUiV6kncGS0cBgHLmoBf95nRBb0YCZUjJ4K1rb751kjkIl9g71kj%2BuEP9pen%2F3f%2BpOUqPtE7BBZCpLWHksy2ogqdelhNOs94MMre%2B9PkRJhOmNYzsitxIbT3hygAbKGzEOZcehrZubGJ%2F5JJFTI84s5RGaiwyc9pwev1WVWJHux6sCywYk8JY8jg0pMetq1n6BitGmf6piTVO77aIQsU6YDEmkYnDqn09Zs3f5hMIyBWvlAauGJSjTUn%2BVxIlhW1VZr320xYBo5pMO3LqcMGOqUBSgpG%2BemPZ%2F21%2BAUSyrsrGvo91eH6Oq%2FewtmKTMu9zUSU6eb%2By1HPAQwPis1E927sXQdMP8CuM5Jdbd9ScStOg49euygLJ5%2B%2FzcrTMSGIbxURgbWEPvCxYeQVvjR9SKZwGBRLXauIZHHAN79U1Kh57m7l1MGdNQuyy4S3I75XPgU75tgPr9RBRebDTHFbeCRl%2BecpeG4XZ4Hjy4B57TEZIGUqT4zO&X-Amz-Signature=a290a5eb4d9287e3586fa6b9dbe2eb838ce85d0ccd39001cfb36277e23d33e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAPWSTD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDvQylkV4LlRzaNElUdSuIaAlqj04kqdRs9KgU5zhHLtwIgLZiyLx%2Fne%2FMJqnithxGJX2kY%2F7i7EMqqCBG6C%2B3NZcEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC8alwNfxDP%2FT0srjCrcAxt23ehyZBVaLRsGPYkvPhK8l6C2QuV959kKvF%2BAQI4spS%2FO%2B%2BEytL%2BVOTIJBVjNXo6DefklBRYrYiizZvH%2Bzq10oqS3etJ1jTsLLcelMHYAq%2FAm1NrfUaDwW8sIKk6lIMJvgpVOZHqY9%2FJ%2FV4jM6XBjBRvmMXnVBAIPRNpnH%2BV5BoHNcYNGwmfSXXdJH%2B%2BExycqGWC6x0pqKYWonUl4MCfjMP%2B4sAXYzDILXeFxp3TLB7l%2FMaNr7F1E9ImNLxyiARjithTFgZfyxzi4cVeqLEw%2FkIfrgPKvMmLLW%2F4poAfOC6ZMfdbY4NhoAPo%2BKFLVkXAhmy1BMeThWMfND19KZOhZyPlxhL6UJL0fLse6fJEiHjILnUiV6kncGS0cBgHLmoBf95nRBb0YCZUjJ4K1rb751kjkIl9g71kj%2BuEP9pen%2F3f%2BpOUqPtE7BBZCpLWHksy2ogqdelhNOs94MMre%2B9PkRJhOmNYzsitxIbT3hygAbKGzEOZcehrZubGJ%2F5JJFTI84s5RGaiwyc9pwev1WVWJHux6sCywYk8JY8jg0pMetq1n6BitGmf6piTVO77aIQsU6YDEmkYnDqn09Zs3f5hMIyBWvlAauGJSjTUn%2BVxIlhW1VZr320xYBo5pMO3LqcMGOqUBSgpG%2BemPZ%2F21%2BAUSyrsrGvo91eH6Oq%2FewtmKTMu9zUSU6eb%2By1HPAQwPis1E927sXQdMP8CuM5Jdbd9ScStOg49euygLJ5%2B%2FzcrTMSGIbxURgbWEPvCxYeQVvjR9SKZwGBRLXauIZHHAN79U1Kh57m7l1MGdNQuyy4S3I75XPgU75tgPr9RBRebDTHFbeCRl%2BecpeG4XZ4Hjy4B57TEZIGUqT4zO&X-Amz-Signature=f1a98cf2aa3b05cd59b3de86350236403544b998e0c0d48841bc1d2e0c686ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAPWSTD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDvQylkV4LlRzaNElUdSuIaAlqj04kqdRs9KgU5zhHLtwIgLZiyLx%2Fne%2FMJqnithxGJX2kY%2F7i7EMqqCBG6C%2B3NZcEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC8alwNfxDP%2FT0srjCrcAxt23ehyZBVaLRsGPYkvPhK8l6C2QuV959kKvF%2BAQI4spS%2FO%2B%2BEytL%2BVOTIJBVjNXo6DefklBRYrYiizZvH%2Bzq10oqS3etJ1jTsLLcelMHYAq%2FAm1NrfUaDwW8sIKk6lIMJvgpVOZHqY9%2FJ%2FV4jM6XBjBRvmMXnVBAIPRNpnH%2BV5BoHNcYNGwmfSXXdJH%2B%2BExycqGWC6x0pqKYWonUl4MCfjMP%2B4sAXYzDILXeFxp3TLB7l%2FMaNr7F1E9ImNLxyiARjithTFgZfyxzi4cVeqLEw%2FkIfrgPKvMmLLW%2F4poAfOC6ZMfdbY4NhoAPo%2BKFLVkXAhmy1BMeThWMfND19KZOhZyPlxhL6UJL0fLse6fJEiHjILnUiV6kncGS0cBgHLmoBf95nRBb0YCZUjJ4K1rb751kjkIl9g71kj%2BuEP9pen%2F3f%2BpOUqPtE7BBZCpLWHksy2ogqdelhNOs94MMre%2B9PkRJhOmNYzsitxIbT3hygAbKGzEOZcehrZubGJ%2F5JJFTI84s5RGaiwyc9pwev1WVWJHux6sCywYk8JY8jg0pMetq1n6BitGmf6piTVO77aIQsU6YDEmkYnDqn09Zs3f5hMIyBWvlAauGJSjTUn%2BVxIlhW1VZr320xYBo5pMO3LqcMGOqUBSgpG%2BemPZ%2F21%2BAUSyrsrGvo91eH6Oq%2FewtmKTMu9zUSU6eb%2By1HPAQwPis1E927sXQdMP8CuM5Jdbd9ScStOg49euygLJ5%2B%2FzcrTMSGIbxURgbWEPvCxYeQVvjR9SKZwGBRLXauIZHHAN79U1Kh57m7l1MGdNQuyy4S3I75XPgU75tgPr9RBRebDTHFbeCRl%2BecpeG4XZ4Hjy4B57TEZIGUqT4zO&X-Amz-Signature=7d4c7682c72b378d9d77076879f69f1e0a0dee9f2a6529b40bee35ce84197ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAPWSTD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDvQylkV4LlRzaNElUdSuIaAlqj04kqdRs9KgU5zhHLtwIgLZiyLx%2Fne%2FMJqnithxGJX2kY%2F7i7EMqqCBG6C%2B3NZcEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC8alwNfxDP%2FT0srjCrcAxt23ehyZBVaLRsGPYkvPhK8l6C2QuV959kKvF%2BAQI4spS%2FO%2B%2BEytL%2BVOTIJBVjNXo6DefklBRYrYiizZvH%2Bzq10oqS3etJ1jTsLLcelMHYAq%2FAm1NrfUaDwW8sIKk6lIMJvgpVOZHqY9%2FJ%2FV4jM6XBjBRvmMXnVBAIPRNpnH%2BV5BoHNcYNGwmfSXXdJH%2B%2BExycqGWC6x0pqKYWonUl4MCfjMP%2B4sAXYzDILXeFxp3TLB7l%2FMaNr7F1E9ImNLxyiARjithTFgZfyxzi4cVeqLEw%2FkIfrgPKvMmLLW%2F4poAfOC6ZMfdbY4NhoAPo%2BKFLVkXAhmy1BMeThWMfND19KZOhZyPlxhL6UJL0fLse6fJEiHjILnUiV6kncGS0cBgHLmoBf95nRBb0YCZUjJ4K1rb751kjkIl9g71kj%2BuEP9pen%2F3f%2BpOUqPtE7BBZCpLWHksy2ogqdelhNOs94MMre%2B9PkRJhOmNYzsitxIbT3hygAbKGzEOZcehrZubGJ%2F5JJFTI84s5RGaiwyc9pwev1WVWJHux6sCywYk8JY8jg0pMetq1n6BitGmf6piTVO77aIQsU6YDEmkYnDqn09Zs3f5hMIyBWvlAauGJSjTUn%2BVxIlhW1VZr320xYBo5pMO3LqcMGOqUBSgpG%2BemPZ%2F21%2BAUSyrsrGvo91eH6Oq%2FewtmKTMu9zUSU6eb%2By1HPAQwPis1E927sXQdMP8CuM5Jdbd9ScStOg49euygLJ5%2B%2FzcrTMSGIbxURgbWEPvCxYeQVvjR9SKZwGBRLXauIZHHAN79U1Kh57m7l1MGdNQuyy4S3I75XPgU75tgPr9RBRebDTHFbeCRl%2BecpeG4XZ4Hjy4B57TEZIGUqT4zO&X-Amz-Signature=81e5d4dd430a37ac9e6f1d4bab196cdcaabc16c7d815e9158f62572034da55ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAPWSTD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDvQylkV4LlRzaNElUdSuIaAlqj04kqdRs9KgU5zhHLtwIgLZiyLx%2Fne%2FMJqnithxGJX2kY%2F7i7EMqqCBG6C%2B3NZcEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC8alwNfxDP%2FT0srjCrcAxt23ehyZBVaLRsGPYkvPhK8l6C2QuV959kKvF%2BAQI4spS%2FO%2B%2BEytL%2BVOTIJBVjNXo6DefklBRYrYiizZvH%2Bzq10oqS3etJ1jTsLLcelMHYAq%2FAm1NrfUaDwW8sIKk6lIMJvgpVOZHqY9%2FJ%2FV4jM6XBjBRvmMXnVBAIPRNpnH%2BV5BoHNcYNGwmfSXXdJH%2B%2BExycqGWC6x0pqKYWonUl4MCfjMP%2B4sAXYzDILXeFxp3TLB7l%2FMaNr7F1E9ImNLxyiARjithTFgZfyxzi4cVeqLEw%2FkIfrgPKvMmLLW%2F4poAfOC6ZMfdbY4NhoAPo%2BKFLVkXAhmy1BMeThWMfND19KZOhZyPlxhL6UJL0fLse6fJEiHjILnUiV6kncGS0cBgHLmoBf95nRBb0YCZUjJ4K1rb751kjkIl9g71kj%2BuEP9pen%2F3f%2BpOUqPtE7BBZCpLWHksy2ogqdelhNOs94MMre%2B9PkRJhOmNYzsitxIbT3hygAbKGzEOZcehrZubGJ%2F5JJFTI84s5RGaiwyc9pwev1WVWJHux6sCywYk8JY8jg0pMetq1n6BitGmf6piTVO77aIQsU6YDEmkYnDqn09Zs3f5hMIyBWvlAauGJSjTUn%2BVxIlhW1VZr320xYBo5pMO3LqcMGOqUBSgpG%2BemPZ%2F21%2BAUSyrsrGvo91eH6Oq%2FewtmKTMu9zUSU6eb%2By1HPAQwPis1E927sXQdMP8CuM5Jdbd9ScStOg49euygLJ5%2B%2FzcrTMSGIbxURgbWEPvCxYeQVvjR9SKZwGBRLXauIZHHAN79U1Kh57m7l1MGdNQuyy4S3I75XPgU75tgPr9RBRebDTHFbeCRl%2BecpeG4XZ4Hjy4B57TEZIGUqT4zO&X-Amz-Signature=7ad9ed3336c0cfb85449358e7b42d09bf28e09005bb28ece05610ca6833d11d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAPWSTD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDvQylkV4LlRzaNElUdSuIaAlqj04kqdRs9KgU5zhHLtwIgLZiyLx%2Fne%2FMJqnithxGJX2kY%2F7i7EMqqCBG6C%2B3NZcEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC8alwNfxDP%2FT0srjCrcAxt23ehyZBVaLRsGPYkvPhK8l6C2QuV959kKvF%2BAQI4spS%2FO%2B%2BEytL%2BVOTIJBVjNXo6DefklBRYrYiizZvH%2Bzq10oqS3etJ1jTsLLcelMHYAq%2FAm1NrfUaDwW8sIKk6lIMJvgpVOZHqY9%2FJ%2FV4jM6XBjBRvmMXnVBAIPRNpnH%2BV5BoHNcYNGwmfSXXdJH%2B%2BExycqGWC6x0pqKYWonUl4MCfjMP%2B4sAXYzDILXeFxp3TLB7l%2FMaNr7F1E9ImNLxyiARjithTFgZfyxzi4cVeqLEw%2FkIfrgPKvMmLLW%2F4poAfOC6ZMfdbY4NhoAPo%2BKFLVkXAhmy1BMeThWMfND19KZOhZyPlxhL6UJL0fLse6fJEiHjILnUiV6kncGS0cBgHLmoBf95nRBb0YCZUjJ4K1rb751kjkIl9g71kj%2BuEP9pen%2F3f%2BpOUqPtE7BBZCpLWHksy2ogqdelhNOs94MMre%2B9PkRJhOmNYzsitxIbT3hygAbKGzEOZcehrZubGJ%2F5JJFTI84s5RGaiwyc9pwev1WVWJHux6sCywYk8JY8jg0pMetq1n6BitGmf6piTVO77aIQsU6YDEmkYnDqn09Zs3f5hMIyBWvlAauGJSjTUn%2BVxIlhW1VZr320xYBo5pMO3LqcMGOqUBSgpG%2BemPZ%2F21%2BAUSyrsrGvo91eH6Oq%2FewtmKTMu9zUSU6eb%2By1HPAQwPis1E927sXQdMP8CuM5Jdbd9ScStOg49euygLJ5%2B%2FzcrTMSGIbxURgbWEPvCxYeQVvjR9SKZwGBRLXauIZHHAN79U1Kh57m7l1MGdNQuyy4S3I75XPgU75tgPr9RBRebDTHFbeCRl%2BecpeG4XZ4Hjy4B57TEZIGUqT4zO&X-Amz-Signature=b5e61bc54f045b4dbba748ab9984ffa0f0e7239f1e46a982deb40d7f0eb5f36e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
