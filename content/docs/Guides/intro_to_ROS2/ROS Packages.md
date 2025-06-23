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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U26TEN2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDtY3JPsij1879nzyQZR8hI%2FxasgiBM0g6%2FW5hWVBhqBAIgQLmhREtylOdHUdbrfkHpQTKXMuG9xfsDPO%2Bk93FwtAoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAm7qu3uSNGsJAsIHyrcA710CFlnJEBdR%2FjP0%2FQ%2BkN9n7kXsH408TBABjS1d4MyDBHmTYISMDj6XEaVUWMMHQUpRBEI44t9jWu7Ed4SYsM%2BeF9lHJ8vpA6rbCXdU33bxmtAKQe2m%2FTIQfXpCK8Ns1JNYVwefdKpalJMbFFg19XNBpWN9UfjYrCXeuPOc0iS1%2BLhFgnpomArUsocNATcowcwBLuR8a9ub89a9qDTcZmRNrpmY8XxhAI%2BW2K5lRvtSDvqu7K9km%2B7XD%2FT0J58UGrKmHeykSioNevwFIadDW64tgpgW0RxY4QA9FwiBHxBnTO%2Bei2TOsS3ZkcZuYZjVfY2WxnwyKcMC8BILtr%2FZ77PwWo0mK5lY6YzbX9EKDOvR2vFuLf8w7c%2F6TI%2BgFl8DNUzm8PyuMK5oamsps4%2FVGbdMvU2X7XIk6Bwp2%2FRq7jXCGjmayiUQor6H7Y6jRb7TMuoi8Jq1mpOYqTtSqryIv8R4jzVgzCWbOd0ScwKK4WVjspS6G96h4f8d1SGGU8JYgCqC6hEIbugCuyFK96who4hoHkGgzYtSlMv4mEujS6m1dG5jL3YQ%2B5WNte%2BgzDvanhnmhMPqJLbejJb%2BuBM5DTM490ImhtibuIykTjt5la%2FGQ6dGJOTKX0m3dYF7MPaV5cIGOqUBZTo662L9Uq9HwnUnuiFgxeWByPRyasyOUcveMfC%2FycKzIzGzHfh9Tp3r7ShXsJWcliszLVs8HBpkUdy2Z89bBUMkjfIiH73aBeg1taGNuPVUnA3SgQvPUKOAPy5ZD%2Fwos0xvrNRvWxa0lPsmtm%2FlGAA1m71BSmCwu%2Bu8en6Xsz682VIXhRXbiin1Y35CAwaZQq5YJsJPRWBtXd5WnKtw3pFSwHZc&X-Amz-Signature=83382f6e48e61f494fb18beac8a17a2cb51f2f8115da9413f7a68db3f6bfca08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U26TEN2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDtY3JPsij1879nzyQZR8hI%2FxasgiBM0g6%2FW5hWVBhqBAIgQLmhREtylOdHUdbrfkHpQTKXMuG9xfsDPO%2Bk93FwtAoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAm7qu3uSNGsJAsIHyrcA710CFlnJEBdR%2FjP0%2FQ%2BkN9n7kXsH408TBABjS1d4MyDBHmTYISMDj6XEaVUWMMHQUpRBEI44t9jWu7Ed4SYsM%2BeF9lHJ8vpA6rbCXdU33bxmtAKQe2m%2FTIQfXpCK8Ns1JNYVwefdKpalJMbFFg19XNBpWN9UfjYrCXeuPOc0iS1%2BLhFgnpomArUsocNATcowcwBLuR8a9ub89a9qDTcZmRNrpmY8XxhAI%2BW2K5lRvtSDvqu7K9km%2B7XD%2FT0J58UGrKmHeykSioNevwFIadDW64tgpgW0RxY4QA9FwiBHxBnTO%2Bei2TOsS3ZkcZuYZjVfY2WxnwyKcMC8BILtr%2FZ77PwWo0mK5lY6YzbX9EKDOvR2vFuLf8w7c%2F6TI%2BgFl8DNUzm8PyuMK5oamsps4%2FVGbdMvU2X7XIk6Bwp2%2FRq7jXCGjmayiUQor6H7Y6jRb7TMuoi8Jq1mpOYqTtSqryIv8R4jzVgzCWbOd0ScwKK4WVjspS6G96h4f8d1SGGU8JYgCqC6hEIbugCuyFK96who4hoHkGgzYtSlMv4mEujS6m1dG5jL3YQ%2B5WNte%2BgzDvanhnmhMPqJLbejJb%2BuBM5DTM490ImhtibuIykTjt5la%2FGQ6dGJOTKX0m3dYF7MPaV5cIGOqUBZTo662L9Uq9HwnUnuiFgxeWByPRyasyOUcveMfC%2FycKzIzGzHfh9Tp3r7ShXsJWcliszLVs8HBpkUdy2Z89bBUMkjfIiH73aBeg1taGNuPVUnA3SgQvPUKOAPy5ZD%2Fwos0xvrNRvWxa0lPsmtm%2FlGAA1m71BSmCwu%2Bu8en6Xsz682VIXhRXbiin1Y35CAwaZQq5YJsJPRWBtXd5WnKtw3pFSwHZc&X-Amz-Signature=96f3860f30fc4d9f5c301bccbde9474bcac07398d4aa25c044fcf912334c5b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U26TEN2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDtY3JPsij1879nzyQZR8hI%2FxasgiBM0g6%2FW5hWVBhqBAIgQLmhREtylOdHUdbrfkHpQTKXMuG9xfsDPO%2Bk93FwtAoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAm7qu3uSNGsJAsIHyrcA710CFlnJEBdR%2FjP0%2FQ%2BkN9n7kXsH408TBABjS1d4MyDBHmTYISMDj6XEaVUWMMHQUpRBEI44t9jWu7Ed4SYsM%2BeF9lHJ8vpA6rbCXdU33bxmtAKQe2m%2FTIQfXpCK8Ns1JNYVwefdKpalJMbFFg19XNBpWN9UfjYrCXeuPOc0iS1%2BLhFgnpomArUsocNATcowcwBLuR8a9ub89a9qDTcZmRNrpmY8XxhAI%2BW2K5lRvtSDvqu7K9km%2B7XD%2FT0J58UGrKmHeykSioNevwFIadDW64tgpgW0RxY4QA9FwiBHxBnTO%2Bei2TOsS3ZkcZuYZjVfY2WxnwyKcMC8BILtr%2FZ77PwWo0mK5lY6YzbX9EKDOvR2vFuLf8w7c%2F6TI%2BgFl8DNUzm8PyuMK5oamsps4%2FVGbdMvU2X7XIk6Bwp2%2FRq7jXCGjmayiUQor6H7Y6jRb7TMuoi8Jq1mpOYqTtSqryIv8R4jzVgzCWbOd0ScwKK4WVjspS6G96h4f8d1SGGU8JYgCqC6hEIbugCuyFK96who4hoHkGgzYtSlMv4mEujS6m1dG5jL3YQ%2B5WNte%2BgzDvanhnmhMPqJLbejJb%2BuBM5DTM490ImhtibuIykTjt5la%2FGQ6dGJOTKX0m3dYF7MPaV5cIGOqUBZTo662L9Uq9HwnUnuiFgxeWByPRyasyOUcveMfC%2FycKzIzGzHfh9Tp3r7ShXsJWcliszLVs8HBpkUdy2Z89bBUMkjfIiH73aBeg1taGNuPVUnA3SgQvPUKOAPy5ZD%2Fwos0xvrNRvWxa0lPsmtm%2FlGAA1m71BSmCwu%2Bu8en6Xsz682VIXhRXbiin1Y35CAwaZQq5YJsJPRWBtXd5WnKtw3pFSwHZc&X-Amz-Signature=392633beb95b487149c6c74cc613e66672e40b66f51a946af2c8a5b80a9b675c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U26TEN2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDtY3JPsij1879nzyQZR8hI%2FxasgiBM0g6%2FW5hWVBhqBAIgQLmhREtylOdHUdbrfkHpQTKXMuG9xfsDPO%2Bk93FwtAoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAm7qu3uSNGsJAsIHyrcA710CFlnJEBdR%2FjP0%2FQ%2BkN9n7kXsH408TBABjS1d4MyDBHmTYISMDj6XEaVUWMMHQUpRBEI44t9jWu7Ed4SYsM%2BeF9lHJ8vpA6rbCXdU33bxmtAKQe2m%2FTIQfXpCK8Ns1JNYVwefdKpalJMbFFg19XNBpWN9UfjYrCXeuPOc0iS1%2BLhFgnpomArUsocNATcowcwBLuR8a9ub89a9qDTcZmRNrpmY8XxhAI%2BW2K5lRvtSDvqu7K9km%2B7XD%2FT0J58UGrKmHeykSioNevwFIadDW64tgpgW0RxY4QA9FwiBHxBnTO%2Bei2TOsS3ZkcZuYZjVfY2WxnwyKcMC8BILtr%2FZ77PwWo0mK5lY6YzbX9EKDOvR2vFuLf8w7c%2F6TI%2BgFl8DNUzm8PyuMK5oamsps4%2FVGbdMvU2X7XIk6Bwp2%2FRq7jXCGjmayiUQor6H7Y6jRb7TMuoi8Jq1mpOYqTtSqryIv8R4jzVgzCWbOd0ScwKK4WVjspS6G96h4f8d1SGGU8JYgCqC6hEIbugCuyFK96who4hoHkGgzYtSlMv4mEujS6m1dG5jL3YQ%2B5WNte%2BgzDvanhnmhMPqJLbejJb%2BuBM5DTM490ImhtibuIykTjt5la%2FGQ6dGJOTKX0m3dYF7MPaV5cIGOqUBZTo662L9Uq9HwnUnuiFgxeWByPRyasyOUcveMfC%2FycKzIzGzHfh9Tp3r7ShXsJWcliszLVs8HBpkUdy2Z89bBUMkjfIiH73aBeg1taGNuPVUnA3SgQvPUKOAPy5ZD%2Fwos0xvrNRvWxa0lPsmtm%2FlGAA1m71BSmCwu%2Bu8en6Xsz682VIXhRXbiin1Y35CAwaZQq5YJsJPRWBtXd5WnKtw3pFSwHZc&X-Amz-Signature=e66f701f2ebc48b458b27009efd2944c8bcb557884c1862482c05f640abeac0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U26TEN2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDtY3JPsij1879nzyQZR8hI%2FxasgiBM0g6%2FW5hWVBhqBAIgQLmhREtylOdHUdbrfkHpQTKXMuG9xfsDPO%2Bk93FwtAoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAm7qu3uSNGsJAsIHyrcA710CFlnJEBdR%2FjP0%2FQ%2BkN9n7kXsH408TBABjS1d4MyDBHmTYISMDj6XEaVUWMMHQUpRBEI44t9jWu7Ed4SYsM%2BeF9lHJ8vpA6rbCXdU33bxmtAKQe2m%2FTIQfXpCK8Ns1JNYVwefdKpalJMbFFg19XNBpWN9UfjYrCXeuPOc0iS1%2BLhFgnpomArUsocNATcowcwBLuR8a9ub89a9qDTcZmRNrpmY8XxhAI%2BW2K5lRvtSDvqu7K9km%2B7XD%2FT0J58UGrKmHeykSioNevwFIadDW64tgpgW0RxY4QA9FwiBHxBnTO%2Bei2TOsS3ZkcZuYZjVfY2WxnwyKcMC8BILtr%2FZ77PwWo0mK5lY6YzbX9EKDOvR2vFuLf8w7c%2F6TI%2BgFl8DNUzm8PyuMK5oamsps4%2FVGbdMvU2X7XIk6Bwp2%2FRq7jXCGjmayiUQor6H7Y6jRb7TMuoi8Jq1mpOYqTtSqryIv8R4jzVgzCWbOd0ScwKK4WVjspS6G96h4f8d1SGGU8JYgCqC6hEIbugCuyFK96who4hoHkGgzYtSlMv4mEujS6m1dG5jL3YQ%2B5WNte%2BgzDvanhnmhMPqJLbejJb%2BuBM5DTM490ImhtibuIykTjt5la%2FGQ6dGJOTKX0m3dYF7MPaV5cIGOqUBZTo662L9Uq9HwnUnuiFgxeWByPRyasyOUcveMfC%2FycKzIzGzHfh9Tp3r7ShXsJWcliszLVs8HBpkUdy2Z89bBUMkjfIiH73aBeg1taGNuPVUnA3SgQvPUKOAPy5ZD%2Fwos0xvrNRvWxa0lPsmtm%2FlGAA1m71BSmCwu%2Bu8en6Xsz682VIXhRXbiin1Y35CAwaZQq5YJsJPRWBtXd5WnKtw3pFSwHZc&X-Amz-Signature=dd9812af653eb8335951744127f733f4194bf0c7c582711e00dcbf64841ea756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U26TEN2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDtY3JPsij1879nzyQZR8hI%2FxasgiBM0g6%2FW5hWVBhqBAIgQLmhREtylOdHUdbrfkHpQTKXMuG9xfsDPO%2Bk93FwtAoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAm7qu3uSNGsJAsIHyrcA710CFlnJEBdR%2FjP0%2FQ%2BkN9n7kXsH408TBABjS1d4MyDBHmTYISMDj6XEaVUWMMHQUpRBEI44t9jWu7Ed4SYsM%2BeF9lHJ8vpA6rbCXdU33bxmtAKQe2m%2FTIQfXpCK8Ns1JNYVwefdKpalJMbFFg19XNBpWN9UfjYrCXeuPOc0iS1%2BLhFgnpomArUsocNATcowcwBLuR8a9ub89a9qDTcZmRNrpmY8XxhAI%2BW2K5lRvtSDvqu7K9km%2B7XD%2FT0J58UGrKmHeykSioNevwFIadDW64tgpgW0RxY4QA9FwiBHxBnTO%2Bei2TOsS3ZkcZuYZjVfY2WxnwyKcMC8BILtr%2FZ77PwWo0mK5lY6YzbX9EKDOvR2vFuLf8w7c%2F6TI%2BgFl8DNUzm8PyuMK5oamsps4%2FVGbdMvU2X7XIk6Bwp2%2FRq7jXCGjmayiUQor6H7Y6jRb7TMuoi8Jq1mpOYqTtSqryIv8R4jzVgzCWbOd0ScwKK4WVjspS6G96h4f8d1SGGU8JYgCqC6hEIbugCuyFK96who4hoHkGgzYtSlMv4mEujS6m1dG5jL3YQ%2B5WNte%2BgzDvanhnmhMPqJLbejJb%2BuBM5DTM490ImhtibuIykTjt5la%2FGQ6dGJOTKX0m3dYF7MPaV5cIGOqUBZTo662L9Uq9HwnUnuiFgxeWByPRyasyOUcveMfC%2FycKzIzGzHfh9Tp3r7ShXsJWcliszLVs8HBpkUdy2Z89bBUMkjfIiH73aBeg1taGNuPVUnA3SgQvPUKOAPy5ZD%2Fwos0xvrNRvWxa0lPsmtm%2FlGAA1m71BSmCwu%2Bu8en6Xsz682VIXhRXbiin1Y35CAwaZQq5YJsJPRWBtXd5WnKtw3pFSwHZc&X-Amz-Signature=b524b0dd4744422cf009e2dee38c28561091b92378bcb03ea87a9d2c71a52177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U26TEN2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDtY3JPsij1879nzyQZR8hI%2FxasgiBM0g6%2FW5hWVBhqBAIgQLmhREtylOdHUdbrfkHpQTKXMuG9xfsDPO%2Bk93FwtAoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAm7qu3uSNGsJAsIHyrcA710CFlnJEBdR%2FjP0%2FQ%2BkN9n7kXsH408TBABjS1d4MyDBHmTYISMDj6XEaVUWMMHQUpRBEI44t9jWu7Ed4SYsM%2BeF9lHJ8vpA6rbCXdU33bxmtAKQe2m%2FTIQfXpCK8Ns1JNYVwefdKpalJMbFFg19XNBpWN9UfjYrCXeuPOc0iS1%2BLhFgnpomArUsocNATcowcwBLuR8a9ub89a9qDTcZmRNrpmY8XxhAI%2BW2K5lRvtSDvqu7K9km%2B7XD%2FT0J58UGrKmHeykSioNevwFIadDW64tgpgW0RxY4QA9FwiBHxBnTO%2Bei2TOsS3ZkcZuYZjVfY2WxnwyKcMC8BILtr%2FZ77PwWo0mK5lY6YzbX9EKDOvR2vFuLf8w7c%2F6TI%2BgFl8DNUzm8PyuMK5oamsps4%2FVGbdMvU2X7XIk6Bwp2%2FRq7jXCGjmayiUQor6H7Y6jRb7TMuoi8Jq1mpOYqTtSqryIv8R4jzVgzCWbOd0ScwKK4WVjspS6G96h4f8d1SGGU8JYgCqC6hEIbugCuyFK96who4hoHkGgzYtSlMv4mEujS6m1dG5jL3YQ%2B5WNte%2BgzDvanhnmhMPqJLbejJb%2BuBM5DTM490ImhtibuIykTjt5la%2FGQ6dGJOTKX0m3dYF7MPaV5cIGOqUBZTo662L9Uq9HwnUnuiFgxeWByPRyasyOUcveMfC%2FycKzIzGzHfh9Tp3r7ShXsJWcliszLVs8HBpkUdy2Z89bBUMkjfIiH73aBeg1taGNuPVUnA3SgQvPUKOAPy5ZD%2Fwos0xvrNRvWxa0lPsmtm%2FlGAA1m71BSmCwu%2Bu8en6Xsz682VIXhRXbiin1Y35CAwaZQq5YJsJPRWBtXd5WnKtw3pFSwHZc&X-Amz-Signature=f4e990ad7a981c553bc8d724d64e2cc7450205fcc77f2b7e18fb1082f7d20759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
