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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3QW4P5J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCQeF9SR9jdq5y75dQ7pT39gdMJr%2FhWYyhJIQebvM%2FsgQIhAKHdY1KUp1U6RdXDqKXU7Yx%2FXoPYkY5qfl%2BBM1pq%2FSZiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn5TgDVRuuWsqKxkgq3AP66aLMliqYmI%2FXEcQFX%2Be%2FdmUVyQZ4%2B2tbbfdw%2BFOBpDiAU5E3nAd7vUZNcyoVwdds3voHDrzO6sV75MVQARtbgn20LduXaJeulAsFsprBpHtUUk6Y%2BOF%2FzW7E%2FSsF5k75ZrzG1TJ0Z%2ByZDPpfKITo0nmYuneDT73D0gFc1p52DEJ6Avls%2F7hAI1VJMlRlM33LR3xgdVys1ZuGNW7orCC60Ai0IrswvSbLKfJuK8aroDwYH83EPgLv8X61GaJMgzF8ztdvIY%2FTpN3M6kTaie84%2BwnnEHFvGlorbAd2GuV00mwUwGYp8RbcuhOcZRv0fm1pN6Xc%2B3g3Q%2FYZmCa6LM7LLT7ssZoM8vjNueyWS55l421plUqsQy0oliy9I8Ts0YjMbgygfG9UtbFcj%2By4ndZQC7at1VOcNMp%2Budj%2FWFEssyUUrecHsl0aQxkfphxNHEF3jsJpYXLSEEkbhLcK5%2BrlbM3PyTqQr4pJyLLd%2B2zzlxZMFfVOFrJD8P87MDlBzqjsxUK%2BqFVsajaJggnbMrY0jzpy5Y7WSKdGn2QeTPMGoOLvYxHhPGvbbVNeVbFXY%2FYMPkkmXEkaKC6jNllCvuYPJ9g8tu0uLOOlH72P6BiSTiN3qSK6rnyIUv0%2B5DDpkJy9BjqkAdHYsoO3mPDRpW612ROq%2FoBWwhBVQkxSTYcqZ82iLp%2Fp%2BgxNxN2gVof1D4yQRSvh7u%2BLKE%2F7I45inv7yWTkVs5w6mIrs0436bW%2BenUFrtHQgXJ5RGdhRP88qzOKPcpduCgSecqL0EZUIMh5uK2vwqs%2FSqYGxLUZn%2FUr4%2Fo0TTpE0rS%2FVoFpQxnSMhhbGqdy7xKIUC0YKtzaLVfdaGNZK1EvzI71h&X-Amz-Signature=6241ae9d91bc9bf36e758f4bf1a77145da4cf51725d00fd2b81bfe6074a62881&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3QW4P5J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCQeF9SR9jdq5y75dQ7pT39gdMJr%2FhWYyhJIQebvM%2FsgQIhAKHdY1KUp1U6RdXDqKXU7Yx%2FXoPYkY5qfl%2BBM1pq%2FSZiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn5TgDVRuuWsqKxkgq3AP66aLMliqYmI%2FXEcQFX%2Be%2FdmUVyQZ4%2B2tbbfdw%2BFOBpDiAU5E3nAd7vUZNcyoVwdds3voHDrzO6sV75MVQARtbgn20LduXaJeulAsFsprBpHtUUk6Y%2BOF%2FzW7E%2FSsF5k75ZrzG1TJ0Z%2ByZDPpfKITo0nmYuneDT73D0gFc1p52DEJ6Avls%2F7hAI1VJMlRlM33LR3xgdVys1ZuGNW7orCC60Ai0IrswvSbLKfJuK8aroDwYH83EPgLv8X61GaJMgzF8ztdvIY%2FTpN3M6kTaie84%2BwnnEHFvGlorbAd2GuV00mwUwGYp8RbcuhOcZRv0fm1pN6Xc%2B3g3Q%2FYZmCa6LM7LLT7ssZoM8vjNueyWS55l421plUqsQy0oliy9I8Ts0YjMbgygfG9UtbFcj%2By4ndZQC7at1VOcNMp%2Budj%2FWFEssyUUrecHsl0aQxkfphxNHEF3jsJpYXLSEEkbhLcK5%2BrlbM3PyTqQr4pJyLLd%2B2zzlxZMFfVOFrJD8P87MDlBzqjsxUK%2BqFVsajaJggnbMrY0jzpy5Y7WSKdGn2QeTPMGoOLvYxHhPGvbbVNeVbFXY%2FYMPkkmXEkaKC6jNllCvuYPJ9g8tu0uLOOlH72P6BiSTiN3qSK6rnyIUv0%2B5DDpkJy9BjqkAdHYsoO3mPDRpW612ROq%2FoBWwhBVQkxSTYcqZ82iLp%2Fp%2BgxNxN2gVof1D4yQRSvh7u%2BLKE%2F7I45inv7yWTkVs5w6mIrs0436bW%2BenUFrtHQgXJ5RGdhRP88qzOKPcpduCgSecqL0EZUIMh5uK2vwqs%2FSqYGxLUZn%2FUr4%2Fo0TTpE0rS%2FVoFpQxnSMhhbGqdy7xKIUC0YKtzaLVfdaGNZK1EvzI71h&X-Amz-Signature=268061444ac0ed3d4c380f215e78ba93afd6dfc50c5110e30823d6427a54b3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3QW4P5J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCQeF9SR9jdq5y75dQ7pT39gdMJr%2FhWYyhJIQebvM%2FsgQIhAKHdY1KUp1U6RdXDqKXU7Yx%2FXoPYkY5qfl%2BBM1pq%2FSZiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn5TgDVRuuWsqKxkgq3AP66aLMliqYmI%2FXEcQFX%2Be%2FdmUVyQZ4%2B2tbbfdw%2BFOBpDiAU5E3nAd7vUZNcyoVwdds3voHDrzO6sV75MVQARtbgn20LduXaJeulAsFsprBpHtUUk6Y%2BOF%2FzW7E%2FSsF5k75ZrzG1TJ0Z%2ByZDPpfKITo0nmYuneDT73D0gFc1p52DEJ6Avls%2F7hAI1VJMlRlM33LR3xgdVys1ZuGNW7orCC60Ai0IrswvSbLKfJuK8aroDwYH83EPgLv8X61GaJMgzF8ztdvIY%2FTpN3M6kTaie84%2BwnnEHFvGlorbAd2GuV00mwUwGYp8RbcuhOcZRv0fm1pN6Xc%2B3g3Q%2FYZmCa6LM7LLT7ssZoM8vjNueyWS55l421plUqsQy0oliy9I8Ts0YjMbgygfG9UtbFcj%2By4ndZQC7at1VOcNMp%2Budj%2FWFEssyUUrecHsl0aQxkfphxNHEF3jsJpYXLSEEkbhLcK5%2BrlbM3PyTqQr4pJyLLd%2B2zzlxZMFfVOFrJD8P87MDlBzqjsxUK%2BqFVsajaJggnbMrY0jzpy5Y7WSKdGn2QeTPMGoOLvYxHhPGvbbVNeVbFXY%2FYMPkkmXEkaKC6jNllCvuYPJ9g8tu0uLOOlH72P6BiSTiN3qSK6rnyIUv0%2B5DDpkJy9BjqkAdHYsoO3mPDRpW612ROq%2FoBWwhBVQkxSTYcqZ82iLp%2Fp%2BgxNxN2gVof1D4yQRSvh7u%2BLKE%2F7I45inv7yWTkVs5w6mIrs0436bW%2BenUFrtHQgXJ5RGdhRP88qzOKPcpduCgSecqL0EZUIMh5uK2vwqs%2FSqYGxLUZn%2FUr4%2Fo0TTpE0rS%2FVoFpQxnSMhhbGqdy7xKIUC0YKtzaLVfdaGNZK1EvzI71h&X-Amz-Signature=fc107100fe0088f96912271d03ff4c370c27b918f971c83c95bc49f6ea5ab983&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3QW4P5J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCQeF9SR9jdq5y75dQ7pT39gdMJr%2FhWYyhJIQebvM%2FsgQIhAKHdY1KUp1U6RdXDqKXU7Yx%2FXoPYkY5qfl%2BBM1pq%2FSZiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn5TgDVRuuWsqKxkgq3AP66aLMliqYmI%2FXEcQFX%2Be%2FdmUVyQZ4%2B2tbbfdw%2BFOBpDiAU5E3nAd7vUZNcyoVwdds3voHDrzO6sV75MVQARtbgn20LduXaJeulAsFsprBpHtUUk6Y%2BOF%2FzW7E%2FSsF5k75ZrzG1TJ0Z%2ByZDPpfKITo0nmYuneDT73D0gFc1p52DEJ6Avls%2F7hAI1VJMlRlM33LR3xgdVys1ZuGNW7orCC60Ai0IrswvSbLKfJuK8aroDwYH83EPgLv8X61GaJMgzF8ztdvIY%2FTpN3M6kTaie84%2BwnnEHFvGlorbAd2GuV00mwUwGYp8RbcuhOcZRv0fm1pN6Xc%2B3g3Q%2FYZmCa6LM7LLT7ssZoM8vjNueyWS55l421plUqsQy0oliy9I8Ts0YjMbgygfG9UtbFcj%2By4ndZQC7at1VOcNMp%2Budj%2FWFEssyUUrecHsl0aQxkfphxNHEF3jsJpYXLSEEkbhLcK5%2BrlbM3PyTqQr4pJyLLd%2B2zzlxZMFfVOFrJD8P87MDlBzqjsxUK%2BqFVsajaJggnbMrY0jzpy5Y7WSKdGn2QeTPMGoOLvYxHhPGvbbVNeVbFXY%2FYMPkkmXEkaKC6jNllCvuYPJ9g8tu0uLOOlH72P6BiSTiN3qSK6rnyIUv0%2B5DDpkJy9BjqkAdHYsoO3mPDRpW612ROq%2FoBWwhBVQkxSTYcqZ82iLp%2Fp%2BgxNxN2gVof1D4yQRSvh7u%2BLKE%2F7I45inv7yWTkVs5w6mIrs0436bW%2BenUFrtHQgXJ5RGdhRP88qzOKPcpduCgSecqL0EZUIMh5uK2vwqs%2FSqYGxLUZn%2FUr4%2Fo0TTpE0rS%2FVoFpQxnSMhhbGqdy7xKIUC0YKtzaLVfdaGNZK1EvzI71h&X-Amz-Signature=2be367e6b395b082e5def5db013c11a62724bfa2995feaf265309837ecace8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3QW4P5J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCQeF9SR9jdq5y75dQ7pT39gdMJr%2FhWYyhJIQebvM%2FsgQIhAKHdY1KUp1U6RdXDqKXU7Yx%2FXoPYkY5qfl%2BBM1pq%2FSZiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn5TgDVRuuWsqKxkgq3AP66aLMliqYmI%2FXEcQFX%2Be%2FdmUVyQZ4%2B2tbbfdw%2BFOBpDiAU5E3nAd7vUZNcyoVwdds3voHDrzO6sV75MVQARtbgn20LduXaJeulAsFsprBpHtUUk6Y%2BOF%2FzW7E%2FSsF5k75ZrzG1TJ0Z%2ByZDPpfKITo0nmYuneDT73D0gFc1p52DEJ6Avls%2F7hAI1VJMlRlM33LR3xgdVys1ZuGNW7orCC60Ai0IrswvSbLKfJuK8aroDwYH83EPgLv8X61GaJMgzF8ztdvIY%2FTpN3M6kTaie84%2BwnnEHFvGlorbAd2GuV00mwUwGYp8RbcuhOcZRv0fm1pN6Xc%2B3g3Q%2FYZmCa6LM7LLT7ssZoM8vjNueyWS55l421plUqsQy0oliy9I8Ts0YjMbgygfG9UtbFcj%2By4ndZQC7at1VOcNMp%2Budj%2FWFEssyUUrecHsl0aQxkfphxNHEF3jsJpYXLSEEkbhLcK5%2BrlbM3PyTqQr4pJyLLd%2B2zzlxZMFfVOFrJD8P87MDlBzqjsxUK%2BqFVsajaJggnbMrY0jzpy5Y7WSKdGn2QeTPMGoOLvYxHhPGvbbVNeVbFXY%2FYMPkkmXEkaKC6jNllCvuYPJ9g8tu0uLOOlH72P6BiSTiN3qSK6rnyIUv0%2B5DDpkJy9BjqkAdHYsoO3mPDRpW612ROq%2FoBWwhBVQkxSTYcqZ82iLp%2Fp%2BgxNxN2gVof1D4yQRSvh7u%2BLKE%2F7I45inv7yWTkVs5w6mIrs0436bW%2BenUFrtHQgXJ5RGdhRP88qzOKPcpduCgSecqL0EZUIMh5uK2vwqs%2FSqYGxLUZn%2FUr4%2Fo0TTpE0rS%2FVoFpQxnSMhhbGqdy7xKIUC0YKtzaLVfdaGNZK1EvzI71h&X-Amz-Signature=5bef0c7ae880e1f3e2e08abba985cf64182138d972fca936b8633e42b7a4fcec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3QW4P5J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCQeF9SR9jdq5y75dQ7pT39gdMJr%2FhWYyhJIQebvM%2FsgQIhAKHdY1KUp1U6RdXDqKXU7Yx%2FXoPYkY5qfl%2BBM1pq%2FSZiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn5TgDVRuuWsqKxkgq3AP66aLMliqYmI%2FXEcQFX%2Be%2FdmUVyQZ4%2B2tbbfdw%2BFOBpDiAU5E3nAd7vUZNcyoVwdds3voHDrzO6sV75MVQARtbgn20LduXaJeulAsFsprBpHtUUk6Y%2BOF%2FzW7E%2FSsF5k75ZrzG1TJ0Z%2ByZDPpfKITo0nmYuneDT73D0gFc1p52DEJ6Avls%2F7hAI1VJMlRlM33LR3xgdVys1ZuGNW7orCC60Ai0IrswvSbLKfJuK8aroDwYH83EPgLv8X61GaJMgzF8ztdvIY%2FTpN3M6kTaie84%2BwnnEHFvGlorbAd2GuV00mwUwGYp8RbcuhOcZRv0fm1pN6Xc%2B3g3Q%2FYZmCa6LM7LLT7ssZoM8vjNueyWS55l421plUqsQy0oliy9I8Ts0YjMbgygfG9UtbFcj%2By4ndZQC7at1VOcNMp%2Budj%2FWFEssyUUrecHsl0aQxkfphxNHEF3jsJpYXLSEEkbhLcK5%2BrlbM3PyTqQr4pJyLLd%2B2zzlxZMFfVOFrJD8P87MDlBzqjsxUK%2BqFVsajaJggnbMrY0jzpy5Y7WSKdGn2QeTPMGoOLvYxHhPGvbbVNeVbFXY%2FYMPkkmXEkaKC6jNllCvuYPJ9g8tu0uLOOlH72P6BiSTiN3qSK6rnyIUv0%2B5DDpkJy9BjqkAdHYsoO3mPDRpW612ROq%2FoBWwhBVQkxSTYcqZ82iLp%2Fp%2BgxNxN2gVof1D4yQRSvh7u%2BLKE%2F7I45inv7yWTkVs5w6mIrs0436bW%2BenUFrtHQgXJ5RGdhRP88qzOKPcpduCgSecqL0EZUIMh5uK2vwqs%2FSqYGxLUZn%2FUr4%2Fo0TTpE0rS%2FVoFpQxnSMhhbGqdy7xKIUC0YKtzaLVfdaGNZK1EvzI71h&X-Amz-Signature=8e857fc86a451fa4db2256d5b8121bcff14da4e1e1580ea412eb691eef34d540&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3QW4P5J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCQeF9SR9jdq5y75dQ7pT39gdMJr%2FhWYyhJIQebvM%2FsgQIhAKHdY1KUp1U6RdXDqKXU7Yx%2FXoPYkY5qfl%2BBM1pq%2FSZiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn5TgDVRuuWsqKxkgq3AP66aLMliqYmI%2FXEcQFX%2Be%2FdmUVyQZ4%2B2tbbfdw%2BFOBpDiAU5E3nAd7vUZNcyoVwdds3voHDrzO6sV75MVQARtbgn20LduXaJeulAsFsprBpHtUUk6Y%2BOF%2FzW7E%2FSsF5k75ZrzG1TJ0Z%2ByZDPpfKITo0nmYuneDT73D0gFc1p52DEJ6Avls%2F7hAI1VJMlRlM33LR3xgdVys1ZuGNW7orCC60Ai0IrswvSbLKfJuK8aroDwYH83EPgLv8X61GaJMgzF8ztdvIY%2FTpN3M6kTaie84%2BwnnEHFvGlorbAd2GuV00mwUwGYp8RbcuhOcZRv0fm1pN6Xc%2B3g3Q%2FYZmCa6LM7LLT7ssZoM8vjNueyWS55l421plUqsQy0oliy9I8Ts0YjMbgygfG9UtbFcj%2By4ndZQC7at1VOcNMp%2Budj%2FWFEssyUUrecHsl0aQxkfphxNHEF3jsJpYXLSEEkbhLcK5%2BrlbM3PyTqQr4pJyLLd%2B2zzlxZMFfVOFrJD8P87MDlBzqjsxUK%2BqFVsajaJggnbMrY0jzpy5Y7WSKdGn2QeTPMGoOLvYxHhPGvbbVNeVbFXY%2FYMPkkmXEkaKC6jNllCvuYPJ9g8tu0uLOOlH72P6BiSTiN3qSK6rnyIUv0%2B5DDpkJy9BjqkAdHYsoO3mPDRpW612ROq%2FoBWwhBVQkxSTYcqZ82iLp%2Fp%2BgxNxN2gVof1D4yQRSvh7u%2BLKE%2F7I45inv7yWTkVs5w6mIrs0436bW%2BenUFrtHQgXJ5RGdhRP88qzOKPcpduCgSecqL0EZUIMh5uK2vwqs%2FSqYGxLUZn%2FUr4%2Fo0TTpE0rS%2FVoFpQxnSMhhbGqdy7xKIUC0YKtzaLVfdaGNZK1EvzI71h&X-Amz-Signature=2e149bd04b3489238f518196e782f1965f2b1df029f675ae1b4bf153a4afc3bd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
