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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRQ5PQY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSZEKR4sVKHYQK1VdhO42OT5ndbA7CrFyvThQuKPmaOwIhAJq4LHVjfLwSrYYwdoNkFflfSLS4XRmq825tgRj%2FwWQNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEPT8zMsg5T4MYWUwq3AN8Nzf8gviyLzTtieRridnV%2FY%2BvlHX9QsK7AedNlk6SeYAS5%2FgoHqGdabjmgwHCZP1IGWEe18UfHwbp0cU2VgwjWVDXznN9N9bk2SZhw%2FPDtIhJ95oCtK5depawzsNk%2BBNAnIsxLRcAm1OzFLiVdYU2er9ppoKOwXRivDHTKpjtIqe0WtsQBZlxPx1jA3nlxP6fKUZGQ4FAvIPLPtl33GOeScZ7ld%2FwF0f84Q7FcWdJxFSVd1k%2F655hdaVQFNxkn95197cSP2vpZMrTWyP526f6tGiPrZJbYtJeSAd0GjiQOh7ZXdz5JrbK7RnpGhpf%2BNreHN%2BB0yIax8QnQt161tL4D%2BEGthf33FeFls9FavSW7gesuEeH0AlPC1TQ2N%2BQaOYv%2FppVidX6T361YljaJRjmhyp3ixiIp%2BOnRozpZa4HpDkpXjy4xZrXQbQpGKEf52flE7qupIU%2F43dbV1g6HFd4Pu9FTu%2FSoJby9E06FR7kmz%2BXei12nn7HOLIANbjD1GpVLWbbO775CqGdhx9cj%2F%2BPUVO79TOnLoSjlRAQInKu3MRIy4VwA4O7bWRDdmVJxcI1n0aHLWRfv1bTzaZTgefUYqCJFzR7bt4A6Y1OTSTFntBISO31yhcqbTmhvTCAkNvCBjqkAQCJW7cLNyiRQonjayNPRFSAmaDTbomo7FmgJ9jTyIKlfVPipFkwKQ4Zoz%2FwKfpKr0LBcsXIJ17KRQuic%2FtB%2Fmcfjdxl%2Fscj30X8PNNOJI9Xc59YYZlxURW%2BWqvYMG4gCrGcco83p6BTew3sheFTxyDinAbLN6POVDofC%2BEdw1O8qp8fGHDuGaWrTDVgN9pfRH%2Bd9JahVg1MDBuRKH8MsD1csKuS&X-Amz-Signature=ac9dbcd0435ff18227e027c98ee1865bc953bb9ef009c1a0b97bcbb4d94a3325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRQ5PQY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSZEKR4sVKHYQK1VdhO42OT5ndbA7CrFyvThQuKPmaOwIhAJq4LHVjfLwSrYYwdoNkFflfSLS4XRmq825tgRj%2FwWQNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEPT8zMsg5T4MYWUwq3AN8Nzf8gviyLzTtieRridnV%2FY%2BvlHX9QsK7AedNlk6SeYAS5%2FgoHqGdabjmgwHCZP1IGWEe18UfHwbp0cU2VgwjWVDXznN9N9bk2SZhw%2FPDtIhJ95oCtK5depawzsNk%2BBNAnIsxLRcAm1OzFLiVdYU2er9ppoKOwXRivDHTKpjtIqe0WtsQBZlxPx1jA3nlxP6fKUZGQ4FAvIPLPtl33GOeScZ7ld%2FwF0f84Q7FcWdJxFSVd1k%2F655hdaVQFNxkn95197cSP2vpZMrTWyP526f6tGiPrZJbYtJeSAd0GjiQOh7ZXdz5JrbK7RnpGhpf%2BNreHN%2BB0yIax8QnQt161tL4D%2BEGthf33FeFls9FavSW7gesuEeH0AlPC1TQ2N%2BQaOYv%2FppVidX6T361YljaJRjmhyp3ixiIp%2BOnRozpZa4HpDkpXjy4xZrXQbQpGKEf52flE7qupIU%2F43dbV1g6HFd4Pu9FTu%2FSoJby9E06FR7kmz%2BXei12nn7HOLIANbjD1GpVLWbbO775CqGdhx9cj%2F%2BPUVO79TOnLoSjlRAQInKu3MRIy4VwA4O7bWRDdmVJxcI1n0aHLWRfv1bTzaZTgefUYqCJFzR7bt4A6Y1OTSTFntBISO31yhcqbTmhvTCAkNvCBjqkAQCJW7cLNyiRQonjayNPRFSAmaDTbomo7FmgJ9jTyIKlfVPipFkwKQ4Zoz%2FwKfpKr0LBcsXIJ17KRQuic%2FtB%2Fmcfjdxl%2Fscj30X8PNNOJI9Xc59YYZlxURW%2BWqvYMG4gCrGcco83p6BTew3sheFTxyDinAbLN6POVDofC%2BEdw1O8qp8fGHDuGaWrTDVgN9pfRH%2Bd9JahVg1MDBuRKH8MsD1csKuS&X-Amz-Signature=3d3be9ec1e35bdfeff174d768e37abad7f6dea6bf828189b7969d3588e3841ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRQ5PQY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSZEKR4sVKHYQK1VdhO42OT5ndbA7CrFyvThQuKPmaOwIhAJq4LHVjfLwSrYYwdoNkFflfSLS4XRmq825tgRj%2FwWQNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEPT8zMsg5T4MYWUwq3AN8Nzf8gviyLzTtieRridnV%2FY%2BvlHX9QsK7AedNlk6SeYAS5%2FgoHqGdabjmgwHCZP1IGWEe18UfHwbp0cU2VgwjWVDXznN9N9bk2SZhw%2FPDtIhJ95oCtK5depawzsNk%2BBNAnIsxLRcAm1OzFLiVdYU2er9ppoKOwXRivDHTKpjtIqe0WtsQBZlxPx1jA3nlxP6fKUZGQ4FAvIPLPtl33GOeScZ7ld%2FwF0f84Q7FcWdJxFSVd1k%2F655hdaVQFNxkn95197cSP2vpZMrTWyP526f6tGiPrZJbYtJeSAd0GjiQOh7ZXdz5JrbK7RnpGhpf%2BNreHN%2BB0yIax8QnQt161tL4D%2BEGthf33FeFls9FavSW7gesuEeH0AlPC1TQ2N%2BQaOYv%2FppVidX6T361YljaJRjmhyp3ixiIp%2BOnRozpZa4HpDkpXjy4xZrXQbQpGKEf52flE7qupIU%2F43dbV1g6HFd4Pu9FTu%2FSoJby9E06FR7kmz%2BXei12nn7HOLIANbjD1GpVLWbbO775CqGdhx9cj%2F%2BPUVO79TOnLoSjlRAQInKu3MRIy4VwA4O7bWRDdmVJxcI1n0aHLWRfv1bTzaZTgefUYqCJFzR7bt4A6Y1OTSTFntBISO31yhcqbTmhvTCAkNvCBjqkAQCJW7cLNyiRQonjayNPRFSAmaDTbomo7FmgJ9jTyIKlfVPipFkwKQ4Zoz%2FwKfpKr0LBcsXIJ17KRQuic%2FtB%2Fmcfjdxl%2Fscj30X8PNNOJI9Xc59YYZlxURW%2BWqvYMG4gCrGcco83p6BTew3sheFTxyDinAbLN6POVDofC%2BEdw1O8qp8fGHDuGaWrTDVgN9pfRH%2Bd9JahVg1MDBuRKH8MsD1csKuS&X-Amz-Signature=33316029046052f8b0b6a364b4fe2c8316da13074f8ef2fe669d6a6e14fc32b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRQ5PQY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSZEKR4sVKHYQK1VdhO42OT5ndbA7CrFyvThQuKPmaOwIhAJq4LHVjfLwSrYYwdoNkFflfSLS4XRmq825tgRj%2FwWQNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEPT8zMsg5T4MYWUwq3AN8Nzf8gviyLzTtieRridnV%2FY%2BvlHX9QsK7AedNlk6SeYAS5%2FgoHqGdabjmgwHCZP1IGWEe18UfHwbp0cU2VgwjWVDXznN9N9bk2SZhw%2FPDtIhJ95oCtK5depawzsNk%2BBNAnIsxLRcAm1OzFLiVdYU2er9ppoKOwXRivDHTKpjtIqe0WtsQBZlxPx1jA3nlxP6fKUZGQ4FAvIPLPtl33GOeScZ7ld%2FwF0f84Q7FcWdJxFSVd1k%2F655hdaVQFNxkn95197cSP2vpZMrTWyP526f6tGiPrZJbYtJeSAd0GjiQOh7ZXdz5JrbK7RnpGhpf%2BNreHN%2BB0yIax8QnQt161tL4D%2BEGthf33FeFls9FavSW7gesuEeH0AlPC1TQ2N%2BQaOYv%2FppVidX6T361YljaJRjmhyp3ixiIp%2BOnRozpZa4HpDkpXjy4xZrXQbQpGKEf52flE7qupIU%2F43dbV1g6HFd4Pu9FTu%2FSoJby9E06FR7kmz%2BXei12nn7HOLIANbjD1GpVLWbbO775CqGdhx9cj%2F%2BPUVO79TOnLoSjlRAQInKu3MRIy4VwA4O7bWRDdmVJxcI1n0aHLWRfv1bTzaZTgefUYqCJFzR7bt4A6Y1OTSTFntBISO31yhcqbTmhvTCAkNvCBjqkAQCJW7cLNyiRQonjayNPRFSAmaDTbomo7FmgJ9jTyIKlfVPipFkwKQ4Zoz%2FwKfpKr0LBcsXIJ17KRQuic%2FtB%2Fmcfjdxl%2Fscj30X8PNNOJI9Xc59YYZlxURW%2BWqvYMG4gCrGcco83p6BTew3sheFTxyDinAbLN6POVDofC%2BEdw1O8qp8fGHDuGaWrTDVgN9pfRH%2Bd9JahVg1MDBuRKH8MsD1csKuS&X-Amz-Signature=08da094bd22442d549841e130198a22c1c6503bf5acf86cf3267621ee75acc26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRQ5PQY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSZEKR4sVKHYQK1VdhO42OT5ndbA7CrFyvThQuKPmaOwIhAJq4LHVjfLwSrYYwdoNkFflfSLS4XRmq825tgRj%2FwWQNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEPT8zMsg5T4MYWUwq3AN8Nzf8gviyLzTtieRridnV%2FY%2BvlHX9QsK7AedNlk6SeYAS5%2FgoHqGdabjmgwHCZP1IGWEe18UfHwbp0cU2VgwjWVDXznN9N9bk2SZhw%2FPDtIhJ95oCtK5depawzsNk%2BBNAnIsxLRcAm1OzFLiVdYU2er9ppoKOwXRivDHTKpjtIqe0WtsQBZlxPx1jA3nlxP6fKUZGQ4FAvIPLPtl33GOeScZ7ld%2FwF0f84Q7FcWdJxFSVd1k%2F655hdaVQFNxkn95197cSP2vpZMrTWyP526f6tGiPrZJbYtJeSAd0GjiQOh7ZXdz5JrbK7RnpGhpf%2BNreHN%2BB0yIax8QnQt161tL4D%2BEGthf33FeFls9FavSW7gesuEeH0AlPC1TQ2N%2BQaOYv%2FppVidX6T361YljaJRjmhyp3ixiIp%2BOnRozpZa4HpDkpXjy4xZrXQbQpGKEf52flE7qupIU%2F43dbV1g6HFd4Pu9FTu%2FSoJby9E06FR7kmz%2BXei12nn7HOLIANbjD1GpVLWbbO775CqGdhx9cj%2F%2BPUVO79TOnLoSjlRAQInKu3MRIy4VwA4O7bWRDdmVJxcI1n0aHLWRfv1bTzaZTgefUYqCJFzR7bt4A6Y1OTSTFntBISO31yhcqbTmhvTCAkNvCBjqkAQCJW7cLNyiRQonjayNPRFSAmaDTbomo7FmgJ9jTyIKlfVPipFkwKQ4Zoz%2FwKfpKr0LBcsXIJ17KRQuic%2FtB%2Fmcfjdxl%2Fscj30X8PNNOJI9Xc59YYZlxURW%2BWqvYMG4gCrGcco83p6BTew3sheFTxyDinAbLN6POVDofC%2BEdw1O8qp8fGHDuGaWrTDVgN9pfRH%2Bd9JahVg1MDBuRKH8MsD1csKuS&X-Amz-Signature=26d59b4fb4c1e6d2b94b59d7834199d92519681f39a5c442df7705a98f600776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRQ5PQY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSZEKR4sVKHYQK1VdhO42OT5ndbA7CrFyvThQuKPmaOwIhAJq4LHVjfLwSrYYwdoNkFflfSLS4XRmq825tgRj%2FwWQNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEPT8zMsg5T4MYWUwq3AN8Nzf8gviyLzTtieRridnV%2FY%2BvlHX9QsK7AedNlk6SeYAS5%2FgoHqGdabjmgwHCZP1IGWEe18UfHwbp0cU2VgwjWVDXznN9N9bk2SZhw%2FPDtIhJ95oCtK5depawzsNk%2BBNAnIsxLRcAm1OzFLiVdYU2er9ppoKOwXRivDHTKpjtIqe0WtsQBZlxPx1jA3nlxP6fKUZGQ4FAvIPLPtl33GOeScZ7ld%2FwF0f84Q7FcWdJxFSVd1k%2F655hdaVQFNxkn95197cSP2vpZMrTWyP526f6tGiPrZJbYtJeSAd0GjiQOh7ZXdz5JrbK7RnpGhpf%2BNreHN%2BB0yIax8QnQt161tL4D%2BEGthf33FeFls9FavSW7gesuEeH0AlPC1TQ2N%2BQaOYv%2FppVidX6T361YljaJRjmhyp3ixiIp%2BOnRozpZa4HpDkpXjy4xZrXQbQpGKEf52flE7qupIU%2F43dbV1g6HFd4Pu9FTu%2FSoJby9E06FR7kmz%2BXei12nn7HOLIANbjD1GpVLWbbO775CqGdhx9cj%2F%2BPUVO79TOnLoSjlRAQInKu3MRIy4VwA4O7bWRDdmVJxcI1n0aHLWRfv1bTzaZTgefUYqCJFzR7bt4A6Y1OTSTFntBISO31yhcqbTmhvTCAkNvCBjqkAQCJW7cLNyiRQonjayNPRFSAmaDTbomo7FmgJ9jTyIKlfVPipFkwKQ4Zoz%2FwKfpKr0LBcsXIJ17KRQuic%2FtB%2Fmcfjdxl%2Fscj30X8PNNOJI9Xc59YYZlxURW%2BWqvYMG4gCrGcco83p6BTew3sheFTxyDinAbLN6POVDofC%2BEdw1O8qp8fGHDuGaWrTDVgN9pfRH%2Bd9JahVg1MDBuRKH8MsD1csKuS&X-Amz-Signature=29fb98286992fcb7b13b6d77550838d4f8ae815ca1d69c0406dade1a5b306422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRQ5PQY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSZEKR4sVKHYQK1VdhO42OT5ndbA7CrFyvThQuKPmaOwIhAJq4LHVjfLwSrYYwdoNkFflfSLS4XRmq825tgRj%2FwWQNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEPT8zMsg5T4MYWUwq3AN8Nzf8gviyLzTtieRridnV%2FY%2BvlHX9QsK7AedNlk6SeYAS5%2FgoHqGdabjmgwHCZP1IGWEe18UfHwbp0cU2VgwjWVDXznN9N9bk2SZhw%2FPDtIhJ95oCtK5depawzsNk%2BBNAnIsxLRcAm1OzFLiVdYU2er9ppoKOwXRivDHTKpjtIqe0WtsQBZlxPx1jA3nlxP6fKUZGQ4FAvIPLPtl33GOeScZ7ld%2FwF0f84Q7FcWdJxFSVd1k%2F655hdaVQFNxkn95197cSP2vpZMrTWyP526f6tGiPrZJbYtJeSAd0GjiQOh7ZXdz5JrbK7RnpGhpf%2BNreHN%2BB0yIax8QnQt161tL4D%2BEGthf33FeFls9FavSW7gesuEeH0AlPC1TQ2N%2BQaOYv%2FppVidX6T361YljaJRjmhyp3ixiIp%2BOnRozpZa4HpDkpXjy4xZrXQbQpGKEf52flE7qupIU%2F43dbV1g6HFd4Pu9FTu%2FSoJby9E06FR7kmz%2BXei12nn7HOLIANbjD1GpVLWbbO775CqGdhx9cj%2F%2BPUVO79TOnLoSjlRAQInKu3MRIy4VwA4O7bWRDdmVJxcI1n0aHLWRfv1bTzaZTgefUYqCJFzR7bt4A6Y1OTSTFntBISO31yhcqbTmhvTCAkNvCBjqkAQCJW7cLNyiRQonjayNPRFSAmaDTbomo7FmgJ9jTyIKlfVPipFkwKQ4Zoz%2FwKfpKr0LBcsXIJ17KRQuic%2FtB%2Fmcfjdxl%2Fscj30X8PNNOJI9Xc59YYZlxURW%2BWqvYMG4gCrGcco83p6BTew3sheFTxyDinAbLN6POVDofC%2BEdw1O8qp8fGHDuGaWrTDVgN9pfRH%2Bd9JahVg1MDBuRKH8MsD1csKuS&X-Amz-Signature=beb8ccdb3384da333bd3aa00043e34984ffa9267d6fec936dce587d6ef237599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
