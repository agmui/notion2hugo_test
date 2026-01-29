---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662VQUBYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEkQW81Ac%2FIn7coZ1zTLSXrU3eD72l%2BO9ViWeCiImPBAiBXzi9Abn91vUzDR7j6iIH6KYI47v%2FAx%2BU1IM5bE8FigSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtITRZMiifT6l3HyYKtwD5qYXTo3tqui%2FIRy%2B0sF%2BUnsB74jgQmZ%2BRqPBMtmrotjhgj7ftHaQNdCaeUE5RdqcOwk2HaY1XtEu9OVQFpwQH%2BTsHCj8q4HcaZWVw38Q78Kq568cdHNkPK%2Fa4eWo1DKy4elXrEfyLsXL3xUcPOm4lzeY8MjQ8UIsfP91hAfsXbmMMYvqkw%2FTcrPns4oxRts2jCljEHjunOYH6Ws%2BAAqzcNPfipAMvm28VAVXKPz0V2VYVq8xuKKl%2Byx%2FjRNEyqX7CLUL54VrBO%2FiIr1GftlNnoVUACHm28UMAvxs%2By4dYQZ3oeRReOUBxKuLSXUQuWQ5%2BN4mWUa%2BZ9UoUS%2F70SdnxM3Ra7Vbi3QTxv664Gnoau9MR5jCGNMArBXJF9qN3X%2FGjxfAQtezaspoGfQQqJRunZfJ%2BWjC7%2FNoKRxAkWFfHcn%2BFk2noRhb9ReycH75WmLzqvZsURMFbKXmbFlCJH2uZmcz%2FTg%2F10h%2FwrhyXAa2%2B7Q05WH27KM%2BZiG1%2FfDRwzWmiRyA7%2BVDuLb8f%2FVwGgK9QspMAoDKIrTYYE3JbzNvYAJT8HUOt9AcqEe1NknUCYTpij01K1hmVaRx40ejlHiOGzD3Pnri%2BcsGdrEtRNOnf2YMu94zfxIni7Aoo7UwtfbqywY6pgFq1p7h2kGyhmOlD1xSIghneZ3CAAlNv70Yu%2Foy5rzJ6xk0QzJKw1wmdle5PDpDeKO9tHC6NniTKieDXQX8CM8jar5%2FZs8kOmtWXvz8pJKGrHiYteG4BXTbRsEhpMSXuLHJbwfosi1i0Rj91p9vNXUS5%2BM5d%2BV695%2Ft0Wewu7kvYzfNd3i61dI%2BEcCEOkevtKPgIVjlD2TU%2FqsWCQzRED1gA7%2B8i4tI&X-Amz-Signature=775016982d958f8df2be591ec981bfbc220ec1a8cac5042c2b1aab83a0cf7ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662VQUBYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEkQW81Ac%2FIn7coZ1zTLSXrU3eD72l%2BO9ViWeCiImPBAiBXzi9Abn91vUzDR7j6iIH6KYI47v%2FAx%2BU1IM5bE8FigSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtITRZMiifT6l3HyYKtwD5qYXTo3tqui%2FIRy%2B0sF%2BUnsB74jgQmZ%2BRqPBMtmrotjhgj7ftHaQNdCaeUE5RdqcOwk2HaY1XtEu9OVQFpwQH%2BTsHCj8q4HcaZWVw38Q78Kq568cdHNkPK%2Fa4eWo1DKy4elXrEfyLsXL3xUcPOm4lzeY8MjQ8UIsfP91hAfsXbmMMYvqkw%2FTcrPns4oxRts2jCljEHjunOYH6Ws%2BAAqzcNPfipAMvm28VAVXKPz0V2VYVq8xuKKl%2Byx%2FjRNEyqX7CLUL54VrBO%2FiIr1GftlNnoVUACHm28UMAvxs%2By4dYQZ3oeRReOUBxKuLSXUQuWQ5%2BN4mWUa%2BZ9UoUS%2F70SdnxM3Ra7Vbi3QTxv664Gnoau9MR5jCGNMArBXJF9qN3X%2FGjxfAQtezaspoGfQQqJRunZfJ%2BWjC7%2FNoKRxAkWFfHcn%2BFk2noRhb9ReycH75WmLzqvZsURMFbKXmbFlCJH2uZmcz%2FTg%2F10h%2FwrhyXAa2%2B7Q05WH27KM%2BZiG1%2FfDRwzWmiRyA7%2BVDuLb8f%2FVwGgK9QspMAoDKIrTYYE3JbzNvYAJT8HUOt9AcqEe1NknUCYTpij01K1hmVaRx40ejlHiOGzD3Pnri%2BcsGdrEtRNOnf2YMu94zfxIni7Aoo7UwtfbqywY6pgFq1p7h2kGyhmOlD1xSIghneZ3CAAlNv70Yu%2Foy5rzJ6xk0QzJKw1wmdle5PDpDeKO9tHC6NniTKieDXQX8CM8jar5%2FZs8kOmtWXvz8pJKGrHiYteG4BXTbRsEhpMSXuLHJbwfosi1i0Rj91p9vNXUS5%2BM5d%2BV695%2Ft0Wewu7kvYzfNd3i61dI%2BEcCEOkevtKPgIVjlD2TU%2FqsWCQzRED1gA7%2B8i4tI&X-Amz-Signature=cd69f9fad3580d35cd0f73ee3704995ffbee704d730e5096036e9f130e68bf1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662VQUBYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEkQW81Ac%2FIn7coZ1zTLSXrU3eD72l%2BO9ViWeCiImPBAiBXzi9Abn91vUzDR7j6iIH6KYI47v%2FAx%2BU1IM5bE8FigSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtITRZMiifT6l3HyYKtwD5qYXTo3tqui%2FIRy%2B0sF%2BUnsB74jgQmZ%2BRqPBMtmrotjhgj7ftHaQNdCaeUE5RdqcOwk2HaY1XtEu9OVQFpwQH%2BTsHCj8q4HcaZWVw38Q78Kq568cdHNkPK%2Fa4eWo1DKy4elXrEfyLsXL3xUcPOm4lzeY8MjQ8UIsfP91hAfsXbmMMYvqkw%2FTcrPns4oxRts2jCljEHjunOYH6Ws%2BAAqzcNPfipAMvm28VAVXKPz0V2VYVq8xuKKl%2Byx%2FjRNEyqX7CLUL54VrBO%2FiIr1GftlNnoVUACHm28UMAvxs%2By4dYQZ3oeRReOUBxKuLSXUQuWQ5%2BN4mWUa%2BZ9UoUS%2F70SdnxM3Ra7Vbi3QTxv664Gnoau9MR5jCGNMArBXJF9qN3X%2FGjxfAQtezaspoGfQQqJRunZfJ%2BWjC7%2FNoKRxAkWFfHcn%2BFk2noRhb9ReycH75WmLzqvZsURMFbKXmbFlCJH2uZmcz%2FTg%2F10h%2FwrhyXAa2%2B7Q05WH27KM%2BZiG1%2FfDRwzWmiRyA7%2BVDuLb8f%2FVwGgK9QspMAoDKIrTYYE3JbzNvYAJT8HUOt9AcqEe1NknUCYTpij01K1hmVaRx40ejlHiOGzD3Pnri%2BcsGdrEtRNOnf2YMu94zfxIni7Aoo7UwtfbqywY6pgFq1p7h2kGyhmOlD1xSIghneZ3CAAlNv70Yu%2Foy5rzJ6xk0QzJKw1wmdle5PDpDeKO9tHC6NniTKieDXQX8CM8jar5%2FZs8kOmtWXvz8pJKGrHiYteG4BXTbRsEhpMSXuLHJbwfosi1i0Rj91p9vNXUS5%2BM5d%2BV695%2Ft0Wewu7kvYzfNd3i61dI%2BEcCEOkevtKPgIVjlD2TU%2FqsWCQzRED1gA7%2B8i4tI&X-Amz-Signature=25d8ac69cc9e802df616a2045474b7cdd79b386a651a6d4e32e823fe31f919c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662VQUBYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEkQW81Ac%2FIn7coZ1zTLSXrU3eD72l%2BO9ViWeCiImPBAiBXzi9Abn91vUzDR7j6iIH6KYI47v%2FAx%2BU1IM5bE8FigSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtITRZMiifT6l3HyYKtwD5qYXTo3tqui%2FIRy%2B0sF%2BUnsB74jgQmZ%2BRqPBMtmrotjhgj7ftHaQNdCaeUE5RdqcOwk2HaY1XtEu9OVQFpwQH%2BTsHCj8q4HcaZWVw38Q78Kq568cdHNkPK%2Fa4eWo1DKy4elXrEfyLsXL3xUcPOm4lzeY8MjQ8UIsfP91hAfsXbmMMYvqkw%2FTcrPns4oxRts2jCljEHjunOYH6Ws%2BAAqzcNPfipAMvm28VAVXKPz0V2VYVq8xuKKl%2Byx%2FjRNEyqX7CLUL54VrBO%2FiIr1GftlNnoVUACHm28UMAvxs%2By4dYQZ3oeRReOUBxKuLSXUQuWQ5%2BN4mWUa%2BZ9UoUS%2F70SdnxM3Ra7Vbi3QTxv664Gnoau9MR5jCGNMArBXJF9qN3X%2FGjxfAQtezaspoGfQQqJRunZfJ%2BWjC7%2FNoKRxAkWFfHcn%2BFk2noRhb9ReycH75WmLzqvZsURMFbKXmbFlCJH2uZmcz%2FTg%2F10h%2FwrhyXAa2%2B7Q05WH27KM%2BZiG1%2FfDRwzWmiRyA7%2BVDuLb8f%2FVwGgK9QspMAoDKIrTYYE3JbzNvYAJT8HUOt9AcqEe1NknUCYTpij01K1hmVaRx40ejlHiOGzD3Pnri%2BcsGdrEtRNOnf2YMu94zfxIni7Aoo7UwtfbqywY6pgFq1p7h2kGyhmOlD1xSIghneZ3CAAlNv70Yu%2Foy5rzJ6xk0QzJKw1wmdle5PDpDeKO9tHC6NniTKieDXQX8CM8jar5%2FZs8kOmtWXvz8pJKGrHiYteG4BXTbRsEhpMSXuLHJbwfosi1i0Rj91p9vNXUS5%2BM5d%2BV695%2Ft0Wewu7kvYzfNd3i61dI%2BEcCEOkevtKPgIVjlD2TU%2FqsWCQzRED1gA7%2B8i4tI&X-Amz-Signature=789a38b483f9c04bfaea2ccc34d71abf241c47833fade5487e156aeb514a4e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662VQUBYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEkQW81Ac%2FIn7coZ1zTLSXrU3eD72l%2BO9ViWeCiImPBAiBXzi9Abn91vUzDR7j6iIH6KYI47v%2FAx%2BU1IM5bE8FigSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtITRZMiifT6l3HyYKtwD5qYXTo3tqui%2FIRy%2B0sF%2BUnsB74jgQmZ%2BRqPBMtmrotjhgj7ftHaQNdCaeUE5RdqcOwk2HaY1XtEu9OVQFpwQH%2BTsHCj8q4HcaZWVw38Q78Kq568cdHNkPK%2Fa4eWo1DKy4elXrEfyLsXL3xUcPOm4lzeY8MjQ8UIsfP91hAfsXbmMMYvqkw%2FTcrPns4oxRts2jCljEHjunOYH6Ws%2BAAqzcNPfipAMvm28VAVXKPz0V2VYVq8xuKKl%2Byx%2FjRNEyqX7CLUL54VrBO%2FiIr1GftlNnoVUACHm28UMAvxs%2By4dYQZ3oeRReOUBxKuLSXUQuWQ5%2BN4mWUa%2BZ9UoUS%2F70SdnxM3Ra7Vbi3QTxv664Gnoau9MR5jCGNMArBXJF9qN3X%2FGjxfAQtezaspoGfQQqJRunZfJ%2BWjC7%2FNoKRxAkWFfHcn%2BFk2noRhb9ReycH75WmLzqvZsURMFbKXmbFlCJH2uZmcz%2FTg%2F10h%2FwrhyXAa2%2B7Q05WH27KM%2BZiG1%2FfDRwzWmiRyA7%2BVDuLb8f%2FVwGgK9QspMAoDKIrTYYE3JbzNvYAJT8HUOt9AcqEe1NknUCYTpij01K1hmVaRx40ejlHiOGzD3Pnri%2BcsGdrEtRNOnf2YMu94zfxIni7Aoo7UwtfbqywY6pgFq1p7h2kGyhmOlD1xSIghneZ3CAAlNv70Yu%2Foy5rzJ6xk0QzJKw1wmdle5PDpDeKO9tHC6NniTKieDXQX8CM8jar5%2FZs8kOmtWXvz8pJKGrHiYteG4BXTbRsEhpMSXuLHJbwfosi1i0Rj91p9vNXUS5%2BM5d%2BV695%2Ft0Wewu7kvYzfNd3i61dI%2BEcCEOkevtKPgIVjlD2TU%2FqsWCQzRED1gA7%2B8i4tI&X-Amz-Signature=8699ebd46cf58f57fc2d82c29f97416e972bd408bdec569d969ecdf36d1c3347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662VQUBYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEkQW81Ac%2FIn7coZ1zTLSXrU3eD72l%2BO9ViWeCiImPBAiBXzi9Abn91vUzDR7j6iIH6KYI47v%2FAx%2BU1IM5bE8FigSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtITRZMiifT6l3HyYKtwD5qYXTo3tqui%2FIRy%2B0sF%2BUnsB74jgQmZ%2BRqPBMtmrotjhgj7ftHaQNdCaeUE5RdqcOwk2HaY1XtEu9OVQFpwQH%2BTsHCj8q4HcaZWVw38Q78Kq568cdHNkPK%2Fa4eWo1DKy4elXrEfyLsXL3xUcPOm4lzeY8MjQ8UIsfP91hAfsXbmMMYvqkw%2FTcrPns4oxRts2jCljEHjunOYH6Ws%2BAAqzcNPfipAMvm28VAVXKPz0V2VYVq8xuKKl%2Byx%2FjRNEyqX7CLUL54VrBO%2FiIr1GftlNnoVUACHm28UMAvxs%2By4dYQZ3oeRReOUBxKuLSXUQuWQ5%2BN4mWUa%2BZ9UoUS%2F70SdnxM3Ra7Vbi3QTxv664Gnoau9MR5jCGNMArBXJF9qN3X%2FGjxfAQtezaspoGfQQqJRunZfJ%2BWjC7%2FNoKRxAkWFfHcn%2BFk2noRhb9ReycH75WmLzqvZsURMFbKXmbFlCJH2uZmcz%2FTg%2F10h%2FwrhyXAa2%2B7Q05WH27KM%2BZiG1%2FfDRwzWmiRyA7%2BVDuLb8f%2FVwGgK9QspMAoDKIrTYYE3JbzNvYAJT8HUOt9AcqEe1NknUCYTpij01K1hmVaRx40ejlHiOGzD3Pnri%2BcsGdrEtRNOnf2YMu94zfxIni7Aoo7UwtfbqywY6pgFq1p7h2kGyhmOlD1xSIghneZ3CAAlNv70Yu%2Foy5rzJ6xk0QzJKw1wmdle5PDpDeKO9tHC6NniTKieDXQX8CM8jar5%2FZs8kOmtWXvz8pJKGrHiYteG4BXTbRsEhpMSXuLHJbwfosi1i0Rj91p9vNXUS5%2BM5d%2BV695%2Ft0Wewu7kvYzfNd3i61dI%2BEcCEOkevtKPgIVjlD2TU%2FqsWCQzRED1gA7%2B8i4tI&X-Amz-Signature=38282c73988c41e1efe02b72999ddc359fe98efd7e49256568047cf1c7896e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662VQUBYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEkQW81Ac%2FIn7coZ1zTLSXrU3eD72l%2BO9ViWeCiImPBAiBXzi9Abn91vUzDR7j6iIH6KYI47v%2FAx%2BU1IM5bE8FigSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtITRZMiifT6l3HyYKtwD5qYXTo3tqui%2FIRy%2B0sF%2BUnsB74jgQmZ%2BRqPBMtmrotjhgj7ftHaQNdCaeUE5RdqcOwk2HaY1XtEu9OVQFpwQH%2BTsHCj8q4HcaZWVw38Q78Kq568cdHNkPK%2Fa4eWo1DKy4elXrEfyLsXL3xUcPOm4lzeY8MjQ8UIsfP91hAfsXbmMMYvqkw%2FTcrPns4oxRts2jCljEHjunOYH6Ws%2BAAqzcNPfipAMvm28VAVXKPz0V2VYVq8xuKKl%2Byx%2FjRNEyqX7CLUL54VrBO%2FiIr1GftlNnoVUACHm28UMAvxs%2By4dYQZ3oeRReOUBxKuLSXUQuWQ5%2BN4mWUa%2BZ9UoUS%2F70SdnxM3Ra7Vbi3QTxv664Gnoau9MR5jCGNMArBXJF9qN3X%2FGjxfAQtezaspoGfQQqJRunZfJ%2BWjC7%2FNoKRxAkWFfHcn%2BFk2noRhb9ReycH75WmLzqvZsURMFbKXmbFlCJH2uZmcz%2FTg%2F10h%2FwrhyXAa2%2B7Q05WH27KM%2BZiG1%2FfDRwzWmiRyA7%2BVDuLb8f%2FVwGgK9QspMAoDKIrTYYE3JbzNvYAJT8HUOt9AcqEe1NknUCYTpij01K1hmVaRx40ejlHiOGzD3Pnri%2BcsGdrEtRNOnf2YMu94zfxIni7Aoo7UwtfbqywY6pgFq1p7h2kGyhmOlD1xSIghneZ3CAAlNv70Yu%2Foy5rzJ6xk0QzJKw1wmdle5PDpDeKO9tHC6NniTKieDXQX8CM8jar5%2FZs8kOmtWXvz8pJKGrHiYteG4BXTbRsEhpMSXuLHJbwfosi1i0Rj91p9vNXUS5%2BM5d%2BV695%2Ft0Wewu7kvYzfNd3i61dI%2BEcCEOkevtKPgIVjlD2TU%2FqsWCQzRED1gA7%2B8i4tI&X-Amz-Signature=6fc7d29f1d7e13e47f5e562ef7bbff18270e32e61e6e7699eef803921e86a666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
