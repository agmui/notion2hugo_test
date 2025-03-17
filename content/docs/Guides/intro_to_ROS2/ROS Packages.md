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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYG5526%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMw00ygZSj2fkYWcDh6YR7ZFxsJILcRaCjr%2BMiKRNv9gIhAOThldmM4HklnDqeTMb1nKqQpDXsWzStL%2BwdtMwR4Q1uKv8DCEQQABoMNjM3NDIzMTgzODA1IgwyPs3AgXKavop189cq3AO%2B09mHIv70oiT9CiW3ZWofHZiMPMGpAH7sdBXN3u4D41OHNI63KpX3nKf%2BTwLlNoyv2f%2FEPU4uSdBQ%2BcURee0Up0xRV7gPMyaOFd5szy0U6sS6pSW5wU3ovzwEI7MypjeGiadfHheVHmtWMFE6PrND%2B%2FcNE%2FPydAgedEdw4J1Fx7jm%2FLgIv%2BUZkIu4rG0V%2FYKBeFdhe07FyzHDFnvBTvTM4GFDtkzM%2F1%2BFHO5Blgcud1kSzALNdL8UoRlPdRZ1igr4bKSWZ89aBunGgluxxPcNLAIMhAlD8ieb0uIEjt0WwHo%2B7aN6bnAVxLYE5efTpCz3pIEG2q0EWAnaRC%2F9uE7ek2jZH1mpqPaWwveDhOoqZbGaZCN3XxcM%2F6VN57dcsumr%2B8cS5vB4ymIudiiUqLnKIutebhmy2%2B15jo4GUdqyme%2BOQY2FfUBI%2B%2B8AwuaWM6t1dQbeipmUhcNEOGni1lxXVl6uFC7th7uLZedqHpCs569AQipTl4epAt9QJ8jQMo6vrGROOosmJfX7KLqoDq9jpBSTtaH1xbt4dit9FcnKMVY%2BpZCHS83OH67ugn5r%2FhfszDhZGVf0JL%2BJz2cLG4%2FO5A6vk4utTNEUri%2Bs2ryYmMnIamJkOh7po%2BFcxDC8jOC%2BBjqkAejs254EVm1FaNA6%2FBFinWuvxGDOv%2FVcz0leu4Oor4k7Sq8EQ1I0%2FfIm3jcLxW3nAuFsGkhPWTGmpOLH1ZT0LVzNSlNZLX0uFHDVYCHafnwBUo4aaCS9jTI8Rx0GwJ1OpZcyDBigpUbtNB29HGuaugeAMIyfTonUWk85CtjqJhz7bkPcJwUxoujy%2BfHSmHHcGCqdhjMk5KAaH1M7o%2Fzwu7bu0ytm&X-Amz-Signature=57807cc823d23f3494092920f1f0e58f65422b50159062a1dbe7e69294786b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYG5526%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMw00ygZSj2fkYWcDh6YR7ZFxsJILcRaCjr%2BMiKRNv9gIhAOThldmM4HklnDqeTMb1nKqQpDXsWzStL%2BwdtMwR4Q1uKv8DCEQQABoMNjM3NDIzMTgzODA1IgwyPs3AgXKavop189cq3AO%2B09mHIv70oiT9CiW3ZWofHZiMPMGpAH7sdBXN3u4D41OHNI63KpX3nKf%2BTwLlNoyv2f%2FEPU4uSdBQ%2BcURee0Up0xRV7gPMyaOFd5szy0U6sS6pSW5wU3ovzwEI7MypjeGiadfHheVHmtWMFE6PrND%2B%2FcNE%2FPydAgedEdw4J1Fx7jm%2FLgIv%2BUZkIu4rG0V%2FYKBeFdhe07FyzHDFnvBTvTM4GFDtkzM%2F1%2BFHO5Blgcud1kSzALNdL8UoRlPdRZ1igr4bKSWZ89aBunGgluxxPcNLAIMhAlD8ieb0uIEjt0WwHo%2B7aN6bnAVxLYE5efTpCz3pIEG2q0EWAnaRC%2F9uE7ek2jZH1mpqPaWwveDhOoqZbGaZCN3XxcM%2F6VN57dcsumr%2B8cS5vB4ymIudiiUqLnKIutebhmy2%2B15jo4GUdqyme%2BOQY2FfUBI%2B%2B8AwuaWM6t1dQbeipmUhcNEOGni1lxXVl6uFC7th7uLZedqHpCs569AQipTl4epAt9QJ8jQMo6vrGROOosmJfX7KLqoDq9jpBSTtaH1xbt4dit9FcnKMVY%2BpZCHS83OH67ugn5r%2FhfszDhZGVf0JL%2BJz2cLG4%2FO5A6vk4utTNEUri%2Bs2ryYmMnIamJkOh7po%2BFcxDC8jOC%2BBjqkAejs254EVm1FaNA6%2FBFinWuvxGDOv%2FVcz0leu4Oor4k7Sq8EQ1I0%2FfIm3jcLxW3nAuFsGkhPWTGmpOLH1ZT0LVzNSlNZLX0uFHDVYCHafnwBUo4aaCS9jTI8Rx0GwJ1OpZcyDBigpUbtNB29HGuaugeAMIyfTonUWk85CtjqJhz7bkPcJwUxoujy%2BfHSmHHcGCqdhjMk5KAaH1M7o%2Fzwu7bu0ytm&X-Amz-Signature=984605a586104a03be1704fa2a4f0b84e7a25162bcb07b44642f60766fa07e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYG5526%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMw00ygZSj2fkYWcDh6YR7ZFxsJILcRaCjr%2BMiKRNv9gIhAOThldmM4HklnDqeTMb1nKqQpDXsWzStL%2BwdtMwR4Q1uKv8DCEQQABoMNjM3NDIzMTgzODA1IgwyPs3AgXKavop189cq3AO%2B09mHIv70oiT9CiW3ZWofHZiMPMGpAH7sdBXN3u4D41OHNI63KpX3nKf%2BTwLlNoyv2f%2FEPU4uSdBQ%2BcURee0Up0xRV7gPMyaOFd5szy0U6sS6pSW5wU3ovzwEI7MypjeGiadfHheVHmtWMFE6PrND%2B%2FcNE%2FPydAgedEdw4J1Fx7jm%2FLgIv%2BUZkIu4rG0V%2FYKBeFdhe07FyzHDFnvBTvTM4GFDtkzM%2F1%2BFHO5Blgcud1kSzALNdL8UoRlPdRZ1igr4bKSWZ89aBunGgluxxPcNLAIMhAlD8ieb0uIEjt0WwHo%2B7aN6bnAVxLYE5efTpCz3pIEG2q0EWAnaRC%2F9uE7ek2jZH1mpqPaWwveDhOoqZbGaZCN3XxcM%2F6VN57dcsumr%2B8cS5vB4ymIudiiUqLnKIutebhmy2%2B15jo4GUdqyme%2BOQY2FfUBI%2B%2B8AwuaWM6t1dQbeipmUhcNEOGni1lxXVl6uFC7th7uLZedqHpCs569AQipTl4epAt9QJ8jQMo6vrGROOosmJfX7KLqoDq9jpBSTtaH1xbt4dit9FcnKMVY%2BpZCHS83OH67ugn5r%2FhfszDhZGVf0JL%2BJz2cLG4%2FO5A6vk4utTNEUri%2Bs2ryYmMnIamJkOh7po%2BFcxDC8jOC%2BBjqkAejs254EVm1FaNA6%2FBFinWuvxGDOv%2FVcz0leu4Oor4k7Sq8EQ1I0%2FfIm3jcLxW3nAuFsGkhPWTGmpOLH1ZT0LVzNSlNZLX0uFHDVYCHafnwBUo4aaCS9jTI8Rx0GwJ1OpZcyDBigpUbtNB29HGuaugeAMIyfTonUWk85CtjqJhz7bkPcJwUxoujy%2BfHSmHHcGCqdhjMk5KAaH1M7o%2Fzwu7bu0ytm&X-Amz-Signature=a7cf32ffeea21859c27d881272deec5e39d984dd98b0e682083f93f49e6c4c29&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYG5526%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMw00ygZSj2fkYWcDh6YR7ZFxsJILcRaCjr%2BMiKRNv9gIhAOThldmM4HklnDqeTMb1nKqQpDXsWzStL%2BwdtMwR4Q1uKv8DCEQQABoMNjM3NDIzMTgzODA1IgwyPs3AgXKavop189cq3AO%2B09mHIv70oiT9CiW3ZWofHZiMPMGpAH7sdBXN3u4D41OHNI63KpX3nKf%2BTwLlNoyv2f%2FEPU4uSdBQ%2BcURee0Up0xRV7gPMyaOFd5szy0U6sS6pSW5wU3ovzwEI7MypjeGiadfHheVHmtWMFE6PrND%2B%2FcNE%2FPydAgedEdw4J1Fx7jm%2FLgIv%2BUZkIu4rG0V%2FYKBeFdhe07FyzHDFnvBTvTM4GFDtkzM%2F1%2BFHO5Blgcud1kSzALNdL8UoRlPdRZ1igr4bKSWZ89aBunGgluxxPcNLAIMhAlD8ieb0uIEjt0WwHo%2B7aN6bnAVxLYE5efTpCz3pIEG2q0EWAnaRC%2F9uE7ek2jZH1mpqPaWwveDhOoqZbGaZCN3XxcM%2F6VN57dcsumr%2B8cS5vB4ymIudiiUqLnKIutebhmy2%2B15jo4GUdqyme%2BOQY2FfUBI%2B%2B8AwuaWM6t1dQbeipmUhcNEOGni1lxXVl6uFC7th7uLZedqHpCs569AQipTl4epAt9QJ8jQMo6vrGROOosmJfX7KLqoDq9jpBSTtaH1xbt4dit9FcnKMVY%2BpZCHS83OH67ugn5r%2FhfszDhZGVf0JL%2BJz2cLG4%2FO5A6vk4utTNEUri%2Bs2ryYmMnIamJkOh7po%2BFcxDC8jOC%2BBjqkAejs254EVm1FaNA6%2FBFinWuvxGDOv%2FVcz0leu4Oor4k7Sq8EQ1I0%2FfIm3jcLxW3nAuFsGkhPWTGmpOLH1ZT0LVzNSlNZLX0uFHDVYCHafnwBUo4aaCS9jTI8Rx0GwJ1OpZcyDBigpUbtNB29HGuaugeAMIyfTonUWk85CtjqJhz7bkPcJwUxoujy%2BfHSmHHcGCqdhjMk5KAaH1M7o%2Fzwu7bu0ytm&X-Amz-Signature=c0be6708b5bb217d5ba5f06a236f6ba622ac57009816a6949e097b1424e08097&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYG5526%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMw00ygZSj2fkYWcDh6YR7ZFxsJILcRaCjr%2BMiKRNv9gIhAOThldmM4HklnDqeTMb1nKqQpDXsWzStL%2BwdtMwR4Q1uKv8DCEQQABoMNjM3NDIzMTgzODA1IgwyPs3AgXKavop189cq3AO%2B09mHIv70oiT9CiW3ZWofHZiMPMGpAH7sdBXN3u4D41OHNI63KpX3nKf%2BTwLlNoyv2f%2FEPU4uSdBQ%2BcURee0Up0xRV7gPMyaOFd5szy0U6sS6pSW5wU3ovzwEI7MypjeGiadfHheVHmtWMFE6PrND%2B%2FcNE%2FPydAgedEdw4J1Fx7jm%2FLgIv%2BUZkIu4rG0V%2FYKBeFdhe07FyzHDFnvBTvTM4GFDtkzM%2F1%2BFHO5Blgcud1kSzALNdL8UoRlPdRZ1igr4bKSWZ89aBunGgluxxPcNLAIMhAlD8ieb0uIEjt0WwHo%2B7aN6bnAVxLYE5efTpCz3pIEG2q0EWAnaRC%2F9uE7ek2jZH1mpqPaWwveDhOoqZbGaZCN3XxcM%2F6VN57dcsumr%2B8cS5vB4ymIudiiUqLnKIutebhmy2%2B15jo4GUdqyme%2BOQY2FfUBI%2B%2B8AwuaWM6t1dQbeipmUhcNEOGni1lxXVl6uFC7th7uLZedqHpCs569AQipTl4epAt9QJ8jQMo6vrGROOosmJfX7KLqoDq9jpBSTtaH1xbt4dit9FcnKMVY%2BpZCHS83OH67ugn5r%2FhfszDhZGVf0JL%2BJz2cLG4%2FO5A6vk4utTNEUri%2Bs2ryYmMnIamJkOh7po%2BFcxDC8jOC%2BBjqkAejs254EVm1FaNA6%2FBFinWuvxGDOv%2FVcz0leu4Oor4k7Sq8EQ1I0%2FfIm3jcLxW3nAuFsGkhPWTGmpOLH1ZT0LVzNSlNZLX0uFHDVYCHafnwBUo4aaCS9jTI8Rx0GwJ1OpZcyDBigpUbtNB29HGuaugeAMIyfTonUWk85CtjqJhz7bkPcJwUxoujy%2BfHSmHHcGCqdhjMk5KAaH1M7o%2Fzwu7bu0ytm&X-Amz-Signature=42c5831a8984f7a129ddca3fa4bdd8a6ba1607ab87c21100d4256c704a91bf45&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYG5526%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMw00ygZSj2fkYWcDh6YR7ZFxsJILcRaCjr%2BMiKRNv9gIhAOThldmM4HklnDqeTMb1nKqQpDXsWzStL%2BwdtMwR4Q1uKv8DCEQQABoMNjM3NDIzMTgzODA1IgwyPs3AgXKavop189cq3AO%2B09mHIv70oiT9CiW3ZWofHZiMPMGpAH7sdBXN3u4D41OHNI63KpX3nKf%2BTwLlNoyv2f%2FEPU4uSdBQ%2BcURee0Up0xRV7gPMyaOFd5szy0U6sS6pSW5wU3ovzwEI7MypjeGiadfHheVHmtWMFE6PrND%2B%2FcNE%2FPydAgedEdw4J1Fx7jm%2FLgIv%2BUZkIu4rG0V%2FYKBeFdhe07FyzHDFnvBTvTM4GFDtkzM%2F1%2BFHO5Blgcud1kSzALNdL8UoRlPdRZ1igr4bKSWZ89aBunGgluxxPcNLAIMhAlD8ieb0uIEjt0WwHo%2B7aN6bnAVxLYE5efTpCz3pIEG2q0EWAnaRC%2F9uE7ek2jZH1mpqPaWwveDhOoqZbGaZCN3XxcM%2F6VN57dcsumr%2B8cS5vB4ymIudiiUqLnKIutebhmy2%2B15jo4GUdqyme%2BOQY2FfUBI%2B%2B8AwuaWM6t1dQbeipmUhcNEOGni1lxXVl6uFC7th7uLZedqHpCs569AQipTl4epAt9QJ8jQMo6vrGROOosmJfX7KLqoDq9jpBSTtaH1xbt4dit9FcnKMVY%2BpZCHS83OH67ugn5r%2FhfszDhZGVf0JL%2BJz2cLG4%2FO5A6vk4utTNEUri%2Bs2ryYmMnIamJkOh7po%2BFcxDC8jOC%2BBjqkAejs254EVm1FaNA6%2FBFinWuvxGDOv%2FVcz0leu4Oor4k7Sq8EQ1I0%2FfIm3jcLxW3nAuFsGkhPWTGmpOLH1ZT0LVzNSlNZLX0uFHDVYCHafnwBUo4aaCS9jTI8Rx0GwJ1OpZcyDBigpUbtNB29HGuaugeAMIyfTonUWk85CtjqJhz7bkPcJwUxoujy%2BfHSmHHcGCqdhjMk5KAaH1M7o%2Fzwu7bu0ytm&X-Amz-Signature=5149172a66e1788698d8faca165ca8a26d2e14a507b688f271fbe56099b03b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYG5526%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMw00ygZSj2fkYWcDh6YR7ZFxsJILcRaCjr%2BMiKRNv9gIhAOThldmM4HklnDqeTMb1nKqQpDXsWzStL%2BwdtMwR4Q1uKv8DCEQQABoMNjM3NDIzMTgzODA1IgwyPs3AgXKavop189cq3AO%2B09mHIv70oiT9CiW3ZWofHZiMPMGpAH7sdBXN3u4D41OHNI63KpX3nKf%2BTwLlNoyv2f%2FEPU4uSdBQ%2BcURee0Up0xRV7gPMyaOFd5szy0U6sS6pSW5wU3ovzwEI7MypjeGiadfHheVHmtWMFE6PrND%2B%2FcNE%2FPydAgedEdw4J1Fx7jm%2FLgIv%2BUZkIu4rG0V%2FYKBeFdhe07FyzHDFnvBTvTM4GFDtkzM%2F1%2BFHO5Blgcud1kSzALNdL8UoRlPdRZ1igr4bKSWZ89aBunGgluxxPcNLAIMhAlD8ieb0uIEjt0WwHo%2B7aN6bnAVxLYE5efTpCz3pIEG2q0EWAnaRC%2F9uE7ek2jZH1mpqPaWwveDhOoqZbGaZCN3XxcM%2F6VN57dcsumr%2B8cS5vB4ymIudiiUqLnKIutebhmy2%2B15jo4GUdqyme%2BOQY2FfUBI%2B%2B8AwuaWM6t1dQbeipmUhcNEOGni1lxXVl6uFC7th7uLZedqHpCs569AQipTl4epAt9QJ8jQMo6vrGROOosmJfX7KLqoDq9jpBSTtaH1xbt4dit9FcnKMVY%2BpZCHS83OH67ugn5r%2FhfszDhZGVf0JL%2BJz2cLG4%2FO5A6vk4utTNEUri%2Bs2ryYmMnIamJkOh7po%2BFcxDC8jOC%2BBjqkAejs254EVm1FaNA6%2FBFinWuvxGDOv%2FVcz0leu4Oor4k7Sq8EQ1I0%2FfIm3jcLxW3nAuFsGkhPWTGmpOLH1ZT0LVzNSlNZLX0uFHDVYCHafnwBUo4aaCS9jTI8Rx0GwJ1OpZcyDBigpUbtNB29HGuaugeAMIyfTonUWk85CtjqJhz7bkPcJwUxoujy%2BfHSmHHcGCqdhjMk5KAaH1M7o%2Fzwu7bu0ytm&X-Amz-Signature=d3cff9111b4250ff041713b693bfa021791780e8036a22a0b41334d85fa9c66b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
