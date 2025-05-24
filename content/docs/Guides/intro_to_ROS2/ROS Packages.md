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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GYWQJZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDSsDCQjxnW7ErV1TUcOHgY3E89EMHSeK%2Fwbhy9vpOENAiBs2CgsiGxlH5MPlHrK%2BwIaygjb5dfCNfxxA79VYwHvXSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQi5MGDRD55MKtJ6kKtwDvHfvyjHaHdZbdvGL0OSW3nPJLDRSj%2BmT%2FKBQh4M1qm7z0FxrAlf02WmmY207gH16d%2BvQk7oynPLIq2yoEiyjND5WJNLN1Wud3lxWuN5z5OO%2BMq%2BMtK23zBrg8LPwhjuPOu9Y%2BHuPxMeLUOgohYc4Yfm6WTd9rD1xT0DE%2FFuZvLBEXtC%2FFLNZFgJB0of2BbpntRrHaw5NEQut4A%2FDzm2y7xQ7ZUYmc3XDyUAWQvS4A2d85xkyLt7fjkOf8oQUF05Uhp4GyXl298mT4PvdOA1JQNx4Kc%2Fx%2BQes7Qwggnn0YrFKQJ97tgF3vgHBz%2FpqGIMTuTLbNCb6gy7DIGUZljfULsktFpvZNRScE3MI1puLnzt%2F1wKRmmDh8YOHO5aCGVnOXiyKDI8%2Fv2DTxniDViA2tu5BEJ%2FIxAkUxtxODzdlJzZX64Ps6NpOrdkHEGW82WGaIR%2B1GAqQALID8359ZJHJksdrWErst8OMSVkaV3FqmsfRFDVXhsJHwoRz3xJbW05MV%2B9YpS%2FVO9r%2FQIoIwFgfpNwr6rsmWdV3lmGDVktY2jhWCE7lbxCwSt5xCLXKyCLrAv30vybBN8mZG7yZFarLty%2B6trvgkPaCmNfieWN7hYVc19Kaq%2BHLsF5ATYow3JXIwQY6pgEPpcOiopewftegAS9W%2BO5EC%2FEaZsgW5jBnwH3R218tJ5jjT3BtEbdnwFrUANYKX0AMN9%2F8TuZYbeeoeujCo288kGAsmKJN0S3Qt1Rhlv9LA4WHTTV92GBuz4WsxyOBPPeT49kZdfAP3VPlvosdN3WCSoB0I0bXgbB%2FvaYrQMmy%2FmY6Piv14%2BhP1uMVnhPW7xSezBUfZifCqY1uELonU8QLQcdsHY%2BL&X-Amz-Signature=4e9f889770f4a8507dc5143ccc368d04ed38c5857f9af410b37dfe0de613d98c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GYWQJZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDSsDCQjxnW7ErV1TUcOHgY3E89EMHSeK%2Fwbhy9vpOENAiBs2CgsiGxlH5MPlHrK%2BwIaygjb5dfCNfxxA79VYwHvXSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQi5MGDRD55MKtJ6kKtwDvHfvyjHaHdZbdvGL0OSW3nPJLDRSj%2BmT%2FKBQh4M1qm7z0FxrAlf02WmmY207gH16d%2BvQk7oynPLIq2yoEiyjND5WJNLN1Wud3lxWuN5z5OO%2BMq%2BMtK23zBrg8LPwhjuPOu9Y%2BHuPxMeLUOgohYc4Yfm6WTd9rD1xT0DE%2FFuZvLBEXtC%2FFLNZFgJB0of2BbpntRrHaw5NEQut4A%2FDzm2y7xQ7ZUYmc3XDyUAWQvS4A2d85xkyLt7fjkOf8oQUF05Uhp4GyXl298mT4PvdOA1JQNx4Kc%2Fx%2BQes7Qwggnn0YrFKQJ97tgF3vgHBz%2FpqGIMTuTLbNCb6gy7DIGUZljfULsktFpvZNRScE3MI1puLnzt%2F1wKRmmDh8YOHO5aCGVnOXiyKDI8%2Fv2DTxniDViA2tu5BEJ%2FIxAkUxtxODzdlJzZX64Ps6NpOrdkHEGW82WGaIR%2B1GAqQALID8359ZJHJksdrWErst8OMSVkaV3FqmsfRFDVXhsJHwoRz3xJbW05MV%2B9YpS%2FVO9r%2FQIoIwFgfpNwr6rsmWdV3lmGDVktY2jhWCE7lbxCwSt5xCLXKyCLrAv30vybBN8mZG7yZFarLty%2B6trvgkPaCmNfieWN7hYVc19Kaq%2BHLsF5ATYow3JXIwQY6pgEPpcOiopewftegAS9W%2BO5EC%2FEaZsgW5jBnwH3R218tJ5jjT3BtEbdnwFrUANYKX0AMN9%2F8TuZYbeeoeujCo288kGAsmKJN0S3Qt1Rhlv9LA4WHTTV92GBuz4WsxyOBPPeT49kZdfAP3VPlvosdN3WCSoB0I0bXgbB%2FvaYrQMmy%2FmY6Piv14%2BhP1uMVnhPW7xSezBUfZifCqY1uELonU8QLQcdsHY%2BL&X-Amz-Signature=7a8468ba5c9356cb747437aaed2425504a2e27b1bcf081ccc6e8b233852b3bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GYWQJZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDSsDCQjxnW7ErV1TUcOHgY3E89EMHSeK%2Fwbhy9vpOENAiBs2CgsiGxlH5MPlHrK%2BwIaygjb5dfCNfxxA79VYwHvXSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQi5MGDRD55MKtJ6kKtwDvHfvyjHaHdZbdvGL0OSW3nPJLDRSj%2BmT%2FKBQh4M1qm7z0FxrAlf02WmmY207gH16d%2BvQk7oynPLIq2yoEiyjND5WJNLN1Wud3lxWuN5z5OO%2BMq%2BMtK23zBrg8LPwhjuPOu9Y%2BHuPxMeLUOgohYc4Yfm6WTd9rD1xT0DE%2FFuZvLBEXtC%2FFLNZFgJB0of2BbpntRrHaw5NEQut4A%2FDzm2y7xQ7ZUYmc3XDyUAWQvS4A2d85xkyLt7fjkOf8oQUF05Uhp4GyXl298mT4PvdOA1JQNx4Kc%2Fx%2BQes7Qwggnn0YrFKQJ97tgF3vgHBz%2FpqGIMTuTLbNCb6gy7DIGUZljfULsktFpvZNRScE3MI1puLnzt%2F1wKRmmDh8YOHO5aCGVnOXiyKDI8%2Fv2DTxniDViA2tu5BEJ%2FIxAkUxtxODzdlJzZX64Ps6NpOrdkHEGW82WGaIR%2B1GAqQALID8359ZJHJksdrWErst8OMSVkaV3FqmsfRFDVXhsJHwoRz3xJbW05MV%2B9YpS%2FVO9r%2FQIoIwFgfpNwr6rsmWdV3lmGDVktY2jhWCE7lbxCwSt5xCLXKyCLrAv30vybBN8mZG7yZFarLty%2B6trvgkPaCmNfieWN7hYVc19Kaq%2BHLsF5ATYow3JXIwQY6pgEPpcOiopewftegAS9W%2BO5EC%2FEaZsgW5jBnwH3R218tJ5jjT3BtEbdnwFrUANYKX0AMN9%2F8TuZYbeeoeujCo288kGAsmKJN0S3Qt1Rhlv9LA4WHTTV92GBuz4WsxyOBPPeT49kZdfAP3VPlvosdN3WCSoB0I0bXgbB%2FvaYrQMmy%2FmY6Piv14%2BhP1uMVnhPW7xSezBUfZifCqY1uELonU8QLQcdsHY%2BL&X-Amz-Signature=98033b649b8e65a7f2e500642c68781ce71b9a8ae4dac5c7e2e14709133bed52&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GYWQJZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDSsDCQjxnW7ErV1TUcOHgY3E89EMHSeK%2Fwbhy9vpOENAiBs2CgsiGxlH5MPlHrK%2BwIaygjb5dfCNfxxA79VYwHvXSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQi5MGDRD55MKtJ6kKtwDvHfvyjHaHdZbdvGL0OSW3nPJLDRSj%2BmT%2FKBQh4M1qm7z0FxrAlf02WmmY207gH16d%2BvQk7oynPLIq2yoEiyjND5WJNLN1Wud3lxWuN5z5OO%2BMq%2BMtK23zBrg8LPwhjuPOu9Y%2BHuPxMeLUOgohYc4Yfm6WTd9rD1xT0DE%2FFuZvLBEXtC%2FFLNZFgJB0of2BbpntRrHaw5NEQut4A%2FDzm2y7xQ7ZUYmc3XDyUAWQvS4A2d85xkyLt7fjkOf8oQUF05Uhp4GyXl298mT4PvdOA1JQNx4Kc%2Fx%2BQes7Qwggnn0YrFKQJ97tgF3vgHBz%2FpqGIMTuTLbNCb6gy7DIGUZljfULsktFpvZNRScE3MI1puLnzt%2F1wKRmmDh8YOHO5aCGVnOXiyKDI8%2Fv2DTxniDViA2tu5BEJ%2FIxAkUxtxODzdlJzZX64Ps6NpOrdkHEGW82WGaIR%2B1GAqQALID8359ZJHJksdrWErst8OMSVkaV3FqmsfRFDVXhsJHwoRz3xJbW05MV%2B9YpS%2FVO9r%2FQIoIwFgfpNwr6rsmWdV3lmGDVktY2jhWCE7lbxCwSt5xCLXKyCLrAv30vybBN8mZG7yZFarLty%2B6trvgkPaCmNfieWN7hYVc19Kaq%2BHLsF5ATYow3JXIwQY6pgEPpcOiopewftegAS9W%2BO5EC%2FEaZsgW5jBnwH3R218tJ5jjT3BtEbdnwFrUANYKX0AMN9%2F8TuZYbeeoeujCo288kGAsmKJN0S3Qt1Rhlv9LA4WHTTV92GBuz4WsxyOBPPeT49kZdfAP3VPlvosdN3WCSoB0I0bXgbB%2FvaYrQMmy%2FmY6Piv14%2BhP1uMVnhPW7xSezBUfZifCqY1uELonU8QLQcdsHY%2BL&X-Amz-Signature=3ce4f2cb3a1929259e937e391f070ba04ec33f3a929ae2e0b7809dab4c409685&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GYWQJZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDSsDCQjxnW7ErV1TUcOHgY3E89EMHSeK%2Fwbhy9vpOENAiBs2CgsiGxlH5MPlHrK%2BwIaygjb5dfCNfxxA79VYwHvXSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQi5MGDRD55MKtJ6kKtwDvHfvyjHaHdZbdvGL0OSW3nPJLDRSj%2BmT%2FKBQh4M1qm7z0FxrAlf02WmmY207gH16d%2BvQk7oynPLIq2yoEiyjND5WJNLN1Wud3lxWuN5z5OO%2BMq%2BMtK23zBrg8LPwhjuPOu9Y%2BHuPxMeLUOgohYc4Yfm6WTd9rD1xT0DE%2FFuZvLBEXtC%2FFLNZFgJB0of2BbpntRrHaw5NEQut4A%2FDzm2y7xQ7ZUYmc3XDyUAWQvS4A2d85xkyLt7fjkOf8oQUF05Uhp4GyXl298mT4PvdOA1JQNx4Kc%2Fx%2BQes7Qwggnn0YrFKQJ97tgF3vgHBz%2FpqGIMTuTLbNCb6gy7DIGUZljfULsktFpvZNRScE3MI1puLnzt%2F1wKRmmDh8YOHO5aCGVnOXiyKDI8%2Fv2DTxniDViA2tu5BEJ%2FIxAkUxtxODzdlJzZX64Ps6NpOrdkHEGW82WGaIR%2B1GAqQALID8359ZJHJksdrWErst8OMSVkaV3FqmsfRFDVXhsJHwoRz3xJbW05MV%2B9YpS%2FVO9r%2FQIoIwFgfpNwr6rsmWdV3lmGDVktY2jhWCE7lbxCwSt5xCLXKyCLrAv30vybBN8mZG7yZFarLty%2B6trvgkPaCmNfieWN7hYVc19Kaq%2BHLsF5ATYow3JXIwQY6pgEPpcOiopewftegAS9W%2BO5EC%2FEaZsgW5jBnwH3R218tJ5jjT3BtEbdnwFrUANYKX0AMN9%2F8TuZYbeeoeujCo288kGAsmKJN0S3Qt1Rhlv9LA4WHTTV92GBuz4WsxyOBPPeT49kZdfAP3VPlvosdN3WCSoB0I0bXgbB%2FvaYrQMmy%2FmY6Piv14%2BhP1uMVnhPW7xSezBUfZifCqY1uELonU8QLQcdsHY%2BL&X-Amz-Signature=6583c0ffe86bfa5bb595809412097c677bf45945ead41e126a0c8129db9c798d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GYWQJZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDSsDCQjxnW7ErV1TUcOHgY3E89EMHSeK%2Fwbhy9vpOENAiBs2CgsiGxlH5MPlHrK%2BwIaygjb5dfCNfxxA79VYwHvXSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQi5MGDRD55MKtJ6kKtwDvHfvyjHaHdZbdvGL0OSW3nPJLDRSj%2BmT%2FKBQh4M1qm7z0FxrAlf02WmmY207gH16d%2BvQk7oynPLIq2yoEiyjND5WJNLN1Wud3lxWuN5z5OO%2BMq%2BMtK23zBrg8LPwhjuPOu9Y%2BHuPxMeLUOgohYc4Yfm6WTd9rD1xT0DE%2FFuZvLBEXtC%2FFLNZFgJB0of2BbpntRrHaw5NEQut4A%2FDzm2y7xQ7ZUYmc3XDyUAWQvS4A2d85xkyLt7fjkOf8oQUF05Uhp4GyXl298mT4PvdOA1JQNx4Kc%2Fx%2BQes7Qwggnn0YrFKQJ97tgF3vgHBz%2FpqGIMTuTLbNCb6gy7DIGUZljfULsktFpvZNRScE3MI1puLnzt%2F1wKRmmDh8YOHO5aCGVnOXiyKDI8%2Fv2DTxniDViA2tu5BEJ%2FIxAkUxtxODzdlJzZX64Ps6NpOrdkHEGW82WGaIR%2B1GAqQALID8359ZJHJksdrWErst8OMSVkaV3FqmsfRFDVXhsJHwoRz3xJbW05MV%2B9YpS%2FVO9r%2FQIoIwFgfpNwr6rsmWdV3lmGDVktY2jhWCE7lbxCwSt5xCLXKyCLrAv30vybBN8mZG7yZFarLty%2B6trvgkPaCmNfieWN7hYVc19Kaq%2BHLsF5ATYow3JXIwQY6pgEPpcOiopewftegAS9W%2BO5EC%2FEaZsgW5jBnwH3R218tJ5jjT3BtEbdnwFrUANYKX0AMN9%2F8TuZYbeeoeujCo288kGAsmKJN0S3Qt1Rhlv9LA4WHTTV92GBuz4WsxyOBPPeT49kZdfAP3VPlvosdN3WCSoB0I0bXgbB%2FvaYrQMmy%2FmY6Piv14%2BhP1uMVnhPW7xSezBUfZifCqY1uELonU8QLQcdsHY%2BL&X-Amz-Signature=7fa9326b7e3c65ed37ca3a99ca313d3549a882ba68e4c8a61dd1754d004d9414&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GYWQJZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDSsDCQjxnW7ErV1TUcOHgY3E89EMHSeK%2Fwbhy9vpOENAiBs2CgsiGxlH5MPlHrK%2BwIaygjb5dfCNfxxA79VYwHvXSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMQi5MGDRD55MKtJ6kKtwDvHfvyjHaHdZbdvGL0OSW3nPJLDRSj%2BmT%2FKBQh4M1qm7z0FxrAlf02WmmY207gH16d%2BvQk7oynPLIq2yoEiyjND5WJNLN1Wud3lxWuN5z5OO%2BMq%2BMtK23zBrg8LPwhjuPOu9Y%2BHuPxMeLUOgohYc4Yfm6WTd9rD1xT0DE%2FFuZvLBEXtC%2FFLNZFgJB0of2BbpntRrHaw5NEQut4A%2FDzm2y7xQ7ZUYmc3XDyUAWQvS4A2d85xkyLt7fjkOf8oQUF05Uhp4GyXl298mT4PvdOA1JQNx4Kc%2Fx%2BQes7Qwggnn0YrFKQJ97tgF3vgHBz%2FpqGIMTuTLbNCb6gy7DIGUZljfULsktFpvZNRScE3MI1puLnzt%2F1wKRmmDh8YOHO5aCGVnOXiyKDI8%2Fv2DTxniDViA2tu5BEJ%2FIxAkUxtxODzdlJzZX64Ps6NpOrdkHEGW82WGaIR%2B1GAqQALID8359ZJHJksdrWErst8OMSVkaV3FqmsfRFDVXhsJHwoRz3xJbW05MV%2B9YpS%2FVO9r%2FQIoIwFgfpNwr6rsmWdV3lmGDVktY2jhWCE7lbxCwSt5xCLXKyCLrAv30vybBN8mZG7yZFarLty%2B6trvgkPaCmNfieWN7hYVc19Kaq%2BHLsF5ATYow3JXIwQY6pgEPpcOiopewftegAS9W%2BO5EC%2FEaZsgW5jBnwH3R218tJ5jjT3BtEbdnwFrUANYKX0AMN9%2F8TuZYbeeoeujCo288kGAsmKJN0S3Qt1Rhlv9LA4WHTTV92GBuz4WsxyOBPPeT49kZdfAP3VPlvosdN3WCSoB0I0bXgbB%2FvaYrQMmy%2FmY6Piv14%2BhP1uMVnhPW7xSezBUfZifCqY1uELonU8QLQcdsHY%2BL&X-Amz-Signature=9eac725fe172d4f9cd3869682cd254d97ee5326d2cdd20ad9cceaed89cf43cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
