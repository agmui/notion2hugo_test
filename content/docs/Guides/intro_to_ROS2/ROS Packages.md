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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGL2HS3I%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDWNa1vI9EyOGznOHwvQ5sFOJCMxS8Q21Vn7Wf7jbRd9wIgQlO2ec4hGSMLCvbqPW1%2BYxunZaYS%2B1ZZCerwZhPo4jcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRmuyOAm0RmW%2BzedircA5Q5v5pLaKCh7QYqa2gSKSi3YZg3%2Bfc4HM9LWzGYF9XS0RlN2pZeXF4a7Px6qz8SlLA%2FmSAnWz%2B255eRwLD63t4pCk80LzAk5sSHD8sAagSqfwFdQq5lq5xtvXNoeVyMWWdjDWOXOGJIoEK9Yc8odeRP0p6lQZHYkMr4a7Njx4SpBaA5RH%2F2vzLFGYQR%2BCax1JJR7pFtegUbPegpNhb35%2BeBOiABFJ1tpIfgjwDHpRCaLEUyfJokA6Da%2B8NQ0RN%2BgJjBUDq36FoQf3cGc2%2B%2BJClezbRKCdV6%2FpDcK0P8x%2BWgSsJVVPGwxuDJJ05cHVrFdWnFRILWLhTM2%2F8A5iv36YBmyDVfXf%2BYpHG3Mu%2FHjUX2Vh2T5lawFfwlt6GFRnYC8nNpvMnqqrMM64%2BScZwz%2B0Kl1EF1mb3ZJoSXmvfcrjQFbMPvkj3BoVNWDspNPdYckwHfx8XPntNzRQLMh6Xwmw9viZQm9TkhXd4Qzl%2FqS3RLLxCDoINjp9rKSv%2FOhqB%2BOcW5NaMgbvyzYu5GpMYlJMrWxC118WKUxzJf%2FeiGOOKzK47%2FPKVxSo5W1Z6%2F3riD1RFvA9eq5Orxiy1NvF7hgjVXB%2FElWPo8GrcrCL%2BLgypg1atPC9dRpe0osc3uMO6BkcAGOqUBhPBDZuKLjk7lTX7%2Bs1VdHuQMMpH77jYNel3djxvbkwW8vVpPmfZSApVh0Z9JK4nY8TGb1qmgvnXBWDIIXYVCRzFn1t1hjJG52o%2BVLtPDg3fl7X4ZokIiKhSswmRnaYQ5XgC9gkKsb63JA4N1aUXSC%2BjyupyWyv4NALpam0sRgbwXh1e8KDdpN44xlYzcQXqbAOXwEZrDNsMeBtcpUf98HYE9vbEf&X-Amz-Signature=c508ab6b5f5f188f7d444e804b693308243fa7e763e6395c10cdebda259c6f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGL2HS3I%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDWNa1vI9EyOGznOHwvQ5sFOJCMxS8Q21Vn7Wf7jbRd9wIgQlO2ec4hGSMLCvbqPW1%2BYxunZaYS%2B1ZZCerwZhPo4jcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRmuyOAm0RmW%2BzedircA5Q5v5pLaKCh7QYqa2gSKSi3YZg3%2Bfc4HM9LWzGYF9XS0RlN2pZeXF4a7Px6qz8SlLA%2FmSAnWz%2B255eRwLD63t4pCk80LzAk5sSHD8sAagSqfwFdQq5lq5xtvXNoeVyMWWdjDWOXOGJIoEK9Yc8odeRP0p6lQZHYkMr4a7Njx4SpBaA5RH%2F2vzLFGYQR%2BCax1JJR7pFtegUbPegpNhb35%2BeBOiABFJ1tpIfgjwDHpRCaLEUyfJokA6Da%2B8NQ0RN%2BgJjBUDq36FoQf3cGc2%2B%2BJClezbRKCdV6%2FpDcK0P8x%2BWgSsJVVPGwxuDJJ05cHVrFdWnFRILWLhTM2%2F8A5iv36YBmyDVfXf%2BYpHG3Mu%2FHjUX2Vh2T5lawFfwlt6GFRnYC8nNpvMnqqrMM64%2BScZwz%2B0Kl1EF1mb3ZJoSXmvfcrjQFbMPvkj3BoVNWDspNPdYckwHfx8XPntNzRQLMh6Xwmw9viZQm9TkhXd4Qzl%2FqS3RLLxCDoINjp9rKSv%2FOhqB%2BOcW5NaMgbvyzYu5GpMYlJMrWxC118WKUxzJf%2FeiGOOKzK47%2FPKVxSo5W1Z6%2F3riD1RFvA9eq5Orxiy1NvF7hgjVXB%2FElWPo8GrcrCL%2BLgypg1atPC9dRpe0osc3uMO6BkcAGOqUBhPBDZuKLjk7lTX7%2Bs1VdHuQMMpH77jYNel3djxvbkwW8vVpPmfZSApVh0Z9JK4nY8TGb1qmgvnXBWDIIXYVCRzFn1t1hjJG52o%2BVLtPDg3fl7X4ZokIiKhSswmRnaYQ5XgC9gkKsb63JA4N1aUXSC%2BjyupyWyv4NALpam0sRgbwXh1e8KDdpN44xlYzcQXqbAOXwEZrDNsMeBtcpUf98HYE9vbEf&X-Amz-Signature=ceb1488dbc713928d3c84651e1b37427ebc90bbfdd44c39b1e3248bb94e63277&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGL2HS3I%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDWNa1vI9EyOGznOHwvQ5sFOJCMxS8Q21Vn7Wf7jbRd9wIgQlO2ec4hGSMLCvbqPW1%2BYxunZaYS%2B1ZZCerwZhPo4jcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRmuyOAm0RmW%2BzedircA5Q5v5pLaKCh7QYqa2gSKSi3YZg3%2Bfc4HM9LWzGYF9XS0RlN2pZeXF4a7Px6qz8SlLA%2FmSAnWz%2B255eRwLD63t4pCk80LzAk5sSHD8sAagSqfwFdQq5lq5xtvXNoeVyMWWdjDWOXOGJIoEK9Yc8odeRP0p6lQZHYkMr4a7Njx4SpBaA5RH%2F2vzLFGYQR%2BCax1JJR7pFtegUbPegpNhb35%2BeBOiABFJ1tpIfgjwDHpRCaLEUyfJokA6Da%2B8NQ0RN%2BgJjBUDq36FoQf3cGc2%2B%2BJClezbRKCdV6%2FpDcK0P8x%2BWgSsJVVPGwxuDJJ05cHVrFdWnFRILWLhTM2%2F8A5iv36YBmyDVfXf%2BYpHG3Mu%2FHjUX2Vh2T5lawFfwlt6GFRnYC8nNpvMnqqrMM64%2BScZwz%2B0Kl1EF1mb3ZJoSXmvfcrjQFbMPvkj3BoVNWDspNPdYckwHfx8XPntNzRQLMh6Xwmw9viZQm9TkhXd4Qzl%2FqS3RLLxCDoINjp9rKSv%2FOhqB%2BOcW5NaMgbvyzYu5GpMYlJMrWxC118WKUxzJf%2FeiGOOKzK47%2FPKVxSo5W1Z6%2F3riD1RFvA9eq5Orxiy1NvF7hgjVXB%2FElWPo8GrcrCL%2BLgypg1atPC9dRpe0osc3uMO6BkcAGOqUBhPBDZuKLjk7lTX7%2Bs1VdHuQMMpH77jYNel3djxvbkwW8vVpPmfZSApVh0Z9JK4nY8TGb1qmgvnXBWDIIXYVCRzFn1t1hjJG52o%2BVLtPDg3fl7X4ZokIiKhSswmRnaYQ5XgC9gkKsb63JA4N1aUXSC%2BjyupyWyv4NALpam0sRgbwXh1e8KDdpN44xlYzcQXqbAOXwEZrDNsMeBtcpUf98HYE9vbEf&X-Amz-Signature=44bb9583fb31b3aa139cd5b315ee82417ef52455d228b74ee61b46e63c05f652&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGL2HS3I%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDWNa1vI9EyOGznOHwvQ5sFOJCMxS8Q21Vn7Wf7jbRd9wIgQlO2ec4hGSMLCvbqPW1%2BYxunZaYS%2B1ZZCerwZhPo4jcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRmuyOAm0RmW%2BzedircA5Q5v5pLaKCh7QYqa2gSKSi3YZg3%2Bfc4HM9LWzGYF9XS0RlN2pZeXF4a7Px6qz8SlLA%2FmSAnWz%2B255eRwLD63t4pCk80LzAk5sSHD8sAagSqfwFdQq5lq5xtvXNoeVyMWWdjDWOXOGJIoEK9Yc8odeRP0p6lQZHYkMr4a7Njx4SpBaA5RH%2F2vzLFGYQR%2BCax1JJR7pFtegUbPegpNhb35%2BeBOiABFJ1tpIfgjwDHpRCaLEUyfJokA6Da%2B8NQ0RN%2BgJjBUDq36FoQf3cGc2%2B%2BJClezbRKCdV6%2FpDcK0P8x%2BWgSsJVVPGwxuDJJ05cHVrFdWnFRILWLhTM2%2F8A5iv36YBmyDVfXf%2BYpHG3Mu%2FHjUX2Vh2T5lawFfwlt6GFRnYC8nNpvMnqqrMM64%2BScZwz%2B0Kl1EF1mb3ZJoSXmvfcrjQFbMPvkj3BoVNWDspNPdYckwHfx8XPntNzRQLMh6Xwmw9viZQm9TkhXd4Qzl%2FqS3RLLxCDoINjp9rKSv%2FOhqB%2BOcW5NaMgbvyzYu5GpMYlJMrWxC118WKUxzJf%2FeiGOOKzK47%2FPKVxSo5W1Z6%2F3riD1RFvA9eq5Orxiy1NvF7hgjVXB%2FElWPo8GrcrCL%2BLgypg1atPC9dRpe0osc3uMO6BkcAGOqUBhPBDZuKLjk7lTX7%2Bs1VdHuQMMpH77jYNel3djxvbkwW8vVpPmfZSApVh0Z9JK4nY8TGb1qmgvnXBWDIIXYVCRzFn1t1hjJG52o%2BVLtPDg3fl7X4ZokIiKhSswmRnaYQ5XgC9gkKsb63JA4N1aUXSC%2BjyupyWyv4NALpam0sRgbwXh1e8KDdpN44xlYzcQXqbAOXwEZrDNsMeBtcpUf98HYE9vbEf&X-Amz-Signature=2b233c789bc19d3fee06a043b0166e3d3386ff67e69624aa6a6bc3b80c7f21b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGL2HS3I%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDWNa1vI9EyOGznOHwvQ5sFOJCMxS8Q21Vn7Wf7jbRd9wIgQlO2ec4hGSMLCvbqPW1%2BYxunZaYS%2B1ZZCerwZhPo4jcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRmuyOAm0RmW%2BzedircA5Q5v5pLaKCh7QYqa2gSKSi3YZg3%2Bfc4HM9LWzGYF9XS0RlN2pZeXF4a7Px6qz8SlLA%2FmSAnWz%2B255eRwLD63t4pCk80LzAk5sSHD8sAagSqfwFdQq5lq5xtvXNoeVyMWWdjDWOXOGJIoEK9Yc8odeRP0p6lQZHYkMr4a7Njx4SpBaA5RH%2F2vzLFGYQR%2BCax1JJR7pFtegUbPegpNhb35%2BeBOiABFJ1tpIfgjwDHpRCaLEUyfJokA6Da%2B8NQ0RN%2BgJjBUDq36FoQf3cGc2%2B%2BJClezbRKCdV6%2FpDcK0P8x%2BWgSsJVVPGwxuDJJ05cHVrFdWnFRILWLhTM2%2F8A5iv36YBmyDVfXf%2BYpHG3Mu%2FHjUX2Vh2T5lawFfwlt6GFRnYC8nNpvMnqqrMM64%2BScZwz%2B0Kl1EF1mb3ZJoSXmvfcrjQFbMPvkj3BoVNWDspNPdYckwHfx8XPntNzRQLMh6Xwmw9viZQm9TkhXd4Qzl%2FqS3RLLxCDoINjp9rKSv%2FOhqB%2BOcW5NaMgbvyzYu5GpMYlJMrWxC118WKUxzJf%2FeiGOOKzK47%2FPKVxSo5W1Z6%2F3riD1RFvA9eq5Orxiy1NvF7hgjVXB%2FElWPo8GrcrCL%2BLgypg1atPC9dRpe0osc3uMO6BkcAGOqUBhPBDZuKLjk7lTX7%2Bs1VdHuQMMpH77jYNel3djxvbkwW8vVpPmfZSApVh0Z9JK4nY8TGb1qmgvnXBWDIIXYVCRzFn1t1hjJG52o%2BVLtPDg3fl7X4ZokIiKhSswmRnaYQ5XgC9gkKsb63JA4N1aUXSC%2BjyupyWyv4NALpam0sRgbwXh1e8KDdpN44xlYzcQXqbAOXwEZrDNsMeBtcpUf98HYE9vbEf&X-Amz-Signature=257e95f8cd5c1517eec816085339646d94f2641dab310c844593db8a5ae7c70c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGL2HS3I%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDWNa1vI9EyOGznOHwvQ5sFOJCMxS8Q21Vn7Wf7jbRd9wIgQlO2ec4hGSMLCvbqPW1%2BYxunZaYS%2B1ZZCerwZhPo4jcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRmuyOAm0RmW%2BzedircA5Q5v5pLaKCh7QYqa2gSKSi3YZg3%2Bfc4HM9LWzGYF9XS0RlN2pZeXF4a7Px6qz8SlLA%2FmSAnWz%2B255eRwLD63t4pCk80LzAk5sSHD8sAagSqfwFdQq5lq5xtvXNoeVyMWWdjDWOXOGJIoEK9Yc8odeRP0p6lQZHYkMr4a7Njx4SpBaA5RH%2F2vzLFGYQR%2BCax1JJR7pFtegUbPegpNhb35%2BeBOiABFJ1tpIfgjwDHpRCaLEUyfJokA6Da%2B8NQ0RN%2BgJjBUDq36FoQf3cGc2%2B%2BJClezbRKCdV6%2FpDcK0P8x%2BWgSsJVVPGwxuDJJ05cHVrFdWnFRILWLhTM2%2F8A5iv36YBmyDVfXf%2BYpHG3Mu%2FHjUX2Vh2T5lawFfwlt6GFRnYC8nNpvMnqqrMM64%2BScZwz%2B0Kl1EF1mb3ZJoSXmvfcrjQFbMPvkj3BoVNWDspNPdYckwHfx8XPntNzRQLMh6Xwmw9viZQm9TkhXd4Qzl%2FqS3RLLxCDoINjp9rKSv%2FOhqB%2BOcW5NaMgbvyzYu5GpMYlJMrWxC118WKUxzJf%2FeiGOOKzK47%2FPKVxSo5W1Z6%2F3riD1RFvA9eq5Orxiy1NvF7hgjVXB%2FElWPo8GrcrCL%2BLgypg1atPC9dRpe0osc3uMO6BkcAGOqUBhPBDZuKLjk7lTX7%2Bs1VdHuQMMpH77jYNel3djxvbkwW8vVpPmfZSApVh0Z9JK4nY8TGb1qmgvnXBWDIIXYVCRzFn1t1hjJG52o%2BVLtPDg3fl7X4ZokIiKhSswmRnaYQ5XgC9gkKsb63JA4N1aUXSC%2BjyupyWyv4NALpam0sRgbwXh1e8KDdpN44xlYzcQXqbAOXwEZrDNsMeBtcpUf98HYE9vbEf&X-Amz-Signature=0ada82f4e227a03d7b13ec72cc02ad4363154c3627b4c68aedb0ff7fcf8bfc38&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGL2HS3I%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDWNa1vI9EyOGznOHwvQ5sFOJCMxS8Q21Vn7Wf7jbRd9wIgQlO2ec4hGSMLCvbqPW1%2BYxunZaYS%2B1ZZCerwZhPo4jcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRmuyOAm0RmW%2BzedircA5Q5v5pLaKCh7QYqa2gSKSi3YZg3%2Bfc4HM9LWzGYF9XS0RlN2pZeXF4a7Px6qz8SlLA%2FmSAnWz%2B255eRwLD63t4pCk80LzAk5sSHD8sAagSqfwFdQq5lq5xtvXNoeVyMWWdjDWOXOGJIoEK9Yc8odeRP0p6lQZHYkMr4a7Njx4SpBaA5RH%2F2vzLFGYQR%2BCax1JJR7pFtegUbPegpNhb35%2BeBOiABFJ1tpIfgjwDHpRCaLEUyfJokA6Da%2B8NQ0RN%2BgJjBUDq36FoQf3cGc2%2B%2BJClezbRKCdV6%2FpDcK0P8x%2BWgSsJVVPGwxuDJJ05cHVrFdWnFRILWLhTM2%2F8A5iv36YBmyDVfXf%2BYpHG3Mu%2FHjUX2Vh2T5lawFfwlt6GFRnYC8nNpvMnqqrMM64%2BScZwz%2B0Kl1EF1mb3ZJoSXmvfcrjQFbMPvkj3BoVNWDspNPdYckwHfx8XPntNzRQLMh6Xwmw9viZQm9TkhXd4Qzl%2FqS3RLLxCDoINjp9rKSv%2FOhqB%2BOcW5NaMgbvyzYu5GpMYlJMrWxC118WKUxzJf%2FeiGOOKzK47%2FPKVxSo5W1Z6%2F3riD1RFvA9eq5Orxiy1NvF7hgjVXB%2FElWPo8GrcrCL%2BLgypg1atPC9dRpe0osc3uMO6BkcAGOqUBhPBDZuKLjk7lTX7%2Bs1VdHuQMMpH77jYNel3djxvbkwW8vVpPmfZSApVh0Z9JK4nY8TGb1qmgvnXBWDIIXYVCRzFn1t1hjJG52o%2BVLtPDg3fl7X4ZokIiKhSswmRnaYQ5XgC9gkKsb63JA4N1aUXSC%2BjyupyWyv4NALpam0sRgbwXh1e8KDdpN44xlYzcQXqbAOXwEZrDNsMeBtcpUf98HYE9vbEf&X-Amz-Signature=2e463eca33f38004e58304d1326569d207f3501b519a1a2dbcd2e1f715f3df31&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
