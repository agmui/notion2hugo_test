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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYTWP6V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICN5MtMjeKv4k1hOOnf%2FgPnpwEz6AuE2qRoPyS3UmH1wAiB2BGCOrfm9YYRMoZnTf3tpWGJhlNjTN7QygTOwhlrfFSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGVwYMBCuCKq48eEKtwD%2BTtGJs6y%2FBRo%2Bbb4ce2m%2FPfX%2FkW4NF%2BYhbbKjxhEPJPTPaoWTCwl7cXxGY3kHtuX9Z%2Bxb2OzQNwnhYrw66CyRdk7LdBZCLvXEiUrvzKE9%2BomKHJXr2i7S4HesgeEqZJDrJCyJXcaYbWMqmIUYGZXR%2BV5IxNBYsO1QuQDuAL9Wf2%2F%2BoPGy%2BrHPb0SSGKgT22sqd31ZaAEFVv9BqFc2md7iwCkJMbdmn4HrQR6hwE48x6NO2uEHLBboAwjxV8KBOOsVjfH1x8vZ6LLXdSg0V5gYZM3ZYXrDWx%2Bb6Yxmm%2FAAqvJgNlCdz4pJt%2BWXXi7b0PORs4%2F16%2FRBo5FH%2BFRRSFFXCfB3LImMxv3SJc0Gqa6Hi919GbH7eRdjxCCA3uoImgm3oc5XwgHAJxPZy73A8dDGJzkI1thoLjBvgAd0AxwLGggD5teJgDE229bRS7Cvae2C1lbzKKfNvnUsUuLo0ceQ1lCUJiCSdFLwKKn%2BHQZl0xDjAT39gI8sZ4if%2Fl1T8VHlcET%2BRJXzqngXr2CnP0zjZwWG58XuC0AAoSPPGFrjmlwQTpyjJ1eDopo88L9UT6hBwbk7GDuDX2cjzunc6aiBr9SQsp0glBjnVPe%2F7S%2BtrudB7kaL%2F6GjbZC2oUwjPqhygY6pgHDv4KR3g6wDS4Lej%2FcF%2FhueL4ZLLATxoKo7ywc3bjtE%2FlyGmAow376dgmcKbXk8UN2bLmAPH%2BX2%2BesINAdsO2s8KSoqfpuCbqaVmGHWLydJx58hBy0gec0Oxq3NweXAnx%2BQ4JQdx1BjbJH99iRuDgvAp%2BGx9XDg7eBYTXzikuuew9mtDynlF%2BLrr95q1lLlXNtHohGj3gMpbdavqunV10b3aPYneAa&X-Amz-Signature=7486329f7daec11412397e81a6138ce2926b72dd3cc0c1cca702788a97f5dee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYTWP6V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICN5MtMjeKv4k1hOOnf%2FgPnpwEz6AuE2qRoPyS3UmH1wAiB2BGCOrfm9YYRMoZnTf3tpWGJhlNjTN7QygTOwhlrfFSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGVwYMBCuCKq48eEKtwD%2BTtGJs6y%2FBRo%2Bbb4ce2m%2FPfX%2FkW4NF%2BYhbbKjxhEPJPTPaoWTCwl7cXxGY3kHtuX9Z%2Bxb2OzQNwnhYrw66CyRdk7LdBZCLvXEiUrvzKE9%2BomKHJXr2i7S4HesgeEqZJDrJCyJXcaYbWMqmIUYGZXR%2BV5IxNBYsO1QuQDuAL9Wf2%2F%2BoPGy%2BrHPb0SSGKgT22sqd31ZaAEFVv9BqFc2md7iwCkJMbdmn4HrQR6hwE48x6NO2uEHLBboAwjxV8KBOOsVjfH1x8vZ6LLXdSg0V5gYZM3ZYXrDWx%2Bb6Yxmm%2FAAqvJgNlCdz4pJt%2BWXXi7b0PORs4%2F16%2FRBo5FH%2BFRRSFFXCfB3LImMxv3SJc0Gqa6Hi919GbH7eRdjxCCA3uoImgm3oc5XwgHAJxPZy73A8dDGJzkI1thoLjBvgAd0AxwLGggD5teJgDE229bRS7Cvae2C1lbzKKfNvnUsUuLo0ceQ1lCUJiCSdFLwKKn%2BHQZl0xDjAT39gI8sZ4if%2Fl1T8VHlcET%2BRJXzqngXr2CnP0zjZwWG58XuC0AAoSPPGFrjmlwQTpyjJ1eDopo88L9UT6hBwbk7GDuDX2cjzunc6aiBr9SQsp0glBjnVPe%2F7S%2BtrudB7kaL%2F6GjbZC2oUwjPqhygY6pgHDv4KR3g6wDS4Lej%2FcF%2FhueL4ZLLATxoKo7ywc3bjtE%2FlyGmAow376dgmcKbXk8UN2bLmAPH%2BX2%2BesINAdsO2s8KSoqfpuCbqaVmGHWLydJx58hBy0gec0Oxq3NweXAnx%2BQ4JQdx1BjbJH99iRuDgvAp%2BGx9XDg7eBYTXzikuuew9mtDynlF%2BLrr95q1lLlXNtHohGj3gMpbdavqunV10b3aPYneAa&X-Amz-Signature=4c08da16a750a40f070f090591c0285d1a4c3b1686c60bcbe692668f8ce415fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYTWP6V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICN5MtMjeKv4k1hOOnf%2FgPnpwEz6AuE2qRoPyS3UmH1wAiB2BGCOrfm9YYRMoZnTf3tpWGJhlNjTN7QygTOwhlrfFSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGVwYMBCuCKq48eEKtwD%2BTtGJs6y%2FBRo%2Bbb4ce2m%2FPfX%2FkW4NF%2BYhbbKjxhEPJPTPaoWTCwl7cXxGY3kHtuX9Z%2Bxb2OzQNwnhYrw66CyRdk7LdBZCLvXEiUrvzKE9%2BomKHJXr2i7S4HesgeEqZJDrJCyJXcaYbWMqmIUYGZXR%2BV5IxNBYsO1QuQDuAL9Wf2%2F%2BoPGy%2BrHPb0SSGKgT22sqd31ZaAEFVv9BqFc2md7iwCkJMbdmn4HrQR6hwE48x6NO2uEHLBboAwjxV8KBOOsVjfH1x8vZ6LLXdSg0V5gYZM3ZYXrDWx%2Bb6Yxmm%2FAAqvJgNlCdz4pJt%2BWXXi7b0PORs4%2F16%2FRBo5FH%2BFRRSFFXCfB3LImMxv3SJc0Gqa6Hi919GbH7eRdjxCCA3uoImgm3oc5XwgHAJxPZy73A8dDGJzkI1thoLjBvgAd0AxwLGggD5teJgDE229bRS7Cvae2C1lbzKKfNvnUsUuLo0ceQ1lCUJiCSdFLwKKn%2BHQZl0xDjAT39gI8sZ4if%2Fl1T8VHlcET%2BRJXzqngXr2CnP0zjZwWG58XuC0AAoSPPGFrjmlwQTpyjJ1eDopo88L9UT6hBwbk7GDuDX2cjzunc6aiBr9SQsp0glBjnVPe%2F7S%2BtrudB7kaL%2F6GjbZC2oUwjPqhygY6pgHDv4KR3g6wDS4Lej%2FcF%2FhueL4ZLLATxoKo7ywc3bjtE%2FlyGmAow376dgmcKbXk8UN2bLmAPH%2BX2%2BesINAdsO2s8KSoqfpuCbqaVmGHWLydJx58hBy0gec0Oxq3NweXAnx%2BQ4JQdx1BjbJH99iRuDgvAp%2BGx9XDg7eBYTXzikuuew9mtDynlF%2BLrr95q1lLlXNtHohGj3gMpbdavqunV10b3aPYneAa&X-Amz-Signature=13810b873e8574720de5b596890130d0ad13861093a32c2180bb6ee65b26cea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYTWP6V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICN5MtMjeKv4k1hOOnf%2FgPnpwEz6AuE2qRoPyS3UmH1wAiB2BGCOrfm9YYRMoZnTf3tpWGJhlNjTN7QygTOwhlrfFSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGVwYMBCuCKq48eEKtwD%2BTtGJs6y%2FBRo%2Bbb4ce2m%2FPfX%2FkW4NF%2BYhbbKjxhEPJPTPaoWTCwl7cXxGY3kHtuX9Z%2Bxb2OzQNwnhYrw66CyRdk7LdBZCLvXEiUrvzKE9%2BomKHJXr2i7S4HesgeEqZJDrJCyJXcaYbWMqmIUYGZXR%2BV5IxNBYsO1QuQDuAL9Wf2%2F%2BoPGy%2BrHPb0SSGKgT22sqd31ZaAEFVv9BqFc2md7iwCkJMbdmn4HrQR6hwE48x6NO2uEHLBboAwjxV8KBOOsVjfH1x8vZ6LLXdSg0V5gYZM3ZYXrDWx%2Bb6Yxmm%2FAAqvJgNlCdz4pJt%2BWXXi7b0PORs4%2F16%2FRBo5FH%2BFRRSFFXCfB3LImMxv3SJc0Gqa6Hi919GbH7eRdjxCCA3uoImgm3oc5XwgHAJxPZy73A8dDGJzkI1thoLjBvgAd0AxwLGggD5teJgDE229bRS7Cvae2C1lbzKKfNvnUsUuLo0ceQ1lCUJiCSdFLwKKn%2BHQZl0xDjAT39gI8sZ4if%2Fl1T8VHlcET%2BRJXzqngXr2CnP0zjZwWG58XuC0AAoSPPGFrjmlwQTpyjJ1eDopo88L9UT6hBwbk7GDuDX2cjzunc6aiBr9SQsp0glBjnVPe%2F7S%2BtrudB7kaL%2F6GjbZC2oUwjPqhygY6pgHDv4KR3g6wDS4Lej%2FcF%2FhueL4ZLLATxoKo7ywc3bjtE%2FlyGmAow376dgmcKbXk8UN2bLmAPH%2BX2%2BesINAdsO2s8KSoqfpuCbqaVmGHWLydJx58hBy0gec0Oxq3NweXAnx%2BQ4JQdx1BjbJH99iRuDgvAp%2BGx9XDg7eBYTXzikuuew9mtDynlF%2BLrr95q1lLlXNtHohGj3gMpbdavqunV10b3aPYneAa&X-Amz-Signature=eb6969ae2dbc9adebbfb7f0ecc6823592afb1eaed91753a20037eb7946288fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYTWP6V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICN5MtMjeKv4k1hOOnf%2FgPnpwEz6AuE2qRoPyS3UmH1wAiB2BGCOrfm9YYRMoZnTf3tpWGJhlNjTN7QygTOwhlrfFSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGVwYMBCuCKq48eEKtwD%2BTtGJs6y%2FBRo%2Bbb4ce2m%2FPfX%2FkW4NF%2BYhbbKjxhEPJPTPaoWTCwl7cXxGY3kHtuX9Z%2Bxb2OzQNwnhYrw66CyRdk7LdBZCLvXEiUrvzKE9%2BomKHJXr2i7S4HesgeEqZJDrJCyJXcaYbWMqmIUYGZXR%2BV5IxNBYsO1QuQDuAL9Wf2%2F%2BoPGy%2BrHPb0SSGKgT22sqd31ZaAEFVv9BqFc2md7iwCkJMbdmn4HrQR6hwE48x6NO2uEHLBboAwjxV8KBOOsVjfH1x8vZ6LLXdSg0V5gYZM3ZYXrDWx%2Bb6Yxmm%2FAAqvJgNlCdz4pJt%2BWXXi7b0PORs4%2F16%2FRBo5FH%2BFRRSFFXCfB3LImMxv3SJc0Gqa6Hi919GbH7eRdjxCCA3uoImgm3oc5XwgHAJxPZy73A8dDGJzkI1thoLjBvgAd0AxwLGggD5teJgDE229bRS7Cvae2C1lbzKKfNvnUsUuLo0ceQ1lCUJiCSdFLwKKn%2BHQZl0xDjAT39gI8sZ4if%2Fl1T8VHlcET%2BRJXzqngXr2CnP0zjZwWG58XuC0AAoSPPGFrjmlwQTpyjJ1eDopo88L9UT6hBwbk7GDuDX2cjzunc6aiBr9SQsp0glBjnVPe%2F7S%2BtrudB7kaL%2F6GjbZC2oUwjPqhygY6pgHDv4KR3g6wDS4Lej%2FcF%2FhueL4ZLLATxoKo7ywc3bjtE%2FlyGmAow376dgmcKbXk8UN2bLmAPH%2BX2%2BesINAdsO2s8KSoqfpuCbqaVmGHWLydJx58hBy0gec0Oxq3NweXAnx%2BQ4JQdx1BjbJH99iRuDgvAp%2BGx9XDg7eBYTXzikuuew9mtDynlF%2BLrr95q1lLlXNtHohGj3gMpbdavqunV10b3aPYneAa&X-Amz-Signature=a7884ef5147832b7324011aed27aa1d619feaf9c75d67c06ef56d71681cdb272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYTWP6V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICN5MtMjeKv4k1hOOnf%2FgPnpwEz6AuE2qRoPyS3UmH1wAiB2BGCOrfm9YYRMoZnTf3tpWGJhlNjTN7QygTOwhlrfFSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGVwYMBCuCKq48eEKtwD%2BTtGJs6y%2FBRo%2Bbb4ce2m%2FPfX%2FkW4NF%2BYhbbKjxhEPJPTPaoWTCwl7cXxGY3kHtuX9Z%2Bxb2OzQNwnhYrw66CyRdk7LdBZCLvXEiUrvzKE9%2BomKHJXr2i7S4HesgeEqZJDrJCyJXcaYbWMqmIUYGZXR%2BV5IxNBYsO1QuQDuAL9Wf2%2F%2BoPGy%2BrHPb0SSGKgT22sqd31ZaAEFVv9BqFc2md7iwCkJMbdmn4HrQR6hwE48x6NO2uEHLBboAwjxV8KBOOsVjfH1x8vZ6LLXdSg0V5gYZM3ZYXrDWx%2Bb6Yxmm%2FAAqvJgNlCdz4pJt%2BWXXi7b0PORs4%2F16%2FRBo5FH%2BFRRSFFXCfB3LImMxv3SJc0Gqa6Hi919GbH7eRdjxCCA3uoImgm3oc5XwgHAJxPZy73A8dDGJzkI1thoLjBvgAd0AxwLGggD5teJgDE229bRS7Cvae2C1lbzKKfNvnUsUuLo0ceQ1lCUJiCSdFLwKKn%2BHQZl0xDjAT39gI8sZ4if%2Fl1T8VHlcET%2BRJXzqngXr2CnP0zjZwWG58XuC0AAoSPPGFrjmlwQTpyjJ1eDopo88L9UT6hBwbk7GDuDX2cjzunc6aiBr9SQsp0glBjnVPe%2F7S%2BtrudB7kaL%2F6GjbZC2oUwjPqhygY6pgHDv4KR3g6wDS4Lej%2FcF%2FhueL4ZLLATxoKo7ywc3bjtE%2FlyGmAow376dgmcKbXk8UN2bLmAPH%2BX2%2BesINAdsO2s8KSoqfpuCbqaVmGHWLydJx58hBy0gec0Oxq3NweXAnx%2BQ4JQdx1BjbJH99iRuDgvAp%2BGx9XDg7eBYTXzikuuew9mtDynlF%2BLrr95q1lLlXNtHohGj3gMpbdavqunV10b3aPYneAa&X-Amz-Signature=613ccae63d79efd2fa7268a3804d9fb4545dd74a87eacb59fe1db80925ecd335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYTWP6V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICN5MtMjeKv4k1hOOnf%2FgPnpwEz6AuE2qRoPyS3UmH1wAiB2BGCOrfm9YYRMoZnTf3tpWGJhlNjTN7QygTOwhlrfFSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGVwYMBCuCKq48eEKtwD%2BTtGJs6y%2FBRo%2Bbb4ce2m%2FPfX%2FkW4NF%2BYhbbKjxhEPJPTPaoWTCwl7cXxGY3kHtuX9Z%2Bxb2OzQNwnhYrw66CyRdk7LdBZCLvXEiUrvzKE9%2BomKHJXr2i7S4HesgeEqZJDrJCyJXcaYbWMqmIUYGZXR%2BV5IxNBYsO1QuQDuAL9Wf2%2F%2BoPGy%2BrHPb0SSGKgT22sqd31ZaAEFVv9BqFc2md7iwCkJMbdmn4HrQR6hwE48x6NO2uEHLBboAwjxV8KBOOsVjfH1x8vZ6LLXdSg0V5gYZM3ZYXrDWx%2Bb6Yxmm%2FAAqvJgNlCdz4pJt%2BWXXi7b0PORs4%2F16%2FRBo5FH%2BFRRSFFXCfB3LImMxv3SJc0Gqa6Hi919GbH7eRdjxCCA3uoImgm3oc5XwgHAJxPZy73A8dDGJzkI1thoLjBvgAd0AxwLGggD5teJgDE229bRS7Cvae2C1lbzKKfNvnUsUuLo0ceQ1lCUJiCSdFLwKKn%2BHQZl0xDjAT39gI8sZ4if%2Fl1T8VHlcET%2BRJXzqngXr2CnP0zjZwWG58XuC0AAoSPPGFrjmlwQTpyjJ1eDopo88L9UT6hBwbk7GDuDX2cjzunc6aiBr9SQsp0glBjnVPe%2F7S%2BtrudB7kaL%2F6GjbZC2oUwjPqhygY6pgHDv4KR3g6wDS4Lej%2FcF%2FhueL4ZLLATxoKo7ywc3bjtE%2FlyGmAow376dgmcKbXk8UN2bLmAPH%2BX2%2BesINAdsO2s8KSoqfpuCbqaVmGHWLydJx58hBy0gec0Oxq3NweXAnx%2BQ4JQdx1BjbJH99iRuDgvAp%2BGx9XDg7eBYTXzikuuew9mtDynlF%2BLrr95q1lLlXNtHohGj3gMpbdavqunV10b3aPYneAa&X-Amz-Signature=9f902ca4bf8ea8f718510f8cbbaf66047a5194283cc3e7eb83e59fc19207d681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
