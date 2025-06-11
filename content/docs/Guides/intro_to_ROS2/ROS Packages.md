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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FQ7H5YU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIG074q8QBRRftv1oQFh8pBPVZNcYh2VP%2Frfo7PziO87MAiEAirzlHjcfnXzN1e3yi4hFKyP2t61RtgmhW3r29Fcw6wkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwrfSckWtaCXdexEircAw%2Bx5cvKCjH85ipNBi5sPRmnAymYbPF4v2%2FPPDIzZ049KOTFchKhN81Apt9vGKnjfZy3f2FC9X8hAPc8RsQ7mLBuCjA7lKrdmRJToQRd2kg5UhLITruk4DxSX00yEf0b7MJXWtaRnbJxL%2BODI4%2FKlkCI9YqpD9Ra%2BV2SkXRGf0GYTVZu0KfURIr3uMdgfHTCV0%2Fms%2BgO1L%2FDBnjuUyfXS2fnEfsMRVvbIjPExGVs715BREWd1%2FILCG9yoZZiaxo749eKqOMxcvlNwZ1XjM7Wxflop4OVPp8%2BhtvW3DGuFDeod0uMRKl19la3NYDNGK%2BU6WYlR3k4BFYUev6KiarAwGFZnmThXx%2BN8X0MSa6Opx6Ln%2Faslcksv1BMFxl5s%2ByBTWHzGqu1awU3r41wtnF2RCQcUV5UT8ypnc2DAivoWrDOLPinIloHFZphGq4zJ23Prc8DJQ50pNzWcy3XGSYgemNRJKNPsO2m70tBAK7%2FU%2BcRyj1qydw%2B525ScgJFmn1CkAWNqiqsKkY5POkD6cLL2sIavB06hm4QB1iZOE2bjDMEXQGMHUcfBi3ZwEeo0oNxEjafwRoFA3Wtt7%2BZ0UYDeiziwnhj2LH7YbSrzy4KLKPYr5gjsYX3e3PfjTXhMLfnpsIGOqUBx24HfTwt4uik2eGYkc6WjOmQyJMuSlXrEBLh0d3fNZSbIPioXtJiUGw2b7rE79RdN4unRWume8KWJPku7HQ%2BeyAx3nKon%2B3xB3lCUhJh4YEwYamNOodiMOaK3LywUyW%2F2h0XRnxxZosa8HRxrX84nA2t5qxiM3YkmnyV9oPUF3K9gx2jql6V3Qhb9of1RawehUNP8NctkEuMMWP6J%2FK65Pft6d6y&X-Amz-Signature=a98a22e62d7025896b3cd2711034039e49879baca1585b872bc3c5aa9cf767b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FQ7H5YU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIG074q8QBRRftv1oQFh8pBPVZNcYh2VP%2Frfo7PziO87MAiEAirzlHjcfnXzN1e3yi4hFKyP2t61RtgmhW3r29Fcw6wkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwrfSckWtaCXdexEircAw%2Bx5cvKCjH85ipNBi5sPRmnAymYbPF4v2%2FPPDIzZ049KOTFchKhN81Apt9vGKnjfZy3f2FC9X8hAPc8RsQ7mLBuCjA7lKrdmRJToQRd2kg5UhLITruk4DxSX00yEf0b7MJXWtaRnbJxL%2BODI4%2FKlkCI9YqpD9Ra%2BV2SkXRGf0GYTVZu0KfURIr3uMdgfHTCV0%2Fms%2BgO1L%2FDBnjuUyfXS2fnEfsMRVvbIjPExGVs715BREWd1%2FILCG9yoZZiaxo749eKqOMxcvlNwZ1XjM7Wxflop4OVPp8%2BhtvW3DGuFDeod0uMRKl19la3NYDNGK%2BU6WYlR3k4BFYUev6KiarAwGFZnmThXx%2BN8X0MSa6Opx6Ln%2Faslcksv1BMFxl5s%2ByBTWHzGqu1awU3r41wtnF2RCQcUV5UT8ypnc2DAivoWrDOLPinIloHFZphGq4zJ23Prc8DJQ50pNzWcy3XGSYgemNRJKNPsO2m70tBAK7%2FU%2BcRyj1qydw%2B525ScgJFmn1CkAWNqiqsKkY5POkD6cLL2sIavB06hm4QB1iZOE2bjDMEXQGMHUcfBi3ZwEeo0oNxEjafwRoFA3Wtt7%2BZ0UYDeiziwnhj2LH7YbSrzy4KLKPYr5gjsYX3e3PfjTXhMLfnpsIGOqUBx24HfTwt4uik2eGYkc6WjOmQyJMuSlXrEBLh0d3fNZSbIPioXtJiUGw2b7rE79RdN4unRWume8KWJPku7HQ%2BeyAx3nKon%2B3xB3lCUhJh4YEwYamNOodiMOaK3LywUyW%2F2h0XRnxxZosa8HRxrX84nA2t5qxiM3YkmnyV9oPUF3K9gx2jql6V3Qhb9of1RawehUNP8NctkEuMMWP6J%2FK65Pft6d6y&X-Amz-Signature=afa871faf51cbc583eb3428de0fbacf04a440a669a645c9eca4478e8c60edc6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FQ7H5YU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIG074q8QBRRftv1oQFh8pBPVZNcYh2VP%2Frfo7PziO87MAiEAirzlHjcfnXzN1e3yi4hFKyP2t61RtgmhW3r29Fcw6wkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwrfSckWtaCXdexEircAw%2Bx5cvKCjH85ipNBi5sPRmnAymYbPF4v2%2FPPDIzZ049KOTFchKhN81Apt9vGKnjfZy3f2FC9X8hAPc8RsQ7mLBuCjA7lKrdmRJToQRd2kg5UhLITruk4DxSX00yEf0b7MJXWtaRnbJxL%2BODI4%2FKlkCI9YqpD9Ra%2BV2SkXRGf0GYTVZu0KfURIr3uMdgfHTCV0%2Fms%2BgO1L%2FDBnjuUyfXS2fnEfsMRVvbIjPExGVs715BREWd1%2FILCG9yoZZiaxo749eKqOMxcvlNwZ1XjM7Wxflop4OVPp8%2BhtvW3DGuFDeod0uMRKl19la3NYDNGK%2BU6WYlR3k4BFYUev6KiarAwGFZnmThXx%2BN8X0MSa6Opx6Ln%2Faslcksv1BMFxl5s%2ByBTWHzGqu1awU3r41wtnF2RCQcUV5UT8ypnc2DAivoWrDOLPinIloHFZphGq4zJ23Prc8DJQ50pNzWcy3XGSYgemNRJKNPsO2m70tBAK7%2FU%2BcRyj1qydw%2B525ScgJFmn1CkAWNqiqsKkY5POkD6cLL2sIavB06hm4QB1iZOE2bjDMEXQGMHUcfBi3ZwEeo0oNxEjafwRoFA3Wtt7%2BZ0UYDeiziwnhj2LH7YbSrzy4KLKPYr5gjsYX3e3PfjTXhMLfnpsIGOqUBx24HfTwt4uik2eGYkc6WjOmQyJMuSlXrEBLh0d3fNZSbIPioXtJiUGw2b7rE79RdN4unRWume8KWJPku7HQ%2BeyAx3nKon%2B3xB3lCUhJh4YEwYamNOodiMOaK3LywUyW%2F2h0XRnxxZosa8HRxrX84nA2t5qxiM3YkmnyV9oPUF3K9gx2jql6V3Qhb9of1RawehUNP8NctkEuMMWP6J%2FK65Pft6d6y&X-Amz-Signature=492cb9e802ff74f0bb36a9ef7a170d7fdf9b646f5377b39c238f37340e8d57ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FQ7H5YU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIG074q8QBRRftv1oQFh8pBPVZNcYh2VP%2Frfo7PziO87MAiEAirzlHjcfnXzN1e3yi4hFKyP2t61RtgmhW3r29Fcw6wkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwrfSckWtaCXdexEircAw%2Bx5cvKCjH85ipNBi5sPRmnAymYbPF4v2%2FPPDIzZ049KOTFchKhN81Apt9vGKnjfZy3f2FC9X8hAPc8RsQ7mLBuCjA7lKrdmRJToQRd2kg5UhLITruk4DxSX00yEf0b7MJXWtaRnbJxL%2BODI4%2FKlkCI9YqpD9Ra%2BV2SkXRGf0GYTVZu0KfURIr3uMdgfHTCV0%2Fms%2BgO1L%2FDBnjuUyfXS2fnEfsMRVvbIjPExGVs715BREWd1%2FILCG9yoZZiaxo749eKqOMxcvlNwZ1XjM7Wxflop4OVPp8%2BhtvW3DGuFDeod0uMRKl19la3NYDNGK%2BU6WYlR3k4BFYUev6KiarAwGFZnmThXx%2BN8X0MSa6Opx6Ln%2Faslcksv1BMFxl5s%2ByBTWHzGqu1awU3r41wtnF2RCQcUV5UT8ypnc2DAivoWrDOLPinIloHFZphGq4zJ23Prc8DJQ50pNzWcy3XGSYgemNRJKNPsO2m70tBAK7%2FU%2BcRyj1qydw%2B525ScgJFmn1CkAWNqiqsKkY5POkD6cLL2sIavB06hm4QB1iZOE2bjDMEXQGMHUcfBi3ZwEeo0oNxEjafwRoFA3Wtt7%2BZ0UYDeiziwnhj2LH7YbSrzy4KLKPYr5gjsYX3e3PfjTXhMLfnpsIGOqUBx24HfTwt4uik2eGYkc6WjOmQyJMuSlXrEBLh0d3fNZSbIPioXtJiUGw2b7rE79RdN4unRWume8KWJPku7HQ%2BeyAx3nKon%2B3xB3lCUhJh4YEwYamNOodiMOaK3LywUyW%2F2h0XRnxxZosa8HRxrX84nA2t5qxiM3YkmnyV9oPUF3K9gx2jql6V3Qhb9of1RawehUNP8NctkEuMMWP6J%2FK65Pft6d6y&X-Amz-Signature=e356afcec1b347b3332f2c899519dfbe610e513d93103f21e0067aa0440f329a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FQ7H5YU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIG074q8QBRRftv1oQFh8pBPVZNcYh2VP%2Frfo7PziO87MAiEAirzlHjcfnXzN1e3yi4hFKyP2t61RtgmhW3r29Fcw6wkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwrfSckWtaCXdexEircAw%2Bx5cvKCjH85ipNBi5sPRmnAymYbPF4v2%2FPPDIzZ049KOTFchKhN81Apt9vGKnjfZy3f2FC9X8hAPc8RsQ7mLBuCjA7lKrdmRJToQRd2kg5UhLITruk4DxSX00yEf0b7MJXWtaRnbJxL%2BODI4%2FKlkCI9YqpD9Ra%2BV2SkXRGf0GYTVZu0KfURIr3uMdgfHTCV0%2Fms%2BgO1L%2FDBnjuUyfXS2fnEfsMRVvbIjPExGVs715BREWd1%2FILCG9yoZZiaxo749eKqOMxcvlNwZ1XjM7Wxflop4OVPp8%2BhtvW3DGuFDeod0uMRKl19la3NYDNGK%2BU6WYlR3k4BFYUev6KiarAwGFZnmThXx%2BN8X0MSa6Opx6Ln%2Faslcksv1BMFxl5s%2ByBTWHzGqu1awU3r41wtnF2RCQcUV5UT8ypnc2DAivoWrDOLPinIloHFZphGq4zJ23Prc8DJQ50pNzWcy3XGSYgemNRJKNPsO2m70tBAK7%2FU%2BcRyj1qydw%2B525ScgJFmn1CkAWNqiqsKkY5POkD6cLL2sIavB06hm4QB1iZOE2bjDMEXQGMHUcfBi3ZwEeo0oNxEjafwRoFA3Wtt7%2BZ0UYDeiziwnhj2LH7YbSrzy4KLKPYr5gjsYX3e3PfjTXhMLfnpsIGOqUBx24HfTwt4uik2eGYkc6WjOmQyJMuSlXrEBLh0d3fNZSbIPioXtJiUGw2b7rE79RdN4unRWume8KWJPku7HQ%2BeyAx3nKon%2B3xB3lCUhJh4YEwYamNOodiMOaK3LywUyW%2F2h0XRnxxZosa8HRxrX84nA2t5qxiM3YkmnyV9oPUF3K9gx2jql6V3Qhb9of1RawehUNP8NctkEuMMWP6J%2FK65Pft6d6y&X-Amz-Signature=942a393ad97530b3f5dcbab87b522d01733be5fada780d5756083b9ff2a86074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FQ7H5YU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIG074q8QBRRftv1oQFh8pBPVZNcYh2VP%2Frfo7PziO87MAiEAirzlHjcfnXzN1e3yi4hFKyP2t61RtgmhW3r29Fcw6wkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwrfSckWtaCXdexEircAw%2Bx5cvKCjH85ipNBi5sPRmnAymYbPF4v2%2FPPDIzZ049KOTFchKhN81Apt9vGKnjfZy3f2FC9X8hAPc8RsQ7mLBuCjA7lKrdmRJToQRd2kg5UhLITruk4DxSX00yEf0b7MJXWtaRnbJxL%2BODI4%2FKlkCI9YqpD9Ra%2BV2SkXRGf0GYTVZu0KfURIr3uMdgfHTCV0%2Fms%2BgO1L%2FDBnjuUyfXS2fnEfsMRVvbIjPExGVs715BREWd1%2FILCG9yoZZiaxo749eKqOMxcvlNwZ1XjM7Wxflop4OVPp8%2BhtvW3DGuFDeod0uMRKl19la3NYDNGK%2BU6WYlR3k4BFYUev6KiarAwGFZnmThXx%2BN8X0MSa6Opx6Ln%2Faslcksv1BMFxl5s%2ByBTWHzGqu1awU3r41wtnF2RCQcUV5UT8ypnc2DAivoWrDOLPinIloHFZphGq4zJ23Prc8DJQ50pNzWcy3XGSYgemNRJKNPsO2m70tBAK7%2FU%2BcRyj1qydw%2B525ScgJFmn1CkAWNqiqsKkY5POkD6cLL2sIavB06hm4QB1iZOE2bjDMEXQGMHUcfBi3ZwEeo0oNxEjafwRoFA3Wtt7%2BZ0UYDeiziwnhj2LH7YbSrzy4KLKPYr5gjsYX3e3PfjTXhMLfnpsIGOqUBx24HfTwt4uik2eGYkc6WjOmQyJMuSlXrEBLh0d3fNZSbIPioXtJiUGw2b7rE79RdN4unRWume8KWJPku7HQ%2BeyAx3nKon%2B3xB3lCUhJh4YEwYamNOodiMOaK3LywUyW%2F2h0XRnxxZosa8HRxrX84nA2t5qxiM3YkmnyV9oPUF3K9gx2jql6V3Qhb9of1RawehUNP8NctkEuMMWP6J%2FK65Pft6d6y&X-Amz-Signature=1a3b34788352b410baaa9f85e8b0b96359cb60fa84061efe27c3a56beabaaaf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FQ7H5YU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIG074q8QBRRftv1oQFh8pBPVZNcYh2VP%2Frfo7PziO87MAiEAirzlHjcfnXzN1e3yi4hFKyP2t61RtgmhW3r29Fcw6wkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwrfSckWtaCXdexEircAw%2Bx5cvKCjH85ipNBi5sPRmnAymYbPF4v2%2FPPDIzZ049KOTFchKhN81Apt9vGKnjfZy3f2FC9X8hAPc8RsQ7mLBuCjA7lKrdmRJToQRd2kg5UhLITruk4DxSX00yEf0b7MJXWtaRnbJxL%2BODI4%2FKlkCI9YqpD9Ra%2BV2SkXRGf0GYTVZu0KfURIr3uMdgfHTCV0%2Fms%2BgO1L%2FDBnjuUyfXS2fnEfsMRVvbIjPExGVs715BREWd1%2FILCG9yoZZiaxo749eKqOMxcvlNwZ1XjM7Wxflop4OVPp8%2BhtvW3DGuFDeod0uMRKl19la3NYDNGK%2BU6WYlR3k4BFYUev6KiarAwGFZnmThXx%2BN8X0MSa6Opx6Ln%2Faslcksv1BMFxl5s%2ByBTWHzGqu1awU3r41wtnF2RCQcUV5UT8ypnc2DAivoWrDOLPinIloHFZphGq4zJ23Prc8DJQ50pNzWcy3XGSYgemNRJKNPsO2m70tBAK7%2FU%2BcRyj1qydw%2B525ScgJFmn1CkAWNqiqsKkY5POkD6cLL2sIavB06hm4QB1iZOE2bjDMEXQGMHUcfBi3ZwEeo0oNxEjafwRoFA3Wtt7%2BZ0UYDeiziwnhj2LH7YbSrzy4KLKPYr5gjsYX3e3PfjTXhMLfnpsIGOqUBx24HfTwt4uik2eGYkc6WjOmQyJMuSlXrEBLh0d3fNZSbIPioXtJiUGw2b7rE79RdN4unRWume8KWJPku7HQ%2BeyAx3nKon%2B3xB3lCUhJh4YEwYamNOodiMOaK3LywUyW%2F2h0XRnxxZosa8HRxrX84nA2t5qxiM3YkmnyV9oPUF3K9gx2jql6V3Qhb9of1RawehUNP8NctkEuMMWP6J%2FK65Pft6d6y&X-Amz-Signature=fe92df9ad16e38fb27bdee4c22a0c344c6efeb176a38227ff0fe09917891ace1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
