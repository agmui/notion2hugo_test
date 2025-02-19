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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGWTNOE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIG%2BYejbsqorzC4hYNE5eWc3nJm13Kj229F6wjfWH5frfAiEA1m%2F7jqZt%2FTYgxute9ujRjvjFVUb%2FhtHdoiCPy01gUjQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxfRyZrqnG5f1NVuyrcAzwx0J24xek7yJbcsZc9uCinvC1NRJ8YkMWyVsGKCGZzVUgyUMbpAQbdzEqnMXqI%2F%2BnHMP1uUShSv8yQfL9AflqevDcMtXRCd9kPUZfXFerh3axMSJNmSa3%2FYC%2BIujrbud%2BX8A3%2BOrVHPvkjQsLitpHLVDZbDzSvnazMQZG8Ev38W7KB3OOYY7%2Fx7c3tzJHhb%2FlmYWh3ZIZVkZl6FIulkavs1o%2F2ZOkhTg5ZUitVQishu62gX4LWHAEcG5YOBBaj1akaZyrLhMbb57jrUGEGk0QvZpJQFc72ky%2FT96aVpIJGYfRQAkQDRYa%2B8pDQvH62QcjiUR9H5Mcp3ezrSz35wLliVxxylDEw5OMGYZBzg0Iebmuq%2BTAUOWOf2%2B3HAqY1XDKnHFidfzToh4LFqfd8LZaYFdW9EjB6wGIQpQxj1GT5KuZHJtckPuAcgbtHs3lUKUH5P880Na2of1T0XEadupJNt8SHIqjV%2BaCjT4W6uHL%2B9BobO4NEUJxlb51FpJJWfoXRur5mKjL2fYbtwHjyQqq4kYSyQjEfYG6TkIKHQM%2BptHXF272pCYDUa5zmsLJG0wsA46WLBn4clG%2B6P4hcvaAFSfWH6aOSZ4YYSd5K3Q4dTYUCzfwqNuAtQdd2MKPp1L0GOqUBFJrygcpuutVV6C3w72BV%2BJS0bWgCULBKsfyp2bTeoUVI87YC9lZqfjrEfTPxie1GwJvxAyouQTZluduEZwJwAJdEOORC90e%2BQdNc9yHuIxIoF1TCDCpblE6vkLd%2FssURA0NVGSerdTJt5jKGRzZgo6Gsp3aOGn6Zn0OhYX2Ntb423vp5GJz64%2FZQPprk9UXXOH6ZxJ%2FWeaWrcREhsWMIH0qaIchf&X-Amz-Signature=663c3f22bd13cdb956b9ef21864df5dab201df447b1738d15f6a3fa6ea06952b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGWTNOE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIG%2BYejbsqorzC4hYNE5eWc3nJm13Kj229F6wjfWH5frfAiEA1m%2F7jqZt%2FTYgxute9ujRjvjFVUb%2FhtHdoiCPy01gUjQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxfRyZrqnG5f1NVuyrcAzwx0J24xek7yJbcsZc9uCinvC1NRJ8YkMWyVsGKCGZzVUgyUMbpAQbdzEqnMXqI%2F%2BnHMP1uUShSv8yQfL9AflqevDcMtXRCd9kPUZfXFerh3axMSJNmSa3%2FYC%2BIujrbud%2BX8A3%2BOrVHPvkjQsLitpHLVDZbDzSvnazMQZG8Ev38W7KB3OOYY7%2Fx7c3tzJHhb%2FlmYWh3ZIZVkZl6FIulkavs1o%2F2ZOkhTg5ZUitVQishu62gX4LWHAEcG5YOBBaj1akaZyrLhMbb57jrUGEGk0QvZpJQFc72ky%2FT96aVpIJGYfRQAkQDRYa%2B8pDQvH62QcjiUR9H5Mcp3ezrSz35wLliVxxylDEw5OMGYZBzg0Iebmuq%2BTAUOWOf2%2B3HAqY1XDKnHFidfzToh4LFqfd8LZaYFdW9EjB6wGIQpQxj1GT5KuZHJtckPuAcgbtHs3lUKUH5P880Na2of1T0XEadupJNt8SHIqjV%2BaCjT4W6uHL%2B9BobO4NEUJxlb51FpJJWfoXRur5mKjL2fYbtwHjyQqq4kYSyQjEfYG6TkIKHQM%2BptHXF272pCYDUa5zmsLJG0wsA46WLBn4clG%2B6P4hcvaAFSfWH6aOSZ4YYSd5K3Q4dTYUCzfwqNuAtQdd2MKPp1L0GOqUBFJrygcpuutVV6C3w72BV%2BJS0bWgCULBKsfyp2bTeoUVI87YC9lZqfjrEfTPxie1GwJvxAyouQTZluduEZwJwAJdEOORC90e%2BQdNc9yHuIxIoF1TCDCpblE6vkLd%2FssURA0NVGSerdTJt5jKGRzZgo6Gsp3aOGn6Zn0OhYX2Ntb423vp5GJz64%2FZQPprk9UXXOH6ZxJ%2FWeaWrcREhsWMIH0qaIchf&X-Amz-Signature=0e20ca6125c9cac736b8b30b690bf810a7f23841fabfe19c8ac161296eb4552c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGWTNOE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIG%2BYejbsqorzC4hYNE5eWc3nJm13Kj229F6wjfWH5frfAiEA1m%2F7jqZt%2FTYgxute9ujRjvjFVUb%2FhtHdoiCPy01gUjQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxfRyZrqnG5f1NVuyrcAzwx0J24xek7yJbcsZc9uCinvC1NRJ8YkMWyVsGKCGZzVUgyUMbpAQbdzEqnMXqI%2F%2BnHMP1uUShSv8yQfL9AflqevDcMtXRCd9kPUZfXFerh3axMSJNmSa3%2FYC%2BIujrbud%2BX8A3%2BOrVHPvkjQsLitpHLVDZbDzSvnazMQZG8Ev38W7KB3OOYY7%2Fx7c3tzJHhb%2FlmYWh3ZIZVkZl6FIulkavs1o%2F2ZOkhTg5ZUitVQishu62gX4LWHAEcG5YOBBaj1akaZyrLhMbb57jrUGEGk0QvZpJQFc72ky%2FT96aVpIJGYfRQAkQDRYa%2B8pDQvH62QcjiUR9H5Mcp3ezrSz35wLliVxxylDEw5OMGYZBzg0Iebmuq%2BTAUOWOf2%2B3HAqY1XDKnHFidfzToh4LFqfd8LZaYFdW9EjB6wGIQpQxj1GT5KuZHJtckPuAcgbtHs3lUKUH5P880Na2of1T0XEadupJNt8SHIqjV%2BaCjT4W6uHL%2B9BobO4NEUJxlb51FpJJWfoXRur5mKjL2fYbtwHjyQqq4kYSyQjEfYG6TkIKHQM%2BptHXF272pCYDUa5zmsLJG0wsA46WLBn4clG%2B6P4hcvaAFSfWH6aOSZ4YYSd5K3Q4dTYUCzfwqNuAtQdd2MKPp1L0GOqUBFJrygcpuutVV6C3w72BV%2BJS0bWgCULBKsfyp2bTeoUVI87YC9lZqfjrEfTPxie1GwJvxAyouQTZluduEZwJwAJdEOORC90e%2BQdNc9yHuIxIoF1TCDCpblE6vkLd%2FssURA0NVGSerdTJt5jKGRzZgo6Gsp3aOGn6Zn0OhYX2Ntb423vp5GJz64%2FZQPprk9UXXOH6ZxJ%2FWeaWrcREhsWMIH0qaIchf&X-Amz-Signature=db159e372c131152315ac129ddd5c716458b5f0d503d2321aba359b6beac3dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGWTNOE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIG%2BYejbsqorzC4hYNE5eWc3nJm13Kj229F6wjfWH5frfAiEA1m%2F7jqZt%2FTYgxute9ujRjvjFVUb%2FhtHdoiCPy01gUjQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxfRyZrqnG5f1NVuyrcAzwx0J24xek7yJbcsZc9uCinvC1NRJ8YkMWyVsGKCGZzVUgyUMbpAQbdzEqnMXqI%2F%2BnHMP1uUShSv8yQfL9AflqevDcMtXRCd9kPUZfXFerh3axMSJNmSa3%2FYC%2BIujrbud%2BX8A3%2BOrVHPvkjQsLitpHLVDZbDzSvnazMQZG8Ev38W7KB3OOYY7%2Fx7c3tzJHhb%2FlmYWh3ZIZVkZl6FIulkavs1o%2F2ZOkhTg5ZUitVQishu62gX4LWHAEcG5YOBBaj1akaZyrLhMbb57jrUGEGk0QvZpJQFc72ky%2FT96aVpIJGYfRQAkQDRYa%2B8pDQvH62QcjiUR9H5Mcp3ezrSz35wLliVxxylDEw5OMGYZBzg0Iebmuq%2BTAUOWOf2%2B3HAqY1XDKnHFidfzToh4LFqfd8LZaYFdW9EjB6wGIQpQxj1GT5KuZHJtckPuAcgbtHs3lUKUH5P880Na2of1T0XEadupJNt8SHIqjV%2BaCjT4W6uHL%2B9BobO4NEUJxlb51FpJJWfoXRur5mKjL2fYbtwHjyQqq4kYSyQjEfYG6TkIKHQM%2BptHXF272pCYDUa5zmsLJG0wsA46WLBn4clG%2B6P4hcvaAFSfWH6aOSZ4YYSd5K3Q4dTYUCzfwqNuAtQdd2MKPp1L0GOqUBFJrygcpuutVV6C3w72BV%2BJS0bWgCULBKsfyp2bTeoUVI87YC9lZqfjrEfTPxie1GwJvxAyouQTZluduEZwJwAJdEOORC90e%2BQdNc9yHuIxIoF1TCDCpblE6vkLd%2FssURA0NVGSerdTJt5jKGRzZgo6Gsp3aOGn6Zn0OhYX2Ntb423vp5GJz64%2FZQPprk9UXXOH6ZxJ%2FWeaWrcREhsWMIH0qaIchf&X-Amz-Signature=2d15631bf87d9720c0404177f70b4c7e2145805510431f6e46f1f07be22a4787&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGWTNOE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIG%2BYejbsqorzC4hYNE5eWc3nJm13Kj229F6wjfWH5frfAiEA1m%2F7jqZt%2FTYgxute9ujRjvjFVUb%2FhtHdoiCPy01gUjQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxfRyZrqnG5f1NVuyrcAzwx0J24xek7yJbcsZc9uCinvC1NRJ8YkMWyVsGKCGZzVUgyUMbpAQbdzEqnMXqI%2F%2BnHMP1uUShSv8yQfL9AflqevDcMtXRCd9kPUZfXFerh3axMSJNmSa3%2FYC%2BIujrbud%2BX8A3%2BOrVHPvkjQsLitpHLVDZbDzSvnazMQZG8Ev38W7KB3OOYY7%2Fx7c3tzJHhb%2FlmYWh3ZIZVkZl6FIulkavs1o%2F2ZOkhTg5ZUitVQishu62gX4LWHAEcG5YOBBaj1akaZyrLhMbb57jrUGEGk0QvZpJQFc72ky%2FT96aVpIJGYfRQAkQDRYa%2B8pDQvH62QcjiUR9H5Mcp3ezrSz35wLliVxxylDEw5OMGYZBzg0Iebmuq%2BTAUOWOf2%2B3HAqY1XDKnHFidfzToh4LFqfd8LZaYFdW9EjB6wGIQpQxj1GT5KuZHJtckPuAcgbtHs3lUKUH5P880Na2of1T0XEadupJNt8SHIqjV%2BaCjT4W6uHL%2B9BobO4NEUJxlb51FpJJWfoXRur5mKjL2fYbtwHjyQqq4kYSyQjEfYG6TkIKHQM%2BptHXF272pCYDUa5zmsLJG0wsA46WLBn4clG%2B6P4hcvaAFSfWH6aOSZ4YYSd5K3Q4dTYUCzfwqNuAtQdd2MKPp1L0GOqUBFJrygcpuutVV6C3w72BV%2BJS0bWgCULBKsfyp2bTeoUVI87YC9lZqfjrEfTPxie1GwJvxAyouQTZluduEZwJwAJdEOORC90e%2BQdNc9yHuIxIoF1TCDCpblE6vkLd%2FssURA0NVGSerdTJt5jKGRzZgo6Gsp3aOGn6Zn0OhYX2Ntb423vp5GJz64%2FZQPprk9UXXOH6ZxJ%2FWeaWrcREhsWMIH0qaIchf&X-Amz-Signature=199114d6733a41c0442c2e9e3d683f804d5152939cc01d2c3399abe64ec50db4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGWTNOE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIG%2BYejbsqorzC4hYNE5eWc3nJm13Kj229F6wjfWH5frfAiEA1m%2F7jqZt%2FTYgxute9ujRjvjFVUb%2FhtHdoiCPy01gUjQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxfRyZrqnG5f1NVuyrcAzwx0J24xek7yJbcsZc9uCinvC1NRJ8YkMWyVsGKCGZzVUgyUMbpAQbdzEqnMXqI%2F%2BnHMP1uUShSv8yQfL9AflqevDcMtXRCd9kPUZfXFerh3axMSJNmSa3%2FYC%2BIujrbud%2BX8A3%2BOrVHPvkjQsLitpHLVDZbDzSvnazMQZG8Ev38W7KB3OOYY7%2Fx7c3tzJHhb%2FlmYWh3ZIZVkZl6FIulkavs1o%2F2ZOkhTg5ZUitVQishu62gX4LWHAEcG5YOBBaj1akaZyrLhMbb57jrUGEGk0QvZpJQFc72ky%2FT96aVpIJGYfRQAkQDRYa%2B8pDQvH62QcjiUR9H5Mcp3ezrSz35wLliVxxylDEw5OMGYZBzg0Iebmuq%2BTAUOWOf2%2B3HAqY1XDKnHFidfzToh4LFqfd8LZaYFdW9EjB6wGIQpQxj1GT5KuZHJtckPuAcgbtHs3lUKUH5P880Na2of1T0XEadupJNt8SHIqjV%2BaCjT4W6uHL%2B9BobO4NEUJxlb51FpJJWfoXRur5mKjL2fYbtwHjyQqq4kYSyQjEfYG6TkIKHQM%2BptHXF272pCYDUa5zmsLJG0wsA46WLBn4clG%2B6P4hcvaAFSfWH6aOSZ4YYSd5K3Q4dTYUCzfwqNuAtQdd2MKPp1L0GOqUBFJrygcpuutVV6C3w72BV%2BJS0bWgCULBKsfyp2bTeoUVI87YC9lZqfjrEfTPxie1GwJvxAyouQTZluduEZwJwAJdEOORC90e%2BQdNc9yHuIxIoF1TCDCpblE6vkLd%2FssURA0NVGSerdTJt5jKGRzZgo6Gsp3aOGn6Zn0OhYX2Ntb423vp5GJz64%2FZQPprk9UXXOH6ZxJ%2FWeaWrcREhsWMIH0qaIchf&X-Amz-Signature=a71ca588b4ffc3df3af75603b23f79276258622fae6216215f6657d0d5ab699e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGWTNOE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIG%2BYejbsqorzC4hYNE5eWc3nJm13Kj229F6wjfWH5frfAiEA1m%2F7jqZt%2FTYgxute9ujRjvjFVUb%2FhtHdoiCPy01gUjQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxfRyZrqnG5f1NVuyrcAzwx0J24xek7yJbcsZc9uCinvC1NRJ8YkMWyVsGKCGZzVUgyUMbpAQbdzEqnMXqI%2F%2BnHMP1uUShSv8yQfL9AflqevDcMtXRCd9kPUZfXFerh3axMSJNmSa3%2FYC%2BIujrbud%2BX8A3%2BOrVHPvkjQsLitpHLVDZbDzSvnazMQZG8Ev38W7KB3OOYY7%2Fx7c3tzJHhb%2FlmYWh3ZIZVkZl6FIulkavs1o%2F2ZOkhTg5ZUitVQishu62gX4LWHAEcG5YOBBaj1akaZyrLhMbb57jrUGEGk0QvZpJQFc72ky%2FT96aVpIJGYfRQAkQDRYa%2B8pDQvH62QcjiUR9H5Mcp3ezrSz35wLliVxxylDEw5OMGYZBzg0Iebmuq%2BTAUOWOf2%2B3HAqY1XDKnHFidfzToh4LFqfd8LZaYFdW9EjB6wGIQpQxj1GT5KuZHJtckPuAcgbtHs3lUKUH5P880Na2of1T0XEadupJNt8SHIqjV%2BaCjT4W6uHL%2B9BobO4NEUJxlb51FpJJWfoXRur5mKjL2fYbtwHjyQqq4kYSyQjEfYG6TkIKHQM%2BptHXF272pCYDUa5zmsLJG0wsA46WLBn4clG%2B6P4hcvaAFSfWH6aOSZ4YYSd5K3Q4dTYUCzfwqNuAtQdd2MKPp1L0GOqUBFJrygcpuutVV6C3w72BV%2BJS0bWgCULBKsfyp2bTeoUVI87YC9lZqfjrEfTPxie1GwJvxAyouQTZluduEZwJwAJdEOORC90e%2BQdNc9yHuIxIoF1TCDCpblE6vkLd%2FssURA0NVGSerdTJt5jKGRzZgo6Gsp3aOGn6Zn0OhYX2Ntb423vp5GJz64%2FZQPprk9UXXOH6ZxJ%2FWeaWrcREhsWMIH0qaIchf&X-Amz-Signature=5ca654887d343d39fd4a291b13d55b968ec79eef36b29fa27176c3178cb3ccc3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
