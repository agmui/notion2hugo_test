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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQFEINV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD8iKhIdNTOoo%2BUlH7uUlrxDS97kBlGSNmUAS%2FCreLuBQIgeI6Tje4VqOOh2hj1SeJoVYo%2BGYMS7mJrzyT7a9PInckq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLh05o4Vm2MtFVRv8yrcAylOF%2BYxrzMPUnWBsBGHRuqRWExCO%2FNgCwpFl8fjiR3mRSlk%2By5SC84cDdRdldnUbSzPCPDfZzy%2Bmq7iAt5gysXDVBbwMKz%2BpZ3sJnTo9PCOozL3oNCLYjrDVj5Pg9c%2FmjrT7BA3IwtNaTiVfVhgR%2FIaswrEuS8WCawvanEDwBkzYTKaZFMHYXw5mpIMkKfze%2BY3pOrFCed%2BIKDU7%2BzmpD%2FM9D7gXP0r3T1Qu33xQbP7TRN8zfVwJgNEvCai8ATHFyiszMR3F5%2FQkCKtq2%2BNuTa4nNuF9Xu0YoWPX0Z5Bh9vFDHVdUEUBPrgRQVXi6cCt%2BL3hRSur3o5Br1PPLllUgbAc9Ju%2BOQ%2Fc%2B1LFeQ97wC3eh0NBmX1yZpHxyrNo3lbeNUgUi1dGBS1Y2YbiRaMvAirw8hCtE1oOM4GL34T%2FwEUcvHKe%2FbWK61sRXok7bk2F%2BbSejr8YFuCpwwMyec9YqdvC%2FY2vWWXLLIkIz%2BHk%2FdjGt8ai7SNYaboIRV%2By52v1Hb09f4BOWommpKCB6JTjjNRUUsaMvV%2FfguQsiTkpPgRpOCJmyUwFodf7oiSt61S3nP%2B1LafF2UKw9w6x80Rl03BMgMGuFLfq0gelEtVp3EvFtn57AnWEt5kBfpFMMT3i8QGOqUBaPm%2FgM7SXihXqCOWMr3W6RSriVJPXBr%2Fxi95K1wjNUiVEtBRKrrUytV1a5lD3kYL3ogBvuCyecUcGQH1fMydBnhoFr9AK7FsIUDLMceAQ8JkUSk64u55i2BMlupedPLogaW4PzdZNo1GZRhw%2BjD%2FkiJNr%2BJTtZKR9pIo8U1S33qNwnqKcgj4X6kO7wtoJwYJIxfACnlFkay8UNZ0KusfIeMfdA%2F9&X-Amz-Signature=f9876714dbb0f7da35228c617976a74e5eb86b58a6505df409a3ffee9ab40c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQFEINV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD8iKhIdNTOoo%2BUlH7uUlrxDS97kBlGSNmUAS%2FCreLuBQIgeI6Tje4VqOOh2hj1SeJoVYo%2BGYMS7mJrzyT7a9PInckq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLh05o4Vm2MtFVRv8yrcAylOF%2BYxrzMPUnWBsBGHRuqRWExCO%2FNgCwpFl8fjiR3mRSlk%2By5SC84cDdRdldnUbSzPCPDfZzy%2Bmq7iAt5gysXDVBbwMKz%2BpZ3sJnTo9PCOozL3oNCLYjrDVj5Pg9c%2FmjrT7BA3IwtNaTiVfVhgR%2FIaswrEuS8WCawvanEDwBkzYTKaZFMHYXw5mpIMkKfze%2BY3pOrFCed%2BIKDU7%2BzmpD%2FM9D7gXP0r3T1Qu33xQbP7TRN8zfVwJgNEvCai8ATHFyiszMR3F5%2FQkCKtq2%2BNuTa4nNuF9Xu0YoWPX0Z5Bh9vFDHVdUEUBPrgRQVXi6cCt%2BL3hRSur3o5Br1PPLllUgbAc9Ju%2BOQ%2Fc%2B1LFeQ97wC3eh0NBmX1yZpHxyrNo3lbeNUgUi1dGBS1Y2YbiRaMvAirw8hCtE1oOM4GL34T%2FwEUcvHKe%2FbWK61sRXok7bk2F%2BbSejr8YFuCpwwMyec9YqdvC%2FY2vWWXLLIkIz%2BHk%2FdjGt8ai7SNYaboIRV%2By52v1Hb09f4BOWommpKCB6JTjjNRUUsaMvV%2FfguQsiTkpPgRpOCJmyUwFodf7oiSt61S3nP%2B1LafF2UKw9w6x80Rl03BMgMGuFLfq0gelEtVp3EvFtn57AnWEt5kBfpFMMT3i8QGOqUBaPm%2FgM7SXihXqCOWMr3W6RSriVJPXBr%2Fxi95K1wjNUiVEtBRKrrUytV1a5lD3kYL3ogBvuCyecUcGQH1fMydBnhoFr9AK7FsIUDLMceAQ8JkUSk64u55i2BMlupedPLogaW4PzdZNo1GZRhw%2BjD%2FkiJNr%2BJTtZKR9pIo8U1S33qNwnqKcgj4X6kO7wtoJwYJIxfACnlFkay8UNZ0KusfIeMfdA%2F9&X-Amz-Signature=a2f261b81a2fb5d428935b73eafeb8f516ed49cecc27bdc8d224b82d6e5dfd9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQFEINV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD8iKhIdNTOoo%2BUlH7uUlrxDS97kBlGSNmUAS%2FCreLuBQIgeI6Tje4VqOOh2hj1SeJoVYo%2BGYMS7mJrzyT7a9PInckq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLh05o4Vm2MtFVRv8yrcAylOF%2BYxrzMPUnWBsBGHRuqRWExCO%2FNgCwpFl8fjiR3mRSlk%2By5SC84cDdRdldnUbSzPCPDfZzy%2Bmq7iAt5gysXDVBbwMKz%2BpZ3sJnTo9PCOozL3oNCLYjrDVj5Pg9c%2FmjrT7BA3IwtNaTiVfVhgR%2FIaswrEuS8WCawvanEDwBkzYTKaZFMHYXw5mpIMkKfze%2BY3pOrFCed%2BIKDU7%2BzmpD%2FM9D7gXP0r3T1Qu33xQbP7TRN8zfVwJgNEvCai8ATHFyiszMR3F5%2FQkCKtq2%2BNuTa4nNuF9Xu0YoWPX0Z5Bh9vFDHVdUEUBPrgRQVXi6cCt%2BL3hRSur3o5Br1PPLllUgbAc9Ju%2BOQ%2Fc%2B1LFeQ97wC3eh0NBmX1yZpHxyrNo3lbeNUgUi1dGBS1Y2YbiRaMvAirw8hCtE1oOM4GL34T%2FwEUcvHKe%2FbWK61sRXok7bk2F%2BbSejr8YFuCpwwMyec9YqdvC%2FY2vWWXLLIkIz%2BHk%2FdjGt8ai7SNYaboIRV%2By52v1Hb09f4BOWommpKCB6JTjjNRUUsaMvV%2FfguQsiTkpPgRpOCJmyUwFodf7oiSt61S3nP%2B1LafF2UKw9w6x80Rl03BMgMGuFLfq0gelEtVp3EvFtn57AnWEt5kBfpFMMT3i8QGOqUBaPm%2FgM7SXihXqCOWMr3W6RSriVJPXBr%2Fxi95K1wjNUiVEtBRKrrUytV1a5lD3kYL3ogBvuCyecUcGQH1fMydBnhoFr9AK7FsIUDLMceAQ8JkUSk64u55i2BMlupedPLogaW4PzdZNo1GZRhw%2BjD%2FkiJNr%2BJTtZKR9pIo8U1S33qNwnqKcgj4X6kO7wtoJwYJIxfACnlFkay8UNZ0KusfIeMfdA%2F9&X-Amz-Signature=862a61cf02b32ff046550dfceef0521d329ffdd05d992f3c914857bc314e7bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQFEINV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD8iKhIdNTOoo%2BUlH7uUlrxDS97kBlGSNmUAS%2FCreLuBQIgeI6Tje4VqOOh2hj1SeJoVYo%2BGYMS7mJrzyT7a9PInckq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLh05o4Vm2MtFVRv8yrcAylOF%2BYxrzMPUnWBsBGHRuqRWExCO%2FNgCwpFl8fjiR3mRSlk%2By5SC84cDdRdldnUbSzPCPDfZzy%2Bmq7iAt5gysXDVBbwMKz%2BpZ3sJnTo9PCOozL3oNCLYjrDVj5Pg9c%2FmjrT7BA3IwtNaTiVfVhgR%2FIaswrEuS8WCawvanEDwBkzYTKaZFMHYXw5mpIMkKfze%2BY3pOrFCed%2BIKDU7%2BzmpD%2FM9D7gXP0r3T1Qu33xQbP7TRN8zfVwJgNEvCai8ATHFyiszMR3F5%2FQkCKtq2%2BNuTa4nNuF9Xu0YoWPX0Z5Bh9vFDHVdUEUBPrgRQVXi6cCt%2BL3hRSur3o5Br1PPLllUgbAc9Ju%2BOQ%2Fc%2B1LFeQ97wC3eh0NBmX1yZpHxyrNo3lbeNUgUi1dGBS1Y2YbiRaMvAirw8hCtE1oOM4GL34T%2FwEUcvHKe%2FbWK61sRXok7bk2F%2BbSejr8YFuCpwwMyec9YqdvC%2FY2vWWXLLIkIz%2BHk%2FdjGt8ai7SNYaboIRV%2By52v1Hb09f4BOWommpKCB6JTjjNRUUsaMvV%2FfguQsiTkpPgRpOCJmyUwFodf7oiSt61S3nP%2B1LafF2UKw9w6x80Rl03BMgMGuFLfq0gelEtVp3EvFtn57AnWEt5kBfpFMMT3i8QGOqUBaPm%2FgM7SXihXqCOWMr3W6RSriVJPXBr%2Fxi95K1wjNUiVEtBRKrrUytV1a5lD3kYL3ogBvuCyecUcGQH1fMydBnhoFr9AK7FsIUDLMceAQ8JkUSk64u55i2BMlupedPLogaW4PzdZNo1GZRhw%2BjD%2FkiJNr%2BJTtZKR9pIo8U1S33qNwnqKcgj4X6kO7wtoJwYJIxfACnlFkay8UNZ0KusfIeMfdA%2F9&X-Amz-Signature=979558210b90ba73b586d3ef34dd78f0a905bc9a96389ae19119ad81c81f60be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQFEINV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD8iKhIdNTOoo%2BUlH7uUlrxDS97kBlGSNmUAS%2FCreLuBQIgeI6Tje4VqOOh2hj1SeJoVYo%2BGYMS7mJrzyT7a9PInckq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLh05o4Vm2MtFVRv8yrcAylOF%2BYxrzMPUnWBsBGHRuqRWExCO%2FNgCwpFl8fjiR3mRSlk%2By5SC84cDdRdldnUbSzPCPDfZzy%2Bmq7iAt5gysXDVBbwMKz%2BpZ3sJnTo9PCOozL3oNCLYjrDVj5Pg9c%2FmjrT7BA3IwtNaTiVfVhgR%2FIaswrEuS8WCawvanEDwBkzYTKaZFMHYXw5mpIMkKfze%2BY3pOrFCed%2BIKDU7%2BzmpD%2FM9D7gXP0r3T1Qu33xQbP7TRN8zfVwJgNEvCai8ATHFyiszMR3F5%2FQkCKtq2%2BNuTa4nNuF9Xu0YoWPX0Z5Bh9vFDHVdUEUBPrgRQVXi6cCt%2BL3hRSur3o5Br1PPLllUgbAc9Ju%2BOQ%2Fc%2B1LFeQ97wC3eh0NBmX1yZpHxyrNo3lbeNUgUi1dGBS1Y2YbiRaMvAirw8hCtE1oOM4GL34T%2FwEUcvHKe%2FbWK61sRXok7bk2F%2BbSejr8YFuCpwwMyec9YqdvC%2FY2vWWXLLIkIz%2BHk%2FdjGt8ai7SNYaboIRV%2By52v1Hb09f4BOWommpKCB6JTjjNRUUsaMvV%2FfguQsiTkpPgRpOCJmyUwFodf7oiSt61S3nP%2B1LafF2UKw9w6x80Rl03BMgMGuFLfq0gelEtVp3EvFtn57AnWEt5kBfpFMMT3i8QGOqUBaPm%2FgM7SXihXqCOWMr3W6RSriVJPXBr%2Fxi95K1wjNUiVEtBRKrrUytV1a5lD3kYL3ogBvuCyecUcGQH1fMydBnhoFr9AK7FsIUDLMceAQ8JkUSk64u55i2BMlupedPLogaW4PzdZNo1GZRhw%2BjD%2FkiJNr%2BJTtZKR9pIo8U1S33qNwnqKcgj4X6kO7wtoJwYJIxfACnlFkay8UNZ0KusfIeMfdA%2F9&X-Amz-Signature=ed8783f30a079ee1b6d576b264f5c7d1aaec921f547a5db65cef6fb38ee6696b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQFEINV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD8iKhIdNTOoo%2BUlH7uUlrxDS97kBlGSNmUAS%2FCreLuBQIgeI6Tje4VqOOh2hj1SeJoVYo%2BGYMS7mJrzyT7a9PInckq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLh05o4Vm2MtFVRv8yrcAylOF%2BYxrzMPUnWBsBGHRuqRWExCO%2FNgCwpFl8fjiR3mRSlk%2By5SC84cDdRdldnUbSzPCPDfZzy%2Bmq7iAt5gysXDVBbwMKz%2BpZ3sJnTo9PCOozL3oNCLYjrDVj5Pg9c%2FmjrT7BA3IwtNaTiVfVhgR%2FIaswrEuS8WCawvanEDwBkzYTKaZFMHYXw5mpIMkKfze%2BY3pOrFCed%2BIKDU7%2BzmpD%2FM9D7gXP0r3T1Qu33xQbP7TRN8zfVwJgNEvCai8ATHFyiszMR3F5%2FQkCKtq2%2BNuTa4nNuF9Xu0YoWPX0Z5Bh9vFDHVdUEUBPrgRQVXi6cCt%2BL3hRSur3o5Br1PPLllUgbAc9Ju%2BOQ%2Fc%2B1LFeQ97wC3eh0NBmX1yZpHxyrNo3lbeNUgUi1dGBS1Y2YbiRaMvAirw8hCtE1oOM4GL34T%2FwEUcvHKe%2FbWK61sRXok7bk2F%2BbSejr8YFuCpwwMyec9YqdvC%2FY2vWWXLLIkIz%2BHk%2FdjGt8ai7SNYaboIRV%2By52v1Hb09f4BOWommpKCB6JTjjNRUUsaMvV%2FfguQsiTkpPgRpOCJmyUwFodf7oiSt61S3nP%2B1LafF2UKw9w6x80Rl03BMgMGuFLfq0gelEtVp3EvFtn57AnWEt5kBfpFMMT3i8QGOqUBaPm%2FgM7SXihXqCOWMr3W6RSriVJPXBr%2Fxi95K1wjNUiVEtBRKrrUytV1a5lD3kYL3ogBvuCyecUcGQH1fMydBnhoFr9AK7FsIUDLMceAQ8JkUSk64u55i2BMlupedPLogaW4PzdZNo1GZRhw%2BjD%2FkiJNr%2BJTtZKR9pIo8U1S33qNwnqKcgj4X6kO7wtoJwYJIxfACnlFkay8UNZ0KusfIeMfdA%2F9&X-Amz-Signature=8e0e3d5f14d4ccf61dd9755b9b897be5d3ab789063c11a5c3b1f6bc93a6e0939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQFEINV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD8iKhIdNTOoo%2BUlH7uUlrxDS97kBlGSNmUAS%2FCreLuBQIgeI6Tje4VqOOh2hj1SeJoVYo%2BGYMS7mJrzyT7a9PInckq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLh05o4Vm2MtFVRv8yrcAylOF%2BYxrzMPUnWBsBGHRuqRWExCO%2FNgCwpFl8fjiR3mRSlk%2By5SC84cDdRdldnUbSzPCPDfZzy%2Bmq7iAt5gysXDVBbwMKz%2BpZ3sJnTo9PCOozL3oNCLYjrDVj5Pg9c%2FmjrT7BA3IwtNaTiVfVhgR%2FIaswrEuS8WCawvanEDwBkzYTKaZFMHYXw5mpIMkKfze%2BY3pOrFCed%2BIKDU7%2BzmpD%2FM9D7gXP0r3T1Qu33xQbP7TRN8zfVwJgNEvCai8ATHFyiszMR3F5%2FQkCKtq2%2BNuTa4nNuF9Xu0YoWPX0Z5Bh9vFDHVdUEUBPrgRQVXi6cCt%2BL3hRSur3o5Br1PPLllUgbAc9Ju%2BOQ%2Fc%2B1LFeQ97wC3eh0NBmX1yZpHxyrNo3lbeNUgUi1dGBS1Y2YbiRaMvAirw8hCtE1oOM4GL34T%2FwEUcvHKe%2FbWK61sRXok7bk2F%2BbSejr8YFuCpwwMyec9YqdvC%2FY2vWWXLLIkIz%2BHk%2FdjGt8ai7SNYaboIRV%2By52v1Hb09f4BOWommpKCB6JTjjNRUUsaMvV%2FfguQsiTkpPgRpOCJmyUwFodf7oiSt61S3nP%2B1LafF2UKw9w6x80Rl03BMgMGuFLfq0gelEtVp3EvFtn57AnWEt5kBfpFMMT3i8QGOqUBaPm%2FgM7SXihXqCOWMr3W6RSriVJPXBr%2Fxi95K1wjNUiVEtBRKrrUytV1a5lD3kYL3ogBvuCyecUcGQH1fMydBnhoFr9AK7FsIUDLMceAQ8JkUSk64u55i2BMlupedPLogaW4PzdZNo1GZRhw%2BjD%2FkiJNr%2BJTtZKR9pIo8U1S33qNwnqKcgj4X6kO7wtoJwYJIxfACnlFkay8UNZ0KusfIeMfdA%2F9&X-Amz-Signature=b87f621f59035638d86375341d4d1c8e8da4e0b890750e5f0ef2bb3be2369a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
