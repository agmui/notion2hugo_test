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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFHF3LAC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDcXGvZXLektpiRN33tviFN3A73ebLxKwJswoW4gC4AZgIgZA2kRLdRl8%2FGcPZGEA%2BcX5L3ydElb9YnF2o4%2BRBiu2EqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhlwF6hTBIC%2FIX5NCrcA1ECB3yLwrPuRUHXjd6Hcc9ET87PaWCF2sqAKq1IvbEo5WskBnH54AJRZh%2B9OIGZ5FbKaa0M99OjMxPCtb737P1yGRIG8nOyfGa6ig8WU8Y2CErRhMh8l32FtOSxQ3%2FTFZSRk4bgoO6z%2BW8JbSPjZRRm2PNgkyme50rDz7JW80%2FgS%2B2%2Bu7uhWerOCBMqtir%2B8XEvU7sTfmUOa%2B9jAJSKmf5Tzzk9bV4genfmzPAtBTfF6sL%2BDMJ5kI3FGySEKD2cpLWzoS86ez0JpvX2ixK4eFtmMBQb0qXQDryOxLi%2BwDXJpV6H0m3zDewqAds7X8YnuFXmssJCNJl3B8Hju1pqGiI5AUQuYPfDTux97z1pddqeBEGSwtypZ%2BE%2Bl1pUdadV97xH748y%2FYd6g2zkMODrEwRVTbyEQRZW%2B%2B1j9EAgvIEDv3QePMow%2BqNMU88ETILld%2FB2OVfoUgswssQTKfna%2Fu%2FMUF6fWFRJ8Scgg3erzDYos1m3mdk3xZrOwDNcYUeaUI3dfNFfdQgKTR4dC%2BkQLuaUL3UQL53Uj9Wb8pw7AsBAxd4Aqc%2F73NPEB9d2FXDyLc2aHtJm8JUQH%2F%2BvaLu2fOuxKz2%2FMubCEM0ZugnBqzeAbMOKU6tfgfEZsGWxML3evcEGOqUBowLoifFXUipUwqEQQ%2F6oj5mETR0m9iTCPZAOLrZ7Emo3jA%2FFpuwXpZMa4BF5NETIoQii549k1fpyvkm%2FU%2BF1kJFMmT2OhnsP8a9y0EQYd%2Fs7%2B24%2FXTL%2BCX8EMPdzUc1GLZ3IEiu1vEdP7W5QYm3DWy8vhvq%2BTP9w3yiHNKqMYf7aSGvyIpGAxHtJPdc9%2FI%2B0EXfMap0oTm1NPzpiaHdbdfzjH%2Bvr&X-Amz-Signature=4050f7add9792ab9e24d657b81d2e8eb83162a5284a44f7b330a2593ca1df66d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFHF3LAC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDcXGvZXLektpiRN33tviFN3A73ebLxKwJswoW4gC4AZgIgZA2kRLdRl8%2FGcPZGEA%2BcX5L3ydElb9YnF2o4%2BRBiu2EqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhlwF6hTBIC%2FIX5NCrcA1ECB3yLwrPuRUHXjd6Hcc9ET87PaWCF2sqAKq1IvbEo5WskBnH54AJRZh%2B9OIGZ5FbKaa0M99OjMxPCtb737P1yGRIG8nOyfGa6ig8WU8Y2CErRhMh8l32FtOSxQ3%2FTFZSRk4bgoO6z%2BW8JbSPjZRRm2PNgkyme50rDz7JW80%2FgS%2B2%2Bu7uhWerOCBMqtir%2B8XEvU7sTfmUOa%2B9jAJSKmf5Tzzk9bV4genfmzPAtBTfF6sL%2BDMJ5kI3FGySEKD2cpLWzoS86ez0JpvX2ixK4eFtmMBQb0qXQDryOxLi%2BwDXJpV6H0m3zDewqAds7X8YnuFXmssJCNJl3B8Hju1pqGiI5AUQuYPfDTux97z1pddqeBEGSwtypZ%2BE%2Bl1pUdadV97xH748y%2FYd6g2zkMODrEwRVTbyEQRZW%2B%2B1j9EAgvIEDv3QePMow%2BqNMU88ETILld%2FB2OVfoUgswssQTKfna%2Fu%2FMUF6fWFRJ8Scgg3erzDYos1m3mdk3xZrOwDNcYUeaUI3dfNFfdQgKTR4dC%2BkQLuaUL3UQL53Uj9Wb8pw7AsBAxd4Aqc%2F73NPEB9d2FXDyLc2aHtJm8JUQH%2F%2BvaLu2fOuxKz2%2FMubCEM0ZugnBqzeAbMOKU6tfgfEZsGWxML3evcEGOqUBowLoifFXUipUwqEQQ%2F6oj5mETR0m9iTCPZAOLrZ7Emo3jA%2FFpuwXpZMa4BF5NETIoQii549k1fpyvkm%2FU%2BF1kJFMmT2OhnsP8a9y0EQYd%2Fs7%2B24%2FXTL%2BCX8EMPdzUc1GLZ3IEiu1vEdP7W5QYm3DWy8vhvq%2BTP9w3yiHNKqMYf7aSGvyIpGAxHtJPdc9%2FI%2B0EXfMap0oTm1NPzpiaHdbdfzjH%2Bvr&X-Amz-Signature=c8d0b2015de5a5907807eb278fab3bda3138b0b37f0e1be4df7cca61ee0c85a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFHF3LAC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDcXGvZXLektpiRN33tviFN3A73ebLxKwJswoW4gC4AZgIgZA2kRLdRl8%2FGcPZGEA%2BcX5L3ydElb9YnF2o4%2BRBiu2EqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhlwF6hTBIC%2FIX5NCrcA1ECB3yLwrPuRUHXjd6Hcc9ET87PaWCF2sqAKq1IvbEo5WskBnH54AJRZh%2B9OIGZ5FbKaa0M99OjMxPCtb737P1yGRIG8nOyfGa6ig8WU8Y2CErRhMh8l32FtOSxQ3%2FTFZSRk4bgoO6z%2BW8JbSPjZRRm2PNgkyme50rDz7JW80%2FgS%2B2%2Bu7uhWerOCBMqtir%2B8XEvU7sTfmUOa%2B9jAJSKmf5Tzzk9bV4genfmzPAtBTfF6sL%2BDMJ5kI3FGySEKD2cpLWzoS86ez0JpvX2ixK4eFtmMBQb0qXQDryOxLi%2BwDXJpV6H0m3zDewqAds7X8YnuFXmssJCNJl3B8Hju1pqGiI5AUQuYPfDTux97z1pddqeBEGSwtypZ%2BE%2Bl1pUdadV97xH748y%2FYd6g2zkMODrEwRVTbyEQRZW%2B%2B1j9EAgvIEDv3QePMow%2BqNMU88ETILld%2FB2OVfoUgswssQTKfna%2Fu%2FMUF6fWFRJ8Scgg3erzDYos1m3mdk3xZrOwDNcYUeaUI3dfNFfdQgKTR4dC%2BkQLuaUL3UQL53Uj9Wb8pw7AsBAxd4Aqc%2F73NPEB9d2FXDyLc2aHtJm8JUQH%2F%2BvaLu2fOuxKz2%2FMubCEM0ZugnBqzeAbMOKU6tfgfEZsGWxML3evcEGOqUBowLoifFXUipUwqEQQ%2F6oj5mETR0m9iTCPZAOLrZ7Emo3jA%2FFpuwXpZMa4BF5NETIoQii549k1fpyvkm%2FU%2BF1kJFMmT2OhnsP8a9y0EQYd%2Fs7%2B24%2FXTL%2BCX8EMPdzUc1GLZ3IEiu1vEdP7W5QYm3DWy8vhvq%2BTP9w3yiHNKqMYf7aSGvyIpGAxHtJPdc9%2FI%2B0EXfMap0oTm1NPzpiaHdbdfzjH%2Bvr&X-Amz-Signature=e485b0a964acde87fcdbc5d19e4aa75016e38889960dec1b00ff9c9c63ebfa38&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFHF3LAC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDcXGvZXLektpiRN33tviFN3A73ebLxKwJswoW4gC4AZgIgZA2kRLdRl8%2FGcPZGEA%2BcX5L3ydElb9YnF2o4%2BRBiu2EqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhlwF6hTBIC%2FIX5NCrcA1ECB3yLwrPuRUHXjd6Hcc9ET87PaWCF2sqAKq1IvbEo5WskBnH54AJRZh%2B9OIGZ5FbKaa0M99OjMxPCtb737P1yGRIG8nOyfGa6ig8WU8Y2CErRhMh8l32FtOSxQ3%2FTFZSRk4bgoO6z%2BW8JbSPjZRRm2PNgkyme50rDz7JW80%2FgS%2B2%2Bu7uhWerOCBMqtir%2B8XEvU7sTfmUOa%2B9jAJSKmf5Tzzk9bV4genfmzPAtBTfF6sL%2BDMJ5kI3FGySEKD2cpLWzoS86ez0JpvX2ixK4eFtmMBQb0qXQDryOxLi%2BwDXJpV6H0m3zDewqAds7X8YnuFXmssJCNJl3B8Hju1pqGiI5AUQuYPfDTux97z1pddqeBEGSwtypZ%2BE%2Bl1pUdadV97xH748y%2FYd6g2zkMODrEwRVTbyEQRZW%2B%2B1j9EAgvIEDv3QePMow%2BqNMU88ETILld%2FB2OVfoUgswssQTKfna%2Fu%2FMUF6fWFRJ8Scgg3erzDYos1m3mdk3xZrOwDNcYUeaUI3dfNFfdQgKTR4dC%2BkQLuaUL3UQL53Uj9Wb8pw7AsBAxd4Aqc%2F73NPEB9d2FXDyLc2aHtJm8JUQH%2F%2BvaLu2fOuxKz2%2FMubCEM0ZugnBqzeAbMOKU6tfgfEZsGWxML3evcEGOqUBowLoifFXUipUwqEQQ%2F6oj5mETR0m9iTCPZAOLrZ7Emo3jA%2FFpuwXpZMa4BF5NETIoQii549k1fpyvkm%2FU%2BF1kJFMmT2OhnsP8a9y0EQYd%2Fs7%2B24%2FXTL%2BCX8EMPdzUc1GLZ3IEiu1vEdP7W5QYm3DWy8vhvq%2BTP9w3yiHNKqMYf7aSGvyIpGAxHtJPdc9%2FI%2B0EXfMap0oTm1NPzpiaHdbdfzjH%2Bvr&X-Amz-Signature=f1017d93f61fb15336871628d76ada79329d30a3d4e0aade2ab7aeb96d442bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFHF3LAC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDcXGvZXLektpiRN33tviFN3A73ebLxKwJswoW4gC4AZgIgZA2kRLdRl8%2FGcPZGEA%2BcX5L3ydElb9YnF2o4%2BRBiu2EqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhlwF6hTBIC%2FIX5NCrcA1ECB3yLwrPuRUHXjd6Hcc9ET87PaWCF2sqAKq1IvbEo5WskBnH54AJRZh%2B9OIGZ5FbKaa0M99OjMxPCtb737P1yGRIG8nOyfGa6ig8WU8Y2CErRhMh8l32FtOSxQ3%2FTFZSRk4bgoO6z%2BW8JbSPjZRRm2PNgkyme50rDz7JW80%2FgS%2B2%2Bu7uhWerOCBMqtir%2B8XEvU7sTfmUOa%2B9jAJSKmf5Tzzk9bV4genfmzPAtBTfF6sL%2BDMJ5kI3FGySEKD2cpLWzoS86ez0JpvX2ixK4eFtmMBQb0qXQDryOxLi%2BwDXJpV6H0m3zDewqAds7X8YnuFXmssJCNJl3B8Hju1pqGiI5AUQuYPfDTux97z1pddqeBEGSwtypZ%2BE%2Bl1pUdadV97xH748y%2FYd6g2zkMODrEwRVTbyEQRZW%2B%2B1j9EAgvIEDv3QePMow%2BqNMU88ETILld%2FB2OVfoUgswssQTKfna%2Fu%2FMUF6fWFRJ8Scgg3erzDYos1m3mdk3xZrOwDNcYUeaUI3dfNFfdQgKTR4dC%2BkQLuaUL3UQL53Uj9Wb8pw7AsBAxd4Aqc%2F73NPEB9d2FXDyLc2aHtJm8JUQH%2F%2BvaLu2fOuxKz2%2FMubCEM0ZugnBqzeAbMOKU6tfgfEZsGWxML3evcEGOqUBowLoifFXUipUwqEQQ%2F6oj5mETR0m9iTCPZAOLrZ7Emo3jA%2FFpuwXpZMa4BF5NETIoQii549k1fpyvkm%2FU%2BF1kJFMmT2OhnsP8a9y0EQYd%2Fs7%2B24%2FXTL%2BCX8EMPdzUc1GLZ3IEiu1vEdP7W5QYm3DWy8vhvq%2BTP9w3yiHNKqMYf7aSGvyIpGAxHtJPdc9%2FI%2B0EXfMap0oTm1NPzpiaHdbdfzjH%2Bvr&X-Amz-Signature=6ce31bf1696fbae04f29013bf0e9f23b65824205d2d0511e3553438e3eac8f89&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFHF3LAC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDcXGvZXLektpiRN33tviFN3A73ebLxKwJswoW4gC4AZgIgZA2kRLdRl8%2FGcPZGEA%2BcX5L3ydElb9YnF2o4%2BRBiu2EqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhlwF6hTBIC%2FIX5NCrcA1ECB3yLwrPuRUHXjd6Hcc9ET87PaWCF2sqAKq1IvbEo5WskBnH54AJRZh%2B9OIGZ5FbKaa0M99OjMxPCtb737P1yGRIG8nOyfGa6ig8WU8Y2CErRhMh8l32FtOSxQ3%2FTFZSRk4bgoO6z%2BW8JbSPjZRRm2PNgkyme50rDz7JW80%2FgS%2B2%2Bu7uhWerOCBMqtir%2B8XEvU7sTfmUOa%2B9jAJSKmf5Tzzk9bV4genfmzPAtBTfF6sL%2BDMJ5kI3FGySEKD2cpLWzoS86ez0JpvX2ixK4eFtmMBQb0qXQDryOxLi%2BwDXJpV6H0m3zDewqAds7X8YnuFXmssJCNJl3B8Hju1pqGiI5AUQuYPfDTux97z1pddqeBEGSwtypZ%2BE%2Bl1pUdadV97xH748y%2FYd6g2zkMODrEwRVTbyEQRZW%2B%2B1j9EAgvIEDv3QePMow%2BqNMU88ETILld%2FB2OVfoUgswssQTKfna%2Fu%2FMUF6fWFRJ8Scgg3erzDYos1m3mdk3xZrOwDNcYUeaUI3dfNFfdQgKTR4dC%2BkQLuaUL3UQL53Uj9Wb8pw7AsBAxd4Aqc%2F73NPEB9d2FXDyLc2aHtJm8JUQH%2F%2BvaLu2fOuxKz2%2FMubCEM0ZugnBqzeAbMOKU6tfgfEZsGWxML3evcEGOqUBowLoifFXUipUwqEQQ%2F6oj5mETR0m9iTCPZAOLrZ7Emo3jA%2FFpuwXpZMa4BF5NETIoQii549k1fpyvkm%2FU%2BF1kJFMmT2OhnsP8a9y0EQYd%2Fs7%2B24%2FXTL%2BCX8EMPdzUc1GLZ3IEiu1vEdP7W5QYm3DWy8vhvq%2BTP9w3yiHNKqMYf7aSGvyIpGAxHtJPdc9%2FI%2B0EXfMap0oTm1NPzpiaHdbdfzjH%2Bvr&X-Amz-Signature=ac8c3d036e319de1c75d210474d531b3adb304b5cee0f5c5163bb72e94006d09&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFHF3LAC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDcXGvZXLektpiRN33tviFN3A73ebLxKwJswoW4gC4AZgIgZA2kRLdRl8%2FGcPZGEA%2BcX5L3ydElb9YnF2o4%2BRBiu2EqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhlwF6hTBIC%2FIX5NCrcA1ECB3yLwrPuRUHXjd6Hcc9ET87PaWCF2sqAKq1IvbEo5WskBnH54AJRZh%2B9OIGZ5FbKaa0M99OjMxPCtb737P1yGRIG8nOyfGa6ig8WU8Y2CErRhMh8l32FtOSxQ3%2FTFZSRk4bgoO6z%2BW8JbSPjZRRm2PNgkyme50rDz7JW80%2FgS%2B2%2Bu7uhWerOCBMqtir%2B8XEvU7sTfmUOa%2B9jAJSKmf5Tzzk9bV4genfmzPAtBTfF6sL%2BDMJ5kI3FGySEKD2cpLWzoS86ez0JpvX2ixK4eFtmMBQb0qXQDryOxLi%2BwDXJpV6H0m3zDewqAds7X8YnuFXmssJCNJl3B8Hju1pqGiI5AUQuYPfDTux97z1pddqeBEGSwtypZ%2BE%2Bl1pUdadV97xH748y%2FYd6g2zkMODrEwRVTbyEQRZW%2B%2B1j9EAgvIEDv3QePMow%2BqNMU88ETILld%2FB2OVfoUgswssQTKfna%2Fu%2FMUF6fWFRJ8Scgg3erzDYos1m3mdk3xZrOwDNcYUeaUI3dfNFfdQgKTR4dC%2BkQLuaUL3UQL53Uj9Wb8pw7AsBAxd4Aqc%2F73NPEB9d2FXDyLc2aHtJm8JUQH%2F%2BvaLu2fOuxKz2%2FMubCEM0ZugnBqzeAbMOKU6tfgfEZsGWxML3evcEGOqUBowLoifFXUipUwqEQQ%2F6oj5mETR0m9iTCPZAOLrZ7Emo3jA%2FFpuwXpZMa4BF5NETIoQii549k1fpyvkm%2FU%2BF1kJFMmT2OhnsP8a9y0EQYd%2Fs7%2B24%2FXTL%2BCX8EMPdzUc1GLZ3IEiu1vEdP7W5QYm3DWy8vhvq%2BTP9w3yiHNKqMYf7aSGvyIpGAxHtJPdc9%2FI%2B0EXfMap0oTm1NPzpiaHdbdfzjH%2Bvr&X-Amz-Signature=c7ac4795f06dd11e45977e5043a5a571b8e770dabb00a9173709e9d3ad86b548&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
