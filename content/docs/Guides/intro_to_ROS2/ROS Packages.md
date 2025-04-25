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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNP3ZWL6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtzBPxMCSVQ2mk3pFUOji1Djjeekn9lwSOl%2FpsrypgKAIhAJtiWXMrBtFVkwFib5n%2BwsyMLqm3zXuqzPvNrokY2w2tKv8DCCoQABoMNjM3NDIzMTgzODA1IgwJ%2BVoHb2idet9NZHIq3AMQgaLPNA97O9hUR%2BYQHSpad2VpKk9ZpnoVHgaC29UGmCnjOVagabMN0TwrhZKsTiqdRW%2FnwfHuYadCVggiEWSnU%2B34AoZ61NE74v4054BBesksM7tgQvC4kEqddiq9Abxclkw6ksOICq%2FEVP9m2eMAjfkbwAVwRNVU0TB20XbyRfkCqgAeTdmN%2Bv0pIZs66WOFo7kD6jjuSHWjGN22AbBOfFnEBs8O9n4J9WNR5VYdA83TybADsD%2F1m8He%2FHnKhkk6i33dm2J2r9aix9SaDS%2BnvKrgfhjf%2F93StD42trQlLrU%2F%2BBtLkHwEf959sAi%2FZT2XRooiexEsVgMQmm7hFhMZmeCVBLcxx07N4mwxatGwTo54VQ94UKRRiXuFfQ1eyzymHowPlUuQPscAkEHzkKLX3L3cmrs3vl5lTr3Zw%2B6rYH1MlQjGrnNv3TnYVK6xQQffazapgqVm0XZpgOX48c2JAKw8%2Fdtar6bhlAGxSAXwccUyeKbXIlf79weLGRVOUxIS1pjvhC54FcKIU30yLxkK%2BHWCAJr46Ly065Ung0WKqvBwYVvO357FQXbprGCOIuDmVFeUU2%2Ftombz1%2B4ZJNGTj1wFm4nZjGEpOSA9v3Xh8Xh7KCVIRKyEK55XZjDNm63ABjqkAZOTDtrvF4ZFduU1H3qZqlVPCzSmkBHlPm6HGxBZS6QtrJBlkEc2JX9ncTcDCcv9SlBvHmQl6aFq1RMYVuGWeYnhSIykALhBAYOfohN9pcvPkuE3jGb7N%2FAl8LCogcZPwxyxt3BNKlZtsEehfJpdeXEm79Tsxc4458RdcuN7d8nqYYpTZ%2FmgeKr8Sv9WbMDbLi6h%2BR6hFQFtGOfW9gPB5ITNQ0nY&X-Amz-Signature=49988844e3fb8c180f4a7c9a89570ba61c812d46a36b4bd8eb2e8a9e0aa93ef7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNP3ZWL6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtzBPxMCSVQ2mk3pFUOji1Djjeekn9lwSOl%2FpsrypgKAIhAJtiWXMrBtFVkwFib5n%2BwsyMLqm3zXuqzPvNrokY2w2tKv8DCCoQABoMNjM3NDIzMTgzODA1IgwJ%2BVoHb2idet9NZHIq3AMQgaLPNA97O9hUR%2BYQHSpad2VpKk9ZpnoVHgaC29UGmCnjOVagabMN0TwrhZKsTiqdRW%2FnwfHuYadCVggiEWSnU%2B34AoZ61NE74v4054BBesksM7tgQvC4kEqddiq9Abxclkw6ksOICq%2FEVP9m2eMAjfkbwAVwRNVU0TB20XbyRfkCqgAeTdmN%2Bv0pIZs66WOFo7kD6jjuSHWjGN22AbBOfFnEBs8O9n4J9WNR5VYdA83TybADsD%2F1m8He%2FHnKhkk6i33dm2J2r9aix9SaDS%2BnvKrgfhjf%2F93StD42trQlLrU%2F%2BBtLkHwEf959sAi%2FZT2XRooiexEsVgMQmm7hFhMZmeCVBLcxx07N4mwxatGwTo54VQ94UKRRiXuFfQ1eyzymHowPlUuQPscAkEHzkKLX3L3cmrs3vl5lTr3Zw%2B6rYH1MlQjGrnNv3TnYVK6xQQffazapgqVm0XZpgOX48c2JAKw8%2Fdtar6bhlAGxSAXwccUyeKbXIlf79weLGRVOUxIS1pjvhC54FcKIU30yLxkK%2BHWCAJr46Ly065Ung0WKqvBwYVvO357FQXbprGCOIuDmVFeUU2%2Ftombz1%2B4ZJNGTj1wFm4nZjGEpOSA9v3Xh8Xh7KCVIRKyEK55XZjDNm63ABjqkAZOTDtrvF4ZFduU1H3qZqlVPCzSmkBHlPm6HGxBZS6QtrJBlkEc2JX9ncTcDCcv9SlBvHmQl6aFq1RMYVuGWeYnhSIykALhBAYOfohN9pcvPkuE3jGb7N%2FAl8LCogcZPwxyxt3BNKlZtsEehfJpdeXEm79Tsxc4458RdcuN7d8nqYYpTZ%2FmgeKr8Sv9WbMDbLi6h%2BR6hFQFtGOfW9gPB5ITNQ0nY&X-Amz-Signature=3ca92e1614a10c799d2eea6733f324cae47973412657c06b5ae564ef6f7aad3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNP3ZWL6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtzBPxMCSVQ2mk3pFUOji1Djjeekn9lwSOl%2FpsrypgKAIhAJtiWXMrBtFVkwFib5n%2BwsyMLqm3zXuqzPvNrokY2w2tKv8DCCoQABoMNjM3NDIzMTgzODA1IgwJ%2BVoHb2idet9NZHIq3AMQgaLPNA97O9hUR%2BYQHSpad2VpKk9ZpnoVHgaC29UGmCnjOVagabMN0TwrhZKsTiqdRW%2FnwfHuYadCVggiEWSnU%2B34AoZ61NE74v4054BBesksM7tgQvC4kEqddiq9Abxclkw6ksOICq%2FEVP9m2eMAjfkbwAVwRNVU0TB20XbyRfkCqgAeTdmN%2Bv0pIZs66WOFo7kD6jjuSHWjGN22AbBOfFnEBs8O9n4J9WNR5VYdA83TybADsD%2F1m8He%2FHnKhkk6i33dm2J2r9aix9SaDS%2BnvKrgfhjf%2F93StD42trQlLrU%2F%2BBtLkHwEf959sAi%2FZT2XRooiexEsVgMQmm7hFhMZmeCVBLcxx07N4mwxatGwTo54VQ94UKRRiXuFfQ1eyzymHowPlUuQPscAkEHzkKLX3L3cmrs3vl5lTr3Zw%2B6rYH1MlQjGrnNv3TnYVK6xQQffazapgqVm0XZpgOX48c2JAKw8%2Fdtar6bhlAGxSAXwccUyeKbXIlf79weLGRVOUxIS1pjvhC54FcKIU30yLxkK%2BHWCAJr46Ly065Ung0WKqvBwYVvO357FQXbprGCOIuDmVFeUU2%2Ftombz1%2B4ZJNGTj1wFm4nZjGEpOSA9v3Xh8Xh7KCVIRKyEK55XZjDNm63ABjqkAZOTDtrvF4ZFduU1H3qZqlVPCzSmkBHlPm6HGxBZS6QtrJBlkEc2JX9ncTcDCcv9SlBvHmQl6aFq1RMYVuGWeYnhSIykALhBAYOfohN9pcvPkuE3jGb7N%2FAl8LCogcZPwxyxt3BNKlZtsEehfJpdeXEm79Tsxc4458RdcuN7d8nqYYpTZ%2FmgeKr8Sv9WbMDbLi6h%2BR6hFQFtGOfW9gPB5ITNQ0nY&X-Amz-Signature=a854646973fe434f9a4845e09a79a2ab93e604ffcded1653e24d6f1f61d3fca3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNP3ZWL6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtzBPxMCSVQ2mk3pFUOji1Djjeekn9lwSOl%2FpsrypgKAIhAJtiWXMrBtFVkwFib5n%2BwsyMLqm3zXuqzPvNrokY2w2tKv8DCCoQABoMNjM3NDIzMTgzODA1IgwJ%2BVoHb2idet9NZHIq3AMQgaLPNA97O9hUR%2BYQHSpad2VpKk9ZpnoVHgaC29UGmCnjOVagabMN0TwrhZKsTiqdRW%2FnwfHuYadCVggiEWSnU%2B34AoZ61NE74v4054BBesksM7tgQvC4kEqddiq9Abxclkw6ksOICq%2FEVP9m2eMAjfkbwAVwRNVU0TB20XbyRfkCqgAeTdmN%2Bv0pIZs66WOFo7kD6jjuSHWjGN22AbBOfFnEBs8O9n4J9WNR5VYdA83TybADsD%2F1m8He%2FHnKhkk6i33dm2J2r9aix9SaDS%2BnvKrgfhjf%2F93StD42trQlLrU%2F%2BBtLkHwEf959sAi%2FZT2XRooiexEsVgMQmm7hFhMZmeCVBLcxx07N4mwxatGwTo54VQ94UKRRiXuFfQ1eyzymHowPlUuQPscAkEHzkKLX3L3cmrs3vl5lTr3Zw%2B6rYH1MlQjGrnNv3TnYVK6xQQffazapgqVm0XZpgOX48c2JAKw8%2Fdtar6bhlAGxSAXwccUyeKbXIlf79weLGRVOUxIS1pjvhC54FcKIU30yLxkK%2BHWCAJr46Ly065Ung0WKqvBwYVvO357FQXbprGCOIuDmVFeUU2%2Ftombz1%2B4ZJNGTj1wFm4nZjGEpOSA9v3Xh8Xh7KCVIRKyEK55XZjDNm63ABjqkAZOTDtrvF4ZFduU1H3qZqlVPCzSmkBHlPm6HGxBZS6QtrJBlkEc2JX9ncTcDCcv9SlBvHmQl6aFq1RMYVuGWeYnhSIykALhBAYOfohN9pcvPkuE3jGb7N%2FAl8LCogcZPwxyxt3BNKlZtsEehfJpdeXEm79Tsxc4458RdcuN7d8nqYYpTZ%2FmgeKr8Sv9WbMDbLi6h%2BR6hFQFtGOfW9gPB5ITNQ0nY&X-Amz-Signature=173400d48625ae38322b792f0c492fc407912daa9dc786074a42077a1f7571ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNP3ZWL6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtzBPxMCSVQ2mk3pFUOji1Djjeekn9lwSOl%2FpsrypgKAIhAJtiWXMrBtFVkwFib5n%2BwsyMLqm3zXuqzPvNrokY2w2tKv8DCCoQABoMNjM3NDIzMTgzODA1IgwJ%2BVoHb2idet9NZHIq3AMQgaLPNA97O9hUR%2BYQHSpad2VpKk9ZpnoVHgaC29UGmCnjOVagabMN0TwrhZKsTiqdRW%2FnwfHuYadCVggiEWSnU%2B34AoZ61NE74v4054BBesksM7tgQvC4kEqddiq9Abxclkw6ksOICq%2FEVP9m2eMAjfkbwAVwRNVU0TB20XbyRfkCqgAeTdmN%2Bv0pIZs66WOFo7kD6jjuSHWjGN22AbBOfFnEBs8O9n4J9WNR5VYdA83TybADsD%2F1m8He%2FHnKhkk6i33dm2J2r9aix9SaDS%2BnvKrgfhjf%2F93StD42trQlLrU%2F%2BBtLkHwEf959sAi%2FZT2XRooiexEsVgMQmm7hFhMZmeCVBLcxx07N4mwxatGwTo54VQ94UKRRiXuFfQ1eyzymHowPlUuQPscAkEHzkKLX3L3cmrs3vl5lTr3Zw%2B6rYH1MlQjGrnNv3TnYVK6xQQffazapgqVm0XZpgOX48c2JAKw8%2Fdtar6bhlAGxSAXwccUyeKbXIlf79weLGRVOUxIS1pjvhC54FcKIU30yLxkK%2BHWCAJr46Ly065Ung0WKqvBwYVvO357FQXbprGCOIuDmVFeUU2%2Ftombz1%2B4ZJNGTj1wFm4nZjGEpOSA9v3Xh8Xh7KCVIRKyEK55XZjDNm63ABjqkAZOTDtrvF4ZFduU1H3qZqlVPCzSmkBHlPm6HGxBZS6QtrJBlkEc2JX9ncTcDCcv9SlBvHmQl6aFq1RMYVuGWeYnhSIykALhBAYOfohN9pcvPkuE3jGb7N%2FAl8LCogcZPwxyxt3BNKlZtsEehfJpdeXEm79Tsxc4458RdcuN7d8nqYYpTZ%2FmgeKr8Sv9WbMDbLi6h%2BR6hFQFtGOfW9gPB5ITNQ0nY&X-Amz-Signature=6b1e42bd9cb39d065c5036863f0bd08b693a2d2ab164f84cc52d34b143974b28&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNP3ZWL6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtzBPxMCSVQ2mk3pFUOji1Djjeekn9lwSOl%2FpsrypgKAIhAJtiWXMrBtFVkwFib5n%2BwsyMLqm3zXuqzPvNrokY2w2tKv8DCCoQABoMNjM3NDIzMTgzODA1IgwJ%2BVoHb2idet9NZHIq3AMQgaLPNA97O9hUR%2BYQHSpad2VpKk9ZpnoVHgaC29UGmCnjOVagabMN0TwrhZKsTiqdRW%2FnwfHuYadCVggiEWSnU%2B34AoZ61NE74v4054BBesksM7tgQvC4kEqddiq9Abxclkw6ksOICq%2FEVP9m2eMAjfkbwAVwRNVU0TB20XbyRfkCqgAeTdmN%2Bv0pIZs66WOFo7kD6jjuSHWjGN22AbBOfFnEBs8O9n4J9WNR5VYdA83TybADsD%2F1m8He%2FHnKhkk6i33dm2J2r9aix9SaDS%2BnvKrgfhjf%2F93StD42trQlLrU%2F%2BBtLkHwEf959sAi%2FZT2XRooiexEsVgMQmm7hFhMZmeCVBLcxx07N4mwxatGwTo54VQ94UKRRiXuFfQ1eyzymHowPlUuQPscAkEHzkKLX3L3cmrs3vl5lTr3Zw%2B6rYH1MlQjGrnNv3TnYVK6xQQffazapgqVm0XZpgOX48c2JAKw8%2Fdtar6bhlAGxSAXwccUyeKbXIlf79weLGRVOUxIS1pjvhC54FcKIU30yLxkK%2BHWCAJr46Ly065Ung0WKqvBwYVvO357FQXbprGCOIuDmVFeUU2%2Ftombz1%2B4ZJNGTj1wFm4nZjGEpOSA9v3Xh8Xh7KCVIRKyEK55XZjDNm63ABjqkAZOTDtrvF4ZFduU1H3qZqlVPCzSmkBHlPm6HGxBZS6QtrJBlkEc2JX9ncTcDCcv9SlBvHmQl6aFq1RMYVuGWeYnhSIykALhBAYOfohN9pcvPkuE3jGb7N%2FAl8LCogcZPwxyxt3BNKlZtsEehfJpdeXEm79Tsxc4458RdcuN7d8nqYYpTZ%2FmgeKr8Sv9WbMDbLi6h%2BR6hFQFtGOfW9gPB5ITNQ0nY&X-Amz-Signature=52937435d74d5e9303f6d1dd52a3c60c4311cedae6723f76b728fdd133875f48&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNP3ZWL6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtzBPxMCSVQ2mk3pFUOji1Djjeekn9lwSOl%2FpsrypgKAIhAJtiWXMrBtFVkwFib5n%2BwsyMLqm3zXuqzPvNrokY2w2tKv8DCCoQABoMNjM3NDIzMTgzODA1IgwJ%2BVoHb2idet9NZHIq3AMQgaLPNA97O9hUR%2BYQHSpad2VpKk9ZpnoVHgaC29UGmCnjOVagabMN0TwrhZKsTiqdRW%2FnwfHuYadCVggiEWSnU%2B34AoZ61NE74v4054BBesksM7tgQvC4kEqddiq9Abxclkw6ksOICq%2FEVP9m2eMAjfkbwAVwRNVU0TB20XbyRfkCqgAeTdmN%2Bv0pIZs66WOFo7kD6jjuSHWjGN22AbBOfFnEBs8O9n4J9WNR5VYdA83TybADsD%2F1m8He%2FHnKhkk6i33dm2J2r9aix9SaDS%2BnvKrgfhjf%2F93StD42trQlLrU%2F%2BBtLkHwEf959sAi%2FZT2XRooiexEsVgMQmm7hFhMZmeCVBLcxx07N4mwxatGwTo54VQ94UKRRiXuFfQ1eyzymHowPlUuQPscAkEHzkKLX3L3cmrs3vl5lTr3Zw%2B6rYH1MlQjGrnNv3TnYVK6xQQffazapgqVm0XZpgOX48c2JAKw8%2Fdtar6bhlAGxSAXwccUyeKbXIlf79weLGRVOUxIS1pjvhC54FcKIU30yLxkK%2BHWCAJr46Ly065Ung0WKqvBwYVvO357FQXbprGCOIuDmVFeUU2%2Ftombz1%2B4ZJNGTj1wFm4nZjGEpOSA9v3Xh8Xh7KCVIRKyEK55XZjDNm63ABjqkAZOTDtrvF4ZFduU1H3qZqlVPCzSmkBHlPm6HGxBZS6QtrJBlkEc2JX9ncTcDCcv9SlBvHmQl6aFq1RMYVuGWeYnhSIykALhBAYOfohN9pcvPkuE3jGb7N%2FAl8LCogcZPwxyxt3BNKlZtsEehfJpdeXEm79Tsxc4458RdcuN7d8nqYYpTZ%2FmgeKr8Sv9WbMDbLi6h%2BR6hFQFtGOfW9gPB5ITNQ0nY&X-Amz-Signature=c38404b2f345094943e3288bf9f63f2d2ab1d9e182d54f6518db3e95f5e1afe0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
