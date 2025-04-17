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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGYWXCGJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOGntF4DTQCfn%2BV%2FROv2T5hMrC5TfhmXQoRDRCfBV8hQIhAJA1ga6NRxx80gfL4DrFqRqEa0U2GTN%2FZBYz67afW1gyKv8DCGUQABoMNjM3NDIzMTgzODA1IgwJPe8WpmTaHwHknu0q3APbPtkQkFiBkeCMQEp%2BUebua%2B638ULuaWXTWrvF9jqrAc436FHQ6GFaeL7SW%2F0BQVSv5stoJn2VCPyHqT4tcFmxQ%2B95GBkTw6v6ELsuNMRCYLtQDxR8Bt9Gr7EMb9pgaxujW8PAeWAsAYLTleJ1Frnj6fTG0mo71PTJIHN3fwdjQ%2BPOoVT7opev74ePtR3r1PFbtEfqUfllcak8R57r0a5CffERHHeSwfgs7ntJ26HKo1WaH16V2v9QfSeuMpMWEhDVkyOx5urd5hN4n3sRj%2Fq5v1ORAYeqjbfzlwTS8onM1XlnxfMl1OgvlEa5nf%2FVzuP2Qut2yU44EMC8leLf0R4nRbocqIsEOEQtDqXyeagiBuu33hrUKDueZijygwLmuM6YeBC7hEQeYn%2FFd7h2%2FSfdeFW%2BCUUu7Iw3cw8vxsJITxBgyPqNt9jZlQA2CBIiau3BrMvXn2vID9yH88%2Fw3VPjBLSfFtfSGfflfFJIet1XSB9fReB3qc7W7WKn1fiINbtUGkWNWliKztb6W1w2OinPLuNAFxxtu43nDqPi6wFIiZq%2B8RsZ6P%2FmVDObJhINFzh3YX1%2Bf%2B5Hl5AUXlmY7KLrxT9VeGv1s1ScCCLuELXXB9LNbW%2BVdk2d1BlzmjD5toXABjqkAcKZI%2BQwJrajQVZ0RVE3B7hb0ZoqlFC1NVLavXJ9gNepUabVK%2FQyh%2BUwuYWVGluC14p6FU2WNsQaNB2jwGBjxvxXqsPlJDpPO%2BIWNRZNZ1KWRDdDZiC8GkgsGc%2BRtmzLRMTKldKognubasQt%2FMHwuRRw7bPoC%2BfVHr8RwZB04DzokDKs7CITeEqzLO9scMiboaGaYdZ2nZusSUycJK9JRvcbOKHs&X-Amz-Signature=7dc76f5ebd1995cf5a680bb49e690e4ffe2228fc1c3fcdb37e12a5d657b79fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGYWXCGJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOGntF4DTQCfn%2BV%2FROv2T5hMrC5TfhmXQoRDRCfBV8hQIhAJA1ga6NRxx80gfL4DrFqRqEa0U2GTN%2FZBYz67afW1gyKv8DCGUQABoMNjM3NDIzMTgzODA1IgwJPe8WpmTaHwHknu0q3APbPtkQkFiBkeCMQEp%2BUebua%2B638ULuaWXTWrvF9jqrAc436FHQ6GFaeL7SW%2F0BQVSv5stoJn2VCPyHqT4tcFmxQ%2B95GBkTw6v6ELsuNMRCYLtQDxR8Bt9Gr7EMb9pgaxujW8PAeWAsAYLTleJ1Frnj6fTG0mo71PTJIHN3fwdjQ%2BPOoVT7opev74ePtR3r1PFbtEfqUfllcak8R57r0a5CffERHHeSwfgs7ntJ26HKo1WaH16V2v9QfSeuMpMWEhDVkyOx5urd5hN4n3sRj%2Fq5v1ORAYeqjbfzlwTS8onM1XlnxfMl1OgvlEa5nf%2FVzuP2Qut2yU44EMC8leLf0R4nRbocqIsEOEQtDqXyeagiBuu33hrUKDueZijygwLmuM6YeBC7hEQeYn%2FFd7h2%2FSfdeFW%2BCUUu7Iw3cw8vxsJITxBgyPqNt9jZlQA2CBIiau3BrMvXn2vID9yH88%2Fw3VPjBLSfFtfSGfflfFJIet1XSB9fReB3qc7W7WKn1fiINbtUGkWNWliKztb6W1w2OinPLuNAFxxtu43nDqPi6wFIiZq%2B8RsZ6P%2FmVDObJhINFzh3YX1%2Bf%2B5Hl5AUXlmY7KLrxT9VeGv1s1ScCCLuELXXB9LNbW%2BVdk2d1BlzmjD5toXABjqkAcKZI%2BQwJrajQVZ0RVE3B7hb0ZoqlFC1NVLavXJ9gNepUabVK%2FQyh%2BUwuYWVGluC14p6FU2WNsQaNB2jwGBjxvxXqsPlJDpPO%2BIWNRZNZ1KWRDdDZiC8GkgsGc%2BRtmzLRMTKldKognubasQt%2FMHwuRRw7bPoC%2BfVHr8RwZB04DzokDKs7CITeEqzLO9scMiboaGaYdZ2nZusSUycJK9JRvcbOKHs&X-Amz-Signature=486c7e06eb0c0d9adb46983ec140722ff9dfe525686b7022f7e30bb3b549f879&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGYWXCGJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOGntF4DTQCfn%2BV%2FROv2T5hMrC5TfhmXQoRDRCfBV8hQIhAJA1ga6NRxx80gfL4DrFqRqEa0U2GTN%2FZBYz67afW1gyKv8DCGUQABoMNjM3NDIzMTgzODA1IgwJPe8WpmTaHwHknu0q3APbPtkQkFiBkeCMQEp%2BUebua%2B638ULuaWXTWrvF9jqrAc436FHQ6GFaeL7SW%2F0BQVSv5stoJn2VCPyHqT4tcFmxQ%2B95GBkTw6v6ELsuNMRCYLtQDxR8Bt9Gr7EMb9pgaxujW8PAeWAsAYLTleJ1Frnj6fTG0mo71PTJIHN3fwdjQ%2BPOoVT7opev74ePtR3r1PFbtEfqUfllcak8R57r0a5CffERHHeSwfgs7ntJ26HKo1WaH16V2v9QfSeuMpMWEhDVkyOx5urd5hN4n3sRj%2Fq5v1ORAYeqjbfzlwTS8onM1XlnxfMl1OgvlEa5nf%2FVzuP2Qut2yU44EMC8leLf0R4nRbocqIsEOEQtDqXyeagiBuu33hrUKDueZijygwLmuM6YeBC7hEQeYn%2FFd7h2%2FSfdeFW%2BCUUu7Iw3cw8vxsJITxBgyPqNt9jZlQA2CBIiau3BrMvXn2vID9yH88%2Fw3VPjBLSfFtfSGfflfFJIet1XSB9fReB3qc7W7WKn1fiINbtUGkWNWliKztb6W1w2OinPLuNAFxxtu43nDqPi6wFIiZq%2B8RsZ6P%2FmVDObJhINFzh3YX1%2Bf%2B5Hl5AUXlmY7KLrxT9VeGv1s1ScCCLuELXXB9LNbW%2BVdk2d1BlzmjD5toXABjqkAcKZI%2BQwJrajQVZ0RVE3B7hb0ZoqlFC1NVLavXJ9gNepUabVK%2FQyh%2BUwuYWVGluC14p6FU2WNsQaNB2jwGBjxvxXqsPlJDpPO%2BIWNRZNZ1KWRDdDZiC8GkgsGc%2BRtmzLRMTKldKognubasQt%2FMHwuRRw7bPoC%2BfVHr8RwZB04DzokDKs7CITeEqzLO9scMiboaGaYdZ2nZusSUycJK9JRvcbOKHs&X-Amz-Signature=fee13b652611684a793690fcfaaa0f04d0059d174019f5064342af1e58d5fb2a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGYWXCGJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOGntF4DTQCfn%2BV%2FROv2T5hMrC5TfhmXQoRDRCfBV8hQIhAJA1ga6NRxx80gfL4DrFqRqEa0U2GTN%2FZBYz67afW1gyKv8DCGUQABoMNjM3NDIzMTgzODA1IgwJPe8WpmTaHwHknu0q3APbPtkQkFiBkeCMQEp%2BUebua%2B638ULuaWXTWrvF9jqrAc436FHQ6GFaeL7SW%2F0BQVSv5stoJn2VCPyHqT4tcFmxQ%2B95GBkTw6v6ELsuNMRCYLtQDxR8Bt9Gr7EMb9pgaxujW8PAeWAsAYLTleJ1Frnj6fTG0mo71PTJIHN3fwdjQ%2BPOoVT7opev74ePtR3r1PFbtEfqUfllcak8R57r0a5CffERHHeSwfgs7ntJ26HKo1WaH16V2v9QfSeuMpMWEhDVkyOx5urd5hN4n3sRj%2Fq5v1ORAYeqjbfzlwTS8onM1XlnxfMl1OgvlEa5nf%2FVzuP2Qut2yU44EMC8leLf0R4nRbocqIsEOEQtDqXyeagiBuu33hrUKDueZijygwLmuM6YeBC7hEQeYn%2FFd7h2%2FSfdeFW%2BCUUu7Iw3cw8vxsJITxBgyPqNt9jZlQA2CBIiau3BrMvXn2vID9yH88%2Fw3VPjBLSfFtfSGfflfFJIet1XSB9fReB3qc7W7WKn1fiINbtUGkWNWliKztb6W1w2OinPLuNAFxxtu43nDqPi6wFIiZq%2B8RsZ6P%2FmVDObJhINFzh3YX1%2Bf%2B5Hl5AUXlmY7KLrxT9VeGv1s1ScCCLuELXXB9LNbW%2BVdk2d1BlzmjD5toXABjqkAcKZI%2BQwJrajQVZ0RVE3B7hb0ZoqlFC1NVLavXJ9gNepUabVK%2FQyh%2BUwuYWVGluC14p6FU2WNsQaNB2jwGBjxvxXqsPlJDpPO%2BIWNRZNZ1KWRDdDZiC8GkgsGc%2BRtmzLRMTKldKognubasQt%2FMHwuRRw7bPoC%2BfVHr8RwZB04DzokDKs7CITeEqzLO9scMiboaGaYdZ2nZusSUycJK9JRvcbOKHs&X-Amz-Signature=9e4fff9f233b7a3d3cbb7881d1a8989929d79b4a52fbc3056cd6757e8a54692e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGYWXCGJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOGntF4DTQCfn%2BV%2FROv2T5hMrC5TfhmXQoRDRCfBV8hQIhAJA1ga6NRxx80gfL4DrFqRqEa0U2GTN%2FZBYz67afW1gyKv8DCGUQABoMNjM3NDIzMTgzODA1IgwJPe8WpmTaHwHknu0q3APbPtkQkFiBkeCMQEp%2BUebua%2B638ULuaWXTWrvF9jqrAc436FHQ6GFaeL7SW%2F0BQVSv5stoJn2VCPyHqT4tcFmxQ%2B95GBkTw6v6ELsuNMRCYLtQDxR8Bt9Gr7EMb9pgaxujW8PAeWAsAYLTleJ1Frnj6fTG0mo71PTJIHN3fwdjQ%2BPOoVT7opev74ePtR3r1PFbtEfqUfllcak8R57r0a5CffERHHeSwfgs7ntJ26HKo1WaH16V2v9QfSeuMpMWEhDVkyOx5urd5hN4n3sRj%2Fq5v1ORAYeqjbfzlwTS8onM1XlnxfMl1OgvlEa5nf%2FVzuP2Qut2yU44EMC8leLf0R4nRbocqIsEOEQtDqXyeagiBuu33hrUKDueZijygwLmuM6YeBC7hEQeYn%2FFd7h2%2FSfdeFW%2BCUUu7Iw3cw8vxsJITxBgyPqNt9jZlQA2CBIiau3BrMvXn2vID9yH88%2Fw3VPjBLSfFtfSGfflfFJIet1XSB9fReB3qc7W7WKn1fiINbtUGkWNWliKztb6W1w2OinPLuNAFxxtu43nDqPi6wFIiZq%2B8RsZ6P%2FmVDObJhINFzh3YX1%2Bf%2B5Hl5AUXlmY7KLrxT9VeGv1s1ScCCLuELXXB9LNbW%2BVdk2d1BlzmjD5toXABjqkAcKZI%2BQwJrajQVZ0RVE3B7hb0ZoqlFC1NVLavXJ9gNepUabVK%2FQyh%2BUwuYWVGluC14p6FU2WNsQaNB2jwGBjxvxXqsPlJDpPO%2BIWNRZNZ1KWRDdDZiC8GkgsGc%2BRtmzLRMTKldKognubasQt%2FMHwuRRw7bPoC%2BfVHr8RwZB04DzokDKs7CITeEqzLO9scMiboaGaYdZ2nZusSUycJK9JRvcbOKHs&X-Amz-Signature=7a3b3701a5573f8ccee56ffc573f861170b49da5b1db65c15576f6ff809d07c5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGYWXCGJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOGntF4DTQCfn%2BV%2FROv2T5hMrC5TfhmXQoRDRCfBV8hQIhAJA1ga6NRxx80gfL4DrFqRqEa0U2GTN%2FZBYz67afW1gyKv8DCGUQABoMNjM3NDIzMTgzODA1IgwJPe8WpmTaHwHknu0q3APbPtkQkFiBkeCMQEp%2BUebua%2B638ULuaWXTWrvF9jqrAc436FHQ6GFaeL7SW%2F0BQVSv5stoJn2VCPyHqT4tcFmxQ%2B95GBkTw6v6ELsuNMRCYLtQDxR8Bt9Gr7EMb9pgaxujW8PAeWAsAYLTleJ1Frnj6fTG0mo71PTJIHN3fwdjQ%2BPOoVT7opev74ePtR3r1PFbtEfqUfllcak8R57r0a5CffERHHeSwfgs7ntJ26HKo1WaH16V2v9QfSeuMpMWEhDVkyOx5urd5hN4n3sRj%2Fq5v1ORAYeqjbfzlwTS8onM1XlnxfMl1OgvlEa5nf%2FVzuP2Qut2yU44EMC8leLf0R4nRbocqIsEOEQtDqXyeagiBuu33hrUKDueZijygwLmuM6YeBC7hEQeYn%2FFd7h2%2FSfdeFW%2BCUUu7Iw3cw8vxsJITxBgyPqNt9jZlQA2CBIiau3BrMvXn2vID9yH88%2Fw3VPjBLSfFtfSGfflfFJIet1XSB9fReB3qc7W7WKn1fiINbtUGkWNWliKztb6W1w2OinPLuNAFxxtu43nDqPi6wFIiZq%2B8RsZ6P%2FmVDObJhINFzh3YX1%2Bf%2B5Hl5AUXlmY7KLrxT9VeGv1s1ScCCLuELXXB9LNbW%2BVdk2d1BlzmjD5toXABjqkAcKZI%2BQwJrajQVZ0RVE3B7hb0ZoqlFC1NVLavXJ9gNepUabVK%2FQyh%2BUwuYWVGluC14p6FU2WNsQaNB2jwGBjxvxXqsPlJDpPO%2BIWNRZNZ1KWRDdDZiC8GkgsGc%2BRtmzLRMTKldKognubasQt%2FMHwuRRw7bPoC%2BfVHr8RwZB04DzokDKs7CITeEqzLO9scMiboaGaYdZ2nZusSUycJK9JRvcbOKHs&X-Amz-Signature=19bba34126ac11ecaf7ea01c2cf158135392c0a61075c658d698b13bc79cb460&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGYWXCGJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOGntF4DTQCfn%2BV%2FROv2T5hMrC5TfhmXQoRDRCfBV8hQIhAJA1ga6NRxx80gfL4DrFqRqEa0U2GTN%2FZBYz67afW1gyKv8DCGUQABoMNjM3NDIzMTgzODA1IgwJPe8WpmTaHwHknu0q3APbPtkQkFiBkeCMQEp%2BUebua%2B638ULuaWXTWrvF9jqrAc436FHQ6GFaeL7SW%2F0BQVSv5stoJn2VCPyHqT4tcFmxQ%2B95GBkTw6v6ELsuNMRCYLtQDxR8Bt9Gr7EMb9pgaxujW8PAeWAsAYLTleJ1Frnj6fTG0mo71PTJIHN3fwdjQ%2BPOoVT7opev74ePtR3r1PFbtEfqUfllcak8R57r0a5CffERHHeSwfgs7ntJ26HKo1WaH16V2v9QfSeuMpMWEhDVkyOx5urd5hN4n3sRj%2Fq5v1ORAYeqjbfzlwTS8onM1XlnxfMl1OgvlEa5nf%2FVzuP2Qut2yU44EMC8leLf0R4nRbocqIsEOEQtDqXyeagiBuu33hrUKDueZijygwLmuM6YeBC7hEQeYn%2FFd7h2%2FSfdeFW%2BCUUu7Iw3cw8vxsJITxBgyPqNt9jZlQA2CBIiau3BrMvXn2vID9yH88%2Fw3VPjBLSfFtfSGfflfFJIet1XSB9fReB3qc7W7WKn1fiINbtUGkWNWliKztb6W1w2OinPLuNAFxxtu43nDqPi6wFIiZq%2B8RsZ6P%2FmVDObJhINFzh3YX1%2Bf%2B5Hl5AUXlmY7KLrxT9VeGv1s1ScCCLuELXXB9LNbW%2BVdk2d1BlzmjD5toXABjqkAcKZI%2BQwJrajQVZ0RVE3B7hb0ZoqlFC1NVLavXJ9gNepUabVK%2FQyh%2BUwuYWVGluC14p6FU2WNsQaNB2jwGBjxvxXqsPlJDpPO%2BIWNRZNZ1KWRDdDZiC8GkgsGc%2BRtmzLRMTKldKognubasQt%2FMHwuRRw7bPoC%2BfVHr8RwZB04DzokDKs7CITeEqzLO9scMiboaGaYdZ2nZusSUycJK9JRvcbOKHs&X-Amz-Signature=430c888ff7c3c6224ccddd73017a9674628cb96b20d2ddc2c34e7320b0ff597a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
