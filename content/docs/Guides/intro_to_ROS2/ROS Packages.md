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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDFFJP3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCMyk6bhZKlDPdnHn%2FZxYjvo29mDGXcjzx69FIaMoXU%2BQIhAIsfDLwoGv2g1Jqxet6sPv0yHfNGskffw279yU825NySKv8DCCAQABoMNjM3NDIzMTgzODA1Igw72aN%2BRrC0Ikkk2LIq3APrYUV7JourP7zXXxuXys%2Ftl7ATozG7XunKJ%2FMYIdEUMC1mQMF%2B%2FRwoLzlx6YlcjVngmRKVvJzleQTZnD83yvXubyG8sIcTr1m1GJo%2BOAca6wR2GCPyp5L9JMG5MkfNlr2U5sw167YHwIfZ7aJJ0DAuXe%2BmcAwL6qZnS%2BZAmuhTGTvyDva2iJNbJ8rhMhn8QYtKbPMnDQg9yqgkf%2BlfzubS%2BJCGYkc3DCpcNerAubei3JjcSbD6shbA60kwmJfceMQplxUnrqvM1d3uwCXNHuNL0ckai59BSfm1jKxf7bomiCLKMBtHP3cVouDmWFHYAZM7c4i9E91C58MNiUfvyCmmMQnWb4s5pZQmsBhOaEJ%2FlowaglbQRlYLXX8wVXLbEmjq13UZwvgjtF7B155zep1krRZW9bPXyBvPo0YEaORxNwkVF2NRxh9ce7u%2B6ZH0TbYaro%2FXLSe1g1LQ9RpgLdhk4fnLAs4hMg4L2qywCe75HLr827OSVVpAWYXiotkJuUUyJWue%2FJfR9sdhaj2Ye3SlqW1i2kFb0LHY%2FKL2Wxb%2FDV7t4exzY0xZvBZ33IW7DjlobKkH17dpBYQZCu%2F87cgc96RwjxT4x4DnRqxbtJLEJl1zuT6YaHHSMsw8zjDe27LCBjqkAT%2B6ygS8e0s6Uku1J0EkzPEVSq2AiN4qEALNuRNnxwgrdql9B5maIi7zSPXrRf3%2BVy9uRBf2g%2FBBC77%2FUERB4BkGal4MfXcxTTIutUbCNRZXzE2Mc4A9J87Kvxn0h6mYMJCe88yXPJ9VFzijHeBX7aHef%2Fyl4oYBgt8f1tC1v9lVedmFjki9TDM07MKap49QRqc0XtMZuKGIQdpZEbbENUdRcQfj&X-Amz-Signature=120be8c43b775bb1d4e6d8dd2817a67582c6c0617e30dc088cf360b5179bc83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDFFJP3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCMyk6bhZKlDPdnHn%2FZxYjvo29mDGXcjzx69FIaMoXU%2BQIhAIsfDLwoGv2g1Jqxet6sPv0yHfNGskffw279yU825NySKv8DCCAQABoMNjM3NDIzMTgzODA1Igw72aN%2BRrC0Ikkk2LIq3APrYUV7JourP7zXXxuXys%2Ftl7ATozG7XunKJ%2FMYIdEUMC1mQMF%2B%2FRwoLzlx6YlcjVngmRKVvJzleQTZnD83yvXubyG8sIcTr1m1GJo%2BOAca6wR2GCPyp5L9JMG5MkfNlr2U5sw167YHwIfZ7aJJ0DAuXe%2BmcAwL6qZnS%2BZAmuhTGTvyDva2iJNbJ8rhMhn8QYtKbPMnDQg9yqgkf%2BlfzubS%2BJCGYkc3DCpcNerAubei3JjcSbD6shbA60kwmJfceMQplxUnrqvM1d3uwCXNHuNL0ckai59BSfm1jKxf7bomiCLKMBtHP3cVouDmWFHYAZM7c4i9E91C58MNiUfvyCmmMQnWb4s5pZQmsBhOaEJ%2FlowaglbQRlYLXX8wVXLbEmjq13UZwvgjtF7B155zep1krRZW9bPXyBvPo0YEaORxNwkVF2NRxh9ce7u%2B6ZH0TbYaro%2FXLSe1g1LQ9RpgLdhk4fnLAs4hMg4L2qywCe75HLr827OSVVpAWYXiotkJuUUyJWue%2FJfR9sdhaj2Ye3SlqW1i2kFb0LHY%2FKL2Wxb%2FDV7t4exzY0xZvBZ33IW7DjlobKkH17dpBYQZCu%2F87cgc96RwjxT4x4DnRqxbtJLEJl1zuT6YaHHSMsw8zjDe27LCBjqkAT%2B6ygS8e0s6Uku1J0EkzPEVSq2AiN4qEALNuRNnxwgrdql9B5maIi7zSPXrRf3%2BVy9uRBf2g%2FBBC77%2FUERB4BkGal4MfXcxTTIutUbCNRZXzE2Mc4A9J87Kvxn0h6mYMJCe88yXPJ9VFzijHeBX7aHef%2Fyl4oYBgt8f1tC1v9lVedmFjki9TDM07MKap49QRqc0XtMZuKGIQdpZEbbENUdRcQfj&X-Amz-Signature=73636024354c10fe34c2940906387e3fbdd5616cdcfa1cac4ed113f040fd7642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDFFJP3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCMyk6bhZKlDPdnHn%2FZxYjvo29mDGXcjzx69FIaMoXU%2BQIhAIsfDLwoGv2g1Jqxet6sPv0yHfNGskffw279yU825NySKv8DCCAQABoMNjM3NDIzMTgzODA1Igw72aN%2BRrC0Ikkk2LIq3APrYUV7JourP7zXXxuXys%2Ftl7ATozG7XunKJ%2FMYIdEUMC1mQMF%2B%2FRwoLzlx6YlcjVngmRKVvJzleQTZnD83yvXubyG8sIcTr1m1GJo%2BOAca6wR2GCPyp5L9JMG5MkfNlr2U5sw167YHwIfZ7aJJ0DAuXe%2BmcAwL6qZnS%2BZAmuhTGTvyDva2iJNbJ8rhMhn8QYtKbPMnDQg9yqgkf%2BlfzubS%2BJCGYkc3DCpcNerAubei3JjcSbD6shbA60kwmJfceMQplxUnrqvM1d3uwCXNHuNL0ckai59BSfm1jKxf7bomiCLKMBtHP3cVouDmWFHYAZM7c4i9E91C58MNiUfvyCmmMQnWb4s5pZQmsBhOaEJ%2FlowaglbQRlYLXX8wVXLbEmjq13UZwvgjtF7B155zep1krRZW9bPXyBvPo0YEaORxNwkVF2NRxh9ce7u%2B6ZH0TbYaro%2FXLSe1g1LQ9RpgLdhk4fnLAs4hMg4L2qywCe75HLr827OSVVpAWYXiotkJuUUyJWue%2FJfR9sdhaj2Ye3SlqW1i2kFb0LHY%2FKL2Wxb%2FDV7t4exzY0xZvBZ33IW7DjlobKkH17dpBYQZCu%2F87cgc96RwjxT4x4DnRqxbtJLEJl1zuT6YaHHSMsw8zjDe27LCBjqkAT%2B6ygS8e0s6Uku1J0EkzPEVSq2AiN4qEALNuRNnxwgrdql9B5maIi7zSPXrRf3%2BVy9uRBf2g%2FBBC77%2FUERB4BkGal4MfXcxTTIutUbCNRZXzE2Mc4A9J87Kvxn0h6mYMJCe88yXPJ9VFzijHeBX7aHef%2Fyl4oYBgt8f1tC1v9lVedmFjki9TDM07MKap49QRqc0XtMZuKGIQdpZEbbENUdRcQfj&X-Amz-Signature=6b2dfe4da59df1bc8a1731880ce62a190d89fd6dea57d1d91efdb5087579c653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDFFJP3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCMyk6bhZKlDPdnHn%2FZxYjvo29mDGXcjzx69FIaMoXU%2BQIhAIsfDLwoGv2g1Jqxet6sPv0yHfNGskffw279yU825NySKv8DCCAQABoMNjM3NDIzMTgzODA1Igw72aN%2BRrC0Ikkk2LIq3APrYUV7JourP7zXXxuXys%2Ftl7ATozG7XunKJ%2FMYIdEUMC1mQMF%2B%2FRwoLzlx6YlcjVngmRKVvJzleQTZnD83yvXubyG8sIcTr1m1GJo%2BOAca6wR2GCPyp5L9JMG5MkfNlr2U5sw167YHwIfZ7aJJ0DAuXe%2BmcAwL6qZnS%2BZAmuhTGTvyDva2iJNbJ8rhMhn8QYtKbPMnDQg9yqgkf%2BlfzubS%2BJCGYkc3DCpcNerAubei3JjcSbD6shbA60kwmJfceMQplxUnrqvM1d3uwCXNHuNL0ckai59BSfm1jKxf7bomiCLKMBtHP3cVouDmWFHYAZM7c4i9E91C58MNiUfvyCmmMQnWb4s5pZQmsBhOaEJ%2FlowaglbQRlYLXX8wVXLbEmjq13UZwvgjtF7B155zep1krRZW9bPXyBvPo0YEaORxNwkVF2NRxh9ce7u%2B6ZH0TbYaro%2FXLSe1g1LQ9RpgLdhk4fnLAs4hMg4L2qywCe75HLr827OSVVpAWYXiotkJuUUyJWue%2FJfR9sdhaj2Ye3SlqW1i2kFb0LHY%2FKL2Wxb%2FDV7t4exzY0xZvBZ33IW7DjlobKkH17dpBYQZCu%2F87cgc96RwjxT4x4DnRqxbtJLEJl1zuT6YaHHSMsw8zjDe27LCBjqkAT%2B6ygS8e0s6Uku1J0EkzPEVSq2AiN4qEALNuRNnxwgrdql9B5maIi7zSPXrRf3%2BVy9uRBf2g%2FBBC77%2FUERB4BkGal4MfXcxTTIutUbCNRZXzE2Mc4A9J87Kvxn0h6mYMJCe88yXPJ9VFzijHeBX7aHef%2Fyl4oYBgt8f1tC1v9lVedmFjki9TDM07MKap49QRqc0XtMZuKGIQdpZEbbENUdRcQfj&X-Amz-Signature=f6186360487b993094c558153fd9e3aacee679ad476f6ba71f733228b2e139f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDFFJP3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCMyk6bhZKlDPdnHn%2FZxYjvo29mDGXcjzx69FIaMoXU%2BQIhAIsfDLwoGv2g1Jqxet6sPv0yHfNGskffw279yU825NySKv8DCCAQABoMNjM3NDIzMTgzODA1Igw72aN%2BRrC0Ikkk2LIq3APrYUV7JourP7zXXxuXys%2Ftl7ATozG7XunKJ%2FMYIdEUMC1mQMF%2B%2FRwoLzlx6YlcjVngmRKVvJzleQTZnD83yvXubyG8sIcTr1m1GJo%2BOAca6wR2GCPyp5L9JMG5MkfNlr2U5sw167YHwIfZ7aJJ0DAuXe%2BmcAwL6qZnS%2BZAmuhTGTvyDva2iJNbJ8rhMhn8QYtKbPMnDQg9yqgkf%2BlfzubS%2BJCGYkc3DCpcNerAubei3JjcSbD6shbA60kwmJfceMQplxUnrqvM1d3uwCXNHuNL0ckai59BSfm1jKxf7bomiCLKMBtHP3cVouDmWFHYAZM7c4i9E91C58MNiUfvyCmmMQnWb4s5pZQmsBhOaEJ%2FlowaglbQRlYLXX8wVXLbEmjq13UZwvgjtF7B155zep1krRZW9bPXyBvPo0YEaORxNwkVF2NRxh9ce7u%2B6ZH0TbYaro%2FXLSe1g1LQ9RpgLdhk4fnLAs4hMg4L2qywCe75HLr827OSVVpAWYXiotkJuUUyJWue%2FJfR9sdhaj2Ye3SlqW1i2kFb0LHY%2FKL2Wxb%2FDV7t4exzY0xZvBZ33IW7DjlobKkH17dpBYQZCu%2F87cgc96RwjxT4x4DnRqxbtJLEJl1zuT6YaHHSMsw8zjDe27LCBjqkAT%2B6ygS8e0s6Uku1J0EkzPEVSq2AiN4qEALNuRNnxwgrdql9B5maIi7zSPXrRf3%2BVy9uRBf2g%2FBBC77%2FUERB4BkGal4MfXcxTTIutUbCNRZXzE2Mc4A9J87Kvxn0h6mYMJCe88yXPJ9VFzijHeBX7aHef%2Fyl4oYBgt8f1tC1v9lVedmFjki9TDM07MKap49QRqc0XtMZuKGIQdpZEbbENUdRcQfj&X-Amz-Signature=4e08bec636c5d862d1e9d822469c87ac6541ca6d3ebd2e7cb770abe34181c905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDFFJP3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCMyk6bhZKlDPdnHn%2FZxYjvo29mDGXcjzx69FIaMoXU%2BQIhAIsfDLwoGv2g1Jqxet6sPv0yHfNGskffw279yU825NySKv8DCCAQABoMNjM3NDIzMTgzODA1Igw72aN%2BRrC0Ikkk2LIq3APrYUV7JourP7zXXxuXys%2Ftl7ATozG7XunKJ%2FMYIdEUMC1mQMF%2B%2FRwoLzlx6YlcjVngmRKVvJzleQTZnD83yvXubyG8sIcTr1m1GJo%2BOAca6wR2GCPyp5L9JMG5MkfNlr2U5sw167YHwIfZ7aJJ0DAuXe%2BmcAwL6qZnS%2BZAmuhTGTvyDva2iJNbJ8rhMhn8QYtKbPMnDQg9yqgkf%2BlfzubS%2BJCGYkc3DCpcNerAubei3JjcSbD6shbA60kwmJfceMQplxUnrqvM1d3uwCXNHuNL0ckai59BSfm1jKxf7bomiCLKMBtHP3cVouDmWFHYAZM7c4i9E91C58MNiUfvyCmmMQnWb4s5pZQmsBhOaEJ%2FlowaglbQRlYLXX8wVXLbEmjq13UZwvgjtF7B155zep1krRZW9bPXyBvPo0YEaORxNwkVF2NRxh9ce7u%2B6ZH0TbYaro%2FXLSe1g1LQ9RpgLdhk4fnLAs4hMg4L2qywCe75HLr827OSVVpAWYXiotkJuUUyJWue%2FJfR9sdhaj2Ye3SlqW1i2kFb0LHY%2FKL2Wxb%2FDV7t4exzY0xZvBZ33IW7DjlobKkH17dpBYQZCu%2F87cgc96RwjxT4x4DnRqxbtJLEJl1zuT6YaHHSMsw8zjDe27LCBjqkAT%2B6ygS8e0s6Uku1J0EkzPEVSq2AiN4qEALNuRNnxwgrdql9B5maIi7zSPXrRf3%2BVy9uRBf2g%2FBBC77%2FUERB4BkGal4MfXcxTTIutUbCNRZXzE2Mc4A9J87Kvxn0h6mYMJCe88yXPJ9VFzijHeBX7aHef%2Fyl4oYBgt8f1tC1v9lVedmFjki9TDM07MKap49QRqc0XtMZuKGIQdpZEbbENUdRcQfj&X-Amz-Signature=7a449aea2de8b3bcf0201952aac26354832dab7db5cd3c7f1d228914741cedbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDFFJP3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCMyk6bhZKlDPdnHn%2FZxYjvo29mDGXcjzx69FIaMoXU%2BQIhAIsfDLwoGv2g1Jqxet6sPv0yHfNGskffw279yU825NySKv8DCCAQABoMNjM3NDIzMTgzODA1Igw72aN%2BRrC0Ikkk2LIq3APrYUV7JourP7zXXxuXys%2Ftl7ATozG7XunKJ%2FMYIdEUMC1mQMF%2B%2FRwoLzlx6YlcjVngmRKVvJzleQTZnD83yvXubyG8sIcTr1m1GJo%2BOAca6wR2GCPyp5L9JMG5MkfNlr2U5sw167YHwIfZ7aJJ0DAuXe%2BmcAwL6qZnS%2BZAmuhTGTvyDva2iJNbJ8rhMhn8QYtKbPMnDQg9yqgkf%2BlfzubS%2BJCGYkc3DCpcNerAubei3JjcSbD6shbA60kwmJfceMQplxUnrqvM1d3uwCXNHuNL0ckai59BSfm1jKxf7bomiCLKMBtHP3cVouDmWFHYAZM7c4i9E91C58MNiUfvyCmmMQnWb4s5pZQmsBhOaEJ%2FlowaglbQRlYLXX8wVXLbEmjq13UZwvgjtF7B155zep1krRZW9bPXyBvPo0YEaORxNwkVF2NRxh9ce7u%2B6ZH0TbYaro%2FXLSe1g1LQ9RpgLdhk4fnLAs4hMg4L2qywCe75HLr827OSVVpAWYXiotkJuUUyJWue%2FJfR9sdhaj2Ye3SlqW1i2kFb0LHY%2FKL2Wxb%2FDV7t4exzY0xZvBZ33IW7DjlobKkH17dpBYQZCu%2F87cgc96RwjxT4x4DnRqxbtJLEJl1zuT6YaHHSMsw8zjDe27LCBjqkAT%2B6ygS8e0s6Uku1J0EkzPEVSq2AiN4qEALNuRNnxwgrdql9B5maIi7zSPXrRf3%2BVy9uRBf2g%2FBBC77%2FUERB4BkGal4MfXcxTTIutUbCNRZXzE2Mc4A9J87Kvxn0h6mYMJCe88yXPJ9VFzijHeBX7aHef%2Fyl4oYBgt8f1tC1v9lVedmFjki9TDM07MKap49QRqc0XtMZuKGIQdpZEbbENUdRcQfj&X-Amz-Signature=09f306da71ef4d6b0976b2787229efec8fab0992159bae7574b68d5512538d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
