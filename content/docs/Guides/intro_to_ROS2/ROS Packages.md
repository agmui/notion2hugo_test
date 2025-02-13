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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPYC5WJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUBh8keIRg7u5cAe6F726UhOK4Vbr%2FPbES8e0abdNQCAiEA5Lj7bsJCYTIwlsBaFIAzKpjUayfN1OItmwQdu2M5dHwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMed2ctcwYg6dC8mDSrcA3QRmpRoPwRvRnpiIgvThyjBDmIlHWDp4G%2BKoAf8kxH%2BgDbE695VrV%2BPiU5SlxW4pHD9KGpmivDgMpi5jMH1Ssp6W5t3eYs%2F05YUtTmgDMWbLEV5ybDmbaXJigE8U83kKPU8bbpc7WtSZQxL1JvQkFRnMUfTfrv1XCC19Zw7FGdLNubFMWn1LZQSjwihekOkJzyObL3z%2FjdrXA7FNkEie6%2B3x588RqZ9X83GwXwrijKFrJK1%2B1JTEEI8mc0y6BXdYMH7wfGXb6Tp2Gj5JNEQD1%2Fl%2F2ifOiv9eHD5Y871rlNaRCLWeH73sFLKPgHqGSllvscnG1bpSNdtTRVYJXPLAFr5C9qquqfh3zgKyxESNpoVfIIZ8pP7Jx%2FWIz3pNe391GqipLYEhn7wyhEPYB8k14Tx71HHaSJGu9HdLgv%2BEtJdYr%2FBja9s%2FL5Q3N6Xrnzm47X8d8wdC29iSmf1c%2BHYcF2alKsu9GvfjBD6IjhE5Kz027dQHTr8zSDdwxut44filE4piFSIINMekRbjfES6jxZoYKqaSj92SCOerhokbFGHe%2F57srpwun03sMqqFLvlk8JNBMUwo0B42xHrZKj5ZHUzDCqKQ47A4V6yI%2BxVRXaXaYG%2FGjZL4TcrMyb3MOiYtb0GOqUBjlea6Jxt2vsvsvR%2B5veYhqppthtnuFSzmB88lqi79CJbV0Z6fogk7IcU8%2FLDAf5CB%2FvQu3W%2FeNHZCMgSqpGeJKEpj3kfhH73T%2F2NisNhlsJrs6ps53rfglgWZ4CfIysxsZUNU6sa7e4OcTfYAFz4hyWT6e4%2F1cAS0%2FG8FvnunMkSaHss4U4xTekD%2BN5dbxGhNKy%2BmnIbXDjIxVaTHt5YiXOTaONM&X-Amz-Signature=0a76b2f1341c222ce3ca9fe4027fef99a122acac358f8ed7555211d5fb448dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPYC5WJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUBh8keIRg7u5cAe6F726UhOK4Vbr%2FPbES8e0abdNQCAiEA5Lj7bsJCYTIwlsBaFIAzKpjUayfN1OItmwQdu2M5dHwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMed2ctcwYg6dC8mDSrcA3QRmpRoPwRvRnpiIgvThyjBDmIlHWDp4G%2BKoAf8kxH%2BgDbE695VrV%2BPiU5SlxW4pHD9KGpmivDgMpi5jMH1Ssp6W5t3eYs%2F05YUtTmgDMWbLEV5ybDmbaXJigE8U83kKPU8bbpc7WtSZQxL1JvQkFRnMUfTfrv1XCC19Zw7FGdLNubFMWn1LZQSjwihekOkJzyObL3z%2FjdrXA7FNkEie6%2B3x588RqZ9X83GwXwrijKFrJK1%2B1JTEEI8mc0y6BXdYMH7wfGXb6Tp2Gj5JNEQD1%2Fl%2F2ifOiv9eHD5Y871rlNaRCLWeH73sFLKPgHqGSllvscnG1bpSNdtTRVYJXPLAFr5C9qquqfh3zgKyxESNpoVfIIZ8pP7Jx%2FWIz3pNe391GqipLYEhn7wyhEPYB8k14Tx71HHaSJGu9HdLgv%2BEtJdYr%2FBja9s%2FL5Q3N6Xrnzm47X8d8wdC29iSmf1c%2BHYcF2alKsu9GvfjBD6IjhE5Kz027dQHTr8zSDdwxut44filE4piFSIINMekRbjfES6jxZoYKqaSj92SCOerhokbFGHe%2F57srpwun03sMqqFLvlk8JNBMUwo0B42xHrZKj5ZHUzDCqKQ47A4V6yI%2BxVRXaXaYG%2FGjZL4TcrMyb3MOiYtb0GOqUBjlea6Jxt2vsvsvR%2B5veYhqppthtnuFSzmB88lqi79CJbV0Z6fogk7IcU8%2FLDAf5CB%2FvQu3W%2FeNHZCMgSqpGeJKEpj3kfhH73T%2F2NisNhlsJrs6ps53rfglgWZ4CfIysxsZUNU6sa7e4OcTfYAFz4hyWT6e4%2F1cAS0%2FG8FvnunMkSaHss4U4xTekD%2BN5dbxGhNKy%2BmnIbXDjIxVaTHt5YiXOTaONM&X-Amz-Signature=34824eadbab63dad1544dda3fac10804965c13dd82ee941d26fca580a0a12cca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPYC5WJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUBh8keIRg7u5cAe6F726UhOK4Vbr%2FPbES8e0abdNQCAiEA5Lj7bsJCYTIwlsBaFIAzKpjUayfN1OItmwQdu2M5dHwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMed2ctcwYg6dC8mDSrcA3QRmpRoPwRvRnpiIgvThyjBDmIlHWDp4G%2BKoAf8kxH%2BgDbE695VrV%2BPiU5SlxW4pHD9KGpmivDgMpi5jMH1Ssp6W5t3eYs%2F05YUtTmgDMWbLEV5ybDmbaXJigE8U83kKPU8bbpc7WtSZQxL1JvQkFRnMUfTfrv1XCC19Zw7FGdLNubFMWn1LZQSjwihekOkJzyObL3z%2FjdrXA7FNkEie6%2B3x588RqZ9X83GwXwrijKFrJK1%2B1JTEEI8mc0y6BXdYMH7wfGXb6Tp2Gj5JNEQD1%2Fl%2F2ifOiv9eHD5Y871rlNaRCLWeH73sFLKPgHqGSllvscnG1bpSNdtTRVYJXPLAFr5C9qquqfh3zgKyxESNpoVfIIZ8pP7Jx%2FWIz3pNe391GqipLYEhn7wyhEPYB8k14Tx71HHaSJGu9HdLgv%2BEtJdYr%2FBja9s%2FL5Q3N6Xrnzm47X8d8wdC29iSmf1c%2BHYcF2alKsu9GvfjBD6IjhE5Kz027dQHTr8zSDdwxut44filE4piFSIINMekRbjfES6jxZoYKqaSj92SCOerhokbFGHe%2F57srpwun03sMqqFLvlk8JNBMUwo0B42xHrZKj5ZHUzDCqKQ47A4V6yI%2BxVRXaXaYG%2FGjZL4TcrMyb3MOiYtb0GOqUBjlea6Jxt2vsvsvR%2B5veYhqppthtnuFSzmB88lqi79CJbV0Z6fogk7IcU8%2FLDAf5CB%2FvQu3W%2FeNHZCMgSqpGeJKEpj3kfhH73T%2F2NisNhlsJrs6ps53rfglgWZ4CfIysxsZUNU6sa7e4OcTfYAFz4hyWT6e4%2F1cAS0%2FG8FvnunMkSaHss4U4xTekD%2BN5dbxGhNKy%2BmnIbXDjIxVaTHt5YiXOTaONM&X-Amz-Signature=ea6a1f07ed2a586cd5c65e0b4821e7f8fa7d27300042495642e9901392ed610b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPYC5WJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUBh8keIRg7u5cAe6F726UhOK4Vbr%2FPbES8e0abdNQCAiEA5Lj7bsJCYTIwlsBaFIAzKpjUayfN1OItmwQdu2M5dHwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMed2ctcwYg6dC8mDSrcA3QRmpRoPwRvRnpiIgvThyjBDmIlHWDp4G%2BKoAf8kxH%2BgDbE695VrV%2BPiU5SlxW4pHD9KGpmivDgMpi5jMH1Ssp6W5t3eYs%2F05YUtTmgDMWbLEV5ybDmbaXJigE8U83kKPU8bbpc7WtSZQxL1JvQkFRnMUfTfrv1XCC19Zw7FGdLNubFMWn1LZQSjwihekOkJzyObL3z%2FjdrXA7FNkEie6%2B3x588RqZ9X83GwXwrijKFrJK1%2B1JTEEI8mc0y6BXdYMH7wfGXb6Tp2Gj5JNEQD1%2Fl%2F2ifOiv9eHD5Y871rlNaRCLWeH73sFLKPgHqGSllvscnG1bpSNdtTRVYJXPLAFr5C9qquqfh3zgKyxESNpoVfIIZ8pP7Jx%2FWIz3pNe391GqipLYEhn7wyhEPYB8k14Tx71HHaSJGu9HdLgv%2BEtJdYr%2FBja9s%2FL5Q3N6Xrnzm47X8d8wdC29iSmf1c%2BHYcF2alKsu9GvfjBD6IjhE5Kz027dQHTr8zSDdwxut44filE4piFSIINMekRbjfES6jxZoYKqaSj92SCOerhokbFGHe%2F57srpwun03sMqqFLvlk8JNBMUwo0B42xHrZKj5ZHUzDCqKQ47A4V6yI%2BxVRXaXaYG%2FGjZL4TcrMyb3MOiYtb0GOqUBjlea6Jxt2vsvsvR%2B5veYhqppthtnuFSzmB88lqi79CJbV0Z6fogk7IcU8%2FLDAf5CB%2FvQu3W%2FeNHZCMgSqpGeJKEpj3kfhH73T%2F2NisNhlsJrs6ps53rfglgWZ4CfIysxsZUNU6sa7e4OcTfYAFz4hyWT6e4%2F1cAS0%2FG8FvnunMkSaHss4U4xTekD%2BN5dbxGhNKy%2BmnIbXDjIxVaTHt5YiXOTaONM&X-Amz-Signature=4dd07050cb0ae5bda28c70ba6a1bb2d3001f418686e7f95e21bdea2822d45dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPYC5WJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUBh8keIRg7u5cAe6F726UhOK4Vbr%2FPbES8e0abdNQCAiEA5Lj7bsJCYTIwlsBaFIAzKpjUayfN1OItmwQdu2M5dHwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMed2ctcwYg6dC8mDSrcA3QRmpRoPwRvRnpiIgvThyjBDmIlHWDp4G%2BKoAf8kxH%2BgDbE695VrV%2BPiU5SlxW4pHD9KGpmivDgMpi5jMH1Ssp6W5t3eYs%2F05YUtTmgDMWbLEV5ybDmbaXJigE8U83kKPU8bbpc7WtSZQxL1JvQkFRnMUfTfrv1XCC19Zw7FGdLNubFMWn1LZQSjwihekOkJzyObL3z%2FjdrXA7FNkEie6%2B3x588RqZ9X83GwXwrijKFrJK1%2B1JTEEI8mc0y6BXdYMH7wfGXb6Tp2Gj5JNEQD1%2Fl%2F2ifOiv9eHD5Y871rlNaRCLWeH73sFLKPgHqGSllvscnG1bpSNdtTRVYJXPLAFr5C9qquqfh3zgKyxESNpoVfIIZ8pP7Jx%2FWIz3pNe391GqipLYEhn7wyhEPYB8k14Tx71HHaSJGu9HdLgv%2BEtJdYr%2FBja9s%2FL5Q3N6Xrnzm47X8d8wdC29iSmf1c%2BHYcF2alKsu9GvfjBD6IjhE5Kz027dQHTr8zSDdwxut44filE4piFSIINMekRbjfES6jxZoYKqaSj92SCOerhokbFGHe%2F57srpwun03sMqqFLvlk8JNBMUwo0B42xHrZKj5ZHUzDCqKQ47A4V6yI%2BxVRXaXaYG%2FGjZL4TcrMyb3MOiYtb0GOqUBjlea6Jxt2vsvsvR%2B5veYhqppthtnuFSzmB88lqi79CJbV0Z6fogk7IcU8%2FLDAf5CB%2FvQu3W%2FeNHZCMgSqpGeJKEpj3kfhH73T%2F2NisNhlsJrs6ps53rfglgWZ4CfIysxsZUNU6sa7e4OcTfYAFz4hyWT6e4%2F1cAS0%2FG8FvnunMkSaHss4U4xTekD%2BN5dbxGhNKy%2BmnIbXDjIxVaTHt5YiXOTaONM&X-Amz-Signature=94c49c0e0910b2dfe36c57e8e739da18f8c5377a35ab2135b52831a0f740ed79&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPYC5WJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUBh8keIRg7u5cAe6F726UhOK4Vbr%2FPbES8e0abdNQCAiEA5Lj7bsJCYTIwlsBaFIAzKpjUayfN1OItmwQdu2M5dHwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMed2ctcwYg6dC8mDSrcA3QRmpRoPwRvRnpiIgvThyjBDmIlHWDp4G%2BKoAf8kxH%2BgDbE695VrV%2BPiU5SlxW4pHD9KGpmivDgMpi5jMH1Ssp6W5t3eYs%2F05YUtTmgDMWbLEV5ybDmbaXJigE8U83kKPU8bbpc7WtSZQxL1JvQkFRnMUfTfrv1XCC19Zw7FGdLNubFMWn1LZQSjwihekOkJzyObL3z%2FjdrXA7FNkEie6%2B3x588RqZ9X83GwXwrijKFrJK1%2B1JTEEI8mc0y6BXdYMH7wfGXb6Tp2Gj5JNEQD1%2Fl%2F2ifOiv9eHD5Y871rlNaRCLWeH73sFLKPgHqGSllvscnG1bpSNdtTRVYJXPLAFr5C9qquqfh3zgKyxESNpoVfIIZ8pP7Jx%2FWIz3pNe391GqipLYEhn7wyhEPYB8k14Tx71HHaSJGu9HdLgv%2BEtJdYr%2FBja9s%2FL5Q3N6Xrnzm47X8d8wdC29iSmf1c%2BHYcF2alKsu9GvfjBD6IjhE5Kz027dQHTr8zSDdwxut44filE4piFSIINMekRbjfES6jxZoYKqaSj92SCOerhokbFGHe%2F57srpwun03sMqqFLvlk8JNBMUwo0B42xHrZKj5ZHUzDCqKQ47A4V6yI%2BxVRXaXaYG%2FGjZL4TcrMyb3MOiYtb0GOqUBjlea6Jxt2vsvsvR%2B5veYhqppthtnuFSzmB88lqi79CJbV0Z6fogk7IcU8%2FLDAf5CB%2FvQu3W%2FeNHZCMgSqpGeJKEpj3kfhH73T%2F2NisNhlsJrs6ps53rfglgWZ4CfIysxsZUNU6sa7e4OcTfYAFz4hyWT6e4%2F1cAS0%2FG8FvnunMkSaHss4U4xTekD%2BN5dbxGhNKy%2BmnIbXDjIxVaTHt5YiXOTaONM&X-Amz-Signature=270d6c29f6cc9be674a19522c35d7a489e6194fc632ce02bf718ad135a30ef92&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPYC5WJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUBh8keIRg7u5cAe6F726UhOK4Vbr%2FPbES8e0abdNQCAiEA5Lj7bsJCYTIwlsBaFIAzKpjUayfN1OItmwQdu2M5dHwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMed2ctcwYg6dC8mDSrcA3QRmpRoPwRvRnpiIgvThyjBDmIlHWDp4G%2BKoAf8kxH%2BgDbE695VrV%2BPiU5SlxW4pHD9KGpmivDgMpi5jMH1Ssp6W5t3eYs%2F05YUtTmgDMWbLEV5ybDmbaXJigE8U83kKPU8bbpc7WtSZQxL1JvQkFRnMUfTfrv1XCC19Zw7FGdLNubFMWn1LZQSjwihekOkJzyObL3z%2FjdrXA7FNkEie6%2B3x588RqZ9X83GwXwrijKFrJK1%2B1JTEEI8mc0y6BXdYMH7wfGXb6Tp2Gj5JNEQD1%2Fl%2F2ifOiv9eHD5Y871rlNaRCLWeH73sFLKPgHqGSllvscnG1bpSNdtTRVYJXPLAFr5C9qquqfh3zgKyxESNpoVfIIZ8pP7Jx%2FWIz3pNe391GqipLYEhn7wyhEPYB8k14Tx71HHaSJGu9HdLgv%2BEtJdYr%2FBja9s%2FL5Q3N6Xrnzm47X8d8wdC29iSmf1c%2BHYcF2alKsu9GvfjBD6IjhE5Kz027dQHTr8zSDdwxut44filE4piFSIINMekRbjfES6jxZoYKqaSj92SCOerhokbFGHe%2F57srpwun03sMqqFLvlk8JNBMUwo0B42xHrZKj5ZHUzDCqKQ47A4V6yI%2BxVRXaXaYG%2FGjZL4TcrMyb3MOiYtb0GOqUBjlea6Jxt2vsvsvR%2B5veYhqppthtnuFSzmB88lqi79CJbV0Z6fogk7IcU8%2FLDAf5CB%2FvQu3W%2FeNHZCMgSqpGeJKEpj3kfhH73T%2F2NisNhlsJrs6ps53rfglgWZ4CfIysxsZUNU6sa7e4OcTfYAFz4hyWT6e4%2F1cAS0%2FG8FvnunMkSaHss4U4xTekD%2BN5dbxGhNKy%2BmnIbXDjIxVaTHt5YiXOTaONM&X-Amz-Signature=fcff830c0d02f6029535908dd11f8ae6597e7724ca10fbd954a7e293b292a3d5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
