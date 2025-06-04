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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4CDNOY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCAtF60rPbHFJUzRRRRwLtrDmCBkf6qiajIckZwytWN0gIgW1u9Ybsw%2BnjmuKkkR6B8F9o6mkT4Uic8pBtpHRTDgyoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDAv0N1Oy545flsikWCrcAyXB0acWOAQ0ff1TwPHyv5YuiuyXRJit8UiYPKfpBkQ%2FbT0q8eT5CK7ukBlTdOhpoE69hXkmcnhkxK1JjSKEk7sJuagR4vv22K9JpGy5shAOfXeym%2FxFTc3OYqx42RsAQ80k995gUT%2FOtyfeN9z19RUkFq%2BGxTSyWhK%2BIeHSYFKjwNa3A7YJTZ%2FBg7VCxAh5MgdcReBMaFUh%2FmfAzZBwPzYXO6xh51lZhOPX2VxWT%2FUNWLPZ4u9ys%2B0Pp0iFwrwBZkksUuxL63jKPjOmigQyhNXPPzkN9lYMwXLilDD5M1S%2B6nPb6NXL1vhF1H9EhW5D6gJO2J9SY3hebGPXXmnMMchKGar4IRCyWBfPFJMQkpo9Quoigz9Ky414Bew7eHhwmAucD9di0DnDhftdHJIKP5i3FIV4NN9JKgTgGalJ0SMQlQVeQIwsWArwWlpjG7rGCAKRJJCnZBSN%2BBZIo8zqWFookXmkqbZdSjSMppFB605GwRr4nxRU9G1o3B8k1qPRJPVfUFlztnWMW1oISaV%2BBQZlqkoSU%2BwgnoWCsr0vQL%2Fc%2BD1QUC%2FfPvtIFFn5vgMuE5M9CuW9%2FBYIbyGnw7NjzdiJUwtsC%2BZoo4NNi3T4Ll%2BpciDtWKywLZBzOhs1MNrUgsIGOqUBrgBW1TOSXU0nlooXNNoKmuwNpzN78pAXyPm74GkFv3cwFw1hgbMd48Kt%2BYBbTWqlpUBPcFhqLvuzpTXyPwD%2BHXUD59kDWwH2cPqOmq3T16Dy5k6w5E1iNaz6EO3B3eIfzs7hr27%2FMaez7lXBEOQTVKiw0hzwlKSTNpXgYsaWr5dfbSuruAVdHRHjaRRBW3fLdbAgce%2Be%2FaF82K0j187f%2FGGHnMCE&X-Amz-Signature=969afc9494adce13307393a63225afa453d34ea1c0458c53f515799b5dada290&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4CDNOY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCAtF60rPbHFJUzRRRRwLtrDmCBkf6qiajIckZwytWN0gIgW1u9Ybsw%2BnjmuKkkR6B8F9o6mkT4Uic8pBtpHRTDgyoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDAv0N1Oy545flsikWCrcAyXB0acWOAQ0ff1TwPHyv5YuiuyXRJit8UiYPKfpBkQ%2FbT0q8eT5CK7ukBlTdOhpoE69hXkmcnhkxK1JjSKEk7sJuagR4vv22K9JpGy5shAOfXeym%2FxFTc3OYqx42RsAQ80k995gUT%2FOtyfeN9z19RUkFq%2BGxTSyWhK%2BIeHSYFKjwNa3A7YJTZ%2FBg7VCxAh5MgdcReBMaFUh%2FmfAzZBwPzYXO6xh51lZhOPX2VxWT%2FUNWLPZ4u9ys%2B0Pp0iFwrwBZkksUuxL63jKPjOmigQyhNXPPzkN9lYMwXLilDD5M1S%2B6nPb6NXL1vhF1H9EhW5D6gJO2J9SY3hebGPXXmnMMchKGar4IRCyWBfPFJMQkpo9Quoigz9Ky414Bew7eHhwmAucD9di0DnDhftdHJIKP5i3FIV4NN9JKgTgGalJ0SMQlQVeQIwsWArwWlpjG7rGCAKRJJCnZBSN%2BBZIo8zqWFookXmkqbZdSjSMppFB605GwRr4nxRU9G1o3B8k1qPRJPVfUFlztnWMW1oISaV%2BBQZlqkoSU%2BwgnoWCsr0vQL%2Fc%2BD1QUC%2FfPvtIFFn5vgMuE5M9CuW9%2FBYIbyGnw7NjzdiJUwtsC%2BZoo4NNi3T4Ll%2BpciDtWKywLZBzOhs1MNrUgsIGOqUBrgBW1TOSXU0nlooXNNoKmuwNpzN78pAXyPm74GkFv3cwFw1hgbMd48Kt%2BYBbTWqlpUBPcFhqLvuzpTXyPwD%2BHXUD59kDWwH2cPqOmq3T16Dy5k6w5E1iNaz6EO3B3eIfzs7hr27%2FMaez7lXBEOQTVKiw0hzwlKSTNpXgYsaWr5dfbSuruAVdHRHjaRRBW3fLdbAgce%2Be%2FaF82K0j187f%2FGGHnMCE&X-Amz-Signature=3eac872568fb745be5962356f2b24efd0db2c63d4fa09b5fb871573281409dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4CDNOY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCAtF60rPbHFJUzRRRRwLtrDmCBkf6qiajIckZwytWN0gIgW1u9Ybsw%2BnjmuKkkR6B8F9o6mkT4Uic8pBtpHRTDgyoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDAv0N1Oy545flsikWCrcAyXB0acWOAQ0ff1TwPHyv5YuiuyXRJit8UiYPKfpBkQ%2FbT0q8eT5CK7ukBlTdOhpoE69hXkmcnhkxK1JjSKEk7sJuagR4vv22K9JpGy5shAOfXeym%2FxFTc3OYqx42RsAQ80k995gUT%2FOtyfeN9z19RUkFq%2BGxTSyWhK%2BIeHSYFKjwNa3A7YJTZ%2FBg7VCxAh5MgdcReBMaFUh%2FmfAzZBwPzYXO6xh51lZhOPX2VxWT%2FUNWLPZ4u9ys%2B0Pp0iFwrwBZkksUuxL63jKPjOmigQyhNXPPzkN9lYMwXLilDD5M1S%2B6nPb6NXL1vhF1H9EhW5D6gJO2J9SY3hebGPXXmnMMchKGar4IRCyWBfPFJMQkpo9Quoigz9Ky414Bew7eHhwmAucD9di0DnDhftdHJIKP5i3FIV4NN9JKgTgGalJ0SMQlQVeQIwsWArwWlpjG7rGCAKRJJCnZBSN%2BBZIo8zqWFookXmkqbZdSjSMppFB605GwRr4nxRU9G1o3B8k1qPRJPVfUFlztnWMW1oISaV%2BBQZlqkoSU%2BwgnoWCsr0vQL%2Fc%2BD1QUC%2FfPvtIFFn5vgMuE5M9CuW9%2FBYIbyGnw7NjzdiJUwtsC%2BZoo4NNi3T4Ll%2BpciDtWKywLZBzOhs1MNrUgsIGOqUBrgBW1TOSXU0nlooXNNoKmuwNpzN78pAXyPm74GkFv3cwFw1hgbMd48Kt%2BYBbTWqlpUBPcFhqLvuzpTXyPwD%2BHXUD59kDWwH2cPqOmq3T16Dy5k6w5E1iNaz6EO3B3eIfzs7hr27%2FMaez7lXBEOQTVKiw0hzwlKSTNpXgYsaWr5dfbSuruAVdHRHjaRRBW3fLdbAgce%2Be%2FaF82K0j187f%2FGGHnMCE&X-Amz-Signature=3e37fd633b7f845ff8765d1a5b749082c6e0cb8953d984ee1d0efcee613b105e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4CDNOY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCAtF60rPbHFJUzRRRRwLtrDmCBkf6qiajIckZwytWN0gIgW1u9Ybsw%2BnjmuKkkR6B8F9o6mkT4Uic8pBtpHRTDgyoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDAv0N1Oy545flsikWCrcAyXB0acWOAQ0ff1TwPHyv5YuiuyXRJit8UiYPKfpBkQ%2FbT0q8eT5CK7ukBlTdOhpoE69hXkmcnhkxK1JjSKEk7sJuagR4vv22K9JpGy5shAOfXeym%2FxFTc3OYqx42RsAQ80k995gUT%2FOtyfeN9z19RUkFq%2BGxTSyWhK%2BIeHSYFKjwNa3A7YJTZ%2FBg7VCxAh5MgdcReBMaFUh%2FmfAzZBwPzYXO6xh51lZhOPX2VxWT%2FUNWLPZ4u9ys%2B0Pp0iFwrwBZkksUuxL63jKPjOmigQyhNXPPzkN9lYMwXLilDD5M1S%2B6nPb6NXL1vhF1H9EhW5D6gJO2J9SY3hebGPXXmnMMchKGar4IRCyWBfPFJMQkpo9Quoigz9Ky414Bew7eHhwmAucD9di0DnDhftdHJIKP5i3FIV4NN9JKgTgGalJ0SMQlQVeQIwsWArwWlpjG7rGCAKRJJCnZBSN%2BBZIo8zqWFookXmkqbZdSjSMppFB605GwRr4nxRU9G1o3B8k1qPRJPVfUFlztnWMW1oISaV%2BBQZlqkoSU%2BwgnoWCsr0vQL%2Fc%2BD1QUC%2FfPvtIFFn5vgMuE5M9CuW9%2FBYIbyGnw7NjzdiJUwtsC%2BZoo4NNi3T4Ll%2BpciDtWKywLZBzOhs1MNrUgsIGOqUBrgBW1TOSXU0nlooXNNoKmuwNpzN78pAXyPm74GkFv3cwFw1hgbMd48Kt%2BYBbTWqlpUBPcFhqLvuzpTXyPwD%2BHXUD59kDWwH2cPqOmq3T16Dy5k6w5E1iNaz6EO3B3eIfzs7hr27%2FMaez7lXBEOQTVKiw0hzwlKSTNpXgYsaWr5dfbSuruAVdHRHjaRRBW3fLdbAgce%2Be%2FaF82K0j187f%2FGGHnMCE&X-Amz-Signature=79d35d4e6426cc31f4c5809011e7aa2c30dea78e7b845094295fede157963f48&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4CDNOY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCAtF60rPbHFJUzRRRRwLtrDmCBkf6qiajIckZwytWN0gIgW1u9Ybsw%2BnjmuKkkR6B8F9o6mkT4Uic8pBtpHRTDgyoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDAv0N1Oy545flsikWCrcAyXB0acWOAQ0ff1TwPHyv5YuiuyXRJit8UiYPKfpBkQ%2FbT0q8eT5CK7ukBlTdOhpoE69hXkmcnhkxK1JjSKEk7sJuagR4vv22K9JpGy5shAOfXeym%2FxFTc3OYqx42RsAQ80k995gUT%2FOtyfeN9z19RUkFq%2BGxTSyWhK%2BIeHSYFKjwNa3A7YJTZ%2FBg7VCxAh5MgdcReBMaFUh%2FmfAzZBwPzYXO6xh51lZhOPX2VxWT%2FUNWLPZ4u9ys%2B0Pp0iFwrwBZkksUuxL63jKPjOmigQyhNXPPzkN9lYMwXLilDD5M1S%2B6nPb6NXL1vhF1H9EhW5D6gJO2J9SY3hebGPXXmnMMchKGar4IRCyWBfPFJMQkpo9Quoigz9Ky414Bew7eHhwmAucD9di0DnDhftdHJIKP5i3FIV4NN9JKgTgGalJ0SMQlQVeQIwsWArwWlpjG7rGCAKRJJCnZBSN%2BBZIo8zqWFookXmkqbZdSjSMppFB605GwRr4nxRU9G1o3B8k1qPRJPVfUFlztnWMW1oISaV%2BBQZlqkoSU%2BwgnoWCsr0vQL%2Fc%2BD1QUC%2FfPvtIFFn5vgMuE5M9CuW9%2FBYIbyGnw7NjzdiJUwtsC%2BZoo4NNi3T4Ll%2BpciDtWKywLZBzOhs1MNrUgsIGOqUBrgBW1TOSXU0nlooXNNoKmuwNpzN78pAXyPm74GkFv3cwFw1hgbMd48Kt%2BYBbTWqlpUBPcFhqLvuzpTXyPwD%2BHXUD59kDWwH2cPqOmq3T16Dy5k6w5E1iNaz6EO3B3eIfzs7hr27%2FMaez7lXBEOQTVKiw0hzwlKSTNpXgYsaWr5dfbSuruAVdHRHjaRRBW3fLdbAgce%2Be%2FaF82K0j187f%2FGGHnMCE&X-Amz-Signature=7b29bd54a6d93f893abcaf0ad83e94daa43302c4607f72451d234eab7a60c078&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4CDNOY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCAtF60rPbHFJUzRRRRwLtrDmCBkf6qiajIckZwytWN0gIgW1u9Ybsw%2BnjmuKkkR6B8F9o6mkT4Uic8pBtpHRTDgyoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDAv0N1Oy545flsikWCrcAyXB0acWOAQ0ff1TwPHyv5YuiuyXRJit8UiYPKfpBkQ%2FbT0q8eT5CK7ukBlTdOhpoE69hXkmcnhkxK1JjSKEk7sJuagR4vv22K9JpGy5shAOfXeym%2FxFTc3OYqx42RsAQ80k995gUT%2FOtyfeN9z19RUkFq%2BGxTSyWhK%2BIeHSYFKjwNa3A7YJTZ%2FBg7VCxAh5MgdcReBMaFUh%2FmfAzZBwPzYXO6xh51lZhOPX2VxWT%2FUNWLPZ4u9ys%2B0Pp0iFwrwBZkksUuxL63jKPjOmigQyhNXPPzkN9lYMwXLilDD5M1S%2B6nPb6NXL1vhF1H9EhW5D6gJO2J9SY3hebGPXXmnMMchKGar4IRCyWBfPFJMQkpo9Quoigz9Ky414Bew7eHhwmAucD9di0DnDhftdHJIKP5i3FIV4NN9JKgTgGalJ0SMQlQVeQIwsWArwWlpjG7rGCAKRJJCnZBSN%2BBZIo8zqWFookXmkqbZdSjSMppFB605GwRr4nxRU9G1o3B8k1qPRJPVfUFlztnWMW1oISaV%2BBQZlqkoSU%2BwgnoWCsr0vQL%2Fc%2BD1QUC%2FfPvtIFFn5vgMuE5M9CuW9%2FBYIbyGnw7NjzdiJUwtsC%2BZoo4NNi3T4Ll%2BpciDtWKywLZBzOhs1MNrUgsIGOqUBrgBW1TOSXU0nlooXNNoKmuwNpzN78pAXyPm74GkFv3cwFw1hgbMd48Kt%2BYBbTWqlpUBPcFhqLvuzpTXyPwD%2BHXUD59kDWwH2cPqOmq3T16Dy5k6w5E1iNaz6EO3B3eIfzs7hr27%2FMaez7lXBEOQTVKiw0hzwlKSTNpXgYsaWr5dfbSuruAVdHRHjaRRBW3fLdbAgce%2Be%2FaF82K0j187f%2FGGHnMCE&X-Amz-Signature=811b9b73551611e011c3934ae6dac545a2d1d7e8940feee06302e8915d41ab30&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4CDNOY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCAtF60rPbHFJUzRRRRwLtrDmCBkf6qiajIckZwytWN0gIgW1u9Ybsw%2BnjmuKkkR6B8F9o6mkT4Uic8pBtpHRTDgyoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDAv0N1Oy545flsikWCrcAyXB0acWOAQ0ff1TwPHyv5YuiuyXRJit8UiYPKfpBkQ%2FbT0q8eT5CK7ukBlTdOhpoE69hXkmcnhkxK1JjSKEk7sJuagR4vv22K9JpGy5shAOfXeym%2FxFTc3OYqx42RsAQ80k995gUT%2FOtyfeN9z19RUkFq%2BGxTSyWhK%2BIeHSYFKjwNa3A7YJTZ%2FBg7VCxAh5MgdcReBMaFUh%2FmfAzZBwPzYXO6xh51lZhOPX2VxWT%2FUNWLPZ4u9ys%2B0Pp0iFwrwBZkksUuxL63jKPjOmigQyhNXPPzkN9lYMwXLilDD5M1S%2B6nPb6NXL1vhF1H9EhW5D6gJO2J9SY3hebGPXXmnMMchKGar4IRCyWBfPFJMQkpo9Quoigz9Ky414Bew7eHhwmAucD9di0DnDhftdHJIKP5i3FIV4NN9JKgTgGalJ0SMQlQVeQIwsWArwWlpjG7rGCAKRJJCnZBSN%2BBZIo8zqWFookXmkqbZdSjSMppFB605GwRr4nxRU9G1o3B8k1qPRJPVfUFlztnWMW1oISaV%2BBQZlqkoSU%2BwgnoWCsr0vQL%2Fc%2BD1QUC%2FfPvtIFFn5vgMuE5M9CuW9%2FBYIbyGnw7NjzdiJUwtsC%2BZoo4NNi3T4Ll%2BpciDtWKywLZBzOhs1MNrUgsIGOqUBrgBW1TOSXU0nlooXNNoKmuwNpzN78pAXyPm74GkFv3cwFw1hgbMd48Kt%2BYBbTWqlpUBPcFhqLvuzpTXyPwD%2BHXUD59kDWwH2cPqOmq3T16Dy5k6w5E1iNaz6EO3B3eIfzs7hr27%2FMaez7lXBEOQTVKiw0hzwlKSTNpXgYsaWr5dfbSuruAVdHRHjaRRBW3fLdbAgce%2Be%2FaF82K0j187f%2FGGHnMCE&X-Amz-Signature=426c2c8431abb887974985e3bedb8f96c03b7eb3a1b2684907e0a6c0b6abaa94&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
