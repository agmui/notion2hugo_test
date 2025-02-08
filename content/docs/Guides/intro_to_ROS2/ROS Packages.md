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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QV4PK6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjsnkA%2B%2BxaOWHLYrEwstu7dmIBqsN3hOzbPH6RSwkEjwIhAKybAIeez4dtctvbCuldeQNwhGpDiYGPEZupQVyriUHGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5wXQilEQWqY9%2FYcq3AP9LHKPwjuhn978Hho20Eltaw70%2FbR%2FBMpXeVnDIbSMVbLbGVng18U0tJ2kzLr5bi7zfHAQ7DCUwtaMAYP%2FttHMNGL%2FIZLzk8AkZppcbfNVQmsBOuWNWQXDC%2FT1MjhLsooaK3OX%2FKu6QGuyjvcsuFPiaeMju2z0vh0qlzNDG%2BycB8p0X8Tu40jfT080ZX701bcR6xtJjXXWk11Az0Wzu4VpqhokMo%2FIkGuWmhKFNzRQKLT5M7klqtfpI9CewSoPbk8ZxCFLo%2BmKeJmmyA6Jm9mK6YoIziSh2f7Dcyt5%2FALkCtf0vqzM9I9%2F2mz%2FGH2hhMbf3rLp3jm3Oy2CA0lBNycS3Rj2RpNqSffozbJs18yMEzArdE1pUJnU%2BG3G4jAbgYtm%2FX02N0mdoixq0mJaM4NnRqmSES0qzGKxh9cvuTjIKGMZXM%2FT5cTy61cU59TnDyT880%2BS04okjn%2BEsRxn7PuGd6imqgD5ayLE%2Fku7IdNTuZtEuLroxHPIUJYUQwJ0CTSMQjvij7u2MLg%2BC94e2R6s%2FxUk3%2FTlIBepTjoNvL8QbquBSPNxJBYX7pkcvkQpcRWAdmhCEXEtWR4dCPP4qA%2FnG%2By%2F3Ej8uZ%2B%2F%2B2Ud8VOoKunPlX%2FTgX8L1vcQCjDu8Ju9BjqkAY7ZB9rPRY394FxWRF%2BDAbrM9KOPhBU7CnXCbYURfYcm3GMqyXbDNW30qSFIAawXgxZdK1za%2FWMqTLMrlbS4rAs7mw1jud0cv6dDJvZmY%2BGuXh0hRuG57ddXlPJz59DJZNHO5foQaZa2wZhchp7ZU9rmzBLFQZVza%2FJxX2Np0E11slkeWUF%2BRAPW62tUOw%2Btyce3TdaX6ZGXPmfmuDw2OBoncNRF&X-Amz-Signature=733c7e44bb5403cea1541bcad468b4b6341299127732f0e0a4333a37b0db9290&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QV4PK6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjsnkA%2B%2BxaOWHLYrEwstu7dmIBqsN3hOzbPH6RSwkEjwIhAKybAIeez4dtctvbCuldeQNwhGpDiYGPEZupQVyriUHGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5wXQilEQWqY9%2FYcq3AP9LHKPwjuhn978Hho20Eltaw70%2FbR%2FBMpXeVnDIbSMVbLbGVng18U0tJ2kzLr5bi7zfHAQ7DCUwtaMAYP%2FttHMNGL%2FIZLzk8AkZppcbfNVQmsBOuWNWQXDC%2FT1MjhLsooaK3OX%2FKu6QGuyjvcsuFPiaeMju2z0vh0qlzNDG%2BycB8p0X8Tu40jfT080ZX701bcR6xtJjXXWk11Az0Wzu4VpqhokMo%2FIkGuWmhKFNzRQKLT5M7klqtfpI9CewSoPbk8ZxCFLo%2BmKeJmmyA6Jm9mK6YoIziSh2f7Dcyt5%2FALkCtf0vqzM9I9%2F2mz%2FGH2hhMbf3rLp3jm3Oy2CA0lBNycS3Rj2RpNqSffozbJs18yMEzArdE1pUJnU%2BG3G4jAbgYtm%2FX02N0mdoixq0mJaM4NnRqmSES0qzGKxh9cvuTjIKGMZXM%2FT5cTy61cU59TnDyT880%2BS04okjn%2BEsRxn7PuGd6imqgD5ayLE%2Fku7IdNTuZtEuLroxHPIUJYUQwJ0CTSMQjvij7u2MLg%2BC94e2R6s%2FxUk3%2FTlIBepTjoNvL8QbquBSPNxJBYX7pkcvkQpcRWAdmhCEXEtWR4dCPP4qA%2FnG%2By%2F3Ej8uZ%2B%2F%2B2Ud8VOoKunPlX%2FTgX8L1vcQCjDu8Ju9BjqkAY7ZB9rPRY394FxWRF%2BDAbrM9KOPhBU7CnXCbYURfYcm3GMqyXbDNW30qSFIAawXgxZdK1za%2FWMqTLMrlbS4rAs7mw1jud0cv6dDJvZmY%2BGuXh0hRuG57ddXlPJz59DJZNHO5foQaZa2wZhchp7ZU9rmzBLFQZVza%2FJxX2Np0E11slkeWUF%2BRAPW62tUOw%2Btyce3TdaX6ZGXPmfmuDw2OBoncNRF&X-Amz-Signature=60d1e473cd2b05e960beb2a0513008db33baaca2b5c0307f1444aacfd375aad6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QV4PK6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjsnkA%2B%2BxaOWHLYrEwstu7dmIBqsN3hOzbPH6RSwkEjwIhAKybAIeez4dtctvbCuldeQNwhGpDiYGPEZupQVyriUHGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5wXQilEQWqY9%2FYcq3AP9LHKPwjuhn978Hho20Eltaw70%2FbR%2FBMpXeVnDIbSMVbLbGVng18U0tJ2kzLr5bi7zfHAQ7DCUwtaMAYP%2FttHMNGL%2FIZLzk8AkZppcbfNVQmsBOuWNWQXDC%2FT1MjhLsooaK3OX%2FKu6QGuyjvcsuFPiaeMju2z0vh0qlzNDG%2BycB8p0X8Tu40jfT080ZX701bcR6xtJjXXWk11Az0Wzu4VpqhokMo%2FIkGuWmhKFNzRQKLT5M7klqtfpI9CewSoPbk8ZxCFLo%2BmKeJmmyA6Jm9mK6YoIziSh2f7Dcyt5%2FALkCtf0vqzM9I9%2F2mz%2FGH2hhMbf3rLp3jm3Oy2CA0lBNycS3Rj2RpNqSffozbJs18yMEzArdE1pUJnU%2BG3G4jAbgYtm%2FX02N0mdoixq0mJaM4NnRqmSES0qzGKxh9cvuTjIKGMZXM%2FT5cTy61cU59TnDyT880%2BS04okjn%2BEsRxn7PuGd6imqgD5ayLE%2Fku7IdNTuZtEuLroxHPIUJYUQwJ0CTSMQjvij7u2MLg%2BC94e2R6s%2FxUk3%2FTlIBepTjoNvL8QbquBSPNxJBYX7pkcvkQpcRWAdmhCEXEtWR4dCPP4qA%2FnG%2By%2F3Ej8uZ%2B%2F%2B2Ud8VOoKunPlX%2FTgX8L1vcQCjDu8Ju9BjqkAY7ZB9rPRY394FxWRF%2BDAbrM9KOPhBU7CnXCbYURfYcm3GMqyXbDNW30qSFIAawXgxZdK1za%2FWMqTLMrlbS4rAs7mw1jud0cv6dDJvZmY%2BGuXh0hRuG57ddXlPJz59DJZNHO5foQaZa2wZhchp7ZU9rmzBLFQZVza%2FJxX2Np0E11slkeWUF%2BRAPW62tUOw%2Btyce3TdaX6ZGXPmfmuDw2OBoncNRF&X-Amz-Signature=101202ce877bed3d492188893d2f4791b6b428f68f7016fd895a25ee14cac706&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QV4PK6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjsnkA%2B%2BxaOWHLYrEwstu7dmIBqsN3hOzbPH6RSwkEjwIhAKybAIeez4dtctvbCuldeQNwhGpDiYGPEZupQVyriUHGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5wXQilEQWqY9%2FYcq3AP9LHKPwjuhn978Hho20Eltaw70%2FbR%2FBMpXeVnDIbSMVbLbGVng18U0tJ2kzLr5bi7zfHAQ7DCUwtaMAYP%2FttHMNGL%2FIZLzk8AkZppcbfNVQmsBOuWNWQXDC%2FT1MjhLsooaK3OX%2FKu6QGuyjvcsuFPiaeMju2z0vh0qlzNDG%2BycB8p0X8Tu40jfT080ZX701bcR6xtJjXXWk11Az0Wzu4VpqhokMo%2FIkGuWmhKFNzRQKLT5M7klqtfpI9CewSoPbk8ZxCFLo%2BmKeJmmyA6Jm9mK6YoIziSh2f7Dcyt5%2FALkCtf0vqzM9I9%2F2mz%2FGH2hhMbf3rLp3jm3Oy2CA0lBNycS3Rj2RpNqSffozbJs18yMEzArdE1pUJnU%2BG3G4jAbgYtm%2FX02N0mdoixq0mJaM4NnRqmSES0qzGKxh9cvuTjIKGMZXM%2FT5cTy61cU59TnDyT880%2BS04okjn%2BEsRxn7PuGd6imqgD5ayLE%2Fku7IdNTuZtEuLroxHPIUJYUQwJ0CTSMQjvij7u2MLg%2BC94e2R6s%2FxUk3%2FTlIBepTjoNvL8QbquBSPNxJBYX7pkcvkQpcRWAdmhCEXEtWR4dCPP4qA%2FnG%2By%2F3Ej8uZ%2B%2F%2B2Ud8VOoKunPlX%2FTgX8L1vcQCjDu8Ju9BjqkAY7ZB9rPRY394FxWRF%2BDAbrM9KOPhBU7CnXCbYURfYcm3GMqyXbDNW30qSFIAawXgxZdK1za%2FWMqTLMrlbS4rAs7mw1jud0cv6dDJvZmY%2BGuXh0hRuG57ddXlPJz59DJZNHO5foQaZa2wZhchp7ZU9rmzBLFQZVza%2FJxX2Np0E11slkeWUF%2BRAPW62tUOw%2Btyce3TdaX6ZGXPmfmuDw2OBoncNRF&X-Amz-Signature=3a90bb741469458c2f02aa742ab0b9f0b892cb6c4ef52229283f95b3e9b6e445&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QV4PK6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjsnkA%2B%2BxaOWHLYrEwstu7dmIBqsN3hOzbPH6RSwkEjwIhAKybAIeez4dtctvbCuldeQNwhGpDiYGPEZupQVyriUHGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5wXQilEQWqY9%2FYcq3AP9LHKPwjuhn978Hho20Eltaw70%2FbR%2FBMpXeVnDIbSMVbLbGVng18U0tJ2kzLr5bi7zfHAQ7DCUwtaMAYP%2FttHMNGL%2FIZLzk8AkZppcbfNVQmsBOuWNWQXDC%2FT1MjhLsooaK3OX%2FKu6QGuyjvcsuFPiaeMju2z0vh0qlzNDG%2BycB8p0X8Tu40jfT080ZX701bcR6xtJjXXWk11Az0Wzu4VpqhokMo%2FIkGuWmhKFNzRQKLT5M7klqtfpI9CewSoPbk8ZxCFLo%2BmKeJmmyA6Jm9mK6YoIziSh2f7Dcyt5%2FALkCtf0vqzM9I9%2F2mz%2FGH2hhMbf3rLp3jm3Oy2CA0lBNycS3Rj2RpNqSffozbJs18yMEzArdE1pUJnU%2BG3G4jAbgYtm%2FX02N0mdoixq0mJaM4NnRqmSES0qzGKxh9cvuTjIKGMZXM%2FT5cTy61cU59TnDyT880%2BS04okjn%2BEsRxn7PuGd6imqgD5ayLE%2Fku7IdNTuZtEuLroxHPIUJYUQwJ0CTSMQjvij7u2MLg%2BC94e2R6s%2FxUk3%2FTlIBepTjoNvL8QbquBSPNxJBYX7pkcvkQpcRWAdmhCEXEtWR4dCPP4qA%2FnG%2By%2F3Ej8uZ%2B%2F%2B2Ud8VOoKunPlX%2FTgX8L1vcQCjDu8Ju9BjqkAY7ZB9rPRY394FxWRF%2BDAbrM9KOPhBU7CnXCbYURfYcm3GMqyXbDNW30qSFIAawXgxZdK1za%2FWMqTLMrlbS4rAs7mw1jud0cv6dDJvZmY%2BGuXh0hRuG57ddXlPJz59DJZNHO5foQaZa2wZhchp7ZU9rmzBLFQZVza%2FJxX2Np0E11slkeWUF%2BRAPW62tUOw%2Btyce3TdaX6ZGXPmfmuDw2OBoncNRF&X-Amz-Signature=4bdfef852cfa7b6715e2e274cee135bb5c86ba75e90e1df1c8ceacb4a2a5a645&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QV4PK6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjsnkA%2B%2BxaOWHLYrEwstu7dmIBqsN3hOzbPH6RSwkEjwIhAKybAIeez4dtctvbCuldeQNwhGpDiYGPEZupQVyriUHGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5wXQilEQWqY9%2FYcq3AP9LHKPwjuhn978Hho20Eltaw70%2FbR%2FBMpXeVnDIbSMVbLbGVng18U0tJ2kzLr5bi7zfHAQ7DCUwtaMAYP%2FttHMNGL%2FIZLzk8AkZppcbfNVQmsBOuWNWQXDC%2FT1MjhLsooaK3OX%2FKu6QGuyjvcsuFPiaeMju2z0vh0qlzNDG%2BycB8p0X8Tu40jfT080ZX701bcR6xtJjXXWk11Az0Wzu4VpqhokMo%2FIkGuWmhKFNzRQKLT5M7klqtfpI9CewSoPbk8ZxCFLo%2BmKeJmmyA6Jm9mK6YoIziSh2f7Dcyt5%2FALkCtf0vqzM9I9%2F2mz%2FGH2hhMbf3rLp3jm3Oy2CA0lBNycS3Rj2RpNqSffozbJs18yMEzArdE1pUJnU%2BG3G4jAbgYtm%2FX02N0mdoixq0mJaM4NnRqmSES0qzGKxh9cvuTjIKGMZXM%2FT5cTy61cU59TnDyT880%2BS04okjn%2BEsRxn7PuGd6imqgD5ayLE%2Fku7IdNTuZtEuLroxHPIUJYUQwJ0CTSMQjvij7u2MLg%2BC94e2R6s%2FxUk3%2FTlIBepTjoNvL8QbquBSPNxJBYX7pkcvkQpcRWAdmhCEXEtWR4dCPP4qA%2FnG%2By%2F3Ej8uZ%2B%2F%2B2Ud8VOoKunPlX%2FTgX8L1vcQCjDu8Ju9BjqkAY7ZB9rPRY394FxWRF%2BDAbrM9KOPhBU7CnXCbYURfYcm3GMqyXbDNW30qSFIAawXgxZdK1za%2FWMqTLMrlbS4rAs7mw1jud0cv6dDJvZmY%2BGuXh0hRuG57ddXlPJz59DJZNHO5foQaZa2wZhchp7ZU9rmzBLFQZVza%2FJxX2Np0E11slkeWUF%2BRAPW62tUOw%2Btyce3TdaX6ZGXPmfmuDw2OBoncNRF&X-Amz-Signature=d3fd0ab876230bbf6d1513b1300b6510af9aebc1e2adda0147d4cd970e25a96c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QV4PK6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjsnkA%2B%2BxaOWHLYrEwstu7dmIBqsN3hOzbPH6RSwkEjwIhAKybAIeez4dtctvbCuldeQNwhGpDiYGPEZupQVyriUHGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK5wXQilEQWqY9%2FYcq3AP9LHKPwjuhn978Hho20Eltaw70%2FbR%2FBMpXeVnDIbSMVbLbGVng18U0tJ2kzLr5bi7zfHAQ7DCUwtaMAYP%2FttHMNGL%2FIZLzk8AkZppcbfNVQmsBOuWNWQXDC%2FT1MjhLsooaK3OX%2FKu6QGuyjvcsuFPiaeMju2z0vh0qlzNDG%2BycB8p0X8Tu40jfT080ZX701bcR6xtJjXXWk11Az0Wzu4VpqhokMo%2FIkGuWmhKFNzRQKLT5M7klqtfpI9CewSoPbk8ZxCFLo%2BmKeJmmyA6Jm9mK6YoIziSh2f7Dcyt5%2FALkCtf0vqzM9I9%2F2mz%2FGH2hhMbf3rLp3jm3Oy2CA0lBNycS3Rj2RpNqSffozbJs18yMEzArdE1pUJnU%2BG3G4jAbgYtm%2FX02N0mdoixq0mJaM4NnRqmSES0qzGKxh9cvuTjIKGMZXM%2FT5cTy61cU59TnDyT880%2BS04okjn%2BEsRxn7PuGd6imqgD5ayLE%2Fku7IdNTuZtEuLroxHPIUJYUQwJ0CTSMQjvij7u2MLg%2BC94e2R6s%2FxUk3%2FTlIBepTjoNvL8QbquBSPNxJBYX7pkcvkQpcRWAdmhCEXEtWR4dCPP4qA%2FnG%2By%2F3Ej8uZ%2B%2F%2B2Ud8VOoKunPlX%2FTgX8L1vcQCjDu8Ju9BjqkAY7ZB9rPRY394FxWRF%2BDAbrM9KOPhBU7CnXCbYURfYcm3GMqyXbDNW30qSFIAawXgxZdK1za%2FWMqTLMrlbS4rAs7mw1jud0cv6dDJvZmY%2BGuXh0hRuG57ddXlPJz59DJZNHO5foQaZa2wZhchp7ZU9rmzBLFQZVza%2FJxX2Np0E11slkeWUF%2BRAPW62tUOw%2Btyce3TdaX6ZGXPmfmuDw2OBoncNRF&X-Amz-Signature=e8f419565c24bf17ac8ba6b2a7dcbdfab1f3c2e98b0903d647b768c32c24fca5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
