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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LI3WCY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCbn7U%2FL02a8jHEWD6D1ecFangwzt2qLBm9Vj4vOgMJmwIgVkZOnm6XEERdScKVM83iap1Zdsxqng%2FVIjv1ury7jSQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTZWk5xwqXf23EZ3yrcA2Ie0IkJ3agoSipGsTjL0uI2Rphm8i0dnfHH9ZYYX973wkgi5IJfCUdtbdQIEBRfbHp8iClNxRN5TAiV4%2BBFN14rESh7FIVWbrSAVfrUvUeayvW3efCwt%2Byh6tyQZVZ1X%2B4ad6HnhT%2BYCeLFfVwuwmm722io95d%2Fp6pk36S%2F%2B7CAnUt7txwDviiQ8IsDNrQamnZiIt9qg8D%2F8iFRWd5aPN4JD7Q9fQWhC0WpGQPsbw%2BvXrwXc0wQqTqK1gYTYu5lpJhNnUBNJh69yJkGWFWutHkYrGtC0DGC7hSTLdq8sY%2BRCsPUXFIjyWxHxKeukn%2BEhQGEIcS%2Fl9ybUP0IPgChaRbMtTpaUyNbtPUxePv5rNfHsbWd3f%2FfEjxQTFeYIvvShMY14I6QLMBbo9GAJCjGHwUp9rq3IzQADrJyfoGuv2kFM9BDQSCUv3EYr62tAC6IqKLRKnXWJOsOcsM9lueRPwh7X4jpavfP8RyhZLLochP2mo4J8tdz6EGdflEEXcY%2BfdXFQtiKBf02au%2FQN%2BrnYJq5GHT%2BmfIUQffVt2XPCN%2FHKpLKHzrUGxfbpudn20aU6jGoFHuUKTd9LfY70%2Bg3vw2tuuDg4oiH24jfml4RNeYd9KvHvxPTgsQFRThqMInw38IGOqUBL1YPdmUOK5wtpg0%2FTAp2WSgunqbkaOU%2BJ%2FgeM4bCJvsoRlQ8E0ok8gAsPPPaR81C4kj3yf%2FNQ81%2BA1prLD8IJr63qXxY76qtCn5e3429%2B5W91UGf20bXNQljgg3DsJU26GCUnBiIkv01VZ0Pv10wAJO5TAsR5zYSCnzWWHvyHvU4ZBIOpHz8wPrC3ZRostG6Z1RoNhiMldU%2FBG9C2U5Ku3cBDRs1&X-Amz-Signature=16a20e8f17e2c8db3081feb6ec49ab739033a60855a507caa57c9321e4e39450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LI3WCY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCbn7U%2FL02a8jHEWD6D1ecFangwzt2qLBm9Vj4vOgMJmwIgVkZOnm6XEERdScKVM83iap1Zdsxqng%2FVIjv1ury7jSQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTZWk5xwqXf23EZ3yrcA2Ie0IkJ3agoSipGsTjL0uI2Rphm8i0dnfHH9ZYYX973wkgi5IJfCUdtbdQIEBRfbHp8iClNxRN5TAiV4%2BBFN14rESh7FIVWbrSAVfrUvUeayvW3efCwt%2Byh6tyQZVZ1X%2B4ad6HnhT%2BYCeLFfVwuwmm722io95d%2Fp6pk36S%2F%2B7CAnUt7txwDviiQ8IsDNrQamnZiIt9qg8D%2F8iFRWd5aPN4JD7Q9fQWhC0WpGQPsbw%2BvXrwXc0wQqTqK1gYTYu5lpJhNnUBNJh69yJkGWFWutHkYrGtC0DGC7hSTLdq8sY%2BRCsPUXFIjyWxHxKeukn%2BEhQGEIcS%2Fl9ybUP0IPgChaRbMtTpaUyNbtPUxePv5rNfHsbWd3f%2FfEjxQTFeYIvvShMY14I6QLMBbo9GAJCjGHwUp9rq3IzQADrJyfoGuv2kFM9BDQSCUv3EYr62tAC6IqKLRKnXWJOsOcsM9lueRPwh7X4jpavfP8RyhZLLochP2mo4J8tdz6EGdflEEXcY%2BfdXFQtiKBf02au%2FQN%2BrnYJq5GHT%2BmfIUQffVt2XPCN%2FHKpLKHzrUGxfbpudn20aU6jGoFHuUKTd9LfY70%2Bg3vw2tuuDg4oiH24jfml4RNeYd9KvHvxPTgsQFRThqMInw38IGOqUBL1YPdmUOK5wtpg0%2FTAp2WSgunqbkaOU%2BJ%2FgeM4bCJvsoRlQ8E0ok8gAsPPPaR81C4kj3yf%2FNQ81%2BA1prLD8IJr63qXxY76qtCn5e3429%2B5W91UGf20bXNQljgg3DsJU26GCUnBiIkv01VZ0Pv10wAJO5TAsR5zYSCnzWWHvyHvU4ZBIOpHz8wPrC3ZRostG6Z1RoNhiMldU%2FBG9C2U5Ku3cBDRs1&X-Amz-Signature=5595d03c0e3b37422e9d509354a5003bbf6aa17d8c34129be0f812631b2f7ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LI3WCY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCbn7U%2FL02a8jHEWD6D1ecFangwzt2qLBm9Vj4vOgMJmwIgVkZOnm6XEERdScKVM83iap1Zdsxqng%2FVIjv1ury7jSQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTZWk5xwqXf23EZ3yrcA2Ie0IkJ3agoSipGsTjL0uI2Rphm8i0dnfHH9ZYYX973wkgi5IJfCUdtbdQIEBRfbHp8iClNxRN5TAiV4%2BBFN14rESh7FIVWbrSAVfrUvUeayvW3efCwt%2Byh6tyQZVZ1X%2B4ad6HnhT%2BYCeLFfVwuwmm722io95d%2Fp6pk36S%2F%2B7CAnUt7txwDviiQ8IsDNrQamnZiIt9qg8D%2F8iFRWd5aPN4JD7Q9fQWhC0WpGQPsbw%2BvXrwXc0wQqTqK1gYTYu5lpJhNnUBNJh69yJkGWFWutHkYrGtC0DGC7hSTLdq8sY%2BRCsPUXFIjyWxHxKeukn%2BEhQGEIcS%2Fl9ybUP0IPgChaRbMtTpaUyNbtPUxePv5rNfHsbWd3f%2FfEjxQTFeYIvvShMY14I6QLMBbo9GAJCjGHwUp9rq3IzQADrJyfoGuv2kFM9BDQSCUv3EYr62tAC6IqKLRKnXWJOsOcsM9lueRPwh7X4jpavfP8RyhZLLochP2mo4J8tdz6EGdflEEXcY%2BfdXFQtiKBf02au%2FQN%2BrnYJq5GHT%2BmfIUQffVt2XPCN%2FHKpLKHzrUGxfbpudn20aU6jGoFHuUKTd9LfY70%2Bg3vw2tuuDg4oiH24jfml4RNeYd9KvHvxPTgsQFRThqMInw38IGOqUBL1YPdmUOK5wtpg0%2FTAp2WSgunqbkaOU%2BJ%2FgeM4bCJvsoRlQ8E0ok8gAsPPPaR81C4kj3yf%2FNQ81%2BA1prLD8IJr63qXxY76qtCn5e3429%2B5W91UGf20bXNQljgg3DsJU26GCUnBiIkv01VZ0Pv10wAJO5TAsR5zYSCnzWWHvyHvU4ZBIOpHz8wPrC3ZRostG6Z1RoNhiMldU%2FBG9C2U5Ku3cBDRs1&X-Amz-Signature=1654a5137e76b9b89afbd01230b7c84f7e2471f0c24416d638fe4baeb1a14e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LI3WCY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCbn7U%2FL02a8jHEWD6D1ecFangwzt2qLBm9Vj4vOgMJmwIgVkZOnm6XEERdScKVM83iap1Zdsxqng%2FVIjv1ury7jSQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTZWk5xwqXf23EZ3yrcA2Ie0IkJ3agoSipGsTjL0uI2Rphm8i0dnfHH9ZYYX973wkgi5IJfCUdtbdQIEBRfbHp8iClNxRN5TAiV4%2BBFN14rESh7FIVWbrSAVfrUvUeayvW3efCwt%2Byh6tyQZVZ1X%2B4ad6HnhT%2BYCeLFfVwuwmm722io95d%2Fp6pk36S%2F%2B7CAnUt7txwDviiQ8IsDNrQamnZiIt9qg8D%2F8iFRWd5aPN4JD7Q9fQWhC0WpGQPsbw%2BvXrwXc0wQqTqK1gYTYu5lpJhNnUBNJh69yJkGWFWutHkYrGtC0DGC7hSTLdq8sY%2BRCsPUXFIjyWxHxKeukn%2BEhQGEIcS%2Fl9ybUP0IPgChaRbMtTpaUyNbtPUxePv5rNfHsbWd3f%2FfEjxQTFeYIvvShMY14I6QLMBbo9GAJCjGHwUp9rq3IzQADrJyfoGuv2kFM9BDQSCUv3EYr62tAC6IqKLRKnXWJOsOcsM9lueRPwh7X4jpavfP8RyhZLLochP2mo4J8tdz6EGdflEEXcY%2BfdXFQtiKBf02au%2FQN%2BrnYJq5GHT%2BmfIUQffVt2XPCN%2FHKpLKHzrUGxfbpudn20aU6jGoFHuUKTd9LfY70%2Bg3vw2tuuDg4oiH24jfml4RNeYd9KvHvxPTgsQFRThqMInw38IGOqUBL1YPdmUOK5wtpg0%2FTAp2WSgunqbkaOU%2BJ%2FgeM4bCJvsoRlQ8E0ok8gAsPPPaR81C4kj3yf%2FNQ81%2BA1prLD8IJr63qXxY76qtCn5e3429%2B5W91UGf20bXNQljgg3DsJU26GCUnBiIkv01VZ0Pv10wAJO5TAsR5zYSCnzWWHvyHvU4ZBIOpHz8wPrC3ZRostG6Z1RoNhiMldU%2FBG9C2U5Ku3cBDRs1&X-Amz-Signature=68d03712db9220e47e7a5224b04ceaf3533b00f995c43634edb03f040a3e1f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LI3WCY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCbn7U%2FL02a8jHEWD6D1ecFangwzt2qLBm9Vj4vOgMJmwIgVkZOnm6XEERdScKVM83iap1Zdsxqng%2FVIjv1ury7jSQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTZWk5xwqXf23EZ3yrcA2Ie0IkJ3agoSipGsTjL0uI2Rphm8i0dnfHH9ZYYX973wkgi5IJfCUdtbdQIEBRfbHp8iClNxRN5TAiV4%2BBFN14rESh7FIVWbrSAVfrUvUeayvW3efCwt%2Byh6tyQZVZ1X%2B4ad6HnhT%2BYCeLFfVwuwmm722io95d%2Fp6pk36S%2F%2B7CAnUt7txwDviiQ8IsDNrQamnZiIt9qg8D%2F8iFRWd5aPN4JD7Q9fQWhC0WpGQPsbw%2BvXrwXc0wQqTqK1gYTYu5lpJhNnUBNJh69yJkGWFWutHkYrGtC0DGC7hSTLdq8sY%2BRCsPUXFIjyWxHxKeukn%2BEhQGEIcS%2Fl9ybUP0IPgChaRbMtTpaUyNbtPUxePv5rNfHsbWd3f%2FfEjxQTFeYIvvShMY14I6QLMBbo9GAJCjGHwUp9rq3IzQADrJyfoGuv2kFM9BDQSCUv3EYr62tAC6IqKLRKnXWJOsOcsM9lueRPwh7X4jpavfP8RyhZLLochP2mo4J8tdz6EGdflEEXcY%2BfdXFQtiKBf02au%2FQN%2BrnYJq5GHT%2BmfIUQffVt2XPCN%2FHKpLKHzrUGxfbpudn20aU6jGoFHuUKTd9LfY70%2Bg3vw2tuuDg4oiH24jfml4RNeYd9KvHvxPTgsQFRThqMInw38IGOqUBL1YPdmUOK5wtpg0%2FTAp2WSgunqbkaOU%2BJ%2FgeM4bCJvsoRlQ8E0ok8gAsPPPaR81C4kj3yf%2FNQ81%2BA1prLD8IJr63qXxY76qtCn5e3429%2B5W91UGf20bXNQljgg3DsJU26GCUnBiIkv01VZ0Pv10wAJO5TAsR5zYSCnzWWHvyHvU4ZBIOpHz8wPrC3ZRostG6Z1RoNhiMldU%2FBG9C2U5Ku3cBDRs1&X-Amz-Signature=f9dffc7e50366fb8b7e4639b1a251892685f5b70a91525fdc69b846dfac57a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LI3WCY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCbn7U%2FL02a8jHEWD6D1ecFangwzt2qLBm9Vj4vOgMJmwIgVkZOnm6XEERdScKVM83iap1Zdsxqng%2FVIjv1ury7jSQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTZWk5xwqXf23EZ3yrcA2Ie0IkJ3agoSipGsTjL0uI2Rphm8i0dnfHH9ZYYX973wkgi5IJfCUdtbdQIEBRfbHp8iClNxRN5TAiV4%2BBFN14rESh7FIVWbrSAVfrUvUeayvW3efCwt%2Byh6tyQZVZ1X%2B4ad6HnhT%2BYCeLFfVwuwmm722io95d%2Fp6pk36S%2F%2B7CAnUt7txwDviiQ8IsDNrQamnZiIt9qg8D%2F8iFRWd5aPN4JD7Q9fQWhC0WpGQPsbw%2BvXrwXc0wQqTqK1gYTYu5lpJhNnUBNJh69yJkGWFWutHkYrGtC0DGC7hSTLdq8sY%2BRCsPUXFIjyWxHxKeukn%2BEhQGEIcS%2Fl9ybUP0IPgChaRbMtTpaUyNbtPUxePv5rNfHsbWd3f%2FfEjxQTFeYIvvShMY14I6QLMBbo9GAJCjGHwUp9rq3IzQADrJyfoGuv2kFM9BDQSCUv3EYr62tAC6IqKLRKnXWJOsOcsM9lueRPwh7X4jpavfP8RyhZLLochP2mo4J8tdz6EGdflEEXcY%2BfdXFQtiKBf02au%2FQN%2BrnYJq5GHT%2BmfIUQffVt2XPCN%2FHKpLKHzrUGxfbpudn20aU6jGoFHuUKTd9LfY70%2Bg3vw2tuuDg4oiH24jfml4RNeYd9KvHvxPTgsQFRThqMInw38IGOqUBL1YPdmUOK5wtpg0%2FTAp2WSgunqbkaOU%2BJ%2FgeM4bCJvsoRlQ8E0ok8gAsPPPaR81C4kj3yf%2FNQ81%2BA1prLD8IJr63qXxY76qtCn5e3429%2B5W91UGf20bXNQljgg3DsJU26GCUnBiIkv01VZ0Pv10wAJO5TAsR5zYSCnzWWHvyHvU4ZBIOpHz8wPrC3ZRostG6Z1RoNhiMldU%2FBG9C2U5Ku3cBDRs1&X-Amz-Signature=b0f863b66d6716251d5deac32cc50d69bee09de6e10f7495c0a82da0066324e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LI3WCY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCbn7U%2FL02a8jHEWD6D1ecFangwzt2qLBm9Vj4vOgMJmwIgVkZOnm6XEERdScKVM83iap1Zdsxqng%2FVIjv1ury7jSQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTZWk5xwqXf23EZ3yrcA2Ie0IkJ3agoSipGsTjL0uI2Rphm8i0dnfHH9ZYYX973wkgi5IJfCUdtbdQIEBRfbHp8iClNxRN5TAiV4%2BBFN14rESh7FIVWbrSAVfrUvUeayvW3efCwt%2Byh6tyQZVZ1X%2B4ad6HnhT%2BYCeLFfVwuwmm722io95d%2Fp6pk36S%2F%2B7CAnUt7txwDviiQ8IsDNrQamnZiIt9qg8D%2F8iFRWd5aPN4JD7Q9fQWhC0WpGQPsbw%2BvXrwXc0wQqTqK1gYTYu5lpJhNnUBNJh69yJkGWFWutHkYrGtC0DGC7hSTLdq8sY%2BRCsPUXFIjyWxHxKeukn%2BEhQGEIcS%2Fl9ybUP0IPgChaRbMtTpaUyNbtPUxePv5rNfHsbWd3f%2FfEjxQTFeYIvvShMY14I6QLMBbo9GAJCjGHwUp9rq3IzQADrJyfoGuv2kFM9BDQSCUv3EYr62tAC6IqKLRKnXWJOsOcsM9lueRPwh7X4jpavfP8RyhZLLochP2mo4J8tdz6EGdflEEXcY%2BfdXFQtiKBf02au%2FQN%2BrnYJq5GHT%2BmfIUQffVt2XPCN%2FHKpLKHzrUGxfbpudn20aU6jGoFHuUKTd9LfY70%2Bg3vw2tuuDg4oiH24jfml4RNeYd9KvHvxPTgsQFRThqMInw38IGOqUBL1YPdmUOK5wtpg0%2FTAp2WSgunqbkaOU%2BJ%2FgeM4bCJvsoRlQ8E0ok8gAsPPPaR81C4kj3yf%2FNQ81%2BA1prLD8IJr63qXxY76qtCn5e3429%2B5W91UGf20bXNQljgg3DsJU26GCUnBiIkv01VZ0Pv10wAJO5TAsR5zYSCnzWWHvyHvU4ZBIOpHz8wPrC3ZRostG6Z1RoNhiMldU%2FBG9C2U5Ku3cBDRs1&X-Amz-Signature=a396066ffe3bb0f852aa1002fbc1587356e8f787a8d9020693e14ba8f1c53202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
