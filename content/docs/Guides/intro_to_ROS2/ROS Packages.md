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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4RJ22K%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW6bizymiSxx8NVIGc%2BSnO5JpvRj%2BL75sDDOCTNfe2aAiAelbIClFDgbmPDR2xem%2BlLWXMMsWUBgFCYfok3Nw1sziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCpX9MWLlUL1eUx%2BKtwDIj1UqFhhOiTRuKZ3Bq72%2Bm85TrGebS9ez3x47TRiOImUEy6v3HY%2FXvi58B7M%2FHB764Xyd4cNpBMi46Vi2EwVnDnl3uZsKPoJZeZt%2BzQp1hsKr%2FY7u8TmhE%2BOg%2BgesqbiUuiEsBct2Olq3Z7oN78ooqfcm8q0t55HltctnvMW3SAG9h1R25B5kxbzRhvi0WAyFejxIX39yzYeN1v6cV6ORo9ie%2B9W13KPgLK7VJbeDEnzuL8IeYEtHGoTKoHj99dI0pq6g6lEWA61mVv23Ii5i%2F8PJmbz6W4GEsPvKuS8mSmz4HK55mgOJPGMZaRoRUaaSZOcCOlWfkkAmY%2BQ6X2YSPY6x5mehSSgHa8%2FQVg5vIw9fja6Z2mgLZtcHisHni9Fs3SXukWz6rowrbvPv7%2FZNGEYGypN1nfUIdxRxgGDztYuLteoQ7LdwSkIqKBdZrzDW2QHvuArz8mmk1rqfBCozsPLVSJ7F8Q%2FbqMP8IHkFxFbmbAu9B9f%2FJMNCHSQpMciZd9e2cp%2FfrBb3e2rCdC6XHLbG3pHf7lboOjo2GODWXr%2FB3SV1sOz0ySRHCw9HkxG0F0f9Kxa0q1nvrsnpdtojE%2BVOCrgcAuael09okJCikwcXaJeUGEjdnHvmGow6siuvQY6pgGSxu6%2By4Oj%2BjoOaWrQMbSjcUegedT%2FLc8Bh%2FdEP6wBZBUxn%2FYkFGvHQSOug5RBEqzs2wWWmSZj4uLwJLpe%2BKgG%2FWGJkQwefbxcBJSm5hobTTlAo1mHGiGJe71kKLTu%2F%2B3hAq3pJC6%2Bg1CA0%2BzfGwxeRGnUnEx87eYYAck8M5OBkFvs4gYWvhEfXyDCMKljyF7S1PnYbj07hVdBOh2R8C95wRhOgWqg&X-Amz-Signature=2d547c7d29bc308cf18de39db631710c2fef37c00cb4645310a8ef201b3b7d52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4RJ22K%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW6bizymiSxx8NVIGc%2BSnO5JpvRj%2BL75sDDOCTNfe2aAiAelbIClFDgbmPDR2xem%2BlLWXMMsWUBgFCYfok3Nw1sziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCpX9MWLlUL1eUx%2BKtwDIj1UqFhhOiTRuKZ3Bq72%2Bm85TrGebS9ez3x47TRiOImUEy6v3HY%2FXvi58B7M%2FHB764Xyd4cNpBMi46Vi2EwVnDnl3uZsKPoJZeZt%2BzQp1hsKr%2FY7u8TmhE%2BOg%2BgesqbiUuiEsBct2Olq3Z7oN78ooqfcm8q0t55HltctnvMW3SAG9h1R25B5kxbzRhvi0WAyFejxIX39yzYeN1v6cV6ORo9ie%2B9W13KPgLK7VJbeDEnzuL8IeYEtHGoTKoHj99dI0pq6g6lEWA61mVv23Ii5i%2F8PJmbz6W4GEsPvKuS8mSmz4HK55mgOJPGMZaRoRUaaSZOcCOlWfkkAmY%2BQ6X2YSPY6x5mehSSgHa8%2FQVg5vIw9fja6Z2mgLZtcHisHni9Fs3SXukWz6rowrbvPv7%2FZNGEYGypN1nfUIdxRxgGDztYuLteoQ7LdwSkIqKBdZrzDW2QHvuArz8mmk1rqfBCozsPLVSJ7F8Q%2FbqMP8IHkFxFbmbAu9B9f%2FJMNCHSQpMciZd9e2cp%2FfrBb3e2rCdC6XHLbG3pHf7lboOjo2GODWXr%2FB3SV1sOz0ySRHCw9HkxG0F0f9Kxa0q1nvrsnpdtojE%2BVOCrgcAuael09okJCikwcXaJeUGEjdnHvmGow6siuvQY6pgGSxu6%2By4Oj%2BjoOaWrQMbSjcUegedT%2FLc8Bh%2FdEP6wBZBUxn%2FYkFGvHQSOug5RBEqzs2wWWmSZj4uLwJLpe%2BKgG%2FWGJkQwefbxcBJSm5hobTTlAo1mHGiGJe71kKLTu%2F%2B3hAq3pJC6%2Bg1CA0%2BzfGwxeRGnUnEx87eYYAck8M5OBkFvs4gYWvhEfXyDCMKljyF7S1PnYbj07hVdBOh2R8C95wRhOgWqg&X-Amz-Signature=19c162df0e6cfc297fd7de00623d38308f4e481b42d12f9688bae781c76545de&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4RJ22K%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW6bizymiSxx8NVIGc%2BSnO5JpvRj%2BL75sDDOCTNfe2aAiAelbIClFDgbmPDR2xem%2BlLWXMMsWUBgFCYfok3Nw1sziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCpX9MWLlUL1eUx%2BKtwDIj1UqFhhOiTRuKZ3Bq72%2Bm85TrGebS9ez3x47TRiOImUEy6v3HY%2FXvi58B7M%2FHB764Xyd4cNpBMi46Vi2EwVnDnl3uZsKPoJZeZt%2BzQp1hsKr%2FY7u8TmhE%2BOg%2BgesqbiUuiEsBct2Olq3Z7oN78ooqfcm8q0t55HltctnvMW3SAG9h1R25B5kxbzRhvi0WAyFejxIX39yzYeN1v6cV6ORo9ie%2B9W13KPgLK7VJbeDEnzuL8IeYEtHGoTKoHj99dI0pq6g6lEWA61mVv23Ii5i%2F8PJmbz6W4GEsPvKuS8mSmz4HK55mgOJPGMZaRoRUaaSZOcCOlWfkkAmY%2BQ6X2YSPY6x5mehSSgHa8%2FQVg5vIw9fja6Z2mgLZtcHisHni9Fs3SXukWz6rowrbvPv7%2FZNGEYGypN1nfUIdxRxgGDztYuLteoQ7LdwSkIqKBdZrzDW2QHvuArz8mmk1rqfBCozsPLVSJ7F8Q%2FbqMP8IHkFxFbmbAu9B9f%2FJMNCHSQpMciZd9e2cp%2FfrBb3e2rCdC6XHLbG3pHf7lboOjo2GODWXr%2FB3SV1sOz0ySRHCw9HkxG0F0f9Kxa0q1nvrsnpdtojE%2BVOCrgcAuael09okJCikwcXaJeUGEjdnHvmGow6siuvQY6pgGSxu6%2By4Oj%2BjoOaWrQMbSjcUegedT%2FLc8Bh%2FdEP6wBZBUxn%2FYkFGvHQSOug5RBEqzs2wWWmSZj4uLwJLpe%2BKgG%2FWGJkQwefbxcBJSm5hobTTlAo1mHGiGJe71kKLTu%2F%2B3hAq3pJC6%2Bg1CA0%2BzfGwxeRGnUnEx87eYYAck8M5OBkFvs4gYWvhEfXyDCMKljyF7S1PnYbj07hVdBOh2R8C95wRhOgWqg&X-Amz-Signature=f39c2d5f8e22bfe9a7410a78dc06b13e8ad9d08666a89d738aa5634be6724c5a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4RJ22K%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW6bizymiSxx8NVIGc%2BSnO5JpvRj%2BL75sDDOCTNfe2aAiAelbIClFDgbmPDR2xem%2BlLWXMMsWUBgFCYfok3Nw1sziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCpX9MWLlUL1eUx%2BKtwDIj1UqFhhOiTRuKZ3Bq72%2Bm85TrGebS9ez3x47TRiOImUEy6v3HY%2FXvi58B7M%2FHB764Xyd4cNpBMi46Vi2EwVnDnl3uZsKPoJZeZt%2BzQp1hsKr%2FY7u8TmhE%2BOg%2BgesqbiUuiEsBct2Olq3Z7oN78ooqfcm8q0t55HltctnvMW3SAG9h1R25B5kxbzRhvi0WAyFejxIX39yzYeN1v6cV6ORo9ie%2B9W13KPgLK7VJbeDEnzuL8IeYEtHGoTKoHj99dI0pq6g6lEWA61mVv23Ii5i%2F8PJmbz6W4GEsPvKuS8mSmz4HK55mgOJPGMZaRoRUaaSZOcCOlWfkkAmY%2BQ6X2YSPY6x5mehSSgHa8%2FQVg5vIw9fja6Z2mgLZtcHisHni9Fs3SXukWz6rowrbvPv7%2FZNGEYGypN1nfUIdxRxgGDztYuLteoQ7LdwSkIqKBdZrzDW2QHvuArz8mmk1rqfBCozsPLVSJ7F8Q%2FbqMP8IHkFxFbmbAu9B9f%2FJMNCHSQpMciZd9e2cp%2FfrBb3e2rCdC6XHLbG3pHf7lboOjo2GODWXr%2FB3SV1sOz0ySRHCw9HkxG0F0f9Kxa0q1nvrsnpdtojE%2BVOCrgcAuael09okJCikwcXaJeUGEjdnHvmGow6siuvQY6pgGSxu6%2By4Oj%2BjoOaWrQMbSjcUegedT%2FLc8Bh%2FdEP6wBZBUxn%2FYkFGvHQSOug5RBEqzs2wWWmSZj4uLwJLpe%2BKgG%2FWGJkQwefbxcBJSm5hobTTlAo1mHGiGJe71kKLTu%2F%2B3hAq3pJC6%2Bg1CA0%2BzfGwxeRGnUnEx87eYYAck8M5OBkFvs4gYWvhEfXyDCMKljyF7S1PnYbj07hVdBOh2R8C95wRhOgWqg&X-Amz-Signature=2e6d6caeb099fbd90c769f5293351c6f409e855aacdcb04e1758093aad8adbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4RJ22K%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW6bizymiSxx8NVIGc%2BSnO5JpvRj%2BL75sDDOCTNfe2aAiAelbIClFDgbmPDR2xem%2BlLWXMMsWUBgFCYfok3Nw1sziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCpX9MWLlUL1eUx%2BKtwDIj1UqFhhOiTRuKZ3Bq72%2Bm85TrGebS9ez3x47TRiOImUEy6v3HY%2FXvi58B7M%2FHB764Xyd4cNpBMi46Vi2EwVnDnl3uZsKPoJZeZt%2BzQp1hsKr%2FY7u8TmhE%2BOg%2BgesqbiUuiEsBct2Olq3Z7oN78ooqfcm8q0t55HltctnvMW3SAG9h1R25B5kxbzRhvi0WAyFejxIX39yzYeN1v6cV6ORo9ie%2B9W13KPgLK7VJbeDEnzuL8IeYEtHGoTKoHj99dI0pq6g6lEWA61mVv23Ii5i%2F8PJmbz6W4GEsPvKuS8mSmz4HK55mgOJPGMZaRoRUaaSZOcCOlWfkkAmY%2BQ6X2YSPY6x5mehSSgHa8%2FQVg5vIw9fja6Z2mgLZtcHisHni9Fs3SXukWz6rowrbvPv7%2FZNGEYGypN1nfUIdxRxgGDztYuLteoQ7LdwSkIqKBdZrzDW2QHvuArz8mmk1rqfBCozsPLVSJ7F8Q%2FbqMP8IHkFxFbmbAu9B9f%2FJMNCHSQpMciZd9e2cp%2FfrBb3e2rCdC6XHLbG3pHf7lboOjo2GODWXr%2FB3SV1sOz0ySRHCw9HkxG0F0f9Kxa0q1nvrsnpdtojE%2BVOCrgcAuael09okJCikwcXaJeUGEjdnHvmGow6siuvQY6pgGSxu6%2By4Oj%2BjoOaWrQMbSjcUegedT%2FLc8Bh%2FdEP6wBZBUxn%2FYkFGvHQSOug5RBEqzs2wWWmSZj4uLwJLpe%2BKgG%2FWGJkQwefbxcBJSm5hobTTlAo1mHGiGJe71kKLTu%2F%2B3hAq3pJC6%2Bg1CA0%2BzfGwxeRGnUnEx87eYYAck8M5OBkFvs4gYWvhEfXyDCMKljyF7S1PnYbj07hVdBOh2R8C95wRhOgWqg&X-Amz-Signature=916bb6b17d71a85eca49052b8c4be0a6f6eed24ba02fbea28d3a8da0c37cc3e3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4RJ22K%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW6bizymiSxx8NVIGc%2BSnO5JpvRj%2BL75sDDOCTNfe2aAiAelbIClFDgbmPDR2xem%2BlLWXMMsWUBgFCYfok3Nw1sziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCpX9MWLlUL1eUx%2BKtwDIj1UqFhhOiTRuKZ3Bq72%2Bm85TrGebS9ez3x47TRiOImUEy6v3HY%2FXvi58B7M%2FHB764Xyd4cNpBMi46Vi2EwVnDnl3uZsKPoJZeZt%2BzQp1hsKr%2FY7u8TmhE%2BOg%2BgesqbiUuiEsBct2Olq3Z7oN78ooqfcm8q0t55HltctnvMW3SAG9h1R25B5kxbzRhvi0WAyFejxIX39yzYeN1v6cV6ORo9ie%2B9W13KPgLK7VJbeDEnzuL8IeYEtHGoTKoHj99dI0pq6g6lEWA61mVv23Ii5i%2F8PJmbz6W4GEsPvKuS8mSmz4HK55mgOJPGMZaRoRUaaSZOcCOlWfkkAmY%2BQ6X2YSPY6x5mehSSgHa8%2FQVg5vIw9fja6Z2mgLZtcHisHni9Fs3SXukWz6rowrbvPv7%2FZNGEYGypN1nfUIdxRxgGDztYuLteoQ7LdwSkIqKBdZrzDW2QHvuArz8mmk1rqfBCozsPLVSJ7F8Q%2FbqMP8IHkFxFbmbAu9B9f%2FJMNCHSQpMciZd9e2cp%2FfrBb3e2rCdC6XHLbG3pHf7lboOjo2GODWXr%2FB3SV1sOz0ySRHCw9HkxG0F0f9Kxa0q1nvrsnpdtojE%2BVOCrgcAuael09okJCikwcXaJeUGEjdnHvmGow6siuvQY6pgGSxu6%2By4Oj%2BjoOaWrQMbSjcUegedT%2FLc8Bh%2FdEP6wBZBUxn%2FYkFGvHQSOug5RBEqzs2wWWmSZj4uLwJLpe%2BKgG%2FWGJkQwefbxcBJSm5hobTTlAo1mHGiGJe71kKLTu%2F%2B3hAq3pJC6%2Bg1CA0%2BzfGwxeRGnUnEx87eYYAck8M5OBkFvs4gYWvhEfXyDCMKljyF7S1PnYbj07hVdBOh2R8C95wRhOgWqg&X-Amz-Signature=f53753c3c9dcded11cb6725dc0aab4fe3f12742ebf85c7e5967d869ebd9a3fb0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4RJ22K%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW6bizymiSxx8NVIGc%2BSnO5JpvRj%2BL75sDDOCTNfe2aAiAelbIClFDgbmPDR2xem%2BlLWXMMsWUBgFCYfok3Nw1sziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCpX9MWLlUL1eUx%2BKtwDIj1UqFhhOiTRuKZ3Bq72%2Bm85TrGebS9ez3x47TRiOImUEy6v3HY%2FXvi58B7M%2FHB764Xyd4cNpBMi46Vi2EwVnDnl3uZsKPoJZeZt%2BzQp1hsKr%2FY7u8TmhE%2BOg%2BgesqbiUuiEsBct2Olq3Z7oN78ooqfcm8q0t55HltctnvMW3SAG9h1R25B5kxbzRhvi0WAyFejxIX39yzYeN1v6cV6ORo9ie%2B9W13KPgLK7VJbeDEnzuL8IeYEtHGoTKoHj99dI0pq6g6lEWA61mVv23Ii5i%2F8PJmbz6W4GEsPvKuS8mSmz4HK55mgOJPGMZaRoRUaaSZOcCOlWfkkAmY%2BQ6X2YSPY6x5mehSSgHa8%2FQVg5vIw9fja6Z2mgLZtcHisHni9Fs3SXukWz6rowrbvPv7%2FZNGEYGypN1nfUIdxRxgGDztYuLteoQ7LdwSkIqKBdZrzDW2QHvuArz8mmk1rqfBCozsPLVSJ7F8Q%2FbqMP8IHkFxFbmbAu9B9f%2FJMNCHSQpMciZd9e2cp%2FfrBb3e2rCdC6XHLbG3pHf7lboOjo2GODWXr%2FB3SV1sOz0ySRHCw9HkxG0F0f9Kxa0q1nvrsnpdtojE%2BVOCrgcAuael09okJCikwcXaJeUGEjdnHvmGow6siuvQY6pgGSxu6%2By4Oj%2BjoOaWrQMbSjcUegedT%2FLc8Bh%2FdEP6wBZBUxn%2FYkFGvHQSOug5RBEqzs2wWWmSZj4uLwJLpe%2BKgG%2FWGJkQwefbxcBJSm5hobTTlAo1mHGiGJe71kKLTu%2F%2B3hAq3pJC6%2Bg1CA0%2BzfGwxeRGnUnEx87eYYAck8M5OBkFvs4gYWvhEfXyDCMKljyF7S1PnYbj07hVdBOh2R8C95wRhOgWqg&X-Amz-Signature=f841891d4527b482051623e99b28a4b4c9571cce59f84df765b7840a64c13a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
