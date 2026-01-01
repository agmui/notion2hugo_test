---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBSSIQCF%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBI4So6hwdLe%2BkcN7SWWPNacYI7kV%2BKuy5w0bXWAw4sLAiEAmyZVyRWgapoUu3B7ISjvaHJDtKpVffSpGWxJsI9SrVoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BjuuTTIYPLtmkK4yrcA9AxOKeimyToC%2BtUQMnBftXTgLFgM4EmQb7wq%2BMMqz%2FxZNpm2bLK4a4K53cUoGXJzUWUhy0hpDMxyEWHfCIBvBZ9IaGGQhjLSW7VRksu2xOp6ANg%2BG8fvSjpzreTeVnl29NxlC42OZgySU2h9wj1rGAyme5Y9JrgCojIwIFP9cs8LdoJGKIDFUEV6pRp46FQjWxP5RacvUOOHEiqHc45yY2pEDa5DB%2FJ1EbNVBWDr%2F6KV%2FpEka1wZbW%2BCbyW55eiH0sLKEGD88iIH42vRLTxZfk3jrpvCv81%2F8uzclMMhD%2BPSUG0A45HI8indzVgzYebYQ8yWWnw0TmzwKKQ2Fs0vBH1KBb2KUCNCUmocB2%2FeW7nBLpuqIwgsk3KY2tDOtgzTH5a31BOFZX2tSr28FcAFV97eqzpSxc%2FERY3tXw1j%2B%2B8tqJYFA%2BayxT5bUfxLfYpHv5bew8IPz395QYh%2FGNAEckM5R5Jd4tofiDLO9mCglMjPbsu4x%2FY38wSzySEDnFRrS8JSCX2zY%2F%2B3M50nI8P2Lr%2BJYgBv3QbAH32WxttprxpjQ76vEO5lOZvSeL2qRYxkU%2BO1lnCcqoFgUBoeDOyQm45XppdlOIGzRHOAP3j%2B2dRsMA5wyyqdGmKtiqbML6c18oGOqUBizNqSmufvkPR14kpFZHclFz04qexiiAtpSS8C5KKdYKqSPmqmnv5iBtmP%2F09lUZipmNuTDXIyZ4kIkI8qob16uITJo%2BCob3md9CfFCsQv%2F5GNIooKm7rjBnZYY%2BaynddNk0dBQyvkCTzJhKF5NZH%2FvXVoqrWugtEW78YoNt8qwX9My7GvbPkqngB3pW1r2y6u%2BchjgdFlc9VA3uDPr6GKTf310He&X-Amz-Signature=f78d74bd6956ff15d268ba6e4c603642697289f7c0284150a43c6a4920b483a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBSSIQCF%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBI4So6hwdLe%2BkcN7SWWPNacYI7kV%2BKuy5w0bXWAw4sLAiEAmyZVyRWgapoUu3B7ISjvaHJDtKpVffSpGWxJsI9SrVoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BjuuTTIYPLtmkK4yrcA9AxOKeimyToC%2BtUQMnBftXTgLFgM4EmQb7wq%2BMMqz%2FxZNpm2bLK4a4K53cUoGXJzUWUhy0hpDMxyEWHfCIBvBZ9IaGGQhjLSW7VRksu2xOp6ANg%2BG8fvSjpzreTeVnl29NxlC42OZgySU2h9wj1rGAyme5Y9JrgCojIwIFP9cs8LdoJGKIDFUEV6pRp46FQjWxP5RacvUOOHEiqHc45yY2pEDa5DB%2FJ1EbNVBWDr%2F6KV%2FpEka1wZbW%2BCbyW55eiH0sLKEGD88iIH42vRLTxZfk3jrpvCv81%2F8uzclMMhD%2BPSUG0A45HI8indzVgzYebYQ8yWWnw0TmzwKKQ2Fs0vBH1KBb2KUCNCUmocB2%2FeW7nBLpuqIwgsk3KY2tDOtgzTH5a31BOFZX2tSr28FcAFV97eqzpSxc%2FERY3tXw1j%2B%2B8tqJYFA%2BayxT5bUfxLfYpHv5bew8IPz395QYh%2FGNAEckM5R5Jd4tofiDLO9mCglMjPbsu4x%2FY38wSzySEDnFRrS8JSCX2zY%2F%2B3M50nI8P2Lr%2BJYgBv3QbAH32WxttprxpjQ76vEO5lOZvSeL2qRYxkU%2BO1lnCcqoFgUBoeDOyQm45XppdlOIGzRHOAP3j%2B2dRsMA5wyyqdGmKtiqbML6c18oGOqUBizNqSmufvkPR14kpFZHclFz04qexiiAtpSS8C5KKdYKqSPmqmnv5iBtmP%2F09lUZipmNuTDXIyZ4kIkI8qob16uITJo%2BCob3md9CfFCsQv%2F5GNIooKm7rjBnZYY%2BaynddNk0dBQyvkCTzJhKF5NZH%2FvXVoqrWugtEW78YoNt8qwX9My7GvbPkqngB3pW1r2y6u%2BchjgdFlc9VA3uDPr6GKTf310He&X-Amz-Signature=1e62850bba1f233ae59baa45232cc37eb920a0c531b89301f3bde9ea6186b6d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBSSIQCF%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBI4So6hwdLe%2BkcN7SWWPNacYI7kV%2BKuy5w0bXWAw4sLAiEAmyZVyRWgapoUu3B7ISjvaHJDtKpVffSpGWxJsI9SrVoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BjuuTTIYPLtmkK4yrcA9AxOKeimyToC%2BtUQMnBftXTgLFgM4EmQb7wq%2BMMqz%2FxZNpm2bLK4a4K53cUoGXJzUWUhy0hpDMxyEWHfCIBvBZ9IaGGQhjLSW7VRksu2xOp6ANg%2BG8fvSjpzreTeVnl29NxlC42OZgySU2h9wj1rGAyme5Y9JrgCojIwIFP9cs8LdoJGKIDFUEV6pRp46FQjWxP5RacvUOOHEiqHc45yY2pEDa5DB%2FJ1EbNVBWDr%2F6KV%2FpEka1wZbW%2BCbyW55eiH0sLKEGD88iIH42vRLTxZfk3jrpvCv81%2F8uzclMMhD%2BPSUG0A45HI8indzVgzYebYQ8yWWnw0TmzwKKQ2Fs0vBH1KBb2KUCNCUmocB2%2FeW7nBLpuqIwgsk3KY2tDOtgzTH5a31BOFZX2tSr28FcAFV97eqzpSxc%2FERY3tXw1j%2B%2B8tqJYFA%2BayxT5bUfxLfYpHv5bew8IPz395QYh%2FGNAEckM5R5Jd4tofiDLO9mCglMjPbsu4x%2FY38wSzySEDnFRrS8JSCX2zY%2F%2B3M50nI8P2Lr%2BJYgBv3QbAH32WxttprxpjQ76vEO5lOZvSeL2qRYxkU%2BO1lnCcqoFgUBoeDOyQm45XppdlOIGzRHOAP3j%2B2dRsMA5wyyqdGmKtiqbML6c18oGOqUBizNqSmufvkPR14kpFZHclFz04qexiiAtpSS8C5KKdYKqSPmqmnv5iBtmP%2F09lUZipmNuTDXIyZ4kIkI8qob16uITJo%2BCob3md9CfFCsQv%2F5GNIooKm7rjBnZYY%2BaynddNk0dBQyvkCTzJhKF5NZH%2FvXVoqrWugtEW78YoNt8qwX9My7GvbPkqngB3pW1r2y6u%2BchjgdFlc9VA3uDPr6GKTf310He&X-Amz-Signature=aaded88ea196147158c5abb49af47bd506a2e476a21fb4c03546fca0a8d7b1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBSSIQCF%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBI4So6hwdLe%2BkcN7SWWPNacYI7kV%2BKuy5w0bXWAw4sLAiEAmyZVyRWgapoUu3B7ISjvaHJDtKpVffSpGWxJsI9SrVoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BjuuTTIYPLtmkK4yrcA9AxOKeimyToC%2BtUQMnBftXTgLFgM4EmQb7wq%2BMMqz%2FxZNpm2bLK4a4K53cUoGXJzUWUhy0hpDMxyEWHfCIBvBZ9IaGGQhjLSW7VRksu2xOp6ANg%2BG8fvSjpzreTeVnl29NxlC42OZgySU2h9wj1rGAyme5Y9JrgCojIwIFP9cs8LdoJGKIDFUEV6pRp46FQjWxP5RacvUOOHEiqHc45yY2pEDa5DB%2FJ1EbNVBWDr%2F6KV%2FpEka1wZbW%2BCbyW55eiH0sLKEGD88iIH42vRLTxZfk3jrpvCv81%2F8uzclMMhD%2BPSUG0A45HI8indzVgzYebYQ8yWWnw0TmzwKKQ2Fs0vBH1KBb2KUCNCUmocB2%2FeW7nBLpuqIwgsk3KY2tDOtgzTH5a31BOFZX2tSr28FcAFV97eqzpSxc%2FERY3tXw1j%2B%2B8tqJYFA%2BayxT5bUfxLfYpHv5bew8IPz395QYh%2FGNAEckM5R5Jd4tofiDLO9mCglMjPbsu4x%2FY38wSzySEDnFRrS8JSCX2zY%2F%2B3M50nI8P2Lr%2BJYgBv3QbAH32WxttprxpjQ76vEO5lOZvSeL2qRYxkU%2BO1lnCcqoFgUBoeDOyQm45XppdlOIGzRHOAP3j%2B2dRsMA5wyyqdGmKtiqbML6c18oGOqUBizNqSmufvkPR14kpFZHclFz04qexiiAtpSS8C5KKdYKqSPmqmnv5iBtmP%2F09lUZipmNuTDXIyZ4kIkI8qob16uITJo%2BCob3md9CfFCsQv%2F5GNIooKm7rjBnZYY%2BaynddNk0dBQyvkCTzJhKF5NZH%2FvXVoqrWugtEW78YoNt8qwX9My7GvbPkqngB3pW1r2y6u%2BchjgdFlc9VA3uDPr6GKTf310He&X-Amz-Signature=81fbe9959453d732bb67d19a254533221a71f2fbddc7570d64079183a43890f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBSSIQCF%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBI4So6hwdLe%2BkcN7SWWPNacYI7kV%2BKuy5w0bXWAw4sLAiEAmyZVyRWgapoUu3B7ISjvaHJDtKpVffSpGWxJsI9SrVoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BjuuTTIYPLtmkK4yrcA9AxOKeimyToC%2BtUQMnBftXTgLFgM4EmQb7wq%2BMMqz%2FxZNpm2bLK4a4K53cUoGXJzUWUhy0hpDMxyEWHfCIBvBZ9IaGGQhjLSW7VRksu2xOp6ANg%2BG8fvSjpzreTeVnl29NxlC42OZgySU2h9wj1rGAyme5Y9JrgCojIwIFP9cs8LdoJGKIDFUEV6pRp46FQjWxP5RacvUOOHEiqHc45yY2pEDa5DB%2FJ1EbNVBWDr%2F6KV%2FpEka1wZbW%2BCbyW55eiH0sLKEGD88iIH42vRLTxZfk3jrpvCv81%2F8uzclMMhD%2BPSUG0A45HI8indzVgzYebYQ8yWWnw0TmzwKKQ2Fs0vBH1KBb2KUCNCUmocB2%2FeW7nBLpuqIwgsk3KY2tDOtgzTH5a31BOFZX2tSr28FcAFV97eqzpSxc%2FERY3tXw1j%2B%2B8tqJYFA%2BayxT5bUfxLfYpHv5bew8IPz395QYh%2FGNAEckM5R5Jd4tofiDLO9mCglMjPbsu4x%2FY38wSzySEDnFRrS8JSCX2zY%2F%2B3M50nI8P2Lr%2BJYgBv3QbAH32WxttprxpjQ76vEO5lOZvSeL2qRYxkU%2BO1lnCcqoFgUBoeDOyQm45XppdlOIGzRHOAP3j%2B2dRsMA5wyyqdGmKtiqbML6c18oGOqUBizNqSmufvkPR14kpFZHclFz04qexiiAtpSS8C5KKdYKqSPmqmnv5iBtmP%2F09lUZipmNuTDXIyZ4kIkI8qob16uITJo%2BCob3md9CfFCsQv%2F5GNIooKm7rjBnZYY%2BaynddNk0dBQyvkCTzJhKF5NZH%2FvXVoqrWugtEW78YoNt8qwX9My7GvbPkqngB3pW1r2y6u%2BchjgdFlc9VA3uDPr6GKTf310He&X-Amz-Signature=5035195ce59d49e1ca6a6881c765b518ce9b8b024df3d0cffbf9bd28bbd32219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBSSIQCF%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBI4So6hwdLe%2BkcN7SWWPNacYI7kV%2BKuy5w0bXWAw4sLAiEAmyZVyRWgapoUu3B7ISjvaHJDtKpVffSpGWxJsI9SrVoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BjuuTTIYPLtmkK4yrcA9AxOKeimyToC%2BtUQMnBftXTgLFgM4EmQb7wq%2BMMqz%2FxZNpm2bLK4a4K53cUoGXJzUWUhy0hpDMxyEWHfCIBvBZ9IaGGQhjLSW7VRksu2xOp6ANg%2BG8fvSjpzreTeVnl29NxlC42OZgySU2h9wj1rGAyme5Y9JrgCojIwIFP9cs8LdoJGKIDFUEV6pRp46FQjWxP5RacvUOOHEiqHc45yY2pEDa5DB%2FJ1EbNVBWDr%2F6KV%2FpEka1wZbW%2BCbyW55eiH0sLKEGD88iIH42vRLTxZfk3jrpvCv81%2F8uzclMMhD%2BPSUG0A45HI8indzVgzYebYQ8yWWnw0TmzwKKQ2Fs0vBH1KBb2KUCNCUmocB2%2FeW7nBLpuqIwgsk3KY2tDOtgzTH5a31BOFZX2tSr28FcAFV97eqzpSxc%2FERY3tXw1j%2B%2B8tqJYFA%2BayxT5bUfxLfYpHv5bew8IPz395QYh%2FGNAEckM5R5Jd4tofiDLO9mCglMjPbsu4x%2FY38wSzySEDnFRrS8JSCX2zY%2F%2B3M50nI8P2Lr%2BJYgBv3QbAH32WxttprxpjQ76vEO5lOZvSeL2qRYxkU%2BO1lnCcqoFgUBoeDOyQm45XppdlOIGzRHOAP3j%2B2dRsMA5wyyqdGmKtiqbML6c18oGOqUBizNqSmufvkPR14kpFZHclFz04qexiiAtpSS8C5KKdYKqSPmqmnv5iBtmP%2F09lUZipmNuTDXIyZ4kIkI8qob16uITJo%2BCob3md9CfFCsQv%2F5GNIooKm7rjBnZYY%2BaynddNk0dBQyvkCTzJhKF5NZH%2FvXVoqrWugtEW78YoNt8qwX9My7GvbPkqngB3pW1r2y6u%2BchjgdFlc9VA3uDPr6GKTf310He&X-Amz-Signature=83e04cbf323ce3ae0893ef94ed3ffd690d39a6b0f24348a6e69d671c97db55ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBSSIQCF%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBI4So6hwdLe%2BkcN7SWWPNacYI7kV%2BKuy5w0bXWAw4sLAiEAmyZVyRWgapoUu3B7ISjvaHJDtKpVffSpGWxJsI9SrVoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BjuuTTIYPLtmkK4yrcA9AxOKeimyToC%2BtUQMnBftXTgLFgM4EmQb7wq%2BMMqz%2FxZNpm2bLK4a4K53cUoGXJzUWUhy0hpDMxyEWHfCIBvBZ9IaGGQhjLSW7VRksu2xOp6ANg%2BG8fvSjpzreTeVnl29NxlC42OZgySU2h9wj1rGAyme5Y9JrgCojIwIFP9cs8LdoJGKIDFUEV6pRp46FQjWxP5RacvUOOHEiqHc45yY2pEDa5DB%2FJ1EbNVBWDr%2F6KV%2FpEka1wZbW%2BCbyW55eiH0sLKEGD88iIH42vRLTxZfk3jrpvCv81%2F8uzclMMhD%2BPSUG0A45HI8indzVgzYebYQ8yWWnw0TmzwKKQ2Fs0vBH1KBb2KUCNCUmocB2%2FeW7nBLpuqIwgsk3KY2tDOtgzTH5a31BOFZX2tSr28FcAFV97eqzpSxc%2FERY3tXw1j%2B%2B8tqJYFA%2BayxT5bUfxLfYpHv5bew8IPz395QYh%2FGNAEckM5R5Jd4tofiDLO9mCglMjPbsu4x%2FY38wSzySEDnFRrS8JSCX2zY%2F%2B3M50nI8P2Lr%2BJYgBv3QbAH32WxttprxpjQ76vEO5lOZvSeL2qRYxkU%2BO1lnCcqoFgUBoeDOyQm45XppdlOIGzRHOAP3j%2B2dRsMA5wyyqdGmKtiqbML6c18oGOqUBizNqSmufvkPR14kpFZHclFz04qexiiAtpSS8C5KKdYKqSPmqmnv5iBtmP%2F09lUZipmNuTDXIyZ4kIkI8qob16uITJo%2BCob3md9CfFCsQv%2F5GNIooKm7rjBnZYY%2BaynddNk0dBQyvkCTzJhKF5NZH%2FvXVoqrWugtEW78YoNt8qwX9My7GvbPkqngB3pW1r2y6u%2BchjgdFlc9VA3uDPr6GKTf310He&X-Amz-Signature=d77a666923b23d3fdb949495378613c93f7c025fa8ca649c931806e29f775cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
