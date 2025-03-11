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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWMG4LK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD2nlIwUvQy2bRq57L7YbKFB4pnpSC1TQ1%2F9cvLcJs5iQIhALYjlT6s35zWWsqpngH9m5lHOOpfVlQ5VZD8lekMMGptKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeTB9H170iqgnbXj4q3ANmYqFOsTyBY6Beiqc4XIi%2BBwCPMr0rRVI9D4AWav%2By2pryRKxgWAzDuTLP%2BqMeWfSmqis%2Fznwaj4SFoOLh0jxkVEGbNCNweu1LqSH4VyLl53GmXZO8X%2Fm%2Bq0blK1NkMvIgQAGXRrlL01A7Ygxs4%2Brn9JnR9qwKEgFgvQC%2F8IReAiejaVEfbFQ1ZmwJlIs%2BUrU2WQYCWx3N3Lt2ebKyiPL6USwM3zJN1I3WbmKfgP9Hf%2FMastDJRqBPn36NsfU%2BgaMdJhNa6IhXxEuYCRmR%2Fg1O6zK3pG0vIPAvHqGGFlaGPK9RMtxhn34ryjd473nz6J3SEEbcyGoU4goG5TlSSBobw0oeNCcqOE%2BeSpKRvEx8gZejzshJRVkq86Ckh6e%2FRmlMyeZcwSxYA%2BdFBnNZtDJRjvIU4HzDDMd9VY%2FjKeQMsyao0sIo%2BQNw8g7tzLuVITLYJlYl2XAJPQcGmMtlw2p2EetJ%2Ftaw0ztzCJv%2FL2HXo3hjMfUhqnNsS7HVW48EzjV6lsY1gRQBkT8Vwtxx66UTsCn8P9y6503mLoyGwKdvCEl4himnfxa3K%2BmaHv%2Boja7dhT7jIfwKKOeZ9%2BYT7bk1PtTVhII%2BEvJ4nY6NXGL7kcr1GOiGpbgx5CKu%2BDDsi8G%2BBjqkAYxfoaPfuYd80jomfg6mJb9qdeGBp4ejjo5E0Pb3GCZ2r%2Fo1DG2SIgVeSXBSLlpqmQHjfsHmlEStzaM2lvw4Iy7tETWAMbMXs%2FrJkb1BVwiW7E8kMR8zYDqZO%2FNF4zQ1TY%2FVDzQfvF5Foo%2FAeQ57Dil1yZmrwUE%2BCDyLCP0uTCILu3bEo9P0oP2%2FPKCJxg79sjF0YwKubQpPmtD69otPR9GlXlIk&X-Amz-Signature=7d964301a38ec5630c189aa70b5f1de02e04066aa278ecb16208fecc8d3c158b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWMG4LK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD2nlIwUvQy2bRq57L7YbKFB4pnpSC1TQ1%2F9cvLcJs5iQIhALYjlT6s35zWWsqpngH9m5lHOOpfVlQ5VZD8lekMMGptKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeTB9H170iqgnbXj4q3ANmYqFOsTyBY6Beiqc4XIi%2BBwCPMr0rRVI9D4AWav%2By2pryRKxgWAzDuTLP%2BqMeWfSmqis%2Fznwaj4SFoOLh0jxkVEGbNCNweu1LqSH4VyLl53GmXZO8X%2Fm%2Bq0blK1NkMvIgQAGXRrlL01A7Ygxs4%2Brn9JnR9qwKEgFgvQC%2F8IReAiejaVEfbFQ1ZmwJlIs%2BUrU2WQYCWx3N3Lt2ebKyiPL6USwM3zJN1I3WbmKfgP9Hf%2FMastDJRqBPn36NsfU%2BgaMdJhNa6IhXxEuYCRmR%2Fg1O6zK3pG0vIPAvHqGGFlaGPK9RMtxhn34ryjd473nz6J3SEEbcyGoU4goG5TlSSBobw0oeNCcqOE%2BeSpKRvEx8gZejzshJRVkq86Ckh6e%2FRmlMyeZcwSxYA%2BdFBnNZtDJRjvIU4HzDDMd9VY%2FjKeQMsyao0sIo%2BQNw8g7tzLuVITLYJlYl2XAJPQcGmMtlw2p2EetJ%2Ftaw0ztzCJv%2FL2HXo3hjMfUhqnNsS7HVW48EzjV6lsY1gRQBkT8Vwtxx66UTsCn8P9y6503mLoyGwKdvCEl4himnfxa3K%2BmaHv%2Boja7dhT7jIfwKKOeZ9%2BYT7bk1PtTVhII%2BEvJ4nY6NXGL7kcr1GOiGpbgx5CKu%2BDDsi8G%2BBjqkAYxfoaPfuYd80jomfg6mJb9qdeGBp4ejjo5E0Pb3GCZ2r%2Fo1DG2SIgVeSXBSLlpqmQHjfsHmlEStzaM2lvw4Iy7tETWAMbMXs%2FrJkb1BVwiW7E8kMR8zYDqZO%2FNF4zQ1TY%2FVDzQfvF5Foo%2FAeQ57Dil1yZmrwUE%2BCDyLCP0uTCILu3bEo9P0oP2%2FPKCJxg79sjF0YwKubQpPmtD69otPR9GlXlIk&X-Amz-Signature=d8d55958b5b3b877a8125ed1f1ec4ef9f899a996e787cad853ee528d32ce220c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWMG4LK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD2nlIwUvQy2bRq57L7YbKFB4pnpSC1TQ1%2F9cvLcJs5iQIhALYjlT6s35zWWsqpngH9m5lHOOpfVlQ5VZD8lekMMGptKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeTB9H170iqgnbXj4q3ANmYqFOsTyBY6Beiqc4XIi%2BBwCPMr0rRVI9D4AWav%2By2pryRKxgWAzDuTLP%2BqMeWfSmqis%2Fznwaj4SFoOLh0jxkVEGbNCNweu1LqSH4VyLl53GmXZO8X%2Fm%2Bq0blK1NkMvIgQAGXRrlL01A7Ygxs4%2Brn9JnR9qwKEgFgvQC%2F8IReAiejaVEfbFQ1ZmwJlIs%2BUrU2WQYCWx3N3Lt2ebKyiPL6USwM3zJN1I3WbmKfgP9Hf%2FMastDJRqBPn36NsfU%2BgaMdJhNa6IhXxEuYCRmR%2Fg1O6zK3pG0vIPAvHqGGFlaGPK9RMtxhn34ryjd473nz6J3SEEbcyGoU4goG5TlSSBobw0oeNCcqOE%2BeSpKRvEx8gZejzshJRVkq86Ckh6e%2FRmlMyeZcwSxYA%2BdFBnNZtDJRjvIU4HzDDMd9VY%2FjKeQMsyao0sIo%2BQNw8g7tzLuVITLYJlYl2XAJPQcGmMtlw2p2EetJ%2Ftaw0ztzCJv%2FL2HXo3hjMfUhqnNsS7HVW48EzjV6lsY1gRQBkT8Vwtxx66UTsCn8P9y6503mLoyGwKdvCEl4himnfxa3K%2BmaHv%2Boja7dhT7jIfwKKOeZ9%2BYT7bk1PtTVhII%2BEvJ4nY6NXGL7kcr1GOiGpbgx5CKu%2BDDsi8G%2BBjqkAYxfoaPfuYd80jomfg6mJb9qdeGBp4ejjo5E0Pb3GCZ2r%2Fo1DG2SIgVeSXBSLlpqmQHjfsHmlEStzaM2lvw4Iy7tETWAMbMXs%2FrJkb1BVwiW7E8kMR8zYDqZO%2FNF4zQ1TY%2FVDzQfvF5Foo%2FAeQ57Dil1yZmrwUE%2BCDyLCP0uTCILu3bEo9P0oP2%2FPKCJxg79sjF0YwKubQpPmtD69otPR9GlXlIk&X-Amz-Signature=f1f3b9b73747bddb0390d19045f1cc4efafc70bc901f24dd4aa358dd45b40e56&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWMG4LK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD2nlIwUvQy2bRq57L7YbKFB4pnpSC1TQ1%2F9cvLcJs5iQIhALYjlT6s35zWWsqpngH9m5lHOOpfVlQ5VZD8lekMMGptKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeTB9H170iqgnbXj4q3ANmYqFOsTyBY6Beiqc4XIi%2BBwCPMr0rRVI9D4AWav%2By2pryRKxgWAzDuTLP%2BqMeWfSmqis%2Fznwaj4SFoOLh0jxkVEGbNCNweu1LqSH4VyLl53GmXZO8X%2Fm%2Bq0blK1NkMvIgQAGXRrlL01A7Ygxs4%2Brn9JnR9qwKEgFgvQC%2F8IReAiejaVEfbFQ1ZmwJlIs%2BUrU2WQYCWx3N3Lt2ebKyiPL6USwM3zJN1I3WbmKfgP9Hf%2FMastDJRqBPn36NsfU%2BgaMdJhNa6IhXxEuYCRmR%2Fg1O6zK3pG0vIPAvHqGGFlaGPK9RMtxhn34ryjd473nz6J3SEEbcyGoU4goG5TlSSBobw0oeNCcqOE%2BeSpKRvEx8gZejzshJRVkq86Ckh6e%2FRmlMyeZcwSxYA%2BdFBnNZtDJRjvIU4HzDDMd9VY%2FjKeQMsyao0sIo%2BQNw8g7tzLuVITLYJlYl2XAJPQcGmMtlw2p2EetJ%2Ftaw0ztzCJv%2FL2HXo3hjMfUhqnNsS7HVW48EzjV6lsY1gRQBkT8Vwtxx66UTsCn8P9y6503mLoyGwKdvCEl4himnfxa3K%2BmaHv%2Boja7dhT7jIfwKKOeZ9%2BYT7bk1PtTVhII%2BEvJ4nY6NXGL7kcr1GOiGpbgx5CKu%2BDDsi8G%2BBjqkAYxfoaPfuYd80jomfg6mJb9qdeGBp4ejjo5E0Pb3GCZ2r%2Fo1DG2SIgVeSXBSLlpqmQHjfsHmlEStzaM2lvw4Iy7tETWAMbMXs%2FrJkb1BVwiW7E8kMR8zYDqZO%2FNF4zQ1TY%2FVDzQfvF5Foo%2FAeQ57Dil1yZmrwUE%2BCDyLCP0uTCILu3bEo9P0oP2%2FPKCJxg79sjF0YwKubQpPmtD69otPR9GlXlIk&X-Amz-Signature=2b4864d8e66ab49d245dfc30e5c40d7c3ecc1c28bd3e9c1a1c80b0515ee89cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWMG4LK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD2nlIwUvQy2bRq57L7YbKFB4pnpSC1TQ1%2F9cvLcJs5iQIhALYjlT6s35zWWsqpngH9m5lHOOpfVlQ5VZD8lekMMGptKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeTB9H170iqgnbXj4q3ANmYqFOsTyBY6Beiqc4XIi%2BBwCPMr0rRVI9D4AWav%2By2pryRKxgWAzDuTLP%2BqMeWfSmqis%2Fznwaj4SFoOLh0jxkVEGbNCNweu1LqSH4VyLl53GmXZO8X%2Fm%2Bq0blK1NkMvIgQAGXRrlL01A7Ygxs4%2Brn9JnR9qwKEgFgvQC%2F8IReAiejaVEfbFQ1ZmwJlIs%2BUrU2WQYCWx3N3Lt2ebKyiPL6USwM3zJN1I3WbmKfgP9Hf%2FMastDJRqBPn36NsfU%2BgaMdJhNa6IhXxEuYCRmR%2Fg1O6zK3pG0vIPAvHqGGFlaGPK9RMtxhn34ryjd473nz6J3SEEbcyGoU4goG5TlSSBobw0oeNCcqOE%2BeSpKRvEx8gZejzshJRVkq86Ckh6e%2FRmlMyeZcwSxYA%2BdFBnNZtDJRjvIU4HzDDMd9VY%2FjKeQMsyao0sIo%2BQNw8g7tzLuVITLYJlYl2XAJPQcGmMtlw2p2EetJ%2Ftaw0ztzCJv%2FL2HXo3hjMfUhqnNsS7HVW48EzjV6lsY1gRQBkT8Vwtxx66UTsCn8P9y6503mLoyGwKdvCEl4himnfxa3K%2BmaHv%2Boja7dhT7jIfwKKOeZ9%2BYT7bk1PtTVhII%2BEvJ4nY6NXGL7kcr1GOiGpbgx5CKu%2BDDsi8G%2BBjqkAYxfoaPfuYd80jomfg6mJb9qdeGBp4ejjo5E0Pb3GCZ2r%2Fo1DG2SIgVeSXBSLlpqmQHjfsHmlEStzaM2lvw4Iy7tETWAMbMXs%2FrJkb1BVwiW7E8kMR8zYDqZO%2FNF4zQ1TY%2FVDzQfvF5Foo%2FAeQ57Dil1yZmrwUE%2BCDyLCP0uTCILu3bEo9P0oP2%2FPKCJxg79sjF0YwKubQpPmtD69otPR9GlXlIk&X-Amz-Signature=82a362dadb11a2891b877b62d30d94bd35191bcce7351cee93d12e7de0c087aa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWMG4LK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD2nlIwUvQy2bRq57L7YbKFB4pnpSC1TQ1%2F9cvLcJs5iQIhALYjlT6s35zWWsqpngH9m5lHOOpfVlQ5VZD8lekMMGptKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeTB9H170iqgnbXj4q3ANmYqFOsTyBY6Beiqc4XIi%2BBwCPMr0rRVI9D4AWav%2By2pryRKxgWAzDuTLP%2BqMeWfSmqis%2Fznwaj4SFoOLh0jxkVEGbNCNweu1LqSH4VyLl53GmXZO8X%2Fm%2Bq0blK1NkMvIgQAGXRrlL01A7Ygxs4%2Brn9JnR9qwKEgFgvQC%2F8IReAiejaVEfbFQ1ZmwJlIs%2BUrU2WQYCWx3N3Lt2ebKyiPL6USwM3zJN1I3WbmKfgP9Hf%2FMastDJRqBPn36NsfU%2BgaMdJhNa6IhXxEuYCRmR%2Fg1O6zK3pG0vIPAvHqGGFlaGPK9RMtxhn34ryjd473nz6J3SEEbcyGoU4goG5TlSSBobw0oeNCcqOE%2BeSpKRvEx8gZejzshJRVkq86Ckh6e%2FRmlMyeZcwSxYA%2BdFBnNZtDJRjvIU4HzDDMd9VY%2FjKeQMsyao0sIo%2BQNw8g7tzLuVITLYJlYl2XAJPQcGmMtlw2p2EetJ%2Ftaw0ztzCJv%2FL2HXo3hjMfUhqnNsS7HVW48EzjV6lsY1gRQBkT8Vwtxx66UTsCn8P9y6503mLoyGwKdvCEl4himnfxa3K%2BmaHv%2Boja7dhT7jIfwKKOeZ9%2BYT7bk1PtTVhII%2BEvJ4nY6NXGL7kcr1GOiGpbgx5CKu%2BDDsi8G%2BBjqkAYxfoaPfuYd80jomfg6mJb9qdeGBp4ejjo5E0Pb3GCZ2r%2Fo1DG2SIgVeSXBSLlpqmQHjfsHmlEStzaM2lvw4Iy7tETWAMbMXs%2FrJkb1BVwiW7E8kMR8zYDqZO%2FNF4zQ1TY%2FVDzQfvF5Foo%2FAeQ57Dil1yZmrwUE%2BCDyLCP0uTCILu3bEo9P0oP2%2FPKCJxg79sjF0YwKubQpPmtD69otPR9GlXlIk&X-Amz-Signature=8482d23ed957cc716a5f27143ae0cb89a699da585a06076bcfe4f0d5c907c712&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWMG4LK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD2nlIwUvQy2bRq57L7YbKFB4pnpSC1TQ1%2F9cvLcJs5iQIhALYjlT6s35zWWsqpngH9m5lHOOpfVlQ5VZD8lekMMGptKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeTB9H170iqgnbXj4q3ANmYqFOsTyBY6Beiqc4XIi%2BBwCPMr0rRVI9D4AWav%2By2pryRKxgWAzDuTLP%2BqMeWfSmqis%2Fznwaj4SFoOLh0jxkVEGbNCNweu1LqSH4VyLl53GmXZO8X%2Fm%2Bq0blK1NkMvIgQAGXRrlL01A7Ygxs4%2Brn9JnR9qwKEgFgvQC%2F8IReAiejaVEfbFQ1ZmwJlIs%2BUrU2WQYCWx3N3Lt2ebKyiPL6USwM3zJN1I3WbmKfgP9Hf%2FMastDJRqBPn36NsfU%2BgaMdJhNa6IhXxEuYCRmR%2Fg1O6zK3pG0vIPAvHqGGFlaGPK9RMtxhn34ryjd473nz6J3SEEbcyGoU4goG5TlSSBobw0oeNCcqOE%2BeSpKRvEx8gZejzshJRVkq86Ckh6e%2FRmlMyeZcwSxYA%2BdFBnNZtDJRjvIU4HzDDMd9VY%2FjKeQMsyao0sIo%2BQNw8g7tzLuVITLYJlYl2XAJPQcGmMtlw2p2EetJ%2Ftaw0ztzCJv%2FL2HXo3hjMfUhqnNsS7HVW48EzjV6lsY1gRQBkT8Vwtxx66UTsCn8P9y6503mLoyGwKdvCEl4himnfxa3K%2BmaHv%2Boja7dhT7jIfwKKOeZ9%2BYT7bk1PtTVhII%2BEvJ4nY6NXGL7kcr1GOiGpbgx5CKu%2BDDsi8G%2BBjqkAYxfoaPfuYd80jomfg6mJb9qdeGBp4ejjo5E0Pb3GCZ2r%2Fo1DG2SIgVeSXBSLlpqmQHjfsHmlEStzaM2lvw4Iy7tETWAMbMXs%2FrJkb1BVwiW7E8kMR8zYDqZO%2FNF4zQ1TY%2FVDzQfvF5Foo%2FAeQ57Dil1yZmrwUE%2BCDyLCP0uTCILu3bEo9P0oP2%2FPKCJxg79sjF0YwKubQpPmtD69otPR9GlXlIk&X-Amz-Signature=550535ae5ecae43b73d9d54873bef56bf9cbf77378307a6f034ecd2572b68a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
