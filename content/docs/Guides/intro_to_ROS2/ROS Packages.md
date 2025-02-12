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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPDUWN3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChxmGPEmcFrpM4hMZvAerRcjZzagjzXi%2BYQXq9ighCkwIgG1Cce1AKLZ0pRww3rAPZFi920D%2Bu2G0%2FBqZAgEm2o8gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCe7smHkMvoDOBl55ircA956IddTpATE8xscR7DBT%2FcmXlb8XQ5tA0rN6QR4TPCBuh1oxUqbkx3aGvumjsgNpAFYWNI7acl8SI6dINrp4nSW8uP4hlaa3BADC5TXeyj2M9RB3u%2BAdKRdfjOo7Cis%2FAbqiSPFx%2FG5R252%2BVovQ6kfl04A%2BIIZSoAVnMKvy5MTnyhUl2kuLwtv114rIBiy5YYwsf1odevRksYpuussSrMX33YFhtBudpS73p7I1eorUzRgqYSy%2FcaL4m9yIrvQ%2BX1zDEN2LY0LE6Ex%2Bdtqxu%2BDvEy7jbLtWcL%2FX52rCSRHoJYI8RiifdHrF%2B5Q3r8RVcTlj0TCNZADYjm%2FQKsL5k2%2F5M26E7q2iOEqy4IO8JsZUvSsnw5%2BNxVfgI%2B6PQb%2BI8DsPgzLuKVeqnXvbO3K1vgLr9rEEaN3qgA3GvKGN54huWXmAye%2FG2oOvEGkx9L8mk8QIZSyYzTa0leN%2Bl2sSF3FEAbELMhPxRmBE3G7VwEUwGmTsuB3aZD3skBTo0UAQPzr7Ph65qQtWG15%2F4Jblu5T%2FJbzOcgG7c8PA3Bu0QENIGqgKytfscXEDhyteCQ%2BBaUAgB4CVuDULz5tkyRt%2Bf6rR5KyVGTLVMUd6MI7h3G5t4Vlrnh5%2Fnd6OojTMMyxsr0GOqUB1wq5iQoW86wpQaIBnPSL9yqdc88rQmm26gee9UYnU6M%2B39WKUQqEZvfO%2BL7Xdfb%2BW9JmqP9aIPk0fW7KyihljlTZt6aFMeKiVwaFQ%2FrGb6Eb6x9h2ZGpsLwkiT2R7s4eHqBQzv2tk2U6xk29IZ4mqD8wu3rv3kjbr03L42PzXGgHybQaHoXDqDhQK3cLZoJhnOuXm3bMEBl4FnAFxOQ4zbPSaGir&X-Amz-Signature=de8ed49e6f48c3dc9965a028805095212273a679e0d6e82e95aba0a1dc22da2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPDUWN3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChxmGPEmcFrpM4hMZvAerRcjZzagjzXi%2BYQXq9ighCkwIgG1Cce1AKLZ0pRww3rAPZFi920D%2Bu2G0%2FBqZAgEm2o8gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCe7smHkMvoDOBl55ircA956IddTpATE8xscR7DBT%2FcmXlb8XQ5tA0rN6QR4TPCBuh1oxUqbkx3aGvumjsgNpAFYWNI7acl8SI6dINrp4nSW8uP4hlaa3BADC5TXeyj2M9RB3u%2BAdKRdfjOo7Cis%2FAbqiSPFx%2FG5R252%2BVovQ6kfl04A%2BIIZSoAVnMKvy5MTnyhUl2kuLwtv114rIBiy5YYwsf1odevRksYpuussSrMX33YFhtBudpS73p7I1eorUzRgqYSy%2FcaL4m9yIrvQ%2BX1zDEN2LY0LE6Ex%2Bdtqxu%2BDvEy7jbLtWcL%2FX52rCSRHoJYI8RiifdHrF%2B5Q3r8RVcTlj0TCNZADYjm%2FQKsL5k2%2F5M26E7q2iOEqy4IO8JsZUvSsnw5%2BNxVfgI%2B6PQb%2BI8DsPgzLuKVeqnXvbO3K1vgLr9rEEaN3qgA3GvKGN54huWXmAye%2FG2oOvEGkx9L8mk8QIZSyYzTa0leN%2Bl2sSF3FEAbELMhPxRmBE3G7VwEUwGmTsuB3aZD3skBTo0UAQPzr7Ph65qQtWG15%2F4Jblu5T%2FJbzOcgG7c8PA3Bu0QENIGqgKytfscXEDhyteCQ%2BBaUAgB4CVuDULz5tkyRt%2Bf6rR5KyVGTLVMUd6MI7h3G5t4Vlrnh5%2Fnd6OojTMMyxsr0GOqUB1wq5iQoW86wpQaIBnPSL9yqdc88rQmm26gee9UYnU6M%2B39WKUQqEZvfO%2BL7Xdfb%2BW9JmqP9aIPk0fW7KyihljlTZt6aFMeKiVwaFQ%2FrGb6Eb6x9h2ZGpsLwkiT2R7s4eHqBQzv2tk2U6xk29IZ4mqD8wu3rv3kjbr03L42PzXGgHybQaHoXDqDhQK3cLZoJhnOuXm3bMEBl4FnAFxOQ4zbPSaGir&X-Amz-Signature=49db25c19c8f8884649aeb13f8e31659fb5cb234f74bd1746e0cff30c5d9c19c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPDUWN3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChxmGPEmcFrpM4hMZvAerRcjZzagjzXi%2BYQXq9ighCkwIgG1Cce1AKLZ0pRww3rAPZFi920D%2Bu2G0%2FBqZAgEm2o8gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCe7smHkMvoDOBl55ircA956IddTpATE8xscR7DBT%2FcmXlb8XQ5tA0rN6QR4TPCBuh1oxUqbkx3aGvumjsgNpAFYWNI7acl8SI6dINrp4nSW8uP4hlaa3BADC5TXeyj2M9RB3u%2BAdKRdfjOo7Cis%2FAbqiSPFx%2FG5R252%2BVovQ6kfl04A%2BIIZSoAVnMKvy5MTnyhUl2kuLwtv114rIBiy5YYwsf1odevRksYpuussSrMX33YFhtBudpS73p7I1eorUzRgqYSy%2FcaL4m9yIrvQ%2BX1zDEN2LY0LE6Ex%2Bdtqxu%2BDvEy7jbLtWcL%2FX52rCSRHoJYI8RiifdHrF%2B5Q3r8RVcTlj0TCNZADYjm%2FQKsL5k2%2F5M26E7q2iOEqy4IO8JsZUvSsnw5%2BNxVfgI%2B6PQb%2BI8DsPgzLuKVeqnXvbO3K1vgLr9rEEaN3qgA3GvKGN54huWXmAye%2FG2oOvEGkx9L8mk8QIZSyYzTa0leN%2Bl2sSF3FEAbELMhPxRmBE3G7VwEUwGmTsuB3aZD3skBTo0UAQPzr7Ph65qQtWG15%2F4Jblu5T%2FJbzOcgG7c8PA3Bu0QENIGqgKytfscXEDhyteCQ%2BBaUAgB4CVuDULz5tkyRt%2Bf6rR5KyVGTLVMUd6MI7h3G5t4Vlrnh5%2Fnd6OojTMMyxsr0GOqUB1wq5iQoW86wpQaIBnPSL9yqdc88rQmm26gee9UYnU6M%2B39WKUQqEZvfO%2BL7Xdfb%2BW9JmqP9aIPk0fW7KyihljlTZt6aFMeKiVwaFQ%2FrGb6Eb6x9h2ZGpsLwkiT2R7s4eHqBQzv2tk2U6xk29IZ4mqD8wu3rv3kjbr03L42PzXGgHybQaHoXDqDhQK3cLZoJhnOuXm3bMEBl4FnAFxOQ4zbPSaGir&X-Amz-Signature=ed145709f96904eafc0ffd22f0cdc791f7296d28dae5e6ab1178c7e1c57b68ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPDUWN3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChxmGPEmcFrpM4hMZvAerRcjZzagjzXi%2BYQXq9ighCkwIgG1Cce1AKLZ0pRww3rAPZFi920D%2Bu2G0%2FBqZAgEm2o8gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCe7smHkMvoDOBl55ircA956IddTpATE8xscR7DBT%2FcmXlb8XQ5tA0rN6QR4TPCBuh1oxUqbkx3aGvumjsgNpAFYWNI7acl8SI6dINrp4nSW8uP4hlaa3BADC5TXeyj2M9RB3u%2BAdKRdfjOo7Cis%2FAbqiSPFx%2FG5R252%2BVovQ6kfl04A%2BIIZSoAVnMKvy5MTnyhUl2kuLwtv114rIBiy5YYwsf1odevRksYpuussSrMX33YFhtBudpS73p7I1eorUzRgqYSy%2FcaL4m9yIrvQ%2BX1zDEN2LY0LE6Ex%2Bdtqxu%2BDvEy7jbLtWcL%2FX52rCSRHoJYI8RiifdHrF%2B5Q3r8RVcTlj0TCNZADYjm%2FQKsL5k2%2F5M26E7q2iOEqy4IO8JsZUvSsnw5%2BNxVfgI%2B6PQb%2BI8DsPgzLuKVeqnXvbO3K1vgLr9rEEaN3qgA3GvKGN54huWXmAye%2FG2oOvEGkx9L8mk8QIZSyYzTa0leN%2Bl2sSF3FEAbELMhPxRmBE3G7VwEUwGmTsuB3aZD3skBTo0UAQPzr7Ph65qQtWG15%2F4Jblu5T%2FJbzOcgG7c8PA3Bu0QENIGqgKytfscXEDhyteCQ%2BBaUAgB4CVuDULz5tkyRt%2Bf6rR5KyVGTLVMUd6MI7h3G5t4Vlrnh5%2Fnd6OojTMMyxsr0GOqUB1wq5iQoW86wpQaIBnPSL9yqdc88rQmm26gee9UYnU6M%2B39WKUQqEZvfO%2BL7Xdfb%2BW9JmqP9aIPk0fW7KyihljlTZt6aFMeKiVwaFQ%2FrGb6Eb6x9h2ZGpsLwkiT2R7s4eHqBQzv2tk2U6xk29IZ4mqD8wu3rv3kjbr03L42PzXGgHybQaHoXDqDhQK3cLZoJhnOuXm3bMEBl4FnAFxOQ4zbPSaGir&X-Amz-Signature=aa2484fd5a8d356b0e68dc89182d90e5562bed0bb23ee2aecd4ddaca19a10b4a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPDUWN3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChxmGPEmcFrpM4hMZvAerRcjZzagjzXi%2BYQXq9ighCkwIgG1Cce1AKLZ0pRww3rAPZFi920D%2Bu2G0%2FBqZAgEm2o8gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCe7smHkMvoDOBl55ircA956IddTpATE8xscR7DBT%2FcmXlb8XQ5tA0rN6QR4TPCBuh1oxUqbkx3aGvumjsgNpAFYWNI7acl8SI6dINrp4nSW8uP4hlaa3BADC5TXeyj2M9RB3u%2BAdKRdfjOo7Cis%2FAbqiSPFx%2FG5R252%2BVovQ6kfl04A%2BIIZSoAVnMKvy5MTnyhUl2kuLwtv114rIBiy5YYwsf1odevRksYpuussSrMX33YFhtBudpS73p7I1eorUzRgqYSy%2FcaL4m9yIrvQ%2BX1zDEN2LY0LE6Ex%2Bdtqxu%2BDvEy7jbLtWcL%2FX52rCSRHoJYI8RiifdHrF%2B5Q3r8RVcTlj0TCNZADYjm%2FQKsL5k2%2F5M26E7q2iOEqy4IO8JsZUvSsnw5%2BNxVfgI%2B6PQb%2BI8DsPgzLuKVeqnXvbO3K1vgLr9rEEaN3qgA3GvKGN54huWXmAye%2FG2oOvEGkx9L8mk8QIZSyYzTa0leN%2Bl2sSF3FEAbELMhPxRmBE3G7VwEUwGmTsuB3aZD3skBTo0UAQPzr7Ph65qQtWG15%2F4Jblu5T%2FJbzOcgG7c8PA3Bu0QENIGqgKytfscXEDhyteCQ%2BBaUAgB4CVuDULz5tkyRt%2Bf6rR5KyVGTLVMUd6MI7h3G5t4Vlrnh5%2Fnd6OojTMMyxsr0GOqUB1wq5iQoW86wpQaIBnPSL9yqdc88rQmm26gee9UYnU6M%2B39WKUQqEZvfO%2BL7Xdfb%2BW9JmqP9aIPk0fW7KyihljlTZt6aFMeKiVwaFQ%2FrGb6Eb6x9h2ZGpsLwkiT2R7s4eHqBQzv2tk2U6xk29IZ4mqD8wu3rv3kjbr03L42PzXGgHybQaHoXDqDhQK3cLZoJhnOuXm3bMEBl4FnAFxOQ4zbPSaGir&X-Amz-Signature=112ee3d01d98ad77b7164b485df98a21599ae4e43e714c27d9fca5c29f950aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPDUWN3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChxmGPEmcFrpM4hMZvAerRcjZzagjzXi%2BYQXq9ighCkwIgG1Cce1AKLZ0pRww3rAPZFi920D%2Bu2G0%2FBqZAgEm2o8gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCe7smHkMvoDOBl55ircA956IddTpATE8xscR7DBT%2FcmXlb8XQ5tA0rN6QR4TPCBuh1oxUqbkx3aGvumjsgNpAFYWNI7acl8SI6dINrp4nSW8uP4hlaa3BADC5TXeyj2M9RB3u%2BAdKRdfjOo7Cis%2FAbqiSPFx%2FG5R252%2BVovQ6kfl04A%2BIIZSoAVnMKvy5MTnyhUl2kuLwtv114rIBiy5YYwsf1odevRksYpuussSrMX33YFhtBudpS73p7I1eorUzRgqYSy%2FcaL4m9yIrvQ%2BX1zDEN2LY0LE6Ex%2Bdtqxu%2BDvEy7jbLtWcL%2FX52rCSRHoJYI8RiifdHrF%2B5Q3r8RVcTlj0TCNZADYjm%2FQKsL5k2%2F5M26E7q2iOEqy4IO8JsZUvSsnw5%2BNxVfgI%2B6PQb%2BI8DsPgzLuKVeqnXvbO3K1vgLr9rEEaN3qgA3GvKGN54huWXmAye%2FG2oOvEGkx9L8mk8QIZSyYzTa0leN%2Bl2sSF3FEAbELMhPxRmBE3G7VwEUwGmTsuB3aZD3skBTo0UAQPzr7Ph65qQtWG15%2F4Jblu5T%2FJbzOcgG7c8PA3Bu0QENIGqgKytfscXEDhyteCQ%2BBaUAgB4CVuDULz5tkyRt%2Bf6rR5KyVGTLVMUd6MI7h3G5t4Vlrnh5%2Fnd6OojTMMyxsr0GOqUB1wq5iQoW86wpQaIBnPSL9yqdc88rQmm26gee9UYnU6M%2B39WKUQqEZvfO%2BL7Xdfb%2BW9JmqP9aIPk0fW7KyihljlTZt6aFMeKiVwaFQ%2FrGb6Eb6x9h2ZGpsLwkiT2R7s4eHqBQzv2tk2U6xk29IZ4mqD8wu3rv3kjbr03L42PzXGgHybQaHoXDqDhQK3cLZoJhnOuXm3bMEBl4FnAFxOQ4zbPSaGir&X-Amz-Signature=d06958d5e722bbec42c651b09c58bde15c2e5c689238612672962236d240dd6e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPDUWN3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChxmGPEmcFrpM4hMZvAerRcjZzagjzXi%2BYQXq9ighCkwIgG1Cce1AKLZ0pRww3rAPZFi920D%2Bu2G0%2FBqZAgEm2o8gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCe7smHkMvoDOBl55ircA956IddTpATE8xscR7DBT%2FcmXlb8XQ5tA0rN6QR4TPCBuh1oxUqbkx3aGvumjsgNpAFYWNI7acl8SI6dINrp4nSW8uP4hlaa3BADC5TXeyj2M9RB3u%2BAdKRdfjOo7Cis%2FAbqiSPFx%2FG5R252%2BVovQ6kfl04A%2BIIZSoAVnMKvy5MTnyhUl2kuLwtv114rIBiy5YYwsf1odevRksYpuussSrMX33YFhtBudpS73p7I1eorUzRgqYSy%2FcaL4m9yIrvQ%2BX1zDEN2LY0LE6Ex%2Bdtqxu%2BDvEy7jbLtWcL%2FX52rCSRHoJYI8RiifdHrF%2B5Q3r8RVcTlj0TCNZADYjm%2FQKsL5k2%2F5M26E7q2iOEqy4IO8JsZUvSsnw5%2BNxVfgI%2B6PQb%2BI8DsPgzLuKVeqnXvbO3K1vgLr9rEEaN3qgA3GvKGN54huWXmAye%2FG2oOvEGkx9L8mk8QIZSyYzTa0leN%2Bl2sSF3FEAbELMhPxRmBE3G7VwEUwGmTsuB3aZD3skBTo0UAQPzr7Ph65qQtWG15%2F4Jblu5T%2FJbzOcgG7c8PA3Bu0QENIGqgKytfscXEDhyteCQ%2BBaUAgB4CVuDULz5tkyRt%2Bf6rR5KyVGTLVMUd6MI7h3G5t4Vlrnh5%2Fnd6OojTMMyxsr0GOqUB1wq5iQoW86wpQaIBnPSL9yqdc88rQmm26gee9UYnU6M%2B39WKUQqEZvfO%2BL7Xdfb%2BW9JmqP9aIPk0fW7KyihljlTZt6aFMeKiVwaFQ%2FrGb6Eb6x9h2ZGpsLwkiT2R7s4eHqBQzv2tk2U6xk29IZ4mqD8wu3rv3kjbr03L42PzXGgHybQaHoXDqDhQK3cLZoJhnOuXm3bMEBl4FnAFxOQ4zbPSaGir&X-Amz-Signature=0919fbbfb1aa79c4d1ef445d58cb20e5fd1b1d80d2ad9f9a1cc478c246458722&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
