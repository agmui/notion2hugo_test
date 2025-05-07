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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6M6JCWP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpwMHg8Bvv43AnCim%2FVd7h9%2F%2FGmEZ%2FnmbSW8Vz6UzcHwIhAJp1VbY9FK67gdkfFJ%2BadCrHgR8ipSxpgMrffgCfKBV4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxCpjrNKcuDvNSvQ94q3AMg%2B63OIXk9K50izHQut9L1dClsnUhoOolDJPHM7OWSiAJC7goeJs%2FVocfCBGxwqh%2BmQ6CIljJjWtBHJt4QnRjlK5juUYuRISklEI9RniklP7PbGVHIf1ae74O8Uqij31duhb84hczee7edl9LiC5A1mRZvCCtMteMhEpPtfzXFecnAWFCUiSVCHnaSlyr%2F73DGbcFIR9lD20%2FaMZu%2FArJhy48HrmuzMZ3GCz%2FQKo5HYdgS3fDxUtQ2S3XY5WGgX1tbqWgOaQREBkYDwlI5yejZpeJ6wTdGLZh7wMGwMYroUSH2XdJnnTUHDBVfyoqqNCDPeA6gw7WGUv%2F6KHQjn78t763goNia%2BujBEEE2OdavDGEFawavy7ykYt%2B0zjAu7vEmTsjovtgn9w1uSuL79MY16KoHnTAiaZ8w7gt1eIgJbhVfxws6kZftWcUXT6L3tvCmLi5bA3zvkjsHFZs2E75RSWpgsn0pv32NK6%2FAysrhtKJq5Qmn7DCQW8%2Fyjf8c40sV9b3DeAhQ3mg079%2F8b6Q2EMLONRjirtluqHY1fqQKuHQUjk65SlynzcpUBiaruQvXK9qBymYa5EObtAmduXrS%2FQEAjyGyNABoqE0fSAhmx5HNpeGUrVIr7jxKRTDhm%2B7ABjqkAZenDfloi4xvvjPT5E2GZhjSeoVkkE4CDOd4XFCFQWwc3LMist%2FOhH29h7%2FJigWjPFkFlE1%2FGfZnXG9YYpRgxAYTFN2lvFaI2RhP9hSU1OK8UAH6sP8lP%2BwDz1d1lkC0zBbSS2lHS7XmS5GI1%2BN1PZouC7oZVo54PxPCOavtsi5XH6rPO0LtFhe2eVrsPR8bjrjJx4jEYlCxoO6zScsxTPNlQvrs&X-Amz-Signature=5a287b5ccea78388ca9d60b9c964b4bf1bc87db7444c9b4267c0e4d338cd83b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6M6JCWP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpwMHg8Bvv43AnCim%2FVd7h9%2F%2FGmEZ%2FnmbSW8Vz6UzcHwIhAJp1VbY9FK67gdkfFJ%2BadCrHgR8ipSxpgMrffgCfKBV4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxCpjrNKcuDvNSvQ94q3AMg%2B63OIXk9K50izHQut9L1dClsnUhoOolDJPHM7OWSiAJC7goeJs%2FVocfCBGxwqh%2BmQ6CIljJjWtBHJt4QnRjlK5juUYuRISklEI9RniklP7PbGVHIf1ae74O8Uqij31duhb84hczee7edl9LiC5A1mRZvCCtMteMhEpPtfzXFecnAWFCUiSVCHnaSlyr%2F73DGbcFIR9lD20%2FaMZu%2FArJhy48HrmuzMZ3GCz%2FQKo5HYdgS3fDxUtQ2S3XY5WGgX1tbqWgOaQREBkYDwlI5yejZpeJ6wTdGLZh7wMGwMYroUSH2XdJnnTUHDBVfyoqqNCDPeA6gw7WGUv%2F6KHQjn78t763goNia%2BujBEEE2OdavDGEFawavy7ykYt%2B0zjAu7vEmTsjovtgn9w1uSuL79MY16KoHnTAiaZ8w7gt1eIgJbhVfxws6kZftWcUXT6L3tvCmLi5bA3zvkjsHFZs2E75RSWpgsn0pv32NK6%2FAysrhtKJq5Qmn7DCQW8%2Fyjf8c40sV9b3DeAhQ3mg079%2F8b6Q2EMLONRjirtluqHY1fqQKuHQUjk65SlynzcpUBiaruQvXK9qBymYa5EObtAmduXrS%2FQEAjyGyNABoqE0fSAhmx5HNpeGUrVIr7jxKRTDhm%2B7ABjqkAZenDfloi4xvvjPT5E2GZhjSeoVkkE4CDOd4XFCFQWwc3LMist%2FOhH29h7%2FJigWjPFkFlE1%2FGfZnXG9YYpRgxAYTFN2lvFaI2RhP9hSU1OK8UAH6sP8lP%2BwDz1d1lkC0zBbSS2lHS7XmS5GI1%2BN1PZouC7oZVo54PxPCOavtsi5XH6rPO0LtFhe2eVrsPR8bjrjJx4jEYlCxoO6zScsxTPNlQvrs&X-Amz-Signature=a2ecb25c132694b6ae76e81c5282d4a20ddbf69fdfdc23b8b2c382659f7453e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6M6JCWP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpwMHg8Bvv43AnCim%2FVd7h9%2F%2FGmEZ%2FnmbSW8Vz6UzcHwIhAJp1VbY9FK67gdkfFJ%2BadCrHgR8ipSxpgMrffgCfKBV4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxCpjrNKcuDvNSvQ94q3AMg%2B63OIXk9K50izHQut9L1dClsnUhoOolDJPHM7OWSiAJC7goeJs%2FVocfCBGxwqh%2BmQ6CIljJjWtBHJt4QnRjlK5juUYuRISklEI9RniklP7PbGVHIf1ae74O8Uqij31duhb84hczee7edl9LiC5A1mRZvCCtMteMhEpPtfzXFecnAWFCUiSVCHnaSlyr%2F73DGbcFIR9lD20%2FaMZu%2FArJhy48HrmuzMZ3GCz%2FQKo5HYdgS3fDxUtQ2S3XY5WGgX1tbqWgOaQREBkYDwlI5yejZpeJ6wTdGLZh7wMGwMYroUSH2XdJnnTUHDBVfyoqqNCDPeA6gw7WGUv%2F6KHQjn78t763goNia%2BujBEEE2OdavDGEFawavy7ykYt%2B0zjAu7vEmTsjovtgn9w1uSuL79MY16KoHnTAiaZ8w7gt1eIgJbhVfxws6kZftWcUXT6L3tvCmLi5bA3zvkjsHFZs2E75RSWpgsn0pv32NK6%2FAysrhtKJq5Qmn7DCQW8%2Fyjf8c40sV9b3DeAhQ3mg079%2F8b6Q2EMLONRjirtluqHY1fqQKuHQUjk65SlynzcpUBiaruQvXK9qBymYa5EObtAmduXrS%2FQEAjyGyNABoqE0fSAhmx5HNpeGUrVIr7jxKRTDhm%2B7ABjqkAZenDfloi4xvvjPT5E2GZhjSeoVkkE4CDOd4XFCFQWwc3LMist%2FOhH29h7%2FJigWjPFkFlE1%2FGfZnXG9YYpRgxAYTFN2lvFaI2RhP9hSU1OK8UAH6sP8lP%2BwDz1d1lkC0zBbSS2lHS7XmS5GI1%2BN1PZouC7oZVo54PxPCOavtsi5XH6rPO0LtFhe2eVrsPR8bjrjJx4jEYlCxoO6zScsxTPNlQvrs&X-Amz-Signature=d0b4f3f14b6981a153b5721d7a25a2a99bbeb1d48a5441d1b583a2a2a2f8588b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6M6JCWP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpwMHg8Bvv43AnCim%2FVd7h9%2F%2FGmEZ%2FnmbSW8Vz6UzcHwIhAJp1VbY9FK67gdkfFJ%2BadCrHgR8ipSxpgMrffgCfKBV4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxCpjrNKcuDvNSvQ94q3AMg%2B63OIXk9K50izHQut9L1dClsnUhoOolDJPHM7OWSiAJC7goeJs%2FVocfCBGxwqh%2BmQ6CIljJjWtBHJt4QnRjlK5juUYuRISklEI9RniklP7PbGVHIf1ae74O8Uqij31duhb84hczee7edl9LiC5A1mRZvCCtMteMhEpPtfzXFecnAWFCUiSVCHnaSlyr%2F73DGbcFIR9lD20%2FaMZu%2FArJhy48HrmuzMZ3GCz%2FQKo5HYdgS3fDxUtQ2S3XY5WGgX1tbqWgOaQREBkYDwlI5yejZpeJ6wTdGLZh7wMGwMYroUSH2XdJnnTUHDBVfyoqqNCDPeA6gw7WGUv%2F6KHQjn78t763goNia%2BujBEEE2OdavDGEFawavy7ykYt%2B0zjAu7vEmTsjovtgn9w1uSuL79MY16KoHnTAiaZ8w7gt1eIgJbhVfxws6kZftWcUXT6L3tvCmLi5bA3zvkjsHFZs2E75RSWpgsn0pv32NK6%2FAysrhtKJq5Qmn7DCQW8%2Fyjf8c40sV9b3DeAhQ3mg079%2F8b6Q2EMLONRjirtluqHY1fqQKuHQUjk65SlynzcpUBiaruQvXK9qBymYa5EObtAmduXrS%2FQEAjyGyNABoqE0fSAhmx5HNpeGUrVIr7jxKRTDhm%2B7ABjqkAZenDfloi4xvvjPT5E2GZhjSeoVkkE4CDOd4XFCFQWwc3LMist%2FOhH29h7%2FJigWjPFkFlE1%2FGfZnXG9YYpRgxAYTFN2lvFaI2RhP9hSU1OK8UAH6sP8lP%2BwDz1d1lkC0zBbSS2lHS7XmS5GI1%2BN1PZouC7oZVo54PxPCOavtsi5XH6rPO0LtFhe2eVrsPR8bjrjJx4jEYlCxoO6zScsxTPNlQvrs&X-Amz-Signature=5e837bd1d4949a3230e9bc8c0e489afa6f06c91e280f08d1b842bf1103ba9fec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6M6JCWP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpwMHg8Bvv43AnCim%2FVd7h9%2F%2FGmEZ%2FnmbSW8Vz6UzcHwIhAJp1VbY9FK67gdkfFJ%2BadCrHgR8ipSxpgMrffgCfKBV4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxCpjrNKcuDvNSvQ94q3AMg%2B63OIXk9K50izHQut9L1dClsnUhoOolDJPHM7OWSiAJC7goeJs%2FVocfCBGxwqh%2BmQ6CIljJjWtBHJt4QnRjlK5juUYuRISklEI9RniklP7PbGVHIf1ae74O8Uqij31duhb84hczee7edl9LiC5A1mRZvCCtMteMhEpPtfzXFecnAWFCUiSVCHnaSlyr%2F73DGbcFIR9lD20%2FaMZu%2FArJhy48HrmuzMZ3GCz%2FQKo5HYdgS3fDxUtQ2S3XY5WGgX1tbqWgOaQREBkYDwlI5yejZpeJ6wTdGLZh7wMGwMYroUSH2XdJnnTUHDBVfyoqqNCDPeA6gw7WGUv%2F6KHQjn78t763goNia%2BujBEEE2OdavDGEFawavy7ykYt%2B0zjAu7vEmTsjovtgn9w1uSuL79MY16KoHnTAiaZ8w7gt1eIgJbhVfxws6kZftWcUXT6L3tvCmLi5bA3zvkjsHFZs2E75RSWpgsn0pv32NK6%2FAysrhtKJq5Qmn7DCQW8%2Fyjf8c40sV9b3DeAhQ3mg079%2F8b6Q2EMLONRjirtluqHY1fqQKuHQUjk65SlynzcpUBiaruQvXK9qBymYa5EObtAmduXrS%2FQEAjyGyNABoqE0fSAhmx5HNpeGUrVIr7jxKRTDhm%2B7ABjqkAZenDfloi4xvvjPT5E2GZhjSeoVkkE4CDOd4XFCFQWwc3LMist%2FOhH29h7%2FJigWjPFkFlE1%2FGfZnXG9YYpRgxAYTFN2lvFaI2RhP9hSU1OK8UAH6sP8lP%2BwDz1d1lkC0zBbSS2lHS7XmS5GI1%2BN1PZouC7oZVo54PxPCOavtsi5XH6rPO0LtFhe2eVrsPR8bjrjJx4jEYlCxoO6zScsxTPNlQvrs&X-Amz-Signature=109ed576fdf48c7a644afd8101cf13b40d3fc67ed64ff7f15216de4276cf0ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6M6JCWP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpwMHg8Bvv43AnCim%2FVd7h9%2F%2FGmEZ%2FnmbSW8Vz6UzcHwIhAJp1VbY9FK67gdkfFJ%2BadCrHgR8ipSxpgMrffgCfKBV4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxCpjrNKcuDvNSvQ94q3AMg%2B63OIXk9K50izHQut9L1dClsnUhoOolDJPHM7OWSiAJC7goeJs%2FVocfCBGxwqh%2BmQ6CIljJjWtBHJt4QnRjlK5juUYuRISklEI9RniklP7PbGVHIf1ae74O8Uqij31duhb84hczee7edl9LiC5A1mRZvCCtMteMhEpPtfzXFecnAWFCUiSVCHnaSlyr%2F73DGbcFIR9lD20%2FaMZu%2FArJhy48HrmuzMZ3GCz%2FQKo5HYdgS3fDxUtQ2S3XY5WGgX1tbqWgOaQREBkYDwlI5yejZpeJ6wTdGLZh7wMGwMYroUSH2XdJnnTUHDBVfyoqqNCDPeA6gw7WGUv%2F6KHQjn78t763goNia%2BujBEEE2OdavDGEFawavy7ykYt%2B0zjAu7vEmTsjovtgn9w1uSuL79MY16KoHnTAiaZ8w7gt1eIgJbhVfxws6kZftWcUXT6L3tvCmLi5bA3zvkjsHFZs2E75RSWpgsn0pv32NK6%2FAysrhtKJq5Qmn7DCQW8%2Fyjf8c40sV9b3DeAhQ3mg079%2F8b6Q2EMLONRjirtluqHY1fqQKuHQUjk65SlynzcpUBiaruQvXK9qBymYa5EObtAmduXrS%2FQEAjyGyNABoqE0fSAhmx5HNpeGUrVIr7jxKRTDhm%2B7ABjqkAZenDfloi4xvvjPT5E2GZhjSeoVkkE4CDOd4XFCFQWwc3LMist%2FOhH29h7%2FJigWjPFkFlE1%2FGfZnXG9YYpRgxAYTFN2lvFaI2RhP9hSU1OK8UAH6sP8lP%2BwDz1d1lkC0zBbSS2lHS7XmS5GI1%2BN1PZouC7oZVo54PxPCOavtsi5XH6rPO0LtFhe2eVrsPR8bjrjJx4jEYlCxoO6zScsxTPNlQvrs&X-Amz-Signature=e00ea476efa3838f7b43410988df5944bd20ee51212f8ba24be97d8ecfe6b17d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6M6JCWP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpwMHg8Bvv43AnCim%2FVd7h9%2F%2FGmEZ%2FnmbSW8Vz6UzcHwIhAJp1VbY9FK67gdkfFJ%2BadCrHgR8ipSxpgMrffgCfKBV4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxCpjrNKcuDvNSvQ94q3AMg%2B63OIXk9K50izHQut9L1dClsnUhoOolDJPHM7OWSiAJC7goeJs%2FVocfCBGxwqh%2BmQ6CIljJjWtBHJt4QnRjlK5juUYuRISklEI9RniklP7PbGVHIf1ae74O8Uqij31duhb84hczee7edl9LiC5A1mRZvCCtMteMhEpPtfzXFecnAWFCUiSVCHnaSlyr%2F73DGbcFIR9lD20%2FaMZu%2FArJhy48HrmuzMZ3GCz%2FQKo5HYdgS3fDxUtQ2S3XY5WGgX1tbqWgOaQREBkYDwlI5yejZpeJ6wTdGLZh7wMGwMYroUSH2XdJnnTUHDBVfyoqqNCDPeA6gw7WGUv%2F6KHQjn78t763goNia%2BujBEEE2OdavDGEFawavy7ykYt%2B0zjAu7vEmTsjovtgn9w1uSuL79MY16KoHnTAiaZ8w7gt1eIgJbhVfxws6kZftWcUXT6L3tvCmLi5bA3zvkjsHFZs2E75RSWpgsn0pv32NK6%2FAysrhtKJq5Qmn7DCQW8%2Fyjf8c40sV9b3DeAhQ3mg079%2F8b6Q2EMLONRjirtluqHY1fqQKuHQUjk65SlynzcpUBiaruQvXK9qBymYa5EObtAmduXrS%2FQEAjyGyNABoqE0fSAhmx5HNpeGUrVIr7jxKRTDhm%2B7ABjqkAZenDfloi4xvvjPT5E2GZhjSeoVkkE4CDOd4XFCFQWwc3LMist%2FOhH29h7%2FJigWjPFkFlE1%2FGfZnXG9YYpRgxAYTFN2lvFaI2RhP9hSU1OK8UAH6sP8lP%2BwDz1d1lkC0zBbSS2lHS7XmS5GI1%2BN1PZouC7oZVo54PxPCOavtsi5XH6rPO0LtFhe2eVrsPR8bjrjJx4jEYlCxoO6zScsxTPNlQvrs&X-Amz-Signature=c3f494357b8b4a8728e40c665e77e2631edd37e109c866a6f427115fdd93d068&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
