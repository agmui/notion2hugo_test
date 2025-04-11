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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEYYTGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3R%2FGVnhA%2BQCeu4vo4u%2BcV0tcyeAoonP8xxPi55R2XIAIhANX6jTFmOheOaNOnKskt0cTAWy8%2Fo%2BujtV7do9ihHaxkKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALcYcA7YK7y00BWcq3AOHsCTSNgF0GoaCPIMPTCQL3wvEDQfvOWPtvg4WymJ5suWshUemK6aj9Vg%2FBwsZA95B7Pr3PHJGeQKZApvOOvEX2gRybtbK%2FLvvzccLrr28W%2FtHPbTqmttKsbjj2D8WPM6BEY3I5Tj8F%2BsNkJR2NDqPWStgtfK9R8dXNpcSWaCTmuTizfNvU5AcRGLZz%2BjVh3N8qORtmvkiS9pW0xLiB%2BwNQDEPCz8T43gAWCgXJK7ISCd8tVU7jrYfNdjsrqif8k6pmrG9K2u9bAzSsARg4hKTDNuFDB4%2FxCJPsb9jItdUqPcHrefpfG5qWMRP%2BSQXBPFe3EThfU9by789oEsaWeJYLJ2UT95hGsKrfsy0FwPzz1QerAioX4OtAy7miugwqJ%2FPYaqIu%2BIhWZisNYUBzlXyDFUtmtCQ3l21lff2zmfhVTCqLbn1wQr4XgUtqqp2tldUAkzT6n9lvebgrSZvU5DAeqiGg68QY7wUbZKgQuKZNOsG8F24d2S%2Fv96OplUTNKmXAzLbIRYT6GSnNmgCeBrGyfhGo%2FrCRJIcbaPD2RaQRsvkv3PmFCdyL52zZaKmp1x22xJPDaM6TGvtVCZIo%2BomTBzyB48TmYS%2FaIyRhxRmXypb4lXwIVjQUz3bDTCf3uG%2FBjqkAdnA%2F2Yh5%2FLNwQnwbRaHOwH%2B8FeSzu5uOraVSGOOZt5EKHmvVpRamQwPJVg7huItKwMXHuDlby%2Fsfb2fAZoYg%2FhPJnTMsM81h8IPgHJq3%2FG9mdb7TDVEkjaReyzpFpluY6p2v1O1D%2FV%2BHhVPb52A4L4HkOaL7idttnBrfgzOomJiXbz3SwyvMB3Q67orr2PkIFy8Qr2dsCky15JghDFduw%2BZWMzs&X-Amz-Signature=9548af19b645ddf47eb4bff01f8614c10b09f591002b3c7e5038be95e4eb191d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEYYTGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3R%2FGVnhA%2BQCeu4vo4u%2BcV0tcyeAoonP8xxPi55R2XIAIhANX6jTFmOheOaNOnKskt0cTAWy8%2Fo%2BujtV7do9ihHaxkKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALcYcA7YK7y00BWcq3AOHsCTSNgF0GoaCPIMPTCQL3wvEDQfvOWPtvg4WymJ5suWshUemK6aj9Vg%2FBwsZA95B7Pr3PHJGeQKZApvOOvEX2gRybtbK%2FLvvzccLrr28W%2FtHPbTqmttKsbjj2D8WPM6BEY3I5Tj8F%2BsNkJR2NDqPWStgtfK9R8dXNpcSWaCTmuTizfNvU5AcRGLZz%2BjVh3N8qORtmvkiS9pW0xLiB%2BwNQDEPCz8T43gAWCgXJK7ISCd8tVU7jrYfNdjsrqif8k6pmrG9K2u9bAzSsARg4hKTDNuFDB4%2FxCJPsb9jItdUqPcHrefpfG5qWMRP%2BSQXBPFe3EThfU9by789oEsaWeJYLJ2UT95hGsKrfsy0FwPzz1QerAioX4OtAy7miugwqJ%2FPYaqIu%2BIhWZisNYUBzlXyDFUtmtCQ3l21lff2zmfhVTCqLbn1wQr4XgUtqqp2tldUAkzT6n9lvebgrSZvU5DAeqiGg68QY7wUbZKgQuKZNOsG8F24d2S%2Fv96OplUTNKmXAzLbIRYT6GSnNmgCeBrGyfhGo%2FrCRJIcbaPD2RaQRsvkv3PmFCdyL52zZaKmp1x22xJPDaM6TGvtVCZIo%2BomTBzyB48TmYS%2FaIyRhxRmXypb4lXwIVjQUz3bDTCf3uG%2FBjqkAdnA%2F2Yh5%2FLNwQnwbRaHOwH%2B8FeSzu5uOraVSGOOZt5EKHmvVpRamQwPJVg7huItKwMXHuDlby%2Fsfb2fAZoYg%2FhPJnTMsM81h8IPgHJq3%2FG9mdb7TDVEkjaReyzpFpluY6p2v1O1D%2FV%2BHhVPb52A4L4HkOaL7idttnBrfgzOomJiXbz3SwyvMB3Q67orr2PkIFy8Qr2dsCky15JghDFduw%2BZWMzs&X-Amz-Signature=973e9571f326e3465ebe6defaf4a1baf4bb795fe6f9472a49c25e3fc50d5217a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEYYTGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3R%2FGVnhA%2BQCeu4vo4u%2BcV0tcyeAoonP8xxPi55R2XIAIhANX6jTFmOheOaNOnKskt0cTAWy8%2Fo%2BujtV7do9ihHaxkKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALcYcA7YK7y00BWcq3AOHsCTSNgF0GoaCPIMPTCQL3wvEDQfvOWPtvg4WymJ5suWshUemK6aj9Vg%2FBwsZA95B7Pr3PHJGeQKZApvOOvEX2gRybtbK%2FLvvzccLrr28W%2FtHPbTqmttKsbjj2D8WPM6BEY3I5Tj8F%2BsNkJR2NDqPWStgtfK9R8dXNpcSWaCTmuTizfNvU5AcRGLZz%2BjVh3N8qORtmvkiS9pW0xLiB%2BwNQDEPCz8T43gAWCgXJK7ISCd8tVU7jrYfNdjsrqif8k6pmrG9K2u9bAzSsARg4hKTDNuFDB4%2FxCJPsb9jItdUqPcHrefpfG5qWMRP%2BSQXBPFe3EThfU9by789oEsaWeJYLJ2UT95hGsKrfsy0FwPzz1QerAioX4OtAy7miugwqJ%2FPYaqIu%2BIhWZisNYUBzlXyDFUtmtCQ3l21lff2zmfhVTCqLbn1wQr4XgUtqqp2tldUAkzT6n9lvebgrSZvU5DAeqiGg68QY7wUbZKgQuKZNOsG8F24d2S%2Fv96OplUTNKmXAzLbIRYT6GSnNmgCeBrGyfhGo%2FrCRJIcbaPD2RaQRsvkv3PmFCdyL52zZaKmp1x22xJPDaM6TGvtVCZIo%2BomTBzyB48TmYS%2FaIyRhxRmXypb4lXwIVjQUz3bDTCf3uG%2FBjqkAdnA%2F2Yh5%2FLNwQnwbRaHOwH%2B8FeSzu5uOraVSGOOZt5EKHmvVpRamQwPJVg7huItKwMXHuDlby%2Fsfb2fAZoYg%2FhPJnTMsM81h8IPgHJq3%2FG9mdb7TDVEkjaReyzpFpluY6p2v1O1D%2FV%2BHhVPb52A4L4HkOaL7idttnBrfgzOomJiXbz3SwyvMB3Q67orr2PkIFy8Qr2dsCky15JghDFduw%2BZWMzs&X-Amz-Signature=c8c3c42b8f826461dbb82754dd753f0f6ce63ec3f1e11059a256391b34f35f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEYYTGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3R%2FGVnhA%2BQCeu4vo4u%2BcV0tcyeAoonP8xxPi55R2XIAIhANX6jTFmOheOaNOnKskt0cTAWy8%2Fo%2BujtV7do9ihHaxkKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALcYcA7YK7y00BWcq3AOHsCTSNgF0GoaCPIMPTCQL3wvEDQfvOWPtvg4WymJ5suWshUemK6aj9Vg%2FBwsZA95B7Pr3PHJGeQKZApvOOvEX2gRybtbK%2FLvvzccLrr28W%2FtHPbTqmttKsbjj2D8WPM6BEY3I5Tj8F%2BsNkJR2NDqPWStgtfK9R8dXNpcSWaCTmuTizfNvU5AcRGLZz%2BjVh3N8qORtmvkiS9pW0xLiB%2BwNQDEPCz8T43gAWCgXJK7ISCd8tVU7jrYfNdjsrqif8k6pmrG9K2u9bAzSsARg4hKTDNuFDB4%2FxCJPsb9jItdUqPcHrefpfG5qWMRP%2BSQXBPFe3EThfU9by789oEsaWeJYLJ2UT95hGsKrfsy0FwPzz1QerAioX4OtAy7miugwqJ%2FPYaqIu%2BIhWZisNYUBzlXyDFUtmtCQ3l21lff2zmfhVTCqLbn1wQr4XgUtqqp2tldUAkzT6n9lvebgrSZvU5DAeqiGg68QY7wUbZKgQuKZNOsG8F24d2S%2Fv96OplUTNKmXAzLbIRYT6GSnNmgCeBrGyfhGo%2FrCRJIcbaPD2RaQRsvkv3PmFCdyL52zZaKmp1x22xJPDaM6TGvtVCZIo%2BomTBzyB48TmYS%2FaIyRhxRmXypb4lXwIVjQUz3bDTCf3uG%2FBjqkAdnA%2F2Yh5%2FLNwQnwbRaHOwH%2B8FeSzu5uOraVSGOOZt5EKHmvVpRamQwPJVg7huItKwMXHuDlby%2Fsfb2fAZoYg%2FhPJnTMsM81h8IPgHJq3%2FG9mdb7TDVEkjaReyzpFpluY6p2v1O1D%2FV%2BHhVPb52A4L4HkOaL7idttnBrfgzOomJiXbz3SwyvMB3Q67orr2PkIFy8Qr2dsCky15JghDFduw%2BZWMzs&X-Amz-Signature=666b64bb4b051cd7a9edcfcfd6a38f535b9f0cfe84bc2072e231ec0d719361bb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEYYTGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3R%2FGVnhA%2BQCeu4vo4u%2BcV0tcyeAoonP8xxPi55R2XIAIhANX6jTFmOheOaNOnKskt0cTAWy8%2Fo%2BujtV7do9ihHaxkKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALcYcA7YK7y00BWcq3AOHsCTSNgF0GoaCPIMPTCQL3wvEDQfvOWPtvg4WymJ5suWshUemK6aj9Vg%2FBwsZA95B7Pr3PHJGeQKZApvOOvEX2gRybtbK%2FLvvzccLrr28W%2FtHPbTqmttKsbjj2D8WPM6BEY3I5Tj8F%2BsNkJR2NDqPWStgtfK9R8dXNpcSWaCTmuTizfNvU5AcRGLZz%2BjVh3N8qORtmvkiS9pW0xLiB%2BwNQDEPCz8T43gAWCgXJK7ISCd8tVU7jrYfNdjsrqif8k6pmrG9K2u9bAzSsARg4hKTDNuFDB4%2FxCJPsb9jItdUqPcHrefpfG5qWMRP%2BSQXBPFe3EThfU9by789oEsaWeJYLJ2UT95hGsKrfsy0FwPzz1QerAioX4OtAy7miugwqJ%2FPYaqIu%2BIhWZisNYUBzlXyDFUtmtCQ3l21lff2zmfhVTCqLbn1wQr4XgUtqqp2tldUAkzT6n9lvebgrSZvU5DAeqiGg68QY7wUbZKgQuKZNOsG8F24d2S%2Fv96OplUTNKmXAzLbIRYT6GSnNmgCeBrGyfhGo%2FrCRJIcbaPD2RaQRsvkv3PmFCdyL52zZaKmp1x22xJPDaM6TGvtVCZIo%2BomTBzyB48TmYS%2FaIyRhxRmXypb4lXwIVjQUz3bDTCf3uG%2FBjqkAdnA%2F2Yh5%2FLNwQnwbRaHOwH%2B8FeSzu5uOraVSGOOZt5EKHmvVpRamQwPJVg7huItKwMXHuDlby%2Fsfb2fAZoYg%2FhPJnTMsM81h8IPgHJq3%2FG9mdb7TDVEkjaReyzpFpluY6p2v1O1D%2FV%2BHhVPb52A4L4HkOaL7idttnBrfgzOomJiXbz3SwyvMB3Q67orr2PkIFy8Qr2dsCky15JghDFduw%2BZWMzs&X-Amz-Signature=e57063acdf25feeb22eb14d5fa5750e172087962492bac678e4f6a8ca21c4ced&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEYYTGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3R%2FGVnhA%2BQCeu4vo4u%2BcV0tcyeAoonP8xxPi55R2XIAIhANX6jTFmOheOaNOnKskt0cTAWy8%2Fo%2BujtV7do9ihHaxkKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALcYcA7YK7y00BWcq3AOHsCTSNgF0GoaCPIMPTCQL3wvEDQfvOWPtvg4WymJ5suWshUemK6aj9Vg%2FBwsZA95B7Pr3PHJGeQKZApvOOvEX2gRybtbK%2FLvvzccLrr28W%2FtHPbTqmttKsbjj2D8WPM6BEY3I5Tj8F%2BsNkJR2NDqPWStgtfK9R8dXNpcSWaCTmuTizfNvU5AcRGLZz%2BjVh3N8qORtmvkiS9pW0xLiB%2BwNQDEPCz8T43gAWCgXJK7ISCd8tVU7jrYfNdjsrqif8k6pmrG9K2u9bAzSsARg4hKTDNuFDB4%2FxCJPsb9jItdUqPcHrefpfG5qWMRP%2BSQXBPFe3EThfU9by789oEsaWeJYLJ2UT95hGsKrfsy0FwPzz1QerAioX4OtAy7miugwqJ%2FPYaqIu%2BIhWZisNYUBzlXyDFUtmtCQ3l21lff2zmfhVTCqLbn1wQr4XgUtqqp2tldUAkzT6n9lvebgrSZvU5DAeqiGg68QY7wUbZKgQuKZNOsG8F24d2S%2Fv96OplUTNKmXAzLbIRYT6GSnNmgCeBrGyfhGo%2FrCRJIcbaPD2RaQRsvkv3PmFCdyL52zZaKmp1x22xJPDaM6TGvtVCZIo%2BomTBzyB48TmYS%2FaIyRhxRmXypb4lXwIVjQUz3bDTCf3uG%2FBjqkAdnA%2F2Yh5%2FLNwQnwbRaHOwH%2B8FeSzu5uOraVSGOOZt5EKHmvVpRamQwPJVg7huItKwMXHuDlby%2Fsfb2fAZoYg%2FhPJnTMsM81h8IPgHJq3%2FG9mdb7TDVEkjaReyzpFpluY6p2v1O1D%2FV%2BHhVPb52A4L4HkOaL7idttnBrfgzOomJiXbz3SwyvMB3Q67orr2PkIFy8Qr2dsCky15JghDFduw%2BZWMzs&X-Amz-Signature=1282455dd0ce073897084abc53b10f1b39f0a0b1e05ffdfb71a812d368de2c06&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEYYTGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3R%2FGVnhA%2BQCeu4vo4u%2BcV0tcyeAoonP8xxPi55R2XIAIhANX6jTFmOheOaNOnKskt0cTAWy8%2Fo%2BujtV7do9ihHaxkKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALcYcA7YK7y00BWcq3AOHsCTSNgF0GoaCPIMPTCQL3wvEDQfvOWPtvg4WymJ5suWshUemK6aj9Vg%2FBwsZA95B7Pr3PHJGeQKZApvOOvEX2gRybtbK%2FLvvzccLrr28W%2FtHPbTqmttKsbjj2D8WPM6BEY3I5Tj8F%2BsNkJR2NDqPWStgtfK9R8dXNpcSWaCTmuTizfNvU5AcRGLZz%2BjVh3N8qORtmvkiS9pW0xLiB%2BwNQDEPCz8T43gAWCgXJK7ISCd8tVU7jrYfNdjsrqif8k6pmrG9K2u9bAzSsARg4hKTDNuFDB4%2FxCJPsb9jItdUqPcHrefpfG5qWMRP%2BSQXBPFe3EThfU9by789oEsaWeJYLJ2UT95hGsKrfsy0FwPzz1QerAioX4OtAy7miugwqJ%2FPYaqIu%2BIhWZisNYUBzlXyDFUtmtCQ3l21lff2zmfhVTCqLbn1wQr4XgUtqqp2tldUAkzT6n9lvebgrSZvU5DAeqiGg68QY7wUbZKgQuKZNOsG8F24d2S%2Fv96OplUTNKmXAzLbIRYT6GSnNmgCeBrGyfhGo%2FrCRJIcbaPD2RaQRsvkv3PmFCdyL52zZaKmp1x22xJPDaM6TGvtVCZIo%2BomTBzyB48TmYS%2FaIyRhxRmXypb4lXwIVjQUz3bDTCf3uG%2FBjqkAdnA%2F2Yh5%2FLNwQnwbRaHOwH%2B8FeSzu5uOraVSGOOZt5EKHmvVpRamQwPJVg7huItKwMXHuDlby%2Fsfb2fAZoYg%2FhPJnTMsM81h8IPgHJq3%2FG9mdb7TDVEkjaReyzpFpluY6p2v1O1D%2FV%2BHhVPb52A4L4HkOaL7idttnBrfgzOomJiXbz3SwyvMB3Q67orr2PkIFy8Qr2dsCky15JghDFduw%2BZWMzs&X-Amz-Signature=eadb2a9adbaf9e863efd1710501d1b6d3c84f5c0a8c3d979839250223a83c7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
