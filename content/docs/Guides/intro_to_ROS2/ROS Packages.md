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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NJHAVW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD3fFGpKO2gm64Ygfk7dPY0vY1tc2NWf%2FQqBfKyroh8sgIgPeCciogGPGaWlif6n2NORmYIJWR5wruzMrvoDvigWEQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZHwCiyaH0FJYruyrcAyQckmJMzxoRsPKxrVNlIkm3NW08tV4oxnRQ%2BykErRtypBIc1KlZ4plW1JuXEbn6PDzK6eCCi%2FLXS%2FXHXAXuRz2FPIS10hRUBnveR%2FP3g9JocjHLMO5RHf9tswc4Y2sVthRoRVEain%2BJCyfTW16oF8AnB3sAeP6T8l0ybMAUrR8L%2BNm4kMkDAm3S9h1H2H8jE5kxrVFpTTVF29pEKV74oEWMLdIigSULsEtrediDEe9LnXCJX5JRPmSqm3z4bDrcoHmgSJw%2FM5C9yUD9kaUWUpt1WFl%2FVTHP7ejjIS33WOC6Ig79OPtDLaqz0%2BIzaPwNksduJiYpez8RNIYlWgXVIxkGYBKyLLp5lmmjMKFAScKGmxjM3u4%2FQHqmPYvyE42kvO20D81YECOOnUWVS7cEHki7kVpcEeCjJj22gSaswVL6IRcH5fJiXqD2VzKs8CiGdOOcUUYle56jbQQF11HraxN%2BJC6s4D4itO8tElV9EFRACde7vX5EaqHs4hpBvDzrkWtv9btbwVIRvPrxZI6wr4PaEQU1xAdcy8pdUAHz6pHa1L%2BxtSTSKTWKee3%2BIYz6HcOUOpXwOMK%2FNhZn17pyj%2BV7fdzeVzzGZnfqsiwNFowKDqhrLg%2BzJnKNTftxMJT6874GOqUBXyBBEbmJG3VvXPxQCaDZTSnIj%2B4c1UNte9d78y2vpSAp%2Fk4aKjjtwRfaAYTAnMHypbNQAtCnlfjLZIxLyDWZkDV%2Bulz47%2BJ1mXlbsIiKcbx7BEBmRN%2BTo2H90%2FURhtTxDEvsCS7WTMuN%2FjPa9kAwfdSXq2IX1MHf%2FXfB%2BkjfwTqDLmN66J3c6lRYhqPiaxwr4Hm9WzDpvZoMM9%2BPSvzQaUzmmcBT&X-Amz-Signature=9f5d01d117d9021f4cc4c053160a21b4dec3e4aa62280ba6570a5f825d495af4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NJHAVW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD3fFGpKO2gm64Ygfk7dPY0vY1tc2NWf%2FQqBfKyroh8sgIgPeCciogGPGaWlif6n2NORmYIJWR5wruzMrvoDvigWEQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZHwCiyaH0FJYruyrcAyQckmJMzxoRsPKxrVNlIkm3NW08tV4oxnRQ%2BykErRtypBIc1KlZ4plW1JuXEbn6PDzK6eCCi%2FLXS%2FXHXAXuRz2FPIS10hRUBnveR%2FP3g9JocjHLMO5RHf9tswc4Y2sVthRoRVEain%2BJCyfTW16oF8AnB3sAeP6T8l0ybMAUrR8L%2BNm4kMkDAm3S9h1H2H8jE5kxrVFpTTVF29pEKV74oEWMLdIigSULsEtrediDEe9LnXCJX5JRPmSqm3z4bDrcoHmgSJw%2FM5C9yUD9kaUWUpt1WFl%2FVTHP7ejjIS33WOC6Ig79OPtDLaqz0%2BIzaPwNksduJiYpez8RNIYlWgXVIxkGYBKyLLp5lmmjMKFAScKGmxjM3u4%2FQHqmPYvyE42kvO20D81YECOOnUWVS7cEHki7kVpcEeCjJj22gSaswVL6IRcH5fJiXqD2VzKs8CiGdOOcUUYle56jbQQF11HraxN%2BJC6s4D4itO8tElV9EFRACde7vX5EaqHs4hpBvDzrkWtv9btbwVIRvPrxZI6wr4PaEQU1xAdcy8pdUAHz6pHa1L%2BxtSTSKTWKee3%2BIYz6HcOUOpXwOMK%2FNhZn17pyj%2BV7fdzeVzzGZnfqsiwNFowKDqhrLg%2BzJnKNTftxMJT6874GOqUBXyBBEbmJG3VvXPxQCaDZTSnIj%2B4c1UNte9d78y2vpSAp%2Fk4aKjjtwRfaAYTAnMHypbNQAtCnlfjLZIxLyDWZkDV%2Bulz47%2BJ1mXlbsIiKcbx7BEBmRN%2BTo2H90%2FURhtTxDEvsCS7WTMuN%2FjPa9kAwfdSXq2IX1MHf%2FXfB%2BkjfwTqDLmN66J3c6lRYhqPiaxwr4Hm9WzDpvZoMM9%2BPSvzQaUzmmcBT&X-Amz-Signature=f7fa14e7e69bbe4c545d44057066050cd3f5d2ca71eafe9492fa2c52736f5b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NJHAVW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD3fFGpKO2gm64Ygfk7dPY0vY1tc2NWf%2FQqBfKyroh8sgIgPeCciogGPGaWlif6n2NORmYIJWR5wruzMrvoDvigWEQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZHwCiyaH0FJYruyrcAyQckmJMzxoRsPKxrVNlIkm3NW08tV4oxnRQ%2BykErRtypBIc1KlZ4plW1JuXEbn6PDzK6eCCi%2FLXS%2FXHXAXuRz2FPIS10hRUBnveR%2FP3g9JocjHLMO5RHf9tswc4Y2sVthRoRVEain%2BJCyfTW16oF8AnB3sAeP6T8l0ybMAUrR8L%2BNm4kMkDAm3S9h1H2H8jE5kxrVFpTTVF29pEKV74oEWMLdIigSULsEtrediDEe9LnXCJX5JRPmSqm3z4bDrcoHmgSJw%2FM5C9yUD9kaUWUpt1WFl%2FVTHP7ejjIS33WOC6Ig79OPtDLaqz0%2BIzaPwNksduJiYpez8RNIYlWgXVIxkGYBKyLLp5lmmjMKFAScKGmxjM3u4%2FQHqmPYvyE42kvO20D81YECOOnUWVS7cEHki7kVpcEeCjJj22gSaswVL6IRcH5fJiXqD2VzKs8CiGdOOcUUYle56jbQQF11HraxN%2BJC6s4D4itO8tElV9EFRACde7vX5EaqHs4hpBvDzrkWtv9btbwVIRvPrxZI6wr4PaEQU1xAdcy8pdUAHz6pHa1L%2BxtSTSKTWKee3%2BIYz6HcOUOpXwOMK%2FNhZn17pyj%2BV7fdzeVzzGZnfqsiwNFowKDqhrLg%2BzJnKNTftxMJT6874GOqUBXyBBEbmJG3VvXPxQCaDZTSnIj%2B4c1UNte9d78y2vpSAp%2Fk4aKjjtwRfaAYTAnMHypbNQAtCnlfjLZIxLyDWZkDV%2Bulz47%2BJ1mXlbsIiKcbx7BEBmRN%2BTo2H90%2FURhtTxDEvsCS7WTMuN%2FjPa9kAwfdSXq2IX1MHf%2FXfB%2BkjfwTqDLmN66J3c6lRYhqPiaxwr4Hm9WzDpvZoMM9%2BPSvzQaUzmmcBT&X-Amz-Signature=9a38b08485f4fd476ff238eac5f9765cb5d8d849e04bb67b4dbd2fccc20224bf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NJHAVW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD3fFGpKO2gm64Ygfk7dPY0vY1tc2NWf%2FQqBfKyroh8sgIgPeCciogGPGaWlif6n2NORmYIJWR5wruzMrvoDvigWEQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZHwCiyaH0FJYruyrcAyQckmJMzxoRsPKxrVNlIkm3NW08tV4oxnRQ%2BykErRtypBIc1KlZ4plW1JuXEbn6PDzK6eCCi%2FLXS%2FXHXAXuRz2FPIS10hRUBnveR%2FP3g9JocjHLMO5RHf9tswc4Y2sVthRoRVEain%2BJCyfTW16oF8AnB3sAeP6T8l0ybMAUrR8L%2BNm4kMkDAm3S9h1H2H8jE5kxrVFpTTVF29pEKV74oEWMLdIigSULsEtrediDEe9LnXCJX5JRPmSqm3z4bDrcoHmgSJw%2FM5C9yUD9kaUWUpt1WFl%2FVTHP7ejjIS33WOC6Ig79OPtDLaqz0%2BIzaPwNksduJiYpez8RNIYlWgXVIxkGYBKyLLp5lmmjMKFAScKGmxjM3u4%2FQHqmPYvyE42kvO20D81YECOOnUWVS7cEHki7kVpcEeCjJj22gSaswVL6IRcH5fJiXqD2VzKs8CiGdOOcUUYle56jbQQF11HraxN%2BJC6s4D4itO8tElV9EFRACde7vX5EaqHs4hpBvDzrkWtv9btbwVIRvPrxZI6wr4PaEQU1xAdcy8pdUAHz6pHa1L%2BxtSTSKTWKee3%2BIYz6HcOUOpXwOMK%2FNhZn17pyj%2BV7fdzeVzzGZnfqsiwNFowKDqhrLg%2BzJnKNTftxMJT6874GOqUBXyBBEbmJG3VvXPxQCaDZTSnIj%2B4c1UNte9d78y2vpSAp%2Fk4aKjjtwRfaAYTAnMHypbNQAtCnlfjLZIxLyDWZkDV%2Bulz47%2BJ1mXlbsIiKcbx7BEBmRN%2BTo2H90%2FURhtTxDEvsCS7WTMuN%2FjPa9kAwfdSXq2IX1MHf%2FXfB%2BkjfwTqDLmN66J3c6lRYhqPiaxwr4Hm9WzDpvZoMM9%2BPSvzQaUzmmcBT&X-Amz-Signature=b44ff780084a184865b6d6c0ecbed7e3cc3057ac807b5d4c5163737535ffe4fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NJHAVW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD3fFGpKO2gm64Ygfk7dPY0vY1tc2NWf%2FQqBfKyroh8sgIgPeCciogGPGaWlif6n2NORmYIJWR5wruzMrvoDvigWEQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZHwCiyaH0FJYruyrcAyQckmJMzxoRsPKxrVNlIkm3NW08tV4oxnRQ%2BykErRtypBIc1KlZ4plW1JuXEbn6PDzK6eCCi%2FLXS%2FXHXAXuRz2FPIS10hRUBnveR%2FP3g9JocjHLMO5RHf9tswc4Y2sVthRoRVEain%2BJCyfTW16oF8AnB3sAeP6T8l0ybMAUrR8L%2BNm4kMkDAm3S9h1H2H8jE5kxrVFpTTVF29pEKV74oEWMLdIigSULsEtrediDEe9LnXCJX5JRPmSqm3z4bDrcoHmgSJw%2FM5C9yUD9kaUWUpt1WFl%2FVTHP7ejjIS33WOC6Ig79OPtDLaqz0%2BIzaPwNksduJiYpez8RNIYlWgXVIxkGYBKyLLp5lmmjMKFAScKGmxjM3u4%2FQHqmPYvyE42kvO20D81YECOOnUWVS7cEHki7kVpcEeCjJj22gSaswVL6IRcH5fJiXqD2VzKs8CiGdOOcUUYle56jbQQF11HraxN%2BJC6s4D4itO8tElV9EFRACde7vX5EaqHs4hpBvDzrkWtv9btbwVIRvPrxZI6wr4PaEQU1xAdcy8pdUAHz6pHa1L%2BxtSTSKTWKee3%2BIYz6HcOUOpXwOMK%2FNhZn17pyj%2BV7fdzeVzzGZnfqsiwNFowKDqhrLg%2BzJnKNTftxMJT6874GOqUBXyBBEbmJG3VvXPxQCaDZTSnIj%2B4c1UNte9d78y2vpSAp%2Fk4aKjjtwRfaAYTAnMHypbNQAtCnlfjLZIxLyDWZkDV%2Bulz47%2BJ1mXlbsIiKcbx7BEBmRN%2BTo2H90%2FURhtTxDEvsCS7WTMuN%2FjPa9kAwfdSXq2IX1MHf%2FXfB%2BkjfwTqDLmN66J3c6lRYhqPiaxwr4Hm9WzDpvZoMM9%2BPSvzQaUzmmcBT&X-Amz-Signature=efa5ab2f4b584c4a58447347cde1b8063fa7c20dbeb8755d89dc46a5ba91e3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NJHAVW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD3fFGpKO2gm64Ygfk7dPY0vY1tc2NWf%2FQqBfKyroh8sgIgPeCciogGPGaWlif6n2NORmYIJWR5wruzMrvoDvigWEQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZHwCiyaH0FJYruyrcAyQckmJMzxoRsPKxrVNlIkm3NW08tV4oxnRQ%2BykErRtypBIc1KlZ4plW1JuXEbn6PDzK6eCCi%2FLXS%2FXHXAXuRz2FPIS10hRUBnveR%2FP3g9JocjHLMO5RHf9tswc4Y2sVthRoRVEain%2BJCyfTW16oF8AnB3sAeP6T8l0ybMAUrR8L%2BNm4kMkDAm3S9h1H2H8jE5kxrVFpTTVF29pEKV74oEWMLdIigSULsEtrediDEe9LnXCJX5JRPmSqm3z4bDrcoHmgSJw%2FM5C9yUD9kaUWUpt1WFl%2FVTHP7ejjIS33WOC6Ig79OPtDLaqz0%2BIzaPwNksduJiYpez8RNIYlWgXVIxkGYBKyLLp5lmmjMKFAScKGmxjM3u4%2FQHqmPYvyE42kvO20D81YECOOnUWVS7cEHki7kVpcEeCjJj22gSaswVL6IRcH5fJiXqD2VzKs8CiGdOOcUUYle56jbQQF11HraxN%2BJC6s4D4itO8tElV9EFRACde7vX5EaqHs4hpBvDzrkWtv9btbwVIRvPrxZI6wr4PaEQU1xAdcy8pdUAHz6pHa1L%2BxtSTSKTWKee3%2BIYz6HcOUOpXwOMK%2FNhZn17pyj%2BV7fdzeVzzGZnfqsiwNFowKDqhrLg%2BzJnKNTftxMJT6874GOqUBXyBBEbmJG3VvXPxQCaDZTSnIj%2B4c1UNte9d78y2vpSAp%2Fk4aKjjtwRfaAYTAnMHypbNQAtCnlfjLZIxLyDWZkDV%2Bulz47%2BJ1mXlbsIiKcbx7BEBmRN%2BTo2H90%2FURhtTxDEvsCS7WTMuN%2FjPa9kAwfdSXq2IX1MHf%2FXfB%2BkjfwTqDLmN66J3c6lRYhqPiaxwr4Hm9WzDpvZoMM9%2BPSvzQaUzmmcBT&X-Amz-Signature=8a033f20488d1dd19977be56b79aa31bafae6120a96ebcc011cdbff065362dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NJHAVW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD3fFGpKO2gm64Ygfk7dPY0vY1tc2NWf%2FQqBfKyroh8sgIgPeCciogGPGaWlif6n2NORmYIJWR5wruzMrvoDvigWEQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCZHwCiyaH0FJYruyrcAyQckmJMzxoRsPKxrVNlIkm3NW08tV4oxnRQ%2BykErRtypBIc1KlZ4plW1JuXEbn6PDzK6eCCi%2FLXS%2FXHXAXuRz2FPIS10hRUBnveR%2FP3g9JocjHLMO5RHf9tswc4Y2sVthRoRVEain%2BJCyfTW16oF8AnB3sAeP6T8l0ybMAUrR8L%2BNm4kMkDAm3S9h1H2H8jE5kxrVFpTTVF29pEKV74oEWMLdIigSULsEtrediDEe9LnXCJX5JRPmSqm3z4bDrcoHmgSJw%2FM5C9yUD9kaUWUpt1WFl%2FVTHP7ejjIS33WOC6Ig79OPtDLaqz0%2BIzaPwNksduJiYpez8RNIYlWgXVIxkGYBKyLLp5lmmjMKFAScKGmxjM3u4%2FQHqmPYvyE42kvO20D81YECOOnUWVS7cEHki7kVpcEeCjJj22gSaswVL6IRcH5fJiXqD2VzKs8CiGdOOcUUYle56jbQQF11HraxN%2BJC6s4D4itO8tElV9EFRACde7vX5EaqHs4hpBvDzrkWtv9btbwVIRvPrxZI6wr4PaEQU1xAdcy8pdUAHz6pHa1L%2BxtSTSKTWKee3%2BIYz6HcOUOpXwOMK%2FNhZn17pyj%2BV7fdzeVzzGZnfqsiwNFowKDqhrLg%2BzJnKNTftxMJT6874GOqUBXyBBEbmJG3VvXPxQCaDZTSnIj%2B4c1UNte9d78y2vpSAp%2Fk4aKjjtwRfaAYTAnMHypbNQAtCnlfjLZIxLyDWZkDV%2Bulz47%2BJ1mXlbsIiKcbx7BEBmRN%2BTo2H90%2FURhtTxDEvsCS7WTMuN%2FjPa9kAwfdSXq2IX1MHf%2FXfB%2BkjfwTqDLmN66J3c6lRYhqPiaxwr4Hm9WzDpvZoMM9%2BPSvzQaUzmmcBT&X-Amz-Signature=c5ae7a2b40b2c835c8af78e56cec1c3bd26300da78b7c6ff4fba6e05b8d1cd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
