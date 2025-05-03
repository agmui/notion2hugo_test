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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6WFSDK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2Bqr%2BQEWMkjLJTnVrqcgC60Mnzi2Z8yFbWkFgbUM6iKQIgF8QvylV5r5FG6hwTO2s6Do7IiemEZCEbRxSqFE3n32gqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0JVP0rgAeVNRbctSrcAztZVmTVkVK1puXrdvUr94m0Ns9bdFwGTl8RB0mpWUSzEbnTshuiwcaHUOmAVNHs2eQW7SpIfqFYnQO8qRxYyGaSRXjMu0AvgmmMVjsVe9dMydoYu28KtV%2FR%2B3SZpWrkRFawrDGaBn3qkO5pabJehg4kiXFm2dPyrXKszfDIs8e4N02U0iHyod2esE032i5p%2BrRSPALMx5O0MTN3ZtFNeFpRfg5sdjx%2FJZ1R9Et6wt0jtNPTZj4BoerV9idXsMkRyk%2FdLJSnIx%2BoV3PMHG6mlMTWDamQMDIhiFA%2B2jLihcFt7yzlqLyXw%2Fu0LYnZkiSBRpAqKIL7t41u7jntH9lzZxh2KshGvNewIYyKuLZCsLOhzV77BZxfeSoXWSSvRJVKko5IQ6kQYwISqsn5aHOIcC6Iqy7oPpz4%2Bs2RbXIUvxwlw8WTZ3SMgtCNwzOjMJQFEfuSj4%2FgrW9diyCC8u%2B%2FcaILKR5Cp3ug0otDq3xq8vzsAFOGw%2BkI%2Fx9Ni7kCgGXFFR6XGQy6aEzcPfmqSpSqwo1GMQJwX7vDLkOWlhcbcNOVyx2ojHKqVrqFOzLq66bp1E5zPInxw%2BOBKrSIlyaePXZfFmJbu4Ir5ZdfMbbg4mTGgBmLAUJpsMDtDTmwMIzz2cAGOqUBDgOFzvtNBZL8Pi%2B6smgpdKinR%2F71qwA0hkgJFZNb0QTOm87DSKYnsGYVEv5uQDHNYQAgTQfCIRVerg6gr%2FPaBvxlFGj2ZAw8gUvFEfWUonUEeOs%2F0hcWpLDIliYUgeSxTzH0H7zzVy1wqoMj%2BVREioLc%2FrQBJIcLZJ3Qzn%2BOJNOMx2QDZTDTRlsrv52goHbGv1nLqAMyKpsX9YLb35SNnYD4Tibf&X-Amz-Signature=ba24aac01a189f681b857ffc0da870dc8d627fc8570b1ed1b5c4d46d117b0ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6WFSDK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2Bqr%2BQEWMkjLJTnVrqcgC60Mnzi2Z8yFbWkFgbUM6iKQIgF8QvylV5r5FG6hwTO2s6Do7IiemEZCEbRxSqFE3n32gqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0JVP0rgAeVNRbctSrcAztZVmTVkVK1puXrdvUr94m0Ns9bdFwGTl8RB0mpWUSzEbnTshuiwcaHUOmAVNHs2eQW7SpIfqFYnQO8qRxYyGaSRXjMu0AvgmmMVjsVe9dMydoYu28KtV%2FR%2B3SZpWrkRFawrDGaBn3qkO5pabJehg4kiXFm2dPyrXKszfDIs8e4N02U0iHyod2esE032i5p%2BrRSPALMx5O0MTN3ZtFNeFpRfg5sdjx%2FJZ1R9Et6wt0jtNPTZj4BoerV9idXsMkRyk%2FdLJSnIx%2BoV3PMHG6mlMTWDamQMDIhiFA%2B2jLihcFt7yzlqLyXw%2Fu0LYnZkiSBRpAqKIL7t41u7jntH9lzZxh2KshGvNewIYyKuLZCsLOhzV77BZxfeSoXWSSvRJVKko5IQ6kQYwISqsn5aHOIcC6Iqy7oPpz4%2Bs2RbXIUvxwlw8WTZ3SMgtCNwzOjMJQFEfuSj4%2FgrW9diyCC8u%2B%2FcaILKR5Cp3ug0otDq3xq8vzsAFOGw%2BkI%2Fx9Ni7kCgGXFFR6XGQy6aEzcPfmqSpSqwo1GMQJwX7vDLkOWlhcbcNOVyx2ojHKqVrqFOzLq66bp1E5zPInxw%2BOBKrSIlyaePXZfFmJbu4Ir5ZdfMbbg4mTGgBmLAUJpsMDtDTmwMIzz2cAGOqUBDgOFzvtNBZL8Pi%2B6smgpdKinR%2F71qwA0hkgJFZNb0QTOm87DSKYnsGYVEv5uQDHNYQAgTQfCIRVerg6gr%2FPaBvxlFGj2ZAw8gUvFEfWUonUEeOs%2F0hcWpLDIliYUgeSxTzH0H7zzVy1wqoMj%2BVREioLc%2FrQBJIcLZJ3Qzn%2BOJNOMx2QDZTDTRlsrv52goHbGv1nLqAMyKpsX9YLb35SNnYD4Tibf&X-Amz-Signature=0d35fd2d317742ed1897eae1918088799f42518713eb14e3c8f200306369c99b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6WFSDK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2Bqr%2BQEWMkjLJTnVrqcgC60Mnzi2Z8yFbWkFgbUM6iKQIgF8QvylV5r5FG6hwTO2s6Do7IiemEZCEbRxSqFE3n32gqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0JVP0rgAeVNRbctSrcAztZVmTVkVK1puXrdvUr94m0Ns9bdFwGTl8RB0mpWUSzEbnTshuiwcaHUOmAVNHs2eQW7SpIfqFYnQO8qRxYyGaSRXjMu0AvgmmMVjsVe9dMydoYu28KtV%2FR%2B3SZpWrkRFawrDGaBn3qkO5pabJehg4kiXFm2dPyrXKszfDIs8e4N02U0iHyod2esE032i5p%2BrRSPALMx5O0MTN3ZtFNeFpRfg5sdjx%2FJZ1R9Et6wt0jtNPTZj4BoerV9idXsMkRyk%2FdLJSnIx%2BoV3PMHG6mlMTWDamQMDIhiFA%2B2jLihcFt7yzlqLyXw%2Fu0LYnZkiSBRpAqKIL7t41u7jntH9lzZxh2KshGvNewIYyKuLZCsLOhzV77BZxfeSoXWSSvRJVKko5IQ6kQYwISqsn5aHOIcC6Iqy7oPpz4%2Bs2RbXIUvxwlw8WTZ3SMgtCNwzOjMJQFEfuSj4%2FgrW9diyCC8u%2B%2FcaILKR5Cp3ug0otDq3xq8vzsAFOGw%2BkI%2Fx9Ni7kCgGXFFR6XGQy6aEzcPfmqSpSqwo1GMQJwX7vDLkOWlhcbcNOVyx2ojHKqVrqFOzLq66bp1E5zPInxw%2BOBKrSIlyaePXZfFmJbu4Ir5ZdfMbbg4mTGgBmLAUJpsMDtDTmwMIzz2cAGOqUBDgOFzvtNBZL8Pi%2B6smgpdKinR%2F71qwA0hkgJFZNb0QTOm87DSKYnsGYVEv5uQDHNYQAgTQfCIRVerg6gr%2FPaBvxlFGj2ZAw8gUvFEfWUonUEeOs%2F0hcWpLDIliYUgeSxTzH0H7zzVy1wqoMj%2BVREioLc%2FrQBJIcLZJ3Qzn%2BOJNOMx2QDZTDTRlsrv52goHbGv1nLqAMyKpsX9YLb35SNnYD4Tibf&X-Amz-Signature=e5ee2e689f9d56dab4dc548106fdca34253d9eb0a21ff215cfcbb50974d2f29f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6WFSDK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2Bqr%2BQEWMkjLJTnVrqcgC60Mnzi2Z8yFbWkFgbUM6iKQIgF8QvylV5r5FG6hwTO2s6Do7IiemEZCEbRxSqFE3n32gqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0JVP0rgAeVNRbctSrcAztZVmTVkVK1puXrdvUr94m0Ns9bdFwGTl8RB0mpWUSzEbnTshuiwcaHUOmAVNHs2eQW7SpIfqFYnQO8qRxYyGaSRXjMu0AvgmmMVjsVe9dMydoYu28KtV%2FR%2B3SZpWrkRFawrDGaBn3qkO5pabJehg4kiXFm2dPyrXKszfDIs8e4N02U0iHyod2esE032i5p%2BrRSPALMx5O0MTN3ZtFNeFpRfg5sdjx%2FJZ1R9Et6wt0jtNPTZj4BoerV9idXsMkRyk%2FdLJSnIx%2BoV3PMHG6mlMTWDamQMDIhiFA%2B2jLihcFt7yzlqLyXw%2Fu0LYnZkiSBRpAqKIL7t41u7jntH9lzZxh2KshGvNewIYyKuLZCsLOhzV77BZxfeSoXWSSvRJVKko5IQ6kQYwISqsn5aHOIcC6Iqy7oPpz4%2Bs2RbXIUvxwlw8WTZ3SMgtCNwzOjMJQFEfuSj4%2FgrW9diyCC8u%2B%2FcaILKR5Cp3ug0otDq3xq8vzsAFOGw%2BkI%2Fx9Ni7kCgGXFFR6XGQy6aEzcPfmqSpSqwo1GMQJwX7vDLkOWlhcbcNOVyx2ojHKqVrqFOzLq66bp1E5zPInxw%2BOBKrSIlyaePXZfFmJbu4Ir5ZdfMbbg4mTGgBmLAUJpsMDtDTmwMIzz2cAGOqUBDgOFzvtNBZL8Pi%2B6smgpdKinR%2F71qwA0hkgJFZNb0QTOm87DSKYnsGYVEv5uQDHNYQAgTQfCIRVerg6gr%2FPaBvxlFGj2ZAw8gUvFEfWUonUEeOs%2F0hcWpLDIliYUgeSxTzH0H7zzVy1wqoMj%2BVREioLc%2FrQBJIcLZJ3Qzn%2BOJNOMx2QDZTDTRlsrv52goHbGv1nLqAMyKpsX9YLb35SNnYD4Tibf&X-Amz-Signature=0912762476d7666726b77c9e9f76e01a7a5c833340cb965d7cd14b7433c4088d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6WFSDK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2Bqr%2BQEWMkjLJTnVrqcgC60Mnzi2Z8yFbWkFgbUM6iKQIgF8QvylV5r5FG6hwTO2s6Do7IiemEZCEbRxSqFE3n32gqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0JVP0rgAeVNRbctSrcAztZVmTVkVK1puXrdvUr94m0Ns9bdFwGTl8RB0mpWUSzEbnTshuiwcaHUOmAVNHs2eQW7SpIfqFYnQO8qRxYyGaSRXjMu0AvgmmMVjsVe9dMydoYu28KtV%2FR%2B3SZpWrkRFawrDGaBn3qkO5pabJehg4kiXFm2dPyrXKszfDIs8e4N02U0iHyod2esE032i5p%2BrRSPALMx5O0MTN3ZtFNeFpRfg5sdjx%2FJZ1R9Et6wt0jtNPTZj4BoerV9idXsMkRyk%2FdLJSnIx%2BoV3PMHG6mlMTWDamQMDIhiFA%2B2jLihcFt7yzlqLyXw%2Fu0LYnZkiSBRpAqKIL7t41u7jntH9lzZxh2KshGvNewIYyKuLZCsLOhzV77BZxfeSoXWSSvRJVKko5IQ6kQYwISqsn5aHOIcC6Iqy7oPpz4%2Bs2RbXIUvxwlw8WTZ3SMgtCNwzOjMJQFEfuSj4%2FgrW9diyCC8u%2B%2FcaILKR5Cp3ug0otDq3xq8vzsAFOGw%2BkI%2Fx9Ni7kCgGXFFR6XGQy6aEzcPfmqSpSqwo1GMQJwX7vDLkOWlhcbcNOVyx2ojHKqVrqFOzLq66bp1E5zPInxw%2BOBKrSIlyaePXZfFmJbu4Ir5ZdfMbbg4mTGgBmLAUJpsMDtDTmwMIzz2cAGOqUBDgOFzvtNBZL8Pi%2B6smgpdKinR%2F71qwA0hkgJFZNb0QTOm87DSKYnsGYVEv5uQDHNYQAgTQfCIRVerg6gr%2FPaBvxlFGj2ZAw8gUvFEfWUonUEeOs%2F0hcWpLDIliYUgeSxTzH0H7zzVy1wqoMj%2BVREioLc%2FrQBJIcLZJ3Qzn%2BOJNOMx2QDZTDTRlsrv52goHbGv1nLqAMyKpsX9YLb35SNnYD4Tibf&X-Amz-Signature=cdb0cccd8e28603ecfd155c582136e651ee7d7666d89fed3113341905e99a518&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6WFSDK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2Bqr%2BQEWMkjLJTnVrqcgC60Mnzi2Z8yFbWkFgbUM6iKQIgF8QvylV5r5FG6hwTO2s6Do7IiemEZCEbRxSqFE3n32gqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0JVP0rgAeVNRbctSrcAztZVmTVkVK1puXrdvUr94m0Ns9bdFwGTl8RB0mpWUSzEbnTshuiwcaHUOmAVNHs2eQW7SpIfqFYnQO8qRxYyGaSRXjMu0AvgmmMVjsVe9dMydoYu28KtV%2FR%2B3SZpWrkRFawrDGaBn3qkO5pabJehg4kiXFm2dPyrXKszfDIs8e4N02U0iHyod2esE032i5p%2BrRSPALMx5O0MTN3ZtFNeFpRfg5sdjx%2FJZ1R9Et6wt0jtNPTZj4BoerV9idXsMkRyk%2FdLJSnIx%2BoV3PMHG6mlMTWDamQMDIhiFA%2B2jLihcFt7yzlqLyXw%2Fu0LYnZkiSBRpAqKIL7t41u7jntH9lzZxh2KshGvNewIYyKuLZCsLOhzV77BZxfeSoXWSSvRJVKko5IQ6kQYwISqsn5aHOIcC6Iqy7oPpz4%2Bs2RbXIUvxwlw8WTZ3SMgtCNwzOjMJQFEfuSj4%2FgrW9diyCC8u%2B%2FcaILKR5Cp3ug0otDq3xq8vzsAFOGw%2BkI%2Fx9Ni7kCgGXFFR6XGQy6aEzcPfmqSpSqwo1GMQJwX7vDLkOWlhcbcNOVyx2ojHKqVrqFOzLq66bp1E5zPInxw%2BOBKrSIlyaePXZfFmJbu4Ir5ZdfMbbg4mTGgBmLAUJpsMDtDTmwMIzz2cAGOqUBDgOFzvtNBZL8Pi%2B6smgpdKinR%2F71qwA0hkgJFZNb0QTOm87DSKYnsGYVEv5uQDHNYQAgTQfCIRVerg6gr%2FPaBvxlFGj2ZAw8gUvFEfWUonUEeOs%2F0hcWpLDIliYUgeSxTzH0H7zzVy1wqoMj%2BVREioLc%2FrQBJIcLZJ3Qzn%2BOJNOMx2QDZTDTRlsrv52goHbGv1nLqAMyKpsX9YLb35SNnYD4Tibf&X-Amz-Signature=ce1300797c7a94a6de57339e588b22c8f2d3acde308f00383e6b3491a7de9fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6WFSDK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2Bqr%2BQEWMkjLJTnVrqcgC60Mnzi2Z8yFbWkFgbUM6iKQIgF8QvylV5r5FG6hwTO2s6Do7IiemEZCEbRxSqFE3n32gqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0JVP0rgAeVNRbctSrcAztZVmTVkVK1puXrdvUr94m0Ns9bdFwGTl8RB0mpWUSzEbnTshuiwcaHUOmAVNHs2eQW7SpIfqFYnQO8qRxYyGaSRXjMu0AvgmmMVjsVe9dMydoYu28KtV%2FR%2B3SZpWrkRFawrDGaBn3qkO5pabJehg4kiXFm2dPyrXKszfDIs8e4N02U0iHyod2esE032i5p%2BrRSPALMx5O0MTN3ZtFNeFpRfg5sdjx%2FJZ1R9Et6wt0jtNPTZj4BoerV9idXsMkRyk%2FdLJSnIx%2BoV3PMHG6mlMTWDamQMDIhiFA%2B2jLihcFt7yzlqLyXw%2Fu0LYnZkiSBRpAqKIL7t41u7jntH9lzZxh2KshGvNewIYyKuLZCsLOhzV77BZxfeSoXWSSvRJVKko5IQ6kQYwISqsn5aHOIcC6Iqy7oPpz4%2Bs2RbXIUvxwlw8WTZ3SMgtCNwzOjMJQFEfuSj4%2FgrW9diyCC8u%2B%2FcaILKR5Cp3ug0otDq3xq8vzsAFOGw%2BkI%2Fx9Ni7kCgGXFFR6XGQy6aEzcPfmqSpSqwo1GMQJwX7vDLkOWlhcbcNOVyx2ojHKqVrqFOzLq66bp1E5zPInxw%2BOBKrSIlyaePXZfFmJbu4Ir5ZdfMbbg4mTGgBmLAUJpsMDtDTmwMIzz2cAGOqUBDgOFzvtNBZL8Pi%2B6smgpdKinR%2F71qwA0hkgJFZNb0QTOm87DSKYnsGYVEv5uQDHNYQAgTQfCIRVerg6gr%2FPaBvxlFGj2ZAw8gUvFEfWUonUEeOs%2F0hcWpLDIliYUgeSxTzH0H7zzVy1wqoMj%2BVREioLc%2FrQBJIcLZJ3Qzn%2BOJNOMx2QDZTDTRlsrv52goHbGv1nLqAMyKpsX9YLb35SNnYD4Tibf&X-Amz-Signature=f7833dc3ec93f9ef04362d1195c5400bc955b352eea6004ca3d9304ec9e7979d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
