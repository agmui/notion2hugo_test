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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D3U5427%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLOJd%2BKDySU8degNvejD6LVQb%2BWqFRbIB8JVxxrnf1rwIhANoiT3iwVlgxmVsinlaN9Xd7Ml9KFQjCDRnzbMx0QRtPKv8DCHoQABoMNjM3NDIzMTgzODA1IgzwIKAJlkYkEiwaSWwq3AMpnYsRKEtUgJFlTP1U6Px2dOAKxHKly6m5ZZOZBB6yT0TVl0DoBnncDQ7MB5bIqdtCbmfMS%2FcXa%2BlzqA6QzEXCPT7ddhZALgOz4e9sT6qeVfZ9uD0pTA1l5niQpiHE9g98bncHw31te1wYoEEphF6AfmRsb9M01gV030Nqo%2BiJMgLV5a17wj%2BdQdu3F189Z6SZ53VPejWpgFCYEn9AzJ%2BV%2FQQuElk6deAdGxPmlhquS9Zqi5NN79UOp4VM95pT5kv8QLTBMWIeSXfJVn3mBeMnnFh0Ot76v3dDy71KpgsEE4S2cPJ1gbJLKq0T5L1oiDgHfLPndmONt%2BWBkCiyZIEPFzJuAhoNRYHmV%2Brq9lWVXRHmrjVAzMugGuRDn6lqn5yPUvF8BNb9Ep78zEYOPRVJb1F2vxu%2FnVL4K6iB3NI44RX35CKrIG5jrLKF02fhpE7oyKRvmls5%2BoHR4RSrsW7ORacPep%2BeRFXA%2FDWehrIsBiKnyWbzFjzvWNsTSxRZCVtgLgeyBHHWH41sXGd4Zh0HK73xijqY6au%2FYIA816G320%2BuQTap88AgXERt2oJb2Iz9d%2BUoASFRxY4nwVLsfXfyID4MHhJT0IluHacF3EnfvLjY6X%2BPWYLsQtr%2F2TCJ%2BNzBBjqkAcJTxiulcpMKHqbVo5VxuOl0O%2Ffm7%2B7009qQzuoa7oR9c0zGflbjERi7PpYGvL6Dc72pZxxV3vXhZ2lrb8Cxe%2F%2F1Kbst6ix53chvhfvWQvW2z0gXiga1ZrgjxMAyUM6utyFCMczYIFVaSbCL9sM7Jztr%2FABMnzlhBfZhB4ccjcY2G6MPso8MsLjGnmzekqNvseKXM7kMENfD08HUMpa8Fsm%2Fnukm&X-Amz-Signature=88207d693dc704649a4ed93ad107378d7996c7fa356ed43886a8d9a97dbe8ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D3U5427%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLOJd%2BKDySU8degNvejD6LVQb%2BWqFRbIB8JVxxrnf1rwIhANoiT3iwVlgxmVsinlaN9Xd7Ml9KFQjCDRnzbMx0QRtPKv8DCHoQABoMNjM3NDIzMTgzODA1IgzwIKAJlkYkEiwaSWwq3AMpnYsRKEtUgJFlTP1U6Px2dOAKxHKly6m5ZZOZBB6yT0TVl0DoBnncDQ7MB5bIqdtCbmfMS%2FcXa%2BlzqA6QzEXCPT7ddhZALgOz4e9sT6qeVfZ9uD0pTA1l5niQpiHE9g98bncHw31te1wYoEEphF6AfmRsb9M01gV030Nqo%2BiJMgLV5a17wj%2BdQdu3F189Z6SZ53VPejWpgFCYEn9AzJ%2BV%2FQQuElk6deAdGxPmlhquS9Zqi5NN79UOp4VM95pT5kv8QLTBMWIeSXfJVn3mBeMnnFh0Ot76v3dDy71KpgsEE4S2cPJ1gbJLKq0T5L1oiDgHfLPndmONt%2BWBkCiyZIEPFzJuAhoNRYHmV%2Brq9lWVXRHmrjVAzMugGuRDn6lqn5yPUvF8BNb9Ep78zEYOPRVJb1F2vxu%2FnVL4K6iB3NI44RX35CKrIG5jrLKF02fhpE7oyKRvmls5%2BoHR4RSrsW7ORacPep%2BeRFXA%2FDWehrIsBiKnyWbzFjzvWNsTSxRZCVtgLgeyBHHWH41sXGd4Zh0HK73xijqY6au%2FYIA816G320%2BuQTap88AgXERt2oJb2Iz9d%2BUoASFRxY4nwVLsfXfyID4MHhJT0IluHacF3EnfvLjY6X%2BPWYLsQtr%2F2TCJ%2BNzBBjqkAcJTxiulcpMKHqbVo5VxuOl0O%2Ffm7%2B7009qQzuoa7oR9c0zGflbjERi7PpYGvL6Dc72pZxxV3vXhZ2lrb8Cxe%2F%2F1Kbst6ix53chvhfvWQvW2z0gXiga1ZrgjxMAyUM6utyFCMczYIFVaSbCL9sM7Jztr%2FABMnzlhBfZhB4ccjcY2G6MPso8MsLjGnmzekqNvseKXM7kMENfD08HUMpa8Fsm%2Fnukm&X-Amz-Signature=a688761373b3df3986bc2a0ac2690f4fe62f64b9fe8303dfcde22da66c368fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D3U5427%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLOJd%2BKDySU8degNvejD6LVQb%2BWqFRbIB8JVxxrnf1rwIhANoiT3iwVlgxmVsinlaN9Xd7Ml9KFQjCDRnzbMx0QRtPKv8DCHoQABoMNjM3NDIzMTgzODA1IgzwIKAJlkYkEiwaSWwq3AMpnYsRKEtUgJFlTP1U6Px2dOAKxHKly6m5ZZOZBB6yT0TVl0DoBnncDQ7MB5bIqdtCbmfMS%2FcXa%2BlzqA6QzEXCPT7ddhZALgOz4e9sT6qeVfZ9uD0pTA1l5niQpiHE9g98bncHw31te1wYoEEphF6AfmRsb9M01gV030Nqo%2BiJMgLV5a17wj%2BdQdu3F189Z6SZ53VPejWpgFCYEn9AzJ%2BV%2FQQuElk6deAdGxPmlhquS9Zqi5NN79UOp4VM95pT5kv8QLTBMWIeSXfJVn3mBeMnnFh0Ot76v3dDy71KpgsEE4S2cPJ1gbJLKq0T5L1oiDgHfLPndmONt%2BWBkCiyZIEPFzJuAhoNRYHmV%2Brq9lWVXRHmrjVAzMugGuRDn6lqn5yPUvF8BNb9Ep78zEYOPRVJb1F2vxu%2FnVL4K6iB3NI44RX35CKrIG5jrLKF02fhpE7oyKRvmls5%2BoHR4RSrsW7ORacPep%2BeRFXA%2FDWehrIsBiKnyWbzFjzvWNsTSxRZCVtgLgeyBHHWH41sXGd4Zh0HK73xijqY6au%2FYIA816G320%2BuQTap88AgXERt2oJb2Iz9d%2BUoASFRxY4nwVLsfXfyID4MHhJT0IluHacF3EnfvLjY6X%2BPWYLsQtr%2F2TCJ%2BNzBBjqkAcJTxiulcpMKHqbVo5VxuOl0O%2Ffm7%2B7009qQzuoa7oR9c0zGflbjERi7PpYGvL6Dc72pZxxV3vXhZ2lrb8Cxe%2F%2F1Kbst6ix53chvhfvWQvW2z0gXiga1ZrgjxMAyUM6utyFCMczYIFVaSbCL9sM7Jztr%2FABMnzlhBfZhB4ccjcY2G6MPso8MsLjGnmzekqNvseKXM7kMENfD08HUMpa8Fsm%2Fnukm&X-Amz-Signature=a224f8801bad41ad4dc1dff7c7d01f2708339c95525e55baa2693c302eb82109&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D3U5427%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLOJd%2BKDySU8degNvejD6LVQb%2BWqFRbIB8JVxxrnf1rwIhANoiT3iwVlgxmVsinlaN9Xd7Ml9KFQjCDRnzbMx0QRtPKv8DCHoQABoMNjM3NDIzMTgzODA1IgzwIKAJlkYkEiwaSWwq3AMpnYsRKEtUgJFlTP1U6Px2dOAKxHKly6m5ZZOZBB6yT0TVl0DoBnncDQ7MB5bIqdtCbmfMS%2FcXa%2BlzqA6QzEXCPT7ddhZALgOz4e9sT6qeVfZ9uD0pTA1l5niQpiHE9g98bncHw31te1wYoEEphF6AfmRsb9M01gV030Nqo%2BiJMgLV5a17wj%2BdQdu3F189Z6SZ53VPejWpgFCYEn9AzJ%2BV%2FQQuElk6deAdGxPmlhquS9Zqi5NN79UOp4VM95pT5kv8QLTBMWIeSXfJVn3mBeMnnFh0Ot76v3dDy71KpgsEE4S2cPJ1gbJLKq0T5L1oiDgHfLPndmONt%2BWBkCiyZIEPFzJuAhoNRYHmV%2Brq9lWVXRHmrjVAzMugGuRDn6lqn5yPUvF8BNb9Ep78zEYOPRVJb1F2vxu%2FnVL4K6iB3NI44RX35CKrIG5jrLKF02fhpE7oyKRvmls5%2BoHR4RSrsW7ORacPep%2BeRFXA%2FDWehrIsBiKnyWbzFjzvWNsTSxRZCVtgLgeyBHHWH41sXGd4Zh0HK73xijqY6au%2FYIA816G320%2BuQTap88AgXERt2oJb2Iz9d%2BUoASFRxY4nwVLsfXfyID4MHhJT0IluHacF3EnfvLjY6X%2BPWYLsQtr%2F2TCJ%2BNzBBjqkAcJTxiulcpMKHqbVo5VxuOl0O%2Ffm7%2B7009qQzuoa7oR9c0zGflbjERi7PpYGvL6Dc72pZxxV3vXhZ2lrb8Cxe%2F%2F1Kbst6ix53chvhfvWQvW2z0gXiga1ZrgjxMAyUM6utyFCMczYIFVaSbCL9sM7Jztr%2FABMnzlhBfZhB4ccjcY2G6MPso8MsLjGnmzekqNvseKXM7kMENfD08HUMpa8Fsm%2Fnukm&X-Amz-Signature=067e72b512df3fccfee0db89c8266a88aaa6657754868e598e1cf00239f3f6c4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D3U5427%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLOJd%2BKDySU8degNvejD6LVQb%2BWqFRbIB8JVxxrnf1rwIhANoiT3iwVlgxmVsinlaN9Xd7Ml9KFQjCDRnzbMx0QRtPKv8DCHoQABoMNjM3NDIzMTgzODA1IgzwIKAJlkYkEiwaSWwq3AMpnYsRKEtUgJFlTP1U6Px2dOAKxHKly6m5ZZOZBB6yT0TVl0DoBnncDQ7MB5bIqdtCbmfMS%2FcXa%2BlzqA6QzEXCPT7ddhZALgOz4e9sT6qeVfZ9uD0pTA1l5niQpiHE9g98bncHw31te1wYoEEphF6AfmRsb9M01gV030Nqo%2BiJMgLV5a17wj%2BdQdu3F189Z6SZ53VPejWpgFCYEn9AzJ%2BV%2FQQuElk6deAdGxPmlhquS9Zqi5NN79UOp4VM95pT5kv8QLTBMWIeSXfJVn3mBeMnnFh0Ot76v3dDy71KpgsEE4S2cPJ1gbJLKq0T5L1oiDgHfLPndmONt%2BWBkCiyZIEPFzJuAhoNRYHmV%2Brq9lWVXRHmrjVAzMugGuRDn6lqn5yPUvF8BNb9Ep78zEYOPRVJb1F2vxu%2FnVL4K6iB3NI44RX35CKrIG5jrLKF02fhpE7oyKRvmls5%2BoHR4RSrsW7ORacPep%2BeRFXA%2FDWehrIsBiKnyWbzFjzvWNsTSxRZCVtgLgeyBHHWH41sXGd4Zh0HK73xijqY6au%2FYIA816G320%2BuQTap88AgXERt2oJb2Iz9d%2BUoASFRxY4nwVLsfXfyID4MHhJT0IluHacF3EnfvLjY6X%2BPWYLsQtr%2F2TCJ%2BNzBBjqkAcJTxiulcpMKHqbVo5VxuOl0O%2Ffm7%2B7009qQzuoa7oR9c0zGflbjERi7PpYGvL6Dc72pZxxV3vXhZ2lrb8Cxe%2F%2F1Kbst6ix53chvhfvWQvW2z0gXiga1ZrgjxMAyUM6utyFCMczYIFVaSbCL9sM7Jztr%2FABMnzlhBfZhB4ccjcY2G6MPso8MsLjGnmzekqNvseKXM7kMENfD08HUMpa8Fsm%2Fnukm&X-Amz-Signature=c0ec6ead194657064c4340b64f3ef2ad204f9f305ca03842f651b62076c331fe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D3U5427%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLOJd%2BKDySU8degNvejD6LVQb%2BWqFRbIB8JVxxrnf1rwIhANoiT3iwVlgxmVsinlaN9Xd7Ml9KFQjCDRnzbMx0QRtPKv8DCHoQABoMNjM3NDIzMTgzODA1IgzwIKAJlkYkEiwaSWwq3AMpnYsRKEtUgJFlTP1U6Px2dOAKxHKly6m5ZZOZBB6yT0TVl0DoBnncDQ7MB5bIqdtCbmfMS%2FcXa%2BlzqA6QzEXCPT7ddhZALgOz4e9sT6qeVfZ9uD0pTA1l5niQpiHE9g98bncHw31te1wYoEEphF6AfmRsb9M01gV030Nqo%2BiJMgLV5a17wj%2BdQdu3F189Z6SZ53VPejWpgFCYEn9AzJ%2BV%2FQQuElk6deAdGxPmlhquS9Zqi5NN79UOp4VM95pT5kv8QLTBMWIeSXfJVn3mBeMnnFh0Ot76v3dDy71KpgsEE4S2cPJ1gbJLKq0T5L1oiDgHfLPndmONt%2BWBkCiyZIEPFzJuAhoNRYHmV%2Brq9lWVXRHmrjVAzMugGuRDn6lqn5yPUvF8BNb9Ep78zEYOPRVJb1F2vxu%2FnVL4K6iB3NI44RX35CKrIG5jrLKF02fhpE7oyKRvmls5%2BoHR4RSrsW7ORacPep%2BeRFXA%2FDWehrIsBiKnyWbzFjzvWNsTSxRZCVtgLgeyBHHWH41sXGd4Zh0HK73xijqY6au%2FYIA816G320%2BuQTap88AgXERt2oJb2Iz9d%2BUoASFRxY4nwVLsfXfyID4MHhJT0IluHacF3EnfvLjY6X%2BPWYLsQtr%2F2TCJ%2BNzBBjqkAcJTxiulcpMKHqbVo5VxuOl0O%2Ffm7%2B7009qQzuoa7oR9c0zGflbjERi7PpYGvL6Dc72pZxxV3vXhZ2lrb8Cxe%2F%2F1Kbst6ix53chvhfvWQvW2z0gXiga1ZrgjxMAyUM6utyFCMczYIFVaSbCL9sM7Jztr%2FABMnzlhBfZhB4ccjcY2G6MPso8MsLjGnmzekqNvseKXM7kMENfD08HUMpa8Fsm%2Fnukm&X-Amz-Signature=99c80d261cb0e511624e11b1cc084dc407d8177ea9493a5fffbd6aec416f8f97&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D3U5427%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLOJd%2BKDySU8degNvejD6LVQb%2BWqFRbIB8JVxxrnf1rwIhANoiT3iwVlgxmVsinlaN9Xd7Ml9KFQjCDRnzbMx0QRtPKv8DCHoQABoMNjM3NDIzMTgzODA1IgzwIKAJlkYkEiwaSWwq3AMpnYsRKEtUgJFlTP1U6Px2dOAKxHKly6m5ZZOZBB6yT0TVl0DoBnncDQ7MB5bIqdtCbmfMS%2FcXa%2BlzqA6QzEXCPT7ddhZALgOz4e9sT6qeVfZ9uD0pTA1l5niQpiHE9g98bncHw31te1wYoEEphF6AfmRsb9M01gV030Nqo%2BiJMgLV5a17wj%2BdQdu3F189Z6SZ53VPejWpgFCYEn9AzJ%2BV%2FQQuElk6deAdGxPmlhquS9Zqi5NN79UOp4VM95pT5kv8QLTBMWIeSXfJVn3mBeMnnFh0Ot76v3dDy71KpgsEE4S2cPJ1gbJLKq0T5L1oiDgHfLPndmONt%2BWBkCiyZIEPFzJuAhoNRYHmV%2Brq9lWVXRHmrjVAzMugGuRDn6lqn5yPUvF8BNb9Ep78zEYOPRVJb1F2vxu%2FnVL4K6iB3NI44RX35CKrIG5jrLKF02fhpE7oyKRvmls5%2BoHR4RSrsW7ORacPep%2BeRFXA%2FDWehrIsBiKnyWbzFjzvWNsTSxRZCVtgLgeyBHHWH41sXGd4Zh0HK73xijqY6au%2FYIA816G320%2BuQTap88AgXERt2oJb2Iz9d%2BUoASFRxY4nwVLsfXfyID4MHhJT0IluHacF3EnfvLjY6X%2BPWYLsQtr%2F2TCJ%2BNzBBjqkAcJTxiulcpMKHqbVo5VxuOl0O%2Ffm7%2B7009qQzuoa7oR9c0zGflbjERi7PpYGvL6Dc72pZxxV3vXhZ2lrb8Cxe%2F%2F1Kbst6ix53chvhfvWQvW2z0gXiga1ZrgjxMAyUM6utyFCMczYIFVaSbCL9sM7Jztr%2FABMnzlhBfZhB4ccjcY2G6MPso8MsLjGnmzekqNvseKXM7kMENfD08HUMpa8Fsm%2Fnukm&X-Amz-Signature=91c5d8ccaad380135e7a3bfd0d2143ddb909cee5c115b8b8a3f341ebe106c2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
