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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXA2M7IQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvFhhW6HNzB%2BFU2yAb60WawP2ehsnv49QqzmnLS0NpiwIgODUz6YR6l5XYTGN7xuOwPzGKDA74VsF8hXeJTISB1D4qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZm2SLPQqPq%2BrpaQircA8oOb5u7m%2BBLD7yyBxj8aSFznG5wurus%2BXJ8PuwBMcclmHr81VUri8RXGW3Xgm%2BRwLP%2BedDGN64a4SFdSVKwo5ZWF7Y21VCjM4naKMK0Hd2x1LBZ%2FnMEksFdrHtRfsjf5UmcGeg%2F2eKiHhHRi41p01%2FCPedFizRf4VTvNht92Oc1%2F5Gzo%2FmpJS%2BxtQwYGyXuPA4wivFyMWZEJcU2fpbWot7Anp16eBKcqWHK3HKpfqcaBFESA0H1ZPlGxHFffRpXuhi6nGVoVXb9sog3Eh0uaYcDH8cHu8Zs6T3GrBjhGBPTpj6qblm7v4ChQ3Z1K6uGOOyZJ5OJwWy%2FqIFG8bUtLl3aI%2BKwP9dEdeRamin4pC8MJzG8pU%2FVzhZW%2BZYym0iDtlIiJXQ1GmnYL%2FPPdAxQBDQgqKiQ4HpM8rXfma5WiKQckq3z7Pj2BlJe%2FvibaTa20qvOdY7bOZrCncFS2lQCfZPtGy8RxTwvIRemMNlMZ5yWGLMgPX4ku4MLVwFgrkXOOptOo6qOQURIufALcK5TYDYb3z4kBf%2F2ZCUJfTMUF0KYyyhm8B0YcGuJofZqo5lnzJqQETLOEo6k5UtdBhpt58i97nBtubzK%2Fqd%2BHkkwGbXJn%2B8NWOgK2WApKUjPMOq8lsMGOqUBre%2BSJ85eHeiWXOQgBW1v3uyl%2BHlVKj7qAhBAazK5QwmloAyCQAcZ0yF9P%2FeT1DVJ%2FuGVNMsQTnQlDML6wPLWuT6lCcTs9Mhv6a7piR5%2BTxAab1sEtUOnCJUU6qdA%2Fm7okjkNoG9CvSAw9waFmE9K5q8z5N1%2FXQ9pfHBEi96XEWJOQqAbqBBfC9iQLtt4wOeqUu02wsv9dFFP3%2FM%2Bez4zMJkhiEmY&X-Amz-Signature=865d21fb97d84e508cfe5592f763d95203ed182b8b6ad01b42e4a4eda559d886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXA2M7IQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvFhhW6HNzB%2BFU2yAb60WawP2ehsnv49QqzmnLS0NpiwIgODUz6YR6l5XYTGN7xuOwPzGKDA74VsF8hXeJTISB1D4qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZm2SLPQqPq%2BrpaQircA8oOb5u7m%2BBLD7yyBxj8aSFznG5wurus%2BXJ8PuwBMcclmHr81VUri8RXGW3Xgm%2BRwLP%2BedDGN64a4SFdSVKwo5ZWF7Y21VCjM4naKMK0Hd2x1LBZ%2FnMEksFdrHtRfsjf5UmcGeg%2F2eKiHhHRi41p01%2FCPedFizRf4VTvNht92Oc1%2F5Gzo%2FmpJS%2BxtQwYGyXuPA4wivFyMWZEJcU2fpbWot7Anp16eBKcqWHK3HKpfqcaBFESA0H1ZPlGxHFffRpXuhi6nGVoVXb9sog3Eh0uaYcDH8cHu8Zs6T3GrBjhGBPTpj6qblm7v4ChQ3Z1K6uGOOyZJ5OJwWy%2FqIFG8bUtLl3aI%2BKwP9dEdeRamin4pC8MJzG8pU%2FVzhZW%2BZYym0iDtlIiJXQ1GmnYL%2FPPdAxQBDQgqKiQ4HpM8rXfma5WiKQckq3z7Pj2BlJe%2FvibaTa20qvOdY7bOZrCncFS2lQCfZPtGy8RxTwvIRemMNlMZ5yWGLMgPX4ku4MLVwFgrkXOOptOo6qOQURIufALcK5TYDYb3z4kBf%2F2ZCUJfTMUF0KYyyhm8B0YcGuJofZqo5lnzJqQETLOEo6k5UtdBhpt58i97nBtubzK%2Fqd%2BHkkwGbXJn%2B8NWOgK2WApKUjPMOq8lsMGOqUBre%2BSJ85eHeiWXOQgBW1v3uyl%2BHlVKj7qAhBAazK5QwmloAyCQAcZ0yF9P%2FeT1DVJ%2FuGVNMsQTnQlDML6wPLWuT6lCcTs9Mhv6a7piR5%2BTxAab1sEtUOnCJUU6qdA%2Fm7okjkNoG9CvSAw9waFmE9K5q8z5N1%2FXQ9pfHBEi96XEWJOQqAbqBBfC9iQLtt4wOeqUu02wsv9dFFP3%2FM%2Bez4zMJkhiEmY&X-Amz-Signature=c6fd49763bc62a8d0158ee50e487f722c2ad5d73bea76d55e31259463c9f6bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXA2M7IQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvFhhW6HNzB%2BFU2yAb60WawP2ehsnv49QqzmnLS0NpiwIgODUz6YR6l5XYTGN7xuOwPzGKDA74VsF8hXeJTISB1D4qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZm2SLPQqPq%2BrpaQircA8oOb5u7m%2BBLD7yyBxj8aSFznG5wurus%2BXJ8PuwBMcclmHr81VUri8RXGW3Xgm%2BRwLP%2BedDGN64a4SFdSVKwo5ZWF7Y21VCjM4naKMK0Hd2x1LBZ%2FnMEksFdrHtRfsjf5UmcGeg%2F2eKiHhHRi41p01%2FCPedFizRf4VTvNht92Oc1%2F5Gzo%2FmpJS%2BxtQwYGyXuPA4wivFyMWZEJcU2fpbWot7Anp16eBKcqWHK3HKpfqcaBFESA0H1ZPlGxHFffRpXuhi6nGVoVXb9sog3Eh0uaYcDH8cHu8Zs6T3GrBjhGBPTpj6qblm7v4ChQ3Z1K6uGOOyZJ5OJwWy%2FqIFG8bUtLl3aI%2BKwP9dEdeRamin4pC8MJzG8pU%2FVzhZW%2BZYym0iDtlIiJXQ1GmnYL%2FPPdAxQBDQgqKiQ4HpM8rXfma5WiKQckq3z7Pj2BlJe%2FvibaTa20qvOdY7bOZrCncFS2lQCfZPtGy8RxTwvIRemMNlMZ5yWGLMgPX4ku4MLVwFgrkXOOptOo6qOQURIufALcK5TYDYb3z4kBf%2F2ZCUJfTMUF0KYyyhm8B0YcGuJofZqo5lnzJqQETLOEo6k5UtdBhpt58i97nBtubzK%2Fqd%2BHkkwGbXJn%2B8NWOgK2WApKUjPMOq8lsMGOqUBre%2BSJ85eHeiWXOQgBW1v3uyl%2BHlVKj7qAhBAazK5QwmloAyCQAcZ0yF9P%2FeT1DVJ%2FuGVNMsQTnQlDML6wPLWuT6lCcTs9Mhv6a7piR5%2BTxAab1sEtUOnCJUU6qdA%2Fm7okjkNoG9CvSAw9waFmE9K5q8z5N1%2FXQ9pfHBEi96XEWJOQqAbqBBfC9iQLtt4wOeqUu02wsv9dFFP3%2FM%2Bez4zMJkhiEmY&X-Amz-Signature=7aba1a71803f607fe699fbe7437d11ccec98d53a6ea87081305c631e39a559ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXA2M7IQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvFhhW6HNzB%2BFU2yAb60WawP2ehsnv49QqzmnLS0NpiwIgODUz6YR6l5XYTGN7xuOwPzGKDA74VsF8hXeJTISB1D4qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZm2SLPQqPq%2BrpaQircA8oOb5u7m%2BBLD7yyBxj8aSFznG5wurus%2BXJ8PuwBMcclmHr81VUri8RXGW3Xgm%2BRwLP%2BedDGN64a4SFdSVKwo5ZWF7Y21VCjM4naKMK0Hd2x1LBZ%2FnMEksFdrHtRfsjf5UmcGeg%2F2eKiHhHRi41p01%2FCPedFizRf4VTvNht92Oc1%2F5Gzo%2FmpJS%2BxtQwYGyXuPA4wivFyMWZEJcU2fpbWot7Anp16eBKcqWHK3HKpfqcaBFESA0H1ZPlGxHFffRpXuhi6nGVoVXb9sog3Eh0uaYcDH8cHu8Zs6T3GrBjhGBPTpj6qblm7v4ChQ3Z1K6uGOOyZJ5OJwWy%2FqIFG8bUtLl3aI%2BKwP9dEdeRamin4pC8MJzG8pU%2FVzhZW%2BZYym0iDtlIiJXQ1GmnYL%2FPPdAxQBDQgqKiQ4HpM8rXfma5WiKQckq3z7Pj2BlJe%2FvibaTa20qvOdY7bOZrCncFS2lQCfZPtGy8RxTwvIRemMNlMZ5yWGLMgPX4ku4MLVwFgrkXOOptOo6qOQURIufALcK5TYDYb3z4kBf%2F2ZCUJfTMUF0KYyyhm8B0YcGuJofZqo5lnzJqQETLOEo6k5UtdBhpt58i97nBtubzK%2Fqd%2BHkkwGbXJn%2B8NWOgK2WApKUjPMOq8lsMGOqUBre%2BSJ85eHeiWXOQgBW1v3uyl%2BHlVKj7qAhBAazK5QwmloAyCQAcZ0yF9P%2FeT1DVJ%2FuGVNMsQTnQlDML6wPLWuT6lCcTs9Mhv6a7piR5%2BTxAab1sEtUOnCJUU6qdA%2Fm7okjkNoG9CvSAw9waFmE9K5q8z5N1%2FXQ9pfHBEi96XEWJOQqAbqBBfC9iQLtt4wOeqUu02wsv9dFFP3%2FM%2Bez4zMJkhiEmY&X-Amz-Signature=d9d57321d6c2c5f7216761a6b5f1439cc38ecfb39a4ef8031bfd930e5a36f013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXA2M7IQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvFhhW6HNzB%2BFU2yAb60WawP2ehsnv49QqzmnLS0NpiwIgODUz6YR6l5XYTGN7xuOwPzGKDA74VsF8hXeJTISB1D4qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZm2SLPQqPq%2BrpaQircA8oOb5u7m%2BBLD7yyBxj8aSFznG5wurus%2BXJ8PuwBMcclmHr81VUri8RXGW3Xgm%2BRwLP%2BedDGN64a4SFdSVKwo5ZWF7Y21VCjM4naKMK0Hd2x1LBZ%2FnMEksFdrHtRfsjf5UmcGeg%2F2eKiHhHRi41p01%2FCPedFizRf4VTvNht92Oc1%2F5Gzo%2FmpJS%2BxtQwYGyXuPA4wivFyMWZEJcU2fpbWot7Anp16eBKcqWHK3HKpfqcaBFESA0H1ZPlGxHFffRpXuhi6nGVoVXb9sog3Eh0uaYcDH8cHu8Zs6T3GrBjhGBPTpj6qblm7v4ChQ3Z1K6uGOOyZJ5OJwWy%2FqIFG8bUtLl3aI%2BKwP9dEdeRamin4pC8MJzG8pU%2FVzhZW%2BZYym0iDtlIiJXQ1GmnYL%2FPPdAxQBDQgqKiQ4HpM8rXfma5WiKQckq3z7Pj2BlJe%2FvibaTa20qvOdY7bOZrCncFS2lQCfZPtGy8RxTwvIRemMNlMZ5yWGLMgPX4ku4MLVwFgrkXOOptOo6qOQURIufALcK5TYDYb3z4kBf%2F2ZCUJfTMUF0KYyyhm8B0YcGuJofZqo5lnzJqQETLOEo6k5UtdBhpt58i97nBtubzK%2Fqd%2BHkkwGbXJn%2B8NWOgK2WApKUjPMOq8lsMGOqUBre%2BSJ85eHeiWXOQgBW1v3uyl%2BHlVKj7qAhBAazK5QwmloAyCQAcZ0yF9P%2FeT1DVJ%2FuGVNMsQTnQlDML6wPLWuT6lCcTs9Mhv6a7piR5%2BTxAab1sEtUOnCJUU6qdA%2Fm7okjkNoG9CvSAw9waFmE9K5q8z5N1%2FXQ9pfHBEi96XEWJOQqAbqBBfC9iQLtt4wOeqUu02wsv9dFFP3%2FM%2Bez4zMJkhiEmY&X-Amz-Signature=10a76855f5e9f991077e1b0451344f2331b3a5eebc8e1af4729a77940070d357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXA2M7IQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvFhhW6HNzB%2BFU2yAb60WawP2ehsnv49QqzmnLS0NpiwIgODUz6YR6l5XYTGN7xuOwPzGKDA74VsF8hXeJTISB1D4qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZm2SLPQqPq%2BrpaQircA8oOb5u7m%2BBLD7yyBxj8aSFznG5wurus%2BXJ8PuwBMcclmHr81VUri8RXGW3Xgm%2BRwLP%2BedDGN64a4SFdSVKwo5ZWF7Y21VCjM4naKMK0Hd2x1LBZ%2FnMEksFdrHtRfsjf5UmcGeg%2F2eKiHhHRi41p01%2FCPedFizRf4VTvNht92Oc1%2F5Gzo%2FmpJS%2BxtQwYGyXuPA4wivFyMWZEJcU2fpbWot7Anp16eBKcqWHK3HKpfqcaBFESA0H1ZPlGxHFffRpXuhi6nGVoVXb9sog3Eh0uaYcDH8cHu8Zs6T3GrBjhGBPTpj6qblm7v4ChQ3Z1K6uGOOyZJ5OJwWy%2FqIFG8bUtLl3aI%2BKwP9dEdeRamin4pC8MJzG8pU%2FVzhZW%2BZYym0iDtlIiJXQ1GmnYL%2FPPdAxQBDQgqKiQ4HpM8rXfma5WiKQckq3z7Pj2BlJe%2FvibaTa20qvOdY7bOZrCncFS2lQCfZPtGy8RxTwvIRemMNlMZ5yWGLMgPX4ku4MLVwFgrkXOOptOo6qOQURIufALcK5TYDYb3z4kBf%2F2ZCUJfTMUF0KYyyhm8B0YcGuJofZqo5lnzJqQETLOEo6k5UtdBhpt58i97nBtubzK%2Fqd%2BHkkwGbXJn%2B8NWOgK2WApKUjPMOq8lsMGOqUBre%2BSJ85eHeiWXOQgBW1v3uyl%2BHlVKj7qAhBAazK5QwmloAyCQAcZ0yF9P%2FeT1DVJ%2FuGVNMsQTnQlDML6wPLWuT6lCcTs9Mhv6a7piR5%2BTxAab1sEtUOnCJUU6qdA%2Fm7okjkNoG9CvSAw9waFmE9K5q8z5N1%2FXQ9pfHBEi96XEWJOQqAbqBBfC9iQLtt4wOeqUu02wsv9dFFP3%2FM%2Bez4zMJkhiEmY&X-Amz-Signature=7dc7caf88de9a484e47e720511292dc5fab21db879c43e85b1fd1632f3c51cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXA2M7IQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvFhhW6HNzB%2BFU2yAb60WawP2ehsnv49QqzmnLS0NpiwIgODUz6YR6l5XYTGN7xuOwPzGKDA74VsF8hXeJTISB1D4qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZm2SLPQqPq%2BrpaQircA8oOb5u7m%2BBLD7yyBxj8aSFznG5wurus%2BXJ8PuwBMcclmHr81VUri8RXGW3Xgm%2BRwLP%2BedDGN64a4SFdSVKwo5ZWF7Y21VCjM4naKMK0Hd2x1LBZ%2FnMEksFdrHtRfsjf5UmcGeg%2F2eKiHhHRi41p01%2FCPedFizRf4VTvNht92Oc1%2F5Gzo%2FmpJS%2BxtQwYGyXuPA4wivFyMWZEJcU2fpbWot7Anp16eBKcqWHK3HKpfqcaBFESA0H1ZPlGxHFffRpXuhi6nGVoVXb9sog3Eh0uaYcDH8cHu8Zs6T3GrBjhGBPTpj6qblm7v4ChQ3Z1K6uGOOyZJ5OJwWy%2FqIFG8bUtLl3aI%2BKwP9dEdeRamin4pC8MJzG8pU%2FVzhZW%2BZYym0iDtlIiJXQ1GmnYL%2FPPdAxQBDQgqKiQ4HpM8rXfma5WiKQckq3z7Pj2BlJe%2FvibaTa20qvOdY7bOZrCncFS2lQCfZPtGy8RxTwvIRemMNlMZ5yWGLMgPX4ku4MLVwFgrkXOOptOo6qOQURIufALcK5TYDYb3z4kBf%2F2ZCUJfTMUF0KYyyhm8B0YcGuJofZqo5lnzJqQETLOEo6k5UtdBhpt58i97nBtubzK%2Fqd%2BHkkwGbXJn%2B8NWOgK2WApKUjPMOq8lsMGOqUBre%2BSJ85eHeiWXOQgBW1v3uyl%2BHlVKj7qAhBAazK5QwmloAyCQAcZ0yF9P%2FeT1DVJ%2FuGVNMsQTnQlDML6wPLWuT6lCcTs9Mhv6a7piR5%2BTxAab1sEtUOnCJUU6qdA%2Fm7okjkNoG9CvSAw9waFmE9K5q8z5N1%2FXQ9pfHBEi96XEWJOQqAbqBBfC9iQLtt4wOeqUu02wsv9dFFP3%2FM%2Bez4zMJkhiEmY&X-Amz-Signature=b709f394a13e653134246fc36806ffc2f53c7288fb83e28f100d86b49fc1d7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
