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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKUJ6PXE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCcYezbR3kGH4qdSn86SvrAOMcBlBIVyHwBBVHoaPoahwIgay8F3rJRrqL5xyzhceZgVeSgr7NQ15W9WLTGenn0BmsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHepliSRnBl8Rt%2FD3ircAzQ6pSUIkXga3l%2BM9y95t0Z84sAFuwgRbcbMQllIErHKkrqa%2BS7JZHWkHYcf5t%2FBb9J3P0sWcVD8UNRWkUntA0u4plno9ZKUIiRI1W5Ite6vYgWpmQIsjF8FwgvPF9qu%2B1lI%2Fjb2dHMOsD53W5VS%2B4H6MXbXyCUDBtSs%2BcjZm5uiLlcHCFABZiIl%2FbG17KuFoEJhzuqpK2l095UvzQwMm8C6diDMxiQSbpX16zEy5OTpDkPGZ61SYlnQ3uuSkXuhf1nOJgIt4V2NCXZDGGFanXLg4LG1IPwlzbL5UKUcr8pcVbLTvu6HpwAKKN9cpSQyWSnRIcLfnzMAsjoD79UnuQKQLGIwkSGo9NnVEViWhQdD1q4fnGelkPfIf66eu2b9dgpFsFopwFpCJal1aCXysW1GuB8rEXBhs6dykbxV6%2F0bEi8A8b2%2FTP6NqjZXXV2q0Icavh5jTnFPv2yGcr4rVnBp0PxjwH9bU96tXscnUmNO6OyqEP%2FOB0snvrakr5ppBQUFopwFcJIf%2BNrYmJ8t%2F7wOTdn97f%2Bj6soTzd5AUuLDVAUHJqnh%2FDNHjECP%2FIKHJQN69xFiWafHvktt%2B3bVZFprovVFfjHEvY%2Fry2guKAQb6SYjHDg1oZDYaUpbMOOx478GOqUB9WemorbM9SC%2FzSYtTp3QgjGo797T3BmXT8%2FsTc9GgTzKjqn7RSp6TdLszoqSoIy5CZImxI4AqhpRmQxKgN2xDJCil2BwbgIhd%2BUWIvhgLK5I7BvCax%2F8qyPAAobFRF2Ok2I3d172okplD9FhN3a1FHg5vaqdicdvcTAqkOAY8Nu3i7ZquPvjYFJRGAlkNjjLXzpK9zsHcbvk%2B1SMbdhXeyBJzfmp&X-Amz-Signature=528fcbd36189b6392cb3e27d348cd2ad83f83d79cbca5ded0643acab73739264&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKUJ6PXE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCcYezbR3kGH4qdSn86SvrAOMcBlBIVyHwBBVHoaPoahwIgay8F3rJRrqL5xyzhceZgVeSgr7NQ15W9WLTGenn0BmsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHepliSRnBl8Rt%2FD3ircAzQ6pSUIkXga3l%2BM9y95t0Z84sAFuwgRbcbMQllIErHKkrqa%2BS7JZHWkHYcf5t%2FBb9J3P0sWcVD8UNRWkUntA0u4plno9ZKUIiRI1W5Ite6vYgWpmQIsjF8FwgvPF9qu%2B1lI%2Fjb2dHMOsD53W5VS%2B4H6MXbXyCUDBtSs%2BcjZm5uiLlcHCFABZiIl%2FbG17KuFoEJhzuqpK2l095UvzQwMm8C6diDMxiQSbpX16zEy5OTpDkPGZ61SYlnQ3uuSkXuhf1nOJgIt4V2NCXZDGGFanXLg4LG1IPwlzbL5UKUcr8pcVbLTvu6HpwAKKN9cpSQyWSnRIcLfnzMAsjoD79UnuQKQLGIwkSGo9NnVEViWhQdD1q4fnGelkPfIf66eu2b9dgpFsFopwFpCJal1aCXysW1GuB8rEXBhs6dykbxV6%2F0bEi8A8b2%2FTP6NqjZXXV2q0Icavh5jTnFPv2yGcr4rVnBp0PxjwH9bU96tXscnUmNO6OyqEP%2FOB0snvrakr5ppBQUFopwFcJIf%2BNrYmJ8t%2F7wOTdn97f%2Bj6soTzd5AUuLDVAUHJqnh%2FDNHjECP%2FIKHJQN69xFiWafHvktt%2B3bVZFprovVFfjHEvY%2Fry2guKAQb6SYjHDg1oZDYaUpbMOOx478GOqUB9WemorbM9SC%2FzSYtTp3QgjGo797T3BmXT8%2FsTc9GgTzKjqn7RSp6TdLszoqSoIy5CZImxI4AqhpRmQxKgN2xDJCil2BwbgIhd%2BUWIvhgLK5I7BvCax%2F8qyPAAobFRF2Ok2I3d172okplD9FhN3a1FHg5vaqdicdvcTAqkOAY8Nu3i7ZquPvjYFJRGAlkNjjLXzpK9zsHcbvk%2B1SMbdhXeyBJzfmp&X-Amz-Signature=cfa570b6045c91adcd0bdfee8503dee8b43911c9456e9576c9d02e0b8a4ae5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKUJ6PXE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCcYezbR3kGH4qdSn86SvrAOMcBlBIVyHwBBVHoaPoahwIgay8F3rJRrqL5xyzhceZgVeSgr7NQ15W9WLTGenn0BmsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHepliSRnBl8Rt%2FD3ircAzQ6pSUIkXga3l%2BM9y95t0Z84sAFuwgRbcbMQllIErHKkrqa%2BS7JZHWkHYcf5t%2FBb9J3P0sWcVD8UNRWkUntA0u4plno9ZKUIiRI1W5Ite6vYgWpmQIsjF8FwgvPF9qu%2B1lI%2Fjb2dHMOsD53W5VS%2B4H6MXbXyCUDBtSs%2BcjZm5uiLlcHCFABZiIl%2FbG17KuFoEJhzuqpK2l095UvzQwMm8C6diDMxiQSbpX16zEy5OTpDkPGZ61SYlnQ3uuSkXuhf1nOJgIt4V2NCXZDGGFanXLg4LG1IPwlzbL5UKUcr8pcVbLTvu6HpwAKKN9cpSQyWSnRIcLfnzMAsjoD79UnuQKQLGIwkSGo9NnVEViWhQdD1q4fnGelkPfIf66eu2b9dgpFsFopwFpCJal1aCXysW1GuB8rEXBhs6dykbxV6%2F0bEi8A8b2%2FTP6NqjZXXV2q0Icavh5jTnFPv2yGcr4rVnBp0PxjwH9bU96tXscnUmNO6OyqEP%2FOB0snvrakr5ppBQUFopwFcJIf%2BNrYmJ8t%2F7wOTdn97f%2Bj6soTzd5AUuLDVAUHJqnh%2FDNHjECP%2FIKHJQN69xFiWafHvktt%2B3bVZFprovVFfjHEvY%2Fry2guKAQb6SYjHDg1oZDYaUpbMOOx478GOqUB9WemorbM9SC%2FzSYtTp3QgjGo797T3BmXT8%2FsTc9GgTzKjqn7RSp6TdLszoqSoIy5CZImxI4AqhpRmQxKgN2xDJCil2BwbgIhd%2BUWIvhgLK5I7BvCax%2F8qyPAAobFRF2Ok2I3d172okplD9FhN3a1FHg5vaqdicdvcTAqkOAY8Nu3i7ZquPvjYFJRGAlkNjjLXzpK9zsHcbvk%2B1SMbdhXeyBJzfmp&X-Amz-Signature=3c4dd43885287db0cca3b98765f1fa8a464821f32ca17a8a162c87810012429f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKUJ6PXE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCcYezbR3kGH4qdSn86SvrAOMcBlBIVyHwBBVHoaPoahwIgay8F3rJRrqL5xyzhceZgVeSgr7NQ15W9WLTGenn0BmsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHepliSRnBl8Rt%2FD3ircAzQ6pSUIkXga3l%2BM9y95t0Z84sAFuwgRbcbMQllIErHKkrqa%2BS7JZHWkHYcf5t%2FBb9J3P0sWcVD8UNRWkUntA0u4plno9ZKUIiRI1W5Ite6vYgWpmQIsjF8FwgvPF9qu%2B1lI%2Fjb2dHMOsD53W5VS%2B4H6MXbXyCUDBtSs%2BcjZm5uiLlcHCFABZiIl%2FbG17KuFoEJhzuqpK2l095UvzQwMm8C6diDMxiQSbpX16zEy5OTpDkPGZ61SYlnQ3uuSkXuhf1nOJgIt4V2NCXZDGGFanXLg4LG1IPwlzbL5UKUcr8pcVbLTvu6HpwAKKN9cpSQyWSnRIcLfnzMAsjoD79UnuQKQLGIwkSGo9NnVEViWhQdD1q4fnGelkPfIf66eu2b9dgpFsFopwFpCJal1aCXysW1GuB8rEXBhs6dykbxV6%2F0bEi8A8b2%2FTP6NqjZXXV2q0Icavh5jTnFPv2yGcr4rVnBp0PxjwH9bU96tXscnUmNO6OyqEP%2FOB0snvrakr5ppBQUFopwFcJIf%2BNrYmJ8t%2F7wOTdn97f%2Bj6soTzd5AUuLDVAUHJqnh%2FDNHjECP%2FIKHJQN69xFiWafHvktt%2B3bVZFprovVFfjHEvY%2Fry2guKAQb6SYjHDg1oZDYaUpbMOOx478GOqUB9WemorbM9SC%2FzSYtTp3QgjGo797T3BmXT8%2FsTc9GgTzKjqn7RSp6TdLszoqSoIy5CZImxI4AqhpRmQxKgN2xDJCil2BwbgIhd%2BUWIvhgLK5I7BvCax%2F8qyPAAobFRF2Ok2I3d172okplD9FhN3a1FHg5vaqdicdvcTAqkOAY8Nu3i7ZquPvjYFJRGAlkNjjLXzpK9zsHcbvk%2B1SMbdhXeyBJzfmp&X-Amz-Signature=eadab4ea4f61bc9d15157cf5a884603160a10d6a3bd4c793bb73de8d70c09ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKUJ6PXE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCcYezbR3kGH4qdSn86SvrAOMcBlBIVyHwBBVHoaPoahwIgay8F3rJRrqL5xyzhceZgVeSgr7NQ15W9WLTGenn0BmsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHepliSRnBl8Rt%2FD3ircAzQ6pSUIkXga3l%2BM9y95t0Z84sAFuwgRbcbMQllIErHKkrqa%2BS7JZHWkHYcf5t%2FBb9J3P0sWcVD8UNRWkUntA0u4plno9ZKUIiRI1W5Ite6vYgWpmQIsjF8FwgvPF9qu%2B1lI%2Fjb2dHMOsD53W5VS%2B4H6MXbXyCUDBtSs%2BcjZm5uiLlcHCFABZiIl%2FbG17KuFoEJhzuqpK2l095UvzQwMm8C6diDMxiQSbpX16zEy5OTpDkPGZ61SYlnQ3uuSkXuhf1nOJgIt4V2NCXZDGGFanXLg4LG1IPwlzbL5UKUcr8pcVbLTvu6HpwAKKN9cpSQyWSnRIcLfnzMAsjoD79UnuQKQLGIwkSGo9NnVEViWhQdD1q4fnGelkPfIf66eu2b9dgpFsFopwFpCJal1aCXysW1GuB8rEXBhs6dykbxV6%2F0bEi8A8b2%2FTP6NqjZXXV2q0Icavh5jTnFPv2yGcr4rVnBp0PxjwH9bU96tXscnUmNO6OyqEP%2FOB0snvrakr5ppBQUFopwFcJIf%2BNrYmJ8t%2F7wOTdn97f%2Bj6soTzd5AUuLDVAUHJqnh%2FDNHjECP%2FIKHJQN69xFiWafHvktt%2B3bVZFprovVFfjHEvY%2Fry2guKAQb6SYjHDg1oZDYaUpbMOOx478GOqUB9WemorbM9SC%2FzSYtTp3QgjGo797T3BmXT8%2FsTc9GgTzKjqn7RSp6TdLszoqSoIy5CZImxI4AqhpRmQxKgN2xDJCil2BwbgIhd%2BUWIvhgLK5I7BvCax%2F8qyPAAobFRF2Ok2I3d172okplD9FhN3a1FHg5vaqdicdvcTAqkOAY8Nu3i7ZquPvjYFJRGAlkNjjLXzpK9zsHcbvk%2B1SMbdhXeyBJzfmp&X-Amz-Signature=cafc1102063d21fabdd07d3bcb0cddb5636657ecc67973cfebca1df96243b729&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKUJ6PXE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCcYezbR3kGH4qdSn86SvrAOMcBlBIVyHwBBVHoaPoahwIgay8F3rJRrqL5xyzhceZgVeSgr7NQ15W9WLTGenn0BmsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHepliSRnBl8Rt%2FD3ircAzQ6pSUIkXga3l%2BM9y95t0Z84sAFuwgRbcbMQllIErHKkrqa%2BS7JZHWkHYcf5t%2FBb9J3P0sWcVD8UNRWkUntA0u4plno9ZKUIiRI1W5Ite6vYgWpmQIsjF8FwgvPF9qu%2B1lI%2Fjb2dHMOsD53W5VS%2B4H6MXbXyCUDBtSs%2BcjZm5uiLlcHCFABZiIl%2FbG17KuFoEJhzuqpK2l095UvzQwMm8C6diDMxiQSbpX16zEy5OTpDkPGZ61SYlnQ3uuSkXuhf1nOJgIt4V2NCXZDGGFanXLg4LG1IPwlzbL5UKUcr8pcVbLTvu6HpwAKKN9cpSQyWSnRIcLfnzMAsjoD79UnuQKQLGIwkSGo9NnVEViWhQdD1q4fnGelkPfIf66eu2b9dgpFsFopwFpCJal1aCXysW1GuB8rEXBhs6dykbxV6%2F0bEi8A8b2%2FTP6NqjZXXV2q0Icavh5jTnFPv2yGcr4rVnBp0PxjwH9bU96tXscnUmNO6OyqEP%2FOB0snvrakr5ppBQUFopwFcJIf%2BNrYmJ8t%2F7wOTdn97f%2Bj6soTzd5AUuLDVAUHJqnh%2FDNHjECP%2FIKHJQN69xFiWafHvktt%2B3bVZFprovVFfjHEvY%2Fry2guKAQb6SYjHDg1oZDYaUpbMOOx478GOqUB9WemorbM9SC%2FzSYtTp3QgjGo797T3BmXT8%2FsTc9GgTzKjqn7RSp6TdLszoqSoIy5CZImxI4AqhpRmQxKgN2xDJCil2BwbgIhd%2BUWIvhgLK5I7BvCax%2F8qyPAAobFRF2Ok2I3d172okplD9FhN3a1FHg5vaqdicdvcTAqkOAY8Nu3i7ZquPvjYFJRGAlkNjjLXzpK9zsHcbvk%2B1SMbdhXeyBJzfmp&X-Amz-Signature=b46609b9e103cdd41eaac16f8b901facd993156ab1d1d708be8bb0dbb8b12b76&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKUJ6PXE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCcYezbR3kGH4qdSn86SvrAOMcBlBIVyHwBBVHoaPoahwIgay8F3rJRrqL5xyzhceZgVeSgr7NQ15W9WLTGenn0BmsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHepliSRnBl8Rt%2FD3ircAzQ6pSUIkXga3l%2BM9y95t0Z84sAFuwgRbcbMQllIErHKkrqa%2BS7JZHWkHYcf5t%2FBb9J3P0sWcVD8UNRWkUntA0u4plno9ZKUIiRI1W5Ite6vYgWpmQIsjF8FwgvPF9qu%2B1lI%2Fjb2dHMOsD53W5VS%2B4H6MXbXyCUDBtSs%2BcjZm5uiLlcHCFABZiIl%2FbG17KuFoEJhzuqpK2l095UvzQwMm8C6diDMxiQSbpX16zEy5OTpDkPGZ61SYlnQ3uuSkXuhf1nOJgIt4V2NCXZDGGFanXLg4LG1IPwlzbL5UKUcr8pcVbLTvu6HpwAKKN9cpSQyWSnRIcLfnzMAsjoD79UnuQKQLGIwkSGo9NnVEViWhQdD1q4fnGelkPfIf66eu2b9dgpFsFopwFpCJal1aCXysW1GuB8rEXBhs6dykbxV6%2F0bEi8A8b2%2FTP6NqjZXXV2q0Icavh5jTnFPv2yGcr4rVnBp0PxjwH9bU96tXscnUmNO6OyqEP%2FOB0snvrakr5ppBQUFopwFcJIf%2BNrYmJ8t%2F7wOTdn97f%2Bj6soTzd5AUuLDVAUHJqnh%2FDNHjECP%2FIKHJQN69xFiWafHvktt%2B3bVZFprovVFfjHEvY%2Fry2guKAQb6SYjHDg1oZDYaUpbMOOx478GOqUB9WemorbM9SC%2FzSYtTp3QgjGo797T3BmXT8%2FsTc9GgTzKjqn7RSp6TdLszoqSoIy5CZImxI4AqhpRmQxKgN2xDJCil2BwbgIhd%2BUWIvhgLK5I7BvCax%2F8qyPAAobFRF2Ok2I3d172okplD9FhN3a1FHg5vaqdicdvcTAqkOAY8Nu3i7ZquPvjYFJRGAlkNjjLXzpK9zsHcbvk%2B1SMbdhXeyBJzfmp&X-Amz-Signature=a53465735514205ce56659e117b2b4d7fde6a0d100323ef23a66966f9532bb4a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
