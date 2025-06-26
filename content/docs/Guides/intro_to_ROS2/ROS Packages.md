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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKIA5JD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDbXtgmy8mSTISp%2Bet%2BOaWuRME10p%2Fw3vWs3bpTd4%2FE3AiBJogeb3Pzl%2BkpXDZhbyqaXJHpxTjxiFIjMfh528d7X3yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMOvCq1%2F45Jy5IhPOSKtwDAtB5z121RWpSMlsWnWnOpaVaqGlmhlVIlOeL2xHlE34VacKfa76BOmumfQBmcFYiMhZUVWL91SYO7lUJcFZwmexAvM2rCSjoZWtZbVJKLmdTP%2BpJyzGs%2FfkAXWmKI5Dz2LV22WZpVftYUy8ZKdNQ7fv%2BLMnrfIlNTEhE1cOMDh7QP80wdaTzea2v9YnoZO%2FzjTwNwB%2BMTCgJ3Kmh7VJ5OD%2FUoDZxqKMXXbZBHEeF8Z8Irh%2FvGjwiLSqGJYCcn2KVrK1W%2Fyo0SB7eKXcVipgpoLSaGLTV%2FaVyzXsnyhg7Nxs1UZJnK6uD548G2TzuixdQn75ZVJ5MxFFEYv3U%2FnWWW3159%2F7AgWH0M3FsmBI2N6XLEAg6BR6fcYh9Ohs1U1s87Z0TsTcdqFEuoFQ8WGgYML%2Bh5z9WgmLRgcHvZH0OWU9lXxt2LcJsQFdLJqqx%2Btl1oI81rnh4W1Lw52c%2F2xVi%2Bau5OysTEyBh4VQ10Zfqz7HH6Jz%2BUVq%2FhMIaRIXNkA%2BOcCyCDrsTwRW0GrBqkRAbrV16FENty1acj6nTWTE8wSWgiLwIMAsWjQMhhk24b9sGLpF8vRYfiaFGsqEmvAgUEIk9bZuLxlM6vt8qmw2VqGBftrsURQEA397DABMwopb0wgY6pgGAxOkAg6aV0eD23ogfDMp6tXwqmQRQXdJjnFO5dD9ZU2f5sUFfMHaikwLcDy491THnhAAYid9NgYjN6PvXQW3TubW%2FgjtAz5drEohdL%2B9yn%2FkxTQFMmrlGpK5xcmp00B2S%2FMrL1PCU1FtZx%2FUUasu9%2BDcrRxEt0yb1qPO44DN1W0nnX9SCrr3FAIV5ZJMovTcnbMCgKLKMZymk0SDzMqb7gY2KkqDV&X-Amz-Signature=5ba7dd8a6f7e766d8983ad1ae3b2a9f0c8ae967e41b2464851194d888626b213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKIA5JD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDbXtgmy8mSTISp%2Bet%2BOaWuRME10p%2Fw3vWs3bpTd4%2FE3AiBJogeb3Pzl%2BkpXDZhbyqaXJHpxTjxiFIjMfh528d7X3yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMOvCq1%2F45Jy5IhPOSKtwDAtB5z121RWpSMlsWnWnOpaVaqGlmhlVIlOeL2xHlE34VacKfa76BOmumfQBmcFYiMhZUVWL91SYO7lUJcFZwmexAvM2rCSjoZWtZbVJKLmdTP%2BpJyzGs%2FfkAXWmKI5Dz2LV22WZpVftYUy8ZKdNQ7fv%2BLMnrfIlNTEhE1cOMDh7QP80wdaTzea2v9YnoZO%2FzjTwNwB%2BMTCgJ3Kmh7VJ5OD%2FUoDZxqKMXXbZBHEeF8Z8Irh%2FvGjwiLSqGJYCcn2KVrK1W%2Fyo0SB7eKXcVipgpoLSaGLTV%2FaVyzXsnyhg7Nxs1UZJnK6uD548G2TzuixdQn75ZVJ5MxFFEYv3U%2FnWWW3159%2F7AgWH0M3FsmBI2N6XLEAg6BR6fcYh9Ohs1U1s87Z0TsTcdqFEuoFQ8WGgYML%2Bh5z9WgmLRgcHvZH0OWU9lXxt2LcJsQFdLJqqx%2Btl1oI81rnh4W1Lw52c%2F2xVi%2Bau5OysTEyBh4VQ10Zfqz7HH6Jz%2BUVq%2FhMIaRIXNkA%2BOcCyCDrsTwRW0GrBqkRAbrV16FENty1acj6nTWTE8wSWgiLwIMAsWjQMhhk24b9sGLpF8vRYfiaFGsqEmvAgUEIk9bZuLxlM6vt8qmw2VqGBftrsURQEA397DABMwopb0wgY6pgGAxOkAg6aV0eD23ogfDMp6tXwqmQRQXdJjnFO5dD9ZU2f5sUFfMHaikwLcDy491THnhAAYid9NgYjN6PvXQW3TubW%2FgjtAz5drEohdL%2B9yn%2FkxTQFMmrlGpK5xcmp00B2S%2FMrL1PCU1FtZx%2FUUasu9%2BDcrRxEt0yb1qPO44DN1W0nnX9SCrr3FAIV5ZJMovTcnbMCgKLKMZymk0SDzMqb7gY2KkqDV&X-Amz-Signature=3aa965a23b762077562b782c221c540ae30f64f1ffd8970cc063701f9c03373a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKIA5JD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDbXtgmy8mSTISp%2Bet%2BOaWuRME10p%2Fw3vWs3bpTd4%2FE3AiBJogeb3Pzl%2BkpXDZhbyqaXJHpxTjxiFIjMfh528d7X3yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMOvCq1%2F45Jy5IhPOSKtwDAtB5z121RWpSMlsWnWnOpaVaqGlmhlVIlOeL2xHlE34VacKfa76BOmumfQBmcFYiMhZUVWL91SYO7lUJcFZwmexAvM2rCSjoZWtZbVJKLmdTP%2BpJyzGs%2FfkAXWmKI5Dz2LV22WZpVftYUy8ZKdNQ7fv%2BLMnrfIlNTEhE1cOMDh7QP80wdaTzea2v9YnoZO%2FzjTwNwB%2BMTCgJ3Kmh7VJ5OD%2FUoDZxqKMXXbZBHEeF8Z8Irh%2FvGjwiLSqGJYCcn2KVrK1W%2Fyo0SB7eKXcVipgpoLSaGLTV%2FaVyzXsnyhg7Nxs1UZJnK6uD548G2TzuixdQn75ZVJ5MxFFEYv3U%2FnWWW3159%2F7AgWH0M3FsmBI2N6XLEAg6BR6fcYh9Ohs1U1s87Z0TsTcdqFEuoFQ8WGgYML%2Bh5z9WgmLRgcHvZH0OWU9lXxt2LcJsQFdLJqqx%2Btl1oI81rnh4W1Lw52c%2F2xVi%2Bau5OysTEyBh4VQ10Zfqz7HH6Jz%2BUVq%2FhMIaRIXNkA%2BOcCyCDrsTwRW0GrBqkRAbrV16FENty1acj6nTWTE8wSWgiLwIMAsWjQMhhk24b9sGLpF8vRYfiaFGsqEmvAgUEIk9bZuLxlM6vt8qmw2VqGBftrsURQEA397DABMwopb0wgY6pgGAxOkAg6aV0eD23ogfDMp6tXwqmQRQXdJjnFO5dD9ZU2f5sUFfMHaikwLcDy491THnhAAYid9NgYjN6PvXQW3TubW%2FgjtAz5drEohdL%2B9yn%2FkxTQFMmrlGpK5xcmp00B2S%2FMrL1PCU1FtZx%2FUUasu9%2BDcrRxEt0yb1qPO44DN1W0nnX9SCrr3FAIV5ZJMovTcnbMCgKLKMZymk0SDzMqb7gY2KkqDV&X-Amz-Signature=3a6f8ce3efdd7648ea7839c8312b575bd651c8116a07b7ba4852a2d1f1e30cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKIA5JD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDbXtgmy8mSTISp%2Bet%2BOaWuRME10p%2Fw3vWs3bpTd4%2FE3AiBJogeb3Pzl%2BkpXDZhbyqaXJHpxTjxiFIjMfh528d7X3yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMOvCq1%2F45Jy5IhPOSKtwDAtB5z121RWpSMlsWnWnOpaVaqGlmhlVIlOeL2xHlE34VacKfa76BOmumfQBmcFYiMhZUVWL91SYO7lUJcFZwmexAvM2rCSjoZWtZbVJKLmdTP%2BpJyzGs%2FfkAXWmKI5Dz2LV22WZpVftYUy8ZKdNQ7fv%2BLMnrfIlNTEhE1cOMDh7QP80wdaTzea2v9YnoZO%2FzjTwNwB%2BMTCgJ3Kmh7VJ5OD%2FUoDZxqKMXXbZBHEeF8Z8Irh%2FvGjwiLSqGJYCcn2KVrK1W%2Fyo0SB7eKXcVipgpoLSaGLTV%2FaVyzXsnyhg7Nxs1UZJnK6uD548G2TzuixdQn75ZVJ5MxFFEYv3U%2FnWWW3159%2F7AgWH0M3FsmBI2N6XLEAg6BR6fcYh9Ohs1U1s87Z0TsTcdqFEuoFQ8WGgYML%2Bh5z9WgmLRgcHvZH0OWU9lXxt2LcJsQFdLJqqx%2Btl1oI81rnh4W1Lw52c%2F2xVi%2Bau5OysTEyBh4VQ10Zfqz7HH6Jz%2BUVq%2FhMIaRIXNkA%2BOcCyCDrsTwRW0GrBqkRAbrV16FENty1acj6nTWTE8wSWgiLwIMAsWjQMhhk24b9sGLpF8vRYfiaFGsqEmvAgUEIk9bZuLxlM6vt8qmw2VqGBftrsURQEA397DABMwopb0wgY6pgGAxOkAg6aV0eD23ogfDMp6tXwqmQRQXdJjnFO5dD9ZU2f5sUFfMHaikwLcDy491THnhAAYid9NgYjN6PvXQW3TubW%2FgjtAz5drEohdL%2B9yn%2FkxTQFMmrlGpK5xcmp00B2S%2FMrL1PCU1FtZx%2FUUasu9%2BDcrRxEt0yb1qPO44DN1W0nnX9SCrr3FAIV5ZJMovTcnbMCgKLKMZymk0SDzMqb7gY2KkqDV&X-Amz-Signature=8e14500bcbfa5e2a106d9c9e358a28563a5cd207ac9df38d80ec01f037597960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKIA5JD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDbXtgmy8mSTISp%2Bet%2BOaWuRME10p%2Fw3vWs3bpTd4%2FE3AiBJogeb3Pzl%2BkpXDZhbyqaXJHpxTjxiFIjMfh528d7X3yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMOvCq1%2F45Jy5IhPOSKtwDAtB5z121RWpSMlsWnWnOpaVaqGlmhlVIlOeL2xHlE34VacKfa76BOmumfQBmcFYiMhZUVWL91SYO7lUJcFZwmexAvM2rCSjoZWtZbVJKLmdTP%2BpJyzGs%2FfkAXWmKI5Dz2LV22WZpVftYUy8ZKdNQ7fv%2BLMnrfIlNTEhE1cOMDh7QP80wdaTzea2v9YnoZO%2FzjTwNwB%2BMTCgJ3Kmh7VJ5OD%2FUoDZxqKMXXbZBHEeF8Z8Irh%2FvGjwiLSqGJYCcn2KVrK1W%2Fyo0SB7eKXcVipgpoLSaGLTV%2FaVyzXsnyhg7Nxs1UZJnK6uD548G2TzuixdQn75ZVJ5MxFFEYv3U%2FnWWW3159%2F7AgWH0M3FsmBI2N6XLEAg6BR6fcYh9Ohs1U1s87Z0TsTcdqFEuoFQ8WGgYML%2Bh5z9WgmLRgcHvZH0OWU9lXxt2LcJsQFdLJqqx%2Btl1oI81rnh4W1Lw52c%2F2xVi%2Bau5OysTEyBh4VQ10Zfqz7HH6Jz%2BUVq%2FhMIaRIXNkA%2BOcCyCDrsTwRW0GrBqkRAbrV16FENty1acj6nTWTE8wSWgiLwIMAsWjQMhhk24b9sGLpF8vRYfiaFGsqEmvAgUEIk9bZuLxlM6vt8qmw2VqGBftrsURQEA397DABMwopb0wgY6pgGAxOkAg6aV0eD23ogfDMp6tXwqmQRQXdJjnFO5dD9ZU2f5sUFfMHaikwLcDy491THnhAAYid9NgYjN6PvXQW3TubW%2FgjtAz5drEohdL%2B9yn%2FkxTQFMmrlGpK5xcmp00B2S%2FMrL1PCU1FtZx%2FUUasu9%2BDcrRxEt0yb1qPO44DN1W0nnX9SCrr3FAIV5ZJMovTcnbMCgKLKMZymk0SDzMqb7gY2KkqDV&X-Amz-Signature=8679e82eff6ffb36d4b39a68d0897a0ab7e17af1e19f3799f023ff9183a5f8e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKIA5JD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDbXtgmy8mSTISp%2Bet%2BOaWuRME10p%2Fw3vWs3bpTd4%2FE3AiBJogeb3Pzl%2BkpXDZhbyqaXJHpxTjxiFIjMfh528d7X3yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMOvCq1%2F45Jy5IhPOSKtwDAtB5z121RWpSMlsWnWnOpaVaqGlmhlVIlOeL2xHlE34VacKfa76BOmumfQBmcFYiMhZUVWL91SYO7lUJcFZwmexAvM2rCSjoZWtZbVJKLmdTP%2BpJyzGs%2FfkAXWmKI5Dz2LV22WZpVftYUy8ZKdNQ7fv%2BLMnrfIlNTEhE1cOMDh7QP80wdaTzea2v9YnoZO%2FzjTwNwB%2BMTCgJ3Kmh7VJ5OD%2FUoDZxqKMXXbZBHEeF8Z8Irh%2FvGjwiLSqGJYCcn2KVrK1W%2Fyo0SB7eKXcVipgpoLSaGLTV%2FaVyzXsnyhg7Nxs1UZJnK6uD548G2TzuixdQn75ZVJ5MxFFEYv3U%2FnWWW3159%2F7AgWH0M3FsmBI2N6XLEAg6BR6fcYh9Ohs1U1s87Z0TsTcdqFEuoFQ8WGgYML%2Bh5z9WgmLRgcHvZH0OWU9lXxt2LcJsQFdLJqqx%2Btl1oI81rnh4W1Lw52c%2F2xVi%2Bau5OysTEyBh4VQ10Zfqz7HH6Jz%2BUVq%2FhMIaRIXNkA%2BOcCyCDrsTwRW0GrBqkRAbrV16FENty1acj6nTWTE8wSWgiLwIMAsWjQMhhk24b9sGLpF8vRYfiaFGsqEmvAgUEIk9bZuLxlM6vt8qmw2VqGBftrsURQEA397DABMwopb0wgY6pgGAxOkAg6aV0eD23ogfDMp6tXwqmQRQXdJjnFO5dD9ZU2f5sUFfMHaikwLcDy491THnhAAYid9NgYjN6PvXQW3TubW%2FgjtAz5drEohdL%2B9yn%2FkxTQFMmrlGpK5xcmp00B2S%2FMrL1PCU1FtZx%2FUUasu9%2BDcrRxEt0yb1qPO44DN1W0nnX9SCrr3FAIV5ZJMovTcnbMCgKLKMZymk0SDzMqb7gY2KkqDV&X-Amz-Signature=3b5944fc7392a69c74576c11c4486104d722d65753262e7f7a2204926f578a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKIA5JD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDbXtgmy8mSTISp%2Bet%2BOaWuRME10p%2Fw3vWs3bpTd4%2FE3AiBJogeb3Pzl%2BkpXDZhbyqaXJHpxTjxiFIjMfh528d7X3yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMOvCq1%2F45Jy5IhPOSKtwDAtB5z121RWpSMlsWnWnOpaVaqGlmhlVIlOeL2xHlE34VacKfa76BOmumfQBmcFYiMhZUVWL91SYO7lUJcFZwmexAvM2rCSjoZWtZbVJKLmdTP%2BpJyzGs%2FfkAXWmKI5Dz2LV22WZpVftYUy8ZKdNQ7fv%2BLMnrfIlNTEhE1cOMDh7QP80wdaTzea2v9YnoZO%2FzjTwNwB%2BMTCgJ3Kmh7VJ5OD%2FUoDZxqKMXXbZBHEeF8Z8Irh%2FvGjwiLSqGJYCcn2KVrK1W%2Fyo0SB7eKXcVipgpoLSaGLTV%2FaVyzXsnyhg7Nxs1UZJnK6uD548G2TzuixdQn75ZVJ5MxFFEYv3U%2FnWWW3159%2F7AgWH0M3FsmBI2N6XLEAg6BR6fcYh9Ohs1U1s87Z0TsTcdqFEuoFQ8WGgYML%2Bh5z9WgmLRgcHvZH0OWU9lXxt2LcJsQFdLJqqx%2Btl1oI81rnh4W1Lw52c%2F2xVi%2Bau5OysTEyBh4VQ10Zfqz7HH6Jz%2BUVq%2FhMIaRIXNkA%2BOcCyCDrsTwRW0GrBqkRAbrV16FENty1acj6nTWTE8wSWgiLwIMAsWjQMhhk24b9sGLpF8vRYfiaFGsqEmvAgUEIk9bZuLxlM6vt8qmw2VqGBftrsURQEA397DABMwopb0wgY6pgGAxOkAg6aV0eD23ogfDMp6tXwqmQRQXdJjnFO5dD9ZU2f5sUFfMHaikwLcDy491THnhAAYid9NgYjN6PvXQW3TubW%2FgjtAz5drEohdL%2B9yn%2FkxTQFMmrlGpK5xcmp00B2S%2FMrL1PCU1FtZx%2FUUasu9%2BDcrRxEt0yb1qPO44DN1W0nnX9SCrr3FAIV5ZJMovTcnbMCgKLKMZymk0SDzMqb7gY2KkqDV&X-Amz-Signature=a18bac71f1b0b24d88d9c73115571284395dbacf8a5ab2fd1423f20a265f563b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
