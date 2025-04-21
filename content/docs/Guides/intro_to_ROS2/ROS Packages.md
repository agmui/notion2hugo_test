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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7LWTNZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCVuDSB%2FmkjD1B2nVA1QO2uVKZHnPDIU29ZzXSQQVKXUwIhAIlwmDZq6Z5dwmfnmmHY6aa%2BvgZEhI3KLLz%2ByrM5v2LtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxEGaqMlbT4CtDd4cq3ANQ7j4rq%2BYcnLVTHoPe9YCipxrwf3%2FrIdNlkP%2FcTyCvPDV3gJrW0o%2FhUl9guM5B13%2BuGCm0vQQ2SsC%2By1%2Fwa3RtZjOHV8CjWZ7uknk8fBTSl0bLaGqyPHPUgCWAs9XiWFk8RYwNlVRJ0Fpb5TyZGK60lfWirEdnzzWxBUl%2FByFqKa2ZE%2FuPvZuDaI2KeLtEwqA%2F95poy7PvWCl60f%2Bv6cHbByjYLjayV11trRtuLx3YjiuEfRBxzsnjbDvRaXyZ1Ohc0tHgiY59K9wr76Ea5r0bKKYr0isixPYLNeO%2FJWNaFwpL2%2FqtT4aQLIzbx2ogKj999LAjUW0eqWz1oujkWrCnKVMuo3XFbXfCJ6n83TacVvz11TrdBBqREvPkH7ZDTsDrtdu775C2VYJV9LHCLvTcZflqSkHYObbkiwhpeD3v1wLZYH3RICGleuDYb0LjM3JoJks8ZboL8iL15jsS5miotByK6FACrGP1K8UWU4Y3%2FuNnZFz0k%2BkyfRgMvxGgbE2IjvX5%2FJfuz%2BXPrMERAK8kd2t%2BEywlhhHeTFCsTjq6c6EIQVz%2BM1ScGVN%2BNGPcpvq3%2FylcGfUb0K0sRWQ%2FQOE5%2Frym5T8FyBw%2FumzntKvaepPWyAj088juWku7xTCzuZnABjqkATcCZ8y3vovzmAYrqOswPKqmI4aQTsm10OaDqN%2BOlY9vsBotpw5k6yu3YHQeo5QQvDsnwrhMBoF0coYyNz1%2FGHo2WolKw5s9XEDXkI4ecUXoBWKvTcoWpvyuHYPGCa3ZyVMHPrvT6DPw5I2zxUQFaqcLyDIsTmR6wdkptYdIPqvIPxoBbph%2BgQELZE7OVJqAll0FufLd%2FJLgW2H6GB21sUQMfVS6&X-Amz-Signature=06156d709600f7a1f1b00c89245b94b8d702f2e4350b084e19d90107e08db934&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7LWTNZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCVuDSB%2FmkjD1B2nVA1QO2uVKZHnPDIU29ZzXSQQVKXUwIhAIlwmDZq6Z5dwmfnmmHY6aa%2BvgZEhI3KLLz%2ByrM5v2LtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxEGaqMlbT4CtDd4cq3ANQ7j4rq%2BYcnLVTHoPe9YCipxrwf3%2FrIdNlkP%2FcTyCvPDV3gJrW0o%2FhUl9guM5B13%2BuGCm0vQQ2SsC%2By1%2Fwa3RtZjOHV8CjWZ7uknk8fBTSl0bLaGqyPHPUgCWAs9XiWFk8RYwNlVRJ0Fpb5TyZGK60lfWirEdnzzWxBUl%2FByFqKa2ZE%2FuPvZuDaI2KeLtEwqA%2F95poy7PvWCl60f%2Bv6cHbByjYLjayV11trRtuLx3YjiuEfRBxzsnjbDvRaXyZ1Ohc0tHgiY59K9wr76Ea5r0bKKYr0isixPYLNeO%2FJWNaFwpL2%2FqtT4aQLIzbx2ogKj999LAjUW0eqWz1oujkWrCnKVMuo3XFbXfCJ6n83TacVvz11TrdBBqREvPkH7ZDTsDrtdu775C2VYJV9LHCLvTcZflqSkHYObbkiwhpeD3v1wLZYH3RICGleuDYb0LjM3JoJks8ZboL8iL15jsS5miotByK6FACrGP1K8UWU4Y3%2FuNnZFz0k%2BkyfRgMvxGgbE2IjvX5%2FJfuz%2BXPrMERAK8kd2t%2BEywlhhHeTFCsTjq6c6EIQVz%2BM1ScGVN%2BNGPcpvq3%2FylcGfUb0K0sRWQ%2FQOE5%2Frym5T8FyBw%2FumzntKvaepPWyAj088juWku7xTCzuZnABjqkATcCZ8y3vovzmAYrqOswPKqmI4aQTsm10OaDqN%2BOlY9vsBotpw5k6yu3YHQeo5QQvDsnwrhMBoF0coYyNz1%2FGHo2WolKw5s9XEDXkI4ecUXoBWKvTcoWpvyuHYPGCa3ZyVMHPrvT6DPw5I2zxUQFaqcLyDIsTmR6wdkptYdIPqvIPxoBbph%2BgQELZE7OVJqAll0FufLd%2FJLgW2H6GB21sUQMfVS6&X-Amz-Signature=d409a3acb7d0cfa35a6f3327f1b78d2e047bc818d9ce454bba1428db5fdc4a27&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7LWTNZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCVuDSB%2FmkjD1B2nVA1QO2uVKZHnPDIU29ZzXSQQVKXUwIhAIlwmDZq6Z5dwmfnmmHY6aa%2BvgZEhI3KLLz%2ByrM5v2LtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxEGaqMlbT4CtDd4cq3ANQ7j4rq%2BYcnLVTHoPe9YCipxrwf3%2FrIdNlkP%2FcTyCvPDV3gJrW0o%2FhUl9guM5B13%2BuGCm0vQQ2SsC%2By1%2Fwa3RtZjOHV8CjWZ7uknk8fBTSl0bLaGqyPHPUgCWAs9XiWFk8RYwNlVRJ0Fpb5TyZGK60lfWirEdnzzWxBUl%2FByFqKa2ZE%2FuPvZuDaI2KeLtEwqA%2F95poy7PvWCl60f%2Bv6cHbByjYLjayV11trRtuLx3YjiuEfRBxzsnjbDvRaXyZ1Ohc0tHgiY59K9wr76Ea5r0bKKYr0isixPYLNeO%2FJWNaFwpL2%2FqtT4aQLIzbx2ogKj999LAjUW0eqWz1oujkWrCnKVMuo3XFbXfCJ6n83TacVvz11TrdBBqREvPkH7ZDTsDrtdu775C2VYJV9LHCLvTcZflqSkHYObbkiwhpeD3v1wLZYH3RICGleuDYb0LjM3JoJks8ZboL8iL15jsS5miotByK6FACrGP1K8UWU4Y3%2FuNnZFz0k%2BkyfRgMvxGgbE2IjvX5%2FJfuz%2BXPrMERAK8kd2t%2BEywlhhHeTFCsTjq6c6EIQVz%2BM1ScGVN%2BNGPcpvq3%2FylcGfUb0K0sRWQ%2FQOE5%2Frym5T8FyBw%2FumzntKvaepPWyAj088juWku7xTCzuZnABjqkATcCZ8y3vovzmAYrqOswPKqmI4aQTsm10OaDqN%2BOlY9vsBotpw5k6yu3YHQeo5QQvDsnwrhMBoF0coYyNz1%2FGHo2WolKw5s9XEDXkI4ecUXoBWKvTcoWpvyuHYPGCa3ZyVMHPrvT6DPw5I2zxUQFaqcLyDIsTmR6wdkptYdIPqvIPxoBbph%2BgQELZE7OVJqAll0FufLd%2FJLgW2H6GB21sUQMfVS6&X-Amz-Signature=be8375f22617c18769fc91206fd1761ed93f852a7d23c2b93e8af10319610053&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7LWTNZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCVuDSB%2FmkjD1B2nVA1QO2uVKZHnPDIU29ZzXSQQVKXUwIhAIlwmDZq6Z5dwmfnmmHY6aa%2BvgZEhI3KLLz%2ByrM5v2LtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxEGaqMlbT4CtDd4cq3ANQ7j4rq%2BYcnLVTHoPe9YCipxrwf3%2FrIdNlkP%2FcTyCvPDV3gJrW0o%2FhUl9guM5B13%2BuGCm0vQQ2SsC%2By1%2Fwa3RtZjOHV8CjWZ7uknk8fBTSl0bLaGqyPHPUgCWAs9XiWFk8RYwNlVRJ0Fpb5TyZGK60lfWirEdnzzWxBUl%2FByFqKa2ZE%2FuPvZuDaI2KeLtEwqA%2F95poy7PvWCl60f%2Bv6cHbByjYLjayV11trRtuLx3YjiuEfRBxzsnjbDvRaXyZ1Ohc0tHgiY59K9wr76Ea5r0bKKYr0isixPYLNeO%2FJWNaFwpL2%2FqtT4aQLIzbx2ogKj999LAjUW0eqWz1oujkWrCnKVMuo3XFbXfCJ6n83TacVvz11TrdBBqREvPkH7ZDTsDrtdu775C2VYJV9LHCLvTcZflqSkHYObbkiwhpeD3v1wLZYH3RICGleuDYb0LjM3JoJks8ZboL8iL15jsS5miotByK6FACrGP1K8UWU4Y3%2FuNnZFz0k%2BkyfRgMvxGgbE2IjvX5%2FJfuz%2BXPrMERAK8kd2t%2BEywlhhHeTFCsTjq6c6EIQVz%2BM1ScGVN%2BNGPcpvq3%2FylcGfUb0K0sRWQ%2FQOE5%2Frym5T8FyBw%2FumzntKvaepPWyAj088juWku7xTCzuZnABjqkATcCZ8y3vovzmAYrqOswPKqmI4aQTsm10OaDqN%2BOlY9vsBotpw5k6yu3YHQeo5QQvDsnwrhMBoF0coYyNz1%2FGHo2WolKw5s9XEDXkI4ecUXoBWKvTcoWpvyuHYPGCa3ZyVMHPrvT6DPw5I2zxUQFaqcLyDIsTmR6wdkptYdIPqvIPxoBbph%2BgQELZE7OVJqAll0FufLd%2FJLgW2H6GB21sUQMfVS6&X-Amz-Signature=ce26330e2fceaf736ab30312ba0da1ff0282f955c1efefee0af91699981df3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7LWTNZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCVuDSB%2FmkjD1B2nVA1QO2uVKZHnPDIU29ZzXSQQVKXUwIhAIlwmDZq6Z5dwmfnmmHY6aa%2BvgZEhI3KLLz%2ByrM5v2LtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxEGaqMlbT4CtDd4cq3ANQ7j4rq%2BYcnLVTHoPe9YCipxrwf3%2FrIdNlkP%2FcTyCvPDV3gJrW0o%2FhUl9guM5B13%2BuGCm0vQQ2SsC%2By1%2Fwa3RtZjOHV8CjWZ7uknk8fBTSl0bLaGqyPHPUgCWAs9XiWFk8RYwNlVRJ0Fpb5TyZGK60lfWirEdnzzWxBUl%2FByFqKa2ZE%2FuPvZuDaI2KeLtEwqA%2F95poy7PvWCl60f%2Bv6cHbByjYLjayV11trRtuLx3YjiuEfRBxzsnjbDvRaXyZ1Ohc0tHgiY59K9wr76Ea5r0bKKYr0isixPYLNeO%2FJWNaFwpL2%2FqtT4aQLIzbx2ogKj999LAjUW0eqWz1oujkWrCnKVMuo3XFbXfCJ6n83TacVvz11TrdBBqREvPkH7ZDTsDrtdu775C2VYJV9LHCLvTcZflqSkHYObbkiwhpeD3v1wLZYH3RICGleuDYb0LjM3JoJks8ZboL8iL15jsS5miotByK6FACrGP1K8UWU4Y3%2FuNnZFz0k%2BkyfRgMvxGgbE2IjvX5%2FJfuz%2BXPrMERAK8kd2t%2BEywlhhHeTFCsTjq6c6EIQVz%2BM1ScGVN%2BNGPcpvq3%2FylcGfUb0K0sRWQ%2FQOE5%2Frym5T8FyBw%2FumzntKvaepPWyAj088juWku7xTCzuZnABjqkATcCZ8y3vovzmAYrqOswPKqmI4aQTsm10OaDqN%2BOlY9vsBotpw5k6yu3YHQeo5QQvDsnwrhMBoF0coYyNz1%2FGHo2WolKw5s9XEDXkI4ecUXoBWKvTcoWpvyuHYPGCa3ZyVMHPrvT6DPw5I2zxUQFaqcLyDIsTmR6wdkptYdIPqvIPxoBbph%2BgQELZE7OVJqAll0FufLd%2FJLgW2H6GB21sUQMfVS6&X-Amz-Signature=fe7c2338d215410c4157f26d0f543ead647c63c5b68d825f516324c331533137&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7LWTNZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCVuDSB%2FmkjD1B2nVA1QO2uVKZHnPDIU29ZzXSQQVKXUwIhAIlwmDZq6Z5dwmfnmmHY6aa%2BvgZEhI3KLLz%2ByrM5v2LtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxEGaqMlbT4CtDd4cq3ANQ7j4rq%2BYcnLVTHoPe9YCipxrwf3%2FrIdNlkP%2FcTyCvPDV3gJrW0o%2FhUl9guM5B13%2BuGCm0vQQ2SsC%2By1%2Fwa3RtZjOHV8CjWZ7uknk8fBTSl0bLaGqyPHPUgCWAs9XiWFk8RYwNlVRJ0Fpb5TyZGK60lfWirEdnzzWxBUl%2FByFqKa2ZE%2FuPvZuDaI2KeLtEwqA%2F95poy7PvWCl60f%2Bv6cHbByjYLjayV11trRtuLx3YjiuEfRBxzsnjbDvRaXyZ1Ohc0tHgiY59K9wr76Ea5r0bKKYr0isixPYLNeO%2FJWNaFwpL2%2FqtT4aQLIzbx2ogKj999LAjUW0eqWz1oujkWrCnKVMuo3XFbXfCJ6n83TacVvz11TrdBBqREvPkH7ZDTsDrtdu775C2VYJV9LHCLvTcZflqSkHYObbkiwhpeD3v1wLZYH3RICGleuDYb0LjM3JoJks8ZboL8iL15jsS5miotByK6FACrGP1K8UWU4Y3%2FuNnZFz0k%2BkyfRgMvxGgbE2IjvX5%2FJfuz%2BXPrMERAK8kd2t%2BEywlhhHeTFCsTjq6c6EIQVz%2BM1ScGVN%2BNGPcpvq3%2FylcGfUb0K0sRWQ%2FQOE5%2Frym5T8FyBw%2FumzntKvaepPWyAj088juWku7xTCzuZnABjqkATcCZ8y3vovzmAYrqOswPKqmI4aQTsm10OaDqN%2BOlY9vsBotpw5k6yu3YHQeo5QQvDsnwrhMBoF0coYyNz1%2FGHo2WolKw5s9XEDXkI4ecUXoBWKvTcoWpvyuHYPGCa3ZyVMHPrvT6DPw5I2zxUQFaqcLyDIsTmR6wdkptYdIPqvIPxoBbph%2BgQELZE7OVJqAll0FufLd%2FJLgW2H6GB21sUQMfVS6&X-Amz-Signature=c19f9fe2b192e812a8061d19d8c68b2f5f3038c6f2e8c819847b716921da1668&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7LWTNZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCVuDSB%2FmkjD1B2nVA1QO2uVKZHnPDIU29ZzXSQQVKXUwIhAIlwmDZq6Z5dwmfnmmHY6aa%2BvgZEhI3KLLz%2ByrM5v2LtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxEGaqMlbT4CtDd4cq3ANQ7j4rq%2BYcnLVTHoPe9YCipxrwf3%2FrIdNlkP%2FcTyCvPDV3gJrW0o%2FhUl9guM5B13%2BuGCm0vQQ2SsC%2By1%2Fwa3RtZjOHV8CjWZ7uknk8fBTSl0bLaGqyPHPUgCWAs9XiWFk8RYwNlVRJ0Fpb5TyZGK60lfWirEdnzzWxBUl%2FByFqKa2ZE%2FuPvZuDaI2KeLtEwqA%2F95poy7PvWCl60f%2Bv6cHbByjYLjayV11trRtuLx3YjiuEfRBxzsnjbDvRaXyZ1Ohc0tHgiY59K9wr76Ea5r0bKKYr0isixPYLNeO%2FJWNaFwpL2%2FqtT4aQLIzbx2ogKj999LAjUW0eqWz1oujkWrCnKVMuo3XFbXfCJ6n83TacVvz11TrdBBqREvPkH7ZDTsDrtdu775C2VYJV9LHCLvTcZflqSkHYObbkiwhpeD3v1wLZYH3RICGleuDYb0LjM3JoJks8ZboL8iL15jsS5miotByK6FACrGP1K8UWU4Y3%2FuNnZFz0k%2BkyfRgMvxGgbE2IjvX5%2FJfuz%2BXPrMERAK8kd2t%2BEywlhhHeTFCsTjq6c6EIQVz%2BM1ScGVN%2BNGPcpvq3%2FylcGfUb0K0sRWQ%2FQOE5%2Frym5T8FyBw%2FumzntKvaepPWyAj088juWku7xTCzuZnABjqkATcCZ8y3vovzmAYrqOswPKqmI4aQTsm10OaDqN%2BOlY9vsBotpw5k6yu3YHQeo5QQvDsnwrhMBoF0coYyNz1%2FGHo2WolKw5s9XEDXkI4ecUXoBWKvTcoWpvyuHYPGCa3ZyVMHPrvT6DPw5I2zxUQFaqcLyDIsTmR6wdkptYdIPqvIPxoBbph%2BgQELZE7OVJqAll0FufLd%2FJLgW2H6GB21sUQMfVS6&X-Amz-Signature=99a08086b950deb6da89d6cebf036e1c42ae6e5ad3520f4d28d83b870fa25462&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
