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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474X7BY5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfm64yC3KLOrsU29q1MQFIvq1sdyzLmfZYQRyBGqsNAiEA284fTtuI8j%2BfU%2B0iTX3RG9Fsv6%2FC2HxlKBbCqnynGDYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLEIHDO%2Fcwbg6iPAvircAwjp96sGqTtrMDKANPvWmo96aq3LPDlKFblYnmpyDoG%2FMzXVskhrF58mB2NXH%2B2a66UUyKk9uyinj9Ub4mvHPDNmhuVxJe%2BORp9DBjgGVc8inTVy%2FnZhFmUnTBClw5jWV4Ml2fter1jcn%2BecWuAxCoP%2BdsRcI1oQp%2BG8LnZT99wM%2FpOTI3n4Lb8q69RFYaLRT9C0KXHxF4uW0p0hz%2Bp7YN1JSqgRJqaBMO6I7menCLxkyzF1MqsioHpGKj7iIHEBd4d1o7CISexjQGjO6dhBU3Qa8bh0S86Bn14WvKTYxHSf5rbLhie03AG7JDfZYREMAI8nJLOqTZcepBl1onf%2FjpPewdm26NQpx%2F5Yt376xTudTBbthsmnFYCJeXdAsV1t5dz%2Fg0ekZDn3QWbZpWpD%2FRNHNDBSpZbhD0LW20WXydivjfQ6OaTZs7WSnCUg91vv82wq%2BXV2btLKdu76TMalHV2qbDV51wlLeOQevoZq5iDZfAdB9AI7h4BZm3mT9VaJ%2FZhOuOgahpGNSXxZ%2Bexfhozx2pAA1xu1h1DH1L%2BRkWMEply4sn%2BKEaYoP7hAjNY%2BeknXwQIVweLKcj6O7rVmGldwHzIMf3zfW0i9zxP6feQDljXplqqt3IuDqQewMP2u6sAGOqUBNu2zQR94jw8fQS1uATRiamzforTLH1ixrHHXO9PYpPixHL6ugG8%2BSusl8T5QiKKHwZw2pCgMo482SOkbwXjepuk1s20tZmioSoMRvhO1PbHErSznILZX5Zpq7GG5AkRlFTkIv%2B6gGZHtT7HDXc5swiyBbzeEkaHRUcBGb%2FtXgzbCwvtMRPDHbhrtAJ1nucznrlfqL8YVPWtHB1XHM5nB00U2ejpa&X-Amz-Signature=342338778884e7b0a86267f3da7c232c7dd95b01bc2bab4ff6bca0b57f178f63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474X7BY5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfm64yC3KLOrsU29q1MQFIvq1sdyzLmfZYQRyBGqsNAiEA284fTtuI8j%2BfU%2B0iTX3RG9Fsv6%2FC2HxlKBbCqnynGDYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLEIHDO%2Fcwbg6iPAvircAwjp96sGqTtrMDKANPvWmo96aq3LPDlKFblYnmpyDoG%2FMzXVskhrF58mB2NXH%2B2a66UUyKk9uyinj9Ub4mvHPDNmhuVxJe%2BORp9DBjgGVc8inTVy%2FnZhFmUnTBClw5jWV4Ml2fter1jcn%2BecWuAxCoP%2BdsRcI1oQp%2BG8LnZT99wM%2FpOTI3n4Lb8q69RFYaLRT9C0KXHxF4uW0p0hz%2Bp7YN1JSqgRJqaBMO6I7menCLxkyzF1MqsioHpGKj7iIHEBd4d1o7CISexjQGjO6dhBU3Qa8bh0S86Bn14WvKTYxHSf5rbLhie03AG7JDfZYREMAI8nJLOqTZcepBl1onf%2FjpPewdm26NQpx%2F5Yt376xTudTBbthsmnFYCJeXdAsV1t5dz%2Fg0ekZDn3QWbZpWpD%2FRNHNDBSpZbhD0LW20WXydivjfQ6OaTZs7WSnCUg91vv82wq%2BXV2btLKdu76TMalHV2qbDV51wlLeOQevoZq5iDZfAdB9AI7h4BZm3mT9VaJ%2FZhOuOgahpGNSXxZ%2Bexfhozx2pAA1xu1h1DH1L%2BRkWMEply4sn%2BKEaYoP7hAjNY%2BeknXwQIVweLKcj6O7rVmGldwHzIMf3zfW0i9zxP6feQDljXplqqt3IuDqQewMP2u6sAGOqUBNu2zQR94jw8fQS1uATRiamzforTLH1ixrHHXO9PYpPixHL6ugG8%2BSusl8T5QiKKHwZw2pCgMo482SOkbwXjepuk1s20tZmioSoMRvhO1PbHErSznILZX5Zpq7GG5AkRlFTkIv%2B6gGZHtT7HDXc5swiyBbzeEkaHRUcBGb%2FtXgzbCwvtMRPDHbhrtAJ1nucznrlfqL8YVPWtHB1XHM5nB00U2ejpa&X-Amz-Signature=4a92d607c6982d060ba7f8bb844495f13e8b6b53d44462221f29cf4571dfe6bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474X7BY5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfm64yC3KLOrsU29q1MQFIvq1sdyzLmfZYQRyBGqsNAiEA284fTtuI8j%2BfU%2B0iTX3RG9Fsv6%2FC2HxlKBbCqnynGDYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLEIHDO%2Fcwbg6iPAvircAwjp96sGqTtrMDKANPvWmo96aq3LPDlKFblYnmpyDoG%2FMzXVskhrF58mB2NXH%2B2a66UUyKk9uyinj9Ub4mvHPDNmhuVxJe%2BORp9DBjgGVc8inTVy%2FnZhFmUnTBClw5jWV4Ml2fter1jcn%2BecWuAxCoP%2BdsRcI1oQp%2BG8LnZT99wM%2FpOTI3n4Lb8q69RFYaLRT9C0KXHxF4uW0p0hz%2Bp7YN1JSqgRJqaBMO6I7menCLxkyzF1MqsioHpGKj7iIHEBd4d1o7CISexjQGjO6dhBU3Qa8bh0S86Bn14WvKTYxHSf5rbLhie03AG7JDfZYREMAI8nJLOqTZcepBl1onf%2FjpPewdm26NQpx%2F5Yt376xTudTBbthsmnFYCJeXdAsV1t5dz%2Fg0ekZDn3QWbZpWpD%2FRNHNDBSpZbhD0LW20WXydivjfQ6OaTZs7WSnCUg91vv82wq%2BXV2btLKdu76TMalHV2qbDV51wlLeOQevoZq5iDZfAdB9AI7h4BZm3mT9VaJ%2FZhOuOgahpGNSXxZ%2Bexfhozx2pAA1xu1h1DH1L%2BRkWMEply4sn%2BKEaYoP7hAjNY%2BeknXwQIVweLKcj6O7rVmGldwHzIMf3zfW0i9zxP6feQDljXplqqt3IuDqQewMP2u6sAGOqUBNu2zQR94jw8fQS1uATRiamzforTLH1ixrHHXO9PYpPixHL6ugG8%2BSusl8T5QiKKHwZw2pCgMo482SOkbwXjepuk1s20tZmioSoMRvhO1PbHErSznILZX5Zpq7GG5AkRlFTkIv%2B6gGZHtT7HDXc5swiyBbzeEkaHRUcBGb%2FtXgzbCwvtMRPDHbhrtAJ1nucznrlfqL8YVPWtHB1XHM5nB00U2ejpa&X-Amz-Signature=1787a18dfead15d651f1e43d4e7ac28dff715002f874a23a347ad38d0b19f788&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474X7BY5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfm64yC3KLOrsU29q1MQFIvq1sdyzLmfZYQRyBGqsNAiEA284fTtuI8j%2BfU%2B0iTX3RG9Fsv6%2FC2HxlKBbCqnynGDYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLEIHDO%2Fcwbg6iPAvircAwjp96sGqTtrMDKANPvWmo96aq3LPDlKFblYnmpyDoG%2FMzXVskhrF58mB2NXH%2B2a66UUyKk9uyinj9Ub4mvHPDNmhuVxJe%2BORp9DBjgGVc8inTVy%2FnZhFmUnTBClw5jWV4Ml2fter1jcn%2BecWuAxCoP%2BdsRcI1oQp%2BG8LnZT99wM%2FpOTI3n4Lb8q69RFYaLRT9C0KXHxF4uW0p0hz%2Bp7YN1JSqgRJqaBMO6I7menCLxkyzF1MqsioHpGKj7iIHEBd4d1o7CISexjQGjO6dhBU3Qa8bh0S86Bn14WvKTYxHSf5rbLhie03AG7JDfZYREMAI8nJLOqTZcepBl1onf%2FjpPewdm26NQpx%2F5Yt376xTudTBbthsmnFYCJeXdAsV1t5dz%2Fg0ekZDn3QWbZpWpD%2FRNHNDBSpZbhD0LW20WXydivjfQ6OaTZs7WSnCUg91vv82wq%2BXV2btLKdu76TMalHV2qbDV51wlLeOQevoZq5iDZfAdB9AI7h4BZm3mT9VaJ%2FZhOuOgahpGNSXxZ%2Bexfhozx2pAA1xu1h1DH1L%2BRkWMEply4sn%2BKEaYoP7hAjNY%2BeknXwQIVweLKcj6O7rVmGldwHzIMf3zfW0i9zxP6feQDljXplqqt3IuDqQewMP2u6sAGOqUBNu2zQR94jw8fQS1uATRiamzforTLH1ixrHHXO9PYpPixHL6ugG8%2BSusl8T5QiKKHwZw2pCgMo482SOkbwXjepuk1s20tZmioSoMRvhO1PbHErSznILZX5Zpq7GG5AkRlFTkIv%2B6gGZHtT7HDXc5swiyBbzeEkaHRUcBGb%2FtXgzbCwvtMRPDHbhrtAJ1nucznrlfqL8YVPWtHB1XHM5nB00U2ejpa&X-Amz-Signature=641918664a0ecb6d2845bd1aeadcb4a7772051b5787420896465fd457c43a219&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474X7BY5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfm64yC3KLOrsU29q1MQFIvq1sdyzLmfZYQRyBGqsNAiEA284fTtuI8j%2BfU%2B0iTX3RG9Fsv6%2FC2HxlKBbCqnynGDYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLEIHDO%2Fcwbg6iPAvircAwjp96sGqTtrMDKANPvWmo96aq3LPDlKFblYnmpyDoG%2FMzXVskhrF58mB2NXH%2B2a66UUyKk9uyinj9Ub4mvHPDNmhuVxJe%2BORp9DBjgGVc8inTVy%2FnZhFmUnTBClw5jWV4Ml2fter1jcn%2BecWuAxCoP%2BdsRcI1oQp%2BG8LnZT99wM%2FpOTI3n4Lb8q69RFYaLRT9C0KXHxF4uW0p0hz%2Bp7YN1JSqgRJqaBMO6I7menCLxkyzF1MqsioHpGKj7iIHEBd4d1o7CISexjQGjO6dhBU3Qa8bh0S86Bn14WvKTYxHSf5rbLhie03AG7JDfZYREMAI8nJLOqTZcepBl1onf%2FjpPewdm26NQpx%2F5Yt376xTudTBbthsmnFYCJeXdAsV1t5dz%2Fg0ekZDn3QWbZpWpD%2FRNHNDBSpZbhD0LW20WXydivjfQ6OaTZs7WSnCUg91vv82wq%2BXV2btLKdu76TMalHV2qbDV51wlLeOQevoZq5iDZfAdB9AI7h4BZm3mT9VaJ%2FZhOuOgahpGNSXxZ%2Bexfhozx2pAA1xu1h1DH1L%2BRkWMEply4sn%2BKEaYoP7hAjNY%2BeknXwQIVweLKcj6O7rVmGldwHzIMf3zfW0i9zxP6feQDljXplqqt3IuDqQewMP2u6sAGOqUBNu2zQR94jw8fQS1uATRiamzforTLH1ixrHHXO9PYpPixHL6ugG8%2BSusl8T5QiKKHwZw2pCgMo482SOkbwXjepuk1s20tZmioSoMRvhO1PbHErSznILZX5Zpq7GG5AkRlFTkIv%2B6gGZHtT7HDXc5swiyBbzeEkaHRUcBGb%2FtXgzbCwvtMRPDHbhrtAJ1nucznrlfqL8YVPWtHB1XHM5nB00U2ejpa&X-Amz-Signature=69be7d6601f5263c8a8c9fe82229afcb65a21027cbff36ec5bf32c2cfc314b15&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474X7BY5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfm64yC3KLOrsU29q1MQFIvq1sdyzLmfZYQRyBGqsNAiEA284fTtuI8j%2BfU%2B0iTX3RG9Fsv6%2FC2HxlKBbCqnynGDYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLEIHDO%2Fcwbg6iPAvircAwjp96sGqTtrMDKANPvWmo96aq3LPDlKFblYnmpyDoG%2FMzXVskhrF58mB2NXH%2B2a66UUyKk9uyinj9Ub4mvHPDNmhuVxJe%2BORp9DBjgGVc8inTVy%2FnZhFmUnTBClw5jWV4Ml2fter1jcn%2BecWuAxCoP%2BdsRcI1oQp%2BG8LnZT99wM%2FpOTI3n4Lb8q69RFYaLRT9C0KXHxF4uW0p0hz%2Bp7YN1JSqgRJqaBMO6I7menCLxkyzF1MqsioHpGKj7iIHEBd4d1o7CISexjQGjO6dhBU3Qa8bh0S86Bn14WvKTYxHSf5rbLhie03AG7JDfZYREMAI8nJLOqTZcepBl1onf%2FjpPewdm26NQpx%2F5Yt376xTudTBbthsmnFYCJeXdAsV1t5dz%2Fg0ekZDn3QWbZpWpD%2FRNHNDBSpZbhD0LW20WXydivjfQ6OaTZs7WSnCUg91vv82wq%2BXV2btLKdu76TMalHV2qbDV51wlLeOQevoZq5iDZfAdB9AI7h4BZm3mT9VaJ%2FZhOuOgahpGNSXxZ%2Bexfhozx2pAA1xu1h1DH1L%2BRkWMEply4sn%2BKEaYoP7hAjNY%2BeknXwQIVweLKcj6O7rVmGldwHzIMf3zfW0i9zxP6feQDljXplqqt3IuDqQewMP2u6sAGOqUBNu2zQR94jw8fQS1uATRiamzforTLH1ixrHHXO9PYpPixHL6ugG8%2BSusl8T5QiKKHwZw2pCgMo482SOkbwXjepuk1s20tZmioSoMRvhO1PbHErSznILZX5Zpq7GG5AkRlFTkIv%2B6gGZHtT7HDXc5swiyBbzeEkaHRUcBGb%2FtXgzbCwvtMRPDHbhrtAJ1nucznrlfqL8YVPWtHB1XHM5nB00U2ejpa&X-Amz-Signature=b41024c036b313d0a677d6900ff21fea3313958a16b878534a99137a7b5b48bd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474X7BY5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlfm64yC3KLOrsU29q1MQFIvq1sdyzLmfZYQRyBGqsNAiEA284fTtuI8j%2BfU%2B0iTX3RG9Fsv6%2FC2HxlKBbCqnynGDYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLEIHDO%2Fcwbg6iPAvircAwjp96sGqTtrMDKANPvWmo96aq3LPDlKFblYnmpyDoG%2FMzXVskhrF58mB2NXH%2B2a66UUyKk9uyinj9Ub4mvHPDNmhuVxJe%2BORp9DBjgGVc8inTVy%2FnZhFmUnTBClw5jWV4Ml2fter1jcn%2BecWuAxCoP%2BdsRcI1oQp%2BG8LnZT99wM%2FpOTI3n4Lb8q69RFYaLRT9C0KXHxF4uW0p0hz%2Bp7YN1JSqgRJqaBMO6I7menCLxkyzF1MqsioHpGKj7iIHEBd4d1o7CISexjQGjO6dhBU3Qa8bh0S86Bn14WvKTYxHSf5rbLhie03AG7JDfZYREMAI8nJLOqTZcepBl1onf%2FjpPewdm26NQpx%2F5Yt376xTudTBbthsmnFYCJeXdAsV1t5dz%2Fg0ekZDn3QWbZpWpD%2FRNHNDBSpZbhD0LW20WXydivjfQ6OaTZs7WSnCUg91vv82wq%2BXV2btLKdu76TMalHV2qbDV51wlLeOQevoZq5iDZfAdB9AI7h4BZm3mT9VaJ%2FZhOuOgahpGNSXxZ%2Bexfhozx2pAA1xu1h1DH1L%2BRkWMEply4sn%2BKEaYoP7hAjNY%2BeknXwQIVweLKcj6O7rVmGldwHzIMf3zfW0i9zxP6feQDljXplqqt3IuDqQewMP2u6sAGOqUBNu2zQR94jw8fQS1uATRiamzforTLH1ixrHHXO9PYpPixHL6ugG8%2BSusl8T5QiKKHwZw2pCgMo482SOkbwXjepuk1s20tZmioSoMRvhO1PbHErSznILZX5Zpq7GG5AkRlFTkIv%2B6gGZHtT7HDXc5swiyBbzeEkaHRUcBGb%2FtXgzbCwvtMRPDHbhrtAJ1nucznrlfqL8YVPWtHB1XHM5nB00U2ejpa&X-Amz-Signature=d02b60e610e9aa48d82c1bd69120497bb9d772cc8e6a0706ac328f2e61335321&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
