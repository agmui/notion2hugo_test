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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOBUBGN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBxS9VxV4ioo8g6y2ZbHY%2Bgq3C%2FLb2VrJtp6zW65NvgAiB0n8ePyUQlXbfIU2vxrA7gOFUcpcFIMROaKAUgsk%2Frmyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMSVotaObdeEyIB6ZVKtwDn7zUvyhC9vSC0chOBws584Y8l4DllJy4jAcLIBz5wO%2BtNBre%2FI8Oh3Ze2GGKmIdUm%2BpO0mli8O22GePkWii00bSx4SwcnxT8ahNs%2BOawn6mATe11GgmPzB1aGUZY7peGKH3BdYUPxpc0G5vElg3DGMggXg8MohYLoZv%2BA3wD%2F8SogAsmfIr%2BBVEPGoMXrbp7jG9YcD%2BBvcAgIyhWS12gSK7XpXglUeqEDfrOPaAmOJl6hnfuQ8phPrpnkwxfJeW%2F0PT9Uwui04MKmUrRcHBgTxIhfaksGWcFSLhO94P%2BR4cJo6Cz7LGlnAytQOv20E2F7G%2FMtIbV4bay991fXMYim4u96Dy3wC12iITVif27PexC7zJC6ijs1BWJHL0RrENNYN7JrCpFVLYOcblS%2BUszs3CyJzg1SvZvsnxLrFqa6ksZjm%2BAAn%2BCQtPSCIjp0V%2B30PI0WxdR%2B2yqmIEKaESWZwQ0dy%2F4BiaSU9XGcvkMDvyRXECv3STrpdrNq1Vk%2BhCQDoYdiDGdcUaZss1tvIlQZnvSsoWgE%2FA0bihlB%2BXZmhxypY5dNLomQ5C51QvSeyzOI1Hli0kxsPAw9LYhEeCILyvDU7njNYYwrEdES1Nlpa9okNu5KDdKaBm8OD0w8ZS8wAY6pgGvjP1%2BBlZ21paQyQBRk765pEWR4DXAqyahA8%2BjwGBJpIyH2R6Ep95hJhDwHLOgsAI%2FPzwK2livb3SrvAMGNZirjIeMrGaJBiIESmjMf8E6imfiMIFjjKaT9TSmMev25tKsNpxmh%2F7LA9JryqSFxg0rlkBAmcuEzA%2BKqKevamX68rJhZcsGCUCRpu1yoII4VBQ45P6PUK8UGwHDE43wK95fvUCC4wEB&X-Amz-Signature=582047d51ef52badb0962c90e512132b2a95fa617a39d1108d1576231682a4f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOBUBGN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBxS9VxV4ioo8g6y2ZbHY%2Bgq3C%2FLb2VrJtp6zW65NvgAiB0n8ePyUQlXbfIU2vxrA7gOFUcpcFIMROaKAUgsk%2Frmyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMSVotaObdeEyIB6ZVKtwDn7zUvyhC9vSC0chOBws584Y8l4DllJy4jAcLIBz5wO%2BtNBre%2FI8Oh3Ze2GGKmIdUm%2BpO0mli8O22GePkWii00bSx4SwcnxT8ahNs%2BOawn6mATe11GgmPzB1aGUZY7peGKH3BdYUPxpc0G5vElg3DGMggXg8MohYLoZv%2BA3wD%2F8SogAsmfIr%2BBVEPGoMXrbp7jG9YcD%2BBvcAgIyhWS12gSK7XpXglUeqEDfrOPaAmOJl6hnfuQ8phPrpnkwxfJeW%2F0PT9Uwui04MKmUrRcHBgTxIhfaksGWcFSLhO94P%2BR4cJo6Cz7LGlnAytQOv20E2F7G%2FMtIbV4bay991fXMYim4u96Dy3wC12iITVif27PexC7zJC6ijs1BWJHL0RrENNYN7JrCpFVLYOcblS%2BUszs3CyJzg1SvZvsnxLrFqa6ksZjm%2BAAn%2BCQtPSCIjp0V%2B30PI0WxdR%2B2yqmIEKaESWZwQ0dy%2F4BiaSU9XGcvkMDvyRXECv3STrpdrNq1Vk%2BhCQDoYdiDGdcUaZss1tvIlQZnvSsoWgE%2FA0bihlB%2BXZmhxypY5dNLomQ5C51QvSeyzOI1Hli0kxsPAw9LYhEeCILyvDU7njNYYwrEdES1Nlpa9okNu5KDdKaBm8OD0w8ZS8wAY6pgGvjP1%2BBlZ21paQyQBRk765pEWR4DXAqyahA8%2BjwGBJpIyH2R6Ep95hJhDwHLOgsAI%2FPzwK2livb3SrvAMGNZirjIeMrGaJBiIESmjMf8E6imfiMIFjjKaT9TSmMev25tKsNpxmh%2F7LA9JryqSFxg0rlkBAmcuEzA%2BKqKevamX68rJhZcsGCUCRpu1yoII4VBQ45P6PUK8UGwHDE43wK95fvUCC4wEB&X-Amz-Signature=ec942245b8cce18f55cb2954dbb29e2e950a9e1f634c5dc51942660d68709a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOBUBGN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBxS9VxV4ioo8g6y2ZbHY%2Bgq3C%2FLb2VrJtp6zW65NvgAiB0n8ePyUQlXbfIU2vxrA7gOFUcpcFIMROaKAUgsk%2Frmyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMSVotaObdeEyIB6ZVKtwDn7zUvyhC9vSC0chOBws584Y8l4DllJy4jAcLIBz5wO%2BtNBre%2FI8Oh3Ze2GGKmIdUm%2BpO0mli8O22GePkWii00bSx4SwcnxT8ahNs%2BOawn6mATe11GgmPzB1aGUZY7peGKH3BdYUPxpc0G5vElg3DGMggXg8MohYLoZv%2BA3wD%2F8SogAsmfIr%2BBVEPGoMXrbp7jG9YcD%2BBvcAgIyhWS12gSK7XpXglUeqEDfrOPaAmOJl6hnfuQ8phPrpnkwxfJeW%2F0PT9Uwui04MKmUrRcHBgTxIhfaksGWcFSLhO94P%2BR4cJo6Cz7LGlnAytQOv20E2F7G%2FMtIbV4bay991fXMYim4u96Dy3wC12iITVif27PexC7zJC6ijs1BWJHL0RrENNYN7JrCpFVLYOcblS%2BUszs3CyJzg1SvZvsnxLrFqa6ksZjm%2BAAn%2BCQtPSCIjp0V%2B30PI0WxdR%2B2yqmIEKaESWZwQ0dy%2F4BiaSU9XGcvkMDvyRXECv3STrpdrNq1Vk%2BhCQDoYdiDGdcUaZss1tvIlQZnvSsoWgE%2FA0bihlB%2BXZmhxypY5dNLomQ5C51QvSeyzOI1Hli0kxsPAw9LYhEeCILyvDU7njNYYwrEdES1Nlpa9okNu5KDdKaBm8OD0w8ZS8wAY6pgGvjP1%2BBlZ21paQyQBRk765pEWR4DXAqyahA8%2BjwGBJpIyH2R6Ep95hJhDwHLOgsAI%2FPzwK2livb3SrvAMGNZirjIeMrGaJBiIESmjMf8E6imfiMIFjjKaT9TSmMev25tKsNpxmh%2F7LA9JryqSFxg0rlkBAmcuEzA%2BKqKevamX68rJhZcsGCUCRpu1yoII4VBQ45P6PUK8UGwHDE43wK95fvUCC4wEB&X-Amz-Signature=245b9e83b2734b8769ebd8dc1a510cfddfc2fda076b766f74410ffd646c2d2df&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOBUBGN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBxS9VxV4ioo8g6y2ZbHY%2Bgq3C%2FLb2VrJtp6zW65NvgAiB0n8ePyUQlXbfIU2vxrA7gOFUcpcFIMROaKAUgsk%2Frmyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMSVotaObdeEyIB6ZVKtwDn7zUvyhC9vSC0chOBws584Y8l4DllJy4jAcLIBz5wO%2BtNBre%2FI8Oh3Ze2GGKmIdUm%2BpO0mli8O22GePkWii00bSx4SwcnxT8ahNs%2BOawn6mATe11GgmPzB1aGUZY7peGKH3BdYUPxpc0G5vElg3DGMggXg8MohYLoZv%2BA3wD%2F8SogAsmfIr%2BBVEPGoMXrbp7jG9YcD%2BBvcAgIyhWS12gSK7XpXglUeqEDfrOPaAmOJl6hnfuQ8phPrpnkwxfJeW%2F0PT9Uwui04MKmUrRcHBgTxIhfaksGWcFSLhO94P%2BR4cJo6Cz7LGlnAytQOv20E2F7G%2FMtIbV4bay991fXMYim4u96Dy3wC12iITVif27PexC7zJC6ijs1BWJHL0RrENNYN7JrCpFVLYOcblS%2BUszs3CyJzg1SvZvsnxLrFqa6ksZjm%2BAAn%2BCQtPSCIjp0V%2B30PI0WxdR%2B2yqmIEKaESWZwQ0dy%2F4BiaSU9XGcvkMDvyRXECv3STrpdrNq1Vk%2BhCQDoYdiDGdcUaZss1tvIlQZnvSsoWgE%2FA0bihlB%2BXZmhxypY5dNLomQ5C51QvSeyzOI1Hli0kxsPAw9LYhEeCILyvDU7njNYYwrEdES1Nlpa9okNu5KDdKaBm8OD0w8ZS8wAY6pgGvjP1%2BBlZ21paQyQBRk765pEWR4DXAqyahA8%2BjwGBJpIyH2R6Ep95hJhDwHLOgsAI%2FPzwK2livb3SrvAMGNZirjIeMrGaJBiIESmjMf8E6imfiMIFjjKaT9TSmMev25tKsNpxmh%2F7LA9JryqSFxg0rlkBAmcuEzA%2BKqKevamX68rJhZcsGCUCRpu1yoII4VBQ45P6PUK8UGwHDE43wK95fvUCC4wEB&X-Amz-Signature=88cf2f937acb6088f7865f0bd7e132ea19dd054ff44bbee2cfb09885fc919c35&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOBUBGN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBxS9VxV4ioo8g6y2ZbHY%2Bgq3C%2FLb2VrJtp6zW65NvgAiB0n8ePyUQlXbfIU2vxrA7gOFUcpcFIMROaKAUgsk%2Frmyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMSVotaObdeEyIB6ZVKtwDn7zUvyhC9vSC0chOBws584Y8l4DllJy4jAcLIBz5wO%2BtNBre%2FI8Oh3Ze2GGKmIdUm%2BpO0mli8O22GePkWii00bSx4SwcnxT8ahNs%2BOawn6mATe11GgmPzB1aGUZY7peGKH3BdYUPxpc0G5vElg3DGMggXg8MohYLoZv%2BA3wD%2F8SogAsmfIr%2BBVEPGoMXrbp7jG9YcD%2BBvcAgIyhWS12gSK7XpXglUeqEDfrOPaAmOJl6hnfuQ8phPrpnkwxfJeW%2F0PT9Uwui04MKmUrRcHBgTxIhfaksGWcFSLhO94P%2BR4cJo6Cz7LGlnAytQOv20E2F7G%2FMtIbV4bay991fXMYim4u96Dy3wC12iITVif27PexC7zJC6ijs1BWJHL0RrENNYN7JrCpFVLYOcblS%2BUszs3CyJzg1SvZvsnxLrFqa6ksZjm%2BAAn%2BCQtPSCIjp0V%2B30PI0WxdR%2B2yqmIEKaESWZwQ0dy%2F4BiaSU9XGcvkMDvyRXECv3STrpdrNq1Vk%2BhCQDoYdiDGdcUaZss1tvIlQZnvSsoWgE%2FA0bihlB%2BXZmhxypY5dNLomQ5C51QvSeyzOI1Hli0kxsPAw9LYhEeCILyvDU7njNYYwrEdES1Nlpa9okNu5KDdKaBm8OD0w8ZS8wAY6pgGvjP1%2BBlZ21paQyQBRk765pEWR4DXAqyahA8%2BjwGBJpIyH2R6Ep95hJhDwHLOgsAI%2FPzwK2livb3SrvAMGNZirjIeMrGaJBiIESmjMf8E6imfiMIFjjKaT9TSmMev25tKsNpxmh%2F7LA9JryqSFxg0rlkBAmcuEzA%2BKqKevamX68rJhZcsGCUCRpu1yoII4VBQ45P6PUK8UGwHDE43wK95fvUCC4wEB&X-Amz-Signature=64c4d81683a02728fe5f45311d5f3b7da952c7a7ef9e8e4db48cfbdb576d371b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOBUBGN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBxS9VxV4ioo8g6y2ZbHY%2Bgq3C%2FLb2VrJtp6zW65NvgAiB0n8ePyUQlXbfIU2vxrA7gOFUcpcFIMROaKAUgsk%2Frmyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMSVotaObdeEyIB6ZVKtwDn7zUvyhC9vSC0chOBws584Y8l4DllJy4jAcLIBz5wO%2BtNBre%2FI8Oh3Ze2GGKmIdUm%2BpO0mli8O22GePkWii00bSx4SwcnxT8ahNs%2BOawn6mATe11GgmPzB1aGUZY7peGKH3BdYUPxpc0G5vElg3DGMggXg8MohYLoZv%2BA3wD%2F8SogAsmfIr%2BBVEPGoMXrbp7jG9YcD%2BBvcAgIyhWS12gSK7XpXglUeqEDfrOPaAmOJl6hnfuQ8phPrpnkwxfJeW%2F0PT9Uwui04MKmUrRcHBgTxIhfaksGWcFSLhO94P%2BR4cJo6Cz7LGlnAytQOv20E2F7G%2FMtIbV4bay991fXMYim4u96Dy3wC12iITVif27PexC7zJC6ijs1BWJHL0RrENNYN7JrCpFVLYOcblS%2BUszs3CyJzg1SvZvsnxLrFqa6ksZjm%2BAAn%2BCQtPSCIjp0V%2B30PI0WxdR%2B2yqmIEKaESWZwQ0dy%2F4BiaSU9XGcvkMDvyRXECv3STrpdrNq1Vk%2BhCQDoYdiDGdcUaZss1tvIlQZnvSsoWgE%2FA0bihlB%2BXZmhxypY5dNLomQ5C51QvSeyzOI1Hli0kxsPAw9LYhEeCILyvDU7njNYYwrEdES1Nlpa9okNu5KDdKaBm8OD0w8ZS8wAY6pgGvjP1%2BBlZ21paQyQBRk765pEWR4DXAqyahA8%2BjwGBJpIyH2R6Ep95hJhDwHLOgsAI%2FPzwK2livb3SrvAMGNZirjIeMrGaJBiIESmjMf8E6imfiMIFjjKaT9TSmMev25tKsNpxmh%2F7LA9JryqSFxg0rlkBAmcuEzA%2BKqKevamX68rJhZcsGCUCRpu1yoII4VBQ45P6PUK8UGwHDE43wK95fvUCC4wEB&X-Amz-Signature=e957e09593b98620c5de0253ea91c7090541820acfe2e7cc77285496d7867c7c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOBUBGN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBxS9VxV4ioo8g6y2ZbHY%2Bgq3C%2FLb2VrJtp6zW65NvgAiB0n8ePyUQlXbfIU2vxrA7gOFUcpcFIMROaKAUgsk%2Frmyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMSVotaObdeEyIB6ZVKtwDn7zUvyhC9vSC0chOBws584Y8l4DllJy4jAcLIBz5wO%2BtNBre%2FI8Oh3Ze2GGKmIdUm%2BpO0mli8O22GePkWii00bSx4SwcnxT8ahNs%2BOawn6mATe11GgmPzB1aGUZY7peGKH3BdYUPxpc0G5vElg3DGMggXg8MohYLoZv%2BA3wD%2F8SogAsmfIr%2BBVEPGoMXrbp7jG9YcD%2BBvcAgIyhWS12gSK7XpXglUeqEDfrOPaAmOJl6hnfuQ8phPrpnkwxfJeW%2F0PT9Uwui04MKmUrRcHBgTxIhfaksGWcFSLhO94P%2BR4cJo6Cz7LGlnAytQOv20E2F7G%2FMtIbV4bay991fXMYim4u96Dy3wC12iITVif27PexC7zJC6ijs1BWJHL0RrENNYN7JrCpFVLYOcblS%2BUszs3CyJzg1SvZvsnxLrFqa6ksZjm%2BAAn%2BCQtPSCIjp0V%2B30PI0WxdR%2B2yqmIEKaESWZwQ0dy%2F4BiaSU9XGcvkMDvyRXECv3STrpdrNq1Vk%2BhCQDoYdiDGdcUaZss1tvIlQZnvSsoWgE%2FA0bihlB%2BXZmhxypY5dNLomQ5C51QvSeyzOI1Hli0kxsPAw9LYhEeCILyvDU7njNYYwrEdES1Nlpa9okNu5KDdKaBm8OD0w8ZS8wAY6pgGvjP1%2BBlZ21paQyQBRk765pEWR4DXAqyahA8%2BjwGBJpIyH2R6Ep95hJhDwHLOgsAI%2FPzwK2livb3SrvAMGNZirjIeMrGaJBiIESmjMf8E6imfiMIFjjKaT9TSmMev25tKsNpxmh%2F7LA9JryqSFxg0rlkBAmcuEzA%2BKqKevamX68rJhZcsGCUCRpu1yoII4VBQ45P6PUK8UGwHDE43wK95fvUCC4wEB&X-Amz-Signature=412085dfdc432e490e36668d1d1b7625d94aeaa2e5b28b127a1a0c60740c97f2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
