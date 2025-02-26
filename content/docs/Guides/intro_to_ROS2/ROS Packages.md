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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAEKV7U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICCzJSvSq5eHYHu9t4C06fuA0ERyqFcBYlOr4BTCHbokAiAmetI2Z16ExnpWiq9OhmpozXYhrKd3MW%2FmnTHlRlYBGCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiZ21wDsq5KH88D3CKtwDr5rr4cftuMWCyTu0kvfBMDgPk0ksmJvynYY2YXrcaCHr4dJ0HXLr7NUnrjTuITSse1a9h5J3kRyIU4IhPRcrV6hV1JnpuLhFwu4yoGhCu1%2FTghJ%2Bny6ctLUxXh9ZtQt43PUzzTdWh5LV7Asx8N%2FzowrqdCcg89I5CWDPt3VMx22KRqxk%2B1Cmayj1uA%2FPaRupRRCZnQ05izq1afDxSXiJwTgSTVgfhsrj0jmmS7SZeYuPhm4Mb%2F3MieaKI6oBpI%2BAN%2F7Yk4D%2Bh174%2BTEnrDcnjeMMzWn3JrFKiQQiBQrknoYq5avImUSckY9p9w3jDuVHKgSDrf9H35n5912uLRSkR%2FyQPFBwxByRaVbMy%2F%2BLtqGq85e0zwpcVKI0neOr2aRq0%2B%2Bbt2FX9MrvNJCHzBE5PlthyYYntOYmLSEuETbrHWwGI45P4VGDMcUUpiMSPGBtv5Z2nU2Ziv59h%2FVtntJP59TIsAmVqLP0qGwm%2BxNtkIIRbGoLPB1StNZvkOeZ%2FoaPuX9SXahBGDaZgDd9BrKP1YOnr4Yo7hmhvUE275cDEN%2BG%2FkEnKp739ffcAqPXL37AyythnZW6w3yZOftfBs04iddKTJycXdYuPka2vs7M2d%2B9VKUZHxjdDe%2FA88gwx6z9vQY6pgHtMrumBx4vGwdBm%2FfA8pQn8FiNZ7tUqvCOqEpSYjMoHkip9Wxc0xS2Rgg%2FghBiKXjmr0DnJp2ob6oODkc0o0dMpeVlM4ZG%2FdsiPXAiyqTCowouX%2BrZMGdjp0h38m15OI9gZpVP0AhzIzS4XpO%2FtRj%2BvcFr8BqCC%2BRKY9gDvAr7LVTidtXYLXVgqaCDSYbMXcTo%2FJuY00Ey2sVv1K1uDn%2BeSsbYoIcd&X-Amz-Signature=564a613d0a165349580b4fc2293e8a9b6eabed20ebe013f2140f9d461968d155&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAEKV7U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICCzJSvSq5eHYHu9t4C06fuA0ERyqFcBYlOr4BTCHbokAiAmetI2Z16ExnpWiq9OhmpozXYhrKd3MW%2FmnTHlRlYBGCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiZ21wDsq5KH88D3CKtwDr5rr4cftuMWCyTu0kvfBMDgPk0ksmJvynYY2YXrcaCHr4dJ0HXLr7NUnrjTuITSse1a9h5J3kRyIU4IhPRcrV6hV1JnpuLhFwu4yoGhCu1%2FTghJ%2Bny6ctLUxXh9ZtQt43PUzzTdWh5LV7Asx8N%2FzowrqdCcg89I5CWDPt3VMx22KRqxk%2B1Cmayj1uA%2FPaRupRRCZnQ05izq1afDxSXiJwTgSTVgfhsrj0jmmS7SZeYuPhm4Mb%2F3MieaKI6oBpI%2BAN%2F7Yk4D%2Bh174%2BTEnrDcnjeMMzWn3JrFKiQQiBQrknoYq5avImUSckY9p9w3jDuVHKgSDrf9H35n5912uLRSkR%2FyQPFBwxByRaVbMy%2F%2BLtqGq85e0zwpcVKI0neOr2aRq0%2B%2Bbt2FX9MrvNJCHzBE5PlthyYYntOYmLSEuETbrHWwGI45P4VGDMcUUpiMSPGBtv5Z2nU2Ziv59h%2FVtntJP59TIsAmVqLP0qGwm%2BxNtkIIRbGoLPB1StNZvkOeZ%2FoaPuX9SXahBGDaZgDd9BrKP1YOnr4Yo7hmhvUE275cDEN%2BG%2FkEnKp739ffcAqPXL37AyythnZW6w3yZOftfBs04iddKTJycXdYuPka2vs7M2d%2B9VKUZHxjdDe%2FA88gwx6z9vQY6pgHtMrumBx4vGwdBm%2FfA8pQn8FiNZ7tUqvCOqEpSYjMoHkip9Wxc0xS2Rgg%2FghBiKXjmr0DnJp2ob6oODkc0o0dMpeVlM4ZG%2FdsiPXAiyqTCowouX%2BrZMGdjp0h38m15OI9gZpVP0AhzIzS4XpO%2FtRj%2BvcFr8BqCC%2BRKY9gDvAr7LVTidtXYLXVgqaCDSYbMXcTo%2FJuY00Ey2sVv1K1uDn%2BeSsbYoIcd&X-Amz-Signature=8dbfba9ce3e2b1d917110607877fd508c6db5e487b6562364b8f7af878aad00c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAEKV7U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICCzJSvSq5eHYHu9t4C06fuA0ERyqFcBYlOr4BTCHbokAiAmetI2Z16ExnpWiq9OhmpozXYhrKd3MW%2FmnTHlRlYBGCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiZ21wDsq5KH88D3CKtwDr5rr4cftuMWCyTu0kvfBMDgPk0ksmJvynYY2YXrcaCHr4dJ0HXLr7NUnrjTuITSse1a9h5J3kRyIU4IhPRcrV6hV1JnpuLhFwu4yoGhCu1%2FTghJ%2Bny6ctLUxXh9ZtQt43PUzzTdWh5LV7Asx8N%2FzowrqdCcg89I5CWDPt3VMx22KRqxk%2B1Cmayj1uA%2FPaRupRRCZnQ05izq1afDxSXiJwTgSTVgfhsrj0jmmS7SZeYuPhm4Mb%2F3MieaKI6oBpI%2BAN%2F7Yk4D%2Bh174%2BTEnrDcnjeMMzWn3JrFKiQQiBQrknoYq5avImUSckY9p9w3jDuVHKgSDrf9H35n5912uLRSkR%2FyQPFBwxByRaVbMy%2F%2BLtqGq85e0zwpcVKI0neOr2aRq0%2B%2Bbt2FX9MrvNJCHzBE5PlthyYYntOYmLSEuETbrHWwGI45P4VGDMcUUpiMSPGBtv5Z2nU2Ziv59h%2FVtntJP59TIsAmVqLP0qGwm%2BxNtkIIRbGoLPB1StNZvkOeZ%2FoaPuX9SXahBGDaZgDd9BrKP1YOnr4Yo7hmhvUE275cDEN%2BG%2FkEnKp739ffcAqPXL37AyythnZW6w3yZOftfBs04iddKTJycXdYuPka2vs7M2d%2B9VKUZHxjdDe%2FA88gwx6z9vQY6pgHtMrumBx4vGwdBm%2FfA8pQn8FiNZ7tUqvCOqEpSYjMoHkip9Wxc0xS2Rgg%2FghBiKXjmr0DnJp2ob6oODkc0o0dMpeVlM4ZG%2FdsiPXAiyqTCowouX%2BrZMGdjp0h38m15OI9gZpVP0AhzIzS4XpO%2FtRj%2BvcFr8BqCC%2BRKY9gDvAr7LVTidtXYLXVgqaCDSYbMXcTo%2FJuY00Ey2sVv1K1uDn%2BeSsbYoIcd&X-Amz-Signature=1ab7491b22e6212a04b57e0d0e505cc6b2876863e8d5c61a01a621555b5b4377&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAEKV7U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICCzJSvSq5eHYHu9t4C06fuA0ERyqFcBYlOr4BTCHbokAiAmetI2Z16ExnpWiq9OhmpozXYhrKd3MW%2FmnTHlRlYBGCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiZ21wDsq5KH88D3CKtwDr5rr4cftuMWCyTu0kvfBMDgPk0ksmJvynYY2YXrcaCHr4dJ0HXLr7NUnrjTuITSse1a9h5J3kRyIU4IhPRcrV6hV1JnpuLhFwu4yoGhCu1%2FTghJ%2Bny6ctLUxXh9ZtQt43PUzzTdWh5LV7Asx8N%2FzowrqdCcg89I5CWDPt3VMx22KRqxk%2B1Cmayj1uA%2FPaRupRRCZnQ05izq1afDxSXiJwTgSTVgfhsrj0jmmS7SZeYuPhm4Mb%2F3MieaKI6oBpI%2BAN%2F7Yk4D%2Bh174%2BTEnrDcnjeMMzWn3JrFKiQQiBQrknoYq5avImUSckY9p9w3jDuVHKgSDrf9H35n5912uLRSkR%2FyQPFBwxByRaVbMy%2F%2BLtqGq85e0zwpcVKI0neOr2aRq0%2B%2Bbt2FX9MrvNJCHzBE5PlthyYYntOYmLSEuETbrHWwGI45P4VGDMcUUpiMSPGBtv5Z2nU2Ziv59h%2FVtntJP59TIsAmVqLP0qGwm%2BxNtkIIRbGoLPB1StNZvkOeZ%2FoaPuX9SXahBGDaZgDd9BrKP1YOnr4Yo7hmhvUE275cDEN%2BG%2FkEnKp739ffcAqPXL37AyythnZW6w3yZOftfBs04iddKTJycXdYuPka2vs7M2d%2B9VKUZHxjdDe%2FA88gwx6z9vQY6pgHtMrumBx4vGwdBm%2FfA8pQn8FiNZ7tUqvCOqEpSYjMoHkip9Wxc0xS2Rgg%2FghBiKXjmr0DnJp2ob6oODkc0o0dMpeVlM4ZG%2FdsiPXAiyqTCowouX%2BrZMGdjp0h38m15OI9gZpVP0AhzIzS4XpO%2FtRj%2BvcFr8BqCC%2BRKY9gDvAr7LVTidtXYLXVgqaCDSYbMXcTo%2FJuY00Ey2sVv1K1uDn%2BeSsbYoIcd&X-Amz-Signature=82d30bf3229202503644c2bbe67d10818a27a033972c2371a16dc4efc1d6cf36&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAEKV7U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICCzJSvSq5eHYHu9t4C06fuA0ERyqFcBYlOr4BTCHbokAiAmetI2Z16ExnpWiq9OhmpozXYhrKd3MW%2FmnTHlRlYBGCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiZ21wDsq5KH88D3CKtwDr5rr4cftuMWCyTu0kvfBMDgPk0ksmJvynYY2YXrcaCHr4dJ0HXLr7NUnrjTuITSse1a9h5J3kRyIU4IhPRcrV6hV1JnpuLhFwu4yoGhCu1%2FTghJ%2Bny6ctLUxXh9ZtQt43PUzzTdWh5LV7Asx8N%2FzowrqdCcg89I5CWDPt3VMx22KRqxk%2B1Cmayj1uA%2FPaRupRRCZnQ05izq1afDxSXiJwTgSTVgfhsrj0jmmS7SZeYuPhm4Mb%2F3MieaKI6oBpI%2BAN%2F7Yk4D%2Bh174%2BTEnrDcnjeMMzWn3JrFKiQQiBQrknoYq5avImUSckY9p9w3jDuVHKgSDrf9H35n5912uLRSkR%2FyQPFBwxByRaVbMy%2F%2BLtqGq85e0zwpcVKI0neOr2aRq0%2B%2Bbt2FX9MrvNJCHzBE5PlthyYYntOYmLSEuETbrHWwGI45P4VGDMcUUpiMSPGBtv5Z2nU2Ziv59h%2FVtntJP59TIsAmVqLP0qGwm%2BxNtkIIRbGoLPB1StNZvkOeZ%2FoaPuX9SXahBGDaZgDd9BrKP1YOnr4Yo7hmhvUE275cDEN%2BG%2FkEnKp739ffcAqPXL37AyythnZW6w3yZOftfBs04iddKTJycXdYuPka2vs7M2d%2B9VKUZHxjdDe%2FA88gwx6z9vQY6pgHtMrumBx4vGwdBm%2FfA8pQn8FiNZ7tUqvCOqEpSYjMoHkip9Wxc0xS2Rgg%2FghBiKXjmr0DnJp2ob6oODkc0o0dMpeVlM4ZG%2FdsiPXAiyqTCowouX%2BrZMGdjp0h38m15OI9gZpVP0AhzIzS4XpO%2FtRj%2BvcFr8BqCC%2BRKY9gDvAr7LVTidtXYLXVgqaCDSYbMXcTo%2FJuY00Ey2sVv1K1uDn%2BeSsbYoIcd&X-Amz-Signature=931d3e863fa1922097d252dc68a60102e9416ff2ec12849268f66f65de18eb69&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAEKV7U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICCzJSvSq5eHYHu9t4C06fuA0ERyqFcBYlOr4BTCHbokAiAmetI2Z16ExnpWiq9OhmpozXYhrKd3MW%2FmnTHlRlYBGCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiZ21wDsq5KH88D3CKtwDr5rr4cftuMWCyTu0kvfBMDgPk0ksmJvynYY2YXrcaCHr4dJ0HXLr7NUnrjTuITSse1a9h5J3kRyIU4IhPRcrV6hV1JnpuLhFwu4yoGhCu1%2FTghJ%2Bny6ctLUxXh9ZtQt43PUzzTdWh5LV7Asx8N%2FzowrqdCcg89I5CWDPt3VMx22KRqxk%2B1Cmayj1uA%2FPaRupRRCZnQ05izq1afDxSXiJwTgSTVgfhsrj0jmmS7SZeYuPhm4Mb%2F3MieaKI6oBpI%2BAN%2F7Yk4D%2Bh174%2BTEnrDcnjeMMzWn3JrFKiQQiBQrknoYq5avImUSckY9p9w3jDuVHKgSDrf9H35n5912uLRSkR%2FyQPFBwxByRaVbMy%2F%2BLtqGq85e0zwpcVKI0neOr2aRq0%2B%2Bbt2FX9MrvNJCHzBE5PlthyYYntOYmLSEuETbrHWwGI45P4VGDMcUUpiMSPGBtv5Z2nU2Ziv59h%2FVtntJP59TIsAmVqLP0qGwm%2BxNtkIIRbGoLPB1StNZvkOeZ%2FoaPuX9SXahBGDaZgDd9BrKP1YOnr4Yo7hmhvUE275cDEN%2BG%2FkEnKp739ffcAqPXL37AyythnZW6w3yZOftfBs04iddKTJycXdYuPka2vs7M2d%2B9VKUZHxjdDe%2FA88gwx6z9vQY6pgHtMrumBx4vGwdBm%2FfA8pQn8FiNZ7tUqvCOqEpSYjMoHkip9Wxc0xS2Rgg%2FghBiKXjmr0DnJp2ob6oODkc0o0dMpeVlM4ZG%2FdsiPXAiyqTCowouX%2BrZMGdjp0h38m15OI9gZpVP0AhzIzS4XpO%2FtRj%2BvcFr8BqCC%2BRKY9gDvAr7LVTidtXYLXVgqaCDSYbMXcTo%2FJuY00Ey2sVv1K1uDn%2BeSsbYoIcd&X-Amz-Signature=0c1e53a41b05073e85c5031e607bd3bfa8cb98dbfa106cca03611ea0cc238941&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAEKV7U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICCzJSvSq5eHYHu9t4C06fuA0ERyqFcBYlOr4BTCHbokAiAmetI2Z16ExnpWiq9OhmpozXYhrKd3MW%2FmnTHlRlYBGCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiZ21wDsq5KH88D3CKtwDr5rr4cftuMWCyTu0kvfBMDgPk0ksmJvynYY2YXrcaCHr4dJ0HXLr7NUnrjTuITSse1a9h5J3kRyIU4IhPRcrV6hV1JnpuLhFwu4yoGhCu1%2FTghJ%2Bny6ctLUxXh9ZtQt43PUzzTdWh5LV7Asx8N%2FzowrqdCcg89I5CWDPt3VMx22KRqxk%2B1Cmayj1uA%2FPaRupRRCZnQ05izq1afDxSXiJwTgSTVgfhsrj0jmmS7SZeYuPhm4Mb%2F3MieaKI6oBpI%2BAN%2F7Yk4D%2Bh174%2BTEnrDcnjeMMzWn3JrFKiQQiBQrknoYq5avImUSckY9p9w3jDuVHKgSDrf9H35n5912uLRSkR%2FyQPFBwxByRaVbMy%2F%2BLtqGq85e0zwpcVKI0neOr2aRq0%2B%2Bbt2FX9MrvNJCHzBE5PlthyYYntOYmLSEuETbrHWwGI45P4VGDMcUUpiMSPGBtv5Z2nU2Ziv59h%2FVtntJP59TIsAmVqLP0qGwm%2BxNtkIIRbGoLPB1StNZvkOeZ%2FoaPuX9SXahBGDaZgDd9BrKP1YOnr4Yo7hmhvUE275cDEN%2BG%2FkEnKp739ffcAqPXL37AyythnZW6w3yZOftfBs04iddKTJycXdYuPka2vs7M2d%2B9VKUZHxjdDe%2FA88gwx6z9vQY6pgHtMrumBx4vGwdBm%2FfA8pQn8FiNZ7tUqvCOqEpSYjMoHkip9Wxc0xS2Rgg%2FghBiKXjmr0DnJp2ob6oODkc0o0dMpeVlM4ZG%2FdsiPXAiyqTCowouX%2BrZMGdjp0h38m15OI9gZpVP0AhzIzS4XpO%2FtRj%2BvcFr8BqCC%2BRKY9gDvAr7LVTidtXYLXVgqaCDSYbMXcTo%2FJuY00Ey2sVv1K1uDn%2BeSsbYoIcd&X-Amz-Signature=18ba3178600d76198d2ba878296be418dc361dbd8541c96f003bb8bb2a209736&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
