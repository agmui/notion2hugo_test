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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4LPRM4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICnVth%2BdKef4K2lGTxZ5FreIl1WO2VYgFIf1U%2BjAsKRSAiEA118UMJ9KgAI6DHuvYH0n3CMxH0HgKswb9BjZHdz77CcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJrRF0%2BBfVrKK4WlircAziHdIgFviU%2Fc%2BBw9qdfRbvtRvmwdUVZL53nkcoH%2F5aFUE8NX1JXPPYO6i3r%2BUDAv%2Fb72rluTXKXHVfrd2Ov5bgsTAc0cWTwni8D6Rk72FzIeKXsL6DXUJVQbgayFIDe0YjfvbHaJZ33aytVHmPOTvt2dnGuAfje7tn6a7brPZKNiCFQ09jvaoUUpDltSIru9UT1hvgcLZKP02Db2RBNO2e%2Bnaal5cwN338qNJ76G%2B0DznWftB%2BNzkAnbD42Pe75tQZcjkKWIyB7vtbWamH0p9dqZt0SXYPqte6Njn5Szhmt0ZZIPKHCMEq1i9FP2n00Q6QraUWsx56zz644AXIO4AU38t4ATh%2FSFFKfghKzu%2BBeP6HNKBmSpNjXyPCgkUGx42KLO3YuGVxvk7AUBtav6sPIbDhGRUlMi10l09cI9C5o1jIQYibaj0Xt3frgCO8MHp7l0Z5uUnSLv2MN9VecG6XC70aUbue1JWorGBscJ5S9Pbz7BFmHJEFYog%2B2kOrcItLEiKpYgETc85WDYvHJ3Eojh7bw8uTu7wEJiIpBqCiPRqAd%2Bvse%2B6DjJj%2BguroqiewbecdzBvs8Q4dQGkfAq4f8u7ZkueqqIdl8fyuh2EqDUqet8NzSrZcNUaw3MKbCncAGOqUBakmuL2jG1aYQyk7Jrzo4u1uATXZM6xQzw%2FVozwEjQeFOMQjF%2FT3h4n9ahyfHXfwVHVC1QCr9V9JSW9lZ3HoMDc4bXa%2BVQ%2BPpeWomy4T3xiVDjV2xC2m88ByQX5xGqobSRs79eeKkwniKvZjM5RW6VoVK7xrsUx3JtAJn9WN9F5WyfuLegiG%2BcdfswG03odVIfkS%2FjIxUiT9BiZ9CxmbwGkFRf7z4&X-Amz-Signature=18f6054ac122d7235c1f61c88d4ec616c4e553960f117f9984e0a086debae54a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4LPRM4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICnVth%2BdKef4K2lGTxZ5FreIl1WO2VYgFIf1U%2BjAsKRSAiEA118UMJ9KgAI6DHuvYH0n3CMxH0HgKswb9BjZHdz77CcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJrRF0%2BBfVrKK4WlircAziHdIgFviU%2Fc%2BBw9qdfRbvtRvmwdUVZL53nkcoH%2F5aFUE8NX1JXPPYO6i3r%2BUDAv%2Fb72rluTXKXHVfrd2Ov5bgsTAc0cWTwni8D6Rk72FzIeKXsL6DXUJVQbgayFIDe0YjfvbHaJZ33aytVHmPOTvt2dnGuAfje7tn6a7brPZKNiCFQ09jvaoUUpDltSIru9UT1hvgcLZKP02Db2RBNO2e%2Bnaal5cwN338qNJ76G%2B0DznWftB%2BNzkAnbD42Pe75tQZcjkKWIyB7vtbWamH0p9dqZt0SXYPqte6Njn5Szhmt0ZZIPKHCMEq1i9FP2n00Q6QraUWsx56zz644AXIO4AU38t4ATh%2FSFFKfghKzu%2BBeP6HNKBmSpNjXyPCgkUGx42KLO3YuGVxvk7AUBtav6sPIbDhGRUlMi10l09cI9C5o1jIQYibaj0Xt3frgCO8MHp7l0Z5uUnSLv2MN9VecG6XC70aUbue1JWorGBscJ5S9Pbz7BFmHJEFYog%2B2kOrcItLEiKpYgETc85WDYvHJ3Eojh7bw8uTu7wEJiIpBqCiPRqAd%2Bvse%2B6DjJj%2BguroqiewbecdzBvs8Q4dQGkfAq4f8u7ZkueqqIdl8fyuh2EqDUqet8NzSrZcNUaw3MKbCncAGOqUBakmuL2jG1aYQyk7Jrzo4u1uATXZM6xQzw%2FVozwEjQeFOMQjF%2FT3h4n9ahyfHXfwVHVC1QCr9V9JSW9lZ3HoMDc4bXa%2BVQ%2BPpeWomy4T3xiVDjV2xC2m88ByQX5xGqobSRs79eeKkwniKvZjM5RW6VoVK7xrsUx3JtAJn9WN9F5WyfuLegiG%2BcdfswG03odVIfkS%2FjIxUiT9BiZ9CxmbwGkFRf7z4&X-Amz-Signature=b4b2367b2fa62658e8e7709c127e1c18385d51d53694d12c410027087f8ec84b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4LPRM4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICnVth%2BdKef4K2lGTxZ5FreIl1WO2VYgFIf1U%2BjAsKRSAiEA118UMJ9KgAI6DHuvYH0n3CMxH0HgKswb9BjZHdz77CcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJrRF0%2BBfVrKK4WlircAziHdIgFviU%2Fc%2BBw9qdfRbvtRvmwdUVZL53nkcoH%2F5aFUE8NX1JXPPYO6i3r%2BUDAv%2Fb72rluTXKXHVfrd2Ov5bgsTAc0cWTwni8D6Rk72FzIeKXsL6DXUJVQbgayFIDe0YjfvbHaJZ33aytVHmPOTvt2dnGuAfje7tn6a7brPZKNiCFQ09jvaoUUpDltSIru9UT1hvgcLZKP02Db2RBNO2e%2Bnaal5cwN338qNJ76G%2B0DznWftB%2BNzkAnbD42Pe75tQZcjkKWIyB7vtbWamH0p9dqZt0SXYPqte6Njn5Szhmt0ZZIPKHCMEq1i9FP2n00Q6QraUWsx56zz644AXIO4AU38t4ATh%2FSFFKfghKzu%2BBeP6HNKBmSpNjXyPCgkUGx42KLO3YuGVxvk7AUBtav6sPIbDhGRUlMi10l09cI9C5o1jIQYibaj0Xt3frgCO8MHp7l0Z5uUnSLv2MN9VecG6XC70aUbue1JWorGBscJ5S9Pbz7BFmHJEFYog%2B2kOrcItLEiKpYgETc85WDYvHJ3Eojh7bw8uTu7wEJiIpBqCiPRqAd%2Bvse%2B6DjJj%2BguroqiewbecdzBvs8Q4dQGkfAq4f8u7ZkueqqIdl8fyuh2EqDUqet8NzSrZcNUaw3MKbCncAGOqUBakmuL2jG1aYQyk7Jrzo4u1uATXZM6xQzw%2FVozwEjQeFOMQjF%2FT3h4n9ahyfHXfwVHVC1QCr9V9JSW9lZ3HoMDc4bXa%2BVQ%2BPpeWomy4T3xiVDjV2xC2m88ByQX5xGqobSRs79eeKkwniKvZjM5RW6VoVK7xrsUx3JtAJn9WN9F5WyfuLegiG%2BcdfswG03odVIfkS%2FjIxUiT9BiZ9CxmbwGkFRf7z4&X-Amz-Signature=58698181d2d34f174b93abed3d594639fc6032511e6e0abf25019814570ab912&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4LPRM4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICnVth%2BdKef4K2lGTxZ5FreIl1WO2VYgFIf1U%2BjAsKRSAiEA118UMJ9KgAI6DHuvYH0n3CMxH0HgKswb9BjZHdz77CcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJrRF0%2BBfVrKK4WlircAziHdIgFviU%2Fc%2BBw9qdfRbvtRvmwdUVZL53nkcoH%2F5aFUE8NX1JXPPYO6i3r%2BUDAv%2Fb72rluTXKXHVfrd2Ov5bgsTAc0cWTwni8D6Rk72FzIeKXsL6DXUJVQbgayFIDe0YjfvbHaJZ33aytVHmPOTvt2dnGuAfje7tn6a7brPZKNiCFQ09jvaoUUpDltSIru9UT1hvgcLZKP02Db2RBNO2e%2Bnaal5cwN338qNJ76G%2B0DznWftB%2BNzkAnbD42Pe75tQZcjkKWIyB7vtbWamH0p9dqZt0SXYPqte6Njn5Szhmt0ZZIPKHCMEq1i9FP2n00Q6QraUWsx56zz644AXIO4AU38t4ATh%2FSFFKfghKzu%2BBeP6HNKBmSpNjXyPCgkUGx42KLO3YuGVxvk7AUBtav6sPIbDhGRUlMi10l09cI9C5o1jIQYibaj0Xt3frgCO8MHp7l0Z5uUnSLv2MN9VecG6XC70aUbue1JWorGBscJ5S9Pbz7BFmHJEFYog%2B2kOrcItLEiKpYgETc85WDYvHJ3Eojh7bw8uTu7wEJiIpBqCiPRqAd%2Bvse%2B6DjJj%2BguroqiewbecdzBvs8Q4dQGkfAq4f8u7ZkueqqIdl8fyuh2EqDUqet8NzSrZcNUaw3MKbCncAGOqUBakmuL2jG1aYQyk7Jrzo4u1uATXZM6xQzw%2FVozwEjQeFOMQjF%2FT3h4n9ahyfHXfwVHVC1QCr9V9JSW9lZ3HoMDc4bXa%2BVQ%2BPpeWomy4T3xiVDjV2xC2m88ByQX5xGqobSRs79eeKkwniKvZjM5RW6VoVK7xrsUx3JtAJn9WN9F5WyfuLegiG%2BcdfswG03odVIfkS%2FjIxUiT9BiZ9CxmbwGkFRf7z4&X-Amz-Signature=1198f8cd2fe39f2d0c6194a570c64d8678757b4ae7286ce357b0619a0167d370&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4LPRM4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICnVth%2BdKef4K2lGTxZ5FreIl1WO2VYgFIf1U%2BjAsKRSAiEA118UMJ9KgAI6DHuvYH0n3CMxH0HgKswb9BjZHdz77CcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJrRF0%2BBfVrKK4WlircAziHdIgFviU%2Fc%2BBw9qdfRbvtRvmwdUVZL53nkcoH%2F5aFUE8NX1JXPPYO6i3r%2BUDAv%2Fb72rluTXKXHVfrd2Ov5bgsTAc0cWTwni8D6Rk72FzIeKXsL6DXUJVQbgayFIDe0YjfvbHaJZ33aytVHmPOTvt2dnGuAfje7tn6a7brPZKNiCFQ09jvaoUUpDltSIru9UT1hvgcLZKP02Db2RBNO2e%2Bnaal5cwN338qNJ76G%2B0DznWftB%2BNzkAnbD42Pe75tQZcjkKWIyB7vtbWamH0p9dqZt0SXYPqte6Njn5Szhmt0ZZIPKHCMEq1i9FP2n00Q6QraUWsx56zz644AXIO4AU38t4ATh%2FSFFKfghKzu%2BBeP6HNKBmSpNjXyPCgkUGx42KLO3YuGVxvk7AUBtav6sPIbDhGRUlMi10l09cI9C5o1jIQYibaj0Xt3frgCO8MHp7l0Z5uUnSLv2MN9VecG6XC70aUbue1JWorGBscJ5S9Pbz7BFmHJEFYog%2B2kOrcItLEiKpYgETc85WDYvHJ3Eojh7bw8uTu7wEJiIpBqCiPRqAd%2Bvse%2B6DjJj%2BguroqiewbecdzBvs8Q4dQGkfAq4f8u7ZkueqqIdl8fyuh2EqDUqet8NzSrZcNUaw3MKbCncAGOqUBakmuL2jG1aYQyk7Jrzo4u1uATXZM6xQzw%2FVozwEjQeFOMQjF%2FT3h4n9ahyfHXfwVHVC1QCr9V9JSW9lZ3HoMDc4bXa%2BVQ%2BPpeWomy4T3xiVDjV2xC2m88ByQX5xGqobSRs79eeKkwniKvZjM5RW6VoVK7xrsUx3JtAJn9WN9F5WyfuLegiG%2BcdfswG03odVIfkS%2FjIxUiT9BiZ9CxmbwGkFRf7z4&X-Amz-Signature=b9632eea5fcd79646d34cfd2528b8dba48e0cb25a03332e045c1e1785e593fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4LPRM4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICnVth%2BdKef4K2lGTxZ5FreIl1WO2VYgFIf1U%2BjAsKRSAiEA118UMJ9KgAI6DHuvYH0n3CMxH0HgKswb9BjZHdz77CcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJrRF0%2BBfVrKK4WlircAziHdIgFviU%2Fc%2BBw9qdfRbvtRvmwdUVZL53nkcoH%2F5aFUE8NX1JXPPYO6i3r%2BUDAv%2Fb72rluTXKXHVfrd2Ov5bgsTAc0cWTwni8D6Rk72FzIeKXsL6DXUJVQbgayFIDe0YjfvbHaJZ33aytVHmPOTvt2dnGuAfje7tn6a7brPZKNiCFQ09jvaoUUpDltSIru9UT1hvgcLZKP02Db2RBNO2e%2Bnaal5cwN338qNJ76G%2B0DznWftB%2BNzkAnbD42Pe75tQZcjkKWIyB7vtbWamH0p9dqZt0SXYPqte6Njn5Szhmt0ZZIPKHCMEq1i9FP2n00Q6QraUWsx56zz644AXIO4AU38t4ATh%2FSFFKfghKzu%2BBeP6HNKBmSpNjXyPCgkUGx42KLO3YuGVxvk7AUBtav6sPIbDhGRUlMi10l09cI9C5o1jIQYibaj0Xt3frgCO8MHp7l0Z5uUnSLv2MN9VecG6XC70aUbue1JWorGBscJ5S9Pbz7BFmHJEFYog%2B2kOrcItLEiKpYgETc85WDYvHJ3Eojh7bw8uTu7wEJiIpBqCiPRqAd%2Bvse%2B6DjJj%2BguroqiewbecdzBvs8Q4dQGkfAq4f8u7ZkueqqIdl8fyuh2EqDUqet8NzSrZcNUaw3MKbCncAGOqUBakmuL2jG1aYQyk7Jrzo4u1uATXZM6xQzw%2FVozwEjQeFOMQjF%2FT3h4n9ahyfHXfwVHVC1QCr9V9JSW9lZ3HoMDc4bXa%2BVQ%2BPpeWomy4T3xiVDjV2xC2m88ByQX5xGqobSRs79eeKkwniKvZjM5RW6VoVK7xrsUx3JtAJn9WN9F5WyfuLegiG%2BcdfswG03odVIfkS%2FjIxUiT9BiZ9CxmbwGkFRf7z4&X-Amz-Signature=ac7c9de52f54a642dca1f9b8d17c9f8547aea00ba0040de1114c13a4672c6462&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4LPRM4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICnVth%2BdKef4K2lGTxZ5FreIl1WO2VYgFIf1U%2BjAsKRSAiEA118UMJ9KgAI6DHuvYH0n3CMxH0HgKswb9BjZHdz77CcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJrRF0%2BBfVrKK4WlircAziHdIgFviU%2Fc%2BBw9qdfRbvtRvmwdUVZL53nkcoH%2F5aFUE8NX1JXPPYO6i3r%2BUDAv%2Fb72rluTXKXHVfrd2Ov5bgsTAc0cWTwni8D6Rk72FzIeKXsL6DXUJVQbgayFIDe0YjfvbHaJZ33aytVHmPOTvt2dnGuAfje7tn6a7brPZKNiCFQ09jvaoUUpDltSIru9UT1hvgcLZKP02Db2RBNO2e%2Bnaal5cwN338qNJ76G%2B0DznWftB%2BNzkAnbD42Pe75tQZcjkKWIyB7vtbWamH0p9dqZt0SXYPqte6Njn5Szhmt0ZZIPKHCMEq1i9FP2n00Q6QraUWsx56zz644AXIO4AU38t4ATh%2FSFFKfghKzu%2BBeP6HNKBmSpNjXyPCgkUGx42KLO3YuGVxvk7AUBtav6sPIbDhGRUlMi10l09cI9C5o1jIQYibaj0Xt3frgCO8MHp7l0Z5uUnSLv2MN9VecG6XC70aUbue1JWorGBscJ5S9Pbz7BFmHJEFYog%2B2kOrcItLEiKpYgETc85WDYvHJ3Eojh7bw8uTu7wEJiIpBqCiPRqAd%2Bvse%2B6DjJj%2BguroqiewbecdzBvs8Q4dQGkfAq4f8u7ZkueqqIdl8fyuh2EqDUqet8NzSrZcNUaw3MKbCncAGOqUBakmuL2jG1aYQyk7Jrzo4u1uATXZM6xQzw%2FVozwEjQeFOMQjF%2FT3h4n9ahyfHXfwVHVC1QCr9V9JSW9lZ3HoMDc4bXa%2BVQ%2BPpeWomy4T3xiVDjV2xC2m88ByQX5xGqobSRs79eeKkwniKvZjM5RW6VoVK7xrsUx3JtAJn9WN9F5WyfuLegiG%2BcdfswG03odVIfkS%2FjIxUiT9BiZ9CxmbwGkFRf7z4&X-Amz-Signature=bdfd99c0a07d58f0d5fe709bf317105baa19382ce37aa9bc967fd2f53eea052c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
