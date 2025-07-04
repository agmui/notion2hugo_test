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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG6DLI34%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD1CMxiysUVnwxm42YuuSQXhSSULuipGUlXW1za4nu8VgIgW5%2BPNJw%2FLv1TaQT9Ucq24Q%2BUVq1E2j2EWXFys7e0%2Fycq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDD6sgvvRIHIcc5pkCyrcA%2FwM%2FYSG0De30jbFhJINSDtoORV4qZW1SeiE7B8tqqyIer8H3BjxVzOaXnxlgdKGl4592cT093CiroKmK4SodtXRJi2EY84aFC4MMJD%2BReOnBHhQATUMZZQtNTtIt66AmXcKxkvSqxkWZnZrKHMVYzgGu9Qj1z4KL3RkwhcFxxx00LHG5V9JxL5SraD%2Fnua5Tsnq90FPEgIwZKuX%2FtOXWRe5lq5NcxC0KJFstyh4CoX6sI1Vvh8kmK%2FpvtnrhkrfCwCT8hZDRBfWGmLyAA%2BuxjtCb4K2FYzcae1Tg5TSNJDwEJLqLULZcY7YJg9zVL9Wfyo%2BHAhvev%2BFqEpsgMQG38iwlGfSAKrY51A3CHdTIB3EvqQnvtzqNkrmvodpmAnkndONifOflQOrW2m%2B4gkNVyk%2BolKqaoEOxzdeXeVnR4gSzyqq%2Fq5krQWLqHepLsXSvGMiHqFUfZQU3j5B1QHlUGduEooH1b8Le%2FCXPyiA5%2FKVcC56%2BPQV2vxl6blL4r2ZYB7kaYhp0tzJQ2kz50mzGSIblphT4PTMKhCFNNRh03SN34bXVwGS9DXcBTDL4Ryw7DHAkh%2BrDLquKRP1qlblvSvDVLarehdRI6u17nbSYnLkvLkHIjK78uKbLAaVML%2B%2BnsMGOqUBixghfSU92ByodW%2FuCw7J7BkzO04dGtjRCCHzKvEP%2BYNWdHl9WaVPvLuKtpWCiNpCfaI4E9g4aR2X43r2pG%2BnBv%2BP%2BeXDc6aj7xh7qaMXJHLvd9hpn9edVM4nwZ7pDBrER7llb7cvJ9e%2BFXV%2FJngz56Pir1bGtsdJBr9ZYCwDtwC%2BENaMWc5FEcvnt0ZLXER5lJ0C%2FH7jC7hdT7Twt%2BUyjGF2evzo&X-Amz-Signature=fc6f032ded7137fdc1cce308c506bfcda504c80e89e09fe0a3b1aa611edaf515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG6DLI34%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD1CMxiysUVnwxm42YuuSQXhSSULuipGUlXW1za4nu8VgIgW5%2BPNJw%2FLv1TaQT9Ucq24Q%2BUVq1E2j2EWXFys7e0%2Fycq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDD6sgvvRIHIcc5pkCyrcA%2FwM%2FYSG0De30jbFhJINSDtoORV4qZW1SeiE7B8tqqyIer8H3BjxVzOaXnxlgdKGl4592cT093CiroKmK4SodtXRJi2EY84aFC4MMJD%2BReOnBHhQATUMZZQtNTtIt66AmXcKxkvSqxkWZnZrKHMVYzgGu9Qj1z4KL3RkwhcFxxx00LHG5V9JxL5SraD%2Fnua5Tsnq90FPEgIwZKuX%2FtOXWRe5lq5NcxC0KJFstyh4CoX6sI1Vvh8kmK%2FpvtnrhkrfCwCT8hZDRBfWGmLyAA%2BuxjtCb4K2FYzcae1Tg5TSNJDwEJLqLULZcY7YJg9zVL9Wfyo%2BHAhvev%2BFqEpsgMQG38iwlGfSAKrY51A3CHdTIB3EvqQnvtzqNkrmvodpmAnkndONifOflQOrW2m%2B4gkNVyk%2BolKqaoEOxzdeXeVnR4gSzyqq%2Fq5krQWLqHepLsXSvGMiHqFUfZQU3j5B1QHlUGduEooH1b8Le%2FCXPyiA5%2FKVcC56%2BPQV2vxl6blL4r2ZYB7kaYhp0tzJQ2kz50mzGSIblphT4PTMKhCFNNRh03SN34bXVwGS9DXcBTDL4Ryw7DHAkh%2BrDLquKRP1qlblvSvDVLarehdRI6u17nbSYnLkvLkHIjK78uKbLAaVML%2B%2BnsMGOqUBixghfSU92ByodW%2FuCw7J7BkzO04dGtjRCCHzKvEP%2BYNWdHl9WaVPvLuKtpWCiNpCfaI4E9g4aR2X43r2pG%2BnBv%2BP%2BeXDc6aj7xh7qaMXJHLvd9hpn9edVM4nwZ7pDBrER7llb7cvJ9e%2BFXV%2FJngz56Pir1bGtsdJBr9ZYCwDtwC%2BENaMWc5FEcvnt0ZLXER5lJ0C%2FH7jC7hdT7Twt%2BUyjGF2evzo&X-Amz-Signature=57cdb6fdfbbc3cd6789cc142059694384420b4ed8569dced7942f64f892cd445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG6DLI34%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD1CMxiysUVnwxm42YuuSQXhSSULuipGUlXW1za4nu8VgIgW5%2BPNJw%2FLv1TaQT9Ucq24Q%2BUVq1E2j2EWXFys7e0%2Fycq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDD6sgvvRIHIcc5pkCyrcA%2FwM%2FYSG0De30jbFhJINSDtoORV4qZW1SeiE7B8tqqyIer8H3BjxVzOaXnxlgdKGl4592cT093CiroKmK4SodtXRJi2EY84aFC4MMJD%2BReOnBHhQATUMZZQtNTtIt66AmXcKxkvSqxkWZnZrKHMVYzgGu9Qj1z4KL3RkwhcFxxx00LHG5V9JxL5SraD%2Fnua5Tsnq90FPEgIwZKuX%2FtOXWRe5lq5NcxC0KJFstyh4CoX6sI1Vvh8kmK%2FpvtnrhkrfCwCT8hZDRBfWGmLyAA%2BuxjtCb4K2FYzcae1Tg5TSNJDwEJLqLULZcY7YJg9zVL9Wfyo%2BHAhvev%2BFqEpsgMQG38iwlGfSAKrY51A3CHdTIB3EvqQnvtzqNkrmvodpmAnkndONifOflQOrW2m%2B4gkNVyk%2BolKqaoEOxzdeXeVnR4gSzyqq%2Fq5krQWLqHepLsXSvGMiHqFUfZQU3j5B1QHlUGduEooH1b8Le%2FCXPyiA5%2FKVcC56%2BPQV2vxl6blL4r2ZYB7kaYhp0tzJQ2kz50mzGSIblphT4PTMKhCFNNRh03SN34bXVwGS9DXcBTDL4Ryw7DHAkh%2BrDLquKRP1qlblvSvDVLarehdRI6u17nbSYnLkvLkHIjK78uKbLAaVML%2B%2BnsMGOqUBixghfSU92ByodW%2FuCw7J7BkzO04dGtjRCCHzKvEP%2BYNWdHl9WaVPvLuKtpWCiNpCfaI4E9g4aR2X43r2pG%2BnBv%2BP%2BeXDc6aj7xh7qaMXJHLvd9hpn9edVM4nwZ7pDBrER7llb7cvJ9e%2BFXV%2FJngz56Pir1bGtsdJBr9ZYCwDtwC%2BENaMWc5FEcvnt0ZLXER5lJ0C%2FH7jC7hdT7Twt%2BUyjGF2evzo&X-Amz-Signature=6dc8d3175c9c0d1ffd3720628ee3f7b172dad8f73e476e3a7def14554ddf1f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG6DLI34%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD1CMxiysUVnwxm42YuuSQXhSSULuipGUlXW1za4nu8VgIgW5%2BPNJw%2FLv1TaQT9Ucq24Q%2BUVq1E2j2EWXFys7e0%2Fycq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDD6sgvvRIHIcc5pkCyrcA%2FwM%2FYSG0De30jbFhJINSDtoORV4qZW1SeiE7B8tqqyIer8H3BjxVzOaXnxlgdKGl4592cT093CiroKmK4SodtXRJi2EY84aFC4MMJD%2BReOnBHhQATUMZZQtNTtIt66AmXcKxkvSqxkWZnZrKHMVYzgGu9Qj1z4KL3RkwhcFxxx00LHG5V9JxL5SraD%2Fnua5Tsnq90FPEgIwZKuX%2FtOXWRe5lq5NcxC0KJFstyh4CoX6sI1Vvh8kmK%2FpvtnrhkrfCwCT8hZDRBfWGmLyAA%2BuxjtCb4K2FYzcae1Tg5TSNJDwEJLqLULZcY7YJg9zVL9Wfyo%2BHAhvev%2BFqEpsgMQG38iwlGfSAKrY51A3CHdTIB3EvqQnvtzqNkrmvodpmAnkndONifOflQOrW2m%2B4gkNVyk%2BolKqaoEOxzdeXeVnR4gSzyqq%2Fq5krQWLqHepLsXSvGMiHqFUfZQU3j5B1QHlUGduEooH1b8Le%2FCXPyiA5%2FKVcC56%2BPQV2vxl6blL4r2ZYB7kaYhp0tzJQ2kz50mzGSIblphT4PTMKhCFNNRh03SN34bXVwGS9DXcBTDL4Ryw7DHAkh%2BrDLquKRP1qlblvSvDVLarehdRI6u17nbSYnLkvLkHIjK78uKbLAaVML%2B%2BnsMGOqUBixghfSU92ByodW%2FuCw7J7BkzO04dGtjRCCHzKvEP%2BYNWdHl9WaVPvLuKtpWCiNpCfaI4E9g4aR2X43r2pG%2BnBv%2BP%2BeXDc6aj7xh7qaMXJHLvd9hpn9edVM4nwZ7pDBrER7llb7cvJ9e%2BFXV%2FJngz56Pir1bGtsdJBr9ZYCwDtwC%2BENaMWc5FEcvnt0ZLXER5lJ0C%2FH7jC7hdT7Twt%2BUyjGF2evzo&X-Amz-Signature=2d741a2469a338a65af4f4831d911b7ddace003445512163627dd3c47cf5e53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG6DLI34%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD1CMxiysUVnwxm42YuuSQXhSSULuipGUlXW1za4nu8VgIgW5%2BPNJw%2FLv1TaQT9Ucq24Q%2BUVq1E2j2EWXFys7e0%2Fycq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDD6sgvvRIHIcc5pkCyrcA%2FwM%2FYSG0De30jbFhJINSDtoORV4qZW1SeiE7B8tqqyIer8H3BjxVzOaXnxlgdKGl4592cT093CiroKmK4SodtXRJi2EY84aFC4MMJD%2BReOnBHhQATUMZZQtNTtIt66AmXcKxkvSqxkWZnZrKHMVYzgGu9Qj1z4KL3RkwhcFxxx00LHG5V9JxL5SraD%2Fnua5Tsnq90FPEgIwZKuX%2FtOXWRe5lq5NcxC0KJFstyh4CoX6sI1Vvh8kmK%2FpvtnrhkrfCwCT8hZDRBfWGmLyAA%2BuxjtCb4K2FYzcae1Tg5TSNJDwEJLqLULZcY7YJg9zVL9Wfyo%2BHAhvev%2BFqEpsgMQG38iwlGfSAKrY51A3CHdTIB3EvqQnvtzqNkrmvodpmAnkndONifOflQOrW2m%2B4gkNVyk%2BolKqaoEOxzdeXeVnR4gSzyqq%2Fq5krQWLqHepLsXSvGMiHqFUfZQU3j5B1QHlUGduEooH1b8Le%2FCXPyiA5%2FKVcC56%2BPQV2vxl6blL4r2ZYB7kaYhp0tzJQ2kz50mzGSIblphT4PTMKhCFNNRh03SN34bXVwGS9DXcBTDL4Ryw7DHAkh%2BrDLquKRP1qlblvSvDVLarehdRI6u17nbSYnLkvLkHIjK78uKbLAaVML%2B%2BnsMGOqUBixghfSU92ByodW%2FuCw7J7BkzO04dGtjRCCHzKvEP%2BYNWdHl9WaVPvLuKtpWCiNpCfaI4E9g4aR2X43r2pG%2BnBv%2BP%2BeXDc6aj7xh7qaMXJHLvd9hpn9edVM4nwZ7pDBrER7llb7cvJ9e%2BFXV%2FJngz56Pir1bGtsdJBr9ZYCwDtwC%2BENaMWc5FEcvnt0ZLXER5lJ0C%2FH7jC7hdT7Twt%2BUyjGF2evzo&X-Amz-Signature=5874facad66f80fd4c8e9c499b9716a0834bf68f7a484f97abdc10ffc11f2635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG6DLI34%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD1CMxiysUVnwxm42YuuSQXhSSULuipGUlXW1za4nu8VgIgW5%2BPNJw%2FLv1TaQT9Ucq24Q%2BUVq1E2j2EWXFys7e0%2Fycq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDD6sgvvRIHIcc5pkCyrcA%2FwM%2FYSG0De30jbFhJINSDtoORV4qZW1SeiE7B8tqqyIer8H3BjxVzOaXnxlgdKGl4592cT093CiroKmK4SodtXRJi2EY84aFC4MMJD%2BReOnBHhQATUMZZQtNTtIt66AmXcKxkvSqxkWZnZrKHMVYzgGu9Qj1z4KL3RkwhcFxxx00LHG5V9JxL5SraD%2Fnua5Tsnq90FPEgIwZKuX%2FtOXWRe5lq5NcxC0KJFstyh4CoX6sI1Vvh8kmK%2FpvtnrhkrfCwCT8hZDRBfWGmLyAA%2BuxjtCb4K2FYzcae1Tg5TSNJDwEJLqLULZcY7YJg9zVL9Wfyo%2BHAhvev%2BFqEpsgMQG38iwlGfSAKrY51A3CHdTIB3EvqQnvtzqNkrmvodpmAnkndONifOflQOrW2m%2B4gkNVyk%2BolKqaoEOxzdeXeVnR4gSzyqq%2Fq5krQWLqHepLsXSvGMiHqFUfZQU3j5B1QHlUGduEooH1b8Le%2FCXPyiA5%2FKVcC56%2BPQV2vxl6blL4r2ZYB7kaYhp0tzJQ2kz50mzGSIblphT4PTMKhCFNNRh03SN34bXVwGS9DXcBTDL4Ryw7DHAkh%2BrDLquKRP1qlblvSvDVLarehdRI6u17nbSYnLkvLkHIjK78uKbLAaVML%2B%2BnsMGOqUBixghfSU92ByodW%2FuCw7J7BkzO04dGtjRCCHzKvEP%2BYNWdHl9WaVPvLuKtpWCiNpCfaI4E9g4aR2X43r2pG%2BnBv%2BP%2BeXDc6aj7xh7qaMXJHLvd9hpn9edVM4nwZ7pDBrER7llb7cvJ9e%2BFXV%2FJngz56Pir1bGtsdJBr9ZYCwDtwC%2BENaMWc5FEcvnt0ZLXER5lJ0C%2FH7jC7hdT7Twt%2BUyjGF2evzo&X-Amz-Signature=f3816e249e614d00322b56d112f553857f520c5fce37aee183fff14fdad245e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG6DLI34%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD1CMxiysUVnwxm42YuuSQXhSSULuipGUlXW1za4nu8VgIgW5%2BPNJw%2FLv1TaQT9Ucq24Q%2BUVq1E2j2EWXFys7e0%2Fycq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDD6sgvvRIHIcc5pkCyrcA%2FwM%2FYSG0De30jbFhJINSDtoORV4qZW1SeiE7B8tqqyIer8H3BjxVzOaXnxlgdKGl4592cT093CiroKmK4SodtXRJi2EY84aFC4MMJD%2BReOnBHhQATUMZZQtNTtIt66AmXcKxkvSqxkWZnZrKHMVYzgGu9Qj1z4KL3RkwhcFxxx00LHG5V9JxL5SraD%2Fnua5Tsnq90FPEgIwZKuX%2FtOXWRe5lq5NcxC0KJFstyh4CoX6sI1Vvh8kmK%2FpvtnrhkrfCwCT8hZDRBfWGmLyAA%2BuxjtCb4K2FYzcae1Tg5TSNJDwEJLqLULZcY7YJg9zVL9Wfyo%2BHAhvev%2BFqEpsgMQG38iwlGfSAKrY51A3CHdTIB3EvqQnvtzqNkrmvodpmAnkndONifOflQOrW2m%2B4gkNVyk%2BolKqaoEOxzdeXeVnR4gSzyqq%2Fq5krQWLqHepLsXSvGMiHqFUfZQU3j5B1QHlUGduEooH1b8Le%2FCXPyiA5%2FKVcC56%2BPQV2vxl6blL4r2ZYB7kaYhp0tzJQ2kz50mzGSIblphT4PTMKhCFNNRh03SN34bXVwGS9DXcBTDL4Ryw7DHAkh%2BrDLquKRP1qlblvSvDVLarehdRI6u17nbSYnLkvLkHIjK78uKbLAaVML%2B%2BnsMGOqUBixghfSU92ByodW%2FuCw7J7BkzO04dGtjRCCHzKvEP%2BYNWdHl9WaVPvLuKtpWCiNpCfaI4E9g4aR2X43r2pG%2BnBv%2BP%2BeXDc6aj7xh7qaMXJHLvd9hpn9edVM4nwZ7pDBrER7llb7cvJ9e%2BFXV%2FJngz56Pir1bGtsdJBr9ZYCwDtwC%2BENaMWc5FEcvnt0ZLXER5lJ0C%2FH7jC7hdT7Twt%2BUyjGF2evzo&X-Amz-Signature=6a21053ef161adddb98b64d634e314b485f1361c71bb1a9b6fe5bb372521c458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
