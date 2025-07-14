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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2JPIYQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCID2qQ5Qh7d%2Fc3SFmXbeCcG2I2wEhIhxvKNmcPC5DaoLEAiBlOcIvRpsMwr4LNN5iKXr%2BZOKb5oUZYz2yqW1AD3b95Sr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMixLrBsb4qnx1nb6iKtwDwS31QP5QYefemZw%2BzwLECK1yygCaWBG7Llari98ossz8pzB5G730FuFK%2BPm%2FJnb%2FxJn0lL19uH6NFEB34O12a356PaXObcB4pL887EmF9XHTlG4NY%2BhoFpd%2FCyK8GVNmgvZlUPfvyzmBlqLH0GA8jGy67Fb96%2Baped8bTl%2BgVoiK2eBAxUJy5Ct%2BiBvv1VNy3kaxF398j5nRIgtTlzryQ3tQaJuO13P%2B1txJ5bA3cg0ndV1YQkEhNpad8DpQ9x4%2FYpIPLz0gJnaln273CA4ds1eLuDulAR4MomI1qtrmyju7ACni8dluRAKlQ589XFMO8WSTqEkrLUCXI%2B5rX4KCNdQq8TtJPjfKp7wLG0SChyQaYQx2qscss7q439MOMwR2VED9vn6fq1Zn%2BaagAtTuMHRWF6Wcyvw5IQgq9KAVRNJHW8BqeozjduFZucKRVkabjdG%2BMk3tZqWsJlI%2FX4zCgVIMr%2B%2FyrSkjpWpmpN%2BF%2Ftji7MEdxamBNPAC7D3mCMl7zswvDjYWErvxi3Ed01i9iipscdrbBJyKvWOwlhVUCth82piM8XgW8rPvWcKlUtiEMwboKQe91skDS0G1mWyXb8kYpGbmPwEkiwZQTfBSjUrDPFwvETCbD8cfjWAw0rLTwwY6pgFE77C4B9Q3%2BX%2Fn8667R5KXobmZTG2IJxVGg2KR1ehq76daUnnR6BSobkhfMqYofyL0SdPH9dS5i0sbKL1BrlhGjOljv61v7RQc%2F3%2F4I9xhoh5KhtfLkKX2oB98mlJQ1QyCOiOvONWDnAQTY5Khe0elaNqz5CLCzsrCkB3HsdnHvJa7iz1W1ws4%2BOcOlHJ%2F8G49xDBh3U6YCOU826RUsu6Y%2BH1czj65&X-Amz-Signature=5b8a46e4c3869f8d06225978deede144d54065f4d406e7933903e2951a79e8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2JPIYQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCID2qQ5Qh7d%2Fc3SFmXbeCcG2I2wEhIhxvKNmcPC5DaoLEAiBlOcIvRpsMwr4LNN5iKXr%2BZOKb5oUZYz2yqW1AD3b95Sr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMixLrBsb4qnx1nb6iKtwDwS31QP5QYefemZw%2BzwLECK1yygCaWBG7Llari98ossz8pzB5G730FuFK%2BPm%2FJnb%2FxJn0lL19uH6NFEB34O12a356PaXObcB4pL887EmF9XHTlG4NY%2BhoFpd%2FCyK8GVNmgvZlUPfvyzmBlqLH0GA8jGy67Fb96%2Baped8bTl%2BgVoiK2eBAxUJy5Ct%2BiBvv1VNy3kaxF398j5nRIgtTlzryQ3tQaJuO13P%2B1txJ5bA3cg0ndV1YQkEhNpad8DpQ9x4%2FYpIPLz0gJnaln273CA4ds1eLuDulAR4MomI1qtrmyju7ACni8dluRAKlQ589XFMO8WSTqEkrLUCXI%2B5rX4KCNdQq8TtJPjfKp7wLG0SChyQaYQx2qscss7q439MOMwR2VED9vn6fq1Zn%2BaagAtTuMHRWF6Wcyvw5IQgq9KAVRNJHW8BqeozjduFZucKRVkabjdG%2BMk3tZqWsJlI%2FX4zCgVIMr%2B%2FyrSkjpWpmpN%2BF%2Ftji7MEdxamBNPAC7D3mCMl7zswvDjYWErvxi3Ed01i9iipscdrbBJyKvWOwlhVUCth82piM8XgW8rPvWcKlUtiEMwboKQe91skDS0G1mWyXb8kYpGbmPwEkiwZQTfBSjUrDPFwvETCbD8cfjWAw0rLTwwY6pgFE77C4B9Q3%2BX%2Fn8667R5KXobmZTG2IJxVGg2KR1ehq76daUnnR6BSobkhfMqYofyL0SdPH9dS5i0sbKL1BrlhGjOljv61v7RQc%2F3%2F4I9xhoh5KhtfLkKX2oB98mlJQ1QyCOiOvONWDnAQTY5Khe0elaNqz5CLCzsrCkB3HsdnHvJa7iz1W1ws4%2BOcOlHJ%2F8G49xDBh3U6YCOU826RUsu6Y%2BH1czj65&X-Amz-Signature=eada84667e812495df39a770c53eedf1d2197ee322fc276d665a3cda4f372f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2JPIYQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCID2qQ5Qh7d%2Fc3SFmXbeCcG2I2wEhIhxvKNmcPC5DaoLEAiBlOcIvRpsMwr4LNN5iKXr%2BZOKb5oUZYz2yqW1AD3b95Sr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMixLrBsb4qnx1nb6iKtwDwS31QP5QYefemZw%2BzwLECK1yygCaWBG7Llari98ossz8pzB5G730FuFK%2BPm%2FJnb%2FxJn0lL19uH6NFEB34O12a356PaXObcB4pL887EmF9XHTlG4NY%2BhoFpd%2FCyK8GVNmgvZlUPfvyzmBlqLH0GA8jGy67Fb96%2Baped8bTl%2BgVoiK2eBAxUJy5Ct%2BiBvv1VNy3kaxF398j5nRIgtTlzryQ3tQaJuO13P%2B1txJ5bA3cg0ndV1YQkEhNpad8DpQ9x4%2FYpIPLz0gJnaln273CA4ds1eLuDulAR4MomI1qtrmyju7ACni8dluRAKlQ589XFMO8WSTqEkrLUCXI%2B5rX4KCNdQq8TtJPjfKp7wLG0SChyQaYQx2qscss7q439MOMwR2VED9vn6fq1Zn%2BaagAtTuMHRWF6Wcyvw5IQgq9KAVRNJHW8BqeozjduFZucKRVkabjdG%2BMk3tZqWsJlI%2FX4zCgVIMr%2B%2FyrSkjpWpmpN%2BF%2Ftji7MEdxamBNPAC7D3mCMl7zswvDjYWErvxi3Ed01i9iipscdrbBJyKvWOwlhVUCth82piM8XgW8rPvWcKlUtiEMwboKQe91skDS0G1mWyXb8kYpGbmPwEkiwZQTfBSjUrDPFwvETCbD8cfjWAw0rLTwwY6pgFE77C4B9Q3%2BX%2Fn8667R5KXobmZTG2IJxVGg2KR1ehq76daUnnR6BSobkhfMqYofyL0SdPH9dS5i0sbKL1BrlhGjOljv61v7RQc%2F3%2F4I9xhoh5KhtfLkKX2oB98mlJQ1QyCOiOvONWDnAQTY5Khe0elaNqz5CLCzsrCkB3HsdnHvJa7iz1W1ws4%2BOcOlHJ%2F8G49xDBh3U6YCOU826RUsu6Y%2BH1czj65&X-Amz-Signature=96dab050e3fefd9ca0aaa1fcd2ff55a5004e9e48bd968270751c675024b87d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2JPIYQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCID2qQ5Qh7d%2Fc3SFmXbeCcG2I2wEhIhxvKNmcPC5DaoLEAiBlOcIvRpsMwr4LNN5iKXr%2BZOKb5oUZYz2yqW1AD3b95Sr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMixLrBsb4qnx1nb6iKtwDwS31QP5QYefemZw%2BzwLECK1yygCaWBG7Llari98ossz8pzB5G730FuFK%2BPm%2FJnb%2FxJn0lL19uH6NFEB34O12a356PaXObcB4pL887EmF9XHTlG4NY%2BhoFpd%2FCyK8GVNmgvZlUPfvyzmBlqLH0GA8jGy67Fb96%2Baped8bTl%2BgVoiK2eBAxUJy5Ct%2BiBvv1VNy3kaxF398j5nRIgtTlzryQ3tQaJuO13P%2B1txJ5bA3cg0ndV1YQkEhNpad8DpQ9x4%2FYpIPLz0gJnaln273CA4ds1eLuDulAR4MomI1qtrmyju7ACni8dluRAKlQ589XFMO8WSTqEkrLUCXI%2B5rX4KCNdQq8TtJPjfKp7wLG0SChyQaYQx2qscss7q439MOMwR2VED9vn6fq1Zn%2BaagAtTuMHRWF6Wcyvw5IQgq9KAVRNJHW8BqeozjduFZucKRVkabjdG%2BMk3tZqWsJlI%2FX4zCgVIMr%2B%2FyrSkjpWpmpN%2BF%2Ftji7MEdxamBNPAC7D3mCMl7zswvDjYWErvxi3Ed01i9iipscdrbBJyKvWOwlhVUCth82piM8XgW8rPvWcKlUtiEMwboKQe91skDS0G1mWyXb8kYpGbmPwEkiwZQTfBSjUrDPFwvETCbD8cfjWAw0rLTwwY6pgFE77C4B9Q3%2BX%2Fn8667R5KXobmZTG2IJxVGg2KR1ehq76daUnnR6BSobkhfMqYofyL0SdPH9dS5i0sbKL1BrlhGjOljv61v7RQc%2F3%2F4I9xhoh5KhtfLkKX2oB98mlJQ1QyCOiOvONWDnAQTY5Khe0elaNqz5CLCzsrCkB3HsdnHvJa7iz1W1ws4%2BOcOlHJ%2F8G49xDBh3U6YCOU826RUsu6Y%2BH1czj65&X-Amz-Signature=c8a7e0f901cfeacd07121b67ee5bcd2f0f9b26c298df3344d1ae076a4b6b2b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2JPIYQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCID2qQ5Qh7d%2Fc3SFmXbeCcG2I2wEhIhxvKNmcPC5DaoLEAiBlOcIvRpsMwr4LNN5iKXr%2BZOKb5oUZYz2yqW1AD3b95Sr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMixLrBsb4qnx1nb6iKtwDwS31QP5QYefemZw%2BzwLECK1yygCaWBG7Llari98ossz8pzB5G730FuFK%2BPm%2FJnb%2FxJn0lL19uH6NFEB34O12a356PaXObcB4pL887EmF9XHTlG4NY%2BhoFpd%2FCyK8GVNmgvZlUPfvyzmBlqLH0GA8jGy67Fb96%2Baped8bTl%2BgVoiK2eBAxUJy5Ct%2BiBvv1VNy3kaxF398j5nRIgtTlzryQ3tQaJuO13P%2B1txJ5bA3cg0ndV1YQkEhNpad8DpQ9x4%2FYpIPLz0gJnaln273CA4ds1eLuDulAR4MomI1qtrmyju7ACni8dluRAKlQ589XFMO8WSTqEkrLUCXI%2B5rX4KCNdQq8TtJPjfKp7wLG0SChyQaYQx2qscss7q439MOMwR2VED9vn6fq1Zn%2BaagAtTuMHRWF6Wcyvw5IQgq9KAVRNJHW8BqeozjduFZucKRVkabjdG%2BMk3tZqWsJlI%2FX4zCgVIMr%2B%2FyrSkjpWpmpN%2BF%2Ftji7MEdxamBNPAC7D3mCMl7zswvDjYWErvxi3Ed01i9iipscdrbBJyKvWOwlhVUCth82piM8XgW8rPvWcKlUtiEMwboKQe91skDS0G1mWyXb8kYpGbmPwEkiwZQTfBSjUrDPFwvETCbD8cfjWAw0rLTwwY6pgFE77C4B9Q3%2BX%2Fn8667R5KXobmZTG2IJxVGg2KR1ehq76daUnnR6BSobkhfMqYofyL0SdPH9dS5i0sbKL1BrlhGjOljv61v7RQc%2F3%2F4I9xhoh5KhtfLkKX2oB98mlJQ1QyCOiOvONWDnAQTY5Khe0elaNqz5CLCzsrCkB3HsdnHvJa7iz1W1ws4%2BOcOlHJ%2F8G49xDBh3U6YCOU826RUsu6Y%2BH1czj65&X-Amz-Signature=bb87458abfb55000965056c6a60cafd9aaf9b3b0162819d48e71d721a3000f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2JPIYQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCID2qQ5Qh7d%2Fc3SFmXbeCcG2I2wEhIhxvKNmcPC5DaoLEAiBlOcIvRpsMwr4LNN5iKXr%2BZOKb5oUZYz2yqW1AD3b95Sr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMixLrBsb4qnx1nb6iKtwDwS31QP5QYefemZw%2BzwLECK1yygCaWBG7Llari98ossz8pzB5G730FuFK%2BPm%2FJnb%2FxJn0lL19uH6NFEB34O12a356PaXObcB4pL887EmF9XHTlG4NY%2BhoFpd%2FCyK8GVNmgvZlUPfvyzmBlqLH0GA8jGy67Fb96%2Baped8bTl%2BgVoiK2eBAxUJy5Ct%2BiBvv1VNy3kaxF398j5nRIgtTlzryQ3tQaJuO13P%2B1txJ5bA3cg0ndV1YQkEhNpad8DpQ9x4%2FYpIPLz0gJnaln273CA4ds1eLuDulAR4MomI1qtrmyju7ACni8dluRAKlQ589XFMO8WSTqEkrLUCXI%2B5rX4KCNdQq8TtJPjfKp7wLG0SChyQaYQx2qscss7q439MOMwR2VED9vn6fq1Zn%2BaagAtTuMHRWF6Wcyvw5IQgq9KAVRNJHW8BqeozjduFZucKRVkabjdG%2BMk3tZqWsJlI%2FX4zCgVIMr%2B%2FyrSkjpWpmpN%2BF%2Ftji7MEdxamBNPAC7D3mCMl7zswvDjYWErvxi3Ed01i9iipscdrbBJyKvWOwlhVUCth82piM8XgW8rPvWcKlUtiEMwboKQe91skDS0G1mWyXb8kYpGbmPwEkiwZQTfBSjUrDPFwvETCbD8cfjWAw0rLTwwY6pgFE77C4B9Q3%2BX%2Fn8667R5KXobmZTG2IJxVGg2KR1ehq76daUnnR6BSobkhfMqYofyL0SdPH9dS5i0sbKL1BrlhGjOljv61v7RQc%2F3%2F4I9xhoh5KhtfLkKX2oB98mlJQ1QyCOiOvONWDnAQTY5Khe0elaNqz5CLCzsrCkB3HsdnHvJa7iz1W1ws4%2BOcOlHJ%2F8G49xDBh3U6YCOU826RUsu6Y%2BH1czj65&X-Amz-Signature=b19168e6668f34fbf96fae9fb9ee264f5e9ff1b9dfe4ef5b6d6857e6ba2cd2b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2JPIYQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCID2qQ5Qh7d%2Fc3SFmXbeCcG2I2wEhIhxvKNmcPC5DaoLEAiBlOcIvRpsMwr4LNN5iKXr%2BZOKb5oUZYz2yqW1AD3b95Sr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMixLrBsb4qnx1nb6iKtwDwS31QP5QYefemZw%2BzwLECK1yygCaWBG7Llari98ossz8pzB5G730FuFK%2BPm%2FJnb%2FxJn0lL19uH6NFEB34O12a356PaXObcB4pL887EmF9XHTlG4NY%2BhoFpd%2FCyK8GVNmgvZlUPfvyzmBlqLH0GA8jGy67Fb96%2Baped8bTl%2BgVoiK2eBAxUJy5Ct%2BiBvv1VNy3kaxF398j5nRIgtTlzryQ3tQaJuO13P%2B1txJ5bA3cg0ndV1YQkEhNpad8DpQ9x4%2FYpIPLz0gJnaln273CA4ds1eLuDulAR4MomI1qtrmyju7ACni8dluRAKlQ589XFMO8WSTqEkrLUCXI%2B5rX4KCNdQq8TtJPjfKp7wLG0SChyQaYQx2qscss7q439MOMwR2VED9vn6fq1Zn%2BaagAtTuMHRWF6Wcyvw5IQgq9KAVRNJHW8BqeozjduFZucKRVkabjdG%2BMk3tZqWsJlI%2FX4zCgVIMr%2B%2FyrSkjpWpmpN%2BF%2Ftji7MEdxamBNPAC7D3mCMl7zswvDjYWErvxi3Ed01i9iipscdrbBJyKvWOwlhVUCth82piM8XgW8rPvWcKlUtiEMwboKQe91skDS0G1mWyXb8kYpGbmPwEkiwZQTfBSjUrDPFwvETCbD8cfjWAw0rLTwwY6pgFE77C4B9Q3%2BX%2Fn8667R5KXobmZTG2IJxVGg2KR1ehq76daUnnR6BSobkhfMqYofyL0SdPH9dS5i0sbKL1BrlhGjOljv61v7RQc%2F3%2F4I9xhoh5KhtfLkKX2oB98mlJQ1QyCOiOvONWDnAQTY5Khe0elaNqz5CLCzsrCkB3HsdnHvJa7iz1W1ws4%2BOcOlHJ%2F8G49xDBh3U6YCOU826RUsu6Y%2BH1czj65&X-Amz-Signature=6e31a052c21ec5c087773e678bc0c0c576187d37561faf7e1485710c09fa30fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
