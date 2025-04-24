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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2XJE7C%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHrgcB1zQ3WS6PE24C1mLnI4fUo7SRFNxBQW%2FJBG3DtfAiEAy5bEsHQaM9C2Jk91vb2oZO46WHpieYoqGPn%2FeeACtp8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKQUZwdeFcjei6cZCrcA%2FuEWpBQyiSCFY2g3c0t%2FU6%2BvVcaCJqzzkPymF%2FA1y009%2BhkWKaZjJOP9uW7Qne%2ByT1Lt2q3zvsTN9BquMZTmb9Y6LTs4G74jVlYQsd8JNha0ZD%2FJtS6v8bAMFDaggqk9KzKcwn%2FPNuNXnh5%2B8wQ8dwqFgSxC11ceceXxudfwBbXQPPklbqb2nkCpEtA%2FdeSEgTtMathp58IQRpa%2FpuT4YnxpWjnDoXDYtAK0GDmFdsmt7v4l0uYerXe1ABn3tmx%2F8tczGQn0rqL4n54K0D9BJYe1OHvvoVJ5WyOostErzXHOwqFvmblmRcB%2FG9ogzdCNiD60ycLPAc0eAU0JwPsBR5t4d4bTU7tPmEcr664abeP7oL8mQfj5v%2B%2FAlFIkR4VkGT8E5%2BxN0uQHlLNv886WlPDTdammXjEFFl1GFRvi1nPyXD1xsiGWvgJZCaZ5uwT2oP6gt5niBwpOJUjU4Jvl5kYziTt2T2NZZdcgyE1AHg8AjEEPgA729KDcL0BDYmiQeRVBh8bSofo80A5FXIGUQYTrBvO%2BGMP9U6HrR3ucFJEJDuqSy1LJdvyddqVA7auZ77bMLsFG2V1GOAWFlV9vtKpTnhxLArrTwiOwt5y13UJxOAMZqpT%2BeRrnNJDMKyAp8AGOqUBAHWv0gnEzOVv4vuifWteka1pGFiST%2FLUn%2BYVJRspiqdkC%2FpSnmG6kpfwLOBo86Djj5DMBm8sKG3CYMNdRUdchlwk7cfmOV8z0uWJ5gRDh6yL52vrgAFXpk5NeDfXuTh3cqdqEXe7n1hCYChbibIec3ULGPUdFucHklmvdoCIWL3yxVCd4qbxRZvK%2BODhIKtdliSEeqysjB0gGAFrnKsyruJcQu5g&X-Amz-Signature=90733d562ac7c5eb2f54ce75abae96b7318b34d92bb3314f7d15d068dc29bb47&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2XJE7C%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHrgcB1zQ3WS6PE24C1mLnI4fUo7SRFNxBQW%2FJBG3DtfAiEAy5bEsHQaM9C2Jk91vb2oZO46WHpieYoqGPn%2FeeACtp8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKQUZwdeFcjei6cZCrcA%2FuEWpBQyiSCFY2g3c0t%2FU6%2BvVcaCJqzzkPymF%2FA1y009%2BhkWKaZjJOP9uW7Qne%2ByT1Lt2q3zvsTN9BquMZTmb9Y6LTs4G74jVlYQsd8JNha0ZD%2FJtS6v8bAMFDaggqk9KzKcwn%2FPNuNXnh5%2B8wQ8dwqFgSxC11ceceXxudfwBbXQPPklbqb2nkCpEtA%2FdeSEgTtMathp58IQRpa%2FpuT4YnxpWjnDoXDYtAK0GDmFdsmt7v4l0uYerXe1ABn3tmx%2F8tczGQn0rqL4n54K0D9BJYe1OHvvoVJ5WyOostErzXHOwqFvmblmRcB%2FG9ogzdCNiD60ycLPAc0eAU0JwPsBR5t4d4bTU7tPmEcr664abeP7oL8mQfj5v%2B%2FAlFIkR4VkGT8E5%2BxN0uQHlLNv886WlPDTdammXjEFFl1GFRvi1nPyXD1xsiGWvgJZCaZ5uwT2oP6gt5niBwpOJUjU4Jvl5kYziTt2T2NZZdcgyE1AHg8AjEEPgA729KDcL0BDYmiQeRVBh8bSofo80A5FXIGUQYTrBvO%2BGMP9U6HrR3ucFJEJDuqSy1LJdvyddqVA7auZ77bMLsFG2V1GOAWFlV9vtKpTnhxLArrTwiOwt5y13UJxOAMZqpT%2BeRrnNJDMKyAp8AGOqUBAHWv0gnEzOVv4vuifWteka1pGFiST%2FLUn%2BYVJRspiqdkC%2FpSnmG6kpfwLOBo86Djj5DMBm8sKG3CYMNdRUdchlwk7cfmOV8z0uWJ5gRDh6yL52vrgAFXpk5NeDfXuTh3cqdqEXe7n1hCYChbibIec3ULGPUdFucHklmvdoCIWL3yxVCd4qbxRZvK%2BODhIKtdliSEeqysjB0gGAFrnKsyruJcQu5g&X-Amz-Signature=597cb75d4282a2097a452219dcd1ff8be3f38a927cbc3e6280c258a94346db20&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2XJE7C%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHrgcB1zQ3WS6PE24C1mLnI4fUo7SRFNxBQW%2FJBG3DtfAiEAy5bEsHQaM9C2Jk91vb2oZO46WHpieYoqGPn%2FeeACtp8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKQUZwdeFcjei6cZCrcA%2FuEWpBQyiSCFY2g3c0t%2FU6%2BvVcaCJqzzkPymF%2FA1y009%2BhkWKaZjJOP9uW7Qne%2ByT1Lt2q3zvsTN9BquMZTmb9Y6LTs4G74jVlYQsd8JNha0ZD%2FJtS6v8bAMFDaggqk9KzKcwn%2FPNuNXnh5%2B8wQ8dwqFgSxC11ceceXxudfwBbXQPPklbqb2nkCpEtA%2FdeSEgTtMathp58IQRpa%2FpuT4YnxpWjnDoXDYtAK0GDmFdsmt7v4l0uYerXe1ABn3tmx%2F8tczGQn0rqL4n54K0D9BJYe1OHvvoVJ5WyOostErzXHOwqFvmblmRcB%2FG9ogzdCNiD60ycLPAc0eAU0JwPsBR5t4d4bTU7tPmEcr664abeP7oL8mQfj5v%2B%2FAlFIkR4VkGT8E5%2BxN0uQHlLNv886WlPDTdammXjEFFl1GFRvi1nPyXD1xsiGWvgJZCaZ5uwT2oP6gt5niBwpOJUjU4Jvl5kYziTt2T2NZZdcgyE1AHg8AjEEPgA729KDcL0BDYmiQeRVBh8bSofo80A5FXIGUQYTrBvO%2BGMP9U6HrR3ucFJEJDuqSy1LJdvyddqVA7auZ77bMLsFG2V1GOAWFlV9vtKpTnhxLArrTwiOwt5y13UJxOAMZqpT%2BeRrnNJDMKyAp8AGOqUBAHWv0gnEzOVv4vuifWteka1pGFiST%2FLUn%2BYVJRspiqdkC%2FpSnmG6kpfwLOBo86Djj5DMBm8sKG3CYMNdRUdchlwk7cfmOV8z0uWJ5gRDh6yL52vrgAFXpk5NeDfXuTh3cqdqEXe7n1hCYChbibIec3ULGPUdFucHklmvdoCIWL3yxVCd4qbxRZvK%2BODhIKtdliSEeqysjB0gGAFrnKsyruJcQu5g&X-Amz-Signature=11767b84f894bcffcb60db68ba7e5c61122449834e7460e4fe2d180fc326abd9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2XJE7C%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHrgcB1zQ3WS6PE24C1mLnI4fUo7SRFNxBQW%2FJBG3DtfAiEAy5bEsHQaM9C2Jk91vb2oZO46WHpieYoqGPn%2FeeACtp8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKQUZwdeFcjei6cZCrcA%2FuEWpBQyiSCFY2g3c0t%2FU6%2BvVcaCJqzzkPymF%2FA1y009%2BhkWKaZjJOP9uW7Qne%2ByT1Lt2q3zvsTN9BquMZTmb9Y6LTs4G74jVlYQsd8JNha0ZD%2FJtS6v8bAMFDaggqk9KzKcwn%2FPNuNXnh5%2B8wQ8dwqFgSxC11ceceXxudfwBbXQPPklbqb2nkCpEtA%2FdeSEgTtMathp58IQRpa%2FpuT4YnxpWjnDoXDYtAK0GDmFdsmt7v4l0uYerXe1ABn3tmx%2F8tczGQn0rqL4n54K0D9BJYe1OHvvoVJ5WyOostErzXHOwqFvmblmRcB%2FG9ogzdCNiD60ycLPAc0eAU0JwPsBR5t4d4bTU7tPmEcr664abeP7oL8mQfj5v%2B%2FAlFIkR4VkGT8E5%2BxN0uQHlLNv886WlPDTdammXjEFFl1GFRvi1nPyXD1xsiGWvgJZCaZ5uwT2oP6gt5niBwpOJUjU4Jvl5kYziTt2T2NZZdcgyE1AHg8AjEEPgA729KDcL0BDYmiQeRVBh8bSofo80A5FXIGUQYTrBvO%2BGMP9U6HrR3ucFJEJDuqSy1LJdvyddqVA7auZ77bMLsFG2V1GOAWFlV9vtKpTnhxLArrTwiOwt5y13UJxOAMZqpT%2BeRrnNJDMKyAp8AGOqUBAHWv0gnEzOVv4vuifWteka1pGFiST%2FLUn%2BYVJRspiqdkC%2FpSnmG6kpfwLOBo86Djj5DMBm8sKG3CYMNdRUdchlwk7cfmOV8z0uWJ5gRDh6yL52vrgAFXpk5NeDfXuTh3cqdqEXe7n1hCYChbibIec3ULGPUdFucHklmvdoCIWL3yxVCd4qbxRZvK%2BODhIKtdliSEeqysjB0gGAFrnKsyruJcQu5g&X-Amz-Signature=5ebf8b010ee1ca2dfc8aa51477f0376f163df9f9c239383d8c631dffaf89f728&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2XJE7C%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHrgcB1zQ3WS6PE24C1mLnI4fUo7SRFNxBQW%2FJBG3DtfAiEAy5bEsHQaM9C2Jk91vb2oZO46WHpieYoqGPn%2FeeACtp8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKQUZwdeFcjei6cZCrcA%2FuEWpBQyiSCFY2g3c0t%2FU6%2BvVcaCJqzzkPymF%2FA1y009%2BhkWKaZjJOP9uW7Qne%2ByT1Lt2q3zvsTN9BquMZTmb9Y6LTs4G74jVlYQsd8JNha0ZD%2FJtS6v8bAMFDaggqk9KzKcwn%2FPNuNXnh5%2B8wQ8dwqFgSxC11ceceXxudfwBbXQPPklbqb2nkCpEtA%2FdeSEgTtMathp58IQRpa%2FpuT4YnxpWjnDoXDYtAK0GDmFdsmt7v4l0uYerXe1ABn3tmx%2F8tczGQn0rqL4n54K0D9BJYe1OHvvoVJ5WyOostErzXHOwqFvmblmRcB%2FG9ogzdCNiD60ycLPAc0eAU0JwPsBR5t4d4bTU7tPmEcr664abeP7oL8mQfj5v%2B%2FAlFIkR4VkGT8E5%2BxN0uQHlLNv886WlPDTdammXjEFFl1GFRvi1nPyXD1xsiGWvgJZCaZ5uwT2oP6gt5niBwpOJUjU4Jvl5kYziTt2T2NZZdcgyE1AHg8AjEEPgA729KDcL0BDYmiQeRVBh8bSofo80A5FXIGUQYTrBvO%2BGMP9U6HrR3ucFJEJDuqSy1LJdvyddqVA7auZ77bMLsFG2V1GOAWFlV9vtKpTnhxLArrTwiOwt5y13UJxOAMZqpT%2BeRrnNJDMKyAp8AGOqUBAHWv0gnEzOVv4vuifWteka1pGFiST%2FLUn%2BYVJRspiqdkC%2FpSnmG6kpfwLOBo86Djj5DMBm8sKG3CYMNdRUdchlwk7cfmOV8z0uWJ5gRDh6yL52vrgAFXpk5NeDfXuTh3cqdqEXe7n1hCYChbibIec3ULGPUdFucHklmvdoCIWL3yxVCd4qbxRZvK%2BODhIKtdliSEeqysjB0gGAFrnKsyruJcQu5g&X-Amz-Signature=0f906e9c0c8471c7b85de71243f010214e43d6ab6e92a9cc634f68f752884ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2XJE7C%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHrgcB1zQ3WS6PE24C1mLnI4fUo7SRFNxBQW%2FJBG3DtfAiEAy5bEsHQaM9C2Jk91vb2oZO46WHpieYoqGPn%2FeeACtp8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKQUZwdeFcjei6cZCrcA%2FuEWpBQyiSCFY2g3c0t%2FU6%2BvVcaCJqzzkPymF%2FA1y009%2BhkWKaZjJOP9uW7Qne%2ByT1Lt2q3zvsTN9BquMZTmb9Y6LTs4G74jVlYQsd8JNha0ZD%2FJtS6v8bAMFDaggqk9KzKcwn%2FPNuNXnh5%2B8wQ8dwqFgSxC11ceceXxudfwBbXQPPklbqb2nkCpEtA%2FdeSEgTtMathp58IQRpa%2FpuT4YnxpWjnDoXDYtAK0GDmFdsmt7v4l0uYerXe1ABn3tmx%2F8tczGQn0rqL4n54K0D9BJYe1OHvvoVJ5WyOostErzXHOwqFvmblmRcB%2FG9ogzdCNiD60ycLPAc0eAU0JwPsBR5t4d4bTU7tPmEcr664abeP7oL8mQfj5v%2B%2FAlFIkR4VkGT8E5%2BxN0uQHlLNv886WlPDTdammXjEFFl1GFRvi1nPyXD1xsiGWvgJZCaZ5uwT2oP6gt5niBwpOJUjU4Jvl5kYziTt2T2NZZdcgyE1AHg8AjEEPgA729KDcL0BDYmiQeRVBh8bSofo80A5FXIGUQYTrBvO%2BGMP9U6HrR3ucFJEJDuqSy1LJdvyddqVA7auZ77bMLsFG2V1GOAWFlV9vtKpTnhxLArrTwiOwt5y13UJxOAMZqpT%2BeRrnNJDMKyAp8AGOqUBAHWv0gnEzOVv4vuifWteka1pGFiST%2FLUn%2BYVJRspiqdkC%2FpSnmG6kpfwLOBo86Djj5DMBm8sKG3CYMNdRUdchlwk7cfmOV8z0uWJ5gRDh6yL52vrgAFXpk5NeDfXuTh3cqdqEXe7n1hCYChbibIec3ULGPUdFucHklmvdoCIWL3yxVCd4qbxRZvK%2BODhIKtdliSEeqysjB0gGAFrnKsyruJcQu5g&X-Amz-Signature=80c0bcced938bdfafa21a2fd7bc14a81249c70d4f744adb5eaa26a87e839e3e4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2XJE7C%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHrgcB1zQ3WS6PE24C1mLnI4fUo7SRFNxBQW%2FJBG3DtfAiEAy5bEsHQaM9C2Jk91vb2oZO46WHpieYoqGPn%2FeeACtp8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKQUZwdeFcjei6cZCrcA%2FuEWpBQyiSCFY2g3c0t%2FU6%2BvVcaCJqzzkPymF%2FA1y009%2BhkWKaZjJOP9uW7Qne%2ByT1Lt2q3zvsTN9BquMZTmb9Y6LTs4G74jVlYQsd8JNha0ZD%2FJtS6v8bAMFDaggqk9KzKcwn%2FPNuNXnh5%2B8wQ8dwqFgSxC11ceceXxudfwBbXQPPklbqb2nkCpEtA%2FdeSEgTtMathp58IQRpa%2FpuT4YnxpWjnDoXDYtAK0GDmFdsmt7v4l0uYerXe1ABn3tmx%2F8tczGQn0rqL4n54K0D9BJYe1OHvvoVJ5WyOostErzXHOwqFvmblmRcB%2FG9ogzdCNiD60ycLPAc0eAU0JwPsBR5t4d4bTU7tPmEcr664abeP7oL8mQfj5v%2B%2FAlFIkR4VkGT8E5%2BxN0uQHlLNv886WlPDTdammXjEFFl1GFRvi1nPyXD1xsiGWvgJZCaZ5uwT2oP6gt5niBwpOJUjU4Jvl5kYziTt2T2NZZdcgyE1AHg8AjEEPgA729KDcL0BDYmiQeRVBh8bSofo80A5FXIGUQYTrBvO%2BGMP9U6HrR3ucFJEJDuqSy1LJdvyddqVA7auZ77bMLsFG2V1GOAWFlV9vtKpTnhxLArrTwiOwt5y13UJxOAMZqpT%2BeRrnNJDMKyAp8AGOqUBAHWv0gnEzOVv4vuifWteka1pGFiST%2FLUn%2BYVJRspiqdkC%2FpSnmG6kpfwLOBo86Djj5DMBm8sKG3CYMNdRUdchlwk7cfmOV8z0uWJ5gRDh6yL52vrgAFXpk5NeDfXuTh3cqdqEXe7n1hCYChbibIec3ULGPUdFucHklmvdoCIWL3yxVCd4qbxRZvK%2BODhIKtdliSEeqysjB0gGAFrnKsyruJcQu5g&X-Amz-Signature=fec7e0187032b9d58620ed259cb3fe2faec5d5f5611b12adc255537f5924c6e9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
