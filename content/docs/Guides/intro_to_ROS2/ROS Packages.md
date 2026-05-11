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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357FLB57%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDLBgSvZW60YZUFgI2izquj6ACIkFu3lR54%2FRhRSUNlNQIhAN5gXZMtA5fjIG5dKMPzfTQ%2FUef2Wnf8Z1DGwif7sHreKv8DCAwQABoMNjM3NDIzMTgzODA1IgzcSTELIW5cTpb4hWAq3AOtPd09d4isOJhcq7EvX7M%2FIJlLASqj6lWLxHbQnSGx58ekzGyUYlacFjFFPEz4bXvwVXp8kCibOXe9VaM6zlr616vwDUHm2k3VBA4kr7j%2F%2B3gsRXV6YkEzNJIPg46XYuSSLeTEQh5yn5R7QdamsyXjyABrXuqermg3Y0eG7M%2BzZJRE6Xf%2F%2F1OFCZlWTd3JY0xpO2vZTCHOPcXBK7bV4mtIRCZIstAaUPwQu%2F50sB4AzEg2TV5NtCdBNJ2NlrqIgIJWKhN98Jyp1sbwSFsfhenmJOdpTIxPOR%2FmKUnKU4Da5QfkaABNJ8jRAmbNTPA3g4uSESoZz2yXsShEuzAYjc7ToJO43aCdQnhWgYC9UteDfpEjqHAUZtkrX%2FTAHaKIJsWnppMbJdzsA5bwlAXOHI7ZqNdgto%2FQnGqR0Mo8ZzhnQCqSRxxxU03F765m%2Ba36IpviE5IWCl%2BQw7GhEHwDEh3dzvtP7UHtQ3dbR%2FbfnvdlDTMfswXDq7LxCGT56vmbZT78iEGqPvAlHqDour5r0BQTf1aM3kN%2BLbyOa0fs2RCzxoCBK%2BcS36Cj6ectP2z%2Buxkpzqp7yEPWsQF1BAyX6NVGvjeaETIC%2BIgxXdQ%2FsZcaaIDqBauzV%2Fbkk8DNljD8g4XQBjqkAf6sBvMZKVTr4TSkslUvBK5BDjGFCmDUfWY%2FQAlXzPvdN87OwpIHFcm2zyjIJt6seJdenAoITaIDXVlmlrhbzUUx%2BHAGYuKQzAhYSueD%2BWKfQNH005NzrHla7AfksmZLIcdnZmFYAf3XN2PfVe7qm%2BzhOa0eXQBncUV0qZs70F%2BL2sYeuO6%2FIE612ks2wadcBc2%2Fs9sH4FTSWYWiOE%2BLNQjJalKx&X-Amz-Signature=e7e7198662a1a885faf3290a29904cd5c9bd13be22fd0c298d104eb6ae3de8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357FLB57%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDLBgSvZW60YZUFgI2izquj6ACIkFu3lR54%2FRhRSUNlNQIhAN5gXZMtA5fjIG5dKMPzfTQ%2FUef2Wnf8Z1DGwif7sHreKv8DCAwQABoMNjM3NDIzMTgzODA1IgzcSTELIW5cTpb4hWAq3AOtPd09d4isOJhcq7EvX7M%2FIJlLASqj6lWLxHbQnSGx58ekzGyUYlacFjFFPEz4bXvwVXp8kCibOXe9VaM6zlr616vwDUHm2k3VBA4kr7j%2F%2B3gsRXV6YkEzNJIPg46XYuSSLeTEQh5yn5R7QdamsyXjyABrXuqermg3Y0eG7M%2BzZJRE6Xf%2F%2F1OFCZlWTd3JY0xpO2vZTCHOPcXBK7bV4mtIRCZIstAaUPwQu%2F50sB4AzEg2TV5NtCdBNJ2NlrqIgIJWKhN98Jyp1sbwSFsfhenmJOdpTIxPOR%2FmKUnKU4Da5QfkaABNJ8jRAmbNTPA3g4uSESoZz2yXsShEuzAYjc7ToJO43aCdQnhWgYC9UteDfpEjqHAUZtkrX%2FTAHaKIJsWnppMbJdzsA5bwlAXOHI7ZqNdgto%2FQnGqR0Mo8ZzhnQCqSRxxxU03F765m%2Ba36IpviE5IWCl%2BQw7GhEHwDEh3dzvtP7UHtQ3dbR%2FbfnvdlDTMfswXDq7LxCGT56vmbZT78iEGqPvAlHqDour5r0BQTf1aM3kN%2BLbyOa0fs2RCzxoCBK%2BcS36Cj6ectP2z%2Buxkpzqp7yEPWsQF1BAyX6NVGvjeaETIC%2BIgxXdQ%2FsZcaaIDqBauzV%2Fbkk8DNljD8g4XQBjqkAf6sBvMZKVTr4TSkslUvBK5BDjGFCmDUfWY%2FQAlXzPvdN87OwpIHFcm2zyjIJt6seJdenAoITaIDXVlmlrhbzUUx%2BHAGYuKQzAhYSueD%2BWKfQNH005NzrHla7AfksmZLIcdnZmFYAf3XN2PfVe7qm%2BzhOa0eXQBncUV0qZs70F%2BL2sYeuO6%2FIE612ks2wadcBc2%2Fs9sH4FTSWYWiOE%2BLNQjJalKx&X-Amz-Signature=3c611912e083e1e6af0edf80c9017f8a2a0f89f60fcd5c75cddf8d9b7876199a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357FLB57%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDLBgSvZW60YZUFgI2izquj6ACIkFu3lR54%2FRhRSUNlNQIhAN5gXZMtA5fjIG5dKMPzfTQ%2FUef2Wnf8Z1DGwif7sHreKv8DCAwQABoMNjM3NDIzMTgzODA1IgzcSTELIW5cTpb4hWAq3AOtPd09d4isOJhcq7EvX7M%2FIJlLASqj6lWLxHbQnSGx58ekzGyUYlacFjFFPEz4bXvwVXp8kCibOXe9VaM6zlr616vwDUHm2k3VBA4kr7j%2F%2B3gsRXV6YkEzNJIPg46XYuSSLeTEQh5yn5R7QdamsyXjyABrXuqermg3Y0eG7M%2BzZJRE6Xf%2F%2F1OFCZlWTd3JY0xpO2vZTCHOPcXBK7bV4mtIRCZIstAaUPwQu%2F50sB4AzEg2TV5NtCdBNJ2NlrqIgIJWKhN98Jyp1sbwSFsfhenmJOdpTIxPOR%2FmKUnKU4Da5QfkaABNJ8jRAmbNTPA3g4uSESoZz2yXsShEuzAYjc7ToJO43aCdQnhWgYC9UteDfpEjqHAUZtkrX%2FTAHaKIJsWnppMbJdzsA5bwlAXOHI7ZqNdgto%2FQnGqR0Mo8ZzhnQCqSRxxxU03F765m%2Ba36IpviE5IWCl%2BQw7GhEHwDEh3dzvtP7UHtQ3dbR%2FbfnvdlDTMfswXDq7LxCGT56vmbZT78iEGqPvAlHqDour5r0BQTf1aM3kN%2BLbyOa0fs2RCzxoCBK%2BcS36Cj6ectP2z%2Buxkpzqp7yEPWsQF1BAyX6NVGvjeaETIC%2BIgxXdQ%2FsZcaaIDqBauzV%2Fbkk8DNljD8g4XQBjqkAf6sBvMZKVTr4TSkslUvBK5BDjGFCmDUfWY%2FQAlXzPvdN87OwpIHFcm2zyjIJt6seJdenAoITaIDXVlmlrhbzUUx%2BHAGYuKQzAhYSueD%2BWKfQNH005NzrHla7AfksmZLIcdnZmFYAf3XN2PfVe7qm%2BzhOa0eXQBncUV0qZs70F%2BL2sYeuO6%2FIE612ks2wadcBc2%2Fs9sH4FTSWYWiOE%2BLNQjJalKx&X-Amz-Signature=ac5e66faf3f35d084b3b8785cc1db79fe464a2914c6a285a4b34d3a908f80117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357FLB57%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDLBgSvZW60YZUFgI2izquj6ACIkFu3lR54%2FRhRSUNlNQIhAN5gXZMtA5fjIG5dKMPzfTQ%2FUef2Wnf8Z1DGwif7sHreKv8DCAwQABoMNjM3NDIzMTgzODA1IgzcSTELIW5cTpb4hWAq3AOtPd09d4isOJhcq7EvX7M%2FIJlLASqj6lWLxHbQnSGx58ekzGyUYlacFjFFPEz4bXvwVXp8kCibOXe9VaM6zlr616vwDUHm2k3VBA4kr7j%2F%2B3gsRXV6YkEzNJIPg46XYuSSLeTEQh5yn5R7QdamsyXjyABrXuqermg3Y0eG7M%2BzZJRE6Xf%2F%2F1OFCZlWTd3JY0xpO2vZTCHOPcXBK7bV4mtIRCZIstAaUPwQu%2F50sB4AzEg2TV5NtCdBNJ2NlrqIgIJWKhN98Jyp1sbwSFsfhenmJOdpTIxPOR%2FmKUnKU4Da5QfkaABNJ8jRAmbNTPA3g4uSESoZz2yXsShEuzAYjc7ToJO43aCdQnhWgYC9UteDfpEjqHAUZtkrX%2FTAHaKIJsWnppMbJdzsA5bwlAXOHI7ZqNdgto%2FQnGqR0Mo8ZzhnQCqSRxxxU03F765m%2Ba36IpviE5IWCl%2BQw7GhEHwDEh3dzvtP7UHtQ3dbR%2FbfnvdlDTMfswXDq7LxCGT56vmbZT78iEGqPvAlHqDour5r0BQTf1aM3kN%2BLbyOa0fs2RCzxoCBK%2BcS36Cj6ectP2z%2Buxkpzqp7yEPWsQF1BAyX6NVGvjeaETIC%2BIgxXdQ%2FsZcaaIDqBauzV%2Fbkk8DNljD8g4XQBjqkAf6sBvMZKVTr4TSkslUvBK5BDjGFCmDUfWY%2FQAlXzPvdN87OwpIHFcm2zyjIJt6seJdenAoITaIDXVlmlrhbzUUx%2BHAGYuKQzAhYSueD%2BWKfQNH005NzrHla7AfksmZLIcdnZmFYAf3XN2PfVe7qm%2BzhOa0eXQBncUV0qZs70F%2BL2sYeuO6%2FIE612ks2wadcBc2%2Fs9sH4FTSWYWiOE%2BLNQjJalKx&X-Amz-Signature=4afd6d08066ad96d99bee5aabf928b835dc4100af795ef2328c15711e830d0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357FLB57%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDLBgSvZW60YZUFgI2izquj6ACIkFu3lR54%2FRhRSUNlNQIhAN5gXZMtA5fjIG5dKMPzfTQ%2FUef2Wnf8Z1DGwif7sHreKv8DCAwQABoMNjM3NDIzMTgzODA1IgzcSTELIW5cTpb4hWAq3AOtPd09d4isOJhcq7EvX7M%2FIJlLASqj6lWLxHbQnSGx58ekzGyUYlacFjFFPEz4bXvwVXp8kCibOXe9VaM6zlr616vwDUHm2k3VBA4kr7j%2F%2B3gsRXV6YkEzNJIPg46XYuSSLeTEQh5yn5R7QdamsyXjyABrXuqermg3Y0eG7M%2BzZJRE6Xf%2F%2F1OFCZlWTd3JY0xpO2vZTCHOPcXBK7bV4mtIRCZIstAaUPwQu%2F50sB4AzEg2TV5NtCdBNJ2NlrqIgIJWKhN98Jyp1sbwSFsfhenmJOdpTIxPOR%2FmKUnKU4Da5QfkaABNJ8jRAmbNTPA3g4uSESoZz2yXsShEuzAYjc7ToJO43aCdQnhWgYC9UteDfpEjqHAUZtkrX%2FTAHaKIJsWnppMbJdzsA5bwlAXOHI7ZqNdgto%2FQnGqR0Mo8ZzhnQCqSRxxxU03F765m%2Ba36IpviE5IWCl%2BQw7GhEHwDEh3dzvtP7UHtQ3dbR%2FbfnvdlDTMfswXDq7LxCGT56vmbZT78iEGqPvAlHqDour5r0BQTf1aM3kN%2BLbyOa0fs2RCzxoCBK%2BcS36Cj6ectP2z%2Buxkpzqp7yEPWsQF1BAyX6NVGvjeaETIC%2BIgxXdQ%2FsZcaaIDqBauzV%2Fbkk8DNljD8g4XQBjqkAf6sBvMZKVTr4TSkslUvBK5BDjGFCmDUfWY%2FQAlXzPvdN87OwpIHFcm2zyjIJt6seJdenAoITaIDXVlmlrhbzUUx%2BHAGYuKQzAhYSueD%2BWKfQNH005NzrHla7AfksmZLIcdnZmFYAf3XN2PfVe7qm%2BzhOa0eXQBncUV0qZs70F%2BL2sYeuO6%2FIE612ks2wadcBc2%2Fs9sH4FTSWYWiOE%2BLNQjJalKx&X-Amz-Signature=588a7cab2d7ca599c8c78bd593dcf1ff9fa27b8dc444a3fdc033cc943e30b559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357FLB57%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDLBgSvZW60YZUFgI2izquj6ACIkFu3lR54%2FRhRSUNlNQIhAN5gXZMtA5fjIG5dKMPzfTQ%2FUef2Wnf8Z1DGwif7sHreKv8DCAwQABoMNjM3NDIzMTgzODA1IgzcSTELIW5cTpb4hWAq3AOtPd09d4isOJhcq7EvX7M%2FIJlLASqj6lWLxHbQnSGx58ekzGyUYlacFjFFPEz4bXvwVXp8kCibOXe9VaM6zlr616vwDUHm2k3VBA4kr7j%2F%2B3gsRXV6YkEzNJIPg46XYuSSLeTEQh5yn5R7QdamsyXjyABrXuqermg3Y0eG7M%2BzZJRE6Xf%2F%2F1OFCZlWTd3JY0xpO2vZTCHOPcXBK7bV4mtIRCZIstAaUPwQu%2F50sB4AzEg2TV5NtCdBNJ2NlrqIgIJWKhN98Jyp1sbwSFsfhenmJOdpTIxPOR%2FmKUnKU4Da5QfkaABNJ8jRAmbNTPA3g4uSESoZz2yXsShEuzAYjc7ToJO43aCdQnhWgYC9UteDfpEjqHAUZtkrX%2FTAHaKIJsWnppMbJdzsA5bwlAXOHI7ZqNdgto%2FQnGqR0Mo8ZzhnQCqSRxxxU03F765m%2Ba36IpviE5IWCl%2BQw7GhEHwDEh3dzvtP7UHtQ3dbR%2FbfnvdlDTMfswXDq7LxCGT56vmbZT78iEGqPvAlHqDour5r0BQTf1aM3kN%2BLbyOa0fs2RCzxoCBK%2BcS36Cj6ectP2z%2Buxkpzqp7yEPWsQF1BAyX6NVGvjeaETIC%2BIgxXdQ%2FsZcaaIDqBauzV%2Fbkk8DNljD8g4XQBjqkAf6sBvMZKVTr4TSkslUvBK5BDjGFCmDUfWY%2FQAlXzPvdN87OwpIHFcm2zyjIJt6seJdenAoITaIDXVlmlrhbzUUx%2BHAGYuKQzAhYSueD%2BWKfQNH005NzrHla7AfksmZLIcdnZmFYAf3XN2PfVe7qm%2BzhOa0eXQBncUV0qZs70F%2BL2sYeuO6%2FIE612ks2wadcBc2%2Fs9sH4FTSWYWiOE%2BLNQjJalKx&X-Amz-Signature=2143a13d20c220f5f0d768d582f1e1a23732893c6e6f7e4b866947e0160f3e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357FLB57%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDLBgSvZW60YZUFgI2izquj6ACIkFu3lR54%2FRhRSUNlNQIhAN5gXZMtA5fjIG5dKMPzfTQ%2FUef2Wnf8Z1DGwif7sHreKv8DCAwQABoMNjM3NDIzMTgzODA1IgzcSTELIW5cTpb4hWAq3AOtPd09d4isOJhcq7EvX7M%2FIJlLASqj6lWLxHbQnSGx58ekzGyUYlacFjFFPEz4bXvwVXp8kCibOXe9VaM6zlr616vwDUHm2k3VBA4kr7j%2F%2B3gsRXV6YkEzNJIPg46XYuSSLeTEQh5yn5R7QdamsyXjyABrXuqermg3Y0eG7M%2BzZJRE6Xf%2F%2F1OFCZlWTd3JY0xpO2vZTCHOPcXBK7bV4mtIRCZIstAaUPwQu%2F50sB4AzEg2TV5NtCdBNJ2NlrqIgIJWKhN98Jyp1sbwSFsfhenmJOdpTIxPOR%2FmKUnKU4Da5QfkaABNJ8jRAmbNTPA3g4uSESoZz2yXsShEuzAYjc7ToJO43aCdQnhWgYC9UteDfpEjqHAUZtkrX%2FTAHaKIJsWnppMbJdzsA5bwlAXOHI7ZqNdgto%2FQnGqR0Mo8ZzhnQCqSRxxxU03F765m%2Ba36IpviE5IWCl%2BQw7GhEHwDEh3dzvtP7UHtQ3dbR%2FbfnvdlDTMfswXDq7LxCGT56vmbZT78iEGqPvAlHqDour5r0BQTf1aM3kN%2BLbyOa0fs2RCzxoCBK%2BcS36Cj6ectP2z%2Buxkpzqp7yEPWsQF1BAyX6NVGvjeaETIC%2BIgxXdQ%2FsZcaaIDqBauzV%2Fbkk8DNljD8g4XQBjqkAf6sBvMZKVTr4TSkslUvBK5BDjGFCmDUfWY%2FQAlXzPvdN87OwpIHFcm2zyjIJt6seJdenAoITaIDXVlmlrhbzUUx%2BHAGYuKQzAhYSueD%2BWKfQNH005NzrHla7AfksmZLIcdnZmFYAf3XN2PfVe7qm%2BzhOa0eXQBncUV0qZs70F%2BL2sYeuO6%2FIE612ks2wadcBc2%2Fs9sH4FTSWYWiOE%2BLNQjJalKx&X-Amz-Signature=d28fad141eb02c88c46e4757efc61e35b79b183e06043e0153f4f6462c48d4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
