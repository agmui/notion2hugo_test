---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAVR5L6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCDrxGSNjQ%2BbQJsIL%2BCSDLkI67S8Gqcf9CG4ApAKWrUWwIgStBwoahzNFYof27RWwrrWuyO2ZDXFAW2MTdhi%2ByEx%2BQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMwFucbcPYMVsitK%2FCrcA5iqbmaXGyGWWo%2FvViwpecCZ2YxL0oKuOwrfxMLTxESyHzZAu8%2B3aXzRquNqva9lNyuZUGjlVAB%2BQsAX8mSi%2FAhCDnMVZo%2FOQCzvM%2F%2BPqGQ9GCKWTBbPYUcEy1K%2F373c9pEPz7qWubK3Ul0GQ%2FlBKpjadv%2Bk37i1zO64F1AcJH83Ugi0O75DKT%2ByUo8Akas9TGuFzC2buay%2Bxk9uN2d%2FlODzALpZVuf9zGh83pv%2FvGFirX08TjZWmjUct8Y%2BTDU0rUtfxJpNh4YvavAbctqtroEOr0ybGuIyWBl8N3RG3ZkQorkE4Ku6KueJkbh238dIF3p7J8yOawuDac3hwPJfSAmrXvEiAgUOfcwLh1%2BEME42CsGqdtCPK3FDpt7uTV0Va09f02pXr2eNNwtglDIo5Ba%2Bh1uZEptdMffz6M3dMH5PPLL6UF2UTYk2hgTFxcmolbjrUCTaOV88eIwD%2F8QCyVe7BU2akwcpAKWPfSGbSG%2FC2mvF2k1HHYL9rqB0D6s67eGvx8hpOCTLvqYXqJEaLmrBOOeQgNk8y7wF%2FYabKWFoaHuxXq2RXyXvn7VIuoPUUTtwP31j5%2BU9%2FjO5FVOob0TGXERHth8ZSH7oPd%2BUcaQURBaD2lS9wa24qqxxMJnPzMQGOqUBSPNmWCqwLzdPOoyDSE6g%2FerSBHN8L8tkQtw5sOsxE0U9Ve42j5LnP8JLmtzk3G8MZPIKobDIEACn7KJkU76IfRN5qkHFXApmp3Ng%2Bx0M%2Fd%2Fj1Q0apslwknq5xNGjI5cKH%2BrzMncSMpaeVMqO3n66WR%2BpbQm2QiKGk7xnZkhTlplRwSkvbxxzQ6tGwEGGtyUGLIEyRU8YVfTQxeai6s2YrQDnCOY4&X-Amz-Signature=8872689f23723e9939726cd3a36cf4b2be0631730635ceab16738df0aabbc7d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAVR5L6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCDrxGSNjQ%2BbQJsIL%2BCSDLkI67S8Gqcf9CG4ApAKWrUWwIgStBwoahzNFYof27RWwrrWuyO2ZDXFAW2MTdhi%2ByEx%2BQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMwFucbcPYMVsitK%2FCrcA5iqbmaXGyGWWo%2FvViwpecCZ2YxL0oKuOwrfxMLTxESyHzZAu8%2B3aXzRquNqva9lNyuZUGjlVAB%2BQsAX8mSi%2FAhCDnMVZo%2FOQCzvM%2F%2BPqGQ9GCKWTBbPYUcEy1K%2F373c9pEPz7qWubK3Ul0GQ%2FlBKpjadv%2Bk37i1zO64F1AcJH83Ugi0O75DKT%2ByUo8Akas9TGuFzC2buay%2Bxk9uN2d%2FlODzALpZVuf9zGh83pv%2FvGFirX08TjZWmjUct8Y%2BTDU0rUtfxJpNh4YvavAbctqtroEOr0ybGuIyWBl8N3RG3ZkQorkE4Ku6KueJkbh238dIF3p7J8yOawuDac3hwPJfSAmrXvEiAgUOfcwLh1%2BEME42CsGqdtCPK3FDpt7uTV0Va09f02pXr2eNNwtglDIo5Ba%2Bh1uZEptdMffz6M3dMH5PPLL6UF2UTYk2hgTFxcmolbjrUCTaOV88eIwD%2F8QCyVe7BU2akwcpAKWPfSGbSG%2FC2mvF2k1HHYL9rqB0D6s67eGvx8hpOCTLvqYXqJEaLmrBOOeQgNk8y7wF%2FYabKWFoaHuxXq2RXyXvn7VIuoPUUTtwP31j5%2BU9%2FjO5FVOob0TGXERHth8ZSH7oPd%2BUcaQURBaD2lS9wa24qqxxMJnPzMQGOqUBSPNmWCqwLzdPOoyDSE6g%2FerSBHN8L8tkQtw5sOsxE0U9Ve42j5LnP8JLmtzk3G8MZPIKobDIEACn7KJkU76IfRN5qkHFXApmp3Ng%2Bx0M%2Fd%2Fj1Q0apslwknq5xNGjI5cKH%2BrzMncSMpaeVMqO3n66WR%2BpbQm2QiKGk7xnZkhTlplRwSkvbxxzQ6tGwEGGtyUGLIEyRU8YVfTQxeai6s2YrQDnCOY4&X-Amz-Signature=26257194a1d8326b8206a9931a56dd8359f7d0caf7edbfe1623dc52c0f2bca6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAVR5L6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCDrxGSNjQ%2BbQJsIL%2BCSDLkI67S8Gqcf9CG4ApAKWrUWwIgStBwoahzNFYof27RWwrrWuyO2ZDXFAW2MTdhi%2ByEx%2BQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMwFucbcPYMVsitK%2FCrcA5iqbmaXGyGWWo%2FvViwpecCZ2YxL0oKuOwrfxMLTxESyHzZAu8%2B3aXzRquNqva9lNyuZUGjlVAB%2BQsAX8mSi%2FAhCDnMVZo%2FOQCzvM%2F%2BPqGQ9GCKWTBbPYUcEy1K%2F373c9pEPz7qWubK3Ul0GQ%2FlBKpjadv%2Bk37i1zO64F1AcJH83Ugi0O75DKT%2ByUo8Akas9TGuFzC2buay%2Bxk9uN2d%2FlODzALpZVuf9zGh83pv%2FvGFirX08TjZWmjUct8Y%2BTDU0rUtfxJpNh4YvavAbctqtroEOr0ybGuIyWBl8N3RG3ZkQorkE4Ku6KueJkbh238dIF3p7J8yOawuDac3hwPJfSAmrXvEiAgUOfcwLh1%2BEME42CsGqdtCPK3FDpt7uTV0Va09f02pXr2eNNwtglDIo5Ba%2Bh1uZEptdMffz6M3dMH5PPLL6UF2UTYk2hgTFxcmolbjrUCTaOV88eIwD%2F8QCyVe7BU2akwcpAKWPfSGbSG%2FC2mvF2k1HHYL9rqB0D6s67eGvx8hpOCTLvqYXqJEaLmrBOOeQgNk8y7wF%2FYabKWFoaHuxXq2RXyXvn7VIuoPUUTtwP31j5%2BU9%2FjO5FVOob0TGXERHth8ZSH7oPd%2BUcaQURBaD2lS9wa24qqxxMJnPzMQGOqUBSPNmWCqwLzdPOoyDSE6g%2FerSBHN8L8tkQtw5sOsxE0U9Ve42j5LnP8JLmtzk3G8MZPIKobDIEACn7KJkU76IfRN5qkHFXApmp3Ng%2Bx0M%2Fd%2Fj1Q0apslwknq5xNGjI5cKH%2BrzMncSMpaeVMqO3n66WR%2BpbQm2QiKGk7xnZkhTlplRwSkvbxxzQ6tGwEGGtyUGLIEyRU8YVfTQxeai6s2YrQDnCOY4&X-Amz-Signature=e51b56af328af9a2b85dbb817ca732b147ee867bcaf030071936f5d1b8c60e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAVR5L6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCDrxGSNjQ%2BbQJsIL%2BCSDLkI67S8Gqcf9CG4ApAKWrUWwIgStBwoahzNFYof27RWwrrWuyO2ZDXFAW2MTdhi%2ByEx%2BQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMwFucbcPYMVsitK%2FCrcA5iqbmaXGyGWWo%2FvViwpecCZ2YxL0oKuOwrfxMLTxESyHzZAu8%2B3aXzRquNqva9lNyuZUGjlVAB%2BQsAX8mSi%2FAhCDnMVZo%2FOQCzvM%2F%2BPqGQ9GCKWTBbPYUcEy1K%2F373c9pEPz7qWubK3Ul0GQ%2FlBKpjadv%2Bk37i1zO64F1AcJH83Ugi0O75DKT%2ByUo8Akas9TGuFzC2buay%2Bxk9uN2d%2FlODzALpZVuf9zGh83pv%2FvGFirX08TjZWmjUct8Y%2BTDU0rUtfxJpNh4YvavAbctqtroEOr0ybGuIyWBl8N3RG3ZkQorkE4Ku6KueJkbh238dIF3p7J8yOawuDac3hwPJfSAmrXvEiAgUOfcwLh1%2BEME42CsGqdtCPK3FDpt7uTV0Va09f02pXr2eNNwtglDIo5Ba%2Bh1uZEptdMffz6M3dMH5PPLL6UF2UTYk2hgTFxcmolbjrUCTaOV88eIwD%2F8QCyVe7BU2akwcpAKWPfSGbSG%2FC2mvF2k1HHYL9rqB0D6s67eGvx8hpOCTLvqYXqJEaLmrBOOeQgNk8y7wF%2FYabKWFoaHuxXq2RXyXvn7VIuoPUUTtwP31j5%2BU9%2FjO5FVOob0TGXERHth8ZSH7oPd%2BUcaQURBaD2lS9wa24qqxxMJnPzMQGOqUBSPNmWCqwLzdPOoyDSE6g%2FerSBHN8L8tkQtw5sOsxE0U9Ve42j5LnP8JLmtzk3G8MZPIKobDIEACn7KJkU76IfRN5qkHFXApmp3Ng%2Bx0M%2Fd%2Fj1Q0apslwknq5xNGjI5cKH%2BrzMncSMpaeVMqO3n66WR%2BpbQm2QiKGk7xnZkhTlplRwSkvbxxzQ6tGwEGGtyUGLIEyRU8YVfTQxeai6s2YrQDnCOY4&X-Amz-Signature=fbd7e8a3808b9849c38aec9b8fc94d20af80653fe5f2be7a941519d2cdf9c25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAVR5L6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCDrxGSNjQ%2BbQJsIL%2BCSDLkI67S8Gqcf9CG4ApAKWrUWwIgStBwoahzNFYof27RWwrrWuyO2ZDXFAW2MTdhi%2ByEx%2BQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMwFucbcPYMVsitK%2FCrcA5iqbmaXGyGWWo%2FvViwpecCZ2YxL0oKuOwrfxMLTxESyHzZAu8%2B3aXzRquNqva9lNyuZUGjlVAB%2BQsAX8mSi%2FAhCDnMVZo%2FOQCzvM%2F%2BPqGQ9GCKWTBbPYUcEy1K%2F373c9pEPz7qWubK3Ul0GQ%2FlBKpjadv%2Bk37i1zO64F1AcJH83Ugi0O75DKT%2ByUo8Akas9TGuFzC2buay%2Bxk9uN2d%2FlODzALpZVuf9zGh83pv%2FvGFirX08TjZWmjUct8Y%2BTDU0rUtfxJpNh4YvavAbctqtroEOr0ybGuIyWBl8N3RG3ZkQorkE4Ku6KueJkbh238dIF3p7J8yOawuDac3hwPJfSAmrXvEiAgUOfcwLh1%2BEME42CsGqdtCPK3FDpt7uTV0Va09f02pXr2eNNwtglDIo5Ba%2Bh1uZEptdMffz6M3dMH5PPLL6UF2UTYk2hgTFxcmolbjrUCTaOV88eIwD%2F8QCyVe7BU2akwcpAKWPfSGbSG%2FC2mvF2k1HHYL9rqB0D6s67eGvx8hpOCTLvqYXqJEaLmrBOOeQgNk8y7wF%2FYabKWFoaHuxXq2RXyXvn7VIuoPUUTtwP31j5%2BU9%2FjO5FVOob0TGXERHth8ZSH7oPd%2BUcaQURBaD2lS9wa24qqxxMJnPzMQGOqUBSPNmWCqwLzdPOoyDSE6g%2FerSBHN8L8tkQtw5sOsxE0U9Ve42j5LnP8JLmtzk3G8MZPIKobDIEACn7KJkU76IfRN5qkHFXApmp3Ng%2Bx0M%2Fd%2Fj1Q0apslwknq5xNGjI5cKH%2BrzMncSMpaeVMqO3n66WR%2BpbQm2QiKGk7xnZkhTlplRwSkvbxxzQ6tGwEGGtyUGLIEyRU8YVfTQxeai6s2YrQDnCOY4&X-Amz-Signature=586f092b81d6c2f57182f8c96b8e941f3dddac48c20e7029efd0b5e21d86f4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAVR5L6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCDrxGSNjQ%2BbQJsIL%2BCSDLkI67S8Gqcf9CG4ApAKWrUWwIgStBwoahzNFYof27RWwrrWuyO2ZDXFAW2MTdhi%2ByEx%2BQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMwFucbcPYMVsitK%2FCrcA5iqbmaXGyGWWo%2FvViwpecCZ2YxL0oKuOwrfxMLTxESyHzZAu8%2B3aXzRquNqva9lNyuZUGjlVAB%2BQsAX8mSi%2FAhCDnMVZo%2FOQCzvM%2F%2BPqGQ9GCKWTBbPYUcEy1K%2F373c9pEPz7qWubK3Ul0GQ%2FlBKpjadv%2Bk37i1zO64F1AcJH83Ugi0O75DKT%2ByUo8Akas9TGuFzC2buay%2Bxk9uN2d%2FlODzALpZVuf9zGh83pv%2FvGFirX08TjZWmjUct8Y%2BTDU0rUtfxJpNh4YvavAbctqtroEOr0ybGuIyWBl8N3RG3ZkQorkE4Ku6KueJkbh238dIF3p7J8yOawuDac3hwPJfSAmrXvEiAgUOfcwLh1%2BEME42CsGqdtCPK3FDpt7uTV0Va09f02pXr2eNNwtglDIo5Ba%2Bh1uZEptdMffz6M3dMH5PPLL6UF2UTYk2hgTFxcmolbjrUCTaOV88eIwD%2F8QCyVe7BU2akwcpAKWPfSGbSG%2FC2mvF2k1HHYL9rqB0D6s67eGvx8hpOCTLvqYXqJEaLmrBOOeQgNk8y7wF%2FYabKWFoaHuxXq2RXyXvn7VIuoPUUTtwP31j5%2BU9%2FjO5FVOob0TGXERHth8ZSH7oPd%2BUcaQURBaD2lS9wa24qqxxMJnPzMQGOqUBSPNmWCqwLzdPOoyDSE6g%2FerSBHN8L8tkQtw5sOsxE0U9Ve42j5LnP8JLmtzk3G8MZPIKobDIEACn7KJkU76IfRN5qkHFXApmp3Ng%2Bx0M%2Fd%2Fj1Q0apslwknq5xNGjI5cKH%2BrzMncSMpaeVMqO3n66WR%2BpbQm2QiKGk7xnZkhTlplRwSkvbxxzQ6tGwEGGtyUGLIEyRU8YVfTQxeai6s2YrQDnCOY4&X-Amz-Signature=78403bb90ff7bd6fb42fbd2bb4bce179ed9e12619be9ad418f184edd40da46a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAVR5L6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCDrxGSNjQ%2BbQJsIL%2BCSDLkI67S8Gqcf9CG4ApAKWrUWwIgStBwoahzNFYof27RWwrrWuyO2ZDXFAW2MTdhi%2ByEx%2BQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMwFucbcPYMVsitK%2FCrcA5iqbmaXGyGWWo%2FvViwpecCZ2YxL0oKuOwrfxMLTxESyHzZAu8%2B3aXzRquNqva9lNyuZUGjlVAB%2BQsAX8mSi%2FAhCDnMVZo%2FOQCzvM%2F%2BPqGQ9GCKWTBbPYUcEy1K%2F373c9pEPz7qWubK3Ul0GQ%2FlBKpjadv%2Bk37i1zO64F1AcJH83Ugi0O75DKT%2ByUo8Akas9TGuFzC2buay%2Bxk9uN2d%2FlODzALpZVuf9zGh83pv%2FvGFirX08TjZWmjUct8Y%2BTDU0rUtfxJpNh4YvavAbctqtroEOr0ybGuIyWBl8N3RG3ZkQorkE4Ku6KueJkbh238dIF3p7J8yOawuDac3hwPJfSAmrXvEiAgUOfcwLh1%2BEME42CsGqdtCPK3FDpt7uTV0Va09f02pXr2eNNwtglDIo5Ba%2Bh1uZEptdMffz6M3dMH5PPLL6UF2UTYk2hgTFxcmolbjrUCTaOV88eIwD%2F8QCyVe7BU2akwcpAKWPfSGbSG%2FC2mvF2k1HHYL9rqB0D6s67eGvx8hpOCTLvqYXqJEaLmrBOOeQgNk8y7wF%2FYabKWFoaHuxXq2RXyXvn7VIuoPUUTtwP31j5%2BU9%2FjO5FVOob0TGXERHth8ZSH7oPd%2BUcaQURBaD2lS9wa24qqxxMJnPzMQGOqUBSPNmWCqwLzdPOoyDSE6g%2FerSBHN8L8tkQtw5sOsxE0U9Ve42j5LnP8JLmtzk3G8MZPIKobDIEACn7KJkU76IfRN5qkHFXApmp3Ng%2Bx0M%2Fd%2Fj1Q0apslwknq5xNGjI5cKH%2BrzMncSMpaeVMqO3n66WR%2BpbQm2QiKGk7xnZkhTlplRwSkvbxxzQ6tGwEGGtyUGLIEyRU8YVfTQxeai6s2YrQDnCOY4&X-Amz-Signature=e4f8b734e4390eb7b63776b9dd9876fccd7e827826de59ccb83d28213d14c7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
