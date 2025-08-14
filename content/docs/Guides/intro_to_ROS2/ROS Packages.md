---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNIHK3U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIA8%2B6fCBJj4%2BVHcLy0G8U0QTPXdsWsN52K2AyjLUfLlXAiAPwW35kUQHJsY9apJAybNKLdFE%2FoI4thV3hl3if9wpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM0RuMPXdV1PRO1WjMKtwDeHK%2BpJd%2Bzq7JFwe%2Bk5QXXh8iAU36GCTO26J1VjRsSFq4lPgnq8P3UzIjlY6x7UF%2B0y7PXTOXnwNlxYM73cr91rfOwM7uwX0rzDuR7mA843hryUpkJ4DbvzYZjPtqAw9W2a9lsMDgmnlrJqpRCZzk7n5Ro3GrXcc%2FtWrtkO74zb0Qaq56w3Imwf4lM3SoFSIcUHTLi134zzLtKLqXyUrG6uRM8z3GfxQhJL2jW%2F0xQDo%2FsgjSLuOFvRc8lM0GGmy7pZDnGs1bNhyqQLssrPEGkiyT5QnkvpgkWq1xCLzMgasGo7Omu%2BRZYEdvTPTjff5BRZXt8s5X%2BOWHe6m6B6iFwk3wO0TUJdhOjQfMNvtSc1tr87mY6DJCjbC%2FHHaqC%2BhL4Qh%2B%2FaTo9KgCD%2Bn4VaHSbC5ytoqpsII8gYIey%2F83qzZqDAjTFvG8%2FQfOqPc4CAewY2AhmBpJXlgD4Uqg%2F7PDcqMNFfuzvKooHE5pQN4%2FcegYnuaiJUB2W5abcqCfP%2BsCF8P7NHn50rBCHqsxLwpKL4%2BduIsmV7fuXG1u%2FrMigV8Vuv3fNvlj%2FYXXbZuAbjSBTH5eG%2B6BdOfKOlrMa1SpaMF7FYiySQDhPCJt2K3KwqUm6h1n%2FuopVtCjvlMw%2FsH4xAY6pgGTugyVx%2FcRENNYDUADWEsSu%2BRpE%2BXle9OoxDgnexS%2FSvH0%2FmngcAEArfRIxduQCZVr061iUHicCDNInlcgj0%2Bjrf0dmtZiYyKiNNHFYfiu5kyne79vpq8Jfz1Lb7rwETQK%2F62Zhekad1E7UPuKKWlBv5G1donMgePYnQnKJqpxEfKuyDgaci5Us07Pxd7jMebhmDe6wHGSygZGCLe8Kb9xlBqqV2Hd&X-Amz-Signature=937986047ae464598856ebbf52abc69d62888d3927daee18c5a29e5cb539b7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNIHK3U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIA8%2B6fCBJj4%2BVHcLy0G8U0QTPXdsWsN52K2AyjLUfLlXAiAPwW35kUQHJsY9apJAybNKLdFE%2FoI4thV3hl3if9wpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM0RuMPXdV1PRO1WjMKtwDeHK%2BpJd%2Bzq7JFwe%2Bk5QXXh8iAU36GCTO26J1VjRsSFq4lPgnq8P3UzIjlY6x7UF%2B0y7PXTOXnwNlxYM73cr91rfOwM7uwX0rzDuR7mA843hryUpkJ4DbvzYZjPtqAw9W2a9lsMDgmnlrJqpRCZzk7n5Ro3GrXcc%2FtWrtkO74zb0Qaq56w3Imwf4lM3SoFSIcUHTLi134zzLtKLqXyUrG6uRM8z3GfxQhJL2jW%2F0xQDo%2FsgjSLuOFvRc8lM0GGmy7pZDnGs1bNhyqQLssrPEGkiyT5QnkvpgkWq1xCLzMgasGo7Omu%2BRZYEdvTPTjff5BRZXt8s5X%2BOWHe6m6B6iFwk3wO0TUJdhOjQfMNvtSc1tr87mY6DJCjbC%2FHHaqC%2BhL4Qh%2B%2FaTo9KgCD%2Bn4VaHSbC5ytoqpsII8gYIey%2F83qzZqDAjTFvG8%2FQfOqPc4CAewY2AhmBpJXlgD4Uqg%2F7PDcqMNFfuzvKooHE5pQN4%2FcegYnuaiJUB2W5abcqCfP%2BsCF8P7NHn50rBCHqsxLwpKL4%2BduIsmV7fuXG1u%2FrMigV8Vuv3fNvlj%2FYXXbZuAbjSBTH5eG%2B6BdOfKOlrMa1SpaMF7FYiySQDhPCJt2K3KwqUm6h1n%2FuopVtCjvlMw%2FsH4xAY6pgGTugyVx%2FcRENNYDUADWEsSu%2BRpE%2BXle9OoxDgnexS%2FSvH0%2FmngcAEArfRIxduQCZVr061iUHicCDNInlcgj0%2Bjrf0dmtZiYyKiNNHFYfiu5kyne79vpq8Jfz1Lb7rwETQK%2F62Zhekad1E7UPuKKWlBv5G1donMgePYnQnKJqpxEfKuyDgaci5Us07Pxd7jMebhmDe6wHGSygZGCLe8Kb9xlBqqV2Hd&X-Amz-Signature=7e929342e16658ab0a01287280fee54c5c732a25fac6203e7506983b945e9e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNIHK3U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIA8%2B6fCBJj4%2BVHcLy0G8U0QTPXdsWsN52K2AyjLUfLlXAiAPwW35kUQHJsY9apJAybNKLdFE%2FoI4thV3hl3if9wpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM0RuMPXdV1PRO1WjMKtwDeHK%2BpJd%2Bzq7JFwe%2Bk5QXXh8iAU36GCTO26J1VjRsSFq4lPgnq8P3UzIjlY6x7UF%2B0y7PXTOXnwNlxYM73cr91rfOwM7uwX0rzDuR7mA843hryUpkJ4DbvzYZjPtqAw9W2a9lsMDgmnlrJqpRCZzk7n5Ro3GrXcc%2FtWrtkO74zb0Qaq56w3Imwf4lM3SoFSIcUHTLi134zzLtKLqXyUrG6uRM8z3GfxQhJL2jW%2F0xQDo%2FsgjSLuOFvRc8lM0GGmy7pZDnGs1bNhyqQLssrPEGkiyT5QnkvpgkWq1xCLzMgasGo7Omu%2BRZYEdvTPTjff5BRZXt8s5X%2BOWHe6m6B6iFwk3wO0TUJdhOjQfMNvtSc1tr87mY6DJCjbC%2FHHaqC%2BhL4Qh%2B%2FaTo9KgCD%2Bn4VaHSbC5ytoqpsII8gYIey%2F83qzZqDAjTFvG8%2FQfOqPc4CAewY2AhmBpJXlgD4Uqg%2F7PDcqMNFfuzvKooHE5pQN4%2FcegYnuaiJUB2W5abcqCfP%2BsCF8P7NHn50rBCHqsxLwpKL4%2BduIsmV7fuXG1u%2FrMigV8Vuv3fNvlj%2FYXXbZuAbjSBTH5eG%2B6BdOfKOlrMa1SpaMF7FYiySQDhPCJt2K3KwqUm6h1n%2FuopVtCjvlMw%2FsH4xAY6pgGTugyVx%2FcRENNYDUADWEsSu%2BRpE%2BXle9OoxDgnexS%2FSvH0%2FmngcAEArfRIxduQCZVr061iUHicCDNInlcgj0%2Bjrf0dmtZiYyKiNNHFYfiu5kyne79vpq8Jfz1Lb7rwETQK%2F62Zhekad1E7UPuKKWlBv5G1donMgePYnQnKJqpxEfKuyDgaci5Us07Pxd7jMebhmDe6wHGSygZGCLe8Kb9xlBqqV2Hd&X-Amz-Signature=0d3ce8c08b5cfffa23865a0d2dfd121876416d29d6c3fcfb12b2f0026e50e480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNIHK3U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIA8%2B6fCBJj4%2BVHcLy0G8U0QTPXdsWsN52K2AyjLUfLlXAiAPwW35kUQHJsY9apJAybNKLdFE%2FoI4thV3hl3if9wpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM0RuMPXdV1PRO1WjMKtwDeHK%2BpJd%2Bzq7JFwe%2Bk5QXXh8iAU36GCTO26J1VjRsSFq4lPgnq8P3UzIjlY6x7UF%2B0y7PXTOXnwNlxYM73cr91rfOwM7uwX0rzDuR7mA843hryUpkJ4DbvzYZjPtqAw9W2a9lsMDgmnlrJqpRCZzk7n5Ro3GrXcc%2FtWrtkO74zb0Qaq56w3Imwf4lM3SoFSIcUHTLi134zzLtKLqXyUrG6uRM8z3GfxQhJL2jW%2F0xQDo%2FsgjSLuOFvRc8lM0GGmy7pZDnGs1bNhyqQLssrPEGkiyT5QnkvpgkWq1xCLzMgasGo7Omu%2BRZYEdvTPTjff5BRZXt8s5X%2BOWHe6m6B6iFwk3wO0TUJdhOjQfMNvtSc1tr87mY6DJCjbC%2FHHaqC%2BhL4Qh%2B%2FaTo9KgCD%2Bn4VaHSbC5ytoqpsII8gYIey%2F83qzZqDAjTFvG8%2FQfOqPc4CAewY2AhmBpJXlgD4Uqg%2F7PDcqMNFfuzvKooHE5pQN4%2FcegYnuaiJUB2W5abcqCfP%2BsCF8P7NHn50rBCHqsxLwpKL4%2BduIsmV7fuXG1u%2FrMigV8Vuv3fNvlj%2FYXXbZuAbjSBTH5eG%2B6BdOfKOlrMa1SpaMF7FYiySQDhPCJt2K3KwqUm6h1n%2FuopVtCjvlMw%2FsH4xAY6pgGTugyVx%2FcRENNYDUADWEsSu%2BRpE%2BXle9OoxDgnexS%2FSvH0%2FmngcAEArfRIxduQCZVr061iUHicCDNInlcgj0%2Bjrf0dmtZiYyKiNNHFYfiu5kyne79vpq8Jfz1Lb7rwETQK%2F62Zhekad1E7UPuKKWlBv5G1donMgePYnQnKJqpxEfKuyDgaci5Us07Pxd7jMebhmDe6wHGSygZGCLe8Kb9xlBqqV2Hd&X-Amz-Signature=347f4898db63140269ffc58c694045a4c3f9afd9f5064e039c0585d22c5eed02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNIHK3U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIA8%2B6fCBJj4%2BVHcLy0G8U0QTPXdsWsN52K2AyjLUfLlXAiAPwW35kUQHJsY9apJAybNKLdFE%2FoI4thV3hl3if9wpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM0RuMPXdV1PRO1WjMKtwDeHK%2BpJd%2Bzq7JFwe%2Bk5QXXh8iAU36GCTO26J1VjRsSFq4lPgnq8P3UzIjlY6x7UF%2B0y7PXTOXnwNlxYM73cr91rfOwM7uwX0rzDuR7mA843hryUpkJ4DbvzYZjPtqAw9W2a9lsMDgmnlrJqpRCZzk7n5Ro3GrXcc%2FtWrtkO74zb0Qaq56w3Imwf4lM3SoFSIcUHTLi134zzLtKLqXyUrG6uRM8z3GfxQhJL2jW%2F0xQDo%2FsgjSLuOFvRc8lM0GGmy7pZDnGs1bNhyqQLssrPEGkiyT5QnkvpgkWq1xCLzMgasGo7Omu%2BRZYEdvTPTjff5BRZXt8s5X%2BOWHe6m6B6iFwk3wO0TUJdhOjQfMNvtSc1tr87mY6DJCjbC%2FHHaqC%2BhL4Qh%2B%2FaTo9KgCD%2Bn4VaHSbC5ytoqpsII8gYIey%2F83qzZqDAjTFvG8%2FQfOqPc4CAewY2AhmBpJXlgD4Uqg%2F7PDcqMNFfuzvKooHE5pQN4%2FcegYnuaiJUB2W5abcqCfP%2BsCF8P7NHn50rBCHqsxLwpKL4%2BduIsmV7fuXG1u%2FrMigV8Vuv3fNvlj%2FYXXbZuAbjSBTH5eG%2B6BdOfKOlrMa1SpaMF7FYiySQDhPCJt2K3KwqUm6h1n%2FuopVtCjvlMw%2FsH4xAY6pgGTugyVx%2FcRENNYDUADWEsSu%2BRpE%2BXle9OoxDgnexS%2FSvH0%2FmngcAEArfRIxduQCZVr061iUHicCDNInlcgj0%2Bjrf0dmtZiYyKiNNHFYfiu5kyne79vpq8Jfz1Lb7rwETQK%2F62Zhekad1E7UPuKKWlBv5G1donMgePYnQnKJqpxEfKuyDgaci5Us07Pxd7jMebhmDe6wHGSygZGCLe8Kb9xlBqqV2Hd&X-Amz-Signature=f3c7a36e921b24f25fe9889a8ff891977122acb474fd199006eb8eafb0d0cf81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNIHK3U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIA8%2B6fCBJj4%2BVHcLy0G8U0QTPXdsWsN52K2AyjLUfLlXAiAPwW35kUQHJsY9apJAybNKLdFE%2FoI4thV3hl3if9wpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM0RuMPXdV1PRO1WjMKtwDeHK%2BpJd%2Bzq7JFwe%2Bk5QXXh8iAU36GCTO26J1VjRsSFq4lPgnq8P3UzIjlY6x7UF%2B0y7PXTOXnwNlxYM73cr91rfOwM7uwX0rzDuR7mA843hryUpkJ4DbvzYZjPtqAw9W2a9lsMDgmnlrJqpRCZzk7n5Ro3GrXcc%2FtWrtkO74zb0Qaq56w3Imwf4lM3SoFSIcUHTLi134zzLtKLqXyUrG6uRM8z3GfxQhJL2jW%2F0xQDo%2FsgjSLuOFvRc8lM0GGmy7pZDnGs1bNhyqQLssrPEGkiyT5QnkvpgkWq1xCLzMgasGo7Omu%2BRZYEdvTPTjff5BRZXt8s5X%2BOWHe6m6B6iFwk3wO0TUJdhOjQfMNvtSc1tr87mY6DJCjbC%2FHHaqC%2BhL4Qh%2B%2FaTo9KgCD%2Bn4VaHSbC5ytoqpsII8gYIey%2F83qzZqDAjTFvG8%2FQfOqPc4CAewY2AhmBpJXlgD4Uqg%2F7PDcqMNFfuzvKooHE5pQN4%2FcegYnuaiJUB2W5abcqCfP%2BsCF8P7NHn50rBCHqsxLwpKL4%2BduIsmV7fuXG1u%2FrMigV8Vuv3fNvlj%2FYXXbZuAbjSBTH5eG%2B6BdOfKOlrMa1SpaMF7FYiySQDhPCJt2K3KwqUm6h1n%2FuopVtCjvlMw%2FsH4xAY6pgGTugyVx%2FcRENNYDUADWEsSu%2BRpE%2BXle9OoxDgnexS%2FSvH0%2FmngcAEArfRIxduQCZVr061iUHicCDNInlcgj0%2Bjrf0dmtZiYyKiNNHFYfiu5kyne79vpq8Jfz1Lb7rwETQK%2F62Zhekad1E7UPuKKWlBv5G1donMgePYnQnKJqpxEfKuyDgaci5Us07Pxd7jMebhmDe6wHGSygZGCLe8Kb9xlBqqV2Hd&X-Amz-Signature=2cfa061a729817bbd495e7c9fb5f0d86887227f7c1283c0266291a98f0184616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNIHK3U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIA8%2B6fCBJj4%2BVHcLy0G8U0QTPXdsWsN52K2AyjLUfLlXAiAPwW35kUQHJsY9apJAybNKLdFE%2FoI4thV3hl3if9wpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM0RuMPXdV1PRO1WjMKtwDeHK%2BpJd%2Bzq7JFwe%2Bk5QXXh8iAU36GCTO26J1VjRsSFq4lPgnq8P3UzIjlY6x7UF%2B0y7PXTOXnwNlxYM73cr91rfOwM7uwX0rzDuR7mA843hryUpkJ4DbvzYZjPtqAw9W2a9lsMDgmnlrJqpRCZzk7n5Ro3GrXcc%2FtWrtkO74zb0Qaq56w3Imwf4lM3SoFSIcUHTLi134zzLtKLqXyUrG6uRM8z3GfxQhJL2jW%2F0xQDo%2FsgjSLuOFvRc8lM0GGmy7pZDnGs1bNhyqQLssrPEGkiyT5QnkvpgkWq1xCLzMgasGo7Omu%2BRZYEdvTPTjff5BRZXt8s5X%2BOWHe6m6B6iFwk3wO0TUJdhOjQfMNvtSc1tr87mY6DJCjbC%2FHHaqC%2BhL4Qh%2B%2FaTo9KgCD%2Bn4VaHSbC5ytoqpsII8gYIey%2F83qzZqDAjTFvG8%2FQfOqPc4CAewY2AhmBpJXlgD4Uqg%2F7PDcqMNFfuzvKooHE5pQN4%2FcegYnuaiJUB2W5abcqCfP%2BsCF8P7NHn50rBCHqsxLwpKL4%2BduIsmV7fuXG1u%2FrMigV8Vuv3fNvlj%2FYXXbZuAbjSBTH5eG%2B6BdOfKOlrMa1SpaMF7FYiySQDhPCJt2K3KwqUm6h1n%2FuopVtCjvlMw%2FsH4xAY6pgGTugyVx%2FcRENNYDUADWEsSu%2BRpE%2BXle9OoxDgnexS%2FSvH0%2FmngcAEArfRIxduQCZVr061iUHicCDNInlcgj0%2Bjrf0dmtZiYyKiNNHFYfiu5kyne79vpq8Jfz1Lb7rwETQK%2F62Zhekad1E7UPuKKWlBv5G1donMgePYnQnKJqpxEfKuyDgaci5Us07Pxd7jMebhmDe6wHGSygZGCLe8Kb9xlBqqV2Hd&X-Amz-Signature=2f3af2680a11577ec41802ce4df17f12db63f3401eef9703800a9dce9bfa114e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
