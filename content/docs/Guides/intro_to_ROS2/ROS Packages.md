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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ZWRTFW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauthuo09LaKZzMH%2F0fdBKjdKI9m1VATEGMVb7IF%2F6AIgXpPfTpTtzktE%2FyYo75wEkRu53P%2BwC9oDYGOB%2BCXuW5cq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMxkkuxhw%2FwtsedndyrcA5R16v8iA1RxFQeE6ZY%2FyKhGq1ZuHctLTUKaMk51he%2F9egksVU02adydrp5QnMJhFmwEdvE4klqaK51KJd1Bxiv%2Fcl6ArtQr2iRMbgbz851nJgJR3T%2FV1enZehyc26taCO0zCG6jvrDHCbikf8d6bfNUcrF8IWuz%2Fvo9oKEDLVcpvaAg%2BDV3LWLT%2BBCejvdUyeDaYYI8T8vAM8BxD8LBbUGJCkm5kt%2F4Atx8hmmk1Ba%2BiYHqB5A3n4bH6nMmF7M6SSBRgDMVzMtaDHhU8Cufj3stZ4OLnhxY80jjugHc4vCyLq6xzppij%2ByCzy0Ivcwt5GUqYetc%2FrS6Y18Y3rScjnaP5dXsqFyuSV4XLnG0eZzoLmkXCX1dnG1oYZ55NxXng1j0qsC2UzxoIxMiKf82cTceOHke4WcgFClmr%2FqsocrLoT8OqOzzofuaFTUMCedqnYkQVJ8aA2vLeWBxEPDV8FwqjigQReCSNQF6pp0KPAIEgCz6FwB%2FRiO6O8nzgG0J5Cd9ZRY42JrHrUKaJHJxomMz1TBAMeNxDuGX90rurEvmktoyYTyejNsBr%2BhjDsbEXEtQ%2Bf2FjY8UktJH2%2F2lCtrqdOn2qpR%2BKohh30A8W7Auc2CaePA4dBNPQdMYMKj6jsIGOqUBPAAv5agIgwnqmE4%2FwiP1nbW0kcM9yPcmLioQh3vEEtLEvqTtu%2BImAuvFiEdnbTKG7nAVRuZf7Sukm%2B0FXG7PMfyD%2FOZ%2FuptfThG8kl9xINydc9fBUXjp%2Fqn%2F2T46Lt2yV4pZH7U9TXiKh5V6rsDhbB6cGB7K86FZ2%2BHsljfVxmDoTyV0jP8TlCHVThu93ZxPABpH9r2RKuctG1LLrTj9x%2Fzf1Fsi&X-Amz-Signature=939982a3932cde2d5159f6715486fc633f6cac2ce236b026f1776b9990e5550f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ZWRTFW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauthuo09LaKZzMH%2F0fdBKjdKI9m1VATEGMVb7IF%2F6AIgXpPfTpTtzktE%2FyYo75wEkRu53P%2BwC9oDYGOB%2BCXuW5cq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMxkkuxhw%2FwtsedndyrcA5R16v8iA1RxFQeE6ZY%2FyKhGq1ZuHctLTUKaMk51he%2F9egksVU02adydrp5QnMJhFmwEdvE4klqaK51KJd1Bxiv%2Fcl6ArtQr2iRMbgbz851nJgJR3T%2FV1enZehyc26taCO0zCG6jvrDHCbikf8d6bfNUcrF8IWuz%2Fvo9oKEDLVcpvaAg%2BDV3LWLT%2BBCejvdUyeDaYYI8T8vAM8BxD8LBbUGJCkm5kt%2F4Atx8hmmk1Ba%2BiYHqB5A3n4bH6nMmF7M6SSBRgDMVzMtaDHhU8Cufj3stZ4OLnhxY80jjugHc4vCyLq6xzppij%2ByCzy0Ivcwt5GUqYetc%2FrS6Y18Y3rScjnaP5dXsqFyuSV4XLnG0eZzoLmkXCX1dnG1oYZ55NxXng1j0qsC2UzxoIxMiKf82cTceOHke4WcgFClmr%2FqsocrLoT8OqOzzofuaFTUMCedqnYkQVJ8aA2vLeWBxEPDV8FwqjigQReCSNQF6pp0KPAIEgCz6FwB%2FRiO6O8nzgG0J5Cd9ZRY42JrHrUKaJHJxomMz1TBAMeNxDuGX90rurEvmktoyYTyejNsBr%2BhjDsbEXEtQ%2Bf2FjY8UktJH2%2F2lCtrqdOn2qpR%2BKohh30A8W7Auc2CaePA4dBNPQdMYMKj6jsIGOqUBPAAv5agIgwnqmE4%2FwiP1nbW0kcM9yPcmLioQh3vEEtLEvqTtu%2BImAuvFiEdnbTKG7nAVRuZf7Sukm%2B0FXG7PMfyD%2FOZ%2FuptfThG8kl9xINydc9fBUXjp%2Fqn%2F2T46Lt2yV4pZH7U9TXiKh5V6rsDhbB6cGB7K86FZ2%2BHsljfVxmDoTyV0jP8TlCHVThu93ZxPABpH9r2RKuctG1LLrTj9x%2Fzf1Fsi&X-Amz-Signature=a88bf8220afeeca2175de9721363e4cb4b0f7c691d987c052407f0297d7bf8b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ZWRTFW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauthuo09LaKZzMH%2F0fdBKjdKI9m1VATEGMVb7IF%2F6AIgXpPfTpTtzktE%2FyYo75wEkRu53P%2BwC9oDYGOB%2BCXuW5cq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMxkkuxhw%2FwtsedndyrcA5R16v8iA1RxFQeE6ZY%2FyKhGq1ZuHctLTUKaMk51he%2F9egksVU02adydrp5QnMJhFmwEdvE4klqaK51KJd1Bxiv%2Fcl6ArtQr2iRMbgbz851nJgJR3T%2FV1enZehyc26taCO0zCG6jvrDHCbikf8d6bfNUcrF8IWuz%2Fvo9oKEDLVcpvaAg%2BDV3LWLT%2BBCejvdUyeDaYYI8T8vAM8BxD8LBbUGJCkm5kt%2F4Atx8hmmk1Ba%2BiYHqB5A3n4bH6nMmF7M6SSBRgDMVzMtaDHhU8Cufj3stZ4OLnhxY80jjugHc4vCyLq6xzppij%2ByCzy0Ivcwt5GUqYetc%2FrS6Y18Y3rScjnaP5dXsqFyuSV4XLnG0eZzoLmkXCX1dnG1oYZ55NxXng1j0qsC2UzxoIxMiKf82cTceOHke4WcgFClmr%2FqsocrLoT8OqOzzofuaFTUMCedqnYkQVJ8aA2vLeWBxEPDV8FwqjigQReCSNQF6pp0KPAIEgCz6FwB%2FRiO6O8nzgG0J5Cd9ZRY42JrHrUKaJHJxomMz1TBAMeNxDuGX90rurEvmktoyYTyejNsBr%2BhjDsbEXEtQ%2Bf2FjY8UktJH2%2F2lCtrqdOn2qpR%2BKohh30A8W7Auc2CaePA4dBNPQdMYMKj6jsIGOqUBPAAv5agIgwnqmE4%2FwiP1nbW0kcM9yPcmLioQh3vEEtLEvqTtu%2BImAuvFiEdnbTKG7nAVRuZf7Sukm%2B0FXG7PMfyD%2FOZ%2FuptfThG8kl9xINydc9fBUXjp%2Fqn%2F2T46Lt2yV4pZH7U9TXiKh5V6rsDhbB6cGB7K86FZ2%2BHsljfVxmDoTyV0jP8TlCHVThu93ZxPABpH9r2RKuctG1LLrTj9x%2Fzf1Fsi&X-Amz-Signature=11a37ffa6800841603d9dfc24fe461e163685595f74e7279a438039ee776a62f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ZWRTFW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauthuo09LaKZzMH%2F0fdBKjdKI9m1VATEGMVb7IF%2F6AIgXpPfTpTtzktE%2FyYo75wEkRu53P%2BwC9oDYGOB%2BCXuW5cq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMxkkuxhw%2FwtsedndyrcA5R16v8iA1RxFQeE6ZY%2FyKhGq1ZuHctLTUKaMk51he%2F9egksVU02adydrp5QnMJhFmwEdvE4klqaK51KJd1Bxiv%2Fcl6ArtQr2iRMbgbz851nJgJR3T%2FV1enZehyc26taCO0zCG6jvrDHCbikf8d6bfNUcrF8IWuz%2Fvo9oKEDLVcpvaAg%2BDV3LWLT%2BBCejvdUyeDaYYI8T8vAM8BxD8LBbUGJCkm5kt%2F4Atx8hmmk1Ba%2BiYHqB5A3n4bH6nMmF7M6SSBRgDMVzMtaDHhU8Cufj3stZ4OLnhxY80jjugHc4vCyLq6xzppij%2ByCzy0Ivcwt5GUqYetc%2FrS6Y18Y3rScjnaP5dXsqFyuSV4XLnG0eZzoLmkXCX1dnG1oYZ55NxXng1j0qsC2UzxoIxMiKf82cTceOHke4WcgFClmr%2FqsocrLoT8OqOzzofuaFTUMCedqnYkQVJ8aA2vLeWBxEPDV8FwqjigQReCSNQF6pp0KPAIEgCz6FwB%2FRiO6O8nzgG0J5Cd9ZRY42JrHrUKaJHJxomMz1TBAMeNxDuGX90rurEvmktoyYTyejNsBr%2BhjDsbEXEtQ%2Bf2FjY8UktJH2%2F2lCtrqdOn2qpR%2BKohh30A8W7Auc2CaePA4dBNPQdMYMKj6jsIGOqUBPAAv5agIgwnqmE4%2FwiP1nbW0kcM9yPcmLioQh3vEEtLEvqTtu%2BImAuvFiEdnbTKG7nAVRuZf7Sukm%2B0FXG7PMfyD%2FOZ%2FuptfThG8kl9xINydc9fBUXjp%2Fqn%2F2T46Lt2yV4pZH7U9TXiKh5V6rsDhbB6cGB7K86FZ2%2BHsljfVxmDoTyV0jP8TlCHVThu93ZxPABpH9r2RKuctG1LLrTj9x%2Fzf1Fsi&X-Amz-Signature=d62510a6bd92cfef08c5502b55aac123e45dfb04523c9924eaf15b4009faf136&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ZWRTFW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauthuo09LaKZzMH%2F0fdBKjdKI9m1VATEGMVb7IF%2F6AIgXpPfTpTtzktE%2FyYo75wEkRu53P%2BwC9oDYGOB%2BCXuW5cq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMxkkuxhw%2FwtsedndyrcA5R16v8iA1RxFQeE6ZY%2FyKhGq1ZuHctLTUKaMk51he%2F9egksVU02adydrp5QnMJhFmwEdvE4klqaK51KJd1Bxiv%2Fcl6ArtQr2iRMbgbz851nJgJR3T%2FV1enZehyc26taCO0zCG6jvrDHCbikf8d6bfNUcrF8IWuz%2Fvo9oKEDLVcpvaAg%2BDV3LWLT%2BBCejvdUyeDaYYI8T8vAM8BxD8LBbUGJCkm5kt%2F4Atx8hmmk1Ba%2BiYHqB5A3n4bH6nMmF7M6SSBRgDMVzMtaDHhU8Cufj3stZ4OLnhxY80jjugHc4vCyLq6xzppij%2ByCzy0Ivcwt5GUqYetc%2FrS6Y18Y3rScjnaP5dXsqFyuSV4XLnG0eZzoLmkXCX1dnG1oYZ55NxXng1j0qsC2UzxoIxMiKf82cTceOHke4WcgFClmr%2FqsocrLoT8OqOzzofuaFTUMCedqnYkQVJ8aA2vLeWBxEPDV8FwqjigQReCSNQF6pp0KPAIEgCz6FwB%2FRiO6O8nzgG0J5Cd9ZRY42JrHrUKaJHJxomMz1TBAMeNxDuGX90rurEvmktoyYTyejNsBr%2BhjDsbEXEtQ%2Bf2FjY8UktJH2%2F2lCtrqdOn2qpR%2BKohh30A8W7Auc2CaePA4dBNPQdMYMKj6jsIGOqUBPAAv5agIgwnqmE4%2FwiP1nbW0kcM9yPcmLioQh3vEEtLEvqTtu%2BImAuvFiEdnbTKG7nAVRuZf7Sukm%2B0FXG7PMfyD%2FOZ%2FuptfThG8kl9xINydc9fBUXjp%2Fqn%2F2T46Lt2yV4pZH7U9TXiKh5V6rsDhbB6cGB7K86FZ2%2BHsljfVxmDoTyV0jP8TlCHVThu93ZxPABpH9r2RKuctG1LLrTj9x%2Fzf1Fsi&X-Amz-Signature=654c1afcf37809492db8ec0342ae3297f977ba692243bf90c790a2ef5e7a9257&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ZWRTFW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauthuo09LaKZzMH%2F0fdBKjdKI9m1VATEGMVb7IF%2F6AIgXpPfTpTtzktE%2FyYo75wEkRu53P%2BwC9oDYGOB%2BCXuW5cq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMxkkuxhw%2FwtsedndyrcA5R16v8iA1RxFQeE6ZY%2FyKhGq1ZuHctLTUKaMk51he%2F9egksVU02adydrp5QnMJhFmwEdvE4klqaK51KJd1Bxiv%2Fcl6ArtQr2iRMbgbz851nJgJR3T%2FV1enZehyc26taCO0zCG6jvrDHCbikf8d6bfNUcrF8IWuz%2Fvo9oKEDLVcpvaAg%2BDV3LWLT%2BBCejvdUyeDaYYI8T8vAM8BxD8LBbUGJCkm5kt%2F4Atx8hmmk1Ba%2BiYHqB5A3n4bH6nMmF7M6SSBRgDMVzMtaDHhU8Cufj3stZ4OLnhxY80jjugHc4vCyLq6xzppij%2ByCzy0Ivcwt5GUqYetc%2FrS6Y18Y3rScjnaP5dXsqFyuSV4XLnG0eZzoLmkXCX1dnG1oYZ55NxXng1j0qsC2UzxoIxMiKf82cTceOHke4WcgFClmr%2FqsocrLoT8OqOzzofuaFTUMCedqnYkQVJ8aA2vLeWBxEPDV8FwqjigQReCSNQF6pp0KPAIEgCz6FwB%2FRiO6O8nzgG0J5Cd9ZRY42JrHrUKaJHJxomMz1TBAMeNxDuGX90rurEvmktoyYTyejNsBr%2BhjDsbEXEtQ%2Bf2FjY8UktJH2%2F2lCtrqdOn2qpR%2BKohh30A8W7Auc2CaePA4dBNPQdMYMKj6jsIGOqUBPAAv5agIgwnqmE4%2FwiP1nbW0kcM9yPcmLioQh3vEEtLEvqTtu%2BImAuvFiEdnbTKG7nAVRuZf7Sukm%2B0FXG7PMfyD%2FOZ%2FuptfThG8kl9xINydc9fBUXjp%2Fqn%2F2T46Lt2yV4pZH7U9TXiKh5V6rsDhbB6cGB7K86FZ2%2BHsljfVxmDoTyV0jP8TlCHVThu93ZxPABpH9r2RKuctG1LLrTj9x%2Fzf1Fsi&X-Amz-Signature=45a615fc4a49cba4adf6ab6402392d30b4b03f4be98baea53664cdc91b4c3ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ZWRTFW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauthuo09LaKZzMH%2F0fdBKjdKI9m1VATEGMVb7IF%2F6AIgXpPfTpTtzktE%2FyYo75wEkRu53P%2BwC9oDYGOB%2BCXuW5cq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMxkkuxhw%2FwtsedndyrcA5R16v8iA1RxFQeE6ZY%2FyKhGq1ZuHctLTUKaMk51he%2F9egksVU02adydrp5QnMJhFmwEdvE4klqaK51KJd1Bxiv%2Fcl6ArtQr2iRMbgbz851nJgJR3T%2FV1enZehyc26taCO0zCG6jvrDHCbikf8d6bfNUcrF8IWuz%2Fvo9oKEDLVcpvaAg%2BDV3LWLT%2BBCejvdUyeDaYYI8T8vAM8BxD8LBbUGJCkm5kt%2F4Atx8hmmk1Ba%2BiYHqB5A3n4bH6nMmF7M6SSBRgDMVzMtaDHhU8Cufj3stZ4OLnhxY80jjugHc4vCyLq6xzppij%2ByCzy0Ivcwt5GUqYetc%2FrS6Y18Y3rScjnaP5dXsqFyuSV4XLnG0eZzoLmkXCX1dnG1oYZ55NxXng1j0qsC2UzxoIxMiKf82cTceOHke4WcgFClmr%2FqsocrLoT8OqOzzofuaFTUMCedqnYkQVJ8aA2vLeWBxEPDV8FwqjigQReCSNQF6pp0KPAIEgCz6FwB%2FRiO6O8nzgG0J5Cd9ZRY42JrHrUKaJHJxomMz1TBAMeNxDuGX90rurEvmktoyYTyejNsBr%2BhjDsbEXEtQ%2Bf2FjY8UktJH2%2F2lCtrqdOn2qpR%2BKohh30A8W7Auc2CaePA4dBNPQdMYMKj6jsIGOqUBPAAv5agIgwnqmE4%2FwiP1nbW0kcM9yPcmLioQh3vEEtLEvqTtu%2BImAuvFiEdnbTKG7nAVRuZf7Sukm%2B0FXG7PMfyD%2FOZ%2FuptfThG8kl9xINydc9fBUXjp%2Fqn%2F2T46Lt2yV4pZH7U9TXiKh5V6rsDhbB6cGB7K86FZ2%2BHsljfVxmDoTyV0jP8TlCHVThu93ZxPABpH9r2RKuctG1LLrTj9x%2Fzf1Fsi&X-Amz-Signature=e2ed2b9aa7d634bf54ef8c4b7fc531bb4f60edbc84ae13abf3e31f92ba7414f8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
