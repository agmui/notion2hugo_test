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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TIAU7NL%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGG21W9TnnxMVehlFta5b8sm%2Bvf4C3U22QS0FJhgC2vNAiAJE0WAn4G1Lle78mnrfLiZAHzoBMJaLGcDhI9ISe5MuiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHu5IzFiNMK1F%2Fo9KtwDiM2Y7yjtwDGthtdIZwqBQheEqnJvqgwLjs8HX7EbnrWmmWK%2BrgZkv%2Fv%2BiaB%2BPNC242OoENoD183OZar864zjT9CP0CYsRjOTgNh9JlMPxyX8Fx41KCb%2FyYx08Kmudxp9ghCiqsGYw38n%2Fl4DetoXgmT3sIYe0azSYgbTJMyrYF4XAwyIKiq94lYQ5mQbTELlix4W6PN5%2FXuErFCHAqicuIMkSofg%2FkpvD1HwB4%2BAalJNcU3cy6fIAD%2BPc1c3HmkdDx6mS0%2B2c3s3qCggqwRH%2FJjGTfxHKyouHYRfRRhErMiDds28LkfuKDT4UwerUSDxfJ0Jc7kdSb2H6hbfNZUI0XKthytQ7z8D0m4lfqcjdJdL8p85Q2XKCBCyWIJl%2BGsDrGso9fW9JKlFUREecJibWx9iDFjplAzzS8vXmsBMzt4ABIaSCdoyBYTLM8mTZDIuNKREGrimemxSrWpsNW2zhLqSqoUFii8KtlBsh7DgTU838ipVTo7YyjgUDCmcVufXcvxv4WyyflZ%2Fpyd4I%2F46QBDLmKem0r57jEWCNy9HCJAX8mlXmbXmpGs2kSIpkTy0lLc24y%2BPl1fG%2BdWBgU%2F02uT022E5w4txe%2FVNWDkiKuXFO86DM1W%2B%2FEpP%2B3Uwvcu0zAY6pgFQobgI3B6W9tgJ8Qxf1SoYjbKpL%2BwxUWm30eDmrRk2vwhi2wr5VwO1NgtGAA5%2FqTEWWXIH2mq88HzYJl2n1BO3Fzd8p7OMjpaAuDI%2FYkQG4vvvgl89Ax%2BpRcCvKYeiWIJabZnfWCA3ZkG9b31AlPnFA6a%2F8%2B9ibwcNMv21JKUENu%2BnxwEdQnSK45wmXjSikuEhf9avIW7Q666qg7d7XeBS1ZerNE6U&X-Amz-Signature=167310c7d265a46ed2ab1fae92aa0483480910888d55d90c479634af215df865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TIAU7NL%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGG21W9TnnxMVehlFta5b8sm%2Bvf4C3U22QS0FJhgC2vNAiAJE0WAn4G1Lle78mnrfLiZAHzoBMJaLGcDhI9ISe5MuiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHu5IzFiNMK1F%2Fo9KtwDiM2Y7yjtwDGthtdIZwqBQheEqnJvqgwLjs8HX7EbnrWmmWK%2BrgZkv%2Fv%2BiaB%2BPNC242OoENoD183OZar864zjT9CP0CYsRjOTgNh9JlMPxyX8Fx41KCb%2FyYx08Kmudxp9ghCiqsGYw38n%2Fl4DetoXgmT3sIYe0azSYgbTJMyrYF4XAwyIKiq94lYQ5mQbTELlix4W6PN5%2FXuErFCHAqicuIMkSofg%2FkpvD1HwB4%2BAalJNcU3cy6fIAD%2BPc1c3HmkdDx6mS0%2B2c3s3qCggqwRH%2FJjGTfxHKyouHYRfRRhErMiDds28LkfuKDT4UwerUSDxfJ0Jc7kdSb2H6hbfNZUI0XKthytQ7z8D0m4lfqcjdJdL8p85Q2XKCBCyWIJl%2BGsDrGso9fW9JKlFUREecJibWx9iDFjplAzzS8vXmsBMzt4ABIaSCdoyBYTLM8mTZDIuNKREGrimemxSrWpsNW2zhLqSqoUFii8KtlBsh7DgTU838ipVTo7YyjgUDCmcVufXcvxv4WyyflZ%2Fpyd4I%2F46QBDLmKem0r57jEWCNy9HCJAX8mlXmbXmpGs2kSIpkTy0lLc24y%2BPl1fG%2BdWBgU%2F02uT022E5w4txe%2FVNWDkiKuXFO86DM1W%2B%2FEpP%2B3Uwvcu0zAY6pgFQobgI3B6W9tgJ8Qxf1SoYjbKpL%2BwxUWm30eDmrRk2vwhi2wr5VwO1NgtGAA5%2FqTEWWXIH2mq88HzYJl2n1BO3Fzd8p7OMjpaAuDI%2FYkQG4vvvgl89Ax%2BpRcCvKYeiWIJabZnfWCA3ZkG9b31AlPnFA6a%2F8%2B9ibwcNMv21JKUENu%2BnxwEdQnSK45wmXjSikuEhf9avIW7Q666qg7d7XeBS1ZerNE6U&X-Amz-Signature=7c10ffdaca71912de7222f1c984c4d7ecbd4c865f8a34f52687a0019c69fb942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TIAU7NL%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGG21W9TnnxMVehlFta5b8sm%2Bvf4C3U22QS0FJhgC2vNAiAJE0WAn4G1Lle78mnrfLiZAHzoBMJaLGcDhI9ISe5MuiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHu5IzFiNMK1F%2Fo9KtwDiM2Y7yjtwDGthtdIZwqBQheEqnJvqgwLjs8HX7EbnrWmmWK%2BrgZkv%2Fv%2BiaB%2BPNC242OoENoD183OZar864zjT9CP0CYsRjOTgNh9JlMPxyX8Fx41KCb%2FyYx08Kmudxp9ghCiqsGYw38n%2Fl4DetoXgmT3sIYe0azSYgbTJMyrYF4XAwyIKiq94lYQ5mQbTELlix4W6PN5%2FXuErFCHAqicuIMkSofg%2FkpvD1HwB4%2BAalJNcU3cy6fIAD%2BPc1c3HmkdDx6mS0%2B2c3s3qCggqwRH%2FJjGTfxHKyouHYRfRRhErMiDds28LkfuKDT4UwerUSDxfJ0Jc7kdSb2H6hbfNZUI0XKthytQ7z8D0m4lfqcjdJdL8p85Q2XKCBCyWIJl%2BGsDrGso9fW9JKlFUREecJibWx9iDFjplAzzS8vXmsBMzt4ABIaSCdoyBYTLM8mTZDIuNKREGrimemxSrWpsNW2zhLqSqoUFii8KtlBsh7DgTU838ipVTo7YyjgUDCmcVufXcvxv4WyyflZ%2Fpyd4I%2F46QBDLmKem0r57jEWCNy9HCJAX8mlXmbXmpGs2kSIpkTy0lLc24y%2BPl1fG%2BdWBgU%2F02uT022E5w4txe%2FVNWDkiKuXFO86DM1W%2B%2FEpP%2B3Uwvcu0zAY6pgFQobgI3B6W9tgJ8Qxf1SoYjbKpL%2BwxUWm30eDmrRk2vwhi2wr5VwO1NgtGAA5%2FqTEWWXIH2mq88HzYJl2n1BO3Fzd8p7OMjpaAuDI%2FYkQG4vvvgl89Ax%2BpRcCvKYeiWIJabZnfWCA3ZkG9b31AlPnFA6a%2F8%2B9ibwcNMv21JKUENu%2BnxwEdQnSK45wmXjSikuEhf9avIW7Q666qg7d7XeBS1ZerNE6U&X-Amz-Signature=5cb88c84d4a88cfa7c160a2594c2a2520a1f6ba4f2b3fb9b36657f382f0551c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TIAU7NL%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGG21W9TnnxMVehlFta5b8sm%2Bvf4C3U22QS0FJhgC2vNAiAJE0WAn4G1Lle78mnrfLiZAHzoBMJaLGcDhI9ISe5MuiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHu5IzFiNMK1F%2Fo9KtwDiM2Y7yjtwDGthtdIZwqBQheEqnJvqgwLjs8HX7EbnrWmmWK%2BrgZkv%2Fv%2BiaB%2BPNC242OoENoD183OZar864zjT9CP0CYsRjOTgNh9JlMPxyX8Fx41KCb%2FyYx08Kmudxp9ghCiqsGYw38n%2Fl4DetoXgmT3sIYe0azSYgbTJMyrYF4XAwyIKiq94lYQ5mQbTELlix4W6PN5%2FXuErFCHAqicuIMkSofg%2FkpvD1HwB4%2BAalJNcU3cy6fIAD%2BPc1c3HmkdDx6mS0%2B2c3s3qCggqwRH%2FJjGTfxHKyouHYRfRRhErMiDds28LkfuKDT4UwerUSDxfJ0Jc7kdSb2H6hbfNZUI0XKthytQ7z8D0m4lfqcjdJdL8p85Q2XKCBCyWIJl%2BGsDrGso9fW9JKlFUREecJibWx9iDFjplAzzS8vXmsBMzt4ABIaSCdoyBYTLM8mTZDIuNKREGrimemxSrWpsNW2zhLqSqoUFii8KtlBsh7DgTU838ipVTo7YyjgUDCmcVufXcvxv4WyyflZ%2Fpyd4I%2F46QBDLmKem0r57jEWCNy9HCJAX8mlXmbXmpGs2kSIpkTy0lLc24y%2BPl1fG%2BdWBgU%2F02uT022E5w4txe%2FVNWDkiKuXFO86DM1W%2B%2FEpP%2B3Uwvcu0zAY6pgFQobgI3B6W9tgJ8Qxf1SoYjbKpL%2BwxUWm30eDmrRk2vwhi2wr5VwO1NgtGAA5%2FqTEWWXIH2mq88HzYJl2n1BO3Fzd8p7OMjpaAuDI%2FYkQG4vvvgl89Ax%2BpRcCvKYeiWIJabZnfWCA3ZkG9b31AlPnFA6a%2F8%2B9ibwcNMv21JKUENu%2BnxwEdQnSK45wmXjSikuEhf9avIW7Q666qg7d7XeBS1ZerNE6U&X-Amz-Signature=9c24174c61839777c27075e21345eff416b3a36ae21a9ab81c5a2db863874a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TIAU7NL%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGG21W9TnnxMVehlFta5b8sm%2Bvf4C3U22QS0FJhgC2vNAiAJE0WAn4G1Lle78mnrfLiZAHzoBMJaLGcDhI9ISe5MuiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHu5IzFiNMK1F%2Fo9KtwDiM2Y7yjtwDGthtdIZwqBQheEqnJvqgwLjs8HX7EbnrWmmWK%2BrgZkv%2Fv%2BiaB%2BPNC242OoENoD183OZar864zjT9CP0CYsRjOTgNh9JlMPxyX8Fx41KCb%2FyYx08Kmudxp9ghCiqsGYw38n%2Fl4DetoXgmT3sIYe0azSYgbTJMyrYF4XAwyIKiq94lYQ5mQbTELlix4W6PN5%2FXuErFCHAqicuIMkSofg%2FkpvD1HwB4%2BAalJNcU3cy6fIAD%2BPc1c3HmkdDx6mS0%2B2c3s3qCggqwRH%2FJjGTfxHKyouHYRfRRhErMiDds28LkfuKDT4UwerUSDxfJ0Jc7kdSb2H6hbfNZUI0XKthytQ7z8D0m4lfqcjdJdL8p85Q2XKCBCyWIJl%2BGsDrGso9fW9JKlFUREecJibWx9iDFjplAzzS8vXmsBMzt4ABIaSCdoyBYTLM8mTZDIuNKREGrimemxSrWpsNW2zhLqSqoUFii8KtlBsh7DgTU838ipVTo7YyjgUDCmcVufXcvxv4WyyflZ%2Fpyd4I%2F46QBDLmKem0r57jEWCNy9HCJAX8mlXmbXmpGs2kSIpkTy0lLc24y%2BPl1fG%2BdWBgU%2F02uT022E5w4txe%2FVNWDkiKuXFO86DM1W%2B%2FEpP%2B3Uwvcu0zAY6pgFQobgI3B6W9tgJ8Qxf1SoYjbKpL%2BwxUWm30eDmrRk2vwhi2wr5VwO1NgtGAA5%2FqTEWWXIH2mq88HzYJl2n1BO3Fzd8p7OMjpaAuDI%2FYkQG4vvvgl89Ax%2BpRcCvKYeiWIJabZnfWCA3ZkG9b31AlPnFA6a%2F8%2B9ibwcNMv21JKUENu%2BnxwEdQnSK45wmXjSikuEhf9avIW7Q666qg7d7XeBS1ZerNE6U&X-Amz-Signature=3642684497e638e90a681e59b813aa22097449d21db6166755c5bd95be39fa93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TIAU7NL%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGG21W9TnnxMVehlFta5b8sm%2Bvf4C3U22QS0FJhgC2vNAiAJE0WAn4G1Lle78mnrfLiZAHzoBMJaLGcDhI9ISe5MuiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHu5IzFiNMK1F%2Fo9KtwDiM2Y7yjtwDGthtdIZwqBQheEqnJvqgwLjs8HX7EbnrWmmWK%2BrgZkv%2Fv%2BiaB%2BPNC242OoENoD183OZar864zjT9CP0CYsRjOTgNh9JlMPxyX8Fx41KCb%2FyYx08Kmudxp9ghCiqsGYw38n%2Fl4DetoXgmT3sIYe0azSYgbTJMyrYF4XAwyIKiq94lYQ5mQbTELlix4W6PN5%2FXuErFCHAqicuIMkSofg%2FkpvD1HwB4%2BAalJNcU3cy6fIAD%2BPc1c3HmkdDx6mS0%2B2c3s3qCggqwRH%2FJjGTfxHKyouHYRfRRhErMiDds28LkfuKDT4UwerUSDxfJ0Jc7kdSb2H6hbfNZUI0XKthytQ7z8D0m4lfqcjdJdL8p85Q2XKCBCyWIJl%2BGsDrGso9fW9JKlFUREecJibWx9iDFjplAzzS8vXmsBMzt4ABIaSCdoyBYTLM8mTZDIuNKREGrimemxSrWpsNW2zhLqSqoUFii8KtlBsh7DgTU838ipVTo7YyjgUDCmcVufXcvxv4WyyflZ%2Fpyd4I%2F46QBDLmKem0r57jEWCNy9HCJAX8mlXmbXmpGs2kSIpkTy0lLc24y%2BPl1fG%2BdWBgU%2F02uT022E5w4txe%2FVNWDkiKuXFO86DM1W%2B%2FEpP%2B3Uwvcu0zAY6pgFQobgI3B6W9tgJ8Qxf1SoYjbKpL%2BwxUWm30eDmrRk2vwhi2wr5VwO1NgtGAA5%2FqTEWWXIH2mq88HzYJl2n1BO3Fzd8p7OMjpaAuDI%2FYkQG4vvvgl89Ax%2BpRcCvKYeiWIJabZnfWCA3ZkG9b31AlPnFA6a%2F8%2B9ibwcNMv21JKUENu%2BnxwEdQnSK45wmXjSikuEhf9avIW7Q666qg7d7XeBS1ZerNE6U&X-Amz-Signature=3570d5e76231674cb628ec4025584691adce8977d302787e148dd9037df64ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TIAU7NL%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGG21W9TnnxMVehlFta5b8sm%2Bvf4C3U22QS0FJhgC2vNAiAJE0WAn4G1Lle78mnrfLiZAHzoBMJaLGcDhI9ISe5MuiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHu5IzFiNMK1F%2Fo9KtwDiM2Y7yjtwDGthtdIZwqBQheEqnJvqgwLjs8HX7EbnrWmmWK%2BrgZkv%2Fv%2BiaB%2BPNC242OoENoD183OZar864zjT9CP0CYsRjOTgNh9JlMPxyX8Fx41KCb%2FyYx08Kmudxp9ghCiqsGYw38n%2Fl4DetoXgmT3sIYe0azSYgbTJMyrYF4XAwyIKiq94lYQ5mQbTELlix4W6PN5%2FXuErFCHAqicuIMkSofg%2FkpvD1HwB4%2BAalJNcU3cy6fIAD%2BPc1c3HmkdDx6mS0%2B2c3s3qCggqwRH%2FJjGTfxHKyouHYRfRRhErMiDds28LkfuKDT4UwerUSDxfJ0Jc7kdSb2H6hbfNZUI0XKthytQ7z8D0m4lfqcjdJdL8p85Q2XKCBCyWIJl%2BGsDrGso9fW9JKlFUREecJibWx9iDFjplAzzS8vXmsBMzt4ABIaSCdoyBYTLM8mTZDIuNKREGrimemxSrWpsNW2zhLqSqoUFii8KtlBsh7DgTU838ipVTo7YyjgUDCmcVufXcvxv4WyyflZ%2Fpyd4I%2F46QBDLmKem0r57jEWCNy9HCJAX8mlXmbXmpGs2kSIpkTy0lLc24y%2BPl1fG%2BdWBgU%2F02uT022E5w4txe%2FVNWDkiKuXFO86DM1W%2B%2FEpP%2B3Uwvcu0zAY6pgFQobgI3B6W9tgJ8Qxf1SoYjbKpL%2BwxUWm30eDmrRk2vwhi2wr5VwO1NgtGAA5%2FqTEWWXIH2mq88HzYJl2n1BO3Fzd8p7OMjpaAuDI%2FYkQG4vvvgl89Ax%2BpRcCvKYeiWIJabZnfWCA3ZkG9b31AlPnFA6a%2F8%2B9ibwcNMv21JKUENu%2BnxwEdQnSK45wmXjSikuEhf9avIW7Q666qg7d7XeBS1ZerNE6U&X-Amz-Signature=d87a8cb7e2f35e74d0aa83ae46abb6e5fba53a6910ee07af02916887372b1582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
