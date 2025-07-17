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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FRSWOF4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDcZfzdyN9lCd4GKZLXuClEMPwuxeqIYn%2BSR0TrCzlZewIgJqgoJD3L2umImJuCa47M6ueUvExeppVW3%2FDEg3D0OW8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMrlhfMFR4rybW2XHyrcA2%2F7nSx5Putu%2Fb8de1b6A2RjnWruZl73w9M88i96OtABy1a00jZFiBuKDJad%2FJ%2B0W5ZF1iHBv9cSckHX%2BAETtF5VdklDhUNljHfcUP5PwVEHLSXlNNNBHuol6H5EF1oceONi%2BKG9d0GniUb5Eq6NpWg2Uf1fD5189MwSD7%2B9%2BIjTJKGTiTB6DUnUPsrwCEOBYdRfsxjuTQs6pF3x0MhkKkJPHEGqEVx0I%2FPXfZkbgG26lCPR3C6BcmPzBeLGYLlQWr4ZDo9tNdzFl7%2Fo0kWvH8ALGHP9e7papNZqvHYqbn1mjasCordM1d0dDVQOegBCXpoxVhynivbhHnCrGS3BSllh2kpmXVoQJxte58dsUq9uuknS7Zr8Bl%2BhXd4RPEDADUNQOV409PylWizIEsWcXUXA6hXULSO67OoOHZgYgZsUcDnoeb59B9LNaPTtw9UGL096i02FgJ2Y%2FG6INP0XEX1cDnqva%2FadXjH%2FIv03FvUjxv73SRmZDNqJYVCcC1FHKkia%2BB4%2BXGJV3IwBs28S9XFGNHkac0oy%2FMzPWg0IcaRzKwR1FX9dGkSnEpS9%2BmwEzrP%2Blq1VLoqmyMddB6lg75uZxVIcwaDLvvLaGC5ChwxHqSDLgoPCSNqWHHNGMP%2Ft4cMGOqUBTAZrBr04UgC6vbgHr2JRwHLhVJNrviYJKhWOz5jYyaHfWk1l7lVQQHvL2GZ4NB%2BWC9%2BRFAiDSkrNL%2B%2BSLHIFVho7aHOtb0xSdIgiP3yaf%2BGEIJBYbOGKMUxx3wiSKYcmWVlJqP%2FliaNZMUH%2BBInYB5M1aCvNkO6dNYHxTx0RuZqO8PMN%2FOf4uv9%2BBeQsZGVd0uwcIU1ToNOUCLi1ty28vpqZexJf&X-Amz-Signature=514e4ec09ce6dd2391cc71c2bf7bd62875785777b347f2f3c09014b8d6f9431a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FRSWOF4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDcZfzdyN9lCd4GKZLXuClEMPwuxeqIYn%2BSR0TrCzlZewIgJqgoJD3L2umImJuCa47M6ueUvExeppVW3%2FDEg3D0OW8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMrlhfMFR4rybW2XHyrcA2%2F7nSx5Putu%2Fb8de1b6A2RjnWruZl73w9M88i96OtABy1a00jZFiBuKDJad%2FJ%2B0W5ZF1iHBv9cSckHX%2BAETtF5VdklDhUNljHfcUP5PwVEHLSXlNNNBHuol6H5EF1oceONi%2BKG9d0GniUb5Eq6NpWg2Uf1fD5189MwSD7%2B9%2BIjTJKGTiTB6DUnUPsrwCEOBYdRfsxjuTQs6pF3x0MhkKkJPHEGqEVx0I%2FPXfZkbgG26lCPR3C6BcmPzBeLGYLlQWr4ZDo9tNdzFl7%2Fo0kWvH8ALGHP9e7papNZqvHYqbn1mjasCordM1d0dDVQOegBCXpoxVhynivbhHnCrGS3BSllh2kpmXVoQJxte58dsUq9uuknS7Zr8Bl%2BhXd4RPEDADUNQOV409PylWizIEsWcXUXA6hXULSO67OoOHZgYgZsUcDnoeb59B9LNaPTtw9UGL096i02FgJ2Y%2FG6INP0XEX1cDnqva%2FadXjH%2FIv03FvUjxv73SRmZDNqJYVCcC1FHKkia%2BB4%2BXGJV3IwBs28S9XFGNHkac0oy%2FMzPWg0IcaRzKwR1FX9dGkSnEpS9%2BmwEzrP%2Blq1VLoqmyMddB6lg75uZxVIcwaDLvvLaGC5ChwxHqSDLgoPCSNqWHHNGMP%2Ft4cMGOqUBTAZrBr04UgC6vbgHr2JRwHLhVJNrviYJKhWOz5jYyaHfWk1l7lVQQHvL2GZ4NB%2BWC9%2BRFAiDSkrNL%2B%2BSLHIFVho7aHOtb0xSdIgiP3yaf%2BGEIJBYbOGKMUxx3wiSKYcmWVlJqP%2FliaNZMUH%2BBInYB5M1aCvNkO6dNYHxTx0RuZqO8PMN%2FOf4uv9%2BBeQsZGVd0uwcIU1ToNOUCLi1ty28vpqZexJf&X-Amz-Signature=159ce6eb3e4ee734e1fa7c4bdc77a39484ce1c085464dd61add5a6c21e119650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FRSWOF4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDcZfzdyN9lCd4GKZLXuClEMPwuxeqIYn%2BSR0TrCzlZewIgJqgoJD3L2umImJuCa47M6ueUvExeppVW3%2FDEg3D0OW8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMrlhfMFR4rybW2XHyrcA2%2F7nSx5Putu%2Fb8de1b6A2RjnWruZl73w9M88i96OtABy1a00jZFiBuKDJad%2FJ%2B0W5ZF1iHBv9cSckHX%2BAETtF5VdklDhUNljHfcUP5PwVEHLSXlNNNBHuol6H5EF1oceONi%2BKG9d0GniUb5Eq6NpWg2Uf1fD5189MwSD7%2B9%2BIjTJKGTiTB6DUnUPsrwCEOBYdRfsxjuTQs6pF3x0MhkKkJPHEGqEVx0I%2FPXfZkbgG26lCPR3C6BcmPzBeLGYLlQWr4ZDo9tNdzFl7%2Fo0kWvH8ALGHP9e7papNZqvHYqbn1mjasCordM1d0dDVQOegBCXpoxVhynivbhHnCrGS3BSllh2kpmXVoQJxte58dsUq9uuknS7Zr8Bl%2BhXd4RPEDADUNQOV409PylWizIEsWcXUXA6hXULSO67OoOHZgYgZsUcDnoeb59B9LNaPTtw9UGL096i02FgJ2Y%2FG6INP0XEX1cDnqva%2FadXjH%2FIv03FvUjxv73SRmZDNqJYVCcC1FHKkia%2BB4%2BXGJV3IwBs28S9XFGNHkac0oy%2FMzPWg0IcaRzKwR1FX9dGkSnEpS9%2BmwEzrP%2Blq1VLoqmyMddB6lg75uZxVIcwaDLvvLaGC5ChwxHqSDLgoPCSNqWHHNGMP%2Ft4cMGOqUBTAZrBr04UgC6vbgHr2JRwHLhVJNrviYJKhWOz5jYyaHfWk1l7lVQQHvL2GZ4NB%2BWC9%2BRFAiDSkrNL%2B%2BSLHIFVho7aHOtb0xSdIgiP3yaf%2BGEIJBYbOGKMUxx3wiSKYcmWVlJqP%2FliaNZMUH%2BBInYB5M1aCvNkO6dNYHxTx0RuZqO8PMN%2FOf4uv9%2BBeQsZGVd0uwcIU1ToNOUCLi1ty28vpqZexJf&X-Amz-Signature=6f2c9228e0dc388678bb22865d43cd174a76925f96d7f041a103838c65c71dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FRSWOF4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDcZfzdyN9lCd4GKZLXuClEMPwuxeqIYn%2BSR0TrCzlZewIgJqgoJD3L2umImJuCa47M6ueUvExeppVW3%2FDEg3D0OW8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMrlhfMFR4rybW2XHyrcA2%2F7nSx5Putu%2Fb8de1b6A2RjnWruZl73w9M88i96OtABy1a00jZFiBuKDJad%2FJ%2B0W5ZF1iHBv9cSckHX%2BAETtF5VdklDhUNljHfcUP5PwVEHLSXlNNNBHuol6H5EF1oceONi%2BKG9d0GniUb5Eq6NpWg2Uf1fD5189MwSD7%2B9%2BIjTJKGTiTB6DUnUPsrwCEOBYdRfsxjuTQs6pF3x0MhkKkJPHEGqEVx0I%2FPXfZkbgG26lCPR3C6BcmPzBeLGYLlQWr4ZDo9tNdzFl7%2Fo0kWvH8ALGHP9e7papNZqvHYqbn1mjasCordM1d0dDVQOegBCXpoxVhynivbhHnCrGS3BSllh2kpmXVoQJxte58dsUq9uuknS7Zr8Bl%2BhXd4RPEDADUNQOV409PylWizIEsWcXUXA6hXULSO67OoOHZgYgZsUcDnoeb59B9LNaPTtw9UGL096i02FgJ2Y%2FG6INP0XEX1cDnqva%2FadXjH%2FIv03FvUjxv73SRmZDNqJYVCcC1FHKkia%2BB4%2BXGJV3IwBs28S9XFGNHkac0oy%2FMzPWg0IcaRzKwR1FX9dGkSnEpS9%2BmwEzrP%2Blq1VLoqmyMddB6lg75uZxVIcwaDLvvLaGC5ChwxHqSDLgoPCSNqWHHNGMP%2Ft4cMGOqUBTAZrBr04UgC6vbgHr2JRwHLhVJNrviYJKhWOz5jYyaHfWk1l7lVQQHvL2GZ4NB%2BWC9%2BRFAiDSkrNL%2B%2BSLHIFVho7aHOtb0xSdIgiP3yaf%2BGEIJBYbOGKMUxx3wiSKYcmWVlJqP%2FliaNZMUH%2BBInYB5M1aCvNkO6dNYHxTx0RuZqO8PMN%2FOf4uv9%2BBeQsZGVd0uwcIU1ToNOUCLi1ty28vpqZexJf&X-Amz-Signature=c47d09279f1b90943bf712c4a103e44c314cbf376952cb2c1c79ecbee0a2fb41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FRSWOF4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDcZfzdyN9lCd4GKZLXuClEMPwuxeqIYn%2BSR0TrCzlZewIgJqgoJD3L2umImJuCa47M6ueUvExeppVW3%2FDEg3D0OW8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMrlhfMFR4rybW2XHyrcA2%2F7nSx5Putu%2Fb8de1b6A2RjnWruZl73w9M88i96OtABy1a00jZFiBuKDJad%2FJ%2B0W5ZF1iHBv9cSckHX%2BAETtF5VdklDhUNljHfcUP5PwVEHLSXlNNNBHuol6H5EF1oceONi%2BKG9d0GniUb5Eq6NpWg2Uf1fD5189MwSD7%2B9%2BIjTJKGTiTB6DUnUPsrwCEOBYdRfsxjuTQs6pF3x0MhkKkJPHEGqEVx0I%2FPXfZkbgG26lCPR3C6BcmPzBeLGYLlQWr4ZDo9tNdzFl7%2Fo0kWvH8ALGHP9e7papNZqvHYqbn1mjasCordM1d0dDVQOegBCXpoxVhynivbhHnCrGS3BSllh2kpmXVoQJxte58dsUq9uuknS7Zr8Bl%2BhXd4RPEDADUNQOV409PylWizIEsWcXUXA6hXULSO67OoOHZgYgZsUcDnoeb59B9LNaPTtw9UGL096i02FgJ2Y%2FG6INP0XEX1cDnqva%2FadXjH%2FIv03FvUjxv73SRmZDNqJYVCcC1FHKkia%2BB4%2BXGJV3IwBs28S9XFGNHkac0oy%2FMzPWg0IcaRzKwR1FX9dGkSnEpS9%2BmwEzrP%2Blq1VLoqmyMddB6lg75uZxVIcwaDLvvLaGC5ChwxHqSDLgoPCSNqWHHNGMP%2Ft4cMGOqUBTAZrBr04UgC6vbgHr2JRwHLhVJNrviYJKhWOz5jYyaHfWk1l7lVQQHvL2GZ4NB%2BWC9%2BRFAiDSkrNL%2B%2BSLHIFVho7aHOtb0xSdIgiP3yaf%2BGEIJBYbOGKMUxx3wiSKYcmWVlJqP%2FliaNZMUH%2BBInYB5M1aCvNkO6dNYHxTx0RuZqO8PMN%2FOf4uv9%2BBeQsZGVd0uwcIU1ToNOUCLi1ty28vpqZexJf&X-Amz-Signature=cab726c67dac6abd5b9dfb8e4d5d2e9ab27a7e157bfdbdd747dcf20d9c60f2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FRSWOF4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDcZfzdyN9lCd4GKZLXuClEMPwuxeqIYn%2BSR0TrCzlZewIgJqgoJD3L2umImJuCa47M6ueUvExeppVW3%2FDEg3D0OW8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMrlhfMFR4rybW2XHyrcA2%2F7nSx5Putu%2Fb8de1b6A2RjnWruZl73w9M88i96OtABy1a00jZFiBuKDJad%2FJ%2B0W5ZF1iHBv9cSckHX%2BAETtF5VdklDhUNljHfcUP5PwVEHLSXlNNNBHuol6H5EF1oceONi%2BKG9d0GniUb5Eq6NpWg2Uf1fD5189MwSD7%2B9%2BIjTJKGTiTB6DUnUPsrwCEOBYdRfsxjuTQs6pF3x0MhkKkJPHEGqEVx0I%2FPXfZkbgG26lCPR3C6BcmPzBeLGYLlQWr4ZDo9tNdzFl7%2Fo0kWvH8ALGHP9e7papNZqvHYqbn1mjasCordM1d0dDVQOegBCXpoxVhynivbhHnCrGS3BSllh2kpmXVoQJxte58dsUq9uuknS7Zr8Bl%2BhXd4RPEDADUNQOV409PylWizIEsWcXUXA6hXULSO67OoOHZgYgZsUcDnoeb59B9LNaPTtw9UGL096i02FgJ2Y%2FG6INP0XEX1cDnqva%2FadXjH%2FIv03FvUjxv73SRmZDNqJYVCcC1FHKkia%2BB4%2BXGJV3IwBs28S9XFGNHkac0oy%2FMzPWg0IcaRzKwR1FX9dGkSnEpS9%2BmwEzrP%2Blq1VLoqmyMddB6lg75uZxVIcwaDLvvLaGC5ChwxHqSDLgoPCSNqWHHNGMP%2Ft4cMGOqUBTAZrBr04UgC6vbgHr2JRwHLhVJNrviYJKhWOz5jYyaHfWk1l7lVQQHvL2GZ4NB%2BWC9%2BRFAiDSkrNL%2B%2BSLHIFVho7aHOtb0xSdIgiP3yaf%2BGEIJBYbOGKMUxx3wiSKYcmWVlJqP%2FliaNZMUH%2BBInYB5M1aCvNkO6dNYHxTx0RuZqO8PMN%2FOf4uv9%2BBeQsZGVd0uwcIU1ToNOUCLi1ty28vpqZexJf&X-Amz-Signature=76aab2b85c4ffea2cfda90b650b1b7cc576f3b56f23c8531a63565ea0a7b8ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FRSWOF4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDcZfzdyN9lCd4GKZLXuClEMPwuxeqIYn%2BSR0TrCzlZewIgJqgoJD3L2umImJuCa47M6ueUvExeppVW3%2FDEg3D0OW8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMrlhfMFR4rybW2XHyrcA2%2F7nSx5Putu%2Fb8de1b6A2RjnWruZl73w9M88i96OtABy1a00jZFiBuKDJad%2FJ%2B0W5ZF1iHBv9cSckHX%2BAETtF5VdklDhUNljHfcUP5PwVEHLSXlNNNBHuol6H5EF1oceONi%2BKG9d0GniUb5Eq6NpWg2Uf1fD5189MwSD7%2B9%2BIjTJKGTiTB6DUnUPsrwCEOBYdRfsxjuTQs6pF3x0MhkKkJPHEGqEVx0I%2FPXfZkbgG26lCPR3C6BcmPzBeLGYLlQWr4ZDo9tNdzFl7%2Fo0kWvH8ALGHP9e7papNZqvHYqbn1mjasCordM1d0dDVQOegBCXpoxVhynivbhHnCrGS3BSllh2kpmXVoQJxte58dsUq9uuknS7Zr8Bl%2BhXd4RPEDADUNQOV409PylWizIEsWcXUXA6hXULSO67OoOHZgYgZsUcDnoeb59B9LNaPTtw9UGL096i02FgJ2Y%2FG6INP0XEX1cDnqva%2FadXjH%2FIv03FvUjxv73SRmZDNqJYVCcC1FHKkia%2BB4%2BXGJV3IwBs28S9XFGNHkac0oy%2FMzPWg0IcaRzKwR1FX9dGkSnEpS9%2BmwEzrP%2Blq1VLoqmyMddB6lg75uZxVIcwaDLvvLaGC5ChwxHqSDLgoPCSNqWHHNGMP%2Ft4cMGOqUBTAZrBr04UgC6vbgHr2JRwHLhVJNrviYJKhWOz5jYyaHfWk1l7lVQQHvL2GZ4NB%2BWC9%2BRFAiDSkrNL%2B%2BSLHIFVho7aHOtb0xSdIgiP3yaf%2BGEIJBYbOGKMUxx3wiSKYcmWVlJqP%2FliaNZMUH%2BBInYB5M1aCvNkO6dNYHxTx0RuZqO8PMN%2FOf4uv9%2BBeQsZGVd0uwcIU1ToNOUCLi1ty28vpqZexJf&X-Amz-Signature=0899cede827912490019562b9131fef917f41b574036cf9c2dd339bb8faf5705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
