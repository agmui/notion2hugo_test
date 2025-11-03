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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XF6T75H%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLAwpXpjf%2BJh0sU1c2rMtHVkjA7lD0TQcOIXCNPU4eYgIhAPnTrK5DdptfhbdcmqstG9d4J%2FSozODpribQVjD18cTIKv8DCFMQABoMNjM3NDIzMTgzODA1IgwBdD%2F2DFJNB0eLTCEq3AOuCm7CeG4i4DPiCAfuLRtmiLL2w3CF9JbAQTzgqDGsnN9NNXd507O051vbIjVcXNCEIBb8m7rdRgt%2FFeJLxFz7Ma9wdUolIeKWs69RQSlJkGfSq4zhOy2jRipdFMjPR%2F7Fg%2FvmH1T%2FiYeoLEXlB8jDyrkWoZLizbh8cfPqJY7DdfZ9Li9fCQVjiiCpBj3%2BGyDdQqvWK9NJBcOQby47fPLJvsF45wNL71ysZRdO%2Bn9xF6RhcI057KIiDLuGwv11%2BtIBrM4SQdhYDhyIyxV4ABnfwv1dUEDBkMOt7V3VkgtlPwc%2Fh5nya%2BxdM1w1zh4p8kx0P5mq2YJNTmnPm%2FD7hNckznGMsAecrk6Wy0nnVgfgGJHHNEBzWDWb0EiDXbd%2BYCiPvSMr%2FePfVWnK6%2Brm4wBSF8zphOfLpcHpuIJL7lRkxVj5Oms9J0rOZPPMALx5osMFHtUw%2BFZ%2BDzJiQsuJgJKcJvq%2B%2Ban9pG6dOuQqhtMA9qx8sxArbAKrpeFzDXQM%2BaP5bXCCP2uaLPel8ZKXiD2Ie3uiBf0VbZjWwwdoB1GyVOgFLnuzKmrWHn6ExyRsvbp%2Fg3hIyeySwqiH6sFGWL2GxT%2B%2BR%2BuN6s8sdfF8DjbuEjdwZ4Lm6nrtQDa6hjCQiaDIBjqkATf4%2BdKTSJDOhbZJT9OeCpQOjLeNfERrGoNtZR0IT8hZ5P3A9GbOqRsSVIXgoCNFHKc6hbN%2B0zC10Vg59Enx5UdMg6DEB9mkd%2B0%2BG3LyKL83Y9Q2k1sWhcRRi%2BG5ZlyQGvzvlhZptLL900ebmAVd%2Fna34bRPN8bG48H711R4vLGojLZz6tlxYQqcDZnwbckRC3CKnwAYrRyhsBien%2B7DXV9tfEMs&X-Amz-Signature=2becf31230684f55bb1c7a10ac2a22b37d87f8ae3775ef22e5eac86fd941e865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XF6T75H%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLAwpXpjf%2BJh0sU1c2rMtHVkjA7lD0TQcOIXCNPU4eYgIhAPnTrK5DdptfhbdcmqstG9d4J%2FSozODpribQVjD18cTIKv8DCFMQABoMNjM3NDIzMTgzODA1IgwBdD%2F2DFJNB0eLTCEq3AOuCm7CeG4i4DPiCAfuLRtmiLL2w3CF9JbAQTzgqDGsnN9NNXd507O051vbIjVcXNCEIBb8m7rdRgt%2FFeJLxFz7Ma9wdUolIeKWs69RQSlJkGfSq4zhOy2jRipdFMjPR%2F7Fg%2FvmH1T%2FiYeoLEXlB8jDyrkWoZLizbh8cfPqJY7DdfZ9Li9fCQVjiiCpBj3%2BGyDdQqvWK9NJBcOQby47fPLJvsF45wNL71ysZRdO%2Bn9xF6RhcI057KIiDLuGwv11%2BtIBrM4SQdhYDhyIyxV4ABnfwv1dUEDBkMOt7V3VkgtlPwc%2Fh5nya%2BxdM1w1zh4p8kx0P5mq2YJNTmnPm%2FD7hNckznGMsAecrk6Wy0nnVgfgGJHHNEBzWDWb0EiDXbd%2BYCiPvSMr%2FePfVWnK6%2Brm4wBSF8zphOfLpcHpuIJL7lRkxVj5Oms9J0rOZPPMALx5osMFHtUw%2BFZ%2BDzJiQsuJgJKcJvq%2B%2Ban9pG6dOuQqhtMA9qx8sxArbAKrpeFzDXQM%2BaP5bXCCP2uaLPel8ZKXiD2Ie3uiBf0VbZjWwwdoB1GyVOgFLnuzKmrWHn6ExyRsvbp%2Fg3hIyeySwqiH6sFGWL2GxT%2B%2BR%2BuN6s8sdfF8DjbuEjdwZ4Lm6nrtQDa6hjCQiaDIBjqkATf4%2BdKTSJDOhbZJT9OeCpQOjLeNfERrGoNtZR0IT8hZ5P3A9GbOqRsSVIXgoCNFHKc6hbN%2B0zC10Vg59Enx5UdMg6DEB9mkd%2B0%2BG3LyKL83Y9Q2k1sWhcRRi%2BG5ZlyQGvzvlhZptLL900ebmAVd%2Fna34bRPN8bG48H711R4vLGojLZz6tlxYQqcDZnwbckRC3CKnwAYrRyhsBien%2B7DXV9tfEMs&X-Amz-Signature=50e79c1dd6459bc7b46927b90bda1173cc0885b69f5fae235a49dd581f6a2310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XF6T75H%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLAwpXpjf%2BJh0sU1c2rMtHVkjA7lD0TQcOIXCNPU4eYgIhAPnTrK5DdptfhbdcmqstG9d4J%2FSozODpribQVjD18cTIKv8DCFMQABoMNjM3NDIzMTgzODA1IgwBdD%2F2DFJNB0eLTCEq3AOuCm7CeG4i4DPiCAfuLRtmiLL2w3CF9JbAQTzgqDGsnN9NNXd507O051vbIjVcXNCEIBb8m7rdRgt%2FFeJLxFz7Ma9wdUolIeKWs69RQSlJkGfSq4zhOy2jRipdFMjPR%2F7Fg%2FvmH1T%2FiYeoLEXlB8jDyrkWoZLizbh8cfPqJY7DdfZ9Li9fCQVjiiCpBj3%2BGyDdQqvWK9NJBcOQby47fPLJvsF45wNL71ysZRdO%2Bn9xF6RhcI057KIiDLuGwv11%2BtIBrM4SQdhYDhyIyxV4ABnfwv1dUEDBkMOt7V3VkgtlPwc%2Fh5nya%2BxdM1w1zh4p8kx0P5mq2YJNTmnPm%2FD7hNckznGMsAecrk6Wy0nnVgfgGJHHNEBzWDWb0EiDXbd%2BYCiPvSMr%2FePfVWnK6%2Brm4wBSF8zphOfLpcHpuIJL7lRkxVj5Oms9J0rOZPPMALx5osMFHtUw%2BFZ%2BDzJiQsuJgJKcJvq%2B%2Ban9pG6dOuQqhtMA9qx8sxArbAKrpeFzDXQM%2BaP5bXCCP2uaLPel8ZKXiD2Ie3uiBf0VbZjWwwdoB1GyVOgFLnuzKmrWHn6ExyRsvbp%2Fg3hIyeySwqiH6sFGWL2GxT%2B%2BR%2BuN6s8sdfF8DjbuEjdwZ4Lm6nrtQDa6hjCQiaDIBjqkATf4%2BdKTSJDOhbZJT9OeCpQOjLeNfERrGoNtZR0IT8hZ5P3A9GbOqRsSVIXgoCNFHKc6hbN%2B0zC10Vg59Enx5UdMg6DEB9mkd%2B0%2BG3LyKL83Y9Q2k1sWhcRRi%2BG5ZlyQGvzvlhZptLL900ebmAVd%2Fna34bRPN8bG48H711R4vLGojLZz6tlxYQqcDZnwbckRC3CKnwAYrRyhsBien%2B7DXV9tfEMs&X-Amz-Signature=f66a89b27458302f82d5a00e6169c10d5dcf78774982f2ac8e0c08af311477f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XF6T75H%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLAwpXpjf%2BJh0sU1c2rMtHVkjA7lD0TQcOIXCNPU4eYgIhAPnTrK5DdptfhbdcmqstG9d4J%2FSozODpribQVjD18cTIKv8DCFMQABoMNjM3NDIzMTgzODA1IgwBdD%2F2DFJNB0eLTCEq3AOuCm7CeG4i4DPiCAfuLRtmiLL2w3CF9JbAQTzgqDGsnN9NNXd507O051vbIjVcXNCEIBb8m7rdRgt%2FFeJLxFz7Ma9wdUolIeKWs69RQSlJkGfSq4zhOy2jRipdFMjPR%2F7Fg%2FvmH1T%2FiYeoLEXlB8jDyrkWoZLizbh8cfPqJY7DdfZ9Li9fCQVjiiCpBj3%2BGyDdQqvWK9NJBcOQby47fPLJvsF45wNL71ysZRdO%2Bn9xF6RhcI057KIiDLuGwv11%2BtIBrM4SQdhYDhyIyxV4ABnfwv1dUEDBkMOt7V3VkgtlPwc%2Fh5nya%2BxdM1w1zh4p8kx0P5mq2YJNTmnPm%2FD7hNckznGMsAecrk6Wy0nnVgfgGJHHNEBzWDWb0EiDXbd%2BYCiPvSMr%2FePfVWnK6%2Brm4wBSF8zphOfLpcHpuIJL7lRkxVj5Oms9J0rOZPPMALx5osMFHtUw%2BFZ%2BDzJiQsuJgJKcJvq%2B%2Ban9pG6dOuQqhtMA9qx8sxArbAKrpeFzDXQM%2BaP5bXCCP2uaLPel8ZKXiD2Ie3uiBf0VbZjWwwdoB1GyVOgFLnuzKmrWHn6ExyRsvbp%2Fg3hIyeySwqiH6sFGWL2GxT%2B%2BR%2BuN6s8sdfF8DjbuEjdwZ4Lm6nrtQDa6hjCQiaDIBjqkATf4%2BdKTSJDOhbZJT9OeCpQOjLeNfERrGoNtZR0IT8hZ5P3A9GbOqRsSVIXgoCNFHKc6hbN%2B0zC10Vg59Enx5UdMg6DEB9mkd%2B0%2BG3LyKL83Y9Q2k1sWhcRRi%2BG5ZlyQGvzvlhZptLL900ebmAVd%2Fna34bRPN8bG48H711R4vLGojLZz6tlxYQqcDZnwbckRC3CKnwAYrRyhsBien%2B7DXV9tfEMs&X-Amz-Signature=6cfb80217becc6e89b0d26527e19bc03043c689df806d7cf9e9001c9eaffcb48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XF6T75H%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLAwpXpjf%2BJh0sU1c2rMtHVkjA7lD0TQcOIXCNPU4eYgIhAPnTrK5DdptfhbdcmqstG9d4J%2FSozODpribQVjD18cTIKv8DCFMQABoMNjM3NDIzMTgzODA1IgwBdD%2F2DFJNB0eLTCEq3AOuCm7CeG4i4DPiCAfuLRtmiLL2w3CF9JbAQTzgqDGsnN9NNXd507O051vbIjVcXNCEIBb8m7rdRgt%2FFeJLxFz7Ma9wdUolIeKWs69RQSlJkGfSq4zhOy2jRipdFMjPR%2F7Fg%2FvmH1T%2FiYeoLEXlB8jDyrkWoZLizbh8cfPqJY7DdfZ9Li9fCQVjiiCpBj3%2BGyDdQqvWK9NJBcOQby47fPLJvsF45wNL71ysZRdO%2Bn9xF6RhcI057KIiDLuGwv11%2BtIBrM4SQdhYDhyIyxV4ABnfwv1dUEDBkMOt7V3VkgtlPwc%2Fh5nya%2BxdM1w1zh4p8kx0P5mq2YJNTmnPm%2FD7hNckznGMsAecrk6Wy0nnVgfgGJHHNEBzWDWb0EiDXbd%2BYCiPvSMr%2FePfVWnK6%2Brm4wBSF8zphOfLpcHpuIJL7lRkxVj5Oms9J0rOZPPMALx5osMFHtUw%2BFZ%2BDzJiQsuJgJKcJvq%2B%2Ban9pG6dOuQqhtMA9qx8sxArbAKrpeFzDXQM%2BaP5bXCCP2uaLPel8ZKXiD2Ie3uiBf0VbZjWwwdoB1GyVOgFLnuzKmrWHn6ExyRsvbp%2Fg3hIyeySwqiH6sFGWL2GxT%2B%2BR%2BuN6s8sdfF8DjbuEjdwZ4Lm6nrtQDa6hjCQiaDIBjqkATf4%2BdKTSJDOhbZJT9OeCpQOjLeNfERrGoNtZR0IT8hZ5P3A9GbOqRsSVIXgoCNFHKc6hbN%2B0zC10Vg59Enx5UdMg6DEB9mkd%2B0%2BG3LyKL83Y9Q2k1sWhcRRi%2BG5ZlyQGvzvlhZptLL900ebmAVd%2Fna34bRPN8bG48H711R4vLGojLZz6tlxYQqcDZnwbckRC3CKnwAYrRyhsBien%2B7DXV9tfEMs&X-Amz-Signature=9e628a35f826030a70ca013e4331c47575215286e64479d8ed7f868661a7a548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XF6T75H%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLAwpXpjf%2BJh0sU1c2rMtHVkjA7lD0TQcOIXCNPU4eYgIhAPnTrK5DdptfhbdcmqstG9d4J%2FSozODpribQVjD18cTIKv8DCFMQABoMNjM3NDIzMTgzODA1IgwBdD%2F2DFJNB0eLTCEq3AOuCm7CeG4i4DPiCAfuLRtmiLL2w3CF9JbAQTzgqDGsnN9NNXd507O051vbIjVcXNCEIBb8m7rdRgt%2FFeJLxFz7Ma9wdUolIeKWs69RQSlJkGfSq4zhOy2jRipdFMjPR%2F7Fg%2FvmH1T%2FiYeoLEXlB8jDyrkWoZLizbh8cfPqJY7DdfZ9Li9fCQVjiiCpBj3%2BGyDdQqvWK9NJBcOQby47fPLJvsF45wNL71ysZRdO%2Bn9xF6RhcI057KIiDLuGwv11%2BtIBrM4SQdhYDhyIyxV4ABnfwv1dUEDBkMOt7V3VkgtlPwc%2Fh5nya%2BxdM1w1zh4p8kx0P5mq2YJNTmnPm%2FD7hNckznGMsAecrk6Wy0nnVgfgGJHHNEBzWDWb0EiDXbd%2BYCiPvSMr%2FePfVWnK6%2Brm4wBSF8zphOfLpcHpuIJL7lRkxVj5Oms9J0rOZPPMALx5osMFHtUw%2BFZ%2BDzJiQsuJgJKcJvq%2B%2Ban9pG6dOuQqhtMA9qx8sxArbAKrpeFzDXQM%2BaP5bXCCP2uaLPel8ZKXiD2Ie3uiBf0VbZjWwwdoB1GyVOgFLnuzKmrWHn6ExyRsvbp%2Fg3hIyeySwqiH6sFGWL2GxT%2B%2BR%2BuN6s8sdfF8DjbuEjdwZ4Lm6nrtQDa6hjCQiaDIBjqkATf4%2BdKTSJDOhbZJT9OeCpQOjLeNfERrGoNtZR0IT8hZ5P3A9GbOqRsSVIXgoCNFHKc6hbN%2B0zC10Vg59Enx5UdMg6DEB9mkd%2B0%2BG3LyKL83Y9Q2k1sWhcRRi%2BG5ZlyQGvzvlhZptLL900ebmAVd%2Fna34bRPN8bG48H711R4vLGojLZz6tlxYQqcDZnwbckRC3CKnwAYrRyhsBien%2B7DXV9tfEMs&X-Amz-Signature=73f1040aad9f09e016a91ffb98a60b4ec0909083ef5796754b350d4b40e47519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XF6T75H%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLAwpXpjf%2BJh0sU1c2rMtHVkjA7lD0TQcOIXCNPU4eYgIhAPnTrK5DdptfhbdcmqstG9d4J%2FSozODpribQVjD18cTIKv8DCFMQABoMNjM3NDIzMTgzODA1IgwBdD%2F2DFJNB0eLTCEq3AOuCm7CeG4i4DPiCAfuLRtmiLL2w3CF9JbAQTzgqDGsnN9NNXd507O051vbIjVcXNCEIBb8m7rdRgt%2FFeJLxFz7Ma9wdUolIeKWs69RQSlJkGfSq4zhOy2jRipdFMjPR%2F7Fg%2FvmH1T%2FiYeoLEXlB8jDyrkWoZLizbh8cfPqJY7DdfZ9Li9fCQVjiiCpBj3%2BGyDdQqvWK9NJBcOQby47fPLJvsF45wNL71ysZRdO%2Bn9xF6RhcI057KIiDLuGwv11%2BtIBrM4SQdhYDhyIyxV4ABnfwv1dUEDBkMOt7V3VkgtlPwc%2Fh5nya%2BxdM1w1zh4p8kx0P5mq2YJNTmnPm%2FD7hNckznGMsAecrk6Wy0nnVgfgGJHHNEBzWDWb0EiDXbd%2BYCiPvSMr%2FePfVWnK6%2Brm4wBSF8zphOfLpcHpuIJL7lRkxVj5Oms9J0rOZPPMALx5osMFHtUw%2BFZ%2BDzJiQsuJgJKcJvq%2B%2Ban9pG6dOuQqhtMA9qx8sxArbAKrpeFzDXQM%2BaP5bXCCP2uaLPel8ZKXiD2Ie3uiBf0VbZjWwwdoB1GyVOgFLnuzKmrWHn6ExyRsvbp%2Fg3hIyeySwqiH6sFGWL2GxT%2B%2BR%2BuN6s8sdfF8DjbuEjdwZ4Lm6nrtQDa6hjCQiaDIBjqkATf4%2BdKTSJDOhbZJT9OeCpQOjLeNfERrGoNtZR0IT8hZ5P3A9GbOqRsSVIXgoCNFHKc6hbN%2B0zC10Vg59Enx5UdMg6DEB9mkd%2B0%2BG3LyKL83Y9Q2k1sWhcRRi%2BG5ZlyQGvzvlhZptLL900ebmAVd%2Fna34bRPN8bG48H711R4vLGojLZz6tlxYQqcDZnwbckRC3CKnwAYrRyhsBien%2B7DXV9tfEMs&X-Amz-Signature=240d3b32b741a303743580da9fcd5f7e07f187106a6be8595e0cdc631dfcdd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
