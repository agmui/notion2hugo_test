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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ORGF6U%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC99S%2BoFiBM9RcCnuhUd4IajKt89QwlZA%2BpiBLFvA32BwIhAO7N%2B%2BwdtDelaj%2FN1JTYaIMi6ApJ9mx6oy2WPzRM0kqIKv8DCEYQABoMNjM3NDIzMTgzODA1IgxLH5aYdphPfjNaA9kq3APCAPew8muRx%2FkGIfTghr1l%2FXL2hZQEmIbdJNFyNMh1eU8ohzfCeAtWWie94SZOhV0e0vzSVK0jhKm20ekTbVTUb%2FYzl2FI8YO5xldrw%2Bq0dRwLfKSccVAnh75Nd%2FWIf%2BH30fvhtKdm9P9qt7Z0ekLHpXNNX5EAQGLNBSG%2BK41YyN0vlVo0blfrIUnwhr4Pmz10AmIukK5vhnbcG43MzeE4dSQ6l6fBCZROGua8x9BNVXDHGKsa0LFqDk5cTsXFT3AY7zqtLZlIaXS0ILTivNp3G4RENZPfyqTShcp2TUElBqSawBwOB3DTRiGn0T6OnfTNsrKj70Knvcw4l1xfqfGlUkSYAZ3pZp9Ib1%2B689D64%2BLRMx%2BATqH3n3XSOaTNI6EbmjeV4ekEkm2oTu2RExxXDqcyuqnZaRDE7b8osqDIPeOJRE0vGBBzqMMvD%2F%2F2nCSnKFjFp9POUTCWq5g%2F6rzbgS7DK2yjjyBV8Wm0I5XvZkv8jjec5HymPHy07SrB881bZqAxTNd0%2B%2FXfDktBwd6FlbdAefPIF1Pkl%2BZlvNn4DrehTDMdNx%2Bexy82WGxs%2F6fu1D1%2FXXOpXjVcsPLV6skTNT%2FSfDZ64CU4kY0zSRthwg6J%2BXlh0egLgy8avDCHibvCBjqkAfhSwpxTZ4XRDG0k88a6JY8Xpms%2B7R0TVtVQtDiUZXZO5OU39sqCfCh6HXGBFVnuQm%2F8gRlLSPjp0s%2BztnLESHEWzFmNG6hYCEbcA30gxYrd%2FXKmU3CTHu32P9giYWbGKc3OBerNtDAQabds0DDYgubBVBETqk1UcwiDyJZPtcwrEVNSarRvTl%2B%2FmIvRDLTEr1lLReNBrv8DVEVG8oHqW%2FPcrBpP&X-Amz-Signature=58afcb0d610809043725c496612c212a21ded8b4ae30c22bdd6079878dfd1f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ORGF6U%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC99S%2BoFiBM9RcCnuhUd4IajKt89QwlZA%2BpiBLFvA32BwIhAO7N%2B%2BwdtDelaj%2FN1JTYaIMi6ApJ9mx6oy2WPzRM0kqIKv8DCEYQABoMNjM3NDIzMTgzODA1IgxLH5aYdphPfjNaA9kq3APCAPew8muRx%2FkGIfTghr1l%2FXL2hZQEmIbdJNFyNMh1eU8ohzfCeAtWWie94SZOhV0e0vzSVK0jhKm20ekTbVTUb%2FYzl2FI8YO5xldrw%2Bq0dRwLfKSccVAnh75Nd%2FWIf%2BH30fvhtKdm9P9qt7Z0ekLHpXNNX5EAQGLNBSG%2BK41YyN0vlVo0blfrIUnwhr4Pmz10AmIukK5vhnbcG43MzeE4dSQ6l6fBCZROGua8x9BNVXDHGKsa0LFqDk5cTsXFT3AY7zqtLZlIaXS0ILTivNp3G4RENZPfyqTShcp2TUElBqSawBwOB3DTRiGn0T6OnfTNsrKj70Knvcw4l1xfqfGlUkSYAZ3pZp9Ib1%2B689D64%2BLRMx%2BATqH3n3XSOaTNI6EbmjeV4ekEkm2oTu2RExxXDqcyuqnZaRDE7b8osqDIPeOJRE0vGBBzqMMvD%2F%2F2nCSnKFjFp9POUTCWq5g%2F6rzbgS7DK2yjjyBV8Wm0I5XvZkv8jjec5HymPHy07SrB881bZqAxTNd0%2B%2FXfDktBwd6FlbdAefPIF1Pkl%2BZlvNn4DrehTDMdNx%2Bexy82WGxs%2F6fu1D1%2FXXOpXjVcsPLV6skTNT%2FSfDZ64CU4kY0zSRthwg6J%2BXlh0egLgy8avDCHibvCBjqkAfhSwpxTZ4XRDG0k88a6JY8Xpms%2B7R0TVtVQtDiUZXZO5OU39sqCfCh6HXGBFVnuQm%2F8gRlLSPjp0s%2BztnLESHEWzFmNG6hYCEbcA30gxYrd%2FXKmU3CTHu32P9giYWbGKc3OBerNtDAQabds0DDYgubBVBETqk1UcwiDyJZPtcwrEVNSarRvTl%2B%2FmIvRDLTEr1lLReNBrv8DVEVG8oHqW%2FPcrBpP&X-Amz-Signature=0831a1c28e621886ad5cf3c6b2a80d206062860523c443c57fb132f9cdcc6336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ORGF6U%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC99S%2BoFiBM9RcCnuhUd4IajKt89QwlZA%2BpiBLFvA32BwIhAO7N%2B%2BwdtDelaj%2FN1JTYaIMi6ApJ9mx6oy2WPzRM0kqIKv8DCEYQABoMNjM3NDIzMTgzODA1IgxLH5aYdphPfjNaA9kq3APCAPew8muRx%2FkGIfTghr1l%2FXL2hZQEmIbdJNFyNMh1eU8ohzfCeAtWWie94SZOhV0e0vzSVK0jhKm20ekTbVTUb%2FYzl2FI8YO5xldrw%2Bq0dRwLfKSccVAnh75Nd%2FWIf%2BH30fvhtKdm9P9qt7Z0ekLHpXNNX5EAQGLNBSG%2BK41YyN0vlVo0blfrIUnwhr4Pmz10AmIukK5vhnbcG43MzeE4dSQ6l6fBCZROGua8x9BNVXDHGKsa0LFqDk5cTsXFT3AY7zqtLZlIaXS0ILTivNp3G4RENZPfyqTShcp2TUElBqSawBwOB3DTRiGn0T6OnfTNsrKj70Knvcw4l1xfqfGlUkSYAZ3pZp9Ib1%2B689D64%2BLRMx%2BATqH3n3XSOaTNI6EbmjeV4ekEkm2oTu2RExxXDqcyuqnZaRDE7b8osqDIPeOJRE0vGBBzqMMvD%2F%2F2nCSnKFjFp9POUTCWq5g%2F6rzbgS7DK2yjjyBV8Wm0I5XvZkv8jjec5HymPHy07SrB881bZqAxTNd0%2B%2FXfDktBwd6FlbdAefPIF1Pkl%2BZlvNn4DrehTDMdNx%2Bexy82WGxs%2F6fu1D1%2FXXOpXjVcsPLV6skTNT%2FSfDZ64CU4kY0zSRthwg6J%2BXlh0egLgy8avDCHibvCBjqkAfhSwpxTZ4XRDG0k88a6JY8Xpms%2B7R0TVtVQtDiUZXZO5OU39sqCfCh6HXGBFVnuQm%2F8gRlLSPjp0s%2BztnLESHEWzFmNG6hYCEbcA30gxYrd%2FXKmU3CTHu32P9giYWbGKc3OBerNtDAQabds0DDYgubBVBETqk1UcwiDyJZPtcwrEVNSarRvTl%2B%2FmIvRDLTEr1lLReNBrv8DVEVG8oHqW%2FPcrBpP&X-Amz-Signature=4824e96709d9b05eda0495aab587a823f9b7f52a0e9721f440b2b00bac3adc6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ORGF6U%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC99S%2BoFiBM9RcCnuhUd4IajKt89QwlZA%2BpiBLFvA32BwIhAO7N%2B%2BwdtDelaj%2FN1JTYaIMi6ApJ9mx6oy2WPzRM0kqIKv8DCEYQABoMNjM3NDIzMTgzODA1IgxLH5aYdphPfjNaA9kq3APCAPew8muRx%2FkGIfTghr1l%2FXL2hZQEmIbdJNFyNMh1eU8ohzfCeAtWWie94SZOhV0e0vzSVK0jhKm20ekTbVTUb%2FYzl2FI8YO5xldrw%2Bq0dRwLfKSccVAnh75Nd%2FWIf%2BH30fvhtKdm9P9qt7Z0ekLHpXNNX5EAQGLNBSG%2BK41YyN0vlVo0blfrIUnwhr4Pmz10AmIukK5vhnbcG43MzeE4dSQ6l6fBCZROGua8x9BNVXDHGKsa0LFqDk5cTsXFT3AY7zqtLZlIaXS0ILTivNp3G4RENZPfyqTShcp2TUElBqSawBwOB3DTRiGn0T6OnfTNsrKj70Knvcw4l1xfqfGlUkSYAZ3pZp9Ib1%2B689D64%2BLRMx%2BATqH3n3XSOaTNI6EbmjeV4ekEkm2oTu2RExxXDqcyuqnZaRDE7b8osqDIPeOJRE0vGBBzqMMvD%2F%2F2nCSnKFjFp9POUTCWq5g%2F6rzbgS7DK2yjjyBV8Wm0I5XvZkv8jjec5HymPHy07SrB881bZqAxTNd0%2B%2FXfDktBwd6FlbdAefPIF1Pkl%2BZlvNn4DrehTDMdNx%2Bexy82WGxs%2F6fu1D1%2FXXOpXjVcsPLV6skTNT%2FSfDZ64CU4kY0zSRthwg6J%2BXlh0egLgy8avDCHibvCBjqkAfhSwpxTZ4XRDG0k88a6JY8Xpms%2B7R0TVtVQtDiUZXZO5OU39sqCfCh6HXGBFVnuQm%2F8gRlLSPjp0s%2BztnLESHEWzFmNG6hYCEbcA30gxYrd%2FXKmU3CTHu32P9giYWbGKc3OBerNtDAQabds0DDYgubBVBETqk1UcwiDyJZPtcwrEVNSarRvTl%2B%2FmIvRDLTEr1lLReNBrv8DVEVG8oHqW%2FPcrBpP&X-Amz-Signature=02278361c444cbb11e3600f23098f29b2e6b61dde520e008f65b72fdc8e6856d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ORGF6U%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC99S%2BoFiBM9RcCnuhUd4IajKt89QwlZA%2BpiBLFvA32BwIhAO7N%2B%2BwdtDelaj%2FN1JTYaIMi6ApJ9mx6oy2WPzRM0kqIKv8DCEYQABoMNjM3NDIzMTgzODA1IgxLH5aYdphPfjNaA9kq3APCAPew8muRx%2FkGIfTghr1l%2FXL2hZQEmIbdJNFyNMh1eU8ohzfCeAtWWie94SZOhV0e0vzSVK0jhKm20ekTbVTUb%2FYzl2FI8YO5xldrw%2Bq0dRwLfKSccVAnh75Nd%2FWIf%2BH30fvhtKdm9P9qt7Z0ekLHpXNNX5EAQGLNBSG%2BK41YyN0vlVo0blfrIUnwhr4Pmz10AmIukK5vhnbcG43MzeE4dSQ6l6fBCZROGua8x9BNVXDHGKsa0LFqDk5cTsXFT3AY7zqtLZlIaXS0ILTivNp3G4RENZPfyqTShcp2TUElBqSawBwOB3DTRiGn0T6OnfTNsrKj70Knvcw4l1xfqfGlUkSYAZ3pZp9Ib1%2B689D64%2BLRMx%2BATqH3n3XSOaTNI6EbmjeV4ekEkm2oTu2RExxXDqcyuqnZaRDE7b8osqDIPeOJRE0vGBBzqMMvD%2F%2F2nCSnKFjFp9POUTCWq5g%2F6rzbgS7DK2yjjyBV8Wm0I5XvZkv8jjec5HymPHy07SrB881bZqAxTNd0%2B%2FXfDktBwd6FlbdAefPIF1Pkl%2BZlvNn4DrehTDMdNx%2Bexy82WGxs%2F6fu1D1%2FXXOpXjVcsPLV6skTNT%2FSfDZ64CU4kY0zSRthwg6J%2BXlh0egLgy8avDCHibvCBjqkAfhSwpxTZ4XRDG0k88a6JY8Xpms%2B7R0TVtVQtDiUZXZO5OU39sqCfCh6HXGBFVnuQm%2F8gRlLSPjp0s%2BztnLESHEWzFmNG6hYCEbcA30gxYrd%2FXKmU3CTHu32P9giYWbGKc3OBerNtDAQabds0DDYgubBVBETqk1UcwiDyJZPtcwrEVNSarRvTl%2B%2FmIvRDLTEr1lLReNBrv8DVEVG8oHqW%2FPcrBpP&X-Amz-Signature=2b8cf8dd25b2e3371296d3b39e7b3cc4507979c0c4fd32c8609d3016022b8f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ORGF6U%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC99S%2BoFiBM9RcCnuhUd4IajKt89QwlZA%2BpiBLFvA32BwIhAO7N%2B%2BwdtDelaj%2FN1JTYaIMi6ApJ9mx6oy2WPzRM0kqIKv8DCEYQABoMNjM3NDIzMTgzODA1IgxLH5aYdphPfjNaA9kq3APCAPew8muRx%2FkGIfTghr1l%2FXL2hZQEmIbdJNFyNMh1eU8ohzfCeAtWWie94SZOhV0e0vzSVK0jhKm20ekTbVTUb%2FYzl2FI8YO5xldrw%2Bq0dRwLfKSccVAnh75Nd%2FWIf%2BH30fvhtKdm9P9qt7Z0ekLHpXNNX5EAQGLNBSG%2BK41YyN0vlVo0blfrIUnwhr4Pmz10AmIukK5vhnbcG43MzeE4dSQ6l6fBCZROGua8x9BNVXDHGKsa0LFqDk5cTsXFT3AY7zqtLZlIaXS0ILTivNp3G4RENZPfyqTShcp2TUElBqSawBwOB3DTRiGn0T6OnfTNsrKj70Knvcw4l1xfqfGlUkSYAZ3pZp9Ib1%2B689D64%2BLRMx%2BATqH3n3XSOaTNI6EbmjeV4ekEkm2oTu2RExxXDqcyuqnZaRDE7b8osqDIPeOJRE0vGBBzqMMvD%2F%2F2nCSnKFjFp9POUTCWq5g%2F6rzbgS7DK2yjjyBV8Wm0I5XvZkv8jjec5HymPHy07SrB881bZqAxTNd0%2B%2FXfDktBwd6FlbdAefPIF1Pkl%2BZlvNn4DrehTDMdNx%2Bexy82WGxs%2F6fu1D1%2FXXOpXjVcsPLV6skTNT%2FSfDZ64CU4kY0zSRthwg6J%2BXlh0egLgy8avDCHibvCBjqkAfhSwpxTZ4XRDG0k88a6JY8Xpms%2B7R0TVtVQtDiUZXZO5OU39sqCfCh6HXGBFVnuQm%2F8gRlLSPjp0s%2BztnLESHEWzFmNG6hYCEbcA30gxYrd%2FXKmU3CTHu32P9giYWbGKc3OBerNtDAQabds0DDYgubBVBETqk1UcwiDyJZPtcwrEVNSarRvTl%2B%2FmIvRDLTEr1lLReNBrv8DVEVG8oHqW%2FPcrBpP&X-Amz-Signature=7ea1110d2a3ac9aca3856165fd53cd1a48404141eb493b334218bda38934d542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ORGF6U%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC99S%2BoFiBM9RcCnuhUd4IajKt89QwlZA%2BpiBLFvA32BwIhAO7N%2B%2BwdtDelaj%2FN1JTYaIMi6ApJ9mx6oy2WPzRM0kqIKv8DCEYQABoMNjM3NDIzMTgzODA1IgxLH5aYdphPfjNaA9kq3APCAPew8muRx%2FkGIfTghr1l%2FXL2hZQEmIbdJNFyNMh1eU8ohzfCeAtWWie94SZOhV0e0vzSVK0jhKm20ekTbVTUb%2FYzl2FI8YO5xldrw%2Bq0dRwLfKSccVAnh75Nd%2FWIf%2BH30fvhtKdm9P9qt7Z0ekLHpXNNX5EAQGLNBSG%2BK41YyN0vlVo0blfrIUnwhr4Pmz10AmIukK5vhnbcG43MzeE4dSQ6l6fBCZROGua8x9BNVXDHGKsa0LFqDk5cTsXFT3AY7zqtLZlIaXS0ILTivNp3G4RENZPfyqTShcp2TUElBqSawBwOB3DTRiGn0T6OnfTNsrKj70Knvcw4l1xfqfGlUkSYAZ3pZp9Ib1%2B689D64%2BLRMx%2BATqH3n3XSOaTNI6EbmjeV4ekEkm2oTu2RExxXDqcyuqnZaRDE7b8osqDIPeOJRE0vGBBzqMMvD%2F%2F2nCSnKFjFp9POUTCWq5g%2F6rzbgS7DK2yjjyBV8Wm0I5XvZkv8jjec5HymPHy07SrB881bZqAxTNd0%2B%2FXfDktBwd6FlbdAefPIF1Pkl%2BZlvNn4DrehTDMdNx%2Bexy82WGxs%2F6fu1D1%2FXXOpXjVcsPLV6skTNT%2FSfDZ64CU4kY0zSRthwg6J%2BXlh0egLgy8avDCHibvCBjqkAfhSwpxTZ4XRDG0k88a6JY8Xpms%2B7R0TVtVQtDiUZXZO5OU39sqCfCh6HXGBFVnuQm%2F8gRlLSPjp0s%2BztnLESHEWzFmNG6hYCEbcA30gxYrd%2FXKmU3CTHu32P9giYWbGKc3OBerNtDAQabds0DDYgubBVBETqk1UcwiDyJZPtcwrEVNSarRvTl%2B%2FmIvRDLTEr1lLReNBrv8DVEVG8oHqW%2FPcrBpP&X-Amz-Signature=3f46a45e7549601788f663aa4416db80123a6233238080adbfd50a626c6c9349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
