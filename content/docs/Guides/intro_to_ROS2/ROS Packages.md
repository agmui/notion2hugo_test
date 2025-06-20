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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HYFQAWY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FQDaNnHdV8ziRvTeKol86iVjnNL%2Byxw4OQiLNK0DaTAiB25Op%2BC5DBnr3OwSQ6QrLZSW966SZH2plM0%2ByO0gFl%2BiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYyKkRGbIGAQ7o5G%2BKtwDVTO95nciH0PmSWd%2BhuoFm5F1SN75GGTe0ShXGcry7FsEx2LVJKiEL0ZFf3bAXLKXrnQ2EMHSRvqpfGX5kb39O6HqAk8wfzwsaWlzUtzIgt%2BQyeH3bJPubVBxD4Rou7DjQ5Uy8gg%2FZ8Bx%2BLeIE7KD2ZRrkVJPpVi%2F6np3IySut8oDD0CWTdx2LrZRHjRZ1Po29EwFglY%2BfI45CjveG99%2BrJ9MRrcQ6D35XgpBairksGfWggc65JnwaP3%2F%2FZIH68QR6OlgvXhbEk7Pw1WKOi7NcnsiB4J5EpKeOGWlrvOl9MzNQB8ULQy5ndqyxjp4CfBY64GkHyKTSzcMh9YQ7FewWRf8GX9scy164CxUcgmETZpV9e5W%2FV6MWkKkFhDgVtz32Sk8C%2BvwkXieRuTLNj%2FV9CfRiGP9Uj1t3Y0aroaug0l8h%2FrmwR%2FY1GPLsQr1jxk%2F1TCkHPbLSV4ZwhdxhUZVbjDNXlKCS4TIF1ojMDZviustnwH1SDhaqRB9XVwNv%2BIKJUKwP1zG84Am3AQ1d4CQiiXbq9g%2Fi1NM1UDD7d%2BFCSvq1OfocHw1g6DU1NAgh%2BtnA%2FA5I92UfEay1bnrlUm%2FQZHEYdD6fmYL55HiSPXtBENYTzK%2BXQ%2BQjTGtFpUw0dXSwgY6pgGF2rsLN1LHu3B1CUvySR4Isqe75C2tY9cARbL%2B7klE%2BraKF8yLYorQ9r6sahRFXoYdWcS57aqQoN9YRmQEyMnC%2FjwT1m8rG3ux84pJTKrVB0n1oZJlICFKf09ryH4IalJ2CdLeBsPdKJQ0HHhpVHQmUtvqqxOXEHrOHuogwbugiA%2F6TmG09dJSSXESBHVM6v2%2BcmhwIrBiy0Cc4%2Fbpx7I0%2BT4mvfVv&X-Amz-Signature=14359b395e0125d086f59e2d2480ac298aa4ec4e79e5000b6b38659961c96ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HYFQAWY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FQDaNnHdV8ziRvTeKol86iVjnNL%2Byxw4OQiLNK0DaTAiB25Op%2BC5DBnr3OwSQ6QrLZSW966SZH2plM0%2ByO0gFl%2BiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYyKkRGbIGAQ7o5G%2BKtwDVTO95nciH0PmSWd%2BhuoFm5F1SN75GGTe0ShXGcry7FsEx2LVJKiEL0ZFf3bAXLKXrnQ2EMHSRvqpfGX5kb39O6HqAk8wfzwsaWlzUtzIgt%2BQyeH3bJPubVBxD4Rou7DjQ5Uy8gg%2FZ8Bx%2BLeIE7KD2ZRrkVJPpVi%2F6np3IySut8oDD0CWTdx2LrZRHjRZ1Po29EwFglY%2BfI45CjveG99%2BrJ9MRrcQ6D35XgpBairksGfWggc65JnwaP3%2F%2FZIH68QR6OlgvXhbEk7Pw1WKOi7NcnsiB4J5EpKeOGWlrvOl9MzNQB8ULQy5ndqyxjp4CfBY64GkHyKTSzcMh9YQ7FewWRf8GX9scy164CxUcgmETZpV9e5W%2FV6MWkKkFhDgVtz32Sk8C%2BvwkXieRuTLNj%2FV9CfRiGP9Uj1t3Y0aroaug0l8h%2FrmwR%2FY1GPLsQr1jxk%2F1TCkHPbLSV4ZwhdxhUZVbjDNXlKCS4TIF1ojMDZviustnwH1SDhaqRB9XVwNv%2BIKJUKwP1zG84Am3AQ1d4CQiiXbq9g%2Fi1NM1UDD7d%2BFCSvq1OfocHw1g6DU1NAgh%2BtnA%2FA5I92UfEay1bnrlUm%2FQZHEYdD6fmYL55HiSPXtBENYTzK%2BXQ%2BQjTGtFpUw0dXSwgY6pgGF2rsLN1LHu3B1CUvySR4Isqe75C2tY9cARbL%2B7klE%2BraKF8yLYorQ9r6sahRFXoYdWcS57aqQoN9YRmQEyMnC%2FjwT1m8rG3ux84pJTKrVB0n1oZJlICFKf09ryH4IalJ2CdLeBsPdKJQ0HHhpVHQmUtvqqxOXEHrOHuogwbugiA%2F6TmG09dJSSXESBHVM6v2%2BcmhwIrBiy0Cc4%2Fbpx7I0%2BT4mvfVv&X-Amz-Signature=e3fe3d4ad42127c40bd6e234ad482290e50edb3cf9bc7a47d679e9f3c4d6b1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HYFQAWY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FQDaNnHdV8ziRvTeKol86iVjnNL%2Byxw4OQiLNK0DaTAiB25Op%2BC5DBnr3OwSQ6QrLZSW966SZH2plM0%2ByO0gFl%2BiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYyKkRGbIGAQ7o5G%2BKtwDVTO95nciH0PmSWd%2BhuoFm5F1SN75GGTe0ShXGcry7FsEx2LVJKiEL0ZFf3bAXLKXrnQ2EMHSRvqpfGX5kb39O6HqAk8wfzwsaWlzUtzIgt%2BQyeH3bJPubVBxD4Rou7DjQ5Uy8gg%2FZ8Bx%2BLeIE7KD2ZRrkVJPpVi%2F6np3IySut8oDD0CWTdx2LrZRHjRZ1Po29EwFglY%2BfI45CjveG99%2BrJ9MRrcQ6D35XgpBairksGfWggc65JnwaP3%2F%2FZIH68QR6OlgvXhbEk7Pw1WKOi7NcnsiB4J5EpKeOGWlrvOl9MzNQB8ULQy5ndqyxjp4CfBY64GkHyKTSzcMh9YQ7FewWRf8GX9scy164CxUcgmETZpV9e5W%2FV6MWkKkFhDgVtz32Sk8C%2BvwkXieRuTLNj%2FV9CfRiGP9Uj1t3Y0aroaug0l8h%2FrmwR%2FY1GPLsQr1jxk%2F1TCkHPbLSV4ZwhdxhUZVbjDNXlKCS4TIF1ojMDZviustnwH1SDhaqRB9XVwNv%2BIKJUKwP1zG84Am3AQ1d4CQiiXbq9g%2Fi1NM1UDD7d%2BFCSvq1OfocHw1g6DU1NAgh%2BtnA%2FA5I92UfEay1bnrlUm%2FQZHEYdD6fmYL55HiSPXtBENYTzK%2BXQ%2BQjTGtFpUw0dXSwgY6pgGF2rsLN1LHu3B1CUvySR4Isqe75C2tY9cARbL%2B7klE%2BraKF8yLYorQ9r6sahRFXoYdWcS57aqQoN9YRmQEyMnC%2FjwT1m8rG3ux84pJTKrVB0n1oZJlICFKf09ryH4IalJ2CdLeBsPdKJQ0HHhpVHQmUtvqqxOXEHrOHuogwbugiA%2F6TmG09dJSSXESBHVM6v2%2BcmhwIrBiy0Cc4%2Fbpx7I0%2BT4mvfVv&X-Amz-Signature=8e790140eebe2b8845612130029e394302cd14136a779d36b9b9a621ae13af37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HYFQAWY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FQDaNnHdV8ziRvTeKol86iVjnNL%2Byxw4OQiLNK0DaTAiB25Op%2BC5DBnr3OwSQ6QrLZSW966SZH2plM0%2ByO0gFl%2BiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYyKkRGbIGAQ7o5G%2BKtwDVTO95nciH0PmSWd%2BhuoFm5F1SN75GGTe0ShXGcry7FsEx2LVJKiEL0ZFf3bAXLKXrnQ2EMHSRvqpfGX5kb39O6HqAk8wfzwsaWlzUtzIgt%2BQyeH3bJPubVBxD4Rou7DjQ5Uy8gg%2FZ8Bx%2BLeIE7KD2ZRrkVJPpVi%2F6np3IySut8oDD0CWTdx2LrZRHjRZ1Po29EwFglY%2BfI45CjveG99%2BrJ9MRrcQ6D35XgpBairksGfWggc65JnwaP3%2F%2FZIH68QR6OlgvXhbEk7Pw1WKOi7NcnsiB4J5EpKeOGWlrvOl9MzNQB8ULQy5ndqyxjp4CfBY64GkHyKTSzcMh9YQ7FewWRf8GX9scy164CxUcgmETZpV9e5W%2FV6MWkKkFhDgVtz32Sk8C%2BvwkXieRuTLNj%2FV9CfRiGP9Uj1t3Y0aroaug0l8h%2FrmwR%2FY1GPLsQr1jxk%2F1TCkHPbLSV4ZwhdxhUZVbjDNXlKCS4TIF1ojMDZviustnwH1SDhaqRB9XVwNv%2BIKJUKwP1zG84Am3AQ1d4CQiiXbq9g%2Fi1NM1UDD7d%2BFCSvq1OfocHw1g6DU1NAgh%2BtnA%2FA5I92UfEay1bnrlUm%2FQZHEYdD6fmYL55HiSPXtBENYTzK%2BXQ%2BQjTGtFpUw0dXSwgY6pgGF2rsLN1LHu3B1CUvySR4Isqe75C2tY9cARbL%2B7klE%2BraKF8yLYorQ9r6sahRFXoYdWcS57aqQoN9YRmQEyMnC%2FjwT1m8rG3ux84pJTKrVB0n1oZJlICFKf09ryH4IalJ2CdLeBsPdKJQ0HHhpVHQmUtvqqxOXEHrOHuogwbugiA%2F6TmG09dJSSXESBHVM6v2%2BcmhwIrBiy0Cc4%2Fbpx7I0%2BT4mvfVv&X-Amz-Signature=586e4459c2b66d00b4502f8f12173bfe0c010e3f762134eedef0536e1f3789b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HYFQAWY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FQDaNnHdV8ziRvTeKol86iVjnNL%2Byxw4OQiLNK0DaTAiB25Op%2BC5DBnr3OwSQ6QrLZSW966SZH2plM0%2ByO0gFl%2BiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYyKkRGbIGAQ7o5G%2BKtwDVTO95nciH0PmSWd%2BhuoFm5F1SN75GGTe0ShXGcry7FsEx2LVJKiEL0ZFf3bAXLKXrnQ2EMHSRvqpfGX5kb39O6HqAk8wfzwsaWlzUtzIgt%2BQyeH3bJPubVBxD4Rou7DjQ5Uy8gg%2FZ8Bx%2BLeIE7KD2ZRrkVJPpVi%2F6np3IySut8oDD0CWTdx2LrZRHjRZ1Po29EwFglY%2BfI45CjveG99%2BrJ9MRrcQ6D35XgpBairksGfWggc65JnwaP3%2F%2FZIH68QR6OlgvXhbEk7Pw1WKOi7NcnsiB4J5EpKeOGWlrvOl9MzNQB8ULQy5ndqyxjp4CfBY64GkHyKTSzcMh9YQ7FewWRf8GX9scy164CxUcgmETZpV9e5W%2FV6MWkKkFhDgVtz32Sk8C%2BvwkXieRuTLNj%2FV9CfRiGP9Uj1t3Y0aroaug0l8h%2FrmwR%2FY1GPLsQr1jxk%2F1TCkHPbLSV4ZwhdxhUZVbjDNXlKCS4TIF1ojMDZviustnwH1SDhaqRB9XVwNv%2BIKJUKwP1zG84Am3AQ1d4CQiiXbq9g%2Fi1NM1UDD7d%2BFCSvq1OfocHw1g6DU1NAgh%2BtnA%2FA5I92UfEay1bnrlUm%2FQZHEYdD6fmYL55HiSPXtBENYTzK%2BXQ%2BQjTGtFpUw0dXSwgY6pgGF2rsLN1LHu3B1CUvySR4Isqe75C2tY9cARbL%2B7klE%2BraKF8yLYorQ9r6sahRFXoYdWcS57aqQoN9YRmQEyMnC%2FjwT1m8rG3ux84pJTKrVB0n1oZJlICFKf09ryH4IalJ2CdLeBsPdKJQ0HHhpVHQmUtvqqxOXEHrOHuogwbugiA%2F6TmG09dJSSXESBHVM6v2%2BcmhwIrBiy0Cc4%2Fbpx7I0%2BT4mvfVv&X-Amz-Signature=eb18737e6949384e125fe44816fbdd0995b70f445ccf9662f9a0f9a62630ce88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HYFQAWY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FQDaNnHdV8ziRvTeKol86iVjnNL%2Byxw4OQiLNK0DaTAiB25Op%2BC5DBnr3OwSQ6QrLZSW966SZH2plM0%2ByO0gFl%2BiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYyKkRGbIGAQ7o5G%2BKtwDVTO95nciH0PmSWd%2BhuoFm5F1SN75GGTe0ShXGcry7FsEx2LVJKiEL0ZFf3bAXLKXrnQ2EMHSRvqpfGX5kb39O6HqAk8wfzwsaWlzUtzIgt%2BQyeH3bJPubVBxD4Rou7DjQ5Uy8gg%2FZ8Bx%2BLeIE7KD2ZRrkVJPpVi%2F6np3IySut8oDD0CWTdx2LrZRHjRZ1Po29EwFglY%2BfI45CjveG99%2BrJ9MRrcQ6D35XgpBairksGfWggc65JnwaP3%2F%2FZIH68QR6OlgvXhbEk7Pw1WKOi7NcnsiB4J5EpKeOGWlrvOl9MzNQB8ULQy5ndqyxjp4CfBY64GkHyKTSzcMh9YQ7FewWRf8GX9scy164CxUcgmETZpV9e5W%2FV6MWkKkFhDgVtz32Sk8C%2BvwkXieRuTLNj%2FV9CfRiGP9Uj1t3Y0aroaug0l8h%2FrmwR%2FY1GPLsQr1jxk%2F1TCkHPbLSV4ZwhdxhUZVbjDNXlKCS4TIF1ojMDZviustnwH1SDhaqRB9XVwNv%2BIKJUKwP1zG84Am3AQ1d4CQiiXbq9g%2Fi1NM1UDD7d%2BFCSvq1OfocHw1g6DU1NAgh%2BtnA%2FA5I92UfEay1bnrlUm%2FQZHEYdD6fmYL55HiSPXtBENYTzK%2BXQ%2BQjTGtFpUw0dXSwgY6pgGF2rsLN1LHu3B1CUvySR4Isqe75C2tY9cARbL%2B7klE%2BraKF8yLYorQ9r6sahRFXoYdWcS57aqQoN9YRmQEyMnC%2FjwT1m8rG3ux84pJTKrVB0n1oZJlICFKf09ryH4IalJ2CdLeBsPdKJQ0HHhpVHQmUtvqqxOXEHrOHuogwbugiA%2F6TmG09dJSSXESBHVM6v2%2BcmhwIrBiy0Cc4%2Fbpx7I0%2BT4mvfVv&X-Amz-Signature=03dbe43738587c315541e8f2d1a64e8962910c8f4b6b2bf7fdb65a81fdd7a536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HYFQAWY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FQDaNnHdV8ziRvTeKol86iVjnNL%2Byxw4OQiLNK0DaTAiB25Op%2BC5DBnr3OwSQ6QrLZSW966SZH2plM0%2ByO0gFl%2BiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYyKkRGbIGAQ7o5G%2BKtwDVTO95nciH0PmSWd%2BhuoFm5F1SN75GGTe0ShXGcry7FsEx2LVJKiEL0ZFf3bAXLKXrnQ2EMHSRvqpfGX5kb39O6HqAk8wfzwsaWlzUtzIgt%2BQyeH3bJPubVBxD4Rou7DjQ5Uy8gg%2FZ8Bx%2BLeIE7KD2ZRrkVJPpVi%2F6np3IySut8oDD0CWTdx2LrZRHjRZ1Po29EwFglY%2BfI45CjveG99%2BrJ9MRrcQ6D35XgpBairksGfWggc65JnwaP3%2F%2FZIH68QR6OlgvXhbEk7Pw1WKOi7NcnsiB4J5EpKeOGWlrvOl9MzNQB8ULQy5ndqyxjp4CfBY64GkHyKTSzcMh9YQ7FewWRf8GX9scy164CxUcgmETZpV9e5W%2FV6MWkKkFhDgVtz32Sk8C%2BvwkXieRuTLNj%2FV9CfRiGP9Uj1t3Y0aroaug0l8h%2FrmwR%2FY1GPLsQr1jxk%2F1TCkHPbLSV4ZwhdxhUZVbjDNXlKCS4TIF1ojMDZviustnwH1SDhaqRB9XVwNv%2BIKJUKwP1zG84Am3AQ1d4CQiiXbq9g%2Fi1NM1UDD7d%2BFCSvq1OfocHw1g6DU1NAgh%2BtnA%2FA5I92UfEay1bnrlUm%2FQZHEYdD6fmYL55HiSPXtBENYTzK%2BXQ%2BQjTGtFpUw0dXSwgY6pgGF2rsLN1LHu3B1CUvySR4Isqe75C2tY9cARbL%2B7klE%2BraKF8yLYorQ9r6sahRFXoYdWcS57aqQoN9YRmQEyMnC%2FjwT1m8rG3ux84pJTKrVB0n1oZJlICFKf09ryH4IalJ2CdLeBsPdKJQ0HHhpVHQmUtvqqxOXEHrOHuogwbugiA%2F6TmG09dJSSXESBHVM6v2%2BcmhwIrBiy0Cc4%2Fbpx7I0%2BT4mvfVv&X-Amz-Signature=f578652c1554df5ad5927e4c61f2e88b1b009514e8c92e6e1bf9642eddb25a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
