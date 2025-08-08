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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGB3L5ZD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDBzs62JqaOjtZJWv3M%2BBCRN24j1xpaUcuK4kUM4o81dQIhAM83nkWLMDpYPkvzWzrbCFPCB22Nr9ZXB7CRbg3wOXV6KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxErx%2BCsP3bC7FOiREq3AMECd37jbDLt8DfyBU6XqEYMKZbGmRXElFJaDJjU2UAj1YoaDb1586fwEYjbVMqfiOgM7V4XJer6UfHs934z8XOUJGJYxm4P40FgcjFdlMwTZNNwFdyPN04aV7zPqvpYucAT1rsYvj%2FWQCQA60ogQVyA%2FdIXmucj86ZuUwfGBfrPYJYba9GDbIPrvedYHRlx5vQ%2BwfQOPPFa9L1oymMUUVWzxb%2FM5wx8knqZyZ%2FMjVf5pacuVRSEeLw3CSv5SX205c8lzELWZ50azxb344IlnsDwhabRTqUfSclXa2gWp0qEpdzGTP0fJ6TgDa3BLjGeFt8bMR6Ols8uGunOhaCU4YGia6lqf67VZbv2aAykRpb31Vqqsm0RyQ19xw2%2FobkjeGB1uDGXONXh%2Bvu%2Bw81fvfhzCFUv6on5r6HeWmfy5DThNS6jAj2RevB49M%2BFdD2CTrtFVst3g53vW8clWcqGzGnfBhaL61P3s0E1ayRSQG9rG%2B7ddAJtcP10W0Pip1wK1yL1XIRPBGAKqBQiJcCc1sw4CSkbrVf8%2FolaskRiwICnCDa%2BWRJHJK6w3KUGPw44MuNoEcGaxIMB2PiFsrxUk5yOZiofVew9jJKd%2Bi4QVJcH9BfUYoMJxE%2BmTaYqTCwgtjEBjqkAbgrhmzPUfoLdjm0gLPKcrBLU8Z4xXDCcoUSmmRCx2q5%2FyEcnAuhIv99mHqLZHj94aDKPzH0pcQRm3bHvfqEGDdqO62BRysd8GS%2BZ4ltL4VXxEhNNP3l7v5U9mKIoNNXi093PnXPNZONORp8O31IWalydCin44s7UhT94L8dTWHwvVoSmoTV4kpB1ja4mSIO5mEU7XpCAMtnVQ3GDMkDttS887%2BN&X-Amz-Signature=b5856c66369c00dd882c1297849e7699739454ccdaedf1ec27d8ce4f2cf456aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGB3L5ZD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDBzs62JqaOjtZJWv3M%2BBCRN24j1xpaUcuK4kUM4o81dQIhAM83nkWLMDpYPkvzWzrbCFPCB22Nr9ZXB7CRbg3wOXV6KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxErx%2BCsP3bC7FOiREq3AMECd37jbDLt8DfyBU6XqEYMKZbGmRXElFJaDJjU2UAj1YoaDb1586fwEYjbVMqfiOgM7V4XJer6UfHs934z8XOUJGJYxm4P40FgcjFdlMwTZNNwFdyPN04aV7zPqvpYucAT1rsYvj%2FWQCQA60ogQVyA%2FdIXmucj86ZuUwfGBfrPYJYba9GDbIPrvedYHRlx5vQ%2BwfQOPPFa9L1oymMUUVWzxb%2FM5wx8knqZyZ%2FMjVf5pacuVRSEeLw3CSv5SX205c8lzELWZ50azxb344IlnsDwhabRTqUfSclXa2gWp0qEpdzGTP0fJ6TgDa3BLjGeFt8bMR6Ols8uGunOhaCU4YGia6lqf67VZbv2aAykRpb31Vqqsm0RyQ19xw2%2FobkjeGB1uDGXONXh%2Bvu%2Bw81fvfhzCFUv6on5r6HeWmfy5DThNS6jAj2RevB49M%2BFdD2CTrtFVst3g53vW8clWcqGzGnfBhaL61P3s0E1ayRSQG9rG%2B7ddAJtcP10W0Pip1wK1yL1XIRPBGAKqBQiJcCc1sw4CSkbrVf8%2FolaskRiwICnCDa%2BWRJHJK6w3KUGPw44MuNoEcGaxIMB2PiFsrxUk5yOZiofVew9jJKd%2Bi4QVJcH9BfUYoMJxE%2BmTaYqTCwgtjEBjqkAbgrhmzPUfoLdjm0gLPKcrBLU8Z4xXDCcoUSmmRCx2q5%2FyEcnAuhIv99mHqLZHj94aDKPzH0pcQRm3bHvfqEGDdqO62BRysd8GS%2BZ4ltL4VXxEhNNP3l7v5U9mKIoNNXi093PnXPNZONORp8O31IWalydCin44s7UhT94L8dTWHwvVoSmoTV4kpB1ja4mSIO5mEU7XpCAMtnVQ3GDMkDttS887%2BN&X-Amz-Signature=9fbb4c05536c069d7a144512e8b7d2a0ab70e31aa5d107fdc753d0b8165396af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGB3L5ZD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDBzs62JqaOjtZJWv3M%2BBCRN24j1xpaUcuK4kUM4o81dQIhAM83nkWLMDpYPkvzWzrbCFPCB22Nr9ZXB7CRbg3wOXV6KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxErx%2BCsP3bC7FOiREq3AMECd37jbDLt8DfyBU6XqEYMKZbGmRXElFJaDJjU2UAj1YoaDb1586fwEYjbVMqfiOgM7V4XJer6UfHs934z8XOUJGJYxm4P40FgcjFdlMwTZNNwFdyPN04aV7zPqvpYucAT1rsYvj%2FWQCQA60ogQVyA%2FdIXmucj86ZuUwfGBfrPYJYba9GDbIPrvedYHRlx5vQ%2BwfQOPPFa9L1oymMUUVWzxb%2FM5wx8knqZyZ%2FMjVf5pacuVRSEeLw3CSv5SX205c8lzELWZ50azxb344IlnsDwhabRTqUfSclXa2gWp0qEpdzGTP0fJ6TgDa3BLjGeFt8bMR6Ols8uGunOhaCU4YGia6lqf67VZbv2aAykRpb31Vqqsm0RyQ19xw2%2FobkjeGB1uDGXONXh%2Bvu%2Bw81fvfhzCFUv6on5r6HeWmfy5DThNS6jAj2RevB49M%2BFdD2CTrtFVst3g53vW8clWcqGzGnfBhaL61P3s0E1ayRSQG9rG%2B7ddAJtcP10W0Pip1wK1yL1XIRPBGAKqBQiJcCc1sw4CSkbrVf8%2FolaskRiwICnCDa%2BWRJHJK6w3KUGPw44MuNoEcGaxIMB2PiFsrxUk5yOZiofVew9jJKd%2Bi4QVJcH9BfUYoMJxE%2BmTaYqTCwgtjEBjqkAbgrhmzPUfoLdjm0gLPKcrBLU8Z4xXDCcoUSmmRCx2q5%2FyEcnAuhIv99mHqLZHj94aDKPzH0pcQRm3bHvfqEGDdqO62BRysd8GS%2BZ4ltL4VXxEhNNP3l7v5U9mKIoNNXi093PnXPNZONORp8O31IWalydCin44s7UhT94L8dTWHwvVoSmoTV4kpB1ja4mSIO5mEU7XpCAMtnVQ3GDMkDttS887%2BN&X-Amz-Signature=3b3a27f5c4a6f761d22a6b0ff21514c523badd3de2190178ff9dbaa34d259b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGB3L5ZD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDBzs62JqaOjtZJWv3M%2BBCRN24j1xpaUcuK4kUM4o81dQIhAM83nkWLMDpYPkvzWzrbCFPCB22Nr9ZXB7CRbg3wOXV6KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxErx%2BCsP3bC7FOiREq3AMECd37jbDLt8DfyBU6XqEYMKZbGmRXElFJaDJjU2UAj1YoaDb1586fwEYjbVMqfiOgM7V4XJer6UfHs934z8XOUJGJYxm4P40FgcjFdlMwTZNNwFdyPN04aV7zPqvpYucAT1rsYvj%2FWQCQA60ogQVyA%2FdIXmucj86ZuUwfGBfrPYJYba9GDbIPrvedYHRlx5vQ%2BwfQOPPFa9L1oymMUUVWzxb%2FM5wx8knqZyZ%2FMjVf5pacuVRSEeLw3CSv5SX205c8lzELWZ50azxb344IlnsDwhabRTqUfSclXa2gWp0qEpdzGTP0fJ6TgDa3BLjGeFt8bMR6Ols8uGunOhaCU4YGia6lqf67VZbv2aAykRpb31Vqqsm0RyQ19xw2%2FobkjeGB1uDGXONXh%2Bvu%2Bw81fvfhzCFUv6on5r6HeWmfy5DThNS6jAj2RevB49M%2BFdD2CTrtFVst3g53vW8clWcqGzGnfBhaL61P3s0E1ayRSQG9rG%2B7ddAJtcP10W0Pip1wK1yL1XIRPBGAKqBQiJcCc1sw4CSkbrVf8%2FolaskRiwICnCDa%2BWRJHJK6w3KUGPw44MuNoEcGaxIMB2PiFsrxUk5yOZiofVew9jJKd%2Bi4QVJcH9BfUYoMJxE%2BmTaYqTCwgtjEBjqkAbgrhmzPUfoLdjm0gLPKcrBLU8Z4xXDCcoUSmmRCx2q5%2FyEcnAuhIv99mHqLZHj94aDKPzH0pcQRm3bHvfqEGDdqO62BRysd8GS%2BZ4ltL4VXxEhNNP3l7v5U9mKIoNNXi093PnXPNZONORp8O31IWalydCin44s7UhT94L8dTWHwvVoSmoTV4kpB1ja4mSIO5mEU7XpCAMtnVQ3GDMkDttS887%2BN&X-Amz-Signature=2ef89d0fafd673513df3cc4be129e450c47ff7f009d54738b18bd86bed585469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGB3L5ZD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDBzs62JqaOjtZJWv3M%2BBCRN24j1xpaUcuK4kUM4o81dQIhAM83nkWLMDpYPkvzWzrbCFPCB22Nr9ZXB7CRbg3wOXV6KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxErx%2BCsP3bC7FOiREq3AMECd37jbDLt8DfyBU6XqEYMKZbGmRXElFJaDJjU2UAj1YoaDb1586fwEYjbVMqfiOgM7V4XJer6UfHs934z8XOUJGJYxm4P40FgcjFdlMwTZNNwFdyPN04aV7zPqvpYucAT1rsYvj%2FWQCQA60ogQVyA%2FdIXmucj86ZuUwfGBfrPYJYba9GDbIPrvedYHRlx5vQ%2BwfQOPPFa9L1oymMUUVWzxb%2FM5wx8knqZyZ%2FMjVf5pacuVRSEeLw3CSv5SX205c8lzELWZ50azxb344IlnsDwhabRTqUfSclXa2gWp0qEpdzGTP0fJ6TgDa3BLjGeFt8bMR6Ols8uGunOhaCU4YGia6lqf67VZbv2aAykRpb31Vqqsm0RyQ19xw2%2FobkjeGB1uDGXONXh%2Bvu%2Bw81fvfhzCFUv6on5r6HeWmfy5DThNS6jAj2RevB49M%2BFdD2CTrtFVst3g53vW8clWcqGzGnfBhaL61P3s0E1ayRSQG9rG%2B7ddAJtcP10W0Pip1wK1yL1XIRPBGAKqBQiJcCc1sw4CSkbrVf8%2FolaskRiwICnCDa%2BWRJHJK6w3KUGPw44MuNoEcGaxIMB2PiFsrxUk5yOZiofVew9jJKd%2Bi4QVJcH9BfUYoMJxE%2BmTaYqTCwgtjEBjqkAbgrhmzPUfoLdjm0gLPKcrBLU8Z4xXDCcoUSmmRCx2q5%2FyEcnAuhIv99mHqLZHj94aDKPzH0pcQRm3bHvfqEGDdqO62BRysd8GS%2BZ4ltL4VXxEhNNP3l7v5U9mKIoNNXi093PnXPNZONORp8O31IWalydCin44s7UhT94L8dTWHwvVoSmoTV4kpB1ja4mSIO5mEU7XpCAMtnVQ3GDMkDttS887%2BN&X-Amz-Signature=cbd25ac47f89e894614d713fe18b7a7277480236398c4aa29179f6a4010be6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGB3L5ZD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDBzs62JqaOjtZJWv3M%2BBCRN24j1xpaUcuK4kUM4o81dQIhAM83nkWLMDpYPkvzWzrbCFPCB22Nr9ZXB7CRbg3wOXV6KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxErx%2BCsP3bC7FOiREq3AMECd37jbDLt8DfyBU6XqEYMKZbGmRXElFJaDJjU2UAj1YoaDb1586fwEYjbVMqfiOgM7V4XJer6UfHs934z8XOUJGJYxm4P40FgcjFdlMwTZNNwFdyPN04aV7zPqvpYucAT1rsYvj%2FWQCQA60ogQVyA%2FdIXmucj86ZuUwfGBfrPYJYba9GDbIPrvedYHRlx5vQ%2BwfQOPPFa9L1oymMUUVWzxb%2FM5wx8knqZyZ%2FMjVf5pacuVRSEeLw3CSv5SX205c8lzELWZ50azxb344IlnsDwhabRTqUfSclXa2gWp0qEpdzGTP0fJ6TgDa3BLjGeFt8bMR6Ols8uGunOhaCU4YGia6lqf67VZbv2aAykRpb31Vqqsm0RyQ19xw2%2FobkjeGB1uDGXONXh%2Bvu%2Bw81fvfhzCFUv6on5r6HeWmfy5DThNS6jAj2RevB49M%2BFdD2CTrtFVst3g53vW8clWcqGzGnfBhaL61P3s0E1ayRSQG9rG%2B7ddAJtcP10W0Pip1wK1yL1XIRPBGAKqBQiJcCc1sw4CSkbrVf8%2FolaskRiwICnCDa%2BWRJHJK6w3KUGPw44MuNoEcGaxIMB2PiFsrxUk5yOZiofVew9jJKd%2Bi4QVJcH9BfUYoMJxE%2BmTaYqTCwgtjEBjqkAbgrhmzPUfoLdjm0gLPKcrBLU8Z4xXDCcoUSmmRCx2q5%2FyEcnAuhIv99mHqLZHj94aDKPzH0pcQRm3bHvfqEGDdqO62BRysd8GS%2BZ4ltL4VXxEhNNP3l7v5U9mKIoNNXi093PnXPNZONORp8O31IWalydCin44s7UhT94L8dTWHwvVoSmoTV4kpB1ja4mSIO5mEU7XpCAMtnVQ3GDMkDttS887%2BN&X-Amz-Signature=eec4be58283b79660f9c2b7f1172b52ac87f6cdd246d6bf68b5209ec3d6b8ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGB3L5ZD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDBzs62JqaOjtZJWv3M%2BBCRN24j1xpaUcuK4kUM4o81dQIhAM83nkWLMDpYPkvzWzrbCFPCB22Nr9ZXB7CRbg3wOXV6KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxErx%2BCsP3bC7FOiREq3AMECd37jbDLt8DfyBU6XqEYMKZbGmRXElFJaDJjU2UAj1YoaDb1586fwEYjbVMqfiOgM7V4XJer6UfHs934z8XOUJGJYxm4P40FgcjFdlMwTZNNwFdyPN04aV7zPqvpYucAT1rsYvj%2FWQCQA60ogQVyA%2FdIXmucj86ZuUwfGBfrPYJYba9GDbIPrvedYHRlx5vQ%2BwfQOPPFa9L1oymMUUVWzxb%2FM5wx8knqZyZ%2FMjVf5pacuVRSEeLw3CSv5SX205c8lzELWZ50azxb344IlnsDwhabRTqUfSclXa2gWp0qEpdzGTP0fJ6TgDa3BLjGeFt8bMR6Ols8uGunOhaCU4YGia6lqf67VZbv2aAykRpb31Vqqsm0RyQ19xw2%2FobkjeGB1uDGXONXh%2Bvu%2Bw81fvfhzCFUv6on5r6HeWmfy5DThNS6jAj2RevB49M%2BFdD2CTrtFVst3g53vW8clWcqGzGnfBhaL61P3s0E1ayRSQG9rG%2B7ddAJtcP10W0Pip1wK1yL1XIRPBGAKqBQiJcCc1sw4CSkbrVf8%2FolaskRiwICnCDa%2BWRJHJK6w3KUGPw44MuNoEcGaxIMB2PiFsrxUk5yOZiofVew9jJKd%2Bi4QVJcH9BfUYoMJxE%2BmTaYqTCwgtjEBjqkAbgrhmzPUfoLdjm0gLPKcrBLU8Z4xXDCcoUSmmRCx2q5%2FyEcnAuhIv99mHqLZHj94aDKPzH0pcQRm3bHvfqEGDdqO62BRysd8GS%2BZ4ltL4VXxEhNNP3l7v5U9mKIoNNXi093PnXPNZONORp8O31IWalydCin44s7UhT94L8dTWHwvVoSmoTV4kpB1ja4mSIO5mEU7XpCAMtnVQ3GDMkDttS887%2BN&X-Amz-Signature=fe9b64970ffd38f09553fdec3a0bd35f7753bcf34c1223eba79b9a0472987def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
