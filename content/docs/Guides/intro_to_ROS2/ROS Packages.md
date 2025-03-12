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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUZUDJ3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEZzPe4E62F3YIhfgrYfB89Jzam8oPxdCPiH709ELoELAiABv07hV6%2FLBC4sYK2JE5DA%2BSTpB7NvIQP8L2AUdGT1CSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nDkQOB%2BhzrYFS0pKtwDC6S7KhP7jfhH3Hq8fVLPKmgwJ1WP6iX0iUiUp1tfoeK%2B5Onroe608ttUeZAd9ERroSlSq%2FSyPIUTjwtideJnH0bR9IZxDZO0WtVV7a2Es7CdFim2WXY77vyqh8MU6Eh5jF6scG4YvK1wUPGXwovHuKszmMs1KTdKuYTIMReHpK3gop9H%2FmyHwlHxQoePm2C19FGTUX4O99hnF6JZfF9SnjFeDYRvAiTX8fGaabmBxnlyCZxnzjD%2F%2BuYaZRRbjjYlM56zhN2FP6oCNQh1F6ybXK%2FZSPV9iorAzhiMt8k1DVv2tazELDxHa3JxtQtF63x%2BGfhSjas1hX50Ik0kUArYOeI4Vh4ydL8jr4PCaoXLjAk4HjA5R8hCFOYWnwrH0njoKqRGRFJAqQC4bFB5A1hZrVIQwcvHpRQvSXPIWlnFaLSTzMVK8AqdSLOmSS4EABVuL%2FW%2FYUbImrsOQqEjyTYRTjShGwK%2FkCPrAJfcjcQd9BYcu65jfgPNe84h21WQP1qrRqjW7WX7IiZQS8NJfbm4q2bPzxzcsGOLX8TeWcjfkvlEHVaKoKKfXqAyjSsgFY2fThfV2eeZl6J7h6WhQM0Jy8BZEnRLLG9QuO6ei54v6%2BoEbk7aamGoHctYBLgwlsTHvgY6pgEgUZMOqMpl8s8uc4Jcb%2B9CclnFW41RYsQLEnOifByyIwV6DKXG30kUIb2MpncbVpj0fWemJn5jewf9XtVmpKKDnyVKeLiU7aWJGmtKGDjm%2FluYWs01tzL3hlo8e%2BZUn3LySxe3whtYVwes%2Bxs44oW2PsxJ3Xw2Pmtpv8IneM%2BFNk4NpWWNGIQ0bRCV86puSzJ8Xc%2Fmbi5DBkNWysBO7iCOQPPUpjx1&X-Amz-Signature=a5be2ab6708c29d650f5b4259a70713f3327a2b3cb4d4852be3ef2a4aa898716&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUZUDJ3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEZzPe4E62F3YIhfgrYfB89Jzam8oPxdCPiH709ELoELAiABv07hV6%2FLBC4sYK2JE5DA%2BSTpB7NvIQP8L2AUdGT1CSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nDkQOB%2BhzrYFS0pKtwDC6S7KhP7jfhH3Hq8fVLPKmgwJ1WP6iX0iUiUp1tfoeK%2B5Onroe608ttUeZAd9ERroSlSq%2FSyPIUTjwtideJnH0bR9IZxDZO0WtVV7a2Es7CdFim2WXY77vyqh8MU6Eh5jF6scG4YvK1wUPGXwovHuKszmMs1KTdKuYTIMReHpK3gop9H%2FmyHwlHxQoePm2C19FGTUX4O99hnF6JZfF9SnjFeDYRvAiTX8fGaabmBxnlyCZxnzjD%2F%2BuYaZRRbjjYlM56zhN2FP6oCNQh1F6ybXK%2FZSPV9iorAzhiMt8k1DVv2tazELDxHa3JxtQtF63x%2BGfhSjas1hX50Ik0kUArYOeI4Vh4ydL8jr4PCaoXLjAk4HjA5R8hCFOYWnwrH0njoKqRGRFJAqQC4bFB5A1hZrVIQwcvHpRQvSXPIWlnFaLSTzMVK8AqdSLOmSS4EABVuL%2FW%2FYUbImrsOQqEjyTYRTjShGwK%2FkCPrAJfcjcQd9BYcu65jfgPNe84h21WQP1qrRqjW7WX7IiZQS8NJfbm4q2bPzxzcsGOLX8TeWcjfkvlEHVaKoKKfXqAyjSsgFY2fThfV2eeZl6J7h6WhQM0Jy8BZEnRLLG9QuO6ei54v6%2BoEbk7aamGoHctYBLgwlsTHvgY6pgEgUZMOqMpl8s8uc4Jcb%2B9CclnFW41RYsQLEnOifByyIwV6DKXG30kUIb2MpncbVpj0fWemJn5jewf9XtVmpKKDnyVKeLiU7aWJGmtKGDjm%2FluYWs01tzL3hlo8e%2BZUn3LySxe3whtYVwes%2Bxs44oW2PsxJ3Xw2Pmtpv8IneM%2BFNk4NpWWNGIQ0bRCV86puSzJ8Xc%2Fmbi5DBkNWysBO7iCOQPPUpjx1&X-Amz-Signature=b887c2221bb9f270d32a7fcb7c2afd2900e63ca1cae10d7ac87f5d8ffb7b0323&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUZUDJ3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEZzPe4E62F3YIhfgrYfB89Jzam8oPxdCPiH709ELoELAiABv07hV6%2FLBC4sYK2JE5DA%2BSTpB7NvIQP8L2AUdGT1CSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nDkQOB%2BhzrYFS0pKtwDC6S7KhP7jfhH3Hq8fVLPKmgwJ1WP6iX0iUiUp1tfoeK%2B5Onroe608ttUeZAd9ERroSlSq%2FSyPIUTjwtideJnH0bR9IZxDZO0WtVV7a2Es7CdFim2WXY77vyqh8MU6Eh5jF6scG4YvK1wUPGXwovHuKszmMs1KTdKuYTIMReHpK3gop9H%2FmyHwlHxQoePm2C19FGTUX4O99hnF6JZfF9SnjFeDYRvAiTX8fGaabmBxnlyCZxnzjD%2F%2BuYaZRRbjjYlM56zhN2FP6oCNQh1F6ybXK%2FZSPV9iorAzhiMt8k1DVv2tazELDxHa3JxtQtF63x%2BGfhSjas1hX50Ik0kUArYOeI4Vh4ydL8jr4PCaoXLjAk4HjA5R8hCFOYWnwrH0njoKqRGRFJAqQC4bFB5A1hZrVIQwcvHpRQvSXPIWlnFaLSTzMVK8AqdSLOmSS4EABVuL%2FW%2FYUbImrsOQqEjyTYRTjShGwK%2FkCPrAJfcjcQd9BYcu65jfgPNe84h21WQP1qrRqjW7WX7IiZQS8NJfbm4q2bPzxzcsGOLX8TeWcjfkvlEHVaKoKKfXqAyjSsgFY2fThfV2eeZl6J7h6WhQM0Jy8BZEnRLLG9QuO6ei54v6%2BoEbk7aamGoHctYBLgwlsTHvgY6pgEgUZMOqMpl8s8uc4Jcb%2B9CclnFW41RYsQLEnOifByyIwV6DKXG30kUIb2MpncbVpj0fWemJn5jewf9XtVmpKKDnyVKeLiU7aWJGmtKGDjm%2FluYWs01tzL3hlo8e%2BZUn3LySxe3whtYVwes%2Bxs44oW2PsxJ3Xw2Pmtpv8IneM%2BFNk4NpWWNGIQ0bRCV86puSzJ8Xc%2Fmbi5DBkNWysBO7iCOQPPUpjx1&X-Amz-Signature=a95f505908b8cc6c077e4bd6abd67475225190fd65f3f21dbfb352d9ad31716f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUZUDJ3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEZzPe4E62F3YIhfgrYfB89Jzam8oPxdCPiH709ELoELAiABv07hV6%2FLBC4sYK2JE5DA%2BSTpB7NvIQP8L2AUdGT1CSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nDkQOB%2BhzrYFS0pKtwDC6S7KhP7jfhH3Hq8fVLPKmgwJ1WP6iX0iUiUp1tfoeK%2B5Onroe608ttUeZAd9ERroSlSq%2FSyPIUTjwtideJnH0bR9IZxDZO0WtVV7a2Es7CdFim2WXY77vyqh8MU6Eh5jF6scG4YvK1wUPGXwovHuKszmMs1KTdKuYTIMReHpK3gop9H%2FmyHwlHxQoePm2C19FGTUX4O99hnF6JZfF9SnjFeDYRvAiTX8fGaabmBxnlyCZxnzjD%2F%2BuYaZRRbjjYlM56zhN2FP6oCNQh1F6ybXK%2FZSPV9iorAzhiMt8k1DVv2tazELDxHa3JxtQtF63x%2BGfhSjas1hX50Ik0kUArYOeI4Vh4ydL8jr4PCaoXLjAk4HjA5R8hCFOYWnwrH0njoKqRGRFJAqQC4bFB5A1hZrVIQwcvHpRQvSXPIWlnFaLSTzMVK8AqdSLOmSS4EABVuL%2FW%2FYUbImrsOQqEjyTYRTjShGwK%2FkCPrAJfcjcQd9BYcu65jfgPNe84h21WQP1qrRqjW7WX7IiZQS8NJfbm4q2bPzxzcsGOLX8TeWcjfkvlEHVaKoKKfXqAyjSsgFY2fThfV2eeZl6J7h6WhQM0Jy8BZEnRLLG9QuO6ei54v6%2BoEbk7aamGoHctYBLgwlsTHvgY6pgEgUZMOqMpl8s8uc4Jcb%2B9CclnFW41RYsQLEnOifByyIwV6DKXG30kUIb2MpncbVpj0fWemJn5jewf9XtVmpKKDnyVKeLiU7aWJGmtKGDjm%2FluYWs01tzL3hlo8e%2BZUn3LySxe3whtYVwes%2Bxs44oW2PsxJ3Xw2Pmtpv8IneM%2BFNk4NpWWNGIQ0bRCV86puSzJ8Xc%2Fmbi5DBkNWysBO7iCOQPPUpjx1&X-Amz-Signature=20d4ef0e1cc5b0e2b9e3260fb7b7a209e9fbbd7fdaa9da8fed9e0a08bfeac42b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUZUDJ3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEZzPe4E62F3YIhfgrYfB89Jzam8oPxdCPiH709ELoELAiABv07hV6%2FLBC4sYK2JE5DA%2BSTpB7NvIQP8L2AUdGT1CSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nDkQOB%2BhzrYFS0pKtwDC6S7KhP7jfhH3Hq8fVLPKmgwJ1WP6iX0iUiUp1tfoeK%2B5Onroe608ttUeZAd9ERroSlSq%2FSyPIUTjwtideJnH0bR9IZxDZO0WtVV7a2Es7CdFim2WXY77vyqh8MU6Eh5jF6scG4YvK1wUPGXwovHuKszmMs1KTdKuYTIMReHpK3gop9H%2FmyHwlHxQoePm2C19FGTUX4O99hnF6JZfF9SnjFeDYRvAiTX8fGaabmBxnlyCZxnzjD%2F%2BuYaZRRbjjYlM56zhN2FP6oCNQh1F6ybXK%2FZSPV9iorAzhiMt8k1DVv2tazELDxHa3JxtQtF63x%2BGfhSjas1hX50Ik0kUArYOeI4Vh4ydL8jr4PCaoXLjAk4HjA5R8hCFOYWnwrH0njoKqRGRFJAqQC4bFB5A1hZrVIQwcvHpRQvSXPIWlnFaLSTzMVK8AqdSLOmSS4EABVuL%2FW%2FYUbImrsOQqEjyTYRTjShGwK%2FkCPrAJfcjcQd9BYcu65jfgPNe84h21WQP1qrRqjW7WX7IiZQS8NJfbm4q2bPzxzcsGOLX8TeWcjfkvlEHVaKoKKfXqAyjSsgFY2fThfV2eeZl6J7h6WhQM0Jy8BZEnRLLG9QuO6ei54v6%2BoEbk7aamGoHctYBLgwlsTHvgY6pgEgUZMOqMpl8s8uc4Jcb%2B9CclnFW41RYsQLEnOifByyIwV6DKXG30kUIb2MpncbVpj0fWemJn5jewf9XtVmpKKDnyVKeLiU7aWJGmtKGDjm%2FluYWs01tzL3hlo8e%2BZUn3LySxe3whtYVwes%2Bxs44oW2PsxJ3Xw2Pmtpv8IneM%2BFNk4NpWWNGIQ0bRCV86puSzJ8Xc%2Fmbi5DBkNWysBO7iCOQPPUpjx1&X-Amz-Signature=389e495e619c66527f38e4d4c117727c44643ef612fd3541c18db455e483a428&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUZUDJ3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEZzPe4E62F3YIhfgrYfB89Jzam8oPxdCPiH709ELoELAiABv07hV6%2FLBC4sYK2JE5DA%2BSTpB7NvIQP8L2AUdGT1CSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nDkQOB%2BhzrYFS0pKtwDC6S7KhP7jfhH3Hq8fVLPKmgwJ1WP6iX0iUiUp1tfoeK%2B5Onroe608ttUeZAd9ERroSlSq%2FSyPIUTjwtideJnH0bR9IZxDZO0WtVV7a2Es7CdFim2WXY77vyqh8MU6Eh5jF6scG4YvK1wUPGXwovHuKszmMs1KTdKuYTIMReHpK3gop9H%2FmyHwlHxQoePm2C19FGTUX4O99hnF6JZfF9SnjFeDYRvAiTX8fGaabmBxnlyCZxnzjD%2F%2BuYaZRRbjjYlM56zhN2FP6oCNQh1F6ybXK%2FZSPV9iorAzhiMt8k1DVv2tazELDxHa3JxtQtF63x%2BGfhSjas1hX50Ik0kUArYOeI4Vh4ydL8jr4PCaoXLjAk4HjA5R8hCFOYWnwrH0njoKqRGRFJAqQC4bFB5A1hZrVIQwcvHpRQvSXPIWlnFaLSTzMVK8AqdSLOmSS4EABVuL%2FW%2FYUbImrsOQqEjyTYRTjShGwK%2FkCPrAJfcjcQd9BYcu65jfgPNe84h21WQP1qrRqjW7WX7IiZQS8NJfbm4q2bPzxzcsGOLX8TeWcjfkvlEHVaKoKKfXqAyjSsgFY2fThfV2eeZl6J7h6WhQM0Jy8BZEnRLLG9QuO6ei54v6%2BoEbk7aamGoHctYBLgwlsTHvgY6pgEgUZMOqMpl8s8uc4Jcb%2B9CclnFW41RYsQLEnOifByyIwV6DKXG30kUIb2MpncbVpj0fWemJn5jewf9XtVmpKKDnyVKeLiU7aWJGmtKGDjm%2FluYWs01tzL3hlo8e%2BZUn3LySxe3whtYVwes%2Bxs44oW2PsxJ3Xw2Pmtpv8IneM%2BFNk4NpWWNGIQ0bRCV86puSzJ8Xc%2Fmbi5DBkNWysBO7iCOQPPUpjx1&X-Amz-Signature=1cb8a0ee52bbac0d7cada774e121a6a4d119a8fe83cd5387be82828ffd9abb5b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUZUDJ3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEZzPe4E62F3YIhfgrYfB89Jzam8oPxdCPiH709ELoELAiABv07hV6%2FLBC4sYK2JE5DA%2BSTpB7NvIQP8L2AUdGT1CSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nDkQOB%2BhzrYFS0pKtwDC6S7KhP7jfhH3Hq8fVLPKmgwJ1WP6iX0iUiUp1tfoeK%2B5Onroe608ttUeZAd9ERroSlSq%2FSyPIUTjwtideJnH0bR9IZxDZO0WtVV7a2Es7CdFim2WXY77vyqh8MU6Eh5jF6scG4YvK1wUPGXwovHuKszmMs1KTdKuYTIMReHpK3gop9H%2FmyHwlHxQoePm2C19FGTUX4O99hnF6JZfF9SnjFeDYRvAiTX8fGaabmBxnlyCZxnzjD%2F%2BuYaZRRbjjYlM56zhN2FP6oCNQh1F6ybXK%2FZSPV9iorAzhiMt8k1DVv2tazELDxHa3JxtQtF63x%2BGfhSjas1hX50Ik0kUArYOeI4Vh4ydL8jr4PCaoXLjAk4HjA5R8hCFOYWnwrH0njoKqRGRFJAqQC4bFB5A1hZrVIQwcvHpRQvSXPIWlnFaLSTzMVK8AqdSLOmSS4EABVuL%2FW%2FYUbImrsOQqEjyTYRTjShGwK%2FkCPrAJfcjcQd9BYcu65jfgPNe84h21WQP1qrRqjW7WX7IiZQS8NJfbm4q2bPzxzcsGOLX8TeWcjfkvlEHVaKoKKfXqAyjSsgFY2fThfV2eeZl6J7h6WhQM0Jy8BZEnRLLG9QuO6ei54v6%2BoEbk7aamGoHctYBLgwlsTHvgY6pgEgUZMOqMpl8s8uc4Jcb%2B9CclnFW41RYsQLEnOifByyIwV6DKXG30kUIb2MpncbVpj0fWemJn5jewf9XtVmpKKDnyVKeLiU7aWJGmtKGDjm%2FluYWs01tzL3hlo8e%2BZUn3LySxe3whtYVwes%2Bxs44oW2PsxJ3Xw2Pmtpv8IneM%2BFNk4NpWWNGIQ0bRCV86puSzJ8Xc%2Fmbi5DBkNWysBO7iCOQPPUpjx1&X-Amz-Signature=01cac7b3f2c3ffae3db0bf6a012170d3164a21d137a98a040d27d98671a8c304&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
