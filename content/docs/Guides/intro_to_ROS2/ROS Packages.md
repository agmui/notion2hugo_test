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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN73QK3P%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGc9VlZTL0rwtS5S%2FYu1fVSQvaaDjcZo3pY9Ih%2FfZlsWAiEA6w2Z32lgrIeZkoC8OQrt7eomvMVFxrRlvd2%2BPW5CfpYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETzPOR8j6Wh9SY7ByrcA5q%2BoJo1VsXeenL3itXKVhDtTHgTNsWrGesKxoM76kGIMWTTs2tmNgAxaDo16XkLyOEeVu%2BXHGnBbdu45tdTG0G%2BZXdwmH1wdVjqjnFgoR1oNXssUKxslloR5PCxO%2FCwnjGtRg%2BgbVE5UxkkG1kasXjNfLxWpFxoW5xWPsmQim0Zks9pWaohaSzbsOtJ7MSBGvugg1sDjTDlpTYITftmtpq230yAMlsqHrKSzrhJ%2FAwDcGCk2Zn2w42HvVHUx4WOvmY1LXECpfErvswcnmnVQyk4MRYM23Rh9LJxx6LB7LQ4Ua9oybxO6Px051eEdEl0cy2dtC1%2Fe6Vk9K5Gt%2FWq9peMEDz1njrh736m8no8nIkMwbh1qfQnLMV4uWEBHhIbrpY%2Bo5f47Mc83HqLZh%2FcOXv2vlki45dt0Po2fn6zuIQVFQU1fdDNC6OmuK3hF8EcqrfXowQKFQJ0IGl994u9HXV7yM%2FxdgWWPncGLlw3jNTFhUHr7w%2Fng0K81DcqgsDAvqu4Kx8Xcif4KSMc%2BW5R1tdmAgR5Cj5ayBO7eEbTsyp%2B%2B2ohDB4irm9si6Ylo%2BjDynTA%2Bxz50P4TXzNeb4SEvqUKWlJDxXKQNxFPSaKRVOTniwsQ2o4CApkMPfkUMPiP3b8GOqUBEGdS6qZMSNZvPeySJF8Pqy%2BkaclyA195n8%2FbHuha3jCRVqjTcszaXIrfQluzrRXCothf2mmwZArCYqPVDADDU6Lvu7KXgqTQMwAs3n1LHoix3v3PoOix%2FXTLWip2PK0eu73ACWN1xMSckcwt4l1OmArsrhhQHX2Ke6GFCO65kXP3QYY9bLvzpvN6STCFOSuWjCvTryurIP3vhQjH7dAKZ5MWFj4T&X-Amz-Signature=21c9deb4d9990d40c84b54fd57d75e898e8b51e6c108e424372170151bbfe60f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN73QK3P%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGc9VlZTL0rwtS5S%2FYu1fVSQvaaDjcZo3pY9Ih%2FfZlsWAiEA6w2Z32lgrIeZkoC8OQrt7eomvMVFxrRlvd2%2BPW5CfpYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETzPOR8j6Wh9SY7ByrcA5q%2BoJo1VsXeenL3itXKVhDtTHgTNsWrGesKxoM76kGIMWTTs2tmNgAxaDo16XkLyOEeVu%2BXHGnBbdu45tdTG0G%2BZXdwmH1wdVjqjnFgoR1oNXssUKxslloR5PCxO%2FCwnjGtRg%2BgbVE5UxkkG1kasXjNfLxWpFxoW5xWPsmQim0Zks9pWaohaSzbsOtJ7MSBGvugg1sDjTDlpTYITftmtpq230yAMlsqHrKSzrhJ%2FAwDcGCk2Zn2w42HvVHUx4WOvmY1LXECpfErvswcnmnVQyk4MRYM23Rh9LJxx6LB7LQ4Ua9oybxO6Px051eEdEl0cy2dtC1%2Fe6Vk9K5Gt%2FWq9peMEDz1njrh736m8no8nIkMwbh1qfQnLMV4uWEBHhIbrpY%2Bo5f47Mc83HqLZh%2FcOXv2vlki45dt0Po2fn6zuIQVFQU1fdDNC6OmuK3hF8EcqrfXowQKFQJ0IGl994u9HXV7yM%2FxdgWWPncGLlw3jNTFhUHr7w%2Fng0K81DcqgsDAvqu4Kx8Xcif4KSMc%2BW5R1tdmAgR5Cj5ayBO7eEbTsyp%2B%2B2ohDB4irm9si6Ylo%2BjDynTA%2Bxz50P4TXzNeb4SEvqUKWlJDxXKQNxFPSaKRVOTniwsQ2o4CApkMPfkUMPiP3b8GOqUBEGdS6qZMSNZvPeySJF8Pqy%2BkaclyA195n8%2FbHuha3jCRVqjTcszaXIrfQluzrRXCothf2mmwZArCYqPVDADDU6Lvu7KXgqTQMwAs3n1LHoix3v3PoOix%2FXTLWip2PK0eu73ACWN1xMSckcwt4l1OmArsrhhQHX2Ke6GFCO65kXP3QYY9bLvzpvN6STCFOSuWjCvTryurIP3vhQjH7dAKZ5MWFj4T&X-Amz-Signature=34be436fc753cc3d3c7f58ac10bdaf95ca3f0bcc25ae7113f989b77e0d5e4205&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN73QK3P%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGc9VlZTL0rwtS5S%2FYu1fVSQvaaDjcZo3pY9Ih%2FfZlsWAiEA6w2Z32lgrIeZkoC8OQrt7eomvMVFxrRlvd2%2BPW5CfpYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETzPOR8j6Wh9SY7ByrcA5q%2BoJo1VsXeenL3itXKVhDtTHgTNsWrGesKxoM76kGIMWTTs2tmNgAxaDo16XkLyOEeVu%2BXHGnBbdu45tdTG0G%2BZXdwmH1wdVjqjnFgoR1oNXssUKxslloR5PCxO%2FCwnjGtRg%2BgbVE5UxkkG1kasXjNfLxWpFxoW5xWPsmQim0Zks9pWaohaSzbsOtJ7MSBGvugg1sDjTDlpTYITftmtpq230yAMlsqHrKSzrhJ%2FAwDcGCk2Zn2w42HvVHUx4WOvmY1LXECpfErvswcnmnVQyk4MRYM23Rh9LJxx6LB7LQ4Ua9oybxO6Px051eEdEl0cy2dtC1%2Fe6Vk9K5Gt%2FWq9peMEDz1njrh736m8no8nIkMwbh1qfQnLMV4uWEBHhIbrpY%2Bo5f47Mc83HqLZh%2FcOXv2vlki45dt0Po2fn6zuIQVFQU1fdDNC6OmuK3hF8EcqrfXowQKFQJ0IGl994u9HXV7yM%2FxdgWWPncGLlw3jNTFhUHr7w%2Fng0K81DcqgsDAvqu4Kx8Xcif4KSMc%2BW5R1tdmAgR5Cj5ayBO7eEbTsyp%2B%2B2ohDB4irm9si6Ylo%2BjDynTA%2Bxz50P4TXzNeb4SEvqUKWlJDxXKQNxFPSaKRVOTniwsQ2o4CApkMPfkUMPiP3b8GOqUBEGdS6qZMSNZvPeySJF8Pqy%2BkaclyA195n8%2FbHuha3jCRVqjTcszaXIrfQluzrRXCothf2mmwZArCYqPVDADDU6Lvu7KXgqTQMwAs3n1LHoix3v3PoOix%2FXTLWip2PK0eu73ACWN1xMSckcwt4l1OmArsrhhQHX2Ke6GFCO65kXP3QYY9bLvzpvN6STCFOSuWjCvTryurIP3vhQjH7dAKZ5MWFj4T&X-Amz-Signature=81b1994cc601d9f6437506bef9889ff18856cbb4a4a95f9ead436769bf2ad71e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN73QK3P%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGc9VlZTL0rwtS5S%2FYu1fVSQvaaDjcZo3pY9Ih%2FfZlsWAiEA6w2Z32lgrIeZkoC8OQrt7eomvMVFxrRlvd2%2BPW5CfpYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETzPOR8j6Wh9SY7ByrcA5q%2BoJo1VsXeenL3itXKVhDtTHgTNsWrGesKxoM76kGIMWTTs2tmNgAxaDo16XkLyOEeVu%2BXHGnBbdu45tdTG0G%2BZXdwmH1wdVjqjnFgoR1oNXssUKxslloR5PCxO%2FCwnjGtRg%2BgbVE5UxkkG1kasXjNfLxWpFxoW5xWPsmQim0Zks9pWaohaSzbsOtJ7MSBGvugg1sDjTDlpTYITftmtpq230yAMlsqHrKSzrhJ%2FAwDcGCk2Zn2w42HvVHUx4WOvmY1LXECpfErvswcnmnVQyk4MRYM23Rh9LJxx6LB7LQ4Ua9oybxO6Px051eEdEl0cy2dtC1%2Fe6Vk9K5Gt%2FWq9peMEDz1njrh736m8no8nIkMwbh1qfQnLMV4uWEBHhIbrpY%2Bo5f47Mc83HqLZh%2FcOXv2vlki45dt0Po2fn6zuIQVFQU1fdDNC6OmuK3hF8EcqrfXowQKFQJ0IGl994u9HXV7yM%2FxdgWWPncGLlw3jNTFhUHr7w%2Fng0K81DcqgsDAvqu4Kx8Xcif4KSMc%2BW5R1tdmAgR5Cj5ayBO7eEbTsyp%2B%2B2ohDB4irm9si6Ylo%2BjDynTA%2Bxz50P4TXzNeb4SEvqUKWlJDxXKQNxFPSaKRVOTniwsQ2o4CApkMPfkUMPiP3b8GOqUBEGdS6qZMSNZvPeySJF8Pqy%2BkaclyA195n8%2FbHuha3jCRVqjTcszaXIrfQluzrRXCothf2mmwZArCYqPVDADDU6Lvu7KXgqTQMwAs3n1LHoix3v3PoOix%2FXTLWip2PK0eu73ACWN1xMSckcwt4l1OmArsrhhQHX2Ke6GFCO65kXP3QYY9bLvzpvN6STCFOSuWjCvTryurIP3vhQjH7dAKZ5MWFj4T&X-Amz-Signature=0816f194655433ef00ab5e53658650c23261d573c91769beff544777bfc495d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN73QK3P%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGc9VlZTL0rwtS5S%2FYu1fVSQvaaDjcZo3pY9Ih%2FfZlsWAiEA6w2Z32lgrIeZkoC8OQrt7eomvMVFxrRlvd2%2BPW5CfpYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETzPOR8j6Wh9SY7ByrcA5q%2BoJo1VsXeenL3itXKVhDtTHgTNsWrGesKxoM76kGIMWTTs2tmNgAxaDo16XkLyOEeVu%2BXHGnBbdu45tdTG0G%2BZXdwmH1wdVjqjnFgoR1oNXssUKxslloR5PCxO%2FCwnjGtRg%2BgbVE5UxkkG1kasXjNfLxWpFxoW5xWPsmQim0Zks9pWaohaSzbsOtJ7MSBGvugg1sDjTDlpTYITftmtpq230yAMlsqHrKSzrhJ%2FAwDcGCk2Zn2w42HvVHUx4WOvmY1LXECpfErvswcnmnVQyk4MRYM23Rh9LJxx6LB7LQ4Ua9oybxO6Px051eEdEl0cy2dtC1%2Fe6Vk9K5Gt%2FWq9peMEDz1njrh736m8no8nIkMwbh1qfQnLMV4uWEBHhIbrpY%2Bo5f47Mc83HqLZh%2FcOXv2vlki45dt0Po2fn6zuIQVFQU1fdDNC6OmuK3hF8EcqrfXowQKFQJ0IGl994u9HXV7yM%2FxdgWWPncGLlw3jNTFhUHr7w%2Fng0K81DcqgsDAvqu4Kx8Xcif4KSMc%2BW5R1tdmAgR5Cj5ayBO7eEbTsyp%2B%2B2ohDB4irm9si6Ylo%2BjDynTA%2Bxz50P4TXzNeb4SEvqUKWlJDxXKQNxFPSaKRVOTniwsQ2o4CApkMPfkUMPiP3b8GOqUBEGdS6qZMSNZvPeySJF8Pqy%2BkaclyA195n8%2FbHuha3jCRVqjTcszaXIrfQluzrRXCothf2mmwZArCYqPVDADDU6Lvu7KXgqTQMwAs3n1LHoix3v3PoOix%2FXTLWip2PK0eu73ACWN1xMSckcwt4l1OmArsrhhQHX2Ke6GFCO65kXP3QYY9bLvzpvN6STCFOSuWjCvTryurIP3vhQjH7dAKZ5MWFj4T&X-Amz-Signature=f7c6bd7d522f9f7782fce232b51f501d18f280577faebbd3ee817819a56b3539&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN73QK3P%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGc9VlZTL0rwtS5S%2FYu1fVSQvaaDjcZo3pY9Ih%2FfZlsWAiEA6w2Z32lgrIeZkoC8OQrt7eomvMVFxrRlvd2%2BPW5CfpYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETzPOR8j6Wh9SY7ByrcA5q%2BoJo1VsXeenL3itXKVhDtTHgTNsWrGesKxoM76kGIMWTTs2tmNgAxaDo16XkLyOEeVu%2BXHGnBbdu45tdTG0G%2BZXdwmH1wdVjqjnFgoR1oNXssUKxslloR5PCxO%2FCwnjGtRg%2BgbVE5UxkkG1kasXjNfLxWpFxoW5xWPsmQim0Zks9pWaohaSzbsOtJ7MSBGvugg1sDjTDlpTYITftmtpq230yAMlsqHrKSzrhJ%2FAwDcGCk2Zn2w42HvVHUx4WOvmY1LXECpfErvswcnmnVQyk4MRYM23Rh9LJxx6LB7LQ4Ua9oybxO6Px051eEdEl0cy2dtC1%2Fe6Vk9K5Gt%2FWq9peMEDz1njrh736m8no8nIkMwbh1qfQnLMV4uWEBHhIbrpY%2Bo5f47Mc83HqLZh%2FcOXv2vlki45dt0Po2fn6zuIQVFQU1fdDNC6OmuK3hF8EcqrfXowQKFQJ0IGl994u9HXV7yM%2FxdgWWPncGLlw3jNTFhUHr7w%2Fng0K81DcqgsDAvqu4Kx8Xcif4KSMc%2BW5R1tdmAgR5Cj5ayBO7eEbTsyp%2B%2B2ohDB4irm9si6Ylo%2BjDynTA%2Bxz50P4TXzNeb4SEvqUKWlJDxXKQNxFPSaKRVOTniwsQ2o4CApkMPfkUMPiP3b8GOqUBEGdS6qZMSNZvPeySJF8Pqy%2BkaclyA195n8%2FbHuha3jCRVqjTcszaXIrfQluzrRXCothf2mmwZArCYqPVDADDU6Lvu7KXgqTQMwAs3n1LHoix3v3PoOix%2FXTLWip2PK0eu73ACWN1xMSckcwt4l1OmArsrhhQHX2Ke6GFCO65kXP3QYY9bLvzpvN6STCFOSuWjCvTryurIP3vhQjH7dAKZ5MWFj4T&X-Amz-Signature=ae21e109416ee5ab0f2d97a23997fbfd2e7b1abd62011c60318eca8937461554&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN73QK3P%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGc9VlZTL0rwtS5S%2FYu1fVSQvaaDjcZo3pY9Ih%2FfZlsWAiEA6w2Z32lgrIeZkoC8OQrt7eomvMVFxrRlvd2%2BPW5CfpYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETzPOR8j6Wh9SY7ByrcA5q%2BoJo1VsXeenL3itXKVhDtTHgTNsWrGesKxoM76kGIMWTTs2tmNgAxaDo16XkLyOEeVu%2BXHGnBbdu45tdTG0G%2BZXdwmH1wdVjqjnFgoR1oNXssUKxslloR5PCxO%2FCwnjGtRg%2BgbVE5UxkkG1kasXjNfLxWpFxoW5xWPsmQim0Zks9pWaohaSzbsOtJ7MSBGvugg1sDjTDlpTYITftmtpq230yAMlsqHrKSzrhJ%2FAwDcGCk2Zn2w42HvVHUx4WOvmY1LXECpfErvswcnmnVQyk4MRYM23Rh9LJxx6LB7LQ4Ua9oybxO6Px051eEdEl0cy2dtC1%2Fe6Vk9K5Gt%2FWq9peMEDz1njrh736m8no8nIkMwbh1qfQnLMV4uWEBHhIbrpY%2Bo5f47Mc83HqLZh%2FcOXv2vlki45dt0Po2fn6zuIQVFQU1fdDNC6OmuK3hF8EcqrfXowQKFQJ0IGl994u9HXV7yM%2FxdgWWPncGLlw3jNTFhUHr7w%2Fng0K81DcqgsDAvqu4Kx8Xcif4KSMc%2BW5R1tdmAgR5Cj5ayBO7eEbTsyp%2B%2B2ohDB4irm9si6Ylo%2BjDynTA%2Bxz50P4TXzNeb4SEvqUKWlJDxXKQNxFPSaKRVOTniwsQ2o4CApkMPfkUMPiP3b8GOqUBEGdS6qZMSNZvPeySJF8Pqy%2BkaclyA195n8%2FbHuha3jCRVqjTcszaXIrfQluzrRXCothf2mmwZArCYqPVDADDU6Lvu7KXgqTQMwAs3n1LHoix3v3PoOix%2FXTLWip2PK0eu73ACWN1xMSckcwt4l1OmArsrhhQHX2Ke6GFCO65kXP3QYY9bLvzpvN6STCFOSuWjCvTryurIP3vhQjH7dAKZ5MWFj4T&X-Amz-Signature=9fea879479e6f11bae326d3f3cc4eac7a3b0d58c27b95c3757a694fba952ca67&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
