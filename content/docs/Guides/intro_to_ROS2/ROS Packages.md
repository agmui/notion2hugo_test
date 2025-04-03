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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFEUGYG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMPnSnGiRe1yFdOge0Um4t%2FMinVw4G0ywEwkNhctlmaAiEA2176tkck59BrIdiV%2BC7rKBAkVhNFcMPq6frAlxelBpkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv%2Bp%2FP6jNqz6iNP%2FircA1WuHqiipU0tIUyuE06rRQcOig1PlbZaW9ae7xgObofOvHPC8V%2BHhh3QvZ68FR1QCeYtZ8pY1dqR69Pt1%2FjMgwLhLSGODkpeDIlWbNlMDMC2VQkF0NF9kbfhR8faUyt3s3E6Yq%2Fcbxqc2DqHofNvyjvqqjdR8p8%2BivfgOhC%2BE0z69R9jmKybJiC8bNeDu6uqEoGUOjzMVIALvY6Fyz1qu8Stkk7vYR8TwzrzO6WNdMSOtcJx7NHzpDJI%2FcqqpVRTnbUd9NN3Q3GK8nyOI8jt59XmYZzP8lA%2BwqrCpLNJQEC1%2FDKgag46lWLMzcweK7w%2F%2FFGuVJTENgWe15kSqYctS%2FlG8s0jsp0CnlvH3Y7yG4JKS0o6T30U9YwZeAwQGk1NO%2BFVKs2iY6p%2FYMBDwzyyQwobt1bGnazu1fwWgMRTHW5VFj7KMsmMV%2FGiLMGi6bQl7tnVDXwM35ydEuKDlLNJqt4lrNEFYpsHgiJIn%2BpZItTeqLpoBUjpC4h86CQllbiq3N%2FZ9z93rFUVYUT4%2FrefvnpceYqaON3f5IXt3t%2FYOOLQZXczmoLEmwptoOYelixKVAbJun06QuhTd2FyMQ6PQciWbL%2FeaWnGKoBEx%2BODFGYq1VVbV8YhLxohRiA8MJWXub8GOqUB00QQ7duoKO8E%2FBO7Y0afgwS7hDhZEDwxeiJBXwRczLfBnGb5wUFGwneRys4iQP5mOXGbkUreeUyiIm%2BVgbnRx6u%2Fkf8EajzW1ivQ6zZzAyq1Pri%2F2N8%2FKHWfbK2o2X3EDe0c8gl1etwjc%2B2AZXP6cCSKmODDaRYNc%2FfCPQdmfdHCAZZokBuIwMbzZk8ZPH%2B3sL9Ncb3JFr9Zf7sPk0kp4rmfl%2Bnt&X-Amz-Signature=a6e7e4dad70788066154bb3c2486eda3b51bfd372fd4bd2dd522bf5f3e29fc20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFEUGYG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMPnSnGiRe1yFdOge0Um4t%2FMinVw4G0ywEwkNhctlmaAiEA2176tkck59BrIdiV%2BC7rKBAkVhNFcMPq6frAlxelBpkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv%2Bp%2FP6jNqz6iNP%2FircA1WuHqiipU0tIUyuE06rRQcOig1PlbZaW9ae7xgObofOvHPC8V%2BHhh3QvZ68FR1QCeYtZ8pY1dqR69Pt1%2FjMgwLhLSGODkpeDIlWbNlMDMC2VQkF0NF9kbfhR8faUyt3s3E6Yq%2Fcbxqc2DqHofNvyjvqqjdR8p8%2BivfgOhC%2BE0z69R9jmKybJiC8bNeDu6uqEoGUOjzMVIALvY6Fyz1qu8Stkk7vYR8TwzrzO6WNdMSOtcJx7NHzpDJI%2FcqqpVRTnbUd9NN3Q3GK8nyOI8jt59XmYZzP8lA%2BwqrCpLNJQEC1%2FDKgag46lWLMzcweK7w%2F%2FFGuVJTENgWe15kSqYctS%2FlG8s0jsp0CnlvH3Y7yG4JKS0o6T30U9YwZeAwQGk1NO%2BFVKs2iY6p%2FYMBDwzyyQwobt1bGnazu1fwWgMRTHW5VFj7KMsmMV%2FGiLMGi6bQl7tnVDXwM35ydEuKDlLNJqt4lrNEFYpsHgiJIn%2BpZItTeqLpoBUjpC4h86CQllbiq3N%2FZ9z93rFUVYUT4%2FrefvnpceYqaON3f5IXt3t%2FYOOLQZXczmoLEmwptoOYelixKVAbJun06QuhTd2FyMQ6PQciWbL%2FeaWnGKoBEx%2BODFGYq1VVbV8YhLxohRiA8MJWXub8GOqUB00QQ7duoKO8E%2FBO7Y0afgwS7hDhZEDwxeiJBXwRczLfBnGb5wUFGwneRys4iQP5mOXGbkUreeUyiIm%2BVgbnRx6u%2Fkf8EajzW1ivQ6zZzAyq1Pri%2F2N8%2FKHWfbK2o2X3EDe0c8gl1etwjc%2B2AZXP6cCSKmODDaRYNc%2FfCPQdmfdHCAZZokBuIwMbzZk8ZPH%2B3sL9Ncb3JFr9Zf7sPk0kp4rmfl%2Bnt&X-Amz-Signature=23fcb7c10560c53c0bd87c9c55acaced9327903442ffea4f153025639ae77109&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFEUGYG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMPnSnGiRe1yFdOge0Um4t%2FMinVw4G0ywEwkNhctlmaAiEA2176tkck59BrIdiV%2BC7rKBAkVhNFcMPq6frAlxelBpkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv%2Bp%2FP6jNqz6iNP%2FircA1WuHqiipU0tIUyuE06rRQcOig1PlbZaW9ae7xgObofOvHPC8V%2BHhh3QvZ68FR1QCeYtZ8pY1dqR69Pt1%2FjMgwLhLSGODkpeDIlWbNlMDMC2VQkF0NF9kbfhR8faUyt3s3E6Yq%2Fcbxqc2DqHofNvyjvqqjdR8p8%2BivfgOhC%2BE0z69R9jmKybJiC8bNeDu6uqEoGUOjzMVIALvY6Fyz1qu8Stkk7vYR8TwzrzO6WNdMSOtcJx7NHzpDJI%2FcqqpVRTnbUd9NN3Q3GK8nyOI8jt59XmYZzP8lA%2BwqrCpLNJQEC1%2FDKgag46lWLMzcweK7w%2F%2FFGuVJTENgWe15kSqYctS%2FlG8s0jsp0CnlvH3Y7yG4JKS0o6T30U9YwZeAwQGk1NO%2BFVKs2iY6p%2FYMBDwzyyQwobt1bGnazu1fwWgMRTHW5VFj7KMsmMV%2FGiLMGi6bQl7tnVDXwM35ydEuKDlLNJqt4lrNEFYpsHgiJIn%2BpZItTeqLpoBUjpC4h86CQllbiq3N%2FZ9z93rFUVYUT4%2FrefvnpceYqaON3f5IXt3t%2FYOOLQZXczmoLEmwptoOYelixKVAbJun06QuhTd2FyMQ6PQciWbL%2FeaWnGKoBEx%2BODFGYq1VVbV8YhLxohRiA8MJWXub8GOqUB00QQ7duoKO8E%2FBO7Y0afgwS7hDhZEDwxeiJBXwRczLfBnGb5wUFGwneRys4iQP5mOXGbkUreeUyiIm%2BVgbnRx6u%2Fkf8EajzW1ivQ6zZzAyq1Pri%2F2N8%2FKHWfbK2o2X3EDe0c8gl1etwjc%2B2AZXP6cCSKmODDaRYNc%2FfCPQdmfdHCAZZokBuIwMbzZk8ZPH%2B3sL9Ncb3JFr9Zf7sPk0kp4rmfl%2Bnt&X-Amz-Signature=f4c75baa44567dbbda9e8cd27d2b0bedb0b29e4a17db19ec2cde3d27676af799&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFEUGYG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMPnSnGiRe1yFdOge0Um4t%2FMinVw4G0ywEwkNhctlmaAiEA2176tkck59BrIdiV%2BC7rKBAkVhNFcMPq6frAlxelBpkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv%2Bp%2FP6jNqz6iNP%2FircA1WuHqiipU0tIUyuE06rRQcOig1PlbZaW9ae7xgObofOvHPC8V%2BHhh3QvZ68FR1QCeYtZ8pY1dqR69Pt1%2FjMgwLhLSGODkpeDIlWbNlMDMC2VQkF0NF9kbfhR8faUyt3s3E6Yq%2Fcbxqc2DqHofNvyjvqqjdR8p8%2BivfgOhC%2BE0z69R9jmKybJiC8bNeDu6uqEoGUOjzMVIALvY6Fyz1qu8Stkk7vYR8TwzrzO6WNdMSOtcJx7NHzpDJI%2FcqqpVRTnbUd9NN3Q3GK8nyOI8jt59XmYZzP8lA%2BwqrCpLNJQEC1%2FDKgag46lWLMzcweK7w%2F%2FFGuVJTENgWe15kSqYctS%2FlG8s0jsp0CnlvH3Y7yG4JKS0o6T30U9YwZeAwQGk1NO%2BFVKs2iY6p%2FYMBDwzyyQwobt1bGnazu1fwWgMRTHW5VFj7KMsmMV%2FGiLMGi6bQl7tnVDXwM35ydEuKDlLNJqt4lrNEFYpsHgiJIn%2BpZItTeqLpoBUjpC4h86CQllbiq3N%2FZ9z93rFUVYUT4%2FrefvnpceYqaON3f5IXt3t%2FYOOLQZXczmoLEmwptoOYelixKVAbJun06QuhTd2FyMQ6PQciWbL%2FeaWnGKoBEx%2BODFGYq1VVbV8YhLxohRiA8MJWXub8GOqUB00QQ7duoKO8E%2FBO7Y0afgwS7hDhZEDwxeiJBXwRczLfBnGb5wUFGwneRys4iQP5mOXGbkUreeUyiIm%2BVgbnRx6u%2Fkf8EajzW1ivQ6zZzAyq1Pri%2F2N8%2FKHWfbK2o2X3EDe0c8gl1etwjc%2B2AZXP6cCSKmODDaRYNc%2FfCPQdmfdHCAZZokBuIwMbzZk8ZPH%2B3sL9Ncb3JFr9Zf7sPk0kp4rmfl%2Bnt&X-Amz-Signature=de3c12df026ed8c8c1ce356d23d61f599391684402d6a9cd5eef004860a3f37c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFEUGYG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMPnSnGiRe1yFdOge0Um4t%2FMinVw4G0ywEwkNhctlmaAiEA2176tkck59BrIdiV%2BC7rKBAkVhNFcMPq6frAlxelBpkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv%2Bp%2FP6jNqz6iNP%2FircA1WuHqiipU0tIUyuE06rRQcOig1PlbZaW9ae7xgObofOvHPC8V%2BHhh3QvZ68FR1QCeYtZ8pY1dqR69Pt1%2FjMgwLhLSGODkpeDIlWbNlMDMC2VQkF0NF9kbfhR8faUyt3s3E6Yq%2Fcbxqc2DqHofNvyjvqqjdR8p8%2BivfgOhC%2BE0z69R9jmKybJiC8bNeDu6uqEoGUOjzMVIALvY6Fyz1qu8Stkk7vYR8TwzrzO6WNdMSOtcJx7NHzpDJI%2FcqqpVRTnbUd9NN3Q3GK8nyOI8jt59XmYZzP8lA%2BwqrCpLNJQEC1%2FDKgag46lWLMzcweK7w%2F%2FFGuVJTENgWe15kSqYctS%2FlG8s0jsp0CnlvH3Y7yG4JKS0o6T30U9YwZeAwQGk1NO%2BFVKs2iY6p%2FYMBDwzyyQwobt1bGnazu1fwWgMRTHW5VFj7KMsmMV%2FGiLMGi6bQl7tnVDXwM35ydEuKDlLNJqt4lrNEFYpsHgiJIn%2BpZItTeqLpoBUjpC4h86CQllbiq3N%2FZ9z93rFUVYUT4%2FrefvnpceYqaON3f5IXt3t%2FYOOLQZXczmoLEmwptoOYelixKVAbJun06QuhTd2FyMQ6PQciWbL%2FeaWnGKoBEx%2BODFGYq1VVbV8YhLxohRiA8MJWXub8GOqUB00QQ7duoKO8E%2FBO7Y0afgwS7hDhZEDwxeiJBXwRczLfBnGb5wUFGwneRys4iQP5mOXGbkUreeUyiIm%2BVgbnRx6u%2Fkf8EajzW1ivQ6zZzAyq1Pri%2F2N8%2FKHWfbK2o2X3EDe0c8gl1etwjc%2B2AZXP6cCSKmODDaRYNc%2FfCPQdmfdHCAZZokBuIwMbzZk8ZPH%2B3sL9Ncb3JFr9Zf7sPk0kp4rmfl%2Bnt&X-Amz-Signature=daa94519a5f1e25db907b83584c686a958aa60c31960c4d217efbc71b1d3d31e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFEUGYG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMPnSnGiRe1yFdOge0Um4t%2FMinVw4G0ywEwkNhctlmaAiEA2176tkck59BrIdiV%2BC7rKBAkVhNFcMPq6frAlxelBpkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv%2Bp%2FP6jNqz6iNP%2FircA1WuHqiipU0tIUyuE06rRQcOig1PlbZaW9ae7xgObofOvHPC8V%2BHhh3QvZ68FR1QCeYtZ8pY1dqR69Pt1%2FjMgwLhLSGODkpeDIlWbNlMDMC2VQkF0NF9kbfhR8faUyt3s3E6Yq%2Fcbxqc2DqHofNvyjvqqjdR8p8%2BivfgOhC%2BE0z69R9jmKybJiC8bNeDu6uqEoGUOjzMVIALvY6Fyz1qu8Stkk7vYR8TwzrzO6WNdMSOtcJx7NHzpDJI%2FcqqpVRTnbUd9NN3Q3GK8nyOI8jt59XmYZzP8lA%2BwqrCpLNJQEC1%2FDKgag46lWLMzcweK7w%2F%2FFGuVJTENgWe15kSqYctS%2FlG8s0jsp0CnlvH3Y7yG4JKS0o6T30U9YwZeAwQGk1NO%2BFVKs2iY6p%2FYMBDwzyyQwobt1bGnazu1fwWgMRTHW5VFj7KMsmMV%2FGiLMGi6bQl7tnVDXwM35ydEuKDlLNJqt4lrNEFYpsHgiJIn%2BpZItTeqLpoBUjpC4h86CQllbiq3N%2FZ9z93rFUVYUT4%2FrefvnpceYqaON3f5IXt3t%2FYOOLQZXczmoLEmwptoOYelixKVAbJun06QuhTd2FyMQ6PQciWbL%2FeaWnGKoBEx%2BODFGYq1VVbV8YhLxohRiA8MJWXub8GOqUB00QQ7duoKO8E%2FBO7Y0afgwS7hDhZEDwxeiJBXwRczLfBnGb5wUFGwneRys4iQP5mOXGbkUreeUyiIm%2BVgbnRx6u%2Fkf8EajzW1ivQ6zZzAyq1Pri%2F2N8%2FKHWfbK2o2X3EDe0c8gl1etwjc%2B2AZXP6cCSKmODDaRYNc%2FfCPQdmfdHCAZZokBuIwMbzZk8ZPH%2B3sL9Ncb3JFr9Zf7sPk0kp4rmfl%2Bnt&X-Amz-Signature=e25faed4d85f2f708f783e0ba407e4bfe6d04f42170c5bbb50667d1eeeb85b85&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFEUGYG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMPnSnGiRe1yFdOge0Um4t%2FMinVw4G0ywEwkNhctlmaAiEA2176tkck59BrIdiV%2BC7rKBAkVhNFcMPq6frAlxelBpkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv%2Bp%2FP6jNqz6iNP%2FircA1WuHqiipU0tIUyuE06rRQcOig1PlbZaW9ae7xgObofOvHPC8V%2BHhh3QvZ68FR1QCeYtZ8pY1dqR69Pt1%2FjMgwLhLSGODkpeDIlWbNlMDMC2VQkF0NF9kbfhR8faUyt3s3E6Yq%2Fcbxqc2DqHofNvyjvqqjdR8p8%2BivfgOhC%2BE0z69R9jmKybJiC8bNeDu6uqEoGUOjzMVIALvY6Fyz1qu8Stkk7vYR8TwzrzO6WNdMSOtcJx7NHzpDJI%2FcqqpVRTnbUd9NN3Q3GK8nyOI8jt59XmYZzP8lA%2BwqrCpLNJQEC1%2FDKgag46lWLMzcweK7w%2F%2FFGuVJTENgWe15kSqYctS%2FlG8s0jsp0CnlvH3Y7yG4JKS0o6T30U9YwZeAwQGk1NO%2BFVKs2iY6p%2FYMBDwzyyQwobt1bGnazu1fwWgMRTHW5VFj7KMsmMV%2FGiLMGi6bQl7tnVDXwM35ydEuKDlLNJqt4lrNEFYpsHgiJIn%2BpZItTeqLpoBUjpC4h86CQllbiq3N%2FZ9z93rFUVYUT4%2FrefvnpceYqaON3f5IXt3t%2FYOOLQZXczmoLEmwptoOYelixKVAbJun06QuhTd2FyMQ6PQciWbL%2FeaWnGKoBEx%2BODFGYq1VVbV8YhLxohRiA8MJWXub8GOqUB00QQ7duoKO8E%2FBO7Y0afgwS7hDhZEDwxeiJBXwRczLfBnGb5wUFGwneRys4iQP5mOXGbkUreeUyiIm%2BVgbnRx6u%2Fkf8EajzW1ivQ6zZzAyq1Pri%2F2N8%2FKHWfbK2o2X3EDe0c8gl1etwjc%2B2AZXP6cCSKmODDaRYNc%2FfCPQdmfdHCAZZokBuIwMbzZk8ZPH%2B3sL9Ncb3JFr9Zf7sPk0kp4rmfl%2Bnt&X-Amz-Signature=478b1c22186d44077fd2d8393778d114e6c14cbc65ca1a11896cef2dd59e36bc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
