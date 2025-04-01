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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAEH5SA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCWnJBnIUsnnzwJlVOePV%2F4wwAcspEl9R4faQ0bPujTbQIhAKRmslee3m1lJvzmAveujiKY%2FJPmVp9UG8%2BTqrqpcVZ%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCPojZp9x%2BOltYt0wq3APSvirPoOm4r0SZtmbvvPRE96mPkjQ9ilusQMRtUXBGpDWhrmdvtfgILzZSvo84JlZro6W8QJptx1ArU3BJ%2FR%2B6SoyncslLmZLzu01brkYeR26h6SVzxx2JQS8C933TZ0pJ1jzjYawoash64P%2FJUiqBiKcXTgVHrBWIzTewvhJlVu8WnqJu5vlNESrlIwFiCbxW35LeX0SHQImlu5BmH4zW45vbGwxDeRc9RDE4RRvtbbQK4a6Ok7cNugRwuPdIsUEXFUw0lTuzzihn1o6HStTdRVqoufLzfexlZIXdPeWl1aXw9PbjDUE7rUz1lY%2FNgWFR1is7AJGN3w9%2BAPAD2Olo2mV7S%2B6bOeCQLkG9%2FWU12jfcrtvYrWywnVztkGXVA0jkPIqfgmHUYqp%2FQJhnez%2ByGJcZrkQixcXswm9NZAcPEFol9JfdWGAbNNnEO6THT%2B52IJBDw6lAIHYzzZnKhmClZn4mdgtxKiu4imnCPagRoJQGvlTqJCRPEe6Lej%2Bw5tuBwcfAtnQh1tFNVGAKXi5%2FBvmPG4ynRufaefMn6p8lxC2yO3%2BmExbtlLv8%2BFf4%2FlJEbASxjFCpl1Gi40uQ20KH1hV1DVblXHM8uaZt8RwiLnnCtsSeNPFerRHT3TD1pK2%2FBjqkAcVOV2cZF8wpCG1lkzzL8jghyeQq4EqcjGeXO6UbjACWCP7M8KWn%2BHbyW%2B23GXq1zFlvxJe8ViOLzdDG3mLiBzDQKuPW0LRlqJcMFDHLKfSWkDtGP059RbcLmUTTLO7q7vFV2opCXzLv%2Bz89fD5IuOOWUWnGEDfCj%2F7gsk0Y4bw%2BfeKNpfjslqneHp9Uf3Arpe8rXg99ChG7Lm2MRX1e8CfavPEU&X-Amz-Signature=0793076cea32a53435a65f4673867e1c40815eb09478d3b49a6704c75dc68c88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAEH5SA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCWnJBnIUsnnzwJlVOePV%2F4wwAcspEl9R4faQ0bPujTbQIhAKRmslee3m1lJvzmAveujiKY%2FJPmVp9UG8%2BTqrqpcVZ%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCPojZp9x%2BOltYt0wq3APSvirPoOm4r0SZtmbvvPRE96mPkjQ9ilusQMRtUXBGpDWhrmdvtfgILzZSvo84JlZro6W8QJptx1ArU3BJ%2FR%2B6SoyncslLmZLzu01brkYeR26h6SVzxx2JQS8C933TZ0pJ1jzjYawoash64P%2FJUiqBiKcXTgVHrBWIzTewvhJlVu8WnqJu5vlNESrlIwFiCbxW35LeX0SHQImlu5BmH4zW45vbGwxDeRc9RDE4RRvtbbQK4a6Ok7cNugRwuPdIsUEXFUw0lTuzzihn1o6HStTdRVqoufLzfexlZIXdPeWl1aXw9PbjDUE7rUz1lY%2FNgWFR1is7AJGN3w9%2BAPAD2Olo2mV7S%2B6bOeCQLkG9%2FWU12jfcrtvYrWywnVztkGXVA0jkPIqfgmHUYqp%2FQJhnez%2ByGJcZrkQixcXswm9NZAcPEFol9JfdWGAbNNnEO6THT%2B52IJBDw6lAIHYzzZnKhmClZn4mdgtxKiu4imnCPagRoJQGvlTqJCRPEe6Lej%2Bw5tuBwcfAtnQh1tFNVGAKXi5%2FBvmPG4ynRufaefMn6p8lxC2yO3%2BmExbtlLv8%2BFf4%2FlJEbASxjFCpl1Gi40uQ20KH1hV1DVblXHM8uaZt8RwiLnnCtsSeNPFerRHT3TD1pK2%2FBjqkAcVOV2cZF8wpCG1lkzzL8jghyeQq4EqcjGeXO6UbjACWCP7M8KWn%2BHbyW%2B23GXq1zFlvxJe8ViOLzdDG3mLiBzDQKuPW0LRlqJcMFDHLKfSWkDtGP059RbcLmUTTLO7q7vFV2opCXzLv%2Bz89fD5IuOOWUWnGEDfCj%2F7gsk0Y4bw%2BfeKNpfjslqneHp9Uf3Arpe8rXg99ChG7Lm2MRX1e8CfavPEU&X-Amz-Signature=02a3e525f4e26477423c79840e268250947ebd5cf72e2add9bba2af5e1e8ccc8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAEH5SA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCWnJBnIUsnnzwJlVOePV%2F4wwAcspEl9R4faQ0bPujTbQIhAKRmslee3m1lJvzmAveujiKY%2FJPmVp9UG8%2BTqrqpcVZ%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCPojZp9x%2BOltYt0wq3APSvirPoOm4r0SZtmbvvPRE96mPkjQ9ilusQMRtUXBGpDWhrmdvtfgILzZSvo84JlZro6W8QJptx1ArU3BJ%2FR%2B6SoyncslLmZLzu01brkYeR26h6SVzxx2JQS8C933TZ0pJ1jzjYawoash64P%2FJUiqBiKcXTgVHrBWIzTewvhJlVu8WnqJu5vlNESrlIwFiCbxW35LeX0SHQImlu5BmH4zW45vbGwxDeRc9RDE4RRvtbbQK4a6Ok7cNugRwuPdIsUEXFUw0lTuzzihn1o6HStTdRVqoufLzfexlZIXdPeWl1aXw9PbjDUE7rUz1lY%2FNgWFR1is7AJGN3w9%2BAPAD2Olo2mV7S%2B6bOeCQLkG9%2FWU12jfcrtvYrWywnVztkGXVA0jkPIqfgmHUYqp%2FQJhnez%2ByGJcZrkQixcXswm9NZAcPEFol9JfdWGAbNNnEO6THT%2B52IJBDw6lAIHYzzZnKhmClZn4mdgtxKiu4imnCPagRoJQGvlTqJCRPEe6Lej%2Bw5tuBwcfAtnQh1tFNVGAKXi5%2FBvmPG4ynRufaefMn6p8lxC2yO3%2BmExbtlLv8%2BFf4%2FlJEbASxjFCpl1Gi40uQ20KH1hV1DVblXHM8uaZt8RwiLnnCtsSeNPFerRHT3TD1pK2%2FBjqkAcVOV2cZF8wpCG1lkzzL8jghyeQq4EqcjGeXO6UbjACWCP7M8KWn%2BHbyW%2B23GXq1zFlvxJe8ViOLzdDG3mLiBzDQKuPW0LRlqJcMFDHLKfSWkDtGP059RbcLmUTTLO7q7vFV2opCXzLv%2Bz89fD5IuOOWUWnGEDfCj%2F7gsk0Y4bw%2BfeKNpfjslqneHp9Uf3Arpe8rXg99ChG7Lm2MRX1e8CfavPEU&X-Amz-Signature=7e417da42f181597f244ab01fdb1b2e2444149dfc9a71e727c24d07deb0238cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAEH5SA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCWnJBnIUsnnzwJlVOePV%2F4wwAcspEl9R4faQ0bPujTbQIhAKRmslee3m1lJvzmAveujiKY%2FJPmVp9UG8%2BTqrqpcVZ%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCPojZp9x%2BOltYt0wq3APSvirPoOm4r0SZtmbvvPRE96mPkjQ9ilusQMRtUXBGpDWhrmdvtfgILzZSvo84JlZro6W8QJptx1ArU3BJ%2FR%2B6SoyncslLmZLzu01brkYeR26h6SVzxx2JQS8C933TZ0pJ1jzjYawoash64P%2FJUiqBiKcXTgVHrBWIzTewvhJlVu8WnqJu5vlNESrlIwFiCbxW35LeX0SHQImlu5BmH4zW45vbGwxDeRc9RDE4RRvtbbQK4a6Ok7cNugRwuPdIsUEXFUw0lTuzzihn1o6HStTdRVqoufLzfexlZIXdPeWl1aXw9PbjDUE7rUz1lY%2FNgWFR1is7AJGN3w9%2BAPAD2Olo2mV7S%2B6bOeCQLkG9%2FWU12jfcrtvYrWywnVztkGXVA0jkPIqfgmHUYqp%2FQJhnez%2ByGJcZrkQixcXswm9NZAcPEFol9JfdWGAbNNnEO6THT%2B52IJBDw6lAIHYzzZnKhmClZn4mdgtxKiu4imnCPagRoJQGvlTqJCRPEe6Lej%2Bw5tuBwcfAtnQh1tFNVGAKXi5%2FBvmPG4ynRufaefMn6p8lxC2yO3%2BmExbtlLv8%2BFf4%2FlJEbASxjFCpl1Gi40uQ20KH1hV1DVblXHM8uaZt8RwiLnnCtsSeNPFerRHT3TD1pK2%2FBjqkAcVOV2cZF8wpCG1lkzzL8jghyeQq4EqcjGeXO6UbjACWCP7M8KWn%2BHbyW%2B23GXq1zFlvxJe8ViOLzdDG3mLiBzDQKuPW0LRlqJcMFDHLKfSWkDtGP059RbcLmUTTLO7q7vFV2opCXzLv%2Bz89fD5IuOOWUWnGEDfCj%2F7gsk0Y4bw%2BfeKNpfjslqneHp9Uf3Arpe8rXg99ChG7Lm2MRX1e8CfavPEU&X-Amz-Signature=77dfcbbe272a8f70d71eb867f667947ff55163fea1447b8855c15e183dd753ff&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAEH5SA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCWnJBnIUsnnzwJlVOePV%2F4wwAcspEl9R4faQ0bPujTbQIhAKRmslee3m1lJvzmAveujiKY%2FJPmVp9UG8%2BTqrqpcVZ%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCPojZp9x%2BOltYt0wq3APSvirPoOm4r0SZtmbvvPRE96mPkjQ9ilusQMRtUXBGpDWhrmdvtfgILzZSvo84JlZro6W8QJptx1ArU3BJ%2FR%2B6SoyncslLmZLzu01brkYeR26h6SVzxx2JQS8C933TZ0pJ1jzjYawoash64P%2FJUiqBiKcXTgVHrBWIzTewvhJlVu8WnqJu5vlNESrlIwFiCbxW35LeX0SHQImlu5BmH4zW45vbGwxDeRc9RDE4RRvtbbQK4a6Ok7cNugRwuPdIsUEXFUw0lTuzzihn1o6HStTdRVqoufLzfexlZIXdPeWl1aXw9PbjDUE7rUz1lY%2FNgWFR1is7AJGN3w9%2BAPAD2Olo2mV7S%2B6bOeCQLkG9%2FWU12jfcrtvYrWywnVztkGXVA0jkPIqfgmHUYqp%2FQJhnez%2ByGJcZrkQixcXswm9NZAcPEFol9JfdWGAbNNnEO6THT%2B52IJBDw6lAIHYzzZnKhmClZn4mdgtxKiu4imnCPagRoJQGvlTqJCRPEe6Lej%2Bw5tuBwcfAtnQh1tFNVGAKXi5%2FBvmPG4ynRufaefMn6p8lxC2yO3%2BmExbtlLv8%2BFf4%2FlJEbASxjFCpl1Gi40uQ20KH1hV1DVblXHM8uaZt8RwiLnnCtsSeNPFerRHT3TD1pK2%2FBjqkAcVOV2cZF8wpCG1lkzzL8jghyeQq4EqcjGeXO6UbjACWCP7M8KWn%2BHbyW%2B23GXq1zFlvxJe8ViOLzdDG3mLiBzDQKuPW0LRlqJcMFDHLKfSWkDtGP059RbcLmUTTLO7q7vFV2opCXzLv%2Bz89fD5IuOOWUWnGEDfCj%2F7gsk0Y4bw%2BfeKNpfjslqneHp9Uf3Arpe8rXg99ChG7Lm2MRX1e8CfavPEU&X-Amz-Signature=4a0dbb0a5dad8dc96b23382141ad9a24990b3fc8b660071771d74edd8198e588&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAEH5SA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCWnJBnIUsnnzwJlVOePV%2F4wwAcspEl9R4faQ0bPujTbQIhAKRmslee3m1lJvzmAveujiKY%2FJPmVp9UG8%2BTqrqpcVZ%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCPojZp9x%2BOltYt0wq3APSvirPoOm4r0SZtmbvvPRE96mPkjQ9ilusQMRtUXBGpDWhrmdvtfgILzZSvo84JlZro6W8QJptx1ArU3BJ%2FR%2B6SoyncslLmZLzu01brkYeR26h6SVzxx2JQS8C933TZ0pJ1jzjYawoash64P%2FJUiqBiKcXTgVHrBWIzTewvhJlVu8WnqJu5vlNESrlIwFiCbxW35LeX0SHQImlu5BmH4zW45vbGwxDeRc9RDE4RRvtbbQK4a6Ok7cNugRwuPdIsUEXFUw0lTuzzihn1o6HStTdRVqoufLzfexlZIXdPeWl1aXw9PbjDUE7rUz1lY%2FNgWFR1is7AJGN3w9%2BAPAD2Olo2mV7S%2B6bOeCQLkG9%2FWU12jfcrtvYrWywnVztkGXVA0jkPIqfgmHUYqp%2FQJhnez%2ByGJcZrkQixcXswm9NZAcPEFol9JfdWGAbNNnEO6THT%2B52IJBDw6lAIHYzzZnKhmClZn4mdgtxKiu4imnCPagRoJQGvlTqJCRPEe6Lej%2Bw5tuBwcfAtnQh1tFNVGAKXi5%2FBvmPG4ynRufaefMn6p8lxC2yO3%2BmExbtlLv8%2BFf4%2FlJEbASxjFCpl1Gi40uQ20KH1hV1DVblXHM8uaZt8RwiLnnCtsSeNPFerRHT3TD1pK2%2FBjqkAcVOV2cZF8wpCG1lkzzL8jghyeQq4EqcjGeXO6UbjACWCP7M8KWn%2BHbyW%2B23GXq1zFlvxJe8ViOLzdDG3mLiBzDQKuPW0LRlqJcMFDHLKfSWkDtGP059RbcLmUTTLO7q7vFV2opCXzLv%2Bz89fD5IuOOWUWnGEDfCj%2F7gsk0Y4bw%2BfeKNpfjslqneHp9Uf3Arpe8rXg99ChG7Lm2MRX1e8CfavPEU&X-Amz-Signature=5f5f935f714ae5fd25e7c87e8ede9e2c56e09082eb6e48f078902947fa358109&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAEH5SA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCWnJBnIUsnnzwJlVOePV%2F4wwAcspEl9R4faQ0bPujTbQIhAKRmslee3m1lJvzmAveujiKY%2FJPmVp9UG8%2BTqrqpcVZ%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCPojZp9x%2BOltYt0wq3APSvirPoOm4r0SZtmbvvPRE96mPkjQ9ilusQMRtUXBGpDWhrmdvtfgILzZSvo84JlZro6W8QJptx1ArU3BJ%2FR%2B6SoyncslLmZLzu01brkYeR26h6SVzxx2JQS8C933TZ0pJ1jzjYawoash64P%2FJUiqBiKcXTgVHrBWIzTewvhJlVu8WnqJu5vlNESrlIwFiCbxW35LeX0SHQImlu5BmH4zW45vbGwxDeRc9RDE4RRvtbbQK4a6Ok7cNugRwuPdIsUEXFUw0lTuzzihn1o6HStTdRVqoufLzfexlZIXdPeWl1aXw9PbjDUE7rUz1lY%2FNgWFR1is7AJGN3w9%2BAPAD2Olo2mV7S%2B6bOeCQLkG9%2FWU12jfcrtvYrWywnVztkGXVA0jkPIqfgmHUYqp%2FQJhnez%2ByGJcZrkQixcXswm9NZAcPEFol9JfdWGAbNNnEO6THT%2B52IJBDw6lAIHYzzZnKhmClZn4mdgtxKiu4imnCPagRoJQGvlTqJCRPEe6Lej%2Bw5tuBwcfAtnQh1tFNVGAKXi5%2FBvmPG4ynRufaefMn6p8lxC2yO3%2BmExbtlLv8%2BFf4%2FlJEbASxjFCpl1Gi40uQ20KH1hV1DVblXHM8uaZt8RwiLnnCtsSeNPFerRHT3TD1pK2%2FBjqkAcVOV2cZF8wpCG1lkzzL8jghyeQq4EqcjGeXO6UbjACWCP7M8KWn%2BHbyW%2B23GXq1zFlvxJe8ViOLzdDG3mLiBzDQKuPW0LRlqJcMFDHLKfSWkDtGP059RbcLmUTTLO7q7vFV2opCXzLv%2Bz89fD5IuOOWUWnGEDfCj%2F7gsk0Y4bw%2BfeKNpfjslqneHp9Uf3Arpe8rXg99ChG7Lm2MRX1e8CfavPEU&X-Amz-Signature=66a4ecdb7c189be9286a9f009c251825a3d4834ea552062816e02a32be94d1d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
