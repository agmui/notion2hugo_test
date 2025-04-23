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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKC6PH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCknKOT5k42W5VopU6AQMAN6qbmj7PL%2B5SBZKn1TjvsOAIgStkmKZXDwOO%2BljQ68mnVc7OvPVbvz1MA%2FBrO3lXQP9UqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNRUW%2FeE8%2FiPnmeFyrcA%2BhGg6ORpqTqzPB1oB9GPEjW9Ss8IXdzQNIEVe15N8LTpwqjx8eNimGjq1zTktxPBDoMBhw%2FK5pmFPE1eAdJS%2Bts1AvXmOmmnI0ljSvZCu8FE3zDY1osfUXM%2FYU6OlZnuyg%2BBw9VkjR%2B1qr%2FoJPK05oJ4RpPJAmawplpw9XBR8NK6CMVf5qwjBlzrh6fEtlh28j08SVstCaEGmOrIIuX1Csy%2FsTwxPRt1%2BB%2BNaqlBu8mHJWsb%2BHY8gxTl7aKww%2F30cKmh65jhUE2XyNslgjYVy72TfLkDeR4HRS3N7UaQQH9Zf58Qg8M4W5PxH%2BaPi0zAUc1rNe3vxVtXJt2PcuysT6UflJFuyYYo1u6uH6GcnwmxunTJ2drcoOH9B2kzT091Zkr9pIdtuIT6cxtlsjyZjbFF2znyC57iMn%2Baf4wC0yDBPMzyp8upUWyZ%2FHoWNl%2FaRNkT%2BrqKMesFZCnWO7UNnUaXlPR0wRsXsS%2Bc5FYlTTc46veTigvyOj%2FZLev1IRjmE8UEhHCJAhx0zvUF%2Buwjjv0mWr%2B8IMAbN0zJh9N8AeN10aCXEr4UxT%2FWbOkEh2UjjDYnvrCPIahhm%2FmqZOeYbc63rgRMN3aVA4RbIVrBm7MSqX4fFhHYScCxB3cMNzGpcAGOqUBuR09mKrhrOJ771V7K9JPQuG%2BaH2c50XXewTJZe2mi%2Bz4aNOnaLAMSkEJ%2BM9h%2FoyUAOKs%2BLxun3EaaWAQT14Jho7Z%2B4tb8%2BMAmpjtvZKpu4yJ277pV02G0qxvscFArjaBvj2a97Pw5TRrt7wlH8y%2B92Twp56fo9%2FeeqzITPxXiXdGLz26GhUQFo97GDl32MEXsStrzqDUQK4j93%2F1P0Tevz3LQST9&X-Amz-Signature=0dbc98e8ab2c4bea853d1086cecb151018bb2ae80069a210b288419b491c95de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKC6PH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCknKOT5k42W5VopU6AQMAN6qbmj7PL%2B5SBZKn1TjvsOAIgStkmKZXDwOO%2BljQ68mnVc7OvPVbvz1MA%2FBrO3lXQP9UqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNRUW%2FeE8%2FiPnmeFyrcA%2BhGg6ORpqTqzPB1oB9GPEjW9Ss8IXdzQNIEVe15N8LTpwqjx8eNimGjq1zTktxPBDoMBhw%2FK5pmFPE1eAdJS%2Bts1AvXmOmmnI0ljSvZCu8FE3zDY1osfUXM%2FYU6OlZnuyg%2BBw9VkjR%2B1qr%2FoJPK05oJ4RpPJAmawplpw9XBR8NK6CMVf5qwjBlzrh6fEtlh28j08SVstCaEGmOrIIuX1Csy%2FsTwxPRt1%2BB%2BNaqlBu8mHJWsb%2BHY8gxTl7aKww%2F30cKmh65jhUE2XyNslgjYVy72TfLkDeR4HRS3N7UaQQH9Zf58Qg8M4W5PxH%2BaPi0zAUc1rNe3vxVtXJt2PcuysT6UflJFuyYYo1u6uH6GcnwmxunTJ2drcoOH9B2kzT091Zkr9pIdtuIT6cxtlsjyZjbFF2znyC57iMn%2Baf4wC0yDBPMzyp8upUWyZ%2FHoWNl%2FaRNkT%2BrqKMesFZCnWO7UNnUaXlPR0wRsXsS%2Bc5FYlTTc46veTigvyOj%2FZLev1IRjmE8UEhHCJAhx0zvUF%2Buwjjv0mWr%2B8IMAbN0zJh9N8AeN10aCXEr4UxT%2FWbOkEh2UjjDYnvrCPIahhm%2FmqZOeYbc63rgRMN3aVA4RbIVrBm7MSqX4fFhHYScCxB3cMNzGpcAGOqUBuR09mKrhrOJ771V7K9JPQuG%2BaH2c50XXewTJZe2mi%2Bz4aNOnaLAMSkEJ%2BM9h%2FoyUAOKs%2BLxun3EaaWAQT14Jho7Z%2B4tb8%2BMAmpjtvZKpu4yJ277pV02G0qxvscFArjaBvj2a97Pw5TRrt7wlH8y%2B92Twp56fo9%2FeeqzITPxXiXdGLz26GhUQFo97GDl32MEXsStrzqDUQK4j93%2F1P0Tevz3LQST9&X-Amz-Signature=505a823e3752c7375c4c154f5c53a702b8a61503ab26708712521dbe6fdb8f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKC6PH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCknKOT5k42W5VopU6AQMAN6qbmj7PL%2B5SBZKn1TjvsOAIgStkmKZXDwOO%2BljQ68mnVc7OvPVbvz1MA%2FBrO3lXQP9UqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNRUW%2FeE8%2FiPnmeFyrcA%2BhGg6ORpqTqzPB1oB9GPEjW9Ss8IXdzQNIEVe15N8LTpwqjx8eNimGjq1zTktxPBDoMBhw%2FK5pmFPE1eAdJS%2Bts1AvXmOmmnI0ljSvZCu8FE3zDY1osfUXM%2FYU6OlZnuyg%2BBw9VkjR%2B1qr%2FoJPK05oJ4RpPJAmawplpw9XBR8NK6CMVf5qwjBlzrh6fEtlh28j08SVstCaEGmOrIIuX1Csy%2FsTwxPRt1%2BB%2BNaqlBu8mHJWsb%2BHY8gxTl7aKww%2F30cKmh65jhUE2XyNslgjYVy72TfLkDeR4HRS3N7UaQQH9Zf58Qg8M4W5PxH%2BaPi0zAUc1rNe3vxVtXJt2PcuysT6UflJFuyYYo1u6uH6GcnwmxunTJ2drcoOH9B2kzT091Zkr9pIdtuIT6cxtlsjyZjbFF2znyC57iMn%2Baf4wC0yDBPMzyp8upUWyZ%2FHoWNl%2FaRNkT%2BrqKMesFZCnWO7UNnUaXlPR0wRsXsS%2Bc5FYlTTc46veTigvyOj%2FZLev1IRjmE8UEhHCJAhx0zvUF%2Buwjjv0mWr%2B8IMAbN0zJh9N8AeN10aCXEr4UxT%2FWbOkEh2UjjDYnvrCPIahhm%2FmqZOeYbc63rgRMN3aVA4RbIVrBm7MSqX4fFhHYScCxB3cMNzGpcAGOqUBuR09mKrhrOJ771V7K9JPQuG%2BaH2c50XXewTJZe2mi%2Bz4aNOnaLAMSkEJ%2BM9h%2FoyUAOKs%2BLxun3EaaWAQT14Jho7Z%2B4tb8%2BMAmpjtvZKpu4yJ277pV02G0qxvscFArjaBvj2a97Pw5TRrt7wlH8y%2B92Twp56fo9%2FeeqzITPxXiXdGLz26GhUQFo97GDl32MEXsStrzqDUQK4j93%2F1P0Tevz3LQST9&X-Amz-Signature=766a695642db54a89a5acfa6307e2f5733133f30f994376432912e5b5f7064e1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKC6PH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCknKOT5k42W5VopU6AQMAN6qbmj7PL%2B5SBZKn1TjvsOAIgStkmKZXDwOO%2BljQ68mnVc7OvPVbvz1MA%2FBrO3lXQP9UqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNRUW%2FeE8%2FiPnmeFyrcA%2BhGg6ORpqTqzPB1oB9GPEjW9Ss8IXdzQNIEVe15N8LTpwqjx8eNimGjq1zTktxPBDoMBhw%2FK5pmFPE1eAdJS%2Bts1AvXmOmmnI0ljSvZCu8FE3zDY1osfUXM%2FYU6OlZnuyg%2BBw9VkjR%2B1qr%2FoJPK05oJ4RpPJAmawplpw9XBR8NK6CMVf5qwjBlzrh6fEtlh28j08SVstCaEGmOrIIuX1Csy%2FsTwxPRt1%2BB%2BNaqlBu8mHJWsb%2BHY8gxTl7aKww%2F30cKmh65jhUE2XyNslgjYVy72TfLkDeR4HRS3N7UaQQH9Zf58Qg8M4W5PxH%2BaPi0zAUc1rNe3vxVtXJt2PcuysT6UflJFuyYYo1u6uH6GcnwmxunTJ2drcoOH9B2kzT091Zkr9pIdtuIT6cxtlsjyZjbFF2znyC57iMn%2Baf4wC0yDBPMzyp8upUWyZ%2FHoWNl%2FaRNkT%2BrqKMesFZCnWO7UNnUaXlPR0wRsXsS%2Bc5FYlTTc46veTigvyOj%2FZLev1IRjmE8UEhHCJAhx0zvUF%2Buwjjv0mWr%2B8IMAbN0zJh9N8AeN10aCXEr4UxT%2FWbOkEh2UjjDYnvrCPIahhm%2FmqZOeYbc63rgRMN3aVA4RbIVrBm7MSqX4fFhHYScCxB3cMNzGpcAGOqUBuR09mKrhrOJ771V7K9JPQuG%2BaH2c50XXewTJZe2mi%2Bz4aNOnaLAMSkEJ%2BM9h%2FoyUAOKs%2BLxun3EaaWAQT14Jho7Z%2B4tb8%2BMAmpjtvZKpu4yJ277pV02G0qxvscFArjaBvj2a97Pw5TRrt7wlH8y%2B92Twp56fo9%2FeeqzITPxXiXdGLz26GhUQFo97GDl32MEXsStrzqDUQK4j93%2F1P0Tevz3LQST9&X-Amz-Signature=a2d7b1b7c962becda034afa22c7cf313d1d7da5fb744c2bd7bbfc2c7038e725f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKC6PH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCknKOT5k42W5VopU6AQMAN6qbmj7PL%2B5SBZKn1TjvsOAIgStkmKZXDwOO%2BljQ68mnVc7OvPVbvz1MA%2FBrO3lXQP9UqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNRUW%2FeE8%2FiPnmeFyrcA%2BhGg6ORpqTqzPB1oB9GPEjW9Ss8IXdzQNIEVe15N8LTpwqjx8eNimGjq1zTktxPBDoMBhw%2FK5pmFPE1eAdJS%2Bts1AvXmOmmnI0ljSvZCu8FE3zDY1osfUXM%2FYU6OlZnuyg%2BBw9VkjR%2B1qr%2FoJPK05oJ4RpPJAmawplpw9XBR8NK6CMVf5qwjBlzrh6fEtlh28j08SVstCaEGmOrIIuX1Csy%2FsTwxPRt1%2BB%2BNaqlBu8mHJWsb%2BHY8gxTl7aKww%2F30cKmh65jhUE2XyNslgjYVy72TfLkDeR4HRS3N7UaQQH9Zf58Qg8M4W5PxH%2BaPi0zAUc1rNe3vxVtXJt2PcuysT6UflJFuyYYo1u6uH6GcnwmxunTJ2drcoOH9B2kzT091Zkr9pIdtuIT6cxtlsjyZjbFF2znyC57iMn%2Baf4wC0yDBPMzyp8upUWyZ%2FHoWNl%2FaRNkT%2BrqKMesFZCnWO7UNnUaXlPR0wRsXsS%2Bc5FYlTTc46veTigvyOj%2FZLev1IRjmE8UEhHCJAhx0zvUF%2Buwjjv0mWr%2B8IMAbN0zJh9N8AeN10aCXEr4UxT%2FWbOkEh2UjjDYnvrCPIahhm%2FmqZOeYbc63rgRMN3aVA4RbIVrBm7MSqX4fFhHYScCxB3cMNzGpcAGOqUBuR09mKrhrOJ771V7K9JPQuG%2BaH2c50XXewTJZe2mi%2Bz4aNOnaLAMSkEJ%2BM9h%2FoyUAOKs%2BLxun3EaaWAQT14Jho7Z%2B4tb8%2BMAmpjtvZKpu4yJ277pV02G0qxvscFArjaBvj2a97Pw5TRrt7wlH8y%2B92Twp56fo9%2FeeqzITPxXiXdGLz26GhUQFo97GDl32MEXsStrzqDUQK4j93%2F1P0Tevz3LQST9&X-Amz-Signature=400496e81908e747116dcafad32c70329e4e245e238ceb6d36a8d7d3fe64867e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKC6PH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCknKOT5k42W5VopU6AQMAN6qbmj7PL%2B5SBZKn1TjvsOAIgStkmKZXDwOO%2BljQ68mnVc7OvPVbvz1MA%2FBrO3lXQP9UqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNRUW%2FeE8%2FiPnmeFyrcA%2BhGg6ORpqTqzPB1oB9GPEjW9Ss8IXdzQNIEVe15N8LTpwqjx8eNimGjq1zTktxPBDoMBhw%2FK5pmFPE1eAdJS%2Bts1AvXmOmmnI0ljSvZCu8FE3zDY1osfUXM%2FYU6OlZnuyg%2BBw9VkjR%2B1qr%2FoJPK05oJ4RpPJAmawplpw9XBR8NK6CMVf5qwjBlzrh6fEtlh28j08SVstCaEGmOrIIuX1Csy%2FsTwxPRt1%2BB%2BNaqlBu8mHJWsb%2BHY8gxTl7aKww%2F30cKmh65jhUE2XyNslgjYVy72TfLkDeR4HRS3N7UaQQH9Zf58Qg8M4W5PxH%2BaPi0zAUc1rNe3vxVtXJt2PcuysT6UflJFuyYYo1u6uH6GcnwmxunTJ2drcoOH9B2kzT091Zkr9pIdtuIT6cxtlsjyZjbFF2znyC57iMn%2Baf4wC0yDBPMzyp8upUWyZ%2FHoWNl%2FaRNkT%2BrqKMesFZCnWO7UNnUaXlPR0wRsXsS%2Bc5FYlTTc46veTigvyOj%2FZLev1IRjmE8UEhHCJAhx0zvUF%2Buwjjv0mWr%2B8IMAbN0zJh9N8AeN10aCXEr4UxT%2FWbOkEh2UjjDYnvrCPIahhm%2FmqZOeYbc63rgRMN3aVA4RbIVrBm7MSqX4fFhHYScCxB3cMNzGpcAGOqUBuR09mKrhrOJ771V7K9JPQuG%2BaH2c50XXewTJZe2mi%2Bz4aNOnaLAMSkEJ%2BM9h%2FoyUAOKs%2BLxun3EaaWAQT14Jho7Z%2B4tb8%2BMAmpjtvZKpu4yJ277pV02G0qxvscFArjaBvj2a97Pw5TRrt7wlH8y%2B92Twp56fo9%2FeeqzITPxXiXdGLz26GhUQFo97GDl32MEXsStrzqDUQK4j93%2F1P0Tevz3LQST9&X-Amz-Signature=21e0e25081a73e89c28d58c64e8321a4e5cca858b5224722069c9ef29b2254f4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKC6PH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCknKOT5k42W5VopU6AQMAN6qbmj7PL%2B5SBZKn1TjvsOAIgStkmKZXDwOO%2BljQ68mnVc7OvPVbvz1MA%2FBrO3lXQP9UqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNRUW%2FeE8%2FiPnmeFyrcA%2BhGg6ORpqTqzPB1oB9GPEjW9Ss8IXdzQNIEVe15N8LTpwqjx8eNimGjq1zTktxPBDoMBhw%2FK5pmFPE1eAdJS%2Bts1AvXmOmmnI0ljSvZCu8FE3zDY1osfUXM%2FYU6OlZnuyg%2BBw9VkjR%2B1qr%2FoJPK05oJ4RpPJAmawplpw9XBR8NK6CMVf5qwjBlzrh6fEtlh28j08SVstCaEGmOrIIuX1Csy%2FsTwxPRt1%2BB%2BNaqlBu8mHJWsb%2BHY8gxTl7aKww%2F30cKmh65jhUE2XyNslgjYVy72TfLkDeR4HRS3N7UaQQH9Zf58Qg8M4W5PxH%2BaPi0zAUc1rNe3vxVtXJt2PcuysT6UflJFuyYYo1u6uH6GcnwmxunTJ2drcoOH9B2kzT091Zkr9pIdtuIT6cxtlsjyZjbFF2znyC57iMn%2Baf4wC0yDBPMzyp8upUWyZ%2FHoWNl%2FaRNkT%2BrqKMesFZCnWO7UNnUaXlPR0wRsXsS%2Bc5FYlTTc46veTigvyOj%2FZLev1IRjmE8UEhHCJAhx0zvUF%2Buwjjv0mWr%2B8IMAbN0zJh9N8AeN10aCXEr4UxT%2FWbOkEh2UjjDYnvrCPIahhm%2FmqZOeYbc63rgRMN3aVA4RbIVrBm7MSqX4fFhHYScCxB3cMNzGpcAGOqUBuR09mKrhrOJ771V7K9JPQuG%2BaH2c50XXewTJZe2mi%2Bz4aNOnaLAMSkEJ%2BM9h%2FoyUAOKs%2BLxun3EaaWAQT14Jho7Z%2B4tb8%2BMAmpjtvZKpu4yJ277pV02G0qxvscFArjaBvj2a97Pw5TRrt7wlH8y%2B92Twp56fo9%2FeeqzITPxXiXdGLz26GhUQFo97GDl32MEXsStrzqDUQK4j93%2F1P0Tevz3LQST9&X-Amz-Signature=d0c21c156e9db5c62d802f221fd3dc2d00438b45e6eb528d382fda47a79dbf00&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
