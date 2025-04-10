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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AY5GQJU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDxoTjonXMpRyLPticehRMHOJONIfU7rOJZa4Uc1VIjIAiEAoAovtoFQ2hk749Dln3KJlh3aclGdd%2Fj1SVslrbpXzB8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbbXLcU2ezD%2BXtdlCrcA24IfOJmw84WDIiQdizB5Li4Nsm9L1oKJ99d7QWtr382HM55vkbevc0U9CYvYEg7G2B4DjvACB%2BCjtc5CZmlae4m5rzmltmXhFHE%2Fc7xKT%2BojfiHCckMnjiM4%2F2ohuXlESskV91fzGu6MpU4%2BZgUfCcn7nY36tHMJQTdIqWesVxESyX26wQCxjNKVlz3o0b23tvogztjtxt1qP2V8Xm0vQZc6Dw12HOe%2Fsib7pvRKwBv9ZPyKAius17C2BAnRV6AUjGNu14eWoKVHAEglFY64%2FuxrOAYRPwlvNALpH2GZkqnLcltVtZBXVbd3hHLG55AbIUwzOGva2DiFL7JGc2PCHfjqYdTR47RE%2BdZES4ABiMzj9agN6ir0FWSoTAJUqLoB8kaFcEcLm3vIld4JYYx83FAdfGi7wuQxh5Hq3GLVNlavchcWEJ17zhjeVKWbkfnZKVBFQZ9IO7cGMKEGgT9INWCO7GMkO9XmWwBdSMZPiL7XIN1u4fVPbeRCqKxiVyQx724f%2Ba2x%2BJbn3aPD01VN0Pv7Njs9j2BLh785FHsbsLYjnze02e%2BacrqE7IphQHuh1cfbSIZRGPDguqYsf4a3T88%2BJHIacPdZbF%2BaUld246o4arrUtyUiVydegBYMLu93r8GOqUBzuZstPPSnRSRErmiMyJl%2F5ly5UqrO2DeSTau6rHifRmeYsy7Plnylsoye8Ya5cUB8QtWBE1xizPabbKo1IykYZkaczPbzyDZRmI3C0rVp%2FbAAkVWjgyp3Dk0N6Mcj19boaUYHwxl9HMeCPCfTnmptcqhIF3ye9QLkTLwc8hm%2B3WURfdTe3TI2rMItn78XVtlbfgNBdrLcxRXjAyMR%2Bn7PZZJyCml&X-Amz-Signature=1d19a4b7b7975c42d733c7cd3478013a65f729277b0ab15888519e5ac433d8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AY5GQJU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDxoTjonXMpRyLPticehRMHOJONIfU7rOJZa4Uc1VIjIAiEAoAovtoFQ2hk749Dln3KJlh3aclGdd%2Fj1SVslrbpXzB8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbbXLcU2ezD%2BXtdlCrcA24IfOJmw84WDIiQdizB5Li4Nsm9L1oKJ99d7QWtr382HM55vkbevc0U9CYvYEg7G2B4DjvACB%2BCjtc5CZmlae4m5rzmltmXhFHE%2Fc7xKT%2BojfiHCckMnjiM4%2F2ohuXlESskV91fzGu6MpU4%2BZgUfCcn7nY36tHMJQTdIqWesVxESyX26wQCxjNKVlz3o0b23tvogztjtxt1qP2V8Xm0vQZc6Dw12HOe%2Fsib7pvRKwBv9ZPyKAius17C2BAnRV6AUjGNu14eWoKVHAEglFY64%2FuxrOAYRPwlvNALpH2GZkqnLcltVtZBXVbd3hHLG55AbIUwzOGva2DiFL7JGc2PCHfjqYdTR47RE%2BdZES4ABiMzj9agN6ir0FWSoTAJUqLoB8kaFcEcLm3vIld4JYYx83FAdfGi7wuQxh5Hq3GLVNlavchcWEJ17zhjeVKWbkfnZKVBFQZ9IO7cGMKEGgT9INWCO7GMkO9XmWwBdSMZPiL7XIN1u4fVPbeRCqKxiVyQx724f%2Ba2x%2BJbn3aPD01VN0Pv7Njs9j2BLh785FHsbsLYjnze02e%2BacrqE7IphQHuh1cfbSIZRGPDguqYsf4a3T88%2BJHIacPdZbF%2BaUld246o4arrUtyUiVydegBYMLu93r8GOqUBzuZstPPSnRSRErmiMyJl%2F5ly5UqrO2DeSTau6rHifRmeYsy7Plnylsoye8Ya5cUB8QtWBE1xizPabbKo1IykYZkaczPbzyDZRmI3C0rVp%2FbAAkVWjgyp3Dk0N6Mcj19boaUYHwxl9HMeCPCfTnmptcqhIF3ye9QLkTLwc8hm%2B3WURfdTe3TI2rMItn78XVtlbfgNBdrLcxRXjAyMR%2Bn7PZZJyCml&X-Amz-Signature=4a330f6792e1299d2f0fd63e1951604c528dacae728b2eceadb68312f5c1c77d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AY5GQJU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDxoTjonXMpRyLPticehRMHOJONIfU7rOJZa4Uc1VIjIAiEAoAovtoFQ2hk749Dln3KJlh3aclGdd%2Fj1SVslrbpXzB8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbbXLcU2ezD%2BXtdlCrcA24IfOJmw84WDIiQdizB5Li4Nsm9L1oKJ99d7QWtr382HM55vkbevc0U9CYvYEg7G2B4DjvACB%2BCjtc5CZmlae4m5rzmltmXhFHE%2Fc7xKT%2BojfiHCckMnjiM4%2F2ohuXlESskV91fzGu6MpU4%2BZgUfCcn7nY36tHMJQTdIqWesVxESyX26wQCxjNKVlz3o0b23tvogztjtxt1qP2V8Xm0vQZc6Dw12HOe%2Fsib7pvRKwBv9ZPyKAius17C2BAnRV6AUjGNu14eWoKVHAEglFY64%2FuxrOAYRPwlvNALpH2GZkqnLcltVtZBXVbd3hHLG55AbIUwzOGva2DiFL7JGc2PCHfjqYdTR47RE%2BdZES4ABiMzj9agN6ir0FWSoTAJUqLoB8kaFcEcLm3vIld4JYYx83FAdfGi7wuQxh5Hq3GLVNlavchcWEJ17zhjeVKWbkfnZKVBFQZ9IO7cGMKEGgT9INWCO7GMkO9XmWwBdSMZPiL7XIN1u4fVPbeRCqKxiVyQx724f%2Ba2x%2BJbn3aPD01VN0Pv7Njs9j2BLh785FHsbsLYjnze02e%2BacrqE7IphQHuh1cfbSIZRGPDguqYsf4a3T88%2BJHIacPdZbF%2BaUld246o4arrUtyUiVydegBYMLu93r8GOqUBzuZstPPSnRSRErmiMyJl%2F5ly5UqrO2DeSTau6rHifRmeYsy7Plnylsoye8Ya5cUB8QtWBE1xizPabbKo1IykYZkaczPbzyDZRmI3C0rVp%2FbAAkVWjgyp3Dk0N6Mcj19boaUYHwxl9HMeCPCfTnmptcqhIF3ye9QLkTLwc8hm%2B3WURfdTe3TI2rMItn78XVtlbfgNBdrLcxRXjAyMR%2Bn7PZZJyCml&X-Amz-Signature=3f19a5db4a2f387aafead821a06a490cff40ddd86bb044cdae781a98ff0ed2ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AY5GQJU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDxoTjonXMpRyLPticehRMHOJONIfU7rOJZa4Uc1VIjIAiEAoAovtoFQ2hk749Dln3KJlh3aclGdd%2Fj1SVslrbpXzB8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbbXLcU2ezD%2BXtdlCrcA24IfOJmw84WDIiQdizB5Li4Nsm9L1oKJ99d7QWtr382HM55vkbevc0U9CYvYEg7G2B4DjvACB%2BCjtc5CZmlae4m5rzmltmXhFHE%2Fc7xKT%2BojfiHCckMnjiM4%2F2ohuXlESskV91fzGu6MpU4%2BZgUfCcn7nY36tHMJQTdIqWesVxESyX26wQCxjNKVlz3o0b23tvogztjtxt1qP2V8Xm0vQZc6Dw12HOe%2Fsib7pvRKwBv9ZPyKAius17C2BAnRV6AUjGNu14eWoKVHAEglFY64%2FuxrOAYRPwlvNALpH2GZkqnLcltVtZBXVbd3hHLG55AbIUwzOGva2DiFL7JGc2PCHfjqYdTR47RE%2BdZES4ABiMzj9agN6ir0FWSoTAJUqLoB8kaFcEcLm3vIld4JYYx83FAdfGi7wuQxh5Hq3GLVNlavchcWEJ17zhjeVKWbkfnZKVBFQZ9IO7cGMKEGgT9INWCO7GMkO9XmWwBdSMZPiL7XIN1u4fVPbeRCqKxiVyQx724f%2Ba2x%2BJbn3aPD01VN0Pv7Njs9j2BLh785FHsbsLYjnze02e%2BacrqE7IphQHuh1cfbSIZRGPDguqYsf4a3T88%2BJHIacPdZbF%2BaUld246o4arrUtyUiVydegBYMLu93r8GOqUBzuZstPPSnRSRErmiMyJl%2F5ly5UqrO2DeSTau6rHifRmeYsy7Plnylsoye8Ya5cUB8QtWBE1xizPabbKo1IykYZkaczPbzyDZRmI3C0rVp%2FbAAkVWjgyp3Dk0N6Mcj19boaUYHwxl9HMeCPCfTnmptcqhIF3ye9QLkTLwc8hm%2B3WURfdTe3TI2rMItn78XVtlbfgNBdrLcxRXjAyMR%2Bn7PZZJyCml&X-Amz-Signature=f8d5609c584ea2a4b36e066e633fb5c4c3965dcc4eea50a61d31e2463d1d3fce&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AY5GQJU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDxoTjonXMpRyLPticehRMHOJONIfU7rOJZa4Uc1VIjIAiEAoAovtoFQ2hk749Dln3KJlh3aclGdd%2Fj1SVslrbpXzB8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbbXLcU2ezD%2BXtdlCrcA24IfOJmw84WDIiQdizB5Li4Nsm9L1oKJ99d7QWtr382HM55vkbevc0U9CYvYEg7G2B4DjvACB%2BCjtc5CZmlae4m5rzmltmXhFHE%2Fc7xKT%2BojfiHCckMnjiM4%2F2ohuXlESskV91fzGu6MpU4%2BZgUfCcn7nY36tHMJQTdIqWesVxESyX26wQCxjNKVlz3o0b23tvogztjtxt1qP2V8Xm0vQZc6Dw12HOe%2Fsib7pvRKwBv9ZPyKAius17C2BAnRV6AUjGNu14eWoKVHAEglFY64%2FuxrOAYRPwlvNALpH2GZkqnLcltVtZBXVbd3hHLG55AbIUwzOGva2DiFL7JGc2PCHfjqYdTR47RE%2BdZES4ABiMzj9agN6ir0FWSoTAJUqLoB8kaFcEcLm3vIld4JYYx83FAdfGi7wuQxh5Hq3GLVNlavchcWEJ17zhjeVKWbkfnZKVBFQZ9IO7cGMKEGgT9INWCO7GMkO9XmWwBdSMZPiL7XIN1u4fVPbeRCqKxiVyQx724f%2Ba2x%2BJbn3aPD01VN0Pv7Njs9j2BLh785FHsbsLYjnze02e%2BacrqE7IphQHuh1cfbSIZRGPDguqYsf4a3T88%2BJHIacPdZbF%2BaUld246o4arrUtyUiVydegBYMLu93r8GOqUBzuZstPPSnRSRErmiMyJl%2F5ly5UqrO2DeSTau6rHifRmeYsy7Plnylsoye8Ya5cUB8QtWBE1xizPabbKo1IykYZkaczPbzyDZRmI3C0rVp%2FbAAkVWjgyp3Dk0N6Mcj19boaUYHwxl9HMeCPCfTnmptcqhIF3ye9QLkTLwc8hm%2B3WURfdTe3TI2rMItn78XVtlbfgNBdrLcxRXjAyMR%2Bn7PZZJyCml&X-Amz-Signature=33e2b962fde631cc7818c732dca7a23dd3ce68ca25dade37d1e2c48b676ddd92&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AY5GQJU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDxoTjonXMpRyLPticehRMHOJONIfU7rOJZa4Uc1VIjIAiEAoAovtoFQ2hk749Dln3KJlh3aclGdd%2Fj1SVslrbpXzB8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbbXLcU2ezD%2BXtdlCrcA24IfOJmw84WDIiQdizB5Li4Nsm9L1oKJ99d7QWtr382HM55vkbevc0U9CYvYEg7G2B4DjvACB%2BCjtc5CZmlae4m5rzmltmXhFHE%2Fc7xKT%2BojfiHCckMnjiM4%2F2ohuXlESskV91fzGu6MpU4%2BZgUfCcn7nY36tHMJQTdIqWesVxESyX26wQCxjNKVlz3o0b23tvogztjtxt1qP2V8Xm0vQZc6Dw12HOe%2Fsib7pvRKwBv9ZPyKAius17C2BAnRV6AUjGNu14eWoKVHAEglFY64%2FuxrOAYRPwlvNALpH2GZkqnLcltVtZBXVbd3hHLG55AbIUwzOGva2DiFL7JGc2PCHfjqYdTR47RE%2BdZES4ABiMzj9agN6ir0FWSoTAJUqLoB8kaFcEcLm3vIld4JYYx83FAdfGi7wuQxh5Hq3GLVNlavchcWEJ17zhjeVKWbkfnZKVBFQZ9IO7cGMKEGgT9INWCO7GMkO9XmWwBdSMZPiL7XIN1u4fVPbeRCqKxiVyQx724f%2Ba2x%2BJbn3aPD01VN0Pv7Njs9j2BLh785FHsbsLYjnze02e%2BacrqE7IphQHuh1cfbSIZRGPDguqYsf4a3T88%2BJHIacPdZbF%2BaUld246o4arrUtyUiVydegBYMLu93r8GOqUBzuZstPPSnRSRErmiMyJl%2F5ly5UqrO2DeSTau6rHifRmeYsy7Plnylsoye8Ya5cUB8QtWBE1xizPabbKo1IykYZkaczPbzyDZRmI3C0rVp%2FbAAkVWjgyp3Dk0N6Mcj19boaUYHwxl9HMeCPCfTnmptcqhIF3ye9QLkTLwc8hm%2B3WURfdTe3TI2rMItn78XVtlbfgNBdrLcxRXjAyMR%2Bn7PZZJyCml&X-Amz-Signature=3c9e183161a901a58cc1a81649c367ac57890c7d3140c09490534d220e27d711&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AY5GQJU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDxoTjonXMpRyLPticehRMHOJONIfU7rOJZa4Uc1VIjIAiEAoAovtoFQ2hk749Dln3KJlh3aclGdd%2Fj1SVslrbpXzB8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbbXLcU2ezD%2BXtdlCrcA24IfOJmw84WDIiQdizB5Li4Nsm9L1oKJ99d7QWtr382HM55vkbevc0U9CYvYEg7G2B4DjvACB%2BCjtc5CZmlae4m5rzmltmXhFHE%2Fc7xKT%2BojfiHCckMnjiM4%2F2ohuXlESskV91fzGu6MpU4%2BZgUfCcn7nY36tHMJQTdIqWesVxESyX26wQCxjNKVlz3o0b23tvogztjtxt1qP2V8Xm0vQZc6Dw12HOe%2Fsib7pvRKwBv9ZPyKAius17C2BAnRV6AUjGNu14eWoKVHAEglFY64%2FuxrOAYRPwlvNALpH2GZkqnLcltVtZBXVbd3hHLG55AbIUwzOGva2DiFL7JGc2PCHfjqYdTR47RE%2BdZES4ABiMzj9agN6ir0FWSoTAJUqLoB8kaFcEcLm3vIld4JYYx83FAdfGi7wuQxh5Hq3GLVNlavchcWEJ17zhjeVKWbkfnZKVBFQZ9IO7cGMKEGgT9INWCO7GMkO9XmWwBdSMZPiL7XIN1u4fVPbeRCqKxiVyQx724f%2Ba2x%2BJbn3aPD01VN0Pv7Njs9j2BLh785FHsbsLYjnze02e%2BacrqE7IphQHuh1cfbSIZRGPDguqYsf4a3T88%2BJHIacPdZbF%2BaUld246o4arrUtyUiVydegBYMLu93r8GOqUBzuZstPPSnRSRErmiMyJl%2F5ly5UqrO2DeSTau6rHifRmeYsy7Plnylsoye8Ya5cUB8QtWBE1xizPabbKo1IykYZkaczPbzyDZRmI3C0rVp%2FbAAkVWjgyp3Dk0N6Mcj19boaUYHwxl9HMeCPCfTnmptcqhIF3ye9QLkTLwc8hm%2B3WURfdTe3TI2rMItn78XVtlbfgNBdrLcxRXjAyMR%2Bn7PZZJyCml&X-Amz-Signature=7c6d99b892826d15fc6c045ae64e66d4b0bb33c4938c0e6daaad31d9252cd678&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
