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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CO2AXF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIjdX8ck7VMbASUwAwhsh8Mgf4cyhHNNF8XS%2FG5YZzsAIgOygn59CweVKMWgPiWWsgBnIASDxvoJc%2BJjC3vZR55hwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNEKxgNNh%2F01PLzPCrcAw%2BiqScrvHHwfOeEiKGvfPUBuWbYglYhtFPJ9%2FFoymIBb9VgktmyYdxdfeXfy3tJEX200Rf7r3DD%2FRPhU%2FMt778420gfOrdTACfvHwrUdzfiUuwhHt9tkSAhAaSxLiDtBmpOKEn8Qdy8vWe9YsLUS12Gu82CT8ZZ5m3uw3QZyOTZterS3NJoUA0nn3hWp1DOIFUl3rOYzKxmTeyS0lCDbhon%2BbxmLO0VcbFATaEcMFHFPnZywmoyu0BtUT4MUSqlpLNFKqJZvmg5YZyvx2bK9V3tAAv9E3FI9oqqBsGRcX7DguN0lfDzyfL2OZ5ogQ%2B8n2uDuPdXcc4sBNvj56NeU08YC4SVfMqOxe6754HXhy9QpqwuW7NpZrLJoV3sqxenfpAjdORy4ZaeqSM2os8OT26ntfwGFwq8mzKnqL4n3VTkHWTIqubOB3VmnuVEXXXDMi1UdBFH%2BE55CSIj%2BuWlaoIlD9A185DH7iM8fVOo7K4hMngcvz%2FVotObNxpfMZkKMyCZewpnaWAZ3W1hy4%2Fz56YvOTtKu9oiXbxS%2FxHqB6RjgTosoWxfp2WXLFqZyi%2BR2qzU2lR%2Bc6gsWxs6hafb4idl4LkKxClL0LmT8qXcFYzbGYDXAGK1R2f8PrKOML7Bp8QGOqUBuS6udMqG5L8%2F4Y%2FUdvOE7sZlMWzqbutRF3YrPCYLZRN0wuDA3rTlhEdY9DTNrol96yIcN%2FwZ%2FqkBxdoShckD8tGh%2B7uxFfeqpdi9OMEWVErPdcY%2FwhR7OTM3nLtv3IuxiX61m3EL3oA7LhSrYyA0s6LHa4nRC2b6OYz%2FyszO13ayAVs5%2FgdE41KdnaVHSY2tJSHFvC2ku1PbMkDf%2FBf7zX6GPlPL&X-Amz-Signature=f86c32c722462d7d9dfa4c29bc5862e742d9df05ed29b27387d0e07f0bbb9567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CO2AXF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIjdX8ck7VMbASUwAwhsh8Mgf4cyhHNNF8XS%2FG5YZzsAIgOygn59CweVKMWgPiWWsgBnIASDxvoJc%2BJjC3vZR55hwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNEKxgNNh%2F01PLzPCrcAw%2BiqScrvHHwfOeEiKGvfPUBuWbYglYhtFPJ9%2FFoymIBb9VgktmyYdxdfeXfy3tJEX200Rf7r3DD%2FRPhU%2FMt778420gfOrdTACfvHwrUdzfiUuwhHt9tkSAhAaSxLiDtBmpOKEn8Qdy8vWe9YsLUS12Gu82CT8ZZ5m3uw3QZyOTZterS3NJoUA0nn3hWp1DOIFUl3rOYzKxmTeyS0lCDbhon%2BbxmLO0VcbFATaEcMFHFPnZywmoyu0BtUT4MUSqlpLNFKqJZvmg5YZyvx2bK9V3tAAv9E3FI9oqqBsGRcX7DguN0lfDzyfL2OZ5ogQ%2B8n2uDuPdXcc4sBNvj56NeU08YC4SVfMqOxe6754HXhy9QpqwuW7NpZrLJoV3sqxenfpAjdORy4ZaeqSM2os8OT26ntfwGFwq8mzKnqL4n3VTkHWTIqubOB3VmnuVEXXXDMi1UdBFH%2BE55CSIj%2BuWlaoIlD9A185DH7iM8fVOo7K4hMngcvz%2FVotObNxpfMZkKMyCZewpnaWAZ3W1hy4%2Fz56YvOTtKu9oiXbxS%2FxHqB6RjgTosoWxfp2WXLFqZyi%2BR2qzU2lR%2Bc6gsWxs6hafb4idl4LkKxClL0LmT8qXcFYzbGYDXAGK1R2f8PrKOML7Bp8QGOqUBuS6udMqG5L8%2F4Y%2FUdvOE7sZlMWzqbutRF3YrPCYLZRN0wuDA3rTlhEdY9DTNrol96yIcN%2FwZ%2FqkBxdoShckD8tGh%2B7uxFfeqpdi9OMEWVErPdcY%2FwhR7OTM3nLtv3IuxiX61m3EL3oA7LhSrYyA0s6LHa4nRC2b6OYz%2FyszO13ayAVs5%2FgdE41KdnaVHSY2tJSHFvC2ku1PbMkDf%2FBf7zX6GPlPL&X-Amz-Signature=458b788ec0c60dbfb6a67d538e470355918c20b813f528a17e36dcfd5e5f6b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CO2AXF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIjdX8ck7VMbASUwAwhsh8Mgf4cyhHNNF8XS%2FG5YZzsAIgOygn59CweVKMWgPiWWsgBnIASDxvoJc%2BJjC3vZR55hwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNEKxgNNh%2F01PLzPCrcAw%2BiqScrvHHwfOeEiKGvfPUBuWbYglYhtFPJ9%2FFoymIBb9VgktmyYdxdfeXfy3tJEX200Rf7r3DD%2FRPhU%2FMt778420gfOrdTACfvHwrUdzfiUuwhHt9tkSAhAaSxLiDtBmpOKEn8Qdy8vWe9YsLUS12Gu82CT8ZZ5m3uw3QZyOTZterS3NJoUA0nn3hWp1DOIFUl3rOYzKxmTeyS0lCDbhon%2BbxmLO0VcbFATaEcMFHFPnZywmoyu0BtUT4MUSqlpLNFKqJZvmg5YZyvx2bK9V3tAAv9E3FI9oqqBsGRcX7DguN0lfDzyfL2OZ5ogQ%2B8n2uDuPdXcc4sBNvj56NeU08YC4SVfMqOxe6754HXhy9QpqwuW7NpZrLJoV3sqxenfpAjdORy4ZaeqSM2os8OT26ntfwGFwq8mzKnqL4n3VTkHWTIqubOB3VmnuVEXXXDMi1UdBFH%2BE55CSIj%2BuWlaoIlD9A185DH7iM8fVOo7K4hMngcvz%2FVotObNxpfMZkKMyCZewpnaWAZ3W1hy4%2Fz56YvOTtKu9oiXbxS%2FxHqB6RjgTosoWxfp2WXLFqZyi%2BR2qzU2lR%2Bc6gsWxs6hafb4idl4LkKxClL0LmT8qXcFYzbGYDXAGK1R2f8PrKOML7Bp8QGOqUBuS6udMqG5L8%2F4Y%2FUdvOE7sZlMWzqbutRF3YrPCYLZRN0wuDA3rTlhEdY9DTNrol96yIcN%2FwZ%2FqkBxdoShckD8tGh%2B7uxFfeqpdi9OMEWVErPdcY%2FwhR7OTM3nLtv3IuxiX61m3EL3oA7LhSrYyA0s6LHa4nRC2b6OYz%2FyszO13ayAVs5%2FgdE41KdnaVHSY2tJSHFvC2ku1PbMkDf%2FBf7zX6GPlPL&X-Amz-Signature=44dafca851f6abfe865fffc8090acc2765728f4ca1659bca6049ff12caebd301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CO2AXF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIjdX8ck7VMbASUwAwhsh8Mgf4cyhHNNF8XS%2FG5YZzsAIgOygn59CweVKMWgPiWWsgBnIASDxvoJc%2BJjC3vZR55hwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNEKxgNNh%2F01PLzPCrcAw%2BiqScrvHHwfOeEiKGvfPUBuWbYglYhtFPJ9%2FFoymIBb9VgktmyYdxdfeXfy3tJEX200Rf7r3DD%2FRPhU%2FMt778420gfOrdTACfvHwrUdzfiUuwhHt9tkSAhAaSxLiDtBmpOKEn8Qdy8vWe9YsLUS12Gu82CT8ZZ5m3uw3QZyOTZterS3NJoUA0nn3hWp1DOIFUl3rOYzKxmTeyS0lCDbhon%2BbxmLO0VcbFATaEcMFHFPnZywmoyu0BtUT4MUSqlpLNFKqJZvmg5YZyvx2bK9V3tAAv9E3FI9oqqBsGRcX7DguN0lfDzyfL2OZ5ogQ%2B8n2uDuPdXcc4sBNvj56NeU08YC4SVfMqOxe6754HXhy9QpqwuW7NpZrLJoV3sqxenfpAjdORy4ZaeqSM2os8OT26ntfwGFwq8mzKnqL4n3VTkHWTIqubOB3VmnuVEXXXDMi1UdBFH%2BE55CSIj%2BuWlaoIlD9A185DH7iM8fVOo7K4hMngcvz%2FVotObNxpfMZkKMyCZewpnaWAZ3W1hy4%2Fz56YvOTtKu9oiXbxS%2FxHqB6RjgTosoWxfp2WXLFqZyi%2BR2qzU2lR%2Bc6gsWxs6hafb4idl4LkKxClL0LmT8qXcFYzbGYDXAGK1R2f8PrKOML7Bp8QGOqUBuS6udMqG5L8%2F4Y%2FUdvOE7sZlMWzqbutRF3YrPCYLZRN0wuDA3rTlhEdY9DTNrol96yIcN%2FwZ%2FqkBxdoShckD8tGh%2B7uxFfeqpdi9OMEWVErPdcY%2FwhR7OTM3nLtv3IuxiX61m3EL3oA7LhSrYyA0s6LHa4nRC2b6OYz%2FyszO13ayAVs5%2FgdE41KdnaVHSY2tJSHFvC2ku1PbMkDf%2FBf7zX6GPlPL&X-Amz-Signature=e3ea05289dbb65a4a316924135ec1379e3dcd492a7351ec61391e9c6620e55a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CO2AXF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIjdX8ck7VMbASUwAwhsh8Mgf4cyhHNNF8XS%2FG5YZzsAIgOygn59CweVKMWgPiWWsgBnIASDxvoJc%2BJjC3vZR55hwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNEKxgNNh%2F01PLzPCrcAw%2BiqScrvHHwfOeEiKGvfPUBuWbYglYhtFPJ9%2FFoymIBb9VgktmyYdxdfeXfy3tJEX200Rf7r3DD%2FRPhU%2FMt778420gfOrdTACfvHwrUdzfiUuwhHt9tkSAhAaSxLiDtBmpOKEn8Qdy8vWe9YsLUS12Gu82CT8ZZ5m3uw3QZyOTZterS3NJoUA0nn3hWp1DOIFUl3rOYzKxmTeyS0lCDbhon%2BbxmLO0VcbFATaEcMFHFPnZywmoyu0BtUT4MUSqlpLNFKqJZvmg5YZyvx2bK9V3tAAv9E3FI9oqqBsGRcX7DguN0lfDzyfL2OZ5ogQ%2B8n2uDuPdXcc4sBNvj56NeU08YC4SVfMqOxe6754HXhy9QpqwuW7NpZrLJoV3sqxenfpAjdORy4ZaeqSM2os8OT26ntfwGFwq8mzKnqL4n3VTkHWTIqubOB3VmnuVEXXXDMi1UdBFH%2BE55CSIj%2BuWlaoIlD9A185DH7iM8fVOo7K4hMngcvz%2FVotObNxpfMZkKMyCZewpnaWAZ3W1hy4%2Fz56YvOTtKu9oiXbxS%2FxHqB6RjgTosoWxfp2WXLFqZyi%2BR2qzU2lR%2Bc6gsWxs6hafb4idl4LkKxClL0LmT8qXcFYzbGYDXAGK1R2f8PrKOML7Bp8QGOqUBuS6udMqG5L8%2F4Y%2FUdvOE7sZlMWzqbutRF3YrPCYLZRN0wuDA3rTlhEdY9DTNrol96yIcN%2FwZ%2FqkBxdoShckD8tGh%2B7uxFfeqpdi9OMEWVErPdcY%2FwhR7OTM3nLtv3IuxiX61m3EL3oA7LhSrYyA0s6LHa4nRC2b6OYz%2FyszO13ayAVs5%2FgdE41KdnaVHSY2tJSHFvC2ku1PbMkDf%2FBf7zX6GPlPL&X-Amz-Signature=1c53621f7a86030ee953d1d66cc08ce86ba53d80673babbfcca8d4559ddeb641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CO2AXF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIjdX8ck7VMbASUwAwhsh8Mgf4cyhHNNF8XS%2FG5YZzsAIgOygn59CweVKMWgPiWWsgBnIASDxvoJc%2BJjC3vZR55hwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNEKxgNNh%2F01PLzPCrcAw%2BiqScrvHHwfOeEiKGvfPUBuWbYglYhtFPJ9%2FFoymIBb9VgktmyYdxdfeXfy3tJEX200Rf7r3DD%2FRPhU%2FMt778420gfOrdTACfvHwrUdzfiUuwhHt9tkSAhAaSxLiDtBmpOKEn8Qdy8vWe9YsLUS12Gu82CT8ZZ5m3uw3QZyOTZterS3NJoUA0nn3hWp1DOIFUl3rOYzKxmTeyS0lCDbhon%2BbxmLO0VcbFATaEcMFHFPnZywmoyu0BtUT4MUSqlpLNFKqJZvmg5YZyvx2bK9V3tAAv9E3FI9oqqBsGRcX7DguN0lfDzyfL2OZ5ogQ%2B8n2uDuPdXcc4sBNvj56NeU08YC4SVfMqOxe6754HXhy9QpqwuW7NpZrLJoV3sqxenfpAjdORy4ZaeqSM2os8OT26ntfwGFwq8mzKnqL4n3VTkHWTIqubOB3VmnuVEXXXDMi1UdBFH%2BE55CSIj%2BuWlaoIlD9A185DH7iM8fVOo7K4hMngcvz%2FVotObNxpfMZkKMyCZewpnaWAZ3W1hy4%2Fz56YvOTtKu9oiXbxS%2FxHqB6RjgTosoWxfp2WXLFqZyi%2BR2qzU2lR%2Bc6gsWxs6hafb4idl4LkKxClL0LmT8qXcFYzbGYDXAGK1R2f8PrKOML7Bp8QGOqUBuS6udMqG5L8%2F4Y%2FUdvOE7sZlMWzqbutRF3YrPCYLZRN0wuDA3rTlhEdY9DTNrol96yIcN%2FwZ%2FqkBxdoShckD8tGh%2B7uxFfeqpdi9OMEWVErPdcY%2FwhR7OTM3nLtv3IuxiX61m3EL3oA7LhSrYyA0s6LHa4nRC2b6OYz%2FyszO13ayAVs5%2FgdE41KdnaVHSY2tJSHFvC2ku1PbMkDf%2FBf7zX6GPlPL&X-Amz-Signature=8eafd72c00bf872e22efa710719f10ea3d38021e775c00b7baa03960770a81ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CO2AXF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIjdX8ck7VMbASUwAwhsh8Mgf4cyhHNNF8XS%2FG5YZzsAIgOygn59CweVKMWgPiWWsgBnIASDxvoJc%2BJjC3vZR55hwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNEKxgNNh%2F01PLzPCrcAw%2BiqScrvHHwfOeEiKGvfPUBuWbYglYhtFPJ9%2FFoymIBb9VgktmyYdxdfeXfy3tJEX200Rf7r3DD%2FRPhU%2FMt778420gfOrdTACfvHwrUdzfiUuwhHt9tkSAhAaSxLiDtBmpOKEn8Qdy8vWe9YsLUS12Gu82CT8ZZ5m3uw3QZyOTZterS3NJoUA0nn3hWp1DOIFUl3rOYzKxmTeyS0lCDbhon%2BbxmLO0VcbFATaEcMFHFPnZywmoyu0BtUT4MUSqlpLNFKqJZvmg5YZyvx2bK9V3tAAv9E3FI9oqqBsGRcX7DguN0lfDzyfL2OZ5ogQ%2B8n2uDuPdXcc4sBNvj56NeU08YC4SVfMqOxe6754HXhy9QpqwuW7NpZrLJoV3sqxenfpAjdORy4ZaeqSM2os8OT26ntfwGFwq8mzKnqL4n3VTkHWTIqubOB3VmnuVEXXXDMi1UdBFH%2BE55CSIj%2BuWlaoIlD9A185DH7iM8fVOo7K4hMngcvz%2FVotObNxpfMZkKMyCZewpnaWAZ3W1hy4%2Fz56YvOTtKu9oiXbxS%2FxHqB6RjgTosoWxfp2WXLFqZyi%2BR2qzU2lR%2Bc6gsWxs6hafb4idl4LkKxClL0LmT8qXcFYzbGYDXAGK1R2f8PrKOML7Bp8QGOqUBuS6udMqG5L8%2F4Y%2FUdvOE7sZlMWzqbutRF3YrPCYLZRN0wuDA3rTlhEdY9DTNrol96yIcN%2FwZ%2FqkBxdoShckD8tGh%2B7uxFfeqpdi9OMEWVErPdcY%2FwhR7OTM3nLtv3IuxiX61m3EL3oA7LhSrYyA0s6LHa4nRC2b6OYz%2FyszO13ayAVs5%2FgdE41KdnaVHSY2tJSHFvC2ku1PbMkDf%2FBf7zX6GPlPL&X-Amz-Signature=3359deb1d1e430c9db0ceea9c3c8f127ddcba1eaca36de0e1d4cf8514cdc22c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
