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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYY53NS3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWRhIEI6AmpIWP0B6QDinGpjJZ1CuymHYW0koH5FbUsAiBm7%2Feq7CSbUumXOhgzx5M5TfuXuCtnqCPzV5%2FlwUBztSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM00RnVzUMBzLKREtUKtwD5Ueh39Al9KnSvR9jcgtXMLBQwkZyjw2zSQCq1UzUqDZ7xgkwM6GrhDiPLUkOTYjPV2k0aOxG9CYMCqVpNq%2BtnblcSa42Y054hvZmNRwJOScIp32BClOXgxlJRqnkZ7Bl%2BltCIus5F2q5JKwPEBbKwK%2FAwlvIdOPo9%2BvZo3tdWzqAN9qhMi%2BLlpd4DX8Jkw%2BITxyvUtsEM73urYHWgfYes%2BVRqkgR4tM85QMc71RSNnZRV7OYNUcWa9jDWtY4e7lsUNOe42KwDpP2kW9Vz9K0HnJ6%2Bk3KKbhoQ0xnm23C3m%2Fg7Q4hB93RoIVpunDo%2FAq0TXKTcWnRRenLAOdtRYiXGk4JcBvPxrQCsvzBusAfcZDhOehrm2WkqT30ESdFl%2B3Tf%2FnK6fKdGJB6r3xoV9ezs1YQVdFWuS6pqgFabdozgvW2tkq%2F%2BbZhCX%2FwchOVjNTdCJ2i8pCEdQbU8DOin%2BB2J%2FrHNIJKcwzOpqqFgxSA01Hd8HFFa9x8QWIR4CoP8ZfpzICxAuD05WBCdGCLGpLiP%2F07teNNmm%2BY65kULA2UEBpOvBN6bcp2DhAX3oREzg6CLnPKPaHa%2FxZTpMTc%2BsbmXhFr%2FPbCGpliXU81iKy7r3ar2%2BTTKkHr9xRfzo8wlMnyvwY6pgFgOnaKPKEOwj9vWgk8Xu1rwKTmbm6boX%2FauQTpnz%2BXMeOWyhe%2BkO5C5hACipUydaUtNyql9D9IkH44TjaAaSb2RCU0vLDkWhgJMzjSLPPI7tNW2immBGbB9X0K6y0oLvWb5%2B%2FEaV2yigJHBmop8TOfj9XWrqRByq0VIQ603vZVTQjL%2FUtW49slnlUC%2B26VUk1ymOIwfHAVgQmGo17zdry6e%2BHeBkLE&X-Amz-Signature=febf6448859a7e0fdc50b632dca8be9354454cd3e37dbb9dad858f6955b07a9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYY53NS3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWRhIEI6AmpIWP0B6QDinGpjJZ1CuymHYW0koH5FbUsAiBm7%2Feq7CSbUumXOhgzx5M5TfuXuCtnqCPzV5%2FlwUBztSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM00RnVzUMBzLKREtUKtwD5Ueh39Al9KnSvR9jcgtXMLBQwkZyjw2zSQCq1UzUqDZ7xgkwM6GrhDiPLUkOTYjPV2k0aOxG9CYMCqVpNq%2BtnblcSa42Y054hvZmNRwJOScIp32BClOXgxlJRqnkZ7Bl%2BltCIus5F2q5JKwPEBbKwK%2FAwlvIdOPo9%2BvZo3tdWzqAN9qhMi%2BLlpd4DX8Jkw%2BITxyvUtsEM73urYHWgfYes%2BVRqkgR4tM85QMc71RSNnZRV7OYNUcWa9jDWtY4e7lsUNOe42KwDpP2kW9Vz9K0HnJ6%2Bk3KKbhoQ0xnm23C3m%2Fg7Q4hB93RoIVpunDo%2FAq0TXKTcWnRRenLAOdtRYiXGk4JcBvPxrQCsvzBusAfcZDhOehrm2WkqT30ESdFl%2B3Tf%2FnK6fKdGJB6r3xoV9ezs1YQVdFWuS6pqgFabdozgvW2tkq%2F%2BbZhCX%2FwchOVjNTdCJ2i8pCEdQbU8DOin%2BB2J%2FrHNIJKcwzOpqqFgxSA01Hd8HFFa9x8QWIR4CoP8ZfpzICxAuD05WBCdGCLGpLiP%2F07teNNmm%2BY65kULA2UEBpOvBN6bcp2DhAX3oREzg6CLnPKPaHa%2FxZTpMTc%2BsbmXhFr%2FPbCGpliXU81iKy7r3ar2%2BTTKkHr9xRfzo8wlMnyvwY6pgFgOnaKPKEOwj9vWgk8Xu1rwKTmbm6boX%2FauQTpnz%2BXMeOWyhe%2BkO5C5hACipUydaUtNyql9D9IkH44TjaAaSb2RCU0vLDkWhgJMzjSLPPI7tNW2immBGbB9X0K6y0oLvWb5%2B%2FEaV2yigJHBmop8TOfj9XWrqRByq0VIQ603vZVTQjL%2FUtW49slnlUC%2B26VUk1ymOIwfHAVgQmGo17zdry6e%2BHeBkLE&X-Amz-Signature=b8547a5264b76750fc4227d1d24062cddf37cdd5b4f74ae543bb678833d09c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYY53NS3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWRhIEI6AmpIWP0B6QDinGpjJZ1CuymHYW0koH5FbUsAiBm7%2Feq7CSbUumXOhgzx5M5TfuXuCtnqCPzV5%2FlwUBztSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM00RnVzUMBzLKREtUKtwD5Ueh39Al9KnSvR9jcgtXMLBQwkZyjw2zSQCq1UzUqDZ7xgkwM6GrhDiPLUkOTYjPV2k0aOxG9CYMCqVpNq%2BtnblcSa42Y054hvZmNRwJOScIp32BClOXgxlJRqnkZ7Bl%2BltCIus5F2q5JKwPEBbKwK%2FAwlvIdOPo9%2BvZo3tdWzqAN9qhMi%2BLlpd4DX8Jkw%2BITxyvUtsEM73urYHWgfYes%2BVRqkgR4tM85QMc71RSNnZRV7OYNUcWa9jDWtY4e7lsUNOe42KwDpP2kW9Vz9K0HnJ6%2Bk3KKbhoQ0xnm23C3m%2Fg7Q4hB93RoIVpunDo%2FAq0TXKTcWnRRenLAOdtRYiXGk4JcBvPxrQCsvzBusAfcZDhOehrm2WkqT30ESdFl%2B3Tf%2FnK6fKdGJB6r3xoV9ezs1YQVdFWuS6pqgFabdozgvW2tkq%2F%2BbZhCX%2FwchOVjNTdCJ2i8pCEdQbU8DOin%2BB2J%2FrHNIJKcwzOpqqFgxSA01Hd8HFFa9x8QWIR4CoP8ZfpzICxAuD05WBCdGCLGpLiP%2F07teNNmm%2BY65kULA2UEBpOvBN6bcp2DhAX3oREzg6CLnPKPaHa%2FxZTpMTc%2BsbmXhFr%2FPbCGpliXU81iKy7r3ar2%2BTTKkHr9xRfzo8wlMnyvwY6pgFgOnaKPKEOwj9vWgk8Xu1rwKTmbm6boX%2FauQTpnz%2BXMeOWyhe%2BkO5C5hACipUydaUtNyql9D9IkH44TjaAaSb2RCU0vLDkWhgJMzjSLPPI7tNW2immBGbB9X0K6y0oLvWb5%2B%2FEaV2yigJHBmop8TOfj9XWrqRByq0VIQ603vZVTQjL%2FUtW49slnlUC%2B26VUk1ymOIwfHAVgQmGo17zdry6e%2BHeBkLE&X-Amz-Signature=c435a0e5ed4a8764e146ea8701c6466df9db88a938d85675bdd51530cfa58624&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYY53NS3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWRhIEI6AmpIWP0B6QDinGpjJZ1CuymHYW0koH5FbUsAiBm7%2Feq7CSbUumXOhgzx5M5TfuXuCtnqCPzV5%2FlwUBztSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM00RnVzUMBzLKREtUKtwD5Ueh39Al9KnSvR9jcgtXMLBQwkZyjw2zSQCq1UzUqDZ7xgkwM6GrhDiPLUkOTYjPV2k0aOxG9CYMCqVpNq%2BtnblcSa42Y054hvZmNRwJOScIp32BClOXgxlJRqnkZ7Bl%2BltCIus5F2q5JKwPEBbKwK%2FAwlvIdOPo9%2BvZo3tdWzqAN9qhMi%2BLlpd4DX8Jkw%2BITxyvUtsEM73urYHWgfYes%2BVRqkgR4tM85QMc71RSNnZRV7OYNUcWa9jDWtY4e7lsUNOe42KwDpP2kW9Vz9K0HnJ6%2Bk3KKbhoQ0xnm23C3m%2Fg7Q4hB93RoIVpunDo%2FAq0TXKTcWnRRenLAOdtRYiXGk4JcBvPxrQCsvzBusAfcZDhOehrm2WkqT30ESdFl%2B3Tf%2FnK6fKdGJB6r3xoV9ezs1YQVdFWuS6pqgFabdozgvW2tkq%2F%2BbZhCX%2FwchOVjNTdCJ2i8pCEdQbU8DOin%2BB2J%2FrHNIJKcwzOpqqFgxSA01Hd8HFFa9x8QWIR4CoP8ZfpzICxAuD05WBCdGCLGpLiP%2F07teNNmm%2BY65kULA2UEBpOvBN6bcp2DhAX3oREzg6CLnPKPaHa%2FxZTpMTc%2BsbmXhFr%2FPbCGpliXU81iKy7r3ar2%2BTTKkHr9xRfzo8wlMnyvwY6pgFgOnaKPKEOwj9vWgk8Xu1rwKTmbm6boX%2FauQTpnz%2BXMeOWyhe%2BkO5C5hACipUydaUtNyql9D9IkH44TjaAaSb2RCU0vLDkWhgJMzjSLPPI7tNW2immBGbB9X0K6y0oLvWb5%2B%2FEaV2yigJHBmop8TOfj9XWrqRByq0VIQ603vZVTQjL%2FUtW49slnlUC%2B26VUk1ymOIwfHAVgQmGo17zdry6e%2BHeBkLE&X-Amz-Signature=6fb278723bb7444db2ea610f2c0ec09ac5710498348163f61893d164dc0a5fd2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYY53NS3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWRhIEI6AmpIWP0B6QDinGpjJZ1CuymHYW0koH5FbUsAiBm7%2Feq7CSbUumXOhgzx5M5TfuXuCtnqCPzV5%2FlwUBztSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM00RnVzUMBzLKREtUKtwD5Ueh39Al9KnSvR9jcgtXMLBQwkZyjw2zSQCq1UzUqDZ7xgkwM6GrhDiPLUkOTYjPV2k0aOxG9CYMCqVpNq%2BtnblcSa42Y054hvZmNRwJOScIp32BClOXgxlJRqnkZ7Bl%2BltCIus5F2q5JKwPEBbKwK%2FAwlvIdOPo9%2BvZo3tdWzqAN9qhMi%2BLlpd4DX8Jkw%2BITxyvUtsEM73urYHWgfYes%2BVRqkgR4tM85QMc71RSNnZRV7OYNUcWa9jDWtY4e7lsUNOe42KwDpP2kW9Vz9K0HnJ6%2Bk3KKbhoQ0xnm23C3m%2Fg7Q4hB93RoIVpunDo%2FAq0TXKTcWnRRenLAOdtRYiXGk4JcBvPxrQCsvzBusAfcZDhOehrm2WkqT30ESdFl%2B3Tf%2FnK6fKdGJB6r3xoV9ezs1YQVdFWuS6pqgFabdozgvW2tkq%2F%2BbZhCX%2FwchOVjNTdCJ2i8pCEdQbU8DOin%2BB2J%2FrHNIJKcwzOpqqFgxSA01Hd8HFFa9x8QWIR4CoP8ZfpzICxAuD05WBCdGCLGpLiP%2F07teNNmm%2BY65kULA2UEBpOvBN6bcp2DhAX3oREzg6CLnPKPaHa%2FxZTpMTc%2BsbmXhFr%2FPbCGpliXU81iKy7r3ar2%2BTTKkHr9xRfzo8wlMnyvwY6pgFgOnaKPKEOwj9vWgk8Xu1rwKTmbm6boX%2FauQTpnz%2BXMeOWyhe%2BkO5C5hACipUydaUtNyql9D9IkH44TjaAaSb2RCU0vLDkWhgJMzjSLPPI7tNW2immBGbB9X0K6y0oLvWb5%2B%2FEaV2yigJHBmop8TOfj9XWrqRByq0VIQ603vZVTQjL%2FUtW49slnlUC%2B26VUk1ymOIwfHAVgQmGo17zdry6e%2BHeBkLE&X-Amz-Signature=cff0d0b2b92d89fc92ffe0e42b0de2154b048505101f041644e6fc5b73c7146f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYY53NS3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWRhIEI6AmpIWP0B6QDinGpjJZ1CuymHYW0koH5FbUsAiBm7%2Feq7CSbUumXOhgzx5M5TfuXuCtnqCPzV5%2FlwUBztSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM00RnVzUMBzLKREtUKtwD5Ueh39Al9KnSvR9jcgtXMLBQwkZyjw2zSQCq1UzUqDZ7xgkwM6GrhDiPLUkOTYjPV2k0aOxG9CYMCqVpNq%2BtnblcSa42Y054hvZmNRwJOScIp32BClOXgxlJRqnkZ7Bl%2BltCIus5F2q5JKwPEBbKwK%2FAwlvIdOPo9%2BvZo3tdWzqAN9qhMi%2BLlpd4DX8Jkw%2BITxyvUtsEM73urYHWgfYes%2BVRqkgR4tM85QMc71RSNnZRV7OYNUcWa9jDWtY4e7lsUNOe42KwDpP2kW9Vz9K0HnJ6%2Bk3KKbhoQ0xnm23C3m%2Fg7Q4hB93RoIVpunDo%2FAq0TXKTcWnRRenLAOdtRYiXGk4JcBvPxrQCsvzBusAfcZDhOehrm2WkqT30ESdFl%2B3Tf%2FnK6fKdGJB6r3xoV9ezs1YQVdFWuS6pqgFabdozgvW2tkq%2F%2BbZhCX%2FwchOVjNTdCJ2i8pCEdQbU8DOin%2BB2J%2FrHNIJKcwzOpqqFgxSA01Hd8HFFa9x8QWIR4CoP8ZfpzICxAuD05WBCdGCLGpLiP%2F07teNNmm%2BY65kULA2UEBpOvBN6bcp2DhAX3oREzg6CLnPKPaHa%2FxZTpMTc%2BsbmXhFr%2FPbCGpliXU81iKy7r3ar2%2BTTKkHr9xRfzo8wlMnyvwY6pgFgOnaKPKEOwj9vWgk8Xu1rwKTmbm6boX%2FauQTpnz%2BXMeOWyhe%2BkO5C5hACipUydaUtNyql9D9IkH44TjaAaSb2RCU0vLDkWhgJMzjSLPPI7tNW2immBGbB9X0K6y0oLvWb5%2B%2FEaV2yigJHBmop8TOfj9XWrqRByq0VIQ603vZVTQjL%2FUtW49slnlUC%2B26VUk1ymOIwfHAVgQmGo17zdry6e%2BHeBkLE&X-Amz-Signature=01e9e4041e15e05a1511bc61deae805ad4f81a3eff3180dedaccef012ddd097b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYY53NS3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWRhIEI6AmpIWP0B6QDinGpjJZ1CuymHYW0koH5FbUsAiBm7%2Feq7CSbUumXOhgzx5M5TfuXuCtnqCPzV5%2FlwUBztSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM00RnVzUMBzLKREtUKtwD5Ueh39Al9KnSvR9jcgtXMLBQwkZyjw2zSQCq1UzUqDZ7xgkwM6GrhDiPLUkOTYjPV2k0aOxG9CYMCqVpNq%2BtnblcSa42Y054hvZmNRwJOScIp32BClOXgxlJRqnkZ7Bl%2BltCIus5F2q5JKwPEBbKwK%2FAwlvIdOPo9%2BvZo3tdWzqAN9qhMi%2BLlpd4DX8Jkw%2BITxyvUtsEM73urYHWgfYes%2BVRqkgR4tM85QMc71RSNnZRV7OYNUcWa9jDWtY4e7lsUNOe42KwDpP2kW9Vz9K0HnJ6%2Bk3KKbhoQ0xnm23C3m%2Fg7Q4hB93RoIVpunDo%2FAq0TXKTcWnRRenLAOdtRYiXGk4JcBvPxrQCsvzBusAfcZDhOehrm2WkqT30ESdFl%2B3Tf%2FnK6fKdGJB6r3xoV9ezs1YQVdFWuS6pqgFabdozgvW2tkq%2F%2BbZhCX%2FwchOVjNTdCJ2i8pCEdQbU8DOin%2BB2J%2FrHNIJKcwzOpqqFgxSA01Hd8HFFa9x8QWIR4CoP8ZfpzICxAuD05WBCdGCLGpLiP%2F07teNNmm%2BY65kULA2UEBpOvBN6bcp2DhAX3oREzg6CLnPKPaHa%2FxZTpMTc%2BsbmXhFr%2FPbCGpliXU81iKy7r3ar2%2BTTKkHr9xRfzo8wlMnyvwY6pgFgOnaKPKEOwj9vWgk8Xu1rwKTmbm6boX%2FauQTpnz%2BXMeOWyhe%2BkO5C5hACipUydaUtNyql9D9IkH44TjaAaSb2RCU0vLDkWhgJMzjSLPPI7tNW2immBGbB9X0K6y0oLvWb5%2B%2FEaV2yigJHBmop8TOfj9XWrqRByq0VIQ603vZVTQjL%2FUtW49slnlUC%2B26VUk1ymOIwfHAVgQmGo17zdry6e%2BHeBkLE&X-Amz-Signature=7004155267e20da73a33a4eaacb4da29b8a416175e15eccee46026137a6c34c1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
