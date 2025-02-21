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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MYUGDI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnw7ly6nypzcqfmYA1NhewKliTbuIx1IDm%2BMrR7c7cnAIgGifpF3%2F49tPdZHNRcRF4avsV8fx8bEFPSAdkGmlRM5kqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo577b4iBEutG29sSrcA6dEIuFLIf1D8HHA%2FKi48tfunYWKXZKJSJ4N%2BYxS6HPN0jnT9CxSQqf4ewVf%2BHPLv%2ByY8N1lG9iw%2FGyswb51x8a2XnG%2FZM7uTwiq8iAPA7vFwtFUzL3CFUkLiTGiLcfkz8WsR0sDjl%2BzIyrZNV%2BJ2Ptrc4lU%2FGRSVKhW9NvAxk7XCqsL2Cj2HsPaaWD%2Bml7Swzu4%2BatJ7Gru%2Fdzuj%2BYSmBEImppYyRZQDyyPNgGZg6dbldeVR5SRECyJB4qwZe2UHR9ojsI4hzUDVffaYAuJYkEBGelQbJAT0DrTMfNdNpDiMb%2Fj%2B8wI4k9Llr6WHQWXjeagNesSNEeJbd4buOhR3spey2p4qDmU2M1i%2FQ2x6V%2BNe95RGvSkDhhWJBo9T16ZtbSAOVatGHIs7OJ1t9O4EDDt3l%2BKhml%2BgQrhIOb1IQr9bzQqxMunvv6ngHofvFaTGy6BM%2BEy0e%2BmvhEJsRCUGbzoJvt3KDYM6fh%2F7wPscddjPxVxIG2jd%2BB6U45eOfO7pCnskrOJ706u5LDbNhHy32IDIcezquFXQ33nFn8AD6oSW2bP3U2rTqMfjIn0ak3hQ1Os8E4eECmBrA6kGjD8MgjLWcRSBGCy6hM5yOWTYXas3LJ1eVBWuNtqB21EMLrB4L0GOqUBE1n1Z2%2BccZLlGZmAz765J7FoCukQKgbveEnwv%2FLokWHYAyGdMotfn3svFYq7NN9QqLk1RBzJA3JXNxv8pazp3610virmjjWKYvCyLC6esD%2Bq8xGLdvnTlopOoQd9xr3hJ0gSHIEeyb9u%2FclhZeg6nmP41kfxl1YiF8bzpc5x1iaCoG84IVk19Azal%2BwPAbPWllDN51vkWwfPf0xmR%2F3WVtKyP2ll&X-Amz-Signature=cbdae9124633ef1647fc3d5a359e592cfe44d7f4f4fca07b6f289024b02d2752&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MYUGDI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnw7ly6nypzcqfmYA1NhewKliTbuIx1IDm%2BMrR7c7cnAIgGifpF3%2F49tPdZHNRcRF4avsV8fx8bEFPSAdkGmlRM5kqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo577b4iBEutG29sSrcA6dEIuFLIf1D8HHA%2FKi48tfunYWKXZKJSJ4N%2BYxS6HPN0jnT9CxSQqf4ewVf%2BHPLv%2ByY8N1lG9iw%2FGyswb51x8a2XnG%2FZM7uTwiq8iAPA7vFwtFUzL3CFUkLiTGiLcfkz8WsR0sDjl%2BzIyrZNV%2BJ2Ptrc4lU%2FGRSVKhW9NvAxk7XCqsL2Cj2HsPaaWD%2Bml7Swzu4%2BatJ7Gru%2Fdzuj%2BYSmBEImppYyRZQDyyPNgGZg6dbldeVR5SRECyJB4qwZe2UHR9ojsI4hzUDVffaYAuJYkEBGelQbJAT0DrTMfNdNpDiMb%2Fj%2B8wI4k9Llr6WHQWXjeagNesSNEeJbd4buOhR3spey2p4qDmU2M1i%2FQ2x6V%2BNe95RGvSkDhhWJBo9T16ZtbSAOVatGHIs7OJ1t9O4EDDt3l%2BKhml%2BgQrhIOb1IQr9bzQqxMunvv6ngHofvFaTGy6BM%2BEy0e%2BmvhEJsRCUGbzoJvt3KDYM6fh%2F7wPscddjPxVxIG2jd%2BB6U45eOfO7pCnskrOJ706u5LDbNhHy32IDIcezquFXQ33nFn8AD6oSW2bP3U2rTqMfjIn0ak3hQ1Os8E4eECmBrA6kGjD8MgjLWcRSBGCy6hM5yOWTYXas3LJ1eVBWuNtqB21EMLrB4L0GOqUBE1n1Z2%2BccZLlGZmAz765J7FoCukQKgbveEnwv%2FLokWHYAyGdMotfn3svFYq7NN9QqLk1RBzJA3JXNxv8pazp3610virmjjWKYvCyLC6esD%2Bq8xGLdvnTlopOoQd9xr3hJ0gSHIEeyb9u%2FclhZeg6nmP41kfxl1YiF8bzpc5x1iaCoG84IVk19Azal%2BwPAbPWllDN51vkWwfPf0xmR%2F3WVtKyP2ll&X-Amz-Signature=a837129c44e881630bfecc1a02a03b27216ab84998ee520f11afe71c47da1d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MYUGDI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnw7ly6nypzcqfmYA1NhewKliTbuIx1IDm%2BMrR7c7cnAIgGifpF3%2F49tPdZHNRcRF4avsV8fx8bEFPSAdkGmlRM5kqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo577b4iBEutG29sSrcA6dEIuFLIf1D8HHA%2FKi48tfunYWKXZKJSJ4N%2BYxS6HPN0jnT9CxSQqf4ewVf%2BHPLv%2ByY8N1lG9iw%2FGyswb51x8a2XnG%2FZM7uTwiq8iAPA7vFwtFUzL3CFUkLiTGiLcfkz8WsR0sDjl%2BzIyrZNV%2BJ2Ptrc4lU%2FGRSVKhW9NvAxk7XCqsL2Cj2HsPaaWD%2Bml7Swzu4%2BatJ7Gru%2Fdzuj%2BYSmBEImppYyRZQDyyPNgGZg6dbldeVR5SRECyJB4qwZe2UHR9ojsI4hzUDVffaYAuJYkEBGelQbJAT0DrTMfNdNpDiMb%2Fj%2B8wI4k9Llr6WHQWXjeagNesSNEeJbd4buOhR3spey2p4qDmU2M1i%2FQ2x6V%2BNe95RGvSkDhhWJBo9T16ZtbSAOVatGHIs7OJ1t9O4EDDt3l%2BKhml%2BgQrhIOb1IQr9bzQqxMunvv6ngHofvFaTGy6BM%2BEy0e%2BmvhEJsRCUGbzoJvt3KDYM6fh%2F7wPscddjPxVxIG2jd%2BB6U45eOfO7pCnskrOJ706u5LDbNhHy32IDIcezquFXQ33nFn8AD6oSW2bP3U2rTqMfjIn0ak3hQ1Os8E4eECmBrA6kGjD8MgjLWcRSBGCy6hM5yOWTYXas3LJ1eVBWuNtqB21EMLrB4L0GOqUBE1n1Z2%2BccZLlGZmAz765J7FoCukQKgbveEnwv%2FLokWHYAyGdMotfn3svFYq7NN9QqLk1RBzJA3JXNxv8pazp3610virmjjWKYvCyLC6esD%2Bq8xGLdvnTlopOoQd9xr3hJ0gSHIEeyb9u%2FclhZeg6nmP41kfxl1YiF8bzpc5x1iaCoG84IVk19Azal%2BwPAbPWllDN51vkWwfPf0xmR%2F3WVtKyP2ll&X-Amz-Signature=bbec5c4361c4bf47fb6eb2546f9a9d409a8c9dc02bdbce0146732f0ff8f8ec07&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MYUGDI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnw7ly6nypzcqfmYA1NhewKliTbuIx1IDm%2BMrR7c7cnAIgGifpF3%2F49tPdZHNRcRF4avsV8fx8bEFPSAdkGmlRM5kqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo577b4iBEutG29sSrcA6dEIuFLIf1D8HHA%2FKi48tfunYWKXZKJSJ4N%2BYxS6HPN0jnT9CxSQqf4ewVf%2BHPLv%2ByY8N1lG9iw%2FGyswb51x8a2XnG%2FZM7uTwiq8iAPA7vFwtFUzL3CFUkLiTGiLcfkz8WsR0sDjl%2BzIyrZNV%2BJ2Ptrc4lU%2FGRSVKhW9NvAxk7XCqsL2Cj2HsPaaWD%2Bml7Swzu4%2BatJ7Gru%2Fdzuj%2BYSmBEImppYyRZQDyyPNgGZg6dbldeVR5SRECyJB4qwZe2UHR9ojsI4hzUDVffaYAuJYkEBGelQbJAT0DrTMfNdNpDiMb%2Fj%2B8wI4k9Llr6WHQWXjeagNesSNEeJbd4buOhR3spey2p4qDmU2M1i%2FQ2x6V%2BNe95RGvSkDhhWJBo9T16ZtbSAOVatGHIs7OJ1t9O4EDDt3l%2BKhml%2BgQrhIOb1IQr9bzQqxMunvv6ngHofvFaTGy6BM%2BEy0e%2BmvhEJsRCUGbzoJvt3KDYM6fh%2F7wPscddjPxVxIG2jd%2BB6U45eOfO7pCnskrOJ706u5LDbNhHy32IDIcezquFXQ33nFn8AD6oSW2bP3U2rTqMfjIn0ak3hQ1Os8E4eECmBrA6kGjD8MgjLWcRSBGCy6hM5yOWTYXas3LJ1eVBWuNtqB21EMLrB4L0GOqUBE1n1Z2%2BccZLlGZmAz765J7FoCukQKgbveEnwv%2FLokWHYAyGdMotfn3svFYq7NN9QqLk1RBzJA3JXNxv8pazp3610virmjjWKYvCyLC6esD%2Bq8xGLdvnTlopOoQd9xr3hJ0gSHIEeyb9u%2FclhZeg6nmP41kfxl1YiF8bzpc5x1iaCoG84IVk19Azal%2BwPAbPWllDN51vkWwfPf0xmR%2F3WVtKyP2ll&X-Amz-Signature=047bce1100cb17bbd59a470de1d5db9aad9e765c56515f6fce3920d6aef7f396&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MYUGDI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnw7ly6nypzcqfmYA1NhewKliTbuIx1IDm%2BMrR7c7cnAIgGifpF3%2F49tPdZHNRcRF4avsV8fx8bEFPSAdkGmlRM5kqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo577b4iBEutG29sSrcA6dEIuFLIf1D8HHA%2FKi48tfunYWKXZKJSJ4N%2BYxS6HPN0jnT9CxSQqf4ewVf%2BHPLv%2ByY8N1lG9iw%2FGyswb51x8a2XnG%2FZM7uTwiq8iAPA7vFwtFUzL3CFUkLiTGiLcfkz8WsR0sDjl%2BzIyrZNV%2BJ2Ptrc4lU%2FGRSVKhW9NvAxk7XCqsL2Cj2HsPaaWD%2Bml7Swzu4%2BatJ7Gru%2Fdzuj%2BYSmBEImppYyRZQDyyPNgGZg6dbldeVR5SRECyJB4qwZe2UHR9ojsI4hzUDVffaYAuJYkEBGelQbJAT0DrTMfNdNpDiMb%2Fj%2B8wI4k9Llr6WHQWXjeagNesSNEeJbd4buOhR3spey2p4qDmU2M1i%2FQ2x6V%2BNe95RGvSkDhhWJBo9T16ZtbSAOVatGHIs7OJ1t9O4EDDt3l%2BKhml%2BgQrhIOb1IQr9bzQqxMunvv6ngHofvFaTGy6BM%2BEy0e%2BmvhEJsRCUGbzoJvt3KDYM6fh%2F7wPscddjPxVxIG2jd%2BB6U45eOfO7pCnskrOJ706u5LDbNhHy32IDIcezquFXQ33nFn8AD6oSW2bP3U2rTqMfjIn0ak3hQ1Os8E4eECmBrA6kGjD8MgjLWcRSBGCy6hM5yOWTYXas3LJ1eVBWuNtqB21EMLrB4L0GOqUBE1n1Z2%2BccZLlGZmAz765J7FoCukQKgbveEnwv%2FLokWHYAyGdMotfn3svFYq7NN9QqLk1RBzJA3JXNxv8pazp3610virmjjWKYvCyLC6esD%2Bq8xGLdvnTlopOoQd9xr3hJ0gSHIEeyb9u%2FclhZeg6nmP41kfxl1YiF8bzpc5x1iaCoG84IVk19Azal%2BwPAbPWllDN51vkWwfPf0xmR%2F3WVtKyP2ll&X-Amz-Signature=0147524c79ca457ca1e7b8a9a5ec7d33b239da699526634d979c9ca851bd2df1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MYUGDI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnw7ly6nypzcqfmYA1NhewKliTbuIx1IDm%2BMrR7c7cnAIgGifpF3%2F49tPdZHNRcRF4avsV8fx8bEFPSAdkGmlRM5kqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo577b4iBEutG29sSrcA6dEIuFLIf1D8HHA%2FKi48tfunYWKXZKJSJ4N%2BYxS6HPN0jnT9CxSQqf4ewVf%2BHPLv%2ByY8N1lG9iw%2FGyswb51x8a2XnG%2FZM7uTwiq8iAPA7vFwtFUzL3CFUkLiTGiLcfkz8WsR0sDjl%2BzIyrZNV%2BJ2Ptrc4lU%2FGRSVKhW9NvAxk7XCqsL2Cj2HsPaaWD%2Bml7Swzu4%2BatJ7Gru%2Fdzuj%2BYSmBEImppYyRZQDyyPNgGZg6dbldeVR5SRECyJB4qwZe2UHR9ojsI4hzUDVffaYAuJYkEBGelQbJAT0DrTMfNdNpDiMb%2Fj%2B8wI4k9Llr6WHQWXjeagNesSNEeJbd4buOhR3spey2p4qDmU2M1i%2FQ2x6V%2BNe95RGvSkDhhWJBo9T16ZtbSAOVatGHIs7OJ1t9O4EDDt3l%2BKhml%2BgQrhIOb1IQr9bzQqxMunvv6ngHofvFaTGy6BM%2BEy0e%2BmvhEJsRCUGbzoJvt3KDYM6fh%2F7wPscddjPxVxIG2jd%2BB6U45eOfO7pCnskrOJ706u5LDbNhHy32IDIcezquFXQ33nFn8AD6oSW2bP3U2rTqMfjIn0ak3hQ1Os8E4eECmBrA6kGjD8MgjLWcRSBGCy6hM5yOWTYXas3LJ1eVBWuNtqB21EMLrB4L0GOqUBE1n1Z2%2BccZLlGZmAz765J7FoCukQKgbveEnwv%2FLokWHYAyGdMotfn3svFYq7NN9QqLk1RBzJA3JXNxv8pazp3610virmjjWKYvCyLC6esD%2Bq8xGLdvnTlopOoQd9xr3hJ0gSHIEeyb9u%2FclhZeg6nmP41kfxl1YiF8bzpc5x1iaCoG84IVk19Azal%2BwPAbPWllDN51vkWwfPf0xmR%2F3WVtKyP2ll&X-Amz-Signature=d1cf0c674a5be9fce4256a8a8063a09e48d64acc993bed89b166e80d4286fdd5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MYUGDI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnw7ly6nypzcqfmYA1NhewKliTbuIx1IDm%2BMrR7c7cnAIgGifpF3%2F49tPdZHNRcRF4avsV8fx8bEFPSAdkGmlRM5kqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo577b4iBEutG29sSrcA6dEIuFLIf1D8HHA%2FKi48tfunYWKXZKJSJ4N%2BYxS6HPN0jnT9CxSQqf4ewVf%2BHPLv%2ByY8N1lG9iw%2FGyswb51x8a2XnG%2FZM7uTwiq8iAPA7vFwtFUzL3CFUkLiTGiLcfkz8WsR0sDjl%2BzIyrZNV%2BJ2Ptrc4lU%2FGRSVKhW9NvAxk7XCqsL2Cj2HsPaaWD%2Bml7Swzu4%2BatJ7Gru%2Fdzuj%2BYSmBEImppYyRZQDyyPNgGZg6dbldeVR5SRECyJB4qwZe2UHR9ojsI4hzUDVffaYAuJYkEBGelQbJAT0DrTMfNdNpDiMb%2Fj%2B8wI4k9Llr6WHQWXjeagNesSNEeJbd4buOhR3spey2p4qDmU2M1i%2FQ2x6V%2BNe95RGvSkDhhWJBo9T16ZtbSAOVatGHIs7OJ1t9O4EDDt3l%2BKhml%2BgQrhIOb1IQr9bzQqxMunvv6ngHofvFaTGy6BM%2BEy0e%2BmvhEJsRCUGbzoJvt3KDYM6fh%2F7wPscddjPxVxIG2jd%2BB6U45eOfO7pCnskrOJ706u5LDbNhHy32IDIcezquFXQ33nFn8AD6oSW2bP3U2rTqMfjIn0ak3hQ1Os8E4eECmBrA6kGjD8MgjLWcRSBGCy6hM5yOWTYXas3LJ1eVBWuNtqB21EMLrB4L0GOqUBE1n1Z2%2BccZLlGZmAz765J7FoCukQKgbveEnwv%2FLokWHYAyGdMotfn3svFYq7NN9QqLk1RBzJA3JXNxv8pazp3610virmjjWKYvCyLC6esD%2Bq8xGLdvnTlopOoQd9xr3hJ0gSHIEeyb9u%2FclhZeg6nmP41kfxl1YiF8bzpc5x1iaCoG84IVk19Azal%2BwPAbPWllDN51vkWwfPf0xmR%2F3WVtKyP2ll&X-Amz-Signature=e644901bf025d1f60ca872bf677e8e9f60e61d270635679f7fe4da24552192b8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
