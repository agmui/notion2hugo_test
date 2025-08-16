---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FPAHDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCZZceJvccU%2B9z7XMp%2FlfQJ8XyY9sTKmfKr03nmbHAfSwIhAM7JKOAITDerKBvk1tuniZmi7mC7PP4Y2LOYOjgs%2FnBUKv8DCHcQABoMNjM3NDIzMTgzODA1IgxCg%2B9nhRMKltAW97Yq3AME6ts%2FpwepqHam0%2FjBV%2F%2BpdjahsUA0%2BQPbomzdC%2Fdop3VZJ0VQO1H%2F%2Bli%2FokJZm4e%2FF6GQXqj6ro116eyDikxCnOzotwWxbiJLeP%2Fmw5lco1qHsU0HoBGGNjGcnAsyB0dm0lNRWFQ%2Fywyhh%2BKZt6qwyBOyCmNii1nvgaqrhf8OrpPhzzHmw1Z25ceTcWcvIlgikbdkVeipjMKNhaX%2Fvj9f8Uh2KAjPvfsePskN3yIZck4HRdcZiDXYHe07Up97agnQgEbwbf7EUT4TBYzI4a74MdV8Yywxt%2FvNIgVd%2FmW8W6hKK98Ynbo8aaV1ULrRSzoRvhUn4jb%2B4MZRvnV3Axv1ICdIazMiaOh8Vh1QN%2Bn%2FlsOBeC5KJJP%2B8s9vkLFmABwYDz8%2FKnyPG%2FEX7Oq982DZgehMS9v7mnX2A5xuV0mOBCzFu3h6GBRZwZslJZC4SB7bsUva5gTRJjkMWfiOeKqz0Co4fCYPc0WUbVr3%2F7j2DF0qY2ZP5mEz0LdRsk%2FUHR%2FtDjeYyF%2Fwxr%2BkYXls%2FuoLJiEHOg%2BDV44LKOdNOIdv7Ycl4hZD27a1pNNSsKovSXGKkAxB6TptUJGb5C43RiMTOPbL1awB0ANvI%2BL2NUJ6uPUhUxv9LZsp5rrojjCEkoLFBjqkAd23tnzVwy3cX64Afxb7SlLKuHUnhoACsY1sYijSufer%2FIkvTUoKW79MwHfn8UcSgj6Wku2ovnomjvrPAks0ENwW5104Nhi5TcVmEaCcgXeBMMnGjo4vy0zf44e6pPQiz3dNhdRAB3ZHl9BR4LZIFv3Q4fifJkre7DVt6u9kTRyIbnYkoWkNEqwUPWHK7lCO%2FPyi8tdRGRjBrMY6VNtzp%2FkZkqOh&X-Amz-Signature=347966d1bed6e5fe9b05d2e557303bf9c07ced0d2daf086c34ff7167f84ce818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FPAHDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCZZceJvccU%2B9z7XMp%2FlfQJ8XyY9sTKmfKr03nmbHAfSwIhAM7JKOAITDerKBvk1tuniZmi7mC7PP4Y2LOYOjgs%2FnBUKv8DCHcQABoMNjM3NDIzMTgzODA1IgxCg%2B9nhRMKltAW97Yq3AME6ts%2FpwepqHam0%2FjBV%2F%2BpdjahsUA0%2BQPbomzdC%2Fdop3VZJ0VQO1H%2F%2Bli%2FokJZm4e%2FF6GQXqj6ro116eyDikxCnOzotwWxbiJLeP%2Fmw5lco1qHsU0HoBGGNjGcnAsyB0dm0lNRWFQ%2Fywyhh%2BKZt6qwyBOyCmNii1nvgaqrhf8OrpPhzzHmw1Z25ceTcWcvIlgikbdkVeipjMKNhaX%2Fvj9f8Uh2KAjPvfsePskN3yIZck4HRdcZiDXYHe07Up97agnQgEbwbf7EUT4TBYzI4a74MdV8Yywxt%2FvNIgVd%2FmW8W6hKK98Ynbo8aaV1ULrRSzoRvhUn4jb%2B4MZRvnV3Axv1ICdIazMiaOh8Vh1QN%2Bn%2FlsOBeC5KJJP%2B8s9vkLFmABwYDz8%2FKnyPG%2FEX7Oq982DZgehMS9v7mnX2A5xuV0mOBCzFu3h6GBRZwZslJZC4SB7bsUva5gTRJjkMWfiOeKqz0Co4fCYPc0WUbVr3%2F7j2DF0qY2ZP5mEz0LdRsk%2FUHR%2FtDjeYyF%2Fwxr%2BkYXls%2FuoLJiEHOg%2BDV44LKOdNOIdv7Ycl4hZD27a1pNNSsKovSXGKkAxB6TptUJGb5C43RiMTOPbL1awB0ANvI%2BL2NUJ6uPUhUxv9LZsp5rrojjCEkoLFBjqkAd23tnzVwy3cX64Afxb7SlLKuHUnhoACsY1sYijSufer%2FIkvTUoKW79MwHfn8UcSgj6Wku2ovnomjvrPAks0ENwW5104Nhi5TcVmEaCcgXeBMMnGjo4vy0zf44e6pPQiz3dNhdRAB3ZHl9BR4LZIFv3Q4fifJkre7DVt6u9kTRyIbnYkoWkNEqwUPWHK7lCO%2FPyi8tdRGRjBrMY6VNtzp%2FkZkqOh&X-Amz-Signature=3fd1b9aab3a2160ffa14e43cd01b443f59df87c0bef9de2beedac59040c9d065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FPAHDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCZZceJvccU%2B9z7XMp%2FlfQJ8XyY9sTKmfKr03nmbHAfSwIhAM7JKOAITDerKBvk1tuniZmi7mC7PP4Y2LOYOjgs%2FnBUKv8DCHcQABoMNjM3NDIzMTgzODA1IgxCg%2B9nhRMKltAW97Yq3AME6ts%2FpwepqHam0%2FjBV%2F%2BpdjahsUA0%2BQPbomzdC%2Fdop3VZJ0VQO1H%2F%2Bli%2FokJZm4e%2FF6GQXqj6ro116eyDikxCnOzotwWxbiJLeP%2Fmw5lco1qHsU0HoBGGNjGcnAsyB0dm0lNRWFQ%2Fywyhh%2BKZt6qwyBOyCmNii1nvgaqrhf8OrpPhzzHmw1Z25ceTcWcvIlgikbdkVeipjMKNhaX%2Fvj9f8Uh2KAjPvfsePskN3yIZck4HRdcZiDXYHe07Up97agnQgEbwbf7EUT4TBYzI4a74MdV8Yywxt%2FvNIgVd%2FmW8W6hKK98Ynbo8aaV1ULrRSzoRvhUn4jb%2B4MZRvnV3Axv1ICdIazMiaOh8Vh1QN%2Bn%2FlsOBeC5KJJP%2B8s9vkLFmABwYDz8%2FKnyPG%2FEX7Oq982DZgehMS9v7mnX2A5xuV0mOBCzFu3h6GBRZwZslJZC4SB7bsUva5gTRJjkMWfiOeKqz0Co4fCYPc0WUbVr3%2F7j2DF0qY2ZP5mEz0LdRsk%2FUHR%2FtDjeYyF%2Fwxr%2BkYXls%2FuoLJiEHOg%2BDV44LKOdNOIdv7Ycl4hZD27a1pNNSsKovSXGKkAxB6TptUJGb5C43RiMTOPbL1awB0ANvI%2BL2NUJ6uPUhUxv9LZsp5rrojjCEkoLFBjqkAd23tnzVwy3cX64Afxb7SlLKuHUnhoACsY1sYijSufer%2FIkvTUoKW79MwHfn8UcSgj6Wku2ovnomjvrPAks0ENwW5104Nhi5TcVmEaCcgXeBMMnGjo4vy0zf44e6pPQiz3dNhdRAB3ZHl9BR4LZIFv3Q4fifJkre7DVt6u9kTRyIbnYkoWkNEqwUPWHK7lCO%2FPyi8tdRGRjBrMY6VNtzp%2FkZkqOh&X-Amz-Signature=5c90fc5b2cd3e7e4fba53cc5cb04cd8a57820561ca44f12a25dd448d6414d453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FPAHDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCZZceJvccU%2B9z7XMp%2FlfQJ8XyY9sTKmfKr03nmbHAfSwIhAM7JKOAITDerKBvk1tuniZmi7mC7PP4Y2LOYOjgs%2FnBUKv8DCHcQABoMNjM3NDIzMTgzODA1IgxCg%2B9nhRMKltAW97Yq3AME6ts%2FpwepqHam0%2FjBV%2F%2BpdjahsUA0%2BQPbomzdC%2Fdop3VZJ0VQO1H%2F%2Bli%2FokJZm4e%2FF6GQXqj6ro116eyDikxCnOzotwWxbiJLeP%2Fmw5lco1qHsU0HoBGGNjGcnAsyB0dm0lNRWFQ%2Fywyhh%2BKZt6qwyBOyCmNii1nvgaqrhf8OrpPhzzHmw1Z25ceTcWcvIlgikbdkVeipjMKNhaX%2Fvj9f8Uh2KAjPvfsePskN3yIZck4HRdcZiDXYHe07Up97agnQgEbwbf7EUT4TBYzI4a74MdV8Yywxt%2FvNIgVd%2FmW8W6hKK98Ynbo8aaV1ULrRSzoRvhUn4jb%2B4MZRvnV3Axv1ICdIazMiaOh8Vh1QN%2Bn%2FlsOBeC5KJJP%2B8s9vkLFmABwYDz8%2FKnyPG%2FEX7Oq982DZgehMS9v7mnX2A5xuV0mOBCzFu3h6GBRZwZslJZC4SB7bsUva5gTRJjkMWfiOeKqz0Co4fCYPc0WUbVr3%2F7j2DF0qY2ZP5mEz0LdRsk%2FUHR%2FtDjeYyF%2Fwxr%2BkYXls%2FuoLJiEHOg%2BDV44LKOdNOIdv7Ycl4hZD27a1pNNSsKovSXGKkAxB6TptUJGb5C43RiMTOPbL1awB0ANvI%2BL2NUJ6uPUhUxv9LZsp5rrojjCEkoLFBjqkAd23tnzVwy3cX64Afxb7SlLKuHUnhoACsY1sYijSufer%2FIkvTUoKW79MwHfn8UcSgj6Wku2ovnomjvrPAks0ENwW5104Nhi5TcVmEaCcgXeBMMnGjo4vy0zf44e6pPQiz3dNhdRAB3ZHl9BR4LZIFv3Q4fifJkre7DVt6u9kTRyIbnYkoWkNEqwUPWHK7lCO%2FPyi8tdRGRjBrMY6VNtzp%2FkZkqOh&X-Amz-Signature=728e96096023ba329c567c63cd868bc8cd76eaf562279658cddec764f90d8d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FPAHDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCZZceJvccU%2B9z7XMp%2FlfQJ8XyY9sTKmfKr03nmbHAfSwIhAM7JKOAITDerKBvk1tuniZmi7mC7PP4Y2LOYOjgs%2FnBUKv8DCHcQABoMNjM3NDIzMTgzODA1IgxCg%2B9nhRMKltAW97Yq3AME6ts%2FpwepqHam0%2FjBV%2F%2BpdjahsUA0%2BQPbomzdC%2Fdop3VZJ0VQO1H%2F%2Bli%2FokJZm4e%2FF6GQXqj6ro116eyDikxCnOzotwWxbiJLeP%2Fmw5lco1qHsU0HoBGGNjGcnAsyB0dm0lNRWFQ%2Fywyhh%2BKZt6qwyBOyCmNii1nvgaqrhf8OrpPhzzHmw1Z25ceTcWcvIlgikbdkVeipjMKNhaX%2Fvj9f8Uh2KAjPvfsePskN3yIZck4HRdcZiDXYHe07Up97agnQgEbwbf7EUT4TBYzI4a74MdV8Yywxt%2FvNIgVd%2FmW8W6hKK98Ynbo8aaV1ULrRSzoRvhUn4jb%2B4MZRvnV3Axv1ICdIazMiaOh8Vh1QN%2Bn%2FlsOBeC5KJJP%2B8s9vkLFmABwYDz8%2FKnyPG%2FEX7Oq982DZgehMS9v7mnX2A5xuV0mOBCzFu3h6GBRZwZslJZC4SB7bsUva5gTRJjkMWfiOeKqz0Co4fCYPc0WUbVr3%2F7j2DF0qY2ZP5mEz0LdRsk%2FUHR%2FtDjeYyF%2Fwxr%2BkYXls%2FuoLJiEHOg%2BDV44LKOdNOIdv7Ycl4hZD27a1pNNSsKovSXGKkAxB6TptUJGb5C43RiMTOPbL1awB0ANvI%2BL2NUJ6uPUhUxv9LZsp5rrojjCEkoLFBjqkAd23tnzVwy3cX64Afxb7SlLKuHUnhoACsY1sYijSufer%2FIkvTUoKW79MwHfn8UcSgj6Wku2ovnomjvrPAks0ENwW5104Nhi5TcVmEaCcgXeBMMnGjo4vy0zf44e6pPQiz3dNhdRAB3ZHl9BR4LZIFv3Q4fifJkre7DVt6u9kTRyIbnYkoWkNEqwUPWHK7lCO%2FPyi8tdRGRjBrMY6VNtzp%2FkZkqOh&X-Amz-Signature=94f45b582c8764d0d0b3f42221b5b5e2ef8f6178b6ba9866fc087e7fee89a354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FPAHDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCZZceJvccU%2B9z7XMp%2FlfQJ8XyY9sTKmfKr03nmbHAfSwIhAM7JKOAITDerKBvk1tuniZmi7mC7PP4Y2LOYOjgs%2FnBUKv8DCHcQABoMNjM3NDIzMTgzODA1IgxCg%2B9nhRMKltAW97Yq3AME6ts%2FpwepqHam0%2FjBV%2F%2BpdjahsUA0%2BQPbomzdC%2Fdop3VZJ0VQO1H%2F%2Bli%2FokJZm4e%2FF6GQXqj6ro116eyDikxCnOzotwWxbiJLeP%2Fmw5lco1qHsU0HoBGGNjGcnAsyB0dm0lNRWFQ%2Fywyhh%2BKZt6qwyBOyCmNii1nvgaqrhf8OrpPhzzHmw1Z25ceTcWcvIlgikbdkVeipjMKNhaX%2Fvj9f8Uh2KAjPvfsePskN3yIZck4HRdcZiDXYHe07Up97agnQgEbwbf7EUT4TBYzI4a74MdV8Yywxt%2FvNIgVd%2FmW8W6hKK98Ynbo8aaV1ULrRSzoRvhUn4jb%2B4MZRvnV3Axv1ICdIazMiaOh8Vh1QN%2Bn%2FlsOBeC5KJJP%2B8s9vkLFmABwYDz8%2FKnyPG%2FEX7Oq982DZgehMS9v7mnX2A5xuV0mOBCzFu3h6GBRZwZslJZC4SB7bsUva5gTRJjkMWfiOeKqz0Co4fCYPc0WUbVr3%2F7j2DF0qY2ZP5mEz0LdRsk%2FUHR%2FtDjeYyF%2Fwxr%2BkYXls%2FuoLJiEHOg%2BDV44LKOdNOIdv7Ycl4hZD27a1pNNSsKovSXGKkAxB6TptUJGb5C43RiMTOPbL1awB0ANvI%2BL2NUJ6uPUhUxv9LZsp5rrojjCEkoLFBjqkAd23tnzVwy3cX64Afxb7SlLKuHUnhoACsY1sYijSufer%2FIkvTUoKW79MwHfn8UcSgj6Wku2ovnomjvrPAks0ENwW5104Nhi5TcVmEaCcgXeBMMnGjo4vy0zf44e6pPQiz3dNhdRAB3ZHl9BR4LZIFv3Q4fifJkre7DVt6u9kTRyIbnYkoWkNEqwUPWHK7lCO%2FPyi8tdRGRjBrMY6VNtzp%2FkZkqOh&X-Amz-Signature=77f157f71f28425d4a464e2130f59c8306c372f8535973e678957b342a066280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FPAHDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCZZceJvccU%2B9z7XMp%2FlfQJ8XyY9sTKmfKr03nmbHAfSwIhAM7JKOAITDerKBvk1tuniZmi7mC7PP4Y2LOYOjgs%2FnBUKv8DCHcQABoMNjM3NDIzMTgzODA1IgxCg%2B9nhRMKltAW97Yq3AME6ts%2FpwepqHam0%2FjBV%2F%2BpdjahsUA0%2BQPbomzdC%2Fdop3VZJ0VQO1H%2F%2Bli%2FokJZm4e%2FF6GQXqj6ro116eyDikxCnOzotwWxbiJLeP%2Fmw5lco1qHsU0HoBGGNjGcnAsyB0dm0lNRWFQ%2Fywyhh%2BKZt6qwyBOyCmNii1nvgaqrhf8OrpPhzzHmw1Z25ceTcWcvIlgikbdkVeipjMKNhaX%2Fvj9f8Uh2KAjPvfsePskN3yIZck4HRdcZiDXYHe07Up97agnQgEbwbf7EUT4TBYzI4a74MdV8Yywxt%2FvNIgVd%2FmW8W6hKK98Ynbo8aaV1ULrRSzoRvhUn4jb%2B4MZRvnV3Axv1ICdIazMiaOh8Vh1QN%2Bn%2FlsOBeC5KJJP%2B8s9vkLFmABwYDz8%2FKnyPG%2FEX7Oq982DZgehMS9v7mnX2A5xuV0mOBCzFu3h6GBRZwZslJZC4SB7bsUva5gTRJjkMWfiOeKqz0Co4fCYPc0WUbVr3%2F7j2DF0qY2ZP5mEz0LdRsk%2FUHR%2FtDjeYyF%2Fwxr%2BkYXls%2FuoLJiEHOg%2BDV44LKOdNOIdv7Ycl4hZD27a1pNNSsKovSXGKkAxB6TptUJGb5C43RiMTOPbL1awB0ANvI%2BL2NUJ6uPUhUxv9LZsp5rrojjCEkoLFBjqkAd23tnzVwy3cX64Afxb7SlLKuHUnhoACsY1sYijSufer%2FIkvTUoKW79MwHfn8UcSgj6Wku2ovnomjvrPAks0ENwW5104Nhi5TcVmEaCcgXeBMMnGjo4vy0zf44e6pPQiz3dNhdRAB3ZHl9BR4LZIFv3Q4fifJkre7DVt6u9kTRyIbnYkoWkNEqwUPWHK7lCO%2FPyi8tdRGRjBrMY6VNtzp%2FkZkqOh&X-Amz-Signature=c6e8ed5d52bdb6d7f17e5577cd763cc57b92b1e14a7543301cf62188875f6348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
