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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLN5AYJE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGN7%2FoOXhZkAFtl8SiRYsLmtNKU2XiNeFiMPFitbPtuBAiEAp%2FgiJTJZGDUvFijxRxJOxnxHR%2Fun%2BujApMXyhoLgS2Aq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDI9GktLhLwo%2FjvTOuircA6ar%2BJscBbY1LlijhD5IRllH5VKAFPripfxOBmMAE93sXqsShP8lAprwmEf%2BQC%2B%2BUynoyr3IICpRZxMhbzDtRhJPY4aYJCegkOwdEN6jdW4NaGH9lZXuHOz0Accp6gYWA8cXM2OVk6%2F26aBEjcMURTDLq7BCs5LCCu4OmZ8JJ986hvQLHkT3FD05FstQpEv6L4MoeTbgNASTI9f97nho2Mn%2BMZsPkiZiBTnUKxTTrX7wywikv7l%2BGrGj8F3vuVdY0crz1%2FfCEsJ5k6SEUYOCM%2FdX2XHBx%2Fv%2Fi%2B2JdcxmxYBxqNlPLdS1QJ94%2B2je9dJAsCOyGfbBYXySZgc3jiUHWjVTlid6HMmG0eCdhR13j4n90l7aFxkFcoD5ITzOHWLK1uAyt%2FDMiN4yFd8ht0pfEAQhZYYcjSFn4Iajuh6qi8IpEw5T7gahQJ8fRStZVjqx8h%2Bw9j%2Bgu%2BsBhMsvG5ht9iRpKplmHisjYHYOWxP%2FUKAxBOQQY8EtNolDVs2JtztQpy7cEvFuwWyPGJxTw8%2BaorPuCw0EjMKIRNbqJ9JdhZ997tP%2BppumndWxK2c6ATU4hIO2CLazkmWwT0pzaEBKSydVK4QlMm6XP8D%2B0uMpBYeWrtnL3hYpxY%2BcrPmuMIuFzr8GOqUBk9T1veX2n1YeVdJGjkIz3qzJuwIH6ed2Qa5%2BZPnWIRbvdyZS8%2FcVRNPKn%2BEF%2FRrX0rTS%2FVR7uom7c7y300H7kmuKM3uXIb5mk2f2bkeBxqE%2FpXOMYTKXKmXKwhqNbkbe30ihCo7eTw%2BCyxiqdLhNx5FX4VbHLCDTUY3mjB5Ga5gPaQ0p05CPjmu9dPj1HE67G5qfceWiMzu9oqftaQngjju0g8%2B1&X-Amz-Signature=2ba5c734378344874f5e891cf6276d36addd53a9ed047261b72e2275c6ac4038&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLN5AYJE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGN7%2FoOXhZkAFtl8SiRYsLmtNKU2XiNeFiMPFitbPtuBAiEAp%2FgiJTJZGDUvFijxRxJOxnxHR%2Fun%2BujApMXyhoLgS2Aq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDI9GktLhLwo%2FjvTOuircA6ar%2BJscBbY1LlijhD5IRllH5VKAFPripfxOBmMAE93sXqsShP8lAprwmEf%2BQC%2B%2BUynoyr3IICpRZxMhbzDtRhJPY4aYJCegkOwdEN6jdW4NaGH9lZXuHOz0Accp6gYWA8cXM2OVk6%2F26aBEjcMURTDLq7BCs5LCCu4OmZ8JJ986hvQLHkT3FD05FstQpEv6L4MoeTbgNASTI9f97nho2Mn%2BMZsPkiZiBTnUKxTTrX7wywikv7l%2BGrGj8F3vuVdY0crz1%2FfCEsJ5k6SEUYOCM%2FdX2XHBx%2Fv%2Fi%2B2JdcxmxYBxqNlPLdS1QJ94%2B2je9dJAsCOyGfbBYXySZgc3jiUHWjVTlid6HMmG0eCdhR13j4n90l7aFxkFcoD5ITzOHWLK1uAyt%2FDMiN4yFd8ht0pfEAQhZYYcjSFn4Iajuh6qi8IpEw5T7gahQJ8fRStZVjqx8h%2Bw9j%2Bgu%2BsBhMsvG5ht9iRpKplmHisjYHYOWxP%2FUKAxBOQQY8EtNolDVs2JtztQpy7cEvFuwWyPGJxTw8%2BaorPuCw0EjMKIRNbqJ9JdhZ997tP%2BppumndWxK2c6ATU4hIO2CLazkmWwT0pzaEBKSydVK4QlMm6XP8D%2B0uMpBYeWrtnL3hYpxY%2BcrPmuMIuFzr8GOqUBk9T1veX2n1YeVdJGjkIz3qzJuwIH6ed2Qa5%2BZPnWIRbvdyZS8%2FcVRNPKn%2BEF%2FRrX0rTS%2FVR7uom7c7y300H7kmuKM3uXIb5mk2f2bkeBxqE%2FpXOMYTKXKmXKwhqNbkbe30ihCo7eTw%2BCyxiqdLhNx5FX4VbHLCDTUY3mjB5Ga5gPaQ0p05CPjmu9dPj1HE67G5qfceWiMzu9oqftaQngjju0g8%2B1&X-Amz-Signature=086173d57b0e2ad232faabbdb517cae00401c51c311af5a0543126dee76322c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLN5AYJE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGN7%2FoOXhZkAFtl8SiRYsLmtNKU2XiNeFiMPFitbPtuBAiEAp%2FgiJTJZGDUvFijxRxJOxnxHR%2Fun%2BujApMXyhoLgS2Aq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDI9GktLhLwo%2FjvTOuircA6ar%2BJscBbY1LlijhD5IRllH5VKAFPripfxOBmMAE93sXqsShP8lAprwmEf%2BQC%2B%2BUynoyr3IICpRZxMhbzDtRhJPY4aYJCegkOwdEN6jdW4NaGH9lZXuHOz0Accp6gYWA8cXM2OVk6%2F26aBEjcMURTDLq7BCs5LCCu4OmZ8JJ986hvQLHkT3FD05FstQpEv6L4MoeTbgNASTI9f97nho2Mn%2BMZsPkiZiBTnUKxTTrX7wywikv7l%2BGrGj8F3vuVdY0crz1%2FfCEsJ5k6SEUYOCM%2FdX2XHBx%2Fv%2Fi%2B2JdcxmxYBxqNlPLdS1QJ94%2B2je9dJAsCOyGfbBYXySZgc3jiUHWjVTlid6HMmG0eCdhR13j4n90l7aFxkFcoD5ITzOHWLK1uAyt%2FDMiN4yFd8ht0pfEAQhZYYcjSFn4Iajuh6qi8IpEw5T7gahQJ8fRStZVjqx8h%2Bw9j%2Bgu%2BsBhMsvG5ht9iRpKplmHisjYHYOWxP%2FUKAxBOQQY8EtNolDVs2JtztQpy7cEvFuwWyPGJxTw8%2BaorPuCw0EjMKIRNbqJ9JdhZ997tP%2BppumndWxK2c6ATU4hIO2CLazkmWwT0pzaEBKSydVK4QlMm6XP8D%2B0uMpBYeWrtnL3hYpxY%2BcrPmuMIuFzr8GOqUBk9T1veX2n1YeVdJGjkIz3qzJuwIH6ed2Qa5%2BZPnWIRbvdyZS8%2FcVRNPKn%2BEF%2FRrX0rTS%2FVR7uom7c7y300H7kmuKM3uXIb5mk2f2bkeBxqE%2FpXOMYTKXKmXKwhqNbkbe30ihCo7eTw%2BCyxiqdLhNx5FX4VbHLCDTUY3mjB5Ga5gPaQ0p05CPjmu9dPj1HE67G5qfceWiMzu9oqftaQngjju0g8%2B1&X-Amz-Signature=1c7df1060ce39ce5d28c3d2a1cc7f3636e89795a035aa163588bae38a0d3bc5d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLN5AYJE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGN7%2FoOXhZkAFtl8SiRYsLmtNKU2XiNeFiMPFitbPtuBAiEAp%2FgiJTJZGDUvFijxRxJOxnxHR%2Fun%2BujApMXyhoLgS2Aq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDI9GktLhLwo%2FjvTOuircA6ar%2BJscBbY1LlijhD5IRllH5VKAFPripfxOBmMAE93sXqsShP8lAprwmEf%2BQC%2B%2BUynoyr3IICpRZxMhbzDtRhJPY4aYJCegkOwdEN6jdW4NaGH9lZXuHOz0Accp6gYWA8cXM2OVk6%2F26aBEjcMURTDLq7BCs5LCCu4OmZ8JJ986hvQLHkT3FD05FstQpEv6L4MoeTbgNASTI9f97nho2Mn%2BMZsPkiZiBTnUKxTTrX7wywikv7l%2BGrGj8F3vuVdY0crz1%2FfCEsJ5k6SEUYOCM%2FdX2XHBx%2Fv%2Fi%2B2JdcxmxYBxqNlPLdS1QJ94%2B2je9dJAsCOyGfbBYXySZgc3jiUHWjVTlid6HMmG0eCdhR13j4n90l7aFxkFcoD5ITzOHWLK1uAyt%2FDMiN4yFd8ht0pfEAQhZYYcjSFn4Iajuh6qi8IpEw5T7gahQJ8fRStZVjqx8h%2Bw9j%2Bgu%2BsBhMsvG5ht9iRpKplmHisjYHYOWxP%2FUKAxBOQQY8EtNolDVs2JtztQpy7cEvFuwWyPGJxTw8%2BaorPuCw0EjMKIRNbqJ9JdhZ997tP%2BppumndWxK2c6ATU4hIO2CLazkmWwT0pzaEBKSydVK4QlMm6XP8D%2B0uMpBYeWrtnL3hYpxY%2BcrPmuMIuFzr8GOqUBk9T1veX2n1YeVdJGjkIz3qzJuwIH6ed2Qa5%2BZPnWIRbvdyZS8%2FcVRNPKn%2BEF%2FRrX0rTS%2FVR7uom7c7y300H7kmuKM3uXIb5mk2f2bkeBxqE%2FpXOMYTKXKmXKwhqNbkbe30ihCo7eTw%2BCyxiqdLhNx5FX4VbHLCDTUY3mjB5Ga5gPaQ0p05CPjmu9dPj1HE67G5qfceWiMzu9oqftaQngjju0g8%2B1&X-Amz-Signature=02e0bb320511d9b81eec9a452258f8fcee21e7acf385a5b5102a4bc21580a216&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLN5AYJE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGN7%2FoOXhZkAFtl8SiRYsLmtNKU2XiNeFiMPFitbPtuBAiEAp%2FgiJTJZGDUvFijxRxJOxnxHR%2Fun%2BujApMXyhoLgS2Aq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDI9GktLhLwo%2FjvTOuircA6ar%2BJscBbY1LlijhD5IRllH5VKAFPripfxOBmMAE93sXqsShP8lAprwmEf%2BQC%2B%2BUynoyr3IICpRZxMhbzDtRhJPY4aYJCegkOwdEN6jdW4NaGH9lZXuHOz0Accp6gYWA8cXM2OVk6%2F26aBEjcMURTDLq7BCs5LCCu4OmZ8JJ986hvQLHkT3FD05FstQpEv6L4MoeTbgNASTI9f97nho2Mn%2BMZsPkiZiBTnUKxTTrX7wywikv7l%2BGrGj8F3vuVdY0crz1%2FfCEsJ5k6SEUYOCM%2FdX2XHBx%2Fv%2Fi%2B2JdcxmxYBxqNlPLdS1QJ94%2B2je9dJAsCOyGfbBYXySZgc3jiUHWjVTlid6HMmG0eCdhR13j4n90l7aFxkFcoD5ITzOHWLK1uAyt%2FDMiN4yFd8ht0pfEAQhZYYcjSFn4Iajuh6qi8IpEw5T7gahQJ8fRStZVjqx8h%2Bw9j%2Bgu%2BsBhMsvG5ht9iRpKplmHisjYHYOWxP%2FUKAxBOQQY8EtNolDVs2JtztQpy7cEvFuwWyPGJxTw8%2BaorPuCw0EjMKIRNbqJ9JdhZ997tP%2BppumndWxK2c6ATU4hIO2CLazkmWwT0pzaEBKSydVK4QlMm6XP8D%2B0uMpBYeWrtnL3hYpxY%2BcrPmuMIuFzr8GOqUBk9T1veX2n1YeVdJGjkIz3qzJuwIH6ed2Qa5%2BZPnWIRbvdyZS8%2FcVRNPKn%2BEF%2FRrX0rTS%2FVR7uom7c7y300H7kmuKM3uXIb5mk2f2bkeBxqE%2FpXOMYTKXKmXKwhqNbkbe30ihCo7eTw%2BCyxiqdLhNx5FX4VbHLCDTUY3mjB5Ga5gPaQ0p05CPjmu9dPj1HE67G5qfceWiMzu9oqftaQngjju0g8%2B1&X-Amz-Signature=c8c9f75b52a78c5dc514e2204e49b8f441440e31050308927d045adddbb46b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLN5AYJE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGN7%2FoOXhZkAFtl8SiRYsLmtNKU2XiNeFiMPFitbPtuBAiEAp%2FgiJTJZGDUvFijxRxJOxnxHR%2Fun%2BujApMXyhoLgS2Aq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDI9GktLhLwo%2FjvTOuircA6ar%2BJscBbY1LlijhD5IRllH5VKAFPripfxOBmMAE93sXqsShP8lAprwmEf%2BQC%2B%2BUynoyr3IICpRZxMhbzDtRhJPY4aYJCegkOwdEN6jdW4NaGH9lZXuHOz0Accp6gYWA8cXM2OVk6%2F26aBEjcMURTDLq7BCs5LCCu4OmZ8JJ986hvQLHkT3FD05FstQpEv6L4MoeTbgNASTI9f97nho2Mn%2BMZsPkiZiBTnUKxTTrX7wywikv7l%2BGrGj8F3vuVdY0crz1%2FfCEsJ5k6SEUYOCM%2FdX2XHBx%2Fv%2Fi%2B2JdcxmxYBxqNlPLdS1QJ94%2B2je9dJAsCOyGfbBYXySZgc3jiUHWjVTlid6HMmG0eCdhR13j4n90l7aFxkFcoD5ITzOHWLK1uAyt%2FDMiN4yFd8ht0pfEAQhZYYcjSFn4Iajuh6qi8IpEw5T7gahQJ8fRStZVjqx8h%2Bw9j%2Bgu%2BsBhMsvG5ht9iRpKplmHisjYHYOWxP%2FUKAxBOQQY8EtNolDVs2JtztQpy7cEvFuwWyPGJxTw8%2BaorPuCw0EjMKIRNbqJ9JdhZ997tP%2BppumndWxK2c6ATU4hIO2CLazkmWwT0pzaEBKSydVK4QlMm6XP8D%2B0uMpBYeWrtnL3hYpxY%2BcrPmuMIuFzr8GOqUBk9T1veX2n1YeVdJGjkIz3qzJuwIH6ed2Qa5%2BZPnWIRbvdyZS8%2FcVRNPKn%2BEF%2FRrX0rTS%2FVR7uom7c7y300H7kmuKM3uXIb5mk2f2bkeBxqE%2FpXOMYTKXKmXKwhqNbkbe30ihCo7eTw%2BCyxiqdLhNx5FX4VbHLCDTUY3mjB5Ga5gPaQ0p05CPjmu9dPj1HE67G5qfceWiMzu9oqftaQngjju0g8%2B1&X-Amz-Signature=87dd6ad63737b98a128ff77fd6bcca3172e10cb565735f59d5670cb7561fde5b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLN5AYJE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGN7%2FoOXhZkAFtl8SiRYsLmtNKU2XiNeFiMPFitbPtuBAiEAp%2FgiJTJZGDUvFijxRxJOxnxHR%2Fun%2BujApMXyhoLgS2Aq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDI9GktLhLwo%2FjvTOuircA6ar%2BJscBbY1LlijhD5IRllH5VKAFPripfxOBmMAE93sXqsShP8lAprwmEf%2BQC%2B%2BUynoyr3IICpRZxMhbzDtRhJPY4aYJCegkOwdEN6jdW4NaGH9lZXuHOz0Accp6gYWA8cXM2OVk6%2F26aBEjcMURTDLq7BCs5LCCu4OmZ8JJ986hvQLHkT3FD05FstQpEv6L4MoeTbgNASTI9f97nho2Mn%2BMZsPkiZiBTnUKxTTrX7wywikv7l%2BGrGj8F3vuVdY0crz1%2FfCEsJ5k6SEUYOCM%2FdX2XHBx%2Fv%2Fi%2B2JdcxmxYBxqNlPLdS1QJ94%2B2je9dJAsCOyGfbBYXySZgc3jiUHWjVTlid6HMmG0eCdhR13j4n90l7aFxkFcoD5ITzOHWLK1uAyt%2FDMiN4yFd8ht0pfEAQhZYYcjSFn4Iajuh6qi8IpEw5T7gahQJ8fRStZVjqx8h%2Bw9j%2Bgu%2BsBhMsvG5ht9iRpKplmHisjYHYOWxP%2FUKAxBOQQY8EtNolDVs2JtztQpy7cEvFuwWyPGJxTw8%2BaorPuCw0EjMKIRNbqJ9JdhZ997tP%2BppumndWxK2c6ATU4hIO2CLazkmWwT0pzaEBKSydVK4QlMm6XP8D%2B0uMpBYeWrtnL3hYpxY%2BcrPmuMIuFzr8GOqUBk9T1veX2n1YeVdJGjkIz3qzJuwIH6ed2Qa5%2BZPnWIRbvdyZS8%2FcVRNPKn%2BEF%2FRrX0rTS%2FVR7uom7c7y300H7kmuKM3uXIb5mk2f2bkeBxqE%2FpXOMYTKXKmXKwhqNbkbe30ihCo7eTw%2BCyxiqdLhNx5FX4VbHLCDTUY3mjB5Ga5gPaQ0p05CPjmu9dPj1HE67G5qfceWiMzu9oqftaQngjju0g8%2B1&X-Amz-Signature=79fe4b42ac18a012d6fb940c097114cd67756081350aa8945d7afd6bbb67d466&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
