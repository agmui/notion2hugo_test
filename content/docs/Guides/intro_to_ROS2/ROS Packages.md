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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCP3HXNM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk2OrWVOEJ1kkqPmVh4ldtZeCtEIJVCfNPmxrFoUdnzAiAWwZpxJT04mBGgaE0L%2FbvfPD2h%2Ft%2FnvJfvcdHfTfNrsSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgcFp6NUXKnZyZBfKtwDj4WEsh9H3M%2Bt%2FsA7w2pxQX6EEnppgZCjVbUy%2Bfwe%2B0efzck78RwznTAXuQnDvBxzw%2FOcrdIRellUH05ayY2GP0DCviNS9As26%2FqQ5BQvLBFn8m9uMFjGl5ooPJNCXslIb8CUYLBx7hbs5UdAhrP8bIhhldHqv5mnSLBup2ocrNc14emCdZq018mOU4Sh30EYDGeV%2BPIBgx68z0SDICDuCKelUDy9Qe4%2B%2Fv04SJNxvOdEXDXl06NEVd1xa61Z%2FdbMru9gNzhfp4sz%2BtOCuLbKG0WuUzVZwtEtq6MYJa4UBlTckR7hHzbchU8SjMxQ6j111m7D9%2F8TSMFQR5tx7562xnEZj4pn%2B7vDARlAdztKXVTDdyscJtBXBdYoNwjM7hnmDnnEWxp3kwgcnb%2Fa0KuFeQat9f9xjih9A8sXrYbKYY9rJJQQHIKs9YvIRd6OleM6rTaeKJgihsUEOLX1ICxMjMFyaB05Kz2ildWpVUUC9nqTguKtIEb%2FOG%2FvlQ08X6oVXY97RnqJ0tjq8p4JQIUKvno0D2j9nV2rK6KvsV%2FlG0k8QcIjfcvjY1W%2Focr38Kg%2F3N9zgxpow18PoGVChfl%2F9QDWulXzcLzwGi1%2B58U3UrpJRI1Lxby2FTCCPyYwqcWdwgY6pgElANRbnsVvopnBu6Xo9QuRAPS1Q4TkGINJeWcTe110EHgdqQe0hWBFXNU7BDml8dS91ffAUHA2R8GyrjEYHOgUTCkTDDCn8eb6D%2BAUYkPzVGZWD%2BNIOiK6UtWvOOJLEX6VvdtaFDLxahwlNYp8Q6FdYd%2FsO6bOomR%2FWsWq1MbPNkshC%2Fm3uevWE0AvRDyybZRRXI5029gHzpCDH6m8frpkX2Alj1zu&X-Amz-Signature=c693f3d9fc1bbd253a008fc9c1849030e0360d6e7d19605daa1b48df2847a1e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCP3HXNM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk2OrWVOEJ1kkqPmVh4ldtZeCtEIJVCfNPmxrFoUdnzAiAWwZpxJT04mBGgaE0L%2FbvfPD2h%2Ft%2FnvJfvcdHfTfNrsSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgcFp6NUXKnZyZBfKtwDj4WEsh9H3M%2Bt%2FsA7w2pxQX6EEnppgZCjVbUy%2Bfwe%2B0efzck78RwznTAXuQnDvBxzw%2FOcrdIRellUH05ayY2GP0DCviNS9As26%2FqQ5BQvLBFn8m9uMFjGl5ooPJNCXslIb8CUYLBx7hbs5UdAhrP8bIhhldHqv5mnSLBup2ocrNc14emCdZq018mOU4Sh30EYDGeV%2BPIBgx68z0SDICDuCKelUDy9Qe4%2B%2Fv04SJNxvOdEXDXl06NEVd1xa61Z%2FdbMru9gNzhfp4sz%2BtOCuLbKG0WuUzVZwtEtq6MYJa4UBlTckR7hHzbchU8SjMxQ6j111m7D9%2F8TSMFQR5tx7562xnEZj4pn%2B7vDARlAdztKXVTDdyscJtBXBdYoNwjM7hnmDnnEWxp3kwgcnb%2Fa0KuFeQat9f9xjih9A8sXrYbKYY9rJJQQHIKs9YvIRd6OleM6rTaeKJgihsUEOLX1ICxMjMFyaB05Kz2ildWpVUUC9nqTguKtIEb%2FOG%2FvlQ08X6oVXY97RnqJ0tjq8p4JQIUKvno0D2j9nV2rK6KvsV%2FlG0k8QcIjfcvjY1W%2Focr38Kg%2F3N9zgxpow18PoGVChfl%2F9QDWulXzcLzwGi1%2B58U3UrpJRI1Lxby2FTCCPyYwqcWdwgY6pgElANRbnsVvopnBu6Xo9QuRAPS1Q4TkGINJeWcTe110EHgdqQe0hWBFXNU7BDml8dS91ffAUHA2R8GyrjEYHOgUTCkTDDCn8eb6D%2BAUYkPzVGZWD%2BNIOiK6UtWvOOJLEX6VvdtaFDLxahwlNYp8Q6FdYd%2FsO6bOomR%2FWsWq1MbPNkshC%2Fm3uevWE0AvRDyybZRRXI5029gHzpCDH6m8frpkX2Alj1zu&X-Amz-Signature=4d60e2c5d9137403b17665081f64920316dfb950fc0e4cdda1303f11c0bf9f51&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCP3HXNM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk2OrWVOEJ1kkqPmVh4ldtZeCtEIJVCfNPmxrFoUdnzAiAWwZpxJT04mBGgaE0L%2FbvfPD2h%2Ft%2FnvJfvcdHfTfNrsSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgcFp6NUXKnZyZBfKtwDj4WEsh9H3M%2Bt%2FsA7w2pxQX6EEnppgZCjVbUy%2Bfwe%2B0efzck78RwznTAXuQnDvBxzw%2FOcrdIRellUH05ayY2GP0DCviNS9As26%2FqQ5BQvLBFn8m9uMFjGl5ooPJNCXslIb8CUYLBx7hbs5UdAhrP8bIhhldHqv5mnSLBup2ocrNc14emCdZq018mOU4Sh30EYDGeV%2BPIBgx68z0SDICDuCKelUDy9Qe4%2B%2Fv04SJNxvOdEXDXl06NEVd1xa61Z%2FdbMru9gNzhfp4sz%2BtOCuLbKG0WuUzVZwtEtq6MYJa4UBlTckR7hHzbchU8SjMxQ6j111m7D9%2F8TSMFQR5tx7562xnEZj4pn%2B7vDARlAdztKXVTDdyscJtBXBdYoNwjM7hnmDnnEWxp3kwgcnb%2Fa0KuFeQat9f9xjih9A8sXrYbKYY9rJJQQHIKs9YvIRd6OleM6rTaeKJgihsUEOLX1ICxMjMFyaB05Kz2ildWpVUUC9nqTguKtIEb%2FOG%2FvlQ08X6oVXY97RnqJ0tjq8p4JQIUKvno0D2j9nV2rK6KvsV%2FlG0k8QcIjfcvjY1W%2Focr38Kg%2F3N9zgxpow18PoGVChfl%2F9QDWulXzcLzwGi1%2B58U3UrpJRI1Lxby2FTCCPyYwqcWdwgY6pgElANRbnsVvopnBu6Xo9QuRAPS1Q4TkGINJeWcTe110EHgdqQe0hWBFXNU7BDml8dS91ffAUHA2R8GyrjEYHOgUTCkTDDCn8eb6D%2BAUYkPzVGZWD%2BNIOiK6UtWvOOJLEX6VvdtaFDLxahwlNYp8Q6FdYd%2FsO6bOomR%2FWsWq1MbPNkshC%2Fm3uevWE0AvRDyybZRRXI5029gHzpCDH6m8frpkX2Alj1zu&X-Amz-Signature=0c152c41d37cd7db84130865b4cdba521cc67f9ad73f410e1f19454c8d735942&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCP3HXNM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk2OrWVOEJ1kkqPmVh4ldtZeCtEIJVCfNPmxrFoUdnzAiAWwZpxJT04mBGgaE0L%2FbvfPD2h%2Ft%2FnvJfvcdHfTfNrsSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgcFp6NUXKnZyZBfKtwDj4WEsh9H3M%2Bt%2FsA7w2pxQX6EEnppgZCjVbUy%2Bfwe%2B0efzck78RwznTAXuQnDvBxzw%2FOcrdIRellUH05ayY2GP0DCviNS9As26%2FqQ5BQvLBFn8m9uMFjGl5ooPJNCXslIb8CUYLBx7hbs5UdAhrP8bIhhldHqv5mnSLBup2ocrNc14emCdZq018mOU4Sh30EYDGeV%2BPIBgx68z0SDICDuCKelUDy9Qe4%2B%2Fv04SJNxvOdEXDXl06NEVd1xa61Z%2FdbMru9gNzhfp4sz%2BtOCuLbKG0WuUzVZwtEtq6MYJa4UBlTckR7hHzbchU8SjMxQ6j111m7D9%2F8TSMFQR5tx7562xnEZj4pn%2B7vDARlAdztKXVTDdyscJtBXBdYoNwjM7hnmDnnEWxp3kwgcnb%2Fa0KuFeQat9f9xjih9A8sXrYbKYY9rJJQQHIKs9YvIRd6OleM6rTaeKJgihsUEOLX1ICxMjMFyaB05Kz2ildWpVUUC9nqTguKtIEb%2FOG%2FvlQ08X6oVXY97RnqJ0tjq8p4JQIUKvno0D2j9nV2rK6KvsV%2FlG0k8QcIjfcvjY1W%2Focr38Kg%2F3N9zgxpow18PoGVChfl%2F9QDWulXzcLzwGi1%2B58U3UrpJRI1Lxby2FTCCPyYwqcWdwgY6pgElANRbnsVvopnBu6Xo9QuRAPS1Q4TkGINJeWcTe110EHgdqQe0hWBFXNU7BDml8dS91ffAUHA2R8GyrjEYHOgUTCkTDDCn8eb6D%2BAUYkPzVGZWD%2BNIOiK6UtWvOOJLEX6VvdtaFDLxahwlNYp8Q6FdYd%2FsO6bOomR%2FWsWq1MbPNkshC%2Fm3uevWE0AvRDyybZRRXI5029gHzpCDH6m8frpkX2Alj1zu&X-Amz-Signature=c553150b803140dd729e756109e18a4283523036b61d881d819d41232170e7f6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCP3HXNM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk2OrWVOEJ1kkqPmVh4ldtZeCtEIJVCfNPmxrFoUdnzAiAWwZpxJT04mBGgaE0L%2FbvfPD2h%2Ft%2FnvJfvcdHfTfNrsSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgcFp6NUXKnZyZBfKtwDj4WEsh9H3M%2Bt%2FsA7w2pxQX6EEnppgZCjVbUy%2Bfwe%2B0efzck78RwznTAXuQnDvBxzw%2FOcrdIRellUH05ayY2GP0DCviNS9As26%2FqQ5BQvLBFn8m9uMFjGl5ooPJNCXslIb8CUYLBx7hbs5UdAhrP8bIhhldHqv5mnSLBup2ocrNc14emCdZq018mOU4Sh30EYDGeV%2BPIBgx68z0SDICDuCKelUDy9Qe4%2B%2Fv04SJNxvOdEXDXl06NEVd1xa61Z%2FdbMru9gNzhfp4sz%2BtOCuLbKG0WuUzVZwtEtq6MYJa4UBlTckR7hHzbchU8SjMxQ6j111m7D9%2F8TSMFQR5tx7562xnEZj4pn%2B7vDARlAdztKXVTDdyscJtBXBdYoNwjM7hnmDnnEWxp3kwgcnb%2Fa0KuFeQat9f9xjih9A8sXrYbKYY9rJJQQHIKs9YvIRd6OleM6rTaeKJgihsUEOLX1ICxMjMFyaB05Kz2ildWpVUUC9nqTguKtIEb%2FOG%2FvlQ08X6oVXY97RnqJ0tjq8p4JQIUKvno0D2j9nV2rK6KvsV%2FlG0k8QcIjfcvjY1W%2Focr38Kg%2F3N9zgxpow18PoGVChfl%2F9QDWulXzcLzwGi1%2B58U3UrpJRI1Lxby2FTCCPyYwqcWdwgY6pgElANRbnsVvopnBu6Xo9QuRAPS1Q4TkGINJeWcTe110EHgdqQe0hWBFXNU7BDml8dS91ffAUHA2R8GyrjEYHOgUTCkTDDCn8eb6D%2BAUYkPzVGZWD%2BNIOiK6UtWvOOJLEX6VvdtaFDLxahwlNYp8Q6FdYd%2FsO6bOomR%2FWsWq1MbPNkshC%2Fm3uevWE0AvRDyybZRRXI5029gHzpCDH6m8frpkX2Alj1zu&X-Amz-Signature=43368cbbe6babac578fc6767f89f12f1b1ca00024969ae2ad648e1cda01e7960&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCP3HXNM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk2OrWVOEJ1kkqPmVh4ldtZeCtEIJVCfNPmxrFoUdnzAiAWwZpxJT04mBGgaE0L%2FbvfPD2h%2Ft%2FnvJfvcdHfTfNrsSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgcFp6NUXKnZyZBfKtwDj4WEsh9H3M%2Bt%2FsA7w2pxQX6EEnppgZCjVbUy%2Bfwe%2B0efzck78RwznTAXuQnDvBxzw%2FOcrdIRellUH05ayY2GP0DCviNS9As26%2FqQ5BQvLBFn8m9uMFjGl5ooPJNCXslIb8CUYLBx7hbs5UdAhrP8bIhhldHqv5mnSLBup2ocrNc14emCdZq018mOU4Sh30EYDGeV%2BPIBgx68z0SDICDuCKelUDy9Qe4%2B%2Fv04SJNxvOdEXDXl06NEVd1xa61Z%2FdbMru9gNzhfp4sz%2BtOCuLbKG0WuUzVZwtEtq6MYJa4UBlTckR7hHzbchU8SjMxQ6j111m7D9%2F8TSMFQR5tx7562xnEZj4pn%2B7vDARlAdztKXVTDdyscJtBXBdYoNwjM7hnmDnnEWxp3kwgcnb%2Fa0KuFeQat9f9xjih9A8sXrYbKYY9rJJQQHIKs9YvIRd6OleM6rTaeKJgihsUEOLX1ICxMjMFyaB05Kz2ildWpVUUC9nqTguKtIEb%2FOG%2FvlQ08X6oVXY97RnqJ0tjq8p4JQIUKvno0D2j9nV2rK6KvsV%2FlG0k8QcIjfcvjY1W%2Focr38Kg%2F3N9zgxpow18PoGVChfl%2F9QDWulXzcLzwGi1%2B58U3UrpJRI1Lxby2FTCCPyYwqcWdwgY6pgElANRbnsVvopnBu6Xo9QuRAPS1Q4TkGINJeWcTe110EHgdqQe0hWBFXNU7BDml8dS91ffAUHA2R8GyrjEYHOgUTCkTDDCn8eb6D%2BAUYkPzVGZWD%2BNIOiK6UtWvOOJLEX6VvdtaFDLxahwlNYp8Q6FdYd%2FsO6bOomR%2FWsWq1MbPNkshC%2Fm3uevWE0AvRDyybZRRXI5029gHzpCDH6m8frpkX2Alj1zu&X-Amz-Signature=921e788f452ad56f8bf31bece623e9ad6d0126e49f396d556f25f9c6e1ea4512&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCP3HXNM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk2OrWVOEJ1kkqPmVh4ldtZeCtEIJVCfNPmxrFoUdnzAiAWwZpxJT04mBGgaE0L%2FbvfPD2h%2Ft%2FnvJfvcdHfTfNrsSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgcFp6NUXKnZyZBfKtwDj4WEsh9H3M%2Bt%2FsA7w2pxQX6EEnppgZCjVbUy%2Bfwe%2B0efzck78RwznTAXuQnDvBxzw%2FOcrdIRellUH05ayY2GP0DCviNS9As26%2FqQ5BQvLBFn8m9uMFjGl5ooPJNCXslIb8CUYLBx7hbs5UdAhrP8bIhhldHqv5mnSLBup2ocrNc14emCdZq018mOU4Sh30EYDGeV%2BPIBgx68z0SDICDuCKelUDy9Qe4%2B%2Fv04SJNxvOdEXDXl06NEVd1xa61Z%2FdbMru9gNzhfp4sz%2BtOCuLbKG0WuUzVZwtEtq6MYJa4UBlTckR7hHzbchU8SjMxQ6j111m7D9%2F8TSMFQR5tx7562xnEZj4pn%2B7vDARlAdztKXVTDdyscJtBXBdYoNwjM7hnmDnnEWxp3kwgcnb%2Fa0KuFeQat9f9xjih9A8sXrYbKYY9rJJQQHIKs9YvIRd6OleM6rTaeKJgihsUEOLX1ICxMjMFyaB05Kz2ildWpVUUC9nqTguKtIEb%2FOG%2FvlQ08X6oVXY97RnqJ0tjq8p4JQIUKvno0D2j9nV2rK6KvsV%2FlG0k8QcIjfcvjY1W%2Focr38Kg%2F3N9zgxpow18PoGVChfl%2F9QDWulXzcLzwGi1%2B58U3UrpJRI1Lxby2FTCCPyYwqcWdwgY6pgElANRbnsVvopnBu6Xo9QuRAPS1Q4TkGINJeWcTe110EHgdqQe0hWBFXNU7BDml8dS91ffAUHA2R8GyrjEYHOgUTCkTDDCn8eb6D%2BAUYkPzVGZWD%2BNIOiK6UtWvOOJLEX6VvdtaFDLxahwlNYp8Q6FdYd%2FsO6bOomR%2FWsWq1MbPNkshC%2Fm3uevWE0AvRDyybZRRXI5029gHzpCDH6m8frpkX2Alj1zu&X-Amz-Signature=bbdbed21c3082ba9aeaab362c5626d9a3d2cd7cb6c014c2153fca8f7ee4a615f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
