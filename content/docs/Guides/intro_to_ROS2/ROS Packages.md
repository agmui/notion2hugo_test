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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNYXGWG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0jaKFSLYYTn6h8ZOd9EdHO3Ep1oWcgOyevDFT9muZWwIhANv0iiGI9Egd9WZC6OFzSPIdomT%2Flh5BG3oSYQp%2BElJpKv8DCEMQABoMNjM3NDIzMTgzODA1IgyJWSmLCi0q2is9C0Yq3APgGGSxp%2FTlRmmohjWKY09Q3cZBaWupbTRe%2BhxzSxO2eUk9FNcz68%2FGWt%2BXVAC4wLNiiOVZ5YoR5ooImp4ERG100Lx3JKo2PZIpaI8kQuJeCVfk0z6Oqpp%2F%2BR%2B0PpcRjPotG5mdm%2FyJML8BXpisYCcKG%2FkPYv6rdSsqtIq9IXyXsfSJ%2B43UrVE1Z2gDTIdwMMvRLsDDTnjH1pkPkr3YQX7kAd%2FVtx1UOE3ZXNpscUS198Ttn%2BwVv2KcZxKLP8WTvRqEW8Azz5BzYvOOQu04iXf%2BJUjvk3kMj5KDhdCrGpmvxGhnjenljKtW%2BDOGYU1%2F3HguM7tVr8z8neC3%2Fl6vLBgP45lQn6IeKYDIOf4vY6Bdp8Ec9sMU0vhwBSFWqqQ50mLnDtxUB65UNGFxRYgVLwkv2ZeCejh3WxxU1CRphlHqyszxywXx17A86tYFWNSceusksJ0u1RNPGDelLaFRxqxL%2Fa%2BmWOHKqv%2Femw%2FisfgKpZtssArovfRg8khD7WX%2FTGPw85x28kQtl1D3eLn8Oi9Aph2PKf%2F1dbVNe30cWpF%2F6%2FZcvcwDjGtL3iPeTH7fg5qC5WjGn6v6Le4wdP2iqFtiKHVdhDu9sp6jD%2Bme2LnON4AHOCWIG907um3gCjDbvZS%2FBjqkAYR8C%2FkMyVB3HW7%2B%2BPeZWhi6f%2BYGfQV9AJQIKtJFX7wd5kK34MvudVc0P%2BcvCFSV5aKnpu5lO0YzEATZXUi6eBIeEAQ6dSODQlkFTCA4ZV6yr3atKydmwqda78rOo5MiCMY%2FlOfhCHGCqNWp0fau3%2BWJymDQmn1XmAVwV1ntqztleAwDqxNn%2Bs1QWwOlD4udNfocNXw5Kyt8xQSn6RDDCz1aIQqR&X-Amz-Signature=1bbc6e275d43b8c01a9d2ff99ab4d9f87c71d9c8a3c84dfa5dff47ba8196aade&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNYXGWG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0jaKFSLYYTn6h8ZOd9EdHO3Ep1oWcgOyevDFT9muZWwIhANv0iiGI9Egd9WZC6OFzSPIdomT%2Flh5BG3oSYQp%2BElJpKv8DCEMQABoMNjM3NDIzMTgzODA1IgyJWSmLCi0q2is9C0Yq3APgGGSxp%2FTlRmmohjWKY09Q3cZBaWupbTRe%2BhxzSxO2eUk9FNcz68%2FGWt%2BXVAC4wLNiiOVZ5YoR5ooImp4ERG100Lx3JKo2PZIpaI8kQuJeCVfk0z6Oqpp%2F%2BR%2B0PpcRjPotG5mdm%2FyJML8BXpisYCcKG%2FkPYv6rdSsqtIq9IXyXsfSJ%2B43UrVE1Z2gDTIdwMMvRLsDDTnjH1pkPkr3YQX7kAd%2FVtx1UOE3ZXNpscUS198Ttn%2BwVv2KcZxKLP8WTvRqEW8Azz5BzYvOOQu04iXf%2BJUjvk3kMj5KDhdCrGpmvxGhnjenljKtW%2BDOGYU1%2F3HguM7tVr8z8neC3%2Fl6vLBgP45lQn6IeKYDIOf4vY6Bdp8Ec9sMU0vhwBSFWqqQ50mLnDtxUB65UNGFxRYgVLwkv2ZeCejh3WxxU1CRphlHqyszxywXx17A86tYFWNSceusksJ0u1RNPGDelLaFRxqxL%2Fa%2BmWOHKqv%2Femw%2FisfgKpZtssArovfRg8khD7WX%2FTGPw85x28kQtl1D3eLn8Oi9Aph2PKf%2F1dbVNe30cWpF%2F6%2FZcvcwDjGtL3iPeTH7fg5qC5WjGn6v6Le4wdP2iqFtiKHVdhDu9sp6jD%2Bme2LnON4AHOCWIG907um3gCjDbvZS%2FBjqkAYR8C%2FkMyVB3HW7%2B%2BPeZWhi6f%2BYGfQV9AJQIKtJFX7wd5kK34MvudVc0P%2BcvCFSV5aKnpu5lO0YzEATZXUi6eBIeEAQ6dSODQlkFTCA4ZV6yr3atKydmwqda78rOo5MiCMY%2FlOfhCHGCqNWp0fau3%2BWJymDQmn1XmAVwV1ntqztleAwDqxNn%2Bs1QWwOlD4udNfocNXw5Kyt8xQSn6RDDCz1aIQqR&X-Amz-Signature=170819b7f6479a3e9e023363aae8db4eb32c48d6edfa39bf4319ee40c64a4969&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNYXGWG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0jaKFSLYYTn6h8ZOd9EdHO3Ep1oWcgOyevDFT9muZWwIhANv0iiGI9Egd9WZC6OFzSPIdomT%2Flh5BG3oSYQp%2BElJpKv8DCEMQABoMNjM3NDIzMTgzODA1IgyJWSmLCi0q2is9C0Yq3APgGGSxp%2FTlRmmohjWKY09Q3cZBaWupbTRe%2BhxzSxO2eUk9FNcz68%2FGWt%2BXVAC4wLNiiOVZ5YoR5ooImp4ERG100Lx3JKo2PZIpaI8kQuJeCVfk0z6Oqpp%2F%2BR%2B0PpcRjPotG5mdm%2FyJML8BXpisYCcKG%2FkPYv6rdSsqtIq9IXyXsfSJ%2B43UrVE1Z2gDTIdwMMvRLsDDTnjH1pkPkr3YQX7kAd%2FVtx1UOE3ZXNpscUS198Ttn%2BwVv2KcZxKLP8WTvRqEW8Azz5BzYvOOQu04iXf%2BJUjvk3kMj5KDhdCrGpmvxGhnjenljKtW%2BDOGYU1%2F3HguM7tVr8z8neC3%2Fl6vLBgP45lQn6IeKYDIOf4vY6Bdp8Ec9sMU0vhwBSFWqqQ50mLnDtxUB65UNGFxRYgVLwkv2ZeCejh3WxxU1CRphlHqyszxywXx17A86tYFWNSceusksJ0u1RNPGDelLaFRxqxL%2Fa%2BmWOHKqv%2Femw%2FisfgKpZtssArovfRg8khD7WX%2FTGPw85x28kQtl1D3eLn8Oi9Aph2PKf%2F1dbVNe30cWpF%2F6%2FZcvcwDjGtL3iPeTH7fg5qC5WjGn6v6Le4wdP2iqFtiKHVdhDu9sp6jD%2Bme2LnON4AHOCWIG907um3gCjDbvZS%2FBjqkAYR8C%2FkMyVB3HW7%2B%2BPeZWhi6f%2BYGfQV9AJQIKtJFX7wd5kK34MvudVc0P%2BcvCFSV5aKnpu5lO0YzEATZXUi6eBIeEAQ6dSODQlkFTCA4ZV6yr3atKydmwqda78rOo5MiCMY%2FlOfhCHGCqNWp0fau3%2BWJymDQmn1XmAVwV1ntqztleAwDqxNn%2Bs1QWwOlD4udNfocNXw5Kyt8xQSn6RDDCz1aIQqR&X-Amz-Signature=aec953088a91555aabb6d1d743130b0d2bd0e24f0b5f1314b29263978af94ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNYXGWG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0jaKFSLYYTn6h8ZOd9EdHO3Ep1oWcgOyevDFT9muZWwIhANv0iiGI9Egd9WZC6OFzSPIdomT%2Flh5BG3oSYQp%2BElJpKv8DCEMQABoMNjM3NDIzMTgzODA1IgyJWSmLCi0q2is9C0Yq3APgGGSxp%2FTlRmmohjWKY09Q3cZBaWupbTRe%2BhxzSxO2eUk9FNcz68%2FGWt%2BXVAC4wLNiiOVZ5YoR5ooImp4ERG100Lx3JKo2PZIpaI8kQuJeCVfk0z6Oqpp%2F%2BR%2B0PpcRjPotG5mdm%2FyJML8BXpisYCcKG%2FkPYv6rdSsqtIq9IXyXsfSJ%2B43UrVE1Z2gDTIdwMMvRLsDDTnjH1pkPkr3YQX7kAd%2FVtx1UOE3ZXNpscUS198Ttn%2BwVv2KcZxKLP8WTvRqEW8Azz5BzYvOOQu04iXf%2BJUjvk3kMj5KDhdCrGpmvxGhnjenljKtW%2BDOGYU1%2F3HguM7tVr8z8neC3%2Fl6vLBgP45lQn6IeKYDIOf4vY6Bdp8Ec9sMU0vhwBSFWqqQ50mLnDtxUB65UNGFxRYgVLwkv2ZeCejh3WxxU1CRphlHqyszxywXx17A86tYFWNSceusksJ0u1RNPGDelLaFRxqxL%2Fa%2BmWOHKqv%2Femw%2FisfgKpZtssArovfRg8khD7WX%2FTGPw85x28kQtl1D3eLn8Oi9Aph2PKf%2F1dbVNe30cWpF%2F6%2FZcvcwDjGtL3iPeTH7fg5qC5WjGn6v6Le4wdP2iqFtiKHVdhDu9sp6jD%2Bme2LnON4AHOCWIG907um3gCjDbvZS%2FBjqkAYR8C%2FkMyVB3HW7%2B%2BPeZWhi6f%2BYGfQV9AJQIKtJFX7wd5kK34MvudVc0P%2BcvCFSV5aKnpu5lO0YzEATZXUi6eBIeEAQ6dSODQlkFTCA4ZV6yr3atKydmwqda78rOo5MiCMY%2FlOfhCHGCqNWp0fau3%2BWJymDQmn1XmAVwV1ntqztleAwDqxNn%2Bs1QWwOlD4udNfocNXw5Kyt8xQSn6RDDCz1aIQqR&X-Amz-Signature=7124a3f60f8146537cbe6f16965691d7b5a03cfe519446b64fb871ca7f60ee23&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNYXGWG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0jaKFSLYYTn6h8ZOd9EdHO3Ep1oWcgOyevDFT9muZWwIhANv0iiGI9Egd9WZC6OFzSPIdomT%2Flh5BG3oSYQp%2BElJpKv8DCEMQABoMNjM3NDIzMTgzODA1IgyJWSmLCi0q2is9C0Yq3APgGGSxp%2FTlRmmohjWKY09Q3cZBaWupbTRe%2BhxzSxO2eUk9FNcz68%2FGWt%2BXVAC4wLNiiOVZ5YoR5ooImp4ERG100Lx3JKo2PZIpaI8kQuJeCVfk0z6Oqpp%2F%2BR%2B0PpcRjPotG5mdm%2FyJML8BXpisYCcKG%2FkPYv6rdSsqtIq9IXyXsfSJ%2B43UrVE1Z2gDTIdwMMvRLsDDTnjH1pkPkr3YQX7kAd%2FVtx1UOE3ZXNpscUS198Ttn%2BwVv2KcZxKLP8WTvRqEW8Azz5BzYvOOQu04iXf%2BJUjvk3kMj5KDhdCrGpmvxGhnjenljKtW%2BDOGYU1%2F3HguM7tVr8z8neC3%2Fl6vLBgP45lQn6IeKYDIOf4vY6Bdp8Ec9sMU0vhwBSFWqqQ50mLnDtxUB65UNGFxRYgVLwkv2ZeCejh3WxxU1CRphlHqyszxywXx17A86tYFWNSceusksJ0u1RNPGDelLaFRxqxL%2Fa%2BmWOHKqv%2Femw%2FisfgKpZtssArovfRg8khD7WX%2FTGPw85x28kQtl1D3eLn8Oi9Aph2PKf%2F1dbVNe30cWpF%2F6%2FZcvcwDjGtL3iPeTH7fg5qC5WjGn6v6Le4wdP2iqFtiKHVdhDu9sp6jD%2Bme2LnON4AHOCWIG907um3gCjDbvZS%2FBjqkAYR8C%2FkMyVB3HW7%2B%2BPeZWhi6f%2BYGfQV9AJQIKtJFX7wd5kK34MvudVc0P%2BcvCFSV5aKnpu5lO0YzEATZXUi6eBIeEAQ6dSODQlkFTCA4ZV6yr3atKydmwqda78rOo5MiCMY%2FlOfhCHGCqNWp0fau3%2BWJymDQmn1XmAVwV1ntqztleAwDqxNn%2Bs1QWwOlD4udNfocNXw5Kyt8xQSn6RDDCz1aIQqR&X-Amz-Signature=6e2ed45f70500d4fe7ad6a9f6be4c3d40008ae7c1d4ff0f68a2ad86acbd070e5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNYXGWG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0jaKFSLYYTn6h8ZOd9EdHO3Ep1oWcgOyevDFT9muZWwIhANv0iiGI9Egd9WZC6OFzSPIdomT%2Flh5BG3oSYQp%2BElJpKv8DCEMQABoMNjM3NDIzMTgzODA1IgyJWSmLCi0q2is9C0Yq3APgGGSxp%2FTlRmmohjWKY09Q3cZBaWupbTRe%2BhxzSxO2eUk9FNcz68%2FGWt%2BXVAC4wLNiiOVZ5YoR5ooImp4ERG100Lx3JKo2PZIpaI8kQuJeCVfk0z6Oqpp%2F%2BR%2B0PpcRjPotG5mdm%2FyJML8BXpisYCcKG%2FkPYv6rdSsqtIq9IXyXsfSJ%2B43UrVE1Z2gDTIdwMMvRLsDDTnjH1pkPkr3YQX7kAd%2FVtx1UOE3ZXNpscUS198Ttn%2BwVv2KcZxKLP8WTvRqEW8Azz5BzYvOOQu04iXf%2BJUjvk3kMj5KDhdCrGpmvxGhnjenljKtW%2BDOGYU1%2F3HguM7tVr8z8neC3%2Fl6vLBgP45lQn6IeKYDIOf4vY6Bdp8Ec9sMU0vhwBSFWqqQ50mLnDtxUB65UNGFxRYgVLwkv2ZeCejh3WxxU1CRphlHqyszxywXx17A86tYFWNSceusksJ0u1RNPGDelLaFRxqxL%2Fa%2BmWOHKqv%2Femw%2FisfgKpZtssArovfRg8khD7WX%2FTGPw85x28kQtl1D3eLn8Oi9Aph2PKf%2F1dbVNe30cWpF%2F6%2FZcvcwDjGtL3iPeTH7fg5qC5WjGn6v6Le4wdP2iqFtiKHVdhDu9sp6jD%2Bme2LnON4AHOCWIG907um3gCjDbvZS%2FBjqkAYR8C%2FkMyVB3HW7%2B%2BPeZWhi6f%2BYGfQV9AJQIKtJFX7wd5kK34MvudVc0P%2BcvCFSV5aKnpu5lO0YzEATZXUi6eBIeEAQ6dSODQlkFTCA4ZV6yr3atKydmwqda78rOo5MiCMY%2FlOfhCHGCqNWp0fau3%2BWJymDQmn1XmAVwV1ntqztleAwDqxNn%2Bs1QWwOlD4udNfocNXw5Kyt8xQSn6RDDCz1aIQqR&X-Amz-Signature=6d3e7ad7fbed0225d62589d3e443828822b5afad392753bf9ccb633346426005&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNYXGWG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0jaKFSLYYTn6h8ZOd9EdHO3Ep1oWcgOyevDFT9muZWwIhANv0iiGI9Egd9WZC6OFzSPIdomT%2Flh5BG3oSYQp%2BElJpKv8DCEMQABoMNjM3NDIzMTgzODA1IgyJWSmLCi0q2is9C0Yq3APgGGSxp%2FTlRmmohjWKY09Q3cZBaWupbTRe%2BhxzSxO2eUk9FNcz68%2FGWt%2BXVAC4wLNiiOVZ5YoR5ooImp4ERG100Lx3JKo2PZIpaI8kQuJeCVfk0z6Oqpp%2F%2BR%2B0PpcRjPotG5mdm%2FyJML8BXpisYCcKG%2FkPYv6rdSsqtIq9IXyXsfSJ%2B43UrVE1Z2gDTIdwMMvRLsDDTnjH1pkPkr3YQX7kAd%2FVtx1UOE3ZXNpscUS198Ttn%2BwVv2KcZxKLP8WTvRqEW8Azz5BzYvOOQu04iXf%2BJUjvk3kMj5KDhdCrGpmvxGhnjenljKtW%2BDOGYU1%2F3HguM7tVr8z8neC3%2Fl6vLBgP45lQn6IeKYDIOf4vY6Bdp8Ec9sMU0vhwBSFWqqQ50mLnDtxUB65UNGFxRYgVLwkv2ZeCejh3WxxU1CRphlHqyszxywXx17A86tYFWNSceusksJ0u1RNPGDelLaFRxqxL%2Fa%2BmWOHKqv%2Femw%2FisfgKpZtssArovfRg8khD7WX%2FTGPw85x28kQtl1D3eLn8Oi9Aph2PKf%2F1dbVNe30cWpF%2F6%2FZcvcwDjGtL3iPeTH7fg5qC5WjGn6v6Le4wdP2iqFtiKHVdhDu9sp6jD%2Bme2LnON4AHOCWIG907um3gCjDbvZS%2FBjqkAYR8C%2FkMyVB3HW7%2B%2BPeZWhi6f%2BYGfQV9AJQIKtJFX7wd5kK34MvudVc0P%2BcvCFSV5aKnpu5lO0YzEATZXUi6eBIeEAQ6dSODQlkFTCA4ZV6yr3atKydmwqda78rOo5MiCMY%2FlOfhCHGCqNWp0fau3%2BWJymDQmn1XmAVwV1ntqztleAwDqxNn%2Bs1QWwOlD4udNfocNXw5Kyt8xQSn6RDDCz1aIQqR&X-Amz-Signature=73730db178132c260d1cb9f8d5935523ebc02298c2e4b4acf3a837f635030a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
