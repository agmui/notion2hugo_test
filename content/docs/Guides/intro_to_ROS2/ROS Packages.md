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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGIJAK2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDevgVNBkvtYLfqTqkZn4229ZFaURIkm0fcxDlG5uZJKQIgEgrkRDwBDQZ4X5MFdmNdttibTXzC8dNxvLR6hq%2BEpR4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNHKI7zBe93z8dsi7CrcA0s38uxOzM3jHQHLzsgpSyBdFFxTT8ATBC%2BznbPSLS2b1T3LKeB8nykmBbaT2u2gi5Ez7Kk7k9rZ6YI9yyLTYXRz0Ts5jX7fEKYHrL9eJsx1rE1%2BVEKBuVKZQxWlwqFDOHQU0KqQie6he8rR%2BILpj%2FIQuGHNl%2FLbRegAjxrc9fXUYfdKZwYsCwNfYyOhnNHmfAshqQfC3%2FytSX9JfHJYpEl1SFXmixETiiTp7rzxoiqzrnke%2FVleeuWCe5Z5nA6CC2ARN2kpFUsRs07sPi%2FqLuUETJNI4belVGDPYZmRbxQxNKjDkZZswhFtgYfxzgRx1cmsarG2P4OpnN10zDcN25wpWCIEQade45Luu%2BED7gipkEBlxxcY6S1OFFRfeWENY6xlDXPGKA2IWdHcwKOh%2F9bAi9KOgRN0U6GSjB5iqqRfnNo1HhYjlahwNSXdgY6j898FG0hs46tyjzuQtop7IuqWQmjpep8L%2FHPuOlJm7gibTeaGt6YvnYc45p7LegdcS2zJQTSatme8i4YBEVfpSBHEP2GWbdJ9W67Vx%2BF%2FPUEbaEIemOcKSH2J9QkiIIRgszDKwB2ssDDmKRf6%2FZzEir%2FL%2BW1u4O%2F4edINgRt9dpaui96BYEVqDmDiJh%2BoMJP1zcEGOqUBeT8TbeXQKEgLrCgS06os3Mv6sIB0DxQbjNlH0WHYaw1rGt09ppaRZVrWBdknB69KioRgikcx9y67tOjxa07%2BA2PnDlGXLe%2Fkm0i4eBK8%2B0Eqcu%2F64nXQBjfUKn2ZW4o093Z12E7nsi4R75vxzOeOF%2FQ74zXqddUfz2yIjQXbZhk6btCcJci72io68p8H2fq1%2F4vCCSi3o6wclQIpbVOq2QoI4udP&X-Amz-Signature=a1dded43ec276dc6e5cdf8d83153a7d5915340ebb93914b8a12a25a473e81370&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGIJAK2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDevgVNBkvtYLfqTqkZn4229ZFaURIkm0fcxDlG5uZJKQIgEgrkRDwBDQZ4X5MFdmNdttibTXzC8dNxvLR6hq%2BEpR4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNHKI7zBe93z8dsi7CrcA0s38uxOzM3jHQHLzsgpSyBdFFxTT8ATBC%2BznbPSLS2b1T3LKeB8nykmBbaT2u2gi5Ez7Kk7k9rZ6YI9yyLTYXRz0Ts5jX7fEKYHrL9eJsx1rE1%2BVEKBuVKZQxWlwqFDOHQU0KqQie6he8rR%2BILpj%2FIQuGHNl%2FLbRegAjxrc9fXUYfdKZwYsCwNfYyOhnNHmfAshqQfC3%2FytSX9JfHJYpEl1SFXmixETiiTp7rzxoiqzrnke%2FVleeuWCe5Z5nA6CC2ARN2kpFUsRs07sPi%2FqLuUETJNI4belVGDPYZmRbxQxNKjDkZZswhFtgYfxzgRx1cmsarG2P4OpnN10zDcN25wpWCIEQade45Luu%2BED7gipkEBlxxcY6S1OFFRfeWENY6xlDXPGKA2IWdHcwKOh%2F9bAi9KOgRN0U6GSjB5iqqRfnNo1HhYjlahwNSXdgY6j898FG0hs46tyjzuQtop7IuqWQmjpep8L%2FHPuOlJm7gibTeaGt6YvnYc45p7LegdcS2zJQTSatme8i4YBEVfpSBHEP2GWbdJ9W67Vx%2BF%2FPUEbaEIemOcKSH2J9QkiIIRgszDKwB2ssDDmKRf6%2FZzEir%2FL%2BW1u4O%2F4edINgRt9dpaui96BYEVqDmDiJh%2BoMJP1zcEGOqUBeT8TbeXQKEgLrCgS06os3Mv6sIB0DxQbjNlH0WHYaw1rGt09ppaRZVrWBdknB69KioRgikcx9y67tOjxa07%2BA2PnDlGXLe%2Fkm0i4eBK8%2B0Eqcu%2F64nXQBjfUKn2ZW4o093Z12E7nsi4R75vxzOeOF%2FQ74zXqddUfz2yIjQXbZhk6btCcJci72io68p8H2fq1%2F4vCCSi3o6wclQIpbVOq2QoI4udP&X-Amz-Signature=22696b1a76cff8dc640aab2d362fd581509d6d06aee9759ae0da6e0fc29f23a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGIJAK2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDevgVNBkvtYLfqTqkZn4229ZFaURIkm0fcxDlG5uZJKQIgEgrkRDwBDQZ4X5MFdmNdttibTXzC8dNxvLR6hq%2BEpR4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNHKI7zBe93z8dsi7CrcA0s38uxOzM3jHQHLzsgpSyBdFFxTT8ATBC%2BznbPSLS2b1T3LKeB8nykmBbaT2u2gi5Ez7Kk7k9rZ6YI9yyLTYXRz0Ts5jX7fEKYHrL9eJsx1rE1%2BVEKBuVKZQxWlwqFDOHQU0KqQie6he8rR%2BILpj%2FIQuGHNl%2FLbRegAjxrc9fXUYfdKZwYsCwNfYyOhnNHmfAshqQfC3%2FytSX9JfHJYpEl1SFXmixETiiTp7rzxoiqzrnke%2FVleeuWCe5Z5nA6CC2ARN2kpFUsRs07sPi%2FqLuUETJNI4belVGDPYZmRbxQxNKjDkZZswhFtgYfxzgRx1cmsarG2P4OpnN10zDcN25wpWCIEQade45Luu%2BED7gipkEBlxxcY6S1OFFRfeWENY6xlDXPGKA2IWdHcwKOh%2F9bAi9KOgRN0U6GSjB5iqqRfnNo1HhYjlahwNSXdgY6j898FG0hs46tyjzuQtop7IuqWQmjpep8L%2FHPuOlJm7gibTeaGt6YvnYc45p7LegdcS2zJQTSatme8i4YBEVfpSBHEP2GWbdJ9W67Vx%2BF%2FPUEbaEIemOcKSH2J9QkiIIRgszDKwB2ssDDmKRf6%2FZzEir%2FL%2BW1u4O%2F4edINgRt9dpaui96BYEVqDmDiJh%2BoMJP1zcEGOqUBeT8TbeXQKEgLrCgS06os3Mv6sIB0DxQbjNlH0WHYaw1rGt09ppaRZVrWBdknB69KioRgikcx9y67tOjxa07%2BA2PnDlGXLe%2Fkm0i4eBK8%2B0Eqcu%2F64nXQBjfUKn2ZW4o093Z12E7nsi4R75vxzOeOF%2FQ74zXqddUfz2yIjQXbZhk6btCcJci72io68p8H2fq1%2F4vCCSi3o6wclQIpbVOq2QoI4udP&X-Amz-Signature=dd8cef9e0d92c3055a9f21feacbd7467bc802946c466577701c89a4392f1de9d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGIJAK2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDevgVNBkvtYLfqTqkZn4229ZFaURIkm0fcxDlG5uZJKQIgEgrkRDwBDQZ4X5MFdmNdttibTXzC8dNxvLR6hq%2BEpR4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNHKI7zBe93z8dsi7CrcA0s38uxOzM3jHQHLzsgpSyBdFFxTT8ATBC%2BznbPSLS2b1T3LKeB8nykmBbaT2u2gi5Ez7Kk7k9rZ6YI9yyLTYXRz0Ts5jX7fEKYHrL9eJsx1rE1%2BVEKBuVKZQxWlwqFDOHQU0KqQie6he8rR%2BILpj%2FIQuGHNl%2FLbRegAjxrc9fXUYfdKZwYsCwNfYyOhnNHmfAshqQfC3%2FytSX9JfHJYpEl1SFXmixETiiTp7rzxoiqzrnke%2FVleeuWCe5Z5nA6CC2ARN2kpFUsRs07sPi%2FqLuUETJNI4belVGDPYZmRbxQxNKjDkZZswhFtgYfxzgRx1cmsarG2P4OpnN10zDcN25wpWCIEQade45Luu%2BED7gipkEBlxxcY6S1OFFRfeWENY6xlDXPGKA2IWdHcwKOh%2F9bAi9KOgRN0U6GSjB5iqqRfnNo1HhYjlahwNSXdgY6j898FG0hs46tyjzuQtop7IuqWQmjpep8L%2FHPuOlJm7gibTeaGt6YvnYc45p7LegdcS2zJQTSatme8i4YBEVfpSBHEP2GWbdJ9W67Vx%2BF%2FPUEbaEIemOcKSH2J9QkiIIRgszDKwB2ssDDmKRf6%2FZzEir%2FL%2BW1u4O%2F4edINgRt9dpaui96BYEVqDmDiJh%2BoMJP1zcEGOqUBeT8TbeXQKEgLrCgS06os3Mv6sIB0DxQbjNlH0WHYaw1rGt09ppaRZVrWBdknB69KioRgikcx9y67tOjxa07%2BA2PnDlGXLe%2Fkm0i4eBK8%2B0Eqcu%2F64nXQBjfUKn2ZW4o093Z12E7nsi4R75vxzOeOF%2FQ74zXqddUfz2yIjQXbZhk6btCcJci72io68p8H2fq1%2F4vCCSi3o6wclQIpbVOq2QoI4udP&X-Amz-Signature=ad7c4233f5eb503de284756817dbdf2a04d1e2b7cbbb2b9b185b2553342f323b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGIJAK2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDevgVNBkvtYLfqTqkZn4229ZFaURIkm0fcxDlG5uZJKQIgEgrkRDwBDQZ4X5MFdmNdttibTXzC8dNxvLR6hq%2BEpR4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNHKI7zBe93z8dsi7CrcA0s38uxOzM3jHQHLzsgpSyBdFFxTT8ATBC%2BznbPSLS2b1T3LKeB8nykmBbaT2u2gi5Ez7Kk7k9rZ6YI9yyLTYXRz0Ts5jX7fEKYHrL9eJsx1rE1%2BVEKBuVKZQxWlwqFDOHQU0KqQie6he8rR%2BILpj%2FIQuGHNl%2FLbRegAjxrc9fXUYfdKZwYsCwNfYyOhnNHmfAshqQfC3%2FytSX9JfHJYpEl1SFXmixETiiTp7rzxoiqzrnke%2FVleeuWCe5Z5nA6CC2ARN2kpFUsRs07sPi%2FqLuUETJNI4belVGDPYZmRbxQxNKjDkZZswhFtgYfxzgRx1cmsarG2P4OpnN10zDcN25wpWCIEQade45Luu%2BED7gipkEBlxxcY6S1OFFRfeWENY6xlDXPGKA2IWdHcwKOh%2F9bAi9KOgRN0U6GSjB5iqqRfnNo1HhYjlahwNSXdgY6j898FG0hs46tyjzuQtop7IuqWQmjpep8L%2FHPuOlJm7gibTeaGt6YvnYc45p7LegdcS2zJQTSatme8i4YBEVfpSBHEP2GWbdJ9W67Vx%2BF%2FPUEbaEIemOcKSH2J9QkiIIRgszDKwB2ssDDmKRf6%2FZzEir%2FL%2BW1u4O%2F4edINgRt9dpaui96BYEVqDmDiJh%2BoMJP1zcEGOqUBeT8TbeXQKEgLrCgS06os3Mv6sIB0DxQbjNlH0WHYaw1rGt09ppaRZVrWBdknB69KioRgikcx9y67tOjxa07%2BA2PnDlGXLe%2Fkm0i4eBK8%2B0Eqcu%2F64nXQBjfUKn2ZW4o093Z12E7nsi4R75vxzOeOF%2FQ74zXqddUfz2yIjQXbZhk6btCcJci72io68p8H2fq1%2F4vCCSi3o6wclQIpbVOq2QoI4udP&X-Amz-Signature=3ffb3f7b74fe6d0bbdfabba341225f5f4b50d7bde6b27ffd7a6ef266c17ea603&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGIJAK2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDevgVNBkvtYLfqTqkZn4229ZFaURIkm0fcxDlG5uZJKQIgEgrkRDwBDQZ4X5MFdmNdttibTXzC8dNxvLR6hq%2BEpR4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNHKI7zBe93z8dsi7CrcA0s38uxOzM3jHQHLzsgpSyBdFFxTT8ATBC%2BznbPSLS2b1T3LKeB8nykmBbaT2u2gi5Ez7Kk7k9rZ6YI9yyLTYXRz0Ts5jX7fEKYHrL9eJsx1rE1%2BVEKBuVKZQxWlwqFDOHQU0KqQie6he8rR%2BILpj%2FIQuGHNl%2FLbRegAjxrc9fXUYfdKZwYsCwNfYyOhnNHmfAshqQfC3%2FytSX9JfHJYpEl1SFXmixETiiTp7rzxoiqzrnke%2FVleeuWCe5Z5nA6CC2ARN2kpFUsRs07sPi%2FqLuUETJNI4belVGDPYZmRbxQxNKjDkZZswhFtgYfxzgRx1cmsarG2P4OpnN10zDcN25wpWCIEQade45Luu%2BED7gipkEBlxxcY6S1OFFRfeWENY6xlDXPGKA2IWdHcwKOh%2F9bAi9KOgRN0U6GSjB5iqqRfnNo1HhYjlahwNSXdgY6j898FG0hs46tyjzuQtop7IuqWQmjpep8L%2FHPuOlJm7gibTeaGt6YvnYc45p7LegdcS2zJQTSatme8i4YBEVfpSBHEP2GWbdJ9W67Vx%2BF%2FPUEbaEIemOcKSH2J9QkiIIRgszDKwB2ssDDmKRf6%2FZzEir%2FL%2BW1u4O%2F4edINgRt9dpaui96BYEVqDmDiJh%2BoMJP1zcEGOqUBeT8TbeXQKEgLrCgS06os3Mv6sIB0DxQbjNlH0WHYaw1rGt09ppaRZVrWBdknB69KioRgikcx9y67tOjxa07%2BA2PnDlGXLe%2Fkm0i4eBK8%2B0Eqcu%2F64nXQBjfUKn2ZW4o093Z12E7nsi4R75vxzOeOF%2FQ74zXqddUfz2yIjQXbZhk6btCcJci72io68p8H2fq1%2F4vCCSi3o6wclQIpbVOq2QoI4udP&X-Amz-Signature=f59e5c5b37ed60d901671f2a69c540cba2406c100f1f5a7c21ba78fe05362d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGIJAK2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDevgVNBkvtYLfqTqkZn4229ZFaURIkm0fcxDlG5uZJKQIgEgrkRDwBDQZ4X5MFdmNdttibTXzC8dNxvLR6hq%2BEpR4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNHKI7zBe93z8dsi7CrcA0s38uxOzM3jHQHLzsgpSyBdFFxTT8ATBC%2BznbPSLS2b1T3LKeB8nykmBbaT2u2gi5Ez7Kk7k9rZ6YI9yyLTYXRz0Ts5jX7fEKYHrL9eJsx1rE1%2BVEKBuVKZQxWlwqFDOHQU0KqQie6he8rR%2BILpj%2FIQuGHNl%2FLbRegAjxrc9fXUYfdKZwYsCwNfYyOhnNHmfAshqQfC3%2FytSX9JfHJYpEl1SFXmixETiiTp7rzxoiqzrnke%2FVleeuWCe5Z5nA6CC2ARN2kpFUsRs07sPi%2FqLuUETJNI4belVGDPYZmRbxQxNKjDkZZswhFtgYfxzgRx1cmsarG2P4OpnN10zDcN25wpWCIEQade45Luu%2BED7gipkEBlxxcY6S1OFFRfeWENY6xlDXPGKA2IWdHcwKOh%2F9bAi9KOgRN0U6GSjB5iqqRfnNo1HhYjlahwNSXdgY6j898FG0hs46tyjzuQtop7IuqWQmjpep8L%2FHPuOlJm7gibTeaGt6YvnYc45p7LegdcS2zJQTSatme8i4YBEVfpSBHEP2GWbdJ9W67Vx%2BF%2FPUEbaEIemOcKSH2J9QkiIIRgszDKwB2ssDDmKRf6%2FZzEir%2FL%2BW1u4O%2F4edINgRt9dpaui96BYEVqDmDiJh%2BoMJP1zcEGOqUBeT8TbeXQKEgLrCgS06os3Mv6sIB0DxQbjNlH0WHYaw1rGt09ppaRZVrWBdknB69KioRgikcx9y67tOjxa07%2BA2PnDlGXLe%2Fkm0i4eBK8%2B0Eqcu%2F64nXQBjfUKn2ZW4o093Z12E7nsi4R75vxzOeOF%2FQ74zXqddUfz2yIjQXbZhk6btCcJci72io68p8H2fq1%2F4vCCSi3o6wclQIpbVOq2QoI4udP&X-Amz-Signature=2740b11d5fb543bf474fe7f01262de7f27296a222bd46d2b0e7b10df20439885&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
