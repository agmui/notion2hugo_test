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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCR62CD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFXD2WoIeST5HnCmViakl29Ft4JJ5Cje1nYKGldoBXWqAiEAuLiHHs0iHPBsOoOkTe9oXQIfJAOkMeO83fsW5pkSFuYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErLEI6%2BgQgKcEWgvCrcAyB8P4YF2sgPHdyueRVnJbbOuwTTBpKd%2F7J26xyIoa45Ob4eGZbIobmuse3rmTOUUo8ZaCbXlqUwE%2F19iU6B9C0afhvPABH%2BhuG4XmJrBO%2B1O48Q4McOkjxqGaYDj50k4mfSebort%2Fb59Su%2BOyQBhzgoOI7trWyvE6SQgoDQREGESEEce%2BQhc44UkWQ%2F0Q7pfx2bPgDfbiOlurdptKm2948rvy14HBA%2BxAgEy5sYvEXR93YTBZeHJ%2B803qZPIlToRNyt4GbaxMaQuQeEDJTgq%2Fzi39PG3m%2FNc19KvPMGIOhXiExhG3SxC5wIyYaR2AHTlC61yaL7AcyUPIVrT7Mxmgh6LW%2Bl8HDqnFrKk5Hn9ALXW86KYqaSjGGpb9bL45rXloJU59ECr0fcS28zDUfbkgaIC3v8iCxxC8Qqy7q91JEO57lHLQ93OYtPSZsP0omjHU4rGsBhVIPERNQ%2Fl%2FJsl7CagdAH5JSGy5nR9ZaPzM8WfUO13%2FZYI%2F1kuwO8isSHkM8I8nGzuJGBVakTskvF3ABi%2BNOmuuv9VBdRgJFf%2BSww3IT8lIT4VY7cCmuUqC2Fa5smnnaAfEIkUdSIzQrvubgmZtD6O61tO6%2Bj2W3qiLydMNlTy%2ByiMj2gn8%2FYMMz958MGOqUB%2FxomOBCYN0Bc%2FLKcnnOTmuwC03H7DHWTil3EOHZ5l8CSR9WVT49ngCcsXBaPFBkGYN5q0U4vypNaGVingaMcJ5xOOvhtAbh9LX5N9M0%2FLS01hvEoGTCQrCefyaitZv%2B8xZYJYFg92HFE1bK9zbC0Gv2HinUPhzJAZd1sovUhXPJ5RC1tNmcbKXxWuOu08m2wRKy4H4kNQI9qC0rVsFNJIs8hLXo%2B&X-Amz-Signature=e03e63b2f8b332d36d83f1a8c5e70e636738caa9651162926d785ecdc31e9b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCR62CD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFXD2WoIeST5HnCmViakl29Ft4JJ5Cje1nYKGldoBXWqAiEAuLiHHs0iHPBsOoOkTe9oXQIfJAOkMeO83fsW5pkSFuYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErLEI6%2BgQgKcEWgvCrcAyB8P4YF2sgPHdyueRVnJbbOuwTTBpKd%2F7J26xyIoa45Ob4eGZbIobmuse3rmTOUUo8ZaCbXlqUwE%2F19iU6B9C0afhvPABH%2BhuG4XmJrBO%2B1O48Q4McOkjxqGaYDj50k4mfSebort%2Fb59Su%2BOyQBhzgoOI7trWyvE6SQgoDQREGESEEce%2BQhc44UkWQ%2F0Q7pfx2bPgDfbiOlurdptKm2948rvy14HBA%2BxAgEy5sYvEXR93YTBZeHJ%2B803qZPIlToRNyt4GbaxMaQuQeEDJTgq%2Fzi39PG3m%2FNc19KvPMGIOhXiExhG3SxC5wIyYaR2AHTlC61yaL7AcyUPIVrT7Mxmgh6LW%2Bl8HDqnFrKk5Hn9ALXW86KYqaSjGGpb9bL45rXloJU59ECr0fcS28zDUfbkgaIC3v8iCxxC8Qqy7q91JEO57lHLQ93OYtPSZsP0omjHU4rGsBhVIPERNQ%2Fl%2FJsl7CagdAH5JSGy5nR9ZaPzM8WfUO13%2FZYI%2F1kuwO8isSHkM8I8nGzuJGBVakTskvF3ABi%2BNOmuuv9VBdRgJFf%2BSww3IT8lIT4VY7cCmuUqC2Fa5smnnaAfEIkUdSIzQrvubgmZtD6O61tO6%2Bj2W3qiLydMNlTy%2ByiMj2gn8%2FYMMz958MGOqUB%2FxomOBCYN0Bc%2FLKcnnOTmuwC03H7DHWTil3EOHZ5l8CSR9WVT49ngCcsXBaPFBkGYN5q0U4vypNaGVingaMcJ5xOOvhtAbh9LX5N9M0%2FLS01hvEoGTCQrCefyaitZv%2B8xZYJYFg92HFE1bK9zbC0Gv2HinUPhzJAZd1sovUhXPJ5RC1tNmcbKXxWuOu08m2wRKy4H4kNQI9qC0rVsFNJIs8hLXo%2B&X-Amz-Signature=a521ede46aaa0c22f7580601d07a3efa9b2d2791bd0db430d3353939bf16c687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCR62CD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFXD2WoIeST5HnCmViakl29Ft4JJ5Cje1nYKGldoBXWqAiEAuLiHHs0iHPBsOoOkTe9oXQIfJAOkMeO83fsW5pkSFuYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErLEI6%2BgQgKcEWgvCrcAyB8P4YF2sgPHdyueRVnJbbOuwTTBpKd%2F7J26xyIoa45Ob4eGZbIobmuse3rmTOUUo8ZaCbXlqUwE%2F19iU6B9C0afhvPABH%2BhuG4XmJrBO%2B1O48Q4McOkjxqGaYDj50k4mfSebort%2Fb59Su%2BOyQBhzgoOI7trWyvE6SQgoDQREGESEEce%2BQhc44UkWQ%2F0Q7pfx2bPgDfbiOlurdptKm2948rvy14HBA%2BxAgEy5sYvEXR93YTBZeHJ%2B803qZPIlToRNyt4GbaxMaQuQeEDJTgq%2Fzi39PG3m%2FNc19KvPMGIOhXiExhG3SxC5wIyYaR2AHTlC61yaL7AcyUPIVrT7Mxmgh6LW%2Bl8HDqnFrKk5Hn9ALXW86KYqaSjGGpb9bL45rXloJU59ECr0fcS28zDUfbkgaIC3v8iCxxC8Qqy7q91JEO57lHLQ93OYtPSZsP0omjHU4rGsBhVIPERNQ%2Fl%2FJsl7CagdAH5JSGy5nR9ZaPzM8WfUO13%2FZYI%2F1kuwO8isSHkM8I8nGzuJGBVakTskvF3ABi%2BNOmuuv9VBdRgJFf%2BSww3IT8lIT4VY7cCmuUqC2Fa5smnnaAfEIkUdSIzQrvubgmZtD6O61tO6%2Bj2W3qiLydMNlTy%2ByiMj2gn8%2FYMMz958MGOqUB%2FxomOBCYN0Bc%2FLKcnnOTmuwC03H7DHWTil3EOHZ5l8CSR9WVT49ngCcsXBaPFBkGYN5q0U4vypNaGVingaMcJ5xOOvhtAbh9LX5N9M0%2FLS01hvEoGTCQrCefyaitZv%2B8xZYJYFg92HFE1bK9zbC0Gv2HinUPhzJAZd1sovUhXPJ5RC1tNmcbKXxWuOu08m2wRKy4H4kNQI9qC0rVsFNJIs8hLXo%2B&X-Amz-Signature=875d7193e88b8a406555433e9a443a1927a4539a62c6002c7f0b4e54b2eacf6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCR62CD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFXD2WoIeST5HnCmViakl29Ft4JJ5Cje1nYKGldoBXWqAiEAuLiHHs0iHPBsOoOkTe9oXQIfJAOkMeO83fsW5pkSFuYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErLEI6%2BgQgKcEWgvCrcAyB8P4YF2sgPHdyueRVnJbbOuwTTBpKd%2F7J26xyIoa45Ob4eGZbIobmuse3rmTOUUo8ZaCbXlqUwE%2F19iU6B9C0afhvPABH%2BhuG4XmJrBO%2B1O48Q4McOkjxqGaYDj50k4mfSebort%2Fb59Su%2BOyQBhzgoOI7trWyvE6SQgoDQREGESEEce%2BQhc44UkWQ%2F0Q7pfx2bPgDfbiOlurdptKm2948rvy14HBA%2BxAgEy5sYvEXR93YTBZeHJ%2B803qZPIlToRNyt4GbaxMaQuQeEDJTgq%2Fzi39PG3m%2FNc19KvPMGIOhXiExhG3SxC5wIyYaR2AHTlC61yaL7AcyUPIVrT7Mxmgh6LW%2Bl8HDqnFrKk5Hn9ALXW86KYqaSjGGpb9bL45rXloJU59ECr0fcS28zDUfbkgaIC3v8iCxxC8Qqy7q91JEO57lHLQ93OYtPSZsP0omjHU4rGsBhVIPERNQ%2Fl%2FJsl7CagdAH5JSGy5nR9ZaPzM8WfUO13%2FZYI%2F1kuwO8isSHkM8I8nGzuJGBVakTskvF3ABi%2BNOmuuv9VBdRgJFf%2BSww3IT8lIT4VY7cCmuUqC2Fa5smnnaAfEIkUdSIzQrvubgmZtD6O61tO6%2Bj2W3qiLydMNlTy%2ByiMj2gn8%2FYMMz958MGOqUB%2FxomOBCYN0Bc%2FLKcnnOTmuwC03H7DHWTil3EOHZ5l8CSR9WVT49ngCcsXBaPFBkGYN5q0U4vypNaGVingaMcJ5xOOvhtAbh9LX5N9M0%2FLS01hvEoGTCQrCefyaitZv%2B8xZYJYFg92HFE1bK9zbC0Gv2HinUPhzJAZd1sovUhXPJ5RC1tNmcbKXxWuOu08m2wRKy4H4kNQI9qC0rVsFNJIs8hLXo%2B&X-Amz-Signature=2a427e9b2698dae4cad3ff4a81ce8cdfd566c49479cff6a16821e6fa9835c236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCR62CD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFXD2WoIeST5HnCmViakl29Ft4JJ5Cje1nYKGldoBXWqAiEAuLiHHs0iHPBsOoOkTe9oXQIfJAOkMeO83fsW5pkSFuYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErLEI6%2BgQgKcEWgvCrcAyB8P4YF2sgPHdyueRVnJbbOuwTTBpKd%2F7J26xyIoa45Ob4eGZbIobmuse3rmTOUUo8ZaCbXlqUwE%2F19iU6B9C0afhvPABH%2BhuG4XmJrBO%2B1O48Q4McOkjxqGaYDj50k4mfSebort%2Fb59Su%2BOyQBhzgoOI7trWyvE6SQgoDQREGESEEce%2BQhc44UkWQ%2F0Q7pfx2bPgDfbiOlurdptKm2948rvy14HBA%2BxAgEy5sYvEXR93YTBZeHJ%2B803qZPIlToRNyt4GbaxMaQuQeEDJTgq%2Fzi39PG3m%2FNc19KvPMGIOhXiExhG3SxC5wIyYaR2AHTlC61yaL7AcyUPIVrT7Mxmgh6LW%2Bl8HDqnFrKk5Hn9ALXW86KYqaSjGGpb9bL45rXloJU59ECr0fcS28zDUfbkgaIC3v8iCxxC8Qqy7q91JEO57lHLQ93OYtPSZsP0omjHU4rGsBhVIPERNQ%2Fl%2FJsl7CagdAH5JSGy5nR9ZaPzM8WfUO13%2FZYI%2F1kuwO8isSHkM8I8nGzuJGBVakTskvF3ABi%2BNOmuuv9VBdRgJFf%2BSww3IT8lIT4VY7cCmuUqC2Fa5smnnaAfEIkUdSIzQrvubgmZtD6O61tO6%2Bj2W3qiLydMNlTy%2ByiMj2gn8%2FYMMz958MGOqUB%2FxomOBCYN0Bc%2FLKcnnOTmuwC03H7DHWTil3EOHZ5l8CSR9WVT49ngCcsXBaPFBkGYN5q0U4vypNaGVingaMcJ5xOOvhtAbh9LX5N9M0%2FLS01hvEoGTCQrCefyaitZv%2B8xZYJYFg92HFE1bK9zbC0Gv2HinUPhzJAZd1sovUhXPJ5RC1tNmcbKXxWuOu08m2wRKy4H4kNQI9qC0rVsFNJIs8hLXo%2B&X-Amz-Signature=b73325414a949cb601851d656638d54915915341840d06725b6dab03e33110a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCR62CD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFXD2WoIeST5HnCmViakl29Ft4JJ5Cje1nYKGldoBXWqAiEAuLiHHs0iHPBsOoOkTe9oXQIfJAOkMeO83fsW5pkSFuYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErLEI6%2BgQgKcEWgvCrcAyB8P4YF2sgPHdyueRVnJbbOuwTTBpKd%2F7J26xyIoa45Ob4eGZbIobmuse3rmTOUUo8ZaCbXlqUwE%2F19iU6B9C0afhvPABH%2BhuG4XmJrBO%2B1O48Q4McOkjxqGaYDj50k4mfSebort%2Fb59Su%2BOyQBhzgoOI7trWyvE6SQgoDQREGESEEce%2BQhc44UkWQ%2F0Q7pfx2bPgDfbiOlurdptKm2948rvy14HBA%2BxAgEy5sYvEXR93YTBZeHJ%2B803qZPIlToRNyt4GbaxMaQuQeEDJTgq%2Fzi39PG3m%2FNc19KvPMGIOhXiExhG3SxC5wIyYaR2AHTlC61yaL7AcyUPIVrT7Mxmgh6LW%2Bl8HDqnFrKk5Hn9ALXW86KYqaSjGGpb9bL45rXloJU59ECr0fcS28zDUfbkgaIC3v8iCxxC8Qqy7q91JEO57lHLQ93OYtPSZsP0omjHU4rGsBhVIPERNQ%2Fl%2FJsl7CagdAH5JSGy5nR9ZaPzM8WfUO13%2FZYI%2F1kuwO8isSHkM8I8nGzuJGBVakTskvF3ABi%2BNOmuuv9VBdRgJFf%2BSww3IT8lIT4VY7cCmuUqC2Fa5smnnaAfEIkUdSIzQrvubgmZtD6O61tO6%2Bj2W3qiLydMNlTy%2ByiMj2gn8%2FYMMz958MGOqUB%2FxomOBCYN0Bc%2FLKcnnOTmuwC03H7DHWTil3EOHZ5l8CSR9WVT49ngCcsXBaPFBkGYN5q0U4vypNaGVingaMcJ5xOOvhtAbh9LX5N9M0%2FLS01hvEoGTCQrCefyaitZv%2B8xZYJYFg92HFE1bK9zbC0Gv2HinUPhzJAZd1sovUhXPJ5RC1tNmcbKXxWuOu08m2wRKy4H4kNQI9qC0rVsFNJIs8hLXo%2B&X-Amz-Signature=6dd507108c48a5ab3a448d2656d969fe56a9d04db56540be0137a32e9a66f4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCR62CD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFXD2WoIeST5HnCmViakl29Ft4JJ5Cje1nYKGldoBXWqAiEAuLiHHs0iHPBsOoOkTe9oXQIfJAOkMeO83fsW5pkSFuYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErLEI6%2BgQgKcEWgvCrcAyB8P4YF2sgPHdyueRVnJbbOuwTTBpKd%2F7J26xyIoa45Ob4eGZbIobmuse3rmTOUUo8ZaCbXlqUwE%2F19iU6B9C0afhvPABH%2BhuG4XmJrBO%2B1O48Q4McOkjxqGaYDj50k4mfSebort%2Fb59Su%2BOyQBhzgoOI7trWyvE6SQgoDQREGESEEce%2BQhc44UkWQ%2F0Q7pfx2bPgDfbiOlurdptKm2948rvy14HBA%2BxAgEy5sYvEXR93YTBZeHJ%2B803qZPIlToRNyt4GbaxMaQuQeEDJTgq%2Fzi39PG3m%2FNc19KvPMGIOhXiExhG3SxC5wIyYaR2AHTlC61yaL7AcyUPIVrT7Mxmgh6LW%2Bl8HDqnFrKk5Hn9ALXW86KYqaSjGGpb9bL45rXloJU59ECr0fcS28zDUfbkgaIC3v8iCxxC8Qqy7q91JEO57lHLQ93OYtPSZsP0omjHU4rGsBhVIPERNQ%2Fl%2FJsl7CagdAH5JSGy5nR9ZaPzM8WfUO13%2FZYI%2F1kuwO8isSHkM8I8nGzuJGBVakTskvF3ABi%2BNOmuuv9VBdRgJFf%2BSww3IT8lIT4VY7cCmuUqC2Fa5smnnaAfEIkUdSIzQrvubgmZtD6O61tO6%2Bj2W3qiLydMNlTy%2ByiMj2gn8%2FYMMz958MGOqUB%2FxomOBCYN0Bc%2FLKcnnOTmuwC03H7DHWTil3EOHZ5l8CSR9WVT49ngCcsXBaPFBkGYN5q0U4vypNaGVingaMcJ5xOOvhtAbh9LX5N9M0%2FLS01hvEoGTCQrCefyaitZv%2B8xZYJYFg92HFE1bK9zbC0Gv2HinUPhzJAZd1sovUhXPJ5RC1tNmcbKXxWuOu08m2wRKy4H4kNQI9qC0rVsFNJIs8hLXo%2B&X-Amz-Signature=c2916102c7006be46e4b9a8511c5096990cf43f32075d85e877e63202fe73b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
