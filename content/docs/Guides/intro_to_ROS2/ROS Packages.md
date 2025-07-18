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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYU3IHM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCAQ2TOPY15h9O55oVj8fcdyMqv1q5rLA4FDkWHmWNZjwIhANEVKJaS0wVETAzSEEL9KSBy7tgDO31zoZr50w42SQMNKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwgkhzx8XzpQ8mPbbcq3ANa2K5sp9p055BUsj8UOR0GAT5CIj1rD25mDy3%2Bu4QowFONFkNDIi2EtCMcRISu4kAjU2ldBaBp0YLg%2F5AFwLVKaLGtC5B3Wtzqs2GICKEQALTTcYOKAx0MedH2Ee5%2BcYmVuULKBk72zFlF%2B19QOlMgP0y3OT1amye7FHVUz397wXwsq9sd8J0q1c0bXCzoPVfmycHnyz%2BWD7yWFJyZGHtZQg%2FAcb1LZLZLIfzSuVKQiK%2FL3fFdiRHnpd6WFijKOBKtJQQMQ8%2BcEncmC7xjFYPTKVQnEWiA9%2FFj6MLaVsMcl5WH7U4sq8p99E1x7UoDfM8lbzJJeOfrkrcAbXMNsKPiTYIqLUPFzsSx33uyMgkROpZVY7Fp3D7n%2F5Gu%2Fqeax4ci40QLPOLFUB82NwvXEjR1p1u%2BuW6ds%2B%2BdY3PAuPEhX67sjj8frYpGeYIWCNhhbSmakIC3a2kpdqIjDJqTtwHqd6bBATb1IYkl2XMJMURswMabg5IGUzTM1uZrmOxoy5V0MXF%2BEkJ2eRTw2BeBPllg3eM1V9MSbjUjgaz%2F5qkNI04DPZQGt1UnmLTieyWa8sMmj%2FjgVrp1tzYoJBHyYRN%2BtG%2FGAmfgIYhMn91SC92T%2F3o8ZTI2yTt7XdhcaDCoiuvDBjqkAaIM0PL3P46MEsnXmXF8zJN8Z1qmnS3CUi%2FrrSHTVkhswc%2FCDVXR0XVaFA07o%2BDoeU8Z08bUu8cMt1lj4TqU0KTzSVxQU3MIjFcRrYc85bl1UqVOrB1AHC6udz8i3SwQmRDe3m9EUeLmafrxWfBm6ApwFAiCdeO%2BapcGhgFeqVtp0NZJpLMh%2BZNg2LACDrwdi%2BBODdGm2x1CzKxAIWWf1BmxcPWL&X-Amz-Signature=4a4244ad6c154bb6ad306bbacb2d0c08279d34a03cc691fd8e41dad043c63037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYU3IHM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCAQ2TOPY15h9O55oVj8fcdyMqv1q5rLA4FDkWHmWNZjwIhANEVKJaS0wVETAzSEEL9KSBy7tgDO31zoZr50w42SQMNKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwgkhzx8XzpQ8mPbbcq3ANa2K5sp9p055BUsj8UOR0GAT5CIj1rD25mDy3%2Bu4QowFONFkNDIi2EtCMcRISu4kAjU2ldBaBp0YLg%2F5AFwLVKaLGtC5B3Wtzqs2GICKEQALTTcYOKAx0MedH2Ee5%2BcYmVuULKBk72zFlF%2B19QOlMgP0y3OT1amye7FHVUz397wXwsq9sd8J0q1c0bXCzoPVfmycHnyz%2BWD7yWFJyZGHtZQg%2FAcb1LZLZLIfzSuVKQiK%2FL3fFdiRHnpd6WFijKOBKtJQQMQ8%2BcEncmC7xjFYPTKVQnEWiA9%2FFj6MLaVsMcl5WH7U4sq8p99E1x7UoDfM8lbzJJeOfrkrcAbXMNsKPiTYIqLUPFzsSx33uyMgkROpZVY7Fp3D7n%2F5Gu%2Fqeax4ci40QLPOLFUB82NwvXEjR1p1u%2BuW6ds%2B%2BdY3PAuPEhX67sjj8frYpGeYIWCNhhbSmakIC3a2kpdqIjDJqTtwHqd6bBATb1IYkl2XMJMURswMabg5IGUzTM1uZrmOxoy5V0MXF%2BEkJ2eRTw2BeBPllg3eM1V9MSbjUjgaz%2F5qkNI04DPZQGt1UnmLTieyWa8sMmj%2FjgVrp1tzYoJBHyYRN%2BtG%2FGAmfgIYhMn91SC92T%2F3o8ZTI2yTt7XdhcaDCoiuvDBjqkAaIM0PL3P46MEsnXmXF8zJN8Z1qmnS3CUi%2FrrSHTVkhswc%2FCDVXR0XVaFA07o%2BDoeU8Z08bUu8cMt1lj4TqU0KTzSVxQU3MIjFcRrYc85bl1UqVOrB1AHC6udz8i3SwQmRDe3m9EUeLmafrxWfBm6ApwFAiCdeO%2BapcGhgFeqVtp0NZJpLMh%2BZNg2LACDrwdi%2BBODdGm2x1CzKxAIWWf1BmxcPWL&X-Amz-Signature=94f161fba5f8a13e9d5677709748fa98cdc32fd71a4aab6423283a571b3c5456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYU3IHM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCAQ2TOPY15h9O55oVj8fcdyMqv1q5rLA4FDkWHmWNZjwIhANEVKJaS0wVETAzSEEL9KSBy7tgDO31zoZr50w42SQMNKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwgkhzx8XzpQ8mPbbcq3ANa2K5sp9p055BUsj8UOR0GAT5CIj1rD25mDy3%2Bu4QowFONFkNDIi2EtCMcRISu4kAjU2ldBaBp0YLg%2F5AFwLVKaLGtC5B3Wtzqs2GICKEQALTTcYOKAx0MedH2Ee5%2BcYmVuULKBk72zFlF%2B19QOlMgP0y3OT1amye7FHVUz397wXwsq9sd8J0q1c0bXCzoPVfmycHnyz%2BWD7yWFJyZGHtZQg%2FAcb1LZLZLIfzSuVKQiK%2FL3fFdiRHnpd6WFijKOBKtJQQMQ8%2BcEncmC7xjFYPTKVQnEWiA9%2FFj6MLaVsMcl5WH7U4sq8p99E1x7UoDfM8lbzJJeOfrkrcAbXMNsKPiTYIqLUPFzsSx33uyMgkROpZVY7Fp3D7n%2F5Gu%2Fqeax4ci40QLPOLFUB82NwvXEjR1p1u%2BuW6ds%2B%2BdY3PAuPEhX67sjj8frYpGeYIWCNhhbSmakIC3a2kpdqIjDJqTtwHqd6bBATb1IYkl2XMJMURswMabg5IGUzTM1uZrmOxoy5V0MXF%2BEkJ2eRTw2BeBPllg3eM1V9MSbjUjgaz%2F5qkNI04DPZQGt1UnmLTieyWa8sMmj%2FjgVrp1tzYoJBHyYRN%2BtG%2FGAmfgIYhMn91SC92T%2F3o8ZTI2yTt7XdhcaDCoiuvDBjqkAaIM0PL3P46MEsnXmXF8zJN8Z1qmnS3CUi%2FrrSHTVkhswc%2FCDVXR0XVaFA07o%2BDoeU8Z08bUu8cMt1lj4TqU0KTzSVxQU3MIjFcRrYc85bl1UqVOrB1AHC6udz8i3SwQmRDe3m9EUeLmafrxWfBm6ApwFAiCdeO%2BapcGhgFeqVtp0NZJpLMh%2BZNg2LACDrwdi%2BBODdGm2x1CzKxAIWWf1BmxcPWL&X-Amz-Signature=5e3cf5003c3a04d4788e184618ecd67f9a5e39f42d7ae4c39f0d05e20c25a7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYU3IHM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCAQ2TOPY15h9O55oVj8fcdyMqv1q5rLA4FDkWHmWNZjwIhANEVKJaS0wVETAzSEEL9KSBy7tgDO31zoZr50w42SQMNKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwgkhzx8XzpQ8mPbbcq3ANa2K5sp9p055BUsj8UOR0GAT5CIj1rD25mDy3%2Bu4QowFONFkNDIi2EtCMcRISu4kAjU2ldBaBp0YLg%2F5AFwLVKaLGtC5B3Wtzqs2GICKEQALTTcYOKAx0MedH2Ee5%2BcYmVuULKBk72zFlF%2B19QOlMgP0y3OT1amye7FHVUz397wXwsq9sd8J0q1c0bXCzoPVfmycHnyz%2BWD7yWFJyZGHtZQg%2FAcb1LZLZLIfzSuVKQiK%2FL3fFdiRHnpd6WFijKOBKtJQQMQ8%2BcEncmC7xjFYPTKVQnEWiA9%2FFj6MLaVsMcl5WH7U4sq8p99E1x7UoDfM8lbzJJeOfrkrcAbXMNsKPiTYIqLUPFzsSx33uyMgkROpZVY7Fp3D7n%2F5Gu%2Fqeax4ci40QLPOLFUB82NwvXEjR1p1u%2BuW6ds%2B%2BdY3PAuPEhX67sjj8frYpGeYIWCNhhbSmakIC3a2kpdqIjDJqTtwHqd6bBATb1IYkl2XMJMURswMabg5IGUzTM1uZrmOxoy5V0MXF%2BEkJ2eRTw2BeBPllg3eM1V9MSbjUjgaz%2F5qkNI04DPZQGt1UnmLTieyWa8sMmj%2FjgVrp1tzYoJBHyYRN%2BtG%2FGAmfgIYhMn91SC92T%2F3o8ZTI2yTt7XdhcaDCoiuvDBjqkAaIM0PL3P46MEsnXmXF8zJN8Z1qmnS3CUi%2FrrSHTVkhswc%2FCDVXR0XVaFA07o%2BDoeU8Z08bUu8cMt1lj4TqU0KTzSVxQU3MIjFcRrYc85bl1UqVOrB1AHC6udz8i3SwQmRDe3m9EUeLmafrxWfBm6ApwFAiCdeO%2BapcGhgFeqVtp0NZJpLMh%2BZNg2LACDrwdi%2BBODdGm2x1CzKxAIWWf1BmxcPWL&X-Amz-Signature=e0e223bce73159ee0051251edbb9af714e0a37716781d69edb3e3aae41f0a3fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYU3IHM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCAQ2TOPY15h9O55oVj8fcdyMqv1q5rLA4FDkWHmWNZjwIhANEVKJaS0wVETAzSEEL9KSBy7tgDO31zoZr50w42SQMNKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwgkhzx8XzpQ8mPbbcq3ANa2K5sp9p055BUsj8UOR0GAT5CIj1rD25mDy3%2Bu4QowFONFkNDIi2EtCMcRISu4kAjU2ldBaBp0YLg%2F5AFwLVKaLGtC5B3Wtzqs2GICKEQALTTcYOKAx0MedH2Ee5%2BcYmVuULKBk72zFlF%2B19QOlMgP0y3OT1amye7FHVUz397wXwsq9sd8J0q1c0bXCzoPVfmycHnyz%2BWD7yWFJyZGHtZQg%2FAcb1LZLZLIfzSuVKQiK%2FL3fFdiRHnpd6WFijKOBKtJQQMQ8%2BcEncmC7xjFYPTKVQnEWiA9%2FFj6MLaVsMcl5WH7U4sq8p99E1x7UoDfM8lbzJJeOfrkrcAbXMNsKPiTYIqLUPFzsSx33uyMgkROpZVY7Fp3D7n%2F5Gu%2Fqeax4ci40QLPOLFUB82NwvXEjR1p1u%2BuW6ds%2B%2BdY3PAuPEhX67sjj8frYpGeYIWCNhhbSmakIC3a2kpdqIjDJqTtwHqd6bBATb1IYkl2XMJMURswMabg5IGUzTM1uZrmOxoy5V0MXF%2BEkJ2eRTw2BeBPllg3eM1V9MSbjUjgaz%2F5qkNI04DPZQGt1UnmLTieyWa8sMmj%2FjgVrp1tzYoJBHyYRN%2BtG%2FGAmfgIYhMn91SC92T%2F3o8ZTI2yTt7XdhcaDCoiuvDBjqkAaIM0PL3P46MEsnXmXF8zJN8Z1qmnS3CUi%2FrrSHTVkhswc%2FCDVXR0XVaFA07o%2BDoeU8Z08bUu8cMt1lj4TqU0KTzSVxQU3MIjFcRrYc85bl1UqVOrB1AHC6udz8i3SwQmRDe3m9EUeLmafrxWfBm6ApwFAiCdeO%2BapcGhgFeqVtp0NZJpLMh%2BZNg2LACDrwdi%2BBODdGm2x1CzKxAIWWf1BmxcPWL&X-Amz-Signature=7b579e08bbbff5dce9e83ee219242379edce02ba535b6fcb611a971567ea2613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYU3IHM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCAQ2TOPY15h9O55oVj8fcdyMqv1q5rLA4FDkWHmWNZjwIhANEVKJaS0wVETAzSEEL9KSBy7tgDO31zoZr50w42SQMNKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwgkhzx8XzpQ8mPbbcq3ANa2K5sp9p055BUsj8UOR0GAT5CIj1rD25mDy3%2Bu4QowFONFkNDIi2EtCMcRISu4kAjU2ldBaBp0YLg%2F5AFwLVKaLGtC5B3Wtzqs2GICKEQALTTcYOKAx0MedH2Ee5%2BcYmVuULKBk72zFlF%2B19QOlMgP0y3OT1amye7FHVUz397wXwsq9sd8J0q1c0bXCzoPVfmycHnyz%2BWD7yWFJyZGHtZQg%2FAcb1LZLZLIfzSuVKQiK%2FL3fFdiRHnpd6WFijKOBKtJQQMQ8%2BcEncmC7xjFYPTKVQnEWiA9%2FFj6MLaVsMcl5WH7U4sq8p99E1x7UoDfM8lbzJJeOfrkrcAbXMNsKPiTYIqLUPFzsSx33uyMgkROpZVY7Fp3D7n%2F5Gu%2Fqeax4ci40QLPOLFUB82NwvXEjR1p1u%2BuW6ds%2B%2BdY3PAuPEhX67sjj8frYpGeYIWCNhhbSmakIC3a2kpdqIjDJqTtwHqd6bBATb1IYkl2XMJMURswMabg5IGUzTM1uZrmOxoy5V0MXF%2BEkJ2eRTw2BeBPllg3eM1V9MSbjUjgaz%2F5qkNI04DPZQGt1UnmLTieyWa8sMmj%2FjgVrp1tzYoJBHyYRN%2BtG%2FGAmfgIYhMn91SC92T%2F3o8ZTI2yTt7XdhcaDCoiuvDBjqkAaIM0PL3P46MEsnXmXF8zJN8Z1qmnS3CUi%2FrrSHTVkhswc%2FCDVXR0XVaFA07o%2BDoeU8Z08bUu8cMt1lj4TqU0KTzSVxQU3MIjFcRrYc85bl1UqVOrB1AHC6udz8i3SwQmRDe3m9EUeLmafrxWfBm6ApwFAiCdeO%2BapcGhgFeqVtp0NZJpLMh%2BZNg2LACDrwdi%2BBODdGm2x1CzKxAIWWf1BmxcPWL&X-Amz-Signature=880d3cae98052732d738a9007c9aedb44dcaa7053d148645a2a3e481aa377852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYU3IHM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCAQ2TOPY15h9O55oVj8fcdyMqv1q5rLA4FDkWHmWNZjwIhANEVKJaS0wVETAzSEEL9KSBy7tgDO31zoZr50w42SQMNKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwgkhzx8XzpQ8mPbbcq3ANa2K5sp9p055BUsj8UOR0GAT5CIj1rD25mDy3%2Bu4QowFONFkNDIi2EtCMcRISu4kAjU2ldBaBp0YLg%2F5AFwLVKaLGtC5B3Wtzqs2GICKEQALTTcYOKAx0MedH2Ee5%2BcYmVuULKBk72zFlF%2B19QOlMgP0y3OT1amye7FHVUz397wXwsq9sd8J0q1c0bXCzoPVfmycHnyz%2BWD7yWFJyZGHtZQg%2FAcb1LZLZLIfzSuVKQiK%2FL3fFdiRHnpd6WFijKOBKtJQQMQ8%2BcEncmC7xjFYPTKVQnEWiA9%2FFj6MLaVsMcl5WH7U4sq8p99E1x7UoDfM8lbzJJeOfrkrcAbXMNsKPiTYIqLUPFzsSx33uyMgkROpZVY7Fp3D7n%2F5Gu%2Fqeax4ci40QLPOLFUB82NwvXEjR1p1u%2BuW6ds%2B%2BdY3PAuPEhX67sjj8frYpGeYIWCNhhbSmakIC3a2kpdqIjDJqTtwHqd6bBATb1IYkl2XMJMURswMabg5IGUzTM1uZrmOxoy5V0MXF%2BEkJ2eRTw2BeBPllg3eM1V9MSbjUjgaz%2F5qkNI04DPZQGt1UnmLTieyWa8sMmj%2FjgVrp1tzYoJBHyYRN%2BtG%2FGAmfgIYhMn91SC92T%2F3o8ZTI2yTt7XdhcaDCoiuvDBjqkAaIM0PL3P46MEsnXmXF8zJN8Z1qmnS3CUi%2FrrSHTVkhswc%2FCDVXR0XVaFA07o%2BDoeU8Z08bUu8cMt1lj4TqU0KTzSVxQU3MIjFcRrYc85bl1UqVOrB1AHC6udz8i3SwQmRDe3m9EUeLmafrxWfBm6ApwFAiCdeO%2BapcGhgFeqVtp0NZJpLMh%2BZNg2LACDrwdi%2BBODdGm2x1CzKxAIWWf1BmxcPWL&X-Amz-Signature=4e1332501c7bb2d3b39a412e11744292064cb6c5dc0b15c35cb6cf4e83a41e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
