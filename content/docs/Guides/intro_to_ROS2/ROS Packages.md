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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJVPD3T%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDaQAaKbN756c1tmY%2Fega0Y6LWxg7DgYM0NkmAdxdvKawIhAOUdwy%2BsboJ4wyHFpGVa9rtd42Dn%2B01wPETOU%2BREu3Z4Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwBlpnpWX1bfqqBv8Mq3ANm5CjVqSNjmyXX6pG%2FOsrhmspJfLTXuIRSzhG8lgZN9fn1LQ2qedZ5DTQiUlCjfawKehwvD%2B59nYDLgPo1rJWyY%2F3fouzisc1m5v6BE%2F3F6jTgRbtVrRC2GNIpAIUyIUs01xiaqnGYS5Oyn1KnFkaNwQd1eGdR%2BAPeFtTQYrkol9Y40SudiQKygX98%2FNzI8MUC6iPbrUQ%2FqFL5%2Fwzo7BbH%2BIq7w2%2B6FqyJXKqPsmj7JwIkIJfG1n92Hsnf94mkSaTsYlBWT6LUsrhxzTK1a%2FsTdCb84XgFd2j6eMl8HVY2fZBgld87Ei89ShZLF9okPgEfweZ0fvWh4vGHf06CBootoNalgDk5OuGsAnOaglahSdF7E36kwtJcCvJuAthQAvgs64PUuktZB9R5%2B0maN%2F6lXG04BUbrg6VGMjJCMVdw96P5leGP3WGkSL5RQRuIryQFX%2FeTOrWMdeIXHZtgvlWvSKg4trxCDWRxqNwM4uDtmkDrch1hfjrB84HwaCSRceIBxXFiMi%2BwOgInMMgmVucOyTQuhy1CVeVynA0TbwFK72giKNDJ363nzFs9J4y9oymbCgOmUl%2Fk80om0F7kDLuwegzesSagwHyE6kTFZyDeAlHXlkKY6AlXXtj1DjCYkKfDBjqkASlQXEqe7M0II4qawm%2B%2BzjhZN0iAmNMuzlquPMLFIZBOCR5zKDvJUosUwMpJZRCQiByVciDHtChBFhJabRigSXLkTpsArmpVa5h57mJB%2F0tSwncmiynhx%2B%2BakL454GHe53HeO2sDPoGw3v23fRW83Hrv%2FNVG%2BZyeJQkl6kJZdt5CnalJC5df99G%2F0FPnDPSq4WdohpE0gDP6oKz8Xj6IJPafquyB&X-Amz-Signature=54bafe634fe8bdde9de58a261ac66f7758d92e85ba44bd7dd89320b18d46d138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJVPD3T%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDaQAaKbN756c1tmY%2Fega0Y6LWxg7DgYM0NkmAdxdvKawIhAOUdwy%2BsboJ4wyHFpGVa9rtd42Dn%2B01wPETOU%2BREu3Z4Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwBlpnpWX1bfqqBv8Mq3ANm5CjVqSNjmyXX6pG%2FOsrhmspJfLTXuIRSzhG8lgZN9fn1LQ2qedZ5DTQiUlCjfawKehwvD%2B59nYDLgPo1rJWyY%2F3fouzisc1m5v6BE%2F3F6jTgRbtVrRC2GNIpAIUyIUs01xiaqnGYS5Oyn1KnFkaNwQd1eGdR%2BAPeFtTQYrkol9Y40SudiQKygX98%2FNzI8MUC6iPbrUQ%2FqFL5%2Fwzo7BbH%2BIq7w2%2B6FqyJXKqPsmj7JwIkIJfG1n92Hsnf94mkSaTsYlBWT6LUsrhxzTK1a%2FsTdCb84XgFd2j6eMl8HVY2fZBgld87Ei89ShZLF9okPgEfweZ0fvWh4vGHf06CBootoNalgDk5OuGsAnOaglahSdF7E36kwtJcCvJuAthQAvgs64PUuktZB9R5%2B0maN%2F6lXG04BUbrg6VGMjJCMVdw96P5leGP3WGkSL5RQRuIryQFX%2FeTOrWMdeIXHZtgvlWvSKg4trxCDWRxqNwM4uDtmkDrch1hfjrB84HwaCSRceIBxXFiMi%2BwOgInMMgmVucOyTQuhy1CVeVynA0TbwFK72giKNDJ363nzFs9J4y9oymbCgOmUl%2Fk80om0F7kDLuwegzesSagwHyE6kTFZyDeAlHXlkKY6AlXXtj1DjCYkKfDBjqkASlQXEqe7M0II4qawm%2B%2BzjhZN0iAmNMuzlquPMLFIZBOCR5zKDvJUosUwMpJZRCQiByVciDHtChBFhJabRigSXLkTpsArmpVa5h57mJB%2F0tSwncmiynhx%2B%2BakL454GHe53HeO2sDPoGw3v23fRW83Hrv%2FNVG%2BZyeJQkl6kJZdt5CnalJC5df99G%2F0FPnDPSq4WdohpE0gDP6oKz8Xj6IJPafquyB&X-Amz-Signature=2348674c712e1db71ad2fbdfa7226edeeb1ce596e7b8ca1f03709b206cc6a154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJVPD3T%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDaQAaKbN756c1tmY%2Fega0Y6LWxg7DgYM0NkmAdxdvKawIhAOUdwy%2BsboJ4wyHFpGVa9rtd42Dn%2B01wPETOU%2BREu3Z4Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwBlpnpWX1bfqqBv8Mq3ANm5CjVqSNjmyXX6pG%2FOsrhmspJfLTXuIRSzhG8lgZN9fn1LQ2qedZ5DTQiUlCjfawKehwvD%2B59nYDLgPo1rJWyY%2F3fouzisc1m5v6BE%2F3F6jTgRbtVrRC2GNIpAIUyIUs01xiaqnGYS5Oyn1KnFkaNwQd1eGdR%2BAPeFtTQYrkol9Y40SudiQKygX98%2FNzI8MUC6iPbrUQ%2FqFL5%2Fwzo7BbH%2BIq7w2%2B6FqyJXKqPsmj7JwIkIJfG1n92Hsnf94mkSaTsYlBWT6LUsrhxzTK1a%2FsTdCb84XgFd2j6eMl8HVY2fZBgld87Ei89ShZLF9okPgEfweZ0fvWh4vGHf06CBootoNalgDk5OuGsAnOaglahSdF7E36kwtJcCvJuAthQAvgs64PUuktZB9R5%2B0maN%2F6lXG04BUbrg6VGMjJCMVdw96P5leGP3WGkSL5RQRuIryQFX%2FeTOrWMdeIXHZtgvlWvSKg4trxCDWRxqNwM4uDtmkDrch1hfjrB84HwaCSRceIBxXFiMi%2BwOgInMMgmVucOyTQuhy1CVeVynA0TbwFK72giKNDJ363nzFs9J4y9oymbCgOmUl%2Fk80om0F7kDLuwegzesSagwHyE6kTFZyDeAlHXlkKY6AlXXtj1DjCYkKfDBjqkASlQXEqe7M0II4qawm%2B%2BzjhZN0iAmNMuzlquPMLFIZBOCR5zKDvJUosUwMpJZRCQiByVciDHtChBFhJabRigSXLkTpsArmpVa5h57mJB%2F0tSwncmiynhx%2B%2BakL454GHe53HeO2sDPoGw3v23fRW83Hrv%2FNVG%2BZyeJQkl6kJZdt5CnalJC5df99G%2F0FPnDPSq4WdohpE0gDP6oKz8Xj6IJPafquyB&X-Amz-Signature=2f662c4b3e70437c6bb30c32bd3b2e7d9156336c465dd18140d8b48292db8e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJVPD3T%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDaQAaKbN756c1tmY%2Fega0Y6LWxg7DgYM0NkmAdxdvKawIhAOUdwy%2BsboJ4wyHFpGVa9rtd42Dn%2B01wPETOU%2BREu3Z4Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwBlpnpWX1bfqqBv8Mq3ANm5CjVqSNjmyXX6pG%2FOsrhmspJfLTXuIRSzhG8lgZN9fn1LQ2qedZ5DTQiUlCjfawKehwvD%2B59nYDLgPo1rJWyY%2F3fouzisc1m5v6BE%2F3F6jTgRbtVrRC2GNIpAIUyIUs01xiaqnGYS5Oyn1KnFkaNwQd1eGdR%2BAPeFtTQYrkol9Y40SudiQKygX98%2FNzI8MUC6iPbrUQ%2FqFL5%2Fwzo7BbH%2BIq7w2%2B6FqyJXKqPsmj7JwIkIJfG1n92Hsnf94mkSaTsYlBWT6LUsrhxzTK1a%2FsTdCb84XgFd2j6eMl8HVY2fZBgld87Ei89ShZLF9okPgEfweZ0fvWh4vGHf06CBootoNalgDk5OuGsAnOaglahSdF7E36kwtJcCvJuAthQAvgs64PUuktZB9R5%2B0maN%2F6lXG04BUbrg6VGMjJCMVdw96P5leGP3WGkSL5RQRuIryQFX%2FeTOrWMdeIXHZtgvlWvSKg4trxCDWRxqNwM4uDtmkDrch1hfjrB84HwaCSRceIBxXFiMi%2BwOgInMMgmVucOyTQuhy1CVeVynA0TbwFK72giKNDJ363nzFs9J4y9oymbCgOmUl%2Fk80om0F7kDLuwegzesSagwHyE6kTFZyDeAlHXlkKY6AlXXtj1DjCYkKfDBjqkASlQXEqe7M0II4qawm%2B%2BzjhZN0iAmNMuzlquPMLFIZBOCR5zKDvJUosUwMpJZRCQiByVciDHtChBFhJabRigSXLkTpsArmpVa5h57mJB%2F0tSwncmiynhx%2B%2BakL454GHe53HeO2sDPoGw3v23fRW83Hrv%2FNVG%2BZyeJQkl6kJZdt5CnalJC5df99G%2F0FPnDPSq4WdohpE0gDP6oKz8Xj6IJPafquyB&X-Amz-Signature=d56c5af5e3d965157b0a726f58593ec1e55c49bf067d73682157f48a3a189d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJVPD3T%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDaQAaKbN756c1tmY%2Fega0Y6LWxg7DgYM0NkmAdxdvKawIhAOUdwy%2BsboJ4wyHFpGVa9rtd42Dn%2B01wPETOU%2BREu3Z4Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwBlpnpWX1bfqqBv8Mq3ANm5CjVqSNjmyXX6pG%2FOsrhmspJfLTXuIRSzhG8lgZN9fn1LQ2qedZ5DTQiUlCjfawKehwvD%2B59nYDLgPo1rJWyY%2F3fouzisc1m5v6BE%2F3F6jTgRbtVrRC2GNIpAIUyIUs01xiaqnGYS5Oyn1KnFkaNwQd1eGdR%2BAPeFtTQYrkol9Y40SudiQKygX98%2FNzI8MUC6iPbrUQ%2FqFL5%2Fwzo7BbH%2BIq7w2%2B6FqyJXKqPsmj7JwIkIJfG1n92Hsnf94mkSaTsYlBWT6LUsrhxzTK1a%2FsTdCb84XgFd2j6eMl8HVY2fZBgld87Ei89ShZLF9okPgEfweZ0fvWh4vGHf06CBootoNalgDk5OuGsAnOaglahSdF7E36kwtJcCvJuAthQAvgs64PUuktZB9R5%2B0maN%2F6lXG04BUbrg6VGMjJCMVdw96P5leGP3WGkSL5RQRuIryQFX%2FeTOrWMdeIXHZtgvlWvSKg4trxCDWRxqNwM4uDtmkDrch1hfjrB84HwaCSRceIBxXFiMi%2BwOgInMMgmVucOyTQuhy1CVeVynA0TbwFK72giKNDJ363nzFs9J4y9oymbCgOmUl%2Fk80om0F7kDLuwegzesSagwHyE6kTFZyDeAlHXlkKY6AlXXtj1DjCYkKfDBjqkASlQXEqe7M0II4qawm%2B%2BzjhZN0iAmNMuzlquPMLFIZBOCR5zKDvJUosUwMpJZRCQiByVciDHtChBFhJabRigSXLkTpsArmpVa5h57mJB%2F0tSwncmiynhx%2B%2BakL454GHe53HeO2sDPoGw3v23fRW83Hrv%2FNVG%2BZyeJQkl6kJZdt5CnalJC5df99G%2F0FPnDPSq4WdohpE0gDP6oKz8Xj6IJPafquyB&X-Amz-Signature=a5ae9a5b92352e79aa27e78148319c72c09dfab73b09d8894fe7f7d8beaa2dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJVPD3T%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDaQAaKbN756c1tmY%2Fega0Y6LWxg7DgYM0NkmAdxdvKawIhAOUdwy%2BsboJ4wyHFpGVa9rtd42Dn%2B01wPETOU%2BREu3Z4Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwBlpnpWX1bfqqBv8Mq3ANm5CjVqSNjmyXX6pG%2FOsrhmspJfLTXuIRSzhG8lgZN9fn1LQ2qedZ5DTQiUlCjfawKehwvD%2B59nYDLgPo1rJWyY%2F3fouzisc1m5v6BE%2F3F6jTgRbtVrRC2GNIpAIUyIUs01xiaqnGYS5Oyn1KnFkaNwQd1eGdR%2BAPeFtTQYrkol9Y40SudiQKygX98%2FNzI8MUC6iPbrUQ%2FqFL5%2Fwzo7BbH%2BIq7w2%2B6FqyJXKqPsmj7JwIkIJfG1n92Hsnf94mkSaTsYlBWT6LUsrhxzTK1a%2FsTdCb84XgFd2j6eMl8HVY2fZBgld87Ei89ShZLF9okPgEfweZ0fvWh4vGHf06CBootoNalgDk5OuGsAnOaglahSdF7E36kwtJcCvJuAthQAvgs64PUuktZB9R5%2B0maN%2F6lXG04BUbrg6VGMjJCMVdw96P5leGP3WGkSL5RQRuIryQFX%2FeTOrWMdeIXHZtgvlWvSKg4trxCDWRxqNwM4uDtmkDrch1hfjrB84HwaCSRceIBxXFiMi%2BwOgInMMgmVucOyTQuhy1CVeVynA0TbwFK72giKNDJ363nzFs9J4y9oymbCgOmUl%2Fk80om0F7kDLuwegzesSagwHyE6kTFZyDeAlHXlkKY6AlXXtj1DjCYkKfDBjqkASlQXEqe7M0II4qawm%2B%2BzjhZN0iAmNMuzlquPMLFIZBOCR5zKDvJUosUwMpJZRCQiByVciDHtChBFhJabRigSXLkTpsArmpVa5h57mJB%2F0tSwncmiynhx%2B%2BakL454GHe53HeO2sDPoGw3v23fRW83Hrv%2FNVG%2BZyeJQkl6kJZdt5CnalJC5df99G%2F0FPnDPSq4WdohpE0gDP6oKz8Xj6IJPafquyB&X-Amz-Signature=34f9ad846705de58056317c8a66f0284dfdbadf33371038bbad2989ac5542f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJVPD3T%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDaQAaKbN756c1tmY%2Fega0Y6LWxg7DgYM0NkmAdxdvKawIhAOUdwy%2BsboJ4wyHFpGVa9rtd42Dn%2B01wPETOU%2BREu3Z4Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwBlpnpWX1bfqqBv8Mq3ANm5CjVqSNjmyXX6pG%2FOsrhmspJfLTXuIRSzhG8lgZN9fn1LQ2qedZ5DTQiUlCjfawKehwvD%2B59nYDLgPo1rJWyY%2F3fouzisc1m5v6BE%2F3F6jTgRbtVrRC2GNIpAIUyIUs01xiaqnGYS5Oyn1KnFkaNwQd1eGdR%2BAPeFtTQYrkol9Y40SudiQKygX98%2FNzI8MUC6iPbrUQ%2FqFL5%2Fwzo7BbH%2BIq7w2%2B6FqyJXKqPsmj7JwIkIJfG1n92Hsnf94mkSaTsYlBWT6LUsrhxzTK1a%2FsTdCb84XgFd2j6eMl8HVY2fZBgld87Ei89ShZLF9okPgEfweZ0fvWh4vGHf06CBootoNalgDk5OuGsAnOaglahSdF7E36kwtJcCvJuAthQAvgs64PUuktZB9R5%2B0maN%2F6lXG04BUbrg6VGMjJCMVdw96P5leGP3WGkSL5RQRuIryQFX%2FeTOrWMdeIXHZtgvlWvSKg4trxCDWRxqNwM4uDtmkDrch1hfjrB84HwaCSRceIBxXFiMi%2BwOgInMMgmVucOyTQuhy1CVeVynA0TbwFK72giKNDJ363nzFs9J4y9oymbCgOmUl%2Fk80om0F7kDLuwegzesSagwHyE6kTFZyDeAlHXlkKY6AlXXtj1DjCYkKfDBjqkASlQXEqe7M0II4qawm%2B%2BzjhZN0iAmNMuzlquPMLFIZBOCR5zKDvJUosUwMpJZRCQiByVciDHtChBFhJabRigSXLkTpsArmpVa5h57mJB%2F0tSwncmiynhx%2B%2BakL454GHe53HeO2sDPoGw3v23fRW83Hrv%2FNVG%2BZyeJQkl6kJZdt5CnalJC5df99G%2F0FPnDPSq4WdohpE0gDP6oKz8Xj6IJPafquyB&X-Amz-Signature=72cef8fea3802db5bb6719c2d930ec6269b165259dcf816410336a4a468dcfe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
