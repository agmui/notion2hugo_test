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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHOFQTT5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBrYns0Iijm68mqho9weRcd%2BJc1MQNcDKpy1DawM1azoAiEAqHM3qjJ6yxTlgoFI54rt4H2hirLf69oTpMbxvST5myQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJo946J97o4gWYaTlSrcA%2FgKbdzxpS9x%2FeSRxrTxyHmmwn810HMm1%2BXZnkbc3rmwLU1tTf62xiqg3KbKphFSW%2FrxxMb5pieziKGFjTbe6v0gnKePicNJ5QndWXiQNlIFws2ezvFSnqb3Q5Uw78HAdXMYs6qNsT%2BmPdjdCX35ZMZsYMQ9PDWS5gWIHiPT2SQTj1G0frwNs9%2FpxEpn%2Fj2Ygp3yVtKBT7hHANJSG5GRJO8F1yq%2F8MZ5p7GcBRY4o7c3JwT9jVL7lmhT0sfVhXs2sLlmG9c4qcZBv2MDv2f46cFfKarKnUeBJg%2BoXic8%2BQidtq093GDORPRBwnx0BARTuBjywHT8mf8WvrE8Z5IUHmHdp1T3xdJZKF1sttO%2BBliyTmBNECRXapU8vqi8BVMU2kgHm%2FNrxlrVctG2dKtEFn%2BOoqbp1NcL5frPUbKC3z9LARpr96qunWs%2FhC%2BaVzXo%2BL%2FURjnaAPFPaY7dCKOYL0eBwSt7CNYv%2BWKp7ZfrTB7Loc0tuuzeFpjhVVukpKwZ8juaeQ6SpVdr4jbO3H%2BHC7tUSlbzJvrlT%2BX0GPxw00O7d4kqTyU0SwPQosCrsxXQ7rarSXrOz7MkoeHqU%2FIRoSE4lqXirQ6i%2BkxH2CW8PONubtULyGD5BTT5GF%2BgMIDTy8EGOqUBvYEy676aXwfGbpsg5SCH4MtCwGnZPfNCfkU7TOwCk1QgQ06%2F%2FcAwqYU1vrbjR5dYzHJNoJJhB20OBNAnARQdCv65CqH3wOqopiWlMqWlabsRADC0SCgyZHu580dDp1HZLPZo%2B9DzkjdAOBxzMDrTcnGrWQK3E0JDaxv1u25wM41pb43sKnYGQvYObMTmJ2KsTA%2BfJHKddst3HGyuyiM99JWINZgx&X-Amz-Signature=7f34d73a1fecd35a26e5c3491139cadc2edc512425ca1e50a959bf730448537b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHOFQTT5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBrYns0Iijm68mqho9weRcd%2BJc1MQNcDKpy1DawM1azoAiEAqHM3qjJ6yxTlgoFI54rt4H2hirLf69oTpMbxvST5myQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJo946J97o4gWYaTlSrcA%2FgKbdzxpS9x%2FeSRxrTxyHmmwn810HMm1%2BXZnkbc3rmwLU1tTf62xiqg3KbKphFSW%2FrxxMb5pieziKGFjTbe6v0gnKePicNJ5QndWXiQNlIFws2ezvFSnqb3Q5Uw78HAdXMYs6qNsT%2BmPdjdCX35ZMZsYMQ9PDWS5gWIHiPT2SQTj1G0frwNs9%2FpxEpn%2Fj2Ygp3yVtKBT7hHANJSG5GRJO8F1yq%2F8MZ5p7GcBRY4o7c3JwT9jVL7lmhT0sfVhXs2sLlmG9c4qcZBv2MDv2f46cFfKarKnUeBJg%2BoXic8%2BQidtq093GDORPRBwnx0BARTuBjywHT8mf8WvrE8Z5IUHmHdp1T3xdJZKF1sttO%2BBliyTmBNECRXapU8vqi8BVMU2kgHm%2FNrxlrVctG2dKtEFn%2BOoqbp1NcL5frPUbKC3z9LARpr96qunWs%2FhC%2BaVzXo%2BL%2FURjnaAPFPaY7dCKOYL0eBwSt7CNYv%2BWKp7ZfrTB7Loc0tuuzeFpjhVVukpKwZ8juaeQ6SpVdr4jbO3H%2BHC7tUSlbzJvrlT%2BX0GPxw00O7d4kqTyU0SwPQosCrsxXQ7rarSXrOz7MkoeHqU%2FIRoSE4lqXirQ6i%2BkxH2CW8PONubtULyGD5BTT5GF%2BgMIDTy8EGOqUBvYEy676aXwfGbpsg5SCH4MtCwGnZPfNCfkU7TOwCk1QgQ06%2F%2FcAwqYU1vrbjR5dYzHJNoJJhB20OBNAnARQdCv65CqH3wOqopiWlMqWlabsRADC0SCgyZHu580dDp1HZLPZo%2B9DzkjdAOBxzMDrTcnGrWQK3E0JDaxv1u25wM41pb43sKnYGQvYObMTmJ2KsTA%2BfJHKddst3HGyuyiM99JWINZgx&X-Amz-Signature=248d4511c1b0bea6083447763d4995ade0875dea73fe4ded6649f337e17e6d8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHOFQTT5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBrYns0Iijm68mqho9weRcd%2BJc1MQNcDKpy1DawM1azoAiEAqHM3qjJ6yxTlgoFI54rt4H2hirLf69oTpMbxvST5myQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJo946J97o4gWYaTlSrcA%2FgKbdzxpS9x%2FeSRxrTxyHmmwn810HMm1%2BXZnkbc3rmwLU1tTf62xiqg3KbKphFSW%2FrxxMb5pieziKGFjTbe6v0gnKePicNJ5QndWXiQNlIFws2ezvFSnqb3Q5Uw78HAdXMYs6qNsT%2BmPdjdCX35ZMZsYMQ9PDWS5gWIHiPT2SQTj1G0frwNs9%2FpxEpn%2Fj2Ygp3yVtKBT7hHANJSG5GRJO8F1yq%2F8MZ5p7GcBRY4o7c3JwT9jVL7lmhT0sfVhXs2sLlmG9c4qcZBv2MDv2f46cFfKarKnUeBJg%2BoXic8%2BQidtq093GDORPRBwnx0BARTuBjywHT8mf8WvrE8Z5IUHmHdp1T3xdJZKF1sttO%2BBliyTmBNECRXapU8vqi8BVMU2kgHm%2FNrxlrVctG2dKtEFn%2BOoqbp1NcL5frPUbKC3z9LARpr96qunWs%2FhC%2BaVzXo%2BL%2FURjnaAPFPaY7dCKOYL0eBwSt7CNYv%2BWKp7ZfrTB7Loc0tuuzeFpjhVVukpKwZ8juaeQ6SpVdr4jbO3H%2BHC7tUSlbzJvrlT%2BX0GPxw00O7d4kqTyU0SwPQosCrsxXQ7rarSXrOz7MkoeHqU%2FIRoSE4lqXirQ6i%2BkxH2CW8PONubtULyGD5BTT5GF%2BgMIDTy8EGOqUBvYEy676aXwfGbpsg5SCH4MtCwGnZPfNCfkU7TOwCk1QgQ06%2F%2FcAwqYU1vrbjR5dYzHJNoJJhB20OBNAnARQdCv65CqH3wOqopiWlMqWlabsRADC0SCgyZHu580dDp1HZLPZo%2B9DzkjdAOBxzMDrTcnGrWQK3E0JDaxv1u25wM41pb43sKnYGQvYObMTmJ2KsTA%2BfJHKddst3HGyuyiM99JWINZgx&X-Amz-Signature=fed1097a3580785fd573a50871a2cc4fd5877c9d9053ced02ac12f22b596c485&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHOFQTT5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBrYns0Iijm68mqho9weRcd%2BJc1MQNcDKpy1DawM1azoAiEAqHM3qjJ6yxTlgoFI54rt4H2hirLf69oTpMbxvST5myQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJo946J97o4gWYaTlSrcA%2FgKbdzxpS9x%2FeSRxrTxyHmmwn810HMm1%2BXZnkbc3rmwLU1tTf62xiqg3KbKphFSW%2FrxxMb5pieziKGFjTbe6v0gnKePicNJ5QndWXiQNlIFws2ezvFSnqb3Q5Uw78HAdXMYs6qNsT%2BmPdjdCX35ZMZsYMQ9PDWS5gWIHiPT2SQTj1G0frwNs9%2FpxEpn%2Fj2Ygp3yVtKBT7hHANJSG5GRJO8F1yq%2F8MZ5p7GcBRY4o7c3JwT9jVL7lmhT0sfVhXs2sLlmG9c4qcZBv2MDv2f46cFfKarKnUeBJg%2BoXic8%2BQidtq093GDORPRBwnx0BARTuBjywHT8mf8WvrE8Z5IUHmHdp1T3xdJZKF1sttO%2BBliyTmBNECRXapU8vqi8BVMU2kgHm%2FNrxlrVctG2dKtEFn%2BOoqbp1NcL5frPUbKC3z9LARpr96qunWs%2FhC%2BaVzXo%2BL%2FURjnaAPFPaY7dCKOYL0eBwSt7CNYv%2BWKp7ZfrTB7Loc0tuuzeFpjhVVukpKwZ8juaeQ6SpVdr4jbO3H%2BHC7tUSlbzJvrlT%2BX0GPxw00O7d4kqTyU0SwPQosCrsxXQ7rarSXrOz7MkoeHqU%2FIRoSE4lqXirQ6i%2BkxH2CW8PONubtULyGD5BTT5GF%2BgMIDTy8EGOqUBvYEy676aXwfGbpsg5SCH4MtCwGnZPfNCfkU7TOwCk1QgQ06%2F%2FcAwqYU1vrbjR5dYzHJNoJJhB20OBNAnARQdCv65CqH3wOqopiWlMqWlabsRADC0SCgyZHu580dDp1HZLPZo%2B9DzkjdAOBxzMDrTcnGrWQK3E0JDaxv1u25wM41pb43sKnYGQvYObMTmJ2KsTA%2BfJHKddst3HGyuyiM99JWINZgx&X-Amz-Signature=113dbaaff1e3b76b85d3190c899a935f7393b1b07dc953ef61ee37a7ccb1b219&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHOFQTT5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBrYns0Iijm68mqho9weRcd%2BJc1MQNcDKpy1DawM1azoAiEAqHM3qjJ6yxTlgoFI54rt4H2hirLf69oTpMbxvST5myQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJo946J97o4gWYaTlSrcA%2FgKbdzxpS9x%2FeSRxrTxyHmmwn810HMm1%2BXZnkbc3rmwLU1tTf62xiqg3KbKphFSW%2FrxxMb5pieziKGFjTbe6v0gnKePicNJ5QndWXiQNlIFws2ezvFSnqb3Q5Uw78HAdXMYs6qNsT%2BmPdjdCX35ZMZsYMQ9PDWS5gWIHiPT2SQTj1G0frwNs9%2FpxEpn%2Fj2Ygp3yVtKBT7hHANJSG5GRJO8F1yq%2F8MZ5p7GcBRY4o7c3JwT9jVL7lmhT0sfVhXs2sLlmG9c4qcZBv2MDv2f46cFfKarKnUeBJg%2BoXic8%2BQidtq093GDORPRBwnx0BARTuBjywHT8mf8WvrE8Z5IUHmHdp1T3xdJZKF1sttO%2BBliyTmBNECRXapU8vqi8BVMU2kgHm%2FNrxlrVctG2dKtEFn%2BOoqbp1NcL5frPUbKC3z9LARpr96qunWs%2FhC%2BaVzXo%2BL%2FURjnaAPFPaY7dCKOYL0eBwSt7CNYv%2BWKp7ZfrTB7Loc0tuuzeFpjhVVukpKwZ8juaeQ6SpVdr4jbO3H%2BHC7tUSlbzJvrlT%2BX0GPxw00O7d4kqTyU0SwPQosCrsxXQ7rarSXrOz7MkoeHqU%2FIRoSE4lqXirQ6i%2BkxH2CW8PONubtULyGD5BTT5GF%2BgMIDTy8EGOqUBvYEy676aXwfGbpsg5SCH4MtCwGnZPfNCfkU7TOwCk1QgQ06%2F%2FcAwqYU1vrbjR5dYzHJNoJJhB20OBNAnARQdCv65CqH3wOqopiWlMqWlabsRADC0SCgyZHu580dDp1HZLPZo%2B9DzkjdAOBxzMDrTcnGrWQK3E0JDaxv1u25wM41pb43sKnYGQvYObMTmJ2KsTA%2BfJHKddst3HGyuyiM99JWINZgx&X-Amz-Signature=c77937777dbea32941b922a5b0f20e2025dec7673083f543e51c873eae5299e7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHOFQTT5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBrYns0Iijm68mqho9weRcd%2BJc1MQNcDKpy1DawM1azoAiEAqHM3qjJ6yxTlgoFI54rt4H2hirLf69oTpMbxvST5myQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJo946J97o4gWYaTlSrcA%2FgKbdzxpS9x%2FeSRxrTxyHmmwn810HMm1%2BXZnkbc3rmwLU1tTf62xiqg3KbKphFSW%2FrxxMb5pieziKGFjTbe6v0gnKePicNJ5QndWXiQNlIFws2ezvFSnqb3Q5Uw78HAdXMYs6qNsT%2BmPdjdCX35ZMZsYMQ9PDWS5gWIHiPT2SQTj1G0frwNs9%2FpxEpn%2Fj2Ygp3yVtKBT7hHANJSG5GRJO8F1yq%2F8MZ5p7GcBRY4o7c3JwT9jVL7lmhT0sfVhXs2sLlmG9c4qcZBv2MDv2f46cFfKarKnUeBJg%2BoXic8%2BQidtq093GDORPRBwnx0BARTuBjywHT8mf8WvrE8Z5IUHmHdp1T3xdJZKF1sttO%2BBliyTmBNECRXapU8vqi8BVMU2kgHm%2FNrxlrVctG2dKtEFn%2BOoqbp1NcL5frPUbKC3z9LARpr96qunWs%2FhC%2BaVzXo%2BL%2FURjnaAPFPaY7dCKOYL0eBwSt7CNYv%2BWKp7ZfrTB7Loc0tuuzeFpjhVVukpKwZ8juaeQ6SpVdr4jbO3H%2BHC7tUSlbzJvrlT%2BX0GPxw00O7d4kqTyU0SwPQosCrsxXQ7rarSXrOz7MkoeHqU%2FIRoSE4lqXirQ6i%2BkxH2CW8PONubtULyGD5BTT5GF%2BgMIDTy8EGOqUBvYEy676aXwfGbpsg5SCH4MtCwGnZPfNCfkU7TOwCk1QgQ06%2F%2FcAwqYU1vrbjR5dYzHJNoJJhB20OBNAnARQdCv65CqH3wOqopiWlMqWlabsRADC0SCgyZHu580dDp1HZLPZo%2B9DzkjdAOBxzMDrTcnGrWQK3E0JDaxv1u25wM41pb43sKnYGQvYObMTmJ2KsTA%2BfJHKddst3HGyuyiM99JWINZgx&X-Amz-Signature=2ff541c7c7e684e3433351872284a137b424c6f39f73414fe39fab3e4c814e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHOFQTT5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBrYns0Iijm68mqho9weRcd%2BJc1MQNcDKpy1DawM1azoAiEAqHM3qjJ6yxTlgoFI54rt4H2hirLf69oTpMbxvST5myQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJo946J97o4gWYaTlSrcA%2FgKbdzxpS9x%2FeSRxrTxyHmmwn810HMm1%2BXZnkbc3rmwLU1tTf62xiqg3KbKphFSW%2FrxxMb5pieziKGFjTbe6v0gnKePicNJ5QndWXiQNlIFws2ezvFSnqb3Q5Uw78HAdXMYs6qNsT%2BmPdjdCX35ZMZsYMQ9PDWS5gWIHiPT2SQTj1G0frwNs9%2FpxEpn%2Fj2Ygp3yVtKBT7hHANJSG5GRJO8F1yq%2F8MZ5p7GcBRY4o7c3JwT9jVL7lmhT0sfVhXs2sLlmG9c4qcZBv2MDv2f46cFfKarKnUeBJg%2BoXic8%2BQidtq093GDORPRBwnx0BARTuBjywHT8mf8WvrE8Z5IUHmHdp1T3xdJZKF1sttO%2BBliyTmBNECRXapU8vqi8BVMU2kgHm%2FNrxlrVctG2dKtEFn%2BOoqbp1NcL5frPUbKC3z9LARpr96qunWs%2FhC%2BaVzXo%2BL%2FURjnaAPFPaY7dCKOYL0eBwSt7CNYv%2BWKp7ZfrTB7Loc0tuuzeFpjhVVukpKwZ8juaeQ6SpVdr4jbO3H%2BHC7tUSlbzJvrlT%2BX0GPxw00O7d4kqTyU0SwPQosCrsxXQ7rarSXrOz7MkoeHqU%2FIRoSE4lqXirQ6i%2BkxH2CW8PONubtULyGD5BTT5GF%2BgMIDTy8EGOqUBvYEy676aXwfGbpsg5SCH4MtCwGnZPfNCfkU7TOwCk1QgQ06%2F%2FcAwqYU1vrbjR5dYzHJNoJJhB20OBNAnARQdCv65CqH3wOqopiWlMqWlabsRADC0SCgyZHu580dDp1HZLPZo%2B9DzkjdAOBxzMDrTcnGrWQK3E0JDaxv1u25wM41pb43sKnYGQvYObMTmJ2KsTA%2BfJHKddst3HGyuyiM99JWINZgx&X-Amz-Signature=d7329fc76477cb023f1c1a760e7c9457254c3f7ca38dcb32a0e556d0e8984ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
