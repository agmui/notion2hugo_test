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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPSGK2M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTZ1bwDy9ZceTKRYd68RHnAxWJI6wCc27m%2BM5boQdRsAiARG0VF5rgrBaZhBOmTZTS8aoaQIbfn7bFg7vbBOReRmyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv512ESZk8%2FI3ovTzKtwD9w8Vjmd0d%2Bslc0tOaQtwdD%2BPum7VFcmmkCfu3OziDEw0CNEtrov0JQjnD7xdfLny5MBczIxg854PTTvwidmgXIiugQVDQBFDElB2ogbsigk9KwpRza%2FATSTKYDOzwhbkWMVp8ndO%2BoVdv%2Bdocx8l1ylDgorntxlOuPsvI0jMQzIlPz9uMHbS1tXU44ckXXlAdbMrz3aq3uf6ewcQizP8C%2B6j78TSQxeHJqlj6Gc%2FntfjyJgfwAHad85W0KEoOvH3SHt%2B%2FHVfRNIE9YK9MxC1hKRVxj8RncZfbg%2BXHE4TNRGDfcdmLXI0wpEXiztY41xvcnJISf69O%2Bie03AjiVmNIfCcUyVL9DKHP1pcymh%2B%2FELRfsIXA1nDNQanzFjzLSEbTKehdw4qtU%2Ff08u4MZ7fAOc4UZcOx3ohIu27%2BbNyLV9X%2BlvbR5lePdMEfeD2mBkKx8DdEUrI42bTLqUZ9dj967355O5A43AkSVhSZp%2FkeVleZu8uoiNL5feuRgbM6qSQG1%2B8GWlT5J67mgJ7by5mhNpTjzvVmyQ7SpFvmbWv3%2FOqbwHrBmLlyxqo7I3qVay4z9r5mgI7osYSvGFYJoGVrOLAwXeE1PEq5iYslieQsex39D3svqj5%2F67a7B4w2ICsvQY6pgFtU95J6BRPPt4YS8YFNEm%2BN0buIxMvBLGZRI0QlIrZr1de0i11TAW3C5Zu%2FwCgTFXc311Dw0r2ITWuqKF9WvhUaXbRJ6ZVdOjdJP7l%2Bcruzs%2BNA83tkiawF2hAtktTWGt6Tvxk2Rs9tuMBhPdaPJ3wpDKDmZIkUgDxgInaGlVYY6GDl5sb88BAf0%2BsZwvj2q23rldldtK0eMJTOdEG7%2FYn7Xg5B4aU&X-Amz-Signature=77df7c3467aa17fda8a681eea4e20c134c3d91ec0d04864d7716c91273f3c53d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPSGK2M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTZ1bwDy9ZceTKRYd68RHnAxWJI6wCc27m%2BM5boQdRsAiARG0VF5rgrBaZhBOmTZTS8aoaQIbfn7bFg7vbBOReRmyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv512ESZk8%2FI3ovTzKtwD9w8Vjmd0d%2Bslc0tOaQtwdD%2BPum7VFcmmkCfu3OziDEw0CNEtrov0JQjnD7xdfLny5MBczIxg854PTTvwidmgXIiugQVDQBFDElB2ogbsigk9KwpRza%2FATSTKYDOzwhbkWMVp8ndO%2BoVdv%2Bdocx8l1ylDgorntxlOuPsvI0jMQzIlPz9uMHbS1tXU44ckXXlAdbMrz3aq3uf6ewcQizP8C%2B6j78TSQxeHJqlj6Gc%2FntfjyJgfwAHad85W0KEoOvH3SHt%2B%2FHVfRNIE9YK9MxC1hKRVxj8RncZfbg%2BXHE4TNRGDfcdmLXI0wpEXiztY41xvcnJISf69O%2Bie03AjiVmNIfCcUyVL9DKHP1pcymh%2B%2FELRfsIXA1nDNQanzFjzLSEbTKehdw4qtU%2Ff08u4MZ7fAOc4UZcOx3ohIu27%2BbNyLV9X%2BlvbR5lePdMEfeD2mBkKx8DdEUrI42bTLqUZ9dj967355O5A43AkSVhSZp%2FkeVleZu8uoiNL5feuRgbM6qSQG1%2B8GWlT5J67mgJ7by5mhNpTjzvVmyQ7SpFvmbWv3%2FOqbwHrBmLlyxqo7I3qVay4z9r5mgI7osYSvGFYJoGVrOLAwXeE1PEq5iYslieQsex39D3svqj5%2F67a7B4w2ICsvQY6pgFtU95J6BRPPt4YS8YFNEm%2BN0buIxMvBLGZRI0QlIrZr1de0i11TAW3C5Zu%2FwCgTFXc311Dw0r2ITWuqKF9WvhUaXbRJ6ZVdOjdJP7l%2Bcruzs%2BNA83tkiawF2hAtktTWGt6Tvxk2Rs9tuMBhPdaPJ3wpDKDmZIkUgDxgInaGlVYY6GDl5sb88BAf0%2BsZwvj2q23rldldtK0eMJTOdEG7%2FYn7Xg5B4aU&X-Amz-Signature=34245bb7414d6bad8461245c78e18f3191140ee381c578d3ab8ed10423c409a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPSGK2M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTZ1bwDy9ZceTKRYd68RHnAxWJI6wCc27m%2BM5boQdRsAiARG0VF5rgrBaZhBOmTZTS8aoaQIbfn7bFg7vbBOReRmyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv512ESZk8%2FI3ovTzKtwD9w8Vjmd0d%2Bslc0tOaQtwdD%2BPum7VFcmmkCfu3OziDEw0CNEtrov0JQjnD7xdfLny5MBczIxg854PTTvwidmgXIiugQVDQBFDElB2ogbsigk9KwpRza%2FATSTKYDOzwhbkWMVp8ndO%2BoVdv%2Bdocx8l1ylDgorntxlOuPsvI0jMQzIlPz9uMHbS1tXU44ckXXlAdbMrz3aq3uf6ewcQizP8C%2B6j78TSQxeHJqlj6Gc%2FntfjyJgfwAHad85W0KEoOvH3SHt%2B%2FHVfRNIE9YK9MxC1hKRVxj8RncZfbg%2BXHE4TNRGDfcdmLXI0wpEXiztY41xvcnJISf69O%2Bie03AjiVmNIfCcUyVL9DKHP1pcymh%2B%2FELRfsIXA1nDNQanzFjzLSEbTKehdw4qtU%2Ff08u4MZ7fAOc4UZcOx3ohIu27%2BbNyLV9X%2BlvbR5lePdMEfeD2mBkKx8DdEUrI42bTLqUZ9dj967355O5A43AkSVhSZp%2FkeVleZu8uoiNL5feuRgbM6qSQG1%2B8GWlT5J67mgJ7by5mhNpTjzvVmyQ7SpFvmbWv3%2FOqbwHrBmLlyxqo7I3qVay4z9r5mgI7osYSvGFYJoGVrOLAwXeE1PEq5iYslieQsex39D3svqj5%2F67a7B4w2ICsvQY6pgFtU95J6BRPPt4YS8YFNEm%2BN0buIxMvBLGZRI0QlIrZr1de0i11TAW3C5Zu%2FwCgTFXc311Dw0r2ITWuqKF9WvhUaXbRJ6ZVdOjdJP7l%2Bcruzs%2BNA83tkiawF2hAtktTWGt6Tvxk2Rs9tuMBhPdaPJ3wpDKDmZIkUgDxgInaGlVYY6GDl5sb88BAf0%2BsZwvj2q23rldldtK0eMJTOdEG7%2FYn7Xg5B4aU&X-Amz-Signature=970a4959b1e96a347fffed4c88b2173e4ce486cd34fb075749b0a3378ed68ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPSGK2M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTZ1bwDy9ZceTKRYd68RHnAxWJI6wCc27m%2BM5boQdRsAiARG0VF5rgrBaZhBOmTZTS8aoaQIbfn7bFg7vbBOReRmyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv512ESZk8%2FI3ovTzKtwD9w8Vjmd0d%2Bslc0tOaQtwdD%2BPum7VFcmmkCfu3OziDEw0CNEtrov0JQjnD7xdfLny5MBczIxg854PTTvwidmgXIiugQVDQBFDElB2ogbsigk9KwpRza%2FATSTKYDOzwhbkWMVp8ndO%2BoVdv%2Bdocx8l1ylDgorntxlOuPsvI0jMQzIlPz9uMHbS1tXU44ckXXlAdbMrz3aq3uf6ewcQizP8C%2B6j78TSQxeHJqlj6Gc%2FntfjyJgfwAHad85W0KEoOvH3SHt%2B%2FHVfRNIE9YK9MxC1hKRVxj8RncZfbg%2BXHE4TNRGDfcdmLXI0wpEXiztY41xvcnJISf69O%2Bie03AjiVmNIfCcUyVL9DKHP1pcymh%2B%2FELRfsIXA1nDNQanzFjzLSEbTKehdw4qtU%2Ff08u4MZ7fAOc4UZcOx3ohIu27%2BbNyLV9X%2BlvbR5lePdMEfeD2mBkKx8DdEUrI42bTLqUZ9dj967355O5A43AkSVhSZp%2FkeVleZu8uoiNL5feuRgbM6qSQG1%2B8GWlT5J67mgJ7by5mhNpTjzvVmyQ7SpFvmbWv3%2FOqbwHrBmLlyxqo7I3qVay4z9r5mgI7osYSvGFYJoGVrOLAwXeE1PEq5iYslieQsex39D3svqj5%2F67a7B4w2ICsvQY6pgFtU95J6BRPPt4YS8YFNEm%2BN0buIxMvBLGZRI0QlIrZr1de0i11TAW3C5Zu%2FwCgTFXc311Dw0r2ITWuqKF9WvhUaXbRJ6ZVdOjdJP7l%2Bcruzs%2BNA83tkiawF2hAtktTWGt6Tvxk2Rs9tuMBhPdaPJ3wpDKDmZIkUgDxgInaGlVYY6GDl5sb88BAf0%2BsZwvj2q23rldldtK0eMJTOdEG7%2FYn7Xg5B4aU&X-Amz-Signature=8d4ee5ae542c31a1a45d648867951a660ecf88f01bd48a9227f65d10e241c525&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPSGK2M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTZ1bwDy9ZceTKRYd68RHnAxWJI6wCc27m%2BM5boQdRsAiARG0VF5rgrBaZhBOmTZTS8aoaQIbfn7bFg7vbBOReRmyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv512ESZk8%2FI3ovTzKtwD9w8Vjmd0d%2Bslc0tOaQtwdD%2BPum7VFcmmkCfu3OziDEw0CNEtrov0JQjnD7xdfLny5MBczIxg854PTTvwidmgXIiugQVDQBFDElB2ogbsigk9KwpRza%2FATSTKYDOzwhbkWMVp8ndO%2BoVdv%2Bdocx8l1ylDgorntxlOuPsvI0jMQzIlPz9uMHbS1tXU44ckXXlAdbMrz3aq3uf6ewcQizP8C%2B6j78TSQxeHJqlj6Gc%2FntfjyJgfwAHad85W0KEoOvH3SHt%2B%2FHVfRNIE9YK9MxC1hKRVxj8RncZfbg%2BXHE4TNRGDfcdmLXI0wpEXiztY41xvcnJISf69O%2Bie03AjiVmNIfCcUyVL9DKHP1pcymh%2B%2FELRfsIXA1nDNQanzFjzLSEbTKehdw4qtU%2Ff08u4MZ7fAOc4UZcOx3ohIu27%2BbNyLV9X%2BlvbR5lePdMEfeD2mBkKx8DdEUrI42bTLqUZ9dj967355O5A43AkSVhSZp%2FkeVleZu8uoiNL5feuRgbM6qSQG1%2B8GWlT5J67mgJ7by5mhNpTjzvVmyQ7SpFvmbWv3%2FOqbwHrBmLlyxqo7I3qVay4z9r5mgI7osYSvGFYJoGVrOLAwXeE1PEq5iYslieQsex39D3svqj5%2F67a7B4w2ICsvQY6pgFtU95J6BRPPt4YS8YFNEm%2BN0buIxMvBLGZRI0QlIrZr1de0i11TAW3C5Zu%2FwCgTFXc311Dw0r2ITWuqKF9WvhUaXbRJ6ZVdOjdJP7l%2Bcruzs%2BNA83tkiawF2hAtktTWGt6Tvxk2Rs9tuMBhPdaPJ3wpDKDmZIkUgDxgInaGlVYY6GDl5sb88BAf0%2BsZwvj2q23rldldtK0eMJTOdEG7%2FYn7Xg5B4aU&X-Amz-Signature=ad225d101c512bbe252a7066da4199b8600c57fb9115108d4298cb32966904ed&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPSGK2M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTZ1bwDy9ZceTKRYd68RHnAxWJI6wCc27m%2BM5boQdRsAiARG0VF5rgrBaZhBOmTZTS8aoaQIbfn7bFg7vbBOReRmyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv512ESZk8%2FI3ovTzKtwD9w8Vjmd0d%2Bslc0tOaQtwdD%2BPum7VFcmmkCfu3OziDEw0CNEtrov0JQjnD7xdfLny5MBczIxg854PTTvwidmgXIiugQVDQBFDElB2ogbsigk9KwpRza%2FATSTKYDOzwhbkWMVp8ndO%2BoVdv%2Bdocx8l1ylDgorntxlOuPsvI0jMQzIlPz9uMHbS1tXU44ckXXlAdbMrz3aq3uf6ewcQizP8C%2B6j78TSQxeHJqlj6Gc%2FntfjyJgfwAHad85W0KEoOvH3SHt%2B%2FHVfRNIE9YK9MxC1hKRVxj8RncZfbg%2BXHE4TNRGDfcdmLXI0wpEXiztY41xvcnJISf69O%2Bie03AjiVmNIfCcUyVL9DKHP1pcymh%2B%2FELRfsIXA1nDNQanzFjzLSEbTKehdw4qtU%2Ff08u4MZ7fAOc4UZcOx3ohIu27%2BbNyLV9X%2BlvbR5lePdMEfeD2mBkKx8DdEUrI42bTLqUZ9dj967355O5A43AkSVhSZp%2FkeVleZu8uoiNL5feuRgbM6qSQG1%2B8GWlT5J67mgJ7by5mhNpTjzvVmyQ7SpFvmbWv3%2FOqbwHrBmLlyxqo7I3qVay4z9r5mgI7osYSvGFYJoGVrOLAwXeE1PEq5iYslieQsex39D3svqj5%2F67a7B4w2ICsvQY6pgFtU95J6BRPPt4YS8YFNEm%2BN0buIxMvBLGZRI0QlIrZr1de0i11TAW3C5Zu%2FwCgTFXc311Dw0r2ITWuqKF9WvhUaXbRJ6ZVdOjdJP7l%2Bcruzs%2BNA83tkiawF2hAtktTWGt6Tvxk2Rs9tuMBhPdaPJ3wpDKDmZIkUgDxgInaGlVYY6GDl5sb88BAf0%2BsZwvj2q23rldldtK0eMJTOdEG7%2FYn7Xg5B4aU&X-Amz-Signature=f79eb171aff36c3d94a77e9e798a926bf3002453c9792818922b7547b4a93829&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPSGK2M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTZ1bwDy9ZceTKRYd68RHnAxWJI6wCc27m%2BM5boQdRsAiARG0VF5rgrBaZhBOmTZTS8aoaQIbfn7bFg7vbBOReRmyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv512ESZk8%2FI3ovTzKtwD9w8Vjmd0d%2Bslc0tOaQtwdD%2BPum7VFcmmkCfu3OziDEw0CNEtrov0JQjnD7xdfLny5MBczIxg854PTTvwidmgXIiugQVDQBFDElB2ogbsigk9KwpRza%2FATSTKYDOzwhbkWMVp8ndO%2BoVdv%2Bdocx8l1ylDgorntxlOuPsvI0jMQzIlPz9uMHbS1tXU44ckXXlAdbMrz3aq3uf6ewcQizP8C%2B6j78TSQxeHJqlj6Gc%2FntfjyJgfwAHad85W0KEoOvH3SHt%2B%2FHVfRNIE9YK9MxC1hKRVxj8RncZfbg%2BXHE4TNRGDfcdmLXI0wpEXiztY41xvcnJISf69O%2Bie03AjiVmNIfCcUyVL9DKHP1pcymh%2B%2FELRfsIXA1nDNQanzFjzLSEbTKehdw4qtU%2Ff08u4MZ7fAOc4UZcOx3ohIu27%2BbNyLV9X%2BlvbR5lePdMEfeD2mBkKx8DdEUrI42bTLqUZ9dj967355O5A43AkSVhSZp%2FkeVleZu8uoiNL5feuRgbM6qSQG1%2B8GWlT5J67mgJ7by5mhNpTjzvVmyQ7SpFvmbWv3%2FOqbwHrBmLlyxqo7I3qVay4z9r5mgI7osYSvGFYJoGVrOLAwXeE1PEq5iYslieQsex39D3svqj5%2F67a7B4w2ICsvQY6pgFtU95J6BRPPt4YS8YFNEm%2BN0buIxMvBLGZRI0QlIrZr1de0i11TAW3C5Zu%2FwCgTFXc311Dw0r2ITWuqKF9WvhUaXbRJ6ZVdOjdJP7l%2Bcruzs%2BNA83tkiawF2hAtktTWGt6Tvxk2Rs9tuMBhPdaPJ3wpDKDmZIkUgDxgInaGlVYY6GDl5sb88BAf0%2BsZwvj2q23rldldtK0eMJTOdEG7%2FYn7Xg5B4aU&X-Amz-Signature=d3e682d95d19141f49b890a10ee55aa69aedef91741505b39dc661a30fb9e0b9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
