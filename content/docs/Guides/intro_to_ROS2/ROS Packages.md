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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBHVFGL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH9oZEatH1uQcMayctOeSQPUTfGfU4JirnOvzU6QYqxtAiBjiPMu3egRsN3q2XIbifRG3qlOXQg4xjzK2o34q%2BDfhCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM7Q362czDQ5vNdP%2FaKtwD3ghnts%2Fprw4RErxKHw0WRW5zL29dgiOgojgy6qpmzsxFovUxVc2T6Imwt8SeLW43fZC%2FoRbXvWjdJBDRYrxFfTwytSfRsmdoGGtgYTKiXzz6QSDd27v5hQGMh88vcGaoHUIuDHinzT5JKR82dxgHxk%2Fvu4xY2IEJZT1%2BPTwdfy5eTvPY0wvMJLDWzfh1KK6B6MjOjD9QPiZQe2lIeaa86KdmXRd%2F9RkLE0NkOHGJSwnPuCp7kYh5YmyABKNUYE%2BojDD%2FCeep0sMPWyna%2B3%2BAjDqPhXBz3a21ua8FaIe1ZH6JDPnqaakFCxDjWYjSFMxp8RS2q%2FPaf7AEZwe8hQKL%2F1VlEpducQ2yBvHG7EtDHqqw1N1XbmFIIjfXC5FtgrCx4Xu99F1sGwn1uu8Ao2yC3RZWA2%2Bh0hU0lQCf35TpCHg3i4sGhhrVZIA7mKMtieRBOt1%2FsoO4LfebVtAaKj090b3FUISWK%2FhDIyCBv6g243LKuwiZOfBof%2FaSwbW%2FWH8FxX0wSC7JhtywFBI7At55iQr6lOHWgbI7%2F0xOGslE1DyTJGlOv%2F7xaPV1hp6KIYp7CFq2G%2Fku7BcJO%2FBzB2rcHmsdYlyh5%2F0t79SPJ2mrAKm8zezawq42lI5hGMgwu4S6wgY6pgHsqf8wF0zkQeM0HWRO1jn5juaCPDrNlYrxdzbAHiP8JiPdyGLhJSR9KzTsGrbuHJ9i%2BICuz1sPJPQOdeAfF36uRLAGai28E8Y59c8n1f3i51dD5sOj%2BOprknsc0fitjCrGZXRotdKqxO2BhBO6Egx9SdL7mLc5voIuvVJO6MHu4GmhPZ91EPpiyhC62PzVIbAKaiD%2BI7WzjUT7EofJ%2FNkivltxy1QM&X-Amz-Signature=d021c815cd47f1104eb70edb0bd4a14351090ad13ba0739304559c9c95bd3932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBHVFGL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH9oZEatH1uQcMayctOeSQPUTfGfU4JirnOvzU6QYqxtAiBjiPMu3egRsN3q2XIbifRG3qlOXQg4xjzK2o34q%2BDfhCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM7Q362czDQ5vNdP%2FaKtwD3ghnts%2Fprw4RErxKHw0WRW5zL29dgiOgojgy6qpmzsxFovUxVc2T6Imwt8SeLW43fZC%2FoRbXvWjdJBDRYrxFfTwytSfRsmdoGGtgYTKiXzz6QSDd27v5hQGMh88vcGaoHUIuDHinzT5JKR82dxgHxk%2Fvu4xY2IEJZT1%2BPTwdfy5eTvPY0wvMJLDWzfh1KK6B6MjOjD9QPiZQe2lIeaa86KdmXRd%2F9RkLE0NkOHGJSwnPuCp7kYh5YmyABKNUYE%2BojDD%2FCeep0sMPWyna%2B3%2BAjDqPhXBz3a21ua8FaIe1ZH6JDPnqaakFCxDjWYjSFMxp8RS2q%2FPaf7AEZwe8hQKL%2F1VlEpducQ2yBvHG7EtDHqqw1N1XbmFIIjfXC5FtgrCx4Xu99F1sGwn1uu8Ao2yC3RZWA2%2Bh0hU0lQCf35TpCHg3i4sGhhrVZIA7mKMtieRBOt1%2FsoO4LfebVtAaKj090b3FUISWK%2FhDIyCBv6g243LKuwiZOfBof%2FaSwbW%2FWH8FxX0wSC7JhtywFBI7At55iQr6lOHWgbI7%2F0xOGslE1DyTJGlOv%2F7xaPV1hp6KIYp7CFq2G%2Fku7BcJO%2FBzB2rcHmsdYlyh5%2F0t79SPJ2mrAKm8zezawq42lI5hGMgwu4S6wgY6pgHsqf8wF0zkQeM0HWRO1jn5juaCPDrNlYrxdzbAHiP8JiPdyGLhJSR9KzTsGrbuHJ9i%2BICuz1sPJPQOdeAfF36uRLAGai28E8Y59c8n1f3i51dD5sOj%2BOprknsc0fitjCrGZXRotdKqxO2BhBO6Egx9SdL7mLc5voIuvVJO6MHu4GmhPZ91EPpiyhC62PzVIbAKaiD%2BI7WzjUT7EofJ%2FNkivltxy1QM&X-Amz-Signature=7219006987afa970510709d9cfff6934f3645fd41fe9ed5041842e15cd383d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBHVFGL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH9oZEatH1uQcMayctOeSQPUTfGfU4JirnOvzU6QYqxtAiBjiPMu3egRsN3q2XIbifRG3qlOXQg4xjzK2o34q%2BDfhCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM7Q362czDQ5vNdP%2FaKtwD3ghnts%2Fprw4RErxKHw0WRW5zL29dgiOgojgy6qpmzsxFovUxVc2T6Imwt8SeLW43fZC%2FoRbXvWjdJBDRYrxFfTwytSfRsmdoGGtgYTKiXzz6QSDd27v5hQGMh88vcGaoHUIuDHinzT5JKR82dxgHxk%2Fvu4xY2IEJZT1%2BPTwdfy5eTvPY0wvMJLDWzfh1KK6B6MjOjD9QPiZQe2lIeaa86KdmXRd%2F9RkLE0NkOHGJSwnPuCp7kYh5YmyABKNUYE%2BojDD%2FCeep0sMPWyna%2B3%2BAjDqPhXBz3a21ua8FaIe1ZH6JDPnqaakFCxDjWYjSFMxp8RS2q%2FPaf7AEZwe8hQKL%2F1VlEpducQ2yBvHG7EtDHqqw1N1XbmFIIjfXC5FtgrCx4Xu99F1sGwn1uu8Ao2yC3RZWA2%2Bh0hU0lQCf35TpCHg3i4sGhhrVZIA7mKMtieRBOt1%2FsoO4LfebVtAaKj090b3FUISWK%2FhDIyCBv6g243LKuwiZOfBof%2FaSwbW%2FWH8FxX0wSC7JhtywFBI7At55iQr6lOHWgbI7%2F0xOGslE1DyTJGlOv%2F7xaPV1hp6KIYp7CFq2G%2Fku7BcJO%2FBzB2rcHmsdYlyh5%2F0t79SPJ2mrAKm8zezawq42lI5hGMgwu4S6wgY6pgHsqf8wF0zkQeM0HWRO1jn5juaCPDrNlYrxdzbAHiP8JiPdyGLhJSR9KzTsGrbuHJ9i%2BICuz1sPJPQOdeAfF36uRLAGai28E8Y59c8n1f3i51dD5sOj%2BOprknsc0fitjCrGZXRotdKqxO2BhBO6Egx9SdL7mLc5voIuvVJO6MHu4GmhPZ91EPpiyhC62PzVIbAKaiD%2BI7WzjUT7EofJ%2FNkivltxy1QM&X-Amz-Signature=e0efc6329233844812cb11cc74dec5ae199f93c7286f919433cde216c0d66a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBHVFGL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH9oZEatH1uQcMayctOeSQPUTfGfU4JirnOvzU6QYqxtAiBjiPMu3egRsN3q2XIbifRG3qlOXQg4xjzK2o34q%2BDfhCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM7Q362czDQ5vNdP%2FaKtwD3ghnts%2Fprw4RErxKHw0WRW5zL29dgiOgojgy6qpmzsxFovUxVc2T6Imwt8SeLW43fZC%2FoRbXvWjdJBDRYrxFfTwytSfRsmdoGGtgYTKiXzz6QSDd27v5hQGMh88vcGaoHUIuDHinzT5JKR82dxgHxk%2Fvu4xY2IEJZT1%2BPTwdfy5eTvPY0wvMJLDWzfh1KK6B6MjOjD9QPiZQe2lIeaa86KdmXRd%2F9RkLE0NkOHGJSwnPuCp7kYh5YmyABKNUYE%2BojDD%2FCeep0sMPWyna%2B3%2BAjDqPhXBz3a21ua8FaIe1ZH6JDPnqaakFCxDjWYjSFMxp8RS2q%2FPaf7AEZwe8hQKL%2F1VlEpducQ2yBvHG7EtDHqqw1N1XbmFIIjfXC5FtgrCx4Xu99F1sGwn1uu8Ao2yC3RZWA2%2Bh0hU0lQCf35TpCHg3i4sGhhrVZIA7mKMtieRBOt1%2FsoO4LfebVtAaKj090b3FUISWK%2FhDIyCBv6g243LKuwiZOfBof%2FaSwbW%2FWH8FxX0wSC7JhtywFBI7At55iQr6lOHWgbI7%2F0xOGslE1DyTJGlOv%2F7xaPV1hp6KIYp7CFq2G%2Fku7BcJO%2FBzB2rcHmsdYlyh5%2F0t79SPJ2mrAKm8zezawq42lI5hGMgwu4S6wgY6pgHsqf8wF0zkQeM0HWRO1jn5juaCPDrNlYrxdzbAHiP8JiPdyGLhJSR9KzTsGrbuHJ9i%2BICuz1sPJPQOdeAfF36uRLAGai28E8Y59c8n1f3i51dD5sOj%2BOprknsc0fitjCrGZXRotdKqxO2BhBO6Egx9SdL7mLc5voIuvVJO6MHu4GmhPZ91EPpiyhC62PzVIbAKaiD%2BI7WzjUT7EofJ%2FNkivltxy1QM&X-Amz-Signature=97f969f70fab7a40bf2fad57c1391690cb6daff384097079a61bdba1f8a6f15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBHVFGL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH9oZEatH1uQcMayctOeSQPUTfGfU4JirnOvzU6QYqxtAiBjiPMu3egRsN3q2XIbifRG3qlOXQg4xjzK2o34q%2BDfhCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM7Q362czDQ5vNdP%2FaKtwD3ghnts%2Fprw4RErxKHw0WRW5zL29dgiOgojgy6qpmzsxFovUxVc2T6Imwt8SeLW43fZC%2FoRbXvWjdJBDRYrxFfTwytSfRsmdoGGtgYTKiXzz6QSDd27v5hQGMh88vcGaoHUIuDHinzT5JKR82dxgHxk%2Fvu4xY2IEJZT1%2BPTwdfy5eTvPY0wvMJLDWzfh1KK6B6MjOjD9QPiZQe2lIeaa86KdmXRd%2F9RkLE0NkOHGJSwnPuCp7kYh5YmyABKNUYE%2BojDD%2FCeep0sMPWyna%2B3%2BAjDqPhXBz3a21ua8FaIe1ZH6JDPnqaakFCxDjWYjSFMxp8RS2q%2FPaf7AEZwe8hQKL%2F1VlEpducQ2yBvHG7EtDHqqw1N1XbmFIIjfXC5FtgrCx4Xu99F1sGwn1uu8Ao2yC3RZWA2%2Bh0hU0lQCf35TpCHg3i4sGhhrVZIA7mKMtieRBOt1%2FsoO4LfebVtAaKj090b3FUISWK%2FhDIyCBv6g243LKuwiZOfBof%2FaSwbW%2FWH8FxX0wSC7JhtywFBI7At55iQr6lOHWgbI7%2F0xOGslE1DyTJGlOv%2F7xaPV1hp6KIYp7CFq2G%2Fku7BcJO%2FBzB2rcHmsdYlyh5%2F0t79SPJ2mrAKm8zezawq42lI5hGMgwu4S6wgY6pgHsqf8wF0zkQeM0HWRO1jn5juaCPDrNlYrxdzbAHiP8JiPdyGLhJSR9KzTsGrbuHJ9i%2BICuz1sPJPQOdeAfF36uRLAGai28E8Y59c8n1f3i51dD5sOj%2BOprknsc0fitjCrGZXRotdKqxO2BhBO6Egx9SdL7mLc5voIuvVJO6MHu4GmhPZ91EPpiyhC62PzVIbAKaiD%2BI7WzjUT7EofJ%2FNkivltxy1QM&X-Amz-Signature=b7672a66e97c93521999b0ca9d97fc041b78bea65dc92e78956b543511d857d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBHVFGL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH9oZEatH1uQcMayctOeSQPUTfGfU4JirnOvzU6QYqxtAiBjiPMu3egRsN3q2XIbifRG3qlOXQg4xjzK2o34q%2BDfhCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM7Q362czDQ5vNdP%2FaKtwD3ghnts%2Fprw4RErxKHw0WRW5zL29dgiOgojgy6qpmzsxFovUxVc2T6Imwt8SeLW43fZC%2FoRbXvWjdJBDRYrxFfTwytSfRsmdoGGtgYTKiXzz6QSDd27v5hQGMh88vcGaoHUIuDHinzT5JKR82dxgHxk%2Fvu4xY2IEJZT1%2BPTwdfy5eTvPY0wvMJLDWzfh1KK6B6MjOjD9QPiZQe2lIeaa86KdmXRd%2F9RkLE0NkOHGJSwnPuCp7kYh5YmyABKNUYE%2BojDD%2FCeep0sMPWyna%2B3%2BAjDqPhXBz3a21ua8FaIe1ZH6JDPnqaakFCxDjWYjSFMxp8RS2q%2FPaf7AEZwe8hQKL%2F1VlEpducQ2yBvHG7EtDHqqw1N1XbmFIIjfXC5FtgrCx4Xu99F1sGwn1uu8Ao2yC3RZWA2%2Bh0hU0lQCf35TpCHg3i4sGhhrVZIA7mKMtieRBOt1%2FsoO4LfebVtAaKj090b3FUISWK%2FhDIyCBv6g243LKuwiZOfBof%2FaSwbW%2FWH8FxX0wSC7JhtywFBI7At55iQr6lOHWgbI7%2F0xOGslE1DyTJGlOv%2F7xaPV1hp6KIYp7CFq2G%2Fku7BcJO%2FBzB2rcHmsdYlyh5%2F0t79SPJ2mrAKm8zezawq42lI5hGMgwu4S6wgY6pgHsqf8wF0zkQeM0HWRO1jn5juaCPDrNlYrxdzbAHiP8JiPdyGLhJSR9KzTsGrbuHJ9i%2BICuz1sPJPQOdeAfF36uRLAGai28E8Y59c8n1f3i51dD5sOj%2BOprknsc0fitjCrGZXRotdKqxO2BhBO6Egx9SdL7mLc5voIuvVJO6MHu4GmhPZ91EPpiyhC62PzVIbAKaiD%2BI7WzjUT7EofJ%2FNkivltxy1QM&X-Amz-Signature=309fcfa60e8038652005760167ed98c93d44e334f2737b7fa69994d6cdec1373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBHVFGL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH9oZEatH1uQcMayctOeSQPUTfGfU4JirnOvzU6QYqxtAiBjiPMu3egRsN3q2XIbifRG3qlOXQg4xjzK2o34q%2BDfhCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM7Q362czDQ5vNdP%2FaKtwD3ghnts%2Fprw4RErxKHw0WRW5zL29dgiOgojgy6qpmzsxFovUxVc2T6Imwt8SeLW43fZC%2FoRbXvWjdJBDRYrxFfTwytSfRsmdoGGtgYTKiXzz6QSDd27v5hQGMh88vcGaoHUIuDHinzT5JKR82dxgHxk%2Fvu4xY2IEJZT1%2BPTwdfy5eTvPY0wvMJLDWzfh1KK6B6MjOjD9QPiZQe2lIeaa86KdmXRd%2F9RkLE0NkOHGJSwnPuCp7kYh5YmyABKNUYE%2BojDD%2FCeep0sMPWyna%2B3%2BAjDqPhXBz3a21ua8FaIe1ZH6JDPnqaakFCxDjWYjSFMxp8RS2q%2FPaf7AEZwe8hQKL%2F1VlEpducQ2yBvHG7EtDHqqw1N1XbmFIIjfXC5FtgrCx4Xu99F1sGwn1uu8Ao2yC3RZWA2%2Bh0hU0lQCf35TpCHg3i4sGhhrVZIA7mKMtieRBOt1%2FsoO4LfebVtAaKj090b3FUISWK%2FhDIyCBv6g243LKuwiZOfBof%2FaSwbW%2FWH8FxX0wSC7JhtywFBI7At55iQr6lOHWgbI7%2F0xOGslE1DyTJGlOv%2F7xaPV1hp6KIYp7CFq2G%2Fku7BcJO%2FBzB2rcHmsdYlyh5%2F0t79SPJ2mrAKm8zezawq42lI5hGMgwu4S6wgY6pgHsqf8wF0zkQeM0HWRO1jn5juaCPDrNlYrxdzbAHiP8JiPdyGLhJSR9KzTsGrbuHJ9i%2BICuz1sPJPQOdeAfF36uRLAGai28E8Y59c8n1f3i51dD5sOj%2BOprknsc0fitjCrGZXRotdKqxO2BhBO6Egx9SdL7mLc5voIuvVJO6MHu4GmhPZ91EPpiyhC62PzVIbAKaiD%2BI7WzjUT7EofJ%2FNkivltxy1QM&X-Amz-Signature=837c39f10c6b7f50eaa410797e52e6ed6ca92761f6d81e8ac7d3189df2a76443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
