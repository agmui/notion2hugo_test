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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJGSAKH4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCiWCx8%2B9w9DdqmMvVMvm23jjnhmf8k6aOjBgMjLKINywIhAKrEADGFykofk29RcO5bmayRHwtbptfvfZSycy72TDtmKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdwGHwF5sD%2FJ9YDRoq3AMQ5MTPjItQ7ldTLsemkekAFqgNnnwwYenJU9c0YQOyhmyGvia%2BwIN8Jo4oLYcZzwO0DwoxGuiN24dDm6Pgxayc3X4r%2B50k2jECakBN5q1Ht6cscSAMN8IFzbmJmYzqapOl1bQmf96XQ0xPIBKdpFGrmuQNFZxfh1ePl%2FhRPzb6Q6jaYxMtHgkf%2FvXiMRtgGhLCFsPAJrY%2BkCT66ItGWCAfqWUpoDsVv99d8JmoRSb7sx6tw6tiQ2wNwtgqeO3B%2FgImO4mrVJAUUWKYvFFEnH617R0cuXGxuqBMrqcrw%2BqYpCuCn7DiNYGGenxsKAsTDDUG%2FvGpvIvRgGCDL6%2FuuQ3sLJrzs1Wl%2BgcqueexiGrh8t0GMAyQWyneAhU1TJ1iLiXLHCvFixrqWzWgFrSBS6Na8eKZW3ZF4wT%2FDl7usz6JgW67tFtKjGeFuTzH7c0BP8grfXtx07kBDLbF09scMdrUbRAYN4rQQS9ex8Gj%2Fo5IRM2WBmYGHQK7%2FH2jOVHjCn62fTHdq8Sna604xRGZu%2BM%2FewZXS9dUw3KYfoSBG%2BblDp%2BihNutbOeuYyEuyhna84li5Br9vIaElDbWIn5GnEFjV30q5AQm9yRxKCZibOW2yHSEOdGRewr0gYId0DCXm%2Fa%2BBjqkARfjNucAk36c4EQsPruz4MaawGsOMqTQS93Lygn1qwr1WXXi2s3ZCw08q2m8JNAhErc7rU8qitenoY1r4Hm6mTRMBSbmeH6y6J3DsDjd1YibVoRLRKrIXDKvl6uGwH3xDLSRKwmLKCMHEeYAr6gTsX7tTYdlUGu4c2NDC2UtfiaR2GCdkkGl5c9WS750fqYJT5LyeMcF6mnFpQWYJIO8wIygxLN3&X-Amz-Signature=58b47884482d7cc0a16e70badfa2446f05a090f59908540cb6281791756f36cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJGSAKH4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCiWCx8%2B9w9DdqmMvVMvm23jjnhmf8k6aOjBgMjLKINywIhAKrEADGFykofk29RcO5bmayRHwtbptfvfZSycy72TDtmKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdwGHwF5sD%2FJ9YDRoq3AMQ5MTPjItQ7ldTLsemkekAFqgNnnwwYenJU9c0YQOyhmyGvia%2BwIN8Jo4oLYcZzwO0DwoxGuiN24dDm6Pgxayc3X4r%2B50k2jECakBN5q1Ht6cscSAMN8IFzbmJmYzqapOl1bQmf96XQ0xPIBKdpFGrmuQNFZxfh1ePl%2FhRPzb6Q6jaYxMtHgkf%2FvXiMRtgGhLCFsPAJrY%2BkCT66ItGWCAfqWUpoDsVv99d8JmoRSb7sx6tw6tiQ2wNwtgqeO3B%2FgImO4mrVJAUUWKYvFFEnH617R0cuXGxuqBMrqcrw%2BqYpCuCn7DiNYGGenxsKAsTDDUG%2FvGpvIvRgGCDL6%2FuuQ3sLJrzs1Wl%2BgcqueexiGrh8t0GMAyQWyneAhU1TJ1iLiXLHCvFixrqWzWgFrSBS6Na8eKZW3ZF4wT%2FDl7usz6JgW67tFtKjGeFuTzH7c0BP8grfXtx07kBDLbF09scMdrUbRAYN4rQQS9ex8Gj%2Fo5IRM2WBmYGHQK7%2FH2jOVHjCn62fTHdq8Sna604xRGZu%2BM%2FewZXS9dUw3KYfoSBG%2BblDp%2BihNutbOeuYyEuyhna84li5Br9vIaElDbWIn5GnEFjV30q5AQm9yRxKCZibOW2yHSEOdGRewr0gYId0DCXm%2Fa%2BBjqkARfjNucAk36c4EQsPruz4MaawGsOMqTQS93Lygn1qwr1WXXi2s3ZCw08q2m8JNAhErc7rU8qitenoY1r4Hm6mTRMBSbmeH6y6J3DsDjd1YibVoRLRKrIXDKvl6uGwH3xDLSRKwmLKCMHEeYAr6gTsX7tTYdlUGu4c2NDC2UtfiaR2GCdkkGl5c9WS750fqYJT5LyeMcF6mnFpQWYJIO8wIygxLN3&X-Amz-Signature=937a6e90446ad71cd5ad16bee9a224b0fdbd23761e638beb46259472a9724966&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJGSAKH4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCiWCx8%2B9w9DdqmMvVMvm23jjnhmf8k6aOjBgMjLKINywIhAKrEADGFykofk29RcO5bmayRHwtbptfvfZSycy72TDtmKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdwGHwF5sD%2FJ9YDRoq3AMQ5MTPjItQ7ldTLsemkekAFqgNnnwwYenJU9c0YQOyhmyGvia%2BwIN8Jo4oLYcZzwO0DwoxGuiN24dDm6Pgxayc3X4r%2B50k2jECakBN5q1Ht6cscSAMN8IFzbmJmYzqapOl1bQmf96XQ0xPIBKdpFGrmuQNFZxfh1ePl%2FhRPzb6Q6jaYxMtHgkf%2FvXiMRtgGhLCFsPAJrY%2BkCT66ItGWCAfqWUpoDsVv99d8JmoRSb7sx6tw6tiQ2wNwtgqeO3B%2FgImO4mrVJAUUWKYvFFEnH617R0cuXGxuqBMrqcrw%2BqYpCuCn7DiNYGGenxsKAsTDDUG%2FvGpvIvRgGCDL6%2FuuQ3sLJrzs1Wl%2BgcqueexiGrh8t0GMAyQWyneAhU1TJ1iLiXLHCvFixrqWzWgFrSBS6Na8eKZW3ZF4wT%2FDl7usz6JgW67tFtKjGeFuTzH7c0BP8grfXtx07kBDLbF09scMdrUbRAYN4rQQS9ex8Gj%2Fo5IRM2WBmYGHQK7%2FH2jOVHjCn62fTHdq8Sna604xRGZu%2BM%2FewZXS9dUw3KYfoSBG%2BblDp%2BihNutbOeuYyEuyhna84li5Br9vIaElDbWIn5GnEFjV30q5AQm9yRxKCZibOW2yHSEOdGRewr0gYId0DCXm%2Fa%2BBjqkARfjNucAk36c4EQsPruz4MaawGsOMqTQS93Lygn1qwr1WXXi2s3ZCw08q2m8JNAhErc7rU8qitenoY1r4Hm6mTRMBSbmeH6y6J3DsDjd1YibVoRLRKrIXDKvl6uGwH3xDLSRKwmLKCMHEeYAr6gTsX7tTYdlUGu4c2NDC2UtfiaR2GCdkkGl5c9WS750fqYJT5LyeMcF6mnFpQWYJIO8wIygxLN3&X-Amz-Signature=7f6a851358cd8592628a7fd2753626ac5b4531950f991e71fc300e6151ed6e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJGSAKH4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCiWCx8%2B9w9DdqmMvVMvm23jjnhmf8k6aOjBgMjLKINywIhAKrEADGFykofk29RcO5bmayRHwtbptfvfZSycy72TDtmKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdwGHwF5sD%2FJ9YDRoq3AMQ5MTPjItQ7ldTLsemkekAFqgNnnwwYenJU9c0YQOyhmyGvia%2BwIN8Jo4oLYcZzwO0DwoxGuiN24dDm6Pgxayc3X4r%2B50k2jECakBN5q1Ht6cscSAMN8IFzbmJmYzqapOl1bQmf96XQ0xPIBKdpFGrmuQNFZxfh1ePl%2FhRPzb6Q6jaYxMtHgkf%2FvXiMRtgGhLCFsPAJrY%2BkCT66ItGWCAfqWUpoDsVv99d8JmoRSb7sx6tw6tiQ2wNwtgqeO3B%2FgImO4mrVJAUUWKYvFFEnH617R0cuXGxuqBMrqcrw%2BqYpCuCn7DiNYGGenxsKAsTDDUG%2FvGpvIvRgGCDL6%2FuuQ3sLJrzs1Wl%2BgcqueexiGrh8t0GMAyQWyneAhU1TJ1iLiXLHCvFixrqWzWgFrSBS6Na8eKZW3ZF4wT%2FDl7usz6JgW67tFtKjGeFuTzH7c0BP8grfXtx07kBDLbF09scMdrUbRAYN4rQQS9ex8Gj%2Fo5IRM2WBmYGHQK7%2FH2jOVHjCn62fTHdq8Sna604xRGZu%2BM%2FewZXS9dUw3KYfoSBG%2BblDp%2BihNutbOeuYyEuyhna84li5Br9vIaElDbWIn5GnEFjV30q5AQm9yRxKCZibOW2yHSEOdGRewr0gYId0DCXm%2Fa%2BBjqkARfjNucAk36c4EQsPruz4MaawGsOMqTQS93Lygn1qwr1WXXi2s3ZCw08q2m8JNAhErc7rU8qitenoY1r4Hm6mTRMBSbmeH6y6J3DsDjd1YibVoRLRKrIXDKvl6uGwH3xDLSRKwmLKCMHEeYAr6gTsX7tTYdlUGu4c2NDC2UtfiaR2GCdkkGl5c9WS750fqYJT5LyeMcF6mnFpQWYJIO8wIygxLN3&X-Amz-Signature=15fd6a2adbb4adcef6fdb7bb0012d446b07d63f1b94ce6bc45202c57f7a6f7da&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJGSAKH4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCiWCx8%2B9w9DdqmMvVMvm23jjnhmf8k6aOjBgMjLKINywIhAKrEADGFykofk29RcO5bmayRHwtbptfvfZSycy72TDtmKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdwGHwF5sD%2FJ9YDRoq3AMQ5MTPjItQ7ldTLsemkekAFqgNnnwwYenJU9c0YQOyhmyGvia%2BwIN8Jo4oLYcZzwO0DwoxGuiN24dDm6Pgxayc3X4r%2B50k2jECakBN5q1Ht6cscSAMN8IFzbmJmYzqapOl1bQmf96XQ0xPIBKdpFGrmuQNFZxfh1ePl%2FhRPzb6Q6jaYxMtHgkf%2FvXiMRtgGhLCFsPAJrY%2BkCT66ItGWCAfqWUpoDsVv99d8JmoRSb7sx6tw6tiQ2wNwtgqeO3B%2FgImO4mrVJAUUWKYvFFEnH617R0cuXGxuqBMrqcrw%2BqYpCuCn7DiNYGGenxsKAsTDDUG%2FvGpvIvRgGCDL6%2FuuQ3sLJrzs1Wl%2BgcqueexiGrh8t0GMAyQWyneAhU1TJ1iLiXLHCvFixrqWzWgFrSBS6Na8eKZW3ZF4wT%2FDl7usz6JgW67tFtKjGeFuTzH7c0BP8grfXtx07kBDLbF09scMdrUbRAYN4rQQS9ex8Gj%2Fo5IRM2WBmYGHQK7%2FH2jOVHjCn62fTHdq8Sna604xRGZu%2BM%2FewZXS9dUw3KYfoSBG%2BblDp%2BihNutbOeuYyEuyhna84li5Br9vIaElDbWIn5GnEFjV30q5AQm9yRxKCZibOW2yHSEOdGRewr0gYId0DCXm%2Fa%2BBjqkARfjNucAk36c4EQsPruz4MaawGsOMqTQS93Lygn1qwr1WXXi2s3ZCw08q2m8JNAhErc7rU8qitenoY1r4Hm6mTRMBSbmeH6y6J3DsDjd1YibVoRLRKrIXDKvl6uGwH3xDLSRKwmLKCMHEeYAr6gTsX7tTYdlUGu4c2NDC2UtfiaR2GCdkkGl5c9WS750fqYJT5LyeMcF6mnFpQWYJIO8wIygxLN3&X-Amz-Signature=20309536e2b9ab00db81c7996b516fc191deae3ca6de53748ad91499a9156913&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJGSAKH4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCiWCx8%2B9w9DdqmMvVMvm23jjnhmf8k6aOjBgMjLKINywIhAKrEADGFykofk29RcO5bmayRHwtbptfvfZSycy72TDtmKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdwGHwF5sD%2FJ9YDRoq3AMQ5MTPjItQ7ldTLsemkekAFqgNnnwwYenJU9c0YQOyhmyGvia%2BwIN8Jo4oLYcZzwO0DwoxGuiN24dDm6Pgxayc3X4r%2B50k2jECakBN5q1Ht6cscSAMN8IFzbmJmYzqapOl1bQmf96XQ0xPIBKdpFGrmuQNFZxfh1ePl%2FhRPzb6Q6jaYxMtHgkf%2FvXiMRtgGhLCFsPAJrY%2BkCT66ItGWCAfqWUpoDsVv99d8JmoRSb7sx6tw6tiQ2wNwtgqeO3B%2FgImO4mrVJAUUWKYvFFEnH617R0cuXGxuqBMrqcrw%2BqYpCuCn7DiNYGGenxsKAsTDDUG%2FvGpvIvRgGCDL6%2FuuQ3sLJrzs1Wl%2BgcqueexiGrh8t0GMAyQWyneAhU1TJ1iLiXLHCvFixrqWzWgFrSBS6Na8eKZW3ZF4wT%2FDl7usz6JgW67tFtKjGeFuTzH7c0BP8grfXtx07kBDLbF09scMdrUbRAYN4rQQS9ex8Gj%2Fo5IRM2WBmYGHQK7%2FH2jOVHjCn62fTHdq8Sna604xRGZu%2BM%2FewZXS9dUw3KYfoSBG%2BblDp%2BihNutbOeuYyEuyhna84li5Br9vIaElDbWIn5GnEFjV30q5AQm9yRxKCZibOW2yHSEOdGRewr0gYId0DCXm%2Fa%2BBjqkARfjNucAk36c4EQsPruz4MaawGsOMqTQS93Lygn1qwr1WXXi2s3ZCw08q2m8JNAhErc7rU8qitenoY1r4Hm6mTRMBSbmeH6y6J3DsDjd1YibVoRLRKrIXDKvl6uGwH3xDLSRKwmLKCMHEeYAr6gTsX7tTYdlUGu4c2NDC2UtfiaR2GCdkkGl5c9WS750fqYJT5LyeMcF6mnFpQWYJIO8wIygxLN3&X-Amz-Signature=e7a015e009ab328be05da5f4c77366528989c3734a2bfd74895cd25067c83a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJGSAKH4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCiWCx8%2B9w9DdqmMvVMvm23jjnhmf8k6aOjBgMjLKINywIhAKrEADGFykofk29RcO5bmayRHwtbptfvfZSycy72TDtmKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdwGHwF5sD%2FJ9YDRoq3AMQ5MTPjItQ7ldTLsemkekAFqgNnnwwYenJU9c0YQOyhmyGvia%2BwIN8Jo4oLYcZzwO0DwoxGuiN24dDm6Pgxayc3X4r%2B50k2jECakBN5q1Ht6cscSAMN8IFzbmJmYzqapOl1bQmf96XQ0xPIBKdpFGrmuQNFZxfh1ePl%2FhRPzb6Q6jaYxMtHgkf%2FvXiMRtgGhLCFsPAJrY%2BkCT66ItGWCAfqWUpoDsVv99d8JmoRSb7sx6tw6tiQ2wNwtgqeO3B%2FgImO4mrVJAUUWKYvFFEnH617R0cuXGxuqBMrqcrw%2BqYpCuCn7DiNYGGenxsKAsTDDUG%2FvGpvIvRgGCDL6%2FuuQ3sLJrzs1Wl%2BgcqueexiGrh8t0GMAyQWyneAhU1TJ1iLiXLHCvFixrqWzWgFrSBS6Na8eKZW3ZF4wT%2FDl7usz6JgW67tFtKjGeFuTzH7c0BP8grfXtx07kBDLbF09scMdrUbRAYN4rQQS9ex8Gj%2Fo5IRM2WBmYGHQK7%2FH2jOVHjCn62fTHdq8Sna604xRGZu%2BM%2FewZXS9dUw3KYfoSBG%2BblDp%2BihNutbOeuYyEuyhna84li5Br9vIaElDbWIn5GnEFjV30q5AQm9yRxKCZibOW2yHSEOdGRewr0gYId0DCXm%2Fa%2BBjqkARfjNucAk36c4EQsPruz4MaawGsOMqTQS93Lygn1qwr1WXXi2s3ZCw08q2m8JNAhErc7rU8qitenoY1r4Hm6mTRMBSbmeH6y6J3DsDjd1YibVoRLRKrIXDKvl6uGwH3xDLSRKwmLKCMHEeYAr6gTsX7tTYdlUGu4c2NDC2UtfiaR2GCdkkGl5c9WS750fqYJT5LyeMcF6mnFpQWYJIO8wIygxLN3&X-Amz-Signature=339adfa3b7c9b3daa3f32cb559882004b3030ff0216945464d78366e3ab7c310&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
