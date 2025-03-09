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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXT64SB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGrToTHd38sjn1MCYoxFPcBvNIhMWsCJjSpKsTxLAsdtAiEAz5TZIKfoidGqgvEdqIAs8A7xAHQE8G%2BNLTHKB0OHhGYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAt%2Fn56%2BoZh4ucoCXircAzYwxytJJURaArJ8SJIyZjJeeqI3Nwww8eHwwBHq5L9GvK%2FynUHU2nqKGsabJrNBo7KRTaTTxN4LugIXL6laCo3lPZSVFPDxgxqEHCOURK9wiKruqD%2FKb3p3nuoncGWlLCOjhaw3asqBPsKNiBebkOwyb3cuwquVBw9yt5Lg%2BMWSbZkD5RVRpopWyKQe0DB7cO1WYv9v2bFyerpD1fWxETIb%2BpeMOgbS9lThBemOmHFSMIR7Ke166qFK8IfO%2FT4rMTF2NZ5gwMEdnXuJzD%2FIXXb1ySeB2kG90ji2CvH9QsAUiDXfQUOAkcI1plIlMhGtvcbxFzaTnXXVCbKo%2B1jG6lEQY1FxxiBw2pwe850VqCaUyO210WZLLavGy3tORhyFy6sjZtxBHRrFSGngx18fH2u8bI%2Fai8GG4ljE6zSaxoAYXUwJnXhjBer9f2evbh1OYOLbhoDmjxpt56KglGqg5qM%2BJJ7N8ltUIZDaLAVHaKwDyw%2FIVffOrROEzrMf7mmUUtOC4dgqu8yMW9qv0bMaItVslggRxQODWNXeUA45arEq8b6FG%2Bg%2BwcxlOachyqcMMP384om%2Bp84b8g6O96mNu7NzXYlUjU1T46VPxgq5%2BKkOdMnM9mWpguRjQDg8MLaPtr4GOqUB%2BooFNb3ccXbu3mDfImSkoOobaqG6TlM5Om3piH9h6Cd9SGopuqxgXkloAnKy6E0%2F8kK4uZXeqcjVa4FZnKlNRyWRfLYIlvFiDWJLNkywOwROxtaqRscxR1n6Z%2FfalZdDb3ysDkPKcWPxJRBIgFlzf2k9ab3R92ZBwG7Z3MAFly5L7%2BgZNDKOkI6YbcYrdnyQ8JV%2BNn2tkMcYtI2to31pfIczq9J9&X-Amz-Signature=cddd6f5ea798f690a91a940798ad005c8ed0360c86092232c75a050dd3e11b86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXT64SB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGrToTHd38sjn1MCYoxFPcBvNIhMWsCJjSpKsTxLAsdtAiEAz5TZIKfoidGqgvEdqIAs8A7xAHQE8G%2BNLTHKB0OHhGYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAt%2Fn56%2BoZh4ucoCXircAzYwxytJJURaArJ8SJIyZjJeeqI3Nwww8eHwwBHq5L9GvK%2FynUHU2nqKGsabJrNBo7KRTaTTxN4LugIXL6laCo3lPZSVFPDxgxqEHCOURK9wiKruqD%2FKb3p3nuoncGWlLCOjhaw3asqBPsKNiBebkOwyb3cuwquVBw9yt5Lg%2BMWSbZkD5RVRpopWyKQe0DB7cO1WYv9v2bFyerpD1fWxETIb%2BpeMOgbS9lThBemOmHFSMIR7Ke166qFK8IfO%2FT4rMTF2NZ5gwMEdnXuJzD%2FIXXb1ySeB2kG90ji2CvH9QsAUiDXfQUOAkcI1plIlMhGtvcbxFzaTnXXVCbKo%2B1jG6lEQY1FxxiBw2pwe850VqCaUyO210WZLLavGy3tORhyFy6sjZtxBHRrFSGngx18fH2u8bI%2Fai8GG4ljE6zSaxoAYXUwJnXhjBer9f2evbh1OYOLbhoDmjxpt56KglGqg5qM%2BJJ7N8ltUIZDaLAVHaKwDyw%2FIVffOrROEzrMf7mmUUtOC4dgqu8yMW9qv0bMaItVslggRxQODWNXeUA45arEq8b6FG%2Bg%2BwcxlOachyqcMMP384om%2Bp84b8g6O96mNu7NzXYlUjU1T46VPxgq5%2BKkOdMnM9mWpguRjQDg8MLaPtr4GOqUB%2BooFNb3ccXbu3mDfImSkoOobaqG6TlM5Om3piH9h6Cd9SGopuqxgXkloAnKy6E0%2F8kK4uZXeqcjVa4FZnKlNRyWRfLYIlvFiDWJLNkywOwROxtaqRscxR1n6Z%2FfalZdDb3ysDkPKcWPxJRBIgFlzf2k9ab3R92ZBwG7Z3MAFly5L7%2BgZNDKOkI6YbcYrdnyQ8JV%2BNn2tkMcYtI2to31pfIczq9J9&X-Amz-Signature=1ed96f0fb72c91536589f0afddc4f79b97a1e6559e62c51ec5b447f589a8b80a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXT64SB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGrToTHd38sjn1MCYoxFPcBvNIhMWsCJjSpKsTxLAsdtAiEAz5TZIKfoidGqgvEdqIAs8A7xAHQE8G%2BNLTHKB0OHhGYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAt%2Fn56%2BoZh4ucoCXircAzYwxytJJURaArJ8SJIyZjJeeqI3Nwww8eHwwBHq5L9GvK%2FynUHU2nqKGsabJrNBo7KRTaTTxN4LugIXL6laCo3lPZSVFPDxgxqEHCOURK9wiKruqD%2FKb3p3nuoncGWlLCOjhaw3asqBPsKNiBebkOwyb3cuwquVBw9yt5Lg%2BMWSbZkD5RVRpopWyKQe0DB7cO1WYv9v2bFyerpD1fWxETIb%2BpeMOgbS9lThBemOmHFSMIR7Ke166qFK8IfO%2FT4rMTF2NZ5gwMEdnXuJzD%2FIXXb1ySeB2kG90ji2CvH9QsAUiDXfQUOAkcI1plIlMhGtvcbxFzaTnXXVCbKo%2B1jG6lEQY1FxxiBw2pwe850VqCaUyO210WZLLavGy3tORhyFy6sjZtxBHRrFSGngx18fH2u8bI%2Fai8GG4ljE6zSaxoAYXUwJnXhjBer9f2evbh1OYOLbhoDmjxpt56KglGqg5qM%2BJJ7N8ltUIZDaLAVHaKwDyw%2FIVffOrROEzrMf7mmUUtOC4dgqu8yMW9qv0bMaItVslggRxQODWNXeUA45arEq8b6FG%2Bg%2BwcxlOachyqcMMP384om%2Bp84b8g6O96mNu7NzXYlUjU1T46VPxgq5%2BKkOdMnM9mWpguRjQDg8MLaPtr4GOqUB%2BooFNb3ccXbu3mDfImSkoOobaqG6TlM5Om3piH9h6Cd9SGopuqxgXkloAnKy6E0%2F8kK4uZXeqcjVa4FZnKlNRyWRfLYIlvFiDWJLNkywOwROxtaqRscxR1n6Z%2FfalZdDb3ysDkPKcWPxJRBIgFlzf2k9ab3R92ZBwG7Z3MAFly5L7%2BgZNDKOkI6YbcYrdnyQ8JV%2BNn2tkMcYtI2to31pfIczq9J9&X-Amz-Signature=947a4c6f28ccc5eb03ac3dc622e72d30f53a86f92754b89def57c3f934ef4c30&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXT64SB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGrToTHd38sjn1MCYoxFPcBvNIhMWsCJjSpKsTxLAsdtAiEAz5TZIKfoidGqgvEdqIAs8A7xAHQE8G%2BNLTHKB0OHhGYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAt%2Fn56%2BoZh4ucoCXircAzYwxytJJURaArJ8SJIyZjJeeqI3Nwww8eHwwBHq5L9GvK%2FynUHU2nqKGsabJrNBo7KRTaTTxN4LugIXL6laCo3lPZSVFPDxgxqEHCOURK9wiKruqD%2FKb3p3nuoncGWlLCOjhaw3asqBPsKNiBebkOwyb3cuwquVBw9yt5Lg%2BMWSbZkD5RVRpopWyKQe0DB7cO1WYv9v2bFyerpD1fWxETIb%2BpeMOgbS9lThBemOmHFSMIR7Ke166qFK8IfO%2FT4rMTF2NZ5gwMEdnXuJzD%2FIXXb1ySeB2kG90ji2CvH9QsAUiDXfQUOAkcI1plIlMhGtvcbxFzaTnXXVCbKo%2B1jG6lEQY1FxxiBw2pwe850VqCaUyO210WZLLavGy3tORhyFy6sjZtxBHRrFSGngx18fH2u8bI%2Fai8GG4ljE6zSaxoAYXUwJnXhjBer9f2evbh1OYOLbhoDmjxpt56KglGqg5qM%2BJJ7N8ltUIZDaLAVHaKwDyw%2FIVffOrROEzrMf7mmUUtOC4dgqu8yMW9qv0bMaItVslggRxQODWNXeUA45arEq8b6FG%2Bg%2BwcxlOachyqcMMP384om%2Bp84b8g6O96mNu7NzXYlUjU1T46VPxgq5%2BKkOdMnM9mWpguRjQDg8MLaPtr4GOqUB%2BooFNb3ccXbu3mDfImSkoOobaqG6TlM5Om3piH9h6Cd9SGopuqxgXkloAnKy6E0%2F8kK4uZXeqcjVa4FZnKlNRyWRfLYIlvFiDWJLNkywOwROxtaqRscxR1n6Z%2FfalZdDb3ysDkPKcWPxJRBIgFlzf2k9ab3R92ZBwG7Z3MAFly5L7%2BgZNDKOkI6YbcYrdnyQ8JV%2BNn2tkMcYtI2to31pfIczq9J9&X-Amz-Signature=d78c8825b8a762c2e14a3c9f434c54ae4abe67ee9e1fe69253ca1a1e3e15c64b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXT64SB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGrToTHd38sjn1MCYoxFPcBvNIhMWsCJjSpKsTxLAsdtAiEAz5TZIKfoidGqgvEdqIAs8A7xAHQE8G%2BNLTHKB0OHhGYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAt%2Fn56%2BoZh4ucoCXircAzYwxytJJURaArJ8SJIyZjJeeqI3Nwww8eHwwBHq5L9GvK%2FynUHU2nqKGsabJrNBo7KRTaTTxN4LugIXL6laCo3lPZSVFPDxgxqEHCOURK9wiKruqD%2FKb3p3nuoncGWlLCOjhaw3asqBPsKNiBebkOwyb3cuwquVBw9yt5Lg%2BMWSbZkD5RVRpopWyKQe0DB7cO1WYv9v2bFyerpD1fWxETIb%2BpeMOgbS9lThBemOmHFSMIR7Ke166qFK8IfO%2FT4rMTF2NZ5gwMEdnXuJzD%2FIXXb1ySeB2kG90ji2CvH9QsAUiDXfQUOAkcI1plIlMhGtvcbxFzaTnXXVCbKo%2B1jG6lEQY1FxxiBw2pwe850VqCaUyO210WZLLavGy3tORhyFy6sjZtxBHRrFSGngx18fH2u8bI%2Fai8GG4ljE6zSaxoAYXUwJnXhjBer9f2evbh1OYOLbhoDmjxpt56KglGqg5qM%2BJJ7N8ltUIZDaLAVHaKwDyw%2FIVffOrROEzrMf7mmUUtOC4dgqu8yMW9qv0bMaItVslggRxQODWNXeUA45arEq8b6FG%2Bg%2BwcxlOachyqcMMP384om%2Bp84b8g6O96mNu7NzXYlUjU1T46VPxgq5%2BKkOdMnM9mWpguRjQDg8MLaPtr4GOqUB%2BooFNb3ccXbu3mDfImSkoOobaqG6TlM5Om3piH9h6Cd9SGopuqxgXkloAnKy6E0%2F8kK4uZXeqcjVa4FZnKlNRyWRfLYIlvFiDWJLNkywOwROxtaqRscxR1n6Z%2FfalZdDb3ysDkPKcWPxJRBIgFlzf2k9ab3R92ZBwG7Z3MAFly5L7%2BgZNDKOkI6YbcYrdnyQ8JV%2BNn2tkMcYtI2to31pfIczq9J9&X-Amz-Signature=de6b25986e3885d1030a76a62a79a522039f3de056316beb900ce5ca2d51841b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXT64SB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGrToTHd38sjn1MCYoxFPcBvNIhMWsCJjSpKsTxLAsdtAiEAz5TZIKfoidGqgvEdqIAs8A7xAHQE8G%2BNLTHKB0OHhGYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAt%2Fn56%2BoZh4ucoCXircAzYwxytJJURaArJ8SJIyZjJeeqI3Nwww8eHwwBHq5L9GvK%2FynUHU2nqKGsabJrNBo7KRTaTTxN4LugIXL6laCo3lPZSVFPDxgxqEHCOURK9wiKruqD%2FKb3p3nuoncGWlLCOjhaw3asqBPsKNiBebkOwyb3cuwquVBw9yt5Lg%2BMWSbZkD5RVRpopWyKQe0DB7cO1WYv9v2bFyerpD1fWxETIb%2BpeMOgbS9lThBemOmHFSMIR7Ke166qFK8IfO%2FT4rMTF2NZ5gwMEdnXuJzD%2FIXXb1ySeB2kG90ji2CvH9QsAUiDXfQUOAkcI1plIlMhGtvcbxFzaTnXXVCbKo%2B1jG6lEQY1FxxiBw2pwe850VqCaUyO210WZLLavGy3tORhyFy6sjZtxBHRrFSGngx18fH2u8bI%2Fai8GG4ljE6zSaxoAYXUwJnXhjBer9f2evbh1OYOLbhoDmjxpt56KglGqg5qM%2BJJ7N8ltUIZDaLAVHaKwDyw%2FIVffOrROEzrMf7mmUUtOC4dgqu8yMW9qv0bMaItVslggRxQODWNXeUA45arEq8b6FG%2Bg%2BwcxlOachyqcMMP384om%2Bp84b8g6O96mNu7NzXYlUjU1T46VPxgq5%2BKkOdMnM9mWpguRjQDg8MLaPtr4GOqUB%2BooFNb3ccXbu3mDfImSkoOobaqG6TlM5Om3piH9h6Cd9SGopuqxgXkloAnKy6E0%2F8kK4uZXeqcjVa4FZnKlNRyWRfLYIlvFiDWJLNkywOwROxtaqRscxR1n6Z%2FfalZdDb3ysDkPKcWPxJRBIgFlzf2k9ab3R92ZBwG7Z3MAFly5L7%2BgZNDKOkI6YbcYrdnyQ8JV%2BNn2tkMcYtI2to31pfIczq9J9&X-Amz-Signature=2a16995de08cca7537b50be60b3805b5c9b8c4ade21264b86ac4d3fb54ad827d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXT64SB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGrToTHd38sjn1MCYoxFPcBvNIhMWsCJjSpKsTxLAsdtAiEAz5TZIKfoidGqgvEdqIAs8A7xAHQE8G%2BNLTHKB0OHhGYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAt%2Fn56%2BoZh4ucoCXircAzYwxytJJURaArJ8SJIyZjJeeqI3Nwww8eHwwBHq5L9GvK%2FynUHU2nqKGsabJrNBo7KRTaTTxN4LugIXL6laCo3lPZSVFPDxgxqEHCOURK9wiKruqD%2FKb3p3nuoncGWlLCOjhaw3asqBPsKNiBebkOwyb3cuwquVBw9yt5Lg%2BMWSbZkD5RVRpopWyKQe0DB7cO1WYv9v2bFyerpD1fWxETIb%2BpeMOgbS9lThBemOmHFSMIR7Ke166qFK8IfO%2FT4rMTF2NZ5gwMEdnXuJzD%2FIXXb1ySeB2kG90ji2CvH9QsAUiDXfQUOAkcI1plIlMhGtvcbxFzaTnXXVCbKo%2B1jG6lEQY1FxxiBw2pwe850VqCaUyO210WZLLavGy3tORhyFy6sjZtxBHRrFSGngx18fH2u8bI%2Fai8GG4ljE6zSaxoAYXUwJnXhjBer9f2evbh1OYOLbhoDmjxpt56KglGqg5qM%2BJJ7N8ltUIZDaLAVHaKwDyw%2FIVffOrROEzrMf7mmUUtOC4dgqu8yMW9qv0bMaItVslggRxQODWNXeUA45arEq8b6FG%2Bg%2BwcxlOachyqcMMP384om%2Bp84b8g6O96mNu7NzXYlUjU1T46VPxgq5%2BKkOdMnM9mWpguRjQDg8MLaPtr4GOqUB%2BooFNb3ccXbu3mDfImSkoOobaqG6TlM5Om3piH9h6Cd9SGopuqxgXkloAnKy6E0%2F8kK4uZXeqcjVa4FZnKlNRyWRfLYIlvFiDWJLNkywOwROxtaqRscxR1n6Z%2FfalZdDb3ysDkPKcWPxJRBIgFlzf2k9ab3R92ZBwG7Z3MAFly5L7%2BgZNDKOkI6YbcYrdnyQ8JV%2BNn2tkMcYtI2to31pfIczq9J9&X-Amz-Signature=4b7bc5f133ba352c310030313ccd0995d00885394d113f2530a000fce0c86d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
