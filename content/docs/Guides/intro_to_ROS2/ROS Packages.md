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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLY4Z4T2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi6O7wwaEzy9UqDoaQFY7DDBR6nqv9zDT5XhKH%2FVrSCgIhANv%2BgNS7WuU7SgcNtmd62ZjQOayzu56BgbDp6%2FiNjBUuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq1iMtNx6ohIDJaXcq3APpCdEqB%2BrWFUZD5MRlvy7PCR06CfTrhMFaxcWTBuGJ2guCzb58F4Am%2BSL65zYvJjZFScjnqwvNdja%2F7EFAdIq2c4RgHhdF4%2BJp5lpp074gGqHtAnBylrMNwOGVD%2FBj8gBQjR2DAh6Mb5tch%2FjEigAA8eNZTQfOub9GAkb5L%2B6cUEp%2FYAfQehr%2BIKHi6x0dreO8xZ20%2Fl%2BKpAZnK3VeLOVRJz9OLRi85tjLSd3svP9cKWFeKFs23BIX1cX6fMEf9pNgqaaR1SliFQUZaWVWGaynxQBOaMYmkEsh1iZemgQWHVA2QZ30CzFOiYVF0yZTf9OYBWNyuXhcLLg9rwyLyZsse42SAAUjVDymi%2FrR6DI%2BVi5bWngf%2FWp3htAcyVZ9sEaA5sDnM3eZfmHC5d%2FYU%2FGyrn5NAFZrhx%2Bb7585pvc28VQvI%2F95Eg2f6K9PpiSWzuvXcannfjkmQji3YI%2FeooKESccgzIVjMMWfz72tHEvMoCayhbRSTkyNjhMuqz%2ByJo0baFJA3ryMy7Hoy3kIkMBlDHzc6lic5V1FImQDf19Tfmkv0GVBhUjI07bdYmo%2B0XrO2%2BR30cOIi%2FLqmufQ1YQQyXIYf1lhVzYGpt1R%2Fnrn30rGza%2BFZMJki5j7gzCiuO7DBjqkAeKppKNr3Ed8Er5GmYj0DsssMMrRBTRttmQo4EJFxygbwgRdV2cRSHkTxBuy6%2FU%2FgtWTVm1juAkat2vvbKnM1xZVO497ozspi4CjmU2Uw6eH1EjnN4OQxhHP9ac6u9MBU1M0h5tRIXMasidwxT6thnqVU%2BOFjunHFuAhdCpZj3s%2FshAGqS0k6pOE1VQXsv51QS7P%2BoAhJtmJ7YmjNvENb4gLsx1U&X-Amz-Signature=7ba4c44570df8600fbe27498625d3234ff32ce7a0d679ce568143fb6bf24ce31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLY4Z4T2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi6O7wwaEzy9UqDoaQFY7DDBR6nqv9zDT5XhKH%2FVrSCgIhANv%2BgNS7WuU7SgcNtmd62ZjQOayzu56BgbDp6%2FiNjBUuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq1iMtNx6ohIDJaXcq3APpCdEqB%2BrWFUZD5MRlvy7PCR06CfTrhMFaxcWTBuGJ2guCzb58F4Am%2BSL65zYvJjZFScjnqwvNdja%2F7EFAdIq2c4RgHhdF4%2BJp5lpp074gGqHtAnBylrMNwOGVD%2FBj8gBQjR2DAh6Mb5tch%2FjEigAA8eNZTQfOub9GAkb5L%2B6cUEp%2FYAfQehr%2BIKHi6x0dreO8xZ20%2Fl%2BKpAZnK3VeLOVRJz9OLRi85tjLSd3svP9cKWFeKFs23BIX1cX6fMEf9pNgqaaR1SliFQUZaWVWGaynxQBOaMYmkEsh1iZemgQWHVA2QZ30CzFOiYVF0yZTf9OYBWNyuXhcLLg9rwyLyZsse42SAAUjVDymi%2FrR6DI%2BVi5bWngf%2FWp3htAcyVZ9sEaA5sDnM3eZfmHC5d%2FYU%2FGyrn5NAFZrhx%2Bb7585pvc28VQvI%2F95Eg2f6K9PpiSWzuvXcannfjkmQji3YI%2FeooKESccgzIVjMMWfz72tHEvMoCayhbRSTkyNjhMuqz%2ByJo0baFJA3ryMy7Hoy3kIkMBlDHzc6lic5V1FImQDf19Tfmkv0GVBhUjI07bdYmo%2B0XrO2%2BR30cOIi%2FLqmufQ1YQQyXIYf1lhVzYGpt1R%2Fnrn30rGza%2BFZMJki5j7gzCiuO7DBjqkAeKppKNr3Ed8Er5GmYj0DsssMMrRBTRttmQo4EJFxygbwgRdV2cRSHkTxBuy6%2FU%2FgtWTVm1juAkat2vvbKnM1xZVO497ozspi4CjmU2Uw6eH1EjnN4OQxhHP9ac6u9MBU1M0h5tRIXMasidwxT6thnqVU%2BOFjunHFuAhdCpZj3s%2FshAGqS0k6pOE1VQXsv51QS7P%2BoAhJtmJ7YmjNvENb4gLsx1U&X-Amz-Signature=770bd39d3810889504752c436654e4c7182e04d907f3097fc71bb2ee960ffb82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLY4Z4T2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi6O7wwaEzy9UqDoaQFY7DDBR6nqv9zDT5XhKH%2FVrSCgIhANv%2BgNS7WuU7SgcNtmd62ZjQOayzu56BgbDp6%2FiNjBUuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq1iMtNx6ohIDJaXcq3APpCdEqB%2BrWFUZD5MRlvy7PCR06CfTrhMFaxcWTBuGJ2guCzb58F4Am%2BSL65zYvJjZFScjnqwvNdja%2F7EFAdIq2c4RgHhdF4%2BJp5lpp074gGqHtAnBylrMNwOGVD%2FBj8gBQjR2DAh6Mb5tch%2FjEigAA8eNZTQfOub9GAkb5L%2B6cUEp%2FYAfQehr%2BIKHi6x0dreO8xZ20%2Fl%2BKpAZnK3VeLOVRJz9OLRi85tjLSd3svP9cKWFeKFs23BIX1cX6fMEf9pNgqaaR1SliFQUZaWVWGaynxQBOaMYmkEsh1iZemgQWHVA2QZ30CzFOiYVF0yZTf9OYBWNyuXhcLLg9rwyLyZsse42SAAUjVDymi%2FrR6DI%2BVi5bWngf%2FWp3htAcyVZ9sEaA5sDnM3eZfmHC5d%2FYU%2FGyrn5NAFZrhx%2Bb7585pvc28VQvI%2F95Eg2f6K9PpiSWzuvXcannfjkmQji3YI%2FeooKESccgzIVjMMWfz72tHEvMoCayhbRSTkyNjhMuqz%2ByJo0baFJA3ryMy7Hoy3kIkMBlDHzc6lic5V1FImQDf19Tfmkv0GVBhUjI07bdYmo%2B0XrO2%2BR30cOIi%2FLqmufQ1YQQyXIYf1lhVzYGpt1R%2Fnrn30rGza%2BFZMJki5j7gzCiuO7DBjqkAeKppKNr3Ed8Er5GmYj0DsssMMrRBTRttmQo4EJFxygbwgRdV2cRSHkTxBuy6%2FU%2FgtWTVm1juAkat2vvbKnM1xZVO497ozspi4CjmU2Uw6eH1EjnN4OQxhHP9ac6u9MBU1M0h5tRIXMasidwxT6thnqVU%2BOFjunHFuAhdCpZj3s%2FshAGqS0k6pOE1VQXsv51QS7P%2BoAhJtmJ7YmjNvENb4gLsx1U&X-Amz-Signature=9b72c7469d6cef09def34cfbc3f38d2004110f42b4931875db62155237aa903d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLY4Z4T2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi6O7wwaEzy9UqDoaQFY7DDBR6nqv9zDT5XhKH%2FVrSCgIhANv%2BgNS7WuU7SgcNtmd62ZjQOayzu56BgbDp6%2FiNjBUuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq1iMtNx6ohIDJaXcq3APpCdEqB%2BrWFUZD5MRlvy7PCR06CfTrhMFaxcWTBuGJ2guCzb58F4Am%2BSL65zYvJjZFScjnqwvNdja%2F7EFAdIq2c4RgHhdF4%2BJp5lpp074gGqHtAnBylrMNwOGVD%2FBj8gBQjR2DAh6Mb5tch%2FjEigAA8eNZTQfOub9GAkb5L%2B6cUEp%2FYAfQehr%2BIKHi6x0dreO8xZ20%2Fl%2BKpAZnK3VeLOVRJz9OLRi85tjLSd3svP9cKWFeKFs23BIX1cX6fMEf9pNgqaaR1SliFQUZaWVWGaynxQBOaMYmkEsh1iZemgQWHVA2QZ30CzFOiYVF0yZTf9OYBWNyuXhcLLg9rwyLyZsse42SAAUjVDymi%2FrR6DI%2BVi5bWngf%2FWp3htAcyVZ9sEaA5sDnM3eZfmHC5d%2FYU%2FGyrn5NAFZrhx%2Bb7585pvc28VQvI%2F95Eg2f6K9PpiSWzuvXcannfjkmQji3YI%2FeooKESccgzIVjMMWfz72tHEvMoCayhbRSTkyNjhMuqz%2ByJo0baFJA3ryMy7Hoy3kIkMBlDHzc6lic5V1FImQDf19Tfmkv0GVBhUjI07bdYmo%2B0XrO2%2BR30cOIi%2FLqmufQ1YQQyXIYf1lhVzYGpt1R%2Fnrn30rGza%2BFZMJki5j7gzCiuO7DBjqkAeKppKNr3Ed8Er5GmYj0DsssMMrRBTRttmQo4EJFxygbwgRdV2cRSHkTxBuy6%2FU%2FgtWTVm1juAkat2vvbKnM1xZVO497ozspi4CjmU2Uw6eH1EjnN4OQxhHP9ac6u9MBU1M0h5tRIXMasidwxT6thnqVU%2BOFjunHFuAhdCpZj3s%2FshAGqS0k6pOE1VQXsv51QS7P%2BoAhJtmJ7YmjNvENb4gLsx1U&X-Amz-Signature=e905f87163bf231fdeec090f1732be691c97e390f12338d406ce80185ec72fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLY4Z4T2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi6O7wwaEzy9UqDoaQFY7DDBR6nqv9zDT5XhKH%2FVrSCgIhANv%2BgNS7WuU7SgcNtmd62ZjQOayzu56BgbDp6%2FiNjBUuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq1iMtNx6ohIDJaXcq3APpCdEqB%2BrWFUZD5MRlvy7PCR06CfTrhMFaxcWTBuGJ2guCzb58F4Am%2BSL65zYvJjZFScjnqwvNdja%2F7EFAdIq2c4RgHhdF4%2BJp5lpp074gGqHtAnBylrMNwOGVD%2FBj8gBQjR2DAh6Mb5tch%2FjEigAA8eNZTQfOub9GAkb5L%2B6cUEp%2FYAfQehr%2BIKHi6x0dreO8xZ20%2Fl%2BKpAZnK3VeLOVRJz9OLRi85tjLSd3svP9cKWFeKFs23BIX1cX6fMEf9pNgqaaR1SliFQUZaWVWGaynxQBOaMYmkEsh1iZemgQWHVA2QZ30CzFOiYVF0yZTf9OYBWNyuXhcLLg9rwyLyZsse42SAAUjVDymi%2FrR6DI%2BVi5bWngf%2FWp3htAcyVZ9sEaA5sDnM3eZfmHC5d%2FYU%2FGyrn5NAFZrhx%2Bb7585pvc28VQvI%2F95Eg2f6K9PpiSWzuvXcannfjkmQji3YI%2FeooKESccgzIVjMMWfz72tHEvMoCayhbRSTkyNjhMuqz%2ByJo0baFJA3ryMy7Hoy3kIkMBlDHzc6lic5V1FImQDf19Tfmkv0GVBhUjI07bdYmo%2B0XrO2%2BR30cOIi%2FLqmufQ1YQQyXIYf1lhVzYGpt1R%2Fnrn30rGza%2BFZMJki5j7gzCiuO7DBjqkAeKppKNr3Ed8Er5GmYj0DsssMMrRBTRttmQo4EJFxygbwgRdV2cRSHkTxBuy6%2FU%2FgtWTVm1juAkat2vvbKnM1xZVO497ozspi4CjmU2Uw6eH1EjnN4OQxhHP9ac6u9MBU1M0h5tRIXMasidwxT6thnqVU%2BOFjunHFuAhdCpZj3s%2FshAGqS0k6pOE1VQXsv51QS7P%2BoAhJtmJ7YmjNvENb4gLsx1U&X-Amz-Signature=b067705be88e8beb26ae4697179eb504bbd5c78b56fa74763ee15bf70e5c1ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLY4Z4T2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi6O7wwaEzy9UqDoaQFY7DDBR6nqv9zDT5XhKH%2FVrSCgIhANv%2BgNS7WuU7SgcNtmd62ZjQOayzu56BgbDp6%2FiNjBUuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq1iMtNx6ohIDJaXcq3APpCdEqB%2BrWFUZD5MRlvy7PCR06CfTrhMFaxcWTBuGJ2guCzb58F4Am%2BSL65zYvJjZFScjnqwvNdja%2F7EFAdIq2c4RgHhdF4%2BJp5lpp074gGqHtAnBylrMNwOGVD%2FBj8gBQjR2DAh6Mb5tch%2FjEigAA8eNZTQfOub9GAkb5L%2B6cUEp%2FYAfQehr%2BIKHi6x0dreO8xZ20%2Fl%2BKpAZnK3VeLOVRJz9OLRi85tjLSd3svP9cKWFeKFs23BIX1cX6fMEf9pNgqaaR1SliFQUZaWVWGaynxQBOaMYmkEsh1iZemgQWHVA2QZ30CzFOiYVF0yZTf9OYBWNyuXhcLLg9rwyLyZsse42SAAUjVDymi%2FrR6DI%2BVi5bWngf%2FWp3htAcyVZ9sEaA5sDnM3eZfmHC5d%2FYU%2FGyrn5NAFZrhx%2Bb7585pvc28VQvI%2F95Eg2f6K9PpiSWzuvXcannfjkmQji3YI%2FeooKESccgzIVjMMWfz72tHEvMoCayhbRSTkyNjhMuqz%2ByJo0baFJA3ryMy7Hoy3kIkMBlDHzc6lic5V1FImQDf19Tfmkv0GVBhUjI07bdYmo%2B0XrO2%2BR30cOIi%2FLqmufQ1YQQyXIYf1lhVzYGpt1R%2Fnrn30rGza%2BFZMJki5j7gzCiuO7DBjqkAeKppKNr3Ed8Er5GmYj0DsssMMrRBTRttmQo4EJFxygbwgRdV2cRSHkTxBuy6%2FU%2FgtWTVm1juAkat2vvbKnM1xZVO497ozspi4CjmU2Uw6eH1EjnN4OQxhHP9ac6u9MBU1M0h5tRIXMasidwxT6thnqVU%2BOFjunHFuAhdCpZj3s%2FshAGqS0k6pOE1VQXsv51QS7P%2BoAhJtmJ7YmjNvENb4gLsx1U&X-Amz-Signature=50441759a4e6b1ee97923abe05c6aaea265706ac388e791eec672727514617f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLY4Z4T2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi6O7wwaEzy9UqDoaQFY7DDBR6nqv9zDT5XhKH%2FVrSCgIhANv%2BgNS7WuU7SgcNtmd62ZjQOayzu56BgbDp6%2FiNjBUuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq1iMtNx6ohIDJaXcq3APpCdEqB%2BrWFUZD5MRlvy7PCR06CfTrhMFaxcWTBuGJ2guCzb58F4Am%2BSL65zYvJjZFScjnqwvNdja%2F7EFAdIq2c4RgHhdF4%2BJp5lpp074gGqHtAnBylrMNwOGVD%2FBj8gBQjR2DAh6Mb5tch%2FjEigAA8eNZTQfOub9GAkb5L%2B6cUEp%2FYAfQehr%2BIKHi6x0dreO8xZ20%2Fl%2BKpAZnK3VeLOVRJz9OLRi85tjLSd3svP9cKWFeKFs23BIX1cX6fMEf9pNgqaaR1SliFQUZaWVWGaynxQBOaMYmkEsh1iZemgQWHVA2QZ30CzFOiYVF0yZTf9OYBWNyuXhcLLg9rwyLyZsse42SAAUjVDymi%2FrR6DI%2BVi5bWngf%2FWp3htAcyVZ9sEaA5sDnM3eZfmHC5d%2FYU%2FGyrn5NAFZrhx%2Bb7585pvc28VQvI%2F95Eg2f6K9PpiSWzuvXcannfjkmQji3YI%2FeooKESccgzIVjMMWfz72tHEvMoCayhbRSTkyNjhMuqz%2ByJo0baFJA3ryMy7Hoy3kIkMBlDHzc6lic5V1FImQDf19Tfmkv0GVBhUjI07bdYmo%2B0XrO2%2BR30cOIi%2FLqmufQ1YQQyXIYf1lhVzYGpt1R%2Fnrn30rGza%2BFZMJki5j7gzCiuO7DBjqkAeKppKNr3Ed8Er5GmYj0DsssMMrRBTRttmQo4EJFxygbwgRdV2cRSHkTxBuy6%2FU%2FgtWTVm1juAkat2vvbKnM1xZVO497ozspi4CjmU2Uw6eH1EjnN4OQxhHP9ac6u9MBU1M0h5tRIXMasidwxT6thnqVU%2BOFjunHFuAhdCpZj3s%2FshAGqS0k6pOE1VQXsv51QS7P%2BoAhJtmJ7YmjNvENb4gLsx1U&X-Amz-Signature=03ee14e6cfad57cb3996e20dd0920e34d941ee1cfe33823a301d74751da73e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
