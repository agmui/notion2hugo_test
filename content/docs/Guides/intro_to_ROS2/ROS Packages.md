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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDAHN76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAe6RHdhT%2B2g10DzaoIZ1KzRZygipT26pknq0YiXPqg5AiA0WIJ9Gr1j5MS0sJ%2BMPxnbAzXCfAd7xaCCg1vJb9B5ySqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbj7tWp5lbzZNBG9OKtwDzbIOcVVZKa38UWYnxs%2BLSHQlDFPu%2FyLDP7Cf2yL6PQh%2BRJDZbCfvh6tgjj3a2C8H1UWJeMWYFitXcHeLtLv1M%2FTiT4gW1yB5KWBdgKn%2BZ6iaQTEQSn6tIpLy7NrjL3qCjzbtIGngCaTnQOv%2FHzSNLPaLCQ9Vn4BSDrNWJ9vwrAz29SQR2fnFd6WXnurUz2DS3YC07qqa4FgKC%2FuL4OkOd40TloYZrlaUEW6FgBdJlYBcSTJgMQmfrRGSfTSP8%2FAozzwDQojFd%2BIK6QRKNy0m3InyAKQbNXKmxMx5znyTOB7G4aPYeKMS78i6080su%2Bpv%2FGbViNAddxMh%2F4E59Yu6DG4DtdRA6UcLsq7dT4wyCc9%2BUBUrs9Z2ZP6ZUjyYxlQ2lPfq9n5Qm6taV7DTMbDvWhlM%2FK6Q5jMYWjWO6pEhZNMYzqk0V63kDYHMrmKCimkXXz%2BwFfotVgPNHqbmIll6UDn%2BLHlSsqpXfqV1%2FyMWoV2F7odZjkBkF%2BSriF51it6ftZyLNYH9%2FnhDwB4lYCnznScTgR7wnsQ1tLKuZOTOFK93pxIPhIpo%2Bl1IUGEsB6rJrKr4MKtRMngtf52BxC84QcVg8jNF84rdX2cSPKOriOpUEBWqXD8%2FN0X9giMwyq3zvAY6pgE3ZTjis2ZEQty4ynKcNOVPe%2BgM3IdWUDHxe7waOyY87tRvU6e3wg7QViHjZXtt6g4biFNkKEZO2fFzAWaOS2JXY2nj4%2BPA17vN87YOk0S3gy1qt%2FibuSRF64o1CN9E50uGUnvcIXW4r4RA81vBtBATOCey1wvge%2FfJjUjCZM7%2F2AlPCJp6Xp21CY81BztiziYrAGN2k5Iwdet1%2BLY06y%2Fwodkwmxb6&X-Amz-Signature=b59b668c1a51a5ec11aeab66e75728a6e53fbf295190e8d5ccdeead827f6a9ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDAHN76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAe6RHdhT%2B2g10DzaoIZ1KzRZygipT26pknq0YiXPqg5AiA0WIJ9Gr1j5MS0sJ%2BMPxnbAzXCfAd7xaCCg1vJb9B5ySqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbj7tWp5lbzZNBG9OKtwDzbIOcVVZKa38UWYnxs%2BLSHQlDFPu%2FyLDP7Cf2yL6PQh%2BRJDZbCfvh6tgjj3a2C8H1UWJeMWYFitXcHeLtLv1M%2FTiT4gW1yB5KWBdgKn%2BZ6iaQTEQSn6tIpLy7NrjL3qCjzbtIGngCaTnQOv%2FHzSNLPaLCQ9Vn4BSDrNWJ9vwrAz29SQR2fnFd6WXnurUz2DS3YC07qqa4FgKC%2FuL4OkOd40TloYZrlaUEW6FgBdJlYBcSTJgMQmfrRGSfTSP8%2FAozzwDQojFd%2BIK6QRKNy0m3InyAKQbNXKmxMx5znyTOB7G4aPYeKMS78i6080su%2Bpv%2FGbViNAddxMh%2F4E59Yu6DG4DtdRA6UcLsq7dT4wyCc9%2BUBUrs9Z2ZP6ZUjyYxlQ2lPfq9n5Qm6taV7DTMbDvWhlM%2FK6Q5jMYWjWO6pEhZNMYzqk0V63kDYHMrmKCimkXXz%2BwFfotVgPNHqbmIll6UDn%2BLHlSsqpXfqV1%2FyMWoV2F7odZjkBkF%2BSriF51it6ftZyLNYH9%2FnhDwB4lYCnznScTgR7wnsQ1tLKuZOTOFK93pxIPhIpo%2Bl1IUGEsB6rJrKr4MKtRMngtf52BxC84QcVg8jNF84rdX2cSPKOriOpUEBWqXD8%2FN0X9giMwyq3zvAY6pgE3ZTjis2ZEQty4ynKcNOVPe%2BgM3IdWUDHxe7waOyY87tRvU6e3wg7QViHjZXtt6g4biFNkKEZO2fFzAWaOS2JXY2nj4%2BPA17vN87YOk0S3gy1qt%2FibuSRF64o1CN9E50uGUnvcIXW4r4RA81vBtBATOCey1wvge%2FfJjUjCZM7%2F2AlPCJp6Xp21CY81BztiziYrAGN2k5Iwdet1%2BLY06y%2Fwodkwmxb6&X-Amz-Signature=08cdd7916aa2f6ee01b64fd0e5b1e25b1872a206ad1f810fc14f7a3e0c3be440&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDAHN76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAe6RHdhT%2B2g10DzaoIZ1KzRZygipT26pknq0YiXPqg5AiA0WIJ9Gr1j5MS0sJ%2BMPxnbAzXCfAd7xaCCg1vJb9B5ySqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbj7tWp5lbzZNBG9OKtwDzbIOcVVZKa38UWYnxs%2BLSHQlDFPu%2FyLDP7Cf2yL6PQh%2BRJDZbCfvh6tgjj3a2C8H1UWJeMWYFitXcHeLtLv1M%2FTiT4gW1yB5KWBdgKn%2BZ6iaQTEQSn6tIpLy7NrjL3qCjzbtIGngCaTnQOv%2FHzSNLPaLCQ9Vn4BSDrNWJ9vwrAz29SQR2fnFd6WXnurUz2DS3YC07qqa4FgKC%2FuL4OkOd40TloYZrlaUEW6FgBdJlYBcSTJgMQmfrRGSfTSP8%2FAozzwDQojFd%2BIK6QRKNy0m3InyAKQbNXKmxMx5znyTOB7G4aPYeKMS78i6080su%2Bpv%2FGbViNAddxMh%2F4E59Yu6DG4DtdRA6UcLsq7dT4wyCc9%2BUBUrs9Z2ZP6ZUjyYxlQ2lPfq9n5Qm6taV7DTMbDvWhlM%2FK6Q5jMYWjWO6pEhZNMYzqk0V63kDYHMrmKCimkXXz%2BwFfotVgPNHqbmIll6UDn%2BLHlSsqpXfqV1%2FyMWoV2F7odZjkBkF%2BSriF51it6ftZyLNYH9%2FnhDwB4lYCnznScTgR7wnsQ1tLKuZOTOFK93pxIPhIpo%2Bl1IUGEsB6rJrKr4MKtRMngtf52BxC84QcVg8jNF84rdX2cSPKOriOpUEBWqXD8%2FN0X9giMwyq3zvAY6pgE3ZTjis2ZEQty4ynKcNOVPe%2BgM3IdWUDHxe7waOyY87tRvU6e3wg7QViHjZXtt6g4biFNkKEZO2fFzAWaOS2JXY2nj4%2BPA17vN87YOk0S3gy1qt%2FibuSRF64o1CN9E50uGUnvcIXW4r4RA81vBtBATOCey1wvge%2FfJjUjCZM7%2F2AlPCJp6Xp21CY81BztiziYrAGN2k5Iwdet1%2BLY06y%2Fwodkwmxb6&X-Amz-Signature=85c1ca4b11b26e453013fa77cd4f464766e9d432321be49a3696767977dcf46b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDAHN76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAe6RHdhT%2B2g10DzaoIZ1KzRZygipT26pknq0YiXPqg5AiA0WIJ9Gr1j5MS0sJ%2BMPxnbAzXCfAd7xaCCg1vJb9B5ySqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbj7tWp5lbzZNBG9OKtwDzbIOcVVZKa38UWYnxs%2BLSHQlDFPu%2FyLDP7Cf2yL6PQh%2BRJDZbCfvh6tgjj3a2C8H1UWJeMWYFitXcHeLtLv1M%2FTiT4gW1yB5KWBdgKn%2BZ6iaQTEQSn6tIpLy7NrjL3qCjzbtIGngCaTnQOv%2FHzSNLPaLCQ9Vn4BSDrNWJ9vwrAz29SQR2fnFd6WXnurUz2DS3YC07qqa4FgKC%2FuL4OkOd40TloYZrlaUEW6FgBdJlYBcSTJgMQmfrRGSfTSP8%2FAozzwDQojFd%2BIK6QRKNy0m3InyAKQbNXKmxMx5znyTOB7G4aPYeKMS78i6080su%2Bpv%2FGbViNAddxMh%2F4E59Yu6DG4DtdRA6UcLsq7dT4wyCc9%2BUBUrs9Z2ZP6ZUjyYxlQ2lPfq9n5Qm6taV7DTMbDvWhlM%2FK6Q5jMYWjWO6pEhZNMYzqk0V63kDYHMrmKCimkXXz%2BwFfotVgPNHqbmIll6UDn%2BLHlSsqpXfqV1%2FyMWoV2F7odZjkBkF%2BSriF51it6ftZyLNYH9%2FnhDwB4lYCnznScTgR7wnsQ1tLKuZOTOFK93pxIPhIpo%2Bl1IUGEsB6rJrKr4MKtRMngtf52BxC84QcVg8jNF84rdX2cSPKOriOpUEBWqXD8%2FN0X9giMwyq3zvAY6pgE3ZTjis2ZEQty4ynKcNOVPe%2BgM3IdWUDHxe7waOyY87tRvU6e3wg7QViHjZXtt6g4biFNkKEZO2fFzAWaOS2JXY2nj4%2BPA17vN87YOk0S3gy1qt%2FibuSRF64o1CN9E50uGUnvcIXW4r4RA81vBtBATOCey1wvge%2FfJjUjCZM7%2F2AlPCJp6Xp21CY81BztiziYrAGN2k5Iwdet1%2BLY06y%2Fwodkwmxb6&X-Amz-Signature=c77f987aa66afb79ff7a97871f5156bf6917f9c44ae808ee6b182cc74c2a8618&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDAHN76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAe6RHdhT%2B2g10DzaoIZ1KzRZygipT26pknq0YiXPqg5AiA0WIJ9Gr1j5MS0sJ%2BMPxnbAzXCfAd7xaCCg1vJb9B5ySqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbj7tWp5lbzZNBG9OKtwDzbIOcVVZKa38UWYnxs%2BLSHQlDFPu%2FyLDP7Cf2yL6PQh%2BRJDZbCfvh6tgjj3a2C8H1UWJeMWYFitXcHeLtLv1M%2FTiT4gW1yB5KWBdgKn%2BZ6iaQTEQSn6tIpLy7NrjL3qCjzbtIGngCaTnQOv%2FHzSNLPaLCQ9Vn4BSDrNWJ9vwrAz29SQR2fnFd6WXnurUz2DS3YC07qqa4FgKC%2FuL4OkOd40TloYZrlaUEW6FgBdJlYBcSTJgMQmfrRGSfTSP8%2FAozzwDQojFd%2BIK6QRKNy0m3InyAKQbNXKmxMx5znyTOB7G4aPYeKMS78i6080su%2Bpv%2FGbViNAddxMh%2F4E59Yu6DG4DtdRA6UcLsq7dT4wyCc9%2BUBUrs9Z2ZP6ZUjyYxlQ2lPfq9n5Qm6taV7DTMbDvWhlM%2FK6Q5jMYWjWO6pEhZNMYzqk0V63kDYHMrmKCimkXXz%2BwFfotVgPNHqbmIll6UDn%2BLHlSsqpXfqV1%2FyMWoV2F7odZjkBkF%2BSriF51it6ftZyLNYH9%2FnhDwB4lYCnznScTgR7wnsQ1tLKuZOTOFK93pxIPhIpo%2Bl1IUGEsB6rJrKr4MKtRMngtf52BxC84QcVg8jNF84rdX2cSPKOriOpUEBWqXD8%2FN0X9giMwyq3zvAY6pgE3ZTjis2ZEQty4ynKcNOVPe%2BgM3IdWUDHxe7waOyY87tRvU6e3wg7QViHjZXtt6g4biFNkKEZO2fFzAWaOS2JXY2nj4%2BPA17vN87YOk0S3gy1qt%2FibuSRF64o1CN9E50uGUnvcIXW4r4RA81vBtBATOCey1wvge%2FfJjUjCZM7%2F2AlPCJp6Xp21CY81BztiziYrAGN2k5Iwdet1%2BLY06y%2Fwodkwmxb6&X-Amz-Signature=a98a2dc453087935cd9e9d318b6dbd6e54e3b60405391dd13ed47ae5136785ea&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDAHN76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAe6RHdhT%2B2g10DzaoIZ1KzRZygipT26pknq0YiXPqg5AiA0WIJ9Gr1j5MS0sJ%2BMPxnbAzXCfAd7xaCCg1vJb9B5ySqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbj7tWp5lbzZNBG9OKtwDzbIOcVVZKa38UWYnxs%2BLSHQlDFPu%2FyLDP7Cf2yL6PQh%2BRJDZbCfvh6tgjj3a2C8H1UWJeMWYFitXcHeLtLv1M%2FTiT4gW1yB5KWBdgKn%2BZ6iaQTEQSn6tIpLy7NrjL3qCjzbtIGngCaTnQOv%2FHzSNLPaLCQ9Vn4BSDrNWJ9vwrAz29SQR2fnFd6WXnurUz2DS3YC07qqa4FgKC%2FuL4OkOd40TloYZrlaUEW6FgBdJlYBcSTJgMQmfrRGSfTSP8%2FAozzwDQojFd%2BIK6QRKNy0m3InyAKQbNXKmxMx5znyTOB7G4aPYeKMS78i6080su%2Bpv%2FGbViNAddxMh%2F4E59Yu6DG4DtdRA6UcLsq7dT4wyCc9%2BUBUrs9Z2ZP6ZUjyYxlQ2lPfq9n5Qm6taV7DTMbDvWhlM%2FK6Q5jMYWjWO6pEhZNMYzqk0V63kDYHMrmKCimkXXz%2BwFfotVgPNHqbmIll6UDn%2BLHlSsqpXfqV1%2FyMWoV2F7odZjkBkF%2BSriF51it6ftZyLNYH9%2FnhDwB4lYCnznScTgR7wnsQ1tLKuZOTOFK93pxIPhIpo%2Bl1IUGEsB6rJrKr4MKtRMngtf52BxC84QcVg8jNF84rdX2cSPKOriOpUEBWqXD8%2FN0X9giMwyq3zvAY6pgE3ZTjis2ZEQty4ynKcNOVPe%2BgM3IdWUDHxe7waOyY87tRvU6e3wg7QViHjZXtt6g4biFNkKEZO2fFzAWaOS2JXY2nj4%2BPA17vN87YOk0S3gy1qt%2FibuSRF64o1CN9E50uGUnvcIXW4r4RA81vBtBATOCey1wvge%2FfJjUjCZM7%2F2AlPCJp6Xp21CY81BztiziYrAGN2k5Iwdet1%2BLY06y%2Fwodkwmxb6&X-Amz-Signature=5891b50af0dae251794def8612d4d66f4de3030fb23c8765d5dc4354af540f90&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDAHN76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAe6RHdhT%2B2g10DzaoIZ1KzRZygipT26pknq0YiXPqg5AiA0WIJ9Gr1j5MS0sJ%2BMPxnbAzXCfAd7xaCCg1vJb9B5ySqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbj7tWp5lbzZNBG9OKtwDzbIOcVVZKa38UWYnxs%2BLSHQlDFPu%2FyLDP7Cf2yL6PQh%2BRJDZbCfvh6tgjj3a2C8H1UWJeMWYFitXcHeLtLv1M%2FTiT4gW1yB5KWBdgKn%2BZ6iaQTEQSn6tIpLy7NrjL3qCjzbtIGngCaTnQOv%2FHzSNLPaLCQ9Vn4BSDrNWJ9vwrAz29SQR2fnFd6WXnurUz2DS3YC07qqa4FgKC%2FuL4OkOd40TloYZrlaUEW6FgBdJlYBcSTJgMQmfrRGSfTSP8%2FAozzwDQojFd%2BIK6QRKNy0m3InyAKQbNXKmxMx5znyTOB7G4aPYeKMS78i6080su%2Bpv%2FGbViNAddxMh%2F4E59Yu6DG4DtdRA6UcLsq7dT4wyCc9%2BUBUrs9Z2ZP6ZUjyYxlQ2lPfq9n5Qm6taV7DTMbDvWhlM%2FK6Q5jMYWjWO6pEhZNMYzqk0V63kDYHMrmKCimkXXz%2BwFfotVgPNHqbmIll6UDn%2BLHlSsqpXfqV1%2FyMWoV2F7odZjkBkF%2BSriF51it6ftZyLNYH9%2FnhDwB4lYCnznScTgR7wnsQ1tLKuZOTOFK93pxIPhIpo%2Bl1IUGEsB6rJrKr4MKtRMngtf52BxC84QcVg8jNF84rdX2cSPKOriOpUEBWqXD8%2FN0X9giMwyq3zvAY6pgE3ZTjis2ZEQty4ynKcNOVPe%2BgM3IdWUDHxe7waOyY87tRvU6e3wg7QViHjZXtt6g4biFNkKEZO2fFzAWaOS2JXY2nj4%2BPA17vN87YOk0S3gy1qt%2FibuSRF64o1CN9E50uGUnvcIXW4r4RA81vBtBATOCey1wvge%2FfJjUjCZM7%2F2AlPCJp6Xp21CY81BztiziYrAGN2k5Iwdet1%2BLY06y%2Fwodkwmxb6&X-Amz-Signature=78e1df20d4a4910e61b76b9a6288e9df39f97f16269698abc223c122a7d1b9f9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
