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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG4WV6UR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDzgokrcc%2Fe6IL7NENVucKTNP5vJj%2FtaQ9GiA8fYOR6pwIhAJkfh6xwVP57J7JFGOJfXLUfGc5xwa%2F5oEsBKBi695o%2FKv8DCF0QABoMNjM3NDIzMTgzODA1Igx%2BKIV3EG%2BLNlDzWYAq3APzB4FeQvic6C%2Bi5T0NkXtOccTAtd51p56Xo6GGRv0tnGN16QYqMxUCoSpEZhvKwLk7MtSXS2CbA%2Fw76fnU07%2FSUYyxA7xR01jBAS6Erukbpku6AGv0k69rD0QqGdkmkfAP9t53hgg%2BTafxQV9C8icu43f7YLw2smxW3qVTunOrV8caa6ByX8%2FXJ4D5mlEEOqUpA%2FGP1pTuEUaDu1nP%2Fr3eTXMFc0ac3enlpd1FZM0Qkh16%2B0Q6BV9Ygepvvq0eVOyKBVADasJNLZrQpApQVTnBZ5VdktdZcPDdjtWFW3blU9eo5WGrtCC%2F%2FnNdptHv%2FmINPJmgun19XTxNZAZUI0N1i6NpMGmTYuA1sWM3q46%2F6YL%2BDP2ATyjzeT%2BmwOhyMxdFVZqOlixOz%2FCAYvwgmMGCWyaoVtliORUSKQrcnL1LB4nm12C1Qiqrs4UJ%2F26GjmMlhb4VPHF4hVHhnKdPHx6IjoC6hmyjK9jjsakrwzItNMDE%2FzYvfr%2BWvrVRva7j58MHtcEWKp3r0aYKV8ZhvvKvQHT6mF49bKo6KJxSRto%2FH8Rq1dpI7LGPCdn8XghAjKVhWJeduybSfm%2FEtkO8CEfqkV94JIVDZALIcVWCxrTJsjRX%2BprUGw1pkf5vGjDbiPy9BjqkAYcRH3qKFjVke%2FMy3GrTnT4AymGoJWWA9%2B1qNm%2FTe0B9Ei9C5SaggUxGmmNldzYjWozI5fkut6rxxI0a2e17r71YceDrV8llIsfATr11wY0Z0fktlOerAyuLgzSBctRAgQBwvZyrX6j0olhndE6ocila2YwSTE13BQNNOn4PSxwlG1tsg7s2M9xBEJMd3dqZJWEoe2eBqylwnx908agD2xsMmzS5&X-Amz-Signature=1cc1733f59c3db1bc256dc69385e40093a6c20c79225d25150d71d08f98b7978&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG4WV6UR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDzgokrcc%2Fe6IL7NENVucKTNP5vJj%2FtaQ9GiA8fYOR6pwIhAJkfh6xwVP57J7JFGOJfXLUfGc5xwa%2F5oEsBKBi695o%2FKv8DCF0QABoMNjM3NDIzMTgzODA1Igx%2BKIV3EG%2BLNlDzWYAq3APzB4FeQvic6C%2Bi5T0NkXtOccTAtd51p56Xo6GGRv0tnGN16QYqMxUCoSpEZhvKwLk7MtSXS2CbA%2Fw76fnU07%2FSUYyxA7xR01jBAS6Erukbpku6AGv0k69rD0QqGdkmkfAP9t53hgg%2BTafxQV9C8icu43f7YLw2smxW3qVTunOrV8caa6ByX8%2FXJ4D5mlEEOqUpA%2FGP1pTuEUaDu1nP%2Fr3eTXMFc0ac3enlpd1FZM0Qkh16%2B0Q6BV9Ygepvvq0eVOyKBVADasJNLZrQpApQVTnBZ5VdktdZcPDdjtWFW3blU9eo5WGrtCC%2F%2FnNdptHv%2FmINPJmgun19XTxNZAZUI0N1i6NpMGmTYuA1sWM3q46%2F6YL%2BDP2ATyjzeT%2BmwOhyMxdFVZqOlixOz%2FCAYvwgmMGCWyaoVtliORUSKQrcnL1LB4nm12C1Qiqrs4UJ%2F26GjmMlhb4VPHF4hVHhnKdPHx6IjoC6hmyjK9jjsakrwzItNMDE%2FzYvfr%2BWvrVRva7j58MHtcEWKp3r0aYKV8ZhvvKvQHT6mF49bKo6KJxSRto%2FH8Rq1dpI7LGPCdn8XghAjKVhWJeduybSfm%2FEtkO8CEfqkV94JIVDZALIcVWCxrTJsjRX%2BprUGw1pkf5vGjDbiPy9BjqkAYcRH3qKFjVke%2FMy3GrTnT4AymGoJWWA9%2B1qNm%2FTe0B9Ei9C5SaggUxGmmNldzYjWozI5fkut6rxxI0a2e17r71YceDrV8llIsfATr11wY0Z0fktlOerAyuLgzSBctRAgQBwvZyrX6j0olhndE6ocila2YwSTE13BQNNOn4PSxwlG1tsg7s2M9xBEJMd3dqZJWEoe2eBqylwnx908agD2xsMmzS5&X-Amz-Signature=e1e5c5240672ec4d011b97c3dfc3582aac205943ab794230464336721ee88d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG4WV6UR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDzgokrcc%2Fe6IL7NENVucKTNP5vJj%2FtaQ9GiA8fYOR6pwIhAJkfh6xwVP57J7JFGOJfXLUfGc5xwa%2F5oEsBKBi695o%2FKv8DCF0QABoMNjM3NDIzMTgzODA1Igx%2BKIV3EG%2BLNlDzWYAq3APzB4FeQvic6C%2Bi5T0NkXtOccTAtd51p56Xo6GGRv0tnGN16QYqMxUCoSpEZhvKwLk7MtSXS2CbA%2Fw76fnU07%2FSUYyxA7xR01jBAS6Erukbpku6AGv0k69rD0QqGdkmkfAP9t53hgg%2BTafxQV9C8icu43f7YLw2smxW3qVTunOrV8caa6ByX8%2FXJ4D5mlEEOqUpA%2FGP1pTuEUaDu1nP%2Fr3eTXMFc0ac3enlpd1FZM0Qkh16%2B0Q6BV9Ygepvvq0eVOyKBVADasJNLZrQpApQVTnBZ5VdktdZcPDdjtWFW3blU9eo5WGrtCC%2F%2FnNdptHv%2FmINPJmgun19XTxNZAZUI0N1i6NpMGmTYuA1sWM3q46%2F6YL%2BDP2ATyjzeT%2BmwOhyMxdFVZqOlixOz%2FCAYvwgmMGCWyaoVtliORUSKQrcnL1LB4nm12C1Qiqrs4UJ%2F26GjmMlhb4VPHF4hVHhnKdPHx6IjoC6hmyjK9jjsakrwzItNMDE%2FzYvfr%2BWvrVRva7j58MHtcEWKp3r0aYKV8ZhvvKvQHT6mF49bKo6KJxSRto%2FH8Rq1dpI7LGPCdn8XghAjKVhWJeduybSfm%2FEtkO8CEfqkV94JIVDZALIcVWCxrTJsjRX%2BprUGw1pkf5vGjDbiPy9BjqkAYcRH3qKFjVke%2FMy3GrTnT4AymGoJWWA9%2B1qNm%2FTe0B9Ei9C5SaggUxGmmNldzYjWozI5fkut6rxxI0a2e17r71YceDrV8llIsfATr11wY0Z0fktlOerAyuLgzSBctRAgQBwvZyrX6j0olhndE6ocila2YwSTE13BQNNOn4PSxwlG1tsg7s2M9xBEJMd3dqZJWEoe2eBqylwnx908agD2xsMmzS5&X-Amz-Signature=466a231441a1f4149cbbad68bc1afedf3574ae7052191bb671bd3abe8420a802&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG4WV6UR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDzgokrcc%2Fe6IL7NENVucKTNP5vJj%2FtaQ9GiA8fYOR6pwIhAJkfh6xwVP57J7JFGOJfXLUfGc5xwa%2F5oEsBKBi695o%2FKv8DCF0QABoMNjM3NDIzMTgzODA1Igx%2BKIV3EG%2BLNlDzWYAq3APzB4FeQvic6C%2Bi5T0NkXtOccTAtd51p56Xo6GGRv0tnGN16QYqMxUCoSpEZhvKwLk7MtSXS2CbA%2Fw76fnU07%2FSUYyxA7xR01jBAS6Erukbpku6AGv0k69rD0QqGdkmkfAP9t53hgg%2BTafxQV9C8icu43f7YLw2smxW3qVTunOrV8caa6ByX8%2FXJ4D5mlEEOqUpA%2FGP1pTuEUaDu1nP%2Fr3eTXMFc0ac3enlpd1FZM0Qkh16%2B0Q6BV9Ygepvvq0eVOyKBVADasJNLZrQpApQVTnBZ5VdktdZcPDdjtWFW3blU9eo5WGrtCC%2F%2FnNdptHv%2FmINPJmgun19XTxNZAZUI0N1i6NpMGmTYuA1sWM3q46%2F6YL%2BDP2ATyjzeT%2BmwOhyMxdFVZqOlixOz%2FCAYvwgmMGCWyaoVtliORUSKQrcnL1LB4nm12C1Qiqrs4UJ%2F26GjmMlhb4VPHF4hVHhnKdPHx6IjoC6hmyjK9jjsakrwzItNMDE%2FzYvfr%2BWvrVRva7j58MHtcEWKp3r0aYKV8ZhvvKvQHT6mF49bKo6KJxSRto%2FH8Rq1dpI7LGPCdn8XghAjKVhWJeduybSfm%2FEtkO8CEfqkV94JIVDZALIcVWCxrTJsjRX%2BprUGw1pkf5vGjDbiPy9BjqkAYcRH3qKFjVke%2FMy3GrTnT4AymGoJWWA9%2B1qNm%2FTe0B9Ei9C5SaggUxGmmNldzYjWozI5fkut6rxxI0a2e17r71YceDrV8llIsfATr11wY0Z0fktlOerAyuLgzSBctRAgQBwvZyrX6j0olhndE6ocila2YwSTE13BQNNOn4PSxwlG1tsg7s2M9xBEJMd3dqZJWEoe2eBqylwnx908agD2xsMmzS5&X-Amz-Signature=465e93f6cf9c40413ff744dc2b513421f383d3ea65d905c6f700131806cbb453&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG4WV6UR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDzgokrcc%2Fe6IL7NENVucKTNP5vJj%2FtaQ9GiA8fYOR6pwIhAJkfh6xwVP57J7JFGOJfXLUfGc5xwa%2F5oEsBKBi695o%2FKv8DCF0QABoMNjM3NDIzMTgzODA1Igx%2BKIV3EG%2BLNlDzWYAq3APzB4FeQvic6C%2Bi5T0NkXtOccTAtd51p56Xo6GGRv0tnGN16QYqMxUCoSpEZhvKwLk7MtSXS2CbA%2Fw76fnU07%2FSUYyxA7xR01jBAS6Erukbpku6AGv0k69rD0QqGdkmkfAP9t53hgg%2BTafxQV9C8icu43f7YLw2smxW3qVTunOrV8caa6ByX8%2FXJ4D5mlEEOqUpA%2FGP1pTuEUaDu1nP%2Fr3eTXMFc0ac3enlpd1FZM0Qkh16%2B0Q6BV9Ygepvvq0eVOyKBVADasJNLZrQpApQVTnBZ5VdktdZcPDdjtWFW3blU9eo5WGrtCC%2F%2FnNdptHv%2FmINPJmgun19XTxNZAZUI0N1i6NpMGmTYuA1sWM3q46%2F6YL%2BDP2ATyjzeT%2BmwOhyMxdFVZqOlixOz%2FCAYvwgmMGCWyaoVtliORUSKQrcnL1LB4nm12C1Qiqrs4UJ%2F26GjmMlhb4VPHF4hVHhnKdPHx6IjoC6hmyjK9jjsakrwzItNMDE%2FzYvfr%2BWvrVRva7j58MHtcEWKp3r0aYKV8ZhvvKvQHT6mF49bKo6KJxSRto%2FH8Rq1dpI7LGPCdn8XghAjKVhWJeduybSfm%2FEtkO8CEfqkV94JIVDZALIcVWCxrTJsjRX%2BprUGw1pkf5vGjDbiPy9BjqkAYcRH3qKFjVke%2FMy3GrTnT4AymGoJWWA9%2B1qNm%2FTe0B9Ei9C5SaggUxGmmNldzYjWozI5fkut6rxxI0a2e17r71YceDrV8llIsfATr11wY0Z0fktlOerAyuLgzSBctRAgQBwvZyrX6j0olhndE6ocila2YwSTE13BQNNOn4PSxwlG1tsg7s2M9xBEJMd3dqZJWEoe2eBqylwnx908agD2xsMmzS5&X-Amz-Signature=71d4f38c7386788813dadd9ae32c6d605c682091185f8e379eef3610d3e668e0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG4WV6UR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDzgokrcc%2Fe6IL7NENVucKTNP5vJj%2FtaQ9GiA8fYOR6pwIhAJkfh6xwVP57J7JFGOJfXLUfGc5xwa%2F5oEsBKBi695o%2FKv8DCF0QABoMNjM3NDIzMTgzODA1Igx%2BKIV3EG%2BLNlDzWYAq3APzB4FeQvic6C%2Bi5T0NkXtOccTAtd51p56Xo6GGRv0tnGN16QYqMxUCoSpEZhvKwLk7MtSXS2CbA%2Fw76fnU07%2FSUYyxA7xR01jBAS6Erukbpku6AGv0k69rD0QqGdkmkfAP9t53hgg%2BTafxQV9C8icu43f7YLw2smxW3qVTunOrV8caa6ByX8%2FXJ4D5mlEEOqUpA%2FGP1pTuEUaDu1nP%2Fr3eTXMFc0ac3enlpd1FZM0Qkh16%2B0Q6BV9Ygepvvq0eVOyKBVADasJNLZrQpApQVTnBZ5VdktdZcPDdjtWFW3blU9eo5WGrtCC%2F%2FnNdptHv%2FmINPJmgun19XTxNZAZUI0N1i6NpMGmTYuA1sWM3q46%2F6YL%2BDP2ATyjzeT%2BmwOhyMxdFVZqOlixOz%2FCAYvwgmMGCWyaoVtliORUSKQrcnL1LB4nm12C1Qiqrs4UJ%2F26GjmMlhb4VPHF4hVHhnKdPHx6IjoC6hmyjK9jjsakrwzItNMDE%2FzYvfr%2BWvrVRva7j58MHtcEWKp3r0aYKV8ZhvvKvQHT6mF49bKo6KJxSRto%2FH8Rq1dpI7LGPCdn8XghAjKVhWJeduybSfm%2FEtkO8CEfqkV94JIVDZALIcVWCxrTJsjRX%2BprUGw1pkf5vGjDbiPy9BjqkAYcRH3qKFjVke%2FMy3GrTnT4AymGoJWWA9%2B1qNm%2FTe0B9Ei9C5SaggUxGmmNldzYjWozI5fkut6rxxI0a2e17r71YceDrV8llIsfATr11wY0Z0fktlOerAyuLgzSBctRAgQBwvZyrX6j0olhndE6ocila2YwSTE13BQNNOn4PSxwlG1tsg7s2M9xBEJMd3dqZJWEoe2eBqylwnx908agD2xsMmzS5&X-Amz-Signature=a66737bc712ee43d5e755b7fa5284b6ec9143ac6fa5644bfe50fd9159c1a1d53&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG4WV6UR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDzgokrcc%2Fe6IL7NENVucKTNP5vJj%2FtaQ9GiA8fYOR6pwIhAJkfh6xwVP57J7JFGOJfXLUfGc5xwa%2F5oEsBKBi695o%2FKv8DCF0QABoMNjM3NDIzMTgzODA1Igx%2BKIV3EG%2BLNlDzWYAq3APzB4FeQvic6C%2Bi5T0NkXtOccTAtd51p56Xo6GGRv0tnGN16QYqMxUCoSpEZhvKwLk7MtSXS2CbA%2Fw76fnU07%2FSUYyxA7xR01jBAS6Erukbpku6AGv0k69rD0QqGdkmkfAP9t53hgg%2BTafxQV9C8icu43f7YLw2smxW3qVTunOrV8caa6ByX8%2FXJ4D5mlEEOqUpA%2FGP1pTuEUaDu1nP%2Fr3eTXMFc0ac3enlpd1FZM0Qkh16%2B0Q6BV9Ygepvvq0eVOyKBVADasJNLZrQpApQVTnBZ5VdktdZcPDdjtWFW3blU9eo5WGrtCC%2F%2FnNdptHv%2FmINPJmgun19XTxNZAZUI0N1i6NpMGmTYuA1sWM3q46%2F6YL%2BDP2ATyjzeT%2BmwOhyMxdFVZqOlixOz%2FCAYvwgmMGCWyaoVtliORUSKQrcnL1LB4nm12C1Qiqrs4UJ%2F26GjmMlhb4VPHF4hVHhnKdPHx6IjoC6hmyjK9jjsakrwzItNMDE%2FzYvfr%2BWvrVRva7j58MHtcEWKp3r0aYKV8ZhvvKvQHT6mF49bKo6KJxSRto%2FH8Rq1dpI7LGPCdn8XghAjKVhWJeduybSfm%2FEtkO8CEfqkV94JIVDZALIcVWCxrTJsjRX%2BprUGw1pkf5vGjDbiPy9BjqkAYcRH3qKFjVke%2FMy3GrTnT4AymGoJWWA9%2B1qNm%2FTe0B9Ei9C5SaggUxGmmNldzYjWozI5fkut6rxxI0a2e17r71YceDrV8llIsfATr11wY0Z0fktlOerAyuLgzSBctRAgQBwvZyrX6j0olhndE6ocila2YwSTE13BQNNOn4PSxwlG1tsg7s2M9xBEJMd3dqZJWEoe2eBqylwnx908agD2xsMmzS5&X-Amz-Signature=7f75924ad7f445818dc6e76e9bc9b702e0e4332ec500933461d92cd10df87cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
