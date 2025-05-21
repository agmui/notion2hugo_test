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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QWSG4V%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCGncbyWrYeUXp17TbZ3XFbadl13RynH17yI8PfpTeZ%2BgIgRmXynyQMeoOJOleyp43dRliRRAdcU38iQKVv2GDgMtIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1Xta%2Bk%2BSTanLvwRSrcA%2Fp7KipWhonrga3QP1hnqUh%2BRbe%2FAVeBuKgyCereJBQKusDfQJs9e1En48LQATaK63u1zsBmFYfe13GaYTp5XG4XJm0HrgJNwRP0C0fz7A2O656JaTYt8AGik%2BFvWoKnMULUseAZDMZRrfuHkk3nS7UW3MJLGK0mPyVEq7yrulvpbM5Ser31lY%2FTyjKxdEwKAoDDYd6mtyS6%2B36bRzN0PjDLBNGVwBY6Ek649GQRJh8sRdp7iFiuUPSBQrZv7OMR2x53i7Siegc3gWXLHiV2HrCMdzX%2FRjMMLslK4DlYqIMHzDWoG1WIVa8ED2KCU5kDsG142MHp3OFVobBNBxTMoqbao13M%2FzJNHq9WbHlD16jj7h79fIczRt4WmOG%2FXq2H7Wlv5MEXmiAVYwGi%2FwvLCFgekGYROTWEcE7dCLs2p4i3YqCOa8QlGLqAU7pv95bSU1tRvdVVswfFmKQgJrnpJ0PivSeubICx8m9eamCnOg3iNQdAnZ3CY7rNaUK5MG%2BwROV1E8JsvM4FM0d8S0OmqmddRUXVt8VkpEFDzvH5MnvZYeLZ2Q9%2Ft5hyqSbbgJezaY1bkfCb%2FSZ2fNRy3A03BMWhyQH6F2WJg71v3hlHU3oLWNWVZWciX1vpo7HqMNWiuMEGOqUBDc%2BWHxpPXDZu%2FG4MyaCXsrWlyjti3L4q7c9bBjlLHGIowh%2Bf9HETOeA6CjvKUt18saTLi%2Fhz46k%2B4z2sisJQjzWRKwimgMQ7lNnUfpeFDGhX1hyjdmXALQZf982qp7N28e5L1lBBP3SCBOOPKnlAYkG7BB%2FOfvy0fXbGoR0iWW6PWD0v5wKQZJuBMYNxN4yGEADLVsXiWaAJKs3kOziaNIz3m0Wg&X-Amz-Signature=ef506360f18e4ad46b0e0d397fedfd4e40de373abf77408f3af0953c3f39357b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QWSG4V%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCGncbyWrYeUXp17TbZ3XFbadl13RynH17yI8PfpTeZ%2BgIgRmXynyQMeoOJOleyp43dRliRRAdcU38iQKVv2GDgMtIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1Xta%2Bk%2BSTanLvwRSrcA%2Fp7KipWhonrga3QP1hnqUh%2BRbe%2FAVeBuKgyCereJBQKusDfQJs9e1En48LQATaK63u1zsBmFYfe13GaYTp5XG4XJm0HrgJNwRP0C0fz7A2O656JaTYt8AGik%2BFvWoKnMULUseAZDMZRrfuHkk3nS7UW3MJLGK0mPyVEq7yrulvpbM5Ser31lY%2FTyjKxdEwKAoDDYd6mtyS6%2B36bRzN0PjDLBNGVwBY6Ek649GQRJh8sRdp7iFiuUPSBQrZv7OMR2x53i7Siegc3gWXLHiV2HrCMdzX%2FRjMMLslK4DlYqIMHzDWoG1WIVa8ED2KCU5kDsG142MHp3OFVobBNBxTMoqbao13M%2FzJNHq9WbHlD16jj7h79fIczRt4WmOG%2FXq2H7Wlv5MEXmiAVYwGi%2FwvLCFgekGYROTWEcE7dCLs2p4i3YqCOa8QlGLqAU7pv95bSU1tRvdVVswfFmKQgJrnpJ0PivSeubICx8m9eamCnOg3iNQdAnZ3CY7rNaUK5MG%2BwROV1E8JsvM4FM0d8S0OmqmddRUXVt8VkpEFDzvH5MnvZYeLZ2Q9%2Ft5hyqSbbgJezaY1bkfCb%2FSZ2fNRy3A03BMWhyQH6F2WJg71v3hlHU3oLWNWVZWciX1vpo7HqMNWiuMEGOqUBDc%2BWHxpPXDZu%2FG4MyaCXsrWlyjti3L4q7c9bBjlLHGIowh%2Bf9HETOeA6CjvKUt18saTLi%2Fhz46k%2B4z2sisJQjzWRKwimgMQ7lNnUfpeFDGhX1hyjdmXALQZf982qp7N28e5L1lBBP3SCBOOPKnlAYkG7BB%2FOfvy0fXbGoR0iWW6PWD0v5wKQZJuBMYNxN4yGEADLVsXiWaAJKs3kOziaNIz3m0Wg&X-Amz-Signature=dae5e43965e449813359cc2c30ea8708929fa731852c22044f234e121c680460&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QWSG4V%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCGncbyWrYeUXp17TbZ3XFbadl13RynH17yI8PfpTeZ%2BgIgRmXynyQMeoOJOleyp43dRliRRAdcU38iQKVv2GDgMtIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1Xta%2Bk%2BSTanLvwRSrcA%2Fp7KipWhonrga3QP1hnqUh%2BRbe%2FAVeBuKgyCereJBQKusDfQJs9e1En48LQATaK63u1zsBmFYfe13GaYTp5XG4XJm0HrgJNwRP0C0fz7A2O656JaTYt8AGik%2BFvWoKnMULUseAZDMZRrfuHkk3nS7UW3MJLGK0mPyVEq7yrulvpbM5Ser31lY%2FTyjKxdEwKAoDDYd6mtyS6%2B36bRzN0PjDLBNGVwBY6Ek649GQRJh8sRdp7iFiuUPSBQrZv7OMR2x53i7Siegc3gWXLHiV2HrCMdzX%2FRjMMLslK4DlYqIMHzDWoG1WIVa8ED2KCU5kDsG142MHp3OFVobBNBxTMoqbao13M%2FzJNHq9WbHlD16jj7h79fIczRt4WmOG%2FXq2H7Wlv5MEXmiAVYwGi%2FwvLCFgekGYROTWEcE7dCLs2p4i3YqCOa8QlGLqAU7pv95bSU1tRvdVVswfFmKQgJrnpJ0PivSeubICx8m9eamCnOg3iNQdAnZ3CY7rNaUK5MG%2BwROV1E8JsvM4FM0d8S0OmqmddRUXVt8VkpEFDzvH5MnvZYeLZ2Q9%2Ft5hyqSbbgJezaY1bkfCb%2FSZ2fNRy3A03BMWhyQH6F2WJg71v3hlHU3oLWNWVZWciX1vpo7HqMNWiuMEGOqUBDc%2BWHxpPXDZu%2FG4MyaCXsrWlyjti3L4q7c9bBjlLHGIowh%2Bf9HETOeA6CjvKUt18saTLi%2Fhz46k%2B4z2sisJQjzWRKwimgMQ7lNnUfpeFDGhX1hyjdmXALQZf982qp7N28e5L1lBBP3SCBOOPKnlAYkG7BB%2FOfvy0fXbGoR0iWW6PWD0v5wKQZJuBMYNxN4yGEADLVsXiWaAJKs3kOziaNIz3m0Wg&X-Amz-Signature=ff32139b88d6ad1c7b32fb3eff8033e52b54d107472f57b77204fddca8914e08&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QWSG4V%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCGncbyWrYeUXp17TbZ3XFbadl13RynH17yI8PfpTeZ%2BgIgRmXynyQMeoOJOleyp43dRliRRAdcU38iQKVv2GDgMtIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1Xta%2Bk%2BSTanLvwRSrcA%2Fp7KipWhonrga3QP1hnqUh%2BRbe%2FAVeBuKgyCereJBQKusDfQJs9e1En48LQATaK63u1zsBmFYfe13GaYTp5XG4XJm0HrgJNwRP0C0fz7A2O656JaTYt8AGik%2BFvWoKnMULUseAZDMZRrfuHkk3nS7UW3MJLGK0mPyVEq7yrulvpbM5Ser31lY%2FTyjKxdEwKAoDDYd6mtyS6%2B36bRzN0PjDLBNGVwBY6Ek649GQRJh8sRdp7iFiuUPSBQrZv7OMR2x53i7Siegc3gWXLHiV2HrCMdzX%2FRjMMLslK4DlYqIMHzDWoG1WIVa8ED2KCU5kDsG142MHp3OFVobBNBxTMoqbao13M%2FzJNHq9WbHlD16jj7h79fIczRt4WmOG%2FXq2H7Wlv5MEXmiAVYwGi%2FwvLCFgekGYROTWEcE7dCLs2p4i3YqCOa8QlGLqAU7pv95bSU1tRvdVVswfFmKQgJrnpJ0PivSeubICx8m9eamCnOg3iNQdAnZ3CY7rNaUK5MG%2BwROV1E8JsvM4FM0d8S0OmqmddRUXVt8VkpEFDzvH5MnvZYeLZ2Q9%2Ft5hyqSbbgJezaY1bkfCb%2FSZ2fNRy3A03BMWhyQH6F2WJg71v3hlHU3oLWNWVZWciX1vpo7HqMNWiuMEGOqUBDc%2BWHxpPXDZu%2FG4MyaCXsrWlyjti3L4q7c9bBjlLHGIowh%2Bf9HETOeA6CjvKUt18saTLi%2Fhz46k%2B4z2sisJQjzWRKwimgMQ7lNnUfpeFDGhX1hyjdmXALQZf982qp7N28e5L1lBBP3SCBOOPKnlAYkG7BB%2FOfvy0fXbGoR0iWW6PWD0v5wKQZJuBMYNxN4yGEADLVsXiWaAJKs3kOziaNIz3m0Wg&X-Amz-Signature=befbbfbcbbdc3f30e7cefdf98de7ad14284a3b4bc87497ad35a05775c80a7857&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QWSG4V%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCGncbyWrYeUXp17TbZ3XFbadl13RynH17yI8PfpTeZ%2BgIgRmXynyQMeoOJOleyp43dRliRRAdcU38iQKVv2GDgMtIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1Xta%2Bk%2BSTanLvwRSrcA%2Fp7KipWhonrga3QP1hnqUh%2BRbe%2FAVeBuKgyCereJBQKusDfQJs9e1En48LQATaK63u1zsBmFYfe13GaYTp5XG4XJm0HrgJNwRP0C0fz7A2O656JaTYt8AGik%2BFvWoKnMULUseAZDMZRrfuHkk3nS7UW3MJLGK0mPyVEq7yrulvpbM5Ser31lY%2FTyjKxdEwKAoDDYd6mtyS6%2B36bRzN0PjDLBNGVwBY6Ek649GQRJh8sRdp7iFiuUPSBQrZv7OMR2x53i7Siegc3gWXLHiV2HrCMdzX%2FRjMMLslK4DlYqIMHzDWoG1WIVa8ED2KCU5kDsG142MHp3OFVobBNBxTMoqbao13M%2FzJNHq9WbHlD16jj7h79fIczRt4WmOG%2FXq2H7Wlv5MEXmiAVYwGi%2FwvLCFgekGYROTWEcE7dCLs2p4i3YqCOa8QlGLqAU7pv95bSU1tRvdVVswfFmKQgJrnpJ0PivSeubICx8m9eamCnOg3iNQdAnZ3CY7rNaUK5MG%2BwROV1E8JsvM4FM0d8S0OmqmddRUXVt8VkpEFDzvH5MnvZYeLZ2Q9%2Ft5hyqSbbgJezaY1bkfCb%2FSZ2fNRy3A03BMWhyQH6F2WJg71v3hlHU3oLWNWVZWciX1vpo7HqMNWiuMEGOqUBDc%2BWHxpPXDZu%2FG4MyaCXsrWlyjti3L4q7c9bBjlLHGIowh%2Bf9HETOeA6CjvKUt18saTLi%2Fhz46k%2B4z2sisJQjzWRKwimgMQ7lNnUfpeFDGhX1hyjdmXALQZf982qp7N28e5L1lBBP3SCBOOPKnlAYkG7BB%2FOfvy0fXbGoR0iWW6PWD0v5wKQZJuBMYNxN4yGEADLVsXiWaAJKs3kOziaNIz3m0Wg&X-Amz-Signature=dd7a45615ee43a87dc484a0e3c6c91a68b57e4e263b5fd7a1ee283399f2bef4d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QWSG4V%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCGncbyWrYeUXp17TbZ3XFbadl13RynH17yI8PfpTeZ%2BgIgRmXynyQMeoOJOleyp43dRliRRAdcU38iQKVv2GDgMtIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1Xta%2Bk%2BSTanLvwRSrcA%2Fp7KipWhonrga3QP1hnqUh%2BRbe%2FAVeBuKgyCereJBQKusDfQJs9e1En48LQATaK63u1zsBmFYfe13GaYTp5XG4XJm0HrgJNwRP0C0fz7A2O656JaTYt8AGik%2BFvWoKnMULUseAZDMZRrfuHkk3nS7UW3MJLGK0mPyVEq7yrulvpbM5Ser31lY%2FTyjKxdEwKAoDDYd6mtyS6%2B36bRzN0PjDLBNGVwBY6Ek649GQRJh8sRdp7iFiuUPSBQrZv7OMR2x53i7Siegc3gWXLHiV2HrCMdzX%2FRjMMLslK4DlYqIMHzDWoG1WIVa8ED2KCU5kDsG142MHp3OFVobBNBxTMoqbao13M%2FzJNHq9WbHlD16jj7h79fIczRt4WmOG%2FXq2H7Wlv5MEXmiAVYwGi%2FwvLCFgekGYROTWEcE7dCLs2p4i3YqCOa8QlGLqAU7pv95bSU1tRvdVVswfFmKQgJrnpJ0PivSeubICx8m9eamCnOg3iNQdAnZ3CY7rNaUK5MG%2BwROV1E8JsvM4FM0d8S0OmqmddRUXVt8VkpEFDzvH5MnvZYeLZ2Q9%2Ft5hyqSbbgJezaY1bkfCb%2FSZ2fNRy3A03BMWhyQH6F2WJg71v3hlHU3oLWNWVZWciX1vpo7HqMNWiuMEGOqUBDc%2BWHxpPXDZu%2FG4MyaCXsrWlyjti3L4q7c9bBjlLHGIowh%2Bf9HETOeA6CjvKUt18saTLi%2Fhz46k%2B4z2sisJQjzWRKwimgMQ7lNnUfpeFDGhX1hyjdmXALQZf982qp7N28e5L1lBBP3SCBOOPKnlAYkG7BB%2FOfvy0fXbGoR0iWW6PWD0v5wKQZJuBMYNxN4yGEADLVsXiWaAJKs3kOziaNIz3m0Wg&X-Amz-Signature=89eca975284742f742343f952e5a3a8061a7c84c6ef428d1daee4fca27532562&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QWSG4V%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCGncbyWrYeUXp17TbZ3XFbadl13RynH17yI8PfpTeZ%2BgIgRmXynyQMeoOJOleyp43dRliRRAdcU38iQKVv2GDgMtIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1Xta%2Bk%2BSTanLvwRSrcA%2Fp7KipWhonrga3QP1hnqUh%2BRbe%2FAVeBuKgyCereJBQKusDfQJs9e1En48LQATaK63u1zsBmFYfe13GaYTp5XG4XJm0HrgJNwRP0C0fz7A2O656JaTYt8AGik%2BFvWoKnMULUseAZDMZRrfuHkk3nS7UW3MJLGK0mPyVEq7yrulvpbM5Ser31lY%2FTyjKxdEwKAoDDYd6mtyS6%2B36bRzN0PjDLBNGVwBY6Ek649GQRJh8sRdp7iFiuUPSBQrZv7OMR2x53i7Siegc3gWXLHiV2HrCMdzX%2FRjMMLslK4DlYqIMHzDWoG1WIVa8ED2KCU5kDsG142MHp3OFVobBNBxTMoqbao13M%2FzJNHq9WbHlD16jj7h79fIczRt4WmOG%2FXq2H7Wlv5MEXmiAVYwGi%2FwvLCFgekGYROTWEcE7dCLs2p4i3YqCOa8QlGLqAU7pv95bSU1tRvdVVswfFmKQgJrnpJ0PivSeubICx8m9eamCnOg3iNQdAnZ3CY7rNaUK5MG%2BwROV1E8JsvM4FM0d8S0OmqmddRUXVt8VkpEFDzvH5MnvZYeLZ2Q9%2Ft5hyqSbbgJezaY1bkfCb%2FSZ2fNRy3A03BMWhyQH6F2WJg71v3hlHU3oLWNWVZWciX1vpo7HqMNWiuMEGOqUBDc%2BWHxpPXDZu%2FG4MyaCXsrWlyjti3L4q7c9bBjlLHGIowh%2Bf9HETOeA6CjvKUt18saTLi%2Fhz46k%2B4z2sisJQjzWRKwimgMQ7lNnUfpeFDGhX1hyjdmXALQZf982qp7N28e5L1lBBP3SCBOOPKnlAYkG7BB%2FOfvy0fXbGoR0iWW6PWD0v5wKQZJuBMYNxN4yGEADLVsXiWaAJKs3kOziaNIz3m0Wg&X-Amz-Signature=3128d71c31289ff53231f05d6eb28560027f9faaa207030b5b6cd9e048872f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
