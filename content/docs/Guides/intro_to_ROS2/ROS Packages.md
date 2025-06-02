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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXUYLZL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD4KSQfiA8ZaZeywJLu8ZyyY5d0gN5ixdynYavgTWyW%2BAIhAJv%2B8hwIKSUwDiJmTm8nlrwAsrVs4BBFzZioIa%2FNpaAOKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzimQ4nT9YGXua9%2F8q3APklKEaRqbfzJUJ3ud6T9%2B%2FMFx%2F8wAipex2bsiyeyCnzTtj3cANXAAPsdXvtv3pbsedPDcICNSH43Mq8xiw5Na4x0whfrjJEZ1Pu2OhkZcalaGSb0%2BfAMNikrHcFd2ylZqAzrtfJ6fPgPh78Z4MqWuJvr1IudaBZXH0KvbtDsF5sdrZuka1OR%2BU2lAaeV198a8ysWeIm21pPDI0Bo4cBTHc9WYOOAXxSIQhwQR%2BmVWxnjcPTNFqWehes6VLEyIJH8CODjuxZtNqSvT8zZvw44mEM2wMx69MnyJ3juygR0532wr5dDIgkqF3pVQSuLErIanzZywlNsGamT7puOEhLojGFIKDCMcDg7A8jvP%2BLPoTfmUhQvQZyXW7e4%2Fp7r%2FZEPOtfSUmoEJ3GQgvSoDmueYCD96qnrIQK%2BSOa1uLTDVi%2BC%2BadvzENIB3VxiDr6YTKqWS3eSQNwFVep0AA7iJ1M%2BJR4S2evhB3oK8T2cJjRvR0A6SBUK51IsTZ5S2fSMG1qKhL6vJiDNfm2hP79BoLeMQbBJZnSwqtaxTFVYXaANAn1piNeUxi5nz1Xsu%2BnkuRbTyA3y%2Be2Vp3KSliwz7MpTrZiZz5PXDKd83TVS8nc%2Fv35MG0ah4y35L5RBjkjCV4vfBBjqkAVxfGoBehXisyj6BWOEsl2rHmXvFNbsYAHITCCpAND5XK7m%2BiZ9%2FnSCBL%2Bj0LmaKpaQW4VSGCMjvhX%2BcT3Tk0Rs%2FfbP6xCVKVAdoNYZ9wMSrLKjeWDnu4xGifmzfwdc42sDHrVO1hlnBXPRoeyF0LUpsA8Jske%2BuLeZMp2Q9iCZcDdFjKs8aN3uRJDBA6HXbzH7VQkUabMGnIrYkETTTgbB1JE8v&X-Amz-Signature=fcb30d54f3aded0b26d5363a9abb6764a7c8ae69c31da98b1c11e17fade38777&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXUYLZL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD4KSQfiA8ZaZeywJLu8ZyyY5d0gN5ixdynYavgTWyW%2BAIhAJv%2B8hwIKSUwDiJmTm8nlrwAsrVs4BBFzZioIa%2FNpaAOKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzimQ4nT9YGXua9%2F8q3APklKEaRqbfzJUJ3ud6T9%2B%2FMFx%2F8wAipex2bsiyeyCnzTtj3cANXAAPsdXvtv3pbsedPDcICNSH43Mq8xiw5Na4x0whfrjJEZ1Pu2OhkZcalaGSb0%2BfAMNikrHcFd2ylZqAzrtfJ6fPgPh78Z4MqWuJvr1IudaBZXH0KvbtDsF5sdrZuka1OR%2BU2lAaeV198a8ysWeIm21pPDI0Bo4cBTHc9WYOOAXxSIQhwQR%2BmVWxnjcPTNFqWehes6VLEyIJH8CODjuxZtNqSvT8zZvw44mEM2wMx69MnyJ3juygR0532wr5dDIgkqF3pVQSuLErIanzZywlNsGamT7puOEhLojGFIKDCMcDg7A8jvP%2BLPoTfmUhQvQZyXW7e4%2Fp7r%2FZEPOtfSUmoEJ3GQgvSoDmueYCD96qnrIQK%2BSOa1uLTDVi%2BC%2BadvzENIB3VxiDr6YTKqWS3eSQNwFVep0AA7iJ1M%2BJR4S2evhB3oK8T2cJjRvR0A6SBUK51IsTZ5S2fSMG1qKhL6vJiDNfm2hP79BoLeMQbBJZnSwqtaxTFVYXaANAn1piNeUxi5nz1Xsu%2BnkuRbTyA3y%2Be2Vp3KSliwz7MpTrZiZz5PXDKd83TVS8nc%2Fv35MG0ah4y35L5RBjkjCV4vfBBjqkAVxfGoBehXisyj6BWOEsl2rHmXvFNbsYAHITCCpAND5XK7m%2BiZ9%2FnSCBL%2Bj0LmaKpaQW4VSGCMjvhX%2BcT3Tk0Rs%2FfbP6xCVKVAdoNYZ9wMSrLKjeWDnu4xGifmzfwdc42sDHrVO1hlnBXPRoeyF0LUpsA8Jske%2BuLeZMp2Q9iCZcDdFjKs8aN3uRJDBA6HXbzH7VQkUabMGnIrYkETTTgbB1JE8v&X-Amz-Signature=0a3e89fbdda0200392d8f5e18ef903b8e9552eb99d5bfd36566bfe40f67b294c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXUYLZL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD4KSQfiA8ZaZeywJLu8ZyyY5d0gN5ixdynYavgTWyW%2BAIhAJv%2B8hwIKSUwDiJmTm8nlrwAsrVs4BBFzZioIa%2FNpaAOKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzimQ4nT9YGXua9%2F8q3APklKEaRqbfzJUJ3ud6T9%2B%2FMFx%2F8wAipex2bsiyeyCnzTtj3cANXAAPsdXvtv3pbsedPDcICNSH43Mq8xiw5Na4x0whfrjJEZ1Pu2OhkZcalaGSb0%2BfAMNikrHcFd2ylZqAzrtfJ6fPgPh78Z4MqWuJvr1IudaBZXH0KvbtDsF5sdrZuka1OR%2BU2lAaeV198a8ysWeIm21pPDI0Bo4cBTHc9WYOOAXxSIQhwQR%2BmVWxnjcPTNFqWehes6VLEyIJH8CODjuxZtNqSvT8zZvw44mEM2wMx69MnyJ3juygR0532wr5dDIgkqF3pVQSuLErIanzZywlNsGamT7puOEhLojGFIKDCMcDg7A8jvP%2BLPoTfmUhQvQZyXW7e4%2Fp7r%2FZEPOtfSUmoEJ3GQgvSoDmueYCD96qnrIQK%2BSOa1uLTDVi%2BC%2BadvzENIB3VxiDr6YTKqWS3eSQNwFVep0AA7iJ1M%2BJR4S2evhB3oK8T2cJjRvR0A6SBUK51IsTZ5S2fSMG1qKhL6vJiDNfm2hP79BoLeMQbBJZnSwqtaxTFVYXaANAn1piNeUxi5nz1Xsu%2BnkuRbTyA3y%2Be2Vp3KSliwz7MpTrZiZz5PXDKd83TVS8nc%2Fv35MG0ah4y35L5RBjkjCV4vfBBjqkAVxfGoBehXisyj6BWOEsl2rHmXvFNbsYAHITCCpAND5XK7m%2BiZ9%2FnSCBL%2Bj0LmaKpaQW4VSGCMjvhX%2BcT3Tk0Rs%2FfbP6xCVKVAdoNYZ9wMSrLKjeWDnu4xGifmzfwdc42sDHrVO1hlnBXPRoeyF0LUpsA8Jske%2BuLeZMp2Q9iCZcDdFjKs8aN3uRJDBA6HXbzH7VQkUabMGnIrYkETTTgbB1JE8v&X-Amz-Signature=c0a5eb7934b93570e670e50620309dcc7e2c3423fb073a742d9ff79d0ecb0940&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXUYLZL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD4KSQfiA8ZaZeywJLu8ZyyY5d0gN5ixdynYavgTWyW%2BAIhAJv%2B8hwIKSUwDiJmTm8nlrwAsrVs4BBFzZioIa%2FNpaAOKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzimQ4nT9YGXua9%2F8q3APklKEaRqbfzJUJ3ud6T9%2B%2FMFx%2F8wAipex2bsiyeyCnzTtj3cANXAAPsdXvtv3pbsedPDcICNSH43Mq8xiw5Na4x0whfrjJEZ1Pu2OhkZcalaGSb0%2BfAMNikrHcFd2ylZqAzrtfJ6fPgPh78Z4MqWuJvr1IudaBZXH0KvbtDsF5sdrZuka1OR%2BU2lAaeV198a8ysWeIm21pPDI0Bo4cBTHc9WYOOAXxSIQhwQR%2BmVWxnjcPTNFqWehes6VLEyIJH8CODjuxZtNqSvT8zZvw44mEM2wMx69MnyJ3juygR0532wr5dDIgkqF3pVQSuLErIanzZywlNsGamT7puOEhLojGFIKDCMcDg7A8jvP%2BLPoTfmUhQvQZyXW7e4%2Fp7r%2FZEPOtfSUmoEJ3GQgvSoDmueYCD96qnrIQK%2BSOa1uLTDVi%2BC%2BadvzENIB3VxiDr6YTKqWS3eSQNwFVep0AA7iJ1M%2BJR4S2evhB3oK8T2cJjRvR0A6SBUK51IsTZ5S2fSMG1qKhL6vJiDNfm2hP79BoLeMQbBJZnSwqtaxTFVYXaANAn1piNeUxi5nz1Xsu%2BnkuRbTyA3y%2Be2Vp3KSliwz7MpTrZiZz5PXDKd83TVS8nc%2Fv35MG0ah4y35L5RBjkjCV4vfBBjqkAVxfGoBehXisyj6BWOEsl2rHmXvFNbsYAHITCCpAND5XK7m%2BiZ9%2FnSCBL%2Bj0LmaKpaQW4VSGCMjvhX%2BcT3Tk0Rs%2FfbP6xCVKVAdoNYZ9wMSrLKjeWDnu4xGifmzfwdc42sDHrVO1hlnBXPRoeyF0LUpsA8Jske%2BuLeZMp2Q9iCZcDdFjKs8aN3uRJDBA6HXbzH7VQkUabMGnIrYkETTTgbB1JE8v&X-Amz-Signature=d7914bf43e1716cdad894340a7f9055a9efd2ca6427b520772de6abef8fb653e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXUYLZL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD4KSQfiA8ZaZeywJLu8ZyyY5d0gN5ixdynYavgTWyW%2BAIhAJv%2B8hwIKSUwDiJmTm8nlrwAsrVs4BBFzZioIa%2FNpaAOKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzimQ4nT9YGXua9%2F8q3APklKEaRqbfzJUJ3ud6T9%2B%2FMFx%2F8wAipex2bsiyeyCnzTtj3cANXAAPsdXvtv3pbsedPDcICNSH43Mq8xiw5Na4x0whfrjJEZ1Pu2OhkZcalaGSb0%2BfAMNikrHcFd2ylZqAzrtfJ6fPgPh78Z4MqWuJvr1IudaBZXH0KvbtDsF5sdrZuka1OR%2BU2lAaeV198a8ysWeIm21pPDI0Bo4cBTHc9WYOOAXxSIQhwQR%2BmVWxnjcPTNFqWehes6VLEyIJH8CODjuxZtNqSvT8zZvw44mEM2wMx69MnyJ3juygR0532wr5dDIgkqF3pVQSuLErIanzZywlNsGamT7puOEhLojGFIKDCMcDg7A8jvP%2BLPoTfmUhQvQZyXW7e4%2Fp7r%2FZEPOtfSUmoEJ3GQgvSoDmueYCD96qnrIQK%2BSOa1uLTDVi%2BC%2BadvzENIB3VxiDr6YTKqWS3eSQNwFVep0AA7iJ1M%2BJR4S2evhB3oK8T2cJjRvR0A6SBUK51IsTZ5S2fSMG1qKhL6vJiDNfm2hP79BoLeMQbBJZnSwqtaxTFVYXaANAn1piNeUxi5nz1Xsu%2BnkuRbTyA3y%2Be2Vp3KSliwz7MpTrZiZz5PXDKd83TVS8nc%2Fv35MG0ah4y35L5RBjkjCV4vfBBjqkAVxfGoBehXisyj6BWOEsl2rHmXvFNbsYAHITCCpAND5XK7m%2BiZ9%2FnSCBL%2Bj0LmaKpaQW4VSGCMjvhX%2BcT3Tk0Rs%2FfbP6xCVKVAdoNYZ9wMSrLKjeWDnu4xGifmzfwdc42sDHrVO1hlnBXPRoeyF0LUpsA8Jske%2BuLeZMp2Q9iCZcDdFjKs8aN3uRJDBA6HXbzH7VQkUabMGnIrYkETTTgbB1JE8v&X-Amz-Signature=9db979a8c82c28dc47581759bbf375210e2803bdf8ef032c0955fae4e52ef53d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXUYLZL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD4KSQfiA8ZaZeywJLu8ZyyY5d0gN5ixdynYavgTWyW%2BAIhAJv%2B8hwIKSUwDiJmTm8nlrwAsrVs4BBFzZioIa%2FNpaAOKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzimQ4nT9YGXua9%2F8q3APklKEaRqbfzJUJ3ud6T9%2B%2FMFx%2F8wAipex2bsiyeyCnzTtj3cANXAAPsdXvtv3pbsedPDcICNSH43Mq8xiw5Na4x0whfrjJEZ1Pu2OhkZcalaGSb0%2BfAMNikrHcFd2ylZqAzrtfJ6fPgPh78Z4MqWuJvr1IudaBZXH0KvbtDsF5sdrZuka1OR%2BU2lAaeV198a8ysWeIm21pPDI0Bo4cBTHc9WYOOAXxSIQhwQR%2BmVWxnjcPTNFqWehes6VLEyIJH8CODjuxZtNqSvT8zZvw44mEM2wMx69MnyJ3juygR0532wr5dDIgkqF3pVQSuLErIanzZywlNsGamT7puOEhLojGFIKDCMcDg7A8jvP%2BLPoTfmUhQvQZyXW7e4%2Fp7r%2FZEPOtfSUmoEJ3GQgvSoDmueYCD96qnrIQK%2BSOa1uLTDVi%2BC%2BadvzENIB3VxiDr6YTKqWS3eSQNwFVep0AA7iJ1M%2BJR4S2evhB3oK8T2cJjRvR0A6SBUK51IsTZ5S2fSMG1qKhL6vJiDNfm2hP79BoLeMQbBJZnSwqtaxTFVYXaANAn1piNeUxi5nz1Xsu%2BnkuRbTyA3y%2Be2Vp3KSliwz7MpTrZiZz5PXDKd83TVS8nc%2Fv35MG0ah4y35L5RBjkjCV4vfBBjqkAVxfGoBehXisyj6BWOEsl2rHmXvFNbsYAHITCCpAND5XK7m%2BiZ9%2FnSCBL%2Bj0LmaKpaQW4VSGCMjvhX%2BcT3Tk0Rs%2FfbP6xCVKVAdoNYZ9wMSrLKjeWDnu4xGifmzfwdc42sDHrVO1hlnBXPRoeyF0LUpsA8Jske%2BuLeZMp2Q9iCZcDdFjKs8aN3uRJDBA6HXbzH7VQkUabMGnIrYkETTTgbB1JE8v&X-Amz-Signature=6d824ed4493cfb42199d545f645521362b9d7912d777351ef5ee440cbb28e34e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXUYLZL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD4KSQfiA8ZaZeywJLu8ZyyY5d0gN5ixdynYavgTWyW%2BAIhAJv%2B8hwIKSUwDiJmTm8nlrwAsrVs4BBFzZioIa%2FNpaAOKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzimQ4nT9YGXua9%2F8q3APklKEaRqbfzJUJ3ud6T9%2B%2FMFx%2F8wAipex2bsiyeyCnzTtj3cANXAAPsdXvtv3pbsedPDcICNSH43Mq8xiw5Na4x0whfrjJEZ1Pu2OhkZcalaGSb0%2BfAMNikrHcFd2ylZqAzrtfJ6fPgPh78Z4MqWuJvr1IudaBZXH0KvbtDsF5sdrZuka1OR%2BU2lAaeV198a8ysWeIm21pPDI0Bo4cBTHc9WYOOAXxSIQhwQR%2BmVWxnjcPTNFqWehes6VLEyIJH8CODjuxZtNqSvT8zZvw44mEM2wMx69MnyJ3juygR0532wr5dDIgkqF3pVQSuLErIanzZywlNsGamT7puOEhLojGFIKDCMcDg7A8jvP%2BLPoTfmUhQvQZyXW7e4%2Fp7r%2FZEPOtfSUmoEJ3GQgvSoDmueYCD96qnrIQK%2BSOa1uLTDVi%2BC%2BadvzENIB3VxiDr6YTKqWS3eSQNwFVep0AA7iJ1M%2BJR4S2evhB3oK8T2cJjRvR0A6SBUK51IsTZ5S2fSMG1qKhL6vJiDNfm2hP79BoLeMQbBJZnSwqtaxTFVYXaANAn1piNeUxi5nz1Xsu%2BnkuRbTyA3y%2Be2Vp3KSliwz7MpTrZiZz5PXDKd83TVS8nc%2Fv35MG0ah4y35L5RBjkjCV4vfBBjqkAVxfGoBehXisyj6BWOEsl2rHmXvFNbsYAHITCCpAND5XK7m%2BiZ9%2FnSCBL%2Bj0LmaKpaQW4VSGCMjvhX%2BcT3Tk0Rs%2FfbP6xCVKVAdoNYZ9wMSrLKjeWDnu4xGifmzfwdc42sDHrVO1hlnBXPRoeyF0LUpsA8Jske%2BuLeZMp2Q9iCZcDdFjKs8aN3uRJDBA6HXbzH7VQkUabMGnIrYkETTTgbB1JE8v&X-Amz-Signature=b9babdabdbfc65d52acf85b63e82b1f28fc6ecd1e968d3c151e75bab87e8d250&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
