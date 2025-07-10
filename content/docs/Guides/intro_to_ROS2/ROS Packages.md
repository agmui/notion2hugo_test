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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJ7PNUW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIgp%2B3X56rKg34JEHYsbPuEhrZBWXR50uZdQeAb90roAIgCrrDHf%2FaR%2FEFROphjQVIVip%2BYad30KKJ1%2BeKbxk7Ud0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL0UpYXMx6dN%2FXQaircAybiVRXkUu2a968C7MRYPQLExuPxh5vGBYG3lnjfCAUC9DRwdFVK2dyCiHZR4lPo2N5DTwBLNYKHg%2BiKHX0HruQyfExQ9KUK8PiGBIPEjd3RIZrdaL3Pukvj3NAc0JhuhVPP%2ByeqOV4W2cVk37SY0OXA9aKzweYqy%2B1x5ebOCpqrHIMZG9FeNi5%2Fv97cxw2iSBl0nhT0glo4m5ihlB2r5fz%2Fg8j6SgjWQA0gOeuWHxxrA0WfAorNipSMEKYW%2FUQq2BjlrdWtBdKuqPqt%2BS1l8Kf5zL%2BSh8DraWfa56ELCdDD7JoE1srYXFP1PKEdn2XSR8FUSLlbx7Ik67oxfYZc7%2BX2HdOHsIex8Wo2Z1RPx%2Bz2SuyH6VCRoeVZvnoDQm9sLJiA6EBfrBTT6WXPnPfLjir%2FtjMzQlhFPubwzqrLSHcJYeUdsWfZHuEigO4nIJP0QfXMYnbRQ6w3IEx4w7XO6jrlko545c1K47LoIxBCIDMUa3db5dO%2BerO8R%2FLoCTweh9ToOMsXXDN9bJcmhqiP6TCK5Gyy9ElaSri8n%2BiMS7x370ELAoTNhap%2FWOskf1%2Bh3lFIVFIiJi2NCmkyrIO6lM4G%2Bit6oVeH%2FAmN%2F8yvX%2BWGB7aTM%2BkpI8Z3ukCcMObUvsMGOqUBfnItNaRgK4UHkqvr16mrx3sJavfDJTfDP3Rc8R5Adsf5CMLOaFwXS8v9%2BdI%2Fc4LzrwBjgLFx5nkhTO3PUc3r3tEIVwAhmsVk1NbqrqMJRGZSktdddy4kuDn6y0u%2BqhtL256Qj9%2FmcC6mSRMiz4uZtniG%2BD97aslSf2PGCAtMnQ9pywsjNXyWugL5sfzTWR4ffq07dP6VP03LAYvH1eGnVqtFeUfC&X-Amz-Signature=27bd4ea287650e98e1e2628940a69a1e8c7d2418636d63cdfddff0d8fdc7a50f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJ7PNUW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIgp%2B3X56rKg34JEHYsbPuEhrZBWXR50uZdQeAb90roAIgCrrDHf%2FaR%2FEFROphjQVIVip%2BYad30KKJ1%2BeKbxk7Ud0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL0UpYXMx6dN%2FXQaircAybiVRXkUu2a968C7MRYPQLExuPxh5vGBYG3lnjfCAUC9DRwdFVK2dyCiHZR4lPo2N5DTwBLNYKHg%2BiKHX0HruQyfExQ9KUK8PiGBIPEjd3RIZrdaL3Pukvj3NAc0JhuhVPP%2ByeqOV4W2cVk37SY0OXA9aKzweYqy%2B1x5ebOCpqrHIMZG9FeNi5%2Fv97cxw2iSBl0nhT0glo4m5ihlB2r5fz%2Fg8j6SgjWQA0gOeuWHxxrA0WfAorNipSMEKYW%2FUQq2BjlrdWtBdKuqPqt%2BS1l8Kf5zL%2BSh8DraWfa56ELCdDD7JoE1srYXFP1PKEdn2XSR8FUSLlbx7Ik67oxfYZc7%2BX2HdOHsIex8Wo2Z1RPx%2Bz2SuyH6VCRoeVZvnoDQm9sLJiA6EBfrBTT6WXPnPfLjir%2FtjMzQlhFPubwzqrLSHcJYeUdsWfZHuEigO4nIJP0QfXMYnbRQ6w3IEx4w7XO6jrlko545c1K47LoIxBCIDMUa3db5dO%2BerO8R%2FLoCTweh9ToOMsXXDN9bJcmhqiP6TCK5Gyy9ElaSri8n%2BiMS7x370ELAoTNhap%2FWOskf1%2Bh3lFIVFIiJi2NCmkyrIO6lM4G%2Bit6oVeH%2FAmN%2F8yvX%2BWGB7aTM%2BkpI8Z3ukCcMObUvsMGOqUBfnItNaRgK4UHkqvr16mrx3sJavfDJTfDP3Rc8R5Adsf5CMLOaFwXS8v9%2BdI%2Fc4LzrwBjgLFx5nkhTO3PUc3r3tEIVwAhmsVk1NbqrqMJRGZSktdddy4kuDn6y0u%2BqhtL256Qj9%2FmcC6mSRMiz4uZtniG%2BD97aslSf2PGCAtMnQ9pywsjNXyWugL5sfzTWR4ffq07dP6VP03LAYvH1eGnVqtFeUfC&X-Amz-Signature=db48f190198ef4c01a19ae8247cd01edd9a7516927fe39166af3046a1b8bbe7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJ7PNUW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIgp%2B3X56rKg34JEHYsbPuEhrZBWXR50uZdQeAb90roAIgCrrDHf%2FaR%2FEFROphjQVIVip%2BYad30KKJ1%2BeKbxk7Ud0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL0UpYXMx6dN%2FXQaircAybiVRXkUu2a968C7MRYPQLExuPxh5vGBYG3lnjfCAUC9DRwdFVK2dyCiHZR4lPo2N5DTwBLNYKHg%2BiKHX0HruQyfExQ9KUK8PiGBIPEjd3RIZrdaL3Pukvj3NAc0JhuhVPP%2ByeqOV4W2cVk37SY0OXA9aKzweYqy%2B1x5ebOCpqrHIMZG9FeNi5%2Fv97cxw2iSBl0nhT0glo4m5ihlB2r5fz%2Fg8j6SgjWQA0gOeuWHxxrA0WfAorNipSMEKYW%2FUQq2BjlrdWtBdKuqPqt%2BS1l8Kf5zL%2BSh8DraWfa56ELCdDD7JoE1srYXFP1PKEdn2XSR8FUSLlbx7Ik67oxfYZc7%2BX2HdOHsIex8Wo2Z1RPx%2Bz2SuyH6VCRoeVZvnoDQm9sLJiA6EBfrBTT6WXPnPfLjir%2FtjMzQlhFPubwzqrLSHcJYeUdsWfZHuEigO4nIJP0QfXMYnbRQ6w3IEx4w7XO6jrlko545c1K47LoIxBCIDMUa3db5dO%2BerO8R%2FLoCTweh9ToOMsXXDN9bJcmhqiP6TCK5Gyy9ElaSri8n%2BiMS7x370ELAoTNhap%2FWOskf1%2Bh3lFIVFIiJi2NCmkyrIO6lM4G%2Bit6oVeH%2FAmN%2F8yvX%2BWGB7aTM%2BkpI8Z3ukCcMObUvsMGOqUBfnItNaRgK4UHkqvr16mrx3sJavfDJTfDP3Rc8R5Adsf5CMLOaFwXS8v9%2BdI%2Fc4LzrwBjgLFx5nkhTO3PUc3r3tEIVwAhmsVk1NbqrqMJRGZSktdddy4kuDn6y0u%2BqhtL256Qj9%2FmcC6mSRMiz4uZtniG%2BD97aslSf2PGCAtMnQ9pywsjNXyWugL5sfzTWR4ffq07dP6VP03LAYvH1eGnVqtFeUfC&X-Amz-Signature=99a21e936ad74acad2100619d3a124cfc4921e1888fe003d2573dd8f01d5a28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJ7PNUW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIgp%2B3X56rKg34JEHYsbPuEhrZBWXR50uZdQeAb90roAIgCrrDHf%2FaR%2FEFROphjQVIVip%2BYad30KKJ1%2BeKbxk7Ud0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL0UpYXMx6dN%2FXQaircAybiVRXkUu2a968C7MRYPQLExuPxh5vGBYG3lnjfCAUC9DRwdFVK2dyCiHZR4lPo2N5DTwBLNYKHg%2BiKHX0HruQyfExQ9KUK8PiGBIPEjd3RIZrdaL3Pukvj3NAc0JhuhVPP%2ByeqOV4W2cVk37SY0OXA9aKzweYqy%2B1x5ebOCpqrHIMZG9FeNi5%2Fv97cxw2iSBl0nhT0glo4m5ihlB2r5fz%2Fg8j6SgjWQA0gOeuWHxxrA0WfAorNipSMEKYW%2FUQq2BjlrdWtBdKuqPqt%2BS1l8Kf5zL%2BSh8DraWfa56ELCdDD7JoE1srYXFP1PKEdn2XSR8FUSLlbx7Ik67oxfYZc7%2BX2HdOHsIex8Wo2Z1RPx%2Bz2SuyH6VCRoeVZvnoDQm9sLJiA6EBfrBTT6WXPnPfLjir%2FtjMzQlhFPubwzqrLSHcJYeUdsWfZHuEigO4nIJP0QfXMYnbRQ6w3IEx4w7XO6jrlko545c1K47LoIxBCIDMUa3db5dO%2BerO8R%2FLoCTweh9ToOMsXXDN9bJcmhqiP6TCK5Gyy9ElaSri8n%2BiMS7x370ELAoTNhap%2FWOskf1%2Bh3lFIVFIiJi2NCmkyrIO6lM4G%2Bit6oVeH%2FAmN%2F8yvX%2BWGB7aTM%2BkpI8Z3ukCcMObUvsMGOqUBfnItNaRgK4UHkqvr16mrx3sJavfDJTfDP3Rc8R5Adsf5CMLOaFwXS8v9%2BdI%2Fc4LzrwBjgLFx5nkhTO3PUc3r3tEIVwAhmsVk1NbqrqMJRGZSktdddy4kuDn6y0u%2BqhtL256Qj9%2FmcC6mSRMiz4uZtniG%2BD97aslSf2PGCAtMnQ9pywsjNXyWugL5sfzTWR4ffq07dP6VP03LAYvH1eGnVqtFeUfC&X-Amz-Signature=7af09c38fb4bdbe35a2a9557428996ab9e584c517d4cb49bd32fc68f46f70f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJ7PNUW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIgp%2B3X56rKg34JEHYsbPuEhrZBWXR50uZdQeAb90roAIgCrrDHf%2FaR%2FEFROphjQVIVip%2BYad30KKJ1%2BeKbxk7Ud0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL0UpYXMx6dN%2FXQaircAybiVRXkUu2a968C7MRYPQLExuPxh5vGBYG3lnjfCAUC9DRwdFVK2dyCiHZR4lPo2N5DTwBLNYKHg%2BiKHX0HruQyfExQ9KUK8PiGBIPEjd3RIZrdaL3Pukvj3NAc0JhuhVPP%2ByeqOV4W2cVk37SY0OXA9aKzweYqy%2B1x5ebOCpqrHIMZG9FeNi5%2Fv97cxw2iSBl0nhT0glo4m5ihlB2r5fz%2Fg8j6SgjWQA0gOeuWHxxrA0WfAorNipSMEKYW%2FUQq2BjlrdWtBdKuqPqt%2BS1l8Kf5zL%2BSh8DraWfa56ELCdDD7JoE1srYXFP1PKEdn2XSR8FUSLlbx7Ik67oxfYZc7%2BX2HdOHsIex8Wo2Z1RPx%2Bz2SuyH6VCRoeVZvnoDQm9sLJiA6EBfrBTT6WXPnPfLjir%2FtjMzQlhFPubwzqrLSHcJYeUdsWfZHuEigO4nIJP0QfXMYnbRQ6w3IEx4w7XO6jrlko545c1K47LoIxBCIDMUa3db5dO%2BerO8R%2FLoCTweh9ToOMsXXDN9bJcmhqiP6TCK5Gyy9ElaSri8n%2BiMS7x370ELAoTNhap%2FWOskf1%2Bh3lFIVFIiJi2NCmkyrIO6lM4G%2Bit6oVeH%2FAmN%2F8yvX%2BWGB7aTM%2BkpI8Z3ukCcMObUvsMGOqUBfnItNaRgK4UHkqvr16mrx3sJavfDJTfDP3Rc8R5Adsf5CMLOaFwXS8v9%2BdI%2Fc4LzrwBjgLFx5nkhTO3PUc3r3tEIVwAhmsVk1NbqrqMJRGZSktdddy4kuDn6y0u%2BqhtL256Qj9%2FmcC6mSRMiz4uZtniG%2BD97aslSf2PGCAtMnQ9pywsjNXyWugL5sfzTWR4ffq07dP6VP03LAYvH1eGnVqtFeUfC&X-Amz-Signature=4fe11adaedebc79bf97c1c8c40d93b4ae885510ee09566128db597eff5f7f060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJ7PNUW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIgp%2B3X56rKg34JEHYsbPuEhrZBWXR50uZdQeAb90roAIgCrrDHf%2FaR%2FEFROphjQVIVip%2BYad30KKJ1%2BeKbxk7Ud0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL0UpYXMx6dN%2FXQaircAybiVRXkUu2a968C7MRYPQLExuPxh5vGBYG3lnjfCAUC9DRwdFVK2dyCiHZR4lPo2N5DTwBLNYKHg%2BiKHX0HruQyfExQ9KUK8PiGBIPEjd3RIZrdaL3Pukvj3NAc0JhuhVPP%2ByeqOV4W2cVk37SY0OXA9aKzweYqy%2B1x5ebOCpqrHIMZG9FeNi5%2Fv97cxw2iSBl0nhT0glo4m5ihlB2r5fz%2Fg8j6SgjWQA0gOeuWHxxrA0WfAorNipSMEKYW%2FUQq2BjlrdWtBdKuqPqt%2BS1l8Kf5zL%2BSh8DraWfa56ELCdDD7JoE1srYXFP1PKEdn2XSR8FUSLlbx7Ik67oxfYZc7%2BX2HdOHsIex8Wo2Z1RPx%2Bz2SuyH6VCRoeVZvnoDQm9sLJiA6EBfrBTT6WXPnPfLjir%2FtjMzQlhFPubwzqrLSHcJYeUdsWfZHuEigO4nIJP0QfXMYnbRQ6w3IEx4w7XO6jrlko545c1K47LoIxBCIDMUa3db5dO%2BerO8R%2FLoCTweh9ToOMsXXDN9bJcmhqiP6TCK5Gyy9ElaSri8n%2BiMS7x370ELAoTNhap%2FWOskf1%2Bh3lFIVFIiJi2NCmkyrIO6lM4G%2Bit6oVeH%2FAmN%2F8yvX%2BWGB7aTM%2BkpI8Z3ukCcMObUvsMGOqUBfnItNaRgK4UHkqvr16mrx3sJavfDJTfDP3Rc8R5Adsf5CMLOaFwXS8v9%2BdI%2Fc4LzrwBjgLFx5nkhTO3PUc3r3tEIVwAhmsVk1NbqrqMJRGZSktdddy4kuDn6y0u%2BqhtL256Qj9%2FmcC6mSRMiz4uZtniG%2BD97aslSf2PGCAtMnQ9pywsjNXyWugL5sfzTWR4ffq07dP6VP03LAYvH1eGnVqtFeUfC&X-Amz-Signature=b0984e1ad0bfaf3f9a01e1662c6db9db86c55235153e50c682be2163f520e952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJ7PNUW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIgp%2B3X56rKg34JEHYsbPuEhrZBWXR50uZdQeAb90roAIgCrrDHf%2FaR%2FEFROphjQVIVip%2BYad30KKJ1%2BeKbxk7Ud0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL0UpYXMx6dN%2FXQaircAybiVRXkUu2a968C7MRYPQLExuPxh5vGBYG3lnjfCAUC9DRwdFVK2dyCiHZR4lPo2N5DTwBLNYKHg%2BiKHX0HruQyfExQ9KUK8PiGBIPEjd3RIZrdaL3Pukvj3NAc0JhuhVPP%2ByeqOV4W2cVk37SY0OXA9aKzweYqy%2B1x5ebOCpqrHIMZG9FeNi5%2Fv97cxw2iSBl0nhT0glo4m5ihlB2r5fz%2Fg8j6SgjWQA0gOeuWHxxrA0WfAorNipSMEKYW%2FUQq2BjlrdWtBdKuqPqt%2BS1l8Kf5zL%2BSh8DraWfa56ELCdDD7JoE1srYXFP1PKEdn2XSR8FUSLlbx7Ik67oxfYZc7%2BX2HdOHsIex8Wo2Z1RPx%2Bz2SuyH6VCRoeVZvnoDQm9sLJiA6EBfrBTT6WXPnPfLjir%2FtjMzQlhFPubwzqrLSHcJYeUdsWfZHuEigO4nIJP0QfXMYnbRQ6w3IEx4w7XO6jrlko545c1K47LoIxBCIDMUa3db5dO%2BerO8R%2FLoCTweh9ToOMsXXDN9bJcmhqiP6TCK5Gyy9ElaSri8n%2BiMS7x370ELAoTNhap%2FWOskf1%2Bh3lFIVFIiJi2NCmkyrIO6lM4G%2Bit6oVeH%2FAmN%2F8yvX%2BWGB7aTM%2BkpI8Z3ukCcMObUvsMGOqUBfnItNaRgK4UHkqvr16mrx3sJavfDJTfDP3Rc8R5Adsf5CMLOaFwXS8v9%2BdI%2Fc4LzrwBjgLFx5nkhTO3PUc3r3tEIVwAhmsVk1NbqrqMJRGZSktdddy4kuDn6y0u%2BqhtL256Qj9%2FmcC6mSRMiz4uZtniG%2BD97aslSf2PGCAtMnQ9pywsjNXyWugL5sfzTWR4ffq07dP6VP03LAYvH1eGnVqtFeUfC&X-Amz-Signature=202219203b304e8ef5bf0031b5ebe743545398db877cec6e3b90a91ad31c747a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
