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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y5CFNH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ogmjCRKOenH2HD1mQRoxa0G2%2BIRFEBOTxCIy%2Fhaz5wIhAOOkPtFL%2BtfYgumK0tqDp3%2F1rDgaR0wXF1EDgt%2BLNRZnKv8DCEQQABoMNjM3NDIzMTgzODA1IgwnCc%2FhsWnNG8nXiD0q3AM1cjceuzGC3x440UpXfSfNm7TSbe9u36kJ%2FLZLhfHtaD6jSXWusakUjWUkUGTBmK2BuMI0Z8RKAyj7iju1gLYtSjqisalfjMP2IjjV3G%2B2aUZwKFq0z5UfydNMKmrv0ayetjywrgWLZS5K05mtXuGlESB6ovZTa%2FLtGg%2F0SO0Gs3OYlIzRrsLerhBu2hF2QkiDETexX%2FNB66TfHpk1dEPJhaek6z0FD6BMCDdgxHO%2BjnilhD7Jda9e%2BtRhIcmZjrtU%2FSRovWjpKMxzGq%2FANpZ%2Bg5COUlWcp%2FPC%2B68DxD5VYhVrTZefKj03D1j%2Fast8cbKYqHg25gpYGX26StDI6ptm7YjJu8P4R66yeEXx6LQ2fAPGQ8Rf5WmC66iISl1%2BT26bkLimZoMthoK%2F%2FQPeT9Mj589Gnlabk2HpOJ8wC29udplM1E41OiCRLemjP4yN6NVXpxjI%2BfSubgMCUjmvPr3wDqtJWqIFX%2F2YkSNOqUdnUVK4cdvSkDoforwvKEIUwfL63xXxWhRFweNeybXWSjhRTMGz4NUlH962IgmyGz3siobVHhN6ksXLOz91UDMjlA4YOmqDO2Mjodph%2BSiuyYDuyOZgD2F8S%2Fm9eqKAlQrbj%2FTwKECwBWTyDK8P3DCrj%2F6%2FBjqkAQY5nAPm2zMlOaGNK7eWWiBucKfxT2kSqmYFaBb%2BeWIgP33CiyL1Aoh2UXqWys64IXPo1FvvcZHL8iC1JvKZdo3WRUZ%2B054eN%2BoWZaUZStiuPP4NElhhd%2FSDeU9%2FqgdysNtbLdp1ph16mKjmT1d0%2Bw2KX4Ih7go92edOhU%2BnSn3VLcJV5f%2FqVtw314ecWh1zocBsFPKd8JwFycCIfr%2BjvUY3tFgF&X-Amz-Signature=b4773304d9cffa359dff3336738248d40827d9ab1fc47e0693ef6a90dad01bc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y5CFNH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ogmjCRKOenH2HD1mQRoxa0G2%2BIRFEBOTxCIy%2Fhaz5wIhAOOkPtFL%2BtfYgumK0tqDp3%2F1rDgaR0wXF1EDgt%2BLNRZnKv8DCEQQABoMNjM3NDIzMTgzODA1IgwnCc%2FhsWnNG8nXiD0q3AM1cjceuzGC3x440UpXfSfNm7TSbe9u36kJ%2FLZLhfHtaD6jSXWusakUjWUkUGTBmK2BuMI0Z8RKAyj7iju1gLYtSjqisalfjMP2IjjV3G%2B2aUZwKFq0z5UfydNMKmrv0ayetjywrgWLZS5K05mtXuGlESB6ovZTa%2FLtGg%2F0SO0Gs3OYlIzRrsLerhBu2hF2QkiDETexX%2FNB66TfHpk1dEPJhaek6z0FD6BMCDdgxHO%2BjnilhD7Jda9e%2BtRhIcmZjrtU%2FSRovWjpKMxzGq%2FANpZ%2Bg5COUlWcp%2FPC%2B68DxD5VYhVrTZefKj03D1j%2Fast8cbKYqHg25gpYGX26StDI6ptm7YjJu8P4R66yeEXx6LQ2fAPGQ8Rf5WmC66iISl1%2BT26bkLimZoMthoK%2F%2FQPeT9Mj589Gnlabk2HpOJ8wC29udplM1E41OiCRLemjP4yN6NVXpxjI%2BfSubgMCUjmvPr3wDqtJWqIFX%2F2YkSNOqUdnUVK4cdvSkDoforwvKEIUwfL63xXxWhRFweNeybXWSjhRTMGz4NUlH962IgmyGz3siobVHhN6ksXLOz91UDMjlA4YOmqDO2Mjodph%2BSiuyYDuyOZgD2F8S%2Fm9eqKAlQrbj%2FTwKECwBWTyDK8P3DCrj%2F6%2FBjqkAQY5nAPm2zMlOaGNK7eWWiBucKfxT2kSqmYFaBb%2BeWIgP33CiyL1Aoh2UXqWys64IXPo1FvvcZHL8iC1JvKZdo3WRUZ%2B054eN%2BoWZaUZStiuPP4NElhhd%2FSDeU9%2FqgdysNtbLdp1ph16mKjmT1d0%2Bw2KX4Ih7go92edOhU%2BnSn3VLcJV5f%2FqVtw314ecWh1zocBsFPKd8JwFycCIfr%2BjvUY3tFgF&X-Amz-Signature=818f71fb3947fff0dc2b431ea27e6f51883efe45a4f35130f82daedc5207a868&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y5CFNH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ogmjCRKOenH2HD1mQRoxa0G2%2BIRFEBOTxCIy%2Fhaz5wIhAOOkPtFL%2BtfYgumK0tqDp3%2F1rDgaR0wXF1EDgt%2BLNRZnKv8DCEQQABoMNjM3NDIzMTgzODA1IgwnCc%2FhsWnNG8nXiD0q3AM1cjceuzGC3x440UpXfSfNm7TSbe9u36kJ%2FLZLhfHtaD6jSXWusakUjWUkUGTBmK2BuMI0Z8RKAyj7iju1gLYtSjqisalfjMP2IjjV3G%2B2aUZwKFq0z5UfydNMKmrv0ayetjywrgWLZS5K05mtXuGlESB6ovZTa%2FLtGg%2F0SO0Gs3OYlIzRrsLerhBu2hF2QkiDETexX%2FNB66TfHpk1dEPJhaek6z0FD6BMCDdgxHO%2BjnilhD7Jda9e%2BtRhIcmZjrtU%2FSRovWjpKMxzGq%2FANpZ%2Bg5COUlWcp%2FPC%2B68DxD5VYhVrTZefKj03D1j%2Fast8cbKYqHg25gpYGX26StDI6ptm7YjJu8P4R66yeEXx6LQ2fAPGQ8Rf5WmC66iISl1%2BT26bkLimZoMthoK%2F%2FQPeT9Mj589Gnlabk2HpOJ8wC29udplM1E41OiCRLemjP4yN6NVXpxjI%2BfSubgMCUjmvPr3wDqtJWqIFX%2F2YkSNOqUdnUVK4cdvSkDoforwvKEIUwfL63xXxWhRFweNeybXWSjhRTMGz4NUlH962IgmyGz3siobVHhN6ksXLOz91UDMjlA4YOmqDO2Mjodph%2BSiuyYDuyOZgD2F8S%2Fm9eqKAlQrbj%2FTwKECwBWTyDK8P3DCrj%2F6%2FBjqkAQY5nAPm2zMlOaGNK7eWWiBucKfxT2kSqmYFaBb%2BeWIgP33CiyL1Aoh2UXqWys64IXPo1FvvcZHL8iC1JvKZdo3WRUZ%2B054eN%2BoWZaUZStiuPP4NElhhd%2FSDeU9%2FqgdysNtbLdp1ph16mKjmT1d0%2Bw2KX4Ih7go92edOhU%2BnSn3VLcJV5f%2FqVtw314ecWh1zocBsFPKd8JwFycCIfr%2BjvUY3tFgF&X-Amz-Signature=0f642a985ebb09e2b506ce283e1d076a557d6e3e4b98394e8f82c6c6f6f142ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y5CFNH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ogmjCRKOenH2HD1mQRoxa0G2%2BIRFEBOTxCIy%2Fhaz5wIhAOOkPtFL%2BtfYgumK0tqDp3%2F1rDgaR0wXF1EDgt%2BLNRZnKv8DCEQQABoMNjM3NDIzMTgzODA1IgwnCc%2FhsWnNG8nXiD0q3AM1cjceuzGC3x440UpXfSfNm7TSbe9u36kJ%2FLZLhfHtaD6jSXWusakUjWUkUGTBmK2BuMI0Z8RKAyj7iju1gLYtSjqisalfjMP2IjjV3G%2B2aUZwKFq0z5UfydNMKmrv0ayetjywrgWLZS5K05mtXuGlESB6ovZTa%2FLtGg%2F0SO0Gs3OYlIzRrsLerhBu2hF2QkiDETexX%2FNB66TfHpk1dEPJhaek6z0FD6BMCDdgxHO%2BjnilhD7Jda9e%2BtRhIcmZjrtU%2FSRovWjpKMxzGq%2FANpZ%2Bg5COUlWcp%2FPC%2B68DxD5VYhVrTZefKj03D1j%2Fast8cbKYqHg25gpYGX26StDI6ptm7YjJu8P4R66yeEXx6LQ2fAPGQ8Rf5WmC66iISl1%2BT26bkLimZoMthoK%2F%2FQPeT9Mj589Gnlabk2HpOJ8wC29udplM1E41OiCRLemjP4yN6NVXpxjI%2BfSubgMCUjmvPr3wDqtJWqIFX%2F2YkSNOqUdnUVK4cdvSkDoforwvKEIUwfL63xXxWhRFweNeybXWSjhRTMGz4NUlH962IgmyGz3siobVHhN6ksXLOz91UDMjlA4YOmqDO2Mjodph%2BSiuyYDuyOZgD2F8S%2Fm9eqKAlQrbj%2FTwKECwBWTyDK8P3DCrj%2F6%2FBjqkAQY5nAPm2zMlOaGNK7eWWiBucKfxT2kSqmYFaBb%2BeWIgP33CiyL1Aoh2UXqWys64IXPo1FvvcZHL8iC1JvKZdo3WRUZ%2B054eN%2BoWZaUZStiuPP4NElhhd%2FSDeU9%2FqgdysNtbLdp1ph16mKjmT1d0%2Bw2KX4Ih7go92edOhU%2BnSn3VLcJV5f%2FqVtw314ecWh1zocBsFPKd8JwFycCIfr%2BjvUY3tFgF&X-Amz-Signature=a46c2ba1212c6405b15cee2c1e3706ef589e64631424eab469a20bf995a865e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y5CFNH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ogmjCRKOenH2HD1mQRoxa0G2%2BIRFEBOTxCIy%2Fhaz5wIhAOOkPtFL%2BtfYgumK0tqDp3%2F1rDgaR0wXF1EDgt%2BLNRZnKv8DCEQQABoMNjM3NDIzMTgzODA1IgwnCc%2FhsWnNG8nXiD0q3AM1cjceuzGC3x440UpXfSfNm7TSbe9u36kJ%2FLZLhfHtaD6jSXWusakUjWUkUGTBmK2BuMI0Z8RKAyj7iju1gLYtSjqisalfjMP2IjjV3G%2B2aUZwKFq0z5UfydNMKmrv0ayetjywrgWLZS5K05mtXuGlESB6ovZTa%2FLtGg%2F0SO0Gs3OYlIzRrsLerhBu2hF2QkiDETexX%2FNB66TfHpk1dEPJhaek6z0FD6BMCDdgxHO%2BjnilhD7Jda9e%2BtRhIcmZjrtU%2FSRovWjpKMxzGq%2FANpZ%2Bg5COUlWcp%2FPC%2B68DxD5VYhVrTZefKj03D1j%2Fast8cbKYqHg25gpYGX26StDI6ptm7YjJu8P4R66yeEXx6LQ2fAPGQ8Rf5WmC66iISl1%2BT26bkLimZoMthoK%2F%2FQPeT9Mj589Gnlabk2HpOJ8wC29udplM1E41OiCRLemjP4yN6NVXpxjI%2BfSubgMCUjmvPr3wDqtJWqIFX%2F2YkSNOqUdnUVK4cdvSkDoforwvKEIUwfL63xXxWhRFweNeybXWSjhRTMGz4NUlH962IgmyGz3siobVHhN6ksXLOz91UDMjlA4YOmqDO2Mjodph%2BSiuyYDuyOZgD2F8S%2Fm9eqKAlQrbj%2FTwKECwBWTyDK8P3DCrj%2F6%2FBjqkAQY5nAPm2zMlOaGNK7eWWiBucKfxT2kSqmYFaBb%2BeWIgP33CiyL1Aoh2UXqWys64IXPo1FvvcZHL8iC1JvKZdo3WRUZ%2B054eN%2BoWZaUZStiuPP4NElhhd%2FSDeU9%2FqgdysNtbLdp1ph16mKjmT1d0%2Bw2KX4Ih7go92edOhU%2BnSn3VLcJV5f%2FqVtw314ecWh1zocBsFPKd8JwFycCIfr%2BjvUY3tFgF&X-Amz-Signature=68573ed047c48cc52ec4fc8690c93caaecadbc7690869da07887b73c4834669f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y5CFNH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ogmjCRKOenH2HD1mQRoxa0G2%2BIRFEBOTxCIy%2Fhaz5wIhAOOkPtFL%2BtfYgumK0tqDp3%2F1rDgaR0wXF1EDgt%2BLNRZnKv8DCEQQABoMNjM3NDIzMTgzODA1IgwnCc%2FhsWnNG8nXiD0q3AM1cjceuzGC3x440UpXfSfNm7TSbe9u36kJ%2FLZLhfHtaD6jSXWusakUjWUkUGTBmK2BuMI0Z8RKAyj7iju1gLYtSjqisalfjMP2IjjV3G%2B2aUZwKFq0z5UfydNMKmrv0ayetjywrgWLZS5K05mtXuGlESB6ovZTa%2FLtGg%2F0SO0Gs3OYlIzRrsLerhBu2hF2QkiDETexX%2FNB66TfHpk1dEPJhaek6z0FD6BMCDdgxHO%2BjnilhD7Jda9e%2BtRhIcmZjrtU%2FSRovWjpKMxzGq%2FANpZ%2Bg5COUlWcp%2FPC%2B68DxD5VYhVrTZefKj03D1j%2Fast8cbKYqHg25gpYGX26StDI6ptm7YjJu8P4R66yeEXx6LQ2fAPGQ8Rf5WmC66iISl1%2BT26bkLimZoMthoK%2F%2FQPeT9Mj589Gnlabk2HpOJ8wC29udplM1E41OiCRLemjP4yN6NVXpxjI%2BfSubgMCUjmvPr3wDqtJWqIFX%2F2YkSNOqUdnUVK4cdvSkDoforwvKEIUwfL63xXxWhRFweNeybXWSjhRTMGz4NUlH962IgmyGz3siobVHhN6ksXLOz91UDMjlA4YOmqDO2Mjodph%2BSiuyYDuyOZgD2F8S%2Fm9eqKAlQrbj%2FTwKECwBWTyDK8P3DCrj%2F6%2FBjqkAQY5nAPm2zMlOaGNK7eWWiBucKfxT2kSqmYFaBb%2BeWIgP33CiyL1Aoh2UXqWys64IXPo1FvvcZHL8iC1JvKZdo3WRUZ%2B054eN%2BoWZaUZStiuPP4NElhhd%2FSDeU9%2FqgdysNtbLdp1ph16mKjmT1d0%2Bw2KX4Ih7go92edOhU%2BnSn3VLcJV5f%2FqVtw314ecWh1zocBsFPKd8JwFycCIfr%2BjvUY3tFgF&X-Amz-Signature=da67c50a31a6c83db87696f049c50900e95d5bc57e37401555929fa34dc7d953&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y5CFNH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ogmjCRKOenH2HD1mQRoxa0G2%2BIRFEBOTxCIy%2Fhaz5wIhAOOkPtFL%2BtfYgumK0tqDp3%2F1rDgaR0wXF1EDgt%2BLNRZnKv8DCEQQABoMNjM3NDIzMTgzODA1IgwnCc%2FhsWnNG8nXiD0q3AM1cjceuzGC3x440UpXfSfNm7TSbe9u36kJ%2FLZLhfHtaD6jSXWusakUjWUkUGTBmK2BuMI0Z8RKAyj7iju1gLYtSjqisalfjMP2IjjV3G%2B2aUZwKFq0z5UfydNMKmrv0ayetjywrgWLZS5K05mtXuGlESB6ovZTa%2FLtGg%2F0SO0Gs3OYlIzRrsLerhBu2hF2QkiDETexX%2FNB66TfHpk1dEPJhaek6z0FD6BMCDdgxHO%2BjnilhD7Jda9e%2BtRhIcmZjrtU%2FSRovWjpKMxzGq%2FANpZ%2Bg5COUlWcp%2FPC%2B68DxD5VYhVrTZefKj03D1j%2Fast8cbKYqHg25gpYGX26StDI6ptm7YjJu8P4R66yeEXx6LQ2fAPGQ8Rf5WmC66iISl1%2BT26bkLimZoMthoK%2F%2FQPeT9Mj589Gnlabk2HpOJ8wC29udplM1E41OiCRLemjP4yN6NVXpxjI%2BfSubgMCUjmvPr3wDqtJWqIFX%2F2YkSNOqUdnUVK4cdvSkDoforwvKEIUwfL63xXxWhRFweNeybXWSjhRTMGz4NUlH962IgmyGz3siobVHhN6ksXLOz91UDMjlA4YOmqDO2Mjodph%2BSiuyYDuyOZgD2F8S%2Fm9eqKAlQrbj%2FTwKECwBWTyDK8P3DCrj%2F6%2FBjqkAQY5nAPm2zMlOaGNK7eWWiBucKfxT2kSqmYFaBb%2BeWIgP33CiyL1Aoh2UXqWys64IXPo1FvvcZHL8iC1JvKZdo3WRUZ%2B054eN%2BoWZaUZStiuPP4NElhhd%2FSDeU9%2FqgdysNtbLdp1ph16mKjmT1d0%2Bw2KX4Ih7go92edOhU%2BnSn3VLcJV5f%2FqVtw314ecWh1zocBsFPKd8JwFycCIfr%2BjvUY3tFgF&X-Amz-Signature=50506b4d18f199f9f214556c07af3101b03f2c289a04ba45c1768c2135fe9cab&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
