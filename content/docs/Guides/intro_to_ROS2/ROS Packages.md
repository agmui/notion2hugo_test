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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGXDQH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbwmIzE3vcitQWua5aHb8ADX9Vrl8%2Bd5eUH90nqHMadAiEAm2h%2FEIbdH4zqSM%2BbUy%2BwwN46nSuOsawWqaIv8pwoPI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMJghUBWZsAK9EdwiyrcA%2FDV%2B4p0BGRJrZYdiyDcWSPkXAsW%2B8ULbI54i%2B%2Fn67hR8ZYsRY99cCNrKKshEjzxtMDpZPXZQTxUltpvVSs%2FFiW0KTRP%2BexCba4Q2yXPQHTtz3Boue07QRE0H1HFACNxQ2ItMBE%2BDJjrEVfMg9z5UHB6ci9itd0qHrKaVPssf7TzFDB%2B9zFa1dKcpRvO6JExBCDgx3RyNhNDbKNX3zvo8%2FrjNSS454Lhg9EWRq52LT4kcNUU%2FLocJr2hW6XldxE3WbxAh3GIWBho7aEXn0BUleEIRK%2BYTs%2FM3TlH4WSltGlmoyHTtZwFE3SrYrrgAteKONeF1K%2BJ4Xxb8BpFIPvxKvzsYkXHI6AXR6Yfubq%2F4M1mNx7B%2FngztwyReWhlBcPqq9tR%2F7gZVsgTmcbioIHHJbGex86TTxn8TpYQWCpqGCCFcmoc541PRcmsa89SnhGId2rMmSDm4Z4MfK4DrErXyE9OJLq2j3%2FR3HcaEJmLSyOuUfyDwm8jEAb8speNwijWEAcuq8pAXtkCaIMQ7wkieyUuDxVMvHsuISjZad4hmVSKvd1nM806VKgaFxMXe5Q4QFhopEBjRZIAwCM1NTDK%2FrBpsflOva54FxdTOTvKoPhbJ8QIYmFEMlzSYj0VMJeY2sEGOqUBDyQXHJoZ5Td8GHExQNwAALoAmbYDBeFUTbnXbwGIdankZWZJxnnM7q1IXGVIoF0ppEuR08JhePZ6S5rBenvtBqWn4iF2piWAqdP14clHzrHqiJFocYJuorrpYrsEvK3oWAis7anjE9idQJ%2BP0HaTYCR4e3jJ320WzyaEZ1cUjJdhUITGcHyqwR1l%2B5JpVWvsZ5AZxLlkgDSly5cka6p0QbxJf07a&X-Amz-Signature=50b198de3745146b3dc602248d8d1b874ba45375459ee52cec80a2bf1034e198&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGXDQH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbwmIzE3vcitQWua5aHb8ADX9Vrl8%2Bd5eUH90nqHMadAiEAm2h%2FEIbdH4zqSM%2BbUy%2BwwN46nSuOsawWqaIv8pwoPI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMJghUBWZsAK9EdwiyrcA%2FDV%2B4p0BGRJrZYdiyDcWSPkXAsW%2B8ULbI54i%2B%2Fn67hR8ZYsRY99cCNrKKshEjzxtMDpZPXZQTxUltpvVSs%2FFiW0KTRP%2BexCba4Q2yXPQHTtz3Boue07QRE0H1HFACNxQ2ItMBE%2BDJjrEVfMg9z5UHB6ci9itd0qHrKaVPssf7TzFDB%2B9zFa1dKcpRvO6JExBCDgx3RyNhNDbKNX3zvo8%2FrjNSS454Lhg9EWRq52LT4kcNUU%2FLocJr2hW6XldxE3WbxAh3GIWBho7aEXn0BUleEIRK%2BYTs%2FM3TlH4WSltGlmoyHTtZwFE3SrYrrgAteKONeF1K%2BJ4Xxb8BpFIPvxKvzsYkXHI6AXR6Yfubq%2F4M1mNx7B%2FngztwyReWhlBcPqq9tR%2F7gZVsgTmcbioIHHJbGex86TTxn8TpYQWCpqGCCFcmoc541PRcmsa89SnhGId2rMmSDm4Z4MfK4DrErXyE9OJLq2j3%2FR3HcaEJmLSyOuUfyDwm8jEAb8speNwijWEAcuq8pAXtkCaIMQ7wkieyUuDxVMvHsuISjZad4hmVSKvd1nM806VKgaFxMXe5Q4QFhopEBjRZIAwCM1NTDK%2FrBpsflOva54FxdTOTvKoPhbJ8QIYmFEMlzSYj0VMJeY2sEGOqUBDyQXHJoZ5Td8GHExQNwAALoAmbYDBeFUTbnXbwGIdankZWZJxnnM7q1IXGVIoF0ppEuR08JhePZ6S5rBenvtBqWn4iF2piWAqdP14clHzrHqiJFocYJuorrpYrsEvK3oWAis7anjE9idQJ%2BP0HaTYCR4e3jJ320WzyaEZ1cUjJdhUITGcHyqwR1l%2B5JpVWvsZ5AZxLlkgDSly5cka6p0QbxJf07a&X-Amz-Signature=d722b422b6086fcd7dea146407874f1085a98d88e96340dc90568dd999ce9aef&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGXDQH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbwmIzE3vcitQWua5aHb8ADX9Vrl8%2Bd5eUH90nqHMadAiEAm2h%2FEIbdH4zqSM%2BbUy%2BwwN46nSuOsawWqaIv8pwoPI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMJghUBWZsAK9EdwiyrcA%2FDV%2B4p0BGRJrZYdiyDcWSPkXAsW%2B8ULbI54i%2B%2Fn67hR8ZYsRY99cCNrKKshEjzxtMDpZPXZQTxUltpvVSs%2FFiW0KTRP%2BexCba4Q2yXPQHTtz3Boue07QRE0H1HFACNxQ2ItMBE%2BDJjrEVfMg9z5UHB6ci9itd0qHrKaVPssf7TzFDB%2B9zFa1dKcpRvO6JExBCDgx3RyNhNDbKNX3zvo8%2FrjNSS454Lhg9EWRq52LT4kcNUU%2FLocJr2hW6XldxE3WbxAh3GIWBho7aEXn0BUleEIRK%2BYTs%2FM3TlH4WSltGlmoyHTtZwFE3SrYrrgAteKONeF1K%2BJ4Xxb8BpFIPvxKvzsYkXHI6AXR6Yfubq%2F4M1mNx7B%2FngztwyReWhlBcPqq9tR%2F7gZVsgTmcbioIHHJbGex86TTxn8TpYQWCpqGCCFcmoc541PRcmsa89SnhGId2rMmSDm4Z4MfK4DrErXyE9OJLq2j3%2FR3HcaEJmLSyOuUfyDwm8jEAb8speNwijWEAcuq8pAXtkCaIMQ7wkieyUuDxVMvHsuISjZad4hmVSKvd1nM806VKgaFxMXe5Q4QFhopEBjRZIAwCM1NTDK%2FrBpsflOva54FxdTOTvKoPhbJ8QIYmFEMlzSYj0VMJeY2sEGOqUBDyQXHJoZ5Td8GHExQNwAALoAmbYDBeFUTbnXbwGIdankZWZJxnnM7q1IXGVIoF0ppEuR08JhePZ6S5rBenvtBqWn4iF2piWAqdP14clHzrHqiJFocYJuorrpYrsEvK3oWAis7anjE9idQJ%2BP0HaTYCR4e3jJ320WzyaEZ1cUjJdhUITGcHyqwR1l%2B5JpVWvsZ5AZxLlkgDSly5cka6p0QbxJf07a&X-Amz-Signature=b769f35ec78ff76735df4fd182e2670312b7a9e479f18450662d51c492643ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGXDQH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbwmIzE3vcitQWua5aHb8ADX9Vrl8%2Bd5eUH90nqHMadAiEAm2h%2FEIbdH4zqSM%2BbUy%2BwwN46nSuOsawWqaIv8pwoPI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMJghUBWZsAK9EdwiyrcA%2FDV%2B4p0BGRJrZYdiyDcWSPkXAsW%2B8ULbI54i%2B%2Fn67hR8ZYsRY99cCNrKKshEjzxtMDpZPXZQTxUltpvVSs%2FFiW0KTRP%2BexCba4Q2yXPQHTtz3Boue07QRE0H1HFACNxQ2ItMBE%2BDJjrEVfMg9z5UHB6ci9itd0qHrKaVPssf7TzFDB%2B9zFa1dKcpRvO6JExBCDgx3RyNhNDbKNX3zvo8%2FrjNSS454Lhg9EWRq52LT4kcNUU%2FLocJr2hW6XldxE3WbxAh3GIWBho7aEXn0BUleEIRK%2BYTs%2FM3TlH4WSltGlmoyHTtZwFE3SrYrrgAteKONeF1K%2BJ4Xxb8BpFIPvxKvzsYkXHI6AXR6Yfubq%2F4M1mNx7B%2FngztwyReWhlBcPqq9tR%2F7gZVsgTmcbioIHHJbGex86TTxn8TpYQWCpqGCCFcmoc541PRcmsa89SnhGId2rMmSDm4Z4MfK4DrErXyE9OJLq2j3%2FR3HcaEJmLSyOuUfyDwm8jEAb8speNwijWEAcuq8pAXtkCaIMQ7wkieyUuDxVMvHsuISjZad4hmVSKvd1nM806VKgaFxMXe5Q4QFhopEBjRZIAwCM1NTDK%2FrBpsflOva54FxdTOTvKoPhbJ8QIYmFEMlzSYj0VMJeY2sEGOqUBDyQXHJoZ5Td8GHExQNwAALoAmbYDBeFUTbnXbwGIdankZWZJxnnM7q1IXGVIoF0ppEuR08JhePZ6S5rBenvtBqWn4iF2piWAqdP14clHzrHqiJFocYJuorrpYrsEvK3oWAis7anjE9idQJ%2BP0HaTYCR4e3jJ320WzyaEZ1cUjJdhUITGcHyqwR1l%2B5JpVWvsZ5AZxLlkgDSly5cka6p0QbxJf07a&X-Amz-Signature=1ba4b6c112fb35acb2f6db0d37ccafe54b5bd2d4d2f082ae0055f41fe80846b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGXDQH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbwmIzE3vcitQWua5aHb8ADX9Vrl8%2Bd5eUH90nqHMadAiEAm2h%2FEIbdH4zqSM%2BbUy%2BwwN46nSuOsawWqaIv8pwoPI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMJghUBWZsAK9EdwiyrcA%2FDV%2B4p0BGRJrZYdiyDcWSPkXAsW%2B8ULbI54i%2B%2Fn67hR8ZYsRY99cCNrKKshEjzxtMDpZPXZQTxUltpvVSs%2FFiW0KTRP%2BexCba4Q2yXPQHTtz3Boue07QRE0H1HFACNxQ2ItMBE%2BDJjrEVfMg9z5UHB6ci9itd0qHrKaVPssf7TzFDB%2B9zFa1dKcpRvO6JExBCDgx3RyNhNDbKNX3zvo8%2FrjNSS454Lhg9EWRq52LT4kcNUU%2FLocJr2hW6XldxE3WbxAh3GIWBho7aEXn0BUleEIRK%2BYTs%2FM3TlH4WSltGlmoyHTtZwFE3SrYrrgAteKONeF1K%2BJ4Xxb8BpFIPvxKvzsYkXHI6AXR6Yfubq%2F4M1mNx7B%2FngztwyReWhlBcPqq9tR%2F7gZVsgTmcbioIHHJbGex86TTxn8TpYQWCpqGCCFcmoc541PRcmsa89SnhGId2rMmSDm4Z4MfK4DrErXyE9OJLq2j3%2FR3HcaEJmLSyOuUfyDwm8jEAb8speNwijWEAcuq8pAXtkCaIMQ7wkieyUuDxVMvHsuISjZad4hmVSKvd1nM806VKgaFxMXe5Q4QFhopEBjRZIAwCM1NTDK%2FrBpsflOva54FxdTOTvKoPhbJ8QIYmFEMlzSYj0VMJeY2sEGOqUBDyQXHJoZ5Td8GHExQNwAALoAmbYDBeFUTbnXbwGIdankZWZJxnnM7q1IXGVIoF0ppEuR08JhePZ6S5rBenvtBqWn4iF2piWAqdP14clHzrHqiJFocYJuorrpYrsEvK3oWAis7anjE9idQJ%2BP0HaTYCR4e3jJ320WzyaEZ1cUjJdhUITGcHyqwR1l%2B5JpVWvsZ5AZxLlkgDSly5cka6p0QbxJf07a&X-Amz-Signature=afe8b90460aa3f5ea75e78b619e8dd06becfd415691745667d267c2189b173a1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGXDQH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbwmIzE3vcitQWua5aHb8ADX9Vrl8%2Bd5eUH90nqHMadAiEAm2h%2FEIbdH4zqSM%2BbUy%2BwwN46nSuOsawWqaIv8pwoPI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMJghUBWZsAK9EdwiyrcA%2FDV%2B4p0BGRJrZYdiyDcWSPkXAsW%2B8ULbI54i%2B%2Fn67hR8ZYsRY99cCNrKKshEjzxtMDpZPXZQTxUltpvVSs%2FFiW0KTRP%2BexCba4Q2yXPQHTtz3Boue07QRE0H1HFACNxQ2ItMBE%2BDJjrEVfMg9z5UHB6ci9itd0qHrKaVPssf7TzFDB%2B9zFa1dKcpRvO6JExBCDgx3RyNhNDbKNX3zvo8%2FrjNSS454Lhg9EWRq52LT4kcNUU%2FLocJr2hW6XldxE3WbxAh3GIWBho7aEXn0BUleEIRK%2BYTs%2FM3TlH4WSltGlmoyHTtZwFE3SrYrrgAteKONeF1K%2BJ4Xxb8BpFIPvxKvzsYkXHI6AXR6Yfubq%2F4M1mNx7B%2FngztwyReWhlBcPqq9tR%2F7gZVsgTmcbioIHHJbGex86TTxn8TpYQWCpqGCCFcmoc541PRcmsa89SnhGId2rMmSDm4Z4MfK4DrErXyE9OJLq2j3%2FR3HcaEJmLSyOuUfyDwm8jEAb8speNwijWEAcuq8pAXtkCaIMQ7wkieyUuDxVMvHsuISjZad4hmVSKvd1nM806VKgaFxMXe5Q4QFhopEBjRZIAwCM1NTDK%2FrBpsflOva54FxdTOTvKoPhbJ8QIYmFEMlzSYj0VMJeY2sEGOqUBDyQXHJoZ5Td8GHExQNwAALoAmbYDBeFUTbnXbwGIdankZWZJxnnM7q1IXGVIoF0ppEuR08JhePZ6S5rBenvtBqWn4iF2piWAqdP14clHzrHqiJFocYJuorrpYrsEvK3oWAis7anjE9idQJ%2BP0HaTYCR4e3jJ320WzyaEZ1cUjJdhUITGcHyqwR1l%2B5JpVWvsZ5AZxLlkgDSly5cka6p0QbxJf07a&X-Amz-Signature=b5ba8bcffa1d718c1928692562edb269ccbd27de29487b204ec255f1414ebcb3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGXDQH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbwmIzE3vcitQWua5aHb8ADX9Vrl8%2Bd5eUH90nqHMadAiEAm2h%2FEIbdH4zqSM%2BbUy%2BwwN46nSuOsawWqaIv8pwoPI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMJghUBWZsAK9EdwiyrcA%2FDV%2B4p0BGRJrZYdiyDcWSPkXAsW%2B8ULbI54i%2B%2Fn67hR8ZYsRY99cCNrKKshEjzxtMDpZPXZQTxUltpvVSs%2FFiW0KTRP%2BexCba4Q2yXPQHTtz3Boue07QRE0H1HFACNxQ2ItMBE%2BDJjrEVfMg9z5UHB6ci9itd0qHrKaVPssf7TzFDB%2B9zFa1dKcpRvO6JExBCDgx3RyNhNDbKNX3zvo8%2FrjNSS454Lhg9EWRq52LT4kcNUU%2FLocJr2hW6XldxE3WbxAh3GIWBho7aEXn0BUleEIRK%2BYTs%2FM3TlH4WSltGlmoyHTtZwFE3SrYrrgAteKONeF1K%2BJ4Xxb8BpFIPvxKvzsYkXHI6AXR6Yfubq%2F4M1mNx7B%2FngztwyReWhlBcPqq9tR%2F7gZVsgTmcbioIHHJbGex86TTxn8TpYQWCpqGCCFcmoc541PRcmsa89SnhGId2rMmSDm4Z4MfK4DrErXyE9OJLq2j3%2FR3HcaEJmLSyOuUfyDwm8jEAb8speNwijWEAcuq8pAXtkCaIMQ7wkieyUuDxVMvHsuISjZad4hmVSKvd1nM806VKgaFxMXe5Q4QFhopEBjRZIAwCM1NTDK%2FrBpsflOva54FxdTOTvKoPhbJ8QIYmFEMlzSYj0VMJeY2sEGOqUBDyQXHJoZ5Td8GHExQNwAALoAmbYDBeFUTbnXbwGIdankZWZJxnnM7q1IXGVIoF0ppEuR08JhePZ6S5rBenvtBqWn4iF2piWAqdP14clHzrHqiJFocYJuorrpYrsEvK3oWAis7anjE9idQJ%2BP0HaTYCR4e3jJ320WzyaEZ1cUjJdhUITGcHyqwR1l%2B5JpVWvsZ5AZxLlkgDSly5cka6p0QbxJf07a&X-Amz-Signature=b135596737d7edf16e6aeb9c40446237b9d28e3c24757e3f0ade27da2892124a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
