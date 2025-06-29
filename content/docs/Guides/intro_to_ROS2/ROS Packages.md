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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2YEBO5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBntuX08NO8JO4IswoVhb7pEcWju%2Bs7F9pnD7ZFRtr3HAiA01JBBQIs2MS7w1lvhno2OcZP%2BbVo6PCxIxFBKFnOJDyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcg82hW6A9a9EKiDKtwDpwXZbJZYU4Ev8bzDI%2B6igm79y80EK37EfqE1wxfe1zYVQ1oBs3cZCgkDPyBmOJNJiyBN7lP1YsC2xzmg0IwuVpMEvp0gGEoKDdN55pjFBDDJFHR28aOp8xAVKoSD0vCwECZrysHqtzHLmbCv5InpisJW56EIlMn5wMqPWycbzYtnl7aI%2BdmrK1psa3%2FTC7RXPjYMX6TIpUthEiWj4lipiQPl4omYjeNUWrpqYNLqFzvEorN3VoS%2BJELu5it%2FXdssnNmjOyQuCkrwf2rjqmPV1Dh%2Bi%2BTr%2BNJS8O8WRQRWxjp%2B5XilDTq532Kj5thD5xp7Kn8155XLyXvKaSQnOP%2B4MZa%2FfRoiUtfCQS7DTdnp%2FD4CKjzdAZCuUb0HU3FEmbtTuwBFATUIkNa7Wwe86whTFjBNHY3KBzxq%2Bs0w4icmNNMox9M51aK5YjXNd8RF22ctlDjZIIntNmo25gGf5fyDKKpMlBmfMdUExyeKPmihBdfMncbPnL%2BtXhk32DAEWSbpwXYVmRODff1D9llgqLwx0YZXkTm3WUDX5kdzvhrbwFrVPMcc8thucsJTyHmapq9A2H39NmGO1oa6NYAYj7Q1ZGCCTfAy84RMHC1FI9DgnTP08SOQc07Q3Rb%2B%2BiYwg82GwwY6pgGxCDMdY2yvMBguCPogNblcN9JE5ae2p0eu6%2FzFOcG61Ne1tjQ0WEL8gkz%2FMCwECPhvbnAE2KgDx8mQ4I2yGy57qujxkTdJmEylrX7wTH000bUtsR5zYE74h9kod8HljKqUCIrGpggu4uih5fD%2FpJEOxikDRbbf%2FY4xX6%2Bzl9LolbKm7eBtLJuIZZd3CnIAV4rR%2FYtq%2Ff42DyztRBd5Ec6B0QAqLq1G&X-Amz-Signature=bc3e8181e7be282632c3d1048c4ac37862b33e209168ca8c3d87ee55a68e8c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2YEBO5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBntuX08NO8JO4IswoVhb7pEcWju%2Bs7F9pnD7ZFRtr3HAiA01JBBQIs2MS7w1lvhno2OcZP%2BbVo6PCxIxFBKFnOJDyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcg82hW6A9a9EKiDKtwDpwXZbJZYU4Ev8bzDI%2B6igm79y80EK37EfqE1wxfe1zYVQ1oBs3cZCgkDPyBmOJNJiyBN7lP1YsC2xzmg0IwuVpMEvp0gGEoKDdN55pjFBDDJFHR28aOp8xAVKoSD0vCwECZrysHqtzHLmbCv5InpisJW56EIlMn5wMqPWycbzYtnl7aI%2BdmrK1psa3%2FTC7RXPjYMX6TIpUthEiWj4lipiQPl4omYjeNUWrpqYNLqFzvEorN3VoS%2BJELu5it%2FXdssnNmjOyQuCkrwf2rjqmPV1Dh%2Bi%2BTr%2BNJS8O8WRQRWxjp%2B5XilDTq532Kj5thD5xp7Kn8155XLyXvKaSQnOP%2B4MZa%2FfRoiUtfCQS7DTdnp%2FD4CKjzdAZCuUb0HU3FEmbtTuwBFATUIkNa7Wwe86whTFjBNHY3KBzxq%2Bs0w4icmNNMox9M51aK5YjXNd8RF22ctlDjZIIntNmo25gGf5fyDKKpMlBmfMdUExyeKPmihBdfMncbPnL%2BtXhk32DAEWSbpwXYVmRODff1D9llgqLwx0YZXkTm3WUDX5kdzvhrbwFrVPMcc8thucsJTyHmapq9A2H39NmGO1oa6NYAYj7Q1ZGCCTfAy84RMHC1FI9DgnTP08SOQc07Q3Rb%2B%2BiYwg82GwwY6pgGxCDMdY2yvMBguCPogNblcN9JE5ae2p0eu6%2FzFOcG61Ne1tjQ0WEL8gkz%2FMCwECPhvbnAE2KgDx8mQ4I2yGy57qujxkTdJmEylrX7wTH000bUtsR5zYE74h9kod8HljKqUCIrGpggu4uih5fD%2FpJEOxikDRbbf%2FY4xX6%2Bzl9LolbKm7eBtLJuIZZd3CnIAV4rR%2FYtq%2Ff42DyztRBd5Ec6B0QAqLq1G&X-Amz-Signature=d1d7a5cc27c27aae0446be198a88ed48ae3af2fa20a796e83599dda1e03f0eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2YEBO5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBntuX08NO8JO4IswoVhb7pEcWju%2Bs7F9pnD7ZFRtr3HAiA01JBBQIs2MS7w1lvhno2OcZP%2BbVo6PCxIxFBKFnOJDyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcg82hW6A9a9EKiDKtwDpwXZbJZYU4Ev8bzDI%2B6igm79y80EK37EfqE1wxfe1zYVQ1oBs3cZCgkDPyBmOJNJiyBN7lP1YsC2xzmg0IwuVpMEvp0gGEoKDdN55pjFBDDJFHR28aOp8xAVKoSD0vCwECZrysHqtzHLmbCv5InpisJW56EIlMn5wMqPWycbzYtnl7aI%2BdmrK1psa3%2FTC7RXPjYMX6TIpUthEiWj4lipiQPl4omYjeNUWrpqYNLqFzvEorN3VoS%2BJELu5it%2FXdssnNmjOyQuCkrwf2rjqmPV1Dh%2Bi%2BTr%2BNJS8O8WRQRWxjp%2B5XilDTq532Kj5thD5xp7Kn8155XLyXvKaSQnOP%2B4MZa%2FfRoiUtfCQS7DTdnp%2FD4CKjzdAZCuUb0HU3FEmbtTuwBFATUIkNa7Wwe86whTFjBNHY3KBzxq%2Bs0w4icmNNMox9M51aK5YjXNd8RF22ctlDjZIIntNmo25gGf5fyDKKpMlBmfMdUExyeKPmihBdfMncbPnL%2BtXhk32DAEWSbpwXYVmRODff1D9llgqLwx0YZXkTm3WUDX5kdzvhrbwFrVPMcc8thucsJTyHmapq9A2H39NmGO1oa6NYAYj7Q1ZGCCTfAy84RMHC1FI9DgnTP08SOQc07Q3Rb%2B%2BiYwg82GwwY6pgGxCDMdY2yvMBguCPogNblcN9JE5ae2p0eu6%2FzFOcG61Ne1tjQ0WEL8gkz%2FMCwECPhvbnAE2KgDx8mQ4I2yGy57qujxkTdJmEylrX7wTH000bUtsR5zYE74h9kod8HljKqUCIrGpggu4uih5fD%2FpJEOxikDRbbf%2FY4xX6%2Bzl9LolbKm7eBtLJuIZZd3CnIAV4rR%2FYtq%2Ff42DyztRBd5Ec6B0QAqLq1G&X-Amz-Signature=c008644343bca52acda6f71fe1a4a99081e8e1f0a219acd18cfd7085d44d45ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2YEBO5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBntuX08NO8JO4IswoVhb7pEcWju%2Bs7F9pnD7ZFRtr3HAiA01JBBQIs2MS7w1lvhno2OcZP%2BbVo6PCxIxFBKFnOJDyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcg82hW6A9a9EKiDKtwDpwXZbJZYU4Ev8bzDI%2B6igm79y80EK37EfqE1wxfe1zYVQ1oBs3cZCgkDPyBmOJNJiyBN7lP1YsC2xzmg0IwuVpMEvp0gGEoKDdN55pjFBDDJFHR28aOp8xAVKoSD0vCwECZrysHqtzHLmbCv5InpisJW56EIlMn5wMqPWycbzYtnl7aI%2BdmrK1psa3%2FTC7RXPjYMX6TIpUthEiWj4lipiQPl4omYjeNUWrpqYNLqFzvEorN3VoS%2BJELu5it%2FXdssnNmjOyQuCkrwf2rjqmPV1Dh%2Bi%2BTr%2BNJS8O8WRQRWxjp%2B5XilDTq532Kj5thD5xp7Kn8155XLyXvKaSQnOP%2B4MZa%2FfRoiUtfCQS7DTdnp%2FD4CKjzdAZCuUb0HU3FEmbtTuwBFATUIkNa7Wwe86whTFjBNHY3KBzxq%2Bs0w4icmNNMox9M51aK5YjXNd8RF22ctlDjZIIntNmo25gGf5fyDKKpMlBmfMdUExyeKPmihBdfMncbPnL%2BtXhk32DAEWSbpwXYVmRODff1D9llgqLwx0YZXkTm3WUDX5kdzvhrbwFrVPMcc8thucsJTyHmapq9A2H39NmGO1oa6NYAYj7Q1ZGCCTfAy84RMHC1FI9DgnTP08SOQc07Q3Rb%2B%2BiYwg82GwwY6pgGxCDMdY2yvMBguCPogNblcN9JE5ae2p0eu6%2FzFOcG61Ne1tjQ0WEL8gkz%2FMCwECPhvbnAE2KgDx8mQ4I2yGy57qujxkTdJmEylrX7wTH000bUtsR5zYE74h9kod8HljKqUCIrGpggu4uih5fD%2FpJEOxikDRbbf%2FY4xX6%2Bzl9LolbKm7eBtLJuIZZd3CnIAV4rR%2FYtq%2Ff42DyztRBd5Ec6B0QAqLq1G&X-Amz-Signature=33f02bc0c4abc74092af0a4fa920382148e8bb9acd86e8d9fcaa3ad25d7ecdaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2YEBO5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBntuX08NO8JO4IswoVhb7pEcWju%2Bs7F9pnD7ZFRtr3HAiA01JBBQIs2MS7w1lvhno2OcZP%2BbVo6PCxIxFBKFnOJDyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcg82hW6A9a9EKiDKtwDpwXZbJZYU4Ev8bzDI%2B6igm79y80EK37EfqE1wxfe1zYVQ1oBs3cZCgkDPyBmOJNJiyBN7lP1YsC2xzmg0IwuVpMEvp0gGEoKDdN55pjFBDDJFHR28aOp8xAVKoSD0vCwECZrysHqtzHLmbCv5InpisJW56EIlMn5wMqPWycbzYtnl7aI%2BdmrK1psa3%2FTC7RXPjYMX6TIpUthEiWj4lipiQPl4omYjeNUWrpqYNLqFzvEorN3VoS%2BJELu5it%2FXdssnNmjOyQuCkrwf2rjqmPV1Dh%2Bi%2BTr%2BNJS8O8WRQRWxjp%2B5XilDTq532Kj5thD5xp7Kn8155XLyXvKaSQnOP%2B4MZa%2FfRoiUtfCQS7DTdnp%2FD4CKjzdAZCuUb0HU3FEmbtTuwBFATUIkNa7Wwe86whTFjBNHY3KBzxq%2Bs0w4icmNNMox9M51aK5YjXNd8RF22ctlDjZIIntNmo25gGf5fyDKKpMlBmfMdUExyeKPmihBdfMncbPnL%2BtXhk32DAEWSbpwXYVmRODff1D9llgqLwx0YZXkTm3WUDX5kdzvhrbwFrVPMcc8thucsJTyHmapq9A2H39NmGO1oa6NYAYj7Q1ZGCCTfAy84RMHC1FI9DgnTP08SOQc07Q3Rb%2B%2BiYwg82GwwY6pgGxCDMdY2yvMBguCPogNblcN9JE5ae2p0eu6%2FzFOcG61Ne1tjQ0WEL8gkz%2FMCwECPhvbnAE2KgDx8mQ4I2yGy57qujxkTdJmEylrX7wTH000bUtsR5zYE74h9kod8HljKqUCIrGpggu4uih5fD%2FpJEOxikDRbbf%2FY4xX6%2Bzl9LolbKm7eBtLJuIZZd3CnIAV4rR%2FYtq%2Ff42DyztRBd5Ec6B0QAqLq1G&X-Amz-Signature=4764fa0977462cc6342f73283ba48d5528ae152ae4f278dd764be924681dc3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2YEBO5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBntuX08NO8JO4IswoVhb7pEcWju%2Bs7F9pnD7ZFRtr3HAiA01JBBQIs2MS7w1lvhno2OcZP%2BbVo6PCxIxFBKFnOJDyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcg82hW6A9a9EKiDKtwDpwXZbJZYU4Ev8bzDI%2B6igm79y80EK37EfqE1wxfe1zYVQ1oBs3cZCgkDPyBmOJNJiyBN7lP1YsC2xzmg0IwuVpMEvp0gGEoKDdN55pjFBDDJFHR28aOp8xAVKoSD0vCwECZrysHqtzHLmbCv5InpisJW56EIlMn5wMqPWycbzYtnl7aI%2BdmrK1psa3%2FTC7RXPjYMX6TIpUthEiWj4lipiQPl4omYjeNUWrpqYNLqFzvEorN3VoS%2BJELu5it%2FXdssnNmjOyQuCkrwf2rjqmPV1Dh%2Bi%2BTr%2BNJS8O8WRQRWxjp%2B5XilDTq532Kj5thD5xp7Kn8155XLyXvKaSQnOP%2B4MZa%2FfRoiUtfCQS7DTdnp%2FD4CKjzdAZCuUb0HU3FEmbtTuwBFATUIkNa7Wwe86whTFjBNHY3KBzxq%2Bs0w4icmNNMox9M51aK5YjXNd8RF22ctlDjZIIntNmo25gGf5fyDKKpMlBmfMdUExyeKPmihBdfMncbPnL%2BtXhk32DAEWSbpwXYVmRODff1D9llgqLwx0YZXkTm3WUDX5kdzvhrbwFrVPMcc8thucsJTyHmapq9A2H39NmGO1oa6NYAYj7Q1ZGCCTfAy84RMHC1FI9DgnTP08SOQc07Q3Rb%2B%2BiYwg82GwwY6pgGxCDMdY2yvMBguCPogNblcN9JE5ae2p0eu6%2FzFOcG61Ne1tjQ0WEL8gkz%2FMCwECPhvbnAE2KgDx8mQ4I2yGy57qujxkTdJmEylrX7wTH000bUtsR5zYE74h9kod8HljKqUCIrGpggu4uih5fD%2FpJEOxikDRbbf%2FY4xX6%2Bzl9LolbKm7eBtLJuIZZd3CnIAV4rR%2FYtq%2Ff42DyztRBd5Ec6B0QAqLq1G&X-Amz-Signature=3850f5da4c84a3dd301886e3539c29d8e4774cddc22314651b6f21e76a5d18f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2YEBO5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBntuX08NO8JO4IswoVhb7pEcWju%2Bs7F9pnD7ZFRtr3HAiA01JBBQIs2MS7w1lvhno2OcZP%2BbVo6PCxIxFBKFnOJDyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcg82hW6A9a9EKiDKtwDpwXZbJZYU4Ev8bzDI%2B6igm79y80EK37EfqE1wxfe1zYVQ1oBs3cZCgkDPyBmOJNJiyBN7lP1YsC2xzmg0IwuVpMEvp0gGEoKDdN55pjFBDDJFHR28aOp8xAVKoSD0vCwECZrysHqtzHLmbCv5InpisJW56EIlMn5wMqPWycbzYtnl7aI%2BdmrK1psa3%2FTC7RXPjYMX6TIpUthEiWj4lipiQPl4omYjeNUWrpqYNLqFzvEorN3VoS%2BJELu5it%2FXdssnNmjOyQuCkrwf2rjqmPV1Dh%2Bi%2BTr%2BNJS8O8WRQRWxjp%2B5XilDTq532Kj5thD5xp7Kn8155XLyXvKaSQnOP%2B4MZa%2FfRoiUtfCQS7DTdnp%2FD4CKjzdAZCuUb0HU3FEmbtTuwBFATUIkNa7Wwe86whTFjBNHY3KBzxq%2Bs0w4icmNNMox9M51aK5YjXNd8RF22ctlDjZIIntNmo25gGf5fyDKKpMlBmfMdUExyeKPmihBdfMncbPnL%2BtXhk32DAEWSbpwXYVmRODff1D9llgqLwx0YZXkTm3WUDX5kdzvhrbwFrVPMcc8thucsJTyHmapq9A2H39NmGO1oa6NYAYj7Q1ZGCCTfAy84RMHC1FI9DgnTP08SOQc07Q3Rb%2B%2BiYwg82GwwY6pgGxCDMdY2yvMBguCPogNblcN9JE5ae2p0eu6%2FzFOcG61Ne1tjQ0WEL8gkz%2FMCwECPhvbnAE2KgDx8mQ4I2yGy57qujxkTdJmEylrX7wTH000bUtsR5zYE74h9kod8HljKqUCIrGpggu4uih5fD%2FpJEOxikDRbbf%2FY4xX6%2Bzl9LolbKm7eBtLJuIZZd3CnIAV4rR%2FYtq%2Ff42DyztRBd5Ec6B0QAqLq1G&X-Amz-Signature=064f19cb3db2770b6074b5e6ab5ea577d041b02218dc60a2a594af16ee1bf0c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
