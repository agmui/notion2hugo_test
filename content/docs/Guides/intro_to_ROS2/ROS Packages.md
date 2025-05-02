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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSHKF2O%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHOniF3IJvZ80sNIWBFX%2Fu19zGWzwifNqr1sY3WeAJe9AiAp%2FW3EZs0vpXQy%2BTWVq8lKH90%2FqFeV4bvvrCRDWhtYqiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8dzRJRYbitNC9JLYKtwDySybGWRLLyQdYGzE7jOJ%2FqXFOHQrsKLGibYFjIuUdjcqp8x2ZCF9uBs7FSxinOWkWfOSbdDbZIyf1PPHhjoQ6UHJqPrjowDbqHnbpjQHElPhifsa%2BWeqvoideaCgFxWbYRQC8IIc2V%2BcpsSrLMy790%2BOtYvC%2Fy88ZK%2BkmgM1q5jLXIJT0Lejv%2B1BoVRmjWoDzt0XdSEQRyolTQVPeq70a5pJM1KGQ62Q2XuBPxMlg3FRZqXYsa%2F3Z0BZViDFj%2BZfhJAv4hwPq5QD7OnWiEm47Q0uoV30EogPW3llkPj0gpaeD7qpoLvgYiWGyV9%2F7wgfCxb4yIRLczvnFa%2BY2xI16SFQY%2BSJHqojcTe%2BYt2oiiegJ2jXgzWVM24cd940BC551WbZ1DR%2FqZ6OUTV%2FKLUXHZbtiRPHk4W8qtrum0GDQmUUw4p%2F1aTGa2Ynu9dwJcNl4699O%2BcsfIPQRsr46Vr7RfK4P4g1bKodWWGyNTTmjw%2B%2BGD%2FhUtcAbPIVlcYJ71qOujJZfi7yrvN50xvnT0Cdbf0%2BH1eBW6GG1fSrrhpmI%2BvRp9FrZdh1%2BT%2FS4teZs%2F5%2FAO2zdVIZSK6XgOi6NOOTA%2FbDen%2BilhRibyN20oRzV8yaIwXlBU8n5%2FRX9n8wntrRwAY6pgEk0ekgjm62IFLwaoj29B%2FYsIh17U65nHfzuI%2BlyWMMZRvoNb4e%2FGm4KHX5oaI2GMU98CTzeoveIgGaznA52BYqcUhD9zOtCydFk1JmCwTEMw6H3YPjbkhGkXLKdwECICjyCboCH%2FC3ppXW9j7dzwViv70WGszgIxlLHw0hVHRvGys5OW4inHP9YsaaF%2BgOkxzBwwNSafzWkYbJeHFzJUcBwj78akri&X-Amz-Signature=389d403277d307a14418f233ed72eb4e0a261a84e28c915c2f2caaea3b049495&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSHKF2O%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHOniF3IJvZ80sNIWBFX%2Fu19zGWzwifNqr1sY3WeAJe9AiAp%2FW3EZs0vpXQy%2BTWVq8lKH90%2FqFeV4bvvrCRDWhtYqiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8dzRJRYbitNC9JLYKtwDySybGWRLLyQdYGzE7jOJ%2FqXFOHQrsKLGibYFjIuUdjcqp8x2ZCF9uBs7FSxinOWkWfOSbdDbZIyf1PPHhjoQ6UHJqPrjowDbqHnbpjQHElPhifsa%2BWeqvoideaCgFxWbYRQC8IIc2V%2BcpsSrLMy790%2BOtYvC%2Fy88ZK%2BkmgM1q5jLXIJT0Lejv%2B1BoVRmjWoDzt0XdSEQRyolTQVPeq70a5pJM1KGQ62Q2XuBPxMlg3FRZqXYsa%2F3Z0BZViDFj%2BZfhJAv4hwPq5QD7OnWiEm47Q0uoV30EogPW3llkPj0gpaeD7qpoLvgYiWGyV9%2F7wgfCxb4yIRLczvnFa%2BY2xI16SFQY%2BSJHqojcTe%2BYt2oiiegJ2jXgzWVM24cd940BC551WbZ1DR%2FqZ6OUTV%2FKLUXHZbtiRPHk4W8qtrum0GDQmUUw4p%2F1aTGa2Ynu9dwJcNl4699O%2BcsfIPQRsr46Vr7RfK4P4g1bKodWWGyNTTmjw%2B%2BGD%2FhUtcAbPIVlcYJ71qOujJZfi7yrvN50xvnT0Cdbf0%2BH1eBW6GG1fSrrhpmI%2BvRp9FrZdh1%2BT%2FS4teZs%2F5%2FAO2zdVIZSK6XgOi6NOOTA%2FbDen%2BilhRibyN20oRzV8yaIwXlBU8n5%2FRX9n8wntrRwAY6pgEk0ekgjm62IFLwaoj29B%2FYsIh17U65nHfzuI%2BlyWMMZRvoNb4e%2FGm4KHX5oaI2GMU98CTzeoveIgGaznA52BYqcUhD9zOtCydFk1JmCwTEMw6H3YPjbkhGkXLKdwECICjyCboCH%2FC3ppXW9j7dzwViv70WGszgIxlLHw0hVHRvGys5OW4inHP9YsaaF%2BgOkxzBwwNSafzWkYbJeHFzJUcBwj78akri&X-Amz-Signature=f81d20bd06cca3c11bcf9de2bcb9d37d539b67a0384a37d96f703f6b0f24add7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSHKF2O%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHOniF3IJvZ80sNIWBFX%2Fu19zGWzwifNqr1sY3WeAJe9AiAp%2FW3EZs0vpXQy%2BTWVq8lKH90%2FqFeV4bvvrCRDWhtYqiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8dzRJRYbitNC9JLYKtwDySybGWRLLyQdYGzE7jOJ%2FqXFOHQrsKLGibYFjIuUdjcqp8x2ZCF9uBs7FSxinOWkWfOSbdDbZIyf1PPHhjoQ6UHJqPrjowDbqHnbpjQHElPhifsa%2BWeqvoideaCgFxWbYRQC8IIc2V%2BcpsSrLMy790%2BOtYvC%2Fy88ZK%2BkmgM1q5jLXIJT0Lejv%2B1BoVRmjWoDzt0XdSEQRyolTQVPeq70a5pJM1KGQ62Q2XuBPxMlg3FRZqXYsa%2F3Z0BZViDFj%2BZfhJAv4hwPq5QD7OnWiEm47Q0uoV30EogPW3llkPj0gpaeD7qpoLvgYiWGyV9%2F7wgfCxb4yIRLczvnFa%2BY2xI16SFQY%2BSJHqojcTe%2BYt2oiiegJ2jXgzWVM24cd940BC551WbZ1DR%2FqZ6OUTV%2FKLUXHZbtiRPHk4W8qtrum0GDQmUUw4p%2F1aTGa2Ynu9dwJcNl4699O%2BcsfIPQRsr46Vr7RfK4P4g1bKodWWGyNTTmjw%2B%2BGD%2FhUtcAbPIVlcYJ71qOujJZfi7yrvN50xvnT0Cdbf0%2BH1eBW6GG1fSrrhpmI%2BvRp9FrZdh1%2BT%2FS4teZs%2F5%2FAO2zdVIZSK6XgOi6NOOTA%2FbDen%2BilhRibyN20oRzV8yaIwXlBU8n5%2FRX9n8wntrRwAY6pgEk0ekgjm62IFLwaoj29B%2FYsIh17U65nHfzuI%2BlyWMMZRvoNb4e%2FGm4KHX5oaI2GMU98CTzeoveIgGaznA52BYqcUhD9zOtCydFk1JmCwTEMw6H3YPjbkhGkXLKdwECICjyCboCH%2FC3ppXW9j7dzwViv70WGszgIxlLHw0hVHRvGys5OW4inHP9YsaaF%2BgOkxzBwwNSafzWkYbJeHFzJUcBwj78akri&X-Amz-Signature=da711b34b1962f66d93298ffa467aaf596cd1d2de423293c206995a9770ba243&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSHKF2O%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHOniF3IJvZ80sNIWBFX%2Fu19zGWzwifNqr1sY3WeAJe9AiAp%2FW3EZs0vpXQy%2BTWVq8lKH90%2FqFeV4bvvrCRDWhtYqiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8dzRJRYbitNC9JLYKtwDySybGWRLLyQdYGzE7jOJ%2FqXFOHQrsKLGibYFjIuUdjcqp8x2ZCF9uBs7FSxinOWkWfOSbdDbZIyf1PPHhjoQ6UHJqPrjowDbqHnbpjQHElPhifsa%2BWeqvoideaCgFxWbYRQC8IIc2V%2BcpsSrLMy790%2BOtYvC%2Fy88ZK%2BkmgM1q5jLXIJT0Lejv%2B1BoVRmjWoDzt0XdSEQRyolTQVPeq70a5pJM1KGQ62Q2XuBPxMlg3FRZqXYsa%2F3Z0BZViDFj%2BZfhJAv4hwPq5QD7OnWiEm47Q0uoV30EogPW3llkPj0gpaeD7qpoLvgYiWGyV9%2F7wgfCxb4yIRLczvnFa%2BY2xI16SFQY%2BSJHqojcTe%2BYt2oiiegJ2jXgzWVM24cd940BC551WbZ1DR%2FqZ6OUTV%2FKLUXHZbtiRPHk4W8qtrum0GDQmUUw4p%2F1aTGa2Ynu9dwJcNl4699O%2BcsfIPQRsr46Vr7RfK4P4g1bKodWWGyNTTmjw%2B%2BGD%2FhUtcAbPIVlcYJ71qOujJZfi7yrvN50xvnT0Cdbf0%2BH1eBW6GG1fSrrhpmI%2BvRp9FrZdh1%2BT%2FS4teZs%2F5%2FAO2zdVIZSK6XgOi6NOOTA%2FbDen%2BilhRibyN20oRzV8yaIwXlBU8n5%2FRX9n8wntrRwAY6pgEk0ekgjm62IFLwaoj29B%2FYsIh17U65nHfzuI%2BlyWMMZRvoNb4e%2FGm4KHX5oaI2GMU98CTzeoveIgGaznA52BYqcUhD9zOtCydFk1JmCwTEMw6H3YPjbkhGkXLKdwECICjyCboCH%2FC3ppXW9j7dzwViv70WGszgIxlLHw0hVHRvGys5OW4inHP9YsaaF%2BgOkxzBwwNSafzWkYbJeHFzJUcBwj78akri&X-Amz-Signature=e78de4f11a41df83c053fd363cbe7bb7067110eb394eb1551fdd3d427c52073f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSHKF2O%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHOniF3IJvZ80sNIWBFX%2Fu19zGWzwifNqr1sY3WeAJe9AiAp%2FW3EZs0vpXQy%2BTWVq8lKH90%2FqFeV4bvvrCRDWhtYqiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8dzRJRYbitNC9JLYKtwDySybGWRLLyQdYGzE7jOJ%2FqXFOHQrsKLGibYFjIuUdjcqp8x2ZCF9uBs7FSxinOWkWfOSbdDbZIyf1PPHhjoQ6UHJqPrjowDbqHnbpjQHElPhifsa%2BWeqvoideaCgFxWbYRQC8IIc2V%2BcpsSrLMy790%2BOtYvC%2Fy88ZK%2BkmgM1q5jLXIJT0Lejv%2B1BoVRmjWoDzt0XdSEQRyolTQVPeq70a5pJM1KGQ62Q2XuBPxMlg3FRZqXYsa%2F3Z0BZViDFj%2BZfhJAv4hwPq5QD7OnWiEm47Q0uoV30EogPW3llkPj0gpaeD7qpoLvgYiWGyV9%2F7wgfCxb4yIRLczvnFa%2BY2xI16SFQY%2BSJHqojcTe%2BYt2oiiegJ2jXgzWVM24cd940BC551WbZ1DR%2FqZ6OUTV%2FKLUXHZbtiRPHk4W8qtrum0GDQmUUw4p%2F1aTGa2Ynu9dwJcNl4699O%2BcsfIPQRsr46Vr7RfK4P4g1bKodWWGyNTTmjw%2B%2BGD%2FhUtcAbPIVlcYJ71qOujJZfi7yrvN50xvnT0Cdbf0%2BH1eBW6GG1fSrrhpmI%2BvRp9FrZdh1%2BT%2FS4teZs%2F5%2FAO2zdVIZSK6XgOi6NOOTA%2FbDen%2BilhRibyN20oRzV8yaIwXlBU8n5%2FRX9n8wntrRwAY6pgEk0ekgjm62IFLwaoj29B%2FYsIh17U65nHfzuI%2BlyWMMZRvoNb4e%2FGm4KHX5oaI2GMU98CTzeoveIgGaznA52BYqcUhD9zOtCydFk1JmCwTEMw6H3YPjbkhGkXLKdwECICjyCboCH%2FC3ppXW9j7dzwViv70WGszgIxlLHw0hVHRvGys5OW4inHP9YsaaF%2BgOkxzBwwNSafzWkYbJeHFzJUcBwj78akri&X-Amz-Signature=da0f64a8be3d6ba89850363d1ebe9e33f729dd325f0ccbc2dfeca307886c4d68&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSHKF2O%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHOniF3IJvZ80sNIWBFX%2Fu19zGWzwifNqr1sY3WeAJe9AiAp%2FW3EZs0vpXQy%2BTWVq8lKH90%2FqFeV4bvvrCRDWhtYqiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8dzRJRYbitNC9JLYKtwDySybGWRLLyQdYGzE7jOJ%2FqXFOHQrsKLGibYFjIuUdjcqp8x2ZCF9uBs7FSxinOWkWfOSbdDbZIyf1PPHhjoQ6UHJqPrjowDbqHnbpjQHElPhifsa%2BWeqvoideaCgFxWbYRQC8IIc2V%2BcpsSrLMy790%2BOtYvC%2Fy88ZK%2BkmgM1q5jLXIJT0Lejv%2B1BoVRmjWoDzt0XdSEQRyolTQVPeq70a5pJM1KGQ62Q2XuBPxMlg3FRZqXYsa%2F3Z0BZViDFj%2BZfhJAv4hwPq5QD7OnWiEm47Q0uoV30EogPW3llkPj0gpaeD7qpoLvgYiWGyV9%2F7wgfCxb4yIRLczvnFa%2BY2xI16SFQY%2BSJHqojcTe%2BYt2oiiegJ2jXgzWVM24cd940BC551WbZ1DR%2FqZ6OUTV%2FKLUXHZbtiRPHk4W8qtrum0GDQmUUw4p%2F1aTGa2Ynu9dwJcNl4699O%2BcsfIPQRsr46Vr7RfK4P4g1bKodWWGyNTTmjw%2B%2BGD%2FhUtcAbPIVlcYJ71qOujJZfi7yrvN50xvnT0Cdbf0%2BH1eBW6GG1fSrrhpmI%2BvRp9FrZdh1%2BT%2FS4teZs%2F5%2FAO2zdVIZSK6XgOi6NOOTA%2FbDen%2BilhRibyN20oRzV8yaIwXlBU8n5%2FRX9n8wntrRwAY6pgEk0ekgjm62IFLwaoj29B%2FYsIh17U65nHfzuI%2BlyWMMZRvoNb4e%2FGm4KHX5oaI2GMU98CTzeoveIgGaznA52BYqcUhD9zOtCydFk1JmCwTEMw6H3YPjbkhGkXLKdwECICjyCboCH%2FC3ppXW9j7dzwViv70WGszgIxlLHw0hVHRvGys5OW4inHP9YsaaF%2BgOkxzBwwNSafzWkYbJeHFzJUcBwj78akri&X-Amz-Signature=db44f373b6e28f1b7dc93ae75e28413fc5aefb597db926947a2502cb60efcaf2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSHKF2O%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHOniF3IJvZ80sNIWBFX%2Fu19zGWzwifNqr1sY3WeAJe9AiAp%2FW3EZs0vpXQy%2BTWVq8lKH90%2FqFeV4bvvrCRDWhtYqiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8dzRJRYbitNC9JLYKtwDySybGWRLLyQdYGzE7jOJ%2FqXFOHQrsKLGibYFjIuUdjcqp8x2ZCF9uBs7FSxinOWkWfOSbdDbZIyf1PPHhjoQ6UHJqPrjowDbqHnbpjQHElPhifsa%2BWeqvoideaCgFxWbYRQC8IIc2V%2BcpsSrLMy790%2BOtYvC%2Fy88ZK%2BkmgM1q5jLXIJT0Lejv%2B1BoVRmjWoDzt0XdSEQRyolTQVPeq70a5pJM1KGQ62Q2XuBPxMlg3FRZqXYsa%2F3Z0BZViDFj%2BZfhJAv4hwPq5QD7OnWiEm47Q0uoV30EogPW3llkPj0gpaeD7qpoLvgYiWGyV9%2F7wgfCxb4yIRLczvnFa%2BY2xI16SFQY%2BSJHqojcTe%2BYt2oiiegJ2jXgzWVM24cd940BC551WbZ1DR%2FqZ6OUTV%2FKLUXHZbtiRPHk4W8qtrum0GDQmUUw4p%2F1aTGa2Ynu9dwJcNl4699O%2BcsfIPQRsr46Vr7RfK4P4g1bKodWWGyNTTmjw%2B%2BGD%2FhUtcAbPIVlcYJ71qOujJZfi7yrvN50xvnT0Cdbf0%2BH1eBW6GG1fSrrhpmI%2BvRp9FrZdh1%2BT%2FS4teZs%2F5%2FAO2zdVIZSK6XgOi6NOOTA%2FbDen%2BilhRibyN20oRzV8yaIwXlBU8n5%2FRX9n8wntrRwAY6pgEk0ekgjm62IFLwaoj29B%2FYsIh17U65nHfzuI%2BlyWMMZRvoNb4e%2FGm4KHX5oaI2GMU98CTzeoveIgGaznA52BYqcUhD9zOtCydFk1JmCwTEMw6H3YPjbkhGkXLKdwECICjyCboCH%2FC3ppXW9j7dzwViv70WGszgIxlLHw0hVHRvGys5OW4inHP9YsaaF%2BgOkxzBwwNSafzWkYbJeHFzJUcBwj78akri&X-Amz-Signature=ff9f8685293f1f94af33b94f7742af50c2dcacf6fe5accc4b61cea8c42c0c50a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
