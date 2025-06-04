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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RVX3P2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIF%2Bp83XBFjL%2BXjtKz1F%2BQOGLBNhXidGq2QPpWszUCjNXAiASWVCIQH6W6XwUMx1H%2BDVazKf24qaHCEWAvs0adgOPzir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMarFoi9Re2VFKXo%2BFKtwDX%2F%2BCY8Wo6FJWeviNczh3TyOjypLhOjKDe9%2BN2q3XAJncjK7q5J61xeajBubDxnwRnxnRkjT8AiapqkY5%2BB1rLTM9aVXs2GRL6nyypw8CVdjg6hnH3I8qnaJQ5u5QC7deiCgszjC%2F56D%2BPGAJINHfPL6akTqZ09uWq%2FnbNjrY3Ltcc%2F0ahiiW2gTpN43ludGodweIh0hzWhqtnQ%2FKuSAynK9KG4MwywrgWz7vJqQrGb%2BG4U2ws1OduD7aogmRRR7oJaVETDF24ZXpjE%2FbnHJKbQ5LQwx9r93DMc6PGvlAQxPlM5GsbV4aPRhujulK8UVAwsba7e2zehF9DKANRXmb2kUlORkDr0M8v9VE7f62Qq1vulpBSr%2Bd0gcxgxuSiImqMzyI1NNTRsSmPJrryH9%2Bs65lqSo%2FZlFbTwvk%2B9c5zuVbPXW0bR143qSF1tbZ409PzXvpiLgmGsOA46XsuoJnYpdvmxnMIYdHlZ6PklHpAuW%2FZJAvQelBIyIUIaMP7C3cdB%2FjmWMQd5xfuStfxqt3007tnkgVE1XN8UfCQ71GI%2FxCXlMc6OxIn33x4NkL%2F91dx5G4c987GPfcNreQBaQT8AN7%2BboXvasGIDjF0JSPZNdIiUSocaBwiYcxGbQwk4eCwgY6pgFYmJyR6jWBApQxt%2BeDDGtxdpbQHRqYYr72chLiOWdd09MoNRavMwZ95wsq5YFTIkOPfiUv5lAvj8melYZJF6IrSuB6rWHHGB2QIFnvecgacuFnNMx6afjxH1KgDfjrR%2FJPAimA%2FbTR7kCUvSmwZsGBWxD1WzNPhBILAVYuj8qXY78GM9ATAOrXJyR3vIBlPwM4dDvj4MV2Dq77LnNQvWYMCIe%2F5WmM&X-Amz-Signature=57a816a43019570792c868582ac7b89a742fc8ea5462f173279a51ed8cc40c97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RVX3P2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIF%2Bp83XBFjL%2BXjtKz1F%2BQOGLBNhXidGq2QPpWszUCjNXAiASWVCIQH6W6XwUMx1H%2BDVazKf24qaHCEWAvs0adgOPzir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMarFoi9Re2VFKXo%2BFKtwDX%2F%2BCY8Wo6FJWeviNczh3TyOjypLhOjKDe9%2BN2q3XAJncjK7q5J61xeajBubDxnwRnxnRkjT8AiapqkY5%2BB1rLTM9aVXs2GRL6nyypw8CVdjg6hnH3I8qnaJQ5u5QC7deiCgszjC%2F56D%2BPGAJINHfPL6akTqZ09uWq%2FnbNjrY3Ltcc%2F0ahiiW2gTpN43ludGodweIh0hzWhqtnQ%2FKuSAynK9KG4MwywrgWz7vJqQrGb%2BG4U2ws1OduD7aogmRRR7oJaVETDF24ZXpjE%2FbnHJKbQ5LQwx9r93DMc6PGvlAQxPlM5GsbV4aPRhujulK8UVAwsba7e2zehF9DKANRXmb2kUlORkDr0M8v9VE7f62Qq1vulpBSr%2Bd0gcxgxuSiImqMzyI1NNTRsSmPJrryH9%2Bs65lqSo%2FZlFbTwvk%2B9c5zuVbPXW0bR143qSF1tbZ409PzXvpiLgmGsOA46XsuoJnYpdvmxnMIYdHlZ6PklHpAuW%2FZJAvQelBIyIUIaMP7C3cdB%2FjmWMQd5xfuStfxqt3007tnkgVE1XN8UfCQ71GI%2FxCXlMc6OxIn33x4NkL%2F91dx5G4c987GPfcNreQBaQT8AN7%2BboXvasGIDjF0JSPZNdIiUSocaBwiYcxGbQwk4eCwgY6pgFYmJyR6jWBApQxt%2BeDDGtxdpbQHRqYYr72chLiOWdd09MoNRavMwZ95wsq5YFTIkOPfiUv5lAvj8melYZJF6IrSuB6rWHHGB2QIFnvecgacuFnNMx6afjxH1KgDfjrR%2FJPAimA%2FbTR7kCUvSmwZsGBWxD1WzNPhBILAVYuj8qXY78GM9ATAOrXJyR3vIBlPwM4dDvj4MV2Dq77LnNQvWYMCIe%2F5WmM&X-Amz-Signature=94c46aeca7a560a7e4ddfb736dc540c2a8378d2b5fba14c992783c0ba3f863e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RVX3P2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIF%2Bp83XBFjL%2BXjtKz1F%2BQOGLBNhXidGq2QPpWszUCjNXAiASWVCIQH6W6XwUMx1H%2BDVazKf24qaHCEWAvs0adgOPzir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMarFoi9Re2VFKXo%2BFKtwDX%2F%2BCY8Wo6FJWeviNczh3TyOjypLhOjKDe9%2BN2q3XAJncjK7q5J61xeajBubDxnwRnxnRkjT8AiapqkY5%2BB1rLTM9aVXs2GRL6nyypw8CVdjg6hnH3I8qnaJQ5u5QC7deiCgszjC%2F56D%2BPGAJINHfPL6akTqZ09uWq%2FnbNjrY3Ltcc%2F0ahiiW2gTpN43ludGodweIh0hzWhqtnQ%2FKuSAynK9KG4MwywrgWz7vJqQrGb%2BG4U2ws1OduD7aogmRRR7oJaVETDF24ZXpjE%2FbnHJKbQ5LQwx9r93DMc6PGvlAQxPlM5GsbV4aPRhujulK8UVAwsba7e2zehF9DKANRXmb2kUlORkDr0M8v9VE7f62Qq1vulpBSr%2Bd0gcxgxuSiImqMzyI1NNTRsSmPJrryH9%2Bs65lqSo%2FZlFbTwvk%2B9c5zuVbPXW0bR143qSF1tbZ409PzXvpiLgmGsOA46XsuoJnYpdvmxnMIYdHlZ6PklHpAuW%2FZJAvQelBIyIUIaMP7C3cdB%2FjmWMQd5xfuStfxqt3007tnkgVE1XN8UfCQ71GI%2FxCXlMc6OxIn33x4NkL%2F91dx5G4c987GPfcNreQBaQT8AN7%2BboXvasGIDjF0JSPZNdIiUSocaBwiYcxGbQwk4eCwgY6pgFYmJyR6jWBApQxt%2BeDDGtxdpbQHRqYYr72chLiOWdd09MoNRavMwZ95wsq5YFTIkOPfiUv5lAvj8melYZJF6IrSuB6rWHHGB2QIFnvecgacuFnNMx6afjxH1KgDfjrR%2FJPAimA%2FbTR7kCUvSmwZsGBWxD1WzNPhBILAVYuj8qXY78GM9ATAOrXJyR3vIBlPwM4dDvj4MV2Dq77LnNQvWYMCIe%2F5WmM&X-Amz-Signature=7bb707891249148cf6adc16a75da7ec6a7849fe2ec31d5636864b02dfeda9396&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RVX3P2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIF%2Bp83XBFjL%2BXjtKz1F%2BQOGLBNhXidGq2QPpWszUCjNXAiASWVCIQH6W6XwUMx1H%2BDVazKf24qaHCEWAvs0adgOPzir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMarFoi9Re2VFKXo%2BFKtwDX%2F%2BCY8Wo6FJWeviNczh3TyOjypLhOjKDe9%2BN2q3XAJncjK7q5J61xeajBubDxnwRnxnRkjT8AiapqkY5%2BB1rLTM9aVXs2GRL6nyypw8CVdjg6hnH3I8qnaJQ5u5QC7deiCgszjC%2F56D%2BPGAJINHfPL6akTqZ09uWq%2FnbNjrY3Ltcc%2F0ahiiW2gTpN43ludGodweIh0hzWhqtnQ%2FKuSAynK9KG4MwywrgWz7vJqQrGb%2BG4U2ws1OduD7aogmRRR7oJaVETDF24ZXpjE%2FbnHJKbQ5LQwx9r93DMc6PGvlAQxPlM5GsbV4aPRhujulK8UVAwsba7e2zehF9DKANRXmb2kUlORkDr0M8v9VE7f62Qq1vulpBSr%2Bd0gcxgxuSiImqMzyI1NNTRsSmPJrryH9%2Bs65lqSo%2FZlFbTwvk%2B9c5zuVbPXW0bR143qSF1tbZ409PzXvpiLgmGsOA46XsuoJnYpdvmxnMIYdHlZ6PklHpAuW%2FZJAvQelBIyIUIaMP7C3cdB%2FjmWMQd5xfuStfxqt3007tnkgVE1XN8UfCQ71GI%2FxCXlMc6OxIn33x4NkL%2F91dx5G4c987GPfcNreQBaQT8AN7%2BboXvasGIDjF0JSPZNdIiUSocaBwiYcxGbQwk4eCwgY6pgFYmJyR6jWBApQxt%2BeDDGtxdpbQHRqYYr72chLiOWdd09MoNRavMwZ95wsq5YFTIkOPfiUv5lAvj8melYZJF6IrSuB6rWHHGB2QIFnvecgacuFnNMx6afjxH1KgDfjrR%2FJPAimA%2FbTR7kCUvSmwZsGBWxD1WzNPhBILAVYuj8qXY78GM9ATAOrXJyR3vIBlPwM4dDvj4MV2Dq77LnNQvWYMCIe%2F5WmM&X-Amz-Signature=67c942c09ae6561ccfd6cce01837fe52f7e9c4514f34fa09b6f901434204d695&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RVX3P2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIF%2Bp83XBFjL%2BXjtKz1F%2BQOGLBNhXidGq2QPpWszUCjNXAiASWVCIQH6W6XwUMx1H%2BDVazKf24qaHCEWAvs0adgOPzir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMarFoi9Re2VFKXo%2BFKtwDX%2F%2BCY8Wo6FJWeviNczh3TyOjypLhOjKDe9%2BN2q3XAJncjK7q5J61xeajBubDxnwRnxnRkjT8AiapqkY5%2BB1rLTM9aVXs2GRL6nyypw8CVdjg6hnH3I8qnaJQ5u5QC7deiCgszjC%2F56D%2BPGAJINHfPL6akTqZ09uWq%2FnbNjrY3Ltcc%2F0ahiiW2gTpN43ludGodweIh0hzWhqtnQ%2FKuSAynK9KG4MwywrgWz7vJqQrGb%2BG4U2ws1OduD7aogmRRR7oJaVETDF24ZXpjE%2FbnHJKbQ5LQwx9r93DMc6PGvlAQxPlM5GsbV4aPRhujulK8UVAwsba7e2zehF9DKANRXmb2kUlORkDr0M8v9VE7f62Qq1vulpBSr%2Bd0gcxgxuSiImqMzyI1NNTRsSmPJrryH9%2Bs65lqSo%2FZlFbTwvk%2B9c5zuVbPXW0bR143qSF1tbZ409PzXvpiLgmGsOA46XsuoJnYpdvmxnMIYdHlZ6PklHpAuW%2FZJAvQelBIyIUIaMP7C3cdB%2FjmWMQd5xfuStfxqt3007tnkgVE1XN8UfCQ71GI%2FxCXlMc6OxIn33x4NkL%2F91dx5G4c987GPfcNreQBaQT8AN7%2BboXvasGIDjF0JSPZNdIiUSocaBwiYcxGbQwk4eCwgY6pgFYmJyR6jWBApQxt%2BeDDGtxdpbQHRqYYr72chLiOWdd09MoNRavMwZ95wsq5YFTIkOPfiUv5lAvj8melYZJF6IrSuB6rWHHGB2QIFnvecgacuFnNMx6afjxH1KgDfjrR%2FJPAimA%2FbTR7kCUvSmwZsGBWxD1WzNPhBILAVYuj8qXY78GM9ATAOrXJyR3vIBlPwM4dDvj4MV2Dq77LnNQvWYMCIe%2F5WmM&X-Amz-Signature=da5f5e789de885be5385a70c9702ea5b49b01047967f8a75de6e9ebc8c5909e1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RVX3P2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIF%2Bp83XBFjL%2BXjtKz1F%2BQOGLBNhXidGq2QPpWszUCjNXAiASWVCIQH6W6XwUMx1H%2BDVazKf24qaHCEWAvs0adgOPzir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMarFoi9Re2VFKXo%2BFKtwDX%2F%2BCY8Wo6FJWeviNczh3TyOjypLhOjKDe9%2BN2q3XAJncjK7q5J61xeajBubDxnwRnxnRkjT8AiapqkY5%2BB1rLTM9aVXs2GRL6nyypw8CVdjg6hnH3I8qnaJQ5u5QC7deiCgszjC%2F56D%2BPGAJINHfPL6akTqZ09uWq%2FnbNjrY3Ltcc%2F0ahiiW2gTpN43ludGodweIh0hzWhqtnQ%2FKuSAynK9KG4MwywrgWz7vJqQrGb%2BG4U2ws1OduD7aogmRRR7oJaVETDF24ZXpjE%2FbnHJKbQ5LQwx9r93DMc6PGvlAQxPlM5GsbV4aPRhujulK8UVAwsba7e2zehF9DKANRXmb2kUlORkDr0M8v9VE7f62Qq1vulpBSr%2Bd0gcxgxuSiImqMzyI1NNTRsSmPJrryH9%2Bs65lqSo%2FZlFbTwvk%2B9c5zuVbPXW0bR143qSF1tbZ409PzXvpiLgmGsOA46XsuoJnYpdvmxnMIYdHlZ6PklHpAuW%2FZJAvQelBIyIUIaMP7C3cdB%2FjmWMQd5xfuStfxqt3007tnkgVE1XN8UfCQ71GI%2FxCXlMc6OxIn33x4NkL%2F91dx5G4c987GPfcNreQBaQT8AN7%2BboXvasGIDjF0JSPZNdIiUSocaBwiYcxGbQwk4eCwgY6pgFYmJyR6jWBApQxt%2BeDDGtxdpbQHRqYYr72chLiOWdd09MoNRavMwZ95wsq5YFTIkOPfiUv5lAvj8melYZJF6IrSuB6rWHHGB2QIFnvecgacuFnNMx6afjxH1KgDfjrR%2FJPAimA%2FbTR7kCUvSmwZsGBWxD1WzNPhBILAVYuj8qXY78GM9ATAOrXJyR3vIBlPwM4dDvj4MV2Dq77LnNQvWYMCIe%2F5WmM&X-Amz-Signature=fb36c70fa8fb1c366c65572dacdae0fda79584de37dc5b6df20adafb467d463e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RVX3P2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIF%2Bp83XBFjL%2BXjtKz1F%2BQOGLBNhXidGq2QPpWszUCjNXAiASWVCIQH6W6XwUMx1H%2BDVazKf24qaHCEWAvs0adgOPzir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMarFoi9Re2VFKXo%2BFKtwDX%2F%2BCY8Wo6FJWeviNczh3TyOjypLhOjKDe9%2BN2q3XAJncjK7q5J61xeajBubDxnwRnxnRkjT8AiapqkY5%2BB1rLTM9aVXs2GRL6nyypw8CVdjg6hnH3I8qnaJQ5u5QC7deiCgszjC%2F56D%2BPGAJINHfPL6akTqZ09uWq%2FnbNjrY3Ltcc%2F0ahiiW2gTpN43ludGodweIh0hzWhqtnQ%2FKuSAynK9KG4MwywrgWz7vJqQrGb%2BG4U2ws1OduD7aogmRRR7oJaVETDF24ZXpjE%2FbnHJKbQ5LQwx9r93DMc6PGvlAQxPlM5GsbV4aPRhujulK8UVAwsba7e2zehF9DKANRXmb2kUlORkDr0M8v9VE7f62Qq1vulpBSr%2Bd0gcxgxuSiImqMzyI1NNTRsSmPJrryH9%2Bs65lqSo%2FZlFbTwvk%2B9c5zuVbPXW0bR143qSF1tbZ409PzXvpiLgmGsOA46XsuoJnYpdvmxnMIYdHlZ6PklHpAuW%2FZJAvQelBIyIUIaMP7C3cdB%2FjmWMQd5xfuStfxqt3007tnkgVE1XN8UfCQ71GI%2FxCXlMc6OxIn33x4NkL%2F91dx5G4c987GPfcNreQBaQT8AN7%2BboXvasGIDjF0JSPZNdIiUSocaBwiYcxGbQwk4eCwgY6pgFYmJyR6jWBApQxt%2BeDDGtxdpbQHRqYYr72chLiOWdd09MoNRavMwZ95wsq5YFTIkOPfiUv5lAvj8melYZJF6IrSuB6rWHHGB2QIFnvecgacuFnNMx6afjxH1KgDfjrR%2FJPAimA%2FbTR7kCUvSmwZsGBWxD1WzNPhBILAVYuj8qXY78GM9ATAOrXJyR3vIBlPwM4dDvj4MV2Dq77LnNQvWYMCIe%2F5WmM&X-Amz-Signature=2151e02dc6bee17994fe0274edabfbe1e837f51035fb91c4997d61d9ba83c331&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
