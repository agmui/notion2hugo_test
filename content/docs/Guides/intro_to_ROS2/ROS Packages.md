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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHK6NAMW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDC9TlaMiUEQ4qbRxBRXyqWAEcZzLfaGdPFfVPgA257TgIhAKF1QE8EXUVWitL6oWr9X5ig%2B22UtUyRaswgrBLycGmSKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9j8Bw4XKy59xrEYq3AM7lW%2BXoCSX1gRsmkXCzM42sHI7zupWlsEPlocxx1FiC2VqsXJK7s1%2Bkmf1fXziIW5%2BPEpETeA%2FDnqqFKb5uxpwYn5R7P9VjTTTci%2FebE%2BJ1xarMiJ0fhdH%2BJTz8iETgMPfkNQVvooL9AFKdJZMkoABAgB37TghVx%2BZkDWXZpn8zOE2hjXCqk9yhllLz5YtNEjWjxQufD7gL3LAEfLueindU7DiGUc%2BMryyLWXAaCA6YzLezLzmHcoZ8EoY2Xo17Syhilo5SO5t0w3V6m5TXBZf%2FZy4arNno2%2B5WvfZHc2Qeie6mwMZqIebpEXTibMMMwZLdIp30Xt%2BuhDiJl10gpmT7YumBLbPSMJv%2Fwj%2Bxy9fTnt6vu%2B6VpPfpib2VIhyeluuayEsp0ilI7N2pbGpBMNU8IoTTjeRBwgcWVP7c%2Fisfz3ovfuHo0ckPvbIFWXkuXjxRyuBdaAMEd7%2FXineLuHbDzkXPT%2FqDunmabr5ebf4%2FffTynFoPfHFRvt0PSPcR86CzXJtQZzZ3oGQTXyPpXfKYyTYK7V2%2BPPVYIZ5eVxOeHGduoKGh2MJseo0vsmFVgh1QHT1WGWBhdrcdCAVtVRd8BlqIexpmqXc8E016mKuxzRwlcLac%2BHkBQ9aYjDihrnBBjqkAUbnPsZFDeJcVjvVBenCZt9KZQrOdXcZjRKWnsbqS0G73FC%2B1C3pGXS%2Bt31MxyS1CfNw22i6ZOy8qeNFve9%2FVBm3KcxqzRl%2FshvOt%2BK6kCtQukTbyWA1PO%2B3CNwWfSa%2FSSd5O5nwdbq0%2BqvVjiBJOEsOQ9D9LjC7tsRgJPjTNJWNn74P4Q4nNAng4u2O1TetAcPStI6dr%2BbI4xEZRToMF4%2F8F0XN&X-Amz-Signature=ea1c00e9ac370ce31a849bb0db1c14378e34d1f9afd67f629b3bd1b9fe338305&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHK6NAMW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDC9TlaMiUEQ4qbRxBRXyqWAEcZzLfaGdPFfVPgA257TgIhAKF1QE8EXUVWitL6oWr9X5ig%2B22UtUyRaswgrBLycGmSKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9j8Bw4XKy59xrEYq3AM7lW%2BXoCSX1gRsmkXCzM42sHI7zupWlsEPlocxx1FiC2VqsXJK7s1%2Bkmf1fXziIW5%2BPEpETeA%2FDnqqFKb5uxpwYn5R7P9VjTTTci%2FebE%2BJ1xarMiJ0fhdH%2BJTz8iETgMPfkNQVvooL9AFKdJZMkoABAgB37TghVx%2BZkDWXZpn8zOE2hjXCqk9yhllLz5YtNEjWjxQufD7gL3LAEfLueindU7DiGUc%2BMryyLWXAaCA6YzLezLzmHcoZ8EoY2Xo17Syhilo5SO5t0w3V6m5TXBZf%2FZy4arNno2%2B5WvfZHc2Qeie6mwMZqIebpEXTibMMMwZLdIp30Xt%2BuhDiJl10gpmT7YumBLbPSMJv%2Fwj%2Bxy9fTnt6vu%2B6VpPfpib2VIhyeluuayEsp0ilI7N2pbGpBMNU8IoTTjeRBwgcWVP7c%2Fisfz3ovfuHo0ckPvbIFWXkuXjxRyuBdaAMEd7%2FXineLuHbDzkXPT%2FqDunmabr5ebf4%2FffTynFoPfHFRvt0PSPcR86CzXJtQZzZ3oGQTXyPpXfKYyTYK7V2%2BPPVYIZ5eVxOeHGduoKGh2MJseo0vsmFVgh1QHT1WGWBhdrcdCAVtVRd8BlqIexpmqXc8E016mKuxzRwlcLac%2BHkBQ9aYjDihrnBBjqkAUbnPsZFDeJcVjvVBenCZt9KZQrOdXcZjRKWnsbqS0G73FC%2B1C3pGXS%2Bt31MxyS1CfNw22i6ZOy8qeNFve9%2FVBm3KcxqzRl%2FshvOt%2BK6kCtQukTbyWA1PO%2B3CNwWfSa%2FSSd5O5nwdbq0%2BqvVjiBJOEsOQ9D9LjC7tsRgJPjTNJWNn74P4Q4nNAng4u2O1TetAcPStI6dr%2BbI4xEZRToMF4%2F8F0XN&X-Amz-Signature=7520a0ddc9510e1c327e11c1dc5eb352b3ae872afeae98b20983cb61a78fe529&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHK6NAMW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDC9TlaMiUEQ4qbRxBRXyqWAEcZzLfaGdPFfVPgA257TgIhAKF1QE8EXUVWitL6oWr9X5ig%2B22UtUyRaswgrBLycGmSKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9j8Bw4XKy59xrEYq3AM7lW%2BXoCSX1gRsmkXCzM42sHI7zupWlsEPlocxx1FiC2VqsXJK7s1%2Bkmf1fXziIW5%2BPEpETeA%2FDnqqFKb5uxpwYn5R7P9VjTTTci%2FebE%2BJ1xarMiJ0fhdH%2BJTz8iETgMPfkNQVvooL9AFKdJZMkoABAgB37TghVx%2BZkDWXZpn8zOE2hjXCqk9yhllLz5YtNEjWjxQufD7gL3LAEfLueindU7DiGUc%2BMryyLWXAaCA6YzLezLzmHcoZ8EoY2Xo17Syhilo5SO5t0w3V6m5TXBZf%2FZy4arNno2%2B5WvfZHc2Qeie6mwMZqIebpEXTibMMMwZLdIp30Xt%2BuhDiJl10gpmT7YumBLbPSMJv%2Fwj%2Bxy9fTnt6vu%2B6VpPfpib2VIhyeluuayEsp0ilI7N2pbGpBMNU8IoTTjeRBwgcWVP7c%2Fisfz3ovfuHo0ckPvbIFWXkuXjxRyuBdaAMEd7%2FXineLuHbDzkXPT%2FqDunmabr5ebf4%2FffTynFoPfHFRvt0PSPcR86CzXJtQZzZ3oGQTXyPpXfKYyTYK7V2%2BPPVYIZ5eVxOeHGduoKGh2MJseo0vsmFVgh1QHT1WGWBhdrcdCAVtVRd8BlqIexpmqXc8E016mKuxzRwlcLac%2BHkBQ9aYjDihrnBBjqkAUbnPsZFDeJcVjvVBenCZt9KZQrOdXcZjRKWnsbqS0G73FC%2B1C3pGXS%2Bt31MxyS1CfNw22i6ZOy8qeNFve9%2FVBm3KcxqzRl%2FshvOt%2BK6kCtQukTbyWA1PO%2B3CNwWfSa%2FSSd5O5nwdbq0%2BqvVjiBJOEsOQ9D9LjC7tsRgJPjTNJWNn74P4Q4nNAng4u2O1TetAcPStI6dr%2BbI4xEZRToMF4%2F8F0XN&X-Amz-Signature=2b12426fc0cd8be599469c38f0f855015c20ebc6febf2e61ef54fc675701cd88&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHK6NAMW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDC9TlaMiUEQ4qbRxBRXyqWAEcZzLfaGdPFfVPgA257TgIhAKF1QE8EXUVWitL6oWr9X5ig%2B22UtUyRaswgrBLycGmSKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9j8Bw4XKy59xrEYq3AM7lW%2BXoCSX1gRsmkXCzM42sHI7zupWlsEPlocxx1FiC2VqsXJK7s1%2Bkmf1fXziIW5%2BPEpETeA%2FDnqqFKb5uxpwYn5R7P9VjTTTci%2FebE%2BJ1xarMiJ0fhdH%2BJTz8iETgMPfkNQVvooL9AFKdJZMkoABAgB37TghVx%2BZkDWXZpn8zOE2hjXCqk9yhllLz5YtNEjWjxQufD7gL3LAEfLueindU7DiGUc%2BMryyLWXAaCA6YzLezLzmHcoZ8EoY2Xo17Syhilo5SO5t0w3V6m5TXBZf%2FZy4arNno2%2B5WvfZHc2Qeie6mwMZqIebpEXTibMMMwZLdIp30Xt%2BuhDiJl10gpmT7YumBLbPSMJv%2Fwj%2Bxy9fTnt6vu%2B6VpPfpib2VIhyeluuayEsp0ilI7N2pbGpBMNU8IoTTjeRBwgcWVP7c%2Fisfz3ovfuHo0ckPvbIFWXkuXjxRyuBdaAMEd7%2FXineLuHbDzkXPT%2FqDunmabr5ebf4%2FffTynFoPfHFRvt0PSPcR86CzXJtQZzZ3oGQTXyPpXfKYyTYK7V2%2BPPVYIZ5eVxOeHGduoKGh2MJseo0vsmFVgh1QHT1WGWBhdrcdCAVtVRd8BlqIexpmqXc8E016mKuxzRwlcLac%2BHkBQ9aYjDihrnBBjqkAUbnPsZFDeJcVjvVBenCZt9KZQrOdXcZjRKWnsbqS0G73FC%2B1C3pGXS%2Bt31MxyS1CfNw22i6ZOy8qeNFve9%2FVBm3KcxqzRl%2FshvOt%2BK6kCtQukTbyWA1PO%2B3CNwWfSa%2FSSd5O5nwdbq0%2BqvVjiBJOEsOQ9D9LjC7tsRgJPjTNJWNn74P4Q4nNAng4u2O1TetAcPStI6dr%2BbI4xEZRToMF4%2F8F0XN&X-Amz-Signature=747b68b205a25a5b2e25f3bc64fa2f05d99405fdedb2e619ac20ced6990d3e73&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHK6NAMW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDC9TlaMiUEQ4qbRxBRXyqWAEcZzLfaGdPFfVPgA257TgIhAKF1QE8EXUVWitL6oWr9X5ig%2B22UtUyRaswgrBLycGmSKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9j8Bw4XKy59xrEYq3AM7lW%2BXoCSX1gRsmkXCzM42sHI7zupWlsEPlocxx1FiC2VqsXJK7s1%2Bkmf1fXziIW5%2BPEpETeA%2FDnqqFKb5uxpwYn5R7P9VjTTTci%2FebE%2BJ1xarMiJ0fhdH%2BJTz8iETgMPfkNQVvooL9AFKdJZMkoABAgB37TghVx%2BZkDWXZpn8zOE2hjXCqk9yhllLz5YtNEjWjxQufD7gL3LAEfLueindU7DiGUc%2BMryyLWXAaCA6YzLezLzmHcoZ8EoY2Xo17Syhilo5SO5t0w3V6m5TXBZf%2FZy4arNno2%2B5WvfZHc2Qeie6mwMZqIebpEXTibMMMwZLdIp30Xt%2BuhDiJl10gpmT7YumBLbPSMJv%2Fwj%2Bxy9fTnt6vu%2B6VpPfpib2VIhyeluuayEsp0ilI7N2pbGpBMNU8IoTTjeRBwgcWVP7c%2Fisfz3ovfuHo0ckPvbIFWXkuXjxRyuBdaAMEd7%2FXineLuHbDzkXPT%2FqDunmabr5ebf4%2FffTynFoPfHFRvt0PSPcR86CzXJtQZzZ3oGQTXyPpXfKYyTYK7V2%2BPPVYIZ5eVxOeHGduoKGh2MJseo0vsmFVgh1QHT1WGWBhdrcdCAVtVRd8BlqIexpmqXc8E016mKuxzRwlcLac%2BHkBQ9aYjDihrnBBjqkAUbnPsZFDeJcVjvVBenCZt9KZQrOdXcZjRKWnsbqS0G73FC%2B1C3pGXS%2Bt31MxyS1CfNw22i6ZOy8qeNFve9%2FVBm3KcxqzRl%2FshvOt%2BK6kCtQukTbyWA1PO%2B3CNwWfSa%2FSSd5O5nwdbq0%2BqvVjiBJOEsOQ9D9LjC7tsRgJPjTNJWNn74P4Q4nNAng4u2O1TetAcPStI6dr%2BbI4xEZRToMF4%2F8F0XN&X-Amz-Signature=673278eb05713b7b6ab1c6a0f2c50773a44513faad49362b38650fab6d9682c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHK6NAMW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDC9TlaMiUEQ4qbRxBRXyqWAEcZzLfaGdPFfVPgA257TgIhAKF1QE8EXUVWitL6oWr9X5ig%2B22UtUyRaswgrBLycGmSKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9j8Bw4XKy59xrEYq3AM7lW%2BXoCSX1gRsmkXCzM42sHI7zupWlsEPlocxx1FiC2VqsXJK7s1%2Bkmf1fXziIW5%2BPEpETeA%2FDnqqFKb5uxpwYn5R7P9VjTTTci%2FebE%2BJ1xarMiJ0fhdH%2BJTz8iETgMPfkNQVvooL9AFKdJZMkoABAgB37TghVx%2BZkDWXZpn8zOE2hjXCqk9yhllLz5YtNEjWjxQufD7gL3LAEfLueindU7DiGUc%2BMryyLWXAaCA6YzLezLzmHcoZ8EoY2Xo17Syhilo5SO5t0w3V6m5TXBZf%2FZy4arNno2%2B5WvfZHc2Qeie6mwMZqIebpEXTibMMMwZLdIp30Xt%2BuhDiJl10gpmT7YumBLbPSMJv%2Fwj%2Bxy9fTnt6vu%2B6VpPfpib2VIhyeluuayEsp0ilI7N2pbGpBMNU8IoTTjeRBwgcWVP7c%2Fisfz3ovfuHo0ckPvbIFWXkuXjxRyuBdaAMEd7%2FXineLuHbDzkXPT%2FqDunmabr5ebf4%2FffTynFoPfHFRvt0PSPcR86CzXJtQZzZ3oGQTXyPpXfKYyTYK7V2%2BPPVYIZ5eVxOeHGduoKGh2MJseo0vsmFVgh1QHT1WGWBhdrcdCAVtVRd8BlqIexpmqXc8E016mKuxzRwlcLac%2BHkBQ9aYjDihrnBBjqkAUbnPsZFDeJcVjvVBenCZt9KZQrOdXcZjRKWnsbqS0G73FC%2B1C3pGXS%2Bt31MxyS1CfNw22i6ZOy8qeNFve9%2FVBm3KcxqzRl%2FshvOt%2BK6kCtQukTbyWA1PO%2B3CNwWfSa%2FSSd5O5nwdbq0%2BqvVjiBJOEsOQ9D9LjC7tsRgJPjTNJWNn74P4Q4nNAng4u2O1TetAcPStI6dr%2BbI4xEZRToMF4%2F8F0XN&X-Amz-Signature=4696fb72ea8056c46fc68eb90fc1d420d56034e8eb8355451679a8f2f527c0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHK6NAMW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDC9TlaMiUEQ4qbRxBRXyqWAEcZzLfaGdPFfVPgA257TgIhAKF1QE8EXUVWitL6oWr9X5ig%2B22UtUyRaswgrBLycGmSKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9j8Bw4XKy59xrEYq3AM7lW%2BXoCSX1gRsmkXCzM42sHI7zupWlsEPlocxx1FiC2VqsXJK7s1%2Bkmf1fXziIW5%2BPEpETeA%2FDnqqFKb5uxpwYn5R7P9VjTTTci%2FebE%2BJ1xarMiJ0fhdH%2BJTz8iETgMPfkNQVvooL9AFKdJZMkoABAgB37TghVx%2BZkDWXZpn8zOE2hjXCqk9yhllLz5YtNEjWjxQufD7gL3LAEfLueindU7DiGUc%2BMryyLWXAaCA6YzLezLzmHcoZ8EoY2Xo17Syhilo5SO5t0w3V6m5TXBZf%2FZy4arNno2%2B5WvfZHc2Qeie6mwMZqIebpEXTibMMMwZLdIp30Xt%2BuhDiJl10gpmT7YumBLbPSMJv%2Fwj%2Bxy9fTnt6vu%2B6VpPfpib2VIhyeluuayEsp0ilI7N2pbGpBMNU8IoTTjeRBwgcWVP7c%2Fisfz3ovfuHo0ckPvbIFWXkuXjxRyuBdaAMEd7%2FXineLuHbDzkXPT%2FqDunmabr5ebf4%2FffTynFoPfHFRvt0PSPcR86CzXJtQZzZ3oGQTXyPpXfKYyTYK7V2%2BPPVYIZ5eVxOeHGduoKGh2MJseo0vsmFVgh1QHT1WGWBhdrcdCAVtVRd8BlqIexpmqXc8E016mKuxzRwlcLac%2BHkBQ9aYjDihrnBBjqkAUbnPsZFDeJcVjvVBenCZt9KZQrOdXcZjRKWnsbqS0G73FC%2B1C3pGXS%2Bt31MxyS1CfNw22i6ZOy8qeNFve9%2FVBm3KcxqzRl%2FshvOt%2BK6kCtQukTbyWA1PO%2B3CNwWfSa%2FSSd5O5nwdbq0%2BqvVjiBJOEsOQ9D9LjC7tsRgJPjTNJWNn74P4Q4nNAng4u2O1TetAcPStI6dr%2BbI4xEZRToMF4%2F8F0XN&X-Amz-Signature=2df35e588b6833fca5198ec75a4704877713fd844d6e67f158bd58dc62249ead&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
