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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JJXSFQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDapar5Hh5DODhtkqbviNBPBt44ExTlbcmKvVHrue0JKgIhAPc5R1ptlp54vtS3d7DYdyQfoqJ59%2FPrjH8LWcZmQRb5KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC53K6P97vaoqK44sq3APnGe5mheBI2ghUjT8MFTeGsBPEFXadQlngG6wi7Ugpo7HfTamur%2Bas6%2B9wqYsurzLMUdulCZc3VxAn1yPtKI8pY9%2Bsy6pgf82HLBkTd9hl%2F3t46REz09yFwkKGdzeKjomEhZKNn%2FCuST40btkvXdGGwy48YIYbwNN4QfxZWLBuOvB5%2F0%2Fqel530XrHDDNoRBc7QfAF5hrNTviaAeq%2Bh2LeS1lqbXhL9BgFuriTkf1VSDFOL%2Fetkopj7aWQh2tdaggiRgfGHjCGSzTtvaw%2FVc1eGKKJGRFkGM98XH3L7wJvp5440HgxeTWh9PYbKzIvAluGonQ8fdnxRaTVYONwNIhPLb1pxC3zrM1w7cJc3R6%2F%2Bw0l2crTWvxLHbHqakOoPkckbtBaz1ETsZ38%2FCXXNbzCTLDPeq2M0wEDm1UDDpwMxarmgGaa9yICZAPfMJUWo6FZLaQOVrjSP7YLVIESLUXjPe69DoVUf1WbWkGtJTaQ8vZUrvoQrU9fiS2RTKEupappx72wDCd3vYxcMFW8dgjAXkXPAQ1q90ng8N%2Fl77f8H9Q1agZXKjd5TBlY9ZN2X8VObVZtQneAng2yL0GuQsWQVr1CBOtpm9AvI4FwhHfMbo2PyXvSPNbUYPaXyTCCx%2BHCBjqkAQJlTF4ZTeXWJEpD96rPBqRPCLepla7%2BJ3wQqb2G%2FlSOT2EKvWvf7eymuu%2FsBSL5msocakH3dKfkqDlTEhjUWI9Aw0oH%2FfCfw%2B%2FjF12f72JGxbp6828ag%2F4ZqpAfGteukaAOP8kUtzp0OSBgXrSljUX3tfLyoOVeGulQn5r9ur2VXpB0to7dhMaEBtZ63h%2FnVSKvbVp9if4YPetJavUJaqtaUu0N&X-Amz-Signature=34f2973cec2f3d54cdb008473cdc6ad857de14b6771e0e32a1539077a41d1d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JJXSFQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDapar5Hh5DODhtkqbviNBPBt44ExTlbcmKvVHrue0JKgIhAPc5R1ptlp54vtS3d7DYdyQfoqJ59%2FPrjH8LWcZmQRb5KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC53K6P97vaoqK44sq3APnGe5mheBI2ghUjT8MFTeGsBPEFXadQlngG6wi7Ugpo7HfTamur%2Bas6%2B9wqYsurzLMUdulCZc3VxAn1yPtKI8pY9%2Bsy6pgf82HLBkTd9hl%2F3t46REz09yFwkKGdzeKjomEhZKNn%2FCuST40btkvXdGGwy48YIYbwNN4QfxZWLBuOvB5%2F0%2Fqel530XrHDDNoRBc7QfAF5hrNTviaAeq%2Bh2LeS1lqbXhL9BgFuriTkf1VSDFOL%2Fetkopj7aWQh2tdaggiRgfGHjCGSzTtvaw%2FVc1eGKKJGRFkGM98XH3L7wJvp5440HgxeTWh9PYbKzIvAluGonQ8fdnxRaTVYONwNIhPLb1pxC3zrM1w7cJc3R6%2F%2Bw0l2crTWvxLHbHqakOoPkckbtBaz1ETsZ38%2FCXXNbzCTLDPeq2M0wEDm1UDDpwMxarmgGaa9yICZAPfMJUWo6FZLaQOVrjSP7YLVIESLUXjPe69DoVUf1WbWkGtJTaQ8vZUrvoQrU9fiS2RTKEupappx72wDCd3vYxcMFW8dgjAXkXPAQ1q90ng8N%2Fl77f8H9Q1agZXKjd5TBlY9ZN2X8VObVZtQneAng2yL0GuQsWQVr1CBOtpm9AvI4FwhHfMbo2PyXvSPNbUYPaXyTCCx%2BHCBjqkAQJlTF4ZTeXWJEpD96rPBqRPCLepla7%2BJ3wQqb2G%2FlSOT2EKvWvf7eymuu%2FsBSL5msocakH3dKfkqDlTEhjUWI9Aw0oH%2FfCfw%2B%2FjF12f72JGxbp6828ag%2F4ZqpAfGteukaAOP8kUtzp0OSBgXrSljUX3tfLyoOVeGulQn5r9ur2VXpB0to7dhMaEBtZ63h%2FnVSKvbVp9if4YPetJavUJaqtaUu0N&X-Amz-Signature=a2078957067a20f3586db109c4bd947c1a131fa6003ef3cf1131337dea59d666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JJXSFQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDapar5Hh5DODhtkqbviNBPBt44ExTlbcmKvVHrue0JKgIhAPc5R1ptlp54vtS3d7DYdyQfoqJ59%2FPrjH8LWcZmQRb5KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC53K6P97vaoqK44sq3APnGe5mheBI2ghUjT8MFTeGsBPEFXadQlngG6wi7Ugpo7HfTamur%2Bas6%2B9wqYsurzLMUdulCZc3VxAn1yPtKI8pY9%2Bsy6pgf82HLBkTd9hl%2F3t46REz09yFwkKGdzeKjomEhZKNn%2FCuST40btkvXdGGwy48YIYbwNN4QfxZWLBuOvB5%2F0%2Fqel530XrHDDNoRBc7QfAF5hrNTviaAeq%2Bh2LeS1lqbXhL9BgFuriTkf1VSDFOL%2Fetkopj7aWQh2tdaggiRgfGHjCGSzTtvaw%2FVc1eGKKJGRFkGM98XH3L7wJvp5440HgxeTWh9PYbKzIvAluGonQ8fdnxRaTVYONwNIhPLb1pxC3zrM1w7cJc3R6%2F%2Bw0l2crTWvxLHbHqakOoPkckbtBaz1ETsZ38%2FCXXNbzCTLDPeq2M0wEDm1UDDpwMxarmgGaa9yICZAPfMJUWo6FZLaQOVrjSP7YLVIESLUXjPe69DoVUf1WbWkGtJTaQ8vZUrvoQrU9fiS2RTKEupappx72wDCd3vYxcMFW8dgjAXkXPAQ1q90ng8N%2Fl77f8H9Q1agZXKjd5TBlY9ZN2X8VObVZtQneAng2yL0GuQsWQVr1CBOtpm9AvI4FwhHfMbo2PyXvSPNbUYPaXyTCCx%2BHCBjqkAQJlTF4ZTeXWJEpD96rPBqRPCLepla7%2BJ3wQqb2G%2FlSOT2EKvWvf7eymuu%2FsBSL5msocakH3dKfkqDlTEhjUWI9Aw0oH%2FfCfw%2B%2FjF12f72JGxbp6828ag%2F4ZqpAfGteukaAOP8kUtzp0OSBgXrSljUX3tfLyoOVeGulQn5r9ur2VXpB0to7dhMaEBtZ63h%2FnVSKvbVp9if4YPetJavUJaqtaUu0N&X-Amz-Signature=27c568f51d0adb909f86769a7499aa0df8a1ad5be76ac087db361c7193a1f472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JJXSFQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDapar5Hh5DODhtkqbviNBPBt44ExTlbcmKvVHrue0JKgIhAPc5R1ptlp54vtS3d7DYdyQfoqJ59%2FPrjH8LWcZmQRb5KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC53K6P97vaoqK44sq3APnGe5mheBI2ghUjT8MFTeGsBPEFXadQlngG6wi7Ugpo7HfTamur%2Bas6%2B9wqYsurzLMUdulCZc3VxAn1yPtKI8pY9%2Bsy6pgf82HLBkTd9hl%2F3t46REz09yFwkKGdzeKjomEhZKNn%2FCuST40btkvXdGGwy48YIYbwNN4QfxZWLBuOvB5%2F0%2Fqel530XrHDDNoRBc7QfAF5hrNTviaAeq%2Bh2LeS1lqbXhL9BgFuriTkf1VSDFOL%2Fetkopj7aWQh2tdaggiRgfGHjCGSzTtvaw%2FVc1eGKKJGRFkGM98XH3L7wJvp5440HgxeTWh9PYbKzIvAluGonQ8fdnxRaTVYONwNIhPLb1pxC3zrM1w7cJc3R6%2F%2Bw0l2crTWvxLHbHqakOoPkckbtBaz1ETsZ38%2FCXXNbzCTLDPeq2M0wEDm1UDDpwMxarmgGaa9yICZAPfMJUWo6FZLaQOVrjSP7YLVIESLUXjPe69DoVUf1WbWkGtJTaQ8vZUrvoQrU9fiS2RTKEupappx72wDCd3vYxcMFW8dgjAXkXPAQ1q90ng8N%2Fl77f8H9Q1agZXKjd5TBlY9ZN2X8VObVZtQneAng2yL0GuQsWQVr1CBOtpm9AvI4FwhHfMbo2PyXvSPNbUYPaXyTCCx%2BHCBjqkAQJlTF4ZTeXWJEpD96rPBqRPCLepla7%2BJ3wQqb2G%2FlSOT2EKvWvf7eymuu%2FsBSL5msocakH3dKfkqDlTEhjUWI9Aw0oH%2FfCfw%2B%2FjF12f72JGxbp6828ag%2F4ZqpAfGteukaAOP8kUtzp0OSBgXrSljUX3tfLyoOVeGulQn5r9ur2VXpB0to7dhMaEBtZ63h%2FnVSKvbVp9if4YPetJavUJaqtaUu0N&X-Amz-Signature=b3c4704b46bb6b38f6dee25be64f04c2dceb62470c8c821a40e240d8c9e89273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JJXSFQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDapar5Hh5DODhtkqbviNBPBt44ExTlbcmKvVHrue0JKgIhAPc5R1ptlp54vtS3d7DYdyQfoqJ59%2FPrjH8LWcZmQRb5KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC53K6P97vaoqK44sq3APnGe5mheBI2ghUjT8MFTeGsBPEFXadQlngG6wi7Ugpo7HfTamur%2Bas6%2B9wqYsurzLMUdulCZc3VxAn1yPtKI8pY9%2Bsy6pgf82HLBkTd9hl%2F3t46REz09yFwkKGdzeKjomEhZKNn%2FCuST40btkvXdGGwy48YIYbwNN4QfxZWLBuOvB5%2F0%2Fqel530XrHDDNoRBc7QfAF5hrNTviaAeq%2Bh2LeS1lqbXhL9BgFuriTkf1VSDFOL%2Fetkopj7aWQh2tdaggiRgfGHjCGSzTtvaw%2FVc1eGKKJGRFkGM98XH3L7wJvp5440HgxeTWh9PYbKzIvAluGonQ8fdnxRaTVYONwNIhPLb1pxC3zrM1w7cJc3R6%2F%2Bw0l2crTWvxLHbHqakOoPkckbtBaz1ETsZ38%2FCXXNbzCTLDPeq2M0wEDm1UDDpwMxarmgGaa9yICZAPfMJUWo6FZLaQOVrjSP7YLVIESLUXjPe69DoVUf1WbWkGtJTaQ8vZUrvoQrU9fiS2RTKEupappx72wDCd3vYxcMFW8dgjAXkXPAQ1q90ng8N%2Fl77f8H9Q1agZXKjd5TBlY9ZN2X8VObVZtQneAng2yL0GuQsWQVr1CBOtpm9AvI4FwhHfMbo2PyXvSPNbUYPaXyTCCx%2BHCBjqkAQJlTF4ZTeXWJEpD96rPBqRPCLepla7%2BJ3wQqb2G%2FlSOT2EKvWvf7eymuu%2FsBSL5msocakH3dKfkqDlTEhjUWI9Aw0oH%2FfCfw%2B%2FjF12f72JGxbp6828ag%2F4ZqpAfGteukaAOP8kUtzp0OSBgXrSljUX3tfLyoOVeGulQn5r9ur2VXpB0to7dhMaEBtZ63h%2FnVSKvbVp9if4YPetJavUJaqtaUu0N&X-Amz-Signature=96c0eb70a89b1fce6fb2ef94f017a4f7ca844e6596f510caff2ba13655d72300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JJXSFQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDapar5Hh5DODhtkqbviNBPBt44ExTlbcmKvVHrue0JKgIhAPc5R1ptlp54vtS3d7DYdyQfoqJ59%2FPrjH8LWcZmQRb5KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC53K6P97vaoqK44sq3APnGe5mheBI2ghUjT8MFTeGsBPEFXadQlngG6wi7Ugpo7HfTamur%2Bas6%2B9wqYsurzLMUdulCZc3VxAn1yPtKI8pY9%2Bsy6pgf82HLBkTd9hl%2F3t46REz09yFwkKGdzeKjomEhZKNn%2FCuST40btkvXdGGwy48YIYbwNN4QfxZWLBuOvB5%2F0%2Fqel530XrHDDNoRBc7QfAF5hrNTviaAeq%2Bh2LeS1lqbXhL9BgFuriTkf1VSDFOL%2Fetkopj7aWQh2tdaggiRgfGHjCGSzTtvaw%2FVc1eGKKJGRFkGM98XH3L7wJvp5440HgxeTWh9PYbKzIvAluGonQ8fdnxRaTVYONwNIhPLb1pxC3zrM1w7cJc3R6%2F%2Bw0l2crTWvxLHbHqakOoPkckbtBaz1ETsZ38%2FCXXNbzCTLDPeq2M0wEDm1UDDpwMxarmgGaa9yICZAPfMJUWo6FZLaQOVrjSP7YLVIESLUXjPe69DoVUf1WbWkGtJTaQ8vZUrvoQrU9fiS2RTKEupappx72wDCd3vYxcMFW8dgjAXkXPAQ1q90ng8N%2Fl77f8H9Q1agZXKjd5TBlY9ZN2X8VObVZtQneAng2yL0GuQsWQVr1CBOtpm9AvI4FwhHfMbo2PyXvSPNbUYPaXyTCCx%2BHCBjqkAQJlTF4ZTeXWJEpD96rPBqRPCLepla7%2BJ3wQqb2G%2FlSOT2EKvWvf7eymuu%2FsBSL5msocakH3dKfkqDlTEhjUWI9Aw0oH%2FfCfw%2B%2FjF12f72JGxbp6828ag%2F4ZqpAfGteukaAOP8kUtzp0OSBgXrSljUX3tfLyoOVeGulQn5r9ur2VXpB0to7dhMaEBtZ63h%2FnVSKvbVp9if4YPetJavUJaqtaUu0N&X-Amz-Signature=6b75adf79bed9dbf467b718faf7a01cbac5560634cdb09571fbe5d9129ce08a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JJXSFQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDapar5Hh5DODhtkqbviNBPBt44ExTlbcmKvVHrue0JKgIhAPc5R1ptlp54vtS3d7DYdyQfoqJ59%2FPrjH8LWcZmQRb5KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC53K6P97vaoqK44sq3APnGe5mheBI2ghUjT8MFTeGsBPEFXadQlngG6wi7Ugpo7HfTamur%2Bas6%2B9wqYsurzLMUdulCZc3VxAn1yPtKI8pY9%2Bsy6pgf82HLBkTd9hl%2F3t46REz09yFwkKGdzeKjomEhZKNn%2FCuST40btkvXdGGwy48YIYbwNN4QfxZWLBuOvB5%2F0%2Fqel530XrHDDNoRBc7QfAF5hrNTviaAeq%2Bh2LeS1lqbXhL9BgFuriTkf1VSDFOL%2Fetkopj7aWQh2tdaggiRgfGHjCGSzTtvaw%2FVc1eGKKJGRFkGM98XH3L7wJvp5440HgxeTWh9PYbKzIvAluGonQ8fdnxRaTVYONwNIhPLb1pxC3zrM1w7cJc3R6%2F%2Bw0l2crTWvxLHbHqakOoPkckbtBaz1ETsZ38%2FCXXNbzCTLDPeq2M0wEDm1UDDpwMxarmgGaa9yICZAPfMJUWo6FZLaQOVrjSP7YLVIESLUXjPe69DoVUf1WbWkGtJTaQ8vZUrvoQrU9fiS2RTKEupappx72wDCd3vYxcMFW8dgjAXkXPAQ1q90ng8N%2Fl77f8H9Q1agZXKjd5TBlY9ZN2X8VObVZtQneAng2yL0GuQsWQVr1CBOtpm9AvI4FwhHfMbo2PyXvSPNbUYPaXyTCCx%2BHCBjqkAQJlTF4ZTeXWJEpD96rPBqRPCLepla7%2BJ3wQqb2G%2FlSOT2EKvWvf7eymuu%2FsBSL5msocakH3dKfkqDlTEhjUWI9Aw0oH%2FfCfw%2B%2FjF12f72JGxbp6828ag%2F4ZqpAfGteukaAOP8kUtzp0OSBgXrSljUX3tfLyoOVeGulQn5r9ur2VXpB0to7dhMaEBtZ63h%2FnVSKvbVp9if4YPetJavUJaqtaUu0N&X-Amz-Signature=dc0e9a508ea7b98b2b1fb392193611652d282164204a861f2f590e9afd2d3d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
