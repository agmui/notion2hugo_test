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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUTLCQX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqZJP%2BuMxH9xATdPTc0bjIWDedsCnLFFwG%2BCunHMGRbAiEApFN1pRnT%2FDwPKIk5S7eyjQPEhIZYEbhhC5cjTHYWUMcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFpx9weE79nxyO%2BjSrcA9HRqNgJ1dIVmaqmO2rdvpgnEYYevgv5UbuTQXaznzOW%2Bhu9ux%2B1G%2BYyhoTLi3rLr0oBVSFk8M6qQaKEWLo39DC%2BXfn18wK0qTichCI39N4nOl2azCuST%2F9HVLRi4CGh5iEb2k9cjoY9uYRO%2BFDv0T8V5qbwH6Ed8nbCtR0NLbEVhnOH4Q1IFWCHVk0h%2B3tWyJ64GqaopZVhGygs1dWBpkHX3F6uN0gYBweaXnXaW4xATkGcewOnQvfLe4HXL6W0TGSt5Iv8El6Hq4T%2BXF%2Ba%2BBD9HY0bNy%2Bn7kmFxCmAUg3QY4%2FrGIY%2Fczu3XI7e5by5Fe4hlRsLwXLMI20ckdgDnFYoP2Cu%2BzdYA6JXdrU034zfxGYM5ZQT5QHeyInBTx%2FqRQO0CwK%2FWlB2%2BJJq9l0oz%2B9OQO%2Bml10d8AHGmWoEuiJCeoNeg7H0XUHVQqNWYZD6kfIF6HkqFnz1%2FdjW0RTnjUuFSp%2Fz48%2F3uM0K427Bt3ORWOXGAUOoi9KZgVV%2Fe%2BGdef29TAMbuQ64gG6pKQNTq%2BHjOM95I36xo0gedo38keGUWyKII45%2F98oD0SDCy8KhsjOAS9XTfiPkFVYi1w3zzjvFTqYet1uNFws8YoabQL4EUciCb6IgoYH6Wv9jMLuzzsIGOqUBHLM4BIwn%2FUs0xr%2FPYMXkMe7FjrAqQYmBay5Uv6DSZvxEHXaEde7mU%2FVY2ZKMW1jhtG5rPHULSM16X%2BrQpB9vquccfZtlDicIKdSP70S6rS%2FrKrkkTgVsOmMvp9ZbZcEKmK0YDbG0fgyGTPTRavcJqGbIgkmU8WAUiZ65s6nAwCSGrKdCRqqalt1rbkYRRR1a1CyyekcJnQ13qZo9%2FL%2Fi6MxW4q75&X-Amz-Signature=fea43640df0be5d7db18663bddc34800bfb9ea8f3da393ff514092dd1b7937ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUTLCQX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqZJP%2BuMxH9xATdPTc0bjIWDedsCnLFFwG%2BCunHMGRbAiEApFN1pRnT%2FDwPKIk5S7eyjQPEhIZYEbhhC5cjTHYWUMcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFpx9weE79nxyO%2BjSrcA9HRqNgJ1dIVmaqmO2rdvpgnEYYevgv5UbuTQXaznzOW%2Bhu9ux%2B1G%2BYyhoTLi3rLr0oBVSFk8M6qQaKEWLo39DC%2BXfn18wK0qTichCI39N4nOl2azCuST%2F9HVLRi4CGh5iEb2k9cjoY9uYRO%2BFDv0T8V5qbwH6Ed8nbCtR0NLbEVhnOH4Q1IFWCHVk0h%2B3tWyJ64GqaopZVhGygs1dWBpkHX3F6uN0gYBweaXnXaW4xATkGcewOnQvfLe4HXL6W0TGSt5Iv8El6Hq4T%2BXF%2Ba%2BBD9HY0bNy%2Bn7kmFxCmAUg3QY4%2FrGIY%2Fczu3XI7e5by5Fe4hlRsLwXLMI20ckdgDnFYoP2Cu%2BzdYA6JXdrU034zfxGYM5ZQT5QHeyInBTx%2FqRQO0CwK%2FWlB2%2BJJq9l0oz%2B9OQO%2Bml10d8AHGmWoEuiJCeoNeg7H0XUHVQqNWYZD6kfIF6HkqFnz1%2FdjW0RTnjUuFSp%2Fz48%2F3uM0K427Bt3ORWOXGAUOoi9KZgVV%2Fe%2BGdef29TAMbuQ64gG6pKQNTq%2BHjOM95I36xo0gedo38keGUWyKII45%2F98oD0SDCy8KhsjOAS9XTfiPkFVYi1w3zzjvFTqYet1uNFws8YoabQL4EUciCb6IgoYH6Wv9jMLuzzsIGOqUBHLM4BIwn%2FUs0xr%2FPYMXkMe7FjrAqQYmBay5Uv6DSZvxEHXaEde7mU%2FVY2ZKMW1jhtG5rPHULSM16X%2BrQpB9vquccfZtlDicIKdSP70S6rS%2FrKrkkTgVsOmMvp9ZbZcEKmK0YDbG0fgyGTPTRavcJqGbIgkmU8WAUiZ65s6nAwCSGrKdCRqqalt1rbkYRRR1a1CyyekcJnQ13qZo9%2FL%2Fi6MxW4q75&X-Amz-Signature=853fcec261e6f6afc9fdbbbd60de273789adb3312be5a40bf48976c538c303a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUTLCQX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqZJP%2BuMxH9xATdPTc0bjIWDedsCnLFFwG%2BCunHMGRbAiEApFN1pRnT%2FDwPKIk5S7eyjQPEhIZYEbhhC5cjTHYWUMcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFpx9weE79nxyO%2BjSrcA9HRqNgJ1dIVmaqmO2rdvpgnEYYevgv5UbuTQXaznzOW%2Bhu9ux%2B1G%2BYyhoTLi3rLr0oBVSFk8M6qQaKEWLo39DC%2BXfn18wK0qTichCI39N4nOl2azCuST%2F9HVLRi4CGh5iEb2k9cjoY9uYRO%2BFDv0T8V5qbwH6Ed8nbCtR0NLbEVhnOH4Q1IFWCHVk0h%2B3tWyJ64GqaopZVhGygs1dWBpkHX3F6uN0gYBweaXnXaW4xATkGcewOnQvfLe4HXL6W0TGSt5Iv8El6Hq4T%2BXF%2Ba%2BBD9HY0bNy%2Bn7kmFxCmAUg3QY4%2FrGIY%2Fczu3XI7e5by5Fe4hlRsLwXLMI20ckdgDnFYoP2Cu%2BzdYA6JXdrU034zfxGYM5ZQT5QHeyInBTx%2FqRQO0CwK%2FWlB2%2BJJq9l0oz%2B9OQO%2Bml10d8AHGmWoEuiJCeoNeg7H0XUHVQqNWYZD6kfIF6HkqFnz1%2FdjW0RTnjUuFSp%2Fz48%2F3uM0K427Bt3ORWOXGAUOoi9KZgVV%2Fe%2BGdef29TAMbuQ64gG6pKQNTq%2BHjOM95I36xo0gedo38keGUWyKII45%2F98oD0SDCy8KhsjOAS9XTfiPkFVYi1w3zzjvFTqYet1uNFws8YoabQL4EUciCb6IgoYH6Wv9jMLuzzsIGOqUBHLM4BIwn%2FUs0xr%2FPYMXkMe7FjrAqQYmBay5Uv6DSZvxEHXaEde7mU%2FVY2ZKMW1jhtG5rPHULSM16X%2BrQpB9vquccfZtlDicIKdSP70S6rS%2FrKrkkTgVsOmMvp9ZbZcEKmK0YDbG0fgyGTPTRavcJqGbIgkmU8WAUiZ65s6nAwCSGrKdCRqqalt1rbkYRRR1a1CyyekcJnQ13qZo9%2FL%2Fi6MxW4q75&X-Amz-Signature=5c6263a57207a7fe031c32f0a86622cd8bb69eb609b3c2b7e401aa495db4b522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUTLCQX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqZJP%2BuMxH9xATdPTc0bjIWDedsCnLFFwG%2BCunHMGRbAiEApFN1pRnT%2FDwPKIk5S7eyjQPEhIZYEbhhC5cjTHYWUMcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFpx9weE79nxyO%2BjSrcA9HRqNgJ1dIVmaqmO2rdvpgnEYYevgv5UbuTQXaznzOW%2Bhu9ux%2B1G%2BYyhoTLi3rLr0oBVSFk8M6qQaKEWLo39DC%2BXfn18wK0qTichCI39N4nOl2azCuST%2F9HVLRi4CGh5iEb2k9cjoY9uYRO%2BFDv0T8V5qbwH6Ed8nbCtR0NLbEVhnOH4Q1IFWCHVk0h%2B3tWyJ64GqaopZVhGygs1dWBpkHX3F6uN0gYBweaXnXaW4xATkGcewOnQvfLe4HXL6W0TGSt5Iv8El6Hq4T%2BXF%2Ba%2BBD9HY0bNy%2Bn7kmFxCmAUg3QY4%2FrGIY%2Fczu3XI7e5by5Fe4hlRsLwXLMI20ckdgDnFYoP2Cu%2BzdYA6JXdrU034zfxGYM5ZQT5QHeyInBTx%2FqRQO0CwK%2FWlB2%2BJJq9l0oz%2B9OQO%2Bml10d8AHGmWoEuiJCeoNeg7H0XUHVQqNWYZD6kfIF6HkqFnz1%2FdjW0RTnjUuFSp%2Fz48%2F3uM0K427Bt3ORWOXGAUOoi9KZgVV%2Fe%2BGdef29TAMbuQ64gG6pKQNTq%2BHjOM95I36xo0gedo38keGUWyKII45%2F98oD0SDCy8KhsjOAS9XTfiPkFVYi1w3zzjvFTqYet1uNFws8YoabQL4EUciCb6IgoYH6Wv9jMLuzzsIGOqUBHLM4BIwn%2FUs0xr%2FPYMXkMe7FjrAqQYmBay5Uv6DSZvxEHXaEde7mU%2FVY2ZKMW1jhtG5rPHULSM16X%2BrQpB9vquccfZtlDicIKdSP70S6rS%2FrKrkkTgVsOmMvp9ZbZcEKmK0YDbG0fgyGTPTRavcJqGbIgkmU8WAUiZ65s6nAwCSGrKdCRqqalt1rbkYRRR1a1CyyekcJnQ13qZo9%2FL%2Fi6MxW4q75&X-Amz-Signature=294b80129e20160c3ffcc338b5fd7ebb3486918ec4adcebe978069c6181ba0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUTLCQX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqZJP%2BuMxH9xATdPTc0bjIWDedsCnLFFwG%2BCunHMGRbAiEApFN1pRnT%2FDwPKIk5S7eyjQPEhIZYEbhhC5cjTHYWUMcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFpx9weE79nxyO%2BjSrcA9HRqNgJ1dIVmaqmO2rdvpgnEYYevgv5UbuTQXaznzOW%2Bhu9ux%2B1G%2BYyhoTLi3rLr0oBVSFk8M6qQaKEWLo39DC%2BXfn18wK0qTichCI39N4nOl2azCuST%2F9HVLRi4CGh5iEb2k9cjoY9uYRO%2BFDv0T8V5qbwH6Ed8nbCtR0NLbEVhnOH4Q1IFWCHVk0h%2B3tWyJ64GqaopZVhGygs1dWBpkHX3F6uN0gYBweaXnXaW4xATkGcewOnQvfLe4HXL6W0TGSt5Iv8El6Hq4T%2BXF%2Ba%2BBD9HY0bNy%2Bn7kmFxCmAUg3QY4%2FrGIY%2Fczu3XI7e5by5Fe4hlRsLwXLMI20ckdgDnFYoP2Cu%2BzdYA6JXdrU034zfxGYM5ZQT5QHeyInBTx%2FqRQO0CwK%2FWlB2%2BJJq9l0oz%2B9OQO%2Bml10d8AHGmWoEuiJCeoNeg7H0XUHVQqNWYZD6kfIF6HkqFnz1%2FdjW0RTnjUuFSp%2Fz48%2F3uM0K427Bt3ORWOXGAUOoi9KZgVV%2Fe%2BGdef29TAMbuQ64gG6pKQNTq%2BHjOM95I36xo0gedo38keGUWyKII45%2F98oD0SDCy8KhsjOAS9XTfiPkFVYi1w3zzjvFTqYet1uNFws8YoabQL4EUciCb6IgoYH6Wv9jMLuzzsIGOqUBHLM4BIwn%2FUs0xr%2FPYMXkMe7FjrAqQYmBay5Uv6DSZvxEHXaEde7mU%2FVY2ZKMW1jhtG5rPHULSM16X%2BrQpB9vquccfZtlDicIKdSP70S6rS%2FrKrkkTgVsOmMvp9ZbZcEKmK0YDbG0fgyGTPTRavcJqGbIgkmU8WAUiZ65s6nAwCSGrKdCRqqalt1rbkYRRR1a1CyyekcJnQ13qZo9%2FL%2Fi6MxW4q75&X-Amz-Signature=701dbf58dfca28865cc5b29a6f5b4803a722a05816048b230f5346d967bbd37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUTLCQX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqZJP%2BuMxH9xATdPTc0bjIWDedsCnLFFwG%2BCunHMGRbAiEApFN1pRnT%2FDwPKIk5S7eyjQPEhIZYEbhhC5cjTHYWUMcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFpx9weE79nxyO%2BjSrcA9HRqNgJ1dIVmaqmO2rdvpgnEYYevgv5UbuTQXaznzOW%2Bhu9ux%2B1G%2BYyhoTLi3rLr0oBVSFk8M6qQaKEWLo39DC%2BXfn18wK0qTichCI39N4nOl2azCuST%2F9HVLRi4CGh5iEb2k9cjoY9uYRO%2BFDv0T8V5qbwH6Ed8nbCtR0NLbEVhnOH4Q1IFWCHVk0h%2B3tWyJ64GqaopZVhGygs1dWBpkHX3F6uN0gYBweaXnXaW4xATkGcewOnQvfLe4HXL6W0TGSt5Iv8El6Hq4T%2BXF%2Ba%2BBD9HY0bNy%2Bn7kmFxCmAUg3QY4%2FrGIY%2Fczu3XI7e5by5Fe4hlRsLwXLMI20ckdgDnFYoP2Cu%2BzdYA6JXdrU034zfxGYM5ZQT5QHeyInBTx%2FqRQO0CwK%2FWlB2%2BJJq9l0oz%2B9OQO%2Bml10d8AHGmWoEuiJCeoNeg7H0XUHVQqNWYZD6kfIF6HkqFnz1%2FdjW0RTnjUuFSp%2Fz48%2F3uM0K427Bt3ORWOXGAUOoi9KZgVV%2Fe%2BGdef29TAMbuQ64gG6pKQNTq%2BHjOM95I36xo0gedo38keGUWyKII45%2F98oD0SDCy8KhsjOAS9XTfiPkFVYi1w3zzjvFTqYet1uNFws8YoabQL4EUciCb6IgoYH6Wv9jMLuzzsIGOqUBHLM4BIwn%2FUs0xr%2FPYMXkMe7FjrAqQYmBay5Uv6DSZvxEHXaEde7mU%2FVY2ZKMW1jhtG5rPHULSM16X%2BrQpB9vquccfZtlDicIKdSP70S6rS%2FrKrkkTgVsOmMvp9ZbZcEKmK0YDbG0fgyGTPTRavcJqGbIgkmU8WAUiZ65s6nAwCSGrKdCRqqalt1rbkYRRR1a1CyyekcJnQ13qZo9%2FL%2Fi6MxW4q75&X-Amz-Signature=de864a7fd6910558a90c9f6b96962041bf82379177576d6e97c636719cf2d5b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUTLCQX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqZJP%2BuMxH9xATdPTc0bjIWDedsCnLFFwG%2BCunHMGRbAiEApFN1pRnT%2FDwPKIk5S7eyjQPEhIZYEbhhC5cjTHYWUMcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFpx9weE79nxyO%2BjSrcA9HRqNgJ1dIVmaqmO2rdvpgnEYYevgv5UbuTQXaznzOW%2Bhu9ux%2B1G%2BYyhoTLi3rLr0oBVSFk8M6qQaKEWLo39DC%2BXfn18wK0qTichCI39N4nOl2azCuST%2F9HVLRi4CGh5iEb2k9cjoY9uYRO%2BFDv0T8V5qbwH6Ed8nbCtR0NLbEVhnOH4Q1IFWCHVk0h%2B3tWyJ64GqaopZVhGygs1dWBpkHX3F6uN0gYBweaXnXaW4xATkGcewOnQvfLe4HXL6W0TGSt5Iv8El6Hq4T%2BXF%2Ba%2BBD9HY0bNy%2Bn7kmFxCmAUg3QY4%2FrGIY%2Fczu3XI7e5by5Fe4hlRsLwXLMI20ckdgDnFYoP2Cu%2BzdYA6JXdrU034zfxGYM5ZQT5QHeyInBTx%2FqRQO0CwK%2FWlB2%2BJJq9l0oz%2B9OQO%2Bml10d8AHGmWoEuiJCeoNeg7H0XUHVQqNWYZD6kfIF6HkqFnz1%2FdjW0RTnjUuFSp%2Fz48%2F3uM0K427Bt3ORWOXGAUOoi9KZgVV%2Fe%2BGdef29TAMbuQ64gG6pKQNTq%2BHjOM95I36xo0gedo38keGUWyKII45%2F98oD0SDCy8KhsjOAS9XTfiPkFVYi1w3zzjvFTqYet1uNFws8YoabQL4EUciCb6IgoYH6Wv9jMLuzzsIGOqUBHLM4BIwn%2FUs0xr%2FPYMXkMe7FjrAqQYmBay5Uv6DSZvxEHXaEde7mU%2FVY2ZKMW1jhtG5rPHULSM16X%2BrQpB9vquccfZtlDicIKdSP70S6rS%2FrKrkkTgVsOmMvp9ZbZcEKmK0YDbG0fgyGTPTRavcJqGbIgkmU8WAUiZ65s6nAwCSGrKdCRqqalt1rbkYRRR1a1CyyekcJnQ13qZo9%2FL%2Fi6MxW4q75&X-Amz-Signature=4f6482ea31ffde1f1c6b0cd9b56f8b7013f6e10c2d1916e5969027880118ef88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
