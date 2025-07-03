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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXH55QOO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC8OJqeXhyP98KNvMNbhjzm8jZxoVnuUIR0rlsN41nSCwIgFV7i4ZALT6ZXbTExn3pVx0JNRR2m%2FguJgoDgYGURDooq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOy3R7sowjqRqeRutCrcA20Qnaz9degDdRA69XQ2%2Fy2tBajsHWjw4NVXGZpUmyoY9EQXy1WvAGvvbnQwTRyc9c4edXB87YNewpSIFBLtb2q57PeBgZK6VbyOd2ucoFZRKf%2F2GcNOd9DFMvJcTZNMqWuqmBbRnLID386P61Do2Q0kXeiqYYzhpIPNrmoeSp5BRSqJlWagYon4PkvLN44cG%2FHwPUr2DV5oCfq4u3%2Fn1tpRswiHIpHXOKJ4ua1QKGkhJEJmvdjnbhGnvlxCW%2FsVhOq7LpVLrAnNb7sOcMLMGikPqUJzOVzwh7IV%2Bxdop6RE9gO29aM675CD%2FF8XaTfvGyFjOuFyHBLPLLB2%2BrU0PnmwPGDNdai8ehg6htLJWpJXckVVW4Ox5ZtbwvJb%2BOnoArJPlIANUA1gBePGpP1wNCPQrF8Ikpl3M6RTTcjIUNmCKUe6NU%2F3gKopateVjtk68kzU5s%2FevhE4oI0IPqasQ2MK8CDBb2Nhzqu2UufbYR5R6V1%2BMv7PZCZnMLjTT3QtlGyPqPCyfpmb882iiphFJdGhakPwQHLAR1x0NlGUQTy%2B5tkAvsZzDHg7C8ZVkWfVYR11jrWeX4dvSRO48t5usdbpJw3zIst6X4kephilishr4uf%2FZYx%2BsCuZUR9oMK3emMMGOqUBnkH8bRacAkAgZPcBzZWmHPd4R3b0fmDVFiw1ki3IuqasEVmCBdDl65azm1OYB85WOOP4Sqsn6wiag6mI7%2FKtSQcu%2BQSsDrpIcEx2IRc%2F0gtBXPUe2pBxp24WDvIs2dtj2DnVSGVRAog8s80X6kzZEZ9esEv%2BqkWPfCYMRKKn2FpLDQedJS%2BSdNjuI2%2BpkgcRVCtcYfs7RDJlXBi6rA%2BNZYgZHP3S&X-Amz-Signature=8a843e4814b44eac4db2a65f7b66d5408e56936d20ee5a023701669aebc98839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXH55QOO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC8OJqeXhyP98KNvMNbhjzm8jZxoVnuUIR0rlsN41nSCwIgFV7i4ZALT6ZXbTExn3pVx0JNRR2m%2FguJgoDgYGURDooq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOy3R7sowjqRqeRutCrcA20Qnaz9degDdRA69XQ2%2Fy2tBajsHWjw4NVXGZpUmyoY9EQXy1WvAGvvbnQwTRyc9c4edXB87YNewpSIFBLtb2q57PeBgZK6VbyOd2ucoFZRKf%2F2GcNOd9DFMvJcTZNMqWuqmBbRnLID386P61Do2Q0kXeiqYYzhpIPNrmoeSp5BRSqJlWagYon4PkvLN44cG%2FHwPUr2DV5oCfq4u3%2Fn1tpRswiHIpHXOKJ4ua1QKGkhJEJmvdjnbhGnvlxCW%2FsVhOq7LpVLrAnNb7sOcMLMGikPqUJzOVzwh7IV%2Bxdop6RE9gO29aM675CD%2FF8XaTfvGyFjOuFyHBLPLLB2%2BrU0PnmwPGDNdai8ehg6htLJWpJXckVVW4Ox5ZtbwvJb%2BOnoArJPlIANUA1gBePGpP1wNCPQrF8Ikpl3M6RTTcjIUNmCKUe6NU%2F3gKopateVjtk68kzU5s%2FevhE4oI0IPqasQ2MK8CDBb2Nhzqu2UufbYR5R6V1%2BMv7PZCZnMLjTT3QtlGyPqPCyfpmb882iiphFJdGhakPwQHLAR1x0NlGUQTy%2B5tkAvsZzDHg7C8ZVkWfVYR11jrWeX4dvSRO48t5usdbpJw3zIst6X4kephilishr4uf%2FZYx%2BsCuZUR9oMK3emMMGOqUBnkH8bRacAkAgZPcBzZWmHPd4R3b0fmDVFiw1ki3IuqasEVmCBdDl65azm1OYB85WOOP4Sqsn6wiag6mI7%2FKtSQcu%2BQSsDrpIcEx2IRc%2F0gtBXPUe2pBxp24WDvIs2dtj2DnVSGVRAog8s80X6kzZEZ9esEv%2BqkWPfCYMRKKn2FpLDQedJS%2BSdNjuI2%2BpkgcRVCtcYfs7RDJlXBi6rA%2BNZYgZHP3S&X-Amz-Signature=55e956fe88ff1344da1408965448152e9adc39f8e9cef4a28d2b0117c1ad3277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXH55QOO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC8OJqeXhyP98KNvMNbhjzm8jZxoVnuUIR0rlsN41nSCwIgFV7i4ZALT6ZXbTExn3pVx0JNRR2m%2FguJgoDgYGURDooq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOy3R7sowjqRqeRutCrcA20Qnaz9degDdRA69XQ2%2Fy2tBajsHWjw4NVXGZpUmyoY9EQXy1WvAGvvbnQwTRyc9c4edXB87YNewpSIFBLtb2q57PeBgZK6VbyOd2ucoFZRKf%2F2GcNOd9DFMvJcTZNMqWuqmBbRnLID386P61Do2Q0kXeiqYYzhpIPNrmoeSp5BRSqJlWagYon4PkvLN44cG%2FHwPUr2DV5oCfq4u3%2Fn1tpRswiHIpHXOKJ4ua1QKGkhJEJmvdjnbhGnvlxCW%2FsVhOq7LpVLrAnNb7sOcMLMGikPqUJzOVzwh7IV%2Bxdop6RE9gO29aM675CD%2FF8XaTfvGyFjOuFyHBLPLLB2%2BrU0PnmwPGDNdai8ehg6htLJWpJXckVVW4Ox5ZtbwvJb%2BOnoArJPlIANUA1gBePGpP1wNCPQrF8Ikpl3M6RTTcjIUNmCKUe6NU%2F3gKopateVjtk68kzU5s%2FevhE4oI0IPqasQ2MK8CDBb2Nhzqu2UufbYR5R6V1%2BMv7PZCZnMLjTT3QtlGyPqPCyfpmb882iiphFJdGhakPwQHLAR1x0NlGUQTy%2B5tkAvsZzDHg7C8ZVkWfVYR11jrWeX4dvSRO48t5usdbpJw3zIst6X4kephilishr4uf%2FZYx%2BsCuZUR9oMK3emMMGOqUBnkH8bRacAkAgZPcBzZWmHPd4R3b0fmDVFiw1ki3IuqasEVmCBdDl65azm1OYB85WOOP4Sqsn6wiag6mI7%2FKtSQcu%2BQSsDrpIcEx2IRc%2F0gtBXPUe2pBxp24WDvIs2dtj2DnVSGVRAog8s80X6kzZEZ9esEv%2BqkWPfCYMRKKn2FpLDQedJS%2BSdNjuI2%2BpkgcRVCtcYfs7RDJlXBi6rA%2BNZYgZHP3S&X-Amz-Signature=7c56d7d4f2ecb2e99282baf510f79f35a55982a3caea5cfdac5b7dc15ca1fb2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXH55QOO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC8OJqeXhyP98KNvMNbhjzm8jZxoVnuUIR0rlsN41nSCwIgFV7i4ZALT6ZXbTExn3pVx0JNRR2m%2FguJgoDgYGURDooq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOy3R7sowjqRqeRutCrcA20Qnaz9degDdRA69XQ2%2Fy2tBajsHWjw4NVXGZpUmyoY9EQXy1WvAGvvbnQwTRyc9c4edXB87YNewpSIFBLtb2q57PeBgZK6VbyOd2ucoFZRKf%2F2GcNOd9DFMvJcTZNMqWuqmBbRnLID386P61Do2Q0kXeiqYYzhpIPNrmoeSp5BRSqJlWagYon4PkvLN44cG%2FHwPUr2DV5oCfq4u3%2Fn1tpRswiHIpHXOKJ4ua1QKGkhJEJmvdjnbhGnvlxCW%2FsVhOq7LpVLrAnNb7sOcMLMGikPqUJzOVzwh7IV%2Bxdop6RE9gO29aM675CD%2FF8XaTfvGyFjOuFyHBLPLLB2%2BrU0PnmwPGDNdai8ehg6htLJWpJXckVVW4Ox5ZtbwvJb%2BOnoArJPlIANUA1gBePGpP1wNCPQrF8Ikpl3M6RTTcjIUNmCKUe6NU%2F3gKopateVjtk68kzU5s%2FevhE4oI0IPqasQ2MK8CDBb2Nhzqu2UufbYR5R6V1%2BMv7PZCZnMLjTT3QtlGyPqPCyfpmb882iiphFJdGhakPwQHLAR1x0NlGUQTy%2B5tkAvsZzDHg7C8ZVkWfVYR11jrWeX4dvSRO48t5usdbpJw3zIst6X4kephilishr4uf%2FZYx%2BsCuZUR9oMK3emMMGOqUBnkH8bRacAkAgZPcBzZWmHPd4R3b0fmDVFiw1ki3IuqasEVmCBdDl65azm1OYB85WOOP4Sqsn6wiag6mI7%2FKtSQcu%2BQSsDrpIcEx2IRc%2F0gtBXPUe2pBxp24WDvIs2dtj2DnVSGVRAog8s80X6kzZEZ9esEv%2BqkWPfCYMRKKn2FpLDQedJS%2BSdNjuI2%2BpkgcRVCtcYfs7RDJlXBi6rA%2BNZYgZHP3S&X-Amz-Signature=08949a85d72210e14ec0bdab3c61bc5d30d20a00d4c8c0948b692b771ece773e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXH55QOO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC8OJqeXhyP98KNvMNbhjzm8jZxoVnuUIR0rlsN41nSCwIgFV7i4ZALT6ZXbTExn3pVx0JNRR2m%2FguJgoDgYGURDooq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOy3R7sowjqRqeRutCrcA20Qnaz9degDdRA69XQ2%2Fy2tBajsHWjw4NVXGZpUmyoY9EQXy1WvAGvvbnQwTRyc9c4edXB87YNewpSIFBLtb2q57PeBgZK6VbyOd2ucoFZRKf%2F2GcNOd9DFMvJcTZNMqWuqmBbRnLID386P61Do2Q0kXeiqYYzhpIPNrmoeSp5BRSqJlWagYon4PkvLN44cG%2FHwPUr2DV5oCfq4u3%2Fn1tpRswiHIpHXOKJ4ua1QKGkhJEJmvdjnbhGnvlxCW%2FsVhOq7LpVLrAnNb7sOcMLMGikPqUJzOVzwh7IV%2Bxdop6RE9gO29aM675CD%2FF8XaTfvGyFjOuFyHBLPLLB2%2BrU0PnmwPGDNdai8ehg6htLJWpJXckVVW4Ox5ZtbwvJb%2BOnoArJPlIANUA1gBePGpP1wNCPQrF8Ikpl3M6RTTcjIUNmCKUe6NU%2F3gKopateVjtk68kzU5s%2FevhE4oI0IPqasQ2MK8CDBb2Nhzqu2UufbYR5R6V1%2BMv7PZCZnMLjTT3QtlGyPqPCyfpmb882iiphFJdGhakPwQHLAR1x0NlGUQTy%2B5tkAvsZzDHg7C8ZVkWfVYR11jrWeX4dvSRO48t5usdbpJw3zIst6X4kephilishr4uf%2FZYx%2BsCuZUR9oMK3emMMGOqUBnkH8bRacAkAgZPcBzZWmHPd4R3b0fmDVFiw1ki3IuqasEVmCBdDl65azm1OYB85WOOP4Sqsn6wiag6mI7%2FKtSQcu%2BQSsDrpIcEx2IRc%2F0gtBXPUe2pBxp24WDvIs2dtj2DnVSGVRAog8s80X6kzZEZ9esEv%2BqkWPfCYMRKKn2FpLDQedJS%2BSdNjuI2%2BpkgcRVCtcYfs7RDJlXBi6rA%2BNZYgZHP3S&X-Amz-Signature=f80faa0208dfad1c9c2765d2b56ca052d32e46470bf0ceef491f0f28d866e982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXH55QOO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC8OJqeXhyP98KNvMNbhjzm8jZxoVnuUIR0rlsN41nSCwIgFV7i4ZALT6ZXbTExn3pVx0JNRR2m%2FguJgoDgYGURDooq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOy3R7sowjqRqeRutCrcA20Qnaz9degDdRA69XQ2%2Fy2tBajsHWjw4NVXGZpUmyoY9EQXy1WvAGvvbnQwTRyc9c4edXB87YNewpSIFBLtb2q57PeBgZK6VbyOd2ucoFZRKf%2F2GcNOd9DFMvJcTZNMqWuqmBbRnLID386P61Do2Q0kXeiqYYzhpIPNrmoeSp5BRSqJlWagYon4PkvLN44cG%2FHwPUr2DV5oCfq4u3%2Fn1tpRswiHIpHXOKJ4ua1QKGkhJEJmvdjnbhGnvlxCW%2FsVhOq7LpVLrAnNb7sOcMLMGikPqUJzOVzwh7IV%2Bxdop6RE9gO29aM675CD%2FF8XaTfvGyFjOuFyHBLPLLB2%2BrU0PnmwPGDNdai8ehg6htLJWpJXckVVW4Ox5ZtbwvJb%2BOnoArJPlIANUA1gBePGpP1wNCPQrF8Ikpl3M6RTTcjIUNmCKUe6NU%2F3gKopateVjtk68kzU5s%2FevhE4oI0IPqasQ2MK8CDBb2Nhzqu2UufbYR5R6V1%2BMv7PZCZnMLjTT3QtlGyPqPCyfpmb882iiphFJdGhakPwQHLAR1x0NlGUQTy%2B5tkAvsZzDHg7C8ZVkWfVYR11jrWeX4dvSRO48t5usdbpJw3zIst6X4kephilishr4uf%2FZYx%2BsCuZUR9oMK3emMMGOqUBnkH8bRacAkAgZPcBzZWmHPd4R3b0fmDVFiw1ki3IuqasEVmCBdDl65azm1OYB85WOOP4Sqsn6wiag6mI7%2FKtSQcu%2BQSsDrpIcEx2IRc%2F0gtBXPUe2pBxp24WDvIs2dtj2DnVSGVRAog8s80X6kzZEZ9esEv%2BqkWPfCYMRKKn2FpLDQedJS%2BSdNjuI2%2BpkgcRVCtcYfs7RDJlXBi6rA%2BNZYgZHP3S&X-Amz-Signature=c9a45f4f562cda398b42ee483e1d25b3061735309287583a09d768deb27c3869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXH55QOO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC8OJqeXhyP98KNvMNbhjzm8jZxoVnuUIR0rlsN41nSCwIgFV7i4ZALT6ZXbTExn3pVx0JNRR2m%2FguJgoDgYGURDooq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOy3R7sowjqRqeRutCrcA20Qnaz9degDdRA69XQ2%2Fy2tBajsHWjw4NVXGZpUmyoY9EQXy1WvAGvvbnQwTRyc9c4edXB87YNewpSIFBLtb2q57PeBgZK6VbyOd2ucoFZRKf%2F2GcNOd9DFMvJcTZNMqWuqmBbRnLID386P61Do2Q0kXeiqYYzhpIPNrmoeSp5BRSqJlWagYon4PkvLN44cG%2FHwPUr2DV5oCfq4u3%2Fn1tpRswiHIpHXOKJ4ua1QKGkhJEJmvdjnbhGnvlxCW%2FsVhOq7LpVLrAnNb7sOcMLMGikPqUJzOVzwh7IV%2Bxdop6RE9gO29aM675CD%2FF8XaTfvGyFjOuFyHBLPLLB2%2BrU0PnmwPGDNdai8ehg6htLJWpJXckVVW4Ox5ZtbwvJb%2BOnoArJPlIANUA1gBePGpP1wNCPQrF8Ikpl3M6RTTcjIUNmCKUe6NU%2F3gKopateVjtk68kzU5s%2FevhE4oI0IPqasQ2MK8CDBb2Nhzqu2UufbYR5R6V1%2BMv7PZCZnMLjTT3QtlGyPqPCyfpmb882iiphFJdGhakPwQHLAR1x0NlGUQTy%2B5tkAvsZzDHg7C8ZVkWfVYR11jrWeX4dvSRO48t5usdbpJw3zIst6X4kephilishr4uf%2FZYx%2BsCuZUR9oMK3emMMGOqUBnkH8bRacAkAgZPcBzZWmHPd4R3b0fmDVFiw1ki3IuqasEVmCBdDl65azm1OYB85WOOP4Sqsn6wiag6mI7%2FKtSQcu%2BQSsDrpIcEx2IRc%2F0gtBXPUe2pBxp24WDvIs2dtj2DnVSGVRAog8s80X6kzZEZ9esEv%2BqkWPfCYMRKKn2FpLDQedJS%2BSdNjuI2%2BpkgcRVCtcYfs7RDJlXBi6rA%2BNZYgZHP3S&X-Amz-Signature=2f852652073ca397fe97607db4547c23875aab5a54fc60c3d66952f53fb82c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
