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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYPEM5B%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDuCqPMJwzrDxzz8%2BcFO3wVEzaGkcWFIa7tfe%2FGJfErLgIhANZYn3%2FfjsNVIFgVCpPIciJofrL3oR9hLmhdIVvo%2BAxYKv8DCEwQABoMNjM3NDIzMTgzODA1Igwbe5G9I%2BhpkyTft3kq3AN4gT74aRZ59P%2BtuCKGXiax24Z0t6x3ZogNojeqsumIX500pM%2F7qld%2BFtysWCuJPNkk14tJPlSGEk%2BKw3fx4jqAGM2GGpB53onY6FDRsHo8NQmXv6S%2Bv8HZjTUQYX%2BkzHdG6KZBsNot0sJyVhNKZALPVgymfdPlTBEIC6GLzn180yhxoW30knhpTsgEG0ZKmTTsTcSthQNjRfOgVYkl9m6kOO1WcGkdJkOhJE9sIdzZ1AopqR7718cELz%2B3j4GyemfFYfKlgkyrIbcVztrCbuU0FXPM4VxWXiIUJEY0hYKvDd%2Fl1rXAPRqWja1A5dJRMndZVjNwcfiJaCDPeediAOak95Bh7kX63ffNWPLYNHb5h9Ups%2FKQ55uIilyV%2FqiiqsqHA%2B7wDfz6we60r24Bedb58xUP73frEG50J9rbEkTJmtfe2PyJxNZB8pDyNPOkZ5ZQdb2VN2qBqdesumPeM1p3JKJHZzs7YjK9%2FoHUggvrPIKkOmQ8WjFBtYCwkA9%2Bas3o%2Bwr1O5Dj85Br%2B3YqP9bNpwxmHpneGVkzJS4aE3xHQE0lPn5ezVaJyOgbjSRxxoANeFFJwv5%2FLolRwqpfaIUXpLqJiAKb2J0p6r%2F33MAwaw9AL2075TPFDPZN1DDf%2F6y%2BBjqkARKlr%2FRsERPm4oIOKUlWIlzi8siz9UoZcsKCpF%2FzL6HmR6FPfegGAgMO6Wv%2BPZbBk7LX7pTXaiikKv8VOP8AxaOXi0g%2FUqswKBAkaq%2BHGq9c5%2FAHFZ84dyoBTxkYJc%2FwcCS1VgbTQxep2DCmo0LmnAzrCSutXPZifX91rYLpO492aM91G%2B8EgZjowRa0G60mAB1LkFrpzAUX555CKO%2BTm9ON1ruT&X-Amz-Signature=bfea12ccb4d7972a6fe4c941bf637d21871228039e3ba289c3719f656cfcbdd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYPEM5B%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDuCqPMJwzrDxzz8%2BcFO3wVEzaGkcWFIa7tfe%2FGJfErLgIhANZYn3%2FfjsNVIFgVCpPIciJofrL3oR9hLmhdIVvo%2BAxYKv8DCEwQABoMNjM3NDIzMTgzODA1Igwbe5G9I%2BhpkyTft3kq3AN4gT74aRZ59P%2BtuCKGXiax24Z0t6x3ZogNojeqsumIX500pM%2F7qld%2BFtysWCuJPNkk14tJPlSGEk%2BKw3fx4jqAGM2GGpB53onY6FDRsHo8NQmXv6S%2Bv8HZjTUQYX%2BkzHdG6KZBsNot0sJyVhNKZALPVgymfdPlTBEIC6GLzn180yhxoW30knhpTsgEG0ZKmTTsTcSthQNjRfOgVYkl9m6kOO1WcGkdJkOhJE9sIdzZ1AopqR7718cELz%2B3j4GyemfFYfKlgkyrIbcVztrCbuU0FXPM4VxWXiIUJEY0hYKvDd%2Fl1rXAPRqWja1A5dJRMndZVjNwcfiJaCDPeediAOak95Bh7kX63ffNWPLYNHb5h9Ups%2FKQ55uIilyV%2FqiiqsqHA%2B7wDfz6we60r24Bedb58xUP73frEG50J9rbEkTJmtfe2PyJxNZB8pDyNPOkZ5ZQdb2VN2qBqdesumPeM1p3JKJHZzs7YjK9%2FoHUggvrPIKkOmQ8WjFBtYCwkA9%2Bas3o%2Bwr1O5Dj85Br%2B3YqP9bNpwxmHpneGVkzJS4aE3xHQE0lPn5ezVaJyOgbjSRxxoANeFFJwv5%2FLolRwqpfaIUXpLqJiAKb2J0p6r%2F33MAwaw9AL2075TPFDPZN1DDf%2F6y%2BBjqkARKlr%2FRsERPm4oIOKUlWIlzi8siz9UoZcsKCpF%2FzL6HmR6FPfegGAgMO6Wv%2BPZbBk7LX7pTXaiikKv8VOP8AxaOXi0g%2FUqswKBAkaq%2BHGq9c5%2FAHFZ84dyoBTxkYJc%2FwcCS1VgbTQxep2DCmo0LmnAzrCSutXPZifX91rYLpO492aM91G%2B8EgZjowRa0G60mAB1LkFrpzAUX555CKO%2BTm9ON1ruT&X-Amz-Signature=96c7833f4a329b4e0b099c36daf5ea65d0d6364e851f5604080e9a36cb15d113&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYPEM5B%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDuCqPMJwzrDxzz8%2BcFO3wVEzaGkcWFIa7tfe%2FGJfErLgIhANZYn3%2FfjsNVIFgVCpPIciJofrL3oR9hLmhdIVvo%2BAxYKv8DCEwQABoMNjM3NDIzMTgzODA1Igwbe5G9I%2BhpkyTft3kq3AN4gT74aRZ59P%2BtuCKGXiax24Z0t6x3ZogNojeqsumIX500pM%2F7qld%2BFtysWCuJPNkk14tJPlSGEk%2BKw3fx4jqAGM2GGpB53onY6FDRsHo8NQmXv6S%2Bv8HZjTUQYX%2BkzHdG6KZBsNot0sJyVhNKZALPVgymfdPlTBEIC6GLzn180yhxoW30knhpTsgEG0ZKmTTsTcSthQNjRfOgVYkl9m6kOO1WcGkdJkOhJE9sIdzZ1AopqR7718cELz%2B3j4GyemfFYfKlgkyrIbcVztrCbuU0FXPM4VxWXiIUJEY0hYKvDd%2Fl1rXAPRqWja1A5dJRMndZVjNwcfiJaCDPeediAOak95Bh7kX63ffNWPLYNHb5h9Ups%2FKQ55uIilyV%2FqiiqsqHA%2B7wDfz6we60r24Bedb58xUP73frEG50J9rbEkTJmtfe2PyJxNZB8pDyNPOkZ5ZQdb2VN2qBqdesumPeM1p3JKJHZzs7YjK9%2FoHUggvrPIKkOmQ8WjFBtYCwkA9%2Bas3o%2Bwr1O5Dj85Br%2B3YqP9bNpwxmHpneGVkzJS4aE3xHQE0lPn5ezVaJyOgbjSRxxoANeFFJwv5%2FLolRwqpfaIUXpLqJiAKb2J0p6r%2F33MAwaw9AL2075TPFDPZN1DDf%2F6y%2BBjqkARKlr%2FRsERPm4oIOKUlWIlzi8siz9UoZcsKCpF%2FzL6HmR6FPfegGAgMO6Wv%2BPZbBk7LX7pTXaiikKv8VOP8AxaOXi0g%2FUqswKBAkaq%2BHGq9c5%2FAHFZ84dyoBTxkYJc%2FwcCS1VgbTQxep2DCmo0LmnAzrCSutXPZifX91rYLpO492aM91G%2B8EgZjowRa0G60mAB1LkFrpzAUX555CKO%2BTm9ON1ruT&X-Amz-Signature=a0c7eb9912706d96d5566e4697d2f2808d02809083001b583eeef8468cf1d5d1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYPEM5B%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDuCqPMJwzrDxzz8%2BcFO3wVEzaGkcWFIa7tfe%2FGJfErLgIhANZYn3%2FfjsNVIFgVCpPIciJofrL3oR9hLmhdIVvo%2BAxYKv8DCEwQABoMNjM3NDIzMTgzODA1Igwbe5G9I%2BhpkyTft3kq3AN4gT74aRZ59P%2BtuCKGXiax24Z0t6x3ZogNojeqsumIX500pM%2F7qld%2BFtysWCuJPNkk14tJPlSGEk%2BKw3fx4jqAGM2GGpB53onY6FDRsHo8NQmXv6S%2Bv8HZjTUQYX%2BkzHdG6KZBsNot0sJyVhNKZALPVgymfdPlTBEIC6GLzn180yhxoW30knhpTsgEG0ZKmTTsTcSthQNjRfOgVYkl9m6kOO1WcGkdJkOhJE9sIdzZ1AopqR7718cELz%2B3j4GyemfFYfKlgkyrIbcVztrCbuU0FXPM4VxWXiIUJEY0hYKvDd%2Fl1rXAPRqWja1A5dJRMndZVjNwcfiJaCDPeediAOak95Bh7kX63ffNWPLYNHb5h9Ups%2FKQ55uIilyV%2FqiiqsqHA%2B7wDfz6we60r24Bedb58xUP73frEG50J9rbEkTJmtfe2PyJxNZB8pDyNPOkZ5ZQdb2VN2qBqdesumPeM1p3JKJHZzs7YjK9%2FoHUggvrPIKkOmQ8WjFBtYCwkA9%2Bas3o%2Bwr1O5Dj85Br%2B3YqP9bNpwxmHpneGVkzJS4aE3xHQE0lPn5ezVaJyOgbjSRxxoANeFFJwv5%2FLolRwqpfaIUXpLqJiAKb2J0p6r%2F33MAwaw9AL2075TPFDPZN1DDf%2F6y%2BBjqkARKlr%2FRsERPm4oIOKUlWIlzi8siz9UoZcsKCpF%2FzL6HmR6FPfegGAgMO6Wv%2BPZbBk7LX7pTXaiikKv8VOP8AxaOXi0g%2FUqswKBAkaq%2BHGq9c5%2FAHFZ84dyoBTxkYJc%2FwcCS1VgbTQxep2DCmo0LmnAzrCSutXPZifX91rYLpO492aM91G%2B8EgZjowRa0G60mAB1LkFrpzAUX555CKO%2BTm9ON1ruT&X-Amz-Signature=9be348549846ed23560f82ebe451a9c1e72bdd089d2b8b1e0188bcde2ae2a630&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYPEM5B%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDuCqPMJwzrDxzz8%2BcFO3wVEzaGkcWFIa7tfe%2FGJfErLgIhANZYn3%2FfjsNVIFgVCpPIciJofrL3oR9hLmhdIVvo%2BAxYKv8DCEwQABoMNjM3NDIzMTgzODA1Igwbe5G9I%2BhpkyTft3kq3AN4gT74aRZ59P%2BtuCKGXiax24Z0t6x3ZogNojeqsumIX500pM%2F7qld%2BFtysWCuJPNkk14tJPlSGEk%2BKw3fx4jqAGM2GGpB53onY6FDRsHo8NQmXv6S%2Bv8HZjTUQYX%2BkzHdG6KZBsNot0sJyVhNKZALPVgymfdPlTBEIC6GLzn180yhxoW30knhpTsgEG0ZKmTTsTcSthQNjRfOgVYkl9m6kOO1WcGkdJkOhJE9sIdzZ1AopqR7718cELz%2B3j4GyemfFYfKlgkyrIbcVztrCbuU0FXPM4VxWXiIUJEY0hYKvDd%2Fl1rXAPRqWja1A5dJRMndZVjNwcfiJaCDPeediAOak95Bh7kX63ffNWPLYNHb5h9Ups%2FKQ55uIilyV%2FqiiqsqHA%2B7wDfz6we60r24Bedb58xUP73frEG50J9rbEkTJmtfe2PyJxNZB8pDyNPOkZ5ZQdb2VN2qBqdesumPeM1p3JKJHZzs7YjK9%2FoHUggvrPIKkOmQ8WjFBtYCwkA9%2Bas3o%2Bwr1O5Dj85Br%2B3YqP9bNpwxmHpneGVkzJS4aE3xHQE0lPn5ezVaJyOgbjSRxxoANeFFJwv5%2FLolRwqpfaIUXpLqJiAKb2J0p6r%2F33MAwaw9AL2075TPFDPZN1DDf%2F6y%2BBjqkARKlr%2FRsERPm4oIOKUlWIlzi8siz9UoZcsKCpF%2FzL6HmR6FPfegGAgMO6Wv%2BPZbBk7LX7pTXaiikKv8VOP8AxaOXi0g%2FUqswKBAkaq%2BHGq9c5%2FAHFZ84dyoBTxkYJc%2FwcCS1VgbTQxep2DCmo0LmnAzrCSutXPZifX91rYLpO492aM91G%2B8EgZjowRa0G60mAB1LkFrpzAUX555CKO%2BTm9ON1ruT&X-Amz-Signature=b41358dc6bb47825c6b2f9716f3a858d583569ee947fb1d0136c7d2e6dc8df8e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYPEM5B%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDuCqPMJwzrDxzz8%2BcFO3wVEzaGkcWFIa7tfe%2FGJfErLgIhANZYn3%2FfjsNVIFgVCpPIciJofrL3oR9hLmhdIVvo%2BAxYKv8DCEwQABoMNjM3NDIzMTgzODA1Igwbe5G9I%2BhpkyTft3kq3AN4gT74aRZ59P%2BtuCKGXiax24Z0t6x3ZogNojeqsumIX500pM%2F7qld%2BFtysWCuJPNkk14tJPlSGEk%2BKw3fx4jqAGM2GGpB53onY6FDRsHo8NQmXv6S%2Bv8HZjTUQYX%2BkzHdG6KZBsNot0sJyVhNKZALPVgymfdPlTBEIC6GLzn180yhxoW30knhpTsgEG0ZKmTTsTcSthQNjRfOgVYkl9m6kOO1WcGkdJkOhJE9sIdzZ1AopqR7718cELz%2B3j4GyemfFYfKlgkyrIbcVztrCbuU0FXPM4VxWXiIUJEY0hYKvDd%2Fl1rXAPRqWja1A5dJRMndZVjNwcfiJaCDPeediAOak95Bh7kX63ffNWPLYNHb5h9Ups%2FKQ55uIilyV%2FqiiqsqHA%2B7wDfz6we60r24Bedb58xUP73frEG50J9rbEkTJmtfe2PyJxNZB8pDyNPOkZ5ZQdb2VN2qBqdesumPeM1p3JKJHZzs7YjK9%2FoHUggvrPIKkOmQ8WjFBtYCwkA9%2Bas3o%2Bwr1O5Dj85Br%2B3YqP9bNpwxmHpneGVkzJS4aE3xHQE0lPn5ezVaJyOgbjSRxxoANeFFJwv5%2FLolRwqpfaIUXpLqJiAKb2J0p6r%2F33MAwaw9AL2075TPFDPZN1DDf%2F6y%2BBjqkARKlr%2FRsERPm4oIOKUlWIlzi8siz9UoZcsKCpF%2FzL6HmR6FPfegGAgMO6Wv%2BPZbBk7LX7pTXaiikKv8VOP8AxaOXi0g%2FUqswKBAkaq%2BHGq9c5%2FAHFZ84dyoBTxkYJc%2FwcCS1VgbTQxep2DCmo0LmnAzrCSutXPZifX91rYLpO492aM91G%2B8EgZjowRa0G60mAB1LkFrpzAUX555CKO%2BTm9ON1ruT&X-Amz-Signature=b93f1d5f7a274c6ec20a5f711d921e37f1f233af1480573f8aba6b76daebab3c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYPEM5B%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDuCqPMJwzrDxzz8%2BcFO3wVEzaGkcWFIa7tfe%2FGJfErLgIhANZYn3%2FfjsNVIFgVCpPIciJofrL3oR9hLmhdIVvo%2BAxYKv8DCEwQABoMNjM3NDIzMTgzODA1Igwbe5G9I%2BhpkyTft3kq3AN4gT74aRZ59P%2BtuCKGXiax24Z0t6x3ZogNojeqsumIX500pM%2F7qld%2BFtysWCuJPNkk14tJPlSGEk%2BKw3fx4jqAGM2GGpB53onY6FDRsHo8NQmXv6S%2Bv8HZjTUQYX%2BkzHdG6KZBsNot0sJyVhNKZALPVgymfdPlTBEIC6GLzn180yhxoW30knhpTsgEG0ZKmTTsTcSthQNjRfOgVYkl9m6kOO1WcGkdJkOhJE9sIdzZ1AopqR7718cELz%2B3j4GyemfFYfKlgkyrIbcVztrCbuU0FXPM4VxWXiIUJEY0hYKvDd%2Fl1rXAPRqWja1A5dJRMndZVjNwcfiJaCDPeediAOak95Bh7kX63ffNWPLYNHb5h9Ups%2FKQ55uIilyV%2FqiiqsqHA%2B7wDfz6we60r24Bedb58xUP73frEG50J9rbEkTJmtfe2PyJxNZB8pDyNPOkZ5ZQdb2VN2qBqdesumPeM1p3JKJHZzs7YjK9%2FoHUggvrPIKkOmQ8WjFBtYCwkA9%2Bas3o%2Bwr1O5Dj85Br%2B3YqP9bNpwxmHpneGVkzJS4aE3xHQE0lPn5ezVaJyOgbjSRxxoANeFFJwv5%2FLolRwqpfaIUXpLqJiAKb2J0p6r%2F33MAwaw9AL2075TPFDPZN1DDf%2F6y%2BBjqkARKlr%2FRsERPm4oIOKUlWIlzi8siz9UoZcsKCpF%2FzL6HmR6FPfegGAgMO6Wv%2BPZbBk7LX7pTXaiikKv8VOP8AxaOXi0g%2FUqswKBAkaq%2BHGq9c5%2FAHFZ84dyoBTxkYJc%2FwcCS1VgbTQxep2DCmo0LmnAzrCSutXPZifX91rYLpO492aM91G%2B8EgZjowRa0G60mAB1LkFrpzAUX555CKO%2BTm9ON1ruT&X-Amz-Signature=5e429e2175969cc2a086f0a6244dc4b5e2e3b640c1d097505dfd697b16c0820e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
