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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICCWFPS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXXX8QwB5kTZ%2BsBWANfcPTFjPQyJcq4LgdHPJrQBXibAiBo%2BgRZQlBUt9ydyW%2BOLS6CbQzLvqSRaLlVXKFzq7VJeCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMxp93fp8muY%2BkJwUlKtwDFBv0jD5PUj26q0N9S8p5f2IMr%2FOQKO6wpv%2FWgj8OQ%2BH0KvcLNpSdZCRI9HL7U1wAqzK5EofCiOgKQBwv5WVlMx%2F%2FE7p%2BS1trpaxdR2StWvGq20uHj6%2Fc0aqSHlBpUB5k9S%2F4wB6hXn%2B2Gpg12B6P4WIjrIqdn6kEqfZa%2Bbzi%2Fvv%2FLdKLhUuBrWHXFVX2bdcxqX64MrICTHD64u2OfEu0Qaj35lERDYvUYhh20lCnFfbdJU%2FCJSrhOt02Q1Rnb370T%2BtopYR2aECAENnJM2uQyg9FXnzP7vtfRf8PYQxeGp4LoWi8Jiq4YGkL1TBk2ovrXCLh5a3LfIb5AkhkrCmZ%2BGZAFfQ9jTHRmwyPuU1g0h5hi7ctAUV6QDG6AwkbsYMEq3y6B5dVluGsdlNtlptUzCiOaNfcwjICcz46PU8yQSXtOBvhdqV60uXfZims76%2Foy0bnEuIZToK4guciAYGhWK8Z0QyDzQldc1MxyjAGBPD6PyUUD6AuTRfG8rhWOEjWYucVaHAnGCEsI8CJq3QsfEMbvlTyco17x9zLwS1QM0yLLAosRLlwzoRVvkPNXfx6Zl8fmIUycYwfXhrfQvTBR8PcRk4BnGRE3sLQbie4LmUf%2FAx7lLHWqIZ6LP4wgeC4vQY6pgG95HbuiNRbNGoXi0%2FvDXUl1Px1jYNZkOHVK4Oelm%2B1D6S2Qs3zdqWKnhz7pavNMNc6pxhFN%2FJEH8jSOMI%2BuyouzHJ%2F9xOZ9n6dsUR7Hp4keLeLf9NTn0ivOk6pX1zwyFdb7MHPkCrMNSWjpcYLkEPpNxNZhuNRpRd9LrUe68ZbwX%2Bu%2BeOzsMKFU%2Bf5uU56I0o3uhiBi9Tz1NJaCL02AjuqmW5jEi0e&X-Amz-Signature=6e5bede565791d14af9eb6753429776de4260ffc563eeb6be59775a185aadb8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICCWFPS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXXX8QwB5kTZ%2BsBWANfcPTFjPQyJcq4LgdHPJrQBXibAiBo%2BgRZQlBUt9ydyW%2BOLS6CbQzLvqSRaLlVXKFzq7VJeCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMxp93fp8muY%2BkJwUlKtwDFBv0jD5PUj26q0N9S8p5f2IMr%2FOQKO6wpv%2FWgj8OQ%2BH0KvcLNpSdZCRI9HL7U1wAqzK5EofCiOgKQBwv5WVlMx%2F%2FE7p%2BS1trpaxdR2StWvGq20uHj6%2Fc0aqSHlBpUB5k9S%2F4wB6hXn%2B2Gpg12B6P4WIjrIqdn6kEqfZa%2Bbzi%2Fvv%2FLdKLhUuBrWHXFVX2bdcxqX64MrICTHD64u2OfEu0Qaj35lERDYvUYhh20lCnFfbdJU%2FCJSrhOt02Q1Rnb370T%2BtopYR2aECAENnJM2uQyg9FXnzP7vtfRf8PYQxeGp4LoWi8Jiq4YGkL1TBk2ovrXCLh5a3LfIb5AkhkrCmZ%2BGZAFfQ9jTHRmwyPuU1g0h5hi7ctAUV6QDG6AwkbsYMEq3y6B5dVluGsdlNtlptUzCiOaNfcwjICcz46PU8yQSXtOBvhdqV60uXfZims76%2Foy0bnEuIZToK4guciAYGhWK8Z0QyDzQldc1MxyjAGBPD6PyUUD6AuTRfG8rhWOEjWYucVaHAnGCEsI8CJq3QsfEMbvlTyco17x9zLwS1QM0yLLAosRLlwzoRVvkPNXfx6Zl8fmIUycYwfXhrfQvTBR8PcRk4BnGRE3sLQbie4LmUf%2FAx7lLHWqIZ6LP4wgeC4vQY6pgG95HbuiNRbNGoXi0%2FvDXUl1Px1jYNZkOHVK4Oelm%2B1D6S2Qs3zdqWKnhz7pavNMNc6pxhFN%2FJEH8jSOMI%2BuyouzHJ%2F9xOZ9n6dsUR7Hp4keLeLf9NTn0ivOk6pX1zwyFdb7MHPkCrMNSWjpcYLkEPpNxNZhuNRpRd9LrUe68ZbwX%2Bu%2BeOzsMKFU%2Bf5uU56I0o3uhiBi9Tz1NJaCL02AjuqmW5jEi0e&X-Amz-Signature=4ea6af39b75757bc11c35007fd5cf7df3842ebe0d898b9eba98178bafc42d105&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICCWFPS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXXX8QwB5kTZ%2BsBWANfcPTFjPQyJcq4LgdHPJrQBXibAiBo%2BgRZQlBUt9ydyW%2BOLS6CbQzLvqSRaLlVXKFzq7VJeCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMxp93fp8muY%2BkJwUlKtwDFBv0jD5PUj26q0N9S8p5f2IMr%2FOQKO6wpv%2FWgj8OQ%2BH0KvcLNpSdZCRI9HL7U1wAqzK5EofCiOgKQBwv5WVlMx%2F%2FE7p%2BS1trpaxdR2StWvGq20uHj6%2Fc0aqSHlBpUB5k9S%2F4wB6hXn%2B2Gpg12B6P4WIjrIqdn6kEqfZa%2Bbzi%2Fvv%2FLdKLhUuBrWHXFVX2bdcxqX64MrICTHD64u2OfEu0Qaj35lERDYvUYhh20lCnFfbdJU%2FCJSrhOt02Q1Rnb370T%2BtopYR2aECAENnJM2uQyg9FXnzP7vtfRf8PYQxeGp4LoWi8Jiq4YGkL1TBk2ovrXCLh5a3LfIb5AkhkrCmZ%2BGZAFfQ9jTHRmwyPuU1g0h5hi7ctAUV6QDG6AwkbsYMEq3y6B5dVluGsdlNtlptUzCiOaNfcwjICcz46PU8yQSXtOBvhdqV60uXfZims76%2Foy0bnEuIZToK4guciAYGhWK8Z0QyDzQldc1MxyjAGBPD6PyUUD6AuTRfG8rhWOEjWYucVaHAnGCEsI8CJq3QsfEMbvlTyco17x9zLwS1QM0yLLAosRLlwzoRVvkPNXfx6Zl8fmIUycYwfXhrfQvTBR8PcRk4BnGRE3sLQbie4LmUf%2FAx7lLHWqIZ6LP4wgeC4vQY6pgG95HbuiNRbNGoXi0%2FvDXUl1Px1jYNZkOHVK4Oelm%2B1D6S2Qs3zdqWKnhz7pavNMNc6pxhFN%2FJEH8jSOMI%2BuyouzHJ%2F9xOZ9n6dsUR7Hp4keLeLf9NTn0ivOk6pX1zwyFdb7MHPkCrMNSWjpcYLkEPpNxNZhuNRpRd9LrUe68ZbwX%2Bu%2BeOzsMKFU%2Bf5uU56I0o3uhiBi9Tz1NJaCL02AjuqmW5jEi0e&X-Amz-Signature=55f68f8e39de7cc26df46b93103a60ab435ced7789d6ee0f8840a2df7968a900&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICCWFPS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXXX8QwB5kTZ%2BsBWANfcPTFjPQyJcq4LgdHPJrQBXibAiBo%2BgRZQlBUt9ydyW%2BOLS6CbQzLvqSRaLlVXKFzq7VJeCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMxp93fp8muY%2BkJwUlKtwDFBv0jD5PUj26q0N9S8p5f2IMr%2FOQKO6wpv%2FWgj8OQ%2BH0KvcLNpSdZCRI9HL7U1wAqzK5EofCiOgKQBwv5WVlMx%2F%2FE7p%2BS1trpaxdR2StWvGq20uHj6%2Fc0aqSHlBpUB5k9S%2F4wB6hXn%2B2Gpg12B6P4WIjrIqdn6kEqfZa%2Bbzi%2Fvv%2FLdKLhUuBrWHXFVX2bdcxqX64MrICTHD64u2OfEu0Qaj35lERDYvUYhh20lCnFfbdJU%2FCJSrhOt02Q1Rnb370T%2BtopYR2aECAENnJM2uQyg9FXnzP7vtfRf8PYQxeGp4LoWi8Jiq4YGkL1TBk2ovrXCLh5a3LfIb5AkhkrCmZ%2BGZAFfQ9jTHRmwyPuU1g0h5hi7ctAUV6QDG6AwkbsYMEq3y6B5dVluGsdlNtlptUzCiOaNfcwjICcz46PU8yQSXtOBvhdqV60uXfZims76%2Foy0bnEuIZToK4guciAYGhWK8Z0QyDzQldc1MxyjAGBPD6PyUUD6AuTRfG8rhWOEjWYucVaHAnGCEsI8CJq3QsfEMbvlTyco17x9zLwS1QM0yLLAosRLlwzoRVvkPNXfx6Zl8fmIUycYwfXhrfQvTBR8PcRk4BnGRE3sLQbie4LmUf%2FAx7lLHWqIZ6LP4wgeC4vQY6pgG95HbuiNRbNGoXi0%2FvDXUl1Px1jYNZkOHVK4Oelm%2B1D6S2Qs3zdqWKnhz7pavNMNc6pxhFN%2FJEH8jSOMI%2BuyouzHJ%2F9xOZ9n6dsUR7Hp4keLeLf9NTn0ivOk6pX1zwyFdb7MHPkCrMNSWjpcYLkEPpNxNZhuNRpRd9LrUe68ZbwX%2Bu%2BeOzsMKFU%2Bf5uU56I0o3uhiBi9Tz1NJaCL02AjuqmW5jEi0e&X-Amz-Signature=3351cfb6b767594b7ca1e4ae707bc521447e0182f1651993e8d0cfd95e996abe&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICCWFPS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXXX8QwB5kTZ%2BsBWANfcPTFjPQyJcq4LgdHPJrQBXibAiBo%2BgRZQlBUt9ydyW%2BOLS6CbQzLvqSRaLlVXKFzq7VJeCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMxp93fp8muY%2BkJwUlKtwDFBv0jD5PUj26q0N9S8p5f2IMr%2FOQKO6wpv%2FWgj8OQ%2BH0KvcLNpSdZCRI9HL7U1wAqzK5EofCiOgKQBwv5WVlMx%2F%2FE7p%2BS1trpaxdR2StWvGq20uHj6%2Fc0aqSHlBpUB5k9S%2F4wB6hXn%2B2Gpg12B6P4WIjrIqdn6kEqfZa%2Bbzi%2Fvv%2FLdKLhUuBrWHXFVX2bdcxqX64MrICTHD64u2OfEu0Qaj35lERDYvUYhh20lCnFfbdJU%2FCJSrhOt02Q1Rnb370T%2BtopYR2aECAENnJM2uQyg9FXnzP7vtfRf8PYQxeGp4LoWi8Jiq4YGkL1TBk2ovrXCLh5a3LfIb5AkhkrCmZ%2BGZAFfQ9jTHRmwyPuU1g0h5hi7ctAUV6QDG6AwkbsYMEq3y6B5dVluGsdlNtlptUzCiOaNfcwjICcz46PU8yQSXtOBvhdqV60uXfZims76%2Foy0bnEuIZToK4guciAYGhWK8Z0QyDzQldc1MxyjAGBPD6PyUUD6AuTRfG8rhWOEjWYucVaHAnGCEsI8CJq3QsfEMbvlTyco17x9zLwS1QM0yLLAosRLlwzoRVvkPNXfx6Zl8fmIUycYwfXhrfQvTBR8PcRk4BnGRE3sLQbie4LmUf%2FAx7lLHWqIZ6LP4wgeC4vQY6pgG95HbuiNRbNGoXi0%2FvDXUl1Px1jYNZkOHVK4Oelm%2B1D6S2Qs3zdqWKnhz7pavNMNc6pxhFN%2FJEH8jSOMI%2BuyouzHJ%2F9xOZ9n6dsUR7Hp4keLeLf9NTn0ivOk6pX1zwyFdb7MHPkCrMNSWjpcYLkEPpNxNZhuNRpRd9LrUe68ZbwX%2Bu%2BeOzsMKFU%2Bf5uU56I0o3uhiBi9Tz1NJaCL02AjuqmW5jEi0e&X-Amz-Signature=a34248becbb30006211481debd27e0a74338d231bf9e50ab4efbaf030838c0b9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICCWFPS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXXX8QwB5kTZ%2BsBWANfcPTFjPQyJcq4LgdHPJrQBXibAiBo%2BgRZQlBUt9ydyW%2BOLS6CbQzLvqSRaLlVXKFzq7VJeCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMxp93fp8muY%2BkJwUlKtwDFBv0jD5PUj26q0N9S8p5f2IMr%2FOQKO6wpv%2FWgj8OQ%2BH0KvcLNpSdZCRI9HL7U1wAqzK5EofCiOgKQBwv5WVlMx%2F%2FE7p%2BS1trpaxdR2StWvGq20uHj6%2Fc0aqSHlBpUB5k9S%2F4wB6hXn%2B2Gpg12B6P4WIjrIqdn6kEqfZa%2Bbzi%2Fvv%2FLdKLhUuBrWHXFVX2bdcxqX64MrICTHD64u2OfEu0Qaj35lERDYvUYhh20lCnFfbdJU%2FCJSrhOt02Q1Rnb370T%2BtopYR2aECAENnJM2uQyg9FXnzP7vtfRf8PYQxeGp4LoWi8Jiq4YGkL1TBk2ovrXCLh5a3LfIb5AkhkrCmZ%2BGZAFfQ9jTHRmwyPuU1g0h5hi7ctAUV6QDG6AwkbsYMEq3y6B5dVluGsdlNtlptUzCiOaNfcwjICcz46PU8yQSXtOBvhdqV60uXfZims76%2Foy0bnEuIZToK4guciAYGhWK8Z0QyDzQldc1MxyjAGBPD6PyUUD6AuTRfG8rhWOEjWYucVaHAnGCEsI8CJq3QsfEMbvlTyco17x9zLwS1QM0yLLAosRLlwzoRVvkPNXfx6Zl8fmIUycYwfXhrfQvTBR8PcRk4BnGRE3sLQbie4LmUf%2FAx7lLHWqIZ6LP4wgeC4vQY6pgG95HbuiNRbNGoXi0%2FvDXUl1Px1jYNZkOHVK4Oelm%2B1D6S2Qs3zdqWKnhz7pavNMNc6pxhFN%2FJEH8jSOMI%2BuyouzHJ%2F9xOZ9n6dsUR7Hp4keLeLf9NTn0ivOk6pX1zwyFdb7MHPkCrMNSWjpcYLkEPpNxNZhuNRpRd9LrUe68ZbwX%2Bu%2BeOzsMKFU%2Bf5uU56I0o3uhiBi9Tz1NJaCL02AjuqmW5jEi0e&X-Amz-Signature=5f66bc295f24b99444d9aac6c8aff07db9d370bb8b0feb3535b78c3f0fefc4e2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICCWFPS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXXX8QwB5kTZ%2BsBWANfcPTFjPQyJcq4LgdHPJrQBXibAiBo%2BgRZQlBUt9ydyW%2BOLS6CbQzLvqSRaLlVXKFzq7VJeCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMxp93fp8muY%2BkJwUlKtwDFBv0jD5PUj26q0N9S8p5f2IMr%2FOQKO6wpv%2FWgj8OQ%2BH0KvcLNpSdZCRI9HL7U1wAqzK5EofCiOgKQBwv5WVlMx%2F%2FE7p%2BS1trpaxdR2StWvGq20uHj6%2Fc0aqSHlBpUB5k9S%2F4wB6hXn%2B2Gpg12B6P4WIjrIqdn6kEqfZa%2Bbzi%2Fvv%2FLdKLhUuBrWHXFVX2bdcxqX64MrICTHD64u2OfEu0Qaj35lERDYvUYhh20lCnFfbdJU%2FCJSrhOt02Q1Rnb370T%2BtopYR2aECAENnJM2uQyg9FXnzP7vtfRf8PYQxeGp4LoWi8Jiq4YGkL1TBk2ovrXCLh5a3LfIb5AkhkrCmZ%2BGZAFfQ9jTHRmwyPuU1g0h5hi7ctAUV6QDG6AwkbsYMEq3y6B5dVluGsdlNtlptUzCiOaNfcwjICcz46PU8yQSXtOBvhdqV60uXfZims76%2Foy0bnEuIZToK4guciAYGhWK8Z0QyDzQldc1MxyjAGBPD6PyUUD6AuTRfG8rhWOEjWYucVaHAnGCEsI8CJq3QsfEMbvlTyco17x9zLwS1QM0yLLAosRLlwzoRVvkPNXfx6Zl8fmIUycYwfXhrfQvTBR8PcRk4BnGRE3sLQbie4LmUf%2FAx7lLHWqIZ6LP4wgeC4vQY6pgG95HbuiNRbNGoXi0%2FvDXUl1Px1jYNZkOHVK4Oelm%2B1D6S2Qs3zdqWKnhz7pavNMNc6pxhFN%2FJEH8jSOMI%2BuyouzHJ%2F9xOZ9n6dsUR7Hp4keLeLf9NTn0ivOk6pX1zwyFdb7MHPkCrMNSWjpcYLkEPpNxNZhuNRpRd9LrUe68ZbwX%2Bu%2BeOzsMKFU%2Bf5uU56I0o3uhiBi9Tz1NJaCL02AjuqmW5jEi0e&X-Amz-Signature=8b9a6118ddd88e9ca69987914d2b9949f77bbf7c4e0488a61bd09ece6b811d34&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
