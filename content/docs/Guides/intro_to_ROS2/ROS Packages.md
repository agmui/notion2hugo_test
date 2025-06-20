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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFAKSMM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNV8kNN1JdeLfQpl6Ty7LD%2FJebSyzy4Mt946QxQQYi6QIhAP7Nc4TPNOLrVjp9fktMB%2BBR49sBU3OOT0qisqyacYqPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB2AX%2BHfc0n2MR%2BdMq3AOTxzE104z0gjTzTj0zhlPOzou6BVZeGEKCcnd0wDSagiqH2DSTQeVWeea891C9jsoyg2D0QT5gaBq2CUzoqJMktuy516Hft30ODs8mdffFhLwrxffFnAbkVd3u5dJ98AihBZeDw7Ucg733b8vmh2TuqpKra46KmIOcJ%2BN2q3zEMp0%2BpXXM2sD40asJSE5%2FMegYbyKXm5AaIY7xrp0TMgbeunrgio3HOL%2FOT8aEr1memQyTdHwTNmHDCB3DhGEJwN2NltXRxWxEncR5XwjNlJEDIJL1Ncc4E8W2Qqo9P3lB%2BiZE%2ByOy8TwOI5mPbupjz6XPz0OPOcXQmj59KcIIDWgnD0GynvXtsGI5MrcAevGy3rMBfqdtEheRCqH5yThwu04aoq7kd%2Fg7AHzNn4A2kdFYGrdH7Vhy%2FLUoTo3QW228FUBtFzd5vsaue04FQwzHi75lmnpnk2lmGhEGRJm6EEX0KEcTJZYVIKvglAX2Hp%2BsRhwpMIETsC3qq2qPf114HMprVe1M6uq%2Bq9dVIEVTaNx6ykYP17l89ycA2bJ38kXkfH5UED2Ax0H3lhRRyKD3SL58qLdx8JkM7T5pjvLZPI16%2BwJMV6niW2MmDDlT41sIoHxp1pHqfP%2BFpeoARTC3j9PCBjqkAQE8SfMWHAMELGGTJ7b6iNzBAN2yWxXa%2FmKFE%2B%2BQIRGxcvTDX250CxcFjrqF%2F8vp3zToxS9YLlD69JFe49vM2mTqbwF8xT2lKo195RzE56c%2Bo2%2BqZuWia0U4A3E3w5cX8siSk0hLDbe4XoZU%2FtU1AxcpW%2FhVdQfVeVMfBA11ibnXjMQiZf19%2Bcva63eDqs7UQztlOZAt2BJpetH2OzAN6vWyBPf%2F&X-Amz-Signature=c9f70e070d5d20a735056242e02b59835b0fd05a3f2ba8070da2d123fc790c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFAKSMM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNV8kNN1JdeLfQpl6Ty7LD%2FJebSyzy4Mt946QxQQYi6QIhAP7Nc4TPNOLrVjp9fktMB%2BBR49sBU3OOT0qisqyacYqPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB2AX%2BHfc0n2MR%2BdMq3AOTxzE104z0gjTzTj0zhlPOzou6BVZeGEKCcnd0wDSagiqH2DSTQeVWeea891C9jsoyg2D0QT5gaBq2CUzoqJMktuy516Hft30ODs8mdffFhLwrxffFnAbkVd3u5dJ98AihBZeDw7Ucg733b8vmh2TuqpKra46KmIOcJ%2BN2q3zEMp0%2BpXXM2sD40asJSE5%2FMegYbyKXm5AaIY7xrp0TMgbeunrgio3HOL%2FOT8aEr1memQyTdHwTNmHDCB3DhGEJwN2NltXRxWxEncR5XwjNlJEDIJL1Ncc4E8W2Qqo9P3lB%2BiZE%2ByOy8TwOI5mPbupjz6XPz0OPOcXQmj59KcIIDWgnD0GynvXtsGI5MrcAevGy3rMBfqdtEheRCqH5yThwu04aoq7kd%2Fg7AHzNn4A2kdFYGrdH7Vhy%2FLUoTo3QW228FUBtFzd5vsaue04FQwzHi75lmnpnk2lmGhEGRJm6EEX0KEcTJZYVIKvglAX2Hp%2BsRhwpMIETsC3qq2qPf114HMprVe1M6uq%2Bq9dVIEVTaNx6ykYP17l89ycA2bJ38kXkfH5UED2Ax0H3lhRRyKD3SL58qLdx8JkM7T5pjvLZPI16%2BwJMV6niW2MmDDlT41sIoHxp1pHqfP%2BFpeoARTC3j9PCBjqkAQE8SfMWHAMELGGTJ7b6iNzBAN2yWxXa%2FmKFE%2B%2BQIRGxcvTDX250CxcFjrqF%2F8vp3zToxS9YLlD69JFe49vM2mTqbwF8xT2lKo195RzE56c%2Bo2%2BqZuWia0U4A3E3w5cX8siSk0hLDbe4XoZU%2FtU1AxcpW%2FhVdQfVeVMfBA11ibnXjMQiZf19%2Bcva63eDqs7UQztlOZAt2BJpetH2OzAN6vWyBPf%2F&X-Amz-Signature=8e5f8b600daa43c82c7b8f3aaf99dfd7c5c4e38b88a8b09ed10013feae189e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFAKSMM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNV8kNN1JdeLfQpl6Ty7LD%2FJebSyzy4Mt946QxQQYi6QIhAP7Nc4TPNOLrVjp9fktMB%2BBR49sBU3OOT0qisqyacYqPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB2AX%2BHfc0n2MR%2BdMq3AOTxzE104z0gjTzTj0zhlPOzou6BVZeGEKCcnd0wDSagiqH2DSTQeVWeea891C9jsoyg2D0QT5gaBq2CUzoqJMktuy516Hft30ODs8mdffFhLwrxffFnAbkVd3u5dJ98AihBZeDw7Ucg733b8vmh2TuqpKra46KmIOcJ%2BN2q3zEMp0%2BpXXM2sD40asJSE5%2FMegYbyKXm5AaIY7xrp0TMgbeunrgio3HOL%2FOT8aEr1memQyTdHwTNmHDCB3DhGEJwN2NltXRxWxEncR5XwjNlJEDIJL1Ncc4E8W2Qqo9P3lB%2BiZE%2ByOy8TwOI5mPbupjz6XPz0OPOcXQmj59KcIIDWgnD0GynvXtsGI5MrcAevGy3rMBfqdtEheRCqH5yThwu04aoq7kd%2Fg7AHzNn4A2kdFYGrdH7Vhy%2FLUoTo3QW228FUBtFzd5vsaue04FQwzHi75lmnpnk2lmGhEGRJm6EEX0KEcTJZYVIKvglAX2Hp%2BsRhwpMIETsC3qq2qPf114HMprVe1M6uq%2Bq9dVIEVTaNx6ykYP17l89ycA2bJ38kXkfH5UED2Ax0H3lhRRyKD3SL58qLdx8JkM7T5pjvLZPI16%2BwJMV6niW2MmDDlT41sIoHxp1pHqfP%2BFpeoARTC3j9PCBjqkAQE8SfMWHAMELGGTJ7b6iNzBAN2yWxXa%2FmKFE%2B%2BQIRGxcvTDX250CxcFjrqF%2F8vp3zToxS9YLlD69JFe49vM2mTqbwF8xT2lKo195RzE56c%2Bo2%2BqZuWia0U4A3E3w5cX8siSk0hLDbe4XoZU%2FtU1AxcpW%2FhVdQfVeVMfBA11ibnXjMQiZf19%2Bcva63eDqs7UQztlOZAt2BJpetH2OzAN6vWyBPf%2F&X-Amz-Signature=b8ed3647174c110c71a4d0eb75fbc537c8ea37b1a4f9499c765c5274e3f161c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFAKSMM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNV8kNN1JdeLfQpl6Ty7LD%2FJebSyzy4Mt946QxQQYi6QIhAP7Nc4TPNOLrVjp9fktMB%2BBR49sBU3OOT0qisqyacYqPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB2AX%2BHfc0n2MR%2BdMq3AOTxzE104z0gjTzTj0zhlPOzou6BVZeGEKCcnd0wDSagiqH2DSTQeVWeea891C9jsoyg2D0QT5gaBq2CUzoqJMktuy516Hft30ODs8mdffFhLwrxffFnAbkVd3u5dJ98AihBZeDw7Ucg733b8vmh2TuqpKra46KmIOcJ%2BN2q3zEMp0%2BpXXM2sD40asJSE5%2FMegYbyKXm5AaIY7xrp0TMgbeunrgio3HOL%2FOT8aEr1memQyTdHwTNmHDCB3DhGEJwN2NltXRxWxEncR5XwjNlJEDIJL1Ncc4E8W2Qqo9P3lB%2BiZE%2ByOy8TwOI5mPbupjz6XPz0OPOcXQmj59KcIIDWgnD0GynvXtsGI5MrcAevGy3rMBfqdtEheRCqH5yThwu04aoq7kd%2Fg7AHzNn4A2kdFYGrdH7Vhy%2FLUoTo3QW228FUBtFzd5vsaue04FQwzHi75lmnpnk2lmGhEGRJm6EEX0KEcTJZYVIKvglAX2Hp%2BsRhwpMIETsC3qq2qPf114HMprVe1M6uq%2Bq9dVIEVTaNx6ykYP17l89ycA2bJ38kXkfH5UED2Ax0H3lhRRyKD3SL58qLdx8JkM7T5pjvLZPI16%2BwJMV6niW2MmDDlT41sIoHxp1pHqfP%2BFpeoARTC3j9PCBjqkAQE8SfMWHAMELGGTJ7b6iNzBAN2yWxXa%2FmKFE%2B%2BQIRGxcvTDX250CxcFjrqF%2F8vp3zToxS9YLlD69JFe49vM2mTqbwF8xT2lKo195RzE56c%2Bo2%2BqZuWia0U4A3E3w5cX8siSk0hLDbe4XoZU%2FtU1AxcpW%2FhVdQfVeVMfBA11ibnXjMQiZf19%2Bcva63eDqs7UQztlOZAt2BJpetH2OzAN6vWyBPf%2F&X-Amz-Signature=47e42f4bef13bc2bf1accd0018b6ebb281a4626e5ae1639f45ab5af85558bde9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFAKSMM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNV8kNN1JdeLfQpl6Ty7LD%2FJebSyzy4Mt946QxQQYi6QIhAP7Nc4TPNOLrVjp9fktMB%2BBR49sBU3OOT0qisqyacYqPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB2AX%2BHfc0n2MR%2BdMq3AOTxzE104z0gjTzTj0zhlPOzou6BVZeGEKCcnd0wDSagiqH2DSTQeVWeea891C9jsoyg2D0QT5gaBq2CUzoqJMktuy516Hft30ODs8mdffFhLwrxffFnAbkVd3u5dJ98AihBZeDw7Ucg733b8vmh2TuqpKra46KmIOcJ%2BN2q3zEMp0%2BpXXM2sD40asJSE5%2FMegYbyKXm5AaIY7xrp0TMgbeunrgio3HOL%2FOT8aEr1memQyTdHwTNmHDCB3DhGEJwN2NltXRxWxEncR5XwjNlJEDIJL1Ncc4E8W2Qqo9P3lB%2BiZE%2ByOy8TwOI5mPbupjz6XPz0OPOcXQmj59KcIIDWgnD0GynvXtsGI5MrcAevGy3rMBfqdtEheRCqH5yThwu04aoq7kd%2Fg7AHzNn4A2kdFYGrdH7Vhy%2FLUoTo3QW228FUBtFzd5vsaue04FQwzHi75lmnpnk2lmGhEGRJm6EEX0KEcTJZYVIKvglAX2Hp%2BsRhwpMIETsC3qq2qPf114HMprVe1M6uq%2Bq9dVIEVTaNx6ykYP17l89ycA2bJ38kXkfH5UED2Ax0H3lhRRyKD3SL58qLdx8JkM7T5pjvLZPI16%2BwJMV6niW2MmDDlT41sIoHxp1pHqfP%2BFpeoARTC3j9PCBjqkAQE8SfMWHAMELGGTJ7b6iNzBAN2yWxXa%2FmKFE%2B%2BQIRGxcvTDX250CxcFjrqF%2F8vp3zToxS9YLlD69JFe49vM2mTqbwF8xT2lKo195RzE56c%2Bo2%2BqZuWia0U4A3E3w5cX8siSk0hLDbe4XoZU%2FtU1AxcpW%2FhVdQfVeVMfBA11ibnXjMQiZf19%2Bcva63eDqs7UQztlOZAt2BJpetH2OzAN6vWyBPf%2F&X-Amz-Signature=70db340fbafa618918a51af6e6d7620ff39bda9195cea1ba93edf5da9ffe1a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFAKSMM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNV8kNN1JdeLfQpl6Ty7LD%2FJebSyzy4Mt946QxQQYi6QIhAP7Nc4TPNOLrVjp9fktMB%2BBR49sBU3OOT0qisqyacYqPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB2AX%2BHfc0n2MR%2BdMq3AOTxzE104z0gjTzTj0zhlPOzou6BVZeGEKCcnd0wDSagiqH2DSTQeVWeea891C9jsoyg2D0QT5gaBq2CUzoqJMktuy516Hft30ODs8mdffFhLwrxffFnAbkVd3u5dJ98AihBZeDw7Ucg733b8vmh2TuqpKra46KmIOcJ%2BN2q3zEMp0%2BpXXM2sD40asJSE5%2FMegYbyKXm5AaIY7xrp0TMgbeunrgio3HOL%2FOT8aEr1memQyTdHwTNmHDCB3DhGEJwN2NltXRxWxEncR5XwjNlJEDIJL1Ncc4E8W2Qqo9P3lB%2BiZE%2ByOy8TwOI5mPbupjz6XPz0OPOcXQmj59KcIIDWgnD0GynvXtsGI5MrcAevGy3rMBfqdtEheRCqH5yThwu04aoq7kd%2Fg7AHzNn4A2kdFYGrdH7Vhy%2FLUoTo3QW228FUBtFzd5vsaue04FQwzHi75lmnpnk2lmGhEGRJm6EEX0KEcTJZYVIKvglAX2Hp%2BsRhwpMIETsC3qq2qPf114HMprVe1M6uq%2Bq9dVIEVTaNx6ykYP17l89ycA2bJ38kXkfH5UED2Ax0H3lhRRyKD3SL58qLdx8JkM7T5pjvLZPI16%2BwJMV6niW2MmDDlT41sIoHxp1pHqfP%2BFpeoARTC3j9PCBjqkAQE8SfMWHAMELGGTJ7b6iNzBAN2yWxXa%2FmKFE%2B%2BQIRGxcvTDX250CxcFjrqF%2F8vp3zToxS9YLlD69JFe49vM2mTqbwF8xT2lKo195RzE56c%2Bo2%2BqZuWia0U4A3E3w5cX8siSk0hLDbe4XoZU%2FtU1AxcpW%2FhVdQfVeVMfBA11ibnXjMQiZf19%2Bcva63eDqs7UQztlOZAt2BJpetH2OzAN6vWyBPf%2F&X-Amz-Signature=96884a8c3fe1b6806a8e259da0e8c41cde595f9d3f06625e57f7902c3df331bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFAKSMM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNV8kNN1JdeLfQpl6Ty7LD%2FJebSyzy4Mt946QxQQYi6QIhAP7Nc4TPNOLrVjp9fktMB%2BBR49sBU3OOT0qisqyacYqPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB2AX%2BHfc0n2MR%2BdMq3AOTxzE104z0gjTzTj0zhlPOzou6BVZeGEKCcnd0wDSagiqH2DSTQeVWeea891C9jsoyg2D0QT5gaBq2CUzoqJMktuy516Hft30ODs8mdffFhLwrxffFnAbkVd3u5dJ98AihBZeDw7Ucg733b8vmh2TuqpKra46KmIOcJ%2BN2q3zEMp0%2BpXXM2sD40asJSE5%2FMegYbyKXm5AaIY7xrp0TMgbeunrgio3HOL%2FOT8aEr1memQyTdHwTNmHDCB3DhGEJwN2NltXRxWxEncR5XwjNlJEDIJL1Ncc4E8W2Qqo9P3lB%2BiZE%2ByOy8TwOI5mPbupjz6XPz0OPOcXQmj59KcIIDWgnD0GynvXtsGI5MrcAevGy3rMBfqdtEheRCqH5yThwu04aoq7kd%2Fg7AHzNn4A2kdFYGrdH7Vhy%2FLUoTo3QW228FUBtFzd5vsaue04FQwzHi75lmnpnk2lmGhEGRJm6EEX0KEcTJZYVIKvglAX2Hp%2BsRhwpMIETsC3qq2qPf114HMprVe1M6uq%2Bq9dVIEVTaNx6ykYP17l89ycA2bJ38kXkfH5UED2Ax0H3lhRRyKD3SL58qLdx8JkM7T5pjvLZPI16%2BwJMV6niW2MmDDlT41sIoHxp1pHqfP%2BFpeoARTC3j9PCBjqkAQE8SfMWHAMELGGTJ7b6iNzBAN2yWxXa%2FmKFE%2B%2BQIRGxcvTDX250CxcFjrqF%2F8vp3zToxS9YLlD69JFe49vM2mTqbwF8xT2lKo195RzE56c%2Bo2%2BqZuWia0U4A3E3w5cX8siSk0hLDbe4XoZU%2FtU1AxcpW%2FhVdQfVeVMfBA11ibnXjMQiZf19%2Bcva63eDqs7UQztlOZAt2BJpetH2OzAN6vWyBPf%2F&X-Amz-Signature=2549b46cc8f371ad8b3d428bf3fe286a203a0ca921ce85bed05e3f8e5a7c6555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
