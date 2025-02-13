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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YIZYCUL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BX%2BuBPeNET%2BsvN%2B%2BCsW1h5WgKyWSWMl3XehzjXSdKQIhAPrD1Cr7wyhpmK9pqLWTgGnywlMNWbX9ddYLOcac14cQKv8DCBYQABoMNjM3NDIzMTgzODA1Igw4T8xxSV6IZ%2BEvPb0q3ANR8kY2YDKX86P%2F2tIdn11H90ffnoPZbiKAQB83GZEekdhOtOpnY%2Boy9uluFYygMxlVsSBNyIE7Qy3TdzmOU691CsRv%2B%2B7nNA19WdSr24HrLN69aCk6foV4omnUPb7t0wNPEuhNg%2F6ZrZ1s9rxWXV1LsiaxRrxhDvzWLMVJSdMoxpoZ2KvOpyGzH7OqdlkkQrkWYgpDo46Bbq8kr4TSbpNAUM66d3uRp2%2BfgXWbLRMSy8tHmoBIEt03%2BiuQBBGn7CWWgRzLEV2pEQ%2FQzqKufrfH6jy%2FhWtSyJ4XMJWsbpAJQrr0Gdz6TLrRFNnrzj%2F6glUEdwM8ogyXAOv0Tm0MqG9pVZUIAeKUKfpsJnepdYqFVWkRCpMlHCNiy%2FB%2BT2jhUGguE4lGDJKYxCdInRpoGKauEgAOfiXr%2B3A%2F47dbQmjoQuS62ApXE35am1dJ4t6oEYb5i09SUvboy%2BoHaDgFch3vbb739xNVwvQglC1Kr%2FVDt3rGA%2BY3TFdVfFypo3QSxrs7bqUqldcuJHGZAx916TdWt7p%2FrJQkqnCDeBfPKxWHadmx1OfZp6s2zuGEWU3cKV7yl7oTl8wPtBuvndlZes97wZixwWSXm8fU6KOZsAb7TDXJdF%2FWxdgoexd5sDCW3be9BjqkAVFYvDZ6Ux6PFnXimoxdxm%2F9MIwxvesDpgtUzWdvH0qcgkdtFpcxbNWDkw6LtTxZAtI2qG2FXCWF1w1OklVIfu6OTRe0%2F01DgYl5CATDKh316B7qZocBrnD%2Bgv%2BELrJ9hwN7dk%2FcfM9rhW6RVI9%2FDh4CpaCmwrzQ1v47HezSEyb3xzPTrPS1tOO4m%2BO4xGLESPfPwcRtvf2gmuh17hCJu8XciPpH&X-Amz-Signature=b70a5280ca6da5b7cd5fcd0f76409721df5a1e112356cd53530952dae7e87c89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YIZYCUL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BX%2BuBPeNET%2BsvN%2B%2BCsW1h5WgKyWSWMl3XehzjXSdKQIhAPrD1Cr7wyhpmK9pqLWTgGnywlMNWbX9ddYLOcac14cQKv8DCBYQABoMNjM3NDIzMTgzODA1Igw4T8xxSV6IZ%2BEvPb0q3ANR8kY2YDKX86P%2F2tIdn11H90ffnoPZbiKAQB83GZEekdhOtOpnY%2Boy9uluFYygMxlVsSBNyIE7Qy3TdzmOU691CsRv%2B%2B7nNA19WdSr24HrLN69aCk6foV4omnUPb7t0wNPEuhNg%2F6ZrZ1s9rxWXV1LsiaxRrxhDvzWLMVJSdMoxpoZ2KvOpyGzH7OqdlkkQrkWYgpDo46Bbq8kr4TSbpNAUM66d3uRp2%2BfgXWbLRMSy8tHmoBIEt03%2BiuQBBGn7CWWgRzLEV2pEQ%2FQzqKufrfH6jy%2FhWtSyJ4XMJWsbpAJQrr0Gdz6TLrRFNnrzj%2F6glUEdwM8ogyXAOv0Tm0MqG9pVZUIAeKUKfpsJnepdYqFVWkRCpMlHCNiy%2FB%2BT2jhUGguE4lGDJKYxCdInRpoGKauEgAOfiXr%2B3A%2F47dbQmjoQuS62ApXE35am1dJ4t6oEYb5i09SUvboy%2BoHaDgFch3vbb739xNVwvQglC1Kr%2FVDt3rGA%2BY3TFdVfFypo3QSxrs7bqUqldcuJHGZAx916TdWt7p%2FrJQkqnCDeBfPKxWHadmx1OfZp6s2zuGEWU3cKV7yl7oTl8wPtBuvndlZes97wZixwWSXm8fU6KOZsAb7TDXJdF%2FWxdgoexd5sDCW3be9BjqkAVFYvDZ6Ux6PFnXimoxdxm%2F9MIwxvesDpgtUzWdvH0qcgkdtFpcxbNWDkw6LtTxZAtI2qG2FXCWF1w1OklVIfu6OTRe0%2F01DgYl5CATDKh316B7qZocBrnD%2Bgv%2BELrJ9hwN7dk%2FcfM9rhW6RVI9%2FDh4CpaCmwrzQ1v47HezSEyb3xzPTrPS1tOO4m%2BO4xGLESPfPwcRtvf2gmuh17hCJu8XciPpH&X-Amz-Signature=bdcaace8c90a8837fe5e6128fa185f82bf9850f7c667760f862db0c2b04578b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YIZYCUL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BX%2BuBPeNET%2BsvN%2B%2BCsW1h5WgKyWSWMl3XehzjXSdKQIhAPrD1Cr7wyhpmK9pqLWTgGnywlMNWbX9ddYLOcac14cQKv8DCBYQABoMNjM3NDIzMTgzODA1Igw4T8xxSV6IZ%2BEvPb0q3ANR8kY2YDKX86P%2F2tIdn11H90ffnoPZbiKAQB83GZEekdhOtOpnY%2Boy9uluFYygMxlVsSBNyIE7Qy3TdzmOU691CsRv%2B%2B7nNA19WdSr24HrLN69aCk6foV4omnUPb7t0wNPEuhNg%2F6ZrZ1s9rxWXV1LsiaxRrxhDvzWLMVJSdMoxpoZ2KvOpyGzH7OqdlkkQrkWYgpDo46Bbq8kr4TSbpNAUM66d3uRp2%2BfgXWbLRMSy8tHmoBIEt03%2BiuQBBGn7CWWgRzLEV2pEQ%2FQzqKufrfH6jy%2FhWtSyJ4XMJWsbpAJQrr0Gdz6TLrRFNnrzj%2F6glUEdwM8ogyXAOv0Tm0MqG9pVZUIAeKUKfpsJnepdYqFVWkRCpMlHCNiy%2FB%2BT2jhUGguE4lGDJKYxCdInRpoGKauEgAOfiXr%2B3A%2F47dbQmjoQuS62ApXE35am1dJ4t6oEYb5i09SUvboy%2BoHaDgFch3vbb739xNVwvQglC1Kr%2FVDt3rGA%2BY3TFdVfFypo3QSxrs7bqUqldcuJHGZAx916TdWt7p%2FrJQkqnCDeBfPKxWHadmx1OfZp6s2zuGEWU3cKV7yl7oTl8wPtBuvndlZes97wZixwWSXm8fU6KOZsAb7TDXJdF%2FWxdgoexd5sDCW3be9BjqkAVFYvDZ6Ux6PFnXimoxdxm%2F9MIwxvesDpgtUzWdvH0qcgkdtFpcxbNWDkw6LtTxZAtI2qG2FXCWF1w1OklVIfu6OTRe0%2F01DgYl5CATDKh316B7qZocBrnD%2Bgv%2BELrJ9hwN7dk%2FcfM9rhW6RVI9%2FDh4CpaCmwrzQ1v47HezSEyb3xzPTrPS1tOO4m%2BO4xGLESPfPwcRtvf2gmuh17hCJu8XciPpH&X-Amz-Signature=44405fa6ed5a900f230f6bcbc62cdf743376802064015dc4abc70f69542b11ba&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YIZYCUL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BX%2BuBPeNET%2BsvN%2B%2BCsW1h5WgKyWSWMl3XehzjXSdKQIhAPrD1Cr7wyhpmK9pqLWTgGnywlMNWbX9ddYLOcac14cQKv8DCBYQABoMNjM3NDIzMTgzODA1Igw4T8xxSV6IZ%2BEvPb0q3ANR8kY2YDKX86P%2F2tIdn11H90ffnoPZbiKAQB83GZEekdhOtOpnY%2Boy9uluFYygMxlVsSBNyIE7Qy3TdzmOU691CsRv%2B%2B7nNA19WdSr24HrLN69aCk6foV4omnUPb7t0wNPEuhNg%2F6ZrZ1s9rxWXV1LsiaxRrxhDvzWLMVJSdMoxpoZ2KvOpyGzH7OqdlkkQrkWYgpDo46Bbq8kr4TSbpNAUM66d3uRp2%2BfgXWbLRMSy8tHmoBIEt03%2BiuQBBGn7CWWgRzLEV2pEQ%2FQzqKufrfH6jy%2FhWtSyJ4XMJWsbpAJQrr0Gdz6TLrRFNnrzj%2F6glUEdwM8ogyXAOv0Tm0MqG9pVZUIAeKUKfpsJnepdYqFVWkRCpMlHCNiy%2FB%2BT2jhUGguE4lGDJKYxCdInRpoGKauEgAOfiXr%2B3A%2F47dbQmjoQuS62ApXE35am1dJ4t6oEYb5i09SUvboy%2BoHaDgFch3vbb739xNVwvQglC1Kr%2FVDt3rGA%2BY3TFdVfFypo3QSxrs7bqUqldcuJHGZAx916TdWt7p%2FrJQkqnCDeBfPKxWHadmx1OfZp6s2zuGEWU3cKV7yl7oTl8wPtBuvndlZes97wZixwWSXm8fU6KOZsAb7TDXJdF%2FWxdgoexd5sDCW3be9BjqkAVFYvDZ6Ux6PFnXimoxdxm%2F9MIwxvesDpgtUzWdvH0qcgkdtFpcxbNWDkw6LtTxZAtI2qG2FXCWF1w1OklVIfu6OTRe0%2F01DgYl5CATDKh316B7qZocBrnD%2Bgv%2BELrJ9hwN7dk%2FcfM9rhW6RVI9%2FDh4CpaCmwrzQ1v47HezSEyb3xzPTrPS1tOO4m%2BO4xGLESPfPwcRtvf2gmuh17hCJu8XciPpH&X-Amz-Signature=aa58f36e0a519522c14f7146741267ab44aef8d2889acafa25c652460d4820e4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YIZYCUL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BX%2BuBPeNET%2BsvN%2B%2BCsW1h5WgKyWSWMl3XehzjXSdKQIhAPrD1Cr7wyhpmK9pqLWTgGnywlMNWbX9ddYLOcac14cQKv8DCBYQABoMNjM3NDIzMTgzODA1Igw4T8xxSV6IZ%2BEvPb0q3ANR8kY2YDKX86P%2F2tIdn11H90ffnoPZbiKAQB83GZEekdhOtOpnY%2Boy9uluFYygMxlVsSBNyIE7Qy3TdzmOU691CsRv%2B%2B7nNA19WdSr24HrLN69aCk6foV4omnUPb7t0wNPEuhNg%2F6ZrZ1s9rxWXV1LsiaxRrxhDvzWLMVJSdMoxpoZ2KvOpyGzH7OqdlkkQrkWYgpDo46Bbq8kr4TSbpNAUM66d3uRp2%2BfgXWbLRMSy8tHmoBIEt03%2BiuQBBGn7CWWgRzLEV2pEQ%2FQzqKufrfH6jy%2FhWtSyJ4XMJWsbpAJQrr0Gdz6TLrRFNnrzj%2F6glUEdwM8ogyXAOv0Tm0MqG9pVZUIAeKUKfpsJnepdYqFVWkRCpMlHCNiy%2FB%2BT2jhUGguE4lGDJKYxCdInRpoGKauEgAOfiXr%2B3A%2F47dbQmjoQuS62ApXE35am1dJ4t6oEYb5i09SUvboy%2BoHaDgFch3vbb739xNVwvQglC1Kr%2FVDt3rGA%2BY3TFdVfFypo3QSxrs7bqUqldcuJHGZAx916TdWt7p%2FrJQkqnCDeBfPKxWHadmx1OfZp6s2zuGEWU3cKV7yl7oTl8wPtBuvndlZes97wZixwWSXm8fU6KOZsAb7TDXJdF%2FWxdgoexd5sDCW3be9BjqkAVFYvDZ6Ux6PFnXimoxdxm%2F9MIwxvesDpgtUzWdvH0qcgkdtFpcxbNWDkw6LtTxZAtI2qG2FXCWF1w1OklVIfu6OTRe0%2F01DgYl5CATDKh316B7qZocBrnD%2Bgv%2BELrJ9hwN7dk%2FcfM9rhW6RVI9%2FDh4CpaCmwrzQ1v47HezSEyb3xzPTrPS1tOO4m%2BO4xGLESPfPwcRtvf2gmuh17hCJu8XciPpH&X-Amz-Signature=fab7e311c2903a1579f2f1b69b27d16076da03a9ad83a7ddd359f2f2a10a6d80&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YIZYCUL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BX%2BuBPeNET%2BsvN%2B%2BCsW1h5WgKyWSWMl3XehzjXSdKQIhAPrD1Cr7wyhpmK9pqLWTgGnywlMNWbX9ddYLOcac14cQKv8DCBYQABoMNjM3NDIzMTgzODA1Igw4T8xxSV6IZ%2BEvPb0q3ANR8kY2YDKX86P%2F2tIdn11H90ffnoPZbiKAQB83GZEekdhOtOpnY%2Boy9uluFYygMxlVsSBNyIE7Qy3TdzmOU691CsRv%2B%2B7nNA19WdSr24HrLN69aCk6foV4omnUPb7t0wNPEuhNg%2F6ZrZ1s9rxWXV1LsiaxRrxhDvzWLMVJSdMoxpoZ2KvOpyGzH7OqdlkkQrkWYgpDo46Bbq8kr4TSbpNAUM66d3uRp2%2BfgXWbLRMSy8tHmoBIEt03%2BiuQBBGn7CWWgRzLEV2pEQ%2FQzqKufrfH6jy%2FhWtSyJ4XMJWsbpAJQrr0Gdz6TLrRFNnrzj%2F6glUEdwM8ogyXAOv0Tm0MqG9pVZUIAeKUKfpsJnepdYqFVWkRCpMlHCNiy%2FB%2BT2jhUGguE4lGDJKYxCdInRpoGKauEgAOfiXr%2B3A%2F47dbQmjoQuS62ApXE35am1dJ4t6oEYb5i09SUvboy%2BoHaDgFch3vbb739xNVwvQglC1Kr%2FVDt3rGA%2BY3TFdVfFypo3QSxrs7bqUqldcuJHGZAx916TdWt7p%2FrJQkqnCDeBfPKxWHadmx1OfZp6s2zuGEWU3cKV7yl7oTl8wPtBuvndlZes97wZixwWSXm8fU6KOZsAb7TDXJdF%2FWxdgoexd5sDCW3be9BjqkAVFYvDZ6Ux6PFnXimoxdxm%2F9MIwxvesDpgtUzWdvH0qcgkdtFpcxbNWDkw6LtTxZAtI2qG2FXCWF1w1OklVIfu6OTRe0%2F01DgYl5CATDKh316B7qZocBrnD%2Bgv%2BELrJ9hwN7dk%2FcfM9rhW6RVI9%2FDh4CpaCmwrzQ1v47HezSEyb3xzPTrPS1tOO4m%2BO4xGLESPfPwcRtvf2gmuh17hCJu8XciPpH&X-Amz-Signature=4b6424da67207e9f3d652a056b8a9943055ec415f040434d44f5c737ea63c3da&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YIZYCUL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BX%2BuBPeNET%2BsvN%2B%2BCsW1h5WgKyWSWMl3XehzjXSdKQIhAPrD1Cr7wyhpmK9pqLWTgGnywlMNWbX9ddYLOcac14cQKv8DCBYQABoMNjM3NDIzMTgzODA1Igw4T8xxSV6IZ%2BEvPb0q3ANR8kY2YDKX86P%2F2tIdn11H90ffnoPZbiKAQB83GZEekdhOtOpnY%2Boy9uluFYygMxlVsSBNyIE7Qy3TdzmOU691CsRv%2B%2B7nNA19WdSr24HrLN69aCk6foV4omnUPb7t0wNPEuhNg%2F6ZrZ1s9rxWXV1LsiaxRrxhDvzWLMVJSdMoxpoZ2KvOpyGzH7OqdlkkQrkWYgpDo46Bbq8kr4TSbpNAUM66d3uRp2%2BfgXWbLRMSy8tHmoBIEt03%2BiuQBBGn7CWWgRzLEV2pEQ%2FQzqKufrfH6jy%2FhWtSyJ4XMJWsbpAJQrr0Gdz6TLrRFNnrzj%2F6glUEdwM8ogyXAOv0Tm0MqG9pVZUIAeKUKfpsJnepdYqFVWkRCpMlHCNiy%2FB%2BT2jhUGguE4lGDJKYxCdInRpoGKauEgAOfiXr%2B3A%2F47dbQmjoQuS62ApXE35am1dJ4t6oEYb5i09SUvboy%2BoHaDgFch3vbb739xNVwvQglC1Kr%2FVDt3rGA%2BY3TFdVfFypo3QSxrs7bqUqldcuJHGZAx916TdWt7p%2FrJQkqnCDeBfPKxWHadmx1OfZp6s2zuGEWU3cKV7yl7oTl8wPtBuvndlZes97wZixwWSXm8fU6KOZsAb7TDXJdF%2FWxdgoexd5sDCW3be9BjqkAVFYvDZ6Ux6PFnXimoxdxm%2F9MIwxvesDpgtUzWdvH0qcgkdtFpcxbNWDkw6LtTxZAtI2qG2FXCWF1w1OklVIfu6OTRe0%2F01DgYl5CATDKh316B7qZocBrnD%2Bgv%2BELrJ9hwN7dk%2FcfM9rhW6RVI9%2FDh4CpaCmwrzQ1v47HezSEyb3xzPTrPS1tOO4m%2BO4xGLESPfPwcRtvf2gmuh17hCJu8XciPpH&X-Amz-Signature=8eb4dc4c1f1dde238b314d0975ae933b14945b5bf091c1b13fa93a9663a90c13&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
