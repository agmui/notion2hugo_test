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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWWACQX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCymsrP6xCpegZTjAsnkJDEksnfozVJwCloahWKpGNSjwIhALOLBjrkW%2Ftu005swDSrTdsUHyFPG74OeU%2BPiok5xMqEKv8DCBUQABoMNjM3NDIzMTgzODA1Igx98i5DW%2BNq1kvyS44q3APYFwsaRQKdAlPVxA1YUlhbDZM1j7mRgn2751blr1Q6EaxxK9jmKRqR1IOO0%2FSA%2B0AB1d70etNm8kPq4ldcsBAl60L1M2ZfYNB%2BJW6bkyoy6K7%2FbByCsqlHjAGglVa6wQqYehOnLFu2Oqwdp4dSG10TqupJyseeujobCfzGHnVXjF8%2B7ur6RKSzRBv6CFZmv84QsTl%2B7EOfvS1numwZOY2rrkUE2ztDyV75mWLUZCZ7%2FYrsmeofj%2BbtS68uXqS%2FzvTEd88UAXTtYh%2FHgt3zOvN2pL1yYKQtW8ZxbiGSAeUVetnZQTyQ0Qb41shgicgBqAn7n%2FUJ%2BQGiq44P8cKilQr2eC6%2BxylfNyyjMm97oeSYqG1buCIehCTvL0zh0BlYIXXmCqCpzKcjdeBFRpF01EKSi3LZLuKUhHuU5ZBQvtfnb8wVCgaGFPKsZoNvVCNIa44GA%2Bils%2FPNFNeBW6Mnnwx%2BGH0oV1L4k8OmgFhtuUxLcAZKI2tkIQehH6X3ddJEe4n5XnRBH5fmjpiU7WQVXi95fv%2FvZQJxEsf6sgawGj1WANpGdgaMt8nybJnr5%2FVfCoohVx404JKsE9i%2FllYP5wmlG9m89%2F2uOQELkugiuRu%2FrRQoTfKSuBKOuTOSOjDDqbDCBjqkAf5QnZhJueAaHwqPQeI8RkB51lsTQmIcPcHkpxExQYDASuV8Ac%2FikidWQHc6%2BfhmR80%2FFghnnpXT49a16q%2FmxcSZIHiqKFHzMSG%2B5YgcuXspjOdYlaHmhSxC3AmHv3Q0rWNJhMl6TcHDuTx26J2vghG3cuF2rtJhalMvtoduXWmEyScb1HcactwO%2Bje38%2FX6MoVL5IOE5gecYIcpCewuz9Lqycbx&X-Amz-Signature=5ebe062d1cf0ddbf1a95ceb6be00b6465c7f9cd34948992c96302a44c6390d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWWACQX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCymsrP6xCpegZTjAsnkJDEksnfozVJwCloahWKpGNSjwIhALOLBjrkW%2Ftu005swDSrTdsUHyFPG74OeU%2BPiok5xMqEKv8DCBUQABoMNjM3NDIzMTgzODA1Igx98i5DW%2BNq1kvyS44q3APYFwsaRQKdAlPVxA1YUlhbDZM1j7mRgn2751blr1Q6EaxxK9jmKRqR1IOO0%2FSA%2B0AB1d70etNm8kPq4ldcsBAl60L1M2ZfYNB%2BJW6bkyoy6K7%2FbByCsqlHjAGglVa6wQqYehOnLFu2Oqwdp4dSG10TqupJyseeujobCfzGHnVXjF8%2B7ur6RKSzRBv6CFZmv84QsTl%2B7EOfvS1numwZOY2rrkUE2ztDyV75mWLUZCZ7%2FYrsmeofj%2BbtS68uXqS%2FzvTEd88UAXTtYh%2FHgt3zOvN2pL1yYKQtW8ZxbiGSAeUVetnZQTyQ0Qb41shgicgBqAn7n%2FUJ%2BQGiq44P8cKilQr2eC6%2BxylfNyyjMm97oeSYqG1buCIehCTvL0zh0BlYIXXmCqCpzKcjdeBFRpF01EKSi3LZLuKUhHuU5ZBQvtfnb8wVCgaGFPKsZoNvVCNIa44GA%2Bils%2FPNFNeBW6Mnnwx%2BGH0oV1L4k8OmgFhtuUxLcAZKI2tkIQehH6X3ddJEe4n5XnRBH5fmjpiU7WQVXi95fv%2FvZQJxEsf6sgawGj1WANpGdgaMt8nybJnr5%2FVfCoohVx404JKsE9i%2FllYP5wmlG9m89%2F2uOQELkugiuRu%2FrRQoTfKSuBKOuTOSOjDDqbDCBjqkAf5QnZhJueAaHwqPQeI8RkB51lsTQmIcPcHkpxExQYDASuV8Ac%2FikidWQHc6%2BfhmR80%2FFghnnpXT49a16q%2FmxcSZIHiqKFHzMSG%2B5YgcuXspjOdYlaHmhSxC3AmHv3Q0rWNJhMl6TcHDuTx26J2vghG3cuF2rtJhalMvtoduXWmEyScb1HcactwO%2Bje38%2FX6MoVL5IOE5gecYIcpCewuz9Lqycbx&X-Amz-Signature=c4af311e664c0e565cdf71279592f9b223684f2a549556893b0a213d3c601aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWWACQX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCymsrP6xCpegZTjAsnkJDEksnfozVJwCloahWKpGNSjwIhALOLBjrkW%2Ftu005swDSrTdsUHyFPG74OeU%2BPiok5xMqEKv8DCBUQABoMNjM3NDIzMTgzODA1Igx98i5DW%2BNq1kvyS44q3APYFwsaRQKdAlPVxA1YUlhbDZM1j7mRgn2751blr1Q6EaxxK9jmKRqR1IOO0%2FSA%2B0AB1d70etNm8kPq4ldcsBAl60L1M2ZfYNB%2BJW6bkyoy6K7%2FbByCsqlHjAGglVa6wQqYehOnLFu2Oqwdp4dSG10TqupJyseeujobCfzGHnVXjF8%2B7ur6RKSzRBv6CFZmv84QsTl%2B7EOfvS1numwZOY2rrkUE2ztDyV75mWLUZCZ7%2FYrsmeofj%2BbtS68uXqS%2FzvTEd88UAXTtYh%2FHgt3zOvN2pL1yYKQtW8ZxbiGSAeUVetnZQTyQ0Qb41shgicgBqAn7n%2FUJ%2BQGiq44P8cKilQr2eC6%2BxylfNyyjMm97oeSYqG1buCIehCTvL0zh0BlYIXXmCqCpzKcjdeBFRpF01EKSi3LZLuKUhHuU5ZBQvtfnb8wVCgaGFPKsZoNvVCNIa44GA%2Bils%2FPNFNeBW6Mnnwx%2BGH0oV1L4k8OmgFhtuUxLcAZKI2tkIQehH6X3ddJEe4n5XnRBH5fmjpiU7WQVXi95fv%2FvZQJxEsf6sgawGj1WANpGdgaMt8nybJnr5%2FVfCoohVx404JKsE9i%2FllYP5wmlG9m89%2F2uOQELkugiuRu%2FrRQoTfKSuBKOuTOSOjDDqbDCBjqkAf5QnZhJueAaHwqPQeI8RkB51lsTQmIcPcHkpxExQYDASuV8Ac%2FikidWQHc6%2BfhmR80%2FFghnnpXT49a16q%2FmxcSZIHiqKFHzMSG%2B5YgcuXspjOdYlaHmhSxC3AmHv3Q0rWNJhMl6TcHDuTx26J2vghG3cuF2rtJhalMvtoduXWmEyScb1HcactwO%2Bje38%2FX6MoVL5IOE5gecYIcpCewuz9Lqycbx&X-Amz-Signature=6b4eb5c9c25eaf3a12d7f1a4bebc860460755f654fe3564f6a8c1d593a745a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWWACQX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCymsrP6xCpegZTjAsnkJDEksnfozVJwCloahWKpGNSjwIhALOLBjrkW%2Ftu005swDSrTdsUHyFPG74OeU%2BPiok5xMqEKv8DCBUQABoMNjM3NDIzMTgzODA1Igx98i5DW%2BNq1kvyS44q3APYFwsaRQKdAlPVxA1YUlhbDZM1j7mRgn2751blr1Q6EaxxK9jmKRqR1IOO0%2FSA%2B0AB1d70etNm8kPq4ldcsBAl60L1M2ZfYNB%2BJW6bkyoy6K7%2FbByCsqlHjAGglVa6wQqYehOnLFu2Oqwdp4dSG10TqupJyseeujobCfzGHnVXjF8%2B7ur6RKSzRBv6CFZmv84QsTl%2B7EOfvS1numwZOY2rrkUE2ztDyV75mWLUZCZ7%2FYrsmeofj%2BbtS68uXqS%2FzvTEd88UAXTtYh%2FHgt3zOvN2pL1yYKQtW8ZxbiGSAeUVetnZQTyQ0Qb41shgicgBqAn7n%2FUJ%2BQGiq44P8cKilQr2eC6%2BxylfNyyjMm97oeSYqG1buCIehCTvL0zh0BlYIXXmCqCpzKcjdeBFRpF01EKSi3LZLuKUhHuU5ZBQvtfnb8wVCgaGFPKsZoNvVCNIa44GA%2Bils%2FPNFNeBW6Mnnwx%2BGH0oV1L4k8OmgFhtuUxLcAZKI2tkIQehH6X3ddJEe4n5XnRBH5fmjpiU7WQVXi95fv%2FvZQJxEsf6sgawGj1WANpGdgaMt8nybJnr5%2FVfCoohVx404JKsE9i%2FllYP5wmlG9m89%2F2uOQELkugiuRu%2FrRQoTfKSuBKOuTOSOjDDqbDCBjqkAf5QnZhJueAaHwqPQeI8RkB51lsTQmIcPcHkpxExQYDASuV8Ac%2FikidWQHc6%2BfhmR80%2FFghnnpXT49a16q%2FmxcSZIHiqKFHzMSG%2B5YgcuXspjOdYlaHmhSxC3AmHv3Q0rWNJhMl6TcHDuTx26J2vghG3cuF2rtJhalMvtoduXWmEyScb1HcactwO%2Bje38%2FX6MoVL5IOE5gecYIcpCewuz9Lqycbx&X-Amz-Signature=44f21527d7557ef58689b69285997faa72eacc955194984aee516d2555da83ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWWACQX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCymsrP6xCpegZTjAsnkJDEksnfozVJwCloahWKpGNSjwIhALOLBjrkW%2Ftu005swDSrTdsUHyFPG74OeU%2BPiok5xMqEKv8DCBUQABoMNjM3NDIzMTgzODA1Igx98i5DW%2BNq1kvyS44q3APYFwsaRQKdAlPVxA1YUlhbDZM1j7mRgn2751blr1Q6EaxxK9jmKRqR1IOO0%2FSA%2B0AB1d70etNm8kPq4ldcsBAl60L1M2ZfYNB%2BJW6bkyoy6K7%2FbByCsqlHjAGglVa6wQqYehOnLFu2Oqwdp4dSG10TqupJyseeujobCfzGHnVXjF8%2B7ur6RKSzRBv6CFZmv84QsTl%2B7EOfvS1numwZOY2rrkUE2ztDyV75mWLUZCZ7%2FYrsmeofj%2BbtS68uXqS%2FzvTEd88UAXTtYh%2FHgt3zOvN2pL1yYKQtW8ZxbiGSAeUVetnZQTyQ0Qb41shgicgBqAn7n%2FUJ%2BQGiq44P8cKilQr2eC6%2BxylfNyyjMm97oeSYqG1buCIehCTvL0zh0BlYIXXmCqCpzKcjdeBFRpF01EKSi3LZLuKUhHuU5ZBQvtfnb8wVCgaGFPKsZoNvVCNIa44GA%2Bils%2FPNFNeBW6Mnnwx%2BGH0oV1L4k8OmgFhtuUxLcAZKI2tkIQehH6X3ddJEe4n5XnRBH5fmjpiU7WQVXi95fv%2FvZQJxEsf6sgawGj1WANpGdgaMt8nybJnr5%2FVfCoohVx404JKsE9i%2FllYP5wmlG9m89%2F2uOQELkugiuRu%2FrRQoTfKSuBKOuTOSOjDDqbDCBjqkAf5QnZhJueAaHwqPQeI8RkB51lsTQmIcPcHkpxExQYDASuV8Ac%2FikidWQHc6%2BfhmR80%2FFghnnpXT49a16q%2FmxcSZIHiqKFHzMSG%2B5YgcuXspjOdYlaHmhSxC3AmHv3Q0rWNJhMl6TcHDuTx26J2vghG3cuF2rtJhalMvtoduXWmEyScb1HcactwO%2Bje38%2FX6MoVL5IOE5gecYIcpCewuz9Lqycbx&X-Amz-Signature=8070401d2fc65530136cf2ec7bc67e918a43300568b7213bda89394eac09c154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWWACQX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCymsrP6xCpegZTjAsnkJDEksnfozVJwCloahWKpGNSjwIhALOLBjrkW%2Ftu005swDSrTdsUHyFPG74OeU%2BPiok5xMqEKv8DCBUQABoMNjM3NDIzMTgzODA1Igx98i5DW%2BNq1kvyS44q3APYFwsaRQKdAlPVxA1YUlhbDZM1j7mRgn2751blr1Q6EaxxK9jmKRqR1IOO0%2FSA%2B0AB1d70etNm8kPq4ldcsBAl60L1M2ZfYNB%2BJW6bkyoy6K7%2FbByCsqlHjAGglVa6wQqYehOnLFu2Oqwdp4dSG10TqupJyseeujobCfzGHnVXjF8%2B7ur6RKSzRBv6CFZmv84QsTl%2B7EOfvS1numwZOY2rrkUE2ztDyV75mWLUZCZ7%2FYrsmeofj%2BbtS68uXqS%2FzvTEd88UAXTtYh%2FHgt3zOvN2pL1yYKQtW8ZxbiGSAeUVetnZQTyQ0Qb41shgicgBqAn7n%2FUJ%2BQGiq44P8cKilQr2eC6%2BxylfNyyjMm97oeSYqG1buCIehCTvL0zh0BlYIXXmCqCpzKcjdeBFRpF01EKSi3LZLuKUhHuU5ZBQvtfnb8wVCgaGFPKsZoNvVCNIa44GA%2Bils%2FPNFNeBW6Mnnwx%2BGH0oV1L4k8OmgFhtuUxLcAZKI2tkIQehH6X3ddJEe4n5XnRBH5fmjpiU7WQVXi95fv%2FvZQJxEsf6sgawGj1WANpGdgaMt8nybJnr5%2FVfCoohVx404JKsE9i%2FllYP5wmlG9m89%2F2uOQELkugiuRu%2FrRQoTfKSuBKOuTOSOjDDqbDCBjqkAf5QnZhJueAaHwqPQeI8RkB51lsTQmIcPcHkpxExQYDASuV8Ac%2FikidWQHc6%2BfhmR80%2FFghnnpXT49a16q%2FmxcSZIHiqKFHzMSG%2B5YgcuXspjOdYlaHmhSxC3AmHv3Q0rWNJhMl6TcHDuTx26J2vghG3cuF2rtJhalMvtoduXWmEyScb1HcactwO%2Bje38%2FX6MoVL5IOE5gecYIcpCewuz9Lqycbx&X-Amz-Signature=dd8fb36fffef6cb3acd72c8b48f331a91fe125b300951460fbdaf8a21d7bc519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWWACQX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCymsrP6xCpegZTjAsnkJDEksnfozVJwCloahWKpGNSjwIhALOLBjrkW%2Ftu005swDSrTdsUHyFPG74OeU%2BPiok5xMqEKv8DCBUQABoMNjM3NDIzMTgzODA1Igx98i5DW%2BNq1kvyS44q3APYFwsaRQKdAlPVxA1YUlhbDZM1j7mRgn2751blr1Q6EaxxK9jmKRqR1IOO0%2FSA%2B0AB1d70etNm8kPq4ldcsBAl60L1M2ZfYNB%2BJW6bkyoy6K7%2FbByCsqlHjAGglVa6wQqYehOnLFu2Oqwdp4dSG10TqupJyseeujobCfzGHnVXjF8%2B7ur6RKSzRBv6CFZmv84QsTl%2B7EOfvS1numwZOY2rrkUE2ztDyV75mWLUZCZ7%2FYrsmeofj%2BbtS68uXqS%2FzvTEd88UAXTtYh%2FHgt3zOvN2pL1yYKQtW8ZxbiGSAeUVetnZQTyQ0Qb41shgicgBqAn7n%2FUJ%2BQGiq44P8cKilQr2eC6%2BxylfNyyjMm97oeSYqG1buCIehCTvL0zh0BlYIXXmCqCpzKcjdeBFRpF01EKSi3LZLuKUhHuU5ZBQvtfnb8wVCgaGFPKsZoNvVCNIa44GA%2Bils%2FPNFNeBW6Mnnwx%2BGH0oV1L4k8OmgFhtuUxLcAZKI2tkIQehH6X3ddJEe4n5XnRBH5fmjpiU7WQVXi95fv%2FvZQJxEsf6sgawGj1WANpGdgaMt8nybJnr5%2FVfCoohVx404JKsE9i%2FllYP5wmlG9m89%2F2uOQELkugiuRu%2FrRQoTfKSuBKOuTOSOjDDqbDCBjqkAf5QnZhJueAaHwqPQeI8RkB51lsTQmIcPcHkpxExQYDASuV8Ac%2FikidWQHc6%2BfhmR80%2FFghnnpXT49a16q%2FmxcSZIHiqKFHzMSG%2B5YgcuXspjOdYlaHmhSxC3AmHv3Q0rWNJhMl6TcHDuTx26J2vghG3cuF2rtJhalMvtoduXWmEyScb1HcactwO%2Bje38%2FX6MoVL5IOE5gecYIcpCewuz9Lqycbx&X-Amz-Signature=84eae7d6bc5990334c323ddd1036f369327ca47de167aa67bedee6acd6771531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
