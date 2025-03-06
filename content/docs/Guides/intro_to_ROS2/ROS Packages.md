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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQPJ27O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFjzxRl60tJnivKJBAawNicpHxYhtEKRZSYmQH5Q9TQAiEAyJMuMXnVaNA8qaO%2BzfUI11VSJd0OsdiCydV93lt4KlAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNQ%2F9K2KT4yO%2FIJGiircA%2FGCgxZZkq2CgiKDgNZQfP3wFDvJ77hS0UH1qlrhbkFXoGjB8l%2F47GNgO93sx7jcrwYfVEjQumhutNk1U3TN1hkDdoqfaQShnrnyaJT62iqINnxdn37YlXJugKycgph8%2FYeJ0ZamidcuhrjWHlGoYRStOXKZJuP4y4COxuD%2FhY3%2FqmhCnGSC04FTBQwvo7EB9dX0PVm9aK3poF2nVzO3rlXzoEZAym3YB%2FAm%2FT2ilJ9ATCWtS3iKzymWZuzSzScbKBhkQLwSZjM2XGWt%2BNAll5R4DMk5Xa0B6aWrk%2FI6wi0LdBbtcp14lS3JsJXgheIB9TFojwE%2F%2BXfghpmJK8geQulevhsoDhr6Dzmg7sT1E3z6pzuw4jFqxc23%2FeyGIKKNzRbFczyq%2Bn2I5%2BLMFMN1DCBlgjpNyZxcFA8DYgzjzwMe8Ax57K80FU3W7Bhqedc38sAj1EMXQTAcjwMtJ7CEy4ihEsL%2FuSRV0d6SNmUI1fXYGvtic0P6D%2FOVXREJ9d7ItZdUdhVIUPDpcZlU8DCAd2d%2F2Vdl90ljDfGwONOtEPQIhbUJ%2FD%2FY%2BP2lJRkm2S8y7dHFXL%2BVfdbO1eeXDd%2Bnwt21o%2Bc%2FFRLomBLDRq4e0IHZiHd8Z871THjXx9cXMIrwpr4GOqUBxTns8WokmOoaWm0XFsk%2F1mAK%2Fh9kV7wwhaMSMeyc8nt8undLd6ATlZxnWnT5csEgYFZ3wZD9AIgM%2BciRAzNnHSpVj6vsNYa9vvTNWndALzB3Tj6yOHxG7Z2HHUblMX75HjuBZ60k3pmuoXgEnG6AlxgkT7Y8Ytk1Mqloma2lnCyrSuBBc9k3%2BDj%2Bvq7JjW4goG8%2FC4RxOKdTb%2BPaJti9yoGzDWZw&X-Amz-Signature=c2e6aeaa81be65436a1966a6e03afffbea4c3beaf4adb26fd905becb7fa342e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQPJ27O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFjzxRl60tJnivKJBAawNicpHxYhtEKRZSYmQH5Q9TQAiEAyJMuMXnVaNA8qaO%2BzfUI11VSJd0OsdiCydV93lt4KlAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNQ%2F9K2KT4yO%2FIJGiircA%2FGCgxZZkq2CgiKDgNZQfP3wFDvJ77hS0UH1qlrhbkFXoGjB8l%2F47GNgO93sx7jcrwYfVEjQumhutNk1U3TN1hkDdoqfaQShnrnyaJT62iqINnxdn37YlXJugKycgph8%2FYeJ0ZamidcuhrjWHlGoYRStOXKZJuP4y4COxuD%2FhY3%2FqmhCnGSC04FTBQwvo7EB9dX0PVm9aK3poF2nVzO3rlXzoEZAym3YB%2FAm%2FT2ilJ9ATCWtS3iKzymWZuzSzScbKBhkQLwSZjM2XGWt%2BNAll5R4DMk5Xa0B6aWrk%2FI6wi0LdBbtcp14lS3JsJXgheIB9TFojwE%2F%2BXfghpmJK8geQulevhsoDhr6Dzmg7sT1E3z6pzuw4jFqxc23%2FeyGIKKNzRbFczyq%2Bn2I5%2BLMFMN1DCBlgjpNyZxcFA8DYgzjzwMe8Ax57K80FU3W7Bhqedc38sAj1EMXQTAcjwMtJ7CEy4ihEsL%2FuSRV0d6SNmUI1fXYGvtic0P6D%2FOVXREJ9d7ItZdUdhVIUPDpcZlU8DCAd2d%2F2Vdl90ljDfGwONOtEPQIhbUJ%2FD%2FY%2BP2lJRkm2S8y7dHFXL%2BVfdbO1eeXDd%2Bnwt21o%2Bc%2FFRLomBLDRq4e0IHZiHd8Z871THjXx9cXMIrwpr4GOqUBxTns8WokmOoaWm0XFsk%2F1mAK%2Fh9kV7wwhaMSMeyc8nt8undLd6ATlZxnWnT5csEgYFZ3wZD9AIgM%2BciRAzNnHSpVj6vsNYa9vvTNWndALzB3Tj6yOHxG7Z2HHUblMX75HjuBZ60k3pmuoXgEnG6AlxgkT7Y8Ytk1Mqloma2lnCyrSuBBc9k3%2BDj%2Bvq7JjW4goG8%2FC4RxOKdTb%2BPaJti9yoGzDWZw&X-Amz-Signature=389b1ab3be83aadf5b002442f663bd007e972473b942689666a95e30bf51e19b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQPJ27O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFjzxRl60tJnivKJBAawNicpHxYhtEKRZSYmQH5Q9TQAiEAyJMuMXnVaNA8qaO%2BzfUI11VSJd0OsdiCydV93lt4KlAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNQ%2F9K2KT4yO%2FIJGiircA%2FGCgxZZkq2CgiKDgNZQfP3wFDvJ77hS0UH1qlrhbkFXoGjB8l%2F47GNgO93sx7jcrwYfVEjQumhutNk1U3TN1hkDdoqfaQShnrnyaJT62iqINnxdn37YlXJugKycgph8%2FYeJ0ZamidcuhrjWHlGoYRStOXKZJuP4y4COxuD%2FhY3%2FqmhCnGSC04FTBQwvo7EB9dX0PVm9aK3poF2nVzO3rlXzoEZAym3YB%2FAm%2FT2ilJ9ATCWtS3iKzymWZuzSzScbKBhkQLwSZjM2XGWt%2BNAll5R4DMk5Xa0B6aWrk%2FI6wi0LdBbtcp14lS3JsJXgheIB9TFojwE%2F%2BXfghpmJK8geQulevhsoDhr6Dzmg7sT1E3z6pzuw4jFqxc23%2FeyGIKKNzRbFczyq%2Bn2I5%2BLMFMN1DCBlgjpNyZxcFA8DYgzjzwMe8Ax57K80FU3W7Bhqedc38sAj1EMXQTAcjwMtJ7CEy4ihEsL%2FuSRV0d6SNmUI1fXYGvtic0P6D%2FOVXREJ9d7ItZdUdhVIUPDpcZlU8DCAd2d%2F2Vdl90ljDfGwONOtEPQIhbUJ%2FD%2FY%2BP2lJRkm2S8y7dHFXL%2BVfdbO1eeXDd%2Bnwt21o%2Bc%2FFRLomBLDRq4e0IHZiHd8Z871THjXx9cXMIrwpr4GOqUBxTns8WokmOoaWm0XFsk%2F1mAK%2Fh9kV7wwhaMSMeyc8nt8undLd6ATlZxnWnT5csEgYFZ3wZD9AIgM%2BciRAzNnHSpVj6vsNYa9vvTNWndALzB3Tj6yOHxG7Z2HHUblMX75HjuBZ60k3pmuoXgEnG6AlxgkT7Y8Ytk1Mqloma2lnCyrSuBBc9k3%2BDj%2Bvq7JjW4goG8%2FC4RxOKdTb%2BPaJti9yoGzDWZw&X-Amz-Signature=8b11d079fef12c77c748871ab31c7323262d8fc23815e1515f1c0987c1649f16&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQPJ27O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFjzxRl60tJnivKJBAawNicpHxYhtEKRZSYmQH5Q9TQAiEAyJMuMXnVaNA8qaO%2BzfUI11VSJd0OsdiCydV93lt4KlAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNQ%2F9K2KT4yO%2FIJGiircA%2FGCgxZZkq2CgiKDgNZQfP3wFDvJ77hS0UH1qlrhbkFXoGjB8l%2F47GNgO93sx7jcrwYfVEjQumhutNk1U3TN1hkDdoqfaQShnrnyaJT62iqINnxdn37YlXJugKycgph8%2FYeJ0ZamidcuhrjWHlGoYRStOXKZJuP4y4COxuD%2FhY3%2FqmhCnGSC04FTBQwvo7EB9dX0PVm9aK3poF2nVzO3rlXzoEZAym3YB%2FAm%2FT2ilJ9ATCWtS3iKzymWZuzSzScbKBhkQLwSZjM2XGWt%2BNAll5R4DMk5Xa0B6aWrk%2FI6wi0LdBbtcp14lS3JsJXgheIB9TFojwE%2F%2BXfghpmJK8geQulevhsoDhr6Dzmg7sT1E3z6pzuw4jFqxc23%2FeyGIKKNzRbFczyq%2Bn2I5%2BLMFMN1DCBlgjpNyZxcFA8DYgzjzwMe8Ax57K80FU3W7Bhqedc38sAj1EMXQTAcjwMtJ7CEy4ihEsL%2FuSRV0d6SNmUI1fXYGvtic0P6D%2FOVXREJ9d7ItZdUdhVIUPDpcZlU8DCAd2d%2F2Vdl90ljDfGwONOtEPQIhbUJ%2FD%2FY%2BP2lJRkm2S8y7dHFXL%2BVfdbO1eeXDd%2Bnwt21o%2Bc%2FFRLomBLDRq4e0IHZiHd8Z871THjXx9cXMIrwpr4GOqUBxTns8WokmOoaWm0XFsk%2F1mAK%2Fh9kV7wwhaMSMeyc8nt8undLd6ATlZxnWnT5csEgYFZ3wZD9AIgM%2BciRAzNnHSpVj6vsNYa9vvTNWndALzB3Tj6yOHxG7Z2HHUblMX75HjuBZ60k3pmuoXgEnG6AlxgkT7Y8Ytk1Mqloma2lnCyrSuBBc9k3%2BDj%2Bvq7JjW4goG8%2FC4RxOKdTb%2BPaJti9yoGzDWZw&X-Amz-Signature=a6a794a9ec59bef1eb61abd4e417cfe7f6ac858acc239593b3fa88b1d7155965&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQPJ27O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFjzxRl60tJnivKJBAawNicpHxYhtEKRZSYmQH5Q9TQAiEAyJMuMXnVaNA8qaO%2BzfUI11VSJd0OsdiCydV93lt4KlAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNQ%2F9K2KT4yO%2FIJGiircA%2FGCgxZZkq2CgiKDgNZQfP3wFDvJ77hS0UH1qlrhbkFXoGjB8l%2F47GNgO93sx7jcrwYfVEjQumhutNk1U3TN1hkDdoqfaQShnrnyaJT62iqINnxdn37YlXJugKycgph8%2FYeJ0ZamidcuhrjWHlGoYRStOXKZJuP4y4COxuD%2FhY3%2FqmhCnGSC04FTBQwvo7EB9dX0PVm9aK3poF2nVzO3rlXzoEZAym3YB%2FAm%2FT2ilJ9ATCWtS3iKzymWZuzSzScbKBhkQLwSZjM2XGWt%2BNAll5R4DMk5Xa0B6aWrk%2FI6wi0LdBbtcp14lS3JsJXgheIB9TFojwE%2F%2BXfghpmJK8geQulevhsoDhr6Dzmg7sT1E3z6pzuw4jFqxc23%2FeyGIKKNzRbFczyq%2Bn2I5%2BLMFMN1DCBlgjpNyZxcFA8DYgzjzwMe8Ax57K80FU3W7Bhqedc38sAj1EMXQTAcjwMtJ7CEy4ihEsL%2FuSRV0d6SNmUI1fXYGvtic0P6D%2FOVXREJ9d7ItZdUdhVIUPDpcZlU8DCAd2d%2F2Vdl90ljDfGwONOtEPQIhbUJ%2FD%2FY%2BP2lJRkm2S8y7dHFXL%2BVfdbO1eeXDd%2Bnwt21o%2Bc%2FFRLomBLDRq4e0IHZiHd8Z871THjXx9cXMIrwpr4GOqUBxTns8WokmOoaWm0XFsk%2F1mAK%2Fh9kV7wwhaMSMeyc8nt8undLd6ATlZxnWnT5csEgYFZ3wZD9AIgM%2BciRAzNnHSpVj6vsNYa9vvTNWndALzB3Tj6yOHxG7Z2HHUblMX75HjuBZ60k3pmuoXgEnG6AlxgkT7Y8Ytk1Mqloma2lnCyrSuBBc9k3%2BDj%2Bvq7JjW4goG8%2FC4RxOKdTb%2BPaJti9yoGzDWZw&X-Amz-Signature=c1ee7906776afe04ef56b35b1c4076663b143195fd80b573f766230fec684e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQPJ27O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFjzxRl60tJnivKJBAawNicpHxYhtEKRZSYmQH5Q9TQAiEAyJMuMXnVaNA8qaO%2BzfUI11VSJd0OsdiCydV93lt4KlAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNQ%2F9K2KT4yO%2FIJGiircA%2FGCgxZZkq2CgiKDgNZQfP3wFDvJ77hS0UH1qlrhbkFXoGjB8l%2F47GNgO93sx7jcrwYfVEjQumhutNk1U3TN1hkDdoqfaQShnrnyaJT62iqINnxdn37YlXJugKycgph8%2FYeJ0ZamidcuhrjWHlGoYRStOXKZJuP4y4COxuD%2FhY3%2FqmhCnGSC04FTBQwvo7EB9dX0PVm9aK3poF2nVzO3rlXzoEZAym3YB%2FAm%2FT2ilJ9ATCWtS3iKzymWZuzSzScbKBhkQLwSZjM2XGWt%2BNAll5R4DMk5Xa0B6aWrk%2FI6wi0LdBbtcp14lS3JsJXgheIB9TFojwE%2F%2BXfghpmJK8geQulevhsoDhr6Dzmg7sT1E3z6pzuw4jFqxc23%2FeyGIKKNzRbFczyq%2Bn2I5%2BLMFMN1DCBlgjpNyZxcFA8DYgzjzwMe8Ax57K80FU3W7Bhqedc38sAj1EMXQTAcjwMtJ7CEy4ihEsL%2FuSRV0d6SNmUI1fXYGvtic0P6D%2FOVXREJ9d7ItZdUdhVIUPDpcZlU8DCAd2d%2F2Vdl90ljDfGwONOtEPQIhbUJ%2FD%2FY%2BP2lJRkm2S8y7dHFXL%2BVfdbO1eeXDd%2Bnwt21o%2Bc%2FFRLomBLDRq4e0IHZiHd8Z871THjXx9cXMIrwpr4GOqUBxTns8WokmOoaWm0XFsk%2F1mAK%2Fh9kV7wwhaMSMeyc8nt8undLd6ATlZxnWnT5csEgYFZ3wZD9AIgM%2BciRAzNnHSpVj6vsNYa9vvTNWndALzB3Tj6yOHxG7Z2HHUblMX75HjuBZ60k3pmuoXgEnG6AlxgkT7Y8Ytk1Mqloma2lnCyrSuBBc9k3%2BDj%2Bvq7JjW4goG8%2FC4RxOKdTb%2BPaJti9yoGzDWZw&X-Amz-Signature=b75bba4333f6457546726d0647d60467ff603ab130bdf623827dc7f34dfd2023&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQPJ27O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFjzxRl60tJnivKJBAawNicpHxYhtEKRZSYmQH5Q9TQAiEAyJMuMXnVaNA8qaO%2BzfUI11VSJd0OsdiCydV93lt4KlAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNQ%2F9K2KT4yO%2FIJGiircA%2FGCgxZZkq2CgiKDgNZQfP3wFDvJ77hS0UH1qlrhbkFXoGjB8l%2F47GNgO93sx7jcrwYfVEjQumhutNk1U3TN1hkDdoqfaQShnrnyaJT62iqINnxdn37YlXJugKycgph8%2FYeJ0ZamidcuhrjWHlGoYRStOXKZJuP4y4COxuD%2FhY3%2FqmhCnGSC04FTBQwvo7EB9dX0PVm9aK3poF2nVzO3rlXzoEZAym3YB%2FAm%2FT2ilJ9ATCWtS3iKzymWZuzSzScbKBhkQLwSZjM2XGWt%2BNAll5R4DMk5Xa0B6aWrk%2FI6wi0LdBbtcp14lS3JsJXgheIB9TFojwE%2F%2BXfghpmJK8geQulevhsoDhr6Dzmg7sT1E3z6pzuw4jFqxc23%2FeyGIKKNzRbFczyq%2Bn2I5%2BLMFMN1DCBlgjpNyZxcFA8DYgzjzwMe8Ax57K80FU3W7Bhqedc38sAj1EMXQTAcjwMtJ7CEy4ihEsL%2FuSRV0d6SNmUI1fXYGvtic0P6D%2FOVXREJ9d7ItZdUdhVIUPDpcZlU8DCAd2d%2F2Vdl90ljDfGwONOtEPQIhbUJ%2FD%2FY%2BP2lJRkm2S8y7dHFXL%2BVfdbO1eeXDd%2Bnwt21o%2Bc%2FFRLomBLDRq4e0IHZiHd8Z871THjXx9cXMIrwpr4GOqUBxTns8WokmOoaWm0XFsk%2F1mAK%2Fh9kV7wwhaMSMeyc8nt8undLd6ATlZxnWnT5csEgYFZ3wZD9AIgM%2BciRAzNnHSpVj6vsNYa9vvTNWndALzB3Tj6yOHxG7Z2HHUblMX75HjuBZ60k3pmuoXgEnG6AlxgkT7Y8Ytk1Mqloma2lnCyrSuBBc9k3%2BDj%2Bvq7JjW4goG8%2FC4RxOKdTb%2BPaJti9yoGzDWZw&X-Amz-Signature=bc095010263b7ab5b19ae8ba05f594a9524ca0208e19c742dd9e18118e089409&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
