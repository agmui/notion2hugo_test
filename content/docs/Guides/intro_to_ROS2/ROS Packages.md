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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OSO5W6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDJIpWoPfJYl%2Few6tSBBs1Xx18XQL3c8DR544AjzQqL4gIhAMWF2kfmuxe8QCY7ackGTupDulkje%2FS4ZHBH0Bq9fcRjKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydgFVJModHMnNLMJAq3AMq112GiDOqo1XEDy%2BIF096j2zdzHXGct%2FNeSgPk2Bf3f7qiOdjB4jghy0Yip%2BJCFM2BdnQVr94lYRfqw43k6DfkZ4YMr7DXtZ0WrZwyP4MYUQEi5MBMKgkoJ3agpmkLMQQAJOzJ8z94ZkzKA1MIGZwOlAdYc%2B9qgy9kWN%2F8RUsv3LRaLn8MLID7L%2Fx0C0INvw3Ot6U5fUeO%2B2GYIH1Wzj3sNwHAMuKkOiCneNna12jNWSOOe1luiHcMtQTJYaOOoKvgL6rPyXN1QSFcTkU1xCEr%2Ft0FVom3uS6sm%2FLogeICdfiwYJeYt8RPy4x7wY9R2xZ3HeRuY8%2BIzg3GyrK6X2C87EhtEV8JS0BN%2BLiFaLGriKR0UTTb50mpwXfH3Jppkg0wrFCgnqsPFHBF9JVAT8HtL45a41M%2FFmhUWR9H03VH5FJeZBonaVyTaSsV0AjYp6kaXWbAFAfA8TmuwsF52NZpSPQrg4miTW6brkCzPMWixA23GcYrDTbKmv8YdV3d6LjM7KLlBeYdK9eHOZD9r6x9tKcg9kMy9tNFYuZJ3YElrBp9pbPQXmvAVRbSA84vbZmppehyUJ2ooZDbxUNWmQYYseQjGvYrOvKzQ3XXsv2kTqLxzeZJP4LhvGLXjCViZjABjqkARbnlf7fuXadqbCpLmzu2g06JfoW8WmLSbEcrHF4DUdrBDFTUzb7bG%2FF6svpL7uggy6h1tADWd67vRMx7FyrKNaxM80j%2Fu3l9LRN%2FDJv8EbwVPdyrxPuTb2%2BIQftM%2FG%2BRFPn9uOTTJeOjJb6R8JneHkUZTTxC4%2BIPh%2FKv28Z1%2FkNoTq3tHQo%2FNWJGA3wO%2BfU92lcHk7%2BOzYGVt3zlRZHs%2BTNie8D&X-Amz-Signature=c0fb990b42004973bc7aa927ac9e272ed01e6dc75bb8612b9a487746dba8cb8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OSO5W6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDJIpWoPfJYl%2Few6tSBBs1Xx18XQL3c8DR544AjzQqL4gIhAMWF2kfmuxe8QCY7ackGTupDulkje%2FS4ZHBH0Bq9fcRjKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydgFVJModHMnNLMJAq3AMq112GiDOqo1XEDy%2BIF096j2zdzHXGct%2FNeSgPk2Bf3f7qiOdjB4jghy0Yip%2BJCFM2BdnQVr94lYRfqw43k6DfkZ4YMr7DXtZ0WrZwyP4MYUQEi5MBMKgkoJ3agpmkLMQQAJOzJ8z94ZkzKA1MIGZwOlAdYc%2B9qgy9kWN%2F8RUsv3LRaLn8MLID7L%2Fx0C0INvw3Ot6U5fUeO%2B2GYIH1Wzj3sNwHAMuKkOiCneNna12jNWSOOe1luiHcMtQTJYaOOoKvgL6rPyXN1QSFcTkU1xCEr%2Ft0FVom3uS6sm%2FLogeICdfiwYJeYt8RPy4x7wY9R2xZ3HeRuY8%2BIzg3GyrK6X2C87EhtEV8JS0BN%2BLiFaLGriKR0UTTb50mpwXfH3Jppkg0wrFCgnqsPFHBF9JVAT8HtL45a41M%2FFmhUWR9H03VH5FJeZBonaVyTaSsV0AjYp6kaXWbAFAfA8TmuwsF52NZpSPQrg4miTW6brkCzPMWixA23GcYrDTbKmv8YdV3d6LjM7KLlBeYdK9eHOZD9r6x9tKcg9kMy9tNFYuZJ3YElrBp9pbPQXmvAVRbSA84vbZmppehyUJ2ooZDbxUNWmQYYseQjGvYrOvKzQ3XXsv2kTqLxzeZJP4LhvGLXjCViZjABjqkARbnlf7fuXadqbCpLmzu2g06JfoW8WmLSbEcrHF4DUdrBDFTUzb7bG%2FF6svpL7uggy6h1tADWd67vRMx7FyrKNaxM80j%2Fu3l9LRN%2FDJv8EbwVPdyrxPuTb2%2BIQftM%2FG%2BRFPn9uOTTJeOjJb6R8JneHkUZTTxC4%2BIPh%2FKv28Z1%2FkNoTq3tHQo%2FNWJGA3wO%2BfU92lcHk7%2BOzYGVt3zlRZHs%2BTNie8D&X-Amz-Signature=f34f2b4d754152f75f0a0bc77d3aaf642372fd4e741ac305a2db98b5f1158003&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OSO5W6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDJIpWoPfJYl%2Few6tSBBs1Xx18XQL3c8DR544AjzQqL4gIhAMWF2kfmuxe8QCY7ackGTupDulkje%2FS4ZHBH0Bq9fcRjKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydgFVJModHMnNLMJAq3AMq112GiDOqo1XEDy%2BIF096j2zdzHXGct%2FNeSgPk2Bf3f7qiOdjB4jghy0Yip%2BJCFM2BdnQVr94lYRfqw43k6DfkZ4YMr7DXtZ0WrZwyP4MYUQEi5MBMKgkoJ3agpmkLMQQAJOzJ8z94ZkzKA1MIGZwOlAdYc%2B9qgy9kWN%2F8RUsv3LRaLn8MLID7L%2Fx0C0INvw3Ot6U5fUeO%2B2GYIH1Wzj3sNwHAMuKkOiCneNna12jNWSOOe1luiHcMtQTJYaOOoKvgL6rPyXN1QSFcTkU1xCEr%2Ft0FVom3uS6sm%2FLogeICdfiwYJeYt8RPy4x7wY9R2xZ3HeRuY8%2BIzg3GyrK6X2C87EhtEV8JS0BN%2BLiFaLGriKR0UTTb50mpwXfH3Jppkg0wrFCgnqsPFHBF9JVAT8HtL45a41M%2FFmhUWR9H03VH5FJeZBonaVyTaSsV0AjYp6kaXWbAFAfA8TmuwsF52NZpSPQrg4miTW6brkCzPMWixA23GcYrDTbKmv8YdV3d6LjM7KLlBeYdK9eHOZD9r6x9tKcg9kMy9tNFYuZJ3YElrBp9pbPQXmvAVRbSA84vbZmppehyUJ2ooZDbxUNWmQYYseQjGvYrOvKzQ3XXsv2kTqLxzeZJP4LhvGLXjCViZjABjqkARbnlf7fuXadqbCpLmzu2g06JfoW8WmLSbEcrHF4DUdrBDFTUzb7bG%2FF6svpL7uggy6h1tADWd67vRMx7FyrKNaxM80j%2Fu3l9LRN%2FDJv8EbwVPdyrxPuTb2%2BIQftM%2FG%2BRFPn9uOTTJeOjJb6R8JneHkUZTTxC4%2BIPh%2FKv28Z1%2FkNoTq3tHQo%2FNWJGA3wO%2BfU92lcHk7%2BOzYGVt3zlRZHs%2BTNie8D&X-Amz-Signature=abf881355aeb608e05f2c35a97b39905f0ade33c54babadf8d7fdad3ac6a0837&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OSO5W6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDJIpWoPfJYl%2Few6tSBBs1Xx18XQL3c8DR544AjzQqL4gIhAMWF2kfmuxe8QCY7ackGTupDulkje%2FS4ZHBH0Bq9fcRjKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydgFVJModHMnNLMJAq3AMq112GiDOqo1XEDy%2BIF096j2zdzHXGct%2FNeSgPk2Bf3f7qiOdjB4jghy0Yip%2BJCFM2BdnQVr94lYRfqw43k6DfkZ4YMr7DXtZ0WrZwyP4MYUQEi5MBMKgkoJ3agpmkLMQQAJOzJ8z94ZkzKA1MIGZwOlAdYc%2B9qgy9kWN%2F8RUsv3LRaLn8MLID7L%2Fx0C0INvw3Ot6U5fUeO%2B2GYIH1Wzj3sNwHAMuKkOiCneNna12jNWSOOe1luiHcMtQTJYaOOoKvgL6rPyXN1QSFcTkU1xCEr%2Ft0FVom3uS6sm%2FLogeICdfiwYJeYt8RPy4x7wY9R2xZ3HeRuY8%2BIzg3GyrK6X2C87EhtEV8JS0BN%2BLiFaLGriKR0UTTb50mpwXfH3Jppkg0wrFCgnqsPFHBF9JVAT8HtL45a41M%2FFmhUWR9H03VH5FJeZBonaVyTaSsV0AjYp6kaXWbAFAfA8TmuwsF52NZpSPQrg4miTW6brkCzPMWixA23GcYrDTbKmv8YdV3d6LjM7KLlBeYdK9eHOZD9r6x9tKcg9kMy9tNFYuZJ3YElrBp9pbPQXmvAVRbSA84vbZmppehyUJ2ooZDbxUNWmQYYseQjGvYrOvKzQ3XXsv2kTqLxzeZJP4LhvGLXjCViZjABjqkARbnlf7fuXadqbCpLmzu2g06JfoW8WmLSbEcrHF4DUdrBDFTUzb7bG%2FF6svpL7uggy6h1tADWd67vRMx7FyrKNaxM80j%2Fu3l9LRN%2FDJv8EbwVPdyrxPuTb2%2BIQftM%2FG%2BRFPn9uOTTJeOjJb6R8JneHkUZTTxC4%2BIPh%2FKv28Z1%2FkNoTq3tHQo%2FNWJGA3wO%2BfU92lcHk7%2BOzYGVt3zlRZHs%2BTNie8D&X-Amz-Signature=2a86ef4ac80bec1913ada6bb2b58ab6f56ef46da1487249c414c88cfdfd7064b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OSO5W6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDJIpWoPfJYl%2Few6tSBBs1Xx18XQL3c8DR544AjzQqL4gIhAMWF2kfmuxe8QCY7ackGTupDulkje%2FS4ZHBH0Bq9fcRjKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydgFVJModHMnNLMJAq3AMq112GiDOqo1XEDy%2BIF096j2zdzHXGct%2FNeSgPk2Bf3f7qiOdjB4jghy0Yip%2BJCFM2BdnQVr94lYRfqw43k6DfkZ4YMr7DXtZ0WrZwyP4MYUQEi5MBMKgkoJ3agpmkLMQQAJOzJ8z94ZkzKA1MIGZwOlAdYc%2B9qgy9kWN%2F8RUsv3LRaLn8MLID7L%2Fx0C0INvw3Ot6U5fUeO%2B2GYIH1Wzj3sNwHAMuKkOiCneNna12jNWSOOe1luiHcMtQTJYaOOoKvgL6rPyXN1QSFcTkU1xCEr%2Ft0FVom3uS6sm%2FLogeICdfiwYJeYt8RPy4x7wY9R2xZ3HeRuY8%2BIzg3GyrK6X2C87EhtEV8JS0BN%2BLiFaLGriKR0UTTb50mpwXfH3Jppkg0wrFCgnqsPFHBF9JVAT8HtL45a41M%2FFmhUWR9H03VH5FJeZBonaVyTaSsV0AjYp6kaXWbAFAfA8TmuwsF52NZpSPQrg4miTW6brkCzPMWixA23GcYrDTbKmv8YdV3d6LjM7KLlBeYdK9eHOZD9r6x9tKcg9kMy9tNFYuZJ3YElrBp9pbPQXmvAVRbSA84vbZmppehyUJ2ooZDbxUNWmQYYseQjGvYrOvKzQ3XXsv2kTqLxzeZJP4LhvGLXjCViZjABjqkARbnlf7fuXadqbCpLmzu2g06JfoW8WmLSbEcrHF4DUdrBDFTUzb7bG%2FF6svpL7uggy6h1tADWd67vRMx7FyrKNaxM80j%2Fu3l9LRN%2FDJv8EbwVPdyrxPuTb2%2BIQftM%2FG%2BRFPn9uOTTJeOjJb6R8JneHkUZTTxC4%2BIPh%2FKv28Z1%2FkNoTq3tHQo%2FNWJGA3wO%2BfU92lcHk7%2BOzYGVt3zlRZHs%2BTNie8D&X-Amz-Signature=2b75a769c6a88aa81b42b2edc017de32eaaa630bdc255ed40b9f9365e47947d0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OSO5W6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDJIpWoPfJYl%2Few6tSBBs1Xx18XQL3c8DR544AjzQqL4gIhAMWF2kfmuxe8QCY7ackGTupDulkje%2FS4ZHBH0Bq9fcRjKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydgFVJModHMnNLMJAq3AMq112GiDOqo1XEDy%2BIF096j2zdzHXGct%2FNeSgPk2Bf3f7qiOdjB4jghy0Yip%2BJCFM2BdnQVr94lYRfqw43k6DfkZ4YMr7DXtZ0WrZwyP4MYUQEi5MBMKgkoJ3agpmkLMQQAJOzJ8z94ZkzKA1MIGZwOlAdYc%2B9qgy9kWN%2F8RUsv3LRaLn8MLID7L%2Fx0C0INvw3Ot6U5fUeO%2B2GYIH1Wzj3sNwHAMuKkOiCneNna12jNWSOOe1luiHcMtQTJYaOOoKvgL6rPyXN1QSFcTkU1xCEr%2Ft0FVom3uS6sm%2FLogeICdfiwYJeYt8RPy4x7wY9R2xZ3HeRuY8%2BIzg3GyrK6X2C87EhtEV8JS0BN%2BLiFaLGriKR0UTTb50mpwXfH3Jppkg0wrFCgnqsPFHBF9JVAT8HtL45a41M%2FFmhUWR9H03VH5FJeZBonaVyTaSsV0AjYp6kaXWbAFAfA8TmuwsF52NZpSPQrg4miTW6brkCzPMWixA23GcYrDTbKmv8YdV3d6LjM7KLlBeYdK9eHOZD9r6x9tKcg9kMy9tNFYuZJ3YElrBp9pbPQXmvAVRbSA84vbZmppehyUJ2ooZDbxUNWmQYYseQjGvYrOvKzQ3XXsv2kTqLxzeZJP4LhvGLXjCViZjABjqkARbnlf7fuXadqbCpLmzu2g06JfoW8WmLSbEcrHF4DUdrBDFTUzb7bG%2FF6svpL7uggy6h1tADWd67vRMx7FyrKNaxM80j%2Fu3l9LRN%2FDJv8EbwVPdyrxPuTb2%2BIQftM%2FG%2BRFPn9uOTTJeOjJb6R8JneHkUZTTxC4%2BIPh%2FKv28Z1%2FkNoTq3tHQo%2FNWJGA3wO%2BfU92lcHk7%2BOzYGVt3zlRZHs%2BTNie8D&X-Amz-Signature=4345b2f538acff5314a23cadfa8a4c621bae6066f2d29e2e22aebcd2f802b9b5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OSO5W6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDJIpWoPfJYl%2Few6tSBBs1Xx18XQL3c8DR544AjzQqL4gIhAMWF2kfmuxe8QCY7ackGTupDulkje%2FS4ZHBH0Bq9fcRjKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydgFVJModHMnNLMJAq3AMq112GiDOqo1XEDy%2BIF096j2zdzHXGct%2FNeSgPk2Bf3f7qiOdjB4jghy0Yip%2BJCFM2BdnQVr94lYRfqw43k6DfkZ4YMr7DXtZ0WrZwyP4MYUQEi5MBMKgkoJ3agpmkLMQQAJOzJ8z94ZkzKA1MIGZwOlAdYc%2B9qgy9kWN%2F8RUsv3LRaLn8MLID7L%2Fx0C0INvw3Ot6U5fUeO%2B2GYIH1Wzj3sNwHAMuKkOiCneNna12jNWSOOe1luiHcMtQTJYaOOoKvgL6rPyXN1QSFcTkU1xCEr%2Ft0FVom3uS6sm%2FLogeICdfiwYJeYt8RPy4x7wY9R2xZ3HeRuY8%2BIzg3GyrK6X2C87EhtEV8JS0BN%2BLiFaLGriKR0UTTb50mpwXfH3Jppkg0wrFCgnqsPFHBF9JVAT8HtL45a41M%2FFmhUWR9H03VH5FJeZBonaVyTaSsV0AjYp6kaXWbAFAfA8TmuwsF52NZpSPQrg4miTW6brkCzPMWixA23GcYrDTbKmv8YdV3d6LjM7KLlBeYdK9eHOZD9r6x9tKcg9kMy9tNFYuZJ3YElrBp9pbPQXmvAVRbSA84vbZmppehyUJ2ooZDbxUNWmQYYseQjGvYrOvKzQ3XXsv2kTqLxzeZJP4LhvGLXjCViZjABjqkARbnlf7fuXadqbCpLmzu2g06JfoW8WmLSbEcrHF4DUdrBDFTUzb7bG%2FF6svpL7uggy6h1tADWd67vRMx7FyrKNaxM80j%2Fu3l9LRN%2FDJv8EbwVPdyrxPuTb2%2BIQftM%2FG%2BRFPn9uOTTJeOjJb6R8JneHkUZTTxC4%2BIPh%2FKv28Z1%2FkNoTq3tHQo%2FNWJGA3wO%2BfU92lcHk7%2BOzYGVt3zlRZHs%2BTNie8D&X-Amz-Signature=f7b5c386697394d82c2f4f0f9cff4a8da3b3d45030187e41c1b002456f3c49fd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
