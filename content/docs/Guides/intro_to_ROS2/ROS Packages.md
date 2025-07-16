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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT27DX7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIG2nQjkPizziIUysAH5fBanYbVMWgjDSUoxPITmcjDArAiEArmQILHzArK5lxUq0ZUarUn5pz0Q3767TSCCk212wK5kq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOphnVwlKVvxffRdkSrcA8mx1aXp3LflQ3mMBQglC85yQFKJszrC6AzC2Hr65dQXKu0IPty%2BOkEPyyqvFKS9y6TsNwmcLnQhlQ%2B7D7c7JC%2FDrHyWVIcF5ScXFEOZA6BmK7y%2Fmz%2F8TphxFPT6cNGCPN7rt6hBggMtT9QlODuMT2lNQn2JcvgwN8nCz3KAnER02xsSS5Ky1TpM%2BSi4mtNsdLNEQpO2uYuGwJCCSG%2B%2BnuEHXjoKx5SnkTDmmraNTy2pfUvnODW2D3yy24BpanZ2PCSl2MOzPjPV3VZT09hStD%2F8oXM7khcMdCIjQN%2Fs0RwTPwOwQx9G2kXgttkiR3oEg6AnF7xhqluZ54W%2FORakOPMJYj6SaNUbQgrF%2BKQ0ZMJuG6U%2BWZGW%2BAoCT3U%2FeS3BdLw1sPWW2%2FAy8QukrEPTwU7LJXBOYDuB3DWJEW1TagsKxAuERFMTVuYqBfn4nzxosv3emWnY6EdX5aAMeyGZ3W3Xlm5FMoM%2B7CkZwaFDguIvTxUK5oF38BuCqD%2F6GI8e9JgSPZkU2Ownzhi4MlUi7wTPeuKpNkNgfp0GP6WMRDVhUuwWaQq33UxqlYbzMlNYMbgdzzCxwVqfne%2B6TKWXmMskn7uCjxDfa4ni9ZoowvmjAykxS3AXqtsnfCHOML6X4MMGOqUBt5FG%2BYQWXa9E3ypJx9bNU6fCEDyxduzCBjx4eo38d5HvDTdhMcwXtrYTJUknuOTUHOSPNKBrNRZ1kD1wIqZ0u8nyQtfKow0vTsAnfoG60Zvi5MWD3i%2BADulrrgG93kYFlRL9Vw%2F1%2B%2FbUDlPGnU7C8%2F%2FaD6RLs7d4heGaF4sagYSeOLxwG1X7W6Vtbx8m90iBGLRyQiiSt%2FHz%2FDwIoG4CNrpCl54A&X-Amz-Signature=62f9c63fdb4a5a40a11dd3f8406394fadfa66e064410882b3a7995b6d12ab50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT27DX7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIG2nQjkPizziIUysAH5fBanYbVMWgjDSUoxPITmcjDArAiEArmQILHzArK5lxUq0ZUarUn5pz0Q3767TSCCk212wK5kq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOphnVwlKVvxffRdkSrcA8mx1aXp3LflQ3mMBQglC85yQFKJszrC6AzC2Hr65dQXKu0IPty%2BOkEPyyqvFKS9y6TsNwmcLnQhlQ%2B7D7c7JC%2FDrHyWVIcF5ScXFEOZA6BmK7y%2Fmz%2F8TphxFPT6cNGCPN7rt6hBggMtT9QlODuMT2lNQn2JcvgwN8nCz3KAnER02xsSS5Ky1TpM%2BSi4mtNsdLNEQpO2uYuGwJCCSG%2B%2BnuEHXjoKx5SnkTDmmraNTy2pfUvnODW2D3yy24BpanZ2PCSl2MOzPjPV3VZT09hStD%2F8oXM7khcMdCIjQN%2Fs0RwTPwOwQx9G2kXgttkiR3oEg6AnF7xhqluZ54W%2FORakOPMJYj6SaNUbQgrF%2BKQ0ZMJuG6U%2BWZGW%2BAoCT3U%2FeS3BdLw1sPWW2%2FAy8QukrEPTwU7LJXBOYDuB3DWJEW1TagsKxAuERFMTVuYqBfn4nzxosv3emWnY6EdX5aAMeyGZ3W3Xlm5FMoM%2B7CkZwaFDguIvTxUK5oF38BuCqD%2F6GI8e9JgSPZkU2Ownzhi4MlUi7wTPeuKpNkNgfp0GP6WMRDVhUuwWaQq33UxqlYbzMlNYMbgdzzCxwVqfne%2B6TKWXmMskn7uCjxDfa4ni9ZoowvmjAykxS3AXqtsnfCHOML6X4MMGOqUBt5FG%2BYQWXa9E3ypJx9bNU6fCEDyxduzCBjx4eo38d5HvDTdhMcwXtrYTJUknuOTUHOSPNKBrNRZ1kD1wIqZ0u8nyQtfKow0vTsAnfoG60Zvi5MWD3i%2BADulrrgG93kYFlRL9Vw%2F1%2B%2FbUDlPGnU7C8%2F%2FaD6RLs7d4heGaF4sagYSeOLxwG1X7W6Vtbx8m90iBGLRyQiiSt%2FHz%2FDwIoG4CNrpCl54A&X-Amz-Signature=aae455905542962f2bbcdab2cb536a343eb963a009a11a6c1cf8deaadeb5d584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT27DX7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIG2nQjkPizziIUysAH5fBanYbVMWgjDSUoxPITmcjDArAiEArmQILHzArK5lxUq0ZUarUn5pz0Q3767TSCCk212wK5kq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOphnVwlKVvxffRdkSrcA8mx1aXp3LflQ3mMBQglC85yQFKJszrC6AzC2Hr65dQXKu0IPty%2BOkEPyyqvFKS9y6TsNwmcLnQhlQ%2B7D7c7JC%2FDrHyWVIcF5ScXFEOZA6BmK7y%2Fmz%2F8TphxFPT6cNGCPN7rt6hBggMtT9QlODuMT2lNQn2JcvgwN8nCz3KAnER02xsSS5Ky1TpM%2BSi4mtNsdLNEQpO2uYuGwJCCSG%2B%2BnuEHXjoKx5SnkTDmmraNTy2pfUvnODW2D3yy24BpanZ2PCSl2MOzPjPV3VZT09hStD%2F8oXM7khcMdCIjQN%2Fs0RwTPwOwQx9G2kXgttkiR3oEg6AnF7xhqluZ54W%2FORakOPMJYj6SaNUbQgrF%2BKQ0ZMJuG6U%2BWZGW%2BAoCT3U%2FeS3BdLw1sPWW2%2FAy8QukrEPTwU7LJXBOYDuB3DWJEW1TagsKxAuERFMTVuYqBfn4nzxosv3emWnY6EdX5aAMeyGZ3W3Xlm5FMoM%2B7CkZwaFDguIvTxUK5oF38BuCqD%2F6GI8e9JgSPZkU2Ownzhi4MlUi7wTPeuKpNkNgfp0GP6WMRDVhUuwWaQq33UxqlYbzMlNYMbgdzzCxwVqfne%2B6TKWXmMskn7uCjxDfa4ni9ZoowvmjAykxS3AXqtsnfCHOML6X4MMGOqUBt5FG%2BYQWXa9E3ypJx9bNU6fCEDyxduzCBjx4eo38d5HvDTdhMcwXtrYTJUknuOTUHOSPNKBrNRZ1kD1wIqZ0u8nyQtfKow0vTsAnfoG60Zvi5MWD3i%2BADulrrgG93kYFlRL9Vw%2F1%2B%2FbUDlPGnU7C8%2F%2FaD6RLs7d4heGaF4sagYSeOLxwG1X7W6Vtbx8m90iBGLRyQiiSt%2FHz%2FDwIoG4CNrpCl54A&X-Amz-Signature=3572c38e045e80c79229fe07fb064c218e1cd2b359412e18ee3fec5eec8f1150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT27DX7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIG2nQjkPizziIUysAH5fBanYbVMWgjDSUoxPITmcjDArAiEArmQILHzArK5lxUq0ZUarUn5pz0Q3767TSCCk212wK5kq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOphnVwlKVvxffRdkSrcA8mx1aXp3LflQ3mMBQglC85yQFKJszrC6AzC2Hr65dQXKu0IPty%2BOkEPyyqvFKS9y6TsNwmcLnQhlQ%2B7D7c7JC%2FDrHyWVIcF5ScXFEOZA6BmK7y%2Fmz%2F8TphxFPT6cNGCPN7rt6hBggMtT9QlODuMT2lNQn2JcvgwN8nCz3KAnER02xsSS5Ky1TpM%2BSi4mtNsdLNEQpO2uYuGwJCCSG%2B%2BnuEHXjoKx5SnkTDmmraNTy2pfUvnODW2D3yy24BpanZ2PCSl2MOzPjPV3VZT09hStD%2F8oXM7khcMdCIjQN%2Fs0RwTPwOwQx9G2kXgttkiR3oEg6AnF7xhqluZ54W%2FORakOPMJYj6SaNUbQgrF%2BKQ0ZMJuG6U%2BWZGW%2BAoCT3U%2FeS3BdLw1sPWW2%2FAy8QukrEPTwU7LJXBOYDuB3DWJEW1TagsKxAuERFMTVuYqBfn4nzxosv3emWnY6EdX5aAMeyGZ3W3Xlm5FMoM%2B7CkZwaFDguIvTxUK5oF38BuCqD%2F6GI8e9JgSPZkU2Ownzhi4MlUi7wTPeuKpNkNgfp0GP6WMRDVhUuwWaQq33UxqlYbzMlNYMbgdzzCxwVqfne%2B6TKWXmMskn7uCjxDfa4ni9ZoowvmjAykxS3AXqtsnfCHOML6X4MMGOqUBt5FG%2BYQWXa9E3ypJx9bNU6fCEDyxduzCBjx4eo38d5HvDTdhMcwXtrYTJUknuOTUHOSPNKBrNRZ1kD1wIqZ0u8nyQtfKow0vTsAnfoG60Zvi5MWD3i%2BADulrrgG93kYFlRL9Vw%2F1%2B%2FbUDlPGnU7C8%2F%2FaD6RLs7d4heGaF4sagYSeOLxwG1X7W6Vtbx8m90iBGLRyQiiSt%2FHz%2FDwIoG4CNrpCl54A&X-Amz-Signature=5f81b1480a2f80c839bbe5703d72d31cff30b4589342d77b68797bc9a679408e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT27DX7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIG2nQjkPizziIUysAH5fBanYbVMWgjDSUoxPITmcjDArAiEArmQILHzArK5lxUq0ZUarUn5pz0Q3767TSCCk212wK5kq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOphnVwlKVvxffRdkSrcA8mx1aXp3LflQ3mMBQglC85yQFKJszrC6AzC2Hr65dQXKu0IPty%2BOkEPyyqvFKS9y6TsNwmcLnQhlQ%2B7D7c7JC%2FDrHyWVIcF5ScXFEOZA6BmK7y%2Fmz%2F8TphxFPT6cNGCPN7rt6hBggMtT9QlODuMT2lNQn2JcvgwN8nCz3KAnER02xsSS5Ky1TpM%2BSi4mtNsdLNEQpO2uYuGwJCCSG%2B%2BnuEHXjoKx5SnkTDmmraNTy2pfUvnODW2D3yy24BpanZ2PCSl2MOzPjPV3VZT09hStD%2F8oXM7khcMdCIjQN%2Fs0RwTPwOwQx9G2kXgttkiR3oEg6AnF7xhqluZ54W%2FORakOPMJYj6SaNUbQgrF%2BKQ0ZMJuG6U%2BWZGW%2BAoCT3U%2FeS3BdLw1sPWW2%2FAy8QukrEPTwU7LJXBOYDuB3DWJEW1TagsKxAuERFMTVuYqBfn4nzxosv3emWnY6EdX5aAMeyGZ3W3Xlm5FMoM%2B7CkZwaFDguIvTxUK5oF38BuCqD%2F6GI8e9JgSPZkU2Ownzhi4MlUi7wTPeuKpNkNgfp0GP6WMRDVhUuwWaQq33UxqlYbzMlNYMbgdzzCxwVqfne%2B6TKWXmMskn7uCjxDfa4ni9ZoowvmjAykxS3AXqtsnfCHOML6X4MMGOqUBt5FG%2BYQWXa9E3ypJx9bNU6fCEDyxduzCBjx4eo38d5HvDTdhMcwXtrYTJUknuOTUHOSPNKBrNRZ1kD1wIqZ0u8nyQtfKow0vTsAnfoG60Zvi5MWD3i%2BADulrrgG93kYFlRL9Vw%2F1%2B%2FbUDlPGnU7C8%2F%2FaD6RLs7d4heGaF4sagYSeOLxwG1X7W6Vtbx8m90iBGLRyQiiSt%2FHz%2FDwIoG4CNrpCl54A&X-Amz-Signature=76fb9ae1f59d1431fccb85ff7506648da97b3c9b798a319f47a9ba08f5557d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT27DX7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIG2nQjkPizziIUysAH5fBanYbVMWgjDSUoxPITmcjDArAiEArmQILHzArK5lxUq0ZUarUn5pz0Q3767TSCCk212wK5kq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOphnVwlKVvxffRdkSrcA8mx1aXp3LflQ3mMBQglC85yQFKJszrC6AzC2Hr65dQXKu0IPty%2BOkEPyyqvFKS9y6TsNwmcLnQhlQ%2B7D7c7JC%2FDrHyWVIcF5ScXFEOZA6BmK7y%2Fmz%2F8TphxFPT6cNGCPN7rt6hBggMtT9QlODuMT2lNQn2JcvgwN8nCz3KAnER02xsSS5Ky1TpM%2BSi4mtNsdLNEQpO2uYuGwJCCSG%2B%2BnuEHXjoKx5SnkTDmmraNTy2pfUvnODW2D3yy24BpanZ2PCSl2MOzPjPV3VZT09hStD%2F8oXM7khcMdCIjQN%2Fs0RwTPwOwQx9G2kXgttkiR3oEg6AnF7xhqluZ54W%2FORakOPMJYj6SaNUbQgrF%2BKQ0ZMJuG6U%2BWZGW%2BAoCT3U%2FeS3BdLw1sPWW2%2FAy8QukrEPTwU7LJXBOYDuB3DWJEW1TagsKxAuERFMTVuYqBfn4nzxosv3emWnY6EdX5aAMeyGZ3W3Xlm5FMoM%2B7CkZwaFDguIvTxUK5oF38BuCqD%2F6GI8e9JgSPZkU2Ownzhi4MlUi7wTPeuKpNkNgfp0GP6WMRDVhUuwWaQq33UxqlYbzMlNYMbgdzzCxwVqfne%2B6TKWXmMskn7uCjxDfa4ni9ZoowvmjAykxS3AXqtsnfCHOML6X4MMGOqUBt5FG%2BYQWXa9E3ypJx9bNU6fCEDyxduzCBjx4eo38d5HvDTdhMcwXtrYTJUknuOTUHOSPNKBrNRZ1kD1wIqZ0u8nyQtfKow0vTsAnfoG60Zvi5MWD3i%2BADulrrgG93kYFlRL9Vw%2F1%2B%2FbUDlPGnU7C8%2F%2FaD6RLs7d4heGaF4sagYSeOLxwG1X7W6Vtbx8m90iBGLRyQiiSt%2FHz%2FDwIoG4CNrpCl54A&X-Amz-Signature=7e69da054e65acd9976037600d943aa7236307ba5c92fbc61a030e9c6866778a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT27DX7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIG2nQjkPizziIUysAH5fBanYbVMWgjDSUoxPITmcjDArAiEArmQILHzArK5lxUq0ZUarUn5pz0Q3767TSCCk212wK5kq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOphnVwlKVvxffRdkSrcA8mx1aXp3LflQ3mMBQglC85yQFKJszrC6AzC2Hr65dQXKu0IPty%2BOkEPyyqvFKS9y6TsNwmcLnQhlQ%2B7D7c7JC%2FDrHyWVIcF5ScXFEOZA6BmK7y%2Fmz%2F8TphxFPT6cNGCPN7rt6hBggMtT9QlODuMT2lNQn2JcvgwN8nCz3KAnER02xsSS5Ky1TpM%2BSi4mtNsdLNEQpO2uYuGwJCCSG%2B%2BnuEHXjoKx5SnkTDmmraNTy2pfUvnODW2D3yy24BpanZ2PCSl2MOzPjPV3VZT09hStD%2F8oXM7khcMdCIjQN%2Fs0RwTPwOwQx9G2kXgttkiR3oEg6AnF7xhqluZ54W%2FORakOPMJYj6SaNUbQgrF%2BKQ0ZMJuG6U%2BWZGW%2BAoCT3U%2FeS3BdLw1sPWW2%2FAy8QukrEPTwU7LJXBOYDuB3DWJEW1TagsKxAuERFMTVuYqBfn4nzxosv3emWnY6EdX5aAMeyGZ3W3Xlm5FMoM%2B7CkZwaFDguIvTxUK5oF38BuCqD%2F6GI8e9JgSPZkU2Ownzhi4MlUi7wTPeuKpNkNgfp0GP6WMRDVhUuwWaQq33UxqlYbzMlNYMbgdzzCxwVqfne%2B6TKWXmMskn7uCjxDfa4ni9ZoowvmjAykxS3AXqtsnfCHOML6X4MMGOqUBt5FG%2BYQWXa9E3ypJx9bNU6fCEDyxduzCBjx4eo38d5HvDTdhMcwXtrYTJUknuOTUHOSPNKBrNRZ1kD1wIqZ0u8nyQtfKow0vTsAnfoG60Zvi5MWD3i%2BADulrrgG93kYFlRL9Vw%2F1%2B%2FbUDlPGnU7C8%2F%2FaD6RLs7d4heGaF4sagYSeOLxwG1X7W6Vtbx8m90iBGLRyQiiSt%2FHz%2FDwIoG4CNrpCl54A&X-Amz-Signature=ed8af6dc630207ced56e9801d2d1ab6a84d1d00b8937999e67fcd8acbf98af2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
