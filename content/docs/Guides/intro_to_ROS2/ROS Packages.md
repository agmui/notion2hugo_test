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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HS2IAOT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBuddcEksHQ9eXXKAyxrWHCbrjG1xeKnxqf%2FuQDj6aQIhAJcSPiVRzW%2By0ft0vVT1O5pLds4%2Bob7uS%2Fu8qFrasHijKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAxkdfWZgpQszngHAq3APGwAoImunv4ouYHRH406k%2BeltqM7nu8JLL%2FYJZ737UfbQumuwJElr6Menu6RDKqM1zWtdXgw6zTHVryyd%2BkrtWM1RV3m0pBtQoMvxe1rakEkpQ0kCpPnyxSwdk704z2i6JleRVxQ07OXmnD21rWlaFQ5Bs%2B7Ip2T4M8OudVdibNQgVVNYDSI1q%2Ftp91SJWPEMmvJc0aHf%2FZXG%2FzmxS9uWoGaQW2U6i8xD1w4bB%2FF%2BCphmkSwC5eriuP5AJVNun4Vr6FcRPVuiRh%2B3l%2FEJtpERCf2o6oJpKXRR8FFZnqGpCCaoX22OB2e9puYOpI6fnRsBSq0E0oySoZltc2cKVvTy4nThEurUNcL2j6uYfQ4%2FLJrGK09QP3VU6w71ui8KXHptMNidvwKJBQd46xCTBClpWRHLApxx6L8TmLjWGS%2ByfzvHYmiGA4WmoADv80Q4Kn%2BTEGKEPy4%2BtcfC0xXg2MYXT1yJNsAFc7oGXcZXoPS4NumxRUIWoPmdlDrJhmBIu8P6Fz%2Fjs8GnpjHl4h4aaOwN7GyNQfvYhZOnUJImUV06jAYkY7qZD%2BlgKQzWmBWIrHxJIgcipt4toGeBhh0H1wL8CufHDJ9WGph6kJTrk2Qf35vYQvPwvugH2dEgKADCoxJ7BBjqkAR3ACxvHXMbzs%2FazL6nAqbx%2B6bMRml9%2F6TpxEl5Am2IyMlEmAUOQ6%2BvkTXeNAJMuSXr0vTr4sHOFJeNGkkKdzh%2FXNdc2kUHn3pDQsPtEk43wPbSwClJCU2nkTVYlz8O%2F2g2SwWecQrXfvKSEwCq9D339nDLhIyI80ehk28vxlC2Zw1IZtihTHZlgjd%2Bcb%2FmHDCN3%2BaaCnN1ZqCV%2BKN6hugVs4GfJ&X-Amz-Signature=cc107f6d83981aae5069693f5d1cda116ac001c021a3a158178268ae781d7969&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HS2IAOT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBuddcEksHQ9eXXKAyxrWHCbrjG1xeKnxqf%2FuQDj6aQIhAJcSPiVRzW%2By0ft0vVT1O5pLds4%2Bob7uS%2Fu8qFrasHijKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAxkdfWZgpQszngHAq3APGwAoImunv4ouYHRH406k%2BeltqM7nu8JLL%2FYJZ737UfbQumuwJElr6Menu6RDKqM1zWtdXgw6zTHVryyd%2BkrtWM1RV3m0pBtQoMvxe1rakEkpQ0kCpPnyxSwdk704z2i6JleRVxQ07OXmnD21rWlaFQ5Bs%2B7Ip2T4M8OudVdibNQgVVNYDSI1q%2Ftp91SJWPEMmvJc0aHf%2FZXG%2FzmxS9uWoGaQW2U6i8xD1w4bB%2FF%2BCphmkSwC5eriuP5AJVNun4Vr6FcRPVuiRh%2B3l%2FEJtpERCf2o6oJpKXRR8FFZnqGpCCaoX22OB2e9puYOpI6fnRsBSq0E0oySoZltc2cKVvTy4nThEurUNcL2j6uYfQ4%2FLJrGK09QP3VU6w71ui8KXHptMNidvwKJBQd46xCTBClpWRHLApxx6L8TmLjWGS%2ByfzvHYmiGA4WmoADv80Q4Kn%2BTEGKEPy4%2BtcfC0xXg2MYXT1yJNsAFc7oGXcZXoPS4NumxRUIWoPmdlDrJhmBIu8P6Fz%2Fjs8GnpjHl4h4aaOwN7GyNQfvYhZOnUJImUV06jAYkY7qZD%2BlgKQzWmBWIrHxJIgcipt4toGeBhh0H1wL8CufHDJ9WGph6kJTrk2Qf35vYQvPwvugH2dEgKADCoxJ7BBjqkAR3ACxvHXMbzs%2FazL6nAqbx%2B6bMRml9%2F6TpxEl5Am2IyMlEmAUOQ6%2BvkTXeNAJMuSXr0vTr4sHOFJeNGkkKdzh%2FXNdc2kUHn3pDQsPtEk43wPbSwClJCU2nkTVYlz8O%2F2g2SwWecQrXfvKSEwCq9D339nDLhIyI80ehk28vxlC2Zw1IZtihTHZlgjd%2Bcb%2FmHDCN3%2BaaCnN1ZqCV%2BKN6hugVs4GfJ&X-Amz-Signature=d52c8ecc5be0ee414491a6edb7383c8012f04541dea81ae051fb288381e59ac5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HS2IAOT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBuddcEksHQ9eXXKAyxrWHCbrjG1xeKnxqf%2FuQDj6aQIhAJcSPiVRzW%2By0ft0vVT1O5pLds4%2Bob7uS%2Fu8qFrasHijKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAxkdfWZgpQszngHAq3APGwAoImunv4ouYHRH406k%2BeltqM7nu8JLL%2FYJZ737UfbQumuwJElr6Menu6RDKqM1zWtdXgw6zTHVryyd%2BkrtWM1RV3m0pBtQoMvxe1rakEkpQ0kCpPnyxSwdk704z2i6JleRVxQ07OXmnD21rWlaFQ5Bs%2B7Ip2T4M8OudVdibNQgVVNYDSI1q%2Ftp91SJWPEMmvJc0aHf%2FZXG%2FzmxS9uWoGaQW2U6i8xD1w4bB%2FF%2BCphmkSwC5eriuP5AJVNun4Vr6FcRPVuiRh%2B3l%2FEJtpERCf2o6oJpKXRR8FFZnqGpCCaoX22OB2e9puYOpI6fnRsBSq0E0oySoZltc2cKVvTy4nThEurUNcL2j6uYfQ4%2FLJrGK09QP3VU6w71ui8KXHptMNidvwKJBQd46xCTBClpWRHLApxx6L8TmLjWGS%2ByfzvHYmiGA4WmoADv80Q4Kn%2BTEGKEPy4%2BtcfC0xXg2MYXT1yJNsAFc7oGXcZXoPS4NumxRUIWoPmdlDrJhmBIu8P6Fz%2Fjs8GnpjHl4h4aaOwN7GyNQfvYhZOnUJImUV06jAYkY7qZD%2BlgKQzWmBWIrHxJIgcipt4toGeBhh0H1wL8CufHDJ9WGph6kJTrk2Qf35vYQvPwvugH2dEgKADCoxJ7BBjqkAR3ACxvHXMbzs%2FazL6nAqbx%2B6bMRml9%2F6TpxEl5Am2IyMlEmAUOQ6%2BvkTXeNAJMuSXr0vTr4sHOFJeNGkkKdzh%2FXNdc2kUHn3pDQsPtEk43wPbSwClJCU2nkTVYlz8O%2F2g2SwWecQrXfvKSEwCq9D339nDLhIyI80ehk28vxlC2Zw1IZtihTHZlgjd%2Bcb%2FmHDCN3%2BaaCnN1ZqCV%2BKN6hugVs4GfJ&X-Amz-Signature=042b905abb6ae00da590b5dc554a1e56d29544bee5ef6433d39f027c13be17e1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HS2IAOT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBuddcEksHQ9eXXKAyxrWHCbrjG1xeKnxqf%2FuQDj6aQIhAJcSPiVRzW%2By0ft0vVT1O5pLds4%2Bob7uS%2Fu8qFrasHijKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAxkdfWZgpQszngHAq3APGwAoImunv4ouYHRH406k%2BeltqM7nu8JLL%2FYJZ737UfbQumuwJElr6Menu6RDKqM1zWtdXgw6zTHVryyd%2BkrtWM1RV3m0pBtQoMvxe1rakEkpQ0kCpPnyxSwdk704z2i6JleRVxQ07OXmnD21rWlaFQ5Bs%2B7Ip2T4M8OudVdibNQgVVNYDSI1q%2Ftp91SJWPEMmvJc0aHf%2FZXG%2FzmxS9uWoGaQW2U6i8xD1w4bB%2FF%2BCphmkSwC5eriuP5AJVNun4Vr6FcRPVuiRh%2B3l%2FEJtpERCf2o6oJpKXRR8FFZnqGpCCaoX22OB2e9puYOpI6fnRsBSq0E0oySoZltc2cKVvTy4nThEurUNcL2j6uYfQ4%2FLJrGK09QP3VU6w71ui8KXHptMNidvwKJBQd46xCTBClpWRHLApxx6L8TmLjWGS%2ByfzvHYmiGA4WmoADv80Q4Kn%2BTEGKEPy4%2BtcfC0xXg2MYXT1yJNsAFc7oGXcZXoPS4NumxRUIWoPmdlDrJhmBIu8P6Fz%2Fjs8GnpjHl4h4aaOwN7GyNQfvYhZOnUJImUV06jAYkY7qZD%2BlgKQzWmBWIrHxJIgcipt4toGeBhh0H1wL8CufHDJ9WGph6kJTrk2Qf35vYQvPwvugH2dEgKADCoxJ7BBjqkAR3ACxvHXMbzs%2FazL6nAqbx%2B6bMRml9%2F6TpxEl5Am2IyMlEmAUOQ6%2BvkTXeNAJMuSXr0vTr4sHOFJeNGkkKdzh%2FXNdc2kUHn3pDQsPtEk43wPbSwClJCU2nkTVYlz8O%2F2g2SwWecQrXfvKSEwCq9D339nDLhIyI80ehk28vxlC2Zw1IZtihTHZlgjd%2Bcb%2FmHDCN3%2BaaCnN1ZqCV%2BKN6hugVs4GfJ&X-Amz-Signature=350040bbba9b3c783d1b432d98fec1b4161af460f7d441c91d3d0af5f210388b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HS2IAOT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBuddcEksHQ9eXXKAyxrWHCbrjG1xeKnxqf%2FuQDj6aQIhAJcSPiVRzW%2By0ft0vVT1O5pLds4%2Bob7uS%2Fu8qFrasHijKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAxkdfWZgpQszngHAq3APGwAoImunv4ouYHRH406k%2BeltqM7nu8JLL%2FYJZ737UfbQumuwJElr6Menu6RDKqM1zWtdXgw6zTHVryyd%2BkrtWM1RV3m0pBtQoMvxe1rakEkpQ0kCpPnyxSwdk704z2i6JleRVxQ07OXmnD21rWlaFQ5Bs%2B7Ip2T4M8OudVdibNQgVVNYDSI1q%2Ftp91SJWPEMmvJc0aHf%2FZXG%2FzmxS9uWoGaQW2U6i8xD1w4bB%2FF%2BCphmkSwC5eriuP5AJVNun4Vr6FcRPVuiRh%2B3l%2FEJtpERCf2o6oJpKXRR8FFZnqGpCCaoX22OB2e9puYOpI6fnRsBSq0E0oySoZltc2cKVvTy4nThEurUNcL2j6uYfQ4%2FLJrGK09QP3VU6w71ui8KXHptMNidvwKJBQd46xCTBClpWRHLApxx6L8TmLjWGS%2ByfzvHYmiGA4WmoADv80Q4Kn%2BTEGKEPy4%2BtcfC0xXg2MYXT1yJNsAFc7oGXcZXoPS4NumxRUIWoPmdlDrJhmBIu8P6Fz%2Fjs8GnpjHl4h4aaOwN7GyNQfvYhZOnUJImUV06jAYkY7qZD%2BlgKQzWmBWIrHxJIgcipt4toGeBhh0H1wL8CufHDJ9WGph6kJTrk2Qf35vYQvPwvugH2dEgKADCoxJ7BBjqkAR3ACxvHXMbzs%2FazL6nAqbx%2B6bMRml9%2F6TpxEl5Am2IyMlEmAUOQ6%2BvkTXeNAJMuSXr0vTr4sHOFJeNGkkKdzh%2FXNdc2kUHn3pDQsPtEk43wPbSwClJCU2nkTVYlz8O%2F2g2SwWecQrXfvKSEwCq9D339nDLhIyI80ehk28vxlC2Zw1IZtihTHZlgjd%2Bcb%2FmHDCN3%2BaaCnN1ZqCV%2BKN6hugVs4GfJ&X-Amz-Signature=be77952e6646f0801d3f9d6acd0afe8e87e93dd1141c84780d90d4f8f0599c79&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HS2IAOT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBuddcEksHQ9eXXKAyxrWHCbrjG1xeKnxqf%2FuQDj6aQIhAJcSPiVRzW%2By0ft0vVT1O5pLds4%2Bob7uS%2Fu8qFrasHijKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAxkdfWZgpQszngHAq3APGwAoImunv4ouYHRH406k%2BeltqM7nu8JLL%2FYJZ737UfbQumuwJElr6Menu6RDKqM1zWtdXgw6zTHVryyd%2BkrtWM1RV3m0pBtQoMvxe1rakEkpQ0kCpPnyxSwdk704z2i6JleRVxQ07OXmnD21rWlaFQ5Bs%2B7Ip2T4M8OudVdibNQgVVNYDSI1q%2Ftp91SJWPEMmvJc0aHf%2FZXG%2FzmxS9uWoGaQW2U6i8xD1w4bB%2FF%2BCphmkSwC5eriuP5AJVNun4Vr6FcRPVuiRh%2B3l%2FEJtpERCf2o6oJpKXRR8FFZnqGpCCaoX22OB2e9puYOpI6fnRsBSq0E0oySoZltc2cKVvTy4nThEurUNcL2j6uYfQ4%2FLJrGK09QP3VU6w71ui8KXHptMNidvwKJBQd46xCTBClpWRHLApxx6L8TmLjWGS%2ByfzvHYmiGA4WmoADv80Q4Kn%2BTEGKEPy4%2BtcfC0xXg2MYXT1yJNsAFc7oGXcZXoPS4NumxRUIWoPmdlDrJhmBIu8P6Fz%2Fjs8GnpjHl4h4aaOwN7GyNQfvYhZOnUJImUV06jAYkY7qZD%2BlgKQzWmBWIrHxJIgcipt4toGeBhh0H1wL8CufHDJ9WGph6kJTrk2Qf35vYQvPwvugH2dEgKADCoxJ7BBjqkAR3ACxvHXMbzs%2FazL6nAqbx%2B6bMRml9%2F6TpxEl5Am2IyMlEmAUOQ6%2BvkTXeNAJMuSXr0vTr4sHOFJeNGkkKdzh%2FXNdc2kUHn3pDQsPtEk43wPbSwClJCU2nkTVYlz8O%2F2g2SwWecQrXfvKSEwCq9D339nDLhIyI80ehk28vxlC2Zw1IZtihTHZlgjd%2Bcb%2FmHDCN3%2BaaCnN1ZqCV%2BKN6hugVs4GfJ&X-Amz-Signature=dfbf70466047792ace22f151413926c84116e59ee7becbc87c92c32bdcf52fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HS2IAOT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBuddcEksHQ9eXXKAyxrWHCbrjG1xeKnxqf%2FuQDj6aQIhAJcSPiVRzW%2By0ft0vVT1O5pLds4%2Bob7uS%2Fu8qFrasHijKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAxkdfWZgpQszngHAq3APGwAoImunv4ouYHRH406k%2BeltqM7nu8JLL%2FYJZ737UfbQumuwJElr6Menu6RDKqM1zWtdXgw6zTHVryyd%2BkrtWM1RV3m0pBtQoMvxe1rakEkpQ0kCpPnyxSwdk704z2i6JleRVxQ07OXmnD21rWlaFQ5Bs%2B7Ip2T4M8OudVdibNQgVVNYDSI1q%2Ftp91SJWPEMmvJc0aHf%2FZXG%2FzmxS9uWoGaQW2U6i8xD1w4bB%2FF%2BCphmkSwC5eriuP5AJVNun4Vr6FcRPVuiRh%2B3l%2FEJtpERCf2o6oJpKXRR8FFZnqGpCCaoX22OB2e9puYOpI6fnRsBSq0E0oySoZltc2cKVvTy4nThEurUNcL2j6uYfQ4%2FLJrGK09QP3VU6w71ui8KXHptMNidvwKJBQd46xCTBClpWRHLApxx6L8TmLjWGS%2ByfzvHYmiGA4WmoADv80Q4Kn%2BTEGKEPy4%2BtcfC0xXg2MYXT1yJNsAFc7oGXcZXoPS4NumxRUIWoPmdlDrJhmBIu8P6Fz%2Fjs8GnpjHl4h4aaOwN7GyNQfvYhZOnUJImUV06jAYkY7qZD%2BlgKQzWmBWIrHxJIgcipt4toGeBhh0H1wL8CufHDJ9WGph6kJTrk2Qf35vYQvPwvugH2dEgKADCoxJ7BBjqkAR3ACxvHXMbzs%2FazL6nAqbx%2B6bMRml9%2F6TpxEl5Am2IyMlEmAUOQ6%2BvkTXeNAJMuSXr0vTr4sHOFJeNGkkKdzh%2FXNdc2kUHn3pDQsPtEk43wPbSwClJCU2nkTVYlz8O%2F2g2SwWecQrXfvKSEwCq9D339nDLhIyI80ehk28vxlC2Zw1IZtihTHZlgjd%2Bcb%2FmHDCN3%2BaaCnN1ZqCV%2BKN6hugVs4GfJ&X-Amz-Signature=9255a8c2e6d2b38fbe6003f0192b0a4257a3ba0feb3648b74a900d8d42e08b10&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
