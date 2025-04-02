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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZQRZGZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDa3q6ypnn%2FZwuq%2Fop61aLhMgrxwKTcyv3KMaky5M7%2F7wIgehYwiSMFEaJKA%2FQFSGlj7MGPVkx6pEkF3M1zPDytm2QqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1PGVLoONaGYhgASrcA7eCfOTE%2F24Jrjx%2BsnEe36JGfSP%2BnVc7Xwm0tb0qZFB29u4pGqq39f%2B1PtOb15VEz2sizGjTYIB4CFtiD3Cft7xlO68FnA602FU0kdEayNKOxWUKQe5isoARb%2FI1tudt%2BvwhC9FEw7y%2BGQ5slWXHyBR82%2BJu49PV0Fj67NlyYkA6duOsYpl9D6qk1Q0Ox6GJgAf7bB96fTNXil%2B3RNCj%2Fv5i%2Br5wwb%2B3AS2thzboC23MI9YwovH1EppPPdQyRaEJ5NqmuqygDcbbkAQpYkZ%2FOR%2BzGY7rj4Lvsu72%2FU3w0v01V3sZj789hAFV2OAU%2F0OV4h7RNb8Xdfo1ome8efN%2Fdq3TqdP5ScEWnSKHRoRVL%2FxlGCYjwwPBqi4NSniF0PK%2FwmpiMzCuJ2Yu92fiY8XZMMMUwWuGXLEa80CeFBpRA3jPLAEEE2k4nAXSHRPQZwAESQFlNQpVYPceSh%2Bo8s5%2Bn%2BXzgwuZzmzhhexGtEjGoNXLSZdcVgs0F4%2BsovIOFvMh8UK115V3rvyor4OSooUGLjCKb07ETe9Llcv%2F13Njn%2F4JS9jJdquv187W7B%2BWUhxb0qdyIwdCY9%2FcTsl4hlt%2B2wphE2zx2tXD0WFUX1qTe%2FC574dmj4lTB5iQ0TY%2FMNX7tL8GOqUBq1GiBb4l%2FFJrPTPPhOQvJC3A2soimJr3noL0kzXsuJO8JIeJHWp%2FQ9QwSWVOxnhL5FnVQskxktGeziOZkesrqADs89zy1d2dRNBK%2BjuSS0cgSvRLLMb8VIIcbm4tOL7H7tiRaZqg%2Bga0Vhn6gl3BlbqUgcVZYsXO8LqpI0rBQrp6rf7zIucbyQuI5DXgzsJuPsxLozTMGbJIsWvWS9fJpDPJQjy8&X-Amz-Signature=3585f17b9b1e4dd1703e0c827e666148155132ec7f41f4e52f129f3758b2f4a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZQRZGZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDa3q6ypnn%2FZwuq%2Fop61aLhMgrxwKTcyv3KMaky5M7%2F7wIgehYwiSMFEaJKA%2FQFSGlj7MGPVkx6pEkF3M1zPDytm2QqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1PGVLoONaGYhgASrcA7eCfOTE%2F24Jrjx%2BsnEe36JGfSP%2BnVc7Xwm0tb0qZFB29u4pGqq39f%2B1PtOb15VEz2sizGjTYIB4CFtiD3Cft7xlO68FnA602FU0kdEayNKOxWUKQe5isoARb%2FI1tudt%2BvwhC9FEw7y%2BGQ5slWXHyBR82%2BJu49PV0Fj67NlyYkA6duOsYpl9D6qk1Q0Ox6GJgAf7bB96fTNXil%2B3RNCj%2Fv5i%2Br5wwb%2B3AS2thzboC23MI9YwovH1EppPPdQyRaEJ5NqmuqygDcbbkAQpYkZ%2FOR%2BzGY7rj4Lvsu72%2FU3w0v01V3sZj789hAFV2OAU%2F0OV4h7RNb8Xdfo1ome8efN%2Fdq3TqdP5ScEWnSKHRoRVL%2FxlGCYjwwPBqi4NSniF0PK%2FwmpiMzCuJ2Yu92fiY8XZMMMUwWuGXLEa80CeFBpRA3jPLAEEE2k4nAXSHRPQZwAESQFlNQpVYPceSh%2Bo8s5%2Bn%2BXzgwuZzmzhhexGtEjGoNXLSZdcVgs0F4%2BsovIOFvMh8UK115V3rvyor4OSooUGLjCKb07ETe9Llcv%2F13Njn%2F4JS9jJdquv187W7B%2BWUhxb0qdyIwdCY9%2FcTsl4hlt%2B2wphE2zx2tXD0WFUX1qTe%2FC574dmj4lTB5iQ0TY%2FMNX7tL8GOqUBq1GiBb4l%2FFJrPTPPhOQvJC3A2soimJr3noL0kzXsuJO8JIeJHWp%2FQ9QwSWVOxnhL5FnVQskxktGeziOZkesrqADs89zy1d2dRNBK%2BjuSS0cgSvRLLMb8VIIcbm4tOL7H7tiRaZqg%2Bga0Vhn6gl3BlbqUgcVZYsXO8LqpI0rBQrp6rf7zIucbyQuI5DXgzsJuPsxLozTMGbJIsWvWS9fJpDPJQjy8&X-Amz-Signature=06b7c20b5e42796cc352683a53d69ca7e9e8fa4b9fc463646ba5e8cab4f87335&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZQRZGZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDa3q6ypnn%2FZwuq%2Fop61aLhMgrxwKTcyv3KMaky5M7%2F7wIgehYwiSMFEaJKA%2FQFSGlj7MGPVkx6pEkF3M1zPDytm2QqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1PGVLoONaGYhgASrcA7eCfOTE%2F24Jrjx%2BsnEe36JGfSP%2BnVc7Xwm0tb0qZFB29u4pGqq39f%2B1PtOb15VEz2sizGjTYIB4CFtiD3Cft7xlO68FnA602FU0kdEayNKOxWUKQe5isoARb%2FI1tudt%2BvwhC9FEw7y%2BGQ5slWXHyBR82%2BJu49PV0Fj67NlyYkA6duOsYpl9D6qk1Q0Ox6GJgAf7bB96fTNXil%2B3RNCj%2Fv5i%2Br5wwb%2B3AS2thzboC23MI9YwovH1EppPPdQyRaEJ5NqmuqygDcbbkAQpYkZ%2FOR%2BzGY7rj4Lvsu72%2FU3w0v01V3sZj789hAFV2OAU%2F0OV4h7RNb8Xdfo1ome8efN%2Fdq3TqdP5ScEWnSKHRoRVL%2FxlGCYjwwPBqi4NSniF0PK%2FwmpiMzCuJ2Yu92fiY8XZMMMUwWuGXLEa80CeFBpRA3jPLAEEE2k4nAXSHRPQZwAESQFlNQpVYPceSh%2Bo8s5%2Bn%2BXzgwuZzmzhhexGtEjGoNXLSZdcVgs0F4%2BsovIOFvMh8UK115V3rvyor4OSooUGLjCKb07ETe9Llcv%2F13Njn%2F4JS9jJdquv187W7B%2BWUhxb0qdyIwdCY9%2FcTsl4hlt%2B2wphE2zx2tXD0WFUX1qTe%2FC574dmj4lTB5iQ0TY%2FMNX7tL8GOqUBq1GiBb4l%2FFJrPTPPhOQvJC3A2soimJr3noL0kzXsuJO8JIeJHWp%2FQ9QwSWVOxnhL5FnVQskxktGeziOZkesrqADs89zy1d2dRNBK%2BjuSS0cgSvRLLMb8VIIcbm4tOL7H7tiRaZqg%2Bga0Vhn6gl3BlbqUgcVZYsXO8LqpI0rBQrp6rf7zIucbyQuI5DXgzsJuPsxLozTMGbJIsWvWS9fJpDPJQjy8&X-Amz-Signature=a70c1a9b458001bcc6169d5872ba5e008b6635178084d8dc2b4c4bff75730390&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZQRZGZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDa3q6ypnn%2FZwuq%2Fop61aLhMgrxwKTcyv3KMaky5M7%2F7wIgehYwiSMFEaJKA%2FQFSGlj7MGPVkx6pEkF3M1zPDytm2QqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1PGVLoONaGYhgASrcA7eCfOTE%2F24Jrjx%2BsnEe36JGfSP%2BnVc7Xwm0tb0qZFB29u4pGqq39f%2B1PtOb15VEz2sizGjTYIB4CFtiD3Cft7xlO68FnA602FU0kdEayNKOxWUKQe5isoARb%2FI1tudt%2BvwhC9FEw7y%2BGQ5slWXHyBR82%2BJu49PV0Fj67NlyYkA6duOsYpl9D6qk1Q0Ox6GJgAf7bB96fTNXil%2B3RNCj%2Fv5i%2Br5wwb%2B3AS2thzboC23MI9YwovH1EppPPdQyRaEJ5NqmuqygDcbbkAQpYkZ%2FOR%2BzGY7rj4Lvsu72%2FU3w0v01V3sZj789hAFV2OAU%2F0OV4h7RNb8Xdfo1ome8efN%2Fdq3TqdP5ScEWnSKHRoRVL%2FxlGCYjwwPBqi4NSniF0PK%2FwmpiMzCuJ2Yu92fiY8XZMMMUwWuGXLEa80CeFBpRA3jPLAEEE2k4nAXSHRPQZwAESQFlNQpVYPceSh%2Bo8s5%2Bn%2BXzgwuZzmzhhexGtEjGoNXLSZdcVgs0F4%2BsovIOFvMh8UK115V3rvyor4OSooUGLjCKb07ETe9Llcv%2F13Njn%2F4JS9jJdquv187W7B%2BWUhxb0qdyIwdCY9%2FcTsl4hlt%2B2wphE2zx2tXD0WFUX1qTe%2FC574dmj4lTB5iQ0TY%2FMNX7tL8GOqUBq1GiBb4l%2FFJrPTPPhOQvJC3A2soimJr3noL0kzXsuJO8JIeJHWp%2FQ9QwSWVOxnhL5FnVQskxktGeziOZkesrqADs89zy1d2dRNBK%2BjuSS0cgSvRLLMb8VIIcbm4tOL7H7tiRaZqg%2Bga0Vhn6gl3BlbqUgcVZYsXO8LqpI0rBQrp6rf7zIucbyQuI5DXgzsJuPsxLozTMGbJIsWvWS9fJpDPJQjy8&X-Amz-Signature=9db030b90af14014a3f7f1c7bdb2c92d004704c092c12e2fc8abd0139269bfb3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZQRZGZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDa3q6ypnn%2FZwuq%2Fop61aLhMgrxwKTcyv3KMaky5M7%2F7wIgehYwiSMFEaJKA%2FQFSGlj7MGPVkx6pEkF3M1zPDytm2QqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1PGVLoONaGYhgASrcA7eCfOTE%2F24Jrjx%2BsnEe36JGfSP%2BnVc7Xwm0tb0qZFB29u4pGqq39f%2B1PtOb15VEz2sizGjTYIB4CFtiD3Cft7xlO68FnA602FU0kdEayNKOxWUKQe5isoARb%2FI1tudt%2BvwhC9FEw7y%2BGQ5slWXHyBR82%2BJu49PV0Fj67NlyYkA6duOsYpl9D6qk1Q0Ox6GJgAf7bB96fTNXil%2B3RNCj%2Fv5i%2Br5wwb%2B3AS2thzboC23MI9YwovH1EppPPdQyRaEJ5NqmuqygDcbbkAQpYkZ%2FOR%2BzGY7rj4Lvsu72%2FU3w0v01V3sZj789hAFV2OAU%2F0OV4h7RNb8Xdfo1ome8efN%2Fdq3TqdP5ScEWnSKHRoRVL%2FxlGCYjwwPBqi4NSniF0PK%2FwmpiMzCuJ2Yu92fiY8XZMMMUwWuGXLEa80CeFBpRA3jPLAEEE2k4nAXSHRPQZwAESQFlNQpVYPceSh%2Bo8s5%2Bn%2BXzgwuZzmzhhexGtEjGoNXLSZdcVgs0F4%2BsovIOFvMh8UK115V3rvyor4OSooUGLjCKb07ETe9Llcv%2F13Njn%2F4JS9jJdquv187W7B%2BWUhxb0qdyIwdCY9%2FcTsl4hlt%2B2wphE2zx2tXD0WFUX1qTe%2FC574dmj4lTB5iQ0TY%2FMNX7tL8GOqUBq1GiBb4l%2FFJrPTPPhOQvJC3A2soimJr3noL0kzXsuJO8JIeJHWp%2FQ9QwSWVOxnhL5FnVQskxktGeziOZkesrqADs89zy1d2dRNBK%2BjuSS0cgSvRLLMb8VIIcbm4tOL7H7tiRaZqg%2Bga0Vhn6gl3BlbqUgcVZYsXO8LqpI0rBQrp6rf7zIucbyQuI5DXgzsJuPsxLozTMGbJIsWvWS9fJpDPJQjy8&X-Amz-Signature=30f167256d8e5f9adbba203e70cb354f2ea30696914721eace6f94708eafa127&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZQRZGZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDa3q6ypnn%2FZwuq%2Fop61aLhMgrxwKTcyv3KMaky5M7%2F7wIgehYwiSMFEaJKA%2FQFSGlj7MGPVkx6pEkF3M1zPDytm2QqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1PGVLoONaGYhgASrcA7eCfOTE%2F24Jrjx%2BsnEe36JGfSP%2BnVc7Xwm0tb0qZFB29u4pGqq39f%2B1PtOb15VEz2sizGjTYIB4CFtiD3Cft7xlO68FnA602FU0kdEayNKOxWUKQe5isoARb%2FI1tudt%2BvwhC9FEw7y%2BGQ5slWXHyBR82%2BJu49PV0Fj67NlyYkA6duOsYpl9D6qk1Q0Ox6GJgAf7bB96fTNXil%2B3RNCj%2Fv5i%2Br5wwb%2B3AS2thzboC23MI9YwovH1EppPPdQyRaEJ5NqmuqygDcbbkAQpYkZ%2FOR%2BzGY7rj4Lvsu72%2FU3w0v01V3sZj789hAFV2OAU%2F0OV4h7RNb8Xdfo1ome8efN%2Fdq3TqdP5ScEWnSKHRoRVL%2FxlGCYjwwPBqi4NSniF0PK%2FwmpiMzCuJ2Yu92fiY8XZMMMUwWuGXLEa80CeFBpRA3jPLAEEE2k4nAXSHRPQZwAESQFlNQpVYPceSh%2Bo8s5%2Bn%2BXzgwuZzmzhhexGtEjGoNXLSZdcVgs0F4%2BsovIOFvMh8UK115V3rvyor4OSooUGLjCKb07ETe9Llcv%2F13Njn%2F4JS9jJdquv187W7B%2BWUhxb0qdyIwdCY9%2FcTsl4hlt%2B2wphE2zx2tXD0WFUX1qTe%2FC574dmj4lTB5iQ0TY%2FMNX7tL8GOqUBq1GiBb4l%2FFJrPTPPhOQvJC3A2soimJr3noL0kzXsuJO8JIeJHWp%2FQ9QwSWVOxnhL5FnVQskxktGeziOZkesrqADs89zy1d2dRNBK%2BjuSS0cgSvRLLMb8VIIcbm4tOL7H7tiRaZqg%2Bga0Vhn6gl3BlbqUgcVZYsXO8LqpI0rBQrp6rf7zIucbyQuI5DXgzsJuPsxLozTMGbJIsWvWS9fJpDPJQjy8&X-Amz-Signature=e4e3f16eee77b577c87a13704ffd805fe4ab83faceb5493cccfa21027dddc347&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZQRZGZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDa3q6ypnn%2FZwuq%2Fop61aLhMgrxwKTcyv3KMaky5M7%2F7wIgehYwiSMFEaJKA%2FQFSGlj7MGPVkx6pEkF3M1zPDytm2QqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1PGVLoONaGYhgASrcA7eCfOTE%2F24Jrjx%2BsnEe36JGfSP%2BnVc7Xwm0tb0qZFB29u4pGqq39f%2B1PtOb15VEz2sizGjTYIB4CFtiD3Cft7xlO68FnA602FU0kdEayNKOxWUKQe5isoARb%2FI1tudt%2BvwhC9FEw7y%2BGQ5slWXHyBR82%2BJu49PV0Fj67NlyYkA6duOsYpl9D6qk1Q0Ox6GJgAf7bB96fTNXil%2B3RNCj%2Fv5i%2Br5wwb%2B3AS2thzboC23MI9YwovH1EppPPdQyRaEJ5NqmuqygDcbbkAQpYkZ%2FOR%2BzGY7rj4Lvsu72%2FU3w0v01V3sZj789hAFV2OAU%2F0OV4h7RNb8Xdfo1ome8efN%2Fdq3TqdP5ScEWnSKHRoRVL%2FxlGCYjwwPBqi4NSniF0PK%2FwmpiMzCuJ2Yu92fiY8XZMMMUwWuGXLEa80CeFBpRA3jPLAEEE2k4nAXSHRPQZwAESQFlNQpVYPceSh%2Bo8s5%2Bn%2BXzgwuZzmzhhexGtEjGoNXLSZdcVgs0F4%2BsovIOFvMh8UK115V3rvyor4OSooUGLjCKb07ETe9Llcv%2F13Njn%2F4JS9jJdquv187W7B%2BWUhxb0qdyIwdCY9%2FcTsl4hlt%2B2wphE2zx2tXD0WFUX1qTe%2FC574dmj4lTB5iQ0TY%2FMNX7tL8GOqUBq1GiBb4l%2FFJrPTPPhOQvJC3A2soimJr3noL0kzXsuJO8JIeJHWp%2FQ9QwSWVOxnhL5FnVQskxktGeziOZkesrqADs89zy1d2dRNBK%2BjuSS0cgSvRLLMb8VIIcbm4tOL7H7tiRaZqg%2Bga0Vhn6gl3BlbqUgcVZYsXO8LqpI0rBQrp6rf7zIucbyQuI5DXgzsJuPsxLozTMGbJIsWvWS9fJpDPJQjy8&X-Amz-Signature=867c16121c1482ecd9ecdc611c1312faa1b9cea54f9e0b610af99854c7c5cadf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
