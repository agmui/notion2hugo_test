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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGX65MRT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHjBo5v9dpUZ2vWq9PWfAK6lHLMNetOk2wFMhH%2BQPXGuAiB476RirjEh1AOR2NwyBWR6Nbot4Dqrlgq%2FBjkJ%2BmPNqyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMg2oX7d%2FuPvRqB2YLKtwDaQ9xKoXiKw8xqAzl70YU3GgQSKj9JSbJ2brFkEk%2BU3u%2BZgFAWbJw9wrFlRyxCpJ%2BfxC2bbdtk%2FODD%2FPIC8cGFIgLeDKhTlddh%2FDDM%2FyqdYmFREmAkL%2B1YY%2BWVtMsB39LRf6oXfKWPbdu3g1brY8PJMPdydb5ojOIID2AGO7SflO8Zj2k%2FgaajF6SIVBEAGZzr6bK7qdnlb6OpBaPTrM1F7sEk4VY3Z1k6dkdnGci82a%2BfhjL%2FalHwbI9bkEbMeP9xI%2FoogLFW6jKZXvP3AZqKy%2F6TOzUKLDcQ%2BlGnBJCewoe7oT43klmA0Ihv9otfC048XBFyF94xss2krOm%2BN%2Bz35yzeIhpSXrxjXPbyLvC6xVUF%2BRmZluzx463cHLnbwjn3sdX4qcJjjzX8tr%2FRbI3wRi4HgugvZNkIMo2Gwlt9fa%2B54g4bsPo2z9vOzUUmJYJRC7AXu%2FRi74yLb7v%2B5GEQ5%2F9c7GhVEHtvgRUj%2FztIOtyRyr%2FRCAObVH85aDcwxNyyFE3xgwvmU805fqNBX4TeY0yxjYJ1QuhaBn1YQpyZlR5uMkNP2oT5%2F4BkjNRRteDxLQ%2BL8%2BbGVB84Xw02OVS7p%2FvryDyrgSkC0jsWpfXJ7wb5WCqy5Jno40FVqMwv5iswwY6pgE4JWAhfzjBfrWIe4DPm8oIgiXSUXXZwRXMFv7f3UirwsZLguegUEIuYtf6Wz8YKzQzaEXxtINf%2BzZYCH9GyVHv%2BohcrA2hsFDSbx%2FPZMinRN4eEpwihB6MSTx7IqydLAmEbcx9hzblXyp0OwvsoON5jCfhBXm3zi8hoYypHKgg4Ywz45IiGaSif%2FIjqpBT7lU7xb9T1GiMRMwtPQp62D5CFiLrp7pb&X-Amz-Signature=80f6ba022331463ea4f562e49492063c123b4f5832d1644c53bf3bc59401347f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGX65MRT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHjBo5v9dpUZ2vWq9PWfAK6lHLMNetOk2wFMhH%2BQPXGuAiB476RirjEh1AOR2NwyBWR6Nbot4Dqrlgq%2FBjkJ%2BmPNqyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMg2oX7d%2FuPvRqB2YLKtwDaQ9xKoXiKw8xqAzl70YU3GgQSKj9JSbJ2brFkEk%2BU3u%2BZgFAWbJw9wrFlRyxCpJ%2BfxC2bbdtk%2FODD%2FPIC8cGFIgLeDKhTlddh%2FDDM%2FyqdYmFREmAkL%2B1YY%2BWVtMsB39LRf6oXfKWPbdu3g1brY8PJMPdydb5ojOIID2AGO7SflO8Zj2k%2FgaajF6SIVBEAGZzr6bK7qdnlb6OpBaPTrM1F7sEk4VY3Z1k6dkdnGci82a%2BfhjL%2FalHwbI9bkEbMeP9xI%2FoogLFW6jKZXvP3AZqKy%2F6TOzUKLDcQ%2BlGnBJCewoe7oT43klmA0Ihv9otfC048XBFyF94xss2krOm%2BN%2Bz35yzeIhpSXrxjXPbyLvC6xVUF%2BRmZluzx463cHLnbwjn3sdX4qcJjjzX8tr%2FRbI3wRi4HgugvZNkIMo2Gwlt9fa%2B54g4bsPo2z9vOzUUmJYJRC7AXu%2FRi74yLb7v%2B5GEQ5%2F9c7GhVEHtvgRUj%2FztIOtyRyr%2FRCAObVH85aDcwxNyyFE3xgwvmU805fqNBX4TeY0yxjYJ1QuhaBn1YQpyZlR5uMkNP2oT5%2F4BkjNRRteDxLQ%2BL8%2BbGVB84Xw02OVS7p%2FvryDyrgSkC0jsWpfXJ7wb5WCqy5Jno40FVqMwv5iswwY6pgE4JWAhfzjBfrWIe4DPm8oIgiXSUXXZwRXMFv7f3UirwsZLguegUEIuYtf6Wz8YKzQzaEXxtINf%2BzZYCH9GyVHv%2BohcrA2hsFDSbx%2FPZMinRN4eEpwihB6MSTx7IqydLAmEbcx9hzblXyp0OwvsoON5jCfhBXm3zi8hoYypHKgg4Ywz45IiGaSif%2FIjqpBT7lU7xb9T1GiMRMwtPQp62D5CFiLrp7pb&X-Amz-Signature=75a660970026c8fbb6a2602f54233f907bc7655a78091dd1260cb6ff43c91dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGX65MRT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHjBo5v9dpUZ2vWq9PWfAK6lHLMNetOk2wFMhH%2BQPXGuAiB476RirjEh1AOR2NwyBWR6Nbot4Dqrlgq%2FBjkJ%2BmPNqyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMg2oX7d%2FuPvRqB2YLKtwDaQ9xKoXiKw8xqAzl70YU3GgQSKj9JSbJ2brFkEk%2BU3u%2BZgFAWbJw9wrFlRyxCpJ%2BfxC2bbdtk%2FODD%2FPIC8cGFIgLeDKhTlddh%2FDDM%2FyqdYmFREmAkL%2B1YY%2BWVtMsB39LRf6oXfKWPbdu3g1brY8PJMPdydb5ojOIID2AGO7SflO8Zj2k%2FgaajF6SIVBEAGZzr6bK7qdnlb6OpBaPTrM1F7sEk4VY3Z1k6dkdnGci82a%2BfhjL%2FalHwbI9bkEbMeP9xI%2FoogLFW6jKZXvP3AZqKy%2F6TOzUKLDcQ%2BlGnBJCewoe7oT43klmA0Ihv9otfC048XBFyF94xss2krOm%2BN%2Bz35yzeIhpSXrxjXPbyLvC6xVUF%2BRmZluzx463cHLnbwjn3sdX4qcJjjzX8tr%2FRbI3wRi4HgugvZNkIMo2Gwlt9fa%2B54g4bsPo2z9vOzUUmJYJRC7AXu%2FRi74yLb7v%2B5GEQ5%2F9c7GhVEHtvgRUj%2FztIOtyRyr%2FRCAObVH85aDcwxNyyFE3xgwvmU805fqNBX4TeY0yxjYJ1QuhaBn1YQpyZlR5uMkNP2oT5%2F4BkjNRRteDxLQ%2BL8%2BbGVB84Xw02OVS7p%2FvryDyrgSkC0jsWpfXJ7wb5WCqy5Jno40FVqMwv5iswwY6pgE4JWAhfzjBfrWIe4DPm8oIgiXSUXXZwRXMFv7f3UirwsZLguegUEIuYtf6Wz8YKzQzaEXxtINf%2BzZYCH9GyVHv%2BohcrA2hsFDSbx%2FPZMinRN4eEpwihB6MSTx7IqydLAmEbcx9hzblXyp0OwvsoON5jCfhBXm3zi8hoYypHKgg4Ywz45IiGaSif%2FIjqpBT7lU7xb9T1GiMRMwtPQp62D5CFiLrp7pb&X-Amz-Signature=cb1ec2dd4aad7af50fdddf8cf379c31c3bbc0beb959e0e5c61ac460957f99d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGX65MRT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHjBo5v9dpUZ2vWq9PWfAK6lHLMNetOk2wFMhH%2BQPXGuAiB476RirjEh1AOR2NwyBWR6Nbot4Dqrlgq%2FBjkJ%2BmPNqyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMg2oX7d%2FuPvRqB2YLKtwDaQ9xKoXiKw8xqAzl70YU3GgQSKj9JSbJ2brFkEk%2BU3u%2BZgFAWbJw9wrFlRyxCpJ%2BfxC2bbdtk%2FODD%2FPIC8cGFIgLeDKhTlddh%2FDDM%2FyqdYmFREmAkL%2B1YY%2BWVtMsB39LRf6oXfKWPbdu3g1brY8PJMPdydb5ojOIID2AGO7SflO8Zj2k%2FgaajF6SIVBEAGZzr6bK7qdnlb6OpBaPTrM1F7sEk4VY3Z1k6dkdnGci82a%2BfhjL%2FalHwbI9bkEbMeP9xI%2FoogLFW6jKZXvP3AZqKy%2F6TOzUKLDcQ%2BlGnBJCewoe7oT43klmA0Ihv9otfC048XBFyF94xss2krOm%2BN%2Bz35yzeIhpSXrxjXPbyLvC6xVUF%2BRmZluzx463cHLnbwjn3sdX4qcJjjzX8tr%2FRbI3wRi4HgugvZNkIMo2Gwlt9fa%2B54g4bsPo2z9vOzUUmJYJRC7AXu%2FRi74yLb7v%2B5GEQ5%2F9c7GhVEHtvgRUj%2FztIOtyRyr%2FRCAObVH85aDcwxNyyFE3xgwvmU805fqNBX4TeY0yxjYJ1QuhaBn1YQpyZlR5uMkNP2oT5%2F4BkjNRRteDxLQ%2BL8%2BbGVB84Xw02OVS7p%2FvryDyrgSkC0jsWpfXJ7wb5WCqy5Jno40FVqMwv5iswwY6pgE4JWAhfzjBfrWIe4DPm8oIgiXSUXXZwRXMFv7f3UirwsZLguegUEIuYtf6Wz8YKzQzaEXxtINf%2BzZYCH9GyVHv%2BohcrA2hsFDSbx%2FPZMinRN4eEpwihB6MSTx7IqydLAmEbcx9hzblXyp0OwvsoON5jCfhBXm3zi8hoYypHKgg4Ywz45IiGaSif%2FIjqpBT7lU7xb9T1GiMRMwtPQp62D5CFiLrp7pb&X-Amz-Signature=9bf13cd6d6af44c838b07676c5218c461bb4e656a7bc55d824475fbcf3aa344c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGX65MRT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHjBo5v9dpUZ2vWq9PWfAK6lHLMNetOk2wFMhH%2BQPXGuAiB476RirjEh1AOR2NwyBWR6Nbot4Dqrlgq%2FBjkJ%2BmPNqyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMg2oX7d%2FuPvRqB2YLKtwDaQ9xKoXiKw8xqAzl70YU3GgQSKj9JSbJ2brFkEk%2BU3u%2BZgFAWbJw9wrFlRyxCpJ%2BfxC2bbdtk%2FODD%2FPIC8cGFIgLeDKhTlddh%2FDDM%2FyqdYmFREmAkL%2B1YY%2BWVtMsB39LRf6oXfKWPbdu3g1brY8PJMPdydb5ojOIID2AGO7SflO8Zj2k%2FgaajF6SIVBEAGZzr6bK7qdnlb6OpBaPTrM1F7sEk4VY3Z1k6dkdnGci82a%2BfhjL%2FalHwbI9bkEbMeP9xI%2FoogLFW6jKZXvP3AZqKy%2F6TOzUKLDcQ%2BlGnBJCewoe7oT43klmA0Ihv9otfC048XBFyF94xss2krOm%2BN%2Bz35yzeIhpSXrxjXPbyLvC6xVUF%2BRmZluzx463cHLnbwjn3sdX4qcJjjzX8tr%2FRbI3wRi4HgugvZNkIMo2Gwlt9fa%2B54g4bsPo2z9vOzUUmJYJRC7AXu%2FRi74yLb7v%2B5GEQ5%2F9c7GhVEHtvgRUj%2FztIOtyRyr%2FRCAObVH85aDcwxNyyFE3xgwvmU805fqNBX4TeY0yxjYJ1QuhaBn1YQpyZlR5uMkNP2oT5%2F4BkjNRRteDxLQ%2BL8%2BbGVB84Xw02OVS7p%2FvryDyrgSkC0jsWpfXJ7wb5WCqy5Jno40FVqMwv5iswwY6pgE4JWAhfzjBfrWIe4DPm8oIgiXSUXXZwRXMFv7f3UirwsZLguegUEIuYtf6Wz8YKzQzaEXxtINf%2BzZYCH9GyVHv%2BohcrA2hsFDSbx%2FPZMinRN4eEpwihB6MSTx7IqydLAmEbcx9hzblXyp0OwvsoON5jCfhBXm3zi8hoYypHKgg4Ywz45IiGaSif%2FIjqpBT7lU7xb9T1GiMRMwtPQp62D5CFiLrp7pb&X-Amz-Signature=40828e88e21b84017eddb4fe5a76ca8900f1438b6cb95e51a880a726c1ca8e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGX65MRT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHjBo5v9dpUZ2vWq9PWfAK6lHLMNetOk2wFMhH%2BQPXGuAiB476RirjEh1AOR2NwyBWR6Nbot4Dqrlgq%2FBjkJ%2BmPNqyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMg2oX7d%2FuPvRqB2YLKtwDaQ9xKoXiKw8xqAzl70YU3GgQSKj9JSbJ2brFkEk%2BU3u%2BZgFAWbJw9wrFlRyxCpJ%2BfxC2bbdtk%2FODD%2FPIC8cGFIgLeDKhTlddh%2FDDM%2FyqdYmFREmAkL%2B1YY%2BWVtMsB39LRf6oXfKWPbdu3g1brY8PJMPdydb5ojOIID2AGO7SflO8Zj2k%2FgaajF6SIVBEAGZzr6bK7qdnlb6OpBaPTrM1F7sEk4VY3Z1k6dkdnGci82a%2BfhjL%2FalHwbI9bkEbMeP9xI%2FoogLFW6jKZXvP3AZqKy%2F6TOzUKLDcQ%2BlGnBJCewoe7oT43klmA0Ihv9otfC048XBFyF94xss2krOm%2BN%2Bz35yzeIhpSXrxjXPbyLvC6xVUF%2BRmZluzx463cHLnbwjn3sdX4qcJjjzX8tr%2FRbI3wRi4HgugvZNkIMo2Gwlt9fa%2B54g4bsPo2z9vOzUUmJYJRC7AXu%2FRi74yLb7v%2B5GEQ5%2F9c7GhVEHtvgRUj%2FztIOtyRyr%2FRCAObVH85aDcwxNyyFE3xgwvmU805fqNBX4TeY0yxjYJ1QuhaBn1YQpyZlR5uMkNP2oT5%2F4BkjNRRteDxLQ%2BL8%2BbGVB84Xw02OVS7p%2FvryDyrgSkC0jsWpfXJ7wb5WCqy5Jno40FVqMwv5iswwY6pgE4JWAhfzjBfrWIe4DPm8oIgiXSUXXZwRXMFv7f3UirwsZLguegUEIuYtf6Wz8YKzQzaEXxtINf%2BzZYCH9GyVHv%2BohcrA2hsFDSbx%2FPZMinRN4eEpwihB6MSTx7IqydLAmEbcx9hzblXyp0OwvsoON5jCfhBXm3zi8hoYypHKgg4Ywz45IiGaSif%2FIjqpBT7lU7xb9T1GiMRMwtPQp62D5CFiLrp7pb&X-Amz-Signature=22945d9e3db6f6df0287882668c8bd1ce1ba0df1714ed907e0842c655d745181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGX65MRT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHjBo5v9dpUZ2vWq9PWfAK6lHLMNetOk2wFMhH%2BQPXGuAiB476RirjEh1AOR2NwyBWR6Nbot4Dqrlgq%2FBjkJ%2BmPNqyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMg2oX7d%2FuPvRqB2YLKtwDaQ9xKoXiKw8xqAzl70YU3GgQSKj9JSbJ2brFkEk%2BU3u%2BZgFAWbJw9wrFlRyxCpJ%2BfxC2bbdtk%2FODD%2FPIC8cGFIgLeDKhTlddh%2FDDM%2FyqdYmFREmAkL%2B1YY%2BWVtMsB39LRf6oXfKWPbdu3g1brY8PJMPdydb5ojOIID2AGO7SflO8Zj2k%2FgaajF6SIVBEAGZzr6bK7qdnlb6OpBaPTrM1F7sEk4VY3Z1k6dkdnGci82a%2BfhjL%2FalHwbI9bkEbMeP9xI%2FoogLFW6jKZXvP3AZqKy%2F6TOzUKLDcQ%2BlGnBJCewoe7oT43klmA0Ihv9otfC048XBFyF94xss2krOm%2BN%2Bz35yzeIhpSXrxjXPbyLvC6xVUF%2BRmZluzx463cHLnbwjn3sdX4qcJjjzX8tr%2FRbI3wRi4HgugvZNkIMo2Gwlt9fa%2B54g4bsPo2z9vOzUUmJYJRC7AXu%2FRi74yLb7v%2B5GEQ5%2F9c7GhVEHtvgRUj%2FztIOtyRyr%2FRCAObVH85aDcwxNyyFE3xgwvmU805fqNBX4TeY0yxjYJ1QuhaBn1YQpyZlR5uMkNP2oT5%2F4BkjNRRteDxLQ%2BL8%2BbGVB84Xw02OVS7p%2FvryDyrgSkC0jsWpfXJ7wb5WCqy5Jno40FVqMwv5iswwY6pgE4JWAhfzjBfrWIe4DPm8oIgiXSUXXZwRXMFv7f3UirwsZLguegUEIuYtf6Wz8YKzQzaEXxtINf%2BzZYCH9GyVHv%2BohcrA2hsFDSbx%2FPZMinRN4eEpwihB6MSTx7IqydLAmEbcx9hzblXyp0OwvsoON5jCfhBXm3zi8hoYypHKgg4Ywz45IiGaSif%2FIjqpBT7lU7xb9T1GiMRMwtPQp62D5CFiLrp7pb&X-Amz-Signature=923cd1b618f2b7c3968baa358144cd4ca1a84e90d201f2abed4ed9a1dd6e28ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
