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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUUSJFJM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2F4zsv6HcVdEqv1WRszq1pR12qgxbmF0%2FovIg4TOYLWgIgaPstjFwdUTqM%2FdokE2LAPU2tOURqLR8eob6kqx9mFLgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJZQRPGIHKCTJ7z%2FgircA50mLlB0NL%2FtiOI%2BN4EK%2BL42iB%2F3kGsi%2FKD7d04jQ03R%2B%2F94NchFVz6TuyZ6nleKfBTpRifN%2Bb4rNt3jR546fJhACpFcYS5m9zKcahyrGAMCtnCH1%2F3LasMfFpqDxvPi4oqKipOnuEO5%2FJsr%2BNeckK7tEOcCdrcSkyvPMCvpm0Lj7YcDF84j0P6LWem5l4uoag%2FigpUrrRI42wdsap80wMxYS7YJtbzA%2FilijbvZj9lLmuIUTHmRPen%2BAAyPvCnVBmlrq5rw1O077h8KxWOFI0P8ofnL6fUix2VK5et%2FWG9M%2BCXgOU4YBoWHghh%2B8k88diujkZTHjODjukaGmh6JmXMLrcGsqsjo50kmPQxf7x118iN19f7T2PxSncUZv8RcU9p4G3f96a%2FiQjrHxA676T4MuL8Sx4V8qQtpLDca%2FuL4LGA7%2F0w9B8n%2FA5C6YTlTqZst2lLQVz5rUdou1Y3zjG1ITEIxCVAVvRU0jQdPcbiHQbh2MfR79TBiqXQcGabql0ExdlASdo5%2F%2BArRly30pxoawtqorm4hnWfu%2F3b46uYp0M1e6yd5%2BKBmhGxnPvUKdA8FdD%2F3tmXkTekf1AZsYA8m0PmzZFjrkdU7%2BXBsrVN9tLUTg0%2BFVV%2BAjconMNuI88IGOqUBQV8XLPi2iT%2F7KrDHIlOdlhNAKTqB2sNfyLglSQ%2BqnnJaR6jEaRCOlAvaZsQDnLdsDZGz0djzcuI78joZtO82Q%2BhZHrVgT7X2lH3rNb1YU5kXERSJvuH9dKF%2BHB2dju7oSt57wQ3S8PKwb8CYJQmqXAeJprNKOOQeXW2WuCyWUo68Uiu1RRfc%2BKnrsOn1VHD9zzc%2BJx2E8TjnyONZ%2BN7SD%2FtCcI06&X-Amz-Signature=2aac354a71eae76dd1eb191d5f0175ed81bd45c88171c7336c8d9d6f661b8d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUUSJFJM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2F4zsv6HcVdEqv1WRszq1pR12qgxbmF0%2FovIg4TOYLWgIgaPstjFwdUTqM%2FdokE2LAPU2tOURqLR8eob6kqx9mFLgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJZQRPGIHKCTJ7z%2FgircA50mLlB0NL%2FtiOI%2BN4EK%2BL42iB%2F3kGsi%2FKD7d04jQ03R%2B%2F94NchFVz6TuyZ6nleKfBTpRifN%2Bb4rNt3jR546fJhACpFcYS5m9zKcahyrGAMCtnCH1%2F3LasMfFpqDxvPi4oqKipOnuEO5%2FJsr%2BNeckK7tEOcCdrcSkyvPMCvpm0Lj7YcDF84j0P6LWem5l4uoag%2FigpUrrRI42wdsap80wMxYS7YJtbzA%2FilijbvZj9lLmuIUTHmRPen%2BAAyPvCnVBmlrq5rw1O077h8KxWOFI0P8ofnL6fUix2VK5et%2FWG9M%2BCXgOU4YBoWHghh%2B8k88diujkZTHjODjukaGmh6JmXMLrcGsqsjo50kmPQxf7x118iN19f7T2PxSncUZv8RcU9p4G3f96a%2FiQjrHxA676T4MuL8Sx4V8qQtpLDca%2FuL4LGA7%2F0w9B8n%2FA5C6YTlTqZst2lLQVz5rUdou1Y3zjG1ITEIxCVAVvRU0jQdPcbiHQbh2MfR79TBiqXQcGabql0ExdlASdo5%2F%2BArRly30pxoawtqorm4hnWfu%2F3b46uYp0M1e6yd5%2BKBmhGxnPvUKdA8FdD%2F3tmXkTekf1AZsYA8m0PmzZFjrkdU7%2BXBsrVN9tLUTg0%2BFVV%2BAjconMNuI88IGOqUBQV8XLPi2iT%2F7KrDHIlOdlhNAKTqB2sNfyLglSQ%2BqnnJaR6jEaRCOlAvaZsQDnLdsDZGz0djzcuI78joZtO82Q%2BhZHrVgT7X2lH3rNb1YU5kXERSJvuH9dKF%2BHB2dju7oSt57wQ3S8PKwb8CYJQmqXAeJprNKOOQeXW2WuCyWUo68Uiu1RRfc%2BKnrsOn1VHD9zzc%2BJx2E8TjnyONZ%2BN7SD%2FtCcI06&X-Amz-Signature=d37ba4588d3355f8a7bce4fc543cca37072ab0522e3de0607a46d15cd241c454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUUSJFJM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2F4zsv6HcVdEqv1WRszq1pR12qgxbmF0%2FovIg4TOYLWgIgaPstjFwdUTqM%2FdokE2LAPU2tOURqLR8eob6kqx9mFLgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJZQRPGIHKCTJ7z%2FgircA50mLlB0NL%2FtiOI%2BN4EK%2BL42iB%2F3kGsi%2FKD7d04jQ03R%2B%2F94NchFVz6TuyZ6nleKfBTpRifN%2Bb4rNt3jR546fJhACpFcYS5m9zKcahyrGAMCtnCH1%2F3LasMfFpqDxvPi4oqKipOnuEO5%2FJsr%2BNeckK7tEOcCdrcSkyvPMCvpm0Lj7YcDF84j0P6LWem5l4uoag%2FigpUrrRI42wdsap80wMxYS7YJtbzA%2FilijbvZj9lLmuIUTHmRPen%2BAAyPvCnVBmlrq5rw1O077h8KxWOFI0P8ofnL6fUix2VK5et%2FWG9M%2BCXgOU4YBoWHghh%2B8k88diujkZTHjODjukaGmh6JmXMLrcGsqsjo50kmPQxf7x118iN19f7T2PxSncUZv8RcU9p4G3f96a%2FiQjrHxA676T4MuL8Sx4V8qQtpLDca%2FuL4LGA7%2F0w9B8n%2FA5C6YTlTqZst2lLQVz5rUdou1Y3zjG1ITEIxCVAVvRU0jQdPcbiHQbh2MfR79TBiqXQcGabql0ExdlASdo5%2F%2BArRly30pxoawtqorm4hnWfu%2F3b46uYp0M1e6yd5%2BKBmhGxnPvUKdA8FdD%2F3tmXkTekf1AZsYA8m0PmzZFjrkdU7%2BXBsrVN9tLUTg0%2BFVV%2BAjconMNuI88IGOqUBQV8XLPi2iT%2F7KrDHIlOdlhNAKTqB2sNfyLglSQ%2BqnnJaR6jEaRCOlAvaZsQDnLdsDZGz0djzcuI78joZtO82Q%2BhZHrVgT7X2lH3rNb1YU5kXERSJvuH9dKF%2BHB2dju7oSt57wQ3S8PKwb8CYJQmqXAeJprNKOOQeXW2WuCyWUo68Uiu1RRfc%2BKnrsOn1VHD9zzc%2BJx2E8TjnyONZ%2BN7SD%2FtCcI06&X-Amz-Signature=7368328505adeb70bd6bcbded41dd913d214f10a3be23f024f4f24cea8f10435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUUSJFJM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2F4zsv6HcVdEqv1WRszq1pR12qgxbmF0%2FovIg4TOYLWgIgaPstjFwdUTqM%2FdokE2LAPU2tOURqLR8eob6kqx9mFLgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJZQRPGIHKCTJ7z%2FgircA50mLlB0NL%2FtiOI%2BN4EK%2BL42iB%2F3kGsi%2FKD7d04jQ03R%2B%2F94NchFVz6TuyZ6nleKfBTpRifN%2Bb4rNt3jR546fJhACpFcYS5m9zKcahyrGAMCtnCH1%2F3LasMfFpqDxvPi4oqKipOnuEO5%2FJsr%2BNeckK7tEOcCdrcSkyvPMCvpm0Lj7YcDF84j0P6LWem5l4uoag%2FigpUrrRI42wdsap80wMxYS7YJtbzA%2FilijbvZj9lLmuIUTHmRPen%2BAAyPvCnVBmlrq5rw1O077h8KxWOFI0P8ofnL6fUix2VK5et%2FWG9M%2BCXgOU4YBoWHghh%2B8k88diujkZTHjODjukaGmh6JmXMLrcGsqsjo50kmPQxf7x118iN19f7T2PxSncUZv8RcU9p4G3f96a%2FiQjrHxA676T4MuL8Sx4V8qQtpLDca%2FuL4LGA7%2F0w9B8n%2FA5C6YTlTqZst2lLQVz5rUdou1Y3zjG1ITEIxCVAVvRU0jQdPcbiHQbh2MfR79TBiqXQcGabql0ExdlASdo5%2F%2BArRly30pxoawtqorm4hnWfu%2F3b46uYp0M1e6yd5%2BKBmhGxnPvUKdA8FdD%2F3tmXkTekf1AZsYA8m0PmzZFjrkdU7%2BXBsrVN9tLUTg0%2BFVV%2BAjconMNuI88IGOqUBQV8XLPi2iT%2F7KrDHIlOdlhNAKTqB2sNfyLglSQ%2BqnnJaR6jEaRCOlAvaZsQDnLdsDZGz0djzcuI78joZtO82Q%2BhZHrVgT7X2lH3rNb1YU5kXERSJvuH9dKF%2BHB2dju7oSt57wQ3S8PKwb8CYJQmqXAeJprNKOOQeXW2WuCyWUo68Uiu1RRfc%2BKnrsOn1VHD9zzc%2BJx2E8TjnyONZ%2BN7SD%2FtCcI06&X-Amz-Signature=366f695bfe9d658228f19496c359e80cb833cc970d6944c370131772575dc711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUUSJFJM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2F4zsv6HcVdEqv1WRszq1pR12qgxbmF0%2FovIg4TOYLWgIgaPstjFwdUTqM%2FdokE2LAPU2tOURqLR8eob6kqx9mFLgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJZQRPGIHKCTJ7z%2FgircA50mLlB0NL%2FtiOI%2BN4EK%2BL42iB%2F3kGsi%2FKD7d04jQ03R%2B%2F94NchFVz6TuyZ6nleKfBTpRifN%2Bb4rNt3jR546fJhACpFcYS5m9zKcahyrGAMCtnCH1%2F3LasMfFpqDxvPi4oqKipOnuEO5%2FJsr%2BNeckK7tEOcCdrcSkyvPMCvpm0Lj7YcDF84j0P6LWem5l4uoag%2FigpUrrRI42wdsap80wMxYS7YJtbzA%2FilijbvZj9lLmuIUTHmRPen%2BAAyPvCnVBmlrq5rw1O077h8KxWOFI0P8ofnL6fUix2VK5et%2FWG9M%2BCXgOU4YBoWHghh%2B8k88diujkZTHjODjukaGmh6JmXMLrcGsqsjo50kmPQxf7x118iN19f7T2PxSncUZv8RcU9p4G3f96a%2FiQjrHxA676T4MuL8Sx4V8qQtpLDca%2FuL4LGA7%2F0w9B8n%2FA5C6YTlTqZst2lLQVz5rUdou1Y3zjG1ITEIxCVAVvRU0jQdPcbiHQbh2MfR79TBiqXQcGabql0ExdlASdo5%2F%2BArRly30pxoawtqorm4hnWfu%2F3b46uYp0M1e6yd5%2BKBmhGxnPvUKdA8FdD%2F3tmXkTekf1AZsYA8m0PmzZFjrkdU7%2BXBsrVN9tLUTg0%2BFVV%2BAjconMNuI88IGOqUBQV8XLPi2iT%2F7KrDHIlOdlhNAKTqB2sNfyLglSQ%2BqnnJaR6jEaRCOlAvaZsQDnLdsDZGz0djzcuI78joZtO82Q%2BhZHrVgT7X2lH3rNb1YU5kXERSJvuH9dKF%2BHB2dju7oSt57wQ3S8PKwb8CYJQmqXAeJprNKOOQeXW2WuCyWUo68Uiu1RRfc%2BKnrsOn1VHD9zzc%2BJx2E8TjnyONZ%2BN7SD%2FtCcI06&X-Amz-Signature=9949e6a4171b0ddb3ca7fbe06bea8f266f6597dcb3ddde5a22eaa6a6b1d3797b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUUSJFJM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2F4zsv6HcVdEqv1WRszq1pR12qgxbmF0%2FovIg4TOYLWgIgaPstjFwdUTqM%2FdokE2LAPU2tOURqLR8eob6kqx9mFLgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJZQRPGIHKCTJ7z%2FgircA50mLlB0NL%2FtiOI%2BN4EK%2BL42iB%2F3kGsi%2FKD7d04jQ03R%2B%2F94NchFVz6TuyZ6nleKfBTpRifN%2Bb4rNt3jR546fJhACpFcYS5m9zKcahyrGAMCtnCH1%2F3LasMfFpqDxvPi4oqKipOnuEO5%2FJsr%2BNeckK7tEOcCdrcSkyvPMCvpm0Lj7YcDF84j0P6LWem5l4uoag%2FigpUrrRI42wdsap80wMxYS7YJtbzA%2FilijbvZj9lLmuIUTHmRPen%2BAAyPvCnVBmlrq5rw1O077h8KxWOFI0P8ofnL6fUix2VK5et%2FWG9M%2BCXgOU4YBoWHghh%2B8k88diujkZTHjODjukaGmh6JmXMLrcGsqsjo50kmPQxf7x118iN19f7T2PxSncUZv8RcU9p4G3f96a%2FiQjrHxA676T4MuL8Sx4V8qQtpLDca%2FuL4LGA7%2F0w9B8n%2FA5C6YTlTqZst2lLQVz5rUdou1Y3zjG1ITEIxCVAVvRU0jQdPcbiHQbh2MfR79TBiqXQcGabql0ExdlASdo5%2F%2BArRly30pxoawtqorm4hnWfu%2F3b46uYp0M1e6yd5%2BKBmhGxnPvUKdA8FdD%2F3tmXkTekf1AZsYA8m0PmzZFjrkdU7%2BXBsrVN9tLUTg0%2BFVV%2BAjconMNuI88IGOqUBQV8XLPi2iT%2F7KrDHIlOdlhNAKTqB2sNfyLglSQ%2BqnnJaR6jEaRCOlAvaZsQDnLdsDZGz0djzcuI78joZtO82Q%2BhZHrVgT7X2lH3rNb1YU5kXERSJvuH9dKF%2BHB2dju7oSt57wQ3S8PKwb8CYJQmqXAeJprNKOOQeXW2WuCyWUo68Uiu1RRfc%2BKnrsOn1VHD9zzc%2BJx2E8TjnyONZ%2BN7SD%2FtCcI06&X-Amz-Signature=ab8b6f738ae838cce401bf7043aef9f8ebfe766c448c1cb92874c62386720e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUUSJFJM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC%2F4zsv6HcVdEqv1WRszq1pR12qgxbmF0%2FovIg4TOYLWgIgaPstjFwdUTqM%2FdokE2LAPU2tOURqLR8eob6kqx9mFLgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJZQRPGIHKCTJ7z%2FgircA50mLlB0NL%2FtiOI%2BN4EK%2BL42iB%2F3kGsi%2FKD7d04jQ03R%2B%2F94NchFVz6TuyZ6nleKfBTpRifN%2Bb4rNt3jR546fJhACpFcYS5m9zKcahyrGAMCtnCH1%2F3LasMfFpqDxvPi4oqKipOnuEO5%2FJsr%2BNeckK7tEOcCdrcSkyvPMCvpm0Lj7YcDF84j0P6LWem5l4uoag%2FigpUrrRI42wdsap80wMxYS7YJtbzA%2FilijbvZj9lLmuIUTHmRPen%2BAAyPvCnVBmlrq5rw1O077h8KxWOFI0P8ofnL6fUix2VK5et%2FWG9M%2BCXgOU4YBoWHghh%2B8k88diujkZTHjODjukaGmh6JmXMLrcGsqsjo50kmPQxf7x118iN19f7T2PxSncUZv8RcU9p4G3f96a%2FiQjrHxA676T4MuL8Sx4V8qQtpLDca%2FuL4LGA7%2F0w9B8n%2FA5C6YTlTqZst2lLQVz5rUdou1Y3zjG1ITEIxCVAVvRU0jQdPcbiHQbh2MfR79TBiqXQcGabql0ExdlASdo5%2F%2BArRly30pxoawtqorm4hnWfu%2F3b46uYp0M1e6yd5%2BKBmhGxnPvUKdA8FdD%2F3tmXkTekf1AZsYA8m0PmzZFjrkdU7%2BXBsrVN9tLUTg0%2BFVV%2BAjconMNuI88IGOqUBQV8XLPi2iT%2F7KrDHIlOdlhNAKTqB2sNfyLglSQ%2BqnnJaR6jEaRCOlAvaZsQDnLdsDZGz0djzcuI78joZtO82Q%2BhZHrVgT7X2lH3rNb1YU5kXERSJvuH9dKF%2BHB2dju7oSt57wQ3S8PKwb8CYJQmqXAeJprNKOOQeXW2WuCyWUo68Uiu1RRfc%2BKnrsOn1VHD9zzc%2BJx2E8TjnyONZ%2BN7SD%2FtCcI06&X-Amz-Signature=a0581b0207a19184008cfbb6907218de649e3de49ba1502d6ddea476b46658fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
