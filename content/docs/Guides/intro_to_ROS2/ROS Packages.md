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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7QBWF2B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAmCb9m6SmKPhqtTc4vs%2FQjR6P36k8s3e6csG2tHv%2FdiAiB0xSug0tKrAtRb2O6sqUtaIQDAxCkEIUbL%2BXFHgeDGnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAvntND%2BgpupqcIqWKtwD%2BQRAcagAjX51MDvQ8MOlVNm%2Bphdu3ieyFhY0wy9Xloy6xvfAgXUUrHU4NrxZC3GQWNl5QNuvkPv2BmJTn%2BSekECqWaR0jGk2cLN11V9YBBb4qlz%2BRPqK2fP3gMr6XSGKW%2B8jF9zssLuzzh%2FILXLFCw23NMdBedBjKc7LAtsAP1pTQa2y2PN%2BapiiMAJESj2j17ZOv0q%2Fg777%2Fou3pcCryhQ%2B9byGXaSAbNeDUHrmE5gmrnXS4n%2FkmnyBTcQ6fKdB1DC8IgGbYoVyFNDrbA4KiKPwfk2xatpDtNvsfBeoEAErN7KsrOA2Auhg6lzsA9ujW11vH60xmsXsq7FhK%2B6W8S%2F7RsPOvCr4Y4lnjH%2BmH7tNZxdDDNicZgw0hbCv6e6w17TubsBx%2FnwmIv3d%2BJC6rOPdKLMUovh%2F6Z0%2F%2FR7vcqvx6FhHnfoaoX72JEqKrQDVDXArmAuGgHWZhDN7B0Qz1%2BxvW3kFicW3sT9yDEQmIShDkmuEgEoeDgnPSWoO04NEzZGQRjbSDnd%2BW6yy8IbqZA65%2FTVWnKf17kM2OBXNCDonVrqA3rYSh2UzNaZzuYRqp4sz75YoAlAxYKSdnwc0lvYv3GmgvY%2BQ1M%2F5eZOAp2cQ%2BsdnNiYD79sbES4w3r3CwQY6pgEIl9lmHFdnZyIXAJyFey6Cxp%2Fhd9ey8BLz1Ubz91YABxE0lJo%2FZbxOINwNf%2FtGZ2Ku%2BdDItaP0kGgIAhK69oAIau1svJJ5tYnCn1VMjbTHCIHIr97EtCU2%2FZEprEZ8zF7b3VFDkWz4uCBb1xBr18%2F3PxBGLv2T%2FNQaPTgziNA0zy40%2FrXjK64cOHuRKMeDOYbZogAFmUdRvxT22wFmYUxtY3HyQPyE&X-Amz-Signature=7fbcc276a1ee169d0fac11fb102696d48cf734d139a32327dfdca5f4a6457d24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7QBWF2B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAmCb9m6SmKPhqtTc4vs%2FQjR6P36k8s3e6csG2tHv%2FdiAiB0xSug0tKrAtRb2O6sqUtaIQDAxCkEIUbL%2BXFHgeDGnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAvntND%2BgpupqcIqWKtwD%2BQRAcagAjX51MDvQ8MOlVNm%2Bphdu3ieyFhY0wy9Xloy6xvfAgXUUrHU4NrxZC3GQWNl5QNuvkPv2BmJTn%2BSekECqWaR0jGk2cLN11V9YBBb4qlz%2BRPqK2fP3gMr6XSGKW%2B8jF9zssLuzzh%2FILXLFCw23NMdBedBjKc7LAtsAP1pTQa2y2PN%2BapiiMAJESj2j17ZOv0q%2Fg777%2Fou3pcCryhQ%2B9byGXaSAbNeDUHrmE5gmrnXS4n%2FkmnyBTcQ6fKdB1DC8IgGbYoVyFNDrbA4KiKPwfk2xatpDtNvsfBeoEAErN7KsrOA2Auhg6lzsA9ujW11vH60xmsXsq7FhK%2B6W8S%2F7RsPOvCr4Y4lnjH%2BmH7tNZxdDDNicZgw0hbCv6e6w17TubsBx%2FnwmIv3d%2BJC6rOPdKLMUovh%2F6Z0%2F%2FR7vcqvx6FhHnfoaoX72JEqKrQDVDXArmAuGgHWZhDN7B0Qz1%2BxvW3kFicW3sT9yDEQmIShDkmuEgEoeDgnPSWoO04NEzZGQRjbSDnd%2BW6yy8IbqZA65%2FTVWnKf17kM2OBXNCDonVrqA3rYSh2UzNaZzuYRqp4sz75YoAlAxYKSdnwc0lvYv3GmgvY%2BQ1M%2F5eZOAp2cQ%2BsdnNiYD79sbES4w3r3CwQY6pgEIl9lmHFdnZyIXAJyFey6Cxp%2Fhd9ey8BLz1Ubz91YABxE0lJo%2FZbxOINwNf%2FtGZ2Ku%2BdDItaP0kGgIAhK69oAIau1svJJ5tYnCn1VMjbTHCIHIr97EtCU2%2FZEprEZ8zF7b3VFDkWz4uCBb1xBr18%2F3PxBGLv2T%2FNQaPTgziNA0zy40%2FrXjK64cOHuRKMeDOYbZogAFmUdRvxT22wFmYUxtY3HyQPyE&X-Amz-Signature=ffe45363c5474b96c20927d77834925d7f75d2966063e1aa5d04bad4ac27ce64&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7QBWF2B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAmCb9m6SmKPhqtTc4vs%2FQjR6P36k8s3e6csG2tHv%2FdiAiB0xSug0tKrAtRb2O6sqUtaIQDAxCkEIUbL%2BXFHgeDGnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAvntND%2BgpupqcIqWKtwD%2BQRAcagAjX51MDvQ8MOlVNm%2Bphdu3ieyFhY0wy9Xloy6xvfAgXUUrHU4NrxZC3GQWNl5QNuvkPv2BmJTn%2BSekECqWaR0jGk2cLN11V9YBBb4qlz%2BRPqK2fP3gMr6XSGKW%2B8jF9zssLuzzh%2FILXLFCw23NMdBedBjKc7LAtsAP1pTQa2y2PN%2BapiiMAJESj2j17ZOv0q%2Fg777%2Fou3pcCryhQ%2B9byGXaSAbNeDUHrmE5gmrnXS4n%2FkmnyBTcQ6fKdB1DC8IgGbYoVyFNDrbA4KiKPwfk2xatpDtNvsfBeoEAErN7KsrOA2Auhg6lzsA9ujW11vH60xmsXsq7FhK%2B6W8S%2F7RsPOvCr4Y4lnjH%2BmH7tNZxdDDNicZgw0hbCv6e6w17TubsBx%2FnwmIv3d%2BJC6rOPdKLMUovh%2F6Z0%2F%2FR7vcqvx6FhHnfoaoX72JEqKrQDVDXArmAuGgHWZhDN7B0Qz1%2BxvW3kFicW3sT9yDEQmIShDkmuEgEoeDgnPSWoO04NEzZGQRjbSDnd%2BW6yy8IbqZA65%2FTVWnKf17kM2OBXNCDonVrqA3rYSh2UzNaZzuYRqp4sz75YoAlAxYKSdnwc0lvYv3GmgvY%2BQ1M%2F5eZOAp2cQ%2BsdnNiYD79sbES4w3r3CwQY6pgEIl9lmHFdnZyIXAJyFey6Cxp%2Fhd9ey8BLz1Ubz91YABxE0lJo%2FZbxOINwNf%2FtGZ2Ku%2BdDItaP0kGgIAhK69oAIau1svJJ5tYnCn1VMjbTHCIHIr97EtCU2%2FZEprEZ8zF7b3VFDkWz4uCBb1xBr18%2F3PxBGLv2T%2FNQaPTgziNA0zy40%2FrXjK64cOHuRKMeDOYbZogAFmUdRvxT22wFmYUxtY3HyQPyE&X-Amz-Signature=4d762624d98dd9200e239670439c756bbf12d7c6ab15941fba3c6768287d44ea&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7QBWF2B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAmCb9m6SmKPhqtTc4vs%2FQjR6P36k8s3e6csG2tHv%2FdiAiB0xSug0tKrAtRb2O6sqUtaIQDAxCkEIUbL%2BXFHgeDGnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAvntND%2BgpupqcIqWKtwD%2BQRAcagAjX51MDvQ8MOlVNm%2Bphdu3ieyFhY0wy9Xloy6xvfAgXUUrHU4NrxZC3GQWNl5QNuvkPv2BmJTn%2BSekECqWaR0jGk2cLN11V9YBBb4qlz%2BRPqK2fP3gMr6XSGKW%2B8jF9zssLuzzh%2FILXLFCw23NMdBedBjKc7LAtsAP1pTQa2y2PN%2BapiiMAJESj2j17ZOv0q%2Fg777%2Fou3pcCryhQ%2B9byGXaSAbNeDUHrmE5gmrnXS4n%2FkmnyBTcQ6fKdB1DC8IgGbYoVyFNDrbA4KiKPwfk2xatpDtNvsfBeoEAErN7KsrOA2Auhg6lzsA9ujW11vH60xmsXsq7FhK%2B6W8S%2F7RsPOvCr4Y4lnjH%2BmH7tNZxdDDNicZgw0hbCv6e6w17TubsBx%2FnwmIv3d%2BJC6rOPdKLMUovh%2F6Z0%2F%2FR7vcqvx6FhHnfoaoX72JEqKrQDVDXArmAuGgHWZhDN7B0Qz1%2BxvW3kFicW3sT9yDEQmIShDkmuEgEoeDgnPSWoO04NEzZGQRjbSDnd%2BW6yy8IbqZA65%2FTVWnKf17kM2OBXNCDonVrqA3rYSh2UzNaZzuYRqp4sz75YoAlAxYKSdnwc0lvYv3GmgvY%2BQ1M%2F5eZOAp2cQ%2BsdnNiYD79sbES4w3r3CwQY6pgEIl9lmHFdnZyIXAJyFey6Cxp%2Fhd9ey8BLz1Ubz91YABxE0lJo%2FZbxOINwNf%2FtGZ2Ku%2BdDItaP0kGgIAhK69oAIau1svJJ5tYnCn1VMjbTHCIHIr97EtCU2%2FZEprEZ8zF7b3VFDkWz4uCBb1xBr18%2F3PxBGLv2T%2FNQaPTgziNA0zy40%2FrXjK64cOHuRKMeDOYbZogAFmUdRvxT22wFmYUxtY3HyQPyE&X-Amz-Signature=ab533bc408ac26b83ed32264db7452846ce9189268bea1279bd39ec14f308013&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7QBWF2B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAmCb9m6SmKPhqtTc4vs%2FQjR6P36k8s3e6csG2tHv%2FdiAiB0xSug0tKrAtRb2O6sqUtaIQDAxCkEIUbL%2BXFHgeDGnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAvntND%2BgpupqcIqWKtwD%2BQRAcagAjX51MDvQ8MOlVNm%2Bphdu3ieyFhY0wy9Xloy6xvfAgXUUrHU4NrxZC3GQWNl5QNuvkPv2BmJTn%2BSekECqWaR0jGk2cLN11V9YBBb4qlz%2BRPqK2fP3gMr6XSGKW%2B8jF9zssLuzzh%2FILXLFCw23NMdBedBjKc7LAtsAP1pTQa2y2PN%2BapiiMAJESj2j17ZOv0q%2Fg777%2Fou3pcCryhQ%2B9byGXaSAbNeDUHrmE5gmrnXS4n%2FkmnyBTcQ6fKdB1DC8IgGbYoVyFNDrbA4KiKPwfk2xatpDtNvsfBeoEAErN7KsrOA2Auhg6lzsA9ujW11vH60xmsXsq7FhK%2B6W8S%2F7RsPOvCr4Y4lnjH%2BmH7tNZxdDDNicZgw0hbCv6e6w17TubsBx%2FnwmIv3d%2BJC6rOPdKLMUovh%2F6Z0%2F%2FR7vcqvx6FhHnfoaoX72JEqKrQDVDXArmAuGgHWZhDN7B0Qz1%2BxvW3kFicW3sT9yDEQmIShDkmuEgEoeDgnPSWoO04NEzZGQRjbSDnd%2BW6yy8IbqZA65%2FTVWnKf17kM2OBXNCDonVrqA3rYSh2UzNaZzuYRqp4sz75YoAlAxYKSdnwc0lvYv3GmgvY%2BQ1M%2F5eZOAp2cQ%2BsdnNiYD79sbES4w3r3CwQY6pgEIl9lmHFdnZyIXAJyFey6Cxp%2Fhd9ey8BLz1Ubz91YABxE0lJo%2FZbxOINwNf%2FtGZ2Ku%2BdDItaP0kGgIAhK69oAIau1svJJ5tYnCn1VMjbTHCIHIr97EtCU2%2FZEprEZ8zF7b3VFDkWz4uCBb1xBr18%2F3PxBGLv2T%2FNQaPTgziNA0zy40%2FrXjK64cOHuRKMeDOYbZogAFmUdRvxT22wFmYUxtY3HyQPyE&X-Amz-Signature=168a64db5520d231c8ec38680da7eec2b464f5fbbb866c555a1be46c6f1dcd03&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7QBWF2B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAmCb9m6SmKPhqtTc4vs%2FQjR6P36k8s3e6csG2tHv%2FdiAiB0xSug0tKrAtRb2O6sqUtaIQDAxCkEIUbL%2BXFHgeDGnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAvntND%2BgpupqcIqWKtwD%2BQRAcagAjX51MDvQ8MOlVNm%2Bphdu3ieyFhY0wy9Xloy6xvfAgXUUrHU4NrxZC3GQWNl5QNuvkPv2BmJTn%2BSekECqWaR0jGk2cLN11V9YBBb4qlz%2BRPqK2fP3gMr6XSGKW%2B8jF9zssLuzzh%2FILXLFCw23NMdBedBjKc7LAtsAP1pTQa2y2PN%2BapiiMAJESj2j17ZOv0q%2Fg777%2Fou3pcCryhQ%2B9byGXaSAbNeDUHrmE5gmrnXS4n%2FkmnyBTcQ6fKdB1DC8IgGbYoVyFNDrbA4KiKPwfk2xatpDtNvsfBeoEAErN7KsrOA2Auhg6lzsA9ujW11vH60xmsXsq7FhK%2B6W8S%2F7RsPOvCr4Y4lnjH%2BmH7tNZxdDDNicZgw0hbCv6e6w17TubsBx%2FnwmIv3d%2BJC6rOPdKLMUovh%2F6Z0%2F%2FR7vcqvx6FhHnfoaoX72JEqKrQDVDXArmAuGgHWZhDN7B0Qz1%2BxvW3kFicW3sT9yDEQmIShDkmuEgEoeDgnPSWoO04NEzZGQRjbSDnd%2BW6yy8IbqZA65%2FTVWnKf17kM2OBXNCDonVrqA3rYSh2UzNaZzuYRqp4sz75YoAlAxYKSdnwc0lvYv3GmgvY%2BQ1M%2F5eZOAp2cQ%2BsdnNiYD79sbES4w3r3CwQY6pgEIl9lmHFdnZyIXAJyFey6Cxp%2Fhd9ey8BLz1Ubz91YABxE0lJo%2FZbxOINwNf%2FtGZ2Ku%2BdDItaP0kGgIAhK69oAIau1svJJ5tYnCn1VMjbTHCIHIr97EtCU2%2FZEprEZ8zF7b3VFDkWz4uCBb1xBr18%2F3PxBGLv2T%2FNQaPTgziNA0zy40%2FrXjK64cOHuRKMeDOYbZogAFmUdRvxT22wFmYUxtY3HyQPyE&X-Amz-Signature=59251ccd73f0959d278a9b5f1d2c56903534c7ec509a1c157ab527b1243df088&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7QBWF2B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAmCb9m6SmKPhqtTc4vs%2FQjR6P36k8s3e6csG2tHv%2FdiAiB0xSug0tKrAtRb2O6sqUtaIQDAxCkEIUbL%2BXFHgeDGnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAvntND%2BgpupqcIqWKtwD%2BQRAcagAjX51MDvQ8MOlVNm%2Bphdu3ieyFhY0wy9Xloy6xvfAgXUUrHU4NrxZC3GQWNl5QNuvkPv2BmJTn%2BSekECqWaR0jGk2cLN11V9YBBb4qlz%2BRPqK2fP3gMr6XSGKW%2B8jF9zssLuzzh%2FILXLFCw23NMdBedBjKc7LAtsAP1pTQa2y2PN%2BapiiMAJESj2j17ZOv0q%2Fg777%2Fou3pcCryhQ%2B9byGXaSAbNeDUHrmE5gmrnXS4n%2FkmnyBTcQ6fKdB1DC8IgGbYoVyFNDrbA4KiKPwfk2xatpDtNvsfBeoEAErN7KsrOA2Auhg6lzsA9ujW11vH60xmsXsq7FhK%2B6W8S%2F7RsPOvCr4Y4lnjH%2BmH7tNZxdDDNicZgw0hbCv6e6w17TubsBx%2FnwmIv3d%2BJC6rOPdKLMUovh%2F6Z0%2F%2FR7vcqvx6FhHnfoaoX72JEqKrQDVDXArmAuGgHWZhDN7B0Qz1%2BxvW3kFicW3sT9yDEQmIShDkmuEgEoeDgnPSWoO04NEzZGQRjbSDnd%2BW6yy8IbqZA65%2FTVWnKf17kM2OBXNCDonVrqA3rYSh2UzNaZzuYRqp4sz75YoAlAxYKSdnwc0lvYv3GmgvY%2BQ1M%2F5eZOAp2cQ%2BsdnNiYD79sbES4w3r3CwQY6pgEIl9lmHFdnZyIXAJyFey6Cxp%2Fhd9ey8BLz1Ubz91YABxE0lJo%2FZbxOINwNf%2FtGZ2Ku%2BdDItaP0kGgIAhK69oAIau1svJJ5tYnCn1VMjbTHCIHIr97EtCU2%2FZEprEZ8zF7b3VFDkWz4uCBb1xBr18%2F3PxBGLv2T%2FNQaPTgziNA0zy40%2FrXjK64cOHuRKMeDOYbZogAFmUdRvxT22wFmYUxtY3HyQPyE&X-Amz-Signature=7842670ecfe85fdc66e8ebc60b80523eb525f45d473f40ec195123215057da44&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
