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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SAU3ACF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVuyAJ8ppcDP9cZ3EYJuqFhu77%2FCdXqJoch9%2FBHZfR4wIhANAylCGQe5jxCgXamLfR5WBqoHv4S4NHvp1dVV4ewxdHKv8DCCYQABoMNjM3NDIzMTgzODA1IgxMzHzxRyZ9v8JDpikq3AMUTVT9T7kswY8MeH%2FI6SL7FZ%2FMhV8jdBKdR1Sx6O6B5IqsEIOzwcazj9cPMC9zJeGAIwT%2BTBVebU7zIZV82VZ%2FCjqsFJ0QvlZAeihHo6SZPTnYKXwYZuyP0WxQHHm%2F%2FTq4j9oCOhMD3jRCDtwJilafs1BuXV9S9GJTuTibageeiDG9fjSVfVYBuvju1XN69aYcUMuVCGUWPUgooTKWxS32RcrKy0YZK8r0klK0S0Q%2BwSiPtgCFPs9S24M5uq9ndZ7wyXT%2BMjGKYG0vGj4TSYMJ8rpKYc7g7s6CPnlGHNqA0LyM1i1PLg5x1e6LFnskvZj%2BMwqu3GjVb40BgMrlF76%2BvzqayYqpIle%2FX1%2BjgAZpaeFHoOiYonFpn1Eg1H4N%2FNBSwW1gbsWcnP7KM1h2yPmnbw%2By4P%2BpUGUzgbSHKEKlFTgQyfivGYMRQk2zSLynV1QRhpnFSdxQygCFDIRi4Syl%2FovSSpVw9uIjy6HePfG%2FXTjvZo6RltzQ92nuOv5YT1o4rwfxDP01eK0OiRnM5KUk7k%2BT9gEmgGGBMVzblBIReONbqddoe63qV8Rn%2BDo%2Fll%2FgPrmPuub4I%2BDzQHPVWupu3pxSKAl1kf%2FVvh8v8j6Us8%2FOQ52imUaDN6jGGzCsr6zABjqkAYZaDwWvHa4xDp0N%2FPlAQaEp52SyOtryD0hIvf5%2FbRkvDB5LYRKAb96xmThQ9kPJJNzbSR%2BnTO1qJWAeCjf8Zkfj%2FhUJwXRCX5%2BmM1gwSVn%2BAPEMuMfyuixATLYwpIuHovraL8XOErE%2Bk6lnakj7SbfEdEazFdHdhmdqgzhQXiiswVSMwhDsuFJ6tPA%2BfgWL4yzdRUngyLKncR%2F9lcSzWkmw4wM3&X-Amz-Signature=fd71e1a2fe6b2ac7282bb6ec0ccfb97ed76b61c3c5871c1c68db6cffcd8d3488&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SAU3ACF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVuyAJ8ppcDP9cZ3EYJuqFhu77%2FCdXqJoch9%2FBHZfR4wIhANAylCGQe5jxCgXamLfR5WBqoHv4S4NHvp1dVV4ewxdHKv8DCCYQABoMNjM3NDIzMTgzODA1IgxMzHzxRyZ9v8JDpikq3AMUTVT9T7kswY8MeH%2FI6SL7FZ%2FMhV8jdBKdR1Sx6O6B5IqsEIOzwcazj9cPMC9zJeGAIwT%2BTBVebU7zIZV82VZ%2FCjqsFJ0QvlZAeihHo6SZPTnYKXwYZuyP0WxQHHm%2F%2FTq4j9oCOhMD3jRCDtwJilafs1BuXV9S9GJTuTibageeiDG9fjSVfVYBuvju1XN69aYcUMuVCGUWPUgooTKWxS32RcrKy0YZK8r0klK0S0Q%2BwSiPtgCFPs9S24M5uq9ndZ7wyXT%2BMjGKYG0vGj4TSYMJ8rpKYc7g7s6CPnlGHNqA0LyM1i1PLg5x1e6LFnskvZj%2BMwqu3GjVb40BgMrlF76%2BvzqayYqpIle%2FX1%2BjgAZpaeFHoOiYonFpn1Eg1H4N%2FNBSwW1gbsWcnP7KM1h2yPmnbw%2By4P%2BpUGUzgbSHKEKlFTgQyfivGYMRQk2zSLynV1QRhpnFSdxQygCFDIRi4Syl%2FovSSpVw9uIjy6HePfG%2FXTjvZo6RltzQ92nuOv5YT1o4rwfxDP01eK0OiRnM5KUk7k%2BT9gEmgGGBMVzblBIReONbqddoe63qV8Rn%2BDo%2Fll%2FgPrmPuub4I%2BDzQHPVWupu3pxSKAl1kf%2FVvh8v8j6Us8%2FOQ52imUaDN6jGGzCsr6zABjqkAYZaDwWvHa4xDp0N%2FPlAQaEp52SyOtryD0hIvf5%2FbRkvDB5LYRKAb96xmThQ9kPJJNzbSR%2BnTO1qJWAeCjf8Zkfj%2FhUJwXRCX5%2BmM1gwSVn%2BAPEMuMfyuixATLYwpIuHovraL8XOErE%2Bk6lnakj7SbfEdEazFdHdhmdqgzhQXiiswVSMwhDsuFJ6tPA%2BfgWL4yzdRUngyLKncR%2F9lcSzWkmw4wM3&X-Amz-Signature=0e9eb671fce99f79ecbc891cbdb11bacea760ac3a1f90691aba7ca2ba8d74a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SAU3ACF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVuyAJ8ppcDP9cZ3EYJuqFhu77%2FCdXqJoch9%2FBHZfR4wIhANAylCGQe5jxCgXamLfR5WBqoHv4S4NHvp1dVV4ewxdHKv8DCCYQABoMNjM3NDIzMTgzODA1IgxMzHzxRyZ9v8JDpikq3AMUTVT9T7kswY8MeH%2FI6SL7FZ%2FMhV8jdBKdR1Sx6O6B5IqsEIOzwcazj9cPMC9zJeGAIwT%2BTBVebU7zIZV82VZ%2FCjqsFJ0QvlZAeihHo6SZPTnYKXwYZuyP0WxQHHm%2F%2FTq4j9oCOhMD3jRCDtwJilafs1BuXV9S9GJTuTibageeiDG9fjSVfVYBuvju1XN69aYcUMuVCGUWPUgooTKWxS32RcrKy0YZK8r0klK0S0Q%2BwSiPtgCFPs9S24M5uq9ndZ7wyXT%2BMjGKYG0vGj4TSYMJ8rpKYc7g7s6CPnlGHNqA0LyM1i1PLg5x1e6LFnskvZj%2BMwqu3GjVb40BgMrlF76%2BvzqayYqpIle%2FX1%2BjgAZpaeFHoOiYonFpn1Eg1H4N%2FNBSwW1gbsWcnP7KM1h2yPmnbw%2By4P%2BpUGUzgbSHKEKlFTgQyfivGYMRQk2zSLynV1QRhpnFSdxQygCFDIRi4Syl%2FovSSpVw9uIjy6HePfG%2FXTjvZo6RltzQ92nuOv5YT1o4rwfxDP01eK0OiRnM5KUk7k%2BT9gEmgGGBMVzblBIReONbqddoe63qV8Rn%2BDo%2Fll%2FgPrmPuub4I%2BDzQHPVWupu3pxSKAl1kf%2FVvh8v8j6Us8%2FOQ52imUaDN6jGGzCsr6zABjqkAYZaDwWvHa4xDp0N%2FPlAQaEp52SyOtryD0hIvf5%2FbRkvDB5LYRKAb96xmThQ9kPJJNzbSR%2BnTO1qJWAeCjf8Zkfj%2FhUJwXRCX5%2BmM1gwSVn%2BAPEMuMfyuixATLYwpIuHovraL8XOErE%2Bk6lnakj7SbfEdEazFdHdhmdqgzhQXiiswVSMwhDsuFJ6tPA%2BfgWL4yzdRUngyLKncR%2F9lcSzWkmw4wM3&X-Amz-Signature=8b34d092a96505173e3df52f2f417be55ea7589be4bf05a0ece89deed1b4a0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SAU3ACF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVuyAJ8ppcDP9cZ3EYJuqFhu77%2FCdXqJoch9%2FBHZfR4wIhANAylCGQe5jxCgXamLfR5WBqoHv4S4NHvp1dVV4ewxdHKv8DCCYQABoMNjM3NDIzMTgzODA1IgxMzHzxRyZ9v8JDpikq3AMUTVT9T7kswY8MeH%2FI6SL7FZ%2FMhV8jdBKdR1Sx6O6B5IqsEIOzwcazj9cPMC9zJeGAIwT%2BTBVebU7zIZV82VZ%2FCjqsFJ0QvlZAeihHo6SZPTnYKXwYZuyP0WxQHHm%2F%2FTq4j9oCOhMD3jRCDtwJilafs1BuXV9S9GJTuTibageeiDG9fjSVfVYBuvju1XN69aYcUMuVCGUWPUgooTKWxS32RcrKy0YZK8r0klK0S0Q%2BwSiPtgCFPs9S24M5uq9ndZ7wyXT%2BMjGKYG0vGj4TSYMJ8rpKYc7g7s6CPnlGHNqA0LyM1i1PLg5x1e6LFnskvZj%2BMwqu3GjVb40BgMrlF76%2BvzqayYqpIle%2FX1%2BjgAZpaeFHoOiYonFpn1Eg1H4N%2FNBSwW1gbsWcnP7KM1h2yPmnbw%2By4P%2BpUGUzgbSHKEKlFTgQyfivGYMRQk2zSLynV1QRhpnFSdxQygCFDIRi4Syl%2FovSSpVw9uIjy6HePfG%2FXTjvZo6RltzQ92nuOv5YT1o4rwfxDP01eK0OiRnM5KUk7k%2BT9gEmgGGBMVzblBIReONbqddoe63qV8Rn%2BDo%2Fll%2FgPrmPuub4I%2BDzQHPVWupu3pxSKAl1kf%2FVvh8v8j6Us8%2FOQ52imUaDN6jGGzCsr6zABjqkAYZaDwWvHa4xDp0N%2FPlAQaEp52SyOtryD0hIvf5%2FbRkvDB5LYRKAb96xmThQ9kPJJNzbSR%2BnTO1qJWAeCjf8Zkfj%2FhUJwXRCX5%2BmM1gwSVn%2BAPEMuMfyuixATLYwpIuHovraL8XOErE%2Bk6lnakj7SbfEdEazFdHdhmdqgzhQXiiswVSMwhDsuFJ6tPA%2BfgWL4yzdRUngyLKncR%2F9lcSzWkmw4wM3&X-Amz-Signature=57e6c1d7866358b5a06b020030dba418e7af387122ee012d24c715bc02f69500&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SAU3ACF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVuyAJ8ppcDP9cZ3EYJuqFhu77%2FCdXqJoch9%2FBHZfR4wIhANAylCGQe5jxCgXamLfR5WBqoHv4S4NHvp1dVV4ewxdHKv8DCCYQABoMNjM3NDIzMTgzODA1IgxMzHzxRyZ9v8JDpikq3AMUTVT9T7kswY8MeH%2FI6SL7FZ%2FMhV8jdBKdR1Sx6O6B5IqsEIOzwcazj9cPMC9zJeGAIwT%2BTBVebU7zIZV82VZ%2FCjqsFJ0QvlZAeihHo6SZPTnYKXwYZuyP0WxQHHm%2F%2FTq4j9oCOhMD3jRCDtwJilafs1BuXV9S9GJTuTibageeiDG9fjSVfVYBuvju1XN69aYcUMuVCGUWPUgooTKWxS32RcrKy0YZK8r0klK0S0Q%2BwSiPtgCFPs9S24M5uq9ndZ7wyXT%2BMjGKYG0vGj4TSYMJ8rpKYc7g7s6CPnlGHNqA0LyM1i1PLg5x1e6LFnskvZj%2BMwqu3GjVb40BgMrlF76%2BvzqayYqpIle%2FX1%2BjgAZpaeFHoOiYonFpn1Eg1H4N%2FNBSwW1gbsWcnP7KM1h2yPmnbw%2By4P%2BpUGUzgbSHKEKlFTgQyfivGYMRQk2zSLynV1QRhpnFSdxQygCFDIRi4Syl%2FovSSpVw9uIjy6HePfG%2FXTjvZo6RltzQ92nuOv5YT1o4rwfxDP01eK0OiRnM5KUk7k%2BT9gEmgGGBMVzblBIReONbqddoe63qV8Rn%2BDo%2Fll%2FgPrmPuub4I%2BDzQHPVWupu3pxSKAl1kf%2FVvh8v8j6Us8%2FOQ52imUaDN6jGGzCsr6zABjqkAYZaDwWvHa4xDp0N%2FPlAQaEp52SyOtryD0hIvf5%2FbRkvDB5LYRKAb96xmThQ9kPJJNzbSR%2BnTO1qJWAeCjf8Zkfj%2FhUJwXRCX5%2BmM1gwSVn%2BAPEMuMfyuixATLYwpIuHovraL8XOErE%2Bk6lnakj7SbfEdEazFdHdhmdqgzhQXiiswVSMwhDsuFJ6tPA%2BfgWL4yzdRUngyLKncR%2F9lcSzWkmw4wM3&X-Amz-Signature=d04914fe3735c2b21801f9e1c64253c40acb1685638893d0517e471a86b22f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SAU3ACF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVuyAJ8ppcDP9cZ3EYJuqFhu77%2FCdXqJoch9%2FBHZfR4wIhANAylCGQe5jxCgXamLfR5WBqoHv4S4NHvp1dVV4ewxdHKv8DCCYQABoMNjM3NDIzMTgzODA1IgxMzHzxRyZ9v8JDpikq3AMUTVT9T7kswY8MeH%2FI6SL7FZ%2FMhV8jdBKdR1Sx6O6B5IqsEIOzwcazj9cPMC9zJeGAIwT%2BTBVebU7zIZV82VZ%2FCjqsFJ0QvlZAeihHo6SZPTnYKXwYZuyP0WxQHHm%2F%2FTq4j9oCOhMD3jRCDtwJilafs1BuXV9S9GJTuTibageeiDG9fjSVfVYBuvju1XN69aYcUMuVCGUWPUgooTKWxS32RcrKy0YZK8r0klK0S0Q%2BwSiPtgCFPs9S24M5uq9ndZ7wyXT%2BMjGKYG0vGj4TSYMJ8rpKYc7g7s6CPnlGHNqA0LyM1i1PLg5x1e6LFnskvZj%2BMwqu3GjVb40BgMrlF76%2BvzqayYqpIle%2FX1%2BjgAZpaeFHoOiYonFpn1Eg1H4N%2FNBSwW1gbsWcnP7KM1h2yPmnbw%2By4P%2BpUGUzgbSHKEKlFTgQyfivGYMRQk2zSLynV1QRhpnFSdxQygCFDIRi4Syl%2FovSSpVw9uIjy6HePfG%2FXTjvZo6RltzQ92nuOv5YT1o4rwfxDP01eK0OiRnM5KUk7k%2BT9gEmgGGBMVzblBIReONbqddoe63qV8Rn%2BDo%2Fll%2FgPrmPuub4I%2BDzQHPVWupu3pxSKAl1kf%2FVvh8v8j6Us8%2FOQ52imUaDN6jGGzCsr6zABjqkAYZaDwWvHa4xDp0N%2FPlAQaEp52SyOtryD0hIvf5%2FbRkvDB5LYRKAb96xmThQ9kPJJNzbSR%2BnTO1qJWAeCjf8Zkfj%2FhUJwXRCX5%2BmM1gwSVn%2BAPEMuMfyuixATLYwpIuHovraL8XOErE%2Bk6lnakj7SbfEdEazFdHdhmdqgzhQXiiswVSMwhDsuFJ6tPA%2BfgWL4yzdRUngyLKncR%2F9lcSzWkmw4wM3&X-Amz-Signature=4ece8cd287dea703f0dcedd6d311be9e74b89c9caf25b2496e8452ab74f666c9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SAU3ACF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVuyAJ8ppcDP9cZ3EYJuqFhu77%2FCdXqJoch9%2FBHZfR4wIhANAylCGQe5jxCgXamLfR5WBqoHv4S4NHvp1dVV4ewxdHKv8DCCYQABoMNjM3NDIzMTgzODA1IgxMzHzxRyZ9v8JDpikq3AMUTVT9T7kswY8MeH%2FI6SL7FZ%2FMhV8jdBKdR1Sx6O6B5IqsEIOzwcazj9cPMC9zJeGAIwT%2BTBVebU7zIZV82VZ%2FCjqsFJ0QvlZAeihHo6SZPTnYKXwYZuyP0WxQHHm%2F%2FTq4j9oCOhMD3jRCDtwJilafs1BuXV9S9GJTuTibageeiDG9fjSVfVYBuvju1XN69aYcUMuVCGUWPUgooTKWxS32RcrKy0YZK8r0klK0S0Q%2BwSiPtgCFPs9S24M5uq9ndZ7wyXT%2BMjGKYG0vGj4TSYMJ8rpKYc7g7s6CPnlGHNqA0LyM1i1PLg5x1e6LFnskvZj%2BMwqu3GjVb40BgMrlF76%2BvzqayYqpIle%2FX1%2BjgAZpaeFHoOiYonFpn1Eg1H4N%2FNBSwW1gbsWcnP7KM1h2yPmnbw%2By4P%2BpUGUzgbSHKEKlFTgQyfivGYMRQk2zSLynV1QRhpnFSdxQygCFDIRi4Syl%2FovSSpVw9uIjy6HePfG%2FXTjvZo6RltzQ92nuOv5YT1o4rwfxDP01eK0OiRnM5KUk7k%2BT9gEmgGGBMVzblBIReONbqddoe63qV8Rn%2BDo%2Fll%2FgPrmPuub4I%2BDzQHPVWupu3pxSKAl1kf%2FVvh8v8j6Us8%2FOQ52imUaDN6jGGzCsr6zABjqkAYZaDwWvHa4xDp0N%2FPlAQaEp52SyOtryD0hIvf5%2FbRkvDB5LYRKAb96xmThQ9kPJJNzbSR%2BnTO1qJWAeCjf8Zkfj%2FhUJwXRCX5%2BmM1gwSVn%2BAPEMuMfyuixATLYwpIuHovraL8XOErE%2Bk6lnakj7SbfEdEazFdHdhmdqgzhQXiiswVSMwhDsuFJ6tPA%2BfgWL4yzdRUngyLKncR%2F9lcSzWkmw4wM3&X-Amz-Signature=64e5b44c82b6224b560722b53c22a6ef6ef25c29816b24cb39f96dd7377d5abf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
