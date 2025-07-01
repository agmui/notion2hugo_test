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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6FIJ3D%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNRp5bhs5h3WUtIr5XgwNErgB%2F8DEp5oF%2Bo9vMFlYkAiEA0xc6VznAXRBc2jHMWywHVWw3G9MA8V7iQ%2FRTSvjkLWcqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbgqi4%2F0%2FelzPzjXircA%2BWSsSjBDVx4GDNCxrQvYAn4e4K3SpmTPYVr95UP98jtPOUdlxd30x0ufE%2BMkWCbvF5736%2BFJFWsa4bP0eRDT9ilDa06CSHrD5Y6bW4x8F9d9Hwqst0qyfjni6IMLrC%2BoL3FE0vHkGVpA9iUWrDqBZ9e6GyqgELB2ZQVgRkWpaWG6mLP45B%2BXKMyRG8jeApTT3IoKJIfizO4lyr4r2UIAk2Khcc6XlviTiHC8WmW0jhVEFHxghDtpe2D%2BwRGcmNr83%2BIHu5WSnTjc705r9ZRrJfBMJDrVZpH%2BdU2yn1vGkITVFCq3WAJHbrnmwn36EbUCJHKzjVzFmAX47KzTRZUkzRiFYcN8l1sEAivvWdNg5LldBN%2BD05b%2FuVoshT%2Bau4D9nGlp9FpQbfSM%2FPAAtsmnL0VcWbCfWWAknte17f%2Fu8o1h388jriqh%2BcKr%2BkdCnNe0%2BCgpCxpVLzT7sRERSMBSMrd%2B73mUa9Duva8%2Fs6NcAXmyHWdI0xpVJaDYWdsEiAgKLkjkusqBd7xPJCbwaNSRyoE%2B2bVGaUJNTYzAe9F60Pn%2FQdl22NBUGLsNVR6uYNG0T6PXTkuMWJ9aAcPrCuq%2FdbPH%2Fyr7jVBh7u1DV10B6dn79l5XugDhKb1F8vHMPPIkcMGOqUB0eo4Nc69JzcPbmvS70Apm3%2B9cvWR2ojmQaFhXeYyTULPhd9vnTc7KdBGk6WSSSsyAne6aaAaYhKUhRyclp%2BhIFpjI3Td0N945sJfkYJyTdNR%2FUq7W9%2FPX70IVGs%2F2AxT2ZwbJNj2cWyt26uMDxW8Cb%2BfiACVYQgS71aXKFDwviz4BVjjH7Lym%2BFO9Xw0lY3l0ii7TibEIKGEwDfTba%2FDEVXSZkBD&X-Amz-Signature=37097118235be7e076a1dd4d8b7e5261a53fc6cd9950f117d612f554c3e80160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6FIJ3D%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNRp5bhs5h3WUtIr5XgwNErgB%2F8DEp5oF%2Bo9vMFlYkAiEA0xc6VznAXRBc2jHMWywHVWw3G9MA8V7iQ%2FRTSvjkLWcqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbgqi4%2F0%2FelzPzjXircA%2BWSsSjBDVx4GDNCxrQvYAn4e4K3SpmTPYVr95UP98jtPOUdlxd30x0ufE%2BMkWCbvF5736%2BFJFWsa4bP0eRDT9ilDa06CSHrD5Y6bW4x8F9d9Hwqst0qyfjni6IMLrC%2BoL3FE0vHkGVpA9iUWrDqBZ9e6GyqgELB2ZQVgRkWpaWG6mLP45B%2BXKMyRG8jeApTT3IoKJIfizO4lyr4r2UIAk2Khcc6XlviTiHC8WmW0jhVEFHxghDtpe2D%2BwRGcmNr83%2BIHu5WSnTjc705r9ZRrJfBMJDrVZpH%2BdU2yn1vGkITVFCq3WAJHbrnmwn36EbUCJHKzjVzFmAX47KzTRZUkzRiFYcN8l1sEAivvWdNg5LldBN%2BD05b%2FuVoshT%2Bau4D9nGlp9FpQbfSM%2FPAAtsmnL0VcWbCfWWAknte17f%2Fu8o1h388jriqh%2BcKr%2BkdCnNe0%2BCgpCxpVLzT7sRERSMBSMrd%2B73mUa9Duva8%2Fs6NcAXmyHWdI0xpVJaDYWdsEiAgKLkjkusqBd7xPJCbwaNSRyoE%2B2bVGaUJNTYzAe9F60Pn%2FQdl22NBUGLsNVR6uYNG0T6PXTkuMWJ9aAcPrCuq%2FdbPH%2Fyr7jVBh7u1DV10B6dn79l5XugDhKb1F8vHMPPIkcMGOqUB0eo4Nc69JzcPbmvS70Apm3%2B9cvWR2ojmQaFhXeYyTULPhd9vnTc7KdBGk6WSSSsyAne6aaAaYhKUhRyclp%2BhIFpjI3Td0N945sJfkYJyTdNR%2FUq7W9%2FPX70IVGs%2F2AxT2ZwbJNj2cWyt26uMDxW8Cb%2BfiACVYQgS71aXKFDwviz4BVjjH7Lym%2BFO9Xw0lY3l0ii7TibEIKGEwDfTba%2FDEVXSZkBD&X-Amz-Signature=6e87296573f4d31d6f5813a22fe437bcf81c828211fa09a6e836d9f49921dae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6FIJ3D%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNRp5bhs5h3WUtIr5XgwNErgB%2F8DEp5oF%2Bo9vMFlYkAiEA0xc6VznAXRBc2jHMWywHVWw3G9MA8V7iQ%2FRTSvjkLWcqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbgqi4%2F0%2FelzPzjXircA%2BWSsSjBDVx4GDNCxrQvYAn4e4K3SpmTPYVr95UP98jtPOUdlxd30x0ufE%2BMkWCbvF5736%2BFJFWsa4bP0eRDT9ilDa06CSHrD5Y6bW4x8F9d9Hwqst0qyfjni6IMLrC%2BoL3FE0vHkGVpA9iUWrDqBZ9e6GyqgELB2ZQVgRkWpaWG6mLP45B%2BXKMyRG8jeApTT3IoKJIfizO4lyr4r2UIAk2Khcc6XlviTiHC8WmW0jhVEFHxghDtpe2D%2BwRGcmNr83%2BIHu5WSnTjc705r9ZRrJfBMJDrVZpH%2BdU2yn1vGkITVFCq3WAJHbrnmwn36EbUCJHKzjVzFmAX47KzTRZUkzRiFYcN8l1sEAivvWdNg5LldBN%2BD05b%2FuVoshT%2Bau4D9nGlp9FpQbfSM%2FPAAtsmnL0VcWbCfWWAknte17f%2Fu8o1h388jriqh%2BcKr%2BkdCnNe0%2BCgpCxpVLzT7sRERSMBSMrd%2B73mUa9Duva8%2Fs6NcAXmyHWdI0xpVJaDYWdsEiAgKLkjkusqBd7xPJCbwaNSRyoE%2B2bVGaUJNTYzAe9F60Pn%2FQdl22NBUGLsNVR6uYNG0T6PXTkuMWJ9aAcPrCuq%2FdbPH%2Fyr7jVBh7u1DV10B6dn79l5XugDhKb1F8vHMPPIkcMGOqUB0eo4Nc69JzcPbmvS70Apm3%2B9cvWR2ojmQaFhXeYyTULPhd9vnTc7KdBGk6WSSSsyAne6aaAaYhKUhRyclp%2BhIFpjI3Td0N945sJfkYJyTdNR%2FUq7W9%2FPX70IVGs%2F2AxT2ZwbJNj2cWyt26uMDxW8Cb%2BfiACVYQgS71aXKFDwviz4BVjjH7Lym%2BFO9Xw0lY3l0ii7TibEIKGEwDfTba%2FDEVXSZkBD&X-Amz-Signature=71ea7ff40e29881ab36c2ebaeabd10edc09416eff1f9c0f33e6094320bf04c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6FIJ3D%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNRp5bhs5h3WUtIr5XgwNErgB%2F8DEp5oF%2Bo9vMFlYkAiEA0xc6VznAXRBc2jHMWywHVWw3G9MA8V7iQ%2FRTSvjkLWcqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbgqi4%2F0%2FelzPzjXircA%2BWSsSjBDVx4GDNCxrQvYAn4e4K3SpmTPYVr95UP98jtPOUdlxd30x0ufE%2BMkWCbvF5736%2BFJFWsa4bP0eRDT9ilDa06CSHrD5Y6bW4x8F9d9Hwqst0qyfjni6IMLrC%2BoL3FE0vHkGVpA9iUWrDqBZ9e6GyqgELB2ZQVgRkWpaWG6mLP45B%2BXKMyRG8jeApTT3IoKJIfizO4lyr4r2UIAk2Khcc6XlviTiHC8WmW0jhVEFHxghDtpe2D%2BwRGcmNr83%2BIHu5WSnTjc705r9ZRrJfBMJDrVZpH%2BdU2yn1vGkITVFCq3WAJHbrnmwn36EbUCJHKzjVzFmAX47KzTRZUkzRiFYcN8l1sEAivvWdNg5LldBN%2BD05b%2FuVoshT%2Bau4D9nGlp9FpQbfSM%2FPAAtsmnL0VcWbCfWWAknte17f%2Fu8o1h388jriqh%2BcKr%2BkdCnNe0%2BCgpCxpVLzT7sRERSMBSMrd%2B73mUa9Duva8%2Fs6NcAXmyHWdI0xpVJaDYWdsEiAgKLkjkusqBd7xPJCbwaNSRyoE%2B2bVGaUJNTYzAe9F60Pn%2FQdl22NBUGLsNVR6uYNG0T6PXTkuMWJ9aAcPrCuq%2FdbPH%2Fyr7jVBh7u1DV10B6dn79l5XugDhKb1F8vHMPPIkcMGOqUB0eo4Nc69JzcPbmvS70Apm3%2B9cvWR2ojmQaFhXeYyTULPhd9vnTc7KdBGk6WSSSsyAne6aaAaYhKUhRyclp%2BhIFpjI3Td0N945sJfkYJyTdNR%2FUq7W9%2FPX70IVGs%2F2AxT2ZwbJNj2cWyt26uMDxW8Cb%2BfiACVYQgS71aXKFDwviz4BVjjH7Lym%2BFO9Xw0lY3l0ii7TibEIKGEwDfTba%2FDEVXSZkBD&X-Amz-Signature=da890e0a1cba9b46507bf77a04fb28135266f9b6942f57590ea0144155ce1392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6FIJ3D%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNRp5bhs5h3WUtIr5XgwNErgB%2F8DEp5oF%2Bo9vMFlYkAiEA0xc6VznAXRBc2jHMWywHVWw3G9MA8V7iQ%2FRTSvjkLWcqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbgqi4%2F0%2FelzPzjXircA%2BWSsSjBDVx4GDNCxrQvYAn4e4K3SpmTPYVr95UP98jtPOUdlxd30x0ufE%2BMkWCbvF5736%2BFJFWsa4bP0eRDT9ilDa06CSHrD5Y6bW4x8F9d9Hwqst0qyfjni6IMLrC%2BoL3FE0vHkGVpA9iUWrDqBZ9e6GyqgELB2ZQVgRkWpaWG6mLP45B%2BXKMyRG8jeApTT3IoKJIfizO4lyr4r2UIAk2Khcc6XlviTiHC8WmW0jhVEFHxghDtpe2D%2BwRGcmNr83%2BIHu5WSnTjc705r9ZRrJfBMJDrVZpH%2BdU2yn1vGkITVFCq3WAJHbrnmwn36EbUCJHKzjVzFmAX47KzTRZUkzRiFYcN8l1sEAivvWdNg5LldBN%2BD05b%2FuVoshT%2Bau4D9nGlp9FpQbfSM%2FPAAtsmnL0VcWbCfWWAknte17f%2Fu8o1h388jriqh%2BcKr%2BkdCnNe0%2BCgpCxpVLzT7sRERSMBSMrd%2B73mUa9Duva8%2Fs6NcAXmyHWdI0xpVJaDYWdsEiAgKLkjkusqBd7xPJCbwaNSRyoE%2B2bVGaUJNTYzAe9F60Pn%2FQdl22NBUGLsNVR6uYNG0T6PXTkuMWJ9aAcPrCuq%2FdbPH%2Fyr7jVBh7u1DV10B6dn79l5XugDhKb1F8vHMPPIkcMGOqUB0eo4Nc69JzcPbmvS70Apm3%2B9cvWR2ojmQaFhXeYyTULPhd9vnTc7KdBGk6WSSSsyAne6aaAaYhKUhRyclp%2BhIFpjI3Td0N945sJfkYJyTdNR%2FUq7W9%2FPX70IVGs%2F2AxT2ZwbJNj2cWyt26uMDxW8Cb%2BfiACVYQgS71aXKFDwviz4BVjjH7Lym%2BFO9Xw0lY3l0ii7TibEIKGEwDfTba%2FDEVXSZkBD&X-Amz-Signature=9bf20c91f2ba624e93ba14a527503e03c7f26737111f9c58c81d9e63c278d65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6FIJ3D%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNRp5bhs5h3WUtIr5XgwNErgB%2F8DEp5oF%2Bo9vMFlYkAiEA0xc6VznAXRBc2jHMWywHVWw3G9MA8V7iQ%2FRTSvjkLWcqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbgqi4%2F0%2FelzPzjXircA%2BWSsSjBDVx4GDNCxrQvYAn4e4K3SpmTPYVr95UP98jtPOUdlxd30x0ufE%2BMkWCbvF5736%2BFJFWsa4bP0eRDT9ilDa06CSHrD5Y6bW4x8F9d9Hwqst0qyfjni6IMLrC%2BoL3FE0vHkGVpA9iUWrDqBZ9e6GyqgELB2ZQVgRkWpaWG6mLP45B%2BXKMyRG8jeApTT3IoKJIfizO4lyr4r2UIAk2Khcc6XlviTiHC8WmW0jhVEFHxghDtpe2D%2BwRGcmNr83%2BIHu5WSnTjc705r9ZRrJfBMJDrVZpH%2BdU2yn1vGkITVFCq3WAJHbrnmwn36EbUCJHKzjVzFmAX47KzTRZUkzRiFYcN8l1sEAivvWdNg5LldBN%2BD05b%2FuVoshT%2Bau4D9nGlp9FpQbfSM%2FPAAtsmnL0VcWbCfWWAknte17f%2Fu8o1h388jriqh%2BcKr%2BkdCnNe0%2BCgpCxpVLzT7sRERSMBSMrd%2B73mUa9Duva8%2Fs6NcAXmyHWdI0xpVJaDYWdsEiAgKLkjkusqBd7xPJCbwaNSRyoE%2B2bVGaUJNTYzAe9F60Pn%2FQdl22NBUGLsNVR6uYNG0T6PXTkuMWJ9aAcPrCuq%2FdbPH%2Fyr7jVBh7u1DV10B6dn79l5XugDhKb1F8vHMPPIkcMGOqUB0eo4Nc69JzcPbmvS70Apm3%2B9cvWR2ojmQaFhXeYyTULPhd9vnTc7KdBGk6WSSSsyAne6aaAaYhKUhRyclp%2BhIFpjI3Td0N945sJfkYJyTdNR%2FUq7W9%2FPX70IVGs%2F2AxT2ZwbJNj2cWyt26uMDxW8Cb%2BfiACVYQgS71aXKFDwviz4BVjjH7Lym%2BFO9Xw0lY3l0ii7TibEIKGEwDfTba%2FDEVXSZkBD&X-Amz-Signature=972abacc1d433a720b55adf1f58819a319175a1cab6fc419bbe02a928471e9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6FIJ3D%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNRp5bhs5h3WUtIr5XgwNErgB%2F8DEp5oF%2Bo9vMFlYkAiEA0xc6VznAXRBc2jHMWywHVWw3G9MA8V7iQ%2FRTSvjkLWcqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbgqi4%2F0%2FelzPzjXircA%2BWSsSjBDVx4GDNCxrQvYAn4e4K3SpmTPYVr95UP98jtPOUdlxd30x0ufE%2BMkWCbvF5736%2BFJFWsa4bP0eRDT9ilDa06CSHrD5Y6bW4x8F9d9Hwqst0qyfjni6IMLrC%2BoL3FE0vHkGVpA9iUWrDqBZ9e6GyqgELB2ZQVgRkWpaWG6mLP45B%2BXKMyRG8jeApTT3IoKJIfizO4lyr4r2UIAk2Khcc6XlviTiHC8WmW0jhVEFHxghDtpe2D%2BwRGcmNr83%2BIHu5WSnTjc705r9ZRrJfBMJDrVZpH%2BdU2yn1vGkITVFCq3WAJHbrnmwn36EbUCJHKzjVzFmAX47KzTRZUkzRiFYcN8l1sEAivvWdNg5LldBN%2BD05b%2FuVoshT%2Bau4D9nGlp9FpQbfSM%2FPAAtsmnL0VcWbCfWWAknte17f%2Fu8o1h388jriqh%2BcKr%2BkdCnNe0%2BCgpCxpVLzT7sRERSMBSMrd%2B73mUa9Duva8%2Fs6NcAXmyHWdI0xpVJaDYWdsEiAgKLkjkusqBd7xPJCbwaNSRyoE%2B2bVGaUJNTYzAe9F60Pn%2FQdl22NBUGLsNVR6uYNG0T6PXTkuMWJ9aAcPrCuq%2FdbPH%2Fyr7jVBh7u1DV10B6dn79l5XugDhKb1F8vHMPPIkcMGOqUB0eo4Nc69JzcPbmvS70Apm3%2B9cvWR2ojmQaFhXeYyTULPhd9vnTc7KdBGk6WSSSsyAne6aaAaYhKUhRyclp%2BhIFpjI3Td0N945sJfkYJyTdNR%2FUq7W9%2FPX70IVGs%2F2AxT2ZwbJNj2cWyt26uMDxW8Cb%2BfiACVYQgS71aXKFDwviz4BVjjH7Lym%2BFO9Xw0lY3l0ii7TibEIKGEwDfTba%2FDEVXSZkBD&X-Amz-Signature=679e2b3ff865d686eb5331340973a6769f1246914b490a10de53ad2a35f2c168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
