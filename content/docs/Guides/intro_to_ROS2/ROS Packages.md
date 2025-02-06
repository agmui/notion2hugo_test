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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2DLSABA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG4bEPCYoENYdwrokvSkb%2FmH82pcfgo8ky9k62%2BC9h65AiBhLld2%2B%2Fp%2F5CNJxrZU8A3I6aioqxG7l5UQp%2Bk1dXWifyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQGypbLtoIhRe8VrzKtwDHD5rTgH0wkSmhjeb4tnQU1eGogsc6IOQ14X3jmFU1eiJ68ky4df4kZ1DHRN8kV6XcPloNGazf%2FkMADactk3JGNi5s%2BXy1QJmWCfuq7ojz09ub5sVHfQx1MsAzoxJ3BVt0uRn5ld1%2FhtQYSwBPEuilkSGSA%2Bz6QZf3sdBqv8T4yKs6HAA3LWTcGB7fMa4ZnY2vfLTUDl4mHjKWC8ZzgRm909CkdMwUpDEy7%2BtB6buTD7A9qagn022YDcFATpSOsGPrpuEGpuy8qcIKuyHdrHRboODP0geHG1wFjueKtz7iIO7v1ix4ofc%2FsFD8jVu04tbOPWPQWBOffHu%2Bc2vRrk%2FmihVK1SJC3P5pYueG2Vx6jCPWjaqdOe338Iq1qO0zuDVAg%2BoFAs7WvIPG%2FOW0904fYpx1IUdRvdk4XSe67PaT%2Bv61WtU6XTWI719SdBGxWAIGmHNxl1CnhowNFzDvMLm8HHeqsKcSEtVAYdIi0AUcEAkRjKVj4BTVSa1Fj8yx7yKdmWk3HtY6SeL5HXfyMs4cvg4yX0HZgAEIw5PbMEZFYmjq%2Bw6A4biUyzjfNP4qW%2FqtXeKo8PP2PzuhYFaAnD8x09gpCspHcT0AiTUKnELlNKd8UTv5ulzsA0E%2BDUwsZ2TvQY6pgHR7f%2FoJ9H%2B6Kh2DW5URmmNDma%2FHtQiYas6jE%2BTGolhdnatBRGqUro2Ii17pC%2BZHlXms4GqXciOojpw3WOwG26aQoWWASm%2FbrD%2BlBMeHuYNP34fgpV6SY90s9N5FFwYzTEBOozgRxHkYFwxpViDZ6VqUGBs79oapNuvdKUsuDn0OL1qXfqXxCPgrsTMWYfkVuw%2FnxoDT92tbRoGrcFQd2aPCc5itUvb&X-Amz-Signature=59adef4deb05cddce86e3ed42317cd828f79a05fd952fcce3547cc95a246cf26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2DLSABA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG4bEPCYoENYdwrokvSkb%2FmH82pcfgo8ky9k62%2BC9h65AiBhLld2%2B%2Fp%2F5CNJxrZU8A3I6aioqxG7l5UQp%2Bk1dXWifyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQGypbLtoIhRe8VrzKtwDHD5rTgH0wkSmhjeb4tnQU1eGogsc6IOQ14X3jmFU1eiJ68ky4df4kZ1DHRN8kV6XcPloNGazf%2FkMADactk3JGNi5s%2BXy1QJmWCfuq7ojz09ub5sVHfQx1MsAzoxJ3BVt0uRn5ld1%2FhtQYSwBPEuilkSGSA%2Bz6QZf3sdBqv8T4yKs6HAA3LWTcGB7fMa4ZnY2vfLTUDl4mHjKWC8ZzgRm909CkdMwUpDEy7%2BtB6buTD7A9qagn022YDcFATpSOsGPrpuEGpuy8qcIKuyHdrHRboODP0geHG1wFjueKtz7iIO7v1ix4ofc%2FsFD8jVu04tbOPWPQWBOffHu%2Bc2vRrk%2FmihVK1SJC3P5pYueG2Vx6jCPWjaqdOe338Iq1qO0zuDVAg%2BoFAs7WvIPG%2FOW0904fYpx1IUdRvdk4XSe67PaT%2Bv61WtU6XTWI719SdBGxWAIGmHNxl1CnhowNFzDvMLm8HHeqsKcSEtVAYdIi0AUcEAkRjKVj4BTVSa1Fj8yx7yKdmWk3HtY6SeL5HXfyMs4cvg4yX0HZgAEIw5PbMEZFYmjq%2Bw6A4biUyzjfNP4qW%2FqtXeKo8PP2PzuhYFaAnD8x09gpCspHcT0AiTUKnELlNKd8UTv5ulzsA0E%2BDUwsZ2TvQY6pgHR7f%2FoJ9H%2B6Kh2DW5URmmNDma%2FHtQiYas6jE%2BTGolhdnatBRGqUro2Ii17pC%2BZHlXms4GqXciOojpw3WOwG26aQoWWASm%2FbrD%2BlBMeHuYNP34fgpV6SY90s9N5FFwYzTEBOozgRxHkYFwxpViDZ6VqUGBs79oapNuvdKUsuDn0OL1qXfqXxCPgrsTMWYfkVuw%2FnxoDT92tbRoGrcFQd2aPCc5itUvb&X-Amz-Signature=e6ccabf9743692b44221c0a1f908cb7138188676e18944b120ae74ac161f4385&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2DLSABA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG4bEPCYoENYdwrokvSkb%2FmH82pcfgo8ky9k62%2BC9h65AiBhLld2%2B%2Fp%2F5CNJxrZU8A3I6aioqxG7l5UQp%2Bk1dXWifyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQGypbLtoIhRe8VrzKtwDHD5rTgH0wkSmhjeb4tnQU1eGogsc6IOQ14X3jmFU1eiJ68ky4df4kZ1DHRN8kV6XcPloNGazf%2FkMADactk3JGNi5s%2BXy1QJmWCfuq7ojz09ub5sVHfQx1MsAzoxJ3BVt0uRn5ld1%2FhtQYSwBPEuilkSGSA%2Bz6QZf3sdBqv8T4yKs6HAA3LWTcGB7fMa4ZnY2vfLTUDl4mHjKWC8ZzgRm909CkdMwUpDEy7%2BtB6buTD7A9qagn022YDcFATpSOsGPrpuEGpuy8qcIKuyHdrHRboODP0geHG1wFjueKtz7iIO7v1ix4ofc%2FsFD8jVu04tbOPWPQWBOffHu%2Bc2vRrk%2FmihVK1SJC3P5pYueG2Vx6jCPWjaqdOe338Iq1qO0zuDVAg%2BoFAs7WvIPG%2FOW0904fYpx1IUdRvdk4XSe67PaT%2Bv61WtU6XTWI719SdBGxWAIGmHNxl1CnhowNFzDvMLm8HHeqsKcSEtVAYdIi0AUcEAkRjKVj4BTVSa1Fj8yx7yKdmWk3HtY6SeL5HXfyMs4cvg4yX0HZgAEIw5PbMEZFYmjq%2Bw6A4biUyzjfNP4qW%2FqtXeKo8PP2PzuhYFaAnD8x09gpCspHcT0AiTUKnELlNKd8UTv5ulzsA0E%2BDUwsZ2TvQY6pgHR7f%2FoJ9H%2B6Kh2DW5URmmNDma%2FHtQiYas6jE%2BTGolhdnatBRGqUro2Ii17pC%2BZHlXms4GqXciOojpw3WOwG26aQoWWASm%2FbrD%2BlBMeHuYNP34fgpV6SY90s9N5FFwYzTEBOozgRxHkYFwxpViDZ6VqUGBs79oapNuvdKUsuDn0OL1qXfqXxCPgrsTMWYfkVuw%2FnxoDT92tbRoGrcFQd2aPCc5itUvb&X-Amz-Signature=1619ce3f4298cacb8d2cc78a338062d5b4b62fe7814bcc135e3d705adf4c4cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2DLSABA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG4bEPCYoENYdwrokvSkb%2FmH82pcfgo8ky9k62%2BC9h65AiBhLld2%2B%2Fp%2F5CNJxrZU8A3I6aioqxG7l5UQp%2Bk1dXWifyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQGypbLtoIhRe8VrzKtwDHD5rTgH0wkSmhjeb4tnQU1eGogsc6IOQ14X3jmFU1eiJ68ky4df4kZ1DHRN8kV6XcPloNGazf%2FkMADactk3JGNi5s%2BXy1QJmWCfuq7ojz09ub5sVHfQx1MsAzoxJ3BVt0uRn5ld1%2FhtQYSwBPEuilkSGSA%2Bz6QZf3sdBqv8T4yKs6HAA3LWTcGB7fMa4ZnY2vfLTUDl4mHjKWC8ZzgRm909CkdMwUpDEy7%2BtB6buTD7A9qagn022YDcFATpSOsGPrpuEGpuy8qcIKuyHdrHRboODP0geHG1wFjueKtz7iIO7v1ix4ofc%2FsFD8jVu04tbOPWPQWBOffHu%2Bc2vRrk%2FmihVK1SJC3P5pYueG2Vx6jCPWjaqdOe338Iq1qO0zuDVAg%2BoFAs7WvIPG%2FOW0904fYpx1IUdRvdk4XSe67PaT%2Bv61WtU6XTWI719SdBGxWAIGmHNxl1CnhowNFzDvMLm8HHeqsKcSEtVAYdIi0AUcEAkRjKVj4BTVSa1Fj8yx7yKdmWk3HtY6SeL5HXfyMs4cvg4yX0HZgAEIw5PbMEZFYmjq%2Bw6A4biUyzjfNP4qW%2FqtXeKo8PP2PzuhYFaAnD8x09gpCspHcT0AiTUKnELlNKd8UTv5ulzsA0E%2BDUwsZ2TvQY6pgHR7f%2FoJ9H%2B6Kh2DW5URmmNDma%2FHtQiYas6jE%2BTGolhdnatBRGqUro2Ii17pC%2BZHlXms4GqXciOojpw3WOwG26aQoWWASm%2FbrD%2BlBMeHuYNP34fgpV6SY90s9N5FFwYzTEBOozgRxHkYFwxpViDZ6VqUGBs79oapNuvdKUsuDn0OL1qXfqXxCPgrsTMWYfkVuw%2FnxoDT92tbRoGrcFQd2aPCc5itUvb&X-Amz-Signature=7534c1d19d7a804331c452bb73de12aa30062afc25196e8a90204d4feebf3474&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2DLSABA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG4bEPCYoENYdwrokvSkb%2FmH82pcfgo8ky9k62%2BC9h65AiBhLld2%2B%2Fp%2F5CNJxrZU8A3I6aioqxG7l5UQp%2Bk1dXWifyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQGypbLtoIhRe8VrzKtwDHD5rTgH0wkSmhjeb4tnQU1eGogsc6IOQ14X3jmFU1eiJ68ky4df4kZ1DHRN8kV6XcPloNGazf%2FkMADactk3JGNi5s%2BXy1QJmWCfuq7ojz09ub5sVHfQx1MsAzoxJ3BVt0uRn5ld1%2FhtQYSwBPEuilkSGSA%2Bz6QZf3sdBqv8T4yKs6HAA3LWTcGB7fMa4ZnY2vfLTUDl4mHjKWC8ZzgRm909CkdMwUpDEy7%2BtB6buTD7A9qagn022YDcFATpSOsGPrpuEGpuy8qcIKuyHdrHRboODP0geHG1wFjueKtz7iIO7v1ix4ofc%2FsFD8jVu04tbOPWPQWBOffHu%2Bc2vRrk%2FmihVK1SJC3P5pYueG2Vx6jCPWjaqdOe338Iq1qO0zuDVAg%2BoFAs7WvIPG%2FOW0904fYpx1IUdRvdk4XSe67PaT%2Bv61WtU6XTWI719SdBGxWAIGmHNxl1CnhowNFzDvMLm8HHeqsKcSEtVAYdIi0AUcEAkRjKVj4BTVSa1Fj8yx7yKdmWk3HtY6SeL5HXfyMs4cvg4yX0HZgAEIw5PbMEZFYmjq%2Bw6A4biUyzjfNP4qW%2FqtXeKo8PP2PzuhYFaAnD8x09gpCspHcT0AiTUKnELlNKd8UTv5ulzsA0E%2BDUwsZ2TvQY6pgHR7f%2FoJ9H%2B6Kh2DW5URmmNDma%2FHtQiYas6jE%2BTGolhdnatBRGqUro2Ii17pC%2BZHlXms4GqXciOojpw3WOwG26aQoWWASm%2FbrD%2BlBMeHuYNP34fgpV6SY90s9N5FFwYzTEBOozgRxHkYFwxpViDZ6VqUGBs79oapNuvdKUsuDn0OL1qXfqXxCPgrsTMWYfkVuw%2FnxoDT92tbRoGrcFQd2aPCc5itUvb&X-Amz-Signature=3a812252f4a8072f5b7721123bb5ebe849520b60e028b1125aec594834395d48&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2DLSABA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG4bEPCYoENYdwrokvSkb%2FmH82pcfgo8ky9k62%2BC9h65AiBhLld2%2B%2Fp%2F5CNJxrZU8A3I6aioqxG7l5UQp%2Bk1dXWifyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQGypbLtoIhRe8VrzKtwDHD5rTgH0wkSmhjeb4tnQU1eGogsc6IOQ14X3jmFU1eiJ68ky4df4kZ1DHRN8kV6XcPloNGazf%2FkMADactk3JGNi5s%2BXy1QJmWCfuq7ojz09ub5sVHfQx1MsAzoxJ3BVt0uRn5ld1%2FhtQYSwBPEuilkSGSA%2Bz6QZf3sdBqv8T4yKs6HAA3LWTcGB7fMa4ZnY2vfLTUDl4mHjKWC8ZzgRm909CkdMwUpDEy7%2BtB6buTD7A9qagn022YDcFATpSOsGPrpuEGpuy8qcIKuyHdrHRboODP0geHG1wFjueKtz7iIO7v1ix4ofc%2FsFD8jVu04tbOPWPQWBOffHu%2Bc2vRrk%2FmihVK1SJC3P5pYueG2Vx6jCPWjaqdOe338Iq1qO0zuDVAg%2BoFAs7WvIPG%2FOW0904fYpx1IUdRvdk4XSe67PaT%2Bv61WtU6XTWI719SdBGxWAIGmHNxl1CnhowNFzDvMLm8HHeqsKcSEtVAYdIi0AUcEAkRjKVj4BTVSa1Fj8yx7yKdmWk3HtY6SeL5HXfyMs4cvg4yX0HZgAEIw5PbMEZFYmjq%2Bw6A4biUyzjfNP4qW%2FqtXeKo8PP2PzuhYFaAnD8x09gpCspHcT0AiTUKnELlNKd8UTv5ulzsA0E%2BDUwsZ2TvQY6pgHR7f%2FoJ9H%2B6Kh2DW5URmmNDma%2FHtQiYas6jE%2BTGolhdnatBRGqUro2Ii17pC%2BZHlXms4GqXciOojpw3WOwG26aQoWWASm%2FbrD%2BlBMeHuYNP34fgpV6SY90s9N5FFwYzTEBOozgRxHkYFwxpViDZ6VqUGBs79oapNuvdKUsuDn0OL1qXfqXxCPgrsTMWYfkVuw%2FnxoDT92tbRoGrcFQd2aPCc5itUvb&X-Amz-Signature=18f364cc84b425008cbd5859b9fe625d3927bd56a197232d39e33568d399ba41&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2DLSABA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG4bEPCYoENYdwrokvSkb%2FmH82pcfgo8ky9k62%2BC9h65AiBhLld2%2B%2Fp%2F5CNJxrZU8A3I6aioqxG7l5UQp%2Bk1dXWifyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQGypbLtoIhRe8VrzKtwDHD5rTgH0wkSmhjeb4tnQU1eGogsc6IOQ14X3jmFU1eiJ68ky4df4kZ1DHRN8kV6XcPloNGazf%2FkMADactk3JGNi5s%2BXy1QJmWCfuq7ojz09ub5sVHfQx1MsAzoxJ3BVt0uRn5ld1%2FhtQYSwBPEuilkSGSA%2Bz6QZf3sdBqv8T4yKs6HAA3LWTcGB7fMa4ZnY2vfLTUDl4mHjKWC8ZzgRm909CkdMwUpDEy7%2BtB6buTD7A9qagn022YDcFATpSOsGPrpuEGpuy8qcIKuyHdrHRboODP0geHG1wFjueKtz7iIO7v1ix4ofc%2FsFD8jVu04tbOPWPQWBOffHu%2Bc2vRrk%2FmihVK1SJC3P5pYueG2Vx6jCPWjaqdOe338Iq1qO0zuDVAg%2BoFAs7WvIPG%2FOW0904fYpx1IUdRvdk4XSe67PaT%2Bv61WtU6XTWI719SdBGxWAIGmHNxl1CnhowNFzDvMLm8HHeqsKcSEtVAYdIi0AUcEAkRjKVj4BTVSa1Fj8yx7yKdmWk3HtY6SeL5HXfyMs4cvg4yX0HZgAEIw5PbMEZFYmjq%2Bw6A4biUyzjfNP4qW%2FqtXeKo8PP2PzuhYFaAnD8x09gpCspHcT0AiTUKnELlNKd8UTv5ulzsA0E%2BDUwsZ2TvQY6pgHR7f%2FoJ9H%2B6Kh2DW5URmmNDma%2FHtQiYas6jE%2BTGolhdnatBRGqUro2Ii17pC%2BZHlXms4GqXciOojpw3WOwG26aQoWWASm%2FbrD%2BlBMeHuYNP34fgpV6SY90s9N5FFwYzTEBOozgRxHkYFwxpViDZ6VqUGBs79oapNuvdKUsuDn0OL1qXfqXxCPgrsTMWYfkVuw%2FnxoDT92tbRoGrcFQd2aPCc5itUvb&X-Amz-Signature=baf851ef24a431efbd651a256b40cefebb054c593e890067099fbcfdcc5c465a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
