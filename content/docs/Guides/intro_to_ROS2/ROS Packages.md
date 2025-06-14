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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIYYNP4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCYCQPp%2FcO%2FJvrFfkihHRobzP3%2BBDyMT5hr8T81CpPgwgIhAMwS15TVCjCorxlZi0GJmSGLQD8nLRUlZ8NZGJmVKsKlKv8DCDEQABoMNjM3NDIzMTgzODA1IgyBeHfm1fFOKZ9m364q3AMeB1lrk3zfQJR9O79tH3dpNB74b8ma%2FR5qk7v6wF%2F9t7dVRimlhG4HNxfmxSgdWhMOM1XvjVrjicaeFT3U6BTdZU3V7sRTtO0re8X2tPzav%2BmKRiZ1P5vnGMhRIzPCl34A0OQlA4MlOP2JTTa%2F4GYhk4G4Yb8Ab%2FBf2NiIjp65%2FOYAgY3%2BO1WKXACxcZaU8nQrfwR7plCR8scBI31b5%2FhTUOLMxGpZiMjTV1j5tflzC%2FKqxgsk36mTrfNYEz8bKFHIWXtpNmM4sbR4hmlY9KkRLEW%2FjLNxZM21%2BtJt70s88smMKc9sPqbgXoAhEcwTzl1bfXl0EjRzyLMhO27zN4fKwssUFoZE8n7gcAOmRrVKhzoqskrcrraddr49mNNNI%2FAwT4W1mVGVmJLnkGx6WDVywITIDCYzXoS7K9%2BCF1yuY35qZn%2BHrsFrkEA0ZPwulKusH32UyKE2ZcsEhSXbQm%2F4gBmMzQHIHHDmx1F7wOdcf4haQbxmNXkFQ9RtUPJNNSTNkGk44ddyDecgy2UdHbFs3jUd1Je%2FaIMnJ3YUrLMNb1MHeYZTrwqMQWFWycVpdgvJgLE2Gnc%2FlbgOQtTtjVJ%2Bj3WgAJbgRkyq74QGpceZajieH1LT2PngjNI5GzCWu7bCBjqkATuyf4CBAjVYuBx1HvOGEDzmCS1AntODmg678iAHtB5QuhqUgMSjZ7qAC21IgRZ24Su6oWmjXqFa6Smv1zmAEsBoZZY4oURzh15Gxn10kknE9nJ8fMAsPmiTojvuBdLCryrr32fL8U%2FXa8bq1KJG8%2FCRYvdLmxCg%2F%2FljgYI%2FkSrrbd%2FWaKQ4rTtzlffp0pYJ3%2FXncvxcpdfONU76Rc2GwK2KlWK8&X-Amz-Signature=96ba7cd048a34e9ea2b511b833f3c134ebefc178761e5f580b923f53772921e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIYYNP4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCYCQPp%2FcO%2FJvrFfkihHRobzP3%2BBDyMT5hr8T81CpPgwgIhAMwS15TVCjCorxlZi0GJmSGLQD8nLRUlZ8NZGJmVKsKlKv8DCDEQABoMNjM3NDIzMTgzODA1IgyBeHfm1fFOKZ9m364q3AMeB1lrk3zfQJR9O79tH3dpNB74b8ma%2FR5qk7v6wF%2F9t7dVRimlhG4HNxfmxSgdWhMOM1XvjVrjicaeFT3U6BTdZU3V7sRTtO0re8X2tPzav%2BmKRiZ1P5vnGMhRIzPCl34A0OQlA4MlOP2JTTa%2F4GYhk4G4Yb8Ab%2FBf2NiIjp65%2FOYAgY3%2BO1WKXACxcZaU8nQrfwR7plCR8scBI31b5%2FhTUOLMxGpZiMjTV1j5tflzC%2FKqxgsk36mTrfNYEz8bKFHIWXtpNmM4sbR4hmlY9KkRLEW%2FjLNxZM21%2BtJt70s88smMKc9sPqbgXoAhEcwTzl1bfXl0EjRzyLMhO27zN4fKwssUFoZE8n7gcAOmRrVKhzoqskrcrraddr49mNNNI%2FAwT4W1mVGVmJLnkGx6WDVywITIDCYzXoS7K9%2BCF1yuY35qZn%2BHrsFrkEA0ZPwulKusH32UyKE2ZcsEhSXbQm%2F4gBmMzQHIHHDmx1F7wOdcf4haQbxmNXkFQ9RtUPJNNSTNkGk44ddyDecgy2UdHbFs3jUd1Je%2FaIMnJ3YUrLMNb1MHeYZTrwqMQWFWycVpdgvJgLE2Gnc%2FlbgOQtTtjVJ%2Bj3WgAJbgRkyq74QGpceZajieH1LT2PngjNI5GzCWu7bCBjqkATuyf4CBAjVYuBx1HvOGEDzmCS1AntODmg678iAHtB5QuhqUgMSjZ7qAC21IgRZ24Su6oWmjXqFa6Smv1zmAEsBoZZY4oURzh15Gxn10kknE9nJ8fMAsPmiTojvuBdLCryrr32fL8U%2FXa8bq1KJG8%2FCRYvdLmxCg%2F%2FljgYI%2FkSrrbd%2FWaKQ4rTtzlffp0pYJ3%2FXncvxcpdfONU76Rc2GwK2KlWK8&X-Amz-Signature=e14b1862c9360b5e2e6f92197d321a2d47ead3de8dae6d32b9af9e99402fd5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIYYNP4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCYCQPp%2FcO%2FJvrFfkihHRobzP3%2BBDyMT5hr8T81CpPgwgIhAMwS15TVCjCorxlZi0GJmSGLQD8nLRUlZ8NZGJmVKsKlKv8DCDEQABoMNjM3NDIzMTgzODA1IgyBeHfm1fFOKZ9m364q3AMeB1lrk3zfQJR9O79tH3dpNB74b8ma%2FR5qk7v6wF%2F9t7dVRimlhG4HNxfmxSgdWhMOM1XvjVrjicaeFT3U6BTdZU3V7sRTtO0re8X2tPzav%2BmKRiZ1P5vnGMhRIzPCl34A0OQlA4MlOP2JTTa%2F4GYhk4G4Yb8Ab%2FBf2NiIjp65%2FOYAgY3%2BO1WKXACxcZaU8nQrfwR7plCR8scBI31b5%2FhTUOLMxGpZiMjTV1j5tflzC%2FKqxgsk36mTrfNYEz8bKFHIWXtpNmM4sbR4hmlY9KkRLEW%2FjLNxZM21%2BtJt70s88smMKc9sPqbgXoAhEcwTzl1bfXl0EjRzyLMhO27zN4fKwssUFoZE8n7gcAOmRrVKhzoqskrcrraddr49mNNNI%2FAwT4W1mVGVmJLnkGx6WDVywITIDCYzXoS7K9%2BCF1yuY35qZn%2BHrsFrkEA0ZPwulKusH32UyKE2ZcsEhSXbQm%2F4gBmMzQHIHHDmx1F7wOdcf4haQbxmNXkFQ9RtUPJNNSTNkGk44ddyDecgy2UdHbFs3jUd1Je%2FaIMnJ3YUrLMNb1MHeYZTrwqMQWFWycVpdgvJgLE2Gnc%2FlbgOQtTtjVJ%2Bj3WgAJbgRkyq74QGpceZajieH1LT2PngjNI5GzCWu7bCBjqkATuyf4CBAjVYuBx1HvOGEDzmCS1AntODmg678iAHtB5QuhqUgMSjZ7qAC21IgRZ24Su6oWmjXqFa6Smv1zmAEsBoZZY4oURzh15Gxn10kknE9nJ8fMAsPmiTojvuBdLCryrr32fL8U%2FXa8bq1KJG8%2FCRYvdLmxCg%2F%2FljgYI%2FkSrrbd%2FWaKQ4rTtzlffp0pYJ3%2FXncvxcpdfONU76Rc2GwK2KlWK8&X-Amz-Signature=7b0eeac0c29c47021994406053919536e0e8ec116a6301fcd9faf6b258b394dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIYYNP4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCYCQPp%2FcO%2FJvrFfkihHRobzP3%2BBDyMT5hr8T81CpPgwgIhAMwS15TVCjCorxlZi0GJmSGLQD8nLRUlZ8NZGJmVKsKlKv8DCDEQABoMNjM3NDIzMTgzODA1IgyBeHfm1fFOKZ9m364q3AMeB1lrk3zfQJR9O79tH3dpNB74b8ma%2FR5qk7v6wF%2F9t7dVRimlhG4HNxfmxSgdWhMOM1XvjVrjicaeFT3U6BTdZU3V7sRTtO0re8X2tPzav%2BmKRiZ1P5vnGMhRIzPCl34A0OQlA4MlOP2JTTa%2F4GYhk4G4Yb8Ab%2FBf2NiIjp65%2FOYAgY3%2BO1WKXACxcZaU8nQrfwR7plCR8scBI31b5%2FhTUOLMxGpZiMjTV1j5tflzC%2FKqxgsk36mTrfNYEz8bKFHIWXtpNmM4sbR4hmlY9KkRLEW%2FjLNxZM21%2BtJt70s88smMKc9sPqbgXoAhEcwTzl1bfXl0EjRzyLMhO27zN4fKwssUFoZE8n7gcAOmRrVKhzoqskrcrraddr49mNNNI%2FAwT4W1mVGVmJLnkGx6WDVywITIDCYzXoS7K9%2BCF1yuY35qZn%2BHrsFrkEA0ZPwulKusH32UyKE2ZcsEhSXbQm%2F4gBmMzQHIHHDmx1F7wOdcf4haQbxmNXkFQ9RtUPJNNSTNkGk44ddyDecgy2UdHbFs3jUd1Je%2FaIMnJ3YUrLMNb1MHeYZTrwqMQWFWycVpdgvJgLE2Gnc%2FlbgOQtTtjVJ%2Bj3WgAJbgRkyq74QGpceZajieH1LT2PngjNI5GzCWu7bCBjqkATuyf4CBAjVYuBx1HvOGEDzmCS1AntODmg678iAHtB5QuhqUgMSjZ7qAC21IgRZ24Su6oWmjXqFa6Smv1zmAEsBoZZY4oURzh15Gxn10kknE9nJ8fMAsPmiTojvuBdLCryrr32fL8U%2FXa8bq1KJG8%2FCRYvdLmxCg%2F%2FljgYI%2FkSrrbd%2FWaKQ4rTtzlffp0pYJ3%2FXncvxcpdfONU76Rc2GwK2KlWK8&X-Amz-Signature=fd65110e75cfbbb95c63993cc54a9e88462e10d649960ad2faa6adb0441da09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIYYNP4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCYCQPp%2FcO%2FJvrFfkihHRobzP3%2BBDyMT5hr8T81CpPgwgIhAMwS15TVCjCorxlZi0GJmSGLQD8nLRUlZ8NZGJmVKsKlKv8DCDEQABoMNjM3NDIzMTgzODA1IgyBeHfm1fFOKZ9m364q3AMeB1lrk3zfQJR9O79tH3dpNB74b8ma%2FR5qk7v6wF%2F9t7dVRimlhG4HNxfmxSgdWhMOM1XvjVrjicaeFT3U6BTdZU3V7sRTtO0re8X2tPzav%2BmKRiZ1P5vnGMhRIzPCl34A0OQlA4MlOP2JTTa%2F4GYhk4G4Yb8Ab%2FBf2NiIjp65%2FOYAgY3%2BO1WKXACxcZaU8nQrfwR7plCR8scBI31b5%2FhTUOLMxGpZiMjTV1j5tflzC%2FKqxgsk36mTrfNYEz8bKFHIWXtpNmM4sbR4hmlY9KkRLEW%2FjLNxZM21%2BtJt70s88smMKc9sPqbgXoAhEcwTzl1bfXl0EjRzyLMhO27zN4fKwssUFoZE8n7gcAOmRrVKhzoqskrcrraddr49mNNNI%2FAwT4W1mVGVmJLnkGx6WDVywITIDCYzXoS7K9%2BCF1yuY35qZn%2BHrsFrkEA0ZPwulKusH32UyKE2ZcsEhSXbQm%2F4gBmMzQHIHHDmx1F7wOdcf4haQbxmNXkFQ9RtUPJNNSTNkGk44ddyDecgy2UdHbFs3jUd1Je%2FaIMnJ3YUrLMNb1MHeYZTrwqMQWFWycVpdgvJgLE2Gnc%2FlbgOQtTtjVJ%2Bj3WgAJbgRkyq74QGpceZajieH1LT2PngjNI5GzCWu7bCBjqkATuyf4CBAjVYuBx1HvOGEDzmCS1AntODmg678iAHtB5QuhqUgMSjZ7qAC21IgRZ24Su6oWmjXqFa6Smv1zmAEsBoZZY4oURzh15Gxn10kknE9nJ8fMAsPmiTojvuBdLCryrr32fL8U%2FXa8bq1KJG8%2FCRYvdLmxCg%2F%2FljgYI%2FkSrrbd%2FWaKQ4rTtzlffp0pYJ3%2FXncvxcpdfONU76Rc2GwK2KlWK8&X-Amz-Signature=224174add03d86549e3ccc211c53e604b2b254f53843f86bd98a26059945095e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIYYNP4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCYCQPp%2FcO%2FJvrFfkihHRobzP3%2BBDyMT5hr8T81CpPgwgIhAMwS15TVCjCorxlZi0GJmSGLQD8nLRUlZ8NZGJmVKsKlKv8DCDEQABoMNjM3NDIzMTgzODA1IgyBeHfm1fFOKZ9m364q3AMeB1lrk3zfQJR9O79tH3dpNB74b8ma%2FR5qk7v6wF%2F9t7dVRimlhG4HNxfmxSgdWhMOM1XvjVrjicaeFT3U6BTdZU3V7sRTtO0re8X2tPzav%2BmKRiZ1P5vnGMhRIzPCl34A0OQlA4MlOP2JTTa%2F4GYhk4G4Yb8Ab%2FBf2NiIjp65%2FOYAgY3%2BO1WKXACxcZaU8nQrfwR7plCR8scBI31b5%2FhTUOLMxGpZiMjTV1j5tflzC%2FKqxgsk36mTrfNYEz8bKFHIWXtpNmM4sbR4hmlY9KkRLEW%2FjLNxZM21%2BtJt70s88smMKc9sPqbgXoAhEcwTzl1bfXl0EjRzyLMhO27zN4fKwssUFoZE8n7gcAOmRrVKhzoqskrcrraddr49mNNNI%2FAwT4W1mVGVmJLnkGx6WDVywITIDCYzXoS7K9%2BCF1yuY35qZn%2BHrsFrkEA0ZPwulKusH32UyKE2ZcsEhSXbQm%2F4gBmMzQHIHHDmx1F7wOdcf4haQbxmNXkFQ9RtUPJNNSTNkGk44ddyDecgy2UdHbFs3jUd1Je%2FaIMnJ3YUrLMNb1MHeYZTrwqMQWFWycVpdgvJgLE2Gnc%2FlbgOQtTtjVJ%2Bj3WgAJbgRkyq74QGpceZajieH1LT2PngjNI5GzCWu7bCBjqkATuyf4CBAjVYuBx1HvOGEDzmCS1AntODmg678iAHtB5QuhqUgMSjZ7qAC21IgRZ24Su6oWmjXqFa6Smv1zmAEsBoZZY4oURzh15Gxn10kknE9nJ8fMAsPmiTojvuBdLCryrr32fL8U%2FXa8bq1KJG8%2FCRYvdLmxCg%2F%2FljgYI%2FkSrrbd%2FWaKQ4rTtzlffp0pYJ3%2FXncvxcpdfONU76Rc2GwK2KlWK8&X-Amz-Signature=0008565653d721df0a9296f89097512ea0c0c8138e04e22bbdf7273c26be77e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIYYNP4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCYCQPp%2FcO%2FJvrFfkihHRobzP3%2BBDyMT5hr8T81CpPgwgIhAMwS15TVCjCorxlZi0GJmSGLQD8nLRUlZ8NZGJmVKsKlKv8DCDEQABoMNjM3NDIzMTgzODA1IgyBeHfm1fFOKZ9m364q3AMeB1lrk3zfQJR9O79tH3dpNB74b8ma%2FR5qk7v6wF%2F9t7dVRimlhG4HNxfmxSgdWhMOM1XvjVrjicaeFT3U6BTdZU3V7sRTtO0re8X2tPzav%2BmKRiZ1P5vnGMhRIzPCl34A0OQlA4MlOP2JTTa%2F4GYhk4G4Yb8Ab%2FBf2NiIjp65%2FOYAgY3%2BO1WKXACxcZaU8nQrfwR7plCR8scBI31b5%2FhTUOLMxGpZiMjTV1j5tflzC%2FKqxgsk36mTrfNYEz8bKFHIWXtpNmM4sbR4hmlY9KkRLEW%2FjLNxZM21%2BtJt70s88smMKc9sPqbgXoAhEcwTzl1bfXl0EjRzyLMhO27zN4fKwssUFoZE8n7gcAOmRrVKhzoqskrcrraddr49mNNNI%2FAwT4W1mVGVmJLnkGx6WDVywITIDCYzXoS7K9%2BCF1yuY35qZn%2BHrsFrkEA0ZPwulKusH32UyKE2ZcsEhSXbQm%2F4gBmMzQHIHHDmx1F7wOdcf4haQbxmNXkFQ9RtUPJNNSTNkGk44ddyDecgy2UdHbFs3jUd1Je%2FaIMnJ3YUrLMNb1MHeYZTrwqMQWFWycVpdgvJgLE2Gnc%2FlbgOQtTtjVJ%2Bj3WgAJbgRkyq74QGpceZajieH1LT2PngjNI5GzCWu7bCBjqkATuyf4CBAjVYuBx1HvOGEDzmCS1AntODmg678iAHtB5QuhqUgMSjZ7qAC21IgRZ24Su6oWmjXqFa6Smv1zmAEsBoZZY4oURzh15Gxn10kknE9nJ8fMAsPmiTojvuBdLCryrr32fL8U%2FXa8bq1KJG8%2FCRYvdLmxCg%2F%2FljgYI%2FkSrrbd%2FWaKQ4rTtzlffp0pYJ3%2FXncvxcpdfONU76Rc2GwK2KlWK8&X-Amz-Signature=40ae69fa547026a187ded6dc2f3da17d1439d21f22e26e0aef44d967709e1242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
