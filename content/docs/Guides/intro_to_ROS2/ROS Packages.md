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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766YURFL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFHuk4dsyWxIt89SLK7rK%2F%2F6sJrozkVsc3WCoC9YfuxfAiBpqpr17uCPWH%2BBZyEETHFU3Z0pnEEgku4CjAyTDd6sxSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMrZulTj62hUP%2FQCPdKtwDOJfRPRjRShjIDLaDB%2FGy5%2BaE%2BXA6HrRevgFBr29q%2BRq%2BfmCrT6MK6au5CSDpzILJBZea4UL1V4m3t9z7ZUS%2F857%2B4f4%2FvYHC09RfZgIYzqGwx2UA610%2BG6hOmiXiOJrJWo0SxvR1Ere3JbEqtFtd006Ni2ojox7mxN9cYez54OAIqzsVHidGOmHtxHm4kEZ70Jnrsj9rvQFvINLcUw5t25DQgUipDywh0PgSPwrD8bsau84a4DBYyLKpIBOicnWB%2F5Ie6v9%2FySrv0UIgY6eG81o909N868XnLP3UiYo7T2OG0ucnLyN%2B4HXS8TnlaYTHqhwEVVn42tTojUTAJcRwkLVWFt89y1x96c6GVZmw3WGYCxeCB%2FWxqRYTQ48CGZHo8W%2BocZE%2FKHp3aA%2Bz38zWu5Rbk%2Fv%2FVjgTzxnW9CM3JFbhrNs6VNjRuUMqAmu6cPGwHAxluVtbYLdAioZB236mBVovBHcEbUrjjY%2FxR%2FcAJC8bHodKzBOKog3FSUFjV2fOYgaeiCXN9LUtDWwJs1IWU6XGE00yqZbsX2OojzOK88NYS7Juna5Jj0g6RGz8QyK6JwpVT1EZNsiW0oEtjCQBvFZ3CwvWQ27dirB0iGMW25877DeBMG4gHOmtzvwwycG1wgY6pgF2%2F%2BIA0AnKbXQnc4TDjVlnjw9HF289eA7HrCIDuMerDltlWAW08eE8LIcc6SWAgpDIKtaaejeElxQ64Uxk6jxndhGkPacPom%2BDtsp%2Bw059wIT7X3NET2b3iIIMZNe27hVzP7pRGhCKPUnARjZxUZBx%2F7g9S0ZMYISS7hzzqEpbLmq6G%2FyyHczCnjAeAAVJPD1SWl%2BqvR5hBSC4L%2FsvvZYGcmoMEvP7&X-Amz-Signature=95c1ce5df8ee281333139b33f419bdbd33f99ed668aa7e6a881c764dc25ec7ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766YURFL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFHuk4dsyWxIt89SLK7rK%2F%2F6sJrozkVsc3WCoC9YfuxfAiBpqpr17uCPWH%2BBZyEETHFU3Z0pnEEgku4CjAyTDd6sxSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMrZulTj62hUP%2FQCPdKtwDOJfRPRjRShjIDLaDB%2FGy5%2BaE%2BXA6HrRevgFBr29q%2BRq%2BfmCrT6MK6au5CSDpzILJBZea4UL1V4m3t9z7ZUS%2F857%2B4f4%2FvYHC09RfZgIYzqGwx2UA610%2BG6hOmiXiOJrJWo0SxvR1Ere3JbEqtFtd006Ni2ojox7mxN9cYez54OAIqzsVHidGOmHtxHm4kEZ70Jnrsj9rvQFvINLcUw5t25DQgUipDywh0PgSPwrD8bsau84a4DBYyLKpIBOicnWB%2F5Ie6v9%2FySrv0UIgY6eG81o909N868XnLP3UiYo7T2OG0ucnLyN%2B4HXS8TnlaYTHqhwEVVn42tTojUTAJcRwkLVWFt89y1x96c6GVZmw3WGYCxeCB%2FWxqRYTQ48CGZHo8W%2BocZE%2FKHp3aA%2Bz38zWu5Rbk%2Fv%2FVjgTzxnW9CM3JFbhrNs6VNjRuUMqAmu6cPGwHAxluVtbYLdAioZB236mBVovBHcEbUrjjY%2FxR%2FcAJC8bHodKzBOKog3FSUFjV2fOYgaeiCXN9LUtDWwJs1IWU6XGE00yqZbsX2OojzOK88NYS7Juna5Jj0g6RGz8QyK6JwpVT1EZNsiW0oEtjCQBvFZ3CwvWQ27dirB0iGMW25877DeBMG4gHOmtzvwwycG1wgY6pgF2%2F%2BIA0AnKbXQnc4TDjVlnjw9HF289eA7HrCIDuMerDltlWAW08eE8LIcc6SWAgpDIKtaaejeElxQ64Uxk6jxndhGkPacPom%2BDtsp%2Bw059wIT7X3NET2b3iIIMZNe27hVzP7pRGhCKPUnARjZxUZBx%2F7g9S0ZMYISS7hzzqEpbLmq6G%2FyyHczCnjAeAAVJPD1SWl%2BqvR5hBSC4L%2FsvvZYGcmoMEvP7&X-Amz-Signature=fc9218f0b37e3baf6aa09755fc5205cca6cc6d2731988208f369a10b213cd444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766YURFL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFHuk4dsyWxIt89SLK7rK%2F%2F6sJrozkVsc3WCoC9YfuxfAiBpqpr17uCPWH%2BBZyEETHFU3Z0pnEEgku4CjAyTDd6sxSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMrZulTj62hUP%2FQCPdKtwDOJfRPRjRShjIDLaDB%2FGy5%2BaE%2BXA6HrRevgFBr29q%2BRq%2BfmCrT6MK6au5CSDpzILJBZea4UL1V4m3t9z7ZUS%2F857%2B4f4%2FvYHC09RfZgIYzqGwx2UA610%2BG6hOmiXiOJrJWo0SxvR1Ere3JbEqtFtd006Ni2ojox7mxN9cYez54OAIqzsVHidGOmHtxHm4kEZ70Jnrsj9rvQFvINLcUw5t25DQgUipDywh0PgSPwrD8bsau84a4DBYyLKpIBOicnWB%2F5Ie6v9%2FySrv0UIgY6eG81o909N868XnLP3UiYo7T2OG0ucnLyN%2B4HXS8TnlaYTHqhwEVVn42tTojUTAJcRwkLVWFt89y1x96c6GVZmw3WGYCxeCB%2FWxqRYTQ48CGZHo8W%2BocZE%2FKHp3aA%2Bz38zWu5Rbk%2Fv%2FVjgTzxnW9CM3JFbhrNs6VNjRuUMqAmu6cPGwHAxluVtbYLdAioZB236mBVovBHcEbUrjjY%2FxR%2FcAJC8bHodKzBOKog3FSUFjV2fOYgaeiCXN9LUtDWwJs1IWU6XGE00yqZbsX2OojzOK88NYS7Juna5Jj0g6RGz8QyK6JwpVT1EZNsiW0oEtjCQBvFZ3CwvWQ27dirB0iGMW25877DeBMG4gHOmtzvwwycG1wgY6pgF2%2F%2BIA0AnKbXQnc4TDjVlnjw9HF289eA7HrCIDuMerDltlWAW08eE8LIcc6SWAgpDIKtaaejeElxQ64Uxk6jxndhGkPacPom%2BDtsp%2Bw059wIT7X3NET2b3iIIMZNe27hVzP7pRGhCKPUnARjZxUZBx%2F7g9S0ZMYISS7hzzqEpbLmq6G%2FyyHczCnjAeAAVJPD1SWl%2BqvR5hBSC4L%2FsvvZYGcmoMEvP7&X-Amz-Signature=9fdca1b2608d264db79343684bb191fa60aef3678bc786e5d90a1bde8e184ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766YURFL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFHuk4dsyWxIt89SLK7rK%2F%2F6sJrozkVsc3WCoC9YfuxfAiBpqpr17uCPWH%2BBZyEETHFU3Z0pnEEgku4CjAyTDd6sxSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMrZulTj62hUP%2FQCPdKtwDOJfRPRjRShjIDLaDB%2FGy5%2BaE%2BXA6HrRevgFBr29q%2BRq%2BfmCrT6MK6au5CSDpzILJBZea4UL1V4m3t9z7ZUS%2F857%2B4f4%2FvYHC09RfZgIYzqGwx2UA610%2BG6hOmiXiOJrJWo0SxvR1Ere3JbEqtFtd006Ni2ojox7mxN9cYez54OAIqzsVHidGOmHtxHm4kEZ70Jnrsj9rvQFvINLcUw5t25DQgUipDywh0PgSPwrD8bsau84a4DBYyLKpIBOicnWB%2F5Ie6v9%2FySrv0UIgY6eG81o909N868XnLP3UiYo7T2OG0ucnLyN%2B4HXS8TnlaYTHqhwEVVn42tTojUTAJcRwkLVWFt89y1x96c6GVZmw3WGYCxeCB%2FWxqRYTQ48CGZHo8W%2BocZE%2FKHp3aA%2Bz38zWu5Rbk%2Fv%2FVjgTzxnW9CM3JFbhrNs6VNjRuUMqAmu6cPGwHAxluVtbYLdAioZB236mBVovBHcEbUrjjY%2FxR%2FcAJC8bHodKzBOKog3FSUFjV2fOYgaeiCXN9LUtDWwJs1IWU6XGE00yqZbsX2OojzOK88NYS7Juna5Jj0g6RGz8QyK6JwpVT1EZNsiW0oEtjCQBvFZ3CwvWQ27dirB0iGMW25877DeBMG4gHOmtzvwwycG1wgY6pgF2%2F%2BIA0AnKbXQnc4TDjVlnjw9HF289eA7HrCIDuMerDltlWAW08eE8LIcc6SWAgpDIKtaaejeElxQ64Uxk6jxndhGkPacPom%2BDtsp%2Bw059wIT7X3NET2b3iIIMZNe27hVzP7pRGhCKPUnARjZxUZBx%2F7g9S0ZMYISS7hzzqEpbLmq6G%2FyyHczCnjAeAAVJPD1SWl%2BqvR5hBSC4L%2FsvvZYGcmoMEvP7&X-Amz-Signature=518b19c5ab6185b874852f670881e53c8a8855a920a0644a7f5bec0c4ea3179d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766YURFL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFHuk4dsyWxIt89SLK7rK%2F%2F6sJrozkVsc3WCoC9YfuxfAiBpqpr17uCPWH%2BBZyEETHFU3Z0pnEEgku4CjAyTDd6sxSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMrZulTj62hUP%2FQCPdKtwDOJfRPRjRShjIDLaDB%2FGy5%2BaE%2BXA6HrRevgFBr29q%2BRq%2BfmCrT6MK6au5CSDpzILJBZea4UL1V4m3t9z7ZUS%2F857%2B4f4%2FvYHC09RfZgIYzqGwx2UA610%2BG6hOmiXiOJrJWo0SxvR1Ere3JbEqtFtd006Ni2ojox7mxN9cYez54OAIqzsVHidGOmHtxHm4kEZ70Jnrsj9rvQFvINLcUw5t25DQgUipDywh0PgSPwrD8bsau84a4DBYyLKpIBOicnWB%2F5Ie6v9%2FySrv0UIgY6eG81o909N868XnLP3UiYo7T2OG0ucnLyN%2B4HXS8TnlaYTHqhwEVVn42tTojUTAJcRwkLVWFt89y1x96c6GVZmw3WGYCxeCB%2FWxqRYTQ48CGZHo8W%2BocZE%2FKHp3aA%2Bz38zWu5Rbk%2Fv%2FVjgTzxnW9CM3JFbhrNs6VNjRuUMqAmu6cPGwHAxluVtbYLdAioZB236mBVovBHcEbUrjjY%2FxR%2FcAJC8bHodKzBOKog3FSUFjV2fOYgaeiCXN9LUtDWwJs1IWU6XGE00yqZbsX2OojzOK88NYS7Juna5Jj0g6RGz8QyK6JwpVT1EZNsiW0oEtjCQBvFZ3CwvWQ27dirB0iGMW25877DeBMG4gHOmtzvwwycG1wgY6pgF2%2F%2BIA0AnKbXQnc4TDjVlnjw9HF289eA7HrCIDuMerDltlWAW08eE8LIcc6SWAgpDIKtaaejeElxQ64Uxk6jxndhGkPacPom%2BDtsp%2Bw059wIT7X3NET2b3iIIMZNe27hVzP7pRGhCKPUnARjZxUZBx%2F7g9S0ZMYISS7hzzqEpbLmq6G%2FyyHczCnjAeAAVJPD1SWl%2BqvR5hBSC4L%2FsvvZYGcmoMEvP7&X-Amz-Signature=3672e51f0a1ed721437d405dcd1ea0c6a8e697d2efc9049cd5507869e02de6af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766YURFL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFHuk4dsyWxIt89SLK7rK%2F%2F6sJrozkVsc3WCoC9YfuxfAiBpqpr17uCPWH%2BBZyEETHFU3Z0pnEEgku4CjAyTDd6sxSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMrZulTj62hUP%2FQCPdKtwDOJfRPRjRShjIDLaDB%2FGy5%2BaE%2BXA6HrRevgFBr29q%2BRq%2BfmCrT6MK6au5CSDpzILJBZea4UL1V4m3t9z7ZUS%2F857%2B4f4%2FvYHC09RfZgIYzqGwx2UA610%2BG6hOmiXiOJrJWo0SxvR1Ere3JbEqtFtd006Ni2ojox7mxN9cYez54OAIqzsVHidGOmHtxHm4kEZ70Jnrsj9rvQFvINLcUw5t25DQgUipDywh0PgSPwrD8bsau84a4DBYyLKpIBOicnWB%2F5Ie6v9%2FySrv0UIgY6eG81o909N868XnLP3UiYo7T2OG0ucnLyN%2B4HXS8TnlaYTHqhwEVVn42tTojUTAJcRwkLVWFt89y1x96c6GVZmw3WGYCxeCB%2FWxqRYTQ48CGZHo8W%2BocZE%2FKHp3aA%2Bz38zWu5Rbk%2Fv%2FVjgTzxnW9CM3JFbhrNs6VNjRuUMqAmu6cPGwHAxluVtbYLdAioZB236mBVovBHcEbUrjjY%2FxR%2FcAJC8bHodKzBOKog3FSUFjV2fOYgaeiCXN9LUtDWwJs1IWU6XGE00yqZbsX2OojzOK88NYS7Juna5Jj0g6RGz8QyK6JwpVT1EZNsiW0oEtjCQBvFZ3CwvWQ27dirB0iGMW25877DeBMG4gHOmtzvwwycG1wgY6pgF2%2F%2BIA0AnKbXQnc4TDjVlnjw9HF289eA7HrCIDuMerDltlWAW08eE8LIcc6SWAgpDIKtaaejeElxQ64Uxk6jxndhGkPacPom%2BDtsp%2Bw059wIT7X3NET2b3iIIMZNe27hVzP7pRGhCKPUnARjZxUZBx%2F7g9S0ZMYISS7hzzqEpbLmq6G%2FyyHczCnjAeAAVJPD1SWl%2BqvR5hBSC4L%2FsvvZYGcmoMEvP7&X-Amz-Signature=8d152a628c70d91282abd929a5536a325c443f016a7f91fb78acc9a92a0273cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766YURFL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFHuk4dsyWxIt89SLK7rK%2F%2F6sJrozkVsc3WCoC9YfuxfAiBpqpr17uCPWH%2BBZyEETHFU3Z0pnEEgku4CjAyTDd6sxSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMrZulTj62hUP%2FQCPdKtwDOJfRPRjRShjIDLaDB%2FGy5%2BaE%2BXA6HrRevgFBr29q%2BRq%2BfmCrT6MK6au5CSDpzILJBZea4UL1V4m3t9z7ZUS%2F857%2B4f4%2FvYHC09RfZgIYzqGwx2UA610%2BG6hOmiXiOJrJWo0SxvR1Ere3JbEqtFtd006Ni2ojox7mxN9cYez54OAIqzsVHidGOmHtxHm4kEZ70Jnrsj9rvQFvINLcUw5t25DQgUipDywh0PgSPwrD8bsau84a4DBYyLKpIBOicnWB%2F5Ie6v9%2FySrv0UIgY6eG81o909N868XnLP3UiYo7T2OG0ucnLyN%2B4HXS8TnlaYTHqhwEVVn42tTojUTAJcRwkLVWFt89y1x96c6GVZmw3WGYCxeCB%2FWxqRYTQ48CGZHo8W%2BocZE%2FKHp3aA%2Bz38zWu5Rbk%2Fv%2FVjgTzxnW9CM3JFbhrNs6VNjRuUMqAmu6cPGwHAxluVtbYLdAioZB236mBVovBHcEbUrjjY%2FxR%2FcAJC8bHodKzBOKog3FSUFjV2fOYgaeiCXN9LUtDWwJs1IWU6XGE00yqZbsX2OojzOK88NYS7Juna5Jj0g6RGz8QyK6JwpVT1EZNsiW0oEtjCQBvFZ3CwvWQ27dirB0iGMW25877DeBMG4gHOmtzvwwycG1wgY6pgF2%2F%2BIA0AnKbXQnc4TDjVlnjw9HF289eA7HrCIDuMerDltlWAW08eE8LIcc6SWAgpDIKtaaejeElxQ64Uxk6jxndhGkPacPom%2BDtsp%2Bw059wIT7X3NET2b3iIIMZNe27hVzP7pRGhCKPUnARjZxUZBx%2F7g9S0ZMYISS7hzzqEpbLmq6G%2FyyHczCnjAeAAVJPD1SWl%2BqvR5hBSC4L%2FsvvZYGcmoMEvP7&X-Amz-Signature=dd109ca98e277f146d96d6350a638b4e54aa5317e4b913480965b71fc33795d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
