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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDC4HRIS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDixhloYouNaVJ13ztluF8uWkTzoM8UcWb8BsChlQ2OJwIgX8I60n6hiWAXfDh7LxEd1AQNghwTO7K9gTQ8xHFvP78q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGFaDpmRhsMAhuIbxircA8c0d55Jt62ZdlFd8IxO%2BDSKiHt4MuTdDVi1qmxuo46bGgqDmslvVLAcDveKOWh0ukYojrE042%2BALn7NnGwGI%2BFUbyKQaSELp61f8TaV4wan0pDBH4S49%2BEMnBUdEeXnr8L7wIflnX6b1hmn3a4L7PNzglRPEX%2BY1Ghh4lmxw%2BwUIedS1SfnnTdE0fALc9JN6sAEeUGeQ0hSIlEKhqoDn0%2BnA15aJ5ChSnMys8%2F9wazpIvK8NiNTCoJMIK2RfpRfPVEpzeqB%2B2pAuwXwPqBA5DYJnrAC%2BknJ1U0tcQgTUuUqdWGj7P%2BDgmL%2BdZyYBlgn7qy2CEYiN0AgpZ810ZnZzpdzqQHBDLB442mmdB63iA%2FuMUvn514m5DpLjaO3kxTDuylHNJJk%2BgvChwm89fXT6jHnPuL41n228WAUGKsxzT6nSLfhX%2FS5WuRnKpEkzBRRm1zwAedoTcMWFTWssB73ErHEo0wWAgPHw9rokWSdFqLFUWaM%2F4aavXamEiQ%2FCQCMzTW1tPXZfmOrn6H9mcMqzWunylApEj4vwRA5tXQeQqjYfBPUGToML4nzZ7kJcZ5cOINavxEzBIn1jHryqHRnlBcHQ0J84439NVr%2FprLYFDKihKy5fOGyadcaY6oiMITooMMGOqUBmXd4nzikw0sj46xwXBjebRTnkeC5iMCsV5xNGmWKC%2B%2F7CMVSERrlWbrWfjQgG6EDS01e7DL1CsvbuFPeEV6UrX%2BTPgODfkMglupv3sOYgmIXoZR8xayThN%2Fbm4piAnZy1elKUdy800IXjB4Bswspm7boxZhmtFqTrv6eBR%2BdC3yn7lmMk8%2Bck2ukGGfyiiR8ejByPylAnYtyU11G6hTfLu58wQ0Z&X-Amz-Signature=dfa068d53e8c9a66e09c66d883828220547d51c421694492f34e5227af2326db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDC4HRIS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDixhloYouNaVJ13ztluF8uWkTzoM8UcWb8BsChlQ2OJwIgX8I60n6hiWAXfDh7LxEd1AQNghwTO7K9gTQ8xHFvP78q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGFaDpmRhsMAhuIbxircA8c0d55Jt62ZdlFd8IxO%2BDSKiHt4MuTdDVi1qmxuo46bGgqDmslvVLAcDveKOWh0ukYojrE042%2BALn7NnGwGI%2BFUbyKQaSELp61f8TaV4wan0pDBH4S49%2BEMnBUdEeXnr8L7wIflnX6b1hmn3a4L7PNzglRPEX%2BY1Ghh4lmxw%2BwUIedS1SfnnTdE0fALc9JN6sAEeUGeQ0hSIlEKhqoDn0%2BnA15aJ5ChSnMys8%2F9wazpIvK8NiNTCoJMIK2RfpRfPVEpzeqB%2B2pAuwXwPqBA5DYJnrAC%2BknJ1U0tcQgTUuUqdWGj7P%2BDgmL%2BdZyYBlgn7qy2CEYiN0AgpZ810ZnZzpdzqQHBDLB442mmdB63iA%2FuMUvn514m5DpLjaO3kxTDuylHNJJk%2BgvChwm89fXT6jHnPuL41n228WAUGKsxzT6nSLfhX%2FS5WuRnKpEkzBRRm1zwAedoTcMWFTWssB73ErHEo0wWAgPHw9rokWSdFqLFUWaM%2F4aavXamEiQ%2FCQCMzTW1tPXZfmOrn6H9mcMqzWunylApEj4vwRA5tXQeQqjYfBPUGToML4nzZ7kJcZ5cOINavxEzBIn1jHryqHRnlBcHQ0J84439NVr%2FprLYFDKihKy5fOGyadcaY6oiMITooMMGOqUBmXd4nzikw0sj46xwXBjebRTnkeC5iMCsV5xNGmWKC%2B%2F7CMVSERrlWbrWfjQgG6EDS01e7DL1CsvbuFPeEV6UrX%2BTPgODfkMglupv3sOYgmIXoZR8xayThN%2Fbm4piAnZy1elKUdy800IXjB4Bswspm7boxZhmtFqTrv6eBR%2BdC3yn7lmMk8%2Bck2ukGGfyiiR8ejByPylAnYtyU11G6hTfLu58wQ0Z&X-Amz-Signature=bbf100f0d7bbcd74ba47f6071175b1cfd3a679153c4e979c8297980329b73e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDC4HRIS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDixhloYouNaVJ13ztluF8uWkTzoM8UcWb8BsChlQ2OJwIgX8I60n6hiWAXfDh7LxEd1AQNghwTO7K9gTQ8xHFvP78q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGFaDpmRhsMAhuIbxircA8c0d55Jt62ZdlFd8IxO%2BDSKiHt4MuTdDVi1qmxuo46bGgqDmslvVLAcDveKOWh0ukYojrE042%2BALn7NnGwGI%2BFUbyKQaSELp61f8TaV4wan0pDBH4S49%2BEMnBUdEeXnr8L7wIflnX6b1hmn3a4L7PNzglRPEX%2BY1Ghh4lmxw%2BwUIedS1SfnnTdE0fALc9JN6sAEeUGeQ0hSIlEKhqoDn0%2BnA15aJ5ChSnMys8%2F9wazpIvK8NiNTCoJMIK2RfpRfPVEpzeqB%2B2pAuwXwPqBA5DYJnrAC%2BknJ1U0tcQgTUuUqdWGj7P%2BDgmL%2BdZyYBlgn7qy2CEYiN0AgpZ810ZnZzpdzqQHBDLB442mmdB63iA%2FuMUvn514m5DpLjaO3kxTDuylHNJJk%2BgvChwm89fXT6jHnPuL41n228WAUGKsxzT6nSLfhX%2FS5WuRnKpEkzBRRm1zwAedoTcMWFTWssB73ErHEo0wWAgPHw9rokWSdFqLFUWaM%2F4aavXamEiQ%2FCQCMzTW1tPXZfmOrn6H9mcMqzWunylApEj4vwRA5tXQeQqjYfBPUGToML4nzZ7kJcZ5cOINavxEzBIn1jHryqHRnlBcHQ0J84439NVr%2FprLYFDKihKy5fOGyadcaY6oiMITooMMGOqUBmXd4nzikw0sj46xwXBjebRTnkeC5iMCsV5xNGmWKC%2B%2F7CMVSERrlWbrWfjQgG6EDS01e7DL1CsvbuFPeEV6UrX%2BTPgODfkMglupv3sOYgmIXoZR8xayThN%2Fbm4piAnZy1elKUdy800IXjB4Bswspm7boxZhmtFqTrv6eBR%2BdC3yn7lmMk8%2Bck2ukGGfyiiR8ejByPylAnYtyU11G6hTfLu58wQ0Z&X-Amz-Signature=1282d5ae9ca108a932c2ba6fbc8fdbdfec8fbd1fdd695b7e1d6d26bdfdda1612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDC4HRIS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDixhloYouNaVJ13ztluF8uWkTzoM8UcWb8BsChlQ2OJwIgX8I60n6hiWAXfDh7LxEd1AQNghwTO7K9gTQ8xHFvP78q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGFaDpmRhsMAhuIbxircA8c0d55Jt62ZdlFd8IxO%2BDSKiHt4MuTdDVi1qmxuo46bGgqDmslvVLAcDveKOWh0ukYojrE042%2BALn7NnGwGI%2BFUbyKQaSELp61f8TaV4wan0pDBH4S49%2BEMnBUdEeXnr8L7wIflnX6b1hmn3a4L7PNzglRPEX%2BY1Ghh4lmxw%2BwUIedS1SfnnTdE0fALc9JN6sAEeUGeQ0hSIlEKhqoDn0%2BnA15aJ5ChSnMys8%2F9wazpIvK8NiNTCoJMIK2RfpRfPVEpzeqB%2B2pAuwXwPqBA5DYJnrAC%2BknJ1U0tcQgTUuUqdWGj7P%2BDgmL%2BdZyYBlgn7qy2CEYiN0AgpZ810ZnZzpdzqQHBDLB442mmdB63iA%2FuMUvn514m5DpLjaO3kxTDuylHNJJk%2BgvChwm89fXT6jHnPuL41n228WAUGKsxzT6nSLfhX%2FS5WuRnKpEkzBRRm1zwAedoTcMWFTWssB73ErHEo0wWAgPHw9rokWSdFqLFUWaM%2F4aavXamEiQ%2FCQCMzTW1tPXZfmOrn6H9mcMqzWunylApEj4vwRA5tXQeQqjYfBPUGToML4nzZ7kJcZ5cOINavxEzBIn1jHryqHRnlBcHQ0J84439NVr%2FprLYFDKihKy5fOGyadcaY6oiMITooMMGOqUBmXd4nzikw0sj46xwXBjebRTnkeC5iMCsV5xNGmWKC%2B%2F7CMVSERrlWbrWfjQgG6EDS01e7DL1CsvbuFPeEV6UrX%2BTPgODfkMglupv3sOYgmIXoZR8xayThN%2Fbm4piAnZy1elKUdy800IXjB4Bswspm7boxZhmtFqTrv6eBR%2BdC3yn7lmMk8%2Bck2ukGGfyiiR8ejByPylAnYtyU11G6hTfLu58wQ0Z&X-Amz-Signature=2d1267fe7ecefb0086209662a63bc0f75c10b62af9f0e3fd8487fe3bef040ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDC4HRIS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDixhloYouNaVJ13ztluF8uWkTzoM8UcWb8BsChlQ2OJwIgX8I60n6hiWAXfDh7LxEd1AQNghwTO7K9gTQ8xHFvP78q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGFaDpmRhsMAhuIbxircA8c0d55Jt62ZdlFd8IxO%2BDSKiHt4MuTdDVi1qmxuo46bGgqDmslvVLAcDveKOWh0ukYojrE042%2BALn7NnGwGI%2BFUbyKQaSELp61f8TaV4wan0pDBH4S49%2BEMnBUdEeXnr8L7wIflnX6b1hmn3a4L7PNzglRPEX%2BY1Ghh4lmxw%2BwUIedS1SfnnTdE0fALc9JN6sAEeUGeQ0hSIlEKhqoDn0%2BnA15aJ5ChSnMys8%2F9wazpIvK8NiNTCoJMIK2RfpRfPVEpzeqB%2B2pAuwXwPqBA5DYJnrAC%2BknJ1U0tcQgTUuUqdWGj7P%2BDgmL%2BdZyYBlgn7qy2CEYiN0AgpZ810ZnZzpdzqQHBDLB442mmdB63iA%2FuMUvn514m5DpLjaO3kxTDuylHNJJk%2BgvChwm89fXT6jHnPuL41n228WAUGKsxzT6nSLfhX%2FS5WuRnKpEkzBRRm1zwAedoTcMWFTWssB73ErHEo0wWAgPHw9rokWSdFqLFUWaM%2F4aavXamEiQ%2FCQCMzTW1tPXZfmOrn6H9mcMqzWunylApEj4vwRA5tXQeQqjYfBPUGToML4nzZ7kJcZ5cOINavxEzBIn1jHryqHRnlBcHQ0J84439NVr%2FprLYFDKihKy5fOGyadcaY6oiMITooMMGOqUBmXd4nzikw0sj46xwXBjebRTnkeC5iMCsV5xNGmWKC%2B%2F7CMVSERrlWbrWfjQgG6EDS01e7DL1CsvbuFPeEV6UrX%2BTPgODfkMglupv3sOYgmIXoZR8xayThN%2Fbm4piAnZy1elKUdy800IXjB4Bswspm7boxZhmtFqTrv6eBR%2BdC3yn7lmMk8%2Bck2ukGGfyiiR8ejByPylAnYtyU11G6hTfLu58wQ0Z&X-Amz-Signature=9914d55d1a1d698a3d8aa84f055c55bd731743cd07fec3a4c6a840818566ed3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDC4HRIS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDixhloYouNaVJ13ztluF8uWkTzoM8UcWb8BsChlQ2OJwIgX8I60n6hiWAXfDh7LxEd1AQNghwTO7K9gTQ8xHFvP78q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGFaDpmRhsMAhuIbxircA8c0d55Jt62ZdlFd8IxO%2BDSKiHt4MuTdDVi1qmxuo46bGgqDmslvVLAcDveKOWh0ukYojrE042%2BALn7NnGwGI%2BFUbyKQaSELp61f8TaV4wan0pDBH4S49%2BEMnBUdEeXnr8L7wIflnX6b1hmn3a4L7PNzglRPEX%2BY1Ghh4lmxw%2BwUIedS1SfnnTdE0fALc9JN6sAEeUGeQ0hSIlEKhqoDn0%2BnA15aJ5ChSnMys8%2F9wazpIvK8NiNTCoJMIK2RfpRfPVEpzeqB%2B2pAuwXwPqBA5DYJnrAC%2BknJ1U0tcQgTUuUqdWGj7P%2BDgmL%2BdZyYBlgn7qy2CEYiN0AgpZ810ZnZzpdzqQHBDLB442mmdB63iA%2FuMUvn514m5DpLjaO3kxTDuylHNJJk%2BgvChwm89fXT6jHnPuL41n228WAUGKsxzT6nSLfhX%2FS5WuRnKpEkzBRRm1zwAedoTcMWFTWssB73ErHEo0wWAgPHw9rokWSdFqLFUWaM%2F4aavXamEiQ%2FCQCMzTW1tPXZfmOrn6H9mcMqzWunylApEj4vwRA5tXQeQqjYfBPUGToML4nzZ7kJcZ5cOINavxEzBIn1jHryqHRnlBcHQ0J84439NVr%2FprLYFDKihKy5fOGyadcaY6oiMITooMMGOqUBmXd4nzikw0sj46xwXBjebRTnkeC5iMCsV5xNGmWKC%2B%2F7CMVSERrlWbrWfjQgG6EDS01e7DL1CsvbuFPeEV6UrX%2BTPgODfkMglupv3sOYgmIXoZR8xayThN%2Fbm4piAnZy1elKUdy800IXjB4Bswspm7boxZhmtFqTrv6eBR%2BdC3yn7lmMk8%2Bck2ukGGfyiiR8ejByPylAnYtyU11G6hTfLu58wQ0Z&X-Amz-Signature=252756918e81c6232d839a9af23f477041beea9e518b91d3633f6c641941fd11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDC4HRIS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDixhloYouNaVJ13ztluF8uWkTzoM8UcWb8BsChlQ2OJwIgX8I60n6hiWAXfDh7LxEd1AQNghwTO7K9gTQ8xHFvP78q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGFaDpmRhsMAhuIbxircA8c0d55Jt62ZdlFd8IxO%2BDSKiHt4MuTdDVi1qmxuo46bGgqDmslvVLAcDveKOWh0ukYojrE042%2BALn7NnGwGI%2BFUbyKQaSELp61f8TaV4wan0pDBH4S49%2BEMnBUdEeXnr8L7wIflnX6b1hmn3a4L7PNzglRPEX%2BY1Ghh4lmxw%2BwUIedS1SfnnTdE0fALc9JN6sAEeUGeQ0hSIlEKhqoDn0%2BnA15aJ5ChSnMys8%2F9wazpIvK8NiNTCoJMIK2RfpRfPVEpzeqB%2B2pAuwXwPqBA5DYJnrAC%2BknJ1U0tcQgTUuUqdWGj7P%2BDgmL%2BdZyYBlgn7qy2CEYiN0AgpZ810ZnZzpdzqQHBDLB442mmdB63iA%2FuMUvn514m5DpLjaO3kxTDuylHNJJk%2BgvChwm89fXT6jHnPuL41n228WAUGKsxzT6nSLfhX%2FS5WuRnKpEkzBRRm1zwAedoTcMWFTWssB73ErHEo0wWAgPHw9rokWSdFqLFUWaM%2F4aavXamEiQ%2FCQCMzTW1tPXZfmOrn6H9mcMqzWunylApEj4vwRA5tXQeQqjYfBPUGToML4nzZ7kJcZ5cOINavxEzBIn1jHryqHRnlBcHQ0J84439NVr%2FprLYFDKihKy5fOGyadcaY6oiMITooMMGOqUBmXd4nzikw0sj46xwXBjebRTnkeC5iMCsV5xNGmWKC%2B%2F7CMVSERrlWbrWfjQgG6EDS01e7DL1CsvbuFPeEV6UrX%2BTPgODfkMglupv3sOYgmIXoZR8xayThN%2Fbm4piAnZy1elKUdy800IXjB4Bswspm7boxZhmtFqTrv6eBR%2BdC3yn7lmMk8%2Bck2ukGGfyiiR8ejByPylAnYtyU11G6hTfLu58wQ0Z&X-Amz-Signature=fabb0b0fb2f2fd5695cd15be971c1e7420fd2fa86d993ef608d6c12df9c7b0ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
