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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYUFUWW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjNHoAJ4YF3HZdbwtYO5bVfjrYCusSn1JS3%2FmIkMDILwIgTk6COquBB77CJ8aFqwaC9PrNbU3bDBtxJeRiMoEmGwcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHA4PyEGV%2F4%2F%2Bqe0oircA9EsxZ7voJtMxYO6okNRyAIsVUcj1ZsBnMIqcqp43a6QlSIfPtsv2VUByN3BhYhlcP2%2Fi2BYf6Ol1zMZCcM1FaPMn02DQS%2BklW7MaeazmCtSgH18jQOKrmtveIKrfy5u%2FnTW8FkCXhsPEawT3PDChgYvFSLIR%2FGT9k1%2FYkf0cv6XeHXvfqb%2Fh1lt%2BDQMl0ROxAb3kzwtcC96IqIZ3nrP5s1mvTCJL%2BlIY2YNxHqapl7%2FSVMjPZ9JxPHGX%2FADz0F4nLWqXm9i6zwNFrHPQ2mLvmcihMBUlJ3Wksml8J4gU2cBWx1N%2FnaxKpOMvp0LlapHL7iMUvXJKSuNXH0asDl%2BrhTgd8ehL4iiOGSBx3Cy6lGv8SNbuFk3PtprbKlXyMaLJwsHaC3oXqiYfqP5D8C3Dd5NwYo%2FXZd01UdrpCsNWdi8lUbsGz5d8A5sNtP6ZEz7RhSEezdY5oRQORo0rzminMy4Yv63Vy6QIJ9NS7xzWDWxsLSnLclk%2FwSIxyjc5OzZgPrfFhEG30vnFhe2P1O%2FhgcvHyhE7zHuAfhw5gz46oKgFBcm5ZAcNGo1pFv0f3%2B8BJYr0WWWz%2FI1vH7HtZRdCibiqEVcShMa9BJOEKi6%2FnJjtmwIbmrBZcY2fRFsMPWjzcMGOqUBuRNyCuGpv2WY1RYgWBwINFUluMQP8F%2FiqFj79fApADtMWFZsPt%2BibPTWla9nFYYOoLW6j22E2RPFblKIx3zpG22kiL%2BhC%2FEE2E0zKN9vvezddbcqxzrFcd0BdCoIqOujihjN9gE13hyhnXBC3GhhryFtTgpK8K1bNPDD5QDOsz4%2Fhlxx7P8A2rlINLHxJYii99mfSooAUxHSei9O2AqL9qOf1uJJ&X-Amz-Signature=02348e02cea8ac54417859587f9f3b19759bf119affc5907ee03ce32c625f197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYUFUWW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjNHoAJ4YF3HZdbwtYO5bVfjrYCusSn1JS3%2FmIkMDILwIgTk6COquBB77CJ8aFqwaC9PrNbU3bDBtxJeRiMoEmGwcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHA4PyEGV%2F4%2F%2Bqe0oircA9EsxZ7voJtMxYO6okNRyAIsVUcj1ZsBnMIqcqp43a6QlSIfPtsv2VUByN3BhYhlcP2%2Fi2BYf6Ol1zMZCcM1FaPMn02DQS%2BklW7MaeazmCtSgH18jQOKrmtveIKrfy5u%2FnTW8FkCXhsPEawT3PDChgYvFSLIR%2FGT9k1%2FYkf0cv6XeHXvfqb%2Fh1lt%2BDQMl0ROxAb3kzwtcC96IqIZ3nrP5s1mvTCJL%2BlIY2YNxHqapl7%2FSVMjPZ9JxPHGX%2FADz0F4nLWqXm9i6zwNFrHPQ2mLvmcihMBUlJ3Wksml8J4gU2cBWx1N%2FnaxKpOMvp0LlapHL7iMUvXJKSuNXH0asDl%2BrhTgd8ehL4iiOGSBx3Cy6lGv8SNbuFk3PtprbKlXyMaLJwsHaC3oXqiYfqP5D8C3Dd5NwYo%2FXZd01UdrpCsNWdi8lUbsGz5d8A5sNtP6ZEz7RhSEezdY5oRQORo0rzminMy4Yv63Vy6QIJ9NS7xzWDWxsLSnLclk%2FwSIxyjc5OzZgPrfFhEG30vnFhe2P1O%2FhgcvHyhE7zHuAfhw5gz46oKgFBcm5ZAcNGo1pFv0f3%2B8BJYr0WWWz%2FI1vH7HtZRdCibiqEVcShMa9BJOEKi6%2FnJjtmwIbmrBZcY2fRFsMPWjzcMGOqUBuRNyCuGpv2WY1RYgWBwINFUluMQP8F%2FiqFj79fApADtMWFZsPt%2BibPTWla9nFYYOoLW6j22E2RPFblKIx3zpG22kiL%2BhC%2FEE2E0zKN9vvezddbcqxzrFcd0BdCoIqOujihjN9gE13hyhnXBC3GhhryFtTgpK8K1bNPDD5QDOsz4%2Fhlxx7P8A2rlINLHxJYii99mfSooAUxHSei9O2AqL9qOf1uJJ&X-Amz-Signature=c4543458200d5b0d317ba22785dd5217523e5af574d610f492167d5ea9f72fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYUFUWW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjNHoAJ4YF3HZdbwtYO5bVfjrYCusSn1JS3%2FmIkMDILwIgTk6COquBB77CJ8aFqwaC9PrNbU3bDBtxJeRiMoEmGwcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHA4PyEGV%2F4%2F%2Bqe0oircA9EsxZ7voJtMxYO6okNRyAIsVUcj1ZsBnMIqcqp43a6QlSIfPtsv2VUByN3BhYhlcP2%2Fi2BYf6Ol1zMZCcM1FaPMn02DQS%2BklW7MaeazmCtSgH18jQOKrmtveIKrfy5u%2FnTW8FkCXhsPEawT3PDChgYvFSLIR%2FGT9k1%2FYkf0cv6XeHXvfqb%2Fh1lt%2BDQMl0ROxAb3kzwtcC96IqIZ3nrP5s1mvTCJL%2BlIY2YNxHqapl7%2FSVMjPZ9JxPHGX%2FADz0F4nLWqXm9i6zwNFrHPQ2mLvmcihMBUlJ3Wksml8J4gU2cBWx1N%2FnaxKpOMvp0LlapHL7iMUvXJKSuNXH0asDl%2BrhTgd8ehL4iiOGSBx3Cy6lGv8SNbuFk3PtprbKlXyMaLJwsHaC3oXqiYfqP5D8C3Dd5NwYo%2FXZd01UdrpCsNWdi8lUbsGz5d8A5sNtP6ZEz7RhSEezdY5oRQORo0rzminMy4Yv63Vy6QIJ9NS7xzWDWxsLSnLclk%2FwSIxyjc5OzZgPrfFhEG30vnFhe2P1O%2FhgcvHyhE7zHuAfhw5gz46oKgFBcm5ZAcNGo1pFv0f3%2B8BJYr0WWWz%2FI1vH7HtZRdCibiqEVcShMa9BJOEKi6%2FnJjtmwIbmrBZcY2fRFsMPWjzcMGOqUBuRNyCuGpv2WY1RYgWBwINFUluMQP8F%2FiqFj79fApADtMWFZsPt%2BibPTWla9nFYYOoLW6j22E2RPFblKIx3zpG22kiL%2BhC%2FEE2E0zKN9vvezddbcqxzrFcd0BdCoIqOujihjN9gE13hyhnXBC3GhhryFtTgpK8K1bNPDD5QDOsz4%2Fhlxx7P8A2rlINLHxJYii99mfSooAUxHSei9O2AqL9qOf1uJJ&X-Amz-Signature=b8f03a341dd2d94bc198208b182a1309ab4cefa8d1f67e60350c81d219b8f14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYUFUWW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjNHoAJ4YF3HZdbwtYO5bVfjrYCusSn1JS3%2FmIkMDILwIgTk6COquBB77CJ8aFqwaC9PrNbU3bDBtxJeRiMoEmGwcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHA4PyEGV%2F4%2F%2Bqe0oircA9EsxZ7voJtMxYO6okNRyAIsVUcj1ZsBnMIqcqp43a6QlSIfPtsv2VUByN3BhYhlcP2%2Fi2BYf6Ol1zMZCcM1FaPMn02DQS%2BklW7MaeazmCtSgH18jQOKrmtveIKrfy5u%2FnTW8FkCXhsPEawT3PDChgYvFSLIR%2FGT9k1%2FYkf0cv6XeHXvfqb%2Fh1lt%2BDQMl0ROxAb3kzwtcC96IqIZ3nrP5s1mvTCJL%2BlIY2YNxHqapl7%2FSVMjPZ9JxPHGX%2FADz0F4nLWqXm9i6zwNFrHPQ2mLvmcihMBUlJ3Wksml8J4gU2cBWx1N%2FnaxKpOMvp0LlapHL7iMUvXJKSuNXH0asDl%2BrhTgd8ehL4iiOGSBx3Cy6lGv8SNbuFk3PtprbKlXyMaLJwsHaC3oXqiYfqP5D8C3Dd5NwYo%2FXZd01UdrpCsNWdi8lUbsGz5d8A5sNtP6ZEz7RhSEezdY5oRQORo0rzminMy4Yv63Vy6QIJ9NS7xzWDWxsLSnLclk%2FwSIxyjc5OzZgPrfFhEG30vnFhe2P1O%2FhgcvHyhE7zHuAfhw5gz46oKgFBcm5ZAcNGo1pFv0f3%2B8BJYr0WWWz%2FI1vH7HtZRdCibiqEVcShMa9BJOEKi6%2FnJjtmwIbmrBZcY2fRFsMPWjzcMGOqUBuRNyCuGpv2WY1RYgWBwINFUluMQP8F%2FiqFj79fApADtMWFZsPt%2BibPTWla9nFYYOoLW6j22E2RPFblKIx3zpG22kiL%2BhC%2FEE2E0zKN9vvezddbcqxzrFcd0BdCoIqOujihjN9gE13hyhnXBC3GhhryFtTgpK8K1bNPDD5QDOsz4%2Fhlxx7P8A2rlINLHxJYii99mfSooAUxHSei9O2AqL9qOf1uJJ&X-Amz-Signature=6e4dd49dcc1b8974d4adcd083d7021976f789bf0cc1a15475ed1756e2a272388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYUFUWW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjNHoAJ4YF3HZdbwtYO5bVfjrYCusSn1JS3%2FmIkMDILwIgTk6COquBB77CJ8aFqwaC9PrNbU3bDBtxJeRiMoEmGwcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHA4PyEGV%2F4%2F%2Bqe0oircA9EsxZ7voJtMxYO6okNRyAIsVUcj1ZsBnMIqcqp43a6QlSIfPtsv2VUByN3BhYhlcP2%2Fi2BYf6Ol1zMZCcM1FaPMn02DQS%2BklW7MaeazmCtSgH18jQOKrmtveIKrfy5u%2FnTW8FkCXhsPEawT3PDChgYvFSLIR%2FGT9k1%2FYkf0cv6XeHXvfqb%2Fh1lt%2BDQMl0ROxAb3kzwtcC96IqIZ3nrP5s1mvTCJL%2BlIY2YNxHqapl7%2FSVMjPZ9JxPHGX%2FADz0F4nLWqXm9i6zwNFrHPQ2mLvmcihMBUlJ3Wksml8J4gU2cBWx1N%2FnaxKpOMvp0LlapHL7iMUvXJKSuNXH0asDl%2BrhTgd8ehL4iiOGSBx3Cy6lGv8SNbuFk3PtprbKlXyMaLJwsHaC3oXqiYfqP5D8C3Dd5NwYo%2FXZd01UdrpCsNWdi8lUbsGz5d8A5sNtP6ZEz7RhSEezdY5oRQORo0rzminMy4Yv63Vy6QIJ9NS7xzWDWxsLSnLclk%2FwSIxyjc5OzZgPrfFhEG30vnFhe2P1O%2FhgcvHyhE7zHuAfhw5gz46oKgFBcm5ZAcNGo1pFv0f3%2B8BJYr0WWWz%2FI1vH7HtZRdCibiqEVcShMa9BJOEKi6%2FnJjtmwIbmrBZcY2fRFsMPWjzcMGOqUBuRNyCuGpv2WY1RYgWBwINFUluMQP8F%2FiqFj79fApADtMWFZsPt%2BibPTWla9nFYYOoLW6j22E2RPFblKIx3zpG22kiL%2BhC%2FEE2E0zKN9vvezddbcqxzrFcd0BdCoIqOujihjN9gE13hyhnXBC3GhhryFtTgpK8K1bNPDD5QDOsz4%2Fhlxx7P8A2rlINLHxJYii99mfSooAUxHSei9O2AqL9qOf1uJJ&X-Amz-Signature=10fbbc20991013230972d75282dbd116b2284803165339ce7ba213cc55b5e609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYUFUWW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjNHoAJ4YF3HZdbwtYO5bVfjrYCusSn1JS3%2FmIkMDILwIgTk6COquBB77CJ8aFqwaC9PrNbU3bDBtxJeRiMoEmGwcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHA4PyEGV%2F4%2F%2Bqe0oircA9EsxZ7voJtMxYO6okNRyAIsVUcj1ZsBnMIqcqp43a6QlSIfPtsv2VUByN3BhYhlcP2%2Fi2BYf6Ol1zMZCcM1FaPMn02DQS%2BklW7MaeazmCtSgH18jQOKrmtveIKrfy5u%2FnTW8FkCXhsPEawT3PDChgYvFSLIR%2FGT9k1%2FYkf0cv6XeHXvfqb%2Fh1lt%2BDQMl0ROxAb3kzwtcC96IqIZ3nrP5s1mvTCJL%2BlIY2YNxHqapl7%2FSVMjPZ9JxPHGX%2FADz0F4nLWqXm9i6zwNFrHPQ2mLvmcihMBUlJ3Wksml8J4gU2cBWx1N%2FnaxKpOMvp0LlapHL7iMUvXJKSuNXH0asDl%2BrhTgd8ehL4iiOGSBx3Cy6lGv8SNbuFk3PtprbKlXyMaLJwsHaC3oXqiYfqP5D8C3Dd5NwYo%2FXZd01UdrpCsNWdi8lUbsGz5d8A5sNtP6ZEz7RhSEezdY5oRQORo0rzminMy4Yv63Vy6QIJ9NS7xzWDWxsLSnLclk%2FwSIxyjc5OzZgPrfFhEG30vnFhe2P1O%2FhgcvHyhE7zHuAfhw5gz46oKgFBcm5ZAcNGo1pFv0f3%2B8BJYr0WWWz%2FI1vH7HtZRdCibiqEVcShMa9BJOEKi6%2FnJjtmwIbmrBZcY2fRFsMPWjzcMGOqUBuRNyCuGpv2WY1RYgWBwINFUluMQP8F%2FiqFj79fApADtMWFZsPt%2BibPTWla9nFYYOoLW6j22E2RPFblKIx3zpG22kiL%2BhC%2FEE2E0zKN9vvezddbcqxzrFcd0BdCoIqOujihjN9gE13hyhnXBC3GhhryFtTgpK8K1bNPDD5QDOsz4%2Fhlxx7P8A2rlINLHxJYii99mfSooAUxHSei9O2AqL9qOf1uJJ&X-Amz-Signature=313daf9dae47e275eb531eb833c7faf258db52d14398b4d947e8244ccdbe594c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYUFUWW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjNHoAJ4YF3HZdbwtYO5bVfjrYCusSn1JS3%2FmIkMDILwIgTk6COquBB77CJ8aFqwaC9PrNbU3bDBtxJeRiMoEmGwcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHA4PyEGV%2F4%2F%2Bqe0oircA9EsxZ7voJtMxYO6okNRyAIsVUcj1ZsBnMIqcqp43a6QlSIfPtsv2VUByN3BhYhlcP2%2Fi2BYf6Ol1zMZCcM1FaPMn02DQS%2BklW7MaeazmCtSgH18jQOKrmtveIKrfy5u%2FnTW8FkCXhsPEawT3PDChgYvFSLIR%2FGT9k1%2FYkf0cv6XeHXvfqb%2Fh1lt%2BDQMl0ROxAb3kzwtcC96IqIZ3nrP5s1mvTCJL%2BlIY2YNxHqapl7%2FSVMjPZ9JxPHGX%2FADz0F4nLWqXm9i6zwNFrHPQ2mLvmcihMBUlJ3Wksml8J4gU2cBWx1N%2FnaxKpOMvp0LlapHL7iMUvXJKSuNXH0asDl%2BrhTgd8ehL4iiOGSBx3Cy6lGv8SNbuFk3PtprbKlXyMaLJwsHaC3oXqiYfqP5D8C3Dd5NwYo%2FXZd01UdrpCsNWdi8lUbsGz5d8A5sNtP6ZEz7RhSEezdY5oRQORo0rzminMy4Yv63Vy6QIJ9NS7xzWDWxsLSnLclk%2FwSIxyjc5OzZgPrfFhEG30vnFhe2P1O%2FhgcvHyhE7zHuAfhw5gz46oKgFBcm5ZAcNGo1pFv0f3%2B8BJYr0WWWz%2FI1vH7HtZRdCibiqEVcShMa9BJOEKi6%2FnJjtmwIbmrBZcY2fRFsMPWjzcMGOqUBuRNyCuGpv2WY1RYgWBwINFUluMQP8F%2FiqFj79fApADtMWFZsPt%2BibPTWla9nFYYOoLW6j22E2RPFblKIx3zpG22kiL%2BhC%2FEE2E0zKN9vvezddbcqxzrFcd0BdCoIqOujihjN9gE13hyhnXBC3GhhryFtTgpK8K1bNPDD5QDOsz4%2Fhlxx7P8A2rlINLHxJYii99mfSooAUxHSei9O2AqL9qOf1uJJ&X-Amz-Signature=e0688af48dc5e4f317c04a4dcc2c77e6629e54c58d80fa670b1f98b754862faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
