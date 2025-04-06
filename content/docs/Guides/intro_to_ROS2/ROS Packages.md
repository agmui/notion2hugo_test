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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQWEV4G%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BBwX%2BTdVqYukn0mYpjKpaTKltKWU6rbzdNTFYxJKrQIgZAu9FxlxI2q5jiVSaO3lHyQIPqNyVlppMaLdn1det7cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDF25b8b52Ikdxxw6ZSrcA%2FrAOPnXHsU%2FExb9GslcCjEsQVxljB8ndYxcP3R6fyQnkhPfrN%2BDaUA5%2BsiacBHA7D%2FcAImVmlSZg0BHOi%2FzPOskS%2BqkA8tbTZvIJDirNmbDdwEU7QaX%2BURPHNBGhiAYKdyrlPmqxBx3w6UTZY%2Br0X2CE%2B%2BrrnLJPWOWtjyGulvDulZJ0iDosE4m%2B%2B5Gjw5uEDhWAH%2BDvjelca%2B%2B%2BfAvByorK2CfEpoCaFfajfHKtiq8NN%2B9UHqL6Cnuy9CCvgj1PiRQFLlQzBPHquu5GnMPGkRcCFvB3vEigfpt5bztdTPPZqq2UZUkknUtVYHxO9MOFgzzWyNC3tCz8X1%2Fg3sjaF2l73CgGEo8j4U6JGI3V2rj10ys%2BoJYPCKfqw3cT2pGzlBISWFwuAo7q0I18SPhLHRbwWemXw%2F79an6QN7XuyyhihybwIQYii5ptrfmyq2A6SGlszZAcv0EHevWt0JUOqZcieTm3KK10qEjVXpPSgcO8rBVPdhLLJd1%2BjZLILucHObSweoPOMTgFPMBhB7dlOKphLY1kIoCLJ6rL1R8xA6mW6ij4H9NPOAqCpDs7LkOxreLGTEQXvHm1SoGVklayv1XYiTvKgcsLA54MZJHllWmFWxzCacrc4m4PoESMKyiyr8GOqUBgNHEdWyKL10Bvq0CyVPDer3%2BUT2d5ji47z2odOWc2h%2BN%2BbGOZRhcEtc%2F%2BFL3ywj9sGmOZPW3fi5NpUloz7Y8D%2BQFUWp9WHpmDYFcC2yPQ91dY8Lp8j3bhelon4VmdZJugT%2FcMJqptw98f9f42bsMB5Nn8mFIM6wCPqZQ0vrvuKuN3q9b5th14mGdkNNFP4k9jZga8y%2BxfH75Vkx4G06wYolSFmSq&X-Amz-Signature=3fda065c315c8ce2f1a87dcabf394ba1f8f107dd9ea1366f51863aac7df0df69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQWEV4G%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BBwX%2BTdVqYukn0mYpjKpaTKltKWU6rbzdNTFYxJKrQIgZAu9FxlxI2q5jiVSaO3lHyQIPqNyVlppMaLdn1det7cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDF25b8b52Ikdxxw6ZSrcA%2FrAOPnXHsU%2FExb9GslcCjEsQVxljB8ndYxcP3R6fyQnkhPfrN%2BDaUA5%2BsiacBHA7D%2FcAImVmlSZg0BHOi%2FzPOskS%2BqkA8tbTZvIJDirNmbDdwEU7QaX%2BURPHNBGhiAYKdyrlPmqxBx3w6UTZY%2Br0X2CE%2B%2BrrnLJPWOWtjyGulvDulZJ0iDosE4m%2B%2B5Gjw5uEDhWAH%2BDvjelca%2B%2B%2BfAvByorK2CfEpoCaFfajfHKtiq8NN%2B9UHqL6Cnuy9CCvgj1PiRQFLlQzBPHquu5GnMPGkRcCFvB3vEigfpt5bztdTPPZqq2UZUkknUtVYHxO9MOFgzzWyNC3tCz8X1%2Fg3sjaF2l73CgGEo8j4U6JGI3V2rj10ys%2BoJYPCKfqw3cT2pGzlBISWFwuAo7q0I18SPhLHRbwWemXw%2F79an6QN7XuyyhihybwIQYii5ptrfmyq2A6SGlszZAcv0EHevWt0JUOqZcieTm3KK10qEjVXpPSgcO8rBVPdhLLJd1%2BjZLILucHObSweoPOMTgFPMBhB7dlOKphLY1kIoCLJ6rL1R8xA6mW6ij4H9NPOAqCpDs7LkOxreLGTEQXvHm1SoGVklayv1XYiTvKgcsLA54MZJHllWmFWxzCacrc4m4PoESMKyiyr8GOqUBgNHEdWyKL10Bvq0CyVPDer3%2BUT2d5ji47z2odOWc2h%2BN%2BbGOZRhcEtc%2F%2BFL3ywj9sGmOZPW3fi5NpUloz7Y8D%2BQFUWp9WHpmDYFcC2yPQ91dY8Lp8j3bhelon4VmdZJugT%2FcMJqptw98f9f42bsMB5Nn8mFIM6wCPqZQ0vrvuKuN3q9b5th14mGdkNNFP4k9jZga8y%2BxfH75Vkx4G06wYolSFmSq&X-Amz-Signature=e21a169efaa342a48135f103b3f4a9e0cc876b74560447ec42173adb7b53cf1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQWEV4G%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BBwX%2BTdVqYukn0mYpjKpaTKltKWU6rbzdNTFYxJKrQIgZAu9FxlxI2q5jiVSaO3lHyQIPqNyVlppMaLdn1det7cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDF25b8b52Ikdxxw6ZSrcA%2FrAOPnXHsU%2FExb9GslcCjEsQVxljB8ndYxcP3R6fyQnkhPfrN%2BDaUA5%2BsiacBHA7D%2FcAImVmlSZg0BHOi%2FzPOskS%2BqkA8tbTZvIJDirNmbDdwEU7QaX%2BURPHNBGhiAYKdyrlPmqxBx3w6UTZY%2Br0X2CE%2B%2BrrnLJPWOWtjyGulvDulZJ0iDosE4m%2B%2B5Gjw5uEDhWAH%2BDvjelca%2B%2B%2BfAvByorK2CfEpoCaFfajfHKtiq8NN%2B9UHqL6Cnuy9CCvgj1PiRQFLlQzBPHquu5GnMPGkRcCFvB3vEigfpt5bztdTPPZqq2UZUkknUtVYHxO9MOFgzzWyNC3tCz8X1%2Fg3sjaF2l73CgGEo8j4U6JGI3V2rj10ys%2BoJYPCKfqw3cT2pGzlBISWFwuAo7q0I18SPhLHRbwWemXw%2F79an6QN7XuyyhihybwIQYii5ptrfmyq2A6SGlszZAcv0EHevWt0JUOqZcieTm3KK10qEjVXpPSgcO8rBVPdhLLJd1%2BjZLILucHObSweoPOMTgFPMBhB7dlOKphLY1kIoCLJ6rL1R8xA6mW6ij4H9NPOAqCpDs7LkOxreLGTEQXvHm1SoGVklayv1XYiTvKgcsLA54MZJHllWmFWxzCacrc4m4PoESMKyiyr8GOqUBgNHEdWyKL10Bvq0CyVPDer3%2BUT2d5ji47z2odOWc2h%2BN%2BbGOZRhcEtc%2F%2BFL3ywj9sGmOZPW3fi5NpUloz7Y8D%2BQFUWp9WHpmDYFcC2yPQ91dY8Lp8j3bhelon4VmdZJugT%2FcMJqptw98f9f42bsMB5Nn8mFIM6wCPqZQ0vrvuKuN3q9b5th14mGdkNNFP4k9jZga8y%2BxfH75Vkx4G06wYolSFmSq&X-Amz-Signature=ad30e6a65c06e1bb0eaa9ecde2a01e4c08f9eaa76fd4738c823d13d9bc967b29&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQWEV4G%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BBwX%2BTdVqYukn0mYpjKpaTKltKWU6rbzdNTFYxJKrQIgZAu9FxlxI2q5jiVSaO3lHyQIPqNyVlppMaLdn1det7cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDF25b8b52Ikdxxw6ZSrcA%2FrAOPnXHsU%2FExb9GslcCjEsQVxljB8ndYxcP3R6fyQnkhPfrN%2BDaUA5%2BsiacBHA7D%2FcAImVmlSZg0BHOi%2FzPOskS%2BqkA8tbTZvIJDirNmbDdwEU7QaX%2BURPHNBGhiAYKdyrlPmqxBx3w6UTZY%2Br0X2CE%2B%2BrrnLJPWOWtjyGulvDulZJ0iDosE4m%2B%2B5Gjw5uEDhWAH%2BDvjelca%2B%2B%2BfAvByorK2CfEpoCaFfajfHKtiq8NN%2B9UHqL6Cnuy9CCvgj1PiRQFLlQzBPHquu5GnMPGkRcCFvB3vEigfpt5bztdTPPZqq2UZUkknUtVYHxO9MOFgzzWyNC3tCz8X1%2Fg3sjaF2l73CgGEo8j4U6JGI3V2rj10ys%2BoJYPCKfqw3cT2pGzlBISWFwuAo7q0I18SPhLHRbwWemXw%2F79an6QN7XuyyhihybwIQYii5ptrfmyq2A6SGlszZAcv0EHevWt0JUOqZcieTm3KK10qEjVXpPSgcO8rBVPdhLLJd1%2BjZLILucHObSweoPOMTgFPMBhB7dlOKphLY1kIoCLJ6rL1R8xA6mW6ij4H9NPOAqCpDs7LkOxreLGTEQXvHm1SoGVklayv1XYiTvKgcsLA54MZJHllWmFWxzCacrc4m4PoESMKyiyr8GOqUBgNHEdWyKL10Bvq0CyVPDer3%2BUT2d5ji47z2odOWc2h%2BN%2BbGOZRhcEtc%2F%2BFL3ywj9sGmOZPW3fi5NpUloz7Y8D%2BQFUWp9WHpmDYFcC2yPQ91dY8Lp8j3bhelon4VmdZJugT%2FcMJqptw98f9f42bsMB5Nn8mFIM6wCPqZQ0vrvuKuN3q9b5th14mGdkNNFP4k9jZga8y%2BxfH75Vkx4G06wYolSFmSq&X-Amz-Signature=74b83243dcd862882857ed8148cc2aaadebd670c57483bb0f8628e3f5aa1d513&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQWEV4G%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BBwX%2BTdVqYukn0mYpjKpaTKltKWU6rbzdNTFYxJKrQIgZAu9FxlxI2q5jiVSaO3lHyQIPqNyVlppMaLdn1det7cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDF25b8b52Ikdxxw6ZSrcA%2FrAOPnXHsU%2FExb9GslcCjEsQVxljB8ndYxcP3R6fyQnkhPfrN%2BDaUA5%2BsiacBHA7D%2FcAImVmlSZg0BHOi%2FzPOskS%2BqkA8tbTZvIJDirNmbDdwEU7QaX%2BURPHNBGhiAYKdyrlPmqxBx3w6UTZY%2Br0X2CE%2B%2BrrnLJPWOWtjyGulvDulZJ0iDosE4m%2B%2B5Gjw5uEDhWAH%2BDvjelca%2B%2B%2BfAvByorK2CfEpoCaFfajfHKtiq8NN%2B9UHqL6Cnuy9CCvgj1PiRQFLlQzBPHquu5GnMPGkRcCFvB3vEigfpt5bztdTPPZqq2UZUkknUtVYHxO9MOFgzzWyNC3tCz8X1%2Fg3sjaF2l73CgGEo8j4U6JGI3V2rj10ys%2BoJYPCKfqw3cT2pGzlBISWFwuAo7q0I18SPhLHRbwWemXw%2F79an6QN7XuyyhihybwIQYii5ptrfmyq2A6SGlszZAcv0EHevWt0JUOqZcieTm3KK10qEjVXpPSgcO8rBVPdhLLJd1%2BjZLILucHObSweoPOMTgFPMBhB7dlOKphLY1kIoCLJ6rL1R8xA6mW6ij4H9NPOAqCpDs7LkOxreLGTEQXvHm1SoGVklayv1XYiTvKgcsLA54MZJHllWmFWxzCacrc4m4PoESMKyiyr8GOqUBgNHEdWyKL10Bvq0CyVPDer3%2BUT2d5ji47z2odOWc2h%2BN%2BbGOZRhcEtc%2F%2BFL3ywj9sGmOZPW3fi5NpUloz7Y8D%2BQFUWp9WHpmDYFcC2yPQ91dY8Lp8j3bhelon4VmdZJugT%2FcMJqptw98f9f42bsMB5Nn8mFIM6wCPqZQ0vrvuKuN3q9b5th14mGdkNNFP4k9jZga8y%2BxfH75Vkx4G06wYolSFmSq&X-Amz-Signature=b224980326a24119f89a8acb91b1612a9707aded419cde80dbbfd92954660457&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQWEV4G%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BBwX%2BTdVqYukn0mYpjKpaTKltKWU6rbzdNTFYxJKrQIgZAu9FxlxI2q5jiVSaO3lHyQIPqNyVlppMaLdn1det7cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDF25b8b52Ikdxxw6ZSrcA%2FrAOPnXHsU%2FExb9GslcCjEsQVxljB8ndYxcP3R6fyQnkhPfrN%2BDaUA5%2BsiacBHA7D%2FcAImVmlSZg0BHOi%2FzPOskS%2BqkA8tbTZvIJDirNmbDdwEU7QaX%2BURPHNBGhiAYKdyrlPmqxBx3w6UTZY%2Br0X2CE%2B%2BrrnLJPWOWtjyGulvDulZJ0iDosE4m%2B%2B5Gjw5uEDhWAH%2BDvjelca%2B%2B%2BfAvByorK2CfEpoCaFfajfHKtiq8NN%2B9UHqL6Cnuy9CCvgj1PiRQFLlQzBPHquu5GnMPGkRcCFvB3vEigfpt5bztdTPPZqq2UZUkknUtVYHxO9MOFgzzWyNC3tCz8X1%2Fg3sjaF2l73CgGEo8j4U6JGI3V2rj10ys%2BoJYPCKfqw3cT2pGzlBISWFwuAo7q0I18SPhLHRbwWemXw%2F79an6QN7XuyyhihybwIQYii5ptrfmyq2A6SGlszZAcv0EHevWt0JUOqZcieTm3KK10qEjVXpPSgcO8rBVPdhLLJd1%2BjZLILucHObSweoPOMTgFPMBhB7dlOKphLY1kIoCLJ6rL1R8xA6mW6ij4H9NPOAqCpDs7LkOxreLGTEQXvHm1SoGVklayv1XYiTvKgcsLA54MZJHllWmFWxzCacrc4m4PoESMKyiyr8GOqUBgNHEdWyKL10Bvq0CyVPDer3%2BUT2d5ji47z2odOWc2h%2BN%2BbGOZRhcEtc%2F%2BFL3ywj9sGmOZPW3fi5NpUloz7Y8D%2BQFUWp9WHpmDYFcC2yPQ91dY8Lp8j3bhelon4VmdZJugT%2FcMJqptw98f9f42bsMB5Nn8mFIM6wCPqZQ0vrvuKuN3q9b5th14mGdkNNFP4k9jZga8y%2BxfH75Vkx4G06wYolSFmSq&X-Amz-Signature=82e057bbedb674c76f61c7be767b6b959a724111b9156e98d7f542bb989b2e13&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQWEV4G%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BBwX%2BTdVqYukn0mYpjKpaTKltKWU6rbzdNTFYxJKrQIgZAu9FxlxI2q5jiVSaO3lHyQIPqNyVlppMaLdn1det7cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDF25b8b52Ikdxxw6ZSrcA%2FrAOPnXHsU%2FExb9GslcCjEsQVxljB8ndYxcP3R6fyQnkhPfrN%2BDaUA5%2BsiacBHA7D%2FcAImVmlSZg0BHOi%2FzPOskS%2BqkA8tbTZvIJDirNmbDdwEU7QaX%2BURPHNBGhiAYKdyrlPmqxBx3w6UTZY%2Br0X2CE%2B%2BrrnLJPWOWtjyGulvDulZJ0iDosE4m%2B%2B5Gjw5uEDhWAH%2BDvjelca%2B%2B%2BfAvByorK2CfEpoCaFfajfHKtiq8NN%2B9UHqL6Cnuy9CCvgj1PiRQFLlQzBPHquu5GnMPGkRcCFvB3vEigfpt5bztdTPPZqq2UZUkknUtVYHxO9MOFgzzWyNC3tCz8X1%2Fg3sjaF2l73CgGEo8j4U6JGI3V2rj10ys%2BoJYPCKfqw3cT2pGzlBISWFwuAo7q0I18SPhLHRbwWemXw%2F79an6QN7XuyyhihybwIQYii5ptrfmyq2A6SGlszZAcv0EHevWt0JUOqZcieTm3KK10qEjVXpPSgcO8rBVPdhLLJd1%2BjZLILucHObSweoPOMTgFPMBhB7dlOKphLY1kIoCLJ6rL1R8xA6mW6ij4H9NPOAqCpDs7LkOxreLGTEQXvHm1SoGVklayv1XYiTvKgcsLA54MZJHllWmFWxzCacrc4m4PoESMKyiyr8GOqUBgNHEdWyKL10Bvq0CyVPDer3%2BUT2d5ji47z2odOWc2h%2BN%2BbGOZRhcEtc%2F%2BFL3ywj9sGmOZPW3fi5NpUloz7Y8D%2BQFUWp9WHpmDYFcC2yPQ91dY8Lp8j3bhelon4VmdZJugT%2FcMJqptw98f9f42bsMB5Nn8mFIM6wCPqZQ0vrvuKuN3q9b5th14mGdkNNFP4k9jZga8y%2BxfH75Vkx4G06wYolSFmSq&X-Amz-Signature=267ba600b794aa7eacc350d3e858a84a5f8b8fb9c26db5ded7716fc9d4f0545d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
