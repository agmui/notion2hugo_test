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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PDOO4Y%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqRw1Qk7tD6SNKCJzCfk0EEUXCAR7NPJ16WsqWLdtSYAiEA5Gd97I9MA9kSwIa7nVjdlmbbfzzkIYm%2BGXVvjmisW78q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG1sX1lQkmM8zvgXaircA8hM0aeqSIS3KeBsLGQF0Bu%2Bsz%2BIr8XDZtWOmKdeKCuft35UrJZ7wsfwrGC8N8OL04yWN0mLIglYk2Y3vBHO63goq8pGEPmbncXhUNQWCcmlHHwi1xSdCEMArziWQ%2BAaSvihc5BQWa%2FlKvFMFTB5z7LRYl%2Bchkg8a4a9q7UkTEWbalHc7AnpdiiuFTysHNaiXlpA2ZXZPKJKHr7Yt1OkeXAbIVkOyxkwKXpqPom7BVYePGKzXiXVySIu98oTIJcAU4yf5yAXkM%2Fdbnv3CZ34nMJoXy2DZHtFvQbzBf6VQVcqXEPpwP7jzBXRJyiQ0xlt31KZb9V1voGd3so5SEyXgO9irjMhUP7meazOYO2j6DGcSr28ovp%2BsyCHlSpZj2pCBYvWtvDaXc7UlSIT62dErs6I9B2IY5A4dZcZQuNr42X4D2wVUNfZeL04v4JMTLIpMgAkg6tw3V62eAxGE9fr%2FbwnIVeU44RQNfAOKwg9NCHzo3e9ZPt7%2FIl17s%2BCyb0Nssd%2BYhU%2BWHpYNXgfgE06ZN9i5YjqpfMFHDAQ%2FSZ%2BhqShS5ZJE3DO8VDFwb0wET12aQsAl8%2FwXVLPSQn%2F3kDhQjtAOAug7Ms1zsrMGqvF2Oj5YfZR30TyVEzVMoEfMLzG8cQGOqUBcfREaQEBcXaAaIhYNdBM%2BJXbI2c5VJqPfhnEwdLT0ym2%2BFvkPb2q63Q4Fd4mDvqJogTNycwwAUA%2BsMkEjQeH4LU7vbZ5VASL71A297SnPf0OwJFjgFNgwrTmmPEH7Ppppzk45uoLNmtYJKR%2B023HgwY2v%2BELt9DrCC6OmehUd7Royxg85OrF4bGCLLrp%2F9Yg3b2dsDS42PpdH0IcJ0dyfsM%2FRlGQ&X-Amz-Signature=4d070ae5fd2575fc705fe35243bc02ce78411a2959a41bf089bc5f09afccc8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PDOO4Y%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqRw1Qk7tD6SNKCJzCfk0EEUXCAR7NPJ16WsqWLdtSYAiEA5Gd97I9MA9kSwIa7nVjdlmbbfzzkIYm%2BGXVvjmisW78q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG1sX1lQkmM8zvgXaircA8hM0aeqSIS3KeBsLGQF0Bu%2Bsz%2BIr8XDZtWOmKdeKCuft35UrJZ7wsfwrGC8N8OL04yWN0mLIglYk2Y3vBHO63goq8pGEPmbncXhUNQWCcmlHHwi1xSdCEMArziWQ%2BAaSvihc5BQWa%2FlKvFMFTB5z7LRYl%2Bchkg8a4a9q7UkTEWbalHc7AnpdiiuFTysHNaiXlpA2ZXZPKJKHr7Yt1OkeXAbIVkOyxkwKXpqPom7BVYePGKzXiXVySIu98oTIJcAU4yf5yAXkM%2Fdbnv3CZ34nMJoXy2DZHtFvQbzBf6VQVcqXEPpwP7jzBXRJyiQ0xlt31KZb9V1voGd3so5SEyXgO9irjMhUP7meazOYO2j6DGcSr28ovp%2BsyCHlSpZj2pCBYvWtvDaXc7UlSIT62dErs6I9B2IY5A4dZcZQuNr42X4D2wVUNfZeL04v4JMTLIpMgAkg6tw3V62eAxGE9fr%2FbwnIVeU44RQNfAOKwg9NCHzo3e9ZPt7%2FIl17s%2BCyb0Nssd%2BYhU%2BWHpYNXgfgE06ZN9i5YjqpfMFHDAQ%2FSZ%2BhqShS5ZJE3DO8VDFwb0wET12aQsAl8%2FwXVLPSQn%2F3kDhQjtAOAug7Ms1zsrMGqvF2Oj5YfZR30TyVEzVMoEfMLzG8cQGOqUBcfREaQEBcXaAaIhYNdBM%2BJXbI2c5VJqPfhnEwdLT0ym2%2BFvkPb2q63Q4Fd4mDvqJogTNycwwAUA%2BsMkEjQeH4LU7vbZ5VASL71A297SnPf0OwJFjgFNgwrTmmPEH7Ppppzk45uoLNmtYJKR%2B023HgwY2v%2BELt9DrCC6OmehUd7Royxg85OrF4bGCLLrp%2F9Yg3b2dsDS42PpdH0IcJ0dyfsM%2FRlGQ&X-Amz-Signature=23b81c83a2a6423af11e22cd4b5585f266bac335f2a69b36dbda963f545b04fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PDOO4Y%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqRw1Qk7tD6SNKCJzCfk0EEUXCAR7NPJ16WsqWLdtSYAiEA5Gd97I9MA9kSwIa7nVjdlmbbfzzkIYm%2BGXVvjmisW78q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG1sX1lQkmM8zvgXaircA8hM0aeqSIS3KeBsLGQF0Bu%2Bsz%2BIr8XDZtWOmKdeKCuft35UrJZ7wsfwrGC8N8OL04yWN0mLIglYk2Y3vBHO63goq8pGEPmbncXhUNQWCcmlHHwi1xSdCEMArziWQ%2BAaSvihc5BQWa%2FlKvFMFTB5z7LRYl%2Bchkg8a4a9q7UkTEWbalHc7AnpdiiuFTysHNaiXlpA2ZXZPKJKHr7Yt1OkeXAbIVkOyxkwKXpqPom7BVYePGKzXiXVySIu98oTIJcAU4yf5yAXkM%2Fdbnv3CZ34nMJoXy2DZHtFvQbzBf6VQVcqXEPpwP7jzBXRJyiQ0xlt31KZb9V1voGd3so5SEyXgO9irjMhUP7meazOYO2j6DGcSr28ovp%2BsyCHlSpZj2pCBYvWtvDaXc7UlSIT62dErs6I9B2IY5A4dZcZQuNr42X4D2wVUNfZeL04v4JMTLIpMgAkg6tw3V62eAxGE9fr%2FbwnIVeU44RQNfAOKwg9NCHzo3e9ZPt7%2FIl17s%2BCyb0Nssd%2BYhU%2BWHpYNXgfgE06ZN9i5YjqpfMFHDAQ%2FSZ%2BhqShS5ZJE3DO8VDFwb0wET12aQsAl8%2FwXVLPSQn%2F3kDhQjtAOAug7Ms1zsrMGqvF2Oj5YfZR30TyVEzVMoEfMLzG8cQGOqUBcfREaQEBcXaAaIhYNdBM%2BJXbI2c5VJqPfhnEwdLT0ym2%2BFvkPb2q63Q4Fd4mDvqJogTNycwwAUA%2BsMkEjQeH4LU7vbZ5VASL71A297SnPf0OwJFjgFNgwrTmmPEH7Ppppzk45uoLNmtYJKR%2B023HgwY2v%2BELt9DrCC6OmehUd7Royxg85OrF4bGCLLrp%2F9Yg3b2dsDS42PpdH0IcJ0dyfsM%2FRlGQ&X-Amz-Signature=0e76826696662281d4628f829a4e359cfee0a08889d7425652c4e627d795e3a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PDOO4Y%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqRw1Qk7tD6SNKCJzCfk0EEUXCAR7NPJ16WsqWLdtSYAiEA5Gd97I9MA9kSwIa7nVjdlmbbfzzkIYm%2BGXVvjmisW78q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG1sX1lQkmM8zvgXaircA8hM0aeqSIS3KeBsLGQF0Bu%2Bsz%2BIr8XDZtWOmKdeKCuft35UrJZ7wsfwrGC8N8OL04yWN0mLIglYk2Y3vBHO63goq8pGEPmbncXhUNQWCcmlHHwi1xSdCEMArziWQ%2BAaSvihc5BQWa%2FlKvFMFTB5z7LRYl%2Bchkg8a4a9q7UkTEWbalHc7AnpdiiuFTysHNaiXlpA2ZXZPKJKHr7Yt1OkeXAbIVkOyxkwKXpqPom7BVYePGKzXiXVySIu98oTIJcAU4yf5yAXkM%2Fdbnv3CZ34nMJoXy2DZHtFvQbzBf6VQVcqXEPpwP7jzBXRJyiQ0xlt31KZb9V1voGd3so5SEyXgO9irjMhUP7meazOYO2j6DGcSr28ovp%2BsyCHlSpZj2pCBYvWtvDaXc7UlSIT62dErs6I9B2IY5A4dZcZQuNr42X4D2wVUNfZeL04v4JMTLIpMgAkg6tw3V62eAxGE9fr%2FbwnIVeU44RQNfAOKwg9NCHzo3e9ZPt7%2FIl17s%2BCyb0Nssd%2BYhU%2BWHpYNXgfgE06ZN9i5YjqpfMFHDAQ%2FSZ%2BhqShS5ZJE3DO8VDFwb0wET12aQsAl8%2FwXVLPSQn%2F3kDhQjtAOAug7Ms1zsrMGqvF2Oj5YfZR30TyVEzVMoEfMLzG8cQGOqUBcfREaQEBcXaAaIhYNdBM%2BJXbI2c5VJqPfhnEwdLT0ym2%2BFvkPb2q63Q4Fd4mDvqJogTNycwwAUA%2BsMkEjQeH4LU7vbZ5VASL71A297SnPf0OwJFjgFNgwrTmmPEH7Ppppzk45uoLNmtYJKR%2B023HgwY2v%2BELt9DrCC6OmehUd7Royxg85OrF4bGCLLrp%2F9Yg3b2dsDS42PpdH0IcJ0dyfsM%2FRlGQ&X-Amz-Signature=e45d9026bfaa1d8b1c6b19ffb60a9cefecf73f0b3d1215f8ad90154187845851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PDOO4Y%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqRw1Qk7tD6SNKCJzCfk0EEUXCAR7NPJ16WsqWLdtSYAiEA5Gd97I9MA9kSwIa7nVjdlmbbfzzkIYm%2BGXVvjmisW78q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG1sX1lQkmM8zvgXaircA8hM0aeqSIS3KeBsLGQF0Bu%2Bsz%2BIr8XDZtWOmKdeKCuft35UrJZ7wsfwrGC8N8OL04yWN0mLIglYk2Y3vBHO63goq8pGEPmbncXhUNQWCcmlHHwi1xSdCEMArziWQ%2BAaSvihc5BQWa%2FlKvFMFTB5z7LRYl%2Bchkg8a4a9q7UkTEWbalHc7AnpdiiuFTysHNaiXlpA2ZXZPKJKHr7Yt1OkeXAbIVkOyxkwKXpqPom7BVYePGKzXiXVySIu98oTIJcAU4yf5yAXkM%2Fdbnv3CZ34nMJoXy2DZHtFvQbzBf6VQVcqXEPpwP7jzBXRJyiQ0xlt31KZb9V1voGd3so5SEyXgO9irjMhUP7meazOYO2j6DGcSr28ovp%2BsyCHlSpZj2pCBYvWtvDaXc7UlSIT62dErs6I9B2IY5A4dZcZQuNr42X4D2wVUNfZeL04v4JMTLIpMgAkg6tw3V62eAxGE9fr%2FbwnIVeU44RQNfAOKwg9NCHzo3e9ZPt7%2FIl17s%2BCyb0Nssd%2BYhU%2BWHpYNXgfgE06ZN9i5YjqpfMFHDAQ%2FSZ%2BhqShS5ZJE3DO8VDFwb0wET12aQsAl8%2FwXVLPSQn%2F3kDhQjtAOAug7Ms1zsrMGqvF2Oj5YfZR30TyVEzVMoEfMLzG8cQGOqUBcfREaQEBcXaAaIhYNdBM%2BJXbI2c5VJqPfhnEwdLT0ym2%2BFvkPb2q63Q4Fd4mDvqJogTNycwwAUA%2BsMkEjQeH4LU7vbZ5VASL71A297SnPf0OwJFjgFNgwrTmmPEH7Ppppzk45uoLNmtYJKR%2B023HgwY2v%2BELt9DrCC6OmehUd7Royxg85OrF4bGCLLrp%2F9Yg3b2dsDS42PpdH0IcJ0dyfsM%2FRlGQ&X-Amz-Signature=c3bf93c9dd99cf3435b8b5c38f217e1bfbbf04db137485e9a868d3223224277c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PDOO4Y%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqRw1Qk7tD6SNKCJzCfk0EEUXCAR7NPJ16WsqWLdtSYAiEA5Gd97I9MA9kSwIa7nVjdlmbbfzzkIYm%2BGXVvjmisW78q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG1sX1lQkmM8zvgXaircA8hM0aeqSIS3KeBsLGQF0Bu%2Bsz%2BIr8XDZtWOmKdeKCuft35UrJZ7wsfwrGC8N8OL04yWN0mLIglYk2Y3vBHO63goq8pGEPmbncXhUNQWCcmlHHwi1xSdCEMArziWQ%2BAaSvihc5BQWa%2FlKvFMFTB5z7LRYl%2Bchkg8a4a9q7UkTEWbalHc7AnpdiiuFTysHNaiXlpA2ZXZPKJKHr7Yt1OkeXAbIVkOyxkwKXpqPom7BVYePGKzXiXVySIu98oTIJcAU4yf5yAXkM%2Fdbnv3CZ34nMJoXy2DZHtFvQbzBf6VQVcqXEPpwP7jzBXRJyiQ0xlt31KZb9V1voGd3so5SEyXgO9irjMhUP7meazOYO2j6DGcSr28ovp%2BsyCHlSpZj2pCBYvWtvDaXc7UlSIT62dErs6I9B2IY5A4dZcZQuNr42X4D2wVUNfZeL04v4JMTLIpMgAkg6tw3V62eAxGE9fr%2FbwnIVeU44RQNfAOKwg9NCHzo3e9ZPt7%2FIl17s%2BCyb0Nssd%2BYhU%2BWHpYNXgfgE06ZN9i5YjqpfMFHDAQ%2FSZ%2BhqShS5ZJE3DO8VDFwb0wET12aQsAl8%2FwXVLPSQn%2F3kDhQjtAOAug7Ms1zsrMGqvF2Oj5YfZR30TyVEzVMoEfMLzG8cQGOqUBcfREaQEBcXaAaIhYNdBM%2BJXbI2c5VJqPfhnEwdLT0ym2%2BFvkPb2q63Q4Fd4mDvqJogTNycwwAUA%2BsMkEjQeH4LU7vbZ5VASL71A297SnPf0OwJFjgFNgwrTmmPEH7Ppppzk45uoLNmtYJKR%2B023HgwY2v%2BELt9DrCC6OmehUd7Royxg85OrF4bGCLLrp%2F9Yg3b2dsDS42PpdH0IcJ0dyfsM%2FRlGQ&X-Amz-Signature=980213fa86104b3ddb7eebfbd3ad652db7a646e9c2dcd8b7355d2f4119c5cfbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PDOO4Y%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqRw1Qk7tD6SNKCJzCfk0EEUXCAR7NPJ16WsqWLdtSYAiEA5Gd97I9MA9kSwIa7nVjdlmbbfzzkIYm%2BGXVvjmisW78q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG1sX1lQkmM8zvgXaircA8hM0aeqSIS3KeBsLGQF0Bu%2Bsz%2BIr8XDZtWOmKdeKCuft35UrJZ7wsfwrGC8N8OL04yWN0mLIglYk2Y3vBHO63goq8pGEPmbncXhUNQWCcmlHHwi1xSdCEMArziWQ%2BAaSvihc5BQWa%2FlKvFMFTB5z7LRYl%2Bchkg8a4a9q7UkTEWbalHc7AnpdiiuFTysHNaiXlpA2ZXZPKJKHr7Yt1OkeXAbIVkOyxkwKXpqPom7BVYePGKzXiXVySIu98oTIJcAU4yf5yAXkM%2Fdbnv3CZ34nMJoXy2DZHtFvQbzBf6VQVcqXEPpwP7jzBXRJyiQ0xlt31KZb9V1voGd3so5SEyXgO9irjMhUP7meazOYO2j6DGcSr28ovp%2BsyCHlSpZj2pCBYvWtvDaXc7UlSIT62dErs6I9B2IY5A4dZcZQuNr42X4D2wVUNfZeL04v4JMTLIpMgAkg6tw3V62eAxGE9fr%2FbwnIVeU44RQNfAOKwg9NCHzo3e9ZPt7%2FIl17s%2BCyb0Nssd%2BYhU%2BWHpYNXgfgE06ZN9i5YjqpfMFHDAQ%2FSZ%2BhqShS5ZJE3DO8VDFwb0wET12aQsAl8%2FwXVLPSQn%2F3kDhQjtAOAug7Ms1zsrMGqvF2Oj5YfZR30TyVEzVMoEfMLzG8cQGOqUBcfREaQEBcXaAaIhYNdBM%2BJXbI2c5VJqPfhnEwdLT0ym2%2BFvkPb2q63Q4Fd4mDvqJogTNycwwAUA%2BsMkEjQeH4LU7vbZ5VASL71A297SnPf0OwJFjgFNgwrTmmPEH7Ppppzk45uoLNmtYJKR%2B023HgwY2v%2BELt9DrCC6OmehUd7Royxg85OrF4bGCLLrp%2F9Yg3b2dsDS42PpdH0IcJ0dyfsM%2FRlGQ&X-Amz-Signature=614fb96d44532b9155fa6c02f97d8a44e5a60a5f2110a1f662e80b740eb8e8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
