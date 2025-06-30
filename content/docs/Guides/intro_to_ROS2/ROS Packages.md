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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6YLBHS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz6a2kLnwG2JNKmTdYXyP8Z%2FWHuUUhfZ5SiHjXndTWDAiAZ2h1667qpOSjt1dd7DI14g1YQMY7FYdf10oH1KeZW%2BSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhSMtgNLeOM%2FsJBYfKtwDbkp7mKo%2FvQOabqfurvUGXjxu354%2FquucTiTq1odZC6xABrkeTlWcA8jBkwno76l1e3Rnjkg3%2Bi9WQZn7Tbj4FJ8kq7JYvXbZUhRWCISJsD05qcXLf9h03FT5V4w3Z6Z0q51zSUkhDWOShky14diMb%2FbK%2FHfHYAFjEVLNMtaZNJ8mHd9wfxUaJknjx3k9NOKOY3owJOog63DLeg2mJhXqW92InsAaikQ%2Fo6WptyUA6KvPS84WoFvdTPiAE%2FihJs3qJXkMJqhREj4Ep4BVMs3hHuc7%2FRMFKiVIrgnBUPDqv9SAQoD8mxqtTofVcnhpUJ2CIw4jaOnJPF%2FQnElHZpHhoN5jAPyO%2Fm%2FDnSeOQh8JZ2dp80l5gqXmkG6%2Fs2sgG26VseZlEhOoQfhEtUg5dggDNIhwljlWQ15p3XWebtQg4sUIDydNWYLSdOuNbRCdzcxA3Oq6IQ0VO4G0NaJnmEa3YC%2BTwTkBtfUujN3Uxf61D5GudYH7AApXMbkj%2BMd%2BQMysJDZBnGlexhnlDLcVUkXsscpmfdj36YKb77TwpVLwrQWsc10mLrA%2BJ2zSthE6oluJj787z0cipa%2FVNwNET4wJjPqIjDDx5xyD4tK1jzMEACuECKPgKuFSXTANXX4wpLuIwwY6pgEWoMb8qE5gDpLRyJnyudKLYc7dQCra3ljKNPW%2B9nuhWJWVD4dsg8%2B7RWX2iOKeNtNZRG1D7c9XZxyYQHweDTtESJH3Wd5jZt%2Fex4eIKFKCTPn%2FeLu%2F4IxMEcA49J652WFTcL1Hbokp16nUsf%2FjMR6gMffyrf4y9EDnPywMcoGxwOCV%2FlHzD9aI7vS1L2N09PEVNsnDIQ01tp%2Fn1oCDGvxvrKH2s4I2&X-Amz-Signature=0a0a554b620e6ed8f5f3221ef95a1509ececc036ef399b43e7a855c0e4274279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6YLBHS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz6a2kLnwG2JNKmTdYXyP8Z%2FWHuUUhfZ5SiHjXndTWDAiAZ2h1667qpOSjt1dd7DI14g1YQMY7FYdf10oH1KeZW%2BSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhSMtgNLeOM%2FsJBYfKtwDbkp7mKo%2FvQOabqfurvUGXjxu354%2FquucTiTq1odZC6xABrkeTlWcA8jBkwno76l1e3Rnjkg3%2Bi9WQZn7Tbj4FJ8kq7JYvXbZUhRWCISJsD05qcXLf9h03FT5V4w3Z6Z0q51zSUkhDWOShky14diMb%2FbK%2FHfHYAFjEVLNMtaZNJ8mHd9wfxUaJknjx3k9NOKOY3owJOog63DLeg2mJhXqW92InsAaikQ%2Fo6WptyUA6KvPS84WoFvdTPiAE%2FihJs3qJXkMJqhREj4Ep4BVMs3hHuc7%2FRMFKiVIrgnBUPDqv9SAQoD8mxqtTofVcnhpUJ2CIw4jaOnJPF%2FQnElHZpHhoN5jAPyO%2Fm%2FDnSeOQh8JZ2dp80l5gqXmkG6%2Fs2sgG26VseZlEhOoQfhEtUg5dggDNIhwljlWQ15p3XWebtQg4sUIDydNWYLSdOuNbRCdzcxA3Oq6IQ0VO4G0NaJnmEa3YC%2BTwTkBtfUujN3Uxf61D5GudYH7AApXMbkj%2BMd%2BQMysJDZBnGlexhnlDLcVUkXsscpmfdj36YKb77TwpVLwrQWsc10mLrA%2BJ2zSthE6oluJj787z0cipa%2FVNwNET4wJjPqIjDDx5xyD4tK1jzMEACuECKPgKuFSXTANXX4wpLuIwwY6pgEWoMb8qE5gDpLRyJnyudKLYc7dQCra3ljKNPW%2B9nuhWJWVD4dsg8%2B7RWX2iOKeNtNZRG1D7c9XZxyYQHweDTtESJH3Wd5jZt%2Fex4eIKFKCTPn%2FeLu%2F4IxMEcA49J652WFTcL1Hbokp16nUsf%2FjMR6gMffyrf4y9EDnPywMcoGxwOCV%2FlHzD9aI7vS1L2N09PEVNsnDIQ01tp%2Fn1oCDGvxvrKH2s4I2&X-Amz-Signature=952e92f6232cf600ad9d38895b54a61ba7057e5a6feb85c5dc584159d0e129d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6YLBHS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz6a2kLnwG2JNKmTdYXyP8Z%2FWHuUUhfZ5SiHjXndTWDAiAZ2h1667qpOSjt1dd7DI14g1YQMY7FYdf10oH1KeZW%2BSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhSMtgNLeOM%2FsJBYfKtwDbkp7mKo%2FvQOabqfurvUGXjxu354%2FquucTiTq1odZC6xABrkeTlWcA8jBkwno76l1e3Rnjkg3%2Bi9WQZn7Tbj4FJ8kq7JYvXbZUhRWCISJsD05qcXLf9h03FT5V4w3Z6Z0q51zSUkhDWOShky14diMb%2FbK%2FHfHYAFjEVLNMtaZNJ8mHd9wfxUaJknjx3k9NOKOY3owJOog63DLeg2mJhXqW92InsAaikQ%2Fo6WptyUA6KvPS84WoFvdTPiAE%2FihJs3qJXkMJqhREj4Ep4BVMs3hHuc7%2FRMFKiVIrgnBUPDqv9SAQoD8mxqtTofVcnhpUJ2CIw4jaOnJPF%2FQnElHZpHhoN5jAPyO%2Fm%2FDnSeOQh8JZ2dp80l5gqXmkG6%2Fs2sgG26VseZlEhOoQfhEtUg5dggDNIhwljlWQ15p3XWebtQg4sUIDydNWYLSdOuNbRCdzcxA3Oq6IQ0VO4G0NaJnmEa3YC%2BTwTkBtfUujN3Uxf61D5GudYH7AApXMbkj%2BMd%2BQMysJDZBnGlexhnlDLcVUkXsscpmfdj36YKb77TwpVLwrQWsc10mLrA%2BJ2zSthE6oluJj787z0cipa%2FVNwNET4wJjPqIjDDx5xyD4tK1jzMEACuECKPgKuFSXTANXX4wpLuIwwY6pgEWoMb8qE5gDpLRyJnyudKLYc7dQCra3ljKNPW%2B9nuhWJWVD4dsg8%2B7RWX2iOKeNtNZRG1D7c9XZxyYQHweDTtESJH3Wd5jZt%2Fex4eIKFKCTPn%2FeLu%2F4IxMEcA49J652WFTcL1Hbokp16nUsf%2FjMR6gMffyrf4y9EDnPywMcoGxwOCV%2FlHzD9aI7vS1L2N09PEVNsnDIQ01tp%2Fn1oCDGvxvrKH2s4I2&X-Amz-Signature=dd87a44e6e6e9bbc73a24a7275700ce346c44434a9daeccbf4d267788ea64130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6YLBHS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz6a2kLnwG2JNKmTdYXyP8Z%2FWHuUUhfZ5SiHjXndTWDAiAZ2h1667qpOSjt1dd7DI14g1YQMY7FYdf10oH1KeZW%2BSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhSMtgNLeOM%2FsJBYfKtwDbkp7mKo%2FvQOabqfurvUGXjxu354%2FquucTiTq1odZC6xABrkeTlWcA8jBkwno76l1e3Rnjkg3%2Bi9WQZn7Tbj4FJ8kq7JYvXbZUhRWCISJsD05qcXLf9h03FT5V4w3Z6Z0q51zSUkhDWOShky14diMb%2FbK%2FHfHYAFjEVLNMtaZNJ8mHd9wfxUaJknjx3k9NOKOY3owJOog63DLeg2mJhXqW92InsAaikQ%2Fo6WptyUA6KvPS84WoFvdTPiAE%2FihJs3qJXkMJqhREj4Ep4BVMs3hHuc7%2FRMFKiVIrgnBUPDqv9SAQoD8mxqtTofVcnhpUJ2CIw4jaOnJPF%2FQnElHZpHhoN5jAPyO%2Fm%2FDnSeOQh8JZ2dp80l5gqXmkG6%2Fs2sgG26VseZlEhOoQfhEtUg5dggDNIhwljlWQ15p3XWebtQg4sUIDydNWYLSdOuNbRCdzcxA3Oq6IQ0VO4G0NaJnmEa3YC%2BTwTkBtfUujN3Uxf61D5GudYH7AApXMbkj%2BMd%2BQMysJDZBnGlexhnlDLcVUkXsscpmfdj36YKb77TwpVLwrQWsc10mLrA%2BJ2zSthE6oluJj787z0cipa%2FVNwNET4wJjPqIjDDx5xyD4tK1jzMEACuECKPgKuFSXTANXX4wpLuIwwY6pgEWoMb8qE5gDpLRyJnyudKLYc7dQCra3ljKNPW%2B9nuhWJWVD4dsg8%2B7RWX2iOKeNtNZRG1D7c9XZxyYQHweDTtESJH3Wd5jZt%2Fex4eIKFKCTPn%2FeLu%2F4IxMEcA49J652WFTcL1Hbokp16nUsf%2FjMR6gMffyrf4y9EDnPywMcoGxwOCV%2FlHzD9aI7vS1L2N09PEVNsnDIQ01tp%2Fn1oCDGvxvrKH2s4I2&X-Amz-Signature=9ab71360ece7110ef487fbbf11a89b8b89b60eb101ead4695e0c3a56d17cc049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6YLBHS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz6a2kLnwG2JNKmTdYXyP8Z%2FWHuUUhfZ5SiHjXndTWDAiAZ2h1667qpOSjt1dd7DI14g1YQMY7FYdf10oH1KeZW%2BSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhSMtgNLeOM%2FsJBYfKtwDbkp7mKo%2FvQOabqfurvUGXjxu354%2FquucTiTq1odZC6xABrkeTlWcA8jBkwno76l1e3Rnjkg3%2Bi9WQZn7Tbj4FJ8kq7JYvXbZUhRWCISJsD05qcXLf9h03FT5V4w3Z6Z0q51zSUkhDWOShky14diMb%2FbK%2FHfHYAFjEVLNMtaZNJ8mHd9wfxUaJknjx3k9NOKOY3owJOog63DLeg2mJhXqW92InsAaikQ%2Fo6WptyUA6KvPS84WoFvdTPiAE%2FihJs3qJXkMJqhREj4Ep4BVMs3hHuc7%2FRMFKiVIrgnBUPDqv9SAQoD8mxqtTofVcnhpUJ2CIw4jaOnJPF%2FQnElHZpHhoN5jAPyO%2Fm%2FDnSeOQh8JZ2dp80l5gqXmkG6%2Fs2sgG26VseZlEhOoQfhEtUg5dggDNIhwljlWQ15p3XWebtQg4sUIDydNWYLSdOuNbRCdzcxA3Oq6IQ0VO4G0NaJnmEa3YC%2BTwTkBtfUujN3Uxf61D5GudYH7AApXMbkj%2BMd%2BQMysJDZBnGlexhnlDLcVUkXsscpmfdj36YKb77TwpVLwrQWsc10mLrA%2BJ2zSthE6oluJj787z0cipa%2FVNwNET4wJjPqIjDDx5xyD4tK1jzMEACuECKPgKuFSXTANXX4wpLuIwwY6pgEWoMb8qE5gDpLRyJnyudKLYc7dQCra3ljKNPW%2B9nuhWJWVD4dsg8%2B7RWX2iOKeNtNZRG1D7c9XZxyYQHweDTtESJH3Wd5jZt%2Fex4eIKFKCTPn%2FeLu%2F4IxMEcA49J652WFTcL1Hbokp16nUsf%2FjMR6gMffyrf4y9EDnPywMcoGxwOCV%2FlHzD9aI7vS1L2N09PEVNsnDIQ01tp%2Fn1oCDGvxvrKH2s4I2&X-Amz-Signature=69007ba0cba13ec964488e84f1a9a821aa266931e67dd91329dad9b712915a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6YLBHS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz6a2kLnwG2JNKmTdYXyP8Z%2FWHuUUhfZ5SiHjXndTWDAiAZ2h1667qpOSjt1dd7DI14g1YQMY7FYdf10oH1KeZW%2BSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhSMtgNLeOM%2FsJBYfKtwDbkp7mKo%2FvQOabqfurvUGXjxu354%2FquucTiTq1odZC6xABrkeTlWcA8jBkwno76l1e3Rnjkg3%2Bi9WQZn7Tbj4FJ8kq7JYvXbZUhRWCISJsD05qcXLf9h03FT5V4w3Z6Z0q51zSUkhDWOShky14diMb%2FbK%2FHfHYAFjEVLNMtaZNJ8mHd9wfxUaJknjx3k9NOKOY3owJOog63DLeg2mJhXqW92InsAaikQ%2Fo6WptyUA6KvPS84WoFvdTPiAE%2FihJs3qJXkMJqhREj4Ep4BVMs3hHuc7%2FRMFKiVIrgnBUPDqv9SAQoD8mxqtTofVcnhpUJ2CIw4jaOnJPF%2FQnElHZpHhoN5jAPyO%2Fm%2FDnSeOQh8JZ2dp80l5gqXmkG6%2Fs2sgG26VseZlEhOoQfhEtUg5dggDNIhwljlWQ15p3XWebtQg4sUIDydNWYLSdOuNbRCdzcxA3Oq6IQ0VO4G0NaJnmEa3YC%2BTwTkBtfUujN3Uxf61D5GudYH7AApXMbkj%2BMd%2BQMysJDZBnGlexhnlDLcVUkXsscpmfdj36YKb77TwpVLwrQWsc10mLrA%2BJ2zSthE6oluJj787z0cipa%2FVNwNET4wJjPqIjDDx5xyD4tK1jzMEACuECKPgKuFSXTANXX4wpLuIwwY6pgEWoMb8qE5gDpLRyJnyudKLYc7dQCra3ljKNPW%2B9nuhWJWVD4dsg8%2B7RWX2iOKeNtNZRG1D7c9XZxyYQHweDTtESJH3Wd5jZt%2Fex4eIKFKCTPn%2FeLu%2F4IxMEcA49J652WFTcL1Hbokp16nUsf%2FjMR6gMffyrf4y9EDnPywMcoGxwOCV%2FlHzD9aI7vS1L2N09PEVNsnDIQ01tp%2Fn1oCDGvxvrKH2s4I2&X-Amz-Signature=a15e3a110af535b832f120faa11a86a8596079eada828c0f294f35ae7a916225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6YLBHS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz6a2kLnwG2JNKmTdYXyP8Z%2FWHuUUhfZ5SiHjXndTWDAiAZ2h1667qpOSjt1dd7DI14g1YQMY7FYdf10oH1KeZW%2BSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhSMtgNLeOM%2FsJBYfKtwDbkp7mKo%2FvQOabqfurvUGXjxu354%2FquucTiTq1odZC6xABrkeTlWcA8jBkwno76l1e3Rnjkg3%2Bi9WQZn7Tbj4FJ8kq7JYvXbZUhRWCISJsD05qcXLf9h03FT5V4w3Z6Z0q51zSUkhDWOShky14diMb%2FbK%2FHfHYAFjEVLNMtaZNJ8mHd9wfxUaJknjx3k9NOKOY3owJOog63DLeg2mJhXqW92InsAaikQ%2Fo6WptyUA6KvPS84WoFvdTPiAE%2FihJs3qJXkMJqhREj4Ep4BVMs3hHuc7%2FRMFKiVIrgnBUPDqv9SAQoD8mxqtTofVcnhpUJ2CIw4jaOnJPF%2FQnElHZpHhoN5jAPyO%2Fm%2FDnSeOQh8JZ2dp80l5gqXmkG6%2Fs2sgG26VseZlEhOoQfhEtUg5dggDNIhwljlWQ15p3XWebtQg4sUIDydNWYLSdOuNbRCdzcxA3Oq6IQ0VO4G0NaJnmEa3YC%2BTwTkBtfUujN3Uxf61D5GudYH7AApXMbkj%2BMd%2BQMysJDZBnGlexhnlDLcVUkXsscpmfdj36YKb77TwpVLwrQWsc10mLrA%2BJ2zSthE6oluJj787z0cipa%2FVNwNET4wJjPqIjDDx5xyD4tK1jzMEACuECKPgKuFSXTANXX4wpLuIwwY6pgEWoMb8qE5gDpLRyJnyudKLYc7dQCra3ljKNPW%2B9nuhWJWVD4dsg8%2B7RWX2iOKeNtNZRG1D7c9XZxyYQHweDTtESJH3Wd5jZt%2Fex4eIKFKCTPn%2FeLu%2F4IxMEcA49J652WFTcL1Hbokp16nUsf%2FjMR6gMffyrf4y9EDnPywMcoGxwOCV%2FlHzD9aI7vS1L2N09PEVNsnDIQ01tp%2Fn1oCDGvxvrKH2s4I2&X-Amz-Signature=c24cb73746c51a9c6aa7f1c76e0eaec009e178533de97b5bb58e72a0602b4b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
