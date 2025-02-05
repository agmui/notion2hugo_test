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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE6AMKP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDDKRurmLEEMA%2B6spFoCf6xudAhkSg7HxQxIX2MJTGRUgIhAKKgBrODj5KMeMXu47RWrdwq829%2FzG0vXyX0EIJ76df1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgzMQAbIkBujSeHsL54q3ANVl776xuFrx6YoKTb9EcLvb0XZngQqXjGMFzrayVdmZlYLxQhtFf7%2FO3fClvovnzc9xVc3cQemXQ7p4R%2BjJIq19KES1ByjrPZRuBseb54hWCh8zBWoJUvRRA4aOsggWbNC9v3QQST%2BajE9x99SUODSWmELu3b1ePCF9Bu6OTcLsD9Ivc3iTi7vv9sgu%2F%2FKPkmZdbzFO3d6KXH97N4zJQvBkEeZWoMxoXptNSZ9g5ad%2FBtNFvzfyyz9fJukFFITXY4vuh5CQ0G5hMFtBTteZt4lf9WHmMLRRuvjIGietXKo4JOGGRkECMpoCiz%2Fv5pYzr%2B087Kius%2Fnham%2FVcoCm9qxzfoboLi0ikcfaEhV0%2BliIZSvOxwiqsicYa9yIDL0uZZb%2BOo9UQZW%2Fz0YzCABDZ8nKEN24PkpH%2Bv72P7DQ%2B82w3CFNP0gSGdl3oEHFEKiM0m9fFYOrN7QF%2FOPMLk%2FE5hiYVjuFsEQnyReUcNE4tX5ORknJdpLbQdKLIkw%2Fj62qPIFYU8Pur9r%2FgRK8xcAbxaua60umsPYNe5sctgiHqTOuPB%2FiwqM%2FG0nzAZZ0u7Ct5uY%2FrrJMG7VJtvVGZXnNHTcpsLlOKekMqwGan0rCl79F85Cl6r1u7OTpRs2nDDBu469BjqkAaSJ8iKdYQjht%2BDuC8s7EpHb0jy0VnJRIZ4U%2BOYAxsVcm4iHRW0F6Y9Lg2Hy7gc0ZfXgL3nGenIcVAIhaNXmu94IXMD87%2BCKve1sKDxNA%2F5z%2FYUs1BVdNjadQk8ev5Vz8UtKkQXiOoNEP49g8DBC7UA49O5W%2BxGybjGezGKA1%2Ba7s3uTpaVu8Pwkzke8DtZbcxeWhZBJ2zLiMouqpi1WahXrfAYT&X-Amz-Signature=542d0b995d1a5e1b1eb428daf9a925781380fbb6340e48679a6fef54a73714a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE6AMKP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDDKRurmLEEMA%2B6spFoCf6xudAhkSg7HxQxIX2MJTGRUgIhAKKgBrODj5KMeMXu47RWrdwq829%2FzG0vXyX0EIJ76df1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgzMQAbIkBujSeHsL54q3ANVl776xuFrx6YoKTb9EcLvb0XZngQqXjGMFzrayVdmZlYLxQhtFf7%2FO3fClvovnzc9xVc3cQemXQ7p4R%2BjJIq19KES1ByjrPZRuBseb54hWCh8zBWoJUvRRA4aOsggWbNC9v3QQST%2BajE9x99SUODSWmELu3b1ePCF9Bu6OTcLsD9Ivc3iTi7vv9sgu%2F%2FKPkmZdbzFO3d6KXH97N4zJQvBkEeZWoMxoXptNSZ9g5ad%2FBtNFvzfyyz9fJukFFITXY4vuh5CQ0G5hMFtBTteZt4lf9WHmMLRRuvjIGietXKo4JOGGRkECMpoCiz%2Fv5pYzr%2B087Kius%2Fnham%2FVcoCm9qxzfoboLi0ikcfaEhV0%2BliIZSvOxwiqsicYa9yIDL0uZZb%2BOo9UQZW%2Fz0YzCABDZ8nKEN24PkpH%2Bv72P7DQ%2B82w3CFNP0gSGdl3oEHFEKiM0m9fFYOrN7QF%2FOPMLk%2FE5hiYVjuFsEQnyReUcNE4tX5ORknJdpLbQdKLIkw%2Fj62qPIFYU8Pur9r%2FgRK8xcAbxaua60umsPYNe5sctgiHqTOuPB%2FiwqM%2FG0nzAZZ0u7Ct5uY%2FrrJMG7VJtvVGZXnNHTcpsLlOKekMqwGan0rCl79F85Cl6r1u7OTpRs2nDDBu469BjqkAaSJ8iKdYQjht%2BDuC8s7EpHb0jy0VnJRIZ4U%2BOYAxsVcm4iHRW0F6Y9Lg2Hy7gc0ZfXgL3nGenIcVAIhaNXmu94IXMD87%2BCKve1sKDxNA%2F5z%2FYUs1BVdNjadQk8ev5Vz8UtKkQXiOoNEP49g8DBC7UA49O5W%2BxGybjGezGKA1%2Ba7s3uTpaVu8Pwkzke8DtZbcxeWhZBJ2zLiMouqpi1WahXrfAYT&X-Amz-Signature=ca58b9324481878f6a9e597645334bc594207ea8eef150aefb1b19a9dd290e01&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE6AMKP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDDKRurmLEEMA%2B6spFoCf6xudAhkSg7HxQxIX2MJTGRUgIhAKKgBrODj5KMeMXu47RWrdwq829%2FzG0vXyX0EIJ76df1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgzMQAbIkBujSeHsL54q3ANVl776xuFrx6YoKTb9EcLvb0XZngQqXjGMFzrayVdmZlYLxQhtFf7%2FO3fClvovnzc9xVc3cQemXQ7p4R%2BjJIq19KES1ByjrPZRuBseb54hWCh8zBWoJUvRRA4aOsggWbNC9v3QQST%2BajE9x99SUODSWmELu3b1ePCF9Bu6OTcLsD9Ivc3iTi7vv9sgu%2F%2FKPkmZdbzFO3d6KXH97N4zJQvBkEeZWoMxoXptNSZ9g5ad%2FBtNFvzfyyz9fJukFFITXY4vuh5CQ0G5hMFtBTteZt4lf9WHmMLRRuvjIGietXKo4JOGGRkECMpoCiz%2Fv5pYzr%2B087Kius%2Fnham%2FVcoCm9qxzfoboLi0ikcfaEhV0%2BliIZSvOxwiqsicYa9yIDL0uZZb%2BOo9UQZW%2Fz0YzCABDZ8nKEN24PkpH%2Bv72P7DQ%2B82w3CFNP0gSGdl3oEHFEKiM0m9fFYOrN7QF%2FOPMLk%2FE5hiYVjuFsEQnyReUcNE4tX5ORknJdpLbQdKLIkw%2Fj62qPIFYU8Pur9r%2FgRK8xcAbxaua60umsPYNe5sctgiHqTOuPB%2FiwqM%2FG0nzAZZ0u7Ct5uY%2FrrJMG7VJtvVGZXnNHTcpsLlOKekMqwGan0rCl79F85Cl6r1u7OTpRs2nDDBu469BjqkAaSJ8iKdYQjht%2BDuC8s7EpHb0jy0VnJRIZ4U%2BOYAxsVcm4iHRW0F6Y9Lg2Hy7gc0ZfXgL3nGenIcVAIhaNXmu94IXMD87%2BCKve1sKDxNA%2F5z%2FYUs1BVdNjadQk8ev5Vz8UtKkQXiOoNEP49g8DBC7UA49O5W%2BxGybjGezGKA1%2Ba7s3uTpaVu8Pwkzke8DtZbcxeWhZBJ2zLiMouqpi1WahXrfAYT&X-Amz-Signature=f75caa75e33f67c2144b2098063debe331b070e3403de3c87ff740fa8a716773&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE6AMKP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDDKRurmLEEMA%2B6spFoCf6xudAhkSg7HxQxIX2MJTGRUgIhAKKgBrODj5KMeMXu47RWrdwq829%2FzG0vXyX0EIJ76df1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgzMQAbIkBujSeHsL54q3ANVl776xuFrx6YoKTb9EcLvb0XZngQqXjGMFzrayVdmZlYLxQhtFf7%2FO3fClvovnzc9xVc3cQemXQ7p4R%2BjJIq19KES1ByjrPZRuBseb54hWCh8zBWoJUvRRA4aOsggWbNC9v3QQST%2BajE9x99SUODSWmELu3b1ePCF9Bu6OTcLsD9Ivc3iTi7vv9sgu%2F%2FKPkmZdbzFO3d6KXH97N4zJQvBkEeZWoMxoXptNSZ9g5ad%2FBtNFvzfyyz9fJukFFITXY4vuh5CQ0G5hMFtBTteZt4lf9WHmMLRRuvjIGietXKo4JOGGRkECMpoCiz%2Fv5pYzr%2B087Kius%2Fnham%2FVcoCm9qxzfoboLi0ikcfaEhV0%2BliIZSvOxwiqsicYa9yIDL0uZZb%2BOo9UQZW%2Fz0YzCABDZ8nKEN24PkpH%2Bv72P7DQ%2B82w3CFNP0gSGdl3oEHFEKiM0m9fFYOrN7QF%2FOPMLk%2FE5hiYVjuFsEQnyReUcNE4tX5ORknJdpLbQdKLIkw%2Fj62qPIFYU8Pur9r%2FgRK8xcAbxaua60umsPYNe5sctgiHqTOuPB%2FiwqM%2FG0nzAZZ0u7Ct5uY%2FrrJMG7VJtvVGZXnNHTcpsLlOKekMqwGan0rCl79F85Cl6r1u7OTpRs2nDDBu469BjqkAaSJ8iKdYQjht%2BDuC8s7EpHb0jy0VnJRIZ4U%2BOYAxsVcm4iHRW0F6Y9Lg2Hy7gc0ZfXgL3nGenIcVAIhaNXmu94IXMD87%2BCKve1sKDxNA%2F5z%2FYUs1BVdNjadQk8ev5Vz8UtKkQXiOoNEP49g8DBC7UA49O5W%2BxGybjGezGKA1%2Ba7s3uTpaVu8Pwkzke8DtZbcxeWhZBJ2zLiMouqpi1WahXrfAYT&X-Amz-Signature=d1a14c12f2b986910a20a3e0d4fbf7f2e881b48f0395255c68dd87a3797b428f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE6AMKP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDDKRurmLEEMA%2B6spFoCf6xudAhkSg7HxQxIX2MJTGRUgIhAKKgBrODj5KMeMXu47RWrdwq829%2FzG0vXyX0EIJ76df1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgzMQAbIkBujSeHsL54q3ANVl776xuFrx6YoKTb9EcLvb0XZngQqXjGMFzrayVdmZlYLxQhtFf7%2FO3fClvovnzc9xVc3cQemXQ7p4R%2BjJIq19KES1ByjrPZRuBseb54hWCh8zBWoJUvRRA4aOsggWbNC9v3QQST%2BajE9x99SUODSWmELu3b1ePCF9Bu6OTcLsD9Ivc3iTi7vv9sgu%2F%2FKPkmZdbzFO3d6KXH97N4zJQvBkEeZWoMxoXptNSZ9g5ad%2FBtNFvzfyyz9fJukFFITXY4vuh5CQ0G5hMFtBTteZt4lf9WHmMLRRuvjIGietXKo4JOGGRkECMpoCiz%2Fv5pYzr%2B087Kius%2Fnham%2FVcoCm9qxzfoboLi0ikcfaEhV0%2BliIZSvOxwiqsicYa9yIDL0uZZb%2BOo9UQZW%2Fz0YzCABDZ8nKEN24PkpH%2Bv72P7DQ%2B82w3CFNP0gSGdl3oEHFEKiM0m9fFYOrN7QF%2FOPMLk%2FE5hiYVjuFsEQnyReUcNE4tX5ORknJdpLbQdKLIkw%2Fj62qPIFYU8Pur9r%2FgRK8xcAbxaua60umsPYNe5sctgiHqTOuPB%2FiwqM%2FG0nzAZZ0u7Ct5uY%2FrrJMG7VJtvVGZXnNHTcpsLlOKekMqwGan0rCl79F85Cl6r1u7OTpRs2nDDBu469BjqkAaSJ8iKdYQjht%2BDuC8s7EpHb0jy0VnJRIZ4U%2BOYAxsVcm4iHRW0F6Y9Lg2Hy7gc0ZfXgL3nGenIcVAIhaNXmu94IXMD87%2BCKve1sKDxNA%2F5z%2FYUs1BVdNjadQk8ev5Vz8UtKkQXiOoNEP49g8DBC7UA49O5W%2BxGybjGezGKA1%2Ba7s3uTpaVu8Pwkzke8DtZbcxeWhZBJ2zLiMouqpi1WahXrfAYT&X-Amz-Signature=3f82772d59cacb0e1f5f808966a2b0df9ce5873e65d0b2acee047e5e728fc30f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE6AMKP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDDKRurmLEEMA%2B6spFoCf6xudAhkSg7HxQxIX2MJTGRUgIhAKKgBrODj5KMeMXu47RWrdwq829%2FzG0vXyX0EIJ76df1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgzMQAbIkBujSeHsL54q3ANVl776xuFrx6YoKTb9EcLvb0XZngQqXjGMFzrayVdmZlYLxQhtFf7%2FO3fClvovnzc9xVc3cQemXQ7p4R%2BjJIq19KES1ByjrPZRuBseb54hWCh8zBWoJUvRRA4aOsggWbNC9v3QQST%2BajE9x99SUODSWmELu3b1ePCF9Bu6OTcLsD9Ivc3iTi7vv9sgu%2F%2FKPkmZdbzFO3d6KXH97N4zJQvBkEeZWoMxoXptNSZ9g5ad%2FBtNFvzfyyz9fJukFFITXY4vuh5CQ0G5hMFtBTteZt4lf9WHmMLRRuvjIGietXKo4JOGGRkECMpoCiz%2Fv5pYzr%2B087Kius%2Fnham%2FVcoCm9qxzfoboLi0ikcfaEhV0%2BliIZSvOxwiqsicYa9yIDL0uZZb%2BOo9UQZW%2Fz0YzCABDZ8nKEN24PkpH%2Bv72P7DQ%2B82w3CFNP0gSGdl3oEHFEKiM0m9fFYOrN7QF%2FOPMLk%2FE5hiYVjuFsEQnyReUcNE4tX5ORknJdpLbQdKLIkw%2Fj62qPIFYU8Pur9r%2FgRK8xcAbxaua60umsPYNe5sctgiHqTOuPB%2FiwqM%2FG0nzAZZ0u7Ct5uY%2FrrJMG7VJtvVGZXnNHTcpsLlOKekMqwGan0rCl79F85Cl6r1u7OTpRs2nDDBu469BjqkAaSJ8iKdYQjht%2BDuC8s7EpHb0jy0VnJRIZ4U%2BOYAxsVcm4iHRW0F6Y9Lg2Hy7gc0ZfXgL3nGenIcVAIhaNXmu94IXMD87%2BCKve1sKDxNA%2F5z%2FYUs1BVdNjadQk8ev5Vz8UtKkQXiOoNEP49g8DBC7UA49O5W%2BxGybjGezGKA1%2Ba7s3uTpaVu8Pwkzke8DtZbcxeWhZBJ2zLiMouqpi1WahXrfAYT&X-Amz-Signature=c15645b44638fb301a4bf84b7ebd832ae5de98c3365405779b64a1e08c79150e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE6AMKP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDDKRurmLEEMA%2B6spFoCf6xudAhkSg7HxQxIX2MJTGRUgIhAKKgBrODj5KMeMXu47RWrdwq829%2FzG0vXyX0EIJ76df1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgzMQAbIkBujSeHsL54q3ANVl776xuFrx6YoKTb9EcLvb0XZngQqXjGMFzrayVdmZlYLxQhtFf7%2FO3fClvovnzc9xVc3cQemXQ7p4R%2BjJIq19KES1ByjrPZRuBseb54hWCh8zBWoJUvRRA4aOsggWbNC9v3QQST%2BajE9x99SUODSWmELu3b1ePCF9Bu6OTcLsD9Ivc3iTi7vv9sgu%2F%2FKPkmZdbzFO3d6KXH97N4zJQvBkEeZWoMxoXptNSZ9g5ad%2FBtNFvzfyyz9fJukFFITXY4vuh5CQ0G5hMFtBTteZt4lf9WHmMLRRuvjIGietXKo4JOGGRkECMpoCiz%2Fv5pYzr%2B087Kius%2Fnham%2FVcoCm9qxzfoboLi0ikcfaEhV0%2BliIZSvOxwiqsicYa9yIDL0uZZb%2BOo9UQZW%2Fz0YzCABDZ8nKEN24PkpH%2Bv72P7DQ%2B82w3CFNP0gSGdl3oEHFEKiM0m9fFYOrN7QF%2FOPMLk%2FE5hiYVjuFsEQnyReUcNE4tX5ORknJdpLbQdKLIkw%2Fj62qPIFYU8Pur9r%2FgRK8xcAbxaua60umsPYNe5sctgiHqTOuPB%2FiwqM%2FG0nzAZZ0u7Ct5uY%2FrrJMG7VJtvVGZXnNHTcpsLlOKekMqwGan0rCl79F85Cl6r1u7OTpRs2nDDBu469BjqkAaSJ8iKdYQjht%2BDuC8s7EpHb0jy0VnJRIZ4U%2BOYAxsVcm4iHRW0F6Y9Lg2Hy7gc0ZfXgL3nGenIcVAIhaNXmu94IXMD87%2BCKve1sKDxNA%2F5z%2FYUs1BVdNjadQk8ev5Vz8UtKkQXiOoNEP49g8DBC7UA49O5W%2BxGybjGezGKA1%2Ba7s3uTpaVu8Pwkzke8DtZbcxeWhZBJ2zLiMouqpi1WahXrfAYT&X-Amz-Signature=a180d195211a828140fbc9835e8ce25cfa22e02c0f7f9b1113e9f69306fd1665&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
