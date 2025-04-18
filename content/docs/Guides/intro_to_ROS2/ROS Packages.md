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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OCB54N%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2txqZ7ASIpWvVEP53gFwiTtUAl372Z1ymx1hYAUK1WAiANgq49BLgnruZ6gLKo4jMdp3rMKlQ5W27%2FgZqCDIrKqyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM67Pv3RIViw8ZprhrKtwDjypKQuYgUKw%2FUF%2FsuMQnUcl3KwrMu2ipgGY%2FLq6JMio%2FnqAOQPl%2Fq3Je080LmtpobMmGQr7WUpGXSLFjK0UNsg%2BVkmSQWhtcTfzhsDuJInKLxCcXqxTOgjH85J0O80qyHNC5XejeddTug1MnPqUFyC%2BB8MsZ6L0b8VhdTxLuVj%2FvvlxfuyKtkx96zcmhLa9k9p3mCOH7kx5iDh2BaOI7qOgMm19zxTni9C3BlltZZsTkRF%2BmZM3CQpxetB9SDhW%2B3iJ%2BvmJc6H4e0oisIWf5GmerisfzN21Xx%2BvAi3yHk0bf2uEFxIZZsdXen1%2BrBPvXmxFDA61LoX1emgkDafgAOQato0r5Fxulw1wFiZCnIi4xf2EMyFHYh1UgEjXiclSIgoZdLUjavjhuxInFQbs7J2oUADGaNeBOO6hypd6x8je9jAgJfcWWUFgAbRitqkYECk48eDQhVLEwnXKTBrqVHmQcrmFdEOe1pxtBDO05wj3VuWgKJze%2FS4%2BwLDxPqzmWInS2JDBBducewSIC8fCHayHYNVJ4lDzDaXG%2B7zFhtjGoTCfcYwp%2BZmmbOLthKC2K2MT5S8uPkbTbj2ARRKiT6uQQgCIwt7P5SnMiEleo6cZl8CNDF28ZZof%2BtC0wwtmGwAY6pgGsBLHdBH%2BUSYBMiN9zN80tu%2BYf26JrNZxzr0jiIF7UWhIWWkdgn5NkWGbDnTYcKHPLA45UeOkmCQqU6ZkxsD6LNASnEagOOnIBB9C9biV25FiICLb9pcmVbJVet7oF8sxy3K2LgKxO655lmR9RtzVxFf7iM0keGJArw%2F9oh1VTA898U1oqNuz%2BKb5y5pH27Fcm34lyAG9fuA4rlqbjpkleM7TGptOl&X-Amz-Signature=9c53c936396053b2b3fd01d75b4137b8ba79548d7c1f81f644b07234a9a156d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OCB54N%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2txqZ7ASIpWvVEP53gFwiTtUAl372Z1ymx1hYAUK1WAiANgq49BLgnruZ6gLKo4jMdp3rMKlQ5W27%2FgZqCDIrKqyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM67Pv3RIViw8ZprhrKtwDjypKQuYgUKw%2FUF%2FsuMQnUcl3KwrMu2ipgGY%2FLq6JMio%2FnqAOQPl%2Fq3Je080LmtpobMmGQr7WUpGXSLFjK0UNsg%2BVkmSQWhtcTfzhsDuJInKLxCcXqxTOgjH85J0O80qyHNC5XejeddTug1MnPqUFyC%2BB8MsZ6L0b8VhdTxLuVj%2FvvlxfuyKtkx96zcmhLa9k9p3mCOH7kx5iDh2BaOI7qOgMm19zxTni9C3BlltZZsTkRF%2BmZM3CQpxetB9SDhW%2B3iJ%2BvmJc6H4e0oisIWf5GmerisfzN21Xx%2BvAi3yHk0bf2uEFxIZZsdXen1%2BrBPvXmxFDA61LoX1emgkDafgAOQato0r5Fxulw1wFiZCnIi4xf2EMyFHYh1UgEjXiclSIgoZdLUjavjhuxInFQbs7J2oUADGaNeBOO6hypd6x8je9jAgJfcWWUFgAbRitqkYECk48eDQhVLEwnXKTBrqVHmQcrmFdEOe1pxtBDO05wj3VuWgKJze%2FS4%2BwLDxPqzmWInS2JDBBducewSIC8fCHayHYNVJ4lDzDaXG%2B7zFhtjGoTCfcYwp%2BZmmbOLthKC2K2MT5S8uPkbTbj2ARRKiT6uQQgCIwt7P5SnMiEleo6cZl8CNDF28ZZof%2BtC0wwtmGwAY6pgGsBLHdBH%2BUSYBMiN9zN80tu%2BYf26JrNZxzr0jiIF7UWhIWWkdgn5NkWGbDnTYcKHPLA45UeOkmCQqU6ZkxsD6LNASnEagOOnIBB9C9biV25FiICLb9pcmVbJVet7oF8sxy3K2LgKxO655lmR9RtzVxFf7iM0keGJArw%2F9oh1VTA898U1oqNuz%2BKb5y5pH27Fcm34lyAG9fuA4rlqbjpkleM7TGptOl&X-Amz-Signature=8097336d0b40dfb69f1280b5790a1682dc4125d965411309e75010fa05b280be&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OCB54N%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2txqZ7ASIpWvVEP53gFwiTtUAl372Z1ymx1hYAUK1WAiANgq49BLgnruZ6gLKo4jMdp3rMKlQ5W27%2FgZqCDIrKqyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM67Pv3RIViw8ZprhrKtwDjypKQuYgUKw%2FUF%2FsuMQnUcl3KwrMu2ipgGY%2FLq6JMio%2FnqAOQPl%2Fq3Je080LmtpobMmGQr7WUpGXSLFjK0UNsg%2BVkmSQWhtcTfzhsDuJInKLxCcXqxTOgjH85J0O80qyHNC5XejeddTug1MnPqUFyC%2BB8MsZ6L0b8VhdTxLuVj%2FvvlxfuyKtkx96zcmhLa9k9p3mCOH7kx5iDh2BaOI7qOgMm19zxTni9C3BlltZZsTkRF%2BmZM3CQpxetB9SDhW%2B3iJ%2BvmJc6H4e0oisIWf5GmerisfzN21Xx%2BvAi3yHk0bf2uEFxIZZsdXen1%2BrBPvXmxFDA61LoX1emgkDafgAOQato0r5Fxulw1wFiZCnIi4xf2EMyFHYh1UgEjXiclSIgoZdLUjavjhuxInFQbs7J2oUADGaNeBOO6hypd6x8je9jAgJfcWWUFgAbRitqkYECk48eDQhVLEwnXKTBrqVHmQcrmFdEOe1pxtBDO05wj3VuWgKJze%2FS4%2BwLDxPqzmWInS2JDBBducewSIC8fCHayHYNVJ4lDzDaXG%2B7zFhtjGoTCfcYwp%2BZmmbOLthKC2K2MT5S8uPkbTbj2ARRKiT6uQQgCIwt7P5SnMiEleo6cZl8CNDF28ZZof%2BtC0wwtmGwAY6pgGsBLHdBH%2BUSYBMiN9zN80tu%2BYf26JrNZxzr0jiIF7UWhIWWkdgn5NkWGbDnTYcKHPLA45UeOkmCQqU6ZkxsD6LNASnEagOOnIBB9C9biV25FiICLb9pcmVbJVet7oF8sxy3K2LgKxO655lmR9RtzVxFf7iM0keGJArw%2F9oh1VTA898U1oqNuz%2BKb5y5pH27Fcm34lyAG9fuA4rlqbjpkleM7TGptOl&X-Amz-Signature=e9028b4ee9e3476f2db53d0328cba07e05ae5602c21a7ab226620e41ab519b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OCB54N%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2txqZ7ASIpWvVEP53gFwiTtUAl372Z1ymx1hYAUK1WAiANgq49BLgnruZ6gLKo4jMdp3rMKlQ5W27%2FgZqCDIrKqyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM67Pv3RIViw8ZprhrKtwDjypKQuYgUKw%2FUF%2FsuMQnUcl3KwrMu2ipgGY%2FLq6JMio%2FnqAOQPl%2Fq3Je080LmtpobMmGQr7WUpGXSLFjK0UNsg%2BVkmSQWhtcTfzhsDuJInKLxCcXqxTOgjH85J0O80qyHNC5XejeddTug1MnPqUFyC%2BB8MsZ6L0b8VhdTxLuVj%2FvvlxfuyKtkx96zcmhLa9k9p3mCOH7kx5iDh2BaOI7qOgMm19zxTni9C3BlltZZsTkRF%2BmZM3CQpxetB9SDhW%2B3iJ%2BvmJc6H4e0oisIWf5GmerisfzN21Xx%2BvAi3yHk0bf2uEFxIZZsdXen1%2BrBPvXmxFDA61LoX1emgkDafgAOQato0r5Fxulw1wFiZCnIi4xf2EMyFHYh1UgEjXiclSIgoZdLUjavjhuxInFQbs7J2oUADGaNeBOO6hypd6x8je9jAgJfcWWUFgAbRitqkYECk48eDQhVLEwnXKTBrqVHmQcrmFdEOe1pxtBDO05wj3VuWgKJze%2FS4%2BwLDxPqzmWInS2JDBBducewSIC8fCHayHYNVJ4lDzDaXG%2B7zFhtjGoTCfcYwp%2BZmmbOLthKC2K2MT5S8uPkbTbj2ARRKiT6uQQgCIwt7P5SnMiEleo6cZl8CNDF28ZZof%2BtC0wwtmGwAY6pgGsBLHdBH%2BUSYBMiN9zN80tu%2BYf26JrNZxzr0jiIF7UWhIWWkdgn5NkWGbDnTYcKHPLA45UeOkmCQqU6ZkxsD6LNASnEagOOnIBB9C9biV25FiICLb9pcmVbJVet7oF8sxy3K2LgKxO655lmR9RtzVxFf7iM0keGJArw%2F9oh1VTA898U1oqNuz%2BKb5y5pH27Fcm34lyAG9fuA4rlqbjpkleM7TGptOl&X-Amz-Signature=9c71b38b1f0f72eb153b52e4daa909242237e23e3b09560e7b59883375be4ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OCB54N%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2txqZ7ASIpWvVEP53gFwiTtUAl372Z1ymx1hYAUK1WAiANgq49BLgnruZ6gLKo4jMdp3rMKlQ5W27%2FgZqCDIrKqyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM67Pv3RIViw8ZprhrKtwDjypKQuYgUKw%2FUF%2FsuMQnUcl3KwrMu2ipgGY%2FLq6JMio%2FnqAOQPl%2Fq3Je080LmtpobMmGQr7WUpGXSLFjK0UNsg%2BVkmSQWhtcTfzhsDuJInKLxCcXqxTOgjH85J0O80qyHNC5XejeddTug1MnPqUFyC%2BB8MsZ6L0b8VhdTxLuVj%2FvvlxfuyKtkx96zcmhLa9k9p3mCOH7kx5iDh2BaOI7qOgMm19zxTni9C3BlltZZsTkRF%2BmZM3CQpxetB9SDhW%2B3iJ%2BvmJc6H4e0oisIWf5GmerisfzN21Xx%2BvAi3yHk0bf2uEFxIZZsdXen1%2BrBPvXmxFDA61LoX1emgkDafgAOQato0r5Fxulw1wFiZCnIi4xf2EMyFHYh1UgEjXiclSIgoZdLUjavjhuxInFQbs7J2oUADGaNeBOO6hypd6x8je9jAgJfcWWUFgAbRitqkYECk48eDQhVLEwnXKTBrqVHmQcrmFdEOe1pxtBDO05wj3VuWgKJze%2FS4%2BwLDxPqzmWInS2JDBBducewSIC8fCHayHYNVJ4lDzDaXG%2B7zFhtjGoTCfcYwp%2BZmmbOLthKC2K2MT5S8uPkbTbj2ARRKiT6uQQgCIwt7P5SnMiEleo6cZl8CNDF28ZZof%2BtC0wwtmGwAY6pgGsBLHdBH%2BUSYBMiN9zN80tu%2BYf26JrNZxzr0jiIF7UWhIWWkdgn5NkWGbDnTYcKHPLA45UeOkmCQqU6ZkxsD6LNASnEagOOnIBB9C9biV25FiICLb9pcmVbJVet7oF8sxy3K2LgKxO655lmR9RtzVxFf7iM0keGJArw%2F9oh1VTA898U1oqNuz%2BKb5y5pH27Fcm34lyAG9fuA4rlqbjpkleM7TGptOl&X-Amz-Signature=cdd8165e84dba155042408f9651b2e3ece3dca7060cddc17d95da2e6ee74e14e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OCB54N%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2txqZ7ASIpWvVEP53gFwiTtUAl372Z1ymx1hYAUK1WAiANgq49BLgnruZ6gLKo4jMdp3rMKlQ5W27%2FgZqCDIrKqyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM67Pv3RIViw8ZprhrKtwDjypKQuYgUKw%2FUF%2FsuMQnUcl3KwrMu2ipgGY%2FLq6JMio%2FnqAOQPl%2Fq3Je080LmtpobMmGQr7WUpGXSLFjK0UNsg%2BVkmSQWhtcTfzhsDuJInKLxCcXqxTOgjH85J0O80qyHNC5XejeddTug1MnPqUFyC%2BB8MsZ6L0b8VhdTxLuVj%2FvvlxfuyKtkx96zcmhLa9k9p3mCOH7kx5iDh2BaOI7qOgMm19zxTni9C3BlltZZsTkRF%2BmZM3CQpxetB9SDhW%2B3iJ%2BvmJc6H4e0oisIWf5GmerisfzN21Xx%2BvAi3yHk0bf2uEFxIZZsdXen1%2BrBPvXmxFDA61LoX1emgkDafgAOQato0r5Fxulw1wFiZCnIi4xf2EMyFHYh1UgEjXiclSIgoZdLUjavjhuxInFQbs7J2oUADGaNeBOO6hypd6x8je9jAgJfcWWUFgAbRitqkYECk48eDQhVLEwnXKTBrqVHmQcrmFdEOe1pxtBDO05wj3VuWgKJze%2FS4%2BwLDxPqzmWInS2JDBBducewSIC8fCHayHYNVJ4lDzDaXG%2B7zFhtjGoTCfcYwp%2BZmmbOLthKC2K2MT5S8uPkbTbj2ARRKiT6uQQgCIwt7P5SnMiEleo6cZl8CNDF28ZZof%2BtC0wwtmGwAY6pgGsBLHdBH%2BUSYBMiN9zN80tu%2BYf26JrNZxzr0jiIF7UWhIWWkdgn5NkWGbDnTYcKHPLA45UeOkmCQqU6ZkxsD6LNASnEagOOnIBB9C9biV25FiICLb9pcmVbJVet7oF8sxy3K2LgKxO655lmR9RtzVxFf7iM0keGJArw%2F9oh1VTA898U1oqNuz%2BKb5y5pH27Fcm34lyAG9fuA4rlqbjpkleM7TGptOl&X-Amz-Signature=b97a92d91b204b22319f8ab54647cf353a14e13ee351b56af836449a2a384132&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OCB54N%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2txqZ7ASIpWvVEP53gFwiTtUAl372Z1ymx1hYAUK1WAiANgq49BLgnruZ6gLKo4jMdp3rMKlQ5W27%2FgZqCDIrKqyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM67Pv3RIViw8ZprhrKtwDjypKQuYgUKw%2FUF%2FsuMQnUcl3KwrMu2ipgGY%2FLq6JMio%2FnqAOQPl%2Fq3Je080LmtpobMmGQr7WUpGXSLFjK0UNsg%2BVkmSQWhtcTfzhsDuJInKLxCcXqxTOgjH85J0O80qyHNC5XejeddTug1MnPqUFyC%2BB8MsZ6L0b8VhdTxLuVj%2FvvlxfuyKtkx96zcmhLa9k9p3mCOH7kx5iDh2BaOI7qOgMm19zxTni9C3BlltZZsTkRF%2BmZM3CQpxetB9SDhW%2B3iJ%2BvmJc6H4e0oisIWf5GmerisfzN21Xx%2BvAi3yHk0bf2uEFxIZZsdXen1%2BrBPvXmxFDA61LoX1emgkDafgAOQato0r5Fxulw1wFiZCnIi4xf2EMyFHYh1UgEjXiclSIgoZdLUjavjhuxInFQbs7J2oUADGaNeBOO6hypd6x8je9jAgJfcWWUFgAbRitqkYECk48eDQhVLEwnXKTBrqVHmQcrmFdEOe1pxtBDO05wj3VuWgKJze%2FS4%2BwLDxPqzmWInS2JDBBducewSIC8fCHayHYNVJ4lDzDaXG%2B7zFhtjGoTCfcYwp%2BZmmbOLthKC2K2MT5S8uPkbTbj2ARRKiT6uQQgCIwt7P5SnMiEleo6cZl8CNDF28ZZof%2BtC0wwtmGwAY6pgGsBLHdBH%2BUSYBMiN9zN80tu%2BYf26JrNZxzr0jiIF7UWhIWWkdgn5NkWGbDnTYcKHPLA45UeOkmCQqU6ZkxsD6LNASnEagOOnIBB9C9biV25FiICLb9pcmVbJVet7oF8sxy3K2LgKxO655lmR9RtzVxFf7iM0keGJArw%2F9oh1VTA898U1oqNuz%2BKb5y5pH27Fcm34lyAG9fuA4rlqbjpkleM7TGptOl&X-Amz-Signature=ba5c36c422d06eabf517bd31006c198bba56f25f83c2d5f763a2b78ddc47cd11&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
