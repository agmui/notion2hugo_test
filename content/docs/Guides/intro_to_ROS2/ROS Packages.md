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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QA2VAPA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDbGLOcztaaS8dqv0ou0q3HJ3BtlC%2Fq5UtAy89WE8uBVAIhANIgyYVzIgQ82m%2BaCPWm6sNqIxbH5oC1nMuMmaMHnZwsKv8DCEoQABoMNjM3NDIzMTgzODA1IgzBwcA75nVCWu53C9sq3AOCRD%2BGV7JVuGY2TqONwlUcKuN%2BVvO7tki56xbNu1DFoH43oj%2BM5CzueLJNbRejPsptlTzPejq38K0AJvKX%2BsokZZK9WW4VIRgr9wMbQ6kRyetPaY96u6ye6aYu9rDxEjf3oBckngBpE0wtxNy%2BNIKF9aQwUuDan9zzaeHPbmWXzcqXGIFbRjXWyDJDe5K7sUzIkTtD%2B2d0gV9NaLKo0HvDRA1LunyO1zxUy%2FPNLsK%2Bk8LBv3qhAI9xeSZPKvODXjoaaYGKWLCkesP4Al05oQwINPE5x3izhFYEh1mTi%2B842%2BuUtNqNVUtQVjoUoo7c%2B25aetDdf1ugYX6TpDds12%2BCORXbmcgEKmYPVG3JFAQhx5V9ejtzOw5den%2FVVr6LAQ6wL9fdh%2F1X%2B2v1BabTMTSK%2BM%2B5XgMnEvk1ovcOIFYZZicmS9%2Btkdufw9QshKdp1Bu3AiCJdiwF3YqsGTZhRwWsOf33xcqmrZr36wRT6l%2F3xcXXzkDmJrzfTVbXIdTPIDtpNpCqlK%2FIVZg9c1f6QJ1mOlzl3TtcxSZ13rMfGG%2BXB1zWTQjF7AqYPoUvUwY8RfxeyBgK0YgB%2BFBl18fZsowPRYrsUNMOTlzNsRDfEmCPkASBVQMLl4%2FmGjF3dzDL4PDCBjqkAesirCyCprSom9ujtGaiP%2BAAwPuPRYd2VPO1citB%2B58dtIFmI6D7G4LNsLKo%2BvRCRMM7K0xa37VJjemqJlxIWNJX%2FOxbV4QwsG2OBYy0PVLJWzI9jIOmMBeaiPBZdSqtpXJq10H72Ct4vzLM678OdsimA3zi33t3k2N3T5oPQm83rUlujIxxZZGu73BPVbfwtbutGIfJls42bEzD%2FVKJPl3JJhyF&X-Amz-Signature=1376bc19357ff7576fabd577fda2dac486888fe2716bb66c8aff9aa35976b2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QA2VAPA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDbGLOcztaaS8dqv0ou0q3HJ3BtlC%2Fq5UtAy89WE8uBVAIhANIgyYVzIgQ82m%2BaCPWm6sNqIxbH5oC1nMuMmaMHnZwsKv8DCEoQABoMNjM3NDIzMTgzODA1IgzBwcA75nVCWu53C9sq3AOCRD%2BGV7JVuGY2TqONwlUcKuN%2BVvO7tki56xbNu1DFoH43oj%2BM5CzueLJNbRejPsptlTzPejq38K0AJvKX%2BsokZZK9WW4VIRgr9wMbQ6kRyetPaY96u6ye6aYu9rDxEjf3oBckngBpE0wtxNy%2BNIKF9aQwUuDan9zzaeHPbmWXzcqXGIFbRjXWyDJDe5K7sUzIkTtD%2B2d0gV9NaLKo0HvDRA1LunyO1zxUy%2FPNLsK%2Bk8LBv3qhAI9xeSZPKvODXjoaaYGKWLCkesP4Al05oQwINPE5x3izhFYEh1mTi%2B842%2BuUtNqNVUtQVjoUoo7c%2B25aetDdf1ugYX6TpDds12%2BCORXbmcgEKmYPVG3JFAQhx5V9ejtzOw5den%2FVVr6LAQ6wL9fdh%2F1X%2B2v1BabTMTSK%2BM%2B5XgMnEvk1ovcOIFYZZicmS9%2Btkdufw9QshKdp1Bu3AiCJdiwF3YqsGTZhRwWsOf33xcqmrZr36wRT6l%2F3xcXXzkDmJrzfTVbXIdTPIDtpNpCqlK%2FIVZg9c1f6QJ1mOlzl3TtcxSZ13rMfGG%2BXB1zWTQjF7AqYPoUvUwY8RfxeyBgK0YgB%2BFBl18fZsowPRYrsUNMOTlzNsRDfEmCPkASBVQMLl4%2FmGjF3dzDL4PDCBjqkAesirCyCprSom9ujtGaiP%2BAAwPuPRYd2VPO1citB%2B58dtIFmI6D7G4LNsLKo%2BvRCRMM7K0xa37VJjemqJlxIWNJX%2FOxbV4QwsG2OBYy0PVLJWzI9jIOmMBeaiPBZdSqtpXJq10H72Ct4vzLM678OdsimA3zi33t3k2N3T5oPQm83rUlujIxxZZGu73BPVbfwtbutGIfJls42bEzD%2FVKJPl3JJhyF&X-Amz-Signature=f79dd52185346ec62cfa27c3fb0ba8eb06f767c02a2155c034db73944d702341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QA2VAPA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDbGLOcztaaS8dqv0ou0q3HJ3BtlC%2Fq5UtAy89WE8uBVAIhANIgyYVzIgQ82m%2BaCPWm6sNqIxbH5oC1nMuMmaMHnZwsKv8DCEoQABoMNjM3NDIzMTgzODA1IgzBwcA75nVCWu53C9sq3AOCRD%2BGV7JVuGY2TqONwlUcKuN%2BVvO7tki56xbNu1DFoH43oj%2BM5CzueLJNbRejPsptlTzPejq38K0AJvKX%2BsokZZK9WW4VIRgr9wMbQ6kRyetPaY96u6ye6aYu9rDxEjf3oBckngBpE0wtxNy%2BNIKF9aQwUuDan9zzaeHPbmWXzcqXGIFbRjXWyDJDe5K7sUzIkTtD%2B2d0gV9NaLKo0HvDRA1LunyO1zxUy%2FPNLsK%2Bk8LBv3qhAI9xeSZPKvODXjoaaYGKWLCkesP4Al05oQwINPE5x3izhFYEh1mTi%2B842%2BuUtNqNVUtQVjoUoo7c%2B25aetDdf1ugYX6TpDds12%2BCORXbmcgEKmYPVG3JFAQhx5V9ejtzOw5den%2FVVr6LAQ6wL9fdh%2F1X%2B2v1BabTMTSK%2BM%2B5XgMnEvk1ovcOIFYZZicmS9%2Btkdufw9QshKdp1Bu3AiCJdiwF3YqsGTZhRwWsOf33xcqmrZr36wRT6l%2F3xcXXzkDmJrzfTVbXIdTPIDtpNpCqlK%2FIVZg9c1f6QJ1mOlzl3TtcxSZ13rMfGG%2BXB1zWTQjF7AqYPoUvUwY8RfxeyBgK0YgB%2BFBl18fZsowPRYrsUNMOTlzNsRDfEmCPkASBVQMLl4%2FmGjF3dzDL4PDCBjqkAesirCyCprSom9ujtGaiP%2BAAwPuPRYd2VPO1citB%2B58dtIFmI6D7G4LNsLKo%2BvRCRMM7K0xa37VJjemqJlxIWNJX%2FOxbV4QwsG2OBYy0PVLJWzI9jIOmMBeaiPBZdSqtpXJq10H72Ct4vzLM678OdsimA3zi33t3k2N3T5oPQm83rUlujIxxZZGu73BPVbfwtbutGIfJls42bEzD%2FVKJPl3JJhyF&X-Amz-Signature=a7ff02b62ca0d230bc74284b18e1dd7f89f736d4aca8ad8ddf9caaa253652c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QA2VAPA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDbGLOcztaaS8dqv0ou0q3HJ3BtlC%2Fq5UtAy89WE8uBVAIhANIgyYVzIgQ82m%2BaCPWm6sNqIxbH5oC1nMuMmaMHnZwsKv8DCEoQABoMNjM3NDIzMTgzODA1IgzBwcA75nVCWu53C9sq3AOCRD%2BGV7JVuGY2TqONwlUcKuN%2BVvO7tki56xbNu1DFoH43oj%2BM5CzueLJNbRejPsptlTzPejq38K0AJvKX%2BsokZZK9WW4VIRgr9wMbQ6kRyetPaY96u6ye6aYu9rDxEjf3oBckngBpE0wtxNy%2BNIKF9aQwUuDan9zzaeHPbmWXzcqXGIFbRjXWyDJDe5K7sUzIkTtD%2B2d0gV9NaLKo0HvDRA1LunyO1zxUy%2FPNLsK%2Bk8LBv3qhAI9xeSZPKvODXjoaaYGKWLCkesP4Al05oQwINPE5x3izhFYEh1mTi%2B842%2BuUtNqNVUtQVjoUoo7c%2B25aetDdf1ugYX6TpDds12%2BCORXbmcgEKmYPVG3JFAQhx5V9ejtzOw5den%2FVVr6LAQ6wL9fdh%2F1X%2B2v1BabTMTSK%2BM%2B5XgMnEvk1ovcOIFYZZicmS9%2Btkdufw9QshKdp1Bu3AiCJdiwF3YqsGTZhRwWsOf33xcqmrZr36wRT6l%2F3xcXXzkDmJrzfTVbXIdTPIDtpNpCqlK%2FIVZg9c1f6QJ1mOlzl3TtcxSZ13rMfGG%2BXB1zWTQjF7AqYPoUvUwY8RfxeyBgK0YgB%2BFBl18fZsowPRYrsUNMOTlzNsRDfEmCPkASBVQMLl4%2FmGjF3dzDL4PDCBjqkAesirCyCprSom9ujtGaiP%2BAAwPuPRYd2VPO1citB%2B58dtIFmI6D7G4LNsLKo%2BvRCRMM7K0xa37VJjemqJlxIWNJX%2FOxbV4QwsG2OBYy0PVLJWzI9jIOmMBeaiPBZdSqtpXJq10H72Ct4vzLM678OdsimA3zi33t3k2N3T5oPQm83rUlujIxxZZGu73BPVbfwtbutGIfJls42bEzD%2FVKJPl3JJhyF&X-Amz-Signature=4cf029839160838e13802d3437a5bf77e2b7d989d52c24a288db1294c5f11ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QA2VAPA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDbGLOcztaaS8dqv0ou0q3HJ3BtlC%2Fq5UtAy89WE8uBVAIhANIgyYVzIgQ82m%2BaCPWm6sNqIxbH5oC1nMuMmaMHnZwsKv8DCEoQABoMNjM3NDIzMTgzODA1IgzBwcA75nVCWu53C9sq3AOCRD%2BGV7JVuGY2TqONwlUcKuN%2BVvO7tki56xbNu1DFoH43oj%2BM5CzueLJNbRejPsptlTzPejq38K0AJvKX%2BsokZZK9WW4VIRgr9wMbQ6kRyetPaY96u6ye6aYu9rDxEjf3oBckngBpE0wtxNy%2BNIKF9aQwUuDan9zzaeHPbmWXzcqXGIFbRjXWyDJDe5K7sUzIkTtD%2B2d0gV9NaLKo0HvDRA1LunyO1zxUy%2FPNLsK%2Bk8LBv3qhAI9xeSZPKvODXjoaaYGKWLCkesP4Al05oQwINPE5x3izhFYEh1mTi%2B842%2BuUtNqNVUtQVjoUoo7c%2B25aetDdf1ugYX6TpDds12%2BCORXbmcgEKmYPVG3JFAQhx5V9ejtzOw5den%2FVVr6LAQ6wL9fdh%2F1X%2B2v1BabTMTSK%2BM%2B5XgMnEvk1ovcOIFYZZicmS9%2Btkdufw9QshKdp1Bu3AiCJdiwF3YqsGTZhRwWsOf33xcqmrZr36wRT6l%2F3xcXXzkDmJrzfTVbXIdTPIDtpNpCqlK%2FIVZg9c1f6QJ1mOlzl3TtcxSZ13rMfGG%2BXB1zWTQjF7AqYPoUvUwY8RfxeyBgK0YgB%2BFBl18fZsowPRYrsUNMOTlzNsRDfEmCPkASBVQMLl4%2FmGjF3dzDL4PDCBjqkAesirCyCprSom9ujtGaiP%2BAAwPuPRYd2VPO1citB%2B58dtIFmI6D7G4LNsLKo%2BvRCRMM7K0xa37VJjemqJlxIWNJX%2FOxbV4QwsG2OBYy0PVLJWzI9jIOmMBeaiPBZdSqtpXJq10H72Ct4vzLM678OdsimA3zi33t3k2N3T5oPQm83rUlujIxxZZGu73BPVbfwtbutGIfJls42bEzD%2FVKJPl3JJhyF&X-Amz-Signature=0251ce3a49a046a35c642df59bca225b03fdbcb01a2db2bbde404dd1804a40cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QA2VAPA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDbGLOcztaaS8dqv0ou0q3HJ3BtlC%2Fq5UtAy89WE8uBVAIhANIgyYVzIgQ82m%2BaCPWm6sNqIxbH5oC1nMuMmaMHnZwsKv8DCEoQABoMNjM3NDIzMTgzODA1IgzBwcA75nVCWu53C9sq3AOCRD%2BGV7JVuGY2TqONwlUcKuN%2BVvO7tki56xbNu1DFoH43oj%2BM5CzueLJNbRejPsptlTzPejq38K0AJvKX%2BsokZZK9WW4VIRgr9wMbQ6kRyetPaY96u6ye6aYu9rDxEjf3oBckngBpE0wtxNy%2BNIKF9aQwUuDan9zzaeHPbmWXzcqXGIFbRjXWyDJDe5K7sUzIkTtD%2B2d0gV9NaLKo0HvDRA1LunyO1zxUy%2FPNLsK%2Bk8LBv3qhAI9xeSZPKvODXjoaaYGKWLCkesP4Al05oQwINPE5x3izhFYEh1mTi%2B842%2BuUtNqNVUtQVjoUoo7c%2B25aetDdf1ugYX6TpDds12%2BCORXbmcgEKmYPVG3JFAQhx5V9ejtzOw5den%2FVVr6LAQ6wL9fdh%2F1X%2B2v1BabTMTSK%2BM%2B5XgMnEvk1ovcOIFYZZicmS9%2Btkdufw9QshKdp1Bu3AiCJdiwF3YqsGTZhRwWsOf33xcqmrZr36wRT6l%2F3xcXXzkDmJrzfTVbXIdTPIDtpNpCqlK%2FIVZg9c1f6QJ1mOlzl3TtcxSZ13rMfGG%2BXB1zWTQjF7AqYPoUvUwY8RfxeyBgK0YgB%2BFBl18fZsowPRYrsUNMOTlzNsRDfEmCPkASBVQMLl4%2FmGjF3dzDL4PDCBjqkAesirCyCprSom9ujtGaiP%2BAAwPuPRYd2VPO1citB%2B58dtIFmI6D7G4LNsLKo%2BvRCRMM7K0xa37VJjemqJlxIWNJX%2FOxbV4QwsG2OBYy0PVLJWzI9jIOmMBeaiPBZdSqtpXJq10H72Ct4vzLM678OdsimA3zi33t3k2N3T5oPQm83rUlujIxxZZGu73BPVbfwtbutGIfJls42bEzD%2FVKJPl3JJhyF&X-Amz-Signature=ca73e1f3fe86ef274f0f346e1c7c17950d27e704bbd2c57e51dfe9c0e9fe75cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QA2VAPA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDbGLOcztaaS8dqv0ou0q3HJ3BtlC%2Fq5UtAy89WE8uBVAIhANIgyYVzIgQ82m%2BaCPWm6sNqIxbH5oC1nMuMmaMHnZwsKv8DCEoQABoMNjM3NDIzMTgzODA1IgzBwcA75nVCWu53C9sq3AOCRD%2BGV7JVuGY2TqONwlUcKuN%2BVvO7tki56xbNu1DFoH43oj%2BM5CzueLJNbRejPsptlTzPejq38K0AJvKX%2BsokZZK9WW4VIRgr9wMbQ6kRyetPaY96u6ye6aYu9rDxEjf3oBckngBpE0wtxNy%2BNIKF9aQwUuDan9zzaeHPbmWXzcqXGIFbRjXWyDJDe5K7sUzIkTtD%2B2d0gV9NaLKo0HvDRA1LunyO1zxUy%2FPNLsK%2Bk8LBv3qhAI9xeSZPKvODXjoaaYGKWLCkesP4Al05oQwINPE5x3izhFYEh1mTi%2B842%2BuUtNqNVUtQVjoUoo7c%2B25aetDdf1ugYX6TpDds12%2BCORXbmcgEKmYPVG3JFAQhx5V9ejtzOw5den%2FVVr6LAQ6wL9fdh%2F1X%2B2v1BabTMTSK%2BM%2B5XgMnEvk1ovcOIFYZZicmS9%2Btkdufw9QshKdp1Bu3AiCJdiwF3YqsGTZhRwWsOf33xcqmrZr36wRT6l%2F3xcXXzkDmJrzfTVbXIdTPIDtpNpCqlK%2FIVZg9c1f6QJ1mOlzl3TtcxSZ13rMfGG%2BXB1zWTQjF7AqYPoUvUwY8RfxeyBgK0YgB%2BFBl18fZsowPRYrsUNMOTlzNsRDfEmCPkASBVQMLl4%2FmGjF3dzDL4PDCBjqkAesirCyCprSom9ujtGaiP%2BAAwPuPRYd2VPO1citB%2B58dtIFmI6D7G4LNsLKo%2BvRCRMM7K0xa37VJjemqJlxIWNJX%2FOxbV4QwsG2OBYy0PVLJWzI9jIOmMBeaiPBZdSqtpXJq10H72Ct4vzLM678OdsimA3zi33t3k2N3T5oPQm83rUlujIxxZZGu73BPVbfwtbutGIfJls42bEzD%2FVKJPl3JJhyF&X-Amz-Signature=29375d1762e548ce6e16705bb93acfc140d00559c8ed954f4a0d1fe09845d34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
