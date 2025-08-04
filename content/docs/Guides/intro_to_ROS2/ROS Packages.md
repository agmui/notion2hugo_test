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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357SOBDO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDrkvuIvUsESoeKl2f19oU%2BijkRSuFdMqVefXhU6vdN0AIhANV%2BK6UCu2DY4if2mhwVwFn0VujnE1%2Fm%2F2jWWKnm1FaGKv8DCEoQABoMNjM3NDIzMTgzODA1Igwsrvq6CIa6lY6fe%2BAq3AMt%2Fcj%2Bn4V4XYo6C4xJ62Gn1ZKmep99R%2BjxHmn5eOOHlRvF4UOOQoUigLEU18ltRRMGX44YA%2BXT2%2F4clDqI0PeE8e8TqmgTbg4XnqnHuCH%2FasR08mkazcrI7H6kkxYQcbZVLYHvcjhsg40MNvPktCY8w8KWGshLxyjcuYopAhOwxay5uVoN7swJ0Ql%2FxFefPFRVY%2BvNe%2FW5f7i15TypApopJQEQ7TP0%2BDk3stN1bQ8LrqA3n5%2B8bToLSqQ21OZQERCim%2F%2B8FeFMQquwvZFIgidIqYqazG8Q%2Ffn7OTmSomPHg3QqRpw%2BhCZdY178c%2F5drODua6AtzLjb7aCKFM%2BzQHNXWuE2LYR%2Bktldy657qeh%2BvZqBhN0MasK9WiBAC5gqSe2dtmCztKH01DZcf8Q8AYsuPzEJbPr1adEjK%2Bnbk0UKUBid53Ees248dR630Ak6lL04gHjxKFmNX4%2Fhm%2BSnJjR4X%2FlXyzo8%2BOIrtEy2hOKx7DYnwj%2BGqIAf3NR47c7PJoUHIGsd6cXLzYXm5YZuYCzqKv37MObV3cWbygxzYdcdFl8HUXK4Frsff%2BJdrTgF0biHHqayA3drdX8GVcO6PfOdsiDthd4ke%2FNYl1B7IOolLwfKGOv%2F68xYbVf9XTC%2Bz8PEBjqkAeChi%2BNWVpgilUeRwwfY9S5x1CUjCGnE0ZQcLk4XP30jd5TkJiKr3W0DxHfxOXg9nof3xzoj%2BxQf7qL1%2FftMttQ1jYt1i9JO21vTcKA4XrZQvzlTGjDEfAkkeso7zF9u8fUTqqzVxjOcIt9gAkTGoJ8pAA4AcFlxXczc1Pconl1wYwG7uLwH2iFGDOaArTvR1IZzFjUWZNdEmaZVblxxTa90a1Dl&X-Amz-Signature=d4faca075bdd219832792771b71f42efbdd7f2aba402d73f1e8bb252ccaa8c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357SOBDO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDrkvuIvUsESoeKl2f19oU%2BijkRSuFdMqVefXhU6vdN0AIhANV%2BK6UCu2DY4if2mhwVwFn0VujnE1%2Fm%2F2jWWKnm1FaGKv8DCEoQABoMNjM3NDIzMTgzODA1Igwsrvq6CIa6lY6fe%2BAq3AMt%2Fcj%2Bn4V4XYo6C4xJ62Gn1ZKmep99R%2BjxHmn5eOOHlRvF4UOOQoUigLEU18ltRRMGX44YA%2BXT2%2F4clDqI0PeE8e8TqmgTbg4XnqnHuCH%2FasR08mkazcrI7H6kkxYQcbZVLYHvcjhsg40MNvPktCY8w8KWGshLxyjcuYopAhOwxay5uVoN7swJ0Ql%2FxFefPFRVY%2BvNe%2FW5f7i15TypApopJQEQ7TP0%2BDk3stN1bQ8LrqA3n5%2B8bToLSqQ21OZQERCim%2F%2B8FeFMQquwvZFIgidIqYqazG8Q%2Ffn7OTmSomPHg3QqRpw%2BhCZdY178c%2F5drODua6AtzLjb7aCKFM%2BzQHNXWuE2LYR%2Bktldy657qeh%2BvZqBhN0MasK9WiBAC5gqSe2dtmCztKH01DZcf8Q8AYsuPzEJbPr1adEjK%2Bnbk0UKUBid53Ees248dR630Ak6lL04gHjxKFmNX4%2Fhm%2BSnJjR4X%2FlXyzo8%2BOIrtEy2hOKx7DYnwj%2BGqIAf3NR47c7PJoUHIGsd6cXLzYXm5YZuYCzqKv37MObV3cWbygxzYdcdFl8HUXK4Frsff%2BJdrTgF0biHHqayA3drdX8GVcO6PfOdsiDthd4ke%2FNYl1B7IOolLwfKGOv%2F68xYbVf9XTC%2Bz8PEBjqkAeChi%2BNWVpgilUeRwwfY9S5x1CUjCGnE0ZQcLk4XP30jd5TkJiKr3W0DxHfxOXg9nof3xzoj%2BxQf7qL1%2FftMttQ1jYt1i9JO21vTcKA4XrZQvzlTGjDEfAkkeso7zF9u8fUTqqzVxjOcIt9gAkTGoJ8pAA4AcFlxXczc1Pconl1wYwG7uLwH2iFGDOaArTvR1IZzFjUWZNdEmaZVblxxTa90a1Dl&X-Amz-Signature=b1fb9c45dd5e030ef7adc47103658028e72646900e722e8d05c6e2c25ac190c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357SOBDO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDrkvuIvUsESoeKl2f19oU%2BijkRSuFdMqVefXhU6vdN0AIhANV%2BK6UCu2DY4if2mhwVwFn0VujnE1%2Fm%2F2jWWKnm1FaGKv8DCEoQABoMNjM3NDIzMTgzODA1Igwsrvq6CIa6lY6fe%2BAq3AMt%2Fcj%2Bn4V4XYo6C4xJ62Gn1ZKmep99R%2BjxHmn5eOOHlRvF4UOOQoUigLEU18ltRRMGX44YA%2BXT2%2F4clDqI0PeE8e8TqmgTbg4XnqnHuCH%2FasR08mkazcrI7H6kkxYQcbZVLYHvcjhsg40MNvPktCY8w8KWGshLxyjcuYopAhOwxay5uVoN7swJ0Ql%2FxFefPFRVY%2BvNe%2FW5f7i15TypApopJQEQ7TP0%2BDk3stN1bQ8LrqA3n5%2B8bToLSqQ21OZQERCim%2F%2B8FeFMQquwvZFIgidIqYqazG8Q%2Ffn7OTmSomPHg3QqRpw%2BhCZdY178c%2F5drODua6AtzLjb7aCKFM%2BzQHNXWuE2LYR%2Bktldy657qeh%2BvZqBhN0MasK9WiBAC5gqSe2dtmCztKH01DZcf8Q8AYsuPzEJbPr1adEjK%2Bnbk0UKUBid53Ees248dR630Ak6lL04gHjxKFmNX4%2Fhm%2BSnJjR4X%2FlXyzo8%2BOIrtEy2hOKx7DYnwj%2BGqIAf3NR47c7PJoUHIGsd6cXLzYXm5YZuYCzqKv37MObV3cWbygxzYdcdFl8HUXK4Frsff%2BJdrTgF0biHHqayA3drdX8GVcO6PfOdsiDthd4ke%2FNYl1B7IOolLwfKGOv%2F68xYbVf9XTC%2Bz8PEBjqkAeChi%2BNWVpgilUeRwwfY9S5x1CUjCGnE0ZQcLk4XP30jd5TkJiKr3W0DxHfxOXg9nof3xzoj%2BxQf7qL1%2FftMttQ1jYt1i9JO21vTcKA4XrZQvzlTGjDEfAkkeso7zF9u8fUTqqzVxjOcIt9gAkTGoJ8pAA4AcFlxXczc1Pconl1wYwG7uLwH2iFGDOaArTvR1IZzFjUWZNdEmaZVblxxTa90a1Dl&X-Amz-Signature=90516f89657dd7332b80d942118feb0f329077611ec71fcf22bc4ae796819e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357SOBDO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDrkvuIvUsESoeKl2f19oU%2BijkRSuFdMqVefXhU6vdN0AIhANV%2BK6UCu2DY4if2mhwVwFn0VujnE1%2Fm%2F2jWWKnm1FaGKv8DCEoQABoMNjM3NDIzMTgzODA1Igwsrvq6CIa6lY6fe%2BAq3AMt%2Fcj%2Bn4V4XYo6C4xJ62Gn1ZKmep99R%2BjxHmn5eOOHlRvF4UOOQoUigLEU18ltRRMGX44YA%2BXT2%2F4clDqI0PeE8e8TqmgTbg4XnqnHuCH%2FasR08mkazcrI7H6kkxYQcbZVLYHvcjhsg40MNvPktCY8w8KWGshLxyjcuYopAhOwxay5uVoN7swJ0Ql%2FxFefPFRVY%2BvNe%2FW5f7i15TypApopJQEQ7TP0%2BDk3stN1bQ8LrqA3n5%2B8bToLSqQ21OZQERCim%2F%2B8FeFMQquwvZFIgidIqYqazG8Q%2Ffn7OTmSomPHg3QqRpw%2BhCZdY178c%2F5drODua6AtzLjb7aCKFM%2BzQHNXWuE2LYR%2Bktldy657qeh%2BvZqBhN0MasK9WiBAC5gqSe2dtmCztKH01DZcf8Q8AYsuPzEJbPr1adEjK%2Bnbk0UKUBid53Ees248dR630Ak6lL04gHjxKFmNX4%2Fhm%2BSnJjR4X%2FlXyzo8%2BOIrtEy2hOKx7DYnwj%2BGqIAf3NR47c7PJoUHIGsd6cXLzYXm5YZuYCzqKv37MObV3cWbygxzYdcdFl8HUXK4Frsff%2BJdrTgF0biHHqayA3drdX8GVcO6PfOdsiDthd4ke%2FNYl1B7IOolLwfKGOv%2F68xYbVf9XTC%2Bz8PEBjqkAeChi%2BNWVpgilUeRwwfY9S5x1CUjCGnE0ZQcLk4XP30jd5TkJiKr3W0DxHfxOXg9nof3xzoj%2BxQf7qL1%2FftMttQ1jYt1i9JO21vTcKA4XrZQvzlTGjDEfAkkeso7zF9u8fUTqqzVxjOcIt9gAkTGoJ8pAA4AcFlxXczc1Pconl1wYwG7uLwH2iFGDOaArTvR1IZzFjUWZNdEmaZVblxxTa90a1Dl&X-Amz-Signature=8569900a026d786faf8c5fa2f26d9c7aa76aada90b12c2a26f7eb89427bc968f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357SOBDO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDrkvuIvUsESoeKl2f19oU%2BijkRSuFdMqVefXhU6vdN0AIhANV%2BK6UCu2DY4if2mhwVwFn0VujnE1%2Fm%2F2jWWKnm1FaGKv8DCEoQABoMNjM3NDIzMTgzODA1Igwsrvq6CIa6lY6fe%2BAq3AMt%2Fcj%2Bn4V4XYo6C4xJ62Gn1ZKmep99R%2BjxHmn5eOOHlRvF4UOOQoUigLEU18ltRRMGX44YA%2BXT2%2F4clDqI0PeE8e8TqmgTbg4XnqnHuCH%2FasR08mkazcrI7H6kkxYQcbZVLYHvcjhsg40MNvPktCY8w8KWGshLxyjcuYopAhOwxay5uVoN7swJ0Ql%2FxFefPFRVY%2BvNe%2FW5f7i15TypApopJQEQ7TP0%2BDk3stN1bQ8LrqA3n5%2B8bToLSqQ21OZQERCim%2F%2B8FeFMQquwvZFIgidIqYqazG8Q%2Ffn7OTmSomPHg3QqRpw%2BhCZdY178c%2F5drODua6AtzLjb7aCKFM%2BzQHNXWuE2LYR%2Bktldy657qeh%2BvZqBhN0MasK9WiBAC5gqSe2dtmCztKH01DZcf8Q8AYsuPzEJbPr1adEjK%2Bnbk0UKUBid53Ees248dR630Ak6lL04gHjxKFmNX4%2Fhm%2BSnJjR4X%2FlXyzo8%2BOIrtEy2hOKx7DYnwj%2BGqIAf3NR47c7PJoUHIGsd6cXLzYXm5YZuYCzqKv37MObV3cWbygxzYdcdFl8HUXK4Frsff%2BJdrTgF0biHHqayA3drdX8GVcO6PfOdsiDthd4ke%2FNYl1B7IOolLwfKGOv%2F68xYbVf9XTC%2Bz8PEBjqkAeChi%2BNWVpgilUeRwwfY9S5x1CUjCGnE0ZQcLk4XP30jd5TkJiKr3W0DxHfxOXg9nof3xzoj%2BxQf7qL1%2FftMttQ1jYt1i9JO21vTcKA4XrZQvzlTGjDEfAkkeso7zF9u8fUTqqzVxjOcIt9gAkTGoJ8pAA4AcFlxXczc1Pconl1wYwG7uLwH2iFGDOaArTvR1IZzFjUWZNdEmaZVblxxTa90a1Dl&X-Amz-Signature=6ce2ecd19895135ac6b9191bf190b6cfe25a5dba3d907bcf1e2df01d75471c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357SOBDO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDrkvuIvUsESoeKl2f19oU%2BijkRSuFdMqVefXhU6vdN0AIhANV%2BK6UCu2DY4if2mhwVwFn0VujnE1%2Fm%2F2jWWKnm1FaGKv8DCEoQABoMNjM3NDIzMTgzODA1Igwsrvq6CIa6lY6fe%2BAq3AMt%2Fcj%2Bn4V4XYo6C4xJ62Gn1ZKmep99R%2BjxHmn5eOOHlRvF4UOOQoUigLEU18ltRRMGX44YA%2BXT2%2F4clDqI0PeE8e8TqmgTbg4XnqnHuCH%2FasR08mkazcrI7H6kkxYQcbZVLYHvcjhsg40MNvPktCY8w8KWGshLxyjcuYopAhOwxay5uVoN7swJ0Ql%2FxFefPFRVY%2BvNe%2FW5f7i15TypApopJQEQ7TP0%2BDk3stN1bQ8LrqA3n5%2B8bToLSqQ21OZQERCim%2F%2B8FeFMQquwvZFIgidIqYqazG8Q%2Ffn7OTmSomPHg3QqRpw%2BhCZdY178c%2F5drODua6AtzLjb7aCKFM%2BzQHNXWuE2LYR%2Bktldy657qeh%2BvZqBhN0MasK9WiBAC5gqSe2dtmCztKH01DZcf8Q8AYsuPzEJbPr1adEjK%2Bnbk0UKUBid53Ees248dR630Ak6lL04gHjxKFmNX4%2Fhm%2BSnJjR4X%2FlXyzo8%2BOIrtEy2hOKx7DYnwj%2BGqIAf3NR47c7PJoUHIGsd6cXLzYXm5YZuYCzqKv37MObV3cWbygxzYdcdFl8HUXK4Frsff%2BJdrTgF0biHHqayA3drdX8GVcO6PfOdsiDthd4ke%2FNYl1B7IOolLwfKGOv%2F68xYbVf9XTC%2Bz8PEBjqkAeChi%2BNWVpgilUeRwwfY9S5x1CUjCGnE0ZQcLk4XP30jd5TkJiKr3W0DxHfxOXg9nof3xzoj%2BxQf7qL1%2FftMttQ1jYt1i9JO21vTcKA4XrZQvzlTGjDEfAkkeso7zF9u8fUTqqzVxjOcIt9gAkTGoJ8pAA4AcFlxXczc1Pconl1wYwG7uLwH2iFGDOaArTvR1IZzFjUWZNdEmaZVblxxTa90a1Dl&X-Amz-Signature=c56d268e97c8f85575d74496ba8f5da1d7279dccbafa24c6b87854e4d70852b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357SOBDO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDrkvuIvUsESoeKl2f19oU%2BijkRSuFdMqVefXhU6vdN0AIhANV%2BK6UCu2DY4if2mhwVwFn0VujnE1%2Fm%2F2jWWKnm1FaGKv8DCEoQABoMNjM3NDIzMTgzODA1Igwsrvq6CIa6lY6fe%2BAq3AMt%2Fcj%2Bn4V4XYo6C4xJ62Gn1ZKmep99R%2BjxHmn5eOOHlRvF4UOOQoUigLEU18ltRRMGX44YA%2BXT2%2F4clDqI0PeE8e8TqmgTbg4XnqnHuCH%2FasR08mkazcrI7H6kkxYQcbZVLYHvcjhsg40MNvPktCY8w8KWGshLxyjcuYopAhOwxay5uVoN7swJ0Ql%2FxFefPFRVY%2BvNe%2FW5f7i15TypApopJQEQ7TP0%2BDk3stN1bQ8LrqA3n5%2B8bToLSqQ21OZQERCim%2F%2B8FeFMQquwvZFIgidIqYqazG8Q%2Ffn7OTmSomPHg3QqRpw%2BhCZdY178c%2F5drODua6AtzLjb7aCKFM%2BzQHNXWuE2LYR%2Bktldy657qeh%2BvZqBhN0MasK9WiBAC5gqSe2dtmCztKH01DZcf8Q8AYsuPzEJbPr1adEjK%2Bnbk0UKUBid53Ees248dR630Ak6lL04gHjxKFmNX4%2Fhm%2BSnJjR4X%2FlXyzo8%2BOIrtEy2hOKx7DYnwj%2BGqIAf3NR47c7PJoUHIGsd6cXLzYXm5YZuYCzqKv37MObV3cWbygxzYdcdFl8HUXK4Frsff%2BJdrTgF0biHHqayA3drdX8GVcO6PfOdsiDthd4ke%2FNYl1B7IOolLwfKGOv%2F68xYbVf9XTC%2Bz8PEBjqkAeChi%2BNWVpgilUeRwwfY9S5x1CUjCGnE0ZQcLk4XP30jd5TkJiKr3W0DxHfxOXg9nof3xzoj%2BxQf7qL1%2FftMttQ1jYt1i9JO21vTcKA4XrZQvzlTGjDEfAkkeso7zF9u8fUTqqzVxjOcIt9gAkTGoJ8pAA4AcFlxXczc1Pconl1wYwG7uLwH2iFGDOaArTvR1IZzFjUWZNdEmaZVblxxTa90a1Dl&X-Amz-Signature=6085ad35d2ed44806098b5837e2c810efc4c439d276fd130bc328bb431c7a39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
