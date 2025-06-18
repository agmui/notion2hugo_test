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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POHSLOD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDDS%2F1e%2BIowhIAdq%2FBVR9OQmBFn6uD7hAAO9dqb2ZDEQIgHXsKFLNptRwhq%2FC5zr42uSuYNsXN%2BgVZ8TUl82276XMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMIDUf4t09NLvjcyyrcAwygVADBySvpTcPXTEuNuAGXLR4dSk5rk2bwBqop%2BcEg0lw7y3UA3QMwpPXj2O2MqusxwYue30JEtLB%2FakVVzcsAADtLtbPnC1%2FEkvuDE1KKBbqfLUMolb0aIFs6Krr3M%2BId7k4qSBIgAS5ASepTXGU97QchCyULmgqFTJadpDh%2FXUWUtTl8KeRGbScZGaGbyRLq6QLh6ZUqkgrR1a%2FNLs%2FehKs2WxFK88Oz8lp8djMB2h09NZHqYCVj9SALv3Nnw7Pc%2BlX7ALxy1R%2Bcw5atICYldR6LVv4Kf0MXXfFvKe62%2F%2BJVb61WqYC%2FuqXRhlBvpwaK%2FzjNLG5ry3glAQu1k6Cm3UZmoEQkzPw8Hgbc4wuNhQ%2FhUgx8GVPpEOz%2Fta%2BKl6FtVFACs39PV6Ngr16GWqgLmjz8ja28VAdjNS3JP2%2F9%2BoGxXzD3nk23yL8GjonFYw73xPR5JO%2Fj%2F68UNfhJ1cvNPiXc%2BcgF9Juosa2Ny2G5QrQqLsnEvIfH%2BKYaXCeOvq1AERqZJcTo2Fdeo8MHBXeFXaHwIXqiTSmsWt%2BudW9Sv1k1QXNavOOYUgl%2BhQ2YwiLx6X43O4BOnmnTmAHjYaj9SPL0g7UNHgP3F4PjxnNwjxIRFCnFDaPh%2B4myMIr0ysIGOqUB9jGK3fD0IXHlR9bl3L3blG1a%2B4BNRtnSPqv3kGeCuaqQZ3%2BEnNiS1YrEihBqgCeC1zL8w2uWGrpIFZ5XHGyAkRmRdeFswlgN7HoDE2jlU72hHm5wOfs3NtUJGLWQQ8tOUmGew8EVxxnq5CgqkDOkKj79iAU5WLrLrHJaahfO0dIbJO4SEvjsaREfaWHQy8WIupQc3ztXh%2FRIXQ%2BLc0Sk3M7VyCLj&X-Amz-Signature=088c2dbefab610228e2a5a5573f67f54ba74e164af20b3ebd2f38459aaedbe56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POHSLOD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDDS%2F1e%2BIowhIAdq%2FBVR9OQmBFn6uD7hAAO9dqb2ZDEQIgHXsKFLNptRwhq%2FC5zr42uSuYNsXN%2BgVZ8TUl82276XMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMIDUf4t09NLvjcyyrcAwygVADBySvpTcPXTEuNuAGXLR4dSk5rk2bwBqop%2BcEg0lw7y3UA3QMwpPXj2O2MqusxwYue30JEtLB%2FakVVzcsAADtLtbPnC1%2FEkvuDE1KKBbqfLUMolb0aIFs6Krr3M%2BId7k4qSBIgAS5ASepTXGU97QchCyULmgqFTJadpDh%2FXUWUtTl8KeRGbScZGaGbyRLq6QLh6ZUqkgrR1a%2FNLs%2FehKs2WxFK88Oz8lp8djMB2h09NZHqYCVj9SALv3Nnw7Pc%2BlX7ALxy1R%2Bcw5atICYldR6LVv4Kf0MXXfFvKe62%2F%2BJVb61WqYC%2FuqXRhlBvpwaK%2FzjNLG5ry3glAQu1k6Cm3UZmoEQkzPw8Hgbc4wuNhQ%2FhUgx8GVPpEOz%2Fta%2BKl6FtVFACs39PV6Ngr16GWqgLmjz8ja28VAdjNS3JP2%2F9%2BoGxXzD3nk23yL8GjonFYw73xPR5JO%2Fj%2F68UNfhJ1cvNPiXc%2BcgF9Juosa2Ny2G5QrQqLsnEvIfH%2BKYaXCeOvq1AERqZJcTo2Fdeo8MHBXeFXaHwIXqiTSmsWt%2BudW9Sv1k1QXNavOOYUgl%2BhQ2YwiLx6X43O4BOnmnTmAHjYaj9SPL0g7UNHgP3F4PjxnNwjxIRFCnFDaPh%2B4myMIr0ysIGOqUB9jGK3fD0IXHlR9bl3L3blG1a%2B4BNRtnSPqv3kGeCuaqQZ3%2BEnNiS1YrEihBqgCeC1zL8w2uWGrpIFZ5XHGyAkRmRdeFswlgN7HoDE2jlU72hHm5wOfs3NtUJGLWQQ8tOUmGew8EVxxnq5CgqkDOkKj79iAU5WLrLrHJaahfO0dIbJO4SEvjsaREfaWHQy8WIupQc3ztXh%2FRIXQ%2BLc0Sk3M7VyCLj&X-Amz-Signature=837075fac06b20a68315375cd3678803084a26aee34a88da525c38f65eff61d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POHSLOD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDDS%2F1e%2BIowhIAdq%2FBVR9OQmBFn6uD7hAAO9dqb2ZDEQIgHXsKFLNptRwhq%2FC5zr42uSuYNsXN%2BgVZ8TUl82276XMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMIDUf4t09NLvjcyyrcAwygVADBySvpTcPXTEuNuAGXLR4dSk5rk2bwBqop%2BcEg0lw7y3UA3QMwpPXj2O2MqusxwYue30JEtLB%2FakVVzcsAADtLtbPnC1%2FEkvuDE1KKBbqfLUMolb0aIFs6Krr3M%2BId7k4qSBIgAS5ASepTXGU97QchCyULmgqFTJadpDh%2FXUWUtTl8KeRGbScZGaGbyRLq6QLh6ZUqkgrR1a%2FNLs%2FehKs2WxFK88Oz8lp8djMB2h09NZHqYCVj9SALv3Nnw7Pc%2BlX7ALxy1R%2Bcw5atICYldR6LVv4Kf0MXXfFvKe62%2F%2BJVb61WqYC%2FuqXRhlBvpwaK%2FzjNLG5ry3glAQu1k6Cm3UZmoEQkzPw8Hgbc4wuNhQ%2FhUgx8GVPpEOz%2Fta%2BKl6FtVFACs39PV6Ngr16GWqgLmjz8ja28VAdjNS3JP2%2F9%2BoGxXzD3nk23yL8GjonFYw73xPR5JO%2Fj%2F68UNfhJ1cvNPiXc%2BcgF9Juosa2Ny2G5QrQqLsnEvIfH%2BKYaXCeOvq1AERqZJcTo2Fdeo8MHBXeFXaHwIXqiTSmsWt%2BudW9Sv1k1QXNavOOYUgl%2BhQ2YwiLx6X43O4BOnmnTmAHjYaj9SPL0g7UNHgP3F4PjxnNwjxIRFCnFDaPh%2B4myMIr0ysIGOqUB9jGK3fD0IXHlR9bl3L3blG1a%2B4BNRtnSPqv3kGeCuaqQZ3%2BEnNiS1YrEihBqgCeC1zL8w2uWGrpIFZ5XHGyAkRmRdeFswlgN7HoDE2jlU72hHm5wOfs3NtUJGLWQQ8tOUmGew8EVxxnq5CgqkDOkKj79iAU5WLrLrHJaahfO0dIbJO4SEvjsaREfaWHQy8WIupQc3ztXh%2FRIXQ%2BLc0Sk3M7VyCLj&X-Amz-Signature=d5ef0fef8f21d1ebcbdce0e8d2ab961a1f916af4486d319d506ee18393a7f83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POHSLOD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDDS%2F1e%2BIowhIAdq%2FBVR9OQmBFn6uD7hAAO9dqb2ZDEQIgHXsKFLNptRwhq%2FC5zr42uSuYNsXN%2BgVZ8TUl82276XMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMIDUf4t09NLvjcyyrcAwygVADBySvpTcPXTEuNuAGXLR4dSk5rk2bwBqop%2BcEg0lw7y3UA3QMwpPXj2O2MqusxwYue30JEtLB%2FakVVzcsAADtLtbPnC1%2FEkvuDE1KKBbqfLUMolb0aIFs6Krr3M%2BId7k4qSBIgAS5ASepTXGU97QchCyULmgqFTJadpDh%2FXUWUtTl8KeRGbScZGaGbyRLq6QLh6ZUqkgrR1a%2FNLs%2FehKs2WxFK88Oz8lp8djMB2h09NZHqYCVj9SALv3Nnw7Pc%2BlX7ALxy1R%2Bcw5atICYldR6LVv4Kf0MXXfFvKe62%2F%2BJVb61WqYC%2FuqXRhlBvpwaK%2FzjNLG5ry3glAQu1k6Cm3UZmoEQkzPw8Hgbc4wuNhQ%2FhUgx8GVPpEOz%2Fta%2BKl6FtVFACs39PV6Ngr16GWqgLmjz8ja28VAdjNS3JP2%2F9%2BoGxXzD3nk23yL8GjonFYw73xPR5JO%2Fj%2F68UNfhJ1cvNPiXc%2BcgF9Juosa2Ny2G5QrQqLsnEvIfH%2BKYaXCeOvq1AERqZJcTo2Fdeo8MHBXeFXaHwIXqiTSmsWt%2BudW9Sv1k1QXNavOOYUgl%2BhQ2YwiLx6X43O4BOnmnTmAHjYaj9SPL0g7UNHgP3F4PjxnNwjxIRFCnFDaPh%2B4myMIr0ysIGOqUB9jGK3fD0IXHlR9bl3L3blG1a%2B4BNRtnSPqv3kGeCuaqQZ3%2BEnNiS1YrEihBqgCeC1zL8w2uWGrpIFZ5XHGyAkRmRdeFswlgN7HoDE2jlU72hHm5wOfs3NtUJGLWQQ8tOUmGew8EVxxnq5CgqkDOkKj79iAU5WLrLrHJaahfO0dIbJO4SEvjsaREfaWHQy8WIupQc3ztXh%2FRIXQ%2BLc0Sk3M7VyCLj&X-Amz-Signature=1722a9d2dafa89279d18798716bb08733bd109667cc1d1a4427399f32df928bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POHSLOD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDDS%2F1e%2BIowhIAdq%2FBVR9OQmBFn6uD7hAAO9dqb2ZDEQIgHXsKFLNptRwhq%2FC5zr42uSuYNsXN%2BgVZ8TUl82276XMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMIDUf4t09NLvjcyyrcAwygVADBySvpTcPXTEuNuAGXLR4dSk5rk2bwBqop%2BcEg0lw7y3UA3QMwpPXj2O2MqusxwYue30JEtLB%2FakVVzcsAADtLtbPnC1%2FEkvuDE1KKBbqfLUMolb0aIFs6Krr3M%2BId7k4qSBIgAS5ASepTXGU97QchCyULmgqFTJadpDh%2FXUWUtTl8KeRGbScZGaGbyRLq6QLh6ZUqkgrR1a%2FNLs%2FehKs2WxFK88Oz8lp8djMB2h09NZHqYCVj9SALv3Nnw7Pc%2BlX7ALxy1R%2Bcw5atICYldR6LVv4Kf0MXXfFvKe62%2F%2BJVb61WqYC%2FuqXRhlBvpwaK%2FzjNLG5ry3glAQu1k6Cm3UZmoEQkzPw8Hgbc4wuNhQ%2FhUgx8GVPpEOz%2Fta%2BKl6FtVFACs39PV6Ngr16GWqgLmjz8ja28VAdjNS3JP2%2F9%2BoGxXzD3nk23yL8GjonFYw73xPR5JO%2Fj%2F68UNfhJ1cvNPiXc%2BcgF9Juosa2Ny2G5QrQqLsnEvIfH%2BKYaXCeOvq1AERqZJcTo2Fdeo8MHBXeFXaHwIXqiTSmsWt%2BudW9Sv1k1QXNavOOYUgl%2BhQ2YwiLx6X43O4BOnmnTmAHjYaj9SPL0g7UNHgP3F4PjxnNwjxIRFCnFDaPh%2B4myMIr0ysIGOqUB9jGK3fD0IXHlR9bl3L3blG1a%2B4BNRtnSPqv3kGeCuaqQZ3%2BEnNiS1YrEihBqgCeC1zL8w2uWGrpIFZ5XHGyAkRmRdeFswlgN7HoDE2jlU72hHm5wOfs3NtUJGLWQQ8tOUmGew8EVxxnq5CgqkDOkKj79iAU5WLrLrHJaahfO0dIbJO4SEvjsaREfaWHQy8WIupQc3ztXh%2FRIXQ%2BLc0Sk3M7VyCLj&X-Amz-Signature=fd168b6baa3538c5a6ada65b7e651e828533cc3bc2298f4968abccc7e6c4a48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POHSLOD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDDS%2F1e%2BIowhIAdq%2FBVR9OQmBFn6uD7hAAO9dqb2ZDEQIgHXsKFLNptRwhq%2FC5zr42uSuYNsXN%2BgVZ8TUl82276XMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMIDUf4t09NLvjcyyrcAwygVADBySvpTcPXTEuNuAGXLR4dSk5rk2bwBqop%2BcEg0lw7y3UA3QMwpPXj2O2MqusxwYue30JEtLB%2FakVVzcsAADtLtbPnC1%2FEkvuDE1KKBbqfLUMolb0aIFs6Krr3M%2BId7k4qSBIgAS5ASepTXGU97QchCyULmgqFTJadpDh%2FXUWUtTl8KeRGbScZGaGbyRLq6QLh6ZUqkgrR1a%2FNLs%2FehKs2WxFK88Oz8lp8djMB2h09NZHqYCVj9SALv3Nnw7Pc%2BlX7ALxy1R%2Bcw5atICYldR6LVv4Kf0MXXfFvKe62%2F%2BJVb61WqYC%2FuqXRhlBvpwaK%2FzjNLG5ry3glAQu1k6Cm3UZmoEQkzPw8Hgbc4wuNhQ%2FhUgx8GVPpEOz%2Fta%2BKl6FtVFACs39PV6Ngr16GWqgLmjz8ja28VAdjNS3JP2%2F9%2BoGxXzD3nk23yL8GjonFYw73xPR5JO%2Fj%2F68UNfhJ1cvNPiXc%2BcgF9Juosa2Ny2G5QrQqLsnEvIfH%2BKYaXCeOvq1AERqZJcTo2Fdeo8MHBXeFXaHwIXqiTSmsWt%2BudW9Sv1k1QXNavOOYUgl%2BhQ2YwiLx6X43O4BOnmnTmAHjYaj9SPL0g7UNHgP3F4PjxnNwjxIRFCnFDaPh%2B4myMIr0ysIGOqUB9jGK3fD0IXHlR9bl3L3blG1a%2B4BNRtnSPqv3kGeCuaqQZ3%2BEnNiS1YrEihBqgCeC1zL8w2uWGrpIFZ5XHGyAkRmRdeFswlgN7HoDE2jlU72hHm5wOfs3NtUJGLWQQ8tOUmGew8EVxxnq5CgqkDOkKj79iAU5WLrLrHJaahfO0dIbJO4SEvjsaREfaWHQy8WIupQc3ztXh%2FRIXQ%2BLc0Sk3M7VyCLj&X-Amz-Signature=d6970de059bd491247d9acfa5fd668c5541b93de5ea1eec8a7c2fffe27bd9454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POHSLOD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDDS%2F1e%2BIowhIAdq%2FBVR9OQmBFn6uD7hAAO9dqb2ZDEQIgHXsKFLNptRwhq%2FC5zr42uSuYNsXN%2BgVZ8TUl82276XMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMIDUf4t09NLvjcyyrcAwygVADBySvpTcPXTEuNuAGXLR4dSk5rk2bwBqop%2BcEg0lw7y3UA3QMwpPXj2O2MqusxwYue30JEtLB%2FakVVzcsAADtLtbPnC1%2FEkvuDE1KKBbqfLUMolb0aIFs6Krr3M%2BId7k4qSBIgAS5ASepTXGU97QchCyULmgqFTJadpDh%2FXUWUtTl8KeRGbScZGaGbyRLq6QLh6ZUqkgrR1a%2FNLs%2FehKs2WxFK88Oz8lp8djMB2h09NZHqYCVj9SALv3Nnw7Pc%2BlX7ALxy1R%2Bcw5atICYldR6LVv4Kf0MXXfFvKe62%2F%2BJVb61WqYC%2FuqXRhlBvpwaK%2FzjNLG5ry3glAQu1k6Cm3UZmoEQkzPw8Hgbc4wuNhQ%2FhUgx8GVPpEOz%2Fta%2BKl6FtVFACs39PV6Ngr16GWqgLmjz8ja28VAdjNS3JP2%2F9%2BoGxXzD3nk23yL8GjonFYw73xPR5JO%2Fj%2F68UNfhJ1cvNPiXc%2BcgF9Juosa2Ny2G5QrQqLsnEvIfH%2BKYaXCeOvq1AERqZJcTo2Fdeo8MHBXeFXaHwIXqiTSmsWt%2BudW9Sv1k1QXNavOOYUgl%2BhQ2YwiLx6X43O4BOnmnTmAHjYaj9SPL0g7UNHgP3F4PjxnNwjxIRFCnFDaPh%2B4myMIr0ysIGOqUB9jGK3fD0IXHlR9bl3L3blG1a%2B4BNRtnSPqv3kGeCuaqQZ3%2BEnNiS1YrEihBqgCeC1zL8w2uWGrpIFZ5XHGyAkRmRdeFswlgN7HoDE2jlU72hHm5wOfs3NtUJGLWQQ8tOUmGew8EVxxnq5CgqkDOkKj79iAU5WLrLrHJaahfO0dIbJO4SEvjsaREfaWHQy8WIupQc3ztXh%2FRIXQ%2BLc0Sk3M7VyCLj&X-Amz-Signature=c64bd7a78d7039857767167d7c1736f849e96f513306d36bfa8baa291a8e30f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
