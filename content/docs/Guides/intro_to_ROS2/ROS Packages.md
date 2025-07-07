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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2YFOIW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCzFqgW0EhGPfznfWXS8b54RnCFpcx2Gi0abSDi8LVZJgIhAOMVU4vawe%2FpyRH81q%2BJYX%2BhDrKrrz8%2FKSgiH%2BK7zfF9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwdGJBtNHwmcp2PWrcq3AMK66THIx8Kf%2BLAPs4LOnBLHSeaEJMatX5cHsZuyvbUWSW1gytKCnDDYsV2PcfzT%2B%2F9d6WEYKH6kAewPCXZxSofJz0yNlVcZS%2FYIRU8LmzPkNwRkBtrze7ww137dYwvjbmjymQ5z285k7NXunuTsrp7jTY5Rn4sl8gmiwizhFtLj12NhdzEXwZ4QqoczeTeq0TnGBDN5QTy1qNA%2FllpgRwWDBA4363PbOg9xilTemeHX5CJlKRh81x9N8prVM3z6PyBK7oAjIY%2FhGiywPYGnBkT7XS61vnYAbBt7CEuywKlvdyNVqySmMclbGRoAbcpZDxPi0UnzjF34pnHgTr8fC2lpDUfQlgFbTw2p9eqT1P2pSpq2HkxYjGRmdIgod7fU6zQKjhmSzOytwe6NUvg6tI2lShOXkSv5u9LXxElDbzmMLGmc6wXtZMLYOL1GiYsza334Pd56AnonPG2SDTom5%2B1%2FmHcSdab60vxDM3Tn7Q1LRJD2SwaJUSB%2BXpUnKlDWovyfVUFdN5GTGnWxTGqYZ%2BASwhB02ir30Fw5Qw1gtev%2FYk2K7JTTAROyAa29X8z96pZSfmXTzP7RT0WAsjOOA9p3lecgZtAxUx6rX5jzAeWeKpPI0hwgSSuB%2BCWOjDzkbHDBjqkAYvtAQk4K8o1GBja0MAOrE79AV5zwo4%2FYFhrqQEBjVWGvRcwWYrJxG0YfXS5x70IajGSrdfHyJKjs7y0rk3BiGLTX%2BDX9pQUqRS5MPPcclwCWs65hCyDpzVl0V0TTlUQKMflVNkMq7wnXxugGQH3%2FHLjmzZB1j4jiUs3xRLpfzSEk8G8iI0ks%2BYH1l9%2BsBMGnlICkhKl90O%2F0kuqL3MgKPEguOUH&X-Amz-Signature=8bc556125a9558f31a1b4e44c71152f08d09c1f3209652f6ed384543065ded82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2YFOIW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCzFqgW0EhGPfznfWXS8b54RnCFpcx2Gi0abSDi8LVZJgIhAOMVU4vawe%2FpyRH81q%2BJYX%2BhDrKrrz8%2FKSgiH%2BK7zfF9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwdGJBtNHwmcp2PWrcq3AMK66THIx8Kf%2BLAPs4LOnBLHSeaEJMatX5cHsZuyvbUWSW1gytKCnDDYsV2PcfzT%2B%2F9d6WEYKH6kAewPCXZxSofJz0yNlVcZS%2FYIRU8LmzPkNwRkBtrze7ww137dYwvjbmjymQ5z285k7NXunuTsrp7jTY5Rn4sl8gmiwizhFtLj12NhdzEXwZ4QqoczeTeq0TnGBDN5QTy1qNA%2FllpgRwWDBA4363PbOg9xilTemeHX5CJlKRh81x9N8prVM3z6PyBK7oAjIY%2FhGiywPYGnBkT7XS61vnYAbBt7CEuywKlvdyNVqySmMclbGRoAbcpZDxPi0UnzjF34pnHgTr8fC2lpDUfQlgFbTw2p9eqT1P2pSpq2HkxYjGRmdIgod7fU6zQKjhmSzOytwe6NUvg6tI2lShOXkSv5u9LXxElDbzmMLGmc6wXtZMLYOL1GiYsza334Pd56AnonPG2SDTom5%2B1%2FmHcSdab60vxDM3Tn7Q1LRJD2SwaJUSB%2BXpUnKlDWovyfVUFdN5GTGnWxTGqYZ%2BASwhB02ir30Fw5Qw1gtev%2FYk2K7JTTAROyAa29X8z96pZSfmXTzP7RT0WAsjOOA9p3lecgZtAxUx6rX5jzAeWeKpPI0hwgSSuB%2BCWOjDzkbHDBjqkAYvtAQk4K8o1GBja0MAOrE79AV5zwo4%2FYFhrqQEBjVWGvRcwWYrJxG0YfXS5x70IajGSrdfHyJKjs7y0rk3BiGLTX%2BDX9pQUqRS5MPPcclwCWs65hCyDpzVl0V0TTlUQKMflVNkMq7wnXxugGQH3%2FHLjmzZB1j4jiUs3xRLpfzSEk8G8iI0ks%2BYH1l9%2BsBMGnlICkhKl90O%2F0kuqL3MgKPEguOUH&X-Amz-Signature=5a2e8ea9dc170d0e47304f2e1d1148c393ceaaf1ced35170f53a6f4ec26122ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2YFOIW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCzFqgW0EhGPfznfWXS8b54RnCFpcx2Gi0abSDi8LVZJgIhAOMVU4vawe%2FpyRH81q%2BJYX%2BhDrKrrz8%2FKSgiH%2BK7zfF9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwdGJBtNHwmcp2PWrcq3AMK66THIx8Kf%2BLAPs4LOnBLHSeaEJMatX5cHsZuyvbUWSW1gytKCnDDYsV2PcfzT%2B%2F9d6WEYKH6kAewPCXZxSofJz0yNlVcZS%2FYIRU8LmzPkNwRkBtrze7ww137dYwvjbmjymQ5z285k7NXunuTsrp7jTY5Rn4sl8gmiwizhFtLj12NhdzEXwZ4QqoczeTeq0TnGBDN5QTy1qNA%2FllpgRwWDBA4363PbOg9xilTemeHX5CJlKRh81x9N8prVM3z6PyBK7oAjIY%2FhGiywPYGnBkT7XS61vnYAbBt7CEuywKlvdyNVqySmMclbGRoAbcpZDxPi0UnzjF34pnHgTr8fC2lpDUfQlgFbTw2p9eqT1P2pSpq2HkxYjGRmdIgod7fU6zQKjhmSzOytwe6NUvg6tI2lShOXkSv5u9LXxElDbzmMLGmc6wXtZMLYOL1GiYsza334Pd56AnonPG2SDTom5%2B1%2FmHcSdab60vxDM3Tn7Q1LRJD2SwaJUSB%2BXpUnKlDWovyfVUFdN5GTGnWxTGqYZ%2BASwhB02ir30Fw5Qw1gtev%2FYk2K7JTTAROyAa29X8z96pZSfmXTzP7RT0WAsjOOA9p3lecgZtAxUx6rX5jzAeWeKpPI0hwgSSuB%2BCWOjDzkbHDBjqkAYvtAQk4K8o1GBja0MAOrE79AV5zwo4%2FYFhrqQEBjVWGvRcwWYrJxG0YfXS5x70IajGSrdfHyJKjs7y0rk3BiGLTX%2BDX9pQUqRS5MPPcclwCWs65hCyDpzVl0V0TTlUQKMflVNkMq7wnXxugGQH3%2FHLjmzZB1j4jiUs3xRLpfzSEk8G8iI0ks%2BYH1l9%2BsBMGnlICkhKl90O%2F0kuqL3MgKPEguOUH&X-Amz-Signature=8f670652b49423e79438d26c3acc9b0670412e098afc00399c7fcb6aa88b5ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2YFOIW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCzFqgW0EhGPfznfWXS8b54RnCFpcx2Gi0abSDi8LVZJgIhAOMVU4vawe%2FpyRH81q%2BJYX%2BhDrKrrz8%2FKSgiH%2BK7zfF9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwdGJBtNHwmcp2PWrcq3AMK66THIx8Kf%2BLAPs4LOnBLHSeaEJMatX5cHsZuyvbUWSW1gytKCnDDYsV2PcfzT%2B%2F9d6WEYKH6kAewPCXZxSofJz0yNlVcZS%2FYIRU8LmzPkNwRkBtrze7ww137dYwvjbmjymQ5z285k7NXunuTsrp7jTY5Rn4sl8gmiwizhFtLj12NhdzEXwZ4QqoczeTeq0TnGBDN5QTy1qNA%2FllpgRwWDBA4363PbOg9xilTemeHX5CJlKRh81x9N8prVM3z6PyBK7oAjIY%2FhGiywPYGnBkT7XS61vnYAbBt7CEuywKlvdyNVqySmMclbGRoAbcpZDxPi0UnzjF34pnHgTr8fC2lpDUfQlgFbTw2p9eqT1P2pSpq2HkxYjGRmdIgod7fU6zQKjhmSzOytwe6NUvg6tI2lShOXkSv5u9LXxElDbzmMLGmc6wXtZMLYOL1GiYsza334Pd56AnonPG2SDTom5%2B1%2FmHcSdab60vxDM3Tn7Q1LRJD2SwaJUSB%2BXpUnKlDWovyfVUFdN5GTGnWxTGqYZ%2BASwhB02ir30Fw5Qw1gtev%2FYk2K7JTTAROyAa29X8z96pZSfmXTzP7RT0WAsjOOA9p3lecgZtAxUx6rX5jzAeWeKpPI0hwgSSuB%2BCWOjDzkbHDBjqkAYvtAQk4K8o1GBja0MAOrE79AV5zwo4%2FYFhrqQEBjVWGvRcwWYrJxG0YfXS5x70IajGSrdfHyJKjs7y0rk3BiGLTX%2BDX9pQUqRS5MPPcclwCWs65hCyDpzVl0V0TTlUQKMflVNkMq7wnXxugGQH3%2FHLjmzZB1j4jiUs3xRLpfzSEk8G8iI0ks%2BYH1l9%2BsBMGnlICkhKl90O%2F0kuqL3MgKPEguOUH&X-Amz-Signature=f975c4b3a5a0b9f8b3ba854a09d92d317375abb7ccdb98bb12af7a062ff52522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2YFOIW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCzFqgW0EhGPfznfWXS8b54RnCFpcx2Gi0abSDi8LVZJgIhAOMVU4vawe%2FpyRH81q%2BJYX%2BhDrKrrz8%2FKSgiH%2BK7zfF9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwdGJBtNHwmcp2PWrcq3AMK66THIx8Kf%2BLAPs4LOnBLHSeaEJMatX5cHsZuyvbUWSW1gytKCnDDYsV2PcfzT%2B%2F9d6WEYKH6kAewPCXZxSofJz0yNlVcZS%2FYIRU8LmzPkNwRkBtrze7ww137dYwvjbmjymQ5z285k7NXunuTsrp7jTY5Rn4sl8gmiwizhFtLj12NhdzEXwZ4QqoczeTeq0TnGBDN5QTy1qNA%2FllpgRwWDBA4363PbOg9xilTemeHX5CJlKRh81x9N8prVM3z6PyBK7oAjIY%2FhGiywPYGnBkT7XS61vnYAbBt7CEuywKlvdyNVqySmMclbGRoAbcpZDxPi0UnzjF34pnHgTr8fC2lpDUfQlgFbTw2p9eqT1P2pSpq2HkxYjGRmdIgod7fU6zQKjhmSzOytwe6NUvg6tI2lShOXkSv5u9LXxElDbzmMLGmc6wXtZMLYOL1GiYsza334Pd56AnonPG2SDTom5%2B1%2FmHcSdab60vxDM3Tn7Q1LRJD2SwaJUSB%2BXpUnKlDWovyfVUFdN5GTGnWxTGqYZ%2BASwhB02ir30Fw5Qw1gtev%2FYk2K7JTTAROyAa29X8z96pZSfmXTzP7RT0WAsjOOA9p3lecgZtAxUx6rX5jzAeWeKpPI0hwgSSuB%2BCWOjDzkbHDBjqkAYvtAQk4K8o1GBja0MAOrE79AV5zwo4%2FYFhrqQEBjVWGvRcwWYrJxG0YfXS5x70IajGSrdfHyJKjs7y0rk3BiGLTX%2BDX9pQUqRS5MPPcclwCWs65hCyDpzVl0V0TTlUQKMflVNkMq7wnXxugGQH3%2FHLjmzZB1j4jiUs3xRLpfzSEk8G8iI0ks%2BYH1l9%2BsBMGnlICkhKl90O%2F0kuqL3MgKPEguOUH&X-Amz-Signature=68eb7e17fd43ee3ebbfa10456c870ddb784df748453bf725631995b411ddb48e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2YFOIW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCzFqgW0EhGPfznfWXS8b54RnCFpcx2Gi0abSDi8LVZJgIhAOMVU4vawe%2FpyRH81q%2BJYX%2BhDrKrrz8%2FKSgiH%2BK7zfF9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwdGJBtNHwmcp2PWrcq3AMK66THIx8Kf%2BLAPs4LOnBLHSeaEJMatX5cHsZuyvbUWSW1gytKCnDDYsV2PcfzT%2B%2F9d6WEYKH6kAewPCXZxSofJz0yNlVcZS%2FYIRU8LmzPkNwRkBtrze7ww137dYwvjbmjymQ5z285k7NXunuTsrp7jTY5Rn4sl8gmiwizhFtLj12NhdzEXwZ4QqoczeTeq0TnGBDN5QTy1qNA%2FllpgRwWDBA4363PbOg9xilTemeHX5CJlKRh81x9N8prVM3z6PyBK7oAjIY%2FhGiywPYGnBkT7XS61vnYAbBt7CEuywKlvdyNVqySmMclbGRoAbcpZDxPi0UnzjF34pnHgTr8fC2lpDUfQlgFbTw2p9eqT1P2pSpq2HkxYjGRmdIgod7fU6zQKjhmSzOytwe6NUvg6tI2lShOXkSv5u9LXxElDbzmMLGmc6wXtZMLYOL1GiYsza334Pd56AnonPG2SDTom5%2B1%2FmHcSdab60vxDM3Tn7Q1LRJD2SwaJUSB%2BXpUnKlDWovyfVUFdN5GTGnWxTGqYZ%2BASwhB02ir30Fw5Qw1gtev%2FYk2K7JTTAROyAa29X8z96pZSfmXTzP7RT0WAsjOOA9p3lecgZtAxUx6rX5jzAeWeKpPI0hwgSSuB%2BCWOjDzkbHDBjqkAYvtAQk4K8o1GBja0MAOrE79AV5zwo4%2FYFhrqQEBjVWGvRcwWYrJxG0YfXS5x70IajGSrdfHyJKjs7y0rk3BiGLTX%2BDX9pQUqRS5MPPcclwCWs65hCyDpzVl0V0TTlUQKMflVNkMq7wnXxugGQH3%2FHLjmzZB1j4jiUs3xRLpfzSEk8G8iI0ks%2BYH1l9%2BsBMGnlICkhKl90O%2F0kuqL3MgKPEguOUH&X-Amz-Signature=9357b6678c45e6815dddaff8852551a8c122168f5f0c52f699c6a7b5d8fc05bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2YFOIW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCzFqgW0EhGPfznfWXS8b54RnCFpcx2Gi0abSDi8LVZJgIhAOMVU4vawe%2FpyRH81q%2BJYX%2BhDrKrrz8%2FKSgiH%2BK7zfF9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwdGJBtNHwmcp2PWrcq3AMK66THIx8Kf%2BLAPs4LOnBLHSeaEJMatX5cHsZuyvbUWSW1gytKCnDDYsV2PcfzT%2B%2F9d6WEYKH6kAewPCXZxSofJz0yNlVcZS%2FYIRU8LmzPkNwRkBtrze7ww137dYwvjbmjymQ5z285k7NXunuTsrp7jTY5Rn4sl8gmiwizhFtLj12NhdzEXwZ4QqoczeTeq0TnGBDN5QTy1qNA%2FllpgRwWDBA4363PbOg9xilTemeHX5CJlKRh81x9N8prVM3z6PyBK7oAjIY%2FhGiywPYGnBkT7XS61vnYAbBt7CEuywKlvdyNVqySmMclbGRoAbcpZDxPi0UnzjF34pnHgTr8fC2lpDUfQlgFbTw2p9eqT1P2pSpq2HkxYjGRmdIgod7fU6zQKjhmSzOytwe6NUvg6tI2lShOXkSv5u9LXxElDbzmMLGmc6wXtZMLYOL1GiYsza334Pd56AnonPG2SDTom5%2B1%2FmHcSdab60vxDM3Tn7Q1LRJD2SwaJUSB%2BXpUnKlDWovyfVUFdN5GTGnWxTGqYZ%2BASwhB02ir30Fw5Qw1gtev%2FYk2K7JTTAROyAa29X8z96pZSfmXTzP7RT0WAsjOOA9p3lecgZtAxUx6rX5jzAeWeKpPI0hwgSSuB%2BCWOjDzkbHDBjqkAYvtAQk4K8o1GBja0MAOrE79AV5zwo4%2FYFhrqQEBjVWGvRcwWYrJxG0YfXS5x70IajGSrdfHyJKjs7y0rk3BiGLTX%2BDX9pQUqRS5MPPcclwCWs65hCyDpzVl0V0TTlUQKMflVNkMq7wnXxugGQH3%2FHLjmzZB1j4jiUs3xRLpfzSEk8G8iI0ks%2BYH1l9%2BsBMGnlICkhKl90O%2F0kuqL3MgKPEguOUH&X-Amz-Signature=e7d787b082637a97f19676340858a4a9c2168ddda48d62033c724e175f2a2e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
