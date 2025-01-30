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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6IDWIPD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvXKjYm01KSsZEv7Fi%2BKm3ExSEtGTnntvnQ8BTsNYm5AiEA8YpcTEtZSuzVkRSgcxj6Kz2gNvzxwM%2FglYX7s5v01LIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX0Bpbt%2B9wKD%2BbxCrcAwdkoc965BnMEcjL9jMtCwtjUuQq3t21AUSCZRrlKcfJwHnODbk0S0Bhne0TIfvWwSE4YgjY0gIlIXQzXojMMzCi0Ki0IaVYPoULkiSTknBXvGh5%2BQQ%2Bj2NC4mOpS4Y9hTbb8gOLf7pjbkwvcozra6ZB0iFZJwrlBDUd5fKC%2Blx94B3kMcgTlGj4z78mxeb7dAqQ2ivSRXTe4VBRqs8BEdut33ymWCD31EE%2BzWXIHn14bXhzqUcMEP%2B8zZpom6kiwc8kOSbN9RuOFIBBR3Cl9d0u3AWyNRxlYbURdlWxoH4O4WDrXXewfu1FnHbOeebh1%2FA6DDmQA%2FUcEu5yncA1j2my1YpU%2BbV4vr8dt41B7s5sLpR0lGNmK1YB7%2FiBeVjVGADSoxNwK0aOeNl9Qh86E7HVJX7OKsVcOw4%2Bz2fgTVmoHgeRAfAZTp0hQB62cO4dw4h8mSsQKlCqw83y6ZrXjaK3x45ludg7%2BrlXzsOuAw%2B3IuTiCTs4%2BzSkpKVS4Px%2FsjAcpcNyYvu09Q8%2Fj%2BDHPtJtargOg9v8ezjPrU3WSt5%2BdxAdRjguhQwLoCxlXfxaHcYI9bqAIT0iNKjpqMLy4R0ary9gErSp3J2E7h4BDsicB58h%2FjAhU36zi8wXMNaj7LwGOqUBpqRDeXXwJZnsEcm%2BDLvfGTMB9EQkJMuxt%2FZqZvv6zh%2Fui1C7U8P7AB2xXg7H6qbQMTm1%2F3VEBy5AKMQ7bg6veU5sRjX50fkHbW2uBSomLElwQC0zqE4pJLKgRRLvbdlTZdMlQA4f0dGK2U8sDTS0bHCxDcHQH7I4YtTykLVUfQc4yEKDLTZy%2F%2BU%2FKEf7i9X9SoWeH7EzOLoGmpm3Zxg3gt9XbesZ&X-Amz-Signature=33593ed5a59ddfa7cc0fea8cacd1fa97de18124e980800a470e3b1e31ccad5c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6IDWIPD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvXKjYm01KSsZEv7Fi%2BKm3ExSEtGTnntvnQ8BTsNYm5AiEA8YpcTEtZSuzVkRSgcxj6Kz2gNvzxwM%2FglYX7s5v01LIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX0Bpbt%2B9wKD%2BbxCrcAwdkoc965BnMEcjL9jMtCwtjUuQq3t21AUSCZRrlKcfJwHnODbk0S0Bhne0TIfvWwSE4YgjY0gIlIXQzXojMMzCi0Ki0IaVYPoULkiSTknBXvGh5%2BQQ%2Bj2NC4mOpS4Y9hTbb8gOLf7pjbkwvcozra6ZB0iFZJwrlBDUd5fKC%2Blx94B3kMcgTlGj4z78mxeb7dAqQ2ivSRXTe4VBRqs8BEdut33ymWCD31EE%2BzWXIHn14bXhzqUcMEP%2B8zZpom6kiwc8kOSbN9RuOFIBBR3Cl9d0u3AWyNRxlYbURdlWxoH4O4WDrXXewfu1FnHbOeebh1%2FA6DDmQA%2FUcEu5yncA1j2my1YpU%2BbV4vr8dt41B7s5sLpR0lGNmK1YB7%2FiBeVjVGADSoxNwK0aOeNl9Qh86E7HVJX7OKsVcOw4%2Bz2fgTVmoHgeRAfAZTp0hQB62cO4dw4h8mSsQKlCqw83y6ZrXjaK3x45ludg7%2BrlXzsOuAw%2B3IuTiCTs4%2BzSkpKVS4Px%2FsjAcpcNyYvu09Q8%2Fj%2BDHPtJtargOg9v8ezjPrU3WSt5%2BdxAdRjguhQwLoCxlXfxaHcYI9bqAIT0iNKjpqMLy4R0ary9gErSp3J2E7h4BDsicB58h%2FjAhU36zi8wXMNaj7LwGOqUBpqRDeXXwJZnsEcm%2BDLvfGTMB9EQkJMuxt%2FZqZvv6zh%2Fui1C7U8P7AB2xXg7H6qbQMTm1%2F3VEBy5AKMQ7bg6veU5sRjX50fkHbW2uBSomLElwQC0zqE4pJLKgRRLvbdlTZdMlQA4f0dGK2U8sDTS0bHCxDcHQH7I4YtTykLVUfQc4yEKDLTZy%2F%2BU%2FKEf7i9X9SoWeH7EzOLoGmpm3Zxg3gt9XbesZ&X-Amz-Signature=8179a23a100f403157b1fd167ad2cbc5e600a3a574c25f7cb5a4901717769bca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6IDWIPD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvXKjYm01KSsZEv7Fi%2BKm3ExSEtGTnntvnQ8BTsNYm5AiEA8YpcTEtZSuzVkRSgcxj6Kz2gNvzxwM%2FglYX7s5v01LIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX0Bpbt%2B9wKD%2BbxCrcAwdkoc965BnMEcjL9jMtCwtjUuQq3t21AUSCZRrlKcfJwHnODbk0S0Bhne0TIfvWwSE4YgjY0gIlIXQzXojMMzCi0Ki0IaVYPoULkiSTknBXvGh5%2BQQ%2Bj2NC4mOpS4Y9hTbb8gOLf7pjbkwvcozra6ZB0iFZJwrlBDUd5fKC%2Blx94B3kMcgTlGj4z78mxeb7dAqQ2ivSRXTe4VBRqs8BEdut33ymWCD31EE%2BzWXIHn14bXhzqUcMEP%2B8zZpom6kiwc8kOSbN9RuOFIBBR3Cl9d0u3AWyNRxlYbURdlWxoH4O4WDrXXewfu1FnHbOeebh1%2FA6DDmQA%2FUcEu5yncA1j2my1YpU%2BbV4vr8dt41B7s5sLpR0lGNmK1YB7%2FiBeVjVGADSoxNwK0aOeNl9Qh86E7HVJX7OKsVcOw4%2Bz2fgTVmoHgeRAfAZTp0hQB62cO4dw4h8mSsQKlCqw83y6ZrXjaK3x45ludg7%2BrlXzsOuAw%2B3IuTiCTs4%2BzSkpKVS4Px%2FsjAcpcNyYvu09Q8%2Fj%2BDHPtJtargOg9v8ezjPrU3WSt5%2BdxAdRjguhQwLoCxlXfxaHcYI9bqAIT0iNKjpqMLy4R0ary9gErSp3J2E7h4BDsicB58h%2FjAhU36zi8wXMNaj7LwGOqUBpqRDeXXwJZnsEcm%2BDLvfGTMB9EQkJMuxt%2FZqZvv6zh%2Fui1C7U8P7AB2xXg7H6qbQMTm1%2F3VEBy5AKMQ7bg6veU5sRjX50fkHbW2uBSomLElwQC0zqE4pJLKgRRLvbdlTZdMlQA4f0dGK2U8sDTS0bHCxDcHQH7I4YtTykLVUfQc4yEKDLTZy%2F%2BU%2FKEf7i9X9SoWeH7EzOLoGmpm3Zxg3gt9XbesZ&X-Amz-Signature=4d498b69befc91ce9d9db207bbe1c6a0ab6898a070720af445b11aae59c0f75c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6IDWIPD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvXKjYm01KSsZEv7Fi%2BKm3ExSEtGTnntvnQ8BTsNYm5AiEA8YpcTEtZSuzVkRSgcxj6Kz2gNvzxwM%2FglYX7s5v01LIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX0Bpbt%2B9wKD%2BbxCrcAwdkoc965BnMEcjL9jMtCwtjUuQq3t21AUSCZRrlKcfJwHnODbk0S0Bhne0TIfvWwSE4YgjY0gIlIXQzXojMMzCi0Ki0IaVYPoULkiSTknBXvGh5%2BQQ%2Bj2NC4mOpS4Y9hTbb8gOLf7pjbkwvcozra6ZB0iFZJwrlBDUd5fKC%2Blx94B3kMcgTlGj4z78mxeb7dAqQ2ivSRXTe4VBRqs8BEdut33ymWCD31EE%2BzWXIHn14bXhzqUcMEP%2B8zZpom6kiwc8kOSbN9RuOFIBBR3Cl9d0u3AWyNRxlYbURdlWxoH4O4WDrXXewfu1FnHbOeebh1%2FA6DDmQA%2FUcEu5yncA1j2my1YpU%2BbV4vr8dt41B7s5sLpR0lGNmK1YB7%2FiBeVjVGADSoxNwK0aOeNl9Qh86E7HVJX7OKsVcOw4%2Bz2fgTVmoHgeRAfAZTp0hQB62cO4dw4h8mSsQKlCqw83y6ZrXjaK3x45ludg7%2BrlXzsOuAw%2B3IuTiCTs4%2BzSkpKVS4Px%2FsjAcpcNyYvu09Q8%2Fj%2BDHPtJtargOg9v8ezjPrU3WSt5%2BdxAdRjguhQwLoCxlXfxaHcYI9bqAIT0iNKjpqMLy4R0ary9gErSp3J2E7h4BDsicB58h%2FjAhU36zi8wXMNaj7LwGOqUBpqRDeXXwJZnsEcm%2BDLvfGTMB9EQkJMuxt%2FZqZvv6zh%2Fui1C7U8P7AB2xXg7H6qbQMTm1%2F3VEBy5AKMQ7bg6veU5sRjX50fkHbW2uBSomLElwQC0zqE4pJLKgRRLvbdlTZdMlQA4f0dGK2U8sDTS0bHCxDcHQH7I4YtTykLVUfQc4yEKDLTZy%2F%2BU%2FKEf7i9X9SoWeH7EzOLoGmpm3Zxg3gt9XbesZ&X-Amz-Signature=7abee51d8bfdcbfbaabf82ac2f46d79948e1ff7ae39a8de3c6a670168814ad8c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6IDWIPD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvXKjYm01KSsZEv7Fi%2BKm3ExSEtGTnntvnQ8BTsNYm5AiEA8YpcTEtZSuzVkRSgcxj6Kz2gNvzxwM%2FglYX7s5v01LIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX0Bpbt%2B9wKD%2BbxCrcAwdkoc965BnMEcjL9jMtCwtjUuQq3t21AUSCZRrlKcfJwHnODbk0S0Bhne0TIfvWwSE4YgjY0gIlIXQzXojMMzCi0Ki0IaVYPoULkiSTknBXvGh5%2BQQ%2Bj2NC4mOpS4Y9hTbb8gOLf7pjbkwvcozra6ZB0iFZJwrlBDUd5fKC%2Blx94B3kMcgTlGj4z78mxeb7dAqQ2ivSRXTe4VBRqs8BEdut33ymWCD31EE%2BzWXIHn14bXhzqUcMEP%2B8zZpom6kiwc8kOSbN9RuOFIBBR3Cl9d0u3AWyNRxlYbURdlWxoH4O4WDrXXewfu1FnHbOeebh1%2FA6DDmQA%2FUcEu5yncA1j2my1YpU%2BbV4vr8dt41B7s5sLpR0lGNmK1YB7%2FiBeVjVGADSoxNwK0aOeNl9Qh86E7HVJX7OKsVcOw4%2Bz2fgTVmoHgeRAfAZTp0hQB62cO4dw4h8mSsQKlCqw83y6ZrXjaK3x45ludg7%2BrlXzsOuAw%2B3IuTiCTs4%2BzSkpKVS4Px%2FsjAcpcNyYvu09Q8%2Fj%2BDHPtJtargOg9v8ezjPrU3WSt5%2BdxAdRjguhQwLoCxlXfxaHcYI9bqAIT0iNKjpqMLy4R0ary9gErSp3J2E7h4BDsicB58h%2FjAhU36zi8wXMNaj7LwGOqUBpqRDeXXwJZnsEcm%2BDLvfGTMB9EQkJMuxt%2FZqZvv6zh%2Fui1C7U8P7AB2xXg7H6qbQMTm1%2F3VEBy5AKMQ7bg6veU5sRjX50fkHbW2uBSomLElwQC0zqE4pJLKgRRLvbdlTZdMlQA4f0dGK2U8sDTS0bHCxDcHQH7I4YtTykLVUfQc4yEKDLTZy%2F%2BU%2FKEf7i9X9SoWeH7EzOLoGmpm3Zxg3gt9XbesZ&X-Amz-Signature=9d4d62d74704ad7aa3df2e4e41d94849bf8da8e35fbf8bee3903e4cca2c82710&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6IDWIPD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvXKjYm01KSsZEv7Fi%2BKm3ExSEtGTnntvnQ8BTsNYm5AiEA8YpcTEtZSuzVkRSgcxj6Kz2gNvzxwM%2FglYX7s5v01LIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX0Bpbt%2B9wKD%2BbxCrcAwdkoc965BnMEcjL9jMtCwtjUuQq3t21AUSCZRrlKcfJwHnODbk0S0Bhne0TIfvWwSE4YgjY0gIlIXQzXojMMzCi0Ki0IaVYPoULkiSTknBXvGh5%2BQQ%2Bj2NC4mOpS4Y9hTbb8gOLf7pjbkwvcozra6ZB0iFZJwrlBDUd5fKC%2Blx94B3kMcgTlGj4z78mxeb7dAqQ2ivSRXTe4VBRqs8BEdut33ymWCD31EE%2BzWXIHn14bXhzqUcMEP%2B8zZpom6kiwc8kOSbN9RuOFIBBR3Cl9d0u3AWyNRxlYbURdlWxoH4O4WDrXXewfu1FnHbOeebh1%2FA6DDmQA%2FUcEu5yncA1j2my1YpU%2BbV4vr8dt41B7s5sLpR0lGNmK1YB7%2FiBeVjVGADSoxNwK0aOeNl9Qh86E7HVJX7OKsVcOw4%2Bz2fgTVmoHgeRAfAZTp0hQB62cO4dw4h8mSsQKlCqw83y6ZrXjaK3x45ludg7%2BrlXzsOuAw%2B3IuTiCTs4%2BzSkpKVS4Px%2FsjAcpcNyYvu09Q8%2Fj%2BDHPtJtargOg9v8ezjPrU3WSt5%2BdxAdRjguhQwLoCxlXfxaHcYI9bqAIT0iNKjpqMLy4R0ary9gErSp3J2E7h4BDsicB58h%2FjAhU36zi8wXMNaj7LwGOqUBpqRDeXXwJZnsEcm%2BDLvfGTMB9EQkJMuxt%2FZqZvv6zh%2Fui1C7U8P7AB2xXg7H6qbQMTm1%2F3VEBy5AKMQ7bg6veU5sRjX50fkHbW2uBSomLElwQC0zqE4pJLKgRRLvbdlTZdMlQA4f0dGK2U8sDTS0bHCxDcHQH7I4YtTykLVUfQc4yEKDLTZy%2F%2BU%2FKEf7i9X9SoWeH7EzOLoGmpm3Zxg3gt9XbesZ&X-Amz-Signature=abaca5fd8074ef6ebb77cf38d73abec8305faed9fa45c661903aa4daf818c701&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6IDWIPD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvXKjYm01KSsZEv7Fi%2BKm3ExSEtGTnntvnQ8BTsNYm5AiEA8YpcTEtZSuzVkRSgcxj6Kz2gNvzxwM%2FglYX7s5v01LIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX0Bpbt%2B9wKD%2BbxCrcAwdkoc965BnMEcjL9jMtCwtjUuQq3t21AUSCZRrlKcfJwHnODbk0S0Bhne0TIfvWwSE4YgjY0gIlIXQzXojMMzCi0Ki0IaVYPoULkiSTknBXvGh5%2BQQ%2Bj2NC4mOpS4Y9hTbb8gOLf7pjbkwvcozra6ZB0iFZJwrlBDUd5fKC%2Blx94B3kMcgTlGj4z78mxeb7dAqQ2ivSRXTe4VBRqs8BEdut33ymWCD31EE%2BzWXIHn14bXhzqUcMEP%2B8zZpom6kiwc8kOSbN9RuOFIBBR3Cl9d0u3AWyNRxlYbURdlWxoH4O4WDrXXewfu1FnHbOeebh1%2FA6DDmQA%2FUcEu5yncA1j2my1YpU%2BbV4vr8dt41B7s5sLpR0lGNmK1YB7%2FiBeVjVGADSoxNwK0aOeNl9Qh86E7HVJX7OKsVcOw4%2Bz2fgTVmoHgeRAfAZTp0hQB62cO4dw4h8mSsQKlCqw83y6ZrXjaK3x45ludg7%2BrlXzsOuAw%2B3IuTiCTs4%2BzSkpKVS4Px%2FsjAcpcNyYvu09Q8%2Fj%2BDHPtJtargOg9v8ezjPrU3WSt5%2BdxAdRjguhQwLoCxlXfxaHcYI9bqAIT0iNKjpqMLy4R0ary9gErSp3J2E7h4BDsicB58h%2FjAhU36zi8wXMNaj7LwGOqUBpqRDeXXwJZnsEcm%2BDLvfGTMB9EQkJMuxt%2FZqZvv6zh%2Fui1C7U8P7AB2xXg7H6qbQMTm1%2F3VEBy5AKMQ7bg6veU5sRjX50fkHbW2uBSomLElwQC0zqE4pJLKgRRLvbdlTZdMlQA4f0dGK2U8sDTS0bHCxDcHQH7I4YtTykLVUfQc4yEKDLTZy%2F%2BU%2FKEf7i9X9SoWeH7EzOLoGmpm3Zxg3gt9XbesZ&X-Amz-Signature=9dc07029e2f7094de27c78ca85404a7a05acbe102bcf11b0959e30ed98298b24&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
