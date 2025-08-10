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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFF4PXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7VDBA0bKHQd2pF9TOI1w2YMaLSL1OUracaGG29ZZaQIgKpWzyUhMM1a2oR6a7aV5TE4fSNoJipfwGwmyRfxgyroqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQsft05cpVctbRTLyrcA7LtAzuSepO%2FFPAS2IVV0tOKQj%2BE72i2DZUBzrR1oMK9JeVWzkUvQcX76ibFjOoAeMcYryXxwWZM3TaU3lSeWB8IHgDK8xdhA%2BTFHRNaVi7nubgUruJcmTj0zHzQfDnxClIyaPXMrqM97tolJ23K%2B3%2BWlBO7Rvmi3nprmG%2FUDg4NFu3l0hX1pNJDoLCylh%2F9E6a%2ByVDt8OcPiQr2TB2uRfja5r6%2Bmdk7Txm7%2F%2BmIrnfEW99qmi%2BuH9L%2BsNJsxBP6lQiTpfznK%2B2XVXtf60ncXZ9pLcvoMdsnAiNQ%2FVdDDJVi%2BWFD6MQuRxpKK8fc37WP1f85AUfEB0KqXQedTE%2B9Mz3noJfuNCpiFCTG77uXLndnVYnI3JGkFCijAC%2F%2FbK4SYuU%2BDd2FRAWU8M3wNokwTtnlFrw8Mzw%2BoPFzoK%2BW%2F9Nvgmpl3dT%2FcyHAeAthkIt4cCA8YCt7eRgT5u%2FTxNW15aMKym1KvFYiVKz%2FwJOHVIFrgtH6Z5rGGTtimR3UeRjk8M8wyBfAWntmQYIthetfB45Gexgj13mi%2Bzt5BY8TY4uz618wmmOBv8d9fpMKM4znGg9GQggeoe1nOZZklzALf%2B%2F92vT1n5BbXlgCmPKQKRNp%2FFM4tPIvgLRqaih7MLey38QGOqUB%2FKjVQIsfIahpKHHRL40i4OzjYHmRup0lf1qxTBqMkedmBIAdMrvXzMxMO8KZM2UicCCm%2BNh1%2B7ZYudNi3S%2B2GLDZtiMcmY6Xt083S%2Few6GQabshd9lJxXVOt7Xd68YTgTqzgc0T9s1NQcIPlce5cWIlPGvgUoziDK%2FfFwRNTLqfFJOKkG%2B8cJhFvlnLVQ%2F9WbvSBqes9b4gxFAmbnjdZasFA7%2B4n&X-Amz-Signature=2f8d9e4986eb03eba419b04f6834b2f9ab13efc95ce36f81b0f0408394fd5b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFF4PXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7VDBA0bKHQd2pF9TOI1w2YMaLSL1OUracaGG29ZZaQIgKpWzyUhMM1a2oR6a7aV5TE4fSNoJipfwGwmyRfxgyroqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQsft05cpVctbRTLyrcA7LtAzuSepO%2FFPAS2IVV0tOKQj%2BE72i2DZUBzrR1oMK9JeVWzkUvQcX76ibFjOoAeMcYryXxwWZM3TaU3lSeWB8IHgDK8xdhA%2BTFHRNaVi7nubgUruJcmTj0zHzQfDnxClIyaPXMrqM97tolJ23K%2B3%2BWlBO7Rvmi3nprmG%2FUDg4NFu3l0hX1pNJDoLCylh%2F9E6a%2ByVDt8OcPiQr2TB2uRfja5r6%2Bmdk7Txm7%2F%2BmIrnfEW99qmi%2BuH9L%2BsNJsxBP6lQiTpfznK%2B2XVXtf60ncXZ9pLcvoMdsnAiNQ%2FVdDDJVi%2BWFD6MQuRxpKK8fc37WP1f85AUfEB0KqXQedTE%2B9Mz3noJfuNCpiFCTG77uXLndnVYnI3JGkFCijAC%2F%2FbK4SYuU%2BDd2FRAWU8M3wNokwTtnlFrw8Mzw%2BoPFzoK%2BW%2F9Nvgmpl3dT%2FcyHAeAthkIt4cCA8YCt7eRgT5u%2FTxNW15aMKym1KvFYiVKz%2FwJOHVIFrgtH6Z5rGGTtimR3UeRjk8M8wyBfAWntmQYIthetfB45Gexgj13mi%2Bzt5BY8TY4uz618wmmOBv8d9fpMKM4znGg9GQggeoe1nOZZklzALf%2B%2F92vT1n5BbXlgCmPKQKRNp%2FFM4tPIvgLRqaih7MLey38QGOqUB%2FKjVQIsfIahpKHHRL40i4OzjYHmRup0lf1qxTBqMkedmBIAdMrvXzMxMO8KZM2UicCCm%2BNh1%2B7ZYudNi3S%2B2GLDZtiMcmY6Xt083S%2Few6GQabshd9lJxXVOt7Xd68YTgTqzgc0T9s1NQcIPlce5cWIlPGvgUoziDK%2FfFwRNTLqfFJOKkG%2B8cJhFvlnLVQ%2F9WbvSBqes9b4gxFAmbnjdZasFA7%2B4n&X-Amz-Signature=16b26b779fd7aab2229b367c8f1fac3aa85dca4d253fa29e439c1b7363f4ed90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFF4PXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7VDBA0bKHQd2pF9TOI1w2YMaLSL1OUracaGG29ZZaQIgKpWzyUhMM1a2oR6a7aV5TE4fSNoJipfwGwmyRfxgyroqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQsft05cpVctbRTLyrcA7LtAzuSepO%2FFPAS2IVV0tOKQj%2BE72i2DZUBzrR1oMK9JeVWzkUvQcX76ibFjOoAeMcYryXxwWZM3TaU3lSeWB8IHgDK8xdhA%2BTFHRNaVi7nubgUruJcmTj0zHzQfDnxClIyaPXMrqM97tolJ23K%2B3%2BWlBO7Rvmi3nprmG%2FUDg4NFu3l0hX1pNJDoLCylh%2F9E6a%2ByVDt8OcPiQr2TB2uRfja5r6%2Bmdk7Txm7%2F%2BmIrnfEW99qmi%2BuH9L%2BsNJsxBP6lQiTpfznK%2B2XVXtf60ncXZ9pLcvoMdsnAiNQ%2FVdDDJVi%2BWFD6MQuRxpKK8fc37WP1f85AUfEB0KqXQedTE%2B9Mz3noJfuNCpiFCTG77uXLndnVYnI3JGkFCijAC%2F%2FbK4SYuU%2BDd2FRAWU8M3wNokwTtnlFrw8Mzw%2BoPFzoK%2BW%2F9Nvgmpl3dT%2FcyHAeAthkIt4cCA8YCt7eRgT5u%2FTxNW15aMKym1KvFYiVKz%2FwJOHVIFrgtH6Z5rGGTtimR3UeRjk8M8wyBfAWntmQYIthetfB45Gexgj13mi%2Bzt5BY8TY4uz618wmmOBv8d9fpMKM4znGg9GQggeoe1nOZZklzALf%2B%2F92vT1n5BbXlgCmPKQKRNp%2FFM4tPIvgLRqaih7MLey38QGOqUB%2FKjVQIsfIahpKHHRL40i4OzjYHmRup0lf1qxTBqMkedmBIAdMrvXzMxMO8KZM2UicCCm%2BNh1%2B7ZYudNi3S%2B2GLDZtiMcmY6Xt083S%2Few6GQabshd9lJxXVOt7Xd68YTgTqzgc0T9s1NQcIPlce5cWIlPGvgUoziDK%2FfFwRNTLqfFJOKkG%2B8cJhFvlnLVQ%2F9WbvSBqes9b4gxFAmbnjdZasFA7%2B4n&X-Amz-Signature=e6a34580941d6aed0d88ee23e12cd633b6a1e90941f5d244e3e2ca6b912ccaa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFF4PXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7VDBA0bKHQd2pF9TOI1w2YMaLSL1OUracaGG29ZZaQIgKpWzyUhMM1a2oR6a7aV5TE4fSNoJipfwGwmyRfxgyroqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQsft05cpVctbRTLyrcA7LtAzuSepO%2FFPAS2IVV0tOKQj%2BE72i2DZUBzrR1oMK9JeVWzkUvQcX76ibFjOoAeMcYryXxwWZM3TaU3lSeWB8IHgDK8xdhA%2BTFHRNaVi7nubgUruJcmTj0zHzQfDnxClIyaPXMrqM97tolJ23K%2B3%2BWlBO7Rvmi3nprmG%2FUDg4NFu3l0hX1pNJDoLCylh%2F9E6a%2ByVDt8OcPiQr2TB2uRfja5r6%2Bmdk7Txm7%2F%2BmIrnfEW99qmi%2BuH9L%2BsNJsxBP6lQiTpfznK%2B2XVXtf60ncXZ9pLcvoMdsnAiNQ%2FVdDDJVi%2BWFD6MQuRxpKK8fc37WP1f85AUfEB0KqXQedTE%2B9Mz3noJfuNCpiFCTG77uXLndnVYnI3JGkFCijAC%2F%2FbK4SYuU%2BDd2FRAWU8M3wNokwTtnlFrw8Mzw%2BoPFzoK%2BW%2F9Nvgmpl3dT%2FcyHAeAthkIt4cCA8YCt7eRgT5u%2FTxNW15aMKym1KvFYiVKz%2FwJOHVIFrgtH6Z5rGGTtimR3UeRjk8M8wyBfAWntmQYIthetfB45Gexgj13mi%2Bzt5BY8TY4uz618wmmOBv8d9fpMKM4znGg9GQggeoe1nOZZklzALf%2B%2F92vT1n5BbXlgCmPKQKRNp%2FFM4tPIvgLRqaih7MLey38QGOqUB%2FKjVQIsfIahpKHHRL40i4OzjYHmRup0lf1qxTBqMkedmBIAdMrvXzMxMO8KZM2UicCCm%2BNh1%2B7ZYudNi3S%2B2GLDZtiMcmY6Xt083S%2Few6GQabshd9lJxXVOt7Xd68YTgTqzgc0T9s1NQcIPlce5cWIlPGvgUoziDK%2FfFwRNTLqfFJOKkG%2B8cJhFvlnLVQ%2F9WbvSBqes9b4gxFAmbnjdZasFA7%2B4n&X-Amz-Signature=781840bdd0bdad40a9c9275979f17c9566716d31f2d4fee90b37ffbfa211d7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFF4PXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7VDBA0bKHQd2pF9TOI1w2YMaLSL1OUracaGG29ZZaQIgKpWzyUhMM1a2oR6a7aV5TE4fSNoJipfwGwmyRfxgyroqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQsft05cpVctbRTLyrcA7LtAzuSepO%2FFPAS2IVV0tOKQj%2BE72i2DZUBzrR1oMK9JeVWzkUvQcX76ibFjOoAeMcYryXxwWZM3TaU3lSeWB8IHgDK8xdhA%2BTFHRNaVi7nubgUruJcmTj0zHzQfDnxClIyaPXMrqM97tolJ23K%2B3%2BWlBO7Rvmi3nprmG%2FUDg4NFu3l0hX1pNJDoLCylh%2F9E6a%2ByVDt8OcPiQr2TB2uRfja5r6%2Bmdk7Txm7%2F%2BmIrnfEW99qmi%2BuH9L%2BsNJsxBP6lQiTpfznK%2B2XVXtf60ncXZ9pLcvoMdsnAiNQ%2FVdDDJVi%2BWFD6MQuRxpKK8fc37WP1f85AUfEB0KqXQedTE%2B9Mz3noJfuNCpiFCTG77uXLndnVYnI3JGkFCijAC%2F%2FbK4SYuU%2BDd2FRAWU8M3wNokwTtnlFrw8Mzw%2BoPFzoK%2BW%2F9Nvgmpl3dT%2FcyHAeAthkIt4cCA8YCt7eRgT5u%2FTxNW15aMKym1KvFYiVKz%2FwJOHVIFrgtH6Z5rGGTtimR3UeRjk8M8wyBfAWntmQYIthetfB45Gexgj13mi%2Bzt5BY8TY4uz618wmmOBv8d9fpMKM4znGg9GQggeoe1nOZZklzALf%2B%2F92vT1n5BbXlgCmPKQKRNp%2FFM4tPIvgLRqaih7MLey38QGOqUB%2FKjVQIsfIahpKHHRL40i4OzjYHmRup0lf1qxTBqMkedmBIAdMrvXzMxMO8KZM2UicCCm%2BNh1%2B7ZYudNi3S%2B2GLDZtiMcmY6Xt083S%2Few6GQabshd9lJxXVOt7Xd68YTgTqzgc0T9s1NQcIPlce5cWIlPGvgUoziDK%2FfFwRNTLqfFJOKkG%2B8cJhFvlnLVQ%2F9WbvSBqes9b4gxFAmbnjdZasFA7%2B4n&X-Amz-Signature=b7680ba3b388641861ef40b87d8bd20c498d9860bf62e9ca2ceb3c71964fcd79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFF4PXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7VDBA0bKHQd2pF9TOI1w2YMaLSL1OUracaGG29ZZaQIgKpWzyUhMM1a2oR6a7aV5TE4fSNoJipfwGwmyRfxgyroqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQsft05cpVctbRTLyrcA7LtAzuSepO%2FFPAS2IVV0tOKQj%2BE72i2DZUBzrR1oMK9JeVWzkUvQcX76ibFjOoAeMcYryXxwWZM3TaU3lSeWB8IHgDK8xdhA%2BTFHRNaVi7nubgUruJcmTj0zHzQfDnxClIyaPXMrqM97tolJ23K%2B3%2BWlBO7Rvmi3nprmG%2FUDg4NFu3l0hX1pNJDoLCylh%2F9E6a%2ByVDt8OcPiQr2TB2uRfja5r6%2Bmdk7Txm7%2F%2BmIrnfEW99qmi%2BuH9L%2BsNJsxBP6lQiTpfznK%2B2XVXtf60ncXZ9pLcvoMdsnAiNQ%2FVdDDJVi%2BWFD6MQuRxpKK8fc37WP1f85AUfEB0KqXQedTE%2B9Mz3noJfuNCpiFCTG77uXLndnVYnI3JGkFCijAC%2F%2FbK4SYuU%2BDd2FRAWU8M3wNokwTtnlFrw8Mzw%2BoPFzoK%2BW%2F9Nvgmpl3dT%2FcyHAeAthkIt4cCA8YCt7eRgT5u%2FTxNW15aMKym1KvFYiVKz%2FwJOHVIFrgtH6Z5rGGTtimR3UeRjk8M8wyBfAWntmQYIthetfB45Gexgj13mi%2Bzt5BY8TY4uz618wmmOBv8d9fpMKM4znGg9GQggeoe1nOZZklzALf%2B%2F92vT1n5BbXlgCmPKQKRNp%2FFM4tPIvgLRqaih7MLey38QGOqUB%2FKjVQIsfIahpKHHRL40i4OzjYHmRup0lf1qxTBqMkedmBIAdMrvXzMxMO8KZM2UicCCm%2BNh1%2B7ZYudNi3S%2B2GLDZtiMcmY6Xt083S%2Few6GQabshd9lJxXVOt7Xd68YTgTqzgc0T9s1NQcIPlce5cWIlPGvgUoziDK%2FfFwRNTLqfFJOKkG%2B8cJhFvlnLVQ%2F9WbvSBqes9b4gxFAmbnjdZasFA7%2B4n&X-Amz-Signature=6c3e705cda6247c7ae58972c6861c9dd430d0e9413b9036123f492778ed7626a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFF4PXJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7VDBA0bKHQd2pF9TOI1w2YMaLSL1OUracaGG29ZZaQIgKpWzyUhMM1a2oR6a7aV5TE4fSNoJipfwGwmyRfxgyroqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQsft05cpVctbRTLyrcA7LtAzuSepO%2FFPAS2IVV0tOKQj%2BE72i2DZUBzrR1oMK9JeVWzkUvQcX76ibFjOoAeMcYryXxwWZM3TaU3lSeWB8IHgDK8xdhA%2BTFHRNaVi7nubgUruJcmTj0zHzQfDnxClIyaPXMrqM97tolJ23K%2B3%2BWlBO7Rvmi3nprmG%2FUDg4NFu3l0hX1pNJDoLCylh%2F9E6a%2ByVDt8OcPiQr2TB2uRfja5r6%2Bmdk7Txm7%2F%2BmIrnfEW99qmi%2BuH9L%2BsNJsxBP6lQiTpfznK%2B2XVXtf60ncXZ9pLcvoMdsnAiNQ%2FVdDDJVi%2BWFD6MQuRxpKK8fc37WP1f85AUfEB0KqXQedTE%2B9Mz3noJfuNCpiFCTG77uXLndnVYnI3JGkFCijAC%2F%2FbK4SYuU%2BDd2FRAWU8M3wNokwTtnlFrw8Mzw%2BoPFzoK%2BW%2F9Nvgmpl3dT%2FcyHAeAthkIt4cCA8YCt7eRgT5u%2FTxNW15aMKym1KvFYiVKz%2FwJOHVIFrgtH6Z5rGGTtimR3UeRjk8M8wyBfAWntmQYIthetfB45Gexgj13mi%2Bzt5BY8TY4uz618wmmOBv8d9fpMKM4znGg9GQggeoe1nOZZklzALf%2B%2F92vT1n5BbXlgCmPKQKRNp%2FFM4tPIvgLRqaih7MLey38QGOqUB%2FKjVQIsfIahpKHHRL40i4OzjYHmRup0lf1qxTBqMkedmBIAdMrvXzMxMO8KZM2UicCCm%2BNh1%2B7ZYudNi3S%2B2GLDZtiMcmY6Xt083S%2Few6GQabshd9lJxXVOt7Xd68YTgTqzgc0T9s1NQcIPlce5cWIlPGvgUoziDK%2FfFwRNTLqfFJOKkG%2B8cJhFvlnLVQ%2F9WbvSBqes9b4gxFAmbnjdZasFA7%2B4n&X-Amz-Signature=202db1de0686df044aba3e2e0033036f1580e772f0c94fbb85f0d368a15dbcc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
