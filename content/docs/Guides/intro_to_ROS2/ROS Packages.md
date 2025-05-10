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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDTBIGY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGVaKpE9BI8SKungPnqiB4i5a7yBOtR%2BAr2rqrdg0kYEAiEAgUbrKtKRZkcHlutpQTo8UhvXnh6DakjUgNGlb%2F2UyVUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhxkQ7ZuSoTdSWsMSrcA%2B8nNxM%2F5pjgyO9edqr2%2Bd2ZGLyPRHYZAgzQpr0G%2FYfAwoLP19qKsQkJY1ZXwxOUVXWEhV5VqFYFZiwX86VNrLAput9hgF619ki9fIM%2F0pED%2BidnV3Qk6UuSXH5GuyqHIzqu8REEdCyrfQ2XsHExrhf9whkytyL8fiZjKBTSJsBROdlIY4olD1RxynolIKACzlKYnnkyLHKx4WszawHNrE643Qkp0D1vqe0o%2Bf5lHFOxe7XoE7veHnDlQ39gYZTt%2FWGS0LCLV6pU%2BYp4RglG0xGO9iG4YLqaiJEiy2LaiOWDBBWD18%2BLStXzidnmgnK5v3ExKmf2K3csb%2B4n0GMfckyY6pxFgRPdWsU9pPkRlQERC2Xj8FvyuwNfqJEk1Pp9zsYNv1QlkmasiR%2BbRLh1VwdGZXM96UIszmT8mqk90YWB0QYGs%2F39zgsTZSJzwPNjDbgLiLIU1jEz4XTgF0VUrobBgTJzcrSiCooqYxw9g5jsZ5Gy3vDAGO1iSGN0GgWY%2FowkRNkIz1ljfGrVHEIu9Z5orAS8n73FlR2i8Eg4npfW7%2FGV6DlEasJ5BvXhu4asHLV1WAqQk3yXFWxv1BNv9KQRuqU%2F%2B%2FWH1ikXMfCNT3VGu%2BIyWmgWJ5J%2FY4JQMNW6%2FsAGOqUB5dB2WmafzvmcW3zXL94HM2BoWr2%2BEBbhqpClt3He0wIzXSaZdS%2FAhpC69vxCi1CXjVX8rSEm%2FkCcHWgaO55KYSkfPrgd8TClO%2BcN%2F7MzRuP%2FWv8zayw0TsFOT1oBLmI%2FSaa48WBJokmfUva3ssbNBy%2FaizopxZEiPn3osQyhIJGaW2sGFnFoc693JdlN4fMxxrgFpjsf2htytCpbTP6WgLKOitoS&X-Amz-Signature=9c76cd64ad49e9d00e627ec23d0516e584a1e83d51d3d983048dfaa002024cad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDTBIGY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGVaKpE9BI8SKungPnqiB4i5a7yBOtR%2BAr2rqrdg0kYEAiEAgUbrKtKRZkcHlutpQTo8UhvXnh6DakjUgNGlb%2F2UyVUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhxkQ7ZuSoTdSWsMSrcA%2B8nNxM%2F5pjgyO9edqr2%2Bd2ZGLyPRHYZAgzQpr0G%2FYfAwoLP19qKsQkJY1ZXwxOUVXWEhV5VqFYFZiwX86VNrLAput9hgF619ki9fIM%2F0pED%2BidnV3Qk6UuSXH5GuyqHIzqu8REEdCyrfQ2XsHExrhf9whkytyL8fiZjKBTSJsBROdlIY4olD1RxynolIKACzlKYnnkyLHKx4WszawHNrE643Qkp0D1vqe0o%2Bf5lHFOxe7XoE7veHnDlQ39gYZTt%2FWGS0LCLV6pU%2BYp4RglG0xGO9iG4YLqaiJEiy2LaiOWDBBWD18%2BLStXzidnmgnK5v3ExKmf2K3csb%2B4n0GMfckyY6pxFgRPdWsU9pPkRlQERC2Xj8FvyuwNfqJEk1Pp9zsYNv1QlkmasiR%2BbRLh1VwdGZXM96UIszmT8mqk90YWB0QYGs%2F39zgsTZSJzwPNjDbgLiLIU1jEz4XTgF0VUrobBgTJzcrSiCooqYxw9g5jsZ5Gy3vDAGO1iSGN0GgWY%2FowkRNkIz1ljfGrVHEIu9Z5orAS8n73FlR2i8Eg4npfW7%2FGV6DlEasJ5BvXhu4asHLV1WAqQk3yXFWxv1BNv9KQRuqU%2F%2B%2FWH1ikXMfCNT3VGu%2BIyWmgWJ5J%2FY4JQMNW6%2FsAGOqUB5dB2WmafzvmcW3zXL94HM2BoWr2%2BEBbhqpClt3He0wIzXSaZdS%2FAhpC69vxCi1CXjVX8rSEm%2FkCcHWgaO55KYSkfPrgd8TClO%2BcN%2F7MzRuP%2FWv8zayw0TsFOT1oBLmI%2FSaa48WBJokmfUva3ssbNBy%2FaizopxZEiPn3osQyhIJGaW2sGFnFoc693JdlN4fMxxrgFpjsf2htytCpbTP6WgLKOitoS&X-Amz-Signature=f8d7c0974767e5c201e0c9c08985244ab54872885e53eb5318932976ee3a9f70&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDTBIGY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGVaKpE9BI8SKungPnqiB4i5a7yBOtR%2BAr2rqrdg0kYEAiEAgUbrKtKRZkcHlutpQTo8UhvXnh6DakjUgNGlb%2F2UyVUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhxkQ7ZuSoTdSWsMSrcA%2B8nNxM%2F5pjgyO9edqr2%2Bd2ZGLyPRHYZAgzQpr0G%2FYfAwoLP19qKsQkJY1ZXwxOUVXWEhV5VqFYFZiwX86VNrLAput9hgF619ki9fIM%2F0pED%2BidnV3Qk6UuSXH5GuyqHIzqu8REEdCyrfQ2XsHExrhf9whkytyL8fiZjKBTSJsBROdlIY4olD1RxynolIKACzlKYnnkyLHKx4WszawHNrE643Qkp0D1vqe0o%2Bf5lHFOxe7XoE7veHnDlQ39gYZTt%2FWGS0LCLV6pU%2BYp4RglG0xGO9iG4YLqaiJEiy2LaiOWDBBWD18%2BLStXzidnmgnK5v3ExKmf2K3csb%2B4n0GMfckyY6pxFgRPdWsU9pPkRlQERC2Xj8FvyuwNfqJEk1Pp9zsYNv1QlkmasiR%2BbRLh1VwdGZXM96UIszmT8mqk90YWB0QYGs%2F39zgsTZSJzwPNjDbgLiLIU1jEz4XTgF0VUrobBgTJzcrSiCooqYxw9g5jsZ5Gy3vDAGO1iSGN0GgWY%2FowkRNkIz1ljfGrVHEIu9Z5orAS8n73FlR2i8Eg4npfW7%2FGV6DlEasJ5BvXhu4asHLV1WAqQk3yXFWxv1BNv9KQRuqU%2F%2B%2FWH1ikXMfCNT3VGu%2BIyWmgWJ5J%2FY4JQMNW6%2FsAGOqUB5dB2WmafzvmcW3zXL94HM2BoWr2%2BEBbhqpClt3He0wIzXSaZdS%2FAhpC69vxCi1CXjVX8rSEm%2FkCcHWgaO55KYSkfPrgd8TClO%2BcN%2F7MzRuP%2FWv8zayw0TsFOT1oBLmI%2FSaa48WBJokmfUva3ssbNBy%2FaizopxZEiPn3osQyhIJGaW2sGFnFoc693JdlN4fMxxrgFpjsf2htytCpbTP6WgLKOitoS&X-Amz-Signature=ea2df265b60b815fee8039ca364a58fd69f443623ec5ef36ca18d4897b9bd38d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDTBIGY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGVaKpE9BI8SKungPnqiB4i5a7yBOtR%2BAr2rqrdg0kYEAiEAgUbrKtKRZkcHlutpQTo8UhvXnh6DakjUgNGlb%2F2UyVUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhxkQ7ZuSoTdSWsMSrcA%2B8nNxM%2F5pjgyO9edqr2%2Bd2ZGLyPRHYZAgzQpr0G%2FYfAwoLP19qKsQkJY1ZXwxOUVXWEhV5VqFYFZiwX86VNrLAput9hgF619ki9fIM%2F0pED%2BidnV3Qk6UuSXH5GuyqHIzqu8REEdCyrfQ2XsHExrhf9whkytyL8fiZjKBTSJsBROdlIY4olD1RxynolIKACzlKYnnkyLHKx4WszawHNrE643Qkp0D1vqe0o%2Bf5lHFOxe7XoE7veHnDlQ39gYZTt%2FWGS0LCLV6pU%2BYp4RglG0xGO9iG4YLqaiJEiy2LaiOWDBBWD18%2BLStXzidnmgnK5v3ExKmf2K3csb%2B4n0GMfckyY6pxFgRPdWsU9pPkRlQERC2Xj8FvyuwNfqJEk1Pp9zsYNv1QlkmasiR%2BbRLh1VwdGZXM96UIszmT8mqk90YWB0QYGs%2F39zgsTZSJzwPNjDbgLiLIU1jEz4XTgF0VUrobBgTJzcrSiCooqYxw9g5jsZ5Gy3vDAGO1iSGN0GgWY%2FowkRNkIz1ljfGrVHEIu9Z5orAS8n73FlR2i8Eg4npfW7%2FGV6DlEasJ5BvXhu4asHLV1WAqQk3yXFWxv1BNv9KQRuqU%2F%2B%2FWH1ikXMfCNT3VGu%2BIyWmgWJ5J%2FY4JQMNW6%2FsAGOqUB5dB2WmafzvmcW3zXL94HM2BoWr2%2BEBbhqpClt3He0wIzXSaZdS%2FAhpC69vxCi1CXjVX8rSEm%2FkCcHWgaO55KYSkfPrgd8TClO%2BcN%2F7MzRuP%2FWv8zayw0TsFOT1oBLmI%2FSaa48WBJokmfUva3ssbNBy%2FaizopxZEiPn3osQyhIJGaW2sGFnFoc693JdlN4fMxxrgFpjsf2htytCpbTP6WgLKOitoS&X-Amz-Signature=4083fbd3deafd8a9f179c551c49e4d44af97092535c347ae328ec05141b8fcbd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDTBIGY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGVaKpE9BI8SKungPnqiB4i5a7yBOtR%2BAr2rqrdg0kYEAiEAgUbrKtKRZkcHlutpQTo8UhvXnh6DakjUgNGlb%2F2UyVUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhxkQ7ZuSoTdSWsMSrcA%2B8nNxM%2F5pjgyO9edqr2%2Bd2ZGLyPRHYZAgzQpr0G%2FYfAwoLP19qKsQkJY1ZXwxOUVXWEhV5VqFYFZiwX86VNrLAput9hgF619ki9fIM%2F0pED%2BidnV3Qk6UuSXH5GuyqHIzqu8REEdCyrfQ2XsHExrhf9whkytyL8fiZjKBTSJsBROdlIY4olD1RxynolIKACzlKYnnkyLHKx4WszawHNrE643Qkp0D1vqe0o%2Bf5lHFOxe7XoE7veHnDlQ39gYZTt%2FWGS0LCLV6pU%2BYp4RglG0xGO9iG4YLqaiJEiy2LaiOWDBBWD18%2BLStXzidnmgnK5v3ExKmf2K3csb%2B4n0GMfckyY6pxFgRPdWsU9pPkRlQERC2Xj8FvyuwNfqJEk1Pp9zsYNv1QlkmasiR%2BbRLh1VwdGZXM96UIszmT8mqk90YWB0QYGs%2F39zgsTZSJzwPNjDbgLiLIU1jEz4XTgF0VUrobBgTJzcrSiCooqYxw9g5jsZ5Gy3vDAGO1iSGN0GgWY%2FowkRNkIz1ljfGrVHEIu9Z5orAS8n73FlR2i8Eg4npfW7%2FGV6DlEasJ5BvXhu4asHLV1WAqQk3yXFWxv1BNv9KQRuqU%2F%2B%2FWH1ikXMfCNT3VGu%2BIyWmgWJ5J%2FY4JQMNW6%2FsAGOqUB5dB2WmafzvmcW3zXL94HM2BoWr2%2BEBbhqpClt3He0wIzXSaZdS%2FAhpC69vxCi1CXjVX8rSEm%2FkCcHWgaO55KYSkfPrgd8TClO%2BcN%2F7MzRuP%2FWv8zayw0TsFOT1oBLmI%2FSaa48WBJokmfUva3ssbNBy%2FaizopxZEiPn3osQyhIJGaW2sGFnFoc693JdlN4fMxxrgFpjsf2htytCpbTP6WgLKOitoS&X-Amz-Signature=e1f4fa0ec7223d81bcc573c6fd6f6ab5f832ea638fd244e329772a483e12a61f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDTBIGY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGVaKpE9BI8SKungPnqiB4i5a7yBOtR%2BAr2rqrdg0kYEAiEAgUbrKtKRZkcHlutpQTo8UhvXnh6DakjUgNGlb%2F2UyVUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhxkQ7ZuSoTdSWsMSrcA%2B8nNxM%2F5pjgyO9edqr2%2Bd2ZGLyPRHYZAgzQpr0G%2FYfAwoLP19qKsQkJY1ZXwxOUVXWEhV5VqFYFZiwX86VNrLAput9hgF619ki9fIM%2F0pED%2BidnV3Qk6UuSXH5GuyqHIzqu8REEdCyrfQ2XsHExrhf9whkytyL8fiZjKBTSJsBROdlIY4olD1RxynolIKACzlKYnnkyLHKx4WszawHNrE643Qkp0D1vqe0o%2Bf5lHFOxe7XoE7veHnDlQ39gYZTt%2FWGS0LCLV6pU%2BYp4RglG0xGO9iG4YLqaiJEiy2LaiOWDBBWD18%2BLStXzidnmgnK5v3ExKmf2K3csb%2B4n0GMfckyY6pxFgRPdWsU9pPkRlQERC2Xj8FvyuwNfqJEk1Pp9zsYNv1QlkmasiR%2BbRLh1VwdGZXM96UIszmT8mqk90YWB0QYGs%2F39zgsTZSJzwPNjDbgLiLIU1jEz4XTgF0VUrobBgTJzcrSiCooqYxw9g5jsZ5Gy3vDAGO1iSGN0GgWY%2FowkRNkIz1ljfGrVHEIu9Z5orAS8n73FlR2i8Eg4npfW7%2FGV6DlEasJ5BvXhu4asHLV1WAqQk3yXFWxv1BNv9KQRuqU%2F%2B%2FWH1ikXMfCNT3VGu%2BIyWmgWJ5J%2FY4JQMNW6%2FsAGOqUB5dB2WmafzvmcW3zXL94HM2BoWr2%2BEBbhqpClt3He0wIzXSaZdS%2FAhpC69vxCi1CXjVX8rSEm%2FkCcHWgaO55KYSkfPrgd8TClO%2BcN%2F7MzRuP%2FWv8zayw0TsFOT1oBLmI%2FSaa48WBJokmfUva3ssbNBy%2FaizopxZEiPn3osQyhIJGaW2sGFnFoc693JdlN4fMxxrgFpjsf2htytCpbTP6WgLKOitoS&X-Amz-Signature=c0bf2e56fb5b8b817a445b5a7751702133e706693eb06189cd09e7360e9277fa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDTBIGY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGVaKpE9BI8SKungPnqiB4i5a7yBOtR%2BAr2rqrdg0kYEAiEAgUbrKtKRZkcHlutpQTo8UhvXnh6DakjUgNGlb%2F2UyVUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhxkQ7ZuSoTdSWsMSrcA%2B8nNxM%2F5pjgyO9edqr2%2Bd2ZGLyPRHYZAgzQpr0G%2FYfAwoLP19qKsQkJY1ZXwxOUVXWEhV5VqFYFZiwX86VNrLAput9hgF619ki9fIM%2F0pED%2BidnV3Qk6UuSXH5GuyqHIzqu8REEdCyrfQ2XsHExrhf9whkytyL8fiZjKBTSJsBROdlIY4olD1RxynolIKACzlKYnnkyLHKx4WszawHNrE643Qkp0D1vqe0o%2Bf5lHFOxe7XoE7veHnDlQ39gYZTt%2FWGS0LCLV6pU%2BYp4RglG0xGO9iG4YLqaiJEiy2LaiOWDBBWD18%2BLStXzidnmgnK5v3ExKmf2K3csb%2B4n0GMfckyY6pxFgRPdWsU9pPkRlQERC2Xj8FvyuwNfqJEk1Pp9zsYNv1QlkmasiR%2BbRLh1VwdGZXM96UIszmT8mqk90YWB0QYGs%2F39zgsTZSJzwPNjDbgLiLIU1jEz4XTgF0VUrobBgTJzcrSiCooqYxw9g5jsZ5Gy3vDAGO1iSGN0GgWY%2FowkRNkIz1ljfGrVHEIu9Z5orAS8n73FlR2i8Eg4npfW7%2FGV6DlEasJ5BvXhu4asHLV1WAqQk3yXFWxv1BNv9KQRuqU%2F%2B%2FWH1ikXMfCNT3VGu%2BIyWmgWJ5J%2FY4JQMNW6%2FsAGOqUB5dB2WmafzvmcW3zXL94HM2BoWr2%2BEBbhqpClt3He0wIzXSaZdS%2FAhpC69vxCi1CXjVX8rSEm%2FkCcHWgaO55KYSkfPrgd8TClO%2BcN%2F7MzRuP%2FWv8zayw0TsFOT1oBLmI%2FSaa48WBJokmfUva3ssbNBy%2FaizopxZEiPn3osQyhIJGaW2sGFnFoc693JdlN4fMxxrgFpjsf2htytCpbTP6WgLKOitoS&X-Amz-Signature=fb9e794e5c0b48332985236dde300d269e478e61c661d2b95b38e455b8db5647&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
