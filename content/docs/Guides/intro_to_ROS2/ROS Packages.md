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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIII47I6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEdN2l5nYgt6%2ByBnkn0dCKWMxi0wCUmJzcpXkzUu%2BwXAAiEAoooLHONbwswlqK1EsTd%2FIzurzCwi6YtkO%2BsQrkII%2Bkcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMAlWfYNJsi2q79DhyrcA7zXGIZk9MzY4dCCBO6acE00T%2FMd%2BATVV%2FjpXIvrvcVnEmZriPp7wN8x44nI5sPGw3F8%2Fdzro3SqmX0R5YtvEVop8wUfUuVMINLXO6Zyh4TX2usBBTXno6Y0wN1Z6rzyxYDSt5JNgRGAVNzaY%2BrahQ58Y3vnhm1aWz3exMEZ1uWvL%2FaC6aKhWrLc6hB9AKXxqXgyF6yrlwXTOf3LFhxmedulbfsC44GNi%2B1PTNbtLrdsrDpijBwOs2mLi04tDXYWpsg%2BMuBdmLq%2FkB0%2BlkbRidJ4JEmyqoh4Y34PLnEAI1MoXoqE9oYRxbqtiAniGwINm2f7%2Ff4YJ70oMiA6EwMMdf4nUy3o4PDSVyiXOJm%2F5YNdL28PW7UffYWw4lZJof%2FJVDDOQRcw52jchcmfgw%2Fq5VFN3cMxQXi4L2oLzwyy8cB4RAfJ%2FzYzii2hSvWvVowqhaRqGrW41EQIdbw%2BQSuwi8CNXXU5eSVP7TNsTjhDRZtSzRg9AQmhKTaaVWfE2TxBjrvke8u%2B9XOXqP2XAwFZVkSbCLg%2BtW4vi2rVV90lFCpwAJx7%2FDwnPRxU8BGXx8VRedDynTrl8nUSJ3u05G7D30FJ8%2B6%2BiVMQwwsLziaZ%2BbxgSO6y2jYLBy2MS311MOqCsr4GOqUBDdmFXMS3rMPzVf%2BAxDxIEXby35la9qJv2SyuSagzYFuJVFPbU19d3Sq36dlyYqMYspZoBBf%2F2qbnnSONzwrqqTei7lwc1gM%2FzyzWzh5iip1S81Z%2B%2B8sXwYABjiSuWQWS0soHIYyrHVrEfuFyoL%2FCRQTeEWTTwexfJ%2FoZVYUz8CKXrxtJ8lIz71KZC6VZi%2FoqmPfdjFR9hDiUV6Do%2FEnyVrH27hQ0&X-Amz-Signature=8f4d2aceb4af3174d89765dcb5c48206d054b1ebe3e7c4347771846f2c9b2ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIII47I6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEdN2l5nYgt6%2ByBnkn0dCKWMxi0wCUmJzcpXkzUu%2BwXAAiEAoooLHONbwswlqK1EsTd%2FIzurzCwi6YtkO%2BsQrkII%2Bkcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMAlWfYNJsi2q79DhyrcA7zXGIZk9MzY4dCCBO6acE00T%2FMd%2BATVV%2FjpXIvrvcVnEmZriPp7wN8x44nI5sPGw3F8%2Fdzro3SqmX0R5YtvEVop8wUfUuVMINLXO6Zyh4TX2usBBTXno6Y0wN1Z6rzyxYDSt5JNgRGAVNzaY%2BrahQ58Y3vnhm1aWz3exMEZ1uWvL%2FaC6aKhWrLc6hB9AKXxqXgyF6yrlwXTOf3LFhxmedulbfsC44GNi%2B1PTNbtLrdsrDpijBwOs2mLi04tDXYWpsg%2BMuBdmLq%2FkB0%2BlkbRidJ4JEmyqoh4Y34PLnEAI1MoXoqE9oYRxbqtiAniGwINm2f7%2Ff4YJ70oMiA6EwMMdf4nUy3o4PDSVyiXOJm%2F5YNdL28PW7UffYWw4lZJof%2FJVDDOQRcw52jchcmfgw%2Fq5VFN3cMxQXi4L2oLzwyy8cB4RAfJ%2FzYzii2hSvWvVowqhaRqGrW41EQIdbw%2BQSuwi8CNXXU5eSVP7TNsTjhDRZtSzRg9AQmhKTaaVWfE2TxBjrvke8u%2B9XOXqP2XAwFZVkSbCLg%2BtW4vi2rVV90lFCpwAJx7%2FDwnPRxU8BGXx8VRedDynTrl8nUSJ3u05G7D30FJ8%2B6%2BiVMQwwsLziaZ%2BbxgSO6y2jYLBy2MS311MOqCsr4GOqUBDdmFXMS3rMPzVf%2BAxDxIEXby35la9qJv2SyuSagzYFuJVFPbU19d3Sq36dlyYqMYspZoBBf%2F2qbnnSONzwrqqTei7lwc1gM%2FzyzWzh5iip1S81Z%2B%2B8sXwYABjiSuWQWS0soHIYyrHVrEfuFyoL%2FCRQTeEWTTwexfJ%2FoZVYUz8CKXrxtJ8lIz71KZC6VZi%2FoqmPfdjFR9hDiUV6Do%2FEnyVrH27hQ0&X-Amz-Signature=a0c542649947788ff6a4b77dbce7a2cf9233ed4806e14185277dfc18921f3105&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIII47I6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEdN2l5nYgt6%2ByBnkn0dCKWMxi0wCUmJzcpXkzUu%2BwXAAiEAoooLHONbwswlqK1EsTd%2FIzurzCwi6YtkO%2BsQrkII%2Bkcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMAlWfYNJsi2q79DhyrcA7zXGIZk9MzY4dCCBO6acE00T%2FMd%2BATVV%2FjpXIvrvcVnEmZriPp7wN8x44nI5sPGw3F8%2Fdzro3SqmX0R5YtvEVop8wUfUuVMINLXO6Zyh4TX2usBBTXno6Y0wN1Z6rzyxYDSt5JNgRGAVNzaY%2BrahQ58Y3vnhm1aWz3exMEZ1uWvL%2FaC6aKhWrLc6hB9AKXxqXgyF6yrlwXTOf3LFhxmedulbfsC44GNi%2B1PTNbtLrdsrDpijBwOs2mLi04tDXYWpsg%2BMuBdmLq%2FkB0%2BlkbRidJ4JEmyqoh4Y34PLnEAI1MoXoqE9oYRxbqtiAniGwINm2f7%2Ff4YJ70oMiA6EwMMdf4nUy3o4PDSVyiXOJm%2F5YNdL28PW7UffYWw4lZJof%2FJVDDOQRcw52jchcmfgw%2Fq5VFN3cMxQXi4L2oLzwyy8cB4RAfJ%2FzYzii2hSvWvVowqhaRqGrW41EQIdbw%2BQSuwi8CNXXU5eSVP7TNsTjhDRZtSzRg9AQmhKTaaVWfE2TxBjrvke8u%2B9XOXqP2XAwFZVkSbCLg%2BtW4vi2rVV90lFCpwAJx7%2FDwnPRxU8BGXx8VRedDynTrl8nUSJ3u05G7D30FJ8%2B6%2BiVMQwwsLziaZ%2BbxgSO6y2jYLBy2MS311MOqCsr4GOqUBDdmFXMS3rMPzVf%2BAxDxIEXby35la9qJv2SyuSagzYFuJVFPbU19d3Sq36dlyYqMYspZoBBf%2F2qbnnSONzwrqqTei7lwc1gM%2FzyzWzh5iip1S81Z%2B%2B8sXwYABjiSuWQWS0soHIYyrHVrEfuFyoL%2FCRQTeEWTTwexfJ%2FoZVYUz8CKXrxtJ8lIz71KZC6VZi%2FoqmPfdjFR9hDiUV6Do%2FEnyVrH27hQ0&X-Amz-Signature=ee58c670fd650a5674a4e567c454eab48236b29e620f7c4ae711160a1e0db67a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIII47I6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEdN2l5nYgt6%2ByBnkn0dCKWMxi0wCUmJzcpXkzUu%2BwXAAiEAoooLHONbwswlqK1EsTd%2FIzurzCwi6YtkO%2BsQrkII%2Bkcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMAlWfYNJsi2q79DhyrcA7zXGIZk9MzY4dCCBO6acE00T%2FMd%2BATVV%2FjpXIvrvcVnEmZriPp7wN8x44nI5sPGw3F8%2Fdzro3SqmX0R5YtvEVop8wUfUuVMINLXO6Zyh4TX2usBBTXno6Y0wN1Z6rzyxYDSt5JNgRGAVNzaY%2BrahQ58Y3vnhm1aWz3exMEZ1uWvL%2FaC6aKhWrLc6hB9AKXxqXgyF6yrlwXTOf3LFhxmedulbfsC44GNi%2B1PTNbtLrdsrDpijBwOs2mLi04tDXYWpsg%2BMuBdmLq%2FkB0%2BlkbRidJ4JEmyqoh4Y34PLnEAI1MoXoqE9oYRxbqtiAniGwINm2f7%2Ff4YJ70oMiA6EwMMdf4nUy3o4PDSVyiXOJm%2F5YNdL28PW7UffYWw4lZJof%2FJVDDOQRcw52jchcmfgw%2Fq5VFN3cMxQXi4L2oLzwyy8cB4RAfJ%2FzYzii2hSvWvVowqhaRqGrW41EQIdbw%2BQSuwi8CNXXU5eSVP7TNsTjhDRZtSzRg9AQmhKTaaVWfE2TxBjrvke8u%2B9XOXqP2XAwFZVkSbCLg%2BtW4vi2rVV90lFCpwAJx7%2FDwnPRxU8BGXx8VRedDynTrl8nUSJ3u05G7D30FJ8%2B6%2BiVMQwwsLziaZ%2BbxgSO6y2jYLBy2MS311MOqCsr4GOqUBDdmFXMS3rMPzVf%2BAxDxIEXby35la9qJv2SyuSagzYFuJVFPbU19d3Sq36dlyYqMYspZoBBf%2F2qbnnSONzwrqqTei7lwc1gM%2FzyzWzh5iip1S81Z%2B%2B8sXwYABjiSuWQWS0soHIYyrHVrEfuFyoL%2FCRQTeEWTTwexfJ%2FoZVYUz8CKXrxtJ8lIz71KZC6VZi%2FoqmPfdjFR9hDiUV6Do%2FEnyVrH27hQ0&X-Amz-Signature=c6611fbabac71571081d5cdf3a2ba0a43b74091c002f01a922e6e2ffe70abf2c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIII47I6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEdN2l5nYgt6%2ByBnkn0dCKWMxi0wCUmJzcpXkzUu%2BwXAAiEAoooLHONbwswlqK1EsTd%2FIzurzCwi6YtkO%2BsQrkII%2Bkcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMAlWfYNJsi2q79DhyrcA7zXGIZk9MzY4dCCBO6acE00T%2FMd%2BATVV%2FjpXIvrvcVnEmZriPp7wN8x44nI5sPGw3F8%2Fdzro3SqmX0R5YtvEVop8wUfUuVMINLXO6Zyh4TX2usBBTXno6Y0wN1Z6rzyxYDSt5JNgRGAVNzaY%2BrahQ58Y3vnhm1aWz3exMEZ1uWvL%2FaC6aKhWrLc6hB9AKXxqXgyF6yrlwXTOf3LFhxmedulbfsC44GNi%2B1PTNbtLrdsrDpijBwOs2mLi04tDXYWpsg%2BMuBdmLq%2FkB0%2BlkbRidJ4JEmyqoh4Y34PLnEAI1MoXoqE9oYRxbqtiAniGwINm2f7%2Ff4YJ70oMiA6EwMMdf4nUy3o4PDSVyiXOJm%2F5YNdL28PW7UffYWw4lZJof%2FJVDDOQRcw52jchcmfgw%2Fq5VFN3cMxQXi4L2oLzwyy8cB4RAfJ%2FzYzii2hSvWvVowqhaRqGrW41EQIdbw%2BQSuwi8CNXXU5eSVP7TNsTjhDRZtSzRg9AQmhKTaaVWfE2TxBjrvke8u%2B9XOXqP2XAwFZVkSbCLg%2BtW4vi2rVV90lFCpwAJx7%2FDwnPRxU8BGXx8VRedDynTrl8nUSJ3u05G7D30FJ8%2B6%2BiVMQwwsLziaZ%2BbxgSO6y2jYLBy2MS311MOqCsr4GOqUBDdmFXMS3rMPzVf%2BAxDxIEXby35la9qJv2SyuSagzYFuJVFPbU19d3Sq36dlyYqMYspZoBBf%2F2qbnnSONzwrqqTei7lwc1gM%2FzyzWzh5iip1S81Z%2B%2B8sXwYABjiSuWQWS0soHIYyrHVrEfuFyoL%2FCRQTeEWTTwexfJ%2FoZVYUz8CKXrxtJ8lIz71KZC6VZi%2FoqmPfdjFR9hDiUV6Do%2FEnyVrH27hQ0&X-Amz-Signature=6a0a9a96f39bbe64b02e90462da0774ffe109fc7bd0ee008f954f11db0748446&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIII47I6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEdN2l5nYgt6%2ByBnkn0dCKWMxi0wCUmJzcpXkzUu%2BwXAAiEAoooLHONbwswlqK1EsTd%2FIzurzCwi6YtkO%2BsQrkII%2Bkcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMAlWfYNJsi2q79DhyrcA7zXGIZk9MzY4dCCBO6acE00T%2FMd%2BATVV%2FjpXIvrvcVnEmZriPp7wN8x44nI5sPGw3F8%2Fdzro3SqmX0R5YtvEVop8wUfUuVMINLXO6Zyh4TX2usBBTXno6Y0wN1Z6rzyxYDSt5JNgRGAVNzaY%2BrahQ58Y3vnhm1aWz3exMEZ1uWvL%2FaC6aKhWrLc6hB9AKXxqXgyF6yrlwXTOf3LFhxmedulbfsC44GNi%2B1PTNbtLrdsrDpijBwOs2mLi04tDXYWpsg%2BMuBdmLq%2FkB0%2BlkbRidJ4JEmyqoh4Y34PLnEAI1MoXoqE9oYRxbqtiAniGwINm2f7%2Ff4YJ70oMiA6EwMMdf4nUy3o4PDSVyiXOJm%2F5YNdL28PW7UffYWw4lZJof%2FJVDDOQRcw52jchcmfgw%2Fq5VFN3cMxQXi4L2oLzwyy8cB4RAfJ%2FzYzii2hSvWvVowqhaRqGrW41EQIdbw%2BQSuwi8CNXXU5eSVP7TNsTjhDRZtSzRg9AQmhKTaaVWfE2TxBjrvke8u%2B9XOXqP2XAwFZVkSbCLg%2BtW4vi2rVV90lFCpwAJx7%2FDwnPRxU8BGXx8VRedDynTrl8nUSJ3u05G7D30FJ8%2B6%2BiVMQwwsLziaZ%2BbxgSO6y2jYLBy2MS311MOqCsr4GOqUBDdmFXMS3rMPzVf%2BAxDxIEXby35la9qJv2SyuSagzYFuJVFPbU19d3Sq36dlyYqMYspZoBBf%2F2qbnnSONzwrqqTei7lwc1gM%2FzyzWzh5iip1S81Z%2B%2B8sXwYABjiSuWQWS0soHIYyrHVrEfuFyoL%2FCRQTeEWTTwexfJ%2FoZVYUz8CKXrxtJ8lIz71KZC6VZi%2FoqmPfdjFR9hDiUV6Do%2FEnyVrH27hQ0&X-Amz-Signature=f81a56484acd07c8f46660ecdc8f34df12357df7322ecf7a45a96c02de7b90d1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIII47I6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEdN2l5nYgt6%2ByBnkn0dCKWMxi0wCUmJzcpXkzUu%2BwXAAiEAoooLHONbwswlqK1EsTd%2FIzurzCwi6YtkO%2BsQrkII%2Bkcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMAlWfYNJsi2q79DhyrcA7zXGIZk9MzY4dCCBO6acE00T%2FMd%2BATVV%2FjpXIvrvcVnEmZriPp7wN8x44nI5sPGw3F8%2Fdzro3SqmX0R5YtvEVop8wUfUuVMINLXO6Zyh4TX2usBBTXno6Y0wN1Z6rzyxYDSt5JNgRGAVNzaY%2BrahQ58Y3vnhm1aWz3exMEZ1uWvL%2FaC6aKhWrLc6hB9AKXxqXgyF6yrlwXTOf3LFhxmedulbfsC44GNi%2B1PTNbtLrdsrDpijBwOs2mLi04tDXYWpsg%2BMuBdmLq%2FkB0%2BlkbRidJ4JEmyqoh4Y34PLnEAI1MoXoqE9oYRxbqtiAniGwINm2f7%2Ff4YJ70oMiA6EwMMdf4nUy3o4PDSVyiXOJm%2F5YNdL28PW7UffYWw4lZJof%2FJVDDOQRcw52jchcmfgw%2Fq5VFN3cMxQXi4L2oLzwyy8cB4RAfJ%2FzYzii2hSvWvVowqhaRqGrW41EQIdbw%2BQSuwi8CNXXU5eSVP7TNsTjhDRZtSzRg9AQmhKTaaVWfE2TxBjrvke8u%2B9XOXqP2XAwFZVkSbCLg%2BtW4vi2rVV90lFCpwAJx7%2FDwnPRxU8BGXx8VRedDynTrl8nUSJ3u05G7D30FJ8%2B6%2BiVMQwwsLziaZ%2BbxgSO6y2jYLBy2MS311MOqCsr4GOqUBDdmFXMS3rMPzVf%2BAxDxIEXby35la9qJv2SyuSagzYFuJVFPbU19d3Sq36dlyYqMYspZoBBf%2F2qbnnSONzwrqqTei7lwc1gM%2FzyzWzh5iip1S81Z%2B%2B8sXwYABjiSuWQWS0soHIYyrHVrEfuFyoL%2FCRQTeEWTTwexfJ%2FoZVYUz8CKXrxtJ8lIz71KZC6VZi%2FoqmPfdjFR9hDiUV6Do%2FEnyVrH27hQ0&X-Amz-Signature=b11dc162488d3e0e1ea8c6c159361247320bb54cda2bf756117e0aefafd12901&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
