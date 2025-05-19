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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUUN3F3O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa7CU080vovWNRimLALL1y4Sq2%2B%2FjxWcz5n1Jsv7MkpAIhAJDOJ3XIxZak8j9p%2FP7XlFUP2hRWfSsTUHL4dpquE3E7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhozlYEr6Yea6woIUq3APJKfZPDjTO13UUo2WiFy9r5wUlmu9jKHYm4h8U8qZkR9DuWJFbTDuGHx4Z6y7ZMwJW%2Bx2vQrEquMmHwtG%2ForACRA4yx%2BSSouZqNJNP2D3Z8TvnJ8imQKkRPBRkVRWmKrzQFMdeqpT%2FegHdYJo5i5WRQdtpICIQzFGdhWQV0AejKNDDSNUnmoZpR51Uneo8mcTIsL8U66GgeRG2SJ9k%2FqhF8qD0KKmo7emQTGWCVWBSTnjOeldMDa3hR%2B63Q1D7bb5JQylSbDq46nIU3zFDCVoKQM94wl2%2BMiCOQzEWlGWcrQnJsFNIK2KlXsAPOGPlWNFPa%2Btv0VKJQMFG8NLb0NdeHbP0W3hXIQfPTzIUFbFLXuH1m6D2lFK80x%2FTPYy1QNOe3JxYULF2Ai0hT3d5FrrKYmsBNTiUH%2B%2FIH4S5aCMm1T5cDnkrqjLSoF2aIoxGLxuzyYy66I0ZYGhRxh8v6yslYW1511PMgWA2fmLUrWrdtPHz9pGqa96ByKDNFqOHanw%2FsYB8OzHsw6%2Fr0NtdQQ%2FSUT2D6OmAaTMCjpypOkZNLdRSgvs75C9MsWApsdnbJJ9TK53yZtsDxq2TFKh7XjfhKdkjZhh8xWAVJikuFKfOHSfMVWqIvUZ7OcazfjD9%2FKzBBjqkAYY59mLsAWhyHI5FJlXZtgFpEn9GySvfGz0srlRKz5HLmE81Fp%2B8WF2h4XVrsWd6w7m7XyTSpsIZjrtKw4Z3RZaX9%2FDxUTfJ4FR%2FsfxMRx%2Bq825ENaeDWEGOzNbYRoEZPbG2Te71t79kT41EmldpGx3O0R0IZRzDhpCNjYlsUd70aTzAA2EeUFCbeKGr1zZ4pFOx6Riu28Sm2m6wvf6APm0dmx%2F9&X-Amz-Signature=a6bf80a4ba49b3fe3c27a7090dab199391edf6423aacc366beac86bdce88cfa4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUUN3F3O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa7CU080vovWNRimLALL1y4Sq2%2B%2FjxWcz5n1Jsv7MkpAIhAJDOJ3XIxZak8j9p%2FP7XlFUP2hRWfSsTUHL4dpquE3E7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhozlYEr6Yea6woIUq3APJKfZPDjTO13UUo2WiFy9r5wUlmu9jKHYm4h8U8qZkR9DuWJFbTDuGHx4Z6y7ZMwJW%2Bx2vQrEquMmHwtG%2ForACRA4yx%2BSSouZqNJNP2D3Z8TvnJ8imQKkRPBRkVRWmKrzQFMdeqpT%2FegHdYJo5i5WRQdtpICIQzFGdhWQV0AejKNDDSNUnmoZpR51Uneo8mcTIsL8U66GgeRG2SJ9k%2FqhF8qD0KKmo7emQTGWCVWBSTnjOeldMDa3hR%2B63Q1D7bb5JQylSbDq46nIU3zFDCVoKQM94wl2%2BMiCOQzEWlGWcrQnJsFNIK2KlXsAPOGPlWNFPa%2Btv0VKJQMFG8NLb0NdeHbP0W3hXIQfPTzIUFbFLXuH1m6D2lFK80x%2FTPYy1QNOe3JxYULF2Ai0hT3d5FrrKYmsBNTiUH%2B%2FIH4S5aCMm1T5cDnkrqjLSoF2aIoxGLxuzyYy66I0ZYGhRxh8v6yslYW1511PMgWA2fmLUrWrdtPHz9pGqa96ByKDNFqOHanw%2FsYB8OzHsw6%2Fr0NtdQQ%2FSUT2D6OmAaTMCjpypOkZNLdRSgvs75C9MsWApsdnbJJ9TK53yZtsDxq2TFKh7XjfhKdkjZhh8xWAVJikuFKfOHSfMVWqIvUZ7OcazfjD9%2FKzBBjqkAYY59mLsAWhyHI5FJlXZtgFpEn9GySvfGz0srlRKz5HLmE81Fp%2B8WF2h4XVrsWd6w7m7XyTSpsIZjrtKw4Z3RZaX9%2FDxUTfJ4FR%2FsfxMRx%2Bq825ENaeDWEGOzNbYRoEZPbG2Te71t79kT41EmldpGx3O0R0IZRzDhpCNjYlsUd70aTzAA2EeUFCbeKGr1zZ4pFOx6Riu28Sm2m6wvf6APm0dmx%2F9&X-Amz-Signature=d04f75a86ec273010f4588bc6253d6d8e4bf10823a24964d26a906a16d2523c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUUN3F3O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa7CU080vovWNRimLALL1y4Sq2%2B%2FjxWcz5n1Jsv7MkpAIhAJDOJ3XIxZak8j9p%2FP7XlFUP2hRWfSsTUHL4dpquE3E7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhozlYEr6Yea6woIUq3APJKfZPDjTO13UUo2WiFy9r5wUlmu9jKHYm4h8U8qZkR9DuWJFbTDuGHx4Z6y7ZMwJW%2Bx2vQrEquMmHwtG%2ForACRA4yx%2BSSouZqNJNP2D3Z8TvnJ8imQKkRPBRkVRWmKrzQFMdeqpT%2FegHdYJo5i5WRQdtpICIQzFGdhWQV0AejKNDDSNUnmoZpR51Uneo8mcTIsL8U66GgeRG2SJ9k%2FqhF8qD0KKmo7emQTGWCVWBSTnjOeldMDa3hR%2B63Q1D7bb5JQylSbDq46nIU3zFDCVoKQM94wl2%2BMiCOQzEWlGWcrQnJsFNIK2KlXsAPOGPlWNFPa%2Btv0VKJQMFG8NLb0NdeHbP0W3hXIQfPTzIUFbFLXuH1m6D2lFK80x%2FTPYy1QNOe3JxYULF2Ai0hT3d5FrrKYmsBNTiUH%2B%2FIH4S5aCMm1T5cDnkrqjLSoF2aIoxGLxuzyYy66I0ZYGhRxh8v6yslYW1511PMgWA2fmLUrWrdtPHz9pGqa96ByKDNFqOHanw%2FsYB8OzHsw6%2Fr0NtdQQ%2FSUT2D6OmAaTMCjpypOkZNLdRSgvs75C9MsWApsdnbJJ9TK53yZtsDxq2TFKh7XjfhKdkjZhh8xWAVJikuFKfOHSfMVWqIvUZ7OcazfjD9%2FKzBBjqkAYY59mLsAWhyHI5FJlXZtgFpEn9GySvfGz0srlRKz5HLmE81Fp%2B8WF2h4XVrsWd6w7m7XyTSpsIZjrtKw4Z3RZaX9%2FDxUTfJ4FR%2FsfxMRx%2Bq825ENaeDWEGOzNbYRoEZPbG2Te71t79kT41EmldpGx3O0R0IZRzDhpCNjYlsUd70aTzAA2EeUFCbeKGr1zZ4pFOx6Riu28Sm2m6wvf6APm0dmx%2F9&X-Amz-Signature=c37b05c0748e3b83fad715e289c698edf930044a42a3cfec9b3cebc6be428c5a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUUN3F3O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa7CU080vovWNRimLALL1y4Sq2%2B%2FjxWcz5n1Jsv7MkpAIhAJDOJ3XIxZak8j9p%2FP7XlFUP2hRWfSsTUHL4dpquE3E7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhozlYEr6Yea6woIUq3APJKfZPDjTO13UUo2WiFy9r5wUlmu9jKHYm4h8U8qZkR9DuWJFbTDuGHx4Z6y7ZMwJW%2Bx2vQrEquMmHwtG%2ForACRA4yx%2BSSouZqNJNP2D3Z8TvnJ8imQKkRPBRkVRWmKrzQFMdeqpT%2FegHdYJo5i5WRQdtpICIQzFGdhWQV0AejKNDDSNUnmoZpR51Uneo8mcTIsL8U66GgeRG2SJ9k%2FqhF8qD0KKmo7emQTGWCVWBSTnjOeldMDa3hR%2B63Q1D7bb5JQylSbDq46nIU3zFDCVoKQM94wl2%2BMiCOQzEWlGWcrQnJsFNIK2KlXsAPOGPlWNFPa%2Btv0VKJQMFG8NLb0NdeHbP0W3hXIQfPTzIUFbFLXuH1m6D2lFK80x%2FTPYy1QNOe3JxYULF2Ai0hT3d5FrrKYmsBNTiUH%2B%2FIH4S5aCMm1T5cDnkrqjLSoF2aIoxGLxuzyYy66I0ZYGhRxh8v6yslYW1511PMgWA2fmLUrWrdtPHz9pGqa96ByKDNFqOHanw%2FsYB8OzHsw6%2Fr0NtdQQ%2FSUT2D6OmAaTMCjpypOkZNLdRSgvs75C9MsWApsdnbJJ9TK53yZtsDxq2TFKh7XjfhKdkjZhh8xWAVJikuFKfOHSfMVWqIvUZ7OcazfjD9%2FKzBBjqkAYY59mLsAWhyHI5FJlXZtgFpEn9GySvfGz0srlRKz5HLmE81Fp%2B8WF2h4XVrsWd6w7m7XyTSpsIZjrtKw4Z3RZaX9%2FDxUTfJ4FR%2FsfxMRx%2Bq825ENaeDWEGOzNbYRoEZPbG2Te71t79kT41EmldpGx3O0R0IZRzDhpCNjYlsUd70aTzAA2EeUFCbeKGr1zZ4pFOx6Riu28Sm2m6wvf6APm0dmx%2F9&X-Amz-Signature=e08ed6c74e4d26a99473dbef4f134babce28d41e64e27acbb561727d87b6ccf8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUUN3F3O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa7CU080vovWNRimLALL1y4Sq2%2B%2FjxWcz5n1Jsv7MkpAIhAJDOJ3XIxZak8j9p%2FP7XlFUP2hRWfSsTUHL4dpquE3E7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhozlYEr6Yea6woIUq3APJKfZPDjTO13UUo2WiFy9r5wUlmu9jKHYm4h8U8qZkR9DuWJFbTDuGHx4Z6y7ZMwJW%2Bx2vQrEquMmHwtG%2ForACRA4yx%2BSSouZqNJNP2D3Z8TvnJ8imQKkRPBRkVRWmKrzQFMdeqpT%2FegHdYJo5i5WRQdtpICIQzFGdhWQV0AejKNDDSNUnmoZpR51Uneo8mcTIsL8U66GgeRG2SJ9k%2FqhF8qD0KKmo7emQTGWCVWBSTnjOeldMDa3hR%2B63Q1D7bb5JQylSbDq46nIU3zFDCVoKQM94wl2%2BMiCOQzEWlGWcrQnJsFNIK2KlXsAPOGPlWNFPa%2Btv0VKJQMFG8NLb0NdeHbP0W3hXIQfPTzIUFbFLXuH1m6D2lFK80x%2FTPYy1QNOe3JxYULF2Ai0hT3d5FrrKYmsBNTiUH%2B%2FIH4S5aCMm1T5cDnkrqjLSoF2aIoxGLxuzyYy66I0ZYGhRxh8v6yslYW1511PMgWA2fmLUrWrdtPHz9pGqa96ByKDNFqOHanw%2FsYB8OzHsw6%2Fr0NtdQQ%2FSUT2D6OmAaTMCjpypOkZNLdRSgvs75C9MsWApsdnbJJ9TK53yZtsDxq2TFKh7XjfhKdkjZhh8xWAVJikuFKfOHSfMVWqIvUZ7OcazfjD9%2FKzBBjqkAYY59mLsAWhyHI5FJlXZtgFpEn9GySvfGz0srlRKz5HLmE81Fp%2B8WF2h4XVrsWd6w7m7XyTSpsIZjrtKw4Z3RZaX9%2FDxUTfJ4FR%2FsfxMRx%2Bq825ENaeDWEGOzNbYRoEZPbG2Te71t79kT41EmldpGx3O0R0IZRzDhpCNjYlsUd70aTzAA2EeUFCbeKGr1zZ4pFOx6Riu28Sm2m6wvf6APm0dmx%2F9&X-Amz-Signature=556037f23ca98e4b5d1bcdbc4b46cebfe3a8ee701e82a39425c418d2354d00dd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUUN3F3O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa7CU080vovWNRimLALL1y4Sq2%2B%2FjxWcz5n1Jsv7MkpAIhAJDOJ3XIxZak8j9p%2FP7XlFUP2hRWfSsTUHL4dpquE3E7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhozlYEr6Yea6woIUq3APJKfZPDjTO13UUo2WiFy9r5wUlmu9jKHYm4h8U8qZkR9DuWJFbTDuGHx4Z6y7ZMwJW%2Bx2vQrEquMmHwtG%2ForACRA4yx%2BSSouZqNJNP2D3Z8TvnJ8imQKkRPBRkVRWmKrzQFMdeqpT%2FegHdYJo5i5WRQdtpICIQzFGdhWQV0AejKNDDSNUnmoZpR51Uneo8mcTIsL8U66GgeRG2SJ9k%2FqhF8qD0KKmo7emQTGWCVWBSTnjOeldMDa3hR%2B63Q1D7bb5JQylSbDq46nIU3zFDCVoKQM94wl2%2BMiCOQzEWlGWcrQnJsFNIK2KlXsAPOGPlWNFPa%2Btv0VKJQMFG8NLb0NdeHbP0W3hXIQfPTzIUFbFLXuH1m6D2lFK80x%2FTPYy1QNOe3JxYULF2Ai0hT3d5FrrKYmsBNTiUH%2B%2FIH4S5aCMm1T5cDnkrqjLSoF2aIoxGLxuzyYy66I0ZYGhRxh8v6yslYW1511PMgWA2fmLUrWrdtPHz9pGqa96ByKDNFqOHanw%2FsYB8OzHsw6%2Fr0NtdQQ%2FSUT2D6OmAaTMCjpypOkZNLdRSgvs75C9MsWApsdnbJJ9TK53yZtsDxq2TFKh7XjfhKdkjZhh8xWAVJikuFKfOHSfMVWqIvUZ7OcazfjD9%2FKzBBjqkAYY59mLsAWhyHI5FJlXZtgFpEn9GySvfGz0srlRKz5HLmE81Fp%2B8WF2h4XVrsWd6w7m7XyTSpsIZjrtKw4Z3RZaX9%2FDxUTfJ4FR%2FsfxMRx%2Bq825ENaeDWEGOzNbYRoEZPbG2Te71t79kT41EmldpGx3O0R0IZRzDhpCNjYlsUd70aTzAA2EeUFCbeKGr1zZ4pFOx6Riu28Sm2m6wvf6APm0dmx%2F9&X-Amz-Signature=d60f328feaac40eced851db6857e2f0d630218c8e5a838e63a4bbe4542c4e0ff&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUUN3F3O%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa7CU080vovWNRimLALL1y4Sq2%2B%2FjxWcz5n1Jsv7MkpAIhAJDOJ3XIxZak8j9p%2FP7XlFUP2hRWfSsTUHL4dpquE3E7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhozlYEr6Yea6woIUq3APJKfZPDjTO13UUo2WiFy9r5wUlmu9jKHYm4h8U8qZkR9DuWJFbTDuGHx4Z6y7ZMwJW%2Bx2vQrEquMmHwtG%2ForACRA4yx%2BSSouZqNJNP2D3Z8TvnJ8imQKkRPBRkVRWmKrzQFMdeqpT%2FegHdYJo5i5WRQdtpICIQzFGdhWQV0AejKNDDSNUnmoZpR51Uneo8mcTIsL8U66GgeRG2SJ9k%2FqhF8qD0KKmo7emQTGWCVWBSTnjOeldMDa3hR%2B63Q1D7bb5JQylSbDq46nIU3zFDCVoKQM94wl2%2BMiCOQzEWlGWcrQnJsFNIK2KlXsAPOGPlWNFPa%2Btv0VKJQMFG8NLb0NdeHbP0W3hXIQfPTzIUFbFLXuH1m6D2lFK80x%2FTPYy1QNOe3JxYULF2Ai0hT3d5FrrKYmsBNTiUH%2B%2FIH4S5aCMm1T5cDnkrqjLSoF2aIoxGLxuzyYy66I0ZYGhRxh8v6yslYW1511PMgWA2fmLUrWrdtPHz9pGqa96ByKDNFqOHanw%2FsYB8OzHsw6%2Fr0NtdQQ%2FSUT2D6OmAaTMCjpypOkZNLdRSgvs75C9MsWApsdnbJJ9TK53yZtsDxq2TFKh7XjfhKdkjZhh8xWAVJikuFKfOHSfMVWqIvUZ7OcazfjD9%2FKzBBjqkAYY59mLsAWhyHI5FJlXZtgFpEn9GySvfGz0srlRKz5HLmE81Fp%2B8WF2h4XVrsWd6w7m7XyTSpsIZjrtKw4Z3RZaX9%2FDxUTfJ4FR%2FsfxMRx%2Bq825ENaeDWEGOzNbYRoEZPbG2Te71t79kT41EmldpGx3O0R0IZRzDhpCNjYlsUd70aTzAA2EeUFCbeKGr1zZ4pFOx6Riu28Sm2m6wvf6APm0dmx%2F9&X-Amz-Signature=f885ca57bb1e4696b0868eaa8cdb92853be3bd80336b4182378c4ddda7567cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
