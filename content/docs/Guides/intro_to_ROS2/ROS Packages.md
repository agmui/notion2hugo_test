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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIADQ2Y%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDr7xRSNT9tngtIdmwhaxpW8ZyQXcHf5NfKac0bN3v9AgIhAJja7Hn7lnrQWtoaocetIoSXdtqZ%2FA4ibElKshhoW%2B3FKv8DCD8QABoMNjM3NDIzMTgzODA1IgxlXcOt5bvU4%2FJIls4q3AMVzAOJ7e5QJOWa9A6wm7K7CbwiIYcEH36M9pN2fcZlREwVPzQh4DJ%2BwahhVUkCDv%2FvprZWybHldkBVHkbSgIpa6UzJuXSfGi%2B1qIEfcfQ%2FeN9A7mFupE4wJb%2B9cb%2F%2Fe3lc2dPQ6aFaqhyLo5RcbOuBXeg49vrui25zlfpNTpa%2BO36qy0xi%2BIgGd98rS65Y6yrvmI8IbgCw7vgqYukM%2F0mzNNwJi7UfIcvpCVEuVmxgNncHh1qbOiCp1VgNfWZZ6wr9aWH%2FHg3%2FRQmeJH3s5qqfdBZpcECAwsMls%2BYxokRj5bLa0%2Fk5KK7dmGXvQPd9kEW7PtRHwBl9XErmhXf9ac9lUd8W%2BYrEnGqXT1Q2x04vIlNAwn6aHwkrBWn3udv5W4BJidPuECbQUDW6GpnzaGXXmvGRIDhlA%2BEM9%2FTK828uNmbOIPNGEmba%2FAywb9i8kSXvC9gFDSsGCMNGwX4bsafB1%2B7M601ELl9edvcKgtH4wif3r1njlmuPJR5%2BxwiSwLtJvh3QZoEcRXoT1qeP1j6c6mFHk3Xu8%2F%2F%2BObn1Jez175BLqprd03kd4KW18YdRtQ4dIDL5L%2FyQuEdrgIsPmjifghQuNDcFc%2FaCz%2BMTGpc61wSvVi0t00mrzHE3CjD1pe7CBjqkAUCiewyh2u7e1JrVpoM0plS92Qf0Zff%2FQbHh%2BY7OPqBT9f9wcb76KfKLXjKq4TqzatZNwb3EklKmW8qfam9PunoI%2BdoZWst3klFncA1C7AChns6FGP2U57wjWT%2B2wwYVfYJjblfb71k7cTaKQFxaL8q696S19MJSfUDLfrIoS3SMzwKMQ27%2BLurla7zNzm9OtBx52ZwElP80R4cJS8j9SSp7A6if&X-Amz-Signature=55643ac25279714237f5dc58a419d6921ff80c3d8b579268a97e6f7f60977613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIADQ2Y%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDr7xRSNT9tngtIdmwhaxpW8ZyQXcHf5NfKac0bN3v9AgIhAJja7Hn7lnrQWtoaocetIoSXdtqZ%2FA4ibElKshhoW%2B3FKv8DCD8QABoMNjM3NDIzMTgzODA1IgxlXcOt5bvU4%2FJIls4q3AMVzAOJ7e5QJOWa9A6wm7K7CbwiIYcEH36M9pN2fcZlREwVPzQh4DJ%2BwahhVUkCDv%2FvprZWybHldkBVHkbSgIpa6UzJuXSfGi%2B1qIEfcfQ%2FeN9A7mFupE4wJb%2B9cb%2F%2Fe3lc2dPQ6aFaqhyLo5RcbOuBXeg49vrui25zlfpNTpa%2BO36qy0xi%2BIgGd98rS65Y6yrvmI8IbgCw7vgqYukM%2F0mzNNwJi7UfIcvpCVEuVmxgNncHh1qbOiCp1VgNfWZZ6wr9aWH%2FHg3%2FRQmeJH3s5qqfdBZpcECAwsMls%2BYxokRj5bLa0%2Fk5KK7dmGXvQPd9kEW7PtRHwBl9XErmhXf9ac9lUd8W%2BYrEnGqXT1Q2x04vIlNAwn6aHwkrBWn3udv5W4BJidPuECbQUDW6GpnzaGXXmvGRIDhlA%2BEM9%2FTK828uNmbOIPNGEmba%2FAywb9i8kSXvC9gFDSsGCMNGwX4bsafB1%2B7M601ELl9edvcKgtH4wif3r1njlmuPJR5%2BxwiSwLtJvh3QZoEcRXoT1qeP1j6c6mFHk3Xu8%2F%2F%2BObn1Jez175BLqprd03kd4KW18YdRtQ4dIDL5L%2FyQuEdrgIsPmjifghQuNDcFc%2FaCz%2BMTGpc61wSvVi0t00mrzHE3CjD1pe7CBjqkAUCiewyh2u7e1JrVpoM0plS92Qf0Zff%2FQbHh%2BY7OPqBT9f9wcb76KfKLXjKq4TqzatZNwb3EklKmW8qfam9PunoI%2BdoZWst3klFncA1C7AChns6FGP2U57wjWT%2B2wwYVfYJjblfb71k7cTaKQFxaL8q696S19MJSfUDLfrIoS3SMzwKMQ27%2BLurla7zNzm9OtBx52ZwElP80R4cJS8j9SSp7A6if&X-Amz-Signature=d8b79fc57ae9c6be2b425632a9fecf9e159e655d5435b3318cd083bb8f187c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIADQ2Y%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDr7xRSNT9tngtIdmwhaxpW8ZyQXcHf5NfKac0bN3v9AgIhAJja7Hn7lnrQWtoaocetIoSXdtqZ%2FA4ibElKshhoW%2B3FKv8DCD8QABoMNjM3NDIzMTgzODA1IgxlXcOt5bvU4%2FJIls4q3AMVzAOJ7e5QJOWa9A6wm7K7CbwiIYcEH36M9pN2fcZlREwVPzQh4DJ%2BwahhVUkCDv%2FvprZWybHldkBVHkbSgIpa6UzJuXSfGi%2B1qIEfcfQ%2FeN9A7mFupE4wJb%2B9cb%2F%2Fe3lc2dPQ6aFaqhyLo5RcbOuBXeg49vrui25zlfpNTpa%2BO36qy0xi%2BIgGd98rS65Y6yrvmI8IbgCw7vgqYukM%2F0mzNNwJi7UfIcvpCVEuVmxgNncHh1qbOiCp1VgNfWZZ6wr9aWH%2FHg3%2FRQmeJH3s5qqfdBZpcECAwsMls%2BYxokRj5bLa0%2Fk5KK7dmGXvQPd9kEW7PtRHwBl9XErmhXf9ac9lUd8W%2BYrEnGqXT1Q2x04vIlNAwn6aHwkrBWn3udv5W4BJidPuECbQUDW6GpnzaGXXmvGRIDhlA%2BEM9%2FTK828uNmbOIPNGEmba%2FAywb9i8kSXvC9gFDSsGCMNGwX4bsafB1%2B7M601ELl9edvcKgtH4wif3r1njlmuPJR5%2BxwiSwLtJvh3QZoEcRXoT1qeP1j6c6mFHk3Xu8%2F%2F%2BObn1Jez175BLqprd03kd4KW18YdRtQ4dIDL5L%2FyQuEdrgIsPmjifghQuNDcFc%2FaCz%2BMTGpc61wSvVi0t00mrzHE3CjD1pe7CBjqkAUCiewyh2u7e1JrVpoM0plS92Qf0Zff%2FQbHh%2BY7OPqBT9f9wcb76KfKLXjKq4TqzatZNwb3EklKmW8qfam9PunoI%2BdoZWst3klFncA1C7AChns6FGP2U57wjWT%2B2wwYVfYJjblfb71k7cTaKQFxaL8q696S19MJSfUDLfrIoS3SMzwKMQ27%2BLurla7zNzm9OtBx52ZwElP80R4cJS8j9SSp7A6if&X-Amz-Signature=a88b610a410ccb6e95f034d2b9f9da98694911787754181d3d008cedc6b6667f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIADQ2Y%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDr7xRSNT9tngtIdmwhaxpW8ZyQXcHf5NfKac0bN3v9AgIhAJja7Hn7lnrQWtoaocetIoSXdtqZ%2FA4ibElKshhoW%2B3FKv8DCD8QABoMNjM3NDIzMTgzODA1IgxlXcOt5bvU4%2FJIls4q3AMVzAOJ7e5QJOWa9A6wm7K7CbwiIYcEH36M9pN2fcZlREwVPzQh4DJ%2BwahhVUkCDv%2FvprZWybHldkBVHkbSgIpa6UzJuXSfGi%2B1qIEfcfQ%2FeN9A7mFupE4wJb%2B9cb%2F%2Fe3lc2dPQ6aFaqhyLo5RcbOuBXeg49vrui25zlfpNTpa%2BO36qy0xi%2BIgGd98rS65Y6yrvmI8IbgCw7vgqYukM%2F0mzNNwJi7UfIcvpCVEuVmxgNncHh1qbOiCp1VgNfWZZ6wr9aWH%2FHg3%2FRQmeJH3s5qqfdBZpcECAwsMls%2BYxokRj5bLa0%2Fk5KK7dmGXvQPd9kEW7PtRHwBl9XErmhXf9ac9lUd8W%2BYrEnGqXT1Q2x04vIlNAwn6aHwkrBWn3udv5W4BJidPuECbQUDW6GpnzaGXXmvGRIDhlA%2BEM9%2FTK828uNmbOIPNGEmba%2FAywb9i8kSXvC9gFDSsGCMNGwX4bsafB1%2B7M601ELl9edvcKgtH4wif3r1njlmuPJR5%2BxwiSwLtJvh3QZoEcRXoT1qeP1j6c6mFHk3Xu8%2F%2F%2BObn1Jez175BLqprd03kd4KW18YdRtQ4dIDL5L%2FyQuEdrgIsPmjifghQuNDcFc%2FaCz%2BMTGpc61wSvVi0t00mrzHE3CjD1pe7CBjqkAUCiewyh2u7e1JrVpoM0plS92Qf0Zff%2FQbHh%2BY7OPqBT9f9wcb76KfKLXjKq4TqzatZNwb3EklKmW8qfam9PunoI%2BdoZWst3klFncA1C7AChns6FGP2U57wjWT%2B2wwYVfYJjblfb71k7cTaKQFxaL8q696S19MJSfUDLfrIoS3SMzwKMQ27%2BLurla7zNzm9OtBx52ZwElP80R4cJS8j9SSp7A6if&X-Amz-Signature=61f5445266b79b2ca8846d398be51a693eb9639c728be44e8b26a739b0c86ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIADQ2Y%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDr7xRSNT9tngtIdmwhaxpW8ZyQXcHf5NfKac0bN3v9AgIhAJja7Hn7lnrQWtoaocetIoSXdtqZ%2FA4ibElKshhoW%2B3FKv8DCD8QABoMNjM3NDIzMTgzODA1IgxlXcOt5bvU4%2FJIls4q3AMVzAOJ7e5QJOWa9A6wm7K7CbwiIYcEH36M9pN2fcZlREwVPzQh4DJ%2BwahhVUkCDv%2FvprZWybHldkBVHkbSgIpa6UzJuXSfGi%2B1qIEfcfQ%2FeN9A7mFupE4wJb%2B9cb%2F%2Fe3lc2dPQ6aFaqhyLo5RcbOuBXeg49vrui25zlfpNTpa%2BO36qy0xi%2BIgGd98rS65Y6yrvmI8IbgCw7vgqYukM%2F0mzNNwJi7UfIcvpCVEuVmxgNncHh1qbOiCp1VgNfWZZ6wr9aWH%2FHg3%2FRQmeJH3s5qqfdBZpcECAwsMls%2BYxokRj5bLa0%2Fk5KK7dmGXvQPd9kEW7PtRHwBl9XErmhXf9ac9lUd8W%2BYrEnGqXT1Q2x04vIlNAwn6aHwkrBWn3udv5W4BJidPuECbQUDW6GpnzaGXXmvGRIDhlA%2BEM9%2FTK828uNmbOIPNGEmba%2FAywb9i8kSXvC9gFDSsGCMNGwX4bsafB1%2B7M601ELl9edvcKgtH4wif3r1njlmuPJR5%2BxwiSwLtJvh3QZoEcRXoT1qeP1j6c6mFHk3Xu8%2F%2F%2BObn1Jez175BLqprd03kd4KW18YdRtQ4dIDL5L%2FyQuEdrgIsPmjifghQuNDcFc%2FaCz%2BMTGpc61wSvVi0t00mrzHE3CjD1pe7CBjqkAUCiewyh2u7e1JrVpoM0plS92Qf0Zff%2FQbHh%2BY7OPqBT9f9wcb76KfKLXjKq4TqzatZNwb3EklKmW8qfam9PunoI%2BdoZWst3klFncA1C7AChns6FGP2U57wjWT%2B2wwYVfYJjblfb71k7cTaKQFxaL8q696S19MJSfUDLfrIoS3SMzwKMQ27%2BLurla7zNzm9OtBx52ZwElP80R4cJS8j9SSp7A6if&X-Amz-Signature=3ff639457f14cef2a9a97722e454d7efbabbbdb48f45dd6844d035041483416e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIADQ2Y%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDr7xRSNT9tngtIdmwhaxpW8ZyQXcHf5NfKac0bN3v9AgIhAJja7Hn7lnrQWtoaocetIoSXdtqZ%2FA4ibElKshhoW%2B3FKv8DCD8QABoMNjM3NDIzMTgzODA1IgxlXcOt5bvU4%2FJIls4q3AMVzAOJ7e5QJOWa9A6wm7K7CbwiIYcEH36M9pN2fcZlREwVPzQh4DJ%2BwahhVUkCDv%2FvprZWybHldkBVHkbSgIpa6UzJuXSfGi%2B1qIEfcfQ%2FeN9A7mFupE4wJb%2B9cb%2F%2Fe3lc2dPQ6aFaqhyLo5RcbOuBXeg49vrui25zlfpNTpa%2BO36qy0xi%2BIgGd98rS65Y6yrvmI8IbgCw7vgqYukM%2F0mzNNwJi7UfIcvpCVEuVmxgNncHh1qbOiCp1VgNfWZZ6wr9aWH%2FHg3%2FRQmeJH3s5qqfdBZpcECAwsMls%2BYxokRj5bLa0%2Fk5KK7dmGXvQPd9kEW7PtRHwBl9XErmhXf9ac9lUd8W%2BYrEnGqXT1Q2x04vIlNAwn6aHwkrBWn3udv5W4BJidPuECbQUDW6GpnzaGXXmvGRIDhlA%2BEM9%2FTK828uNmbOIPNGEmba%2FAywb9i8kSXvC9gFDSsGCMNGwX4bsafB1%2B7M601ELl9edvcKgtH4wif3r1njlmuPJR5%2BxwiSwLtJvh3QZoEcRXoT1qeP1j6c6mFHk3Xu8%2F%2F%2BObn1Jez175BLqprd03kd4KW18YdRtQ4dIDL5L%2FyQuEdrgIsPmjifghQuNDcFc%2FaCz%2BMTGpc61wSvVi0t00mrzHE3CjD1pe7CBjqkAUCiewyh2u7e1JrVpoM0plS92Qf0Zff%2FQbHh%2BY7OPqBT9f9wcb76KfKLXjKq4TqzatZNwb3EklKmW8qfam9PunoI%2BdoZWst3klFncA1C7AChns6FGP2U57wjWT%2B2wwYVfYJjblfb71k7cTaKQFxaL8q696S19MJSfUDLfrIoS3SMzwKMQ27%2BLurla7zNzm9OtBx52ZwElP80R4cJS8j9SSp7A6if&X-Amz-Signature=ad972a5ad48eb5ab73f286a3b4ac12649009870a9a43bd27636ce4d982231eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIADQ2Y%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDr7xRSNT9tngtIdmwhaxpW8ZyQXcHf5NfKac0bN3v9AgIhAJja7Hn7lnrQWtoaocetIoSXdtqZ%2FA4ibElKshhoW%2B3FKv8DCD8QABoMNjM3NDIzMTgzODA1IgxlXcOt5bvU4%2FJIls4q3AMVzAOJ7e5QJOWa9A6wm7K7CbwiIYcEH36M9pN2fcZlREwVPzQh4DJ%2BwahhVUkCDv%2FvprZWybHldkBVHkbSgIpa6UzJuXSfGi%2B1qIEfcfQ%2FeN9A7mFupE4wJb%2B9cb%2F%2Fe3lc2dPQ6aFaqhyLo5RcbOuBXeg49vrui25zlfpNTpa%2BO36qy0xi%2BIgGd98rS65Y6yrvmI8IbgCw7vgqYukM%2F0mzNNwJi7UfIcvpCVEuVmxgNncHh1qbOiCp1VgNfWZZ6wr9aWH%2FHg3%2FRQmeJH3s5qqfdBZpcECAwsMls%2BYxokRj5bLa0%2Fk5KK7dmGXvQPd9kEW7PtRHwBl9XErmhXf9ac9lUd8W%2BYrEnGqXT1Q2x04vIlNAwn6aHwkrBWn3udv5W4BJidPuECbQUDW6GpnzaGXXmvGRIDhlA%2BEM9%2FTK828uNmbOIPNGEmba%2FAywb9i8kSXvC9gFDSsGCMNGwX4bsafB1%2B7M601ELl9edvcKgtH4wif3r1njlmuPJR5%2BxwiSwLtJvh3QZoEcRXoT1qeP1j6c6mFHk3Xu8%2F%2F%2BObn1Jez175BLqprd03kd4KW18YdRtQ4dIDL5L%2FyQuEdrgIsPmjifghQuNDcFc%2FaCz%2BMTGpc61wSvVi0t00mrzHE3CjD1pe7CBjqkAUCiewyh2u7e1JrVpoM0plS92Qf0Zff%2FQbHh%2BY7OPqBT9f9wcb76KfKLXjKq4TqzatZNwb3EklKmW8qfam9PunoI%2BdoZWst3klFncA1C7AChns6FGP2U57wjWT%2B2wwYVfYJjblfb71k7cTaKQFxaL8q696S19MJSfUDLfrIoS3SMzwKMQ27%2BLurla7zNzm9OtBx52ZwElP80R4cJS8j9SSp7A6if&X-Amz-Signature=4637d29825b2be7b10d8a3e4f8c2c6fe7e51a6cf091e0c86a09bb7c21af1a09c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
