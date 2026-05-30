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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZTH7AF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGVRlEGCryxd2rvd6GsFgl8tuSG6%2FlToEyWQubBnkbI6AiEA4bv6IGnz15mTfKPIiTGhGg%2FCZRWMN8uAUxmH%2Fc6GXhMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjYs7qbDf0kggQ6sSrcAzBq4qa7s1uDfKWElGtlsMATFtf%2F3DMSvDbsIIhM3TYtbSxyW49FD0Q5czXNG8b79rTdoQXZvTYEbwTydlVBuOvYF8GSbL4aqzRI%2FV7Jkn2femUkNPW5pA%2Fvlv0YGHzsx9B3Quenyb9VWghBWMQdcSmbHEWUZzV6rDxPZTpa%2BnX%2B%2FU7RlVaevLPZWubwA9IMozSaZaeLYRLbhPAME4tXWLQJUtIN5AgcSvWrrET2xksNwhw6D6VCN5hd3ja5rYoldpGM8vft2V9hkmLju04XUzv1nn2BK5FvhBwa75kj3zEBWd%2FxBjL3HxfXmCCnst9wG5crGx2NLx7jPUsHJy4shjg%2FejY3nHvGpon9tfX5jUELUqfYjqq%2F%2BcEe5R9lZp0rwWRtg4Y%2FJegRDZbJ2K2gb7Ny0lb5dI0WpLkVZbYCKQHQuCJOSm3UmXGMVKX92j6OOb1wUlQgD%2FYEokz%2FYJuEgs5wUQe8IlVhYFSzv0nr7F8nG9Q0QMA7eHDPC31Xr4SGEfzWynMmlaKgIdGJJ0ttlDEYGkWimEYxi0B9fcLoThwzDwMaDaBilHEKBxNGBXuj71VD%2BErNjemcCC%2Bn01n2zdT6wrQ5NEcxPeiOV9Luut3YN1GynXdH%2Fi%2FAdfiIMOel6dAGOqUBMH6v11W1aylb9x4986eU8Q%2FF74z6wrk%2BB8v8FQfxbh5Is6w8WiQtMzvHmFayytux%2FVadE5iE6sgwb5buDyR17qjHPi9pn4S%2FjWF7gBeIV1UAqYgfa2NjXeEqNxAK4z2IlV7BFbjpfhpv00eJ46oSvkHkayy0DIknEoyqE1WsUoBEiFff0b1pkWEXAB2QXgp7wsXdlDZwEl7HPf8yFOv7zz0zndec&X-Amz-Signature=ed5076b9d8b78e6c1c660e88479e9714388985cf77040cff93b8db690ce2d411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZTH7AF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGVRlEGCryxd2rvd6GsFgl8tuSG6%2FlToEyWQubBnkbI6AiEA4bv6IGnz15mTfKPIiTGhGg%2FCZRWMN8uAUxmH%2Fc6GXhMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjYs7qbDf0kggQ6sSrcAzBq4qa7s1uDfKWElGtlsMATFtf%2F3DMSvDbsIIhM3TYtbSxyW49FD0Q5czXNG8b79rTdoQXZvTYEbwTydlVBuOvYF8GSbL4aqzRI%2FV7Jkn2femUkNPW5pA%2Fvlv0YGHzsx9B3Quenyb9VWghBWMQdcSmbHEWUZzV6rDxPZTpa%2BnX%2B%2FU7RlVaevLPZWubwA9IMozSaZaeLYRLbhPAME4tXWLQJUtIN5AgcSvWrrET2xksNwhw6D6VCN5hd3ja5rYoldpGM8vft2V9hkmLju04XUzv1nn2BK5FvhBwa75kj3zEBWd%2FxBjL3HxfXmCCnst9wG5crGx2NLx7jPUsHJy4shjg%2FejY3nHvGpon9tfX5jUELUqfYjqq%2F%2BcEe5R9lZp0rwWRtg4Y%2FJegRDZbJ2K2gb7Ny0lb5dI0WpLkVZbYCKQHQuCJOSm3UmXGMVKX92j6OOb1wUlQgD%2FYEokz%2FYJuEgs5wUQe8IlVhYFSzv0nr7F8nG9Q0QMA7eHDPC31Xr4SGEfzWynMmlaKgIdGJJ0ttlDEYGkWimEYxi0B9fcLoThwzDwMaDaBilHEKBxNGBXuj71VD%2BErNjemcCC%2Bn01n2zdT6wrQ5NEcxPeiOV9Luut3YN1GynXdH%2Fi%2FAdfiIMOel6dAGOqUBMH6v11W1aylb9x4986eU8Q%2FF74z6wrk%2BB8v8FQfxbh5Is6w8WiQtMzvHmFayytux%2FVadE5iE6sgwb5buDyR17qjHPi9pn4S%2FjWF7gBeIV1UAqYgfa2NjXeEqNxAK4z2IlV7BFbjpfhpv00eJ46oSvkHkayy0DIknEoyqE1WsUoBEiFff0b1pkWEXAB2QXgp7wsXdlDZwEl7HPf8yFOv7zz0zndec&X-Amz-Signature=3f37f224379dbb4f64d8eb0ad1a7427fb54e5a74c7f8582fccb162cd517e7d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZTH7AF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGVRlEGCryxd2rvd6GsFgl8tuSG6%2FlToEyWQubBnkbI6AiEA4bv6IGnz15mTfKPIiTGhGg%2FCZRWMN8uAUxmH%2Fc6GXhMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjYs7qbDf0kggQ6sSrcAzBq4qa7s1uDfKWElGtlsMATFtf%2F3DMSvDbsIIhM3TYtbSxyW49FD0Q5czXNG8b79rTdoQXZvTYEbwTydlVBuOvYF8GSbL4aqzRI%2FV7Jkn2femUkNPW5pA%2Fvlv0YGHzsx9B3Quenyb9VWghBWMQdcSmbHEWUZzV6rDxPZTpa%2BnX%2B%2FU7RlVaevLPZWubwA9IMozSaZaeLYRLbhPAME4tXWLQJUtIN5AgcSvWrrET2xksNwhw6D6VCN5hd3ja5rYoldpGM8vft2V9hkmLju04XUzv1nn2BK5FvhBwa75kj3zEBWd%2FxBjL3HxfXmCCnst9wG5crGx2NLx7jPUsHJy4shjg%2FejY3nHvGpon9tfX5jUELUqfYjqq%2F%2BcEe5R9lZp0rwWRtg4Y%2FJegRDZbJ2K2gb7Ny0lb5dI0WpLkVZbYCKQHQuCJOSm3UmXGMVKX92j6OOb1wUlQgD%2FYEokz%2FYJuEgs5wUQe8IlVhYFSzv0nr7F8nG9Q0QMA7eHDPC31Xr4SGEfzWynMmlaKgIdGJJ0ttlDEYGkWimEYxi0B9fcLoThwzDwMaDaBilHEKBxNGBXuj71VD%2BErNjemcCC%2Bn01n2zdT6wrQ5NEcxPeiOV9Luut3YN1GynXdH%2Fi%2FAdfiIMOel6dAGOqUBMH6v11W1aylb9x4986eU8Q%2FF74z6wrk%2BB8v8FQfxbh5Is6w8WiQtMzvHmFayytux%2FVadE5iE6sgwb5buDyR17qjHPi9pn4S%2FjWF7gBeIV1UAqYgfa2NjXeEqNxAK4z2IlV7BFbjpfhpv00eJ46oSvkHkayy0DIknEoyqE1WsUoBEiFff0b1pkWEXAB2QXgp7wsXdlDZwEl7HPf8yFOv7zz0zndec&X-Amz-Signature=5c40f39f5412b3413e9a944156b338905e9ae0fb3ad1ced6cd46967479160cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZTH7AF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGVRlEGCryxd2rvd6GsFgl8tuSG6%2FlToEyWQubBnkbI6AiEA4bv6IGnz15mTfKPIiTGhGg%2FCZRWMN8uAUxmH%2Fc6GXhMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjYs7qbDf0kggQ6sSrcAzBq4qa7s1uDfKWElGtlsMATFtf%2F3DMSvDbsIIhM3TYtbSxyW49FD0Q5czXNG8b79rTdoQXZvTYEbwTydlVBuOvYF8GSbL4aqzRI%2FV7Jkn2femUkNPW5pA%2Fvlv0YGHzsx9B3Quenyb9VWghBWMQdcSmbHEWUZzV6rDxPZTpa%2BnX%2B%2FU7RlVaevLPZWubwA9IMozSaZaeLYRLbhPAME4tXWLQJUtIN5AgcSvWrrET2xksNwhw6D6VCN5hd3ja5rYoldpGM8vft2V9hkmLju04XUzv1nn2BK5FvhBwa75kj3zEBWd%2FxBjL3HxfXmCCnst9wG5crGx2NLx7jPUsHJy4shjg%2FejY3nHvGpon9tfX5jUELUqfYjqq%2F%2BcEe5R9lZp0rwWRtg4Y%2FJegRDZbJ2K2gb7Ny0lb5dI0WpLkVZbYCKQHQuCJOSm3UmXGMVKX92j6OOb1wUlQgD%2FYEokz%2FYJuEgs5wUQe8IlVhYFSzv0nr7F8nG9Q0QMA7eHDPC31Xr4SGEfzWynMmlaKgIdGJJ0ttlDEYGkWimEYxi0B9fcLoThwzDwMaDaBilHEKBxNGBXuj71VD%2BErNjemcCC%2Bn01n2zdT6wrQ5NEcxPeiOV9Luut3YN1GynXdH%2Fi%2FAdfiIMOel6dAGOqUBMH6v11W1aylb9x4986eU8Q%2FF74z6wrk%2BB8v8FQfxbh5Is6w8WiQtMzvHmFayytux%2FVadE5iE6sgwb5buDyR17qjHPi9pn4S%2FjWF7gBeIV1UAqYgfa2NjXeEqNxAK4z2IlV7BFbjpfhpv00eJ46oSvkHkayy0DIknEoyqE1WsUoBEiFff0b1pkWEXAB2QXgp7wsXdlDZwEl7HPf8yFOv7zz0zndec&X-Amz-Signature=0d7045a3807c1bf3a3fc28f11dafd25bf93e5aa4ad4b2456f3bf1c83c3d7b39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZTH7AF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGVRlEGCryxd2rvd6GsFgl8tuSG6%2FlToEyWQubBnkbI6AiEA4bv6IGnz15mTfKPIiTGhGg%2FCZRWMN8uAUxmH%2Fc6GXhMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjYs7qbDf0kggQ6sSrcAzBq4qa7s1uDfKWElGtlsMATFtf%2F3DMSvDbsIIhM3TYtbSxyW49FD0Q5czXNG8b79rTdoQXZvTYEbwTydlVBuOvYF8GSbL4aqzRI%2FV7Jkn2femUkNPW5pA%2Fvlv0YGHzsx9B3Quenyb9VWghBWMQdcSmbHEWUZzV6rDxPZTpa%2BnX%2B%2FU7RlVaevLPZWubwA9IMozSaZaeLYRLbhPAME4tXWLQJUtIN5AgcSvWrrET2xksNwhw6D6VCN5hd3ja5rYoldpGM8vft2V9hkmLju04XUzv1nn2BK5FvhBwa75kj3zEBWd%2FxBjL3HxfXmCCnst9wG5crGx2NLx7jPUsHJy4shjg%2FejY3nHvGpon9tfX5jUELUqfYjqq%2F%2BcEe5R9lZp0rwWRtg4Y%2FJegRDZbJ2K2gb7Ny0lb5dI0WpLkVZbYCKQHQuCJOSm3UmXGMVKX92j6OOb1wUlQgD%2FYEokz%2FYJuEgs5wUQe8IlVhYFSzv0nr7F8nG9Q0QMA7eHDPC31Xr4SGEfzWynMmlaKgIdGJJ0ttlDEYGkWimEYxi0B9fcLoThwzDwMaDaBilHEKBxNGBXuj71VD%2BErNjemcCC%2Bn01n2zdT6wrQ5NEcxPeiOV9Luut3YN1GynXdH%2Fi%2FAdfiIMOel6dAGOqUBMH6v11W1aylb9x4986eU8Q%2FF74z6wrk%2BB8v8FQfxbh5Is6w8WiQtMzvHmFayytux%2FVadE5iE6sgwb5buDyR17qjHPi9pn4S%2FjWF7gBeIV1UAqYgfa2NjXeEqNxAK4z2IlV7BFbjpfhpv00eJ46oSvkHkayy0DIknEoyqE1WsUoBEiFff0b1pkWEXAB2QXgp7wsXdlDZwEl7HPf8yFOv7zz0zndec&X-Amz-Signature=05e6737347acfc44fb11cf8421eef6671f412ac975a280f0f3b0c8b976153ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZTH7AF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGVRlEGCryxd2rvd6GsFgl8tuSG6%2FlToEyWQubBnkbI6AiEA4bv6IGnz15mTfKPIiTGhGg%2FCZRWMN8uAUxmH%2Fc6GXhMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjYs7qbDf0kggQ6sSrcAzBq4qa7s1uDfKWElGtlsMATFtf%2F3DMSvDbsIIhM3TYtbSxyW49FD0Q5czXNG8b79rTdoQXZvTYEbwTydlVBuOvYF8GSbL4aqzRI%2FV7Jkn2femUkNPW5pA%2Fvlv0YGHzsx9B3Quenyb9VWghBWMQdcSmbHEWUZzV6rDxPZTpa%2BnX%2B%2FU7RlVaevLPZWubwA9IMozSaZaeLYRLbhPAME4tXWLQJUtIN5AgcSvWrrET2xksNwhw6D6VCN5hd3ja5rYoldpGM8vft2V9hkmLju04XUzv1nn2BK5FvhBwa75kj3zEBWd%2FxBjL3HxfXmCCnst9wG5crGx2NLx7jPUsHJy4shjg%2FejY3nHvGpon9tfX5jUELUqfYjqq%2F%2BcEe5R9lZp0rwWRtg4Y%2FJegRDZbJ2K2gb7Ny0lb5dI0WpLkVZbYCKQHQuCJOSm3UmXGMVKX92j6OOb1wUlQgD%2FYEokz%2FYJuEgs5wUQe8IlVhYFSzv0nr7F8nG9Q0QMA7eHDPC31Xr4SGEfzWynMmlaKgIdGJJ0ttlDEYGkWimEYxi0B9fcLoThwzDwMaDaBilHEKBxNGBXuj71VD%2BErNjemcCC%2Bn01n2zdT6wrQ5NEcxPeiOV9Luut3YN1GynXdH%2Fi%2FAdfiIMOel6dAGOqUBMH6v11W1aylb9x4986eU8Q%2FF74z6wrk%2BB8v8FQfxbh5Is6w8WiQtMzvHmFayytux%2FVadE5iE6sgwb5buDyR17qjHPi9pn4S%2FjWF7gBeIV1UAqYgfa2NjXeEqNxAK4z2IlV7BFbjpfhpv00eJ46oSvkHkayy0DIknEoyqE1WsUoBEiFff0b1pkWEXAB2QXgp7wsXdlDZwEl7HPf8yFOv7zz0zndec&X-Amz-Signature=adefb658d08876e2670b5eba02c44e5bebbbfa86c35ad6733b164a4245112d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZTH7AF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGVRlEGCryxd2rvd6GsFgl8tuSG6%2FlToEyWQubBnkbI6AiEA4bv6IGnz15mTfKPIiTGhGg%2FCZRWMN8uAUxmH%2Fc6GXhMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjYs7qbDf0kggQ6sSrcAzBq4qa7s1uDfKWElGtlsMATFtf%2F3DMSvDbsIIhM3TYtbSxyW49FD0Q5czXNG8b79rTdoQXZvTYEbwTydlVBuOvYF8GSbL4aqzRI%2FV7Jkn2femUkNPW5pA%2Fvlv0YGHzsx9B3Quenyb9VWghBWMQdcSmbHEWUZzV6rDxPZTpa%2BnX%2B%2FU7RlVaevLPZWubwA9IMozSaZaeLYRLbhPAME4tXWLQJUtIN5AgcSvWrrET2xksNwhw6D6VCN5hd3ja5rYoldpGM8vft2V9hkmLju04XUzv1nn2BK5FvhBwa75kj3zEBWd%2FxBjL3HxfXmCCnst9wG5crGx2NLx7jPUsHJy4shjg%2FejY3nHvGpon9tfX5jUELUqfYjqq%2F%2BcEe5R9lZp0rwWRtg4Y%2FJegRDZbJ2K2gb7Ny0lb5dI0WpLkVZbYCKQHQuCJOSm3UmXGMVKX92j6OOb1wUlQgD%2FYEokz%2FYJuEgs5wUQe8IlVhYFSzv0nr7F8nG9Q0QMA7eHDPC31Xr4SGEfzWynMmlaKgIdGJJ0ttlDEYGkWimEYxi0B9fcLoThwzDwMaDaBilHEKBxNGBXuj71VD%2BErNjemcCC%2Bn01n2zdT6wrQ5NEcxPeiOV9Luut3YN1GynXdH%2Fi%2FAdfiIMOel6dAGOqUBMH6v11W1aylb9x4986eU8Q%2FF74z6wrk%2BB8v8FQfxbh5Is6w8WiQtMzvHmFayytux%2FVadE5iE6sgwb5buDyR17qjHPi9pn4S%2FjWF7gBeIV1UAqYgfa2NjXeEqNxAK4z2IlV7BFbjpfhpv00eJ46oSvkHkayy0DIknEoyqE1WsUoBEiFff0b1pkWEXAB2QXgp7wsXdlDZwEl7HPf8yFOv7zz0zndec&X-Amz-Signature=5e0e508159eaaebc731d369cbf2f995e8a820cd5f5b57bf0de6b642b0ef7af84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
