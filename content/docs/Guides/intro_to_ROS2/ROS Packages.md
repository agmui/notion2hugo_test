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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4LGICP%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrSAuyvPi3DVPGecX2DiVAZ1%2BTwDTPYWuYRW23622w1AIgCF6jTTiP5p%2FdxKOM96FbkYSPusj86LJ1SIMIZWLIPPoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrUKYvIhIo41DVTeSrcA%2Fq6xl10PpC1ap9a0Jn86GZ6kqR8qvPHlhabs4C0eKNy%2FP3iovnSRgu5nA%2FD%2BAyB6GmvY0ptYbeRvpQyEpzT5bFufussB8H%2FTNWMI1CQUGcgHxhh2KnoMA4L7tyJ8ZO2nHfGl0FFWZmt8fbeN05ivpcqyMurDdRnLGDw8H4S%2Fnlw7JuR2oOTl%2FMLpI41lwyQXYrqi73ESnGB3wZFUxu80XKo38rMMvkF6f%2BJT1pXxGWkmz4N8dyTI72MOo4HrS3aQDRLrFN83QOTdckBfWHGhM8MlXs3y%2BKKAoebHc5bhZR4C3bAU0hGOn9a2okLXVQSn6kzHCUQL7ay00UHIHKxzivAyPiPe7Sy0BzLXiNe3ENqXNvpZNYDntYHl%2F4t8bmxMlOchrDWiYv95Ml5q8KUH0Z59hbBZl3UbHURY1IwShrJaMHIR1txV%2BdPPxhRgHzKOuwFu2uUIp1kXgJWlEypEYKvoKN66DBNcLV%2FkIhEg2qQZCtg6%2Fy3Q79OGhXVvzSyuMKz89GYJ9CDZkqec8LmSf1MU9eaAXhcLjo%2BjSc%2Bi%2FfXt56gG%2ByYfR%2B0Q3M0xFXEOyqSuwAwD22oy6TVpM6Jrgc5zc6%2By5ij9N6PtJuQwratf4LkTCW2hqnq8a07MNDR8LwGOqUBAxCQ%2FvTAfbCsgx2E05WMN4qSJMWMbnz18Lg0bnBZM9kG8iLiZecrfHDZWvTDAG5Bv4AnBjANPsa6O1YVUrQg4TIolaxRWDvMe%2BdyE0ty2PFCD%2BuLjjFlwvNIbhpEg1HscXMHUELQDte1MgXzynlkgaV8oOWxpuQ2M4pyZ9w60oXpXGgidUGhiR49zYGu%2F8FAxTmUEN5xOyjxAd2cfC31l42E6%2F6v&X-Amz-Signature=15cc0168185dcbbe90c0dea0d6f6c72666e71895f6aa20d4f37f87e1fa471aac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4LGICP%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrSAuyvPi3DVPGecX2DiVAZ1%2BTwDTPYWuYRW23622w1AIgCF6jTTiP5p%2FdxKOM96FbkYSPusj86LJ1SIMIZWLIPPoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrUKYvIhIo41DVTeSrcA%2Fq6xl10PpC1ap9a0Jn86GZ6kqR8qvPHlhabs4C0eKNy%2FP3iovnSRgu5nA%2FD%2BAyB6GmvY0ptYbeRvpQyEpzT5bFufussB8H%2FTNWMI1CQUGcgHxhh2KnoMA4L7tyJ8ZO2nHfGl0FFWZmt8fbeN05ivpcqyMurDdRnLGDw8H4S%2Fnlw7JuR2oOTl%2FMLpI41lwyQXYrqi73ESnGB3wZFUxu80XKo38rMMvkF6f%2BJT1pXxGWkmz4N8dyTI72MOo4HrS3aQDRLrFN83QOTdckBfWHGhM8MlXs3y%2BKKAoebHc5bhZR4C3bAU0hGOn9a2okLXVQSn6kzHCUQL7ay00UHIHKxzivAyPiPe7Sy0BzLXiNe3ENqXNvpZNYDntYHl%2F4t8bmxMlOchrDWiYv95Ml5q8KUH0Z59hbBZl3UbHURY1IwShrJaMHIR1txV%2BdPPxhRgHzKOuwFu2uUIp1kXgJWlEypEYKvoKN66DBNcLV%2FkIhEg2qQZCtg6%2Fy3Q79OGhXVvzSyuMKz89GYJ9CDZkqec8LmSf1MU9eaAXhcLjo%2BjSc%2Bi%2FfXt56gG%2ByYfR%2B0Q3M0xFXEOyqSuwAwD22oy6TVpM6Jrgc5zc6%2By5ij9N6PtJuQwratf4LkTCW2hqnq8a07MNDR8LwGOqUBAxCQ%2FvTAfbCsgx2E05WMN4qSJMWMbnz18Lg0bnBZM9kG8iLiZecrfHDZWvTDAG5Bv4AnBjANPsa6O1YVUrQg4TIolaxRWDvMe%2BdyE0ty2PFCD%2BuLjjFlwvNIbhpEg1HscXMHUELQDte1MgXzynlkgaV8oOWxpuQ2M4pyZ9w60oXpXGgidUGhiR49zYGu%2F8FAxTmUEN5xOyjxAd2cfC31l42E6%2F6v&X-Amz-Signature=da6e92ddf6e395e3e2d1e98141e9a9244616f551054c9a66e4faebf283617afc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4LGICP%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrSAuyvPi3DVPGecX2DiVAZ1%2BTwDTPYWuYRW23622w1AIgCF6jTTiP5p%2FdxKOM96FbkYSPusj86LJ1SIMIZWLIPPoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrUKYvIhIo41DVTeSrcA%2Fq6xl10PpC1ap9a0Jn86GZ6kqR8qvPHlhabs4C0eKNy%2FP3iovnSRgu5nA%2FD%2BAyB6GmvY0ptYbeRvpQyEpzT5bFufussB8H%2FTNWMI1CQUGcgHxhh2KnoMA4L7tyJ8ZO2nHfGl0FFWZmt8fbeN05ivpcqyMurDdRnLGDw8H4S%2Fnlw7JuR2oOTl%2FMLpI41lwyQXYrqi73ESnGB3wZFUxu80XKo38rMMvkF6f%2BJT1pXxGWkmz4N8dyTI72MOo4HrS3aQDRLrFN83QOTdckBfWHGhM8MlXs3y%2BKKAoebHc5bhZR4C3bAU0hGOn9a2okLXVQSn6kzHCUQL7ay00UHIHKxzivAyPiPe7Sy0BzLXiNe3ENqXNvpZNYDntYHl%2F4t8bmxMlOchrDWiYv95Ml5q8KUH0Z59hbBZl3UbHURY1IwShrJaMHIR1txV%2BdPPxhRgHzKOuwFu2uUIp1kXgJWlEypEYKvoKN66DBNcLV%2FkIhEg2qQZCtg6%2Fy3Q79OGhXVvzSyuMKz89GYJ9CDZkqec8LmSf1MU9eaAXhcLjo%2BjSc%2Bi%2FfXt56gG%2ByYfR%2B0Q3M0xFXEOyqSuwAwD22oy6TVpM6Jrgc5zc6%2By5ij9N6PtJuQwratf4LkTCW2hqnq8a07MNDR8LwGOqUBAxCQ%2FvTAfbCsgx2E05WMN4qSJMWMbnz18Lg0bnBZM9kG8iLiZecrfHDZWvTDAG5Bv4AnBjANPsa6O1YVUrQg4TIolaxRWDvMe%2BdyE0ty2PFCD%2BuLjjFlwvNIbhpEg1HscXMHUELQDte1MgXzynlkgaV8oOWxpuQ2M4pyZ9w60oXpXGgidUGhiR49zYGu%2F8FAxTmUEN5xOyjxAd2cfC31l42E6%2F6v&X-Amz-Signature=15b536bf26f826bc4a1eb54b7596373be2be59c58092ec1670f775cc12c8d92e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4LGICP%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrSAuyvPi3DVPGecX2DiVAZ1%2BTwDTPYWuYRW23622w1AIgCF6jTTiP5p%2FdxKOM96FbkYSPusj86LJ1SIMIZWLIPPoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrUKYvIhIo41DVTeSrcA%2Fq6xl10PpC1ap9a0Jn86GZ6kqR8qvPHlhabs4C0eKNy%2FP3iovnSRgu5nA%2FD%2BAyB6GmvY0ptYbeRvpQyEpzT5bFufussB8H%2FTNWMI1CQUGcgHxhh2KnoMA4L7tyJ8ZO2nHfGl0FFWZmt8fbeN05ivpcqyMurDdRnLGDw8H4S%2Fnlw7JuR2oOTl%2FMLpI41lwyQXYrqi73ESnGB3wZFUxu80XKo38rMMvkF6f%2BJT1pXxGWkmz4N8dyTI72MOo4HrS3aQDRLrFN83QOTdckBfWHGhM8MlXs3y%2BKKAoebHc5bhZR4C3bAU0hGOn9a2okLXVQSn6kzHCUQL7ay00UHIHKxzivAyPiPe7Sy0BzLXiNe3ENqXNvpZNYDntYHl%2F4t8bmxMlOchrDWiYv95Ml5q8KUH0Z59hbBZl3UbHURY1IwShrJaMHIR1txV%2BdPPxhRgHzKOuwFu2uUIp1kXgJWlEypEYKvoKN66DBNcLV%2FkIhEg2qQZCtg6%2Fy3Q79OGhXVvzSyuMKz89GYJ9CDZkqec8LmSf1MU9eaAXhcLjo%2BjSc%2Bi%2FfXt56gG%2ByYfR%2B0Q3M0xFXEOyqSuwAwD22oy6TVpM6Jrgc5zc6%2By5ij9N6PtJuQwratf4LkTCW2hqnq8a07MNDR8LwGOqUBAxCQ%2FvTAfbCsgx2E05WMN4qSJMWMbnz18Lg0bnBZM9kG8iLiZecrfHDZWvTDAG5Bv4AnBjANPsa6O1YVUrQg4TIolaxRWDvMe%2BdyE0ty2PFCD%2BuLjjFlwvNIbhpEg1HscXMHUELQDte1MgXzynlkgaV8oOWxpuQ2M4pyZ9w60oXpXGgidUGhiR49zYGu%2F8FAxTmUEN5xOyjxAd2cfC31l42E6%2F6v&X-Amz-Signature=de3c3696a57e0ff0a55b0103d6b9a93106bf628cbfbaf235039768010df9a685&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4LGICP%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrSAuyvPi3DVPGecX2DiVAZ1%2BTwDTPYWuYRW23622w1AIgCF6jTTiP5p%2FdxKOM96FbkYSPusj86LJ1SIMIZWLIPPoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrUKYvIhIo41DVTeSrcA%2Fq6xl10PpC1ap9a0Jn86GZ6kqR8qvPHlhabs4C0eKNy%2FP3iovnSRgu5nA%2FD%2BAyB6GmvY0ptYbeRvpQyEpzT5bFufussB8H%2FTNWMI1CQUGcgHxhh2KnoMA4L7tyJ8ZO2nHfGl0FFWZmt8fbeN05ivpcqyMurDdRnLGDw8H4S%2Fnlw7JuR2oOTl%2FMLpI41lwyQXYrqi73ESnGB3wZFUxu80XKo38rMMvkF6f%2BJT1pXxGWkmz4N8dyTI72MOo4HrS3aQDRLrFN83QOTdckBfWHGhM8MlXs3y%2BKKAoebHc5bhZR4C3bAU0hGOn9a2okLXVQSn6kzHCUQL7ay00UHIHKxzivAyPiPe7Sy0BzLXiNe3ENqXNvpZNYDntYHl%2F4t8bmxMlOchrDWiYv95Ml5q8KUH0Z59hbBZl3UbHURY1IwShrJaMHIR1txV%2BdPPxhRgHzKOuwFu2uUIp1kXgJWlEypEYKvoKN66DBNcLV%2FkIhEg2qQZCtg6%2Fy3Q79OGhXVvzSyuMKz89GYJ9CDZkqec8LmSf1MU9eaAXhcLjo%2BjSc%2Bi%2FfXt56gG%2ByYfR%2B0Q3M0xFXEOyqSuwAwD22oy6TVpM6Jrgc5zc6%2By5ij9N6PtJuQwratf4LkTCW2hqnq8a07MNDR8LwGOqUBAxCQ%2FvTAfbCsgx2E05WMN4qSJMWMbnz18Lg0bnBZM9kG8iLiZecrfHDZWvTDAG5Bv4AnBjANPsa6O1YVUrQg4TIolaxRWDvMe%2BdyE0ty2PFCD%2BuLjjFlwvNIbhpEg1HscXMHUELQDte1MgXzynlkgaV8oOWxpuQ2M4pyZ9w60oXpXGgidUGhiR49zYGu%2F8FAxTmUEN5xOyjxAd2cfC31l42E6%2F6v&X-Amz-Signature=a178c56479b9f4ddc2cee91a1f544723143431ca8cb75369e413f676ee13275b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4LGICP%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrSAuyvPi3DVPGecX2DiVAZ1%2BTwDTPYWuYRW23622w1AIgCF6jTTiP5p%2FdxKOM96FbkYSPusj86LJ1SIMIZWLIPPoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrUKYvIhIo41DVTeSrcA%2Fq6xl10PpC1ap9a0Jn86GZ6kqR8qvPHlhabs4C0eKNy%2FP3iovnSRgu5nA%2FD%2BAyB6GmvY0ptYbeRvpQyEpzT5bFufussB8H%2FTNWMI1CQUGcgHxhh2KnoMA4L7tyJ8ZO2nHfGl0FFWZmt8fbeN05ivpcqyMurDdRnLGDw8H4S%2Fnlw7JuR2oOTl%2FMLpI41lwyQXYrqi73ESnGB3wZFUxu80XKo38rMMvkF6f%2BJT1pXxGWkmz4N8dyTI72MOo4HrS3aQDRLrFN83QOTdckBfWHGhM8MlXs3y%2BKKAoebHc5bhZR4C3bAU0hGOn9a2okLXVQSn6kzHCUQL7ay00UHIHKxzivAyPiPe7Sy0BzLXiNe3ENqXNvpZNYDntYHl%2F4t8bmxMlOchrDWiYv95Ml5q8KUH0Z59hbBZl3UbHURY1IwShrJaMHIR1txV%2BdPPxhRgHzKOuwFu2uUIp1kXgJWlEypEYKvoKN66DBNcLV%2FkIhEg2qQZCtg6%2Fy3Q79OGhXVvzSyuMKz89GYJ9CDZkqec8LmSf1MU9eaAXhcLjo%2BjSc%2Bi%2FfXt56gG%2ByYfR%2B0Q3M0xFXEOyqSuwAwD22oy6TVpM6Jrgc5zc6%2By5ij9N6PtJuQwratf4LkTCW2hqnq8a07MNDR8LwGOqUBAxCQ%2FvTAfbCsgx2E05WMN4qSJMWMbnz18Lg0bnBZM9kG8iLiZecrfHDZWvTDAG5Bv4AnBjANPsa6O1YVUrQg4TIolaxRWDvMe%2BdyE0ty2PFCD%2BuLjjFlwvNIbhpEg1HscXMHUELQDte1MgXzynlkgaV8oOWxpuQ2M4pyZ9w60oXpXGgidUGhiR49zYGu%2F8FAxTmUEN5xOyjxAd2cfC31l42E6%2F6v&X-Amz-Signature=48e8d1e753c7aa2b513dad6f83569160bc97c7ea25fd60f82858c54571b8625d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4LGICP%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrSAuyvPi3DVPGecX2DiVAZ1%2BTwDTPYWuYRW23622w1AIgCF6jTTiP5p%2FdxKOM96FbkYSPusj86LJ1SIMIZWLIPPoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrUKYvIhIo41DVTeSrcA%2Fq6xl10PpC1ap9a0Jn86GZ6kqR8qvPHlhabs4C0eKNy%2FP3iovnSRgu5nA%2FD%2BAyB6GmvY0ptYbeRvpQyEpzT5bFufussB8H%2FTNWMI1CQUGcgHxhh2KnoMA4L7tyJ8ZO2nHfGl0FFWZmt8fbeN05ivpcqyMurDdRnLGDw8H4S%2Fnlw7JuR2oOTl%2FMLpI41lwyQXYrqi73ESnGB3wZFUxu80XKo38rMMvkF6f%2BJT1pXxGWkmz4N8dyTI72MOo4HrS3aQDRLrFN83QOTdckBfWHGhM8MlXs3y%2BKKAoebHc5bhZR4C3bAU0hGOn9a2okLXVQSn6kzHCUQL7ay00UHIHKxzivAyPiPe7Sy0BzLXiNe3ENqXNvpZNYDntYHl%2F4t8bmxMlOchrDWiYv95Ml5q8KUH0Z59hbBZl3UbHURY1IwShrJaMHIR1txV%2BdPPxhRgHzKOuwFu2uUIp1kXgJWlEypEYKvoKN66DBNcLV%2FkIhEg2qQZCtg6%2Fy3Q79OGhXVvzSyuMKz89GYJ9CDZkqec8LmSf1MU9eaAXhcLjo%2BjSc%2Bi%2FfXt56gG%2ByYfR%2B0Q3M0xFXEOyqSuwAwD22oy6TVpM6Jrgc5zc6%2By5ij9N6PtJuQwratf4LkTCW2hqnq8a07MNDR8LwGOqUBAxCQ%2FvTAfbCsgx2E05WMN4qSJMWMbnz18Lg0bnBZM9kG8iLiZecrfHDZWvTDAG5Bv4AnBjANPsa6O1YVUrQg4TIolaxRWDvMe%2BdyE0ty2PFCD%2BuLjjFlwvNIbhpEg1HscXMHUELQDte1MgXzynlkgaV8oOWxpuQ2M4pyZ9w60oXpXGgidUGhiR49zYGu%2F8FAxTmUEN5xOyjxAd2cfC31l42E6%2F6v&X-Amz-Signature=b2a84cd8e9314c629d972b91e67a6e5ceee1600cb3899fb1da8927302b0b59b9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
