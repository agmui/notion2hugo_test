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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWXVODQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD1DCw%2BLZCnPOv9ZDaNsXziHTgiPQD1VPW1%2Fj4Xi43DrgIgHKaHysF3FYpMOdyJP8UrsDiz91z8SkGWwgH7LnojZfgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDExXR59gJU1WljAavircAzsmjQi8QbjJiJteNsEss7XuZnbw367BUJPI6dtoW9mK54PYbeKkmQNZFdkVJAGxwLQu997YdE40kJdfe2MamzNuGMr1ohdtXtwX4GMwoxtOQoVV%2BKGoPU48iXgpxy3sfdX%2BH1z9QygmBtlRxcB7h3x18nPpCKN4Uez6FuKBGel0LL7gKSXPIE1lWIJ4HZjjWFZbvl%2BDMUXFnVoARHtYg61isWXbZrmaeSdUZVt7Ded9a%2BMscWQbpUfE3Kn1Hy5Kn%2BvnuBExVUGoU2w3o8yhYDWePj%2BXQsJyFLcnyP60D0I1lHdNYBbJwZScCUyfKXBS2v%2Bcu90yY3gZY5IBcBgGzisv%2Fvcv612UXn0v4r1wlmpS6VP2v1BZXlnunQiEDYJdQEMoVmHjn5dOk3q3V8npmO6M48yN6YBCGZZyOZm41oqxJDy9%2FOnCfVpMNuGTMx4O8daIl8UngjbHJBb%2FlRKm3MKfONUrqInWbt1LDr1pbErqd0dgMSf66kOzyVDXwUByxuJ9xUPkFh%2FV9yTQh1DuZlMoLw91W6Bh75k26X45zKaxhRV%2BLtLhXBPpB%2Buwj1JYeSZsjYiN0Omw78olHA1tI07TGiFj%2FDBm4WUqGVcxOWB7x5wieTZ%2FPjMgyYw8MNnoysEGOqUB1i6ijU128SvgUw9O9Eom9C%2BpHKBsnaDyGRKdnrs1lRxsheTFljp2sYlMYtj9ubkAH9%2FyEDQmS0K6FJxGOikGtLXWnc%2FimSfLbXbQ1iszHmPPdci05VLRhQ3PHniK3ilaysYg25MTWxftqiZbl6lk8g5tuLknQOFpXWIMQI9Orf2fHXrG80EXC2WqFdBiVqzSyxHaSsjoAyKPn22rYIBcu4%2BUgmAD&X-Amz-Signature=7b2bea4c42eb596f60a8a1bb0031e213267542b2feba114ae0244bea3c199d2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWXVODQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD1DCw%2BLZCnPOv9ZDaNsXziHTgiPQD1VPW1%2Fj4Xi43DrgIgHKaHysF3FYpMOdyJP8UrsDiz91z8SkGWwgH7LnojZfgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDExXR59gJU1WljAavircAzsmjQi8QbjJiJteNsEss7XuZnbw367BUJPI6dtoW9mK54PYbeKkmQNZFdkVJAGxwLQu997YdE40kJdfe2MamzNuGMr1ohdtXtwX4GMwoxtOQoVV%2BKGoPU48iXgpxy3sfdX%2BH1z9QygmBtlRxcB7h3x18nPpCKN4Uez6FuKBGel0LL7gKSXPIE1lWIJ4HZjjWFZbvl%2BDMUXFnVoARHtYg61isWXbZrmaeSdUZVt7Ded9a%2BMscWQbpUfE3Kn1Hy5Kn%2BvnuBExVUGoU2w3o8yhYDWePj%2BXQsJyFLcnyP60D0I1lHdNYBbJwZScCUyfKXBS2v%2Bcu90yY3gZY5IBcBgGzisv%2Fvcv612UXn0v4r1wlmpS6VP2v1BZXlnunQiEDYJdQEMoVmHjn5dOk3q3V8npmO6M48yN6YBCGZZyOZm41oqxJDy9%2FOnCfVpMNuGTMx4O8daIl8UngjbHJBb%2FlRKm3MKfONUrqInWbt1LDr1pbErqd0dgMSf66kOzyVDXwUByxuJ9xUPkFh%2FV9yTQh1DuZlMoLw91W6Bh75k26X45zKaxhRV%2BLtLhXBPpB%2Buwj1JYeSZsjYiN0Omw78olHA1tI07TGiFj%2FDBm4WUqGVcxOWB7x5wieTZ%2FPjMgyYw8MNnoysEGOqUB1i6ijU128SvgUw9O9Eom9C%2BpHKBsnaDyGRKdnrs1lRxsheTFljp2sYlMYtj9ubkAH9%2FyEDQmS0K6FJxGOikGtLXWnc%2FimSfLbXbQ1iszHmPPdci05VLRhQ3PHniK3ilaysYg25MTWxftqiZbl6lk8g5tuLknQOFpXWIMQI9Orf2fHXrG80EXC2WqFdBiVqzSyxHaSsjoAyKPn22rYIBcu4%2BUgmAD&X-Amz-Signature=c67755bbf3aaa49c075f80dbdb019a4c972bd674e707af122265925f22fe10cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWXVODQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD1DCw%2BLZCnPOv9ZDaNsXziHTgiPQD1VPW1%2Fj4Xi43DrgIgHKaHysF3FYpMOdyJP8UrsDiz91z8SkGWwgH7LnojZfgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDExXR59gJU1WljAavircAzsmjQi8QbjJiJteNsEss7XuZnbw367BUJPI6dtoW9mK54PYbeKkmQNZFdkVJAGxwLQu997YdE40kJdfe2MamzNuGMr1ohdtXtwX4GMwoxtOQoVV%2BKGoPU48iXgpxy3sfdX%2BH1z9QygmBtlRxcB7h3x18nPpCKN4Uez6FuKBGel0LL7gKSXPIE1lWIJ4HZjjWFZbvl%2BDMUXFnVoARHtYg61isWXbZrmaeSdUZVt7Ded9a%2BMscWQbpUfE3Kn1Hy5Kn%2BvnuBExVUGoU2w3o8yhYDWePj%2BXQsJyFLcnyP60D0I1lHdNYBbJwZScCUyfKXBS2v%2Bcu90yY3gZY5IBcBgGzisv%2Fvcv612UXn0v4r1wlmpS6VP2v1BZXlnunQiEDYJdQEMoVmHjn5dOk3q3V8npmO6M48yN6YBCGZZyOZm41oqxJDy9%2FOnCfVpMNuGTMx4O8daIl8UngjbHJBb%2FlRKm3MKfONUrqInWbt1LDr1pbErqd0dgMSf66kOzyVDXwUByxuJ9xUPkFh%2FV9yTQh1DuZlMoLw91W6Bh75k26X45zKaxhRV%2BLtLhXBPpB%2Buwj1JYeSZsjYiN0Omw78olHA1tI07TGiFj%2FDBm4WUqGVcxOWB7x5wieTZ%2FPjMgyYw8MNnoysEGOqUB1i6ijU128SvgUw9O9Eom9C%2BpHKBsnaDyGRKdnrs1lRxsheTFljp2sYlMYtj9ubkAH9%2FyEDQmS0K6FJxGOikGtLXWnc%2FimSfLbXbQ1iszHmPPdci05VLRhQ3PHniK3ilaysYg25MTWxftqiZbl6lk8g5tuLknQOFpXWIMQI9Orf2fHXrG80EXC2WqFdBiVqzSyxHaSsjoAyKPn22rYIBcu4%2BUgmAD&X-Amz-Signature=4abeec340720a434f3bd8651dfcbb4d309bcbdb543738f07f24261ef680954c3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWXVODQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD1DCw%2BLZCnPOv9ZDaNsXziHTgiPQD1VPW1%2Fj4Xi43DrgIgHKaHysF3FYpMOdyJP8UrsDiz91z8SkGWwgH7LnojZfgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDExXR59gJU1WljAavircAzsmjQi8QbjJiJteNsEss7XuZnbw367BUJPI6dtoW9mK54PYbeKkmQNZFdkVJAGxwLQu997YdE40kJdfe2MamzNuGMr1ohdtXtwX4GMwoxtOQoVV%2BKGoPU48iXgpxy3sfdX%2BH1z9QygmBtlRxcB7h3x18nPpCKN4Uez6FuKBGel0LL7gKSXPIE1lWIJ4HZjjWFZbvl%2BDMUXFnVoARHtYg61isWXbZrmaeSdUZVt7Ded9a%2BMscWQbpUfE3Kn1Hy5Kn%2BvnuBExVUGoU2w3o8yhYDWePj%2BXQsJyFLcnyP60D0I1lHdNYBbJwZScCUyfKXBS2v%2Bcu90yY3gZY5IBcBgGzisv%2Fvcv612UXn0v4r1wlmpS6VP2v1BZXlnunQiEDYJdQEMoVmHjn5dOk3q3V8npmO6M48yN6YBCGZZyOZm41oqxJDy9%2FOnCfVpMNuGTMx4O8daIl8UngjbHJBb%2FlRKm3MKfONUrqInWbt1LDr1pbErqd0dgMSf66kOzyVDXwUByxuJ9xUPkFh%2FV9yTQh1DuZlMoLw91W6Bh75k26X45zKaxhRV%2BLtLhXBPpB%2Buwj1JYeSZsjYiN0Omw78olHA1tI07TGiFj%2FDBm4WUqGVcxOWB7x5wieTZ%2FPjMgyYw8MNnoysEGOqUB1i6ijU128SvgUw9O9Eom9C%2BpHKBsnaDyGRKdnrs1lRxsheTFljp2sYlMYtj9ubkAH9%2FyEDQmS0K6FJxGOikGtLXWnc%2FimSfLbXbQ1iszHmPPdci05VLRhQ3PHniK3ilaysYg25MTWxftqiZbl6lk8g5tuLknQOFpXWIMQI9Orf2fHXrG80EXC2WqFdBiVqzSyxHaSsjoAyKPn22rYIBcu4%2BUgmAD&X-Amz-Signature=272c49af0515a71fb0ce3d0e26e5b45ede602837c57bd643e9ba47cc99eba3db&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWXVODQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD1DCw%2BLZCnPOv9ZDaNsXziHTgiPQD1VPW1%2Fj4Xi43DrgIgHKaHysF3FYpMOdyJP8UrsDiz91z8SkGWwgH7LnojZfgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDExXR59gJU1WljAavircAzsmjQi8QbjJiJteNsEss7XuZnbw367BUJPI6dtoW9mK54PYbeKkmQNZFdkVJAGxwLQu997YdE40kJdfe2MamzNuGMr1ohdtXtwX4GMwoxtOQoVV%2BKGoPU48iXgpxy3sfdX%2BH1z9QygmBtlRxcB7h3x18nPpCKN4Uez6FuKBGel0LL7gKSXPIE1lWIJ4HZjjWFZbvl%2BDMUXFnVoARHtYg61isWXbZrmaeSdUZVt7Ded9a%2BMscWQbpUfE3Kn1Hy5Kn%2BvnuBExVUGoU2w3o8yhYDWePj%2BXQsJyFLcnyP60D0I1lHdNYBbJwZScCUyfKXBS2v%2Bcu90yY3gZY5IBcBgGzisv%2Fvcv612UXn0v4r1wlmpS6VP2v1BZXlnunQiEDYJdQEMoVmHjn5dOk3q3V8npmO6M48yN6YBCGZZyOZm41oqxJDy9%2FOnCfVpMNuGTMx4O8daIl8UngjbHJBb%2FlRKm3MKfONUrqInWbt1LDr1pbErqd0dgMSf66kOzyVDXwUByxuJ9xUPkFh%2FV9yTQh1DuZlMoLw91W6Bh75k26X45zKaxhRV%2BLtLhXBPpB%2Buwj1JYeSZsjYiN0Omw78olHA1tI07TGiFj%2FDBm4WUqGVcxOWB7x5wieTZ%2FPjMgyYw8MNnoysEGOqUB1i6ijU128SvgUw9O9Eom9C%2BpHKBsnaDyGRKdnrs1lRxsheTFljp2sYlMYtj9ubkAH9%2FyEDQmS0K6FJxGOikGtLXWnc%2FimSfLbXbQ1iszHmPPdci05VLRhQ3PHniK3ilaysYg25MTWxftqiZbl6lk8g5tuLknQOFpXWIMQI9Orf2fHXrG80EXC2WqFdBiVqzSyxHaSsjoAyKPn22rYIBcu4%2BUgmAD&X-Amz-Signature=991aa4affff289f778ef723942319c972264d5d4de3c0f736d8983a22c9782fd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWXVODQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD1DCw%2BLZCnPOv9ZDaNsXziHTgiPQD1VPW1%2Fj4Xi43DrgIgHKaHysF3FYpMOdyJP8UrsDiz91z8SkGWwgH7LnojZfgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDExXR59gJU1WljAavircAzsmjQi8QbjJiJteNsEss7XuZnbw367BUJPI6dtoW9mK54PYbeKkmQNZFdkVJAGxwLQu997YdE40kJdfe2MamzNuGMr1ohdtXtwX4GMwoxtOQoVV%2BKGoPU48iXgpxy3sfdX%2BH1z9QygmBtlRxcB7h3x18nPpCKN4Uez6FuKBGel0LL7gKSXPIE1lWIJ4HZjjWFZbvl%2BDMUXFnVoARHtYg61isWXbZrmaeSdUZVt7Ded9a%2BMscWQbpUfE3Kn1Hy5Kn%2BvnuBExVUGoU2w3o8yhYDWePj%2BXQsJyFLcnyP60D0I1lHdNYBbJwZScCUyfKXBS2v%2Bcu90yY3gZY5IBcBgGzisv%2Fvcv612UXn0v4r1wlmpS6VP2v1BZXlnunQiEDYJdQEMoVmHjn5dOk3q3V8npmO6M48yN6YBCGZZyOZm41oqxJDy9%2FOnCfVpMNuGTMx4O8daIl8UngjbHJBb%2FlRKm3MKfONUrqInWbt1LDr1pbErqd0dgMSf66kOzyVDXwUByxuJ9xUPkFh%2FV9yTQh1DuZlMoLw91W6Bh75k26X45zKaxhRV%2BLtLhXBPpB%2Buwj1JYeSZsjYiN0Omw78olHA1tI07TGiFj%2FDBm4WUqGVcxOWB7x5wieTZ%2FPjMgyYw8MNnoysEGOqUB1i6ijU128SvgUw9O9Eom9C%2BpHKBsnaDyGRKdnrs1lRxsheTFljp2sYlMYtj9ubkAH9%2FyEDQmS0K6FJxGOikGtLXWnc%2FimSfLbXbQ1iszHmPPdci05VLRhQ3PHniK3ilaysYg25MTWxftqiZbl6lk8g5tuLknQOFpXWIMQI9Orf2fHXrG80EXC2WqFdBiVqzSyxHaSsjoAyKPn22rYIBcu4%2BUgmAD&X-Amz-Signature=7571ba9ff73395e63e9da5d9c6032cd3582f0a22a129ce7b2d5450dfb2a55d9e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWXVODQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD1DCw%2BLZCnPOv9ZDaNsXziHTgiPQD1VPW1%2Fj4Xi43DrgIgHKaHysF3FYpMOdyJP8UrsDiz91z8SkGWwgH7LnojZfgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDExXR59gJU1WljAavircAzsmjQi8QbjJiJteNsEss7XuZnbw367BUJPI6dtoW9mK54PYbeKkmQNZFdkVJAGxwLQu997YdE40kJdfe2MamzNuGMr1ohdtXtwX4GMwoxtOQoVV%2BKGoPU48iXgpxy3sfdX%2BH1z9QygmBtlRxcB7h3x18nPpCKN4Uez6FuKBGel0LL7gKSXPIE1lWIJ4HZjjWFZbvl%2BDMUXFnVoARHtYg61isWXbZrmaeSdUZVt7Ded9a%2BMscWQbpUfE3Kn1Hy5Kn%2BvnuBExVUGoU2w3o8yhYDWePj%2BXQsJyFLcnyP60D0I1lHdNYBbJwZScCUyfKXBS2v%2Bcu90yY3gZY5IBcBgGzisv%2Fvcv612UXn0v4r1wlmpS6VP2v1BZXlnunQiEDYJdQEMoVmHjn5dOk3q3V8npmO6M48yN6YBCGZZyOZm41oqxJDy9%2FOnCfVpMNuGTMx4O8daIl8UngjbHJBb%2FlRKm3MKfONUrqInWbt1LDr1pbErqd0dgMSf66kOzyVDXwUByxuJ9xUPkFh%2FV9yTQh1DuZlMoLw91W6Bh75k26X45zKaxhRV%2BLtLhXBPpB%2Buwj1JYeSZsjYiN0Omw78olHA1tI07TGiFj%2FDBm4WUqGVcxOWB7x5wieTZ%2FPjMgyYw8MNnoysEGOqUB1i6ijU128SvgUw9O9Eom9C%2BpHKBsnaDyGRKdnrs1lRxsheTFljp2sYlMYtj9ubkAH9%2FyEDQmS0K6FJxGOikGtLXWnc%2FimSfLbXbQ1iszHmPPdci05VLRhQ3PHniK3ilaysYg25MTWxftqiZbl6lk8g5tuLknQOFpXWIMQI9Orf2fHXrG80EXC2WqFdBiVqzSyxHaSsjoAyKPn22rYIBcu4%2BUgmAD&X-Amz-Signature=0ebd028ac4588988442b5f3be5b142db6d5942a475993ff950a0d59340cd2feb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
