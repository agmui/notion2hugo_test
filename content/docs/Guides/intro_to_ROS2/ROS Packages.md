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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEGTLJK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHH8IDt9YQEUuVD9DCDy3439CaOFRp2Wi29QxU6%2Fq3sAiEAt3llXcXMg06uAjDDqcBNPuInRklhmaUPCcxKpkqHHsoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkSJ53v5Udy3%2F8G4CrcA7AuE75yVhHHUH%2BP%2Bf%2F%2BEqfoFXVzxp7wDEWA8U%2F%2FXkA1FtYeunBVCw7VEQKS9NvWDiHElMIq5O%2FxkTAs%2FotTLqrDyLwKmM4TZWrkfQ38QOcY0Oz1B2VbBMDPaCbdhSgukoMCe7mqOSglnt2zYOE6TYk2ZFexSYTNu3CD%2BO7JCkQHQKF2UduWDfZwvF%2BPD9wXc43FCVGkMxMGXIwH7SrJM%2FIWOq9cdWNO1%2BV0hI8VYK%2FdDGxFssUc8MDsQ4k6EcWG7V1N15B5uV8AaiQonibGIASAMQFBGorTfe3MGfsSXlijGfKUPzDp2JVsK2qfoVTDGDUYwAnNCsayrCXAi0UUtHB3N47ulbWMzwTT%2Fj6o1VaPpUjYRtFWhc18t1JCgjj7fEwgKjbsueMyjUvSE9zqL4DjTPEm8JPglWODdVn8HbenJTrcPSel4oIvjOIkcY1bhCFQ5JrkPF5oBj1HTA%2F5tN9iyDDeJeT99n3wpSzsHH15Mq%2F8GIP920OKEGksCaLCmWSWCy23f%2FsCLxipxCQMfDBMTKTnoXXUx7mystgPf5v1RLILu5naP%2B1fhG%2FMcmJEYfS7iamAxQbMJWgi3xJHfbHbtEaN7dbIKrLMs9AP0V%2Fy53AvvcUCMI76xjXyMIiosr0GOqUBA%2F1yuO5NFTjqXph1oJhXPkslc47W1qkADP77rDmbNS3yh4oI783hTDMEDeqj62Y8sVUKN1zHlIT0hmuunJFwAp%2FIjlnsUG01jeraXkd%2FqCoiYpkjlvcUimAAgP6TlcXOx%2BCJv0uUX%2BCWcMZgvKwAm9VopL%2BmIpLAJmhqOxV8FlTzwv9Ip3eHZic0sgACdIQr63f1rQcrfjCSAmW58Dw8rjrWE3m%2B&X-Amz-Signature=29cfac454700bd0ce440429ebf15396cf1eb011e5a803f99de5105f259f95cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEGTLJK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHH8IDt9YQEUuVD9DCDy3439CaOFRp2Wi29QxU6%2Fq3sAiEAt3llXcXMg06uAjDDqcBNPuInRklhmaUPCcxKpkqHHsoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkSJ53v5Udy3%2F8G4CrcA7AuE75yVhHHUH%2BP%2Bf%2F%2BEqfoFXVzxp7wDEWA8U%2F%2FXkA1FtYeunBVCw7VEQKS9NvWDiHElMIq5O%2FxkTAs%2FotTLqrDyLwKmM4TZWrkfQ38QOcY0Oz1B2VbBMDPaCbdhSgukoMCe7mqOSglnt2zYOE6TYk2ZFexSYTNu3CD%2BO7JCkQHQKF2UduWDfZwvF%2BPD9wXc43FCVGkMxMGXIwH7SrJM%2FIWOq9cdWNO1%2BV0hI8VYK%2FdDGxFssUc8MDsQ4k6EcWG7V1N15B5uV8AaiQonibGIASAMQFBGorTfe3MGfsSXlijGfKUPzDp2JVsK2qfoVTDGDUYwAnNCsayrCXAi0UUtHB3N47ulbWMzwTT%2Fj6o1VaPpUjYRtFWhc18t1JCgjj7fEwgKjbsueMyjUvSE9zqL4DjTPEm8JPglWODdVn8HbenJTrcPSel4oIvjOIkcY1bhCFQ5JrkPF5oBj1HTA%2F5tN9iyDDeJeT99n3wpSzsHH15Mq%2F8GIP920OKEGksCaLCmWSWCy23f%2FsCLxipxCQMfDBMTKTnoXXUx7mystgPf5v1RLILu5naP%2B1fhG%2FMcmJEYfS7iamAxQbMJWgi3xJHfbHbtEaN7dbIKrLMs9AP0V%2Fy53AvvcUCMI76xjXyMIiosr0GOqUBA%2F1yuO5NFTjqXph1oJhXPkslc47W1qkADP77rDmbNS3yh4oI783hTDMEDeqj62Y8sVUKN1zHlIT0hmuunJFwAp%2FIjlnsUG01jeraXkd%2FqCoiYpkjlvcUimAAgP6TlcXOx%2BCJv0uUX%2BCWcMZgvKwAm9VopL%2BmIpLAJmhqOxV8FlTzwv9Ip3eHZic0sgACdIQr63f1rQcrfjCSAmW58Dw8rjrWE3m%2B&X-Amz-Signature=6c332e6438269f1b908e821e19876c24a2192cf6165c724b11934d04e73a4996&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEGTLJK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHH8IDt9YQEUuVD9DCDy3439CaOFRp2Wi29QxU6%2Fq3sAiEAt3llXcXMg06uAjDDqcBNPuInRklhmaUPCcxKpkqHHsoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkSJ53v5Udy3%2F8G4CrcA7AuE75yVhHHUH%2BP%2Bf%2F%2BEqfoFXVzxp7wDEWA8U%2F%2FXkA1FtYeunBVCw7VEQKS9NvWDiHElMIq5O%2FxkTAs%2FotTLqrDyLwKmM4TZWrkfQ38QOcY0Oz1B2VbBMDPaCbdhSgukoMCe7mqOSglnt2zYOE6TYk2ZFexSYTNu3CD%2BO7JCkQHQKF2UduWDfZwvF%2BPD9wXc43FCVGkMxMGXIwH7SrJM%2FIWOq9cdWNO1%2BV0hI8VYK%2FdDGxFssUc8MDsQ4k6EcWG7V1N15B5uV8AaiQonibGIASAMQFBGorTfe3MGfsSXlijGfKUPzDp2JVsK2qfoVTDGDUYwAnNCsayrCXAi0UUtHB3N47ulbWMzwTT%2Fj6o1VaPpUjYRtFWhc18t1JCgjj7fEwgKjbsueMyjUvSE9zqL4DjTPEm8JPglWODdVn8HbenJTrcPSel4oIvjOIkcY1bhCFQ5JrkPF5oBj1HTA%2F5tN9iyDDeJeT99n3wpSzsHH15Mq%2F8GIP920OKEGksCaLCmWSWCy23f%2FsCLxipxCQMfDBMTKTnoXXUx7mystgPf5v1RLILu5naP%2B1fhG%2FMcmJEYfS7iamAxQbMJWgi3xJHfbHbtEaN7dbIKrLMs9AP0V%2Fy53AvvcUCMI76xjXyMIiosr0GOqUBA%2F1yuO5NFTjqXph1oJhXPkslc47W1qkADP77rDmbNS3yh4oI783hTDMEDeqj62Y8sVUKN1zHlIT0hmuunJFwAp%2FIjlnsUG01jeraXkd%2FqCoiYpkjlvcUimAAgP6TlcXOx%2BCJv0uUX%2BCWcMZgvKwAm9VopL%2BmIpLAJmhqOxV8FlTzwv9Ip3eHZic0sgACdIQr63f1rQcrfjCSAmW58Dw8rjrWE3m%2B&X-Amz-Signature=8b7e6f835d9f9ee8eb6baf3934bd8829adb6f16c1907e57774856bd620b77a02&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEGTLJK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHH8IDt9YQEUuVD9DCDy3439CaOFRp2Wi29QxU6%2Fq3sAiEAt3llXcXMg06uAjDDqcBNPuInRklhmaUPCcxKpkqHHsoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkSJ53v5Udy3%2F8G4CrcA7AuE75yVhHHUH%2BP%2Bf%2F%2BEqfoFXVzxp7wDEWA8U%2F%2FXkA1FtYeunBVCw7VEQKS9NvWDiHElMIq5O%2FxkTAs%2FotTLqrDyLwKmM4TZWrkfQ38QOcY0Oz1B2VbBMDPaCbdhSgukoMCe7mqOSglnt2zYOE6TYk2ZFexSYTNu3CD%2BO7JCkQHQKF2UduWDfZwvF%2BPD9wXc43FCVGkMxMGXIwH7SrJM%2FIWOq9cdWNO1%2BV0hI8VYK%2FdDGxFssUc8MDsQ4k6EcWG7V1N15B5uV8AaiQonibGIASAMQFBGorTfe3MGfsSXlijGfKUPzDp2JVsK2qfoVTDGDUYwAnNCsayrCXAi0UUtHB3N47ulbWMzwTT%2Fj6o1VaPpUjYRtFWhc18t1JCgjj7fEwgKjbsueMyjUvSE9zqL4DjTPEm8JPglWODdVn8HbenJTrcPSel4oIvjOIkcY1bhCFQ5JrkPF5oBj1HTA%2F5tN9iyDDeJeT99n3wpSzsHH15Mq%2F8GIP920OKEGksCaLCmWSWCy23f%2FsCLxipxCQMfDBMTKTnoXXUx7mystgPf5v1RLILu5naP%2B1fhG%2FMcmJEYfS7iamAxQbMJWgi3xJHfbHbtEaN7dbIKrLMs9AP0V%2Fy53AvvcUCMI76xjXyMIiosr0GOqUBA%2F1yuO5NFTjqXph1oJhXPkslc47W1qkADP77rDmbNS3yh4oI783hTDMEDeqj62Y8sVUKN1zHlIT0hmuunJFwAp%2FIjlnsUG01jeraXkd%2FqCoiYpkjlvcUimAAgP6TlcXOx%2BCJv0uUX%2BCWcMZgvKwAm9VopL%2BmIpLAJmhqOxV8FlTzwv9Ip3eHZic0sgACdIQr63f1rQcrfjCSAmW58Dw8rjrWE3m%2B&X-Amz-Signature=562fbdc1d22b332493ec2bfcdf81031bab229d19c8e6c6573a3100625e96b33c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEGTLJK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHH8IDt9YQEUuVD9DCDy3439CaOFRp2Wi29QxU6%2Fq3sAiEAt3llXcXMg06uAjDDqcBNPuInRklhmaUPCcxKpkqHHsoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkSJ53v5Udy3%2F8G4CrcA7AuE75yVhHHUH%2BP%2Bf%2F%2BEqfoFXVzxp7wDEWA8U%2F%2FXkA1FtYeunBVCw7VEQKS9NvWDiHElMIq5O%2FxkTAs%2FotTLqrDyLwKmM4TZWrkfQ38QOcY0Oz1B2VbBMDPaCbdhSgukoMCe7mqOSglnt2zYOE6TYk2ZFexSYTNu3CD%2BO7JCkQHQKF2UduWDfZwvF%2BPD9wXc43FCVGkMxMGXIwH7SrJM%2FIWOq9cdWNO1%2BV0hI8VYK%2FdDGxFssUc8MDsQ4k6EcWG7V1N15B5uV8AaiQonibGIASAMQFBGorTfe3MGfsSXlijGfKUPzDp2JVsK2qfoVTDGDUYwAnNCsayrCXAi0UUtHB3N47ulbWMzwTT%2Fj6o1VaPpUjYRtFWhc18t1JCgjj7fEwgKjbsueMyjUvSE9zqL4DjTPEm8JPglWODdVn8HbenJTrcPSel4oIvjOIkcY1bhCFQ5JrkPF5oBj1HTA%2F5tN9iyDDeJeT99n3wpSzsHH15Mq%2F8GIP920OKEGksCaLCmWSWCy23f%2FsCLxipxCQMfDBMTKTnoXXUx7mystgPf5v1RLILu5naP%2B1fhG%2FMcmJEYfS7iamAxQbMJWgi3xJHfbHbtEaN7dbIKrLMs9AP0V%2Fy53AvvcUCMI76xjXyMIiosr0GOqUBA%2F1yuO5NFTjqXph1oJhXPkslc47W1qkADP77rDmbNS3yh4oI783hTDMEDeqj62Y8sVUKN1zHlIT0hmuunJFwAp%2FIjlnsUG01jeraXkd%2FqCoiYpkjlvcUimAAgP6TlcXOx%2BCJv0uUX%2BCWcMZgvKwAm9VopL%2BmIpLAJmhqOxV8FlTzwv9Ip3eHZic0sgACdIQr63f1rQcrfjCSAmW58Dw8rjrWE3m%2B&X-Amz-Signature=4b3b174259c46a173ed45599cfb3e5d41848f232359cdbe68ab0beefbc1c8147&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEGTLJK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHH8IDt9YQEUuVD9DCDy3439CaOFRp2Wi29QxU6%2Fq3sAiEAt3llXcXMg06uAjDDqcBNPuInRklhmaUPCcxKpkqHHsoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkSJ53v5Udy3%2F8G4CrcA7AuE75yVhHHUH%2BP%2Bf%2F%2BEqfoFXVzxp7wDEWA8U%2F%2FXkA1FtYeunBVCw7VEQKS9NvWDiHElMIq5O%2FxkTAs%2FotTLqrDyLwKmM4TZWrkfQ38QOcY0Oz1B2VbBMDPaCbdhSgukoMCe7mqOSglnt2zYOE6TYk2ZFexSYTNu3CD%2BO7JCkQHQKF2UduWDfZwvF%2BPD9wXc43FCVGkMxMGXIwH7SrJM%2FIWOq9cdWNO1%2BV0hI8VYK%2FdDGxFssUc8MDsQ4k6EcWG7V1N15B5uV8AaiQonibGIASAMQFBGorTfe3MGfsSXlijGfKUPzDp2JVsK2qfoVTDGDUYwAnNCsayrCXAi0UUtHB3N47ulbWMzwTT%2Fj6o1VaPpUjYRtFWhc18t1JCgjj7fEwgKjbsueMyjUvSE9zqL4DjTPEm8JPglWODdVn8HbenJTrcPSel4oIvjOIkcY1bhCFQ5JrkPF5oBj1HTA%2F5tN9iyDDeJeT99n3wpSzsHH15Mq%2F8GIP920OKEGksCaLCmWSWCy23f%2FsCLxipxCQMfDBMTKTnoXXUx7mystgPf5v1RLILu5naP%2B1fhG%2FMcmJEYfS7iamAxQbMJWgi3xJHfbHbtEaN7dbIKrLMs9AP0V%2Fy53AvvcUCMI76xjXyMIiosr0GOqUBA%2F1yuO5NFTjqXph1oJhXPkslc47W1qkADP77rDmbNS3yh4oI783hTDMEDeqj62Y8sVUKN1zHlIT0hmuunJFwAp%2FIjlnsUG01jeraXkd%2FqCoiYpkjlvcUimAAgP6TlcXOx%2BCJv0uUX%2BCWcMZgvKwAm9VopL%2BmIpLAJmhqOxV8FlTzwv9Ip3eHZic0sgACdIQr63f1rQcrfjCSAmW58Dw8rjrWE3m%2B&X-Amz-Signature=fe30bd71bf8ea52d717e00e011fd53a67dcd620eba9fcef1c6e23d93b9e0ae41&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEGTLJK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHH8IDt9YQEUuVD9DCDy3439CaOFRp2Wi29QxU6%2Fq3sAiEAt3llXcXMg06uAjDDqcBNPuInRklhmaUPCcxKpkqHHsoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkSJ53v5Udy3%2F8G4CrcA7AuE75yVhHHUH%2BP%2Bf%2F%2BEqfoFXVzxp7wDEWA8U%2F%2FXkA1FtYeunBVCw7VEQKS9NvWDiHElMIq5O%2FxkTAs%2FotTLqrDyLwKmM4TZWrkfQ38QOcY0Oz1B2VbBMDPaCbdhSgukoMCe7mqOSglnt2zYOE6TYk2ZFexSYTNu3CD%2BO7JCkQHQKF2UduWDfZwvF%2BPD9wXc43FCVGkMxMGXIwH7SrJM%2FIWOq9cdWNO1%2BV0hI8VYK%2FdDGxFssUc8MDsQ4k6EcWG7V1N15B5uV8AaiQonibGIASAMQFBGorTfe3MGfsSXlijGfKUPzDp2JVsK2qfoVTDGDUYwAnNCsayrCXAi0UUtHB3N47ulbWMzwTT%2Fj6o1VaPpUjYRtFWhc18t1JCgjj7fEwgKjbsueMyjUvSE9zqL4DjTPEm8JPglWODdVn8HbenJTrcPSel4oIvjOIkcY1bhCFQ5JrkPF5oBj1HTA%2F5tN9iyDDeJeT99n3wpSzsHH15Mq%2F8GIP920OKEGksCaLCmWSWCy23f%2FsCLxipxCQMfDBMTKTnoXXUx7mystgPf5v1RLILu5naP%2B1fhG%2FMcmJEYfS7iamAxQbMJWgi3xJHfbHbtEaN7dbIKrLMs9AP0V%2Fy53AvvcUCMI76xjXyMIiosr0GOqUBA%2F1yuO5NFTjqXph1oJhXPkslc47W1qkADP77rDmbNS3yh4oI783hTDMEDeqj62Y8sVUKN1zHlIT0hmuunJFwAp%2FIjlnsUG01jeraXkd%2FqCoiYpkjlvcUimAAgP6TlcXOx%2BCJv0uUX%2BCWcMZgvKwAm9VopL%2BmIpLAJmhqOxV8FlTzwv9Ip3eHZic0sgACdIQr63f1rQcrfjCSAmW58Dw8rjrWE3m%2B&X-Amz-Signature=ef20ca2b5ca8717ed2483fe35179f0f55f526e9b4e08ad1f54d40c30e68a832f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
