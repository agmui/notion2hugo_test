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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4K22L5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEy1r5f6XFYsf7lp%2Fp425KHriw%2FPTCNdqs1StV%2BKSXagIhAMrA20G9VTc1CFTDn%2FFeMJzQH0c3i%2Fl5aFSiu1hYmQ0gKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylpqruBSYl7OpVogwq3ANAnqgqEvMONGo43ZN7ludd3LUKXQQaRjJQ57yDMh3JMothZSxPT8BIwaS3K%2Blg%2BQTqMVxJsiUtO92%2FUvhIRbMbBvy1A3WHpLae135VFsSvvxykLBB8XgMPgVIqVcUfOpOHjzGlZbJ80waz2rowTU3ORNa92g%2FP2tV12x5X%2B2BwbZHOT0pFXV24Or%2BKt9h0QWR67cgBxsho0gYYC3IDm39Dtd7Ae7a6GKCKBt%2F7jH%2BjbeT8BQC%2FRQaIOW9QQRguClnM%2BY8LT146Gs7tgskX%2BgxVM51knNPqUEQXanYAZl9bSjYVNnsmXqKRdx%2FZTcTt0qpbbfTUMZTBM%2FJovvxjOTO3944%2FEUyz5Uo3qSImL8dT3%2FVkWTQOa2vRUuQGzPyVSwTivRIjBXZqqPsaBzj9P%2BgpblYXUxIEhLW7%2BoHDruDJwIBKvIElfYBZH5gwixDxoPlpLVAVq16FrjeCcsqVqGpkgLZKMZw5ySgNIdwS47gz3CaIfag2S3jHSvO5JqI2UlmGPBc%2FcmRCo5iH70VgWi%2Bjgtp6WnoAN7VwwAMNC4FtlfH5yutg%2B8iWqBaM6IoP7xufHbewhcnSS2LrifYZA995liSuOQP%2Fr39z4fftpbCvlB2nXUs94Wsg6Xf4RzD7g5u%2BBjqkAehi1FzxSoZCexR%2B0E84S1ivux%2FZOuy%2Bs8Hd75tZeE3PNg5vBgu8lqbsmjUSnZBluBc97Wty3l4WtqN9Yu5el1k8qQ%2BH6RTM0h0NViyqTKxAV8R%2BzfWqrROhD9DcoY5kcVBoYzAYUM2U0jtBkoGHEckyzMWPnlxt1Z8ur%2FkNK62Z4rqbSmYWNOUqEOyaZ6IjCBcerDsRNoH6vdUQoHjeHUhdUXoV&X-Amz-Signature=41b0bdd330d3252a61d99267836fb75e30ffb6213befb8d71953e5d1b1bc0313&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4K22L5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEy1r5f6XFYsf7lp%2Fp425KHriw%2FPTCNdqs1StV%2BKSXagIhAMrA20G9VTc1CFTDn%2FFeMJzQH0c3i%2Fl5aFSiu1hYmQ0gKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylpqruBSYl7OpVogwq3ANAnqgqEvMONGo43ZN7ludd3LUKXQQaRjJQ57yDMh3JMothZSxPT8BIwaS3K%2Blg%2BQTqMVxJsiUtO92%2FUvhIRbMbBvy1A3WHpLae135VFsSvvxykLBB8XgMPgVIqVcUfOpOHjzGlZbJ80waz2rowTU3ORNa92g%2FP2tV12x5X%2B2BwbZHOT0pFXV24Or%2BKt9h0QWR67cgBxsho0gYYC3IDm39Dtd7Ae7a6GKCKBt%2F7jH%2BjbeT8BQC%2FRQaIOW9QQRguClnM%2BY8LT146Gs7tgskX%2BgxVM51knNPqUEQXanYAZl9bSjYVNnsmXqKRdx%2FZTcTt0qpbbfTUMZTBM%2FJovvxjOTO3944%2FEUyz5Uo3qSImL8dT3%2FVkWTQOa2vRUuQGzPyVSwTivRIjBXZqqPsaBzj9P%2BgpblYXUxIEhLW7%2BoHDruDJwIBKvIElfYBZH5gwixDxoPlpLVAVq16FrjeCcsqVqGpkgLZKMZw5ySgNIdwS47gz3CaIfag2S3jHSvO5JqI2UlmGPBc%2FcmRCo5iH70VgWi%2Bjgtp6WnoAN7VwwAMNC4FtlfH5yutg%2B8iWqBaM6IoP7xufHbewhcnSS2LrifYZA995liSuOQP%2Fr39z4fftpbCvlB2nXUs94Wsg6Xf4RzD7g5u%2BBjqkAehi1FzxSoZCexR%2B0E84S1ivux%2FZOuy%2Bs8Hd75tZeE3PNg5vBgu8lqbsmjUSnZBluBc97Wty3l4WtqN9Yu5el1k8qQ%2BH6RTM0h0NViyqTKxAV8R%2BzfWqrROhD9DcoY5kcVBoYzAYUM2U0jtBkoGHEckyzMWPnlxt1Z8ur%2FkNK62Z4rqbSmYWNOUqEOyaZ6IjCBcerDsRNoH6vdUQoHjeHUhdUXoV&X-Amz-Signature=4e12b5aab93af550689663986a2332e4a14a3c48b23a80c9d5837db0f4b16282&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4K22L5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEy1r5f6XFYsf7lp%2Fp425KHriw%2FPTCNdqs1StV%2BKSXagIhAMrA20G9VTc1CFTDn%2FFeMJzQH0c3i%2Fl5aFSiu1hYmQ0gKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylpqruBSYl7OpVogwq3ANAnqgqEvMONGo43ZN7ludd3LUKXQQaRjJQ57yDMh3JMothZSxPT8BIwaS3K%2Blg%2BQTqMVxJsiUtO92%2FUvhIRbMbBvy1A3WHpLae135VFsSvvxykLBB8XgMPgVIqVcUfOpOHjzGlZbJ80waz2rowTU3ORNa92g%2FP2tV12x5X%2B2BwbZHOT0pFXV24Or%2BKt9h0QWR67cgBxsho0gYYC3IDm39Dtd7Ae7a6GKCKBt%2F7jH%2BjbeT8BQC%2FRQaIOW9QQRguClnM%2BY8LT146Gs7tgskX%2BgxVM51knNPqUEQXanYAZl9bSjYVNnsmXqKRdx%2FZTcTt0qpbbfTUMZTBM%2FJovvxjOTO3944%2FEUyz5Uo3qSImL8dT3%2FVkWTQOa2vRUuQGzPyVSwTivRIjBXZqqPsaBzj9P%2BgpblYXUxIEhLW7%2BoHDruDJwIBKvIElfYBZH5gwixDxoPlpLVAVq16FrjeCcsqVqGpkgLZKMZw5ySgNIdwS47gz3CaIfag2S3jHSvO5JqI2UlmGPBc%2FcmRCo5iH70VgWi%2Bjgtp6WnoAN7VwwAMNC4FtlfH5yutg%2B8iWqBaM6IoP7xufHbewhcnSS2LrifYZA995liSuOQP%2Fr39z4fftpbCvlB2nXUs94Wsg6Xf4RzD7g5u%2BBjqkAehi1FzxSoZCexR%2B0E84S1ivux%2FZOuy%2Bs8Hd75tZeE3PNg5vBgu8lqbsmjUSnZBluBc97Wty3l4WtqN9Yu5el1k8qQ%2BH6RTM0h0NViyqTKxAV8R%2BzfWqrROhD9DcoY5kcVBoYzAYUM2U0jtBkoGHEckyzMWPnlxt1Z8ur%2FkNK62Z4rqbSmYWNOUqEOyaZ6IjCBcerDsRNoH6vdUQoHjeHUhdUXoV&X-Amz-Signature=c104000578018fe185d822d2f725d268e66ad9092e4c6d492de77ac65b1e5986&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4K22L5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEy1r5f6XFYsf7lp%2Fp425KHriw%2FPTCNdqs1StV%2BKSXagIhAMrA20G9VTc1CFTDn%2FFeMJzQH0c3i%2Fl5aFSiu1hYmQ0gKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylpqruBSYl7OpVogwq3ANAnqgqEvMONGo43ZN7ludd3LUKXQQaRjJQ57yDMh3JMothZSxPT8BIwaS3K%2Blg%2BQTqMVxJsiUtO92%2FUvhIRbMbBvy1A3WHpLae135VFsSvvxykLBB8XgMPgVIqVcUfOpOHjzGlZbJ80waz2rowTU3ORNa92g%2FP2tV12x5X%2B2BwbZHOT0pFXV24Or%2BKt9h0QWR67cgBxsho0gYYC3IDm39Dtd7Ae7a6GKCKBt%2F7jH%2BjbeT8BQC%2FRQaIOW9QQRguClnM%2BY8LT146Gs7tgskX%2BgxVM51knNPqUEQXanYAZl9bSjYVNnsmXqKRdx%2FZTcTt0qpbbfTUMZTBM%2FJovvxjOTO3944%2FEUyz5Uo3qSImL8dT3%2FVkWTQOa2vRUuQGzPyVSwTivRIjBXZqqPsaBzj9P%2BgpblYXUxIEhLW7%2BoHDruDJwIBKvIElfYBZH5gwixDxoPlpLVAVq16FrjeCcsqVqGpkgLZKMZw5ySgNIdwS47gz3CaIfag2S3jHSvO5JqI2UlmGPBc%2FcmRCo5iH70VgWi%2Bjgtp6WnoAN7VwwAMNC4FtlfH5yutg%2B8iWqBaM6IoP7xufHbewhcnSS2LrifYZA995liSuOQP%2Fr39z4fftpbCvlB2nXUs94Wsg6Xf4RzD7g5u%2BBjqkAehi1FzxSoZCexR%2B0E84S1ivux%2FZOuy%2Bs8Hd75tZeE3PNg5vBgu8lqbsmjUSnZBluBc97Wty3l4WtqN9Yu5el1k8qQ%2BH6RTM0h0NViyqTKxAV8R%2BzfWqrROhD9DcoY5kcVBoYzAYUM2U0jtBkoGHEckyzMWPnlxt1Z8ur%2FkNK62Z4rqbSmYWNOUqEOyaZ6IjCBcerDsRNoH6vdUQoHjeHUhdUXoV&X-Amz-Signature=10027731a5f3dfe39ec9d09ca91fa21c2497427202773d6eee029fb5e41d0b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4K22L5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEy1r5f6XFYsf7lp%2Fp425KHriw%2FPTCNdqs1StV%2BKSXagIhAMrA20G9VTc1CFTDn%2FFeMJzQH0c3i%2Fl5aFSiu1hYmQ0gKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylpqruBSYl7OpVogwq3ANAnqgqEvMONGo43ZN7ludd3LUKXQQaRjJQ57yDMh3JMothZSxPT8BIwaS3K%2Blg%2BQTqMVxJsiUtO92%2FUvhIRbMbBvy1A3WHpLae135VFsSvvxykLBB8XgMPgVIqVcUfOpOHjzGlZbJ80waz2rowTU3ORNa92g%2FP2tV12x5X%2B2BwbZHOT0pFXV24Or%2BKt9h0QWR67cgBxsho0gYYC3IDm39Dtd7Ae7a6GKCKBt%2F7jH%2BjbeT8BQC%2FRQaIOW9QQRguClnM%2BY8LT146Gs7tgskX%2BgxVM51knNPqUEQXanYAZl9bSjYVNnsmXqKRdx%2FZTcTt0qpbbfTUMZTBM%2FJovvxjOTO3944%2FEUyz5Uo3qSImL8dT3%2FVkWTQOa2vRUuQGzPyVSwTivRIjBXZqqPsaBzj9P%2BgpblYXUxIEhLW7%2BoHDruDJwIBKvIElfYBZH5gwixDxoPlpLVAVq16FrjeCcsqVqGpkgLZKMZw5ySgNIdwS47gz3CaIfag2S3jHSvO5JqI2UlmGPBc%2FcmRCo5iH70VgWi%2Bjgtp6WnoAN7VwwAMNC4FtlfH5yutg%2B8iWqBaM6IoP7xufHbewhcnSS2LrifYZA995liSuOQP%2Fr39z4fftpbCvlB2nXUs94Wsg6Xf4RzD7g5u%2BBjqkAehi1FzxSoZCexR%2B0E84S1ivux%2FZOuy%2Bs8Hd75tZeE3PNg5vBgu8lqbsmjUSnZBluBc97Wty3l4WtqN9Yu5el1k8qQ%2BH6RTM0h0NViyqTKxAV8R%2BzfWqrROhD9DcoY5kcVBoYzAYUM2U0jtBkoGHEckyzMWPnlxt1Z8ur%2FkNK62Z4rqbSmYWNOUqEOyaZ6IjCBcerDsRNoH6vdUQoHjeHUhdUXoV&X-Amz-Signature=21e9c8846abf8343934ee5b190b1adf626296a21a5ec98bd5f3db46a06c79dba&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4K22L5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEy1r5f6XFYsf7lp%2Fp425KHriw%2FPTCNdqs1StV%2BKSXagIhAMrA20G9VTc1CFTDn%2FFeMJzQH0c3i%2Fl5aFSiu1hYmQ0gKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylpqruBSYl7OpVogwq3ANAnqgqEvMONGo43ZN7ludd3LUKXQQaRjJQ57yDMh3JMothZSxPT8BIwaS3K%2Blg%2BQTqMVxJsiUtO92%2FUvhIRbMbBvy1A3WHpLae135VFsSvvxykLBB8XgMPgVIqVcUfOpOHjzGlZbJ80waz2rowTU3ORNa92g%2FP2tV12x5X%2B2BwbZHOT0pFXV24Or%2BKt9h0QWR67cgBxsho0gYYC3IDm39Dtd7Ae7a6GKCKBt%2F7jH%2BjbeT8BQC%2FRQaIOW9QQRguClnM%2BY8LT146Gs7tgskX%2BgxVM51knNPqUEQXanYAZl9bSjYVNnsmXqKRdx%2FZTcTt0qpbbfTUMZTBM%2FJovvxjOTO3944%2FEUyz5Uo3qSImL8dT3%2FVkWTQOa2vRUuQGzPyVSwTivRIjBXZqqPsaBzj9P%2BgpblYXUxIEhLW7%2BoHDruDJwIBKvIElfYBZH5gwixDxoPlpLVAVq16FrjeCcsqVqGpkgLZKMZw5ySgNIdwS47gz3CaIfag2S3jHSvO5JqI2UlmGPBc%2FcmRCo5iH70VgWi%2Bjgtp6WnoAN7VwwAMNC4FtlfH5yutg%2B8iWqBaM6IoP7xufHbewhcnSS2LrifYZA995liSuOQP%2Fr39z4fftpbCvlB2nXUs94Wsg6Xf4RzD7g5u%2BBjqkAehi1FzxSoZCexR%2B0E84S1ivux%2FZOuy%2Bs8Hd75tZeE3PNg5vBgu8lqbsmjUSnZBluBc97Wty3l4WtqN9Yu5el1k8qQ%2BH6RTM0h0NViyqTKxAV8R%2BzfWqrROhD9DcoY5kcVBoYzAYUM2U0jtBkoGHEckyzMWPnlxt1Z8ur%2FkNK62Z4rqbSmYWNOUqEOyaZ6IjCBcerDsRNoH6vdUQoHjeHUhdUXoV&X-Amz-Signature=717e3060e44f14a80795b7d801e564fb6a2281cc3929d37cac743dcc8569e7f9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4K22L5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEy1r5f6XFYsf7lp%2Fp425KHriw%2FPTCNdqs1StV%2BKSXagIhAMrA20G9VTc1CFTDn%2FFeMJzQH0c3i%2Fl5aFSiu1hYmQ0gKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylpqruBSYl7OpVogwq3ANAnqgqEvMONGo43ZN7ludd3LUKXQQaRjJQ57yDMh3JMothZSxPT8BIwaS3K%2Blg%2BQTqMVxJsiUtO92%2FUvhIRbMbBvy1A3WHpLae135VFsSvvxykLBB8XgMPgVIqVcUfOpOHjzGlZbJ80waz2rowTU3ORNa92g%2FP2tV12x5X%2B2BwbZHOT0pFXV24Or%2BKt9h0QWR67cgBxsho0gYYC3IDm39Dtd7Ae7a6GKCKBt%2F7jH%2BjbeT8BQC%2FRQaIOW9QQRguClnM%2BY8LT146Gs7tgskX%2BgxVM51knNPqUEQXanYAZl9bSjYVNnsmXqKRdx%2FZTcTt0qpbbfTUMZTBM%2FJovvxjOTO3944%2FEUyz5Uo3qSImL8dT3%2FVkWTQOa2vRUuQGzPyVSwTivRIjBXZqqPsaBzj9P%2BgpblYXUxIEhLW7%2BoHDruDJwIBKvIElfYBZH5gwixDxoPlpLVAVq16FrjeCcsqVqGpkgLZKMZw5ySgNIdwS47gz3CaIfag2S3jHSvO5JqI2UlmGPBc%2FcmRCo5iH70VgWi%2Bjgtp6WnoAN7VwwAMNC4FtlfH5yutg%2B8iWqBaM6IoP7xufHbewhcnSS2LrifYZA995liSuOQP%2Fr39z4fftpbCvlB2nXUs94Wsg6Xf4RzD7g5u%2BBjqkAehi1FzxSoZCexR%2B0E84S1ivux%2FZOuy%2Bs8Hd75tZeE3PNg5vBgu8lqbsmjUSnZBluBc97Wty3l4WtqN9Yu5el1k8qQ%2BH6RTM0h0NViyqTKxAV8R%2BzfWqrROhD9DcoY5kcVBoYzAYUM2U0jtBkoGHEckyzMWPnlxt1Z8ur%2FkNK62Z4rqbSmYWNOUqEOyaZ6IjCBcerDsRNoH6vdUQoHjeHUhdUXoV&X-Amz-Signature=c6adfe799eca72f851ac2f934a267ad17336d3b804105311efc1c2901b379098&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
