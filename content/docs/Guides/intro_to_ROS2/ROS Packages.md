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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWYWVAF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd05zM3ZEdlFE67SwYsoTTlgCDgTz4p0AOv%2BWDUjZG3AiEA9ja6%2BUukzgFTCscLkd6ZsEN7775VYhnPR6q%2Fk2v7ILoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFkJwCCGuboG9qkPNyrcA24b09GGPCBAMTo9%2FPsHxruNJVbHruFcGpgkm4QXp84aeJ3xZxbRDv%2BPjGRxOqz9hralzQf4VHUddqR%2BFMzxWAhqZmqEPFzEIPavaYQzVvLkkDegGXPf1w0ZKDDuN3WHi6WwpIHYGhPURcoIshi7AATeBzRfkasTGV0kzLYfhz5R3dipuAk4fU2PO0lnJvMbVZMhaL9G5C8UlCS1PzNEWhT5mI3%2FL228iEJN4IXKyu6XoJaRx%2BWyXsogcWgjmYfTiXOgiTiGy%2FP8Y9TKh9q51Yp0rGdwX4T1STPerRIKNelwTzP1nllFwZrTHnNu2Uu8JTjpHuoS499a19H55ZshRhbvIpERzcSRXBtXjDMVwuhjw4KM%2FlHJB%2BQLaY7HouEtrm1tSvkixGpwQ%2BjIC%2Fd18zGDkek2X53QRIp2NJEWXJC6RQD%2FEXCqsMqywi6X0JpEO3N%2F3ETDxccELiEaa6ekNua33IaI9KPMYSC7W0QDoAMa1jZ8joVNZe55CoO%2Bzwa3hrJt5YTH5rPWIWRzfbPLONv2nbUfoC828UL4aF6uWo9ObgLXmdHbgoEoZG1g51mAzo3zVB%2BqE4ofm7AdBUdTZOxmPrHzg%2F43FpFmHNoRw%2FtAurlMCjUf4s0aQrnnMIua88AGOqUBBBIb8VAiBIsRcB3PdKzdiwseFp1fPzm%2B5PHCzzUNzI38N8U9U7On4z6cy5sVJOClYSZI7SnjCcI75ImEeNvk7pX%2Fdfd2hf92ITAV7cW9y5faA5j9cdfM5ZqSk3EHid%2FiFUcp6uW2CAnPdfDJ5In971sSR7RS%2Fa%2FlQRoL9oRQUkA0f5tHDtgQgFyxDuJYtNZENH%2FvvEbVCwmL55iemi01LY8UkGLG&X-Amz-Signature=2679b674325de65980b7bbd3379a550a78961a08b402fe29becfd8ef31767d25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWYWVAF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd05zM3ZEdlFE67SwYsoTTlgCDgTz4p0AOv%2BWDUjZG3AiEA9ja6%2BUukzgFTCscLkd6ZsEN7775VYhnPR6q%2Fk2v7ILoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFkJwCCGuboG9qkPNyrcA24b09GGPCBAMTo9%2FPsHxruNJVbHruFcGpgkm4QXp84aeJ3xZxbRDv%2BPjGRxOqz9hralzQf4VHUddqR%2BFMzxWAhqZmqEPFzEIPavaYQzVvLkkDegGXPf1w0ZKDDuN3WHi6WwpIHYGhPURcoIshi7AATeBzRfkasTGV0kzLYfhz5R3dipuAk4fU2PO0lnJvMbVZMhaL9G5C8UlCS1PzNEWhT5mI3%2FL228iEJN4IXKyu6XoJaRx%2BWyXsogcWgjmYfTiXOgiTiGy%2FP8Y9TKh9q51Yp0rGdwX4T1STPerRIKNelwTzP1nllFwZrTHnNu2Uu8JTjpHuoS499a19H55ZshRhbvIpERzcSRXBtXjDMVwuhjw4KM%2FlHJB%2BQLaY7HouEtrm1tSvkixGpwQ%2BjIC%2Fd18zGDkek2X53QRIp2NJEWXJC6RQD%2FEXCqsMqywi6X0JpEO3N%2F3ETDxccELiEaa6ekNua33IaI9KPMYSC7W0QDoAMa1jZ8joVNZe55CoO%2Bzwa3hrJt5YTH5rPWIWRzfbPLONv2nbUfoC828UL4aF6uWo9ObgLXmdHbgoEoZG1g51mAzo3zVB%2BqE4ofm7AdBUdTZOxmPrHzg%2F43FpFmHNoRw%2FtAurlMCjUf4s0aQrnnMIua88AGOqUBBBIb8VAiBIsRcB3PdKzdiwseFp1fPzm%2B5PHCzzUNzI38N8U9U7On4z6cy5sVJOClYSZI7SnjCcI75ImEeNvk7pX%2Fdfd2hf92ITAV7cW9y5faA5j9cdfM5ZqSk3EHid%2FiFUcp6uW2CAnPdfDJ5In971sSR7RS%2Fa%2FlQRoL9oRQUkA0f5tHDtgQgFyxDuJYtNZENH%2FvvEbVCwmL55iemi01LY8UkGLG&X-Amz-Signature=c5063cf467a5aab191c92eee28ebe69e66e60ac002d9c37199f485b1ea72f61c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWYWVAF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd05zM3ZEdlFE67SwYsoTTlgCDgTz4p0AOv%2BWDUjZG3AiEA9ja6%2BUukzgFTCscLkd6ZsEN7775VYhnPR6q%2Fk2v7ILoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFkJwCCGuboG9qkPNyrcA24b09GGPCBAMTo9%2FPsHxruNJVbHruFcGpgkm4QXp84aeJ3xZxbRDv%2BPjGRxOqz9hralzQf4VHUddqR%2BFMzxWAhqZmqEPFzEIPavaYQzVvLkkDegGXPf1w0ZKDDuN3WHi6WwpIHYGhPURcoIshi7AATeBzRfkasTGV0kzLYfhz5R3dipuAk4fU2PO0lnJvMbVZMhaL9G5C8UlCS1PzNEWhT5mI3%2FL228iEJN4IXKyu6XoJaRx%2BWyXsogcWgjmYfTiXOgiTiGy%2FP8Y9TKh9q51Yp0rGdwX4T1STPerRIKNelwTzP1nllFwZrTHnNu2Uu8JTjpHuoS499a19H55ZshRhbvIpERzcSRXBtXjDMVwuhjw4KM%2FlHJB%2BQLaY7HouEtrm1tSvkixGpwQ%2BjIC%2Fd18zGDkek2X53QRIp2NJEWXJC6RQD%2FEXCqsMqywi6X0JpEO3N%2F3ETDxccELiEaa6ekNua33IaI9KPMYSC7W0QDoAMa1jZ8joVNZe55CoO%2Bzwa3hrJt5YTH5rPWIWRzfbPLONv2nbUfoC828UL4aF6uWo9ObgLXmdHbgoEoZG1g51mAzo3zVB%2BqE4ofm7AdBUdTZOxmPrHzg%2F43FpFmHNoRw%2FtAurlMCjUf4s0aQrnnMIua88AGOqUBBBIb8VAiBIsRcB3PdKzdiwseFp1fPzm%2B5PHCzzUNzI38N8U9U7On4z6cy5sVJOClYSZI7SnjCcI75ImEeNvk7pX%2Fdfd2hf92ITAV7cW9y5faA5j9cdfM5ZqSk3EHid%2FiFUcp6uW2CAnPdfDJ5In971sSR7RS%2Fa%2FlQRoL9oRQUkA0f5tHDtgQgFyxDuJYtNZENH%2FvvEbVCwmL55iemi01LY8UkGLG&X-Amz-Signature=91681a5d82f560696baf4c1ec23af58d4cff393c070a33031cca4d052bb09432&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWYWVAF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd05zM3ZEdlFE67SwYsoTTlgCDgTz4p0AOv%2BWDUjZG3AiEA9ja6%2BUukzgFTCscLkd6ZsEN7775VYhnPR6q%2Fk2v7ILoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFkJwCCGuboG9qkPNyrcA24b09GGPCBAMTo9%2FPsHxruNJVbHruFcGpgkm4QXp84aeJ3xZxbRDv%2BPjGRxOqz9hralzQf4VHUddqR%2BFMzxWAhqZmqEPFzEIPavaYQzVvLkkDegGXPf1w0ZKDDuN3WHi6WwpIHYGhPURcoIshi7AATeBzRfkasTGV0kzLYfhz5R3dipuAk4fU2PO0lnJvMbVZMhaL9G5C8UlCS1PzNEWhT5mI3%2FL228iEJN4IXKyu6XoJaRx%2BWyXsogcWgjmYfTiXOgiTiGy%2FP8Y9TKh9q51Yp0rGdwX4T1STPerRIKNelwTzP1nllFwZrTHnNu2Uu8JTjpHuoS499a19H55ZshRhbvIpERzcSRXBtXjDMVwuhjw4KM%2FlHJB%2BQLaY7HouEtrm1tSvkixGpwQ%2BjIC%2Fd18zGDkek2X53QRIp2NJEWXJC6RQD%2FEXCqsMqywi6X0JpEO3N%2F3ETDxccELiEaa6ekNua33IaI9KPMYSC7W0QDoAMa1jZ8joVNZe55CoO%2Bzwa3hrJt5YTH5rPWIWRzfbPLONv2nbUfoC828UL4aF6uWo9ObgLXmdHbgoEoZG1g51mAzo3zVB%2BqE4ofm7AdBUdTZOxmPrHzg%2F43FpFmHNoRw%2FtAurlMCjUf4s0aQrnnMIua88AGOqUBBBIb8VAiBIsRcB3PdKzdiwseFp1fPzm%2B5PHCzzUNzI38N8U9U7On4z6cy5sVJOClYSZI7SnjCcI75ImEeNvk7pX%2Fdfd2hf92ITAV7cW9y5faA5j9cdfM5ZqSk3EHid%2FiFUcp6uW2CAnPdfDJ5In971sSR7RS%2Fa%2FlQRoL9oRQUkA0f5tHDtgQgFyxDuJYtNZENH%2FvvEbVCwmL55iemi01LY8UkGLG&X-Amz-Signature=f1c85037fcee34a88c50edc9224e1ecd1d700508f8bdd2d00fafe2dd3a46a29b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWYWVAF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd05zM3ZEdlFE67SwYsoTTlgCDgTz4p0AOv%2BWDUjZG3AiEA9ja6%2BUukzgFTCscLkd6ZsEN7775VYhnPR6q%2Fk2v7ILoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFkJwCCGuboG9qkPNyrcA24b09GGPCBAMTo9%2FPsHxruNJVbHruFcGpgkm4QXp84aeJ3xZxbRDv%2BPjGRxOqz9hralzQf4VHUddqR%2BFMzxWAhqZmqEPFzEIPavaYQzVvLkkDegGXPf1w0ZKDDuN3WHi6WwpIHYGhPURcoIshi7AATeBzRfkasTGV0kzLYfhz5R3dipuAk4fU2PO0lnJvMbVZMhaL9G5C8UlCS1PzNEWhT5mI3%2FL228iEJN4IXKyu6XoJaRx%2BWyXsogcWgjmYfTiXOgiTiGy%2FP8Y9TKh9q51Yp0rGdwX4T1STPerRIKNelwTzP1nllFwZrTHnNu2Uu8JTjpHuoS499a19H55ZshRhbvIpERzcSRXBtXjDMVwuhjw4KM%2FlHJB%2BQLaY7HouEtrm1tSvkixGpwQ%2BjIC%2Fd18zGDkek2X53QRIp2NJEWXJC6RQD%2FEXCqsMqywi6X0JpEO3N%2F3ETDxccELiEaa6ekNua33IaI9KPMYSC7W0QDoAMa1jZ8joVNZe55CoO%2Bzwa3hrJt5YTH5rPWIWRzfbPLONv2nbUfoC828UL4aF6uWo9ObgLXmdHbgoEoZG1g51mAzo3zVB%2BqE4ofm7AdBUdTZOxmPrHzg%2F43FpFmHNoRw%2FtAurlMCjUf4s0aQrnnMIua88AGOqUBBBIb8VAiBIsRcB3PdKzdiwseFp1fPzm%2B5PHCzzUNzI38N8U9U7On4z6cy5sVJOClYSZI7SnjCcI75ImEeNvk7pX%2Fdfd2hf92ITAV7cW9y5faA5j9cdfM5ZqSk3EHid%2FiFUcp6uW2CAnPdfDJ5In971sSR7RS%2Fa%2FlQRoL9oRQUkA0f5tHDtgQgFyxDuJYtNZENH%2FvvEbVCwmL55iemi01LY8UkGLG&X-Amz-Signature=eee62de34a6d8dd3a1fb6fa50fb8cb47c4bfdb439c5860ce781b513adb7465eb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWYWVAF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd05zM3ZEdlFE67SwYsoTTlgCDgTz4p0AOv%2BWDUjZG3AiEA9ja6%2BUukzgFTCscLkd6ZsEN7775VYhnPR6q%2Fk2v7ILoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFkJwCCGuboG9qkPNyrcA24b09GGPCBAMTo9%2FPsHxruNJVbHruFcGpgkm4QXp84aeJ3xZxbRDv%2BPjGRxOqz9hralzQf4VHUddqR%2BFMzxWAhqZmqEPFzEIPavaYQzVvLkkDegGXPf1w0ZKDDuN3WHi6WwpIHYGhPURcoIshi7AATeBzRfkasTGV0kzLYfhz5R3dipuAk4fU2PO0lnJvMbVZMhaL9G5C8UlCS1PzNEWhT5mI3%2FL228iEJN4IXKyu6XoJaRx%2BWyXsogcWgjmYfTiXOgiTiGy%2FP8Y9TKh9q51Yp0rGdwX4T1STPerRIKNelwTzP1nllFwZrTHnNu2Uu8JTjpHuoS499a19H55ZshRhbvIpERzcSRXBtXjDMVwuhjw4KM%2FlHJB%2BQLaY7HouEtrm1tSvkixGpwQ%2BjIC%2Fd18zGDkek2X53QRIp2NJEWXJC6RQD%2FEXCqsMqywi6X0JpEO3N%2F3ETDxccELiEaa6ekNua33IaI9KPMYSC7W0QDoAMa1jZ8joVNZe55CoO%2Bzwa3hrJt5YTH5rPWIWRzfbPLONv2nbUfoC828UL4aF6uWo9ObgLXmdHbgoEoZG1g51mAzo3zVB%2BqE4ofm7AdBUdTZOxmPrHzg%2F43FpFmHNoRw%2FtAurlMCjUf4s0aQrnnMIua88AGOqUBBBIb8VAiBIsRcB3PdKzdiwseFp1fPzm%2B5PHCzzUNzI38N8U9U7On4z6cy5sVJOClYSZI7SnjCcI75ImEeNvk7pX%2Fdfd2hf92ITAV7cW9y5faA5j9cdfM5ZqSk3EHid%2FiFUcp6uW2CAnPdfDJ5In971sSR7RS%2Fa%2FlQRoL9oRQUkA0f5tHDtgQgFyxDuJYtNZENH%2FvvEbVCwmL55iemi01LY8UkGLG&X-Amz-Signature=3a100829a4ab99b334fab008657580b7a54eecb6068ac44a584c4d626ed8322e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWYWVAF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd05zM3ZEdlFE67SwYsoTTlgCDgTz4p0AOv%2BWDUjZG3AiEA9ja6%2BUukzgFTCscLkd6ZsEN7775VYhnPR6q%2Fk2v7ILoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFkJwCCGuboG9qkPNyrcA24b09GGPCBAMTo9%2FPsHxruNJVbHruFcGpgkm4QXp84aeJ3xZxbRDv%2BPjGRxOqz9hralzQf4VHUddqR%2BFMzxWAhqZmqEPFzEIPavaYQzVvLkkDegGXPf1w0ZKDDuN3WHi6WwpIHYGhPURcoIshi7AATeBzRfkasTGV0kzLYfhz5R3dipuAk4fU2PO0lnJvMbVZMhaL9G5C8UlCS1PzNEWhT5mI3%2FL228iEJN4IXKyu6XoJaRx%2BWyXsogcWgjmYfTiXOgiTiGy%2FP8Y9TKh9q51Yp0rGdwX4T1STPerRIKNelwTzP1nllFwZrTHnNu2Uu8JTjpHuoS499a19H55ZshRhbvIpERzcSRXBtXjDMVwuhjw4KM%2FlHJB%2BQLaY7HouEtrm1tSvkixGpwQ%2BjIC%2Fd18zGDkek2X53QRIp2NJEWXJC6RQD%2FEXCqsMqywi6X0JpEO3N%2F3ETDxccELiEaa6ekNua33IaI9KPMYSC7W0QDoAMa1jZ8joVNZe55CoO%2Bzwa3hrJt5YTH5rPWIWRzfbPLONv2nbUfoC828UL4aF6uWo9ObgLXmdHbgoEoZG1g51mAzo3zVB%2BqE4ofm7AdBUdTZOxmPrHzg%2F43FpFmHNoRw%2FtAurlMCjUf4s0aQrnnMIua88AGOqUBBBIb8VAiBIsRcB3PdKzdiwseFp1fPzm%2B5PHCzzUNzI38N8U9U7On4z6cy5sVJOClYSZI7SnjCcI75ImEeNvk7pX%2Fdfd2hf92ITAV7cW9y5faA5j9cdfM5ZqSk3EHid%2FiFUcp6uW2CAnPdfDJ5In971sSR7RS%2Fa%2FlQRoL9oRQUkA0f5tHDtgQgFyxDuJYtNZENH%2FvvEbVCwmL55iemi01LY8UkGLG&X-Amz-Signature=f7ebcc2566bbadaf8aaadc8e7ffb0b8774f13723d74530249eb0525d588b3cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
