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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXTCYJW%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHMfFcVjQAdsnIrrcPTPdCSWTaQx2r7PdZaY2%2BIBzEgWAiEAvDgqoUWfjBw%2Bfa5E%2FjlkJjRzjpGI4lNkB4YAN9v6AGYq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDOlVnY2p5gtfRIJ4gircA6Gy57R2ElhTc%2Frj9zvS3GWD46MOztcErxXQgq5cNI74PA42tyVYwKCRyKc9ImitvdWQdPSazy%2BOZi9X1kCsbjhZ0ZvKKPrZFBoB3S6ood3pRfmMa6Yfjjob3tdnrv1MeT2LICsU9oFbOtrIUYDZdL%2FOToCnQ%2FJ2%2F9EoQM51QZnakMLU%2FJmzyc2zDBWCJp4BEYmD%2BIjE1Y%2FNwBU5wKbKanQhppsBpLYsjQEPY9Bfn1aTSrkjY23AngazB7ZCCsIYOTJxddvztQ8ziEw9W%2BqbWcVWNXEPC5NUXr3y1%2FU5mIQoVdrN997iBxEx19NdUzctC4x2SlFjlOmFxTvYWAJgindQkIocMNq1i73Wzw4U93vCQ%2FQxLAzmjgftUtPd5m9EihXGx5ryKCf8p1IcQLnA9E%2FgVs8sdnjieVhxsP0O2b9DwvqejQI4arpV5Rtv5kKvN15oxaWIf1x8FRqKshU4QQH7F1CoC56l1CmIpxthtCtLVbjqlgwLVeuQP75utElq9orHRgGeajlGE%2FaExMFqnEeh%2FXNM%2BkBgLHs%2BlK9TFHRCErf4KP2SM%2B4IeadPgvoAIKpg1Zi%2BUrz97A2ZmhlXnyC7IjKLaG0jsy2JFNbGRT7KmEwrKzIDmKBTr6guMOaQ4coGOqUBwJay13NxfPNSpFKdIJm%2BU6OKevpHy7WFy4b8oO3XUggrRgMigbiTZmQWsy0XRafZNrOjYU329u977HNmiqPqLbbvvtnsu%2F1uiO34Yvs27RALbPajQdE3njAzE8KVUYlyjVBol5iTzuKE75b62rixk6V4lTo5ZMBqiq6bLL52l53bFbIkLFSL%2B8o0qfRWdTv9L6TDtKkeH1mHNHloZlPN9xaREp7Y&X-Amz-Signature=a3b3e26dce4d250a6a483d399c228ea34cd28f9e2a900cb89b80b055c02de2b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXTCYJW%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHMfFcVjQAdsnIrrcPTPdCSWTaQx2r7PdZaY2%2BIBzEgWAiEAvDgqoUWfjBw%2Bfa5E%2FjlkJjRzjpGI4lNkB4YAN9v6AGYq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDOlVnY2p5gtfRIJ4gircA6Gy57R2ElhTc%2Frj9zvS3GWD46MOztcErxXQgq5cNI74PA42tyVYwKCRyKc9ImitvdWQdPSazy%2BOZi9X1kCsbjhZ0ZvKKPrZFBoB3S6ood3pRfmMa6Yfjjob3tdnrv1MeT2LICsU9oFbOtrIUYDZdL%2FOToCnQ%2FJ2%2F9EoQM51QZnakMLU%2FJmzyc2zDBWCJp4BEYmD%2BIjE1Y%2FNwBU5wKbKanQhppsBpLYsjQEPY9Bfn1aTSrkjY23AngazB7ZCCsIYOTJxddvztQ8ziEw9W%2BqbWcVWNXEPC5NUXr3y1%2FU5mIQoVdrN997iBxEx19NdUzctC4x2SlFjlOmFxTvYWAJgindQkIocMNq1i73Wzw4U93vCQ%2FQxLAzmjgftUtPd5m9EihXGx5ryKCf8p1IcQLnA9E%2FgVs8sdnjieVhxsP0O2b9DwvqejQI4arpV5Rtv5kKvN15oxaWIf1x8FRqKshU4QQH7F1CoC56l1CmIpxthtCtLVbjqlgwLVeuQP75utElq9orHRgGeajlGE%2FaExMFqnEeh%2FXNM%2BkBgLHs%2BlK9TFHRCErf4KP2SM%2B4IeadPgvoAIKpg1Zi%2BUrz97A2ZmhlXnyC7IjKLaG0jsy2JFNbGRT7KmEwrKzIDmKBTr6guMOaQ4coGOqUBwJay13NxfPNSpFKdIJm%2BU6OKevpHy7WFy4b8oO3XUggrRgMigbiTZmQWsy0XRafZNrOjYU329u977HNmiqPqLbbvvtnsu%2F1uiO34Yvs27RALbPajQdE3njAzE8KVUYlyjVBol5iTzuKE75b62rixk6V4lTo5ZMBqiq6bLL52l53bFbIkLFSL%2B8o0qfRWdTv9L6TDtKkeH1mHNHloZlPN9xaREp7Y&X-Amz-Signature=7978c490111f3ac18eb663cb65bd5724cf461d62000552c5baebb22df78c968d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXTCYJW%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHMfFcVjQAdsnIrrcPTPdCSWTaQx2r7PdZaY2%2BIBzEgWAiEAvDgqoUWfjBw%2Bfa5E%2FjlkJjRzjpGI4lNkB4YAN9v6AGYq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDOlVnY2p5gtfRIJ4gircA6Gy57R2ElhTc%2Frj9zvS3GWD46MOztcErxXQgq5cNI74PA42tyVYwKCRyKc9ImitvdWQdPSazy%2BOZi9X1kCsbjhZ0ZvKKPrZFBoB3S6ood3pRfmMa6Yfjjob3tdnrv1MeT2LICsU9oFbOtrIUYDZdL%2FOToCnQ%2FJ2%2F9EoQM51QZnakMLU%2FJmzyc2zDBWCJp4BEYmD%2BIjE1Y%2FNwBU5wKbKanQhppsBpLYsjQEPY9Bfn1aTSrkjY23AngazB7ZCCsIYOTJxddvztQ8ziEw9W%2BqbWcVWNXEPC5NUXr3y1%2FU5mIQoVdrN997iBxEx19NdUzctC4x2SlFjlOmFxTvYWAJgindQkIocMNq1i73Wzw4U93vCQ%2FQxLAzmjgftUtPd5m9EihXGx5ryKCf8p1IcQLnA9E%2FgVs8sdnjieVhxsP0O2b9DwvqejQI4arpV5Rtv5kKvN15oxaWIf1x8FRqKshU4QQH7F1CoC56l1CmIpxthtCtLVbjqlgwLVeuQP75utElq9orHRgGeajlGE%2FaExMFqnEeh%2FXNM%2BkBgLHs%2BlK9TFHRCErf4KP2SM%2B4IeadPgvoAIKpg1Zi%2BUrz97A2ZmhlXnyC7IjKLaG0jsy2JFNbGRT7KmEwrKzIDmKBTr6guMOaQ4coGOqUBwJay13NxfPNSpFKdIJm%2BU6OKevpHy7WFy4b8oO3XUggrRgMigbiTZmQWsy0XRafZNrOjYU329u977HNmiqPqLbbvvtnsu%2F1uiO34Yvs27RALbPajQdE3njAzE8KVUYlyjVBol5iTzuKE75b62rixk6V4lTo5ZMBqiq6bLL52l53bFbIkLFSL%2B8o0qfRWdTv9L6TDtKkeH1mHNHloZlPN9xaREp7Y&X-Amz-Signature=0ebbf1f454ed08f18f9c262e3dfc40d226ce725597ad62c5d0a4a698b5eda99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXTCYJW%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHMfFcVjQAdsnIrrcPTPdCSWTaQx2r7PdZaY2%2BIBzEgWAiEAvDgqoUWfjBw%2Bfa5E%2FjlkJjRzjpGI4lNkB4YAN9v6AGYq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDOlVnY2p5gtfRIJ4gircA6Gy57R2ElhTc%2Frj9zvS3GWD46MOztcErxXQgq5cNI74PA42tyVYwKCRyKc9ImitvdWQdPSazy%2BOZi9X1kCsbjhZ0ZvKKPrZFBoB3S6ood3pRfmMa6Yfjjob3tdnrv1MeT2LICsU9oFbOtrIUYDZdL%2FOToCnQ%2FJ2%2F9EoQM51QZnakMLU%2FJmzyc2zDBWCJp4BEYmD%2BIjE1Y%2FNwBU5wKbKanQhppsBpLYsjQEPY9Bfn1aTSrkjY23AngazB7ZCCsIYOTJxddvztQ8ziEw9W%2BqbWcVWNXEPC5NUXr3y1%2FU5mIQoVdrN997iBxEx19NdUzctC4x2SlFjlOmFxTvYWAJgindQkIocMNq1i73Wzw4U93vCQ%2FQxLAzmjgftUtPd5m9EihXGx5ryKCf8p1IcQLnA9E%2FgVs8sdnjieVhxsP0O2b9DwvqejQI4arpV5Rtv5kKvN15oxaWIf1x8FRqKshU4QQH7F1CoC56l1CmIpxthtCtLVbjqlgwLVeuQP75utElq9orHRgGeajlGE%2FaExMFqnEeh%2FXNM%2BkBgLHs%2BlK9TFHRCErf4KP2SM%2B4IeadPgvoAIKpg1Zi%2BUrz97A2ZmhlXnyC7IjKLaG0jsy2JFNbGRT7KmEwrKzIDmKBTr6guMOaQ4coGOqUBwJay13NxfPNSpFKdIJm%2BU6OKevpHy7WFy4b8oO3XUggrRgMigbiTZmQWsy0XRafZNrOjYU329u977HNmiqPqLbbvvtnsu%2F1uiO34Yvs27RALbPajQdE3njAzE8KVUYlyjVBol5iTzuKE75b62rixk6V4lTo5ZMBqiq6bLL52l53bFbIkLFSL%2B8o0qfRWdTv9L6TDtKkeH1mHNHloZlPN9xaREp7Y&X-Amz-Signature=9216a717b44d11bc893dbe7093554a923a9b863ce1e21e838f790d97166b0ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXTCYJW%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHMfFcVjQAdsnIrrcPTPdCSWTaQx2r7PdZaY2%2BIBzEgWAiEAvDgqoUWfjBw%2Bfa5E%2FjlkJjRzjpGI4lNkB4YAN9v6AGYq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDOlVnY2p5gtfRIJ4gircA6Gy57R2ElhTc%2Frj9zvS3GWD46MOztcErxXQgq5cNI74PA42tyVYwKCRyKc9ImitvdWQdPSazy%2BOZi9X1kCsbjhZ0ZvKKPrZFBoB3S6ood3pRfmMa6Yfjjob3tdnrv1MeT2LICsU9oFbOtrIUYDZdL%2FOToCnQ%2FJ2%2F9EoQM51QZnakMLU%2FJmzyc2zDBWCJp4BEYmD%2BIjE1Y%2FNwBU5wKbKanQhppsBpLYsjQEPY9Bfn1aTSrkjY23AngazB7ZCCsIYOTJxddvztQ8ziEw9W%2BqbWcVWNXEPC5NUXr3y1%2FU5mIQoVdrN997iBxEx19NdUzctC4x2SlFjlOmFxTvYWAJgindQkIocMNq1i73Wzw4U93vCQ%2FQxLAzmjgftUtPd5m9EihXGx5ryKCf8p1IcQLnA9E%2FgVs8sdnjieVhxsP0O2b9DwvqejQI4arpV5Rtv5kKvN15oxaWIf1x8FRqKshU4QQH7F1CoC56l1CmIpxthtCtLVbjqlgwLVeuQP75utElq9orHRgGeajlGE%2FaExMFqnEeh%2FXNM%2BkBgLHs%2BlK9TFHRCErf4KP2SM%2B4IeadPgvoAIKpg1Zi%2BUrz97A2ZmhlXnyC7IjKLaG0jsy2JFNbGRT7KmEwrKzIDmKBTr6guMOaQ4coGOqUBwJay13NxfPNSpFKdIJm%2BU6OKevpHy7WFy4b8oO3XUggrRgMigbiTZmQWsy0XRafZNrOjYU329u977HNmiqPqLbbvvtnsu%2F1uiO34Yvs27RALbPajQdE3njAzE8KVUYlyjVBol5iTzuKE75b62rixk6V4lTo5ZMBqiq6bLL52l53bFbIkLFSL%2B8o0qfRWdTv9L6TDtKkeH1mHNHloZlPN9xaREp7Y&X-Amz-Signature=4475d124774d1f38714bb1aed18e6b9ebf2c2d98c07c4e5123b6c51b9bd09814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXTCYJW%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHMfFcVjQAdsnIrrcPTPdCSWTaQx2r7PdZaY2%2BIBzEgWAiEAvDgqoUWfjBw%2Bfa5E%2FjlkJjRzjpGI4lNkB4YAN9v6AGYq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDOlVnY2p5gtfRIJ4gircA6Gy57R2ElhTc%2Frj9zvS3GWD46MOztcErxXQgq5cNI74PA42tyVYwKCRyKc9ImitvdWQdPSazy%2BOZi9X1kCsbjhZ0ZvKKPrZFBoB3S6ood3pRfmMa6Yfjjob3tdnrv1MeT2LICsU9oFbOtrIUYDZdL%2FOToCnQ%2FJ2%2F9EoQM51QZnakMLU%2FJmzyc2zDBWCJp4BEYmD%2BIjE1Y%2FNwBU5wKbKanQhppsBpLYsjQEPY9Bfn1aTSrkjY23AngazB7ZCCsIYOTJxddvztQ8ziEw9W%2BqbWcVWNXEPC5NUXr3y1%2FU5mIQoVdrN997iBxEx19NdUzctC4x2SlFjlOmFxTvYWAJgindQkIocMNq1i73Wzw4U93vCQ%2FQxLAzmjgftUtPd5m9EihXGx5ryKCf8p1IcQLnA9E%2FgVs8sdnjieVhxsP0O2b9DwvqejQI4arpV5Rtv5kKvN15oxaWIf1x8FRqKshU4QQH7F1CoC56l1CmIpxthtCtLVbjqlgwLVeuQP75utElq9orHRgGeajlGE%2FaExMFqnEeh%2FXNM%2BkBgLHs%2BlK9TFHRCErf4KP2SM%2B4IeadPgvoAIKpg1Zi%2BUrz97A2ZmhlXnyC7IjKLaG0jsy2JFNbGRT7KmEwrKzIDmKBTr6guMOaQ4coGOqUBwJay13NxfPNSpFKdIJm%2BU6OKevpHy7WFy4b8oO3XUggrRgMigbiTZmQWsy0XRafZNrOjYU329u977HNmiqPqLbbvvtnsu%2F1uiO34Yvs27RALbPajQdE3njAzE8KVUYlyjVBol5iTzuKE75b62rixk6V4lTo5ZMBqiq6bLL52l53bFbIkLFSL%2B8o0qfRWdTv9L6TDtKkeH1mHNHloZlPN9xaREp7Y&X-Amz-Signature=6f2af17f14a1e1654584f638f650ab9c54fbc5d47017c4a450699b35231bf08e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXTCYJW%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHMfFcVjQAdsnIrrcPTPdCSWTaQx2r7PdZaY2%2BIBzEgWAiEAvDgqoUWfjBw%2Bfa5E%2FjlkJjRzjpGI4lNkB4YAN9v6AGYq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDOlVnY2p5gtfRIJ4gircA6Gy57R2ElhTc%2Frj9zvS3GWD46MOztcErxXQgq5cNI74PA42tyVYwKCRyKc9ImitvdWQdPSazy%2BOZi9X1kCsbjhZ0ZvKKPrZFBoB3S6ood3pRfmMa6Yfjjob3tdnrv1MeT2LICsU9oFbOtrIUYDZdL%2FOToCnQ%2FJ2%2F9EoQM51QZnakMLU%2FJmzyc2zDBWCJp4BEYmD%2BIjE1Y%2FNwBU5wKbKanQhppsBpLYsjQEPY9Bfn1aTSrkjY23AngazB7ZCCsIYOTJxddvztQ8ziEw9W%2BqbWcVWNXEPC5NUXr3y1%2FU5mIQoVdrN997iBxEx19NdUzctC4x2SlFjlOmFxTvYWAJgindQkIocMNq1i73Wzw4U93vCQ%2FQxLAzmjgftUtPd5m9EihXGx5ryKCf8p1IcQLnA9E%2FgVs8sdnjieVhxsP0O2b9DwvqejQI4arpV5Rtv5kKvN15oxaWIf1x8FRqKshU4QQH7F1CoC56l1CmIpxthtCtLVbjqlgwLVeuQP75utElq9orHRgGeajlGE%2FaExMFqnEeh%2FXNM%2BkBgLHs%2BlK9TFHRCErf4KP2SM%2B4IeadPgvoAIKpg1Zi%2BUrz97A2ZmhlXnyC7IjKLaG0jsy2JFNbGRT7KmEwrKzIDmKBTr6guMOaQ4coGOqUBwJay13NxfPNSpFKdIJm%2BU6OKevpHy7WFy4b8oO3XUggrRgMigbiTZmQWsy0XRafZNrOjYU329u977HNmiqPqLbbvvtnsu%2F1uiO34Yvs27RALbPajQdE3njAzE8KVUYlyjVBol5iTzuKE75b62rixk6V4lTo5ZMBqiq6bLL52l53bFbIkLFSL%2B8o0qfRWdTv9L6TDtKkeH1mHNHloZlPN9xaREp7Y&X-Amz-Signature=d4a31e949c1f1632c62ee97fb3ac48237b60492eada782af3b2626fecea99780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
