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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHTCYHM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCk%2FBkolvg8FDxA7xYjxhiV0%2FhVfym079SMNAPHrFnSFAIhAP2MOQVeRdYOv1y4fn998UN1BqM4MDclqF5GxfXoLJ1sKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7fSYhEhdMwaHr0Xsq3APoPdYPqklpIoCH2VOpEB1llhla0GNkGz5YXI1nXSsYbq1gdEr9YL1%2FZ74iS842H5yv1KGczZM5AX3Uyzq2HFh3QZIsYYTuRcoWUXZHP6YCsQwu1ZUNMf0wX7A9kxKIar2vX3sQ%2BPiFskQiuSijcFsmOUCCZ5O1HByFBkTI7fN%2F4hjM8jTnAdZmOFlIVLEA9tMqNs1tDlfIuUSMQroFGjn024a%2F%2FoB%2FI9GZV8%2BAYYyLXsXQXjjimVTqQZyeXRlEnXbPpxyxtykK5drTQp4reLfpEpjCC5uZTuL%2Fykhho9OzQDzuLmfmvX8pBbfuC8bt24JxhDRqQjd%2BiXsN6yCiIBmMc55DYFxGHoZxSeLuq%2Fu8B23i81PdpiidnQlrYHXns16VfVy8A8wyEGRBcDqBX20f0p6QjNRnCzdHuEH22t2k0LOx9QrvRHynHQQ5WmK8jBmWIQT0nCxkivs%2BcJ2CmceHVvxAszis9wjbypZoZLfJgzOTLnChQBb1mPVkqAdkWf9%2B2qhjYrFnu6bGkcwIH6NcUc6hftJuEIPizSf7B%2Bxu3oSGJtSIpi3u8OeRpM%2FSl0dobJkseKv9%2FVdFSn0f9wwOYK7o68CeN5gwjMyexYndgxjm2l4OgE2GxRACTTDg1%2FS%2BBjqkAX4DFK1zuVxAlO%2FggSWUmh0dprUTcEsbkCG18bH4yFtdzeY2iazsIGbiEApj3hFjGyKZH0NwuZ%2F%2F13PuAobeJk2SpV4L3%2BrXZaoa0WSCs9w1lZZUyJvRgzwYMUpjIT74VdKU519gx9AsaqQnkdjIBp2a6td3qeJDaZGI%2FWqoTaJY1yH%2FVrh1D0yu%2FFArLDUs1tUqAvY5FCnZR4CRwUlyhIRm%2BSlk&X-Amz-Signature=b6b7095481858eed73346ad0042599c395fa9c5db0b94f7a55f43a3bfefb5b18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHTCYHM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCk%2FBkolvg8FDxA7xYjxhiV0%2FhVfym079SMNAPHrFnSFAIhAP2MOQVeRdYOv1y4fn998UN1BqM4MDclqF5GxfXoLJ1sKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7fSYhEhdMwaHr0Xsq3APoPdYPqklpIoCH2VOpEB1llhla0GNkGz5YXI1nXSsYbq1gdEr9YL1%2FZ74iS842H5yv1KGczZM5AX3Uyzq2HFh3QZIsYYTuRcoWUXZHP6YCsQwu1ZUNMf0wX7A9kxKIar2vX3sQ%2BPiFskQiuSijcFsmOUCCZ5O1HByFBkTI7fN%2F4hjM8jTnAdZmOFlIVLEA9tMqNs1tDlfIuUSMQroFGjn024a%2F%2FoB%2FI9GZV8%2BAYYyLXsXQXjjimVTqQZyeXRlEnXbPpxyxtykK5drTQp4reLfpEpjCC5uZTuL%2Fykhho9OzQDzuLmfmvX8pBbfuC8bt24JxhDRqQjd%2BiXsN6yCiIBmMc55DYFxGHoZxSeLuq%2Fu8B23i81PdpiidnQlrYHXns16VfVy8A8wyEGRBcDqBX20f0p6QjNRnCzdHuEH22t2k0LOx9QrvRHynHQQ5WmK8jBmWIQT0nCxkivs%2BcJ2CmceHVvxAszis9wjbypZoZLfJgzOTLnChQBb1mPVkqAdkWf9%2B2qhjYrFnu6bGkcwIH6NcUc6hftJuEIPizSf7B%2Bxu3oSGJtSIpi3u8OeRpM%2FSl0dobJkseKv9%2FVdFSn0f9wwOYK7o68CeN5gwjMyexYndgxjm2l4OgE2GxRACTTDg1%2FS%2BBjqkAX4DFK1zuVxAlO%2FggSWUmh0dprUTcEsbkCG18bH4yFtdzeY2iazsIGbiEApj3hFjGyKZH0NwuZ%2F%2F13PuAobeJk2SpV4L3%2BrXZaoa0WSCs9w1lZZUyJvRgzwYMUpjIT74VdKU519gx9AsaqQnkdjIBp2a6td3qeJDaZGI%2FWqoTaJY1yH%2FVrh1D0yu%2FFArLDUs1tUqAvY5FCnZR4CRwUlyhIRm%2BSlk&X-Amz-Signature=9f289d3c7b9d52b77a60c0c6b9d65e0f951bc027a8bbd38b5d3309a4f1614f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHTCYHM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCk%2FBkolvg8FDxA7xYjxhiV0%2FhVfym079SMNAPHrFnSFAIhAP2MOQVeRdYOv1y4fn998UN1BqM4MDclqF5GxfXoLJ1sKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7fSYhEhdMwaHr0Xsq3APoPdYPqklpIoCH2VOpEB1llhla0GNkGz5YXI1nXSsYbq1gdEr9YL1%2FZ74iS842H5yv1KGczZM5AX3Uyzq2HFh3QZIsYYTuRcoWUXZHP6YCsQwu1ZUNMf0wX7A9kxKIar2vX3sQ%2BPiFskQiuSijcFsmOUCCZ5O1HByFBkTI7fN%2F4hjM8jTnAdZmOFlIVLEA9tMqNs1tDlfIuUSMQroFGjn024a%2F%2FoB%2FI9GZV8%2BAYYyLXsXQXjjimVTqQZyeXRlEnXbPpxyxtykK5drTQp4reLfpEpjCC5uZTuL%2Fykhho9OzQDzuLmfmvX8pBbfuC8bt24JxhDRqQjd%2BiXsN6yCiIBmMc55DYFxGHoZxSeLuq%2Fu8B23i81PdpiidnQlrYHXns16VfVy8A8wyEGRBcDqBX20f0p6QjNRnCzdHuEH22t2k0LOx9QrvRHynHQQ5WmK8jBmWIQT0nCxkivs%2BcJ2CmceHVvxAszis9wjbypZoZLfJgzOTLnChQBb1mPVkqAdkWf9%2B2qhjYrFnu6bGkcwIH6NcUc6hftJuEIPizSf7B%2Bxu3oSGJtSIpi3u8OeRpM%2FSl0dobJkseKv9%2FVdFSn0f9wwOYK7o68CeN5gwjMyexYndgxjm2l4OgE2GxRACTTDg1%2FS%2BBjqkAX4DFK1zuVxAlO%2FggSWUmh0dprUTcEsbkCG18bH4yFtdzeY2iazsIGbiEApj3hFjGyKZH0NwuZ%2F%2F13PuAobeJk2SpV4L3%2BrXZaoa0WSCs9w1lZZUyJvRgzwYMUpjIT74VdKU519gx9AsaqQnkdjIBp2a6td3qeJDaZGI%2FWqoTaJY1yH%2FVrh1D0yu%2FFArLDUs1tUqAvY5FCnZR4CRwUlyhIRm%2BSlk&X-Amz-Signature=93ae5d83773504c181ed2ea1d0ed88557015616792433e4c3a4b13f7b0636c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHTCYHM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCk%2FBkolvg8FDxA7xYjxhiV0%2FhVfym079SMNAPHrFnSFAIhAP2MOQVeRdYOv1y4fn998UN1BqM4MDclqF5GxfXoLJ1sKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7fSYhEhdMwaHr0Xsq3APoPdYPqklpIoCH2VOpEB1llhla0GNkGz5YXI1nXSsYbq1gdEr9YL1%2FZ74iS842H5yv1KGczZM5AX3Uyzq2HFh3QZIsYYTuRcoWUXZHP6YCsQwu1ZUNMf0wX7A9kxKIar2vX3sQ%2BPiFskQiuSijcFsmOUCCZ5O1HByFBkTI7fN%2F4hjM8jTnAdZmOFlIVLEA9tMqNs1tDlfIuUSMQroFGjn024a%2F%2FoB%2FI9GZV8%2BAYYyLXsXQXjjimVTqQZyeXRlEnXbPpxyxtykK5drTQp4reLfpEpjCC5uZTuL%2Fykhho9OzQDzuLmfmvX8pBbfuC8bt24JxhDRqQjd%2BiXsN6yCiIBmMc55DYFxGHoZxSeLuq%2Fu8B23i81PdpiidnQlrYHXns16VfVy8A8wyEGRBcDqBX20f0p6QjNRnCzdHuEH22t2k0LOx9QrvRHynHQQ5WmK8jBmWIQT0nCxkivs%2BcJ2CmceHVvxAszis9wjbypZoZLfJgzOTLnChQBb1mPVkqAdkWf9%2B2qhjYrFnu6bGkcwIH6NcUc6hftJuEIPizSf7B%2Bxu3oSGJtSIpi3u8OeRpM%2FSl0dobJkseKv9%2FVdFSn0f9wwOYK7o68CeN5gwjMyexYndgxjm2l4OgE2GxRACTTDg1%2FS%2BBjqkAX4DFK1zuVxAlO%2FggSWUmh0dprUTcEsbkCG18bH4yFtdzeY2iazsIGbiEApj3hFjGyKZH0NwuZ%2F%2F13PuAobeJk2SpV4L3%2BrXZaoa0WSCs9w1lZZUyJvRgzwYMUpjIT74VdKU519gx9AsaqQnkdjIBp2a6td3qeJDaZGI%2FWqoTaJY1yH%2FVrh1D0yu%2FFArLDUs1tUqAvY5FCnZR4CRwUlyhIRm%2BSlk&X-Amz-Signature=84298f0f3b8ad58c3f4c81b95a3940aeb8cfe0cd80e3307b6922c601d1d91970&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHTCYHM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCk%2FBkolvg8FDxA7xYjxhiV0%2FhVfym079SMNAPHrFnSFAIhAP2MOQVeRdYOv1y4fn998UN1BqM4MDclqF5GxfXoLJ1sKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7fSYhEhdMwaHr0Xsq3APoPdYPqklpIoCH2VOpEB1llhla0GNkGz5YXI1nXSsYbq1gdEr9YL1%2FZ74iS842H5yv1KGczZM5AX3Uyzq2HFh3QZIsYYTuRcoWUXZHP6YCsQwu1ZUNMf0wX7A9kxKIar2vX3sQ%2BPiFskQiuSijcFsmOUCCZ5O1HByFBkTI7fN%2F4hjM8jTnAdZmOFlIVLEA9tMqNs1tDlfIuUSMQroFGjn024a%2F%2FoB%2FI9GZV8%2BAYYyLXsXQXjjimVTqQZyeXRlEnXbPpxyxtykK5drTQp4reLfpEpjCC5uZTuL%2Fykhho9OzQDzuLmfmvX8pBbfuC8bt24JxhDRqQjd%2BiXsN6yCiIBmMc55DYFxGHoZxSeLuq%2Fu8B23i81PdpiidnQlrYHXns16VfVy8A8wyEGRBcDqBX20f0p6QjNRnCzdHuEH22t2k0LOx9QrvRHynHQQ5WmK8jBmWIQT0nCxkivs%2BcJ2CmceHVvxAszis9wjbypZoZLfJgzOTLnChQBb1mPVkqAdkWf9%2B2qhjYrFnu6bGkcwIH6NcUc6hftJuEIPizSf7B%2Bxu3oSGJtSIpi3u8OeRpM%2FSl0dobJkseKv9%2FVdFSn0f9wwOYK7o68CeN5gwjMyexYndgxjm2l4OgE2GxRACTTDg1%2FS%2BBjqkAX4DFK1zuVxAlO%2FggSWUmh0dprUTcEsbkCG18bH4yFtdzeY2iazsIGbiEApj3hFjGyKZH0NwuZ%2F%2F13PuAobeJk2SpV4L3%2BrXZaoa0WSCs9w1lZZUyJvRgzwYMUpjIT74VdKU519gx9AsaqQnkdjIBp2a6td3qeJDaZGI%2FWqoTaJY1yH%2FVrh1D0yu%2FFArLDUs1tUqAvY5FCnZR4CRwUlyhIRm%2BSlk&X-Amz-Signature=fbe156e4a02ff93c9ec211983b53b87b8661ab86c1c882c14781e053ab93af51&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHTCYHM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCk%2FBkolvg8FDxA7xYjxhiV0%2FhVfym079SMNAPHrFnSFAIhAP2MOQVeRdYOv1y4fn998UN1BqM4MDclqF5GxfXoLJ1sKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7fSYhEhdMwaHr0Xsq3APoPdYPqklpIoCH2VOpEB1llhla0GNkGz5YXI1nXSsYbq1gdEr9YL1%2FZ74iS842H5yv1KGczZM5AX3Uyzq2HFh3QZIsYYTuRcoWUXZHP6YCsQwu1ZUNMf0wX7A9kxKIar2vX3sQ%2BPiFskQiuSijcFsmOUCCZ5O1HByFBkTI7fN%2F4hjM8jTnAdZmOFlIVLEA9tMqNs1tDlfIuUSMQroFGjn024a%2F%2FoB%2FI9GZV8%2BAYYyLXsXQXjjimVTqQZyeXRlEnXbPpxyxtykK5drTQp4reLfpEpjCC5uZTuL%2Fykhho9OzQDzuLmfmvX8pBbfuC8bt24JxhDRqQjd%2BiXsN6yCiIBmMc55DYFxGHoZxSeLuq%2Fu8B23i81PdpiidnQlrYHXns16VfVy8A8wyEGRBcDqBX20f0p6QjNRnCzdHuEH22t2k0LOx9QrvRHynHQQ5WmK8jBmWIQT0nCxkivs%2BcJ2CmceHVvxAszis9wjbypZoZLfJgzOTLnChQBb1mPVkqAdkWf9%2B2qhjYrFnu6bGkcwIH6NcUc6hftJuEIPizSf7B%2Bxu3oSGJtSIpi3u8OeRpM%2FSl0dobJkseKv9%2FVdFSn0f9wwOYK7o68CeN5gwjMyexYndgxjm2l4OgE2GxRACTTDg1%2FS%2BBjqkAX4DFK1zuVxAlO%2FggSWUmh0dprUTcEsbkCG18bH4yFtdzeY2iazsIGbiEApj3hFjGyKZH0NwuZ%2F%2F13PuAobeJk2SpV4L3%2BrXZaoa0WSCs9w1lZZUyJvRgzwYMUpjIT74VdKU519gx9AsaqQnkdjIBp2a6td3qeJDaZGI%2FWqoTaJY1yH%2FVrh1D0yu%2FFArLDUs1tUqAvY5FCnZR4CRwUlyhIRm%2BSlk&X-Amz-Signature=25ec48a3209f0d2b616ede111dcf28b27cea7f07d19d1608671f4223114e389e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHTCYHM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCk%2FBkolvg8FDxA7xYjxhiV0%2FhVfym079SMNAPHrFnSFAIhAP2MOQVeRdYOv1y4fn998UN1BqM4MDclqF5GxfXoLJ1sKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7fSYhEhdMwaHr0Xsq3APoPdYPqklpIoCH2VOpEB1llhla0GNkGz5YXI1nXSsYbq1gdEr9YL1%2FZ74iS842H5yv1KGczZM5AX3Uyzq2HFh3QZIsYYTuRcoWUXZHP6YCsQwu1ZUNMf0wX7A9kxKIar2vX3sQ%2BPiFskQiuSijcFsmOUCCZ5O1HByFBkTI7fN%2F4hjM8jTnAdZmOFlIVLEA9tMqNs1tDlfIuUSMQroFGjn024a%2F%2FoB%2FI9GZV8%2BAYYyLXsXQXjjimVTqQZyeXRlEnXbPpxyxtykK5drTQp4reLfpEpjCC5uZTuL%2Fykhho9OzQDzuLmfmvX8pBbfuC8bt24JxhDRqQjd%2BiXsN6yCiIBmMc55DYFxGHoZxSeLuq%2Fu8B23i81PdpiidnQlrYHXns16VfVy8A8wyEGRBcDqBX20f0p6QjNRnCzdHuEH22t2k0LOx9QrvRHynHQQ5WmK8jBmWIQT0nCxkivs%2BcJ2CmceHVvxAszis9wjbypZoZLfJgzOTLnChQBb1mPVkqAdkWf9%2B2qhjYrFnu6bGkcwIH6NcUc6hftJuEIPizSf7B%2Bxu3oSGJtSIpi3u8OeRpM%2FSl0dobJkseKv9%2FVdFSn0f9wwOYK7o68CeN5gwjMyexYndgxjm2l4OgE2GxRACTTDg1%2FS%2BBjqkAX4DFK1zuVxAlO%2FggSWUmh0dprUTcEsbkCG18bH4yFtdzeY2iazsIGbiEApj3hFjGyKZH0NwuZ%2F%2F13PuAobeJk2SpV4L3%2BrXZaoa0WSCs9w1lZZUyJvRgzwYMUpjIT74VdKU519gx9AsaqQnkdjIBp2a6td3qeJDaZGI%2FWqoTaJY1yH%2FVrh1D0yu%2FFArLDUs1tUqAvY5FCnZR4CRwUlyhIRm%2BSlk&X-Amz-Signature=45f146e71c0cef310222cd08b08e173dccf0819924d01b9b69e2cba0fa91045f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
