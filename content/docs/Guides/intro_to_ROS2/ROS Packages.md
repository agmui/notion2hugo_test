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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z62QZWH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHFzX79lbuSXEYcN7UH2nSVbBsIApejkU5Ue26DOyCJsAiBNV0Z6MkKuH7MN6Dl1QAl3gwDGGH%2FS5UFhZwA%2BoG8F%2Fyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM0jd%2BKEtg7u4bn%2FadKtwDgK8Ak7xy6osdUuGsPgutfrE4or3Z6RNG%2Fg7hrJHimMSI6qafv%2B1%2BgI4fcHakZVQ%2B9Uv8Vfg5TsolWF%2FuygHcAZnwKSQZAyU%2F%2FY5%2BAvrABTH%2BFutavN3%2BWDWcZ0yKbGppkR%2FpcUSY0SLL1urWkZAdiFolHPA2wnh%2FBoQxu3KU73wwUXAh2w1kmUBwmPIReobyqfot5ycPS%2FHIJBQvHTAr%2FfLL1S6RtRmMKk9tLpCwOzBGLOTpOJmZoMejsKJxa2k4Y0YSBoWig4qUNbseMg5yeIYcQMC%2FFDjFpTMInC10g2edaA8fnLYmBUKQmHziL7BrpoacYVVZ19JEbW%2BHXDgyxs3W8yPB%2BvQQYu2Wvw%2FfyeHWQaw49n7C7n1pBQTAFJIhxjziYZMRJzjU27E%2FqbqZqy1IK1bfUTor%2FNnebuO4K5Er9Iv1ZXm7Q2OgtirgvLrJGuYC7YKOQa1QR%2Fmu84C%2BBTfmCguBt%2FCrHarf9tMPmwsfkMM4Mq3tkFQTG4QpulAkOg3ZHDtPXFX7%2Flavm5NeIXDBG3q5Zp9AMBgmBgAaJNERxVhyfxa%2BguLsu6tm00n65g8tF0mvShHb0XpWoJE494MHGtcTGUpS%2FB1%2FBgiBO16KN1Bgs0BPTZtOZyww%2BenzwgY6pgFLA5aoUbjF6BQ0q0FF7KIXOjDhRFrAWeioosd1ZKlynuCpajdg3%2F732bCVNKBuBd1ZRp0qY1mM%2BzFZOwLhd8AYYRNF7aJabN9gqjOb12Ie0DoN4WEhDBLt9S80%2FNxdBsiLSIKD8mO2RXms3Os2%2BGpWixj1j4WxbcY%2FtB4%2BK31KZApApybhnIVa01pXZBpO9SplDXW0pxdhVRaLmlrEqGxK6qyL0sQK&X-Amz-Signature=e522f35e619232acc2fe3dfd444fec6ce58d90122f05b1ec3eb17b30cb639f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z62QZWH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHFzX79lbuSXEYcN7UH2nSVbBsIApejkU5Ue26DOyCJsAiBNV0Z6MkKuH7MN6Dl1QAl3gwDGGH%2FS5UFhZwA%2BoG8F%2Fyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM0jd%2BKEtg7u4bn%2FadKtwDgK8Ak7xy6osdUuGsPgutfrE4or3Z6RNG%2Fg7hrJHimMSI6qafv%2B1%2BgI4fcHakZVQ%2B9Uv8Vfg5TsolWF%2FuygHcAZnwKSQZAyU%2F%2FY5%2BAvrABTH%2BFutavN3%2BWDWcZ0yKbGppkR%2FpcUSY0SLL1urWkZAdiFolHPA2wnh%2FBoQxu3KU73wwUXAh2w1kmUBwmPIReobyqfot5ycPS%2FHIJBQvHTAr%2FfLL1S6RtRmMKk9tLpCwOzBGLOTpOJmZoMejsKJxa2k4Y0YSBoWig4qUNbseMg5yeIYcQMC%2FFDjFpTMInC10g2edaA8fnLYmBUKQmHziL7BrpoacYVVZ19JEbW%2BHXDgyxs3W8yPB%2BvQQYu2Wvw%2FfyeHWQaw49n7C7n1pBQTAFJIhxjziYZMRJzjU27E%2FqbqZqy1IK1bfUTor%2FNnebuO4K5Er9Iv1ZXm7Q2OgtirgvLrJGuYC7YKOQa1QR%2Fmu84C%2BBTfmCguBt%2FCrHarf9tMPmwsfkMM4Mq3tkFQTG4QpulAkOg3ZHDtPXFX7%2Flavm5NeIXDBG3q5Zp9AMBgmBgAaJNERxVhyfxa%2BguLsu6tm00n65g8tF0mvShHb0XpWoJE494MHGtcTGUpS%2FB1%2FBgiBO16KN1Bgs0BPTZtOZyww%2BenzwgY6pgFLA5aoUbjF6BQ0q0FF7KIXOjDhRFrAWeioosd1ZKlynuCpajdg3%2F732bCVNKBuBd1ZRp0qY1mM%2BzFZOwLhd8AYYRNF7aJabN9gqjOb12Ie0DoN4WEhDBLt9S80%2FNxdBsiLSIKD8mO2RXms3Os2%2BGpWixj1j4WxbcY%2FtB4%2BK31KZApApybhnIVa01pXZBpO9SplDXW0pxdhVRaLmlrEqGxK6qyL0sQK&X-Amz-Signature=f7e178623719e973519194f3855080477bb7e0b15ee6d53e39b409d8f05c1805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z62QZWH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHFzX79lbuSXEYcN7UH2nSVbBsIApejkU5Ue26DOyCJsAiBNV0Z6MkKuH7MN6Dl1QAl3gwDGGH%2FS5UFhZwA%2BoG8F%2Fyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM0jd%2BKEtg7u4bn%2FadKtwDgK8Ak7xy6osdUuGsPgutfrE4or3Z6RNG%2Fg7hrJHimMSI6qafv%2B1%2BgI4fcHakZVQ%2B9Uv8Vfg5TsolWF%2FuygHcAZnwKSQZAyU%2F%2FY5%2BAvrABTH%2BFutavN3%2BWDWcZ0yKbGppkR%2FpcUSY0SLL1urWkZAdiFolHPA2wnh%2FBoQxu3KU73wwUXAh2w1kmUBwmPIReobyqfot5ycPS%2FHIJBQvHTAr%2FfLL1S6RtRmMKk9tLpCwOzBGLOTpOJmZoMejsKJxa2k4Y0YSBoWig4qUNbseMg5yeIYcQMC%2FFDjFpTMInC10g2edaA8fnLYmBUKQmHziL7BrpoacYVVZ19JEbW%2BHXDgyxs3W8yPB%2BvQQYu2Wvw%2FfyeHWQaw49n7C7n1pBQTAFJIhxjziYZMRJzjU27E%2FqbqZqy1IK1bfUTor%2FNnebuO4K5Er9Iv1ZXm7Q2OgtirgvLrJGuYC7YKOQa1QR%2Fmu84C%2BBTfmCguBt%2FCrHarf9tMPmwsfkMM4Mq3tkFQTG4QpulAkOg3ZHDtPXFX7%2Flavm5NeIXDBG3q5Zp9AMBgmBgAaJNERxVhyfxa%2BguLsu6tm00n65g8tF0mvShHb0XpWoJE494MHGtcTGUpS%2FB1%2FBgiBO16KN1Bgs0BPTZtOZyww%2BenzwgY6pgFLA5aoUbjF6BQ0q0FF7KIXOjDhRFrAWeioosd1ZKlynuCpajdg3%2F732bCVNKBuBd1ZRp0qY1mM%2BzFZOwLhd8AYYRNF7aJabN9gqjOb12Ie0DoN4WEhDBLt9S80%2FNxdBsiLSIKD8mO2RXms3Os2%2BGpWixj1j4WxbcY%2FtB4%2BK31KZApApybhnIVa01pXZBpO9SplDXW0pxdhVRaLmlrEqGxK6qyL0sQK&X-Amz-Signature=e953d93f8e5ada07439a8c119be418b8623f3c3a5ec5653ecadf76c9ce204280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z62QZWH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHFzX79lbuSXEYcN7UH2nSVbBsIApejkU5Ue26DOyCJsAiBNV0Z6MkKuH7MN6Dl1QAl3gwDGGH%2FS5UFhZwA%2BoG8F%2Fyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM0jd%2BKEtg7u4bn%2FadKtwDgK8Ak7xy6osdUuGsPgutfrE4or3Z6RNG%2Fg7hrJHimMSI6qafv%2B1%2BgI4fcHakZVQ%2B9Uv8Vfg5TsolWF%2FuygHcAZnwKSQZAyU%2F%2FY5%2BAvrABTH%2BFutavN3%2BWDWcZ0yKbGppkR%2FpcUSY0SLL1urWkZAdiFolHPA2wnh%2FBoQxu3KU73wwUXAh2w1kmUBwmPIReobyqfot5ycPS%2FHIJBQvHTAr%2FfLL1S6RtRmMKk9tLpCwOzBGLOTpOJmZoMejsKJxa2k4Y0YSBoWig4qUNbseMg5yeIYcQMC%2FFDjFpTMInC10g2edaA8fnLYmBUKQmHziL7BrpoacYVVZ19JEbW%2BHXDgyxs3W8yPB%2BvQQYu2Wvw%2FfyeHWQaw49n7C7n1pBQTAFJIhxjziYZMRJzjU27E%2FqbqZqy1IK1bfUTor%2FNnebuO4K5Er9Iv1ZXm7Q2OgtirgvLrJGuYC7YKOQa1QR%2Fmu84C%2BBTfmCguBt%2FCrHarf9tMPmwsfkMM4Mq3tkFQTG4QpulAkOg3ZHDtPXFX7%2Flavm5NeIXDBG3q5Zp9AMBgmBgAaJNERxVhyfxa%2BguLsu6tm00n65g8tF0mvShHb0XpWoJE494MHGtcTGUpS%2FB1%2FBgiBO16KN1Bgs0BPTZtOZyww%2BenzwgY6pgFLA5aoUbjF6BQ0q0FF7KIXOjDhRFrAWeioosd1ZKlynuCpajdg3%2F732bCVNKBuBd1ZRp0qY1mM%2BzFZOwLhd8AYYRNF7aJabN9gqjOb12Ie0DoN4WEhDBLt9S80%2FNxdBsiLSIKD8mO2RXms3Os2%2BGpWixj1j4WxbcY%2FtB4%2BK31KZApApybhnIVa01pXZBpO9SplDXW0pxdhVRaLmlrEqGxK6qyL0sQK&X-Amz-Signature=d81c116f1448746e47a235f1582e5c7d7c06f6a7fcf59849837eaf0c24ca9e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z62QZWH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHFzX79lbuSXEYcN7UH2nSVbBsIApejkU5Ue26DOyCJsAiBNV0Z6MkKuH7MN6Dl1QAl3gwDGGH%2FS5UFhZwA%2BoG8F%2Fyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM0jd%2BKEtg7u4bn%2FadKtwDgK8Ak7xy6osdUuGsPgutfrE4or3Z6RNG%2Fg7hrJHimMSI6qafv%2B1%2BgI4fcHakZVQ%2B9Uv8Vfg5TsolWF%2FuygHcAZnwKSQZAyU%2F%2FY5%2BAvrABTH%2BFutavN3%2BWDWcZ0yKbGppkR%2FpcUSY0SLL1urWkZAdiFolHPA2wnh%2FBoQxu3KU73wwUXAh2w1kmUBwmPIReobyqfot5ycPS%2FHIJBQvHTAr%2FfLL1S6RtRmMKk9tLpCwOzBGLOTpOJmZoMejsKJxa2k4Y0YSBoWig4qUNbseMg5yeIYcQMC%2FFDjFpTMInC10g2edaA8fnLYmBUKQmHziL7BrpoacYVVZ19JEbW%2BHXDgyxs3W8yPB%2BvQQYu2Wvw%2FfyeHWQaw49n7C7n1pBQTAFJIhxjziYZMRJzjU27E%2FqbqZqy1IK1bfUTor%2FNnebuO4K5Er9Iv1ZXm7Q2OgtirgvLrJGuYC7YKOQa1QR%2Fmu84C%2BBTfmCguBt%2FCrHarf9tMPmwsfkMM4Mq3tkFQTG4QpulAkOg3ZHDtPXFX7%2Flavm5NeIXDBG3q5Zp9AMBgmBgAaJNERxVhyfxa%2BguLsu6tm00n65g8tF0mvShHb0XpWoJE494MHGtcTGUpS%2FB1%2FBgiBO16KN1Bgs0BPTZtOZyww%2BenzwgY6pgFLA5aoUbjF6BQ0q0FF7KIXOjDhRFrAWeioosd1ZKlynuCpajdg3%2F732bCVNKBuBd1ZRp0qY1mM%2BzFZOwLhd8AYYRNF7aJabN9gqjOb12Ie0DoN4WEhDBLt9S80%2FNxdBsiLSIKD8mO2RXms3Os2%2BGpWixj1j4WxbcY%2FtB4%2BK31KZApApybhnIVa01pXZBpO9SplDXW0pxdhVRaLmlrEqGxK6qyL0sQK&X-Amz-Signature=c1e61fde9c6d78d830dfb6e172bb80e18595a594291ca46b19d085b740a33c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z62QZWH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHFzX79lbuSXEYcN7UH2nSVbBsIApejkU5Ue26DOyCJsAiBNV0Z6MkKuH7MN6Dl1QAl3gwDGGH%2FS5UFhZwA%2BoG8F%2Fyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM0jd%2BKEtg7u4bn%2FadKtwDgK8Ak7xy6osdUuGsPgutfrE4or3Z6RNG%2Fg7hrJHimMSI6qafv%2B1%2BgI4fcHakZVQ%2B9Uv8Vfg5TsolWF%2FuygHcAZnwKSQZAyU%2F%2FY5%2BAvrABTH%2BFutavN3%2BWDWcZ0yKbGppkR%2FpcUSY0SLL1urWkZAdiFolHPA2wnh%2FBoQxu3KU73wwUXAh2w1kmUBwmPIReobyqfot5ycPS%2FHIJBQvHTAr%2FfLL1S6RtRmMKk9tLpCwOzBGLOTpOJmZoMejsKJxa2k4Y0YSBoWig4qUNbseMg5yeIYcQMC%2FFDjFpTMInC10g2edaA8fnLYmBUKQmHziL7BrpoacYVVZ19JEbW%2BHXDgyxs3W8yPB%2BvQQYu2Wvw%2FfyeHWQaw49n7C7n1pBQTAFJIhxjziYZMRJzjU27E%2FqbqZqy1IK1bfUTor%2FNnebuO4K5Er9Iv1ZXm7Q2OgtirgvLrJGuYC7YKOQa1QR%2Fmu84C%2BBTfmCguBt%2FCrHarf9tMPmwsfkMM4Mq3tkFQTG4QpulAkOg3ZHDtPXFX7%2Flavm5NeIXDBG3q5Zp9AMBgmBgAaJNERxVhyfxa%2BguLsu6tm00n65g8tF0mvShHb0XpWoJE494MHGtcTGUpS%2FB1%2FBgiBO16KN1Bgs0BPTZtOZyww%2BenzwgY6pgFLA5aoUbjF6BQ0q0FF7KIXOjDhRFrAWeioosd1ZKlynuCpajdg3%2F732bCVNKBuBd1ZRp0qY1mM%2BzFZOwLhd8AYYRNF7aJabN9gqjOb12Ie0DoN4WEhDBLt9S80%2FNxdBsiLSIKD8mO2RXms3Os2%2BGpWixj1j4WxbcY%2FtB4%2BK31KZApApybhnIVa01pXZBpO9SplDXW0pxdhVRaLmlrEqGxK6qyL0sQK&X-Amz-Signature=b2c3a5aee7bd5ea63978a84e460aca3632e1094c3945412fc0930d3dd14fc1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z62QZWH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHFzX79lbuSXEYcN7UH2nSVbBsIApejkU5Ue26DOyCJsAiBNV0Z6MkKuH7MN6Dl1QAl3gwDGGH%2FS5UFhZwA%2BoG8F%2Fyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM0jd%2BKEtg7u4bn%2FadKtwDgK8Ak7xy6osdUuGsPgutfrE4or3Z6RNG%2Fg7hrJHimMSI6qafv%2B1%2BgI4fcHakZVQ%2B9Uv8Vfg5TsolWF%2FuygHcAZnwKSQZAyU%2F%2FY5%2BAvrABTH%2BFutavN3%2BWDWcZ0yKbGppkR%2FpcUSY0SLL1urWkZAdiFolHPA2wnh%2FBoQxu3KU73wwUXAh2w1kmUBwmPIReobyqfot5ycPS%2FHIJBQvHTAr%2FfLL1S6RtRmMKk9tLpCwOzBGLOTpOJmZoMejsKJxa2k4Y0YSBoWig4qUNbseMg5yeIYcQMC%2FFDjFpTMInC10g2edaA8fnLYmBUKQmHziL7BrpoacYVVZ19JEbW%2BHXDgyxs3W8yPB%2BvQQYu2Wvw%2FfyeHWQaw49n7C7n1pBQTAFJIhxjziYZMRJzjU27E%2FqbqZqy1IK1bfUTor%2FNnebuO4K5Er9Iv1ZXm7Q2OgtirgvLrJGuYC7YKOQa1QR%2Fmu84C%2BBTfmCguBt%2FCrHarf9tMPmwsfkMM4Mq3tkFQTG4QpulAkOg3ZHDtPXFX7%2Flavm5NeIXDBG3q5Zp9AMBgmBgAaJNERxVhyfxa%2BguLsu6tm00n65g8tF0mvShHb0XpWoJE494MHGtcTGUpS%2FB1%2FBgiBO16KN1Bgs0BPTZtOZyww%2BenzwgY6pgFLA5aoUbjF6BQ0q0FF7KIXOjDhRFrAWeioosd1ZKlynuCpajdg3%2F732bCVNKBuBd1ZRp0qY1mM%2BzFZOwLhd8AYYRNF7aJabN9gqjOb12Ie0DoN4WEhDBLt9S80%2FNxdBsiLSIKD8mO2RXms3Os2%2BGpWixj1j4WxbcY%2FtB4%2BK31KZApApybhnIVa01pXZBpO9SplDXW0pxdhVRaLmlrEqGxK6qyL0sQK&X-Amz-Signature=59e64b2354a908b34b0c253cbe144583d232007f441a2c13532b315b6a42316e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
