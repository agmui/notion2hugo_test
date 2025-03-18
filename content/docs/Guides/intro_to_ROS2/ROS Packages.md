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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBDEMOI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDt0HUWYxFJFqrRAE7yg%2BEarXZgjfp%2B0xJTiVvm5p64nAiA03g%2BzFLTCZx%2BE3G36lUgJxvXEU3HrfY9VnqGbqhfuHCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMLw5do26wkJhZRaWrKtwDOwUwsRridEjeuwI%2BxHz7XcTAH%2Bwg7tXk1sf%2FNPOwNZDyQmYUlmhAkr8iun36Syt9HlZl4CxvsAbsAMXMUz2l5JhiG0nvzbNgWQpBzFJjfmqQOxZTjXzVjh16uw5EQziW2H7oLxTaWPCM%2B7mVVfVA7X58zRzlL7bW1AfUC7H9DKxveHi0yd7L90IobS8dqcW83VOXstlO%2BZ4Pa4EzukEvmej%2Bv8hL0yJv2DF%2FwbP098HoZ2UT8dxUYKk74MbaMTcnp6c1%2BshPfmJ%2FQqiU35P3gBLB5rDfPEzAMjLSpQWU1J9qR5xMzfHfpFh5ALN5xqtJ3HyloWi0g0lZEuSEB7WqNIueDqae%2BfpBcYefq20zikYlDTX2ZDW4JYxz3GliIpu1tze57FFOiLPa8vCd%2BTBzU0chFMk6tysWxkepzWE5cdHC4SKuDgh3H9K7jGJErpEZAnAphtroDr6uvVeY9e%2FL2FXmIqAwH6Zme48GGdleBuUX6qVh1Ynd1NjHwDNyehyzPWfh8qpZGRFGSWbXypEIMn3qefDWbqASw%2BA97%2BQ8hByYKVzCuLd4YW%2F3NVn3gs6zxp90NN%2BamL8Bi3brU%2FvNd5ZMCsifdq1yzyN37MAirTChMbtu1t0Z3k1kFtkwi5blvgY6pgGGVESBp%2F3r7OBoz5%2F38FiuhamieTmFb7cJeGmycQKO5t9499W08CtCD43JiXGXidJx5LJdPIEDdLE0A6rb7f0aXyaEeEFQe4Nh0smOwEwukcv%2BGO8AHixQL0VPOit0kenuvEMoCji1NFuKiuhkkwUgtv3K3GOETZAWtuTXeC3l11I18kzNPrznqnWa0PTXQ%2Bh1bnjjiW0G%2BDzHe%2BfHR7wLYd4hUVsm&X-Amz-Signature=c95571367fcb42803d6e05be747d5a3cc26bbb0921e69fd5701487ef86ff0fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBDEMOI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDt0HUWYxFJFqrRAE7yg%2BEarXZgjfp%2B0xJTiVvm5p64nAiA03g%2BzFLTCZx%2BE3G36lUgJxvXEU3HrfY9VnqGbqhfuHCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMLw5do26wkJhZRaWrKtwDOwUwsRridEjeuwI%2BxHz7XcTAH%2Bwg7tXk1sf%2FNPOwNZDyQmYUlmhAkr8iun36Syt9HlZl4CxvsAbsAMXMUz2l5JhiG0nvzbNgWQpBzFJjfmqQOxZTjXzVjh16uw5EQziW2H7oLxTaWPCM%2B7mVVfVA7X58zRzlL7bW1AfUC7H9DKxveHi0yd7L90IobS8dqcW83VOXstlO%2BZ4Pa4EzukEvmej%2Bv8hL0yJv2DF%2FwbP098HoZ2UT8dxUYKk74MbaMTcnp6c1%2BshPfmJ%2FQqiU35P3gBLB5rDfPEzAMjLSpQWU1J9qR5xMzfHfpFh5ALN5xqtJ3HyloWi0g0lZEuSEB7WqNIueDqae%2BfpBcYefq20zikYlDTX2ZDW4JYxz3GliIpu1tze57FFOiLPa8vCd%2BTBzU0chFMk6tysWxkepzWE5cdHC4SKuDgh3H9K7jGJErpEZAnAphtroDr6uvVeY9e%2FL2FXmIqAwH6Zme48GGdleBuUX6qVh1Ynd1NjHwDNyehyzPWfh8qpZGRFGSWbXypEIMn3qefDWbqASw%2BA97%2BQ8hByYKVzCuLd4YW%2F3NVn3gs6zxp90NN%2BamL8Bi3brU%2FvNd5ZMCsifdq1yzyN37MAirTChMbtu1t0Z3k1kFtkwi5blvgY6pgGGVESBp%2F3r7OBoz5%2F38FiuhamieTmFb7cJeGmycQKO5t9499W08CtCD43JiXGXidJx5LJdPIEDdLE0A6rb7f0aXyaEeEFQe4Nh0smOwEwukcv%2BGO8AHixQL0VPOit0kenuvEMoCji1NFuKiuhkkwUgtv3K3GOETZAWtuTXeC3l11I18kzNPrznqnWa0PTXQ%2Bh1bnjjiW0G%2BDzHe%2BfHR7wLYd4hUVsm&X-Amz-Signature=bf81d89085d8bbeedefea0a428f3dc9fb21c479864fe1c8fe36589847f950ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBDEMOI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDt0HUWYxFJFqrRAE7yg%2BEarXZgjfp%2B0xJTiVvm5p64nAiA03g%2BzFLTCZx%2BE3G36lUgJxvXEU3HrfY9VnqGbqhfuHCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMLw5do26wkJhZRaWrKtwDOwUwsRridEjeuwI%2BxHz7XcTAH%2Bwg7tXk1sf%2FNPOwNZDyQmYUlmhAkr8iun36Syt9HlZl4CxvsAbsAMXMUz2l5JhiG0nvzbNgWQpBzFJjfmqQOxZTjXzVjh16uw5EQziW2H7oLxTaWPCM%2B7mVVfVA7X58zRzlL7bW1AfUC7H9DKxveHi0yd7L90IobS8dqcW83VOXstlO%2BZ4Pa4EzukEvmej%2Bv8hL0yJv2DF%2FwbP098HoZ2UT8dxUYKk74MbaMTcnp6c1%2BshPfmJ%2FQqiU35P3gBLB5rDfPEzAMjLSpQWU1J9qR5xMzfHfpFh5ALN5xqtJ3HyloWi0g0lZEuSEB7WqNIueDqae%2BfpBcYefq20zikYlDTX2ZDW4JYxz3GliIpu1tze57FFOiLPa8vCd%2BTBzU0chFMk6tysWxkepzWE5cdHC4SKuDgh3H9K7jGJErpEZAnAphtroDr6uvVeY9e%2FL2FXmIqAwH6Zme48GGdleBuUX6qVh1Ynd1NjHwDNyehyzPWfh8qpZGRFGSWbXypEIMn3qefDWbqASw%2BA97%2BQ8hByYKVzCuLd4YW%2F3NVn3gs6zxp90NN%2BamL8Bi3brU%2FvNd5ZMCsifdq1yzyN37MAirTChMbtu1t0Z3k1kFtkwi5blvgY6pgGGVESBp%2F3r7OBoz5%2F38FiuhamieTmFb7cJeGmycQKO5t9499W08CtCD43JiXGXidJx5LJdPIEDdLE0A6rb7f0aXyaEeEFQe4Nh0smOwEwukcv%2BGO8AHixQL0VPOit0kenuvEMoCji1NFuKiuhkkwUgtv3K3GOETZAWtuTXeC3l11I18kzNPrznqnWa0PTXQ%2Bh1bnjjiW0G%2BDzHe%2BfHR7wLYd4hUVsm&X-Amz-Signature=10ce73d383a2f4d67f75e874ae775e4959f7eb2bac7da8f52f898b5a07fe8662&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBDEMOI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDt0HUWYxFJFqrRAE7yg%2BEarXZgjfp%2B0xJTiVvm5p64nAiA03g%2BzFLTCZx%2BE3G36lUgJxvXEU3HrfY9VnqGbqhfuHCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMLw5do26wkJhZRaWrKtwDOwUwsRridEjeuwI%2BxHz7XcTAH%2Bwg7tXk1sf%2FNPOwNZDyQmYUlmhAkr8iun36Syt9HlZl4CxvsAbsAMXMUz2l5JhiG0nvzbNgWQpBzFJjfmqQOxZTjXzVjh16uw5EQziW2H7oLxTaWPCM%2B7mVVfVA7X58zRzlL7bW1AfUC7H9DKxveHi0yd7L90IobS8dqcW83VOXstlO%2BZ4Pa4EzukEvmej%2Bv8hL0yJv2DF%2FwbP098HoZ2UT8dxUYKk74MbaMTcnp6c1%2BshPfmJ%2FQqiU35P3gBLB5rDfPEzAMjLSpQWU1J9qR5xMzfHfpFh5ALN5xqtJ3HyloWi0g0lZEuSEB7WqNIueDqae%2BfpBcYefq20zikYlDTX2ZDW4JYxz3GliIpu1tze57FFOiLPa8vCd%2BTBzU0chFMk6tysWxkepzWE5cdHC4SKuDgh3H9K7jGJErpEZAnAphtroDr6uvVeY9e%2FL2FXmIqAwH6Zme48GGdleBuUX6qVh1Ynd1NjHwDNyehyzPWfh8qpZGRFGSWbXypEIMn3qefDWbqASw%2BA97%2BQ8hByYKVzCuLd4YW%2F3NVn3gs6zxp90NN%2BamL8Bi3brU%2FvNd5ZMCsifdq1yzyN37MAirTChMbtu1t0Z3k1kFtkwi5blvgY6pgGGVESBp%2F3r7OBoz5%2F38FiuhamieTmFb7cJeGmycQKO5t9499W08CtCD43JiXGXidJx5LJdPIEDdLE0A6rb7f0aXyaEeEFQe4Nh0smOwEwukcv%2BGO8AHixQL0VPOit0kenuvEMoCji1NFuKiuhkkwUgtv3K3GOETZAWtuTXeC3l11I18kzNPrznqnWa0PTXQ%2Bh1bnjjiW0G%2BDzHe%2BfHR7wLYd4hUVsm&X-Amz-Signature=bfc4f25e7cd954fa8b470656ec756881935044074356d83e375a1d0d92831f94&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBDEMOI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDt0HUWYxFJFqrRAE7yg%2BEarXZgjfp%2B0xJTiVvm5p64nAiA03g%2BzFLTCZx%2BE3G36lUgJxvXEU3HrfY9VnqGbqhfuHCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMLw5do26wkJhZRaWrKtwDOwUwsRridEjeuwI%2BxHz7XcTAH%2Bwg7tXk1sf%2FNPOwNZDyQmYUlmhAkr8iun36Syt9HlZl4CxvsAbsAMXMUz2l5JhiG0nvzbNgWQpBzFJjfmqQOxZTjXzVjh16uw5EQziW2H7oLxTaWPCM%2B7mVVfVA7X58zRzlL7bW1AfUC7H9DKxveHi0yd7L90IobS8dqcW83VOXstlO%2BZ4Pa4EzukEvmej%2Bv8hL0yJv2DF%2FwbP098HoZ2UT8dxUYKk74MbaMTcnp6c1%2BshPfmJ%2FQqiU35P3gBLB5rDfPEzAMjLSpQWU1J9qR5xMzfHfpFh5ALN5xqtJ3HyloWi0g0lZEuSEB7WqNIueDqae%2BfpBcYefq20zikYlDTX2ZDW4JYxz3GliIpu1tze57FFOiLPa8vCd%2BTBzU0chFMk6tysWxkepzWE5cdHC4SKuDgh3H9K7jGJErpEZAnAphtroDr6uvVeY9e%2FL2FXmIqAwH6Zme48GGdleBuUX6qVh1Ynd1NjHwDNyehyzPWfh8qpZGRFGSWbXypEIMn3qefDWbqASw%2BA97%2BQ8hByYKVzCuLd4YW%2F3NVn3gs6zxp90NN%2BamL8Bi3brU%2FvNd5ZMCsifdq1yzyN37MAirTChMbtu1t0Z3k1kFtkwi5blvgY6pgGGVESBp%2F3r7OBoz5%2F38FiuhamieTmFb7cJeGmycQKO5t9499W08CtCD43JiXGXidJx5LJdPIEDdLE0A6rb7f0aXyaEeEFQe4Nh0smOwEwukcv%2BGO8AHixQL0VPOit0kenuvEMoCji1NFuKiuhkkwUgtv3K3GOETZAWtuTXeC3l11I18kzNPrznqnWa0PTXQ%2Bh1bnjjiW0G%2BDzHe%2BfHR7wLYd4hUVsm&X-Amz-Signature=a4af73cee662246faaa09844c145670efa85e9a409ab9f2ac886a2180664720d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBDEMOI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDt0HUWYxFJFqrRAE7yg%2BEarXZgjfp%2B0xJTiVvm5p64nAiA03g%2BzFLTCZx%2BE3G36lUgJxvXEU3HrfY9VnqGbqhfuHCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMLw5do26wkJhZRaWrKtwDOwUwsRridEjeuwI%2BxHz7XcTAH%2Bwg7tXk1sf%2FNPOwNZDyQmYUlmhAkr8iun36Syt9HlZl4CxvsAbsAMXMUz2l5JhiG0nvzbNgWQpBzFJjfmqQOxZTjXzVjh16uw5EQziW2H7oLxTaWPCM%2B7mVVfVA7X58zRzlL7bW1AfUC7H9DKxveHi0yd7L90IobS8dqcW83VOXstlO%2BZ4Pa4EzukEvmej%2Bv8hL0yJv2DF%2FwbP098HoZ2UT8dxUYKk74MbaMTcnp6c1%2BshPfmJ%2FQqiU35P3gBLB5rDfPEzAMjLSpQWU1J9qR5xMzfHfpFh5ALN5xqtJ3HyloWi0g0lZEuSEB7WqNIueDqae%2BfpBcYefq20zikYlDTX2ZDW4JYxz3GliIpu1tze57FFOiLPa8vCd%2BTBzU0chFMk6tysWxkepzWE5cdHC4SKuDgh3H9K7jGJErpEZAnAphtroDr6uvVeY9e%2FL2FXmIqAwH6Zme48GGdleBuUX6qVh1Ynd1NjHwDNyehyzPWfh8qpZGRFGSWbXypEIMn3qefDWbqASw%2BA97%2BQ8hByYKVzCuLd4YW%2F3NVn3gs6zxp90NN%2BamL8Bi3brU%2FvNd5ZMCsifdq1yzyN37MAirTChMbtu1t0Z3k1kFtkwi5blvgY6pgGGVESBp%2F3r7OBoz5%2F38FiuhamieTmFb7cJeGmycQKO5t9499W08CtCD43JiXGXidJx5LJdPIEDdLE0A6rb7f0aXyaEeEFQe4Nh0smOwEwukcv%2BGO8AHixQL0VPOit0kenuvEMoCji1NFuKiuhkkwUgtv3K3GOETZAWtuTXeC3l11I18kzNPrznqnWa0PTXQ%2Bh1bnjjiW0G%2BDzHe%2BfHR7wLYd4hUVsm&X-Amz-Signature=5df8ce52e76b9f817e9494c09cafc23998b1e51010cdfa7ce0cea8379ff313cd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBDEMOI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDt0HUWYxFJFqrRAE7yg%2BEarXZgjfp%2B0xJTiVvm5p64nAiA03g%2BzFLTCZx%2BE3G36lUgJxvXEU3HrfY9VnqGbqhfuHCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMLw5do26wkJhZRaWrKtwDOwUwsRridEjeuwI%2BxHz7XcTAH%2Bwg7tXk1sf%2FNPOwNZDyQmYUlmhAkr8iun36Syt9HlZl4CxvsAbsAMXMUz2l5JhiG0nvzbNgWQpBzFJjfmqQOxZTjXzVjh16uw5EQziW2H7oLxTaWPCM%2B7mVVfVA7X58zRzlL7bW1AfUC7H9DKxveHi0yd7L90IobS8dqcW83VOXstlO%2BZ4Pa4EzukEvmej%2Bv8hL0yJv2DF%2FwbP098HoZ2UT8dxUYKk74MbaMTcnp6c1%2BshPfmJ%2FQqiU35P3gBLB5rDfPEzAMjLSpQWU1J9qR5xMzfHfpFh5ALN5xqtJ3HyloWi0g0lZEuSEB7WqNIueDqae%2BfpBcYefq20zikYlDTX2ZDW4JYxz3GliIpu1tze57FFOiLPa8vCd%2BTBzU0chFMk6tysWxkepzWE5cdHC4SKuDgh3H9K7jGJErpEZAnAphtroDr6uvVeY9e%2FL2FXmIqAwH6Zme48GGdleBuUX6qVh1Ynd1NjHwDNyehyzPWfh8qpZGRFGSWbXypEIMn3qefDWbqASw%2BA97%2BQ8hByYKVzCuLd4YW%2F3NVn3gs6zxp90NN%2BamL8Bi3brU%2FvNd5ZMCsifdq1yzyN37MAirTChMbtu1t0Z3k1kFtkwi5blvgY6pgGGVESBp%2F3r7OBoz5%2F38FiuhamieTmFb7cJeGmycQKO5t9499W08CtCD43JiXGXidJx5LJdPIEDdLE0A6rb7f0aXyaEeEFQe4Nh0smOwEwukcv%2BGO8AHixQL0VPOit0kenuvEMoCji1NFuKiuhkkwUgtv3K3GOETZAWtuTXeC3l11I18kzNPrznqnWa0PTXQ%2Bh1bnjjiW0G%2BDzHe%2BfHR7wLYd4hUVsm&X-Amz-Signature=df513cd4834d24650b6178c371906e3a28b9dfce42f68339fb50ed06627403ee&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
