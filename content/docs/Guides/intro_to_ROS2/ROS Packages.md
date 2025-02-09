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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REVWX2Q%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjsqeTuRPVbpZBbFSxPUiz0i2mDCapjNBa6ICb1g551AiA0q39p8NSQHpbfaoPyRRSz6GuwITnlx3k4%2FDRb2KWBCCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoj5a0OiO9Kq%2F8plQKtwD6l3lNjCPuhi%2FGPyw1xCFjwR9OCY8jMRLNAbqgpzhS4IoLIT4UzX0tzjk27tELsGotoAa99%2F4yYf%2BSusxbpfuKbkqY0N4GvdgbACa2rSysK9FpVZlzmywZ9ujbB8%2BT%2B9yOnBeVch80iyT6ycln0ElUeuSGwAIRFGLT18UtMXKaWWXrj75AouP607OyzqDf%2BPz7DSCaXFdMvKuitn9KnEO6qK4qwidTJrbFSn0WpohfAdyRPX7EVXe8PDBCsGUh0g6nWb3o8bqQST8AARvPwkBQZ0k1lHVjiXSBJqBfhl9LvuVHTmbjerzT5WhevTW018XnvRpNQ2ikVtUAtG0X9OUV91y4xegeyvyMK3vqOrV2aDsHHuDOeC6S55OS6gi0cD0ua6Gm2rRQfCVfjTbfhG8NCHx5IOsa7SuCxEiYRROSluiBWViKv0QFFu5kTSViB2nA6hyflE1lFIPm9g%2FlbDs0Tekzd5whJxqUNg83%2BAleNXZo8dZkhTGlzZlSlw15lobkw0aYFOTPgjj6EjXrjc3kVw%2FytJq753mF6zGq%2FjgWFa%2Fu%2BhDRX4q9pIEqD8Nh93Ceh6C6YGLssM0U%2B%2BaF354B77ZPlV2H35hc2Ht4h%2BEn%2F5trc71NCe8vFLEzAgw2%2FSfvQY6pgFZ7U8EUuXrPo%2Fvt7h9hhKIN0ZHOpy7xLhZ1i0ySGloQjRrzzgfUYnnqVF0D0WPNc92H4ul%2BwqxBfdb%2BCl%2BTbTq9ftPMlKk4NIuyTczU0RO9V4gD35%2BRtcbiKnKKP0i%2F6mKVPv4UK8gQ0vpx5yFksDm2xe9mZwoStCJiyN8ASprj8JpO8EnBsMvcgljIxzRPZeXK7Pm5wxZygrh90oiZpTFSdw6OAAE&X-Amz-Signature=858bc5a3631677958e716904db347290579ef1c7a9681dcf2bb2a6bd0bf42912&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REVWX2Q%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjsqeTuRPVbpZBbFSxPUiz0i2mDCapjNBa6ICb1g551AiA0q39p8NSQHpbfaoPyRRSz6GuwITnlx3k4%2FDRb2KWBCCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoj5a0OiO9Kq%2F8plQKtwD6l3lNjCPuhi%2FGPyw1xCFjwR9OCY8jMRLNAbqgpzhS4IoLIT4UzX0tzjk27tELsGotoAa99%2F4yYf%2BSusxbpfuKbkqY0N4GvdgbACa2rSysK9FpVZlzmywZ9ujbB8%2BT%2B9yOnBeVch80iyT6ycln0ElUeuSGwAIRFGLT18UtMXKaWWXrj75AouP607OyzqDf%2BPz7DSCaXFdMvKuitn9KnEO6qK4qwidTJrbFSn0WpohfAdyRPX7EVXe8PDBCsGUh0g6nWb3o8bqQST8AARvPwkBQZ0k1lHVjiXSBJqBfhl9LvuVHTmbjerzT5WhevTW018XnvRpNQ2ikVtUAtG0X9OUV91y4xegeyvyMK3vqOrV2aDsHHuDOeC6S55OS6gi0cD0ua6Gm2rRQfCVfjTbfhG8NCHx5IOsa7SuCxEiYRROSluiBWViKv0QFFu5kTSViB2nA6hyflE1lFIPm9g%2FlbDs0Tekzd5whJxqUNg83%2BAleNXZo8dZkhTGlzZlSlw15lobkw0aYFOTPgjj6EjXrjc3kVw%2FytJq753mF6zGq%2FjgWFa%2Fu%2BhDRX4q9pIEqD8Nh93Ceh6C6YGLssM0U%2B%2BaF354B77ZPlV2H35hc2Ht4h%2BEn%2F5trc71NCe8vFLEzAgw2%2FSfvQY6pgFZ7U8EUuXrPo%2Fvt7h9hhKIN0ZHOpy7xLhZ1i0ySGloQjRrzzgfUYnnqVF0D0WPNc92H4ul%2BwqxBfdb%2BCl%2BTbTq9ftPMlKk4NIuyTczU0RO9V4gD35%2BRtcbiKnKKP0i%2F6mKVPv4UK8gQ0vpx5yFksDm2xe9mZwoStCJiyN8ASprj8JpO8EnBsMvcgljIxzRPZeXK7Pm5wxZygrh90oiZpTFSdw6OAAE&X-Amz-Signature=0a429dcfbe45a428959da1570b930e3f2cc5922c5797cd8ca2d7cc7eca0e5763&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REVWX2Q%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjsqeTuRPVbpZBbFSxPUiz0i2mDCapjNBa6ICb1g551AiA0q39p8NSQHpbfaoPyRRSz6GuwITnlx3k4%2FDRb2KWBCCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoj5a0OiO9Kq%2F8plQKtwD6l3lNjCPuhi%2FGPyw1xCFjwR9OCY8jMRLNAbqgpzhS4IoLIT4UzX0tzjk27tELsGotoAa99%2F4yYf%2BSusxbpfuKbkqY0N4GvdgbACa2rSysK9FpVZlzmywZ9ujbB8%2BT%2B9yOnBeVch80iyT6ycln0ElUeuSGwAIRFGLT18UtMXKaWWXrj75AouP607OyzqDf%2BPz7DSCaXFdMvKuitn9KnEO6qK4qwidTJrbFSn0WpohfAdyRPX7EVXe8PDBCsGUh0g6nWb3o8bqQST8AARvPwkBQZ0k1lHVjiXSBJqBfhl9LvuVHTmbjerzT5WhevTW018XnvRpNQ2ikVtUAtG0X9OUV91y4xegeyvyMK3vqOrV2aDsHHuDOeC6S55OS6gi0cD0ua6Gm2rRQfCVfjTbfhG8NCHx5IOsa7SuCxEiYRROSluiBWViKv0QFFu5kTSViB2nA6hyflE1lFIPm9g%2FlbDs0Tekzd5whJxqUNg83%2BAleNXZo8dZkhTGlzZlSlw15lobkw0aYFOTPgjj6EjXrjc3kVw%2FytJq753mF6zGq%2FjgWFa%2Fu%2BhDRX4q9pIEqD8Nh93Ceh6C6YGLssM0U%2B%2BaF354B77ZPlV2H35hc2Ht4h%2BEn%2F5trc71NCe8vFLEzAgw2%2FSfvQY6pgFZ7U8EUuXrPo%2Fvt7h9hhKIN0ZHOpy7xLhZ1i0ySGloQjRrzzgfUYnnqVF0D0WPNc92H4ul%2BwqxBfdb%2BCl%2BTbTq9ftPMlKk4NIuyTczU0RO9V4gD35%2BRtcbiKnKKP0i%2F6mKVPv4UK8gQ0vpx5yFksDm2xe9mZwoStCJiyN8ASprj8JpO8EnBsMvcgljIxzRPZeXK7Pm5wxZygrh90oiZpTFSdw6OAAE&X-Amz-Signature=909cf7c5c3622d0adf2b54d306ee530e4be899e108dde3ebdd31542239a35c34&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REVWX2Q%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjsqeTuRPVbpZBbFSxPUiz0i2mDCapjNBa6ICb1g551AiA0q39p8NSQHpbfaoPyRRSz6GuwITnlx3k4%2FDRb2KWBCCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoj5a0OiO9Kq%2F8plQKtwD6l3lNjCPuhi%2FGPyw1xCFjwR9OCY8jMRLNAbqgpzhS4IoLIT4UzX0tzjk27tELsGotoAa99%2F4yYf%2BSusxbpfuKbkqY0N4GvdgbACa2rSysK9FpVZlzmywZ9ujbB8%2BT%2B9yOnBeVch80iyT6ycln0ElUeuSGwAIRFGLT18UtMXKaWWXrj75AouP607OyzqDf%2BPz7DSCaXFdMvKuitn9KnEO6qK4qwidTJrbFSn0WpohfAdyRPX7EVXe8PDBCsGUh0g6nWb3o8bqQST8AARvPwkBQZ0k1lHVjiXSBJqBfhl9LvuVHTmbjerzT5WhevTW018XnvRpNQ2ikVtUAtG0X9OUV91y4xegeyvyMK3vqOrV2aDsHHuDOeC6S55OS6gi0cD0ua6Gm2rRQfCVfjTbfhG8NCHx5IOsa7SuCxEiYRROSluiBWViKv0QFFu5kTSViB2nA6hyflE1lFIPm9g%2FlbDs0Tekzd5whJxqUNg83%2BAleNXZo8dZkhTGlzZlSlw15lobkw0aYFOTPgjj6EjXrjc3kVw%2FytJq753mF6zGq%2FjgWFa%2Fu%2BhDRX4q9pIEqD8Nh93Ceh6C6YGLssM0U%2B%2BaF354B77ZPlV2H35hc2Ht4h%2BEn%2F5trc71NCe8vFLEzAgw2%2FSfvQY6pgFZ7U8EUuXrPo%2Fvt7h9hhKIN0ZHOpy7xLhZ1i0ySGloQjRrzzgfUYnnqVF0D0WPNc92H4ul%2BwqxBfdb%2BCl%2BTbTq9ftPMlKk4NIuyTczU0RO9V4gD35%2BRtcbiKnKKP0i%2F6mKVPv4UK8gQ0vpx5yFksDm2xe9mZwoStCJiyN8ASprj8JpO8EnBsMvcgljIxzRPZeXK7Pm5wxZygrh90oiZpTFSdw6OAAE&X-Amz-Signature=6c497b4967480ac88c04a62b2b4932d8355d9ab8e105a36246c31ece80d902a7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REVWX2Q%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjsqeTuRPVbpZBbFSxPUiz0i2mDCapjNBa6ICb1g551AiA0q39p8NSQHpbfaoPyRRSz6GuwITnlx3k4%2FDRb2KWBCCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoj5a0OiO9Kq%2F8plQKtwD6l3lNjCPuhi%2FGPyw1xCFjwR9OCY8jMRLNAbqgpzhS4IoLIT4UzX0tzjk27tELsGotoAa99%2F4yYf%2BSusxbpfuKbkqY0N4GvdgbACa2rSysK9FpVZlzmywZ9ujbB8%2BT%2B9yOnBeVch80iyT6ycln0ElUeuSGwAIRFGLT18UtMXKaWWXrj75AouP607OyzqDf%2BPz7DSCaXFdMvKuitn9KnEO6qK4qwidTJrbFSn0WpohfAdyRPX7EVXe8PDBCsGUh0g6nWb3o8bqQST8AARvPwkBQZ0k1lHVjiXSBJqBfhl9LvuVHTmbjerzT5WhevTW018XnvRpNQ2ikVtUAtG0X9OUV91y4xegeyvyMK3vqOrV2aDsHHuDOeC6S55OS6gi0cD0ua6Gm2rRQfCVfjTbfhG8NCHx5IOsa7SuCxEiYRROSluiBWViKv0QFFu5kTSViB2nA6hyflE1lFIPm9g%2FlbDs0Tekzd5whJxqUNg83%2BAleNXZo8dZkhTGlzZlSlw15lobkw0aYFOTPgjj6EjXrjc3kVw%2FytJq753mF6zGq%2FjgWFa%2Fu%2BhDRX4q9pIEqD8Nh93Ceh6C6YGLssM0U%2B%2BaF354B77ZPlV2H35hc2Ht4h%2BEn%2F5trc71NCe8vFLEzAgw2%2FSfvQY6pgFZ7U8EUuXrPo%2Fvt7h9hhKIN0ZHOpy7xLhZ1i0ySGloQjRrzzgfUYnnqVF0D0WPNc92H4ul%2BwqxBfdb%2BCl%2BTbTq9ftPMlKk4NIuyTczU0RO9V4gD35%2BRtcbiKnKKP0i%2F6mKVPv4UK8gQ0vpx5yFksDm2xe9mZwoStCJiyN8ASprj8JpO8EnBsMvcgljIxzRPZeXK7Pm5wxZygrh90oiZpTFSdw6OAAE&X-Amz-Signature=c89a7a2b346f7116507bae559bed144872980e129d7199d1d1f870f0a9519c98&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REVWX2Q%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjsqeTuRPVbpZBbFSxPUiz0i2mDCapjNBa6ICb1g551AiA0q39p8NSQHpbfaoPyRRSz6GuwITnlx3k4%2FDRb2KWBCCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoj5a0OiO9Kq%2F8plQKtwD6l3lNjCPuhi%2FGPyw1xCFjwR9OCY8jMRLNAbqgpzhS4IoLIT4UzX0tzjk27tELsGotoAa99%2F4yYf%2BSusxbpfuKbkqY0N4GvdgbACa2rSysK9FpVZlzmywZ9ujbB8%2BT%2B9yOnBeVch80iyT6ycln0ElUeuSGwAIRFGLT18UtMXKaWWXrj75AouP607OyzqDf%2BPz7DSCaXFdMvKuitn9KnEO6qK4qwidTJrbFSn0WpohfAdyRPX7EVXe8PDBCsGUh0g6nWb3o8bqQST8AARvPwkBQZ0k1lHVjiXSBJqBfhl9LvuVHTmbjerzT5WhevTW018XnvRpNQ2ikVtUAtG0X9OUV91y4xegeyvyMK3vqOrV2aDsHHuDOeC6S55OS6gi0cD0ua6Gm2rRQfCVfjTbfhG8NCHx5IOsa7SuCxEiYRROSluiBWViKv0QFFu5kTSViB2nA6hyflE1lFIPm9g%2FlbDs0Tekzd5whJxqUNg83%2BAleNXZo8dZkhTGlzZlSlw15lobkw0aYFOTPgjj6EjXrjc3kVw%2FytJq753mF6zGq%2FjgWFa%2Fu%2BhDRX4q9pIEqD8Nh93Ceh6C6YGLssM0U%2B%2BaF354B77ZPlV2H35hc2Ht4h%2BEn%2F5trc71NCe8vFLEzAgw2%2FSfvQY6pgFZ7U8EUuXrPo%2Fvt7h9hhKIN0ZHOpy7xLhZ1i0ySGloQjRrzzgfUYnnqVF0D0WPNc92H4ul%2BwqxBfdb%2BCl%2BTbTq9ftPMlKk4NIuyTczU0RO9V4gD35%2BRtcbiKnKKP0i%2F6mKVPv4UK8gQ0vpx5yFksDm2xe9mZwoStCJiyN8ASprj8JpO8EnBsMvcgljIxzRPZeXK7Pm5wxZygrh90oiZpTFSdw6OAAE&X-Amz-Signature=c3f9927cc0535fd3263407cd1462d41e1f146192307713886b8901fcd40a12e3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REVWX2Q%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjsqeTuRPVbpZBbFSxPUiz0i2mDCapjNBa6ICb1g551AiA0q39p8NSQHpbfaoPyRRSz6GuwITnlx3k4%2FDRb2KWBCCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoj5a0OiO9Kq%2F8plQKtwD6l3lNjCPuhi%2FGPyw1xCFjwR9OCY8jMRLNAbqgpzhS4IoLIT4UzX0tzjk27tELsGotoAa99%2F4yYf%2BSusxbpfuKbkqY0N4GvdgbACa2rSysK9FpVZlzmywZ9ujbB8%2BT%2B9yOnBeVch80iyT6ycln0ElUeuSGwAIRFGLT18UtMXKaWWXrj75AouP607OyzqDf%2BPz7DSCaXFdMvKuitn9KnEO6qK4qwidTJrbFSn0WpohfAdyRPX7EVXe8PDBCsGUh0g6nWb3o8bqQST8AARvPwkBQZ0k1lHVjiXSBJqBfhl9LvuVHTmbjerzT5WhevTW018XnvRpNQ2ikVtUAtG0X9OUV91y4xegeyvyMK3vqOrV2aDsHHuDOeC6S55OS6gi0cD0ua6Gm2rRQfCVfjTbfhG8NCHx5IOsa7SuCxEiYRROSluiBWViKv0QFFu5kTSViB2nA6hyflE1lFIPm9g%2FlbDs0Tekzd5whJxqUNg83%2BAleNXZo8dZkhTGlzZlSlw15lobkw0aYFOTPgjj6EjXrjc3kVw%2FytJq753mF6zGq%2FjgWFa%2Fu%2BhDRX4q9pIEqD8Nh93Ceh6C6YGLssM0U%2B%2BaF354B77ZPlV2H35hc2Ht4h%2BEn%2F5trc71NCe8vFLEzAgw2%2FSfvQY6pgFZ7U8EUuXrPo%2Fvt7h9hhKIN0ZHOpy7xLhZ1i0ySGloQjRrzzgfUYnnqVF0D0WPNc92H4ul%2BwqxBfdb%2BCl%2BTbTq9ftPMlKk4NIuyTczU0RO9V4gD35%2BRtcbiKnKKP0i%2F6mKVPv4UK8gQ0vpx5yFksDm2xe9mZwoStCJiyN8ASprj8JpO8EnBsMvcgljIxzRPZeXK7Pm5wxZygrh90oiZpTFSdw6OAAE&X-Amz-Signature=90d17b0d14cda8ca46028525027e2c887b6277e40bda40c1b1cedcdefa96108e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
