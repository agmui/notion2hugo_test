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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFRQSIZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjZJXPJMQbED0uT00Em8boC4HaZXoz2vModdaG9ZuC7QIhAKp9fvapxd9kVN5e21OV6NE%2Fc5%2BjTPe7BphBCcLjUvhvKv8DCCAQABoMNjM3NDIzMTgzODA1IgwHAf8VE6QAqI7aDeYq3AM2vZmdjWOsu0eIl%2F3YDbTvatU%2FWXYGE8nFUi2%2BcrmSLcOLHfgIKAZYNEhzrNBTH6b7zYauW%2FL8N9is78Q%2BBq%2FlTlqsh1%2Bpw3rgUBZs7NP5ddaWr54IdeFqpso63ijfgo9cYRpKCxn0u83LnFL9Z5m%2B6JH9gCZQU7DzCrHqHQwSZDz3qLshrcCb6JtyLiacr9taMNXfwKpZhgeCUcGtcyGeyN1n8UcgE2c2RD46fbTvsJ1bjpHCyhJAFT5x5pEwUU4NxJ%2BDT%2FXtyzZCSP2UIxQcEYYZw7s6uO38fyMMHeeC3Bn26RrCGKX53vT1oZlDwwKH9vqA7jk9EE7TPLfH7oCif%2FVyQnU6gYTAPAtVQbYWheURZMwwsxHLdu8y8lXwAD9oHJU8thjI7HB659sS8zwqlnOf3v6waMykTKv71UACBzbCQ%2F3FVyGcHpSHe%2BKl85xvI7hjOvDgQPuyzSarGI6n2mLjDXFTKU%2FIDBcjFq%2Fyb%2BpuWaVX6pK8Ww4Tpn8TpcE5v8aOEByU76qlmO6fznkPSYD1nnBkC2AJxFCLEZQPvrv%2FNbV14%2BiYW%2FrIUHiwGxwo%2FycI%2F4pToo8r%2FK8FlMZzj%2B37tdBo9qjHtveFR7TawvUk7c%2FRhRsRCg7cmTDIm%2Fa%2FBjqkASYRGIJdFTqHXLugclQ04pm%2ByG73Z5Np6OrGs5rkxozqZeagsw%2BomXtlvEzL5atNSXai2omRB4qY%2BA5gLvkjgwNgkHiMkzbrDdfmHIPjUJXPtDasjtqohgQfeiaaWkBC1wd56dBsbGS9nvpHkQxRw8AsdvDcTOnh%2FnO7npxv2h2WHs7DhTxSMoSsttQj%2Fm8Jy3S671ieC4DIJaamkseTPu4%2B7Oqu&X-Amz-Signature=300937bafefe0b1d3d34c7b8caf36626d20e234bda0f4d3c3ac627159024ff0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFRQSIZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjZJXPJMQbED0uT00Em8boC4HaZXoz2vModdaG9ZuC7QIhAKp9fvapxd9kVN5e21OV6NE%2Fc5%2BjTPe7BphBCcLjUvhvKv8DCCAQABoMNjM3NDIzMTgzODA1IgwHAf8VE6QAqI7aDeYq3AM2vZmdjWOsu0eIl%2F3YDbTvatU%2FWXYGE8nFUi2%2BcrmSLcOLHfgIKAZYNEhzrNBTH6b7zYauW%2FL8N9is78Q%2BBq%2FlTlqsh1%2Bpw3rgUBZs7NP5ddaWr54IdeFqpso63ijfgo9cYRpKCxn0u83LnFL9Z5m%2B6JH9gCZQU7DzCrHqHQwSZDz3qLshrcCb6JtyLiacr9taMNXfwKpZhgeCUcGtcyGeyN1n8UcgE2c2RD46fbTvsJ1bjpHCyhJAFT5x5pEwUU4NxJ%2BDT%2FXtyzZCSP2UIxQcEYYZw7s6uO38fyMMHeeC3Bn26RrCGKX53vT1oZlDwwKH9vqA7jk9EE7TPLfH7oCif%2FVyQnU6gYTAPAtVQbYWheURZMwwsxHLdu8y8lXwAD9oHJU8thjI7HB659sS8zwqlnOf3v6waMykTKv71UACBzbCQ%2F3FVyGcHpSHe%2BKl85xvI7hjOvDgQPuyzSarGI6n2mLjDXFTKU%2FIDBcjFq%2Fyb%2BpuWaVX6pK8Ww4Tpn8TpcE5v8aOEByU76qlmO6fznkPSYD1nnBkC2AJxFCLEZQPvrv%2FNbV14%2BiYW%2FrIUHiwGxwo%2FycI%2F4pToo8r%2FK8FlMZzj%2B37tdBo9qjHtveFR7TawvUk7c%2FRhRsRCg7cmTDIm%2Fa%2FBjqkASYRGIJdFTqHXLugclQ04pm%2ByG73Z5Np6OrGs5rkxozqZeagsw%2BomXtlvEzL5atNSXai2omRB4qY%2BA5gLvkjgwNgkHiMkzbrDdfmHIPjUJXPtDasjtqohgQfeiaaWkBC1wd56dBsbGS9nvpHkQxRw8AsdvDcTOnh%2FnO7npxv2h2WHs7DhTxSMoSsttQj%2Fm8Jy3S671ieC4DIJaamkseTPu4%2B7Oqu&X-Amz-Signature=697d648782b321758929774ed899f77a2d42b11086a005ab768b7872dbebaabf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFRQSIZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjZJXPJMQbED0uT00Em8boC4HaZXoz2vModdaG9ZuC7QIhAKp9fvapxd9kVN5e21OV6NE%2Fc5%2BjTPe7BphBCcLjUvhvKv8DCCAQABoMNjM3NDIzMTgzODA1IgwHAf8VE6QAqI7aDeYq3AM2vZmdjWOsu0eIl%2F3YDbTvatU%2FWXYGE8nFUi2%2BcrmSLcOLHfgIKAZYNEhzrNBTH6b7zYauW%2FL8N9is78Q%2BBq%2FlTlqsh1%2Bpw3rgUBZs7NP5ddaWr54IdeFqpso63ijfgo9cYRpKCxn0u83LnFL9Z5m%2B6JH9gCZQU7DzCrHqHQwSZDz3qLshrcCb6JtyLiacr9taMNXfwKpZhgeCUcGtcyGeyN1n8UcgE2c2RD46fbTvsJ1bjpHCyhJAFT5x5pEwUU4NxJ%2BDT%2FXtyzZCSP2UIxQcEYYZw7s6uO38fyMMHeeC3Bn26RrCGKX53vT1oZlDwwKH9vqA7jk9EE7TPLfH7oCif%2FVyQnU6gYTAPAtVQbYWheURZMwwsxHLdu8y8lXwAD9oHJU8thjI7HB659sS8zwqlnOf3v6waMykTKv71UACBzbCQ%2F3FVyGcHpSHe%2BKl85xvI7hjOvDgQPuyzSarGI6n2mLjDXFTKU%2FIDBcjFq%2Fyb%2BpuWaVX6pK8Ww4Tpn8TpcE5v8aOEByU76qlmO6fznkPSYD1nnBkC2AJxFCLEZQPvrv%2FNbV14%2BiYW%2FrIUHiwGxwo%2FycI%2F4pToo8r%2FK8FlMZzj%2B37tdBo9qjHtveFR7TawvUk7c%2FRhRsRCg7cmTDIm%2Fa%2FBjqkASYRGIJdFTqHXLugclQ04pm%2ByG73Z5Np6OrGs5rkxozqZeagsw%2BomXtlvEzL5atNSXai2omRB4qY%2BA5gLvkjgwNgkHiMkzbrDdfmHIPjUJXPtDasjtqohgQfeiaaWkBC1wd56dBsbGS9nvpHkQxRw8AsdvDcTOnh%2FnO7npxv2h2WHs7DhTxSMoSsttQj%2Fm8Jy3S671ieC4DIJaamkseTPu4%2B7Oqu&X-Amz-Signature=df1819b7cd11bea64d859c1d73bec9a81e9517ecb2af91ff4c63b896d97d5665&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFRQSIZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjZJXPJMQbED0uT00Em8boC4HaZXoz2vModdaG9ZuC7QIhAKp9fvapxd9kVN5e21OV6NE%2Fc5%2BjTPe7BphBCcLjUvhvKv8DCCAQABoMNjM3NDIzMTgzODA1IgwHAf8VE6QAqI7aDeYq3AM2vZmdjWOsu0eIl%2F3YDbTvatU%2FWXYGE8nFUi2%2BcrmSLcOLHfgIKAZYNEhzrNBTH6b7zYauW%2FL8N9is78Q%2BBq%2FlTlqsh1%2Bpw3rgUBZs7NP5ddaWr54IdeFqpso63ijfgo9cYRpKCxn0u83LnFL9Z5m%2B6JH9gCZQU7DzCrHqHQwSZDz3qLshrcCb6JtyLiacr9taMNXfwKpZhgeCUcGtcyGeyN1n8UcgE2c2RD46fbTvsJ1bjpHCyhJAFT5x5pEwUU4NxJ%2BDT%2FXtyzZCSP2UIxQcEYYZw7s6uO38fyMMHeeC3Bn26RrCGKX53vT1oZlDwwKH9vqA7jk9EE7TPLfH7oCif%2FVyQnU6gYTAPAtVQbYWheURZMwwsxHLdu8y8lXwAD9oHJU8thjI7HB659sS8zwqlnOf3v6waMykTKv71UACBzbCQ%2F3FVyGcHpSHe%2BKl85xvI7hjOvDgQPuyzSarGI6n2mLjDXFTKU%2FIDBcjFq%2Fyb%2BpuWaVX6pK8Ww4Tpn8TpcE5v8aOEByU76qlmO6fznkPSYD1nnBkC2AJxFCLEZQPvrv%2FNbV14%2BiYW%2FrIUHiwGxwo%2FycI%2F4pToo8r%2FK8FlMZzj%2B37tdBo9qjHtveFR7TawvUk7c%2FRhRsRCg7cmTDIm%2Fa%2FBjqkASYRGIJdFTqHXLugclQ04pm%2ByG73Z5Np6OrGs5rkxozqZeagsw%2BomXtlvEzL5atNSXai2omRB4qY%2BA5gLvkjgwNgkHiMkzbrDdfmHIPjUJXPtDasjtqohgQfeiaaWkBC1wd56dBsbGS9nvpHkQxRw8AsdvDcTOnh%2FnO7npxv2h2WHs7DhTxSMoSsttQj%2Fm8Jy3S671ieC4DIJaamkseTPu4%2B7Oqu&X-Amz-Signature=4d7dfd18946497daa845bb581935948a09bd7059c313a5f09620e073d7ffa293&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFRQSIZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjZJXPJMQbED0uT00Em8boC4HaZXoz2vModdaG9ZuC7QIhAKp9fvapxd9kVN5e21OV6NE%2Fc5%2BjTPe7BphBCcLjUvhvKv8DCCAQABoMNjM3NDIzMTgzODA1IgwHAf8VE6QAqI7aDeYq3AM2vZmdjWOsu0eIl%2F3YDbTvatU%2FWXYGE8nFUi2%2BcrmSLcOLHfgIKAZYNEhzrNBTH6b7zYauW%2FL8N9is78Q%2BBq%2FlTlqsh1%2Bpw3rgUBZs7NP5ddaWr54IdeFqpso63ijfgo9cYRpKCxn0u83LnFL9Z5m%2B6JH9gCZQU7DzCrHqHQwSZDz3qLshrcCb6JtyLiacr9taMNXfwKpZhgeCUcGtcyGeyN1n8UcgE2c2RD46fbTvsJ1bjpHCyhJAFT5x5pEwUU4NxJ%2BDT%2FXtyzZCSP2UIxQcEYYZw7s6uO38fyMMHeeC3Bn26RrCGKX53vT1oZlDwwKH9vqA7jk9EE7TPLfH7oCif%2FVyQnU6gYTAPAtVQbYWheURZMwwsxHLdu8y8lXwAD9oHJU8thjI7HB659sS8zwqlnOf3v6waMykTKv71UACBzbCQ%2F3FVyGcHpSHe%2BKl85xvI7hjOvDgQPuyzSarGI6n2mLjDXFTKU%2FIDBcjFq%2Fyb%2BpuWaVX6pK8Ww4Tpn8TpcE5v8aOEByU76qlmO6fznkPSYD1nnBkC2AJxFCLEZQPvrv%2FNbV14%2BiYW%2FrIUHiwGxwo%2FycI%2F4pToo8r%2FK8FlMZzj%2B37tdBo9qjHtveFR7TawvUk7c%2FRhRsRCg7cmTDIm%2Fa%2FBjqkASYRGIJdFTqHXLugclQ04pm%2ByG73Z5Np6OrGs5rkxozqZeagsw%2BomXtlvEzL5atNSXai2omRB4qY%2BA5gLvkjgwNgkHiMkzbrDdfmHIPjUJXPtDasjtqohgQfeiaaWkBC1wd56dBsbGS9nvpHkQxRw8AsdvDcTOnh%2FnO7npxv2h2WHs7DhTxSMoSsttQj%2Fm8Jy3S671ieC4DIJaamkseTPu4%2B7Oqu&X-Amz-Signature=2a383cd34d42c80dcb95300d8de18bbb4ef502bb14b0b93c987cd779ffd86a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFRQSIZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjZJXPJMQbED0uT00Em8boC4HaZXoz2vModdaG9ZuC7QIhAKp9fvapxd9kVN5e21OV6NE%2Fc5%2BjTPe7BphBCcLjUvhvKv8DCCAQABoMNjM3NDIzMTgzODA1IgwHAf8VE6QAqI7aDeYq3AM2vZmdjWOsu0eIl%2F3YDbTvatU%2FWXYGE8nFUi2%2BcrmSLcOLHfgIKAZYNEhzrNBTH6b7zYauW%2FL8N9is78Q%2BBq%2FlTlqsh1%2Bpw3rgUBZs7NP5ddaWr54IdeFqpso63ijfgo9cYRpKCxn0u83LnFL9Z5m%2B6JH9gCZQU7DzCrHqHQwSZDz3qLshrcCb6JtyLiacr9taMNXfwKpZhgeCUcGtcyGeyN1n8UcgE2c2RD46fbTvsJ1bjpHCyhJAFT5x5pEwUU4NxJ%2BDT%2FXtyzZCSP2UIxQcEYYZw7s6uO38fyMMHeeC3Bn26RrCGKX53vT1oZlDwwKH9vqA7jk9EE7TPLfH7oCif%2FVyQnU6gYTAPAtVQbYWheURZMwwsxHLdu8y8lXwAD9oHJU8thjI7HB659sS8zwqlnOf3v6waMykTKv71UACBzbCQ%2F3FVyGcHpSHe%2BKl85xvI7hjOvDgQPuyzSarGI6n2mLjDXFTKU%2FIDBcjFq%2Fyb%2BpuWaVX6pK8Ww4Tpn8TpcE5v8aOEByU76qlmO6fznkPSYD1nnBkC2AJxFCLEZQPvrv%2FNbV14%2BiYW%2FrIUHiwGxwo%2FycI%2F4pToo8r%2FK8FlMZzj%2B37tdBo9qjHtveFR7TawvUk7c%2FRhRsRCg7cmTDIm%2Fa%2FBjqkASYRGIJdFTqHXLugclQ04pm%2ByG73Z5Np6OrGs5rkxozqZeagsw%2BomXtlvEzL5atNSXai2omRB4qY%2BA5gLvkjgwNgkHiMkzbrDdfmHIPjUJXPtDasjtqohgQfeiaaWkBC1wd56dBsbGS9nvpHkQxRw8AsdvDcTOnh%2FnO7npxv2h2WHs7DhTxSMoSsttQj%2Fm8Jy3S671ieC4DIJaamkseTPu4%2B7Oqu&X-Amz-Signature=d15c217a6cf15bc3edf7f25a667047a1282ae06803d5b8b380a3d31780a1fb19&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFRQSIZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjZJXPJMQbED0uT00Em8boC4HaZXoz2vModdaG9ZuC7QIhAKp9fvapxd9kVN5e21OV6NE%2Fc5%2BjTPe7BphBCcLjUvhvKv8DCCAQABoMNjM3NDIzMTgzODA1IgwHAf8VE6QAqI7aDeYq3AM2vZmdjWOsu0eIl%2F3YDbTvatU%2FWXYGE8nFUi2%2BcrmSLcOLHfgIKAZYNEhzrNBTH6b7zYauW%2FL8N9is78Q%2BBq%2FlTlqsh1%2Bpw3rgUBZs7NP5ddaWr54IdeFqpso63ijfgo9cYRpKCxn0u83LnFL9Z5m%2B6JH9gCZQU7DzCrHqHQwSZDz3qLshrcCb6JtyLiacr9taMNXfwKpZhgeCUcGtcyGeyN1n8UcgE2c2RD46fbTvsJ1bjpHCyhJAFT5x5pEwUU4NxJ%2BDT%2FXtyzZCSP2UIxQcEYYZw7s6uO38fyMMHeeC3Bn26RrCGKX53vT1oZlDwwKH9vqA7jk9EE7TPLfH7oCif%2FVyQnU6gYTAPAtVQbYWheURZMwwsxHLdu8y8lXwAD9oHJU8thjI7HB659sS8zwqlnOf3v6waMykTKv71UACBzbCQ%2F3FVyGcHpSHe%2BKl85xvI7hjOvDgQPuyzSarGI6n2mLjDXFTKU%2FIDBcjFq%2Fyb%2BpuWaVX6pK8Ww4Tpn8TpcE5v8aOEByU76qlmO6fznkPSYD1nnBkC2AJxFCLEZQPvrv%2FNbV14%2BiYW%2FrIUHiwGxwo%2FycI%2F4pToo8r%2FK8FlMZzj%2B37tdBo9qjHtveFR7TawvUk7c%2FRhRsRCg7cmTDIm%2Fa%2FBjqkASYRGIJdFTqHXLugclQ04pm%2ByG73Z5Np6OrGs5rkxozqZeagsw%2BomXtlvEzL5atNSXai2omRB4qY%2BA5gLvkjgwNgkHiMkzbrDdfmHIPjUJXPtDasjtqohgQfeiaaWkBC1wd56dBsbGS9nvpHkQxRw8AsdvDcTOnh%2FnO7npxv2h2WHs7DhTxSMoSsttQj%2Fm8Jy3S671ieC4DIJaamkseTPu4%2B7Oqu&X-Amz-Signature=acf63f2438e0bf47101f3dba81e3bf2851b128212a8a1af4315227fffe15f24e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
