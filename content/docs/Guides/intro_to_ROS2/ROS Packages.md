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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFXOPWWX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B8qJjsBO8pPqF3ftwLszV6HlKyJbaQOrRXuRIKWvpzAiEAvja1UkVV0GFRYTIgTFVrDJHih83n3h4fzJDJa0d0XIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc%2BHZRowCdp3wuYeircAw9wWm%2Ftqj6n31Y1mOOhx%2FPXY%2FrmpP2mRtH9pbW6uuzxiK4JxAzQiVpQImtC7l1VY1bUYB3lWc4wPMC8LeBP%2BYj8m6Qjs5b2TI7F5j0i%2Bm24O64SXBmz80Xmmczb8uMvJmdmmbML9jrI9pEWJi%2BHUHr2iSXeCkw3oas1mLUb5Uv7vjOOYZK345oDpQ0xWfpe%2BEFyQly2UR91JmcoeZZQd83ov%2FID2c0di%2BVgReNn9vS%2FSPypd21rXe7Kv4usZdZfP7uCftwpbme1kPbU4njmGRMvqPBfv%2BuHCTpYl4sdM5J2BY275oC1b1wdnFZz6BFWXWWtelYYlxm9D%2B%2BWN1VbMVPmS2qCsdJmk4j%2F5zultQxhN9S6C4ZtKQLCelsnaC1EptOLloCr1WET8uFLCvUibYKlLN2T7JHvEfLXKngoFf6qT1IkIR7XIWHhJ%2BvjvhV3lXuic7Duej%2B478%2FEbAKoejTiu3ZDZTbWEeQzAUdOl%2F9a3Y22MltAwgIUOPLtCbCc4C8PQUg%2FP2tDNzImfOASYOCZTKK9mvDQGu5%2Bo5tLoCzdzofAtxzec8xfU4gnOWfQ8AH9xrw68xmBDh310jPacrJW98U6jLwEgfTplKYnX7y0RK4DV0vnwRLHy0I0MKroqcQGOqUBo4p%2BXTiHbOez%2B5SIsxx8GxoaOiRiiNcAE6lg4GIfSo15UHNNQsQnFV5AFDHV9Uu22IaejwFtaTpl4uHcvtiFLnjd93xR%2B8EZl7kraT6ZQR86A2594EGKTKVIZEwIMoNKyssYchiGUqUxj8Q5XX8lYtq3v6l3wPUYODDZUdptHG0GzKcZj0LOWkeEK9KpU3UrRbA83b%2FZeSfhVwRkeVS6OCRkfJdb&X-Amz-Signature=35946289a454a8d8731faecf2b9b5c432d5bf22064022b38998954a6618cef22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFXOPWWX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B8qJjsBO8pPqF3ftwLszV6HlKyJbaQOrRXuRIKWvpzAiEAvja1UkVV0GFRYTIgTFVrDJHih83n3h4fzJDJa0d0XIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc%2BHZRowCdp3wuYeircAw9wWm%2Ftqj6n31Y1mOOhx%2FPXY%2FrmpP2mRtH9pbW6uuzxiK4JxAzQiVpQImtC7l1VY1bUYB3lWc4wPMC8LeBP%2BYj8m6Qjs5b2TI7F5j0i%2Bm24O64SXBmz80Xmmczb8uMvJmdmmbML9jrI9pEWJi%2BHUHr2iSXeCkw3oas1mLUb5Uv7vjOOYZK345oDpQ0xWfpe%2BEFyQly2UR91JmcoeZZQd83ov%2FID2c0di%2BVgReNn9vS%2FSPypd21rXe7Kv4usZdZfP7uCftwpbme1kPbU4njmGRMvqPBfv%2BuHCTpYl4sdM5J2BY275oC1b1wdnFZz6BFWXWWtelYYlxm9D%2B%2BWN1VbMVPmS2qCsdJmk4j%2F5zultQxhN9S6C4ZtKQLCelsnaC1EptOLloCr1WET8uFLCvUibYKlLN2T7JHvEfLXKngoFf6qT1IkIR7XIWHhJ%2BvjvhV3lXuic7Duej%2B478%2FEbAKoejTiu3ZDZTbWEeQzAUdOl%2F9a3Y22MltAwgIUOPLtCbCc4C8PQUg%2FP2tDNzImfOASYOCZTKK9mvDQGu5%2Bo5tLoCzdzofAtxzec8xfU4gnOWfQ8AH9xrw68xmBDh310jPacrJW98U6jLwEgfTplKYnX7y0RK4DV0vnwRLHy0I0MKroqcQGOqUBo4p%2BXTiHbOez%2B5SIsxx8GxoaOiRiiNcAE6lg4GIfSo15UHNNQsQnFV5AFDHV9Uu22IaejwFtaTpl4uHcvtiFLnjd93xR%2B8EZl7kraT6ZQR86A2594EGKTKVIZEwIMoNKyssYchiGUqUxj8Q5XX8lYtq3v6l3wPUYODDZUdptHG0GzKcZj0LOWkeEK9KpU3UrRbA83b%2FZeSfhVwRkeVS6OCRkfJdb&X-Amz-Signature=727980c05daf27bd8f0e6207ad4b02f01ed6403d5ade385af691ad5550ed2b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFXOPWWX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B8qJjsBO8pPqF3ftwLszV6HlKyJbaQOrRXuRIKWvpzAiEAvja1UkVV0GFRYTIgTFVrDJHih83n3h4fzJDJa0d0XIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc%2BHZRowCdp3wuYeircAw9wWm%2Ftqj6n31Y1mOOhx%2FPXY%2FrmpP2mRtH9pbW6uuzxiK4JxAzQiVpQImtC7l1VY1bUYB3lWc4wPMC8LeBP%2BYj8m6Qjs5b2TI7F5j0i%2Bm24O64SXBmz80Xmmczb8uMvJmdmmbML9jrI9pEWJi%2BHUHr2iSXeCkw3oas1mLUb5Uv7vjOOYZK345oDpQ0xWfpe%2BEFyQly2UR91JmcoeZZQd83ov%2FID2c0di%2BVgReNn9vS%2FSPypd21rXe7Kv4usZdZfP7uCftwpbme1kPbU4njmGRMvqPBfv%2BuHCTpYl4sdM5J2BY275oC1b1wdnFZz6BFWXWWtelYYlxm9D%2B%2BWN1VbMVPmS2qCsdJmk4j%2F5zultQxhN9S6C4ZtKQLCelsnaC1EptOLloCr1WET8uFLCvUibYKlLN2T7JHvEfLXKngoFf6qT1IkIR7XIWHhJ%2BvjvhV3lXuic7Duej%2B478%2FEbAKoejTiu3ZDZTbWEeQzAUdOl%2F9a3Y22MltAwgIUOPLtCbCc4C8PQUg%2FP2tDNzImfOASYOCZTKK9mvDQGu5%2Bo5tLoCzdzofAtxzec8xfU4gnOWfQ8AH9xrw68xmBDh310jPacrJW98U6jLwEgfTplKYnX7y0RK4DV0vnwRLHy0I0MKroqcQGOqUBo4p%2BXTiHbOez%2B5SIsxx8GxoaOiRiiNcAE6lg4GIfSo15UHNNQsQnFV5AFDHV9Uu22IaejwFtaTpl4uHcvtiFLnjd93xR%2B8EZl7kraT6ZQR86A2594EGKTKVIZEwIMoNKyssYchiGUqUxj8Q5XX8lYtq3v6l3wPUYODDZUdptHG0GzKcZj0LOWkeEK9KpU3UrRbA83b%2FZeSfhVwRkeVS6OCRkfJdb&X-Amz-Signature=d139b6851f4a9bc995b8dbcdd77bca259c14698aa41e017a58921822b40529d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFXOPWWX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B8qJjsBO8pPqF3ftwLszV6HlKyJbaQOrRXuRIKWvpzAiEAvja1UkVV0GFRYTIgTFVrDJHih83n3h4fzJDJa0d0XIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc%2BHZRowCdp3wuYeircAw9wWm%2Ftqj6n31Y1mOOhx%2FPXY%2FrmpP2mRtH9pbW6uuzxiK4JxAzQiVpQImtC7l1VY1bUYB3lWc4wPMC8LeBP%2BYj8m6Qjs5b2TI7F5j0i%2Bm24O64SXBmz80Xmmczb8uMvJmdmmbML9jrI9pEWJi%2BHUHr2iSXeCkw3oas1mLUb5Uv7vjOOYZK345oDpQ0xWfpe%2BEFyQly2UR91JmcoeZZQd83ov%2FID2c0di%2BVgReNn9vS%2FSPypd21rXe7Kv4usZdZfP7uCftwpbme1kPbU4njmGRMvqPBfv%2BuHCTpYl4sdM5J2BY275oC1b1wdnFZz6BFWXWWtelYYlxm9D%2B%2BWN1VbMVPmS2qCsdJmk4j%2F5zultQxhN9S6C4ZtKQLCelsnaC1EptOLloCr1WET8uFLCvUibYKlLN2T7JHvEfLXKngoFf6qT1IkIR7XIWHhJ%2BvjvhV3lXuic7Duej%2B478%2FEbAKoejTiu3ZDZTbWEeQzAUdOl%2F9a3Y22MltAwgIUOPLtCbCc4C8PQUg%2FP2tDNzImfOASYOCZTKK9mvDQGu5%2Bo5tLoCzdzofAtxzec8xfU4gnOWfQ8AH9xrw68xmBDh310jPacrJW98U6jLwEgfTplKYnX7y0RK4DV0vnwRLHy0I0MKroqcQGOqUBo4p%2BXTiHbOez%2B5SIsxx8GxoaOiRiiNcAE6lg4GIfSo15UHNNQsQnFV5AFDHV9Uu22IaejwFtaTpl4uHcvtiFLnjd93xR%2B8EZl7kraT6ZQR86A2594EGKTKVIZEwIMoNKyssYchiGUqUxj8Q5XX8lYtq3v6l3wPUYODDZUdptHG0GzKcZj0LOWkeEK9KpU3UrRbA83b%2FZeSfhVwRkeVS6OCRkfJdb&X-Amz-Signature=350c4c683ad05b07bf3192fd22a71bd5edeb964898d16f20c368b6c18fd7e123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFXOPWWX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B8qJjsBO8pPqF3ftwLszV6HlKyJbaQOrRXuRIKWvpzAiEAvja1UkVV0GFRYTIgTFVrDJHih83n3h4fzJDJa0d0XIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc%2BHZRowCdp3wuYeircAw9wWm%2Ftqj6n31Y1mOOhx%2FPXY%2FrmpP2mRtH9pbW6uuzxiK4JxAzQiVpQImtC7l1VY1bUYB3lWc4wPMC8LeBP%2BYj8m6Qjs5b2TI7F5j0i%2Bm24O64SXBmz80Xmmczb8uMvJmdmmbML9jrI9pEWJi%2BHUHr2iSXeCkw3oas1mLUb5Uv7vjOOYZK345oDpQ0xWfpe%2BEFyQly2UR91JmcoeZZQd83ov%2FID2c0di%2BVgReNn9vS%2FSPypd21rXe7Kv4usZdZfP7uCftwpbme1kPbU4njmGRMvqPBfv%2BuHCTpYl4sdM5J2BY275oC1b1wdnFZz6BFWXWWtelYYlxm9D%2B%2BWN1VbMVPmS2qCsdJmk4j%2F5zultQxhN9S6C4ZtKQLCelsnaC1EptOLloCr1WET8uFLCvUibYKlLN2T7JHvEfLXKngoFf6qT1IkIR7XIWHhJ%2BvjvhV3lXuic7Duej%2B478%2FEbAKoejTiu3ZDZTbWEeQzAUdOl%2F9a3Y22MltAwgIUOPLtCbCc4C8PQUg%2FP2tDNzImfOASYOCZTKK9mvDQGu5%2Bo5tLoCzdzofAtxzec8xfU4gnOWfQ8AH9xrw68xmBDh310jPacrJW98U6jLwEgfTplKYnX7y0RK4DV0vnwRLHy0I0MKroqcQGOqUBo4p%2BXTiHbOez%2B5SIsxx8GxoaOiRiiNcAE6lg4GIfSo15UHNNQsQnFV5AFDHV9Uu22IaejwFtaTpl4uHcvtiFLnjd93xR%2B8EZl7kraT6ZQR86A2594EGKTKVIZEwIMoNKyssYchiGUqUxj8Q5XX8lYtq3v6l3wPUYODDZUdptHG0GzKcZj0LOWkeEK9KpU3UrRbA83b%2FZeSfhVwRkeVS6OCRkfJdb&X-Amz-Signature=dac4f63c0a799c4478bc9f2fd89043e6812d72dc803abb97caee914c2471859f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFXOPWWX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B8qJjsBO8pPqF3ftwLszV6HlKyJbaQOrRXuRIKWvpzAiEAvja1UkVV0GFRYTIgTFVrDJHih83n3h4fzJDJa0d0XIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc%2BHZRowCdp3wuYeircAw9wWm%2Ftqj6n31Y1mOOhx%2FPXY%2FrmpP2mRtH9pbW6uuzxiK4JxAzQiVpQImtC7l1VY1bUYB3lWc4wPMC8LeBP%2BYj8m6Qjs5b2TI7F5j0i%2Bm24O64SXBmz80Xmmczb8uMvJmdmmbML9jrI9pEWJi%2BHUHr2iSXeCkw3oas1mLUb5Uv7vjOOYZK345oDpQ0xWfpe%2BEFyQly2UR91JmcoeZZQd83ov%2FID2c0di%2BVgReNn9vS%2FSPypd21rXe7Kv4usZdZfP7uCftwpbme1kPbU4njmGRMvqPBfv%2BuHCTpYl4sdM5J2BY275oC1b1wdnFZz6BFWXWWtelYYlxm9D%2B%2BWN1VbMVPmS2qCsdJmk4j%2F5zultQxhN9S6C4ZtKQLCelsnaC1EptOLloCr1WET8uFLCvUibYKlLN2T7JHvEfLXKngoFf6qT1IkIR7XIWHhJ%2BvjvhV3lXuic7Duej%2B478%2FEbAKoejTiu3ZDZTbWEeQzAUdOl%2F9a3Y22MltAwgIUOPLtCbCc4C8PQUg%2FP2tDNzImfOASYOCZTKK9mvDQGu5%2Bo5tLoCzdzofAtxzec8xfU4gnOWfQ8AH9xrw68xmBDh310jPacrJW98U6jLwEgfTplKYnX7y0RK4DV0vnwRLHy0I0MKroqcQGOqUBo4p%2BXTiHbOez%2B5SIsxx8GxoaOiRiiNcAE6lg4GIfSo15UHNNQsQnFV5AFDHV9Uu22IaejwFtaTpl4uHcvtiFLnjd93xR%2B8EZl7kraT6ZQR86A2594EGKTKVIZEwIMoNKyssYchiGUqUxj8Q5XX8lYtq3v6l3wPUYODDZUdptHG0GzKcZj0LOWkeEK9KpU3UrRbA83b%2FZeSfhVwRkeVS6OCRkfJdb&X-Amz-Signature=6fa59e40cfbba9b7de2dc51e4cb73161cecdaece34b6d5312c81a552951a0ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFXOPWWX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B8qJjsBO8pPqF3ftwLszV6HlKyJbaQOrRXuRIKWvpzAiEAvja1UkVV0GFRYTIgTFVrDJHih83n3h4fzJDJa0d0XIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc%2BHZRowCdp3wuYeircAw9wWm%2Ftqj6n31Y1mOOhx%2FPXY%2FrmpP2mRtH9pbW6uuzxiK4JxAzQiVpQImtC7l1VY1bUYB3lWc4wPMC8LeBP%2BYj8m6Qjs5b2TI7F5j0i%2Bm24O64SXBmz80Xmmczb8uMvJmdmmbML9jrI9pEWJi%2BHUHr2iSXeCkw3oas1mLUb5Uv7vjOOYZK345oDpQ0xWfpe%2BEFyQly2UR91JmcoeZZQd83ov%2FID2c0di%2BVgReNn9vS%2FSPypd21rXe7Kv4usZdZfP7uCftwpbme1kPbU4njmGRMvqPBfv%2BuHCTpYl4sdM5J2BY275oC1b1wdnFZz6BFWXWWtelYYlxm9D%2B%2BWN1VbMVPmS2qCsdJmk4j%2F5zultQxhN9S6C4ZtKQLCelsnaC1EptOLloCr1WET8uFLCvUibYKlLN2T7JHvEfLXKngoFf6qT1IkIR7XIWHhJ%2BvjvhV3lXuic7Duej%2B478%2FEbAKoejTiu3ZDZTbWEeQzAUdOl%2F9a3Y22MltAwgIUOPLtCbCc4C8PQUg%2FP2tDNzImfOASYOCZTKK9mvDQGu5%2Bo5tLoCzdzofAtxzec8xfU4gnOWfQ8AH9xrw68xmBDh310jPacrJW98U6jLwEgfTplKYnX7y0RK4DV0vnwRLHy0I0MKroqcQGOqUBo4p%2BXTiHbOez%2B5SIsxx8GxoaOiRiiNcAE6lg4GIfSo15UHNNQsQnFV5AFDHV9Uu22IaejwFtaTpl4uHcvtiFLnjd93xR%2B8EZl7kraT6ZQR86A2594EGKTKVIZEwIMoNKyssYchiGUqUxj8Q5XX8lYtq3v6l3wPUYODDZUdptHG0GzKcZj0LOWkeEK9KpU3UrRbA83b%2FZeSfhVwRkeVS6OCRkfJdb&X-Amz-Signature=735dd13680741c6ee7d2cbcb58d667f605fb18d077fdaf74fc879cc8db1ea98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
