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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS24N63U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtMBERX9e06XMq7m5i23e8EdoXRUo%2BORA1T859h0VqvwIgAs7xtxRnHjzWUGWG5NA5gOl9UWxMFDfFnnLtTX%2B%2BhvYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMDc3MrezWYWQ4mhSSrcA3IDWsxfjmvyZYu%2FM4CN3C1YhcH9Z%2BloPRsq5A7gkYGlcibC3fVI4MWH1WGfGc4pXXBbjFfuICKySlTD6V%2FV71TQmznuzme2FJHuHPa0EswvCpHY71tgmvWwOskvQEwg4hS%2BEHXoCh63FDXhhMPu8NYiLYlKqNo0jNkfmLcJYKE6pTSyDjT6qZB4LchKKTKDkk3kUtuhtISgwh0Fe%2Fdh2xOSr3%2B8IrOXUmEj5hre9dBxJSoOwXgQ1%2B1OP8TlfLF%2BbngPTIFGkr63VKTYwK%2B%2BKMGoC730c7gX8cEFmnTnXdS4MiBHq7usFs3tHl7pD1oWH74xUHtpNuQALN5mbOIFHBUM225g3kSa02icfY02CVysaK%2BS1vDgyQ9kjZYSxmczvpGPGF0kVnYTyUvKQz3qgRdPdpP%2BDxxeHjsM5ZokSUDHv6Wl9gU%2FXkCQ6q7tkBPcH8yRLh9rYVrDtjqkvUWzfpPxgjoE6UBIuamDvpHVit85x7tKHsZSsKc6D7UFN%2BFBaqqQmy8ncWFpk9Fs%2Bl59bi6nWCX%2B0MAzIbXNCRzy%2Fj2zWpv8TIws4%2BkmMfa2h2PKFF054WOz%2Fpb3M4mfT3dN8JN3xsGNqJS7%2FVlwjGU8R2VthIprpD8K5AQzZL0xMJ%2FqmL8GOqUBjOt5V3u4QdX00PJGJwcnn46TXyLYhipmO590%2BnM4sLvgNbBoJ%2Fay0eGBLJcZ1MfYH9Flamoy%2Bi1SxP8u4VNNmMJj1EJCbTftqM9vUPkshnhVSF37ezpJ%2Bb15OE2H7tG08TxHRSCTxxNNsdlAWG0SKIAPVCFfwEEvZS2duVwS4LJb63k%2Bqh5oC8ughABifOdSC6R%2BFdMSEGcuhjA%2FPu7q3lxUoYUM&X-Amz-Signature=0a6479d5ba13516861b78e872caf083873e57ec00a00f825bab9dcd093d9c93e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS24N63U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtMBERX9e06XMq7m5i23e8EdoXRUo%2BORA1T859h0VqvwIgAs7xtxRnHjzWUGWG5NA5gOl9UWxMFDfFnnLtTX%2B%2BhvYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMDc3MrezWYWQ4mhSSrcA3IDWsxfjmvyZYu%2FM4CN3C1YhcH9Z%2BloPRsq5A7gkYGlcibC3fVI4MWH1WGfGc4pXXBbjFfuICKySlTD6V%2FV71TQmznuzme2FJHuHPa0EswvCpHY71tgmvWwOskvQEwg4hS%2BEHXoCh63FDXhhMPu8NYiLYlKqNo0jNkfmLcJYKE6pTSyDjT6qZB4LchKKTKDkk3kUtuhtISgwh0Fe%2Fdh2xOSr3%2B8IrOXUmEj5hre9dBxJSoOwXgQ1%2B1OP8TlfLF%2BbngPTIFGkr63VKTYwK%2B%2BKMGoC730c7gX8cEFmnTnXdS4MiBHq7usFs3tHl7pD1oWH74xUHtpNuQALN5mbOIFHBUM225g3kSa02icfY02CVysaK%2BS1vDgyQ9kjZYSxmczvpGPGF0kVnYTyUvKQz3qgRdPdpP%2BDxxeHjsM5ZokSUDHv6Wl9gU%2FXkCQ6q7tkBPcH8yRLh9rYVrDtjqkvUWzfpPxgjoE6UBIuamDvpHVit85x7tKHsZSsKc6D7UFN%2BFBaqqQmy8ncWFpk9Fs%2Bl59bi6nWCX%2B0MAzIbXNCRzy%2Fj2zWpv8TIws4%2BkmMfa2h2PKFF054WOz%2Fpb3M4mfT3dN8JN3xsGNqJS7%2FVlwjGU8R2VthIprpD8K5AQzZL0xMJ%2FqmL8GOqUBjOt5V3u4QdX00PJGJwcnn46TXyLYhipmO590%2BnM4sLvgNbBoJ%2Fay0eGBLJcZ1MfYH9Flamoy%2Bi1SxP8u4VNNmMJj1EJCbTftqM9vUPkshnhVSF37ezpJ%2Bb15OE2H7tG08TxHRSCTxxNNsdlAWG0SKIAPVCFfwEEvZS2duVwS4LJb63k%2Bqh5oC8ughABifOdSC6R%2BFdMSEGcuhjA%2FPu7q3lxUoYUM&X-Amz-Signature=6c6cb9399c8dfe889ee567221070b5cde4c481513d97cef9c352bdc68ab1d776&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS24N63U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtMBERX9e06XMq7m5i23e8EdoXRUo%2BORA1T859h0VqvwIgAs7xtxRnHjzWUGWG5NA5gOl9UWxMFDfFnnLtTX%2B%2BhvYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMDc3MrezWYWQ4mhSSrcA3IDWsxfjmvyZYu%2FM4CN3C1YhcH9Z%2BloPRsq5A7gkYGlcibC3fVI4MWH1WGfGc4pXXBbjFfuICKySlTD6V%2FV71TQmznuzme2FJHuHPa0EswvCpHY71tgmvWwOskvQEwg4hS%2BEHXoCh63FDXhhMPu8NYiLYlKqNo0jNkfmLcJYKE6pTSyDjT6qZB4LchKKTKDkk3kUtuhtISgwh0Fe%2Fdh2xOSr3%2B8IrOXUmEj5hre9dBxJSoOwXgQ1%2B1OP8TlfLF%2BbngPTIFGkr63VKTYwK%2B%2BKMGoC730c7gX8cEFmnTnXdS4MiBHq7usFs3tHl7pD1oWH74xUHtpNuQALN5mbOIFHBUM225g3kSa02icfY02CVysaK%2BS1vDgyQ9kjZYSxmczvpGPGF0kVnYTyUvKQz3qgRdPdpP%2BDxxeHjsM5ZokSUDHv6Wl9gU%2FXkCQ6q7tkBPcH8yRLh9rYVrDtjqkvUWzfpPxgjoE6UBIuamDvpHVit85x7tKHsZSsKc6D7UFN%2BFBaqqQmy8ncWFpk9Fs%2Bl59bi6nWCX%2B0MAzIbXNCRzy%2Fj2zWpv8TIws4%2BkmMfa2h2PKFF054WOz%2Fpb3M4mfT3dN8JN3xsGNqJS7%2FVlwjGU8R2VthIprpD8K5AQzZL0xMJ%2FqmL8GOqUBjOt5V3u4QdX00PJGJwcnn46TXyLYhipmO590%2BnM4sLvgNbBoJ%2Fay0eGBLJcZ1MfYH9Flamoy%2Bi1SxP8u4VNNmMJj1EJCbTftqM9vUPkshnhVSF37ezpJ%2Bb15OE2H7tG08TxHRSCTxxNNsdlAWG0SKIAPVCFfwEEvZS2duVwS4LJb63k%2Bqh5oC8ughABifOdSC6R%2BFdMSEGcuhjA%2FPu7q3lxUoYUM&X-Amz-Signature=fab92cb1fb8e883635fd38f4602c5f96ac3157dfd835dd9845bae54a65c31edc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS24N63U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtMBERX9e06XMq7m5i23e8EdoXRUo%2BORA1T859h0VqvwIgAs7xtxRnHjzWUGWG5NA5gOl9UWxMFDfFnnLtTX%2B%2BhvYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMDc3MrezWYWQ4mhSSrcA3IDWsxfjmvyZYu%2FM4CN3C1YhcH9Z%2BloPRsq5A7gkYGlcibC3fVI4MWH1WGfGc4pXXBbjFfuICKySlTD6V%2FV71TQmznuzme2FJHuHPa0EswvCpHY71tgmvWwOskvQEwg4hS%2BEHXoCh63FDXhhMPu8NYiLYlKqNo0jNkfmLcJYKE6pTSyDjT6qZB4LchKKTKDkk3kUtuhtISgwh0Fe%2Fdh2xOSr3%2B8IrOXUmEj5hre9dBxJSoOwXgQ1%2B1OP8TlfLF%2BbngPTIFGkr63VKTYwK%2B%2BKMGoC730c7gX8cEFmnTnXdS4MiBHq7usFs3tHl7pD1oWH74xUHtpNuQALN5mbOIFHBUM225g3kSa02icfY02CVysaK%2BS1vDgyQ9kjZYSxmczvpGPGF0kVnYTyUvKQz3qgRdPdpP%2BDxxeHjsM5ZokSUDHv6Wl9gU%2FXkCQ6q7tkBPcH8yRLh9rYVrDtjqkvUWzfpPxgjoE6UBIuamDvpHVit85x7tKHsZSsKc6D7UFN%2BFBaqqQmy8ncWFpk9Fs%2Bl59bi6nWCX%2B0MAzIbXNCRzy%2Fj2zWpv8TIws4%2BkmMfa2h2PKFF054WOz%2Fpb3M4mfT3dN8JN3xsGNqJS7%2FVlwjGU8R2VthIprpD8K5AQzZL0xMJ%2FqmL8GOqUBjOt5V3u4QdX00PJGJwcnn46TXyLYhipmO590%2BnM4sLvgNbBoJ%2Fay0eGBLJcZ1MfYH9Flamoy%2Bi1SxP8u4VNNmMJj1EJCbTftqM9vUPkshnhVSF37ezpJ%2Bb15OE2H7tG08TxHRSCTxxNNsdlAWG0SKIAPVCFfwEEvZS2duVwS4LJb63k%2Bqh5oC8ughABifOdSC6R%2BFdMSEGcuhjA%2FPu7q3lxUoYUM&X-Amz-Signature=36b65d3ec7532b1f9f4696eb7c0391ab8d6016466d3da10c79b1a76a0e1ed66e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS24N63U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtMBERX9e06XMq7m5i23e8EdoXRUo%2BORA1T859h0VqvwIgAs7xtxRnHjzWUGWG5NA5gOl9UWxMFDfFnnLtTX%2B%2BhvYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMDc3MrezWYWQ4mhSSrcA3IDWsxfjmvyZYu%2FM4CN3C1YhcH9Z%2BloPRsq5A7gkYGlcibC3fVI4MWH1WGfGc4pXXBbjFfuICKySlTD6V%2FV71TQmznuzme2FJHuHPa0EswvCpHY71tgmvWwOskvQEwg4hS%2BEHXoCh63FDXhhMPu8NYiLYlKqNo0jNkfmLcJYKE6pTSyDjT6qZB4LchKKTKDkk3kUtuhtISgwh0Fe%2Fdh2xOSr3%2B8IrOXUmEj5hre9dBxJSoOwXgQ1%2B1OP8TlfLF%2BbngPTIFGkr63VKTYwK%2B%2BKMGoC730c7gX8cEFmnTnXdS4MiBHq7usFs3tHl7pD1oWH74xUHtpNuQALN5mbOIFHBUM225g3kSa02icfY02CVysaK%2BS1vDgyQ9kjZYSxmczvpGPGF0kVnYTyUvKQz3qgRdPdpP%2BDxxeHjsM5ZokSUDHv6Wl9gU%2FXkCQ6q7tkBPcH8yRLh9rYVrDtjqkvUWzfpPxgjoE6UBIuamDvpHVit85x7tKHsZSsKc6D7UFN%2BFBaqqQmy8ncWFpk9Fs%2Bl59bi6nWCX%2B0MAzIbXNCRzy%2Fj2zWpv8TIws4%2BkmMfa2h2PKFF054WOz%2Fpb3M4mfT3dN8JN3xsGNqJS7%2FVlwjGU8R2VthIprpD8K5AQzZL0xMJ%2FqmL8GOqUBjOt5V3u4QdX00PJGJwcnn46TXyLYhipmO590%2BnM4sLvgNbBoJ%2Fay0eGBLJcZ1MfYH9Flamoy%2Bi1SxP8u4VNNmMJj1EJCbTftqM9vUPkshnhVSF37ezpJ%2Bb15OE2H7tG08TxHRSCTxxNNsdlAWG0SKIAPVCFfwEEvZS2duVwS4LJb63k%2Bqh5oC8ughABifOdSC6R%2BFdMSEGcuhjA%2FPu7q3lxUoYUM&X-Amz-Signature=6f077fd6a86ad06249f7701365b39c86fe1c5acd078881bad5b61014c31a9a91&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS24N63U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtMBERX9e06XMq7m5i23e8EdoXRUo%2BORA1T859h0VqvwIgAs7xtxRnHjzWUGWG5NA5gOl9UWxMFDfFnnLtTX%2B%2BhvYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMDc3MrezWYWQ4mhSSrcA3IDWsxfjmvyZYu%2FM4CN3C1YhcH9Z%2BloPRsq5A7gkYGlcibC3fVI4MWH1WGfGc4pXXBbjFfuICKySlTD6V%2FV71TQmznuzme2FJHuHPa0EswvCpHY71tgmvWwOskvQEwg4hS%2BEHXoCh63FDXhhMPu8NYiLYlKqNo0jNkfmLcJYKE6pTSyDjT6qZB4LchKKTKDkk3kUtuhtISgwh0Fe%2Fdh2xOSr3%2B8IrOXUmEj5hre9dBxJSoOwXgQ1%2B1OP8TlfLF%2BbngPTIFGkr63VKTYwK%2B%2BKMGoC730c7gX8cEFmnTnXdS4MiBHq7usFs3tHl7pD1oWH74xUHtpNuQALN5mbOIFHBUM225g3kSa02icfY02CVysaK%2BS1vDgyQ9kjZYSxmczvpGPGF0kVnYTyUvKQz3qgRdPdpP%2BDxxeHjsM5ZokSUDHv6Wl9gU%2FXkCQ6q7tkBPcH8yRLh9rYVrDtjqkvUWzfpPxgjoE6UBIuamDvpHVit85x7tKHsZSsKc6D7UFN%2BFBaqqQmy8ncWFpk9Fs%2Bl59bi6nWCX%2B0MAzIbXNCRzy%2Fj2zWpv8TIws4%2BkmMfa2h2PKFF054WOz%2Fpb3M4mfT3dN8JN3xsGNqJS7%2FVlwjGU8R2VthIprpD8K5AQzZL0xMJ%2FqmL8GOqUBjOt5V3u4QdX00PJGJwcnn46TXyLYhipmO590%2BnM4sLvgNbBoJ%2Fay0eGBLJcZ1MfYH9Flamoy%2Bi1SxP8u4VNNmMJj1EJCbTftqM9vUPkshnhVSF37ezpJ%2Bb15OE2H7tG08TxHRSCTxxNNsdlAWG0SKIAPVCFfwEEvZS2duVwS4LJb63k%2Bqh5oC8ughABifOdSC6R%2BFdMSEGcuhjA%2FPu7q3lxUoYUM&X-Amz-Signature=cee20a509946fcedd5573d65d56d4dfbc6d2e80a894f3c1653a0e3d3c3412753&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS24N63U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtMBERX9e06XMq7m5i23e8EdoXRUo%2BORA1T859h0VqvwIgAs7xtxRnHjzWUGWG5NA5gOl9UWxMFDfFnnLtTX%2B%2BhvYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMDc3MrezWYWQ4mhSSrcA3IDWsxfjmvyZYu%2FM4CN3C1YhcH9Z%2BloPRsq5A7gkYGlcibC3fVI4MWH1WGfGc4pXXBbjFfuICKySlTD6V%2FV71TQmznuzme2FJHuHPa0EswvCpHY71tgmvWwOskvQEwg4hS%2BEHXoCh63FDXhhMPu8NYiLYlKqNo0jNkfmLcJYKE6pTSyDjT6qZB4LchKKTKDkk3kUtuhtISgwh0Fe%2Fdh2xOSr3%2B8IrOXUmEj5hre9dBxJSoOwXgQ1%2B1OP8TlfLF%2BbngPTIFGkr63VKTYwK%2B%2BKMGoC730c7gX8cEFmnTnXdS4MiBHq7usFs3tHl7pD1oWH74xUHtpNuQALN5mbOIFHBUM225g3kSa02icfY02CVysaK%2BS1vDgyQ9kjZYSxmczvpGPGF0kVnYTyUvKQz3qgRdPdpP%2BDxxeHjsM5ZokSUDHv6Wl9gU%2FXkCQ6q7tkBPcH8yRLh9rYVrDtjqkvUWzfpPxgjoE6UBIuamDvpHVit85x7tKHsZSsKc6D7UFN%2BFBaqqQmy8ncWFpk9Fs%2Bl59bi6nWCX%2B0MAzIbXNCRzy%2Fj2zWpv8TIws4%2BkmMfa2h2PKFF054WOz%2Fpb3M4mfT3dN8JN3xsGNqJS7%2FVlwjGU8R2VthIprpD8K5AQzZL0xMJ%2FqmL8GOqUBjOt5V3u4QdX00PJGJwcnn46TXyLYhipmO590%2BnM4sLvgNbBoJ%2Fay0eGBLJcZ1MfYH9Flamoy%2Bi1SxP8u4VNNmMJj1EJCbTftqM9vUPkshnhVSF37ezpJ%2Bb15OE2H7tG08TxHRSCTxxNNsdlAWG0SKIAPVCFfwEEvZS2duVwS4LJb63k%2Bqh5oC8ughABifOdSC6R%2BFdMSEGcuhjA%2FPu7q3lxUoYUM&X-Amz-Signature=fd388d5048123c6de3ccd027c70319ebdec28162da9d05bf643214d709c15070&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
