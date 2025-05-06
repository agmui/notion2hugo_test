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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDMKBXXS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBhcllyJPoqZON1Ba2Th7iEnGnO25%2BROjKy4jGBMdegAiEA1BtMgY7bP4sHxQSidcOQcpb1bsTnXeNraAn6Bl0tJ9kq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJiEowI7ZHt9fiuBBCrcAx14hWsyNG9qu8YuK04ukjfq2kpNFlNcrn5rh6mYnmrSbs7tU4QTd3FrrQ%2BpBjek3i%2FGraTmzGLJ4TpKL%2FBxffegvzv1Is2uebxU0KvA3yGxJ%2FsFYbn%2BL4Juqm8sXNV5yEvfG%2Bd8nSym8S4oOgU1OIY9gubwsyUD0XFSVB0DCTFzGmUkJ0G2aHwMKI1xAZlBi%2FwTZ36drzLzW%2F4zaCB%2F6kPe0KsebU3iuZkNDpdTQ4LKXRhthRanybaY0H%2Ff4IYIt9wO2KGoV91nw%2BryxUi%2BtANqEUs5X72EpGEBZQJ9W%2F4YsW5qVCdHjWDOh4C8x%2B4kHKRZ09ENQFp9ZyHUev8xfbER5BBUcBZMuPhtb9aWz07nHgpqA0zK5t36I%2FjiUa92AUMwynwQJf9gkNdgwkzxFdPbtgyJdK6ixK3BBQmb3nJ0irGcf70gMlnlgkmNx1jY4q5jDKDDXlcczByXnCkDdAjFTvHFc6UPtTCCGCkxFT2I1kDpXijxuid2xI0qiW8i%2F4RBbVgj1it7s91DdXf%2FFwBuwQ3CqQJ4G4QvhOXf%2BJdgxFYsDdToB0VsfATmUGp%2FKro241WSz2TvHu%2Fr0usZdXTVs8%2FZ9RcOgis7ieB%2ByUUVG%2BdyKRu6S1r9Pk1tMLH%2B5cAGOqUBVZgmO1jt4N64UtEWmuqrgPsVB6zBNKMTAjZIZqWO%2BqTssW9AiMsKV89LKJ29AormoqhAeUv0wfMlIzM1HR9pewBMFsel%2BXEcgmULaaXsqtJpd6lvfyYOG8Xt3GtWVsQWew6ivhsYeLqM%2FnPwOM%2BqhOZF4WxPZXjZIejZdrkAoXHuwx%2B%2FsTta9hDdzqbctAZDVmmhhMFi44cl7B8Ua4RVP8tlsKen&X-Amz-Signature=ddfde8f0d76277a9a7a15fd93ec9206548be42f429b6ded70132706f71b92c26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDMKBXXS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBhcllyJPoqZON1Ba2Th7iEnGnO25%2BROjKy4jGBMdegAiEA1BtMgY7bP4sHxQSidcOQcpb1bsTnXeNraAn6Bl0tJ9kq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJiEowI7ZHt9fiuBBCrcAx14hWsyNG9qu8YuK04ukjfq2kpNFlNcrn5rh6mYnmrSbs7tU4QTd3FrrQ%2BpBjek3i%2FGraTmzGLJ4TpKL%2FBxffegvzv1Is2uebxU0KvA3yGxJ%2FsFYbn%2BL4Juqm8sXNV5yEvfG%2Bd8nSym8S4oOgU1OIY9gubwsyUD0XFSVB0DCTFzGmUkJ0G2aHwMKI1xAZlBi%2FwTZ36drzLzW%2F4zaCB%2F6kPe0KsebU3iuZkNDpdTQ4LKXRhthRanybaY0H%2Ff4IYIt9wO2KGoV91nw%2BryxUi%2BtANqEUs5X72EpGEBZQJ9W%2F4YsW5qVCdHjWDOh4C8x%2B4kHKRZ09ENQFp9ZyHUev8xfbER5BBUcBZMuPhtb9aWz07nHgpqA0zK5t36I%2FjiUa92AUMwynwQJf9gkNdgwkzxFdPbtgyJdK6ixK3BBQmb3nJ0irGcf70gMlnlgkmNx1jY4q5jDKDDXlcczByXnCkDdAjFTvHFc6UPtTCCGCkxFT2I1kDpXijxuid2xI0qiW8i%2F4RBbVgj1it7s91DdXf%2FFwBuwQ3CqQJ4G4QvhOXf%2BJdgxFYsDdToB0VsfATmUGp%2FKro241WSz2TvHu%2Fr0usZdXTVs8%2FZ9RcOgis7ieB%2ByUUVG%2BdyKRu6S1r9Pk1tMLH%2B5cAGOqUBVZgmO1jt4N64UtEWmuqrgPsVB6zBNKMTAjZIZqWO%2BqTssW9AiMsKV89LKJ29AormoqhAeUv0wfMlIzM1HR9pewBMFsel%2BXEcgmULaaXsqtJpd6lvfyYOG8Xt3GtWVsQWew6ivhsYeLqM%2FnPwOM%2BqhOZF4WxPZXjZIejZdrkAoXHuwx%2B%2FsTta9hDdzqbctAZDVmmhhMFi44cl7B8Ua4RVP8tlsKen&X-Amz-Signature=3a391144fbabf6057c9885b81eb4e57d2261b47f355ff8d1fe68f184597bb901&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDMKBXXS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBhcllyJPoqZON1Ba2Th7iEnGnO25%2BROjKy4jGBMdegAiEA1BtMgY7bP4sHxQSidcOQcpb1bsTnXeNraAn6Bl0tJ9kq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJiEowI7ZHt9fiuBBCrcAx14hWsyNG9qu8YuK04ukjfq2kpNFlNcrn5rh6mYnmrSbs7tU4QTd3FrrQ%2BpBjek3i%2FGraTmzGLJ4TpKL%2FBxffegvzv1Is2uebxU0KvA3yGxJ%2FsFYbn%2BL4Juqm8sXNV5yEvfG%2Bd8nSym8S4oOgU1OIY9gubwsyUD0XFSVB0DCTFzGmUkJ0G2aHwMKI1xAZlBi%2FwTZ36drzLzW%2F4zaCB%2F6kPe0KsebU3iuZkNDpdTQ4LKXRhthRanybaY0H%2Ff4IYIt9wO2KGoV91nw%2BryxUi%2BtANqEUs5X72EpGEBZQJ9W%2F4YsW5qVCdHjWDOh4C8x%2B4kHKRZ09ENQFp9ZyHUev8xfbER5BBUcBZMuPhtb9aWz07nHgpqA0zK5t36I%2FjiUa92AUMwynwQJf9gkNdgwkzxFdPbtgyJdK6ixK3BBQmb3nJ0irGcf70gMlnlgkmNx1jY4q5jDKDDXlcczByXnCkDdAjFTvHFc6UPtTCCGCkxFT2I1kDpXijxuid2xI0qiW8i%2F4RBbVgj1it7s91DdXf%2FFwBuwQ3CqQJ4G4QvhOXf%2BJdgxFYsDdToB0VsfATmUGp%2FKro241WSz2TvHu%2Fr0usZdXTVs8%2FZ9RcOgis7ieB%2ByUUVG%2BdyKRu6S1r9Pk1tMLH%2B5cAGOqUBVZgmO1jt4N64UtEWmuqrgPsVB6zBNKMTAjZIZqWO%2BqTssW9AiMsKV89LKJ29AormoqhAeUv0wfMlIzM1HR9pewBMFsel%2BXEcgmULaaXsqtJpd6lvfyYOG8Xt3GtWVsQWew6ivhsYeLqM%2FnPwOM%2BqhOZF4WxPZXjZIejZdrkAoXHuwx%2B%2FsTta9hDdzqbctAZDVmmhhMFi44cl7B8Ua4RVP8tlsKen&X-Amz-Signature=efb7f02426db7289bbcae8d84e00f4aeac0e6aacd516b3a3fb52b4d3518a6ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDMKBXXS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBhcllyJPoqZON1Ba2Th7iEnGnO25%2BROjKy4jGBMdegAiEA1BtMgY7bP4sHxQSidcOQcpb1bsTnXeNraAn6Bl0tJ9kq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJiEowI7ZHt9fiuBBCrcAx14hWsyNG9qu8YuK04ukjfq2kpNFlNcrn5rh6mYnmrSbs7tU4QTd3FrrQ%2BpBjek3i%2FGraTmzGLJ4TpKL%2FBxffegvzv1Is2uebxU0KvA3yGxJ%2FsFYbn%2BL4Juqm8sXNV5yEvfG%2Bd8nSym8S4oOgU1OIY9gubwsyUD0XFSVB0DCTFzGmUkJ0G2aHwMKI1xAZlBi%2FwTZ36drzLzW%2F4zaCB%2F6kPe0KsebU3iuZkNDpdTQ4LKXRhthRanybaY0H%2Ff4IYIt9wO2KGoV91nw%2BryxUi%2BtANqEUs5X72EpGEBZQJ9W%2F4YsW5qVCdHjWDOh4C8x%2B4kHKRZ09ENQFp9ZyHUev8xfbER5BBUcBZMuPhtb9aWz07nHgpqA0zK5t36I%2FjiUa92AUMwynwQJf9gkNdgwkzxFdPbtgyJdK6ixK3BBQmb3nJ0irGcf70gMlnlgkmNx1jY4q5jDKDDXlcczByXnCkDdAjFTvHFc6UPtTCCGCkxFT2I1kDpXijxuid2xI0qiW8i%2F4RBbVgj1it7s91DdXf%2FFwBuwQ3CqQJ4G4QvhOXf%2BJdgxFYsDdToB0VsfATmUGp%2FKro241WSz2TvHu%2Fr0usZdXTVs8%2FZ9RcOgis7ieB%2ByUUVG%2BdyKRu6S1r9Pk1tMLH%2B5cAGOqUBVZgmO1jt4N64UtEWmuqrgPsVB6zBNKMTAjZIZqWO%2BqTssW9AiMsKV89LKJ29AormoqhAeUv0wfMlIzM1HR9pewBMFsel%2BXEcgmULaaXsqtJpd6lvfyYOG8Xt3GtWVsQWew6ivhsYeLqM%2FnPwOM%2BqhOZF4WxPZXjZIejZdrkAoXHuwx%2B%2FsTta9hDdzqbctAZDVmmhhMFi44cl7B8Ua4RVP8tlsKen&X-Amz-Signature=9f40abb8190d039adbd90c2cc9c9abae1235cd0ec8027421a728b4e080c456c0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDMKBXXS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBhcllyJPoqZON1Ba2Th7iEnGnO25%2BROjKy4jGBMdegAiEA1BtMgY7bP4sHxQSidcOQcpb1bsTnXeNraAn6Bl0tJ9kq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJiEowI7ZHt9fiuBBCrcAx14hWsyNG9qu8YuK04ukjfq2kpNFlNcrn5rh6mYnmrSbs7tU4QTd3FrrQ%2BpBjek3i%2FGraTmzGLJ4TpKL%2FBxffegvzv1Is2uebxU0KvA3yGxJ%2FsFYbn%2BL4Juqm8sXNV5yEvfG%2Bd8nSym8S4oOgU1OIY9gubwsyUD0XFSVB0DCTFzGmUkJ0G2aHwMKI1xAZlBi%2FwTZ36drzLzW%2F4zaCB%2F6kPe0KsebU3iuZkNDpdTQ4LKXRhthRanybaY0H%2Ff4IYIt9wO2KGoV91nw%2BryxUi%2BtANqEUs5X72EpGEBZQJ9W%2F4YsW5qVCdHjWDOh4C8x%2B4kHKRZ09ENQFp9ZyHUev8xfbER5BBUcBZMuPhtb9aWz07nHgpqA0zK5t36I%2FjiUa92AUMwynwQJf9gkNdgwkzxFdPbtgyJdK6ixK3BBQmb3nJ0irGcf70gMlnlgkmNx1jY4q5jDKDDXlcczByXnCkDdAjFTvHFc6UPtTCCGCkxFT2I1kDpXijxuid2xI0qiW8i%2F4RBbVgj1it7s91DdXf%2FFwBuwQ3CqQJ4G4QvhOXf%2BJdgxFYsDdToB0VsfATmUGp%2FKro241WSz2TvHu%2Fr0usZdXTVs8%2FZ9RcOgis7ieB%2ByUUVG%2BdyKRu6S1r9Pk1tMLH%2B5cAGOqUBVZgmO1jt4N64UtEWmuqrgPsVB6zBNKMTAjZIZqWO%2BqTssW9AiMsKV89LKJ29AormoqhAeUv0wfMlIzM1HR9pewBMFsel%2BXEcgmULaaXsqtJpd6lvfyYOG8Xt3GtWVsQWew6ivhsYeLqM%2FnPwOM%2BqhOZF4WxPZXjZIejZdrkAoXHuwx%2B%2FsTta9hDdzqbctAZDVmmhhMFi44cl7B8Ua4RVP8tlsKen&X-Amz-Signature=18d0b8e69727e5b65fa6650a148cafd4e4c2b783613f154d4fab9eea8a438069&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDMKBXXS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBhcllyJPoqZON1Ba2Th7iEnGnO25%2BROjKy4jGBMdegAiEA1BtMgY7bP4sHxQSidcOQcpb1bsTnXeNraAn6Bl0tJ9kq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJiEowI7ZHt9fiuBBCrcAx14hWsyNG9qu8YuK04ukjfq2kpNFlNcrn5rh6mYnmrSbs7tU4QTd3FrrQ%2BpBjek3i%2FGraTmzGLJ4TpKL%2FBxffegvzv1Is2uebxU0KvA3yGxJ%2FsFYbn%2BL4Juqm8sXNV5yEvfG%2Bd8nSym8S4oOgU1OIY9gubwsyUD0XFSVB0DCTFzGmUkJ0G2aHwMKI1xAZlBi%2FwTZ36drzLzW%2F4zaCB%2F6kPe0KsebU3iuZkNDpdTQ4LKXRhthRanybaY0H%2Ff4IYIt9wO2KGoV91nw%2BryxUi%2BtANqEUs5X72EpGEBZQJ9W%2F4YsW5qVCdHjWDOh4C8x%2B4kHKRZ09ENQFp9ZyHUev8xfbER5BBUcBZMuPhtb9aWz07nHgpqA0zK5t36I%2FjiUa92AUMwynwQJf9gkNdgwkzxFdPbtgyJdK6ixK3BBQmb3nJ0irGcf70gMlnlgkmNx1jY4q5jDKDDXlcczByXnCkDdAjFTvHFc6UPtTCCGCkxFT2I1kDpXijxuid2xI0qiW8i%2F4RBbVgj1it7s91DdXf%2FFwBuwQ3CqQJ4G4QvhOXf%2BJdgxFYsDdToB0VsfATmUGp%2FKro241WSz2TvHu%2Fr0usZdXTVs8%2FZ9RcOgis7ieB%2ByUUVG%2BdyKRu6S1r9Pk1tMLH%2B5cAGOqUBVZgmO1jt4N64UtEWmuqrgPsVB6zBNKMTAjZIZqWO%2BqTssW9AiMsKV89LKJ29AormoqhAeUv0wfMlIzM1HR9pewBMFsel%2BXEcgmULaaXsqtJpd6lvfyYOG8Xt3GtWVsQWew6ivhsYeLqM%2FnPwOM%2BqhOZF4WxPZXjZIejZdrkAoXHuwx%2B%2FsTta9hDdzqbctAZDVmmhhMFi44cl7B8Ua4RVP8tlsKen&X-Amz-Signature=25bb85126ab1794e202ddebd6de87966ec5c19da32a7e7ef3f2f2a573c40569f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDMKBXXS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBhcllyJPoqZON1Ba2Th7iEnGnO25%2BROjKy4jGBMdegAiEA1BtMgY7bP4sHxQSidcOQcpb1bsTnXeNraAn6Bl0tJ9kq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJiEowI7ZHt9fiuBBCrcAx14hWsyNG9qu8YuK04ukjfq2kpNFlNcrn5rh6mYnmrSbs7tU4QTd3FrrQ%2BpBjek3i%2FGraTmzGLJ4TpKL%2FBxffegvzv1Is2uebxU0KvA3yGxJ%2FsFYbn%2BL4Juqm8sXNV5yEvfG%2Bd8nSym8S4oOgU1OIY9gubwsyUD0XFSVB0DCTFzGmUkJ0G2aHwMKI1xAZlBi%2FwTZ36drzLzW%2F4zaCB%2F6kPe0KsebU3iuZkNDpdTQ4LKXRhthRanybaY0H%2Ff4IYIt9wO2KGoV91nw%2BryxUi%2BtANqEUs5X72EpGEBZQJ9W%2F4YsW5qVCdHjWDOh4C8x%2B4kHKRZ09ENQFp9ZyHUev8xfbER5BBUcBZMuPhtb9aWz07nHgpqA0zK5t36I%2FjiUa92AUMwynwQJf9gkNdgwkzxFdPbtgyJdK6ixK3BBQmb3nJ0irGcf70gMlnlgkmNx1jY4q5jDKDDXlcczByXnCkDdAjFTvHFc6UPtTCCGCkxFT2I1kDpXijxuid2xI0qiW8i%2F4RBbVgj1it7s91DdXf%2FFwBuwQ3CqQJ4G4QvhOXf%2BJdgxFYsDdToB0VsfATmUGp%2FKro241WSz2TvHu%2Fr0usZdXTVs8%2FZ9RcOgis7ieB%2ByUUVG%2BdyKRu6S1r9Pk1tMLH%2B5cAGOqUBVZgmO1jt4N64UtEWmuqrgPsVB6zBNKMTAjZIZqWO%2BqTssW9AiMsKV89LKJ29AormoqhAeUv0wfMlIzM1HR9pewBMFsel%2BXEcgmULaaXsqtJpd6lvfyYOG8Xt3GtWVsQWew6ivhsYeLqM%2FnPwOM%2BqhOZF4WxPZXjZIejZdrkAoXHuwx%2B%2FsTta9hDdzqbctAZDVmmhhMFi44cl7B8Ua4RVP8tlsKen&X-Amz-Signature=e4bf4a1b9a998b07f8cf235d6a8d5d4902f2c747b67ae0de338bf743cd9b45d5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
