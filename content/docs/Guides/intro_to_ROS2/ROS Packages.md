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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI4KA3TA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHDwXvmdmx1DQlx8kI7q%2FXnpKwLNfhxVcmIwedTWPtrIAiEAkqkiK6xk1m3Thgu9SaemcpCqQwtv0d7aU7jYkKAzux4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDgsbCVzeDd18Wn09CrcA5Ax%2BtejrUUiWUqYe%2BYZpl12H4gAma0Qj%2BVu1GIflqBOdbEcrOT%2BHJwWw8Y%2B5I7A5ZGZK6II0Cd2DPHWin3rd3IHAhyRJlyWA7Tx7OfOU1%2FNaBJd1aYIfKpqMnrsyyagE95EL7HeMOsGhHUWlNILh2cR8m5WOihQUqCe0DhFDIgLMnuYzh4nc0itjQ35aaA5SqLFSInZ6Qzwzt4djssMOfP6cUizNzIzNInA1oAQBQnLjx%2B8T4x2ZVZ5kpQlSJzy1BMmk2sYOngawTtE8hSect92F4AEZsSauv3TmMjkwsLrUT%2FINyQw9Jpmeboe5qoZtzvyNKuKSl9Tbg2YnBUD8Q4gIMsnqg0DFFwTb8tZItfOl%2FFDLE1cn6JkZtTtqzR%2FgfFFUFGSHgeuGfhG0gRbsvdNEEIm5TY75IKsRud9sq5wGvCwjZmjmHgSMRHYqHf7A5forZnLgfb21BBjJIXMr3tbiGkCpfWbF9ZctRBmM9ctWRGzEKuuaKLOoyobwjnDDdraqm3lP3kpAjTEYdhdr%2FUFzIbMul6HQjPjaGOwJoFf8DWMucpUBGjpWk6s%2B4%2FBSBUCkkHk%2BWi5Pmb9mFZ5aXVA0rTWvR76i6%2Bl5EEm3zWAjyCtUGCJ6kKZwz%2B2MOyxicQGOqUBeHdBSe7s%2BqACECleb8TPi06dsC5th%2FN6meyJ5QfFQCI4xz0M1FlCOqAq1jnr2%2BOvctv1EtLUEA3CvpAdo9%2BHPY0Ic5XuZS4OETVLxHlvozylt6DO%2FSLWY2js3sDCw9%2Fm9o27ll5EB90xB4rVJ5UDqGf%2F86nTKs%2FeJm%2F98kpNCtvu%2F%2FxULp0glWHe0ran3LquyYbv0pY%2FEA22V4Ydw3JbHt0brzfK&X-Amz-Signature=332304141ff59a00dc7cda36c1deb221ef31f1f5faf32813e9fd0a85ff94fc1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI4KA3TA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHDwXvmdmx1DQlx8kI7q%2FXnpKwLNfhxVcmIwedTWPtrIAiEAkqkiK6xk1m3Thgu9SaemcpCqQwtv0d7aU7jYkKAzux4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDgsbCVzeDd18Wn09CrcA5Ax%2BtejrUUiWUqYe%2BYZpl12H4gAma0Qj%2BVu1GIflqBOdbEcrOT%2BHJwWw8Y%2B5I7A5ZGZK6II0Cd2DPHWin3rd3IHAhyRJlyWA7Tx7OfOU1%2FNaBJd1aYIfKpqMnrsyyagE95EL7HeMOsGhHUWlNILh2cR8m5WOihQUqCe0DhFDIgLMnuYzh4nc0itjQ35aaA5SqLFSInZ6Qzwzt4djssMOfP6cUizNzIzNInA1oAQBQnLjx%2B8T4x2ZVZ5kpQlSJzy1BMmk2sYOngawTtE8hSect92F4AEZsSauv3TmMjkwsLrUT%2FINyQw9Jpmeboe5qoZtzvyNKuKSl9Tbg2YnBUD8Q4gIMsnqg0DFFwTb8tZItfOl%2FFDLE1cn6JkZtTtqzR%2FgfFFUFGSHgeuGfhG0gRbsvdNEEIm5TY75IKsRud9sq5wGvCwjZmjmHgSMRHYqHf7A5forZnLgfb21BBjJIXMr3tbiGkCpfWbF9ZctRBmM9ctWRGzEKuuaKLOoyobwjnDDdraqm3lP3kpAjTEYdhdr%2FUFzIbMul6HQjPjaGOwJoFf8DWMucpUBGjpWk6s%2B4%2FBSBUCkkHk%2BWi5Pmb9mFZ5aXVA0rTWvR76i6%2Bl5EEm3zWAjyCtUGCJ6kKZwz%2B2MOyxicQGOqUBeHdBSe7s%2BqACECleb8TPi06dsC5th%2FN6meyJ5QfFQCI4xz0M1FlCOqAq1jnr2%2BOvctv1EtLUEA3CvpAdo9%2BHPY0Ic5XuZS4OETVLxHlvozylt6DO%2FSLWY2js3sDCw9%2Fm9o27ll5EB90xB4rVJ5UDqGf%2F86nTKs%2FeJm%2F98kpNCtvu%2F%2FxULp0glWHe0ran3LquyYbv0pY%2FEA22V4Ydw3JbHt0brzfK&X-Amz-Signature=63d514dacb9d95fd52d8b5ce56b4b237e12c719985a3d889dfbb9cdcbdc6f1e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI4KA3TA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHDwXvmdmx1DQlx8kI7q%2FXnpKwLNfhxVcmIwedTWPtrIAiEAkqkiK6xk1m3Thgu9SaemcpCqQwtv0d7aU7jYkKAzux4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDgsbCVzeDd18Wn09CrcA5Ax%2BtejrUUiWUqYe%2BYZpl12H4gAma0Qj%2BVu1GIflqBOdbEcrOT%2BHJwWw8Y%2B5I7A5ZGZK6II0Cd2DPHWin3rd3IHAhyRJlyWA7Tx7OfOU1%2FNaBJd1aYIfKpqMnrsyyagE95EL7HeMOsGhHUWlNILh2cR8m5WOihQUqCe0DhFDIgLMnuYzh4nc0itjQ35aaA5SqLFSInZ6Qzwzt4djssMOfP6cUizNzIzNInA1oAQBQnLjx%2B8T4x2ZVZ5kpQlSJzy1BMmk2sYOngawTtE8hSect92F4AEZsSauv3TmMjkwsLrUT%2FINyQw9Jpmeboe5qoZtzvyNKuKSl9Tbg2YnBUD8Q4gIMsnqg0DFFwTb8tZItfOl%2FFDLE1cn6JkZtTtqzR%2FgfFFUFGSHgeuGfhG0gRbsvdNEEIm5TY75IKsRud9sq5wGvCwjZmjmHgSMRHYqHf7A5forZnLgfb21BBjJIXMr3tbiGkCpfWbF9ZctRBmM9ctWRGzEKuuaKLOoyobwjnDDdraqm3lP3kpAjTEYdhdr%2FUFzIbMul6HQjPjaGOwJoFf8DWMucpUBGjpWk6s%2B4%2FBSBUCkkHk%2BWi5Pmb9mFZ5aXVA0rTWvR76i6%2Bl5EEm3zWAjyCtUGCJ6kKZwz%2B2MOyxicQGOqUBeHdBSe7s%2BqACECleb8TPi06dsC5th%2FN6meyJ5QfFQCI4xz0M1FlCOqAq1jnr2%2BOvctv1EtLUEA3CvpAdo9%2BHPY0Ic5XuZS4OETVLxHlvozylt6DO%2FSLWY2js3sDCw9%2Fm9o27ll5EB90xB4rVJ5UDqGf%2F86nTKs%2FeJm%2F98kpNCtvu%2F%2FxULp0glWHe0ran3LquyYbv0pY%2FEA22V4Ydw3JbHt0brzfK&X-Amz-Signature=01fc4109ca93d971e4f804c6aaf57348a207d75c51461e61fd3f6877fbf9ee2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI4KA3TA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHDwXvmdmx1DQlx8kI7q%2FXnpKwLNfhxVcmIwedTWPtrIAiEAkqkiK6xk1m3Thgu9SaemcpCqQwtv0d7aU7jYkKAzux4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDgsbCVzeDd18Wn09CrcA5Ax%2BtejrUUiWUqYe%2BYZpl12H4gAma0Qj%2BVu1GIflqBOdbEcrOT%2BHJwWw8Y%2B5I7A5ZGZK6II0Cd2DPHWin3rd3IHAhyRJlyWA7Tx7OfOU1%2FNaBJd1aYIfKpqMnrsyyagE95EL7HeMOsGhHUWlNILh2cR8m5WOihQUqCe0DhFDIgLMnuYzh4nc0itjQ35aaA5SqLFSInZ6Qzwzt4djssMOfP6cUizNzIzNInA1oAQBQnLjx%2B8T4x2ZVZ5kpQlSJzy1BMmk2sYOngawTtE8hSect92F4AEZsSauv3TmMjkwsLrUT%2FINyQw9Jpmeboe5qoZtzvyNKuKSl9Tbg2YnBUD8Q4gIMsnqg0DFFwTb8tZItfOl%2FFDLE1cn6JkZtTtqzR%2FgfFFUFGSHgeuGfhG0gRbsvdNEEIm5TY75IKsRud9sq5wGvCwjZmjmHgSMRHYqHf7A5forZnLgfb21BBjJIXMr3tbiGkCpfWbF9ZctRBmM9ctWRGzEKuuaKLOoyobwjnDDdraqm3lP3kpAjTEYdhdr%2FUFzIbMul6HQjPjaGOwJoFf8DWMucpUBGjpWk6s%2B4%2FBSBUCkkHk%2BWi5Pmb9mFZ5aXVA0rTWvR76i6%2Bl5EEm3zWAjyCtUGCJ6kKZwz%2B2MOyxicQGOqUBeHdBSe7s%2BqACECleb8TPi06dsC5th%2FN6meyJ5QfFQCI4xz0M1FlCOqAq1jnr2%2BOvctv1EtLUEA3CvpAdo9%2BHPY0Ic5XuZS4OETVLxHlvozylt6DO%2FSLWY2js3sDCw9%2Fm9o27ll5EB90xB4rVJ5UDqGf%2F86nTKs%2FeJm%2F98kpNCtvu%2F%2FxULp0glWHe0ran3LquyYbv0pY%2FEA22V4Ydw3JbHt0brzfK&X-Amz-Signature=318a5568641000c88e1448af7b43a34b58d2c0840b060141a293694b42c75e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI4KA3TA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHDwXvmdmx1DQlx8kI7q%2FXnpKwLNfhxVcmIwedTWPtrIAiEAkqkiK6xk1m3Thgu9SaemcpCqQwtv0d7aU7jYkKAzux4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDgsbCVzeDd18Wn09CrcA5Ax%2BtejrUUiWUqYe%2BYZpl12H4gAma0Qj%2BVu1GIflqBOdbEcrOT%2BHJwWw8Y%2B5I7A5ZGZK6II0Cd2DPHWin3rd3IHAhyRJlyWA7Tx7OfOU1%2FNaBJd1aYIfKpqMnrsyyagE95EL7HeMOsGhHUWlNILh2cR8m5WOihQUqCe0DhFDIgLMnuYzh4nc0itjQ35aaA5SqLFSInZ6Qzwzt4djssMOfP6cUizNzIzNInA1oAQBQnLjx%2B8T4x2ZVZ5kpQlSJzy1BMmk2sYOngawTtE8hSect92F4AEZsSauv3TmMjkwsLrUT%2FINyQw9Jpmeboe5qoZtzvyNKuKSl9Tbg2YnBUD8Q4gIMsnqg0DFFwTb8tZItfOl%2FFDLE1cn6JkZtTtqzR%2FgfFFUFGSHgeuGfhG0gRbsvdNEEIm5TY75IKsRud9sq5wGvCwjZmjmHgSMRHYqHf7A5forZnLgfb21BBjJIXMr3tbiGkCpfWbF9ZctRBmM9ctWRGzEKuuaKLOoyobwjnDDdraqm3lP3kpAjTEYdhdr%2FUFzIbMul6HQjPjaGOwJoFf8DWMucpUBGjpWk6s%2B4%2FBSBUCkkHk%2BWi5Pmb9mFZ5aXVA0rTWvR76i6%2Bl5EEm3zWAjyCtUGCJ6kKZwz%2B2MOyxicQGOqUBeHdBSe7s%2BqACECleb8TPi06dsC5th%2FN6meyJ5QfFQCI4xz0M1FlCOqAq1jnr2%2BOvctv1EtLUEA3CvpAdo9%2BHPY0Ic5XuZS4OETVLxHlvozylt6DO%2FSLWY2js3sDCw9%2Fm9o27ll5EB90xB4rVJ5UDqGf%2F86nTKs%2FeJm%2F98kpNCtvu%2F%2FxULp0glWHe0ran3LquyYbv0pY%2FEA22V4Ydw3JbHt0brzfK&X-Amz-Signature=3d9b39447c139c46c7a7dc978bf7e2c8346bcd06e042d57168289752f0f1837c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI4KA3TA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHDwXvmdmx1DQlx8kI7q%2FXnpKwLNfhxVcmIwedTWPtrIAiEAkqkiK6xk1m3Thgu9SaemcpCqQwtv0d7aU7jYkKAzux4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDgsbCVzeDd18Wn09CrcA5Ax%2BtejrUUiWUqYe%2BYZpl12H4gAma0Qj%2BVu1GIflqBOdbEcrOT%2BHJwWw8Y%2B5I7A5ZGZK6II0Cd2DPHWin3rd3IHAhyRJlyWA7Tx7OfOU1%2FNaBJd1aYIfKpqMnrsyyagE95EL7HeMOsGhHUWlNILh2cR8m5WOihQUqCe0DhFDIgLMnuYzh4nc0itjQ35aaA5SqLFSInZ6Qzwzt4djssMOfP6cUizNzIzNInA1oAQBQnLjx%2B8T4x2ZVZ5kpQlSJzy1BMmk2sYOngawTtE8hSect92F4AEZsSauv3TmMjkwsLrUT%2FINyQw9Jpmeboe5qoZtzvyNKuKSl9Tbg2YnBUD8Q4gIMsnqg0DFFwTb8tZItfOl%2FFDLE1cn6JkZtTtqzR%2FgfFFUFGSHgeuGfhG0gRbsvdNEEIm5TY75IKsRud9sq5wGvCwjZmjmHgSMRHYqHf7A5forZnLgfb21BBjJIXMr3tbiGkCpfWbF9ZctRBmM9ctWRGzEKuuaKLOoyobwjnDDdraqm3lP3kpAjTEYdhdr%2FUFzIbMul6HQjPjaGOwJoFf8DWMucpUBGjpWk6s%2B4%2FBSBUCkkHk%2BWi5Pmb9mFZ5aXVA0rTWvR76i6%2Bl5EEm3zWAjyCtUGCJ6kKZwz%2B2MOyxicQGOqUBeHdBSe7s%2BqACECleb8TPi06dsC5th%2FN6meyJ5QfFQCI4xz0M1FlCOqAq1jnr2%2BOvctv1EtLUEA3CvpAdo9%2BHPY0Ic5XuZS4OETVLxHlvozylt6DO%2FSLWY2js3sDCw9%2Fm9o27ll5EB90xB4rVJ5UDqGf%2F86nTKs%2FeJm%2F98kpNCtvu%2F%2FxULp0glWHe0ran3LquyYbv0pY%2FEA22V4Ydw3JbHt0brzfK&X-Amz-Signature=0305abfc68b897146df6e72af70b2abe56aa25361653482baa75e09b097ed5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI4KA3TA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHDwXvmdmx1DQlx8kI7q%2FXnpKwLNfhxVcmIwedTWPtrIAiEAkqkiK6xk1m3Thgu9SaemcpCqQwtv0d7aU7jYkKAzux4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDgsbCVzeDd18Wn09CrcA5Ax%2BtejrUUiWUqYe%2BYZpl12H4gAma0Qj%2BVu1GIflqBOdbEcrOT%2BHJwWw8Y%2B5I7A5ZGZK6II0Cd2DPHWin3rd3IHAhyRJlyWA7Tx7OfOU1%2FNaBJd1aYIfKpqMnrsyyagE95EL7HeMOsGhHUWlNILh2cR8m5WOihQUqCe0DhFDIgLMnuYzh4nc0itjQ35aaA5SqLFSInZ6Qzwzt4djssMOfP6cUizNzIzNInA1oAQBQnLjx%2B8T4x2ZVZ5kpQlSJzy1BMmk2sYOngawTtE8hSect92F4AEZsSauv3TmMjkwsLrUT%2FINyQw9Jpmeboe5qoZtzvyNKuKSl9Tbg2YnBUD8Q4gIMsnqg0DFFwTb8tZItfOl%2FFDLE1cn6JkZtTtqzR%2FgfFFUFGSHgeuGfhG0gRbsvdNEEIm5TY75IKsRud9sq5wGvCwjZmjmHgSMRHYqHf7A5forZnLgfb21BBjJIXMr3tbiGkCpfWbF9ZctRBmM9ctWRGzEKuuaKLOoyobwjnDDdraqm3lP3kpAjTEYdhdr%2FUFzIbMul6HQjPjaGOwJoFf8DWMucpUBGjpWk6s%2B4%2FBSBUCkkHk%2BWi5Pmb9mFZ5aXVA0rTWvR76i6%2Bl5EEm3zWAjyCtUGCJ6kKZwz%2B2MOyxicQGOqUBeHdBSe7s%2BqACECleb8TPi06dsC5th%2FN6meyJ5QfFQCI4xz0M1FlCOqAq1jnr2%2BOvctv1EtLUEA3CvpAdo9%2BHPY0Ic5XuZS4OETVLxHlvozylt6DO%2FSLWY2js3sDCw9%2Fm9o27ll5EB90xB4rVJ5UDqGf%2F86nTKs%2FeJm%2F98kpNCtvu%2F%2FxULp0glWHe0ran3LquyYbv0pY%2FEA22V4Ydw3JbHt0brzfK&X-Amz-Signature=367ec0df6d9c9c175962be7aba91dd0282039b5b7e72c47410a5717dff008b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
