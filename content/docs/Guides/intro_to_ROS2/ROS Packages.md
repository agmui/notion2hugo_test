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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRLZ7PR4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGgF3lrRq%2F0VYCL%2BS37PbEK5bykYglS8ZnRi0nFwmnbAiBrk7aV4vbnjcqggBw6XO8yFY1QLT7dH8u1bD62e79PcyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpk7GxKlCmoQyfvZzKtwDAZoNL1ybsMH2SakjtvOYV6zudidsIJklhNWihUe6izvb43QDuFP%2BIog5etrQdy2A61CXGXuFleRdNQAtf2om03PMLsfyKV9%2BT0Lmck54aX3gccISiiRRs%2FVB2mkWJzpGMdrNJks38XBwvKwYSmT6tiGmnxf7DN66PQfzB1Omqr05E0I1UN5dQcWxeXPNgb0CiCPcVpVO%2F0GBOTsqfhY7UeTzLzdl%2FhXRHEqzooq6M7ZlUKs7PacNYFjt58y7r%2FWgXAicWaMESzC7Mt6GEEUqAcIoFAgZWRaTI9oHtpFQVYT%2B7C0hCT9wsQP%2BlCt53LRBn7ZTYkbjqKWtT8RQ%2F96kK200QIPImwsjimCk%2BRTIH6dG3ZbOMNL8wyg1qFJuygqiV3LTZeR2Tq9zfSn3MdTJobLhvFb7GcfAuK5SVpCiJ8HyGRhmnda2t5MHxL6kRDcFcAVIe%2BUhbgXttLqoq20n4AN9VVsTLARx5PozOZ8SZWDTj8K8TQ%2BEVb9eNHao12K1ZTKuat8rt1uZbJAAuMvRPpAnsDGMliZ4FPAUnJOX01Zm4QytKWeR7DfWYn2PdTA%2BDPbzVuvJBJwLsdklT%2F%2BKsbNd9lsL7l%2F%2F%2FBJdJcgxpjRs%2FJVndDVY5UWYqHgwsfr2vAY6pgE7yQ2WtYJopMI6AoEhAw6HYLgKeZTyw2U0dotnUls1Kdcu9JMV772On0JR9xRcgekuY5Xpo87iZyL0x%2FbsLstEFYRsnFItApxuStiTQCImEBIRrGa2%2FBriAiGyGhEYz9grXWZyQANlYfwa2HCo8FIjwPAhS5HoyjDZyLMpimpsZ3ihEdTMnDZwLEuMLNBV9pgxrFPt0R1TQPrR1FIQnV%2FpGHo%2Bvtlb&X-Amz-Signature=42af92a78d0384e60f97dea9e3215f62fc6c7b2042f560c587257d7690a2eb46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRLZ7PR4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGgF3lrRq%2F0VYCL%2BS37PbEK5bykYglS8ZnRi0nFwmnbAiBrk7aV4vbnjcqggBw6XO8yFY1QLT7dH8u1bD62e79PcyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpk7GxKlCmoQyfvZzKtwDAZoNL1ybsMH2SakjtvOYV6zudidsIJklhNWihUe6izvb43QDuFP%2BIog5etrQdy2A61CXGXuFleRdNQAtf2om03PMLsfyKV9%2BT0Lmck54aX3gccISiiRRs%2FVB2mkWJzpGMdrNJks38XBwvKwYSmT6tiGmnxf7DN66PQfzB1Omqr05E0I1UN5dQcWxeXPNgb0CiCPcVpVO%2F0GBOTsqfhY7UeTzLzdl%2FhXRHEqzooq6M7ZlUKs7PacNYFjt58y7r%2FWgXAicWaMESzC7Mt6GEEUqAcIoFAgZWRaTI9oHtpFQVYT%2B7C0hCT9wsQP%2BlCt53LRBn7ZTYkbjqKWtT8RQ%2F96kK200QIPImwsjimCk%2BRTIH6dG3ZbOMNL8wyg1qFJuygqiV3LTZeR2Tq9zfSn3MdTJobLhvFb7GcfAuK5SVpCiJ8HyGRhmnda2t5MHxL6kRDcFcAVIe%2BUhbgXttLqoq20n4AN9VVsTLARx5PozOZ8SZWDTj8K8TQ%2BEVb9eNHao12K1ZTKuat8rt1uZbJAAuMvRPpAnsDGMliZ4FPAUnJOX01Zm4QytKWeR7DfWYn2PdTA%2BDPbzVuvJBJwLsdklT%2F%2BKsbNd9lsL7l%2F%2F%2FBJdJcgxpjRs%2FJVndDVY5UWYqHgwsfr2vAY6pgE7yQ2WtYJopMI6AoEhAw6HYLgKeZTyw2U0dotnUls1Kdcu9JMV772On0JR9xRcgekuY5Xpo87iZyL0x%2FbsLstEFYRsnFItApxuStiTQCImEBIRrGa2%2FBriAiGyGhEYz9grXWZyQANlYfwa2HCo8FIjwPAhS5HoyjDZyLMpimpsZ3ihEdTMnDZwLEuMLNBV9pgxrFPt0R1TQPrR1FIQnV%2FpGHo%2Bvtlb&X-Amz-Signature=5947e43a35364e03a239031c6f1a0454dd55d160268bd20e46e8ea0e5b617e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRLZ7PR4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGgF3lrRq%2F0VYCL%2BS37PbEK5bykYglS8ZnRi0nFwmnbAiBrk7aV4vbnjcqggBw6XO8yFY1QLT7dH8u1bD62e79PcyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpk7GxKlCmoQyfvZzKtwDAZoNL1ybsMH2SakjtvOYV6zudidsIJklhNWihUe6izvb43QDuFP%2BIog5etrQdy2A61CXGXuFleRdNQAtf2om03PMLsfyKV9%2BT0Lmck54aX3gccISiiRRs%2FVB2mkWJzpGMdrNJks38XBwvKwYSmT6tiGmnxf7DN66PQfzB1Omqr05E0I1UN5dQcWxeXPNgb0CiCPcVpVO%2F0GBOTsqfhY7UeTzLzdl%2FhXRHEqzooq6M7ZlUKs7PacNYFjt58y7r%2FWgXAicWaMESzC7Mt6GEEUqAcIoFAgZWRaTI9oHtpFQVYT%2B7C0hCT9wsQP%2BlCt53LRBn7ZTYkbjqKWtT8RQ%2F96kK200QIPImwsjimCk%2BRTIH6dG3ZbOMNL8wyg1qFJuygqiV3LTZeR2Tq9zfSn3MdTJobLhvFb7GcfAuK5SVpCiJ8HyGRhmnda2t5MHxL6kRDcFcAVIe%2BUhbgXttLqoq20n4AN9VVsTLARx5PozOZ8SZWDTj8K8TQ%2BEVb9eNHao12K1ZTKuat8rt1uZbJAAuMvRPpAnsDGMliZ4FPAUnJOX01Zm4QytKWeR7DfWYn2PdTA%2BDPbzVuvJBJwLsdklT%2F%2BKsbNd9lsL7l%2F%2F%2FBJdJcgxpjRs%2FJVndDVY5UWYqHgwsfr2vAY6pgE7yQ2WtYJopMI6AoEhAw6HYLgKeZTyw2U0dotnUls1Kdcu9JMV772On0JR9xRcgekuY5Xpo87iZyL0x%2FbsLstEFYRsnFItApxuStiTQCImEBIRrGa2%2FBriAiGyGhEYz9grXWZyQANlYfwa2HCo8FIjwPAhS5HoyjDZyLMpimpsZ3ihEdTMnDZwLEuMLNBV9pgxrFPt0R1TQPrR1FIQnV%2FpGHo%2Bvtlb&X-Amz-Signature=1f984a4f951be419a75d2ce42dad64648ae4906c907b128eb4730c482ec6b607&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRLZ7PR4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGgF3lrRq%2F0VYCL%2BS37PbEK5bykYglS8ZnRi0nFwmnbAiBrk7aV4vbnjcqggBw6XO8yFY1QLT7dH8u1bD62e79PcyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpk7GxKlCmoQyfvZzKtwDAZoNL1ybsMH2SakjtvOYV6zudidsIJklhNWihUe6izvb43QDuFP%2BIog5etrQdy2A61CXGXuFleRdNQAtf2om03PMLsfyKV9%2BT0Lmck54aX3gccISiiRRs%2FVB2mkWJzpGMdrNJks38XBwvKwYSmT6tiGmnxf7DN66PQfzB1Omqr05E0I1UN5dQcWxeXPNgb0CiCPcVpVO%2F0GBOTsqfhY7UeTzLzdl%2FhXRHEqzooq6M7ZlUKs7PacNYFjt58y7r%2FWgXAicWaMESzC7Mt6GEEUqAcIoFAgZWRaTI9oHtpFQVYT%2B7C0hCT9wsQP%2BlCt53LRBn7ZTYkbjqKWtT8RQ%2F96kK200QIPImwsjimCk%2BRTIH6dG3ZbOMNL8wyg1qFJuygqiV3LTZeR2Tq9zfSn3MdTJobLhvFb7GcfAuK5SVpCiJ8HyGRhmnda2t5MHxL6kRDcFcAVIe%2BUhbgXttLqoq20n4AN9VVsTLARx5PozOZ8SZWDTj8K8TQ%2BEVb9eNHao12K1ZTKuat8rt1uZbJAAuMvRPpAnsDGMliZ4FPAUnJOX01Zm4QytKWeR7DfWYn2PdTA%2BDPbzVuvJBJwLsdklT%2F%2BKsbNd9lsL7l%2F%2F%2FBJdJcgxpjRs%2FJVndDVY5UWYqHgwsfr2vAY6pgE7yQ2WtYJopMI6AoEhAw6HYLgKeZTyw2U0dotnUls1Kdcu9JMV772On0JR9xRcgekuY5Xpo87iZyL0x%2FbsLstEFYRsnFItApxuStiTQCImEBIRrGa2%2FBriAiGyGhEYz9grXWZyQANlYfwa2HCo8FIjwPAhS5HoyjDZyLMpimpsZ3ihEdTMnDZwLEuMLNBV9pgxrFPt0R1TQPrR1FIQnV%2FpGHo%2Bvtlb&X-Amz-Signature=4f9666e488338d7d02a9716025343e2b0ac310c3c14ea461857854cdc5892db5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRLZ7PR4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGgF3lrRq%2F0VYCL%2BS37PbEK5bykYglS8ZnRi0nFwmnbAiBrk7aV4vbnjcqggBw6XO8yFY1QLT7dH8u1bD62e79PcyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpk7GxKlCmoQyfvZzKtwDAZoNL1ybsMH2SakjtvOYV6zudidsIJklhNWihUe6izvb43QDuFP%2BIog5etrQdy2A61CXGXuFleRdNQAtf2om03PMLsfyKV9%2BT0Lmck54aX3gccISiiRRs%2FVB2mkWJzpGMdrNJks38XBwvKwYSmT6tiGmnxf7DN66PQfzB1Omqr05E0I1UN5dQcWxeXPNgb0CiCPcVpVO%2F0GBOTsqfhY7UeTzLzdl%2FhXRHEqzooq6M7ZlUKs7PacNYFjt58y7r%2FWgXAicWaMESzC7Mt6GEEUqAcIoFAgZWRaTI9oHtpFQVYT%2B7C0hCT9wsQP%2BlCt53LRBn7ZTYkbjqKWtT8RQ%2F96kK200QIPImwsjimCk%2BRTIH6dG3ZbOMNL8wyg1qFJuygqiV3LTZeR2Tq9zfSn3MdTJobLhvFb7GcfAuK5SVpCiJ8HyGRhmnda2t5MHxL6kRDcFcAVIe%2BUhbgXttLqoq20n4AN9VVsTLARx5PozOZ8SZWDTj8K8TQ%2BEVb9eNHao12K1ZTKuat8rt1uZbJAAuMvRPpAnsDGMliZ4FPAUnJOX01Zm4QytKWeR7DfWYn2PdTA%2BDPbzVuvJBJwLsdklT%2F%2BKsbNd9lsL7l%2F%2F%2FBJdJcgxpjRs%2FJVndDVY5UWYqHgwsfr2vAY6pgE7yQ2WtYJopMI6AoEhAw6HYLgKeZTyw2U0dotnUls1Kdcu9JMV772On0JR9xRcgekuY5Xpo87iZyL0x%2FbsLstEFYRsnFItApxuStiTQCImEBIRrGa2%2FBriAiGyGhEYz9grXWZyQANlYfwa2HCo8FIjwPAhS5HoyjDZyLMpimpsZ3ihEdTMnDZwLEuMLNBV9pgxrFPt0R1TQPrR1FIQnV%2FpGHo%2Bvtlb&X-Amz-Signature=17cf626a1e3696d4cf6b5abb717c5652dcb1405d216bd5d7768207dd21f5fa63&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRLZ7PR4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGgF3lrRq%2F0VYCL%2BS37PbEK5bykYglS8ZnRi0nFwmnbAiBrk7aV4vbnjcqggBw6XO8yFY1QLT7dH8u1bD62e79PcyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpk7GxKlCmoQyfvZzKtwDAZoNL1ybsMH2SakjtvOYV6zudidsIJklhNWihUe6izvb43QDuFP%2BIog5etrQdy2A61CXGXuFleRdNQAtf2om03PMLsfyKV9%2BT0Lmck54aX3gccISiiRRs%2FVB2mkWJzpGMdrNJks38XBwvKwYSmT6tiGmnxf7DN66PQfzB1Omqr05E0I1UN5dQcWxeXPNgb0CiCPcVpVO%2F0GBOTsqfhY7UeTzLzdl%2FhXRHEqzooq6M7ZlUKs7PacNYFjt58y7r%2FWgXAicWaMESzC7Mt6GEEUqAcIoFAgZWRaTI9oHtpFQVYT%2B7C0hCT9wsQP%2BlCt53LRBn7ZTYkbjqKWtT8RQ%2F96kK200QIPImwsjimCk%2BRTIH6dG3ZbOMNL8wyg1qFJuygqiV3LTZeR2Tq9zfSn3MdTJobLhvFb7GcfAuK5SVpCiJ8HyGRhmnda2t5MHxL6kRDcFcAVIe%2BUhbgXttLqoq20n4AN9VVsTLARx5PozOZ8SZWDTj8K8TQ%2BEVb9eNHao12K1ZTKuat8rt1uZbJAAuMvRPpAnsDGMliZ4FPAUnJOX01Zm4QytKWeR7DfWYn2PdTA%2BDPbzVuvJBJwLsdklT%2F%2BKsbNd9lsL7l%2F%2F%2FBJdJcgxpjRs%2FJVndDVY5UWYqHgwsfr2vAY6pgE7yQ2WtYJopMI6AoEhAw6HYLgKeZTyw2U0dotnUls1Kdcu9JMV772On0JR9xRcgekuY5Xpo87iZyL0x%2FbsLstEFYRsnFItApxuStiTQCImEBIRrGa2%2FBriAiGyGhEYz9grXWZyQANlYfwa2HCo8FIjwPAhS5HoyjDZyLMpimpsZ3ihEdTMnDZwLEuMLNBV9pgxrFPt0R1TQPrR1FIQnV%2FpGHo%2Bvtlb&X-Amz-Signature=f14756480e7d0c9e7ec40b3f15729a6b608e31abdcdd5c62246f8ec5756c3fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRLZ7PR4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGgF3lrRq%2F0VYCL%2BS37PbEK5bykYglS8ZnRi0nFwmnbAiBrk7aV4vbnjcqggBw6XO8yFY1QLT7dH8u1bD62e79PcyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpk7GxKlCmoQyfvZzKtwDAZoNL1ybsMH2SakjtvOYV6zudidsIJklhNWihUe6izvb43QDuFP%2BIog5etrQdy2A61CXGXuFleRdNQAtf2om03PMLsfyKV9%2BT0Lmck54aX3gccISiiRRs%2FVB2mkWJzpGMdrNJks38XBwvKwYSmT6tiGmnxf7DN66PQfzB1Omqr05E0I1UN5dQcWxeXPNgb0CiCPcVpVO%2F0GBOTsqfhY7UeTzLzdl%2FhXRHEqzooq6M7ZlUKs7PacNYFjt58y7r%2FWgXAicWaMESzC7Mt6GEEUqAcIoFAgZWRaTI9oHtpFQVYT%2B7C0hCT9wsQP%2BlCt53LRBn7ZTYkbjqKWtT8RQ%2F96kK200QIPImwsjimCk%2BRTIH6dG3ZbOMNL8wyg1qFJuygqiV3LTZeR2Tq9zfSn3MdTJobLhvFb7GcfAuK5SVpCiJ8HyGRhmnda2t5MHxL6kRDcFcAVIe%2BUhbgXttLqoq20n4AN9VVsTLARx5PozOZ8SZWDTj8K8TQ%2BEVb9eNHao12K1ZTKuat8rt1uZbJAAuMvRPpAnsDGMliZ4FPAUnJOX01Zm4QytKWeR7DfWYn2PdTA%2BDPbzVuvJBJwLsdklT%2F%2BKsbNd9lsL7l%2F%2F%2FBJdJcgxpjRs%2FJVndDVY5UWYqHgwsfr2vAY6pgE7yQ2WtYJopMI6AoEhAw6HYLgKeZTyw2U0dotnUls1Kdcu9JMV772On0JR9xRcgekuY5Xpo87iZyL0x%2FbsLstEFYRsnFItApxuStiTQCImEBIRrGa2%2FBriAiGyGhEYz9grXWZyQANlYfwa2HCo8FIjwPAhS5HoyjDZyLMpimpsZ3ihEdTMnDZwLEuMLNBV9pgxrFPt0R1TQPrR1FIQnV%2FpGHo%2Bvtlb&X-Amz-Signature=fd6ff209e2be924daf04efb5c6ddbd092804da9de845c2fd9c7773e89dffe488&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
