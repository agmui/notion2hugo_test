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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GAC3ZX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnI75i5mdITW43UE%2FsX3QuLT5XeiRID9VEXkLbc9bo6AiEAr%2Bw3HK9Xv5RkFpHXEh6vvNIJPpdLSM9zojmPwqmiefYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEddBib3BrEcJVYfGSrcA7KQC%2BO%2FoboNlEVlg2FHBmxs%2BkKkowhD2uswiKVBwlI6VRURalchPBExDRqM8UuYveRDgm3AFjjQ1WLA1yiHCH%2FS%2FXMzux4Etky7dngbhH1SCbkA%2BqEiuoPdpiK4gqzJBWRMa5Kc6B2YlufUKilqTDMqZlJFXBcKOgDHo8BkPhITYXb0q7lFuheWIHhFaaBcHLrAh7XZs679GY9YlpVTPc7ZMQ%2BlWgjmzWsx1xxLR7LpsNeuTrbD19P8cDGKDDvljfvr9GaUUUG5Lrtx43cOHEXn8oasigp8mcWESyHnKegX93jfyCMFGBY9kw5KYOqL21K4mKZBL%2F55G4mQ05rb31Av984B0%2FlLovpBODPvnKDx062CPoOVutzASDUY5nu1pK68xm9aTu7TurYIktRKHcmD7xz6GiHmSDa5OhOTSvUMposeeWXN%2F40ii2dSGlpGFCViE%2F8MXKjW0CbS9A8EuWS3ZCnGyyDr7MLIvgRcJJVr6LiJGkuTnLmWsD%2FTAgFg8RkJY90LD2%2FzlxW5syuhMIKFxPKxK8W60b30MhzyVro6Gj%2B82jL84sTQn8wSvw7nQlhUbZTVjmobMHHLgHDTkufG%2BogZBMltFQEBLF%2FjQGxPqAXGXMsTv3b%2BIPvrMPSht70GOqUBbsku77K2ZnvUfiBLioipBw47vB6hLJVB1QwoVDC%2F4ROXH1g705xdvS3S58ZHV39PyLym5XAnjbbGv1l5aCN2ZUoWHbSt8S%2BOf5Iff8IGHe%2BdMP3ucq7Lazw00VhAaewFVuKRhBa%2BRm9o9v7UyfWE7lF%2BlQuVKx5LjaLls2MKAJJqtI2Cr9semvBumz1GsTb7lo4VHI2h1hedm60j9Xd%2FkJhssHco&X-Amz-Signature=8482c3f1e0a32dde84d5f85095441aacdc3286a08ca5c02047e8dde136df1d44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GAC3ZX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnI75i5mdITW43UE%2FsX3QuLT5XeiRID9VEXkLbc9bo6AiEAr%2Bw3HK9Xv5RkFpHXEh6vvNIJPpdLSM9zojmPwqmiefYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEddBib3BrEcJVYfGSrcA7KQC%2BO%2FoboNlEVlg2FHBmxs%2BkKkowhD2uswiKVBwlI6VRURalchPBExDRqM8UuYveRDgm3AFjjQ1WLA1yiHCH%2FS%2FXMzux4Etky7dngbhH1SCbkA%2BqEiuoPdpiK4gqzJBWRMa5Kc6B2YlufUKilqTDMqZlJFXBcKOgDHo8BkPhITYXb0q7lFuheWIHhFaaBcHLrAh7XZs679GY9YlpVTPc7ZMQ%2BlWgjmzWsx1xxLR7LpsNeuTrbD19P8cDGKDDvljfvr9GaUUUG5Lrtx43cOHEXn8oasigp8mcWESyHnKegX93jfyCMFGBY9kw5KYOqL21K4mKZBL%2F55G4mQ05rb31Av984B0%2FlLovpBODPvnKDx062CPoOVutzASDUY5nu1pK68xm9aTu7TurYIktRKHcmD7xz6GiHmSDa5OhOTSvUMposeeWXN%2F40ii2dSGlpGFCViE%2F8MXKjW0CbS9A8EuWS3ZCnGyyDr7MLIvgRcJJVr6LiJGkuTnLmWsD%2FTAgFg8RkJY90LD2%2FzlxW5syuhMIKFxPKxK8W60b30MhzyVro6Gj%2B82jL84sTQn8wSvw7nQlhUbZTVjmobMHHLgHDTkufG%2BogZBMltFQEBLF%2FjQGxPqAXGXMsTv3b%2BIPvrMPSht70GOqUBbsku77K2ZnvUfiBLioipBw47vB6hLJVB1QwoVDC%2F4ROXH1g705xdvS3S58ZHV39PyLym5XAnjbbGv1l5aCN2ZUoWHbSt8S%2BOf5Iff8IGHe%2BdMP3ucq7Lazw00VhAaewFVuKRhBa%2BRm9o9v7UyfWE7lF%2BlQuVKx5LjaLls2MKAJJqtI2Cr9semvBumz1GsTb7lo4VHI2h1hedm60j9Xd%2FkJhssHco&X-Amz-Signature=9c284d0b4dfe739e0d5370b0684efab8edf4d9652ceb7f91db438883469d9b71&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GAC3ZX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnI75i5mdITW43UE%2FsX3QuLT5XeiRID9VEXkLbc9bo6AiEAr%2Bw3HK9Xv5RkFpHXEh6vvNIJPpdLSM9zojmPwqmiefYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEddBib3BrEcJVYfGSrcA7KQC%2BO%2FoboNlEVlg2FHBmxs%2BkKkowhD2uswiKVBwlI6VRURalchPBExDRqM8UuYveRDgm3AFjjQ1WLA1yiHCH%2FS%2FXMzux4Etky7dngbhH1SCbkA%2BqEiuoPdpiK4gqzJBWRMa5Kc6B2YlufUKilqTDMqZlJFXBcKOgDHo8BkPhITYXb0q7lFuheWIHhFaaBcHLrAh7XZs679GY9YlpVTPc7ZMQ%2BlWgjmzWsx1xxLR7LpsNeuTrbD19P8cDGKDDvljfvr9GaUUUG5Lrtx43cOHEXn8oasigp8mcWESyHnKegX93jfyCMFGBY9kw5KYOqL21K4mKZBL%2F55G4mQ05rb31Av984B0%2FlLovpBODPvnKDx062CPoOVutzASDUY5nu1pK68xm9aTu7TurYIktRKHcmD7xz6GiHmSDa5OhOTSvUMposeeWXN%2F40ii2dSGlpGFCViE%2F8MXKjW0CbS9A8EuWS3ZCnGyyDr7MLIvgRcJJVr6LiJGkuTnLmWsD%2FTAgFg8RkJY90LD2%2FzlxW5syuhMIKFxPKxK8W60b30MhzyVro6Gj%2B82jL84sTQn8wSvw7nQlhUbZTVjmobMHHLgHDTkufG%2BogZBMltFQEBLF%2FjQGxPqAXGXMsTv3b%2BIPvrMPSht70GOqUBbsku77K2ZnvUfiBLioipBw47vB6hLJVB1QwoVDC%2F4ROXH1g705xdvS3S58ZHV39PyLym5XAnjbbGv1l5aCN2ZUoWHbSt8S%2BOf5Iff8IGHe%2BdMP3ucq7Lazw00VhAaewFVuKRhBa%2BRm9o9v7UyfWE7lF%2BlQuVKx5LjaLls2MKAJJqtI2Cr9semvBumz1GsTb7lo4VHI2h1hedm60j9Xd%2FkJhssHco&X-Amz-Signature=d250d6e8a5037e1daeea241509bf65b9aaae5375f9c6d6318c5ba0009aa9b8cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GAC3ZX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnI75i5mdITW43UE%2FsX3QuLT5XeiRID9VEXkLbc9bo6AiEAr%2Bw3HK9Xv5RkFpHXEh6vvNIJPpdLSM9zojmPwqmiefYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEddBib3BrEcJVYfGSrcA7KQC%2BO%2FoboNlEVlg2FHBmxs%2BkKkowhD2uswiKVBwlI6VRURalchPBExDRqM8UuYveRDgm3AFjjQ1WLA1yiHCH%2FS%2FXMzux4Etky7dngbhH1SCbkA%2BqEiuoPdpiK4gqzJBWRMa5Kc6B2YlufUKilqTDMqZlJFXBcKOgDHo8BkPhITYXb0q7lFuheWIHhFaaBcHLrAh7XZs679GY9YlpVTPc7ZMQ%2BlWgjmzWsx1xxLR7LpsNeuTrbD19P8cDGKDDvljfvr9GaUUUG5Lrtx43cOHEXn8oasigp8mcWESyHnKegX93jfyCMFGBY9kw5KYOqL21K4mKZBL%2F55G4mQ05rb31Av984B0%2FlLovpBODPvnKDx062CPoOVutzASDUY5nu1pK68xm9aTu7TurYIktRKHcmD7xz6GiHmSDa5OhOTSvUMposeeWXN%2F40ii2dSGlpGFCViE%2F8MXKjW0CbS9A8EuWS3ZCnGyyDr7MLIvgRcJJVr6LiJGkuTnLmWsD%2FTAgFg8RkJY90LD2%2FzlxW5syuhMIKFxPKxK8W60b30MhzyVro6Gj%2B82jL84sTQn8wSvw7nQlhUbZTVjmobMHHLgHDTkufG%2BogZBMltFQEBLF%2FjQGxPqAXGXMsTv3b%2BIPvrMPSht70GOqUBbsku77K2ZnvUfiBLioipBw47vB6hLJVB1QwoVDC%2F4ROXH1g705xdvS3S58ZHV39PyLym5XAnjbbGv1l5aCN2ZUoWHbSt8S%2BOf5Iff8IGHe%2BdMP3ucq7Lazw00VhAaewFVuKRhBa%2BRm9o9v7UyfWE7lF%2BlQuVKx5LjaLls2MKAJJqtI2Cr9semvBumz1GsTb7lo4VHI2h1hedm60j9Xd%2FkJhssHco&X-Amz-Signature=45c850d8e2ce1cf4a94e380da501c4aae920d6e2f4c7680fc81e6a1869aba8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GAC3ZX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnI75i5mdITW43UE%2FsX3QuLT5XeiRID9VEXkLbc9bo6AiEAr%2Bw3HK9Xv5RkFpHXEh6vvNIJPpdLSM9zojmPwqmiefYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEddBib3BrEcJVYfGSrcA7KQC%2BO%2FoboNlEVlg2FHBmxs%2BkKkowhD2uswiKVBwlI6VRURalchPBExDRqM8UuYveRDgm3AFjjQ1WLA1yiHCH%2FS%2FXMzux4Etky7dngbhH1SCbkA%2BqEiuoPdpiK4gqzJBWRMa5Kc6B2YlufUKilqTDMqZlJFXBcKOgDHo8BkPhITYXb0q7lFuheWIHhFaaBcHLrAh7XZs679GY9YlpVTPc7ZMQ%2BlWgjmzWsx1xxLR7LpsNeuTrbD19P8cDGKDDvljfvr9GaUUUG5Lrtx43cOHEXn8oasigp8mcWESyHnKegX93jfyCMFGBY9kw5KYOqL21K4mKZBL%2F55G4mQ05rb31Av984B0%2FlLovpBODPvnKDx062CPoOVutzASDUY5nu1pK68xm9aTu7TurYIktRKHcmD7xz6GiHmSDa5OhOTSvUMposeeWXN%2F40ii2dSGlpGFCViE%2F8MXKjW0CbS9A8EuWS3ZCnGyyDr7MLIvgRcJJVr6LiJGkuTnLmWsD%2FTAgFg8RkJY90LD2%2FzlxW5syuhMIKFxPKxK8W60b30MhzyVro6Gj%2B82jL84sTQn8wSvw7nQlhUbZTVjmobMHHLgHDTkufG%2BogZBMltFQEBLF%2FjQGxPqAXGXMsTv3b%2BIPvrMPSht70GOqUBbsku77K2ZnvUfiBLioipBw47vB6hLJVB1QwoVDC%2F4ROXH1g705xdvS3S58ZHV39PyLym5XAnjbbGv1l5aCN2ZUoWHbSt8S%2BOf5Iff8IGHe%2BdMP3ucq7Lazw00VhAaewFVuKRhBa%2BRm9o9v7UyfWE7lF%2BlQuVKx5LjaLls2MKAJJqtI2Cr9semvBumz1GsTb7lo4VHI2h1hedm60j9Xd%2FkJhssHco&X-Amz-Signature=ff94d8f4017e83c6f23f2123589581ccadd6d46203fcb6939e58aa652e4828b4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GAC3ZX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnI75i5mdITW43UE%2FsX3QuLT5XeiRID9VEXkLbc9bo6AiEAr%2Bw3HK9Xv5RkFpHXEh6vvNIJPpdLSM9zojmPwqmiefYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEddBib3BrEcJVYfGSrcA7KQC%2BO%2FoboNlEVlg2FHBmxs%2BkKkowhD2uswiKVBwlI6VRURalchPBExDRqM8UuYveRDgm3AFjjQ1WLA1yiHCH%2FS%2FXMzux4Etky7dngbhH1SCbkA%2BqEiuoPdpiK4gqzJBWRMa5Kc6B2YlufUKilqTDMqZlJFXBcKOgDHo8BkPhITYXb0q7lFuheWIHhFaaBcHLrAh7XZs679GY9YlpVTPc7ZMQ%2BlWgjmzWsx1xxLR7LpsNeuTrbD19P8cDGKDDvljfvr9GaUUUG5Lrtx43cOHEXn8oasigp8mcWESyHnKegX93jfyCMFGBY9kw5KYOqL21K4mKZBL%2F55G4mQ05rb31Av984B0%2FlLovpBODPvnKDx062CPoOVutzASDUY5nu1pK68xm9aTu7TurYIktRKHcmD7xz6GiHmSDa5OhOTSvUMposeeWXN%2F40ii2dSGlpGFCViE%2F8MXKjW0CbS9A8EuWS3ZCnGyyDr7MLIvgRcJJVr6LiJGkuTnLmWsD%2FTAgFg8RkJY90LD2%2FzlxW5syuhMIKFxPKxK8W60b30MhzyVro6Gj%2B82jL84sTQn8wSvw7nQlhUbZTVjmobMHHLgHDTkufG%2BogZBMltFQEBLF%2FjQGxPqAXGXMsTv3b%2BIPvrMPSht70GOqUBbsku77K2ZnvUfiBLioipBw47vB6hLJVB1QwoVDC%2F4ROXH1g705xdvS3S58ZHV39PyLym5XAnjbbGv1l5aCN2ZUoWHbSt8S%2BOf5Iff8IGHe%2BdMP3ucq7Lazw00VhAaewFVuKRhBa%2BRm9o9v7UyfWE7lF%2BlQuVKx5LjaLls2MKAJJqtI2Cr9semvBumz1GsTb7lo4VHI2h1hedm60j9Xd%2FkJhssHco&X-Amz-Signature=6445b3b597b68b0058dc4c05d333e8c00c4424bc1b76a17196e8d8bc47002ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GAC3ZX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnI75i5mdITW43UE%2FsX3QuLT5XeiRID9VEXkLbc9bo6AiEAr%2Bw3HK9Xv5RkFpHXEh6vvNIJPpdLSM9zojmPwqmiefYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEddBib3BrEcJVYfGSrcA7KQC%2BO%2FoboNlEVlg2FHBmxs%2BkKkowhD2uswiKVBwlI6VRURalchPBExDRqM8UuYveRDgm3AFjjQ1WLA1yiHCH%2FS%2FXMzux4Etky7dngbhH1SCbkA%2BqEiuoPdpiK4gqzJBWRMa5Kc6B2YlufUKilqTDMqZlJFXBcKOgDHo8BkPhITYXb0q7lFuheWIHhFaaBcHLrAh7XZs679GY9YlpVTPc7ZMQ%2BlWgjmzWsx1xxLR7LpsNeuTrbD19P8cDGKDDvljfvr9GaUUUG5Lrtx43cOHEXn8oasigp8mcWESyHnKegX93jfyCMFGBY9kw5KYOqL21K4mKZBL%2F55G4mQ05rb31Av984B0%2FlLovpBODPvnKDx062CPoOVutzASDUY5nu1pK68xm9aTu7TurYIktRKHcmD7xz6GiHmSDa5OhOTSvUMposeeWXN%2F40ii2dSGlpGFCViE%2F8MXKjW0CbS9A8EuWS3ZCnGyyDr7MLIvgRcJJVr6LiJGkuTnLmWsD%2FTAgFg8RkJY90LD2%2FzlxW5syuhMIKFxPKxK8W60b30MhzyVro6Gj%2B82jL84sTQn8wSvw7nQlhUbZTVjmobMHHLgHDTkufG%2BogZBMltFQEBLF%2FjQGxPqAXGXMsTv3b%2BIPvrMPSht70GOqUBbsku77K2ZnvUfiBLioipBw47vB6hLJVB1QwoVDC%2F4ROXH1g705xdvS3S58ZHV39PyLym5XAnjbbGv1l5aCN2ZUoWHbSt8S%2BOf5Iff8IGHe%2BdMP3ucq7Lazw00VhAaewFVuKRhBa%2BRm9o9v7UyfWE7lF%2BlQuVKx5LjaLls2MKAJJqtI2Cr9semvBumz1GsTb7lo4VHI2h1hedm60j9Xd%2FkJhssHco&X-Amz-Signature=5bae39b8b8b27c9642c5825adcf5d354fd37d37eea31b44d31f8504a7c3e6ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
