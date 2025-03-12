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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJ77GEA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDnov1Wr4SXpm0EopXEalj4Hu90WdvHLKEsOeOLCL4EBAIgT2MD0hTFoEk44caqtOO4MmCEAg2njRmomRcfINiV3%2FYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXK7YpZ2iCbMsyQMSrcAyzX8Pjvw97A6SxYApjgGzoCR0Ys4M5rSrRjT8QFiD5vC3p%2FDQ1901SCQekn3bsjSDSOmqiUKALsCwKJSQ%2BgxS1jDp%2Bpq5sjrpXsxqYz%2FT931bFVHDBSGuRPYK1gcH7csup8aI25ZEBCd3hm4PCQicCjTKme49EpswFEWSsqEFXSxvw9E8fzOlLvJP5uronDFJGyYHgDZMTiKpQnLkfZkGiWws8%2B1KWQ7SXWOpf9X3%2B%2F%2FToZkfearr2SGrEZekAKmyRy%2FhMb8nlDt%2B2I0rQM6I9GHH79VB%2FNPxDg%2FPELyHvb4zBxmtQjFIRbEhO8dbqFsVoxqNev3RdFGZFq0pz25%2Bz6tFg6Ql%2FwG1%2B6mj%2BlvD%2FlSmL5ViwA89dVtGdW2RZUy1UEs0L6Gr0iICNNjS0H6niE99Qgyxm55PMzly9F9vIEvUdaetXn0wkLehT5U%2FhEGXyQZOcjz%2B44jNKTG32uK0puSrjNhN27vHiIwZAVOnm0Am9nt20x668LBV7PVDrhzYRJpQzhFQgbi2bK7PJwP78Arm4T0XpRceVc8T3QVLap6KZOnhOLNKzg5pIiFUsdpDbcuLSbIKWsF24dY5WnmLL2ehO6fBUuxZiaDf83KoQ02csX2xEnN%2F2wcfsaMLucxb4GOqUBUBk%2BEhOATApx9l84HolTCbQaEpfUzfULOsDZfhYjZGaxpsdx0W1VLmPvZ7t6ILyXopH%2FLAA%2F03cOMOZ6bAtpa6AJoGciEzKiF1gqMmeo21VpkcuJgdZx%2BMyFApFbeUFPQlxM3s3y3DM9EUXiZc5keR8BeelX90b5gIcZM6ZxXqgceaQzjjJUGQikQ46a%2B%2BjTFg1RsF8GpDYeYDWFmdq7AhMqAhiQ&X-Amz-Signature=423f5b566dea1befe00eba2f3b75fe1758a49748102243a5ad002ff35137e64d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJ77GEA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDnov1Wr4SXpm0EopXEalj4Hu90WdvHLKEsOeOLCL4EBAIgT2MD0hTFoEk44caqtOO4MmCEAg2njRmomRcfINiV3%2FYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXK7YpZ2iCbMsyQMSrcAyzX8Pjvw97A6SxYApjgGzoCR0Ys4M5rSrRjT8QFiD5vC3p%2FDQ1901SCQekn3bsjSDSOmqiUKALsCwKJSQ%2BgxS1jDp%2Bpq5sjrpXsxqYz%2FT931bFVHDBSGuRPYK1gcH7csup8aI25ZEBCd3hm4PCQicCjTKme49EpswFEWSsqEFXSxvw9E8fzOlLvJP5uronDFJGyYHgDZMTiKpQnLkfZkGiWws8%2B1KWQ7SXWOpf9X3%2B%2F%2FToZkfearr2SGrEZekAKmyRy%2FhMb8nlDt%2B2I0rQM6I9GHH79VB%2FNPxDg%2FPELyHvb4zBxmtQjFIRbEhO8dbqFsVoxqNev3RdFGZFq0pz25%2Bz6tFg6Ql%2FwG1%2B6mj%2BlvD%2FlSmL5ViwA89dVtGdW2RZUy1UEs0L6Gr0iICNNjS0H6niE99Qgyxm55PMzly9F9vIEvUdaetXn0wkLehT5U%2FhEGXyQZOcjz%2B44jNKTG32uK0puSrjNhN27vHiIwZAVOnm0Am9nt20x668LBV7PVDrhzYRJpQzhFQgbi2bK7PJwP78Arm4T0XpRceVc8T3QVLap6KZOnhOLNKzg5pIiFUsdpDbcuLSbIKWsF24dY5WnmLL2ehO6fBUuxZiaDf83KoQ02csX2xEnN%2F2wcfsaMLucxb4GOqUBUBk%2BEhOATApx9l84HolTCbQaEpfUzfULOsDZfhYjZGaxpsdx0W1VLmPvZ7t6ILyXopH%2FLAA%2F03cOMOZ6bAtpa6AJoGciEzKiF1gqMmeo21VpkcuJgdZx%2BMyFApFbeUFPQlxM3s3y3DM9EUXiZc5keR8BeelX90b5gIcZM6ZxXqgceaQzjjJUGQikQ46a%2B%2BjTFg1RsF8GpDYeYDWFmdq7AhMqAhiQ&X-Amz-Signature=36af083040130ff2cdf5c25ffc5077f97e5b79a0da228c2d72110ac3328c9a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJ77GEA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDnov1Wr4SXpm0EopXEalj4Hu90WdvHLKEsOeOLCL4EBAIgT2MD0hTFoEk44caqtOO4MmCEAg2njRmomRcfINiV3%2FYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXK7YpZ2iCbMsyQMSrcAyzX8Pjvw97A6SxYApjgGzoCR0Ys4M5rSrRjT8QFiD5vC3p%2FDQ1901SCQekn3bsjSDSOmqiUKALsCwKJSQ%2BgxS1jDp%2Bpq5sjrpXsxqYz%2FT931bFVHDBSGuRPYK1gcH7csup8aI25ZEBCd3hm4PCQicCjTKme49EpswFEWSsqEFXSxvw9E8fzOlLvJP5uronDFJGyYHgDZMTiKpQnLkfZkGiWws8%2B1KWQ7SXWOpf9X3%2B%2F%2FToZkfearr2SGrEZekAKmyRy%2FhMb8nlDt%2B2I0rQM6I9GHH79VB%2FNPxDg%2FPELyHvb4zBxmtQjFIRbEhO8dbqFsVoxqNev3RdFGZFq0pz25%2Bz6tFg6Ql%2FwG1%2B6mj%2BlvD%2FlSmL5ViwA89dVtGdW2RZUy1UEs0L6Gr0iICNNjS0H6niE99Qgyxm55PMzly9F9vIEvUdaetXn0wkLehT5U%2FhEGXyQZOcjz%2B44jNKTG32uK0puSrjNhN27vHiIwZAVOnm0Am9nt20x668LBV7PVDrhzYRJpQzhFQgbi2bK7PJwP78Arm4T0XpRceVc8T3QVLap6KZOnhOLNKzg5pIiFUsdpDbcuLSbIKWsF24dY5WnmLL2ehO6fBUuxZiaDf83KoQ02csX2xEnN%2F2wcfsaMLucxb4GOqUBUBk%2BEhOATApx9l84HolTCbQaEpfUzfULOsDZfhYjZGaxpsdx0W1VLmPvZ7t6ILyXopH%2FLAA%2F03cOMOZ6bAtpa6AJoGciEzKiF1gqMmeo21VpkcuJgdZx%2BMyFApFbeUFPQlxM3s3y3DM9EUXiZc5keR8BeelX90b5gIcZM6ZxXqgceaQzjjJUGQikQ46a%2B%2BjTFg1RsF8GpDYeYDWFmdq7AhMqAhiQ&X-Amz-Signature=852337e5d436f61d1d1890c17a537f5fb75f2f4d283e2a18207d205e53497344&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJ77GEA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDnov1Wr4SXpm0EopXEalj4Hu90WdvHLKEsOeOLCL4EBAIgT2MD0hTFoEk44caqtOO4MmCEAg2njRmomRcfINiV3%2FYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXK7YpZ2iCbMsyQMSrcAyzX8Pjvw97A6SxYApjgGzoCR0Ys4M5rSrRjT8QFiD5vC3p%2FDQ1901SCQekn3bsjSDSOmqiUKALsCwKJSQ%2BgxS1jDp%2Bpq5sjrpXsxqYz%2FT931bFVHDBSGuRPYK1gcH7csup8aI25ZEBCd3hm4PCQicCjTKme49EpswFEWSsqEFXSxvw9E8fzOlLvJP5uronDFJGyYHgDZMTiKpQnLkfZkGiWws8%2B1KWQ7SXWOpf9X3%2B%2F%2FToZkfearr2SGrEZekAKmyRy%2FhMb8nlDt%2B2I0rQM6I9GHH79VB%2FNPxDg%2FPELyHvb4zBxmtQjFIRbEhO8dbqFsVoxqNev3RdFGZFq0pz25%2Bz6tFg6Ql%2FwG1%2B6mj%2BlvD%2FlSmL5ViwA89dVtGdW2RZUy1UEs0L6Gr0iICNNjS0H6niE99Qgyxm55PMzly9F9vIEvUdaetXn0wkLehT5U%2FhEGXyQZOcjz%2B44jNKTG32uK0puSrjNhN27vHiIwZAVOnm0Am9nt20x668LBV7PVDrhzYRJpQzhFQgbi2bK7PJwP78Arm4T0XpRceVc8T3QVLap6KZOnhOLNKzg5pIiFUsdpDbcuLSbIKWsF24dY5WnmLL2ehO6fBUuxZiaDf83KoQ02csX2xEnN%2F2wcfsaMLucxb4GOqUBUBk%2BEhOATApx9l84HolTCbQaEpfUzfULOsDZfhYjZGaxpsdx0W1VLmPvZ7t6ILyXopH%2FLAA%2F03cOMOZ6bAtpa6AJoGciEzKiF1gqMmeo21VpkcuJgdZx%2BMyFApFbeUFPQlxM3s3y3DM9EUXiZc5keR8BeelX90b5gIcZM6ZxXqgceaQzjjJUGQikQ46a%2B%2BjTFg1RsF8GpDYeYDWFmdq7AhMqAhiQ&X-Amz-Signature=3597517a2b0d2f3fefbf5a4f96bf8e47bd592a4f3e36f9cfcfc31b12f536c57c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJ77GEA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDnov1Wr4SXpm0EopXEalj4Hu90WdvHLKEsOeOLCL4EBAIgT2MD0hTFoEk44caqtOO4MmCEAg2njRmomRcfINiV3%2FYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXK7YpZ2iCbMsyQMSrcAyzX8Pjvw97A6SxYApjgGzoCR0Ys4M5rSrRjT8QFiD5vC3p%2FDQ1901SCQekn3bsjSDSOmqiUKALsCwKJSQ%2BgxS1jDp%2Bpq5sjrpXsxqYz%2FT931bFVHDBSGuRPYK1gcH7csup8aI25ZEBCd3hm4PCQicCjTKme49EpswFEWSsqEFXSxvw9E8fzOlLvJP5uronDFJGyYHgDZMTiKpQnLkfZkGiWws8%2B1KWQ7SXWOpf9X3%2B%2F%2FToZkfearr2SGrEZekAKmyRy%2FhMb8nlDt%2B2I0rQM6I9GHH79VB%2FNPxDg%2FPELyHvb4zBxmtQjFIRbEhO8dbqFsVoxqNev3RdFGZFq0pz25%2Bz6tFg6Ql%2FwG1%2B6mj%2BlvD%2FlSmL5ViwA89dVtGdW2RZUy1UEs0L6Gr0iICNNjS0H6niE99Qgyxm55PMzly9F9vIEvUdaetXn0wkLehT5U%2FhEGXyQZOcjz%2B44jNKTG32uK0puSrjNhN27vHiIwZAVOnm0Am9nt20x668LBV7PVDrhzYRJpQzhFQgbi2bK7PJwP78Arm4T0XpRceVc8T3QVLap6KZOnhOLNKzg5pIiFUsdpDbcuLSbIKWsF24dY5WnmLL2ehO6fBUuxZiaDf83KoQ02csX2xEnN%2F2wcfsaMLucxb4GOqUBUBk%2BEhOATApx9l84HolTCbQaEpfUzfULOsDZfhYjZGaxpsdx0W1VLmPvZ7t6ILyXopH%2FLAA%2F03cOMOZ6bAtpa6AJoGciEzKiF1gqMmeo21VpkcuJgdZx%2BMyFApFbeUFPQlxM3s3y3DM9EUXiZc5keR8BeelX90b5gIcZM6ZxXqgceaQzjjJUGQikQ46a%2B%2BjTFg1RsF8GpDYeYDWFmdq7AhMqAhiQ&X-Amz-Signature=7f64ffc1690696025dc916807308bced32a1efefdf480c56fca60fee935490e1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJ77GEA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDnov1Wr4SXpm0EopXEalj4Hu90WdvHLKEsOeOLCL4EBAIgT2MD0hTFoEk44caqtOO4MmCEAg2njRmomRcfINiV3%2FYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXK7YpZ2iCbMsyQMSrcAyzX8Pjvw97A6SxYApjgGzoCR0Ys4M5rSrRjT8QFiD5vC3p%2FDQ1901SCQekn3bsjSDSOmqiUKALsCwKJSQ%2BgxS1jDp%2Bpq5sjrpXsxqYz%2FT931bFVHDBSGuRPYK1gcH7csup8aI25ZEBCd3hm4PCQicCjTKme49EpswFEWSsqEFXSxvw9E8fzOlLvJP5uronDFJGyYHgDZMTiKpQnLkfZkGiWws8%2B1KWQ7SXWOpf9X3%2B%2F%2FToZkfearr2SGrEZekAKmyRy%2FhMb8nlDt%2B2I0rQM6I9GHH79VB%2FNPxDg%2FPELyHvb4zBxmtQjFIRbEhO8dbqFsVoxqNev3RdFGZFq0pz25%2Bz6tFg6Ql%2FwG1%2B6mj%2BlvD%2FlSmL5ViwA89dVtGdW2RZUy1UEs0L6Gr0iICNNjS0H6niE99Qgyxm55PMzly9F9vIEvUdaetXn0wkLehT5U%2FhEGXyQZOcjz%2B44jNKTG32uK0puSrjNhN27vHiIwZAVOnm0Am9nt20x668LBV7PVDrhzYRJpQzhFQgbi2bK7PJwP78Arm4T0XpRceVc8T3QVLap6KZOnhOLNKzg5pIiFUsdpDbcuLSbIKWsF24dY5WnmLL2ehO6fBUuxZiaDf83KoQ02csX2xEnN%2F2wcfsaMLucxb4GOqUBUBk%2BEhOATApx9l84HolTCbQaEpfUzfULOsDZfhYjZGaxpsdx0W1VLmPvZ7t6ILyXopH%2FLAA%2F03cOMOZ6bAtpa6AJoGciEzKiF1gqMmeo21VpkcuJgdZx%2BMyFApFbeUFPQlxM3s3y3DM9EUXiZc5keR8BeelX90b5gIcZM6ZxXqgceaQzjjJUGQikQ46a%2B%2BjTFg1RsF8GpDYeYDWFmdq7AhMqAhiQ&X-Amz-Signature=275dc3a8be789a8d94f5c37b12affbff2974a7a982793e99f6da94c72dfb215d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJ77GEA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDnov1Wr4SXpm0EopXEalj4Hu90WdvHLKEsOeOLCL4EBAIgT2MD0hTFoEk44caqtOO4MmCEAg2njRmomRcfINiV3%2FYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXK7YpZ2iCbMsyQMSrcAyzX8Pjvw97A6SxYApjgGzoCR0Ys4M5rSrRjT8QFiD5vC3p%2FDQ1901SCQekn3bsjSDSOmqiUKALsCwKJSQ%2BgxS1jDp%2Bpq5sjrpXsxqYz%2FT931bFVHDBSGuRPYK1gcH7csup8aI25ZEBCd3hm4PCQicCjTKme49EpswFEWSsqEFXSxvw9E8fzOlLvJP5uronDFJGyYHgDZMTiKpQnLkfZkGiWws8%2B1KWQ7SXWOpf9X3%2B%2F%2FToZkfearr2SGrEZekAKmyRy%2FhMb8nlDt%2B2I0rQM6I9GHH79VB%2FNPxDg%2FPELyHvb4zBxmtQjFIRbEhO8dbqFsVoxqNev3RdFGZFq0pz25%2Bz6tFg6Ql%2FwG1%2B6mj%2BlvD%2FlSmL5ViwA89dVtGdW2RZUy1UEs0L6Gr0iICNNjS0H6niE99Qgyxm55PMzly9F9vIEvUdaetXn0wkLehT5U%2FhEGXyQZOcjz%2B44jNKTG32uK0puSrjNhN27vHiIwZAVOnm0Am9nt20x668LBV7PVDrhzYRJpQzhFQgbi2bK7PJwP78Arm4T0XpRceVc8T3QVLap6KZOnhOLNKzg5pIiFUsdpDbcuLSbIKWsF24dY5WnmLL2ehO6fBUuxZiaDf83KoQ02csX2xEnN%2F2wcfsaMLucxb4GOqUBUBk%2BEhOATApx9l84HolTCbQaEpfUzfULOsDZfhYjZGaxpsdx0W1VLmPvZ7t6ILyXopH%2FLAA%2F03cOMOZ6bAtpa6AJoGciEzKiF1gqMmeo21VpkcuJgdZx%2BMyFApFbeUFPQlxM3s3y3DM9EUXiZc5keR8BeelX90b5gIcZM6ZxXqgceaQzjjJUGQikQ46a%2B%2BjTFg1RsF8GpDYeYDWFmdq7AhMqAhiQ&X-Amz-Signature=7325dc3170573f9cf823fd6645d4275ad42dcfea463e606c1621cb187ef8d8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
