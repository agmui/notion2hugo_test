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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGBLQQ7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGGDCNwWMm%2FcwnXW6ozL93S0gJOiM6SOOiyBBi6hhK3XAiEA%2BxlRhVB285k%2B9wPfgbQHyza%2FNuY3bIgvly7hAMoWsgcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgNDqrq042no333%2BCrcAwj0c1xNm0n4LB3v21BLZsXZ1PhL7nzi0HzgSXgARm1GHMQy%2FeN7v9BXaPfPxUJ%2B2xBta%2F9GmQDPeAivDIr1kpGqp2VUDAPdoCFRt0oV4uyRP0DOy96ge45HuJDo6P2FqX4OjkqX5wfTo4tBItYp%2BPuP4gtTTWBLwySr3B13rhF4cKRRP%2BohFf%2BgZHuLwAfvfU%2FkYcANlG11lRaC7qUwKRdlAEyRDM3lzZmuMa2kpP7XJLjvyMTxlRyh946Epa94kw2jX1xCj9gTlZFNSlJ2RoBMVCJiWEo%2F55eAzKlSchK8n8oRRxlJnLW0Qto8dKZXZNVFvobs%2FyYt5fbKJi5QCNAlJ8VBXSVN%2FOQTgTJYnWK5csTcZAPz91J%2FKfcoY7dNO7otx4ZX3p7IXxC5yOCZ8g%2BArb8BTUedJ7yAi%2BTdzUBbXpy4Ks3Qb6iu6umy2onByyehu3qF0keHyWgU8wEi2sA8QfLtTyenUzLwwJyesx0ngFbQofyq44MJgH%2FWbZ7b%2BrMlvz9okzGQCs6AXzgCblHE%2F%2BSe86wh%2B%2FuGXxq73KQkkoARTedJdnCIsB79wcxbDcuCSheqwG8UlodIWk6fgShytfnzEl7AydmoRVDkx2w%2Bhgo5zDJiUhVoh48fMP%2F%2FlsAGOqUBVhAdvVGBDr8gyzLNV3nSG9fQto3E9YCsvr15tQ7UtiU%2BtwujnQzhYpPjjGHvs348T%2FkYceCmznqdXPoMLlSU0PEqWKxQLZwSj5ZJKEu8fZXq193FTYKTHtQxcuQT%2BfdPizVLNUlqnz0DKYBvVzqAC1N5o9htHGBV7vTWokQE6Z7Bm1LnJRF%2FnR0JiSLDWb%2B1nLUGpAV6YA%2BamVhZyPiXnFY%2FhpJi&X-Amz-Signature=d90ad0ffba40ab524da717ec75d44d7241cb45dd87b8e68e8d5baaafd39f0ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGBLQQ7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGGDCNwWMm%2FcwnXW6ozL93S0gJOiM6SOOiyBBi6hhK3XAiEA%2BxlRhVB285k%2B9wPfgbQHyza%2FNuY3bIgvly7hAMoWsgcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgNDqrq042no333%2BCrcAwj0c1xNm0n4LB3v21BLZsXZ1PhL7nzi0HzgSXgARm1GHMQy%2FeN7v9BXaPfPxUJ%2B2xBta%2F9GmQDPeAivDIr1kpGqp2VUDAPdoCFRt0oV4uyRP0DOy96ge45HuJDo6P2FqX4OjkqX5wfTo4tBItYp%2BPuP4gtTTWBLwySr3B13rhF4cKRRP%2BohFf%2BgZHuLwAfvfU%2FkYcANlG11lRaC7qUwKRdlAEyRDM3lzZmuMa2kpP7XJLjvyMTxlRyh946Epa94kw2jX1xCj9gTlZFNSlJ2RoBMVCJiWEo%2F55eAzKlSchK8n8oRRxlJnLW0Qto8dKZXZNVFvobs%2FyYt5fbKJi5QCNAlJ8VBXSVN%2FOQTgTJYnWK5csTcZAPz91J%2FKfcoY7dNO7otx4ZX3p7IXxC5yOCZ8g%2BArb8BTUedJ7yAi%2BTdzUBbXpy4Ks3Qb6iu6umy2onByyehu3qF0keHyWgU8wEi2sA8QfLtTyenUzLwwJyesx0ngFbQofyq44MJgH%2FWbZ7b%2BrMlvz9okzGQCs6AXzgCblHE%2F%2BSe86wh%2B%2FuGXxq73KQkkoARTedJdnCIsB79wcxbDcuCSheqwG8UlodIWk6fgShytfnzEl7AydmoRVDkx2w%2Bhgo5zDJiUhVoh48fMP%2F%2FlsAGOqUBVhAdvVGBDr8gyzLNV3nSG9fQto3E9YCsvr15tQ7UtiU%2BtwujnQzhYpPjjGHvs348T%2FkYceCmznqdXPoMLlSU0PEqWKxQLZwSj5ZJKEu8fZXq193FTYKTHtQxcuQT%2BfdPizVLNUlqnz0DKYBvVzqAC1N5o9htHGBV7vTWokQE6Z7Bm1LnJRF%2FnR0JiSLDWb%2B1nLUGpAV6YA%2BamVhZyPiXnFY%2FhpJi&X-Amz-Signature=7d818b9a2ebb2744aa53ea4347d55b003016de77c55cd29e80c806c5a396ca2a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGBLQQ7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGGDCNwWMm%2FcwnXW6ozL93S0gJOiM6SOOiyBBi6hhK3XAiEA%2BxlRhVB285k%2B9wPfgbQHyza%2FNuY3bIgvly7hAMoWsgcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgNDqrq042no333%2BCrcAwj0c1xNm0n4LB3v21BLZsXZ1PhL7nzi0HzgSXgARm1GHMQy%2FeN7v9BXaPfPxUJ%2B2xBta%2F9GmQDPeAivDIr1kpGqp2VUDAPdoCFRt0oV4uyRP0DOy96ge45HuJDo6P2FqX4OjkqX5wfTo4tBItYp%2BPuP4gtTTWBLwySr3B13rhF4cKRRP%2BohFf%2BgZHuLwAfvfU%2FkYcANlG11lRaC7qUwKRdlAEyRDM3lzZmuMa2kpP7XJLjvyMTxlRyh946Epa94kw2jX1xCj9gTlZFNSlJ2RoBMVCJiWEo%2F55eAzKlSchK8n8oRRxlJnLW0Qto8dKZXZNVFvobs%2FyYt5fbKJi5QCNAlJ8VBXSVN%2FOQTgTJYnWK5csTcZAPz91J%2FKfcoY7dNO7otx4ZX3p7IXxC5yOCZ8g%2BArb8BTUedJ7yAi%2BTdzUBbXpy4Ks3Qb6iu6umy2onByyehu3qF0keHyWgU8wEi2sA8QfLtTyenUzLwwJyesx0ngFbQofyq44MJgH%2FWbZ7b%2BrMlvz9okzGQCs6AXzgCblHE%2F%2BSe86wh%2B%2FuGXxq73KQkkoARTedJdnCIsB79wcxbDcuCSheqwG8UlodIWk6fgShytfnzEl7AydmoRVDkx2w%2Bhgo5zDJiUhVoh48fMP%2F%2FlsAGOqUBVhAdvVGBDr8gyzLNV3nSG9fQto3E9YCsvr15tQ7UtiU%2BtwujnQzhYpPjjGHvs348T%2FkYceCmznqdXPoMLlSU0PEqWKxQLZwSj5ZJKEu8fZXq193FTYKTHtQxcuQT%2BfdPizVLNUlqnz0DKYBvVzqAC1N5o9htHGBV7vTWokQE6Z7Bm1LnJRF%2FnR0JiSLDWb%2B1nLUGpAV6YA%2BamVhZyPiXnFY%2FhpJi&X-Amz-Signature=6f447af0784c8260f9834baaab587a7afc51e85a85100c68f7fe015f2da25a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGBLQQ7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGGDCNwWMm%2FcwnXW6ozL93S0gJOiM6SOOiyBBi6hhK3XAiEA%2BxlRhVB285k%2B9wPfgbQHyza%2FNuY3bIgvly7hAMoWsgcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgNDqrq042no333%2BCrcAwj0c1xNm0n4LB3v21BLZsXZ1PhL7nzi0HzgSXgARm1GHMQy%2FeN7v9BXaPfPxUJ%2B2xBta%2F9GmQDPeAivDIr1kpGqp2VUDAPdoCFRt0oV4uyRP0DOy96ge45HuJDo6P2FqX4OjkqX5wfTo4tBItYp%2BPuP4gtTTWBLwySr3B13rhF4cKRRP%2BohFf%2BgZHuLwAfvfU%2FkYcANlG11lRaC7qUwKRdlAEyRDM3lzZmuMa2kpP7XJLjvyMTxlRyh946Epa94kw2jX1xCj9gTlZFNSlJ2RoBMVCJiWEo%2F55eAzKlSchK8n8oRRxlJnLW0Qto8dKZXZNVFvobs%2FyYt5fbKJi5QCNAlJ8VBXSVN%2FOQTgTJYnWK5csTcZAPz91J%2FKfcoY7dNO7otx4ZX3p7IXxC5yOCZ8g%2BArb8BTUedJ7yAi%2BTdzUBbXpy4Ks3Qb6iu6umy2onByyehu3qF0keHyWgU8wEi2sA8QfLtTyenUzLwwJyesx0ngFbQofyq44MJgH%2FWbZ7b%2BrMlvz9okzGQCs6AXzgCblHE%2F%2BSe86wh%2B%2FuGXxq73KQkkoARTedJdnCIsB79wcxbDcuCSheqwG8UlodIWk6fgShytfnzEl7AydmoRVDkx2w%2Bhgo5zDJiUhVoh48fMP%2F%2FlsAGOqUBVhAdvVGBDr8gyzLNV3nSG9fQto3E9YCsvr15tQ7UtiU%2BtwujnQzhYpPjjGHvs348T%2FkYceCmznqdXPoMLlSU0PEqWKxQLZwSj5ZJKEu8fZXq193FTYKTHtQxcuQT%2BfdPizVLNUlqnz0DKYBvVzqAC1N5o9htHGBV7vTWokQE6Z7Bm1LnJRF%2FnR0JiSLDWb%2B1nLUGpAV6YA%2BamVhZyPiXnFY%2FhpJi&X-Amz-Signature=142754cde2f0ae627b7246b6131669014870fd6b75275082db330ac3bbb76925&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGBLQQ7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGGDCNwWMm%2FcwnXW6ozL93S0gJOiM6SOOiyBBi6hhK3XAiEA%2BxlRhVB285k%2B9wPfgbQHyza%2FNuY3bIgvly7hAMoWsgcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgNDqrq042no333%2BCrcAwj0c1xNm0n4LB3v21BLZsXZ1PhL7nzi0HzgSXgARm1GHMQy%2FeN7v9BXaPfPxUJ%2B2xBta%2F9GmQDPeAivDIr1kpGqp2VUDAPdoCFRt0oV4uyRP0DOy96ge45HuJDo6P2FqX4OjkqX5wfTo4tBItYp%2BPuP4gtTTWBLwySr3B13rhF4cKRRP%2BohFf%2BgZHuLwAfvfU%2FkYcANlG11lRaC7qUwKRdlAEyRDM3lzZmuMa2kpP7XJLjvyMTxlRyh946Epa94kw2jX1xCj9gTlZFNSlJ2RoBMVCJiWEo%2F55eAzKlSchK8n8oRRxlJnLW0Qto8dKZXZNVFvobs%2FyYt5fbKJi5QCNAlJ8VBXSVN%2FOQTgTJYnWK5csTcZAPz91J%2FKfcoY7dNO7otx4ZX3p7IXxC5yOCZ8g%2BArb8BTUedJ7yAi%2BTdzUBbXpy4Ks3Qb6iu6umy2onByyehu3qF0keHyWgU8wEi2sA8QfLtTyenUzLwwJyesx0ngFbQofyq44MJgH%2FWbZ7b%2BrMlvz9okzGQCs6AXzgCblHE%2F%2BSe86wh%2B%2FuGXxq73KQkkoARTedJdnCIsB79wcxbDcuCSheqwG8UlodIWk6fgShytfnzEl7AydmoRVDkx2w%2Bhgo5zDJiUhVoh48fMP%2F%2FlsAGOqUBVhAdvVGBDr8gyzLNV3nSG9fQto3E9YCsvr15tQ7UtiU%2BtwujnQzhYpPjjGHvs348T%2FkYceCmznqdXPoMLlSU0PEqWKxQLZwSj5ZJKEu8fZXq193FTYKTHtQxcuQT%2BfdPizVLNUlqnz0DKYBvVzqAC1N5o9htHGBV7vTWokQE6Z7Bm1LnJRF%2FnR0JiSLDWb%2B1nLUGpAV6YA%2BamVhZyPiXnFY%2FhpJi&X-Amz-Signature=d984c4ce32c7bd6cec3904333fd08221839bab7856f117a82012d1ce79cdabbf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGBLQQ7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGGDCNwWMm%2FcwnXW6ozL93S0gJOiM6SOOiyBBi6hhK3XAiEA%2BxlRhVB285k%2B9wPfgbQHyza%2FNuY3bIgvly7hAMoWsgcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgNDqrq042no333%2BCrcAwj0c1xNm0n4LB3v21BLZsXZ1PhL7nzi0HzgSXgARm1GHMQy%2FeN7v9BXaPfPxUJ%2B2xBta%2F9GmQDPeAivDIr1kpGqp2VUDAPdoCFRt0oV4uyRP0DOy96ge45HuJDo6P2FqX4OjkqX5wfTo4tBItYp%2BPuP4gtTTWBLwySr3B13rhF4cKRRP%2BohFf%2BgZHuLwAfvfU%2FkYcANlG11lRaC7qUwKRdlAEyRDM3lzZmuMa2kpP7XJLjvyMTxlRyh946Epa94kw2jX1xCj9gTlZFNSlJ2RoBMVCJiWEo%2F55eAzKlSchK8n8oRRxlJnLW0Qto8dKZXZNVFvobs%2FyYt5fbKJi5QCNAlJ8VBXSVN%2FOQTgTJYnWK5csTcZAPz91J%2FKfcoY7dNO7otx4ZX3p7IXxC5yOCZ8g%2BArb8BTUedJ7yAi%2BTdzUBbXpy4Ks3Qb6iu6umy2onByyehu3qF0keHyWgU8wEi2sA8QfLtTyenUzLwwJyesx0ngFbQofyq44MJgH%2FWbZ7b%2BrMlvz9okzGQCs6AXzgCblHE%2F%2BSe86wh%2B%2FuGXxq73KQkkoARTedJdnCIsB79wcxbDcuCSheqwG8UlodIWk6fgShytfnzEl7AydmoRVDkx2w%2Bhgo5zDJiUhVoh48fMP%2F%2FlsAGOqUBVhAdvVGBDr8gyzLNV3nSG9fQto3E9YCsvr15tQ7UtiU%2BtwujnQzhYpPjjGHvs348T%2FkYceCmznqdXPoMLlSU0PEqWKxQLZwSj5ZJKEu8fZXq193FTYKTHtQxcuQT%2BfdPizVLNUlqnz0DKYBvVzqAC1N5o9htHGBV7vTWokQE6Z7Bm1LnJRF%2FnR0JiSLDWb%2B1nLUGpAV6YA%2BamVhZyPiXnFY%2FhpJi&X-Amz-Signature=67bdcf07d0634bac263209a24b94780d96df838b6fcf1b5e6fb58a510e531859&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGBLQQ7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGGDCNwWMm%2FcwnXW6ozL93S0gJOiM6SOOiyBBi6hhK3XAiEA%2BxlRhVB285k%2B9wPfgbQHyza%2FNuY3bIgvly7hAMoWsgcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgNDqrq042no333%2BCrcAwj0c1xNm0n4LB3v21BLZsXZ1PhL7nzi0HzgSXgARm1GHMQy%2FeN7v9BXaPfPxUJ%2B2xBta%2F9GmQDPeAivDIr1kpGqp2VUDAPdoCFRt0oV4uyRP0DOy96ge45HuJDo6P2FqX4OjkqX5wfTo4tBItYp%2BPuP4gtTTWBLwySr3B13rhF4cKRRP%2BohFf%2BgZHuLwAfvfU%2FkYcANlG11lRaC7qUwKRdlAEyRDM3lzZmuMa2kpP7XJLjvyMTxlRyh946Epa94kw2jX1xCj9gTlZFNSlJ2RoBMVCJiWEo%2F55eAzKlSchK8n8oRRxlJnLW0Qto8dKZXZNVFvobs%2FyYt5fbKJi5QCNAlJ8VBXSVN%2FOQTgTJYnWK5csTcZAPz91J%2FKfcoY7dNO7otx4ZX3p7IXxC5yOCZ8g%2BArb8BTUedJ7yAi%2BTdzUBbXpy4Ks3Qb6iu6umy2onByyehu3qF0keHyWgU8wEi2sA8QfLtTyenUzLwwJyesx0ngFbQofyq44MJgH%2FWbZ7b%2BrMlvz9okzGQCs6AXzgCblHE%2F%2BSe86wh%2B%2FuGXxq73KQkkoARTedJdnCIsB79wcxbDcuCSheqwG8UlodIWk6fgShytfnzEl7AydmoRVDkx2w%2Bhgo5zDJiUhVoh48fMP%2F%2FlsAGOqUBVhAdvVGBDr8gyzLNV3nSG9fQto3E9YCsvr15tQ7UtiU%2BtwujnQzhYpPjjGHvs348T%2FkYceCmznqdXPoMLlSU0PEqWKxQLZwSj5ZJKEu8fZXq193FTYKTHtQxcuQT%2BfdPizVLNUlqnz0DKYBvVzqAC1N5o9htHGBV7vTWokQE6Z7Bm1LnJRF%2FnR0JiSLDWb%2B1nLUGpAV6YA%2BamVhZyPiXnFY%2FhpJi&X-Amz-Signature=6f70dce3196afdb5ec2069536aab198d257cf5fb6a964037dd15f64789f2cab9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
