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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPLXV7I%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2W5omaGcN7vT9aMo1K%2BqCQiOLcIE%2Bo9lcEcbBl541SwIgDsY6S0OfJu2Yve0ePRuJxVGv4fdGVXjzIzHFdoqlapYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCOBcSpMn0%2Fhr7UVYircA7WQm6tJp7xE2HREDUIMwcJ7PHlr%2BBQpAWzBpPYFr0fqsatr4TT856%2FOUZGNTyBZM%2FMdesjMNpIaKxcxSIDNkLH%2BGDg%2FpEDz5xO4fSIR3wm6RD%2BuqWTXa%2BAVJfeydiOhYL95mIXiae6U9qJgV4yKP2gaG6W8%2BU11fKnFMDGayEeNdiZynrZlL68pexrTtyCXfdxrbR2rK6eIG4WczdfA%2B0VQEaOU7p8ev67Jq7CImWVaB1pVB887oTjYmAApKnopjH7FrEqvq1voR6aPPTF%2FOlLdWNPExL335VL78AGnKXAjwF8u9Nyaz1SK279TmkW83qMd3XDU3bAcO8LL4r7WZad7by%2F4KgNqP3qdgmfgdzpvswUtLuL8V9qB6HrLXuo14ABHz%2Fraq2z47cdyb8IT6CwsT%2BwM%2BGEIc%2Fgf%2FFD7U20FFCBj0jmVjXSxymH22g3IDBCM6sBJ6bO5b1doeeoU045tO4%2FOaL8kjkSpCk24V3DkfFaXMEBQtT6hdm82OpSC6k%2BkDlAqXeVLxdecGmI65PStJwUOGx0ua6RaHdGINO4Ac5qySMJIfErYYk3BFNGRpqk5TYfjdIumSLCZwbyg6lNN%2FrSKKCA1AjWAUem7w6iS%2FHsxP6%2FjowsV8QBNMMW6zr8GOqUBcRNfqKSbBuYIp7rgmKqU7kXpl9Dh4QuR%2FufoDEDz2ger2wHyECdXH6mnhzuYYle2%2BLFJqgQF5GHYefrBZLEebcNDxYlDOgThqYCOP81e%2FTCnYWbtGGnWfCY3EEzd4xY8WbfiuXG3thMLSWiNKecdDd3hxnH11%2FocBXibP4HLxQMAd6gE%2BFn%2FylT1tKShhBZN%2FGRhLdujcXU29qTSBFX0M9iwO%2FgW&X-Amz-Signature=ee1045cd0b21715cf4dab2ea7d1235ca849ea6ef29e1b2dbcbd8de9e9678be4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPLXV7I%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2W5omaGcN7vT9aMo1K%2BqCQiOLcIE%2Bo9lcEcbBl541SwIgDsY6S0OfJu2Yve0ePRuJxVGv4fdGVXjzIzHFdoqlapYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCOBcSpMn0%2Fhr7UVYircA7WQm6tJp7xE2HREDUIMwcJ7PHlr%2BBQpAWzBpPYFr0fqsatr4TT856%2FOUZGNTyBZM%2FMdesjMNpIaKxcxSIDNkLH%2BGDg%2FpEDz5xO4fSIR3wm6RD%2BuqWTXa%2BAVJfeydiOhYL95mIXiae6U9qJgV4yKP2gaG6W8%2BU11fKnFMDGayEeNdiZynrZlL68pexrTtyCXfdxrbR2rK6eIG4WczdfA%2B0VQEaOU7p8ev67Jq7CImWVaB1pVB887oTjYmAApKnopjH7FrEqvq1voR6aPPTF%2FOlLdWNPExL335VL78AGnKXAjwF8u9Nyaz1SK279TmkW83qMd3XDU3bAcO8LL4r7WZad7by%2F4KgNqP3qdgmfgdzpvswUtLuL8V9qB6HrLXuo14ABHz%2Fraq2z47cdyb8IT6CwsT%2BwM%2BGEIc%2Fgf%2FFD7U20FFCBj0jmVjXSxymH22g3IDBCM6sBJ6bO5b1doeeoU045tO4%2FOaL8kjkSpCk24V3DkfFaXMEBQtT6hdm82OpSC6k%2BkDlAqXeVLxdecGmI65PStJwUOGx0ua6RaHdGINO4Ac5qySMJIfErYYk3BFNGRpqk5TYfjdIumSLCZwbyg6lNN%2FrSKKCA1AjWAUem7w6iS%2FHsxP6%2FjowsV8QBNMMW6zr8GOqUBcRNfqKSbBuYIp7rgmKqU7kXpl9Dh4QuR%2FufoDEDz2ger2wHyECdXH6mnhzuYYle2%2BLFJqgQF5GHYefrBZLEebcNDxYlDOgThqYCOP81e%2FTCnYWbtGGnWfCY3EEzd4xY8WbfiuXG3thMLSWiNKecdDd3hxnH11%2FocBXibP4HLxQMAd6gE%2BFn%2FylT1tKShhBZN%2FGRhLdujcXU29qTSBFX0M9iwO%2FgW&X-Amz-Signature=dd58cd8dfdc44cd68e8aac6244c766fa8f6eb7cf95e5179305b92921863deb6d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPLXV7I%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2W5omaGcN7vT9aMo1K%2BqCQiOLcIE%2Bo9lcEcbBl541SwIgDsY6S0OfJu2Yve0ePRuJxVGv4fdGVXjzIzHFdoqlapYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCOBcSpMn0%2Fhr7UVYircA7WQm6tJp7xE2HREDUIMwcJ7PHlr%2BBQpAWzBpPYFr0fqsatr4TT856%2FOUZGNTyBZM%2FMdesjMNpIaKxcxSIDNkLH%2BGDg%2FpEDz5xO4fSIR3wm6RD%2BuqWTXa%2BAVJfeydiOhYL95mIXiae6U9qJgV4yKP2gaG6W8%2BU11fKnFMDGayEeNdiZynrZlL68pexrTtyCXfdxrbR2rK6eIG4WczdfA%2B0VQEaOU7p8ev67Jq7CImWVaB1pVB887oTjYmAApKnopjH7FrEqvq1voR6aPPTF%2FOlLdWNPExL335VL78AGnKXAjwF8u9Nyaz1SK279TmkW83qMd3XDU3bAcO8LL4r7WZad7by%2F4KgNqP3qdgmfgdzpvswUtLuL8V9qB6HrLXuo14ABHz%2Fraq2z47cdyb8IT6CwsT%2BwM%2BGEIc%2Fgf%2FFD7U20FFCBj0jmVjXSxymH22g3IDBCM6sBJ6bO5b1doeeoU045tO4%2FOaL8kjkSpCk24V3DkfFaXMEBQtT6hdm82OpSC6k%2BkDlAqXeVLxdecGmI65PStJwUOGx0ua6RaHdGINO4Ac5qySMJIfErYYk3BFNGRpqk5TYfjdIumSLCZwbyg6lNN%2FrSKKCA1AjWAUem7w6iS%2FHsxP6%2FjowsV8QBNMMW6zr8GOqUBcRNfqKSbBuYIp7rgmKqU7kXpl9Dh4QuR%2FufoDEDz2ger2wHyECdXH6mnhzuYYle2%2BLFJqgQF5GHYefrBZLEebcNDxYlDOgThqYCOP81e%2FTCnYWbtGGnWfCY3EEzd4xY8WbfiuXG3thMLSWiNKecdDd3hxnH11%2FocBXibP4HLxQMAd6gE%2BFn%2FylT1tKShhBZN%2FGRhLdujcXU29qTSBFX0M9iwO%2FgW&X-Amz-Signature=d2b1352d6366b40067c9ac11d4dba2eb402d6e6cb5bcd445668a5dfd163db755&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPLXV7I%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2W5omaGcN7vT9aMo1K%2BqCQiOLcIE%2Bo9lcEcbBl541SwIgDsY6S0OfJu2Yve0ePRuJxVGv4fdGVXjzIzHFdoqlapYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCOBcSpMn0%2Fhr7UVYircA7WQm6tJp7xE2HREDUIMwcJ7PHlr%2BBQpAWzBpPYFr0fqsatr4TT856%2FOUZGNTyBZM%2FMdesjMNpIaKxcxSIDNkLH%2BGDg%2FpEDz5xO4fSIR3wm6RD%2BuqWTXa%2BAVJfeydiOhYL95mIXiae6U9qJgV4yKP2gaG6W8%2BU11fKnFMDGayEeNdiZynrZlL68pexrTtyCXfdxrbR2rK6eIG4WczdfA%2B0VQEaOU7p8ev67Jq7CImWVaB1pVB887oTjYmAApKnopjH7FrEqvq1voR6aPPTF%2FOlLdWNPExL335VL78AGnKXAjwF8u9Nyaz1SK279TmkW83qMd3XDU3bAcO8LL4r7WZad7by%2F4KgNqP3qdgmfgdzpvswUtLuL8V9qB6HrLXuo14ABHz%2Fraq2z47cdyb8IT6CwsT%2BwM%2BGEIc%2Fgf%2FFD7U20FFCBj0jmVjXSxymH22g3IDBCM6sBJ6bO5b1doeeoU045tO4%2FOaL8kjkSpCk24V3DkfFaXMEBQtT6hdm82OpSC6k%2BkDlAqXeVLxdecGmI65PStJwUOGx0ua6RaHdGINO4Ac5qySMJIfErYYk3BFNGRpqk5TYfjdIumSLCZwbyg6lNN%2FrSKKCA1AjWAUem7w6iS%2FHsxP6%2FjowsV8QBNMMW6zr8GOqUBcRNfqKSbBuYIp7rgmKqU7kXpl9Dh4QuR%2FufoDEDz2ger2wHyECdXH6mnhzuYYle2%2BLFJqgQF5GHYefrBZLEebcNDxYlDOgThqYCOP81e%2FTCnYWbtGGnWfCY3EEzd4xY8WbfiuXG3thMLSWiNKecdDd3hxnH11%2FocBXibP4HLxQMAd6gE%2BFn%2FylT1tKShhBZN%2FGRhLdujcXU29qTSBFX0M9iwO%2FgW&X-Amz-Signature=a6f5f018dcc6f5fd6d414c0435519810118a29ec5d1c3b17639a1288842c86f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPLXV7I%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2W5omaGcN7vT9aMo1K%2BqCQiOLcIE%2Bo9lcEcbBl541SwIgDsY6S0OfJu2Yve0ePRuJxVGv4fdGVXjzIzHFdoqlapYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCOBcSpMn0%2Fhr7UVYircA7WQm6tJp7xE2HREDUIMwcJ7PHlr%2BBQpAWzBpPYFr0fqsatr4TT856%2FOUZGNTyBZM%2FMdesjMNpIaKxcxSIDNkLH%2BGDg%2FpEDz5xO4fSIR3wm6RD%2BuqWTXa%2BAVJfeydiOhYL95mIXiae6U9qJgV4yKP2gaG6W8%2BU11fKnFMDGayEeNdiZynrZlL68pexrTtyCXfdxrbR2rK6eIG4WczdfA%2B0VQEaOU7p8ev67Jq7CImWVaB1pVB887oTjYmAApKnopjH7FrEqvq1voR6aPPTF%2FOlLdWNPExL335VL78AGnKXAjwF8u9Nyaz1SK279TmkW83qMd3XDU3bAcO8LL4r7WZad7by%2F4KgNqP3qdgmfgdzpvswUtLuL8V9qB6HrLXuo14ABHz%2Fraq2z47cdyb8IT6CwsT%2BwM%2BGEIc%2Fgf%2FFD7U20FFCBj0jmVjXSxymH22g3IDBCM6sBJ6bO5b1doeeoU045tO4%2FOaL8kjkSpCk24V3DkfFaXMEBQtT6hdm82OpSC6k%2BkDlAqXeVLxdecGmI65PStJwUOGx0ua6RaHdGINO4Ac5qySMJIfErYYk3BFNGRpqk5TYfjdIumSLCZwbyg6lNN%2FrSKKCA1AjWAUem7w6iS%2FHsxP6%2FjowsV8QBNMMW6zr8GOqUBcRNfqKSbBuYIp7rgmKqU7kXpl9Dh4QuR%2FufoDEDz2ger2wHyECdXH6mnhzuYYle2%2BLFJqgQF5GHYefrBZLEebcNDxYlDOgThqYCOP81e%2FTCnYWbtGGnWfCY3EEzd4xY8WbfiuXG3thMLSWiNKecdDd3hxnH11%2FocBXibP4HLxQMAd6gE%2BFn%2FylT1tKShhBZN%2FGRhLdujcXU29qTSBFX0M9iwO%2FgW&X-Amz-Signature=564cdaaebffbb1ac00d010a3db749ffeeceaa4deb8b21003cb26499e8d8d13ee&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPLXV7I%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2W5omaGcN7vT9aMo1K%2BqCQiOLcIE%2Bo9lcEcbBl541SwIgDsY6S0OfJu2Yve0ePRuJxVGv4fdGVXjzIzHFdoqlapYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCOBcSpMn0%2Fhr7UVYircA7WQm6tJp7xE2HREDUIMwcJ7PHlr%2BBQpAWzBpPYFr0fqsatr4TT856%2FOUZGNTyBZM%2FMdesjMNpIaKxcxSIDNkLH%2BGDg%2FpEDz5xO4fSIR3wm6RD%2BuqWTXa%2BAVJfeydiOhYL95mIXiae6U9qJgV4yKP2gaG6W8%2BU11fKnFMDGayEeNdiZynrZlL68pexrTtyCXfdxrbR2rK6eIG4WczdfA%2B0VQEaOU7p8ev67Jq7CImWVaB1pVB887oTjYmAApKnopjH7FrEqvq1voR6aPPTF%2FOlLdWNPExL335VL78AGnKXAjwF8u9Nyaz1SK279TmkW83qMd3XDU3bAcO8LL4r7WZad7by%2F4KgNqP3qdgmfgdzpvswUtLuL8V9qB6HrLXuo14ABHz%2Fraq2z47cdyb8IT6CwsT%2BwM%2BGEIc%2Fgf%2FFD7U20FFCBj0jmVjXSxymH22g3IDBCM6sBJ6bO5b1doeeoU045tO4%2FOaL8kjkSpCk24V3DkfFaXMEBQtT6hdm82OpSC6k%2BkDlAqXeVLxdecGmI65PStJwUOGx0ua6RaHdGINO4Ac5qySMJIfErYYk3BFNGRpqk5TYfjdIumSLCZwbyg6lNN%2FrSKKCA1AjWAUem7w6iS%2FHsxP6%2FjowsV8QBNMMW6zr8GOqUBcRNfqKSbBuYIp7rgmKqU7kXpl9Dh4QuR%2FufoDEDz2ger2wHyECdXH6mnhzuYYle2%2BLFJqgQF5GHYefrBZLEebcNDxYlDOgThqYCOP81e%2FTCnYWbtGGnWfCY3EEzd4xY8WbfiuXG3thMLSWiNKecdDd3hxnH11%2FocBXibP4HLxQMAd6gE%2BFn%2FylT1tKShhBZN%2FGRhLdujcXU29qTSBFX0M9iwO%2FgW&X-Amz-Signature=61cba5d06eccfd236343d4bbafbc0113d58c740dfb24364bf2df5eed6be81450&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPLXV7I%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2W5omaGcN7vT9aMo1K%2BqCQiOLcIE%2Bo9lcEcbBl541SwIgDsY6S0OfJu2Yve0ePRuJxVGv4fdGVXjzIzHFdoqlapYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCOBcSpMn0%2Fhr7UVYircA7WQm6tJp7xE2HREDUIMwcJ7PHlr%2BBQpAWzBpPYFr0fqsatr4TT856%2FOUZGNTyBZM%2FMdesjMNpIaKxcxSIDNkLH%2BGDg%2FpEDz5xO4fSIR3wm6RD%2BuqWTXa%2BAVJfeydiOhYL95mIXiae6U9qJgV4yKP2gaG6W8%2BU11fKnFMDGayEeNdiZynrZlL68pexrTtyCXfdxrbR2rK6eIG4WczdfA%2B0VQEaOU7p8ev67Jq7CImWVaB1pVB887oTjYmAApKnopjH7FrEqvq1voR6aPPTF%2FOlLdWNPExL335VL78AGnKXAjwF8u9Nyaz1SK279TmkW83qMd3XDU3bAcO8LL4r7WZad7by%2F4KgNqP3qdgmfgdzpvswUtLuL8V9qB6HrLXuo14ABHz%2Fraq2z47cdyb8IT6CwsT%2BwM%2BGEIc%2Fgf%2FFD7U20FFCBj0jmVjXSxymH22g3IDBCM6sBJ6bO5b1doeeoU045tO4%2FOaL8kjkSpCk24V3DkfFaXMEBQtT6hdm82OpSC6k%2BkDlAqXeVLxdecGmI65PStJwUOGx0ua6RaHdGINO4Ac5qySMJIfErYYk3BFNGRpqk5TYfjdIumSLCZwbyg6lNN%2FrSKKCA1AjWAUem7w6iS%2FHsxP6%2FjowsV8QBNMMW6zr8GOqUBcRNfqKSbBuYIp7rgmKqU7kXpl9Dh4QuR%2FufoDEDz2ger2wHyECdXH6mnhzuYYle2%2BLFJqgQF5GHYefrBZLEebcNDxYlDOgThqYCOP81e%2FTCnYWbtGGnWfCY3EEzd4xY8WbfiuXG3thMLSWiNKecdDd3hxnH11%2FocBXibP4HLxQMAd6gE%2BFn%2FylT1tKShhBZN%2FGRhLdujcXU29qTSBFX0M9iwO%2FgW&X-Amz-Signature=e026f675f5145ae1af700bb9563e03d7ce7d8995b0af640da43bc94f9b1d8a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
