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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNSZFVG7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFWF5t7O2MQP0DMQYEtUEc3P5jquTrniFl7blyoI34zbAiEAnhNR2DtOQWfPN026M50c3YwPM1%2FtblFZ%2By4mCNOedv0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDF45HjLIDTiwKUus6yrcA2lFFKFw%2Ft4BcxaMVrzmXwuMFGMB8lELTvFpd9woDyraFleAw6n%2BsL1RZTOKTwVJkjZo07FF2AC%2B2LOWB95pqSwMq079U1JEJyXKvCucPN8GiFLV2EFb1j5cxCeuj8R0LoxUf39ArQiLZwbCeCoMz5GDreZ3WF0w%2BUJXAqgF4pxwGFFhYpvZEn0DccbLHy7CRHy4ibTNQ0GjziO0v9%2BCk825UiqsxtEFxN%2FJ1v5GUAd5gsbXVt40JL4y9MMfWsUbq%2BZUljVmhqw%2BrPaJe6J41H1njP6618eXYe3EklGTMsgOL9HEqCN6URzQ3LrxCOItuTcEMIgn97tgQXZZzUB81lDs3k7viM8EKyAJi9jhRJB7Smm4L%2FltZ%2BvDJMJHGCE7ADqB%2F%2FU2FqtARZ77NiVdkpM3ZmpF%2BXmWLjTFPNX3rirosrgIBkpHH4D2CCIulj5ki0loU7RPSaFqd%2Bb%2F12j2SbmkTsp%2BiSFGnTFimzlA2xamTucGTBqktADkcxRmCaM2N3M5bIqMCLqFpCEY6OiKtsUpyXInDpU6a0OisBt%2BM%2FgsoUftRWNQHrltdhHETnVXcPKIwCNyGsgTyiqa7ZDH7xd86uPpdZt7uja0Pi8%2Fv5d0c83P%2BNb88mC3GU88MKay88IGOqUBqLGsmFYh8neV2W%2Ff%2BER%2FuIJzbU4FrwEhVtDw6eMwC%2BHYqWoQ3zOxazkjXnMKDX7m02kzJWVuaCSWoEyxe0s9P8PWd2TaMe%2FlfKZSwbekgxal1lCLSXvd5kOgTts9RSmL9GuITKOdrqqth8tZNdhyWO73i7av7opVSNNGJStOzXqGNOlnZdXz5%2BUNjtgOgZb%2F5rNbpdyBrdq07ejTLU7Dap%2FIDc2C&X-Amz-Signature=478a9561a0046733204a946029d0b993ace582764942263fc40c7f9feffb0144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNSZFVG7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFWF5t7O2MQP0DMQYEtUEc3P5jquTrniFl7blyoI34zbAiEAnhNR2DtOQWfPN026M50c3YwPM1%2FtblFZ%2By4mCNOedv0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDF45HjLIDTiwKUus6yrcA2lFFKFw%2Ft4BcxaMVrzmXwuMFGMB8lELTvFpd9woDyraFleAw6n%2BsL1RZTOKTwVJkjZo07FF2AC%2B2LOWB95pqSwMq079U1JEJyXKvCucPN8GiFLV2EFb1j5cxCeuj8R0LoxUf39ArQiLZwbCeCoMz5GDreZ3WF0w%2BUJXAqgF4pxwGFFhYpvZEn0DccbLHy7CRHy4ibTNQ0GjziO0v9%2BCk825UiqsxtEFxN%2FJ1v5GUAd5gsbXVt40JL4y9MMfWsUbq%2BZUljVmhqw%2BrPaJe6J41H1njP6618eXYe3EklGTMsgOL9HEqCN6URzQ3LrxCOItuTcEMIgn97tgQXZZzUB81lDs3k7viM8EKyAJi9jhRJB7Smm4L%2FltZ%2BvDJMJHGCE7ADqB%2F%2FU2FqtARZ77NiVdkpM3ZmpF%2BXmWLjTFPNX3rirosrgIBkpHH4D2CCIulj5ki0loU7RPSaFqd%2Bb%2F12j2SbmkTsp%2BiSFGnTFimzlA2xamTucGTBqktADkcxRmCaM2N3M5bIqMCLqFpCEY6OiKtsUpyXInDpU6a0OisBt%2BM%2FgsoUftRWNQHrltdhHETnVXcPKIwCNyGsgTyiqa7ZDH7xd86uPpdZt7uja0Pi8%2Fv5d0c83P%2BNb88mC3GU88MKay88IGOqUBqLGsmFYh8neV2W%2Ff%2BER%2FuIJzbU4FrwEhVtDw6eMwC%2BHYqWoQ3zOxazkjXnMKDX7m02kzJWVuaCSWoEyxe0s9P8PWd2TaMe%2FlfKZSwbekgxal1lCLSXvd5kOgTts9RSmL9GuITKOdrqqth8tZNdhyWO73i7av7opVSNNGJStOzXqGNOlnZdXz5%2BUNjtgOgZb%2F5rNbpdyBrdq07ejTLU7Dap%2FIDc2C&X-Amz-Signature=d11d2a944da5f878c23983ac1f51f7db459fbbf52ca3a3c83ddb2e79ca270043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNSZFVG7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFWF5t7O2MQP0DMQYEtUEc3P5jquTrniFl7blyoI34zbAiEAnhNR2DtOQWfPN026M50c3YwPM1%2FtblFZ%2By4mCNOedv0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDF45HjLIDTiwKUus6yrcA2lFFKFw%2Ft4BcxaMVrzmXwuMFGMB8lELTvFpd9woDyraFleAw6n%2BsL1RZTOKTwVJkjZo07FF2AC%2B2LOWB95pqSwMq079U1JEJyXKvCucPN8GiFLV2EFb1j5cxCeuj8R0LoxUf39ArQiLZwbCeCoMz5GDreZ3WF0w%2BUJXAqgF4pxwGFFhYpvZEn0DccbLHy7CRHy4ibTNQ0GjziO0v9%2BCk825UiqsxtEFxN%2FJ1v5GUAd5gsbXVt40JL4y9MMfWsUbq%2BZUljVmhqw%2BrPaJe6J41H1njP6618eXYe3EklGTMsgOL9HEqCN6URzQ3LrxCOItuTcEMIgn97tgQXZZzUB81lDs3k7viM8EKyAJi9jhRJB7Smm4L%2FltZ%2BvDJMJHGCE7ADqB%2F%2FU2FqtARZ77NiVdkpM3ZmpF%2BXmWLjTFPNX3rirosrgIBkpHH4D2CCIulj5ki0loU7RPSaFqd%2Bb%2F12j2SbmkTsp%2BiSFGnTFimzlA2xamTucGTBqktADkcxRmCaM2N3M5bIqMCLqFpCEY6OiKtsUpyXInDpU6a0OisBt%2BM%2FgsoUftRWNQHrltdhHETnVXcPKIwCNyGsgTyiqa7ZDH7xd86uPpdZt7uja0Pi8%2Fv5d0c83P%2BNb88mC3GU88MKay88IGOqUBqLGsmFYh8neV2W%2Ff%2BER%2FuIJzbU4FrwEhVtDw6eMwC%2BHYqWoQ3zOxazkjXnMKDX7m02kzJWVuaCSWoEyxe0s9P8PWd2TaMe%2FlfKZSwbekgxal1lCLSXvd5kOgTts9RSmL9GuITKOdrqqth8tZNdhyWO73i7av7opVSNNGJStOzXqGNOlnZdXz5%2BUNjtgOgZb%2F5rNbpdyBrdq07ejTLU7Dap%2FIDc2C&X-Amz-Signature=d4217bce0bb31539ed7dc30ff0d16c7596f6de9a5be7d38ff8a6f37b5a23f89a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNSZFVG7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFWF5t7O2MQP0DMQYEtUEc3P5jquTrniFl7blyoI34zbAiEAnhNR2DtOQWfPN026M50c3YwPM1%2FtblFZ%2By4mCNOedv0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDF45HjLIDTiwKUus6yrcA2lFFKFw%2Ft4BcxaMVrzmXwuMFGMB8lELTvFpd9woDyraFleAw6n%2BsL1RZTOKTwVJkjZo07FF2AC%2B2LOWB95pqSwMq079U1JEJyXKvCucPN8GiFLV2EFb1j5cxCeuj8R0LoxUf39ArQiLZwbCeCoMz5GDreZ3WF0w%2BUJXAqgF4pxwGFFhYpvZEn0DccbLHy7CRHy4ibTNQ0GjziO0v9%2BCk825UiqsxtEFxN%2FJ1v5GUAd5gsbXVt40JL4y9MMfWsUbq%2BZUljVmhqw%2BrPaJe6J41H1njP6618eXYe3EklGTMsgOL9HEqCN6URzQ3LrxCOItuTcEMIgn97tgQXZZzUB81lDs3k7viM8EKyAJi9jhRJB7Smm4L%2FltZ%2BvDJMJHGCE7ADqB%2F%2FU2FqtARZ77NiVdkpM3ZmpF%2BXmWLjTFPNX3rirosrgIBkpHH4D2CCIulj5ki0loU7RPSaFqd%2Bb%2F12j2SbmkTsp%2BiSFGnTFimzlA2xamTucGTBqktADkcxRmCaM2N3M5bIqMCLqFpCEY6OiKtsUpyXInDpU6a0OisBt%2BM%2FgsoUftRWNQHrltdhHETnVXcPKIwCNyGsgTyiqa7ZDH7xd86uPpdZt7uja0Pi8%2Fv5d0c83P%2BNb88mC3GU88MKay88IGOqUBqLGsmFYh8neV2W%2Ff%2BER%2FuIJzbU4FrwEhVtDw6eMwC%2BHYqWoQ3zOxazkjXnMKDX7m02kzJWVuaCSWoEyxe0s9P8PWd2TaMe%2FlfKZSwbekgxal1lCLSXvd5kOgTts9RSmL9GuITKOdrqqth8tZNdhyWO73i7av7opVSNNGJStOzXqGNOlnZdXz5%2BUNjtgOgZb%2F5rNbpdyBrdq07ejTLU7Dap%2FIDc2C&X-Amz-Signature=a0810706e22939abbe3fba530b7fc7bdb7b7c3280645665e2519cdd6eb966602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNSZFVG7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFWF5t7O2MQP0DMQYEtUEc3P5jquTrniFl7blyoI34zbAiEAnhNR2DtOQWfPN026M50c3YwPM1%2FtblFZ%2By4mCNOedv0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDF45HjLIDTiwKUus6yrcA2lFFKFw%2Ft4BcxaMVrzmXwuMFGMB8lELTvFpd9woDyraFleAw6n%2BsL1RZTOKTwVJkjZo07FF2AC%2B2LOWB95pqSwMq079U1JEJyXKvCucPN8GiFLV2EFb1j5cxCeuj8R0LoxUf39ArQiLZwbCeCoMz5GDreZ3WF0w%2BUJXAqgF4pxwGFFhYpvZEn0DccbLHy7CRHy4ibTNQ0GjziO0v9%2BCk825UiqsxtEFxN%2FJ1v5GUAd5gsbXVt40JL4y9MMfWsUbq%2BZUljVmhqw%2BrPaJe6J41H1njP6618eXYe3EklGTMsgOL9HEqCN6URzQ3LrxCOItuTcEMIgn97tgQXZZzUB81lDs3k7viM8EKyAJi9jhRJB7Smm4L%2FltZ%2BvDJMJHGCE7ADqB%2F%2FU2FqtARZ77NiVdkpM3ZmpF%2BXmWLjTFPNX3rirosrgIBkpHH4D2CCIulj5ki0loU7RPSaFqd%2Bb%2F12j2SbmkTsp%2BiSFGnTFimzlA2xamTucGTBqktADkcxRmCaM2N3M5bIqMCLqFpCEY6OiKtsUpyXInDpU6a0OisBt%2BM%2FgsoUftRWNQHrltdhHETnVXcPKIwCNyGsgTyiqa7ZDH7xd86uPpdZt7uja0Pi8%2Fv5d0c83P%2BNb88mC3GU88MKay88IGOqUBqLGsmFYh8neV2W%2Ff%2BER%2FuIJzbU4FrwEhVtDw6eMwC%2BHYqWoQ3zOxazkjXnMKDX7m02kzJWVuaCSWoEyxe0s9P8PWd2TaMe%2FlfKZSwbekgxal1lCLSXvd5kOgTts9RSmL9GuITKOdrqqth8tZNdhyWO73i7av7opVSNNGJStOzXqGNOlnZdXz5%2BUNjtgOgZb%2F5rNbpdyBrdq07ejTLU7Dap%2FIDc2C&X-Amz-Signature=b20450312df1a45b1783c353a9d5e53418bb169331c67c4dc14690e7ac4ef3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNSZFVG7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFWF5t7O2MQP0DMQYEtUEc3P5jquTrniFl7blyoI34zbAiEAnhNR2DtOQWfPN026M50c3YwPM1%2FtblFZ%2By4mCNOedv0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDF45HjLIDTiwKUus6yrcA2lFFKFw%2Ft4BcxaMVrzmXwuMFGMB8lELTvFpd9woDyraFleAw6n%2BsL1RZTOKTwVJkjZo07FF2AC%2B2LOWB95pqSwMq079U1JEJyXKvCucPN8GiFLV2EFb1j5cxCeuj8R0LoxUf39ArQiLZwbCeCoMz5GDreZ3WF0w%2BUJXAqgF4pxwGFFhYpvZEn0DccbLHy7CRHy4ibTNQ0GjziO0v9%2BCk825UiqsxtEFxN%2FJ1v5GUAd5gsbXVt40JL4y9MMfWsUbq%2BZUljVmhqw%2BrPaJe6J41H1njP6618eXYe3EklGTMsgOL9HEqCN6URzQ3LrxCOItuTcEMIgn97tgQXZZzUB81lDs3k7viM8EKyAJi9jhRJB7Smm4L%2FltZ%2BvDJMJHGCE7ADqB%2F%2FU2FqtARZ77NiVdkpM3ZmpF%2BXmWLjTFPNX3rirosrgIBkpHH4D2CCIulj5ki0loU7RPSaFqd%2Bb%2F12j2SbmkTsp%2BiSFGnTFimzlA2xamTucGTBqktADkcxRmCaM2N3M5bIqMCLqFpCEY6OiKtsUpyXInDpU6a0OisBt%2BM%2FgsoUftRWNQHrltdhHETnVXcPKIwCNyGsgTyiqa7ZDH7xd86uPpdZt7uja0Pi8%2Fv5d0c83P%2BNb88mC3GU88MKay88IGOqUBqLGsmFYh8neV2W%2Ff%2BER%2FuIJzbU4FrwEhVtDw6eMwC%2BHYqWoQ3zOxazkjXnMKDX7m02kzJWVuaCSWoEyxe0s9P8PWd2TaMe%2FlfKZSwbekgxal1lCLSXvd5kOgTts9RSmL9GuITKOdrqqth8tZNdhyWO73i7av7opVSNNGJStOzXqGNOlnZdXz5%2BUNjtgOgZb%2F5rNbpdyBrdq07ejTLU7Dap%2FIDc2C&X-Amz-Signature=0d7fde6bbb9ee503f2fe469ecc55208c016cfd04425fa868909acf47f6b78f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNSZFVG7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFWF5t7O2MQP0DMQYEtUEc3P5jquTrniFl7blyoI34zbAiEAnhNR2DtOQWfPN026M50c3YwPM1%2FtblFZ%2By4mCNOedv0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDF45HjLIDTiwKUus6yrcA2lFFKFw%2Ft4BcxaMVrzmXwuMFGMB8lELTvFpd9woDyraFleAw6n%2BsL1RZTOKTwVJkjZo07FF2AC%2B2LOWB95pqSwMq079U1JEJyXKvCucPN8GiFLV2EFb1j5cxCeuj8R0LoxUf39ArQiLZwbCeCoMz5GDreZ3WF0w%2BUJXAqgF4pxwGFFhYpvZEn0DccbLHy7CRHy4ibTNQ0GjziO0v9%2BCk825UiqsxtEFxN%2FJ1v5GUAd5gsbXVt40JL4y9MMfWsUbq%2BZUljVmhqw%2BrPaJe6J41H1njP6618eXYe3EklGTMsgOL9HEqCN6URzQ3LrxCOItuTcEMIgn97tgQXZZzUB81lDs3k7viM8EKyAJi9jhRJB7Smm4L%2FltZ%2BvDJMJHGCE7ADqB%2F%2FU2FqtARZ77NiVdkpM3ZmpF%2BXmWLjTFPNX3rirosrgIBkpHH4D2CCIulj5ki0loU7RPSaFqd%2Bb%2F12j2SbmkTsp%2BiSFGnTFimzlA2xamTucGTBqktADkcxRmCaM2N3M5bIqMCLqFpCEY6OiKtsUpyXInDpU6a0OisBt%2BM%2FgsoUftRWNQHrltdhHETnVXcPKIwCNyGsgTyiqa7ZDH7xd86uPpdZt7uja0Pi8%2Fv5d0c83P%2BNb88mC3GU88MKay88IGOqUBqLGsmFYh8neV2W%2Ff%2BER%2FuIJzbU4FrwEhVtDw6eMwC%2BHYqWoQ3zOxazkjXnMKDX7m02kzJWVuaCSWoEyxe0s9P8PWd2TaMe%2FlfKZSwbekgxal1lCLSXvd5kOgTts9RSmL9GuITKOdrqqth8tZNdhyWO73i7av7opVSNNGJStOzXqGNOlnZdXz5%2BUNjtgOgZb%2F5rNbpdyBrdq07ejTLU7Dap%2FIDc2C&X-Amz-Signature=1c96d720519059057e7b63ebdebe6babe3cc48decd3472837e55897319fed9c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
