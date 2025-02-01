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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GA63VOS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHO1oCRsZSyktNOIwck9LfEb5DSPF1f8Twf0UcGOFbU%2BAiACcVJ%2BPkMrWbVo4xLAy4LOPlkNUxaYPN2SG%2FZrqyfYNCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bp0yp%2FxiEuUV%2BuR%2FKtwDXatyh81dPw8ISfo4XQLa2fAprNk6ptncxABVbvx5egWf13PBO0JRt7%2BM%2FhZu3Wrus2zHFevtW3LZEaKpSYfuTVnEoCf7fvpCB7MRkTA6w0LEa%2FV98WWiQU2Eww49AUqibvr5Z%2FJNgTF4H2kpEqJ1kEMSr6omD2b2sRnMSao4shwc0embCnaqaYcTj695YlE%2B%2FAKlBsFOvDV4SBHao%2B4R%2FrbhByq7v3bJ0dZL9ih%2F2P9SR%2F4nKTM3KF38ZVGuDJSojQyuhDuvWsCYbhu8n3AF5vmBGprX3Ae72U7C4cvGRC3UOlEaUgFWYJY7scy92%2BSLl8muPFdWlu8RfUji0IAytR0KGZwGkKBfd6nbKajLkwfApIzU4DxdUV%2BQFsGpVI4hTCTqBtr%2BOloaShp336JRW0HX7uIxKL%2F007HU891RvyOaJNcXDd9W5doRiDoelO0WUrJ4lsFKqXnN7xWhhc1WoKHCNiBcP3pimHGEeYWZfKQWYrwl84OWMSJifZGq1pECmkzhlnURj5tzrXIlw4Ic2EOptDmCMo7IUQ%2FHMzNGs71rmnwRaCgRLCEIIyU8m0CiLcoFcBHrddiZRPmtJ4CV05J8ghw4vsFaw0HXorOfFPO3Gr4zoWmlcDPlHswwkqb3vAY6pgEP6F1xGTo8L2%2FVw1ExF6prtiN0Y%2FGXWxpzB7eC2%2FqmUbi0aJ%2FVMKM2nkkheqYcJhjgbsdy78ipXV9miqcg3RZFjHIg26u27DQRl5Z%2FrenPppQ7D%2BXpaQ0gEFSVDkLw4OSgNLOmersO9DNj9fzezhGNfyy0g43zAiN%2BASRODFhALr77RzrlabY6D%2F1dZATQap0M8rWr%2B%2FTeZ8IF91KOMxxvoCvcTXhn&X-Amz-Signature=dfaddd65098485cb15928b90c2bfb2c1ed68e0b527f49b2d67e9002010cacfac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GA63VOS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHO1oCRsZSyktNOIwck9LfEb5DSPF1f8Twf0UcGOFbU%2BAiACcVJ%2BPkMrWbVo4xLAy4LOPlkNUxaYPN2SG%2FZrqyfYNCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bp0yp%2FxiEuUV%2BuR%2FKtwDXatyh81dPw8ISfo4XQLa2fAprNk6ptncxABVbvx5egWf13PBO0JRt7%2BM%2FhZu3Wrus2zHFevtW3LZEaKpSYfuTVnEoCf7fvpCB7MRkTA6w0LEa%2FV98WWiQU2Eww49AUqibvr5Z%2FJNgTF4H2kpEqJ1kEMSr6omD2b2sRnMSao4shwc0embCnaqaYcTj695YlE%2B%2FAKlBsFOvDV4SBHao%2B4R%2FrbhByq7v3bJ0dZL9ih%2F2P9SR%2F4nKTM3KF38ZVGuDJSojQyuhDuvWsCYbhu8n3AF5vmBGprX3Ae72U7C4cvGRC3UOlEaUgFWYJY7scy92%2BSLl8muPFdWlu8RfUji0IAytR0KGZwGkKBfd6nbKajLkwfApIzU4DxdUV%2BQFsGpVI4hTCTqBtr%2BOloaShp336JRW0HX7uIxKL%2F007HU891RvyOaJNcXDd9W5doRiDoelO0WUrJ4lsFKqXnN7xWhhc1WoKHCNiBcP3pimHGEeYWZfKQWYrwl84OWMSJifZGq1pECmkzhlnURj5tzrXIlw4Ic2EOptDmCMo7IUQ%2FHMzNGs71rmnwRaCgRLCEIIyU8m0CiLcoFcBHrddiZRPmtJ4CV05J8ghw4vsFaw0HXorOfFPO3Gr4zoWmlcDPlHswwkqb3vAY6pgEP6F1xGTo8L2%2FVw1ExF6prtiN0Y%2FGXWxpzB7eC2%2FqmUbi0aJ%2FVMKM2nkkheqYcJhjgbsdy78ipXV9miqcg3RZFjHIg26u27DQRl5Z%2FrenPppQ7D%2BXpaQ0gEFSVDkLw4OSgNLOmersO9DNj9fzezhGNfyy0g43zAiN%2BASRODFhALr77RzrlabY6D%2F1dZATQap0M8rWr%2B%2FTeZ8IF91KOMxxvoCvcTXhn&X-Amz-Signature=435d578b16b6bb9367025aed5ccdcbb73be4e2188d7706cfddb7846be8aed239&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GA63VOS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHO1oCRsZSyktNOIwck9LfEb5DSPF1f8Twf0UcGOFbU%2BAiACcVJ%2BPkMrWbVo4xLAy4LOPlkNUxaYPN2SG%2FZrqyfYNCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bp0yp%2FxiEuUV%2BuR%2FKtwDXatyh81dPw8ISfo4XQLa2fAprNk6ptncxABVbvx5egWf13PBO0JRt7%2BM%2FhZu3Wrus2zHFevtW3LZEaKpSYfuTVnEoCf7fvpCB7MRkTA6w0LEa%2FV98WWiQU2Eww49AUqibvr5Z%2FJNgTF4H2kpEqJ1kEMSr6omD2b2sRnMSao4shwc0embCnaqaYcTj695YlE%2B%2FAKlBsFOvDV4SBHao%2B4R%2FrbhByq7v3bJ0dZL9ih%2F2P9SR%2F4nKTM3KF38ZVGuDJSojQyuhDuvWsCYbhu8n3AF5vmBGprX3Ae72U7C4cvGRC3UOlEaUgFWYJY7scy92%2BSLl8muPFdWlu8RfUji0IAytR0KGZwGkKBfd6nbKajLkwfApIzU4DxdUV%2BQFsGpVI4hTCTqBtr%2BOloaShp336JRW0HX7uIxKL%2F007HU891RvyOaJNcXDd9W5doRiDoelO0WUrJ4lsFKqXnN7xWhhc1WoKHCNiBcP3pimHGEeYWZfKQWYrwl84OWMSJifZGq1pECmkzhlnURj5tzrXIlw4Ic2EOptDmCMo7IUQ%2FHMzNGs71rmnwRaCgRLCEIIyU8m0CiLcoFcBHrddiZRPmtJ4CV05J8ghw4vsFaw0HXorOfFPO3Gr4zoWmlcDPlHswwkqb3vAY6pgEP6F1xGTo8L2%2FVw1ExF6prtiN0Y%2FGXWxpzB7eC2%2FqmUbi0aJ%2FVMKM2nkkheqYcJhjgbsdy78ipXV9miqcg3RZFjHIg26u27DQRl5Z%2FrenPppQ7D%2BXpaQ0gEFSVDkLw4OSgNLOmersO9DNj9fzezhGNfyy0g43zAiN%2BASRODFhALr77RzrlabY6D%2F1dZATQap0M8rWr%2B%2FTeZ8IF91KOMxxvoCvcTXhn&X-Amz-Signature=f2ae9409bfc0612c7dab9a8a782a72658425adc7e987b557f173210cca420574&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GA63VOS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHO1oCRsZSyktNOIwck9LfEb5DSPF1f8Twf0UcGOFbU%2BAiACcVJ%2BPkMrWbVo4xLAy4LOPlkNUxaYPN2SG%2FZrqyfYNCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bp0yp%2FxiEuUV%2BuR%2FKtwDXatyh81dPw8ISfo4XQLa2fAprNk6ptncxABVbvx5egWf13PBO0JRt7%2BM%2FhZu3Wrus2zHFevtW3LZEaKpSYfuTVnEoCf7fvpCB7MRkTA6w0LEa%2FV98WWiQU2Eww49AUqibvr5Z%2FJNgTF4H2kpEqJ1kEMSr6omD2b2sRnMSao4shwc0embCnaqaYcTj695YlE%2B%2FAKlBsFOvDV4SBHao%2B4R%2FrbhByq7v3bJ0dZL9ih%2F2P9SR%2F4nKTM3KF38ZVGuDJSojQyuhDuvWsCYbhu8n3AF5vmBGprX3Ae72U7C4cvGRC3UOlEaUgFWYJY7scy92%2BSLl8muPFdWlu8RfUji0IAytR0KGZwGkKBfd6nbKajLkwfApIzU4DxdUV%2BQFsGpVI4hTCTqBtr%2BOloaShp336JRW0HX7uIxKL%2F007HU891RvyOaJNcXDd9W5doRiDoelO0WUrJ4lsFKqXnN7xWhhc1WoKHCNiBcP3pimHGEeYWZfKQWYrwl84OWMSJifZGq1pECmkzhlnURj5tzrXIlw4Ic2EOptDmCMo7IUQ%2FHMzNGs71rmnwRaCgRLCEIIyU8m0CiLcoFcBHrddiZRPmtJ4CV05J8ghw4vsFaw0HXorOfFPO3Gr4zoWmlcDPlHswwkqb3vAY6pgEP6F1xGTo8L2%2FVw1ExF6prtiN0Y%2FGXWxpzB7eC2%2FqmUbi0aJ%2FVMKM2nkkheqYcJhjgbsdy78ipXV9miqcg3RZFjHIg26u27DQRl5Z%2FrenPppQ7D%2BXpaQ0gEFSVDkLw4OSgNLOmersO9DNj9fzezhGNfyy0g43zAiN%2BASRODFhALr77RzrlabY6D%2F1dZATQap0M8rWr%2B%2FTeZ8IF91KOMxxvoCvcTXhn&X-Amz-Signature=a58d1ef7aafbbfda8e5dcefa1d9d840b83d0ef138a014c71c5d28e7de4bc75ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GA63VOS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHO1oCRsZSyktNOIwck9LfEb5DSPF1f8Twf0UcGOFbU%2BAiACcVJ%2BPkMrWbVo4xLAy4LOPlkNUxaYPN2SG%2FZrqyfYNCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bp0yp%2FxiEuUV%2BuR%2FKtwDXatyh81dPw8ISfo4XQLa2fAprNk6ptncxABVbvx5egWf13PBO0JRt7%2BM%2FhZu3Wrus2zHFevtW3LZEaKpSYfuTVnEoCf7fvpCB7MRkTA6w0LEa%2FV98WWiQU2Eww49AUqibvr5Z%2FJNgTF4H2kpEqJ1kEMSr6omD2b2sRnMSao4shwc0embCnaqaYcTj695YlE%2B%2FAKlBsFOvDV4SBHao%2B4R%2FrbhByq7v3bJ0dZL9ih%2F2P9SR%2F4nKTM3KF38ZVGuDJSojQyuhDuvWsCYbhu8n3AF5vmBGprX3Ae72U7C4cvGRC3UOlEaUgFWYJY7scy92%2BSLl8muPFdWlu8RfUji0IAytR0KGZwGkKBfd6nbKajLkwfApIzU4DxdUV%2BQFsGpVI4hTCTqBtr%2BOloaShp336JRW0HX7uIxKL%2F007HU891RvyOaJNcXDd9W5doRiDoelO0WUrJ4lsFKqXnN7xWhhc1WoKHCNiBcP3pimHGEeYWZfKQWYrwl84OWMSJifZGq1pECmkzhlnURj5tzrXIlw4Ic2EOptDmCMo7IUQ%2FHMzNGs71rmnwRaCgRLCEIIyU8m0CiLcoFcBHrddiZRPmtJ4CV05J8ghw4vsFaw0HXorOfFPO3Gr4zoWmlcDPlHswwkqb3vAY6pgEP6F1xGTo8L2%2FVw1ExF6prtiN0Y%2FGXWxpzB7eC2%2FqmUbi0aJ%2FVMKM2nkkheqYcJhjgbsdy78ipXV9miqcg3RZFjHIg26u27DQRl5Z%2FrenPppQ7D%2BXpaQ0gEFSVDkLw4OSgNLOmersO9DNj9fzezhGNfyy0g43zAiN%2BASRODFhALr77RzrlabY6D%2F1dZATQap0M8rWr%2B%2FTeZ8IF91KOMxxvoCvcTXhn&X-Amz-Signature=cb63cd1f1e96b5291d3cbc45a94eeea2c626265a38e67650a78c71e994e950e1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GA63VOS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHO1oCRsZSyktNOIwck9LfEb5DSPF1f8Twf0UcGOFbU%2BAiACcVJ%2BPkMrWbVo4xLAy4LOPlkNUxaYPN2SG%2FZrqyfYNCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bp0yp%2FxiEuUV%2BuR%2FKtwDXatyh81dPw8ISfo4XQLa2fAprNk6ptncxABVbvx5egWf13PBO0JRt7%2BM%2FhZu3Wrus2zHFevtW3LZEaKpSYfuTVnEoCf7fvpCB7MRkTA6w0LEa%2FV98WWiQU2Eww49AUqibvr5Z%2FJNgTF4H2kpEqJ1kEMSr6omD2b2sRnMSao4shwc0embCnaqaYcTj695YlE%2B%2FAKlBsFOvDV4SBHao%2B4R%2FrbhByq7v3bJ0dZL9ih%2F2P9SR%2F4nKTM3KF38ZVGuDJSojQyuhDuvWsCYbhu8n3AF5vmBGprX3Ae72U7C4cvGRC3UOlEaUgFWYJY7scy92%2BSLl8muPFdWlu8RfUji0IAytR0KGZwGkKBfd6nbKajLkwfApIzU4DxdUV%2BQFsGpVI4hTCTqBtr%2BOloaShp336JRW0HX7uIxKL%2F007HU891RvyOaJNcXDd9W5doRiDoelO0WUrJ4lsFKqXnN7xWhhc1WoKHCNiBcP3pimHGEeYWZfKQWYrwl84OWMSJifZGq1pECmkzhlnURj5tzrXIlw4Ic2EOptDmCMo7IUQ%2FHMzNGs71rmnwRaCgRLCEIIyU8m0CiLcoFcBHrddiZRPmtJ4CV05J8ghw4vsFaw0HXorOfFPO3Gr4zoWmlcDPlHswwkqb3vAY6pgEP6F1xGTo8L2%2FVw1ExF6prtiN0Y%2FGXWxpzB7eC2%2FqmUbi0aJ%2FVMKM2nkkheqYcJhjgbsdy78ipXV9miqcg3RZFjHIg26u27DQRl5Z%2FrenPppQ7D%2BXpaQ0gEFSVDkLw4OSgNLOmersO9DNj9fzezhGNfyy0g43zAiN%2BASRODFhALr77RzrlabY6D%2F1dZATQap0M8rWr%2B%2FTeZ8IF91KOMxxvoCvcTXhn&X-Amz-Signature=c396b58206460689d0f7f74d312277089f918b7bd08dfafded4bc20973466f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GA63VOS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHO1oCRsZSyktNOIwck9LfEb5DSPF1f8Twf0UcGOFbU%2BAiACcVJ%2BPkMrWbVo4xLAy4LOPlkNUxaYPN2SG%2FZrqyfYNCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bp0yp%2FxiEuUV%2BuR%2FKtwDXatyh81dPw8ISfo4XQLa2fAprNk6ptncxABVbvx5egWf13PBO0JRt7%2BM%2FhZu3Wrus2zHFevtW3LZEaKpSYfuTVnEoCf7fvpCB7MRkTA6w0LEa%2FV98WWiQU2Eww49AUqibvr5Z%2FJNgTF4H2kpEqJ1kEMSr6omD2b2sRnMSao4shwc0embCnaqaYcTj695YlE%2B%2FAKlBsFOvDV4SBHao%2B4R%2FrbhByq7v3bJ0dZL9ih%2F2P9SR%2F4nKTM3KF38ZVGuDJSojQyuhDuvWsCYbhu8n3AF5vmBGprX3Ae72U7C4cvGRC3UOlEaUgFWYJY7scy92%2BSLl8muPFdWlu8RfUji0IAytR0KGZwGkKBfd6nbKajLkwfApIzU4DxdUV%2BQFsGpVI4hTCTqBtr%2BOloaShp336JRW0HX7uIxKL%2F007HU891RvyOaJNcXDd9W5doRiDoelO0WUrJ4lsFKqXnN7xWhhc1WoKHCNiBcP3pimHGEeYWZfKQWYrwl84OWMSJifZGq1pECmkzhlnURj5tzrXIlw4Ic2EOptDmCMo7IUQ%2FHMzNGs71rmnwRaCgRLCEIIyU8m0CiLcoFcBHrddiZRPmtJ4CV05J8ghw4vsFaw0HXorOfFPO3Gr4zoWmlcDPlHswwkqb3vAY6pgEP6F1xGTo8L2%2FVw1ExF6prtiN0Y%2FGXWxpzB7eC2%2FqmUbi0aJ%2FVMKM2nkkheqYcJhjgbsdy78ipXV9miqcg3RZFjHIg26u27DQRl5Z%2FrenPppQ7D%2BXpaQ0gEFSVDkLw4OSgNLOmersO9DNj9fzezhGNfyy0g43zAiN%2BASRODFhALr77RzrlabY6D%2F1dZATQap0M8rWr%2B%2FTeZ8IF91KOMxxvoCvcTXhn&X-Amz-Signature=92548282078aa3c483097c8a98fd21fec6f065dd26c54c981a76fda352237f63&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
