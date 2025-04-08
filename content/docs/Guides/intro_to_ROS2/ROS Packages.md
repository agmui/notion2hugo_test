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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MEBNJB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCEOZfuQrDTu%2BuDNrECFfQvSlcak8bau08c%2FHqNufFC%2BwIgGzXQS%2BXZQtzGi%2BNsSM7Yl6Ys7nOxnm5WsG1USEYxiBcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDVnstZ23QqFmDHY%2BSrcA7%2BslPyzsjTXUhbs9LkbOASjz%2BRLcHJEFcJb3naogID%2Fsa%2FEb40f8RnMV2chIji9wiWhXgIuS%2BEVogxiYP%2F3LK%2BTLTakk7CkYkjptjNwFVyg5JW8gAWRtqvlfXUPaeErbydYX4YdCpdwuQ2rkU5o%2BdPN00AYVbPGr2yN0Xv8jpgf8WedWCr0joCiFVKLY71nHlGWwdD2ji51vMBjOtFKZDikvJ7VB1nGyrz1dfV8AejEahD9dfbu8FaVJhijeiIcrzRenMHGFQKKhHMwBGbxr2Fiuts9Gv1mOEnwKfJBI2jWE%2FY1Gus31p97J3xTokeD9OXvYs7WkB5QMxS8CoAlJZ97DN6eyRvFSfE8I7%2B%2F4FdwVZSZEA2YY4Z4liof%2FYKhvhwGJm33sgj3qm2aFE8i24JRwj%2BQrcaN9sV8uXclmadD1PTDptoBwH%2FXzZo%2F4%2Fb5lugXpRKJA19kbbw9JwMhSREF9GMQ9AEvieDN5p3CUbkHNrPDfVqoi0tBEl4y5ONgeo%2B0ciiBKQ%2Fjzr%2FdViz7fhsO6PU9vNBRCa3MFPbbwAedhdrCwOFbZQ%2B3Fv3lhaLQHpgfEENj67M96PxPpKRHTl0Vio%2FO5cE49OtDQTaNrXee6t9wyQ1UFM6%2BBY9DMPrv1b8GOqUB4VgQiXo8OK%2FGGAiAawj5iYv0kcwq41vImVb7RsRbUeBM5BGekVT%2BsB%2BUYccLwWgT49PC%2BzIC08j9RncLVrB3f3h%2Fplr3Zi49qPfeW1HNP638Vjv%2FuA0A0rjTXBF0S8ARJpr0ycHoSWXLD3lAd7ibB04CoSuW6%2FA0Spc11dkESiMJyC2%2FD%2Bc2bkWQFTbGpjDyb8U9ZTLd%2BLkMta5Pv%2FQuflWAuzyY&X-Amz-Signature=1b58661ccf3991093faa6a5b02b490e604a281196513dc0535f90c78d998e895&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MEBNJB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCEOZfuQrDTu%2BuDNrECFfQvSlcak8bau08c%2FHqNufFC%2BwIgGzXQS%2BXZQtzGi%2BNsSM7Yl6Ys7nOxnm5WsG1USEYxiBcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDVnstZ23QqFmDHY%2BSrcA7%2BslPyzsjTXUhbs9LkbOASjz%2BRLcHJEFcJb3naogID%2Fsa%2FEb40f8RnMV2chIji9wiWhXgIuS%2BEVogxiYP%2F3LK%2BTLTakk7CkYkjptjNwFVyg5JW8gAWRtqvlfXUPaeErbydYX4YdCpdwuQ2rkU5o%2BdPN00AYVbPGr2yN0Xv8jpgf8WedWCr0joCiFVKLY71nHlGWwdD2ji51vMBjOtFKZDikvJ7VB1nGyrz1dfV8AejEahD9dfbu8FaVJhijeiIcrzRenMHGFQKKhHMwBGbxr2Fiuts9Gv1mOEnwKfJBI2jWE%2FY1Gus31p97J3xTokeD9OXvYs7WkB5QMxS8CoAlJZ97DN6eyRvFSfE8I7%2B%2F4FdwVZSZEA2YY4Z4liof%2FYKhvhwGJm33sgj3qm2aFE8i24JRwj%2BQrcaN9sV8uXclmadD1PTDptoBwH%2FXzZo%2F4%2Fb5lugXpRKJA19kbbw9JwMhSREF9GMQ9AEvieDN5p3CUbkHNrPDfVqoi0tBEl4y5ONgeo%2B0ciiBKQ%2Fjzr%2FdViz7fhsO6PU9vNBRCa3MFPbbwAedhdrCwOFbZQ%2B3Fv3lhaLQHpgfEENj67M96PxPpKRHTl0Vio%2FO5cE49OtDQTaNrXee6t9wyQ1UFM6%2BBY9DMPrv1b8GOqUB4VgQiXo8OK%2FGGAiAawj5iYv0kcwq41vImVb7RsRbUeBM5BGekVT%2BsB%2BUYccLwWgT49PC%2BzIC08j9RncLVrB3f3h%2Fplr3Zi49qPfeW1HNP638Vjv%2FuA0A0rjTXBF0S8ARJpr0ycHoSWXLD3lAd7ibB04CoSuW6%2FA0Spc11dkESiMJyC2%2FD%2Bc2bkWQFTbGpjDyb8U9ZTLd%2BLkMta5Pv%2FQuflWAuzyY&X-Amz-Signature=6231633d8850f27bad85ba1c388e93d32a8052ba88ebd783aa12fd61b5c1fed1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MEBNJB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCEOZfuQrDTu%2BuDNrECFfQvSlcak8bau08c%2FHqNufFC%2BwIgGzXQS%2BXZQtzGi%2BNsSM7Yl6Ys7nOxnm5WsG1USEYxiBcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDVnstZ23QqFmDHY%2BSrcA7%2BslPyzsjTXUhbs9LkbOASjz%2BRLcHJEFcJb3naogID%2Fsa%2FEb40f8RnMV2chIji9wiWhXgIuS%2BEVogxiYP%2F3LK%2BTLTakk7CkYkjptjNwFVyg5JW8gAWRtqvlfXUPaeErbydYX4YdCpdwuQ2rkU5o%2BdPN00AYVbPGr2yN0Xv8jpgf8WedWCr0joCiFVKLY71nHlGWwdD2ji51vMBjOtFKZDikvJ7VB1nGyrz1dfV8AejEahD9dfbu8FaVJhijeiIcrzRenMHGFQKKhHMwBGbxr2Fiuts9Gv1mOEnwKfJBI2jWE%2FY1Gus31p97J3xTokeD9OXvYs7WkB5QMxS8CoAlJZ97DN6eyRvFSfE8I7%2B%2F4FdwVZSZEA2YY4Z4liof%2FYKhvhwGJm33sgj3qm2aFE8i24JRwj%2BQrcaN9sV8uXclmadD1PTDptoBwH%2FXzZo%2F4%2Fb5lugXpRKJA19kbbw9JwMhSREF9GMQ9AEvieDN5p3CUbkHNrPDfVqoi0tBEl4y5ONgeo%2B0ciiBKQ%2Fjzr%2FdViz7fhsO6PU9vNBRCa3MFPbbwAedhdrCwOFbZQ%2B3Fv3lhaLQHpgfEENj67M96PxPpKRHTl0Vio%2FO5cE49OtDQTaNrXee6t9wyQ1UFM6%2BBY9DMPrv1b8GOqUB4VgQiXo8OK%2FGGAiAawj5iYv0kcwq41vImVb7RsRbUeBM5BGekVT%2BsB%2BUYccLwWgT49PC%2BzIC08j9RncLVrB3f3h%2Fplr3Zi49qPfeW1HNP638Vjv%2FuA0A0rjTXBF0S8ARJpr0ycHoSWXLD3lAd7ibB04CoSuW6%2FA0Spc11dkESiMJyC2%2FD%2Bc2bkWQFTbGpjDyb8U9ZTLd%2BLkMta5Pv%2FQuflWAuzyY&X-Amz-Signature=f401afe6e601f31309cc3da04539c1130759a18adacbe83f4c0347e00f398975&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MEBNJB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCEOZfuQrDTu%2BuDNrECFfQvSlcak8bau08c%2FHqNufFC%2BwIgGzXQS%2BXZQtzGi%2BNsSM7Yl6Ys7nOxnm5WsG1USEYxiBcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDVnstZ23QqFmDHY%2BSrcA7%2BslPyzsjTXUhbs9LkbOASjz%2BRLcHJEFcJb3naogID%2Fsa%2FEb40f8RnMV2chIji9wiWhXgIuS%2BEVogxiYP%2F3LK%2BTLTakk7CkYkjptjNwFVyg5JW8gAWRtqvlfXUPaeErbydYX4YdCpdwuQ2rkU5o%2BdPN00AYVbPGr2yN0Xv8jpgf8WedWCr0joCiFVKLY71nHlGWwdD2ji51vMBjOtFKZDikvJ7VB1nGyrz1dfV8AejEahD9dfbu8FaVJhijeiIcrzRenMHGFQKKhHMwBGbxr2Fiuts9Gv1mOEnwKfJBI2jWE%2FY1Gus31p97J3xTokeD9OXvYs7WkB5QMxS8CoAlJZ97DN6eyRvFSfE8I7%2B%2F4FdwVZSZEA2YY4Z4liof%2FYKhvhwGJm33sgj3qm2aFE8i24JRwj%2BQrcaN9sV8uXclmadD1PTDptoBwH%2FXzZo%2F4%2Fb5lugXpRKJA19kbbw9JwMhSREF9GMQ9AEvieDN5p3CUbkHNrPDfVqoi0tBEl4y5ONgeo%2B0ciiBKQ%2Fjzr%2FdViz7fhsO6PU9vNBRCa3MFPbbwAedhdrCwOFbZQ%2B3Fv3lhaLQHpgfEENj67M96PxPpKRHTl0Vio%2FO5cE49OtDQTaNrXee6t9wyQ1UFM6%2BBY9DMPrv1b8GOqUB4VgQiXo8OK%2FGGAiAawj5iYv0kcwq41vImVb7RsRbUeBM5BGekVT%2BsB%2BUYccLwWgT49PC%2BzIC08j9RncLVrB3f3h%2Fplr3Zi49qPfeW1HNP638Vjv%2FuA0A0rjTXBF0S8ARJpr0ycHoSWXLD3lAd7ibB04CoSuW6%2FA0Spc11dkESiMJyC2%2FD%2Bc2bkWQFTbGpjDyb8U9ZTLd%2BLkMta5Pv%2FQuflWAuzyY&X-Amz-Signature=05064a7a29c5c909127bbce119cd3a0ee3b083a8550cec0ce65b92474498f074&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MEBNJB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCEOZfuQrDTu%2BuDNrECFfQvSlcak8bau08c%2FHqNufFC%2BwIgGzXQS%2BXZQtzGi%2BNsSM7Yl6Ys7nOxnm5WsG1USEYxiBcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDVnstZ23QqFmDHY%2BSrcA7%2BslPyzsjTXUhbs9LkbOASjz%2BRLcHJEFcJb3naogID%2Fsa%2FEb40f8RnMV2chIji9wiWhXgIuS%2BEVogxiYP%2F3LK%2BTLTakk7CkYkjptjNwFVyg5JW8gAWRtqvlfXUPaeErbydYX4YdCpdwuQ2rkU5o%2BdPN00AYVbPGr2yN0Xv8jpgf8WedWCr0joCiFVKLY71nHlGWwdD2ji51vMBjOtFKZDikvJ7VB1nGyrz1dfV8AejEahD9dfbu8FaVJhijeiIcrzRenMHGFQKKhHMwBGbxr2Fiuts9Gv1mOEnwKfJBI2jWE%2FY1Gus31p97J3xTokeD9OXvYs7WkB5QMxS8CoAlJZ97DN6eyRvFSfE8I7%2B%2F4FdwVZSZEA2YY4Z4liof%2FYKhvhwGJm33sgj3qm2aFE8i24JRwj%2BQrcaN9sV8uXclmadD1PTDptoBwH%2FXzZo%2F4%2Fb5lugXpRKJA19kbbw9JwMhSREF9GMQ9AEvieDN5p3CUbkHNrPDfVqoi0tBEl4y5ONgeo%2B0ciiBKQ%2Fjzr%2FdViz7fhsO6PU9vNBRCa3MFPbbwAedhdrCwOFbZQ%2B3Fv3lhaLQHpgfEENj67M96PxPpKRHTl0Vio%2FO5cE49OtDQTaNrXee6t9wyQ1UFM6%2BBY9DMPrv1b8GOqUB4VgQiXo8OK%2FGGAiAawj5iYv0kcwq41vImVb7RsRbUeBM5BGekVT%2BsB%2BUYccLwWgT49PC%2BzIC08j9RncLVrB3f3h%2Fplr3Zi49qPfeW1HNP638Vjv%2FuA0A0rjTXBF0S8ARJpr0ycHoSWXLD3lAd7ibB04CoSuW6%2FA0Spc11dkESiMJyC2%2FD%2Bc2bkWQFTbGpjDyb8U9ZTLd%2BLkMta5Pv%2FQuflWAuzyY&X-Amz-Signature=8133bf9900003bb458e46ea830b528ed57a96b65fc5a17ebc1b2cfb93ee5a250&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MEBNJB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCEOZfuQrDTu%2BuDNrECFfQvSlcak8bau08c%2FHqNufFC%2BwIgGzXQS%2BXZQtzGi%2BNsSM7Yl6Ys7nOxnm5WsG1USEYxiBcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDVnstZ23QqFmDHY%2BSrcA7%2BslPyzsjTXUhbs9LkbOASjz%2BRLcHJEFcJb3naogID%2Fsa%2FEb40f8RnMV2chIji9wiWhXgIuS%2BEVogxiYP%2F3LK%2BTLTakk7CkYkjptjNwFVyg5JW8gAWRtqvlfXUPaeErbydYX4YdCpdwuQ2rkU5o%2BdPN00AYVbPGr2yN0Xv8jpgf8WedWCr0joCiFVKLY71nHlGWwdD2ji51vMBjOtFKZDikvJ7VB1nGyrz1dfV8AejEahD9dfbu8FaVJhijeiIcrzRenMHGFQKKhHMwBGbxr2Fiuts9Gv1mOEnwKfJBI2jWE%2FY1Gus31p97J3xTokeD9OXvYs7WkB5QMxS8CoAlJZ97DN6eyRvFSfE8I7%2B%2F4FdwVZSZEA2YY4Z4liof%2FYKhvhwGJm33sgj3qm2aFE8i24JRwj%2BQrcaN9sV8uXclmadD1PTDptoBwH%2FXzZo%2F4%2Fb5lugXpRKJA19kbbw9JwMhSREF9GMQ9AEvieDN5p3CUbkHNrPDfVqoi0tBEl4y5ONgeo%2B0ciiBKQ%2Fjzr%2FdViz7fhsO6PU9vNBRCa3MFPbbwAedhdrCwOFbZQ%2B3Fv3lhaLQHpgfEENj67M96PxPpKRHTl0Vio%2FO5cE49OtDQTaNrXee6t9wyQ1UFM6%2BBY9DMPrv1b8GOqUB4VgQiXo8OK%2FGGAiAawj5iYv0kcwq41vImVb7RsRbUeBM5BGekVT%2BsB%2BUYccLwWgT49PC%2BzIC08j9RncLVrB3f3h%2Fplr3Zi49qPfeW1HNP638Vjv%2FuA0A0rjTXBF0S8ARJpr0ycHoSWXLD3lAd7ibB04CoSuW6%2FA0Spc11dkESiMJyC2%2FD%2Bc2bkWQFTbGpjDyb8U9ZTLd%2BLkMta5Pv%2FQuflWAuzyY&X-Amz-Signature=4371551d03a3538c5edb94d76ff206fde792b81dedcbb4413e27dca50501613a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MEBNJB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCEOZfuQrDTu%2BuDNrECFfQvSlcak8bau08c%2FHqNufFC%2BwIgGzXQS%2BXZQtzGi%2BNsSM7Yl6Ys7nOxnm5WsG1USEYxiBcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDVnstZ23QqFmDHY%2BSrcA7%2BslPyzsjTXUhbs9LkbOASjz%2BRLcHJEFcJb3naogID%2Fsa%2FEb40f8RnMV2chIji9wiWhXgIuS%2BEVogxiYP%2F3LK%2BTLTakk7CkYkjptjNwFVyg5JW8gAWRtqvlfXUPaeErbydYX4YdCpdwuQ2rkU5o%2BdPN00AYVbPGr2yN0Xv8jpgf8WedWCr0joCiFVKLY71nHlGWwdD2ji51vMBjOtFKZDikvJ7VB1nGyrz1dfV8AejEahD9dfbu8FaVJhijeiIcrzRenMHGFQKKhHMwBGbxr2Fiuts9Gv1mOEnwKfJBI2jWE%2FY1Gus31p97J3xTokeD9OXvYs7WkB5QMxS8CoAlJZ97DN6eyRvFSfE8I7%2B%2F4FdwVZSZEA2YY4Z4liof%2FYKhvhwGJm33sgj3qm2aFE8i24JRwj%2BQrcaN9sV8uXclmadD1PTDptoBwH%2FXzZo%2F4%2Fb5lugXpRKJA19kbbw9JwMhSREF9GMQ9AEvieDN5p3CUbkHNrPDfVqoi0tBEl4y5ONgeo%2B0ciiBKQ%2Fjzr%2FdViz7fhsO6PU9vNBRCa3MFPbbwAedhdrCwOFbZQ%2B3Fv3lhaLQHpgfEENj67M96PxPpKRHTl0Vio%2FO5cE49OtDQTaNrXee6t9wyQ1UFM6%2BBY9DMPrv1b8GOqUB4VgQiXo8OK%2FGGAiAawj5iYv0kcwq41vImVb7RsRbUeBM5BGekVT%2BsB%2BUYccLwWgT49PC%2BzIC08j9RncLVrB3f3h%2Fplr3Zi49qPfeW1HNP638Vjv%2FuA0A0rjTXBF0S8ARJpr0ycHoSWXLD3lAd7ibB04CoSuW6%2FA0Spc11dkESiMJyC2%2FD%2Bc2bkWQFTbGpjDyb8U9ZTLd%2BLkMta5Pv%2FQuflWAuzyY&X-Amz-Signature=955b136ae735682a25a963d8424ca7229f3c787a500c83d213447f1fd014a836&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
