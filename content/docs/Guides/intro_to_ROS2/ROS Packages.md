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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK76GEGO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAg4EabhJKyI4X9AiD9eBjsKbCok%2FJgzTYZ8kuZun4vqAiEAoxzIwDAw%2BqPnPnjphdX1WjOhl9K16q3dmncPJ9wVbaAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbfLvy%2FuD4U6v4SXSrcAyyvRtsYbSS0ESUYuKCjWp%2BhHE%2BFtAcOcc4TmpizBJHzjLMQm3%2FV7dbFfRSdec0NVHQ9sbeErk2WcZ4L%2FIiXc7Nb4DTMiya%2BjOUZFvk2elBfJ1qLSn53mEBtwGi1HF58g%2BHJEuy0lB8aCbQ84NNsjhxehSuUfoTuz3GWNrK5mwBRZRNAg%2BBX%2FMejGPzNV6Igy2uXvGLSgKF7ULzshTL6VEkbI8NAbEBdY4VGEkU2696ZD%2B4255Cg64m2wa7kV6IaYJmMM9I06%2B6BGRCv86d81kMHuW6x02rECKH2WN2Wsbff0NbdJ8mOFf93KsQw5y%2BV5nKZfHnIBbojE%2FYBGOcA4qvaeiRmP0MprS7XOVE7keLcxSdHF61sFJhi5DYT7WiHYnMjFFqnfL8lkXczqFOC2C1l6S9sNsoB0%2BkA2Jq0lQBws7O9exAY8N3ALMLNMH6%2F%2F8MVk%2BfeLrXVT6kxyFWjQj5Sywfv2jkMDrWNsQdjIaOb0kL5v%2Ffr3CFEa0u7ykh3d9kJ2psoRjOtdsvslNp5W1W2TQ%2BSbXJlCLvjUFsI1ZAGD0jL9vrN19GjiFMhll8Tks7%2FtpXXYXLE4ayQMMuGiaD6%2BPBgSfZZDrmKd6a7dK6nOGDjE92xemFasoyqMO6GmcAGOqUBn2EMgmiH%2Fcr%2B6JRfhpMTQynU%2F4g0NYyQQFoBGpp3tzTmuMND73okiHWrMkDjsgvG%2FPEEeMgIR%2FbYsmKDKcimzVZ8d82BpNP8T%2B%2BjjM8sNQJPJ6QUvGMXS9%2BDvquGeTQKe%2FX24nuAUZxKqVNe3pFkredZtND%2Fi7aGAd2W2f2O9V%2FgyBNdE0qKlamlBOaP5Y9U2%2BHUweu%2FjHiXHw%2FABs4nH%2FQzN2z0&X-Amz-Signature=7bf8805263392efdf7c73965ef354bdf70ba0d72b28659f9f38498b07b04aa9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK76GEGO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAg4EabhJKyI4X9AiD9eBjsKbCok%2FJgzTYZ8kuZun4vqAiEAoxzIwDAw%2BqPnPnjphdX1WjOhl9K16q3dmncPJ9wVbaAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbfLvy%2FuD4U6v4SXSrcAyyvRtsYbSS0ESUYuKCjWp%2BhHE%2BFtAcOcc4TmpizBJHzjLMQm3%2FV7dbFfRSdec0NVHQ9sbeErk2WcZ4L%2FIiXc7Nb4DTMiya%2BjOUZFvk2elBfJ1qLSn53mEBtwGi1HF58g%2BHJEuy0lB8aCbQ84NNsjhxehSuUfoTuz3GWNrK5mwBRZRNAg%2BBX%2FMejGPzNV6Igy2uXvGLSgKF7ULzshTL6VEkbI8NAbEBdY4VGEkU2696ZD%2B4255Cg64m2wa7kV6IaYJmMM9I06%2B6BGRCv86d81kMHuW6x02rECKH2WN2Wsbff0NbdJ8mOFf93KsQw5y%2BV5nKZfHnIBbojE%2FYBGOcA4qvaeiRmP0MprS7XOVE7keLcxSdHF61sFJhi5DYT7WiHYnMjFFqnfL8lkXczqFOC2C1l6S9sNsoB0%2BkA2Jq0lQBws7O9exAY8N3ALMLNMH6%2F%2F8MVk%2BfeLrXVT6kxyFWjQj5Sywfv2jkMDrWNsQdjIaOb0kL5v%2Ffr3CFEa0u7ykh3d9kJ2psoRjOtdsvslNp5W1W2TQ%2BSbXJlCLvjUFsI1ZAGD0jL9vrN19GjiFMhll8Tks7%2FtpXXYXLE4ayQMMuGiaD6%2BPBgSfZZDrmKd6a7dK6nOGDjE92xemFasoyqMO6GmcAGOqUBn2EMgmiH%2Fcr%2B6JRfhpMTQynU%2F4g0NYyQQFoBGpp3tzTmuMND73okiHWrMkDjsgvG%2FPEEeMgIR%2FbYsmKDKcimzVZ8d82BpNP8T%2B%2BjjM8sNQJPJ6QUvGMXS9%2BDvquGeTQKe%2FX24nuAUZxKqVNe3pFkredZtND%2Fi7aGAd2W2f2O9V%2FgyBNdE0qKlamlBOaP5Y9U2%2BHUweu%2FjHiXHw%2FABs4nH%2FQzN2z0&X-Amz-Signature=60113294483c4a2ea9072aca8531be4cdc3f74fd792671301a9910388e0f9a18&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK76GEGO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAg4EabhJKyI4X9AiD9eBjsKbCok%2FJgzTYZ8kuZun4vqAiEAoxzIwDAw%2BqPnPnjphdX1WjOhl9K16q3dmncPJ9wVbaAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbfLvy%2FuD4U6v4SXSrcAyyvRtsYbSS0ESUYuKCjWp%2BhHE%2BFtAcOcc4TmpizBJHzjLMQm3%2FV7dbFfRSdec0NVHQ9sbeErk2WcZ4L%2FIiXc7Nb4DTMiya%2BjOUZFvk2elBfJ1qLSn53mEBtwGi1HF58g%2BHJEuy0lB8aCbQ84NNsjhxehSuUfoTuz3GWNrK5mwBRZRNAg%2BBX%2FMejGPzNV6Igy2uXvGLSgKF7ULzshTL6VEkbI8NAbEBdY4VGEkU2696ZD%2B4255Cg64m2wa7kV6IaYJmMM9I06%2B6BGRCv86d81kMHuW6x02rECKH2WN2Wsbff0NbdJ8mOFf93KsQw5y%2BV5nKZfHnIBbojE%2FYBGOcA4qvaeiRmP0MprS7XOVE7keLcxSdHF61sFJhi5DYT7WiHYnMjFFqnfL8lkXczqFOC2C1l6S9sNsoB0%2BkA2Jq0lQBws7O9exAY8N3ALMLNMH6%2F%2F8MVk%2BfeLrXVT6kxyFWjQj5Sywfv2jkMDrWNsQdjIaOb0kL5v%2Ffr3CFEa0u7ykh3d9kJ2psoRjOtdsvslNp5W1W2TQ%2BSbXJlCLvjUFsI1ZAGD0jL9vrN19GjiFMhll8Tks7%2FtpXXYXLE4ayQMMuGiaD6%2BPBgSfZZDrmKd6a7dK6nOGDjE92xemFasoyqMO6GmcAGOqUBn2EMgmiH%2Fcr%2B6JRfhpMTQynU%2F4g0NYyQQFoBGpp3tzTmuMND73okiHWrMkDjsgvG%2FPEEeMgIR%2FbYsmKDKcimzVZ8d82BpNP8T%2B%2BjjM8sNQJPJ6QUvGMXS9%2BDvquGeTQKe%2FX24nuAUZxKqVNe3pFkredZtND%2Fi7aGAd2W2f2O9V%2FgyBNdE0qKlamlBOaP5Y9U2%2BHUweu%2FjHiXHw%2FABs4nH%2FQzN2z0&X-Amz-Signature=104c93de60eada6a1919f790a52946dc95a869e9a4458d416d586ca5e1f85512&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK76GEGO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAg4EabhJKyI4X9AiD9eBjsKbCok%2FJgzTYZ8kuZun4vqAiEAoxzIwDAw%2BqPnPnjphdX1WjOhl9K16q3dmncPJ9wVbaAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbfLvy%2FuD4U6v4SXSrcAyyvRtsYbSS0ESUYuKCjWp%2BhHE%2BFtAcOcc4TmpizBJHzjLMQm3%2FV7dbFfRSdec0NVHQ9sbeErk2WcZ4L%2FIiXc7Nb4DTMiya%2BjOUZFvk2elBfJ1qLSn53mEBtwGi1HF58g%2BHJEuy0lB8aCbQ84NNsjhxehSuUfoTuz3GWNrK5mwBRZRNAg%2BBX%2FMejGPzNV6Igy2uXvGLSgKF7ULzshTL6VEkbI8NAbEBdY4VGEkU2696ZD%2B4255Cg64m2wa7kV6IaYJmMM9I06%2B6BGRCv86d81kMHuW6x02rECKH2WN2Wsbff0NbdJ8mOFf93KsQw5y%2BV5nKZfHnIBbojE%2FYBGOcA4qvaeiRmP0MprS7XOVE7keLcxSdHF61sFJhi5DYT7WiHYnMjFFqnfL8lkXczqFOC2C1l6S9sNsoB0%2BkA2Jq0lQBws7O9exAY8N3ALMLNMH6%2F%2F8MVk%2BfeLrXVT6kxyFWjQj5Sywfv2jkMDrWNsQdjIaOb0kL5v%2Ffr3CFEa0u7ykh3d9kJ2psoRjOtdsvslNp5W1W2TQ%2BSbXJlCLvjUFsI1ZAGD0jL9vrN19GjiFMhll8Tks7%2FtpXXYXLE4ayQMMuGiaD6%2BPBgSfZZDrmKd6a7dK6nOGDjE92xemFasoyqMO6GmcAGOqUBn2EMgmiH%2Fcr%2B6JRfhpMTQynU%2F4g0NYyQQFoBGpp3tzTmuMND73okiHWrMkDjsgvG%2FPEEeMgIR%2FbYsmKDKcimzVZ8d82BpNP8T%2B%2BjjM8sNQJPJ6QUvGMXS9%2BDvquGeTQKe%2FX24nuAUZxKqVNe3pFkredZtND%2Fi7aGAd2W2f2O9V%2FgyBNdE0qKlamlBOaP5Y9U2%2BHUweu%2FjHiXHw%2FABs4nH%2FQzN2z0&X-Amz-Signature=6558948223ad1bd15a8eba60958df1adb88ba7250da25098cf64896f9388050e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK76GEGO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAg4EabhJKyI4X9AiD9eBjsKbCok%2FJgzTYZ8kuZun4vqAiEAoxzIwDAw%2BqPnPnjphdX1WjOhl9K16q3dmncPJ9wVbaAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbfLvy%2FuD4U6v4SXSrcAyyvRtsYbSS0ESUYuKCjWp%2BhHE%2BFtAcOcc4TmpizBJHzjLMQm3%2FV7dbFfRSdec0NVHQ9sbeErk2WcZ4L%2FIiXc7Nb4DTMiya%2BjOUZFvk2elBfJ1qLSn53mEBtwGi1HF58g%2BHJEuy0lB8aCbQ84NNsjhxehSuUfoTuz3GWNrK5mwBRZRNAg%2BBX%2FMejGPzNV6Igy2uXvGLSgKF7ULzshTL6VEkbI8NAbEBdY4VGEkU2696ZD%2B4255Cg64m2wa7kV6IaYJmMM9I06%2B6BGRCv86d81kMHuW6x02rECKH2WN2Wsbff0NbdJ8mOFf93KsQw5y%2BV5nKZfHnIBbojE%2FYBGOcA4qvaeiRmP0MprS7XOVE7keLcxSdHF61sFJhi5DYT7WiHYnMjFFqnfL8lkXczqFOC2C1l6S9sNsoB0%2BkA2Jq0lQBws7O9exAY8N3ALMLNMH6%2F%2F8MVk%2BfeLrXVT6kxyFWjQj5Sywfv2jkMDrWNsQdjIaOb0kL5v%2Ffr3CFEa0u7ykh3d9kJ2psoRjOtdsvslNp5W1W2TQ%2BSbXJlCLvjUFsI1ZAGD0jL9vrN19GjiFMhll8Tks7%2FtpXXYXLE4ayQMMuGiaD6%2BPBgSfZZDrmKd6a7dK6nOGDjE92xemFasoyqMO6GmcAGOqUBn2EMgmiH%2Fcr%2B6JRfhpMTQynU%2F4g0NYyQQFoBGpp3tzTmuMND73okiHWrMkDjsgvG%2FPEEeMgIR%2FbYsmKDKcimzVZ8d82BpNP8T%2B%2BjjM8sNQJPJ6QUvGMXS9%2BDvquGeTQKe%2FX24nuAUZxKqVNe3pFkredZtND%2Fi7aGAd2W2f2O9V%2FgyBNdE0qKlamlBOaP5Y9U2%2BHUweu%2FjHiXHw%2FABs4nH%2FQzN2z0&X-Amz-Signature=b1411e255e31ee1285fd69b03f6fd681f773cf29575096336fdba706d3d9ddf0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK76GEGO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAg4EabhJKyI4X9AiD9eBjsKbCok%2FJgzTYZ8kuZun4vqAiEAoxzIwDAw%2BqPnPnjphdX1WjOhl9K16q3dmncPJ9wVbaAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbfLvy%2FuD4U6v4SXSrcAyyvRtsYbSS0ESUYuKCjWp%2BhHE%2BFtAcOcc4TmpizBJHzjLMQm3%2FV7dbFfRSdec0NVHQ9sbeErk2WcZ4L%2FIiXc7Nb4DTMiya%2BjOUZFvk2elBfJ1qLSn53mEBtwGi1HF58g%2BHJEuy0lB8aCbQ84NNsjhxehSuUfoTuz3GWNrK5mwBRZRNAg%2BBX%2FMejGPzNV6Igy2uXvGLSgKF7ULzshTL6VEkbI8NAbEBdY4VGEkU2696ZD%2B4255Cg64m2wa7kV6IaYJmMM9I06%2B6BGRCv86d81kMHuW6x02rECKH2WN2Wsbff0NbdJ8mOFf93KsQw5y%2BV5nKZfHnIBbojE%2FYBGOcA4qvaeiRmP0MprS7XOVE7keLcxSdHF61sFJhi5DYT7WiHYnMjFFqnfL8lkXczqFOC2C1l6S9sNsoB0%2BkA2Jq0lQBws7O9exAY8N3ALMLNMH6%2F%2F8MVk%2BfeLrXVT6kxyFWjQj5Sywfv2jkMDrWNsQdjIaOb0kL5v%2Ffr3CFEa0u7ykh3d9kJ2psoRjOtdsvslNp5W1W2TQ%2BSbXJlCLvjUFsI1ZAGD0jL9vrN19GjiFMhll8Tks7%2FtpXXYXLE4ayQMMuGiaD6%2BPBgSfZZDrmKd6a7dK6nOGDjE92xemFasoyqMO6GmcAGOqUBn2EMgmiH%2Fcr%2B6JRfhpMTQynU%2F4g0NYyQQFoBGpp3tzTmuMND73okiHWrMkDjsgvG%2FPEEeMgIR%2FbYsmKDKcimzVZ8d82BpNP8T%2B%2BjjM8sNQJPJ6QUvGMXS9%2BDvquGeTQKe%2FX24nuAUZxKqVNe3pFkredZtND%2Fi7aGAd2W2f2O9V%2FgyBNdE0qKlamlBOaP5Y9U2%2BHUweu%2FjHiXHw%2FABs4nH%2FQzN2z0&X-Amz-Signature=2436561b9b2874a8f43f4ef7ca42f4e94abbad3632a88e45365edb6c5df8b81a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK76GEGO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAg4EabhJKyI4X9AiD9eBjsKbCok%2FJgzTYZ8kuZun4vqAiEAoxzIwDAw%2BqPnPnjphdX1WjOhl9K16q3dmncPJ9wVbaAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbfLvy%2FuD4U6v4SXSrcAyyvRtsYbSS0ESUYuKCjWp%2BhHE%2BFtAcOcc4TmpizBJHzjLMQm3%2FV7dbFfRSdec0NVHQ9sbeErk2WcZ4L%2FIiXc7Nb4DTMiya%2BjOUZFvk2elBfJ1qLSn53mEBtwGi1HF58g%2BHJEuy0lB8aCbQ84NNsjhxehSuUfoTuz3GWNrK5mwBRZRNAg%2BBX%2FMejGPzNV6Igy2uXvGLSgKF7ULzshTL6VEkbI8NAbEBdY4VGEkU2696ZD%2B4255Cg64m2wa7kV6IaYJmMM9I06%2B6BGRCv86d81kMHuW6x02rECKH2WN2Wsbff0NbdJ8mOFf93KsQw5y%2BV5nKZfHnIBbojE%2FYBGOcA4qvaeiRmP0MprS7XOVE7keLcxSdHF61sFJhi5DYT7WiHYnMjFFqnfL8lkXczqFOC2C1l6S9sNsoB0%2BkA2Jq0lQBws7O9exAY8N3ALMLNMH6%2F%2F8MVk%2BfeLrXVT6kxyFWjQj5Sywfv2jkMDrWNsQdjIaOb0kL5v%2Ffr3CFEa0u7ykh3d9kJ2psoRjOtdsvslNp5W1W2TQ%2BSbXJlCLvjUFsI1ZAGD0jL9vrN19GjiFMhll8Tks7%2FtpXXYXLE4ayQMMuGiaD6%2BPBgSfZZDrmKd6a7dK6nOGDjE92xemFasoyqMO6GmcAGOqUBn2EMgmiH%2Fcr%2B6JRfhpMTQynU%2F4g0NYyQQFoBGpp3tzTmuMND73okiHWrMkDjsgvG%2FPEEeMgIR%2FbYsmKDKcimzVZ8d82BpNP8T%2B%2BjjM8sNQJPJ6QUvGMXS9%2BDvquGeTQKe%2FX24nuAUZxKqVNe3pFkredZtND%2Fi7aGAd2W2f2O9V%2FgyBNdE0qKlamlBOaP5Y9U2%2BHUweu%2FjHiXHw%2FABs4nH%2FQzN2z0&X-Amz-Signature=4df4d57b1c22b35df74ae5a3b8b760b4bb419543cb1866d07833de317b05bd34&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
