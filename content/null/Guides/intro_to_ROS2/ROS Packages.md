---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Packages.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34HTFN4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCqoR6ToT6OrZthNsGQkvzpp9Lzvh%2Bs6OvuoLZrlw3C0AIhAK22jAG5orTXTXDDuE%2FeE6oEhDYTLa97m4esTRVrAcH8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgytsPLNlRTdlw59n9Qq3AMzZuxy1dtMi71CYfJEFKUqgpGcq%2FKEAIVC3hzQE5WiKufFRd6x3S4Y42RfSFp73Smrk63o8nLH2RLGmfv%2BQtPpro2P08APOExh7BXclMuRFQ4X99cWSXRKYwKF%2BtG0nNmiByKpnAXcCVASycSuKvLmDx0CXze3vLxYcc%2FiEEjx95tzJS70MZIriA2U9VI1GxkTWmzLAaZLetEZLjeSxuK3ze39x7hvGWMuXjJFOrXdIFCnDxab68AxGHSAP443uZceAgmT2%2FPQrzyc4g2YADcaWd1hFAnSybn4hEz44etWtcA9UyTVjUDkN9Mjqyf2BpOsRdcsSaXBV15juCkjIPGQG0KowN6V1AEkpkcaznoEPiHaRMEXx%2B1JcUjUUZ7urObDCvvz32VCB%2BGupv6eCtduBEicVJsUKEYE3jUsGlQ2MmA%2FpK%2FJdo0q3amUBMwsrs%2BVh4vRSSv4w%2BqWTQOaRR6xUDDkke5pQ4SnlOy8yrv7tpj6TPxbsB8sUyPpLmgQzO38oAVRJenjzHCCX%2FubD8NIRqqEJ%2FBw31gOmamWlKkbQkiCtSbaabiNPwGxvd4O8i7DGV42ZfAB99LIDdgZt1z9g33l%2Bv9AEHsiHSHyM9mC2gZ4%2F9SgLF2x4mGdHzDFlYq9BjqkAd4lHUpKBHP2zA64hS8d85%2FmHLktComFXJ45iqa62gE3z8BKavYzGWbEZAIwH0dIJx4vR6EnkSumiFuzzonECoV5THknGMaEKXqgN6T5AYTneJ7hd67lsSocnrPRtothOXdSiR03BO6GKLmhuXma4wqf1slFq%2FcQMMlOcHkR9ov0%2BaY2Mmg8m8cwtEW8YxIr5zXmaxMLvOp6cRCGBrbhWXSaqZ5q&X-Amz-Signature=75e8c610f78d935fec9f75807a01e016099d64dba658c762d8d4a81e0ae790a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34HTFN4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCqoR6ToT6OrZthNsGQkvzpp9Lzvh%2Bs6OvuoLZrlw3C0AIhAK22jAG5orTXTXDDuE%2FeE6oEhDYTLa97m4esTRVrAcH8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgytsPLNlRTdlw59n9Qq3AMzZuxy1dtMi71CYfJEFKUqgpGcq%2FKEAIVC3hzQE5WiKufFRd6x3S4Y42RfSFp73Smrk63o8nLH2RLGmfv%2BQtPpro2P08APOExh7BXclMuRFQ4X99cWSXRKYwKF%2BtG0nNmiByKpnAXcCVASycSuKvLmDx0CXze3vLxYcc%2FiEEjx95tzJS70MZIriA2U9VI1GxkTWmzLAaZLetEZLjeSxuK3ze39x7hvGWMuXjJFOrXdIFCnDxab68AxGHSAP443uZceAgmT2%2FPQrzyc4g2YADcaWd1hFAnSybn4hEz44etWtcA9UyTVjUDkN9Mjqyf2BpOsRdcsSaXBV15juCkjIPGQG0KowN6V1AEkpkcaznoEPiHaRMEXx%2B1JcUjUUZ7urObDCvvz32VCB%2BGupv6eCtduBEicVJsUKEYE3jUsGlQ2MmA%2FpK%2FJdo0q3amUBMwsrs%2BVh4vRSSv4w%2BqWTQOaRR6xUDDkke5pQ4SnlOy8yrv7tpj6TPxbsB8sUyPpLmgQzO38oAVRJenjzHCCX%2FubD8NIRqqEJ%2FBw31gOmamWlKkbQkiCtSbaabiNPwGxvd4O8i7DGV42ZfAB99LIDdgZt1z9g33l%2Bv9AEHsiHSHyM9mC2gZ4%2F9SgLF2x4mGdHzDFlYq9BjqkAd4lHUpKBHP2zA64hS8d85%2FmHLktComFXJ45iqa62gE3z8BKavYzGWbEZAIwH0dIJx4vR6EnkSumiFuzzonECoV5THknGMaEKXqgN6T5AYTneJ7hd67lsSocnrPRtothOXdSiR03BO6GKLmhuXma4wqf1slFq%2FcQMMlOcHkR9ov0%2BaY2Mmg8m8cwtEW8YxIr5zXmaxMLvOp6cRCGBrbhWXSaqZ5q&X-Amz-Signature=02b847f30b3cb9ccbefaf32e348bc13ed85be717a48b409acd103494b6864ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34HTFN4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCqoR6ToT6OrZthNsGQkvzpp9Lzvh%2Bs6OvuoLZrlw3C0AIhAK22jAG5orTXTXDDuE%2FeE6oEhDYTLa97m4esTRVrAcH8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgytsPLNlRTdlw59n9Qq3AMzZuxy1dtMi71CYfJEFKUqgpGcq%2FKEAIVC3hzQE5WiKufFRd6x3S4Y42RfSFp73Smrk63o8nLH2RLGmfv%2BQtPpro2P08APOExh7BXclMuRFQ4X99cWSXRKYwKF%2BtG0nNmiByKpnAXcCVASycSuKvLmDx0CXze3vLxYcc%2FiEEjx95tzJS70MZIriA2U9VI1GxkTWmzLAaZLetEZLjeSxuK3ze39x7hvGWMuXjJFOrXdIFCnDxab68AxGHSAP443uZceAgmT2%2FPQrzyc4g2YADcaWd1hFAnSybn4hEz44etWtcA9UyTVjUDkN9Mjqyf2BpOsRdcsSaXBV15juCkjIPGQG0KowN6V1AEkpkcaznoEPiHaRMEXx%2B1JcUjUUZ7urObDCvvz32VCB%2BGupv6eCtduBEicVJsUKEYE3jUsGlQ2MmA%2FpK%2FJdo0q3amUBMwsrs%2BVh4vRSSv4w%2BqWTQOaRR6xUDDkke5pQ4SnlOy8yrv7tpj6TPxbsB8sUyPpLmgQzO38oAVRJenjzHCCX%2FubD8NIRqqEJ%2FBw31gOmamWlKkbQkiCtSbaabiNPwGxvd4O8i7DGV42ZfAB99LIDdgZt1z9g33l%2Bv9AEHsiHSHyM9mC2gZ4%2F9SgLF2x4mGdHzDFlYq9BjqkAd4lHUpKBHP2zA64hS8d85%2FmHLktComFXJ45iqa62gE3z8BKavYzGWbEZAIwH0dIJx4vR6EnkSumiFuzzonECoV5THknGMaEKXqgN6T5AYTneJ7hd67lsSocnrPRtothOXdSiR03BO6GKLmhuXma4wqf1slFq%2FcQMMlOcHkR9ov0%2BaY2Mmg8m8cwtEW8YxIr5zXmaxMLvOp6cRCGBrbhWXSaqZ5q&X-Amz-Signature=b30e774f6c1e5b92eed7ec038756012c03e9515954860ffcd0759efc70dfe162&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34HTFN4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCqoR6ToT6OrZthNsGQkvzpp9Lzvh%2Bs6OvuoLZrlw3C0AIhAK22jAG5orTXTXDDuE%2FeE6oEhDYTLa97m4esTRVrAcH8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgytsPLNlRTdlw59n9Qq3AMzZuxy1dtMi71CYfJEFKUqgpGcq%2FKEAIVC3hzQE5WiKufFRd6x3S4Y42RfSFp73Smrk63o8nLH2RLGmfv%2BQtPpro2P08APOExh7BXclMuRFQ4X99cWSXRKYwKF%2BtG0nNmiByKpnAXcCVASycSuKvLmDx0CXze3vLxYcc%2FiEEjx95tzJS70MZIriA2U9VI1GxkTWmzLAaZLetEZLjeSxuK3ze39x7hvGWMuXjJFOrXdIFCnDxab68AxGHSAP443uZceAgmT2%2FPQrzyc4g2YADcaWd1hFAnSybn4hEz44etWtcA9UyTVjUDkN9Mjqyf2BpOsRdcsSaXBV15juCkjIPGQG0KowN6V1AEkpkcaznoEPiHaRMEXx%2B1JcUjUUZ7urObDCvvz32VCB%2BGupv6eCtduBEicVJsUKEYE3jUsGlQ2MmA%2FpK%2FJdo0q3amUBMwsrs%2BVh4vRSSv4w%2BqWTQOaRR6xUDDkke5pQ4SnlOy8yrv7tpj6TPxbsB8sUyPpLmgQzO38oAVRJenjzHCCX%2FubD8NIRqqEJ%2FBw31gOmamWlKkbQkiCtSbaabiNPwGxvd4O8i7DGV42ZfAB99LIDdgZt1z9g33l%2Bv9AEHsiHSHyM9mC2gZ4%2F9SgLF2x4mGdHzDFlYq9BjqkAd4lHUpKBHP2zA64hS8d85%2FmHLktComFXJ45iqa62gE3z8BKavYzGWbEZAIwH0dIJx4vR6EnkSumiFuzzonECoV5THknGMaEKXqgN6T5AYTneJ7hd67lsSocnrPRtothOXdSiR03BO6GKLmhuXma4wqf1slFq%2FcQMMlOcHkR9ov0%2BaY2Mmg8m8cwtEW8YxIr5zXmaxMLvOp6cRCGBrbhWXSaqZ5q&X-Amz-Signature=f0358e544398bc2c8fa5daa46f97292572f360f51dc1e5e1f0d6d2dc66f3cf5d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34HTFN4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCqoR6ToT6OrZthNsGQkvzpp9Lzvh%2Bs6OvuoLZrlw3C0AIhAK22jAG5orTXTXDDuE%2FeE6oEhDYTLa97m4esTRVrAcH8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgytsPLNlRTdlw59n9Qq3AMzZuxy1dtMi71CYfJEFKUqgpGcq%2FKEAIVC3hzQE5WiKufFRd6x3S4Y42RfSFp73Smrk63o8nLH2RLGmfv%2BQtPpro2P08APOExh7BXclMuRFQ4X99cWSXRKYwKF%2BtG0nNmiByKpnAXcCVASycSuKvLmDx0CXze3vLxYcc%2FiEEjx95tzJS70MZIriA2U9VI1GxkTWmzLAaZLetEZLjeSxuK3ze39x7hvGWMuXjJFOrXdIFCnDxab68AxGHSAP443uZceAgmT2%2FPQrzyc4g2YADcaWd1hFAnSybn4hEz44etWtcA9UyTVjUDkN9Mjqyf2BpOsRdcsSaXBV15juCkjIPGQG0KowN6V1AEkpkcaznoEPiHaRMEXx%2B1JcUjUUZ7urObDCvvz32VCB%2BGupv6eCtduBEicVJsUKEYE3jUsGlQ2MmA%2FpK%2FJdo0q3amUBMwsrs%2BVh4vRSSv4w%2BqWTQOaRR6xUDDkke5pQ4SnlOy8yrv7tpj6TPxbsB8sUyPpLmgQzO38oAVRJenjzHCCX%2FubD8NIRqqEJ%2FBw31gOmamWlKkbQkiCtSbaabiNPwGxvd4O8i7DGV42ZfAB99LIDdgZt1z9g33l%2Bv9AEHsiHSHyM9mC2gZ4%2F9SgLF2x4mGdHzDFlYq9BjqkAd4lHUpKBHP2zA64hS8d85%2FmHLktComFXJ45iqa62gE3z8BKavYzGWbEZAIwH0dIJx4vR6EnkSumiFuzzonECoV5THknGMaEKXqgN6T5AYTneJ7hd67lsSocnrPRtothOXdSiR03BO6GKLmhuXma4wqf1slFq%2FcQMMlOcHkR9ov0%2BaY2Mmg8m8cwtEW8YxIr5zXmaxMLvOp6cRCGBrbhWXSaqZ5q&X-Amz-Signature=7b0edab0cdb6256e5c02e65c07c2fff6c4872e94db506a323a9c5eb941e2242d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34HTFN4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCqoR6ToT6OrZthNsGQkvzpp9Lzvh%2Bs6OvuoLZrlw3C0AIhAK22jAG5orTXTXDDuE%2FeE6oEhDYTLa97m4esTRVrAcH8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgytsPLNlRTdlw59n9Qq3AMzZuxy1dtMi71CYfJEFKUqgpGcq%2FKEAIVC3hzQE5WiKufFRd6x3S4Y42RfSFp73Smrk63o8nLH2RLGmfv%2BQtPpro2P08APOExh7BXclMuRFQ4X99cWSXRKYwKF%2BtG0nNmiByKpnAXcCVASycSuKvLmDx0CXze3vLxYcc%2FiEEjx95tzJS70MZIriA2U9VI1GxkTWmzLAaZLetEZLjeSxuK3ze39x7hvGWMuXjJFOrXdIFCnDxab68AxGHSAP443uZceAgmT2%2FPQrzyc4g2YADcaWd1hFAnSybn4hEz44etWtcA9UyTVjUDkN9Mjqyf2BpOsRdcsSaXBV15juCkjIPGQG0KowN6V1AEkpkcaznoEPiHaRMEXx%2B1JcUjUUZ7urObDCvvz32VCB%2BGupv6eCtduBEicVJsUKEYE3jUsGlQ2MmA%2FpK%2FJdo0q3amUBMwsrs%2BVh4vRSSv4w%2BqWTQOaRR6xUDDkke5pQ4SnlOy8yrv7tpj6TPxbsB8sUyPpLmgQzO38oAVRJenjzHCCX%2FubD8NIRqqEJ%2FBw31gOmamWlKkbQkiCtSbaabiNPwGxvd4O8i7DGV42ZfAB99LIDdgZt1z9g33l%2Bv9AEHsiHSHyM9mC2gZ4%2F9SgLF2x4mGdHzDFlYq9BjqkAd4lHUpKBHP2zA64hS8d85%2FmHLktComFXJ45iqa62gE3z8BKavYzGWbEZAIwH0dIJx4vR6EnkSumiFuzzonECoV5THknGMaEKXqgN6T5AYTneJ7hd67lsSocnrPRtothOXdSiR03BO6GKLmhuXma4wqf1slFq%2FcQMMlOcHkR9ov0%2BaY2Mmg8m8cwtEW8YxIr5zXmaxMLvOp6cRCGBrbhWXSaqZ5q&X-Amz-Signature=49e2afd0f6a2b86de61e9d9f072736eecb68e832081b12512f6092dcaff2d153&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34HTFN4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCqoR6ToT6OrZthNsGQkvzpp9Lzvh%2Bs6OvuoLZrlw3C0AIhAK22jAG5orTXTXDDuE%2FeE6oEhDYTLa97m4esTRVrAcH8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgytsPLNlRTdlw59n9Qq3AMzZuxy1dtMi71CYfJEFKUqgpGcq%2FKEAIVC3hzQE5WiKufFRd6x3S4Y42RfSFp73Smrk63o8nLH2RLGmfv%2BQtPpro2P08APOExh7BXclMuRFQ4X99cWSXRKYwKF%2BtG0nNmiByKpnAXcCVASycSuKvLmDx0CXze3vLxYcc%2FiEEjx95tzJS70MZIriA2U9VI1GxkTWmzLAaZLetEZLjeSxuK3ze39x7hvGWMuXjJFOrXdIFCnDxab68AxGHSAP443uZceAgmT2%2FPQrzyc4g2YADcaWd1hFAnSybn4hEz44etWtcA9UyTVjUDkN9Mjqyf2BpOsRdcsSaXBV15juCkjIPGQG0KowN6V1AEkpkcaznoEPiHaRMEXx%2B1JcUjUUZ7urObDCvvz32VCB%2BGupv6eCtduBEicVJsUKEYE3jUsGlQ2MmA%2FpK%2FJdo0q3amUBMwsrs%2BVh4vRSSv4w%2BqWTQOaRR6xUDDkke5pQ4SnlOy8yrv7tpj6TPxbsB8sUyPpLmgQzO38oAVRJenjzHCCX%2FubD8NIRqqEJ%2FBw31gOmamWlKkbQkiCtSbaabiNPwGxvd4O8i7DGV42ZfAB99LIDdgZt1z9g33l%2Bv9AEHsiHSHyM9mC2gZ4%2F9SgLF2x4mGdHzDFlYq9BjqkAd4lHUpKBHP2zA64hS8d85%2FmHLktComFXJ45iqa62gE3z8BKavYzGWbEZAIwH0dIJx4vR6EnkSumiFuzzonECoV5THknGMaEKXqgN6T5AYTneJ7hd67lsSocnrPRtothOXdSiR03BO6GKLmhuXma4wqf1slFq%2FcQMMlOcHkR9ov0%2BaY2Mmg8m8cwtEW8YxIr5zXmaxMLvOp6cRCGBrbhWXSaqZ5q&X-Amz-Signature=2201189b80f86804730796660382c3c333a8ed00992448a868d8b96c4cb09d47&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
