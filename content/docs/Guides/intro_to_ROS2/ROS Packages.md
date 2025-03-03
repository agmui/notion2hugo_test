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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UIYENM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrMyWXvOdZBu9Gc6%2B8yhlJs0P0jwUdkVHRcvd4cm8sJgIgFR1dBU5HGYeFci9Ib%2BFs%2BqFq0zVsjn0TcsnL2ocxFWoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCDJDkU296TmGoc0SrcA4hCDIwA7VofpsnoW46NPq6hNA9bydic6GBsu%2FNXSI22aPCsp3ZAS5jxByTLgtsLiBLEBtuypy9GG65QM9Dj4V6VRfwI6t%2FFmQnSvMwEHm%2BgZ5CL8s6VSpfTV2bwIPSplEadGjE%2Fay7BKdriJK31iT9rDbydGkck0IPKs8en2k0BdSCuY9aCtQwjBP003s5vszTyIvypeXGpmAoqSXcpsDNgUFbi806Hyw3B%2FAv%2Fq3FAZA2yrq9QEDT5n%2Fq%2BavBgk%2FSuKEOSqzeOJ1aNQT2wXTpy7oJ8ENLqtVVTHbWjmpLzEMspN96ezOjl9CEDHJYbxkeFJSCwvolKOX0o9l5lzePHgs1ThjR%2FUpDElq5935ab93JzIywbQZHPpBWkmM7QbWNTCElZ2all9S3NbuwUJu3CqmmulBZOyxrKx847v21kVSMImQr8uZmpIxNKCff8wIdnC%2Bu7grV%2F%2FA0EWLbMS454WhO3%2Fh2pQ%2FfzsqJN0obOa%2B7MvEOEbFUOv8AYbgKcvhtxiw620wd7X71Huk2L%2Fea1AlEG0fBQpaNtvz9P9pAutM9GwlXqqLY4Sd15pSVE3kt9oljyrVhT8HxztcfufKDzabs1X3eEIG5NHG%2BWfF01FeNRvotx97sbQ%2Fd6MJGZmL4GOqUB7XaImuFPwjogEfgleMrz346qeDWkfx6ogyOLT02O6p2bHLpcYsElWUoGjjL2IM8PT6zmcUZb3K7%2F33dNWHKpuwq3bfgsWPBxrIH%2BWMiVHPUx36IDzYz%2BLzgXV%2B4JEZyA0ScDpKWeLkwDj4sQ4qqgakLHt07cs8qFHMe%2FUSdo4AYzZpZSX6tNbRBwzl%2FmDbfVaKR4qtP1D0oMr3qwu4jDpbxvf5g%2B&X-Amz-Signature=56ee07c2abba217b581f86be8a77e294d3086e022817f79e93ceca271d3e794c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UIYENM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrMyWXvOdZBu9Gc6%2B8yhlJs0P0jwUdkVHRcvd4cm8sJgIgFR1dBU5HGYeFci9Ib%2BFs%2BqFq0zVsjn0TcsnL2ocxFWoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCDJDkU296TmGoc0SrcA4hCDIwA7VofpsnoW46NPq6hNA9bydic6GBsu%2FNXSI22aPCsp3ZAS5jxByTLgtsLiBLEBtuypy9GG65QM9Dj4V6VRfwI6t%2FFmQnSvMwEHm%2BgZ5CL8s6VSpfTV2bwIPSplEadGjE%2Fay7BKdriJK31iT9rDbydGkck0IPKs8en2k0BdSCuY9aCtQwjBP003s5vszTyIvypeXGpmAoqSXcpsDNgUFbi806Hyw3B%2FAv%2Fq3FAZA2yrq9QEDT5n%2Fq%2BavBgk%2FSuKEOSqzeOJ1aNQT2wXTpy7oJ8ENLqtVVTHbWjmpLzEMspN96ezOjl9CEDHJYbxkeFJSCwvolKOX0o9l5lzePHgs1ThjR%2FUpDElq5935ab93JzIywbQZHPpBWkmM7QbWNTCElZ2all9S3NbuwUJu3CqmmulBZOyxrKx847v21kVSMImQr8uZmpIxNKCff8wIdnC%2Bu7grV%2F%2FA0EWLbMS454WhO3%2Fh2pQ%2FfzsqJN0obOa%2B7MvEOEbFUOv8AYbgKcvhtxiw620wd7X71Huk2L%2Fea1AlEG0fBQpaNtvz9P9pAutM9GwlXqqLY4Sd15pSVE3kt9oljyrVhT8HxztcfufKDzabs1X3eEIG5NHG%2BWfF01FeNRvotx97sbQ%2Fd6MJGZmL4GOqUB7XaImuFPwjogEfgleMrz346qeDWkfx6ogyOLT02O6p2bHLpcYsElWUoGjjL2IM8PT6zmcUZb3K7%2F33dNWHKpuwq3bfgsWPBxrIH%2BWMiVHPUx36IDzYz%2BLzgXV%2B4JEZyA0ScDpKWeLkwDj4sQ4qqgakLHt07cs8qFHMe%2FUSdo4AYzZpZSX6tNbRBwzl%2FmDbfVaKR4qtP1D0oMr3qwu4jDpbxvf5g%2B&X-Amz-Signature=7a4245d3e50465c548867c52536563760c872e32ac8382d7dc8a1d9bae32b698&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UIYENM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrMyWXvOdZBu9Gc6%2B8yhlJs0P0jwUdkVHRcvd4cm8sJgIgFR1dBU5HGYeFci9Ib%2BFs%2BqFq0zVsjn0TcsnL2ocxFWoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCDJDkU296TmGoc0SrcA4hCDIwA7VofpsnoW46NPq6hNA9bydic6GBsu%2FNXSI22aPCsp3ZAS5jxByTLgtsLiBLEBtuypy9GG65QM9Dj4V6VRfwI6t%2FFmQnSvMwEHm%2BgZ5CL8s6VSpfTV2bwIPSplEadGjE%2Fay7BKdriJK31iT9rDbydGkck0IPKs8en2k0BdSCuY9aCtQwjBP003s5vszTyIvypeXGpmAoqSXcpsDNgUFbi806Hyw3B%2FAv%2Fq3FAZA2yrq9QEDT5n%2Fq%2BavBgk%2FSuKEOSqzeOJ1aNQT2wXTpy7oJ8ENLqtVVTHbWjmpLzEMspN96ezOjl9CEDHJYbxkeFJSCwvolKOX0o9l5lzePHgs1ThjR%2FUpDElq5935ab93JzIywbQZHPpBWkmM7QbWNTCElZ2all9S3NbuwUJu3CqmmulBZOyxrKx847v21kVSMImQr8uZmpIxNKCff8wIdnC%2Bu7grV%2F%2FA0EWLbMS454WhO3%2Fh2pQ%2FfzsqJN0obOa%2B7MvEOEbFUOv8AYbgKcvhtxiw620wd7X71Huk2L%2Fea1AlEG0fBQpaNtvz9P9pAutM9GwlXqqLY4Sd15pSVE3kt9oljyrVhT8HxztcfufKDzabs1X3eEIG5NHG%2BWfF01FeNRvotx97sbQ%2Fd6MJGZmL4GOqUB7XaImuFPwjogEfgleMrz346qeDWkfx6ogyOLT02O6p2bHLpcYsElWUoGjjL2IM8PT6zmcUZb3K7%2F33dNWHKpuwq3bfgsWPBxrIH%2BWMiVHPUx36IDzYz%2BLzgXV%2B4JEZyA0ScDpKWeLkwDj4sQ4qqgakLHt07cs8qFHMe%2FUSdo4AYzZpZSX6tNbRBwzl%2FmDbfVaKR4qtP1D0oMr3qwu4jDpbxvf5g%2B&X-Amz-Signature=17896fae9c41112b0ab6ed3bf6275ea8aabb030c5b89afcb76cdfd2925dbdee2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UIYENM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrMyWXvOdZBu9Gc6%2B8yhlJs0P0jwUdkVHRcvd4cm8sJgIgFR1dBU5HGYeFci9Ib%2BFs%2BqFq0zVsjn0TcsnL2ocxFWoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCDJDkU296TmGoc0SrcA4hCDIwA7VofpsnoW46NPq6hNA9bydic6GBsu%2FNXSI22aPCsp3ZAS5jxByTLgtsLiBLEBtuypy9GG65QM9Dj4V6VRfwI6t%2FFmQnSvMwEHm%2BgZ5CL8s6VSpfTV2bwIPSplEadGjE%2Fay7BKdriJK31iT9rDbydGkck0IPKs8en2k0BdSCuY9aCtQwjBP003s5vszTyIvypeXGpmAoqSXcpsDNgUFbi806Hyw3B%2FAv%2Fq3FAZA2yrq9QEDT5n%2Fq%2BavBgk%2FSuKEOSqzeOJ1aNQT2wXTpy7oJ8ENLqtVVTHbWjmpLzEMspN96ezOjl9CEDHJYbxkeFJSCwvolKOX0o9l5lzePHgs1ThjR%2FUpDElq5935ab93JzIywbQZHPpBWkmM7QbWNTCElZ2all9S3NbuwUJu3CqmmulBZOyxrKx847v21kVSMImQr8uZmpIxNKCff8wIdnC%2Bu7grV%2F%2FA0EWLbMS454WhO3%2Fh2pQ%2FfzsqJN0obOa%2B7MvEOEbFUOv8AYbgKcvhtxiw620wd7X71Huk2L%2Fea1AlEG0fBQpaNtvz9P9pAutM9GwlXqqLY4Sd15pSVE3kt9oljyrVhT8HxztcfufKDzabs1X3eEIG5NHG%2BWfF01FeNRvotx97sbQ%2Fd6MJGZmL4GOqUB7XaImuFPwjogEfgleMrz346qeDWkfx6ogyOLT02O6p2bHLpcYsElWUoGjjL2IM8PT6zmcUZb3K7%2F33dNWHKpuwq3bfgsWPBxrIH%2BWMiVHPUx36IDzYz%2BLzgXV%2B4JEZyA0ScDpKWeLkwDj4sQ4qqgakLHt07cs8qFHMe%2FUSdo4AYzZpZSX6tNbRBwzl%2FmDbfVaKR4qtP1D0oMr3qwu4jDpbxvf5g%2B&X-Amz-Signature=c9ea7fc9daa50142d6e38d5c32f17ae6cd4a10ef58e1f8c42f692d25eff60d68&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UIYENM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrMyWXvOdZBu9Gc6%2B8yhlJs0P0jwUdkVHRcvd4cm8sJgIgFR1dBU5HGYeFci9Ib%2BFs%2BqFq0zVsjn0TcsnL2ocxFWoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCDJDkU296TmGoc0SrcA4hCDIwA7VofpsnoW46NPq6hNA9bydic6GBsu%2FNXSI22aPCsp3ZAS5jxByTLgtsLiBLEBtuypy9GG65QM9Dj4V6VRfwI6t%2FFmQnSvMwEHm%2BgZ5CL8s6VSpfTV2bwIPSplEadGjE%2Fay7BKdriJK31iT9rDbydGkck0IPKs8en2k0BdSCuY9aCtQwjBP003s5vszTyIvypeXGpmAoqSXcpsDNgUFbi806Hyw3B%2FAv%2Fq3FAZA2yrq9QEDT5n%2Fq%2BavBgk%2FSuKEOSqzeOJ1aNQT2wXTpy7oJ8ENLqtVVTHbWjmpLzEMspN96ezOjl9CEDHJYbxkeFJSCwvolKOX0o9l5lzePHgs1ThjR%2FUpDElq5935ab93JzIywbQZHPpBWkmM7QbWNTCElZ2all9S3NbuwUJu3CqmmulBZOyxrKx847v21kVSMImQr8uZmpIxNKCff8wIdnC%2Bu7grV%2F%2FA0EWLbMS454WhO3%2Fh2pQ%2FfzsqJN0obOa%2B7MvEOEbFUOv8AYbgKcvhtxiw620wd7X71Huk2L%2Fea1AlEG0fBQpaNtvz9P9pAutM9GwlXqqLY4Sd15pSVE3kt9oljyrVhT8HxztcfufKDzabs1X3eEIG5NHG%2BWfF01FeNRvotx97sbQ%2Fd6MJGZmL4GOqUB7XaImuFPwjogEfgleMrz346qeDWkfx6ogyOLT02O6p2bHLpcYsElWUoGjjL2IM8PT6zmcUZb3K7%2F33dNWHKpuwq3bfgsWPBxrIH%2BWMiVHPUx36IDzYz%2BLzgXV%2B4JEZyA0ScDpKWeLkwDj4sQ4qqgakLHt07cs8qFHMe%2FUSdo4AYzZpZSX6tNbRBwzl%2FmDbfVaKR4qtP1D0oMr3qwu4jDpbxvf5g%2B&X-Amz-Signature=974db44bdfa8cdf99326008704c3402f3da9e88a3654ad8322505f6d530e3acf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UIYENM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrMyWXvOdZBu9Gc6%2B8yhlJs0P0jwUdkVHRcvd4cm8sJgIgFR1dBU5HGYeFci9Ib%2BFs%2BqFq0zVsjn0TcsnL2ocxFWoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCDJDkU296TmGoc0SrcA4hCDIwA7VofpsnoW46NPq6hNA9bydic6GBsu%2FNXSI22aPCsp3ZAS5jxByTLgtsLiBLEBtuypy9GG65QM9Dj4V6VRfwI6t%2FFmQnSvMwEHm%2BgZ5CL8s6VSpfTV2bwIPSplEadGjE%2Fay7BKdriJK31iT9rDbydGkck0IPKs8en2k0BdSCuY9aCtQwjBP003s5vszTyIvypeXGpmAoqSXcpsDNgUFbi806Hyw3B%2FAv%2Fq3FAZA2yrq9QEDT5n%2Fq%2BavBgk%2FSuKEOSqzeOJ1aNQT2wXTpy7oJ8ENLqtVVTHbWjmpLzEMspN96ezOjl9CEDHJYbxkeFJSCwvolKOX0o9l5lzePHgs1ThjR%2FUpDElq5935ab93JzIywbQZHPpBWkmM7QbWNTCElZ2all9S3NbuwUJu3CqmmulBZOyxrKx847v21kVSMImQr8uZmpIxNKCff8wIdnC%2Bu7grV%2F%2FA0EWLbMS454WhO3%2Fh2pQ%2FfzsqJN0obOa%2B7MvEOEbFUOv8AYbgKcvhtxiw620wd7X71Huk2L%2Fea1AlEG0fBQpaNtvz9P9pAutM9GwlXqqLY4Sd15pSVE3kt9oljyrVhT8HxztcfufKDzabs1X3eEIG5NHG%2BWfF01FeNRvotx97sbQ%2Fd6MJGZmL4GOqUB7XaImuFPwjogEfgleMrz346qeDWkfx6ogyOLT02O6p2bHLpcYsElWUoGjjL2IM8PT6zmcUZb3K7%2F33dNWHKpuwq3bfgsWPBxrIH%2BWMiVHPUx36IDzYz%2BLzgXV%2B4JEZyA0ScDpKWeLkwDj4sQ4qqgakLHt07cs8qFHMe%2FUSdo4AYzZpZSX6tNbRBwzl%2FmDbfVaKR4qtP1D0oMr3qwu4jDpbxvf5g%2B&X-Amz-Signature=b6dcdf86ecc503d4868417cf59f2e9739f33624f5ef5951217e1972edd8313af&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UIYENM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrMyWXvOdZBu9Gc6%2B8yhlJs0P0jwUdkVHRcvd4cm8sJgIgFR1dBU5HGYeFci9Ib%2BFs%2BqFq0zVsjn0TcsnL2ocxFWoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCDJDkU296TmGoc0SrcA4hCDIwA7VofpsnoW46NPq6hNA9bydic6GBsu%2FNXSI22aPCsp3ZAS5jxByTLgtsLiBLEBtuypy9GG65QM9Dj4V6VRfwI6t%2FFmQnSvMwEHm%2BgZ5CL8s6VSpfTV2bwIPSplEadGjE%2Fay7BKdriJK31iT9rDbydGkck0IPKs8en2k0BdSCuY9aCtQwjBP003s5vszTyIvypeXGpmAoqSXcpsDNgUFbi806Hyw3B%2FAv%2Fq3FAZA2yrq9QEDT5n%2Fq%2BavBgk%2FSuKEOSqzeOJ1aNQT2wXTpy7oJ8ENLqtVVTHbWjmpLzEMspN96ezOjl9CEDHJYbxkeFJSCwvolKOX0o9l5lzePHgs1ThjR%2FUpDElq5935ab93JzIywbQZHPpBWkmM7QbWNTCElZ2all9S3NbuwUJu3CqmmulBZOyxrKx847v21kVSMImQr8uZmpIxNKCff8wIdnC%2Bu7grV%2F%2FA0EWLbMS454WhO3%2Fh2pQ%2FfzsqJN0obOa%2B7MvEOEbFUOv8AYbgKcvhtxiw620wd7X71Huk2L%2Fea1AlEG0fBQpaNtvz9P9pAutM9GwlXqqLY4Sd15pSVE3kt9oljyrVhT8HxztcfufKDzabs1X3eEIG5NHG%2BWfF01FeNRvotx97sbQ%2Fd6MJGZmL4GOqUB7XaImuFPwjogEfgleMrz346qeDWkfx6ogyOLT02O6p2bHLpcYsElWUoGjjL2IM8PT6zmcUZb3K7%2F33dNWHKpuwq3bfgsWPBxrIH%2BWMiVHPUx36IDzYz%2BLzgXV%2B4JEZyA0ScDpKWeLkwDj4sQ4qqgakLHt07cs8qFHMe%2FUSdo4AYzZpZSX6tNbRBwzl%2FmDbfVaKR4qtP1D0oMr3qwu4jDpbxvf5g%2B&X-Amz-Signature=9f8f1261d334bd9bcd36e449a55ca5a79633350f8cafdae07298179b579e3381&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
