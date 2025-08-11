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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAFWWJ4K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0LZ%2FsMnebVBzRGPv4tTinyK8r%2Brcw%2FO9gsvKwz8qKYAiEApC2zaSaS50ZZCucazSgt%2B7RwmCImhCBveIxWK29OT3oqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd3D8yhmuVXOMmf%2BCrcAwio7a3hhYcYfV63ikzihfmmY7gATN6%2BmALVCDrfGRwkE435Z2dM6e78jwzbbcbQCNCnSEeUjHEjE6yuDVo1OwuozWkUVDrrLjRWZ24pXh98vwVdrRZSj6LrixJFD7x6w8TvvthHpUKbGsBz4Z%2F6OognVOskvAQpv7mhncZAPQLZ4avdMq3%2B3W736sbxtXJ2PGa5DRaTfu%2F2MBwSFSxXB%2F6YU9vB1HE4TzWgCsFEMk5n%2BWWOqvARw7jgXKPPL1zZEtxBxxKMJD4umZ6B59RVK8qYKI7sF6JVbW58AL3OGykiCrMBKeFUZpL5jMIx9LiwlwjW%2F%2BewIbulk63S2kfGBuvip71YYnFM93tMgHY7yGeJYP83V05CWRvKvl%2Fvh0yGuV0Mcr4p4EJFTeHTryFE6GhO92btIoR0vpLqzxW6m0PvwUhq1gCpRSFFx59GBfi1WuJbp8BCuQPhq5HMujpJvU9Jg5BJJ1tSrM4rtmAWHzduujvOMQxXMH4AsdwkUl%2Bf0Vkrn0e3eP6aWvPZf9a9L8rQrOTUU%2BsrhMZEZS6dMhcPXtVCPDn%2Bz33N7ld4fvN5lIDAS7uAdFm0pSDtMXY1qACB%2FmDwtcjb6RwktXeq%2FCxmDJOmHLcbbjgWNsrbMKKd5cQGOqUB8NWWZkkWVskjlPPGZrq8eplxgXNSH4gKk%2BemgEVOb9RuCRL6h9cscJCisPjn8x14vXXFgU5%2FoWaiboGPCobOOfkPt0sc07jtQ7H2r0g1CE8XbKxFrkXl9bZJlZ5HGgk9LK6XRToDLbuTG9JUc03vDKOCvFQD6UuWuJ%2FwXgH8OE5XGqgQEoO7UyIvQCTKoaTXxz%2BVyZG6ElnY3nco%2BokWn2Aytc%2Fi&X-Amz-Signature=7296acbf9c694f975e9318780f5dba66fcaab1f9de007dd13258fc39b663080d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAFWWJ4K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0LZ%2FsMnebVBzRGPv4tTinyK8r%2Brcw%2FO9gsvKwz8qKYAiEApC2zaSaS50ZZCucazSgt%2B7RwmCImhCBveIxWK29OT3oqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd3D8yhmuVXOMmf%2BCrcAwio7a3hhYcYfV63ikzihfmmY7gATN6%2BmALVCDrfGRwkE435Z2dM6e78jwzbbcbQCNCnSEeUjHEjE6yuDVo1OwuozWkUVDrrLjRWZ24pXh98vwVdrRZSj6LrixJFD7x6w8TvvthHpUKbGsBz4Z%2F6OognVOskvAQpv7mhncZAPQLZ4avdMq3%2B3W736sbxtXJ2PGa5DRaTfu%2F2MBwSFSxXB%2F6YU9vB1HE4TzWgCsFEMk5n%2BWWOqvARw7jgXKPPL1zZEtxBxxKMJD4umZ6B59RVK8qYKI7sF6JVbW58AL3OGykiCrMBKeFUZpL5jMIx9LiwlwjW%2F%2BewIbulk63S2kfGBuvip71YYnFM93tMgHY7yGeJYP83V05CWRvKvl%2Fvh0yGuV0Mcr4p4EJFTeHTryFE6GhO92btIoR0vpLqzxW6m0PvwUhq1gCpRSFFx59GBfi1WuJbp8BCuQPhq5HMujpJvU9Jg5BJJ1tSrM4rtmAWHzduujvOMQxXMH4AsdwkUl%2Bf0Vkrn0e3eP6aWvPZf9a9L8rQrOTUU%2BsrhMZEZS6dMhcPXtVCPDn%2Bz33N7ld4fvN5lIDAS7uAdFm0pSDtMXY1qACB%2FmDwtcjb6RwktXeq%2FCxmDJOmHLcbbjgWNsrbMKKd5cQGOqUB8NWWZkkWVskjlPPGZrq8eplxgXNSH4gKk%2BemgEVOb9RuCRL6h9cscJCisPjn8x14vXXFgU5%2FoWaiboGPCobOOfkPt0sc07jtQ7H2r0g1CE8XbKxFrkXl9bZJlZ5HGgk9LK6XRToDLbuTG9JUc03vDKOCvFQD6UuWuJ%2FwXgH8OE5XGqgQEoO7UyIvQCTKoaTXxz%2BVyZG6ElnY3nco%2BokWn2Aytc%2Fi&X-Amz-Signature=a7b505013975ce2d1861ea5b9b16f0e70c96f4be707018c184d1f35ac7008546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAFWWJ4K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0LZ%2FsMnebVBzRGPv4tTinyK8r%2Brcw%2FO9gsvKwz8qKYAiEApC2zaSaS50ZZCucazSgt%2B7RwmCImhCBveIxWK29OT3oqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd3D8yhmuVXOMmf%2BCrcAwio7a3hhYcYfV63ikzihfmmY7gATN6%2BmALVCDrfGRwkE435Z2dM6e78jwzbbcbQCNCnSEeUjHEjE6yuDVo1OwuozWkUVDrrLjRWZ24pXh98vwVdrRZSj6LrixJFD7x6w8TvvthHpUKbGsBz4Z%2F6OognVOskvAQpv7mhncZAPQLZ4avdMq3%2B3W736sbxtXJ2PGa5DRaTfu%2F2MBwSFSxXB%2F6YU9vB1HE4TzWgCsFEMk5n%2BWWOqvARw7jgXKPPL1zZEtxBxxKMJD4umZ6B59RVK8qYKI7sF6JVbW58AL3OGykiCrMBKeFUZpL5jMIx9LiwlwjW%2F%2BewIbulk63S2kfGBuvip71YYnFM93tMgHY7yGeJYP83V05CWRvKvl%2Fvh0yGuV0Mcr4p4EJFTeHTryFE6GhO92btIoR0vpLqzxW6m0PvwUhq1gCpRSFFx59GBfi1WuJbp8BCuQPhq5HMujpJvU9Jg5BJJ1tSrM4rtmAWHzduujvOMQxXMH4AsdwkUl%2Bf0Vkrn0e3eP6aWvPZf9a9L8rQrOTUU%2BsrhMZEZS6dMhcPXtVCPDn%2Bz33N7ld4fvN5lIDAS7uAdFm0pSDtMXY1qACB%2FmDwtcjb6RwktXeq%2FCxmDJOmHLcbbjgWNsrbMKKd5cQGOqUB8NWWZkkWVskjlPPGZrq8eplxgXNSH4gKk%2BemgEVOb9RuCRL6h9cscJCisPjn8x14vXXFgU5%2FoWaiboGPCobOOfkPt0sc07jtQ7H2r0g1CE8XbKxFrkXl9bZJlZ5HGgk9LK6XRToDLbuTG9JUc03vDKOCvFQD6UuWuJ%2FwXgH8OE5XGqgQEoO7UyIvQCTKoaTXxz%2BVyZG6ElnY3nco%2BokWn2Aytc%2Fi&X-Amz-Signature=882cffe3c499f1e89bcdaee5ef2b3f9ab0a9b9fa901d8e04059133dd5c56cb0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAFWWJ4K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0LZ%2FsMnebVBzRGPv4tTinyK8r%2Brcw%2FO9gsvKwz8qKYAiEApC2zaSaS50ZZCucazSgt%2B7RwmCImhCBveIxWK29OT3oqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd3D8yhmuVXOMmf%2BCrcAwio7a3hhYcYfV63ikzihfmmY7gATN6%2BmALVCDrfGRwkE435Z2dM6e78jwzbbcbQCNCnSEeUjHEjE6yuDVo1OwuozWkUVDrrLjRWZ24pXh98vwVdrRZSj6LrixJFD7x6w8TvvthHpUKbGsBz4Z%2F6OognVOskvAQpv7mhncZAPQLZ4avdMq3%2B3W736sbxtXJ2PGa5DRaTfu%2F2MBwSFSxXB%2F6YU9vB1HE4TzWgCsFEMk5n%2BWWOqvARw7jgXKPPL1zZEtxBxxKMJD4umZ6B59RVK8qYKI7sF6JVbW58AL3OGykiCrMBKeFUZpL5jMIx9LiwlwjW%2F%2BewIbulk63S2kfGBuvip71YYnFM93tMgHY7yGeJYP83V05CWRvKvl%2Fvh0yGuV0Mcr4p4EJFTeHTryFE6GhO92btIoR0vpLqzxW6m0PvwUhq1gCpRSFFx59GBfi1WuJbp8BCuQPhq5HMujpJvU9Jg5BJJ1tSrM4rtmAWHzduujvOMQxXMH4AsdwkUl%2Bf0Vkrn0e3eP6aWvPZf9a9L8rQrOTUU%2BsrhMZEZS6dMhcPXtVCPDn%2Bz33N7ld4fvN5lIDAS7uAdFm0pSDtMXY1qACB%2FmDwtcjb6RwktXeq%2FCxmDJOmHLcbbjgWNsrbMKKd5cQGOqUB8NWWZkkWVskjlPPGZrq8eplxgXNSH4gKk%2BemgEVOb9RuCRL6h9cscJCisPjn8x14vXXFgU5%2FoWaiboGPCobOOfkPt0sc07jtQ7H2r0g1CE8XbKxFrkXl9bZJlZ5HGgk9LK6XRToDLbuTG9JUc03vDKOCvFQD6UuWuJ%2FwXgH8OE5XGqgQEoO7UyIvQCTKoaTXxz%2BVyZG6ElnY3nco%2BokWn2Aytc%2Fi&X-Amz-Signature=b11cdd70198500d01ed4f12713ed8b915aa2283bcf6345f73314d0d7ba408740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAFWWJ4K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0LZ%2FsMnebVBzRGPv4tTinyK8r%2Brcw%2FO9gsvKwz8qKYAiEApC2zaSaS50ZZCucazSgt%2B7RwmCImhCBveIxWK29OT3oqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd3D8yhmuVXOMmf%2BCrcAwio7a3hhYcYfV63ikzihfmmY7gATN6%2BmALVCDrfGRwkE435Z2dM6e78jwzbbcbQCNCnSEeUjHEjE6yuDVo1OwuozWkUVDrrLjRWZ24pXh98vwVdrRZSj6LrixJFD7x6w8TvvthHpUKbGsBz4Z%2F6OognVOskvAQpv7mhncZAPQLZ4avdMq3%2B3W736sbxtXJ2PGa5DRaTfu%2F2MBwSFSxXB%2F6YU9vB1HE4TzWgCsFEMk5n%2BWWOqvARw7jgXKPPL1zZEtxBxxKMJD4umZ6B59RVK8qYKI7sF6JVbW58AL3OGykiCrMBKeFUZpL5jMIx9LiwlwjW%2F%2BewIbulk63S2kfGBuvip71YYnFM93tMgHY7yGeJYP83V05CWRvKvl%2Fvh0yGuV0Mcr4p4EJFTeHTryFE6GhO92btIoR0vpLqzxW6m0PvwUhq1gCpRSFFx59GBfi1WuJbp8BCuQPhq5HMujpJvU9Jg5BJJ1tSrM4rtmAWHzduujvOMQxXMH4AsdwkUl%2Bf0Vkrn0e3eP6aWvPZf9a9L8rQrOTUU%2BsrhMZEZS6dMhcPXtVCPDn%2Bz33N7ld4fvN5lIDAS7uAdFm0pSDtMXY1qACB%2FmDwtcjb6RwktXeq%2FCxmDJOmHLcbbjgWNsrbMKKd5cQGOqUB8NWWZkkWVskjlPPGZrq8eplxgXNSH4gKk%2BemgEVOb9RuCRL6h9cscJCisPjn8x14vXXFgU5%2FoWaiboGPCobOOfkPt0sc07jtQ7H2r0g1CE8XbKxFrkXl9bZJlZ5HGgk9LK6XRToDLbuTG9JUc03vDKOCvFQD6UuWuJ%2FwXgH8OE5XGqgQEoO7UyIvQCTKoaTXxz%2BVyZG6ElnY3nco%2BokWn2Aytc%2Fi&X-Amz-Signature=5b0342becee953e8bf253e2f12a78131829cbb27ee1fd511652411cbce1459ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAFWWJ4K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0LZ%2FsMnebVBzRGPv4tTinyK8r%2Brcw%2FO9gsvKwz8qKYAiEApC2zaSaS50ZZCucazSgt%2B7RwmCImhCBveIxWK29OT3oqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd3D8yhmuVXOMmf%2BCrcAwio7a3hhYcYfV63ikzihfmmY7gATN6%2BmALVCDrfGRwkE435Z2dM6e78jwzbbcbQCNCnSEeUjHEjE6yuDVo1OwuozWkUVDrrLjRWZ24pXh98vwVdrRZSj6LrixJFD7x6w8TvvthHpUKbGsBz4Z%2F6OognVOskvAQpv7mhncZAPQLZ4avdMq3%2B3W736sbxtXJ2PGa5DRaTfu%2F2MBwSFSxXB%2F6YU9vB1HE4TzWgCsFEMk5n%2BWWOqvARw7jgXKPPL1zZEtxBxxKMJD4umZ6B59RVK8qYKI7sF6JVbW58AL3OGykiCrMBKeFUZpL5jMIx9LiwlwjW%2F%2BewIbulk63S2kfGBuvip71YYnFM93tMgHY7yGeJYP83V05CWRvKvl%2Fvh0yGuV0Mcr4p4EJFTeHTryFE6GhO92btIoR0vpLqzxW6m0PvwUhq1gCpRSFFx59GBfi1WuJbp8BCuQPhq5HMujpJvU9Jg5BJJ1tSrM4rtmAWHzduujvOMQxXMH4AsdwkUl%2Bf0Vkrn0e3eP6aWvPZf9a9L8rQrOTUU%2BsrhMZEZS6dMhcPXtVCPDn%2Bz33N7ld4fvN5lIDAS7uAdFm0pSDtMXY1qACB%2FmDwtcjb6RwktXeq%2FCxmDJOmHLcbbjgWNsrbMKKd5cQGOqUB8NWWZkkWVskjlPPGZrq8eplxgXNSH4gKk%2BemgEVOb9RuCRL6h9cscJCisPjn8x14vXXFgU5%2FoWaiboGPCobOOfkPt0sc07jtQ7H2r0g1CE8XbKxFrkXl9bZJlZ5HGgk9LK6XRToDLbuTG9JUc03vDKOCvFQD6UuWuJ%2FwXgH8OE5XGqgQEoO7UyIvQCTKoaTXxz%2BVyZG6ElnY3nco%2BokWn2Aytc%2Fi&X-Amz-Signature=48a7c620ccba71ae7eb6119a11e84ce8a1ceff9b89be1be32df413c13aad1866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAFWWJ4K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0LZ%2FsMnebVBzRGPv4tTinyK8r%2Brcw%2FO9gsvKwz8qKYAiEApC2zaSaS50ZZCucazSgt%2B7RwmCImhCBveIxWK29OT3oqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd3D8yhmuVXOMmf%2BCrcAwio7a3hhYcYfV63ikzihfmmY7gATN6%2BmALVCDrfGRwkE435Z2dM6e78jwzbbcbQCNCnSEeUjHEjE6yuDVo1OwuozWkUVDrrLjRWZ24pXh98vwVdrRZSj6LrixJFD7x6w8TvvthHpUKbGsBz4Z%2F6OognVOskvAQpv7mhncZAPQLZ4avdMq3%2B3W736sbxtXJ2PGa5DRaTfu%2F2MBwSFSxXB%2F6YU9vB1HE4TzWgCsFEMk5n%2BWWOqvARw7jgXKPPL1zZEtxBxxKMJD4umZ6B59RVK8qYKI7sF6JVbW58AL3OGykiCrMBKeFUZpL5jMIx9LiwlwjW%2F%2BewIbulk63S2kfGBuvip71YYnFM93tMgHY7yGeJYP83V05CWRvKvl%2Fvh0yGuV0Mcr4p4EJFTeHTryFE6GhO92btIoR0vpLqzxW6m0PvwUhq1gCpRSFFx59GBfi1WuJbp8BCuQPhq5HMujpJvU9Jg5BJJ1tSrM4rtmAWHzduujvOMQxXMH4AsdwkUl%2Bf0Vkrn0e3eP6aWvPZf9a9L8rQrOTUU%2BsrhMZEZS6dMhcPXtVCPDn%2Bz33N7ld4fvN5lIDAS7uAdFm0pSDtMXY1qACB%2FmDwtcjb6RwktXeq%2FCxmDJOmHLcbbjgWNsrbMKKd5cQGOqUB8NWWZkkWVskjlPPGZrq8eplxgXNSH4gKk%2BemgEVOb9RuCRL6h9cscJCisPjn8x14vXXFgU5%2FoWaiboGPCobOOfkPt0sc07jtQ7H2r0g1CE8XbKxFrkXl9bZJlZ5HGgk9LK6XRToDLbuTG9JUc03vDKOCvFQD6UuWuJ%2FwXgH8OE5XGqgQEoO7UyIvQCTKoaTXxz%2BVyZG6ElnY3nco%2BokWn2Aytc%2Fi&X-Amz-Signature=74574a8965baee679697fcb299ef640702f96acadd42948e323b27dbeebb3e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
