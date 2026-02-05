---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NFEUGE%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDWSrlOG6rmwOZ3yCZhQr44wkfUrmzDD%2FJ9qj4pQp1caQIhAPy1IVx4jG4Zzp3dKFdZ%2BxuuBdXNIRCtzI06mv7Wm0P9Kv8DCCIQABoMNjM3NDIzMTgzODA1IgwXVkJNEYs6AofBapsq3APXO4U6dDlNGwUc9LRQQUhw%2BhzUk0XwWrEAyZGAPrqesfiz0SifO37ll3DM14MAyNiLdNROtyN8aLsyrCxSGSCx8Ly3%2FcSm1VsmQDL%2BJ66gS0NW7bIrjX%2FNi4Gl%2BGRIBs1Sttz%2BGgP%2F7MfCSo4m1poKHmEdB4jbyJ6iJevfM4Q2DAQw0Fq2pUwENWWpnVnv0U2UyXZQY4HscMgvxqpSZV7r36iedSHueyB%2BidtAbBt%2Bspp9isQK4flk4DWFwt1F0BdOHruLBXgT6qA5YgReFSEUKV5qlIfhBa6eto1wa1D9rnGzwzvyB0HbKMUMGkDm%2Bu7TY2qrKuf8D9WeFjre7Rf2iPcVy63zP%2FmS4nG8YjAfntfFFf%2BIsJC6S8K6JYSDHooqOk6vayZLNFyHcr23bQpUSkGlsZ9IZ9OoE1dh%2FfH24V77Rbe3RYWYhstxPsaqE0c9cNSrvIka4W3%2Bh3QhWRYR4PdvedUkym4XbPWVXiNB3YGKPdLqrW803A%2Fs17g7qbND7w2CqLoYjuR5321reIML0imvQ2JySIXQbxU4lICLSr3mR0t6uqxSZ12QJFK9hAA9cZsUpazHDMgHq8Y5u4psGfOwsRoz%2FODWytTJUmsOOUXLIQKrq8fDHfsqsjDbzo%2FMBjqkAcM%2BXkXAVomlyhjKjXfV%2FNHon%2FXVmNxVkOY5OHqFng1XCyvL1kxQxsLt%2BjHeO8YdJ5G7DM0Xa7mIxa5HK0JjD%2BCJA4ggJKcdAKYKV6VjSiTiJGIhu10lPtoWU3udZpd69RTQa8DsCXptOh9mVVrH2xPogZ5z05nPdV3HyOl889VYRxgcQZSUqqzu3%2BYnnCxubPsQ7LH1PTlUEUCXVfpSSnVai2B1&X-Amz-Signature=54e63518de511eb4472300d89d3dbcc99f0e105184444aac57612801c4b55c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NFEUGE%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDWSrlOG6rmwOZ3yCZhQr44wkfUrmzDD%2FJ9qj4pQp1caQIhAPy1IVx4jG4Zzp3dKFdZ%2BxuuBdXNIRCtzI06mv7Wm0P9Kv8DCCIQABoMNjM3NDIzMTgzODA1IgwXVkJNEYs6AofBapsq3APXO4U6dDlNGwUc9LRQQUhw%2BhzUk0XwWrEAyZGAPrqesfiz0SifO37ll3DM14MAyNiLdNROtyN8aLsyrCxSGSCx8Ly3%2FcSm1VsmQDL%2BJ66gS0NW7bIrjX%2FNi4Gl%2BGRIBs1Sttz%2BGgP%2F7MfCSo4m1poKHmEdB4jbyJ6iJevfM4Q2DAQw0Fq2pUwENWWpnVnv0U2UyXZQY4HscMgvxqpSZV7r36iedSHueyB%2BidtAbBt%2Bspp9isQK4flk4DWFwt1F0BdOHruLBXgT6qA5YgReFSEUKV5qlIfhBa6eto1wa1D9rnGzwzvyB0HbKMUMGkDm%2Bu7TY2qrKuf8D9WeFjre7Rf2iPcVy63zP%2FmS4nG8YjAfntfFFf%2BIsJC6S8K6JYSDHooqOk6vayZLNFyHcr23bQpUSkGlsZ9IZ9OoE1dh%2FfH24V77Rbe3RYWYhstxPsaqE0c9cNSrvIka4W3%2Bh3QhWRYR4PdvedUkym4XbPWVXiNB3YGKPdLqrW803A%2Fs17g7qbND7w2CqLoYjuR5321reIML0imvQ2JySIXQbxU4lICLSr3mR0t6uqxSZ12QJFK9hAA9cZsUpazHDMgHq8Y5u4psGfOwsRoz%2FODWytTJUmsOOUXLIQKrq8fDHfsqsjDbzo%2FMBjqkAcM%2BXkXAVomlyhjKjXfV%2FNHon%2FXVmNxVkOY5OHqFng1XCyvL1kxQxsLt%2BjHeO8YdJ5G7DM0Xa7mIxa5HK0JjD%2BCJA4ggJKcdAKYKV6VjSiTiJGIhu10lPtoWU3udZpd69RTQa8DsCXptOh9mVVrH2xPogZ5z05nPdV3HyOl889VYRxgcQZSUqqzu3%2BYnnCxubPsQ7LH1PTlUEUCXVfpSSnVai2B1&X-Amz-Signature=7b6b34e395bc6675cf47827ff168390285d218c7ec3372e5b22bd003d3f72717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NFEUGE%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDWSrlOG6rmwOZ3yCZhQr44wkfUrmzDD%2FJ9qj4pQp1caQIhAPy1IVx4jG4Zzp3dKFdZ%2BxuuBdXNIRCtzI06mv7Wm0P9Kv8DCCIQABoMNjM3NDIzMTgzODA1IgwXVkJNEYs6AofBapsq3APXO4U6dDlNGwUc9LRQQUhw%2BhzUk0XwWrEAyZGAPrqesfiz0SifO37ll3DM14MAyNiLdNROtyN8aLsyrCxSGSCx8Ly3%2FcSm1VsmQDL%2BJ66gS0NW7bIrjX%2FNi4Gl%2BGRIBs1Sttz%2BGgP%2F7MfCSo4m1poKHmEdB4jbyJ6iJevfM4Q2DAQw0Fq2pUwENWWpnVnv0U2UyXZQY4HscMgvxqpSZV7r36iedSHueyB%2BidtAbBt%2Bspp9isQK4flk4DWFwt1F0BdOHruLBXgT6qA5YgReFSEUKV5qlIfhBa6eto1wa1D9rnGzwzvyB0HbKMUMGkDm%2Bu7TY2qrKuf8D9WeFjre7Rf2iPcVy63zP%2FmS4nG8YjAfntfFFf%2BIsJC6S8K6JYSDHooqOk6vayZLNFyHcr23bQpUSkGlsZ9IZ9OoE1dh%2FfH24V77Rbe3RYWYhstxPsaqE0c9cNSrvIka4W3%2Bh3QhWRYR4PdvedUkym4XbPWVXiNB3YGKPdLqrW803A%2Fs17g7qbND7w2CqLoYjuR5321reIML0imvQ2JySIXQbxU4lICLSr3mR0t6uqxSZ12QJFK9hAA9cZsUpazHDMgHq8Y5u4psGfOwsRoz%2FODWytTJUmsOOUXLIQKrq8fDHfsqsjDbzo%2FMBjqkAcM%2BXkXAVomlyhjKjXfV%2FNHon%2FXVmNxVkOY5OHqFng1XCyvL1kxQxsLt%2BjHeO8YdJ5G7DM0Xa7mIxa5HK0JjD%2BCJA4ggJKcdAKYKV6VjSiTiJGIhu10lPtoWU3udZpd69RTQa8DsCXptOh9mVVrH2xPogZ5z05nPdV3HyOl889VYRxgcQZSUqqzu3%2BYnnCxubPsQ7LH1PTlUEUCXVfpSSnVai2B1&X-Amz-Signature=00720d089616d6617c6ca865bc8aff276cf4cbecf9bf2999ca8b937849edf5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NFEUGE%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDWSrlOG6rmwOZ3yCZhQr44wkfUrmzDD%2FJ9qj4pQp1caQIhAPy1IVx4jG4Zzp3dKFdZ%2BxuuBdXNIRCtzI06mv7Wm0P9Kv8DCCIQABoMNjM3NDIzMTgzODA1IgwXVkJNEYs6AofBapsq3APXO4U6dDlNGwUc9LRQQUhw%2BhzUk0XwWrEAyZGAPrqesfiz0SifO37ll3DM14MAyNiLdNROtyN8aLsyrCxSGSCx8Ly3%2FcSm1VsmQDL%2BJ66gS0NW7bIrjX%2FNi4Gl%2BGRIBs1Sttz%2BGgP%2F7MfCSo4m1poKHmEdB4jbyJ6iJevfM4Q2DAQw0Fq2pUwENWWpnVnv0U2UyXZQY4HscMgvxqpSZV7r36iedSHueyB%2BidtAbBt%2Bspp9isQK4flk4DWFwt1F0BdOHruLBXgT6qA5YgReFSEUKV5qlIfhBa6eto1wa1D9rnGzwzvyB0HbKMUMGkDm%2Bu7TY2qrKuf8D9WeFjre7Rf2iPcVy63zP%2FmS4nG8YjAfntfFFf%2BIsJC6S8K6JYSDHooqOk6vayZLNFyHcr23bQpUSkGlsZ9IZ9OoE1dh%2FfH24V77Rbe3RYWYhstxPsaqE0c9cNSrvIka4W3%2Bh3QhWRYR4PdvedUkym4XbPWVXiNB3YGKPdLqrW803A%2Fs17g7qbND7w2CqLoYjuR5321reIML0imvQ2JySIXQbxU4lICLSr3mR0t6uqxSZ12QJFK9hAA9cZsUpazHDMgHq8Y5u4psGfOwsRoz%2FODWytTJUmsOOUXLIQKrq8fDHfsqsjDbzo%2FMBjqkAcM%2BXkXAVomlyhjKjXfV%2FNHon%2FXVmNxVkOY5OHqFng1XCyvL1kxQxsLt%2BjHeO8YdJ5G7DM0Xa7mIxa5HK0JjD%2BCJA4ggJKcdAKYKV6VjSiTiJGIhu10lPtoWU3udZpd69RTQa8DsCXptOh9mVVrH2xPogZ5z05nPdV3HyOl889VYRxgcQZSUqqzu3%2BYnnCxubPsQ7LH1PTlUEUCXVfpSSnVai2B1&X-Amz-Signature=0b48ef5bffa7895943ee1e803ea183fa09371abce0ebfa7704f2bea24e73d70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NFEUGE%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDWSrlOG6rmwOZ3yCZhQr44wkfUrmzDD%2FJ9qj4pQp1caQIhAPy1IVx4jG4Zzp3dKFdZ%2BxuuBdXNIRCtzI06mv7Wm0P9Kv8DCCIQABoMNjM3NDIzMTgzODA1IgwXVkJNEYs6AofBapsq3APXO4U6dDlNGwUc9LRQQUhw%2BhzUk0XwWrEAyZGAPrqesfiz0SifO37ll3DM14MAyNiLdNROtyN8aLsyrCxSGSCx8Ly3%2FcSm1VsmQDL%2BJ66gS0NW7bIrjX%2FNi4Gl%2BGRIBs1Sttz%2BGgP%2F7MfCSo4m1poKHmEdB4jbyJ6iJevfM4Q2DAQw0Fq2pUwENWWpnVnv0U2UyXZQY4HscMgvxqpSZV7r36iedSHueyB%2BidtAbBt%2Bspp9isQK4flk4DWFwt1F0BdOHruLBXgT6qA5YgReFSEUKV5qlIfhBa6eto1wa1D9rnGzwzvyB0HbKMUMGkDm%2Bu7TY2qrKuf8D9WeFjre7Rf2iPcVy63zP%2FmS4nG8YjAfntfFFf%2BIsJC6S8K6JYSDHooqOk6vayZLNFyHcr23bQpUSkGlsZ9IZ9OoE1dh%2FfH24V77Rbe3RYWYhstxPsaqE0c9cNSrvIka4W3%2Bh3QhWRYR4PdvedUkym4XbPWVXiNB3YGKPdLqrW803A%2Fs17g7qbND7w2CqLoYjuR5321reIML0imvQ2JySIXQbxU4lICLSr3mR0t6uqxSZ12QJFK9hAA9cZsUpazHDMgHq8Y5u4psGfOwsRoz%2FODWytTJUmsOOUXLIQKrq8fDHfsqsjDbzo%2FMBjqkAcM%2BXkXAVomlyhjKjXfV%2FNHon%2FXVmNxVkOY5OHqFng1XCyvL1kxQxsLt%2BjHeO8YdJ5G7DM0Xa7mIxa5HK0JjD%2BCJA4ggJKcdAKYKV6VjSiTiJGIhu10lPtoWU3udZpd69RTQa8DsCXptOh9mVVrH2xPogZ5z05nPdV3HyOl889VYRxgcQZSUqqzu3%2BYnnCxubPsQ7LH1PTlUEUCXVfpSSnVai2B1&X-Amz-Signature=676d9ff86ae9cf0f5df4ca796846fc6d6b35fb19af123c035f5fc31b268f532f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NFEUGE%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDWSrlOG6rmwOZ3yCZhQr44wkfUrmzDD%2FJ9qj4pQp1caQIhAPy1IVx4jG4Zzp3dKFdZ%2BxuuBdXNIRCtzI06mv7Wm0P9Kv8DCCIQABoMNjM3NDIzMTgzODA1IgwXVkJNEYs6AofBapsq3APXO4U6dDlNGwUc9LRQQUhw%2BhzUk0XwWrEAyZGAPrqesfiz0SifO37ll3DM14MAyNiLdNROtyN8aLsyrCxSGSCx8Ly3%2FcSm1VsmQDL%2BJ66gS0NW7bIrjX%2FNi4Gl%2BGRIBs1Sttz%2BGgP%2F7MfCSo4m1poKHmEdB4jbyJ6iJevfM4Q2DAQw0Fq2pUwENWWpnVnv0U2UyXZQY4HscMgvxqpSZV7r36iedSHueyB%2BidtAbBt%2Bspp9isQK4flk4DWFwt1F0BdOHruLBXgT6qA5YgReFSEUKV5qlIfhBa6eto1wa1D9rnGzwzvyB0HbKMUMGkDm%2Bu7TY2qrKuf8D9WeFjre7Rf2iPcVy63zP%2FmS4nG8YjAfntfFFf%2BIsJC6S8K6JYSDHooqOk6vayZLNFyHcr23bQpUSkGlsZ9IZ9OoE1dh%2FfH24V77Rbe3RYWYhstxPsaqE0c9cNSrvIka4W3%2Bh3QhWRYR4PdvedUkym4XbPWVXiNB3YGKPdLqrW803A%2Fs17g7qbND7w2CqLoYjuR5321reIML0imvQ2JySIXQbxU4lICLSr3mR0t6uqxSZ12QJFK9hAA9cZsUpazHDMgHq8Y5u4psGfOwsRoz%2FODWytTJUmsOOUXLIQKrq8fDHfsqsjDbzo%2FMBjqkAcM%2BXkXAVomlyhjKjXfV%2FNHon%2FXVmNxVkOY5OHqFng1XCyvL1kxQxsLt%2BjHeO8YdJ5G7DM0Xa7mIxa5HK0JjD%2BCJA4ggJKcdAKYKV6VjSiTiJGIhu10lPtoWU3udZpd69RTQa8DsCXptOh9mVVrH2xPogZ5z05nPdV3HyOl889VYRxgcQZSUqqzu3%2BYnnCxubPsQ7LH1PTlUEUCXVfpSSnVai2B1&X-Amz-Signature=a17b6d6d8581478a54457ad433e32f32ee762b3bad675b6c93d6fddf4b93a326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NFEUGE%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDWSrlOG6rmwOZ3yCZhQr44wkfUrmzDD%2FJ9qj4pQp1caQIhAPy1IVx4jG4Zzp3dKFdZ%2BxuuBdXNIRCtzI06mv7Wm0P9Kv8DCCIQABoMNjM3NDIzMTgzODA1IgwXVkJNEYs6AofBapsq3APXO4U6dDlNGwUc9LRQQUhw%2BhzUk0XwWrEAyZGAPrqesfiz0SifO37ll3DM14MAyNiLdNROtyN8aLsyrCxSGSCx8Ly3%2FcSm1VsmQDL%2BJ66gS0NW7bIrjX%2FNi4Gl%2BGRIBs1Sttz%2BGgP%2F7MfCSo4m1poKHmEdB4jbyJ6iJevfM4Q2DAQw0Fq2pUwENWWpnVnv0U2UyXZQY4HscMgvxqpSZV7r36iedSHueyB%2BidtAbBt%2Bspp9isQK4flk4DWFwt1F0BdOHruLBXgT6qA5YgReFSEUKV5qlIfhBa6eto1wa1D9rnGzwzvyB0HbKMUMGkDm%2Bu7TY2qrKuf8D9WeFjre7Rf2iPcVy63zP%2FmS4nG8YjAfntfFFf%2BIsJC6S8K6JYSDHooqOk6vayZLNFyHcr23bQpUSkGlsZ9IZ9OoE1dh%2FfH24V77Rbe3RYWYhstxPsaqE0c9cNSrvIka4W3%2Bh3QhWRYR4PdvedUkym4XbPWVXiNB3YGKPdLqrW803A%2Fs17g7qbND7w2CqLoYjuR5321reIML0imvQ2JySIXQbxU4lICLSr3mR0t6uqxSZ12QJFK9hAA9cZsUpazHDMgHq8Y5u4psGfOwsRoz%2FODWytTJUmsOOUXLIQKrq8fDHfsqsjDbzo%2FMBjqkAcM%2BXkXAVomlyhjKjXfV%2FNHon%2FXVmNxVkOY5OHqFng1XCyvL1kxQxsLt%2BjHeO8YdJ5G7DM0Xa7mIxa5HK0JjD%2BCJA4ggJKcdAKYKV6VjSiTiJGIhu10lPtoWU3udZpd69RTQa8DsCXptOh9mVVrH2xPogZ5z05nPdV3HyOl889VYRxgcQZSUqqzu3%2BYnnCxubPsQ7LH1PTlUEUCXVfpSSnVai2B1&X-Amz-Signature=7ba21cf6cab83cb91a7796ea5c297ca20e449c055bd159291d387cb2c1d9fb82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
