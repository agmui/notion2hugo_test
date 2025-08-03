---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRUQEG4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2FqA3SIb0HwVqaLYJ5n2%2BngtYToBGLqkXSBnBfZacYQIgad2P%2FDNIGSoOKxeXIFHrqaVspS6TOt%2B8XcekALn3fkIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDI6AameAW%2FaBUInXxCrcAz7y1Vue1muXnQUYmSMyialXctkqijXQNXGZGfQQvEUk56G1d7uGlsyru9eSpPQWAF2u54EhfpOi%2Fvo7%2FhYflPFx6aUOyHdlOdWPhhiXYGV9bYLU1Rn17MYus3QnTR4troIYIE3cBjwoLieyzNvRqGmVjNoTWCcZANpKBrWTYbanLBNyLCimCfsBKDDL6fQTLHpu%2Byw%2Fq3h4nAlmahWki4R5TJZbJhTUwFTvvTHfolacOHIkEY0pdqY0xY%2FZU%2B2eA5knJWDQg4YPXRzPrihmXT9Mty5%2FUKADqokKYbNnuse7L%2FqTWypOxq6iQQr67ipQIN5dpg8FcQVus%2BvwcpmVNsX3uCF4oc7WD%2FhZA%2BC59gJWxmXbGuqmpWid1eoz8rBxPxuf5TH0zagFjVdShoLD5J1UvhGgbVf%2FdQHFK9LbZBnHaiVeq8oTs2GAU6CbRd3tQ9jWligtL1j3Gx3XlwJSPACtzBhHET0H%2FTRy2XbkqhLJjG5jWJrqhzuGYcY8BgiUMb9HrTSsmfbWrpndgv8v0cjOO8wxNuQ8lqjniSXGEIVjRZJkxrIGuFJVTdcrVhw9EdrQsXK%2B4SqmgbaDSAdXvjwAgp%2FrX6Vzw8GL4HlABP6RqLUgizhWGlQuYTMnMJHAvMQGOqUBIslRoIY2lFflNQKZavvFJCQg3mftOHN8za9VsKcZ0I8cq831aBpn%2FXvnlA2EUFtHKu76AjCrKfTrfIRseInTkxGnRGdswpD0C1v8ABDS5nkeCQRV9JWFMaGEsHTb2aYCWQ5iFlhF%2F5gDyYZrgp8KuLjwUptinByEiT9YfV6czdUJZFq9v8%2FO7SQTJt6h0OwFFVlTXZ9RUOk0A9LJflffz%2F9Q2TiG&X-Amz-Signature=c692e733eedf169c17658c41ced5c0de5bcac624d07cf54cdad0beb843c08379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRUQEG4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2FqA3SIb0HwVqaLYJ5n2%2BngtYToBGLqkXSBnBfZacYQIgad2P%2FDNIGSoOKxeXIFHrqaVspS6TOt%2B8XcekALn3fkIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDI6AameAW%2FaBUInXxCrcAz7y1Vue1muXnQUYmSMyialXctkqijXQNXGZGfQQvEUk56G1d7uGlsyru9eSpPQWAF2u54EhfpOi%2Fvo7%2FhYflPFx6aUOyHdlOdWPhhiXYGV9bYLU1Rn17MYus3QnTR4troIYIE3cBjwoLieyzNvRqGmVjNoTWCcZANpKBrWTYbanLBNyLCimCfsBKDDL6fQTLHpu%2Byw%2Fq3h4nAlmahWki4R5TJZbJhTUwFTvvTHfolacOHIkEY0pdqY0xY%2FZU%2B2eA5knJWDQg4YPXRzPrihmXT9Mty5%2FUKADqokKYbNnuse7L%2FqTWypOxq6iQQr67ipQIN5dpg8FcQVus%2BvwcpmVNsX3uCF4oc7WD%2FhZA%2BC59gJWxmXbGuqmpWid1eoz8rBxPxuf5TH0zagFjVdShoLD5J1UvhGgbVf%2FdQHFK9LbZBnHaiVeq8oTs2GAU6CbRd3tQ9jWligtL1j3Gx3XlwJSPACtzBhHET0H%2FTRy2XbkqhLJjG5jWJrqhzuGYcY8BgiUMb9HrTSsmfbWrpndgv8v0cjOO8wxNuQ8lqjniSXGEIVjRZJkxrIGuFJVTdcrVhw9EdrQsXK%2B4SqmgbaDSAdXvjwAgp%2FrX6Vzw8GL4HlABP6RqLUgizhWGlQuYTMnMJHAvMQGOqUBIslRoIY2lFflNQKZavvFJCQg3mftOHN8za9VsKcZ0I8cq831aBpn%2FXvnlA2EUFtHKu76AjCrKfTrfIRseInTkxGnRGdswpD0C1v8ABDS5nkeCQRV9JWFMaGEsHTb2aYCWQ5iFlhF%2F5gDyYZrgp8KuLjwUptinByEiT9YfV6czdUJZFq9v8%2FO7SQTJt6h0OwFFVlTXZ9RUOk0A9LJflffz%2F9Q2TiG&X-Amz-Signature=1da3be137e30999e61f570d9b128e7f58892f1afbe6f0674b12098a6435cec0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRUQEG4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2FqA3SIb0HwVqaLYJ5n2%2BngtYToBGLqkXSBnBfZacYQIgad2P%2FDNIGSoOKxeXIFHrqaVspS6TOt%2B8XcekALn3fkIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDI6AameAW%2FaBUInXxCrcAz7y1Vue1muXnQUYmSMyialXctkqijXQNXGZGfQQvEUk56G1d7uGlsyru9eSpPQWAF2u54EhfpOi%2Fvo7%2FhYflPFx6aUOyHdlOdWPhhiXYGV9bYLU1Rn17MYus3QnTR4troIYIE3cBjwoLieyzNvRqGmVjNoTWCcZANpKBrWTYbanLBNyLCimCfsBKDDL6fQTLHpu%2Byw%2Fq3h4nAlmahWki4R5TJZbJhTUwFTvvTHfolacOHIkEY0pdqY0xY%2FZU%2B2eA5knJWDQg4YPXRzPrihmXT9Mty5%2FUKADqokKYbNnuse7L%2FqTWypOxq6iQQr67ipQIN5dpg8FcQVus%2BvwcpmVNsX3uCF4oc7WD%2FhZA%2BC59gJWxmXbGuqmpWid1eoz8rBxPxuf5TH0zagFjVdShoLD5J1UvhGgbVf%2FdQHFK9LbZBnHaiVeq8oTs2GAU6CbRd3tQ9jWligtL1j3Gx3XlwJSPACtzBhHET0H%2FTRy2XbkqhLJjG5jWJrqhzuGYcY8BgiUMb9HrTSsmfbWrpndgv8v0cjOO8wxNuQ8lqjniSXGEIVjRZJkxrIGuFJVTdcrVhw9EdrQsXK%2B4SqmgbaDSAdXvjwAgp%2FrX6Vzw8GL4HlABP6RqLUgizhWGlQuYTMnMJHAvMQGOqUBIslRoIY2lFflNQKZavvFJCQg3mftOHN8za9VsKcZ0I8cq831aBpn%2FXvnlA2EUFtHKu76AjCrKfTrfIRseInTkxGnRGdswpD0C1v8ABDS5nkeCQRV9JWFMaGEsHTb2aYCWQ5iFlhF%2F5gDyYZrgp8KuLjwUptinByEiT9YfV6czdUJZFq9v8%2FO7SQTJt6h0OwFFVlTXZ9RUOk0A9LJflffz%2F9Q2TiG&X-Amz-Signature=ad3ddb80bf4223b54d2efd90058ffe0ff1237d01f8b1999b84cf45a70356622e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRUQEG4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2FqA3SIb0HwVqaLYJ5n2%2BngtYToBGLqkXSBnBfZacYQIgad2P%2FDNIGSoOKxeXIFHrqaVspS6TOt%2B8XcekALn3fkIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDI6AameAW%2FaBUInXxCrcAz7y1Vue1muXnQUYmSMyialXctkqijXQNXGZGfQQvEUk56G1d7uGlsyru9eSpPQWAF2u54EhfpOi%2Fvo7%2FhYflPFx6aUOyHdlOdWPhhiXYGV9bYLU1Rn17MYus3QnTR4troIYIE3cBjwoLieyzNvRqGmVjNoTWCcZANpKBrWTYbanLBNyLCimCfsBKDDL6fQTLHpu%2Byw%2Fq3h4nAlmahWki4R5TJZbJhTUwFTvvTHfolacOHIkEY0pdqY0xY%2FZU%2B2eA5knJWDQg4YPXRzPrihmXT9Mty5%2FUKADqokKYbNnuse7L%2FqTWypOxq6iQQr67ipQIN5dpg8FcQVus%2BvwcpmVNsX3uCF4oc7WD%2FhZA%2BC59gJWxmXbGuqmpWid1eoz8rBxPxuf5TH0zagFjVdShoLD5J1UvhGgbVf%2FdQHFK9LbZBnHaiVeq8oTs2GAU6CbRd3tQ9jWligtL1j3Gx3XlwJSPACtzBhHET0H%2FTRy2XbkqhLJjG5jWJrqhzuGYcY8BgiUMb9HrTSsmfbWrpndgv8v0cjOO8wxNuQ8lqjniSXGEIVjRZJkxrIGuFJVTdcrVhw9EdrQsXK%2B4SqmgbaDSAdXvjwAgp%2FrX6Vzw8GL4HlABP6RqLUgizhWGlQuYTMnMJHAvMQGOqUBIslRoIY2lFflNQKZavvFJCQg3mftOHN8za9VsKcZ0I8cq831aBpn%2FXvnlA2EUFtHKu76AjCrKfTrfIRseInTkxGnRGdswpD0C1v8ABDS5nkeCQRV9JWFMaGEsHTb2aYCWQ5iFlhF%2F5gDyYZrgp8KuLjwUptinByEiT9YfV6czdUJZFq9v8%2FO7SQTJt6h0OwFFVlTXZ9RUOk0A9LJflffz%2F9Q2TiG&X-Amz-Signature=8368c98dec9b8b40f1b2eb8c851050c4ad04fd92e0557e94862d9529b8498a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRUQEG4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2FqA3SIb0HwVqaLYJ5n2%2BngtYToBGLqkXSBnBfZacYQIgad2P%2FDNIGSoOKxeXIFHrqaVspS6TOt%2B8XcekALn3fkIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDI6AameAW%2FaBUInXxCrcAz7y1Vue1muXnQUYmSMyialXctkqijXQNXGZGfQQvEUk56G1d7uGlsyru9eSpPQWAF2u54EhfpOi%2Fvo7%2FhYflPFx6aUOyHdlOdWPhhiXYGV9bYLU1Rn17MYus3QnTR4troIYIE3cBjwoLieyzNvRqGmVjNoTWCcZANpKBrWTYbanLBNyLCimCfsBKDDL6fQTLHpu%2Byw%2Fq3h4nAlmahWki4R5TJZbJhTUwFTvvTHfolacOHIkEY0pdqY0xY%2FZU%2B2eA5knJWDQg4YPXRzPrihmXT9Mty5%2FUKADqokKYbNnuse7L%2FqTWypOxq6iQQr67ipQIN5dpg8FcQVus%2BvwcpmVNsX3uCF4oc7WD%2FhZA%2BC59gJWxmXbGuqmpWid1eoz8rBxPxuf5TH0zagFjVdShoLD5J1UvhGgbVf%2FdQHFK9LbZBnHaiVeq8oTs2GAU6CbRd3tQ9jWligtL1j3Gx3XlwJSPACtzBhHET0H%2FTRy2XbkqhLJjG5jWJrqhzuGYcY8BgiUMb9HrTSsmfbWrpndgv8v0cjOO8wxNuQ8lqjniSXGEIVjRZJkxrIGuFJVTdcrVhw9EdrQsXK%2B4SqmgbaDSAdXvjwAgp%2FrX6Vzw8GL4HlABP6RqLUgizhWGlQuYTMnMJHAvMQGOqUBIslRoIY2lFflNQKZavvFJCQg3mftOHN8za9VsKcZ0I8cq831aBpn%2FXvnlA2EUFtHKu76AjCrKfTrfIRseInTkxGnRGdswpD0C1v8ABDS5nkeCQRV9JWFMaGEsHTb2aYCWQ5iFlhF%2F5gDyYZrgp8KuLjwUptinByEiT9YfV6czdUJZFq9v8%2FO7SQTJt6h0OwFFVlTXZ9RUOk0A9LJflffz%2F9Q2TiG&X-Amz-Signature=bb3b5647fbdc32fa942e5415bd50bad6ca32444172309bd9df85add3e002e764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRUQEG4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2FqA3SIb0HwVqaLYJ5n2%2BngtYToBGLqkXSBnBfZacYQIgad2P%2FDNIGSoOKxeXIFHrqaVspS6TOt%2B8XcekALn3fkIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDI6AameAW%2FaBUInXxCrcAz7y1Vue1muXnQUYmSMyialXctkqijXQNXGZGfQQvEUk56G1d7uGlsyru9eSpPQWAF2u54EhfpOi%2Fvo7%2FhYflPFx6aUOyHdlOdWPhhiXYGV9bYLU1Rn17MYus3QnTR4troIYIE3cBjwoLieyzNvRqGmVjNoTWCcZANpKBrWTYbanLBNyLCimCfsBKDDL6fQTLHpu%2Byw%2Fq3h4nAlmahWki4R5TJZbJhTUwFTvvTHfolacOHIkEY0pdqY0xY%2FZU%2B2eA5knJWDQg4YPXRzPrihmXT9Mty5%2FUKADqokKYbNnuse7L%2FqTWypOxq6iQQr67ipQIN5dpg8FcQVus%2BvwcpmVNsX3uCF4oc7WD%2FhZA%2BC59gJWxmXbGuqmpWid1eoz8rBxPxuf5TH0zagFjVdShoLD5J1UvhGgbVf%2FdQHFK9LbZBnHaiVeq8oTs2GAU6CbRd3tQ9jWligtL1j3Gx3XlwJSPACtzBhHET0H%2FTRy2XbkqhLJjG5jWJrqhzuGYcY8BgiUMb9HrTSsmfbWrpndgv8v0cjOO8wxNuQ8lqjniSXGEIVjRZJkxrIGuFJVTdcrVhw9EdrQsXK%2B4SqmgbaDSAdXvjwAgp%2FrX6Vzw8GL4HlABP6RqLUgizhWGlQuYTMnMJHAvMQGOqUBIslRoIY2lFflNQKZavvFJCQg3mftOHN8za9VsKcZ0I8cq831aBpn%2FXvnlA2EUFtHKu76AjCrKfTrfIRseInTkxGnRGdswpD0C1v8ABDS5nkeCQRV9JWFMaGEsHTb2aYCWQ5iFlhF%2F5gDyYZrgp8KuLjwUptinByEiT9YfV6czdUJZFq9v8%2FO7SQTJt6h0OwFFVlTXZ9RUOk0A9LJflffz%2F9Q2TiG&X-Amz-Signature=ef957e84de24f1c4409613c3d45947f5dcb8b7e76e100420b2ee784dc1e73a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRUQEG4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2FqA3SIb0HwVqaLYJ5n2%2BngtYToBGLqkXSBnBfZacYQIgad2P%2FDNIGSoOKxeXIFHrqaVspS6TOt%2B8XcekALn3fkIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDI6AameAW%2FaBUInXxCrcAz7y1Vue1muXnQUYmSMyialXctkqijXQNXGZGfQQvEUk56G1d7uGlsyru9eSpPQWAF2u54EhfpOi%2Fvo7%2FhYflPFx6aUOyHdlOdWPhhiXYGV9bYLU1Rn17MYus3QnTR4troIYIE3cBjwoLieyzNvRqGmVjNoTWCcZANpKBrWTYbanLBNyLCimCfsBKDDL6fQTLHpu%2Byw%2Fq3h4nAlmahWki4R5TJZbJhTUwFTvvTHfolacOHIkEY0pdqY0xY%2FZU%2B2eA5knJWDQg4YPXRzPrihmXT9Mty5%2FUKADqokKYbNnuse7L%2FqTWypOxq6iQQr67ipQIN5dpg8FcQVus%2BvwcpmVNsX3uCF4oc7WD%2FhZA%2BC59gJWxmXbGuqmpWid1eoz8rBxPxuf5TH0zagFjVdShoLD5J1UvhGgbVf%2FdQHFK9LbZBnHaiVeq8oTs2GAU6CbRd3tQ9jWligtL1j3Gx3XlwJSPACtzBhHET0H%2FTRy2XbkqhLJjG5jWJrqhzuGYcY8BgiUMb9HrTSsmfbWrpndgv8v0cjOO8wxNuQ8lqjniSXGEIVjRZJkxrIGuFJVTdcrVhw9EdrQsXK%2B4SqmgbaDSAdXvjwAgp%2FrX6Vzw8GL4HlABP6RqLUgizhWGlQuYTMnMJHAvMQGOqUBIslRoIY2lFflNQKZavvFJCQg3mftOHN8za9VsKcZ0I8cq831aBpn%2FXvnlA2EUFtHKu76AjCrKfTrfIRseInTkxGnRGdswpD0C1v8ABDS5nkeCQRV9JWFMaGEsHTb2aYCWQ5iFlhF%2F5gDyYZrgp8KuLjwUptinByEiT9YfV6czdUJZFq9v8%2FO7SQTJt6h0OwFFVlTXZ9RUOk0A9LJflffz%2F9Q2TiG&X-Amz-Signature=42940d7f1a401382371a1b1a1015aad4ac5dc8123f2117a69cf420d66dfa9da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
