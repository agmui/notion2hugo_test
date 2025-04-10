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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNZKFNB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCFMmpqFLFV3a%2Bykfa5p9haOtohVmA6OYRedZ6z1vDfrAIhAJ4O8JG3YJVyNCFHflPth%2BZMY%2Fkv41rHpuPG2kKRqilBKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0ofM9DDpQD5rYoMsq3ANlF2IMmkDOjF0fsbMCBfQ3JUAzdLJxjH8vbZlF3p731xObogy58%2BdNPFeicSVbpYO1j6cN1YWUDPSWjTNZIyeKBiMGB45lOsCF24SHu6cllSL2odf8mcn8VuA%2FviL4bwjabZO26izP5bYVC%2F278S4P7ygViK7yroQmD2G82MelLJgFzXEEZjxMj5yBElZoM0lIuop3iWfLe7ruGWE8dLYQ8LTeIcnlobHYUzSz%2FY8K1EuSkMHe%2ByPaTqgv7uLMpIsrfTgwy%2FeODGo8j%2FbvePaPgPvixnyzQGE1Z3QYvr6U3pZwSESzPy8sYum4Cyhub4vGu2xyxI8%2BLTaQsCKOdf1AzKrggmvsjhvbgt41A3Gg75ac2t3OskH8Oay%2FE4K%2B%2Bf%2FMhIpEsV%2Fen0tmUcJt8nXAOH4Wqm1CVSN8A2P7BabsxhO4i5Tc8f%2Fx1BR08gY4Gt7lxdPn9lxlhP%2BqMCG2S04JpX3Unn7I6IW7rAebCfvj4Nr1Yil0pqYIGxQEJS5xY7tRunRFYsr16PNaCANkZDiM4ip9Z8R%2FxtJxvZnMlZI5Y%2BKIJy7%2BeUpca%2FpW51%2FhjyYP6VV1kNVZsgQ2uuJV3LauKeHtquVYU32qTG54EqrxWlqwglzjYCWZLg%2BTHjCgseC%2FBjqkAf7jhHBR2DFTAtXt0x7pcJ20qV2EbyIsFTNJ%2BktTPnIlIAK0VfixJsQYUJLPK6N9RrZuXdYXSeM92ZHe0qwff0GMTmv4sk5lKNlAVmTq%2FbHy%2FFTD9a1Mvqe5JDpCxw6%2FLT8VbXGhqL6Sh4ZalfQAor5Be594sez%2BzkRjFf5NqfZ68UXanHjp5Crz1divC3lj0ihhjhOLzlPngSLYH07Z1nMCHQ%2BH&X-Amz-Signature=be678dc72e6119a4471a27481ffcd0d8f099412638732555080768ead7a4c28f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNZKFNB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCFMmpqFLFV3a%2Bykfa5p9haOtohVmA6OYRedZ6z1vDfrAIhAJ4O8JG3YJVyNCFHflPth%2BZMY%2Fkv41rHpuPG2kKRqilBKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0ofM9DDpQD5rYoMsq3ANlF2IMmkDOjF0fsbMCBfQ3JUAzdLJxjH8vbZlF3p731xObogy58%2BdNPFeicSVbpYO1j6cN1YWUDPSWjTNZIyeKBiMGB45lOsCF24SHu6cllSL2odf8mcn8VuA%2FviL4bwjabZO26izP5bYVC%2F278S4P7ygViK7yroQmD2G82MelLJgFzXEEZjxMj5yBElZoM0lIuop3iWfLe7ruGWE8dLYQ8LTeIcnlobHYUzSz%2FY8K1EuSkMHe%2ByPaTqgv7uLMpIsrfTgwy%2FeODGo8j%2FbvePaPgPvixnyzQGE1Z3QYvr6U3pZwSESzPy8sYum4Cyhub4vGu2xyxI8%2BLTaQsCKOdf1AzKrggmvsjhvbgt41A3Gg75ac2t3OskH8Oay%2FE4K%2B%2Bf%2FMhIpEsV%2Fen0tmUcJt8nXAOH4Wqm1CVSN8A2P7BabsxhO4i5Tc8f%2Fx1BR08gY4Gt7lxdPn9lxlhP%2BqMCG2S04JpX3Unn7I6IW7rAebCfvj4Nr1Yil0pqYIGxQEJS5xY7tRunRFYsr16PNaCANkZDiM4ip9Z8R%2FxtJxvZnMlZI5Y%2BKIJy7%2BeUpca%2FpW51%2FhjyYP6VV1kNVZsgQ2uuJV3LauKeHtquVYU32qTG54EqrxWlqwglzjYCWZLg%2BTHjCgseC%2FBjqkAf7jhHBR2DFTAtXt0x7pcJ20qV2EbyIsFTNJ%2BktTPnIlIAK0VfixJsQYUJLPK6N9RrZuXdYXSeM92ZHe0qwff0GMTmv4sk5lKNlAVmTq%2FbHy%2FFTD9a1Mvqe5JDpCxw6%2FLT8VbXGhqL6Sh4ZalfQAor5Be594sez%2BzkRjFf5NqfZ68UXanHjp5Crz1divC3lj0ihhjhOLzlPngSLYH07Z1nMCHQ%2BH&X-Amz-Signature=3f1d768154b7f1fe07197d695ff14a8f5f6c0fa3be22937dd23c745822909f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNZKFNB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCFMmpqFLFV3a%2Bykfa5p9haOtohVmA6OYRedZ6z1vDfrAIhAJ4O8JG3YJVyNCFHflPth%2BZMY%2Fkv41rHpuPG2kKRqilBKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0ofM9DDpQD5rYoMsq3ANlF2IMmkDOjF0fsbMCBfQ3JUAzdLJxjH8vbZlF3p731xObogy58%2BdNPFeicSVbpYO1j6cN1YWUDPSWjTNZIyeKBiMGB45lOsCF24SHu6cllSL2odf8mcn8VuA%2FviL4bwjabZO26izP5bYVC%2F278S4P7ygViK7yroQmD2G82MelLJgFzXEEZjxMj5yBElZoM0lIuop3iWfLe7ruGWE8dLYQ8LTeIcnlobHYUzSz%2FY8K1EuSkMHe%2ByPaTqgv7uLMpIsrfTgwy%2FeODGo8j%2FbvePaPgPvixnyzQGE1Z3QYvr6U3pZwSESzPy8sYum4Cyhub4vGu2xyxI8%2BLTaQsCKOdf1AzKrggmvsjhvbgt41A3Gg75ac2t3OskH8Oay%2FE4K%2B%2Bf%2FMhIpEsV%2Fen0tmUcJt8nXAOH4Wqm1CVSN8A2P7BabsxhO4i5Tc8f%2Fx1BR08gY4Gt7lxdPn9lxlhP%2BqMCG2S04JpX3Unn7I6IW7rAebCfvj4Nr1Yil0pqYIGxQEJS5xY7tRunRFYsr16PNaCANkZDiM4ip9Z8R%2FxtJxvZnMlZI5Y%2BKIJy7%2BeUpca%2FpW51%2FhjyYP6VV1kNVZsgQ2uuJV3LauKeHtquVYU32qTG54EqrxWlqwglzjYCWZLg%2BTHjCgseC%2FBjqkAf7jhHBR2DFTAtXt0x7pcJ20qV2EbyIsFTNJ%2BktTPnIlIAK0VfixJsQYUJLPK6N9RrZuXdYXSeM92ZHe0qwff0GMTmv4sk5lKNlAVmTq%2FbHy%2FFTD9a1Mvqe5JDpCxw6%2FLT8VbXGhqL6Sh4ZalfQAor5Be594sez%2BzkRjFf5NqfZ68UXanHjp5Crz1divC3lj0ihhjhOLzlPngSLYH07Z1nMCHQ%2BH&X-Amz-Signature=891fb74205188c5661c92c9ebddbef5c981d2ab850be215bb187aef756d26cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNZKFNB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCFMmpqFLFV3a%2Bykfa5p9haOtohVmA6OYRedZ6z1vDfrAIhAJ4O8JG3YJVyNCFHflPth%2BZMY%2Fkv41rHpuPG2kKRqilBKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0ofM9DDpQD5rYoMsq3ANlF2IMmkDOjF0fsbMCBfQ3JUAzdLJxjH8vbZlF3p731xObogy58%2BdNPFeicSVbpYO1j6cN1YWUDPSWjTNZIyeKBiMGB45lOsCF24SHu6cllSL2odf8mcn8VuA%2FviL4bwjabZO26izP5bYVC%2F278S4P7ygViK7yroQmD2G82MelLJgFzXEEZjxMj5yBElZoM0lIuop3iWfLe7ruGWE8dLYQ8LTeIcnlobHYUzSz%2FY8K1EuSkMHe%2ByPaTqgv7uLMpIsrfTgwy%2FeODGo8j%2FbvePaPgPvixnyzQGE1Z3QYvr6U3pZwSESzPy8sYum4Cyhub4vGu2xyxI8%2BLTaQsCKOdf1AzKrggmvsjhvbgt41A3Gg75ac2t3OskH8Oay%2FE4K%2B%2Bf%2FMhIpEsV%2Fen0tmUcJt8nXAOH4Wqm1CVSN8A2P7BabsxhO4i5Tc8f%2Fx1BR08gY4Gt7lxdPn9lxlhP%2BqMCG2S04JpX3Unn7I6IW7rAebCfvj4Nr1Yil0pqYIGxQEJS5xY7tRunRFYsr16PNaCANkZDiM4ip9Z8R%2FxtJxvZnMlZI5Y%2BKIJy7%2BeUpca%2FpW51%2FhjyYP6VV1kNVZsgQ2uuJV3LauKeHtquVYU32qTG54EqrxWlqwglzjYCWZLg%2BTHjCgseC%2FBjqkAf7jhHBR2DFTAtXt0x7pcJ20qV2EbyIsFTNJ%2BktTPnIlIAK0VfixJsQYUJLPK6N9RrZuXdYXSeM92ZHe0qwff0GMTmv4sk5lKNlAVmTq%2FbHy%2FFTD9a1Mvqe5JDpCxw6%2FLT8VbXGhqL6Sh4ZalfQAor5Be594sez%2BzkRjFf5NqfZ68UXanHjp5Crz1divC3lj0ihhjhOLzlPngSLYH07Z1nMCHQ%2BH&X-Amz-Signature=f0a8852df16654560778f11c18f16718344972e1a7b772e90a2922c62bfc7a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNZKFNB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCFMmpqFLFV3a%2Bykfa5p9haOtohVmA6OYRedZ6z1vDfrAIhAJ4O8JG3YJVyNCFHflPth%2BZMY%2Fkv41rHpuPG2kKRqilBKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0ofM9DDpQD5rYoMsq3ANlF2IMmkDOjF0fsbMCBfQ3JUAzdLJxjH8vbZlF3p731xObogy58%2BdNPFeicSVbpYO1j6cN1YWUDPSWjTNZIyeKBiMGB45lOsCF24SHu6cllSL2odf8mcn8VuA%2FviL4bwjabZO26izP5bYVC%2F278S4P7ygViK7yroQmD2G82MelLJgFzXEEZjxMj5yBElZoM0lIuop3iWfLe7ruGWE8dLYQ8LTeIcnlobHYUzSz%2FY8K1EuSkMHe%2ByPaTqgv7uLMpIsrfTgwy%2FeODGo8j%2FbvePaPgPvixnyzQGE1Z3QYvr6U3pZwSESzPy8sYum4Cyhub4vGu2xyxI8%2BLTaQsCKOdf1AzKrggmvsjhvbgt41A3Gg75ac2t3OskH8Oay%2FE4K%2B%2Bf%2FMhIpEsV%2Fen0tmUcJt8nXAOH4Wqm1CVSN8A2P7BabsxhO4i5Tc8f%2Fx1BR08gY4Gt7lxdPn9lxlhP%2BqMCG2S04JpX3Unn7I6IW7rAebCfvj4Nr1Yil0pqYIGxQEJS5xY7tRunRFYsr16PNaCANkZDiM4ip9Z8R%2FxtJxvZnMlZI5Y%2BKIJy7%2BeUpca%2FpW51%2FhjyYP6VV1kNVZsgQ2uuJV3LauKeHtquVYU32qTG54EqrxWlqwglzjYCWZLg%2BTHjCgseC%2FBjqkAf7jhHBR2DFTAtXt0x7pcJ20qV2EbyIsFTNJ%2BktTPnIlIAK0VfixJsQYUJLPK6N9RrZuXdYXSeM92ZHe0qwff0GMTmv4sk5lKNlAVmTq%2FbHy%2FFTD9a1Mvqe5JDpCxw6%2FLT8VbXGhqL6Sh4ZalfQAor5Be594sez%2BzkRjFf5NqfZ68UXanHjp5Crz1divC3lj0ihhjhOLzlPngSLYH07Z1nMCHQ%2BH&X-Amz-Signature=73c092af0cc3c2cd41d0dbb74fdb031c1e4eab31336e14daba52e2377ec31f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNZKFNB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCFMmpqFLFV3a%2Bykfa5p9haOtohVmA6OYRedZ6z1vDfrAIhAJ4O8JG3YJVyNCFHflPth%2BZMY%2Fkv41rHpuPG2kKRqilBKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0ofM9DDpQD5rYoMsq3ANlF2IMmkDOjF0fsbMCBfQ3JUAzdLJxjH8vbZlF3p731xObogy58%2BdNPFeicSVbpYO1j6cN1YWUDPSWjTNZIyeKBiMGB45lOsCF24SHu6cllSL2odf8mcn8VuA%2FviL4bwjabZO26izP5bYVC%2F278S4P7ygViK7yroQmD2G82MelLJgFzXEEZjxMj5yBElZoM0lIuop3iWfLe7ruGWE8dLYQ8LTeIcnlobHYUzSz%2FY8K1EuSkMHe%2ByPaTqgv7uLMpIsrfTgwy%2FeODGo8j%2FbvePaPgPvixnyzQGE1Z3QYvr6U3pZwSESzPy8sYum4Cyhub4vGu2xyxI8%2BLTaQsCKOdf1AzKrggmvsjhvbgt41A3Gg75ac2t3OskH8Oay%2FE4K%2B%2Bf%2FMhIpEsV%2Fen0tmUcJt8nXAOH4Wqm1CVSN8A2P7BabsxhO4i5Tc8f%2Fx1BR08gY4Gt7lxdPn9lxlhP%2BqMCG2S04JpX3Unn7I6IW7rAebCfvj4Nr1Yil0pqYIGxQEJS5xY7tRunRFYsr16PNaCANkZDiM4ip9Z8R%2FxtJxvZnMlZI5Y%2BKIJy7%2BeUpca%2FpW51%2FhjyYP6VV1kNVZsgQ2uuJV3LauKeHtquVYU32qTG54EqrxWlqwglzjYCWZLg%2BTHjCgseC%2FBjqkAf7jhHBR2DFTAtXt0x7pcJ20qV2EbyIsFTNJ%2BktTPnIlIAK0VfixJsQYUJLPK6N9RrZuXdYXSeM92ZHe0qwff0GMTmv4sk5lKNlAVmTq%2FbHy%2FFTD9a1Mvqe5JDpCxw6%2FLT8VbXGhqL6Sh4ZalfQAor5Be594sez%2BzkRjFf5NqfZ68UXanHjp5Crz1divC3lj0ihhjhOLzlPngSLYH07Z1nMCHQ%2BH&X-Amz-Signature=0660c3fad1a463fb67755cbaa00ea255cf289c91453b34dd00d312859a18c218&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNZKFNB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCFMmpqFLFV3a%2Bykfa5p9haOtohVmA6OYRedZ6z1vDfrAIhAJ4O8JG3YJVyNCFHflPth%2BZMY%2Fkv41rHpuPG2kKRqilBKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0ofM9DDpQD5rYoMsq3ANlF2IMmkDOjF0fsbMCBfQ3JUAzdLJxjH8vbZlF3p731xObogy58%2BdNPFeicSVbpYO1j6cN1YWUDPSWjTNZIyeKBiMGB45lOsCF24SHu6cllSL2odf8mcn8VuA%2FviL4bwjabZO26izP5bYVC%2F278S4P7ygViK7yroQmD2G82MelLJgFzXEEZjxMj5yBElZoM0lIuop3iWfLe7ruGWE8dLYQ8LTeIcnlobHYUzSz%2FY8K1EuSkMHe%2ByPaTqgv7uLMpIsrfTgwy%2FeODGo8j%2FbvePaPgPvixnyzQGE1Z3QYvr6U3pZwSESzPy8sYum4Cyhub4vGu2xyxI8%2BLTaQsCKOdf1AzKrggmvsjhvbgt41A3Gg75ac2t3OskH8Oay%2FE4K%2B%2Bf%2FMhIpEsV%2Fen0tmUcJt8nXAOH4Wqm1CVSN8A2P7BabsxhO4i5Tc8f%2Fx1BR08gY4Gt7lxdPn9lxlhP%2BqMCG2S04JpX3Unn7I6IW7rAebCfvj4Nr1Yil0pqYIGxQEJS5xY7tRunRFYsr16PNaCANkZDiM4ip9Z8R%2FxtJxvZnMlZI5Y%2BKIJy7%2BeUpca%2FpW51%2FhjyYP6VV1kNVZsgQ2uuJV3LauKeHtquVYU32qTG54EqrxWlqwglzjYCWZLg%2BTHjCgseC%2FBjqkAf7jhHBR2DFTAtXt0x7pcJ20qV2EbyIsFTNJ%2BktTPnIlIAK0VfixJsQYUJLPK6N9RrZuXdYXSeM92ZHe0qwff0GMTmv4sk5lKNlAVmTq%2FbHy%2FFTD9a1Mvqe5JDpCxw6%2FLT8VbXGhqL6Sh4ZalfQAor5Be594sez%2BzkRjFf5NqfZ68UXanHjp5Crz1divC3lj0ihhjhOLzlPngSLYH07Z1nMCHQ%2BH&X-Amz-Signature=bd6607ba157a0c8a39e07950a116be9d0f6e5ba35c2f9da8ad0b25fe8650afc5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
