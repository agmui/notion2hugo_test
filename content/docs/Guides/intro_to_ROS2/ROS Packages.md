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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6BGMO4Q%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHieR3oz99NAO3nSRujpRV1yCYt3zbJUPDALGYxVi6wmAiEA1EuCby6rXu0NOuk%2Fxvroasi5g4JQ4KuDjn22Iv%2BxgRgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMrlRk0yDgbJhRDguSrcA8wSTIiP1riWfHFbCfBZqM%2FKrFqKaqv5RC5iMkEUo5q2IJXuknRjwgr0arHOfpVuuVionhzaexZvLW34DDsRKh8%2FymAE%2FPYmKntQdfzhvbxKk6UkDabpWHccoC58SPQZoEfmT2C3N%2BXFtPGwFrlfLC2Yv%2BgtCzJaqM4wiHJynIA2zT0VjfBCX3iy5i%2B3ydFQuFVvzgO2cZ4jg8vsdVvC3drU1Zqfsla%2FdYfRUbeJayDHX8MzUY9hVkk4B0yFF3Hse76f1HOUt%2BvbqnNImgxk2EESSDwE4%2F2pLG2y7BUTU9o80korjnv2ZOk9ELjZSwwY8IoYgLjM2pxbKE4KwB8YsL1q82pntRVTquDu56vdr%2B%2BWub8aJ3tg%2FpA317tmKEeArbhBhiUivJShr86HMfAELTxw28ZesXmJclmRbXHNpHlgm3d4bafgO4xFuDq5b%2FrsvF5EnLnStPb9jIWcVPYhXYRQIFpw74BUiwZLMpmqLrrclwLd%2BOoOwbSO7pVEHdh%2F1UWN5aqbrDsBMQA2Oj1N%2Bc%2FHiW0x4YElAww8wTUKmDsri0mZm25uYK%2FF8Z7K1oOOdWmB6Va6Xoc25sLK65mPdN6d%2FaUk7hIreCQKgPG4sVk9hRz2vgonjGfnrSjVMLSEssAGOqUBIe50CMMdDFLuX%2FfO%2FN4EM5vjHYZPc%2F69YLoFeRXC1qgHaJJwlcXtUj2ClAB7BbNs8UmkvazgY%2BZz7P4%2FAiEscxZAkLLR%2B8jg%2FneYg2tju2OhwlNhByV7j59Eh6Gps78Ial91IEQVAE38JwBtGiTHfHbvgHgDWFHZyKIzN0TsKp1IKwNaCvsDlTIdQW%2FEqMw0IThj8%2F0go6hIInx9TPm%2BNkJNtVAU&X-Amz-Signature=5a1429040b31105a6ff565db2e46a6c7a020332a67731c73b2d5cdc1d540a0b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6BGMO4Q%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHieR3oz99NAO3nSRujpRV1yCYt3zbJUPDALGYxVi6wmAiEA1EuCby6rXu0NOuk%2Fxvroasi5g4JQ4KuDjn22Iv%2BxgRgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMrlRk0yDgbJhRDguSrcA8wSTIiP1riWfHFbCfBZqM%2FKrFqKaqv5RC5iMkEUo5q2IJXuknRjwgr0arHOfpVuuVionhzaexZvLW34DDsRKh8%2FymAE%2FPYmKntQdfzhvbxKk6UkDabpWHccoC58SPQZoEfmT2C3N%2BXFtPGwFrlfLC2Yv%2BgtCzJaqM4wiHJynIA2zT0VjfBCX3iy5i%2B3ydFQuFVvzgO2cZ4jg8vsdVvC3drU1Zqfsla%2FdYfRUbeJayDHX8MzUY9hVkk4B0yFF3Hse76f1HOUt%2BvbqnNImgxk2EESSDwE4%2F2pLG2y7BUTU9o80korjnv2ZOk9ELjZSwwY8IoYgLjM2pxbKE4KwB8YsL1q82pntRVTquDu56vdr%2B%2BWub8aJ3tg%2FpA317tmKEeArbhBhiUivJShr86HMfAELTxw28ZesXmJclmRbXHNpHlgm3d4bafgO4xFuDq5b%2FrsvF5EnLnStPb9jIWcVPYhXYRQIFpw74BUiwZLMpmqLrrclwLd%2BOoOwbSO7pVEHdh%2F1UWN5aqbrDsBMQA2Oj1N%2Bc%2FHiW0x4YElAww8wTUKmDsri0mZm25uYK%2FF8Z7K1oOOdWmB6Va6Xoc25sLK65mPdN6d%2FaUk7hIreCQKgPG4sVk9hRz2vgonjGfnrSjVMLSEssAGOqUBIe50CMMdDFLuX%2FfO%2FN4EM5vjHYZPc%2F69YLoFeRXC1qgHaJJwlcXtUj2ClAB7BbNs8UmkvazgY%2BZz7P4%2FAiEscxZAkLLR%2B8jg%2FneYg2tju2OhwlNhByV7j59Eh6Gps78Ial91IEQVAE38JwBtGiTHfHbvgHgDWFHZyKIzN0TsKp1IKwNaCvsDlTIdQW%2FEqMw0IThj8%2F0go6hIInx9TPm%2BNkJNtVAU&X-Amz-Signature=eaab9e98ac19a0a911719d11ca506d722d1c9011133df65d2b3f94cc68699c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6BGMO4Q%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHieR3oz99NAO3nSRujpRV1yCYt3zbJUPDALGYxVi6wmAiEA1EuCby6rXu0NOuk%2Fxvroasi5g4JQ4KuDjn22Iv%2BxgRgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMrlRk0yDgbJhRDguSrcA8wSTIiP1riWfHFbCfBZqM%2FKrFqKaqv5RC5iMkEUo5q2IJXuknRjwgr0arHOfpVuuVionhzaexZvLW34DDsRKh8%2FymAE%2FPYmKntQdfzhvbxKk6UkDabpWHccoC58SPQZoEfmT2C3N%2BXFtPGwFrlfLC2Yv%2BgtCzJaqM4wiHJynIA2zT0VjfBCX3iy5i%2B3ydFQuFVvzgO2cZ4jg8vsdVvC3drU1Zqfsla%2FdYfRUbeJayDHX8MzUY9hVkk4B0yFF3Hse76f1HOUt%2BvbqnNImgxk2EESSDwE4%2F2pLG2y7BUTU9o80korjnv2ZOk9ELjZSwwY8IoYgLjM2pxbKE4KwB8YsL1q82pntRVTquDu56vdr%2B%2BWub8aJ3tg%2FpA317tmKEeArbhBhiUivJShr86HMfAELTxw28ZesXmJclmRbXHNpHlgm3d4bafgO4xFuDq5b%2FrsvF5EnLnStPb9jIWcVPYhXYRQIFpw74BUiwZLMpmqLrrclwLd%2BOoOwbSO7pVEHdh%2F1UWN5aqbrDsBMQA2Oj1N%2Bc%2FHiW0x4YElAww8wTUKmDsri0mZm25uYK%2FF8Z7K1oOOdWmB6Va6Xoc25sLK65mPdN6d%2FaUk7hIreCQKgPG4sVk9hRz2vgonjGfnrSjVMLSEssAGOqUBIe50CMMdDFLuX%2FfO%2FN4EM5vjHYZPc%2F69YLoFeRXC1qgHaJJwlcXtUj2ClAB7BbNs8UmkvazgY%2BZz7P4%2FAiEscxZAkLLR%2B8jg%2FneYg2tju2OhwlNhByV7j59Eh6Gps78Ial91IEQVAE38JwBtGiTHfHbvgHgDWFHZyKIzN0TsKp1IKwNaCvsDlTIdQW%2FEqMw0IThj8%2F0go6hIInx9TPm%2BNkJNtVAU&X-Amz-Signature=6f3ded3d707ccb3d92719a7d2aab517f8f7690d1335ff2944b87dde229517947&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6BGMO4Q%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHieR3oz99NAO3nSRujpRV1yCYt3zbJUPDALGYxVi6wmAiEA1EuCby6rXu0NOuk%2Fxvroasi5g4JQ4KuDjn22Iv%2BxgRgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMrlRk0yDgbJhRDguSrcA8wSTIiP1riWfHFbCfBZqM%2FKrFqKaqv5RC5iMkEUo5q2IJXuknRjwgr0arHOfpVuuVionhzaexZvLW34DDsRKh8%2FymAE%2FPYmKntQdfzhvbxKk6UkDabpWHccoC58SPQZoEfmT2C3N%2BXFtPGwFrlfLC2Yv%2BgtCzJaqM4wiHJynIA2zT0VjfBCX3iy5i%2B3ydFQuFVvzgO2cZ4jg8vsdVvC3drU1Zqfsla%2FdYfRUbeJayDHX8MzUY9hVkk4B0yFF3Hse76f1HOUt%2BvbqnNImgxk2EESSDwE4%2F2pLG2y7BUTU9o80korjnv2ZOk9ELjZSwwY8IoYgLjM2pxbKE4KwB8YsL1q82pntRVTquDu56vdr%2B%2BWub8aJ3tg%2FpA317tmKEeArbhBhiUivJShr86HMfAELTxw28ZesXmJclmRbXHNpHlgm3d4bafgO4xFuDq5b%2FrsvF5EnLnStPb9jIWcVPYhXYRQIFpw74BUiwZLMpmqLrrclwLd%2BOoOwbSO7pVEHdh%2F1UWN5aqbrDsBMQA2Oj1N%2Bc%2FHiW0x4YElAww8wTUKmDsri0mZm25uYK%2FF8Z7K1oOOdWmB6Va6Xoc25sLK65mPdN6d%2FaUk7hIreCQKgPG4sVk9hRz2vgonjGfnrSjVMLSEssAGOqUBIe50CMMdDFLuX%2FfO%2FN4EM5vjHYZPc%2F69YLoFeRXC1qgHaJJwlcXtUj2ClAB7BbNs8UmkvazgY%2BZz7P4%2FAiEscxZAkLLR%2B8jg%2FneYg2tju2OhwlNhByV7j59Eh6Gps78Ial91IEQVAE38JwBtGiTHfHbvgHgDWFHZyKIzN0TsKp1IKwNaCvsDlTIdQW%2FEqMw0IThj8%2F0go6hIInx9TPm%2BNkJNtVAU&X-Amz-Signature=f616f258b11dcd7b68251d2b3a5544a8347fc2df72bd041b332a23d1baa0990d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6BGMO4Q%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHieR3oz99NAO3nSRujpRV1yCYt3zbJUPDALGYxVi6wmAiEA1EuCby6rXu0NOuk%2Fxvroasi5g4JQ4KuDjn22Iv%2BxgRgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMrlRk0yDgbJhRDguSrcA8wSTIiP1riWfHFbCfBZqM%2FKrFqKaqv5RC5iMkEUo5q2IJXuknRjwgr0arHOfpVuuVionhzaexZvLW34DDsRKh8%2FymAE%2FPYmKntQdfzhvbxKk6UkDabpWHccoC58SPQZoEfmT2C3N%2BXFtPGwFrlfLC2Yv%2BgtCzJaqM4wiHJynIA2zT0VjfBCX3iy5i%2B3ydFQuFVvzgO2cZ4jg8vsdVvC3drU1Zqfsla%2FdYfRUbeJayDHX8MzUY9hVkk4B0yFF3Hse76f1HOUt%2BvbqnNImgxk2EESSDwE4%2F2pLG2y7BUTU9o80korjnv2ZOk9ELjZSwwY8IoYgLjM2pxbKE4KwB8YsL1q82pntRVTquDu56vdr%2B%2BWub8aJ3tg%2FpA317tmKEeArbhBhiUivJShr86HMfAELTxw28ZesXmJclmRbXHNpHlgm3d4bafgO4xFuDq5b%2FrsvF5EnLnStPb9jIWcVPYhXYRQIFpw74BUiwZLMpmqLrrclwLd%2BOoOwbSO7pVEHdh%2F1UWN5aqbrDsBMQA2Oj1N%2Bc%2FHiW0x4YElAww8wTUKmDsri0mZm25uYK%2FF8Z7K1oOOdWmB6Va6Xoc25sLK65mPdN6d%2FaUk7hIreCQKgPG4sVk9hRz2vgonjGfnrSjVMLSEssAGOqUBIe50CMMdDFLuX%2FfO%2FN4EM5vjHYZPc%2F69YLoFeRXC1qgHaJJwlcXtUj2ClAB7BbNs8UmkvazgY%2BZz7P4%2FAiEscxZAkLLR%2B8jg%2FneYg2tju2OhwlNhByV7j59Eh6Gps78Ial91IEQVAE38JwBtGiTHfHbvgHgDWFHZyKIzN0TsKp1IKwNaCvsDlTIdQW%2FEqMw0IThj8%2F0go6hIInx9TPm%2BNkJNtVAU&X-Amz-Signature=5c22451715c0ed49ce257331b0b81b98bb52c2946b7a090e6bd19f5380ba1db9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6BGMO4Q%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHieR3oz99NAO3nSRujpRV1yCYt3zbJUPDALGYxVi6wmAiEA1EuCby6rXu0NOuk%2Fxvroasi5g4JQ4KuDjn22Iv%2BxgRgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMrlRk0yDgbJhRDguSrcA8wSTIiP1riWfHFbCfBZqM%2FKrFqKaqv5RC5iMkEUo5q2IJXuknRjwgr0arHOfpVuuVionhzaexZvLW34DDsRKh8%2FymAE%2FPYmKntQdfzhvbxKk6UkDabpWHccoC58SPQZoEfmT2C3N%2BXFtPGwFrlfLC2Yv%2BgtCzJaqM4wiHJynIA2zT0VjfBCX3iy5i%2B3ydFQuFVvzgO2cZ4jg8vsdVvC3drU1Zqfsla%2FdYfRUbeJayDHX8MzUY9hVkk4B0yFF3Hse76f1HOUt%2BvbqnNImgxk2EESSDwE4%2F2pLG2y7BUTU9o80korjnv2ZOk9ELjZSwwY8IoYgLjM2pxbKE4KwB8YsL1q82pntRVTquDu56vdr%2B%2BWub8aJ3tg%2FpA317tmKEeArbhBhiUivJShr86HMfAELTxw28ZesXmJclmRbXHNpHlgm3d4bafgO4xFuDq5b%2FrsvF5EnLnStPb9jIWcVPYhXYRQIFpw74BUiwZLMpmqLrrclwLd%2BOoOwbSO7pVEHdh%2F1UWN5aqbrDsBMQA2Oj1N%2Bc%2FHiW0x4YElAww8wTUKmDsri0mZm25uYK%2FF8Z7K1oOOdWmB6Va6Xoc25sLK65mPdN6d%2FaUk7hIreCQKgPG4sVk9hRz2vgonjGfnrSjVMLSEssAGOqUBIe50CMMdDFLuX%2FfO%2FN4EM5vjHYZPc%2F69YLoFeRXC1qgHaJJwlcXtUj2ClAB7BbNs8UmkvazgY%2BZz7P4%2FAiEscxZAkLLR%2B8jg%2FneYg2tju2OhwlNhByV7j59Eh6Gps78Ial91IEQVAE38JwBtGiTHfHbvgHgDWFHZyKIzN0TsKp1IKwNaCvsDlTIdQW%2FEqMw0IThj8%2F0go6hIInx9TPm%2BNkJNtVAU&X-Amz-Signature=295f7ca97093bb57a56ec1b2e60ec21b615b69287105f307f32a027954e32c6d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6BGMO4Q%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHieR3oz99NAO3nSRujpRV1yCYt3zbJUPDALGYxVi6wmAiEA1EuCby6rXu0NOuk%2Fxvroasi5g4JQ4KuDjn22Iv%2BxgRgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMrlRk0yDgbJhRDguSrcA8wSTIiP1riWfHFbCfBZqM%2FKrFqKaqv5RC5iMkEUo5q2IJXuknRjwgr0arHOfpVuuVionhzaexZvLW34DDsRKh8%2FymAE%2FPYmKntQdfzhvbxKk6UkDabpWHccoC58SPQZoEfmT2C3N%2BXFtPGwFrlfLC2Yv%2BgtCzJaqM4wiHJynIA2zT0VjfBCX3iy5i%2B3ydFQuFVvzgO2cZ4jg8vsdVvC3drU1Zqfsla%2FdYfRUbeJayDHX8MzUY9hVkk4B0yFF3Hse76f1HOUt%2BvbqnNImgxk2EESSDwE4%2F2pLG2y7BUTU9o80korjnv2ZOk9ELjZSwwY8IoYgLjM2pxbKE4KwB8YsL1q82pntRVTquDu56vdr%2B%2BWub8aJ3tg%2FpA317tmKEeArbhBhiUivJShr86HMfAELTxw28ZesXmJclmRbXHNpHlgm3d4bafgO4xFuDq5b%2FrsvF5EnLnStPb9jIWcVPYhXYRQIFpw74BUiwZLMpmqLrrclwLd%2BOoOwbSO7pVEHdh%2F1UWN5aqbrDsBMQA2Oj1N%2Bc%2FHiW0x4YElAww8wTUKmDsri0mZm25uYK%2FF8Z7K1oOOdWmB6Va6Xoc25sLK65mPdN6d%2FaUk7hIreCQKgPG4sVk9hRz2vgonjGfnrSjVMLSEssAGOqUBIe50CMMdDFLuX%2FfO%2FN4EM5vjHYZPc%2F69YLoFeRXC1qgHaJJwlcXtUj2ClAB7BbNs8UmkvazgY%2BZz7P4%2FAiEscxZAkLLR%2B8jg%2FneYg2tju2OhwlNhByV7j59Eh6Gps78Ial91IEQVAE38JwBtGiTHfHbvgHgDWFHZyKIzN0TsKp1IKwNaCvsDlTIdQW%2FEqMw0IThj8%2F0go6hIInx9TPm%2BNkJNtVAU&X-Amz-Signature=0f71e5d36971d485014e69a6315c45e088eb4f7f84d7703f764c7aed2e4a9e68&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
