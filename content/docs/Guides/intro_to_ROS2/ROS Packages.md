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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGF4HWL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC1JUAFSTp7ZADPm5ZAf7IbdOLiAAr3GjMWJ0B0ARhBvAIgQyh3kBoCFPcZd5FdfGQdtRxRQGUH%2BppoZ3%2FBoWvMjQIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDABA0neNpIsibt4p8SrcA90mCohPl6pH3zHCVlX9tNwJjBQf3xqbeDI8PbC8lgsmxj6mvg8Jc%2F0Cd9kCp3VGtGv4%2FdJby%2FqbeZMm%2FhwGaOcYLAdXolDwgJmlfGdMXh7RuhkQbpVe%2B2%2BirGK76tpPn2p60uSP4iP757RVmRIEFzU8Xxz%2FvJR1fmRB35vLGPI2pIPhnbDdMfmH6ee336wcxNnbm%2B%2FWfOwqr7z4EQtV1%2FSlSztTEqDipZCW1ZHsXecq7bxz6Mxy74AuBxuS%2BEDCQwbiShv%2BfhmQTWz3Gb2Jt8qFpZ0F27%2BYHN%2FBuAzKNaBatY18KjqU%2BAXwoDNhtjRy1rXV910YQkQE0Aghcehttx4y8Uj2WteIG5mz3oXYGwn%2BqrZoVzg7iLTcgJl9e21ERsSsHzLIt91tuP3OMhCP%2BZQkDabrHyqTIbNgq3OMRVwORDruzrtbJbY1DRUSRzmsigtXK4t%2B9QfKl3E1weOESZFCOZj29CG925Agm19miBIU%2B8P554ondye7N4imFHgQXzu%2BnOATx1JiqfY9HCXCG6CgCkjSHHOj97l7x39XD7s09AfiYr%2BSgK%2B1YBGyfEjCdGdhZLJqEaxcntWMgs3QCSWsuVVHQGBUl%2B0eDlA7ZHb76jUcpiD7BwP4v%2BiZMLehlMEGOqUBcJNRAKS%2F3aGZQRzVZE0ZztUryyncSRbFsa6%2FTQxAD3KlCy%2Fq8g6Zc30tyg294h4%2FvYx3exLezCWB32Kn%2F2blxaTZjyGdUWAHK1wCzWgSZxAt7irGAJZPjIQvtwv3oD0QZINgmdj9tTmi1zjWSwCGrnLaTZeVImd0q91UQea2865bpv3uKFY7QGYZkW2QUqhZu3NZVZYUVnYCwgee%2Bpkasu9QrW96&X-Amz-Signature=8c9d635825acb69b39aae43b1b8f4d5a2e78e88926d5d2e4bf305c3ab64e30ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGF4HWL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC1JUAFSTp7ZADPm5ZAf7IbdOLiAAr3GjMWJ0B0ARhBvAIgQyh3kBoCFPcZd5FdfGQdtRxRQGUH%2BppoZ3%2FBoWvMjQIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDABA0neNpIsibt4p8SrcA90mCohPl6pH3zHCVlX9tNwJjBQf3xqbeDI8PbC8lgsmxj6mvg8Jc%2F0Cd9kCp3VGtGv4%2FdJby%2FqbeZMm%2FhwGaOcYLAdXolDwgJmlfGdMXh7RuhkQbpVe%2B2%2BirGK76tpPn2p60uSP4iP757RVmRIEFzU8Xxz%2FvJR1fmRB35vLGPI2pIPhnbDdMfmH6ee336wcxNnbm%2B%2FWfOwqr7z4EQtV1%2FSlSztTEqDipZCW1ZHsXecq7bxz6Mxy74AuBxuS%2BEDCQwbiShv%2BfhmQTWz3Gb2Jt8qFpZ0F27%2BYHN%2FBuAzKNaBatY18KjqU%2BAXwoDNhtjRy1rXV910YQkQE0Aghcehttx4y8Uj2WteIG5mz3oXYGwn%2BqrZoVzg7iLTcgJl9e21ERsSsHzLIt91tuP3OMhCP%2BZQkDabrHyqTIbNgq3OMRVwORDruzrtbJbY1DRUSRzmsigtXK4t%2B9QfKl3E1weOESZFCOZj29CG925Agm19miBIU%2B8P554ondye7N4imFHgQXzu%2BnOATx1JiqfY9HCXCG6CgCkjSHHOj97l7x39XD7s09AfiYr%2BSgK%2B1YBGyfEjCdGdhZLJqEaxcntWMgs3QCSWsuVVHQGBUl%2B0eDlA7ZHb76jUcpiD7BwP4v%2BiZMLehlMEGOqUBcJNRAKS%2F3aGZQRzVZE0ZztUryyncSRbFsa6%2FTQxAD3KlCy%2Fq8g6Zc30tyg294h4%2FvYx3exLezCWB32Kn%2F2blxaTZjyGdUWAHK1wCzWgSZxAt7irGAJZPjIQvtwv3oD0QZINgmdj9tTmi1zjWSwCGrnLaTZeVImd0q91UQea2865bpv3uKFY7QGYZkW2QUqhZu3NZVZYUVnYCwgee%2Bpkasu9QrW96&X-Amz-Signature=edcafed1c5db3821bd7e1b2080f4066f53654acb02ff4023652220fca8024dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGF4HWL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC1JUAFSTp7ZADPm5ZAf7IbdOLiAAr3GjMWJ0B0ARhBvAIgQyh3kBoCFPcZd5FdfGQdtRxRQGUH%2BppoZ3%2FBoWvMjQIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDABA0neNpIsibt4p8SrcA90mCohPl6pH3zHCVlX9tNwJjBQf3xqbeDI8PbC8lgsmxj6mvg8Jc%2F0Cd9kCp3VGtGv4%2FdJby%2FqbeZMm%2FhwGaOcYLAdXolDwgJmlfGdMXh7RuhkQbpVe%2B2%2BirGK76tpPn2p60uSP4iP757RVmRIEFzU8Xxz%2FvJR1fmRB35vLGPI2pIPhnbDdMfmH6ee336wcxNnbm%2B%2FWfOwqr7z4EQtV1%2FSlSztTEqDipZCW1ZHsXecq7bxz6Mxy74AuBxuS%2BEDCQwbiShv%2BfhmQTWz3Gb2Jt8qFpZ0F27%2BYHN%2FBuAzKNaBatY18KjqU%2BAXwoDNhtjRy1rXV910YQkQE0Aghcehttx4y8Uj2WteIG5mz3oXYGwn%2BqrZoVzg7iLTcgJl9e21ERsSsHzLIt91tuP3OMhCP%2BZQkDabrHyqTIbNgq3OMRVwORDruzrtbJbY1DRUSRzmsigtXK4t%2B9QfKl3E1weOESZFCOZj29CG925Agm19miBIU%2B8P554ondye7N4imFHgQXzu%2BnOATx1JiqfY9HCXCG6CgCkjSHHOj97l7x39XD7s09AfiYr%2BSgK%2B1YBGyfEjCdGdhZLJqEaxcntWMgs3QCSWsuVVHQGBUl%2B0eDlA7ZHb76jUcpiD7BwP4v%2BiZMLehlMEGOqUBcJNRAKS%2F3aGZQRzVZE0ZztUryyncSRbFsa6%2FTQxAD3KlCy%2Fq8g6Zc30tyg294h4%2FvYx3exLezCWB32Kn%2F2blxaTZjyGdUWAHK1wCzWgSZxAt7irGAJZPjIQvtwv3oD0QZINgmdj9tTmi1zjWSwCGrnLaTZeVImd0q91UQea2865bpv3uKFY7QGYZkW2QUqhZu3NZVZYUVnYCwgee%2Bpkasu9QrW96&X-Amz-Signature=b1a3f99d5e76e4f525f16de7e4ec5050fa0c7ddb88e09da8738e76bc8434aca9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGF4HWL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC1JUAFSTp7ZADPm5ZAf7IbdOLiAAr3GjMWJ0B0ARhBvAIgQyh3kBoCFPcZd5FdfGQdtRxRQGUH%2BppoZ3%2FBoWvMjQIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDABA0neNpIsibt4p8SrcA90mCohPl6pH3zHCVlX9tNwJjBQf3xqbeDI8PbC8lgsmxj6mvg8Jc%2F0Cd9kCp3VGtGv4%2FdJby%2FqbeZMm%2FhwGaOcYLAdXolDwgJmlfGdMXh7RuhkQbpVe%2B2%2BirGK76tpPn2p60uSP4iP757RVmRIEFzU8Xxz%2FvJR1fmRB35vLGPI2pIPhnbDdMfmH6ee336wcxNnbm%2B%2FWfOwqr7z4EQtV1%2FSlSztTEqDipZCW1ZHsXecq7bxz6Mxy74AuBxuS%2BEDCQwbiShv%2BfhmQTWz3Gb2Jt8qFpZ0F27%2BYHN%2FBuAzKNaBatY18KjqU%2BAXwoDNhtjRy1rXV910YQkQE0Aghcehttx4y8Uj2WteIG5mz3oXYGwn%2BqrZoVzg7iLTcgJl9e21ERsSsHzLIt91tuP3OMhCP%2BZQkDabrHyqTIbNgq3OMRVwORDruzrtbJbY1DRUSRzmsigtXK4t%2B9QfKl3E1weOESZFCOZj29CG925Agm19miBIU%2B8P554ondye7N4imFHgQXzu%2BnOATx1JiqfY9HCXCG6CgCkjSHHOj97l7x39XD7s09AfiYr%2BSgK%2B1YBGyfEjCdGdhZLJqEaxcntWMgs3QCSWsuVVHQGBUl%2B0eDlA7ZHb76jUcpiD7BwP4v%2BiZMLehlMEGOqUBcJNRAKS%2F3aGZQRzVZE0ZztUryyncSRbFsa6%2FTQxAD3KlCy%2Fq8g6Zc30tyg294h4%2FvYx3exLezCWB32Kn%2F2blxaTZjyGdUWAHK1wCzWgSZxAt7irGAJZPjIQvtwv3oD0QZINgmdj9tTmi1zjWSwCGrnLaTZeVImd0q91UQea2865bpv3uKFY7QGYZkW2QUqhZu3NZVZYUVnYCwgee%2Bpkasu9QrW96&X-Amz-Signature=8393f405775fe5fd8b9e785e7da34426c4605aca69871581bb13095c32e92925&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGF4HWL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC1JUAFSTp7ZADPm5ZAf7IbdOLiAAr3GjMWJ0B0ARhBvAIgQyh3kBoCFPcZd5FdfGQdtRxRQGUH%2BppoZ3%2FBoWvMjQIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDABA0neNpIsibt4p8SrcA90mCohPl6pH3zHCVlX9tNwJjBQf3xqbeDI8PbC8lgsmxj6mvg8Jc%2F0Cd9kCp3VGtGv4%2FdJby%2FqbeZMm%2FhwGaOcYLAdXolDwgJmlfGdMXh7RuhkQbpVe%2B2%2BirGK76tpPn2p60uSP4iP757RVmRIEFzU8Xxz%2FvJR1fmRB35vLGPI2pIPhnbDdMfmH6ee336wcxNnbm%2B%2FWfOwqr7z4EQtV1%2FSlSztTEqDipZCW1ZHsXecq7bxz6Mxy74AuBxuS%2BEDCQwbiShv%2BfhmQTWz3Gb2Jt8qFpZ0F27%2BYHN%2FBuAzKNaBatY18KjqU%2BAXwoDNhtjRy1rXV910YQkQE0Aghcehttx4y8Uj2WteIG5mz3oXYGwn%2BqrZoVzg7iLTcgJl9e21ERsSsHzLIt91tuP3OMhCP%2BZQkDabrHyqTIbNgq3OMRVwORDruzrtbJbY1DRUSRzmsigtXK4t%2B9QfKl3E1weOESZFCOZj29CG925Agm19miBIU%2B8P554ondye7N4imFHgQXzu%2BnOATx1JiqfY9HCXCG6CgCkjSHHOj97l7x39XD7s09AfiYr%2BSgK%2B1YBGyfEjCdGdhZLJqEaxcntWMgs3QCSWsuVVHQGBUl%2B0eDlA7ZHb76jUcpiD7BwP4v%2BiZMLehlMEGOqUBcJNRAKS%2F3aGZQRzVZE0ZztUryyncSRbFsa6%2FTQxAD3KlCy%2Fq8g6Zc30tyg294h4%2FvYx3exLezCWB32Kn%2F2blxaTZjyGdUWAHK1wCzWgSZxAt7irGAJZPjIQvtwv3oD0QZINgmdj9tTmi1zjWSwCGrnLaTZeVImd0q91UQea2865bpv3uKFY7QGYZkW2QUqhZu3NZVZYUVnYCwgee%2Bpkasu9QrW96&X-Amz-Signature=5b198656013af3938ea851618ee5e9c5e22808cd27f8701b7845e2975ff4b851&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGF4HWL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC1JUAFSTp7ZADPm5ZAf7IbdOLiAAr3GjMWJ0B0ARhBvAIgQyh3kBoCFPcZd5FdfGQdtRxRQGUH%2BppoZ3%2FBoWvMjQIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDABA0neNpIsibt4p8SrcA90mCohPl6pH3zHCVlX9tNwJjBQf3xqbeDI8PbC8lgsmxj6mvg8Jc%2F0Cd9kCp3VGtGv4%2FdJby%2FqbeZMm%2FhwGaOcYLAdXolDwgJmlfGdMXh7RuhkQbpVe%2B2%2BirGK76tpPn2p60uSP4iP757RVmRIEFzU8Xxz%2FvJR1fmRB35vLGPI2pIPhnbDdMfmH6ee336wcxNnbm%2B%2FWfOwqr7z4EQtV1%2FSlSztTEqDipZCW1ZHsXecq7bxz6Mxy74AuBxuS%2BEDCQwbiShv%2BfhmQTWz3Gb2Jt8qFpZ0F27%2BYHN%2FBuAzKNaBatY18KjqU%2BAXwoDNhtjRy1rXV910YQkQE0Aghcehttx4y8Uj2WteIG5mz3oXYGwn%2BqrZoVzg7iLTcgJl9e21ERsSsHzLIt91tuP3OMhCP%2BZQkDabrHyqTIbNgq3OMRVwORDruzrtbJbY1DRUSRzmsigtXK4t%2B9QfKl3E1weOESZFCOZj29CG925Agm19miBIU%2B8P554ondye7N4imFHgQXzu%2BnOATx1JiqfY9HCXCG6CgCkjSHHOj97l7x39XD7s09AfiYr%2BSgK%2B1YBGyfEjCdGdhZLJqEaxcntWMgs3QCSWsuVVHQGBUl%2B0eDlA7ZHb76jUcpiD7BwP4v%2BiZMLehlMEGOqUBcJNRAKS%2F3aGZQRzVZE0ZztUryyncSRbFsa6%2FTQxAD3KlCy%2Fq8g6Zc30tyg294h4%2FvYx3exLezCWB32Kn%2F2blxaTZjyGdUWAHK1wCzWgSZxAt7irGAJZPjIQvtwv3oD0QZINgmdj9tTmi1zjWSwCGrnLaTZeVImd0q91UQea2865bpv3uKFY7QGYZkW2QUqhZu3NZVZYUVnYCwgee%2Bpkasu9QrW96&X-Amz-Signature=fbdb2efc5ac916249ec71e78b9432523e55c233360c4211037061170136ff9d6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGF4HWL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC1JUAFSTp7ZADPm5ZAf7IbdOLiAAr3GjMWJ0B0ARhBvAIgQyh3kBoCFPcZd5FdfGQdtRxRQGUH%2BppoZ3%2FBoWvMjQIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDABA0neNpIsibt4p8SrcA90mCohPl6pH3zHCVlX9tNwJjBQf3xqbeDI8PbC8lgsmxj6mvg8Jc%2F0Cd9kCp3VGtGv4%2FdJby%2FqbeZMm%2FhwGaOcYLAdXolDwgJmlfGdMXh7RuhkQbpVe%2B2%2BirGK76tpPn2p60uSP4iP757RVmRIEFzU8Xxz%2FvJR1fmRB35vLGPI2pIPhnbDdMfmH6ee336wcxNnbm%2B%2FWfOwqr7z4EQtV1%2FSlSztTEqDipZCW1ZHsXecq7bxz6Mxy74AuBxuS%2BEDCQwbiShv%2BfhmQTWz3Gb2Jt8qFpZ0F27%2BYHN%2FBuAzKNaBatY18KjqU%2BAXwoDNhtjRy1rXV910YQkQE0Aghcehttx4y8Uj2WteIG5mz3oXYGwn%2BqrZoVzg7iLTcgJl9e21ERsSsHzLIt91tuP3OMhCP%2BZQkDabrHyqTIbNgq3OMRVwORDruzrtbJbY1DRUSRzmsigtXK4t%2B9QfKl3E1weOESZFCOZj29CG925Agm19miBIU%2B8P554ondye7N4imFHgQXzu%2BnOATx1JiqfY9HCXCG6CgCkjSHHOj97l7x39XD7s09AfiYr%2BSgK%2B1YBGyfEjCdGdhZLJqEaxcntWMgs3QCSWsuVVHQGBUl%2B0eDlA7ZHb76jUcpiD7BwP4v%2BiZMLehlMEGOqUBcJNRAKS%2F3aGZQRzVZE0ZztUryyncSRbFsa6%2FTQxAD3KlCy%2Fq8g6Zc30tyg294h4%2FvYx3exLezCWB32Kn%2F2blxaTZjyGdUWAHK1wCzWgSZxAt7irGAJZPjIQvtwv3oD0QZINgmdj9tTmi1zjWSwCGrnLaTZeVImd0q91UQea2865bpv3uKFY7QGYZkW2QUqhZu3NZVZYUVnYCwgee%2Bpkasu9QrW96&X-Amz-Signature=9b3a5c56d956497cba7fb0581c0342fd4c3f1df972adf956e3213a50041b2c35&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
