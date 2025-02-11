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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OUSZU4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFxrkxRGwsFR3IqX9vcyOrru7affXymNih2iOcnSLPwIhAJVk%2BxOh1rKQzO7BBZfRJOR7zVcQn2DeHC5InmwcXbA1KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqYddG8xlePYm2jU4q3AM5vsW8dZiGFJsLCR0sNs2CD7zHw0s8ob9wBzGsGtaXCoBaBB7PRsa%2FWKwq%2BC49d4RoiDUvrUQiXdTG7h%2BOV30Bv4PvVmXQYKVOuW3QKsuiYrnr9ZFrJ4r0NHO8mmHDHCTzJWvszn3q%2F4r6Hw559egfuvp9cjZBRyZXkdbQ35zL6jIzWpeM0mmXHKdMctthT58caegigXK71%2FqWabUfRTEAmKaQiZ1mfjlgd2VM%2FqMlphDUJz%2FK6cvqZ7VCrY9MQcuDHZj23LHR%2F8Su2zE31EXRBLzKc7Z1suuet1ob5BQsPx3o7flPDsvZhYL8CMuIYcPRNu2Rmo%2BjnwE4Ivgz9Mu5xuF8cn%2FiPBGjXkWGP0gMBBKUVA66G5TZqrOuNzBKq2FzdXqlJx%2Frj%2BOO%2FWYT7F0UjqEyA7%2FvJrrqIs9hvhDb2Nkx8HyWoeoqJqwDxtHGYqZcnN7TvbcSuWGBn0AF4VXoryuYYtC0JOIEHypTmyNvYu02k3X%2Bfz6wd4HlCSP3HXN15LBpiz%2FuZGDwc8WcMypPCeGrODLnzcE0BL3GftArXCCrHCULLHM53iCBe%2BmqjQWolk92FW8OTjI%2Bkv7F8BalEdWNyfd3AZRfP%2BUA00KNVZVC8j%2FRBz213u5QbDD49qq9BjqkAY0P2q%2FiOUv%2BD2XSPPDLMykRQiX8e%2BjUy04fPXqnACXcHnRm6o%2FHvq8Mc5UWXKjYSz3QDlbrowIKPlFhRBmhjrSpl5WH%2FDu3rtj5hLi3xcO8PLcbxIGzfKQamcB%2FI21Q5pwlUuEgoRDZNSoa6VA%2BQIXFgGBs0EOmLEQKD0jT37BUXUIcSzM%2BtxJDlwwPdsoWLO42Cemh%2BvHpHYFRHMA9nl%2FJrEdj&X-Amz-Signature=d50e0fdafd7eae5e808c99e17bf801387c7bd5182a943c3c956e6b01abc4c026&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OUSZU4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFxrkxRGwsFR3IqX9vcyOrru7affXymNih2iOcnSLPwIhAJVk%2BxOh1rKQzO7BBZfRJOR7zVcQn2DeHC5InmwcXbA1KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqYddG8xlePYm2jU4q3AM5vsW8dZiGFJsLCR0sNs2CD7zHw0s8ob9wBzGsGtaXCoBaBB7PRsa%2FWKwq%2BC49d4RoiDUvrUQiXdTG7h%2BOV30Bv4PvVmXQYKVOuW3QKsuiYrnr9ZFrJ4r0NHO8mmHDHCTzJWvszn3q%2F4r6Hw559egfuvp9cjZBRyZXkdbQ35zL6jIzWpeM0mmXHKdMctthT58caegigXK71%2FqWabUfRTEAmKaQiZ1mfjlgd2VM%2FqMlphDUJz%2FK6cvqZ7VCrY9MQcuDHZj23LHR%2F8Su2zE31EXRBLzKc7Z1suuet1ob5BQsPx3o7flPDsvZhYL8CMuIYcPRNu2Rmo%2BjnwE4Ivgz9Mu5xuF8cn%2FiPBGjXkWGP0gMBBKUVA66G5TZqrOuNzBKq2FzdXqlJx%2Frj%2BOO%2FWYT7F0UjqEyA7%2FvJrrqIs9hvhDb2Nkx8HyWoeoqJqwDxtHGYqZcnN7TvbcSuWGBn0AF4VXoryuYYtC0JOIEHypTmyNvYu02k3X%2Bfz6wd4HlCSP3HXN15LBpiz%2FuZGDwc8WcMypPCeGrODLnzcE0BL3GftArXCCrHCULLHM53iCBe%2BmqjQWolk92FW8OTjI%2Bkv7F8BalEdWNyfd3AZRfP%2BUA00KNVZVC8j%2FRBz213u5QbDD49qq9BjqkAY0P2q%2FiOUv%2BD2XSPPDLMykRQiX8e%2BjUy04fPXqnACXcHnRm6o%2FHvq8Mc5UWXKjYSz3QDlbrowIKPlFhRBmhjrSpl5WH%2FDu3rtj5hLi3xcO8PLcbxIGzfKQamcB%2FI21Q5pwlUuEgoRDZNSoa6VA%2BQIXFgGBs0EOmLEQKD0jT37BUXUIcSzM%2BtxJDlwwPdsoWLO42Cemh%2BvHpHYFRHMA9nl%2FJrEdj&X-Amz-Signature=610f42970c8349b0e02d31eb5ef1e7f61190767e8fc4d0dd5de8eb1bd2e2b97a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OUSZU4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFxrkxRGwsFR3IqX9vcyOrru7affXymNih2iOcnSLPwIhAJVk%2BxOh1rKQzO7BBZfRJOR7zVcQn2DeHC5InmwcXbA1KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqYddG8xlePYm2jU4q3AM5vsW8dZiGFJsLCR0sNs2CD7zHw0s8ob9wBzGsGtaXCoBaBB7PRsa%2FWKwq%2BC49d4RoiDUvrUQiXdTG7h%2BOV30Bv4PvVmXQYKVOuW3QKsuiYrnr9ZFrJ4r0NHO8mmHDHCTzJWvszn3q%2F4r6Hw559egfuvp9cjZBRyZXkdbQ35zL6jIzWpeM0mmXHKdMctthT58caegigXK71%2FqWabUfRTEAmKaQiZ1mfjlgd2VM%2FqMlphDUJz%2FK6cvqZ7VCrY9MQcuDHZj23LHR%2F8Su2zE31EXRBLzKc7Z1suuet1ob5BQsPx3o7flPDsvZhYL8CMuIYcPRNu2Rmo%2BjnwE4Ivgz9Mu5xuF8cn%2FiPBGjXkWGP0gMBBKUVA66G5TZqrOuNzBKq2FzdXqlJx%2Frj%2BOO%2FWYT7F0UjqEyA7%2FvJrrqIs9hvhDb2Nkx8HyWoeoqJqwDxtHGYqZcnN7TvbcSuWGBn0AF4VXoryuYYtC0JOIEHypTmyNvYu02k3X%2Bfz6wd4HlCSP3HXN15LBpiz%2FuZGDwc8WcMypPCeGrODLnzcE0BL3GftArXCCrHCULLHM53iCBe%2BmqjQWolk92FW8OTjI%2Bkv7F8BalEdWNyfd3AZRfP%2BUA00KNVZVC8j%2FRBz213u5QbDD49qq9BjqkAY0P2q%2FiOUv%2BD2XSPPDLMykRQiX8e%2BjUy04fPXqnACXcHnRm6o%2FHvq8Mc5UWXKjYSz3QDlbrowIKPlFhRBmhjrSpl5WH%2FDu3rtj5hLi3xcO8PLcbxIGzfKQamcB%2FI21Q5pwlUuEgoRDZNSoa6VA%2BQIXFgGBs0EOmLEQKD0jT37BUXUIcSzM%2BtxJDlwwPdsoWLO42Cemh%2BvHpHYFRHMA9nl%2FJrEdj&X-Amz-Signature=e2df471891582c80fb36d64043af7ac256b92753737db8fbe8d3922c6e55ef5c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OUSZU4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFxrkxRGwsFR3IqX9vcyOrru7affXymNih2iOcnSLPwIhAJVk%2BxOh1rKQzO7BBZfRJOR7zVcQn2DeHC5InmwcXbA1KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqYddG8xlePYm2jU4q3AM5vsW8dZiGFJsLCR0sNs2CD7zHw0s8ob9wBzGsGtaXCoBaBB7PRsa%2FWKwq%2BC49d4RoiDUvrUQiXdTG7h%2BOV30Bv4PvVmXQYKVOuW3QKsuiYrnr9ZFrJ4r0NHO8mmHDHCTzJWvszn3q%2F4r6Hw559egfuvp9cjZBRyZXkdbQ35zL6jIzWpeM0mmXHKdMctthT58caegigXK71%2FqWabUfRTEAmKaQiZ1mfjlgd2VM%2FqMlphDUJz%2FK6cvqZ7VCrY9MQcuDHZj23LHR%2F8Su2zE31EXRBLzKc7Z1suuet1ob5BQsPx3o7flPDsvZhYL8CMuIYcPRNu2Rmo%2BjnwE4Ivgz9Mu5xuF8cn%2FiPBGjXkWGP0gMBBKUVA66G5TZqrOuNzBKq2FzdXqlJx%2Frj%2BOO%2FWYT7F0UjqEyA7%2FvJrrqIs9hvhDb2Nkx8HyWoeoqJqwDxtHGYqZcnN7TvbcSuWGBn0AF4VXoryuYYtC0JOIEHypTmyNvYu02k3X%2Bfz6wd4HlCSP3HXN15LBpiz%2FuZGDwc8WcMypPCeGrODLnzcE0BL3GftArXCCrHCULLHM53iCBe%2BmqjQWolk92FW8OTjI%2Bkv7F8BalEdWNyfd3AZRfP%2BUA00KNVZVC8j%2FRBz213u5QbDD49qq9BjqkAY0P2q%2FiOUv%2BD2XSPPDLMykRQiX8e%2BjUy04fPXqnACXcHnRm6o%2FHvq8Mc5UWXKjYSz3QDlbrowIKPlFhRBmhjrSpl5WH%2FDu3rtj5hLi3xcO8PLcbxIGzfKQamcB%2FI21Q5pwlUuEgoRDZNSoa6VA%2BQIXFgGBs0EOmLEQKD0jT37BUXUIcSzM%2BtxJDlwwPdsoWLO42Cemh%2BvHpHYFRHMA9nl%2FJrEdj&X-Amz-Signature=591e63614c84764636344d8f2d2aecab0cdbbdbb3dec3425f15b96a852b97fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OUSZU4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFxrkxRGwsFR3IqX9vcyOrru7affXymNih2iOcnSLPwIhAJVk%2BxOh1rKQzO7BBZfRJOR7zVcQn2DeHC5InmwcXbA1KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqYddG8xlePYm2jU4q3AM5vsW8dZiGFJsLCR0sNs2CD7zHw0s8ob9wBzGsGtaXCoBaBB7PRsa%2FWKwq%2BC49d4RoiDUvrUQiXdTG7h%2BOV30Bv4PvVmXQYKVOuW3QKsuiYrnr9ZFrJ4r0NHO8mmHDHCTzJWvszn3q%2F4r6Hw559egfuvp9cjZBRyZXkdbQ35zL6jIzWpeM0mmXHKdMctthT58caegigXK71%2FqWabUfRTEAmKaQiZ1mfjlgd2VM%2FqMlphDUJz%2FK6cvqZ7VCrY9MQcuDHZj23LHR%2F8Su2zE31EXRBLzKc7Z1suuet1ob5BQsPx3o7flPDsvZhYL8CMuIYcPRNu2Rmo%2BjnwE4Ivgz9Mu5xuF8cn%2FiPBGjXkWGP0gMBBKUVA66G5TZqrOuNzBKq2FzdXqlJx%2Frj%2BOO%2FWYT7F0UjqEyA7%2FvJrrqIs9hvhDb2Nkx8HyWoeoqJqwDxtHGYqZcnN7TvbcSuWGBn0AF4VXoryuYYtC0JOIEHypTmyNvYu02k3X%2Bfz6wd4HlCSP3HXN15LBpiz%2FuZGDwc8WcMypPCeGrODLnzcE0BL3GftArXCCrHCULLHM53iCBe%2BmqjQWolk92FW8OTjI%2Bkv7F8BalEdWNyfd3AZRfP%2BUA00KNVZVC8j%2FRBz213u5QbDD49qq9BjqkAY0P2q%2FiOUv%2BD2XSPPDLMykRQiX8e%2BjUy04fPXqnACXcHnRm6o%2FHvq8Mc5UWXKjYSz3QDlbrowIKPlFhRBmhjrSpl5WH%2FDu3rtj5hLi3xcO8PLcbxIGzfKQamcB%2FI21Q5pwlUuEgoRDZNSoa6VA%2BQIXFgGBs0EOmLEQKD0jT37BUXUIcSzM%2BtxJDlwwPdsoWLO42Cemh%2BvHpHYFRHMA9nl%2FJrEdj&X-Amz-Signature=e14e56cd6f3ef369e315f07c552da06515bf8e346acb282db0259a97d3210516&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OUSZU4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFxrkxRGwsFR3IqX9vcyOrru7affXymNih2iOcnSLPwIhAJVk%2BxOh1rKQzO7BBZfRJOR7zVcQn2DeHC5InmwcXbA1KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqYddG8xlePYm2jU4q3AM5vsW8dZiGFJsLCR0sNs2CD7zHw0s8ob9wBzGsGtaXCoBaBB7PRsa%2FWKwq%2BC49d4RoiDUvrUQiXdTG7h%2BOV30Bv4PvVmXQYKVOuW3QKsuiYrnr9ZFrJ4r0NHO8mmHDHCTzJWvszn3q%2F4r6Hw559egfuvp9cjZBRyZXkdbQ35zL6jIzWpeM0mmXHKdMctthT58caegigXK71%2FqWabUfRTEAmKaQiZ1mfjlgd2VM%2FqMlphDUJz%2FK6cvqZ7VCrY9MQcuDHZj23LHR%2F8Su2zE31EXRBLzKc7Z1suuet1ob5BQsPx3o7flPDsvZhYL8CMuIYcPRNu2Rmo%2BjnwE4Ivgz9Mu5xuF8cn%2FiPBGjXkWGP0gMBBKUVA66G5TZqrOuNzBKq2FzdXqlJx%2Frj%2BOO%2FWYT7F0UjqEyA7%2FvJrrqIs9hvhDb2Nkx8HyWoeoqJqwDxtHGYqZcnN7TvbcSuWGBn0AF4VXoryuYYtC0JOIEHypTmyNvYu02k3X%2Bfz6wd4HlCSP3HXN15LBpiz%2FuZGDwc8WcMypPCeGrODLnzcE0BL3GftArXCCrHCULLHM53iCBe%2BmqjQWolk92FW8OTjI%2Bkv7F8BalEdWNyfd3AZRfP%2BUA00KNVZVC8j%2FRBz213u5QbDD49qq9BjqkAY0P2q%2FiOUv%2BD2XSPPDLMykRQiX8e%2BjUy04fPXqnACXcHnRm6o%2FHvq8Mc5UWXKjYSz3QDlbrowIKPlFhRBmhjrSpl5WH%2FDu3rtj5hLi3xcO8PLcbxIGzfKQamcB%2FI21Q5pwlUuEgoRDZNSoa6VA%2BQIXFgGBs0EOmLEQKD0jT37BUXUIcSzM%2BtxJDlwwPdsoWLO42Cemh%2BvHpHYFRHMA9nl%2FJrEdj&X-Amz-Signature=53f44285a03400042df4ed220e5c43a30b524f49715eb4abbe4353286c5194ed&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OUSZU4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFxrkxRGwsFR3IqX9vcyOrru7affXymNih2iOcnSLPwIhAJVk%2BxOh1rKQzO7BBZfRJOR7zVcQn2DeHC5InmwcXbA1KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqYddG8xlePYm2jU4q3AM5vsW8dZiGFJsLCR0sNs2CD7zHw0s8ob9wBzGsGtaXCoBaBB7PRsa%2FWKwq%2BC49d4RoiDUvrUQiXdTG7h%2BOV30Bv4PvVmXQYKVOuW3QKsuiYrnr9ZFrJ4r0NHO8mmHDHCTzJWvszn3q%2F4r6Hw559egfuvp9cjZBRyZXkdbQ35zL6jIzWpeM0mmXHKdMctthT58caegigXK71%2FqWabUfRTEAmKaQiZ1mfjlgd2VM%2FqMlphDUJz%2FK6cvqZ7VCrY9MQcuDHZj23LHR%2F8Su2zE31EXRBLzKc7Z1suuet1ob5BQsPx3o7flPDsvZhYL8CMuIYcPRNu2Rmo%2BjnwE4Ivgz9Mu5xuF8cn%2FiPBGjXkWGP0gMBBKUVA66G5TZqrOuNzBKq2FzdXqlJx%2Frj%2BOO%2FWYT7F0UjqEyA7%2FvJrrqIs9hvhDb2Nkx8HyWoeoqJqwDxtHGYqZcnN7TvbcSuWGBn0AF4VXoryuYYtC0JOIEHypTmyNvYu02k3X%2Bfz6wd4HlCSP3HXN15LBpiz%2FuZGDwc8WcMypPCeGrODLnzcE0BL3GftArXCCrHCULLHM53iCBe%2BmqjQWolk92FW8OTjI%2Bkv7F8BalEdWNyfd3AZRfP%2BUA00KNVZVC8j%2FRBz213u5QbDD49qq9BjqkAY0P2q%2FiOUv%2BD2XSPPDLMykRQiX8e%2BjUy04fPXqnACXcHnRm6o%2FHvq8Mc5UWXKjYSz3QDlbrowIKPlFhRBmhjrSpl5WH%2FDu3rtj5hLi3xcO8PLcbxIGzfKQamcB%2FI21Q5pwlUuEgoRDZNSoa6VA%2BQIXFgGBs0EOmLEQKD0jT37BUXUIcSzM%2BtxJDlwwPdsoWLO42Cemh%2BvHpHYFRHMA9nl%2FJrEdj&X-Amz-Signature=ce8fa5f554dc3b865c93aaa63c9b9e286634e458636e0bcae09d53be76c7d689&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
