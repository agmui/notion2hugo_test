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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZXOKGB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0nnKUwDQuwCRxwAEf%2BBK%2B2BeWTU1dNCuEPU5OQYFybAiAz0pYcyGUu2LA%2BP%2BqUi9ZY%2F3AySxeKdoEr5pwk5VDVPyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkGVwMmo4k16UGFaoKtwDoII3FOo2ZWwBAPkoPQ4lzTmJ%2FCnlMnViZeWejaXY1Wva4inBq0RONGnT2zPvAYCsgzuKfNzY%2FIe1LwrCEszZhSmhkJQQ4tA8s16BVoKCWNfV8oV1TlUfch4uwx%2Bk8m%2FzG1tB3oH1e8nOOkh2ZYP%2FiqGe51fJIzKjduolCBQ%2Fx6v3%2FXtREImnCiSotBsaG0DT5w00cXAi8%2FabMg4XdfisN%2BWazjMI2e15cJRKxHmRNztZFQ8dmJ5WU64iRNhMKJy7sof34%2FCKYpgkSUjE9sstkcWMzqwyMSzo7lMaA2RuqwBlN7dbwReoro6Zdp4ouAzmXVw3x1P%2FMQZbsSnemuAxqOP%2FCn96NHROuDJPqyMXWk2bg%2BKfPW4hNOuigEgSezpwjntJokNXDniuVt4pjZmguxZvupIpgXqjqMQw7A4MUWwbFl%2FK1kzhtPvTa%2FbyLTf4%2Fg0GfmCopHjPvW6ursMlh70bYWFw1pI%2F3j7RzySCET702Dkp32UC%2F2Cg%2Bxk5R1dAy6HfzCE7fRRWRIvr3EqlbUadaaXr5fAgbBUqPT9rrQiXX66cneRFj2Q3GFONVOUNGzIM%2F4r33U0tsC14yULF35E3084kK2pDHBw439cJTHgqvGYXj3ujyKBzMlsw07XGwwY6pgGWrMjdUfNmjzeeM61yd20dro4FQ6EcTFM%2BCqgB79n%2BkGMnJ7wFY7C%2FKZYZCQPr4vM%2F%2BgSzS9o69DOM3%2Bb6NcNclRKQwMq2zSvR3MFA3mjlFPLTovs2%2BM1gsbmgroScoS0GV5sJvgxwTEjYbWmplH9jdvqdUkEn2Bt9CDTssJDOIdsfen1Xrd7sD6yyb1G7ZBPN3n6Q5FrPVjFA%2Bl5UzY3vbQkXSOBS&X-Amz-Signature=a7bc934df14d199a91207f783b0dbb9a649fde996258d0e3ce3e5989dba69409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZXOKGB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0nnKUwDQuwCRxwAEf%2BBK%2B2BeWTU1dNCuEPU5OQYFybAiAz0pYcyGUu2LA%2BP%2BqUi9ZY%2F3AySxeKdoEr5pwk5VDVPyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkGVwMmo4k16UGFaoKtwDoII3FOo2ZWwBAPkoPQ4lzTmJ%2FCnlMnViZeWejaXY1Wva4inBq0RONGnT2zPvAYCsgzuKfNzY%2FIe1LwrCEszZhSmhkJQQ4tA8s16BVoKCWNfV8oV1TlUfch4uwx%2Bk8m%2FzG1tB3oH1e8nOOkh2ZYP%2FiqGe51fJIzKjduolCBQ%2Fx6v3%2FXtREImnCiSotBsaG0DT5w00cXAi8%2FabMg4XdfisN%2BWazjMI2e15cJRKxHmRNztZFQ8dmJ5WU64iRNhMKJy7sof34%2FCKYpgkSUjE9sstkcWMzqwyMSzo7lMaA2RuqwBlN7dbwReoro6Zdp4ouAzmXVw3x1P%2FMQZbsSnemuAxqOP%2FCn96NHROuDJPqyMXWk2bg%2BKfPW4hNOuigEgSezpwjntJokNXDniuVt4pjZmguxZvupIpgXqjqMQw7A4MUWwbFl%2FK1kzhtPvTa%2FbyLTf4%2Fg0GfmCopHjPvW6ursMlh70bYWFw1pI%2F3j7RzySCET702Dkp32UC%2F2Cg%2Bxk5R1dAy6HfzCE7fRRWRIvr3EqlbUadaaXr5fAgbBUqPT9rrQiXX66cneRFj2Q3GFONVOUNGzIM%2F4r33U0tsC14yULF35E3084kK2pDHBw439cJTHgqvGYXj3ujyKBzMlsw07XGwwY6pgGWrMjdUfNmjzeeM61yd20dro4FQ6EcTFM%2BCqgB79n%2BkGMnJ7wFY7C%2FKZYZCQPr4vM%2F%2BgSzS9o69DOM3%2Bb6NcNclRKQwMq2zSvR3MFA3mjlFPLTovs2%2BM1gsbmgroScoS0GV5sJvgxwTEjYbWmplH9jdvqdUkEn2Bt9CDTssJDOIdsfen1Xrd7sD6yyb1G7ZBPN3n6Q5FrPVjFA%2Bl5UzY3vbQkXSOBS&X-Amz-Signature=da62453389d547de7c408332c7f202b4e4d49d5f986ab6267bd372f672f364c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZXOKGB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0nnKUwDQuwCRxwAEf%2BBK%2B2BeWTU1dNCuEPU5OQYFybAiAz0pYcyGUu2LA%2BP%2BqUi9ZY%2F3AySxeKdoEr5pwk5VDVPyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkGVwMmo4k16UGFaoKtwDoII3FOo2ZWwBAPkoPQ4lzTmJ%2FCnlMnViZeWejaXY1Wva4inBq0RONGnT2zPvAYCsgzuKfNzY%2FIe1LwrCEszZhSmhkJQQ4tA8s16BVoKCWNfV8oV1TlUfch4uwx%2Bk8m%2FzG1tB3oH1e8nOOkh2ZYP%2FiqGe51fJIzKjduolCBQ%2Fx6v3%2FXtREImnCiSotBsaG0DT5w00cXAi8%2FabMg4XdfisN%2BWazjMI2e15cJRKxHmRNztZFQ8dmJ5WU64iRNhMKJy7sof34%2FCKYpgkSUjE9sstkcWMzqwyMSzo7lMaA2RuqwBlN7dbwReoro6Zdp4ouAzmXVw3x1P%2FMQZbsSnemuAxqOP%2FCn96NHROuDJPqyMXWk2bg%2BKfPW4hNOuigEgSezpwjntJokNXDniuVt4pjZmguxZvupIpgXqjqMQw7A4MUWwbFl%2FK1kzhtPvTa%2FbyLTf4%2Fg0GfmCopHjPvW6ursMlh70bYWFw1pI%2F3j7RzySCET702Dkp32UC%2F2Cg%2Bxk5R1dAy6HfzCE7fRRWRIvr3EqlbUadaaXr5fAgbBUqPT9rrQiXX66cneRFj2Q3GFONVOUNGzIM%2F4r33U0tsC14yULF35E3084kK2pDHBw439cJTHgqvGYXj3ujyKBzMlsw07XGwwY6pgGWrMjdUfNmjzeeM61yd20dro4FQ6EcTFM%2BCqgB79n%2BkGMnJ7wFY7C%2FKZYZCQPr4vM%2F%2BgSzS9o69DOM3%2Bb6NcNclRKQwMq2zSvR3MFA3mjlFPLTovs2%2BM1gsbmgroScoS0GV5sJvgxwTEjYbWmplH9jdvqdUkEn2Bt9CDTssJDOIdsfen1Xrd7sD6yyb1G7ZBPN3n6Q5FrPVjFA%2Bl5UzY3vbQkXSOBS&X-Amz-Signature=9496f07e01da0491e8591e7ffd0c1a3be98b1c6c449b1891e9bb582cfef32dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZXOKGB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0nnKUwDQuwCRxwAEf%2BBK%2B2BeWTU1dNCuEPU5OQYFybAiAz0pYcyGUu2LA%2BP%2BqUi9ZY%2F3AySxeKdoEr5pwk5VDVPyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkGVwMmo4k16UGFaoKtwDoII3FOo2ZWwBAPkoPQ4lzTmJ%2FCnlMnViZeWejaXY1Wva4inBq0RONGnT2zPvAYCsgzuKfNzY%2FIe1LwrCEszZhSmhkJQQ4tA8s16BVoKCWNfV8oV1TlUfch4uwx%2Bk8m%2FzG1tB3oH1e8nOOkh2ZYP%2FiqGe51fJIzKjduolCBQ%2Fx6v3%2FXtREImnCiSotBsaG0DT5w00cXAi8%2FabMg4XdfisN%2BWazjMI2e15cJRKxHmRNztZFQ8dmJ5WU64iRNhMKJy7sof34%2FCKYpgkSUjE9sstkcWMzqwyMSzo7lMaA2RuqwBlN7dbwReoro6Zdp4ouAzmXVw3x1P%2FMQZbsSnemuAxqOP%2FCn96NHROuDJPqyMXWk2bg%2BKfPW4hNOuigEgSezpwjntJokNXDniuVt4pjZmguxZvupIpgXqjqMQw7A4MUWwbFl%2FK1kzhtPvTa%2FbyLTf4%2Fg0GfmCopHjPvW6ursMlh70bYWFw1pI%2F3j7RzySCET702Dkp32UC%2F2Cg%2Bxk5R1dAy6HfzCE7fRRWRIvr3EqlbUadaaXr5fAgbBUqPT9rrQiXX66cneRFj2Q3GFONVOUNGzIM%2F4r33U0tsC14yULF35E3084kK2pDHBw439cJTHgqvGYXj3ujyKBzMlsw07XGwwY6pgGWrMjdUfNmjzeeM61yd20dro4FQ6EcTFM%2BCqgB79n%2BkGMnJ7wFY7C%2FKZYZCQPr4vM%2F%2BgSzS9o69DOM3%2Bb6NcNclRKQwMq2zSvR3MFA3mjlFPLTovs2%2BM1gsbmgroScoS0GV5sJvgxwTEjYbWmplH9jdvqdUkEn2Bt9CDTssJDOIdsfen1Xrd7sD6yyb1G7ZBPN3n6Q5FrPVjFA%2Bl5UzY3vbQkXSOBS&X-Amz-Signature=d2c088afbee9a903b48c4447ae9ca7bc01d03cb880b7693bfd686c7beed83fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZXOKGB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0nnKUwDQuwCRxwAEf%2BBK%2B2BeWTU1dNCuEPU5OQYFybAiAz0pYcyGUu2LA%2BP%2BqUi9ZY%2F3AySxeKdoEr5pwk5VDVPyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkGVwMmo4k16UGFaoKtwDoII3FOo2ZWwBAPkoPQ4lzTmJ%2FCnlMnViZeWejaXY1Wva4inBq0RONGnT2zPvAYCsgzuKfNzY%2FIe1LwrCEszZhSmhkJQQ4tA8s16BVoKCWNfV8oV1TlUfch4uwx%2Bk8m%2FzG1tB3oH1e8nOOkh2ZYP%2FiqGe51fJIzKjduolCBQ%2Fx6v3%2FXtREImnCiSotBsaG0DT5w00cXAi8%2FabMg4XdfisN%2BWazjMI2e15cJRKxHmRNztZFQ8dmJ5WU64iRNhMKJy7sof34%2FCKYpgkSUjE9sstkcWMzqwyMSzo7lMaA2RuqwBlN7dbwReoro6Zdp4ouAzmXVw3x1P%2FMQZbsSnemuAxqOP%2FCn96NHROuDJPqyMXWk2bg%2BKfPW4hNOuigEgSezpwjntJokNXDniuVt4pjZmguxZvupIpgXqjqMQw7A4MUWwbFl%2FK1kzhtPvTa%2FbyLTf4%2Fg0GfmCopHjPvW6ursMlh70bYWFw1pI%2F3j7RzySCET702Dkp32UC%2F2Cg%2Bxk5R1dAy6HfzCE7fRRWRIvr3EqlbUadaaXr5fAgbBUqPT9rrQiXX66cneRFj2Q3GFONVOUNGzIM%2F4r33U0tsC14yULF35E3084kK2pDHBw439cJTHgqvGYXj3ujyKBzMlsw07XGwwY6pgGWrMjdUfNmjzeeM61yd20dro4FQ6EcTFM%2BCqgB79n%2BkGMnJ7wFY7C%2FKZYZCQPr4vM%2F%2BgSzS9o69DOM3%2Bb6NcNclRKQwMq2zSvR3MFA3mjlFPLTovs2%2BM1gsbmgroScoS0GV5sJvgxwTEjYbWmplH9jdvqdUkEn2Bt9CDTssJDOIdsfen1Xrd7sD6yyb1G7ZBPN3n6Q5FrPVjFA%2Bl5UzY3vbQkXSOBS&X-Amz-Signature=d6eb178ecafddca0c6a42deb19e39030a0a05ee59f22b8c42b6b484b0bafd4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZXOKGB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0nnKUwDQuwCRxwAEf%2BBK%2B2BeWTU1dNCuEPU5OQYFybAiAz0pYcyGUu2LA%2BP%2BqUi9ZY%2F3AySxeKdoEr5pwk5VDVPyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkGVwMmo4k16UGFaoKtwDoII3FOo2ZWwBAPkoPQ4lzTmJ%2FCnlMnViZeWejaXY1Wva4inBq0RONGnT2zPvAYCsgzuKfNzY%2FIe1LwrCEszZhSmhkJQQ4tA8s16BVoKCWNfV8oV1TlUfch4uwx%2Bk8m%2FzG1tB3oH1e8nOOkh2ZYP%2FiqGe51fJIzKjduolCBQ%2Fx6v3%2FXtREImnCiSotBsaG0DT5w00cXAi8%2FabMg4XdfisN%2BWazjMI2e15cJRKxHmRNztZFQ8dmJ5WU64iRNhMKJy7sof34%2FCKYpgkSUjE9sstkcWMzqwyMSzo7lMaA2RuqwBlN7dbwReoro6Zdp4ouAzmXVw3x1P%2FMQZbsSnemuAxqOP%2FCn96NHROuDJPqyMXWk2bg%2BKfPW4hNOuigEgSezpwjntJokNXDniuVt4pjZmguxZvupIpgXqjqMQw7A4MUWwbFl%2FK1kzhtPvTa%2FbyLTf4%2Fg0GfmCopHjPvW6ursMlh70bYWFw1pI%2F3j7RzySCET702Dkp32UC%2F2Cg%2Bxk5R1dAy6HfzCE7fRRWRIvr3EqlbUadaaXr5fAgbBUqPT9rrQiXX66cneRFj2Q3GFONVOUNGzIM%2F4r33U0tsC14yULF35E3084kK2pDHBw439cJTHgqvGYXj3ujyKBzMlsw07XGwwY6pgGWrMjdUfNmjzeeM61yd20dro4FQ6EcTFM%2BCqgB79n%2BkGMnJ7wFY7C%2FKZYZCQPr4vM%2F%2BgSzS9o69DOM3%2Bb6NcNclRKQwMq2zSvR3MFA3mjlFPLTovs2%2BM1gsbmgroScoS0GV5sJvgxwTEjYbWmplH9jdvqdUkEn2Bt9CDTssJDOIdsfen1Xrd7sD6yyb1G7ZBPN3n6Q5FrPVjFA%2Bl5UzY3vbQkXSOBS&X-Amz-Signature=6d8957ae86fb62248a9898f5c8251277eb703439f30f3712387f543bdd5522cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZXOKGB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0nnKUwDQuwCRxwAEf%2BBK%2B2BeWTU1dNCuEPU5OQYFybAiAz0pYcyGUu2LA%2BP%2BqUi9ZY%2F3AySxeKdoEr5pwk5VDVPyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkGVwMmo4k16UGFaoKtwDoII3FOo2ZWwBAPkoPQ4lzTmJ%2FCnlMnViZeWejaXY1Wva4inBq0RONGnT2zPvAYCsgzuKfNzY%2FIe1LwrCEszZhSmhkJQQ4tA8s16BVoKCWNfV8oV1TlUfch4uwx%2Bk8m%2FzG1tB3oH1e8nOOkh2ZYP%2FiqGe51fJIzKjduolCBQ%2Fx6v3%2FXtREImnCiSotBsaG0DT5w00cXAi8%2FabMg4XdfisN%2BWazjMI2e15cJRKxHmRNztZFQ8dmJ5WU64iRNhMKJy7sof34%2FCKYpgkSUjE9sstkcWMzqwyMSzo7lMaA2RuqwBlN7dbwReoro6Zdp4ouAzmXVw3x1P%2FMQZbsSnemuAxqOP%2FCn96NHROuDJPqyMXWk2bg%2BKfPW4hNOuigEgSezpwjntJokNXDniuVt4pjZmguxZvupIpgXqjqMQw7A4MUWwbFl%2FK1kzhtPvTa%2FbyLTf4%2Fg0GfmCopHjPvW6ursMlh70bYWFw1pI%2F3j7RzySCET702Dkp32UC%2F2Cg%2Bxk5R1dAy6HfzCE7fRRWRIvr3EqlbUadaaXr5fAgbBUqPT9rrQiXX66cneRFj2Q3GFONVOUNGzIM%2F4r33U0tsC14yULF35E3084kK2pDHBw439cJTHgqvGYXj3ujyKBzMlsw07XGwwY6pgGWrMjdUfNmjzeeM61yd20dro4FQ6EcTFM%2BCqgB79n%2BkGMnJ7wFY7C%2FKZYZCQPr4vM%2F%2BgSzS9o69DOM3%2Bb6NcNclRKQwMq2zSvR3MFA3mjlFPLTovs2%2BM1gsbmgroScoS0GV5sJvgxwTEjYbWmplH9jdvqdUkEn2Bt9CDTssJDOIdsfen1Xrd7sD6yyb1G7ZBPN3n6Q5FrPVjFA%2Bl5UzY3vbQkXSOBS&X-Amz-Signature=e4e400a69e87afc5aeb7c49903b6b58e84edc2a076cbba712ffd90c96deebc0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
