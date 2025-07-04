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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3FC3LG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDgmCdtJhKqQOYCS6Pi3S1C0lYsZx1OA4fmPmXpMIoCbAiBVHshWA74GkgevAlO%2BTjg3BxiYUpkc5oVLtd%2FM7kh9Gyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMJ%2BaPjSb%2BVVWdokXTKtwDzzssiWK279yieHOAZLNL%2BwIf8KedRawH3qFD%2Fq4Nx3anhs5KfvO027ns4qS%2FFx32p9V2cfo2mBM14uw9L5uyquKqKar0P0rbCIk78G%2B5Z0fwcfUIuvWVwMPyT77HeEebuBB%2BBwyfTb5L0xPeu3TVslW2jt2eRE3RMcGMocxUa%2BygkYRrMopj%2FEyNy2ZKPTuAlN3%2Fx8leT8Ve0Af%2FimL4fDVfisch4JNCOcbPkKjHeRYqPpfU0X7a%2Bq9nMgMhoX6bRe9dScZ%2FhSbZZY5RgxRhcPG6TTROTtAbuvO%2Bva8w%2FlnDUEhRRxvx%2Ftyz2zxmA9%2BGOAp%2F6eZqMPgcP9Vs5DuWy9lc%2F5Q8UIbmvfL13BU4HT20Tqv83DMxhley1LZT3N%2BglCyQSCHRDbpQscOIc8S1pP3QdjGrnC28WVbapkT%2FXLgZJM8jovjl6hCPTKdiPqtL9h5FEJ4eVQx9o4oYSPZSPpu4%2BapDlHpyMuY806bH3WJrZvT7lhvn9O1vQvsXTLQUXRyakMlqewbYamPBisxtxVL3y6hvJw9KaTyOoFw98FnNrM4SSl%2B6yItSsca5nKNqRL8bC%2FRwI%2FeXXMSQyMobOejYnxtRMfKvS9AMLi8Y3Hw7GDruezkbzOSqMTUw1o2dwwY6pgEQpKv8BwoJNaOKGBl%2BfaNnLaliDhEEv0s4DZfrr5uoE7i2lXMDwzMQz25OKMydJ5tU61xHHs0XnXiXMSdt1PnvkRmctZVjZKlWj9tHyawbCMGn%2BaRIvRMh2BFWs6YY3cgtEfJwgFYqSj5SZwZR9TWoOGr129hs2qBCx%2FDCxCVYrvWW2xtuf%2FFUg9rqN0QEWLTaptKoTqj2W1naJjgwkaQ6jf7JQc1U&X-Amz-Signature=f324a1929cae8788fe31f0539f238c7bf5d7a21f149ffaf220e65425993bec20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3FC3LG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDgmCdtJhKqQOYCS6Pi3S1C0lYsZx1OA4fmPmXpMIoCbAiBVHshWA74GkgevAlO%2BTjg3BxiYUpkc5oVLtd%2FM7kh9Gyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMJ%2BaPjSb%2BVVWdokXTKtwDzzssiWK279yieHOAZLNL%2BwIf8KedRawH3qFD%2Fq4Nx3anhs5KfvO027ns4qS%2FFx32p9V2cfo2mBM14uw9L5uyquKqKar0P0rbCIk78G%2B5Z0fwcfUIuvWVwMPyT77HeEebuBB%2BBwyfTb5L0xPeu3TVslW2jt2eRE3RMcGMocxUa%2BygkYRrMopj%2FEyNy2ZKPTuAlN3%2Fx8leT8Ve0Af%2FimL4fDVfisch4JNCOcbPkKjHeRYqPpfU0X7a%2Bq9nMgMhoX6bRe9dScZ%2FhSbZZY5RgxRhcPG6TTROTtAbuvO%2Bva8w%2FlnDUEhRRxvx%2Ftyz2zxmA9%2BGOAp%2F6eZqMPgcP9Vs5DuWy9lc%2F5Q8UIbmvfL13BU4HT20Tqv83DMxhley1LZT3N%2BglCyQSCHRDbpQscOIc8S1pP3QdjGrnC28WVbapkT%2FXLgZJM8jovjl6hCPTKdiPqtL9h5FEJ4eVQx9o4oYSPZSPpu4%2BapDlHpyMuY806bH3WJrZvT7lhvn9O1vQvsXTLQUXRyakMlqewbYamPBisxtxVL3y6hvJw9KaTyOoFw98FnNrM4SSl%2B6yItSsca5nKNqRL8bC%2FRwI%2FeXXMSQyMobOejYnxtRMfKvS9AMLi8Y3Hw7GDruezkbzOSqMTUw1o2dwwY6pgEQpKv8BwoJNaOKGBl%2BfaNnLaliDhEEv0s4DZfrr5uoE7i2lXMDwzMQz25OKMydJ5tU61xHHs0XnXiXMSdt1PnvkRmctZVjZKlWj9tHyawbCMGn%2BaRIvRMh2BFWs6YY3cgtEfJwgFYqSj5SZwZR9TWoOGr129hs2qBCx%2FDCxCVYrvWW2xtuf%2FFUg9rqN0QEWLTaptKoTqj2W1naJjgwkaQ6jf7JQc1U&X-Amz-Signature=748694e135254a71e44c9a622b7024985fdc3d8bf0fc35bdc02870a3d2c59843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3FC3LG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDgmCdtJhKqQOYCS6Pi3S1C0lYsZx1OA4fmPmXpMIoCbAiBVHshWA74GkgevAlO%2BTjg3BxiYUpkc5oVLtd%2FM7kh9Gyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMJ%2BaPjSb%2BVVWdokXTKtwDzzssiWK279yieHOAZLNL%2BwIf8KedRawH3qFD%2Fq4Nx3anhs5KfvO027ns4qS%2FFx32p9V2cfo2mBM14uw9L5uyquKqKar0P0rbCIk78G%2B5Z0fwcfUIuvWVwMPyT77HeEebuBB%2BBwyfTb5L0xPeu3TVslW2jt2eRE3RMcGMocxUa%2BygkYRrMopj%2FEyNy2ZKPTuAlN3%2Fx8leT8Ve0Af%2FimL4fDVfisch4JNCOcbPkKjHeRYqPpfU0X7a%2Bq9nMgMhoX6bRe9dScZ%2FhSbZZY5RgxRhcPG6TTROTtAbuvO%2Bva8w%2FlnDUEhRRxvx%2Ftyz2zxmA9%2BGOAp%2F6eZqMPgcP9Vs5DuWy9lc%2F5Q8UIbmvfL13BU4HT20Tqv83DMxhley1LZT3N%2BglCyQSCHRDbpQscOIc8S1pP3QdjGrnC28WVbapkT%2FXLgZJM8jovjl6hCPTKdiPqtL9h5FEJ4eVQx9o4oYSPZSPpu4%2BapDlHpyMuY806bH3WJrZvT7lhvn9O1vQvsXTLQUXRyakMlqewbYamPBisxtxVL3y6hvJw9KaTyOoFw98FnNrM4SSl%2B6yItSsca5nKNqRL8bC%2FRwI%2FeXXMSQyMobOejYnxtRMfKvS9AMLi8Y3Hw7GDruezkbzOSqMTUw1o2dwwY6pgEQpKv8BwoJNaOKGBl%2BfaNnLaliDhEEv0s4DZfrr5uoE7i2lXMDwzMQz25OKMydJ5tU61xHHs0XnXiXMSdt1PnvkRmctZVjZKlWj9tHyawbCMGn%2BaRIvRMh2BFWs6YY3cgtEfJwgFYqSj5SZwZR9TWoOGr129hs2qBCx%2FDCxCVYrvWW2xtuf%2FFUg9rqN0QEWLTaptKoTqj2W1naJjgwkaQ6jf7JQc1U&X-Amz-Signature=d254822f859d4041e63b547adb4f6f463e92dac1957084004603ced8973e99d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3FC3LG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDgmCdtJhKqQOYCS6Pi3S1C0lYsZx1OA4fmPmXpMIoCbAiBVHshWA74GkgevAlO%2BTjg3BxiYUpkc5oVLtd%2FM7kh9Gyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMJ%2BaPjSb%2BVVWdokXTKtwDzzssiWK279yieHOAZLNL%2BwIf8KedRawH3qFD%2Fq4Nx3anhs5KfvO027ns4qS%2FFx32p9V2cfo2mBM14uw9L5uyquKqKar0P0rbCIk78G%2B5Z0fwcfUIuvWVwMPyT77HeEebuBB%2BBwyfTb5L0xPeu3TVslW2jt2eRE3RMcGMocxUa%2BygkYRrMopj%2FEyNy2ZKPTuAlN3%2Fx8leT8Ve0Af%2FimL4fDVfisch4JNCOcbPkKjHeRYqPpfU0X7a%2Bq9nMgMhoX6bRe9dScZ%2FhSbZZY5RgxRhcPG6TTROTtAbuvO%2Bva8w%2FlnDUEhRRxvx%2Ftyz2zxmA9%2BGOAp%2F6eZqMPgcP9Vs5DuWy9lc%2F5Q8UIbmvfL13BU4HT20Tqv83DMxhley1LZT3N%2BglCyQSCHRDbpQscOIc8S1pP3QdjGrnC28WVbapkT%2FXLgZJM8jovjl6hCPTKdiPqtL9h5FEJ4eVQx9o4oYSPZSPpu4%2BapDlHpyMuY806bH3WJrZvT7lhvn9O1vQvsXTLQUXRyakMlqewbYamPBisxtxVL3y6hvJw9KaTyOoFw98FnNrM4SSl%2B6yItSsca5nKNqRL8bC%2FRwI%2FeXXMSQyMobOejYnxtRMfKvS9AMLi8Y3Hw7GDruezkbzOSqMTUw1o2dwwY6pgEQpKv8BwoJNaOKGBl%2BfaNnLaliDhEEv0s4DZfrr5uoE7i2lXMDwzMQz25OKMydJ5tU61xHHs0XnXiXMSdt1PnvkRmctZVjZKlWj9tHyawbCMGn%2BaRIvRMh2BFWs6YY3cgtEfJwgFYqSj5SZwZR9TWoOGr129hs2qBCx%2FDCxCVYrvWW2xtuf%2FFUg9rqN0QEWLTaptKoTqj2W1naJjgwkaQ6jf7JQc1U&X-Amz-Signature=f6e16f0e0fb8021e8db4757981bb6766452b7beaac21310c63f09d5d53ea7372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3FC3LG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDgmCdtJhKqQOYCS6Pi3S1C0lYsZx1OA4fmPmXpMIoCbAiBVHshWA74GkgevAlO%2BTjg3BxiYUpkc5oVLtd%2FM7kh9Gyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMJ%2BaPjSb%2BVVWdokXTKtwDzzssiWK279yieHOAZLNL%2BwIf8KedRawH3qFD%2Fq4Nx3anhs5KfvO027ns4qS%2FFx32p9V2cfo2mBM14uw9L5uyquKqKar0P0rbCIk78G%2B5Z0fwcfUIuvWVwMPyT77HeEebuBB%2BBwyfTb5L0xPeu3TVslW2jt2eRE3RMcGMocxUa%2BygkYRrMopj%2FEyNy2ZKPTuAlN3%2Fx8leT8Ve0Af%2FimL4fDVfisch4JNCOcbPkKjHeRYqPpfU0X7a%2Bq9nMgMhoX6bRe9dScZ%2FhSbZZY5RgxRhcPG6TTROTtAbuvO%2Bva8w%2FlnDUEhRRxvx%2Ftyz2zxmA9%2BGOAp%2F6eZqMPgcP9Vs5DuWy9lc%2F5Q8UIbmvfL13BU4HT20Tqv83DMxhley1LZT3N%2BglCyQSCHRDbpQscOIc8S1pP3QdjGrnC28WVbapkT%2FXLgZJM8jovjl6hCPTKdiPqtL9h5FEJ4eVQx9o4oYSPZSPpu4%2BapDlHpyMuY806bH3WJrZvT7lhvn9O1vQvsXTLQUXRyakMlqewbYamPBisxtxVL3y6hvJw9KaTyOoFw98FnNrM4SSl%2B6yItSsca5nKNqRL8bC%2FRwI%2FeXXMSQyMobOejYnxtRMfKvS9AMLi8Y3Hw7GDruezkbzOSqMTUw1o2dwwY6pgEQpKv8BwoJNaOKGBl%2BfaNnLaliDhEEv0s4DZfrr5uoE7i2lXMDwzMQz25OKMydJ5tU61xHHs0XnXiXMSdt1PnvkRmctZVjZKlWj9tHyawbCMGn%2BaRIvRMh2BFWs6YY3cgtEfJwgFYqSj5SZwZR9TWoOGr129hs2qBCx%2FDCxCVYrvWW2xtuf%2FFUg9rqN0QEWLTaptKoTqj2W1naJjgwkaQ6jf7JQc1U&X-Amz-Signature=d221cae7a8e34fe678cf81e81ede7a3e10ebda8d785dd30daededd8784b9a35f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3FC3LG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDgmCdtJhKqQOYCS6Pi3S1C0lYsZx1OA4fmPmXpMIoCbAiBVHshWA74GkgevAlO%2BTjg3BxiYUpkc5oVLtd%2FM7kh9Gyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMJ%2BaPjSb%2BVVWdokXTKtwDzzssiWK279yieHOAZLNL%2BwIf8KedRawH3qFD%2Fq4Nx3anhs5KfvO027ns4qS%2FFx32p9V2cfo2mBM14uw9L5uyquKqKar0P0rbCIk78G%2B5Z0fwcfUIuvWVwMPyT77HeEebuBB%2BBwyfTb5L0xPeu3TVslW2jt2eRE3RMcGMocxUa%2BygkYRrMopj%2FEyNy2ZKPTuAlN3%2Fx8leT8Ve0Af%2FimL4fDVfisch4JNCOcbPkKjHeRYqPpfU0X7a%2Bq9nMgMhoX6bRe9dScZ%2FhSbZZY5RgxRhcPG6TTROTtAbuvO%2Bva8w%2FlnDUEhRRxvx%2Ftyz2zxmA9%2BGOAp%2F6eZqMPgcP9Vs5DuWy9lc%2F5Q8UIbmvfL13BU4HT20Tqv83DMxhley1LZT3N%2BglCyQSCHRDbpQscOIc8S1pP3QdjGrnC28WVbapkT%2FXLgZJM8jovjl6hCPTKdiPqtL9h5FEJ4eVQx9o4oYSPZSPpu4%2BapDlHpyMuY806bH3WJrZvT7lhvn9O1vQvsXTLQUXRyakMlqewbYamPBisxtxVL3y6hvJw9KaTyOoFw98FnNrM4SSl%2B6yItSsca5nKNqRL8bC%2FRwI%2FeXXMSQyMobOejYnxtRMfKvS9AMLi8Y3Hw7GDruezkbzOSqMTUw1o2dwwY6pgEQpKv8BwoJNaOKGBl%2BfaNnLaliDhEEv0s4DZfrr5uoE7i2lXMDwzMQz25OKMydJ5tU61xHHs0XnXiXMSdt1PnvkRmctZVjZKlWj9tHyawbCMGn%2BaRIvRMh2BFWs6YY3cgtEfJwgFYqSj5SZwZR9TWoOGr129hs2qBCx%2FDCxCVYrvWW2xtuf%2FFUg9rqN0QEWLTaptKoTqj2W1naJjgwkaQ6jf7JQc1U&X-Amz-Signature=1a0196075bac3468f172975805f4e3ec177150d0aa002fb3748f9fdf1c55aae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3FC3LG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDgmCdtJhKqQOYCS6Pi3S1C0lYsZx1OA4fmPmXpMIoCbAiBVHshWA74GkgevAlO%2BTjg3BxiYUpkc5oVLtd%2FM7kh9Gyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMJ%2BaPjSb%2BVVWdokXTKtwDzzssiWK279yieHOAZLNL%2BwIf8KedRawH3qFD%2Fq4Nx3anhs5KfvO027ns4qS%2FFx32p9V2cfo2mBM14uw9L5uyquKqKar0P0rbCIk78G%2B5Z0fwcfUIuvWVwMPyT77HeEebuBB%2BBwyfTb5L0xPeu3TVslW2jt2eRE3RMcGMocxUa%2BygkYRrMopj%2FEyNy2ZKPTuAlN3%2Fx8leT8Ve0Af%2FimL4fDVfisch4JNCOcbPkKjHeRYqPpfU0X7a%2Bq9nMgMhoX6bRe9dScZ%2FhSbZZY5RgxRhcPG6TTROTtAbuvO%2Bva8w%2FlnDUEhRRxvx%2Ftyz2zxmA9%2BGOAp%2F6eZqMPgcP9Vs5DuWy9lc%2F5Q8UIbmvfL13BU4HT20Tqv83DMxhley1LZT3N%2BglCyQSCHRDbpQscOIc8S1pP3QdjGrnC28WVbapkT%2FXLgZJM8jovjl6hCPTKdiPqtL9h5FEJ4eVQx9o4oYSPZSPpu4%2BapDlHpyMuY806bH3WJrZvT7lhvn9O1vQvsXTLQUXRyakMlqewbYamPBisxtxVL3y6hvJw9KaTyOoFw98FnNrM4SSl%2B6yItSsca5nKNqRL8bC%2FRwI%2FeXXMSQyMobOejYnxtRMfKvS9AMLi8Y3Hw7GDruezkbzOSqMTUw1o2dwwY6pgEQpKv8BwoJNaOKGBl%2BfaNnLaliDhEEv0s4DZfrr5uoE7i2lXMDwzMQz25OKMydJ5tU61xHHs0XnXiXMSdt1PnvkRmctZVjZKlWj9tHyawbCMGn%2BaRIvRMh2BFWs6YY3cgtEfJwgFYqSj5SZwZR9TWoOGr129hs2qBCx%2FDCxCVYrvWW2xtuf%2FFUg9rqN0QEWLTaptKoTqj2W1naJjgwkaQ6jf7JQc1U&X-Amz-Signature=81bcecea3b6a7aec0a352654949111d02c1baa045bf768eb8910034065e29deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
