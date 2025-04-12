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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRN5TH7U%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDt6hYVXI0%2FzZxxHb8OX1c6Vg%2BVaYKbH5w9AvvgxK5B8AIgMYsp5H%2B8bs%2FWtayEyd3GcMeK7aC%2BF%2FWkm64M1AbJq04qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmTryw9Y0TJLjUqdCrcA0C2RoRGXHKdpNqz%2Bhk6aC8TG1BHtqz6lKQG%2B9RXRV%2F%2Fh%2BVy2WX17MD33jtitWtEdoYPjFSLWokPp0AA6ySQo7L%2FH9x69o3e8IhsiSWsumCzsQfMiJcJmoYzxrAV3551DaDPltjVudU7d6gbONyGZ51CGsuXkrAb0Y1mDrnGieNS7LGXMzNSkYl%2B0fuEbKX%2FhqfKBC7f%2Fyqn6MIoctVS7E6fD3SH%2FfI0yo28XCoUfl3kbFJps%2FysnSeirTQSa9wWs%2FRuXl%2FHawlqn%2FT0ORd3odPIxRxjkmC3WgfsgV4KHXm2fAUK2Nsydc7ulaZ8hJeh4r5wYcgOkeQ6TQA%2FYau%2F%2Frh7C1%2FAO47yQRwgO8ySX6Xqok1t0BjVAufGmuMeuLVcYwjptB8Uu7BefSNLLDRZvFcHAjqOn%2BEtfWqlB8rLtZypAPiPwZTFL1zh34bMDzm%2FyA4%2FXT0hlDFv%2ByWT0C6MnAlcH4AKL99wC9aCseo6Zm35H3u%2Fpk3Vq7pF0uSpbvahpx%2FTZdssertPOVVO12wRj4Gabo3QLCb8mQo8MH22%2Fe1kGfC4rpmV%2Fpw4kSeI63tzLekFP8Adizgi3wQY5bU9NoYjqymqSTBsYJ57vkZXevtoNBHpFQuWy3bWMMvWMPX66b8GOqUB7SMginKeNPXvHMpye3agDix4QZmby3CijOm16kNJmCEkcOVtSQ0jmm68KqqIW%2BjA0fTw4uHRyWLiy2%2BVRNuzm1x8Zp%2BVdRhPkAPB8TX4oWUzZsA4WtGzoW6pv3IgUhiFS0X3ItljeI79rBZyGM9qiIEDNWC%2BAuIa%2BOMOKyhWX9LSJ4ihHXgOcoiDN4tNVQ6ddZERecCXKG3WA4XGb0F%2F3zPpJjBx&X-Amz-Signature=69d064607fb3f747721b1cbe58f4fc1d38c32a8a29e6f5ce7bbda2be7f32817b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRN5TH7U%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDt6hYVXI0%2FzZxxHb8OX1c6Vg%2BVaYKbH5w9AvvgxK5B8AIgMYsp5H%2B8bs%2FWtayEyd3GcMeK7aC%2BF%2FWkm64M1AbJq04qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmTryw9Y0TJLjUqdCrcA0C2RoRGXHKdpNqz%2Bhk6aC8TG1BHtqz6lKQG%2B9RXRV%2F%2Fh%2BVy2WX17MD33jtitWtEdoYPjFSLWokPp0AA6ySQo7L%2FH9x69o3e8IhsiSWsumCzsQfMiJcJmoYzxrAV3551DaDPltjVudU7d6gbONyGZ51CGsuXkrAb0Y1mDrnGieNS7LGXMzNSkYl%2B0fuEbKX%2FhqfKBC7f%2Fyqn6MIoctVS7E6fD3SH%2FfI0yo28XCoUfl3kbFJps%2FysnSeirTQSa9wWs%2FRuXl%2FHawlqn%2FT0ORd3odPIxRxjkmC3WgfsgV4KHXm2fAUK2Nsydc7ulaZ8hJeh4r5wYcgOkeQ6TQA%2FYau%2F%2Frh7C1%2FAO47yQRwgO8ySX6Xqok1t0BjVAufGmuMeuLVcYwjptB8Uu7BefSNLLDRZvFcHAjqOn%2BEtfWqlB8rLtZypAPiPwZTFL1zh34bMDzm%2FyA4%2FXT0hlDFv%2ByWT0C6MnAlcH4AKL99wC9aCseo6Zm35H3u%2Fpk3Vq7pF0uSpbvahpx%2FTZdssertPOVVO12wRj4Gabo3QLCb8mQo8MH22%2Fe1kGfC4rpmV%2Fpw4kSeI63tzLekFP8Adizgi3wQY5bU9NoYjqymqSTBsYJ57vkZXevtoNBHpFQuWy3bWMMvWMPX66b8GOqUB7SMginKeNPXvHMpye3agDix4QZmby3CijOm16kNJmCEkcOVtSQ0jmm68KqqIW%2BjA0fTw4uHRyWLiy2%2BVRNuzm1x8Zp%2BVdRhPkAPB8TX4oWUzZsA4WtGzoW6pv3IgUhiFS0X3ItljeI79rBZyGM9qiIEDNWC%2BAuIa%2BOMOKyhWX9LSJ4ihHXgOcoiDN4tNVQ6ddZERecCXKG3WA4XGb0F%2F3zPpJjBx&X-Amz-Signature=8c7d5b5a85e2260fae6b14ca210c2d3814d8cc3068cfb7831353c220b656d9ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRN5TH7U%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDt6hYVXI0%2FzZxxHb8OX1c6Vg%2BVaYKbH5w9AvvgxK5B8AIgMYsp5H%2B8bs%2FWtayEyd3GcMeK7aC%2BF%2FWkm64M1AbJq04qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmTryw9Y0TJLjUqdCrcA0C2RoRGXHKdpNqz%2Bhk6aC8TG1BHtqz6lKQG%2B9RXRV%2F%2Fh%2BVy2WX17MD33jtitWtEdoYPjFSLWokPp0AA6ySQo7L%2FH9x69o3e8IhsiSWsumCzsQfMiJcJmoYzxrAV3551DaDPltjVudU7d6gbONyGZ51CGsuXkrAb0Y1mDrnGieNS7LGXMzNSkYl%2B0fuEbKX%2FhqfKBC7f%2Fyqn6MIoctVS7E6fD3SH%2FfI0yo28XCoUfl3kbFJps%2FysnSeirTQSa9wWs%2FRuXl%2FHawlqn%2FT0ORd3odPIxRxjkmC3WgfsgV4KHXm2fAUK2Nsydc7ulaZ8hJeh4r5wYcgOkeQ6TQA%2FYau%2F%2Frh7C1%2FAO47yQRwgO8ySX6Xqok1t0BjVAufGmuMeuLVcYwjptB8Uu7BefSNLLDRZvFcHAjqOn%2BEtfWqlB8rLtZypAPiPwZTFL1zh34bMDzm%2FyA4%2FXT0hlDFv%2ByWT0C6MnAlcH4AKL99wC9aCseo6Zm35H3u%2Fpk3Vq7pF0uSpbvahpx%2FTZdssertPOVVO12wRj4Gabo3QLCb8mQo8MH22%2Fe1kGfC4rpmV%2Fpw4kSeI63tzLekFP8Adizgi3wQY5bU9NoYjqymqSTBsYJ57vkZXevtoNBHpFQuWy3bWMMvWMPX66b8GOqUB7SMginKeNPXvHMpye3agDix4QZmby3CijOm16kNJmCEkcOVtSQ0jmm68KqqIW%2BjA0fTw4uHRyWLiy2%2BVRNuzm1x8Zp%2BVdRhPkAPB8TX4oWUzZsA4WtGzoW6pv3IgUhiFS0X3ItljeI79rBZyGM9qiIEDNWC%2BAuIa%2BOMOKyhWX9LSJ4ihHXgOcoiDN4tNVQ6ddZERecCXKG3WA4XGb0F%2F3zPpJjBx&X-Amz-Signature=779ddf0628c7aa1599ffe548596e5f2f1bc435b5348f91737fefd6056b52232c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRN5TH7U%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDt6hYVXI0%2FzZxxHb8OX1c6Vg%2BVaYKbH5w9AvvgxK5B8AIgMYsp5H%2B8bs%2FWtayEyd3GcMeK7aC%2BF%2FWkm64M1AbJq04qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmTryw9Y0TJLjUqdCrcA0C2RoRGXHKdpNqz%2Bhk6aC8TG1BHtqz6lKQG%2B9RXRV%2F%2Fh%2BVy2WX17MD33jtitWtEdoYPjFSLWokPp0AA6ySQo7L%2FH9x69o3e8IhsiSWsumCzsQfMiJcJmoYzxrAV3551DaDPltjVudU7d6gbONyGZ51CGsuXkrAb0Y1mDrnGieNS7LGXMzNSkYl%2B0fuEbKX%2FhqfKBC7f%2Fyqn6MIoctVS7E6fD3SH%2FfI0yo28XCoUfl3kbFJps%2FysnSeirTQSa9wWs%2FRuXl%2FHawlqn%2FT0ORd3odPIxRxjkmC3WgfsgV4KHXm2fAUK2Nsydc7ulaZ8hJeh4r5wYcgOkeQ6TQA%2FYau%2F%2Frh7C1%2FAO47yQRwgO8ySX6Xqok1t0BjVAufGmuMeuLVcYwjptB8Uu7BefSNLLDRZvFcHAjqOn%2BEtfWqlB8rLtZypAPiPwZTFL1zh34bMDzm%2FyA4%2FXT0hlDFv%2ByWT0C6MnAlcH4AKL99wC9aCseo6Zm35H3u%2Fpk3Vq7pF0uSpbvahpx%2FTZdssertPOVVO12wRj4Gabo3QLCb8mQo8MH22%2Fe1kGfC4rpmV%2Fpw4kSeI63tzLekFP8Adizgi3wQY5bU9NoYjqymqSTBsYJ57vkZXevtoNBHpFQuWy3bWMMvWMPX66b8GOqUB7SMginKeNPXvHMpye3agDix4QZmby3CijOm16kNJmCEkcOVtSQ0jmm68KqqIW%2BjA0fTw4uHRyWLiy2%2BVRNuzm1x8Zp%2BVdRhPkAPB8TX4oWUzZsA4WtGzoW6pv3IgUhiFS0X3ItljeI79rBZyGM9qiIEDNWC%2BAuIa%2BOMOKyhWX9LSJ4ihHXgOcoiDN4tNVQ6ddZERecCXKG3WA4XGb0F%2F3zPpJjBx&X-Amz-Signature=a62210e9a7672bc91f9b7b57021b18ed306028e538f9eb7d18a71a79038d084d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRN5TH7U%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDt6hYVXI0%2FzZxxHb8OX1c6Vg%2BVaYKbH5w9AvvgxK5B8AIgMYsp5H%2B8bs%2FWtayEyd3GcMeK7aC%2BF%2FWkm64M1AbJq04qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmTryw9Y0TJLjUqdCrcA0C2RoRGXHKdpNqz%2Bhk6aC8TG1BHtqz6lKQG%2B9RXRV%2F%2Fh%2BVy2WX17MD33jtitWtEdoYPjFSLWokPp0AA6ySQo7L%2FH9x69o3e8IhsiSWsumCzsQfMiJcJmoYzxrAV3551DaDPltjVudU7d6gbONyGZ51CGsuXkrAb0Y1mDrnGieNS7LGXMzNSkYl%2B0fuEbKX%2FhqfKBC7f%2Fyqn6MIoctVS7E6fD3SH%2FfI0yo28XCoUfl3kbFJps%2FysnSeirTQSa9wWs%2FRuXl%2FHawlqn%2FT0ORd3odPIxRxjkmC3WgfsgV4KHXm2fAUK2Nsydc7ulaZ8hJeh4r5wYcgOkeQ6TQA%2FYau%2F%2Frh7C1%2FAO47yQRwgO8ySX6Xqok1t0BjVAufGmuMeuLVcYwjptB8Uu7BefSNLLDRZvFcHAjqOn%2BEtfWqlB8rLtZypAPiPwZTFL1zh34bMDzm%2FyA4%2FXT0hlDFv%2ByWT0C6MnAlcH4AKL99wC9aCseo6Zm35H3u%2Fpk3Vq7pF0uSpbvahpx%2FTZdssertPOVVO12wRj4Gabo3QLCb8mQo8MH22%2Fe1kGfC4rpmV%2Fpw4kSeI63tzLekFP8Adizgi3wQY5bU9NoYjqymqSTBsYJ57vkZXevtoNBHpFQuWy3bWMMvWMPX66b8GOqUB7SMginKeNPXvHMpye3agDix4QZmby3CijOm16kNJmCEkcOVtSQ0jmm68KqqIW%2BjA0fTw4uHRyWLiy2%2BVRNuzm1x8Zp%2BVdRhPkAPB8TX4oWUzZsA4WtGzoW6pv3IgUhiFS0X3ItljeI79rBZyGM9qiIEDNWC%2BAuIa%2BOMOKyhWX9LSJ4ihHXgOcoiDN4tNVQ6ddZERecCXKG3WA4XGb0F%2F3zPpJjBx&X-Amz-Signature=46dcce4d1f158d61d00219c0422d7ec2d966e04dc42954a2118e8b4562149f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRN5TH7U%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDt6hYVXI0%2FzZxxHb8OX1c6Vg%2BVaYKbH5w9AvvgxK5B8AIgMYsp5H%2B8bs%2FWtayEyd3GcMeK7aC%2BF%2FWkm64M1AbJq04qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmTryw9Y0TJLjUqdCrcA0C2RoRGXHKdpNqz%2Bhk6aC8TG1BHtqz6lKQG%2B9RXRV%2F%2Fh%2BVy2WX17MD33jtitWtEdoYPjFSLWokPp0AA6ySQo7L%2FH9x69o3e8IhsiSWsumCzsQfMiJcJmoYzxrAV3551DaDPltjVudU7d6gbONyGZ51CGsuXkrAb0Y1mDrnGieNS7LGXMzNSkYl%2B0fuEbKX%2FhqfKBC7f%2Fyqn6MIoctVS7E6fD3SH%2FfI0yo28XCoUfl3kbFJps%2FysnSeirTQSa9wWs%2FRuXl%2FHawlqn%2FT0ORd3odPIxRxjkmC3WgfsgV4KHXm2fAUK2Nsydc7ulaZ8hJeh4r5wYcgOkeQ6TQA%2FYau%2F%2Frh7C1%2FAO47yQRwgO8ySX6Xqok1t0BjVAufGmuMeuLVcYwjptB8Uu7BefSNLLDRZvFcHAjqOn%2BEtfWqlB8rLtZypAPiPwZTFL1zh34bMDzm%2FyA4%2FXT0hlDFv%2ByWT0C6MnAlcH4AKL99wC9aCseo6Zm35H3u%2Fpk3Vq7pF0uSpbvahpx%2FTZdssertPOVVO12wRj4Gabo3QLCb8mQo8MH22%2Fe1kGfC4rpmV%2Fpw4kSeI63tzLekFP8Adizgi3wQY5bU9NoYjqymqSTBsYJ57vkZXevtoNBHpFQuWy3bWMMvWMPX66b8GOqUB7SMginKeNPXvHMpye3agDix4QZmby3CijOm16kNJmCEkcOVtSQ0jmm68KqqIW%2BjA0fTw4uHRyWLiy2%2BVRNuzm1x8Zp%2BVdRhPkAPB8TX4oWUzZsA4WtGzoW6pv3IgUhiFS0X3ItljeI79rBZyGM9qiIEDNWC%2BAuIa%2BOMOKyhWX9LSJ4ihHXgOcoiDN4tNVQ6ddZERecCXKG3WA4XGb0F%2F3zPpJjBx&X-Amz-Signature=3f7999602315dad3445191d71a379b9b84228e61e35f682aefdf6ab43ee258c4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRN5TH7U%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDt6hYVXI0%2FzZxxHb8OX1c6Vg%2BVaYKbH5w9AvvgxK5B8AIgMYsp5H%2B8bs%2FWtayEyd3GcMeK7aC%2BF%2FWkm64M1AbJq04qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmTryw9Y0TJLjUqdCrcA0C2RoRGXHKdpNqz%2Bhk6aC8TG1BHtqz6lKQG%2B9RXRV%2F%2Fh%2BVy2WX17MD33jtitWtEdoYPjFSLWokPp0AA6ySQo7L%2FH9x69o3e8IhsiSWsumCzsQfMiJcJmoYzxrAV3551DaDPltjVudU7d6gbONyGZ51CGsuXkrAb0Y1mDrnGieNS7LGXMzNSkYl%2B0fuEbKX%2FhqfKBC7f%2Fyqn6MIoctVS7E6fD3SH%2FfI0yo28XCoUfl3kbFJps%2FysnSeirTQSa9wWs%2FRuXl%2FHawlqn%2FT0ORd3odPIxRxjkmC3WgfsgV4KHXm2fAUK2Nsydc7ulaZ8hJeh4r5wYcgOkeQ6TQA%2FYau%2F%2Frh7C1%2FAO47yQRwgO8ySX6Xqok1t0BjVAufGmuMeuLVcYwjptB8Uu7BefSNLLDRZvFcHAjqOn%2BEtfWqlB8rLtZypAPiPwZTFL1zh34bMDzm%2FyA4%2FXT0hlDFv%2ByWT0C6MnAlcH4AKL99wC9aCseo6Zm35H3u%2Fpk3Vq7pF0uSpbvahpx%2FTZdssertPOVVO12wRj4Gabo3QLCb8mQo8MH22%2Fe1kGfC4rpmV%2Fpw4kSeI63tzLekFP8Adizgi3wQY5bU9NoYjqymqSTBsYJ57vkZXevtoNBHpFQuWy3bWMMvWMPX66b8GOqUB7SMginKeNPXvHMpye3agDix4QZmby3CijOm16kNJmCEkcOVtSQ0jmm68KqqIW%2BjA0fTw4uHRyWLiy2%2BVRNuzm1x8Zp%2BVdRhPkAPB8TX4oWUzZsA4WtGzoW6pv3IgUhiFS0X3ItljeI79rBZyGM9qiIEDNWC%2BAuIa%2BOMOKyhWX9LSJ4ihHXgOcoiDN4tNVQ6ddZERecCXKG3WA4XGb0F%2F3zPpJjBx&X-Amz-Signature=06173c7081b7a8cdde46b7d47fdc86652f9f54efa6675f41ee538d9a8144054d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
