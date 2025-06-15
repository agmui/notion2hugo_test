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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDKB63DX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFD3VSZ1xD4xRQVkZDHRIShaHQE3BD4Dto0MR1BFMAfrAiEA9QHkX1zBR8n%2Bqh4BycxrfXkev6%2BFBMJWLdkxlCIgqp0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEPCY1vQuxxjOtvpUSrcA%2BARn9doYDweFMkmZLs7NGIh1nD0Hjr%2BH3aC1GpPTwo7KUgEec1Q0u3K%2BSL1q5VRcTChtVZChbW%2BwGJg5QOBVmekyiw0u8coxatvlD0a5SaMV%2BAPRMizyJxSciDUrHDLGtcTPAIrS58SXx7%2FhB0CdCq3L7OHU4WHBWlQ15zYqpe%2BgnUYr0mw3AwyU1N3ZBPIluCHoky1Ub%2FXzTv6RrYJ9x%2Be4Ekoo8ntpGRSWVF8NC%2BTM%2Fps%2FBadUEFMBlOEt8c2r8FiEqAun6fQFHXHmI4hur5%2Fdic20YJMKlzSgZfNR%2BjZT4D1fTH5TzbSo2%2BdhZRlaGAWXdxWD6dNVN6devVr5hF9iXI9JVz55R3VswXtohkjhYFS1XXqWI3jjoxn1TR%2F76Knrquv5RVtL2DwDVUv8AdNrHw%2BrddQtKcViEj6fUxK5Cvj3IEFXorZU5p1TXTaUAbb%2BDeOaS2X%2Fwcov2GrwXLcXi680qo%2FwXg9NnK51KqThX49OJSslO4gH9FGwjN25795kObPtrEyLxg7Ke%2FMuNgl0sHyE%2BbLpWCOEouJHJ8oNOee%2Ftb3rL%2FAAcKxu5ql%2FIUKPSy%2Fz3Zytpv9%2BzyQVeFevGFHkJnUN%2F9oTe1sLiucioybx22xkv7WerueMP7%2BuMIGOqUBykpbzZDWsjEokHvheSXj%2F6ADcyjNmqjV8jmmvZ4Ivm8zS6qrnWtUXH6NBcA65v77Ny4G2%2F33vWhJa05g5Vzlbd3WJm7vppEB6zjbpMHwFp9hpFqQdomxqUoYb4mjwjSh7rfYY0vjK5iE9BBwhNvt6z0FycAVTTYj0k7PSEIGGuJgdlUuj3nMhrcIx1AJGCWc2IDWH89Ffma6UBTdz1Cga%2FxSkKyJ&X-Amz-Signature=4b0fb2349edbc59390c2a8b2581b57d34931a0d78794019493b3c393e49b0fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDKB63DX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFD3VSZ1xD4xRQVkZDHRIShaHQE3BD4Dto0MR1BFMAfrAiEA9QHkX1zBR8n%2Bqh4BycxrfXkev6%2BFBMJWLdkxlCIgqp0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEPCY1vQuxxjOtvpUSrcA%2BARn9doYDweFMkmZLs7NGIh1nD0Hjr%2BH3aC1GpPTwo7KUgEec1Q0u3K%2BSL1q5VRcTChtVZChbW%2BwGJg5QOBVmekyiw0u8coxatvlD0a5SaMV%2BAPRMizyJxSciDUrHDLGtcTPAIrS58SXx7%2FhB0CdCq3L7OHU4WHBWlQ15zYqpe%2BgnUYr0mw3AwyU1N3ZBPIluCHoky1Ub%2FXzTv6RrYJ9x%2Be4Ekoo8ntpGRSWVF8NC%2BTM%2Fps%2FBadUEFMBlOEt8c2r8FiEqAun6fQFHXHmI4hur5%2Fdic20YJMKlzSgZfNR%2BjZT4D1fTH5TzbSo2%2BdhZRlaGAWXdxWD6dNVN6devVr5hF9iXI9JVz55R3VswXtohkjhYFS1XXqWI3jjoxn1TR%2F76Knrquv5RVtL2DwDVUv8AdNrHw%2BrddQtKcViEj6fUxK5Cvj3IEFXorZU5p1TXTaUAbb%2BDeOaS2X%2Fwcov2GrwXLcXi680qo%2FwXg9NnK51KqThX49OJSslO4gH9FGwjN25795kObPtrEyLxg7Ke%2FMuNgl0sHyE%2BbLpWCOEouJHJ8oNOee%2Ftb3rL%2FAAcKxu5ql%2FIUKPSy%2Fz3Zytpv9%2BzyQVeFevGFHkJnUN%2F9oTe1sLiucioybx22xkv7WerueMP7%2BuMIGOqUBykpbzZDWsjEokHvheSXj%2F6ADcyjNmqjV8jmmvZ4Ivm8zS6qrnWtUXH6NBcA65v77Ny4G2%2F33vWhJa05g5Vzlbd3WJm7vppEB6zjbpMHwFp9hpFqQdomxqUoYb4mjwjSh7rfYY0vjK5iE9BBwhNvt6z0FycAVTTYj0k7PSEIGGuJgdlUuj3nMhrcIx1AJGCWc2IDWH89Ffma6UBTdz1Cga%2FxSkKyJ&X-Amz-Signature=1c80103b4695f66898583ca6f81a2020b681783dabbbbd7d2a328778c31711da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDKB63DX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFD3VSZ1xD4xRQVkZDHRIShaHQE3BD4Dto0MR1BFMAfrAiEA9QHkX1zBR8n%2Bqh4BycxrfXkev6%2BFBMJWLdkxlCIgqp0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEPCY1vQuxxjOtvpUSrcA%2BARn9doYDweFMkmZLs7NGIh1nD0Hjr%2BH3aC1GpPTwo7KUgEec1Q0u3K%2BSL1q5VRcTChtVZChbW%2BwGJg5QOBVmekyiw0u8coxatvlD0a5SaMV%2BAPRMizyJxSciDUrHDLGtcTPAIrS58SXx7%2FhB0CdCq3L7OHU4WHBWlQ15zYqpe%2BgnUYr0mw3AwyU1N3ZBPIluCHoky1Ub%2FXzTv6RrYJ9x%2Be4Ekoo8ntpGRSWVF8NC%2BTM%2Fps%2FBadUEFMBlOEt8c2r8FiEqAun6fQFHXHmI4hur5%2Fdic20YJMKlzSgZfNR%2BjZT4D1fTH5TzbSo2%2BdhZRlaGAWXdxWD6dNVN6devVr5hF9iXI9JVz55R3VswXtohkjhYFS1XXqWI3jjoxn1TR%2F76Knrquv5RVtL2DwDVUv8AdNrHw%2BrddQtKcViEj6fUxK5Cvj3IEFXorZU5p1TXTaUAbb%2BDeOaS2X%2Fwcov2GrwXLcXi680qo%2FwXg9NnK51KqThX49OJSslO4gH9FGwjN25795kObPtrEyLxg7Ke%2FMuNgl0sHyE%2BbLpWCOEouJHJ8oNOee%2Ftb3rL%2FAAcKxu5ql%2FIUKPSy%2Fz3Zytpv9%2BzyQVeFevGFHkJnUN%2F9oTe1sLiucioybx22xkv7WerueMP7%2BuMIGOqUBykpbzZDWsjEokHvheSXj%2F6ADcyjNmqjV8jmmvZ4Ivm8zS6qrnWtUXH6NBcA65v77Ny4G2%2F33vWhJa05g5Vzlbd3WJm7vppEB6zjbpMHwFp9hpFqQdomxqUoYb4mjwjSh7rfYY0vjK5iE9BBwhNvt6z0FycAVTTYj0k7PSEIGGuJgdlUuj3nMhrcIx1AJGCWc2IDWH89Ffma6UBTdz1Cga%2FxSkKyJ&X-Amz-Signature=72c7e9d7fd67b6ccb3504db8b1c3c0a15cc78279b25a1a9aaf71457707bd6577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDKB63DX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFD3VSZ1xD4xRQVkZDHRIShaHQE3BD4Dto0MR1BFMAfrAiEA9QHkX1zBR8n%2Bqh4BycxrfXkev6%2BFBMJWLdkxlCIgqp0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEPCY1vQuxxjOtvpUSrcA%2BARn9doYDweFMkmZLs7NGIh1nD0Hjr%2BH3aC1GpPTwo7KUgEec1Q0u3K%2BSL1q5VRcTChtVZChbW%2BwGJg5QOBVmekyiw0u8coxatvlD0a5SaMV%2BAPRMizyJxSciDUrHDLGtcTPAIrS58SXx7%2FhB0CdCq3L7OHU4WHBWlQ15zYqpe%2BgnUYr0mw3AwyU1N3ZBPIluCHoky1Ub%2FXzTv6RrYJ9x%2Be4Ekoo8ntpGRSWVF8NC%2BTM%2Fps%2FBadUEFMBlOEt8c2r8FiEqAun6fQFHXHmI4hur5%2Fdic20YJMKlzSgZfNR%2BjZT4D1fTH5TzbSo2%2BdhZRlaGAWXdxWD6dNVN6devVr5hF9iXI9JVz55R3VswXtohkjhYFS1XXqWI3jjoxn1TR%2F76Knrquv5RVtL2DwDVUv8AdNrHw%2BrddQtKcViEj6fUxK5Cvj3IEFXorZU5p1TXTaUAbb%2BDeOaS2X%2Fwcov2GrwXLcXi680qo%2FwXg9NnK51KqThX49OJSslO4gH9FGwjN25795kObPtrEyLxg7Ke%2FMuNgl0sHyE%2BbLpWCOEouJHJ8oNOee%2Ftb3rL%2FAAcKxu5ql%2FIUKPSy%2Fz3Zytpv9%2BzyQVeFevGFHkJnUN%2F9oTe1sLiucioybx22xkv7WerueMP7%2BuMIGOqUBykpbzZDWsjEokHvheSXj%2F6ADcyjNmqjV8jmmvZ4Ivm8zS6qrnWtUXH6NBcA65v77Ny4G2%2F33vWhJa05g5Vzlbd3WJm7vppEB6zjbpMHwFp9hpFqQdomxqUoYb4mjwjSh7rfYY0vjK5iE9BBwhNvt6z0FycAVTTYj0k7PSEIGGuJgdlUuj3nMhrcIx1AJGCWc2IDWH89Ffma6UBTdz1Cga%2FxSkKyJ&X-Amz-Signature=82f9f2e78f15e0b99b971b4be53c530f78a50fa134aa0fba2875b3fe590e25e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDKB63DX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFD3VSZ1xD4xRQVkZDHRIShaHQE3BD4Dto0MR1BFMAfrAiEA9QHkX1zBR8n%2Bqh4BycxrfXkev6%2BFBMJWLdkxlCIgqp0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEPCY1vQuxxjOtvpUSrcA%2BARn9doYDweFMkmZLs7NGIh1nD0Hjr%2BH3aC1GpPTwo7KUgEec1Q0u3K%2BSL1q5VRcTChtVZChbW%2BwGJg5QOBVmekyiw0u8coxatvlD0a5SaMV%2BAPRMizyJxSciDUrHDLGtcTPAIrS58SXx7%2FhB0CdCq3L7OHU4WHBWlQ15zYqpe%2BgnUYr0mw3AwyU1N3ZBPIluCHoky1Ub%2FXzTv6RrYJ9x%2Be4Ekoo8ntpGRSWVF8NC%2BTM%2Fps%2FBadUEFMBlOEt8c2r8FiEqAun6fQFHXHmI4hur5%2Fdic20YJMKlzSgZfNR%2BjZT4D1fTH5TzbSo2%2BdhZRlaGAWXdxWD6dNVN6devVr5hF9iXI9JVz55R3VswXtohkjhYFS1XXqWI3jjoxn1TR%2F76Knrquv5RVtL2DwDVUv8AdNrHw%2BrddQtKcViEj6fUxK5Cvj3IEFXorZU5p1TXTaUAbb%2BDeOaS2X%2Fwcov2GrwXLcXi680qo%2FwXg9NnK51KqThX49OJSslO4gH9FGwjN25795kObPtrEyLxg7Ke%2FMuNgl0sHyE%2BbLpWCOEouJHJ8oNOee%2Ftb3rL%2FAAcKxu5ql%2FIUKPSy%2Fz3Zytpv9%2BzyQVeFevGFHkJnUN%2F9oTe1sLiucioybx22xkv7WerueMP7%2BuMIGOqUBykpbzZDWsjEokHvheSXj%2F6ADcyjNmqjV8jmmvZ4Ivm8zS6qrnWtUXH6NBcA65v77Ny4G2%2F33vWhJa05g5Vzlbd3WJm7vppEB6zjbpMHwFp9hpFqQdomxqUoYb4mjwjSh7rfYY0vjK5iE9BBwhNvt6z0FycAVTTYj0k7PSEIGGuJgdlUuj3nMhrcIx1AJGCWc2IDWH89Ffma6UBTdz1Cga%2FxSkKyJ&X-Amz-Signature=7337bb7c8ba2da4a0dbe7e893a0f83c6f098b1231f6db3df682dd6f890d48a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDKB63DX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFD3VSZ1xD4xRQVkZDHRIShaHQE3BD4Dto0MR1BFMAfrAiEA9QHkX1zBR8n%2Bqh4BycxrfXkev6%2BFBMJWLdkxlCIgqp0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEPCY1vQuxxjOtvpUSrcA%2BARn9doYDweFMkmZLs7NGIh1nD0Hjr%2BH3aC1GpPTwo7KUgEec1Q0u3K%2BSL1q5VRcTChtVZChbW%2BwGJg5QOBVmekyiw0u8coxatvlD0a5SaMV%2BAPRMizyJxSciDUrHDLGtcTPAIrS58SXx7%2FhB0CdCq3L7OHU4WHBWlQ15zYqpe%2BgnUYr0mw3AwyU1N3ZBPIluCHoky1Ub%2FXzTv6RrYJ9x%2Be4Ekoo8ntpGRSWVF8NC%2BTM%2Fps%2FBadUEFMBlOEt8c2r8FiEqAun6fQFHXHmI4hur5%2Fdic20YJMKlzSgZfNR%2BjZT4D1fTH5TzbSo2%2BdhZRlaGAWXdxWD6dNVN6devVr5hF9iXI9JVz55R3VswXtohkjhYFS1XXqWI3jjoxn1TR%2F76Knrquv5RVtL2DwDVUv8AdNrHw%2BrddQtKcViEj6fUxK5Cvj3IEFXorZU5p1TXTaUAbb%2BDeOaS2X%2Fwcov2GrwXLcXi680qo%2FwXg9NnK51KqThX49OJSslO4gH9FGwjN25795kObPtrEyLxg7Ke%2FMuNgl0sHyE%2BbLpWCOEouJHJ8oNOee%2Ftb3rL%2FAAcKxu5ql%2FIUKPSy%2Fz3Zytpv9%2BzyQVeFevGFHkJnUN%2F9oTe1sLiucioybx22xkv7WerueMP7%2BuMIGOqUBykpbzZDWsjEokHvheSXj%2F6ADcyjNmqjV8jmmvZ4Ivm8zS6qrnWtUXH6NBcA65v77Ny4G2%2F33vWhJa05g5Vzlbd3WJm7vppEB6zjbpMHwFp9hpFqQdomxqUoYb4mjwjSh7rfYY0vjK5iE9BBwhNvt6z0FycAVTTYj0k7PSEIGGuJgdlUuj3nMhrcIx1AJGCWc2IDWH89Ffma6UBTdz1Cga%2FxSkKyJ&X-Amz-Signature=375d558107d1647fc477d2fe4eca244e1dc4b08f7f8972518e8cece03575ce6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDKB63DX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFD3VSZ1xD4xRQVkZDHRIShaHQE3BD4Dto0MR1BFMAfrAiEA9QHkX1zBR8n%2Bqh4BycxrfXkev6%2BFBMJWLdkxlCIgqp0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEPCY1vQuxxjOtvpUSrcA%2BARn9doYDweFMkmZLs7NGIh1nD0Hjr%2BH3aC1GpPTwo7KUgEec1Q0u3K%2BSL1q5VRcTChtVZChbW%2BwGJg5QOBVmekyiw0u8coxatvlD0a5SaMV%2BAPRMizyJxSciDUrHDLGtcTPAIrS58SXx7%2FhB0CdCq3L7OHU4WHBWlQ15zYqpe%2BgnUYr0mw3AwyU1N3ZBPIluCHoky1Ub%2FXzTv6RrYJ9x%2Be4Ekoo8ntpGRSWVF8NC%2BTM%2Fps%2FBadUEFMBlOEt8c2r8FiEqAun6fQFHXHmI4hur5%2Fdic20YJMKlzSgZfNR%2BjZT4D1fTH5TzbSo2%2BdhZRlaGAWXdxWD6dNVN6devVr5hF9iXI9JVz55R3VswXtohkjhYFS1XXqWI3jjoxn1TR%2F76Knrquv5RVtL2DwDVUv8AdNrHw%2BrddQtKcViEj6fUxK5Cvj3IEFXorZU5p1TXTaUAbb%2BDeOaS2X%2Fwcov2GrwXLcXi680qo%2FwXg9NnK51KqThX49OJSslO4gH9FGwjN25795kObPtrEyLxg7Ke%2FMuNgl0sHyE%2BbLpWCOEouJHJ8oNOee%2Ftb3rL%2FAAcKxu5ql%2FIUKPSy%2Fz3Zytpv9%2BzyQVeFevGFHkJnUN%2F9oTe1sLiucioybx22xkv7WerueMP7%2BuMIGOqUBykpbzZDWsjEokHvheSXj%2F6ADcyjNmqjV8jmmvZ4Ivm8zS6qrnWtUXH6NBcA65v77Ny4G2%2F33vWhJa05g5Vzlbd3WJm7vppEB6zjbpMHwFp9hpFqQdomxqUoYb4mjwjSh7rfYY0vjK5iE9BBwhNvt6z0FycAVTTYj0k7PSEIGGuJgdlUuj3nMhrcIx1AJGCWc2IDWH89Ffma6UBTdz1Cga%2FxSkKyJ&X-Amz-Signature=9d38278855b5ab9646df9aad2970d3517bbf75047f979244e9e33899fdd6e07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
