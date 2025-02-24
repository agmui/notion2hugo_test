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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRA3AWJD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq87sHNoU72iCzFJIlIh6zAdskLHpElI2vl3omyXaJAAIhAKjmmpxjKIM%2FMUfLRs6OusAlaK%2BzoCZBKWqiJvKcoBl3Kv8DCCEQABoMNjM3NDIzMTgzODA1IgwmUILGXGuugQCtOjoq3AO6zBIldvQRQZvRmEZ9uH2oq0qNVl4F2vGKVRvguPIwrGsXY%2FdcRcuIiuw%2BifiQxvwVKJ6P3uGowPx6eWpfobHc8oARzHCbKIglnaCQFgwTzlBcaCsQYarb9AZjEaw68RkgMzw3rJn1lA%2FjG%2Bfhf5NHT7zMdJOsdY55KqKElEBVrAqX%2FpR%2Ffl%2FXgbN2rZN8mqoVl6Ao9G%2FEP30sBDr9HzQQm%2BF7hzczpxDze34EFpFrvsEEKa4votAvbIJ2EalkBVMc3lZJITrUZJCGqKNcQciTanQuidYpCvSPqJzyy1iUQuz1zgNkmTplVZykYRjlM9%2BGjczPTOQZ7Awj4kWsLe3CFXBA8aNm4AYhiikGVnQxU3JGZdETSir81rlwya9kjoppi6ySmTBjk5ZNbH0T8GUkiius0Zoe2kVtRb1hQrTeXlwdW2hIXrnwhECadnqwPRL0uiLrj1k4NV6u%2FVUGwjkJqIbvLx1beYk50mDFal8goz3%2BBFHg5ztUrMIxLRcUkpUj2NcDON3NpxVHYHIsqy2sVQ8CZHB3e%2Bw4IDYOePBliarsZwLhj%2By8wI5fSLmoLpbIdOZEN%2B7aW15tY2NGURAAaJU01uwf4eIPyY0%2FI2YDpXshlypfOgCOdPV2SjDo8e69BjqkASBhjd3gMMvZFJ%2BmcrvxDvTPLALDNddaG01%2FN7pyQ%2Fz7fzX9ycXPuNegi5%2FEop0JiknWQX86LOh19cQUEc1ugCnH%2FyL2HhWrxaSSTxWmfQt6vrPLlnFxxwQcx3w7rsMCVAnKi7ZOeGzNLwfFv1gb6H4qa08aLSjfr%2F7NS8oeAkSXaPkq4wQX6QlKOSq1E33S6Rqx586XGFJScHjN36GHGNcCh4VC&X-Amz-Signature=0da51bb15bc3374d4e89267fa8688861de07e252b200dc21d00b0d4c131b85cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRA3AWJD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq87sHNoU72iCzFJIlIh6zAdskLHpElI2vl3omyXaJAAIhAKjmmpxjKIM%2FMUfLRs6OusAlaK%2BzoCZBKWqiJvKcoBl3Kv8DCCEQABoMNjM3NDIzMTgzODA1IgwmUILGXGuugQCtOjoq3AO6zBIldvQRQZvRmEZ9uH2oq0qNVl4F2vGKVRvguPIwrGsXY%2FdcRcuIiuw%2BifiQxvwVKJ6P3uGowPx6eWpfobHc8oARzHCbKIglnaCQFgwTzlBcaCsQYarb9AZjEaw68RkgMzw3rJn1lA%2FjG%2Bfhf5NHT7zMdJOsdY55KqKElEBVrAqX%2FpR%2Ffl%2FXgbN2rZN8mqoVl6Ao9G%2FEP30sBDr9HzQQm%2BF7hzczpxDze34EFpFrvsEEKa4votAvbIJ2EalkBVMc3lZJITrUZJCGqKNcQciTanQuidYpCvSPqJzyy1iUQuz1zgNkmTplVZykYRjlM9%2BGjczPTOQZ7Awj4kWsLe3CFXBA8aNm4AYhiikGVnQxU3JGZdETSir81rlwya9kjoppi6ySmTBjk5ZNbH0T8GUkiius0Zoe2kVtRb1hQrTeXlwdW2hIXrnwhECadnqwPRL0uiLrj1k4NV6u%2FVUGwjkJqIbvLx1beYk50mDFal8goz3%2BBFHg5ztUrMIxLRcUkpUj2NcDON3NpxVHYHIsqy2sVQ8CZHB3e%2Bw4IDYOePBliarsZwLhj%2By8wI5fSLmoLpbIdOZEN%2B7aW15tY2NGURAAaJU01uwf4eIPyY0%2FI2YDpXshlypfOgCOdPV2SjDo8e69BjqkASBhjd3gMMvZFJ%2BmcrvxDvTPLALDNddaG01%2FN7pyQ%2Fz7fzX9ycXPuNegi5%2FEop0JiknWQX86LOh19cQUEc1ugCnH%2FyL2HhWrxaSSTxWmfQt6vrPLlnFxxwQcx3w7rsMCVAnKi7ZOeGzNLwfFv1gb6H4qa08aLSjfr%2F7NS8oeAkSXaPkq4wQX6QlKOSq1E33S6Rqx586XGFJScHjN36GHGNcCh4VC&X-Amz-Signature=ef81f76f57daee5282a5278d22e6acab04b3af93f6c6a2b666ca060796f3e603&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRA3AWJD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq87sHNoU72iCzFJIlIh6zAdskLHpElI2vl3omyXaJAAIhAKjmmpxjKIM%2FMUfLRs6OusAlaK%2BzoCZBKWqiJvKcoBl3Kv8DCCEQABoMNjM3NDIzMTgzODA1IgwmUILGXGuugQCtOjoq3AO6zBIldvQRQZvRmEZ9uH2oq0qNVl4F2vGKVRvguPIwrGsXY%2FdcRcuIiuw%2BifiQxvwVKJ6P3uGowPx6eWpfobHc8oARzHCbKIglnaCQFgwTzlBcaCsQYarb9AZjEaw68RkgMzw3rJn1lA%2FjG%2Bfhf5NHT7zMdJOsdY55KqKElEBVrAqX%2FpR%2Ffl%2FXgbN2rZN8mqoVl6Ao9G%2FEP30sBDr9HzQQm%2BF7hzczpxDze34EFpFrvsEEKa4votAvbIJ2EalkBVMc3lZJITrUZJCGqKNcQciTanQuidYpCvSPqJzyy1iUQuz1zgNkmTplVZykYRjlM9%2BGjczPTOQZ7Awj4kWsLe3CFXBA8aNm4AYhiikGVnQxU3JGZdETSir81rlwya9kjoppi6ySmTBjk5ZNbH0T8GUkiius0Zoe2kVtRb1hQrTeXlwdW2hIXrnwhECadnqwPRL0uiLrj1k4NV6u%2FVUGwjkJqIbvLx1beYk50mDFal8goz3%2BBFHg5ztUrMIxLRcUkpUj2NcDON3NpxVHYHIsqy2sVQ8CZHB3e%2Bw4IDYOePBliarsZwLhj%2By8wI5fSLmoLpbIdOZEN%2B7aW15tY2NGURAAaJU01uwf4eIPyY0%2FI2YDpXshlypfOgCOdPV2SjDo8e69BjqkASBhjd3gMMvZFJ%2BmcrvxDvTPLALDNddaG01%2FN7pyQ%2Fz7fzX9ycXPuNegi5%2FEop0JiknWQX86LOh19cQUEc1ugCnH%2FyL2HhWrxaSSTxWmfQt6vrPLlnFxxwQcx3w7rsMCVAnKi7ZOeGzNLwfFv1gb6H4qa08aLSjfr%2F7NS8oeAkSXaPkq4wQX6QlKOSq1E33S6Rqx586XGFJScHjN36GHGNcCh4VC&X-Amz-Signature=25b4275cb09ff90e62262394dc34a22674f09bf377fbeecf5e01440d7da7cbd8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRA3AWJD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq87sHNoU72iCzFJIlIh6zAdskLHpElI2vl3omyXaJAAIhAKjmmpxjKIM%2FMUfLRs6OusAlaK%2BzoCZBKWqiJvKcoBl3Kv8DCCEQABoMNjM3NDIzMTgzODA1IgwmUILGXGuugQCtOjoq3AO6zBIldvQRQZvRmEZ9uH2oq0qNVl4F2vGKVRvguPIwrGsXY%2FdcRcuIiuw%2BifiQxvwVKJ6P3uGowPx6eWpfobHc8oARzHCbKIglnaCQFgwTzlBcaCsQYarb9AZjEaw68RkgMzw3rJn1lA%2FjG%2Bfhf5NHT7zMdJOsdY55KqKElEBVrAqX%2FpR%2Ffl%2FXgbN2rZN8mqoVl6Ao9G%2FEP30sBDr9HzQQm%2BF7hzczpxDze34EFpFrvsEEKa4votAvbIJ2EalkBVMc3lZJITrUZJCGqKNcQciTanQuidYpCvSPqJzyy1iUQuz1zgNkmTplVZykYRjlM9%2BGjczPTOQZ7Awj4kWsLe3CFXBA8aNm4AYhiikGVnQxU3JGZdETSir81rlwya9kjoppi6ySmTBjk5ZNbH0T8GUkiius0Zoe2kVtRb1hQrTeXlwdW2hIXrnwhECadnqwPRL0uiLrj1k4NV6u%2FVUGwjkJqIbvLx1beYk50mDFal8goz3%2BBFHg5ztUrMIxLRcUkpUj2NcDON3NpxVHYHIsqy2sVQ8CZHB3e%2Bw4IDYOePBliarsZwLhj%2By8wI5fSLmoLpbIdOZEN%2B7aW15tY2NGURAAaJU01uwf4eIPyY0%2FI2YDpXshlypfOgCOdPV2SjDo8e69BjqkASBhjd3gMMvZFJ%2BmcrvxDvTPLALDNddaG01%2FN7pyQ%2Fz7fzX9ycXPuNegi5%2FEop0JiknWQX86LOh19cQUEc1ugCnH%2FyL2HhWrxaSSTxWmfQt6vrPLlnFxxwQcx3w7rsMCVAnKi7ZOeGzNLwfFv1gb6H4qa08aLSjfr%2F7NS8oeAkSXaPkq4wQX6QlKOSq1E33S6Rqx586XGFJScHjN36GHGNcCh4VC&X-Amz-Signature=96b2c7009411cf3dc81175613b7611a4bfe83b701679bcf0abc6bab2382d4fac&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRA3AWJD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq87sHNoU72iCzFJIlIh6zAdskLHpElI2vl3omyXaJAAIhAKjmmpxjKIM%2FMUfLRs6OusAlaK%2BzoCZBKWqiJvKcoBl3Kv8DCCEQABoMNjM3NDIzMTgzODA1IgwmUILGXGuugQCtOjoq3AO6zBIldvQRQZvRmEZ9uH2oq0qNVl4F2vGKVRvguPIwrGsXY%2FdcRcuIiuw%2BifiQxvwVKJ6P3uGowPx6eWpfobHc8oARzHCbKIglnaCQFgwTzlBcaCsQYarb9AZjEaw68RkgMzw3rJn1lA%2FjG%2Bfhf5NHT7zMdJOsdY55KqKElEBVrAqX%2FpR%2Ffl%2FXgbN2rZN8mqoVl6Ao9G%2FEP30sBDr9HzQQm%2BF7hzczpxDze34EFpFrvsEEKa4votAvbIJ2EalkBVMc3lZJITrUZJCGqKNcQciTanQuidYpCvSPqJzyy1iUQuz1zgNkmTplVZykYRjlM9%2BGjczPTOQZ7Awj4kWsLe3CFXBA8aNm4AYhiikGVnQxU3JGZdETSir81rlwya9kjoppi6ySmTBjk5ZNbH0T8GUkiius0Zoe2kVtRb1hQrTeXlwdW2hIXrnwhECadnqwPRL0uiLrj1k4NV6u%2FVUGwjkJqIbvLx1beYk50mDFal8goz3%2BBFHg5ztUrMIxLRcUkpUj2NcDON3NpxVHYHIsqy2sVQ8CZHB3e%2Bw4IDYOePBliarsZwLhj%2By8wI5fSLmoLpbIdOZEN%2B7aW15tY2NGURAAaJU01uwf4eIPyY0%2FI2YDpXshlypfOgCOdPV2SjDo8e69BjqkASBhjd3gMMvZFJ%2BmcrvxDvTPLALDNddaG01%2FN7pyQ%2Fz7fzX9ycXPuNegi5%2FEop0JiknWQX86LOh19cQUEc1ugCnH%2FyL2HhWrxaSSTxWmfQt6vrPLlnFxxwQcx3w7rsMCVAnKi7ZOeGzNLwfFv1gb6H4qa08aLSjfr%2F7NS8oeAkSXaPkq4wQX6QlKOSq1E33S6Rqx586XGFJScHjN36GHGNcCh4VC&X-Amz-Signature=036a8f1f6a66072b91950950cdb306ebeb545d8f01a817a06e000bfa37a66015&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRA3AWJD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq87sHNoU72iCzFJIlIh6zAdskLHpElI2vl3omyXaJAAIhAKjmmpxjKIM%2FMUfLRs6OusAlaK%2BzoCZBKWqiJvKcoBl3Kv8DCCEQABoMNjM3NDIzMTgzODA1IgwmUILGXGuugQCtOjoq3AO6zBIldvQRQZvRmEZ9uH2oq0qNVl4F2vGKVRvguPIwrGsXY%2FdcRcuIiuw%2BifiQxvwVKJ6P3uGowPx6eWpfobHc8oARzHCbKIglnaCQFgwTzlBcaCsQYarb9AZjEaw68RkgMzw3rJn1lA%2FjG%2Bfhf5NHT7zMdJOsdY55KqKElEBVrAqX%2FpR%2Ffl%2FXgbN2rZN8mqoVl6Ao9G%2FEP30sBDr9HzQQm%2BF7hzczpxDze34EFpFrvsEEKa4votAvbIJ2EalkBVMc3lZJITrUZJCGqKNcQciTanQuidYpCvSPqJzyy1iUQuz1zgNkmTplVZykYRjlM9%2BGjczPTOQZ7Awj4kWsLe3CFXBA8aNm4AYhiikGVnQxU3JGZdETSir81rlwya9kjoppi6ySmTBjk5ZNbH0T8GUkiius0Zoe2kVtRb1hQrTeXlwdW2hIXrnwhECadnqwPRL0uiLrj1k4NV6u%2FVUGwjkJqIbvLx1beYk50mDFal8goz3%2BBFHg5ztUrMIxLRcUkpUj2NcDON3NpxVHYHIsqy2sVQ8CZHB3e%2Bw4IDYOePBliarsZwLhj%2By8wI5fSLmoLpbIdOZEN%2B7aW15tY2NGURAAaJU01uwf4eIPyY0%2FI2YDpXshlypfOgCOdPV2SjDo8e69BjqkASBhjd3gMMvZFJ%2BmcrvxDvTPLALDNddaG01%2FN7pyQ%2Fz7fzX9ycXPuNegi5%2FEop0JiknWQX86LOh19cQUEc1ugCnH%2FyL2HhWrxaSSTxWmfQt6vrPLlnFxxwQcx3w7rsMCVAnKi7ZOeGzNLwfFv1gb6H4qa08aLSjfr%2F7NS8oeAkSXaPkq4wQX6QlKOSq1E33S6Rqx586XGFJScHjN36GHGNcCh4VC&X-Amz-Signature=659a776932646de771bf7dfd5d4f1ec5490fe99d95535efa43d0315fc23f1631&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRA3AWJD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq87sHNoU72iCzFJIlIh6zAdskLHpElI2vl3omyXaJAAIhAKjmmpxjKIM%2FMUfLRs6OusAlaK%2BzoCZBKWqiJvKcoBl3Kv8DCCEQABoMNjM3NDIzMTgzODA1IgwmUILGXGuugQCtOjoq3AO6zBIldvQRQZvRmEZ9uH2oq0qNVl4F2vGKVRvguPIwrGsXY%2FdcRcuIiuw%2BifiQxvwVKJ6P3uGowPx6eWpfobHc8oARzHCbKIglnaCQFgwTzlBcaCsQYarb9AZjEaw68RkgMzw3rJn1lA%2FjG%2Bfhf5NHT7zMdJOsdY55KqKElEBVrAqX%2FpR%2Ffl%2FXgbN2rZN8mqoVl6Ao9G%2FEP30sBDr9HzQQm%2BF7hzczpxDze34EFpFrvsEEKa4votAvbIJ2EalkBVMc3lZJITrUZJCGqKNcQciTanQuidYpCvSPqJzyy1iUQuz1zgNkmTplVZykYRjlM9%2BGjczPTOQZ7Awj4kWsLe3CFXBA8aNm4AYhiikGVnQxU3JGZdETSir81rlwya9kjoppi6ySmTBjk5ZNbH0T8GUkiius0Zoe2kVtRb1hQrTeXlwdW2hIXrnwhECadnqwPRL0uiLrj1k4NV6u%2FVUGwjkJqIbvLx1beYk50mDFal8goz3%2BBFHg5ztUrMIxLRcUkpUj2NcDON3NpxVHYHIsqy2sVQ8CZHB3e%2Bw4IDYOePBliarsZwLhj%2By8wI5fSLmoLpbIdOZEN%2B7aW15tY2NGURAAaJU01uwf4eIPyY0%2FI2YDpXshlypfOgCOdPV2SjDo8e69BjqkASBhjd3gMMvZFJ%2BmcrvxDvTPLALDNddaG01%2FN7pyQ%2Fz7fzX9ycXPuNegi5%2FEop0JiknWQX86LOh19cQUEc1ugCnH%2FyL2HhWrxaSSTxWmfQt6vrPLlnFxxwQcx3w7rsMCVAnKi7ZOeGzNLwfFv1gb6H4qa08aLSjfr%2F7NS8oeAkSXaPkq4wQX6QlKOSq1E33S6Rqx586XGFJScHjN36GHGNcCh4VC&X-Amz-Signature=06801c8b14952c0139ec12cb11984b190ce6644462cce4babd9b1694d88cb77d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
