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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBDITKT%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0xvrcYlWpGVf6XU3N%2FWYNVjw1DVWrXg3OwNFAx5d%2BQIgA34R8gDD8mscm4dhDEFpIQrr7KMiFJWym%2BfETNoQGAkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jv9ho5HrldEGDLircA%2BnRpZVQ7Uyg9%2F12WZ4fqPB1Hy%2FEn%2Bj4pM4Pnn10QKh%2F9QTvHTm7uI%2FPACj9gnmuZ7uiWyWxr%2F%2Feczj0WWKojszXI1e224V0lCH7PaGsLdt0wift5pnSVpc6hYCYkpIH6WroC%2F0PkeVpCw0g4iL91w%2BI8xiZYRsthRWL9j37xWCpBZDltps3XZEE%2FvMNJH%2B7VQ0ueG%2F%2Fsgzwv2OdJRHKNdTpDTnmc1VYgNmJd9TOil1MjMuXkY1rXR7FibuV9V0EaHiLYOEmOBw12bEokAk4gSIdU4CfQlDZNU%2FF2eo1l6NECH4r%2FLNfohR0YIBVUDIGyI1fURSoSfr7lHltezCLJVBQCrnINngZjzVFTo4BEB0a%2FrCi7Aic9FVoGc6%2BZ2VNwbH%2BeIhArYjVj5WGYmxPW9dW%2FDPxauC0DPqiKaINeBoJFRpE1QC%2B%2FHYH1dzOlB3C1%2B76ay1IHpbeDyv1uysYnOhKYr8Xaxd9Kd7HkNRrYxTSrWPob6%2BmGsZHLnn4zf6Pt8w6g2MRs1alxyiAp%2BHGPXOeL4gIWTggSOGxY8y2EjFD5flYoGo8jUIjQjevc69hZo0z11I9DM8kgeO%2F32RUsmSGA%2B8Ps92RZrpKFx6UCGPIh5fFI%2FYkgYcAAfpLMJvFiMMGOqUBBOGOE0yyWHjpbiZ7Li8jgCNbJNM1MNWJD%2Fm7vwrSgyRk0cPNmfQ%2B%2BA9Gsq6aOxN1MPT9kTJ4gnSFUr6ldxkwoK4ZKW1yiRI4jbcwDXmWM2K0sh%2FD7DJI2FHbj3Y64oNusor5sPWkHrKA88DyUxD%2F9wryyjYxvz9AJaWWos%2FMYiGwZlJB293R9ubgisAITnSIpzuMOrzkyRN06jBOS5c54uQAFQ%2BU&X-Amz-Signature=6a9aea881d84220c3f20f930ac120bc0079a9d80e531bf1553dfea4adf543551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBDITKT%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0xvrcYlWpGVf6XU3N%2FWYNVjw1DVWrXg3OwNFAx5d%2BQIgA34R8gDD8mscm4dhDEFpIQrr7KMiFJWym%2BfETNoQGAkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jv9ho5HrldEGDLircA%2BnRpZVQ7Uyg9%2F12WZ4fqPB1Hy%2FEn%2Bj4pM4Pnn10QKh%2F9QTvHTm7uI%2FPACj9gnmuZ7uiWyWxr%2F%2Feczj0WWKojszXI1e224V0lCH7PaGsLdt0wift5pnSVpc6hYCYkpIH6WroC%2F0PkeVpCw0g4iL91w%2BI8xiZYRsthRWL9j37xWCpBZDltps3XZEE%2FvMNJH%2B7VQ0ueG%2F%2Fsgzwv2OdJRHKNdTpDTnmc1VYgNmJd9TOil1MjMuXkY1rXR7FibuV9V0EaHiLYOEmOBw12bEokAk4gSIdU4CfQlDZNU%2FF2eo1l6NECH4r%2FLNfohR0YIBVUDIGyI1fURSoSfr7lHltezCLJVBQCrnINngZjzVFTo4BEB0a%2FrCi7Aic9FVoGc6%2BZ2VNwbH%2BeIhArYjVj5WGYmxPW9dW%2FDPxauC0DPqiKaINeBoJFRpE1QC%2B%2FHYH1dzOlB3C1%2B76ay1IHpbeDyv1uysYnOhKYr8Xaxd9Kd7HkNRrYxTSrWPob6%2BmGsZHLnn4zf6Pt8w6g2MRs1alxyiAp%2BHGPXOeL4gIWTggSOGxY8y2EjFD5flYoGo8jUIjQjevc69hZo0z11I9DM8kgeO%2F32RUsmSGA%2B8Ps92RZrpKFx6UCGPIh5fFI%2FYkgYcAAfpLMJvFiMMGOqUBBOGOE0yyWHjpbiZ7Li8jgCNbJNM1MNWJD%2Fm7vwrSgyRk0cPNmfQ%2B%2BA9Gsq6aOxN1MPT9kTJ4gnSFUr6ldxkwoK4ZKW1yiRI4jbcwDXmWM2K0sh%2FD7DJI2FHbj3Y64oNusor5sPWkHrKA88DyUxD%2F9wryyjYxvz9AJaWWos%2FMYiGwZlJB293R9ubgisAITnSIpzuMOrzkyRN06jBOS5c54uQAFQ%2BU&X-Amz-Signature=5de6958e6a6d8ae41c59439e31f1f526948cc3134f688a4fe3455f412e677ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBDITKT%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0xvrcYlWpGVf6XU3N%2FWYNVjw1DVWrXg3OwNFAx5d%2BQIgA34R8gDD8mscm4dhDEFpIQrr7KMiFJWym%2BfETNoQGAkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jv9ho5HrldEGDLircA%2BnRpZVQ7Uyg9%2F12WZ4fqPB1Hy%2FEn%2Bj4pM4Pnn10QKh%2F9QTvHTm7uI%2FPACj9gnmuZ7uiWyWxr%2F%2Feczj0WWKojszXI1e224V0lCH7PaGsLdt0wift5pnSVpc6hYCYkpIH6WroC%2F0PkeVpCw0g4iL91w%2BI8xiZYRsthRWL9j37xWCpBZDltps3XZEE%2FvMNJH%2B7VQ0ueG%2F%2Fsgzwv2OdJRHKNdTpDTnmc1VYgNmJd9TOil1MjMuXkY1rXR7FibuV9V0EaHiLYOEmOBw12bEokAk4gSIdU4CfQlDZNU%2FF2eo1l6NECH4r%2FLNfohR0YIBVUDIGyI1fURSoSfr7lHltezCLJVBQCrnINngZjzVFTo4BEB0a%2FrCi7Aic9FVoGc6%2BZ2VNwbH%2BeIhArYjVj5WGYmxPW9dW%2FDPxauC0DPqiKaINeBoJFRpE1QC%2B%2FHYH1dzOlB3C1%2B76ay1IHpbeDyv1uysYnOhKYr8Xaxd9Kd7HkNRrYxTSrWPob6%2BmGsZHLnn4zf6Pt8w6g2MRs1alxyiAp%2BHGPXOeL4gIWTggSOGxY8y2EjFD5flYoGo8jUIjQjevc69hZo0z11I9DM8kgeO%2F32RUsmSGA%2B8Ps92RZrpKFx6UCGPIh5fFI%2FYkgYcAAfpLMJvFiMMGOqUBBOGOE0yyWHjpbiZ7Li8jgCNbJNM1MNWJD%2Fm7vwrSgyRk0cPNmfQ%2B%2BA9Gsq6aOxN1MPT9kTJ4gnSFUr6ldxkwoK4ZKW1yiRI4jbcwDXmWM2K0sh%2FD7DJI2FHbj3Y64oNusor5sPWkHrKA88DyUxD%2F9wryyjYxvz9AJaWWos%2FMYiGwZlJB293R9ubgisAITnSIpzuMOrzkyRN06jBOS5c54uQAFQ%2BU&X-Amz-Signature=6f0d0d4b56f4bf12ebe2ab343ae1e2be1501f74ee8080afd443488cbfb145580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBDITKT%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0xvrcYlWpGVf6XU3N%2FWYNVjw1DVWrXg3OwNFAx5d%2BQIgA34R8gDD8mscm4dhDEFpIQrr7KMiFJWym%2BfETNoQGAkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jv9ho5HrldEGDLircA%2BnRpZVQ7Uyg9%2F12WZ4fqPB1Hy%2FEn%2Bj4pM4Pnn10QKh%2F9QTvHTm7uI%2FPACj9gnmuZ7uiWyWxr%2F%2Feczj0WWKojszXI1e224V0lCH7PaGsLdt0wift5pnSVpc6hYCYkpIH6WroC%2F0PkeVpCw0g4iL91w%2BI8xiZYRsthRWL9j37xWCpBZDltps3XZEE%2FvMNJH%2B7VQ0ueG%2F%2Fsgzwv2OdJRHKNdTpDTnmc1VYgNmJd9TOil1MjMuXkY1rXR7FibuV9V0EaHiLYOEmOBw12bEokAk4gSIdU4CfQlDZNU%2FF2eo1l6NECH4r%2FLNfohR0YIBVUDIGyI1fURSoSfr7lHltezCLJVBQCrnINngZjzVFTo4BEB0a%2FrCi7Aic9FVoGc6%2BZ2VNwbH%2BeIhArYjVj5WGYmxPW9dW%2FDPxauC0DPqiKaINeBoJFRpE1QC%2B%2FHYH1dzOlB3C1%2B76ay1IHpbeDyv1uysYnOhKYr8Xaxd9Kd7HkNRrYxTSrWPob6%2BmGsZHLnn4zf6Pt8w6g2MRs1alxyiAp%2BHGPXOeL4gIWTggSOGxY8y2EjFD5flYoGo8jUIjQjevc69hZo0z11I9DM8kgeO%2F32RUsmSGA%2B8Ps92RZrpKFx6UCGPIh5fFI%2FYkgYcAAfpLMJvFiMMGOqUBBOGOE0yyWHjpbiZ7Li8jgCNbJNM1MNWJD%2Fm7vwrSgyRk0cPNmfQ%2B%2BA9Gsq6aOxN1MPT9kTJ4gnSFUr6ldxkwoK4ZKW1yiRI4jbcwDXmWM2K0sh%2FD7DJI2FHbj3Y64oNusor5sPWkHrKA88DyUxD%2F9wryyjYxvz9AJaWWos%2FMYiGwZlJB293R9ubgisAITnSIpzuMOrzkyRN06jBOS5c54uQAFQ%2BU&X-Amz-Signature=f27708e03a789ea91758862247d9fdb16d2900b93a7c5d655c5d59eb2c7de8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBDITKT%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0xvrcYlWpGVf6XU3N%2FWYNVjw1DVWrXg3OwNFAx5d%2BQIgA34R8gDD8mscm4dhDEFpIQrr7KMiFJWym%2BfETNoQGAkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jv9ho5HrldEGDLircA%2BnRpZVQ7Uyg9%2F12WZ4fqPB1Hy%2FEn%2Bj4pM4Pnn10QKh%2F9QTvHTm7uI%2FPACj9gnmuZ7uiWyWxr%2F%2Feczj0WWKojszXI1e224V0lCH7PaGsLdt0wift5pnSVpc6hYCYkpIH6WroC%2F0PkeVpCw0g4iL91w%2BI8xiZYRsthRWL9j37xWCpBZDltps3XZEE%2FvMNJH%2B7VQ0ueG%2F%2Fsgzwv2OdJRHKNdTpDTnmc1VYgNmJd9TOil1MjMuXkY1rXR7FibuV9V0EaHiLYOEmOBw12bEokAk4gSIdU4CfQlDZNU%2FF2eo1l6NECH4r%2FLNfohR0YIBVUDIGyI1fURSoSfr7lHltezCLJVBQCrnINngZjzVFTo4BEB0a%2FrCi7Aic9FVoGc6%2BZ2VNwbH%2BeIhArYjVj5WGYmxPW9dW%2FDPxauC0DPqiKaINeBoJFRpE1QC%2B%2FHYH1dzOlB3C1%2B76ay1IHpbeDyv1uysYnOhKYr8Xaxd9Kd7HkNRrYxTSrWPob6%2BmGsZHLnn4zf6Pt8w6g2MRs1alxyiAp%2BHGPXOeL4gIWTggSOGxY8y2EjFD5flYoGo8jUIjQjevc69hZo0z11I9DM8kgeO%2F32RUsmSGA%2B8Ps92RZrpKFx6UCGPIh5fFI%2FYkgYcAAfpLMJvFiMMGOqUBBOGOE0yyWHjpbiZ7Li8jgCNbJNM1MNWJD%2Fm7vwrSgyRk0cPNmfQ%2B%2BA9Gsq6aOxN1MPT9kTJ4gnSFUr6ldxkwoK4ZKW1yiRI4jbcwDXmWM2K0sh%2FD7DJI2FHbj3Y64oNusor5sPWkHrKA88DyUxD%2F9wryyjYxvz9AJaWWos%2FMYiGwZlJB293R9ubgisAITnSIpzuMOrzkyRN06jBOS5c54uQAFQ%2BU&X-Amz-Signature=bd9bfbc2c5ffbd5a6676e33a32f225a7e6daf70934242e02d54d2e3f8da2c632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBDITKT%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0xvrcYlWpGVf6XU3N%2FWYNVjw1DVWrXg3OwNFAx5d%2BQIgA34R8gDD8mscm4dhDEFpIQrr7KMiFJWym%2BfETNoQGAkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jv9ho5HrldEGDLircA%2BnRpZVQ7Uyg9%2F12WZ4fqPB1Hy%2FEn%2Bj4pM4Pnn10QKh%2F9QTvHTm7uI%2FPACj9gnmuZ7uiWyWxr%2F%2Feczj0WWKojszXI1e224V0lCH7PaGsLdt0wift5pnSVpc6hYCYkpIH6WroC%2F0PkeVpCw0g4iL91w%2BI8xiZYRsthRWL9j37xWCpBZDltps3XZEE%2FvMNJH%2B7VQ0ueG%2F%2Fsgzwv2OdJRHKNdTpDTnmc1VYgNmJd9TOil1MjMuXkY1rXR7FibuV9V0EaHiLYOEmOBw12bEokAk4gSIdU4CfQlDZNU%2FF2eo1l6NECH4r%2FLNfohR0YIBVUDIGyI1fURSoSfr7lHltezCLJVBQCrnINngZjzVFTo4BEB0a%2FrCi7Aic9FVoGc6%2BZ2VNwbH%2BeIhArYjVj5WGYmxPW9dW%2FDPxauC0DPqiKaINeBoJFRpE1QC%2B%2FHYH1dzOlB3C1%2B76ay1IHpbeDyv1uysYnOhKYr8Xaxd9Kd7HkNRrYxTSrWPob6%2BmGsZHLnn4zf6Pt8w6g2MRs1alxyiAp%2BHGPXOeL4gIWTggSOGxY8y2EjFD5flYoGo8jUIjQjevc69hZo0z11I9DM8kgeO%2F32RUsmSGA%2B8Ps92RZrpKFx6UCGPIh5fFI%2FYkgYcAAfpLMJvFiMMGOqUBBOGOE0yyWHjpbiZ7Li8jgCNbJNM1MNWJD%2Fm7vwrSgyRk0cPNmfQ%2B%2BA9Gsq6aOxN1MPT9kTJ4gnSFUr6ldxkwoK4ZKW1yiRI4jbcwDXmWM2K0sh%2FD7DJI2FHbj3Y64oNusor5sPWkHrKA88DyUxD%2F9wryyjYxvz9AJaWWos%2FMYiGwZlJB293R9ubgisAITnSIpzuMOrzkyRN06jBOS5c54uQAFQ%2BU&X-Amz-Signature=d80b50b608b279cf0c9c5d6889c03c4126eb229cc1f30c7bf271aa479a58c435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBDITKT%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0xvrcYlWpGVf6XU3N%2FWYNVjw1DVWrXg3OwNFAx5d%2BQIgA34R8gDD8mscm4dhDEFpIQrr7KMiFJWym%2BfETNoQGAkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jv9ho5HrldEGDLircA%2BnRpZVQ7Uyg9%2F12WZ4fqPB1Hy%2FEn%2Bj4pM4Pnn10QKh%2F9QTvHTm7uI%2FPACj9gnmuZ7uiWyWxr%2F%2Feczj0WWKojszXI1e224V0lCH7PaGsLdt0wift5pnSVpc6hYCYkpIH6WroC%2F0PkeVpCw0g4iL91w%2BI8xiZYRsthRWL9j37xWCpBZDltps3XZEE%2FvMNJH%2B7VQ0ueG%2F%2Fsgzwv2OdJRHKNdTpDTnmc1VYgNmJd9TOil1MjMuXkY1rXR7FibuV9V0EaHiLYOEmOBw12bEokAk4gSIdU4CfQlDZNU%2FF2eo1l6NECH4r%2FLNfohR0YIBVUDIGyI1fURSoSfr7lHltezCLJVBQCrnINngZjzVFTo4BEB0a%2FrCi7Aic9FVoGc6%2BZ2VNwbH%2BeIhArYjVj5WGYmxPW9dW%2FDPxauC0DPqiKaINeBoJFRpE1QC%2B%2FHYH1dzOlB3C1%2B76ay1IHpbeDyv1uysYnOhKYr8Xaxd9Kd7HkNRrYxTSrWPob6%2BmGsZHLnn4zf6Pt8w6g2MRs1alxyiAp%2BHGPXOeL4gIWTggSOGxY8y2EjFD5flYoGo8jUIjQjevc69hZo0z11I9DM8kgeO%2F32RUsmSGA%2B8Ps92RZrpKFx6UCGPIh5fFI%2FYkgYcAAfpLMJvFiMMGOqUBBOGOE0yyWHjpbiZ7Li8jgCNbJNM1MNWJD%2Fm7vwrSgyRk0cPNmfQ%2B%2BA9Gsq6aOxN1MPT9kTJ4gnSFUr6ldxkwoK4ZKW1yiRI4jbcwDXmWM2K0sh%2FD7DJI2FHbj3Y64oNusor5sPWkHrKA88DyUxD%2F9wryyjYxvz9AJaWWos%2FMYiGwZlJB293R9ubgisAITnSIpzuMOrzkyRN06jBOS5c54uQAFQ%2BU&X-Amz-Signature=03390f96de6d5d40b92b00b90dc00ea5b61763361cf973d841b8c7b32c1ef924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
