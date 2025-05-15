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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2C5JG7X%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIE3vXdVcDnjboIRGcQbZ9gG3c5fyw6wOcSUNrugZSyVoAiEApEUZGKRqPe3YTGO3NBEL06MkyEx70G%2FoHTuXF6RUos4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFfNUDC5TO26D%2B3FAyrcA1FSkIhkogfdY6VeES%2BAhDRgsz5hPG%2FSuiNgk%2FTMq5yGJoNdGttsxRZqXbORGOQWMq%2FeCFR21Fzc%2B8JbxQqrDKQiHO9naLydmPKLSd2ZMlAQMo8YQW6Y0Uo7IwpPkyrM%2BMVoQyRz1VtXvW3vDlztx6yu81xexNexNHK9Xp5J2rJpcmxKj7iZlhDe3PVwXkxxjAFlwgsVsf7PcKwRfHsLNRZC8xrJnIZWHbmYAIjrK0cUrWnLo6T2CpiLINX%2F8uNIzRZ1A5uJeGYxxc4KNmc7kqGA8%2FNYx5l9kMNFUC0MjCQ5VZ%2Fa8Ocg1%2BfWvY3%2FqsdYaJZnDou6F%2BxgTAY%2FXXlk%2BXe%2BVIQ3VSImhDOPLXKieHYCLduQidKxRg0ew2quGZgVpRXX78DJ1x22Ab3pXatXrAo72K7LIlnYmxDCbt6DXhuPi49U8o000XPEHSg00io%2FAoYSs2Eq1U%2FKlZzG9RTe4YBhUzhs%2B9usVuKQLyZphdApv84jIpaAoDsHF2SvXxNK5OIJUV3FGNQR1MC1j09YOMfYI6Gm4JRhDgiPNsYQxxdBSqGNlUgmWZFMzx%2BSB0csN9bmKgPix%2BkyJUB8IQALTeSCX1cBHaDt7Rtiy3yTOI%2FXGttzFmB72cKkyTeqMJyelcEGOqUB8nalM1tBIPzezWFUWxST%2FpeBBSDiX0KtNmFV4ZoQ%2BvrefBBl5f94UhB%2FeoHpkHmmJArMu0JYJ0iHxf3071xnn%2FnArBnjOGECm%2BhnpyVJCu4sRoIPJ3%2FKsSX%2FwDnwgOuaxhk%2BptEFzLXzLgED8ZTY8TuzM2xHD8jsPNjLtXkAVLaaTDguHK4wHLt1T298w4sQz%2FQ4t01xSga85%2FDylWa8JThHUibC&X-Amz-Signature=40fef93c23a516790d33e5ce1088598b9062191967a4d6a58efb724e1efd99d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2C5JG7X%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIE3vXdVcDnjboIRGcQbZ9gG3c5fyw6wOcSUNrugZSyVoAiEApEUZGKRqPe3YTGO3NBEL06MkyEx70G%2FoHTuXF6RUos4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFfNUDC5TO26D%2B3FAyrcA1FSkIhkogfdY6VeES%2BAhDRgsz5hPG%2FSuiNgk%2FTMq5yGJoNdGttsxRZqXbORGOQWMq%2FeCFR21Fzc%2B8JbxQqrDKQiHO9naLydmPKLSd2ZMlAQMo8YQW6Y0Uo7IwpPkyrM%2BMVoQyRz1VtXvW3vDlztx6yu81xexNexNHK9Xp5J2rJpcmxKj7iZlhDe3PVwXkxxjAFlwgsVsf7PcKwRfHsLNRZC8xrJnIZWHbmYAIjrK0cUrWnLo6T2CpiLINX%2F8uNIzRZ1A5uJeGYxxc4KNmc7kqGA8%2FNYx5l9kMNFUC0MjCQ5VZ%2Fa8Ocg1%2BfWvY3%2FqsdYaJZnDou6F%2BxgTAY%2FXXlk%2BXe%2BVIQ3VSImhDOPLXKieHYCLduQidKxRg0ew2quGZgVpRXX78DJ1x22Ab3pXatXrAo72K7LIlnYmxDCbt6DXhuPi49U8o000XPEHSg00io%2FAoYSs2Eq1U%2FKlZzG9RTe4YBhUzhs%2B9usVuKQLyZphdApv84jIpaAoDsHF2SvXxNK5OIJUV3FGNQR1MC1j09YOMfYI6Gm4JRhDgiPNsYQxxdBSqGNlUgmWZFMzx%2BSB0csN9bmKgPix%2BkyJUB8IQALTeSCX1cBHaDt7Rtiy3yTOI%2FXGttzFmB72cKkyTeqMJyelcEGOqUB8nalM1tBIPzezWFUWxST%2FpeBBSDiX0KtNmFV4ZoQ%2BvrefBBl5f94UhB%2FeoHpkHmmJArMu0JYJ0iHxf3071xnn%2FnArBnjOGECm%2BhnpyVJCu4sRoIPJ3%2FKsSX%2FwDnwgOuaxhk%2BptEFzLXzLgED8ZTY8TuzM2xHD8jsPNjLtXkAVLaaTDguHK4wHLt1T298w4sQz%2FQ4t01xSga85%2FDylWa8JThHUibC&X-Amz-Signature=e361540176528e9496f6fee07778ed1a48c3492d5b626f78c1df297520f10607&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2C5JG7X%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIE3vXdVcDnjboIRGcQbZ9gG3c5fyw6wOcSUNrugZSyVoAiEApEUZGKRqPe3YTGO3NBEL06MkyEx70G%2FoHTuXF6RUos4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFfNUDC5TO26D%2B3FAyrcA1FSkIhkogfdY6VeES%2BAhDRgsz5hPG%2FSuiNgk%2FTMq5yGJoNdGttsxRZqXbORGOQWMq%2FeCFR21Fzc%2B8JbxQqrDKQiHO9naLydmPKLSd2ZMlAQMo8YQW6Y0Uo7IwpPkyrM%2BMVoQyRz1VtXvW3vDlztx6yu81xexNexNHK9Xp5J2rJpcmxKj7iZlhDe3PVwXkxxjAFlwgsVsf7PcKwRfHsLNRZC8xrJnIZWHbmYAIjrK0cUrWnLo6T2CpiLINX%2F8uNIzRZ1A5uJeGYxxc4KNmc7kqGA8%2FNYx5l9kMNFUC0MjCQ5VZ%2Fa8Ocg1%2BfWvY3%2FqsdYaJZnDou6F%2BxgTAY%2FXXlk%2BXe%2BVIQ3VSImhDOPLXKieHYCLduQidKxRg0ew2quGZgVpRXX78DJ1x22Ab3pXatXrAo72K7LIlnYmxDCbt6DXhuPi49U8o000XPEHSg00io%2FAoYSs2Eq1U%2FKlZzG9RTe4YBhUzhs%2B9usVuKQLyZphdApv84jIpaAoDsHF2SvXxNK5OIJUV3FGNQR1MC1j09YOMfYI6Gm4JRhDgiPNsYQxxdBSqGNlUgmWZFMzx%2BSB0csN9bmKgPix%2BkyJUB8IQALTeSCX1cBHaDt7Rtiy3yTOI%2FXGttzFmB72cKkyTeqMJyelcEGOqUB8nalM1tBIPzezWFUWxST%2FpeBBSDiX0KtNmFV4ZoQ%2BvrefBBl5f94UhB%2FeoHpkHmmJArMu0JYJ0iHxf3071xnn%2FnArBnjOGECm%2BhnpyVJCu4sRoIPJ3%2FKsSX%2FwDnwgOuaxhk%2BptEFzLXzLgED8ZTY8TuzM2xHD8jsPNjLtXkAVLaaTDguHK4wHLt1T298w4sQz%2FQ4t01xSga85%2FDylWa8JThHUibC&X-Amz-Signature=f475f9d9ef7b66b8df49bf388843a721ab728dd384b36a636bc3a8d598f20f82&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2C5JG7X%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIE3vXdVcDnjboIRGcQbZ9gG3c5fyw6wOcSUNrugZSyVoAiEApEUZGKRqPe3YTGO3NBEL06MkyEx70G%2FoHTuXF6RUos4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFfNUDC5TO26D%2B3FAyrcA1FSkIhkogfdY6VeES%2BAhDRgsz5hPG%2FSuiNgk%2FTMq5yGJoNdGttsxRZqXbORGOQWMq%2FeCFR21Fzc%2B8JbxQqrDKQiHO9naLydmPKLSd2ZMlAQMo8YQW6Y0Uo7IwpPkyrM%2BMVoQyRz1VtXvW3vDlztx6yu81xexNexNHK9Xp5J2rJpcmxKj7iZlhDe3PVwXkxxjAFlwgsVsf7PcKwRfHsLNRZC8xrJnIZWHbmYAIjrK0cUrWnLo6T2CpiLINX%2F8uNIzRZ1A5uJeGYxxc4KNmc7kqGA8%2FNYx5l9kMNFUC0MjCQ5VZ%2Fa8Ocg1%2BfWvY3%2FqsdYaJZnDou6F%2BxgTAY%2FXXlk%2BXe%2BVIQ3VSImhDOPLXKieHYCLduQidKxRg0ew2quGZgVpRXX78DJ1x22Ab3pXatXrAo72K7LIlnYmxDCbt6DXhuPi49U8o000XPEHSg00io%2FAoYSs2Eq1U%2FKlZzG9RTe4YBhUzhs%2B9usVuKQLyZphdApv84jIpaAoDsHF2SvXxNK5OIJUV3FGNQR1MC1j09YOMfYI6Gm4JRhDgiPNsYQxxdBSqGNlUgmWZFMzx%2BSB0csN9bmKgPix%2BkyJUB8IQALTeSCX1cBHaDt7Rtiy3yTOI%2FXGttzFmB72cKkyTeqMJyelcEGOqUB8nalM1tBIPzezWFUWxST%2FpeBBSDiX0KtNmFV4ZoQ%2BvrefBBl5f94UhB%2FeoHpkHmmJArMu0JYJ0iHxf3071xnn%2FnArBnjOGECm%2BhnpyVJCu4sRoIPJ3%2FKsSX%2FwDnwgOuaxhk%2BptEFzLXzLgED8ZTY8TuzM2xHD8jsPNjLtXkAVLaaTDguHK4wHLt1T298w4sQz%2FQ4t01xSga85%2FDylWa8JThHUibC&X-Amz-Signature=3d1d6eaca95741f17d24c46a0dca7c78daa7810a88aac76b2e1c4b93bb89241a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2C5JG7X%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIE3vXdVcDnjboIRGcQbZ9gG3c5fyw6wOcSUNrugZSyVoAiEApEUZGKRqPe3YTGO3NBEL06MkyEx70G%2FoHTuXF6RUos4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFfNUDC5TO26D%2B3FAyrcA1FSkIhkogfdY6VeES%2BAhDRgsz5hPG%2FSuiNgk%2FTMq5yGJoNdGttsxRZqXbORGOQWMq%2FeCFR21Fzc%2B8JbxQqrDKQiHO9naLydmPKLSd2ZMlAQMo8YQW6Y0Uo7IwpPkyrM%2BMVoQyRz1VtXvW3vDlztx6yu81xexNexNHK9Xp5J2rJpcmxKj7iZlhDe3PVwXkxxjAFlwgsVsf7PcKwRfHsLNRZC8xrJnIZWHbmYAIjrK0cUrWnLo6T2CpiLINX%2F8uNIzRZ1A5uJeGYxxc4KNmc7kqGA8%2FNYx5l9kMNFUC0MjCQ5VZ%2Fa8Ocg1%2BfWvY3%2FqsdYaJZnDou6F%2BxgTAY%2FXXlk%2BXe%2BVIQ3VSImhDOPLXKieHYCLduQidKxRg0ew2quGZgVpRXX78DJ1x22Ab3pXatXrAo72K7LIlnYmxDCbt6DXhuPi49U8o000XPEHSg00io%2FAoYSs2Eq1U%2FKlZzG9RTe4YBhUzhs%2B9usVuKQLyZphdApv84jIpaAoDsHF2SvXxNK5OIJUV3FGNQR1MC1j09YOMfYI6Gm4JRhDgiPNsYQxxdBSqGNlUgmWZFMzx%2BSB0csN9bmKgPix%2BkyJUB8IQALTeSCX1cBHaDt7Rtiy3yTOI%2FXGttzFmB72cKkyTeqMJyelcEGOqUB8nalM1tBIPzezWFUWxST%2FpeBBSDiX0KtNmFV4ZoQ%2BvrefBBl5f94UhB%2FeoHpkHmmJArMu0JYJ0iHxf3071xnn%2FnArBnjOGECm%2BhnpyVJCu4sRoIPJ3%2FKsSX%2FwDnwgOuaxhk%2BptEFzLXzLgED8ZTY8TuzM2xHD8jsPNjLtXkAVLaaTDguHK4wHLt1T298w4sQz%2FQ4t01xSga85%2FDylWa8JThHUibC&X-Amz-Signature=39a27423f9e6cd09ee08a60c0060489ceb7c1c90889852442a83cf965a2ef6c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2C5JG7X%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIE3vXdVcDnjboIRGcQbZ9gG3c5fyw6wOcSUNrugZSyVoAiEApEUZGKRqPe3YTGO3NBEL06MkyEx70G%2FoHTuXF6RUos4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFfNUDC5TO26D%2B3FAyrcA1FSkIhkogfdY6VeES%2BAhDRgsz5hPG%2FSuiNgk%2FTMq5yGJoNdGttsxRZqXbORGOQWMq%2FeCFR21Fzc%2B8JbxQqrDKQiHO9naLydmPKLSd2ZMlAQMo8YQW6Y0Uo7IwpPkyrM%2BMVoQyRz1VtXvW3vDlztx6yu81xexNexNHK9Xp5J2rJpcmxKj7iZlhDe3PVwXkxxjAFlwgsVsf7PcKwRfHsLNRZC8xrJnIZWHbmYAIjrK0cUrWnLo6T2CpiLINX%2F8uNIzRZ1A5uJeGYxxc4KNmc7kqGA8%2FNYx5l9kMNFUC0MjCQ5VZ%2Fa8Ocg1%2BfWvY3%2FqsdYaJZnDou6F%2BxgTAY%2FXXlk%2BXe%2BVIQ3VSImhDOPLXKieHYCLduQidKxRg0ew2quGZgVpRXX78DJ1x22Ab3pXatXrAo72K7LIlnYmxDCbt6DXhuPi49U8o000XPEHSg00io%2FAoYSs2Eq1U%2FKlZzG9RTe4YBhUzhs%2B9usVuKQLyZphdApv84jIpaAoDsHF2SvXxNK5OIJUV3FGNQR1MC1j09YOMfYI6Gm4JRhDgiPNsYQxxdBSqGNlUgmWZFMzx%2BSB0csN9bmKgPix%2BkyJUB8IQALTeSCX1cBHaDt7Rtiy3yTOI%2FXGttzFmB72cKkyTeqMJyelcEGOqUB8nalM1tBIPzezWFUWxST%2FpeBBSDiX0KtNmFV4ZoQ%2BvrefBBl5f94UhB%2FeoHpkHmmJArMu0JYJ0iHxf3071xnn%2FnArBnjOGECm%2BhnpyVJCu4sRoIPJ3%2FKsSX%2FwDnwgOuaxhk%2BptEFzLXzLgED8ZTY8TuzM2xHD8jsPNjLtXkAVLaaTDguHK4wHLt1T298w4sQz%2FQ4t01xSga85%2FDylWa8JThHUibC&X-Amz-Signature=e027966e8d7f21c3684af9c3872ee317dbec5c9934f09246c960f97cd7a9dbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2C5JG7X%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIE3vXdVcDnjboIRGcQbZ9gG3c5fyw6wOcSUNrugZSyVoAiEApEUZGKRqPe3YTGO3NBEL06MkyEx70G%2FoHTuXF6RUos4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFfNUDC5TO26D%2B3FAyrcA1FSkIhkogfdY6VeES%2BAhDRgsz5hPG%2FSuiNgk%2FTMq5yGJoNdGttsxRZqXbORGOQWMq%2FeCFR21Fzc%2B8JbxQqrDKQiHO9naLydmPKLSd2ZMlAQMo8YQW6Y0Uo7IwpPkyrM%2BMVoQyRz1VtXvW3vDlztx6yu81xexNexNHK9Xp5J2rJpcmxKj7iZlhDe3PVwXkxxjAFlwgsVsf7PcKwRfHsLNRZC8xrJnIZWHbmYAIjrK0cUrWnLo6T2CpiLINX%2F8uNIzRZ1A5uJeGYxxc4KNmc7kqGA8%2FNYx5l9kMNFUC0MjCQ5VZ%2Fa8Ocg1%2BfWvY3%2FqsdYaJZnDou6F%2BxgTAY%2FXXlk%2BXe%2BVIQ3VSImhDOPLXKieHYCLduQidKxRg0ew2quGZgVpRXX78DJ1x22Ab3pXatXrAo72K7LIlnYmxDCbt6DXhuPi49U8o000XPEHSg00io%2FAoYSs2Eq1U%2FKlZzG9RTe4YBhUzhs%2B9usVuKQLyZphdApv84jIpaAoDsHF2SvXxNK5OIJUV3FGNQR1MC1j09YOMfYI6Gm4JRhDgiPNsYQxxdBSqGNlUgmWZFMzx%2BSB0csN9bmKgPix%2BkyJUB8IQALTeSCX1cBHaDt7Rtiy3yTOI%2FXGttzFmB72cKkyTeqMJyelcEGOqUB8nalM1tBIPzezWFUWxST%2FpeBBSDiX0KtNmFV4ZoQ%2BvrefBBl5f94UhB%2FeoHpkHmmJArMu0JYJ0iHxf3071xnn%2FnArBnjOGECm%2BhnpyVJCu4sRoIPJ3%2FKsSX%2FwDnwgOuaxhk%2BptEFzLXzLgED8ZTY8TuzM2xHD8jsPNjLtXkAVLaaTDguHK4wHLt1T298w4sQz%2FQ4t01xSga85%2FDylWa8JThHUibC&X-Amz-Signature=c1b67b036a15608f945a113509ceba70a6439e15cc2e3ac52743c9b13580eafd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
