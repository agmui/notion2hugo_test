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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2WZF7X7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBK2Hmk8NOEx7m6bZuPDomEimBI%2Ffh%2Fkj0n5dMm0m395AiAm34Xu1J17adnyLdzxbJqtG3Tzng1dwq18X%2BBnsYznmCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbPuSi6uGtwcz%2BySKtwDNnIU0avyEwP8baqBcuvVP8zkkPwSUZ5a2ClRWzQrwVH%2FkuxFxsTbaJCP9TmVH2WIcs0cZ0htw4ZK%2F5D36kJgnjT6l9ufee3zpopLYR1m0kPXfusU7wIo58%2Fx63ne8YQoIJoG533xtaS9bm6fwfUBXgG%2FoT5v%2FnXr1kMPMNc4HztUFsIjKAh%2BiHAkbc6rpixyrYxFf6sJzVHZ0SptrHCzMzHLdiR%2F3H27AkriTkPT7hQtiKAHhiDX4J7WdflL2Gz4HOwYgIA48AEVV7N1F4sMxk7ZjhOnR3rQw719ImoZaHsXkzcvrMZY1POM9R0V6C0AbE8mhJFcDhWRpmo9xZEXPbVTNL1ZEYRqwKF2M0R3hR1zgNYgBcJoPo7xYnCT4GArow2r8vX567dl4A3y4mbR70MTYh3DtlWyhhte2yha%2BET7xyrPUFgfGTbCWh8klp2v5%2Fbn3bS%2FIPSm%2BAI%2BK2B0P5G61JqLMmEzsZ%2FVfNmOD2E%2FkvZD0Fdl7Yeou7EGU54PuUSaUtET5ffzjdIXteCmooVQLRNe4X9PB3w%2BJ4OZ9j%2FTSzBSd1GZWiZYeoeee0IaZ9GcagIBGZxhWsuT%2FkMNdbKaCTxV2JnSOH47EIwYs7HfayPjbSNpWh6ESP8wqK%2B3vwY6pgFciMMHNpr%2FdMHbmI9aRtzLR7Uqb6%2FePEWphMm%2Bt3bf12CQyWTax7wYyODskPN8Hgx%2FOruIKciAefm3GIr9Gd8MHphLr%2BZDCr3AtDn%2Fsosc%2BjPmdyUCTAcXvSfFkhr054GEV1hhghW6NFAyjLr76vZIBXpHXFvi9Qk%2FWWzigQhW20WsuCXBqZbeEzv%2B6l3NR1IY3D4TQgH1eKfgMotajN9nhuGNaRik&X-Amz-Signature=ce886c7d2950d6094deecb49ad328a57a1408f308b6feab0543b61e5ac6af321&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2WZF7X7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBK2Hmk8NOEx7m6bZuPDomEimBI%2Ffh%2Fkj0n5dMm0m395AiAm34Xu1J17adnyLdzxbJqtG3Tzng1dwq18X%2BBnsYznmCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbPuSi6uGtwcz%2BySKtwDNnIU0avyEwP8baqBcuvVP8zkkPwSUZ5a2ClRWzQrwVH%2FkuxFxsTbaJCP9TmVH2WIcs0cZ0htw4ZK%2F5D36kJgnjT6l9ufee3zpopLYR1m0kPXfusU7wIo58%2Fx63ne8YQoIJoG533xtaS9bm6fwfUBXgG%2FoT5v%2FnXr1kMPMNc4HztUFsIjKAh%2BiHAkbc6rpixyrYxFf6sJzVHZ0SptrHCzMzHLdiR%2F3H27AkriTkPT7hQtiKAHhiDX4J7WdflL2Gz4HOwYgIA48AEVV7N1F4sMxk7ZjhOnR3rQw719ImoZaHsXkzcvrMZY1POM9R0V6C0AbE8mhJFcDhWRpmo9xZEXPbVTNL1ZEYRqwKF2M0R3hR1zgNYgBcJoPo7xYnCT4GArow2r8vX567dl4A3y4mbR70MTYh3DtlWyhhte2yha%2BET7xyrPUFgfGTbCWh8klp2v5%2Fbn3bS%2FIPSm%2BAI%2BK2B0P5G61JqLMmEzsZ%2FVfNmOD2E%2FkvZD0Fdl7Yeou7EGU54PuUSaUtET5ffzjdIXteCmooVQLRNe4X9PB3w%2BJ4OZ9j%2FTSzBSd1GZWiZYeoeee0IaZ9GcagIBGZxhWsuT%2FkMNdbKaCTxV2JnSOH47EIwYs7HfayPjbSNpWh6ESP8wqK%2B3vwY6pgFciMMHNpr%2FdMHbmI9aRtzLR7Uqb6%2FePEWphMm%2Bt3bf12CQyWTax7wYyODskPN8Hgx%2FOruIKciAefm3GIr9Gd8MHphLr%2BZDCr3AtDn%2Fsosc%2BjPmdyUCTAcXvSfFkhr054GEV1hhghW6NFAyjLr76vZIBXpHXFvi9Qk%2FWWzigQhW20WsuCXBqZbeEzv%2B6l3NR1IY3D4TQgH1eKfgMotajN9nhuGNaRik&X-Amz-Signature=7e9c838f47abdf14d5b8d2dea10fbef599f8f4c1f23163b6b0ab06dff19ce154&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2WZF7X7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBK2Hmk8NOEx7m6bZuPDomEimBI%2Ffh%2Fkj0n5dMm0m395AiAm34Xu1J17adnyLdzxbJqtG3Tzng1dwq18X%2BBnsYznmCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbPuSi6uGtwcz%2BySKtwDNnIU0avyEwP8baqBcuvVP8zkkPwSUZ5a2ClRWzQrwVH%2FkuxFxsTbaJCP9TmVH2WIcs0cZ0htw4ZK%2F5D36kJgnjT6l9ufee3zpopLYR1m0kPXfusU7wIo58%2Fx63ne8YQoIJoG533xtaS9bm6fwfUBXgG%2FoT5v%2FnXr1kMPMNc4HztUFsIjKAh%2BiHAkbc6rpixyrYxFf6sJzVHZ0SptrHCzMzHLdiR%2F3H27AkriTkPT7hQtiKAHhiDX4J7WdflL2Gz4HOwYgIA48AEVV7N1F4sMxk7ZjhOnR3rQw719ImoZaHsXkzcvrMZY1POM9R0V6C0AbE8mhJFcDhWRpmo9xZEXPbVTNL1ZEYRqwKF2M0R3hR1zgNYgBcJoPo7xYnCT4GArow2r8vX567dl4A3y4mbR70MTYh3DtlWyhhte2yha%2BET7xyrPUFgfGTbCWh8klp2v5%2Fbn3bS%2FIPSm%2BAI%2BK2B0P5G61JqLMmEzsZ%2FVfNmOD2E%2FkvZD0Fdl7Yeou7EGU54PuUSaUtET5ffzjdIXteCmooVQLRNe4X9PB3w%2BJ4OZ9j%2FTSzBSd1GZWiZYeoeee0IaZ9GcagIBGZxhWsuT%2FkMNdbKaCTxV2JnSOH47EIwYs7HfayPjbSNpWh6ESP8wqK%2B3vwY6pgFciMMHNpr%2FdMHbmI9aRtzLR7Uqb6%2FePEWphMm%2Bt3bf12CQyWTax7wYyODskPN8Hgx%2FOruIKciAefm3GIr9Gd8MHphLr%2BZDCr3AtDn%2Fsosc%2BjPmdyUCTAcXvSfFkhr054GEV1hhghW6NFAyjLr76vZIBXpHXFvi9Qk%2FWWzigQhW20WsuCXBqZbeEzv%2B6l3NR1IY3D4TQgH1eKfgMotajN9nhuGNaRik&X-Amz-Signature=f486159c7e1cec696a935b9eb33dc9a4dc68a7ac7ca0a1652cb9d9354239b35b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2WZF7X7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBK2Hmk8NOEx7m6bZuPDomEimBI%2Ffh%2Fkj0n5dMm0m395AiAm34Xu1J17adnyLdzxbJqtG3Tzng1dwq18X%2BBnsYznmCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbPuSi6uGtwcz%2BySKtwDNnIU0avyEwP8baqBcuvVP8zkkPwSUZ5a2ClRWzQrwVH%2FkuxFxsTbaJCP9TmVH2WIcs0cZ0htw4ZK%2F5D36kJgnjT6l9ufee3zpopLYR1m0kPXfusU7wIo58%2Fx63ne8YQoIJoG533xtaS9bm6fwfUBXgG%2FoT5v%2FnXr1kMPMNc4HztUFsIjKAh%2BiHAkbc6rpixyrYxFf6sJzVHZ0SptrHCzMzHLdiR%2F3H27AkriTkPT7hQtiKAHhiDX4J7WdflL2Gz4HOwYgIA48AEVV7N1F4sMxk7ZjhOnR3rQw719ImoZaHsXkzcvrMZY1POM9R0V6C0AbE8mhJFcDhWRpmo9xZEXPbVTNL1ZEYRqwKF2M0R3hR1zgNYgBcJoPo7xYnCT4GArow2r8vX567dl4A3y4mbR70MTYh3DtlWyhhte2yha%2BET7xyrPUFgfGTbCWh8klp2v5%2Fbn3bS%2FIPSm%2BAI%2BK2B0P5G61JqLMmEzsZ%2FVfNmOD2E%2FkvZD0Fdl7Yeou7EGU54PuUSaUtET5ffzjdIXteCmooVQLRNe4X9PB3w%2BJ4OZ9j%2FTSzBSd1GZWiZYeoeee0IaZ9GcagIBGZxhWsuT%2FkMNdbKaCTxV2JnSOH47EIwYs7HfayPjbSNpWh6ESP8wqK%2B3vwY6pgFciMMHNpr%2FdMHbmI9aRtzLR7Uqb6%2FePEWphMm%2Bt3bf12CQyWTax7wYyODskPN8Hgx%2FOruIKciAefm3GIr9Gd8MHphLr%2BZDCr3AtDn%2Fsosc%2BjPmdyUCTAcXvSfFkhr054GEV1hhghW6NFAyjLr76vZIBXpHXFvi9Qk%2FWWzigQhW20WsuCXBqZbeEzv%2B6l3NR1IY3D4TQgH1eKfgMotajN9nhuGNaRik&X-Amz-Signature=ddc31cdac284e692a1314aa75d7a5c4c49eec31000cf7daf7b99dd291d5425f1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2WZF7X7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBK2Hmk8NOEx7m6bZuPDomEimBI%2Ffh%2Fkj0n5dMm0m395AiAm34Xu1J17adnyLdzxbJqtG3Tzng1dwq18X%2BBnsYznmCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbPuSi6uGtwcz%2BySKtwDNnIU0avyEwP8baqBcuvVP8zkkPwSUZ5a2ClRWzQrwVH%2FkuxFxsTbaJCP9TmVH2WIcs0cZ0htw4ZK%2F5D36kJgnjT6l9ufee3zpopLYR1m0kPXfusU7wIo58%2Fx63ne8YQoIJoG533xtaS9bm6fwfUBXgG%2FoT5v%2FnXr1kMPMNc4HztUFsIjKAh%2BiHAkbc6rpixyrYxFf6sJzVHZ0SptrHCzMzHLdiR%2F3H27AkriTkPT7hQtiKAHhiDX4J7WdflL2Gz4HOwYgIA48AEVV7N1F4sMxk7ZjhOnR3rQw719ImoZaHsXkzcvrMZY1POM9R0V6C0AbE8mhJFcDhWRpmo9xZEXPbVTNL1ZEYRqwKF2M0R3hR1zgNYgBcJoPo7xYnCT4GArow2r8vX567dl4A3y4mbR70MTYh3DtlWyhhte2yha%2BET7xyrPUFgfGTbCWh8klp2v5%2Fbn3bS%2FIPSm%2BAI%2BK2B0P5G61JqLMmEzsZ%2FVfNmOD2E%2FkvZD0Fdl7Yeou7EGU54PuUSaUtET5ffzjdIXteCmooVQLRNe4X9PB3w%2BJ4OZ9j%2FTSzBSd1GZWiZYeoeee0IaZ9GcagIBGZxhWsuT%2FkMNdbKaCTxV2JnSOH47EIwYs7HfayPjbSNpWh6ESP8wqK%2B3vwY6pgFciMMHNpr%2FdMHbmI9aRtzLR7Uqb6%2FePEWphMm%2Bt3bf12CQyWTax7wYyODskPN8Hgx%2FOruIKciAefm3GIr9Gd8MHphLr%2BZDCr3AtDn%2Fsosc%2BjPmdyUCTAcXvSfFkhr054GEV1hhghW6NFAyjLr76vZIBXpHXFvi9Qk%2FWWzigQhW20WsuCXBqZbeEzv%2B6l3NR1IY3D4TQgH1eKfgMotajN9nhuGNaRik&X-Amz-Signature=69479bbbd9f797899edf1bc96865467f6d7d10bca5ae9d4c9d255a21b8bd50b6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2WZF7X7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBK2Hmk8NOEx7m6bZuPDomEimBI%2Ffh%2Fkj0n5dMm0m395AiAm34Xu1J17adnyLdzxbJqtG3Tzng1dwq18X%2BBnsYznmCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbPuSi6uGtwcz%2BySKtwDNnIU0avyEwP8baqBcuvVP8zkkPwSUZ5a2ClRWzQrwVH%2FkuxFxsTbaJCP9TmVH2WIcs0cZ0htw4ZK%2F5D36kJgnjT6l9ufee3zpopLYR1m0kPXfusU7wIo58%2Fx63ne8YQoIJoG533xtaS9bm6fwfUBXgG%2FoT5v%2FnXr1kMPMNc4HztUFsIjKAh%2BiHAkbc6rpixyrYxFf6sJzVHZ0SptrHCzMzHLdiR%2F3H27AkriTkPT7hQtiKAHhiDX4J7WdflL2Gz4HOwYgIA48AEVV7N1F4sMxk7ZjhOnR3rQw719ImoZaHsXkzcvrMZY1POM9R0V6C0AbE8mhJFcDhWRpmo9xZEXPbVTNL1ZEYRqwKF2M0R3hR1zgNYgBcJoPo7xYnCT4GArow2r8vX567dl4A3y4mbR70MTYh3DtlWyhhte2yha%2BET7xyrPUFgfGTbCWh8klp2v5%2Fbn3bS%2FIPSm%2BAI%2BK2B0P5G61JqLMmEzsZ%2FVfNmOD2E%2FkvZD0Fdl7Yeou7EGU54PuUSaUtET5ffzjdIXteCmooVQLRNe4X9PB3w%2BJ4OZ9j%2FTSzBSd1GZWiZYeoeee0IaZ9GcagIBGZxhWsuT%2FkMNdbKaCTxV2JnSOH47EIwYs7HfayPjbSNpWh6ESP8wqK%2B3vwY6pgFciMMHNpr%2FdMHbmI9aRtzLR7Uqb6%2FePEWphMm%2Bt3bf12CQyWTax7wYyODskPN8Hgx%2FOruIKciAefm3GIr9Gd8MHphLr%2BZDCr3AtDn%2Fsosc%2BjPmdyUCTAcXvSfFkhr054GEV1hhghW6NFAyjLr76vZIBXpHXFvi9Qk%2FWWzigQhW20WsuCXBqZbeEzv%2B6l3NR1IY3D4TQgH1eKfgMotajN9nhuGNaRik&X-Amz-Signature=7af433ccc6edf977061a90a46006f8af0119f2b34bae09a114b953faefbc9e19&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2WZF7X7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBK2Hmk8NOEx7m6bZuPDomEimBI%2Ffh%2Fkj0n5dMm0m395AiAm34Xu1J17adnyLdzxbJqtG3Tzng1dwq18X%2BBnsYznmCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbPuSi6uGtwcz%2BySKtwDNnIU0avyEwP8baqBcuvVP8zkkPwSUZ5a2ClRWzQrwVH%2FkuxFxsTbaJCP9TmVH2WIcs0cZ0htw4ZK%2F5D36kJgnjT6l9ufee3zpopLYR1m0kPXfusU7wIo58%2Fx63ne8YQoIJoG533xtaS9bm6fwfUBXgG%2FoT5v%2FnXr1kMPMNc4HztUFsIjKAh%2BiHAkbc6rpixyrYxFf6sJzVHZ0SptrHCzMzHLdiR%2F3H27AkriTkPT7hQtiKAHhiDX4J7WdflL2Gz4HOwYgIA48AEVV7N1F4sMxk7ZjhOnR3rQw719ImoZaHsXkzcvrMZY1POM9R0V6C0AbE8mhJFcDhWRpmo9xZEXPbVTNL1ZEYRqwKF2M0R3hR1zgNYgBcJoPo7xYnCT4GArow2r8vX567dl4A3y4mbR70MTYh3DtlWyhhte2yha%2BET7xyrPUFgfGTbCWh8klp2v5%2Fbn3bS%2FIPSm%2BAI%2BK2B0P5G61JqLMmEzsZ%2FVfNmOD2E%2FkvZD0Fdl7Yeou7EGU54PuUSaUtET5ffzjdIXteCmooVQLRNe4X9PB3w%2BJ4OZ9j%2FTSzBSd1GZWiZYeoeee0IaZ9GcagIBGZxhWsuT%2FkMNdbKaCTxV2JnSOH47EIwYs7HfayPjbSNpWh6ESP8wqK%2B3vwY6pgFciMMHNpr%2FdMHbmI9aRtzLR7Uqb6%2FePEWphMm%2Bt3bf12CQyWTax7wYyODskPN8Hgx%2FOruIKciAefm3GIr9Gd8MHphLr%2BZDCr3AtDn%2Fsosc%2BjPmdyUCTAcXvSfFkhr054GEV1hhghW6NFAyjLr76vZIBXpHXFvi9Qk%2FWWzigQhW20WsuCXBqZbeEzv%2B6l3NR1IY3D4TQgH1eKfgMotajN9nhuGNaRik&X-Amz-Signature=ac4372bb134bd9e0685aa233c4ba9eea98656c25f550649492693d72fd096f75&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
