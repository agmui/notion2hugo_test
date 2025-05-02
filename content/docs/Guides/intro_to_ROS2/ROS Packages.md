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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZBAF65%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIE6V4w%2BxFu7aY7BwfWqGYMPR87BOYbCY3RlL3kFWBq55AiBI%2F%2Bom7xFjmLAoTD6Stq%2Fbvonw91aOcFXVe%2BnsZCK%2F2yqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzdWTd4ljvgd1AxW1KtwDY%2Fuc6n76LT52u5%2BUB6lDll5gwT81YHZCQtzmTg9IknKJhjP%2B%2BOK4JRwUzrO0GV2iYhOOxnumyBeC3vCZOCQjfvUeD9VpI4IQAf1FZ6OZ97%2BZ8q2g7nD2IbxLXiKQsDF1Ae%2BbBmW12lWKXrgnZMzXOfH15zaInGI1yB4NBvfODjx1uhdvLCj86JKUiV6MfnCL2YFFM79QDRtGZg8wzGN4lEMIzjbiDjkWxIfG4%2F0wns9nNCmk6dnmp4l16MnFRg0kRJzeMX7b%2BTAVUHcOAP8dmNVLSoCq5LygYQqVnf9T5AaSyXteUqFo1zRSZCqu3NKBg6N0jPXF9kP3%2FjFnKHja%2B%2BEl2E6yZ6ril2UreAXQxZLRyl9JD48%2F3tX%2Fuuoa7oYRn7u7sCPUJfM5xPKS4H6p0%2FBdo6Z52zpvgLxgGZeESPLvcWFY25e%2BSNNRax9Xvl8kJAECcwhg4KEOeZA1CeDkETe%2B0fh2rSliVxjVNetzMG5mshXTzSGfmG%2FwWq3oPpyKZzk6wtnHNBQUDDH%2B9jdza0BcQxHbWNFL0peBNNjn6WT1woWIcIbAI%2BoWsq5%2FbjmLCdtbRgvfXCKIPlIzgHcA9mNbT7xCbnXSBmAba47wyoVfYb4og1ZDogcOnc8wi9fSwAY6pgE%2F%2BsbgB9d37d6ndFcE22BSJmSX3NBhhfuiIm8QRHycSv1UArPIhFT1mZzNPkRIL3bGkkB1Wf2LPn6zbQ8ZtTpnOT36cJ9V9LoWbctinpB0Z0er4pkkJMexSrergSd%2Fv1Y2A07Ci31U%2FYfqx3fOwXJTC6tOIY7K%2BShDo6QjqahxM53SNU%2F%2FsyOGPMemOD%2Fm8jA0hv0IjbLwGSNC2CwOUEpXHDaNaiAq&X-Amz-Signature=9b530d0a3fcd02dc4ee7680dddef922559422f66b5165ec9b6ad1ffe7fc7db8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZBAF65%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIE6V4w%2BxFu7aY7BwfWqGYMPR87BOYbCY3RlL3kFWBq55AiBI%2F%2Bom7xFjmLAoTD6Stq%2Fbvonw91aOcFXVe%2BnsZCK%2F2yqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzdWTd4ljvgd1AxW1KtwDY%2Fuc6n76LT52u5%2BUB6lDll5gwT81YHZCQtzmTg9IknKJhjP%2B%2BOK4JRwUzrO0GV2iYhOOxnumyBeC3vCZOCQjfvUeD9VpI4IQAf1FZ6OZ97%2BZ8q2g7nD2IbxLXiKQsDF1Ae%2BbBmW12lWKXrgnZMzXOfH15zaInGI1yB4NBvfODjx1uhdvLCj86JKUiV6MfnCL2YFFM79QDRtGZg8wzGN4lEMIzjbiDjkWxIfG4%2F0wns9nNCmk6dnmp4l16MnFRg0kRJzeMX7b%2BTAVUHcOAP8dmNVLSoCq5LygYQqVnf9T5AaSyXteUqFo1zRSZCqu3NKBg6N0jPXF9kP3%2FjFnKHja%2B%2BEl2E6yZ6ril2UreAXQxZLRyl9JD48%2F3tX%2Fuuoa7oYRn7u7sCPUJfM5xPKS4H6p0%2FBdo6Z52zpvgLxgGZeESPLvcWFY25e%2BSNNRax9Xvl8kJAECcwhg4KEOeZA1CeDkETe%2B0fh2rSliVxjVNetzMG5mshXTzSGfmG%2FwWq3oPpyKZzk6wtnHNBQUDDH%2B9jdza0BcQxHbWNFL0peBNNjn6WT1woWIcIbAI%2BoWsq5%2FbjmLCdtbRgvfXCKIPlIzgHcA9mNbT7xCbnXSBmAba47wyoVfYb4og1ZDogcOnc8wi9fSwAY6pgE%2F%2BsbgB9d37d6ndFcE22BSJmSX3NBhhfuiIm8QRHycSv1UArPIhFT1mZzNPkRIL3bGkkB1Wf2LPn6zbQ8ZtTpnOT36cJ9V9LoWbctinpB0Z0er4pkkJMexSrergSd%2Fv1Y2A07Ci31U%2FYfqx3fOwXJTC6tOIY7K%2BShDo6QjqahxM53SNU%2F%2FsyOGPMemOD%2Fm8jA0hv0IjbLwGSNC2CwOUEpXHDaNaiAq&X-Amz-Signature=482894fa2bf19b07f0b98ce864ebfacc1e5f9ad44659bf288ff410d2837c0898&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZBAF65%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIE6V4w%2BxFu7aY7BwfWqGYMPR87BOYbCY3RlL3kFWBq55AiBI%2F%2Bom7xFjmLAoTD6Stq%2Fbvonw91aOcFXVe%2BnsZCK%2F2yqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzdWTd4ljvgd1AxW1KtwDY%2Fuc6n76LT52u5%2BUB6lDll5gwT81YHZCQtzmTg9IknKJhjP%2B%2BOK4JRwUzrO0GV2iYhOOxnumyBeC3vCZOCQjfvUeD9VpI4IQAf1FZ6OZ97%2BZ8q2g7nD2IbxLXiKQsDF1Ae%2BbBmW12lWKXrgnZMzXOfH15zaInGI1yB4NBvfODjx1uhdvLCj86JKUiV6MfnCL2YFFM79QDRtGZg8wzGN4lEMIzjbiDjkWxIfG4%2F0wns9nNCmk6dnmp4l16MnFRg0kRJzeMX7b%2BTAVUHcOAP8dmNVLSoCq5LygYQqVnf9T5AaSyXteUqFo1zRSZCqu3NKBg6N0jPXF9kP3%2FjFnKHja%2B%2BEl2E6yZ6ril2UreAXQxZLRyl9JD48%2F3tX%2Fuuoa7oYRn7u7sCPUJfM5xPKS4H6p0%2FBdo6Z52zpvgLxgGZeESPLvcWFY25e%2BSNNRax9Xvl8kJAECcwhg4KEOeZA1CeDkETe%2B0fh2rSliVxjVNetzMG5mshXTzSGfmG%2FwWq3oPpyKZzk6wtnHNBQUDDH%2B9jdza0BcQxHbWNFL0peBNNjn6WT1woWIcIbAI%2BoWsq5%2FbjmLCdtbRgvfXCKIPlIzgHcA9mNbT7xCbnXSBmAba47wyoVfYb4og1ZDogcOnc8wi9fSwAY6pgE%2F%2BsbgB9d37d6ndFcE22BSJmSX3NBhhfuiIm8QRHycSv1UArPIhFT1mZzNPkRIL3bGkkB1Wf2LPn6zbQ8ZtTpnOT36cJ9V9LoWbctinpB0Z0er4pkkJMexSrergSd%2Fv1Y2A07Ci31U%2FYfqx3fOwXJTC6tOIY7K%2BShDo6QjqahxM53SNU%2F%2FsyOGPMemOD%2Fm8jA0hv0IjbLwGSNC2CwOUEpXHDaNaiAq&X-Amz-Signature=405565efbc3c4d5a17e7b17281c311717e6c4859ab4132993488d69bf850f865&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZBAF65%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIE6V4w%2BxFu7aY7BwfWqGYMPR87BOYbCY3RlL3kFWBq55AiBI%2F%2Bom7xFjmLAoTD6Stq%2Fbvonw91aOcFXVe%2BnsZCK%2F2yqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzdWTd4ljvgd1AxW1KtwDY%2Fuc6n76LT52u5%2BUB6lDll5gwT81YHZCQtzmTg9IknKJhjP%2B%2BOK4JRwUzrO0GV2iYhOOxnumyBeC3vCZOCQjfvUeD9VpI4IQAf1FZ6OZ97%2BZ8q2g7nD2IbxLXiKQsDF1Ae%2BbBmW12lWKXrgnZMzXOfH15zaInGI1yB4NBvfODjx1uhdvLCj86JKUiV6MfnCL2YFFM79QDRtGZg8wzGN4lEMIzjbiDjkWxIfG4%2F0wns9nNCmk6dnmp4l16MnFRg0kRJzeMX7b%2BTAVUHcOAP8dmNVLSoCq5LygYQqVnf9T5AaSyXteUqFo1zRSZCqu3NKBg6N0jPXF9kP3%2FjFnKHja%2B%2BEl2E6yZ6ril2UreAXQxZLRyl9JD48%2F3tX%2Fuuoa7oYRn7u7sCPUJfM5xPKS4H6p0%2FBdo6Z52zpvgLxgGZeESPLvcWFY25e%2BSNNRax9Xvl8kJAECcwhg4KEOeZA1CeDkETe%2B0fh2rSliVxjVNetzMG5mshXTzSGfmG%2FwWq3oPpyKZzk6wtnHNBQUDDH%2B9jdza0BcQxHbWNFL0peBNNjn6WT1woWIcIbAI%2BoWsq5%2FbjmLCdtbRgvfXCKIPlIzgHcA9mNbT7xCbnXSBmAba47wyoVfYb4og1ZDogcOnc8wi9fSwAY6pgE%2F%2BsbgB9d37d6ndFcE22BSJmSX3NBhhfuiIm8QRHycSv1UArPIhFT1mZzNPkRIL3bGkkB1Wf2LPn6zbQ8ZtTpnOT36cJ9V9LoWbctinpB0Z0er4pkkJMexSrergSd%2Fv1Y2A07Ci31U%2FYfqx3fOwXJTC6tOIY7K%2BShDo6QjqahxM53SNU%2F%2FsyOGPMemOD%2Fm8jA0hv0IjbLwGSNC2CwOUEpXHDaNaiAq&X-Amz-Signature=8eab6cf21072d4d7154578f6a949fc43c3fa02971a62223583a79185884f236f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZBAF65%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIE6V4w%2BxFu7aY7BwfWqGYMPR87BOYbCY3RlL3kFWBq55AiBI%2F%2Bom7xFjmLAoTD6Stq%2Fbvonw91aOcFXVe%2BnsZCK%2F2yqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzdWTd4ljvgd1AxW1KtwDY%2Fuc6n76LT52u5%2BUB6lDll5gwT81YHZCQtzmTg9IknKJhjP%2B%2BOK4JRwUzrO0GV2iYhOOxnumyBeC3vCZOCQjfvUeD9VpI4IQAf1FZ6OZ97%2BZ8q2g7nD2IbxLXiKQsDF1Ae%2BbBmW12lWKXrgnZMzXOfH15zaInGI1yB4NBvfODjx1uhdvLCj86JKUiV6MfnCL2YFFM79QDRtGZg8wzGN4lEMIzjbiDjkWxIfG4%2F0wns9nNCmk6dnmp4l16MnFRg0kRJzeMX7b%2BTAVUHcOAP8dmNVLSoCq5LygYQqVnf9T5AaSyXteUqFo1zRSZCqu3NKBg6N0jPXF9kP3%2FjFnKHja%2B%2BEl2E6yZ6ril2UreAXQxZLRyl9JD48%2F3tX%2Fuuoa7oYRn7u7sCPUJfM5xPKS4H6p0%2FBdo6Z52zpvgLxgGZeESPLvcWFY25e%2BSNNRax9Xvl8kJAECcwhg4KEOeZA1CeDkETe%2B0fh2rSliVxjVNetzMG5mshXTzSGfmG%2FwWq3oPpyKZzk6wtnHNBQUDDH%2B9jdza0BcQxHbWNFL0peBNNjn6WT1woWIcIbAI%2BoWsq5%2FbjmLCdtbRgvfXCKIPlIzgHcA9mNbT7xCbnXSBmAba47wyoVfYb4og1ZDogcOnc8wi9fSwAY6pgE%2F%2BsbgB9d37d6ndFcE22BSJmSX3NBhhfuiIm8QRHycSv1UArPIhFT1mZzNPkRIL3bGkkB1Wf2LPn6zbQ8ZtTpnOT36cJ9V9LoWbctinpB0Z0er4pkkJMexSrergSd%2Fv1Y2A07Ci31U%2FYfqx3fOwXJTC6tOIY7K%2BShDo6QjqahxM53SNU%2F%2FsyOGPMemOD%2Fm8jA0hv0IjbLwGSNC2CwOUEpXHDaNaiAq&X-Amz-Signature=9df956ec44b7de4a0eb9ac4f1c71658297cc45ca73b0ebdeb27ba6efbf123e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZBAF65%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIE6V4w%2BxFu7aY7BwfWqGYMPR87BOYbCY3RlL3kFWBq55AiBI%2F%2Bom7xFjmLAoTD6Stq%2Fbvonw91aOcFXVe%2BnsZCK%2F2yqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzdWTd4ljvgd1AxW1KtwDY%2Fuc6n76LT52u5%2BUB6lDll5gwT81YHZCQtzmTg9IknKJhjP%2B%2BOK4JRwUzrO0GV2iYhOOxnumyBeC3vCZOCQjfvUeD9VpI4IQAf1FZ6OZ97%2BZ8q2g7nD2IbxLXiKQsDF1Ae%2BbBmW12lWKXrgnZMzXOfH15zaInGI1yB4NBvfODjx1uhdvLCj86JKUiV6MfnCL2YFFM79QDRtGZg8wzGN4lEMIzjbiDjkWxIfG4%2F0wns9nNCmk6dnmp4l16MnFRg0kRJzeMX7b%2BTAVUHcOAP8dmNVLSoCq5LygYQqVnf9T5AaSyXteUqFo1zRSZCqu3NKBg6N0jPXF9kP3%2FjFnKHja%2B%2BEl2E6yZ6ril2UreAXQxZLRyl9JD48%2F3tX%2Fuuoa7oYRn7u7sCPUJfM5xPKS4H6p0%2FBdo6Z52zpvgLxgGZeESPLvcWFY25e%2BSNNRax9Xvl8kJAECcwhg4KEOeZA1CeDkETe%2B0fh2rSliVxjVNetzMG5mshXTzSGfmG%2FwWq3oPpyKZzk6wtnHNBQUDDH%2B9jdza0BcQxHbWNFL0peBNNjn6WT1woWIcIbAI%2BoWsq5%2FbjmLCdtbRgvfXCKIPlIzgHcA9mNbT7xCbnXSBmAba47wyoVfYb4og1ZDogcOnc8wi9fSwAY6pgE%2F%2BsbgB9d37d6ndFcE22BSJmSX3NBhhfuiIm8QRHycSv1UArPIhFT1mZzNPkRIL3bGkkB1Wf2LPn6zbQ8ZtTpnOT36cJ9V9LoWbctinpB0Z0er4pkkJMexSrergSd%2Fv1Y2A07Ci31U%2FYfqx3fOwXJTC6tOIY7K%2BShDo6QjqahxM53SNU%2F%2FsyOGPMemOD%2Fm8jA0hv0IjbLwGSNC2CwOUEpXHDaNaiAq&X-Amz-Signature=498d3b4022933a63cf3ed673c1eb930769990b50e6af2aad6f2899eead725269&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZBAF65%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIE6V4w%2BxFu7aY7BwfWqGYMPR87BOYbCY3RlL3kFWBq55AiBI%2F%2Bom7xFjmLAoTD6Stq%2Fbvonw91aOcFXVe%2BnsZCK%2F2yqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzdWTd4ljvgd1AxW1KtwDY%2Fuc6n76LT52u5%2BUB6lDll5gwT81YHZCQtzmTg9IknKJhjP%2B%2BOK4JRwUzrO0GV2iYhOOxnumyBeC3vCZOCQjfvUeD9VpI4IQAf1FZ6OZ97%2BZ8q2g7nD2IbxLXiKQsDF1Ae%2BbBmW12lWKXrgnZMzXOfH15zaInGI1yB4NBvfODjx1uhdvLCj86JKUiV6MfnCL2YFFM79QDRtGZg8wzGN4lEMIzjbiDjkWxIfG4%2F0wns9nNCmk6dnmp4l16MnFRg0kRJzeMX7b%2BTAVUHcOAP8dmNVLSoCq5LygYQqVnf9T5AaSyXteUqFo1zRSZCqu3NKBg6N0jPXF9kP3%2FjFnKHja%2B%2BEl2E6yZ6ril2UreAXQxZLRyl9JD48%2F3tX%2Fuuoa7oYRn7u7sCPUJfM5xPKS4H6p0%2FBdo6Z52zpvgLxgGZeESPLvcWFY25e%2BSNNRax9Xvl8kJAECcwhg4KEOeZA1CeDkETe%2B0fh2rSliVxjVNetzMG5mshXTzSGfmG%2FwWq3oPpyKZzk6wtnHNBQUDDH%2B9jdza0BcQxHbWNFL0peBNNjn6WT1woWIcIbAI%2BoWsq5%2FbjmLCdtbRgvfXCKIPlIzgHcA9mNbT7xCbnXSBmAba47wyoVfYb4og1ZDogcOnc8wi9fSwAY6pgE%2F%2BsbgB9d37d6ndFcE22BSJmSX3NBhhfuiIm8QRHycSv1UArPIhFT1mZzNPkRIL3bGkkB1Wf2LPn6zbQ8ZtTpnOT36cJ9V9LoWbctinpB0Z0er4pkkJMexSrergSd%2Fv1Y2A07Ci31U%2FYfqx3fOwXJTC6tOIY7K%2BShDo6QjqahxM53SNU%2F%2FsyOGPMemOD%2Fm8jA0hv0IjbLwGSNC2CwOUEpXHDaNaiAq&X-Amz-Signature=69f80ee42610c188d3e97496abb2a350ae4b57a3d1c09a8a888b757ec0a020fc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
