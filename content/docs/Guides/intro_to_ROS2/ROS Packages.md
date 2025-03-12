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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FETEQD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGxsxDFfAEM4Dq6EACGJlonI22nnITSuDTjUSrSWjA7aAiEAq%2B5T7G%2FAEU4cizxriPvSOaIodtOe31H44WWO8VNkc5YqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVBM%2BrGHT45oJqL1SrcA13vAtxfF7BgbBf2cpMDpfRKC8Vmp4HwhvQozHRM14DVlD3VWqLUqt%2Bhuc00wgG9hFbBXfI2acSzqoPTb3RPSbpEY2gopobJp3LAuuYWyl%2BEsDVjpgHBgXzX7IOQLNTtsjaUbrrlL%2F8pXBxCb80x4I2NbrkZ5kf36ZrdSq11tTCs%2BzblyjTyiKmnjc%2FCrcHIuIgx2y7YgXK0%2Bo%2Ba0DPwypOFe%2BMs91CCNtwUCThpK3uy6H8XOQsUh1xZATa6XH7EVABHXvsWedERvF%2BkAH2AESE4Idd5uDOub3q17bIz6cf77%2BrUxeWf%2BxVsgPvt8s5GXFoZnlcJTplatdBDGQXXtK7cDdBzC9WuuXCpPcXtX8Z056ED6rCWsyQIjXi2QGokJtXRb682FuWmCHJkIBqJ0LbmcN38TG7bhAUhDV0CpZilybS6ydDY4eanLUHwmop16js0fIt%2FG7REi1gXu9Cys2WAsrlis6Ok1UMU5yvo%2BgfCnuFRibyDzBoyzQIeSIYrgelgGlnLIUdMGTPR2hX9k%2BTlFIelvjJJKeVbpm0xUpZJAaY7DYgX0QRFF54sw53FoW0yl3NXpSGVk%2BzJUhTTuORS4jJZyXX5D03Lt%2FoiHO3ePGAc4mE4a%2F67VYOpMKvbw74GOqUBhCHaLGiAU3kDI02McfkgbqjRAx9KIV7mKcTn%2FREeRMo1gCIOYzgONhtEi1nL%2Bp80vOj2UdcAUMx8fdmyEVTBvnP592TwTmD5Xx2zxujJ7rXXUaDPj6o6B0TMBeh%2B0r6y26DXnB4D4JgQdQjzkigDdxGMmtI5tHEzAe5mjWXrsnNfSUn8jSyPs4X6jL2jatacLz9QdFOiphcb%2B0tEjRY6HtGy96gH&X-Amz-Signature=8ef84b17c03129304989ed3aa5fd78d0f512d8744899b0755e51357e6474af92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FETEQD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGxsxDFfAEM4Dq6EACGJlonI22nnITSuDTjUSrSWjA7aAiEAq%2B5T7G%2FAEU4cizxriPvSOaIodtOe31H44WWO8VNkc5YqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVBM%2BrGHT45oJqL1SrcA13vAtxfF7BgbBf2cpMDpfRKC8Vmp4HwhvQozHRM14DVlD3VWqLUqt%2Bhuc00wgG9hFbBXfI2acSzqoPTb3RPSbpEY2gopobJp3LAuuYWyl%2BEsDVjpgHBgXzX7IOQLNTtsjaUbrrlL%2F8pXBxCb80x4I2NbrkZ5kf36ZrdSq11tTCs%2BzblyjTyiKmnjc%2FCrcHIuIgx2y7YgXK0%2Bo%2Ba0DPwypOFe%2BMs91CCNtwUCThpK3uy6H8XOQsUh1xZATa6XH7EVABHXvsWedERvF%2BkAH2AESE4Idd5uDOub3q17bIz6cf77%2BrUxeWf%2BxVsgPvt8s5GXFoZnlcJTplatdBDGQXXtK7cDdBzC9WuuXCpPcXtX8Z056ED6rCWsyQIjXi2QGokJtXRb682FuWmCHJkIBqJ0LbmcN38TG7bhAUhDV0CpZilybS6ydDY4eanLUHwmop16js0fIt%2FG7REi1gXu9Cys2WAsrlis6Ok1UMU5yvo%2BgfCnuFRibyDzBoyzQIeSIYrgelgGlnLIUdMGTPR2hX9k%2BTlFIelvjJJKeVbpm0xUpZJAaY7DYgX0QRFF54sw53FoW0yl3NXpSGVk%2BzJUhTTuORS4jJZyXX5D03Lt%2FoiHO3ePGAc4mE4a%2F67VYOpMKvbw74GOqUBhCHaLGiAU3kDI02McfkgbqjRAx9KIV7mKcTn%2FREeRMo1gCIOYzgONhtEi1nL%2Bp80vOj2UdcAUMx8fdmyEVTBvnP592TwTmD5Xx2zxujJ7rXXUaDPj6o6B0TMBeh%2B0r6y26DXnB4D4JgQdQjzkigDdxGMmtI5tHEzAe5mjWXrsnNfSUn8jSyPs4X6jL2jatacLz9QdFOiphcb%2B0tEjRY6HtGy96gH&X-Amz-Signature=5c0f6301edbc0dfcb98d4255acfed078ad956dfc39fcd0d09b49e15629e16ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FETEQD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGxsxDFfAEM4Dq6EACGJlonI22nnITSuDTjUSrSWjA7aAiEAq%2B5T7G%2FAEU4cizxriPvSOaIodtOe31H44WWO8VNkc5YqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVBM%2BrGHT45oJqL1SrcA13vAtxfF7BgbBf2cpMDpfRKC8Vmp4HwhvQozHRM14DVlD3VWqLUqt%2Bhuc00wgG9hFbBXfI2acSzqoPTb3RPSbpEY2gopobJp3LAuuYWyl%2BEsDVjpgHBgXzX7IOQLNTtsjaUbrrlL%2F8pXBxCb80x4I2NbrkZ5kf36ZrdSq11tTCs%2BzblyjTyiKmnjc%2FCrcHIuIgx2y7YgXK0%2Bo%2Ba0DPwypOFe%2BMs91CCNtwUCThpK3uy6H8XOQsUh1xZATa6XH7EVABHXvsWedERvF%2BkAH2AESE4Idd5uDOub3q17bIz6cf77%2BrUxeWf%2BxVsgPvt8s5GXFoZnlcJTplatdBDGQXXtK7cDdBzC9WuuXCpPcXtX8Z056ED6rCWsyQIjXi2QGokJtXRb682FuWmCHJkIBqJ0LbmcN38TG7bhAUhDV0CpZilybS6ydDY4eanLUHwmop16js0fIt%2FG7REi1gXu9Cys2WAsrlis6Ok1UMU5yvo%2BgfCnuFRibyDzBoyzQIeSIYrgelgGlnLIUdMGTPR2hX9k%2BTlFIelvjJJKeVbpm0xUpZJAaY7DYgX0QRFF54sw53FoW0yl3NXpSGVk%2BzJUhTTuORS4jJZyXX5D03Lt%2FoiHO3ePGAc4mE4a%2F67VYOpMKvbw74GOqUBhCHaLGiAU3kDI02McfkgbqjRAx9KIV7mKcTn%2FREeRMo1gCIOYzgONhtEi1nL%2Bp80vOj2UdcAUMx8fdmyEVTBvnP592TwTmD5Xx2zxujJ7rXXUaDPj6o6B0TMBeh%2B0r6y26DXnB4D4JgQdQjzkigDdxGMmtI5tHEzAe5mjWXrsnNfSUn8jSyPs4X6jL2jatacLz9QdFOiphcb%2B0tEjRY6HtGy96gH&X-Amz-Signature=1395242b49484b017dd3b99af09b0cbb61c49893ce2d9519f904d73d34e76d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FETEQD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGxsxDFfAEM4Dq6EACGJlonI22nnITSuDTjUSrSWjA7aAiEAq%2B5T7G%2FAEU4cizxriPvSOaIodtOe31H44WWO8VNkc5YqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVBM%2BrGHT45oJqL1SrcA13vAtxfF7BgbBf2cpMDpfRKC8Vmp4HwhvQozHRM14DVlD3VWqLUqt%2Bhuc00wgG9hFbBXfI2acSzqoPTb3RPSbpEY2gopobJp3LAuuYWyl%2BEsDVjpgHBgXzX7IOQLNTtsjaUbrrlL%2F8pXBxCb80x4I2NbrkZ5kf36ZrdSq11tTCs%2BzblyjTyiKmnjc%2FCrcHIuIgx2y7YgXK0%2Bo%2Ba0DPwypOFe%2BMs91CCNtwUCThpK3uy6H8XOQsUh1xZATa6XH7EVABHXvsWedERvF%2BkAH2AESE4Idd5uDOub3q17bIz6cf77%2BrUxeWf%2BxVsgPvt8s5GXFoZnlcJTplatdBDGQXXtK7cDdBzC9WuuXCpPcXtX8Z056ED6rCWsyQIjXi2QGokJtXRb682FuWmCHJkIBqJ0LbmcN38TG7bhAUhDV0CpZilybS6ydDY4eanLUHwmop16js0fIt%2FG7REi1gXu9Cys2WAsrlis6Ok1UMU5yvo%2BgfCnuFRibyDzBoyzQIeSIYrgelgGlnLIUdMGTPR2hX9k%2BTlFIelvjJJKeVbpm0xUpZJAaY7DYgX0QRFF54sw53FoW0yl3NXpSGVk%2BzJUhTTuORS4jJZyXX5D03Lt%2FoiHO3ePGAc4mE4a%2F67VYOpMKvbw74GOqUBhCHaLGiAU3kDI02McfkgbqjRAx9KIV7mKcTn%2FREeRMo1gCIOYzgONhtEi1nL%2Bp80vOj2UdcAUMx8fdmyEVTBvnP592TwTmD5Xx2zxujJ7rXXUaDPj6o6B0TMBeh%2B0r6y26DXnB4D4JgQdQjzkigDdxGMmtI5tHEzAe5mjWXrsnNfSUn8jSyPs4X6jL2jatacLz9QdFOiphcb%2B0tEjRY6HtGy96gH&X-Amz-Signature=472d83f6e710903d4d4bfdf904618b0388e10023f9a8bf29ef4f0fb3daeff54f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FETEQD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGxsxDFfAEM4Dq6EACGJlonI22nnITSuDTjUSrSWjA7aAiEAq%2B5T7G%2FAEU4cizxriPvSOaIodtOe31H44WWO8VNkc5YqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVBM%2BrGHT45oJqL1SrcA13vAtxfF7BgbBf2cpMDpfRKC8Vmp4HwhvQozHRM14DVlD3VWqLUqt%2Bhuc00wgG9hFbBXfI2acSzqoPTb3RPSbpEY2gopobJp3LAuuYWyl%2BEsDVjpgHBgXzX7IOQLNTtsjaUbrrlL%2F8pXBxCb80x4I2NbrkZ5kf36ZrdSq11tTCs%2BzblyjTyiKmnjc%2FCrcHIuIgx2y7YgXK0%2Bo%2Ba0DPwypOFe%2BMs91CCNtwUCThpK3uy6H8XOQsUh1xZATa6XH7EVABHXvsWedERvF%2BkAH2AESE4Idd5uDOub3q17bIz6cf77%2BrUxeWf%2BxVsgPvt8s5GXFoZnlcJTplatdBDGQXXtK7cDdBzC9WuuXCpPcXtX8Z056ED6rCWsyQIjXi2QGokJtXRb682FuWmCHJkIBqJ0LbmcN38TG7bhAUhDV0CpZilybS6ydDY4eanLUHwmop16js0fIt%2FG7REi1gXu9Cys2WAsrlis6Ok1UMU5yvo%2BgfCnuFRibyDzBoyzQIeSIYrgelgGlnLIUdMGTPR2hX9k%2BTlFIelvjJJKeVbpm0xUpZJAaY7DYgX0QRFF54sw53FoW0yl3NXpSGVk%2BzJUhTTuORS4jJZyXX5D03Lt%2FoiHO3ePGAc4mE4a%2F67VYOpMKvbw74GOqUBhCHaLGiAU3kDI02McfkgbqjRAx9KIV7mKcTn%2FREeRMo1gCIOYzgONhtEi1nL%2Bp80vOj2UdcAUMx8fdmyEVTBvnP592TwTmD5Xx2zxujJ7rXXUaDPj6o6B0TMBeh%2B0r6y26DXnB4D4JgQdQjzkigDdxGMmtI5tHEzAe5mjWXrsnNfSUn8jSyPs4X6jL2jatacLz9QdFOiphcb%2B0tEjRY6HtGy96gH&X-Amz-Signature=b3421a4b017532c4eb9db9ff1e8b572a77698907f258061bb7f5bffa21af19cb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FETEQD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGxsxDFfAEM4Dq6EACGJlonI22nnITSuDTjUSrSWjA7aAiEAq%2B5T7G%2FAEU4cizxriPvSOaIodtOe31H44WWO8VNkc5YqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVBM%2BrGHT45oJqL1SrcA13vAtxfF7BgbBf2cpMDpfRKC8Vmp4HwhvQozHRM14DVlD3VWqLUqt%2Bhuc00wgG9hFbBXfI2acSzqoPTb3RPSbpEY2gopobJp3LAuuYWyl%2BEsDVjpgHBgXzX7IOQLNTtsjaUbrrlL%2F8pXBxCb80x4I2NbrkZ5kf36ZrdSq11tTCs%2BzblyjTyiKmnjc%2FCrcHIuIgx2y7YgXK0%2Bo%2Ba0DPwypOFe%2BMs91CCNtwUCThpK3uy6H8XOQsUh1xZATa6XH7EVABHXvsWedERvF%2BkAH2AESE4Idd5uDOub3q17bIz6cf77%2BrUxeWf%2BxVsgPvt8s5GXFoZnlcJTplatdBDGQXXtK7cDdBzC9WuuXCpPcXtX8Z056ED6rCWsyQIjXi2QGokJtXRb682FuWmCHJkIBqJ0LbmcN38TG7bhAUhDV0CpZilybS6ydDY4eanLUHwmop16js0fIt%2FG7REi1gXu9Cys2WAsrlis6Ok1UMU5yvo%2BgfCnuFRibyDzBoyzQIeSIYrgelgGlnLIUdMGTPR2hX9k%2BTlFIelvjJJKeVbpm0xUpZJAaY7DYgX0QRFF54sw53FoW0yl3NXpSGVk%2BzJUhTTuORS4jJZyXX5D03Lt%2FoiHO3ePGAc4mE4a%2F67VYOpMKvbw74GOqUBhCHaLGiAU3kDI02McfkgbqjRAx9KIV7mKcTn%2FREeRMo1gCIOYzgONhtEi1nL%2Bp80vOj2UdcAUMx8fdmyEVTBvnP592TwTmD5Xx2zxujJ7rXXUaDPj6o6B0TMBeh%2B0r6y26DXnB4D4JgQdQjzkigDdxGMmtI5tHEzAe5mjWXrsnNfSUn8jSyPs4X6jL2jatacLz9QdFOiphcb%2B0tEjRY6HtGy96gH&X-Amz-Signature=c651660b77a3cb1f0784f8657a5c6934b3b42dd4e048356691fb5b1138fb1f87&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FETEQD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGxsxDFfAEM4Dq6EACGJlonI22nnITSuDTjUSrSWjA7aAiEAq%2B5T7G%2FAEU4cizxriPvSOaIodtOe31H44WWO8VNkc5YqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVBM%2BrGHT45oJqL1SrcA13vAtxfF7BgbBf2cpMDpfRKC8Vmp4HwhvQozHRM14DVlD3VWqLUqt%2Bhuc00wgG9hFbBXfI2acSzqoPTb3RPSbpEY2gopobJp3LAuuYWyl%2BEsDVjpgHBgXzX7IOQLNTtsjaUbrrlL%2F8pXBxCb80x4I2NbrkZ5kf36ZrdSq11tTCs%2BzblyjTyiKmnjc%2FCrcHIuIgx2y7YgXK0%2Bo%2Ba0DPwypOFe%2BMs91CCNtwUCThpK3uy6H8XOQsUh1xZATa6XH7EVABHXvsWedERvF%2BkAH2AESE4Idd5uDOub3q17bIz6cf77%2BrUxeWf%2BxVsgPvt8s5GXFoZnlcJTplatdBDGQXXtK7cDdBzC9WuuXCpPcXtX8Z056ED6rCWsyQIjXi2QGokJtXRb682FuWmCHJkIBqJ0LbmcN38TG7bhAUhDV0CpZilybS6ydDY4eanLUHwmop16js0fIt%2FG7REi1gXu9Cys2WAsrlis6Ok1UMU5yvo%2BgfCnuFRibyDzBoyzQIeSIYrgelgGlnLIUdMGTPR2hX9k%2BTlFIelvjJJKeVbpm0xUpZJAaY7DYgX0QRFF54sw53FoW0yl3NXpSGVk%2BzJUhTTuORS4jJZyXX5D03Lt%2FoiHO3ePGAc4mE4a%2F67VYOpMKvbw74GOqUBhCHaLGiAU3kDI02McfkgbqjRAx9KIV7mKcTn%2FREeRMo1gCIOYzgONhtEi1nL%2Bp80vOj2UdcAUMx8fdmyEVTBvnP592TwTmD5Xx2zxujJ7rXXUaDPj6o6B0TMBeh%2B0r6y26DXnB4D4JgQdQjzkigDdxGMmtI5tHEzAe5mjWXrsnNfSUn8jSyPs4X6jL2jatacLz9QdFOiphcb%2B0tEjRY6HtGy96gH&X-Amz-Signature=1ce37182ef408bd71635e5be1695ad485ad161d49470fbcc6b303a9f5016ed07&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
