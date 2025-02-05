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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L5M7GGG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIByc5RCED40nlbbBEyWzAqBNcFbYa%2F4c8ObYjCbTGAwoAiEAiFTxLP8NBFY%2FRBfmjmwFzmqLIgMFcCh2S9O03WDC%2FYQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOM09nggb%2Fpg1DDm7yrcA%2BJBjZkdnG8VsDzZrbOfPpLR5dHZbs%2B11ioRNbkp%2BFOEBoPcYchp9lSJbpdLQUuk8gsSlqVZPhJx%2FXSABF5ipC5gKNoYYpxYRbHvObcgHIsNMCtE%2FJ2rq%2FcYdefn4PNWM7h75m8wDvVbydzbcdQXgPPl%2FP%2BsEc%2FZucO5Wu1Ads4xtvTXOuBUJe9gw9635VwpRt13C07Qirf2BtXL7R3WavAOOzX4yjFBNK6lB%2BgsYeZaAdUrryhwsupncz2T%2Fr4NaYyqo0OxRS73ZGa1o%2FF5EKmUYTRd131WNQZlUM3ngzDqXSzdNPNJI2sdzcJRCMo3Dupsuagsd7xTGdx5SoS6nLDOUzhoiZa1XgDjqJ2fwv%2FMGN1GuXPTOW2VIM5tWbcZzmeqbXWX1weuIyPUYCFBhM2yNN80jnTphdIKL8FhLe0dmhAu9ebG2MQVwVNomKm2fjJMUH5C107y2kj%2FLYtR4Ar2PX9ujPr%2B9YWOBPYeg%2FZ7bO7TcPFrwDkr4wm9divcVCfzNDIMmkhZjaDtPJWrlDNF5POiaimKgiOtiGIKwfQ%2B1f1wiviIKTxCogunInS8o8FA6ydwpuYEBU4xrC6rjQMRKnK%2FhtEPV5jaqBVXAhg1VatcZ8JO8pqpdqhUMOq7jr0GOqUBjfnSzh47zjGnnuoXf2jXho2nCeC6Ks11sTg3BZe9ICGKK4rUWDhG4UocgkB%2Bcow8dwRahKPt2IWfOwtgwXVAwbqnb%2FneVsV2zFmUcS309sy1NKHq0HC7aaoQhP%2FUQp3nZoHmXk3hUs9P%2BaFb87rhmfMrFMfwVCboa3cf2yHbQCmvaI984V0IHB19N3zvVdmiL8yBKuCYxDMbrxm0OvUjRke2OFRg&X-Amz-Signature=21843a9b32ef76657f9af20c92db9344f94c325693ae9f24eff1e2ad69346e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L5M7GGG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIByc5RCED40nlbbBEyWzAqBNcFbYa%2F4c8ObYjCbTGAwoAiEAiFTxLP8NBFY%2FRBfmjmwFzmqLIgMFcCh2S9O03WDC%2FYQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOM09nggb%2Fpg1DDm7yrcA%2BJBjZkdnG8VsDzZrbOfPpLR5dHZbs%2B11ioRNbkp%2BFOEBoPcYchp9lSJbpdLQUuk8gsSlqVZPhJx%2FXSABF5ipC5gKNoYYpxYRbHvObcgHIsNMCtE%2FJ2rq%2FcYdefn4PNWM7h75m8wDvVbydzbcdQXgPPl%2FP%2BsEc%2FZucO5Wu1Ads4xtvTXOuBUJe9gw9635VwpRt13C07Qirf2BtXL7R3WavAOOzX4yjFBNK6lB%2BgsYeZaAdUrryhwsupncz2T%2Fr4NaYyqo0OxRS73ZGa1o%2FF5EKmUYTRd131WNQZlUM3ngzDqXSzdNPNJI2sdzcJRCMo3Dupsuagsd7xTGdx5SoS6nLDOUzhoiZa1XgDjqJ2fwv%2FMGN1GuXPTOW2VIM5tWbcZzmeqbXWX1weuIyPUYCFBhM2yNN80jnTphdIKL8FhLe0dmhAu9ebG2MQVwVNomKm2fjJMUH5C107y2kj%2FLYtR4Ar2PX9ujPr%2B9YWOBPYeg%2FZ7bO7TcPFrwDkr4wm9divcVCfzNDIMmkhZjaDtPJWrlDNF5POiaimKgiOtiGIKwfQ%2B1f1wiviIKTxCogunInS8o8FA6ydwpuYEBU4xrC6rjQMRKnK%2FhtEPV5jaqBVXAhg1VatcZ8JO8pqpdqhUMOq7jr0GOqUBjfnSzh47zjGnnuoXf2jXho2nCeC6Ks11sTg3BZe9ICGKK4rUWDhG4UocgkB%2Bcow8dwRahKPt2IWfOwtgwXVAwbqnb%2FneVsV2zFmUcS309sy1NKHq0HC7aaoQhP%2FUQp3nZoHmXk3hUs9P%2BaFb87rhmfMrFMfwVCboa3cf2yHbQCmvaI984V0IHB19N3zvVdmiL8yBKuCYxDMbrxm0OvUjRke2OFRg&X-Amz-Signature=51ff1c32be8919c015f85f2dbd7e5bfb2ce9a8a650ae6b484f58ee45ec8fc129&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L5M7GGG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIByc5RCED40nlbbBEyWzAqBNcFbYa%2F4c8ObYjCbTGAwoAiEAiFTxLP8NBFY%2FRBfmjmwFzmqLIgMFcCh2S9O03WDC%2FYQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOM09nggb%2Fpg1DDm7yrcA%2BJBjZkdnG8VsDzZrbOfPpLR5dHZbs%2B11ioRNbkp%2BFOEBoPcYchp9lSJbpdLQUuk8gsSlqVZPhJx%2FXSABF5ipC5gKNoYYpxYRbHvObcgHIsNMCtE%2FJ2rq%2FcYdefn4PNWM7h75m8wDvVbydzbcdQXgPPl%2FP%2BsEc%2FZucO5Wu1Ads4xtvTXOuBUJe9gw9635VwpRt13C07Qirf2BtXL7R3WavAOOzX4yjFBNK6lB%2BgsYeZaAdUrryhwsupncz2T%2Fr4NaYyqo0OxRS73ZGa1o%2FF5EKmUYTRd131WNQZlUM3ngzDqXSzdNPNJI2sdzcJRCMo3Dupsuagsd7xTGdx5SoS6nLDOUzhoiZa1XgDjqJ2fwv%2FMGN1GuXPTOW2VIM5tWbcZzmeqbXWX1weuIyPUYCFBhM2yNN80jnTphdIKL8FhLe0dmhAu9ebG2MQVwVNomKm2fjJMUH5C107y2kj%2FLYtR4Ar2PX9ujPr%2B9YWOBPYeg%2FZ7bO7TcPFrwDkr4wm9divcVCfzNDIMmkhZjaDtPJWrlDNF5POiaimKgiOtiGIKwfQ%2B1f1wiviIKTxCogunInS8o8FA6ydwpuYEBU4xrC6rjQMRKnK%2FhtEPV5jaqBVXAhg1VatcZ8JO8pqpdqhUMOq7jr0GOqUBjfnSzh47zjGnnuoXf2jXho2nCeC6Ks11sTg3BZe9ICGKK4rUWDhG4UocgkB%2Bcow8dwRahKPt2IWfOwtgwXVAwbqnb%2FneVsV2zFmUcS309sy1NKHq0HC7aaoQhP%2FUQp3nZoHmXk3hUs9P%2BaFb87rhmfMrFMfwVCboa3cf2yHbQCmvaI984V0IHB19N3zvVdmiL8yBKuCYxDMbrxm0OvUjRke2OFRg&X-Amz-Signature=7b34e24be4c1a447a878a9c50425d62944388acf14c791720ecd0935742e93b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L5M7GGG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIByc5RCED40nlbbBEyWzAqBNcFbYa%2F4c8ObYjCbTGAwoAiEAiFTxLP8NBFY%2FRBfmjmwFzmqLIgMFcCh2S9O03WDC%2FYQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOM09nggb%2Fpg1DDm7yrcA%2BJBjZkdnG8VsDzZrbOfPpLR5dHZbs%2B11ioRNbkp%2BFOEBoPcYchp9lSJbpdLQUuk8gsSlqVZPhJx%2FXSABF5ipC5gKNoYYpxYRbHvObcgHIsNMCtE%2FJ2rq%2FcYdefn4PNWM7h75m8wDvVbydzbcdQXgPPl%2FP%2BsEc%2FZucO5Wu1Ads4xtvTXOuBUJe9gw9635VwpRt13C07Qirf2BtXL7R3WavAOOzX4yjFBNK6lB%2BgsYeZaAdUrryhwsupncz2T%2Fr4NaYyqo0OxRS73ZGa1o%2FF5EKmUYTRd131WNQZlUM3ngzDqXSzdNPNJI2sdzcJRCMo3Dupsuagsd7xTGdx5SoS6nLDOUzhoiZa1XgDjqJ2fwv%2FMGN1GuXPTOW2VIM5tWbcZzmeqbXWX1weuIyPUYCFBhM2yNN80jnTphdIKL8FhLe0dmhAu9ebG2MQVwVNomKm2fjJMUH5C107y2kj%2FLYtR4Ar2PX9ujPr%2B9YWOBPYeg%2FZ7bO7TcPFrwDkr4wm9divcVCfzNDIMmkhZjaDtPJWrlDNF5POiaimKgiOtiGIKwfQ%2B1f1wiviIKTxCogunInS8o8FA6ydwpuYEBU4xrC6rjQMRKnK%2FhtEPV5jaqBVXAhg1VatcZ8JO8pqpdqhUMOq7jr0GOqUBjfnSzh47zjGnnuoXf2jXho2nCeC6Ks11sTg3BZe9ICGKK4rUWDhG4UocgkB%2Bcow8dwRahKPt2IWfOwtgwXVAwbqnb%2FneVsV2zFmUcS309sy1NKHq0HC7aaoQhP%2FUQp3nZoHmXk3hUs9P%2BaFb87rhmfMrFMfwVCboa3cf2yHbQCmvaI984V0IHB19N3zvVdmiL8yBKuCYxDMbrxm0OvUjRke2OFRg&X-Amz-Signature=4475689a95d49dd062b7c2f0095228b93e8149d319a46803f543ce1ac423da11&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L5M7GGG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIByc5RCED40nlbbBEyWzAqBNcFbYa%2F4c8ObYjCbTGAwoAiEAiFTxLP8NBFY%2FRBfmjmwFzmqLIgMFcCh2S9O03WDC%2FYQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOM09nggb%2Fpg1DDm7yrcA%2BJBjZkdnG8VsDzZrbOfPpLR5dHZbs%2B11ioRNbkp%2BFOEBoPcYchp9lSJbpdLQUuk8gsSlqVZPhJx%2FXSABF5ipC5gKNoYYpxYRbHvObcgHIsNMCtE%2FJ2rq%2FcYdefn4PNWM7h75m8wDvVbydzbcdQXgPPl%2FP%2BsEc%2FZucO5Wu1Ads4xtvTXOuBUJe9gw9635VwpRt13C07Qirf2BtXL7R3WavAOOzX4yjFBNK6lB%2BgsYeZaAdUrryhwsupncz2T%2Fr4NaYyqo0OxRS73ZGa1o%2FF5EKmUYTRd131WNQZlUM3ngzDqXSzdNPNJI2sdzcJRCMo3Dupsuagsd7xTGdx5SoS6nLDOUzhoiZa1XgDjqJ2fwv%2FMGN1GuXPTOW2VIM5tWbcZzmeqbXWX1weuIyPUYCFBhM2yNN80jnTphdIKL8FhLe0dmhAu9ebG2MQVwVNomKm2fjJMUH5C107y2kj%2FLYtR4Ar2PX9ujPr%2B9YWOBPYeg%2FZ7bO7TcPFrwDkr4wm9divcVCfzNDIMmkhZjaDtPJWrlDNF5POiaimKgiOtiGIKwfQ%2B1f1wiviIKTxCogunInS8o8FA6ydwpuYEBU4xrC6rjQMRKnK%2FhtEPV5jaqBVXAhg1VatcZ8JO8pqpdqhUMOq7jr0GOqUBjfnSzh47zjGnnuoXf2jXho2nCeC6Ks11sTg3BZe9ICGKK4rUWDhG4UocgkB%2Bcow8dwRahKPt2IWfOwtgwXVAwbqnb%2FneVsV2zFmUcS309sy1NKHq0HC7aaoQhP%2FUQp3nZoHmXk3hUs9P%2BaFb87rhmfMrFMfwVCboa3cf2yHbQCmvaI984V0IHB19N3zvVdmiL8yBKuCYxDMbrxm0OvUjRke2OFRg&X-Amz-Signature=bb45888d1ec1ea105bcc09d9b3e5d86e165e672a20f48b2f0dc4835fbece4008&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L5M7GGG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIByc5RCED40nlbbBEyWzAqBNcFbYa%2F4c8ObYjCbTGAwoAiEAiFTxLP8NBFY%2FRBfmjmwFzmqLIgMFcCh2S9O03WDC%2FYQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOM09nggb%2Fpg1DDm7yrcA%2BJBjZkdnG8VsDzZrbOfPpLR5dHZbs%2B11ioRNbkp%2BFOEBoPcYchp9lSJbpdLQUuk8gsSlqVZPhJx%2FXSABF5ipC5gKNoYYpxYRbHvObcgHIsNMCtE%2FJ2rq%2FcYdefn4PNWM7h75m8wDvVbydzbcdQXgPPl%2FP%2BsEc%2FZucO5Wu1Ads4xtvTXOuBUJe9gw9635VwpRt13C07Qirf2BtXL7R3WavAOOzX4yjFBNK6lB%2BgsYeZaAdUrryhwsupncz2T%2Fr4NaYyqo0OxRS73ZGa1o%2FF5EKmUYTRd131WNQZlUM3ngzDqXSzdNPNJI2sdzcJRCMo3Dupsuagsd7xTGdx5SoS6nLDOUzhoiZa1XgDjqJ2fwv%2FMGN1GuXPTOW2VIM5tWbcZzmeqbXWX1weuIyPUYCFBhM2yNN80jnTphdIKL8FhLe0dmhAu9ebG2MQVwVNomKm2fjJMUH5C107y2kj%2FLYtR4Ar2PX9ujPr%2B9YWOBPYeg%2FZ7bO7TcPFrwDkr4wm9divcVCfzNDIMmkhZjaDtPJWrlDNF5POiaimKgiOtiGIKwfQ%2B1f1wiviIKTxCogunInS8o8FA6ydwpuYEBU4xrC6rjQMRKnK%2FhtEPV5jaqBVXAhg1VatcZ8JO8pqpdqhUMOq7jr0GOqUBjfnSzh47zjGnnuoXf2jXho2nCeC6Ks11sTg3BZe9ICGKK4rUWDhG4UocgkB%2Bcow8dwRahKPt2IWfOwtgwXVAwbqnb%2FneVsV2zFmUcS309sy1NKHq0HC7aaoQhP%2FUQp3nZoHmXk3hUs9P%2BaFb87rhmfMrFMfwVCboa3cf2yHbQCmvaI984V0IHB19N3zvVdmiL8yBKuCYxDMbrxm0OvUjRke2OFRg&X-Amz-Signature=e63322aae924622af59841a3bde85ab3d478d8c05d336710c3044841851d72d3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L5M7GGG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIByc5RCED40nlbbBEyWzAqBNcFbYa%2F4c8ObYjCbTGAwoAiEAiFTxLP8NBFY%2FRBfmjmwFzmqLIgMFcCh2S9O03WDC%2FYQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOM09nggb%2Fpg1DDm7yrcA%2BJBjZkdnG8VsDzZrbOfPpLR5dHZbs%2B11ioRNbkp%2BFOEBoPcYchp9lSJbpdLQUuk8gsSlqVZPhJx%2FXSABF5ipC5gKNoYYpxYRbHvObcgHIsNMCtE%2FJ2rq%2FcYdefn4PNWM7h75m8wDvVbydzbcdQXgPPl%2FP%2BsEc%2FZucO5Wu1Ads4xtvTXOuBUJe9gw9635VwpRt13C07Qirf2BtXL7R3WavAOOzX4yjFBNK6lB%2BgsYeZaAdUrryhwsupncz2T%2Fr4NaYyqo0OxRS73ZGa1o%2FF5EKmUYTRd131WNQZlUM3ngzDqXSzdNPNJI2sdzcJRCMo3Dupsuagsd7xTGdx5SoS6nLDOUzhoiZa1XgDjqJ2fwv%2FMGN1GuXPTOW2VIM5tWbcZzmeqbXWX1weuIyPUYCFBhM2yNN80jnTphdIKL8FhLe0dmhAu9ebG2MQVwVNomKm2fjJMUH5C107y2kj%2FLYtR4Ar2PX9ujPr%2B9YWOBPYeg%2FZ7bO7TcPFrwDkr4wm9divcVCfzNDIMmkhZjaDtPJWrlDNF5POiaimKgiOtiGIKwfQ%2B1f1wiviIKTxCogunInS8o8FA6ydwpuYEBU4xrC6rjQMRKnK%2FhtEPV5jaqBVXAhg1VatcZ8JO8pqpdqhUMOq7jr0GOqUBjfnSzh47zjGnnuoXf2jXho2nCeC6Ks11sTg3BZe9ICGKK4rUWDhG4UocgkB%2Bcow8dwRahKPt2IWfOwtgwXVAwbqnb%2FneVsV2zFmUcS309sy1NKHq0HC7aaoQhP%2FUQp3nZoHmXk3hUs9P%2BaFb87rhmfMrFMfwVCboa3cf2yHbQCmvaI984V0IHB19N3zvVdmiL8yBKuCYxDMbrxm0OvUjRke2OFRg&X-Amz-Signature=cc3987d419741323966bf64957089046bfa5ff03d8e9739d0822cc6d28b16ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
