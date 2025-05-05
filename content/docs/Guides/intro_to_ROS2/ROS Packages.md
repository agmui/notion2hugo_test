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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGFTFCLS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6bin%2BGwzeXcjmDZVYcEYLHH5vxXO2x%2BYXa0mSSMRoWAiEA80P47kg2Sn7XAC6CjGoThX%2BPxMzqln861nd7Y%2BwtxD0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIOuIPDWIC4iDPO1nCrcA4fip8jNSR9e4a%2F7WHMYpqPLsbf%2Fzj0huSdpdjgn5yl8dje4ovGItsw8V9duuLxRGu8ZqjZw0DOBWx8TN%2Btx6SQM0cJVo94Jsxq1VPk34ARd3G%2BeZAhDzA1aPB5hRqN0HYHhIxgdueMaK5qjTtf1CPeqKL77QqNb7q%2BVrKFrVMLP80BwF9UoDmK5Uih%2FasS2rt%2B9livoA%2FFNuW15IfR8pYyVoS0zOFZygMPIt2on0DxbjfDak3968tTBdmEyIcvyiFXgSNGXRSJ1yD6cnT5c6t5Zlkd8hHEkbXd2J34jRkNGK%2FrQd3w4HnLpuIH72DP1gps8zuJVSj%2Fss2j2uCJG%2F0p%2Bb8iETKZDKm6Z3vM3YO8NBRXKJgZpPQJtfuh%2BXWIjjd1eSCDdqpEkK%2F8Bn8e7IBiRxlfukKD0sfny%2FQjUlWS61aAuH0YlsO2suOZp6bTNgOTjkYAigx0G4K9FpZpLGgXShTlB127dmCWfEBn6zkUVxNoQBYj6miHVGcRiPMpISPRzKOZYLaXGbvOeTORpzjULlvb4snS4wVpUFWVtZ1NldlINnsDmOtujv4eUPpZiTv0IlgFY%2BmWnDOZsIaK%2B%2FuXRewZgSPt3Awch0p9yL2feyoU28n4lWKySWt2vMJrP4cAGOqUBn6huSBWSzjFH8mZ57xCGUSOfn9dSMYuG1nW3miseDJ6FcJJSnKoqBfpSBQ8KcCECaXNogNA7jDhSiH0bE2VASVJm78x50KMTdNk6JZBQi2q72cOcUQlMVd4sRq5Q3U8EocXy4f50SNNZmyb9hzM8g26R9i6FDHLbz9jw7i1uAffyZnC%2FwFGCY2MSIdINgQYAVECH3PcMGOqGCTp19T8k5P8jLH9D&X-Amz-Signature=901ef1b6a5bdaafdd9dbe2ba216ecc8820fbd670d79e4975ec537cdf10a0dfa4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGFTFCLS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6bin%2BGwzeXcjmDZVYcEYLHH5vxXO2x%2BYXa0mSSMRoWAiEA80P47kg2Sn7XAC6CjGoThX%2BPxMzqln861nd7Y%2BwtxD0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIOuIPDWIC4iDPO1nCrcA4fip8jNSR9e4a%2F7WHMYpqPLsbf%2Fzj0huSdpdjgn5yl8dje4ovGItsw8V9duuLxRGu8ZqjZw0DOBWx8TN%2Btx6SQM0cJVo94Jsxq1VPk34ARd3G%2BeZAhDzA1aPB5hRqN0HYHhIxgdueMaK5qjTtf1CPeqKL77QqNb7q%2BVrKFrVMLP80BwF9UoDmK5Uih%2FasS2rt%2B9livoA%2FFNuW15IfR8pYyVoS0zOFZygMPIt2on0DxbjfDak3968tTBdmEyIcvyiFXgSNGXRSJ1yD6cnT5c6t5Zlkd8hHEkbXd2J34jRkNGK%2FrQd3w4HnLpuIH72DP1gps8zuJVSj%2Fss2j2uCJG%2F0p%2Bb8iETKZDKm6Z3vM3YO8NBRXKJgZpPQJtfuh%2BXWIjjd1eSCDdqpEkK%2F8Bn8e7IBiRxlfukKD0sfny%2FQjUlWS61aAuH0YlsO2suOZp6bTNgOTjkYAigx0G4K9FpZpLGgXShTlB127dmCWfEBn6zkUVxNoQBYj6miHVGcRiPMpISPRzKOZYLaXGbvOeTORpzjULlvb4snS4wVpUFWVtZ1NldlINnsDmOtujv4eUPpZiTv0IlgFY%2BmWnDOZsIaK%2B%2FuXRewZgSPt3Awch0p9yL2feyoU28n4lWKySWt2vMJrP4cAGOqUBn6huSBWSzjFH8mZ57xCGUSOfn9dSMYuG1nW3miseDJ6FcJJSnKoqBfpSBQ8KcCECaXNogNA7jDhSiH0bE2VASVJm78x50KMTdNk6JZBQi2q72cOcUQlMVd4sRq5Q3U8EocXy4f50SNNZmyb9hzM8g26R9i6FDHLbz9jw7i1uAffyZnC%2FwFGCY2MSIdINgQYAVECH3PcMGOqGCTp19T8k5P8jLH9D&X-Amz-Signature=eb7f392fa95ab8cd9f5c79ded0e418835f1439a78d74d946350a5b9369e8c6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGFTFCLS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6bin%2BGwzeXcjmDZVYcEYLHH5vxXO2x%2BYXa0mSSMRoWAiEA80P47kg2Sn7XAC6CjGoThX%2BPxMzqln861nd7Y%2BwtxD0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIOuIPDWIC4iDPO1nCrcA4fip8jNSR9e4a%2F7WHMYpqPLsbf%2Fzj0huSdpdjgn5yl8dje4ovGItsw8V9duuLxRGu8ZqjZw0DOBWx8TN%2Btx6SQM0cJVo94Jsxq1VPk34ARd3G%2BeZAhDzA1aPB5hRqN0HYHhIxgdueMaK5qjTtf1CPeqKL77QqNb7q%2BVrKFrVMLP80BwF9UoDmK5Uih%2FasS2rt%2B9livoA%2FFNuW15IfR8pYyVoS0zOFZygMPIt2on0DxbjfDak3968tTBdmEyIcvyiFXgSNGXRSJ1yD6cnT5c6t5Zlkd8hHEkbXd2J34jRkNGK%2FrQd3w4HnLpuIH72DP1gps8zuJVSj%2Fss2j2uCJG%2F0p%2Bb8iETKZDKm6Z3vM3YO8NBRXKJgZpPQJtfuh%2BXWIjjd1eSCDdqpEkK%2F8Bn8e7IBiRxlfukKD0sfny%2FQjUlWS61aAuH0YlsO2suOZp6bTNgOTjkYAigx0G4K9FpZpLGgXShTlB127dmCWfEBn6zkUVxNoQBYj6miHVGcRiPMpISPRzKOZYLaXGbvOeTORpzjULlvb4snS4wVpUFWVtZ1NldlINnsDmOtujv4eUPpZiTv0IlgFY%2BmWnDOZsIaK%2B%2FuXRewZgSPt3Awch0p9yL2feyoU28n4lWKySWt2vMJrP4cAGOqUBn6huSBWSzjFH8mZ57xCGUSOfn9dSMYuG1nW3miseDJ6FcJJSnKoqBfpSBQ8KcCECaXNogNA7jDhSiH0bE2VASVJm78x50KMTdNk6JZBQi2q72cOcUQlMVd4sRq5Q3U8EocXy4f50SNNZmyb9hzM8g26R9i6FDHLbz9jw7i1uAffyZnC%2FwFGCY2MSIdINgQYAVECH3PcMGOqGCTp19T8k5P8jLH9D&X-Amz-Signature=63960d820a69f6e1ec9bfd33a65b88c6d61d0c9b4f4e738c86afa806d8f449c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGFTFCLS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6bin%2BGwzeXcjmDZVYcEYLHH5vxXO2x%2BYXa0mSSMRoWAiEA80P47kg2Sn7XAC6CjGoThX%2BPxMzqln861nd7Y%2BwtxD0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIOuIPDWIC4iDPO1nCrcA4fip8jNSR9e4a%2F7WHMYpqPLsbf%2Fzj0huSdpdjgn5yl8dje4ovGItsw8V9duuLxRGu8ZqjZw0DOBWx8TN%2Btx6SQM0cJVo94Jsxq1VPk34ARd3G%2BeZAhDzA1aPB5hRqN0HYHhIxgdueMaK5qjTtf1CPeqKL77QqNb7q%2BVrKFrVMLP80BwF9UoDmK5Uih%2FasS2rt%2B9livoA%2FFNuW15IfR8pYyVoS0zOFZygMPIt2on0DxbjfDak3968tTBdmEyIcvyiFXgSNGXRSJ1yD6cnT5c6t5Zlkd8hHEkbXd2J34jRkNGK%2FrQd3w4HnLpuIH72DP1gps8zuJVSj%2Fss2j2uCJG%2F0p%2Bb8iETKZDKm6Z3vM3YO8NBRXKJgZpPQJtfuh%2BXWIjjd1eSCDdqpEkK%2F8Bn8e7IBiRxlfukKD0sfny%2FQjUlWS61aAuH0YlsO2suOZp6bTNgOTjkYAigx0G4K9FpZpLGgXShTlB127dmCWfEBn6zkUVxNoQBYj6miHVGcRiPMpISPRzKOZYLaXGbvOeTORpzjULlvb4snS4wVpUFWVtZ1NldlINnsDmOtujv4eUPpZiTv0IlgFY%2BmWnDOZsIaK%2B%2FuXRewZgSPt3Awch0p9yL2feyoU28n4lWKySWt2vMJrP4cAGOqUBn6huSBWSzjFH8mZ57xCGUSOfn9dSMYuG1nW3miseDJ6FcJJSnKoqBfpSBQ8KcCECaXNogNA7jDhSiH0bE2VASVJm78x50KMTdNk6JZBQi2q72cOcUQlMVd4sRq5Q3U8EocXy4f50SNNZmyb9hzM8g26R9i6FDHLbz9jw7i1uAffyZnC%2FwFGCY2MSIdINgQYAVECH3PcMGOqGCTp19T8k5P8jLH9D&X-Amz-Signature=51c4fdb860d02f384a668ce15cdf78167bb233d4c18f2012b73f77ef774a16ff&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGFTFCLS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6bin%2BGwzeXcjmDZVYcEYLHH5vxXO2x%2BYXa0mSSMRoWAiEA80P47kg2Sn7XAC6CjGoThX%2BPxMzqln861nd7Y%2BwtxD0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIOuIPDWIC4iDPO1nCrcA4fip8jNSR9e4a%2F7WHMYpqPLsbf%2Fzj0huSdpdjgn5yl8dje4ovGItsw8V9duuLxRGu8ZqjZw0DOBWx8TN%2Btx6SQM0cJVo94Jsxq1VPk34ARd3G%2BeZAhDzA1aPB5hRqN0HYHhIxgdueMaK5qjTtf1CPeqKL77QqNb7q%2BVrKFrVMLP80BwF9UoDmK5Uih%2FasS2rt%2B9livoA%2FFNuW15IfR8pYyVoS0zOFZygMPIt2on0DxbjfDak3968tTBdmEyIcvyiFXgSNGXRSJ1yD6cnT5c6t5Zlkd8hHEkbXd2J34jRkNGK%2FrQd3w4HnLpuIH72DP1gps8zuJVSj%2Fss2j2uCJG%2F0p%2Bb8iETKZDKm6Z3vM3YO8NBRXKJgZpPQJtfuh%2BXWIjjd1eSCDdqpEkK%2F8Bn8e7IBiRxlfukKD0sfny%2FQjUlWS61aAuH0YlsO2suOZp6bTNgOTjkYAigx0G4K9FpZpLGgXShTlB127dmCWfEBn6zkUVxNoQBYj6miHVGcRiPMpISPRzKOZYLaXGbvOeTORpzjULlvb4snS4wVpUFWVtZ1NldlINnsDmOtujv4eUPpZiTv0IlgFY%2BmWnDOZsIaK%2B%2FuXRewZgSPt3Awch0p9yL2feyoU28n4lWKySWt2vMJrP4cAGOqUBn6huSBWSzjFH8mZ57xCGUSOfn9dSMYuG1nW3miseDJ6FcJJSnKoqBfpSBQ8KcCECaXNogNA7jDhSiH0bE2VASVJm78x50KMTdNk6JZBQi2q72cOcUQlMVd4sRq5Q3U8EocXy4f50SNNZmyb9hzM8g26R9i6FDHLbz9jw7i1uAffyZnC%2FwFGCY2MSIdINgQYAVECH3PcMGOqGCTp19T8k5P8jLH9D&X-Amz-Signature=3059dac9d389199756d135d64144502733245c65cdf662aab6700b4fc73c1364&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGFTFCLS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6bin%2BGwzeXcjmDZVYcEYLHH5vxXO2x%2BYXa0mSSMRoWAiEA80P47kg2Sn7XAC6CjGoThX%2BPxMzqln861nd7Y%2BwtxD0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIOuIPDWIC4iDPO1nCrcA4fip8jNSR9e4a%2F7WHMYpqPLsbf%2Fzj0huSdpdjgn5yl8dje4ovGItsw8V9duuLxRGu8ZqjZw0DOBWx8TN%2Btx6SQM0cJVo94Jsxq1VPk34ARd3G%2BeZAhDzA1aPB5hRqN0HYHhIxgdueMaK5qjTtf1CPeqKL77QqNb7q%2BVrKFrVMLP80BwF9UoDmK5Uih%2FasS2rt%2B9livoA%2FFNuW15IfR8pYyVoS0zOFZygMPIt2on0DxbjfDak3968tTBdmEyIcvyiFXgSNGXRSJ1yD6cnT5c6t5Zlkd8hHEkbXd2J34jRkNGK%2FrQd3w4HnLpuIH72DP1gps8zuJVSj%2Fss2j2uCJG%2F0p%2Bb8iETKZDKm6Z3vM3YO8NBRXKJgZpPQJtfuh%2BXWIjjd1eSCDdqpEkK%2F8Bn8e7IBiRxlfukKD0sfny%2FQjUlWS61aAuH0YlsO2suOZp6bTNgOTjkYAigx0G4K9FpZpLGgXShTlB127dmCWfEBn6zkUVxNoQBYj6miHVGcRiPMpISPRzKOZYLaXGbvOeTORpzjULlvb4snS4wVpUFWVtZ1NldlINnsDmOtujv4eUPpZiTv0IlgFY%2BmWnDOZsIaK%2B%2FuXRewZgSPt3Awch0p9yL2feyoU28n4lWKySWt2vMJrP4cAGOqUBn6huSBWSzjFH8mZ57xCGUSOfn9dSMYuG1nW3miseDJ6FcJJSnKoqBfpSBQ8KcCECaXNogNA7jDhSiH0bE2VASVJm78x50KMTdNk6JZBQi2q72cOcUQlMVd4sRq5Q3U8EocXy4f50SNNZmyb9hzM8g26R9i6FDHLbz9jw7i1uAffyZnC%2FwFGCY2MSIdINgQYAVECH3PcMGOqGCTp19T8k5P8jLH9D&X-Amz-Signature=1d8ed9bbc193612e1c5d9df7110f6ab8a14799008a3a7b8a4dc13a2ac736a883&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGFTFCLS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6bin%2BGwzeXcjmDZVYcEYLHH5vxXO2x%2BYXa0mSSMRoWAiEA80P47kg2Sn7XAC6CjGoThX%2BPxMzqln861nd7Y%2BwtxD0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIOuIPDWIC4iDPO1nCrcA4fip8jNSR9e4a%2F7WHMYpqPLsbf%2Fzj0huSdpdjgn5yl8dje4ovGItsw8V9duuLxRGu8ZqjZw0DOBWx8TN%2Btx6SQM0cJVo94Jsxq1VPk34ARd3G%2BeZAhDzA1aPB5hRqN0HYHhIxgdueMaK5qjTtf1CPeqKL77QqNb7q%2BVrKFrVMLP80BwF9UoDmK5Uih%2FasS2rt%2B9livoA%2FFNuW15IfR8pYyVoS0zOFZygMPIt2on0DxbjfDak3968tTBdmEyIcvyiFXgSNGXRSJ1yD6cnT5c6t5Zlkd8hHEkbXd2J34jRkNGK%2FrQd3w4HnLpuIH72DP1gps8zuJVSj%2Fss2j2uCJG%2F0p%2Bb8iETKZDKm6Z3vM3YO8NBRXKJgZpPQJtfuh%2BXWIjjd1eSCDdqpEkK%2F8Bn8e7IBiRxlfukKD0sfny%2FQjUlWS61aAuH0YlsO2suOZp6bTNgOTjkYAigx0G4K9FpZpLGgXShTlB127dmCWfEBn6zkUVxNoQBYj6miHVGcRiPMpISPRzKOZYLaXGbvOeTORpzjULlvb4snS4wVpUFWVtZ1NldlINnsDmOtujv4eUPpZiTv0IlgFY%2BmWnDOZsIaK%2B%2FuXRewZgSPt3Awch0p9yL2feyoU28n4lWKySWt2vMJrP4cAGOqUBn6huSBWSzjFH8mZ57xCGUSOfn9dSMYuG1nW3miseDJ6FcJJSnKoqBfpSBQ8KcCECaXNogNA7jDhSiH0bE2VASVJm78x50KMTdNk6JZBQi2q72cOcUQlMVd4sRq5Q3U8EocXy4f50SNNZmyb9hzM8g26R9i6FDHLbz9jw7i1uAffyZnC%2FwFGCY2MSIdINgQYAVECH3PcMGOqGCTp19T8k5P8jLH9D&X-Amz-Signature=37cc9bd693829cca1129c9486310d83100ce03201762edb6d1d982740888275e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
