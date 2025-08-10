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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HHZX37E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGClZlhn8x5ZEcPrq0XgeYEIYSRt80f1tRR3mWB94fvyAiEA43nsRLEDcaQ9%2Bwwmis8t95iZhxpSCBv62Zcbk%2BqMisMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR%2BJLdmwLS4QNze4ircAx%2B65vOj3N5zyvnbxIV3WHtYr1xUDIf4LYQ6nBdqT1QmiOEB5pEt%2B05fxDn1YRyCAWCNpVdUDo634jpi%2Bvu3QCOG8QxfdgcJKSvCUUs%2FkW6T9NKE38Q26I7R%2B23SkFcerBFvfOf3mDo5ycd4hEg828vR991dcgS1ZE2ocW1a1XKvdSAwQ1zPmlA8%2F6Q1d9USxmCOmDjxDwnkcgOZQMAHT2temPaFdrAlQh%2FHt3OGUfgPd1B8%2BXePWwn6HHnjSz66QpIGB9rfvt4%2FiBkoHQlrHrH6DEUPjLHOuqd3C2AKhKWXoGLXAcSYq1FFhtRYFPBTv4iYQNPcJmL6if0ANabozcJqTX3DFDOM9E3RvCPHmUsqGB4iZXcWjiG46AWkOYh5hXXR%2Bh8TUFqfUatOnUGh6FOcFvB53rDaa7Y73CblB9ky5aXQyimPNSgxTwBUa8tlcTwfAi8MjdHrZKhaRWHxpmoo27USM4bgSl3bcSEL3x89ibDHZXn2fSh4HkyNh6CNqPkX08U6cJXZla9gy9RnGzpaH%2Bb%2Fz9WFnAg1V9X6ShKuMquOI2BNIJtxXkiisg6%2BHrxu8zD0xtebrbX6xCW4OfqiojduZcEWT07p2Wkp93h9K2EsAFYeraLiFwEiMLPR4MQGOqUBls%2BvT0GmLa4YOWA3lB5QYo90dEogF%2FGBXUNUz2tI81M1VBDsRUlnRroAoIENFz9V0TtOGeRzBVTwkErvZba6uPm0JOy3HiehYaUBrZVVGhRN6wgiSvoNsjEqvT6j9VLY8kXlAAjgPLjy94Cv6IqzC3kgmv14TvCKOAZIDtKky4OarAUo2TKL1Z%2B2pyDM7YkX6E8mAgpUrHMcjfWEqPKEK5O%2B3dRQ&X-Amz-Signature=092c97f8cf89acb5732e76eb904b684e8dcf6223a4cf7db20a3c8ef1747e7a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HHZX37E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGClZlhn8x5ZEcPrq0XgeYEIYSRt80f1tRR3mWB94fvyAiEA43nsRLEDcaQ9%2Bwwmis8t95iZhxpSCBv62Zcbk%2BqMisMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR%2BJLdmwLS4QNze4ircAx%2B65vOj3N5zyvnbxIV3WHtYr1xUDIf4LYQ6nBdqT1QmiOEB5pEt%2B05fxDn1YRyCAWCNpVdUDo634jpi%2Bvu3QCOG8QxfdgcJKSvCUUs%2FkW6T9NKE38Q26I7R%2B23SkFcerBFvfOf3mDo5ycd4hEg828vR991dcgS1ZE2ocW1a1XKvdSAwQ1zPmlA8%2F6Q1d9USxmCOmDjxDwnkcgOZQMAHT2temPaFdrAlQh%2FHt3OGUfgPd1B8%2BXePWwn6HHnjSz66QpIGB9rfvt4%2FiBkoHQlrHrH6DEUPjLHOuqd3C2AKhKWXoGLXAcSYq1FFhtRYFPBTv4iYQNPcJmL6if0ANabozcJqTX3DFDOM9E3RvCPHmUsqGB4iZXcWjiG46AWkOYh5hXXR%2Bh8TUFqfUatOnUGh6FOcFvB53rDaa7Y73CblB9ky5aXQyimPNSgxTwBUa8tlcTwfAi8MjdHrZKhaRWHxpmoo27USM4bgSl3bcSEL3x89ibDHZXn2fSh4HkyNh6CNqPkX08U6cJXZla9gy9RnGzpaH%2Bb%2Fz9WFnAg1V9X6ShKuMquOI2BNIJtxXkiisg6%2BHrxu8zD0xtebrbX6xCW4OfqiojduZcEWT07p2Wkp93h9K2EsAFYeraLiFwEiMLPR4MQGOqUBls%2BvT0GmLa4YOWA3lB5QYo90dEogF%2FGBXUNUz2tI81M1VBDsRUlnRroAoIENFz9V0TtOGeRzBVTwkErvZba6uPm0JOy3HiehYaUBrZVVGhRN6wgiSvoNsjEqvT6j9VLY8kXlAAjgPLjy94Cv6IqzC3kgmv14TvCKOAZIDtKky4OarAUo2TKL1Z%2B2pyDM7YkX6E8mAgpUrHMcjfWEqPKEK5O%2B3dRQ&X-Amz-Signature=a3c691615a68bacba8580a587dbcd095d2d0c7bdf3094a347defeaed372258df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HHZX37E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGClZlhn8x5ZEcPrq0XgeYEIYSRt80f1tRR3mWB94fvyAiEA43nsRLEDcaQ9%2Bwwmis8t95iZhxpSCBv62Zcbk%2BqMisMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR%2BJLdmwLS4QNze4ircAx%2B65vOj3N5zyvnbxIV3WHtYr1xUDIf4LYQ6nBdqT1QmiOEB5pEt%2B05fxDn1YRyCAWCNpVdUDo634jpi%2Bvu3QCOG8QxfdgcJKSvCUUs%2FkW6T9NKE38Q26I7R%2B23SkFcerBFvfOf3mDo5ycd4hEg828vR991dcgS1ZE2ocW1a1XKvdSAwQ1zPmlA8%2F6Q1d9USxmCOmDjxDwnkcgOZQMAHT2temPaFdrAlQh%2FHt3OGUfgPd1B8%2BXePWwn6HHnjSz66QpIGB9rfvt4%2FiBkoHQlrHrH6DEUPjLHOuqd3C2AKhKWXoGLXAcSYq1FFhtRYFPBTv4iYQNPcJmL6if0ANabozcJqTX3DFDOM9E3RvCPHmUsqGB4iZXcWjiG46AWkOYh5hXXR%2Bh8TUFqfUatOnUGh6FOcFvB53rDaa7Y73CblB9ky5aXQyimPNSgxTwBUa8tlcTwfAi8MjdHrZKhaRWHxpmoo27USM4bgSl3bcSEL3x89ibDHZXn2fSh4HkyNh6CNqPkX08U6cJXZla9gy9RnGzpaH%2Bb%2Fz9WFnAg1V9X6ShKuMquOI2BNIJtxXkiisg6%2BHrxu8zD0xtebrbX6xCW4OfqiojduZcEWT07p2Wkp93h9K2EsAFYeraLiFwEiMLPR4MQGOqUBls%2BvT0GmLa4YOWA3lB5QYo90dEogF%2FGBXUNUz2tI81M1VBDsRUlnRroAoIENFz9V0TtOGeRzBVTwkErvZba6uPm0JOy3HiehYaUBrZVVGhRN6wgiSvoNsjEqvT6j9VLY8kXlAAjgPLjy94Cv6IqzC3kgmv14TvCKOAZIDtKky4OarAUo2TKL1Z%2B2pyDM7YkX6E8mAgpUrHMcjfWEqPKEK5O%2B3dRQ&X-Amz-Signature=63d597ad853007882bc0addeda8eb7792b665c8554449225d410146ff202f656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HHZX37E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGClZlhn8x5ZEcPrq0XgeYEIYSRt80f1tRR3mWB94fvyAiEA43nsRLEDcaQ9%2Bwwmis8t95iZhxpSCBv62Zcbk%2BqMisMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR%2BJLdmwLS4QNze4ircAx%2B65vOj3N5zyvnbxIV3WHtYr1xUDIf4LYQ6nBdqT1QmiOEB5pEt%2B05fxDn1YRyCAWCNpVdUDo634jpi%2Bvu3QCOG8QxfdgcJKSvCUUs%2FkW6T9NKE38Q26I7R%2B23SkFcerBFvfOf3mDo5ycd4hEg828vR991dcgS1ZE2ocW1a1XKvdSAwQ1zPmlA8%2F6Q1d9USxmCOmDjxDwnkcgOZQMAHT2temPaFdrAlQh%2FHt3OGUfgPd1B8%2BXePWwn6HHnjSz66QpIGB9rfvt4%2FiBkoHQlrHrH6DEUPjLHOuqd3C2AKhKWXoGLXAcSYq1FFhtRYFPBTv4iYQNPcJmL6if0ANabozcJqTX3DFDOM9E3RvCPHmUsqGB4iZXcWjiG46AWkOYh5hXXR%2Bh8TUFqfUatOnUGh6FOcFvB53rDaa7Y73CblB9ky5aXQyimPNSgxTwBUa8tlcTwfAi8MjdHrZKhaRWHxpmoo27USM4bgSl3bcSEL3x89ibDHZXn2fSh4HkyNh6CNqPkX08U6cJXZla9gy9RnGzpaH%2Bb%2Fz9WFnAg1V9X6ShKuMquOI2BNIJtxXkiisg6%2BHrxu8zD0xtebrbX6xCW4OfqiojduZcEWT07p2Wkp93h9K2EsAFYeraLiFwEiMLPR4MQGOqUBls%2BvT0GmLa4YOWA3lB5QYo90dEogF%2FGBXUNUz2tI81M1VBDsRUlnRroAoIENFz9V0TtOGeRzBVTwkErvZba6uPm0JOy3HiehYaUBrZVVGhRN6wgiSvoNsjEqvT6j9VLY8kXlAAjgPLjy94Cv6IqzC3kgmv14TvCKOAZIDtKky4OarAUo2TKL1Z%2B2pyDM7YkX6E8mAgpUrHMcjfWEqPKEK5O%2B3dRQ&X-Amz-Signature=7f789820f5d8d9353f30096a8bbc79ef4797d63db03f35afb0327917aca485bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HHZX37E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGClZlhn8x5ZEcPrq0XgeYEIYSRt80f1tRR3mWB94fvyAiEA43nsRLEDcaQ9%2Bwwmis8t95iZhxpSCBv62Zcbk%2BqMisMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR%2BJLdmwLS4QNze4ircAx%2B65vOj3N5zyvnbxIV3WHtYr1xUDIf4LYQ6nBdqT1QmiOEB5pEt%2B05fxDn1YRyCAWCNpVdUDo634jpi%2Bvu3QCOG8QxfdgcJKSvCUUs%2FkW6T9NKE38Q26I7R%2B23SkFcerBFvfOf3mDo5ycd4hEg828vR991dcgS1ZE2ocW1a1XKvdSAwQ1zPmlA8%2F6Q1d9USxmCOmDjxDwnkcgOZQMAHT2temPaFdrAlQh%2FHt3OGUfgPd1B8%2BXePWwn6HHnjSz66QpIGB9rfvt4%2FiBkoHQlrHrH6DEUPjLHOuqd3C2AKhKWXoGLXAcSYq1FFhtRYFPBTv4iYQNPcJmL6if0ANabozcJqTX3DFDOM9E3RvCPHmUsqGB4iZXcWjiG46AWkOYh5hXXR%2Bh8TUFqfUatOnUGh6FOcFvB53rDaa7Y73CblB9ky5aXQyimPNSgxTwBUa8tlcTwfAi8MjdHrZKhaRWHxpmoo27USM4bgSl3bcSEL3x89ibDHZXn2fSh4HkyNh6CNqPkX08U6cJXZla9gy9RnGzpaH%2Bb%2Fz9WFnAg1V9X6ShKuMquOI2BNIJtxXkiisg6%2BHrxu8zD0xtebrbX6xCW4OfqiojduZcEWT07p2Wkp93h9K2EsAFYeraLiFwEiMLPR4MQGOqUBls%2BvT0GmLa4YOWA3lB5QYo90dEogF%2FGBXUNUz2tI81M1VBDsRUlnRroAoIENFz9V0TtOGeRzBVTwkErvZba6uPm0JOy3HiehYaUBrZVVGhRN6wgiSvoNsjEqvT6j9VLY8kXlAAjgPLjy94Cv6IqzC3kgmv14TvCKOAZIDtKky4OarAUo2TKL1Z%2B2pyDM7YkX6E8mAgpUrHMcjfWEqPKEK5O%2B3dRQ&X-Amz-Signature=8840b1464a6f3d9ce2136b540c7af430026f14776ef10ca717aae9f367cb54e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HHZX37E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGClZlhn8x5ZEcPrq0XgeYEIYSRt80f1tRR3mWB94fvyAiEA43nsRLEDcaQ9%2Bwwmis8t95iZhxpSCBv62Zcbk%2BqMisMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR%2BJLdmwLS4QNze4ircAx%2B65vOj3N5zyvnbxIV3WHtYr1xUDIf4LYQ6nBdqT1QmiOEB5pEt%2B05fxDn1YRyCAWCNpVdUDo634jpi%2Bvu3QCOG8QxfdgcJKSvCUUs%2FkW6T9NKE38Q26I7R%2B23SkFcerBFvfOf3mDo5ycd4hEg828vR991dcgS1ZE2ocW1a1XKvdSAwQ1zPmlA8%2F6Q1d9USxmCOmDjxDwnkcgOZQMAHT2temPaFdrAlQh%2FHt3OGUfgPd1B8%2BXePWwn6HHnjSz66QpIGB9rfvt4%2FiBkoHQlrHrH6DEUPjLHOuqd3C2AKhKWXoGLXAcSYq1FFhtRYFPBTv4iYQNPcJmL6if0ANabozcJqTX3DFDOM9E3RvCPHmUsqGB4iZXcWjiG46AWkOYh5hXXR%2Bh8TUFqfUatOnUGh6FOcFvB53rDaa7Y73CblB9ky5aXQyimPNSgxTwBUa8tlcTwfAi8MjdHrZKhaRWHxpmoo27USM4bgSl3bcSEL3x89ibDHZXn2fSh4HkyNh6CNqPkX08U6cJXZla9gy9RnGzpaH%2Bb%2Fz9WFnAg1V9X6ShKuMquOI2BNIJtxXkiisg6%2BHrxu8zD0xtebrbX6xCW4OfqiojduZcEWT07p2Wkp93h9K2EsAFYeraLiFwEiMLPR4MQGOqUBls%2BvT0GmLa4YOWA3lB5QYo90dEogF%2FGBXUNUz2tI81M1VBDsRUlnRroAoIENFz9V0TtOGeRzBVTwkErvZba6uPm0JOy3HiehYaUBrZVVGhRN6wgiSvoNsjEqvT6j9VLY8kXlAAjgPLjy94Cv6IqzC3kgmv14TvCKOAZIDtKky4OarAUo2TKL1Z%2B2pyDM7YkX6E8mAgpUrHMcjfWEqPKEK5O%2B3dRQ&X-Amz-Signature=29c5c9f64825bcc69368e1472c12ad35ca5a5922fb0b23323841727547a332db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HHZX37E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGClZlhn8x5ZEcPrq0XgeYEIYSRt80f1tRR3mWB94fvyAiEA43nsRLEDcaQ9%2Bwwmis8t95iZhxpSCBv62Zcbk%2BqMisMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR%2BJLdmwLS4QNze4ircAx%2B65vOj3N5zyvnbxIV3WHtYr1xUDIf4LYQ6nBdqT1QmiOEB5pEt%2B05fxDn1YRyCAWCNpVdUDo634jpi%2Bvu3QCOG8QxfdgcJKSvCUUs%2FkW6T9NKE38Q26I7R%2B23SkFcerBFvfOf3mDo5ycd4hEg828vR991dcgS1ZE2ocW1a1XKvdSAwQ1zPmlA8%2F6Q1d9USxmCOmDjxDwnkcgOZQMAHT2temPaFdrAlQh%2FHt3OGUfgPd1B8%2BXePWwn6HHnjSz66QpIGB9rfvt4%2FiBkoHQlrHrH6DEUPjLHOuqd3C2AKhKWXoGLXAcSYq1FFhtRYFPBTv4iYQNPcJmL6if0ANabozcJqTX3DFDOM9E3RvCPHmUsqGB4iZXcWjiG46AWkOYh5hXXR%2Bh8TUFqfUatOnUGh6FOcFvB53rDaa7Y73CblB9ky5aXQyimPNSgxTwBUa8tlcTwfAi8MjdHrZKhaRWHxpmoo27USM4bgSl3bcSEL3x89ibDHZXn2fSh4HkyNh6CNqPkX08U6cJXZla9gy9RnGzpaH%2Bb%2Fz9WFnAg1V9X6ShKuMquOI2BNIJtxXkiisg6%2BHrxu8zD0xtebrbX6xCW4OfqiojduZcEWT07p2Wkp93h9K2EsAFYeraLiFwEiMLPR4MQGOqUBls%2BvT0GmLa4YOWA3lB5QYo90dEogF%2FGBXUNUz2tI81M1VBDsRUlnRroAoIENFz9V0TtOGeRzBVTwkErvZba6uPm0JOy3HiehYaUBrZVVGhRN6wgiSvoNsjEqvT6j9VLY8kXlAAjgPLjy94Cv6IqzC3kgmv14TvCKOAZIDtKky4OarAUo2TKL1Z%2B2pyDM7YkX6E8mAgpUrHMcjfWEqPKEK5O%2B3dRQ&X-Amz-Signature=647d7b8913a2166911b3569067fb37f0ea510d61433797905f8ffac8832ac621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
