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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UOXJOK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDL6rRhqunOrXWVUlx23QV7xtf7sNOfs0XWERAOFzTuowIhAOuf%2FZz%2BSdxsURp4Z9RuEjqNdMzpNf0ya0%2F%2FX0c%2BPPj%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BQ%2BAf8vJEtHRF74Uq3ANvMtXMOIDSqHRPczFi4lVLxAprq%2BRW%2FaxE0QQtqqwGzjBpZWLXcBXG0pRjdLfP9y9QoSnBrbF8n%2BF%2B6GG3FANcgPG06zHR7dJjSAl2lmXLERLHY%2F96vcGZ5tC7SODe%2FhBeE%2BQ8h60m9jBxnlIe1yS%2FrzJzLAB0UKMsCVSz0hqqUHSt6KYdSR7gSgfn5JdpkQK3%2Bueaa5bOKPKzc%2BEF6DaOkJPs5mb6aRXCMgRei5Xj9rZulOKnsGkwcSekxsog2QDMVycnFXomw7TJesiO%2BK3FUWgcrGUNXIxjOzMsS5PYOEOnCtu1JCymuPeKGN5GtCzHMCd7MzcrJZBRwThYC1Z9yqyTwztnVsV%2FNL%2F%2FqgK7QcP3x0WSJykh4oRDpIbqzI5dZgWBVXLFUFPO4UllJ1f6g9ZSyt1wGZNL7Fr1fr1NfXHax2N8cuq7B2MRrCUFmGyEv4%2FCf5GGuuTroppJpuS5RZQ1Aw0SUU%2FPlUDnivhSm6LxyoWwQzDe%2BAMoTAi979XAcqwClq9trzEGKmJFKb2gZSvgDoUNRg%2B6zm0I4mhucgGld%2BRNFL5AVKdvElSMZ1aw1SsFU%2FZIrJyAkk4MAdba%2BZCwa3VrZgEykQn0lL8JWjNSQZNKHyXi5UmNnTC5p7%2FBBjqkAdpK6nIULRCmxYlkDS3SQx%2FhBfia2K%2FcfS4zWyKlAL1k0cHxyKdKaVL6kMrRItyBkClykfb4s7Z3ps23k9R1rfRX%2FIvygnHLe1515sdUbZNAoOZTALiyOzgi2VHOdptj8rhXYUD%2FAGjJsUk6Q6NZEGliwIFjBqqlbmFUerWjsIeL%2BKAh7lE0UJG1rVZlsZ3kdSFZR8b7C4Xqo2BXHdYxOQm9CUyr&X-Amz-Signature=089847329fb5dc88d23a209ee5a2a753bb4160aa4f3e31c38c178ae452f06b43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UOXJOK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDL6rRhqunOrXWVUlx23QV7xtf7sNOfs0XWERAOFzTuowIhAOuf%2FZz%2BSdxsURp4Z9RuEjqNdMzpNf0ya0%2F%2FX0c%2BPPj%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BQ%2BAf8vJEtHRF74Uq3ANvMtXMOIDSqHRPczFi4lVLxAprq%2BRW%2FaxE0QQtqqwGzjBpZWLXcBXG0pRjdLfP9y9QoSnBrbF8n%2BF%2B6GG3FANcgPG06zHR7dJjSAl2lmXLERLHY%2F96vcGZ5tC7SODe%2FhBeE%2BQ8h60m9jBxnlIe1yS%2FrzJzLAB0UKMsCVSz0hqqUHSt6KYdSR7gSgfn5JdpkQK3%2Bueaa5bOKPKzc%2BEF6DaOkJPs5mb6aRXCMgRei5Xj9rZulOKnsGkwcSekxsog2QDMVycnFXomw7TJesiO%2BK3FUWgcrGUNXIxjOzMsS5PYOEOnCtu1JCymuPeKGN5GtCzHMCd7MzcrJZBRwThYC1Z9yqyTwztnVsV%2FNL%2F%2FqgK7QcP3x0WSJykh4oRDpIbqzI5dZgWBVXLFUFPO4UllJ1f6g9ZSyt1wGZNL7Fr1fr1NfXHax2N8cuq7B2MRrCUFmGyEv4%2FCf5GGuuTroppJpuS5RZQ1Aw0SUU%2FPlUDnivhSm6LxyoWwQzDe%2BAMoTAi979XAcqwClq9trzEGKmJFKb2gZSvgDoUNRg%2B6zm0I4mhucgGld%2BRNFL5AVKdvElSMZ1aw1SsFU%2FZIrJyAkk4MAdba%2BZCwa3VrZgEykQn0lL8JWjNSQZNKHyXi5UmNnTC5p7%2FBBjqkAdpK6nIULRCmxYlkDS3SQx%2FhBfia2K%2FcfS4zWyKlAL1k0cHxyKdKaVL6kMrRItyBkClykfb4s7Z3ps23k9R1rfRX%2FIvygnHLe1515sdUbZNAoOZTALiyOzgi2VHOdptj8rhXYUD%2FAGjJsUk6Q6NZEGliwIFjBqqlbmFUerWjsIeL%2BKAh7lE0UJG1rVZlsZ3kdSFZR8b7C4Xqo2BXHdYxOQm9CUyr&X-Amz-Signature=7da3d6684410cc570d90fb2b8c6d34cadbb3bcc7df068a113c45c15a1d648c35&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UOXJOK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDL6rRhqunOrXWVUlx23QV7xtf7sNOfs0XWERAOFzTuowIhAOuf%2FZz%2BSdxsURp4Z9RuEjqNdMzpNf0ya0%2F%2FX0c%2BPPj%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BQ%2BAf8vJEtHRF74Uq3ANvMtXMOIDSqHRPczFi4lVLxAprq%2BRW%2FaxE0QQtqqwGzjBpZWLXcBXG0pRjdLfP9y9QoSnBrbF8n%2BF%2B6GG3FANcgPG06zHR7dJjSAl2lmXLERLHY%2F96vcGZ5tC7SODe%2FhBeE%2BQ8h60m9jBxnlIe1yS%2FrzJzLAB0UKMsCVSz0hqqUHSt6KYdSR7gSgfn5JdpkQK3%2Bueaa5bOKPKzc%2BEF6DaOkJPs5mb6aRXCMgRei5Xj9rZulOKnsGkwcSekxsog2QDMVycnFXomw7TJesiO%2BK3FUWgcrGUNXIxjOzMsS5PYOEOnCtu1JCymuPeKGN5GtCzHMCd7MzcrJZBRwThYC1Z9yqyTwztnVsV%2FNL%2F%2FqgK7QcP3x0WSJykh4oRDpIbqzI5dZgWBVXLFUFPO4UllJ1f6g9ZSyt1wGZNL7Fr1fr1NfXHax2N8cuq7B2MRrCUFmGyEv4%2FCf5GGuuTroppJpuS5RZQ1Aw0SUU%2FPlUDnivhSm6LxyoWwQzDe%2BAMoTAi979XAcqwClq9trzEGKmJFKb2gZSvgDoUNRg%2B6zm0I4mhucgGld%2BRNFL5AVKdvElSMZ1aw1SsFU%2FZIrJyAkk4MAdba%2BZCwa3VrZgEykQn0lL8JWjNSQZNKHyXi5UmNnTC5p7%2FBBjqkAdpK6nIULRCmxYlkDS3SQx%2FhBfia2K%2FcfS4zWyKlAL1k0cHxyKdKaVL6kMrRItyBkClykfb4s7Z3ps23k9R1rfRX%2FIvygnHLe1515sdUbZNAoOZTALiyOzgi2VHOdptj8rhXYUD%2FAGjJsUk6Q6NZEGliwIFjBqqlbmFUerWjsIeL%2BKAh7lE0UJG1rVZlsZ3kdSFZR8b7C4Xqo2BXHdYxOQm9CUyr&X-Amz-Signature=ca02aacd7f4d801d09b2d6a31f81662dbb6eca269d5d6adccc7623ff98dae8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UOXJOK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDL6rRhqunOrXWVUlx23QV7xtf7sNOfs0XWERAOFzTuowIhAOuf%2FZz%2BSdxsURp4Z9RuEjqNdMzpNf0ya0%2F%2FX0c%2BPPj%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BQ%2BAf8vJEtHRF74Uq3ANvMtXMOIDSqHRPczFi4lVLxAprq%2BRW%2FaxE0QQtqqwGzjBpZWLXcBXG0pRjdLfP9y9QoSnBrbF8n%2BF%2B6GG3FANcgPG06zHR7dJjSAl2lmXLERLHY%2F96vcGZ5tC7SODe%2FhBeE%2BQ8h60m9jBxnlIe1yS%2FrzJzLAB0UKMsCVSz0hqqUHSt6KYdSR7gSgfn5JdpkQK3%2Bueaa5bOKPKzc%2BEF6DaOkJPs5mb6aRXCMgRei5Xj9rZulOKnsGkwcSekxsog2QDMVycnFXomw7TJesiO%2BK3FUWgcrGUNXIxjOzMsS5PYOEOnCtu1JCymuPeKGN5GtCzHMCd7MzcrJZBRwThYC1Z9yqyTwztnVsV%2FNL%2F%2FqgK7QcP3x0WSJykh4oRDpIbqzI5dZgWBVXLFUFPO4UllJ1f6g9ZSyt1wGZNL7Fr1fr1NfXHax2N8cuq7B2MRrCUFmGyEv4%2FCf5GGuuTroppJpuS5RZQ1Aw0SUU%2FPlUDnivhSm6LxyoWwQzDe%2BAMoTAi979XAcqwClq9trzEGKmJFKb2gZSvgDoUNRg%2B6zm0I4mhucgGld%2BRNFL5AVKdvElSMZ1aw1SsFU%2FZIrJyAkk4MAdba%2BZCwa3VrZgEykQn0lL8JWjNSQZNKHyXi5UmNnTC5p7%2FBBjqkAdpK6nIULRCmxYlkDS3SQx%2FhBfia2K%2FcfS4zWyKlAL1k0cHxyKdKaVL6kMrRItyBkClykfb4s7Z3ps23k9R1rfRX%2FIvygnHLe1515sdUbZNAoOZTALiyOzgi2VHOdptj8rhXYUD%2FAGjJsUk6Q6NZEGliwIFjBqqlbmFUerWjsIeL%2BKAh7lE0UJG1rVZlsZ3kdSFZR8b7C4Xqo2BXHdYxOQm9CUyr&X-Amz-Signature=810dbc00453893617084f6212dbdac682414c4004a23d99baf29f46e8ce091de&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UOXJOK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDL6rRhqunOrXWVUlx23QV7xtf7sNOfs0XWERAOFzTuowIhAOuf%2FZz%2BSdxsURp4Z9RuEjqNdMzpNf0ya0%2F%2FX0c%2BPPj%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BQ%2BAf8vJEtHRF74Uq3ANvMtXMOIDSqHRPczFi4lVLxAprq%2BRW%2FaxE0QQtqqwGzjBpZWLXcBXG0pRjdLfP9y9QoSnBrbF8n%2BF%2B6GG3FANcgPG06zHR7dJjSAl2lmXLERLHY%2F96vcGZ5tC7SODe%2FhBeE%2BQ8h60m9jBxnlIe1yS%2FrzJzLAB0UKMsCVSz0hqqUHSt6KYdSR7gSgfn5JdpkQK3%2Bueaa5bOKPKzc%2BEF6DaOkJPs5mb6aRXCMgRei5Xj9rZulOKnsGkwcSekxsog2QDMVycnFXomw7TJesiO%2BK3FUWgcrGUNXIxjOzMsS5PYOEOnCtu1JCymuPeKGN5GtCzHMCd7MzcrJZBRwThYC1Z9yqyTwztnVsV%2FNL%2F%2FqgK7QcP3x0WSJykh4oRDpIbqzI5dZgWBVXLFUFPO4UllJ1f6g9ZSyt1wGZNL7Fr1fr1NfXHax2N8cuq7B2MRrCUFmGyEv4%2FCf5GGuuTroppJpuS5RZQ1Aw0SUU%2FPlUDnivhSm6LxyoWwQzDe%2BAMoTAi979XAcqwClq9trzEGKmJFKb2gZSvgDoUNRg%2B6zm0I4mhucgGld%2BRNFL5AVKdvElSMZ1aw1SsFU%2FZIrJyAkk4MAdba%2BZCwa3VrZgEykQn0lL8JWjNSQZNKHyXi5UmNnTC5p7%2FBBjqkAdpK6nIULRCmxYlkDS3SQx%2FhBfia2K%2FcfS4zWyKlAL1k0cHxyKdKaVL6kMrRItyBkClykfb4s7Z3ps23k9R1rfRX%2FIvygnHLe1515sdUbZNAoOZTALiyOzgi2VHOdptj8rhXYUD%2FAGjJsUk6Q6NZEGliwIFjBqqlbmFUerWjsIeL%2BKAh7lE0UJG1rVZlsZ3kdSFZR8b7C4Xqo2BXHdYxOQm9CUyr&X-Amz-Signature=86b07e572a632bae5a083e5750aecdc2049bb20b4feaa42f2c18d43bb784871f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UOXJOK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDL6rRhqunOrXWVUlx23QV7xtf7sNOfs0XWERAOFzTuowIhAOuf%2FZz%2BSdxsURp4Z9RuEjqNdMzpNf0ya0%2F%2FX0c%2BPPj%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BQ%2BAf8vJEtHRF74Uq3ANvMtXMOIDSqHRPczFi4lVLxAprq%2BRW%2FaxE0QQtqqwGzjBpZWLXcBXG0pRjdLfP9y9QoSnBrbF8n%2BF%2B6GG3FANcgPG06zHR7dJjSAl2lmXLERLHY%2F96vcGZ5tC7SODe%2FhBeE%2BQ8h60m9jBxnlIe1yS%2FrzJzLAB0UKMsCVSz0hqqUHSt6KYdSR7gSgfn5JdpkQK3%2Bueaa5bOKPKzc%2BEF6DaOkJPs5mb6aRXCMgRei5Xj9rZulOKnsGkwcSekxsog2QDMVycnFXomw7TJesiO%2BK3FUWgcrGUNXIxjOzMsS5PYOEOnCtu1JCymuPeKGN5GtCzHMCd7MzcrJZBRwThYC1Z9yqyTwztnVsV%2FNL%2F%2FqgK7QcP3x0WSJykh4oRDpIbqzI5dZgWBVXLFUFPO4UllJ1f6g9ZSyt1wGZNL7Fr1fr1NfXHax2N8cuq7B2MRrCUFmGyEv4%2FCf5GGuuTroppJpuS5RZQ1Aw0SUU%2FPlUDnivhSm6LxyoWwQzDe%2BAMoTAi979XAcqwClq9trzEGKmJFKb2gZSvgDoUNRg%2B6zm0I4mhucgGld%2BRNFL5AVKdvElSMZ1aw1SsFU%2FZIrJyAkk4MAdba%2BZCwa3VrZgEykQn0lL8JWjNSQZNKHyXi5UmNnTC5p7%2FBBjqkAdpK6nIULRCmxYlkDS3SQx%2FhBfia2K%2FcfS4zWyKlAL1k0cHxyKdKaVL6kMrRItyBkClykfb4s7Z3ps23k9R1rfRX%2FIvygnHLe1515sdUbZNAoOZTALiyOzgi2VHOdptj8rhXYUD%2FAGjJsUk6Q6NZEGliwIFjBqqlbmFUerWjsIeL%2BKAh7lE0UJG1rVZlsZ3kdSFZR8b7C4Xqo2BXHdYxOQm9CUyr&X-Amz-Signature=064c701e149eebb7e145003374e9c81c766d532e6a9f75236e11187eb72b45fe&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UOXJOK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDL6rRhqunOrXWVUlx23QV7xtf7sNOfs0XWERAOFzTuowIhAOuf%2FZz%2BSdxsURp4Z9RuEjqNdMzpNf0ya0%2F%2FX0c%2BPPj%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BQ%2BAf8vJEtHRF74Uq3ANvMtXMOIDSqHRPczFi4lVLxAprq%2BRW%2FaxE0QQtqqwGzjBpZWLXcBXG0pRjdLfP9y9QoSnBrbF8n%2BF%2B6GG3FANcgPG06zHR7dJjSAl2lmXLERLHY%2F96vcGZ5tC7SODe%2FhBeE%2BQ8h60m9jBxnlIe1yS%2FrzJzLAB0UKMsCVSz0hqqUHSt6KYdSR7gSgfn5JdpkQK3%2Bueaa5bOKPKzc%2BEF6DaOkJPs5mb6aRXCMgRei5Xj9rZulOKnsGkwcSekxsog2QDMVycnFXomw7TJesiO%2BK3FUWgcrGUNXIxjOzMsS5PYOEOnCtu1JCymuPeKGN5GtCzHMCd7MzcrJZBRwThYC1Z9yqyTwztnVsV%2FNL%2F%2FqgK7QcP3x0WSJykh4oRDpIbqzI5dZgWBVXLFUFPO4UllJ1f6g9ZSyt1wGZNL7Fr1fr1NfXHax2N8cuq7B2MRrCUFmGyEv4%2FCf5GGuuTroppJpuS5RZQ1Aw0SUU%2FPlUDnivhSm6LxyoWwQzDe%2BAMoTAi979XAcqwClq9trzEGKmJFKb2gZSvgDoUNRg%2B6zm0I4mhucgGld%2BRNFL5AVKdvElSMZ1aw1SsFU%2FZIrJyAkk4MAdba%2BZCwa3VrZgEykQn0lL8JWjNSQZNKHyXi5UmNnTC5p7%2FBBjqkAdpK6nIULRCmxYlkDS3SQx%2FhBfia2K%2FcfS4zWyKlAL1k0cHxyKdKaVL6kMrRItyBkClykfb4s7Z3ps23k9R1rfRX%2FIvygnHLe1515sdUbZNAoOZTALiyOzgi2VHOdptj8rhXYUD%2FAGjJsUk6Q6NZEGliwIFjBqqlbmFUerWjsIeL%2BKAh7lE0UJG1rVZlsZ3kdSFZR8b7C4Xqo2BXHdYxOQm9CUyr&X-Amz-Signature=047f5ad57f6ff9aed15468e80f45ed75d3e828c607f375e1994dbed3e56eff60&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
