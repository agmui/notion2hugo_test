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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVMXJSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF4sIi6XdmXm7%2F3%2FExvYaTkrbeSxIZLQx7flToKFYNNiAiA0c9oB%2BcT0yuOVvo0GP6FlHbgGdz%2B3DKW7n%2FGLTjciRyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMRnmhMsQKR0oHec09KtwDy0Aw99xxTdXAuUEZKEi4%2FbrWRck4hMmfY5q%2Bk0KVSKVASdKmhVzGp7QF5Z2KPiWg3cz551k1ZI8ivBLLOm7bRN2WU0asSyf0xEtNPVaP%2BLQNXyGVZjm1hJw9AfxroVDxSdPV%2BRvnMKy4GthVtlku3Mzd79z0yZ%2FK5CazHKRvV2o5qKgpuIQAnHY9rMrKy1aAQGimq%2FrtroQoWkESFRthlG%2BVr3uvXQz50%2Bz9roZCGEn8SnZVWnVRWjVGuCY9ZPLy5E%2BAuE6m2EVPjSvaUsYNmJvvwWx39JKYnKRiGIZ09dwFwmvQzbY1LfvebC5JvB8lmGritU3tFfRtTl8LyJ79jibZT3rHqu6zEU07WQpQge5q%2B9hR1%2FISvrrBmFUdOO7j2UV15Gr8%2BEVUx%2FRU6JHfBAxTlxQpcBnH6lgelVW1dpold1xx6%2BSgZicp61nE5B4BVofNrUuR4fufVIZa9DtqgQVTFWodl%2Bel1ngGW%2FknzumueLFKrzSyugcsZFC5GsLIaMrd1IwnoHDscQyLBY6qKWI%2FMMEYdcSVQNr%2Bov%2B5YVONv%2FkrtabmpIiW0GlPFLP1awiGdehQJlnsse%2Fte%2FDApQtn%2F7HX4up2%2BUlqhxAcwTDRBVrviWvfKvX8gqwwhM6kwwY6pgF%2F7RPunia%2FBTnE9ktHCr7lvF3ykeRvEhp4TXnLeq%2FgcEYAYiX9zhTshTdOB%2BRyjj65PYZ%2FqkKcuKM%2B2WcYkFf4F8jmkEG6ELaOJeQFqxkCutpTYkmdKaogK6oo1Dj15d2wmqvmetfcDG3y0snRGgz9f62YBdii34YnJUn%2BcyRL0xtjQntMaQnO6VN5hs4OjamKbWGzypCVBVUzpTqRv4ceCY7hQc1m&X-Amz-Signature=976f954e9d32e776b35f988abb7729d054e429ee664a4a2de36da16057c5e75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVMXJSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF4sIi6XdmXm7%2F3%2FExvYaTkrbeSxIZLQx7flToKFYNNiAiA0c9oB%2BcT0yuOVvo0GP6FlHbgGdz%2B3DKW7n%2FGLTjciRyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMRnmhMsQKR0oHec09KtwDy0Aw99xxTdXAuUEZKEi4%2FbrWRck4hMmfY5q%2Bk0KVSKVASdKmhVzGp7QF5Z2KPiWg3cz551k1ZI8ivBLLOm7bRN2WU0asSyf0xEtNPVaP%2BLQNXyGVZjm1hJw9AfxroVDxSdPV%2BRvnMKy4GthVtlku3Mzd79z0yZ%2FK5CazHKRvV2o5qKgpuIQAnHY9rMrKy1aAQGimq%2FrtroQoWkESFRthlG%2BVr3uvXQz50%2Bz9roZCGEn8SnZVWnVRWjVGuCY9ZPLy5E%2BAuE6m2EVPjSvaUsYNmJvvwWx39JKYnKRiGIZ09dwFwmvQzbY1LfvebC5JvB8lmGritU3tFfRtTl8LyJ79jibZT3rHqu6zEU07WQpQge5q%2B9hR1%2FISvrrBmFUdOO7j2UV15Gr8%2BEVUx%2FRU6JHfBAxTlxQpcBnH6lgelVW1dpold1xx6%2BSgZicp61nE5B4BVofNrUuR4fufVIZa9DtqgQVTFWodl%2Bel1ngGW%2FknzumueLFKrzSyugcsZFC5GsLIaMrd1IwnoHDscQyLBY6qKWI%2FMMEYdcSVQNr%2Bov%2B5YVONv%2FkrtabmpIiW0GlPFLP1awiGdehQJlnsse%2Fte%2FDApQtn%2F7HX4up2%2BUlqhxAcwTDRBVrviWvfKvX8gqwwhM6kwwY6pgF%2F7RPunia%2FBTnE9ktHCr7lvF3ykeRvEhp4TXnLeq%2FgcEYAYiX9zhTshTdOB%2BRyjj65PYZ%2FqkKcuKM%2B2WcYkFf4F8jmkEG6ELaOJeQFqxkCutpTYkmdKaogK6oo1Dj15d2wmqvmetfcDG3y0snRGgz9f62YBdii34YnJUn%2BcyRL0xtjQntMaQnO6VN5hs4OjamKbWGzypCVBVUzpTqRv4ceCY7hQc1m&X-Amz-Signature=464f2bc23aa152ccf751fc9456eb24724affad96ac32bb09f675c01b309e59f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVMXJSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF4sIi6XdmXm7%2F3%2FExvYaTkrbeSxIZLQx7flToKFYNNiAiA0c9oB%2BcT0yuOVvo0GP6FlHbgGdz%2B3DKW7n%2FGLTjciRyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMRnmhMsQKR0oHec09KtwDy0Aw99xxTdXAuUEZKEi4%2FbrWRck4hMmfY5q%2Bk0KVSKVASdKmhVzGp7QF5Z2KPiWg3cz551k1ZI8ivBLLOm7bRN2WU0asSyf0xEtNPVaP%2BLQNXyGVZjm1hJw9AfxroVDxSdPV%2BRvnMKy4GthVtlku3Mzd79z0yZ%2FK5CazHKRvV2o5qKgpuIQAnHY9rMrKy1aAQGimq%2FrtroQoWkESFRthlG%2BVr3uvXQz50%2Bz9roZCGEn8SnZVWnVRWjVGuCY9ZPLy5E%2BAuE6m2EVPjSvaUsYNmJvvwWx39JKYnKRiGIZ09dwFwmvQzbY1LfvebC5JvB8lmGritU3tFfRtTl8LyJ79jibZT3rHqu6zEU07WQpQge5q%2B9hR1%2FISvrrBmFUdOO7j2UV15Gr8%2BEVUx%2FRU6JHfBAxTlxQpcBnH6lgelVW1dpold1xx6%2BSgZicp61nE5B4BVofNrUuR4fufVIZa9DtqgQVTFWodl%2Bel1ngGW%2FknzumueLFKrzSyugcsZFC5GsLIaMrd1IwnoHDscQyLBY6qKWI%2FMMEYdcSVQNr%2Bov%2B5YVONv%2FkrtabmpIiW0GlPFLP1awiGdehQJlnsse%2Fte%2FDApQtn%2F7HX4up2%2BUlqhxAcwTDRBVrviWvfKvX8gqwwhM6kwwY6pgF%2F7RPunia%2FBTnE9ktHCr7lvF3ykeRvEhp4TXnLeq%2FgcEYAYiX9zhTshTdOB%2BRyjj65PYZ%2FqkKcuKM%2B2WcYkFf4F8jmkEG6ELaOJeQFqxkCutpTYkmdKaogK6oo1Dj15d2wmqvmetfcDG3y0snRGgz9f62YBdii34YnJUn%2BcyRL0xtjQntMaQnO6VN5hs4OjamKbWGzypCVBVUzpTqRv4ceCY7hQc1m&X-Amz-Signature=b5f07c632162beb8774ad8b7fe9fe969c58709d49f8aa8630d2959a65efa7d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVMXJSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF4sIi6XdmXm7%2F3%2FExvYaTkrbeSxIZLQx7flToKFYNNiAiA0c9oB%2BcT0yuOVvo0GP6FlHbgGdz%2B3DKW7n%2FGLTjciRyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMRnmhMsQKR0oHec09KtwDy0Aw99xxTdXAuUEZKEi4%2FbrWRck4hMmfY5q%2Bk0KVSKVASdKmhVzGp7QF5Z2KPiWg3cz551k1ZI8ivBLLOm7bRN2WU0asSyf0xEtNPVaP%2BLQNXyGVZjm1hJw9AfxroVDxSdPV%2BRvnMKy4GthVtlku3Mzd79z0yZ%2FK5CazHKRvV2o5qKgpuIQAnHY9rMrKy1aAQGimq%2FrtroQoWkESFRthlG%2BVr3uvXQz50%2Bz9roZCGEn8SnZVWnVRWjVGuCY9ZPLy5E%2BAuE6m2EVPjSvaUsYNmJvvwWx39JKYnKRiGIZ09dwFwmvQzbY1LfvebC5JvB8lmGritU3tFfRtTl8LyJ79jibZT3rHqu6zEU07WQpQge5q%2B9hR1%2FISvrrBmFUdOO7j2UV15Gr8%2BEVUx%2FRU6JHfBAxTlxQpcBnH6lgelVW1dpold1xx6%2BSgZicp61nE5B4BVofNrUuR4fufVIZa9DtqgQVTFWodl%2Bel1ngGW%2FknzumueLFKrzSyugcsZFC5GsLIaMrd1IwnoHDscQyLBY6qKWI%2FMMEYdcSVQNr%2Bov%2B5YVONv%2FkrtabmpIiW0GlPFLP1awiGdehQJlnsse%2Fte%2FDApQtn%2F7HX4up2%2BUlqhxAcwTDRBVrviWvfKvX8gqwwhM6kwwY6pgF%2F7RPunia%2FBTnE9ktHCr7lvF3ykeRvEhp4TXnLeq%2FgcEYAYiX9zhTshTdOB%2BRyjj65PYZ%2FqkKcuKM%2B2WcYkFf4F8jmkEG6ELaOJeQFqxkCutpTYkmdKaogK6oo1Dj15d2wmqvmetfcDG3y0snRGgz9f62YBdii34YnJUn%2BcyRL0xtjQntMaQnO6VN5hs4OjamKbWGzypCVBVUzpTqRv4ceCY7hQc1m&X-Amz-Signature=db9ef0bf8e007b0a44517a87c010369ec9c344040ea0cd051a7719b12c4919e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVMXJSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF4sIi6XdmXm7%2F3%2FExvYaTkrbeSxIZLQx7flToKFYNNiAiA0c9oB%2BcT0yuOVvo0GP6FlHbgGdz%2B3DKW7n%2FGLTjciRyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMRnmhMsQKR0oHec09KtwDy0Aw99xxTdXAuUEZKEi4%2FbrWRck4hMmfY5q%2Bk0KVSKVASdKmhVzGp7QF5Z2KPiWg3cz551k1ZI8ivBLLOm7bRN2WU0asSyf0xEtNPVaP%2BLQNXyGVZjm1hJw9AfxroVDxSdPV%2BRvnMKy4GthVtlku3Mzd79z0yZ%2FK5CazHKRvV2o5qKgpuIQAnHY9rMrKy1aAQGimq%2FrtroQoWkESFRthlG%2BVr3uvXQz50%2Bz9roZCGEn8SnZVWnVRWjVGuCY9ZPLy5E%2BAuE6m2EVPjSvaUsYNmJvvwWx39JKYnKRiGIZ09dwFwmvQzbY1LfvebC5JvB8lmGritU3tFfRtTl8LyJ79jibZT3rHqu6zEU07WQpQge5q%2B9hR1%2FISvrrBmFUdOO7j2UV15Gr8%2BEVUx%2FRU6JHfBAxTlxQpcBnH6lgelVW1dpold1xx6%2BSgZicp61nE5B4BVofNrUuR4fufVIZa9DtqgQVTFWodl%2Bel1ngGW%2FknzumueLFKrzSyugcsZFC5GsLIaMrd1IwnoHDscQyLBY6qKWI%2FMMEYdcSVQNr%2Bov%2B5YVONv%2FkrtabmpIiW0GlPFLP1awiGdehQJlnsse%2Fte%2FDApQtn%2F7HX4up2%2BUlqhxAcwTDRBVrviWvfKvX8gqwwhM6kwwY6pgF%2F7RPunia%2FBTnE9ktHCr7lvF3ykeRvEhp4TXnLeq%2FgcEYAYiX9zhTshTdOB%2BRyjj65PYZ%2FqkKcuKM%2B2WcYkFf4F8jmkEG6ELaOJeQFqxkCutpTYkmdKaogK6oo1Dj15d2wmqvmetfcDG3y0snRGgz9f62YBdii34YnJUn%2BcyRL0xtjQntMaQnO6VN5hs4OjamKbWGzypCVBVUzpTqRv4ceCY7hQc1m&X-Amz-Signature=1221be8629a2e60e2feb92b6b1755f0fc69c3ea8f42f67811927487de5322fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVMXJSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF4sIi6XdmXm7%2F3%2FExvYaTkrbeSxIZLQx7flToKFYNNiAiA0c9oB%2BcT0yuOVvo0GP6FlHbgGdz%2B3DKW7n%2FGLTjciRyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMRnmhMsQKR0oHec09KtwDy0Aw99xxTdXAuUEZKEi4%2FbrWRck4hMmfY5q%2Bk0KVSKVASdKmhVzGp7QF5Z2KPiWg3cz551k1ZI8ivBLLOm7bRN2WU0asSyf0xEtNPVaP%2BLQNXyGVZjm1hJw9AfxroVDxSdPV%2BRvnMKy4GthVtlku3Mzd79z0yZ%2FK5CazHKRvV2o5qKgpuIQAnHY9rMrKy1aAQGimq%2FrtroQoWkESFRthlG%2BVr3uvXQz50%2Bz9roZCGEn8SnZVWnVRWjVGuCY9ZPLy5E%2BAuE6m2EVPjSvaUsYNmJvvwWx39JKYnKRiGIZ09dwFwmvQzbY1LfvebC5JvB8lmGritU3tFfRtTl8LyJ79jibZT3rHqu6zEU07WQpQge5q%2B9hR1%2FISvrrBmFUdOO7j2UV15Gr8%2BEVUx%2FRU6JHfBAxTlxQpcBnH6lgelVW1dpold1xx6%2BSgZicp61nE5B4BVofNrUuR4fufVIZa9DtqgQVTFWodl%2Bel1ngGW%2FknzumueLFKrzSyugcsZFC5GsLIaMrd1IwnoHDscQyLBY6qKWI%2FMMEYdcSVQNr%2Bov%2B5YVONv%2FkrtabmpIiW0GlPFLP1awiGdehQJlnsse%2Fte%2FDApQtn%2F7HX4up2%2BUlqhxAcwTDRBVrviWvfKvX8gqwwhM6kwwY6pgF%2F7RPunia%2FBTnE9ktHCr7lvF3ykeRvEhp4TXnLeq%2FgcEYAYiX9zhTshTdOB%2BRyjj65PYZ%2FqkKcuKM%2B2WcYkFf4F8jmkEG6ELaOJeQFqxkCutpTYkmdKaogK6oo1Dj15d2wmqvmetfcDG3y0snRGgz9f62YBdii34YnJUn%2BcyRL0xtjQntMaQnO6VN5hs4OjamKbWGzypCVBVUzpTqRv4ceCY7hQc1m&X-Amz-Signature=efa35ee43fb9efae9468f13a1208667a7b81f6cb72b2225cfd25148b3081bda8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVMXJSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF4sIi6XdmXm7%2F3%2FExvYaTkrbeSxIZLQx7flToKFYNNiAiA0c9oB%2BcT0yuOVvo0GP6FlHbgGdz%2B3DKW7n%2FGLTjciRyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMRnmhMsQKR0oHec09KtwDy0Aw99xxTdXAuUEZKEi4%2FbrWRck4hMmfY5q%2Bk0KVSKVASdKmhVzGp7QF5Z2KPiWg3cz551k1ZI8ivBLLOm7bRN2WU0asSyf0xEtNPVaP%2BLQNXyGVZjm1hJw9AfxroVDxSdPV%2BRvnMKy4GthVtlku3Mzd79z0yZ%2FK5CazHKRvV2o5qKgpuIQAnHY9rMrKy1aAQGimq%2FrtroQoWkESFRthlG%2BVr3uvXQz50%2Bz9roZCGEn8SnZVWnVRWjVGuCY9ZPLy5E%2BAuE6m2EVPjSvaUsYNmJvvwWx39JKYnKRiGIZ09dwFwmvQzbY1LfvebC5JvB8lmGritU3tFfRtTl8LyJ79jibZT3rHqu6zEU07WQpQge5q%2B9hR1%2FISvrrBmFUdOO7j2UV15Gr8%2BEVUx%2FRU6JHfBAxTlxQpcBnH6lgelVW1dpold1xx6%2BSgZicp61nE5B4BVofNrUuR4fufVIZa9DtqgQVTFWodl%2Bel1ngGW%2FknzumueLFKrzSyugcsZFC5GsLIaMrd1IwnoHDscQyLBY6qKWI%2FMMEYdcSVQNr%2Bov%2B5YVONv%2FkrtabmpIiW0GlPFLP1awiGdehQJlnsse%2Fte%2FDApQtn%2F7HX4up2%2BUlqhxAcwTDRBVrviWvfKvX8gqwwhM6kwwY6pgF%2F7RPunia%2FBTnE9ktHCr7lvF3ykeRvEhp4TXnLeq%2FgcEYAYiX9zhTshTdOB%2BRyjj65PYZ%2FqkKcuKM%2B2WcYkFf4F8jmkEG6ELaOJeQFqxkCutpTYkmdKaogK6oo1Dj15d2wmqvmetfcDG3y0snRGgz9f62YBdii34YnJUn%2BcyRL0xtjQntMaQnO6VN5hs4OjamKbWGzypCVBVUzpTqRv4ceCY7hQc1m&X-Amz-Signature=3b90a5e56b52e8572d9546262f168d012afd9b75fba59c441d258990000c9947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
