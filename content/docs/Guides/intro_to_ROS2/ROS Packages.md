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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJRHB4C%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCds9SMV%2Fl%2FCiaIUESKr7DErI4Nkf6fDoeotUrf7WTyWQIgF%2BV%2FA%2Fj%2FO6k7M%2FPEMe6Fna2FuDRP4lO3wusS2snSPE0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfBFZ4Y7K1eO913qCrcA9S7wJ5MwXmVToD%2FWD9gEvXVC%2BBzou6hN8mmmRC0AOBnqEOxjYk%2FVu3QGBQC9kgNCbiM1SAhibQ0c5%2FkpCHzOrrT%2BiKiDWmbxoY%2FLQFObNb%2B2iZCs4LV5kggw2px4UoRc6F30ov2rwW1rlpRJXQbOKRvH2nWj8AWgXkXDCGxmPRbIZd0%2Ft0Xz%2FdKNBaDSntEx8n8TZAphkcgI1W0SX57SZSS4Kp6x05FH57j48w53rjN7sghIM2nz5mwA%2BlAa%2FC2ZqVT3CJjCq%2BCcSOZAPngKdi8kDK8QzstMEX6uqc062a8nVO7HeIyxU4nP5VP5rocxs1akTwgQIQR1Maz0S09BCi7SGgf4dD1WZtRHihGpc0zAumjkU17Gv%2FIBNoBu1cXpLqMHksyuaQSL7twmHE7oe2XHseQPlqTGxD6QoRuR9NTXsHFJXCj5AZQ6UJfJWgSeFRx3qMadZa8ru7XFnMLNnvZCe7z2jfthD5G5GYIxmhTrKV3y2GwSIQSTP8hU07LZ69LRHsGjWxOVWOE3GiS7ujnYQ7llyr0yTyhE3ITCnsEFYQWS93KqCY1iiB6vVG70qJZRdispEqGwY5wB%2BL8tNmXuyPiM5dutv0NlVNk03CeFOPCGM%2FKLgOkrw1hMIm3%2FL4GOqUBEjRCrMW4mAuEaSnB1kpCj1Jm82huBzbbbveLdWRx9E5qMUbB2Vb%2BjwpD640JCKflpEo2EVqoO2nO2LAR2su46v2bHOQmtU0%2Bgogsb%2FrVDfTxgJ2IrhZ7pLuO6Vq3u7rA3Iemyc5oEcZd3GByuFHgsE%2BdsHeR34ULdFK10RdEVGq0dHlOAQ7H13qQIbU87muFPbv%2FEfI1CHvdWgNB2ijwGdRZvbxI&X-Amz-Signature=cd613bd7ccde2fd0f3e48d4f3c09f912d2f9e8a07c91a01dc4782d04c3121563&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJRHB4C%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCds9SMV%2Fl%2FCiaIUESKr7DErI4Nkf6fDoeotUrf7WTyWQIgF%2BV%2FA%2Fj%2FO6k7M%2FPEMe6Fna2FuDRP4lO3wusS2snSPE0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfBFZ4Y7K1eO913qCrcA9S7wJ5MwXmVToD%2FWD9gEvXVC%2BBzou6hN8mmmRC0AOBnqEOxjYk%2FVu3QGBQC9kgNCbiM1SAhibQ0c5%2FkpCHzOrrT%2BiKiDWmbxoY%2FLQFObNb%2B2iZCs4LV5kggw2px4UoRc6F30ov2rwW1rlpRJXQbOKRvH2nWj8AWgXkXDCGxmPRbIZd0%2Ft0Xz%2FdKNBaDSntEx8n8TZAphkcgI1W0SX57SZSS4Kp6x05FH57j48w53rjN7sghIM2nz5mwA%2BlAa%2FC2ZqVT3CJjCq%2BCcSOZAPngKdi8kDK8QzstMEX6uqc062a8nVO7HeIyxU4nP5VP5rocxs1akTwgQIQR1Maz0S09BCi7SGgf4dD1WZtRHihGpc0zAumjkU17Gv%2FIBNoBu1cXpLqMHksyuaQSL7twmHE7oe2XHseQPlqTGxD6QoRuR9NTXsHFJXCj5AZQ6UJfJWgSeFRx3qMadZa8ru7XFnMLNnvZCe7z2jfthD5G5GYIxmhTrKV3y2GwSIQSTP8hU07LZ69LRHsGjWxOVWOE3GiS7ujnYQ7llyr0yTyhE3ITCnsEFYQWS93KqCY1iiB6vVG70qJZRdispEqGwY5wB%2BL8tNmXuyPiM5dutv0NlVNk03CeFOPCGM%2FKLgOkrw1hMIm3%2FL4GOqUBEjRCrMW4mAuEaSnB1kpCj1Jm82huBzbbbveLdWRx9E5qMUbB2Vb%2BjwpD640JCKflpEo2EVqoO2nO2LAR2su46v2bHOQmtU0%2Bgogsb%2FrVDfTxgJ2IrhZ7pLuO6Vq3u7rA3Iemyc5oEcZd3GByuFHgsE%2BdsHeR34ULdFK10RdEVGq0dHlOAQ7H13qQIbU87muFPbv%2FEfI1CHvdWgNB2ijwGdRZvbxI&X-Amz-Signature=e71a802f72d20d8eae455cfea5a510a8d0d723f8d6feb3ae4d6325934cbaceea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJRHB4C%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCds9SMV%2Fl%2FCiaIUESKr7DErI4Nkf6fDoeotUrf7WTyWQIgF%2BV%2FA%2Fj%2FO6k7M%2FPEMe6Fna2FuDRP4lO3wusS2snSPE0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfBFZ4Y7K1eO913qCrcA9S7wJ5MwXmVToD%2FWD9gEvXVC%2BBzou6hN8mmmRC0AOBnqEOxjYk%2FVu3QGBQC9kgNCbiM1SAhibQ0c5%2FkpCHzOrrT%2BiKiDWmbxoY%2FLQFObNb%2B2iZCs4LV5kggw2px4UoRc6F30ov2rwW1rlpRJXQbOKRvH2nWj8AWgXkXDCGxmPRbIZd0%2Ft0Xz%2FdKNBaDSntEx8n8TZAphkcgI1W0SX57SZSS4Kp6x05FH57j48w53rjN7sghIM2nz5mwA%2BlAa%2FC2ZqVT3CJjCq%2BCcSOZAPngKdi8kDK8QzstMEX6uqc062a8nVO7HeIyxU4nP5VP5rocxs1akTwgQIQR1Maz0S09BCi7SGgf4dD1WZtRHihGpc0zAumjkU17Gv%2FIBNoBu1cXpLqMHksyuaQSL7twmHE7oe2XHseQPlqTGxD6QoRuR9NTXsHFJXCj5AZQ6UJfJWgSeFRx3qMadZa8ru7XFnMLNnvZCe7z2jfthD5G5GYIxmhTrKV3y2GwSIQSTP8hU07LZ69LRHsGjWxOVWOE3GiS7ujnYQ7llyr0yTyhE3ITCnsEFYQWS93KqCY1iiB6vVG70qJZRdispEqGwY5wB%2BL8tNmXuyPiM5dutv0NlVNk03CeFOPCGM%2FKLgOkrw1hMIm3%2FL4GOqUBEjRCrMW4mAuEaSnB1kpCj1Jm82huBzbbbveLdWRx9E5qMUbB2Vb%2BjwpD640JCKflpEo2EVqoO2nO2LAR2su46v2bHOQmtU0%2Bgogsb%2FrVDfTxgJ2IrhZ7pLuO6Vq3u7rA3Iemyc5oEcZd3GByuFHgsE%2BdsHeR34ULdFK10RdEVGq0dHlOAQ7H13qQIbU87muFPbv%2FEfI1CHvdWgNB2ijwGdRZvbxI&X-Amz-Signature=a8cd2f252dc2cb20e7952d4e5ef42fb4dcd9e161340a3344400947bff29d2cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJRHB4C%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCds9SMV%2Fl%2FCiaIUESKr7DErI4Nkf6fDoeotUrf7WTyWQIgF%2BV%2FA%2Fj%2FO6k7M%2FPEMe6Fna2FuDRP4lO3wusS2snSPE0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfBFZ4Y7K1eO913qCrcA9S7wJ5MwXmVToD%2FWD9gEvXVC%2BBzou6hN8mmmRC0AOBnqEOxjYk%2FVu3QGBQC9kgNCbiM1SAhibQ0c5%2FkpCHzOrrT%2BiKiDWmbxoY%2FLQFObNb%2B2iZCs4LV5kggw2px4UoRc6F30ov2rwW1rlpRJXQbOKRvH2nWj8AWgXkXDCGxmPRbIZd0%2Ft0Xz%2FdKNBaDSntEx8n8TZAphkcgI1W0SX57SZSS4Kp6x05FH57j48w53rjN7sghIM2nz5mwA%2BlAa%2FC2ZqVT3CJjCq%2BCcSOZAPngKdi8kDK8QzstMEX6uqc062a8nVO7HeIyxU4nP5VP5rocxs1akTwgQIQR1Maz0S09BCi7SGgf4dD1WZtRHihGpc0zAumjkU17Gv%2FIBNoBu1cXpLqMHksyuaQSL7twmHE7oe2XHseQPlqTGxD6QoRuR9NTXsHFJXCj5AZQ6UJfJWgSeFRx3qMadZa8ru7XFnMLNnvZCe7z2jfthD5G5GYIxmhTrKV3y2GwSIQSTP8hU07LZ69LRHsGjWxOVWOE3GiS7ujnYQ7llyr0yTyhE3ITCnsEFYQWS93KqCY1iiB6vVG70qJZRdispEqGwY5wB%2BL8tNmXuyPiM5dutv0NlVNk03CeFOPCGM%2FKLgOkrw1hMIm3%2FL4GOqUBEjRCrMW4mAuEaSnB1kpCj1Jm82huBzbbbveLdWRx9E5qMUbB2Vb%2BjwpD640JCKflpEo2EVqoO2nO2LAR2su46v2bHOQmtU0%2Bgogsb%2FrVDfTxgJ2IrhZ7pLuO6Vq3u7rA3Iemyc5oEcZd3GByuFHgsE%2BdsHeR34ULdFK10RdEVGq0dHlOAQ7H13qQIbU87muFPbv%2FEfI1CHvdWgNB2ijwGdRZvbxI&X-Amz-Signature=25264f45506eabac01641f29cff4d8b8a8af8d8d73f62baba18a992b27051a34&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJRHB4C%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCds9SMV%2Fl%2FCiaIUESKr7DErI4Nkf6fDoeotUrf7WTyWQIgF%2BV%2FA%2Fj%2FO6k7M%2FPEMe6Fna2FuDRP4lO3wusS2snSPE0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfBFZ4Y7K1eO913qCrcA9S7wJ5MwXmVToD%2FWD9gEvXVC%2BBzou6hN8mmmRC0AOBnqEOxjYk%2FVu3QGBQC9kgNCbiM1SAhibQ0c5%2FkpCHzOrrT%2BiKiDWmbxoY%2FLQFObNb%2B2iZCs4LV5kggw2px4UoRc6F30ov2rwW1rlpRJXQbOKRvH2nWj8AWgXkXDCGxmPRbIZd0%2Ft0Xz%2FdKNBaDSntEx8n8TZAphkcgI1W0SX57SZSS4Kp6x05FH57j48w53rjN7sghIM2nz5mwA%2BlAa%2FC2ZqVT3CJjCq%2BCcSOZAPngKdi8kDK8QzstMEX6uqc062a8nVO7HeIyxU4nP5VP5rocxs1akTwgQIQR1Maz0S09BCi7SGgf4dD1WZtRHihGpc0zAumjkU17Gv%2FIBNoBu1cXpLqMHksyuaQSL7twmHE7oe2XHseQPlqTGxD6QoRuR9NTXsHFJXCj5AZQ6UJfJWgSeFRx3qMadZa8ru7XFnMLNnvZCe7z2jfthD5G5GYIxmhTrKV3y2GwSIQSTP8hU07LZ69LRHsGjWxOVWOE3GiS7ujnYQ7llyr0yTyhE3ITCnsEFYQWS93KqCY1iiB6vVG70qJZRdispEqGwY5wB%2BL8tNmXuyPiM5dutv0NlVNk03CeFOPCGM%2FKLgOkrw1hMIm3%2FL4GOqUBEjRCrMW4mAuEaSnB1kpCj1Jm82huBzbbbveLdWRx9E5qMUbB2Vb%2BjwpD640JCKflpEo2EVqoO2nO2LAR2su46v2bHOQmtU0%2Bgogsb%2FrVDfTxgJ2IrhZ7pLuO6Vq3u7rA3Iemyc5oEcZd3GByuFHgsE%2BdsHeR34ULdFK10RdEVGq0dHlOAQ7H13qQIbU87muFPbv%2FEfI1CHvdWgNB2ijwGdRZvbxI&X-Amz-Signature=bf903a2f60b55b883e6afc6966778083a9bb2ef6fb669f0fd82367cc067147df&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJRHB4C%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCds9SMV%2Fl%2FCiaIUESKr7DErI4Nkf6fDoeotUrf7WTyWQIgF%2BV%2FA%2Fj%2FO6k7M%2FPEMe6Fna2FuDRP4lO3wusS2snSPE0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfBFZ4Y7K1eO913qCrcA9S7wJ5MwXmVToD%2FWD9gEvXVC%2BBzou6hN8mmmRC0AOBnqEOxjYk%2FVu3QGBQC9kgNCbiM1SAhibQ0c5%2FkpCHzOrrT%2BiKiDWmbxoY%2FLQFObNb%2B2iZCs4LV5kggw2px4UoRc6F30ov2rwW1rlpRJXQbOKRvH2nWj8AWgXkXDCGxmPRbIZd0%2Ft0Xz%2FdKNBaDSntEx8n8TZAphkcgI1W0SX57SZSS4Kp6x05FH57j48w53rjN7sghIM2nz5mwA%2BlAa%2FC2ZqVT3CJjCq%2BCcSOZAPngKdi8kDK8QzstMEX6uqc062a8nVO7HeIyxU4nP5VP5rocxs1akTwgQIQR1Maz0S09BCi7SGgf4dD1WZtRHihGpc0zAumjkU17Gv%2FIBNoBu1cXpLqMHksyuaQSL7twmHE7oe2XHseQPlqTGxD6QoRuR9NTXsHFJXCj5AZQ6UJfJWgSeFRx3qMadZa8ru7XFnMLNnvZCe7z2jfthD5G5GYIxmhTrKV3y2GwSIQSTP8hU07LZ69LRHsGjWxOVWOE3GiS7ujnYQ7llyr0yTyhE3ITCnsEFYQWS93KqCY1iiB6vVG70qJZRdispEqGwY5wB%2BL8tNmXuyPiM5dutv0NlVNk03CeFOPCGM%2FKLgOkrw1hMIm3%2FL4GOqUBEjRCrMW4mAuEaSnB1kpCj1Jm82huBzbbbveLdWRx9E5qMUbB2Vb%2BjwpD640JCKflpEo2EVqoO2nO2LAR2su46v2bHOQmtU0%2Bgogsb%2FrVDfTxgJ2IrhZ7pLuO6Vq3u7rA3Iemyc5oEcZd3GByuFHgsE%2BdsHeR34ULdFK10RdEVGq0dHlOAQ7H13qQIbU87muFPbv%2FEfI1CHvdWgNB2ijwGdRZvbxI&X-Amz-Signature=5ab19514e05f8d83195a01ad6a3cd9fa65230ac84daec23ec236f1975bd14b94&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJRHB4C%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCds9SMV%2Fl%2FCiaIUESKr7DErI4Nkf6fDoeotUrf7WTyWQIgF%2BV%2FA%2Fj%2FO6k7M%2FPEMe6Fna2FuDRP4lO3wusS2snSPE0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfBFZ4Y7K1eO913qCrcA9S7wJ5MwXmVToD%2FWD9gEvXVC%2BBzou6hN8mmmRC0AOBnqEOxjYk%2FVu3QGBQC9kgNCbiM1SAhibQ0c5%2FkpCHzOrrT%2BiKiDWmbxoY%2FLQFObNb%2B2iZCs4LV5kggw2px4UoRc6F30ov2rwW1rlpRJXQbOKRvH2nWj8AWgXkXDCGxmPRbIZd0%2Ft0Xz%2FdKNBaDSntEx8n8TZAphkcgI1W0SX57SZSS4Kp6x05FH57j48w53rjN7sghIM2nz5mwA%2BlAa%2FC2ZqVT3CJjCq%2BCcSOZAPngKdi8kDK8QzstMEX6uqc062a8nVO7HeIyxU4nP5VP5rocxs1akTwgQIQR1Maz0S09BCi7SGgf4dD1WZtRHihGpc0zAumjkU17Gv%2FIBNoBu1cXpLqMHksyuaQSL7twmHE7oe2XHseQPlqTGxD6QoRuR9NTXsHFJXCj5AZQ6UJfJWgSeFRx3qMadZa8ru7XFnMLNnvZCe7z2jfthD5G5GYIxmhTrKV3y2GwSIQSTP8hU07LZ69LRHsGjWxOVWOE3GiS7ujnYQ7llyr0yTyhE3ITCnsEFYQWS93KqCY1iiB6vVG70qJZRdispEqGwY5wB%2BL8tNmXuyPiM5dutv0NlVNk03CeFOPCGM%2FKLgOkrw1hMIm3%2FL4GOqUBEjRCrMW4mAuEaSnB1kpCj1Jm82huBzbbbveLdWRx9E5qMUbB2Vb%2BjwpD640JCKflpEo2EVqoO2nO2LAR2su46v2bHOQmtU0%2Bgogsb%2FrVDfTxgJ2IrhZ7pLuO6Vq3u7rA3Iemyc5oEcZd3GByuFHgsE%2BdsHeR34ULdFK10RdEVGq0dHlOAQ7H13qQIbU87muFPbv%2FEfI1CHvdWgNB2ijwGdRZvbxI&X-Amz-Signature=d0d5ccdfff5820b321c1f96fefd5c1314f02002699d59d0fc63acb2df248c93b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
