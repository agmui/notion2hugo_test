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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3J75AK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICJScf4DqmSLLH%2FAnDvThzDGy9oh6Ir6oZimhPoi3Z%2FSAiEA1tByjUVkRfH%2B69e95PeKAVSfGlRK6TJf3oph8GBbv34qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7z0rAoqZtONCkwXCrcAylWO8Cc7LzkA6mu7bXXtChkX%2FTpw%2FPbbuMn2C0N0dkEjVLvpBGONFlEbMNOgdQ3lv8d9ynSuZrEhujPqRjaWWrtTvP%2F0WMS6svMridkhSC7MQcG9MJ1ay5yfMqim8z2WW%2FCLtbQ%2B5ATno4HstM6JVcoix4A%2BeG4i8X8GJ5lWqW1lFjq1Xaau2DnCacSXswrqSAn%2BijGxHon0PWLEPmjwO1IvUXwSxetYLxc53vB3GHkX0s%2F3tYHRKCOlvJ0txAp6G%2FjMmAd65qQ3eQcelMB%2FN3SJb%2FxB3arjF%2Fo0FI5X3e7fqw67ye38gZwKVamDGWlrfJN4LcVnNDb6TUEbD%2BqpF%2FFMFz%2BDMi2l%2FUYgOOtBVHdQSkoUWPdoTvQsYVWkKXgaFBlCxJ1pGU8NdwqjV0%2FKlFPgDw8t5SD5jjIkQDNhbvhhZHxbGhh3ioPhGnl%2FRT35VZ2UaVpCDKkUXs1KyKUykBdO6K%2BqwYRRj40pq%2FaEnGxHGuXGlA078qEP7s4oLS%2B7pWYrnvIuyDBeDmsmq1zyr84F9fplqeCS8Z0qHr5k29uERf3lHPtW%2FOZcDURRb9sDJYRtABe7YYH4PtZFSscdG9AccS1wCohcJyGRyEI7QPm3sEBnBRm14kNQVbsMIyXm70GOqUBVsjTnpEDFUDcr78iTaFpndTU7sBjozganx1JWzNvIhWcGjCzkHD8EVJ32mkh5FmgR3dMb2aPM5kiVfiLym5eDdYjXOjEjKWakxHfLRYHQGGTBTJN8QVOy16Gm16qG6GiA2I62LazxR9N7LVZzSgQHkFCqoLDKZIIiDDOPoZDc3T2SoKGFvuqGsK0rTfKIingkebo6MYZawCcFh1bi0pwtlpDlQPU&X-Amz-Signature=c3f1d137c683bd0e727f133c6371b3d358b6ceccd367b7331e3ac8dd455a69ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3J75AK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICJScf4DqmSLLH%2FAnDvThzDGy9oh6Ir6oZimhPoi3Z%2FSAiEA1tByjUVkRfH%2B69e95PeKAVSfGlRK6TJf3oph8GBbv34qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7z0rAoqZtONCkwXCrcAylWO8Cc7LzkA6mu7bXXtChkX%2FTpw%2FPbbuMn2C0N0dkEjVLvpBGONFlEbMNOgdQ3lv8d9ynSuZrEhujPqRjaWWrtTvP%2F0WMS6svMridkhSC7MQcG9MJ1ay5yfMqim8z2WW%2FCLtbQ%2B5ATno4HstM6JVcoix4A%2BeG4i8X8GJ5lWqW1lFjq1Xaau2DnCacSXswrqSAn%2BijGxHon0PWLEPmjwO1IvUXwSxetYLxc53vB3GHkX0s%2F3tYHRKCOlvJ0txAp6G%2FjMmAd65qQ3eQcelMB%2FN3SJb%2FxB3arjF%2Fo0FI5X3e7fqw67ye38gZwKVamDGWlrfJN4LcVnNDb6TUEbD%2BqpF%2FFMFz%2BDMi2l%2FUYgOOtBVHdQSkoUWPdoTvQsYVWkKXgaFBlCxJ1pGU8NdwqjV0%2FKlFPgDw8t5SD5jjIkQDNhbvhhZHxbGhh3ioPhGnl%2FRT35VZ2UaVpCDKkUXs1KyKUykBdO6K%2BqwYRRj40pq%2FaEnGxHGuXGlA078qEP7s4oLS%2B7pWYrnvIuyDBeDmsmq1zyr84F9fplqeCS8Z0qHr5k29uERf3lHPtW%2FOZcDURRb9sDJYRtABe7YYH4PtZFSscdG9AccS1wCohcJyGRyEI7QPm3sEBnBRm14kNQVbsMIyXm70GOqUBVsjTnpEDFUDcr78iTaFpndTU7sBjozganx1JWzNvIhWcGjCzkHD8EVJ32mkh5FmgR3dMb2aPM5kiVfiLym5eDdYjXOjEjKWakxHfLRYHQGGTBTJN8QVOy16Gm16qG6GiA2I62LazxR9N7LVZzSgQHkFCqoLDKZIIiDDOPoZDc3T2SoKGFvuqGsK0rTfKIingkebo6MYZawCcFh1bi0pwtlpDlQPU&X-Amz-Signature=014d9706d96a1916d48e6fc2a5e9c08f61533449842fd44c726d9487b41714d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3J75AK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICJScf4DqmSLLH%2FAnDvThzDGy9oh6Ir6oZimhPoi3Z%2FSAiEA1tByjUVkRfH%2B69e95PeKAVSfGlRK6TJf3oph8GBbv34qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7z0rAoqZtONCkwXCrcAylWO8Cc7LzkA6mu7bXXtChkX%2FTpw%2FPbbuMn2C0N0dkEjVLvpBGONFlEbMNOgdQ3lv8d9ynSuZrEhujPqRjaWWrtTvP%2F0WMS6svMridkhSC7MQcG9MJ1ay5yfMqim8z2WW%2FCLtbQ%2B5ATno4HstM6JVcoix4A%2BeG4i8X8GJ5lWqW1lFjq1Xaau2DnCacSXswrqSAn%2BijGxHon0PWLEPmjwO1IvUXwSxetYLxc53vB3GHkX0s%2F3tYHRKCOlvJ0txAp6G%2FjMmAd65qQ3eQcelMB%2FN3SJb%2FxB3arjF%2Fo0FI5X3e7fqw67ye38gZwKVamDGWlrfJN4LcVnNDb6TUEbD%2BqpF%2FFMFz%2BDMi2l%2FUYgOOtBVHdQSkoUWPdoTvQsYVWkKXgaFBlCxJ1pGU8NdwqjV0%2FKlFPgDw8t5SD5jjIkQDNhbvhhZHxbGhh3ioPhGnl%2FRT35VZ2UaVpCDKkUXs1KyKUykBdO6K%2BqwYRRj40pq%2FaEnGxHGuXGlA078qEP7s4oLS%2B7pWYrnvIuyDBeDmsmq1zyr84F9fplqeCS8Z0qHr5k29uERf3lHPtW%2FOZcDURRb9sDJYRtABe7YYH4PtZFSscdG9AccS1wCohcJyGRyEI7QPm3sEBnBRm14kNQVbsMIyXm70GOqUBVsjTnpEDFUDcr78iTaFpndTU7sBjozganx1JWzNvIhWcGjCzkHD8EVJ32mkh5FmgR3dMb2aPM5kiVfiLym5eDdYjXOjEjKWakxHfLRYHQGGTBTJN8QVOy16Gm16qG6GiA2I62LazxR9N7LVZzSgQHkFCqoLDKZIIiDDOPoZDc3T2SoKGFvuqGsK0rTfKIingkebo6MYZawCcFh1bi0pwtlpDlQPU&X-Amz-Signature=e414075b357cf5899c5d2299eace410b5055bdd1b2358390503b9a84d26518b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3J75AK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICJScf4DqmSLLH%2FAnDvThzDGy9oh6Ir6oZimhPoi3Z%2FSAiEA1tByjUVkRfH%2B69e95PeKAVSfGlRK6TJf3oph8GBbv34qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7z0rAoqZtONCkwXCrcAylWO8Cc7LzkA6mu7bXXtChkX%2FTpw%2FPbbuMn2C0N0dkEjVLvpBGONFlEbMNOgdQ3lv8d9ynSuZrEhujPqRjaWWrtTvP%2F0WMS6svMridkhSC7MQcG9MJ1ay5yfMqim8z2WW%2FCLtbQ%2B5ATno4HstM6JVcoix4A%2BeG4i8X8GJ5lWqW1lFjq1Xaau2DnCacSXswrqSAn%2BijGxHon0PWLEPmjwO1IvUXwSxetYLxc53vB3GHkX0s%2F3tYHRKCOlvJ0txAp6G%2FjMmAd65qQ3eQcelMB%2FN3SJb%2FxB3arjF%2Fo0FI5X3e7fqw67ye38gZwKVamDGWlrfJN4LcVnNDb6TUEbD%2BqpF%2FFMFz%2BDMi2l%2FUYgOOtBVHdQSkoUWPdoTvQsYVWkKXgaFBlCxJ1pGU8NdwqjV0%2FKlFPgDw8t5SD5jjIkQDNhbvhhZHxbGhh3ioPhGnl%2FRT35VZ2UaVpCDKkUXs1KyKUykBdO6K%2BqwYRRj40pq%2FaEnGxHGuXGlA078qEP7s4oLS%2B7pWYrnvIuyDBeDmsmq1zyr84F9fplqeCS8Z0qHr5k29uERf3lHPtW%2FOZcDURRb9sDJYRtABe7YYH4PtZFSscdG9AccS1wCohcJyGRyEI7QPm3sEBnBRm14kNQVbsMIyXm70GOqUBVsjTnpEDFUDcr78iTaFpndTU7sBjozganx1JWzNvIhWcGjCzkHD8EVJ32mkh5FmgR3dMb2aPM5kiVfiLym5eDdYjXOjEjKWakxHfLRYHQGGTBTJN8QVOy16Gm16qG6GiA2I62LazxR9N7LVZzSgQHkFCqoLDKZIIiDDOPoZDc3T2SoKGFvuqGsK0rTfKIingkebo6MYZawCcFh1bi0pwtlpDlQPU&X-Amz-Signature=f89b4a0f30c718336122e20bd0fbb56cb6776f7a41828c7ae3c678890e7fb04c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3J75AK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICJScf4DqmSLLH%2FAnDvThzDGy9oh6Ir6oZimhPoi3Z%2FSAiEA1tByjUVkRfH%2B69e95PeKAVSfGlRK6TJf3oph8GBbv34qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7z0rAoqZtONCkwXCrcAylWO8Cc7LzkA6mu7bXXtChkX%2FTpw%2FPbbuMn2C0N0dkEjVLvpBGONFlEbMNOgdQ3lv8d9ynSuZrEhujPqRjaWWrtTvP%2F0WMS6svMridkhSC7MQcG9MJ1ay5yfMqim8z2WW%2FCLtbQ%2B5ATno4HstM6JVcoix4A%2BeG4i8X8GJ5lWqW1lFjq1Xaau2DnCacSXswrqSAn%2BijGxHon0PWLEPmjwO1IvUXwSxetYLxc53vB3GHkX0s%2F3tYHRKCOlvJ0txAp6G%2FjMmAd65qQ3eQcelMB%2FN3SJb%2FxB3arjF%2Fo0FI5X3e7fqw67ye38gZwKVamDGWlrfJN4LcVnNDb6TUEbD%2BqpF%2FFMFz%2BDMi2l%2FUYgOOtBVHdQSkoUWPdoTvQsYVWkKXgaFBlCxJ1pGU8NdwqjV0%2FKlFPgDw8t5SD5jjIkQDNhbvhhZHxbGhh3ioPhGnl%2FRT35VZ2UaVpCDKkUXs1KyKUykBdO6K%2BqwYRRj40pq%2FaEnGxHGuXGlA078qEP7s4oLS%2B7pWYrnvIuyDBeDmsmq1zyr84F9fplqeCS8Z0qHr5k29uERf3lHPtW%2FOZcDURRb9sDJYRtABe7YYH4PtZFSscdG9AccS1wCohcJyGRyEI7QPm3sEBnBRm14kNQVbsMIyXm70GOqUBVsjTnpEDFUDcr78iTaFpndTU7sBjozganx1JWzNvIhWcGjCzkHD8EVJ32mkh5FmgR3dMb2aPM5kiVfiLym5eDdYjXOjEjKWakxHfLRYHQGGTBTJN8QVOy16Gm16qG6GiA2I62LazxR9N7LVZzSgQHkFCqoLDKZIIiDDOPoZDc3T2SoKGFvuqGsK0rTfKIingkebo6MYZawCcFh1bi0pwtlpDlQPU&X-Amz-Signature=56010df48dd440e9f9bb0b445711a0229449b3b956331da7097ea42f326f6cab&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3J75AK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICJScf4DqmSLLH%2FAnDvThzDGy9oh6Ir6oZimhPoi3Z%2FSAiEA1tByjUVkRfH%2B69e95PeKAVSfGlRK6TJf3oph8GBbv34qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7z0rAoqZtONCkwXCrcAylWO8Cc7LzkA6mu7bXXtChkX%2FTpw%2FPbbuMn2C0N0dkEjVLvpBGONFlEbMNOgdQ3lv8d9ynSuZrEhujPqRjaWWrtTvP%2F0WMS6svMridkhSC7MQcG9MJ1ay5yfMqim8z2WW%2FCLtbQ%2B5ATno4HstM6JVcoix4A%2BeG4i8X8GJ5lWqW1lFjq1Xaau2DnCacSXswrqSAn%2BijGxHon0PWLEPmjwO1IvUXwSxetYLxc53vB3GHkX0s%2F3tYHRKCOlvJ0txAp6G%2FjMmAd65qQ3eQcelMB%2FN3SJb%2FxB3arjF%2Fo0FI5X3e7fqw67ye38gZwKVamDGWlrfJN4LcVnNDb6TUEbD%2BqpF%2FFMFz%2BDMi2l%2FUYgOOtBVHdQSkoUWPdoTvQsYVWkKXgaFBlCxJ1pGU8NdwqjV0%2FKlFPgDw8t5SD5jjIkQDNhbvhhZHxbGhh3ioPhGnl%2FRT35VZ2UaVpCDKkUXs1KyKUykBdO6K%2BqwYRRj40pq%2FaEnGxHGuXGlA078qEP7s4oLS%2B7pWYrnvIuyDBeDmsmq1zyr84F9fplqeCS8Z0qHr5k29uERf3lHPtW%2FOZcDURRb9sDJYRtABe7YYH4PtZFSscdG9AccS1wCohcJyGRyEI7QPm3sEBnBRm14kNQVbsMIyXm70GOqUBVsjTnpEDFUDcr78iTaFpndTU7sBjozganx1JWzNvIhWcGjCzkHD8EVJ32mkh5FmgR3dMb2aPM5kiVfiLym5eDdYjXOjEjKWakxHfLRYHQGGTBTJN8QVOy16Gm16qG6GiA2I62LazxR9N7LVZzSgQHkFCqoLDKZIIiDDOPoZDc3T2SoKGFvuqGsK0rTfKIingkebo6MYZawCcFh1bi0pwtlpDlQPU&X-Amz-Signature=004f42889d488e1ddd8b44ff42eae23d6c3c5bfe0cd5d88fc3dd44fdc704c698&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3J75AK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICJScf4DqmSLLH%2FAnDvThzDGy9oh6Ir6oZimhPoi3Z%2FSAiEA1tByjUVkRfH%2B69e95PeKAVSfGlRK6TJf3oph8GBbv34qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7z0rAoqZtONCkwXCrcAylWO8Cc7LzkA6mu7bXXtChkX%2FTpw%2FPbbuMn2C0N0dkEjVLvpBGONFlEbMNOgdQ3lv8d9ynSuZrEhujPqRjaWWrtTvP%2F0WMS6svMridkhSC7MQcG9MJ1ay5yfMqim8z2WW%2FCLtbQ%2B5ATno4HstM6JVcoix4A%2BeG4i8X8GJ5lWqW1lFjq1Xaau2DnCacSXswrqSAn%2BijGxHon0PWLEPmjwO1IvUXwSxetYLxc53vB3GHkX0s%2F3tYHRKCOlvJ0txAp6G%2FjMmAd65qQ3eQcelMB%2FN3SJb%2FxB3arjF%2Fo0FI5X3e7fqw67ye38gZwKVamDGWlrfJN4LcVnNDb6TUEbD%2BqpF%2FFMFz%2BDMi2l%2FUYgOOtBVHdQSkoUWPdoTvQsYVWkKXgaFBlCxJ1pGU8NdwqjV0%2FKlFPgDw8t5SD5jjIkQDNhbvhhZHxbGhh3ioPhGnl%2FRT35VZ2UaVpCDKkUXs1KyKUykBdO6K%2BqwYRRj40pq%2FaEnGxHGuXGlA078qEP7s4oLS%2B7pWYrnvIuyDBeDmsmq1zyr84F9fplqeCS8Z0qHr5k29uERf3lHPtW%2FOZcDURRb9sDJYRtABe7YYH4PtZFSscdG9AccS1wCohcJyGRyEI7QPm3sEBnBRm14kNQVbsMIyXm70GOqUBVsjTnpEDFUDcr78iTaFpndTU7sBjozganx1JWzNvIhWcGjCzkHD8EVJ32mkh5FmgR3dMb2aPM5kiVfiLym5eDdYjXOjEjKWakxHfLRYHQGGTBTJN8QVOy16Gm16qG6GiA2I62LazxR9N7LVZzSgQHkFCqoLDKZIIiDDOPoZDc3T2SoKGFvuqGsK0rTfKIingkebo6MYZawCcFh1bi0pwtlpDlQPU&X-Amz-Signature=d1efa3c94819cbe10aae0160c00bc59872de4eb6a408d761e0dde12175908a21&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
