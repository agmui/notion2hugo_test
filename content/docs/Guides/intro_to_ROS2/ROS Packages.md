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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOGZRFT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIQCVhKHGayNhUakVB1SkbTishnw%2F9KwcPOpOv2dgi641AQIfLxQB%2FL%2FNVClnRW%2F47Xe5%2FrOHYWDHKth1mvZRCSBo9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMvJp%2B7K9WT%2BgmYQ%2FbKtwDWn2PPk8djrQsW6AjCh4q9C8j86ahm%2FDH83rsnqakjXsOCq7knzxTf9wFB%2BcZBZlfF6f4gDoXAWezFINWZOZdH9w9ukjWMY3PwVOaP1BKm8gzs4uy2AllvNN2AMalR2jAiYEtLi%2F%2Fdx1xxB%2B8yizbmrpEdu3Y2IaqZJpJx3Js4w8Hq3Z8Z9jKp4BornMmkXtLky0YNTHdSujwgb2PO1KyyuJ4r8ADznxImvR6XW6SqFF9mbTlEctaGAHLu6xc5bk%2B79Fe0mjyXEblpmwpgXAUpKCal9XLKwaH0mFhmeILhexu9RzlPzeqncNH%2Ba6EUXGcFJTP2XaIh8QEj5OdLcp8qz5QOoKi66%2FhElvwaNbl57UkndkN0SQZ0tpfEtru4xRV4ugSqcaKz1%2BRHQE4MCxjD%2BZjs8e8fR8owcQ86bHE%2BD1jPMB6T244n7gkWGK20FvYQKTya4bqXJzabbYH2ip%2BqMxmf2ruA45jnAuIWP7q%2BUho0VF5%2F2fYjtPuarP7oURBTy0SMLOidV72W33bQzClqbTP5yYLzHCaI7VWD8soEdue6FndYEu3oUokLfBfhXbV1Tm2IgNKHWwSxTdTmXqlnORF49TEYkyTtLyO6EGBh06T94JRlW%2FaERvrAMQw7ID%2BvQY6pgEGpxsotY4yXcLmNJjEdriJ8NvYHdnELLFiE%2BLN5%2Fug%2Fn2fHslRJF6w1QQph8aJod26mbIFuVPwPvRsPV%2B%2F9%2FJXcx0KA6S%2Fks4ekY8zGF52fogBa7hcMw7TkK9h94pgOxZ4A19YpSx1Icx5c44yS0sHWwKCyK6Bt%2FZKBD7%2FwvMrSvoS%2B3N3%2BaQu1nJKnRbDzIWAjSavXWsRS65xVYJjBl%2Fq4RBs3AlB&X-Amz-Signature=3ee2d0f642478ad2b651059ee6961357283d81dc6dd1dbb447d335168a514458&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOGZRFT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIQCVhKHGayNhUakVB1SkbTishnw%2F9KwcPOpOv2dgi641AQIfLxQB%2FL%2FNVClnRW%2F47Xe5%2FrOHYWDHKth1mvZRCSBo9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMvJp%2B7K9WT%2BgmYQ%2FbKtwDWn2PPk8djrQsW6AjCh4q9C8j86ahm%2FDH83rsnqakjXsOCq7knzxTf9wFB%2BcZBZlfF6f4gDoXAWezFINWZOZdH9w9ukjWMY3PwVOaP1BKm8gzs4uy2AllvNN2AMalR2jAiYEtLi%2F%2Fdx1xxB%2B8yizbmrpEdu3Y2IaqZJpJx3Js4w8Hq3Z8Z9jKp4BornMmkXtLky0YNTHdSujwgb2PO1KyyuJ4r8ADznxImvR6XW6SqFF9mbTlEctaGAHLu6xc5bk%2B79Fe0mjyXEblpmwpgXAUpKCal9XLKwaH0mFhmeILhexu9RzlPzeqncNH%2Ba6EUXGcFJTP2XaIh8QEj5OdLcp8qz5QOoKi66%2FhElvwaNbl57UkndkN0SQZ0tpfEtru4xRV4ugSqcaKz1%2BRHQE4MCxjD%2BZjs8e8fR8owcQ86bHE%2BD1jPMB6T244n7gkWGK20FvYQKTya4bqXJzabbYH2ip%2BqMxmf2ruA45jnAuIWP7q%2BUho0VF5%2F2fYjtPuarP7oURBTy0SMLOidV72W33bQzClqbTP5yYLzHCaI7VWD8soEdue6FndYEu3oUokLfBfhXbV1Tm2IgNKHWwSxTdTmXqlnORF49TEYkyTtLyO6EGBh06T94JRlW%2FaERvrAMQw7ID%2BvQY6pgEGpxsotY4yXcLmNJjEdriJ8NvYHdnELLFiE%2BLN5%2Fug%2Fn2fHslRJF6w1QQph8aJod26mbIFuVPwPvRsPV%2B%2F9%2FJXcx0KA6S%2Fks4ekY8zGF52fogBa7hcMw7TkK9h94pgOxZ4A19YpSx1Icx5c44yS0sHWwKCyK6Bt%2FZKBD7%2FwvMrSvoS%2B3N3%2BaQu1nJKnRbDzIWAjSavXWsRS65xVYJjBl%2Fq4RBs3AlB&X-Amz-Signature=66109933b508584300d55aa9fdc20aee00bbd1ecfe8026e37485b22f3a300a33&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOGZRFT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIQCVhKHGayNhUakVB1SkbTishnw%2F9KwcPOpOv2dgi641AQIfLxQB%2FL%2FNVClnRW%2F47Xe5%2FrOHYWDHKth1mvZRCSBo9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMvJp%2B7K9WT%2BgmYQ%2FbKtwDWn2PPk8djrQsW6AjCh4q9C8j86ahm%2FDH83rsnqakjXsOCq7knzxTf9wFB%2BcZBZlfF6f4gDoXAWezFINWZOZdH9w9ukjWMY3PwVOaP1BKm8gzs4uy2AllvNN2AMalR2jAiYEtLi%2F%2Fdx1xxB%2B8yizbmrpEdu3Y2IaqZJpJx3Js4w8Hq3Z8Z9jKp4BornMmkXtLky0YNTHdSujwgb2PO1KyyuJ4r8ADznxImvR6XW6SqFF9mbTlEctaGAHLu6xc5bk%2B79Fe0mjyXEblpmwpgXAUpKCal9XLKwaH0mFhmeILhexu9RzlPzeqncNH%2Ba6EUXGcFJTP2XaIh8QEj5OdLcp8qz5QOoKi66%2FhElvwaNbl57UkndkN0SQZ0tpfEtru4xRV4ugSqcaKz1%2BRHQE4MCxjD%2BZjs8e8fR8owcQ86bHE%2BD1jPMB6T244n7gkWGK20FvYQKTya4bqXJzabbYH2ip%2BqMxmf2ruA45jnAuIWP7q%2BUho0VF5%2F2fYjtPuarP7oURBTy0SMLOidV72W33bQzClqbTP5yYLzHCaI7VWD8soEdue6FndYEu3oUokLfBfhXbV1Tm2IgNKHWwSxTdTmXqlnORF49TEYkyTtLyO6EGBh06T94JRlW%2FaERvrAMQw7ID%2BvQY6pgEGpxsotY4yXcLmNJjEdriJ8NvYHdnELLFiE%2BLN5%2Fug%2Fn2fHslRJF6w1QQph8aJod26mbIFuVPwPvRsPV%2B%2F9%2FJXcx0KA6S%2Fks4ekY8zGF52fogBa7hcMw7TkK9h94pgOxZ4A19YpSx1Icx5c44yS0sHWwKCyK6Bt%2FZKBD7%2FwvMrSvoS%2B3N3%2BaQu1nJKnRbDzIWAjSavXWsRS65xVYJjBl%2Fq4RBs3AlB&X-Amz-Signature=243b9f21e0c4ee1138dd25e873b89910447e231449c5d91a029e3836cb06c927&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOGZRFT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIQCVhKHGayNhUakVB1SkbTishnw%2F9KwcPOpOv2dgi641AQIfLxQB%2FL%2FNVClnRW%2F47Xe5%2FrOHYWDHKth1mvZRCSBo9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMvJp%2B7K9WT%2BgmYQ%2FbKtwDWn2PPk8djrQsW6AjCh4q9C8j86ahm%2FDH83rsnqakjXsOCq7knzxTf9wFB%2BcZBZlfF6f4gDoXAWezFINWZOZdH9w9ukjWMY3PwVOaP1BKm8gzs4uy2AllvNN2AMalR2jAiYEtLi%2F%2Fdx1xxB%2B8yizbmrpEdu3Y2IaqZJpJx3Js4w8Hq3Z8Z9jKp4BornMmkXtLky0YNTHdSujwgb2PO1KyyuJ4r8ADznxImvR6XW6SqFF9mbTlEctaGAHLu6xc5bk%2B79Fe0mjyXEblpmwpgXAUpKCal9XLKwaH0mFhmeILhexu9RzlPzeqncNH%2Ba6EUXGcFJTP2XaIh8QEj5OdLcp8qz5QOoKi66%2FhElvwaNbl57UkndkN0SQZ0tpfEtru4xRV4ugSqcaKz1%2BRHQE4MCxjD%2BZjs8e8fR8owcQ86bHE%2BD1jPMB6T244n7gkWGK20FvYQKTya4bqXJzabbYH2ip%2BqMxmf2ruA45jnAuIWP7q%2BUho0VF5%2F2fYjtPuarP7oURBTy0SMLOidV72W33bQzClqbTP5yYLzHCaI7VWD8soEdue6FndYEu3oUokLfBfhXbV1Tm2IgNKHWwSxTdTmXqlnORF49TEYkyTtLyO6EGBh06T94JRlW%2FaERvrAMQw7ID%2BvQY6pgEGpxsotY4yXcLmNJjEdriJ8NvYHdnELLFiE%2BLN5%2Fug%2Fn2fHslRJF6w1QQph8aJod26mbIFuVPwPvRsPV%2B%2F9%2FJXcx0KA6S%2Fks4ekY8zGF52fogBa7hcMw7TkK9h94pgOxZ4A19YpSx1Icx5c44yS0sHWwKCyK6Bt%2FZKBD7%2FwvMrSvoS%2B3N3%2BaQu1nJKnRbDzIWAjSavXWsRS65xVYJjBl%2Fq4RBs3AlB&X-Amz-Signature=c8570fb337697fe2f22aa9b3956c75149d481d6b679427b4c137ce6bc8ff2d13&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOGZRFT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIQCVhKHGayNhUakVB1SkbTishnw%2F9KwcPOpOv2dgi641AQIfLxQB%2FL%2FNVClnRW%2F47Xe5%2FrOHYWDHKth1mvZRCSBo9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMvJp%2B7K9WT%2BgmYQ%2FbKtwDWn2PPk8djrQsW6AjCh4q9C8j86ahm%2FDH83rsnqakjXsOCq7knzxTf9wFB%2BcZBZlfF6f4gDoXAWezFINWZOZdH9w9ukjWMY3PwVOaP1BKm8gzs4uy2AllvNN2AMalR2jAiYEtLi%2F%2Fdx1xxB%2B8yizbmrpEdu3Y2IaqZJpJx3Js4w8Hq3Z8Z9jKp4BornMmkXtLky0YNTHdSujwgb2PO1KyyuJ4r8ADznxImvR6XW6SqFF9mbTlEctaGAHLu6xc5bk%2B79Fe0mjyXEblpmwpgXAUpKCal9XLKwaH0mFhmeILhexu9RzlPzeqncNH%2Ba6EUXGcFJTP2XaIh8QEj5OdLcp8qz5QOoKi66%2FhElvwaNbl57UkndkN0SQZ0tpfEtru4xRV4ugSqcaKz1%2BRHQE4MCxjD%2BZjs8e8fR8owcQ86bHE%2BD1jPMB6T244n7gkWGK20FvYQKTya4bqXJzabbYH2ip%2BqMxmf2ruA45jnAuIWP7q%2BUho0VF5%2F2fYjtPuarP7oURBTy0SMLOidV72W33bQzClqbTP5yYLzHCaI7VWD8soEdue6FndYEu3oUokLfBfhXbV1Tm2IgNKHWwSxTdTmXqlnORF49TEYkyTtLyO6EGBh06T94JRlW%2FaERvrAMQw7ID%2BvQY6pgEGpxsotY4yXcLmNJjEdriJ8NvYHdnELLFiE%2BLN5%2Fug%2Fn2fHslRJF6w1QQph8aJod26mbIFuVPwPvRsPV%2B%2F9%2FJXcx0KA6S%2Fks4ekY8zGF52fogBa7hcMw7TkK9h94pgOxZ4A19YpSx1Icx5c44yS0sHWwKCyK6Bt%2FZKBD7%2FwvMrSvoS%2B3N3%2BaQu1nJKnRbDzIWAjSavXWsRS65xVYJjBl%2Fq4RBs3AlB&X-Amz-Signature=7027ef2ccbe9ab9fcfc716da8ab25c280d91a9e163d24bfc67bdef010c486202&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOGZRFT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIQCVhKHGayNhUakVB1SkbTishnw%2F9KwcPOpOv2dgi641AQIfLxQB%2FL%2FNVClnRW%2F47Xe5%2FrOHYWDHKth1mvZRCSBo9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMvJp%2B7K9WT%2BgmYQ%2FbKtwDWn2PPk8djrQsW6AjCh4q9C8j86ahm%2FDH83rsnqakjXsOCq7knzxTf9wFB%2BcZBZlfF6f4gDoXAWezFINWZOZdH9w9ukjWMY3PwVOaP1BKm8gzs4uy2AllvNN2AMalR2jAiYEtLi%2F%2Fdx1xxB%2B8yizbmrpEdu3Y2IaqZJpJx3Js4w8Hq3Z8Z9jKp4BornMmkXtLky0YNTHdSujwgb2PO1KyyuJ4r8ADznxImvR6XW6SqFF9mbTlEctaGAHLu6xc5bk%2B79Fe0mjyXEblpmwpgXAUpKCal9XLKwaH0mFhmeILhexu9RzlPzeqncNH%2Ba6EUXGcFJTP2XaIh8QEj5OdLcp8qz5QOoKi66%2FhElvwaNbl57UkndkN0SQZ0tpfEtru4xRV4ugSqcaKz1%2BRHQE4MCxjD%2BZjs8e8fR8owcQ86bHE%2BD1jPMB6T244n7gkWGK20FvYQKTya4bqXJzabbYH2ip%2BqMxmf2ruA45jnAuIWP7q%2BUho0VF5%2F2fYjtPuarP7oURBTy0SMLOidV72W33bQzClqbTP5yYLzHCaI7VWD8soEdue6FndYEu3oUokLfBfhXbV1Tm2IgNKHWwSxTdTmXqlnORF49TEYkyTtLyO6EGBh06T94JRlW%2FaERvrAMQw7ID%2BvQY6pgEGpxsotY4yXcLmNJjEdriJ8NvYHdnELLFiE%2BLN5%2Fug%2Fn2fHslRJF6w1QQph8aJod26mbIFuVPwPvRsPV%2B%2F9%2FJXcx0KA6S%2Fks4ekY8zGF52fogBa7hcMw7TkK9h94pgOxZ4A19YpSx1Icx5c44yS0sHWwKCyK6Bt%2FZKBD7%2FwvMrSvoS%2B3N3%2BaQu1nJKnRbDzIWAjSavXWsRS65xVYJjBl%2Fq4RBs3AlB&X-Amz-Signature=aa32fb5442c51b0601decad4d6812bee5936d24af27d50b7dd276a9d750eca98&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOGZRFT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIQCVhKHGayNhUakVB1SkbTishnw%2F9KwcPOpOv2dgi641AQIfLxQB%2FL%2FNVClnRW%2F47Xe5%2FrOHYWDHKth1mvZRCSBo9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMvJp%2B7K9WT%2BgmYQ%2FbKtwDWn2PPk8djrQsW6AjCh4q9C8j86ahm%2FDH83rsnqakjXsOCq7knzxTf9wFB%2BcZBZlfF6f4gDoXAWezFINWZOZdH9w9ukjWMY3PwVOaP1BKm8gzs4uy2AllvNN2AMalR2jAiYEtLi%2F%2Fdx1xxB%2B8yizbmrpEdu3Y2IaqZJpJx3Js4w8Hq3Z8Z9jKp4BornMmkXtLky0YNTHdSujwgb2PO1KyyuJ4r8ADznxImvR6XW6SqFF9mbTlEctaGAHLu6xc5bk%2B79Fe0mjyXEblpmwpgXAUpKCal9XLKwaH0mFhmeILhexu9RzlPzeqncNH%2Ba6EUXGcFJTP2XaIh8QEj5OdLcp8qz5QOoKi66%2FhElvwaNbl57UkndkN0SQZ0tpfEtru4xRV4ugSqcaKz1%2BRHQE4MCxjD%2BZjs8e8fR8owcQ86bHE%2BD1jPMB6T244n7gkWGK20FvYQKTya4bqXJzabbYH2ip%2BqMxmf2ruA45jnAuIWP7q%2BUho0VF5%2F2fYjtPuarP7oURBTy0SMLOidV72W33bQzClqbTP5yYLzHCaI7VWD8soEdue6FndYEu3oUokLfBfhXbV1Tm2IgNKHWwSxTdTmXqlnORF49TEYkyTtLyO6EGBh06T94JRlW%2FaERvrAMQw7ID%2BvQY6pgEGpxsotY4yXcLmNJjEdriJ8NvYHdnELLFiE%2BLN5%2Fug%2Fn2fHslRJF6w1QQph8aJod26mbIFuVPwPvRsPV%2B%2F9%2FJXcx0KA6S%2Fks4ekY8zGF52fogBa7hcMw7TkK9h94pgOxZ4A19YpSx1Icx5c44yS0sHWwKCyK6Bt%2FZKBD7%2FwvMrSvoS%2B3N3%2BaQu1nJKnRbDzIWAjSavXWsRS65xVYJjBl%2Fq4RBs3AlB&X-Amz-Signature=004f9d20bd117e357bb08a93ce81738b22c990a62c36f324e20c1f3c86ebb8de&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
