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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OLGBXV%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEg5rqIPrKr%2FNGMgD2CIlLffHcnDdOI%2FksGBLlU8V5F2AiEAmn5zqwl6f6gGYfbxhyOx6pWehlXCRqiDgI%2B1Wrm4YHAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHDojGU%2BWJ5X9GmnlSrcA5M%2FSsO7We5SBY7%2B5OYbJote8qbShfSKMMZEz8aRyPLfdOYxCyaZfx8rILpM9UpI6iBkJ7S9siaZ4%2B9lfbBXiyeBUH4t8JlpRE9Jq44otDZDth%2FhK2F2VkPYPM2mL8hrqV%2FuIhnJ1MEHxjGoT0kRsq%2BMhaX60or1H34vYjQ4neHvA7I6X9jKGfNAHJKE6fF%2BFbXR%2FzHuZpojmShgjytvJ6TmfaKViYmlz4ZW7xzNW7F1mNn1py%2FUhHN2Dby14JybeWumFe0IZllOGxjy1gDNrks1dHsuZg2gmLl76sy9c0%2B9qf9WbtsJs8nprwSmobOTx9MPgXb9D4Wote0JK5X3FgIxvyCJj4WImWBbq%2BsA%2BXrtF8vKeT0JtNfoXFHWOvHp3tNWw1lR687EZA0NV7Pku65%2BTzCZT5dzFDtC9%2B3NajeQuCdYA2oa%2F%2BC39POtf%2Fou9cfME8f5RyeC3EMhdoTYZlmxoVnl8LhRVnJK52h8ZgMlC6frpPoeFbP562AwrX%2FL%2FqcGTsICXj0K48uMf1cfIxiQOpF1w3nmVxDW0qB4eHJ1%2BTCRp2KTnRk4gnwYQ97%2FNduuSRMItHC9uSNlxLfigjveRwR20HoxKoNGSWBB0J0NqRFVihksaHZz87KmMJ7qu70GOqUBuRWTmnBE1TifAxSZrqIz1pHzHCVCmAooHXNfr4lUkzP9PzmcLTiWshkAXMelvGV62LKwG0R0UWKT1Sql%2FHvB1Ki2PiH96UEAk0eBc9xdxJfNGBFBYM5H09oBpLaumL5FmZlzAy2YLlttEgfc4N2BKciN%2BsUG00pA7020Bgd00ZX3UZONjRQ5e4l9Ws9qVtN9bHyMvpStskqxhxbDNO9nlnQtJnEC&X-Amz-Signature=a171dd039ebd9e9dfd30435fda9b0ab2370beea1116e9aebcfeb78693ba41037&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OLGBXV%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEg5rqIPrKr%2FNGMgD2CIlLffHcnDdOI%2FksGBLlU8V5F2AiEAmn5zqwl6f6gGYfbxhyOx6pWehlXCRqiDgI%2B1Wrm4YHAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHDojGU%2BWJ5X9GmnlSrcA5M%2FSsO7We5SBY7%2B5OYbJote8qbShfSKMMZEz8aRyPLfdOYxCyaZfx8rILpM9UpI6iBkJ7S9siaZ4%2B9lfbBXiyeBUH4t8JlpRE9Jq44otDZDth%2FhK2F2VkPYPM2mL8hrqV%2FuIhnJ1MEHxjGoT0kRsq%2BMhaX60or1H34vYjQ4neHvA7I6X9jKGfNAHJKE6fF%2BFbXR%2FzHuZpojmShgjytvJ6TmfaKViYmlz4ZW7xzNW7F1mNn1py%2FUhHN2Dby14JybeWumFe0IZllOGxjy1gDNrks1dHsuZg2gmLl76sy9c0%2B9qf9WbtsJs8nprwSmobOTx9MPgXb9D4Wote0JK5X3FgIxvyCJj4WImWBbq%2BsA%2BXrtF8vKeT0JtNfoXFHWOvHp3tNWw1lR687EZA0NV7Pku65%2BTzCZT5dzFDtC9%2B3NajeQuCdYA2oa%2F%2BC39POtf%2Fou9cfME8f5RyeC3EMhdoTYZlmxoVnl8LhRVnJK52h8ZgMlC6frpPoeFbP562AwrX%2FL%2FqcGTsICXj0K48uMf1cfIxiQOpF1w3nmVxDW0qB4eHJ1%2BTCRp2KTnRk4gnwYQ97%2FNduuSRMItHC9uSNlxLfigjveRwR20HoxKoNGSWBB0J0NqRFVihksaHZz87KmMJ7qu70GOqUBuRWTmnBE1TifAxSZrqIz1pHzHCVCmAooHXNfr4lUkzP9PzmcLTiWshkAXMelvGV62LKwG0R0UWKT1Sql%2FHvB1Ki2PiH96UEAk0eBc9xdxJfNGBFBYM5H09oBpLaumL5FmZlzAy2YLlttEgfc4N2BKciN%2BsUG00pA7020Bgd00ZX3UZONjRQ5e4l9Ws9qVtN9bHyMvpStskqxhxbDNO9nlnQtJnEC&X-Amz-Signature=be3e51901121c7e4f8360f651555e451b6d556d6c32ddd4056d2867c61029a11&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OLGBXV%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEg5rqIPrKr%2FNGMgD2CIlLffHcnDdOI%2FksGBLlU8V5F2AiEAmn5zqwl6f6gGYfbxhyOx6pWehlXCRqiDgI%2B1Wrm4YHAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHDojGU%2BWJ5X9GmnlSrcA5M%2FSsO7We5SBY7%2B5OYbJote8qbShfSKMMZEz8aRyPLfdOYxCyaZfx8rILpM9UpI6iBkJ7S9siaZ4%2B9lfbBXiyeBUH4t8JlpRE9Jq44otDZDth%2FhK2F2VkPYPM2mL8hrqV%2FuIhnJ1MEHxjGoT0kRsq%2BMhaX60or1H34vYjQ4neHvA7I6X9jKGfNAHJKE6fF%2BFbXR%2FzHuZpojmShgjytvJ6TmfaKViYmlz4ZW7xzNW7F1mNn1py%2FUhHN2Dby14JybeWumFe0IZllOGxjy1gDNrks1dHsuZg2gmLl76sy9c0%2B9qf9WbtsJs8nprwSmobOTx9MPgXb9D4Wote0JK5X3FgIxvyCJj4WImWBbq%2BsA%2BXrtF8vKeT0JtNfoXFHWOvHp3tNWw1lR687EZA0NV7Pku65%2BTzCZT5dzFDtC9%2B3NajeQuCdYA2oa%2F%2BC39POtf%2Fou9cfME8f5RyeC3EMhdoTYZlmxoVnl8LhRVnJK52h8ZgMlC6frpPoeFbP562AwrX%2FL%2FqcGTsICXj0K48uMf1cfIxiQOpF1w3nmVxDW0qB4eHJ1%2BTCRp2KTnRk4gnwYQ97%2FNduuSRMItHC9uSNlxLfigjveRwR20HoxKoNGSWBB0J0NqRFVihksaHZz87KmMJ7qu70GOqUBuRWTmnBE1TifAxSZrqIz1pHzHCVCmAooHXNfr4lUkzP9PzmcLTiWshkAXMelvGV62LKwG0R0UWKT1Sql%2FHvB1Ki2PiH96UEAk0eBc9xdxJfNGBFBYM5H09oBpLaumL5FmZlzAy2YLlttEgfc4N2BKciN%2BsUG00pA7020Bgd00ZX3UZONjRQ5e4l9Ws9qVtN9bHyMvpStskqxhxbDNO9nlnQtJnEC&X-Amz-Signature=28701c734c27eb931ad2f41fff42b646873a069fc092c538921557ef5167d3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OLGBXV%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEg5rqIPrKr%2FNGMgD2CIlLffHcnDdOI%2FksGBLlU8V5F2AiEAmn5zqwl6f6gGYfbxhyOx6pWehlXCRqiDgI%2B1Wrm4YHAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHDojGU%2BWJ5X9GmnlSrcA5M%2FSsO7We5SBY7%2B5OYbJote8qbShfSKMMZEz8aRyPLfdOYxCyaZfx8rILpM9UpI6iBkJ7S9siaZ4%2B9lfbBXiyeBUH4t8JlpRE9Jq44otDZDth%2FhK2F2VkPYPM2mL8hrqV%2FuIhnJ1MEHxjGoT0kRsq%2BMhaX60or1H34vYjQ4neHvA7I6X9jKGfNAHJKE6fF%2BFbXR%2FzHuZpojmShgjytvJ6TmfaKViYmlz4ZW7xzNW7F1mNn1py%2FUhHN2Dby14JybeWumFe0IZllOGxjy1gDNrks1dHsuZg2gmLl76sy9c0%2B9qf9WbtsJs8nprwSmobOTx9MPgXb9D4Wote0JK5X3FgIxvyCJj4WImWBbq%2BsA%2BXrtF8vKeT0JtNfoXFHWOvHp3tNWw1lR687EZA0NV7Pku65%2BTzCZT5dzFDtC9%2B3NajeQuCdYA2oa%2F%2BC39POtf%2Fou9cfME8f5RyeC3EMhdoTYZlmxoVnl8LhRVnJK52h8ZgMlC6frpPoeFbP562AwrX%2FL%2FqcGTsICXj0K48uMf1cfIxiQOpF1w3nmVxDW0qB4eHJ1%2BTCRp2KTnRk4gnwYQ97%2FNduuSRMItHC9uSNlxLfigjveRwR20HoxKoNGSWBB0J0NqRFVihksaHZz87KmMJ7qu70GOqUBuRWTmnBE1TifAxSZrqIz1pHzHCVCmAooHXNfr4lUkzP9PzmcLTiWshkAXMelvGV62LKwG0R0UWKT1Sql%2FHvB1Ki2PiH96UEAk0eBc9xdxJfNGBFBYM5H09oBpLaumL5FmZlzAy2YLlttEgfc4N2BKciN%2BsUG00pA7020Bgd00ZX3UZONjRQ5e4l9Ws9qVtN9bHyMvpStskqxhxbDNO9nlnQtJnEC&X-Amz-Signature=49e245b1b58503a367dc50d37acf32df57cf2dd85e5004f871954106c8abf4f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OLGBXV%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEg5rqIPrKr%2FNGMgD2CIlLffHcnDdOI%2FksGBLlU8V5F2AiEAmn5zqwl6f6gGYfbxhyOx6pWehlXCRqiDgI%2B1Wrm4YHAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHDojGU%2BWJ5X9GmnlSrcA5M%2FSsO7We5SBY7%2B5OYbJote8qbShfSKMMZEz8aRyPLfdOYxCyaZfx8rILpM9UpI6iBkJ7S9siaZ4%2B9lfbBXiyeBUH4t8JlpRE9Jq44otDZDth%2FhK2F2VkPYPM2mL8hrqV%2FuIhnJ1MEHxjGoT0kRsq%2BMhaX60or1H34vYjQ4neHvA7I6X9jKGfNAHJKE6fF%2BFbXR%2FzHuZpojmShgjytvJ6TmfaKViYmlz4ZW7xzNW7F1mNn1py%2FUhHN2Dby14JybeWumFe0IZllOGxjy1gDNrks1dHsuZg2gmLl76sy9c0%2B9qf9WbtsJs8nprwSmobOTx9MPgXb9D4Wote0JK5X3FgIxvyCJj4WImWBbq%2BsA%2BXrtF8vKeT0JtNfoXFHWOvHp3tNWw1lR687EZA0NV7Pku65%2BTzCZT5dzFDtC9%2B3NajeQuCdYA2oa%2F%2BC39POtf%2Fou9cfME8f5RyeC3EMhdoTYZlmxoVnl8LhRVnJK52h8ZgMlC6frpPoeFbP562AwrX%2FL%2FqcGTsICXj0K48uMf1cfIxiQOpF1w3nmVxDW0qB4eHJ1%2BTCRp2KTnRk4gnwYQ97%2FNduuSRMItHC9uSNlxLfigjveRwR20HoxKoNGSWBB0J0NqRFVihksaHZz87KmMJ7qu70GOqUBuRWTmnBE1TifAxSZrqIz1pHzHCVCmAooHXNfr4lUkzP9PzmcLTiWshkAXMelvGV62LKwG0R0UWKT1Sql%2FHvB1Ki2PiH96UEAk0eBc9xdxJfNGBFBYM5H09oBpLaumL5FmZlzAy2YLlttEgfc4N2BKciN%2BsUG00pA7020Bgd00ZX3UZONjRQ5e4l9Ws9qVtN9bHyMvpStskqxhxbDNO9nlnQtJnEC&X-Amz-Signature=1f3865b5c3753d9fab12cea18bd001296364ab6e4fd8474c74aee4749906ae60&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OLGBXV%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEg5rqIPrKr%2FNGMgD2CIlLffHcnDdOI%2FksGBLlU8V5F2AiEAmn5zqwl6f6gGYfbxhyOx6pWehlXCRqiDgI%2B1Wrm4YHAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHDojGU%2BWJ5X9GmnlSrcA5M%2FSsO7We5SBY7%2B5OYbJote8qbShfSKMMZEz8aRyPLfdOYxCyaZfx8rILpM9UpI6iBkJ7S9siaZ4%2B9lfbBXiyeBUH4t8JlpRE9Jq44otDZDth%2FhK2F2VkPYPM2mL8hrqV%2FuIhnJ1MEHxjGoT0kRsq%2BMhaX60or1H34vYjQ4neHvA7I6X9jKGfNAHJKE6fF%2BFbXR%2FzHuZpojmShgjytvJ6TmfaKViYmlz4ZW7xzNW7F1mNn1py%2FUhHN2Dby14JybeWumFe0IZllOGxjy1gDNrks1dHsuZg2gmLl76sy9c0%2B9qf9WbtsJs8nprwSmobOTx9MPgXb9D4Wote0JK5X3FgIxvyCJj4WImWBbq%2BsA%2BXrtF8vKeT0JtNfoXFHWOvHp3tNWw1lR687EZA0NV7Pku65%2BTzCZT5dzFDtC9%2B3NajeQuCdYA2oa%2F%2BC39POtf%2Fou9cfME8f5RyeC3EMhdoTYZlmxoVnl8LhRVnJK52h8ZgMlC6frpPoeFbP562AwrX%2FL%2FqcGTsICXj0K48uMf1cfIxiQOpF1w3nmVxDW0qB4eHJ1%2BTCRp2KTnRk4gnwYQ97%2FNduuSRMItHC9uSNlxLfigjveRwR20HoxKoNGSWBB0J0NqRFVihksaHZz87KmMJ7qu70GOqUBuRWTmnBE1TifAxSZrqIz1pHzHCVCmAooHXNfr4lUkzP9PzmcLTiWshkAXMelvGV62LKwG0R0UWKT1Sql%2FHvB1Ki2PiH96UEAk0eBc9xdxJfNGBFBYM5H09oBpLaumL5FmZlzAy2YLlttEgfc4N2BKciN%2BsUG00pA7020Bgd00ZX3UZONjRQ5e4l9Ws9qVtN9bHyMvpStskqxhxbDNO9nlnQtJnEC&X-Amz-Signature=d9b37341868bd6dba452efa8cd62b1ffd394bc6a5c13dc32734b68784b121eef&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OLGBXV%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEg5rqIPrKr%2FNGMgD2CIlLffHcnDdOI%2FksGBLlU8V5F2AiEAmn5zqwl6f6gGYfbxhyOx6pWehlXCRqiDgI%2B1Wrm4YHAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHDojGU%2BWJ5X9GmnlSrcA5M%2FSsO7We5SBY7%2B5OYbJote8qbShfSKMMZEz8aRyPLfdOYxCyaZfx8rILpM9UpI6iBkJ7S9siaZ4%2B9lfbBXiyeBUH4t8JlpRE9Jq44otDZDth%2FhK2F2VkPYPM2mL8hrqV%2FuIhnJ1MEHxjGoT0kRsq%2BMhaX60or1H34vYjQ4neHvA7I6X9jKGfNAHJKE6fF%2BFbXR%2FzHuZpojmShgjytvJ6TmfaKViYmlz4ZW7xzNW7F1mNn1py%2FUhHN2Dby14JybeWumFe0IZllOGxjy1gDNrks1dHsuZg2gmLl76sy9c0%2B9qf9WbtsJs8nprwSmobOTx9MPgXb9D4Wote0JK5X3FgIxvyCJj4WImWBbq%2BsA%2BXrtF8vKeT0JtNfoXFHWOvHp3tNWw1lR687EZA0NV7Pku65%2BTzCZT5dzFDtC9%2B3NajeQuCdYA2oa%2F%2BC39POtf%2Fou9cfME8f5RyeC3EMhdoTYZlmxoVnl8LhRVnJK52h8ZgMlC6frpPoeFbP562AwrX%2FL%2FqcGTsICXj0K48uMf1cfIxiQOpF1w3nmVxDW0qB4eHJ1%2BTCRp2KTnRk4gnwYQ97%2FNduuSRMItHC9uSNlxLfigjveRwR20HoxKoNGSWBB0J0NqRFVihksaHZz87KmMJ7qu70GOqUBuRWTmnBE1TifAxSZrqIz1pHzHCVCmAooHXNfr4lUkzP9PzmcLTiWshkAXMelvGV62LKwG0R0UWKT1Sql%2FHvB1Ki2PiH96UEAk0eBc9xdxJfNGBFBYM5H09oBpLaumL5FmZlzAy2YLlttEgfc4N2BKciN%2BsUG00pA7020Bgd00ZX3UZONjRQ5e4l9Ws9qVtN9bHyMvpStskqxhxbDNO9nlnQtJnEC&X-Amz-Signature=9ccd07cf40c7ebe80abb865f0439c9edb9b2888a30bbaa580018c3d27b34bef9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
