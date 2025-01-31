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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMH3ALA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0jW%2BlQh9IhjtPO7jlwTqkXW6t9mr3aHJAhQkkoS5CAAiBdh7XjtCA3GUbllzHz4qa5UX7d2GGYzsNapreqzG3gtSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHyQj7JO55exvo%2FaKtwDO47UEJJ7aywP4rRahWbrY8EGWDyx9lftXSu2CErquCP21x5n2JmwjaLBx0C9Q%2FjorQZohKe1FBAy0v8sv3Or%2Bt6MN2AOn9IoUphy6S3z%2Ft4Cmn5jswCw0r7uIqo4%2BVgbjqW2lq%2BAuqTjRpVGKsPp840oxCMSUEveJGBbIlVZ0eCfskAg2kr8h2z4idHWyv3SIIypzN5VwbaHdRKLOuCa7%2FIsffAeUjUXGnFKiYBB1F2qeIH7NMtNpHL4sFXIKEWuQ0PY8YkPM00P8KiQB6S6DCMjr79y8Syca7tbK92QL0uyKGQ99kuwBs1tFiEPwFDghdrqKpdmFqAbzsxn%2FIOp69b3x%2BOODdjzhsRzScVbUGsyOrwLFvMofvDx7Sa31Ye8p0GmHcmf5BI8Hp26HFylU8h2F%2BMsy%2FNdVV1DRmj5BMiFfjhy1MCpvzY8gp%2Frk3HQ8s6TG5sEkyNkg2QGa3lIoT71x3P6XBqnlL2u95IYjQI2YnKNsG%2BY6coFYmuioyaLAO1u2cdFPClF%2FE4exDgLLl4cFRCO%2BM98XKJ3B95UlHYsFp9phYUh7HB6RONODSLY5pJShWBaCG3J8Uuw0z8bb5IyLJLoY1O5IstNk6dpPWFL3FCAXL8VSHKj6Ekwop3yvAY6pgHskwgH4WDXYOuKBXmcfdJOPX9FaNvrPPn1P4B0AHH%2FrArchd%2F0VESvWx%2B97SOthVI9UuknUutc4dVIHr%2BrKhnRgpV8b95az7r2oQcDEZG8aWIiBlr252CFwxFTAoiNyNQWzIB0Ll5EgqviBSzYauQNCVcwsxz4cf9aAzX0ttoIGRVa1bVu3WXzWlnNYi6FzkIkjmWF1aTLLZXVbit6sAsOAphCphJL&X-Amz-Signature=311321994f0dfcc601e7596f138d2fa281633e9f28166484adfd9f030c9dd0ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMH3ALA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0jW%2BlQh9IhjtPO7jlwTqkXW6t9mr3aHJAhQkkoS5CAAiBdh7XjtCA3GUbllzHz4qa5UX7d2GGYzsNapreqzG3gtSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHyQj7JO55exvo%2FaKtwDO47UEJJ7aywP4rRahWbrY8EGWDyx9lftXSu2CErquCP21x5n2JmwjaLBx0C9Q%2FjorQZohKe1FBAy0v8sv3Or%2Bt6MN2AOn9IoUphy6S3z%2Ft4Cmn5jswCw0r7uIqo4%2BVgbjqW2lq%2BAuqTjRpVGKsPp840oxCMSUEveJGBbIlVZ0eCfskAg2kr8h2z4idHWyv3SIIypzN5VwbaHdRKLOuCa7%2FIsffAeUjUXGnFKiYBB1F2qeIH7NMtNpHL4sFXIKEWuQ0PY8YkPM00P8KiQB6S6DCMjr79y8Syca7tbK92QL0uyKGQ99kuwBs1tFiEPwFDghdrqKpdmFqAbzsxn%2FIOp69b3x%2BOODdjzhsRzScVbUGsyOrwLFvMofvDx7Sa31Ye8p0GmHcmf5BI8Hp26HFylU8h2F%2BMsy%2FNdVV1DRmj5BMiFfjhy1MCpvzY8gp%2Frk3HQ8s6TG5sEkyNkg2QGa3lIoT71x3P6XBqnlL2u95IYjQI2YnKNsG%2BY6coFYmuioyaLAO1u2cdFPClF%2FE4exDgLLl4cFRCO%2BM98XKJ3B95UlHYsFp9phYUh7HB6RONODSLY5pJShWBaCG3J8Uuw0z8bb5IyLJLoY1O5IstNk6dpPWFL3FCAXL8VSHKj6Ekwop3yvAY6pgHskwgH4WDXYOuKBXmcfdJOPX9FaNvrPPn1P4B0AHH%2FrArchd%2F0VESvWx%2B97SOthVI9UuknUutc4dVIHr%2BrKhnRgpV8b95az7r2oQcDEZG8aWIiBlr252CFwxFTAoiNyNQWzIB0Ll5EgqviBSzYauQNCVcwsxz4cf9aAzX0ttoIGRVa1bVu3WXzWlnNYi6FzkIkjmWF1aTLLZXVbit6sAsOAphCphJL&X-Amz-Signature=693db580346789f3334c759c3fa56d803c266f41777d63596e504d504f31741d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMH3ALA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0jW%2BlQh9IhjtPO7jlwTqkXW6t9mr3aHJAhQkkoS5CAAiBdh7XjtCA3GUbllzHz4qa5UX7d2GGYzsNapreqzG3gtSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHyQj7JO55exvo%2FaKtwDO47UEJJ7aywP4rRahWbrY8EGWDyx9lftXSu2CErquCP21x5n2JmwjaLBx0C9Q%2FjorQZohKe1FBAy0v8sv3Or%2Bt6MN2AOn9IoUphy6S3z%2Ft4Cmn5jswCw0r7uIqo4%2BVgbjqW2lq%2BAuqTjRpVGKsPp840oxCMSUEveJGBbIlVZ0eCfskAg2kr8h2z4idHWyv3SIIypzN5VwbaHdRKLOuCa7%2FIsffAeUjUXGnFKiYBB1F2qeIH7NMtNpHL4sFXIKEWuQ0PY8YkPM00P8KiQB6S6DCMjr79y8Syca7tbK92QL0uyKGQ99kuwBs1tFiEPwFDghdrqKpdmFqAbzsxn%2FIOp69b3x%2BOODdjzhsRzScVbUGsyOrwLFvMofvDx7Sa31Ye8p0GmHcmf5BI8Hp26HFylU8h2F%2BMsy%2FNdVV1DRmj5BMiFfjhy1MCpvzY8gp%2Frk3HQ8s6TG5sEkyNkg2QGa3lIoT71x3P6XBqnlL2u95IYjQI2YnKNsG%2BY6coFYmuioyaLAO1u2cdFPClF%2FE4exDgLLl4cFRCO%2BM98XKJ3B95UlHYsFp9phYUh7HB6RONODSLY5pJShWBaCG3J8Uuw0z8bb5IyLJLoY1O5IstNk6dpPWFL3FCAXL8VSHKj6Ekwop3yvAY6pgHskwgH4WDXYOuKBXmcfdJOPX9FaNvrPPn1P4B0AHH%2FrArchd%2F0VESvWx%2B97SOthVI9UuknUutc4dVIHr%2BrKhnRgpV8b95az7r2oQcDEZG8aWIiBlr252CFwxFTAoiNyNQWzIB0Ll5EgqviBSzYauQNCVcwsxz4cf9aAzX0ttoIGRVa1bVu3WXzWlnNYi6FzkIkjmWF1aTLLZXVbit6sAsOAphCphJL&X-Amz-Signature=3049d59a899408d13d10c431fa1e38948e967f33688ff5bad274fb29cf98cd19&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMH3ALA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0jW%2BlQh9IhjtPO7jlwTqkXW6t9mr3aHJAhQkkoS5CAAiBdh7XjtCA3GUbllzHz4qa5UX7d2GGYzsNapreqzG3gtSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHyQj7JO55exvo%2FaKtwDO47UEJJ7aywP4rRahWbrY8EGWDyx9lftXSu2CErquCP21x5n2JmwjaLBx0C9Q%2FjorQZohKe1FBAy0v8sv3Or%2Bt6MN2AOn9IoUphy6S3z%2Ft4Cmn5jswCw0r7uIqo4%2BVgbjqW2lq%2BAuqTjRpVGKsPp840oxCMSUEveJGBbIlVZ0eCfskAg2kr8h2z4idHWyv3SIIypzN5VwbaHdRKLOuCa7%2FIsffAeUjUXGnFKiYBB1F2qeIH7NMtNpHL4sFXIKEWuQ0PY8YkPM00P8KiQB6S6DCMjr79y8Syca7tbK92QL0uyKGQ99kuwBs1tFiEPwFDghdrqKpdmFqAbzsxn%2FIOp69b3x%2BOODdjzhsRzScVbUGsyOrwLFvMofvDx7Sa31Ye8p0GmHcmf5BI8Hp26HFylU8h2F%2BMsy%2FNdVV1DRmj5BMiFfjhy1MCpvzY8gp%2Frk3HQ8s6TG5sEkyNkg2QGa3lIoT71x3P6XBqnlL2u95IYjQI2YnKNsG%2BY6coFYmuioyaLAO1u2cdFPClF%2FE4exDgLLl4cFRCO%2BM98XKJ3B95UlHYsFp9phYUh7HB6RONODSLY5pJShWBaCG3J8Uuw0z8bb5IyLJLoY1O5IstNk6dpPWFL3FCAXL8VSHKj6Ekwop3yvAY6pgHskwgH4WDXYOuKBXmcfdJOPX9FaNvrPPn1P4B0AHH%2FrArchd%2F0VESvWx%2B97SOthVI9UuknUutc4dVIHr%2BrKhnRgpV8b95az7r2oQcDEZG8aWIiBlr252CFwxFTAoiNyNQWzIB0Ll5EgqviBSzYauQNCVcwsxz4cf9aAzX0ttoIGRVa1bVu3WXzWlnNYi6FzkIkjmWF1aTLLZXVbit6sAsOAphCphJL&X-Amz-Signature=bcef30f063960b4890683ca2ca19d4d11cdd585aeb7734e1f655d394c12ecbd1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMH3ALA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0jW%2BlQh9IhjtPO7jlwTqkXW6t9mr3aHJAhQkkoS5CAAiBdh7XjtCA3GUbllzHz4qa5UX7d2GGYzsNapreqzG3gtSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHyQj7JO55exvo%2FaKtwDO47UEJJ7aywP4rRahWbrY8EGWDyx9lftXSu2CErquCP21x5n2JmwjaLBx0C9Q%2FjorQZohKe1FBAy0v8sv3Or%2Bt6MN2AOn9IoUphy6S3z%2Ft4Cmn5jswCw0r7uIqo4%2BVgbjqW2lq%2BAuqTjRpVGKsPp840oxCMSUEveJGBbIlVZ0eCfskAg2kr8h2z4idHWyv3SIIypzN5VwbaHdRKLOuCa7%2FIsffAeUjUXGnFKiYBB1F2qeIH7NMtNpHL4sFXIKEWuQ0PY8YkPM00P8KiQB6S6DCMjr79y8Syca7tbK92QL0uyKGQ99kuwBs1tFiEPwFDghdrqKpdmFqAbzsxn%2FIOp69b3x%2BOODdjzhsRzScVbUGsyOrwLFvMofvDx7Sa31Ye8p0GmHcmf5BI8Hp26HFylU8h2F%2BMsy%2FNdVV1DRmj5BMiFfjhy1MCpvzY8gp%2Frk3HQ8s6TG5sEkyNkg2QGa3lIoT71x3P6XBqnlL2u95IYjQI2YnKNsG%2BY6coFYmuioyaLAO1u2cdFPClF%2FE4exDgLLl4cFRCO%2BM98XKJ3B95UlHYsFp9phYUh7HB6RONODSLY5pJShWBaCG3J8Uuw0z8bb5IyLJLoY1O5IstNk6dpPWFL3FCAXL8VSHKj6Ekwop3yvAY6pgHskwgH4WDXYOuKBXmcfdJOPX9FaNvrPPn1P4B0AHH%2FrArchd%2F0VESvWx%2B97SOthVI9UuknUutc4dVIHr%2BrKhnRgpV8b95az7r2oQcDEZG8aWIiBlr252CFwxFTAoiNyNQWzIB0Ll5EgqviBSzYauQNCVcwsxz4cf9aAzX0ttoIGRVa1bVu3WXzWlnNYi6FzkIkjmWF1aTLLZXVbit6sAsOAphCphJL&X-Amz-Signature=01ccfdb5477d4c82cada23b5fc6b3630db2b9db1c0eada3d96210c3264f4962e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMH3ALA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0jW%2BlQh9IhjtPO7jlwTqkXW6t9mr3aHJAhQkkoS5CAAiBdh7XjtCA3GUbllzHz4qa5UX7d2GGYzsNapreqzG3gtSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHyQj7JO55exvo%2FaKtwDO47UEJJ7aywP4rRahWbrY8EGWDyx9lftXSu2CErquCP21x5n2JmwjaLBx0C9Q%2FjorQZohKe1FBAy0v8sv3Or%2Bt6MN2AOn9IoUphy6S3z%2Ft4Cmn5jswCw0r7uIqo4%2BVgbjqW2lq%2BAuqTjRpVGKsPp840oxCMSUEveJGBbIlVZ0eCfskAg2kr8h2z4idHWyv3SIIypzN5VwbaHdRKLOuCa7%2FIsffAeUjUXGnFKiYBB1F2qeIH7NMtNpHL4sFXIKEWuQ0PY8YkPM00P8KiQB6S6DCMjr79y8Syca7tbK92QL0uyKGQ99kuwBs1tFiEPwFDghdrqKpdmFqAbzsxn%2FIOp69b3x%2BOODdjzhsRzScVbUGsyOrwLFvMofvDx7Sa31Ye8p0GmHcmf5BI8Hp26HFylU8h2F%2BMsy%2FNdVV1DRmj5BMiFfjhy1MCpvzY8gp%2Frk3HQ8s6TG5sEkyNkg2QGa3lIoT71x3P6XBqnlL2u95IYjQI2YnKNsG%2BY6coFYmuioyaLAO1u2cdFPClF%2FE4exDgLLl4cFRCO%2BM98XKJ3B95UlHYsFp9phYUh7HB6RONODSLY5pJShWBaCG3J8Uuw0z8bb5IyLJLoY1O5IstNk6dpPWFL3FCAXL8VSHKj6Ekwop3yvAY6pgHskwgH4WDXYOuKBXmcfdJOPX9FaNvrPPn1P4B0AHH%2FrArchd%2F0VESvWx%2B97SOthVI9UuknUutc4dVIHr%2BrKhnRgpV8b95az7r2oQcDEZG8aWIiBlr252CFwxFTAoiNyNQWzIB0Ll5EgqviBSzYauQNCVcwsxz4cf9aAzX0ttoIGRVa1bVu3WXzWlnNYi6FzkIkjmWF1aTLLZXVbit6sAsOAphCphJL&X-Amz-Signature=ea24426383aa8467e8be515cf817c89ab3f77583246246820a7891de2c651ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMH3ALA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0jW%2BlQh9IhjtPO7jlwTqkXW6t9mr3aHJAhQkkoS5CAAiBdh7XjtCA3GUbllzHz4qa5UX7d2GGYzsNapreqzG3gtSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHyQj7JO55exvo%2FaKtwDO47UEJJ7aywP4rRahWbrY8EGWDyx9lftXSu2CErquCP21x5n2JmwjaLBx0C9Q%2FjorQZohKe1FBAy0v8sv3Or%2Bt6MN2AOn9IoUphy6S3z%2Ft4Cmn5jswCw0r7uIqo4%2BVgbjqW2lq%2BAuqTjRpVGKsPp840oxCMSUEveJGBbIlVZ0eCfskAg2kr8h2z4idHWyv3SIIypzN5VwbaHdRKLOuCa7%2FIsffAeUjUXGnFKiYBB1F2qeIH7NMtNpHL4sFXIKEWuQ0PY8YkPM00P8KiQB6S6DCMjr79y8Syca7tbK92QL0uyKGQ99kuwBs1tFiEPwFDghdrqKpdmFqAbzsxn%2FIOp69b3x%2BOODdjzhsRzScVbUGsyOrwLFvMofvDx7Sa31Ye8p0GmHcmf5BI8Hp26HFylU8h2F%2BMsy%2FNdVV1DRmj5BMiFfjhy1MCpvzY8gp%2Frk3HQ8s6TG5sEkyNkg2QGa3lIoT71x3P6XBqnlL2u95IYjQI2YnKNsG%2BY6coFYmuioyaLAO1u2cdFPClF%2FE4exDgLLl4cFRCO%2BM98XKJ3B95UlHYsFp9phYUh7HB6RONODSLY5pJShWBaCG3J8Uuw0z8bb5IyLJLoY1O5IstNk6dpPWFL3FCAXL8VSHKj6Ekwop3yvAY6pgHskwgH4WDXYOuKBXmcfdJOPX9FaNvrPPn1P4B0AHH%2FrArchd%2F0VESvWx%2B97SOthVI9UuknUutc4dVIHr%2BrKhnRgpV8b95az7r2oQcDEZG8aWIiBlr252CFwxFTAoiNyNQWzIB0Ll5EgqviBSzYauQNCVcwsxz4cf9aAzX0ttoIGRVa1bVu3WXzWlnNYi6FzkIkjmWF1aTLLZXVbit6sAsOAphCphJL&X-Amz-Signature=23106ad519d02f24764fb7993b06f52aacf3e0edd1708beac16a2fb5c21ee7f4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
