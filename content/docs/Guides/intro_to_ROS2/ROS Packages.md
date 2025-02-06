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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463SOY6L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDaXhIJonD%2Bg%2Fmaoa%2B1eQmtcEbBTd23Cd8mNcHXIeoxpwIgQi1mOJ%2FBcUBNyVq5cHgs9O7ziTDRkaAWBBZIm2TBxJgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEnPGw8ijIcQPiRTayrcA0hEH8bN7fz7VG1%2F%2B43e1LdcqM3bjb%2BzWAPHQpM%2FunnD1XY7cac8wf7SFLpBrYBhxd063O2j5Z7RPTQHekfYwggc5GIVZfMaza5jXyyDlzUw3N2RfUVuTGEhbIarbYJWIKsIHB%2BvhA9KBFTs5zoPUsLH%2BTyn1jp5mADjLoLcOYqHDcOTI1LTDSETt6HcUbqQiSgABu8elg%2FhaHwR2q6qiuvlYriiMmHTJryLZ3ZiGjzW9qorX9lvr9tff9GhiaSQLUzu3rFuxqDqy85UBJLaeCZvdS7LTTdqVNIVkxfMpMeGoKkgptpKbsbG%2F%2FvW0pnVxeNvg7qDKVGlrgtm7AMTxWXT4C7Mi42lwNA93zvqg9ANHIfPWmRVe3KHhsjDeqj4CeeJyquV2Cmpj3SSe1F80XaXUN416v6hiEURC8tGSWaQXKtGhhfK39lXHEdxfhLnfjE0mY9YSCXIPFNu0HgKqg6IXxLlKe5UhA3a58lhs5bT0zzfNL7KuG7oLcSvny9Pfq7GV1%2BGQlNBuK5Mk%2BrPUEU%2B3axYVwamJAFQElqo0l2vLGsLkDPE5Z2OMMuzyNznKWBfDDx1wdmEQE2WmKQZ7oGvvwYnOMlHm0ETYcQv8vHsOpjUqhVTXmKCpwa%2FMODgkL0GOqUBUpLBAec3S2siqh66%2BWb91s1hgGPZzsnskK%2FcttsD6%2FPRNQqejjrbdSy58oYR2Cdr8Ksalwc0uigff7absJOCx2ggBDkWc7RON0N9pLn0J3J0ID1xvnSZXXrN3N18RyXJlvcYvBdhuZKzExwNDMKoA8tbIanCRbSHkjcsoK8io%2BHmN1%2BoUG06OsnUfeEKzoQQd5ySO0bTxEB%2B5G60pkxy1x451VFw&X-Amz-Signature=83e4016d204cbe93a8c1512e0586aec1042b8303164afb2a5c81a8de1d902f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463SOY6L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDaXhIJonD%2Bg%2Fmaoa%2B1eQmtcEbBTd23Cd8mNcHXIeoxpwIgQi1mOJ%2FBcUBNyVq5cHgs9O7ziTDRkaAWBBZIm2TBxJgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEnPGw8ijIcQPiRTayrcA0hEH8bN7fz7VG1%2F%2B43e1LdcqM3bjb%2BzWAPHQpM%2FunnD1XY7cac8wf7SFLpBrYBhxd063O2j5Z7RPTQHekfYwggc5GIVZfMaza5jXyyDlzUw3N2RfUVuTGEhbIarbYJWIKsIHB%2BvhA9KBFTs5zoPUsLH%2BTyn1jp5mADjLoLcOYqHDcOTI1LTDSETt6HcUbqQiSgABu8elg%2FhaHwR2q6qiuvlYriiMmHTJryLZ3ZiGjzW9qorX9lvr9tff9GhiaSQLUzu3rFuxqDqy85UBJLaeCZvdS7LTTdqVNIVkxfMpMeGoKkgptpKbsbG%2F%2FvW0pnVxeNvg7qDKVGlrgtm7AMTxWXT4C7Mi42lwNA93zvqg9ANHIfPWmRVe3KHhsjDeqj4CeeJyquV2Cmpj3SSe1F80XaXUN416v6hiEURC8tGSWaQXKtGhhfK39lXHEdxfhLnfjE0mY9YSCXIPFNu0HgKqg6IXxLlKe5UhA3a58lhs5bT0zzfNL7KuG7oLcSvny9Pfq7GV1%2BGQlNBuK5Mk%2BrPUEU%2B3axYVwamJAFQElqo0l2vLGsLkDPE5Z2OMMuzyNznKWBfDDx1wdmEQE2WmKQZ7oGvvwYnOMlHm0ETYcQv8vHsOpjUqhVTXmKCpwa%2FMODgkL0GOqUBUpLBAec3S2siqh66%2BWb91s1hgGPZzsnskK%2FcttsD6%2FPRNQqejjrbdSy58oYR2Cdr8Ksalwc0uigff7absJOCx2ggBDkWc7RON0N9pLn0J3J0ID1xvnSZXXrN3N18RyXJlvcYvBdhuZKzExwNDMKoA8tbIanCRbSHkjcsoK8io%2BHmN1%2BoUG06OsnUfeEKzoQQd5ySO0bTxEB%2B5G60pkxy1x451VFw&X-Amz-Signature=1f2bb9c14a32af917c3f159a0b9b0d76c1c0356c4c7546d5fcfe307e9f3ad0ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463SOY6L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDaXhIJonD%2Bg%2Fmaoa%2B1eQmtcEbBTd23Cd8mNcHXIeoxpwIgQi1mOJ%2FBcUBNyVq5cHgs9O7ziTDRkaAWBBZIm2TBxJgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEnPGw8ijIcQPiRTayrcA0hEH8bN7fz7VG1%2F%2B43e1LdcqM3bjb%2BzWAPHQpM%2FunnD1XY7cac8wf7SFLpBrYBhxd063O2j5Z7RPTQHekfYwggc5GIVZfMaza5jXyyDlzUw3N2RfUVuTGEhbIarbYJWIKsIHB%2BvhA9KBFTs5zoPUsLH%2BTyn1jp5mADjLoLcOYqHDcOTI1LTDSETt6HcUbqQiSgABu8elg%2FhaHwR2q6qiuvlYriiMmHTJryLZ3ZiGjzW9qorX9lvr9tff9GhiaSQLUzu3rFuxqDqy85UBJLaeCZvdS7LTTdqVNIVkxfMpMeGoKkgptpKbsbG%2F%2FvW0pnVxeNvg7qDKVGlrgtm7AMTxWXT4C7Mi42lwNA93zvqg9ANHIfPWmRVe3KHhsjDeqj4CeeJyquV2Cmpj3SSe1F80XaXUN416v6hiEURC8tGSWaQXKtGhhfK39lXHEdxfhLnfjE0mY9YSCXIPFNu0HgKqg6IXxLlKe5UhA3a58lhs5bT0zzfNL7KuG7oLcSvny9Pfq7GV1%2BGQlNBuK5Mk%2BrPUEU%2B3axYVwamJAFQElqo0l2vLGsLkDPE5Z2OMMuzyNznKWBfDDx1wdmEQE2WmKQZ7oGvvwYnOMlHm0ETYcQv8vHsOpjUqhVTXmKCpwa%2FMODgkL0GOqUBUpLBAec3S2siqh66%2BWb91s1hgGPZzsnskK%2FcttsD6%2FPRNQqejjrbdSy58oYR2Cdr8Ksalwc0uigff7absJOCx2ggBDkWc7RON0N9pLn0J3J0ID1xvnSZXXrN3N18RyXJlvcYvBdhuZKzExwNDMKoA8tbIanCRbSHkjcsoK8io%2BHmN1%2BoUG06OsnUfeEKzoQQd5ySO0bTxEB%2B5G60pkxy1x451VFw&X-Amz-Signature=63393ee8e98dbdf26e3f8babe250c4924075f81db5cbb2b5bcbb21aefc9d8207&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463SOY6L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDaXhIJonD%2Bg%2Fmaoa%2B1eQmtcEbBTd23Cd8mNcHXIeoxpwIgQi1mOJ%2FBcUBNyVq5cHgs9O7ziTDRkaAWBBZIm2TBxJgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEnPGw8ijIcQPiRTayrcA0hEH8bN7fz7VG1%2F%2B43e1LdcqM3bjb%2BzWAPHQpM%2FunnD1XY7cac8wf7SFLpBrYBhxd063O2j5Z7RPTQHekfYwggc5GIVZfMaza5jXyyDlzUw3N2RfUVuTGEhbIarbYJWIKsIHB%2BvhA9KBFTs5zoPUsLH%2BTyn1jp5mADjLoLcOYqHDcOTI1LTDSETt6HcUbqQiSgABu8elg%2FhaHwR2q6qiuvlYriiMmHTJryLZ3ZiGjzW9qorX9lvr9tff9GhiaSQLUzu3rFuxqDqy85UBJLaeCZvdS7LTTdqVNIVkxfMpMeGoKkgptpKbsbG%2F%2FvW0pnVxeNvg7qDKVGlrgtm7AMTxWXT4C7Mi42lwNA93zvqg9ANHIfPWmRVe3KHhsjDeqj4CeeJyquV2Cmpj3SSe1F80XaXUN416v6hiEURC8tGSWaQXKtGhhfK39lXHEdxfhLnfjE0mY9YSCXIPFNu0HgKqg6IXxLlKe5UhA3a58lhs5bT0zzfNL7KuG7oLcSvny9Pfq7GV1%2BGQlNBuK5Mk%2BrPUEU%2B3axYVwamJAFQElqo0l2vLGsLkDPE5Z2OMMuzyNznKWBfDDx1wdmEQE2WmKQZ7oGvvwYnOMlHm0ETYcQv8vHsOpjUqhVTXmKCpwa%2FMODgkL0GOqUBUpLBAec3S2siqh66%2BWb91s1hgGPZzsnskK%2FcttsD6%2FPRNQqejjrbdSy58oYR2Cdr8Ksalwc0uigff7absJOCx2ggBDkWc7RON0N9pLn0J3J0ID1xvnSZXXrN3N18RyXJlvcYvBdhuZKzExwNDMKoA8tbIanCRbSHkjcsoK8io%2BHmN1%2BoUG06OsnUfeEKzoQQd5ySO0bTxEB%2B5G60pkxy1x451VFw&X-Amz-Signature=921de2c85f5c5e363812ae4b617bb2323bd1d9462761840b38f0b72554650e88&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463SOY6L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDaXhIJonD%2Bg%2Fmaoa%2B1eQmtcEbBTd23Cd8mNcHXIeoxpwIgQi1mOJ%2FBcUBNyVq5cHgs9O7ziTDRkaAWBBZIm2TBxJgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEnPGw8ijIcQPiRTayrcA0hEH8bN7fz7VG1%2F%2B43e1LdcqM3bjb%2BzWAPHQpM%2FunnD1XY7cac8wf7SFLpBrYBhxd063O2j5Z7RPTQHekfYwggc5GIVZfMaza5jXyyDlzUw3N2RfUVuTGEhbIarbYJWIKsIHB%2BvhA9KBFTs5zoPUsLH%2BTyn1jp5mADjLoLcOYqHDcOTI1LTDSETt6HcUbqQiSgABu8elg%2FhaHwR2q6qiuvlYriiMmHTJryLZ3ZiGjzW9qorX9lvr9tff9GhiaSQLUzu3rFuxqDqy85UBJLaeCZvdS7LTTdqVNIVkxfMpMeGoKkgptpKbsbG%2F%2FvW0pnVxeNvg7qDKVGlrgtm7AMTxWXT4C7Mi42lwNA93zvqg9ANHIfPWmRVe3KHhsjDeqj4CeeJyquV2Cmpj3SSe1F80XaXUN416v6hiEURC8tGSWaQXKtGhhfK39lXHEdxfhLnfjE0mY9YSCXIPFNu0HgKqg6IXxLlKe5UhA3a58lhs5bT0zzfNL7KuG7oLcSvny9Pfq7GV1%2BGQlNBuK5Mk%2BrPUEU%2B3axYVwamJAFQElqo0l2vLGsLkDPE5Z2OMMuzyNznKWBfDDx1wdmEQE2WmKQZ7oGvvwYnOMlHm0ETYcQv8vHsOpjUqhVTXmKCpwa%2FMODgkL0GOqUBUpLBAec3S2siqh66%2BWb91s1hgGPZzsnskK%2FcttsD6%2FPRNQqejjrbdSy58oYR2Cdr8Ksalwc0uigff7absJOCx2ggBDkWc7RON0N9pLn0J3J0ID1xvnSZXXrN3N18RyXJlvcYvBdhuZKzExwNDMKoA8tbIanCRbSHkjcsoK8io%2BHmN1%2BoUG06OsnUfeEKzoQQd5ySO0bTxEB%2B5G60pkxy1x451VFw&X-Amz-Signature=210e54f494ef69159b8d2e9584a49d39c3ec5710e314bdec0479a5b4ed3ee6fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463SOY6L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDaXhIJonD%2Bg%2Fmaoa%2B1eQmtcEbBTd23Cd8mNcHXIeoxpwIgQi1mOJ%2FBcUBNyVq5cHgs9O7ziTDRkaAWBBZIm2TBxJgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEnPGw8ijIcQPiRTayrcA0hEH8bN7fz7VG1%2F%2B43e1LdcqM3bjb%2BzWAPHQpM%2FunnD1XY7cac8wf7SFLpBrYBhxd063O2j5Z7RPTQHekfYwggc5GIVZfMaza5jXyyDlzUw3N2RfUVuTGEhbIarbYJWIKsIHB%2BvhA9KBFTs5zoPUsLH%2BTyn1jp5mADjLoLcOYqHDcOTI1LTDSETt6HcUbqQiSgABu8elg%2FhaHwR2q6qiuvlYriiMmHTJryLZ3ZiGjzW9qorX9lvr9tff9GhiaSQLUzu3rFuxqDqy85UBJLaeCZvdS7LTTdqVNIVkxfMpMeGoKkgptpKbsbG%2F%2FvW0pnVxeNvg7qDKVGlrgtm7AMTxWXT4C7Mi42lwNA93zvqg9ANHIfPWmRVe3KHhsjDeqj4CeeJyquV2Cmpj3SSe1F80XaXUN416v6hiEURC8tGSWaQXKtGhhfK39lXHEdxfhLnfjE0mY9YSCXIPFNu0HgKqg6IXxLlKe5UhA3a58lhs5bT0zzfNL7KuG7oLcSvny9Pfq7GV1%2BGQlNBuK5Mk%2BrPUEU%2B3axYVwamJAFQElqo0l2vLGsLkDPE5Z2OMMuzyNznKWBfDDx1wdmEQE2WmKQZ7oGvvwYnOMlHm0ETYcQv8vHsOpjUqhVTXmKCpwa%2FMODgkL0GOqUBUpLBAec3S2siqh66%2BWb91s1hgGPZzsnskK%2FcttsD6%2FPRNQqejjrbdSy58oYR2Cdr8Ksalwc0uigff7absJOCx2ggBDkWc7RON0N9pLn0J3J0ID1xvnSZXXrN3N18RyXJlvcYvBdhuZKzExwNDMKoA8tbIanCRbSHkjcsoK8io%2BHmN1%2BoUG06OsnUfeEKzoQQd5ySO0bTxEB%2B5G60pkxy1x451VFw&X-Amz-Signature=36be9bd9a031a881d95bfd325c27fd6d96abc840589edccea21d19670aad6173&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463SOY6L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDaXhIJonD%2Bg%2Fmaoa%2B1eQmtcEbBTd23Cd8mNcHXIeoxpwIgQi1mOJ%2FBcUBNyVq5cHgs9O7ziTDRkaAWBBZIm2TBxJgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEnPGw8ijIcQPiRTayrcA0hEH8bN7fz7VG1%2F%2B43e1LdcqM3bjb%2BzWAPHQpM%2FunnD1XY7cac8wf7SFLpBrYBhxd063O2j5Z7RPTQHekfYwggc5GIVZfMaza5jXyyDlzUw3N2RfUVuTGEhbIarbYJWIKsIHB%2BvhA9KBFTs5zoPUsLH%2BTyn1jp5mADjLoLcOYqHDcOTI1LTDSETt6HcUbqQiSgABu8elg%2FhaHwR2q6qiuvlYriiMmHTJryLZ3ZiGjzW9qorX9lvr9tff9GhiaSQLUzu3rFuxqDqy85UBJLaeCZvdS7LTTdqVNIVkxfMpMeGoKkgptpKbsbG%2F%2FvW0pnVxeNvg7qDKVGlrgtm7AMTxWXT4C7Mi42lwNA93zvqg9ANHIfPWmRVe3KHhsjDeqj4CeeJyquV2Cmpj3SSe1F80XaXUN416v6hiEURC8tGSWaQXKtGhhfK39lXHEdxfhLnfjE0mY9YSCXIPFNu0HgKqg6IXxLlKe5UhA3a58lhs5bT0zzfNL7KuG7oLcSvny9Pfq7GV1%2BGQlNBuK5Mk%2BrPUEU%2B3axYVwamJAFQElqo0l2vLGsLkDPE5Z2OMMuzyNznKWBfDDx1wdmEQE2WmKQZ7oGvvwYnOMlHm0ETYcQv8vHsOpjUqhVTXmKCpwa%2FMODgkL0GOqUBUpLBAec3S2siqh66%2BWb91s1hgGPZzsnskK%2FcttsD6%2FPRNQqejjrbdSy58oYR2Cdr8Ksalwc0uigff7absJOCx2ggBDkWc7RON0N9pLn0J3J0ID1xvnSZXXrN3N18RyXJlvcYvBdhuZKzExwNDMKoA8tbIanCRbSHkjcsoK8io%2BHmN1%2BoUG06OsnUfeEKzoQQd5ySO0bTxEB%2B5G60pkxy1x451VFw&X-Amz-Signature=23e4e585c53ea5115f0510b6c95473108d4c40d7b440f5cc855760b97a8bccfa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
