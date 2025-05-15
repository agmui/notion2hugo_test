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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AHAIWM3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFAMPdCXxdLwTreCIFMGr%2BH0GqN51XNw2VqhfgLBZKjkAiEAtlWHwiXocPuAgWs3nILzN2h6AJiQh8Imb%2F%2B9qX9wISAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDC2f3S%2BhDF9dRgmy3ircA1uotKBKiNcU1J9sfPSDYEk%2FLH1G%2BsdQwcv86vjOgFjne4xAJ9pphO2Mnh9lwO5obHj08xHSR7Vk0N3ixCU1mlUbdM5dalm3lLRFjcM4cYFdoRA2%2BT4V5Te5ef0R7NbatNIJBCRSO1dK4j4gl6vO9I32Ob4dajjhnw35zjcHQMrFz6GnyUjuWDEjG6Phxl9dmPHYAysoI6th2Cxvy3n7kg4f9iVjbS7L%2BFf8tRNqC%2FjsIUQXNOJdLC1fTX43PgoGFHz793MvNpREX2dX%2FWK0mSZ5Lql8TqJYlmh%2FRJ1LmhE94yK0zNoWmzQR%2BRECxybw7XB2qUyM0HyDF7k3b7QONHL9o9I51KOI0aKpEZNwg4q6V%2Bd3Glnd08iBWn1HMj32%2FDRt%2F77ayaF%2F7ivBrycOHeFhzdHdTb6jfmJuRiMttwYJyuf5VP9AzuxRJqhsMs7X%2FFf9WZuWvaUVYgGKkrs1CZr%2BGh%2FFO08yc6%2B7ifvBJE5Lvu6P0iVZ3VMQg2LrY1tEpHJTpPo40Urx74vBPNB%2BC%2FuOQM%2BGeLdJ5qiHB4QyCrKG6XEN7w4%2BDqCmAudXFZUTB24kdJ874QZA9WC7LCWALwmnGUNp97Zzgoz0JngvBSmiMU2X3WUMiKwH3aqqMN7RlcEGOqUBWn6c%2BLykyPtDOVfEztVD5r%2FylmyRCkEa3MlUGy5Rk%2BRp20H7FbLKF8V2%2BfuYs7CfkGV9cJaZUEvcfG3Z93LSmvG1HYVKfeWcN87W7LNQ9ZrjGwqTrJPys%2B7vNBhNOI8Q5F4hqdVZCP%2BUggEOnXiWor%2BRuxsRsPXqcWB4GsZAmKrMh%2ByuApPWqHt421VucYLaY9O2NQamBI0OrPNSWxuSiNrPhvvr&X-Amz-Signature=1033bb9ba41dac22aa10b1142a2810ef328ae970dd3655beab6cce0c9fd764c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AHAIWM3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFAMPdCXxdLwTreCIFMGr%2BH0GqN51XNw2VqhfgLBZKjkAiEAtlWHwiXocPuAgWs3nILzN2h6AJiQh8Imb%2F%2B9qX9wISAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDC2f3S%2BhDF9dRgmy3ircA1uotKBKiNcU1J9sfPSDYEk%2FLH1G%2BsdQwcv86vjOgFjne4xAJ9pphO2Mnh9lwO5obHj08xHSR7Vk0N3ixCU1mlUbdM5dalm3lLRFjcM4cYFdoRA2%2BT4V5Te5ef0R7NbatNIJBCRSO1dK4j4gl6vO9I32Ob4dajjhnw35zjcHQMrFz6GnyUjuWDEjG6Phxl9dmPHYAysoI6th2Cxvy3n7kg4f9iVjbS7L%2BFf8tRNqC%2FjsIUQXNOJdLC1fTX43PgoGFHz793MvNpREX2dX%2FWK0mSZ5Lql8TqJYlmh%2FRJ1LmhE94yK0zNoWmzQR%2BRECxybw7XB2qUyM0HyDF7k3b7QONHL9o9I51KOI0aKpEZNwg4q6V%2Bd3Glnd08iBWn1HMj32%2FDRt%2F77ayaF%2F7ivBrycOHeFhzdHdTb6jfmJuRiMttwYJyuf5VP9AzuxRJqhsMs7X%2FFf9WZuWvaUVYgGKkrs1CZr%2BGh%2FFO08yc6%2B7ifvBJE5Lvu6P0iVZ3VMQg2LrY1tEpHJTpPo40Urx74vBPNB%2BC%2FuOQM%2BGeLdJ5qiHB4QyCrKG6XEN7w4%2BDqCmAudXFZUTB24kdJ874QZA9WC7LCWALwmnGUNp97Zzgoz0JngvBSmiMU2X3WUMiKwH3aqqMN7RlcEGOqUBWn6c%2BLykyPtDOVfEztVD5r%2FylmyRCkEa3MlUGy5Rk%2BRp20H7FbLKF8V2%2BfuYs7CfkGV9cJaZUEvcfG3Z93LSmvG1HYVKfeWcN87W7LNQ9ZrjGwqTrJPys%2B7vNBhNOI8Q5F4hqdVZCP%2BUggEOnXiWor%2BRuxsRsPXqcWB4GsZAmKrMh%2ByuApPWqHt421VucYLaY9O2NQamBI0OrPNSWxuSiNrPhvvr&X-Amz-Signature=19c34e8a2154fa367626a6e91e6e9428a6398a474f3125d26467f82910a2984e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AHAIWM3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFAMPdCXxdLwTreCIFMGr%2BH0GqN51XNw2VqhfgLBZKjkAiEAtlWHwiXocPuAgWs3nILzN2h6AJiQh8Imb%2F%2B9qX9wISAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDC2f3S%2BhDF9dRgmy3ircA1uotKBKiNcU1J9sfPSDYEk%2FLH1G%2BsdQwcv86vjOgFjne4xAJ9pphO2Mnh9lwO5obHj08xHSR7Vk0N3ixCU1mlUbdM5dalm3lLRFjcM4cYFdoRA2%2BT4V5Te5ef0R7NbatNIJBCRSO1dK4j4gl6vO9I32Ob4dajjhnw35zjcHQMrFz6GnyUjuWDEjG6Phxl9dmPHYAysoI6th2Cxvy3n7kg4f9iVjbS7L%2BFf8tRNqC%2FjsIUQXNOJdLC1fTX43PgoGFHz793MvNpREX2dX%2FWK0mSZ5Lql8TqJYlmh%2FRJ1LmhE94yK0zNoWmzQR%2BRECxybw7XB2qUyM0HyDF7k3b7QONHL9o9I51KOI0aKpEZNwg4q6V%2Bd3Glnd08iBWn1HMj32%2FDRt%2F77ayaF%2F7ivBrycOHeFhzdHdTb6jfmJuRiMttwYJyuf5VP9AzuxRJqhsMs7X%2FFf9WZuWvaUVYgGKkrs1CZr%2BGh%2FFO08yc6%2B7ifvBJE5Lvu6P0iVZ3VMQg2LrY1tEpHJTpPo40Urx74vBPNB%2BC%2FuOQM%2BGeLdJ5qiHB4QyCrKG6XEN7w4%2BDqCmAudXFZUTB24kdJ874QZA9WC7LCWALwmnGUNp97Zzgoz0JngvBSmiMU2X3WUMiKwH3aqqMN7RlcEGOqUBWn6c%2BLykyPtDOVfEztVD5r%2FylmyRCkEa3MlUGy5Rk%2BRp20H7FbLKF8V2%2BfuYs7CfkGV9cJaZUEvcfG3Z93LSmvG1HYVKfeWcN87W7LNQ9ZrjGwqTrJPys%2B7vNBhNOI8Q5F4hqdVZCP%2BUggEOnXiWor%2BRuxsRsPXqcWB4GsZAmKrMh%2ByuApPWqHt421VucYLaY9O2NQamBI0OrPNSWxuSiNrPhvvr&X-Amz-Signature=25d074abceabbadcfb76e35eeade1b0e532e49677c6f606b05e8ae121c46bfeb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AHAIWM3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFAMPdCXxdLwTreCIFMGr%2BH0GqN51XNw2VqhfgLBZKjkAiEAtlWHwiXocPuAgWs3nILzN2h6AJiQh8Imb%2F%2B9qX9wISAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDC2f3S%2BhDF9dRgmy3ircA1uotKBKiNcU1J9sfPSDYEk%2FLH1G%2BsdQwcv86vjOgFjne4xAJ9pphO2Mnh9lwO5obHj08xHSR7Vk0N3ixCU1mlUbdM5dalm3lLRFjcM4cYFdoRA2%2BT4V5Te5ef0R7NbatNIJBCRSO1dK4j4gl6vO9I32Ob4dajjhnw35zjcHQMrFz6GnyUjuWDEjG6Phxl9dmPHYAysoI6th2Cxvy3n7kg4f9iVjbS7L%2BFf8tRNqC%2FjsIUQXNOJdLC1fTX43PgoGFHz793MvNpREX2dX%2FWK0mSZ5Lql8TqJYlmh%2FRJ1LmhE94yK0zNoWmzQR%2BRECxybw7XB2qUyM0HyDF7k3b7QONHL9o9I51KOI0aKpEZNwg4q6V%2Bd3Glnd08iBWn1HMj32%2FDRt%2F77ayaF%2F7ivBrycOHeFhzdHdTb6jfmJuRiMttwYJyuf5VP9AzuxRJqhsMs7X%2FFf9WZuWvaUVYgGKkrs1CZr%2BGh%2FFO08yc6%2B7ifvBJE5Lvu6P0iVZ3VMQg2LrY1tEpHJTpPo40Urx74vBPNB%2BC%2FuOQM%2BGeLdJ5qiHB4QyCrKG6XEN7w4%2BDqCmAudXFZUTB24kdJ874QZA9WC7LCWALwmnGUNp97Zzgoz0JngvBSmiMU2X3WUMiKwH3aqqMN7RlcEGOqUBWn6c%2BLykyPtDOVfEztVD5r%2FylmyRCkEa3MlUGy5Rk%2BRp20H7FbLKF8V2%2BfuYs7CfkGV9cJaZUEvcfG3Z93LSmvG1HYVKfeWcN87W7LNQ9ZrjGwqTrJPys%2B7vNBhNOI8Q5F4hqdVZCP%2BUggEOnXiWor%2BRuxsRsPXqcWB4GsZAmKrMh%2ByuApPWqHt421VucYLaY9O2NQamBI0OrPNSWxuSiNrPhvvr&X-Amz-Signature=d43ffa233c7339daf6531936f853075e1f0d828ad6e7e445c8820605b1325360&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AHAIWM3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFAMPdCXxdLwTreCIFMGr%2BH0GqN51XNw2VqhfgLBZKjkAiEAtlWHwiXocPuAgWs3nILzN2h6AJiQh8Imb%2F%2B9qX9wISAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDC2f3S%2BhDF9dRgmy3ircA1uotKBKiNcU1J9sfPSDYEk%2FLH1G%2BsdQwcv86vjOgFjne4xAJ9pphO2Mnh9lwO5obHj08xHSR7Vk0N3ixCU1mlUbdM5dalm3lLRFjcM4cYFdoRA2%2BT4V5Te5ef0R7NbatNIJBCRSO1dK4j4gl6vO9I32Ob4dajjhnw35zjcHQMrFz6GnyUjuWDEjG6Phxl9dmPHYAysoI6th2Cxvy3n7kg4f9iVjbS7L%2BFf8tRNqC%2FjsIUQXNOJdLC1fTX43PgoGFHz793MvNpREX2dX%2FWK0mSZ5Lql8TqJYlmh%2FRJ1LmhE94yK0zNoWmzQR%2BRECxybw7XB2qUyM0HyDF7k3b7QONHL9o9I51KOI0aKpEZNwg4q6V%2Bd3Glnd08iBWn1HMj32%2FDRt%2F77ayaF%2F7ivBrycOHeFhzdHdTb6jfmJuRiMttwYJyuf5VP9AzuxRJqhsMs7X%2FFf9WZuWvaUVYgGKkrs1CZr%2BGh%2FFO08yc6%2B7ifvBJE5Lvu6P0iVZ3VMQg2LrY1tEpHJTpPo40Urx74vBPNB%2BC%2FuOQM%2BGeLdJ5qiHB4QyCrKG6XEN7w4%2BDqCmAudXFZUTB24kdJ874QZA9WC7LCWALwmnGUNp97Zzgoz0JngvBSmiMU2X3WUMiKwH3aqqMN7RlcEGOqUBWn6c%2BLykyPtDOVfEztVD5r%2FylmyRCkEa3MlUGy5Rk%2BRp20H7FbLKF8V2%2BfuYs7CfkGV9cJaZUEvcfG3Z93LSmvG1HYVKfeWcN87W7LNQ9ZrjGwqTrJPys%2B7vNBhNOI8Q5F4hqdVZCP%2BUggEOnXiWor%2BRuxsRsPXqcWB4GsZAmKrMh%2ByuApPWqHt421VucYLaY9O2NQamBI0OrPNSWxuSiNrPhvvr&X-Amz-Signature=69137e4ded7b77154a8246a5acf4af0955bf2fc25ed539fb02cef4170ea42a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AHAIWM3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFAMPdCXxdLwTreCIFMGr%2BH0GqN51XNw2VqhfgLBZKjkAiEAtlWHwiXocPuAgWs3nILzN2h6AJiQh8Imb%2F%2B9qX9wISAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDC2f3S%2BhDF9dRgmy3ircA1uotKBKiNcU1J9sfPSDYEk%2FLH1G%2BsdQwcv86vjOgFjne4xAJ9pphO2Mnh9lwO5obHj08xHSR7Vk0N3ixCU1mlUbdM5dalm3lLRFjcM4cYFdoRA2%2BT4V5Te5ef0R7NbatNIJBCRSO1dK4j4gl6vO9I32Ob4dajjhnw35zjcHQMrFz6GnyUjuWDEjG6Phxl9dmPHYAysoI6th2Cxvy3n7kg4f9iVjbS7L%2BFf8tRNqC%2FjsIUQXNOJdLC1fTX43PgoGFHz793MvNpREX2dX%2FWK0mSZ5Lql8TqJYlmh%2FRJ1LmhE94yK0zNoWmzQR%2BRECxybw7XB2qUyM0HyDF7k3b7QONHL9o9I51KOI0aKpEZNwg4q6V%2Bd3Glnd08iBWn1HMj32%2FDRt%2F77ayaF%2F7ivBrycOHeFhzdHdTb6jfmJuRiMttwYJyuf5VP9AzuxRJqhsMs7X%2FFf9WZuWvaUVYgGKkrs1CZr%2BGh%2FFO08yc6%2B7ifvBJE5Lvu6P0iVZ3VMQg2LrY1tEpHJTpPo40Urx74vBPNB%2BC%2FuOQM%2BGeLdJ5qiHB4QyCrKG6XEN7w4%2BDqCmAudXFZUTB24kdJ874QZA9WC7LCWALwmnGUNp97Zzgoz0JngvBSmiMU2X3WUMiKwH3aqqMN7RlcEGOqUBWn6c%2BLykyPtDOVfEztVD5r%2FylmyRCkEa3MlUGy5Rk%2BRp20H7FbLKF8V2%2BfuYs7CfkGV9cJaZUEvcfG3Z93LSmvG1HYVKfeWcN87W7LNQ9ZrjGwqTrJPys%2B7vNBhNOI8Q5F4hqdVZCP%2BUggEOnXiWor%2BRuxsRsPXqcWB4GsZAmKrMh%2ByuApPWqHt421VucYLaY9O2NQamBI0OrPNSWxuSiNrPhvvr&X-Amz-Signature=fe0e72b2f3dfcd6682a3c1325f0c1b318ca0c4f26bc6f5b78cf6f7059e5bf261&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AHAIWM3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFAMPdCXxdLwTreCIFMGr%2BH0GqN51XNw2VqhfgLBZKjkAiEAtlWHwiXocPuAgWs3nILzN2h6AJiQh8Imb%2F%2B9qX9wISAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDC2f3S%2BhDF9dRgmy3ircA1uotKBKiNcU1J9sfPSDYEk%2FLH1G%2BsdQwcv86vjOgFjne4xAJ9pphO2Mnh9lwO5obHj08xHSR7Vk0N3ixCU1mlUbdM5dalm3lLRFjcM4cYFdoRA2%2BT4V5Te5ef0R7NbatNIJBCRSO1dK4j4gl6vO9I32Ob4dajjhnw35zjcHQMrFz6GnyUjuWDEjG6Phxl9dmPHYAysoI6th2Cxvy3n7kg4f9iVjbS7L%2BFf8tRNqC%2FjsIUQXNOJdLC1fTX43PgoGFHz793MvNpREX2dX%2FWK0mSZ5Lql8TqJYlmh%2FRJ1LmhE94yK0zNoWmzQR%2BRECxybw7XB2qUyM0HyDF7k3b7QONHL9o9I51KOI0aKpEZNwg4q6V%2Bd3Glnd08iBWn1HMj32%2FDRt%2F77ayaF%2F7ivBrycOHeFhzdHdTb6jfmJuRiMttwYJyuf5VP9AzuxRJqhsMs7X%2FFf9WZuWvaUVYgGKkrs1CZr%2BGh%2FFO08yc6%2B7ifvBJE5Lvu6P0iVZ3VMQg2LrY1tEpHJTpPo40Urx74vBPNB%2BC%2FuOQM%2BGeLdJ5qiHB4QyCrKG6XEN7w4%2BDqCmAudXFZUTB24kdJ874QZA9WC7LCWALwmnGUNp97Zzgoz0JngvBSmiMU2X3WUMiKwH3aqqMN7RlcEGOqUBWn6c%2BLykyPtDOVfEztVD5r%2FylmyRCkEa3MlUGy5Rk%2BRp20H7FbLKF8V2%2BfuYs7CfkGV9cJaZUEvcfG3Z93LSmvG1HYVKfeWcN87W7LNQ9ZrjGwqTrJPys%2B7vNBhNOI8Q5F4hqdVZCP%2BUggEOnXiWor%2BRuxsRsPXqcWB4GsZAmKrMh%2ByuApPWqHt421VucYLaY9O2NQamBI0OrPNSWxuSiNrPhvvr&X-Amz-Signature=9642d126abb3f087809cf37044fa9448a309f62dc844aa461b36eef20b236eab&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
