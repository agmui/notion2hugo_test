---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEPA2AC%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICF0SDNRzLoJDxtc8hlJVbSuHWeTAQ3vXs84RuPvKET6AiBht03e2PCaoANSMAOteaTwnh5mkA8aCa15W1GTomDExCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv1v3wWkOF7l5xF75KtwD7Uyexc2oER6Pk%2FqZ%2BTLObFXuZQgX6buZ%2FypT%2FPPRfWavaYkdV5nuvMghM8FiHN%2BGQQB8oAtlT9GA3Sr%2BnrXfyaB5I9mEBksUILWUhVa%2FPdcEdnxVXUz462kupDCfQrMPxC6yGoKqexbHzoc3G1ht8p%2BHw0WhUKa0h%2B2eY0XJhgwc5qKdUx42bS0FUTx8oh%2BPlkpryQHnprEvWDItNS8C%2BxBcgHmJ15azHrc61T35AvQsg6F%2BnLc6lia5d2nFC6qKY1b1m1uOL2cEpgUoGAHUzobe9eO1P6Ky33QNHqDuBzJE3N%2BlHpf9Odz8%2BWraaY28g2wnvRCbiIMVmu4M%2FO%2Bz%2F%2Bb%2F5VCjNdYjJ2whY8NGRnW5QY5LoHHx8mobM9%2FnsSRxL46ssW6nElCZLJEvXhYiWREeQOg6WYLH7Q7F5RanoVw6wykBONVoHzUg6NR%2FOkIurgkdxnpcrk4Bp1pQ3jfiAuM9K9hhBgtLA7DpgEzeelwOsXmnaTZIKIuD43mA96nWU8GIWUZi51LwH7kMKWPX%2FDmmeehM9NqnB1%2FNIesuNeTrvpWCdkwO1dONozhy2IWuLhwQXTBsHNYvrJmRL77EeELmmyjOhJ3rwZPa3AciJ1HOhIJbRxQkhAme%2Bf8wxpb4yQY6pgGbvgI1d%2FyqJv%2Fo4%2BFJlifOmFNl8w1HfCpva6OzOyUrTb%2FCv1JhmLNt7pjE1YarxrjXI1ZPh2VKjOjTMNUaLKQFI0cF%2Fi55cHhI%2B97gEycmZ399zqLhgXl5h0AQyuBl9xLEdXIPswXaAcPIkF17SF3PyhPN4fbAxrqsO5gABLbjMSZH%2FijT6yLB24H2PntGyFoMZw%2BAerszc9Hj6vBZest5Uz6ZOM%2Bn&X-Amz-Signature=d14afc9ddfc87f6e9995cf4f5a5fa7f7f020ee81dc3baaaae39370af8f095b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEPA2AC%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICF0SDNRzLoJDxtc8hlJVbSuHWeTAQ3vXs84RuPvKET6AiBht03e2PCaoANSMAOteaTwnh5mkA8aCa15W1GTomDExCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv1v3wWkOF7l5xF75KtwD7Uyexc2oER6Pk%2FqZ%2BTLObFXuZQgX6buZ%2FypT%2FPPRfWavaYkdV5nuvMghM8FiHN%2BGQQB8oAtlT9GA3Sr%2BnrXfyaB5I9mEBksUILWUhVa%2FPdcEdnxVXUz462kupDCfQrMPxC6yGoKqexbHzoc3G1ht8p%2BHw0WhUKa0h%2B2eY0XJhgwc5qKdUx42bS0FUTx8oh%2BPlkpryQHnprEvWDItNS8C%2BxBcgHmJ15azHrc61T35AvQsg6F%2BnLc6lia5d2nFC6qKY1b1m1uOL2cEpgUoGAHUzobe9eO1P6Ky33QNHqDuBzJE3N%2BlHpf9Odz8%2BWraaY28g2wnvRCbiIMVmu4M%2FO%2Bz%2F%2Bb%2F5VCjNdYjJ2whY8NGRnW5QY5LoHHx8mobM9%2FnsSRxL46ssW6nElCZLJEvXhYiWREeQOg6WYLH7Q7F5RanoVw6wykBONVoHzUg6NR%2FOkIurgkdxnpcrk4Bp1pQ3jfiAuM9K9hhBgtLA7DpgEzeelwOsXmnaTZIKIuD43mA96nWU8GIWUZi51LwH7kMKWPX%2FDmmeehM9NqnB1%2FNIesuNeTrvpWCdkwO1dONozhy2IWuLhwQXTBsHNYvrJmRL77EeELmmyjOhJ3rwZPa3AciJ1HOhIJbRxQkhAme%2Bf8wxpb4yQY6pgGbvgI1d%2FyqJv%2Fo4%2BFJlifOmFNl8w1HfCpva6OzOyUrTb%2FCv1JhmLNt7pjE1YarxrjXI1ZPh2VKjOjTMNUaLKQFI0cF%2Fi55cHhI%2B97gEycmZ399zqLhgXl5h0AQyuBl9xLEdXIPswXaAcPIkF17SF3PyhPN4fbAxrqsO5gABLbjMSZH%2FijT6yLB24H2PntGyFoMZw%2BAerszc9Hj6vBZest5Uz6ZOM%2Bn&X-Amz-Signature=82580fd917e23c24f54cb08bd28e34aed08596a8735a26cc3fc46a818bb36400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEPA2AC%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICF0SDNRzLoJDxtc8hlJVbSuHWeTAQ3vXs84RuPvKET6AiBht03e2PCaoANSMAOteaTwnh5mkA8aCa15W1GTomDExCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv1v3wWkOF7l5xF75KtwD7Uyexc2oER6Pk%2FqZ%2BTLObFXuZQgX6buZ%2FypT%2FPPRfWavaYkdV5nuvMghM8FiHN%2BGQQB8oAtlT9GA3Sr%2BnrXfyaB5I9mEBksUILWUhVa%2FPdcEdnxVXUz462kupDCfQrMPxC6yGoKqexbHzoc3G1ht8p%2BHw0WhUKa0h%2B2eY0XJhgwc5qKdUx42bS0FUTx8oh%2BPlkpryQHnprEvWDItNS8C%2BxBcgHmJ15azHrc61T35AvQsg6F%2BnLc6lia5d2nFC6qKY1b1m1uOL2cEpgUoGAHUzobe9eO1P6Ky33QNHqDuBzJE3N%2BlHpf9Odz8%2BWraaY28g2wnvRCbiIMVmu4M%2FO%2Bz%2F%2Bb%2F5VCjNdYjJ2whY8NGRnW5QY5LoHHx8mobM9%2FnsSRxL46ssW6nElCZLJEvXhYiWREeQOg6WYLH7Q7F5RanoVw6wykBONVoHzUg6NR%2FOkIurgkdxnpcrk4Bp1pQ3jfiAuM9K9hhBgtLA7DpgEzeelwOsXmnaTZIKIuD43mA96nWU8GIWUZi51LwH7kMKWPX%2FDmmeehM9NqnB1%2FNIesuNeTrvpWCdkwO1dONozhy2IWuLhwQXTBsHNYvrJmRL77EeELmmyjOhJ3rwZPa3AciJ1HOhIJbRxQkhAme%2Bf8wxpb4yQY6pgGbvgI1d%2FyqJv%2Fo4%2BFJlifOmFNl8w1HfCpva6OzOyUrTb%2FCv1JhmLNt7pjE1YarxrjXI1ZPh2VKjOjTMNUaLKQFI0cF%2Fi55cHhI%2B97gEycmZ399zqLhgXl5h0AQyuBl9xLEdXIPswXaAcPIkF17SF3PyhPN4fbAxrqsO5gABLbjMSZH%2FijT6yLB24H2PntGyFoMZw%2BAerszc9Hj6vBZest5Uz6ZOM%2Bn&X-Amz-Signature=a02a6baf620c88136d8ec4458041adc5491e79c7b2b9f76499a9bf73144be84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEPA2AC%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICF0SDNRzLoJDxtc8hlJVbSuHWeTAQ3vXs84RuPvKET6AiBht03e2PCaoANSMAOteaTwnh5mkA8aCa15W1GTomDExCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv1v3wWkOF7l5xF75KtwD7Uyexc2oER6Pk%2FqZ%2BTLObFXuZQgX6buZ%2FypT%2FPPRfWavaYkdV5nuvMghM8FiHN%2BGQQB8oAtlT9GA3Sr%2BnrXfyaB5I9mEBksUILWUhVa%2FPdcEdnxVXUz462kupDCfQrMPxC6yGoKqexbHzoc3G1ht8p%2BHw0WhUKa0h%2B2eY0XJhgwc5qKdUx42bS0FUTx8oh%2BPlkpryQHnprEvWDItNS8C%2BxBcgHmJ15azHrc61T35AvQsg6F%2BnLc6lia5d2nFC6qKY1b1m1uOL2cEpgUoGAHUzobe9eO1P6Ky33QNHqDuBzJE3N%2BlHpf9Odz8%2BWraaY28g2wnvRCbiIMVmu4M%2FO%2Bz%2F%2Bb%2F5VCjNdYjJ2whY8NGRnW5QY5LoHHx8mobM9%2FnsSRxL46ssW6nElCZLJEvXhYiWREeQOg6WYLH7Q7F5RanoVw6wykBONVoHzUg6NR%2FOkIurgkdxnpcrk4Bp1pQ3jfiAuM9K9hhBgtLA7DpgEzeelwOsXmnaTZIKIuD43mA96nWU8GIWUZi51LwH7kMKWPX%2FDmmeehM9NqnB1%2FNIesuNeTrvpWCdkwO1dONozhy2IWuLhwQXTBsHNYvrJmRL77EeELmmyjOhJ3rwZPa3AciJ1HOhIJbRxQkhAme%2Bf8wxpb4yQY6pgGbvgI1d%2FyqJv%2Fo4%2BFJlifOmFNl8w1HfCpva6OzOyUrTb%2FCv1JhmLNt7pjE1YarxrjXI1ZPh2VKjOjTMNUaLKQFI0cF%2Fi55cHhI%2B97gEycmZ399zqLhgXl5h0AQyuBl9xLEdXIPswXaAcPIkF17SF3PyhPN4fbAxrqsO5gABLbjMSZH%2FijT6yLB24H2PntGyFoMZw%2BAerszc9Hj6vBZest5Uz6ZOM%2Bn&X-Amz-Signature=ea69362ce18ed7d9287cb7c3e6e4d7a9b0240ace822bef11823e77622feeeb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEPA2AC%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICF0SDNRzLoJDxtc8hlJVbSuHWeTAQ3vXs84RuPvKET6AiBht03e2PCaoANSMAOteaTwnh5mkA8aCa15W1GTomDExCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv1v3wWkOF7l5xF75KtwD7Uyexc2oER6Pk%2FqZ%2BTLObFXuZQgX6buZ%2FypT%2FPPRfWavaYkdV5nuvMghM8FiHN%2BGQQB8oAtlT9GA3Sr%2BnrXfyaB5I9mEBksUILWUhVa%2FPdcEdnxVXUz462kupDCfQrMPxC6yGoKqexbHzoc3G1ht8p%2BHw0WhUKa0h%2B2eY0XJhgwc5qKdUx42bS0FUTx8oh%2BPlkpryQHnprEvWDItNS8C%2BxBcgHmJ15azHrc61T35AvQsg6F%2BnLc6lia5d2nFC6qKY1b1m1uOL2cEpgUoGAHUzobe9eO1P6Ky33QNHqDuBzJE3N%2BlHpf9Odz8%2BWraaY28g2wnvRCbiIMVmu4M%2FO%2Bz%2F%2Bb%2F5VCjNdYjJ2whY8NGRnW5QY5LoHHx8mobM9%2FnsSRxL46ssW6nElCZLJEvXhYiWREeQOg6WYLH7Q7F5RanoVw6wykBONVoHzUg6NR%2FOkIurgkdxnpcrk4Bp1pQ3jfiAuM9K9hhBgtLA7DpgEzeelwOsXmnaTZIKIuD43mA96nWU8GIWUZi51LwH7kMKWPX%2FDmmeehM9NqnB1%2FNIesuNeTrvpWCdkwO1dONozhy2IWuLhwQXTBsHNYvrJmRL77EeELmmyjOhJ3rwZPa3AciJ1HOhIJbRxQkhAme%2Bf8wxpb4yQY6pgGbvgI1d%2FyqJv%2Fo4%2BFJlifOmFNl8w1HfCpva6OzOyUrTb%2FCv1JhmLNt7pjE1YarxrjXI1ZPh2VKjOjTMNUaLKQFI0cF%2Fi55cHhI%2B97gEycmZ399zqLhgXl5h0AQyuBl9xLEdXIPswXaAcPIkF17SF3PyhPN4fbAxrqsO5gABLbjMSZH%2FijT6yLB24H2PntGyFoMZw%2BAerszc9Hj6vBZest5Uz6ZOM%2Bn&X-Amz-Signature=c4032901a43060c0cf54c50685b3f94fe5cb0d0dd173b7e117f386df0a3f5b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEPA2AC%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICF0SDNRzLoJDxtc8hlJVbSuHWeTAQ3vXs84RuPvKET6AiBht03e2PCaoANSMAOteaTwnh5mkA8aCa15W1GTomDExCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv1v3wWkOF7l5xF75KtwD7Uyexc2oER6Pk%2FqZ%2BTLObFXuZQgX6buZ%2FypT%2FPPRfWavaYkdV5nuvMghM8FiHN%2BGQQB8oAtlT9GA3Sr%2BnrXfyaB5I9mEBksUILWUhVa%2FPdcEdnxVXUz462kupDCfQrMPxC6yGoKqexbHzoc3G1ht8p%2BHw0WhUKa0h%2B2eY0XJhgwc5qKdUx42bS0FUTx8oh%2BPlkpryQHnprEvWDItNS8C%2BxBcgHmJ15azHrc61T35AvQsg6F%2BnLc6lia5d2nFC6qKY1b1m1uOL2cEpgUoGAHUzobe9eO1P6Ky33QNHqDuBzJE3N%2BlHpf9Odz8%2BWraaY28g2wnvRCbiIMVmu4M%2FO%2Bz%2F%2Bb%2F5VCjNdYjJ2whY8NGRnW5QY5LoHHx8mobM9%2FnsSRxL46ssW6nElCZLJEvXhYiWREeQOg6WYLH7Q7F5RanoVw6wykBONVoHzUg6NR%2FOkIurgkdxnpcrk4Bp1pQ3jfiAuM9K9hhBgtLA7DpgEzeelwOsXmnaTZIKIuD43mA96nWU8GIWUZi51LwH7kMKWPX%2FDmmeehM9NqnB1%2FNIesuNeTrvpWCdkwO1dONozhy2IWuLhwQXTBsHNYvrJmRL77EeELmmyjOhJ3rwZPa3AciJ1HOhIJbRxQkhAme%2Bf8wxpb4yQY6pgGbvgI1d%2FyqJv%2Fo4%2BFJlifOmFNl8w1HfCpva6OzOyUrTb%2FCv1JhmLNt7pjE1YarxrjXI1ZPh2VKjOjTMNUaLKQFI0cF%2Fi55cHhI%2B97gEycmZ399zqLhgXl5h0AQyuBl9xLEdXIPswXaAcPIkF17SF3PyhPN4fbAxrqsO5gABLbjMSZH%2FijT6yLB24H2PntGyFoMZw%2BAerszc9Hj6vBZest5Uz6ZOM%2Bn&X-Amz-Signature=4c0b6dee41d12475008856cef7f62251e56da2f4311f157c97fb59614b8598ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEPA2AC%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICF0SDNRzLoJDxtc8hlJVbSuHWeTAQ3vXs84RuPvKET6AiBht03e2PCaoANSMAOteaTwnh5mkA8aCa15W1GTomDExCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv1v3wWkOF7l5xF75KtwD7Uyexc2oER6Pk%2FqZ%2BTLObFXuZQgX6buZ%2FypT%2FPPRfWavaYkdV5nuvMghM8FiHN%2BGQQB8oAtlT9GA3Sr%2BnrXfyaB5I9mEBksUILWUhVa%2FPdcEdnxVXUz462kupDCfQrMPxC6yGoKqexbHzoc3G1ht8p%2BHw0WhUKa0h%2B2eY0XJhgwc5qKdUx42bS0FUTx8oh%2BPlkpryQHnprEvWDItNS8C%2BxBcgHmJ15azHrc61T35AvQsg6F%2BnLc6lia5d2nFC6qKY1b1m1uOL2cEpgUoGAHUzobe9eO1P6Ky33QNHqDuBzJE3N%2BlHpf9Odz8%2BWraaY28g2wnvRCbiIMVmu4M%2FO%2Bz%2F%2Bb%2F5VCjNdYjJ2whY8NGRnW5QY5LoHHx8mobM9%2FnsSRxL46ssW6nElCZLJEvXhYiWREeQOg6WYLH7Q7F5RanoVw6wykBONVoHzUg6NR%2FOkIurgkdxnpcrk4Bp1pQ3jfiAuM9K9hhBgtLA7DpgEzeelwOsXmnaTZIKIuD43mA96nWU8GIWUZi51LwH7kMKWPX%2FDmmeehM9NqnB1%2FNIesuNeTrvpWCdkwO1dONozhy2IWuLhwQXTBsHNYvrJmRL77EeELmmyjOhJ3rwZPa3AciJ1HOhIJbRxQkhAme%2Bf8wxpb4yQY6pgGbvgI1d%2FyqJv%2Fo4%2BFJlifOmFNl8w1HfCpva6OzOyUrTb%2FCv1JhmLNt7pjE1YarxrjXI1ZPh2VKjOjTMNUaLKQFI0cF%2Fi55cHhI%2B97gEycmZ399zqLhgXl5h0AQyuBl9xLEdXIPswXaAcPIkF17SF3PyhPN4fbAxrqsO5gABLbjMSZH%2FijT6yLB24H2PntGyFoMZw%2BAerszc9Hj6vBZest5Uz6ZOM%2Bn&X-Amz-Signature=4a9ebcbefeedf537adf18817993e93688264e31063db72193beebf8695e1b731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
