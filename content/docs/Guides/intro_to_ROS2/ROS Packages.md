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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XRCSTHG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRbTlSQV92ksxDtjzPGsaJ0EgGVbezXz1EhCzYMb66FAiBcY8h3wLIDWgbXRjcbHQ65049CV%2F4S2ie8ZDZaGhFy5iqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx1FBm00YYlGTeS2KtwDnbhx42sYmbzozpz2%2BH%2F%2B2PVkqr%2BLt%2B3LBlSX9u1Xy3TkyoLoeSsfGZ2M5CLUA2D%2B1Gy02AZCg%2BBC6ktVxBk%2FbA4WZhN%2FluHD7wUZOuMDM5Q1FXPyNeunr5JFxlFKfM%2B0gUTaJiabpqtppEvDTAyrtsxoijMn7s8AnShtnoJenwAU92LwboGlUF2acjXQmgseSpQ%2Fj9xoQovewxyp27Oc%2FybBs2xw49CfY28tTfmfy4szf277fU%2F93Ir4Ier2eOtLEU9wtXBBZm21YeyohkThaXJo0UBNIgSEp8AtAqsTmznJJp1IyIKmSOiI1l2MKoQmlEftvc%2F6Tcfa3H4BGRKGjoqmsxDjexxdVSAyeo%2BE6yN7GZ2J%2FT8K%2B002qao6fF4Pmt%2Fb3FbiuVMNreO%2Fqj3%2F7fIRQXezmWxlTPfTwaeSyFJWiSE4BHfnCh%2BftluZpQVOBXejIILoA%2BcvYntAnTIATthko7sfZ5SxpjycvAOIBzXI6gbb4skkDRXj88LFbcnYEHVbZeCEzb9CbHg4a4B7EVqCnFY8%2BaFYbcciTRYb1QMiaD%2FeHBvLgyA2OdVS3WIOugZJNP3XNXp2pTEWk8P3jhZSE1Ji5L8B7PkF2OzP2U7kkC%2FvWJtxRgv8ulUw8tfbvQY6pgGJWSL7b8Pb2FP1049WnsBb6ooA5Y4GfkpomdnA2VnzMmwCS1BvNT021wPLTXasgCdtsSyB2I96f%2FjxapERr3Yk%2FDvw3Hvk6a5jyzG9ZVXpf%2BbIFpTy4QyYT%2Fu7kJ0Qa5cbLqK22SzhixcfmHENAA8ayGH17A%2FsAZslHvZ6l6qmGECiqRQbWS9oC123i13h4YoOrVb9b2%2FLzCub0CAZfEzNBe2UOLlO&X-Amz-Signature=2e53353ec72f2cca6ded3555925ff30635e0634a120ff4337d4aef00bbf05fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XRCSTHG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRbTlSQV92ksxDtjzPGsaJ0EgGVbezXz1EhCzYMb66FAiBcY8h3wLIDWgbXRjcbHQ65049CV%2F4S2ie8ZDZaGhFy5iqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx1FBm00YYlGTeS2KtwDnbhx42sYmbzozpz2%2BH%2F%2B2PVkqr%2BLt%2B3LBlSX9u1Xy3TkyoLoeSsfGZ2M5CLUA2D%2B1Gy02AZCg%2BBC6ktVxBk%2FbA4WZhN%2FluHD7wUZOuMDM5Q1FXPyNeunr5JFxlFKfM%2B0gUTaJiabpqtppEvDTAyrtsxoijMn7s8AnShtnoJenwAU92LwboGlUF2acjXQmgseSpQ%2Fj9xoQovewxyp27Oc%2FybBs2xw49CfY28tTfmfy4szf277fU%2F93Ir4Ier2eOtLEU9wtXBBZm21YeyohkThaXJo0UBNIgSEp8AtAqsTmznJJp1IyIKmSOiI1l2MKoQmlEftvc%2F6Tcfa3H4BGRKGjoqmsxDjexxdVSAyeo%2BE6yN7GZ2J%2FT8K%2B002qao6fF4Pmt%2Fb3FbiuVMNreO%2Fqj3%2F7fIRQXezmWxlTPfTwaeSyFJWiSE4BHfnCh%2BftluZpQVOBXejIILoA%2BcvYntAnTIATthko7sfZ5SxpjycvAOIBzXI6gbb4skkDRXj88LFbcnYEHVbZeCEzb9CbHg4a4B7EVqCnFY8%2BaFYbcciTRYb1QMiaD%2FeHBvLgyA2OdVS3WIOugZJNP3XNXp2pTEWk8P3jhZSE1Ji5L8B7PkF2OzP2U7kkC%2FvWJtxRgv8ulUw8tfbvQY6pgGJWSL7b8Pb2FP1049WnsBb6ooA5Y4GfkpomdnA2VnzMmwCS1BvNT021wPLTXasgCdtsSyB2I96f%2FjxapERr3Yk%2FDvw3Hvk6a5jyzG9ZVXpf%2BbIFpTy4QyYT%2Fu7kJ0Qa5cbLqK22SzhixcfmHENAA8ayGH17A%2FsAZslHvZ6l6qmGECiqRQbWS9oC123i13h4YoOrVb9b2%2FLzCub0CAZfEzNBe2UOLlO&X-Amz-Signature=67eb948562d6a87f5739cdcebdd8d05f0af1b94c101231fc0774893a7962b042&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XRCSTHG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRbTlSQV92ksxDtjzPGsaJ0EgGVbezXz1EhCzYMb66FAiBcY8h3wLIDWgbXRjcbHQ65049CV%2F4S2ie8ZDZaGhFy5iqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx1FBm00YYlGTeS2KtwDnbhx42sYmbzozpz2%2BH%2F%2B2PVkqr%2BLt%2B3LBlSX9u1Xy3TkyoLoeSsfGZ2M5CLUA2D%2B1Gy02AZCg%2BBC6ktVxBk%2FbA4WZhN%2FluHD7wUZOuMDM5Q1FXPyNeunr5JFxlFKfM%2B0gUTaJiabpqtppEvDTAyrtsxoijMn7s8AnShtnoJenwAU92LwboGlUF2acjXQmgseSpQ%2Fj9xoQovewxyp27Oc%2FybBs2xw49CfY28tTfmfy4szf277fU%2F93Ir4Ier2eOtLEU9wtXBBZm21YeyohkThaXJo0UBNIgSEp8AtAqsTmznJJp1IyIKmSOiI1l2MKoQmlEftvc%2F6Tcfa3H4BGRKGjoqmsxDjexxdVSAyeo%2BE6yN7GZ2J%2FT8K%2B002qao6fF4Pmt%2Fb3FbiuVMNreO%2Fqj3%2F7fIRQXezmWxlTPfTwaeSyFJWiSE4BHfnCh%2BftluZpQVOBXejIILoA%2BcvYntAnTIATthko7sfZ5SxpjycvAOIBzXI6gbb4skkDRXj88LFbcnYEHVbZeCEzb9CbHg4a4B7EVqCnFY8%2BaFYbcciTRYb1QMiaD%2FeHBvLgyA2OdVS3WIOugZJNP3XNXp2pTEWk8P3jhZSE1Ji5L8B7PkF2OzP2U7kkC%2FvWJtxRgv8ulUw8tfbvQY6pgGJWSL7b8Pb2FP1049WnsBb6ooA5Y4GfkpomdnA2VnzMmwCS1BvNT021wPLTXasgCdtsSyB2I96f%2FjxapERr3Yk%2FDvw3Hvk6a5jyzG9ZVXpf%2BbIFpTy4QyYT%2Fu7kJ0Qa5cbLqK22SzhixcfmHENAA8ayGH17A%2FsAZslHvZ6l6qmGECiqRQbWS9oC123i13h4YoOrVb9b2%2FLzCub0CAZfEzNBe2UOLlO&X-Amz-Signature=9d5cb97061a392c225b8279466a983387db44b1a5f4f1cb3ec6b5909c7d5c0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XRCSTHG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRbTlSQV92ksxDtjzPGsaJ0EgGVbezXz1EhCzYMb66FAiBcY8h3wLIDWgbXRjcbHQ65049CV%2F4S2ie8ZDZaGhFy5iqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx1FBm00YYlGTeS2KtwDnbhx42sYmbzozpz2%2BH%2F%2B2PVkqr%2BLt%2B3LBlSX9u1Xy3TkyoLoeSsfGZ2M5CLUA2D%2B1Gy02AZCg%2BBC6ktVxBk%2FbA4WZhN%2FluHD7wUZOuMDM5Q1FXPyNeunr5JFxlFKfM%2B0gUTaJiabpqtppEvDTAyrtsxoijMn7s8AnShtnoJenwAU92LwboGlUF2acjXQmgseSpQ%2Fj9xoQovewxyp27Oc%2FybBs2xw49CfY28tTfmfy4szf277fU%2F93Ir4Ier2eOtLEU9wtXBBZm21YeyohkThaXJo0UBNIgSEp8AtAqsTmznJJp1IyIKmSOiI1l2MKoQmlEftvc%2F6Tcfa3H4BGRKGjoqmsxDjexxdVSAyeo%2BE6yN7GZ2J%2FT8K%2B002qao6fF4Pmt%2Fb3FbiuVMNreO%2Fqj3%2F7fIRQXezmWxlTPfTwaeSyFJWiSE4BHfnCh%2BftluZpQVOBXejIILoA%2BcvYntAnTIATthko7sfZ5SxpjycvAOIBzXI6gbb4skkDRXj88LFbcnYEHVbZeCEzb9CbHg4a4B7EVqCnFY8%2BaFYbcciTRYb1QMiaD%2FeHBvLgyA2OdVS3WIOugZJNP3XNXp2pTEWk8P3jhZSE1Ji5L8B7PkF2OzP2U7kkC%2FvWJtxRgv8ulUw8tfbvQY6pgGJWSL7b8Pb2FP1049WnsBb6ooA5Y4GfkpomdnA2VnzMmwCS1BvNT021wPLTXasgCdtsSyB2I96f%2FjxapERr3Yk%2FDvw3Hvk6a5jyzG9ZVXpf%2BbIFpTy4QyYT%2Fu7kJ0Qa5cbLqK22SzhixcfmHENAA8ayGH17A%2FsAZslHvZ6l6qmGECiqRQbWS9oC123i13h4YoOrVb9b2%2FLzCub0CAZfEzNBe2UOLlO&X-Amz-Signature=9a30135e11b2701b74b1640b87454e81b9198276c03860b999345dfe0eaa6fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XRCSTHG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRbTlSQV92ksxDtjzPGsaJ0EgGVbezXz1EhCzYMb66FAiBcY8h3wLIDWgbXRjcbHQ65049CV%2F4S2ie8ZDZaGhFy5iqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx1FBm00YYlGTeS2KtwDnbhx42sYmbzozpz2%2BH%2F%2B2PVkqr%2BLt%2B3LBlSX9u1Xy3TkyoLoeSsfGZ2M5CLUA2D%2B1Gy02AZCg%2BBC6ktVxBk%2FbA4WZhN%2FluHD7wUZOuMDM5Q1FXPyNeunr5JFxlFKfM%2B0gUTaJiabpqtppEvDTAyrtsxoijMn7s8AnShtnoJenwAU92LwboGlUF2acjXQmgseSpQ%2Fj9xoQovewxyp27Oc%2FybBs2xw49CfY28tTfmfy4szf277fU%2F93Ir4Ier2eOtLEU9wtXBBZm21YeyohkThaXJo0UBNIgSEp8AtAqsTmznJJp1IyIKmSOiI1l2MKoQmlEftvc%2F6Tcfa3H4BGRKGjoqmsxDjexxdVSAyeo%2BE6yN7GZ2J%2FT8K%2B002qao6fF4Pmt%2Fb3FbiuVMNreO%2Fqj3%2F7fIRQXezmWxlTPfTwaeSyFJWiSE4BHfnCh%2BftluZpQVOBXejIILoA%2BcvYntAnTIATthko7sfZ5SxpjycvAOIBzXI6gbb4skkDRXj88LFbcnYEHVbZeCEzb9CbHg4a4B7EVqCnFY8%2BaFYbcciTRYb1QMiaD%2FeHBvLgyA2OdVS3WIOugZJNP3XNXp2pTEWk8P3jhZSE1Ji5L8B7PkF2OzP2U7kkC%2FvWJtxRgv8ulUw8tfbvQY6pgGJWSL7b8Pb2FP1049WnsBb6ooA5Y4GfkpomdnA2VnzMmwCS1BvNT021wPLTXasgCdtsSyB2I96f%2FjxapERr3Yk%2FDvw3Hvk6a5jyzG9ZVXpf%2BbIFpTy4QyYT%2Fu7kJ0Qa5cbLqK22SzhixcfmHENAA8ayGH17A%2FsAZslHvZ6l6qmGECiqRQbWS9oC123i13h4YoOrVb9b2%2FLzCub0CAZfEzNBe2UOLlO&X-Amz-Signature=ec1977013262685abda9e4d30b84f1b9a1648b5910b66c75d30a9702c6ba0456&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XRCSTHG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRbTlSQV92ksxDtjzPGsaJ0EgGVbezXz1EhCzYMb66FAiBcY8h3wLIDWgbXRjcbHQ65049CV%2F4S2ie8ZDZaGhFy5iqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx1FBm00YYlGTeS2KtwDnbhx42sYmbzozpz2%2BH%2F%2B2PVkqr%2BLt%2B3LBlSX9u1Xy3TkyoLoeSsfGZ2M5CLUA2D%2B1Gy02AZCg%2BBC6ktVxBk%2FbA4WZhN%2FluHD7wUZOuMDM5Q1FXPyNeunr5JFxlFKfM%2B0gUTaJiabpqtppEvDTAyrtsxoijMn7s8AnShtnoJenwAU92LwboGlUF2acjXQmgseSpQ%2Fj9xoQovewxyp27Oc%2FybBs2xw49CfY28tTfmfy4szf277fU%2F93Ir4Ier2eOtLEU9wtXBBZm21YeyohkThaXJo0UBNIgSEp8AtAqsTmznJJp1IyIKmSOiI1l2MKoQmlEftvc%2F6Tcfa3H4BGRKGjoqmsxDjexxdVSAyeo%2BE6yN7GZ2J%2FT8K%2B002qao6fF4Pmt%2Fb3FbiuVMNreO%2Fqj3%2F7fIRQXezmWxlTPfTwaeSyFJWiSE4BHfnCh%2BftluZpQVOBXejIILoA%2BcvYntAnTIATthko7sfZ5SxpjycvAOIBzXI6gbb4skkDRXj88LFbcnYEHVbZeCEzb9CbHg4a4B7EVqCnFY8%2BaFYbcciTRYb1QMiaD%2FeHBvLgyA2OdVS3WIOugZJNP3XNXp2pTEWk8P3jhZSE1Ji5L8B7PkF2OzP2U7kkC%2FvWJtxRgv8ulUw8tfbvQY6pgGJWSL7b8Pb2FP1049WnsBb6ooA5Y4GfkpomdnA2VnzMmwCS1BvNT021wPLTXasgCdtsSyB2I96f%2FjxapERr3Yk%2FDvw3Hvk6a5jyzG9ZVXpf%2BbIFpTy4QyYT%2Fu7kJ0Qa5cbLqK22SzhixcfmHENAA8ayGH17A%2FsAZslHvZ6l6qmGECiqRQbWS9oC123i13h4YoOrVb9b2%2FLzCub0CAZfEzNBe2UOLlO&X-Amz-Signature=254fbcc7e9f60f46a04676f590a7113d3008ad766bebee90793826ea4b3bd9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XRCSTHG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRbTlSQV92ksxDtjzPGsaJ0EgGVbezXz1EhCzYMb66FAiBcY8h3wLIDWgbXRjcbHQ65049CV%2F4S2ie8ZDZaGhFy5iqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx1FBm00YYlGTeS2KtwDnbhx42sYmbzozpz2%2BH%2F%2B2PVkqr%2BLt%2B3LBlSX9u1Xy3TkyoLoeSsfGZ2M5CLUA2D%2B1Gy02AZCg%2BBC6ktVxBk%2FbA4WZhN%2FluHD7wUZOuMDM5Q1FXPyNeunr5JFxlFKfM%2B0gUTaJiabpqtppEvDTAyrtsxoijMn7s8AnShtnoJenwAU92LwboGlUF2acjXQmgseSpQ%2Fj9xoQovewxyp27Oc%2FybBs2xw49CfY28tTfmfy4szf277fU%2F93Ir4Ier2eOtLEU9wtXBBZm21YeyohkThaXJo0UBNIgSEp8AtAqsTmznJJp1IyIKmSOiI1l2MKoQmlEftvc%2F6Tcfa3H4BGRKGjoqmsxDjexxdVSAyeo%2BE6yN7GZ2J%2FT8K%2B002qao6fF4Pmt%2Fb3FbiuVMNreO%2Fqj3%2F7fIRQXezmWxlTPfTwaeSyFJWiSE4BHfnCh%2BftluZpQVOBXejIILoA%2BcvYntAnTIATthko7sfZ5SxpjycvAOIBzXI6gbb4skkDRXj88LFbcnYEHVbZeCEzb9CbHg4a4B7EVqCnFY8%2BaFYbcciTRYb1QMiaD%2FeHBvLgyA2OdVS3WIOugZJNP3XNXp2pTEWk8P3jhZSE1Ji5L8B7PkF2OzP2U7kkC%2FvWJtxRgv8ulUw8tfbvQY6pgGJWSL7b8Pb2FP1049WnsBb6ooA5Y4GfkpomdnA2VnzMmwCS1BvNT021wPLTXasgCdtsSyB2I96f%2FjxapERr3Yk%2FDvw3Hvk6a5jyzG9ZVXpf%2BbIFpTy4QyYT%2Fu7kJ0Qa5cbLqK22SzhixcfmHENAA8ayGH17A%2FsAZslHvZ6l6qmGECiqRQbWS9oC123i13h4YoOrVb9b2%2FLzCub0CAZfEzNBe2UOLlO&X-Amz-Signature=670778ed7e420c00aee662b0e3bf62ec3d58df37b17e797e2ddb0a4f45e84e37&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
