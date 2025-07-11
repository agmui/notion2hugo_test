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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSHMBJA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwQuy288qqekbF4NJCbE7P8mR%2BsumCPAtTRKIINYwMHAiEA0W48lB96%2F9K3ck7EjaX9QVA0AZSti5dpKhnEw0lUhoUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIfraltdeVj0uCtvircA%2B9j2ju4MxICTaHZq9Dzpw45CgtuqD%2FdkAXQ9uFapaLYTzLNJGQGpkzWYhojQ1LuGa%2FVVQl3Vk7Y23Dsn0GbRBqSrYsDlCoPeie9JipY6K2tScmVpmLb5RY%2BpYLwEYZ%2Fru1ZH6nyXriQKWPLHlWLFJkfhU%2BPbAAVo5MNwoBV1Y3jsMKozRt9UtpiQRrisfvI38oqME3qMWyGbU96SxE89qNjyL2NppEkeABCdANxq%2BDnzRVRjhOs6F7e51%2FGmaXj%2BjMX0qIG22KzCu31%2BDzqhs8%2FiZ55EpdTCGfTCPMj%2BsFjK%2BVTUiijJc19A3QQ3S5I6gy4tY2O3REyIWuTEFkojabkjGlzKvoIsDZAPqgUXiNZV6mmqNxfzQEJZugwl1wkpRjo%2BxLVjPZ2wLWXGVmtk7bA0nkptI7%2FdHebJ0gWc1d%2FXATUnzg2KH91jorTd7s91cnn15FrA8v7O%2FHv2%2FxLIEzn4l9c0BAZ6JTYFL7KZg2GuNLjoU8RWBRrU2dENxNogWfRPsXTkPV4L75Jc70sVn8OI9XFTd3Oen%2Frd7xfnOQaa1p7oskNuRvossodOzJ6ZWgisK5j27a4nP83PqmfEaA90tXyA6zOtEKF13686ue%2FrkoynfqZ%2FelBcRHjMKz%2Bw8MGOqUBZY6%2BNvOZzBPyDNe6fB23nlboNgq%2FPdUnJvQacE1Q7iYIxHpqI%2Bd1YsVE7vS8y201UB6EwsP8DJfw8fIaeo0sK0jp1sloGR6SOAip3K%2FObSu1H23vBqi5it6X1PqIQEGnabMQvcOI%2FhxkMXI55QxlbMkTKGYoCBL9f%2Ber6iWAQSpUggmib6VGpfU1ZkfrQDC5DJ5JZSThdgyDLT4y4nH0aHfmXfXn&X-Amz-Signature=77520b844bfe5a3d72899b3649b407217e0a52d57beb50cdeb4b4d6b17e808de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSHMBJA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwQuy288qqekbF4NJCbE7P8mR%2BsumCPAtTRKIINYwMHAiEA0W48lB96%2F9K3ck7EjaX9QVA0AZSti5dpKhnEw0lUhoUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIfraltdeVj0uCtvircA%2B9j2ju4MxICTaHZq9Dzpw45CgtuqD%2FdkAXQ9uFapaLYTzLNJGQGpkzWYhojQ1LuGa%2FVVQl3Vk7Y23Dsn0GbRBqSrYsDlCoPeie9JipY6K2tScmVpmLb5RY%2BpYLwEYZ%2Fru1ZH6nyXriQKWPLHlWLFJkfhU%2BPbAAVo5MNwoBV1Y3jsMKozRt9UtpiQRrisfvI38oqME3qMWyGbU96SxE89qNjyL2NppEkeABCdANxq%2BDnzRVRjhOs6F7e51%2FGmaXj%2BjMX0qIG22KzCu31%2BDzqhs8%2FiZ55EpdTCGfTCPMj%2BsFjK%2BVTUiijJc19A3QQ3S5I6gy4tY2O3REyIWuTEFkojabkjGlzKvoIsDZAPqgUXiNZV6mmqNxfzQEJZugwl1wkpRjo%2BxLVjPZ2wLWXGVmtk7bA0nkptI7%2FdHebJ0gWc1d%2FXATUnzg2KH91jorTd7s91cnn15FrA8v7O%2FHv2%2FxLIEzn4l9c0BAZ6JTYFL7KZg2GuNLjoU8RWBRrU2dENxNogWfRPsXTkPV4L75Jc70sVn8OI9XFTd3Oen%2Frd7xfnOQaa1p7oskNuRvossodOzJ6ZWgisK5j27a4nP83PqmfEaA90tXyA6zOtEKF13686ue%2FrkoynfqZ%2FelBcRHjMKz%2Bw8MGOqUBZY6%2BNvOZzBPyDNe6fB23nlboNgq%2FPdUnJvQacE1Q7iYIxHpqI%2Bd1YsVE7vS8y201UB6EwsP8DJfw8fIaeo0sK0jp1sloGR6SOAip3K%2FObSu1H23vBqi5it6X1PqIQEGnabMQvcOI%2FhxkMXI55QxlbMkTKGYoCBL9f%2Ber6iWAQSpUggmib6VGpfU1ZkfrQDC5DJ5JZSThdgyDLT4y4nH0aHfmXfXn&X-Amz-Signature=081d8a965603ee17d9fac114cff059384cac6003e2c79e73b4c8a753874ea0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSHMBJA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwQuy288qqekbF4NJCbE7P8mR%2BsumCPAtTRKIINYwMHAiEA0W48lB96%2F9K3ck7EjaX9QVA0AZSti5dpKhnEw0lUhoUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIfraltdeVj0uCtvircA%2B9j2ju4MxICTaHZq9Dzpw45CgtuqD%2FdkAXQ9uFapaLYTzLNJGQGpkzWYhojQ1LuGa%2FVVQl3Vk7Y23Dsn0GbRBqSrYsDlCoPeie9JipY6K2tScmVpmLb5RY%2BpYLwEYZ%2Fru1ZH6nyXriQKWPLHlWLFJkfhU%2BPbAAVo5MNwoBV1Y3jsMKozRt9UtpiQRrisfvI38oqME3qMWyGbU96SxE89qNjyL2NppEkeABCdANxq%2BDnzRVRjhOs6F7e51%2FGmaXj%2BjMX0qIG22KzCu31%2BDzqhs8%2FiZ55EpdTCGfTCPMj%2BsFjK%2BVTUiijJc19A3QQ3S5I6gy4tY2O3REyIWuTEFkojabkjGlzKvoIsDZAPqgUXiNZV6mmqNxfzQEJZugwl1wkpRjo%2BxLVjPZ2wLWXGVmtk7bA0nkptI7%2FdHebJ0gWc1d%2FXATUnzg2KH91jorTd7s91cnn15FrA8v7O%2FHv2%2FxLIEzn4l9c0BAZ6JTYFL7KZg2GuNLjoU8RWBRrU2dENxNogWfRPsXTkPV4L75Jc70sVn8OI9XFTd3Oen%2Frd7xfnOQaa1p7oskNuRvossodOzJ6ZWgisK5j27a4nP83PqmfEaA90tXyA6zOtEKF13686ue%2FrkoynfqZ%2FelBcRHjMKz%2Bw8MGOqUBZY6%2BNvOZzBPyDNe6fB23nlboNgq%2FPdUnJvQacE1Q7iYIxHpqI%2Bd1YsVE7vS8y201UB6EwsP8DJfw8fIaeo0sK0jp1sloGR6SOAip3K%2FObSu1H23vBqi5it6X1PqIQEGnabMQvcOI%2FhxkMXI55QxlbMkTKGYoCBL9f%2Ber6iWAQSpUggmib6VGpfU1ZkfrQDC5DJ5JZSThdgyDLT4y4nH0aHfmXfXn&X-Amz-Signature=7fe85214364739230ebb2fa5f8a37bd111931bc7b3a70497489b02e4ac9341dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSHMBJA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwQuy288qqekbF4NJCbE7P8mR%2BsumCPAtTRKIINYwMHAiEA0W48lB96%2F9K3ck7EjaX9QVA0AZSti5dpKhnEw0lUhoUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIfraltdeVj0uCtvircA%2B9j2ju4MxICTaHZq9Dzpw45CgtuqD%2FdkAXQ9uFapaLYTzLNJGQGpkzWYhojQ1LuGa%2FVVQl3Vk7Y23Dsn0GbRBqSrYsDlCoPeie9JipY6K2tScmVpmLb5RY%2BpYLwEYZ%2Fru1ZH6nyXriQKWPLHlWLFJkfhU%2BPbAAVo5MNwoBV1Y3jsMKozRt9UtpiQRrisfvI38oqME3qMWyGbU96SxE89qNjyL2NppEkeABCdANxq%2BDnzRVRjhOs6F7e51%2FGmaXj%2BjMX0qIG22KzCu31%2BDzqhs8%2FiZ55EpdTCGfTCPMj%2BsFjK%2BVTUiijJc19A3QQ3S5I6gy4tY2O3REyIWuTEFkojabkjGlzKvoIsDZAPqgUXiNZV6mmqNxfzQEJZugwl1wkpRjo%2BxLVjPZ2wLWXGVmtk7bA0nkptI7%2FdHebJ0gWc1d%2FXATUnzg2KH91jorTd7s91cnn15FrA8v7O%2FHv2%2FxLIEzn4l9c0BAZ6JTYFL7KZg2GuNLjoU8RWBRrU2dENxNogWfRPsXTkPV4L75Jc70sVn8OI9XFTd3Oen%2Frd7xfnOQaa1p7oskNuRvossodOzJ6ZWgisK5j27a4nP83PqmfEaA90tXyA6zOtEKF13686ue%2FrkoynfqZ%2FelBcRHjMKz%2Bw8MGOqUBZY6%2BNvOZzBPyDNe6fB23nlboNgq%2FPdUnJvQacE1Q7iYIxHpqI%2Bd1YsVE7vS8y201UB6EwsP8DJfw8fIaeo0sK0jp1sloGR6SOAip3K%2FObSu1H23vBqi5it6X1PqIQEGnabMQvcOI%2FhxkMXI55QxlbMkTKGYoCBL9f%2Ber6iWAQSpUggmib6VGpfU1ZkfrQDC5DJ5JZSThdgyDLT4y4nH0aHfmXfXn&X-Amz-Signature=ff5f1b9e55cec8e9a83f6793dceb560a43bb40a501349e771576426bae480c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSHMBJA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwQuy288qqekbF4NJCbE7P8mR%2BsumCPAtTRKIINYwMHAiEA0W48lB96%2F9K3ck7EjaX9QVA0AZSti5dpKhnEw0lUhoUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIfraltdeVj0uCtvircA%2B9j2ju4MxICTaHZq9Dzpw45CgtuqD%2FdkAXQ9uFapaLYTzLNJGQGpkzWYhojQ1LuGa%2FVVQl3Vk7Y23Dsn0GbRBqSrYsDlCoPeie9JipY6K2tScmVpmLb5RY%2BpYLwEYZ%2Fru1ZH6nyXriQKWPLHlWLFJkfhU%2BPbAAVo5MNwoBV1Y3jsMKozRt9UtpiQRrisfvI38oqME3qMWyGbU96SxE89qNjyL2NppEkeABCdANxq%2BDnzRVRjhOs6F7e51%2FGmaXj%2BjMX0qIG22KzCu31%2BDzqhs8%2FiZ55EpdTCGfTCPMj%2BsFjK%2BVTUiijJc19A3QQ3S5I6gy4tY2O3REyIWuTEFkojabkjGlzKvoIsDZAPqgUXiNZV6mmqNxfzQEJZugwl1wkpRjo%2BxLVjPZ2wLWXGVmtk7bA0nkptI7%2FdHebJ0gWc1d%2FXATUnzg2KH91jorTd7s91cnn15FrA8v7O%2FHv2%2FxLIEzn4l9c0BAZ6JTYFL7KZg2GuNLjoU8RWBRrU2dENxNogWfRPsXTkPV4L75Jc70sVn8OI9XFTd3Oen%2Frd7xfnOQaa1p7oskNuRvossodOzJ6ZWgisK5j27a4nP83PqmfEaA90tXyA6zOtEKF13686ue%2FrkoynfqZ%2FelBcRHjMKz%2Bw8MGOqUBZY6%2BNvOZzBPyDNe6fB23nlboNgq%2FPdUnJvQacE1Q7iYIxHpqI%2Bd1YsVE7vS8y201UB6EwsP8DJfw8fIaeo0sK0jp1sloGR6SOAip3K%2FObSu1H23vBqi5it6X1PqIQEGnabMQvcOI%2FhxkMXI55QxlbMkTKGYoCBL9f%2Ber6iWAQSpUggmib6VGpfU1ZkfrQDC5DJ5JZSThdgyDLT4y4nH0aHfmXfXn&X-Amz-Signature=c166e1b6f305dca099600cda391d0da6480567255f9e701ff6cafa3f536c3a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSHMBJA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwQuy288qqekbF4NJCbE7P8mR%2BsumCPAtTRKIINYwMHAiEA0W48lB96%2F9K3ck7EjaX9QVA0AZSti5dpKhnEw0lUhoUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIfraltdeVj0uCtvircA%2B9j2ju4MxICTaHZq9Dzpw45CgtuqD%2FdkAXQ9uFapaLYTzLNJGQGpkzWYhojQ1LuGa%2FVVQl3Vk7Y23Dsn0GbRBqSrYsDlCoPeie9JipY6K2tScmVpmLb5RY%2BpYLwEYZ%2Fru1ZH6nyXriQKWPLHlWLFJkfhU%2BPbAAVo5MNwoBV1Y3jsMKozRt9UtpiQRrisfvI38oqME3qMWyGbU96SxE89qNjyL2NppEkeABCdANxq%2BDnzRVRjhOs6F7e51%2FGmaXj%2BjMX0qIG22KzCu31%2BDzqhs8%2FiZ55EpdTCGfTCPMj%2BsFjK%2BVTUiijJc19A3QQ3S5I6gy4tY2O3REyIWuTEFkojabkjGlzKvoIsDZAPqgUXiNZV6mmqNxfzQEJZugwl1wkpRjo%2BxLVjPZ2wLWXGVmtk7bA0nkptI7%2FdHebJ0gWc1d%2FXATUnzg2KH91jorTd7s91cnn15FrA8v7O%2FHv2%2FxLIEzn4l9c0BAZ6JTYFL7KZg2GuNLjoU8RWBRrU2dENxNogWfRPsXTkPV4L75Jc70sVn8OI9XFTd3Oen%2Frd7xfnOQaa1p7oskNuRvossodOzJ6ZWgisK5j27a4nP83PqmfEaA90tXyA6zOtEKF13686ue%2FrkoynfqZ%2FelBcRHjMKz%2Bw8MGOqUBZY6%2BNvOZzBPyDNe6fB23nlboNgq%2FPdUnJvQacE1Q7iYIxHpqI%2Bd1YsVE7vS8y201UB6EwsP8DJfw8fIaeo0sK0jp1sloGR6SOAip3K%2FObSu1H23vBqi5it6X1PqIQEGnabMQvcOI%2FhxkMXI55QxlbMkTKGYoCBL9f%2Ber6iWAQSpUggmib6VGpfU1ZkfrQDC5DJ5JZSThdgyDLT4y4nH0aHfmXfXn&X-Amz-Signature=697959c288b645c2a2a29df80f7583b437581e4104f455d459e9eb3c73026965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSHMBJA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwQuy288qqekbF4NJCbE7P8mR%2BsumCPAtTRKIINYwMHAiEA0W48lB96%2F9K3ck7EjaX9QVA0AZSti5dpKhnEw0lUhoUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIfraltdeVj0uCtvircA%2B9j2ju4MxICTaHZq9Dzpw45CgtuqD%2FdkAXQ9uFapaLYTzLNJGQGpkzWYhojQ1LuGa%2FVVQl3Vk7Y23Dsn0GbRBqSrYsDlCoPeie9JipY6K2tScmVpmLb5RY%2BpYLwEYZ%2Fru1ZH6nyXriQKWPLHlWLFJkfhU%2BPbAAVo5MNwoBV1Y3jsMKozRt9UtpiQRrisfvI38oqME3qMWyGbU96SxE89qNjyL2NppEkeABCdANxq%2BDnzRVRjhOs6F7e51%2FGmaXj%2BjMX0qIG22KzCu31%2BDzqhs8%2FiZ55EpdTCGfTCPMj%2BsFjK%2BVTUiijJc19A3QQ3S5I6gy4tY2O3REyIWuTEFkojabkjGlzKvoIsDZAPqgUXiNZV6mmqNxfzQEJZugwl1wkpRjo%2BxLVjPZ2wLWXGVmtk7bA0nkptI7%2FdHebJ0gWc1d%2FXATUnzg2KH91jorTd7s91cnn15FrA8v7O%2FHv2%2FxLIEzn4l9c0BAZ6JTYFL7KZg2GuNLjoU8RWBRrU2dENxNogWfRPsXTkPV4L75Jc70sVn8OI9XFTd3Oen%2Frd7xfnOQaa1p7oskNuRvossodOzJ6ZWgisK5j27a4nP83PqmfEaA90tXyA6zOtEKF13686ue%2FrkoynfqZ%2FelBcRHjMKz%2Bw8MGOqUBZY6%2BNvOZzBPyDNe6fB23nlboNgq%2FPdUnJvQacE1Q7iYIxHpqI%2Bd1YsVE7vS8y201UB6EwsP8DJfw8fIaeo0sK0jp1sloGR6SOAip3K%2FObSu1H23vBqi5it6X1PqIQEGnabMQvcOI%2FhxkMXI55QxlbMkTKGYoCBL9f%2Ber6iWAQSpUggmib6VGpfU1ZkfrQDC5DJ5JZSThdgyDLT4y4nH0aHfmXfXn&X-Amz-Signature=e3bfcdcf9870c4873399c69880a959e53feeecae427caf1051fc7a77e801a442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
