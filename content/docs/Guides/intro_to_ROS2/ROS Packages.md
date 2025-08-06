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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFU5BBLX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDRS7fSBUZjnJlZvk8yU10pRW3cWVU%2Blb37ku%2Fxvv6jvgIgOGbJLb6Ww8d14%2FjGcBmlhzg3y%2FFJod6gu4U1lAdeusMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDDh6oxl4%2FPbhrHUrSrcAxrhMCQ%2Blc4DBwHaz2U5UlCE%2BUX6TOZtWWJZkZQr3smW%2FTOeqvPF5yyEJthuig5Z11bagKYpduDCYqG8WRE5Me6R%2B%2B3awUgPbIWX%2BTey8QOZY7nWMLvh9M8zXRARfADM1vm350mB%2BRuKJevb9vytBjRsP9sm1C%2FXxBdmSLczaGhfEieC7PpKGoPYHuKu3N4j5aXNeNNZxH5ZCxeM3Gh76nZI1OI9NvKsySRe8cJtT99D5OEKvg%2FG5DQNcmyueDrEddppNokUs%2FhfgTtgYpsIdtZBEa%2FH6HPFpzMaZPrCs8y2GjCakH%2BqD%2FbcFuwUZQBxWSIx1h3fscztITiPXh1D%2FyPgN%2Bh%2BQFXvM1GkYRwbEBJ8xkRHbWmjlH2lkMPIQQubwVzzanPpGEA%2FeDibGSxgI8EFpf4YZE1M9TXWEsiJM82KC7sis6HChb4YdaPlK9bhYm6CBNVsJLEANTIRjHaVsXJ2eHs7nAIRwltxtRY1aV1CrwHZlBTwdfOeVPriVyCpqmy%2BIGM6Y6Ij2N%2BjgL7fKpC9d8a%2BuZNeLJ22UMdhJIGMIacWHNw%2F8fOw8lEWDm6ELOkDW95Nq7SVjmzaWi7c9aMWB0Bt%2FvTdsU5dSgVz5gbsNKasExzskovsP%2BpWMOP6zcQGOqUBMe2Ywk4AWmIqMNgu5wntaygnNm%2FFottrdxedxHqiwuM%2BW%2BFXOeQ%2Fv%2FCmK5bRmk%2BgwKkrBqNDGDMH1Chuts4wUkVbfzjMjdWuT0lyW2D1lCkyTO3V4j%2FrGH5XAgAy%2Bov0MQ8rf4OE6tltt2Sfl6bT%2BSoAaIc3N2xDX2e8aY36X1aI8lA%2FSlHsPDvBTBkzK%2BCZKhHnjpnLgfaJfvSs8zXnjtD1OXg9&X-Amz-Signature=f0f4c1a395ed370133b07bfda5a9f35cefb16c69ae6a93ee586681ab42526a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFU5BBLX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDRS7fSBUZjnJlZvk8yU10pRW3cWVU%2Blb37ku%2Fxvv6jvgIgOGbJLb6Ww8d14%2FjGcBmlhzg3y%2FFJod6gu4U1lAdeusMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDDh6oxl4%2FPbhrHUrSrcAxrhMCQ%2Blc4DBwHaz2U5UlCE%2BUX6TOZtWWJZkZQr3smW%2FTOeqvPF5yyEJthuig5Z11bagKYpduDCYqG8WRE5Me6R%2B%2B3awUgPbIWX%2BTey8QOZY7nWMLvh9M8zXRARfADM1vm350mB%2BRuKJevb9vytBjRsP9sm1C%2FXxBdmSLczaGhfEieC7PpKGoPYHuKu3N4j5aXNeNNZxH5ZCxeM3Gh76nZI1OI9NvKsySRe8cJtT99D5OEKvg%2FG5DQNcmyueDrEddppNokUs%2FhfgTtgYpsIdtZBEa%2FH6HPFpzMaZPrCs8y2GjCakH%2BqD%2FbcFuwUZQBxWSIx1h3fscztITiPXh1D%2FyPgN%2Bh%2BQFXvM1GkYRwbEBJ8xkRHbWmjlH2lkMPIQQubwVzzanPpGEA%2FeDibGSxgI8EFpf4YZE1M9TXWEsiJM82KC7sis6HChb4YdaPlK9bhYm6CBNVsJLEANTIRjHaVsXJ2eHs7nAIRwltxtRY1aV1CrwHZlBTwdfOeVPriVyCpqmy%2BIGM6Y6Ij2N%2BjgL7fKpC9d8a%2BuZNeLJ22UMdhJIGMIacWHNw%2F8fOw8lEWDm6ELOkDW95Nq7SVjmzaWi7c9aMWB0Bt%2FvTdsU5dSgVz5gbsNKasExzskovsP%2BpWMOP6zcQGOqUBMe2Ywk4AWmIqMNgu5wntaygnNm%2FFottrdxedxHqiwuM%2BW%2BFXOeQ%2Fv%2FCmK5bRmk%2BgwKkrBqNDGDMH1Chuts4wUkVbfzjMjdWuT0lyW2D1lCkyTO3V4j%2FrGH5XAgAy%2Bov0MQ8rf4OE6tltt2Sfl6bT%2BSoAaIc3N2xDX2e8aY36X1aI8lA%2FSlHsPDvBTBkzK%2BCZKhHnjpnLgfaJfvSs8zXnjtD1OXg9&X-Amz-Signature=ac27420773e45d01d17e7204351247f37b0a3373b633126debbf2b63f0bbe1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFU5BBLX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDRS7fSBUZjnJlZvk8yU10pRW3cWVU%2Blb37ku%2Fxvv6jvgIgOGbJLb6Ww8d14%2FjGcBmlhzg3y%2FFJod6gu4U1lAdeusMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDDh6oxl4%2FPbhrHUrSrcAxrhMCQ%2Blc4DBwHaz2U5UlCE%2BUX6TOZtWWJZkZQr3smW%2FTOeqvPF5yyEJthuig5Z11bagKYpduDCYqG8WRE5Me6R%2B%2B3awUgPbIWX%2BTey8QOZY7nWMLvh9M8zXRARfADM1vm350mB%2BRuKJevb9vytBjRsP9sm1C%2FXxBdmSLczaGhfEieC7PpKGoPYHuKu3N4j5aXNeNNZxH5ZCxeM3Gh76nZI1OI9NvKsySRe8cJtT99D5OEKvg%2FG5DQNcmyueDrEddppNokUs%2FhfgTtgYpsIdtZBEa%2FH6HPFpzMaZPrCs8y2GjCakH%2BqD%2FbcFuwUZQBxWSIx1h3fscztITiPXh1D%2FyPgN%2Bh%2BQFXvM1GkYRwbEBJ8xkRHbWmjlH2lkMPIQQubwVzzanPpGEA%2FeDibGSxgI8EFpf4YZE1M9TXWEsiJM82KC7sis6HChb4YdaPlK9bhYm6CBNVsJLEANTIRjHaVsXJ2eHs7nAIRwltxtRY1aV1CrwHZlBTwdfOeVPriVyCpqmy%2BIGM6Y6Ij2N%2BjgL7fKpC9d8a%2BuZNeLJ22UMdhJIGMIacWHNw%2F8fOw8lEWDm6ELOkDW95Nq7SVjmzaWi7c9aMWB0Bt%2FvTdsU5dSgVz5gbsNKasExzskovsP%2BpWMOP6zcQGOqUBMe2Ywk4AWmIqMNgu5wntaygnNm%2FFottrdxedxHqiwuM%2BW%2BFXOeQ%2Fv%2FCmK5bRmk%2BgwKkrBqNDGDMH1Chuts4wUkVbfzjMjdWuT0lyW2D1lCkyTO3V4j%2FrGH5XAgAy%2Bov0MQ8rf4OE6tltt2Sfl6bT%2BSoAaIc3N2xDX2e8aY36X1aI8lA%2FSlHsPDvBTBkzK%2BCZKhHnjpnLgfaJfvSs8zXnjtD1OXg9&X-Amz-Signature=d41f6481f18b8898fc997629c929cf8643c5fb8f8fb6cd3876349317649afcb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFU5BBLX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDRS7fSBUZjnJlZvk8yU10pRW3cWVU%2Blb37ku%2Fxvv6jvgIgOGbJLb6Ww8d14%2FjGcBmlhzg3y%2FFJod6gu4U1lAdeusMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDDh6oxl4%2FPbhrHUrSrcAxrhMCQ%2Blc4DBwHaz2U5UlCE%2BUX6TOZtWWJZkZQr3smW%2FTOeqvPF5yyEJthuig5Z11bagKYpduDCYqG8WRE5Me6R%2B%2B3awUgPbIWX%2BTey8QOZY7nWMLvh9M8zXRARfADM1vm350mB%2BRuKJevb9vytBjRsP9sm1C%2FXxBdmSLczaGhfEieC7PpKGoPYHuKu3N4j5aXNeNNZxH5ZCxeM3Gh76nZI1OI9NvKsySRe8cJtT99D5OEKvg%2FG5DQNcmyueDrEddppNokUs%2FhfgTtgYpsIdtZBEa%2FH6HPFpzMaZPrCs8y2GjCakH%2BqD%2FbcFuwUZQBxWSIx1h3fscztITiPXh1D%2FyPgN%2Bh%2BQFXvM1GkYRwbEBJ8xkRHbWmjlH2lkMPIQQubwVzzanPpGEA%2FeDibGSxgI8EFpf4YZE1M9TXWEsiJM82KC7sis6HChb4YdaPlK9bhYm6CBNVsJLEANTIRjHaVsXJ2eHs7nAIRwltxtRY1aV1CrwHZlBTwdfOeVPriVyCpqmy%2BIGM6Y6Ij2N%2BjgL7fKpC9d8a%2BuZNeLJ22UMdhJIGMIacWHNw%2F8fOw8lEWDm6ELOkDW95Nq7SVjmzaWi7c9aMWB0Bt%2FvTdsU5dSgVz5gbsNKasExzskovsP%2BpWMOP6zcQGOqUBMe2Ywk4AWmIqMNgu5wntaygnNm%2FFottrdxedxHqiwuM%2BW%2BFXOeQ%2Fv%2FCmK5bRmk%2BgwKkrBqNDGDMH1Chuts4wUkVbfzjMjdWuT0lyW2D1lCkyTO3V4j%2FrGH5XAgAy%2Bov0MQ8rf4OE6tltt2Sfl6bT%2BSoAaIc3N2xDX2e8aY36X1aI8lA%2FSlHsPDvBTBkzK%2BCZKhHnjpnLgfaJfvSs8zXnjtD1OXg9&X-Amz-Signature=ec3459738c91b4fb69653ec46f71773a0ce195df1052c8113371fda3ce515857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFU5BBLX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDRS7fSBUZjnJlZvk8yU10pRW3cWVU%2Blb37ku%2Fxvv6jvgIgOGbJLb6Ww8d14%2FjGcBmlhzg3y%2FFJod6gu4U1lAdeusMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDDh6oxl4%2FPbhrHUrSrcAxrhMCQ%2Blc4DBwHaz2U5UlCE%2BUX6TOZtWWJZkZQr3smW%2FTOeqvPF5yyEJthuig5Z11bagKYpduDCYqG8WRE5Me6R%2B%2B3awUgPbIWX%2BTey8QOZY7nWMLvh9M8zXRARfADM1vm350mB%2BRuKJevb9vytBjRsP9sm1C%2FXxBdmSLczaGhfEieC7PpKGoPYHuKu3N4j5aXNeNNZxH5ZCxeM3Gh76nZI1OI9NvKsySRe8cJtT99D5OEKvg%2FG5DQNcmyueDrEddppNokUs%2FhfgTtgYpsIdtZBEa%2FH6HPFpzMaZPrCs8y2GjCakH%2BqD%2FbcFuwUZQBxWSIx1h3fscztITiPXh1D%2FyPgN%2Bh%2BQFXvM1GkYRwbEBJ8xkRHbWmjlH2lkMPIQQubwVzzanPpGEA%2FeDibGSxgI8EFpf4YZE1M9TXWEsiJM82KC7sis6HChb4YdaPlK9bhYm6CBNVsJLEANTIRjHaVsXJ2eHs7nAIRwltxtRY1aV1CrwHZlBTwdfOeVPriVyCpqmy%2BIGM6Y6Ij2N%2BjgL7fKpC9d8a%2BuZNeLJ22UMdhJIGMIacWHNw%2F8fOw8lEWDm6ELOkDW95Nq7SVjmzaWi7c9aMWB0Bt%2FvTdsU5dSgVz5gbsNKasExzskovsP%2BpWMOP6zcQGOqUBMe2Ywk4AWmIqMNgu5wntaygnNm%2FFottrdxedxHqiwuM%2BW%2BFXOeQ%2Fv%2FCmK5bRmk%2BgwKkrBqNDGDMH1Chuts4wUkVbfzjMjdWuT0lyW2D1lCkyTO3V4j%2FrGH5XAgAy%2Bov0MQ8rf4OE6tltt2Sfl6bT%2BSoAaIc3N2xDX2e8aY36X1aI8lA%2FSlHsPDvBTBkzK%2BCZKhHnjpnLgfaJfvSs8zXnjtD1OXg9&X-Amz-Signature=8f3476e8e8d65e4367e234dcb30568da65d30c7882b522e6c90c35b406e13a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFU5BBLX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDRS7fSBUZjnJlZvk8yU10pRW3cWVU%2Blb37ku%2Fxvv6jvgIgOGbJLb6Ww8d14%2FjGcBmlhzg3y%2FFJod6gu4U1lAdeusMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDDh6oxl4%2FPbhrHUrSrcAxrhMCQ%2Blc4DBwHaz2U5UlCE%2BUX6TOZtWWJZkZQr3smW%2FTOeqvPF5yyEJthuig5Z11bagKYpduDCYqG8WRE5Me6R%2B%2B3awUgPbIWX%2BTey8QOZY7nWMLvh9M8zXRARfADM1vm350mB%2BRuKJevb9vytBjRsP9sm1C%2FXxBdmSLczaGhfEieC7PpKGoPYHuKu3N4j5aXNeNNZxH5ZCxeM3Gh76nZI1OI9NvKsySRe8cJtT99D5OEKvg%2FG5DQNcmyueDrEddppNokUs%2FhfgTtgYpsIdtZBEa%2FH6HPFpzMaZPrCs8y2GjCakH%2BqD%2FbcFuwUZQBxWSIx1h3fscztITiPXh1D%2FyPgN%2Bh%2BQFXvM1GkYRwbEBJ8xkRHbWmjlH2lkMPIQQubwVzzanPpGEA%2FeDibGSxgI8EFpf4YZE1M9TXWEsiJM82KC7sis6HChb4YdaPlK9bhYm6CBNVsJLEANTIRjHaVsXJ2eHs7nAIRwltxtRY1aV1CrwHZlBTwdfOeVPriVyCpqmy%2BIGM6Y6Ij2N%2BjgL7fKpC9d8a%2BuZNeLJ22UMdhJIGMIacWHNw%2F8fOw8lEWDm6ELOkDW95Nq7SVjmzaWi7c9aMWB0Bt%2FvTdsU5dSgVz5gbsNKasExzskovsP%2BpWMOP6zcQGOqUBMe2Ywk4AWmIqMNgu5wntaygnNm%2FFottrdxedxHqiwuM%2BW%2BFXOeQ%2Fv%2FCmK5bRmk%2BgwKkrBqNDGDMH1Chuts4wUkVbfzjMjdWuT0lyW2D1lCkyTO3V4j%2FrGH5XAgAy%2Bov0MQ8rf4OE6tltt2Sfl6bT%2BSoAaIc3N2xDX2e8aY36X1aI8lA%2FSlHsPDvBTBkzK%2BCZKhHnjpnLgfaJfvSs8zXnjtD1OXg9&X-Amz-Signature=757c636387efa0a11ba84d477656319c365cba178680be9d069ef4a9ed4587b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFU5BBLX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDRS7fSBUZjnJlZvk8yU10pRW3cWVU%2Blb37ku%2Fxvv6jvgIgOGbJLb6Ww8d14%2FjGcBmlhzg3y%2FFJod6gu4U1lAdeusMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDDh6oxl4%2FPbhrHUrSrcAxrhMCQ%2Blc4DBwHaz2U5UlCE%2BUX6TOZtWWJZkZQr3smW%2FTOeqvPF5yyEJthuig5Z11bagKYpduDCYqG8WRE5Me6R%2B%2B3awUgPbIWX%2BTey8QOZY7nWMLvh9M8zXRARfADM1vm350mB%2BRuKJevb9vytBjRsP9sm1C%2FXxBdmSLczaGhfEieC7PpKGoPYHuKu3N4j5aXNeNNZxH5ZCxeM3Gh76nZI1OI9NvKsySRe8cJtT99D5OEKvg%2FG5DQNcmyueDrEddppNokUs%2FhfgTtgYpsIdtZBEa%2FH6HPFpzMaZPrCs8y2GjCakH%2BqD%2FbcFuwUZQBxWSIx1h3fscztITiPXh1D%2FyPgN%2Bh%2BQFXvM1GkYRwbEBJ8xkRHbWmjlH2lkMPIQQubwVzzanPpGEA%2FeDibGSxgI8EFpf4YZE1M9TXWEsiJM82KC7sis6HChb4YdaPlK9bhYm6CBNVsJLEANTIRjHaVsXJ2eHs7nAIRwltxtRY1aV1CrwHZlBTwdfOeVPriVyCpqmy%2BIGM6Y6Ij2N%2BjgL7fKpC9d8a%2BuZNeLJ22UMdhJIGMIacWHNw%2F8fOw8lEWDm6ELOkDW95Nq7SVjmzaWi7c9aMWB0Bt%2FvTdsU5dSgVz5gbsNKasExzskovsP%2BpWMOP6zcQGOqUBMe2Ywk4AWmIqMNgu5wntaygnNm%2FFottrdxedxHqiwuM%2BW%2BFXOeQ%2Fv%2FCmK5bRmk%2BgwKkrBqNDGDMH1Chuts4wUkVbfzjMjdWuT0lyW2D1lCkyTO3V4j%2FrGH5XAgAy%2Bov0MQ8rf4OE6tltt2Sfl6bT%2BSoAaIc3N2xDX2e8aY36X1aI8lA%2FSlHsPDvBTBkzK%2BCZKhHnjpnLgfaJfvSs8zXnjtD1OXg9&X-Amz-Signature=7f6ee0b18b537be4af23cd4a7b734d9e09be174064ddd7b384be5bdd224a1399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
