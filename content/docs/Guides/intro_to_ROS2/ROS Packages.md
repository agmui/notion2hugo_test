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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5B2TUT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCmxJ7ibI3AuvgM1nj76cD6%2FDPduWuGnxr8BFmZPZzkbgIhAOXveOK58k2F9POelhjn7hDtm9%2B44e7yGx3KYyHaLtkzKv8DCEAQABoMNjM3NDIzMTgzODA1IgxTP1v8WTeSa%2FD0MgEq3AP3cF8vUde1EZ%2F2pc3T4MbO655dkj3QRxjF9rnBjcxOGi8gy6ZafPn2VfxZxPRZwvJaT9yWStzb0sOszM5KECQtfWM%2F9zmHpY1Qsd%2B5gDlUfrFe4LJJdfzemtxb%2FUy3fE5bNJYge92yGUbocHKNL98jfNB4AgGF0hVxvuGl2ZXIb4y5f97VphSfd6rMpaNGdwodcFDCeliMjdV%2BAApuvsHpnCaMR8Y2nyclS%2F5Bz04ZQuFykNSoLgEVbNc6BT%2FVjydKqUkx%2BWQ7CDcT2FvqBHk1t4ccflcwkRQyQS%2FbD1ahjPrn6u6%2F%2FN3qD4q9kbDZb0FaxEl%2FdjrkD4QEWR6T5dONfuOJrxB1pvKQfllJJY0b02XNxcySGAqI10RPyH%2FsLQN1Aj%2BsAP0X3HfBNbEhA%2BKyuAHM%2FsXQz4kx44ZuF%2BjjFEQz3WbdArDMo4M54aNTNYzMrvCgXLEMlvC0HvZXu0O9YmmWk5ixiWUovKa8nDRzjmXM82sz7iQirv%2BY0joESYq691FQkgIeynED3HGTaBFMYJmvCpcTvM6OcrVMMM%2FyYtuXJ%2FMVUPWzXqJNRM6SkcqDQOw10S7c8KhkzZpbHHr2A0%2BJN39UkFj%2FPMw5NSG1N6GK0a1j4aHziyG5yzDJyvW9BjqkAZ3ews2kbI9g4bc4rwp%2B5ChsggVTi5BEmPCiNVbpp2OMg%2Fkuj0lTFsMZfDSVq%2BznoGJj5hkLtAKYRcC2nmfBMlkamNjZgzZeve8DFcGcCnAejgo78nRybcrp5sWZMAJmA4aAowGbQfl6ZX%2Bf3v4WBoz%2FSSwkbVyyO7KklQshhVLDlM1UhOWCcXPXctvbSmUzAFPH%2BD%2Fh4hfMzhccfkItJ2Krry%2Ft&X-Amz-Signature=d615e177fa6bb62515583e40dba99a920036abc19532422ddd36bc6923d4821a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5B2TUT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCmxJ7ibI3AuvgM1nj76cD6%2FDPduWuGnxr8BFmZPZzkbgIhAOXveOK58k2F9POelhjn7hDtm9%2B44e7yGx3KYyHaLtkzKv8DCEAQABoMNjM3NDIzMTgzODA1IgxTP1v8WTeSa%2FD0MgEq3AP3cF8vUde1EZ%2F2pc3T4MbO655dkj3QRxjF9rnBjcxOGi8gy6ZafPn2VfxZxPRZwvJaT9yWStzb0sOszM5KECQtfWM%2F9zmHpY1Qsd%2B5gDlUfrFe4LJJdfzemtxb%2FUy3fE5bNJYge92yGUbocHKNL98jfNB4AgGF0hVxvuGl2ZXIb4y5f97VphSfd6rMpaNGdwodcFDCeliMjdV%2BAApuvsHpnCaMR8Y2nyclS%2F5Bz04ZQuFykNSoLgEVbNc6BT%2FVjydKqUkx%2BWQ7CDcT2FvqBHk1t4ccflcwkRQyQS%2FbD1ahjPrn6u6%2F%2FN3qD4q9kbDZb0FaxEl%2FdjrkD4QEWR6T5dONfuOJrxB1pvKQfllJJY0b02XNxcySGAqI10RPyH%2FsLQN1Aj%2BsAP0X3HfBNbEhA%2BKyuAHM%2FsXQz4kx44ZuF%2BjjFEQz3WbdArDMo4M54aNTNYzMrvCgXLEMlvC0HvZXu0O9YmmWk5ixiWUovKa8nDRzjmXM82sz7iQirv%2BY0joESYq691FQkgIeynED3HGTaBFMYJmvCpcTvM6OcrVMMM%2FyYtuXJ%2FMVUPWzXqJNRM6SkcqDQOw10S7c8KhkzZpbHHr2A0%2BJN39UkFj%2FPMw5NSG1N6GK0a1j4aHziyG5yzDJyvW9BjqkAZ3ews2kbI9g4bc4rwp%2B5ChsggVTi5BEmPCiNVbpp2OMg%2Fkuj0lTFsMZfDSVq%2BznoGJj5hkLtAKYRcC2nmfBMlkamNjZgzZeve8DFcGcCnAejgo78nRybcrp5sWZMAJmA4aAowGbQfl6ZX%2Bf3v4WBoz%2FSSwkbVyyO7KklQshhVLDlM1UhOWCcXPXctvbSmUzAFPH%2BD%2Fh4hfMzhccfkItJ2Krry%2Ft&X-Amz-Signature=82a18beb2a774bfa4f34ae1af7319c4469088a52145593908ada2cdce1e2e991&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5B2TUT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCmxJ7ibI3AuvgM1nj76cD6%2FDPduWuGnxr8BFmZPZzkbgIhAOXveOK58k2F9POelhjn7hDtm9%2B44e7yGx3KYyHaLtkzKv8DCEAQABoMNjM3NDIzMTgzODA1IgxTP1v8WTeSa%2FD0MgEq3AP3cF8vUde1EZ%2F2pc3T4MbO655dkj3QRxjF9rnBjcxOGi8gy6ZafPn2VfxZxPRZwvJaT9yWStzb0sOszM5KECQtfWM%2F9zmHpY1Qsd%2B5gDlUfrFe4LJJdfzemtxb%2FUy3fE5bNJYge92yGUbocHKNL98jfNB4AgGF0hVxvuGl2ZXIb4y5f97VphSfd6rMpaNGdwodcFDCeliMjdV%2BAApuvsHpnCaMR8Y2nyclS%2F5Bz04ZQuFykNSoLgEVbNc6BT%2FVjydKqUkx%2BWQ7CDcT2FvqBHk1t4ccflcwkRQyQS%2FbD1ahjPrn6u6%2F%2FN3qD4q9kbDZb0FaxEl%2FdjrkD4QEWR6T5dONfuOJrxB1pvKQfllJJY0b02XNxcySGAqI10RPyH%2FsLQN1Aj%2BsAP0X3HfBNbEhA%2BKyuAHM%2FsXQz4kx44ZuF%2BjjFEQz3WbdArDMo4M54aNTNYzMrvCgXLEMlvC0HvZXu0O9YmmWk5ixiWUovKa8nDRzjmXM82sz7iQirv%2BY0joESYq691FQkgIeynED3HGTaBFMYJmvCpcTvM6OcrVMMM%2FyYtuXJ%2FMVUPWzXqJNRM6SkcqDQOw10S7c8KhkzZpbHHr2A0%2BJN39UkFj%2FPMw5NSG1N6GK0a1j4aHziyG5yzDJyvW9BjqkAZ3ews2kbI9g4bc4rwp%2B5ChsggVTi5BEmPCiNVbpp2OMg%2Fkuj0lTFsMZfDSVq%2BznoGJj5hkLtAKYRcC2nmfBMlkamNjZgzZeve8DFcGcCnAejgo78nRybcrp5sWZMAJmA4aAowGbQfl6ZX%2Bf3v4WBoz%2FSSwkbVyyO7KklQshhVLDlM1UhOWCcXPXctvbSmUzAFPH%2BD%2Fh4hfMzhccfkItJ2Krry%2Ft&X-Amz-Signature=993707e737fd0b945aca97f4dc65694eb478eb5d091055903c73d43cf1b7aa06&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5B2TUT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCmxJ7ibI3AuvgM1nj76cD6%2FDPduWuGnxr8BFmZPZzkbgIhAOXveOK58k2F9POelhjn7hDtm9%2B44e7yGx3KYyHaLtkzKv8DCEAQABoMNjM3NDIzMTgzODA1IgxTP1v8WTeSa%2FD0MgEq3AP3cF8vUde1EZ%2F2pc3T4MbO655dkj3QRxjF9rnBjcxOGi8gy6ZafPn2VfxZxPRZwvJaT9yWStzb0sOszM5KECQtfWM%2F9zmHpY1Qsd%2B5gDlUfrFe4LJJdfzemtxb%2FUy3fE5bNJYge92yGUbocHKNL98jfNB4AgGF0hVxvuGl2ZXIb4y5f97VphSfd6rMpaNGdwodcFDCeliMjdV%2BAApuvsHpnCaMR8Y2nyclS%2F5Bz04ZQuFykNSoLgEVbNc6BT%2FVjydKqUkx%2BWQ7CDcT2FvqBHk1t4ccflcwkRQyQS%2FbD1ahjPrn6u6%2F%2FN3qD4q9kbDZb0FaxEl%2FdjrkD4QEWR6T5dONfuOJrxB1pvKQfllJJY0b02XNxcySGAqI10RPyH%2FsLQN1Aj%2BsAP0X3HfBNbEhA%2BKyuAHM%2FsXQz4kx44ZuF%2BjjFEQz3WbdArDMo4M54aNTNYzMrvCgXLEMlvC0HvZXu0O9YmmWk5ixiWUovKa8nDRzjmXM82sz7iQirv%2BY0joESYq691FQkgIeynED3HGTaBFMYJmvCpcTvM6OcrVMMM%2FyYtuXJ%2FMVUPWzXqJNRM6SkcqDQOw10S7c8KhkzZpbHHr2A0%2BJN39UkFj%2FPMw5NSG1N6GK0a1j4aHziyG5yzDJyvW9BjqkAZ3ews2kbI9g4bc4rwp%2B5ChsggVTi5BEmPCiNVbpp2OMg%2Fkuj0lTFsMZfDSVq%2BznoGJj5hkLtAKYRcC2nmfBMlkamNjZgzZeve8DFcGcCnAejgo78nRybcrp5sWZMAJmA4aAowGbQfl6ZX%2Bf3v4WBoz%2FSSwkbVyyO7KklQshhVLDlM1UhOWCcXPXctvbSmUzAFPH%2BD%2Fh4hfMzhccfkItJ2Krry%2Ft&X-Amz-Signature=786f1ed2b453cbdf6eef8c5d1dba601a0ec2dbf42c967b65d85783cf78eaf52d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5B2TUT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCmxJ7ibI3AuvgM1nj76cD6%2FDPduWuGnxr8BFmZPZzkbgIhAOXveOK58k2F9POelhjn7hDtm9%2B44e7yGx3KYyHaLtkzKv8DCEAQABoMNjM3NDIzMTgzODA1IgxTP1v8WTeSa%2FD0MgEq3AP3cF8vUde1EZ%2F2pc3T4MbO655dkj3QRxjF9rnBjcxOGi8gy6ZafPn2VfxZxPRZwvJaT9yWStzb0sOszM5KECQtfWM%2F9zmHpY1Qsd%2B5gDlUfrFe4LJJdfzemtxb%2FUy3fE5bNJYge92yGUbocHKNL98jfNB4AgGF0hVxvuGl2ZXIb4y5f97VphSfd6rMpaNGdwodcFDCeliMjdV%2BAApuvsHpnCaMR8Y2nyclS%2F5Bz04ZQuFykNSoLgEVbNc6BT%2FVjydKqUkx%2BWQ7CDcT2FvqBHk1t4ccflcwkRQyQS%2FbD1ahjPrn6u6%2F%2FN3qD4q9kbDZb0FaxEl%2FdjrkD4QEWR6T5dONfuOJrxB1pvKQfllJJY0b02XNxcySGAqI10RPyH%2FsLQN1Aj%2BsAP0X3HfBNbEhA%2BKyuAHM%2FsXQz4kx44ZuF%2BjjFEQz3WbdArDMo4M54aNTNYzMrvCgXLEMlvC0HvZXu0O9YmmWk5ixiWUovKa8nDRzjmXM82sz7iQirv%2BY0joESYq691FQkgIeynED3HGTaBFMYJmvCpcTvM6OcrVMMM%2FyYtuXJ%2FMVUPWzXqJNRM6SkcqDQOw10S7c8KhkzZpbHHr2A0%2BJN39UkFj%2FPMw5NSG1N6GK0a1j4aHziyG5yzDJyvW9BjqkAZ3ews2kbI9g4bc4rwp%2B5ChsggVTi5BEmPCiNVbpp2OMg%2Fkuj0lTFsMZfDSVq%2BznoGJj5hkLtAKYRcC2nmfBMlkamNjZgzZeve8DFcGcCnAejgo78nRybcrp5sWZMAJmA4aAowGbQfl6ZX%2Bf3v4WBoz%2FSSwkbVyyO7KklQshhVLDlM1UhOWCcXPXctvbSmUzAFPH%2BD%2Fh4hfMzhccfkItJ2Krry%2Ft&X-Amz-Signature=669ef707c61d1fb2a59879d0bd76f7fa405fbbe70fceea333ff0717e42c3dfe2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5B2TUT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCmxJ7ibI3AuvgM1nj76cD6%2FDPduWuGnxr8BFmZPZzkbgIhAOXveOK58k2F9POelhjn7hDtm9%2B44e7yGx3KYyHaLtkzKv8DCEAQABoMNjM3NDIzMTgzODA1IgxTP1v8WTeSa%2FD0MgEq3AP3cF8vUde1EZ%2F2pc3T4MbO655dkj3QRxjF9rnBjcxOGi8gy6ZafPn2VfxZxPRZwvJaT9yWStzb0sOszM5KECQtfWM%2F9zmHpY1Qsd%2B5gDlUfrFe4LJJdfzemtxb%2FUy3fE5bNJYge92yGUbocHKNL98jfNB4AgGF0hVxvuGl2ZXIb4y5f97VphSfd6rMpaNGdwodcFDCeliMjdV%2BAApuvsHpnCaMR8Y2nyclS%2F5Bz04ZQuFykNSoLgEVbNc6BT%2FVjydKqUkx%2BWQ7CDcT2FvqBHk1t4ccflcwkRQyQS%2FbD1ahjPrn6u6%2F%2FN3qD4q9kbDZb0FaxEl%2FdjrkD4QEWR6T5dONfuOJrxB1pvKQfllJJY0b02XNxcySGAqI10RPyH%2FsLQN1Aj%2BsAP0X3HfBNbEhA%2BKyuAHM%2FsXQz4kx44ZuF%2BjjFEQz3WbdArDMo4M54aNTNYzMrvCgXLEMlvC0HvZXu0O9YmmWk5ixiWUovKa8nDRzjmXM82sz7iQirv%2BY0joESYq691FQkgIeynED3HGTaBFMYJmvCpcTvM6OcrVMMM%2FyYtuXJ%2FMVUPWzXqJNRM6SkcqDQOw10S7c8KhkzZpbHHr2A0%2BJN39UkFj%2FPMw5NSG1N6GK0a1j4aHziyG5yzDJyvW9BjqkAZ3ews2kbI9g4bc4rwp%2B5ChsggVTi5BEmPCiNVbpp2OMg%2Fkuj0lTFsMZfDSVq%2BznoGJj5hkLtAKYRcC2nmfBMlkamNjZgzZeve8DFcGcCnAejgo78nRybcrp5sWZMAJmA4aAowGbQfl6ZX%2Bf3v4WBoz%2FSSwkbVyyO7KklQshhVLDlM1UhOWCcXPXctvbSmUzAFPH%2BD%2Fh4hfMzhccfkItJ2Krry%2Ft&X-Amz-Signature=d259f33fda428631c5c08e0be17e8473ff7983b00b9f01636fcaf40ab58cb27c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5B2TUT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCmxJ7ibI3AuvgM1nj76cD6%2FDPduWuGnxr8BFmZPZzkbgIhAOXveOK58k2F9POelhjn7hDtm9%2B44e7yGx3KYyHaLtkzKv8DCEAQABoMNjM3NDIzMTgzODA1IgxTP1v8WTeSa%2FD0MgEq3AP3cF8vUde1EZ%2F2pc3T4MbO655dkj3QRxjF9rnBjcxOGi8gy6ZafPn2VfxZxPRZwvJaT9yWStzb0sOszM5KECQtfWM%2F9zmHpY1Qsd%2B5gDlUfrFe4LJJdfzemtxb%2FUy3fE5bNJYge92yGUbocHKNL98jfNB4AgGF0hVxvuGl2ZXIb4y5f97VphSfd6rMpaNGdwodcFDCeliMjdV%2BAApuvsHpnCaMR8Y2nyclS%2F5Bz04ZQuFykNSoLgEVbNc6BT%2FVjydKqUkx%2BWQ7CDcT2FvqBHk1t4ccflcwkRQyQS%2FbD1ahjPrn6u6%2F%2FN3qD4q9kbDZb0FaxEl%2FdjrkD4QEWR6T5dONfuOJrxB1pvKQfllJJY0b02XNxcySGAqI10RPyH%2FsLQN1Aj%2BsAP0X3HfBNbEhA%2BKyuAHM%2FsXQz4kx44ZuF%2BjjFEQz3WbdArDMo4M54aNTNYzMrvCgXLEMlvC0HvZXu0O9YmmWk5ixiWUovKa8nDRzjmXM82sz7iQirv%2BY0joESYq691FQkgIeynED3HGTaBFMYJmvCpcTvM6OcrVMMM%2FyYtuXJ%2FMVUPWzXqJNRM6SkcqDQOw10S7c8KhkzZpbHHr2A0%2BJN39UkFj%2FPMw5NSG1N6GK0a1j4aHziyG5yzDJyvW9BjqkAZ3ews2kbI9g4bc4rwp%2B5ChsggVTi5BEmPCiNVbpp2OMg%2Fkuj0lTFsMZfDSVq%2BznoGJj5hkLtAKYRcC2nmfBMlkamNjZgzZeve8DFcGcCnAejgo78nRybcrp5sWZMAJmA4aAowGbQfl6ZX%2Bf3v4WBoz%2FSSwkbVyyO7KklQshhVLDlM1UhOWCcXPXctvbSmUzAFPH%2BD%2Fh4hfMzhccfkItJ2Krry%2Ft&X-Amz-Signature=82cf2ff12b293a51210df8a07d646b8305552bba2232d50d20c418cde16f6535&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
