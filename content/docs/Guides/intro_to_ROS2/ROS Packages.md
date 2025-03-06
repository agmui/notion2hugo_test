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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655N7K3S%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVdZKbyAlt2R5RJ8KdskPvSZyFQ%2B3EkSdBqMoluHoBQAIhALrpHHFleX4bmpp5U4RUF2nesJQdNG%2FlqibCYTLxdnn8Kv8DCC4QABoMNjM3NDIzMTgzODA1IgzRTNC6%2Bz7ON7dYQJwq3ANUgmkMATc91r8aB1C264n3%2F%2F5nnh4qel8dwrRtpkADwhYOh4EZmwd%2Bw1vLzo3HlipaGIEkcTHKp%2F1JiNquS9scyVhncAhXMp6KaYWb1CnBYX4j7L03ZXJ8JroOERU2y9w3u2WSfEDymS1Gcxqqw370t1QVadca2d06EW1WtNzc7%2Bs5oa3wdz60VHxIc84%2FB%2BHwOWnP%2FhOykSvcKaFX0fRfttEVS3ZTo%2F4f%2FS6h1xGUkyqMapNhkqd8Dn67kz%2FrpNVN3fnje5ELRauWSBuSwPRtf069VV8NcuGisjGuF4FNC0CoTczqA%2F8SQsX%2FnbKdXMLq%2F6pUsMzP1nT85PbBeImnrbscg%2BlfdOvYRmrJ89fkqk7YbE98dHDV0n5m2SmA9Z2CL7Mq2W1sF7AhN7RaKs3Kw0gP4C3HWRNBstu%2BIhTLElZKMOTcU1MROiv9CccE8uGbHhs6puuKEyR5kl8O1xJVLrP5MdpGw2ML7cRvnAAENG51HR%2FFE8FNkkbGSxhvrJ8UapAfMmOYNQkXSlKrBV%2B6mriZ6ITMM1UvJt4JpfSoxbnkToY7jgYgpBmIlhNk9z5HaeMkyuX2UtqDOhDQKUZQxqu8XanOsetd9yr3qaKot2h0zx1utzNsFejl7jDVsKa%2BBjqkAcdDJkUbCCrJVkQYr7mIjdBBOqR5e2sW8qmjVRcmdfw01tfN7wp4waFI3RJAyYlc3MBuTplm%2BDhVYEddq7X6qHeh6YlixULb1t%2FmOAlcMOIYcSEvH22Z95brkQhcwlPHYpAddpVnBGDMZ0dLWU9RDjy4%2FAIQqVyMKtmpINh3OU4IG1be%2FGGo%2FmbQPDIpaliwhCBmRKJImTBc4KzAdFBEMMOwyVnU&X-Amz-Signature=c79c207d038e070a39e7bf4affa0d8d7d45ba31ab7bb8abcb6e9d72c8827f06b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655N7K3S%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVdZKbyAlt2R5RJ8KdskPvSZyFQ%2B3EkSdBqMoluHoBQAIhALrpHHFleX4bmpp5U4RUF2nesJQdNG%2FlqibCYTLxdnn8Kv8DCC4QABoMNjM3NDIzMTgzODA1IgzRTNC6%2Bz7ON7dYQJwq3ANUgmkMATc91r8aB1C264n3%2F%2F5nnh4qel8dwrRtpkADwhYOh4EZmwd%2Bw1vLzo3HlipaGIEkcTHKp%2F1JiNquS9scyVhncAhXMp6KaYWb1CnBYX4j7L03ZXJ8JroOERU2y9w3u2WSfEDymS1Gcxqqw370t1QVadca2d06EW1WtNzc7%2Bs5oa3wdz60VHxIc84%2FB%2BHwOWnP%2FhOykSvcKaFX0fRfttEVS3ZTo%2F4f%2FS6h1xGUkyqMapNhkqd8Dn67kz%2FrpNVN3fnje5ELRauWSBuSwPRtf069VV8NcuGisjGuF4FNC0CoTczqA%2F8SQsX%2FnbKdXMLq%2F6pUsMzP1nT85PbBeImnrbscg%2BlfdOvYRmrJ89fkqk7YbE98dHDV0n5m2SmA9Z2CL7Mq2W1sF7AhN7RaKs3Kw0gP4C3HWRNBstu%2BIhTLElZKMOTcU1MROiv9CccE8uGbHhs6puuKEyR5kl8O1xJVLrP5MdpGw2ML7cRvnAAENG51HR%2FFE8FNkkbGSxhvrJ8UapAfMmOYNQkXSlKrBV%2B6mriZ6ITMM1UvJt4JpfSoxbnkToY7jgYgpBmIlhNk9z5HaeMkyuX2UtqDOhDQKUZQxqu8XanOsetd9yr3qaKot2h0zx1utzNsFejl7jDVsKa%2BBjqkAcdDJkUbCCrJVkQYr7mIjdBBOqR5e2sW8qmjVRcmdfw01tfN7wp4waFI3RJAyYlc3MBuTplm%2BDhVYEddq7X6qHeh6YlixULb1t%2FmOAlcMOIYcSEvH22Z95brkQhcwlPHYpAddpVnBGDMZ0dLWU9RDjy4%2FAIQqVyMKtmpINh3OU4IG1be%2FGGo%2FmbQPDIpaliwhCBmRKJImTBc4KzAdFBEMMOwyVnU&X-Amz-Signature=9b5c0e398bb0d9e3282c7843854c04f22e38229336794a4c4d7b026f77b4c92e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655N7K3S%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVdZKbyAlt2R5RJ8KdskPvSZyFQ%2B3EkSdBqMoluHoBQAIhALrpHHFleX4bmpp5U4RUF2nesJQdNG%2FlqibCYTLxdnn8Kv8DCC4QABoMNjM3NDIzMTgzODA1IgzRTNC6%2Bz7ON7dYQJwq3ANUgmkMATc91r8aB1C264n3%2F%2F5nnh4qel8dwrRtpkADwhYOh4EZmwd%2Bw1vLzo3HlipaGIEkcTHKp%2F1JiNquS9scyVhncAhXMp6KaYWb1CnBYX4j7L03ZXJ8JroOERU2y9w3u2WSfEDymS1Gcxqqw370t1QVadca2d06EW1WtNzc7%2Bs5oa3wdz60VHxIc84%2FB%2BHwOWnP%2FhOykSvcKaFX0fRfttEVS3ZTo%2F4f%2FS6h1xGUkyqMapNhkqd8Dn67kz%2FrpNVN3fnje5ELRauWSBuSwPRtf069VV8NcuGisjGuF4FNC0CoTczqA%2F8SQsX%2FnbKdXMLq%2F6pUsMzP1nT85PbBeImnrbscg%2BlfdOvYRmrJ89fkqk7YbE98dHDV0n5m2SmA9Z2CL7Mq2W1sF7AhN7RaKs3Kw0gP4C3HWRNBstu%2BIhTLElZKMOTcU1MROiv9CccE8uGbHhs6puuKEyR5kl8O1xJVLrP5MdpGw2ML7cRvnAAENG51HR%2FFE8FNkkbGSxhvrJ8UapAfMmOYNQkXSlKrBV%2B6mriZ6ITMM1UvJt4JpfSoxbnkToY7jgYgpBmIlhNk9z5HaeMkyuX2UtqDOhDQKUZQxqu8XanOsetd9yr3qaKot2h0zx1utzNsFejl7jDVsKa%2BBjqkAcdDJkUbCCrJVkQYr7mIjdBBOqR5e2sW8qmjVRcmdfw01tfN7wp4waFI3RJAyYlc3MBuTplm%2BDhVYEddq7X6qHeh6YlixULb1t%2FmOAlcMOIYcSEvH22Z95brkQhcwlPHYpAddpVnBGDMZ0dLWU9RDjy4%2FAIQqVyMKtmpINh3OU4IG1be%2FGGo%2FmbQPDIpaliwhCBmRKJImTBc4KzAdFBEMMOwyVnU&X-Amz-Signature=5f0fd2d677476c30c0e9974f94fad110f5226af7aaf1e3d55cc83f81c8f9d9e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655N7K3S%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVdZKbyAlt2R5RJ8KdskPvSZyFQ%2B3EkSdBqMoluHoBQAIhALrpHHFleX4bmpp5U4RUF2nesJQdNG%2FlqibCYTLxdnn8Kv8DCC4QABoMNjM3NDIzMTgzODA1IgzRTNC6%2Bz7ON7dYQJwq3ANUgmkMATc91r8aB1C264n3%2F%2F5nnh4qel8dwrRtpkADwhYOh4EZmwd%2Bw1vLzo3HlipaGIEkcTHKp%2F1JiNquS9scyVhncAhXMp6KaYWb1CnBYX4j7L03ZXJ8JroOERU2y9w3u2WSfEDymS1Gcxqqw370t1QVadca2d06EW1WtNzc7%2Bs5oa3wdz60VHxIc84%2FB%2BHwOWnP%2FhOykSvcKaFX0fRfttEVS3ZTo%2F4f%2FS6h1xGUkyqMapNhkqd8Dn67kz%2FrpNVN3fnje5ELRauWSBuSwPRtf069VV8NcuGisjGuF4FNC0CoTczqA%2F8SQsX%2FnbKdXMLq%2F6pUsMzP1nT85PbBeImnrbscg%2BlfdOvYRmrJ89fkqk7YbE98dHDV0n5m2SmA9Z2CL7Mq2W1sF7AhN7RaKs3Kw0gP4C3HWRNBstu%2BIhTLElZKMOTcU1MROiv9CccE8uGbHhs6puuKEyR5kl8O1xJVLrP5MdpGw2ML7cRvnAAENG51HR%2FFE8FNkkbGSxhvrJ8UapAfMmOYNQkXSlKrBV%2B6mriZ6ITMM1UvJt4JpfSoxbnkToY7jgYgpBmIlhNk9z5HaeMkyuX2UtqDOhDQKUZQxqu8XanOsetd9yr3qaKot2h0zx1utzNsFejl7jDVsKa%2BBjqkAcdDJkUbCCrJVkQYr7mIjdBBOqR5e2sW8qmjVRcmdfw01tfN7wp4waFI3RJAyYlc3MBuTplm%2BDhVYEddq7X6qHeh6YlixULb1t%2FmOAlcMOIYcSEvH22Z95brkQhcwlPHYpAddpVnBGDMZ0dLWU9RDjy4%2FAIQqVyMKtmpINh3OU4IG1be%2FGGo%2FmbQPDIpaliwhCBmRKJImTBc4KzAdFBEMMOwyVnU&X-Amz-Signature=2c1855f8e5150b392f4120b6d3a5e59fd3653a39dd58f7a29c0e0c14c19fe470&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655N7K3S%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVdZKbyAlt2R5RJ8KdskPvSZyFQ%2B3EkSdBqMoluHoBQAIhALrpHHFleX4bmpp5U4RUF2nesJQdNG%2FlqibCYTLxdnn8Kv8DCC4QABoMNjM3NDIzMTgzODA1IgzRTNC6%2Bz7ON7dYQJwq3ANUgmkMATc91r8aB1C264n3%2F%2F5nnh4qel8dwrRtpkADwhYOh4EZmwd%2Bw1vLzo3HlipaGIEkcTHKp%2F1JiNquS9scyVhncAhXMp6KaYWb1CnBYX4j7L03ZXJ8JroOERU2y9w3u2WSfEDymS1Gcxqqw370t1QVadca2d06EW1WtNzc7%2Bs5oa3wdz60VHxIc84%2FB%2BHwOWnP%2FhOykSvcKaFX0fRfttEVS3ZTo%2F4f%2FS6h1xGUkyqMapNhkqd8Dn67kz%2FrpNVN3fnje5ELRauWSBuSwPRtf069VV8NcuGisjGuF4FNC0CoTczqA%2F8SQsX%2FnbKdXMLq%2F6pUsMzP1nT85PbBeImnrbscg%2BlfdOvYRmrJ89fkqk7YbE98dHDV0n5m2SmA9Z2CL7Mq2W1sF7AhN7RaKs3Kw0gP4C3HWRNBstu%2BIhTLElZKMOTcU1MROiv9CccE8uGbHhs6puuKEyR5kl8O1xJVLrP5MdpGw2ML7cRvnAAENG51HR%2FFE8FNkkbGSxhvrJ8UapAfMmOYNQkXSlKrBV%2B6mriZ6ITMM1UvJt4JpfSoxbnkToY7jgYgpBmIlhNk9z5HaeMkyuX2UtqDOhDQKUZQxqu8XanOsetd9yr3qaKot2h0zx1utzNsFejl7jDVsKa%2BBjqkAcdDJkUbCCrJVkQYr7mIjdBBOqR5e2sW8qmjVRcmdfw01tfN7wp4waFI3RJAyYlc3MBuTplm%2BDhVYEddq7X6qHeh6YlixULb1t%2FmOAlcMOIYcSEvH22Z95brkQhcwlPHYpAddpVnBGDMZ0dLWU9RDjy4%2FAIQqVyMKtmpINh3OU4IG1be%2FGGo%2FmbQPDIpaliwhCBmRKJImTBc4KzAdFBEMMOwyVnU&X-Amz-Signature=b092010691911a727729323b3c349d99270da7003946c146587c8f62959b315b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655N7K3S%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVdZKbyAlt2R5RJ8KdskPvSZyFQ%2B3EkSdBqMoluHoBQAIhALrpHHFleX4bmpp5U4RUF2nesJQdNG%2FlqibCYTLxdnn8Kv8DCC4QABoMNjM3NDIzMTgzODA1IgzRTNC6%2Bz7ON7dYQJwq3ANUgmkMATc91r8aB1C264n3%2F%2F5nnh4qel8dwrRtpkADwhYOh4EZmwd%2Bw1vLzo3HlipaGIEkcTHKp%2F1JiNquS9scyVhncAhXMp6KaYWb1CnBYX4j7L03ZXJ8JroOERU2y9w3u2WSfEDymS1Gcxqqw370t1QVadca2d06EW1WtNzc7%2Bs5oa3wdz60VHxIc84%2FB%2BHwOWnP%2FhOykSvcKaFX0fRfttEVS3ZTo%2F4f%2FS6h1xGUkyqMapNhkqd8Dn67kz%2FrpNVN3fnje5ELRauWSBuSwPRtf069VV8NcuGisjGuF4FNC0CoTczqA%2F8SQsX%2FnbKdXMLq%2F6pUsMzP1nT85PbBeImnrbscg%2BlfdOvYRmrJ89fkqk7YbE98dHDV0n5m2SmA9Z2CL7Mq2W1sF7AhN7RaKs3Kw0gP4C3HWRNBstu%2BIhTLElZKMOTcU1MROiv9CccE8uGbHhs6puuKEyR5kl8O1xJVLrP5MdpGw2ML7cRvnAAENG51HR%2FFE8FNkkbGSxhvrJ8UapAfMmOYNQkXSlKrBV%2B6mriZ6ITMM1UvJt4JpfSoxbnkToY7jgYgpBmIlhNk9z5HaeMkyuX2UtqDOhDQKUZQxqu8XanOsetd9yr3qaKot2h0zx1utzNsFejl7jDVsKa%2BBjqkAcdDJkUbCCrJVkQYr7mIjdBBOqR5e2sW8qmjVRcmdfw01tfN7wp4waFI3RJAyYlc3MBuTplm%2BDhVYEddq7X6qHeh6YlixULb1t%2FmOAlcMOIYcSEvH22Z95brkQhcwlPHYpAddpVnBGDMZ0dLWU9RDjy4%2FAIQqVyMKtmpINh3OU4IG1be%2FGGo%2FmbQPDIpaliwhCBmRKJImTBc4KzAdFBEMMOwyVnU&X-Amz-Signature=a62b134e0c3c3c782ff991d4f97b155ead70587da511dd07976b2d129e4b0eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655N7K3S%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVdZKbyAlt2R5RJ8KdskPvSZyFQ%2B3EkSdBqMoluHoBQAIhALrpHHFleX4bmpp5U4RUF2nesJQdNG%2FlqibCYTLxdnn8Kv8DCC4QABoMNjM3NDIzMTgzODA1IgzRTNC6%2Bz7ON7dYQJwq3ANUgmkMATc91r8aB1C264n3%2F%2F5nnh4qel8dwrRtpkADwhYOh4EZmwd%2Bw1vLzo3HlipaGIEkcTHKp%2F1JiNquS9scyVhncAhXMp6KaYWb1CnBYX4j7L03ZXJ8JroOERU2y9w3u2WSfEDymS1Gcxqqw370t1QVadca2d06EW1WtNzc7%2Bs5oa3wdz60VHxIc84%2FB%2BHwOWnP%2FhOykSvcKaFX0fRfttEVS3ZTo%2F4f%2FS6h1xGUkyqMapNhkqd8Dn67kz%2FrpNVN3fnje5ELRauWSBuSwPRtf069VV8NcuGisjGuF4FNC0CoTczqA%2F8SQsX%2FnbKdXMLq%2F6pUsMzP1nT85PbBeImnrbscg%2BlfdOvYRmrJ89fkqk7YbE98dHDV0n5m2SmA9Z2CL7Mq2W1sF7AhN7RaKs3Kw0gP4C3HWRNBstu%2BIhTLElZKMOTcU1MROiv9CccE8uGbHhs6puuKEyR5kl8O1xJVLrP5MdpGw2ML7cRvnAAENG51HR%2FFE8FNkkbGSxhvrJ8UapAfMmOYNQkXSlKrBV%2B6mriZ6ITMM1UvJt4JpfSoxbnkToY7jgYgpBmIlhNk9z5HaeMkyuX2UtqDOhDQKUZQxqu8XanOsetd9yr3qaKot2h0zx1utzNsFejl7jDVsKa%2BBjqkAcdDJkUbCCrJVkQYr7mIjdBBOqR5e2sW8qmjVRcmdfw01tfN7wp4waFI3RJAyYlc3MBuTplm%2BDhVYEddq7X6qHeh6YlixULb1t%2FmOAlcMOIYcSEvH22Z95brkQhcwlPHYpAddpVnBGDMZ0dLWU9RDjy4%2FAIQqVyMKtmpINh3OU4IG1be%2FGGo%2FmbQPDIpaliwhCBmRKJImTBc4KzAdFBEMMOwyVnU&X-Amz-Signature=17e92a56834e739cd2b03101815a091c35657ddf05f5eaa754d128350122ae4a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
