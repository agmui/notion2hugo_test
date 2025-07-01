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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57TYSYJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrkDdXBGJjsHkSHTizREeM6mq5vy6SohwjrqWEiknRbAiEAtdsOz%2Fx%2BFv%2FzlJqrRzmDU3LR7EXmIneEKZkZfLPl12wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmNA08nZJHTmf1YgircA91m1CDyKQ2W5XxUfRYimGSFuXFpMkZ3HBZvYoUsm5oNZkltOY%2B2zEp8tYKfWRCSUrFGmCyKTFfzloHOSP9kRXbwQo89SQmWjhmBDZzx2EQpJ17XQh5jkuKvAvTx4KxryVr29B210WpSpOUZWWE1oH5Hfk3wOqb23yOjprjT7V9LOmvx0ZTkqEG4Y1eBBMhwJHxhLL0477OAW9q0%2B9AO874BoBlJxAiyCS%2BFqu34E8kPL5KhxHUEUusTP5SJb8JKtlmZP8CZVYpnBdyV0wjpEE911nrPSR4foy35cvgYiO6hd296%2Bi7sbI0H%2BoVYk5zh8t85ZdCQFrlR8rCb6tVbwU26Mvkmhs0ZDIYDOEjoZbZVeoz7EfnGM37DwlP3whqrNlAHlLIYwxwz0Yal3j%2BZIEki8amxH7ncxCkVXKZE5r0MIdLhXUMuAQ6jz1er4%2BzKGX6gwFb19nSes%2Brgc5BAjji22bDGfoLzYySKowJkK5q9x5rzNu%2BZzL1i8jCucAAfYuRwFhI7X%2FwiXH6lJMId6ADR23aQbX9dcXbwVd%2BESYMRxAdomhNzpBqFNPmsrvDAJR2RLBwL7OKxxI8uoRXrRix5jcgh5iq6GtxZnYuCfhoFh5bH6St%2BvLHdRJaAMITEkMMGOqUBE868N4FEahoQpdcSLawFAtzaQOxnwUw45TzZgYq5muFCadWLSpo5V5Ns1CI%2FKKsGIlGmaOqi4mDD6ljxxXiNfJ8VqlqGiYpi1Z%2FHkizlMJkIAJmGfi3NGX4F5EAmpTi9kfOTlKXcuoeWQtvUxykyzqhroH4P6hRP3c3GKK%2BdAQlrwUys7L0xtXIRTRHXy9tuVDfagaJ%2FNmSLfgABjPRq3IYhSWII&X-Amz-Signature=9a3453a909c5108204520a72af841491660fd896c7c63a6e46be9549cda3a147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57TYSYJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrkDdXBGJjsHkSHTizREeM6mq5vy6SohwjrqWEiknRbAiEAtdsOz%2Fx%2BFv%2FzlJqrRzmDU3LR7EXmIneEKZkZfLPl12wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmNA08nZJHTmf1YgircA91m1CDyKQ2W5XxUfRYimGSFuXFpMkZ3HBZvYoUsm5oNZkltOY%2B2zEp8tYKfWRCSUrFGmCyKTFfzloHOSP9kRXbwQo89SQmWjhmBDZzx2EQpJ17XQh5jkuKvAvTx4KxryVr29B210WpSpOUZWWE1oH5Hfk3wOqb23yOjprjT7V9LOmvx0ZTkqEG4Y1eBBMhwJHxhLL0477OAW9q0%2B9AO874BoBlJxAiyCS%2BFqu34E8kPL5KhxHUEUusTP5SJb8JKtlmZP8CZVYpnBdyV0wjpEE911nrPSR4foy35cvgYiO6hd296%2Bi7sbI0H%2BoVYk5zh8t85ZdCQFrlR8rCb6tVbwU26Mvkmhs0ZDIYDOEjoZbZVeoz7EfnGM37DwlP3whqrNlAHlLIYwxwz0Yal3j%2BZIEki8amxH7ncxCkVXKZE5r0MIdLhXUMuAQ6jz1er4%2BzKGX6gwFb19nSes%2Brgc5BAjji22bDGfoLzYySKowJkK5q9x5rzNu%2BZzL1i8jCucAAfYuRwFhI7X%2FwiXH6lJMId6ADR23aQbX9dcXbwVd%2BESYMRxAdomhNzpBqFNPmsrvDAJR2RLBwL7OKxxI8uoRXrRix5jcgh5iq6GtxZnYuCfhoFh5bH6St%2BvLHdRJaAMITEkMMGOqUBE868N4FEahoQpdcSLawFAtzaQOxnwUw45TzZgYq5muFCadWLSpo5V5Ns1CI%2FKKsGIlGmaOqi4mDD6ljxxXiNfJ8VqlqGiYpi1Z%2FHkizlMJkIAJmGfi3NGX4F5EAmpTi9kfOTlKXcuoeWQtvUxykyzqhroH4P6hRP3c3GKK%2BdAQlrwUys7L0xtXIRTRHXy9tuVDfagaJ%2FNmSLfgABjPRq3IYhSWII&X-Amz-Signature=d73351718850e3539c6ca711d121735439c38be955a446157831c7e2db5f55b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57TYSYJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrkDdXBGJjsHkSHTizREeM6mq5vy6SohwjrqWEiknRbAiEAtdsOz%2Fx%2BFv%2FzlJqrRzmDU3LR7EXmIneEKZkZfLPl12wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmNA08nZJHTmf1YgircA91m1CDyKQ2W5XxUfRYimGSFuXFpMkZ3HBZvYoUsm5oNZkltOY%2B2zEp8tYKfWRCSUrFGmCyKTFfzloHOSP9kRXbwQo89SQmWjhmBDZzx2EQpJ17XQh5jkuKvAvTx4KxryVr29B210WpSpOUZWWE1oH5Hfk3wOqb23yOjprjT7V9LOmvx0ZTkqEG4Y1eBBMhwJHxhLL0477OAW9q0%2B9AO874BoBlJxAiyCS%2BFqu34E8kPL5KhxHUEUusTP5SJb8JKtlmZP8CZVYpnBdyV0wjpEE911nrPSR4foy35cvgYiO6hd296%2Bi7sbI0H%2BoVYk5zh8t85ZdCQFrlR8rCb6tVbwU26Mvkmhs0ZDIYDOEjoZbZVeoz7EfnGM37DwlP3whqrNlAHlLIYwxwz0Yal3j%2BZIEki8amxH7ncxCkVXKZE5r0MIdLhXUMuAQ6jz1er4%2BzKGX6gwFb19nSes%2Brgc5BAjji22bDGfoLzYySKowJkK5q9x5rzNu%2BZzL1i8jCucAAfYuRwFhI7X%2FwiXH6lJMId6ADR23aQbX9dcXbwVd%2BESYMRxAdomhNzpBqFNPmsrvDAJR2RLBwL7OKxxI8uoRXrRix5jcgh5iq6GtxZnYuCfhoFh5bH6St%2BvLHdRJaAMITEkMMGOqUBE868N4FEahoQpdcSLawFAtzaQOxnwUw45TzZgYq5muFCadWLSpo5V5Ns1CI%2FKKsGIlGmaOqi4mDD6ljxxXiNfJ8VqlqGiYpi1Z%2FHkizlMJkIAJmGfi3NGX4F5EAmpTi9kfOTlKXcuoeWQtvUxykyzqhroH4P6hRP3c3GKK%2BdAQlrwUys7L0xtXIRTRHXy9tuVDfagaJ%2FNmSLfgABjPRq3IYhSWII&X-Amz-Signature=f57beaa4213cbfe7051f2d7a74f2baabaa2474601f4300f86486966cdc898ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57TYSYJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrkDdXBGJjsHkSHTizREeM6mq5vy6SohwjrqWEiknRbAiEAtdsOz%2Fx%2BFv%2FzlJqrRzmDU3LR7EXmIneEKZkZfLPl12wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmNA08nZJHTmf1YgircA91m1CDyKQ2W5XxUfRYimGSFuXFpMkZ3HBZvYoUsm5oNZkltOY%2B2zEp8tYKfWRCSUrFGmCyKTFfzloHOSP9kRXbwQo89SQmWjhmBDZzx2EQpJ17XQh5jkuKvAvTx4KxryVr29B210WpSpOUZWWE1oH5Hfk3wOqb23yOjprjT7V9LOmvx0ZTkqEG4Y1eBBMhwJHxhLL0477OAW9q0%2B9AO874BoBlJxAiyCS%2BFqu34E8kPL5KhxHUEUusTP5SJb8JKtlmZP8CZVYpnBdyV0wjpEE911nrPSR4foy35cvgYiO6hd296%2Bi7sbI0H%2BoVYk5zh8t85ZdCQFrlR8rCb6tVbwU26Mvkmhs0ZDIYDOEjoZbZVeoz7EfnGM37DwlP3whqrNlAHlLIYwxwz0Yal3j%2BZIEki8amxH7ncxCkVXKZE5r0MIdLhXUMuAQ6jz1er4%2BzKGX6gwFb19nSes%2Brgc5BAjji22bDGfoLzYySKowJkK5q9x5rzNu%2BZzL1i8jCucAAfYuRwFhI7X%2FwiXH6lJMId6ADR23aQbX9dcXbwVd%2BESYMRxAdomhNzpBqFNPmsrvDAJR2RLBwL7OKxxI8uoRXrRix5jcgh5iq6GtxZnYuCfhoFh5bH6St%2BvLHdRJaAMITEkMMGOqUBE868N4FEahoQpdcSLawFAtzaQOxnwUw45TzZgYq5muFCadWLSpo5V5Ns1CI%2FKKsGIlGmaOqi4mDD6ljxxXiNfJ8VqlqGiYpi1Z%2FHkizlMJkIAJmGfi3NGX4F5EAmpTi9kfOTlKXcuoeWQtvUxykyzqhroH4P6hRP3c3GKK%2BdAQlrwUys7L0xtXIRTRHXy9tuVDfagaJ%2FNmSLfgABjPRq3IYhSWII&X-Amz-Signature=4aac5c9a98839334f154a25234cac16efdb5dda59003858c6cf8a9e6d045bfb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57TYSYJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrkDdXBGJjsHkSHTizREeM6mq5vy6SohwjrqWEiknRbAiEAtdsOz%2Fx%2BFv%2FzlJqrRzmDU3LR7EXmIneEKZkZfLPl12wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmNA08nZJHTmf1YgircA91m1CDyKQ2W5XxUfRYimGSFuXFpMkZ3HBZvYoUsm5oNZkltOY%2B2zEp8tYKfWRCSUrFGmCyKTFfzloHOSP9kRXbwQo89SQmWjhmBDZzx2EQpJ17XQh5jkuKvAvTx4KxryVr29B210WpSpOUZWWE1oH5Hfk3wOqb23yOjprjT7V9LOmvx0ZTkqEG4Y1eBBMhwJHxhLL0477OAW9q0%2B9AO874BoBlJxAiyCS%2BFqu34E8kPL5KhxHUEUusTP5SJb8JKtlmZP8CZVYpnBdyV0wjpEE911nrPSR4foy35cvgYiO6hd296%2Bi7sbI0H%2BoVYk5zh8t85ZdCQFrlR8rCb6tVbwU26Mvkmhs0ZDIYDOEjoZbZVeoz7EfnGM37DwlP3whqrNlAHlLIYwxwz0Yal3j%2BZIEki8amxH7ncxCkVXKZE5r0MIdLhXUMuAQ6jz1er4%2BzKGX6gwFb19nSes%2Brgc5BAjji22bDGfoLzYySKowJkK5q9x5rzNu%2BZzL1i8jCucAAfYuRwFhI7X%2FwiXH6lJMId6ADR23aQbX9dcXbwVd%2BESYMRxAdomhNzpBqFNPmsrvDAJR2RLBwL7OKxxI8uoRXrRix5jcgh5iq6GtxZnYuCfhoFh5bH6St%2BvLHdRJaAMITEkMMGOqUBE868N4FEahoQpdcSLawFAtzaQOxnwUw45TzZgYq5muFCadWLSpo5V5Ns1CI%2FKKsGIlGmaOqi4mDD6ljxxXiNfJ8VqlqGiYpi1Z%2FHkizlMJkIAJmGfi3NGX4F5EAmpTi9kfOTlKXcuoeWQtvUxykyzqhroH4P6hRP3c3GKK%2BdAQlrwUys7L0xtXIRTRHXy9tuVDfagaJ%2FNmSLfgABjPRq3IYhSWII&X-Amz-Signature=d9dfb8516ee7016d1113be5c7f9a8597340ab7d3a9301ece5304b13252b6b79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57TYSYJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrkDdXBGJjsHkSHTizREeM6mq5vy6SohwjrqWEiknRbAiEAtdsOz%2Fx%2BFv%2FzlJqrRzmDU3LR7EXmIneEKZkZfLPl12wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmNA08nZJHTmf1YgircA91m1CDyKQ2W5XxUfRYimGSFuXFpMkZ3HBZvYoUsm5oNZkltOY%2B2zEp8tYKfWRCSUrFGmCyKTFfzloHOSP9kRXbwQo89SQmWjhmBDZzx2EQpJ17XQh5jkuKvAvTx4KxryVr29B210WpSpOUZWWE1oH5Hfk3wOqb23yOjprjT7V9LOmvx0ZTkqEG4Y1eBBMhwJHxhLL0477OAW9q0%2B9AO874BoBlJxAiyCS%2BFqu34E8kPL5KhxHUEUusTP5SJb8JKtlmZP8CZVYpnBdyV0wjpEE911nrPSR4foy35cvgYiO6hd296%2Bi7sbI0H%2BoVYk5zh8t85ZdCQFrlR8rCb6tVbwU26Mvkmhs0ZDIYDOEjoZbZVeoz7EfnGM37DwlP3whqrNlAHlLIYwxwz0Yal3j%2BZIEki8amxH7ncxCkVXKZE5r0MIdLhXUMuAQ6jz1er4%2BzKGX6gwFb19nSes%2Brgc5BAjji22bDGfoLzYySKowJkK5q9x5rzNu%2BZzL1i8jCucAAfYuRwFhI7X%2FwiXH6lJMId6ADR23aQbX9dcXbwVd%2BESYMRxAdomhNzpBqFNPmsrvDAJR2RLBwL7OKxxI8uoRXrRix5jcgh5iq6GtxZnYuCfhoFh5bH6St%2BvLHdRJaAMITEkMMGOqUBE868N4FEahoQpdcSLawFAtzaQOxnwUw45TzZgYq5muFCadWLSpo5V5Ns1CI%2FKKsGIlGmaOqi4mDD6ljxxXiNfJ8VqlqGiYpi1Z%2FHkizlMJkIAJmGfi3NGX4F5EAmpTi9kfOTlKXcuoeWQtvUxykyzqhroH4P6hRP3c3GKK%2BdAQlrwUys7L0xtXIRTRHXy9tuVDfagaJ%2FNmSLfgABjPRq3IYhSWII&X-Amz-Signature=dcb9e75497464f4ea7c8d5093e3bbd00509c2ca5a97d958f3619d77bc622cae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57TYSYJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrkDdXBGJjsHkSHTizREeM6mq5vy6SohwjrqWEiknRbAiEAtdsOz%2Fx%2BFv%2FzlJqrRzmDU3LR7EXmIneEKZkZfLPl12wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmNA08nZJHTmf1YgircA91m1CDyKQ2W5XxUfRYimGSFuXFpMkZ3HBZvYoUsm5oNZkltOY%2B2zEp8tYKfWRCSUrFGmCyKTFfzloHOSP9kRXbwQo89SQmWjhmBDZzx2EQpJ17XQh5jkuKvAvTx4KxryVr29B210WpSpOUZWWE1oH5Hfk3wOqb23yOjprjT7V9LOmvx0ZTkqEG4Y1eBBMhwJHxhLL0477OAW9q0%2B9AO874BoBlJxAiyCS%2BFqu34E8kPL5KhxHUEUusTP5SJb8JKtlmZP8CZVYpnBdyV0wjpEE911nrPSR4foy35cvgYiO6hd296%2Bi7sbI0H%2BoVYk5zh8t85ZdCQFrlR8rCb6tVbwU26Mvkmhs0ZDIYDOEjoZbZVeoz7EfnGM37DwlP3whqrNlAHlLIYwxwz0Yal3j%2BZIEki8amxH7ncxCkVXKZE5r0MIdLhXUMuAQ6jz1er4%2BzKGX6gwFb19nSes%2Brgc5BAjji22bDGfoLzYySKowJkK5q9x5rzNu%2BZzL1i8jCucAAfYuRwFhI7X%2FwiXH6lJMId6ADR23aQbX9dcXbwVd%2BESYMRxAdomhNzpBqFNPmsrvDAJR2RLBwL7OKxxI8uoRXrRix5jcgh5iq6GtxZnYuCfhoFh5bH6St%2BvLHdRJaAMITEkMMGOqUBE868N4FEahoQpdcSLawFAtzaQOxnwUw45TzZgYq5muFCadWLSpo5V5Ns1CI%2FKKsGIlGmaOqi4mDD6ljxxXiNfJ8VqlqGiYpi1Z%2FHkizlMJkIAJmGfi3NGX4F5EAmpTi9kfOTlKXcuoeWQtvUxykyzqhroH4P6hRP3c3GKK%2BdAQlrwUys7L0xtXIRTRHXy9tuVDfagaJ%2FNmSLfgABjPRq3IYhSWII&X-Amz-Signature=00a63cfa08c0f60e5c2d736bd81bd0be71356c198109c840ab0e601391836b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
