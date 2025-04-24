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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2F33SLN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDkp4govDcD%2BQFVyWdgx7oJ1VJWvrIyS7OP%2BiEcssoJuQIgRO5q%2BuTGQuuLZkHLRyNogcLYTy5SU%2FDmYERMS%2Br76NEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCpMZJ64pVrTdFLdLircAyxUoammS1Duyn5ZxnBBDsqpicb7gzVlGn4FnHjZwt0%2Bsb3NN6w6tIajI1zaLS%2BeDXqJl%2BhnnyCsmft2QROrHEK1GQCVudKNI867vpp8EHEVcNATvdwtuE8Kfv7Nu5Rk%2Bo5m7FJrdxrpOpWvx5kBZZvACsnoV4Dvyam45j0VG%2FZQi0Ws2lzLay12HYDuczwa7rg9PAPMjpRu8i74Fz0gV%2Bt0xb3bZdylKqmJUoQkRX6gSKMjceLwOmRjOCoqV3yg7U9vDGq5Ur0F8qBLwxddq4OyQSeKzgnRaQulQd8n5xREtECPke5FVk%2F7V7fBsUvYNIAC7u%2BqSsWOr%2FfP%2FfpQL8P9jOstdd07NmLQdGyoz5y3DAULaNGtCce9raURTzRt4lnGcVkwsq1ILxwYYszVu8FePUIZh2CO%2BBpnCnwFMN6s10QYe6O6FF33hqwn1PXIROnIXOReGjwFZTKf%2BkmtEHbkR%2BwnFiWIN0RshrL%2FGW5B4jujMCGCjUQPhdzxhOyv9%2BZ1CnH%2FAVpfIFZqw%2BL1eYVljFmxOP82STrsNpSQYviPfO9Y2PzdnjzWspNgvUo%2F13F3N3widlPQoH9A1n7qSWKrdO78eW7k4NWpL1yenqFj40DvzX9G%2FfZ2W5T%2FMIqFqMAGOqUBnOQGSDA%2FXUa8qpEndYEUvkGVHzdhaQ2EzyACooCrzfTYOxPWt3UMJjE56FbRwqWcmcD7G5WZ9s4vt28Sit0Ivw%2F1dBf%2Fv4NH4CxLDJqqBIugX3xEX28gpzNbYCUshOV1M8fgq9YT4kw0XDFGHiS4EZyh%2Be9Reu0573rY%2FkLG1m0xwC8HABLj9YMsYLGRIcJJ6wDF66SLqInspfABLdAD3YA1kuh%2B&X-Amz-Signature=1e1fe7b51b6cc1ccdfb888360035631680a79d01e33696aa647cda8f8b7846f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2F33SLN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDkp4govDcD%2BQFVyWdgx7oJ1VJWvrIyS7OP%2BiEcssoJuQIgRO5q%2BuTGQuuLZkHLRyNogcLYTy5SU%2FDmYERMS%2Br76NEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCpMZJ64pVrTdFLdLircAyxUoammS1Duyn5ZxnBBDsqpicb7gzVlGn4FnHjZwt0%2Bsb3NN6w6tIajI1zaLS%2BeDXqJl%2BhnnyCsmft2QROrHEK1GQCVudKNI867vpp8EHEVcNATvdwtuE8Kfv7Nu5Rk%2Bo5m7FJrdxrpOpWvx5kBZZvACsnoV4Dvyam45j0VG%2FZQi0Ws2lzLay12HYDuczwa7rg9PAPMjpRu8i74Fz0gV%2Bt0xb3bZdylKqmJUoQkRX6gSKMjceLwOmRjOCoqV3yg7U9vDGq5Ur0F8qBLwxddq4OyQSeKzgnRaQulQd8n5xREtECPke5FVk%2F7V7fBsUvYNIAC7u%2BqSsWOr%2FfP%2FfpQL8P9jOstdd07NmLQdGyoz5y3DAULaNGtCce9raURTzRt4lnGcVkwsq1ILxwYYszVu8FePUIZh2CO%2BBpnCnwFMN6s10QYe6O6FF33hqwn1PXIROnIXOReGjwFZTKf%2BkmtEHbkR%2BwnFiWIN0RshrL%2FGW5B4jujMCGCjUQPhdzxhOyv9%2BZ1CnH%2FAVpfIFZqw%2BL1eYVljFmxOP82STrsNpSQYviPfO9Y2PzdnjzWspNgvUo%2F13F3N3widlPQoH9A1n7qSWKrdO78eW7k4NWpL1yenqFj40DvzX9G%2FfZ2W5T%2FMIqFqMAGOqUBnOQGSDA%2FXUa8qpEndYEUvkGVHzdhaQ2EzyACooCrzfTYOxPWt3UMJjE56FbRwqWcmcD7G5WZ9s4vt28Sit0Ivw%2F1dBf%2Fv4NH4CxLDJqqBIugX3xEX28gpzNbYCUshOV1M8fgq9YT4kw0XDFGHiS4EZyh%2Be9Reu0573rY%2FkLG1m0xwC8HABLj9YMsYLGRIcJJ6wDF66SLqInspfABLdAD3YA1kuh%2B&X-Amz-Signature=069e6eb7e0d2432bf66b71937052b7d14ec732c742629f154a7964efc3e49aea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2F33SLN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDkp4govDcD%2BQFVyWdgx7oJ1VJWvrIyS7OP%2BiEcssoJuQIgRO5q%2BuTGQuuLZkHLRyNogcLYTy5SU%2FDmYERMS%2Br76NEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCpMZJ64pVrTdFLdLircAyxUoammS1Duyn5ZxnBBDsqpicb7gzVlGn4FnHjZwt0%2Bsb3NN6w6tIajI1zaLS%2BeDXqJl%2BhnnyCsmft2QROrHEK1GQCVudKNI867vpp8EHEVcNATvdwtuE8Kfv7Nu5Rk%2Bo5m7FJrdxrpOpWvx5kBZZvACsnoV4Dvyam45j0VG%2FZQi0Ws2lzLay12HYDuczwa7rg9PAPMjpRu8i74Fz0gV%2Bt0xb3bZdylKqmJUoQkRX6gSKMjceLwOmRjOCoqV3yg7U9vDGq5Ur0F8qBLwxddq4OyQSeKzgnRaQulQd8n5xREtECPke5FVk%2F7V7fBsUvYNIAC7u%2BqSsWOr%2FfP%2FfpQL8P9jOstdd07NmLQdGyoz5y3DAULaNGtCce9raURTzRt4lnGcVkwsq1ILxwYYszVu8FePUIZh2CO%2BBpnCnwFMN6s10QYe6O6FF33hqwn1PXIROnIXOReGjwFZTKf%2BkmtEHbkR%2BwnFiWIN0RshrL%2FGW5B4jujMCGCjUQPhdzxhOyv9%2BZ1CnH%2FAVpfIFZqw%2BL1eYVljFmxOP82STrsNpSQYviPfO9Y2PzdnjzWspNgvUo%2F13F3N3widlPQoH9A1n7qSWKrdO78eW7k4NWpL1yenqFj40DvzX9G%2FfZ2W5T%2FMIqFqMAGOqUBnOQGSDA%2FXUa8qpEndYEUvkGVHzdhaQ2EzyACooCrzfTYOxPWt3UMJjE56FbRwqWcmcD7G5WZ9s4vt28Sit0Ivw%2F1dBf%2Fv4NH4CxLDJqqBIugX3xEX28gpzNbYCUshOV1M8fgq9YT4kw0XDFGHiS4EZyh%2Be9Reu0573rY%2FkLG1m0xwC8HABLj9YMsYLGRIcJJ6wDF66SLqInspfABLdAD3YA1kuh%2B&X-Amz-Signature=07c708a0a235adf7e131b410a4cfa0f14322f8e872b059d4a713c23222a24719&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2F33SLN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDkp4govDcD%2BQFVyWdgx7oJ1VJWvrIyS7OP%2BiEcssoJuQIgRO5q%2BuTGQuuLZkHLRyNogcLYTy5SU%2FDmYERMS%2Br76NEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCpMZJ64pVrTdFLdLircAyxUoammS1Duyn5ZxnBBDsqpicb7gzVlGn4FnHjZwt0%2Bsb3NN6w6tIajI1zaLS%2BeDXqJl%2BhnnyCsmft2QROrHEK1GQCVudKNI867vpp8EHEVcNATvdwtuE8Kfv7Nu5Rk%2Bo5m7FJrdxrpOpWvx5kBZZvACsnoV4Dvyam45j0VG%2FZQi0Ws2lzLay12HYDuczwa7rg9PAPMjpRu8i74Fz0gV%2Bt0xb3bZdylKqmJUoQkRX6gSKMjceLwOmRjOCoqV3yg7U9vDGq5Ur0F8qBLwxddq4OyQSeKzgnRaQulQd8n5xREtECPke5FVk%2F7V7fBsUvYNIAC7u%2BqSsWOr%2FfP%2FfpQL8P9jOstdd07NmLQdGyoz5y3DAULaNGtCce9raURTzRt4lnGcVkwsq1ILxwYYszVu8FePUIZh2CO%2BBpnCnwFMN6s10QYe6O6FF33hqwn1PXIROnIXOReGjwFZTKf%2BkmtEHbkR%2BwnFiWIN0RshrL%2FGW5B4jujMCGCjUQPhdzxhOyv9%2BZ1CnH%2FAVpfIFZqw%2BL1eYVljFmxOP82STrsNpSQYviPfO9Y2PzdnjzWspNgvUo%2F13F3N3widlPQoH9A1n7qSWKrdO78eW7k4NWpL1yenqFj40DvzX9G%2FfZ2W5T%2FMIqFqMAGOqUBnOQGSDA%2FXUa8qpEndYEUvkGVHzdhaQ2EzyACooCrzfTYOxPWt3UMJjE56FbRwqWcmcD7G5WZ9s4vt28Sit0Ivw%2F1dBf%2Fv4NH4CxLDJqqBIugX3xEX28gpzNbYCUshOV1M8fgq9YT4kw0XDFGHiS4EZyh%2Be9Reu0573rY%2FkLG1m0xwC8HABLj9YMsYLGRIcJJ6wDF66SLqInspfABLdAD3YA1kuh%2B&X-Amz-Signature=205bf5d73631fd9652aece95217c07def480fa63140bb3184699fe60d87edc1d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2F33SLN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDkp4govDcD%2BQFVyWdgx7oJ1VJWvrIyS7OP%2BiEcssoJuQIgRO5q%2BuTGQuuLZkHLRyNogcLYTy5SU%2FDmYERMS%2Br76NEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCpMZJ64pVrTdFLdLircAyxUoammS1Duyn5ZxnBBDsqpicb7gzVlGn4FnHjZwt0%2Bsb3NN6w6tIajI1zaLS%2BeDXqJl%2BhnnyCsmft2QROrHEK1GQCVudKNI867vpp8EHEVcNATvdwtuE8Kfv7Nu5Rk%2Bo5m7FJrdxrpOpWvx5kBZZvACsnoV4Dvyam45j0VG%2FZQi0Ws2lzLay12HYDuczwa7rg9PAPMjpRu8i74Fz0gV%2Bt0xb3bZdylKqmJUoQkRX6gSKMjceLwOmRjOCoqV3yg7U9vDGq5Ur0F8qBLwxddq4OyQSeKzgnRaQulQd8n5xREtECPke5FVk%2F7V7fBsUvYNIAC7u%2BqSsWOr%2FfP%2FfpQL8P9jOstdd07NmLQdGyoz5y3DAULaNGtCce9raURTzRt4lnGcVkwsq1ILxwYYszVu8FePUIZh2CO%2BBpnCnwFMN6s10QYe6O6FF33hqwn1PXIROnIXOReGjwFZTKf%2BkmtEHbkR%2BwnFiWIN0RshrL%2FGW5B4jujMCGCjUQPhdzxhOyv9%2BZ1CnH%2FAVpfIFZqw%2BL1eYVljFmxOP82STrsNpSQYviPfO9Y2PzdnjzWspNgvUo%2F13F3N3widlPQoH9A1n7qSWKrdO78eW7k4NWpL1yenqFj40DvzX9G%2FfZ2W5T%2FMIqFqMAGOqUBnOQGSDA%2FXUa8qpEndYEUvkGVHzdhaQ2EzyACooCrzfTYOxPWt3UMJjE56FbRwqWcmcD7G5WZ9s4vt28Sit0Ivw%2F1dBf%2Fv4NH4CxLDJqqBIugX3xEX28gpzNbYCUshOV1M8fgq9YT4kw0XDFGHiS4EZyh%2Be9Reu0573rY%2FkLG1m0xwC8HABLj9YMsYLGRIcJJ6wDF66SLqInspfABLdAD3YA1kuh%2B&X-Amz-Signature=44cd7c469b866c9ecb881c8239ccaec003d718a4082226ddd8061a040a93ec23&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2F33SLN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDkp4govDcD%2BQFVyWdgx7oJ1VJWvrIyS7OP%2BiEcssoJuQIgRO5q%2BuTGQuuLZkHLRyNogcLYTy5SU%2FDmYERMS%2Br76NEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCpMZJ64pVrTdFLdLircAyxUoammS1Duyn5ZxnBBDsqpicb7gzVlGn4FnHjZwt0%2Bsb3NN6w6tIajI1zaLS%2BeDXqJl%2BhnnyCsmft2QROrHEK1GQCVudKNI867vpp8EHEVcNATvdwtuE8Kfv7Nu5Rk%2Bo5m7FJrdxrpOpWvx5kBZZvACsnoV4Dvyam45j0VG%2FZQi0Ws2lzLay12HYDuczwa7rg9PAPMjpRu8i74Fz0gV%2Bt0xb3bZdylKqmJUoQkRX6gSKMjceLwOmRjOCoqV3yg7U9vDGq5Ur0F8qBLwxddq4OyQSeKzgnRaQulQd8n5xREtECPke5FVk%2F7V7fBsUvYNIAC7u%2BqSsWOr%2FfP%2FfpQL8P9jOstdd07NmLQdGyoz5y3DAULaNGtCce9raURTzRt4lnGcVkwsq1ILxwYYszVu8FePUIZh2CO%2BBpnCnwFMN6s10QYe6O6FF33hqwn1PXIROnIXOReGjwFZTKf%2BkmtEHbkR%2BwnFiWIN0RshrL%2FGW5B4jujMCGCjUQPhdzxhOyv9%2BZ1CnH%2FAVpfIFZqw%2BL1eYVljFmxOP82STrsNpSQYviPfO9Y2PzdnjzWspNgvUo%2F13F3N3widlPQoH9A1n7qSWKrdO78eW7k4NWpL1yenqFj40DvzX9G%2FfZ2W5T%2FMIqFqMAGOqUBnOQGSDA%2FXUa8qpEndYEUvkGVHzdhaQ2EzyACooCrzfTYOxPWt3UMJjE56FbRwqWcmcD7G5WZ9s4vt28Sit0Ivw%2F1dBf%2Fv4NH4CxLDJqqBIugX3xEX28gpzNbYCUshOV1M8fgq9YT4kw0XDFGHiS4EZyh%2Be9Reu0573rY%2FkLG1m0xwC8HABLj9YMsYLGRIcJJ6wDF66SLqInspfABLdAD3YA1kuh%2B&X-Amz-Signature=7eb292b017f1ca103a30a07de675d415325a5e0eb37347c917f3aff82932047a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2F33SLN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDkp4govDcD%2BQFVyWdgx7oJ1VJWvrIyS7OP%2BiEcssoJuQIgRO5q%2BuTGQuuLZkHLRyNogcLYTy5SU%2FDmYERMS%2Br76NEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCpMZJ64pVrTdFLdLircAyxUoammS1Duyn5ZxnBBDsqpicb7gzVlGn4FnHjZwt0%2Bsb3NN6w6tIajI1zaLS%2BeDXqJl%2BhnnyCsmft2QROrHEK1GQCVudKNI867vpp8EHEVcNATvdwtuE8Kfv7Nu5Rk%2Bo5m7FJrdxrpOpWvx5kBZZvACsnoV4Dvyam45j0VG%2FZQi0Ws2lzLay12HYDuczwa7rg9PAPMjpRu8i74Fz0gV%2Bt0xb3bZdylKqmJUoQkRX6gSKMjceLwOmRjOCoqV3yg7U9vDGq5Ur0F8qBLwxddq4OyQSeKzgnRaQulQd8n5xREtECPke5FVk%2F7V7fBsUvYNIAC7u%2BqSsWOr%2FfP%2FfpQL8P9jOstdd07NmLQdGyoz5y3DAULaNGtCce9raURTzRt4lnGcVkwsq1ILxwYYszVu8FePUIZh2CO%2BBpnCnwFMN6s10QYe6O6FF33hqwn1PXIROnIXOReGjwFZTKf%2BkmtEHbkR%2BwnFiWIN0RshrL%2FGW5B4jujMCGCjUQPhdzxhOyv9%2BZ1CnH%2FAVpfIFZqw%2BL1eYVljFmxOP82STrsNpSQYviPfO9Y2PzdnjzWspNgvUo%2F13F3N3widlPQoH9A1n7qSWKrdO78eW7k4NWpL1yenqFj40DvzX9G%2FfZ2W5T%2FMIqFqMAGOqUBnOQGSDA%2FXUa8qpEndYEUvkGVHzdhaQ2EzyACooCrzfTYOxPWt3UMJjE56FbRwqWcmcD7G5WZ9s4vt28Sit0Ivw%2F1dBf%2Fv4NH4CxLDJqqBIugX3xEX28gpzNbYCUshOV1M8fgq9YT4kw0XDFGHiS4EZyh%2Be9Reu0573rY%2FkLG1m0xwC8HABLj9YMsYLGRIcJJ6wDF66SLqInspfABLdAD3YA1kuh%2B&X-Amz-Signature=6f9601f475e0e777c5a5671bf6323917bffde94d59812f7fd7821ae89b229314&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
