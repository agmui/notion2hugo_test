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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLJ54FUG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWEuyR2sOoyS42PzB2Fw7ZQ%2BI0vStgiiaPSa80jyenvgIhAKzLJWHOYi1EbBeKMRMNP%2BbTsgd0vhe4T36bGT0fVYllKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH64aAO1l2ledRkAwq3ANaN2nNbXIyNLkY0yka8NzybKXaL%2B48%2FsJiH7epVKEjCAf6gD0lB81Cxsn3KIXBcdp2mm1Y6k0r5pXOAORsAvkwH%2FUrsh2ygv0a%2FjjCDex%2FOaxDFeMfvJZ%2FOpXkIHU9%2B%2B1jND7uCnjuJjfpYRDs47wGIDujOkRvY8Ciy463nO1TwiIYIi7qhtQlkNWFkXp4pAbyYZBiIp1ka%2B%2FTR%2BOmKjRrtax2c9UtcWpLgI3xZIKx93CmyEKJ%2FCJtJ3T0KplX3yt6D1V49lCICc8J%2Fjw98dT59bFhMEDh4y71BP9QlY7o5V5vP4ffiHv5yLyshYZTvy1%2FdNme91QofZ9nzDpQh7yI0e%2F6Thd4HfkFqYHGjZg8CTsezLez7%2B4YwTqOfTj5dZPRnpF6OMPMPWAnw0L9I0ZGeTOaHhimmEbBrZjmUIJAobhvikRWYg4QIvLBP9PKa1QqA%2BmdTGS%2FseY72Ed3HRG%2BTnSpjX%2BpcSbVrglPZGYpfrSL8Qnc%2F6ZbY5YS04qHgS%2BhnWKHveJRQbKmQ364r%2F22K%2BGb4nt%2BziDg2749X%2FewHStTJxVy%2F1srnvnPEUjs6XYwjHsbEE12qBf1JqicjKeKFJjhpGVlT1ez6JMUnd02doNKrsEHIWVQN%2FuUnjDczYvDBjqkAZcuJKxAzTWvZ9t8fyO1pGwnksog1dcIZ5ea3EuA%2BNdcUEns6KencM9R8Jv6vtOwFMD3zsbS8AtOmae2J0NU%2FAN3x7hV1HBPmF%2BkeUCXAakffjn6FH%2F7ereWro0f08dALQrBUJ1REMZfce%2BT7O8u3UGrs10HblwpidqmTMZkh3CdhROv6TrWGZt0Fb238urSpLjS2ksuV1HoXraGY4RblwZl6DVk&X-Amz-Signature=cdb3cf23533a8350a51bec929a3bcb6ffe5fa04d25e1ea7a9e5304e143f18b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLJ54FUG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWEuyR2sOoyS42PzB2Fw7ZQ%2BI0vStgiiaPSa80jyenvgIhAKzLJWHOYi1EbBeKMRMNP%2BbTsgd0vhe4T36bGT0fVYllKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH64aAO1l2ledRkAwq3ANaN2nNbXIyNLkY0yka8NzybKXaL%2B48%2FsJiH7epVKEjCAf6gD0lB81Cxsn3KIXBcdp2mm1Y6k0r5pXOAORsAvkwH%2FUrsh2ygv0a%2FjjCDex%2FOaxDFeMfvJZ%2FOpXkIHU9%2B%2B1jND7uCnjuJjfpYRDs47wGIDujOkRvY8Ciy463nO1TwiIYIi7qhtQlkNWFkXp4pAbyYZBiIp1ka%2B%2FTR%2BOmKjRrtax2c9UtcWpLgI3xZIKx93CmyEKJ%2FCJtJ3T0KplX3yt6D1V49lCICc8J%2Fjw98dT59bFhMEDh4y71BP9QlY7o5V5vP4ffiHv5yLyshYZTvy1%2FdNme91QofZ9nzDpQh7yI0e%2F6Thd4HfkFqYHGjZg8CTsezLez7%2B4YwTqOfTj5dZPRnpF6OMPMPWAnw0L9I0ZGeTOaHhimmEbBrZjmUIJAobhvikRWYg4QIvLBP9PKa1QqA%2BmdTGS%2FseY72Ed3HRG%2BTnSpjX%2BpcSbVrglPZGYpfrSL8Qnc%2F6ZbY5YS04qHgS%2BhnWKHveJRQbKmQ364r%2F22K%2BGb4nt%2BziDg2749X%2FewHStTJxVy%2F1srnvnPEUjs6XYwjHsbEE12qBf1JqicjKeKFJjhpGVlT1ez6JMUnd02doNKrsEHIWVQN%2FuUnjDczYvDBjqkAZcuJKxAzTWvZ9t8fyO1pGwnksog1dcIZ5ea3EuA%2BNdcUEns6KencM9R8Jv6vtOwFMD3zsbS8AtOmae2J0NU%2FAN3x7hV1HBPmF%2BkeUCXAakffjn6FH%2F7ereWro0f08dALQrBUJ1REMZfce%2BT7O8u3UGrs10HblwpidqmTMZkh3CdhROv6TrWGZt0Fb238urSpLjS2ksuV1HoXraGY4RblwZl6DVk&X-Amz-Signature=6b3d58d48dcd51f4690a11f95e3a4b74a90297b86dd0d9948aba0b7839cc6716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLJ54FUG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWEuyR2sOoyS42PzB2Fw7ZQ%2BI0vStgiiaPSa80jyenvgIhAKzLJWHOYi1EbBeKMRMNP%2BbTsgd0vhe4T36bGT0fVYllKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH64aAO1l2ledRkAwq3ANaN2nNbXIyNLkY0yka8NzybKXaL%2B48%2FsJiH7epVKEjCAf6gD0lB81Cxsn3KIXBcdp2mm1Y6k0r5pXOAORsAvkwH%2FUrsh2ygv0a%2FjjCDex%2FOaxDFeMfvJZ%2FOpXkIHU9%2B%2B1jND7uCnjuJjfpYRDs47wGIDujOkRvY8Ciy463nO1TwiIYIi7qhtQlkNWFkXp4pAbyYZBiIp1ka%2B%2FTR%2BOmKjRrtax2c9UtcWpLgI3xZIKx93CmyEKJ%2FCJtJ3T0KplX3yt6D1V49lCICc8J%2Fjw98dT59bFhMEDh4y71BP9QlY7o5V5vP4ffiHv5yLyshYZTvy1%2FdNme91QofZ9nzDpQh7yI0e%2F6Thd4HfkFqYHGjZg8CTsezLez7%2B4YwTqOfTj5dZPRnpF6OMPMPWAnw0L9I0ZGeTOaHhimmEbBrZjmUIJAobhvikRWYg4QIvLBP9PKa1QqA%2BmdTGS%2FseY72Ed3HRG%2BTnSpjX%2BpcSbVrglPZGYpfrSL8Qnc%2F6ZbY5YS04qHgS%2BhnWKHveJRQbKmQ364r%2F22K%2BGb4nt%2BziDg2749X%2FewHStTJxVy%2F1srnvnPEUjs6XYwjHsbEE12qBf1JqicjKeKFJjhpGVlT1ez6JMUnd02doNKrsEHIWVQN%2FuUnjDczYvDBjqkAZcuJKxAzTWvZ9t8fyO1pGwnksog1dcIZ5ea3EuA%2BNdcUEns6KencM9R8Jv6vtOwFMD3zsbS8AtOmae2J0NU%2FAN3x7hV1HBPmF%2BkeUCXAakffjn6FH%2F7ereWro0f08dALQrBUJ1REMZfce%2BT7O8u3UGrs10HblwpidqmTMZkh3CdhROv6TrWGZt0Fb238urSpLjS2ksuV1HoXraGY4RblwZl6DVk&X-Amz-Signature=1a328e0fdbbd780073840f955c4a8e07f145deb22dd139088ffe7dd95ba1a0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLJ54FUG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWEuyR2sOoyS42PzB2Fw7ZQ%2BI0vStgiiaPSa80jyenvgIhAKzLJWHOYi1EbBeKMRMNP%2BbTsgd0vhe4T36bGT0fVYllKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH64aAO1l2ledRkAwq3ANaN2nNbXIyNLkY0yka8NzybKXaL%2B48%2FsJiH7epVKEjCAf6gD0lB81Cxsn3KIXBcdp2mm1Y6k0r5pXOAORsAvkwH%2FUrsh2ygv0a%2FjjCDex%2FOaxDFeMfvJZ%2FOpXkIHU9%2B%2B1jND7uCnjuJjfpYRDs47wGIDujOkRvY8Ciy463nO1TwiIYIi7qhtQlkNWFkXp4pAbyYZBiIp1ka%2B%2FTR%2BOmKjRrtax2c9UtcWpLgI3xZIKx93CmyEKJ%2FCJtJ3T0KplX3yt6D1V49lCICc8J%2Fjw98dT59bFhMEDh4y71BP9QlY7o5V5vP4ffiHv5yLyshYZTvy1%2FdNme91QofZ9nzDpQh7yI0e%2F6Thd4HfkFqYHGjZg8CTsezLez7%2B4YwTqOfTj5dZPRnpF6OMPMPWAnw0L9I0ZGeTOaHhimmEbBrZjmUIJAobhvikRWYg4QIvLBP9PKa1QqA%2BmdTGS%2FseY72Ed3HRG%2BTnSpjX%2BpcSbVrglPZGYpfrSL8Qnc%2F6ZbY5YS04qHgS%2BhnWKHveJRQbKmQ364r%2F22K%2BGb4nt%2BziDg2749X%2FewHStTJxVy%2F1srnvnPEUjs6XYwjHsbEE12qBf1JqicjKeKFJjhpGVlT1ez6JMUnd02doNKrsEHIWVQN%2FuUnjDczYvDBjqkAZcuJKxAzTWvZ9t8fyO1pGwnksog1dcIZ5ea3EuA%2BNdcUEns6KencM9R8Jv6vtOwFMD3zsbS8AtOmae2J0NU%2FAN3x7hV1HBPmF%2BkeUCXAakffjn6FH%2F7ereWro0f08dALQrBUJ1REMZfce%2BT7O8u3UGrs10HblwpidqmTMZkh3CdhROv6TrWGZt0Fb238urSpLjS2ksuV1HoXraGY4RblwZl6DVk&X-Amz-Signature=61013958a654e7d398f4224023371420a30fc508c3df0e126be6a2198a2f6f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLJ54FUG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWEuyR2sOoyS42PzB2Fw7ZQ%2BI0vStgiiaPSa80jyenvgIhAKzLJWHOYi1EbBeKMRMNP%2BbTsgd0vhe4T36bGT0fVYllKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH64aAO1l2ledRkAwq3ANaN2nNbXIyNLkY0yka8NzybKXaL%2B48%2FsJiH7epVKEjCAf6gD0lB81Cxsn3KIXBcdp2mm1Y6k0r5pXOAORsAvkwH%2FUrsh2ygv0a%2FjjCDex%2FOaxDFeMfvJZ%2FOpXkIHU9%2B%2B1jND7uCnjuJjfpYRDs47wGIDujOkRvY8Ciy463nO1TwiIYIi7qhtQlkNWFkXp4pAbyYZBiIp1ka%2B%2FTR%2BOmKjRrtax2c9UtcWpLgI3xZIKx93CmyEKJ%2FCJtJ3T0KplX3yt6D1V49lCICc8J%2Fjw98dT59bFhMEDh4y71BP9QlY7o5V5vP4ffiHv5yLyshYZTvy1%2FdNme91QofZ9nzDpQh7yI0e%2F6Thd4HfkFqYHGjZg8CTsezLez7%2B4YwTqOfTj5dZPRnpF6OMPMPWAnw0L9I0ZGeTOaHhimmEbBrZjmUIJAobhvikRWYg4QIvLBP9PKa1QqA%2BmdTGS%2FseY72Ed3HRG%2BTnSpjX%2BpcSbVrglPZGYpfrSL8Qnc%2F6ZbY5YS04qHgS%2BhnWKHveJRQbKmQ364r%2F22K%2BGb4nt%2BziDg2749X%2FewHStTJxVy%2F1srnvnPEUjs6XYwjHsbEE12qBf1JqicjKeKFJjhpGVlT1ez6JMUnd02doNKrsEHIWVQN%2FuUnjDczYvDBjqkAZcuJKxAzTWvZ9t8fyO1pGwnksog1dcIZ5ea3EuA%2BNdcUEns6KencM9R8Jv6vtOwFMD3zsbS8AtOmae2J0NU%2FAN3x7hV1HBPmF%2BkeUCXAakffjn6FH%2F7ereWro0f08dALQrBUJ1REMZfce%2BT7O8u3UGrs10HblwpidqmTMZkh3CdhROv6TrWGZt0Fb238urSpLjS2ksuV1HoXraGY4RblwZl6DVk&X-Amz-Signature=cee48cb156269a1543b36c03e1a2a1850f3e00b63d17bfb33073cd4f3e02efec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLJ54FUG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWEuyR2sOoyS42PzB2Fw7ZQ%2BI0vStgiiaPSa80jyenvgIhAKzLJWHOYi1EbBeKMRMNP%2BbTsgd0vhe4T36bGT0fVYllKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH64aAO1l2ledRkAwq3ANaN2nNbXIyNLkY0yka8NzybKXaL%2B48%2FsJiH7epVKEjCAf6gD0lB81Cxsn3KIXBcdp2mm1Y6k0r5pXOAORsAvkwH%2FUrsh2ygv0a%2FjjCDex%2FOaxDFeMfvJZ%2FOpXkIHU9%2B%2B1jND7uCnjuJjfpYRDs47wGIDujOkRvY8Ciy463nO1TwiIYIi7qhtQlkNWFkXp4pAbyYZBiIp1ka%2B%2FTR%2BOmKjRrtax2c9UtcWpLgI3xZIKx93CmyEKJ%2FCJtJ3T0KplX3yt6D1V49lCICc8J%2Fjw98dT59bFhMEDh4y71BP9QlY7o5V5vP4ffiHv5yLyshYZTvy1%2FdNme91QofZ9nzDpQh7yI0e%2F6Thd4HfkFqYHGjZg8CTsezLez7%2B4YwTqOfTj5dZPRnpF6OMPMPWAnw0L9I0ZGeTOaHhimmEbBrZjmUIJAobhvikRWYg4QIvLBP9PKa1QqA%2BmdTGS%2FseY72Ed3HRG%2BTnSpjX%2BpcSbVrglPZGYpfrSL8Qnc%2F6ZbY5YS04qHgS%2BhnWKHveJRQbKmQ364r%2F22K%2BGb4nt%2BziDg2749X%2FewHStTJxVy%2F1srnvnPEUjs6XYwjHsbEE12qBf1JqicjKeKFJjhpGVlT1ez6JMUnd02doNKrsEHIWVQN%2FuUnjDczYvDBjqkAZcuJKxAzTWvZ9t8fyO1pGwnksog1dcIZ5ea3EuA%2BNdcUEns6KencM9R8Jv6vtOwFMD3zsbS8AtOmae2J0NU%2FAN3x7hV1HBPmF%2BkeUCXAakffjn6FH%2F7ereWro0f08dALQrBUJ1REMZfce%2BT7O8u3UGrs10HblwpidqmTMZkh3CdhROv6TrWGZt0Fb238urSpLjS2ksuV1HoXraGY4RblwZl6DVk&X-Amz-Signature=994904607e2c4f1e1f667f9e8c569c4d43636e42075ffeb9312635495cd6e4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLJ54FUG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWEuyR2sOoyS42PzB2Fw7ZQ%2BI0vStgiiaPSa80jyenvgIhAKzLJWHOYi1EbBeKMRMNP%2BbTsgd0vhe4T36bGT0fVYllKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH64aAO1l2ledRkAwq3ANaN2nNbXIyNLkY0yka8NzybKXaL%2B48%2FsJiH7epVKEjCAf6gD0lB81Cxsn3KIXBcdp2mm1Y6k0r5pXOAORsAvkwH%2FUrsh2ygv0a%2FjjCDex%2FOaxDFeMfvJZ%2FOpXkIHU9%2B%2B1jND7uCnjuJjfpYRDs47wGIDujOkRvY8Ciy463nO1TwiIYIi7qhtQlkNWFkXp4pAbyYZBiIp1ka%2B%2FTR%2BOmKjRrtax2c9UtcWpLgI3xZIKx93CmyEKJ%2FCJtJ3T0KplX3yt6D1V49lCICc8J%2Fjw98dT59bFhMEDh4y71BP9QlY7o5V5vP4ffiHv5yLyshYZTvy1%2FdNme91QofZ9nzDpQh7yI0e%2F6Thd4HfkFqYHGjZg8CTsezLez7%2B4YwTqOfTj5dZPRnpF6OMPMPWAnw0L9I0ZGeTOaHhimmEbBrZjmUIJAobhvikRWYg4QIvLBP9PKa1QqA%2BmdTGS%2FseY72Ed3HRG%2BTnSpjX%2BpcSbVrglPZGYpfrSL8Qnc%2F6ZbY5YS04qHgS%2BhnWKHveJRQbKmQ364r%2F22K%2BGb4nt%2BziDg2749X%2FewHStTJxVy%2F1srnvnPEUjs6XYwjHsbEE12qBf1JqicjKeKFJjhpGVlT1ez6JMUnd02doNKrsEHIWVQN%2FuUnjDczYvDBjqkAZcuJKxAzTWvZ9t8fyO1pGwnksog1dcIZ5ea3EuA%2BNdcUEns6KencM9R8Jv6vtOwFMD3zsbS8AtOmae2J0NU%2FAN3x7hV1HBPmF%2BkeUCXAakffjn6FH%2F7ereWro0f08dALQrBUJ1REMZfce%2BT7O8u3UGrs10HblwpidqmTMZkh3CdhROv6TrWGZt0Fb238urSpLjS2ksuV1HoXraGY4RblwZl6DVk&X-Amz-Signature=77d4d8c94648fa0c7f28241fe90f688d81d802ff668ed147d3d4b1539f0b679f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
