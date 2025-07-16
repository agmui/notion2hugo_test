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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCUOG2K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHAX6u6jBHMP4W3JVH51xpFdhj8HK97%2BKAAIuJTlxWxdAiEAyYWWGRJFSBJqhmuzsBanMYOMuf1oigXDTBcqqlicNIMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLtrlK5MQKaHANruXCrcAxrFtvKj6s4YEU5glcz5rfL0q%2BIiwTkmAX5rsTJI77CNpYpwBI1M7AHNAv7x6IJarG0HLFrY7VGKWim12qT%2F8N2%2BoN6aHHItYZZM7VbwGylqNSD1t8OB8l5MWnFQ9FbKo6yH%2Fn8dSFbJSGgeKHU8FIK8rHmga3Opi9o9zlDOOSm6FNd5hh%2BJH9f2PLJY27NYiJdcm2OfY72NZiFujlkGq%2B3SUoLxB9RNurN1o1JC7JZFn4tl06lOKL6Lzy%2FjN6zQm4%2B3pBFSJIEvPkYD6ESZe3yor%2Bj4PLJjbq0BG%2FUtvRwppJpar6CsUZi6ozPU%2B7POYuq2tFonl4nZb08yYBsKcm8ur8c%2FXH3gYS1WBU9Mh3LJqIQOW8MMFd5r5MEPQ06aP8YOQqbANgFPlZ2Hyj%2FYqR3dKne1ZHt5mASJkM0ncEqtdYyHkZv8DgAh0%2BovUSTAdV6RVsOOwV6uLFlvlISDmzkv1AwXtDH1gEkJA7FiWqXqgJw07WmsvPMl0jVF1mmjFRKiCdYUUmmP5e1ys8uydOBdqy1s133WQAg4JY%2F37Qxd10fqjm7e5fuQu8b69xs%2BmmZ6103a8S3eD7ZYBa1xoKyPCHPFy0%2BXvDZa%2BQFNzAd1tC1XGLgQ3sSHBEfbML6T3sMGOqUBO4vNIUGwUFmVlc350OBFgDZw71GBbEjVrHEvAMr7la%2BSatVeHiWHFnYmxWw9Ew5r57xhidEA7ef%2B72nveZPY1Jq5Qaw90CxmQE%2FDNaLurdYHJboqJR3RVKSnZYNTT23bg1p%2FNLs34bCZF5jOEDCasXmuQ2SXK7%2FbWNmBgZYIFRA40Ocs%2Fq2rjk7aN1DMKyTeV7wi5Q2yzEEvW9uq%2FxIHclw8hZUP&X-Amz-Signature=de0ab663f96f614aa4e67ed0fedab014c84739fd7e4af345597e9614a38506b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCUOG2K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHAX6u6jBHMP4W3JVH51xpFdhj8HK97%2BKAAIuJTlxWxdAiEAyYWWGRJFSBJqhmuzsBanMYOMuf1oigXDTBcqqlicNIMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLtrlK5MQKaHANruXCrcAxrFtvKj6s4YEU5glcz5rfL0q%2BIiwTkmAX5rsTJI77CNpYpwBI1M7AHNAv7x6IJarG0HLFrY7VGKWim12qT%2F8N2%2BoN6aHHItYZZM7VbwGylqNSD1t8OB8l5MWnFQ9FbKo6yH%2Fn8dSFbJSGgeKHU8FIK8rHmga3Opi9o9zlDOOSm6FNd5hh%2BJH9f2PLJY27NYiJdcm2OfY72NZiFujlkGq%2B3SUoLxB9RNurN1o1JC7JZFn4tl06lOKL6Lzy%2FjN6zQm4%2B3pBFSJIEvPkYD6ESZe3yor%2Bj4PLJjbq0BG%2FUtvRwppJpar6CsUZi6ozPU%2B7POYuq2tFonl4nZb08yYBsKcm8ur8c%2FXH3gYS1WBU9Mh3LJqIQOW8MMFd5r5MEPQ06aP8YOQqbANgFPlZ2Hyj%2FYqR3dKne1ZHt5mASJkM0ncEqtdYyHkZv8DgAh0%2BovUSTAdV6RVsOOwV6uLFlvlISDmzkv1AwXtDH1gEkJA7FiWqXqgJw07WmsvPMl0jVF1mmjFRKiCdYUUmmP5e1ys8uydOBdqy1s133WQAg4JY%2F37Qxd10fqjm7e5fuQu8b69xs%2BmmZ6103a8S3eD7ZYBa1xoKyPCHPFy0%2BXvDZa%2BQFNzAd1tC1XGLgQ3sSHBEfbML6T3sMGOqUBO4vNIUGwUFmVlc350OBFgDZw71GBbEjVrHEvAMr7la%2BSatVeHiWHFnYmxWw9Ew5r57xhidEA7ef%2B72nveZPY1Jq5Qaw90CxmQE%2FDNaLurdYHJboqJR3RVKSnZYNTT23bg1p%2FNLs34bCZF5jOEDCasXmuQ2SXK7%2FbWNmBgZYIFRA40Ocs%2Fq2rjk7aN1DMKyTeV7wi5Q2yzEEvW9uq%2FxIHclw8hZUP&X-Amz-Signature=42c3c6b08845a567e8888b0e0e768a9b269446adfc446f8a4ca3ae49bc644880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCUOG2K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHAX6u6jBHMP4W3JVH51xpFdhj8HK97%2BKAAIuJTlxWxdAiEAyYWWGRJFSBJqhmuzsBanMYOMuf1oigXDTBcqqlicNIMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLtrlK5MQKaHANruXCrcAxrFtvKj6s4YEU5glcz5rfL0q%2BIiwTkmAX5rsTJI77CNpYpwBI1M7AHNAv7x6IJarG0HLFrY7VGKWim12qT%2F8N2%2BoN6aHHItYZZM7VbwGylqNSD1t8OB8l5MWnFQ9FbKo6yH%2Fn8dSFbJSGgeKHU8FIK8rHmga3Opi9o9zlDOOSm6FNd5hh%2BJH9f2PLJY27NYiJdcm2OfY72NZiFujlkGq%2B3SUoLxB9RNurN1o1JC7JZFn4tl06lOKL6Lzy%2FjN6zQm4%2B3pBFSJIEvPkYD6ESZe3yor%2Bj4PLJjbq0BG%2FUtvRwppJpar6CsUZi6ozPU%2B7POYuq2tFonl4nZb08yYBsKcm8ur8c%2FXH3gYS1WBU9Mh3LJqIQOW8MMFd5r5MEPQ06aP8YOQqbANgFPlZ2Hyj%2FYqR3dKne1ZHt5mASJkM0ncEqtdYyHkZv8DgAh0%2BovUSTAdV6RVsOOwV6uLFlvlISDmzkv1AwXtDH1gEkJA7FiWqXqgJw07WmsvPMl0jVF1mmjFRKiCdYUUmmP5e1ys8uydOBdqy1s133WQAg4JY%2F37Qxd10fqjm7e5fuQu8b69xs%2BmmZ6103a8S3eD7ZYBa1xoKyPCHPFy0%2BXvDZa%2BQFNzAd1tC1XGLgQ3sSHBEfbML6T3sMGOqUBO4vNIUGwUFmVlc350OBFgDZw71GBbEjVrHEvAMr7la%2BSatVeHiWHFnYmxWw9Ew5r57xhidEA7ef%2B72nveZPY1Jq5Qaw90CxmQE%2FDNaLurdYHJboqJR3RVKSnZYNTT23bg1p%2FNLs34bCZF5jOEDCasXmuQ2SXK7%2FbWNmBgZYIFRA40Ocs%2Fq2rjk7aN1DMKyTeV7wi5Q2yzEEvW9uq%2FxIHclw8hZUP&X-Amz-Signature=2c96258d91e2d5c7ae6ba78f2fb353f967f287ee9aeffa119de55f27657957f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCUOG2K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHAX6u6jBHMP4W3JVH51xpFdhj8HK97%2BKAAIuJTlxWxdAiEAyYWWGRJFSBJqhmuzsBanMYOMuf1oigXDTBcqqlicNIMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLtrlK5MQKaHANruXCrcAxrFtvKj6s4YEU5glcz5rfL0q%2BIiwTkmAX5rsTJI77CNpYpwBI1M7AHNAv7x6IJarG0HLFrY7VGKWim12qT%2F8N2%2BoN6aHHItYZZM7VbwGylqNSD1t8OB8l5MWnFQ9FbKo6yH%2Fn8dSFbJSGgeKHU8FIK8rHmga3Opi9o9zlDOOSm6FNd5hh%2BJH9f2PLJY27NYiJdcm2OfY72NZiFujlkGq%2B3SUoLxB9RNurN1o1JC7JZFn4tl06lOKL6Lzy%2FjN6zQm4%2B3pBFSJIEvPkYD6ESZe3yor%2Bj4PLJjbq0BG%2FUtvRwppJpar6CsUZi6ozPU%2B7POYuq2tFonl4nZb08yYBsKcm8ur8c%2FXH3gYS1WBU9Mh3LJqIQOW8MMFd5r5MEPQ06aP8YOQqbANgFPlZ2Hyj%2FYqR3dKne1ZHt5mASJkM0ncEqtdYyHkZv8DgAh0%2BovUSTAdV6RVsOOwV6uLFlvlISDmzkv1AwXtDH1gEkJA7FiWqXqgJw07WmsvPMl0jVF1mmjFRKiCdYUUmmP5e1ys8uydOBdqy1s133WQAg4JY%2F37Qxd10fqjm7e5fuQu8b69xs%2BmmZ6103a8S3eD7ZYBa1xoKyPCHPFy0%2BXvDZa%2BQFNzAd1tC1XGLgQ3sSHBEfbML6T3sMGOqUBO4vNIUGwUFmVlc350OBFgDZw71GBbEjVrHEvAMr7la%2BSatVeHiWHFnYmxWw9Ew5r57xhidEA7ef%2B72nveZPY1Jq5Qaw90CxmQE%2FDNaLurdYHJboqJR3RVKSnZYNTT23bg1p%2FNLs34bCZF5jOEDCasXmuQ2SXK7%2FbWNmBgZYIFRA40Ocs%2Fq2rjk7aN1DMKyTeV7wi5Q2yzEEvW9uq%2FxIHclw8hZUP&X-Amz-Signature=aa5742bc9c6f8d1ea76557b4a185f567bf9fa4e5ee27ec42edc5454a5c96bc02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCUOG2K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHAX6u6jBHMP4W3JVH51xpFdhj8HK97%2BKAAIuJTlxWxdAiEAyYWWGRJFSBJqhmuzsBanMYOMuf1oigXDTBcqqlicNIMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLtrlK5MQKaHANruXCrcAxrFtvKj6s4YEU5glcz5rfL0q%2BIiwTkmAX5rsTJI77CNpYpwBI1M7AHNAv7x6IJarG0HLFrY7VGKWim12qT%2F8N2%2BoN6aHHItYZZM7VbwGylqNSD1t8OB8l5MWnFQ9FbKo6yH%2Fn8dSFbJSGgeKHU8FIK8rHmga3Opi9o9zlDOOSm6FNd5hh%2BJH9f2PLJY27NYiJdcm2OfY72NZiFujlkGq%2B3SUoLxB9RNurN1o1JC7JZFn4tl06lOKL6Lzy%2FjN6zQm4%2B3pBFSJIEvPkYD6ESZe3yor%2Bj4PLJjbq0BG%2FUtvRwppJpar6CsUZi6ozPU%2B7POYuq2tFonl4nZb08yYBsKcm8ur8c%2FXH3gYS1WBU9Mh3LJqIQOW8MMFd5r5MEPQ06aP8YOQqbANgFPlZ2Hyj%2FYqR3dKne1ZHt5mASJkM0ncEqtdYyHkZv8DgAh0%2BovUSTAdV6RVsOOwV6uLFlvlISDmzkv1AwXtDH1gEkJA7FiWqXqgJw07WmsvPMl0jVF1mmjFRKiCdYUUmmP5e1ys8uydOBdqy1s133WQAg4JY%2F37Qxd10fqjm7e5fuQu8b69xs%2BmmZ6103a8S3eD7ZYBa1xoKyPCHPFy0%2BXvDZa%2BQFNzAd1tC1XGLgQ3sSHBEfbML6T3sMGOqUBO4vNIUGwUFmVlc350OBFgDZw71GBbEjVrHEvAMr7la%2BSatVeHiWHFnYmxWw9Ew5r57xhidEA7ef%2B72nveZPY1Jq5Qaw90CxmQE%2FDNaLurdYHJboqJR3RVKSnZYNTT23bg1p%2FNLs34bCZF5jOEDCasXmuQ2SXK7%2FbWNmBgZYIFRA40Ocs%2Fq2rjk7aN1DMKyTeV7wi5Q2yzEEvW9uq%2FxIHclw8hZUP&X-Amz-Signature=35fbd37f33cd6edd820da931274fb81cbf59ae29b58286c19d291d854fd83eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCUOG2K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHAX6u6jBHMP4W3JVH51xpFdhj8HK97%2BKAAIuJTlxWxdAiEAyYWWGRJFSBJqhmuzsBanMYOMuf1oigXDTBcqqlicNIMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLtrlK5MQKaHANruXCrcAxrFtvKj6s4YEU5glcz5rfL0q%2BIiwTkmAX5rsTJI77CNpYpwBI1M7AHNAv7x6IJarG0HLFrY7VGKWim12qT%2F8N2%2BoN6aHHItYZZM7VbwGylqNSD1t8OB8l5MWnFQ9FbKo6yH%2Fn8dSFbJSGgeKHU8FIK8rHmga3Opi9o9zlDOOSm6FNd5hh%2BJH9f2PLJY27NYiJdcm2OfY72NZiFujlkGq%2B3SUoLxB9RNurN1o1JC7JZFn4tl06lOKL6Lzy%2FjN6zQm4%2B3pBFSJIEvPkYD6ESZe3yor%2Bj4PLJjbq0BG%2FUtvRwppJpar6CsUZi6ozPU%2B7POYuq2tFonl4nZb08yYBsKcm8ur8c%2FXH3gYS1WBU9Mh3LJqIQOW8MMFd5r5MEPQ06aP8YOQqbANgFPlZ2Hyj%2FYqR3dKne1ZHt5mASJkM0ncEqtdYyHkZv8DgAh0%2BovUSTAdV6RVsOOwV6uLFlvlISDmzkv1AwXtDH1gEkJA7FiWqXqgJw07WmsvPMl0jVF1mmjFRKiCdYUUmmP5e1ys8uydOBdqy1s133WQAg4JY%2F37Qxd10fqjm7e5fuQu8b69xs%2BmmZ6103a8S3eD7ZYBa1xoKyPCHPFy0%2BXvDZa%2BQFNzAd1tC1XGLgQ3sSHBEfbML6T3sMGOqUBO4vNIUGwUFmVlc350OBFgDZw71GBbEjVrHEvAMr7la%2BSatVeHiWHFnYmxWw9Ew5r57xhidEA7ef%2B72nveZPY1Jq5Qaw90CxmQE%2FDNaLurdYHJboqJR3RVKSnZYNTT23bg1p%2FNLs34bCZF5jOEDCasXmuQ2SXK7%2FbWNmBgZYIFRA40Ocs%2Fq2rjk7aN1DMKyTeV7wi5Q2yzEEvW9uq%2FxIHclw8hZUP&X-Amz-Signature=65f4537fc751868d0bdcde6a7986880b8e7d432e132162951790210d67256e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCUOG2K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHAX6u6jBHMP4W3JVH51xpFdhj8HK97%2BKAAIuJTlxWxdAiEAyYWWGRJFSBJqhmuzsBanMYOMuf1oigXDTBcqqlicNIMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLtrlK5MQKaHANruXCrcAxrFtvKj6s4YEU5glcz5rfL0q%2BIiwTkmAX5rsTJI77CNpYpwBI1M7AHNAv7x6IJarG0HLFrY7VGKWim12qT%2F8N2%2BoN6aHHItYZZM7VbwGylqNSD1t8OB8l5MWnFQ9FbKo6yH%2Fn8dSFbJSGgeKHU8FIK8rHmga3Opi9o9zlDOOSm6FNd5hh%2BJH9f2PLJY27NYiJdcm2OfY72NZiFujlkGq%2B3SUoLxB9RNurN1o1JC7JZFn4tl06lOKL6Lzy%2FjN6zQm4%2B3pBFSJIEvPkYD6ESZe3yor%2Bj4PLJjbq0BG%2FUtvRwppJpar6CsUZi6ozPU%2B7POYuq2tFonl4nZb08yYBsKcm8ur8c%2FXH3gYS1WBU9Mh3LJqIQOW8MMFd5r5MEPQ06aP8YOQqbANgFPlZ2Hyj%2FYqR3dKne1ZHt5mASJkM0ncEqtdYyHkZv8DgAh0%2BovUSTAdV6RVsOOwV6uLFlvlISDmzkv1AwXtDH1gEkJA7FiWqXqgJw07WmsvPMl0jVF1mmjFRKiCdYUUmmP5e1ys8uydOBdqy1s133WQAg4JY%2F37Qxd10fqjm7e5fuQu8b69xs%2BmmZ6103a8S3eD7ZYBa1xoKyPCHPFy0%2BXvDZa%2BQFNzAd1tC1XGLgQ3sSHBEfbML6T3sMGOqUBO4vNIUGwUFmVlc350OBFgDZw71GBbEjVrHEvAMr7la%2BSatVeHiWHFnYmxWw9Ew5r57xhidEA7ef%2B72nveZPY1Jq5Qaw90CxmQE%2FDNaLurdYHJboqJR3RVKSnZYNTT23bg1p%2FNLs34bCZF5jOEDCasXmuQ2SXK7%2FbWNmBgZYIFRA40Ocs%2Fq2rjk7aN1DMKyTeV7wi5Q2yzEEvW9uq%2FxIHclw8hZUP&X-Amz-Signature=8b32df266e786fe06f9b1034bb5b21e7a16cb3beaa741e359d0eb94f318da12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
