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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6G2ZUI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6pVTpinxTudFH8qgvbTc8SdK2jAaWJomkiqFR4D1S6QIgYRytWNMgzBOaK%2FgRNqgmKoT8Di8JjKbQ87wD0aJhjHwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN7eaSRMHdT16NwVgSrcA4WSOrW3Exw6eBzB05HUzYvNuxC6ljE1PkrJVpLgUllHv%2FIUna0HjWjsMszqhyVnUjDBBcE8qOo3Dlt8cmhy8b5MqQwuRMc9xeuhE4kJ8rqfDCSeWzyI7qOSgYvz9lxXBezYEZpOQp9H2PkcEF%2FzQRonGw1C%2BFZjr%2BcL86v5KCp450Zdh6gYgwgpKUCcM9dUDYU8d%2FwhnUoXWZkfFNp%2FeVh4LGzfPI%2Binb26y%2F40P6gZmNEiFQVc7JQ9LS8RsCh5OQopWmGlclPMimjg2%2FwrL%2BB9HLLkiKBlXMcNSyrtnxX87HitGajgADYntXDogSaG5GJ4VmB1LMHjOyr3f1f7sL0kGJn5YvU07N4s0RO27oG2Uw8Oo9210vvG86Pwe4%2B0%2Ff06wfnDSKVptp1mXP6Alv1EFqS1oIUOp9Dol4H4BZjGHEnlEG9GXh%2FbvZuBTNO%2B1Kd%2FfNtw%2B%2FRKWsPucLypaihK40%2BA6uIrc76o2bbqxuA7dy8LZgVoIOCE03xkFCvXe0m5HSu8LvgDvnUtM0ChB9Pwr1QTlc%2F3G%2B3M9TOVh6ooV8pREuONajYMOOrJzvZ5hX4pVfu%2Bc9jwlvrTAd7xJR71idFObG6kPkNhONKwadoZKpGYOODEH%2F%2FSN3DBMNqdvsAGOqUBqb8tgXrTFgVKDeILZBFCOq%2BzueJzLuJC6wssBuMzd6UdM6jxzDVb20PGvCYuLzpMWSofIYi8m0QrAwQSwDqccAN7L%2Fm4Be0TQvu%2FnHCLnw1oTwJP2IbA051Waton5ZW2DQ9AsSsZuAVrZfRzNE6eKHQF0TXLipfid4Usd%2FEQo9DifGjspE6nV8ccPrpwygrocPZ9MtsZkXMxzb5pjyfaiW2FaOC0&X-Amz-Signature=b969aa8846c2c6874413566beb886abcfa85df9240f4f7051cbd4a27ce129cde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6G2ZUI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6pVTpinxTudFH8qgvbTc8SdK2jAaWJomkiqFR4D1S6QIgYRytWNMgzBOaK%2FgRNqgmKoT8Di8JjKbQ87wD0aJhjHwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN7eaSRMHdT16NwVgSrcA4WSOrW3Exw6eBzB05HUzYvNuxC6ljE1PkrJVpLgUllHv%2FIUna0HjWjsMszqhyVnUjDBBcE8qOo3Dlt8cmhy8b5MqQwuRMc9xeuhE4kJ8rqfDCSeWzyI7qOSgYvz9lxXBezYEZpOQp9H2PkcEF%2FzQRonGw1C%2BFZjr%2BcL86v5KCp450Zdh6gYgwgpKUCcM9dUDYU8d%2FwhnUoXWZkfFNp%2FeVh4LGzfPI%2Binb26y%2F40P6gZmNEiFQVc7JQ9LS8RsCh5OQopWmGlclPMimjg2%2FwrL%2BB9HLLkiKBlXMcNSyrtnxX87HitGajgADYntXDogSaG5GJ4VmB1LMHjOyr3f1f7sL0kGJn5YvU07N4s0RO27oG2Uw8Oo9210vvG86Pwe4%2B0%2Ff06wfnDSKVptp1mXP6Alv1EFqS1oIUOp9Dol4H4BZjGHEnlEG9GXh%2FbvZuBTNO%2B1Kd%2FfNtw%2B%2FRKWsPucLypaihK40%2BA6uIrc76o2bbqxuA7dy8LZgVoIOCE03xkFCvXe0m5HSu8LvgDvnUtM0ChB9Pwr1QTlc%2F3G%2B3M9TOVh6ooV8pREuONajYMOOrJzvZ5hX4pVfu%2Bc9jwlvrTAd7xJR71idFObG6kPkNhONKwadoZKpGYOODEH%2F%2FSN3DBMNqdvsAGOqUBqb8tgXrTFgVKDeILZBFCOq%2BzueJzLuJC6wssBuMzd6UdM6jxzDVb20PGvCYuLzpMWSofIYi8m0QrAwQSwDqccAN7L%2Fm4Be0TQvu%2FnHCLnw1oTwJP2IbA051Waton5ZW2DQ9AsSsZuAVrZfRzNE6eKHQF0TXLipfid4Usd%2FEQo9DifGjspE6nV8ccPrpwygrocPZ9MtsZkXMxzb5pjyfaiW2FaOC0&X-Amz-Signature=39104094b453bb74d9b2b86b8cb18bbf3a592213f4ee2826fc4fde46e79294ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6G2ZUI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6pVTpinxTudFH8qgvbTc8SdK2jAaWJomkiqFR4D1S6QIgYRytWNMgzBOaK%2FgRNqgmKoT8Di8JjKbQ87wD0aJhjHwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN7eaSRMHdT16NwVgSrcA4WSOrW3Exw6eBzB05HUzYvNuxC6ljE1PkrJVpLgUllHv%2FIUna0HjWjsMszqhyVnUjDBBcE8qOo3Dlt8cmhy8b5MqQwuRMc9xeuhE4kJ8rqfDCSeWzyI7qOSgYvz9lxXBezYEZpOQp9H2PkcEF%2FzQRonGw1C%2BFZjr%2BcL86v5KCp450Zdh6gYgwgpKUCcM9dUDYU8d%2FwhnUoXWZkfFNp%2FeVh4LGzfPI%2Binb26y%2F40P6gZmNEiFQVc7JQ9LS8RsCh5OQopWmGlclPMimjg2%2FwrL%2BB9HLLkiKBlXMcNSyrtnxX87HitGajgADYntXDogSaG5GJ4VmB1LMHjOyr3f1f7sL0kGJn5YvU07N4s0RO27oG2Uw8Oo9210vvG86Pwe4%2B0%2Ff06wfnDSKVptp1mXP6Alv1EFqS1oIUOp9Dol4H4BZjGHEnlEG9GXh%2FbvZuBTNO%2B1Kd%2FfNtw%2B%2FRKWsPucLypaihK40%2BA6uIrc76o2bbqxuA7dy8LZgVoIOCE03xkFCvXe0m5HSu8LvgDvnUtM0ChB9Pwr1QTlc%2F3G%2B3M9TOVh6ooV8pREuONajYMOOrJzvZ5hX4pVfu%2Bc9jwlvrTAd7xJR71idFObG6kPkNhONKwadoZKpGYOODEH%2F%2FSN3DBMNqdvsAGOqUBqb8tgXrTFgVKDeILZBFCOq%2BzueJzLuJC6wssBuMzd6UdM6jxzDVb20PGvCYuLzpMWSofIYi8m0QrAwQSwDqccAN7L%2Fm4Be0TQvu%2FnHCLnw1oTwJP2IbA051Waton5ZW2DQ9AsSsZuAVrZfRzNE6eKHQF0TXLipfid4Usd%2FEQo9DifGjspE6nV8ccPrpwygrocPZ9MtsZkXMxzb5pjyfaiW2FaOC0&X-Amz-Signature=91ce94ad40019c7a684eea652a7327aa83842d5d66959ddcde825a0649c6a41f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6G2ZUI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6pVTpinxTudFH8qgvbTc8SdK2jAaWJomkiqFR4D1S6QIgYRytWNMgzBOaK%2FgRNqgmKoT8Di8JjKbQ87wD0aJhjHwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN7eaSRMHdT16NwVgSrcA4WSOrW3Exw6eBzB05HUzYvNuxC6ljE1PkrJVpLgUllHv%2FIUna0HjWjsMszqhyVnUjDBBcE8qOo3Dlt8cmhy8b5MqQwuRMc9xeuhE4kJ8rqfDCSeWzyI7qOSgYvz9lxXBezYEZpOQp9H2PkcEF%2FzQRonGw1C%2BFZjr%2BcL86v5KCp450Zdh6gYgwgpKUCcM9dUDYU8d%2FwhnUoXWZkfFNp%2FeVh4LGzfPI%2Binb26y%2F40P6gZmNEiFQVc7JQ9LS8RsCh5OQopWmGlclPMimjg2%2FwrL%2BB9HLLkiKBlXMcNSyrtnxX87HitGajgADYntXDogSaG5GJ4VmB1LMHjOyr3f1f7sL0kGJn5YvU07N4s0RO27oG2Uw8Oo9210vvG86Pwe4%2B0%2Ff06wfnDSKVptp1mXP6Alv1EFqS1oIUOp9Dol4H4BZjGHEnlEG9GXh%2FbvZuBTNO%2B1Kd%2FfNtw%2B%2FRKWsPucLypaihK40%2BA6uIrc76o2bbqxuA7dy8LZgVoIOCE03xkFCvXe0m5HSu8LvgDvnUtM0ChB9Pwr1QTlc%2F3G%2B3M9TOVh6ooV8pREuONajYMOOrJzvZ5hX4pVfu%2Bc9jwlvrTAd7xJR71idFObG6kPkNhONKwadoZKpGYOODEH%2F%2FSN3DBMNqdvsAGOqUBqb8tgXrTFgVKDeILZBFCOq%2BzueJzLuJC6wssBuMzd6UdM6jxzDVb20PGvCYuLzpMWSofIYi8m0QrAwQSwDqccAN7L%2Fm4Be0TQvu%2FnHCLnw1oTwJP2IbA051Waton5ZW2DQ9AsSsZuAVrZfRzNE6eKHQF0TXLipfid4Usd%2FEQo9DifGjspE6nV8ccPrpwygrocPZ9MtsZkXMxzb5pjyfaiW2FaOC0&X-Amz-Signature=7e95d66cd42308d8d24a05efd321ebb90aac75dc4dd5b43c037f087b02fb23bd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6G2ZUI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6pVTpinxTudFH8qgvbTc8SdK2jAaWJomkiqFR4D1S6QIgYRytWNMgzBOaK%2FgRNqgmKoT8Di8JjKbQ87wD0aJhjHwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN7eaSRMHdT16NwVgSrcA4WSOrW3Exw6eBzB05HUzYvNuxC6ljE1PkrJVpLgUllHv%2FIUna0HjWjsMszqhyVnUjDBBcE8qOo3Dlt8cmhy8b5MqQwuRMc9xeuhE4kJ8rqfDCSeWzyI7qOSgYvz9lxXBezYEZpOQp9H2PkcEF%2FzQRonGw1C%2BFZjr%2BcL86v5KCp450Zdh6gYgwgpKUCcM9dUDYU8d%2FwhnUoXWZkfFNp%2FeVh4LGzfPI%2Binb26y%2F40P6gZmNEiFQVc7JQ9LS8RsCh5OQopWmGlclPMimjg2%2FwrL%2BB9HLLkiKBlXMcNSyrtnxX87HitGajgADYntXDogSaG5GJ4VmB1LMHjOyr3f1f7sL0kGJn5YvU07N4s0RO27oG2Uw8Oo9210vvG86Pwe4%2B0%2Ff06wfnDSKVptp1mXP6Alv1EFqS1oIUOp9Dol4H4BZjGHEnlEG9GXh%2FbvZuBTNO%2B1Kd%2FfNtw%2B%2FRKWsPucLypaihK40%2BA6uIrc76o2bbqxuA7dy8LZgVoIOCE03xkFCvXe0m5HSu8LvgDvnUtM0ChB9Pwr1QTlc%2F3G%2B3M9TOVh6ooV8pREuONajYMOOrJzvZ5hX4pVfu%2Bc9jwlvrTAd7xJR71idFObG6kPkNhONKwadoZKpGYOODEH%2F%2FSN3DBMNqdvsAGOqUBqb8tgXrTFgVKDeILZBFCOq%2BzueJzLuJC6wssBuMzd6UdM6jxzDVb20PGvCYuLzpMWSofIYi8m0QrAwQSwDqccAN7L%2Fm4Be0TQvu%2FnHCLnw1oTwJP2IbA051Waton5ZW2DQ9AsSsZuAVrZfRzNE6eKHQF0TXLipfid4Usd%2FEQo9DifGjspE6nV8ccPrpwygrocPZ9MtsZkXMxzb5pjyfaiW2FaOC0&X-Amz-Signature=07525d8a5f01288390b401861254ff48fae2a73dd9909e9fd3084dd38e663b97&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6G2ZUI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6pVTpinxTudFH8qgvbTc8SdK2jAaWJomkiqFR4D1S6QIgYRytWNMgzBOaK%2FgRNqgmKoT8Di8JjKbQ87wD0aJhjHwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN7eaSRMHdT16NwVgSrcA4WSOrW3Exw6eBzB05HUzYvNuxC6ljE1PkrJVpLgUllHv%2FIUna0HjWjsMszqhyVnUjDBBcE8qOo3Dlt8cmhy8b5MqQwuRMc9xeuhE4kJ8rqfDCSeWzyI7qOSgYvz9lxXBezYEZpOQp9H2PkcEF%2FzQRonGw1C%2BFZjr%2BcL86v5KCp450Zdh6gYgwgpKUCcM9dUDYU8d%2FwhnUoXWZkfFNp%2FeVh4LGzfPI%2Binb26y%2F40P6gZmNEiFQVc7JQ9LS8RsCh5OQopWmGlclPMimjg2%2FwrL%2BB9HLLkiKBlXMcNSyrtnxX87HitGajgADYntXDogSaG5GJ4VmB1LMHjOyr3f1f7sL0kGJn5YvU07N4s0RO27oG2Uw8Oo9210vvG86Pwe4%2B0%2Ff06wfnDSKVptp1mXP6Alv1EFqS1oIUOp9Dol4H4BZjGHEnlEG9GXh%2FbvZuBTNO%2B1Kd%2FfNtw%2B%2FRKWsPucLypaihK40%2BA6uIrc76o2bbqxuA7dy8LZgVoIOCE03xkFCvXe0m5HSu8LvgDvnUtM0ChB9Pwr1QTlc%2F3G%2B3M9TOVh6ooV8pREuONajYMOOrJzvZ5hX4pVfu%2Bc9jwlvrTAd7xJR71idFObG6kPkNhONKwadoZKpGYOODEH%2F%2FSN3DBMNqdvsAGOqUBqb8tgXrTFgVKDeILZBFCOq%2BzueJzLuJC6wssBuMzd6UdM6jxzDVb20PGvCYuLzpMWSofIYi8m0QrAwQSwDqccAN7L%2Fm4Be0TQvu%2FnHCLnw1oTwJP2IbA051Waton5ZW2DQ9AsSsZuAVrZfRzNE6eKHQF0TXLipfid4Usd%2FEQo9DifGjspE6nV8ccPrpwygrocPZ9MtsZkXMxzb5pjyfaiW2FaOC0&X-Amz-Signature=755610e2c363bb0e8ae40070ff44db3f2f8e624bbfee87c1330acebfac25a0a0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6G2ZUI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6pVTpinxTudFH8qgvbTc8SdK2jAaWJomkiqFR4D1S6QIgYRytWNMgzBOaK%2FgRNqgmKoT8Di8JjKbQ87wD0aJhjHwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN7eaSRMHdT16NwVgSrcA4WSOrW3Exw6eBzB05HUzYvNuxC6ljE1PkrJVpLgUllHv%2FIUna0HjWjsMszqhyVnUjDBBcE8qOo3Dlt8cmhy8b5MqQwuRMc9xeuhE4kJ8rqfDCSeWzyI7qOSgYvz9lxXBezYEZpOQp9H2PkcEF%2FzQRonGw1C%2BFZjr%2BcL86v5KCp450Zdh6gYgwgpKUCcM9dUDYU8d%2FwhnUoXWZkfFNp%2FeVh4LGzfPI%2Binb26y%2F40P6gZmNEiFQVc7JQ9LS8RsCh5OQopWmGlclPMimjg2%2FwrL%2BB9HLLkiKBlXMcNSyrtnxX87HitGajgADYntXDogSaG5GJ4VmB1LMHjOyr3f1f7sL0kGJn5YvU07N4s0RO27oG2Uw8Oo9210vvG86Pwe4%2B0%2Ff06wfnDSKVptp1mXP6Alv1EFqS1oIUOp9Dol4H4BZjGHEnlEG9GXh%2FbvZuBTNO%2B1Kd%2FfNtw%2B%2FRKWsPucLypaihK40%2BA6uIrc76o2bbqxuA7dy8LZgVoIOCE03xkFCvXe0m5HSu8LvgDvnUtM0ChB9Pwr1QTlc%2F3G%2B3M9TOVh6ooV8pREuONajYMOOrJzvZ5hX4pVfu%2Bc9jwlvrTAd7xJR71idFObG6kPkNhONKwadoZKpGYOODEH%2F%2FSN3DBMNqdvsAGOqUBqb8tgXrTFgVKDeILZBFCOq%2BzueJzLuJC6wssBuMzd6UdM6jxzDVb20PGvCYuLzpMWSofIYi8m0QrAwQSwDqccAN7L%2Fm4Be0TQvu%2FnHCLnw1oTwJP2IbA051Waton5ZW2DQ9AsSsZuAVrZfRzNE6eKHQF0TXLipfid4Usd%2FEQo9DifGjspE6nV8ccPrpwygrocPZ9MtsZkXMxzb5pjyfaiW2FaOC0&X-Amz-Signature=adb4ccac6eb9e6e17dffa4f9c6e7f743c90dc55eb1461f885e66fe987afa437e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
