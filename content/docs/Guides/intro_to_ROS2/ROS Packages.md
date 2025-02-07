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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBRNDBH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC4K%2F67GQpzulcV%2FmsTWsjxymewAkDi%2By24PQ06nVLgOgIgSAfeUBrJmuxrfO%2BWcFJ2GDDVuopFc4SKE0ZaMx0PX2oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNGNykRcOWr4Q5QynSrcA5WGxZjQDoigdGMuwzwB8V6RuWe2D9jKv65qeEBiAkA%2BY%2BGUNMKD0d9bPmGp0GdnKyTuz9%2BpKHj6JQJNmNHPeVXIE6DwyQJFtcdBdJSIpYhYoCVmRZVI8H7fols6qIAj5O3ImgHNkxc1dLtIRb29B38BfysvY4wM2smKRFs1pU8cxn%2FqX312tNgf7eBJSpBqn4RBjI5D28Z4uXDnbA70SC4LMiByKC4Ag65l2R%2Fy4p2lmNh0ylyTafUSJGfNdVwhX4WDfYrrjiF2vGGh3SA%2Bn68NtD4KWMsbK%2Bv4xap0lWuh3cz6LolAoPxvT4K9fgQ1S15LJZkTg5jQ%2BM0DbSvYADGejhibF2x%2F7t72LWitNEIQUtKEObjWSEcu%2FwanzkhBVWPDI4hAocK01w3zBj%2BngcU6iwLA77PACybdSejNXL0BJ%2BhVLSuMUwk7j%2B6b6qVdAO4%2FqEsNyIlor6gjedU9ZewQtFvPwDPtQnNPcyM3Dme2YT5Swuqd7U75c44HrDaGXGv7ce1wbk%2B5PyHkvmZMRxazLRrn%2FzNr3XG6eFJIsMK3sNYXe3XvYnPk0nQqwinP%2BFr%2BJ34o%2Fwzc3pbrlptAsUpKLUrWgJw7LQdBJ9450O3UYAaixVVQ%2Ft%2FqMRUjMIz7lr0GOqUBCsnVza77cBusyzhRvzfT1n8YypxiSYkBu6HgNo%2Bou2gaDT4tcrb7iakwJ7yse%2Fmv%2FK5H4Q%2FuVAaEDmLffJGtwDP%2FbYgqQXzrh%2BdOZaOQ0F9b3T%2B82Zd%2F4ZHcLVz4sD2Fgu0Ch3ShEa1ARL%2B%2Bwx4A75hedM3RYaQc72drnvccBkZhqGwxxo6i04Y%2FGrSpTRwNb4WpE%2BFLQYPT81qmKljZH1M8vvEX&X-Amz-Signature=8f0a06d7250f4566934b12d572411ab8c4e5e83188af51a3fa1f753054b12e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBRNDBH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC4K%2F67GQpzulcV%2FmsTWsjxymewAkDi%2By24PQ06nVLgOgIgSAfeUBrJmuxrfO%2BWcFJ2GDDVuopFc4SKE0ZaMx0PX2oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNGNykRcOWr4Q5QynSrcA5WGxZjQDoigdGMuwzwB8V6RuWe2D9jKv65qeEBiAkA%2BY%2BGUNMKD0d9bPmGp0GdnKyTuz9%2BpKHj6JQJNmNHPeVXIE6DwyQJFtcdBdJSIpYhYoCVmRZVI8H7fols6qIAj5O3ImgHNkxc1dLtIRb29B38BfysvY4wM2smKRFs1pU8cxn%2FqX312tNgf7eBJSpBqn4RBjI5D28Z4uXDnbA70SC4LMiByKC4Ag65l2R%2Fy4p2lmNh0ylyTafUSJGfNdVwhX4WDfYrrjiF2vGGh3SA%2Bn68NtD4KWMsbK%2Bv4xap0lWuh3cz6LolAoPxvT4K9fgQ1S15LJZkTg5jQ%2BM0DbSvYADGejhibF2x%2F7t72LWitNEIQUtKEObjWSEcu%2FwanzkhBVWPDI4hAocK01w3zBj%2BngcU6iwLA77PACybdSejNXL0BJ%2BhVLSuMUwk7j%2B6b6qVdAO4%2FqEsNyIlor6gjedU9ZewQtFvPwDPtQnNPcyM3Dme2YT5Swuqd7U75c44HrDaGXGv7ce1wbk%2B5PyHkvmZMRxazLRrn%2FzNr3XG6eFJIsMK3sNYXe3XvYnPk0nQqwinP%2BFr%2BJ34o%2Fwzc3pbrlptAsUpKLUrWgJw7LQdBJ9450O3UYAaixVVQ%2Ft%2FqMRUjMIz7lr0GOqUBCsnVza77cBusyzhRvzfT1n8YypxiSYkBu6HgNo%2Bou2gaDT4tcrb7iakwJ7yse%2Fmv%2FK5H4Q%2FuVAaEDmLffJGtwDP%2FbYgqQXzrh%2BdOZaOQ0F9b3T%2B82Zd%2F4ZHcLVz4sD2Fgu0Ch3ShEa1ARL%2B%2Bwx4A75hedM3RYaQc72drnvccBkZhqGwxxo6i04Y%2FGrSpTRwNb4WpE%2BFLQYPT81qmKljZH1M8vvEX&X-Amz-Signature=2481806cbab4deb6aa46c0dad69091edfc852db3e2fd93266abc66a9f1066f65&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBRNDBH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC4K%2F67GQpzulcV%2FmsTWsjxymewAkDi%2By24PQ06nVLgOgIgSAfeUBrJmuxrfO%2BWcFJ2GDDVuopFc4SKE0ZaMx0PX2oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNGNykRcOWr4Q5QynSrcA5WGxZjQDoigdGMuwzwB8V6RuWe2D9jKv65qeEBiAkA%2BY%2BGUNMKD0d9bPmGp0GdnKyTuz9%2BpKHj6JQJNmNHPeVXIE6DwyQJFtcdBdJSIpYhYoCVmRZVI8H7fols6qIAj5O3ImgHNkxc1dLtIRb29B38BfysvY4wM2smKRFs1pU8cxn%2FqX312tNgf7eBJSpBqn4RBjI5D28Z4uXDnbA70SC4LMiByKC4Ag65l2R%2Fy4p2lmNh0ylyTafUSJGfNdVwhX4WDfYrrjiF2vGGh3SA%2Bn68NtD4KWMsbK%2Bv4xap0lWuh3cz6LolAoPxvT4K9fgQ1S15LJZkTg5jQ%2BM0DbSvYADGejhibF2x%2F7t72LWitNEIQUtKEObjWSEcu%2FwanzkhBVWPDI4hAocK01w3zBj%2BngcU6iwLA77PACybdSejNXL0BJ%2BhVLSuMUwk7j%2B6b6qVdAO4%2FqEsNyIlor6gjedU9ZewQtFvPwDPtQnNPcyM3Dme2YT5Swuqd7U75c44HrDaGXGv7ce1wbk%2B5PyHkvmZMRxazLRrn%2FzNr3XG6eFJIsMK3sNYXe3XvYnPk0nQqwinP%2BFr%2BJ34o%2Fwzc3pbrlptAsUpKLUrWgJw7LQdBJ9450O3UYAaixVVQ%2Ft%2FqMRUjMIz7lr0GOqUBCsnVza77cBusyzhRvzfT1n8YypxiSYkBu6HgNo%2Bou2gaDT4tcrb7iakwJ7yse%2Fmv%2FK5H4Q%2FuVAaEDmLffJGtwDP%2FbYgqQXzrh%2BdOZaOQ0F9b3T%2B82Zd%2F4ZHcLVz4sD2Fgu0Ch3ShEa1ARL%2B%2Bwx4A75hedM3RYaQc72drnvccBkZhqGwxxo6i04Y%2FGrSpTRwNb4WpE%2BFLQYPT81qmKljZH1M8vvEX&X-Amz-Signature=c0d856c4f474da5e2811008c80709a75285b41e04b139ede8ec667d45feed512&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBRNDBH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC4K%2F67GQpzulcV%2FmsTWsjxymewAkDi%2By24PQ06nVLgOgIgSAfeUBrJmuxrfO%2BWcFJ2GDDVuopFc4SKE0ZaMx0PX2oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNGNykRcOWr4Q5QynSrcA5WGxZjQDoigdGMuwzwB8V6RuWe2D9jKv65qeEBiAkA%2BY%2BGUNMKD0d9bPmGp0GdnKyTuz9%2BpKHj6JQJNmNHPeVXIE6DwyQJFtcdBdJSIpYhYoCVmRZVI8H7fols6qIAj5O3ImgHNkxc1dLtIRb29B38BfysvY4wM2smKRFs1pU8cxn%2FqX312tNgf7eBJSpBqn4RBjI5D28Z4uXDnbA70SC4LMiByKC4Ag65l2R%2Fy4p2lmNh0ylyTafUSJGfNdVwhX4WDfYrrjiF2vGGh3SA%2Bn68NtD4KWMsbK%2Bv4xap0lWuh3cz6LolAoPxvT4K9fgQ1S15LJZkTg5jQ%2BM0DbSvYADGejhibF2x%2F7t72LWitNEIQUtKEObjWSEcu%2FwanzkhBVWPDI4hAocK01w3zBj%2BngcU6iwLA77PACybdSejNXL0BJ%2BhVLSuMUwk7j%2B6b6qVdAO4%2FqEsNyIlor6gjedU9ZewQtFvPwDPtQnNPcyM3Dme2YT5Swuqd7U75c44HrDaGXGv7ce1wbk%2B5PyHkvmZMRxazLRrn%2FzNr3XG6eFJIsMK3sNYXe3XvYnPk0nQqwinP%2BFr%2BJ34o%2Fwzc3pbrlptAsUpKLUrWgJw7LQdBJ9450O3UYAaixVVQ%2Ft%2FqMRUjMIz7lr0GOqUBCsnVza77cBusyzhRvzfT1n8YypxiSYkBu6HgNo%2Bou2gaDT4tcrb7iakwJ7yse%2Fmv%2FK5H4Q%2FuVAaEDmLffJGtwDP%2FbYgqQXzrh%2BdOZaOQ0F9b3T%2B82Zd%2F4ZHcLVz4sD2Fgu0Ch3ShEa1ARL%2B%2Bwx4A75hedM3RYaQc72drnvccBkZhqGwxxo6i04Y%2FGrSpTRwNb4WpE%2BFLQYPT81qmKljZH1M8vvEX&X-Amz-Signature=adecf1831fdc9a53c6a9918b38215011680762281597524c5559142a114822f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBRNDBH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC4K%2F67GQpzulcV%2FmsTWsjxymewAkDi%2By24PQ06nVLgOgIgSAfeUBrJmuxrfO%2BWcFJ2GDDVuopFc4SKE0ZaMx0PX2oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNGNykRcOWr4Q5QynSrcA5WGxZjQDoigdGMuwzwB8V6RuWe2D9jKv65qeEBiAkA%2BY%2BGUNMKD0d9bPmGp0GdnKyTuz9%2BpKHj6JQJNmNHPeVXIE6DwyQJFtcdBdJSIpYhYoCVmRZVI8H7fols6qIAj5O3ImgHNkxc1dLtIRb29B38BfysvY4wM2smKRFs1pU8cxn%2FqX312tNgf7eBJSpBqn4RBjI5D28Z4uXDnbA70SC4LMiByKC4Ag65l2R%2Fy4p2lmNh0ylyTafUSJGfNdVwhX4WDfYrrjiF2vGGh3SA%2Bn68NtD4KWMsbK%2Bv4xap0lWuh3cz6LolAoPxvT4K9fgQ1S15LJZkTg5jQ%2BM0DbSvYADGejhibF2x%2F7t72LWitNEIQUtKEObjWSEcu%2FwanzkhBVWPDI4hAocK01w3zBj%2BngcU6iwLA77PACybdSejNXL0BJ%2BhVLSuMUwk7j%2B6b6qVdAO4%2FqEsNyIlor6gjedU9ZewQtFvPwDPtQnNPcyM3Dme2YT5Swuqd7U75c44HrDaGXGv7ce1wbk%2B5PyHkvmZMRxazLRrn%2FzNr3XG6eFJIsMK3sNYXe3XvYnPk0nQqwinP%2BFr%2BJ34o%2Fwzc3pbrlptAsUpKLUrWgJw7LQdBJ9450O3UYAaixVVQ%2Ft%2FqMRUjMIz7lr0GOqUBCsnVza77cBusyzhRvzfT1n8YypxiSYkBu6HgNo%2Bou2gaDT4tcrb7iakwJ7yse%2Fmv%2FK5H4Q%2FuVAaEDmLffJGtwDP%2FbYgqQXzrh%2BdOZaOQ0F9b3T%2B82Zd%2F4ZHcLVz4sD2Fgu0Ch3ShEa1ARL%2B%2Bwx4A75hedM3RYaQc72drnvccBkZhqGwxxo6i04Y%2FGrSpTRwNb4WpE%2BFLQYPT81qmKljZH1M8vvEX&X-Amz-Signature=f01efac38850cdfd1237d3d8f4fc6de9dbd1f7e0385cd54b7cb795d526786146&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBRNDBH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC4K%2F67GQpzulcV%2FmsTWsjxymewAkDi%2By24PQ06nVLgOgIgSAfeUBrJmuxrfO%2BWcFJ2GDDVuopFc4SKE0ZaMx0PX2oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNGNykRcOWr4Q5QynSrcA5WGxZjQDoigdGMuwzwB8V6RuWe2D9jKv65qeEBiAkA%2BY%2BGUNMKD0d9bPmGp0GdnKyTuz9%2BpKHj6JQJNmNHPeVXIE6DwyQJFtcdBdJSIpYhYoCVmRZVI8H7fols6qIAj5O3ImgHNkxc1dLtIRb29B38BfysvY4wM2smKRFs1pU8cxn%2FqX312tNgf7eBJSpBqn4RBjI5D28Z4uXDnbA70SC4LMiByKC4Ag65l2R%2Fy4p2lmNh0ylyTafUSJGfNdVwhX4WDfYrrjiF2vGGh3SA%2Bn68NtD4KWMsbK%2Bv4xap0lWuh3cz6LolAoPxvT4K9fgQ1S15LJZkTg5jQ%2BM0DbSvYADGejhibF2x%2F7t72LWitNEIQUtKEObjWSEcu%2FwanzkhBVWPDI4hAocK01w3zBj%2BngcU6iwLA77PACybdSejNXL0BJ%2BhVLSuMUwk7j%2B6b6qVdAO4%2FqEsNyIlor6gjedU9ZewQtFvPwDPtQnNPcyM3Dme2YT5Swuqd7U75c44HrDaGXGv7ce1wbk%2B5PyHkvmZMRxazLRrn%2FzNr3XG6eFJIsMK3sNYXe3XvYnPk0nQqwinP%2BFr%2BJ34o%2Fwzc3pbrlptAsUpKLUrWgJw7LQdBJ9450O3UYAaixVVQ%2Ft%2FqMRUjMIz7lr0GOqUBCsnVza77cBusyzhRvzfT1n8YypxiSYkBu6HgNo%2Bou2gaDT4tcrb7iakwJ7yse%2Fmv%2FK5H4Q%2FuVAaEDmLffJGtwDP%2FbYgqQXzrh%2BdOZaOQ0F9b3T%2B82Zd%2F4ZHcLVz4sD2Fgu0Ch3ShEa1ARL%2B%2Bwx4A75hedM3RYaQc72drnvccBkZhqGwxxo6i04Y%2FGrSpTRwNb4WpE%2BFLQYPT81qmKljZH1M8vvEX&X-Amz-Signature=6ed4dea812fbc61c08f6fb374f7bfa3b7a3c54e201dc35ec93b667af7b9530cd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBRNDBH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC4K%2F67GQpzulcV%2FmsTWsjxymewAkDi%2By24PQ06nVLgOgIgSAfeUBrJmuxrfO%2BWcFJ2GDDVuopFc4SKE0ZaMx0PX2oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNGNykRcOWr4Q5QynSrcA5WGxZjQDoigdGMuwzwB8V6RuWe2D9jKv65qeEBiAkA%2BY%2BGUNMKD0d9bPmGp0GdnKyTuz9%2BpKHj6JQJNmNHPeVXIE6DwyQJFtcdBdJSIpYhYoCVmRZVI8H7fols6qIAj5O3ImgHNkxc1dLtIRb29B38BfysvY4wM2smKRFs1pU8cxn%2FqX312tNgf7eBJSpBqn4RBjI5D28Z4uXDnbA70SC4LMiByKC4Ag65l2R%2Fy4p2lmNh0ylyTafUSJGfNdVwhX4WDfYrrjiF2vGGh3SA%2Bn68NtD4KWMsbK%2Bv4xap0lWuh3cz6LolAoPxvT4K9fgQ1S15LJZkTg5jQ%2BM0DbSvYADGejhibF2x%2F7t72LWitNEIQUtKEObjWSEcu%2FwanzkhBVWPDI4hAocK01w3zBj%2BngcU6iwLA77PACybdSejNXL0BJ%2BhVLSuMUwk7j%2B6b6qVdAO4%2FqEsNyIlor6gjedU9ZewQtFvPwDPtQnNPcyM3Dme2YT5Swuqd7U75c44HrDaGXGv7ce1wbk%2B5PyHkvmZMRxazLRrn%2FzNr3XG6eFJIsMK3sNYXe3XvYnPk0nQqwinP%2BFr%2BJ34o%2Fwzc3pbrlptAsUpKLUrWgJw7LQdBJ9450O3UYAaixVVQ%2Ft%2FqMRUjMIz7lr0GOqUBCsnVza77cBusyzhRvzfT1n8YypxiSYkBu6HgNo%2Bou2gaDT4tcrb7iakwJ7yse%2Fmv%2FK5H4Q%2FuVAaEDmLffJGtwDP%2FbYgqQXzrh%2BdOZaOQ0F9b3T%2B82Zd%2F4ZHcLVz4sD2Fgu0Ch3ShEa1ARL%2B%2Bwx4A75hedM3RYaQc72drnvccBkZhqGwxxo6i04Y%2FGrSpTRwNb4WpE%2BFLQYPT81qmKljZH1M8vvEX&X-Amz-Signature=b6cd18353eaad97b6782fe5d4f8226b2eed2a699eb222001311addae4de52ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
