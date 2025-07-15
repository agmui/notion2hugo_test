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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H4SVAT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICCuhHbuX8mcjCAyuuiB5PhylVn4%2BpO5QFl%2Fi77ORywhAiB8yXOJ2ZBtWTS%2Fm2PTetTqsg8XMUvsG%2Buv%2BavYc5Rwkir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOibETDkSpx9N3LJvKtwD52Hl7Yq8jSadcyTIgUB9J6fuVINoJjFdBoKIBhndOz4uQVP7rbfVR03W1iNhvX2FBzMfcAu0hK9ByEtKkMI%2BWguB7gnBtPl37l5WPDnBiPWm%2BVPLyJRZnlpUvV0bNd2yhXwBP6IMhcSf9lFixoLrFV86csVBZ%2B%2Fiy%2Bph8nZWCjP3ituOrouYooLefPIJOXpVVZ8M%2BMvDc4vpdt9kpFZqJT5wNaOYapH1no%2BC6CIf6jbukylTzGCM9hk8kRK9n8%2FVVO1rUg4o79BRpJtMMQ1hdgerYIZADk9c%2FEHkYXRiLPfvPQDDc%2BNiV4uXIqJPfDkKIycvKAC2SxN5gxjRRnRkwssVIf3j5gzuqpmFAAzgQbwlvN%2FZODHnoc7kMjkWVd3rpYtMpKvUx8bxkghL2HOl0Q%2B37LDWGhI3LmojgQjRfTyllDoWLw%2BIiqYcOjnKU45p6n7PixWFMnCVvMK8tY7QBnCSnbTjWmhp0TcnUXKgZDPCI%2FsnkAIDlk%2FWH7%2FNClQjq3ZKg4Cp9fkLXu8teKfuGvK4AQtAExdKTSt1FG%2F%2BnhM9lnrdy84YUQ7CBuDZ4%2F9Emd6nJUu%2FM8%2FP97hIpc8WzBnwtnPsrOnfYJQYYavLMaNrxclPmCTsJbqBvSIw9KnXwwY6pgEkh4C8321iROnhSZ%2BDhnVMWbqrA4LoQbktrWIL15HL%2Fel1gZBGo25uxRUtxpzf6cCQzmEDAmIEbQj76iFurWV4bEc3st5JXiQuk2Xhu5NwJsQ8COZLVyk4egNA1SGYMWm3DnAlmikCeciLetWYPAxrBhY%2B9Akw1chNj5ApG5ZNiedzZJo4sUcgooSN5sKeA8SR8SkAaxlDZehYWVJdQVJM8jQbl0Hm&X-Amz-Signature=9ab97ba693e57b87ba0f601da702442be0405cab429bcd8c8d9fb90b530b001e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H4SVAT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICCuhHbuX8mcjCAyuuiB5PhylVn4%2BpO5QFl%2Fi77ORywhAiB8yXOJ2ZBtWTS%2Fm2PTetTqsg8XMUvsG%2Buv%2BavYc5Rwkir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOibETDkSpx9N3LJvKtwD52Hl7Yq8jSadcyTIgUB9J6fuVINoJjFdBoKIBhndOz4uQVP7rbfVR03W1iNhvX2FBzMfcAu0hK9ByEtKkMI%2BWguB7gnBtPl37l5WPDnBiPWm%2BVPLyJRZnlpUvV0bNd2yhXwBP6IMhcSf9lFixoLrFV86csVBZ%2B%2Fiy%2Bph8nZWCjP3ituOrouYooLefPIJOXpVVZ8M%2BMvDc4vpdt9kpFZqJT5wNaOYapH1no%2BC6CIf6jbukylTzGCM9hk8kRK9n8%2FVVO1rUg4o79BRpJtMMQ1hdgerYIZADk9c%2FEHkYXRiLPfvPQDDc%2BNiV4uXIqJPfDkKIycvKAC2SxN5gxjRRnRkwssVIf3j5gzuqpmFAAzgQbwlvN%2FZODHnoc7kMjkWVd3rpYtMpKvUx8bxkghL2HOl0Q%2B37LDWGhI3LmojgQjRfTyllDoWLw%2BIiqYcOjnKU45p6n7PixWFMnCVvMK8tY7QBnCSnbTjWmhp0TcnUXKgZDPCI%2FsnkAIDlk%2FWH7%2FNClQjq3ZKg4Cp9fkLXu8teKfuGvK4AQtAExdKTSt1FG%2F%2BnhM9lnrdy84YUQ7CBuDZ4%2F9Emd6nJUu%2FM8%2FP97hIpc8WzBnwtnPsrOnfYJQYYavLMaNrxclPmCTsJbqBvSIw9KnXwwY6pgEkh4C8321iROnhSZ%2BDhnVMWbqrA4LoQbktrWIL15HL%2Fel1gZBGo25uxRUtxpzf6cCQzmEDAmIEbQj76iFurWV4bEc3st5JXiQuk2Xhu5NwJsQ8COZLVyk4egNA1SGYMWm3DnAlmikCeciLetWYPAxrBhY%2B9Akw1chNj5ApG5ZNiedzZJo4sUcgooSN5sKeA8SR8SkAaxlDZehYWVJdQVJM8jQbl0Hm&X-Amz-Signature=bf05d0b0d12fd600a631498574b5751ec295fa330f77f14f95db60e50713cad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H4SVAT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICCuhHbuX8mcjCAyuuiB5PhylVn4%2BpO5QFl%2Fi77ORywhAiB8yXOJ2ZBtWTS%2Fm2PTetTqsg8XMUvsG%2Buv%2BavYc5Rwkir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOibETDkSpx9N3LJvKtwD52Hl7Yq8jSadcyTIgUB9J6fuVINoJjFdBoKIBhndOz4uQVP7rbfVR03W1iNhvX2FBzMfcAu0hK9ByEtKkMI%2BWguB7gnBtPl37l5WPDnBiPWm%2BVPLyJRZnlpUvV0bNd2yhXwBP6IMhcSf9lFixoLrFV86csVBZ%2B%2Fiy%2Bph8nZWCjP3ituOrouYooLefPIJOXpVVZ8M%2BMvDc4vpdt9kpFZqJT5wNaOYapH1no%2BC6CIf6jbukylTzGCM9hk8kRK9n8%2FVVO1rUg4o79BRpJtMMQ1hdgerYIZADk9c%2FEHkYXRiLPfvPQDDc%2BNiV4uXIqJPfDkKIycvKAC2SxN5gxjRRnRkwssVIf3j5gzuqpmFAAzgQbwlvN%2FZODHnoc7kMjkWVd3rpYtMpKvUx8bxkghL2HOl0Q%2B37LDWGhI3LmojgQjRfTyllDoWLw%2BIiqYcOjnKU45p6n7PixWFMnCVvMK8tY7QBnCSnbTjWmhp0TcnUXKgZDPCI%2FsnkAIDlk%2FWH7%2FNClQjq3ZKg4Cp9fkLXu8teKfuGvK4AQtAExdKTSt1FG%2F%2BnhM9lnrdy84YUQ7CBuDZ4%2F9Emd6nJUu%2FM8%2FP97hIpc8WzBnwtnPsrOnfYJQYYavLMaNrxclPmCTsJbqBvSIw9KnXwwY6pgEkh4C8321iROnhSZ%2BDhnVMWbqrA4LoQbktrWIL15HL%2Fel1gZBGo25uxRUtxpzf6cCQzmEDAmIEbQj76iFurWV4bEc3st5JXiQuk2Xhu5NwJsQ8COZLVyk4egNA1SGYMWm3DnAlmikCeciLetWYPAxrBhY%2B9Akw1chNj5ApG5ZNiedzZJo4sUcgooSN5sKeA8SR8SkAaxlDZehYWVJdQVJM8jQbl0Hm&X-Amz-Signature=09aabbcfd5461e2ff4200ab41d83a45e71d5cd2bcb51ac0b33ebb9c4fec7af36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H4SVAT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICCuhHbuX8mcjCAyuuiB5PhylVn4%2BpO5QFl%2Fi77ORywhAiB8yXOJ2ZBtWTS%2Fm2PTetTqsg8XMUvsG%2Buv%2BavYc5Rwkir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOibETDkSpx9N3LJvKtwD52Hl7Yq8jSadcyTIgUB9J6fuVINoJjFdBoKIBhndOz4uQVP7rbfVR03W1iNhvX2FBzMfcAu0hK9ByEtKkMI%2BWguB7gnBtPl37l5WPDnBiPWm%2BVPLyJRZnlpUvV0bNd2yhXwBP6IMhcSf9lFixoLrFV86csVBZ%2B%2Fiy%2Bph8nZWCjP3ituOrouYooLefPIJOXpVVZ8M%2BMvDc4vpdt9kpFZqJT5wNaOYapH1no%2BC6CIf6jbukylTzGCM9hk8kRK9n8%2FVVO1rUg4o79BRpJtMMQ1hdgerYIZADk9c%2FEHkYXRiLPfvPQDDc%2BNiV4uXIqJPfDkKIycvKAC2SxN5gxjRRnRkwssVIf3j5gzuqpmFAAzgQbwlvN%2FZODHnoc7kMjkWVd3rpYtMpKvUx8bxkghL2HOl0Q%2B37LDWGhI3LmojgQjRfTyllDoWLw%2BIiqYcOjnKU45p6n7PixWFMnCVvMK8tY7QBnCSnbTjWmhp0TcnUXKgZDPCI%2FsnkAIDlk%2FWH7%2FNClQjq3ZKg4Cp9fkLXu8teKfuGvK4AQtAExdKTSt1FG%2F%2BnhM9lnrdy84YUQ7CBuDZ4%2F9Emd6nJUu%2FM8%2FP97hIpc8WzBnwtnPsrOnfYJQYYavLMaNrxclPmCTsJbqBvSIw9KnXwwY6pgEkh4C8321iROnhSZ%2BDhnVMWbqrA4LoQbktrWIL15HL%2Fel1gZBGo25uxRUtxpzf6cCQzmEDAmIEbQj76iFurWV4bEc3st5JXiQuk2Xhu5NwJsQ8COZLVyk4egNA1SGYMWm3DnAlmikCeciLetWYPAxrBhY%2B9Akw1chNj5ApG5ZNiedzZJo4sUcgooSN5sKeA8SR8SkAaxlDZehYWVJdQVJM8jQbl0Hm&X-Amz-Signature=4ad822f041581e937696369fce66c57b0b44eab5fdef163da37119135fffc90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H4SVAT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICCuhHbuX8mcjCAyuuiB5PhylVn4%2BpO5QFl%2Fi77ORywhAiB8yXOJ2ZBtWTS%2Fm2PTetTqsg8XMUvsG%2Buv%2BavYc5Rwkir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOibETDkSpx9N3LJvKtwD52Hl7Yq8jSadcyTIgUB9J6fuVINoJjFdBoKIBhndOz4uQVP7rbfVR03W1iNhvX2FBzMfcAu0hK9ByEtKkMI%2BWguB7gnBtPl37l5WPDnBiPWm%2BVPLyJRZnlpUvV0bNd2yhXwBP6IMhcSf9lFixoLrFV86csVBZ%2B%2Fiy%2Bph8nZWCjP3ituOrouYooLefPIJOXpVVZ8M%2BMvDc4vpdt9kpFZqJT5wNaOYapH1no%2BC6CIf6jbukylTzGCM9hk8kRK9n8%2FVVO1rUg4o79BRpJtMMQ1hdgerYIZADk9c%2FEHkYXRiLPfvPQDDc%2BNiV4uXIqJPfDkKIycvKAC2SxN5gxjRRnRkwssVIf3j5gzuqpmFAAzgQbwlvN%2FZODHnoc7kMjkWVd3rpYtMpKvUx8bxkghL2HOl0Q%2B37LDWGhI3LmojgQjRfTyllDoWLw%2BIiqYcOjnKU45p6n7PixWFMnCVvMK8tY7QBnCSnbTjWmhp0TcnUXKgZDPCI%2FsnkAIDlk%2FWH7%2FNClQjq3ZKg4Cp9fkLXu8teKfuGvK4AQtAExdKTSt1FG%2F%2BnhM9lnrdy84YUQ7CBuDZ4%2F9Emd6nJUu%2FM8%2FP97hIpc8WzBnwtnPsrOnfYJQYYavLMaNrxclPmCTsJbqBvSIw9KnXwwY6pgEkh4C8321iROnhSZ%2BDhnVMWbqrA4LoQbktrWIL15HL%2Fel1gZBGo25uxRUtxpzf6cCQzmEDAmIEbQj76iFurWV4bEc3st5JXiQuk2Xhu5NwJsQ8COZLVyk4egNA1SGYMWm3DnAlmikCeciLetWYPAxrBhY%2B9Akw1chNj5ApG5ZNiedzZJo4sUcgooSN5sKeA8SR8SkAaxlDZehYWVJdQVJM8jQbl0Hm&X-Amz-Signature=af538bda453e1e09f874d8b7da02b050c2ff59dbe663c8b7f8099aae0f20a4a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H4SVAT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICCuhHbuX8mcjCAyuuiB5PhylVn4%2BpO5QFl%2Fi77ORywhAiB8yXOJ2ZBtWTS%2Fm2PTetTqsg8XMUvsG%2Buv%2BavYc5Rwkir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOibETDkSpx9N3LJvKtwD52Hl7Yq8jSadcyTIgUB9J6fuVINoJjFdBoKIBhndOz4uQVP7rbfVR03W1iNhvX2FBzMfcAu0hK9ByEtKkMI%2BWguB7gnBtPl37l5WPDnBiPWm%2BVPLyJRZnlpUvV0bNd2yhXwBP6IMhcSf9lFixoLrFV86csVBZ%2B%2Fiy%2Bph8nZWCjP3ituOrouYooLefPIJOXpVVZ8M%2BMvDc4vpdt9kpFZqJT5wNaOYapH1no%2BC6CIf6jbukylTzGCM9hk8kRK9n8%2FVVO1rUg4o79BRpJtMMQ1hdgerYIZADk9c%2FEHkYXRiLPfvPQDDc%2BNiV4uXIqJPfDkKIycvKAC2SxN5gxjRRnRkwssVIf3j5gzuqpmFAAzgQbwlvN%2FZODHnoc7kMjkWVd3rpYtMpKvUx8bxkghL2HOl0Q%2B37LDWGhI3LmojgQjRfTyllDoWLw%2BIiqYcOjnKU45p6n7PixWFMnCVvMK8tY7QBnCSnbTjWmhp0TcnUXKgZDPCI%2FsnkAIDlk%2FWH7%2FNClQjq3ZKg4Cp9fkLXu8teKfuGvK4AQtAExdKTSt1FG%2F%2BnhM9lnrdy84YUQ7CBuDZ4%2F9Emd6nJUu%2FM8%2FP97hIpc8WzBnwtnPsrOnfYJQYYavLMaNrxclPmCTsJbqBvSIw9KnXwwY6pgEkh4C8321iROnhSZ%2BDhnVMWbqrA4LoQbktrWIL15HL%2Fel1gZBGo25uxRUtxpzf6cCQzmEDAmIEbQj76iFurWV4bEc3st5JXiQuk2Xhu5NwJsQ8COZLVyk4egNA1SGYMWm3DnAlmikCeciLetWYPAxrBhY%2B9Akw1chNj5ApG5ZNiedzZJo4sUcgooSN5sKeA8SR8SkAaxlDZehYWVJdQVJM8jQbl0Hm&X-Amz-Signature=bda3c9390f83ee68bd4fd496b182abfbf1018c88e7f859c4f5ee6e3010b124c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H4SVAT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICCuhHbuX8mcjCAyuuiB5PhylVn4%2BpO5QFl%2Fi77ORywhAiB8yXOJ2ZBtWTS%2Fm2PTetTqsg8XMUvsG%2Buv%2BavYc5Rwkir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOibETDkSpx9N3LJvKtwD52Hl7Yq8jSadcyTIgUB9J6fuVINoJjFdBoKIBhndOz4uQVP7rbfVR03W1iNhvX2FBzMfcAu0hK9ByEtKkMI%2BWguB7gnBtPl37l5WPDnBiPWm%2BVPLyJRZnlpUvV0bNd2yhXwBP6IMhcSf9lFixoLrFV86csVBZ%2B%2Fiy%2Bph8nZWCjP3ituOrouYooLefPIJOXpVVZ8M%2BMvDc4vpdt9kpFZqJT5wNaOYapH1no%2BC6CIf6jbukylTzGCM9hk8kRK9n8%2FVVO1rUg4o79BRpJtMMQ1hdgerYIZADk9c%2FEHkYXRiLPfvPQDDc%2BNiV4uXIqJPfDkKIycvKAC2SxN5gxjRRnRkwssVIf3j5gzuqpmFAAzgQbwlvN%2FZODHnoc7kMjkWVd3rpYtMpKvUx8bxkghL2HOl0Q%2B37LDWGhI3LmojgQjRfTyllDoWLw%2BIiqYcOjnKU45p6n7PixWFMnCVvMK8tY7QBnCSnbTjWmhp0TcnUXKgZDPCI%2FsnkAIDlk%2FWH7%2FNClQjq3ZKg4Cp9fkLXu8teKfuGvK4AQtAExdKTSt1FG%2F%2BnhM9lnrdy84YUQ7CBuDZ4%2F9Emd6nJUu%2FM8%2FP97hIpc8WzBnwtnPsrOnfYJQYYavLMaNrxclPmCTsJbqBvSIw9KnXwwY6pgEkh4C8321iROnhSZ%2BDhnVMWbqrA4LoQbktrWIL15HL%2Fel1gZBGo25uxRUtxpzf6cCQzmEDAmIEbQj76iFurWV4bEc3st5JXiQuk2Xhu5NwJsQ8COZLVyk4egNA1SGYMWm3DnAlmikCeciLetWYPAxrBhY%2B9Akw1chNj5ApG5ZNiedzZJo4sUcgooSN5sKeA8SR8SkAaxlDZehYWVJdQVJM8jQbl0Hm&X-Amz-Signature=bf76650df84f64e2e92b86674e2d6b9e143a36577a25245efd943efcd9db84ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
