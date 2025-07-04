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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBR5EMD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIB%2Bzl0P6Bhu13JZVHC26nV%2FqmFNiX0GCyKp3H5%2FHsWfuAiEAt7aI%2BZueIRgi4QWNoEHL9RtbHFFkfcTpQBzBi0J068oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK%2FKTLEzhVOVaXKgISrcA2fBcMvdO11rlIaptKmyrBAHXv2lgglFjLOmHjMdAh%2FlixnT6x2MYpCfEkpsbcsDEskaIG2AIx0KODo65coH3uwVgIzwUE1M1XBy9P7YkbWZWVNyqhBab7vwKAArdCp6x8LGHtwLoJGFuUX6mUPas%2BpCDcNMLYJnzf4OXdOjpPPTfAHALiJb0Pe%2FVdSaUj56DiuDOJoPhHAD7T%2BTZ%2BE7tawuH9V0FwOFsa3v8eXn1I3MbbJXrBAjuCVAi%2FMeiyXodhaLdlSswxjuS3b2D0tsKzVTpl5NHWY8Rblth05ZOwilNBhVGPtUQ2hoPFOzHoJT%2BBqfzZQUkNjmgw1rUV%2F356I1u6bFO749TmgcYCegUSlsxW3Iw6PCh3aZq5E8ZnXkOrQDW0Ve8fsP%2F01XLayf6JftflkOnJg6PLOBb%2Bgu%2FXJvenzqq0tYbSS87R23teazPYjEtB1%2FdoPYyb3Qvvs2UH%2FgexwAKmnAPeIXKZujFjFHlyvrdFZ5ClMndFSRtlgkgEnHVKAE3mi2MlC%2F8SgcEqUINl8NU0eZ2QHjdvQk9qWxnM9HrVE%2BlqjfbWvzh90uadQZWAwsj8X7dHsKT9W%2FtguSFvmK0pmx0nKyp2RBq%2BGQx7bZzrAW8AbmYg9uMLTlnMMGOqUBb5N5ikEP%2BhXGuPV%2F8QeDC%2Fv2LGneU3AF%2F%2FwEYB6AtLPk83KiG1g1WQbas2jjVGw98DJNdebISZ8AouQv001JG6jrhlfj0%2F%2FzvEpgYOvJqX%2FV2o8RulWVrMDMqPK8beg7e0JTO79BNDY5xxRgMKR0W13ZWi%2B2xDeklCfurLowsw9fueLueQZQGStvVDH3cX1m%2B1TVWY8HXFiwSkf7W1wGFHbpA93M&X-Amz-Signature=925175231d8105a65e48f7177fa1c4bca1e4441cb98a46a6c775a22d45a5a8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBR5EMD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIB%2Bzl0P6Bhu13JZVHC26nV%2FqmFNiX0GCyKp3H5%2FHsWfuAiEAt7aI%2BZueIRgi4QWNoEHL9RtbHFFkfcTpQBzBi0J068oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK%2FKTLEzhVOVaXKgISrcA2fBcMvdO11rlIaptKmyrBAHXv2lgglFjLOmHjMdAh%2FlixnT6x2MYpCfEkpsbcsDEskaIG2AIx0KODo65coH3uwVgIzwUE1M1XBy9P7YkbWZWVNyqhBab7vwKAArdCp6x8LGHtwLoJGFuUX6mUPas%2BpCDcNMLYJnzf4OXdOjpPPTfAHALiJb0Pe%2FVdSaUj56DiuDOJoPhHAD7T%2BTZ%2BE7tawuH9V0FwOFsa3v8eXn1I3MbbJXrBAjuCVAi%2FMeiyXodhaLdlSswxjuS3b2D0tsKzVTpl5NHWY8Rblth05ZOwilNBhVGPtUQ2hoPFOzHoJT%2BBqfzZQUkNjmgw1rUV%2F356I1u6bFO749TmgcYCegUSlsxW3Iw6PCh3aZq5E8ZnXkOrQDW0Ve8fsP%2F01XLayf6JftflkOnJg6PLOBb%2Bgu%2FXJvenzqq0tYbSS87R23teazPYjEtB1%2FdoPYyb3Qvvs2UH%2FgexwAKmnAPeIXKZujFjFHlyvrdFZ5ClMndFSRtlgkgEnHVKAE3mi2MlC%2F8SgcEqUINl8NU0eZ2QHjdvQk9qWxnM9HrVE%2BlqjfbWvzh90uadQZWAwsj8X7dHsKT9W%2FtguSFvmK0pmx0nKyp2RBq%2BGQx7bZzrAW8AbmYg9uMLTlnMMGOqUBb5N5ikEP%2BhXGuPV%2F8QeDC%2Fv2LGneU3AF%2F%2FwEYB6AtLPk83KiG1g1WQbas2jjVGw98DJNdebISZ8AouQv001JG6jrhlfj0%2F%2FzvEpgYOvJqX%2FV2o8RulWVrMDMqPK8beg7e0JTO79BNDY5xxRgMKR0W13ZWi%2B2xDeklCfurLowsw9fueLueQZQGStvVDH3cX1m%2B1TVWY8HXFiwSkf7W1wGFHbpA93M&X-Amz-Signature=60282e048a8e99d6d3ca0aa1e7d09cfd714f55fe8487fab131a8326dda2cb90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBR5EMD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIB%2Bzl0P6Bhu13JZVHC26nV%2FqmFNiX0GCyKp3H5%2FHsWfuAiEAt7aI%2BZueIRgi4QWNoEHL9RtbHFFkfcTpQBzBi0J068oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK%2FKTLEzhVOVaXKgISrcA2fBcMvdO11rlIaptKmyrBAHXv2lgglFjLOmHjMdAh%2FlixnT6x2MYpCfEkpsbcsDEskaIG2AIx0KODo65coH3uwVgIzwUE1M1XBy9P7YkbWZWVNyqhBab7vwKAArdCp6x8LGHtwLoJGFuUX6mUPas%2BpCDcNMLYJnzf4OXdOjpPPTfAHALiJb0Pe%2FVdSaUj56DiuDOJoPhHAD7T%2BTZ%2BE7tawuH9V0FwOFsa3v8eXn1I3MbbJXrBAjuCVAi%2FMeiyXodhaLdlSswxjuS3b2D0tsKzVTpl5NHWY8Rblth05ZOwilNBhVGPtUQ2hoPFOzHoJT%2BBqfzZQUkNjmgw1rUV%2F356I1u6bFO749TmgcYCegUSlsxW3Iw6PCh3aZq5E8ZnXkOrQDW0Ve8fsP%2F01XLayf6JftflkOnJg6PLOBb%2Bgu%2FXJvenzqq0tYbSS87R23teazPYjEtB1%2FdoPYyb3Qvvs2UH%2FgexwAKmnAPeIXKZujFjFHlyvrdFZ5ClMndFSRtlgkgEnHVKAE3mi2MlC%2F8SgcEqUINl8NU0eZ2QHjdvQk9qWxnM9HrVE%2BlqjfbWvzh90uadQZWAwsj8X7dHsKT9W%2FtguSFvmK0pmx0nKyp2RBq%2BGQx7bZzrAW8AbmYg9uMLTlnMMGOqUBb5N5ikEP%2BhXGuPV%2F8QeDC%2Fv2LGneU3AF%2F%2FwEYB6AtLPk83KiG1g1WQbas2jjVGw98DJNdebISZ8AouQv001JG6jrhlfj0%2F%2FzvEpgYOvJqX%2FV2o8RulWVrMDMqPK8beg7e0JTO79BNDY5xxRgMKR0W13ZWi%2B2xDeklCfurLowsw9fueLueQZQGStvVDH3cX1m%2B1TVWY8HXFiwSkf7W1wGFHbpA93M&X-Amz-Signature=1878c556d66fc7f97e0b664ddd7da5bf588a6535a9a98ce7c6e7f4804f559e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBR5EMD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIB%2Bzl0P6Bhu13JZVHC26nV%2FqmFNiX0GCyKp3H5%2FHsWfuAiEAt7aI%2BZueIRgi4QWNoEHL9RtbHFFkfcTpQBzBi0J068oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK%2FKTLEzhVOVaXKgISrcA2fBcMvdO11rlIaptKmyrBAHXv2lgglFjLOmHjMdAh%2FlixnT6x2MYpCfEkpsbcsDEskaIG2AIx0KODo65coH3uwVgIzwUE1M1XBy9P7YkbWZWVNyqhBab7vwKAArdCp6x8LGHtwLoJGFuUX6mUPas%2BpCDcNMLYJnzf4OXdOjpPPTfAHALiJb0Pe%2FVdSaUj56DiuDOJoPhHAD7T%2BTZ%2BE7tawuH9V0FwOFsa3v8eXn1I3MbbJXrBAjuCVAi%2FMeiyXodhaLdlSswxjuS3b2D0tsKzVTpl5NHWY8Rblth05ZOwilNBhVGPtUQ2hoPFOzHoJT%2BBqfzZQUkNjmgw1rUV%2F356I1u6bFO749TmgcYCegUSlsxW3Iw6PCh3aZq5E8ZnXkOrQDW0Ve8fsP%2F01XLayf6JftflkOnJg6PLOBb%2Bgu%2FXJvenzqq0tYbSS87R23teazPYjEtB1%2FdoPYyb3Qvvs2UH%2FgexwAKmnAPeIXKZujFjFHlyvrdFZ5ClMndFSRtlgkgEnHVKAE3mi2MlC%2F8SgcEqUINl8NU0eZ2QHjdvQk9qWxnM9HrVE%2BlqjfbWvzh90uadQZWAwsj8X7dHsKT9W%2FtguSFvmK0pmx0nKyp2RBq%2BGQx7bZzrAW8AbmYg9uMLTlnMMGOqUBb5N5ikEP%2BhXGuPV%2F8QeDC%2Fv2LGneU3AF%2F%2FwEYB6AtLPk83KiG1g1WQbas2jjVGw98DJNdebISZ8AouQv001JG6jrhlfj0%2F%2FzvEpgYOvJqX%2FV2o8RulWVrMDMqPK8beg7e0JTO79BNDY5xxRgMKR0W13ZWi%2B2xDeklCfurLowsw9fueLueQZQGStvVDH3cX1m%2B1TVWY8HXFiwSkf7W1wGFHbpA93M&X-Amz-Signature=7083a8f1724f16ba47e7b01b6cc126ad3b875f14c0c6edb70940f3168a888b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBR5EMD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIB%2Bzl0P6Bhu13JZVHC26nV%2FqmFNiX0GCyKp3H5%2FHsWfuAiEAt7aI%2BZueIRgi4QWNoEHL9RtbHFFkfcTpQBzBi0J068oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK%2FKTLEzhVOVaXKgISrcA2fBcMvdO11rlIaptKmyrBAHXv2lgglFjLOmHjMdAh%2FlixnT6x2MYpCfEkpsbcsDEskaIG2AIx0KODo65coH3uwVgIzwUE1M1XBy9P7YkbWZWVNyqhBab7vwKAArdCp6x8LGHtwLoJGFuUX6mUPas%2BpCDcNMLYJnzf4OXdOjpPPTfAHALiJb0Pe%2FVdSaUj56DiuDOJoPhHAD7T%2BTZ%2BE7tawuH9V0FwOFsa3v8eXn1I3MbbJXrBAjuCVAi%2FMeiyXodhaLdlSswxjuS3b2D0tsKzVTpl5NHWY8Rblth05ZOwilNBhVGPtUQ2hoPFOzHoJT%2BBqfzZQUkNjmgw1rUV%2F356I1u6bFO749TmgcYCegUSlsxW3Iw6PCh3aZq5E8ZnXkOrQDW0Ve8fsP%2F01XLayf6JftflkOnJg6PLOBb%2Bgu%2FXJvenzqq0tYbSS87R23teazPYjEtB1%2FdoPYyb3Qvvs2UH%2FgexwAKmnAPeIXKZujFjFHlyvrdFZ5ClMndFSRtlgkgEnHVKAE3mi2MlC%2F8SgcEqUINl8NU0eZ2QHjdvQk9qWxnM9HrVE%2BlqjfbWvzh90uadQZWAwsj8X7dHsKT9W%2FtguSFvmK0pmx0nKyp2RBq%2BGQx7bZzrAW8AbmYg9uMLTlnMMGOqUBb5N5ikEP%2BhXGuPV%2F8QeDC%2Fv2LGneU3AF%2F%2FwEYB6AtLPk83KiG1g1WQbas2jjVGw98DJNdebISZ8AouQv001JG6jrhlfj0%2F%2FzvEpgYOvJqX%2FV2o8RulWVrMDMqPK8beg7e0JTO79BNDY5xxRgMKR0W13ZWi%2B2xDeklCfurLowsw9fueLueQZQGStvVDH3cX1m%2B1TVWY8HXFiwSkf7W1wGFHbpA93M&X-Amz-Signature=45ffa4a9c6ce43af1e05a5af4357fc7c61515b9ad382d9c7e41623a3f53a55da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBR5EMD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIB%2Bzl0P6Bhu13JZVHC26nV%2FqmFNiX0GCyKp3H5%2FHsWfuAiEAt7aI%2BZueIRgi4QWNoEHL9RtbHFFkfcTpQBzBi0J068oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK%2FKTLEzhVOVaXKgISrcA2fBcMvdO11rlIaptKmyrBAHXv2lgglFjLOmHjMdAh%2FlixnT6x2MYpCfEkpsbcsDEskaIG2AIx0KODo65coH3uwVgIzwUE1M1XBy9P7YkbWZWVNyqhBab7vwKAArdCp6x8LGHtwLoJGFuUX6mUPas%2BpCDcNMLYJnzf4OXdOjpPPTfAHALiJb0Pe%2FVdSaUj56DiuDOJoPhHAD7T%2BTZ%2BE7tawuH9V0FwOFsa3v8eXn1I3MbbJXrBAjuCVAi%2FMeiyXodhaLdlSswxjuS3b2D0tsKzVTpl5NHWY8Rblth05ZOwilNBhVGPtUQ2hoPFOzHoJT%2BBqfzZQUkNjmgw1rUV%2F356I1u6bFO749TmgcYCegUSlsxW3Iw6PCh3aZq5E8ZnXkOrQDW0Ve8fsP%2F01XLayf6JftflkOnJg6PLOBb%2Bgu%2FXJvenzqq0tYbSS87R23teazPYjEtB1%2FdoPYyb3Qvvs2UH%2FgexwAKmnAPeIXKZujFjFHlyvrdFZ5ClMndFSRtlgkgEnHVKAE3mi2MlC%2F8SgcEqUINl8NU0eZ2QHjdvQk9qWxnM9HrVE%2BlqjfbWvzh90uadQZWAwsj8X7dHsKT9W%2FtguSFvmK0pmx0nKyp2RBq%2BGQx7bZzrAW8AbmYg9uMLTlnMMGOqUBb5N5ikEP%2BhXGuPV%2F8QeDC%2Fv2LGneU3AF%2F%2FwEYB6AtLPk83KiG1g1WQbas2jjVGw98DJNdebISZ8AouQv001JG6jrhlfj0%2F%2FzvEpgYOvJqX%2FV2o8RulWVrMDMqPK8beg7e0JTO79BNDY5xxRgMKR0W13ZWi%2B2xDeklCfurLowsw9fueLueQZQGStvVDH3cX1m%2B1TVWY8HXFiwSkf7W1wGFHbpA93M&X-Amz-Signature=e1eba77f0db363fe72e8c9679124a3f6c5ac3b0f11401499b95bec951ed1097c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBR5EMD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIB%2Bzl0P6Bhu13JZVHC26nV%2FqmFNiX0GCyKp3H5%2FHsWfuAiEAt7aI%2BZueIRgi4QWNoEHL9RtbHFFkfcTpQBzBi0J068oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK%2FKTLEzhVOVaXKgISrcA2fBcMvdO11rlIaptKmyrBAHXv2lgglFjLOmHjMdAh%2FlixnT6x2MYpCfEkpsbcsDEskaIG2AIx0KODo65coH3uwVgIzwUE1M1XBy9P7YkbWZWVNyqhBab7vwKAArdCp6x8LGHtwLoJGFuUX6mUPas%2BpCDcNMLYJnzf4OXdOjpPPTfAHALiJb0Pe%2FVdSaUj56DiuDOJoPhHAD7T%2BTZ%2BE7tawuH9V0FwOFsa3v8eXn1I3MbbJXrBAjuCVAi%2FMeiyXodhaLdlSswxjuS3b2D0tsKzVTpl5NHWY8Rblth05ZOwilNBhVGPtUQ2hoPFOzHoJT%2BBqfzZQUkNjmgw1rUV%2F356I1u6bFO749TmgcYCegUSlsxW3Iw6PCh3aZq5E8ZnXkOrQDW0Ve8fsP%2F01XLayf6JftflkOnJg6PLOBb%2Bgu%2FXJvenzqq0tYbSS87R23teazPYjEtB1%2FdoPYyb3Qvvs2UH%2FgexwAKmnAPeIXKZujFjFHlyvrdFZ5ClMndFSRtlgkgEnHVKAE3mi2MlC%2F8SgcEqUINl8NU0eZ2QHjdvQk9qWxnM9HrVE%2BlqjfbWvzh90uadQZWAwsj8X7dHsKT9W%2FtguSFvmK0pmx0nKyp2RBq%2BGQx7bZzrAW8AbmYg9uMLTlnMMGOqUBb5N5ikEP%2BhXGuPV%2F8QeDC%2Fv2LGneU3AF%2F%2FwEYB6AtLPk83KiG1g1WQbas2jjVGw98DJNdebISZ8AouQv001JG6jrhlfj0%2F%2FzvEpgYOvJqX%2FV2o8RulWVrMDMqPK8beg7e0JTO79BNDY5xxRgMKR0W13ZWi%2B2xDeklCfurLowsw9fueLueQZQGStvVDH3cX1m%2B1TVWY8HXFiwSkf7W1wGFHbpA93M&X-Amz-Signature=7ec4d1e360935d5db53a660ecf6aa36d68d80bf899ec4c859c88bbe5c4f07b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
