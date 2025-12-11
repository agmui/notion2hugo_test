---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJ4KQBO%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEg0mqQX0leV5uESECg%2B1nK7SlRF7t1bMplefaCVrhKsAiEAmcoCg%2BrerM7VfCzKKXrC7SGurjD1xcrcWJAfk339mWcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyiHKrB7rLOKOcwnircAxVi9EiFjVr%2BxVY5SbxLqfiCb%2BTVG%2Ff66Yjg7VFUxO7k%2FvChAR34m7FZx%2ByoKhmwPuK5aw2bDqmJlfK9B6B1jfi2Jlrtn9kHrCvElfwaUXSIQHU2yn4RiU5XpEOarmuZTFn2GF7JLDFt874ysKnBlYk4oD13czB9wHcs13Qk6movAyq%2F2VS4ueDlo2Tlqp7J1%2Bbybxuh0qvqRtaEPSBrcs9e4T7eF6wiUM7pOS1nOUq3Hloqmtnv19BVADNVYUEIQoOIY1UhjwzTDvPxsE6BbpIw7cRzlZmPWXpG3qoSAZvOrGBgtu4d1qqwm3Bz2IVd4%2FsALic14XRhfM2X8TgC0tqMmMsaGE2dyA%2FuYUwJxYZisua4zs5eyMdVNz89z4C3NiU13DYw%2FLDMYwcuMX%2Bw8ifiCTquQviMd7Cuc4sikHJia5UIUliGjrtKol7pfNGxyB7rzrsusDt1vGbRwixrcEBLNgS%2BgRP1TVpblgLoIaN804BYF97PMWJ0h%2BnIWGxrYv%2FvqcAYy4ZNn9jbrwdSFn%2FAM0TO9O5mOWjkALzyCGqjbWvQX1UA0EG%2FmovZy2eYNFMsFLLI5gS9tnkiG3KGjhrjgN8J9SotGhvO9bmYlLswwv4nCctPvbvIjBnrML626MkGOqUBVe2FYJJm2KiJGtIK3%2Fc9LKIUgKF3im%2FWDPG%2BtFRuaWcG8T%2Fywf7mxFMWDAZKzMu%2BpihE4QLVLssOyaJhKgCVpNhNmdAT91J39UIfuSucmt57pY%2BetnrndfibMIguSbh4AXAAtHlu24GdMZy6Gy%2BEfEtj64DJCDWj9JXh1CB6mm55p%2FQuZfqZtdIHVYFvfPYoCyWVikh3QYC7nph0%2BGBZxmuh5E05&X-Amz-Signature=039b023a6eca8644c98160adf7ce122aa37a8bd676459958bf4c8870cc526ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJ4KQBO%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEg0mqQX0leV5uESECg%2B1nK7SlRF7t1bMplefaCVrhKsAiEAmcoCg%2BrerM7VfCzKKXrC7SGurjD1xcrcWJAfk339mWcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyiHKrB7rLOKOcwnircAxVi9EiFjVr%2BxVY5SbxLqfiCb%2BTVG%2Ff66Yjg7VFUxO7k%2FvChAR34m7FZx%2ByoKhmwPuK5aw2bDqmJlfK9B6B1jfi2Jlrtn9kHrCvElfwaUXSIQHU2yn4RiU5XpEOarmuZTFn2GF7JLDFt874ysKnBlYk4oD13czB9wHcs13Qk6movAyq%2F2VS4ueDlo2Tlqp7J1%2Bbybxuh0qvqRtaEPSBrcs9e4T7eF6wiUM7pOS1nOUq3Hloqmtnv19BVADNVYUEIQoOIY1UhjwzTDvPxsE6BbpIw7cRzlZmPWXpG3qoSAZvOrGBgtu4d1qqwm3Bz2IVd4%2FsALic14XRhfM2X8TgC0tqMmMsaGE2dyA%2FuYUwJxYZisua4zs5eyMdVNz89z4C3NiU13DYw%2FLDMYwcuMX%2Bw8ifiCTquQviMd7Cuc4sikHJia5UIUliGjrtKol7pfNGxyB7rzrsusDt1vGbRwixrcEBLNgS%2BgRP1TVpblgLoIaN804BYF97PMWJ0h%2BnIWGxrYv%2FvqcAYy4ZNn9jbrwdSFn%2FAM0TO9O5mOWjkALzyCGqjbWvQX1UA0EG%2FmovZy2eYNFMsFLLI5gS9tnkiG3KGjhrjgN8J9SotGhvO9bmYlLswwv4nCctPvbvIjBnrML626MkGOqUBVe2FYJJm2KiJGtIK3%2Fc9LKIUgKF3im%2FWDPG%2BtFRuaWcG8T%2Fywf7mxFMWDAZKzMu%2BpihE4QLVLssOyaJhKgCVpNhNmdAT91J39UIfuSucmt57pY%2BetnrndfibMIguSbh4AXAAtHlu24GdMZy6Gy%2BEfEtj64DJCDWj9JXh1CB6mm55p%2FQuZfqZtdIHVYFvfPYoCyWVikh3QYC7nph0%2BGBZxmuh5E05&X-Amz-Signature=25aaaff0cb664d62e0a2c10a2edf81aef17715c43e99a8cf3289dbdeac330a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJ4KQBO%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEg0mqQX0leV5uESECg%2B1nK7SlRF7t1bMplefaCVrhKsAiEAmcoCg%2BrerM7VfCzKKXrC7SGurjD1xcrcWJAfk339mWcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyiHKrB7rLOKOcwnircAxVi9EiFjVr%2BxVY5SbxLqfiCb%2BTVG%2Ff66Yjg7VFUxO7k%2FvChAR34m7FZx%2ByoKhmwPuK5aw2bDqmJlfK9B6B1jfi2Jlrtn9kHrCvElfwaUXSIQHU2yn4RiU5XpEOarmuZTFn2GF7JLDFt874ysKnBlYk4oD13czB9wHcs13Qk6movAyq%2F2VS4ueDlo2Tlqp7J1%2Bbybxuh0qvqRtaEPSBrcs9e4T7eF6wiUM7pOS1nOUq3Hloqmtnv19BVADNVYUEIQoOIY1UhjwzTDvPxsE6BbpIw7cRzlZmPWXpG3qoSAZvOrGBgtu4d1qqwm3Bz2IVd4%2FsALic14XRhfM2X8TgC0tqMmMsaGE2dyA%2FuYUwJxYZisua4zs5eyMdVNz89z4C3NiU13DYw%2FLDMYwcuMX%2Bw8ifiCTquQviMd7Cuc4sikHJia5UIUliGjrtKol7pfNGxyB7rzrsusDt1vGbRwixrcEBLNgS%2BgRP1TVpblgLoIaN804BYF97PMWJ0h%2BnIWGxrYv%2FvqcAYy4ZNn9jbrwdSFn%2FAM0TO9O5mOWjkALzyCGqjbWvQX1UA0EG%2FmovZy2eYNFMsFLLI5gS9tnkiG3KGjhrjgN8J9SotGhvO9bmYlLswwv4nCctPvbvIjBnrML626MkGOqUBVe2FYJJm2KiJGtIK3%2Fc9LKIUgKF3im%2FWDPG%2BtFRuaWcG8T%2Fywf7mxFMWDAZKzMu%2BpihE4QLVLssOyaJhKgCVpNhNmdAT91J39UIfuSucmt57pY%2BetnrndfibMIguSbh4AXAAtHlu24GdMZy6Gy%2BEfEtj64DJCDWj9JXh1CB6mm55p%2FQuZfqZtdIHVYFvfPYoCyWVikh3QYC7nph0%2BGBZxmuh5E05&X-Amz-Signature=649d8d3e4888006028a2dd22104c76a257cbefab42a62293de220282dd616994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJ4KQBO%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEg0mqQX0leV5uESECg%2B1nK7SlRF7t1bMplefaCVrhKsAiEAmcoCg%2BrerM7VfCzKKXrC7SGurjD1xcrcWJAfk339mWcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyiHKrB7rLOKOcwnircAxVi9EiFjVr%2BxVY5SbxLqfiCb%2BTVG%2Ff66Yjg7VFUxO7k%2FvChAR34m7FZx%2ByoKhmwPuK5aw2bDqmJlfK9B6B1jfi2Jlrtn9kHrCvElfwaUXSIQHU2yn4RiU5XpEOarmuZTFn2GF7JLDFt874ysKnBlYk4oD13czB9wHcs13Qk6movAyq%2F2VS4ueDlo2Tlqp7J1%2Bbybxuh0qvqRtaEPSBrcs9e4T7eF6wiUM7pOS1nOUq3Hloqmtnv19BVADNVYUEIQoOIY1UhjwzTDvPxsE6BbpIw7cRzlZmPWXpG3qoSAZvOrGBgtu4d1qqwm3Bz2IVd4%2FsALic14XRhfM2X8TgC0tqMmMsaGE2dyA%2FuYUwJxYZisua4zs5eyMdVNz89z4C3NiU13DYw%2FLDMYwcuMX%2Bw8ifiCTquQviMd7Cuc4sikHJia5UIUliGjrtKol7pfNGxyB7rzrsusDt1vGbRwixrcEBLNgS%2BgRP1TVpblgLoIaN804BYF97PMWJ0h%2BnIWGxrYv%2FvqcAYy4ZNn9jbrwdSFn%2FAM0TO9O5mOWjkALzyCGqjbWvQX1UA0EG%2FmovZy2eYNFMsFLLI5gS9tnkiG3KGjhrjgN8J9SotGhvO9bmYlLswwv4nCctPvbvIjBnrML626MkGOqUBVe2FYJJm2KiJGtIK3%2Fc9LKIUgKF3im%2FWDPG%2BtFRuaWcG8T%2Fywf7mxFMWDAZKzMu%2BpihE4QLVLssOyaJhKgCVpNhNmdAT91J39UIfuSucmt57pY%2BetnrndfibMIguSbh4AXAAtHlu24GdMZy6Gy%2BEfEtj64DJCDWj9JXh1CB6mm55p%2FQuZfqZtdIHVYFvfPYoCyWVikh3QYC7nph0%2BGBZxmuh5E05&X-Amz-Signature=9645f48ddcec789abb889c0524dcf4b85787a4d49c3f423547512df2c2e6d9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJ4KQBO%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEg0mqQX0leV5uESECg%2B1nK7SlRF7t1bMplefaCVrhKsAiEAmcoCg%2BrerM7VfCzKKXrC7SGurjD1xcrcWJAfk339mWcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyiHKrB7rLOKOcwnircAxVi9EiFjVr%2BxVY5SbxLqfiCb%2BTVG%2Ff66Yjg7VFUxO7k%2FvChAR34m7FZx%2ByoKhmwPuK5aw2bDqmJlfK9B6B1jfi2Jlrtn9kHrCvElfwaUXSIQHU2yn4RiU5XpEOarmuZTFn2GF7JLDFt874ysKnBlYk4oD13czB9wHcs13Qk6movAyq%2F2VS4ueDlo2Tlqp7J1%2Bbybxuh0qvqRtaEPSBrcs9e4T7eF6wiUM7pOS1nOUq3Hloqmtnv19BVADNVYUEIQoOIY1UhjwzTDvPxsE6BbpIw7cRzlZmPWXpG3qoSAZvOrGBgtu4d1qqwm3Bz2IVd4%2FsALic14XRhfM2X8TgC0tqMmMsaGE2dyA%2FuYUwJxYZisua4zs5eyMdVNz89z4C3NiU13DYw%2FLDMYwcuMX%2Bw8ifiCTquQviMd7Cuc4sikHJia5UIUliGjrtKol7pfNGxyB7rzrsusDt1vGbRwixrcEBLNgS%2BgRP1TVpblgLoIaN804BYF97PMWJ0h%2BnIWGxrYv%2FvqcAYy4ZNn9jbrwdSFn%2FAM0TO9O5mOWjkALzyCGqjbWvQX1UA0EG%2FmovZy2eYNFMsFLLI5gS9tnkiG3KGjhrjgN8J9SotGhvO9bmYlLswwv4nCctPvbvIjBnrML626MkGOqUBVe2FYJJm2KiJGtIK3%2Fc9LKIUgKF3im%2FWDPG%2BtFRuaWcG8T%2Fywf7mxFMWDAZKzMu%2BpihE4QLVLssOyaJhKgCVpNhNmdAT91J39UIfuSucmt57pY%2BetnrndfibMIguSbh4AXAAtHlu24GdMZy6Gy%2BEfEtj64DJCDWj9JXh1CB6mm55p%2FQuZfqZtdIHVYFvfPYoCyWVikh3QYC7nph0%2BGBZxmuh5E05&X-Amz-Signature=88245df0d641e84fa4131cd9d1da99980928e174dbcaccff2e7d98d62fefbcd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJ4KQBO%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEg0mqQX0leV5uESECg%2B1nK7SlRF7t1bMplefaCVrhKsAiEAmcoCg%2BrerM7VfCzKKXrC7SGurjD1xcrcWJAfk339mWcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyiHKrB7rLOKOcwnircAxVi9EiFjVr%2BxVY5SbxLqfiCb%2BTVG%2Ff66Yjg7VFUxO7k%2FvChAR34m7FZx%2ByoKhmwPuK5aw2bDqmJlfK9B6B1jfi2Jlrtn9kHrCvElfwaUXSIQHU2yn4RiU5XpEOarmuZTFn2GF7JLDFt874ysKnBlYk4oD13czB9wHcs13Qk6movAyq%2F2VS4ueDlo2Tlqp7J1%2Bbybxuh0qvqRtaEPSBrcs9e4T7eF6wiUM7pOS1nOUq3Hloqmtnv19BVADNVYUEIQoOIY1UhjwzTDvPxsE6BbpIw7cRzlZmPWXpG3qoSAZvOrGBgtu4d1qqwm3Bz2IVd4%2FsALic14XRhfM2X8TgC0tqMmMsaGE2dyA%2FuYUwJxYZisua4zs5eyMdVNz89z4C3NiU13DYw%2FLDMYwcuMX%2Bw8ifiCTquQviMd7Cuc4sikHJia5UIUliGjrtKol7pfNGxyB7rzrsusDt1vGbRwixrcEBLNgS%2BgRP1TVpblgLoIaN804BYF97PMWJ0h%2BnIWGxrYv%2FvqcAYy4ZNn9jbrwdSFn%2FAM0TO9O5mOWjkALzyCGqjbWvQX1UA0EG%2FmovZy2eYNFMsFLLI5gS9tnkiG3KGjhrjgN8J9SotGhvO9bmYlLswwv4nCctPvbvIjBnrML626MkGOqUBVe2FYJJm2KiJGtIK3%2Fc9LKIUgKF3im%2FWDPG%2BtFRuaWcG8T%2Fywf7mxFMWDAZKzMu%2BpihE4QLVLssOyaJhKgCVpNhNmdAT91J39UIfuSucmt57pY%2BetnrndfibMIguSbh4AXAAtHlu24GdMZy6Gy%2BEfEtj64DJCDWj9JXh1CB6mm55p%2FQuZfqZtdIHVYFvfPYoCyWVikh3QYC7nph0%2BGBZxmuh5E05&X-Amz-Signature=22e90c785e320347b482ed21cbc15f8bb887ef6ec639ec9ac902632e1b03d460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJ4KQBO%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEg0mqQX0leV5uESECg%2B1nK7SlRF7t1bMplefaCVrhKsAiEAmcoCg%2BrerM7VfCzKKXrC7SGurjD1xcrcWJAfk339mWcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyiHKrB7rLOKOcwnircAxVi9EiFjVr%2BxVY5SbxLqfiCb%2BTVG%2Ff66Yjg7VFUxO7k%2FvChAR34m7FZx%2ByoKhmwPuK5aw2bDqmJlfK9B6B1jfi2Jlrtn9kHrCvElfwaUXSIQHU2yn4RiU5XpEOarmuZTFn2GF7JLDFt874ysKnBlYk4oD13czB9wHcs13Qk6movAyq%2F2VS4ueDlo2Tlqp7J1%2Bbybxuh0qvqRtaEPSBrcs9e4T7eF6wiUM7pOS1nOUq3Hloqmtnv19BVADNVYUEIQoOIY1UhjwzTDvPxsE6BbpIw7cRzlZmPWXpG3qoSAZvOrGBgtu4d1qqwm3Bz2IVd4%2FsALic14XRhfM2X8TgC0tqMmMsaGE2dyA%2FuYUwJxYZisua4zs5eyMdVNz89z4C3NiU13DYw%2FLDMYwcuMX%2Bw8ifiCTquQviMd7Cuc4sikHJia5UIUliGjrtKol7pfNGxyB7rzrsusDt1vGbRwixrcEBLNgS%2BgRP1TVpblgLoIaN804BYF97PMWJ0h%2BnIWGxrYv%2FvqcAYy4ZNn9jbrwdSFn%2FAM0TO9O5mOWjkALzyCGqjbWvQX1UA0EG%2FmovZy2eYNFMsFLLI5gS9tnkiG3KGjhrjgN8J9SotGhvO9bmYlLswwv4nCctPvbvIjBnrML626MkGOqUBVe2FYJJm2KiJGtIK3%2Fc9LKIUgKF3im%2FWDPG%2BtFRuaWcG8T%2Fywf7mxFMWDAZKzMu%2BpihE4QLVLssOyaJhKgCVpNhNmdAT91J39UIfuSucmt57pY%2BetnrndfibMIguSbh4AXAAtHlu24GdMZy6Gy%2BEfEtj64DJCDWj9JXh1CB6mm55p%2FQuZfqZtdIHVYFvfPYoCyWVikh3QYC7nph0%2BGBZxmuh5E05&X-Amz-Signature=9c4f8c8cd312d2cca821ce1fa74f086a4724ccdb05ca52c6fc8dbedab97f1732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
