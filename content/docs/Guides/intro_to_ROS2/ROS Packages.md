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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OGMLNE2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhmbhr%2FwJrPdxn08ZaSQBsLsEIKkv60sH2rruGiQ1W%2FAiBylbntTwC6AFcBCWbOt1%2B6LCwwwO7RiXA%2FbjhCSYeqvyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslFqKAnFKXYuPmmHKtwDJQGVx6jYLMSKWI1bLJrJpqYlb8XSJeS8W1HDRlQBrkugJhxPxohjHtZumHZ0Je6hlYBqk%2BQRQMZ6nssIzkL8DCG9KePmxSvb5uzsIcJwdahAPZtmcFDDTG8hrFIIzsvzAF4sqz9R5L17wKFg%2BOBq3Xuw%2Btfb4iPPkP0Qo5lXq3hgPAbthxJ%2Fd9tO7eLfk2j0quTygPA%2B1Btt6jRi%2B0QLql31V55M6zsLpWvsRBl5tPHiMMGPnbmHWtk6zNbkmvWJiMgBX8Xn2Amn7PzfXj54za7v5VsEU%2FdVSTlxil5Z%2FkNDjiV%2FggYH7dJAJDGAq5jEE%2Bmb2IZGVVJPBXAo8TH6xbnerrsqBnoabzFgs7dRkqRTrpkviRmlZz08pZ34XLLyboQHhAsn47Ef4X%2F1PynVzyAlg37JVeV5tPGyp3tjPD1YIe%2FeQXKZHZAWw29uN6hnIFndOm0oekVEdN2tGZIHJ9A%2BnE3bnBnP9Nw4aDBKIO4Q3KGJo05CNsIxTIlOZYwlMCps%2BGf01MNfge0CcvcU%2FUZc1WV%2BV6JPzp9AnJn6vNbeRecsGLDKNPszheD10%2Bimnho3YIhHWGeqtZR5wBD2tXy3ehRQ6nzsQ7JMJpvuE3Qtf7zGoXVl%2FMignwIwyNvDwAY6pgFAPneO1OJA2A%2FBZ%2B3yqAJySG0fbc4B5WWYaXJimwq8SJSAe%2BtyjXsTJj%2B%2BqOUS510K8Fwf2SnrIxsO9%2BEXld%2FIyGQqsDYZWuQuAjd42X2dnEo197tK8eN0lXjVmieA4MNdc6QcTApa52IhdxAlxgI%2FeAHrEoZsRMqjuj%2B3M7vwYT0r3L7sfnQsuCE0L0gLl6q4r4kzTDogxnTSr2SuT4Y7pM7Ee6vy&X-Amz-Signature=140ab0c8fb02668c1a9e010b9f8da91d511d0517cd54b43ba525b356b7ec73d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OGMLNE2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhmbhr%2FwJrPdxn08ZaSQBsLsEIKkv60sH2rruGiQ1W%2FAiBylbntTwC6AFcBCWbOt1%2B6LCwwwO7RiXA%2FbjhCSYeqvyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslFqKAnFKXYuPmmHKtwDJQGVx6jYLMSKWI1bLJrJpqYlb8XSJeS8W1HDRlQBrkugJhxPxohjHtZumHZ0Je6hlYBqk%2BQRQMZ6nssIzkL8DCG9KePmxSvb5uzsIcJwdahAPZtmcFDDTG8hrFIIzsvzAF4sqz9R5L17wKFg%2BOBq3Xuw%2Btfb4iPPkP0Qo5lXq3hgPAbthxJ%2Fd9tO7eLfk2j0quTygPA%2B1Btt6jRi%2B0QLql31V55M6zsLpWvsRBl5tPHiMMGPnbmHWtk6zNbkmvWJiMgBX8Xn2Amn7PzfXj54za7v5VsEU%2FdVSTlxil5Z%2FkNDjiV%2FggYH7dJAJDGAq5jEE%2Bmb2IZGVVJPBXAo8TH6xbnerrsqBnoabzFgs7dRkqRTrpkviRmlZz08pZ34XLLyboQHhAsn47Ef4X%2F1PynVzyAlg37JVeV5tPGyp3tjPD1YIe%2FeQXKZHZAWw29uN6hnIFndOm0oekVEdN2tGZIHJ9A%2BnE3bnBnP9Nw4aDBKIO4Q3KGJo05CNsIxTIlOZYwlMCps%2BGf01MNfge0CcvcU%2FUZc1WV%2BV6JPzp9AnJn6vNbeRecsGLDKNPszheD10%2Bimnho3YIhHWGeqtZR5wBD2tXy3ehRQ6nzsQ7JMJpvuE3Qtf7zGoXVl%2FMignwIwyNvDwAY6pgFAPneO1OJA2A%2FBZ%2B3yqAJySG0fbc4B5WWYaXJimwq8SJSAe%2BtyjXsTJj%2B%2BqOUS510K8Fwf2SnrIxsO9%2BEXld%2FIyGQqsDYZWuQuAjd42X2dnEo197tK8eN0lXjVmieA4MNdc6QcTApa52IhdxAlxgI%2FeAHrEoZsRMqjuj%2B3M7vwYT0r3L7sfnQsuCE0L0gLl6q4r4kzTDogxnTSr2SuT4Y7pM7Ee6vy&X-Amz-Signature=bf13a2b2974ec7ed90e9f227db132487eab16ebe009c80cd4e8feb08355c3b88&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OGMLNE2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhmbhr%2FwJrPdxn08ZaSQBsLsEIKkv60sH2rruGiQ1W%2FAiBylbntTwC6AFcBCWbOt1%2B6LCwwwO7RiXA%2FbjhCSYeqvyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslFqKAnFKXYuPmmHKtwDJQGVx6jYLMSKWI1bLJrJpqYlb8XSJeS8W1HDRlQBrkugJhxPxohjHtZumHZ0Je6hlYBqk%2BQRQMZ6nssIzkL8DCG9KePmxSvb5uzsIcJwdahAPZtmcFDDTG8hrFIIzsvzAF4sqz9R5L17wKFg%2BOBq3Xuw%2Btfb4iPPkP0Qo5lXq3hgPAbthxJ%2Fd9tO7eLfk2j0quTygPA%2B1Btt6jRi%2B0QLql31V55M6zsLpWvsRBl5tPHiMMGPnbmHWtk6zNbkmvWJiMgBX8Xn2Amn7PzfXj54za7v5VsEU%2FdVSTlxil5Z%2FkNDjiV%2FggYH7dJAJDGAq5jEE%2Bmb2IZGVVJPBXAo8TH6xbnerrsqBnoabzFgs7dRkqRTrpkviRmlZz08pZ34XLLyboQHhAsn47Ef4X%2F1PynVzyAlg37JVeV5tPGyp3tjPD1YIe%2FeQXKZHZAWw29uN6hnIFndOm0oekVEdN2tGZIHJ9A%2BnE3bnBnP9Nw4aDBKIO4Q3KGJo05CNsIxTIlOZYwlMCps%2BGf01MNfge0CcvcU%2FUZc1WV%2BV6JPzp9AnJn6vNbeRecsGLDKNPszheD10%2Bimnho3YIhHWGeqtZR5wBD2tXy3ehRQ6nzsQ7JMJpvuE3Qtf7zGoXVl%2FMignwIwyNvDwAY6pgFAPneO1OJA2A%2FBZ%2B3yqAJySG0fbc4B5WWYaXJimwq8SJSAe%2BtyjXsTJj%2B%2BqOUS510K8Fwf2SnrIxsO9%2BEXld%2FIyGQqsDYZWuQuAjd42X2dnEo197tK8eN0lXjVmieA4MNdc6QcTApa52IhdxAlxgI%2FeAHrEoZsRMqjuj%2B3M7vwYT0r3L7sfnQsuCE0L0gLl6q4r4kzTDogxnTSr2SuT4Y7pM7Ee6vy&X-Amz-Signature=1f68cf1009af5dfd331abac96a9e2505573dba3defd615b5f0f349d47b73b126&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OGMLNE2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhmbhr%2FwJrPdxn08ZaSQBsLsEIKkv60sH2rruGiQ1W%2FAiBylbntTwC6AFcBCWbOt1%2B6LCwwwO7RiXA%2FbjhCSYeqvyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslFqKAnFKXYuPmmHKtwDJQGVx6jYLMSKWI1bLJrJpqYlb8XSJeS8W1HDRlQBrkugJhxPxohjHtZumHZ0Je6hlYBqk%2BQRQMZ6nssIzkL8DCG9KePmxSvb5uzsIcJwdahAPZtmcFDDTG8hrFIIzsvzAF4sqz9R5L17wKFg%2BOBq3Xuw%2Btfb4iPPkP0Qo5lXq3hgPAbthxJ%2Fd9tO7eLfk2j0quTygPA%2B1Btt6jRi%2B0QLql31V55M6zsLpWvsRBl5tPHiMMGPnbmHWtk6zNbkmvWJiMgBX8Xn2Amn7PzfXj54za7v5VsEU%2FdVSTlxil5Z%2FkNDjiV%2FggYH7dJAJDGAq5jEE%2Bmb2IZGVVJPBXAo8TH6xbnerrsqBnoabzFgs7dRkqRTrpkviRmlZz08pZ34XLLyboQHhAsn47Ef4X%2F1PynVzyAlg37JVeV5tPGyp3tjPD1YIe%2FeQXKZHZAWw29uN6hnIFndOm0oekVEdN2tGZIHJ9A%2BnE3bnBnP9Nw4aDBKIO4Q3KGJo05CNsIxTIlOZYwlMCps%2BGf01MNfge0CcvcU%2FUZc1WV%2BV6JPzp9AnJn6vNbeRecsGLDKNPszheD10%2Bimnho3YIhHWGeqtZR5wBD2tXy3ehRQ6nzsQ7JMJpvuE3Qtf7zGoXVl%2FMignwIwyNvDwAY6pgFAPneO1OJA2A%2FBZ%2B3yqAJySG0fbc4B5WWYaXJimwq8SJSAe%2BtyjXsTJj%2B%2BqOUS510K8Fwf2SnrIxsO9%2BEXld%2FIyGQqsDYZWuQuAjd42X2dnEo197tK8eN0lXjVmieA4MNdc6QcTApa52IhdxAlxgI%2FeAHrEoZsRMqjuj%2B3M7vwYT0r3L7sfnQsuCE0L0gLl6q4r4kzTDogxnTSr2SuT4Y7pM7Ee6vy&X-Amz-Signature=49653c0b17932ac50acc81744bc91a74b0351e7b6ebe36a62defa051bb85229d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OGMLNE2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhmbhr%2FwJrPdxn08ZaSQBsLsEIKkv60sH2rruGiQ1W%2FAiBylbntTwC6AFcBCWbOt1%2B6LCwwwO7RiXA%2FbjhCSYeqvyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslFqKAnFKXYuPmmHKtwDJQGVx6jYLMSKWI1bLJrJpqYlb8XSJeS8W1HDRlQBrkugJhxPxohjHtZumHZ0Je6hlYBqk%2BQRQMZ6nssIzkL8DCG9KePmxSvb5uzsIcJwdahAPZtmcFDDTG8hrFIIzsvzAF4sqz9R5L17wKFg%2BOBq3Xuw%2Btfb4iPPkP0Qo5lXq3hgPAbthxJ%2Fd9tO7eLfk2j0quTygPA%2B1Btt6jRi%2B0QLql31V55M6zsLpWvsRBl5tPHiMMGPnbmHWtk6zNbkmvWJiMgBX8Xn2Amn7PzfXj54za7v5VsEU%2FdVSTlxil5Z%2FkNDjiV%2FggYH7dJAJDGAq5jEE%2Bmb2IZGVVJPBXAo8TH6xbnerrsqBnoabzFgs7dRkqRTrpkviRmlZz08pZ34XLLyboQHhAsn47Ef4X%2F1PynVzyAlg37JVeV5tPGyp3tjPD1YIe%2FeQXKZHZAWw29uN6hnIFndOm0oekVEdN2tGZIHJ9A%2BnE3bnBnP9Nw4aDBKIO4Q3KGJo05CNsIxTIlOZYwlMCps%2BGf01MNfge0CcvcU%2FUZc1WV%2BV6JPzp9AnJn6vNbeRecsGLDKNPszheD10%2Bimnho3YIhHWGeqtZR5wBD2tXy3ehRQ6nzsQ7JMJpvuE3Qtf7zGoXVl%2FMignwIwyNvDwAY6pgFAPneO1OJA2A%2FBZ%2B3yqAJySG0fbc4B5WWYaXJimwq8SJSAe%2BtyjXsTJj%2B%2BqOUS510K8Fwf2SnrIxsO9%2BEXld%2FIyGQqsDYZWuQuAjd42X2dnEo197tK8eN0lXjVmieA4MNdc6QcTApa52IhdxAlxgI%2FeAHrEoZsRMqjuj%2B3M7vwYT0r3L7sfnQsuCE0L0gLl6q4r4kzTDogxnTSr2SuT4Y7pM7Ee6vy&X-Amz-Signature=1abf242e2fbaef5ef2ed11dd12a1e69da4bb20c819f7385048388947e5a478e3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OGMLNE2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhmbhr%2FwJrPdxn08ZaSQBsLsEIKkv60sH2rruGiQ1W%2FAiBylbntTwC6AFcBCWbOt1%2B6LCwwwO7RiXA%2FbjhCSYeqvyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslFqKAnFKXYuPmmHKtwDJQGVx6jYLMSKWI1bLJrJpqYlb8XSJeS8W1HDRlQBrkugJhxPxohjHtZumHZ0Je6hlYBqk%2BQRQMZ6nssIzkL8DCG9KePmxSvb5uzsIcJwdahAPZtmcFDDTG8hrFIIzsvzAF4sqz9R5L17wKFg%2BOBq3Xuw%2Btfb4iPPkP0Qo5lXq3hgPAbthxJ%2Fd9tO7eLfk2j0quTygPA%2B1Btt6jRi%2B0QLql31V55M6zsLpWvsRBl5tPHiMMGPnbmHWtk6zNbkmvWJiMgBX8Xn2Amn7PzfXj54za7v5VsEU%2FdVSTlxil5Z%2FkNDjiV%2FggYH7dJAJDGAq5jEE%2Bmb2IZGVVJPBXAo8TH6xbnerrsqBnoabzFgs7dRkqRTrpkviRmlZz08pZ34XLLyboQHhAsn47Ef4X%2F1PynVzyAlg37JVeV5tPGyp3tjPD1YIe%2FeQXKZHZAWw29uN6hnIFndOm0oekVEdN2tGZIHJ9A%2BnE3bnBnP9Nw4aDBKIO4Q3KGJo05CNsIxTIlOZYwlMCps%2BGf01MNfge0CcvcU%2FUZc1WV%2BV6JPzp9AnJn6vNbeRecsGLDKNPszheD10%2Bimnho3YIhHWGeqtZR5wBD2tXy3ehRQ6nzsQ7JMJpvuE3Qtf7zGoXVl%2FMignwIwyNvDwAY6pgFAPneO1OJA2A%2FBZ%2B3yqAJySG0fbc4B5WWYaXJimwq8SJSAe%2BtyjXsTJj%2B%2BqOUS510K8Fwf2SnrIxsO9%2BEXld%2FIyGQqsDYZWuQuAjd42X2dnEo197tK8eN0lXjVmieA4MNdc6QcTApa52IhdxAlxgI%2FeAHrEoZsRMqjuj%2B3M7vwYT0r3L7sfnQsuCE0L0gLl6q4r4kzTDogxnTSr2SuT4Y7pM7Ee6vy&X-Amz-Signature=1b64af2bc67588113f955125eb619bba2ad7a6663b3c64f9d61fe482da053733&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OGMLNE2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhmbhr%2FwJrPdxn08ZaSQBsLsEIKkv60sH2rruGiQ1W%2FAiBylbntTwC6AFcBCWbOt1%2B6LCwwwO7RiXA%2FbjhCSYeqvyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslFqKAnFKXYuPmmHKtwDJQGVx6jYLMSKWI1bLJrJpqYlb8XSJeS8W1HDRlQBrkugJhxPxohjHtZumHZ0Je6hlYBqk%2BQRQMZ6nssIzkL8DCG9KePmxSvb5uzsIcJwdahAPZtmcFDDTG8hrFIIzsvzAF4sqz9R5L17wKFg%2BOBq3Xuw%2Btfb4iPPkP0Qo5lXq3hgPAbthxJ%2Fd9tO7eLfk2j0quTygPA%2B1Btt6jRi%2B0QLql31V55M6zsLpWvsRBl5tPHiMMGPnbmHWtk6zNbkmvWJiMgBX8Xn2Amn7PzfXj54za7v5VsEU%2FdVSTlxil5Z%2FkNDjiV%2FggYH7dJAJDGAq5jEE%2Bmb2IZGVVJPBXAo8TH6xbnerrsqBnoabzFgs7dRkqRTrpkviRmlZz08pZ34XLLyboQHhAsn47Ef4X%2F1PynVzyAlg37JVeV5tPGyp3tjPD1YIe%2FeQXKZHZAWw29uN6hnIFndOm0oekVEdN2tGZIHJ9A%2BnE3bnBnP9Nw4aDBKIO4Q3KGJo05CNsIxTIlOZYwlMCps%2BGf01MNfge0CcvcU%2FUZc1WV%2BV6JPzp9AnJn6vNbeRecsGLDKNPszheD10%2Bimnho3YIhHWGeqtZR5wBD2tXy3ehRQ6nzsQ7JMJpvuE3Qtf7zGoXVl%2FMignwIwyNvDwAY6pgFAPneO1OJA2A%2FBZ%2B3yqAJySG0fbc4B5WWYaXJimwq8SJSAe%2BtyjXsTJj%2B%2BqOUS510K8Fwf2SnrIxsO9%2BEXld%2FIyGQqsDYZWuQuAjd42X2dnEo197tK8eN0lXjVmieA4MNdc6QcTApa52IhdxAlxgI%2FeAHrEoZsRMqjuj%2B3M7vwYT0r3L7sfnQsuCE0L0gLl6q4r4kzTDogxnTSr2SuT4Y7pM7Ee6vy&X-Amz-Signature=5f8bf8fb426269862d90a7fa18ee331ddec79592e1974981bf80de62347d12e7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
