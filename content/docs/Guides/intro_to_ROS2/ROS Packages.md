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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV3ZH72%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBEqxy2rEH8RNRR6hgsMx%2FMNmN64M290q5sqg3c30aEVAiA%2ByIf1pvC1n6GmyG3yu1J%2FQQJ5xDKUNg111TawK6K%2BnCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcV6oHAKg92nyogcKtwDcX1i%2B8efOd4JsVhNHQYqh2z%2FroHCFIdihbH%2BNqIZ4le%2B5muaNfFa4CLdHF1wkdGRQtnMJfvtNs6sxKrzNercq8xt1KxrxcZEDBQpbDQrP01%2FnZJFrBPpUsn0Ixp2AjdVYVSUz5Ogn3v2U5nK34NkYmRjll2ZeB3RzHyiHKMDbc4Bo4wh4fCxbCITj1TsvV8mngG6e4r6hlALxtFxLZbyL5EkNORZZMckwDcBoAajrrzPelCVgt1R8EyH3L4rPO39OjbnC9wl4NO%2BaRjs2Z9w8n%2B8JNYQWBM%2BPVNiz%2F4GwR0%2BMiOQpcuhuCKzdxS2uFnLylcnYsBVHDnpGuTeEGlBhOvM3UCUfhIpLU9Cx6BlxbSMo7hlGdQG0mbrEvQpsA7A4%2FOtRnq3IdX8pKo9So1Xdh3jbRGoy6CwaCBG35tgI5%2Fk6FBatZQ6BMQ86LJmtWIlx4hCltVxTSti5nKzhyyGqyYxhXpoAMTStOfCDW7P%2BvgEpRlPq1CwLpv5ssl1E6Wpi80REzeKHWCpYgABTwxYyocRrfMDma1BUdICHNjt%2Fg9H3oBG5AEL%2BrK1FDKt4kRGR95WJkPw2bC%2FxEXn1LxoZX8f8Fs3TKHi%2F3DwOYKLtLrUhKgm8UTebWtF3NQw6q%2FwvwY6pgHZ9lntlTsLxAhURdMHIgTI78fmFQbg4a9Z3mshC7LPmVDB86YG37ujfTQouODkmKWhyHSyqe5uToj0DkjaoTZE0GwwsxCBlGYoX%2F8JSjDqPa0ojd8HWHhpb0x6zhZWmGAyGtgyzFByRqdGkH6hauOyIDLliCcpbhqJl%2BSDnB81akLOK%2ByGKYLhDMAuyM714f51TzF6B5H2%2FYGnsI1mjqWxJv8PsYDy&X-Amz-Signature=e8164e6df62a63ea0b584bc6b944f9ffaea220ac4a7097cad10336a11f9a3d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV3ZH72%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBEqxy2rEH8RNRR6hgsMx%2FMNmN64M290q5sqg3c30aEVAiA%2ByIf1pvC1n6GmyG3yu1J%2FQQJ5xDKUNg111TawK6K%2BnCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcV6oHAKg92nyogcKtwDcX1i%2B8efOd4JsVhNHQYqh2z%2FroHCFIdihbH%2BNqIZ4le%2B5muaNfFa4CLdHF1wkdGRQtnMJfvtNs6sxKrzNercq8xt1KxrxcZEDBQpbDQrP01%2FnZJFrBPpUsn0Ixp2AjdVYVSUz5Ogn3v2U5nK34NkYmRjll2ZeB3RzHyiHKMDbc4Bo4wh4fCxbCITj1TsvV8mngG6e4r6hlALxtFxLZbyL5EkNORZZMckwDcBoAajrrzPelCVgt1R8EyH3L4rPO39OjbnC9wl4NO%2BaRjs2Z9w8n%2B8JNYQWBM%2BPVNiz%2F4GwR0%2BMiOQpcuhuCKzdxS2uFnLylcnYsBVHDnpGuTeEGlBhOvM3UCUfhIpLU9Cx6BlxbSMo7hlGdQG0mbrEvQpsA7A4%2FOtRnq3IdX8pKo9So1Xdh3jbRGoy6CwaCBG35tgI5%2Fk6FBatZQ6BMQ86LJmtWIlx4hCltVxTSti5nKzhyyGqyYxhXpoAMTStOfCDW7P%2BvgEpRlPq1CwLpv5ssl1E6Wpi80REzeKHWCpYgABTwxYyocRrfMDma1BUdICHNjt%2Fg9H3oBG5AEL%2BrK1FDKt4kRGR95WJkPw2bC%2FxEXn1LxoZX8f8Fs3TKHi%2F3DwOYKLtLrUhKgm8UTebWtF3NQw6q%2FwvwY6pgHZ9lntlTsLxAhURdMHIgTI78fmFQbg4a9Z3mshC7LPmVDB86YG37ujfTQouODkmKWhyHSyqe5uToj0DkjaoTZE0GwwsxCBlGYoX%2F8JSjDqPa0ojd8HWHhpb0x6zhZWmGAyGtgyzFByRqdGkH6hauOyIDLliCcpbhqJl%2BSDnB81akLOK%2ByGKYLhDMAuyM714f51TzF6B5H2%2FYGnsI1mjqWxJv8PsYDy&X-Amz-Signature=fa54c68b29d6928fa3e4dbe03e97895b8a97e4c6e6a55f210675c931b55324e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV3ZH72%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBEqxy2rEH8RNRR6hgsMx%2FMNmN64M290q5sqg3c30aEVAiA%2ByIf1pvC1n6GmyG3yu1J%2FQQJ5xDKUNg111TawK6K%2BnCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcV6oHAKg92nyogcKtwDcX1i%2B8efOd4JsVhNHQYqh2z%2FroHCFIdihbH%2BNqIZ4le%2B5muaNfFa4CLdHF1wkdGRQtnMJfvtNs6sxKrzNercq8xt1KxrxcZEDBQpbDQrP01%2FnZJFrBPpUsn0Ixp2AjdVYVSUz5Ogn3v2U5nK34NkYmRjll2ZeB3RzHyiHKMDbc4Bo4wh4fCxbCITj1TsvV8mngG6e4r6hlALxtFxLZbyL5EkNORZZMckwDcBoAajrrzPelCVgt1R8EyH3L4rPO39OjbnC9wl4NO%2BaRjs2Z9w8n%2B8JNYQWBM%2BPVNiz%2F4GwR0%2BMiOQpcuhuCKzdxS2uFnLylcnYsBVHDnpGuTeEGlBhOvM3UCUfhIpLU9Cx6BlxbSMo7hlGdQG0mbrEvQpsA7A4%2FOtRnq3IdX8pKo9So1Xdh3jbRGoy6CwaCBG35tgI5%2Fk6FBatZQ6BMQ86LJmtWIlx4hCltVxTSti5nKzhyyGqyYxhXpoAMTStOfCDW7P%2BvgEpRlPq1CwLpv5ssl1E6Wpi80REzeKHWCpYgABTwxYyocRrfMDma1BUdICHNjt%2Fg9H3oBG5AEL%2BrK1FDKt4kRGR95WJkPw2bC%2FxEXn1LxoZX8f8Fs3TKHi%2F3DwOYKLtLrUhKgm8UTebWtF3NQw6q%2FwvwY6pgHZ9lntlTsLxAhURdMHIgTI78fmFQbg4a9Z3mshC7LPmVDB86YG37ujfTQouODkmKWhyHSyqe5uToj0DkjaoTZE0GwwsxCBlGYoX%2F8JSjDqPa0ojd8HWHhpb0x6zhZWmGAyGtgyzFByRqdGkH6hauOyIDLliCcpbhqJl%2BSDnB81akLOK%2ByGKYLhDMAuyM714f51TzF6B5H2%2FYGnsI1mjqWxJv8PsYDy&X-Amz-Signature=96d9ee60d612d44d02746163c639b7a19ce121df0807f3b377f9a0a5c37c1380&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV3ZH72%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBEqxy2rEH8RNRR6hgsMx%2FMNmN64M290q5sqg3c30aEVAiA%2ByIf1pvC1n6GmyG3yu1J%2FQQJ5xDKUNg111TawK6K%2BnCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcV6oHAKg92nyogcKtwDcX1i%2B8efOd4JsVhNHQYqh2z%2FroHCFIdihbH%2BNqIZ4le%2B5muaNfFa4CLdHF1wkdGRQtnMJfvtNs6sxKrzNercq8xt1KxrxcZEDBQpbDQrP01%2FnZJFrBPpUsn0Ixp2AjdVYVSUz5Ogn3v2U5nK34NkYmRjll2ZeB3RzHyiHKMDbc4Bo4wh4fCxbCITj1TsvV8mngG6e4r6hlALxtFxLZbyL5EkNORZZMckwDcBoAajrrzPelCVgt1R8EyH3L4rPO39OjbnC9wl4NO%2BaRjs2Z9w8n%2B8JNYQWBM%2BPVNiz%2F4GwR0%2BMiOQpcuhuCKzdxS2uFnLylcnYsBVHDnpGuTeEGlBhOvM3UCUfhIpLU9Cx6BlxbSMo7hlGdQG0mbrEvQpsA7A4%2FOtRnq3IdX8pKo9So1Xdh3jbRGoy6CwaCBG35tgI5%2Fk6FBatZQ6BMQ86LJmtWIlx4hCltVxTSti5nKzhyyGqyYxhXpoAMTStOfCDW7P%2BvgEpRlPq1CwLpv5ssl1E6Wpi80REzeKHWCpYgABTwxYyocRrfMDma1BUdICHNjt%2Fg9H3oBG5AEL%2BrK1FDKt4kRGR95WJkPw2bC%2FxEXn1LxoZX8f8Fs3TKHi%2F3DwOYKLtLrUhKgm8UTebWtF3NQw6q%2FwvwY6pgHZ9lntlTsLxAhURdMHIgTI78fmFQbg4a9Z3mshC7LPmVDB86YG37ujfTQouODkmKWhyHSyqe5uToj0DkjaoTZE0GwwsxCBlGYoX%2F8JSjDqPa0ojd8HWHhpb0x6zhZWmGAyGtgyzFByRqdGkH6hauOyIDLliCcpbhqJl%2BSDnB81akLOK%2ByGKYLhDMAuyM714f51TzF6B5H2%2FYGnsI1mjqWxJv8PsYDy&X-Amz-Signature=8b8c1691a364e96977ce638953580aa3abde5a660de8ed03de5006d4bd3807b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV3ZH72%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBEqxy2rEH8RNRR6hgsMx%2FMNmN64M290q5sqg3c30aEVAiA%2ByIf1pvC1n6GmyG3yu1J%2FQQJ5xDKUNg111TawK6K%2BnCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcV6oHAKg92nyogcKtwDcX1i%2B8efOd4JsVhNHQYqh2z%2FroHCFIdihbH%2BNqIZ4le%2B5muaNfFa4CLdHF1wkdGRQtnMJfvtNs6sxKrzNercq8xt1KxrxcZEDBQpbDQrP01%2FnZJFrBPpUsn0Ixp2AjdVYVSUz5Ogn3v2U5nK34NkYmRjll2ZeB3RzHyiHKMDbc4Bo4wh4fCxbCITj1TsvV8mngG6e4r6hlALxtFxLZbyL5EkNORZZMckwDcBoAajrrzPelCVgt1R8EyH3L4rPO39OjbnC9wl4NO%2BaRjs2Z9w8n%2B8JNYQWBM%2BPVNiz%2F4GwR0%2BMiOQpcuhuCKzdxS2uFnLylcnYsBVHDnpGuTeEGlBhOvM3UCUfhIpLU9Cx6BlxbSMo7hlGdQG0mbrEvQpsA7A4%2FOtRnq3IdX8pKo9So1Xdh3jbRGoy6CwaCBG35tgI5%2Fk6FBatZQ6BMQ86LJmtWIlx4hCltVxTSti5nKzhyyGqyYxhXpoAMTStOfCDW7P%2BvgEpRlPq1CwLpv5ssl1E6Wpi80REzeKHWCpYgABTwxYyocRrfMDma1BUdICHNjt%2Fg9H3oBG5AEL%2BrK1FDKt4kRGR95WJkPw2bC%2FxEXn1LxoZX8f8Fs3TKHi%2F3DwOYKLtLrUhKgm8UTebWtF3NQw6q%2FwvwY6pgHZ9lntlTsLxAhURdMHIgTI78fmFQbg4a9Z3mshC7LPmVDB86YG37ujfTQouODkmKWhyHSyqe5uToj0DkjaoTZE0GwwsxCBlGYoX%2F8JSjDqPa0ojd8HWHhpb0x6zhZWmGAyGtgyzFByRqdGkH6hauOyIDLliCcpbhqJl%2BSDnB81akLOK%2ByGKYLhDMAuyM714f51TzF6B5H2%2FYGnsI1mjqWxJv8PsYDy&X-Amz-Signature=a7cb21e33ac0b04837f69a8bc7cfad521b8dd915fce279cef876e1849f15e883&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV3ZH72%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBEqxy2rEH8RNRR6hgsMx%2FMNmN64M290q5sqg3c30aEVAiA%2ByIf1pvC1n6GmyG3yu1J%2FQQJ5xDKUNg111TawK6K%2BnCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcV6oHAKg92nyogcKtwDcX1i%2B8efOd4JsVhNHQYqh2z%2FroHCFIdihbH%2BNqIZ4le%2B5muaNfFa4CLdHF1wkdGRQtnMJfvtNs6sxKrzNercq8xt1KxrxcZEDBQpbDQrP01%2FnZJFrBPpUsn0Ixp2AjdVYVSUz5Ogn3v2U5nK34NkYmRjll2ZeB3RzHyiHKMDbc4Bo4wh4fCxbCITj1TsvV8mngG6e4r6hlALxtFxLZbyL5EkNORZZMckwDcBoAajrrzPelCVgt1R8EyH3L4rPO39OjbnC9wl4NO%2BaRjs2Z9w8n%2B8JNYQWBM%2BPVNiz%2F4GwR0%2BMiOQpcuhuCKzdxS2uFnLylcnYsBVHDnpGuTeEGlBhOvM3UCUfhIpLU9Cx6BlxbSMo7hlGdQG0mbrEvQpsA7A4%2FOtRnq3IdX8pKo9So1Xdh3jbRGoy6CwaCBG35tgI5%2Fk6FBatZQ6BMQ86LJmtWIlx4hCltVxTSti5nKzhyyGqyYxhXpoAMTStOfCDW7P%2BvgEpRlPq1CwLpv5ssl1E6Wpi80REzeKHWCpYgABTwxYyocRrfMDma1BUdICHNjt%2Fg9H3oBG5AEL%2BrK1FDKt4kRGR95WJkPw2bC%2FxEXn1LxoZX8f8Fs3TKHi%2F3DwOYKLtLrUhKgm8UTebWtF3NQw6q%2FwvwY6pgHZ9lntlTsLxAhURdMHIgTI78fmFQbg4a9Z3mshC7LPmVDB86YG37ujfTQouODkmKWhyHSyqe5uToj0DkjaoTZE0GwwsxCBlGYoX%2F8JSjDqPa0ojd8HWHhpb0x6zhZWmGAyGtgyzFByRqdGkH6hauOyIDLliCcpbhqJl%2BSDnB81akLOK%2ByGKYLhDMAuyM714f51TzF6B5H2%2FYGnsI1mjqWxJv8PsYDy&X-Amz-Signature=d4b7a73753a3ef22f2a992e653050f92670968f00b3de7563973e56d0c67fc0f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV3ZH72%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBEqxy2rEH8RNRR6hgsMx%2FMNmN64M290q5sqg3c30aEVAiA%2ByIf1pvC1n6GmyG3yu1J%2FQQJ5xDKUNg111TawK6K%2BnCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcV6oHAKg92nyogcKtwDcX1i%2B8efOd4JsVhNHQYqh2z%2FroHCFIdihbH%2BNqIZ4le%2B5muaNfFa4CLdHF1wkdGRQtnMJfvtNs6sxKrzNercq8xt1KxrxcZEDBQpbDQrP01%2FnZJFrBPpUsn0Ixp2AjdVYVSUz5Ogn3v2U5nK34NkYmRjll2ZeB3RzHyiHKMDbc4Bo4wh4fCxbCITj1TsvV8mngG6e4r6hlALxtFxLZbyL5EkNORZZMckwDcBoAajrrzPelCVgt1R8EyH3L4rPO39OjbnC9wl4NO%2BaRjs2Z9w8n%2B8JNYQWBM%2BPVNiz%2F4GwR0%2BMiOQpcuhuCKzdxS2uFnLylcnYsBVHDnpGuTeEGlBhOvM3UCUfhIpLU9Cx6BlxbSMo7hlGdQG0mbrEvQpsA7A4%2FOtRnq3IdX8pKo9So1Xdh3jbRGoy6CwaCBG35tgI5%2Fk6FBatZQ6BMQ86LJmtWIlx4hCltVxTSti5nKzhyyGqyYxhXpoAMTStOfCDW7P%2BvgEpRlPq1CwLpv5ssl1E6Wpi80REzeKHWCpYgABTwxYyocRrfMDma1BUdICHNjt%2Fg9H3oBG5AEL%2BrK1FDKt4kRGR95WJkPw2bC%2FxEXn1LxoZX8f8Fs3TKHi%2F3DwOYKLtLrUhKgm8UTebWtF3NQw6q%2FwvwY6pgHZ9lntlTsLxAhURdMHIgTI78fmFQbg4a9Z3mshC7LPmVDB86YG37ujfTQouODkmKWhyHSyqe5uToj0DkjaoTZE0GwwsxCBlGYoX%2F8JSjDqPa0ojd8HWHhpb0x6zhZWmGAyGtgyzFByRqdGkH6hauOyIDLliCcpbhqJl%2BSDnB81akLOK%2ByGKYLhDMAuyM714f51TzF6B5H2%2FYGnsI1mjqWxJv8PsYDy&X-Amz-Signature=9f3f22e2dc7cc6b1754ea7b3715916b847d0fc4aed0af1668afb18f77d824e94&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
