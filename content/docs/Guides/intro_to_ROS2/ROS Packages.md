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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2D3NS4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCKp7tGJy04Yaix0uz3emPrmhvvSREc%2Brj8Je9IQ5rAeQIhAPBx%2FyhUWKP%2FJrvT7EWJQw2RSA4GRcXUsNF7A%2Fp38xlFKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnH5jad0IsqexSALUq3AOFYFoD73aQAGMCLRu2K8Pn7oFqMBh%2FVK5OgqJLIr3B7rVoa4yujFmp5OhYGMLckqZ3lr6Em47b2DhAdMVx5m60S7KrzUNH%2B0NyvG7602dJjmR4l6kkoriU9e9wYByq41J2RzNQM%2Fjl3Rd3BHaYDAWXFoWy5lD0jRWCdJardsM73WIODiFw8GbMi6Xhf7dLH4b7zWPh6US2zbVx2i69EH4qrWBasWYfL8mThOVhgzcXDwPIWJtb7oYGxQm%2BYhxj6DWWYTDl%2FGts5wS3FkYgCQWAdNp6JZerhRrRU0GBuXKXeu0hwbdmFzz1cPtKcZa81rYqjPshfXLk4jtBVrjolHh9UMK83PnamrjEMf2XJ2EKE%2Btg9MVoaQf7nac%2B%2B8URkOGTpxupk66FPvPkKbEh5k%2BwbpNEoFmiS38FgoPJafsaw9UfKMgNcowiCtS8Z7YKxNW2Un0ZKEvYZydSaxjP%2BRzVrw5NxlZGjtYzSqyTJt%2B8l3eV%2Bcc%2Bhht47s7SN6PbkTqZht44M32cKmozPB29pGo37UhuGjSLNH71HPcoylDt0eVkIgPkfM3032lEpY2CCdyqdcQoPHxTvbRVGCcXFyAmbK7s9oMCZT%2BLuzQETg0PjeVJ%2BFSqt88rlF%2BEgTCutKHEBjqkAe%2BIr0mhQIDq3Gni1c8cXxgJg%2FKbdzTiBWQCgMFyEWBqjXWOciD9SeXqHSwgqPsXXNHgUX%2FNqAcuP9qPg0CcEr%2F1xlnsNDWJKj4mjoMCLRhO8iMXUjhjk%2FlP9%2FFsf%2Bwv0mwrn5ehI08s6JVlctqrNjkcbEz3t5XOqUMWXNw1J5dZGa4AZl1fa5g2CMSvuLy4QP85Zaka%2Fbq750fyJN95P%2FdiWDs%2B&X-Amz-Signature=a3fdf3a19e80adc3e6eac6c0d737a43e9cf39d2bccda5bdbae0f9fbdce5cd186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2D3NS4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCKp7tGJy04Yaix0uz3emPrmhvvSREc%2Brj8Je9IQ5rAeQIhAPBx%2FyhUWKP%2FJrvT7EWJQw2RSA4GRcXUsNF7A%2Fp38xlFKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnH5jad0IsqexSALUq3AOFYFoD73aQAGMCLRu2K8Pn7oFqMBh%2FVK5OgqJLIr3B7rVoa4yujFmp5OhYGMLckqZ3lr6Em47b2DhAdMVx5m60S7KrzUNH%2B0NyvG7602dJjmR4l6kkoriU9e9wYByq41J2RzNQM%2Fjl3Rd3BHaYDAWXFoWy5lD0jRWCdJardsM73WIODiFw8GbMi6Xhf7dLH4b7zWPh6US2zbVx2i69EH4qrWBasWYfL8mThOVhgzcXDwPIWJtb7oYGxQm%2BYhxj6DWWYTDl%2FGts5wS3FkYgCQWAdNp6JZerhRrRU0GBuXKXeu0hwbdmFzz1cPtKcZa81rYqjPshfXLk4jtBVrjolHh9UMK83PnamrjEMf2XJ2EKE%2Btg9MVoaQf7nac%2B%2B8URkOGTpxupk66FPvPkKbEh5k%2BwbpNEoFmiS38FgoPJafsaw9UfKMgNcowiCtS8Z7YKxNW2Un0ZKEvYZydSaxjP%2BRzVrw5NxlZGjtYzSqyTJt%2B8l3eV%2Bcc%2Bhht47s7SN6PbkTqZht44M32cKmozPB29pGo37UhuGjSLNH71HPcoylDt0eVkIgPkfM3032lEpY2CCdyqdcQoPHxTvbRVGCcXFyAmbK7s9oMCZT%2BLuzQETg0PjeVJ%2BFSqt88rlF%2BEgTCutKHEBjqkAe%2BIr0mhQIDq3Gni1c8cXxgJg%2FKbdzTiBWQCgMFyEWBqjXWOciD9SeXqHSwgqPsXXNHgUX%2FNqAcuP9qPg0CcEr%2F1xlnsNDWJKj4mjoMCLRhO8iMXUjhjk%2FlP9%2FFsf%2Bwv0mwrn5ehI08s6JVlctqrNjkcbEz3t5XOqUMWXNw1J5dZGa4AZl1fa5g2CMSvuLy4QP85Zaka%2Fbq750fyJN95P%2FdiWDs%2B&X-Amz-Signature=65781f6bc0f54962506f6cf0419e05945f593f0d5baabede00fffcaf980b5324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2D3NS4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCKp7tGJy04Yaix0uz3emPrmhvvSREc%2Brj8Je9IQ5rAeQIhAPBx%2FyhUWKP%2FJrvT7EWJQw2RSA4GRcXUsNF7A%2Fp38xlFKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnH5jad0IsqexSALUq3AOFYFoD73aQAGMCLRu2K8Pn7oFqMBh%2FVK5OgqJLIr3B7rVoa4yujFmp5OhYGMLckqZ3lr6Em47b2DhAdMVx5m60S7KrzUNH%2B0NyvG7602dJjmR4l6kkoriU9e9wYByq41J2RzNQM%2Fjl3Rd3BHaYDAWXFoWy5lD0jRWCdJardsM73WIODiFw8GbMi6Xhf7dLH4b7zWPh6US2zbVx2i69EH4qrWBasWYfL8mThOVhgzcXDwPIWJtb7oYGxQm%2BYhxj6DWWYTDl%2FGts5wS3FkYgCQWAdNp6JZerhRrRU0GBuXKXeu0hwbdmFzz1cPtKcZa81rYqjPshfXLk4jtBVrjolHh9UMK83PnamrjEMf2XJ2EKE%2Btg9MVoaQf7nac%2B%2B8URkOGTpxupk66FPvPkKbEh5k%2BwbpNEoFmiS38FgoPJafsaw9UfKMgNcowiCtS8Z7YKxNW2Un0ZKEvYZydSaxjP%2BRzVrw5NxlZGjtYzSqyTJt%2B8l3eV%2Bcc%2Bhht47s7SN6PbkTqZht44M32cKmozPB29pGo37UhuGjSLNH71HPcoylDt0eVkIgPkfM3032lEpY2CCdyqdcQoPHxTvbRVGCcXFyAmbK7s9oMCZT%2BLuzQETg0PjeVJ%2BFSqt88rlF%2BEgTCutKHEBjqkAe%2BIr0mhQIDq3Gni1c8cXxgJg%2FKbdzTiBWQCgMFyEWBqjXWOciD9SeXqHSwgqPsXXNHgUX%2FNqAcuP9qPg0CcEr%2F1xlnsNDWJKj4mjoMCLRhO8iMXUjhjk%2FlP9%2FFsf%2Bwv0mwrn5ehI08s6JVlctqrNjkcbEz3t5XOqUMWXNw1J5dZGa4AZl1fa5g2CMSvuLy4QP85Zaka%2Fbq750fyJN95P%2FdiWDs%2B&X-Amz-Signature=1938f4909f4d629c45cd0a308f8dd577755417b388ffd083331363bffe0d13d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2D3NS4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCKp7tGJy04Yaix0uz3emPrmhvvSREc%2Brj8Je9IQ5rAeQIhAPBx%2FyhUWKP%2FJrvT7EWJQw2RSA4GRcXUsNF7A%2Fp38xlFKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnH5jad0IsqexSALUq3AOFYFoD73aQAGMCLRu2K8Pn7oFqMBh%2FVK5OgqJLIr3B7rVoa4yujFmp5OhYGMLckqZ3lr6Em47b2DhAdMVx5m60S7KrzUNH%2B0NyvG7602dJjmR4l6kkoriU9e9wYByq41J2RzNQM%2Fjl3Rd3BHaYDAWXFoWy5lD0jRWCdJardsM73WIODiFw8GbMi6Xhf7dLH4b7zWPh6US2zbVx2i69EH4qrWBasWYfL8mThOVhgzcXDwPIWJtb7oYGxQm%2BYhxj6DWWYTDl%2FGts5wS3FkYgCQWAdNp6JZerhRrRU0GBuXKXeu0hwbdmFzz1cPtKcZa81rYqjPshfXLk4jtBVrjolHh9UMK83PnamrjEMf2XJ2EKE%2Btg9MVoaQf7nac%2B%2B8URkOGTpxupk66FPvPkKbEh5k%2BwbpNEoFmiS38FgoPJafsaw9UfKMgNcowiCtS8Z7YKxNW2Un0ZKEvYZydSaxjP%2BRzVrw5NxlZGjtYzSqyTJt%2B8l3eV%2Bcc%2Bhht47s7SN6PbkTqZht44M32cKmozPB29pGo37UhuGjSLNH71HPcoylDt0eVkIgPkfM3032lEpY2CCdyqdcQoPHxTvbRVGCcXFyAmbK7s9oMCZT%2BLuzQETg0PjeVJ%2BFSqt88rlF%2BEgTCutKHEBjqkAe%2BIr0mhQIDq3Gni1c8cXxgJg%2FKbdzTiBWQCgMFyEWBqjXWOciD9SeXqHSwgqPsXXNHgUX%2FNqAcuP9qPg0CcEr%2F1xlnsNDWJKj4mjoMCLRhO8iMXUjhjk%2FlP9%2FFsf%2Bwv0mwrn5ehI08s6JVlctqrNjkcbEz3t5XOqUMWXNw1J5dZGa4AZl1fa5g2CMSvuLy4QP85Zaka%2Fbq750fyJN95P%2FdiWDs%2B&X-Amz-Signature=d33198cdf13351db7fa2b824ea256704177314e2c560f3c717a79fbc041d32dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2D3NS4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCKp7tGJy04Yaix0uz3emPrmhvvSREc%2Brj8Je9IQ5rAeQIhAPBx%2FyhUWKP%2FJrvT7EWJQw2RSA4GRcXUsNF7A%2Fp38xlFKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnH5jad0IsqexSALUq3AOFYFoD73aQAGMCLRu2K8Pn7oFqMBh%2FVK5OgqJLIr3B7rVoa4yujFmp5OhYGMLckqZ3lr6Em47b2DhAdMVx5m60S7KrzUNH%2B0NyvG7602dJjmR4l6kkoriU9e9wYByq41J2RzNQM%2Fjl3Rd3BHaYDAWXFoWy5lD0jRWCdJardsM73WIODiFw8GbMi6Xhf7dLH4b7zWPh6US2zbVx2i69EH4qrWBasWYfL8mThOVhgzcXDwPIWJtb7oYGxQm%2BYhxj6DWWYTDl%2FGts5wS3FkYgCQWAdNp6JZerhRrRU0GBuXKXeu0hwbdmFzz1cPtKcZa81rYqjPshfXLk4jtBVrjolHh9UMK83PnamrjEMf2XJ2EKE%2Btg9MVoaQf7nac%2B%2B8URkOGTpxupk66FPvPkKbEh5k%2BwbpNEoFmiS38FgoPJafsaw9UfKMgNcowiCtS8Z7YKxNW2Un0ZKEvYZydSaxjP%2BRzVrw5NxlZGjtYzSqyTJt%2B8l3eV%2Bcc%2Bhht47s7SN6PbkTqZht44M32cKmozPB29pGo37UhuGjSLNH71HPcoylDt0eVkIgPkfM3032lEpY2CCdyqdcQoPHxTvbRVGCcXFyAmbK7s9oMCZT%2BLuzQETg0PjeVJ%2BFSqt88rlF%2BEgTCutKHEBjqkAe%2BIr0mhQIDq3Gni1c8cXxgJg%2FKbdzTiBWQCgMFyEWBqjXWOciD9SeXqHSwgqPsXXNHgUX%2FNqAcuP9qPg0CcEr%2F1xlnsNDWJKj4mjoMCLRhO8iMXUjhjk%2FlP9%2FFsf%2Bwv0mwrn5ehI08s6JVlctqrNjkcbEz3t5XOqUMWXNw1J5dZGa4AZl1fa5g2CMSvuLy4QP85Zaka%2Fbq750fyJN95P%2FdiWDs%2B&X-Amz-Signature=15ddce562cdf3388fd9775a5447cbd4c6dfd994308f43ae9a5a66464933becbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2D3NS4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCKp7tGJy04Yaix0uz3emPrmhvvSREc%2Brj8Je9IQ5rAeQIhAPBx%2FyhUWKP%2FJrvT7EWJQw2RSA4GRcXUsNF7A%2Fp38xlFKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnH5jad0IsqexSALUq3AOFYFoD73aQAGMCLRu2K8Pn7oFqMBh%2FVK5OgqJLIr3B7rVoa4yujFmp5OhYGMLckqZ3lr6Em47b2DhAdMVx5m60S7KrzUNH%2B0NyvG7602dJjmR4l6kkoriU9e9wYByq41J2RzNQM%2Fjl3Rd3BHaYDAWXFoWy5lD0jRWCdJardsM73WIODiFw8GbMi6Xhf7dLH4b7zWPh6US2zbVx2i69EH4qrWBasWYfL8mThOVhgzcXDwPIWJtb7oYGxQm%2BYhxj6DWWYTDl%2FGts5wS3FkYgCQWAdNp6JZerhRrRU0GBuXKXeu0hwbdmFzz1cPtKcZa81rYqjPshfXLk4jtBVrjolHh9UMK83PnamrjEMf2XJ2EKE%2Btg9MVoaQf7nac%2B%2B8URkOGTpxupk66FPvPkKbEh5k%2BwbpNEoFmiS38FgoPJafsaw9UfKMgNcowiCtS8Z7YKxNW2Un0ZKEvYZydSaxjP%2BRzVrw5NxlZGjtYzSqyTJt%2B8l3eV%2Bcc%2Bhht47s7SN6PbkTqZht44M32cKmozPB29pGo37UhuGjSLNH71HPcoylDt0eVkIgPkfM3032lEpY2CCdyqdcQoPHxTvbRVGCcXFyAmbK7s9oMCZT%2BLuzQETg0PjeVJ%2BFSqt88rlF%2BEgTCutKHEBjqkAe%2BIr0mhQIDq3Gni1c8cXxgJg%2FKbdzTiBWQCgMFyEWBqjXWOciD9SeXqHSwgqPsXXNHgUX%2FNqAcuP9qPg0CcEr%2F1xlnsNDWJKj4mjoMCLRhO8iMXUjhjk%2FlP9%2FFsf%2Bwv0mwrn5ehI08s6JVlctqrNjkcbEz3t5XOqUMWXNw1J5dZGa4AZl1fa5g2CMSvuLy4QP85Zaka%2Fbq750fyJN95P%2FdiWDs%2B&X-Amz-Signature=8c414df89818b2bd214a2df3d8dbd9f0f5c80dab9a1ae1154775ba38fff35848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2D3NS4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCKp7tGJy04Yaix0uz3emPrmhvvSREc%2Brj8Je9IQ5rAeQIhAPBx%2FyhUWKP%2FJrvT7EWJQw2RSA4GRcXUsNF7A%2Fp38xlFKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnH5jad0IsqexSALUq3AOFYFoD73aQAGMCLRu2K8Pn7oFqMBh%2FVK5OgqJLIr3B7rVoa4yujFmp5OhYGMLckqZ3lr6Em47b2DhAdMVx5m60S7KrzUNH%2B0NyvG7602dJjmR4l6kkoriU9e9wYByq41J2RzNQM%2Fjl3Rd3BHaYDAWXFoWy5lD0jRWCdJardsM73WIODiFw8GbMi6Xhf7dLH4b7zWPh6US2zbVx2i69EH4qrWBasWYfL8mThOVhgzcXDwPIWJtb7oYGxQm%2BYhxj6DWWYTDl%2FGts5wS3FkYgCQWAdNp6JZerhRrRU0GBuXKXeu0hwbdmFzz1cPtKcZa81rYqjPshfXLk4jtBVrjolHh9UMK83PnamrjEMf2XJ2EKE%2Btg9MVoaQf7nac%2B%2B8URkOGTpxupk66FPvPkKbEh5k%2BwbpNEoFmiS38FgoPJafsaw9UfKMgNcowiCtS8Z7YKxNW2Un0ZKEvYZydSaxjP%2BRzVrw5NxlZGjtYzSqyTJt%2B8l3eV%2Bcc%2Bhht47s7SN6PbkTqZht44M32cKmozPB29pGo37UhuGjSLNH71HPcoylDt0eVkIgPkfM3032lEpY2CCdyqdcQoPHxTvbRVGCcXFyAmbK7s9oMCZT%2BLuzQETg0PjeVJ%2BFSqt88rlF%2BEgTCutKHEBjqkAe%2BIr0mhQIDq3Gni1c8cXxgJg%2FKbdzTiBWQCgMFyEWBqjXWOciD9SeXqHSwgqPsXXNHgUX%2FNqAcuP9qPg0CcEr%2F1xlnsNDWJKj4mjoMCLRhO8iMXUjhjk%2FlP9%2FFsf%2Bwv0mwrn5ehI08s6JVlctqrNjkcbEz3t5XOqUMWXNw1J5dZGa4AZl1fa5g2CMSvuLy4QP85Zaka%2Fbq750fyJN95P%2FdiWDs%2B&X-Amz-Signature=5b4539a6b001e0ba6a3ad79bb1d59cb1c56a7c8b6afe741063e9e968af96489d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
