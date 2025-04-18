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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ37M6PW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbpgdXD%2BBVUdU5pSaiFEVXnjCxe6Foz56GalNhok2QFAiA00cVWVB1nvA%2BO%2FEIHdrniFRbIpKPxkb6NsTaLt%2FySPSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMj6En%2Bl%2BBLftAKa7eKtwDu9yfecklPyfNu2eRDA8i3sJewy1HzjkA9g%2FhoIqNq8mtqCwbVsHe%2FfdRjv8CsH65euKrZh3%2BjhqF%2FRtxhfoB3dqIsdYBXtLTBvVu3nwsbczkMIYj3IKoQbN64Hb36V8jxoOO93WwokhDlqa40EZ0EZKzHIUIPSZsJoX09mtdS3cEfJBPOwSi8u%2BicE%2BWa1kyTwMG3R4ebvYpms1uybQHH2aCVWSDEt4hEqO2rdqxVRgIV9UELDVIqKr6c0W2tKijX13MZLED%2Ba1Cx6yMTqsYAuW4hOEVJLIffAyKXyPeuKfDPrHq4IgC9K4jpSef5NsF%2BcB708OAn%2FGNBcYe%2BsGr9RKubYagWLomWCP3Z3PlOIKPpSxjgm1AqKz3IYpRV1604GQbAO78o6G8I9TQe7ZZ%2FBLszxVKCF3pKGUBcr96IT%2BVir%2FTZV7H63jkeWM3WDO9eUCBC%2BJYUsdQkdqEK6S3VXPsjXpEd7RALl%2BIX69eHl0Jqqo92wpN673Bk%2F5tyuAm1FUD8w7hq00sWtqDzKtuKDucSbM97hqHHbvQ3lrmDRILdnsHMcqe4mjLnyxMgH892zX5uSDBqhwaB%2BHvECN7GhMvK4f9Fo4GEDhqByU8CcXyxOOPkxog4k4UoGkwmvWIwAY6pgFRaUQ0lMSHHSuy7FjzAeiMMyy6zpR6v5C7hUoBYihNab%2BPH6Dc453fyLKXGM4Pu5aEdzOSGFo16RKjCc10I9ntyqBl6jm9UN3ZyAXlbTtXX4keIgHadM36YrSoY%2FM3pzl15%2FPhEeuQ28OeSiyTlPxu5jQ9EZ3OFfI2LiTOub8sXjq1DagOn%2F8SanX4hRFlYWROCDxsGsnpVChocJ2S8d7%2BDQyjA1U5&X-Amz-Signature=f849d156592083dd7dcb8cfa37fb19612d0a6c3e45da2359e29c7073b14a7a94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ37M6PW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbpgdXD%2BBVUdU5pSaiFEVXnjCxe6Foz56GalNhok2QFAiA00cVWVB1nvA%2BO%2FEIHdrniFRbIpKPxkb6NsTaLt%2FySPSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMj6En%2Bl%2BBLftAKa7eKtwDu9yfecklPyfNu2eRDA8i3sJewy1HzjkA9g%2FhoIqNq8mtqCwbVsHe%2FfdRjv8CsH65euKrZh3%2BjhqF%2FRtxhfoB3dqIsdYBXtLTBvVu3nwsbczkMIYj3IKoQbN64Hb36V8jxoOO93WwokhDlqa40EZ0EZKzHIUIPSZsJoX09mtdS3cEfJBPOwSi8u%2BicE%2BWa1kyTwMG3R4ebvYpms1uybQHH2aCVWSDEt4hEqO2rdqxVRgIV9UELDVIqKr6c0W2tKijX13MZLED%2Ba1Cx6yMTqsYAuW4hOEVJLIffAyKXyPeuKfDPrHq4IgC9K4jpSef5NsF%2BcB708OAn%2FGNBcYe%2BsGr9RKubYagWLomWCP3Z3PlOIKPpSxjgm1AqKz3IYpRV1604GQbAO78o6G8I9TQe7ZZ%2FBLszxVKCF3pKGUBcr96IT%2BVir%2FTZV7H63jkeWM3WDO9eUCBC%2BJYUsdQkdqEK6S3VXPsjXpEd7RALl%2BIX69eHl0Jqqo92wpN673Bk%2F5tyuAm1FUD8w7hq00sWtqDzKtuKDucSbM97hqHHbvQ3lrmDRILdnsHMcqe4mjLnyxMgH892zX5uSDBqhwaB%2BHvECN7GhMvK4f9Fo4GEDhqByU8CcXyxOOPkxog4k4UoGkwmvWIwAY6pgFRaUQ0lMSHHSuy7FjzAeiMMyy6zpR6v5C7hUoBYihNab%2BPH6Dc453fyLKXGM4Pu5aEdzOSGFo16RKjCc10I9ntyqBl6jm9UN3ZyAXlbTtXX4keIgHadM36YrSoY%2FM3pzl15%2FPhEeuQ28OeSiyTlPxu5jQ9EZ3OFfI2LiTOub8sXjq1DagOn%2F8SanX4hRFlYWROCDxsGsnpVChocJ2S8d7%2BDQyjA1U5&X-Amz-Signature=8f3c78e62f6786459be6b11464da73a2316632aa390913282e89a180721a2d1a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ37M6PW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbpgdXD%2BBVUdU5pSaiFEVXnjCxe6Foz56GalNhok2QFAiA00cVWVB1nvA%2BO%2FEIHdrniFRbIpKPxkb6NsTaLt%2FySPSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMj6En%2Bl%2BBLftAKa7eKtwDu9yfecklPyfNu2eRDA8i3sJewy1HzjkA9g%2FhoIqNq8mtqCwbVsHe%2FfdRjv8CsH65euKrZh3%2BjhqF%2FRtxhfoB3dqIsdYBXtLTBvVu3nwsbczkMIYj3IKoQbN64Hb36V8jxoOO93WwokhDlqa40EZ0EZKzHIUIPSZsJoX09mtdS3cEfJBPOwSi8u%2BicE%2BWa1kyTwMG3R4ebvYpms1uybQHH2aCVWSDEt4hEqO2rdqxVRgIV9UELDVIqKr6c0W2tKijX13MZLED%2Ba1Cx6yMTqsYAuW4hOEVJLIffAyKXyPeuKfDPrHq4IgC9K4jpSef5NsF%2BcB708OAn%2FGNBcYe%2BsGr9RKubYagWLomWCP3Z3PlOIKPpSxjgm1AqKz3IYpRV1604GQbAO78o6G8I9TQe7ZZ%2FBLszxVKCF3pKGUBcr96IT%2BVir%2FTZV7H63jkeWM3WDO9eUCBC%2BJYUsdQkdqEK6S3VXPsjXpEd7RALl%2BIX69eHl0Jqqo92wpN673Bk%2F5tyuAm1FUD8w7hq00sWtqDzKtuKDucSbM97hqHHbvQ3lrmDRILdnsHMcqe4mjLnyxMgH892zX5uSDBqhwaB%2BHvECN7GhMvK4f9Fo4GEDhqByU8CcXyxOOPkxog4k4UoGkwmvWIwAY6pgFRaUQ0lMSHHSuy7FjzAeiMMyy6zpR6v5C7hUoBYihNab%2BPH6Dc453fyLKXGM4Pu5aEdzOSGFo16RKjCc10I9ntyqBl6jm9UN3ZyAXlbTtXX4keIgHadM36YrSoY%2FM3pzl15%2FPhEeuQ28OeSiyTlPxu5jQ9EZ3OFfI2LiTOub8sXjq1DagOn%2F8SanX4hRFlYWROCDxsGsnpVChocJ2S8d7%2BDQyjA1U5&X-Amz-Signature=48e09e08cca73a4c17b2246b0fe4971dc1901a57b2c6e146d8792a5b0674d4cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ37M6PW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbpgdXD%2BBVUdU5pSaiFEVXnjCxe6Foz56GalNhok2QFAiA00cVWVB1nvA%2BO%2FEIHdrniFRbIpKPxkb6NsTaLt%2FySPSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMj6En%2Bl%2BBLftAKa7eKtwDu9yfecklPyfNu2eRDA8i3sJewy1HzjkA9g%2FhoIqNq8mtqCwbVsHe%2FfdRjv8CsH65euKrZh3%2BjhqF%2FRtxhfoB3dqIsdYBXtLTBvVu3nwsbczkMIYj3IKoQbN64Hb36V8jxoOO93WwokhDlqa40EZ0EZKzHIUIPSZsJoX09mtdS3cEfJBPOwSi8u%2BicE%2BWa1kyTwMG3R4ebvYpms1uybQHH2aCVWSDEt4hEqO2rdqxVRgIV9UELDVIqKr6c0W2tKijX13MZLED%2Ba1Cx6yMTqsYAuW4hOEVJLIffAyKXyPeuKfDPrHq4IgC9K4jpSef5NsF%2BcB708OAn%2FGNBcYe%2BsGr9RKubYagWLomWCP3Z3PlOIKPpSxjgm1AqKz3IYpRV1604GQbAO78o6G8I9TQe7ZZ%2FBLszxVKCF3pKGUBcr96IT%2BVir%2FTZV7H63jkeWM3WDO9eUCBC%2BJYUsdQkdqEK6S3VXPsjXpEd7RALl%2BIX69eHl0Jqqo92wpN673Bk%2F5tyuAm1FUD8w7hq00sWtqDzKtuKDucSbM97hqHHbvQ3lrmDRILdnsHMcqe4mjLnyxMgH892zX5uSDBqhwaB%2BHvECN7GhMvK4f9Fo4GEDhqByU8CcXyxOOPkxog4k4UoGkwmvWIwAY6pgFRaUQ0lMSHHSuy7FjzAeiMMyy6zpR6v5C7hUoBYihNab%2BPH6Dc453fyLKXGM4Pu5aEdzOSGFo16RKjCc10I9ntyqBl6jm9UN3ZyAXlbTtXX4keIgHadM36YrSoY%2FM3pzl15%2FPhEeuQ28OeSiyTlPxu5jQ9EZ3OFfI2LiTOub8sXjq1DagOn%2F8SanX4hRFlYWROCDxsGsnpVChocJ2S8d7%2BDQyjA1U5&X-Amz-Signature=a0ecf4e39a720f1e5c4f680facb25a740e0d379d0608ebf1f144ec8b8fe8c55a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ37M6PW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbpgdXD%2BBVUdU5pSaiFEVXnjCxe6Foz56GalNhok2QFAiA00cVWVB1nvA%2BO%2FEIHdrniFRbIpKPxkb6NsTaLt%2FySPSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMj6En%2Bl%2BBLftAKa7eKtwDu9yfecklPyfNu2eRDA8i3sJewy1HzjkA9g%2FhoIqNq8mtqCwbVsHe%2FfdRjv8CsH65euKrZh3%2BjhqF%2FRtxhfoB3dqIsdYBXtLTBvVu3nwsbczkMIYj3IKoQbN64Hb36V8jxoOO93WwokhDlqa40EZ0EZKzHIUIPSZsJoX09mtdS3cEfJBPOwSi8u%2BicE%2BWa1kyTwMG3R4ebvYpms1uybQHH2aCVWSDEt4hEqO2rdqxVRgIV9UELDVIqKr6c0W2tKijX13MZLED%2Ba1Cx6yMTqsYAuW4hOEVJLIffAyKXyPeuKfDPrHq4IgC9K4jpSef5NsF%2BcB708OAn%2FGNBcYe%2BsGr9RKubYagWLomWCP3Z3PlOIKPpSxjgm1AqKz3IYpRV1604GQbAO78o6G8I9TQe7ZZ%2FBLszxVKCF3pKGUBcr96IT%2BVir%2FTZV7H63jkeWM3WDO9eUCBC%2BJYUsdQkdqEK6S3VXPsjXpEd7RALl%2BIX69eHl0Jqqo92wpN673Bk%2F5tyuAm1FUD8w7hq00sWtqDzKtuKDucSbM97hqHHbvQ3lrmDRILdnsHMcqe4mjLnyxMgH892zX5uSDBqhwaB%2BHvECN7GhMvK4f9Fo4GEDhqByU8CcXyxOOPkxog4k4UoGkwmvWIwAY6pgFRaUQ0lMSHHSuy7FjzAeiMMyy6zpR6v5C7hUoBYihNab%2BPH6Dc453fyLKXGM4Pu5aEdzOSGFo16RKjCc10I9ntyqBl6jm9UN3ZyAXlbTtXX4keIgHadM36YrSoY%2FM3pzl15%2FPhEeuQ28OeSiyTlPxu5jQ9EZ3OFfI2LiTOub8sXjq1DagOn%2F8SanX4hRFlYWROCDxsGsnpVChocJ2S8d7%2BDQyjA1U5&X-Amz-Signature=f79f4621a5382c1c87ddf9d2b14f4f08b9a0a1f572101b1617fd6fc5660bb5cd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ37M6PW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbpgdXD%2BBVUdU5pSaiFEVXnjCxe6Foz56GalNhok2QFAiA00cVWVB1nvA%2BO%2FEIHdrniFRbIpKPxkb6NsTaLt%2FySPSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMj6En%2Bl%2BBLftAKa7eKtwDu9yfecklPyfNu2eRDA8i3sJewy1HzjkA9g%2FhoIqNq8mtqCwbVsHe%2FfdRjv8CsH65euKrZh3%2BjhqF%2FRtxhfoB3dqIsdYBXtLTBvVu3nwsbczkMIYj3IKoQbN64Hb36V8jxoOO93WwokhDlqa40EZ0EZKzHIUIPSZsJoX09mtdS3cEfJBPOwSi8u%2BicE%2BWa1kyTwMG3R4ebvYpms1uybQHH2aCVWSDEt4hEqO2rdqxVRgIV9UELDVIqKr6c0W2tKijX13MZLED%2Ba1Cx6yMTqsYAuW4hOEVJLIffAyKXyPeuKfDPrHq4IgC9K4jpSef5NsF%2BcB708OAn%2FGNBcYe%2BsGr9RKubYagWLomWCP3Z3PlOIKPpSxjgm1AqKz3IYpRV1604GQbAO78o6G8I9TQe7ZZ%2FBLszxVKCF3pKGUBcr96IT%2BVir%2FTZV7H63jkeWM3WDO9eUCBC%2BJYUsdQkdqEK6S3VXPsjXpEd7RALl%2BIX69eHl0Jqqo92wpN673Bk%2F5tyuAm1FUD8w7hq00sWtqDzKtuKDucSbM97hqHHbvQ3lrmDRILdnsHMcqe4mjLnyxMgH892zX5uSDBqhwaB%2BHvECN7GhMvK4f9Fo4GEDhqByU8CcXyxOOPkxog4k4UoGkwmvWIwAY6pgFRaUQ0lMSHHSuy7FjzAeiMMyy6zpR6v5C7hUoBYihNab%2BPH6Dc453fyLKXGM4Pu5aEdzOSGFo16RKjCc10I9ntyqBl6jm9UN3ZyAXlbTtXX4keIgHadM36YrSoY%2FM3pzl15%2FPhEeuQ28OeSiyTlPxu5jQ9EZ3OFfI2LiTOub8sXjq1DagOn%2F8SanX4hRFlYWROCDxsGsnpVChocJ2S8d7%2BDQyjA1U5&X-Amz-Signature=db945127a1bbda59dd5d4bf1038e96714867a376a6a83a12e9fe0ec7e6209cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ37M6PW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbpgdXD%2BBVUdU5pSaiFEVXnjCxe6Foz56GalNhok2QFAiA00cVWVB1nvA%2BO%2FEIHdrniFRbIpKPxkb6NsTaLt%2FySPSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMj6En%2Bl%2BBLftAKa7eKtwDu9yfecklPyfNu2eRDA8i3sJewy1HzjkA9g%2FhoIqNq8mtqCwbVsHe%2FfdRjv8CsH65euKrZh3%2BjhqF%2FRtxhfoB3dqIsdYBXtLTBvVu3nwsbczkMIYj3IKoQbN64Hb36V8jxoOO93WwokhDlqa40EZ0EZKzHIUIPSZsJoX09mtdS3cEfJBPOwSi8u%2BicE%2BWa1kyTwMG3R4ebvYpms1uybQHH2aCVWSDEt4hEqO2rdqxVRgIV9UELDVIqKr6c0W2tKijX13MZLED%2Ba1Cx6yMTqsYAuW4hOEVJLIffAyKXyPeuKfDPrHq4IgC9K4jpSef5NsF%2BcB708OAn%2FGNBcYe%2BsGr9RKubYagWLomWCP3Z3PlOIKPpSxjgm1AqKz3IYpRV1604GQbAO78o6G8I9TQe7ZZ%2FBLszxVKCF3pKGUBcr96IT%2BVir%2FTZV7H63jkeWM3WDO9eUCBC%2BJYUsdQkdqEK6S3VXPsjXpEd7RALl%2BIX69eHl0Jqqo92wpN673Bk%2F5tyuAm1FUD8w7hq00sWtqDzKtuKDucSbM97hqHHbvQ3lrmDRILdnsHMcqe4mjLnyxMgH892zX5uSDBqhwaB%2BHvECN7GhMvK4f9Fo4GEDhqByU8CcXyxOOPkxog4k4UoGkwmvWIwAY6pgFRaUQ0lMSHHSuy7FjzAeiMMyy6zpR6v5C7hUoBYihNab%2BPH6Dc453fyLKXGM4Pu5aEdzOSGFo16RKjCc10I9ntyqBl6jm9UN3ZyAXlbTtXX4keIgHadM36YrSoY%2FM3pzl15%2FPhEeuQ28OeSiyTlPxu5jQ9EZ3OFfI2LiTOub8sXjq1DagOn%2F8SanX4hRFlYWROCDxsGsnpVChocJ2S8d7%2BDQyjA1U5&X-Amz-Signature=f31e3290ef8ba47e2be4962e5010729b82c4b64bef8bdbfccd2128a69a532c53&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
