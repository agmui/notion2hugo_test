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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJ76A3T%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYhHUi%2BncRm063pgaf3aF8sP7TpgpG%2FmlT5plbunxleAiEA%2BUXTRV1BM0XEnX9vntdMLzyxv%2FKpMgakAXuv9KQrZPUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2NIvWVVXeO9UaWLSrcA%2B65AeLBLk%2FV66Zi0oQI7nJCtiPoi7QhHHzJlLjL5Y5lTCLQcaQyRsNsf6G%2Fk881Aqmg01x2d%2FHCNtBKkPf0ghia3uVlV0VR%2BI1skoa0Zs4N%2FXr48qaF2Y6iXnwB7GIt8j1S4NcSuE9vsFLv1U%2F4AUQtsyNaM7Cj%2BrX5iIh6AhMPrkR6SrrRccnF1RG7NqSaxWooVPGYFKUKLXtLRtQMeE6ybErC7riSz8wGrtnxtnDmLqyxZOG7rGoRaWZyt5gzXub%2BRuuG3yITbg71aryXgnXNZf4N4kCjJY8LkXYaKVL2%2Bjxk%2Bgr7gsuZElIWvGlP6M4Gq1CpcJWoZyztmcs0iIhIdv%2BUOQPS1JGsgnHh2oSIOF6v1aRQjqzoE9Y58S2xoKR9ziFfwtUgjq3%2BWviVwMXcOECDcCo2kUEsUpTYI1%2BxQGHsE2qaXTNkZOpxLpOasRXBegMhxwp39cYqGOskrePVnyjBXEoN%2FvM3NieF6i7CNe8LnBA%2FX4I%2Bdn5hCDYoy0bIcdn4xYZw0OB%2BvEuxr1RjqTyyIT0r8fWmGHuUOkmgxVyuvoN48HZC%2BIsfQMf%2BAHLTaRi9s67qiYHiK5a61%2BTc2TA5y%2FkUmDuTRZcwnJ%2B4ZjuTv66DnnrTaRgpMKaE68EGOqUBu6ZdD3K6PLdv5Qc82RsQcd%2FkjQTBAa7Czv%2FCaYcnQ9LQnNluXOG%2B%2F%2BKmdxEBqtym38cmJOoP65OC%2FrHycYdLtwUwPuAqz6YHZPeWXzKdWWyI5Oq4yGCCNxM3iPsr5pJ%2FN8%2B23txQcb53TjgvLtY%2B1U0wzzN68DlQEN%2Bv7MvCdng1LH74epAtXqM5J6q82xwRFwhxASS179ToWWExvBlZi97aU88b&X-Amz-Signature=558081bafc18cf6b0cbf53ae03e1c3a47033db2100bbc19f71cc2df56381b0ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJ76A3T%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYhHUi%2BncRm063pgaf3aF8sP7TpgpG%2FmlT5plbunxleAiEA%2BUXTRV1BM0XEnX9vntdMLzyxv%2FKpMgakAXuv9KQrZPUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2NIvWVVXeO9UaWLSrcA%2B65AeLBLk%2FV66Zi0oQI7nJCtiPoi7QhHHzJlLjL5Y5lTCLQcaQyRsNsf6G%2Fk881Aqmg01x2d%2FHCNtBKkPf0ghia3uVlV0VR%2BI1skoa0Zs4N%2FXr48qaF2Y6iXnwB7GIt8j1S4NcSuE9vsFLv1U%2F4AUQtsyNaM7Cj%2BrX5iIh6AhMPrkR6SrrRccnF1RG7NqSaxWooVPGYFKUKLXtLRtQMeE6ybErC7riSz8wGrtnxtnDmLqyxZOG7rGoRaWZyt5gzXub%2BRuuG3yITbg71aryXgnXNZf4N4kCjJY8LkXYaKVL2%2Bjxk%2Bgr7gsuZElIWvGlP6M4Gq1CpcJWoZyztmcs0iIhIdv%2BUOQPS1JGsgnHh2oSIOF6v1aRQjqzoE9Y58S2xoKR9ziFfwtUgjq3%2BWviVwMXcOECDcCo2kUEsUpTYI1%2BxQGHsE2qaXTNkZOpxLpOasRXBegMhxwp39cYqGOskrePVnyjBXEoN%2FvM3NieF6i7CNe8LnBA%2FX4I%2Bdn5hCDYoy0bIcdn4xYZw0OB%2BvEuxr1RjqTyyIT0r8fWmGHuUOkmgxVyuvoN48HZC%2BIsfQMf%2BAHLTaRi9s67qiYHiK5a61%2BTc2TA5y%2FkUmDuTRZcwnJ%2B4ZjuTv66DnnrTaRgpMKaE68EGOqUBu6ZdD3K6PLdv5Qc82RsQcd%2FkjQTBAa7Czv%2FCaYcnQ9LQnNluXOG%2B%2F%2BKmdxEBqtym38cmJOoP65OC%2FrHycYdLtwUwPuAqz6YHZPeWXzKdWWyI5Oq4yGCCNxM3iPsr5pJ%2FN8%2B23txQcb53TjgvLtY%2B1U0wzzN68DlQEN%2Bv7MvCdng1LH74epAtXqM5J6q82xwRFwhxASS179ToWWExvBlZi97aU88b&X-Amz-Signature=8af11fad0032ab73e64bb3515d6a7e35de3d52799de566f8bde0d04e5d6934b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJ76A3T%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYhHUi%2BncRm063pgaf3aF8sP7TpgpG%2FmlT5plbunxleAiEA%2BUXTRV1BM0XEnX9vntdMLzyxv%2FKpMgakAXuv9KQrZPUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2NIvWVVXeO9UaWLSrcA%2B65AeLBLk%2FV66Zi0oQI7nJCtiPoi7QhHHzJlLjL5Y5lTCLQcaQyRsNsf6G%2Fk881Aqmg01x2d%2FHCNtBKkPf0ghia3uVlV0VR%2BI1skoa0Zs4N%2FXr48qaF2Y6iXnwB7GIt8j1S4NcSuE9vsFLv1U%2F4AUQtsyNaM7Cj%2BrX5iIh6AhMPrkR6SrrRccnF1RG7NqSaxWooVPGYFKUKLXtLRtQMeE6ybErC7riSz8wGrtnxtnDmLqyxZOG7rGoRaWZyt5gzXub%2BRuuG3yITbg71aryXgnXNZf4N4kCjJY8LkXYaKVL2%2Bjxk%2Bgr7gsuZElIWvGlP6M4Gq1CpcJWoZyztmcs0iIhIdv%2BUOQPS1JGsgnHh2oSIOF6v1aRQjqzoE9Y58S2xoKR9ziFfwtUgjq3%2BWviVwMXcOECDcCo2kUEsUpTYI1%2BxQGHsE2qaXTNkZOpxLpOasRXBegMhxwp39cYqGOskrePVnyjBXEoN%2FvM3NieF6i7CNe8LnBA%2FX4I%2Bdn5hCDYoy0bIcdn4xYZw0OB%2BvEuxr1RjqTyyIT0r8fWmGHuUOkmgxVyuvoN48HZC%2BIsfQMf%2BAHLTaRi9s67qiYHiK5a61%2BTc2TA5y%2FkUmDuTRZcwnJ%2B4ZjuTv66DnnrTaRgpMKaE68EGOqUBu6ZdD3K6PLdv5Qc82RsQcd%2FkjQTBAa7Czv%2FCaYcnQ9LQnNluXOG%2B%2F%2BKmdxEBqtym38cmJOoP65OC%2FrHycYdLtwUwPuAqz6YHZPeWXzKdWWyI5Oq4yGCCNxM3iPsr5pJ%2FN8%2B23txQcb53TjgvLtY%2B1U0wzzN68DlQEN%2Bv7MvCdng1LH74epAtXqM5J6q82xwRFwhxASS179ToWWExvBlZi97aU88b&X-Amz-Signature=19d21aa9de409162efa6b08405fe380cb076bfe1fc2eb19ccf8b84f84e0bae83&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJ76A3T%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYhHUi%2BncRm063pgaf3aF8sP7TpgpG%2FmlT5plbunxleAiEA%2BUXTRV1BM0XEnX9vntdMLzyxv%2FKpMgakAXuv9KQrZPUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2NIvWVVXeO9UaWLSrcA%2B65AeLBLk%2FV66Zi0oQI7nJCtiPoi7QhHHzJlLjL5Y5lTCLQcaQyRsNsf6G%2Fk881Aqmg01x2d%2FHCNtBKkPf0ghia3uVlV0VR%2BI1skoa0Zs4N%2FXr48qaF2Y6iXnwB7GIt8j1S4NcSuE9vsFLv1U%2F4AUQtsyNaM7Cj%2BrX5iIh6AhMPrkR6SrrRccnF1RG7NqSaxWooVPGYFKUKLXtLRtQMeE6ybErC7riSz8wGrtnxtnDmLqyxZOG7rGoRaWZyt5gzXub%2BRuuG3yITbg71aryXgnXNZf4N4kCjJY8LkXYaKVL2%2Bjxk%2Bgr7gsuZElIWvGlP6M4Gq1CpcJWoZyztmcs0iIhIdv%2BUOQPS1JGsgnHh2oSIOF6v1aRQjqzoE9Y58S2xoKR9ziFfwtUgjq3%2BWviVwMXcOECDcCo2kUEsUpTYI1%2BxQGHsE2qaXTNkZOpxLpOasRXBegMhxwp39cYqGOskrePVnyjBXEoN%2FvM3NieF6i7CNe8LnBA%2FX4I%2Bdn5hCDYoy0bIcdn4xYZw0OB%2BvEuxr1RjqTyyIT0r8fWmGHuUOkmgxVyuvoN48HZC%2BIsfQMf%2BAHLTaRi9s67qiYHiK5a61%2BTc2TA5y%2FkUmDuTRZcwnJ%2B4ZjuTv66DnnrTaRgpMKaE68EGOqUBu6ZdD3K6PLdv5Qc82RsQcd%2FkjQTBAa7Czv%2FCaYcnQ9LQnNluXOG%2B%2F%2BKmdxEBqtym38cmJOoP65OC%2FrHycYdLtwUwPuAqz6YHZPeWXzKdWWyI5Oq4yGCCNxM3iPsr5pJ%2FN8%2B23txQcb53TjgvLtY%2B1U0wzzN68DlQEN%2Bv7MvCdng1LH74epAtXqM5J6q82xwRFwhxASS179ToWWExvBlZi97aU88b&X-Amz-Signature=268696d99b9309e0bded0e618cf97220113447ac6bfb596526aedba08283b27a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJ76A3T%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYhHUi%2BncRm063pgaf3aF8sP7TpgpG%2FmlT5plbunxleAiEA%2BUXTRV1BM0XEnX9vntdMLzyxv%2FKpMgakAXuv9KQrZPUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2NIvWVVXeO9UaWLSrcA%2B65AeLBLk%2FV66Zi0oQI7nJCtiPoi7QhHHzJlLjL5Y5lTCLQcaQyRsNsf6G%2Fk881Aqmg01x2d%2FHCNtBKkPf0ghia3uVlV0VR%2BI1skoa0Zs4N%2FXr48qaF2Y6iXnwB7GIt8j1S4NcSuE9vsFLv1U%2F4AUQtsyNaM7Cj%2BrX5iIh6AhMPrkR6SrrRccnF1RG7NqSaxWooVPGYFKUKLXtLRtQMeE6ybErC7riSz8wGrtnxtnDmLqyxZOG7rGoRaWZyt5gzXub%2BRuuG3yITbg71aryXgnXNZf4N4kCjJY8LkXYaKVL2%2Bjxk%2Bgr7gsuZElIWvGlP6M4Gq1CpcJWoZyztmcs0iIhIdv%2BUOQPS1JGsgnHh2oSIOF6v1aRQjqzoE9Y58S2xoKR9ziFfwtUgjq3%2BWviVwMXcOECDcCo2kUEsUpTYI1%2BxQGHsE2qaXTNkZOpxLpOasRXBegMhxwp39cYqGOskrePVnyjBXEoN%2FvM3NieF6i7CNe8LnBA%2FX4I%2Bdn5hCDYoy0bIcdn4xYZw0OB%2BvEuxr1RjqTyyIT0r8fWmGHuUOkmgxVyuvoN48HZC%2BIsfQMf%2BAHLTaRi9s67qiYHiK5a61%2BTc2TA5y%2FkUmDuTRZcwnJ%2B4ZjuTv66DnnrTaRgpMKaE68EGOqUBu6ZdD3K6PLdv5Qc82RsQcd%2FkjQTBAa7Czv%2FCaYcnQ9LQnNluXOG%2B%2F%2BKmdxEBqtym38cmJOoP65OC%2FrHycYdLtwUwPuAqz6YHZPeWXzKdWWyI5Oq4yGCCNxM3iPsr5pJ%2FN8%2B23txQcb53TjgvLtY%2B1U0wzzN68DlQEN%2Bv7MvCdng1LH74epAtXqM5J6q82xwRFwhxASS179ToWWExvBlZi97aU88b&X-Amz-Signature=824bffc9e7fab6c2b92a18cf2c6755f42b4cae05280136691e35950fdcb11131&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJ76A3T%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYhHUi%2BncRm063pgaf3aF8sP7TpgpG%2FmlT5plbunxleAiEA%2BUXTRV1BM0XEnX9vntdMLzyxv%2FKpMgakAXuv9KQrZPUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2NIvWVVXeO9UaWLSrcA%2B65AeLBLk%2FV66Zi0oQI7nJCtiPoi7QhHHzJlLjL5Y5lTCLQcaQyRsNsf6G%2Fk881Aqmg01x2d%2FHCNtBKkPf0ghia3uVlV0VR%2BI1skoa0Zs4N%2FXr48qaF2Y6iXnwB7GIt8j1S4NcSuE9vsFLv1U%2F4AUQtsyNaM7Cj%2BrX5iIh6AhMPrkR6SrrRccnF1RG7NqSaxWooVPGYFKUKLXtLRtQMeE6ybErC7riSz8wGrtnxtnDmLqyxZOG7rGoRaWZyt5gzXub%2BRuuG3yITbg71aryXgnXNZf4N4kCjJY8LkXYaKVL2%2Bjxk%2Bgr7gsuZElIWvGlP6M4Gq1CpcJWoZyztmcs0iIhIdv%2BUOQPS1JGsgnHh2oSIOF6v1aRQjqzoE9Y58S2xoKR9ziFfwtUgjq3%2BWviVwMXcOECDcCo2kUEsUpTYI1%2BxQGHsE2qaXTNkZOpxLpOasRXBegMhxwp39cYqGOskrePVnyjBXEoN%2FvM3NieF6i7CNe8LnBA%2FX4I%2Bdn5hCDYoy0bIcdn4xYZw0OB%2BvEuxr1RjqTyyIT0r8fWmGHuUOkmgxVyuvoN48HZC%2BIsfQMf%2BAHLTaRi9s67qiYHiK5a61%2BTc2TA5y%2FkUmDuTRZcwnJ%2B4ZjuTv66DnnrTaRgpMKaE68EGOqUBu6ZdD3K6PLdv5Qc82RsQcd%2FkjQTBAa7Czv%2FCaYcnQ9LQnNluXOG%2B%2F%2BKmdxEBqtym38cmJOoP65OC%2FrHycYdLtwUwPuAqz6YHZPeWXzKdWWyI5Oq4yGCCNxM3iPsr5pJ%2FN8%2B23txQcb53TjgvLtY%2B1U0wzzN68DlQEN%2Bv7MvCdng1LH74epAtXqM5J6q82xwRFwhxASS179ToWWExvBlZi97aU88b&X-Amz-Signature=34df03a603a13de02656df0dae5ab19a69ab2f3f367ce820728babf85fbd0609&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJ76A3T%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYhHUi%2BncRm063pgaf3aF8sP7TpgpG%2FmlT5plbunxleAiEA%2BUXTRV1BM0XEnX9vntdMLzyxv%2FKpMgakAXuv9KQrZPUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2NIvWVVXeO9UaWLSrcA%2B65AeLBLk%2FV66Zi0oQI7nJCtiPoi7QhHHzJlLjL5Y5lTCLQcaQyRsNsf6G%2Fk881Aqmg01x2d%2FHCNtBKkPf0ghia3uVlV0VR%2BI1skoa0Zs4N%2FXr48qaF2Y6iXnwB7GIt8j1S4NcSuE9vsFLv1U%2F4AUQtsyNaM7Cj%2BrX5iIh6AhMPrkR6SrrRccnF1RG7NqSaxWooVPGYFKUKLXtLRtQMeE6ybErC7riSz8wGrtnxtnDmLqyxZOG7rGoRaWZyt5gzXub%2BRuuG3yITbg71aryXgnXNZf4N4kCjJY8LkXYaKVL2%2Bjxk%2Bgr7gsuZElIWvGlP6M4Gq1CpcJWoZyztmcs0iIhIdv%2BUOQPS1JGsgnHh2oSIOF6v1aRQjqzoE9Y58S2xoKR9ziFfwtUgjq3%2BWviVwMXcOECDcCo2kUEsUpTYI1%2BxQGHsE2qaXTNkZOpxLpOasRXBegMhxwp39cYqGOskrePVnyjBXEoN%2FvM3NieF6i7CNe8LnBA%2FX4I%2Bdn5hCDYoy0bIcdn4xYZw0OB%2BvEuxr1RjqTyyIT0r8fWmGHuUOkmgxVyuvoN48HZC%2BIsfQMf%2BAHLTaRi9s67qiYHiK5a61%2BTc2TA5y%2FkUmDuTRZcwnJ%2B4ZjuTv66DnnrTaRgpMKaE68EGOqUBu6ZdD3K6PLdv5Qc82RsQcd%2FkjQTBAa7Czv%2FCaYcnQ9LQnNluXOG%2B%2F%2BKmdxEBqtym38cmJOoP65OC%2FrHycYdLtwUwPuAqz6YHZPeWXzKdWWyI5Oq4yGCCNxM3iPsr5pJ%2FN8%2B23txQcb53TjgvLtY%2B1U0wzzN68DlQEN%2Bv7MvCdng1LH74epAtXqM5J6q82xwRFwhxASS179ToWWExvBlZi97aU88b&X-Amz-Signature=c778a4eb41cad2eba7b23d0204d1f74ebc235856503d8e1ed2182b5452b276cd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
