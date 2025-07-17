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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHVZEQP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDPMJ3C%2BPvQwRkmoLHFwi0nZ4varpWY70p5VVJeGFZaSQIgKP97oL0oeNOZh3T4t7jOqmfuVF%2FjQF7VuALDGysV3uEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFTo0dAVEvsAsaif7ircA%2F6KhNSyESBTnwXGFwXJFaDIAPGp6dhDr6sAE5gRDCzoMH1ioXywFAkIjMj7HkqbWTbxXZdutZljkkw2Lg6%2BLYrTCQsTC77tNcN7VDUmPa8ACflLjsxu4srhdvvf55ANtmuAMDIP40hNpqFGmhuAcb8HyBVHxqTov07HXgiIBdDouflISTwvfvmxA%2BeZSKjvmHq75qBOhNnEWW%2BRWMwp9r7W4uHRm2q%2BOjq0%2FCxSbCyjkBYr4W7AtDdMC2l9dY9Oz3RiSo2OZAMEiuLxcl0UhG%2B39ZxJVwH8NiBI9uV8V3IYl28862tLNZZTNscpRwRSykCgtRDYLgERAIiktn6OVNmHgc19qNuVOAjkWgJ3%2FRUTENJaXnaDsBsIo5WdldJsCmsdjo5zjFEL8%2BNVENBEgNgssPI7Q%2B7a06%2FytbVuM9GeNyslcmWhdjxQSXenAJNVKK4unlm9LHrBTGIybj56WlIFXdZhzRqkM8q9SL9C5%2B9bvOWolImeBQeVG2WWZPJJUXeZqQG9II3iYkOUKV2ljzJTjmSsK%2F9WpwprrwET26FGH15RQIoFr%2BapgFUrTwUqf%2BUVaMkpSS3kTmhqBkIEpjWkiPbF7zFoBEicdj8xwtLphdnIZAc1xlNI1exyMMK848MGOqUBBixrwMV6GKU7CPxXm22QhG%2BhPpze9srpZdo8NVAg4lXahEss9%2BvOLAggxRiFSf4s16yKlA2pn%2B0RojC3Uh6EzMhYe%2F5qPNu4%2FCgmPyIZxkPLLs6l5Q8ojAplu6lleRW%2BQbmzuPHrbwGFL0%2FmLdDSg0bo2sblU8KjjvjMCbhNdELraA9c6dEpXMLWDZ6izV6XrVVMWVo%2FQHHlqjTnezJvTVgm%2BSXb&X-Amz-Signature=b5108bdec207848930b3ec2244ca793a898c5dc6eb6a0c2f48e7ce678b580b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHVZEQP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDPMJ3C%2BPvQwRkmoLHFwi0nZ4varpWY70p5VVJeGFZaSQIgKP97oL0oeNOZh3T4t7jOqmfuVF%2FjQF7VuALDGysV3uEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFTo0dAVEvsAsaif7ircA%2F6KhNSyESBTnwXGFwXJFaDIAPGp6dhDr6sAE5gRDCzoMH1ioXywFAkIjMj7HkqbWTbxXZdutZljkkw2Lg6%2BLYrTCQsTC77tNcN7VDUmPa8ACflLjsxu4srhdvvf55ANtmuAMDIP40hNpqFGmhuAcb8HyBVHxqTov07HXgiIBdDouflISTwvfvmxA%2BeZSKjvmHq75qBOhNnEWW%2BRWMwp9r7W4uHRm2q%2BOjq0%2FCxSbCyjkBYr4W7AtDdMC2l9dY9Oz3RiSo2OZAMEiuLxcl0UhG%2B39ZxJVwH8NiBI9uV8V3IYl28862tLNZZTNscpRwRSykCgtRDYLgERAIiktn6OVNmHgc19qNuVOAjkWgJ3%2FRUTENJaXnaDsBsIo5WdldJsCmsdjo5zjFEL8%2BNVENBEgNgssPI7Q%2B7a06%2FytbVuM9GeNyslcmWhdjxQSXenAJNVKK4unlm9LHrBTGIybj56WlIFXdZhzRqkM8q9SL9C5%2B9bvOWolImeBQeVG2WWZPJJUXeZqQG9II3iYkOUKV2ljzJTjmSsK%2F9WpwprrwET26FGH15RQIoFr%2BapgFUrTwUqf%2BUVaMkpSS3kTmhqBkIEpjWkiPbF7zFoBEicdj8xwtLphdnIZAc1xlNI1exyMMK848MGOqUBBixrwMV6GKU7CPxXm22QhG%2BhPpze9srpZdo8NVAg4lXahEss9%2BvOLAggxRiFSf4s16yKlA2pn%2B0RojC3Uh6EzMhYe%2F5qPNu4%2FCgmPyIZxkPLLs6l5Q8ojAplu6lleRW%2BQbmzuPHrbwGFL0%2FmLdDSg0bo2sblU8KjjvjMCbhNdELraA9c6dEpXMLWDZ6izV6XrVVMWVo%2FQHHlqjTnezJvTVgm%2BSXb&X-Amz-Signature=73789c0e51d6b47cf8fccf6833b7e6388c29d64de28d127fb7444eaf188795b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHVZEQP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDPMJ3C%2BPvQwRkmoLHFwi0nZ4varpWY70p5VVJeGFZaSQIgKP97oL0oeNOZh3T4t7jOqmfuVF%2FjQF7VuALDGysV3uEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFTo0dAVEvsAsaif7ircA%2F6KhNSyESBTnwXGFwXJFaDIAPGp6dhDr6sAE5gRDCzoMH1ioXywFAkIjMj7HkqbWTbxXZdutZljkkw2Lg6%2BLYrTCQsTC77tNcN7VDUmPa8ACflLjsxu4srhdvvf55ANtmuAMDIP40hNpqFGmhuAcb8HyBVHxqTov07HXgiIBdDouflISTwvfvmxA%2BeZSKjvmHq75qBOhNnEWW%2BRWMwp9r7W4uHRm2q%2BOjq0%2FCxSbCyjkBYr4W7AtDdMC2l9dY9Oz3RiSo2OZAMEiuLxcl0UhG%2B39ZxJVwH8NiBI9uV8V3IYl28862tLNZZTNscpRwRSykCgtRDYLgERAIiktn6OVNmHgc19qNuVOAjkWgJ3%2FRUTENJaXnaDsBsIo5WdldJsCmsdjo5zjFEL8%2BNVENBEgNgssPI7Q%2B7a06%2FytbVuM9GeNyslcmWhdjxQSXenAJNVKK4unlm9LHrBTGIybj56WlIFXdZhzRqkM8q9SL9C5%2B9bvOWolImeBQeVG2WWZPJJUXeZqQG9II3iYkOUKV2ljzJTjmSsK%2F9WpwprrwET26FGH15RQIoFr%2BapgFUrTwUqf%2BUVaMkpSS3kTmhqBkIEpjWkiPbF7zFoBEicdj8xwtLphdnIZAc1xlNI1exyMMK848MGOqUBBixrwMV6GKU7CPxXm22QhG%2BhPpze9srpZdo8NVAg4lXahEss9%2BvOLAggxRiFSf4s16yKlA2pn%2B0RojC3Uh6EzMhYe%2F5qPNu4%2FCgmPyIZxkPLLs6l5Q8ojAplu6lleRW%2BQbmzuPHrbwGFL0%2FmLdDSg0bo2sblU8KjjvjMCbhNdELraA9c6dEpXMLWDZ6izV6XrVVMWVo%2FQHHlqjTnezJvTVgm%2BSXb&X-Amz-Signature=e732c2ee116f3fd8995bd77d01a686d0f192f8c05873c10d2d2970658d0d53af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHVZEQP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDPMJ3C%2BPvQwRkmoLHFwi0nZ4varpWY70p5VVJeGFZaSQIgKP97oL0oeNOZh3T4t7jOqmfuVF%2FjQF7VuALDGysV3uEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFTo0dAVEvsAsaif7ircA%2F6KhNSyESBTnwXGFwXJFaDIAPGp6dhDr6sAE5gRDCzoMH1ioXywFAkIjMj7HkqbWTbxXZdutZljkkw2Lg6%2BLYrTCQsTC77tNcN7VDUmPa8ACflLjsxu4srhdvvf55ANtmuAMDIP40hNpqFGmhuAcb8HyBVHxqTov07HXgiIBdDouflISTwvfvmxA%2BeZSKjvmHq75qBOhNnEWW%2BRWMwp9r7W4uHRm2q%2BOjq0%2FCxSbCyjkBYr4W7AtDdMC2l9dY9Oz3RiSo2OZAMEiuLxcl0UhG%2B39ZxJVwH8NiBI9uV8V3IYl28862tLNZZTNscpRwRSykCgtRDYLgERAIiktn6OVNmHgc19qNuVOAjkWgJ3%2FRUTENJaXnaDsBsIo5WdldJsCmsdjo5zjFEL8%2BNVENBEgNgssPI7Q%2B7a06%2FytbVuM9GeNyslcmWhdjxQSXenAJNVKK4unlm9LHrBTGIybj56WlIFXdZhzRqkM8q9SL9C5%2B9bvOWolImeBQeVG2WWZPJJUXeZqQG9II3iYkOUKV2ljzJTjmSsK%2F9WpwprrwET26FGH15RQIoFr%2BapgFUrTwUqf%2BUVaMkpSS3kTmhqBkIEpjWkiPbF7zFoBEicdj8xwtLphdnIZAc1xlNI1exyMMK848MGOqUBBixrwMV6GKU7CPxXm22QhG%2BhPpze9srpZdo8NVAg4lXahEss9%2BvOLAggxRiFSf4s16yKlA2pn%2B0RojC3Uh6EzMhYe%2F5qPNu4%2FCgmPyIZxkPLLs6l5Q8ojAplu6lleRW%2BQbmzuPHrbwGFL0%2FmLdDSg0bo2sblU8KjjvjMCbhNdELraA9c6dEpXMLWDZ6izV6XrVVMWVo%2FQHHlqjTnezJvTVgm%2BSXb&X-Amz-Signature=6f967ee25d142266db33a0d9e8b3346a32f6845f7edb78eaeb4232ffafe8baac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHVZEQP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDPMJ3C%2BPvQwRkmoLHFwi0nZ4varpWY70p5VVJeGFZaSQIgKP97oL0oeNOZh3T4t7jOqmfuVF%2FjQF7VuALDGysV3uEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFTo0dAVEvsAsaif7ircA%2F6KhNSyESBTnwXGFwXJFaDIAPGp6dhDr6sAE5gRDCzoMH1ioXywFAkIjMj7HkqbWTbxXZdutZljkkw2Lg6%2BLYrTCQsTC77tNcN7VDUmPa8ACflLjsxu4srhdvvf55ANtmuAMDIP40hNpqFGmhuAcb8HyBVHxqTov07HXgiIBdDouflISTwvfvmxA%2BeZSKjvmHq75qBOhNnEWW%2BRWMwp9r7W4uHRm2q%2BOjq0%2FCxSbCyjkBYr4W7AtDdMC2l9dY9Oz3RiSo2OZAMEiuLxcl0UhG%2B39ZxJVwH8NiBI9uV8V3IYl28862tLNZZTNscpRwRSykCgtRDYLgERAIiktn6OVNmHgc19qNuVOAjkWgJ3%2FRUTENJaXnaDsBsIo5WdldJsCmsdjo5zjFEL8%2BNVENBEgNgssPI7Q%2B7a06%2FytbVuM9GeNyslcmWhdjxQSXenAJNVKK4unlm9LHrBTGIybj56WlIFXdZhzRqkM8q9SL9C5%2B9bvOWolImeBQeVG2WWZPJJUXeZqQG9II3iYkOUKV2ljzJTjmSsK%2F9WpwprrwET26FGH15RQIoFr%2BapgFUrTwUqf%2BUVaMkpSS3kTmhqBkIEpjWkiPbF7zFoBEicdj8xwtLphdnIZAc1xlNI1exyMMK848MGOqUBBixrwMV6GKU7CPxXm22QhG%2BhPpze9srpZdo8NVAg4lXahEss9%2BvOLAggxRiFSf4s16yKlA2pn%2B0RojC3Uh6EzMhYe%2F5qPNu4%2FCgmPyIZxkPLLs6l5Q8ojAplu6lleRW%2BQbmzuPHrbwGFL0%2FmLdDSg0bo2sblU8KjjvjMCbhNdELraA9c6dEpXMLWDZ6izV6XrVVMWVo%2FQHHlqjTnezJvTVgm%2BSXb&X-Amz-Signature=c4dd83ff0b3b9b593834aed4c280ba46207f090bb755323193fc6a4bdc2038ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHVZEQP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDPMJ3C%2BPvQwRkmoLHFwi0nZ4varpWY70p5VVJeGFZaSQIgKP97oL0oeNOZh3T4t7jOqmfuVF%2FjQF7VuALDGysV3uEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFTo0dAVEvsAsaif7ircA%2F6KhNSyESBTnwXGFwXJFaDIAPGp6dhDr6sAE5gRDCzoMH1ioXywFAkIjMj7HkqbWTbxXZdutZljkkw2Lg6%2BLYrTCQsTC77tNcN7VDUmPa8ACflLjsxu4srhdvvf55ANtmuAMDIP40hNpqFGmhuAcb8HyBVHxqTov07HXgiIBdDouflISTwvfvmxA%2BeZSKjvmHq75qBOhNnEWW%2BRWMwp9r7W4uHRm2q%2BOjq0%2FCxSbCyjkBYr4W7AtDdMC2l9dY9Oz3RiSo2OZAMEiuLxcl0UhG%2B39ZxJVwH8NiBI9uV8V3IYl28862tLNZZTNscpRwRSykCgtRDYLgERAIiktn6OVNmHgc19qNuVOAjkWgJ3%2FRUTENJaXnaDsBsIo5WdldJsCmsdjo5zjFEL8%2BNVENBEgNgssPI7Q%2B7a06%2FytbVuM9GeNyslcmWhdjxQSXenAJNVKK4unlm9LHrBTGIybj56WlIFXdZhzRqkM8q9SL9C5%2B9bvOWolImeBQeVG2WWZPJJUXeZqQG9II3iYkOUKV2ljzJTjmSsK%2F9WpwprrwET26FGH15RQIoFr%2BapgFUrTwUqf%2BUVaMkpSS3kTmhqBkIEpjWkiPbF7zFoBEicdj8xwtLphdnIZAc1xlNI1exyMMK848MGOqUBBixrwMV6GKU7CPxXm22QhG%2BhPpze9srpZdo8NVAg4lXahEss9%2BvOLAggxRiFSf4s16yKlA2pn%2B0RojC3Uh6EzMhYe%2F5qPNu4%2FCgmPyIZxkPLLs6l5Q8ojAplu6lleRW%2BQbmzuPHrbwGFL0%2FmLdDSg0bo2sblU8KjjvjMCbhNdELraA9c6dEpXMLWDZ6izV6XrVVMWVo%2FQHHlqjTnezJvTVgm%2BSXb&X-Amz-Signature=af4ce31a40cfd0370fa96b6a63ad20f1f2cbcb74edb73081a77e90556085e7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHVZEQP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDPMJ3C%2BPvQwRkmoLHFwi0nZ4varpWY70p5VVJeGFZaSQIgKP97oL0oeNOZh3T4t7jOqmfuVF%2FjQF7VuALDGysV3uEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFTo0dAVEvsAsaif7ircA%2F6KhNSyESBTnwXGFwXJFaDIAPGp6dhDr6sAE5gRDCzoMH1ioXywFAkIjMj7HkqbWTbxXZdutZljkkw2Lg6%2BLYrTCQsTC77tNcN7VDUmPa8ACflLjsxu4srhdvvf55ANtmuAMDIP40hNpqFGmhuAcb8HyBVHxqTov07HXgiIBdDouflISTwvfvmxA%2BeZSKjvmHq75qBOhNnEWW%2BRWMwp9r7W4uHRm2q%2BOjq0%2FCxSbCyjkBYr4W7AtDdMC2l9dY9Oz3RiSo2OZAMEiuLxcl0UhG%2B39ZxJVwH8NiBI9uV8V3IYl28862tLNZZTNscpRwRSykCgtRDYLgERAIiktn6OVNmHgc19qNuVOAjkWgJ3%2FRUTENJaXnaDsBsIo5WdldJsCmsdjo5zjFEL8%2BNVENBEgNgssPI7Q%2B7a06%2FytbVuM9GeNyslcmWhdjxQSXenAJNVKK4unlm9LHrBTGIybj56WlIFXdZhzRqkM8q9SL9C5%2B9bvOWolImeBQeVG2WWZPJJUXeZqQG9II3iYkOUKV2ljzJTjmSsK%2F9WpwprrwET26FGH15RQIoFr%2BapgFUrTwUqf%2BUVaMkpSS3kTmhqBkIEpjWkiPbF7zFoBEicdj8xwtLphdnIZAc1xlNI1exyMMK848MGOqUBBixrwMV6GKU7CPxXm22QhG%2BhPpze9srpZdo8NVAg4lXahEss9%2BvOLAggxRiFSf4s16yKlA2pn%2B0RojC3Uh6EzMhYe%2F5qPNu4%2FCgmPyIZxkPLLs6l5Q8ojAplu6lleRW%2BQbmzuPHrbwGFL0%2FmLdDSg0bo2sblU8KjjvjMCbhNdELraA9c6dEpXMLWDZ6izV6XrVVMWVo%2FQHHlqjTnezJvTVgm%2BSXb&X-Amz-Signature=481fb4d9d144b16c3c13e93832b6af847b21e42d7022b1e44c5923f82ac57353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
