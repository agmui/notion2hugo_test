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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665GOCPKL%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdsEnUc5GpaI%2FM4ykh4d0GGh17wARFFUgR6QxGpFVX3QIgLD%2BRL79VG%2BtsOoY73N%2BsF3dg4ikVphN6KmdPDA7rSfwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcDKOfRr7lbEtO0HircA8%2BePP8jTcrS684GBH5%2Fp8M3A2A1mHKFuDLZKbk7r7MGJtzepHmzfAfJ3l4OYT%2B1FHgCBVEPQcF6GwShH0faxKRxLT3bJeyJFdyCWZg6tRdgo7E4A5s6HMhzavmpaix756BwsF59LiYI7mKaUa9nEqZrvmtuRuBY2GLthmj%2FP23AAhqS9s8Zi6nprMB3hjE0SUZDhANHwyDfY60tX0HtxaxgWw%2BF7DqyzE%2BjzbzS0xMqVbxyDC4izV%2BFzYEM2SXCimUhmdfUIdqo7N7XVZpq%2FiL4XQ%2B4Tz9uz9BwAdvdQ4%2FXJiJE887MBPpGKoS%2FG24%2BeBG%2BYT4exkSlbpe2m7Vk9G%2B5laqngSEDRMc%2FwZb%2FwqBWOzPbJESlnyjOIIYqXmrXq9rcxfPWmcpA2MdcdfQDTRB3MPqqLvGygELwXl1bi9t3ghOL7P0kpCKYlvzArynZ74jPBaP%2F%2FkxTfwsnXXD2QVQEVffYiUyhZjpkiuQ3s5mVogSDEhsM8QzjYErIjZutfLXN7zlGVkP%2BB5Vjz3XiK40mBY9p8o1%2Bz%2F5c09eMzq6v753i6rlbONUf7OiVE3E%2FPN9NZgn4Sti8L3GZ2AfRgznhHzrECTnrLTPWJELqDO8fGBYdHKR9Fy%2FZKI3yMLvemr0GOqUB7gkeusEttc1F92yqYRNRG0A75av328IzDrfJ5%2FmUtPU1i7eeNaIby6g%2FhGjCOHvkgb3pZYU8ORqYJyeTisolZmMwTaqD5i%2FbDIcHS8u3kwWrjshKn6eXCHHW7P9URO%2BsffC8o8SBacNVanopQ0fXUwZ4xM4rOFegDWFcqyyalGB1SNBrZIdhUeuU1MthXxJx%2FuIv8s9zZD8Zv%2BpNxVSzRpRHCtbr&X-Amz-Signature=9cdf18d6aa2b0f5c1360c03a8ce38425fcb3d7540a19492eaa98c5e6afb12a67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665GOCPKL%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdsEnUc5GpaI%2FM4ykh4d0GGh17wARFFUgR6QxGpFVX3QIgLD%2BRL79VG%2BtsOoY73N%2BsF3dg4ikVphN6KmdPDA7rSfwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcDKOfRr7lbEtO0HircA8%2BePP8jTcrS684GBH5%2Fp8M3A2A1mHKFuDLZKbk7r7MGJtzepHmzfAfJ3l4OYT%2B1FHgCBVEPQcF6GwShH0faxKRxLT3bJeyJFdyCWZg6tRdgo7E4A5s6HMhzavmpaix756BwsF59LiYI7mKaUa9nEqZrvmtuRuBY2GLthmj%2FP23AAhqS9s8Zi6nprMB3hjE0SUZDhANHwyDfY60tX0HtxaxgWw%2BF7DqyzE%2BjzbzS0xMqVbxyDC4izV%2BFzYEM2SXCimUhmdfUIdqo7N7XVZpq%2FiL4XQ%2B4Tz9uz9BwAdvdQ4%2FXJiJE887MBPpGKoS%2FG24%2BeBG%2BYT4exkSlbpe2m7Vk9G%2B5laqngSEDRMc%2FwZb%2FwqBWOzPbJESlnyjOIIYqXmrXq9rcxfPWmcpA2MdcdfQDTRB3MPqqLvGygELwXl1bi9t3ghOL7P0kpCKYlvzArynZ74jPBaP%2F%2FkxTfwsnXXD2QVQEVffYiUyhZjpkiuQ3s5mVogSDEhsM8QzjYErIjZutfLXN7zlGVkP%2BB5Vjz3XiK40mBY9p8o1%2Bz%2F5c09eMzq6v753i6rlbONUf7OiVE3E%2FPN9NZgn4Sti8L3GZ2AfRgznhHzrECTnrLTPWJELqDO8fGBYdHKR9Fy%2FZKI3yMLvemr0GOqUB7gkeusEttc1F92yqYRNRG0A75av328IzDrfJ5%2FmUtPU1i7eeNaIby6g%2FhGjCOHvkgb3pZYU8ORqYJyeTisolZmMwTaqD5i%2FbDIcHS8u3kwWrjshKn6eXCHHW7P9URO%2BsffC8o8SBacNVanopQ0fXUwZ4xM4rOFegDWFcqyyalGB1SNBrZIdhUeuU1MthXxJx%2FuIv8s9zZD8Zv%2BpNxVSzRpRHCtbr&X-Amz-Signature=0781f23b4e462d037e85be081f434f1727c8267ff57959e4cd7eb9fb323a7e06&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665GOCPKL%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdsEnUc5GpaI%2FM4ykh4d0GGh17wARFFUgR6QxGpFVX3QIgLD%2BRL79VG%2BtsOoY73N%2BsF3dg4ikVphN6KmdPDA7rSfwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcDKOfRr7lbEtO0HircA8%2BePP8jTcrS684GBH5%2Fp8M3A2A1mHKFuDLZKbk7r7MGJtzepHmzfAfJ3l4OYT%2B1FHgCBVEPQcF6GwShH0faxKRxLT3bJeyJFdyCWZg6tRdgo7E4A5s6HMhzavmpaix756BwsF59LiYI7mKaUa9nEqZrvmtuRuBY2GLthmj%2FP23AAhqS9s8Zi6nprMB3hjE0SUZDhANHwyDfY60tX0HtxaxgWw%2BF7DqyzE%2BjzbzS0xMqVbxyDC4izV%2BFzYEM2SXCimUhmdfUIdqo7N7XVZpq%2FiL4XQ%2B4Tz9uz9BwAdvdQ4%2FXJiJE887MBPpGKoS%2FG24%2BeBG%2BYT4exkSlbpe2m7Vk9G%2B5laqngSEDRMc%2FwZb%2FwqBWOzPbJESlnyjOIIYqXmrXq9rcxfPWmcpA2MdcdfQDTRB3MPqqLvGygELwXl1bi9t3ghOL7P0kpCKYlvzArynZ74jPBaP%2F%2FkxTfwsnXXD2QVQEVffYiUyhZjpkiuQ3s5mVogSDEhsM8QzjYErIjZutfLXN7zlGVkP%2BB5Vjz3XiK40mBY9p8o1%2Bz%2F5c09eMzq6v753i6rlbONUf7OiVE3E%2FPN9NZgn4Sti8L3GZ2AfRgznhHzrECTnrLTPWJELqDO8fGBYdHKR9Fy%2FZKI3yMLvemr0GOqUB7gkeusEttc1F92yqYRNRG0A75av328IzDrfJ5%2FmUtPU1i7eeNaIby6g%2FhGjCOHvkgb3pZYU8ORqYJyeTisolZmMwTaqD5i%2FbDIcHS8u3kwWrjshKn6eXCHHW7P9URO%2BsffC8o8SBacNVanopQ0fXUwZ4xM4rOFegDWFcqyyalGB1SNBrZIdhUeuU1MthXxJx%2FuIv8s9zZD8Zv%2BpNxVSzRpRHCtbr&X-Amz-Signature=0f08a2b0764ac2a873b817136d1ac46de665801b2e8a5b20cf3d44eda269af15&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665GOCPKL%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdsEnUc5GpaI%2FM4ykh4d0GGh17wARFFUgR6QxGpFVX3QIgLD%2BRL79VG%2BtsOoY73N%2BsF3dg4ikVphN6KmdPDA7rSfwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcDKOfRr7lbEtO0HircA8%2BePP8jTcrS684GBH5%2Fp8M3A2A1mHKFuDLZKbk7r7MGJtzepHmzfAfJ3l4OYT%2B1FHgCBVEPQcF6GwShH0faxKRxLT3bJeyJFdyCWZg6tRdgo7E4A5s6HMhzavmpaix756BwsF59LiYI7mKaUa9nEqZrvmtuRuBY2GLthmj%2FP23AAhqS9s8Zi6nprMB3hjE0SUZDhANHwyDfY60tX0HtxaxgWw%2BF7DqyzE%2BjzbzS0xMqVbxyDC4izV%2BFzYEM2SXCimUhmdfUIdqo7N7XVZpq%2FiL4XQ%2B4Tz9uz9BwAdvdQ4%2FXJiJE887MBPpGKoS%2FG24%2BeBG%2BYT4exkSlbpe2m7Vk9G%2B5laqngSEDRMc%2FwZb%2FwqBWOzPbJESlnyjOIIYqXmrXq9rcxfPWmcpA2MdcdfQDTRB3MPqqLvGygELwXl1bi9t3ghOL7P0kpCKYlvzArynZ74jPBaP%2F%2FkxTfwsnXXD2QVQEVffYiUyhZjpkiuQ3s5mVogSDEhsM8QzjYErIjZutfLXN7zlGVkP%2BB5Vjz3XiK40mBY9p8o1%2Bz%2F5c09eMzq6v753i6rlbONUf7OiVE3E%2FPN9NZgn4Sti8L3GZ2AfRgznhHzrECTnrLTPWJELqDO8fGBYdHKR9Fy%2FZKI3yMLvemr0GOqUB7gkeusEttc1F92yqYRNRG0A75av328IzDrfJ5%2FmUtPU1i7eeNaIby6g%2FhGjCOHvkgb3pZYU8ORqYJyeTisolZmMwTaqD5i%2FbDIcHS8u3kwWrjshKn6eXCHHW7P9URO%2BsffC8o8SBacNVanopQ0fXUwZ4xM4rOFegDWFcqyyalGB1SNBrZIdhUeuU1MthXxJx%2FuIv8s9zZD8Zv%2BpNxVSzRpRHCtbr&X-Amz-Signature=0715f4af71634e0cd27119482e9c8597dff4694545486067498f5809e23d8ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665GOCPKL%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdsEnUc5GpaI%2FM4ykh4d0GGh17wARFFUgR6QxGpFVX3QIgLD%2BRL79VG%2BtsOoY73N%2BsF3dg4ikVphN6KmdPDA7rSfwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcDKOfRr7lbEtO0HircA8%2BePP8jTcrS684GBH5%2Fp8M3A2A1mHKFuDLZKbk7r7MGJtzepHmzfAfJ3l4OYT%2B1FHgCBVEPQcF6GwShH0faxKRxLT3bJeyJFdyCWZg6tRdgo7E4A5s6HMhzavmpaix756BwsF59LiYI7mKaUa9nEqZrvmtuRuBY2GLthmj%2FP23AAhqS9s8Zi6nprMB3hjE0SUZDhANHwyDfY60tX0HtxaxgWw%2BF7DqyzE%2BjzbzS0xMqVbxyDC4izV%2BFzYEM2SXCimUhmdfUIdqo7N7XVZpq%2FiL4XQ%2B4Tz9uz9BwAdvdQ4%2FXJiJE887MBPpGKoS%2FG24%2BeBG%2BYT4exkSlbpe2m7Vk9G%2B5laqngSEDRMc%2FwZb%2FwqBWOzPbJESlnyjOIIYqXmrXq9rcxfPWmcpA2MdcdfQDTRB3MPqqLvGygELwXl1bi9t3ghOL7P0kpCKYlvzArynZ74jPBaP%2F%2FkxTfwsnXXD2QVQEVffYiUyhZjpkiuQ3s5mVogSDEhsM8QzjYErIjZutfLXN7zlGVkP%2BB5Vjz3XiK40mBY9p8o1%2Bz%2F5c09eMzq6v753i6rlbONUf7OiVE3E%2FPN9NZgn4Sti8L3GZ2AfRgznhHzrECTnrLTPWJELqDO8fGBYdHKR9Fy%2FZKI3yMLvemr0GOqUB7gkeusEttc1F92yqYRNRG0A75av328IzDrfJ5%2FmUtPU1i7eeNaIby6g%2FhGjCOHvkgb3pZYU8ORqYJyeTisolZmMwTaqD5i%2FbDIcHS8u3kwWrjshKn6eXCHHW7P9URO%2BsffC8o8SBacNVanopQ0fXUwZ4xM4rOFegDWFcqyyalGB1SNBrZIdhUeuU1MthXxJx%2FuIv8s9zZD8Zv%2BpNxVSzRpRHCtbr&X-Amz-Signature=02b7d3a39acc05673e1d168e41af786fd7f5fb4afd3cfb075638aee518ca7bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665GOCPKL%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdsEnUc5GpaI%2FM4ykh4d0GGh17wARFFUgR6QxGpFVX3QIgLD%2BRL79VG%2BtsOoY73N%2BsF3dg4ikVphN6KmdPDA7rSfwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcDKOfRr7lbEtO0HircA8%2BePP8jTcrS684GBH5%2Fp8M3A2A1mHKFuDLZKbk7r7MGJtzepHmzfAfJ3l4OYT%2B1FHgCBVEPQcF6GwShH0faxKRxLT3bJeyJFdyCWZg6tRdgo7E4A5s6HMhzavmpaix756BwsF59LiYI7mKaUa9nEqZrvmtuRuBY2GLthmj%2FP23AAhqS9s8Zi6nprMB3hjE0SUZDhANHwyDfY60tX0HtxaxgWw%2BF7DqyzE%2BjzbzS0xMqVbxyDC4izV%2BFzYEM2SXCimUhmdfUIdqo7N7XVZpq%2FiL4XQ%2B4Tz9uz9BwAdvdQ4%2FXJiJE887MBPpGKoS%2FG24%2BeBG%2BYT4exkSlbpe2m7Vk9G%2B5laqngSEDRMc%2FwZb%2FwqBWOzPbJESlnyjOIIYqXmrXq9rcxfPWmcpA2MdcdfQDTRB3MPqqLvGygELwXl1bi9t3ghOL7P0kpCKYlvzArynZ74jPBaP%2F%2FkxTfwsnXXD2QVQEVffYiUyhZjpkiuQ3s5mVogSDEhsM8QzjYErIjZutfLXN7zlGVkP%2BB5Vjz3XiK40mBY9p8o1%2Bz%2F5c09eMzq6v753i6rlbONUf7OiVE3E%2FPN9NZgn4Sti8L3GZ2AfRgznhHzrECTnrLTPWJELqDO8fGBYdHKR9Fy%2FZKI3yMLvemr0GOqUB7gkeusEttc1F92yqYRNRG0A75av328IzDrfJ5%2FmUtPU1i7eeNaIby6g%2FhGjCOHvkgb3pZYU8ORqYJyeTisolZmMwTaqD5i%2FbDIcHS8u3kwWrjshKn6eXCHHW7P9URO%2BsffC8o8SBacNVanopQ0fXUwZ4xM4rOFegDWFcqyyalGB1SNBrZIdhUeuU1MthXxJx%2FuIv8s9zZD8Zv%2BpNxVSzRpRHCtbr&X-Amz-Signature=d063206159ffe4a5f9f29cbfebb682aec78946879e1e3163be968be846aecbc2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665GOCPKL%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdsEnUc5GpaI%2FM4ykh4d0GGh17wARFFUgR6QxGpFVX3QIgLD%2BRL79VG%2BtsOoY73N%2BsF3dg4ikVphN6KmdPDA7rSfwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcDKOfRr7lbEtO0HircA8%2BePP8jTcrS684GBH5%2Fp8M3A2A1mHKFuDLZKbk7r7MGJtzepHmzfAfJ3l4OYT%2B1FHgCBVEPQcF6GwShH0faxKRxLT3bJeyJFdyCWZg6tRdgo7E4A5s6HMhzavmpaix756BwsF59LiYI7mKaUa9nEqZrvmtuRuBY2GLthmj%2FP23AAhqS9s8Zi6nprMB3hjE0SUZDhANHwyDfY60tX0HtxaxgWw%2BF7DqyzE%2BjzbzS0xMqVbxyDC4izV%2BFzYEM2SXCimUhmdfUIdqo7N7XVZpq%2FiL4XQ%2B4Tz9uz9BwAdvdQ4%2FXJiJE887MBPpGKoS%2FG24%2BeBG%2BYT4exkSlbpe2m7Vk9G%2B5laqngSEDRMc%2FwZb%2FwqBWOzPbJESlnyjOIIYqXmrXq9rcxfPWmcpA2MdcdfQDTRB3MPqqLvGygELwXl1bi9t3ghOL7P0kpCKYlvzArynZ74jPBaP%2F%2FkxTfwsnXXD2QVQEVffYiUyhZjpkiuQ3s5mVogSDEhsM8QzjYErIjZutfLXN7zlGVkP%2BB5Vjz3XiK40mBY9p8o1%2Bz%2F5c09eMzq6v753i6rlbONUf7OiVE3E%2FPN9NZgn4Sti8L3GZ2AfRgznhHzrECTnrLTPWJELqDO8fGBYdHKR9Fy%2FZKI3yMLvemr0GOqUB7gkeusEttc1F92yqYRNRG0A75av328IzDrfJ5%2FmUtPU1i7eeNaIby6g%2FhGjCOHvkgb3pZYU8ORqYJyeTisolZmMwTaqD5i%2FbDIcHS8u3kwWrjshKn6eXCHHW7P9URO%2BsffC8o8SBacNVanopQ0fXUwZ4xM4rOFegDWFcqyyalGB1SNBrZIdhUeuU1MthXxJx%2FuIv8s9zZD8Zv%2BpNxVSzRpRHCtbr&X-Amz-Signature=4bee593b73a68437f99a845fbd910c9eba51b7b3a3159a33a25686a7ecc19020&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
