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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLV2E6SM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMC0mcwd9nfcPYoteDx3sT92cNkuRGjzfnbAJMwuQ5AiBMxLWexmLq4y%2Fmv%2Fr2Nr4ArgkB5AN%2FCNriVHsEh4UnwSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMyF%2FA0Hqqq8HUqyDDKtwDexP3JZyUEYYewD4QyzpItkVkkvr4DguSTkQ%2BUOv0x3u6pv3D2UiwoO43po9ztTIdj5StFfPAmyexB4%2BGzFDtg9WQIzewt5RCYHbHxITiyKdkRfffWIQJVUOhBh4RqT%2FlGMg1j8gPXRf6rlEAmzElwl2Po6f5lDIp5Rrq63NCr8Z7Ud5%2BRAme9F3bnYvjnbwPudC%2F6WhC6AaMU1qQTwVhx%2BKOF1WvCPsYS3ed78HilwcpbL7Pwz8sGROOdzUIRvuUpA0u75nFQdnv24hngfoZCbhIMXEd%2B9xMfip6NEoXv37%2FAN%2FivUcH%2BEKAw%2B4maCbiOgXlb5CjIkU5UuMRx0umEQ76d4vsu4sLOExejCUFehImxRaRiXo0F2WDGm1I7VZw%2B%2BnymVCX8KXPQTFFBKXvCoSL4mfo99a0AEOhYxjFpbjfvuU1hE3Kmb0KDpd9Dxr%2B7OFUzajLlAq1oE%2B7SnBt9m%2FBas5h83qgSKDxmpdFuBzcbjTZl3FvMLfzc%2Bltzo1QNnTwCujst97yAZjXkL50bTLodAvXf4QXuVAzdAc7F9rTUC%2B8C1j17IULr5pCfz%2FLZZv0mRvAFgK4X8JfIX7NgVJUjtHeqQlyY34ko8O8%2Bi%2FTPZ5c1MhgjOOzB4owtayAwAY6pgFSu9fuxV86DRiJTubgLGJipNfV7QDbdVxbJZfaazSiUlVJnOZknfdgOk2SmYeXh6lolnMTuvtJGHrQeVpTbXk86E4EG2O2772Nd3fT%2F3sfPSnoKgNy8HgA0j8a6OFdd6%2F8PPz%2FVjrcKO38X338%2FN0tidLvPLTcUnw%2FbXt4rk0jNi8WgU8UoFArB9RClQ6N%2Bj5RENGjEmwzPOEiEEKxyPFUC6BZjZUm&X-Amz-Signature=6b2e1c1c6c019c0c7f146414ff9e45fd883a7e248f489c1e151e675c3a92b6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLV2E6SM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMC0mcwd9nfcPYoteDx3sT92cNkuRGjzfnbAJMwuQ5AiBMxLWexmLq4y%2Fmv%2Fr2Nr4ArgkB5AN%2FCNriVHsEh4UnwSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMyF%2FA0Hqqq8HUqyDDKtwDexP3JZyUEYYewD4QyzpItkVkkvr4DguSTkQ%2BUOv0x3u6pv3D2UiwoO43po9ztTIdj5StFfPAmyexB4%2BGzFDtg9WQIzewt5RCYHbHxITiyKdkRfffWIQJVUOhBh4RqT%2FlGMg1j8gPXRf6rlEAmzElwl2Po6f5lDIp5Rrq63NCr8Z7Ud5%2BRAme9F3bnYvjnbwPudC%2F6WhC6AaMU1qQTwVhx%2BKOF1WvCPsYS3ed78HilwcpbL7Pwz8sGROOdzUIRvuUpA0u75nFQdnv24hngfoZCbhIMXEd%2B9xMfip6NEoXv37%2FAN%2FivUcH%2BEKAw%2B4maCbiOgXlb5CjIkU5UuMRx0umEQ76d4vsu4sLOExejCUFehImxRaRiXo0F2WDGm1I7VZw%2B%2BnymVCX8KXPQTFFBKXvCoSL4mfo99a0AEOhYxjFpbjfvuU1hE3Kmb0KDpd9Dxr%2B7OFUzajLlAq1oE%2B7SnBt9m%2FBas5h83qgSKDxmpdFuBzcbjTZl3FvMLfzc%2Bltzo1QNnTwCujst97yAZjXkL50bTLodAvXf4QXuVAzdAc7F9rTUC%2B8C1j17IULr5pCfz%2FLZZv0mRvAFgK4X8JfIX7NgVJUjtHeqQlyY34ko8O8%2Bi%2FTPZ5c1MhgjOOzB4owtayAwAY6pgFSu9fuxV86DRiJTubgLGJipNfV7QDbdVxbJZfaazSiUlVJnOZknfdgOk2SmYeXh6lolnMTuvtJGHrQeVpTbXk86E4EG2O2772Nd3fT%2F3sfPSnoKgNy8HgA0j8a6OFdd6%2F8PPz%2FVjrcKO38X338%2FN0tidLvPLTcUnw%2FbXt4rk0jNi8WgU8UoFArB9RClQ6N%2Bj5RENGjEmwzPOEiEEKxyPFUC6BZjZUm&X-Amz-Signature=95044fd41adc62fcd9d824424612da2500bde49a3eb65c4f41bf52801e88b59a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLV2E6SM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMC0mcwd9nfcPYoteDx3sT92cNkuRGjzfnbAJMwuQ5AiBMxLWexmLq4y%2Fmv%2Fr2Nr4ArgkB5AN%2FCNriVHsEh4UnwSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMyF%2FA0Hqqq8HUqyDDKtwDexP3JZyUEYYewD4QyzpItkVkkvr4DguSTkQ%2BUOv0x3u6pv3D2UiwoO43po9ztTIdj5StFfPAmyexB4%2BGzFDtg9WQIzewt5RCYHbHxITiyKdkRfffWIQJVUOhBh4RqT%2FlGMg1j8gPXRf6rlEAmzElwl2Po6f5lDIp5Rrq63NCr8Z7Ud5%2BRAme9F3bnYvjnbwPudC%2F6WhC6AaMU1qQTwVhx%2BKOF1WvCPsYS3ed78HilwcpbL7Pwz8sGROOdzUIRvuUpA0u75nFQdnv24hngfoZCbhIMXEd%2B9xMfip6NEoXv37%2FAN%2FivUcH%2BEKAw%2B4maCbiOgXlb5CjIkU5UuMRx0umEQ76d4vsu4sLOExejCUFehImxRaRiXo0F2WDGm1I7VZw%2B%2BnymVCX8KXPQTFFBKXvCoSL4mfo99a0AEOhYxjFpbjfvuU1hE3Kmb0KDpd9Dxr%2B7OFUzajLlAq1oE%2B7SnBt9m%2FBas5h83qgSKDxmpdFuBzcbjTZl3FvMLfzc%2Bltzo1QNnTwCujst97yAZjXkL50bTLodAvXf4QXuVAzdAc7F9rTUC%2B8C1j17IULr5pCfz%2FLZZv0mRvAFgK4X8JfIX7NgVJUjtHeqQlyY34ko8O8%2Bi%2FTPZ5c1MhgjOOzB4owtayAwAY6pgFSu9fuxV86DRiJTubgLGJipNfV7QDbdVxbJZfaazSiUlVJnOZknfdgOk2SmYeXh6lolnMTuvtJGHrQeVpTbXk86E4EG2O2772Nd3fT%2F3sfPSnoKgNy8HgA0j8a6OFdd6%2F8PPz%2FVjrcKO38X338%2FN0tidLvPLTcUnw%2FbXt4rk0jNi8WgU8UoFArB9RClQ6N%2Bj5RENGjEmwzPOEiEEKxyPFUC6BZjZUm&X-Amz-Signature=01c950e1669b26b60604bf396179c5004b89e401d0a0cf08d225d8232e461a62&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLV2E6SM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMC0mcwd9nfcPYoteDx3sT92cNkuRGjzfnbAJMwuQ5AiBMxLWexmLq4y%2Fmv%2Fr2Nr4ArgkB5AN%2FCNriVHsEh4UnwSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMyF%2FA0Hqqq8HUqyDDKtwDexP3JZyUEYYewD4QyzpItkVkkvr4DguSTkQ%2BUOv0x3u6pv3D2UiwoO43po9ztTIdj5StFfPAmyexB4%2BGzFDtg9WQIzewt5RCYHbHxITiyKdkRfffWIQJVUOhBh4RqT%2FlGMg1j8gPXRf6rlEAmzElwl2Po6f5lDIp5Rrq63NCr8Z7Ud5%2BRAme9F3bnYvjnbwPudC%2F6WhC6AaMU1qQTwVhx%2BKOF1WvCPsYS3ed78HilwcpbL7Pwz8sGROOdzUIRvuUpA0u75nFQdnv24hngfoZCbhIMXEd%2B9xMfip6NEoXv37%2FAN%2FivUcH%2BEKAw%2B4maCbiOgXlb5CjIkU5UuMRx0umEQ76d4vsu4sLOExejCUFehImxRaRiXo0F2WDGm1I7VZw%2B%2BnymVCX8KXPQTFFBKXvCoSL4mfo99a0AEOhYxjFpbjfvuU1hE3Kmb0KDpd9Dxr%2B7OFUzajLlAq1oE%2B7SnBt9m%2FBas5h83qgSKDxmpdFuBzcbjTZl3FvMLfzc%2Bltzo1QNnTwCujst97yAZjXkL50bTLodAvXf4QXuVAzdAc7F9rTUC%2B8C1j17IULr5pCfz%2FLZZv0mRvAFgK4X8JfIX7NgVJUjtHeqQlyY34ko8O8%2Bi%2FTPZ5c1MhgjOOzB4owtayAwAY6pgFSu9fuxV86DRiJTubgLGJipNfV7QDbdVxbJZfaazSiUlVJnOZknfdgOk2SmYeXh6lolnMTuvtJGHrQeVpTbXk86E4EG2O2772Nd3fT%2F3sfPSnoKgNy8HgA0j8a6OFdd6%2F8PPz%2FVjrcKO38X338%2FN0tidLvPLTcUnw%2FbXt4rk0jNi8WgU8UoFArB9RClQ6N%2Bj5RENGjEmwzPOEiEEKxyPFUC6BZjZUm&X-Amz-Signature=f0c5ca7c855c978980a686b58590f623ecc451f1eb881f1790ac46649ee6b6bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLV2E6SM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMC0mcwd9nfcPYoteDx3sT92cNkuRGjzfnbAJMwuQ5AiBMxLWexmLq4y%2Fmv%2Fr2Nr4ArgkB5AN%2FCNriVHsEh4UnwSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMyF%2FA0Hqqq8HUqyDDKtwDexP3JZyUEYYewD4QyzpItkVkkvr4DguSTkQ%2BUOv0x3u6pv3D2UiwoO43po9ztTIdj5StFfPAmyexB4%2BGzFDtg9WQIzewt5RCYHbHxITiyKdkRfffWIQJVUOhBh4RqT%2FlGMg1j8gPXRf6rlEAmzElwl2Po6f5lDIp5Rrq63NCr8Z7Ud5%2BRAme9F3bnYvjnbwPudC%2F6WhC6AaMU1qQTwVhx%2BKOF1WvCPsYS3ed78HilwcpbL7Pwz8sGROOdzUIRvuUpA0u75nFQdnv24hngfoZCbhIMXEd%2B9xMfip6NEoXv37%2FAN%2FivUcH%2BEKAw%2B4maCbiOgXlb5CjIkU5UuMRx0umEQ76d4vsu4sLOExejCUFehImxRaRiXo0F2WDGm1I7VZw%2B%2BnymVCX8KXPQTFFBKXvCoSL4mfo99a0AEOhYxjFpbjfvuU1hE3Kmb0KDpd9Dxr%2B7OFUzajLlAq1oE%2B7SnBt9m%2FBas5h83qgSKDxmpdFuBzcbjTZl3FvMLfzc%2Bltzo1QNnTwCujst97yAZjXkL50bTLodAvXf4QXuVAzdAc7F9rTUC%2B8C1j17IULr5pCfz%2FLZZv0mRvAFgK4X8JfIX7NgVJUjtHeqQlyY34ko8O8%2Bi%2FTPZ5c1MhgjOOzB4owtayAwAY6pgFSu9fuxV86DRiJTubgLGJipNfV7QDbdVxbJZfaazSiUlVJnOZknfdgOk2SmYeXh6lolnMTuvtJGHrQeVpTbXk86E4EG2O2772Nd3fT%2F3sfPSnoKgNy8HgA0j8a6OFdd6%2F8PPz%2FVjrcKO38X338%2FN0tidLvPLTcUnw%2FbXt4rk0jNi8WgU8UoFArB9RClQ6N%2Bj5RENGjEmwzPOEiEEKxyPFUC6BZjZUm&X-Amz-Signature=8e9f5c798d0285d6cf595982296e8a9a26c13af8ab067c1579d1e9c7c4185e09&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLV2E6SM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMC0mcwd9nfcPYoteDx3sT92cNkuRGjzfnbAJMwuQ5AiBMxLWexmLq4y%2Fmv%2Fr2Nr4ArgkB5AN%2FCNriVHsEh4UnwSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMyF%2FA0Hqqq8HUqyDDKtwDexP3JZyUEYYewD4QyzpItkVkkvr4DguSTkQ%2BUOv0x3u6pv3D2UiwoO43po9ztTIdj5StFfPAmyexB4%2BGzFDtg9WQIzewt5RCYHbHxITiyKdkRfffWIQJVUOhBh4RqT%2FlGMg1j8gPXRf6rlEAmzElwl2Po6f5lDIp5Rrq63NCr8Z7Ud5%2BRAme9F3bnYvjnbwPudC%2F6WhC6AaMU1qQTwVhx%2BKOF1WvCPsYS3ed78HilwcpbL7Pwz8sGROOdzUIRvuUpA0u75nFQdnv24hngfoZCbhIMXEd%2B9xMfip6NEoXv37%2FAN%2FivUcH%2BEKAw%2B4maCbiOgXlb5CjIkU5UuMRx0umEQ76d4vsu4sLOExejCUFehImxRaRiXo0F2WDGm1I7VZw%2B%2BnymVCX8KXPQTFFBKXvCoSL4mfo99a0AEOhYxjFpbjfvuU1hE3Kmb0KDpd9Dxr%2B7OFUzajLlAq1oE%2B7SnBt9m%2FBas5h83qgSKDxmpdFuBzcbjTZl3FvMLfzc%2Bltzo1QNnTwCujst97yAZjXkL50bTLodAvXf4QXuVAzdAc7F9rTUC%2B8C1j17IULr5pCfz%2FLZZv0mRvAFgK4X8JfIX7NgVJUjtHeqQlyY34ko8O8%2Bi%2FTPZ5c1MhgjOOzB4owtayAwAY6pgFSu9fuxV86DRiJTubgLGJipNfV7QDbdVxbJZfaazSiUlVJnOZknfdgOk2SmYeXh6lolnMTuvtJGHrQeVpTbXk86E4EG2O2772Nd3fT%2F3sfPSnoKgNy8HgA0j8a6OFdd6%2F8PPz%2FVjrcKO38X338%2FN0tidLvPLTcUnw%2FbXt4rk0jNi8WgU8UoFArB9RClQ6N%2Bj5RENGjEmwzPOEiEEKxyPFUC6BZjZUm&X-Amz-Signature=da6b51e8fe88f0b856f2e26be897ad02cbfa7eef476ba9160654f361dc213f14&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLV2E6SM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMC0mcwd9nfcPYoteDx3sT92cNkuRGjzfnbAJMwuQ5AiBMxLWexmLq4y%2Fmv%2Fr2Nr4ArgkB5AN%2FCNriVHsEh4UnwSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMyF%2FA0Hqqq8HUqyDDKtwDexP3JZyUEYYewD4QyzpItkVkkvr4DguSTkQ%2BUOv0x3u6pv3D2UiwoO43po9ztTIdj5StFfPAmyexB4%2BGzFDtg9WQIzewt5RCYHbHxITiyKdkRfffWIQJVUOhBh4RqT%2FlGMg1j8gPXRf6rlEAmzElwl2Po6f5lDIp5Rrq63NCr8Z7Ud5%2BRAme9F3bnYvjnbwPudC%2F6WhC6AaMU1qQTwVhx%2BKOF1WvCPsYS3ed78HilwcpbL7Pwz8sGROOdzUIRvuUpA0u75nFQdnv24hngfoZCbhIMXEd%2B9xMfip6NEoXv37%2FAN%2FivUcH%2BEKAw%2B4maCbiOgXlb5CjIkU5UuMRx0umEQ76d4vsu4sLOExejCUFehImxRaRiXo0F2WDGm1I7VZw%2B%2BnymVCX8KXPQTFFBKXvCoSL4mfo99a0AEOhYxjFpbjfvuU1hE3Kmb0KDpd9Dxr%2B7OFUzajLlAq1oE%2B7SnBt9m%2FBas5h83qgSKDxmpdFuBzcbjTZl3FvMLfzc%2Bltzo1QNnTwCujst97yAZjXkL50bTLodAvXf4QXuVAzdAc7F9rTUC%2B8C1j17IULr5pCfz%2FLZZv0mRvAFgK4X8JfIX7NgVJUjtHeqQlyY34ko8O8%2Bi%2FTPZ5c1MhgjOOzB4owtayAwAY6pgFSu9fuxV86DRiJTubgLGJipNfV7QDbdVxbJZfaazSiUlVJnOZknfdgOk2SmYeXh6lolnMTuvtJGHrQeVpTbXk86E4EG2O2772Nd3fT%2F3sfPSnoKgNy8HgA0j8a6OFdd6%2F8PPz%2FVjrcKO38X338%2FN0tidLvPLTcUnw%2FbXt4rk0jNi8WgU8UoFArB9RClQ6N%2Bj5RENGjEmwzPOEiEEKxyPFUC6BZjZUm&X-Amz-Signature=30ebdff734b21b747d31e380a1a3b865b09b7755a7b9cf002d17b2a33fb6d980&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
