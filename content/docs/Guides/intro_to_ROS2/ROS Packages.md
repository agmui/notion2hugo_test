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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2FQT3D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnm45goHAAx0uXtXeyGI60v1zjopqO%2BZGSobY4h0B46AIgC6waM5xdBhxQ2iaQN3kWEF%2Bfa%2B5ATa6Ng3NnKDmU%2FD8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKF%2BscZzeKzJUwtKOircA%2FRgU6iE5lTCUFFXHdLE8TXRaF7D0bihKEHSUBVSwihqljK4qeyKUZcXIEzFJ23H98CjCOFB93GIKBFS6OgakKxSfP1Bvq2oEDrj7fMPcGWjE9beVsLOtMa77DJkajASEAiWaMF1O4V3%2Fh88wzEYEtS8SdjeQNYbqNkWUaO56m2ypBA80gWGvw%2B3aUmj5esKv4qnlkMTuG1GB2hcZqT4czJaEx1iKVG3FJizcrjz4GImKFt1PsPbskGwEnMn%2FOOlK767Eo8z1VJkQvZtHpuVi7HPdBayk6JGvoZadrxabqSdzQQ6UCO6jiylIUdyu44PLv2UKKjXkwViZ5%2FgsUePW6e0XRYS7e7nDVI60T8eO4yZlUoWrDxkPa6bIn%2B7ftj6ZMB7tUwJl%2FKB%2BmiQgD3YCTYfM41TYQ0yQ7qRycXoKmfcI8ZdtsNo5Z3fkEGy%2FcmHRPFT8vA9ijm2LSqmDh8auph8U6MScmTm91ftAJ1mQwSvNuJy1%2BXLTkuZ2ItieNxs%2BtWslR%2FAPQefEAJ644BlrwDh2M1ykYhd%2F%2BvdwrJEYpFZeBXHOH453wUyMRU%2Bygl%2BbhRv563wSeuJ9DsYpzmW3N2LC%2F7F6ETVJ%2F%2B1JBw3OFubKRBRoiDDfKYezdKaMKnGgcAGOqUBtPIeaBhM%2FaK%2F66NbhDeyaCAI1HI5PZIpQ36y2LVgqs9FshkTvLoa1C15mm9puOgIGojCqZZyWuDM8eBpixL53dAR%2BZ2LbbKUPYi0pgpecquWFrNrgzAPw10sV%2BuWRpwgW%2FcMXblju5nFPMXap1qro0EkIIpX2K300ZlfbhkP74ZakXrRupw1sl5eu84lfvCzYWsyiGquKWu3RQLY%2BlgdUQK%2FXnZ%2B&X-Amz-Signature=041b7c631f22592d0ff260b41b41f2a55d42d431be09b295434ca3b732aea7a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2FQT3D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnm45goHAAx0uXtXeyGI60v1zjopqO%2BZGSobY4h0B46AIgC6waM5xdBhxQ2iaQN3kWEF%2Bfa%2B5ATa6Ng3NnKDmU%2FD8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKF%2BscZzeKzJUwtKOircA%2FRgU6iE5lTCUFFXHdLE8TXRaF7D0bihKEHSUBVSwihqljK4qeyKUZcXIEzFJ23H98CjCOFB93GIKBFS6OgakKxSfP1Bvq2oEDrj7fMPcGWjE9beVsLOtMa77DJkajASEAiWaMF1O4V3%2Fh88wzEYEtS8SdjeQNYbqNkWUaO56m2ypBA80gWGvw%2B3aUmj5esKv4qnlkMTuG1GB2hcZqT4czJaEx1iKVG3FJizcrjz4GImKFt1PsPbskGwEnMn%2FOOlK767Eo8z1VJkQvZtHpuVi7HPdBayk6JGvoZadrxabqSdzQQ6UCO6jiylIUdyu44PLv2UKKjXkwViZ5%2FgsUePW6e0XRYS7e7nDVI60T8eO4yZlUoWrDxkPa6bIn%2B7ftj6ZMB7tUwJl%2FKB%2BmiQgD3YCTYfM41TYQ0yQ7qRycXoKmfcI8ZdtsNo5Z3fkEGy%2FcmHRPFT8vA9ijm2LSqmDh8auph8U6MScmTm91ftAJ1mQwSvNuJy1%2BXLTkuZ2ItieNxs%2BtWslR%2FAPQefEAJ644BlrwDh2M1ykYhd%2F%2BvdwrJEYpFZeBXHOH453wUyMRU%2Bygl%2BbhRv563wSeuJ9DsYpzmW3N2LC%2F7F6ETVJ%2F%2B1JBw3OFubKRBRoiDDfKYezdKaMKnGgcAGOqUBtPIeaBhM%2FaK%2F66NbhDeyaCAI1HI5PZIpQ36y2LVgqs9FshkTvLoa1C15mm9puOgIGojCqZZyWuDM8eBpixL53dAR%2BZ2LbbKUPYi0pgpecquWFrNrgzAPw10sV%2BuWRpwgW%2FcMXblju5nFPMXap1qro0EkIIpX2K300ZlfbhkP74ZakXrRupw1sl5eu84lfvCzYWsyiGquKWu3RQLY%2BlgdUQK%2FXnZ%2B&X-Amz-Signature=7d9e0ad17122e549726c2175e622ca736b137041dfe7507467e10a00cdb89404&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2FQT3D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnm45goHAAx0uXtXeyGI60v1zjopqO%2BZGSobY4h0B46AIgC6waM5xdBhxQ2iaQN3kWEF%2Bfa%2B5ATa6Ng3NnKDmU%2FD8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKF%2BscZzeKzJUwtKOircA%2FRgU6iE5lTCUFFXHdLE8TXRaF7D0bihKEHSUBVSwihqljK4qeyKUZcXIEzFJ23H98CjCOFB93GIKBFS6OgakKxSfP1Bvq2oEDrj7fMPcGWjE9beVsLOtMa77DJkajASEAiWaMF1O4V3%2Fh88wzEYEtS8SdjeQNYbqNkWUaO56m2ypBA80gWGvw%2B3aUmj5esKv4qnlkMTuG1GB2hcZqT4czJaEx1iKVG3FJizcrjz4GImKFt1PsPbskGwEnMn%2FOOlK767Eo8z1VJkQvZtHpuVi7HPdBayk6JGvoZadrxabqSdzQQ6UCO6jiylIUdyu44PLv2UKKjXkwViZ5%2FgsUePW6e0XRYS7e7nDVI60T8eO4yZlUoWrDxkPa6bIn%2B7ftj6ZMB7tUwJl%2FKB%2BmiQgD3YCTYfM41TYQ0yQ7qRycXoKmfcI8ZdtsNo5Z3fkEGy%2FcmHRPFT8vA9ijm2LSqmDh8auph8U6MScmTm91ftAJ1mQwSvNuJy1%2BXLTkuZ2ItieNxs%2BtWslR%2FAPQefEAJ644BlrwDh2M1ykYhd%2F%2BvdwrJEYpFZeBXHOH453wUyMRU%2Bygl%2BbhRv563wSeuJ9DsYpzmW3N2LC%2F7F6ETVJ%2F%2B1JBw3OFubKRBRoiDDfKYezdKaMKnGgcAGOqUBtPIeaBhM%2FaK%2F66NbhDeyaCAI1HI5PZIpQ36y2LVgqs9FshkTvLoa1C15mm9puOgIGojCqZZyWuDM8eBpixL53dAR%2BZ2LbbKUPYi0pgpecquWFrNrgzAPw10sV%2BuWRpwgW%2FcMXblju5nFPMXap1qro0EkIIpX2K300ZlfbhkP74ZakXrRupw1sl5eu84lfvCzYWsyiGquKWu3RQLY%2BlgdUQK%2FXnZ%2B&X-Amz-Signature=791e3946b6c63f15e13414bcad6bb0c2bee20cac6a2fdb2897b5f69e98a8db1b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2FQT3D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnm45goHAAx0uXtXeyGI60v1zjopqO%2BZGSobY4h0B46AIgC6waM5xdBhxQ2iaQN3kWEF%2Bfa%2B5ATa6Ng3NnKDmU%2FD8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKF%2BscZzeKzJUwtKOircA%2FRgU6iE5lTCUFFXHdLE8TXRaF7D0bihKEHSUBVSwihqljK4qeyKUZcXIEzFJ23H98CjCOFB93GIKBFS6OgakKxSfP1Bvq2oEDrj7fMPcGWjE9beVsLOtMa77DJkajASEAiWaMF1O4V3%2Fh88wzEYEtS8SdjeQNYbqNkWUaO56m2ypBA80gWGvw%2B3aUmj5esKv4qnlkMTuG1GB2hcZqT4czJaEx1iKVG3FJizcrjz4GImKFt1PsPbskGwEnMn%2FOOlK767Eo8z1VJkQvZtHpuVi7HPdBayk6JGvoZadrxabqSdzQQ6UCO6jiylIUdyu44PLv2UKKjXkwViZ5%2FgsUePW6e0XRYS7e7nDVI60T8eO4yZlUoWrDxkPa6bIn%2B7ftj6ZMB7tUwJl%2FKB%2BmiQgD3YCTYfM41TYQ0yQ7qRycXoKmfcI8ZdtsNo5Z3fkEGy%2FcmHRPFT8vA9ijm2LSqmDh8auph8U6MScmTm91ftAJ1mQwSvNuJy1%2BXLTkuZ2ItieNxs%2BtWslR%2FAPQefEAJ644BlrwDh2M1ykYhd%2F%2BvdwrJEYpFZeBXHOH453wUyMRU%2Bygl%2BbhRv563wSeuJ9DsYpzmW3N2LC%2F7F6ETVJ%2F%2B1JBw3OFubKRBRoiDDfKYezdKaMKnGgcAGOqUBtPIeaBhM%2FaK%2F66NbhDeyaCAI1HI5PZIpQ36y2LVgqs9FshkTvLoa1C15mm9puOgIGojCqZZyWuDM8eBpixL53dAR%2BZ2LbbKUPYi0pgpecquWFrNrgzAPw10sV%2BuWRpwgW%2FcMXblju5nFPMXap1qro0EkIIpX2K300ZlfbhkP74ZakXrRupw1sl5eu84lfvCzYWsyiGquKWu3RQLY%2BlgdUQK%2FXnZ%2B&X-Amz-Signature=4d4fa59db51cb3be5ffc7ea8515b66782cdb15451f20c549d51e870b6e881478&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2FQT3D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnm45goHAAx0uXtXeyGI60v1zjopqO%2BZGSobY4h0B46AIgC6waM5xdBhxQ2iaQN3kWEF%2Bfa%2B5ATa6Ng3NnKDmU%2FD8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKF%2BscZzeKzJUwtKOircA%2FRgU6iE5lTCUFFXHdLE8TXRaF7D0bihKEHSUBVSwihqljK4qeyKUZcXIEzFJ23H98CjCOFB93GIKBFS6OgakKxSfP1Bvq2oEDrj7fMPcGWjE9beVsLOtMa77DJkajASEAiWaMF1O4V3%2Fh88wzEYEtS8SdjeQNYbqNkWUaO56m2ypBA80gWGvw%2B3aUmj5esKv4qnlkMTuG1GB2hcZqT4czJaEx1iKVG3FJizcrjz4GImKFt1PsPbskGwEnMn%2FOOlK767Eo8z1VJkQvZtHpuVi7HPdBayk6JGvoZadrxabqSdzQQ6UCO6jiylIUdyu44PLv2UKKjXkwViZ5%2FgsUePW6e0XRYS7e7nDVI60T8eO4yZlUoWrDxkPa6bIn%2B7ftj6ZMB7tUwJl%2FKB%2BmiQgD3YCTYfM41TYQ0yQ7qRycXoKmfcI8ZdtsNo5Z3fkEGy%2FcmHRPFT8vA9ijm2LSqmDh8auph8U6MScmTm91ftAJ1mQwSvNuJy1%2BXLTkuZ2ItieNxs%2BtWslR%2FAPQefEAJ644BlrwDh2M1ykYhd%2F%2BvdwrJEYpFZeBXHOH453wUyMRU%2Bygl%2BbhRv563wSeuJ9DsYpzmW3N2LC%2F7F6ETVJ%2F%2B1JBw3OFubKRBRoiDDfKYezdKaMKnGgcAGOqUBtPIeaBhM%2FaK%2F66NbhDeyaCAI1HI5PZIpQ36y2LVgqs9FshkTvLoa1C15mm9puOgIGojCqZZyWuDM8eBpixL53dAR%2BZ2LbbKUPYi0pgpecquWFrNrgzAPw10sV%2BuWRpwgW%2FcMXblju5nFPMXap1qro0EkIIpX2K300ZlfbhkP74ZakXrRupw1sl5eu84lfvCzYWsyiGquKWu3RQLY%2BlgdUQK%2FXnZ%2B&X-Amz-Signature=afdecfe64fd5dccf043456a7ccdecbdcff2e1c70df967eed78e61a0b3786a8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2FQT3D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnm45goHAAx0uXtXeyGI60v1zjopqO%2BZGSobY4h0B46AIgC6waM5xdBhxQ2iaQN3kWEF%2Bfa%2B5ATa6Ng3NnKDmU%2FD8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKF%2BscZzeKzJUwtKOircA%2FRgU6iE5lTCUFFXHdLE8TXRaF7D0bihKEHSUBVSwihqljK4qeyKUZcXIEzFJ23H98CjCOFB93GIKBFS6OgakKxSfP1Bvq2oEDrj7fMPcGWjE9beVsLOtMa77DJkajASEAiWaMF1O4V3%2Fh88wzEYEtS8SdjeQNYbqNkWUaO56m2ypBA80gWGvw%2B3aUmj5esKv4qnlkMTuG1GB2hcZqT4czJaEx1iKVG3FJizcrjz4GImKFt1PsPbskGwEnMn%2FOOlK767Eo8z1VJkQvZtHpuVi7HPdBayk6JGvoZadrxabqSdzQQ6UCO6jiylIUdyu44PLv2UKKjXkwViZ5%2FgsUePW6e0XRYS7e7nDVI60T8eO4yZlUoWrDxkPa6bIn%2B7ftj6ZMB7tUwJl%2FKB%2BmiQgD3YCTYfM41TYQ0yQ7qRycXoKmfcI8ZdtsNo5Z3fkEGy%2FcmHRPFT8vA9ijm2LSqmDh8auph8U6MScmTm91ftAJ1mQwSvNuJy1%2BXLTkuZ2ItieNxs%2BtWslR%2FAPQefEAJ644BlrwDh2M1ykYhd%2F%2BvdwrJEYpFZeBXHOH453wUyMRU%2Bygl%2BbhRv563wSeuJ9DsYpzmW3N2LC%2F7F6ETVJ%2F%2B1JBw3OFubKRBRoiDDfKYezdKaMKnGgcAGOqUBtPIeaBhM%2FaK%2F66NbhDeyaCAI1HI5PZIpQ36y2LVgqs9FshkTvLoa1C15mm9puOgIGojCqZZyWuDM8eBpixL53dAR%2BZ2LbbKUPYi0pgpecquWFrNrgzAPw10sV%2BuWRpwgW%2FcMXblju5nFPMXap1qro0EkIIpX2K300ZlfbhkP74ZakXrRupw1sl5eu84lfvCzYWsyiGquKWu3RQLY%2BlgdUQK%2FXnZ%2B&X-Amz-Signature=55dda1844c5a95b7e8ab8093d259185c21f36e6791dd737115a0f68a64786a39&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2FQT3D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnm45goHAAx0uXtXeyGI60v1zjopqO%2BZGSobY4h0B46AIgC6waM5xdBhxQ2iaQN3kWEF%2Bfa%2B5ATa6Ng3NnKDmU%2FD8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKF%2BscZzeKzJUwtKOircA%2FRgU6iE5lTCUFFXHdLE8TXRaF7D0bihKEHSUBVSwihqljK4qeyKUZcXIEzFJ23H98CjCOFB93GIKBFS6OgakKxSfP1Bvq2oEDrj7fMPcGWjE9beVsLOtMa77DJkajASEAiWaMF1O4V3%2Fh88wzEYEtS8SdjeQNYbqNkWUaO56m2ypBA80gWGvw%2B3aUmj5esKv4qnlkMTuG1GB2hcZqT4czJaEx1iKVG3FJizcrjz4GImKFt1PsPbskGwEnMn%2FOOlK767Eo8z1VJkQvZtHpuVi7HPdBayk6JGvoZadrxabqSdzQQ6UCO6jiylIUdyu44PLv2UKKjXkwViZ5%2FgsUePW6e0XRYS7e7nDVI60T8eO4yZlUoWrDxkPa6bIn%2B7ftj6ZMB7tUwJl%2FKB%2BmiQgD3YCTYfM41TYQ0yQ7qRycXoKmfcI8ZdtsNo5Z3fkEGy%2FcmHRPFT8vA9ijm2LSqmDh8auph8U6MScmTm91ftAJ1mQwSvNuJy1%2BXLTkuZ2ItieNxs%2BtWslR%2FAPQefEAJ644BlrwDh2M1ykYhd%2F%2BvdwrJEYpFZeBXHOH453wUyMRU%2Bygl%2BbhRv563wSeuJ9DsYpzmW3N2LC%2F7F6ETVJ%2F%2B1JBw3OFubKRBRoiDDfKYezdKaMKnGgcAGOqUBtPIeaBhM%2FaK%2F66NbhDeyaCAI1HI5PZIpQ36y2LVgqs9FshkTvLoa1C15mm9puOgIGojCqZZyWuDM8eBpixL53dAR%2BZ2LbbKUPYi0pgpecquWFrNrgzAPw10sV%2BuWRpwgW%2FcMXblju5nFPMXap1qro0EkIIpX2K300ZlfbhkP74ZakXrRupw1sl5eu84lfvCzYWsyiGquKWu3RQLY%2BlgdUQK%2FXnZ%2B&X-Amz-Signature=62bd8a24a36d8270c2a36b4940aca021ef007a8719c0b22234253b80172a0305&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
