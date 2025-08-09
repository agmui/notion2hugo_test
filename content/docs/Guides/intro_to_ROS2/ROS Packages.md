---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGNXADW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCIA9G58Jk4hVJUlaufWsfA6VrgRwDKh%2BX%2BFY1XhNlatgIhAIVbH04Duh%2BHejNObxMafsb9QlffcZ4HZo5syNTy8ULrKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMPGNGjKqUfWuac68q3AOugQ9WdO8agZIV1tM0plzD941GKDc4BtZuJSR6DANJY8M56xaKaX7DMBXbqcwc9dol0wfYsJPRkvvSAdqjH2QbulrMVw4SvGjP6D5RQuxhgozh5DQ%2FzwJPmq4tTZXRLc1iuTj9jUcoOn7r%2FiTIAyzRMHJIbtZuCUnZ6HIdZRcgMmyPX%2BAHfZ65089GxCz2AGiNpess6ryjgzg5MllHqDFgN5j1LGBcd5ReEcNHz9Cydu%2BJUDoCBrFDsB4Aozn2eyBI%2FHG2Y7wqHknUX5op6GGp%2BW%2BqKHlata%2Bj0c6qPUNiSw2EaonaPflCnw%2FY%2FrRAORqZP3YndwEQTSIYI9O4A0eFElRmZrk7J0WVlprt91t0e4sJ9mYVShHq23Js0aV3ZzBL684jcG%2B2QT8Gyu6JaC5K3HLJvN2Y08j5bIj2x19%2Fr31MzdJXoGr69lPWQwRJIThpeZMaTEKptg%2FHr6az8BbMc3gf1CG2N9rkfn3jeWkbNr0hPfA3ccXfNqKw0whdtq0OdL0KULk7U7Br5p5f6Z5wQ2GepGn1htQNp9mOiD15idwWVZ%2FApW4CLUGdQIgOWLME4a5n372hFCtoAT1MGtX81JVg7VHxesuc7VCEMl9BakW6SDoW0GPiUve3BjC1xNvEBjqkASTuo5BuRnXLFiqMAzKZOZOhV%2FqtULUEn%2BJtEnLoX5nnIqU%2FfUnW3o3%2FkKGfd9FOd3MbPfqcUegsYm5PZbY2bDSWl06LDbwgvl789Qct0lJo2kSu%2F%2Fv9KuY%2FjbwmMbPp0qMJaLpHWSLUptsEEpragp9oAtKTlm1F7kmAIoQmZyZhM5bt%2F2y3TJufVKDf8VcnxAAdBSqBPKNgMctUzpea411%2BLBQB&X-Amz-Signature=7ddfeb227a8eb0f2c436aa7928cdaf37d19d00ff7355cc3994586cdc2ab0f106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGNXADW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCIA9G58Jk4hVJUlaufWsfA6VrgRwDKh%2BX%2BFY1XhNlatgIhAIVbH04Duh%2BHejNObxMafsb9QlffcZ4HZo5syNTy8ULrKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMPGNGjKqUfWuac68q3AOugQ9WdO8agZIV1tM0plzD941GKDc4BtZuJSR6DANJY8M56xaKaX7DMBXbqcwc9dol0wfYsJPRkvvSAdqjH2QbulrMVw4SvGjP6D5RQuxhgozh5DQ%2FzwJPmq4tTZXRLc1iuTj9jUcoOn7r%2FiTIAyzRMHJIbtZuCUnZ6HIdZRcgMmyPX%2BAHfZ65089GxCz2AGiNpess6ryjgzg5MllHqDFgN5j1LGBcd5ReEcNHz9Cydu%2BJUDoCBrFDsB4Aozn2eyBI%2FHG2Y7wqHknUX5op6GGp%2BW%2BqKHlata%2Bj0c6qPUNiSw2EaonaPflCnw%2FY%2FrRAORqZP3YndwEQTSIYI9O4A0eFElRmZrk7J0WVlprt91t0e4sJ9mYVShHq23Js0aV3ZzBL684jcG%2B2QT8Gyu6JaC5K3HLJvN2Y08j5bIj2x19%2Fr31MzdJXoGr69lPWQwRJIThpeZMaTEKptg%2FHr6az8BbMc3gf1CG2N9rkfn3jeWkbNr0hPfA3ccXfNqKw0whdtq0OdL0KULk7U7Br5p5f6Z5wQ2GepGn1htQNp9mOiD15idwWVZ%2FApW4CLUGdQIgOWLME4a5n372hFCtoAT1MGtX81JVg7VHxesuc7VCEMl9BakW6SDoW0GPiUve3BjC1xNvEBjqkASTuo5BuRnXLFiqMAzKZOZOhV%2FqtULUEn%2BJtEnLoX5nnIqU%2FfUnW3o3%2FkKGfd9FOd3MbPfqcUegsYm5PZbY2bDSWl06LDbwgvl789Qct0lJo2kSu%2F%2Fv9KuY%2FjbwmMbPp0qMJaLpHWSLUptsEEpragp9oAtKTlm1F7kmAIoQmZyZhM5bt%2F2y3TJufVKDf8VcnxAAdBSqBPKNgMctUzpea411%2BLBQB&X-Amz-Signature=cd4cd403a1cdd9b519ae7a062c3ac7904b0bb8ad78507c2a315f20e135aa1aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGNXADW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCIA9G58Jk4hVJUlaufWsfA6VrgRwDKh%2BX%2BFY1XhNlatgIhAIVbH04Duh%2BHejNObxMafsb9QlffcZ4HZo5syNTy8ULrKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMPGNGjKqUfWuac68q3AOugQ9WdO8agZIV1tM0plzD941GKDc4BtZuJSR6DANJY8M56xaKaX7DMBXbqcwc9dol0wfYsJPRkvvSAdqjH2QbulrMVw4SvGjP6D5RQuxhgozh5DQ%2FzwJPmq4tTZXRLc1iuTj9jUcoOn7r%2FiTIAyzRMHJIbtZuCUnZ6HIdZRcgMmyPX%2BAHfZ65089GxCz2AGiNpess6ryjgzg5MllHqDFgN5j1LGBcd5ReEcNHz9Cydu%2BJUDoCBrFDsB4Aozn2eyBI%2FHG2Y7wqHknUX5op6GGp%2BW%2BqKHlata%2Bj0c6qPUNiSw2EaonaPflCnw%2FY%2FrRAORqZP3YndwEQTSIYI9O4A0eFElRmZrk7J0WVlprt91t0e4sJ9mYVShHq23Js0aV3ZzBL684jcG%2B2QT8Gyu6JaC5K3HLJvN2Y08j5bIj2x19%2Fr31MzdJXoGr69lPWQwRJIThpeZMaTEKptg%2FHr6az8BbMc3gf1CG2N9rkfn3jeWkbNr0hPfA3ccXfNqKw0whdtq0OdL0KULk7U7Br5p5f6Z5wQ2GepGn1htQNp9mOiD15idwWVZ%2FApW4CLUGdQIgOWLME4a5n372hFCtoAT1MGtX81JVg7VHxesuc7VCEMl9BakW6SDoW0GPiUve3BjC1xNvEBjqkASTuo5BuRnXLFiqMAzKZOZOhV%2FqtULUEn%2BJtEnLoX5nnIqU%2FfUnW3o3%2FkKGfd9FOd3MbPfqcUegsYm5PZbY2bDSWl06LDbwgvl789Qct0lJo2kSu%2F%2Fv9KuY%2FjbwmMbPp0qMJaLpHWSLUptsEEpragp9oAtKTlm1F7kmAIoQmZyZhM5bt%2F2y3TJufVKDf8VcnxAAdBSqBPKNgMctUzpea411%2BLBQB&X-Amz-Signature=1e1f8f5d0fc5bea39b253462f3e77f28f655be23bf2196d851c2bfb5b94e6499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGNXADW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCIA9G58Jk4hVJUlaufWsfA6VrgRwDKh%2BX%2BFY1XhNlatgIhAIVbH04Duh%2BHejNObxMafsb9QlffcZ4HZo5syNTy8ULrKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMPGNGjKqUfWuac68q3AOugQ9WdO8agZIV1tM0plzD941GKDc4BtZuJSR6DANJY8M56xaKaX7DMBXbqcwc9dol0wfYsJPRkvvSAdqjH2QbulrMVw4SvGjP6D5RQuxhgozh5DQ%2FzwJPmq4tTZXRLc1iuTj9jUcoOn7r%2FiTIAyzRMHJIbtZuCUnZ6HIdZRcgMmyPX%2BAHfZ65089GxCz2AGiNpess6ryjgzg5MllHqDFgN5j1LGBcd5ReEcNHz9Cydu%2BJUDoCBrFDsB4Aozn2eyBI%2FHG2Y7wqHknUX5op6GGp%2BW%2BqKHlata%2Bj0c6qPUNiSw2EaonaPflCnw%2FY%2FrRAORqZP3YndwEQTSIYI9O4A0eFElRmZrk7J0WVlprt91t0e4sJ9mYVShHq23Js0aV3ZzBL684jcG%2B2QT8Gyu6JaC5K3HLJvN2Y08j5bIj2x19%2Fr31MzdJXoGr69lPWQwRJIThpeZMaTEKptg%2FHr6az8BbMc3gf1CG2N9rkfn3jeWkbNr0hPfA3ccXfNqKw0whdtq0OdL0KULk7U7Br5p5f6Z5wQ2GepGn1htQNp9mOiD15idwWVZ%2FApW4CLUGdQIgOWLME4a5n372hFCtoAT1MGtX81JVg7VHxesuc7VCEMl9BakW6SDoW0GPiUve3BjC1xNvEBjqkASTuo5BuRnXLFiqMAzKZOZOhV%2FqtULUEn%2BJtEnLoX5nnIqU%2FfUnW3o3%2FkKGfd9FOd3MbPfqcUegsYm5PZbY2bDSWl06LDbwgvl789Qct0lJo2kSu%2F%2Fv9KuY%2FjbwmMbPp0qMJaLpHWSLUptsEEpragp9oAtKTlm1F7kmAIoQmZyZhM5bt%2F2y3TJufVKDf8VcnxAAdBSqBPKNgMctUzpea411%2BLBQB&X-Amz-Signature=c30caf8559d31ebc816580c07b06d498e4a95c5b7b8c2b21ea813eb925444b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGNXADW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCIA9G58Jk4hVJUlaufWsfA6VrgRwDKh%2BX%2BFY1XhNlatgIhAIVbH04Duh%2BHejNObxMafsb9QlffcZ4HZo5syNTy8ULrKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMPGNGjKqUfWuac68q3AOugQ9WdO8agZIV1tM0plzD941GKDc4BtZuJSR6DANJY8M56xaKaX7DMBXbqcwc9dol0wfYsJPRkvvSAdqjH2QbulrMVw4SvGjP6D5RQuxhgozh5DQ%2FzwJPmq4tTZXRLc1iuTj9jUcoOn7r%2FiTIAyzRMHJIbtZuCUnZ6HIdZRcgMmyPX%2BAHfZ65089GxCz2AGiNpess6ryjgzg5MllHqDFgN5j1LGBcd5ReEcNHz9Cydu%2BJUDoCBrFDsB4Aozn2eyBI%2FHG2Y7wqHknUX5op6GGp%2BW%2BqKHlata%2Bj0c6qPUNiSw2EaonaPflCnw%2FY%2FrRAORqZP3YndwEQTSIYI9O4A0eFElRmZrk7J0WVlprt91t0e4sJ9mYVShHq23Js0aV3ZzBL684jcG%2B2QT8Gyu6JaC5K3HLJvN2Y08j5bIj2x19%2Fr31MzdJXoGr69lPWQwRJIThpeZMaTEKptg%2FHr6az8BbMc3gf1CG2N9rkfn3jeWkbNr0hPfA3ccXfNqKw0whdtq0OdL0KULk7U7Br5p5f6Z5wQ2GepGn1htQNp9mOiD15idwWVZ%2FApW4CLUGdQIgOWLME4a5n372hFCtoAT1MGtX81JVg7VHxesuc7VCEMl9BakW6SDoW0GPiUve3BjC1xNvEBjqkASTuo5BuRnXLFiqMAzKZOZOhV%2FqtULUEn%2BJtEnLoX5nnIqU%2FfUnW3o3%2FkKGfd9FOd3MbPfqcUegsYm5PZbY2bDSWl06LDbwgvl789Qct0lJo2kSu%2F%2Fv9KuY%2FjbwmMbPp0qMJaLpHWSLUptsEEpragp9oAtKTlm1F7kmAIoQmZyZhM5bt%2F2y3TJufVKDf8VcnxAAdBSqBPKNgMctUzpea411%2BLBQB&X-Amz-Signature=4e595e2557f26dcbf526087d44ab59d6c72106a2472f685f15554e1f37cead69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGNXADW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCIA9G58Jk4hVJUlaufWsfA6VrgRwDKh%2BX%2BFY1XhNlatgIhAIVbH04Duh%2BHejNObxMafsb9QlffcZ4HZo5syNTy8ULrKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMPGNGjKqUfWuac68q3AOugQ9WdO8agZIV1tM0plzD941GKDc4BtZuJSR6DANJY8M56xaKaX7DMBXbqcwc9dol0wfYsJPRkvvSAdqjH2QbulrMVw4SvGjP6D5RQuxhgozh5DQ%2FzwJPmq4tTZXRLc1iuTj9jUcoOn7r%2FiTIAyzRMHJIbtZuCUnZ6HIdZRcgMmyPX%2BAHfZ65089GxCz2AGiNpess6ryjgzg5MllHqDFgN5j1LGBcd5ReEcNHz9Cydu%2BJUDoCBrFDsB4Aozn2eyBI%2FHG2Y7wqHknUX5op6GGp%2BW%2BqKHlata%2Bj0c6qPUNiSw2EaonaPflCnw%2FY%2FrRAORqZP3YndwEQTSIYI9O4A0eFElRmZrk7J0WVlprt91t0e4sJ9mYVShHq23Js0aV3ZzBL684jcG%2B2QT8Gyu6JaC5K3HLJvN2Y08j5bIj2x19%2Fr31MzdJXoGr69lPWQwRJIThpeZMaTEKptg%2FHr6az8BbMc3gf1CG2N9rkfn3jeWkbNr0hPfA3ccXfNqKw0whdtq0OdL0KULk7U7Br5p5f6Z5wQ2GepGn1htQNp9mOiD15idwWVZ%2FApW4CLUGdQIgOWLME4a5n372hFCtoAT1MGtX81JVg7VHxesuc7VCEMl9BakW6SDoW0GPiUve3BjC1xNvEBjqkASTuo5BuRnXLFiqMAzKZOZOhV%2FqtULUEn%2BJtEnLoX5nnIqU%2FfUnW3o3%2FkKGfd9FOd3MbPfqcUegsYm5PZbY2bDSWl06LDbwgvl789Qct0lJo2kSu%2F%2Fv9KuY%2FjbwmMbPp0qMJaLpHWSLUptsEEpragp9oAtKTlm1F7kmAIoQmZyZhM5bt%2F2y3TJufVKDf8VcnxAAdBSqBPKNgMctUzpea411%2BLBQB&X-Amz-Signature=e08a8cbb951367662ef6dd6b9e85d1d89cad80e81119f319cc4e0002c9ce2840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGNXADW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCIA9G58Jk4hVJUlaufWsfA6VrgRwDKh%2BX%2BFY1XhNlatgIhAIVbH04Duh%2BHejNObxMafsb9QlffcZ4HZo5syNTy8ULrKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMPGNGjKqUfWuac68q3AOugQ9WdO8agZIV1tM0plzD941GKDc4BtZuJSR6DANJY8M56xaKaX7DMBXbqcwc9dol0wfYsJPRkvvSAdqjH2QbulrMVw4SvGjP6D5RQuxhgozh5DQ%2FzwJPmq4tTZXRLc1iuTj9jUcoOn7r%2FiTIAyzRMHJIbtZuCUnZ6HIdZRcgMmyPX%2BAHfZ65089GxCz2AGiNpess6ryjgzg5MllHqDFgN5j1LGBcd5ReEcNHz9Cydu%2BJUDoCBrFDsB4Aozn2eyBI%2FHG2Y7wqHknUX5op6GGp%2BW%2BqKHlata%2Bj0c6qPUNiSw2EaonaPflCnw%2FY%2FrRAORqZP3YndwEQTSIYI9O4A0eFElRmZrk7J0WVlprt91t0e4sJ9mYVShHq23Js0aV3ZzBL684jcG%2B2QT8Gyu6JaC5K3HLJvN2Y08j5bIj2x19%2Fr31MzdJXoGr69lPWQwRJIThpeZMaTEKptg%2FHr6az8BbMc3gf1CG2N9rkfn3jeWkbNr0hPfA3ccXfNqKw0whdtq0OdL0KULk7U7Br5p5f6Z5wQ2GepGn1htQNp9mOiD15idwWVZ%2FApW4CLUGdQIgOWLME4a5n372hFCtoAT1MGtX81JVg7VHxesuc7VCEMl9BakW6SDoW0GPiUve3BjC1xNvEBjqkASTuo5BuRnXLFiqMAzKZOZOhV%2FqtULUEn%2BJtEnLoX5nnIqU%2FfUnW3o3%2FkKGfd9FOd3MbPfqcUegsYm5PZbY2bDSWl06LDbwgvl789Qct0lJo2kSu%2F%2Fv9KuY%2FjbwmMbPp0qMJaLpHWSLUptsEEpragp9oAtKTlm1F7kmAIoQmZyZhM5bt%2F2y3TJufVKDf8VcnxAAdBSqBPKNgMctUzpea411%2BLBQB&X-Amz-Signature=d61426b957b7f7105e44dc65d8c66f2e516c4767bfbcbfa948aec054fa9df669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
