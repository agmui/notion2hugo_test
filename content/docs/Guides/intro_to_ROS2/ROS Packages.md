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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLG6MZV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioXY7uNTaTf8l67XercAkWMgaIAM1CFummQttxikjAIhANAoF1qTWMBCZJW6tNpY0sKPW6Ky6QCzRcHTafOP4cykKv8DCDQQABoMNjM3NDIzMTgzODA1Igxl22GiiykUiRMtoIoq3AONgv0LZRCvLOcQmCPVuiYcf9fDrnr%2F4etAO7bJskcKxfNicHhF%2Bxh9GT7hJ05IW9bx41NQQWRV6STveSn7fG9%2FzvlEeOq3S9nVwREg8IHCLT5X6WGKHmW9TJ2pvdLNKffV6CJmlnmH3ypgFaGu1exSBfhFBDfU1znvhM%2FWFNOhN%2FRLM%2F8F2cQ2P8Jp2UgnG8gUVt6fURbbLColbd8rBBgX8GHesl4ka6%2BKxMc1%2FqaXkt3RQSQXPp7SaAbBF%2BuxBD7EHzukqBo8bOaeQHfZgoJAN7Cl137QsGidLviSY4%2Fm76Go2N7nRQajKkEapay3li2ig81Bo%2BUhuk2SmydT0ddZE5aglYokjcdS%2BoCl7l01I99ikxovQi22p3rWtAVKdLLrPWwizQwqtyKAyESRE8J1EBjoaShdYma3eG6zZKCE9JePQuyZSBVsqw4%2FT6GJECfyC1dvDhn%2F2gz90VQu9ElE%2BCE1GvhfVv%2B5nPq0NzgY5MRBLcXRSdsfyG3Vt1kQw82u2Fit43m%2F%2BVYmcoCMtrEQHmdUVyoVcCU%2FVCVzYSPJ1ESGOH5HVu49VNFc4ZLbAPwfWBSpbGwaWK1gU3Kh89d%2FL1N25gBJM39omKWRin7SGfdq%2Bp0jJPPqegVApDDy1vq%2FBjqkAdbglS4vJPP1GCbcf18cnf5wdVSgxSYnNtshvMjlldPgfUBkMi9h4ka8L8ZYUPvQ6lFmVDWeJkYeY6gyqYclVyPoYm4pohqBi9OTqTfRIU8eks0Iq67bkKeWpik3fohq8eplyJkXTuur%2FcnkLAH5iZd%2BguuGFun6FC%2FivS6mlJ5k%2BiPYwxTk5Aki9Sqg8DnHH8DA8x0yuGj5Y7kO5G0tCC0%2F6o%2FV&X-Amz-Signature=36dc028b9583df66dc0428d8697e1fbac84777723e0f80a065f0350ca6e87946&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLG6MZV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioXY7uNTaTf8l67XercAkWMgaIAM1CFummQttxikjAIhANAoF1qTWMBCZJW6tNpY0sKPW6Ky6QCzRcHTafOP4cykKv8DCDQQABoMNjM3NDIzMTgzODA1Igxl22GiiykUiRMtoIoq3AONgv0LZRCvLOcQmCPVuiYcf9fDrnr%2F4etAO7bJskcKxfNicHhF%2Bxh9GT7hJ05IW9bx41NQQWRV6STveSn7fG9%2FzvlEeOq3S9nVwREg8IHCLT5X6WGKHmW9TJ2pvdLNKffV6CJmlnmH3ypgFaGu1exSBfhFBDfU1znvhM%2FWFNOhN%2FRLM%2F8F2cQ2P8Jp2UgnG8gUVt6fURbbLColbd8rBBgX8GHesl4ka6%2BKxMc1%2FqaXkt3RQSQXPp7SaAbBF%2BuxBD7EHzukqBo8bOaeQHfZgoJAN7Cl137QsGidLviSY4%2Fm76Go2N7nRQajKkEapay3li2ig81Bo%2BUhuk2SmydT0ddZE5aglYokjcdS%2BoCl7l01I99ikxovQi22p3rWtAVKdLLrPWwizQwqtyKAyESRE8J1EBjoaShdYma3eG6zZKCE9JePQuyZSBVsqw4%2FT6GJECfyC1dvDhn%2F2gz90VQu9ElE%2BCE1GvhfVv%2B5nPq0NzgY5MRBLcXRSdsfyG3Vt1kQw82u2Fit43m%2F%2BVYmcoCMtrEQHmdUVyoVcCU%2FVCVzYSPJ1ESGOH5HVu49VNFc4ZLbAPwfWBSpbGwaWK1gU3Kh89d%2FL1N25gBJM39omKWRin7SGfdq%2Bp0jJPPqegVApDDy1vq%2FBjqkAdbglS4vJPP1GCbcf18cnf5wdVSgxSYnNtshvMjlldPgfUBkMi9h4ka8L8ZYUPvQ6lFmVDWeJkYeY6gyqYclVyPoYm4pohqBi9OTqTfRIU8eks0Iq67bkKeWpik3fohq8eplyJkXTuur%2FcnkLAH5iZd%2BguuGFun6FC%2FivS6mlJ5k%2BiPYwxTk5Aki9Sqg8DnHH8DA8x0yuGj5Y7kO5G0tCC0%2F6o%2FV&X-Amz-Signature=05081f413211bd2c717662acb4104c2815e2152e94a5d0e85b6661b48610e0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLG6MZV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioXY7uNTaTf8l67XercAkWMgaIAM1CFummQttxikjAIhANAoF1qTWMBCZJW6tNpY0sKPW6Ky6QCzRcHTafOP4cykKv8DCDQQABoMNjM3NDIzMTgzODA1Igxl22GiiykUiRMtoIoq3AONgv0LZRCvLOcQmCPVuiYcf9fDrnr%2F4etAO7bJskcKxfNicHhF%2Bxh9GT7hJ05IW9bx41NQQWRV6STveSn7fG9%2FzvlEeOq3S9nVwREg8IHCLT5X6WGKHmW9TJ2pvdLNKffV6CJmlnmH3ypgFaGu1exSBfhFBDfU1znvhM%2FWFNOhN%2FRLM%2F8F2cQ2P8Jp2UgnG8gUVt6fURbbLColbd8rBBgX8GHesl4ka6%2BKxMc1%2FqaXkt3RQSQXPp7SaAbBF%2BuxBD7EHzukqBo8bOaeQHfZgoJAN7Cl137QsGidLviSY4%2Fm76Go2N7nRQajKkEapay3li2ig81Bo%2BUhuk2SmydT0ddZE5aglYokjcdS%2BoCl7l01I99ikxovQi22p3rWtAVKdLLrPWwizQwqtyKAyESRE8J1EBjoaShdYma3eG6zZKCE9JePQuyZSBVsqw4%2FT6GJECfyC1dvDhn%2F2gz90VQu9ElE%2BCE1GvhfVv%2B5nPq0NzgY5MRBLcXRSdsfyG3Vt1kQw82u2Fit43m%2F%2BVYmcoCMtrEQHmdUVyoVcCU%2FVCVzYSPJ1ESGOH5HVu49VNFc4ZLbAPwfWBSpbGwaWK1gU3Kh89d%2FL1N25gBJM39omKWRin7SGfdq%2Bp0jJPPqegVApDDy1vq%2FBjqkAdbglS4vJPP1GCbcf18cnf5wdVSgxSYnNtshvMjlldPgfUBkMi9h4ka8L8ZYUPvQ6lFmVDWeJkYeY6gyqYclVyPoYm4pohqBi9OTqTfRIU8eks0Iq67bkKeWpik3fohq8eplyJkXTuur%2FcnkLAH5iZd%2BguuGFun6FC%2FivS6mlJ5k%2BiPYwxTk5Aki9Sqg8DnHH8DA8x0yuGj5Y7kO5G0tCC0%2F6o%2FV&X-Amz-Signature=ed2ed3c6a8f0d648e0a38258b36b1a98c6c01f9cb47f75847155688993626a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLG6MZV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioXY7uNTaTf8l67XercAkWMgaIAM1CFummQttxikjAIhANAoF1qTWMBCZJW6tNpY0sKPW6Ky6QCzRcHTafOP4cykKv8DCDQQABoMNjM3NDIzMTgzODA1Igxl22GiiykUiRMtoIoq3AONgv0LZRCvLOcQmCPVuiYcf9fDrnr%2F4etAO7bJskcKxfNicHhF%2Bxh9GT7hJ05IW9bx41NQQWRV6STveSn7fG9%2FzvlEeOq3S9nVwREg8IHCLT5X6WGKHmW9TJ2pvdLNKffV6CJmlnmH3ypgFaGu1exSBfhFBDfU1znvhM%2FWFNOhN%2FRLM%2F8F2cQ2P8Jp2UgnG8gUVt6fURbbLColbd8rBBgX8GHesl4ka6%2BKxMc1%2FqaXkt3RQSQXPp7SaAbBF%2BuxBD7EHzukqBo8bOaeQHfZgoJAN7Cl137QsGidLviSY4%2Fm76Go2N7nRQajKkEapay3li2ig81Bo%2BUhuk2SmydT0ddZE5aglYokjcdS%2BoCl7l01I99ikxovQi22p3rWtAVKdLLrPWwizQwqtyKAyESRE8J1EBjoaShdYma3eG6zZKCE9JePQuyZSBVsqw4%2FT6GJECfyC1dvDhn%2F2gz90VQu9ElE%2BCE1GvhfVv%2B5nPq0NzgY5MRBLcXRSdsfyG3Vt1kQw82u2Fit43m%2F%2BVYmcoCMtrEQHmdUVyoVcCU%2FVCVzYSPJ1ESGOH5HVu49VNFc4ZLbAPwfWBSpbGwaWK1gU3Kh89d%2FL1N25gBJM39omKWRin7SGfdq%2Bp0jJPPqegVApDDy1vq%2FBjqkAdbglS4vJPP1GCbcf18cnf5wdVSgxSYnNtshvMjlldPgfUBkMi9h4ka8L8ZYUPvQ6lFmVDWeJkYeY6gyqYclVyPoYm4pohqBi9OTqTfRIU8eks0Iq67bkKeWpik3fohq8eplyJkXTuur%2FcnkLAH5iZd%2BguuGFun6FC%2FivS6mlJ5k%2BiPYwxTk5Aki9Sqg8DnHH8DA8x0yuGj5Y7kO5G0tCC0%2F6o%2FV&X-Amz-Signature=c1671454d5d47c88e46e1c72f6cef3de47274ccdd829e5ecc8ba0a51295d826c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLG6MZV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioXY7uNTaTf8l67XercAkWMgaIAM1CFummQttxikjAIhANAoF1qTWMBCZJW6tNpY0sKPW6Ky6QCzRcHTafOP4cykKv8DCDQQABoMNjM3NDIzMTgzODA1Igxl22GiiykUiRMtoIoq3AONgv0LZRCvLOcQmCPVuiYcf9fDrnr%2F4etAO7bJskcKxfNicHhF%2Bxh9GT7hJ05IW9bx41NQQWRV6STveSn7fG9%2FzvlEeOq3S9nVwREg8IHCLT5X6WGKHmW9TJ2pvdLNKffV6CJmlnmH3ypgFaGu1exSBfhFBDfU1znvhM%2FWFNOhN%2FRLM%2F8F2cQ2P8Jp2UgnG8gUVt6fURbbLColbd8rBBgX8GHesl4ka6%2BKxMc1%2FqaXkt3RQSQXPp7SaAbBF%2BuxBD7EHzukqBo8bOaeQHfZgoJAN7Cl137QsGidLviSY4%2Fm76Go2N7nRQajKkEapay3li2ig81Bo%2BUhuk2SmydT0ddZE5aglYokjcdS%2BoCl7l01I99ikxovQi22p3rWtAVKdLLrPWwizQwqtyKAyESRE8J1EBjoaShdYma3eG6zZKCE9JePQuyZSBVsqw4%2FT6GJECfyC1dvDhn%2F2gz90VQu9ElE%2BCE1GvhfVv%2B5nPq0NzgY5MRBLcXRSdsfyG3Vt1kQw82u2Fit43m%2F%2BVYmcoCMtrEQHmdUVyoVcCU%2FVCVzYSPJ1ESGOH5HVu49VNFc4ZLbAPwfWBSpbGwaWK1gU3Kh89d%2FL1N25gBJM39omKWRin7SGfdq%2Bp0jJPPqegVApDDy1vq%2FBjqkAdbglS4vJPP1GCbcf18cnf5wdVSgxSYnNtshvMjlldPgfUBkMi9h4ka8L8ZYUPvQ6lFmVDWeJkYeY6gyqYclVyPoYm4pohqBi9OTqTfRIU8eks0Iq67bkKeWpik3fohq8eplyJkXTuur%2FcnkLAH5iZd%2BguuGFun6FC%2FivS6mlJ5k%2BiPYwxTk5Aki9Sqg8DnHH8DA8x0yuGj5Y7kO5G0tCC0%2F6o%2FV&X-Amz-Signature=8aa296b37d3715e7bc21d0dfb635805d744d69a1110fbce19b07b6e8c544581e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLG6MZV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioXY7uNTaTf8l67XercAkWMgaIAM1CFummQttxikjAIhANAoF1qTWMBCZJW6tNpY0sKPW6Ky6QCzRcHTafOP4cykKv8DCDQQABoMNjM3NDIzMTgzODA1Igxl22GiiykUiRMtoIoq3AONgv0LZRCvLOcQmCPVuiYcf9fDrnr%2F4etAO7bJskcKxfNicHhF%2Bxh9GT7hJ05IW9bx41NQQWRV6STveSn7fG9%2FzvlEeOq3S9nVwREg8IHCLT5X6WGKHmW9TJ2pvdLNKffV6CJmlnmH3ypgFaGu1exSBfhFBDfU1znvhM%2FWFNOhN%2FRLM%2F8F2cQ2P8Jp2UgnG8gUVt6fURbbLColbd8rBBgX8GHesl4ka6%2BKxMc1%2FqaXkt3RQSQXPp7SaAbBF%2BuxBD7EHzukqBo8bOaeQHfZgoJAN7Cl137QsGidLviSY4%2Fm76Go2N7nRQajKkEapay3li2ig81Bo%2BUhuk2SmydT0ddZE5aglYokjcdS%2BoCl7l01I99ikxovQi22p3rWtAVKdLLrPWwizQwqtyKAyESRE8J1EBjoaShdYma3eG6zZKCE9JePQuyZSBVsqw4%2FT6GJECfyC1dvDhn%2F2gz90VQu9ElE%2BCE1GvhfVv%2B5nPq0NzgY5MRBLcXRSdsfyG3Vt1kQw82u2Fit43m%2F%2BVYmcoCMtrEQHmdUVyoVcCU%2FVCVzYSPJ1ESGOH5HVu49VNFc4ZLbAPwfWBSpbGwaWK1gU3Kh89d%2FL1N25gBJM39omKWRin7SGfdq%2Bp0jJPPqegVApDDy1vq%2FBjqkAdbglS4vJPP1GCbcf18cnf5wdVSgxSYnNtshvMjlldPgfUBkMi9h4ka8L8ZYUPvQ6lFmVDWeJkYeY6gyqYclVyPoYm4pohqBi9OTqTfRIU8eks0Iq67bkKeWpik3fohq8eplyJkXTuur%2FcnkLAH5iZd%2BguuGFun6FC%2FivS6mlJ5k%2BiPYwxTk5Aki9Sqg8DnHH8DA8x0yuGj5Y7kO5G0tCC0%2F6o%2FV&X-Amz-Signature=d68080e28ecb560c37a02866e47780fdea459f6dce646eefa7c90c0a58913e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLG6MZV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioXY7uNTaTf8l67XercAkWMgaIAM1CFummQttxikjAIhANAoF1qTWMBCZJW6tNpY0sKPW6Ky6QCzRcHTafOP4cykKv8DCDQQABoMNjM3NDIzMTgzODA1Igxl22GiiykUiRMtoIoq3AONgv0LZRCvLOcQmCPVuiYcf9fDrnr%2F4etAO7bJskcKxfNicHhF%2Bxh9GT7hJ05IW9bx41NQQWRV6STveSn7fG9%2FzvlEeOq3S9nVwREg8IHCLT5X6WGKHmW9TJ2pvdLNKffV6CJmlnmH3ypgFaGu1exSBfhFBDfU1znvhM%2FWFNOhN%2FRLM%2F8F2cQ2P8Jp2UgnG8gUVt6fURbbLColbd8rBBgX8GHesl4ka6%2BKxMc1%2FqaXkt3RQSQXPp7SaAbBF%2BuxBD7EHzukqBo8bOaeQHfZgoJAN7Cl137QsGidLviSY4%2Fm76Go2N7nRQajKkEapay3li2ig81Bo%2BUhuk2SmydT0ddZE5aglYokjcdS%2BoCl7l01I99ikxovQi22p3rWtAVKdLLrPWwizQwqtyKAyESRE8J1EBjoaShdYma3eG6zZKCE9JePQuyZSBVsqw4%2FT6GJECfyC1dvDhn%2F2gz90VQu9ElE%2BCE1GvhfVv%2B5nPq0NzgY5MRBLcXRSdsfyG3Vt1kQw82u2Fit43m%2F%2BVYmcoCMtrEQHmdUVyoVcCU%2FVCVzYSPJ1ESGOH5HVu49VNFc4ZLbAPwfWBSpbGwaWK1gU3Kh89d%2FL1N25gBJM39omKWRin7SGfdq%2Bp0jJPPqegVApDDy1vq%2FBjqkAdbglS4vJPP1GCbcf18cnf5wdVSgxSYnNtshvMjlldPgfUBkMi9h4ka8L8ZYUPvQ6lFmVDWeJkYeY6gyqYclVyPoYm4pohqBi9OTqTfRIU8eks0Iq67bkKeWpik3fohq8eplyJkXTuur%2FcnkLAH5iZd%2BguuGFun6FC%2FivS6mlJ5k%2BiPYwxTk5Aki9Sqg8DnHH8DA8x0yuGj5Y7kO5G0tCC0%2F6o%2FV&X-Amz-Signature=70e7aa73c9a25d7ae9ee1f099f507da9c3c9b3ea26347e77a64101a71c6a0d58&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
