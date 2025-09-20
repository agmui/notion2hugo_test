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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LFW6O3B%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC0mUUroQGvs%2FM1limqCzFGR%2F4ayG7DodnY8sTaNiZjBwIgCJ%2FBzXR4GHSiHVrxV%2BMWTwucO8FivH90nnfTuhmCdwMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDHaluCLBIMwZYUlyrcA6e%2FYZQAppv%2FMqGlwElwrmV0v%2BULedd9tX3SAmKJfksEg44bjpvYw%2B339u%2FwjE%2FxB8H2P7B7gvs92dH9u5WbsNPnqy5SyQEm66HHVRRQSpPhHWS5hETszVmyVQhTvyJNGS7kL%2FPUfGnnTzHCzRaFHFzPGTli%2FLSmqA4DZCPDLQ0QBk5iDrSNc6o9oX7xWjuUGsn0BerLGOEmXoALK%2FjQdMQvYCmgc2jQ9tEiFEVxcX8hINOvau%2BZTh3tEkbBE0L9DAGHFnbzx%2F%2FoUb8bwmxSNui151t%2BM2LVWADlapBRkwRDD3MjfV5NVCi8lAH6zbkPx9lbfNKqW%2F6Uz3JpN%2Bdt7E3jP4oACfgf%2FNOH8TcyiBfxn4%2FrzPVTYaAZow8EaIZWfBGAoauUaSm3SwkQMHNQLYUJOp4YUjwTBXzBH8WQOJHpvvqfjs80HkXZFVG2ySnB9RBHzzdM4D24I%2FpDL37%2FULJDQfbKoiT1nXSAZQ%2FKRLcBe4BI48OMd3Nl%2F4eNx%2FqxeMipm90AsUbRKVfEIpQZeqh20HmO3qOtVlmjl20ohA%2B7aRSYbZ2BH5Qe8bg1a6IzZc6glSsDdjIb%2Fplo4xPJuLEk4SQPwwhSeiMsVu%2FPsiI6oS1tAgbYwCirS6mYMOj%2Ft8YGOqUBi4vqiHS1UauJPo3JzKxAGDDdec3prxdxPFo1QJOKYU1n8ij4ctNQ8BOM1Jqbv175ULjZbqTMumPUtzJ2XnPxczMfEKJoy%2B5L8PNidf02GhgNPdCodZJvKqj8hBJ7wqN2d917TGu%2B0GVjOIKMFCkEeYUriwAupjQ4KIzq%2Bc%2BMl2R4h7KtR44laK%2BvOBl%2Ft3cyBQOvydfqR%2B3Ghn1jDraJ81yyvPQH&X-Amz-Signature=19b7c3bbd1db14db96b757ee1502e55e08ffb41b984d3ba23721b03558f67bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LFW6O3B%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC0mUUroQGvs%2FM1limqCzFGR%2F4ayG7DodnY8sTaNiZjBwIgCJ%2FBzXR4GHSiHVrxV%2BMWTwucO8FivH90nnfTuhmCdwMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDHaluCLBIMwZYUlyrcA6e%2FYZQAppv%2FMqGlwElwrmV0v%2BULedd9tX3SAmKJfksEg44bjpvYw%2B339u%2FwjE%2FxB8H2P7B7gvs92dH9u5WbsNPnqy5SyQEm66HHVRRQSpPhHWS5hETszVmyVQhTvyJNGS7kL%2FPUfGnnTzHCzRaFHFzPGTli%2FLSmqA4DZCPDLQ0QBk5iDrSNc6o9oX7xWjuUGsn0BerLGOEmXoALK%2FjQdMQvYCmgc2jQ9tEiFEVxcX8hINOvau%2BZTh3tEkbBE0L9DAGHFnbzx%2F%2FoUb8bwmxSNui151t%2BM2LVWADlapBRkwRDD3MjfV5NVCi8lAH6zbkPx9lbfNKqW%2F6Uz3JpN%2Bdt7E3jP4oACfgf%2FNOH8TcyiBfxn4%2FrzPVTYaAZow8EaIZWfBGAoauUaSm3SwkQMHNQLYUJOp4YUjwTBXzBH8WQOJHpvvqfjs80HkXZFVG2ySnB9RBHzzdM4D24I%2FpDL37%2FULJDQfbKoiT1nXSAZQ%2FKRLcBe4BI48OMd3Nl%2F4eNx%2FqxeMipm90AsUbRKVfEIpQZeqh20HmO3qOtVlmjl20ohA%2B7aRSYbZ2BH5Qe8bg1a6IzZc6glSsDdjIb%2Fplo4xPJuLEk4SQPwwhSeiMsVu%2FPsiI6oS1tAgbYwCirS6mYMOj%2Ft8YGOqUBi4vqiHS1UauJPo3JzKxAGDDdec3prxdxPFo1QJOKYU1n8ij4ctNQ8BOM1Jqbv175ULjZbqTMumPUtzJ2XnPxczMfEKJoy%2B5L8PNidf02GhgNPdCodZJvKqj8hBJ7wqN2d917TGu%2B0GVjOIKMFCkEeYUriwAupjQ4KIzq%2Bc%2BMl2R4h7KtR44laK%2BvOBl%2Ft3cyBQOvydfqR%2B3Ghn1jDraJ81yyvPQH&X-Amz-Signature=98f5d3125cf0c3c2a72ca5fc9374adc3da6bf2a523c2ec554de4e86d036859bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LFW6O3B%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC0mUUroQGvs%2FM1limqCzFGR%2F4ayG7DodnY8sTaNiZjBwIgCJ%2FBzXR4GHSiHVrxV%2BMWTwucO8FivH90nnfTuhmCdwMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDHaluCLBIMwZYUlyrcA6e%2FYZQAppv%2FMqGlwElwrmV0v%2BULedd9tX3SAmKJfksEg44bjpvYw%2B339u%2FwjE%2FxB8H2P7B7gvs92dH9u5WbsNPnqy5SyQEm66HHVRRQSpPhHWS5hETszVmyVQhTvyJNGS7kL%2FPUfGnnTzHCzRaFHFzPGTli%2FLSmqA4DZCPDLQ0QBk5iDrSNc6o9oX7xWjuUGsn0BerLGOEmXoALK%2FjQdMQvYCmgc2jQ9tEiFEVxcX8hINOvau%2BZTh3tEkbBE0L9DAGHFnbzx%2F%2FoUb8bwmxSNui151t%2BM2LVWADlapBRkwRDD3MjfV5NVCi8lAH6zbkPx9lbfNKqW%2F6Uz3JpN%2Bdt7E3jP4oACfgf%2FNOH8TcyiBfxn4%2FrzPVTYaAZow8EaIZWfBGAoauUaSm3SwkQMHNQLYUJOp4YUjwTBXzBH8WQOJHpvvqfjs80HkXZFVG2ySnB9RBHzzdM4D24I%2FpDL37%2FULJDQfbKoiT1nXSAZQ%2FKRLcBe4BI48OMd3Nl%2F4eNx%2FqxeMipm90AsUbRKVfEIpQZeqh20HmO3qOtVlmjl20ohA%2B7aRSYbZ2BH5Qe8bg1a6IzZc6glSsDdjIb%2Fplo4xPJuLEk4SQPwwhSeiMsVu%2FPsiI6oS1tAgbYwCirS6mYMOj%2Ft8YGOqUBi4vqiHS1UauJPo3JzKxAGDDdec3prxdxPFo1QJOKYU1n8ij4ctNQ8BOM1Jqbv175ULjZbqTMumPUtzJ2XnPxczMfEKJoy%2B5L8PNidf02GhgNPdCodZJvKqj8hBJ7wqN2d917TGu%2B0GVjOIKMFCkEeYUriwAupjQ4KIzq%2Bc%2BMl2R4h7KtR44laK%2BvOBl%2Ft3cyBQOvydfqR%2B3Ghn1jDraJ81yyvPQH&X-Amz-Signature=dad380a3077506a5c40f43143a941b4377db1466994496cdcd87cb10cf425a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LFW6O3B%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC0mUUroQGvs%2FM1limqCzFGR%2F4ayG7DodnY8sTaNiZjBwIgCJ%2FBzXR4GHSiHVrxV%2BMWTwucO8FivH90nnfTuhmCdwMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDHaluCLBIMwZYUlyrcA6e%2FYZQAppv%2FMqGlwElwrmV0v%2BULedd9tX3SAmKJfksEg44bjpvYw%2B339u%2FwjE%2FxB8H2P7B7gvs92dH9u5WbsNPnqy5SyQEm66HHVRRQSpPhHWS5hETszVmyVQhTvyJNGS7kL%2FPUfGnnTzHCzRaFHFzPGTli%2FLSmqA4DZCPDLQ0QBk5iDrSNc6o9oX7xWjuUGsn0BerLGOEmXoALK%2FjQdMQvYCmgc2jQ9tEiFEVxcX8hINOvau%2BZTh3tEkbBE0L9DAGHFnbzx%2F%2FoUb8bwmxSNui151t%2BM2LVWADlapBRkwRDD3MjfV5NVCi8lAH6zbkPx9lbfNKqW%2F6Uz3JpN%2Bdt7E3jP4oACfgf%2FNOH8TcyiBfxn4%2FrzPVTYaAZow8EaIZWfBGAoauUaSm3SwkQMHNQLYUJOp4YUjwTBXzBH8WQOJHpvvqfjs80HkXZFVG2ySnB9RBHzzdM4D24I%2FpDL37%2FULJDQfbKoiT1nXSAZQ%2FKRLcBe4BI48OMd3Nl%2F4eNx%2FqxeMipm90AsUbRKVfEIpQZeqh20HmO3qOtVlmjl20ohA%2B7aRSYbZ2BH5Qe8bg1a6IzZc6glSsDdjIb%2Fplo4xPJuLEk4SQPwwhSeiMsVu%2FPsiI6oS1tAgbYwCirS6mYMOj%2Ft8YGOqUBi4vqiHS1UauJPo3JzKxAGDDdec3prxdxPFo1QJOKYU1n8ij4ctNQ8BOM1Jqbv175ULjZbqTMumPUtzJ2XnPxczMfEKJoy%2B5L8PNidf02GhgNPdCodZJvKqj8hBJ7wqN2d917TGu%2B0GVjOIKMFCkEeYUriwAupjQ4KIzq%2Bc%2BMl2R4h7KtR44laK%2BvOBl%2Ft3cyBQOvydfqR%2B3Ghn1jDraJ81yyvPQH&X-Amz-Signature=6a7fa53e07545041c3cab386cf55e4bcfaad40028b5d706e50561d34f25b8dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LFW6O3B%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC0mUUroQGvs%2FM1limqCzFGR%2F4ayG7DodnY8sTaNiZjBwIgCJ%2FBzXR4GHSiHVrxV%2BMWTwucO8FivH90nnfTuhmCdwMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDHaluCLBIMwZYUlyrcA6e%2FYZQAppv%2FMqGlwElwrmV0v%2BULedd9tX3SAmKJfksEg44bjpvYw%2B339u%2FwjE%2FxB8H2P7B7gvs92dH9u5WbsNPnqy5SyQEm66HHVRRQSpPhHWS5hETszVmyVQhTvyJNGS7kL%2FPUfGnnTzHCzRaFHFzPGTli%2FLSmqA4DZCPDLQ0QBk5iDrSNc6o9oX7xWjuUGsn0BerLGOEmXoALK%2FjQdMQvYCmgc2jQ9tEiFEVxcX8hINOvau%2BZTh3tEkbBE0L9DAGHFnbzx%2F%2FoUb8bwmxSNui151t%2BM2LVWADlapBRkwRDD3MjfV5NVCi8lAH6zbkPx9lbfNKqW%2F6Uz3JpN%2Bdt7E3jP4oACfgf%2FNOH8TcyiBfxn4%2FrzPVTYaAZow8EaIZWfBGAoauUaSm3SwkQMHNQLYUJOp4YUjwTBXzBH8WQOJHpvvqfjs80HkXZFVG2ySnB9RBHzzdM4D24I%2FpDL37%2FULJDQfbKoiT1nXSAZQ%2FKRLcBe4BI48OMd3Nl%2F4eNx%2FqxeMipm90AsUbRKVfEIpQZeqh20HmO3qOtVlmjl20ohA%2B7aRSYbZ2BH5Qe8bg1a6IzZc6glSsDdjIb%2Fplo4xPJuLEk4SQPwwhSeiMsVu%2FPsiI6oS1tAgbYwCirS6mYMOj%2Ft8YGOqUBi4vqiHS1UauJPo3JzKxAGDDdec3prxdxPFo1QJOKYU1n8ij4ctNQ8BOM1Jqbv175ULjZbqTMumPUtzJ2XnPxczMfEKJoy%2B5L8PNidf02GhgNPdCodZJvKqj8hBJ7wqN2d917TGu%2B0GVjOIKMFCkEeYUriwAupjQ4KIzq%2Bc%2BMl2R4h7KtR44laK%2BvOBl%2Ft3cyBQOvydfqR%2B3Ghn1jDraJ81yyvPQH&X-Amz-Signature=26aa278f3b174367670746c7542acf87841a8591da58c22052c72f6a395ecb58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LFW6O3B%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC0mUUroQGvs%2FM1limqCzFGR%2F4ayG7DodnY8sTaNiZjBwIgCJ%2FBzXR4GHSiHVrxV%2BMWTwucO8FivH90nnfTuhmCdwMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDHaluCLBIMwZYUlyrcA6e%2FYZQAppv%2FMqGlwElwrmV0v%2BULedd9tX3SAmKJfksEg44bjpvYw%2B339u%2FwjE%2FxB8H2P7B7gvs92dH9u5WbsNPnqy5SyQEm66HHVRRQSpPhHWS5hETszVmyVQhTvyJNGS7kL%2FPUfGnnTzHCzRaFHFzPGTli%2FLSmqA4DZCPDLQ0QBk5iDrSNc6o9oX7xWjuUGsn0BerLGOEmXoALK%2FjQdMQvYCmgc2jQ9tEiFEVxcX8hINOvau%2BZTh3tEkbBE0L9DAGHFnbzx%2F%2FoUb8bwmxSNui151t%2BM2LVWADlapBRkwRDD3MjfV5NVCi8lAH6zbkPx9lbfNKqW%2F6Uz3JpN%2Bdt7E3jP4oACfgf%2FNOH8TcyiBfxn4%2FrzPVTYaAZow8EaIZWfBGAoauUaSm3SwkQMHNQLYUJOp4YUjwTBXzBH8WQOJHpvvqfjs80HkXZFVG2ySnB9RBHzzdM4D24I%2FpDL37%2FULJDQfbKoiT1nXSAZQ%2FKRLcBe4BI48OMd3Nl%2F4eNx%2FqxeMipm90AsUbRKVfEIpQZeqh20HmO3qOtVlmjl20ohA%2B7aRSYbZ2BH5Qe8bg1a6IzZc6glSsDdjIb%2Fplo4xPJuLEk4SQPwwhSeiMsVu%2FPsiI6oS1tAgbYwCirS6mYMOj%2Ft8YGOqUBi4vqiHS1UauJPo3JzKxAGDDdec3prxdxPFo1QJOKYU1n8ij4ctNQ8BOM1Jqbv175ULjZbqTMumPUtzJ2XnPxczMfEKJoy%2B5L8PNidf02GhgNPdCodZJvKqj8hBJ7wqN2d917TGu%2B0GVjOIKMFCkEeYUriwAupjQ4KIzq%2Bc%2BMl2R4h7KtR44laK%2BvOBl%2Ft3cyBQOvydfqR%2B3Ghn1jDraJ81yyvPQH&X-Amz-Signature=46c93e7bfc4b0334ebbf93fec88d69490f1c1444b4ce181c7805368f791706cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LFW6O3B%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC0mUUroQGvs%2FM1limqCzFGR%2F4ayG7DodnY8sTaNiZjBwIgCJ%2FBzXR4GHSiHVrxV%2BMWTwucO8FivH90nnfTuhmCdwMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDHaluCLBIMwZYUlyrcA6e%2FYZQAppv%2FMqGlwElwrmV0v%2BULedd9tX3SAmKJfksEg44bjpvYw%2B339u%2FwjE%2FxB8H2P7B7gvs92dH9u5WbsNPnqy5SyQEm66HHVRRQSpPhHWS5hETszVmyVQhTvyJNGS7kL%2FPUfGnnTzHCzRaFHFzPGTli%2FLSmqA4DZCPDLQ0QBk5iDrSNc6o9oX7xWjuUGsn0BerLGOEmXoALK%2FjQdMQvYCmgc2jQ9tEiFEVxcX8hINOvau%2BZTh3tEkbBE0L9DAGHFnbzx%2F%2FoUb8bwmxSNui151t%2BM2LVWADlapBRkwRDD3MjfV5NVCi8lAH6zbkPx9lbfNKqW%2F6Uz3JpN%2Bdt7E3jP4oACfgf%2FNOH8TcyiBfxn4%2FrzPVTYaAZow8EaIZWfBGAoauUaSm3SwkQMHNQLYUJOp4YUjwTBXzBH8WQOJHpvvqfjs80HkXZFVG2ySnB9RBHzzdM4D24I%2FpDL37%2FULJDQfbKoiT1nXSAZQ%2FKRLcBe4BI48OMd3Nl%2F4eNx%2FqxeMipm90AsUbRKVfEIpQZeqh20HmO3qOtVlmjl20ohA%2B7aRSYbZ2BH5Qe8bg1a6IzZc6glSsDdjIb%2Fplo4xPJuLEk4SQPwwhSeiMsVu%2FPsiI6oS1tAgbYwCirS6mYMOj%2Ft8YGOqUBi4vqiHS1UauJPo3JzKxAGDDdec3prxdxPFo1QJOKYU1n8ij4ctNQ8BOM1Jqbv175ULjZbqTMumPUtzJ2XnPxczMfEKJoy%2B5L8PNidf02GhgNPdCodZJvKqj8hBJ7wqN2d917TGu%2B0GVjOIKMFCkEeYUriwAupjQ4KIzq%2Bc%2BMl2R4h7KtR44laK%2BvOBl%2Ft3cyBQOvydfqR%2B3Ghn1jDraJ81yyvPQH&X-Amz-Signature=d60c85110e98ae966cbef205b0beb97e63164f7b60f8092096845d02b135561a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
