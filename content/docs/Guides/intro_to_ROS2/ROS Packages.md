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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT75NXPJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHRRz4nnCTROCv3jvufHg1uGTWDvv38UUH6xVQXw0z8sAiEAhoAr8%2FA8QtIVhMTPmiUt0VbvQ3s4M6ClrPUpQykRKBMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk7VBqGnU4JY1S2eCrcA%2Bhpk843%2BOKuEejdMaOP6nvFp0u2UXa4pABj6xriLjJLoImXeD0aLwFYf2skkjdCCtT%2BfoRDovzZ%2BryrOeRqhPDFXFQC5axeMLy4leK8qhQBBvRfPxA5gd990w4Us7kOEV9p%2BOLO%2FD%2BBl%2F6SihyGVj%2FaVAXPCsF9YAu6SHNu2uW3OH8c9J%2FETXvCsoTDHd9VjWQC9nt%2BZAMVOLkPIWnEva2MhHiJ9aPfUEQIROR%2BEfEIU2P%2BMDCpMn5pTDK9tT4LjV6THoicyLO2hhb6NjXoXw%2B%2FA1S0EsjMPlfteVIbSt3aWwD%2B%2BWfF4F%2FoQTvVBt8gilsQdHbFlAFJ9xRHzGFHlUiucRx1BMehS%2FhoO8bccWnHg%2Bn6XqPUoHoeP7OF7CL7dmBw2Y%2BbdbmmYR1YgtDG8gDEHU3Dg5yT9WGTIsVgaEAql6tG1Fd5%2Bh37hZ1Wo3WyhUSZyoDeU2GVuX6lchX5IuXPZfKnlQ63J8GeR07H4Y1YUIDetZd8LmNYvZoRF%2FWDKS0Y4Z2JPA6sbgzo2ktI9ttjMoDtNiyWFPDnxt3C8Taki%2BxTxB2Q2CIcG3cjG5K5SGxOtxOk4C7NX9xGV58FxeM1K9i2p1iqmeoWCWDrCIaCoB594u70%2Fupr0xxwMIHwo78GOqUBNsQQSL6oF3w1bY8lnlQQaL%2BaarJi0xylEjyS7EBUKqjUsv1E0AZrRYRKm5i3u9%2BNMCpYP4n%2BF5ODgrFCeceiZvT0rHe%2Fd7LrNL%2Bh9iNV%2BJZD4pKYc9iWoYbVPZA5c%2Fws%2FYKjT9MiKKMKcuH8RE%2BGPK0mYG%2FeaEboEaMN30%2F4PhSnfd3LJTqtN581TUzClHheMrQDqeZPeK37ytjhkb2BU7zLosuc&X-Amz-Signature=32c3d91636863f25e5fa813a1aa00250be91617d7ccdc0616a57bee95937bd39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT75NXPJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHRRz4nnCTROCv3jvufHg1uGTWDvv38UUH6xVQXw0z8sAiEAhoAr8%2FA8QtIVhMTPmiUt0VbvQ3s4M6ClrPUpQykRKBMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk7VBqGnU4JY1S2eCrcA%2Bhpk843%2BOKuEejdMaOP6nvFp0u2UXa4pABj6xriLjJLoImXeD0aLwFYf2skkjdCCtT%2BfoRDovzZ%2BryrOeRqhPDFXFQC5axeMLy4leK8qhQBBvRfPxA5gd990w4Us7kOEV9p%2BOLO%2FD%2BBl%2F6SihyGVj%2FaVAXPCsF9YAu6SHNu2uW3OH8c9J%2FETXvCsoTDHd9VjWQC9nt%2BZAMVOLkPIWnEva2MhHiJ9aPfUEQIROR%2BEfEIU2P%2BMDCpMn5pTDK9tT4LjV6THoicyLO2hhb6NjXoXw%2B%2FA1S0EsjMPlfteVIbSt3aWwD%2B%2BWfF4F%2FoQTvVBt8gilsQdHbFlAFJ9xRHzGFHlUiucRx1BMehS%2FhoO8bccWnHg%2Bn6XqPUoHoeP7OF7CL7dmBw2Y%2BbdbmmYR1YgtDG8gDEHU3Dg5yT9WGTIsVgaEAql6tG1Fd5%2Bh37hZ1Wo3WyhUSZyoDeU2GVuX6lchX5IuXPZfKnlQ63J8GeR07H4Y1YUIDetZd8LmNYvZoRF%2FWDKS0Y4Z2JPA6sbgzo2ktI9ttjMoDtNiyWFPDnxt3C8Taki%2BxTxB2Q2CIcG3cjG5K5SGxOtxOk4C7NX9xGV58FxeM1K9i2p1iqmeoWCWDrCIaCoB594u70%2Fupr0xxwMIHwo78GOqUBNsQQSL6oF3w1bY8lnlQQaL%2BaarJi0xylEjyS7EBUKqjUsv1E0AZrRYRKm5i3u9%2BNMCpYP4n%2BF5ODgrFCeceiZvT0rHe%2Fd7LrNL%2Bh9iNV%2BJZD4pKYc9iWoYbVPZA5c%2Fws%2FYKjT9MiKKMKcuH8RE%2BGPK0mYG%2FeaEboEaMN30%2F4PhSnfd3LJTqtN581TUzClHheMrQDqeZPeK37ytjhkb2BU7zLosuc&X-Amz-Signature=c7de47dba1f52a6800623eeb9e7933a6ca4948ad8fd877ae8d82993e10c6f1d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT75NXPJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHRRz4nnCTROCv3jvufHg1uGTWDvv38UUH6xVQXw0z8sAiEAhoAr8%2FA8QtIVhMTPmiUt0VbvQ3s4M6ClrPUpQykRKBMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk7VBqGnU4JY1S2eCrcA%2Bhpk843%2BOKuEejdMaOP6nvFp0u2UXa4pABj6xriLjJLoImXeD0aLwFYf2skkjdCCtT%2BfoRDovzZ%2BryrOeRqhPDFXFQC5axeMLy4leK8qhQBBvRfPxA5gd990w4Us7kOEV9p%2BOLO%2FD%2BBl%2F6SihyGVj%2FaVAXPCsF9YAu6SHNu2uW3OH8c9J%2FETXvCsoTDHd9VjWQC9nt%2BZAMVOLkPIWnEva2MhHiJ9aPfUEQIROR%2BEfEIU2P%2BMDCpMn5pTDK9tT4LjV6THoicyLO2hhb6NjXoXw%2B%2FA1S0EsjMPlfteVIbSt3aWwD%2B%2BWfF4F%2FoQTvVBt8gilsQdHbFlAFJ9xRHzGFHlUiucRx1BMehS%2FhoO8bccWnHg%2Bn6XqPUoHoeP7OF7CL7dmBw2Y%2BbdbmmYR1YgtDG8gDEHU3Dg5yT9WGTIsVgaEAql6tG1Fd5%2Bh37hZ1Wo3WyhUSZyoDeU2GVuX6lchX5IuXPZfKnlQ63J8GeR07H4Y1YUIDetZd8LmNYvZoRF%2FWDKS0Y4Z2JPA6sbgzo2ktI9ttjMoDtNiyWFPDnxt3C8Taki%2BxTxB2Q2CIcG3cjG5K5SGxOtxOk4C7NX9xGV58FxeM1K9i2p1iqmeoWCWDrCIaCoB594u70%2Fupr0xxwMIHwo78GOqUBNsQQSL6oF3w1bY8lnlQQaL%2BaarJi0xylEjyS7EBUKqjUsv1E0AZrRYRKm5i3u9%2BNMCpYP4n%2BF5ODgrFCeceiZvT0rHe%2Fd7LrNL%2Bh9iNV%2BJZD4pKYc9iWoYbVPZA5c%2Fws%2FYKjT9MiKKMKcuH8RE%2BGPK0mYG%2FeaEboEaMN30%2F4PhSnfd3LJTqtN581TUzClHheMrQDqeZPeK37ytjhkb2BU7zLosuc&X-Amz-Signature=dee17c4e075e5b6bf146fc9f273ff0a714140fbef39abd0a75197b669d872311&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT75NXPJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHRRz4nnCTROCv3jvufHg1uGTWDvv38UUH6xVQXw0z8sAiEAhoAr8%2FA8QtIVhMTPmiUt0VbvQ3s4M6ClrPUpQykRKBMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk7VBqGnU4JY1S2eCrcA%2Bhpk843%2BOKuEejdMaOP6nvFp0u2UXa4pABj6xriLjJLoImXeD0aLwFYf2skkjdCCtT%2BfoRDovzZ%2BryrOeRqhPDFXFQC5axeMLy4leK8qhQBBvRfPxA5gd990w4Us7kOEV9p%2BOLO%2FD%2BBl%2F6SihyGVj%2FaVAXPCsF9YAu6SHNu2uW3OH8c9J%2FETXvCsoTDHd9VjWQC9nt%2BZAMVOLkPIWnEva2MhHiJ9aPfUEQIROR%2BEfEIU2P%2BMDCpMn5pTDK9tT4LjV6THoicyLO2hhb6NjXoXw%2B%2FA1S0EsjMPlfteVIbSt3aWwD%2B%2BWfF4F%2FoQTvVBt8gilsQdHbFlAFJ9xRHzGFHlUiucRx1BMehS%2FhoO8bccWnHg%2Bn6XqPUoHoeP7OF7CL7dmBw2Y%2BbdbmmYR1YgtDG8gDEHU3Dg5yT9WGTIsVgaEAql6tG1Fd5%2Bh37hZ1Wo3WyhUSZyoDeU2GVuX6lchX5IuXPZfKnlQ63J8GeR07H4Y1YUIDetZd8LmNYvZoRF%2FWDKS0Y4Z2JPA6sbgzo2ktI9ttjMoDtNiyWFPDnxt3C8Taki%2BxTxB2Q2CIcG3cjG5K5SGxOtxOk4C7NX9xGV58FxeM1K9i2p1iqmeoWCWDrCIaCoB594u70%2Fupr0xxwMIHwo78GOqUBNsQQSL6oF3w1bY8lnlQQaL%2BaarJi0xylEjyS7EBUKqjUsv1E0AZrRYRKm5i3u9%2BNMCpYP4n%2BF5ODgrFCeceiZvT0rHe%2Fd7LrNL%2Bh9iNV%2BJZD4pKYc9iWoYbVPZA5c%2Fws%2FYKjT9MiKKMKcuH8RE%2BGPK0mYG%2FeaEboEaMN30%2F4PhSnfd3LJTqtN581TUzClHheMrQDqeZPeK37ytjhkb2BU7zLosuc&X-Amz-Signature=3eca3b53c2b64d8206cef70b9a1363cb8be68b9413e5404b63d71be3067a008d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT75NXPJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHRRz4nnCTROCv3jvufHg1uGTWDvv38UUH6xVQXw0z8sAiEAhoAr8%2FA8QtIVhMTPmiUt0VbvQ3s4M6ClrPUpQykRKBMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk7VBqGnU4JY1S2eCrcA%2Bhpk843%2BOKuEejdMaOP6nvFp0u2UXa4pABj6xriLjJLoImXeD0aLwFYf2skkjdCCtT%2BfoRDovzZ%2BryrOeRqhPDFXFQC5axeMLy4leK8qhQBBvRfPxA5gd990w4Us7kOEV9p%2BOLO%2FD%2BBl%2F6SihyGVj%2FaVAXPCsF9YAu6SHNu2uW3OH8c9J%2FETXvCsoTDHd9VjWQC9nt%2BZAMVOLkPIWnEva2MhHiJ9aPfUEQIROR%2BEfEIU2P%2BMDCpMn5pTDK9tT4LjV6THoicyLO2hhb6NjXoXw%2B%2FA1S0EsjMPlfteVIbSt3aWwD%2B%2BWfF4F%2FoQTvVBt8gilsQdHbFlAFJ9xRHzGFHlUiucRx1BMehS%2FhoO8bccWnHg%2Bn6XqPUoHoeP7OF7CL7dmBw2Y%2BbdbmmYR1YgtDG8gDEHU3Dg5yT9WGTIsVgaEAql6tG1Fd5%2Bh37hZ1Wo3WyhUSZyoDeU2GVuX6lchX5IuXPZfKnlQ63J8GeR07H4Y1YUIDetZd8LmNYvZoRF%2FWDKS0Y4Z2JPA6sbgzo2ktI9ttjMoDtNiyWFPDnxt3C8Taki%2BxTxB2Q2CIcG3cjG5K5SGxOtxOk4C7NX9xGV58FxeM1K9i2p1iqmeoWCWDrCIaCoB594u70%2Fupr0xxwMIHwo78GOqUBNsQQSL6oF3w1bY8lnlQQaL%2BaarJi0xylEjyS7EBUKqjUsv1E0AZrRYRKm5i3u9%2BNMCpYP4n%2BF5ODgrFCeceiZvT0rHe%2Fd7LrNL%2Bh9iNV%2BJZD4pKYc9iWoYbVPZA5c%2Fws%2FYKjT9MiKKMKcuH8RE%2BGPK0mYG%2FeaEboEaMN30%2F4PhSnfd3LJTqtN581TUzClHheMrQDqeZPeK37ytjhkb2BU7zLosuc&X-Amz-Signature=d69a254f97de69bb49f9c4f790e9be3d856373aeee0adf2aa02c1b9875b0b8e6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT75NXPJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHRRz4nnCTROCv3jvufHg1uGTWDvv38UUH6xVQXw0z8sAiEAhoAr8%2FA8QtIVhMTPmiUt0VbvQ3s4M6ClrPUpQykRKBMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk7VBqGnU4JY1S2eCrcA%2Bhpk843%2BOKuEejdMaOP6nvFp0u2UXa4pABj6xriLjJLoImXeD0aLwFYf2skkjdCCtT%2BfoRDovzZ%2BryrOeRqhPDFXFQC5axeMLy4leK8qhQBBvRfPxA5gd990w4Us7kOEV9p%2BOLO%2FD%2BBl%2F6SihyGVj%2FaVAXPCsF9YAu6SHNu2uW3OH8c9J%2FETXvCsoTDHd9VjWQC9nt%2BZAMVOLkPIWnEva2MhHiJ9aPfUEQIROR%2BEfEIU2P%2BMDCpMn5pTDK9tT4LjV6THoicyLO2hhb6NjXoXw%2B%2FA1S0EsjMPlfteVIbSt3aWwD%2B%2BWfF4F%2FoQTvVBt8gilsQdHbFlAFJ9xRHzGFHlUiucRx1BMehS%2FhoO8bccWnHg%2Bn6XqPUoHoeP7OF7CL7dmBw2Y%2BbdbmmYR1YgtDG8gDEHU3Dg5yT9WGTIsVgaEAql6tG1Fd5%2Bh37hZ1Wo3WyhUSZyoDeU2GVuX6lchX5IuXPZfKnlQ63J8GeR07H4Y1YUIDetZd8LmNYvZoRF%2FWDKS0Y4Z2JPA6sbgzo2ktI9ttjMoDtNiyWFPDnxt3C8Taki%2BxTxB2Q2CIcG3cjG5K5SGxOtxOk4C7NX9xGV58FxeM1K9i2p1iqmeoWCWDrCIaCoB594u70%2Fupr0xxwMIHwo78GOqUBNsQQSL6oF3w1bY8lnlQQaL%2BaarJi0xylEjyS7EBUKqjUsv1E0AZrRYRKm5i3u9%2BNMCpYP4n%2BF5ODgrFCeceiZvT0rHe%2Fd7LrNL%2Bh9iNV%2BJZD4pKYc9iWoYbVPZA5c%2Fws%2FYKjT9MiKKMKcuH8RE%2BGPK0mYG%2FeaEboEaMN30%2F4PhSnfd3LJTqtN581TUzClHheMrQDqeZPeK37ytjhkb2BU7zLosuc&X-Amz-Signature=b12b36c244ab14ef5faabe041bd173416dda09ac32eb4f5101889cf377feacf4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT75NXPJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHRRz4nnCTROCv3jvufHg1uGTWDvv38UUH6xVQXw0z8sAiEAhoAr8%2FA8QtIVhMTPmiUt0VbvQ3s4M6ClrPUpQykRKBMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk7VBqGnU4JY1S2eCrcA%2Bhpk843%2BOKuEejdMaOP6nvFp0u2UXa4pABj6xriLjJLoImXeD0aLwFYf2skkjdCCtT%2BfoRDovzZ%2BryrOeRqhPDFXFQC5axeMLy4leK8qhQBBvRfPxA5gd990w4Us7kOEV9p%2BOLO%2FD%2BBl%2F6SihyGVj%2FaVAXPCsF9YAu6SHNu2uW3OH8c9J%2FETXvCsoTDHd9VjWQC9nt%2BZAMVOLkPIWnEva2MhHiJ9aPfUEQIROR%2BEfEIU2P%2BMDCpMn5pTDK9tT4LjV6THoicyLO2hhb6NjXoXw%2B%2FA1S0EsjMPlfteVIbSt3aWwD%2B%2BWfF4F%2FoQTvVBt8gilsQdHbFlAFJ9xRHzGFHlUiucRx1BMehS%2FhoO8bccWnHg%2Bn6XqPUoHoeP7OF7CL7dmBw2Y%2BbdbmmYR1YgtDG8gDEHU3Dg5yT9WGTIsVgaEAql6tG1Fd5%2Bh37hZ1Wo3WyhUSZyoDeU2GVuX6lchX5IuXPZfKnlQ63J8GeR07H4Y1YUIDetZd8LmNYvZoRF%2FWDKS0Y4Z2JPA6sbgzo2ktI9ttjMoDtNiyWFPDnxt3C8Taki%2BxTxB2Q2CIcG3cjG5K5SGxOtxOk4C7NX9xGV58FxeM1K9i2p1iqmeoWCWDrCIaCoB594u70%2Fupr0xxwMIHwo78GOqUBNsQQSL6oF3w1bY8lnlQQaL%2BaarJi0xylEjyS7EBUKqjUsv1E0AZrRYRKm5i3u9%2BNMCpYP4n%2BF5ODgrFCeceiZvT0rHe%2Fd7LrNL%2Bh9iNV%2BJZD4pKYc9iWoYbVPZA5c%2Fws%2FYKjT9MiKKMKcuH8RE%2BGPK0mYG%2FeaEboEaMN30%2F4PhSnfd3LJTqtN581TUzClHheMrQDqeZPeK37ytjhkb2BU7zLosuc&X-Amz-Signature=681e3a326d1b68abb9e5b05892af901e74b19f4122945dc4fdf696bf4a980138&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
