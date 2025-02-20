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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJQHDHZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsmo7Id877nT%2FTIeVKq7b6Xne0OTayn7JXaRSGMuFvTgIgW9nE5sobb%2FUzfJxX76c%2BIOA74JiulSKZVgpcHIOH%2BHMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSOP6ncemB%2BmDKHDSrcAx%2FYkaRQkHPW9ePqeKcTygjvYllY8Aocuq2jKJGOOfwsVE%2BUs2s6ZRfzjGOLRl3krzPqq36WptU2z0mNgEQ0HVTQNVLvxPD69o9rybFNeOtLxOToRYYf2iCIvVLrmhIDJ8yLsuqFL7%2FohVTSmssFVopdQd2kNfBxXaOAMeLRvLiH9uUxCISrfWB2dYlMwFjgSLAINP5H4fCO7n2ZWdEApPWeb%2F%2FH1NVr8z7deyYRD0yil8zu4q5QitZBP8iTjhI%2BTde53OhpIxNhAfpDMzGZz65MvDLtxSXmvSOB%2FNLCMvKz27fiGJWQmePccKEXZLseaVq3h4RD59bpyYpZr1UMFXy%2Bryq%2B0LJIqqZ2bOZXKkOwVbxtNQjO%2FvleCLgy%2FK4ihBGg5dCJ6p%2Bspyp1oIx3x7dVVkFlukc6NLh%2FoEi8OjR6FgTt%2FWNOaJ4QLnsJubHPME%2BITIEbSNNKxpIFUdWO2fquD%2FUMr38LbNXCjhofy28sc7wvcdearQar8oADTrVk70cTi%2BZvwqEToA3iyN%2BUnbD5O%2Fcug01wZH1rYvFx6m02sONs48e9dSLQxRPvpQNxqGr5HiVflVL3Yt1Ha8g5WERrJSR11IcRrb8JgTgkM7qH3%2BVUrflVrGt6t7xrMPSn2r0GOqUBYO%2BChPdETT6znN9RBYPS0V6Z4o4HZkoBVTo6rSLfyu%2FcMXUurnw2%2BO%2FT3WNUxv3hAiuyk7zGI3b3MPAswlguvJjX2JdqW%2FBhsO6mL3dYmrSv3SbqbTSxKyVdcKkimMSZv9Q21L0o5EafQF1R4mFfiuSIShmjf6zkyFULafB4aIvBLYUYA490WwMtqaEPAYwOhgKbHcyYQKg7pPBkPBC%2FRXmlzYCj&X-Amz-Signature=80f00eb4c065f6e5beec5e314bb224e09c024891815031a85884cd67a6a40849&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJQHDHZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsmo7Id877nT%2FTIeVKq7b6Xne0OTayn7JXaRSGMuFvTgIgW9nE5sobb%2FUzfJxX76c%2BIOA74JiulSKZVgpcHIOH%2BHMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSOP6ncemB%2BmDKHDSrcAx%2FYkaRQkHPW9ePqeKcTygjvYllY8Aocuq2jKJGOOfwsVE%2BUs2s6ZRfzjGOLRl3krzPqq36WptU2z0mNgEQ0HVTQNVLvxPD69o9rybFNeOtLxOToRYYf2iCIvVLrmhIDJ8yLsuqFL7%2FohVTSmssFVopdQd2kNfBxXaOAMeLRvLiH9uUxCISrfWB2dYlMwFjgSLAINP5H4fCO7n2ZWdEApPWeb%2F%2FH1NVr8z7deyYRD0yil8zu4q5QitZBP8iTjhI%2BTde53OhpIxNhAfpDMzGZz65MvDLtxSXmvSOB%2FNLCMvKz27fiGJWQmePccKEXZLseaVq3h4RD59bpyYpZr1UMFXy%2Bryq%2B0LJIqqZ2bOZXKkOwVbxtNQjO%2FvleCLgy%2FK4ihBGg5dCJ6p%2Bspyp1oIx3x7dVVkFlukc6NLh%2FoEi8OjR6FgTt%2FWNOaJ4QLnsJubHPME%2BITIEbSNNKxpIFUdWO2fquD%2FUMr38LbNXCjhofy28sc7wvcdearQar8oADTrVk70cTi%2BZvwqEToA3iyN%2BUnbD5O%2Fcug01wZH1rYvFx6m02sONs48e9dSLQxRPvpQNxqGr5HiVflVL3Yt1Ha8g5WERrJSR11IcRrb8JgTgkM7qH3%2BVUrflVrGt6t7xrMPSn2r0GOqUBYO%2BChPdETT6znN9RBYPS0V6Z4o4HZkoBVTo6rSLfyu%2FcMXUurnw2%2BO%2FT3WNUxv3hAiuyk7zGI3b3MPAswlguvJjX2JdqW%2FBhsO6mL3dYmrSv3SbqbTSxKyVdcKkimMSZv9Q21L0o5EafQF1R4mFfiuSIShmjf6zkyFULafB4aIvBLYUYA490WwMtqaEPAYwOhgKbHcyYQKg7pPBkPBC%2FRXmlzYCj&X-Amz-Signature=a29251e64514ad43ad09feaa804d9a007c207b7d0f6ac329efdbe98d64da5c49&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJQHDHZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsmo7Id877nT%2FTIeVKq7b6Xne0OTayn7JXaRSGMuFvTgIgW9nE5sobb%2FUzfJxX76c%2BIOA74JiulSKZVgpcHIOH%2BHMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSOP6ncemB%2BmDKHDSrcAx%2FYkaRQkHPW9ePqeKcTygjvYllY8Aocuq2jKJGOOfwsVE%2BUs2s6ZRfzjGOLRl3krzPqq36WptU2z0mNgEQ0HVTQNVLvxPD69o9rybFNeOtLxOToRYYf2iCIvVLrmhIDJ8yLsuqFL7%2FohVTSmssFVopdQd2kNfBxXaOAMeLRvLiH9uUxCISrfWB2dYlMwFjgSLAINP5H4fCO7n2ZWdEApPWeb%2F%2FH1NVr8z7deyYRD0yil8zu4q5QitZBP8iTjhI%2BTde53OhpIxNhAfpDMzGZz65MvDLtxSXmvSOB%2FNLCMvKz27fiGJWQmePccKEXZLseaVq3h4RD59bpyYpZr1UMFXy%2Bryq%2B0LJIqqZ2bOZXKkOwVbxtNQjO%2FvleCLgy%2FK4ihBGg5dCJ6p%2Bspyp1oIx3x7dVVkFlukc6NLh%2FoEi8OjR6FgTt%2FWNOaJ4QLnsJubHPME%2BITIEbSNNKxpIFUdWO2fquD%2FUMr38LbNXCjhofy28sc7wvcdearQar8oADTrVk70cTi%2BZvwqEToA3iyN%2BUnbD5O%2Fcug01wZH1rYvFx6m02sONs48e9dSLQxRPvpQNxqGr5HiVflVL3Yt1Ha8g5WERrJSR11IcRrb8JgTgkM7qH3%2BVUrflVrGt6t7xrMPSn2r0GOqUBYO%2BChPdETT6znN9RBYPS0V6Z4o4HZkoBVTo6rSLfyu%2FcMXUurnw2%2BO%2FT3WNUxv3hAiuyk7zGI3b3MPAswlguvJjX2JdqW%2FBhsO6mL3dYmrSv3SbqbTSxKyVdcKkimMSZv9Q21L0o5EafQF1R4mFfiuSIShmjf6zkyFULafB4aIvBLYUYA490WwMtqaEPAYwOhgKbHcyYQKg7pPBkPBC%2FRXmlzYCj&X-Amz-Signature=3f1fd40be3afb7a25d96f94daaba2d1e64c33de350ea65c0de8712ab86cf3165&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJQHDHZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsmo7Id877nT%2FTIeVKq7b6Xne0OTayn7JXaRSGMuFvTgIgW9nE5sobb%2FUzfJxX76c%2BIOA74JiulSKZVgpcHIOH%2BHMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSOP6ncemB%2BmDKHDSrcAx%2FYkaRQkHPW9ePqeKcTygjvYllY8Aocuq2jKJGOOfwsVE%2BUs2s6ZRfzjGOLRl3krzPqq36WptU2z0mNgEQ0HVTQNVLvxPD69o9rybFNeOtLxOToRYYf2iCIvVLrmhIDJ8yLsuqFL7%2FohVTSmssFVopdQd2kNfBxXaOAMeLRvLiH9uUxCISrfWB2dYlMwFjgSLAINP5H4fCO7n2ZWdEApPWeb%2F%2FH1NVr8z7deyYRD0yil8zu4q5QitZBP8iTjhI%2BTde53OhpIxNhAfpDMzGZz65MvDLtxSXmvSOB%2FNLCMvKz27fiGJWQmePccKEXZLseaVq3h4RD59bpyYpZr1UMFXy%2Bryq%2B0LJIqqZ2bOZXKkOwVbxtNQjO%2FvleCLgy%2FK4ihBGg5dCJ6p%2Bspyp1oIx3x7dVVkFlukc6NLh%2FoEi8OjR6FgTt%2FWNOaJ4QLnsJubHPME%2BITIEbSNNKxpIFUdWO2fquD%2FUMr38LbNXCjhofy28sc7wvcdearQar8oADTrVk70cTi%2BZvwqEToA3iyN%2BUnbD5O%2Fcug01wZH1rYvFx6m02sONs48e9dSLQxRPvpQNxqGr5HiVflVL3Yt1Ha8g5WERrJSR11IcRrb8JgTgkM7qH3%2BVUrflVrGt6t7xrMPSn2r0GOqUBYO%2BChPdETT6znN9RBYPS0V6Z4o4HZkoBVTo6rSLfyu%2FcMXUurnw2%2BO%2FT3WNUxv3hAiuyk7zGI3b3MPAswlguvJjX2JdqW%2FBhsO6mL3dYmrSv3SbqbTSxKyVdcKkimMSZv9Q21L0o5EafQF1R4mFfiuSIShmjf6zkyFULafB4aIvBLYUYA490WwMtqaEPAYwOhgKbHcyYQKg7pPBkPBC%2FRXmlzYCj&X-Amz-Signature=edebe7e5feac37894605f3a737d867efc6f657663d86daf4fbd159dd15f9321c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJQHDHZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsmo7Id877nT%2FTIeVKq7b6Xne0OTayn7JXaRSGMuFvTgIgW9nE5sobb%2FUzfJxX76c%2BIOA74JiulSKZVgpcHIOH%2BHMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSOP6ncemB%2BmDKHDSrcAx%2FYkaRQkHPW9ePqeKcTygjvYllY8Aocuq2jKJGOOfwsVE%2BUs2s6ZRfzjGOLRl3krzPqq36WptU2z0mNgEQ0HVTQNVLvxPD69o9rybFNeOtLxOToRYYf2iCIvVLrmhIDJ8yLsuqFL7%2FohVTSmssFVopdQd2kNfBxXaOAMeLRvLiH9uUxCISrfWB2dYlMwFjgSLAINP5H4fCO7n2ZWdEApPWeb%2F%2FH1NVr8z7deyYRD0yil8zu4q5QitZBP8iTjhI%2BTde53OhpIxNhAfpDMzGZz65MvDLtxSXmvSOB%2FNLCMvKz27fiGJWQmePccKEXZLseaVq3h4RD59bpyYpZr1UMFXy%2Bryq%2B0LJIqqZ2bOZXKkOwVbxtNQjO%2FvleCLgy%2FK4ihBGg5dCJ6p%2Bspyp1oIx3x7dVVkFlukc6NLh%2FoEi8OjR6FgTt%2FWNOaJ4QLnsJubHPME%2BITIEbSNNKxpIFUdWO2fquD%2FUMr38LbNXCjhofy28sc7wvcdearQar8oADTrVk70cTi%2BZvwqEToA3iyN%2BUnbD5O%2Fcug01wZH1rYvFx6m02sONs48e9dSLQxRPvpQNxqGr5HiVflVL3Yt1Ha8g5WERrJSR11IcRrb8JgTgkM7qH3%2BVUrflVrGt6t7xrMPSn2r0GOqUBYO%2BChPdETT6znN9RBYPS0V6Z4o4HZkoBVTo6rSLfyu%2FcMXUurnw2%2BO%2FT3WNUxv3hAiuyk7zGI3b3MPAswlguvJjX2JdqW%2FBhsO6mL3dYmrSv3SbqbTSxKyVdcKkimMSZv9Q21L0o5EafQF1R4mFfiuSIShmjf6zkyFULafB4aIvBLYUYA490WwMtqaEPAYwOhgKbHcyYQKg7pPBkPBC%2FRXmlzYCj&X-Amz-Signature=949a9ebf8600916d460437330e38099f6beedad72ebc549ea3c70c3132823b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJQHDHZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsmo7Id877nT%2FTIeVKq7b6Xne0OTayn7JXaRSGMuFvTgIgW9nE5sobb%2FUzfJxX76c%2BIOA74JiulSKZVgpcHIOH%2BHMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSOP6ncemB%2BmDKHDSrcAx%2FYkaRQkHPW9ePqeKcTygjvYllY8Aocuq2jKJGOOfwsVE%2BUs2s6ZRfzjGOLRl3krzPqq36WptU2z0mNgEQ0HVTQNVLvxPD69o9rybFNeOtLxOToRYYf2iCIvVLrmhIDJ8yLsuqFL7%2FohVTSmssFVopdQd2kNfBxXaOAMeLRvLiH9uUxCISrfWB2dYlMwFjgSLAINP5H4fCO7n2ZWdEApPWeb%2F%2FH1NVr8z7deyYRD0yil8zu4q5QitZBP8iTjhI%2BTde53OhpIxNhAfpDMzGZz65MvDLtxSXmvSOB%2FNLCMvKz27fiGJWQmePccKEXZLseaVq3h4RD59bpyYpZr1UMFXy%2Bryq%2B0LJIqqZ2bOZXKkOwVbxtNQjO%2FvleCLgy%2FK4ihBGg5dCJ6p%2Bspyp1oIx3x7dVVkFlukc6NLh%2FoEi8OjR6FgTt%2FWNOaJ4QLnsJubHPME%2BITIEbSNNKxpIFUdWO2fquD%2FUMr38LbNXCjhofy28sc7wvcdearQar8oADTrVk70cTi%2BZvwqEToA3iyN%2BUnbD5O%2Fcug01wZH1rYvFx6m02sONs48e9dSLQxRPvpQNxqGr5HiVflVL3Yt1Ha8g5WERrJSR11IcRrb8JgTgkM7qH3%2BVUrflVrGt6t7xrMPSn2r0GOqUBYO%2BChPdETT6znN9RBYPS0V6Z4o4HZkoBVTo6rSLfyu%2FcMXUurnw2%2BO%2FT3WNUxv3hAiuyk7zGI3b3MPAswlguvJjX2JdqW%2FBhsO6mL3dYmrSv3SbqbTSxKyVdcKkimMSZv9Q21L0o5EafQF1R4mFfiuSIShmjf6zkyFULafB4aIvBLYUYA490WwMtqaEPAYwOhgKbHcyYQKg7pPBkPBC%2FRXmlzYCj&X-Amz-Signature=a019e6a2ebc1dc26c8c8bbcf43d17c6abdf0ba555d107d97b223aab6e5d3a229&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJQHDHZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsmo7Id877nT%2FTIeVKq7b6Xne0OTayn7JXaRSGMuFvTgIgW9nE5sobb%2FUzfJxX76c%2BIOA74JiulSKZVgpcHIOH%2BHMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSOP6ncemB%2BmDKHDSrcAx%2FYkaRQkHPW9ePqeKcTygjvYllY8Aocuq2jKJGOOfwsVE%2BUs2s6ZRfzjGOLRl3krzPqq36WptU2z0mNgEQ0HVTQNVLvxPD69o9rybFNeOtLxOToRYYf2iCIvVLrmhIDJ8yLsuqFL7%2FohVTSmssFVopdQd2kNfBxXaOAMeLRvLiH9uUxCISrfWB2dYlMwFjgSLAINP5H4fCO7n2ZWdEApPWeb%2F%2FH1NVr8z7deyYRD0yil8zu4q5QitZBP8iTjhI%2BTde53OhpIxNhAfpDMzGZz65MvDLtxSXmvSOB%2FNLCMvKz27fiGJWQmePccKEXZLseaVq3h4RD59bpyYpZr1UMFXy%2Bryq%2B0LJIqqZ2bOZXKkOwVbxtNQjO%2FvleCLgy%2FK4ihBGg5dCJ6p%2Bspyp1oIx3x7dVVkFlukc6NLh%2FoEi8OjR6FgTt%2FWNOaJ4QLnsJubHPME%2BITIEbSNNKxpIFUdWO2fquD%2FUMr38LbNXCjhofy28sc7wvcdearQar8oADTrVk70cTi%2BZvwqEToA3iyN%2BUnbD5O%2Fcug01wZH1rYvFx6m02sONs48e9dSLQxRPvpQNxqGr5HiVflVL3Yt1Ha8g5WERrJSR11IcRrb8JgTgkM7qH3%2BVUrflVrGt6t7xrMPSn2r0GOqUBYO%2BChPdETT6znN9RBYPS0V6Z4o4HZkoBVTo6rSLfyu%2FcMXUurnw2%2BO%2FT3WNUxv3hAiuyk7zGI3b3MPAswlguvJjX2JdqW%2FBhsO6mL3dYmrSv3SbqbTSxKyVdcKkimMSZv9Q21L0o5EafQF1R4mFfiuSIShmjf6zkyFULafB4aIvBLYUYA490WwMtqaEPAYwOhgKbHcyYQKg7pPBkPBC%2FRXmlzYCj&X-Amz-Signature=3b49d3c0ea0ee27c39fdd8e7b4062508233fb68ef9bb20d5c907abf353856b20&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
