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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GSE7PT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBh5mJqRi1nMr0aKZ%2BUIImPTkT9wQrS%2FksdL5tl3k6yXAiEA4UyUgL2VXnj5BU3ZemlmQxER0dSe%2BwqJB24eoflpcFEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0uMAHQ5GhgrHGSDCrcA1Pp31mB1BY2joBYc75FV08yEKqOl%2F02j521t26SKMG9dfw%2BgZvgFSyVLrPBlLCuga0CWUM8FpKuKgDNtMldsUinEMcDv5dsNZHvhrBLgjB28ztxdsUhjJW%2FFXs0lKz44VQpRDa12Vr7Etj4LWnM29%2FFW7b2ELe7Sg4xUDrxasRP6iMH8yRRrnPrXUgH8gVR%2FDq5g%2FlsB3Du%2F4Qo9Tw1V%2FWxPusJPueAgep4RptDRvE7C%2FO0F7uT2kJddo93S1XhKqXvTI%2F%2BhezJyVDlzgoQWtQ5GdA7ffIt6ldZ8pNXOJtANzIU7WjmJ56fS2lY%2BdkcqDnKErFRkE%2BuarlDYBfIj1bPGxMUhhgPkcSfynri3gBaTacq2qtUJuMevgfuOIlBV1ukO%2F1DYa7URblHAWOxXQzgyJDZ6Gwn9rCda711IXlqSC%2FN%2F7LyVYquJHxUC6lfFc0bp0HBOZ7kYLoZavuSkmMK5QMfaIx3ZaDpePECo%2FVj8SbkU5Bwn2N7atg170XbELmR7R2WYgJ8Nt4PxrER3093vTf7hGvnUNw3Fg7Wayby5%2BfmD3WqQpMnC5NVe3lmdikwn4g62bSDKqQNypSK0w%2Fbz%2BDSqFN99d%2FAU30ovQExKKVviQZHmVRvnlUdMOPgnsAGOqUB8w8M6fbu%2BWo%2BtVHu1%2FmuD5apqXpxL6a7JNz27AD%2F3q%2BatZr22JEOTE7NeR3yUakPghzmTb5q4vBqRjMf5JjdijCWfex8A56B%2Fsw0r5LsRmKKrglFMdSWZ5B1OG%2BhnU2k2pMT6oJVDgeYsOfDaAJjuqcz7Hovjk0ukJhA%2F4nf65VRhS1HdiYNGXv0JO9530YbRDpyxvtDor%2FCdHRtpufKrn2ld3eJ&X-Amz-Signature=7bc830b13559b718c083a972c31c83b447217daf789539b7cb515b6d9394aea5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GSE7PT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBh5mJqRi1nMr0aKZ%2BUIImPTkT9wQrS%2FksdL5tl3k6yXAiEA4UyUgL2VXnj5BU3ZemlmQxER0dSe%2BwqJB24eoflpcFEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0uMAHQ5GhgrHGSDCrcA1Pp31mB1BY2joBYc75FV08yEKqOl%2F02j521t26SKMG9dfw%2BgZvgFSyVLrPBlLCuga0CWUM8FpKuKgDNtMldsUinEMcDv5dsNZHvhrBLgjB28ztxdsUhjJW%2FFXs0lKz44VQpRDa12Vr7Etj4LWnM29%2FFW7b2ELe7Sg4xUDrxasRP6iMH8yRRrnPrXUgH8gVR%2FDq5g%2FlsB3Du%2F4Qo9Tw1V%2FWxPusJPueAgep4RptDRvE7C%2FO0F7uT2kJddo93S1XhKqXvTI%2F%2BhezJyVDlzgoQWtQ5GdA7ffIt6ldZ8pNXOJtANzIU7WjmJ56fS2lY%2BdkcqDnKErFRkE%2BuarlDYBfIj1bPGxMUhhgPkcSfynri3gBaTacq2qtUJuMevgfuOIlBV1ukO%2F1DYa7URblHAWOxXQzgyJDZ6Gwn9rCda711IXlqSC%2FN%2F7LyVYquJHxUC6lfFc0bp0HBOZ7kYLoZavuSkmMK5QMfaIx3ZaDpePECo%2FVj8SbkU5Bwn2N7atg170XbELmR7R2WYgJ8Nt4PxrER3093vTf7hGvnUNw3Fg7Wayby5%2BfmD3WqQpMnC5NVe3lmdikwn4g62bSDKqQNypSK0w%2Fbz%2BDSqFN99d%2FAU30ovQExKKVviQZHmVRvnlUdMOPgnsAGOqUB8w8M6fbu%2BWo%2BtVHu1%2FmuD5apqXpxL6a7JNz27AD%2F3q%2BatZr22JEOTE7NeR3yUakPghzmTb5q4vBqRjMf5JjdijCWfex8A56B%2Fsw0r5LsRmKKrglFMdSWZ5B1OG%2BhnU2k2pMT6oJVDgeYsOfDaAJjuqcz7Hovjk0ukJhA%2F4nf65VRhS1HdiYNGXv0JO9530YbRDpyxvtDor%2FCdHRtpufKrn2ld3eJ&X-Amz-Signature=bea4d184ac1ab96b323269ae81b2ea01c4532d7a64d60b5a20f6c32fe42b52c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GSE7PT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBh5mJqRi1nMr0aKZ%2BUIImPTkT9wQrS%2FksdL5tl3k6yXAiEA4UyUgL2VXnj5BU3ZemlmQxER0dSe%2BwqJB24eoflpcFEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0uMAHQ5GhgrHGSDCrcA1Pp31mB1BY2joBYc75FV08yEKqOl%2F02j521t26SKMG9dfw%2BgZvgFSyVLrPBlLCuga0CWUM8FpKuKgDNtMldsUinEMcDv5dsNZHvhrBLgjB28ztxdsUhjJW%2FFXs0lKz44VQpRDa12Vr7Etj4LWnM29%2FFW7b2ELe7Sg4xUDrxasRP6iMH8yRRrnPrXUgH8gVR%2FDq5g%2FlsB3Du%2F4Qo9Tw1V%2FWxPusJPueAgep4RptDRvE7C%2FO0F7uT2kJddo93S1XhKqXvTI%2F%2BhezJyVDlzgoQWtQ5GdA7ffIt6ldZ8pNXOJtANzIU7WjmJ56fS2lY%2BdkcqDnKErFRkE%2BuarlDYBfIj1bPGxMUhhgPkcSfynri3gBaTacq2qtUJuMevgfuOIlBV1ukO%2F1DYa7URblHAWOxXQzgyJDZ6Gwn9rCda711IXlqSC%2FN%2F7LyVYquJHxUC6lfFc0bp0HBOZ7kYLoZavuSkmMK5QMfaIx3ZaDpePECo%2FVj8SbkU5Bwn2N7atg170XbELmR7R2WYgJ8Nt4PxrER3093vTf7hGvnUNw3Fg7Wayby5%2BfmD3WqQpMnC5NVe3lmdikwn4g62bSDKqQNypSK0w%2Fbz%2BDSqFN99d%2FAU30ovQExKKVviQZHmVRvnlUdMOPgnsAGOqUB8w8M6fbu%2BWo%2BtVHu1%2FmuD5apqXpxL6a7JNz27AD%2F3q%2BatZr22JEOTE7NeR3yUakPghzmTb5q4vBqRjMf5JjdijCWfex8A56B%2Fsw0r5LsRmKKrglFMdSWZ5B1OG%2BhnU2k2pMT6oJVDgeYsOfDaAJjuqcz7Hovjk0ukJhA%2F4nf65VRhS1HdiYNGXv0JO9530YbRDpyxvtDor%2FCdHRtpufKrn2ld3eJ&X-Amz-Signature=c9c8a2aea3e8da76ea8dd92d3905772221f0ea749b035d0d93c1c651bbfcc105&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GSE7PT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBh5mJqRi1nMr0aKZ%2BUIImPTkT9wQrS%2FksdL5tl3k6yXAiEA4UyUgL2VXnj5BU3ZemlmQxER0dSe%2BwqJB24eoflpcFEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0uMAHQ5GhgrHGSDCrcA1Pp31mB1BY2joBYc75FV08yEKqOl%2F02j521t26SKMG9dfw%2BgZvgFSyVLrPBlLCuga0CWUM8FpKuKgDNtMldsUinEMcDv5dsNZHvhrBLgjB28ztxdsUhjJW%2FFXs0lKz44VQpRDa12Vr7Etj4LWnM29%2FFW7b2ELe7Sg4xUDrxasRP6iMH8yRRrnPrXUgH8gVR%2FDq5g%2FlsB3Du%2F4Qo9Tw1V%2FWxPusJPueAgep4RptDRvE7C%2FO0F7uT2kJddo93S1XhKqXvTI%2F%2BhezJyVDlzgoQWtQ5GdA7ffIt6ldZ8pNXOJtANzIU7WjmJ56fS2lY%2BdkcqDnKErFRkE%2BuarlDYBfIj1bPGxMUhhgPkcSfynri3gBaTacq2qtUJuMevgfuOIlBV1ukO%2F1DYa7URblHAWOxXQzgyJDZ6Gwn9rCda711IXlqSC%2FN%2F7LyVYquJHxUC6lfFc0bp0HBOZ7kYLoZavuSkmMK5QMfaIx3ZaDpePECo%2FVj8SbkU5Bwn2N7atg170XbELmR7R2WYgJ8Nt4PxrER3093vTf7hGvnUNw3Fg7Wayby5%2BfmD3WqQpMnC5NVe3lmdikwn4g62bSDKqQNypSK0w%2Fbz%2BDSqFN99d%2FAU30ovQExKKVviQZHmVRvnlUdMOPgnsAGOqUB8w8M6fbu%2BWo%2BtVHu1%2FmuD5apqXpxL6a7JNz27AD%2F3q%2BatZr22JEOTE7NeR3yUakPghzmTb5q4vBqRjMf5JjdijCWfex8A56B%2Fsw0r5LsRmKKrglFMdSWZ5B1OG%2BhnU2k2pMT6oJVDgeYsOfDaAJjuqcz7Hovjk0ukJhA%2F4nf65VRhS1HdiYNGXv0JO9530YbRDpyxvtDor%2FCdHRtpufKrn2ld3eJ&X-Amz-Signature=248df2a548c4aed4349414b5d08832fccbdb310dfa5271f5f7fe68da2e12973f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GSE7PT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBh5mJqRi1nMr0aKZ%2BUIImPTkT9wQrS%2FksdL5tl3k6yXAiEA4UyUgL2VXnj5BU3ZemlmQxER0dSe%2BwqJB24eoflpcFEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0uMAHQ5GhgrHGSDCrcA1Pp31mB1BY2joBYc75FV08yEKqOl%2F02j521t26SKMG9dfw%2BgZvgFSyVLrPBlLCuga0CWUM8FpKuKgDNtMldsUinEMcDv5dsNZHvhrBLgjB28ztxdsUhjJW%2FFXs0lKz44VQpRDa12Vr7Etj4LWnM29%2FFW7b2ELe7Sg4xUDrxasRP6iMH8yRRrnPrXUgH8gVR%2FDq5g%2FlsB3Du%2F4Qo9Tw1V%2FWxPusJPueAgep4RptDRvE7C%2FO0F7uT2kJddo93S1XhKqXvTI%2F%2BhezJyVDlzgoQWtQ5GdA7ffIt6ldZ8pNXOJtANzIU7WjmJ56fS2lY%2BdkcqDnKErFRkE%2BuarlDYBfIj1bPGxMUhhgPkcSfynri3gBaTacq2qtUJuMevgfuOIlBV1ukO%2F1DYa7URblHAWOxXQzgyJDZ6Gwn9rCda711IXlqSC%2FN%2F7LyVYquJHxUC6lfFc0bp0HBOZ7kYLoZavuSkmMK5QMfaIx3ZaDpePECo%2FVj8SbkU5Bwn2N7atg170XbELmR7R2WYgJ8Nt4PxrER3093vTf7hGvnUNw3Fg7Wayby5%2BfmD3WqQpMnC5NVe3lmdikwn4g62bSDKqQNypSK0w%2Fbz%2BDSqFN99d%2FAU30ovQExKKVviQZHmVRvnlUdMOPgnsAGOqUB8w8M6fbu%2BWo%2BtVHu1%2FmuD5apqXpxL6a7JNz27AD%2F3q%2BatZr22JEOTE7NeR3yUakPghzmTb5q4vBqRjMf5JjdijCWfex8A56B%2Fsw0r5LsRmKKrglFMdSWZ5B1OG%2BhnU2k2pMT6oJVDgeYsOfDaAJjuqcz7Hovjk0ukJhA%2F4nf65VRhS1HdiYNGXv0JO9530YbRDpyxvtDor%2FCdHRtpufKrn2ld3eJ&X-Amz-Signature=c9c3575f9b2fc5fb87cf60cd94dc37b8e28a9b875e420e58a31bf0b3b9e161c1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GSE7PT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBh5mJqRi1nMr0aKZ%2BUIImPTkT9wQrS%2FksdL5tl3k6yXAiEA4UyUgL2VXnj5BU3ZemlmQxER0dSe%2BwqJB24eoflpcFEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0uMAHQ5GhgrHGSDCrcA1Pp31mB1BY2joBYc75FV08yEKqOl%2F02j521t26SKMG9dfw%2BgZvgFSyVLrPBlLCuga0CWUM8FpKuKgDNtMldsUinEMcDv5dsNZHvhrBLgjB28ztxdsUhjJW%2FFXs0lKz44VQpRDa12Vr7Etj4LWnM29%2FFW7b2ELe7Sg4xUDrxasRP6iMH8yRRrnPrXUgH8gVR%2FDq5g%2FlsB3Du%2F4Qo9Tw1V%2FWxPusJPueAgep4RptDRvE7C%2FO0F7uT2kJddo93S1XhKqXvTI%2F%2BhezJyVDlzgoQWtQ5GdA7ffIt6ldZ8pNXOJtANzIU7WjmJ56fS2lY%2BdkcqDnKErFRkE%2BuarlDYBfIj1bPGxMUhhgPkcSfynri3gBaTacq2qtUJuMevgfuOIlBV1ukO%2F1DYa7URblHAWOxXQzgyJDZ6Gwn9rCda711IXlqSC%2FN%2F7LyVYquJHxUC6lfFc0bp0HBOZ7kYLoZavuSkmMK5QMfaIx3ZaDpePECo%2FVj8SbkU5Bwn2N7atg170XbELmR7R2WYgJ8Nt4PxrER3093vTf7hGvnUNw3Fg7Wayby5%2BfmD3WqQpMnC5NVe3lmdikwn4g62bSDKqQNypSK0w%2Fbz%2BDSqFN99d%2FAU30ovQExKKVviQZHmVRvnlUdMOPgnsAGOqUB8w8M6fbu%2BWo%2BtVHu1%2FmuD5apqXpxL6a7JNz27AD%2F3q%2BatZr22JEOTE7NeR3yUakPghzmTb5q4vBqRjMf5JjdijCWfex8A56B%2Fsw0r5LsRmKKrglFMdSWZ5B1OG%2BhnU2k2pMT6oJVDgeYsOfDaAJjuqcz7Hovjk0ukJhA%2F4nf65VRhS1HdiYNGXv0JO9530YbRDpyxvtDor%2FCdHRtpufKrn2ld3eJ&X-Amz-Signature=59d0069faeed212ce67db1144b427b4670b4e0cb4ccfd5f54f5e7c611b427dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GSE7PT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBh5mJqRi1nMr0aKZ%2BUIImPTkT9wQrS%2FksdL5tl3k6yXAiEA4UyUgL2VXnj5BU3ZemlmQxER0dSe%2BwqJB24eoflpcFEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0uMAHQ5GhgrHGSDCrcA1Pp31mB1BY2joBYc75FV08yEKqOl%2F02j521t26SKMG9dfw%2BgZvgFSyVLrPBlLCuga0CWUM8FpKuKgDNtMldsUinEMcDv5dsNZHvhrBLgjB28ztxdsUhjJW%2FFXs0lKz44VQpRDa12Vr7Etj4LWnM29%2FFW7b2ELe7Sg4xUDrxasRP6iMH8yRRrnPrXUgH8gVR%2FDq5g%2FlsB3Du%2F4Qo9Tw1V%2FWxPusJPueAgep4RptDRvE7C%2FO0F7uT2kJddo93S1XhKqXvTI%2F%2BhezJyVDlzgoQWtQ5GdA7ffIt6ldZ8pNXOJtANzIU7WjmJ56fS2lY%2BdkcqDnKErFRkE%2BuarlDYBfIj1bPGxMUhhgPkcSfynri3gBaTacq2qtUJuMevgfuOIlBV1ukO%2F1DYa7URblHAWOxXQzgyJDZ6Gwn9rCda711IXlqSC%2FN%2F7LyVYquJHxUC6lfFc0bp0HBOZ7kYLoZavuSkmMK5QMfaIx3ZaDpePECo%2FVj8SbkU5Bwn2N7atg170XbELmR7R2WYgJ8Nt4PxrER3093vTf7hGvnUNw3Fg7Wayby5%2BfmD3WqQpMnC5NVe3lmdikwn4g62bSDKqQNypSK0w%2Fbz%2BDSqFN99d%2FAU30ovQExKKVviQZHmVRvnlUdMOPgnsAGOqUB8w8M6fbu%2BWo%2BtVHu1%2FmuD5apqXpxL6a7JNz27AD%2F3q%2BatZr22JEOTE7NeR3yUakPghzmTb5q4vBqRjMf5JjdijCWfex8A56B%2Fsw0r5LsRmKKrglFMdSWZ5B1OG%2BhnU2k2pMT6oJVDgeYsOfDaAJjuqcz7Hovjk0ukJhA%2F4nf65VRhS1HdiYNGXv0JO9530YbRDpyxvtDor%2FCdHRtpufKrn2ld3eJ&X-Amz-Signature=20d52721430ac5b8e6d4db32c82ccbe73312bce53a97a06615b9f5aa2f52ff2b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
