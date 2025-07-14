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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXWZGBW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDGlfTXUK6%2F1%2BCV2T6A29pXrpTsoEat2FMTfqz4rb4S3gIgNR2ZezJNM52vqaIn3eU8C9AK3O1LZv5pvW3aT1J8FS4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPOQmpAdFqvnREriWyrcA%2ByWg7F0nmj4%2B24xAJiaMRu0ZGiykmYtmVwJaVvMhx9fINsAkZYHwifJnyyolWinyDDGpSwJOKDFcSiTi4tBHOlJvsKDUtOWd6HFyu%2FiFDgP%2FXJKQUdAzjJUK8qBnpMZ2d06Y4adNhi9y6%2F9dLarYbyTsE%2F%2BV4Lgb0IvpLg1nGu2PjMfzThxpDzgpDVy31UPaeOpoSCV4gssw7c%2FCOFj%2BOOxnB7oT09cLpO27J7iHMaHRVK897mDBk%2BT82myKRA4msFcbrqzR53HNFzMDyaZu0di9N3AOVmqSLxl07fPJf6yOvQA4o%2F86GwvST%2Bp%2B3r8SEeML%2FbJtf4hyZo08xl0FWgC0IsSBwk76u5Vo5BCVDFh3wIJqKkYgDc%2FavGHo%2F2cYLLxERduMsQD4IToT1czAPv6U0utsURFjUE40M4HjsPsZt8s1BF2FFe02fxmMNGra3AiQNun5uTgmyA0gsnV9TByUn7e0wohxnBcdSzl%2Ffys6uGA2EIkS4voPTThUuHnEOge0P0RCyknwKOHryBPkih0uD5S6%2BLXTITMN1TBg9AWVSt9kOQCr8J8AYOi483ItmioXInklyfaN4P0QvZVBO%2FYdstuXppwAg9RtvFZskiE1KFqsbh59ohbC83eMJKF1MMGOqUBo5DM3jgtuUgVL7FSfvjAqskQX%2By63LWt%2BdHPuYMsvVm2cC0FJgfKdNsk32hJZPzc%2FuAAj2VemvsG16q8ajnhhQh63z1rsj2Elm83adI7TG4SwKkYlueCmFhTy9Q%2BnawHvfs2IuoH8ksje1eVUpelmMaRxgIUWL%2F8tm5idYhG9iC3T646g%2BGf2egdF2kjW2sGWRg9URspqt4HI%2FAk0znwTRmTYLy%2F&X-Amz-Signature=bd75c1de1f5e1a688d583487847218ecb140f890bd22c8c0692adcc70358fc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXWZGBW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDGlfTXUK6%2F1%2BCV2T6A29pXrpTsoEat2FMTfqz4rb4S3gIgNR2ZezJNM52vqaIn3eU8C9AK3O1LZv5pvW3aT1J8FS4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPOQmpAdFqvnREriWyrcA%2ByWg7F0nmj4%2B24xAJiaMRu0ZGiykmYtmVwJaVvMhx9fINsAkZYHwifJnyyolWinyDDGpSwJOKDFcSiTi4tBHOlJvsKDUtOWd6HFyu%2FiFDgP%2FXJKQUdAzjJUK8qBnpMZ2d06Y4adNhi9y6%2F9dLarYbyTsE%2F%2BV4Lgb0IvpLg1nGu2PjMfzThxpDzgpDVy31UPaeOpoSCV4gssw7c%2FCOFj%2BOOxnB7oT09cLpO27J7iHMaHRVK897mDBk%2BT82myKRA4msFcbrqzR53HNFzMDyaZu0di9N3AOVmqSLxl07fPJf6yOvQA4o%2F86GwvST%2Bp%2B3r8SEeML%2FbJtf4hyZo08xl0FWgC0IsSBwk76u5Vo5BCVDFh3wIJqKkYgDc%2FavGHo%2F2cYLLxERduMsQD4IToT1czAPv6U0utsURFjUE40M4HjsPsZt8s1BF2FFe02fxmMNGra3AiQNun5uTgmyA0gsnV9TByUn7e0wohxnBcdSzl%2Ffys6uGA2EIkS4voPTThUuHnEOge0P0RCyknwKOHryBPkih0uD5S6%2BLXTITMN1TBg9AWVSt9kOQCr8J8AYOi483ItmioXInklyfaN4P0QvZVBO%2FYdstuXppwAg9RtvFZskiE1KFqsbh59ohbC83eMJKF1MMGOqUBo5DM3jgtuUgVL7FSfvjAqskQX%2By63LWt%2BdHPuYMsvVm2cC0FJgfKdNsk32hJZPzc%2FuAAj2VemvsG16q8ajnhhQh63z1rsj2Elm83adI7TG4SwKkYlueCmFhTy9Q%2BnawHvfs2IuoH8ksje1eVUpelmMaRxgIUWL%2F8tm5idYhG9iC3T646g%2BGf2egdF2kjW2sGWRg9URspqt4HI%2FAk0znwTRmTYLy%2F&X-Amz-Signature=444ec53ae5ae39b23b8fdd2ca26aff6d6423c6bd33c3abf2e2efe25e4ca5310f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXWZGBW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDGlfTXUK6%2F1%2BCV2T6A29pXrpTsoEat2FMTfqz4rb4S3gIgNR2ZezJNM52vqaIn3eU8C9AK3O1LZv5pvW3aT1J8FS4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPOQmpAdFqvnREriWyrcA%2ByWg7F0nmj4%2B24xAJiaMRu0ZGiykmYtmVwJaVvMhx9fINsAkZYHwifJnyyolWinyDDGpSwJOKDFcSiTi4tBHOlJvsKDUtOWd6HFyu%2FiFDgP%2FXJKQUdAzjJUK8qBnpMZ2d06Y4adNhi9y6%2F9dLarYbyTsE%2F%2BV4Lgb0IvpLg1nGu2PjMfzThxpDzgpDVy31UPaeOpoSCV4gssw7c%2FCOFj%2BOOxnB7oT09cLpO27J7iHMaHRVK897mDBk%2BT82myKRA4msFcbrqzR53HNFzMDyaZu0di9N3AOVmqSLxl07fPJf6yOvQA4o%2F86GwvST%2Bp%2B3r8SEeML%2FbJtf4hyZo08xl0FWgC0IsSBwk76u5Vo5BCVDFh3wIJqKkYgDc%2FavGHo%2F2cYLLxERduMsQD4IToT1czAPv6U0utsURFjUE40M4HjsPsZt8s1BF2FFe02fxmMNGra3AiQNun5uTgmyA0gsnV9TByUn7e0wohxnBcdSzl%2Ffys6uGA2EIkS4voPTThUuHnEOge0P0RCyknwKOHryBPkih0uD5S6%2BLXTITMN1TBg9AWVSt9kOQCr8J8AYOi483ItmioXInklyfaN4P0QvZVBO%2FYdstuXppwAg9RtvFZskiE1KFqsbh59ohbC83eMJKF1MMGOqUBo5DM3jgtuUgVL7FSfvjAqskQX%2By63LWt%2BdHPuYMsvVm2cC0FJgfKdNsk32hJZPzc%2FuAAj2VemvsG16q8ajnhhQh63z1rsj2Elm83adI7TG4SwKkYlueCmFhTy9Q%2BnawHvfs2IuoH8ksje1eVUpelmMaRxgIUWL%2F8tm5idYhG9iC3T646g%2BGf2egdF2kjW2sGWRg9URspqt4HI%2FAk0znwTRmTYLy%2F&X-Amz-Signature=54709718a8f750ca8123dfeff045b6897f7f40d5707221f32bc8cd6bc9419647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXWZGBW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDGlfTXUK6%2F1%2BCV2T6A29pXrpTsoEat2FMTfqz4rb4S3gIgNR2ZezJNM52vqaIn3eU8C9AK3O1LZv5pvW3aT1J8FS4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPOQmpAdFqvnREriWyrcA%2ByWg7F0nmj4%2B24xAJiaMRu0ZGiykmYtmVwJaVvMhx9fINsAkZYHwifJnyyolWinyDDGpSwJOKDFcSiTi4tBHOlJvsKDUtOWd6HFyu%2FiFDgP%2FXJKQUdAzjJUK8qBnpMZ2d06Y4adNhi9y6%2F9dLarYbyTsE%2F%2BV4Lgb0IvpLg1nGu2PjMfzThxpDzgpDVy31UPaeOpoSCV4gssw7c%2FCOFj%2BOOxnB7oT09cLpO27J7iHMaHRVK897mDBk%2BT82myKRA4msFcbrqzR53HNFzMDyaZu0di9N3AOVmqSLxl07fPJf6yOvQA4o%2F86GwvST%2Bp%2B3r8SEeML%2FbJtf4hyZo08xl0FWgC0IsSBwk76u5Vo5BCVDFh3wIJqKkYgDc%2FavGHo%2F2cYLLxERduMsQD4IToT1czAPv6U0utsURFjUE40M4HjsPsZt8s1BF2FFe02fxmMNGra3AiQNun5uTgmyA0gsnV9TByUn7e0wohxnBcdSzl%2Ffys6uGA2EIkS4voPTThUuHnEOge0P0RCyknwKOHryBPkih0uD5S6%2BLXTITMN1TBg9AWVSt9kOQCr8J8AYOi483ItmioXInklyfaN4P0QvZVBO%2FYdstuXppwAg9RtvFZskiE1KFqsbh59ohbC83eMJKF1MMGOqUBo5DM3jgtuUgVL7FSfvjAqskQX%2By63LWt%2BdHPuYMsvVm2cC0FJgfKdNsk32hJZPzc%2FuAAj2VemvsG16q8ajnhhQh63z1rsj2Elm83adI7TG4SwKkYlueCmFhTy9Q%2BnawHvfs2IuoH8ksje1eVUpelmMaRxgIUWL%2F8tm5idYhG9iC3T646g%2BGf2egdF2kjW2sGWRg9URspqt4HI%2FAk0znwTRmTYLy%2F&X-Amz-Signature=2ab49ad372bd4a467453f42abe51092bfcb756786135f818643192ed7340dbc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXWZGBW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDGlfTXUK6%2F1%2BCV2T6A29pXrpTsoEat2FMTfqz4rb4S3gIgNR2ZezJNM52vqaIn3eU8C9AK3O1LZv5pvW3aT1J8FS4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPOQmpAdFqvnREriWyrcA%2ByWg7F0nmj4%2B24xAJiaMRu0ZGiykmYtmVwJaVvMhx9fINsAkZYHwifJnyyolWinyDDGpSwJOKDFcSiTi4tBHOlJvsKDUtOWd6HFyu%2FiFDgP%2FXJKQUdAzjJUK8qBnpMZ2d06Y4adNhi9y6%2F9dLarYbyTsE%2F%2BV4Lgb0IvpLg1nGu2PjMfzThxpDzgpDVy31UPaeOpoSCV4gssw7c%2FCOFj%2BOOxnB7oT09cLpO27J7iHMaHRVK897mDBk%2BT82myKRA4msFcbrqzR53HNFzMDyaZu0di9N3AOVmqSLxl07fPJf6yOvQA4o%2F86GwvST%2Bp%2B3r8SEeML%2FbJtf4hyZo08xl0FWgC0IsSBwk76u5Vo5BCVDFh3wIJqKkYgDc%2FavGHo%2F2cYLLxERduMsQD4IToT1czAPv6U0utsURFjUE40M4HjsPsZt8s1BF2FFe02fxmMNGra3AiQNun5uTgmyA0gsnV9TByUn7e0wohxnBcdSzl%2Ffys6uGA2EIkS4voPTThUuHnEOge0P0RCyknwKOHryBPkih0uD5S6%2BLXTITMN1TBg9AWVSt9kOQCr8J8AYOi483ItmioXInklyfaN4P0QvZVBO%2FYdstuXppwAg9RtvFZskiE1KFqsbh59ohbC83eMJKF1MMGOqUBo5DM3jgtuUgVL7FSfvjAqskQX%2By63LWt%2BdHPuYMsvVm2cC0FJgfKdNsk32hJZPzc%2FuAAj2VemvsG16q8ajnhhQh63z1rsj2Elm83adI7TG4SwKkYlueCmFhTy9Q%2BnawHvfs2IuoH8ksje1eVUpelmMaRxgIUWL%2F8tm5idYhG9iC3T646g%2BGf2egdF2kjW2sGWRg9URspqt4HI%2FAk0znwTRmTYLy%2F&X-Amz-Signature=a55ba1205db365adb1dd2abe39caa7cab6b87ccbe1e1a6510f66ad3e9d56cbe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXWZGBW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDGlfTXUK6%2F1%2BCV2T6A29pXrpTsoEat2FMTfqz4rb4S3gIgNR2ZezJNM52vqaIn3eU8C9AK3O1LZv5pvW3aT1J8FS4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPOQmpAdFqvnREriWyrcA%2ByWg7F0nmj4%2B24xAJiaMRu0ZGiykmYtmVwJaVvMhx9fINsAkZYHwifJnyyolWinyDDGpSwJOKDFcSiTi4tBHOlJvsKDUtOWd6HFyu%2FiFDgP%2FXJKQUdAzjJUK8qBnpMZ2d06Y4adNhi9y6%2F9dLarYbyTsE%2F%2BV4Lgb0IvpLg1nGu2PjMfzThxpDzgpDVy31UPaeOpoSCV4gssw7c%2FCOFj%2BOOxnB7oT09cLpO27J7iHMaHRVK897mDBk%2BT82myKRA4msFcbrqzR53HNFzMDyaZu0di9N3AOVmqSLxl07fPJf6yOvQA4o%2F86GwvST%2Bp%2B3r8SEeML%2FbJtf4hyZo08xl0FWgC0IsSBwk76u5Vo5BCVDFh3wIJqKkYgDc%2FavGHo%2F2cYLLxERduMsQD4IToT1czAPv6U0utsURFjUE40M4HjsPsZt8s1BF2FFe02fxmMNGra3AiQNun5uTgmyA0gsnV9TByUn7e0wohxnBcdSzl%2Ffys6uGA2EIkS4voPTThUuHnEOge0P0RCyknwKOHryBPkih0uD5S6%2BLXTITMN1TBg9AWVSt9kOQCr8J8AYOi483ItmioXInklyfaN4P0QvZVBO%2FYdstuXppwAg9RtvFZskiE1KFqsbh59ohbC83eMJKF1MMGOqUBo5DM3jgtuUgVL7FSfvjAqskQX%2By63LWt%2BdHPuYMsvVm2cC0FJgfKdNsk32hJZPzc%2FuAAj2VemvsG16q8ajnhhQh63z1rsj2Elm83adI7TG4SwKkYlueCmFhTy9Q%2BnawHvfs2IuoH8ksje1eVUpelmMaRxgIUWL%2F8tm5idYhG9iC3T646g%2BGf2egdF2kjW2sGWRg9URspqt4HI%2FAk0znwTRmTYLy%2F&X-Amz-Signature=27a2a009ee0897f56e3bdecf7ad979a2a793a5eeca2603efab54581cc91464d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXWZGBW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDGlfTXUK6%2F1%2BCV2T6A29pXrpTsoEat2FMTfqz4rb4S3gIgNR2ZezJNM52vqaIn3eU8C9AK3O1LZv5pvW3aT1J8FS4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPOQmpAdFqvnREriWyrcA%2ByWg7F0nmj4%2B24xAJiaMRu0ZGiykmYtmVwJaVvMhx9fINsAkZYHwifJnyyolWinyDDGpSwJOKDFcSiTi4tBHOlJvsKDUtOWd6HFyu%2FiFDgP%2FXJKQUdAzjJUK8qBnpMZ2d06Y4adNhi9y6%2F9dLarYbyTsE%2F%2BV4Lgb0IvpLg1nGu2PjMfzThxpDzgpDVy31UPaeOpoSCV4gssw7c%2FCOFj%2BOOxnB7oT09cLpO27J7iHMaHRVK897mDBk%2BT82myKRA4msFcbrqzR53HNFzMDyaZu0di9N3AOVmqSLxl07fPJf6yOvQA4o%2F86GwvST%2Bp%2B3r8SEeML%2FbJtf4hyZo08xl0FWgC0IsSBwk76u5Vo5BCVDFh3wIJqKkYgDc%2FavGHo%2F2cYLLxERduMsQD4IToT1czAPv6U0utsURFjUE40M4HjsPsZt8s1BF2FFe02fxmMNGra3AiQNun5uTgmyA0gsnV9TByUn7e0wohxnBcdSzl%2Ffys6uGA2EIkS4voPTThUuHnEOge0P0RCyknwKOHryBPkih0uD5S6%2BLXTITMN1TBg9AWVSt9kOQCr8J8AYOi483ItmioXInklyfaN4P0QvZVBO%2FYdstuXppwAg9RtvFZskiE1KFqsbh59ohbC83eMJKF1MMGOqUBo5DM3jgtuUgVL7FSfvjAqskQX%2By63LWt%2BdHPuYMsvVm2cC0FJgfKdNsk32hJZPzc%2FuAAj2VemvsG16q8ajnhhQh63z1rsj2Elm83adI7TG4SwKkYlueCmFhTy9Q%2BnawHvfs2IuoH8ksje1eVUpelmMaRxgIUWL%2F8tm5idYhG9iC3T646g%2BGf2egdF2kjW2sGWRg9URspqt4HI%2FAk0znwTRmTYLy%2F&X-Amz-Signature=6a48cc32e6b7af097762ac7265713fb8f9f910ccfbf2d8dd03b4d58fb2aaa160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
