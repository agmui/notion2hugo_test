---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QQM26I%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDQTvG8Nhhu1KElN8Wce0mDCL99OHA2plA%2FnOjkgF6QdAIhAPSnTM01EZd8w6tVVBSzE6V2BZ%2Bw9xGeaymZYpGQkhxEKv8DCFMQABoMNjM3NDIzMTgzODA1IgwHZion20%2Bzvgrxo1Iq3AMwz%2FbpnHRWpXELQEntn78cC%2FBW4T68Qh3D4L2OZu%2FPl3rEiUMJc2XroSOkMa%2FS1NjuxXj1YLFjUKktlEc%2Fs1r4YcOBw%2FjOmmuP%2BXTEfWHG5%2FdQr7r82Wj9PvkVuOfq8b49AEpLOfX4Obgvdt10yt%2Fziu8sgyE9o9KAWsi3%2FX884LNjDuadnqhx%2FxGGib6UXtzUbT%2FCw7D0jkhoPTOO1eYZJoRfGW07ImdCyM8EC765YZ7YPDXprdqxskOkVUgHpryL%2Bn0U%2BoeOz62pAuJfiX%2BCW5fQch7SFKxUi1E0y4XGhWBoMqhTNG08WFexzZLTa3RqSinpgqb7ogtrriuBCGFwTJh9a7%2FqMimH5Pw9u2tA7Mpqh%2FChbFYMwDI9%2BeBWQqdmGQwvl5AQq87c7C8nE5vFqzoZgWRT4Gb1nwx0R8U5tnvksLoIh71W6yNGeghsMvRr05SeUiKhCHmsFmrSZrr1KJDePc2XL5gJf74ptG1So7b4YoSBOUCBmcMeKgiBIWbm8mbr%2BMBW9E%2Fh%2FFEyJ2EkzZ5IF70rtCgBFuWlbru96rUgMRDdnOSBxdqKKhO2xQFm6b3OgC%2BtqQ0Ygj3iP2i3OHw6aKq6SWIsZO3%2BoaAdD2NQpXFEa6K6U4ljYDCh9ZDEBjqkATRcx97q6armGgNRsC3EvyurYTKq0Uuh57fHh6n%2Fai11sq4RCLVp%2FWp9jVWPT35hkqPhmNCdyGoSHCcn9s%2BYf%2FPAsw%2BHvNSAuDiVU0Ly1f4S14P7Jb1chUT6GQoq%2FpTWFoNX%2FyhIOoyazEto009Q5uWgVgfw7DmYkc%2FwF1VNntCTHF6kKPXsiHMP%2BQ9a%2BLzUg4GZQg9%2Fod4gVFYNxWwvKhja%2FZMu&X-Amz-Signature=47a562ed2ec92b4658929eb61dea4e2f6ad9c0bcbfa3fe9fc64a0218381c86fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QQM26I%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDQTvG8Nhhu1KElN8Wce0mDCL99OHA2plA%2FnOjkgF6QdAIhAPSnTM01EZd8w6tVVBSzE6V2BZ%2Bw9xGeaymZYpGQkhxEKv8DCFMQABoMNjM3NDIzMTgzODA1IgwHZion20%2Bzvgrxo1Iq3AMwz%2FbpnHRWpXELQEntn78cC%2FBW4T68Qh3D4L2OZu%2FPl3rEiUMJc2XroSOkMa%2FS1NjuxXj1YLFjUKktlEc%2Fs1r4YcOBw%2FjOmmuP%2BXTEfWHG5%2FdQr7r82Wj9PvkVuOfq8b49AEpLOfX4Obgvdt10yt%2Fziu8sgyE9o9KAWsi3%2FX884LNjDuadnqhx%2FxGGib6UXtzUbT%2FCw7D0jkhoPTOO1eYZJoRfGW07ImdCyM8EC765YZ7YPDXprdqxskOkVUgHpryL%2Bn0U%2BoeOz62pAuJfiX%2BCW5fQch7SFKxUi1E0y4XGhWBoMqhTNG08WFexzZLTa3RqSinpgqb7ogtrriuBCGFwTJh9a7%2FqMimH5Pw9u2tA7Mpqh%2FChbFYMwDI9%2BeBWQqdmGQwvl5AQq87c7C8nE5vFqzoZgWRT4Gb1nwx0R8U5tnvksLoIh71W6yNGeghsMvRr05SeUiKhCHmsFmrSZrr1KJDePc2XL5gJf74ptG1So7b4YoSBOUCBmcMeKgiBIWbm8mbr%2BMBW9E%2Fh%2FFEyJ2EkzZ5IF70rtCgBFuWlbru96rUgMRDdnOSBxdqKKhO2xQFm6b3OgC%2BtqQ0Ygj3iP2i3OHw6aKq6SWIsZO3%2BoaAdD2NQpXFEa6K6U4ljYDCh9ZDEBjqkATRcx97q6armGgNRsC3EvyurYTKq0Uuh57fHh6n%2Fai11sq4RCLVp%2FWp9jVWPT35hkqPhmNCdyGoSHCcn9s%2BYf%2FPAsw%2BHvNSAuDiVU0Ly1f4S14P7Jb1chUT6GQoq%2FpTWFoNX%2FyhIOoyazEto009Q5uWgVgfw7DmYkc%2FwF1VNntCTHF6kKPXsiHMP%2BQ9a%2BLzUg4GZQg9%2Fod4gVFYNxWwvKhja%2FZMu&X-Amz-Signature=88fc33090070957df3e4136ba2f6ac306d6b4873e6e1dfc7ecfccd98067e933c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QQM26I%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDQTvG8Nhhu1KElN8Wce0mDCL99OHA2plA%2FnOjkgF6QdAIhAPSnTM01EZd8w6tVVBSzE6V2BZ%2Bw9xGeaymZYpGQkhxEKv8DCFMQABoMNjM3NDIzMTgzODA1IgwHZion20%2Bzvgrxo1Iq3AMwz%2FbpnHRWpXELQEntn78cC%2FBW4T68Qh3D4L2OZu%2FPl3rEiUMJc2XroSOkMa%2FS1NjuxXj1YLFjUKktlEc%2Fs1r4YcOBw%2FjOmmuP%2BXTEfWHG5%2FdQr7r82Wj9PvkVuOfq8b49AEpLOfX4Obgvdt10yt%2Fziu8sgyE9o9KAWsi3%2FX884LNjDuadnqhx%2FxGGib6UXtzUbT%2FCw7D0jkhoPTOO1eYZJoRfGW07ImdCyM8EC765YZ7YPDXprdqxskOkVUgHpryL%2Bn0U%2BoeOz62pAuJfiX%2BCW5fQch7SFKxUi1E0y4XGhWBoMqhTNG08WFexzZLTa3RqSinpgqb7ogtrriuBCGFwTJh9a7%2FqMimH5Pw9u2tA7Mpqh%2FChbFYMwDI9%2BeBWQqdmGQwvl5AQq87c7C8nE5vFqzoZgWRT4Gb1nwx0R8U5tnvksLoIh71W6yNGeghsMvRr05SeUiKhCHmsFmrSZrr1KJDePc2XL5gJf74ptG1So7b4YoSBOUCBmcMeKgiBIWbm8mbr%2BMBW9E%2Fh%2FFEyJ2EkzZ5IF70rtCgBFuWlbru96rUgMRDdnOSBxdqKKhO2xQFm6b3OgC%2BtqQ0Ygj3iP2i3OHw6aKq6SWIsZO3%2BoaAdD2NQpXFEa6K6U4ljYDCh9ZDEBjqkATRcx97q6armGgNRsC3EvyurYTKq0Uuh57fHh6n%2Fai11sq4RCLVp%2FWp9jVWPT35hkqPhmNCdyGoSHCcn9s%2BYf%2FPAsw%2BHvNSAuDiVU0Ly1f4S14P7Jb1chUT6GQoq%2FpTWFoNX%2FyhIOoyazEto009Q5uWgVgfw7DmYkc%2FwF1VNntCTHF6kKPXsiHMP%2BQ9a%2BLzUg4GZQg9%2Fod4gVFYNxWwvKhja%2FZMu&X-Amz-Signature=b9fb6d981e8c7d05efd715d44d1e1f535c23d4f392be5e149d0fc3dd86e059af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QQM26I%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDQTvG8Nhhu1KElN8Wce0mDCL99OHA2plA%2FnOjkgF6QdAIhAPSnTM01EZd8w6tVVBSzE6V2BZ%2Bw9xGeaymZYpGQkhxEKv8DCFMQABoMNjM3NDIzMTgzODA1IgwHZion20%2Bzvgrxo1Iq3AMwz%2FbpnHRWpXELQEntn78cC%2FBW4T68Qh3D4L2OZu%2FPl3rEiUMJc2XroSOkMa%2FS1NjuxXj1YLFjUKktlEc%2Fs1r4YcOBw%2FjOmmuP%2BXTEfWHG5%2FdQr7r82Wj9PvkVuOfq8b49AEpLOfX4Obgvdt10yt%2Fziu8sgyE9o9KAWsi3%2FX884LNjDuadnqhx%2FxGGib6UXtzUbT%2FCw7D0jkhoPTOO1eYZJoRfGW07ImdCyM8EC765YZ7YPDXprdqxskOkVUgHpryL%2Bn0U%2BoeOz62pAuJfiX%2BCW5fQch7SFKxUi1E0y4XGhWBoMqhTNG08WFexzZLTa3RqSinpgqb7ogtrriuBCGFwTJh9a7%2FqMimH5Pw9u2tA7Mpqh%2FChbFYMwDI9%2BeBWQqdmGQwvl5AQq87c7C8nE5vFqzoZgWRT4Gb1nwx0R8U5tnvksLoIh71W6yNGeghsMvRr05SeUiKhCHmsFmrSZrr1KJDePc2XL5gJf74ptG1So7b4YoSBOUCBmcMeKgiBIWbm8mbr%2BMBW9E%2Fh%2FFEyJ2EkzZ5IF70rtCgBFuWlbru96rUgMRDdnOSBxdqKKhO2xQFm6b3OgC%2BtqQ0Ygj3iP2i3OHw6aKq6SWIsZO3%2BoaAdD2NQpXFEa6K6U4ljYDCh9ZDEBjqkATRcx97q6armGgNRsC3EvyurYTKq0Uuh57fHh6n%2Fai11sq4RCLVp%2FWp9jVWPT35hkqPhmNCdyGoSHCcn9s%2BYf%2FPAsw%2BHvNSAuDiVU0Ly1f4S14P7Jb1chUT6GQoq%2FpTWFoNX%2FyhIOoyazEto009Q5uWgVgfw7DmYkc%2FwF1VNntCTHF6kKPXsiHMP%2BQ9a%2BLzUg4GZQg9%2Fod4gVFYNxWwvKhja%2FZMu&X-Amz-Signature=597659d3eca2ab0bdd5e5c0cf6ae415242e66f49684b4dfa6907674b57e86bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QQM26I%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDQTvG8Nhhu1KElN8Wce0mDCL99OHA2plA%2FnOjkgF6QdAIhAPSnTM01EZd8w6tVVBSzE6V2BZ%2Bw9xGeaymZYpGQkhxEKv8DCFMQABoMNjM3NDIzMTgzODA1IgwHZion20%2Bzvgrxo1Iq3AMwz%2FbpnHRWpXELQEntn78cC%2FBW4T68Qh3D4L2OZu%2FPl3rEiUMJc2XroSOkMa%2FS1NjuxXj1YLFjUKktlEc%2Fs1r4YcOBw%2FjOmmuP%2BXTEfWHG5%2FdQr7r82Wj9PvkVuOfq8b49AEpLOfX4Obgvdt10yt%2Fziu8sgyE9o9KAWsi3%2FX884LNjDuadnqhx%2FxGGib6UXtzUbT%2FCw7D0jkhoPTOO1eYZJoRfGW07ImdCyM8EC765YZ7YPDXprdqxskOkVUgHpryL%2Bn0U%2BoeOz62pAuJfiX%2BCW5fQch7SFKxUi1E0y4XGhWBoMqhTNG08WFexzZLTa3RqSinpgqb7ogtrriuBCGFwTJh9a7%2FqMimH5Pw9u2tA7Mpqh%2FChbFYMwDI9%2BeBWQqdmGQwvl5AQq87c7C8nE5vFqzoZgWRT4Gb1nwx0R8U5tnvksLoIh71W6yNGeghsMvRr05SeUiKhCHmsFmrSZrr1KJDePc2XL5gJf74ptG1So7b4YoSBOUCBmcMeKgiBIWbm8mbr%2BMBW9E%2Fh%2FFEyJ2EkzZ5IF70rtCgBFuWlbru96rUgMRDdnOSBxdqKKhO2xQFm6b3OgC%2BtqQ0Ygj3iP2i3OHw6aKq6SWIsZO3%2BoaAdD2NQpXFEa6K6U4ljYDCh9ZDEBjqkATRcx97q6armGgNRsC3EvyurYTKq0Uuh57fHh6n%2Fai11sq4RCLVp%2FWp9jVWPT35hkqPhmNCdyGoSHCcn9s%2BYf%2FPAsw%2BHvNSAuDiVU0Ly1f4S14P7Jb1chUT6GQoq%2FpTWFoNX%2FyhIOoyazEto009Q5uWgVgfw7DmYkc%2FwF1VNntCTHF6kKPXsiHMP%2BQ9a%2BLzUg4GZQg9%2Fod4gVFYNxWwvKhja%2FZMu&X-Amz-Signature=5a030f7cd6792b5c17dbc321b1264c81a51531c5080446524a2f98cedd9739a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QQM26I%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDQTvG8Nhhu1KElN8Wce0mDCL99OHA2plA%2FnOjkgF6QdAIhAPSnTM01EZd8w6tVVBSzE6V2BZ%2Bw9xGeaymZYpGQkhxEKv8DCFMQABoMNjM3NDIzMTgzODA1IgwHZion20%2Bzvgrxo1Iq3AMwz%2FbpnHRWpXELQEntn78cC%2FBW4T68Qh3D4L2OZu%2FPl3rEiUMJc2XroSOkMa%2FS1NjuxXj1YLFjUKktlEc%2Fs1r4YcOBw%2FjOmmuP%2BXTEfWHG5%2FdQr7r82Wj9PvkVuOfq8b49AEpLOfX4Obgvdt10yt%2Fziu8sgyE9o9KAWsi3%2FX884LNjDuadnqhx%2FxGGib6UXtzUbT%2FCw7D0jkhoPTOO1eYZJoRfGW07ImdCyM8EC765YZ7YPDXprdqxskOkVUgHpryL%2Bn0U%2BoeOz62pAuJfiX%2BCW5fQch7SFKxUi1E0y4XGhWBoMqhTNG08WFexzZLTa3RqSinpgqb7ogtrriuBCGFwTJh9a7%2FqMimH5Pw9u2tA7Mpqh%2FChbFYMwDI9%2BeBWQqdmGQwvl5AQq87c7C8nE5vFqzoZgWRT4Gb1nwx0R8U5tnvksLoIh71W6yNGeghsMvRr05SeUiKhCHmsFmrSZrr1KJDePc2XL5gJf74ptG1So7b4YoSBOUCBmcMeKgiBIWbm8mbr%2BMBW9E%2Fh%2FFEyJ2EkzZ5IF70rtCgBFuWlbru96rUgMRDdnOSBxdqKKhO2xQFm6b3OgC%2BtqQ0Ygj3iP2i3OHw6aKq6SWIsZO3%2BoaAdD2NQpXFEa6K6U4ljYDCh9ZDEBjqkATRcx97q6armGgNRsC3EvyurYTKq0Uuh57fHh6n%2Fai11sq4RCLVp%2FWp9jVWPT35hkqPhmNCdyGoSHCcn9s%2BYf%2FPAsw%2BHvNSAuDiVU0Ly1f4S14P7Jb1chUT6GQoq%2FpTWFoNX%2FyhIOoyazEto009Q5uWgVgfw7DmYkc%2FwF1VNntCTHF6kKPXsiHMP%2BQ9a%2BLzUg4GZQg9%2Fod4gVFYNxWwvKhja%2FZMu&X-Amz-Signature=8f3dc837ec34377b063490cda5b5f4ea57056071dd3e367a1cf387aaaf08f3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QQM26I%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDQTvG8Nhhu1KElN8Wce0mDCL99OHA2plA%2FnOjkgF6QdAIhAPSnTM01EZd8w6tVVBSzE6V2BZ%2Bw9xGeaymZYpGQkhxEKv8DCFMQABoMNjM3NDIzMTgzODA1IgwHZion20%2Bzvgrxo1Iq3AMwz%2FbpnHRWpXELQEntn78cC%2FBW4T68Qh3D4L2OZu%2FPl3rEiUMJc2XroSOkMa%2FS1NjuxXj1YLFjUKktlEc%2Fs1r4YcOBw%2FjOmmuP%2BXTEfWHG5%2FdQr7r82Wj9PvkVuOfq8b49AEpLOfX4Obgvdt10yt%2Fziu8sgyE9o9KAWsi3%2FX884LNjDuadnqhx%2FxGGib6UXtzUbT%2FCw7D0jkhoPTOO1eYZJoRfGW07ImdCyM8EC765YZ7YPDXprdqxskOkVUgHpryL%2Bn0U%2BoeOz62pAuJfiX%2BCW5fQch7SFKxUi1E0y4XGhWBoMqhTNG08WFexzZLTa3RqSinpgqb7ogtrriuBCGFwTJh9a7%2FqMimH5Pw9u2tA7Mpqh%2FChbFYMwDI9%2BeBWQqdmGQwvl5AQq87c7C8nE5vFqzoZgWRT4Gb1nwx0R8U5tnvksLoIh71W6yNGeghsMvRr05SeUiKhCHmsFmrSZrr1KJDePc2XL5gJf74ptG1So7b4YoSBOUCBmcMeKgiBIWbm8mbr%2BMBW9E%2Fh%2FFEyJ2EkzZ5IF70rtCgBFuWlbru96rUgMRDdnOSBxdqKKhO2xQFm6b3OgC%2BtqQ0Ygj3iP2i3OHw6aKq6SWIsZO3%2BoaAdD2NQpXFEa6K6U4ljYDCh9ZDEBjqkATRcx97q6armGgNRsC3EvyurYTKq0Uuh57fHh6n%2Fai11sq4RCLVp%2FWp9jVWPT35hkqPhmNCdyGoSHCcn9s%2BYf%2FPAsw%2BHvNSAuDiVU0Ly1f4S14P7Jb1chUT6GQoq%2FpTWFoNX%2FyhIOoyazEto009Q5uWgVgfw7DmYkc%2FwF1VNntCTHF6kKPXsiHMP%2BQ9a%2BLzUg4GZQg9%2Fod4gVFYNxWwvKhja%2FZMu&X-Amz-Signature=e763a7a4313ae44263346e2968798ae9d233ca726317abdbe19c170908425ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
