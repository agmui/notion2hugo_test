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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC626ZBK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhdZe4Eptrf28a22ZVwIpcypjP3Hvk%2B9t7aEcOedQXPAiARbRcwf5gssrJa9OZ4MnJF%2Fjs1%2F2QwElkY%2FFtiE%2BgeRiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BMJpJvKjfe%2BNGaWKtwDQdayULX8lOhyRHT0BPeg5vjn3zES%2FEeOWVQ235pfCPr5hAJANgHn43Te%2FcSRDLBZB8immx1E%2Bu2wJriPeDbMMtt%2F1mfk%2BSj%2BL4QMAoiRoLauIwFaFenkHphjW7uFtkMeBXh7szAH9i4%2BhmcROAvpFvDobILaMDC7BHFl7YtcLufw7DvC1D0wywgQh7aW%2FB8MSpXKaNGF7LFAJsSCLYiLp%2BMKnyO8dJeUMcvjWXPb4IN1wyG410AB8chzeHBTMpF%2FwahWU95uPGTotiwwp4wdHO0W9KJnNPFkHVDsoblcy6KInLSPUGub8d9fgXs63hWBpnJORfSADlowgumEEYyCxdLxEmW0K5NY%2BmeSVau2vENSMgY%2FoH9H974Nam%2BhbRNJ3QlwyXIjzjQK93ifI7ceq0pOSJaXRlGhKTTCLeNhy9ahHdGWieHBfX3qpJGc787q8DgyTR%2FrMWzp4wQ9%2FyOOtp5jPKoxbYnIJ4Whu363MXvM7UupEZk%2BYyTvYURUEgAinruydQxRuflHgUK7G6pHjKTXzBpRi4PYFvodt%2BL5YOEb6YvSPm54wB69Srrld98Tr%2BFE2Qy7UutrHy%2Fd%2B7jA%2FLh3uRub3mcG53PdRML6V4XxtcHqDMX%2B4i8hC30whrP3vAY6pgErWPIQuz6r5b4CNwpraTQFTOEse3ryP1wIOmHzrxnfIm5v7QovFveW3ao8xHJVcd3JiCyggQbhP4nO%2Fp60WghGVMhRzyqTzIbSE2DRCQACX4cQ68q5k7QyTIdKl%2FUZmBnm7z2VB2awjFLUY1qxGGeqIE2LMlAFo1rZg%2FWdcUg6QxVrlfphxa8T9Bzf8pJ34Tv5EMor5VQIutZWCBP%2B%2B7cf5n35GIIj&X-Amz-Signature=9b7e3577140dba60dc2ac3560e524dfbd8d93c1337a598e9274dc853474bb10a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC626ZBK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhdZe4Eptrf28a22ZVwIpcypjP3Hvk%2B9t7aEcOedQXPAiARbRcwf5gssrJa9OZ4MnJF%2Fjs1%2F2QwElkY%2FFtiE%2BgeRiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BMJpJvKjfe%2BNGaWKtwDQdayULX8lOhyRHT0BPeg5vjn3zES%2FEeOWVQ235pfCPr5hAJANgHn43Te%2FcSRDLBZB8immx1E%2Bu2wJriPeDbMMtt%2F1mfk%2BSj%2BL4QMAoiRoLauIwFaFenkHphjW7uFtkMeBXh7szAH9i4%2BhmcROAvpFvDobILaMDC7BHFl7YtcLufw7DvC1D0wywgQh7aW%2FB8MSpXKaNGF7LFAJsSCLYiLp%2BMKnyO8dJeUMcvjWXPb4IN1wyG410AB8chzeHBTMpF%2FwahWU95uPGTotiwwp4wdHO0W9KJnNPFkHVDsoblcy6KInLSPUGub8d9fgXs63hWBpnJORfSADlowgumEEYyCxdLxEmW0K5NY%2BmeSVau2vENSMgY%2FoH9H974Nam%2BhbRNJ3QlwyXIjzjQK93ifI7ceq0pOSJaXRlGhKTTCLeNhy9ahHdGWieHBfX3qpJGc787q8DgyTR%2FrMWzp4wQ9%2FyOOtp5jPKoxbYnIJ4Whu363MXvM7UupEZk%2BYyTvYURUEgAinruydQxRuflHgUK7G6pHjKTXzBpRi4PYFvodt%2BL5YOEb6YvSPm54wB69Srrld98Tr%2BFE2Qy7UutrHy%2Fd%2B7jA%2FLh3uRub3mcG53PdRML6V4XxtcHqDMX%2B4i8hC30whrP3vAY6pgErWPIQuz6r5b4CNwpraTQFTOEse3ryP1wIOmHzrxnfIm5v7QovFveW3ao8xHJVcd3JiCyggQbhP4nO%2Fp60WghGVMhRzyqTzIbSE2DRCQACX4cQ68q5k7QyTIdKl%2FUZmBnm7z2VB2awjFLUY1qxGGeqIE2LMlAFo1rZg%2FWdcUg6QxVrlfphxa8T9Bzf8pJ34Tv5EMor5VQIutZWCBP%2B%2B7cf5n35GIIj&X-Amz-Signature=1247a6bf33b22da5574ad63636623eecce2af41181fb92bf614a4d11c1a5206d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC626ZBK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhdZe4Eptrf28a22ZVwIpcypjP3Hvk%2B9t7aEcOedQXPAiARbRcwf5gssrJa9OZ4MnJF%2Fjs1%2F2QwElkY%2FFtiE%2BgeRiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BMJpJvKjfe%2BNGaWKtwDQdayULX8lOhyRHT0BPeg5vjn3zES%2FEeOWVQ235pfCPr5hAJANgHn43Te%2FcSRDLBZB8immx1E%2Bu2wJriPeDbMMtt%2F1mfk%2BSj%2BL4QMAoiRoLauIwFaFenkHphjW7uFtkMeBXh7szAH9i4%2BhmcROAvpFvDobILaMDC7BHFl7YtcLufw7DvC1D0wywgQh7aW%2FB8MSpXKaNGF7LFAJsSCLYiLp%2BMKnyO8dJeUMcvjWXPb4IN1wyG410AB8chzeHBTMpF%2FwahWU95uPGTotiwwp4wdHO0W9KJnNPFkHVDsoblcy6KInLSPUGub8d9fgXs63hWBpnJORfSADlowgumEEYyCxdLxEmW0K5NY%2BmeSVau2vENSMgY%2FoH9H974Nam%2BhbRNJ3QlwyXIjzjQK93ifI7ceq0pOSJaXRlGhKTTCLeNhy9ahHdGWieHBfX3qpJGc787q8DgyTR%2FrMWzp4wQ9%2FyOOtp5jPKoxbYnIJ4Whu363MXvM7UupEZk%2BYyTvYURUEgAinruydQxRuflHgUK7G6pHjKTXzBpRi4PYFvodt%2BL5YOEb6YvSPm54wB69Srrld98Tr%2BFE2Qy7UutrHy%2Fd%2B7jA%2FLh3uRub3mcG53PdRML6V4XxtcHqDMX%2B4i8hC30whrP3vAY6pgErWPIQuz6r5b4CNwpraTQFTOEse3ryP1wIOmHzrxnfIm5v7QovFveW3ao8xHJVcd3JiCyggQbhP4nO%2Fp60WghGVMhRzyqTzIbSE2DRCQACX4cQ68q5k7QyTIdKl%2FUZmBnm7z2VB2awjFLUY1qxGGeqIE2LMlAFo1rZg%2FWdcUg6QxVrlfphxa8T9Bzf8pJ34Tv5EMor5VQIutZWCBP%2B%2B7cf5n35GIIj&X-Amz-Signature=2259c34b8bbc25da7a136ae1614bf9dcc5486f7ca33f9b3304bf87e2df29a65e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC626ZBK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhdZe4Eptrf28a22ZVwIpcypjP3Hvk%2B9t7aEcOedQXPAiARbRcwf5gssrJa9OZ4MnJF%2Fjs1%2F2QwElkY%2FFtiE%2BgeRiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BMJpJvKjfe%2BNGaWKtwDQdayULX8lOhyRHT0BPeg5vjn3zES%2FEeOWVQ235pfCPr5hAJANgHn43Te%2FcSRDLBZB8immx1E%2Bu2wJriPeDbMMtt%2F1mfk%2BSj%2BL4QMAoiRoLauIwFaFenkHphjW7uFtkMeBXh7szAH9i4%2BhmcROAvpFvDobILaMDC7BHFl7YtcLufw7DvC1D0wywgQh7aW%2FB8MSpXKaNGF7LFAJsSCLYiLp%2BMKnyO8dJeUMcvjWXPb4IN1wyG410AB8chzeHBTMpF%2FwahWU95uPGTotiwwp4wdHO0W9KJnNPFkHVDsoblcy6KInLSPUGub8d9fgXs63hWBpnJORfSADlowgumEEYyCxdLxEmW0K5NY%2BmeSVau2vENSMgY%2FoH9H974Nam%2BhbRNJ3QlwyXIjzjQK93ifI7ceq0pOSJaXRlGhKTTCLeNhy9ahHdGWieHBfX3qpJGc787q8DgyTR%2FrMWzp4wQ9%2FyOOtp5jPKoxbYnIJ4Whu363MXvM7UupEZk%2BYyTvYURUEgAinruydQxRuflHgUK7G6pHjKTXzBpRi4PYFvodt%2BL5YOEb6YvSPm54wB69Srrld98Tr%2BFE2Qy7UutrHy%2Fd%2B7jA%2FLh3uRub3mcG53PdRML6V4XxtcHqDMX%2B4i8hC30whrP3vAY6pgErWPIQuz6r5b4CNwpraTQFTOEse3ryP1wIOmHzrxnfIm5v7QovFveW3ao8xHJVcd3JiCyggQbhP4nO%2Fp60WghGVMhRzyqTzIbSE2DRCQACX4cQ68q5k7QyTIdKl%2FUZmBnm7z2VB2awjFLUY1qxGGeqIE2LMlAFo1rZg%2FWdcUg6QxVrlfphxa8T9Bzf8pJ34Tv5EMor5VQIutZWCBP%2B%2B7cf5n35GIIj&X-Amz-Signature=5a4fab55e742b58d54f9a0e21d23dc0ec2916921ba0d79ee1b3be4788c7c117b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC626ZBK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhdZe4Eptrf28a22ZVwIpcypjP3Hvk%2B9t7aEcOedQXPAiARbRcwf5gssrJa9OZ4MnJF%2Fjs1%2F2QwElkY%2FFtiE%2BgeRiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BMJpJvKjfe%2BNGaWKtwDQdayULX8lOhyRHT0BPeg5vjn3zES%2FEeOWVQ235pfCPr5hAJANgHn43Te%2FcSRDLBZB8immx1E%2Bu2wJriPeDbMMtt%2F1mfk%2BSj%2BL4QMAoiRoLauIwFaFenkHphjW7uFtkMeBXh7szAH9i4%2BhmcROAvpFvDobILaMDC7BHFl7YtcLufw7DvC1D0wywgQh7aW%2FB8MSpXKaNGF7LFAJsSCLYiLp%2BMKnyO8dJeUMcvjWXPb4IN1wyG410AB8chzeHBTMpF%2FwahWU95uPGTotiwwp4wdHO0W9KJnNPFkHVDsoblcy6KInLSPUGub8d9fgXs63hWBpnJORfSADlowgumEEYyCxdLxEmW0K5NY%2BmeSVau2vENSMgY%2FoH9H974Nam%2BhbRNJ3QlwyXIjzjQK93ifI7ceq0pOSJaXRlGhKTTCLeNhy9ahHdGWieHBfX3qpJGc787q8DgyTR%2FrMWzp4wQ9%2FyOOtp5jPKoxbYnIJ4Whu363MXvM7UupEZk%2BYyTvYURUEgAinruydQxRuflHgUK7G6pHjKTXzBpRi4PYFvodt%2BL5YOEb6YvSPm54wB69Srrld98Tr%2BFE2Qy7UutrHy%2Fd%2B7jA%2FLh3uRub3mcG53PdRML6V4XxtcHqDMX%2B4i8hC30whrP3vAY6pgErWPIQuz6r5b4CNwpraTQFTOEse3ryP1wIOmHzrxnfIm5v7QovFveW3ao8xHJVcd3JiCyggQbhP4nO%2Fp60WghGVMhRzyqTzIbSE2DRCQACX4cQ68q5k7QyTIdKl%2FUZmBnm7z2VB2awjFLUY1qxGGeqIE2LMlAFo1rZg%2FWdcUg6QxVrlfphxa8T9Bzf8pJ34Tv5EMor5VQIutZWCBP%2B%2B7cf5n35GIIj&X-Amz-Signature=72f9862068142f77360039114b7cc69fa38ed7e3755100fefb6d5eff5304c323&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC626ZBK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhdZe4Eptrf28a22ZVwIpcypjP3Hvk%2B9t7aEcOedQXPAiARbRcwf5gssrJa9OZ4MnJF%2Fjs1%2F2QwElkY%2FFtiE%2BgeRiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BMJpJvKjfe%2BNGaWKtwDQdayULX8lOhyRHT0BPeg5vjn3zES%2FEeOWVQ235pfCPr5hAJANgHn43Te%2FcSRDLBZB8immx1E%2Bu2wJriPeDbMMtt%2F1mfk%2BSj%2BL4QMAoiRoLauIwFaFenkHphjW7uFtkMeBXh7szAH9i4%2BhmcROAvpFvDobILaMDC7BHFl7YtcLufw7DvC1D0wywgQh7aW%2FB8MSpXKaNGF7LFAJsSCLYiLp%2BMKnyO8dJeUMcvjWXPb4IN1wyG410AB8chzeHBTMpF%2FwahWU95uPGTotiwwp4wdHO0W9KJnNPFkHVDsoblcy6KInLSPUGub8d9fgXs63hWBpnJORfSADlowgumEEYyCxdLxEmW0K5NY%2BmeSVau2vENSMgY%2FoH9H974Nam%2BhbRNJ3QlwyXIjzjQK93ifI7ceq0pOSJaXRlGhKTTCLeNhy9ahHdGWieHBfX3qpJGc787q8DgyTR%2FrMWzp4wQ9%2FyOOtp5jPKoxbYnIJ4Whu363MXvM7UupEZk%2BYyTvYURUEgAinruydQxRuflHgUK7G6pHjKTXzBpRi4PYFvodt%2BL5YOEb6YvSPm54wB69Srrld98Tr%2BFE2Qy7UutrHy%2Fd%2B7jA%2FLh3uRub3mcG53PdRML6V4XxtcHqDMX%2B4i8hC30whrP3vAY6pgErWPIQuz6r5b4CNwpraTQFTOEse3ryP1wIOmHzrxnfIm5v7QovFveW3ao8xHJVcd3JiCyggQbhP4nO%2Fp60WghGVMhRzyqTzIbSE2DRCQACX4cQ68q5k7QyTIdKl%2FUZmBnm7z2VB2awjFLUY1qxGGeqIE2LMlAFo1rZg%2FWdcUg6QxVrlfphxa8T9Bzf8pJ34Tv5EMor5VQIutZWCBP%2B%2B7cf5n35GIIj&X-Amz-Signature=7526242aa201ab50790f2cb240506fdd538f8864d0f01219fd9b5451ffc56f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC626ZBK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhdZe4Eptrf28a22ZVwIpcypjP3Hvk%2B9t7aEcOedQXPAiARbRcwf5gssrJa9OZ4MnJF%2Fjs1%2F2QwElkY%2FFtiE%2BgeRiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BMJpJvKjfe%2BNGaWKtwDQdayULX8lOhyRHT0BPeg5vjn3zES%2FEeOWVQ235pfCPr5hAJANgHn43Te%2FcSRDLBZB8immx1E%2Bu2wJriPeDbMMtt%2F1mfk%2BSj%2BL4QMAoiRoLauIwFaFenkHphjW7uFtkMeBXh7szAH9i4%2BhmcROAvpFvDobILaMDC7BHFl7YtcLufw7DvC1D0wywgQh7aW%2FB8MSpXKaNGF7LFAJsSCLYiLp%2BMKnyO8dJeUMcvjWXPb4IN1wyG410AB8chzeHBTMpF%2FwahWU95uPGTotiwwp4wdHO0W9KJnNPFkHVDsoblcy6KInLSPUGub8d9fgXs63hWBpnJORfSADlowgumEEYyCxdLxEmW0K5NY%2BmeSVau2vENSMgY%2FoH9H974Nam%2BhbRNJ3QlwyXIjzjQK93ifI7ceq0pOSJaXRlGhKTTCLeNhy9ahHdGWieHBfX3qpJGc787q8DgyTR%2FrMWzp4wQ9%2FyOOtp5jPKoxbYnIJ4Whu363MXvM7UupEZk%2BYyTvYURUEgAinruydQxRuflHgUK7G6pHjKTXzBpRi4PYFvodt%2BL5YOEb6YvSPm54wB69Srrld98Tr%2BFE2Qy7UutrHy%2Fd%2B7jA%2FLh3uRub3mcG53PdRML6V4XxtcHqDMX%2B4i8hC30whrP3vAY6pgErWPIQuz6r5b4CNwpraTQFTOEse3ryP1wIOmHzrxnfIm5v7QovFveW3ao8xHJVcd3JiCyggQbhP4nO%2Fp60WghGVMhRzyqTzIbSE2DRCQACX4cQ68q5k7QyTIdKl%2FUZmBnm7z2VB2awjFLUY1qxGGeqIE2LMlAFo1rZg%2FWdcUg6QxVrlfphxa8T9Bzf8pJ34Tv5EMor5VQIutZWCBP%2B%2B7cf5n35GIIj&X-Amz-Signature=de63922081364f7d5070e6be1ef8797090772c3bd91097ebe52ad8ec3bf192dd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
