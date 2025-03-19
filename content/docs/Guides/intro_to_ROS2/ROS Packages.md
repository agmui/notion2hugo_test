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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IYQDX2N%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCvfFs81bCUq4%2BRi9V3647VtF4D%2Fg0FGiVg9P2DBu6sdgIgaiDoR7R9ip%2BPq0koA5QM8b8Ib%2Fb%2FTJZY7XKqpZy6ozkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGPjeQIy4%2Bjm2GZJGCrcA5Bs5Bq7Ce%2FirlJ1zfPtGvqO%2Ft8sVAJEkUhaST4Osb4pZL6kCwfPwAfV7V2iHh0SAD2zrlFNxF5mfgXcT0YrOB0rvevVktMyns2gFh0jih96zMESrCqoiqr0AJ4cEWH9oMmAho6C5Vd0IKXUwSeMjSJbIBhvViUUYME4owr2cK7v2npn9Onh29pHpnZZV61bWyaJYg37vPM1aar737w27qOulrAk8ncaKgSXM%2F35z5u0tH%2FVTGljUFsIQhMKrvbrOYC5%2FNnJeJy8tLZknWKaM5V597IFuTOVWKMUulI7n%2Bw%2FBPxx3NUOEWOnOlf%2BLcTZbDleW8rUhtsul%2FdhyAPYMPGmS%2FNJ%2Fj2pkBiYzQsr5E5DpI2DqFRi70gBS%2BD6hOQEaVRzupbhmgNSnY0nKWMHJQvT4PAVpKPqQqfd7MfcVaGWmVeQMiFpywQgujIx%2FYVij32rmDomZj11CR0mzsWHPmsGvtxbDjnLnTKpY186oe3UElP5sN%2BRNLBnaz7U2W1t0c5DutGJSMq7AV%2FIGmpCBVVK5cBrmpu7G7WNsOCz91qiBzUJl%2B4vzZ9s8ghSiUaHtlPY2lLFBzTK04w8gSt2m%2FK48bU%2B0IbIAkRZRP94iMWqPBZwh0%2BNERPtKnU9MLK86L4GOqUBbijIRd9jeGF5MnX%2FgBGvOlP86GjsMv2dzic6F0LffwsaQ6GgT4mXEE3N%2FAgXTqtwFsv2ihSidmuFtp66AZZUUHcvflq8A9zN4M6uY%2Fp5bpTx2fpNXN9Iek3QkJSlsa4x6YOR677T9Wma0gYLcg5U3ZJRMlzvtVdl8wuMK0XQQ1yqlgMquxVlSSmO1bHVTJPPCYDtCe2jUUh1HV8YtR8lGcaRsvHZ&X-Amz-Signature=8021bf7b68bda28f201a80dbdb858d0c8f1a21427a0093d11627fd028f2db66c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IYQDX2N%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCvfFs81bCUq4%2BRi9V3647VtF4D%2Fg0FGiVg9P2DBu6sdgIgaiDoR7R9ip%2BPq0koA5QM8b8Ib%2Fb%2FTJZY7XKqpZy6ozkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGPjeQIy4%2Bjm2GZJGCrcA5Bs5Bq7Ce%2FirlJ1zfPtGvqO%2Ft8sVAJEkUhaST4Osb4pZL6kCwfPwAfV7V2iHh0SAD2zrlFNxF5mfgXcT0YrOB0rvevVktMyns2gFh0jih96zMESrCqoiqr0AJ4cEWH9oMmAho6C5Vd0IKXUwSeMjSJbIBhvViUUYME4owr2cK7v2npn9Onh29pHpnZZV61bWyaJYg37vPM1aar737w27qOulrAk8ncaKgSXM%2F35z5u0tH%2FVTGljUFsIQhMKrvbrOYC5%2FNnJeJy8tLZknWKaM5V597IFuTOVWKMUulI7n%2Bw%2FBPxx3NUOEWOnOlf%2BLcTZbDleW8rUhtsul%2FdhyAPYMPGmS%2FNJ%2Fj2pkBiYzQsr5E5DpI2DqFRi70gBS%2BD6hOQEaVRzupbhmgNSnY0nKWMHJQvT4PAVpKPqQqfd7MfcVaGWmVeQMiFpywQgujIx%2FYVij32rmDomZj11CR0mzsWHPmsGvtxbDjnLnTKpY186oe3UElP5sN%2BRNLBnaz7U2W1t0c5DutGJSMq7AV%2FIGmpCBVVK5cBrmpu7G7WNsOCz91qiBzUJl%2B4vzZ9s8ghSiUaHtlPY2lLFBzTK04w8gSt2m%2FK48bU%2B0IbIAkRZRP94iMWqPBZwh0%2BNERPtKnU9MLK86L4GOqUBbijIRd9jeGF5MnX%2FgBGvOlP86GjsMv2dzic6F0LffwsaQ6GgT4mXEE3N%2FAgXTqtwFsv2ihSidmuFtp66AZZUUHcvflq8A9zN4M6uY%2Fp5bpTx2fpNXN9Iek3QkJSlsa4x6YOR677T9Wma0gYLcg5U3ZJRMlzvtVdl8wuMK0XQQ1yqlgMquxVlSSmO1bHVTJPPCYDtCe2jUUh1HV8YtR8lGcaRsvHZ&X-Amz-Signature=bbb17d1eb301c5bfb6ab21d9fc4e83822e37ce5f32df827701d5786e8c68ee81&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IYQDX2N%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCvfFs81bCUq4%2BRi9V3647VtF4D%2Fg0FGiVg9P2DBu6sdgIgaiDoR7R9ip%2BPq0koA5QM8b8Ib%2Fb%2FTJZY7XKqpZy6ozkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGPjeQIy4%2Bjm2GZJGCrcA5Bs5Bq7Ce%2FirlJ1zfPtGvqO%2Ft8sVAJEkUhaST4Osb4pZL6kCwfPwAfV7V2iHh0SAD2zrlFNxF5mfgXcT0YrOB0rvevVktMyns2gFh0jih96zMESrCqoiqr0AJ4cEWH9oMmAho6C5Vd0IKXUwSeMjSJbIBhvViUUYME4owr2cK7v2npn9Onh29pHpnZZV61bWyaJYg37vPM1aar737w27qOulrAk8ncaKgSXM%2F35z5u0tH%2FVTGljUFsIQhMKrvbrOYC5%2FNnJeJy8tLZknWKaM5V597IFuTOVWKMUulI7n%2Bw%2FBPxx3NUOEWOnOlf%2BLcTZbDleW8rUhtsul%2FdhyAPYMPGmS%2FNJ%2Fj2pkBiYzQsr5E5DpI2DqFRi70gBS%2BD6hOQEaVRzupbhmgNSnY0nKWMHJQvT4PAVpKPqQqfd7MfcVaGWmVeQMiFpywQgujIx%2FYVij32rmDomZj11CR0mzsWHPmsGvtxbDjnLnTKpY186oe3UElP5sN%2BRNLBnaz7U2W1t0c5DutGJSMq7AV%2FIGmpCBVVK5cBrmpu7G7WNsOCz91qiBzUJl%2B4vzZ9s8ghSiUaHtlPY2lLFBzTK04w8gSt2m%2FK48bU%2B0IbIAkRZRP94iMWqPBZwh0%2BNERPtKnU9MLK86L4GOqUBbijIRd9jeGF5MnX%2FgBGvOlP86GjsMv2dzic6F0LffwsaQ6GgT4mXEE3N%2FAgXTqtwFsv2ihSidmuFtp66AZZUUHcvflq8A9zN4M6uY%2Fp5bpTx2fpNXN9Iek3QkJSlsa4x6YOR677T9Wma0gYLcg5U3ZJRMlzvtVdl8wuMK0XQQ1yqlgMquxVlSSmO1bHVTJPPCYDtCe2jUUh1HV8YtR8lGcaRsvHZ&X-Amz-Signature=1abe005a2719ca2db232b4d3c892df46c1922880e10cc40d215d5393ffb0d09b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IYQDX2N%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCvfFs81bCUq4%2BRi9V3647VtF4D%2Fg0FGiVg9P2DBu6sdgIgaiDoR7R9ip%2BPq0koA5QM8b8Ib%2Fb%2FTJZY7XKqpZy6ozkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGPjeQIy4%2Bjm2GZJGCrcA5Bs5Bq7Ce%2FirlJ1zfPtGvqO%2Ft8sVAJEkUhaST4Osb4pZL6kCwfPwAfV7V2iHh0SAD2zrlFNxF5mfgXcT0YrOB0rvevVktMyns2gFh0jih96zMESrCqoiqr0AJ4cEWH9oMmAho6C5Vd0IKXUwSeMjSJbIBhvViUUYME4owr2cK7v2npn9Onh29pHpnZZV61bWyaJYg37vPM1aar737w27qOulrAk8ncaKgSXM%2F35z5u0tH%2FVTGljUFsIQhMKrvbrOYC5%2FNnJeJy8tLZknWKaM5V597IFuTOVWKMUulI7n%2Bw%2FBPxx3NUOEWOnOlf%2BLcTZbDleW8rUhtsul%2FdhyAPYMPGmS%2FNJ%2Fj2pkBiYzQsr5E5DpI2DqFRi70gBS%2BD6hOQEaVRzupbhmgNSnY0nKWMHJQvT4PAVpKPqQqfd7MfcVaGWmVeQMiFpywQgujIx%2FYVij32rmDomZj11CR0mzsWHPmsGvtxbDjnLnTKpY186oe3UElP5sN%2BRNLBnaz7U2W1t0c5DutGJSMq7AV%2FIGmpCBVVK5cBrmpu7G7WNsOCz91qiBzUJl%2B4vzZ9s8ghSiUaHtlPY2lLFBzTK04w8gSt2m%2FK48bU%2B0IbIAkRZRP94iMWqPBZwh0%2BNERPtKnU9MLK86L4GOqUBbijIRd9jeGF5MnX%2FgBGvOlP86GjsMv2dzic6F0LffwsaQ6GgT4mXEE3N%2FAgXTqtwFsv2ihSidmuFtp66AZZUUHcvflq8A9zN4M6uY%2Fp5bpTx2fpNXN9Iek3QkJSlsa4x6YOR677T9Wma0gYLcg5U3ZJRMlzvtVdl8wuMK0XQQ1yqlgMquxVlSSmO1bHVTJPPCYDtCe2jUUh1HV8YtR8lGcaRsvHZ&X-Amz-Signature=2c77a235dc8cde8f8c64503f82da9e49bdca9239520c0915be3f5e32432374e3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IYQDX2N%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCvfFs81bCUq4%2BRi9V3647VtF4D%2Fg0FGiVg9P2DBu6sdgIgaiDoR7R9ip%2BPq0koA5QM8b8Ib%2Fb%2FTJZY7XKqpZy6ozkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGPjeQIy4%2Bjm2GZJGCrcA5Bs5Bq7Ce%2FirlJ1zfPtGvqO%2Ft8sVAJEkUhaST4Osb4pZL6kCwfPwAfV7V2iHh0SAD2zrlFNxF5mfgXcT0YrOB0rvevVktMyns2gFh0jih96zMESrCqoiqr0AJ4cEWH9oMmAho6C5Vd0IKXUwSeMjSJbIBhvViUUYME4owr2cK7v2npn9Onh29pHpnZZV61bWyaJYg37vPM1aar737w27qOulrAk8ncaKgSXM%2F35z5u0tH%2FVTGljUFsIQhMKrvbrOYC5%2FNnJeJy8tLZknWKaM5V597IFuTOVWKMUulI7n%2Bw%2FBPxx3NUOEWOnOlf%2BLcTZbDleW8rUhtsul%2FdhyAPYMPGmS%2FNJ%2Fj2pkBiYzQsr5E5DpI2DqFRi70gBS%2BD6hOQEaVRzupbhmgNSnY0nKWMHJQvT4PAVpKPqQqfd7MfcVaGWmVeQMiFpywQgujIx%2FYVij32rmDomZj11CR0mzsWHPmsGvtxbDjnLnTKpY186oe3UElP5sN%2BRNLBnaz7U2W1t0c5DutGJSMq7AV%2FIGmpCBVVK5cBrmpu7G7WNsOCz91qiBzUJl%2B4vzZ9s8ghSiUaHtlPY2lLFBzTK04w8gSt2m%2FK48bU%2B0IbIAkRZRP94iMWqPBZwh0%2BNERPtKnU9MLK86L4GOqUBbijIRd9jeGF5MnX%2FgBGvOlP86GjsMv2dzic6F0LffwsaQ6GgT4mXEE3N%2FAgXTqtwFsv2ihSidmuFtp66AZZUUHcvflq8A9zN4M6uY%2Fp5bpTx2fpNXN9Iek3QkJSlsa4x6YOR677T9Wma0gYLcg5U3ZJRMlzvtVdl8wuMK0XQQ1yqlgMquxVlSSmO1bHVTJPPCYDtCe2jUUh1HV8YtR8lGcaRsvHZ&X-Amz-Signature=4ad602e8c2750b94718e55688a53b136e176222d5339ab2bf87132187df316c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IYQDX2N%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCvfFs81bCUq4%2BRi9V3647VtF4D%2Fg0FGiVg9P2DBu6sdgIgaiDoR7R9ip%2BPq0koA5QM8b8Ib%2Fb%2FTJZY7XKqpZy6ozkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGPjeQIy4%2Bjm2GZJGCrcA5Bs5Bq7Ce%2FirlJ1zfPtGvqO%2Ft8sVAJEkUhaST4Osb4pZL6kCwfPwAfV7V2iHh0SAD2zrlFNxF5mfgXcT0YrOB0rvevVktMyns2gFh0jih96zMESrCqoiqr0AJ4cEWH9oMmAho6C5Vd0IKXUwSeMjSJbIBhvViUUYME4owr2cK7v2npn9Onh29pHpnZZV61bWyaJYg37vPM1aar737w27qOulrAk8ncaKgSXM%2F35z5u0tH%2FVTGljUFsIQhMKrvbrOYC5%2FNnJeJy8tLZknWKaM5V597IFuTOVWKMUulI7n%2Bw%2FBPxx3NUOEWOnOlf%2BLcTZbDleW8rUhtsul%2FdhyAPYMPGmS%2FNJ%2Fj2pkBiYzQsr5E5DpI2DqFRi70gBS%2BD6hOQEaVRzupbhmgNSnY0nKWMHJQvT4PAVpKPqQqfd7MfcVaGWmVeQMiFpywQgujIx%2FYVij32rmDomZj11CR0mzsWHPmsGvtxbDjnLnTKpY186oe3UElP5sN%2BRNLBnaz7U2W1t0c5DutGJSMq7AV%2FIGmpCBVVK5cBrmpu7G7WNsOCz91qiBzUJl%2B4vzZ9s8ghSiUaHtlPY2lLFBzTK04w8gSt2m%2FK48bU%2B0IbIAkRZRP94iMWqPBZwh0%2BNERPtKnU9MLK86L4GOqUBbijIRd9jeGF5MnX%2FgBGvOlP86GjsMv2dzic6F0LffwsaQ6GgT4mXEE3N%2FAgXTqtwFsv2ihSidmuFtp66AZZUUHcvflq8A9zN4M6uY%2Fp5bpTx2fpNXN9Iek3QkJSlsa4x6YOR677T9Wma0gYLcg5U3ZJRMlzvtVdl8wuMK0XQQ1yqlgMquxVlSSmO1bHVTJPPCYDtCe2jUUh1HV8YtR8lGcaRsvHZ&X-Amz-Signature=ba13774f3a5444ef09314ed6505ab92f49174d3e8f280bd0c4e1f675ae68b526&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IYQDX2N%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCvfFs81bCUq4%2BRi9V3647VtF4D%2Fg0FGiVg9P2DBu6sdgIgaiDoR7R9ip%2BPq0koA5QM8b8Ib%2Fb%2FTJZY7XKqpZy6ozkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGPjeQIy4%2Bjm2GZJGCrcA5Bs5Bq7Ce%2FirlJ1zfPtGvqO%2Ft8sVAJEkUhaST4Osb4pZL6kCwfPwAfV7V2iHh0SAD2zrlFNxF5mfgXcT0YrOB0rvevVktMyns2gFh0jih96zMESrCqoiqr0AJ4cEWH9oMmAho6C5Vd0IKXUwSeMjSJbIBhvViUUYME4owr2cK7v2npn9Onh29pHpnZZV61bWyaJYg37vPM1aar737w27qOulrAk8ncaKgSXM%2F35z5u0tH%2FVTGljUFsIQhMKrvbrOYC5%2FNnJeJy8tLZknWKaM5V597IFuTOVWKMUulI7n%2Bw%2FBPxx3NUOEWOnOlf%2BLcTZbDleW8rUhtsul%2FdhyAPYMPGmS%2FNJ%2Fj2pkBiYzQsr5E5DpI2DqFRi70gBS%2BD6hOQEaVRzupbhmgNSnY0nKWMHJQvT4PAVpKPqQqfd7MfcVaGWmVeQMiFpywQgujIx%2FYVij32rmDomZj11CR0mzsWHPmsGvtxbDjnLnTKpY186oe3UElP5sN%2BRNLBnaz7U2W1t0c5DutGJSMq7AV%2FIGmpCBVVK5cBrmpu7G7WNsOCz91qiBzUJl%2B4vzZ9s8ghSiUaHtlPY2lLFBzTK04w8gSt2m%2FK48bU%2B0IbIAkRZRP94iMWqPBZwh0%2BNERPtKnU9MLK86L4GOqUBbijIRd9jeGF5MnX%2FgBGvOlP86GjsMv2dzic6F0LffwsaQ6GgT4mXEE3N%2FAgXTqtwFsv2ihSidmuFtp66AZZUUHcvflq8A9zN4M6uY%2Fp5bpTx2fpNXN9Iek3QkJSlsa4x6YOR677T9Wma0gYLcg5U3ZJRMlzvtVdl8wuMK0XQQ1yqlgMquxVlSSmO1bHVTJPPCYDtCe2jUUh1HV8YtR8lGcaRsvHZ&X-Amz-Signature=d34e3666d2359540e796f954ed4cefd8e0de8e9eebf8b79ff1ac76f8dc0ae4cf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
