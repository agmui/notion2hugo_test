---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMLNYN4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC3moleQZGXB12TDo3EQ%2BLB4GDQBdoolTXBIpGZHiKk7AIhAPfAnPmPEreQE3h4f7bAg1A1kZePAVOi1%2FaD0qnxPnTnKv8DCG4QABoMNjM3NDIzMTgzODA1IgxVnfEEs5MnW9qr%2F38q3APNagSaCPb4aRzzk9InDO%2B1PpiyznoqrPRCK0TWbmg%2B9FD%2ByuxEB5ntCvW1wYgzWuPf4rwO3%2B4BqlZ41gHrrgvuGRAoz3%2FCZM1fqEZnh%2FzfEBClB8pa9JQ969sWRkvm5a5bRHNdINFXX3xFJWcDQ7HJrRR5WNBXNsUc%2BwxPFxgOhQJXdfQ19DgaXOqJyCtBjo78kWPCSBUmdO09zf0mJQXkWmKGR11RjX2EbTmrEAUSW6DsKLnRGWl7bIQCsH00ulojc6vUmwTKsyaC48XeAejaf6F%2BEkIwpo00AYBmAxYq3iljquV3y1EIxkTZ3GGeoBWoAUCHF9ltkHudppsSopKRmiulmfZLZdwujbPGTKzfak7LRuVEuObP8I%2FBe8IcLVjNARlurfV%2BDG45N2YIsvyYvIbgIGgZUF6p3Yihf3PB9T1pcqv2Eh3y1whkI9Qu7sQh3SImq9UrCdjagbxoHB4TQt0W2h5qW44ZWkGrR7gd3MM6amrvhziKgJsTDNgtB5razTswspE3WfSutmYci20hNCu7rgG3yu69TPBpQBfmHay%2FmifNVGnvLmvKvWDWVoF%2Fd0xqbcyOuQ0lZ17DEHeTCqXCarHj1RCzPD1k23z0xnMya8Wq4KcdKqQ1MDCRsq3DBjqkAf33O8QCsyqmS8dg5xgLJxrVrt9UFy8CRbemtTmtL0DxptH5qnDvX2GE%2B56sgpHWKDNRzxibShJRHG6%2F6smV8NbDOCYMaEMUPT17JI3BlrWCL53%2B%2FX0VUJjSR%2FmR9GnaQzVAp5pwoLpffHt6yd%2FcaUJR5XLHq%2F32fN1H742XgYfEAm1mMrHMijiIbqi6LW8OcTqaBtd4TfEsAwSXPuf5xOJG370q&X-Amz-Signature=8381ac9d1b6ee5354063b551de4e987b53b9b57e87f776588599711a71b9f12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMLNYN4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC3moleQZGXB12TDo3EQ%2BLB4GDQBdoolTXBIpGZHiKk7AIhAPfAnPmPEreQE3h4f7bAg1A1kZePAVOi1%2FaD0qnxPnTnKv8DCG4QABoMNjM3NDIzMTgzODA1IgxVnfEEs5MnW9qr%2F38q3APNagSaCPb4aRzzk9InDO%2B1PpiyznoqrPRCK0TWbmg%2B9FD%2ByuxEB5ntCvW1wYgzWuPf4rwO3%2B4BqlZ41gHrrgvuGRAoz3%2FCZM1fqEZnh%2FzfEBClB8pa9JQ969sWRkvm5a5bRHNdINFXX3xFJWcDQ7HJrRR5WNBXNsUc%2BwxPFxgOhQJXdfQ19DgaXOqJyCtBjo78kWPCSBUmdO09zf0mJQXkWmKGR11RjX2EbTmrEAUSW6DsKLnRGWl7bIQCsH00ulojc6vUmwTKsyaC48XeAejaf6F%2BEkIwpo00AYBmAxYq3iljquV3y1EIxkTZ3GGeoBWoAUCHF9ltkHudppsSopKRmiulmfZLZdwujbPGTKzfak7LRuVEuObP8I%2FBe8IcLVjNARlurfV%2BDG45N2YIsvyYvIbgIGgZUF6p3Yihf3PB9T1pcqv2Eh3y1whkI9Qu7sQh3SImq9UrCdjagbxoHB4TQt0W2h5qW44ZWkGrR7gd3MM6amrvhziKgJsTDNgtB5razTswspE3WfSutmYci20hNCu7rgG3yu69TPBpQBfmHay%2FmifNVGnvLmvKvWDWVoF%2Fd0xqbcyOuQ0lZ17DEHeTCqXCarHj1RCzPD1k23z0xnMya8Wq4KcdKqQ1MDCRsq3DBjqkAf33O8QCsyqmS8dg5xgLJxrVrt9UFy8CRbemtTmtL0DxptH5qnDvX2GE%2B56sgpHWKDNRzxibShJRHG6%2F6smV8NbDOCYMaEMUPT17JI3BlrWCL53%2B%2FX0VUJjSR%2FmR9GnaQzVAp5pwoLpffHt6yd%2FcaUJR5XLHq%2F32fN1H742XgYfEAm1mMrHMijiIbqi6LW8OcTqaBtd4TfEsAwSXPuf5xOJG370q&X-Amz-Signature=ae31bd0638b58ad77183de4a82bf572244aa2dd417b6fa64778aa20a02c195d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMLNYN4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC3moleQZGXB12TDo3EQ%2BLB4GDQBdoolTXBIpGZHiKk7AIhAPfAnPmPEreQE3h4f7bAg1A1kZePAVOi1%2FaD0qnxPnTnKv8DCG4QABoMNjM3NDIzMTgzODA1IgxVnfEEs5MnW9qr%2F38q3APNagSaCPb4aRzzk9InDO%2B1PpiyznoqrPRCK0TWbmg%2B9FD%2ByuxEB5ntCvW1wYgzWuPf4rwO3%2B4BqlZ41gHrrgvuGRAoz3%2FCZM1fqEZnh%2FzfEBClB8pa9JQ969sWRkvm5a5bRHNdINFXX3xFJWcDQ7HJrRR5WNBXNsUc%2BwxPFxgOhQJXdfQ19DgaXOqJyCtBjo78kWPCSBUmdO09zf0mJQXkWmKGR11RjX2EbTmrEAUSW6DsKLnRGWl7bIQCsH00ulojc6vUmwTKsyaC48XeAejaf6F%2BEkIwpo00AYBmAxYq3iljquV3y1EIxkTZ3GGeoBWoAUCHF9ltkHudppsSopKRmiulmfZLZdwujbPGTKzfak7LRuVEuObP8I%2FBe8IcLVjNARlurfV%2BDG45N2YIsvyYvIbgIGgZUF6p3Yihf3PB9T1pcqv2Eh3y1whkI9Qu7sQh3SImq9UrCdjagbxoHB4TQt0W2h5qW44ZWkGrR7gd3MM6amrvhziKgJsTDNgtB5razTswspE3WfSutmYci20hNCu7rgG3yu69TPBpQBfmHay%2FmifNVGnvLmvKvWDWVoF%2Fd0xqbcyOuQ0lZ17DEHeTCqXCarHj1RCzPD1k23z0xnMya8Wq4KcdKqQ1MDCRsq3DBjqkAf33O8QCsyqmS8dg5xgLJxrVrt9UFy8CRbemtTmtL0DxptH5qnDvX2GE%2B56sgpHWKDNRzxibShJRHG6%2F6smV8NbDOCYMaEMUPT17JI3BlrWCL53%2B%2FX0VUJjSR%2FmR9GnaQzVAp5pwoLpffHt6yd%2FcaUJR5XLHq%2F32fN1H742XgYfEAm1mMrHMijiIbqi6LW8OcTqaBtd4TfEsAwSXPuf5xOJG370q&X-Amz-Signature=4872582ae0e42419af5e13dd67ad6b3ec5b032896e214caeabda09060a76fde5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMLNYN4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC3moleQZGXB12TDo3EQ%2BLB4GDQBdoolTXBIpGZHiKk7AIhAPfAnPmPEreQE3h4f7bAg1A1kZePAVOi1%2FaD0qnxPnTnKv8DCG4QABoMNjM3NDIzMTgzODA1IgxVnfEEs5MnW9qr%2F38q3APNagSaCPb4aRzzk9InDO%2B1PpiyznoqrPRCK0TWbmg%2B9FD%2ByuxEB5ntCvW1wYgzWuPf4rwO3%2B4BqlZ41gHrrgvuGRAoz3%2FCZM1fqEZnh%2FzfEBClB8pa9JQ969sWRkvm5a5bRHNdINFXX3xFJWcDQ7HJrRR5WNBXNsUc%2BwxPFxgOhQJXdfQ19DgaXOqJyCtBjo78kWPCSBUmdO09zf0mJQXkWmKGR11RjX2EbTmrEAUSW6DsKLnRGWl7bIQCsH00ulojc6vUmwTKsyaC48XeAejaf6F%2BEkIwpo00AYBmAxYq3iljquV3y1EIxkTZ3GGeoBWoAUCHF9ltkHudppsSopKRmiulmfZLZdwujbPGTKzfak7LRuVEuObP8I%2FBe8IcLVjNARlurfV%2BDG45N2YIsvyYvIbgIGgZUF6p3Yihf3PB9T1pcqv2Eh3y1whkI9Qu7sQh3SImq9UrCdjagbxoHB4TQt0W2h5qW44ZWkGrR7gd3MM6amrvhziKgJsTDNgtB5razTswspE3WfSutmYci20hNCu7rgG3yu69TPBpQBfmHay%2FmifNVGnvLmvKvWDWVoF%2Fd0xqbcyOuQ0lZ17DEHeTCqXCarHj1RCzPD1k23z0xnMya8Wq4KcdKqQ1MDCRsq3DBjqkAf33O8QCsyqmS8dg5xgLJxrVrt9UFy8CRbemtTmtL0DxptH5qnDvX2GE%2B56sgpHWKDNRzxibShJRHG6%2F6smV8NbDOCYMaEMUPT17JI3BlrWCL53%2B%2FX0VUJjSR%2FmR9GnaQzVAp5pwoLpffHt6yd%2FcaUJR5XLHq%2F32fN1H742XgYfEAm1mMrHMijiIbqi6LW8OcTqaBtd4TfEsAwSXPuf5xOJG370q&X-Amz-Signature=4511e359c148b25ad5e7b89122e252de957ba1f3c1429a4d71d8b7587cdc4d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMLNYN4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC3moleQZGXB12TDo3EQ%2BLB4GDQBdoolTXBIpGZHiKk7AIhAPfAnPmPEreQE3h4f7bAg1A1kZePAVOi1%2FaD0qnxPnTnKv8DCG4QABoMNjM3NDIzMTgzODA1IgxVnfEEs5MnW9qr%2F38q3APNagSaCPb4aRzzk9InDO%2B1PpiyznoqrPRCK0TWbmg%2B9FD%2ByuxEB5ntCvW1wYgzWuPf4rwO3%2B4BqlZ41gHrrgvuGRAoz3%2FCZM1fqEZnh%2FzfEBClB8pa9JQ969sWRkvm5a5bRHNdINFXX3xFJWcDQ7HJrRR5WNBXNsUc%2BwxPFxgOhQJXdfQ19DgaXOqJyCtBjo78kWPCSBUmdO09zf0mJQXkWmKGR11RjX2EbTmrEAUSW6DsKLnRGWl7bIQCsH00ulojc6vUmwTKsyaC48XeAejaf6F%2BEkIwpo00AYBmAxYq3iljquV3y1EIxkTZ3GGeoBWoAUCHF9ltkHudppsSopKRmiulmfZLZdwujbPGTKzfak7LRuVEuObP8I%2FBe8IcLVjNARlurfV%2BDG45N2YIsvyYvIbgIGgZUF6p3Yihf3PB9T1pcqv2Eh3y1whkI9Qu7sQh3SImq9UrCdjagbxoHB4TQt0W2h5qW44ZWkGrR7gd3MM6amrvhziKgJsTDNgtB5razTswspE3WfSutmYci20hNCu7rgG3yu69TPBpQBfmHay%2FmifNVGnvLmvKvWDWVoF%2Fd0xqbcyOuQ0lZ17DEHeTCqXCarHj1RCzPD1k23z0xnMya8Wq4KcdKqQ1MDCRsq3DBjqkAf33O8QCsyqmS8dg5xgLJxrVrt9UFy8CRbemtTmtL0DxptH5qnDvX2GE%2B56sgpHWKDNRzxibShJRHG6%2F6smV8NbDOCYMaEMUPT17JI3BlrWCL53%2B%2FX0VUJjSR%2FmR9GnaQzVAp5pwoLpffHt6yd%2FcaUJR5XLHq%2F32fN1H742XgYfEAm1mMrHMijiIbqi6LW8OcTqaBtd4TfEsAwSXPuf5xOJG370q&X-Amz-Signature=6ab0fffa4cf067853992bae43ce0afc2f71f091972dc83c0c1017f4eaffeee1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMLNYN4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC3moleQZGXB12TDo3EQ%2BLB4GDQBdoolTXBIpGZHiKk7AIhAPfAnPmPEreQE3h4f7bAg1A1kZePAVOi1%2FaD0qnxPnTnKv8DCG4QABoMNjM3NDIzMTgzODA1IgxVnfEEs5MnW9qr%2F38q3APNagSaCPb4aRzzk9InDO%2B1PpiyznoqrPRCK0TWbmg%2B9FD%2ByuxEB5ntCvW1wYgzWuPf4rwO3%2B4BqlZ41gHrrgvuGRAoz3%2FCZM1fqEZnh%2FzfEBClB8pa9JQ969sWRkvm5a5bRHNdINFXX3xFJWcDQ7HJrRR5WNBXNsUc%2BwxPFxgOhQJXdfQ19DgaXOqJyCtBjo78kWPCSBUmdO09zf0mJQXkWmKGR11RjX2EbTmrEAUSW6DsKLnRGWl7bIQCsH00ulojc6vUmwTKsyaC48XeAejaf6F%2BEkIwpo00AYBmAxYq3iljquV3y1EIxkTZ3GGeoBWoAUCHF9ltkHudppsSopKRmiulmfZLZdwujbPGTKzfak7LRuVEuObP8I%2FBe8IcLVjNARlurfV%2BDG45N2YIsvyYvIbgIGgZUF6p3Yihf3PB9T1pcqv2Eh3y1whkI9Qu7sQh3SImq9UrCdjagbxoHB4TQt0W2h5qW44ZWkGrR7gd3MM6amrvhziKgJsTDNgtB5razTswspE3WfSutmYci20hNCu7rgG3yu69TPBpQBfmHay%2FmifNVGnvLmvKvWDWVoF%2Fd0xqbcyOuQ0lZ17DEHeTCqXCarHj1RCzPD1k23z0xnMya8Wq4KcdKqQ1MDCRsq3DBjqkAf33O8QCsyqmS8dg5xgLJxrVrt9UFy8CRbemtTmtL0DxptH5qnDvX2GE%2B56sgpHWKDNRzxibShJRHG6%2F6smV8NbDOCYMaEMUPT17JI3BlrWCL53%2B%2FX0VUJjSR%2FmR9GnaQzVAp5pwoLpffHt6yd%2FcaUJR5XLHq%2F32fN1H742XgYfEAm1mMrHMijiIbqi6LW8OcTqaBtd4TfEsAwSXPuf5xOJG370q&X-Amz-Signature=2953d5e77132cfc0d53b03a19a650efb960a2aa8b74f6878592ea84e90c0ee04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMLNYN4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC3moleQZGXB12TDo3EQ%2BLB4GDQBdoolTXBIpGZHiKk7AIhAPfAnPmPEreQE3h4f7bAg1A1kZePAVOi1%2FaD0qnxPnTnKv8DCG4QABoMNjM3NDIzMTgzODA1IgxVnfEEs5MnW9qr%2F38q3APNagSaCPb4aRzzk9InDO%2B1PpiyznoqrPRCK0TWbmg%2B9FD%2ByuxEB5ntCvW1wYgzWuPf4rwO3%2B4BqlZ41gHrrgvuGRAoz3%2FCZM1fqEZnh%2FzfEBClB8pa9JQ969sWRkvm5a5bRHNdINFXX3xFJWcDQ7HJrRR5WNBXNsUc%2BwxPFxgOhQJXdfQ19DgaXOqJyCtBjo78kWPCSBUmdO09zf0mJQXkWmKGR11RjX2EbTmrEAUSW6DsKLnRGWl7bIQCsH00ulojc6vUmwTKsyaC48XeAejaf6F%2BEkIwpo00AYBmAxYq3iljquV3y1EIxkTZ3GGeoBWoAUCHF9ltkHudppsSopKRmiulmfZLZdwujbPGTKzfak7LRuVEuObP8I%2FBe8IcLVjNARlurfV%2BDG45N2YIsvyYvIbgIGgZUF6p3Yihf3PB9T1pcqv2Eh3y1whkI9Qu7sQh3SImq9UrCdjagbxoHB4TQt0W2h5qW44ZWkGrR7gd3MM6amrvhziKgJsTDNgtB5razTswspE3WfSutmYci20hNCu7rgG3yu69TPBpQBfmHay%2FmifNVGnvLmvKvWDWVoF%2Fd0xqbcyOuQ0lZ17DEHeTCqXCarHj1RCzPD1k23z0xnMya8Wq4KcdKqQ1MDCRsq3DBjqkAf33O8QCsyqmS8dg5xgLJxrVrt9UFy8CRbemtTmtL0DxptH5qnDvX2GE%2B56sgpHWKDNRzxibShJRHG6%2F6smV8NbDOCYMaEMUPT17JI3BlrWCL53%2B%2FX0VUJjSR%2FmR9GnaQzVAp5pwoLpffHt6yd%2FcaUJR5XLHq%2F32fN1H742XgYfEAm1mMrHMijiIbqi6LW8OcTqaBtd4TfEsAwSXPuf5xOJG370q&X-Amz-Signature=344a513041fef58eb208c36f23902cf438996b5e44818e25ce1482d6e34d2966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
