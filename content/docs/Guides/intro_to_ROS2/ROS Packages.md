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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV7GUCM7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDIDXaA6wpdukCjvwwSlL514ANqixO1e8w%2B6zFBPb7JAiEAneA5SVUy%2BymYSa6IetyaKZf0c4notT39%2BmTtpuk4dMcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAp1JJGPzBAaN5nyWSrcAx9b%2FMCG7LtF%2BAdNye3cuNOAGUaTpUN5V9OXhwfBMOMZidxx0EHYyPEmMoTaZLALkiusz5uSY22PdGry%2F4%2Bqr%2BZ%2Fg8sDt6VzdNSTiMZeY4OkWvhWEnfCtltGQdCp1f7o9f1NFUAJFlbEkg9bPHNHZqTucQzQE6A%2BIiIXleao2IAzxnYwI5LSAXr0jN%2F%2Fn4WXF2Fwplrf%2F%2FH%2F8pU0T%2B8COzuvaV7C6YbET1CQ3z%2F4tOHP5ixT%2BFJsKGkbKQ6tuOoZNfiGpj3mp6fkhTyUey5tVV1fc9IhtK%2FeBRcnFavieGbZIvpM1C1Yq%2BeQSjoiayJ0q88jgSfjrfuVHSeQFkjfsOt5oKHzdomOl4SsrdTLDN5uG9AICS6apMOciyRZYu4nKnZf2yt4mENtlV0vCAtVBHYHlqzKQj7WlXLkzrYaAeQY2b5xSooHT8STIvnkw0ZAJePZBBkwNtWlKERt%2FXX1VPupGDSsPv7ERXjiTIiZdBdfQIVEnnGdYQMdnpzzkZD%2BbYd00Kz1eKq%2FQSy06%2Bm1UYK3uz%2FgSZk6Oo3j0EBpYzxuQsM3pmPijmaT48XL%2FQ%2BAoBOCZXglHgjAiXP3unohGrB3ILsro%2F2rrPQ0yeZJS3pVjh2Szr9eWfIP0iSsMOfstsAGOqUBejj63eHNlGPfY4CfMkpBHkz4E6fyx8D1%2BGlKF7CckOuS9rzGR0N9wXM%2Fux7FlPCUMn5rhyWpBKng%2Fri5yWu97lF%2FC8TsB6iYl05b9iYVg3f018kbI00%2BcfyRV9x%2Fcr%2BxpfOxN9bzYsGUado97m8hajh8M4oZ1IiRjlU8iJPhI9TKQnEX2FKCirmqO%2FwO2t9keya%2Bezv1jBDbXm0clk0aNbM%2Bvzzo&X-Amz-Signature=37803832d26cc2bf53b4b59b086b40e83a0ebce638d4580c6e2b7d6bb7a4ff41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV7GUCM7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDIDXaA6wpdukCjvwwSlL514ANqixO1e8w%2B6zFBPb7JAiEAneA5SVUy%2BymYSa6IetyaKZf0c4notT39%2BmTtpuk4dMcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAp1JJGPzBAaN5nyWSrcAx9b%2FMCG7LtF%2BAdNye3cuNOAGUaTpUN5V9OXhwfBMOMZidxx0EHYyPEmMoTaZLALkiusz5uSY22PdGry%2F4%2Bqr%2BZ%2Fg8sDt6VzdNSTiMZeY4OkWvhWEnfCtltGQdCp1f7o9f1NFUAJFlbEkg9bPHNHZqTucQzQE6A%2BIiIXleao2IAzxnYwI5LSAXr0jN%2F%2Fn4WXF2Fwplrf%2F%2FH%2F8pU0T%2B8COzuvaV7C6YbET1CQ3z%2F4tOHP5ixT%2BFJsKGkbKQ6tuOoZNfiGpj3mp6fkhTyUey5tVV1fc9IhtK%2FeBRcnFavieGbZIvpM1C1Yq%2BeQSjoiayJ0q88jgSfjrfuVHSeQFkjfsOt5oKHzdomOl4SsrdTLDN5uG9AICS6apMOciyRZYu4nKnZf2yt4mENtlV0vCAtVBHYHlqzKQj7WlXLkzrYaAeQY2b5xSooHT8STIvnkw0ZAJePZBBkwNtWlKERt%2FXX1VPupGDSsPv7ERXjiTIiZdBdfQIVEnnGdYQMdnpzzkZD%2BbYd00Kz1eKq%2FQSy06%2Bm1UYK3uz%2FgSZk6Oo3j0EBpYzxuQsM3pmPijmaT48XL%2FQ%2BAoBOCZXglHgjAiXP3unohGrB3ILsro%2F2rrPQ0yeZJS3pVjh2Szr9eWfIP0iSsMOfstsAGOqUBejj63eHNlGPfY4CfMkpBHkz4E6fyx8D1%2BGlKF7CckOuS9rzGR0N9wXM%2Fux7FlPCUMn5rhyWpBKng%2Fri5yWu97lF%2FC8TsB6iYl05b9iYVg3f018kbI00%2BcfyRV9x%2Fcr%2BxpfOxN9bzYsGUado97m8hajh8M4oZ1IiRjlU8iJPhI9TKQnEX2FKCirmqO%2FwO2t9keya%2Bezv1jBDbXm0clk0aNbM%2Bvzzo&X-Amz-Signature=bdf3516ab73edf2898536d2a904ab09a0272dcd5a879d4b3442a7f42e56104fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV7GUCM7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDIDXaA6wpdukCjvwwSlL514ANqixO1e8w%2B6zFBPb7JAiEAneA5SVUy%2BymYSa6IetyaKZf0c4notT39%2BmTtpuk4dMcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAp1JJGPzBAaN5nyWSrcAx9b%2FMCG7LtF%2BAdNye3cuNOAGUaTpUN5V9OXhwfBMOMZidxx0EHYyPEmMoTaZLALkiusz5uSY22PdGry%2F4%2Bqr%2BZ%2Fg8sDt6VzdNSTiMZeY4OkWvhWEnfCtltGQdCp1f7o9f1NFUAJFlbEkg9bPHNHZqTucQzQE6A%2BIiIXleao2IAzxnYwI5LSAXr0jN%2F%2Fn4WXF2Fwplrf%2F%2FH%2F8pU0T%2B8COzuvaV7C6YbET1CQ3z%2F4tOHP5ixT%2BFJsKGkbKQ6tuOoZNfiGpj3mp6fkhTyUey5tVV1fc9IhtK%2FeBRcnFavieGbZIvpM1C1Yq%2BeQSjoiayJ0q88jgSfjrfuVHSeQFkjfsOt5oKHzdomOl4SsrdTLDN5uG9AICS6apMOciyRZYu4nKnZf2yt4mENtlV0vCAtVBHYHlqzKQj7WlXLkzrYaAeQY2b5xSooHT8STIvnkw0ZAJePZBBkwNtWlKERt%2FXX1VPupGDSsPv7ERXjiTIiZdBdfQIVEnnGdYQMdnpzzkZD%2BbYd00Kz1eKq%2FQSy06%2Bm1UYK3uz%2FgSZk6Oo3j0EBpYzxuQsM3pmPijmaT48XL%2FQ%2BAoBOCZXglHgjAiXP3unohGrB3ILsro%2F2rrPQ0yeZJS3pVjh2Szr9eWfIP0iSsMOfstsAGOqUBejj63eHNlGPfY4CfMkpBHkz4E6fyx8D1%2BGlKF7CckOuS9rzGR0N9wXM%2Fux7FlPCUMn5rhyWpBKng%2Fri5yWu97lF%2FC8TsB6iYl05b9iYVg3f018kbI00%2BcfyRV9x%2Fcr%2BxpfOxN9bzYsGUado97m8hajh8M4oZ1IiRjlU8iJPhI9TKQnEX2FKCirmqO%2FwO2t9keya%2Bezv1jBDbXm0clk0aNbM%2Bvzzo&X-Amz-Signature=c0ae2ab78557b39aa54d0e349156372cbf364e6ae1738fea88411078aa2200a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV7GUCM7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDIDXaA6wpdukCjvwwSlL514ANqixO1e8w%2B6zFBPb7JAiEAneA5SVUy%2BymYSa6IetyaKZf0c4notT39%2BmTtpuk4dMcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAp1JJGPzBAaN5nyWSrcAx9b%2FMCG7LtF%2BAdNye3cuNOAGUaTpUN5V9OXhwfBMOMZidxx0EHYyPEmMoTaZLALkiusz5uSY22PdGry%2F4%2Bqr%2BZ%2Fg8sDt6VzdNSTiMZeY4OkWvhWEnfCtltGQdCp1f7o9f1NFUAJFlbEkg9bPHNHZqTucQzQE6A%2BIiIXleao2IAzxnYwI5LSAXr0jN%2F%2Fn4WXF2Fwplrf%2F%2FH%2F8pU0T%2B8COzuvaV7C6YbET1CQ3z%2F4tOHP5ixT%2BFJsKGkbKQ6tuOoZNfiGpj3mp6fkhTyUey5tVV1fc9IhtK%2FeBRcnFavieGbZIvpM1C1Yq%2BeQSjoiayJ0q88jgSfjrfuVHSeQFkjfsOt5oKHzdomOl4SsrdTLDN5uG9AICS6apMOciyRZYu4nKnZf2yt4mENtlV0vCAtVBHYHlqzKQj7WlXLkzrYaAeQY2b5xSooHT8STIvnkw0ZAJePZBBkwNtWlKERt%2FXX1VPupGDSsPv7ERXjiTIiZdBdfQIVEnnGdYQMdnpzzkZD%2BbYd00Kz1eKq%2FQSy06%2Bm1UYK3uz%2FgSZk6Oo3j0EBpYzxuQsM3pmPijmaT48XL%2FQ%2BAoBOCZXglHgjAiXP3unohGrB3ILsro%2F2rrPQ0yeZJS3pVjh2Szr9eWfIP0iSsMOfstsAGOqUBejj63eHNlGPfY4CfMkpBHkz4E6fyx8D1%2BGlKF7CckOuS9rzGR0N9wXM%2Fux7FlPCUMn5rhyWpBKng%2Fri5yWu97lF%2FC8TsB6iYl05b9iYVg3f018kbI00%2BcfyRV9x%2Fcr%2BxpfOxN9bzYsGUado97m8hajh8M4oZ1IiRjlU8iJPhI9TKQnEX2FKCirmqO%2FwO2t9keya%2Bezv1jBDbXm0clk0aNbM%2Bvzzo&X-Amz-Signature=bdb71bf55706b00637ad75aae6077da89351162d1bcb5462aa4240b2a32dfa08&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV7GUCM7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDIDXaA6wpdukCjvwwSlL514ANqixO1e8w%2B6zFBPb7JAiEAneA5SVUy%2BymYSa6IetyaKZf0c4notT39%2BmTtpuk4dMcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAp1JJGPzBAaN5nyWSrcAx9b%2FMCG7LtF%2BAdNye3cuNOAGUaTpUN5V9OXhwfBMOMZidxx0EHYyPEmMoTaZLALkiusz5uSY22PdGry%2F4%2Bqr%2BZ%2Fg8sDt6VzdNSTiMZeY4OkWvhWEnfCtltGQdCp1f7o9f1NFUAJFlbEkg9bPHNHZqTucQzQE6A%2BIiIXleao2IAzxnYwI5LSAXr0jN%2F%2Fn4WXF2Fwplrf%2F%2FH%2F8pU0T%2B8COzuvaV7C6YbET1CQ3z%2F4tOHP5ixT%2BFJsKGkbKQ6tuOoZNfiGpj3mp6fkhTyUey5tVV1fc9IhtK%2FeBRcnFavieGbZIvpM1C1Yq%2BeQSjoiayJ0q88jgSfjrfuVHSeQFkjfsOt5oKHzdomOl4SsrdTLDN5uG9AICS6apMOciyRZYu4nKnZf2yt4mENtlV0vCAtVBHYHlqzKQj7WlXLkzrYaAeQY2b5xSooHT8STIvnkw0ZAJePZBBkwNtWlKERt%2FXX1VPupGDSsPv7ERXjiTIiZdBdfQIVEnnGdYQMdnpzzkZD%2BbYd00Kz1eKq%2FQSy06%2Bm1UYK3uz%2FgSZk6Oo3j0EBpYzxuQsM3pmPijmaT48XL%2FQ%2BAoBOCZXglHgjAiXP3unohGrB3ILsro%2F2rrPQ0yeZJS3pVjh2Szr9eWfIP0iSsMOfstsAGOqUBejj63eHNlGPfY4CfMkpBHkz4E6fyx8D1%2BGlKF7CckOuS9rzGR0N9wXM%2Fux7FlPCUMn5rhyWpBKng%2Fri5yWu97lF%2FC8TsB6iYl05b9iYVg3f018kbI00%2BcfyRV9x%2Fcr%2BxpfOxN9bzYsGUado97m8hajh8M4oZ1IiRjlU8iJPhI9TKQnEX2FKCirmqO%2FwO2t9keya%2Bezv1jBDbXm0clk0aNbM%2Bvzzo&X-Amz-Signature=ce390fa2014210773406e7154fc003714dd8b2e8c04c4f79f85bcec022a4b3e0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV7GUCM7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDIDXaA6wpdukCjvwwSlL514ANqixO1e8w%2B6zFBPb7JAiEAneA5SVUy%2BymYSa6IetyaKZf0c4notT39%2BmTtpuk4dMcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAp1JJGPzBAaN5nyWSrcAx9b%2FMCG7LtF%2BAdNye3cuNOAGUaTpUN5V9OXhwfBMOMZidxx0EHYyPEmMoTaZLALkiusz5uSY22PdGry%2F4%2Bqr%2BZ%2Fg8sDt6VzdNSTiMZeY4OkWvhWEnfCtltGQdCp1f7o9f1NFUAJFlbEkg9bPHNHZqTucQzQE6A%2BIiIXleao2IAzxnYwI5LSAXr0jN%2F%2Fn4WXF2Fwplrf%2F%2FH%2F8pU0T%2B8COzuvaV7C6YbET1CQ3z%2F4tOHP5ixT%2BFJsKGkbKQ6tuOoZNfiGpj3mp6fkhTyUey5tVV1fc9IhtK%2FeBRcnFavieGbZIvpM1C1Yq%2BeQSjoiayJ0q88jgSfjrfuVHSeQFkjfsOt5oKHzdomOl4SsrdTLDN5uG9AICS6apMOciyRZYu4nKnZf2yt4mENtlV0vCAtVBHYHlqzKQj7WlXLkzrYaAeQY2b5xSooHT8STIvnkw0ZAJePZBBkwNtWlKERt%2FXX1VPupGDSsPv7ERXjiTIiZdBdfQIVEnnGdYQMdnpzzkZD%2BbYd00Kz1eKq%2FQSy06%2Bm1UYK3uz%2FgSZk6Oo3j0EBpYzxuQsM3pmPijmaT48XL%2FQ%2BAoBOCZXglHgjAiXP3unohGrB3ILsro%2F2rrPQ0yeZJS3pVjh2Szr9eWfIP0iSsMOfstsAGOqUBejj63eHNlGPfY4CfMkpBHkz4E6fyx8D1%2BGlKF7CckOuS9rzGR0N9wXM%2Fux7FlPCUMn5rhyWpBKng%2Fri5yWu97lF%2FC8TsB6iYl05b9iYVg3f018kbI00%2BcfyRV9x%2Fcr%2BxpfOxN9bzYsGUado97m8hajh8M4oZ1IiRjlU8iJPhI9TKQnEX2FKCirmqO%2FwO2t9keya%2Bezv1jBDbXm0clk0aNbM%2Bvzzo&X-Amz-Signature=bc4816efaf860f559ba41813ae717d54ef3edc3519a190b32b35c136c8c497b1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV7GUCM7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDIDXaA6wpdukCjvwwSlL514ANqixO1e8w%2B6zFBPb7JAiEAneA5SVUy%2BymYSa6IetyaKZf0c4notT39%2BmTtpuk4dMcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAp1JJGPzBAaN5nyWSrcAx9b%2FMCG7LtF%2BAdNye3cuNOAGUaTpUN5V9OXhwfBMOMZidxx0EHYyPEmMoTaZLALkiusz5uSY22PdGry%2F4%2Bqr%2BZ%2Fg8sDt6VzdNSTiMZeY4OkWvhWEnfCtltGQdCp1f7o9f1NFUAJFlbEkg9bPHNHZqTucQzQE6A%2BIiIXleao2IAzxnYwI5LSAXr0jN%2F%2Fn4WXF2Fwplrf%2F%2FH%2F8pU0T%2B8COzuvaV7C6YbET1CQ3z%2F4tOHP5ixT%2BFJsKGkbKQ6tuOoZNfiGpj3mp6fkhTyUey5tVV1fc9IhtK%2FeBRcnFavieGbZIvpM1C1Yq%2BeQSjoiayJ0q88jgSfjrfuVHSeQFkjfsOt5oKHzdomOl4SsrdTLDN5uG9AICS6apMOciyRZYu4nKnZf2yt4mENtlV0vCAtVBHYHlqzKQj7WlXLkzrYaAeQY2b5xSooHT8STIvnkw0ZAJePZBBkwNtWlKERt%2FXX1VPupGDSsPv7ERXjiTIiZdBdfQIVEnnGdYQMdnpzzkZD%2BbYd00Kz1eKq%2FQSy06%2Bm1UYK3uz%2FgSZk6Oo3j0EBpYzxuQsM3pmPijmaT48XL%2FQ%2BAoBOCZXglHgjAiXP3unohGrB3ILsro%2F2rrPQ0yeZJS3pVjh2Szr9eWfIP0iSsMOfstsAGOqUBejj63eHNlGPfY4CfMkpBHkz4E6fyx8D1%2BGlKF7CckOuS9rzGR0N9wXM%2Fux7FlPCUMn5rhyWpBKng%2Fri5yWu97lF%2FC8TsB6iYl05b9iYVg3f018kbI00%2BcfyRV9x%2Fcr%2BxpfOxN9bzYsGUado97m8hajh8M4oZ1IiRjlU8iJPhI9TKQnEX2FKCirmqO%2FwO2t9keya%2Bezv1jBDbXm0clk0aNbM%2Bvzzo&X-Amz-Signature=1b618cddbf25076c824e0cb662639e7c9203e4b9907f14bac896f8a92fd25a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
