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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OBCVYW5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpHW33bCreHCx68eYmR4OsvHyVyukGZYd4KK8d1tR8nAiArvA6LGFcSjJkipwZ9l5RzwVTnZ9Fvi7Xj8JGxb9g2bSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjwm0sP3%2BYoIPfAhOKtwDyhUrYWaMowfPhCb8PK6fPd3nlkBY5pr1XD8pH6K5eGdhMteQQBbE3wKTG9aVWRxRgdfcuEu9mF5pWeajnvOLNlk8nVrDJWrPR1UQWxzvEV5UGebt7fMsNL2iZ7NWKCk2nYAkXXCn6nJAbaJ8p8NlYZUylNfZSxrzOB3IG0LNHqBWJs4j5h38nVCYuai2LBJn4Slt%2FZC1fLdAzZYYVGyb%2FdzsgGOavN0od9rUanjoOn%2F1l8lCdtgnsCktzwUy%2BUz5fTwNAO%2FexnWVA4fV%2BY8QIznsDXEeYHU3zW0JA881G4vhmNUJRGoAdJaRKBTFLfTJVQCQXNJQwa64oEIVOIdv1OYkQfJMLeLXDUS3K1uKegw%2BHek5GYoA5RBv5396CtCu83sVb23tzNPVToE2hoe9DPjXPN03dlq6%2F0fKwbzhUJ5zlw7x5ww%2FxIrY8wkNn3Fo5Wlw9YD3wV6jx7qC5xP%2FrXrEPfW%2B3YAr%2F%2BRhrMOeuH%2BxLpsT1swubL2tDb2rwEaoBCyPagxO22%2Fh%2BkuCdpM%2B0Kej3lo3e7vqJx4zzHs90ZPhZ6pn%2Fhp%2Fyf7srxOIfjBaoWAfOvMOjVCrsrn3i%2FDlpXw7%2BLcgW4C2yXHmbCfp57CyZvOwgdMlgixxmMwwmu%2FVvgY6pgH3R7ycnAmeDswPotkZuMBlknxOKnRnDOof%2FehwCyKFQ6naDHQjvXn2xTi2QJNEGqKNOC2RP7CMrUjbhWF%2BlUsI2yOgvNUmBkB5nHHYAgu4U%2F5kUJ5ye52XZicZrvKfN1zeyh2dAxUATL68%2FqhAIUTSoP5kpXRUvDv5KMqV%2FtgunJgXNeXmdOcu4JdDeSW8u3IGnEEqW4mRGYU%2FXstMcTxEqV3pvySt&X-Amz-Signature=21ed5b82c497f7cb0dc4193d2d8e935d145378637f682ca40257b6d75e650de8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OBCVYW5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpHW33bCreHCx68eYmR4OsvHyVyukGZYd4KK8d1tR8nAiArvA6LGFcSjJkipwZ9l5RzwVTnZ9Fvi7Xj8JGxb9g2bSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjwm0sP3%2BYoIPfAhOKtwDyhUrYWaMowfPhCb8PK6fPd3nlkBY5pr1XD8pH6K5eGdhMteQQBbE3wKTG9aVWRxRgdfcuEu9mF5pWeajnvOLNlk8nVrDJWrPR1UQWxzvEV5UGebt7fMsNL2iZ7NWKCk2nYAkXXCn6nJAbaJ8p8NlYZUylNfZSxrzOB3IG0LNHqBWJs4j5h38nVCYuai2LBJn4Slt%2FZC1fLdAzZYYVGyb%2FdzsgGOavN0od9rUanjoOn%2F1l8lCdtgnsCktzwUy%2BUz5fTwNAO%2FexnWVA4fV%2BY8QIznsDXEeYHU3zW0JA881G4vhmNUJRGoAdJaRKBTFLfTJVQCQXNJQwa64oEIVOIdv1OYkQfJMLeLXDUS3K1uKegw%2BHek5GYoA5RBv5396CtCu83sVb23tzNPVToE2hoe9DPjXPN03dlq6%2F0fKwbzhUJ5zlw7x5ww%2FxIrY8wkNn3Fo5Wlw9YD3wV6jx7qC5xP%2FrXrEPfW%2B3YAr%2F%2BRhrMOeuH%2BxLpsT1swubL2tDb2rwEaoBCyPagxO22%2Fh%2BkuCdpM%2B0Kej3lo3e7vqJx4zzHs90ZPhZ6pn%2Fhp%2Fyf7srxOIfjBaoWAfOvMOjVCrsrn3i%2FDlpXw7%2BLcgW4C2yXHmbCfp57CyZvOwgdMlgixxmMwwmu%2FVvgY6pgH3R7ycnAmeDswPotkZuMBlknxOKnRnDOof%2FehwCyKFQ6naDHQjvXn2xTi2QJNEGqKNOC2RP7CMrUjbhWF%2BlUsI2yOgvNUmBkB5nHHYAgu4U%2F5kUJ5ye52XZicZrvKfN1zeyh2dAxUATL68%2FqhAIUTSoP5kpXRUvDv5KMqV%2FtgunJgXNeXmdOcu4JdDeSW8u3IGnEEqW4mRGYU%2FXstMcTxEqV3pvySt&X-Amz-Signature=06969207851ce9c57d7233a39a0f4c8cdd30da3f1a11d16cadb90d025f828d59&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OBCVYW5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpHW33bCreHCx68eYmR4OsvHyVyukGZYd4KK8d1tR8nAiArvA6LGFcSjJkipwZ9l5RzwVTnZ9Fvi7Xj8JGxb9g2bSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjwm0sP3%2BYoIPfAhOKtwDyhUrYWaMowfPhCb8PK6fPd3nlkBY5pr1XD8pH6K5eGdhMteQQBbE3wKTG9aVWRxRgdfcuEu9mF5pWeajnvOLNlk8nVrDJWrPR1UQWxzvEV5UGebt7fMsNL2iZ7NWKCk2nYAkXXCn6nJAbaJ8p8NlYZUylNfZSxrzOB3IG0LNHqBWJs4j5h38nVCYuai2LBJn4Slt%2FZC1fLdAzZYYVGyb%2FdzsgGOavN0od9rUanjoOn%2F1l8lCdtgnsCktzwUy%2BUz5fTwNAO%2FexnWVA4fV%2BY8QIznsDXEeYHU3zW0JA881G4vhmNUJRGoAdJaRKBTFLfTJVQCQXNJQwa64oEIVOIdv1OYkQfJMLeLXDUS3K1uKegw%2BHek5GYoA5RBv5396CtCu83sVb23tzNPVToE2hoe9DPjXPN03dlq6%2F0fKwbzhUJ5zlw7x5ww%2FxIrY8wkNn3Fo5Wlw9YD3wV6jx7qC5xP%2FrXrEPfW%2B3YAr%2F%2BRhrMOeuH%2BxLpsT1swubL2tDb2rwEaoBCyPagxO22%2Fh%2BkuCdpM%2B0Kej3lo3e7vqJx4zzHs90ZPhZ6pn%2Fhp%2Fyf7srxOIfjBaoWAfOvMOjVCrsrn3i%2FDlpXw7%2BLcgW4C2yXHmbCfp57CyZvOwgdMlgixxmMwwmu%2FVvgY6pgH3R7ycnAmeDswPotkZuMBlknxOKnRnDOof%2FehwCyKFQ6naDHQjvXn2xTi2QJNEGqKNOC2RP7CMrUjbhWF%2BlUsI2yOgvNUmBkB5nHHYAgu4U%2F5kUJ5ye52XZicZrvKfN1zeyh2dAxUATL68%2FqhAIUTSoP5kpXRUvDv5KMqV%2FtgunJgXNeXmdOcu4JdDeSW8u3IGnEEqW4mRGYU%2FXstMcTxEqV3pvySt&X-Amz-Signature=10917fbcb34470bf1b50a7c21d89e3d887bccdfd71e8631c6c9b81fc23ffcb93&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OBCVYW5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpHW33bCreHCx68eYmR4OsvHyVyukGZYd4KK8d1tR8nAiArvA6LGFcSjJkipwZ9l5RzwVTnZ9Fvi7Xj8JGxb9g2bSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjwm0sP3%2BYoIPfAhOKtwDyhUrYWaMowfPhCb8PK6fPd3nlkBY5pr1XD8pH6K5eGdhMteQQBbE3wKTG9aVWRxRgdfcuEu9mF5pWeajnvOLNlk8nVrDJWrPR1UQWxzvEV5UGebt7fMsNL2iZ7NWKCk2nYAkXXCn6nJAbaJ8p8NlYZUylNfZSxrzOB3IG0LNHqBWJs4j5h38nVCYuai2LBJn4Slt%2FZC1fLdAzZYYVGyb%2FdzsgGOavN0od9rUanjoOn%2F1l8lCdtgnsCktzwUy%2BUz5fTwNAO%2FexnWVA4fV%2BY8QIznsDXEeYHU3zW0JA881G4vhmNUJRGoAdJaRKBTFLfTJVQCQXNJQwa64oEIVOIdv1OYkQfJMLeLXDUS3K1uKegw%2BHek5GYoA5RBv5396CtCu83sVb23tzNPVToE2hoe9DPjXPN03dlq6%2F0fKwbzhUJ5zlw7x5ww%2FxIrY8wkNn3Fo5Wlw9YD3wV6jx7qC5xP%2FrXrEPfW%2B3YAr%2F%2BRhrMOeuH%2BxLpsT1swubL2tDb2rwEaoBCyPagxO22%2Fh%2BkuCdpM%2B0Kej3lo3e7vqJx4zzHs90ZPhZ6pn%2Fhp%2Fyf7srxOIfjBaoWAfOvMOjVCrsrn3i%2FDlpXw7%2BLcgW4C2yXHmbCfp57CyZvOwgdMlgixxmMwwmu%2FVvgY6pgH3R7ycnAmeDswPotkZuMBlknxOKnRnDOof%2FehwCyKFQ6naDHQjvXn2xTi2QJNEGqKNOC2RP7CMrUjbhWF%2BlUsI2yOgvNUmBkB5nHHYAgu4U%2F5kUJ5ye52XZicZrvKfN1zeyh2dAxUATL68%2FqhAIUTSoP5kpXRUvDv5KMqV%2FtgunJgXNeXmdOcu4JdDeSW8u3IGnEEqW4mRGYU%2FXstMcTxEqV3pvySt&X-Amz-Signature=b094ecc06cd6498f3ffa4444306875adad1988058dc69aee3c0ec4003617eb72&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OBCVYW5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpHW33bCreHCx68eYmR4OsvHyVyukGZYd4KK8d1tR8nAiArvA6LGFcSjJkipwZ9l5RzwVTnZ9Fvi7Xj8JGxb9g2bSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjwm0sP3%2BYoIPfAhOKtwDyhUrYWaMowfPhCb8PK6fPd3nlkBY5pr1XD8pH6K5eGdhMteQQBbE3wKTG9aVWRxRgdfcuEu9mF5pWeajnvOLNlk8nVrDJWrPR1UQWxzvEV5UGebt7fMsNL2iZ7NWKCk2nYAkXXCn6nJAbaJ8p8NlYZUylNfZSxrzOB3IG0LNHqBWJs4j5h38nVCYuai2LBJn4Slt%2FZC1fLdAzZYYVGyb%2FdzsgGOavN0od9rUanjoOn%2F1l8lCdtgnsCktzwUy%2BUz5fTwNAO%2FexnWVA4fV%2BY8QIznsDXEeYHU3zW0JA881G4vhmNUJRGoAdJaRKBTFLfTJVQCQXNJQwa64oEIVOIdv1OYkQfJMLeLXDUS3K1uKegw%2BHek5GYoA5RBv5396CtCu83sVb23tzNPVToE2hoe9DPjXPN03dlq6%2F0fKwbzhUJ5zlw7x5ww%2FxIrY8wkNn3Fo5Wlw9YD3wV6jx7qC5xP%2FrXrEPfW%2B3YAr%2F%2BRhrMOeuH%2BxLpsT1swubL2tDb2rwEaoBCyPagxO22%2Fh%2BkuCdpM%2B0Kej3lo3e7vqJx4zzHs90ZPhZ6pn%2Fhp%2Fyf7srxOIfjBaoWAfOvMOjVCrsrn3i%2FDlpXw7%2BLcgW4C2yXHmbCfp57CyZvOwgdMlgixxmMwwmu%2FVvgY6pgH3R7ycnAmeDswPotkZuMBlknxOKnRnDOof%2FehwCyKFQ6naDHQjvXn2xTi2QJNEGqKNOC2RP7CMrUjbhWF%2BlUsI2yOgvNUmBkB5nHHYAgu4U%2F5kUJ5ye52XZicZrvKfN1zeyh2dAxUATL68%2FqhAIUTSoP5kpXRUvDv5KMqV%2FtgunJgXNeXmdOcu4JdDeSW8u3IGnEEqW4mRGYU%2FXstMcTxEqV3pvySt&X-Amz-Signature=ec39945ee8c8c2765054b8ba6e973ec5d517a468368cca608edc9754c7486e78&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OBCVYW5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpHW33bCreHCx68eYmR4OsvHyVyukGZYd4KK8d1tR8nAiArvA6LGFcSjJkipwZ9l5RzwVTnZ9Fvi7Xj8JGxb9g2bSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjwm0sP3%2BYoIPfAhOKtwDyhUrYWaMowfPhCb8PK6fPd3nlkBY5pr1XD8pH6K5eGdhMteQQBbE3wKTG9aVWRxRgdfcuEu9mF5pWeajnvOLNlk8nVrDJWrPR1UQWxzvEV5UGebt7fMsNL2iZ7NWKCk2nYAkXXCn6nJAbaJ8p8NlYZUylNfZSxrzOB3IG0LNHqBWJs4j5h38nVCYuai2LBJn4Slt%2FZC1fLdAzZYYVGyb%2FdzsgGOavN0od9rUanjoOn%2F1l8lCdtgnsCktzwUy%2BUz5fTwNAO%2FexnWVA4fV%2BY8QIznsDXEeYHU3zW0JA881G4vhmNUJRGoAdJaRKBTFLfTJVQCQXNJQwa64oEIVOIdv1OYkQfJMLeLXDUS3K1uKegw%2BHek5GYoA5RBv5396CtCu83sVb23tzNPVToE2hoe9DPjXPN03dlq6%2F0fKwbzhUJ5zlw7x5ww%2FxIrY8wkNn3Fo5Wlw9YD3wV6jx7qC5xP%2FrXrEPfW%2B3YAr%2F%2BRhrMOeuH%2BxLpsT1swubL2tDb2rwEaoBCyPagxO22%2Fh%2BkuCdpM%2B0Kej3lo3e7vqJx4zzHs90ZPhZ6pn%2Fhp%2Fyf7srxOIfjBaoWAfOvMOjVCrsrn3i%2FDlpXw7%2BLcgW4C2yXHmbCfp57CyZvOwgdMlgixxmMwwmu%2FVvgY6pgH3R7ycnAmeDswPotkZuMBlknxOKnRnDOof%2FehwCyKFQ6naDHQjvXn2xTi2QJNEGqKNOC2RP7CMrUjbhWF%2BlUsI2yOgvNUmBkB5nHHYAgu4U%2F5kUJ5ye52XZicZrvKfN1zeyh2dAxUATL68%2FqhAIUTSoP5kpXRUvDv5KMqV%2FtgunJgXNeXmdOcu4JdDeSW8u3IGnEEqW4mRGYU%2FXstMcTxEqV3pvySt&X-Amz-Signature=74d933319466bb502f47c88efb3c8d2662b9d54edba798e97e7ac4b016760a31&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OBCVYW5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpHW33bCreHCx68eYmR4OsvHyVyukGZYd4KK8d1tR8nAiArvA6LGFcSjJkipwZ9l5RzwVTnZ9Fvi7Xj8JGxb9g2bSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMjwm0sP3%2BYoIPfAhOKtwDyhUrYWaMowfPhCb8PK6fPd3nlkBY5pr1XD8pH6K5eGdhMteQQBbE3wKTG9aVWRxRgdfcuEu9mF5pWeajnvOLNlk8nVrDJWrPR1UQWxzvEV5UGebt7fMsNL2iZ7NWKCk2nYAkXXCn6nJAbaJ8p8NlYZUylNfZSxrzOB3IG0LNHqBWJs4j5h38nVCYuai2LBJn4Slt%2FZC1fLdAzZYYVGyb%2FdzsgGOavN0od9rUanjoOn%2F1l8lCdtgnsCktzwUy%2BUz5fTwNAO%2FexnWVA4fV%2BY8QIznsDXEeYHU3zW0JA881G4vhmNUJRGoAdJaRKBTFLfTJVQCQXNJQwa64oEIVOIdv1OYkQfJMLeLXDUS3K1uKegw%2BHek5GYoA5RBv5396CtCu83sVb23tzNPVToE2hoe9DPjXPN03dlq6%2F0fKwbzhUJ5zlw7x5ww%2FxIrY8wkNn3Fo5Wlw9YD3wV6jx7qC5xP%2FrXrEPfW%2B3YAr%2F%2BRhrMOeuH%2BxLpsT1swubL2tDb2rwEaoBCyPagxO22%2Fh%2BkuCdpM%2B0Kej3lo3e7vqJx4zzHs90ZPhZ6pn%2Fhp%2Fyf7srxOIfjBaoWAfOvMOjVCrsrn3i%2FDlpXw7%2BLcgW4C2yXHmbCfp57CyZvOwgdMlgixxmMwwmu%2FVvgY6pgH3R7ycnAmeDswPotkZuMBlknxOKnRnDOof%2FehwCyKFQ6naDHQjvXn2xTi2QJNEGqKNOC2RP7CMrUjbhWF%2BlUsI2yOgvNUmBkB5nHHYAgu4U%2F5kUJ5ye52XZicZrvKfN1zeyh2dAxUATL68%2FqhAIUTSoP5kpXRUvDv5KMqV%2FtgunJgXNeXmdOcu4JdDeSW8u3IGnEEqW4mRGYU%2FXstMcTxEqV3pvySt&X-Amz-Signature=f6328b0bea7755fa2cd7ff67a180f97f2d3c1f74f23996f279bc03157b775b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
