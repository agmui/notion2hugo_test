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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KNTJAT4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC40rPCOC6dlZ%2FYT2i%2FNbpucp0G28QQIloR3ePv8gyhYgIgX18nOrkc6yA%2B%2FbQxUzLv1NsCZdF9yMBbOdNu4q6Fncwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIWkqaTj2viNFuOwyCrcA9ZEZ%2BcuI7Mky6pGBA1aqQ7wlsHckVRZOFrYtMm0QWbbAvFlxb0Lhbaf%2FLPGIkn9qitd32ZiBsr1i30OQqXURLCHTZVZx89m8S2TY%2FlKHom9tO84yPdTZnH9vH1ALXnBhP0vigMg08bLAViX9a2CaKGaSBdGnKkqDnbDTeYAPcEjV83kQFC0J3eKkG9F2FFWSKllIxQ4idb7gabJ%2B%2BP1laR7noHCmq54HVxEQljOwdu702up6Z%2FQy%2Fa1YLXkQS%2BtkC4HbEN6K2OiLGgRsb3twINsVrl2Fg7nmzzcjAYUpjiX5t2FGmc9TlkbiI51CcblKGgUutjZEGSP9Ggsx53pxYZAlNSzZqy%2B%2BFWYbJPf9bGWhuR3IJDXVCcXLXeZI8g%2BUPZ%2Ba0FF%2B9sxaF8iIsfwAvUChVuGU7fsYyplJFKI9J2JdQ%2B%2Fw5T8lN3E08YOyDOLjgU3%2BnTuXDUuQkoeMQys8pyZ6ci5Nx%2B2MxOHIuuVszO37opqneNclfpemteMZDhB1sNTRi8WVqJnv1lO8kPg%2BQkDzTcCmktb2CYuFkVGu2P5xv0ftyL5dsPQRboNSNiU421PdHKcaSVs0j5S%2BJMaayW2XPX17umVb3SW05kkm9aQE7INLSujpvlLwSsWMLOj4r4GOqUBLLVcmZNwBA1NtmQ0rc6EEjUY9iJ1VYYJ8goHncEfW8h3PHHnAwLdjkFzml6sMJUgO6G%2B23gQ2dNm%2FxrThMbsMC10ZgL%2FIEMN56BjBFSlHkeFILZnatw0gh14GTOO5adoHNXTAgTWPAnWEShtlY2IJyRZKaOf47wfooulqBPSzSjtZ3LPs8s1gQflFZtVjXNw9CSo7A90x8sK6LyGL8KkEHpzbqtX&X-Amz-Signature=01d09af9a7b3d74268e185c11b0fafec35963f2d587387dcaf2526228d9c0897&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KNTJAT4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC40rPCOC6dlZ%2FYT2i%2FNbpucp0G28QQIloR3ePv8gyhYgIgX18nOrkc6yA%2B%2FbQxUzLv1NsCZdF9yMBbOdNu4q6Fncwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIWkqaTj2viNFuOwyCrcA9ZEZ%2BcuI7Mky6pGBA1aqQ7wlsHckVRZOFrYtMm0QWbbAvFlxb0Lhbaf%2FLPGIkn9qitd32ZiBsr1i30OQqXURLCHTZVZx89m8S2TY%2FlKHom9tO84yPdTZnH9vH1ALXnBhP0vigMg08bLAViX9a2CaKGaSBdGnKkqDnbDTeYAPcEjV83kQFC0J3eKkG9F2FFWSKllIxQ4idb7gabJ%2B%2BP1laR7noHCmq54HVxEQljOwdu702up6Z%2FQy%2Fa1YLXkQS%2BtkC4HbEN6K2OiLGgRsb3twINsVrl2Fg7nmzzcjAYUpjiX5t2FGmc9TlkbiI51CcblKGgUutjZEGSP9Ggsx53pxYZAlNSzZqy%2B%2BFWYbJPf9bGWhuR3IJDXVCcXLXeZI8g%2BUPZ%2Ba0FF%2B9sxaF8iIsfwAvUChVuGU7fsYyplJFKI9J2JdQ%2B%2Fw5T8lN3E08YOyDOLjgU3%2BnTuXDUuQkoeMQys8pyZ6ci5Nx%2B2MxOHIuuVszO37opqneNclfpemteMZDhB1sNTRi8WVqJnv1lO8kPg%2BQkDzTcCmktb2CYuFkVGu2P5xv0ftyL5dsPQRboNSNiU421PdHKcaSVs0j5S%2BJMaayW2XPX17umVb3SW05kkm9aQE7INLSujpvlLwSsWMLOj4r4GOqUBLLVcmZNwBA1NtmQ0rc6EEjUY9iJ1VYYJ8goHncEfW8h3PHHnAwLdjkFzml6sMJUgO6G%2B23gQ2dNm%2FxrThMbsMC10ZgL%2FIEMN56BjBFSlHkeFILZnatw0gh14GTOO5adoHNXTAgTWPAnWEShtlY2IJyRZKaOf47wfooulqBPSzSjtZ3LPs8s1gQflFZtVjXNw9CSo7A90x8sK6LyGL8KkEHpzbqtX&X-Amz-Signature=9df448ab4699ce42630add5e4a4d77b3c77d62938cd106cf0c5abe17c37d926b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KNTJAT4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC40rPCOC6dlZ%2FYT2i%2FNbpucp0G28QQIloR3ePv8gyhYgIgX18nOrkc6yA%2B%2FbQxUzLv1NsCZdF9yMBbOdNu4q6Fncwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIWkqaTj2viNFuOwyCrcA9ZEZ%2BcuI7Mky6pGBA1aqQ7wlsHckVRZOFrYtMm0QWbbAvFlxb0Lhbaf%2FLPGIkn9qitd32ZiBsr1i30OQqXURLCHTZVZx89m8S2TY%2FlKHom9tO84yPdTZnH9vH1ALXnBhP0vigMg08bLAViX9a2CaKGaSBdGnKkqDnbDTeYAPcEjV83kQFC0J3eKkG9F2FFWSKllIxQ4idb7gabJ%2B%2BP1laR7noHCmq54HVxEQljOwdu702up6Z%2FQy%2Fa1YLXkQS%2BtkC4HbEN6K2OiLGgRsb3twINsVrl2Fg7nmzzcjAYUpjiX5t2FGmc9TlkbiI51CcblKGgUutjZEGSP9Ggsx53pxYZAlNSzZqy%2B%2BFWYbJPf9bGWhuR3IJDXVCcXLXeZI8g%2BUPZ%2Ba0FF%2B9sxaF8iIsfwAvUChVuGU7fsYyplJFKI9J2JdQ%2B%2Fw5T8lN3E08YOyDOLjgU3%2BnTuXDUuQkoeMQys8pyZ6ci5Nx%2B2MxOHIuuVszO37opqneNclfpemteMZDhB1sNTRi8WVqJnv1lO8kPg%2BQkDzTcCmktb2CYuFkVGu2P5xv0ftyL5dsPQRboNSNiU421PdHKcaSVs0j5S%2BJMaayW2XPX17umVb3SW05kkm9aQE7INLSujpvlLwSsWMLOj4r4GOqUBLLVcmZNwBA1NtmQ0rc6EEjUY9iJ1VYYJ8goHncEfW8h3PHHnAwLdjkFzml6sMJUgO6G%2B23gQ2dNm%2FxrThMbsMC10ZgL%2FIEMN56BjBFSlHkeFILZnatw0gh14GTOO5adoHNXTAgTWPAnWEShtlY2IJyRZKaOf47wfooulqBPSzSjtZ3LPs8s1gQflFZtVjXNw9CSo7A90x8sK6LyGL8KkEHpzbqtX&X-Amz-Signature=38ae948b5971069a39fad269afdb9a2da87485f1b829312400396ff358757579&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KNTJAT4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC40rPCOC6dlZ%2FYT2i%2FNbpucp0G28QQIloR3ePv8gyhYgIgX18nOrkc6yA%2B%2FbQxUzLv1NsCZdF9yMBbOdNu4q6Fncwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIWkqaTj2viNFuOwyCrcA9ZEZ%2BcuI7Mky6pGBA1aqQ7wlsHckVRZOFrYtMm0QWbbAvFlxb0Lhbaf%2FLPGIkn9qitd32ZiBsr1i30OQqXURLCHTZVZx89m8S2TY%2FlKHom9tO84yPdTZnH9vH1ALXnBhP0vigMg08bLAViX9a2CaKGaSBdGnKkqDnbDTeYAPcEjV83kQFC0J3eKkG9F2FFWSKllIxQ4idb7gabJ%2B%2BP1laR7noHCmq54HVxEQljOwdu702up6Z%2FQy%2Fa1YLXkQS%2BtkC4HbEN6K2OiLGgRsb3twINsVrl2Fg7nmzzcjAYUpjiX5t2FGmc9TlkbiI51CcblKGgUutjZEGSP9Ggsx53pxYZAlNSzZqy%2B%2BFWYbJPf9bGWhuR3IJDXVCcXLXeZI8g%2BUPZ%2Ba0FF%2B9sxaF8iIsfwAvUChVuGU7fsYyplJFKI9J2JdQ%2B%2Fw5T8lN3E08YOyDOLjgU3%2BnTuXDUuQkoeMQys8pyZ6ci5Nx%2B2MxOHIuuVszO37opqneNclfpemteMZDhB1sNTRi8WVqJnv1lO8kPg%2BQkDzTcCmktb2CYuFkVGu2P5xv0ftyL5dsPQRboNSNiU421PdHKcaSVs0j5S%2BJMaayW2XPX17umVb3SW05kkm9aQE7INLSujpvlLwSsWMLOj4r4GOqUBLLVcmZNwBA1NtmQ0rc6EEjUY9iJ1VYYJ8goHncEfW8h3PHHnAwLdjkFzml6sMJUgO6G%2B23gQ2dNm%2FxrThMbsMC10ZgL%2FIEMN56BjBFSlHkeFILZnatw0gh14GTOO5adoHNXTAgTWPAnWEShtlY2IJyRZKaOf47wfooulqBPSzSjtZ3LPs8s1gQflFZtVjXNw9CSo7A90x8sK6LyGL8KkEHpzbqtX&X-Amz-Signature=a33944e6bd4f9e85c19b0d95af80aaa8f6bbe52fc6e61a78c020526d518a83f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KNTJAT4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC40rPCOC6dlZ%2FYT2i%2FNbpucp0G28QQIloR3ePv8gyhYgIgX18nOrkc6yA%2B%2FbQxUzLv1NsCZdF9yMBbOdNu4q6Fncwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIWkqaTj2viNFuOwyCrcA9ZEZ%2BcuI7Mky6pGBA1aqQ7wlsHckVRZOFrYtMm0QWbbAvFlxb0Lhbaf%2FLPGIkn9qitd32ZiBsr1i30OQqXURLCHTZVZx89m8S2TY%2FlKHom9tO84yPdTZnH9vH1ALXnBhP0vigMg08bLAViX9a2CaKGaSBdGnKkqDnbDTeYAPcEjV83kQFC0J3eKkG9F2FFWSKllIxQ4idb7gabJ%2B%2BP1laR7noHCmq54HVxEQljOwdu702up6Z%2FQy%2Fa1YLXkQS%2BtkC4HbEN6K2OiLGgRsb3twINsVrl2Fg7nmzzcjAYUpjiX5t2FGmc9TlkbiI51CcblKGgUutjZEGSP9Ggsx53pxYZAlNSzZqy%2B%2BFWYbJPf9bGWhuR3IJDXVCcXLXeZI8g%2BUPZ%2Ba0FF%2B9sxaF8iIsfwAvUChVuGU7fsYyplJFKI9J2JdQ%2B%2Fw5T8lN3E08YOyDOLjgU3%2BnTuXDUuQkoeMQys8pyZ6ci5Nx%2B2MxOHIuuVszO37opqneNclfpemteMZDhB1sNTRi8WVqJnv1lO8kPg%2BQkDzTcCmktb2CYuFkVGu2P5xv0ftyL5dsPQRboNSNiU421PdHKcaSVs0j5S%2BJMaayW2XPX17umVb3SW05kkm9aQE7INLSujpvlLwSsWMLOj4r4GOqUBLLVcmZNwBA1NtmQ0rc6EEjUY9iJ1VYYJ8goHncEfW8h3PHHnAwLdjkFzml6sMJUgO6G%2B23gQ2dNm%2FxrThMbsMC10ZgL%2FIEMN56BjBFSlHkeFILZnatw0gh14GTOO5adoHNXTAgTWPAnWEShtlY2IJyRZKaOf47wfooulqBPSzSjtZ3LPs8s1gQflFZtVjXNw9CSo7A90x8sK6LyGL8KkEHpzbqtX&X-Amz-Signature=0d17a64fce5385b7decf26bbdf8bbb4ed7f150563e1829642c882e9f880f29f1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KNTJAT4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC40rPCOC6dlZ%2FYT2i%2FNbpucp0G28QQIloR3ePv8gyhYgIgX18nOrkc6yA%2B%2FbQxUzLv1NsCZdF9yMBbOdNu4q6Fncwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIWkqaTj2viNFuOwyCrcA9ZEZ%2BcuI7Mky6pGBA1aqQ7wlsHckVRZOFrYtMm0QWbbAvFlxb0Lhbaf%2FLPGIkn9qitd32ZiBsr1i30OQqXURLCHTZVZx89m8S2TY%2FlKHom9tO84yPdTZnH9vH1ALXnBhP0vigMg08bLAViX9a2CaKGaSBdGnKkqDnbDTeYAPcEjV83kQFC0J3eKkG9F2FFWSKllIxQ4idb7gabJ%2B%2BP1laR7noHCmq54HVxEQljOwdu702up6Z%2FQy%2Fa1YLXkQS%2BtkC4HbEN6K2OiLGgRsb3twINsVrl2Fg7nmzzcjAYUpjiX5t2FGmc9TlkbiI51CcblKGgUutjZEGSP9Ggsx53pxYZAlNSzZqy%2B%2BFWYbJPf9bGWhuR3IJDXVCcXLXeZI8g%2BUPZ%2Ba0FF%2B9sxaF8iIsfwAvUChVuGU7fsYyplJFKI9J2JdQ%2B%2Fw5T8lN3E08YOyDOLjgU3%2BnTuXDUuQkoeMQys8pyZ6ci5Nx%2B2MxOHIuuVszO37opqneNclfpemteMZDhB1sNTRi8WVqJnv1lO8kPg%2BQkDzTcCmktb2CYuFkVGu2P5xv0ftyL5dsPQRboNSNiU421PdHKcaSVs0j5S%2BJMaayW2XPX17umVb3SW05kkm9aQE7INLSujpvlLwSsWMLOj4r4GOqUBLLVcmZNwBA1NtmQ0rc6EEjUY9iJ1VYYJ8goHncEfW8h3PHHnAwLdjkFzml6sMJUgO6G%2B23gQ2dNm%2FxrThMbsMC10ZgL%2FIEMN56BjBFSlHkeFILZnatw0gh14GTOO5adoHNXTAgTWPAnWEShtlY2IJyRZKaOf47wfooulqBPSzSjtZ3LPs8s1gQflFZtVjXNw9CSo7A90x8sK6LyGL8KkEHpzbqtX&X-Amz-Signature=441ceabacff22050e2cebba253292c3188c3ac9fac20b1a0182d90f324b1a226&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KNTJAT4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC40rPCOC6dlZ%2FYT2i%2FNbpucp0G28QQIloR3ePv8gyhYgIgX18nOrkc6yA%2B%2FbQxUzLv1NsCZdF9yMBbOdNu4q6Fncwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIWkqaTj2viNFuOwyCrcA9ZEZ%2BcuI7Mky6pGBA1aqQ7wlsHckVRZOFrYtMm0QWbbAvFlxb0Lhbaf%2FLPGIkn9qitd32ZiBsr1i30OQqXURLCHTZVZx89m8S2TY%2FlKHom9tO84yPdTZnH9vH1ALXnBhP0vigMg08bLAViX9a2CaKGaSBdGnKkqDnbDTeYAPcEjV83kQFC0J3eKkG9F2FFWSKllIxQ4idb7gabJ%2B%2BP1laR7noHCmq54HVxEQljOwdu702up6Z%2FQy%2Fa1YLXkQS%2BtkC4HbEN6K2OiLGgRsb3twINsVrl2Fg7nmzzcjAYUpjiX5t2FGmc9TlkbiI51CcblKGgUutjZEGSP9Ggsx53pxYZAlNSzZqy%2B%2BFWYbJPf9bGWhuR3IJDXVCcXLXeZI8g%2BUPZ%2Ba0FF%2B9sxaF8iIsfwAvUChVuGU7fsYyplJFKI9J2JdQ%2B%2Fw5T8lN3E08YOyDOLjgU3%2BnTuXDUuQkoeMQys8pyZ6ci5Nx%2B2MxOHIuuVszO37opqneNclfpemteMZDhB1sNTRi8WVqJnv1lO8kPg%2BQkDzTcCmktb2CYuFkVGu2P5xv0ftyL5dsPQRboNSNiU421PdHKcaSVs0j5S%2BJMaayW2XPX17umVb3SW05kkm9aQE7INLSujpvlLwSsWMLOj4r4GOqUBLLVcmZNwBA1NtmQ0rc6EEjUY9iJ1VYYJ8goHncEfW8h3PHHnAwLdjkFzml6sMJUgO6G%2B23gQ2dNm%2FxrThMbsMC10ZgL%2FIEMN56BjBFSlHkeFILZnatw0gh14GTOO5adoHNXTAgTWPAnWEShtlY2IJyRZKaOf47wfooulqBPSzSjtZ3LPs8s1gQflFZtVjXNw9CSo7A90x8sK6LyGL8KkEHpzbqtX&X-Amz-Signature=719a2c0e0e2e3fbd3bae59fc2b8419c867579c129efbe959681d8ebffa31d183&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
