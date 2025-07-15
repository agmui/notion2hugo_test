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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LUELKIC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHkc7jxLWC2S7Q9hrU8O%2Fw91p2hBd2NCt%2Fy0v2VnHS3FAiEA1MbuK2l4%2BnYb%2BeoJyxmUBQQxrU86ahHYq%2FFsqU3Grdkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAmHkRl4L%2Fu5R%2Fm%2BvSrcA%2BZWoBOPVsYsBq0Sj5rGLNL5MWfDmDRJVYvzzolkC70QmYSSt9AvcilGmb8E8jfmaRoqx6lOb9JlcAhGAKGWaezF2pZfxlg1%2BHv0EMTmw%2Bd5m%2B1alVUVIOMaVv4BcghikHeyJZAYa5m%2B1liTSv336vtOSSePyBH2jEaYR%2BIdJ6sxLVdqoOj6Kp68VXhiTm3VCUvO6bg%2FvqJyXrwEN4joOyX4%2BQyZtUOLXhyVOjH7Kblr2cdDcNAKDWQiAyU44p%2FdDtQic8JWXT5xRFbPUIiiwiZX5m415uPDRERoWu6rgK20kaJq3HCp1PnuWSOVxzySXh1ekwUiowgoqNzhZ3J0B0eDXdE1YdEgGFDpq5MnizCQhAU%2FSGghSLQU73VW6wxxKQWFIDljzFXxorsKc9Znh0GtpX3SpIa9ZW4VQryTRePSvqzWpox328KsdbWNtDcM9RQYQGUKoEsx6L%2BunfwZNBE1syrm7jnFDX9Z%2Fd56hVE3lJsT6LLQ12BYK7qd9VM5VAAsAaftZ%2F8TIFOHgvUqpoCv0P9NLIwGkAa%2Bgj2mLXmohmAwpgfoCk8yjr72y2oj6G0Q24Iqal4WfP8eu1El8swA5gUW7%2BOsNpYDaJnKf9rYJuyJyHU8qksDx9QYMIyH2sMGOqUBniAvk3WyGYpRwk2yJUgnSJZe0OXAaf7qpWs8BhA4iVSMtz3DtpfToNqRnnttzPfG%2B0hOs3sm7C9WpgsSKDeow2lS1R%2BUHhqI8sO1bQKwIrOdmnyf0ncwjMpBSkfR1Qk4oU4op2MqfIB21cXqsCNH9TQ1wLHfEumwCr1shdOzcqqzAdsJ8YmNh0m1LYvdwv2kpsKgFSS%2FDDBaMt1C8QlMGObG5oAi&X-Amz-Signature=a63b5a5d52a53c3642bf9448388a6daca09c0d5fb526bcbbbd2a24773e6b1fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LUELKIC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHkc7jxLWC2S7Q9hrU8O%2Fw91p2hBd2NCt%2Fy0v2VnHS3FAiEA1MbuK2l4%2BnYb%2BeoJyxmUBQQxrU86ahHYq%2FFsqU3Grdkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAmHkRl4L%2Fu5R%2Fm%2BvSrcA%2BZWoBOPVsYsBq0Sj5rGLNL5MWfDmDRJVYvzzolkC70QmYSSt9AvcilGmb8E8jfmaRoqx6lOb9JlcAhGAKGWaezF2pZfxlg1%2BHv0EMTmw%2Bd5m%2B1alVUVIOMaVv4BcghikHeyJZAYa5m%2B1liTSv336vtOSSePyBH2jEaYR%2BIdJ6sxLVdqoOj6Kp68VXhiTm3VCUvO6bg%2FvqJyXrwEN4joOyX4%2BQyZtUOLXhyVOjH7Kblr2cdDcNAKDWQiAyU44p%2FdDtQic8JWXT5xRFbPUIiiwiZX5m415uPDRERoWu6rgK20kaJq3HCp1PnuWSOVxzySXh1ekwUiowgoqNzhZ3J0B0eDXdE1YdEgGFDpq5MnizCQhAU%2FSGghSLQU73VW6wxxKQWFIDljzFXxorsKc9Znh0GtpX3SpIa9ZW4VQryTRePSvqzWpox328KsdbWNtDcM9RQYQGUKoEsx6L%2BunfwZNBE1syrm7jnFDX9Z%2Fd56hVE3lJsT6LLQ12BYK7qd9VM5VAAsAaftZ%2F8TIFOHgvUqpoCv0P9NLIwGkAa%2Bgj2mLXmohmAwpgfoCk8yjr72y2oj6G0Q24Iqal4WfP8eu1El8swA5gUW7%2BOsNpYDaJnKf9rYJuyJyHU8qksDx9QYMIyH2sMGOqUBniAvk3WyGYpRwk2yJUgnSJZe0OXAaf7qpWs8BhA4iVSMtz3DtpfToNqRnnttzPfG%2B0hOs3sm7C9WpgsSKDeow2lS1R%2BUHhqI8sO1bQKwIrOdmnyf0ncwjMpBSkfR1Qk4oU4op2MqfIB21cXqsCNH9TQ1wLHfEumwCr1shdOzcqqzAdsJ8YmNh0m1LYvdwv2kpsKgFSS%2FDDBaMt1C8QlMGObG5oAi&X-Amz-Signature=c37a8d4f0359cf96a6f5d3e91aecfaf174d5f692fab6cf4292463ca3de2d728e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LUELKIC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHkc7jxLWC2S7Q9hrU8O%2Fw91p2hBd2NCt%2Fy0v2VnHS3FAiEA1MbuK2l4%2BnYb%2BeoJyxmUBQQxrU86ahHYq%2FFsqU3Grdkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAmHkRl4L%2Fu5R%2Fm%2BvSrcA%2BZWoBOPVsYsBq0Sj5rGLNL5MWfDmDRJVYvzzolkC70QmYSSt9AvcilGmb8E8jfmaRoqx6lOb9JlcAhGAKGWaezF2pZfxlg1%2BHv0EMTmw%2Bd5m%2B1alVUVIOMaVv4BcghikHeyJZAYa5m%2B1liTSv336vtOSSePyBH2jEaYR%2BIdJ6sxLVdqoOj6Kp68VXhiTm3VCUvO6bg%2FvqJyXrwEN4joOyX4%2BQyZtUOLXhyVOjH7Kblr2cdDcNAKDWQiAyU44p%2FdDtQic8JWXT5xRFbPUIiiwiZX5m415uPDRERoWu6rgK20kaJq3HCp1PnuWSOVxzySXh1ekwUiowgoqNzhZ3J0B0eDXdE1YdEgGFDpq5MnizCQhAU%2FSGghSLQU73VW6wxxKQWFIDljzFXxorsKc9Znh0GtpX3SpIa9ZW4VQryTRePSvqzWpox328KsdbWNtDcM9RQYQGUKoEsx6L%2BunfwZNBE1syrm7jnFDX9Z%2Fd56hVE3lJsT6LLQ12BYK7qd9VM5VAAsAaftZ%2F8TIFOHgvUqpoCv0P9NLIwGkAa%2Bgj2mLXmohmAwpgfoCk8yjr72y2oj6G0Q24Iqal4WfP8eu1El8swA5gUW7%2BOsNpYDaJnKf9rYJuyJyHU8qksDx9QYMIyH2sMGOqUBniAvk3WyGYpRwk2yJUgnSJZe0OXAaf7qpWs8BhA4iVSMtz3DtpfToNqRnnttzPfG%2B0hOs3sm7C9WpgsSKDeow2lS1R%2BUHhqI8sO1bQKwIrOdmnyf0ncwjMpBSkfR1Qk4oU4op2MqfIB21cXqsCNH9TQ1wLHfEumwCr1shdOzcqqzAdsJ8YmNh0m1LYvdwv2kpsKgFSS%2FDDBaMt1C8QlMGObG5oAi&X-Amz-Signature=5c03e844a412d1ceeee9f867e1d58424474ec301bf48eb371ff0d7fe1e136c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LUELKIC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHkc7jxLWC2S7Q9hrU8O%2Fw91p2hBd2NCt%2Fy0v2VnHS3FAiEA1MbuK2l4%2BnYb%2BeoJyxmUBQQxrU86ahHYq%2FFsqU3Grdkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAmHkRl4L%2Fu5R%2Fm%2BvSrcA%2BZWoBOPVsYsBq0Sj5rGLNL5MWfDmDRJVYvzzolkC70QmYSSt9AvcilGmb8E8jfmaRoqx6lOb9JlcAhGAKGWaezF2pZfxlg1%2BHv0EMTmw%2Bd5m%2B1alVUVIOMaVv4BcghikHeyJZAYa5m%2B1liTSv336vtOSSePyBH2jEaYR%2BIdJ6sxLVdqoOj6Kp68VXhiTm3VCUvO6bg%2FvqJyXrwEN4joOyX4%2BQyZtUOLXhyVOjH7Kblr2cdDcNAKDWQiAyU44p%2FdDtQic8JWXT5xRFbPUIiiwiZX5m415uPDRERoWu6rgK20kaJq3HCp1PnuWSOVxzySXh1ekwUiowgoqNzhZ3J0B0eDXdE1YdEgGFDpq5MnizCQhAU%2FSGghSLQU73VW6wxxKQWFIDljzFXxorsKc9Znh0GtpX3SpIa9ZW4VQryTRePSvqzWpox328KsdbWNtDcM9RQYQGUKoEsx6L%2BunfwZNBE1syrm7jnFDX9Z%2Fd56hVE3lJsT6LLQ12BYK7qd9VM5VAAsAaftZ%2F8TIFOHgvUqpoCv0P9NLIwGkAa%2Bgj2mLXmohmAwpgfoCk8yjr72y2oj6G0Q24Iqal4WfP8eu1El8swA5gUW7%2BOsNpYDaJnKf9rYJuyJyHU8qksDx9QYMIyH2sMGOqUBniAvk3WyGYpRwk2yJUgnSJZe0OXAaf7qpWs8BhA4iVSMtz3DtpfToNqRnnttzPfG%2B0hOs3sm7C9WpgsSKDeow2lS1R%2BUHhqI8sO1bQKwIrOdmnyf0ncwjMpBSkfR1Qk4oU4op2MqfIB21cXqsCNH9TQ1wLHfEumwCr1shdOzcqqzAdsJ8YmNh0m1LYvdwv2kpsKgFSS%2FDDBaMt1C8QlMGObG5oAi&X-Amz-Signature=2f061b3c31d02e4824037e48a877450220f80cc8398808c6dcf605d9d5948f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LUELKIC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHkc7jxLWC2S7Q9hrU8O%2Fw91p2hBd2NCt%2Fy0v2VnHS3FAiEA1MbuK2l4%2BnYb%2BeoJyxmUBQQxrU86ahHYq%2FFsqU3Grdkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAmHkRl4L%2Fu5R%2Fm%2BvSrcA%2BZWoBOPVsYsBq0Sj5rGLNL5MWfDmDRJVYvzzolkC70QmYSSt9AvcilGmb8E8jfmaRoqx6lOb9JlcAhGAKGWaezF2pZfxlg1%2BHv0EMTmw%2Bd5m%2B1alVUVIOMaVv4BcghikHeyJZAYa5m%2B1liTSv336vtOSSePyBH2jEaYR%2BIdJ6sxLVdqoOj6Kp68VXhiTm3VCUvO6bg%2FvqJyXrwEN4joOyX4%2BQyZtUOLXhyVOjH7Kblr2cdDcNAKDWQiAyU44p%2FdDtQic8JWXT5xRFbPUIiiwiZX5m415uPDRERoWu6rgK20kaJq3HCp1PnuWSOVxzySXh1ekwUiowgoqNzhZ3J0B0eDXdE1YdEgGFDpq5MnizCQhAU%2FSGghSLQU73VW6wxxKQWFIDljzFXxorsKc9Znh0GtpX3SpIa9ZW4VQryTRePSvqzWpox328KsdbWNtDcM9RQYQGUKoEsx6L%2BunfwZNBE1syrm7jnFDX9Z%2Fd56hVE3lJsT6LLQ12BYK7qd9VM5VAAsAaftZ%2F8TIFOHgvUqpoCv0P9NLIwGkAa%2Bgj2mLXmohmAwpgfoCk8yjr72y2oj6G0Q24Iqal4WfP8eu1El8swA5gUW7%2BOsNpYDaJnKf9rYJuyJyHU8qksDx9QYMIyH2sMGOqUBniAvk3WyGYpRwk2yJUgnSJZe0OXAaf7qpWs8BhA4iVSMtz3DtpfToNqRnnttzPfG%2B0hOs3sm7C9WpgsSKDeow2lS1R%2BUHhqI8sO1bQKwIrOdmnyf0ncwjMpBSkfR1Qk4oU4op2MqfIB21cXqsCNH9TQ1wLHfEumwCr1shdOzcqqzAdsJ8YmNh0m1LYvdwv2kpsKgFSS%2FDDBaMt1C8QlMGObG5oAi&X-Amz-Signature=0fe9b867f029b37d3ab3ab29c7f59937e34b7c5b51966fd8bdaf84e3e5f44176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LUELKIC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHkc7jxLWC2S7Q9hrU8O%2Fw91p2hBd2NCt%2Fy0v2VnHS3FAiEA1MbuK2l4%2BnYb%2BeoJyxmUBQQxrU86ahHYq%2FFsqU3Grdkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAmHkRl4L%2Fu5R%2Fm%2BvSrcA%2BZWoBOPVsYsBq0Sj5rGLNL5MWfDmDRJVYvzzolkC70QmYSSt9AvcilGmb8E8jfmaRoqx6lOb9JlcAhGAKGWaezF2pZfxlg1%2BHv0EMTmw%2Bd5m%2B1alVUVIOMaVv4BcghikHeyJZAYa5m%2B1liTSv336vtOSSePyBH2jEaYR%2BIdJ6sxLVdqoOj6Kp68VXhiTm3VCUvO6bg%2FvqJyXrwEN4joOyX4%2BQyZtUOLXhyVOjH7Kblr2cdDcNAKDWQiAyU44p%2FdDtQic8JWXT5xRFbPUIiiwiZX5m415uPDRERoWu6rgK20kaJq3HCp1PnuWSOVxzySXh1ekwUiowgoqNzhZ3J0B0eDXdE1YdEgGFDpq5MnizCQhAU%2FSGghSLQU73VW6wxxKQWFIDljzFXxorsKc9Znh0GtpX3SpIa9ZW4VQryTRePSvqzWpox328KsdbWNtDcM9RQYQGUKoEsx6L%2BunfwZNBE1syrm7jnFDX9Z%2Fd56hVE3lJsT6LLQ12BYK7qd9VM5VAAsAaftZ%2F8TIFOHgvUqpoCv0P9NLIwGkAa%2Bgj2mLXmohmAwpgfoCk8yjr72y2oj6G0Q24Iqal4WfP8eu1El8swA5gUW7%2BOsNpYDaJnKf9rYJuyJyHU8qksDx9QYMIyH2sMGOqUBniAvk3WyGYpRwk2yJUgnSJZe0OXAaf7qpWs8BhA4iVSMtz3DtpfToNqRnnttzPfG%2B0hOs3sm7C9WpgsSKDeow2lS1R%2BUHhqI8sO1bQKwIrOdmnyf0ncwjMpBSkfR1Qk4oU4op2MqfIB21cXqsCNH9TQ1wLHfEumwCr1shdOzcqqzAdsJ8YmNh0m1LYvdwv2kpsKgFSS%2FDDBaMt1C8QlMGObG5oAi&X-Amz-Signature=731633936d31629a32c7e60908a30a374c9c23604fcfd0622a23e3b11f89a658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LUELKIC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHkc7jxLWC2S7Q9hrU8O%2Fw91p2hBd2NCt%2Fy0v2VnHS3FAiEA1MbuK2l4%2BnYb%2BeoJyxmUBQQxrU86ahHYq%2FFsqU3Grdkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAmHkRl4L%2Fu5R%2Fm%2BvSrcA%2BZWoBOPVsYsBq0Sj5rGLNL5MWfDmDRJVYvzzolkC70QmYSSt9AvcilGmb8E8jfmaRoqx6lOb9JlcAhGAKGWaezF2pZfxlg1%2BHv0EMTmw%2Bd5m%2B1alVUVIOMaVv4BcghikHeyJZAYa5m%2B1liTSv336vtOSSePyBH2jEaYR%2BIdJ6sxLVdqoOj6Kp68VXhiTm3VCUvO6bg%2FvqJyXrwEN4joOyX4%2BQyZtUOLXhyVOjH7Kblr2cdDcNAKDWQiAyU44p%2FdDtQic8JWXT5xRFbPUIiiwiZX5m415uPDRERoWu6rgK20kaJq3HCp1PnuWSOVxzySXh1ekwUiowgoqNzhZ3J0B0eDXdE1YdEgGFDpq5MnizCQhAU%2FSGghSLQU73VW6wxxKQWFIDljzFXxorsKc9Znh0GtpX3SpIa9ZW4VQryTRePSvqzWpox328KsdbWNtDcM9RQYQGUKoEsx6L%2BunfwZNBE1syrm7jnFDX9Z%2Fd56hVE3lJsT6LLQ12BYK7qd9VM5VAAsAaftZ%2F8TIFOHgvUqpoCv0P9NLIwGkAa%2Bgj2mLXmohmAwpgfoCk8yjr72y2oj6G0Q24Iqal4WfP8eu1El8swA5gUW7%2BOsNpYDaJnKf9rYJuyJyHU8qksDx9QYMIyH2sMGOqUBniAvk3WyGYpRwk2yJUgnSJZe0OXAaf7qpWs8BhA4iVSMtz3DtpfToNqRnnttzPfG%2B0hOs3sm7C9WpgsSKDeow2lS1R%2BUHhqI8sO1bQKwIrOdmnyf0ncwjMpBSkfR1Qk4oU4op2MqfIB21cXqsCNH9TQ1wLHfEumwCr1shdOzcqqzAdsJ8YmNh0m1LYvdwv2kpsKgFSS%2FDDBaMt1C8QlMGObG5oAi&X-Amz-Signature=10bc2c0b87e1d53befadeac5e19a504c46eb1d9aa7f228082ca3a74f993ef313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
