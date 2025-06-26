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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOM56VW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIA3Te7MlYd80byufG%2Fxs2GUbUqVRHY8mr2TRGU0a7JRkAiEAyR28g6iBiXbPoJiH5rsHU%2BeB%2BItnXVryEdX1qIy1K6Yq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEPEx0idTwjHUTgEiSrcAxQK8z7cTs2YN6yEqDLLc69GDwPcFs9KfVkzMSvoM1HqffscHPAQzjjH%2FVXzMrrHKgNqpyHl3HktV0xgkF4cfTyMd%2FbatEqXCRpvZdi16bfAl19AyMm45XBSLaDMDNi2WPekoI6qjve0f1EVe8Z%2FtK7nB9j5CbkF9x8IDgXeMS%2BOx5r68t72pQ298Fo0tmNS0wTwxG0TZsNTkHyYFXvME3e5C8b%2FudTyvLsHTQhzROD6KcWtmQLlcgYgMj%2BDtWxGWo3R7yVFmcFsgSrS3R1Osu7cLbepA5pB2WH%2B%2FyorNjGqnil4nwLDGKB59L9lDrDX8PYCRj1OkqXX7QEdcyEz7mrFq402BAputToR9SXM5e0tPNeMsnH3GR7fdUkhQD67RSVlyICdpsVH2zIXag7S5VPuE7uqVjaB0XDVIApi1u5hx43oYefq6vGl3b8GFL5ZW4j2njwziaHpudbp2qeRarvc9l8MaiR9wsyGkFsI9EEGtm1pqVh9tCUuVQl8mMNalRxlF3P86xB%2FsgSIvY9IDzmRviZbP2NKAH4JDFYgs6PPkc6aPVYiZ6Q2iu%2BUYuQcUkQjmnEO%2FC5ZHN12RcM80FzCt6nNiy6GJMlJ01gfv00UGbGibKctFaDM3r4BMILe8sIGOqUBFcvUADYAnDN9sb4BZwlEdFws2CeiGEUEqrXHl276ZXHD2ktylTkwqCDItBWXzK8kdqs%2FhnLDvwJkLG20NewKqG6ox%2B%2FoxhrLs80jWhPVDYkoZhMCbL4jv0VQoRyfp%2Fl5NQuO9lC0Nc8%2FwlMY2PDmgzbhHGWWTAYkehTpn%2Fidr%2F2%2BdpUxmaQYEiyVPEPQi2wMWxB79f4mGwRJHZhVR%2B5tvNJC0OzZ&X-Amz-Signature=1123d6416e2c9d32cbb170e3d14e7143fda7569e8beba984a419b3e5b80dd9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOM56VW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIA3Te7MlYd80byufG%2Fxs2GUbUqVRHY8mr2TRGU0a7JRkAiEAyR28g6iBiXbPoJiH5rsHU%2BeB%2BItnXVryEdX1qIy1K6Yq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEPEx0idTwjHUTgEiSrcAxQK8z7cTs2YN6yEqDLLc69GDwPcFs9KfVkzMSvoM1HqffscHPAQzjjH%2FVXzMrrHKgNqpyHl3HktV0xgkF4cfTyMd%2FbatEqXCRpvZdi16bfAl19AyMm45XBSLaDMDNi2WPekoI6qjve0f1EVe8Z%2FtK7nB9j5CbkF9x8IDgXeMS%2BOx5r68t72pQ298Fo0tmNS0wTwxG0TZsNTkHyYFXvME3e5C8b%2FudTyvLsHTQhzROD6KcWtmQLlcgYgMj%2BDtWxGWo3R7yVFmcFsgSrS3R1Osu7cLbepA5pB2WH%2B%2FyorNjGqnil4nwLDGKB59L9lDrDX8PYCRj1OkqXX7QEdcyEz7mrFq402BAputToR9SXM5e0tPNeMsnH3GR7fdUkhQD67RSVlyICdpsVH2zIXag7S5VPuE7uqVjaB0XDVIApi1u5hx43oYefq6vGl3b8GFL5ZW4j2njwziaHpudbp2qeRarvc9l8MaiR9wsyGkFsI9EEGtm1pqVh9tCUuVQl8mMNalRxlF3P86xB%2FsgSIvY9IDzmRviZbP2NKAH4JDFYgs6PPkc6aPVYiZ6Q2iu%2BUYuQcUkQjmnEO%2FC5ZHN12RcM80FzCt6nNiy6GJMlJ01gfv00UGbGibKctFaDM3r4BMILe8sIGOqUBFcvUADYAnDN9sb4BZwlEdFws2CeiGEUEqrXHl276ZXHD2ktylTkwqCDItBWXzK8kdqs%2FhnLDvwJkLG20NewKqG6ox%2B%2FoxhrLs80jWhPVDYkoZhMCbL4jv0VQoRyfp%2Fl5NQuO9lC0Nc8%2FwlMY2PDmgzbhHGWWTAYkehTpn%2Fidr%2F2%2BdpUxmaQYEiyVPEPQi2wMWxB79f4mGwRJHZhVR%2B5tvNJC0OzZ&X-Amz-Signature=421ee124e9789e7ba1b683d8101fe64944045f02609bf61d59d88fc727c7dbc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOM56VW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIA3Te7MlYd80byufG%2Fxs2GUbUqVRHY8mr2TRGU0a7JRkAiEAyR28g6iBiXbPoJiH5rsHU%2BeB%2BItnXVryEdX1qIy1K6Yq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEPEx0idTwjHUTgEiSrcAxQK8z7cTs2YN6yEqDLLc69GDwPcFs9KfVkzMSvoM1HqffscHPAQzjjH%2FVXzMrrHKgNqpyHl3HktV0xgkF4cfTyMd%2FbatEqXCRpvZdi16bfAl19AyMm45XBSLaDMDNi2WPekoI6qjve0f1EVe8Z%2FtK7nB9j5CbkF9x8IDgXeMS%2BOx5r68t72pQ298Fo0tmNS0wTwxG0TZsNTkHyYFXvME3e5C8b%2FudTyvLsHTQhzROD6KcWtmQLlcgYgMj%2BDtWxGWo3R7yVFmcFsgSrS3R1Osu7cLbepA5pB2WH%2B%2FyorNjGqnil4nwLDGKB59L9lDrDX8PYCRj1OkqXX7QEdcyEz7mrFq402BAputToR9SXM5e0tPNeMsnH3GR7fdUkhQD67RSVlyICdpsVH2zIXag7S5VPuE7uqVjaB0XDVIApi1u5hx43oYefq6vGl3b8GFL5ZW4j2njwziaHpudbp2qeRarvc9l8MaiR9wsyGkFsI9EEGtm1pqVh9tCUuVQl8mMNalRxlF3P86xB%2FsgSIvY9IDzmRviZbP2NKAH4JDFYgs6PPkc6aPVYiZ6Q2iu%2BUYuQcUkQjmnEO%2FC5ZHN12RcM80FzCt6nNiy6GJMlJ01gfv00UGbGibKctFaDM3r4BMILe8sIGOqUBFcvUADYAnDN9sb4BZwlEdFws2CeiGEUEqrXHl276ZXHD2ktylTkwqCDItBWXzK8kdqs%2FhnLDvwJkLG20NewKqG6ox%2B%2FoxhrLs80jWhPVDYkoZhMCbL4jv0VQoRyfp%2Fl5NQuO9lC0Nc8%2FwlMY2PDmgzbhHGWWTAYkehTpn%2Fidr%2F2%2BdpUxmaQYEiyVPEPQi2wMWxB79f4mGwRJHZhVR%2B5tvNJC0OzZ&X-Amz-Signature=a984a0f1887a9f1515010abd5a10cf20eeb55c45e51e3288c4dff05d1b5a736e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOM56VW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIA3Te7MlYd80byufG%2Fxs2GUbUqVRHY8mr2TRGU0a7JRkAiEAyR28g6iBiXbPoJiH5rsHU%2BeB%2BItnXVryEdX1qIy1K6Yq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEPEx0idTwjHUTgEiSrcAxQK8z7cTs2YN6yEqDLLc69GDwPcFs9KfVkzMSvoM1HqffscHPAQzjjH%2FVXzMrrHKgNqpyHl3HktV0xgkF4cfTyMd%2FbatEqXCRpvZdi16bfAl19AyMm45XBSLaDMDNi2WPekoI6qjve0f1EVe8Z%2FtK7nB9j5CbkF9x8IDgXeMS%2BOx5r68t72pQ298Fo0tmNS0wTwxG0TZsNTkHyYFXvME3e5C8b%2FudTyvLsHTQhzROD6KcWtmQLlcgYgMj%2BDtWxGWo3R7yVFmcFsgSrS3R1Osu7cLbepA5pB2WH%2B%2FyorNjGqnil4nwLDGKB59L9lDrDX8PYCRj1OkqXX7QEdcyEz7mrFq402BAputToR9SXM5e0tPNeMsnH3GR7fdUkhQD67RSVlyICdpsVH2zIXag7S5VPuE7uqVjaB0XDVIApi1u5hx43oYefq6vGl3b8GFL5ZW4j2njwziaHpudbp2qeRarvc9l8MaiR9wsyGkFsI9EEGtm1pqVh9tCUuVQl8mMNalRxlF3P86xB%2FsgSIvY9IDzmRviZbP2NKAH4JDFYgs6PPkc6aPVYiZ6Q2iu%2BUYuQcUkQjmnEO%2FC5ZHN12RcM80FzCt6nNiy6GJMlJ01gfv00UGbGibKctFaDM3r4BMILe8sIGOqUBFcvUADYAnDN9sb4BZwlEdFws2CeiGEUEqrXHl276ZXHD2ktylTkwqCDItBWXzK8kdqs%2FhnLDvwJkLG20NewKqG6ox%2B%2FoxhrLs80jWhPVDYkoZhMCbL4jv0VQoRyfp%2Fl5NQuO9lC0Nc8%2FwlMY2PDmgzbhHGWWTAYkehTpn%2Fidr%2F2%2BdpUxmaQYEiyVPEPQi2wMWxB79f4mGwRJHZhVR%2B5tvNJC0OzZ&X-Amz-Signature=b8f724d600c18eba3ce5554a9ef358d2343ba4f32a7417e646bb6632f424fb64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOM56VW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIA3Te7MlYd80byufG%2Fxs2GUbUqVRHY8mr2TRGU0a7JRkAiEAyR28g6iBiXbPoJiH5rsHU%2BeB%2BItnXVryEdX1qIy1K6Yq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEPEx0idTwjHUTgEiSrcAxQK8z7cTs2YN6yEqDLLc69GDwPcFs9KfVkzMSvoM1HqffscHPAQzjjH%2FVXzMrrHKgNqpyHl3HktV0xgkF4cfTyMd%2FbatEqXCRpvZdi16bfAl19AyMm45XBSLaDMDNi2WPekoI6qjve0f1EVe8Z%2FtK7nB9j5CbkF9x8IDgXeMS%2BOx5r68t72pQ298Fo0tmNS0wTwxG0TZsNTkHyYFXvME3e5C8b%2FudTyvLsHTQhzROD6KcWtmQLlcgYgMj%2BDtWxGWo3R7yVFmcFsgSrS3R1Osu7cLbepA5pB2WH%2B%2FyorNjGqnil4nwLDGKB59L9lDrDX8PYCRj1OkqXX7QEdcyEz7mrFq402BAputToR9SXM5e0tPNeMsnH3GR7fdUkhQD67RSVlyICdpsVH2zIXag7S5VPuE7uqVjaB0XDVIApi1u5hx43oYefq6vGl3b8GFL5ZW4j2njwziaHpudbp2qeRarvc9l8MaiR9wsyGkFsI9EEGtm1pqVh9tCUuVQl8mMNalRxlF3P86xB%2FsgSIvY9IDzmRviZbP2NKAH4JDFYgs6PPkc6aPVYiZ6Q2iu%2BUYuQcUkQjmnEO%2FC5ZHN12RcM80FzCt6nNiy6GJMlJ01gfv00UGbGibKctFaDM3r4BMILe8sIGOqUBFcvUADYAnDN9sb4BZwlEdFws2CeiGEUEqrXHl276ZXHD2ktylTkwqCDItBWXzK8kdqs%2FhnLDvwJkLG20NewKqG6ox%2B%2FoxhrLs80jWhPVDYkoZhMCbL4jv0VQoRyfp%2Fl5NQuO9lC0Nc8%2FwlMY2PDmgzbhHGWWTAYkehTpn%2Fidr%2F2%2BdpUxmaQYEiyVPEPQi2wMWxB79f4mGwRJHZhVR%2B5tvNJC0OzZ&X-Amz-Signature=4c06bfe76c1a9942c27d7ca7045a7b4ee7227ed918d45b7100a1cb72af043741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOM56VW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIA3Te7MlYd80byufG%2Fxs2GUbUqVRHY8mr2TRGU0a7JRkAiEAyR28g6iBiXbPoJiH5rsHU%2BeB%2BItnXVryEdX1qIy1K6Yq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEPEx0idTwjHUTgEiSrcAxQK8z7cTs2YN6yEqDLLc69GDwPcFs9KfVkzMSvoM1HqffscHPAQzjjH%2FVXzMrrHKgNqpyHl3HktV0xgkF4cfTyMd%2FbatEqXCRpvZdi16bfAl19AyMm45XBSLaDMDNi2WPekoI6qjve0f1EVe8Z%2FtK7nB9j5CbkF9x8IDgXeMS%2BOx5r68t72pQ298Fo0tmNS0wTwxG0TZsNTkHyYFXvME3e5C8b%2FudTyvLsHTQhzROD6KcWtmQLlcgYgMj%2BDtWxGWo3R7yVFmcFsgSrS3R1Osu7cLbepA5pB2WH%2B%2FyorNjGqnil4nwLDGKB59L9lDrDX8PYCRj1OkqXX7QEdcyEz7mrFq402BAputToR9SXM5e0tPNeMsnH3GR7fdUkhQD67RSVlyICdpsVH2zIXag7S5VPuE7uqVjaB0XDVIApi1u5hx43oYefq6vGl3b8GFL5ZW4j2njwziaHpudbp2qeRarvc9l8MaiR9wsyGkFsI9EEGtm1pqVh9tCUuVQl8mMNalRxlF3P86xB%2FsgSIvY9IDzmRviZbP2NKAH4JDFYgs6PPkc6aPVYiZ6Q2iu%2BUYuQcUkQjmnEO%2FC5ZHN12RcM80FzCt6nNiy6GJMlJ01gfv00UGbGibKctFaDM3r4BMILe8sIGOqUBFcvUADYAnDN9sb4BZwlEdFws2CeiGEUEqrXHl276ZXHD2ktylTkwqCDItBWXzK8kdqs%2FhnLDvwJkLG20NewKqG6ox%2B%2FoxhrLs80jWhPVDYkoZhMCbL4jv0VQoRyfp%2Fl5NQuO9lC0Nc8%2FwlMY2PDmgzbhHGWWTAYkehTpn%2Fidr%2F2%2BdpUxmaQYEiyVPEPQi2wMWxB79f4mGwRJHZhVR%2B5tvNJC0OzZ&X-Amz-Signature=5af08bce9bf38eee1bf74fd26d74d5a3e6085b9abc151ab6f4911f765f1878d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOM56VW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIA3Te7MlYd80byufG%2Fxs2GUbUqVRHY8mr2TRGU0a7JRkAiEAyR28g6iBiXbPoJiH5rsHU%2BeB%2BItnXVryEdX1qIy1K6Yq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEPEx0idTwjHUTgEiSrcAxQK8z7cTs2YN6yEqDLLc69GDwPcFs9KfVkzMSvoM1HqffscHPAQzjjH%2FVXzMrrHKgNqpyHl3HktV0xgkF4cfTyMd%2FbatEqXCRpvZdi16bfAl19AyMm45XBSLaDMDNi2WPekoI6qjve0f1EVe8Z%2FtK7nB9j5CbkF9x8IDgXeMS%2BOx5r68t72pQ298Fo0tmNS0wTwxG0TZsNTkHyYFXvME3e5C8b%2FudTyvLsHTQhzROD6KcWtmQLlcgYgMj%2BDtWxGWo3R7yVFmcFsgSrS3R1Osu7cLbepA5pB2WH%2B%2FyorNjGqnil4nwLDGKB59L9lDrDX8PYCRj1OkqXX7QEdcyEz7mrFq402BAputToR9SXM5e0tPNeMsnH3GR7fdUkhQD67RSVlyICdpsVH2zIXag7S5VPuE7uqVjaB0XDVIApi1u5hx43oYefq6vGl3b8GFL5ZW4j2njwziaHpudbp2qeRarvc9l8MaiR9wsyGkFsI9EEGtm1pqVh9tCUuVQl8mMNalRxlF3P86xB%2FsgSIvY9IDzmRviZbP2NKAH4JDFYgs6PPkc6aPVYiZ6Q2iu%2BUYuQcUkQjmnEO%2FC5ZHN12RcM80FzCt6nNiy6GJMlJ01gfv00UGbGibKctFaDM3r4BMILe8sIGOqUBFcvUADYAnDN9sb4BZwlEdFws2CeiGEUEqrXHl276ZXHD2ktylTkwqCDItBWXzK8kdqs%2FhnLDvwJkLG20NewKqG6ox%2B%2FoxhrLs80jWhPVDYkoZhMCbL4jv0VQoRyfp%2Fl5NQuO9lC0Nc8%2FwlMY2PDmgzbhHGWWTAYkehTpn%2Fidr%2F2%2BdpUxmaQYEiyVPEPQi2wMWxB79f4mGwRJHZhVR%2B5tvNJC0OzZ&X-Amz-Signature=1e0681629550bbb8ac96af891c06e268f2a575a6e9847a7f74277ec4eecac274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
