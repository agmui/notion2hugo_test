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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLTR47R%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIA3mfezhuBSmzBNsJSRC%2B%2BorGkP6tw3BaRGbr%2Fp6cOE1AiEArggAcwY1DjieGD6KBF73njaccAoT63iCD5Ge8KGe8LIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId8BwxX9HYbY89kRircA2dkX5I1RgAzcjaEjH2VH7sdKhkrqPy0vXARVXrgC6M1%2FV1pcy3BekQdm9vFDU8rrses5AbH63hqC8Np45%2BlqpL4K7VcFW9to28TGgr3DWJPrnptFgItAH%2B0nLhaZMNSuasVIpxfzH2mIdTnqPTwhKIOADZ0dOHRRemUZl%2FeVaoRIoxqCexeIDQgayF%2F4pGBtUHeeTuIIqoVeJLCiYW4S8znyjLBE80vHf2YlqJKrkrYqD2yby4r5y52W6RhhUs0BfIt8Sd%2FYzQO44jkujEnPFnC4ORKxEJT31N56sm%2FxMqw%2FnYmthShJP6zWmb%2FMjBy0zxHFtFBQFwNmYZTL98C1AZa8lCd%2BysDiD9%2FuDOFU08PB0YelhMamo4HsulKhD1kyW9E1mJ6%2FDr3KQD3to5Hemxb6DluwSCQuMByQ5l%2BUyV1OUDXHaDYLUMhZY2c068GAdWS09O%2BrjaYM9s1NznvEkfcT9trDn3W9ECFmKIbfKwUWRSyOZkCxjnkYXc70%2B734tN5QmsrChxIhM7rll2vXbtSr9OunNs4Q3%2Bw9c%2BlrXS7p%2F3hBWVtTrJOqb96peFu0d9wrVNRXPiiGCIX1%2B821tOVT4I2ksXYauq3cM1xTdt8brC9%2FpdBqGAt%2F0bhMIe1s78GOqUB961LUAxsWIqK3870MRn2GZE0%2B7Ll5msHZ4FmLM%2FnBcMVyCIeLuY0l1Cb0TcOorRzDHjXbzTi%2BZ8P%2BCQ1E497wrlUOelENOgUArD2k6VerJoXI0ymfWCflXhvO0%2FCC3XdVP%2FlNMF5mdU0sN2x46AV%2FvWRSByiKRQJzTA2PzqSAgl3xSIiJO9AfBVQDBiEgCD%2Bwt3D8qqIXxKNUHXfsFvso62T%2BZ3m&X-Amz-Signature=de67c73e7f4bf5146928c9d9c257234c5f5db9fa53ba49e436ef93b77c676744&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLTR47R%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIA3mfezhuBSmzBNsJSRC%2B%2BorGkP6tw3BaRGbr%2Fp6cOE1AiEArggAcwY1DjieGD6KBF73njaccAoT63iCD5Ge8KGe8LIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId8BwxX9HYbY89kRircA2dkX5I1RgAzcjaEjH2VH7sdKhkrqPy0vXARVXrgC6M1%2FV1pcy3BekQdm9vFDU8rrses5AbH63hqC8Np45%2BlqpL4K7VcFW9to28TGgr3DWJPrnptFgItAH%2B0nLhaZMNSuasVIpxfzH2mIdTnqPTwhKIOADZ0dOHRRemUZl%2FeVaoRIoxqCexeIDQgayF%2F4pGBtUHeeTuIIqoVeJLCiYW4S8znyjLBE80vHf2YlqJKrkrYqD2yby4r5y52W6RhhUs0BfIt8Sd%2FYzQO44jkujEnPFnC4ORKxEJT31N56sm%2FxMqw%2FnYmthShJP6zWmb%2FMjBy0zxHFtFBQFwNmYZTL98C1AZa8lCd%2BysDiD9%2FuDOFU08PB0YelhMamo4HsulKhD1kyW9E1mJ6%2FDr3KQD3to5Hemxb6DluwSCQuMByQ5l%2BUyV1OUDXHaDYLUMhZY2c068GAdWS09O%2BrjaYM9s1NznvEkfcT9trDn3W9ECFmKIbfKwUWRSyOZkCxjnkYXc70%2B734tN5QmsrChxIhM7rll2vXbtSr9OunNs4Q3%2Bw9c%2BlrXS7p%2F3hBWVtTrJOqb96peFu0d9wrVNRXPiiGCIX1%2B821tOVT4I2ksXYauq3cM1xTdt8brC9%2FpdBqGAt%2F0bhMIe1s78GOqUB961LUAxsWIqK3870MRn2GZE0%2B7Ll5msHZ4FmLM%2FnBcMVyCIeLuY0l1Cb0TcOorRzDHjXbzTi%2BZ8P%2BCQ1E497wrlUOelENOgUArD2k6VerJoXI0ymfWCflXhvO0%2FCC3XdVP%2FlNMF5mdU0sN2x46AV%2FvWRSByiKRQJzTA2PzqSAgl3xSIiJO9AfBVQDBiEgCD%2Bwt3D8qqIXxKNUHXfsFvso62T%2BZ3m&X-Amz-Signature=124bcac5d472247c0374195dbd7b7f493cbdfad60f5f370f50afd7c1ae2f7782&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLTR47R%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIA3mfezhuBSmzBNsJSRC%2B%2BorGkP6tw3BaRGbr%2Fp6cOE1AiEArggAcwY1DjieGD6KBF73njaccAoT63iCD5Ge8KGe8LIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId8BwxX9HYbY89kRircA2dkX5I1RgAzcjaEjH2VH7sdKhkrqPy0vXARVXrgC6M1%2FV1pcy3BekQdm9vFDU8rrses5AbH63hqC8Np45%2BlqpL4K7VcFW9to28TGgr3DWJPrnptFgItAH%2B0nLhaZMNSuasVIpxfzH2mIdTnqPTwhKIOADZ0dOHRRemUZl%2FeVaoRIoxqCexeIDQgayF%2F4pGBtUHeeTuIIqoVeJLCiYW4S8znyjLBE80vHf2YlqJKrkrYqD2yby4r5y52W6RhhUs0BfIt8Sd%2FYzQO44jkujEnPFnC4ORKxEJT31N56sm%2FxMqw%2FnYmthShJP6zWmb%2FMjBy0zxHFtFBQFwNmYZTL98C1AZa8lCd%2BysDiD9%2FuDOFU08PB0YelhMamo4HsulKhD1kyW9E1mJ6%2FDr3KQD3to5Hemxb6DluwSCQuMByQ5l%2BUyV1OUDXHaDYLUMhZY2c068GAdWS09O%2BrjaYM9s1NznvEkfcT9trDn3W9ECFmKIbfKwUWRSyOZkCxjnkYXc70%2B734tN5QmsrChxIhM7rll2vXbtSr9OunNs4Q3%2Bw9c%2BlrXS7p%2F3hBWVtTrJOqb96peFu0d9wrVNRXPiiGCIX1%2B821tOVT4I2ksXYauq3cM1xTdt8brC9%2FpdBqGAt%2F0bhMIe1s78GOqUB961LUAxsWIqK3870MRn2GZE0%2B7Ll5msHZ4FmLM%2FnBcMVyCIeLuY0l1Cb0TcOorRzDHjXbzTi%2BZ8P%2BCQ1E497wrlUOelENOgUArD2k6VerJoXI0ymfWCflXhvO0%2FCC3XdVP%2FlNMF5mdU0sN2x46AV%2FvWRSByiKRQJzTA2PzqSAgl3xSIiJO9AfBVQDBiEgCD%2Bwt3D8qqIXxKNUHXfsFvso62T%2BZ3m&X-Amz-Signature=df59e563ea562571b5225e810abe890d4ee20974ac6b74f2875aa155e6fabab9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLTR47R%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIA3mfezhuBSmzBNsJSRC%2B%2BorGkP6tw3BaRGbr%2Fp6cOE1AiEArggAcwY1DjieGD6KBF73njaccAoT63iCD5Ge8KGe8LIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId8BwxX9HYbY89kRircA2dkX5I1RgAzcjaEjH2VH7sdKhkrqPy0vXARVXrgC6M1%2FV1pcy3BekQdm9vFDU8rrses5AbH63hqC8Np45%2BlqpL4K7VcFW9to28TGgr3DWJPrnptFgItAH%2B0nLhaZMNSuasVIpxfzH2mIdTnqPTwhKIOADZ0dOHRRemUZl%2FeVaoRIoxqCexeIDQgayF%2F4pGBtUHeeTuIIqoVeJLCiYW4S8znyjLBE80vHf2YlqJKrkrYqD2yby4r5y52W6RhhUs0BfIt8Sd%2FYzQO44jkujEnPFnC4ORKxEJT31N56sm%2FxMqw%2FnYmthShJP6zWmb%2FMjBy0zxHFtFBQFwNmYZTL98C1AZa8lCd%2BysDiD9%2FuDOFU08PB0YelhMamo4HsulKhD1kyW9E1mJ6%2FDr3KQD3to5Hemxb6DluwSCQuMByQ5l%2BUyV1OUDXHaDYLUMhZY2c068GAdWS09O%2BrjaYM9s1NznvEkfcT9trDn3W9ECFmKIbfKwUWRSyOZkCxjnkYXc70%2B734tN5QmsrChxIhM7rll2vXbtSr9OunNs4Q3%2Bw9c%2BlrXS7p%2F3hBWVtTrJOqb96peFu0d9wrVNRXPiiGCIX1%2B821tOVT4I2ksXYauq3cM1xTdt8brC9%2FpdBqGAt%2F0bhMIe1s78GOqUB961LUAxsWIqK3870MRn2GZE0%2B7Ll5msHZ4FmLM%2FnBcMVyCIeLuY0l1Cb0TcOorRzDHjXbzTi%2BZ8P%2BCQ1E497wrlUOelENOgUArD2k6VerJoXI0ymfWCflXhvO0%2FCC3XdVP%2FlNMF5mdU0sN2x46AV%2FvWRSByiKRQJzTA2PzqSAgl3xSIiJO9AfBVQDBiEgCD%2Bwt3D8qqIXxKNUHXfsFvso62T%2BZ3m&X-Amz-Signature=26d94516a6c15a6d90e52a5ad5d9042b101ba25265c285290093b83d4ce88ff4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLTR47R%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIA3mfezhuBSmzBNsJSRC%2B%2BorGkP6tw3BaRGbr%2Fp6cOE1AiEArggAcwY1DjieGD6KBF73njaccAoT63iCD5Ge8KGe8LIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId8BwxX9HYbY89kRircA2dkX5I1RgAzcjaEjH2VH7sdKhkrqPy0vXARVXrgC6M1%2FV1pcy3BekQdm9vFDU8rrses5AbH63hqC8Np45%2BlqpL4K7VcFW9to28TGgr3DWJPrnptFgItAH%2B0nLhaZMNSuasVIpxfzH2mIdTnqPTwhKIOADZ0dOHRRemUZl%2FeVaoRIoxqCexeIDQgayF%2F4pGBtUHeeTuIIqoVeJLCiYW4S8znyjLBE80vHf2YlqJKrkrYqD2yby4r5y52W6RhhUs0BfIt8Sd%2FYzQO44jkujEnPFnC4ORKxEJT31N56sm%2FxMqw%2FnYmthShJP6zWmb%2FMjBy0zxHFtFBQFwNmYZTL98C1AZa8lCd%2BysDiD9%2FuDOFU08PB0YelhMamo4HsulKhD1kyW9E1mJ6%2FDr3KQD3to5Hemxb6DluwSCQuMByQ5l%2BUyV1OUDXHaDYLUMhZY2c068GAdWS09O%2BrjaYM9s1NznvEkfcT9trDn3W9ECFmKIbfKwUWRSyOZkCxjnkYXc70%2B734tN5QmsrChxIhM7rll2vXbtSr9OunNs4Q3%2Bw9c%2BlrXS7p%2F3hBWVtTrJOqb96peFu0d9wrVNRXPiiGCIX1%2B821tOVT4I2ksXYauq3cM1xTdt8brC9%2FpdBqGAt%2F0bhMIe1s78GOqUB961LUAxsWIqK3870MRn2GZE0%2B7Ll5msHZ4FmLM%2FnBcMVyCIeLuY0l1Cb0TcOorRzDHjXbzTi%2BZ8P%2BCQ1E497wrlUOelENOgUArD2k6VerJoXI0ymfWCflXhvO0%2FCC3XdVP%2FlNMF5mdU0sN2x46AV%2FvWRSByiKRQJzTA2PzqSAgl3xSIiJO9AfBVQDBiEgCD%2Bwt3D8qqIXxKNUHXfsFvso62T%2BZ3m&X-Amz-Signature=19ac401f035f5dee243737304ba080917096a4f925ef7b23a0421cefcb1ceaa0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLTR47R%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIA3mfezhuBSmzBNsJSRC%2B%2BorGkP6tw3BaRGbr%2Fp6cOE1AiEArggAcwY1DjieGD6KBF73njaccAoT63iCD5Ge8KGe8LIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId8BwxX9HYbY89kRircA2dkX5I1RgAzcjaEjH2VH7sdKhkrqPy0vXARVXrgC6M1%2FV1pcy3BekQdm9vFDU8rrses5AbH63hqC8Np45%2BlqpL4K7VcFW9to28TGgr3DWJPrnptFgItAH%2B0nLhaZMNSuasVIpxfzH2mIdTnqPTwhKIOADZ0dOHRRemUZl%2FeVaoRIoxqCexeIDQgayF%2F4pGBtUHeeTuIIqoVeJLCiYW4S8znyjLBE80vHf2YlqJKrkrYqD2yby4r5y52W6RhhUs0BfIt8Sd%2FYzQO44jkujEnPFnC4ORKxEJT31N56sm%2FxMqw%2FnYmthShJP6zWmb%2FMjBy0zxHFtFBQFwNmYZTL98C1AZa8lCd%2BysDiD9%2FuDOFU08PB0YelhMamo4HsulKhD1kyW9E1mJ6%2FDr3KQD3to5Hemxb6DluwSCQuMByQ5l%2BUyV1OUDXHaDYLUMhZY2c068GAdWS09O%2BrjaYM9s1NznvEkfcT9trDn3W9ECFmKIbfKwUWRSyOZkCxjnkYXc70%2B734tN5QmsrChxIhM7rll2vXbtSr9OunNs4Q3%2Bw9c%2BlrXS7p%2F3hBWVtTrJOqb96peFu0d9wrVNRXPiiGCIX1%2B821tOVT4I2ksXYauq3cM1xTdt8brC9%2FpdBqGAt%2F0bhMIe1s78GOqUB961LUAxsWIqK3870MRn2GZE0%2B7Ll5msHZ4FmLM%2FnBcMVyCIeLuY0l1Cb0TcOorRzDHjXbzTi%2BZ8P%2BCQ1E497wrlUOelENOgUArD2k6VerJoXI0ymfWCflXhvO0%2FCC3XdVP%2FlNMF5mdU0sN2x46AV%2FvWRSByiKRQJzTA2PzqSAgl3xSIiJO9AfBVQDBiEgCD%2Bwt3D8qqIXxKNUHXfsFvso62T%2BZ3m&X-Amz-Signature=b9362790ef9c7f995d8a2ad96c70299701094c817adcc945e02f07a7c5b00fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLTR47R%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIA3mfezhuBSmzBNsJSRC%2B%2BorGkP6tw3BaRGbr%2Fp6cOE1AiEArggAcwY1DjieGD6KBF73njaccAoT63iCD5Ge8KGe8LIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId8BwxX9HYbY89kRircA2dkX5I1RgAzcjaEjH2VH7sdKhkrqPy0vXARVXrgC6M1%2FV1pcy3BekQdm9vFDU8rrses5AbH63hqC8Np45%2BlqpL4K7VcFW9to28TGgr3DWJPrnptFgItAH%2B0nLhaZMNSuasVIpxfzH2mIdTnqPTwhKIOADZ0dOHRRemUZl%2FeVaoRIoxqCexeIDQgayF%2F4pGBtUHeeTuIIqoVeJLCiYW4S8znyjLBE80vHf2YlqJKrkrYqD2yby4r5y52W6RhhUs0BfIt8Sd%2FYzQO44jkujEnPFnC4ORKxEJT31N56sm%2FxMqw%2FnYmthShJP6zWmb%2FMjBy0zxHFtFBQFwNmYZTL98C1AZa8lCd%2BysDiD9%2FuDOFU08PB0YelhMamo4HsulKhD1kyW9E1mJ6%2FDr3KQD3to5Hemxb6DluwSCQuMByQ5l%2BUyV1OUDXHaDYLUMhZY2c068GAdWS09O%2BrjaYM9s1NznvEkfcT9trDn3W9ECFmKIbfKwUWRSyOZkCxjnkYXc70%2B734tN5QmsrChxIhM7rll2vXbtSr9OunNs4Q3%2Bw9c%2BlrXS7p%2F3hBWVtTrJOqb96peFu0d9wrVNRXPiiGCIX1%2B821tOVT4I2ksXYauq3cM1xTdt8brC9%2FpdBqGAt%2F0bhMIe1s78GOqUB961LUAxsWIqK3870MRn2GZE0%2B7Ll5msHZ4FmLM%2FnBcMVyCIeLuY0l1Cb0TcOorRzDHjXbzTi%2BZ8P%2BCQ1E497wrlUOelENOgUArD2k6VerJoXI0ymfWCflXhvO0%2FCC3XdVP%2FlNMF5mdU0sN2x46AV%2FvWRSByiKRQJzTA2PzqSAgl3xSIiJO9AfBVQDBiEgCD%2Bwt3D8qqIXxKNUHXfsFvso62T%2BZ3m&X-Amz-Signature=55f9b34838da161641dba125be678e5a45fd8160e9dfe00aff91dbd6a84cb9be&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
