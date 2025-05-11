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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5BTX5M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGIpztvrtdLoE7nKv5GsmpysrBMZ72zBY6cE5cEc1TQbAiBJ7m%2FZWvqYNDrb9ybAsogQipSfK%2FrFwlvc%2FOZ3hRR%2B9CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42gn%2FKD3Id4FSUnYKtwD%2BePvG1CNowebfm8ffeEGEFr6sdKhy2aeJxPQtrLiLJWUs5b%2BThMBJhbitxHijEx6SEqpSVJ5EVelMlskAvhBGzAhjwGJ%2BSWO2Sqlmcyg8cpEhItIZRixCjWqqUb6SuIThnxQ6Aakk1y2ZNVb5Psm7LhfnH2eotVVJiQ2LUMmMOwrEkm3KH7oEgT0A50OZQtZuSsBME5l%2BHQHhm8rB4Yfy1jc9QmcwpXtBt%2BGhhLverKIEonTh4xXlY8Z5j2oIgiZtTHbCAD7skPlO9vNFNeXWVBKcDeBrpg8CAFez8%2BGigSBVZzNkTu4m84CRROQD3aeX4d0ZDS96w0hcfkwNF%2F7q33%2BK4zS2urUuH6oC48VZZpK897eEsKT0aPi%2BewNkl0hgfCf5CIh5F0Pk7Zui0GToE59XfKs2U8%2BPUT5D4M1cEik9EaiHMK%2FDSSXBsahgS9vgL312cCyTK5qSUCNE31qhFzb4i%2FPxIcBpUs901XRJjoh%2F7WNubvUQVBpiNE5ByFmeFYH6wDsebKkAx2CEx6vHvW5jN%2FPl1wfTlFxoxCee4JNyJ2nBEH4waNQW6TMEgzBpXWwUiQqF4ns3P83%2Fjd%2ByAFyUkotrsbDmERe9xuhMs7P0xh19wifwt4dDyww%2BMOAwQY6pgFpiTk5b5Nbz1L3pguB1K70XNAWN7tGjKVllPLIwv0Zr1sD0ZF4PblfJ8uHgniyt16h00AjaTSzkDtdun%2Bj%2BoaZPHxEmUhAzaUv8iiIL%2Br6OdV9WXQ9nk47i9an8oyuhc8Pat%2FzhEKZC8c7iKNdDV0SWay9HJz6xnIzdR33JkW4z2VSdh%2F54o5ESmFC0%2F1cpK5UxPAT3smPRXJ98IyuUFT1xl5a2QKt&X-Amz-Signature=23fb0f5be4a3e258413e1ed1005b2c4994473c7e300561bd0204f9ea3eec70ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5BTX5M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGIpztvrtdLoE7nKv5GsmpysrBMZ72zBY6cE5cEc1TQbAiBJ7m%2FZWvqYNDrb9ybAsogQipSfK%2FrFwlvc%2FOZ3hRR%2B9CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42gn%2FKD3Id4FSUnYKtwD%2BePvG1CNowebfm8ffeEGEFr6sdKhy2aeJxPQtrLiLJWUs5b%2BThMBJhbitxHijEx6SEqpSVJ5EVelMlskAvhBGzAhjwGJ%2BSWO2Sqlmcyg8cpEhItIZRixCjWqqUb6SuIThnxQ6Aakk1y2ZNVb5Psm7LhfnH2eotVVJiQ2LUMmMOwrEkm3KH7oEgT0A50OZQtZuSsBME5l%2BHQHhm8rB4Yfy1jc9QmcwpXtBt%2BGhhLverKIEonTh4xXlY8Z5j2oIgiZtTHbCAD7skPlO9vNFNeXWVBKcDeBrpg8CAFez8%2BGigSBVZzNkTu4m84CRROQD3aeX4d0ZDS96w0hcfkwNF%2F7q33%2BK4zS2urUuH6oC48VZZpK897eEsKT0aPi%2BewNkl0hgfCf5CIh5F0Pk7Zui0GToE59XfKs2U8%2BPUT5D4M1cEik9EaiHMK%2FDSSXBsahgS9vgL312cCyTK5qSUCNE31qhFzb4i%2FPxIcBpUs901XRJjoh%2F7WNubvUQVBpiNE5ByFmeFYH6wDsebKkAx2CEx6vHvW5jN%2FPl1wfTlFxoxCee4JNyJ2nBEH4waNQW6TMEgzBpXWwUiQqF4ns3P83%2Fjd%2ByAFyUkotrsbDmERe9xuhMs7P0xh19wifwt4dDyww%2BMOAwQY6pgFpiTk5b5Nbz1L3pguB1K70XNAWN7tGjKVllPLIwv0Zr1sD0ZF4PblfJ8uHgniyt16h00AjaTSzkDtdun%2Bj%2BoaZPHxEmUhAzaUv8iiIL%2Br6OdV9WXQ9nk47i9an8oyuhc8Pat%2FzhEKZC8c7iKNdDV0SWay9HJz6xnIzdR33JkW4z2VSdh%2F54o5ESmFC0%2F1cpK5UxPAT3smPRXJ98IyuUFT1xl5a2QKt&X-Amz-Signature=7a9f20a68426c36c670453ea36f49fabe390af4f2b3cf228141a7293bd03b0ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5BTX5M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGIpztvrtdLoE7nKv5GsmpysrBMZ72zBY6cE5cEc1TQbAiBJ7m%2FZWvqYNDrb9ybAsogQipSfK%2FrFwlvc%2FOZ3hRR%2B9CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42gn%2FKD3Id4FSUnYKtwD%2BePvG1CNowebfm8ffeEGEFr6sdKhy2aeJxPQtrLiLJWUs5b%2BThMBJhbitxHijEx6SEqpSVJ5EVelMlskAvhBGzAhjwGJ%2BSWO2Sqlmcyg8cpEhItIZRixCjWqqUb6SuIThnxQ6Aakk1y2ZNVb5Psm7LhfnH2eotVVJiQ2LUMmMOwrEkm3KH7oEgT0A50OZQtZuSsBME5l%2BHQHhm8rB4Yfy1jc9QmcwpXtBt%2BGhhLverKIEonTh4xXlY8Z5j2oIgiZtTHbCAD7skPlO9vNFNeXWVBKcDeBrpg8CAFez8%2BGigSBVZzNkTu4m84CRROQD3aeX4d0ZDS96w0hcfkwNF%2F7q33%2BK4zS2urUuH6oC48VZZpK897eEsKT0aPi%2BewNkl0hgfCf5CIh5F0Pk7Zui0GToE59XfKs2U8%2BPUT5D4M1cEik9EaiHMK%2FDSSXBsahgS9vgL312cCyTK5qSUCNE31qhFzb4i%2FPxIcBpUs901XRJjoh%2F7WNubvUQVBpiNE5ByFmeFYH6wDsebKkAx2CEx6vHvW5jN%2FPl1wfTlFxoxCee4JNyJ2nBEH4waNQW6TMEgzBpXWwUiQqF4ns3P83%2Fjd%2ByAFyUkotrsbDmERe9xuhMs7P0xh19wifwt4dDyww%2BMOAwQY6pgFpiTk5b5Nbz1L3pguB1K70XNAWN7tGjKVllPLIwv0Zr1sD0ZF4PblfJ8uHgniyt16h00AjaTSzkDtdun%2Bj%2BoaZPHxEmUhAzaUv8iiIL%2Br6OdV9WXQ9nk47i9an8oyuhc8Pat%2FzhEKZC8c7iKNdDV0SWay9HJz6xnIzdR33JkW4z2VSdh%2F54o5ESmFC0%2F1cpK5UxPAT3smPRXJ98IyuUFT1xl5a2QKt&X-Amz-Signature=a5b338e219cb11a2369e2ff1518bfb68af89f3e2ac2273157ed0e79a6844ca95&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5BTX5M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGIpztvrtdLoE7nKv5GsmpysrBMZ72zBY6cE5cEc1TQbAiBJ7m%2FZWvqYNDrb9ybAsogQipSfK%2FrFwlvc%2FOZ3hRR%2B9CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42gn%2FKD3Id4FSUnYKtwD%2BePvG1CNowebfm8ffeEGEFr6sdKhy2aeJxPQtrLiLJWUs5b%2BThMBJhbitxHijEx6SEqpSVJ5EVelMlskAvhBGzAhjwGJ%2BSWO2Sqlmcyg8cpEhItIZRixCjWqqUb6SuIThnxQ6Aakk1y2ZNVb5Psm7LhfnH2eotVVJiQ2LUMmMOwrEkm3KH7oEgT0A50OZQtZuSsBME5l%2BHQHhm8rB4Yfy1jc9QmcwpXtBt%2BGhhLverKIEonTh4xXlY8Z5j2oIgiZtTHbCAD7skPlO9vNFNeXWVBKcDeBrpg8CAFez8%2BGigSBVZzNkTu4m84CRROQD3aeX4d0ZDS96w0hcfkwNF%2F7q33%2BK4zS2urUuH6oC48VZZpK897eEsKT0aPi%2BewNkl0hgfCf5CIh5F0Pk7Zui0GToE59XfKs2U8%2BPUT5D4M1cEik9EaiHMK%2FDSSXBsahgS9vgL312cCyTK5qSUCNE31qhFzb4i%2FPxIcBpUs901XRJjoh%2F7WNubvUQVBpiNE5ByFmeFYH6wDsebKkAx2CEx6vHvW5jN%2FPl1wfTlFxoxCee4JNyJ2nBEH4waNQW6TMEgzBpXWwUiQqF4ns3P83%2Fjd%2ByAFyUkotrsbDmERe9xuhMs7P0xh19wifwt4dDyww%2BMOAwQY6pgFpiTk5b5Nbz1L3pguB1K70XNAWN7tGjKVllPLIwv0Zr1sD0ZF4PblfJ8uHgniyt16h00AjaTSzkDtdun%2Bj%2BoaZPHxEmUhAzaUv8iiIL%2Br6OdV9WXQ9nk47i9an8oyuhc8Pat%2FzhEKZC8c7iKNdDV0SWay9HJz6xnIzdR33JkW4z2VSdh%2F54o5ESmFC0%2F1cpK5UxPAT3smPRXJ98IyuUFT1xl5a2QKt&X-Amz-Signature=6b9a14ad93a2b33c3ce308cd6da6fb500d34225805cf63604a34975969608491&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5BTX5M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGIpztvrtdLoE7nKv5GsmpysrBMZ72zBY6cE5cEc1TQbAiBJ7m%2FZWvqYNDrb9ybAsogQipSfK%2FrFwlvc%2FOZ3hRR%2B9CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42gn%2FKD3Id4FSUnYKtwD%2BePvG1CNowebfm8ffeEGEFr6sdKhy2aeJxPQtrLiLJWUs5b%2BThMBJhbitxHijEx6SEqpSVJ5EVelMlskAvhBGzAhjwGJ%2BSWO2Sqlmcyg8cpEhItIZRixCjWqqUb6SuIThnxQ6Aakk1y2ZNVb5Psm7LhfnH2eotVVJiQ2LUMmMOwrEkm3KH7oEgT0A50OZQtZuSsBME5l%2BHQHhm8rB4Yfy1jc9QmcwpXtBt%2BGhhLverKIEonTh4xXlY8Z5j2oIgiZtTHbCAD7skPlO9vNFNeXWVBKcDeBrpg8CAFez8%2BGigSBVZzNkTu4m84CRROQD3aeX4d0ZDS96w0hcfkwNF%2F7q33%2BK4zS2urUuH6oC48VZZpK897eEsKT0aPi%2BewNkl0hgfCf5CIh5F0Pk7Zui0GToE59XfKs2U8%2BPUT5D4M1cEik9EaiHMK%2FDSSXBsahgS9vgL312cCyTK5qSUCNE31qhFzb4i%2FPxIcBpUs901XRJjoh%2F7WNubvUQVBpiNE5ByFmeFYH6wDsebKkAx2CEx6vHvW5jN%2FPl1wfTlFxoxCee4JNyJ2nBEH4waNQW6TMEgzBpXWwUiQqF4ns3P83%2Fjd%2ByAFyUkotrsbDmERe9xuhMs7P0xh19wifwt4dDyww%2BMOAwQY6pgFpiTk5b5Nbz1L3pguB1K70XNAWN7tGjKVllPLIwv0Zr1sD0ZF4PblfJ8uHgniyt16h00AjaTSzkDtdun%2Bj%2BoaZPHxEmUhAzaUv8iiIL%2Br6OdV9WXQ9nk47i9an8oyuhc8Pat%2FzhEKZC8c7iKNdDV0SWay9HJz6xnIzdR33JkW4z2VSdh%2F54o5ESmFC0%2F1cpK5UxPAT3smPRXJ98IyuUFT1xl5a2QKt&X-Amz-Signature=0cdf2b95a01fd28fb08d25924ed6ff06c86e4b42e5f3b68206f83f76035479d2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5BTX5M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGIpztvrtdLoE7nKv5GsmpysrBMZ72zBY6cE5cEc1TQbAiBJ7m%2FZWvqYNDrb9ybAsogQipSfK%2FrFwlvc%2FOZ3hRR%2B9CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42gn%2FKD3Id4FSUnYKtwD%2BePvG1CNowebfm8ffeEGEFr6sdKhy2aeJxPQtrLiLJWUs5b%2BThMBJhbitxHijEx6SEqpSVJ5EVelMlskAvhBGzAhjwGJ%2BSWO2Sqlmcyg8cpEhItIZRixCjWqqUb6SuIThnxQ6Aakk1y2ZNVb5Psm7LhfnH2eotVVJiQ2LUMmMOwrEkm3KH7oEgT0A50OZQtZuSsBME5l%2BHQHhm8rB4Yfy1jc9QmcwpXtBt%2BGhhLverKIEonTh4xXlY8Z5j2oIgiZtTHbCAD7skPlO9vNFNeXWVBKcDeBrpg8CAFez8%2BGigSBVZzNkTu4m84CRROQD3aeX4d0ZDS96w0hcfkwNF%2F7q33%2BK4zS2urUuH6oC48VZZpK897eEsKT0aPi%2BewNkl0hgfCf5CIh5F0Pk7Zui0GToE59XfKs2U8%2BPUT5D4M1cEik9EaiHMK%2FDSSXBsahgS9vgL312cCyTK5qSUCNE31qhFzb4i%2FPxIcBpUs901XRJjoh%2F7WNubvUQVBpiNE5ByFmeFYH6wDsebKkAx2CEx6vHvW5jN%2FPl1wfTlFxoxCee4JNyJ2nBEH4waNQW6TMEgzBpXWwUiQqF4ns3P83%2Fjd%2ByAFyUkotrsbDmERe9xuhMs7P0xh19wifwt4dDyww%2BMOAwQY6pgFpiTk5b5Nbz1L3pguB1K70XNAWN7tGjKVllPLIwv0Zr1sD0ZF4PblfJ8uHgniyt16h00AjaTSzkDtdun%2Bj%2BoaZPHxEmUhAzaUv8iiIL%2Br6OdV9WXQ9nk47i9an8oyuhc8Pat%2FzhEKZC8c7iKNdDV0SWay9HJz6xnIzdR33JkW4z2VSdh%2F54o5ESmFC0%2F1cpK5UxPAT3smPRXJ98IyuUFT1xl5a2QKt&X-Amz-Signature=e0d19166a3a8a6ada5284425c90f38b3311b9888b1f9f1c4368df24109ba7ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5BTX5M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGIpztvrtdLoE7nKv5GsmpysrBMZ72zBY6cE5cEc1TQbAiBJ7m%2FZWvqYNDrb9ybAsogQipSfK%2FrFwlvc%2FOZ3hRR%2B9CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42gn%2FKD3Id4FSUnYKtwD%2BePvG1CNowebfm8ffeEGEFr6sdKhy2aeJxPQtrLiLJWUs5b%2BThMBJhbitxHijEx6SEqpSVJ5EVelMlskAvhBGzAhjwGJ%2BSWO2Sqlmcyg8cpEhItIZRixCjWqqUb6SuIThnxQ6Aakk1y2ZNVb5Psm7LhfnH2eotVVJiQ2LUMmMOwrEkm3KH7oEgT0A50OZQtZuSsBME5l%2BHQHhm8rB4Yfy1jc9QmcwpXtBt%2BGhhLverKIEonTh4xXlY8Z5j2oIgiZtTHbCAD7skPlO9vNFNeXWVBKcDeBrpg8CAFez8%2BGigSBVZzNkTu4m84CRROQD3aeX4d0ZDS96w0hcfkwNF%2F7q33%2BK4zS2urUuH6oC48VZZpK897eEsKT0aPi%2BewNkl0hgfCf5CIh5F0Pk7Zui0GToE59XfKs2U8%2BPUT5D4M1cEik9EaiHMK%2FDSSXBsahgS9vgL312cCyTK5qSUCNE31qhFzb4i%2FPxIcBpUs901XRJjoh%2F7WNubvUQVBpiNE5ByFmeFYH6wDsebKkAx2CEx6vHvW5jN%2FPl1wfTlFxoxCee4JNyJ2nBEH4waNQW6TMEgzBpXWwUiQqF4ns3P83%2Fjd%2ByAFyUkotrsbDmERe9xuhMs7P0xh19wifwt4dDyww%2BMOAwQY6pgFpiTk5b5Nbz1L3pguB1K70XNAWN7tGjKVllPLIwv0Zr1sD0ZF4PblfJ8uHgniyt16h00AjaTSzkDtdun%2Bj%2BoaZPHxEmUhAzaUv8iiIL%2Br6OdV9WXQ9nk47i9an8oyuhc8Pat%2FzhEKZC8c7iKNdDV0SWay9HJz6xnIzdR33JkW4z2VSdh%2F54o5ESmFC0%2F1cpK5UxPAT3smPRXJ98IyuUFT1xl5a2QKt&X-Amz-Signature=7ea96739f6fe0ca38267e55a40fab3e301b8d09997515f129e19f4077efd538e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
