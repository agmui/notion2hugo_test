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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2KCNPF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC4pE%2Fh0AVq09GjLNFsJAcyQqmaSpn%2B1NfhUcXG%2FQBbjwIgWLO36xOrJqesQZoG0%2BQhHNc%2BO3ndQbLBLY1Fb7xvI%2F0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcrzPb9pXPXbePr4SrcA18inMvPLABvauoJS1h0cwEpZ3PRZ9azVXfVPvHR31IKvFwRaK8dayQ7SJcpQiz2nrTCm19j7VE8PTwdfJeIi6cwERb25zlMKoBeRjT5BsFtM31wy4IdOxTYjansL%2FOi03ts3bJtO2fbJQAVPwI70QRq26o0EvWaSYpmNufIODsPXIueTK4fO0J%2F0NFUiq6YbSXmSrsHz8ZQJyOD6o4A5fR%2BUFgTHbv1X6AP9IMtqVGjSWfbxCfxcBydn317%2FU2us9QmtjTJF4%2BeQ9PTChromrUFxeIOx%2F3elDYAgczptvPyP9B3bzM0WLX1M00wl4Vepm3hrI%2FkMGaHcpPNeCzdoctx4hTMD2cjtUJ2bYmceV78bPmg5f6zT4QcvllhN8fHEfc3AwAHqYteLJAkGpEfWPc1I%2B9kW%2FOeCYY3KuIBc7boPQTiVnF59di%2F1WQxEPPARVVtQVkpSgxv%2BqZWFm0Plk9aVbxEXAU4%2BM3S10hnniysnjvaGdpQw%2BJYc46hzeRsc3hNdRh7llJlntAKKpLykB7ykPW79iNTpwQydL1cjnfMKF5%2BuwTAm60ftXuXIx%2F%2FkBwwN87kd4ceDvG6HZuO%2BE%2FQgbu9UBp%2FhggEbI1XlbNuCfI5aCf01iMyTFAiMLLwz70GOqUBxQ87w7G8JEe0c2SyLJ3c2rig2h3X7%2F%2F45eqc7rIdZgli8xzhlJJw8ddZ9AYL4JQsjYOlnx5r%2FMKssq3Ndl9WhOAXpZqp%2Fh3epx%2FqrwPlrgFSWCchikw8ffx5AEUY2l91CUXSj1IZBZurdIdjSazvQ5TQNL%2BAHjoJYYvQimsyRurGXaPaZTkGsLklA6GlbzeCa7ciVqeG%2BqdNisnrpM2tEPd6Igjp&X-Amz-Signature=296a80cd93510a6dec4a1c9b431db1ee20d9c655e804a8afe0d0415440dd7726&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2KCNPF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC4pE%2Fh0AVq09GjLNFsJAcyQqmaSpn%2B1NfhUcXG%2FQBbjwIgWLO36xOrJqesQZoG0%2BQhHNc%2BO3ndQbLBLY1Fb7xvI%2F0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcrzPb9pXPXbePr4SrcA18inMvPLABvauoJS1h0cwEpZ3PRZ9azVXfVPvHR31IKvFwRaK8dayQ7SJcpQiz2nrTCm19j7VE8PTwdfJeIi6cwERb25zlMKoBeRjT5BsFtM31wy4IdOxTYjansL%2FOi03ts3bJtO2fbJQAVPwI70QRq26o0EvWaSYpmNufIODsPXIueTK4fO0J%2F0NFUiq6YbSXmSrsHz8ZQJyOD6o4A5fR%2BUFgTHbv1X6AP9IMtqVGjSWfbxCfxcBydn317%2FU2us9QmtjTJF4%2BeQ9PTChromrUFxeIOx%2F3elDYAgczptvPyP9B3bzM0WLX1M00wl4Vepm3hrI%2FkMGaHcpPNeCzdoctx4hTMD2cjtUJ2bYmceV78bPmg5f6zT4QcvllhN8fHEfc3AwAHqYteLJAkGpEfWPc1I%2B9kW%2FOeCYY3KuIBc7boPQTiVnF59di%2F1WQxEPPARVVtQVkpSgxv%2BqZWFm0Plk9aVbxEXAU4%2BM3S10hnniysnjvaGdpQw%2BJYc46hzeRsc3hNdRh7llJlntAKKpLykB7ykPW79iNTpwQydL1cjnfMKF5%2BuwTAm60ftXuXIx%2F%2FkBwwN87kd4ceDvG6HZuO%2BE%2FQgbu9UBp%2FhggEbI1XlbNuCfI5aCf01iMyTFAiMLLwz70GOqUBxQ87w7G8JEe0c2SyLJ3c2rig2h3X7%2F%2F45eqc7rIdZgli8xzhlJJw8ddZ9AYL4JQsjYOlnx5r%2FMKssq3Ndl9WhOAXpZqp%2Fh3epx%2FqrwPlrgFSWCchikw8ffx5AEUY2l91CUXSj1IZBZurdIdjSazvQ5TQNL%2BAHjoJYYvQimsyRurGXaPaZTkGsLklA6GlbzeCa7ciVqeG%2BqdNisnrpM2tEPd6Igjp&X-Amz-Signature=08b28128cb06023df3c2e3bba4209875f28ecc46fd97d15e2d5a56b378a99530&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2KCNPF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC4pE%2Fh0AVq09GjLNFsJAcyQqmaSpn%2B1NfhUcXG%2FQBbjwIgWLO36xOrJqesQZoG0%2BQhHNc%2BO3ndQbLBLY1Fb7xvI%2F0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcrzPb9pXPXbePr4SrcA18inMvPLABvauoJS1h0cwEpZ3PRZ9azVXfVPvHR31IKvFwRaK8dayQ7SJcpQiz2nrTCm19j7VE8PTwdfJeIi6cwERb25zlMKoBeRjT5BsFtM31wy4IdOxTYjansL%2FOi03ts3bJtO2fbJQAVPwI70QRq26o0EvWaSYpmNufIODsPXIueTK4fO0J%2F0NFUiq6YbSXmSrsHz8ZQJyOD6o4A5fR%2BUFgTHbv1X6AP9IMtqVGjSWfbxCfxcBydn317%2FU2us9QmtjTJF4%2BeQ9PTChromrUFxeIOx%2F3elDYAgczptvPyP9B3bzM0WLX1M00wl4Vepm3hrI%2FkMGaHcpPNeCzdoctx4hTMD2cjtUJ2bYmceV78bPmg5f6zT4QcvllhN8fHEfc3AwAHqYteLJAkGpEfWPc1I%2B9kW%2FOeCYY3KuIBc7boPQTiVnF59di%2F1WQxEPPARVVtQVkpSgxv%2BqZWFm0Plk9aVbxEXAU4%2BM3S10hnniysnjvaGdpQw%2BJYc46hzeRsc3hNdRh7llJlntAKKpLykB7ykPW79iNTpwQydL1cjnfMKF5%2BuwTAm60ftXuXIx%2F%2FkBwwN87kd4ceDvG6HZuO%2BE%2FQgbu9UBp%2FhggEbI1XlbNuCfI5aCf01iMyTFAiMLLwz70GOqUBxQ87w7G8JEe0c2SyLJ3c2rig2h3X7%2F%2F45eqc7rIdZgli8xzhlJJw8ddZ9AYL4JQsjYOlnx5r%2FMKssq3Ndl9WhOAXpZqp%2Fh3epx%2FqrwPlrgFSWCchikw8ffx5AEUY2l91CUXSj1IZBZurdIdjSazvQ5TQNL%2BAHjoJYYvQimsyRurGXaPaZTkGsLklA6GlbzeCa7ciVqeG%2BqdNisnrpM2tEPd6Igjp&X-Amz-Signature=24dff3803de08ec6a4d2a38d5430ed81952b3e30c1916738f62f14c1e067263f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2KCNPF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC4pE%2Fh0AVq09GjLNFsJAcyQqmaSpn%2B1NfhUcXG%2FQBbjwIgWLO36xOrJqesQZoG0%2BQhHNc%2BO3ndQbLBLY1Fb7xvI%2F0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcrzPb9pXPXbePr4SrcA18inMvPLABvauoJS1h0cwEpZ3PRZ9azVXfVPvHR31IKvFwRaK8dayQ7SJcpQiz2nrTCm19j7VE8PTwdfJeIi6cwERb25zlMKoBeRjT5BsFtM31wy4IdOxTYjansL%2FOi03ts3bJtO2fbJQAVPwI70QRq26o0EvWaSYpmNufIODsPXIueTK4fO0J%2F0NFUiq6YbSXmSrsHz8ZQJyOD6o4A5fR%2BUFgTHbv1X6AP9IMtqVGjSWfbxCfxcBydn317%2FU2us9QmtjTJF4%2BeQ9PTChromrUFxeIOx%2F3elDYAgczptvPyP9B3bzM0WLX1M00wl4Vepm3hrI%2FkMGaHcpPNeCzdoctx4hTMD2cjtUJ2bYmceV78bPmg5f6zT4QcvllhN8fHEfc3AwAHqYteLJAkGpEfWPc1I%2B9kW%2FOeCYY3KuIBc7boPQTiVnF59di%2F1WQxEPPARVVtQVkpSgxv%2BqZWFm0Plk9aVbxEXAU4%2BM3S10hnniysnjvaGdpQw%2BJYc46hzeRsc3hNdRh7llJlntAKKpLykB7ykPW79iNTpwQydL1cjnfMKF5%2BuwTAm60ftXuXIx%2F%2FkBwwN87kd4ceDvG6HZuO%2BE%2FQgbu9UBp%2FhggEbI1XlbNuCfI5aCf01iMyTFAiMLLwz70GOqUBxQ87w7G8JEe0c2SyLJ3c2rig2h3X7%2F%2F45eqc7rIdZgli8xzhlJJw8ddZ9AYL4JQsjYOlnx5r%2FMKssq3Ndl9WhOAXpZqp%2Fh3epx%2FqrwPlrgFSWCchikw8ffx5AEUY2l91CUXSj1IZBZurdIdjSazvQ5TQNL%2BAHjoJYYvQimsyRurGXaPaZTkGsLklA6GlbzeCa7ciVqeG%2BqdNisnrpM2tEPd6Igjp&X-Amz-Signature=d539218169edf238f54e198fb9f7846ec71f5dbe2bf7b141db386bd77ef776c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2KCNPF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC4pE%2Fh0AVq09GjLNFsJAcyQqmaSpn%2B1NfhUcXG%2FQBbjwIgWLO36xOrJqesQZoG0%2BQhHNc%2BO3ndQbLBLY1Fb7xvI%2F0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcrzPb9pXPXbePr4SrcA18inMvPLABvauoJS1h0cwEpZ3PRZ9azVXfVPvHR31IKvFwRaK8dayQ7SJcpQiz2nrTCm19j7VE8PTwdfJeIi6cwERb25zlMKoBeRjT5BsFtM31wy4IdOxTYjansL%2FOi03ts3bJtO2fbJQAVPwI70QRq26o0EvWaSYpmNufIODsPXIueTK4fO0J%2F0NFUiq6YbSXmSrsHz8ZQJyOD6o4A5fR%2BUFgTHbv1X6AP9IMtqVGjSWfbxCfxcBydn317%2FU2us9QmtjTJF4%2BeQ9PTChromrUFxeIOx%2F3elDYAgczptvPyP9B3bzM0WLX1M00wl4Vepm3hrI%2FkMGaHcpPNeCzdoctx4hTMD2cjtUJ2bYmceV78bPmg5f6zT4QcvllhN8fHEfc3AwAHqYteLJAkGpEfWPc1I%2B9kW%2FOeCYY3KuIBc7boPQTiVnF59di%2F1WQxEPPARVVtQVkpSgxv%2BqZWFm0Plk9aVbxEXAU4%2BM3S10hnniysnjvaGdpQw%2BJYc46hzeRsc3hNdRh7llJlntAKKpLykB7ykPW79iNTpwQydL1cjnfMKF5%2BuwTAm60ftXuXIx%2F%2FkBwwN87kd4ceDvG6HZuO%2BE%2FQgbu9UBp%2FhggEbI1XlbNuCfI5aCf01iMyTFAiMLLwz70GOqUBxQ87w7G8JEe0c2SyLJ3c2rig2h3X7%2F%2F45eqc7rIdZgli8xzhlJJw8ddZ9AYL4JQsjYOlnx5r%2FMKssq3Ndl9WhOAXpZqp%2Fh3epx%2FqrwPlrgFSWCchikw8ffx5AEUY2l91CUXSj1IZBZurdIdjSazvQ5TQNL%2BAHjoJYYvQimsyRurGXaPaZTkGsLklA6GlbzeCa7ciVqeG%2BqdNisnrpM2tEPd6Igjp&X-Amz-Signature=fc787d779727d3305e6c01ed21e1483aa1552508636ca2206acc3b42b4b55829&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2KCNPF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC4pE%2Fh0AVq09GjLNFsJAcyQqmaSpn%2B1NfhUcXG%2FQBbjwIgWLO36xOrJqesQZoG0%2BQhHNc%2BO3ndQbLBLY1Fb7xvI%2F0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcrzPb9pXPXbePr4SrcA18inMvPLABvauoJS1h0cwEpZ3PRZ9azVXfVPvHR31IKvFwRaK8dayQ7SJcpQiz2nrTCm19j7VE8PTwdfJeIi6cwERb25zlMKoBeRjT5BsFtM31wy4IdOxTYjansL%2FOi03ts3bJtO2fbJQAVPwI70QRq26o0EvWaSYpmNufIODsPXIueTK4fO0J%2F0NFUiq6YbSXmSrsHz8ZQJyOD6o4A5fR%2BUFgTHbv1X6AP9IMtqVGjSWfbxCfxcBydn317%2FU2us9QmtjTJF4%2BeQ9PTChromrUFxeIOx%2F3elDYAgczptvPyP9B3bzM0WLX1M00wl4Vepm3hrI%2FkMGaHcpPNeCzdoctx4hTMD2cjtUJ2bYmceV78bPmg5f6zT4QcvllhN8fHEfc3AwAHqYteLJAkGpEfWPc1I%2B9kW%2FOeCYY3KuIBc7boPQTiVnF59di%2F1WQxEPPARVVtQVkpSgxv%2BqZWFm0Plk9aVbxEXAU4%2BM3S10hnniysnjvaGdpQw%2BJYc46hzeRsc3hNdRh7llJlntAKKpLykB7ykPW79iNTpwQydL1cjnfMKF5%2BuwTAm60ftXuXIx%2F%2FkBwwN87kd4ceDvG6HZuO%2BE%2FQgbu9UBp%2FhggEbI1XlbNuCfI5aCf01iMyTFAiMLLwz70GOqUBxQ87w7G8JEe0c2SyLJ3c2rig2h3X7%2F%2F45eqc7rIdZgli8xzhlJJw8ddZ9AYL4JQsjYOlnx5r%2FMKssq3Ndl9WhOAXpZqp%2Fh3epx%2FqrwPlrgFSWCchikw8ffx5AEUY2l91CUXSj1IZBZurdIdjSazvQ5TQNL%2BAHjoJYYvQimsyRurGXaPaZTkGsLklA6GlbzeCa7ciVqeG%2BqdNisnrpM2tEPd6Igjp&X-Amz-Signature=232f153349d9074c979afeb97db9df06aca9950d762654723bf93ede6cd3bde4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2KCNPF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC4pE%2Fh0AVq09GjLNFsJAcyQqmaSpn%2B1NfhUcXG%2FQBbjwIgWLO36xOrJqesQZoG0%2BQhHNc%2BO3ndQbLBLY1Fb7xvI%2F0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcrzPb9pXPXbePr4SrcA18inMvPLABvauoJS1h0cwEpZ3PRZ9azVXfVPvHR31IKvFwRaK8dayQ7SJcpQiz2nrTCm19j7VE8PTwdfJeIi6cwERb25zlMKoBeRjT5BsFtM31wy4IdOxTYjansL%2FOi03ts3bJtO2fbJQAVPwI70QRq26o0EvWaSYpmNufIODsPXIueTK4fO0J%2F0NFUiq6YbSXmSrsHz8ZQJyOD6o4A5fR%2BUFgTHbv1X6AP9IMtqVGjSWfbxCfxcBydn317%2FU2us9QmtjTJF4%2BeQ9PTChromrUFxeIOx%2F3elDYAgczptvPyP9B3bzM0WLX1M00wl4Vepm3hrI%2FkMGaHcpPNeCzdoctx4hTMD2cjtUJ2bYmceV78bPmg5f6zT4QcvllhN8fHEfc3AwAHqYteLJAkGpEfWPc1I%2B9kW%2FOeCYY3KuIBc7boPQTiVnF59di%2F1WQxEPPARVVtQVkpSgxv%2BqZWFm0Plk9aVbxEXAU4%2BM3S10hnniysnjvaGdpQw%2BJYc46hzeRsc3hNdRh7llJlntAKKpLykB7ykPW79iNTpwQydL1cjnfMKF5%2BuwTAm60ftXuXIx%2F%2FkBwwN87kd4ceDvG6HZuO%2BE%2FQgbu9UBp%2FhggEbI1XlbNuCfI5aCf01iMyTFAiMLLwz70GOqUBxQ87w7G8JEe0c2SyLJ3c2rig2h3X7%2F%2F45eqc7rIdZgli8xzhlJJw8ddZ9AYL4JQsjYOlnx5r%2FMKssq3Ndl9WhOAXpZqp%2Fh3epx%2FqrwPlrgFSWCchikw8ffx5AEUY2l91CUXSj1IZBZurdIdjSazvQ5TQNL%2BAHjoJYYvQimsyRurGXaPaZTkGsLklA6GlbzeCa7ciVqeG%2BqdNisnrpM2tEPd6Igjp&X-Amz-Signature=7a65533c71bed3b67bb88e15e46c77a0b8610acea5d64ddea49d09744243d9fb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
