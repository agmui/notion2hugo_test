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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QX75FX7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDhXFHucPd78jFEAQf6teRkmtwNUuZbCSt6Plwzxxim1AiAjffJ92g6ahga82gNdO8gk%2B5h8%2BX01wA5jkwhWkOIUFiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTnC7mYP1s26WmDtKtwDne1YK5%2BhKA5kP6KbXtdJUYX5SwH6tldMHhSf67f1s%2FqeWv66j1NZXc8wgibKRDaXdjlMEgDuxbB8cvXqByjsqXDfbX5S%2BOdHmDwJMeXOUpNIxg%2Bgu5Fg5jOCLb0EYbmwLaqd%2FiMqJDf4Yy4vzOQHeFUfZMu0QWrKepmyhUyOPTlMFLLY6JWyCIEycDiNm8mW7MGLfz%2Bgqq3NYK9BOFUAYIvgLGstp%2BkiROacLn%2Fmjc5IbIIXq7SCAPABPSTk6ZIBVTmJpkrcKIRrh0LItd3eB7mmgJkNpJB4WTZNkILbuGTZqaUf47yI42PW8vcwXGsrdTy0FcBiAPDQuhHIKPinBgVGbNRdJdSPLPRmA%2BJM%2BfA4zWKxx40Au68hVTZk6a8%2FqCrYNMCcVhsEwjGaplm0m0O2QoUe%2BWdmKrbPnvPfI0JUeBS4U7Xejc80e5pgxZOgV8wAj7iLMWM2RumC6ecaGnrBtEQw%2B4A92YCz6ecMOEOaelHDaoBQrkyQa67CnFIMN6VIAHjsL38oZK9iI4%2BWJ%2BnOTcyPjFdSb96AUerGDWaRliG%2Fk83ZfMadfEqEAP%2Bw67JcPmdYOIG21qcF1sEklJEIUdhHtNDlud1Sp9hwAKbmF9lL8cYTJeiDI4Ywkfu4vgY6pgFw5%2F4SuET9AGD1jOaPx6a52CYhERVOTRIwrPkIIT6Vh60b4ZQys1qpxpSvbyxiyOGjFxqt1J04mVZdi5PNqMTDwJSDy09Y80jQkQ%2FQGPA5kfy91xb%2Fp0bDz3ASeoDfdeWICwGsdk57Ou2NyMhPGfOaEufflzuihqHwmsB3LEs1i%2FlmXuILnOh%2Bn0Y4oHxKEqNyr8za63GrwZdH%2BcVMZrJv5NH7C86U&X-Amz-Signature=6cecd78ffa007f6eb5f93ce82bace050b2462f3770ba561c7e519b273ee2ec09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QX75FX7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDhXFHucPd78jFEAQf6teRkmtwNUuZbCSt6Plwzxxim1AiAjffJ92g6ahga82gNdO8gk%2B5h8%2BX01wA5jkwhWkOIUFiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTnC7mYP1s26WmDtKtwDne1YK5%2BhKA5kP6KbXtdJUYX5SwH6tldMHhSf67f1s%2FqeWv66j1NZXc8wgibKRDaXdjlMEgDuxbB8cvXqByjsqXDfbX5S%2BOdHmDwJMeXOUpNIxg%2Bgu5Fg5jOCLb0EYbmwLaqd%2FiMqJDf4Yy4vzOQHeFUfZMu0QWrKepmyhUyOPTlMFLLY6JWyCIEycDiNm8mW7MGLfz%2Bgqq3NYK9BOFUAYIvgLGstp%2BkiROacLn%2Fmjc5IbIIXq7SCAPABPSTk6ZIBVTmJpkrcKIRrh0LItd3eB7mmgJkNpJB4WTZNkILbuGTZqaUf47yI42PW8vcwXGsrdTy0FcBiAPDQuhHIKPinBgVGbNRdJdSPLPRmA%2BJM%2BfA4zWKxx40Au68hVTZk6a8%2FqCrYNMCcVhsEwjGaplm0m0O2QoUe%2BWdmKrbPnvPfI0JUeBS4U7Xejc80e5pgxZOgV8wAj7iLMWM2RumC6ecaGnrBtEQw%2B4A92YCz6ecMOEOaelHDaoBQrkyQa67CnFIMN6VIAHjsL38oZK9iI4%2BWJ%2BnOTcyPjFdSb96AUerGDWaRliG%2Fk83ZfMadfEqEAP%2Bw67JcPmdYOIG21qcF1sEklJEIUdhHtNDlud1Sp9hwAKbmF9lL8cYTJeiDI4Ywkfu4vgY6pgFw5%2F4SuET9AGD1jOaPx6a52CYhERVOTRIwrPkIIT6Vh60b4ZQys1qpxpSvbyxiyOGjFxqt1J04mVZdi5PNqMTDwJSDy09Y80jQkQ%2FQGPA5kfy91xb%2Fp0bDz3ASeoDfdeWICwGsdk57Ou2NyMhPGfOaEufflzuihqHwmsB3LEs1i%2FlmXuILnOh%2Bn0Y4oHxKEqNyr8za63GrwZdH%2BcVMZrJv5NH7C86U&X-Amz-Signature=6b89b210cb4e00339e32097cc560334a4fec201c787de80fa5e7aea876a6fdba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QX75FX7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDhXFHucPd78jFEAQf6teRkmtwNUuZbCSt6Plwzxxim1AiAjffJ92g6ahga82gNdO8gk%2B5h8%2BX01wA5jkwhWkOIUFiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTnC7mYP1s26WmDtKtwDne1YK5%2BhKA5kP6KbXtdJUYX5SwH6tldMHhSf67f1s%2FqeWv66j1NZXc8wgibKRDaXdjlMEgDuxbB8cvXqByjsqXDfbX5S%2BOdHmDwJMeXOUpNIxg%2Bgu5Fg5jOCLb0EYbmwLaqd%2FiMqJDf4Yy4vzOQHeFUfZMu0QWrKepmyhUyOPTlMFLLY6JWyCIEycDiNm8mW7MGLfz%2Bgqq3NYK9BOFUAYIvgLGstp%2BkiROacLn%2Fmjc5IbIIXq7SCAPABPSTk6ZIBVTmJpkrcKIRrh0LItd3eB7mmgJkNpJB4WTZNkILbuGTZqaUf47yI42PW8vcwXGsrdTy0FcBiAPDQuhHIKPinBgVGbNRdJdSPLPRmA%2BJM%2BfA4zWKxx40Au68hVTZk6a8%2FqCrYNMCcVhsEwjGaplm0m0O2QoUe%2BWdmKrbPnvPfI0JUeBS4U7Xejc80e5pgxZOgV8wAj7iLMWM2RumC6ecaGnrBtEQw%2B4A92YCz6ecMOEOaelHDaoBQrkyQa67CnFIMN6VIAHjsL38oZK9iI4%2BWJ%2BnOTcyPjFdSb96AUerGDWaRliG%2Fk83ZfMadfEqEAP%2Bw67JcPmdYOIG21qcF1sEklJEIUdhHtNDlud1Sp9hwAKbmF9lL8cYTJeiDI4Ywkfu4vgY6pgFw5%2F4SuET9AGD1jOaPx6a52CYhERVOTRIwrPkIIT6Vh60b4ZQys1qpxpSvbyxiyOGjFxqt1J04mVZdi5PNqMTDwJSDy09Y80jQkQ%2FQGPA5kfy91xb%2Fp0bDz3ASeoDfdeWICwGsdk57Ou2NyMhPGfOaEufflzuihqHwmsB3LEs1i%2FlmXuILnOh%2Bn0Y4oHxKEqNyr8za63GrwZdH%2BcVMZrJv5NH7C86U&X-Amz-Signature=123b481196c2d512df0c9196fe0daa5972735e006285e367f6c5e8349d3cc041&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QX75FX7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDhXFHucPd78jFEAQf6teRkmtwNUuZbCSt6Plwzxxim1AiAjffJ92g6ahga82gNdO8gk%2B5h8%2BX01wA5jkwhWkOIUFiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTnC7mYP1s26WmDtKtwDne1YK5%2BhKA5kP6KbXtdJUYX5SwH6tldMHhSf67f1s%2FqeWv66j1NZXc8wgibKRDaXdjlMEgDuxbB8cvXqByjsqXDfbX5S%2BOdHmDwJMeXOUpNIxg%2Bgu5Fg5jOCLb0EYbmwLaqd%2FiMqJDf4Yy4vzOQHeFUfZMu0QWrKepmyhUyOPTlMFLLY6JWyCIEycDiNm8mW7MGLfz%2Bgqq3NYK9BOFUAYIvgLGstp%2BkiROacLn%2Fmjc5IbIIXq7SCAPABPSTk6ZIBVTmJpkrcKIRrh0LItd3eB7mmgJkNpJB4WTZNkILbuGTZqaUf47yI42PW8vcwXGsrdTy0FcBiAPDQuhHIKPinBgVGbNRdJdSPLPRmA%2BJM%2BfA4zWKxx40Au68hVTZk6a8%2FqCrYNMCcVhsEwjGaplm0m0O2QoUe%2BWdmKrbPnvPfI0JUeBS4U7Xejc80e5pgxZOgV8wAj7iLMWM2RumC6ecaGnrBtEQw%2B4A92YCz6ecMOEOaelHDaoBQrkyQa67CnFIMN6VIAHjsL38oZK9iI4%2BWJ%2BnOTcyPjFdSb96AUerGDWaRliG%2Fk83ZfMadfEqEAP%2Bw67JcPmdYOIG21qcF1sEklJEIUdhHtNDlud1Sp9hwAKbmF9lL8cYTJeiDI4Ywkfu4vgY6pgFw5%2F4SuET9AGD1jOaPx6a52CYhERVOTRIwrPkIIT6Vh60b4ZQys1qpxpSvbyxiyOGjFxqt1J04mVZdi5PNqMTDwJSDy09Y80jQkQ%2FQGPA5kfy91xb%2Fp0bDz3ASeoDfdeWICwGsdk57Ou2NyMhPGfOaEufflzuihqHwmsB3LEs1i%2FlmXuILnOh%2Bn0Y4oHxKEqNyr8za63GrwZdH%2BcVMZrJv5NH7C86U&X-Amz-Signature=8c8bec2c7fb2abdab2d1c934b02e22f961169ac7c963317763c3d6174b14cb04&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QX75FX7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDhXFHucPd78jFEAQf6teRkmtwNUuZbCSt6Plwzxxim1AiAjffJ92g6ahga82gNdO8gk%2B5h8%2BX01wA5jkwhWkOIUFiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTnC7mYP1s26WmDtKtwDne1YK5%2BhKA5kP6KbXtdJUYX5SwH6tldMHhSf67f1s%2FqeWv66j1NZXc8wgibKRDaXdjlMEgDuxbB8cvXqByjsqXDfbX5S%2BOdHmDwJMeXOUpNIxg%2Bgu5Fg5jOCLb0EYbmwLaqd%2FiMqJDf4Yy4vzOQHeFUfZMu0QWrKepmyhUyOPTlMFLLY6JWyCIEycDiNm8mW7MGLfz%2Bgqq3NYK9BOFUAYIvgLGstp%2BkiROacLn%2Fmjc5IbIIXq7SCAPABPSTk6ZIBVTmJpkrcKIRrh0LItd3eB7mmgJkNpJB4WTZNkILbuGTZqaUf47yI42PW8vcwXGsrdTy0FcBiAPDQuhHIKPinBgVGbNRdJdSPLPRmA%2BJM%2BfA4zWKxx40Au68hVTZk6a8%2FqCrYNMCcVhsEwjGaplm0m0O2QoUe%2BWdmKrbPnvPfI0JUeBS4U7Xejc80e5pgxZOgV8wAj7iLMWM2RumC6ecaGnrBtEQw%2B4A92YCz6ecMOEOaelHDaoBQrkyQa67CnFIMN6VIAHjsL38oZK9iI4%2BWJ%2BnOTcyPjFdSb96AUerGDWaRliG%2Fk83ZfMadfEqEAP%2Bw67JcPmdYOIG21qcF1sEklJEIUdhHtNDlud1Sp9hwAKbmF9lL8cYTJeiDI4Ywkfu4vgY6pgFw5%2F4SuET9AGD1jOaPx6a52CYhERVOTRIwrPkIIT6Vh60b4ZQys1qpxpSvbyxiyOGjFxqt1J04mVZdi5PNqMTDwJSDy09Y80jQkQ%2FQGPA5kfy91xb%2Fp0bDz3ASeoDfdeWICwGsdk57Ou2NyMhPGfOaEufflzuihqHwmsB3LEs1i%2FlmXuILnOh%2Bn0Y4oHxKEqNyr8za63GrwZdH%2BcVMZrJv5NH7C86U&X-Amz-Signature=3ace00fecb47755062730afc8416c8f1ede87499475b9bccc10ded7803a6c0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QX75FX7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDhXFHucPd78jFEAQf6teRkmtwNUuZbCSt6Plwzxxim1AiAjffJ92g6ahga82gNdO8gk%2B5h8%2BX01wA5jkwhWkOIUFiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTnC7mYP1s26WmDtKtwDne1YK5%2BhKA5kP6KbXtdJUYX5SwH6tldMHhSf67f1s%2FqeWv66j1NZXc8wgibKRDaXdjlMEgDuxbB8cvXqByjsqXDfbX5S%2BOdHmDwJMeXOUpNIxg%2Bgu5Fg5jOCLb0EYbmwLaqd%2FiMqJDf4Yy4vzOQHeFUfZMu0QWrKepmyhUyOPTlMFLLY6JWyCIEycDiNm8mW7MGLfz%2Bgqq3NYK9BOFUAYIvgLGstp%2BkiROacLn%2Fmjc5IbIIXq7SCAPABPSTk6ZIBVTmJpkrcKIRrh0LItd3eB7mmgJkNpJB4WTZNkILbuGTZqaUf47yI42PW8vcwXGsrdTy0FcBiAPDQuhHIKPinBgVGbNRdJdSPLPRmA%2BJM%2BfA4zWKxx40Au68hVTZk6a8%2FqCrYNMCcVhsEwjGaplm0m0O2QoUe%2BWdmKrbPnvPfI0JUeBS4U7Xejc80e5pgxZOgV8wAj7iLMWM2RumC6ecaGnrBtEQw%2B4A92YCz6ecMOEOaelHDaoBQrkyQa67CnFIMN6VIAHjsL38oZK9iI4%2BWJ%2BnOTcyPjFdSb96AUerGDWaRliG%2Fk83ZfMadfEqEAP%2Bw67JcPmdYOIG21qcF1sEklJEIUdhHtNDlud1Sp9hwAKbmF9lL8cYTJeiDI4Ywkfu4vgY6pgFw5%2F4SuET9AGD1jOaPx6a52CYhERVOTRIwrPkIIT6Vh60b4ZQys1qpxpSvbyxiyOGjFxqt1J04mVZdi5PNqMTDwJSDy09Y80jQkQ%2FQGPA5kfy91xb%2Fp0bDz3ASeoDfdeWICwGsdk57Ou2NyMhPGfOaEufflzuihqHwmsB3LEs1i%2FlmXuILnOh%2Bn0Y4oHxKEqNyr8za63GrwZdH%2BcVMZrJv5NH7C86U&X-Amz-Signature=6b01d7d4ec926df2de29891fb2bfe9f323208fc623f5788beb09f6c7fc4e7142&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QX75FX7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDhXFHucPd78jFEAQf6teRkmtwNUuZbCSt6Plwzxxim1AiAjffJ92g6ahga82gNdO8gk%2B5h8%2BX01wA5jkwhWkOIUFiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTnC7mYP1s26WmDtKtwDne1YK5%2BhKA5kP6KbXtdJUYX5SwH6tldMHhSf67f1s%2FqeWv66j1NZXc8wgibKRDaXdjlMEgDuxbB8cvXqByjsqXDfbX5S%2BOdHmDwJMeXOUpNIxg%2Bgu5Fg5jOCLb0EYbmwLaqd%2FiMqJDf4Yy4vzOQHeFUfZMu0QWrKepmyhUyOPTlMFLLY6JWyCIEycDiNm8mW7MGLfz%2Bgqq3NYK9BOFUAYIvgLGstp%2BkiROacLn%2Fmjc5IbIIXq7SCAPABPSTk6ZIBVTmJpkrcKIRrh0LItd3eB7mmgJkNpJB4WTZNkILbuGTZqaUf47yI42PW8vcwXGsrdTy0FcBiAPDQuhHIKPinBgVGbNRdJdSPLPRmA%2BJM%2BfA4zWKxx40Au68hVTZk6a8%2FqCrYNMCcVhsEwjGaplm0m0O2QoUe%2BWdmKrbPnvPfI0JUeBS4U7Xejc80e5pgxZOgV8wAj7iLMWM2RumC6ecaGnrBtEQw%2B4A92YCz6ecMOEOaelHDaoBQrkyQa67CnFIMN6VIAHjsL38oZK9iI4%2BWJ%2BnOTcyPjFdSb96AUerGDWaRliG%2Fk83ZfMadfEqEAP%2Bw67JcPmdYOIG21qcF1sEklJEIUdhHtNDlud1Sp9hwAKbmF9lL8cYTJeiDI4Ywkfu4vgY6pgFw5%2F4SuET9AGD1jOaPx6a52CYhERVOTRIwrPkIIT6Vh60b4ZQys1qpxpSvbyxiyOGjFxqt1J04mVZdi5PNqMTDwJSDy09Y80jQkQ%2FQGPA5kfy91xb%2Fp0bDz3ASeoDfdeWICwGsdk57Ou2NyMhPGfOaEufflzuihqHwmsB3LEs1i%2FlmXuILnOh%2Bn0Y4oHxKEqNyr8za63GrwZdH%2BcVMZrJv5NH7C86U&X-Amz-Signature=526a289e91974cec812863bd8dea25804e9c85aa7f2e8ffc18ddbee359f78e09&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
