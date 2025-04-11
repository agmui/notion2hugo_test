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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNM6SN3N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCcMIapR8cS4w0wGUbHlB%2FULCeoYWG%2B28CAWC6whgfmcgIhAPhKFab0Ukqcyaw4eEnVv4ZFYdA73SoAko%2FVLhearvgGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRn1i25iVlsNMv5cq3APbb5NY2BXkojmf6Z8WRW3%2FJWHcu%2FRXrxmH%2Buv%2F%2BqIXp3AH8rSpXlfVN2Kp8PmETrUcyWOqjtdWKNDHo5%2BSsS%2FbRbc%2Foew%2FzxoUz6PBXAOiNGgHITgbHykoaAM2fvN9yRZRV%2B1YyHid3bpm%2B%2FTNNlFgJ5te%2B8XqZL1AGX7Rhdj%2BgtOWilNnURiU0aF9VBb0BNyq7PNOEX3LqVKoh4SDgaUpEbMboaSLZKnOuUsdOxIJy0%2BsLQRksLke6Jh7evBUCxZ%2FRqkxJCGVniK5H9WnA7ExekQlfdEDL5lWIjBLWgOqa753MWvYYy9TXaI26yvn7YtFLGAM2yBEKXUw%2FagbO2AgBcv0bMgRHwbYkV5h83IZpOczcJHwftaSOLyhZNnM%2BxXVSySurAHdLKOf4HdodqZfD1XAj6RhVE7gqsGvANyIPgBn3pKw5pei5ENvHG%2B1AXuRIb7lqL29f4Q3qS1X87MWvSRijSILGYqDFnZO2zIvf8xxuHqw7vJpzfheE1f1eD7ew0LgGmURnDNCQUzCp6S%2BLPE1tbyzVQ2MtS5P%2FJVDBKUdM1q%2BKBnb8gIRMV%2BfUVO6jQRU8nV7%2B1NA9YJN1tKC5TwQm6YkxiagULk3HV%2FZczmQp%2Fa5Re4rrRhJljDIy%2BO%2FBjqkASd24qvE4AljNkSA4A8X3F64ppIPeWH3WdixwwTOdvU5glsPdCAwdPGKzI9qU%2BtMi9Ls5zxPbng1kOcWj7soGboDL29svGMbBwloVykpUzDjEC7tb2KJ%2FVrV2Vvh%2FAR9%2FrNTJYGHQ80HFXhnX11sJ8qFXKpj2p%2F%2BdLJT4hAAwyGWudUYnI7I%2BnrIKmnULwcElOquqLK27q1MNv%2FQaDOEcRBBEz6s&X-Amz-Signature=5d6ca56d3c6bde8a6591ac46521caefd038e11dde72c1c227e49ae328dbeedc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNM6SN3N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCcMIapR8cS4w0wGUbHlB%2FULCeoYWG%2B28CAWC6whgfmcgIhAPhKFab0Ukqcyaw4eEnVv4ZFYdA73SoAko%2FVLhearvgGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRn1i25iVlsNMv5cq3APbb5NY2BXkojmf6Z8WRW3%2FJWHcu%2FRXrxmH%2Buv%2F%2BqIXp3AH8rSpXlfVN2Kp8PmETrUcyWOqjtdWKNDHo5%2BSsS%2FbRbc%2Foew%2FzxoUz6PBXAOiNGgHITgbHykoaAM2fvN9yRZRV%2B1YyHid3bpm%2B%2FTNNlFgJ5te%2B8XqZL1AGX7Rhdj%2BgtOWilNnURiU0aF9VBb0BNyq7PNOEX3LqVKoh4SDgaUpEbMboaSLZKnOuUsdOxIJy0%2BsLQRksLke6Jh7evBUCxZ%2FRqkxJCGVniK5H9WnA7ExekQlfdEDL5lWIjBLWgOqa753MWvYYy9TXaI26yvn7YtFLGAM2yBEKXUw%2FagbO2AgBcv0bMgRHwbYkV5h83IZpOczcJHwftaSOLyhZNnM%2BxXVSySurAHdLKOf4HdodqZfD1XAj6RhVE7gqsGvANyIPgBn3pKw5pei5ENvHG%2B1AXuRIb7lqL29f4Q3qS1X87MWvSRijSILGYqDFnZO2zIvf8xxuHqw7vJpzfheE1f1eD7ew0LgGmURnDNCQUzCp6S%2BLPE1tbyzVQ2MtS5P%2FJVDBKUdM1q%2BKBnb8gIRMV%2BfUVO6jQRU8nV7%2B1NA9YJN1tKC5TwQm6YkxiagULk3HV%2FZczmQp%2Fa5Re4rrRhJljDIy%2BO%2FBjqkASd24qvE4AljNkSA4A8X3F64ppIPeWH3WdixwwTOdvU5glsPdCAwdPGKzI9qU%2BtMi9Ls5zxPbng1kOcWj7soGboDL29svGMbBwloVykpUzDjEC7tb2KJ%2FVrV2Vvh%2FAR9%2FrNTJYGHQ80HFXhnX11sJ8qFXKpj2p%2F%2BdLJT4hAAwyGWudUYnI7I%2BnrIKmnULwcElOquqLK27q1MNv%2FQaDOEcRBBEz6s&X-Amz-Signature=58887ee476220a7d462e5a1a3558cfb58400f52e79d27b53b400654f5a44c648&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNM6SN3N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCcMIapR8cS4w0wGUbHlB%2FULCeoYWG%2B28CAWC6whgfmcgIhAPhKFab0Ukqcyaw4eEnVv4ZFYdA73SoAko%2FVLhearvgGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRn1i25iVlsNMv5cq3APbb5NY2BXkojmf6Z8WRW3%2FJWHcu%2FRXrxmH%2Buv%2F%2BqIXp3AH8rSpXlfVN2Kp8PmETrUcyWOqjtdWKNDHo5%2BSsS%2FbRbc%2Foew%2FzxoUz6PBXAOiNGgHITgbHykoaAM2fvN9yRZRV%2B1YyHid3bpm%2B%2FTNNlFgJ5te%2B8XqZL1AGX7Rhdj%2BgtOWilNnURiU0aF9VBb0BNyq7PNOEX3LqVKoh4SDgaUpEbMboaSLZKnOuUsdOxIJy0%2BsLQRksLke6Jh7evBUCxZ%2FRqkxJCGVniK5H9WnA7ExekQlfdEDL5lWIjBLWgOqa753MWvYYy9TXaI26yvn7YtFLGAM2yBEKXUw%2FagbO2AgBcv0bMgRHwbYkV5h83IZpOczcJHwftaSOLyhZNnM%2BxXVSySurAHdLKOf4HdodqZfD1XAj6RhVE7gqsGvANyIPgBn3pKw5pei5ENvHG%2B1AXuRIb7lqL29f4Q3qS1X87MWvSRijSILGYqDFnZO2zIvf8xxuHqw7vJpzfheE1f1eD7ew0LgGmURnDNCQUzCp6S%2BLPE1tbyzVQ2MtS5P%2FJVDBKUdM1q%2BKBnb8gIRMV%2BfUVO6jQRU8nV7%2B1NA9YJN1tKC5TwQm6YkxiagULk3HV%2FZczmQp%2Fa5Re4rrRhJljDIy%2BO%2FBjqkASd24qvE4AljNkSA4A8X3F64ppIPeWH3WdixwwTOdvU5glsPdCAwdPGKzI9qU%2BtMi9Ls5zxPbng1kOcWj7soGboDL29svGMbBwloVykpUzDjEC7tb2KJ%2FVrV2Vvh%2FAR9%2FrNTJYGHQ80HFXhnX11sJ8qFXKpj2p%2F%2BdLJT4hAAwyGWudUYnI7I%2BnrIKmnULwcElOquqLK27q1MNv%2FQaDOEcRBBEz6s&X-Amz-Signature=d4411a534b1174ec97c58c4cab5094091e0d0495a5a4e9e9df44c36cf2a2ecb4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNM6SN3N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCcMIapR8cS4w0wGUbHlB%2FULCeoYWG%2B28CAWC6whgfmcgIhAPhKFab0Ukqcyaw4eEnVv4ZFYdA73SoAko%2FVLhearvgGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRn1i25iVlsNMv5cq3APbb5NY2BXkojmf6Z8WRW3%2FJWHcu%2FRXrxmH%2Buv%2F%2BqIXp3AH8rSpXlfVN2Kp8PmETrUcyWOqjtdWKNDHo5%2BSsS%2FbRbc%2Foew%2FzxoUz6PBXAOiNGgHITgbHykoaAM2fvN9yRZRV%2B1YyHid3bpm%2B%2FTNNlFgJ5te%2B8XqZL1AGX7Rhdj%2BgtOWilNnURiU0aF9VBb0BNyq7PNOEX3LqVKoh4SDgaUpEbMboaSLZKnOuUsdOxIJy0%2BsLQRksLke6Jh7evBUCxZ%2FRqkxJCGVniK5H9WnA7ExekQlfdEDL5lWIjBLWgOqa753MWvYYy9TXaI26yvn7YtFLGAM2yBEKXUw%2FagbO2AgBcv0bMgRHwbYkV5h83IZpOczcJHwftaSOLyhZNnM%2BxXVSySurAHdLKOf4HdodqZfD1XAj6RhVE7gqsGvANyIPgBn3pKw5pei5ENvHG%2B1AXuRIb7lqL29f4Q3qS1X87MWvSRijSILGYqDFnZO2zIvf8xxuHqw7vJpzfheE1f1eD7ew0LgGmURnDNCQUzCp6S%2BLPE1tbyzVQ2MtS5P%2FJVDBKUdM1q%2BKBnb8gIRMV%2BfUVO6jQRU8nV7%2B1NA9YJN1tKC5TwQm6YkxiagULk3HV%2FZczmQp%2Fa5Re4rrRhJljDIy%2BO%2FBjqkASd24qvE4AljNkSA4A8X3F64ppIPeWH3WdixwwTOdvU5glsPdCAwdPGKzI9qU%2BtMi9Ls5zxPbng1kOcWj7soGboDL29svGMbBwloVykpUzDjEC7tb2KJ%2FVrV2Vvh%2FAR9%2FrNTJYGHQ80HFXhnX11sJ8qFXKpj2p%2F%2BdLJT4hAAwyGWudUYnI7I%2BnrIKmnULwcElOquqLK27q1MNv%2FQaDOEcRBBEz6s&X-Amz-Signature=0a09d686499a7db29551168f2d218b210ac6ba5588de10a6f54f6a9afe41b602&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNM6SN3N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCcMIapR8cS4w0wGUbHlB%2FULCeoYWG%2B28CAWC6whgfmcgIhAPhKFab0Ukqcyaw4eEnVv4ZFYdA73SoAko%2FVLhearvgGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRn1i25iVlsNMv5cq3APbb5NY2BXkojmf6Z8WRW3%2FJWHcu%2FRXrxmH%2Buv%2F%2BqIXp3AH8rSpXlfVN2Kp8PmETrUcyWOqjtdWKNDHo5%2BSsS%2FbRbc%2Foew%2FzxoUz6PBXAOiNGgHITgbHykoaAM2fvN9yRZRV%2B1YyHid3bpm%2B%2FTNNlFgJ5te%2B8XqZL1AGX7Rhdj%2BgtOWilNnURiU0aF9VBb0BNyq7PNOEX3LqVKoh4SDgaUpEbMboaSLZKnOuUsdOxIJy0%2BsLQRksLke6Jh7evBUCxZ%2FRqkxJCGVniK5H9WnA7ExekQlfdEDL5lWIjBLWgOqa753MWvYYy9TXaI26yvn7YtFLGAM2yBEKXUw%2FagbO2AgBcv0bMgRHwbYkV5h83IZpOczcJHwftaSOLyhZNnM%2BxXVSySurAHdLKOf4HdodqZfD1XAj6RhVE7gqsGvANyIPgBn3pKw5pei5ENvHG%2B1AXuRIb7lqL29f4Q3qS1X87MWvSRijSILGYqDFnZO2zIvf8xxuHqw7vJpzfheE1f1eD7ew0LgGmURnDNCQUzCp6S%2BLPE1tbyzVQ2MtS5P%2FJVDBKUdM1q%2BKBnb8gIRMV%2BfUVO6jQRU8nV7%2B1NA9YJN1tKC5TwQm6YkxiagULk3HV%2FZczmQp%2Fa5Re4rrRhJljDIy%2BO%2FBjqkASd24qvE4AljNkSA4A8X3F64ppIPeWH3WdixwwTOdvU5glsPdCAwdPGKzI9qU%2BtMi9Ls5zxPbng1kOcWj7soGboDL29svGMbBwloVykpUzDjEC7tb2KJ%2FVrV2Vvh%2FAR9%2FrNTJYGHQ80HFXhnX11sJ8qFXKpj2p%2F%2BdLJT4hAAwyGWudUYnI7I%2BnrIKmnULwcElOquqLK27q1MNv%2FQaDOEcRBBEz6s&X-Amz-Signature=46a4bf400a23a60f6c4af83f1fde2344d28ae8629a852cde4f65db04f9dc0540&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNM6SN3N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCcMIapR8cS4w0wGUbHlB%2FULCeoYWG%2B28CAWC6whgfmcgIhAPhKFab0Ukqcyaw4eEnVv4ZFYdA73SoAko%2FVLhearvgGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRn1i25iVlsNMv5cq3APbb5NY2BXkojmf6Z8WRW3%2FJWHcu%2FRXrxmH%2Buv%2F%2BqIXp3AH8rSpXlfVN2Kp8PmETrUcyWOqjtdWKNDHo5%2BSsS%2FbRbc%2Foew%2FzxoUz6PBXAOiNGgHITgbHykoaAM2fvN9yRZRV%2B1YyHid3bpm%2B%2FTNNlFgJ5te%2B8XqZL1AGX7Rhdj%2BgtOWilNnURiU0aF9VBb0BNyq7PNOEX3LqVKoh4SDgaUpEbMboaSLZKnOuUsdOxIJy0%2BsLQRksLke6Jh7evBUCxZ%2FRqkxJCGVniK5H9WnA7ExekQlfdEDL5lWIjBLWgOqa753MWvYYy9TXaI26yvn7YtFLGAM2yBEKXUw%2FagbO2AgBcv0bMgRHwbYkV5h83IZpOczcJHwftaSOLyhZNnM%2BxXVSySurAHdLKOf4HdodqZfD1XAj6RhVE7gqsGvANyIPgBn3pKw5pei5ENvHG%2B1AXuRIb7lqL29f4Q3qS1X87MWvSRijSILGYqDFnZO2zIvf8xxuHqw7vJpzfheE1f1eD7ew0LgGmURnDNCQUzCp6S%2BLPE1tbyzVQ2MtS5P%2FJVDBKUdM1q%2BKBnb8gIRMV%2BfUVO6jQRU8nV7%2B1NA9YJN1tKC5TwQm6YkxiagULk3HV%2FZczmQp%2Fa5Re4rrRhJljDIy%2BO%2FBjqkASd24qvE4AljNkSA4A8X3F64ppIPeWH3WdixwwTOdvU5glsPdCAwdPGKzI9qU%2BtMi9Ls5zxPbng1kOcWj7soGboDL29svGMbBwloVykpUzDjEC7tb2KJ%2FVrV2Vvh%2FAR9%2FrNTJYGHQ80HFXhnX11sJ8qFXKpj2p%2F%2BdLJT4hAAwyGWudUYnI7I%2BnrIKmnULwcElOquqLK27q1MNv%2FQaDOEcRBBEz6s&X-Amz-Signature=5ef26b9fba4b162649ab44916982ba2750563c25eccc45f644113468ea94bfbf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNM6SN3N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCcMIapR8cS4w0wGUbHlB%2FULCeoYWG%2B28CAWC6whgfmcgIhAPhKFab0Ukqcyaw4eEnVv4ZFYdA73SoAko%2FVLhearvgGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRn1i25iVlsNMv5cq3APbb5NY2BXkojmf6Z8WRW3%2FJWHcu%2FRXrxmH%2Buv%2F%2BqIXp3AH8rSpXlfVN2Kp8PmETrUcyWOqjtdWKNDHo5%2BSsS%2FbRbc%2Foew%2FzxoUz6PBXAOiNGgHITgbHykoaAM2fvN9yRZRV%2B1YyHid3bpm%2B%2FTNNlFgJ5te%2B8XqZL1AGX7Rhdj%2BgtOWilNnURiU0aF9VBb0BNyq7PNOEX3LqVKoh4SDgaUpEbMboaSLZKnOuUsdOxIJy0%2BsLQRksLke6Jh7evBUCxZ%2FRqkxJCGVniK5H9WnA7ExekQlfdEDL5lWIjBLWgOqa753MWvYYy9TXaI26yvn7YtFLGAM2yBEKXUw%2FagbO2AgBcv0bMgRHwbYkV5h83IZpOczcJHwftaSOLyhZNnM%2BxXVSySurAHdLKOf4HdodqZfD1XAj6RhVE7gqsGvANyIPgBn3pKw5pei5ENvHG%2B1AXuRIb7lqL29f4Q3qS1X87MWvSRijSILGYqDFnZO2zIvf8xxuHqw7vJpzfheE1f1eD7ew0LgGmURnDNCQUzCp6S%2BLPE1tbyzVQ2MtS5P%2FJVDBKUdM1q%2BKBnb8gIRMV%2BfUVO6jQRU8nV7%2B1NA9YJN1tKC5TwQm6YkxiagULk3HV%2FZczmQp%2Fa5Re4rrRhJljDIy%2BO%2FBjqkASd24qvE4AljNkSA4A8X3F64ppIPeWH3WdixwwTOdvU5glsPdCAwdPGKzI9qU%2BtMi9Ls5zxPbng1kOcWj7soGboDL29svGMbBwloVykpUzDjEC7tb2KJ%2FVrV2Vvh%2FAR9%2FrNTJYGHQ80HFXhnX11sJ8qFXKpj2p%2F%2BdLJT4hAAwyGWudUYnI7I%2BnrIKmnULwcElOquqLK27q1MNv%2FQaDOEcRBBEz6s&X-Amz-Signature=95fbfb8be444c51334fb4ba0a36106c0f933028dcb4e49bb41c10385424c8b6c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
