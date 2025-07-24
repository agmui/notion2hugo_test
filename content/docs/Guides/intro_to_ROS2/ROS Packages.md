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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGRS6EW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIF8rIpSzoECC8pIDgxrjiwD64jYY6jewtOJ%2FQZJQ2ZpLAiAcPJ7VuSiVma6w7VFiO8tJ4ifkUFZfZtCaStD6EM7tsCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMFbEO5uiHTcesvdvUKtwDNYYT2jARG6I2zX6mRpG0ordoiZTnAm7SEJmyi%2F6OgtpNiJCaZDhtZCSst7nE6ZRPgWBekpKZt%2F1PpTOH0h4neUjDhOnpI0oMQr%2BvWw7ML%2FfXKIdOZLQo1ftvkORuXUPjaEXjVOCf9zftZb7AGYQWSItDQ27OHkcl3okwDXmCmH0at6L6KrFKVv6gBInwE1mlN82KaPBioY4Zuz0Yb1sgbBCR%2BGxvIPsiS0iOB95ldweWmvIoNCWmynZOnxj4y3oOHsMKUidjhzN6VnodEpw4hBtXhGSoAC2NkgI1evyrHH24tASwgogl9b2aUi5nNQLe9saxj%2FeV3hWjl%2B1kfQ9hpkOzfcR2GjP8fwVXL81zlKIRIqIcixL9t6n7AZCK0ASHRO1RDyL%2BFKdPqXvUXV0GCVNqfYSLaZ1yIb0OvJ%2F%2Bgh5N7whyHMPNh8budvRop%2BZmqk2ZrXj%2FLgQv%2BDF%2B8cPMAQCPJD5ItBASi%2BpUKUSHxchqGweRla5DKAYfMGfeVcWDyWvwX20zUy2nHf%2BwTTUEdQhqcr4D5xXoa81eyvqaYzWf6wb1nWxADy8FCSX71y8qlxNe40y04LO3TBzTdeaQ9oOqd8IqpPZ34J41BO70p4UxtttRR0Z63TKWhKwwxdeKxAY6pgEfHw28Nib%2FfDToGTqPn09debb1qzfJGLlOFJ5dtokn3NkXliJpmbTqtv3kGKWSN0vwdKs%2FUGLTpOp6MLuSuhDxY0sqSrOkPD0CZuuIGewad0ugnGn7HZonqTo1Oh14heWHTeBiKAlaJXNNvc35hjpSxxgQiYC7ig1JCuu2xFCrS0K3S09Jv5amafAFoTsjkmxza7Yg%2FuDCDY1rHccZyTmpgEoPGYso&X-Amz-Signature=a0ec28315fe72ff4b00f30b891ddf221ae5be91ada1dac8996a430bcf4821f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGRS6EW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIF8rIpSzoECC8pIDgxrjiwD64jYY6jewtOJ%2FQZJQ2ZpLAiAcPJ7VuSiVma6w7VFiO8tJ4ifkUFZfZtCaStD6EM7tsCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMFbEO5uiHTcesvdvUKtwDNYYT2jARG6I2zX6mRpG0ordoiZTnAm7SEJmyi%2F6OgtpNiJCaZDhtZCSst7nE6ZRPgWBekpKZt%2F1PpTOH0h4neUjDhOnpI0oMQr%2BvWw7ML%2FfXKIdOZLQo1ftvkORuXUPjaEXjVOCf9zftZb7AGYQWSItDQ27OHkcl3okwDXmCmH0at6L6KrFKVv6gBInwE1mlN82KaPBioY4Zuz0Yb1sgbBCR%2BGxvIPsiS0iOB95ldweWmvIoNCWmynZOnxj4y3oOHsMKUidjhzN6VnodEpw4hBtXhGSoAC2NkgI1evyrHH24tASwgogl9b2aUi5nNQLe9saxj%2FeV3hWjl%2B1kfQ9hpkOzfcR2GjP8fwVXL81zlKIRIqIcixL9t6n7AZCK0ASHRO1RDyL%2BFKdPqXvUXV0GCVNqfYSLaZ1yIb0OvJ%2F%2Bgh5N7whyHMPNh8budvRop%2BZmqk2ZrXj%2FLgQv%2BDF%2B8cPMAQCPJD5ItBASi%2BpUKUSHxchqGweRla5DKAYfMGfeVcWDyWvwX20zUy2nHf%2BwTTUEdQhqcr4D5xXoa81eyvqaYzWf6wb1nWxADy8FCSX71y8qlxNe40y04LO3TBzTdeaQ9oOqd8IqpPZ34J41BO70p4UxtttRR0Z63TKWhKwwxdeKxAY6pgEfHw28Nib%2FfDToGTqPn09debb1qzfJGLlOFJ5dtokn3NkXliJpmbTqtv3kGKWSN0vwdKs%2FUGLTpOp6MLuSuhDxY0sqSrOkPD0CZuuIGewad0ugnGn7HZonqTo1Oh14heWHTeBiKAlaJXNNvc35hjpSxxgQiYC7ig1JCuu2xFCrS0K3S09Jv5amafAFoTsjkmxza7Yg%2FuDCDY1rHccZyTmpgEoPGYso&X-Amz-Signature=c687a37a532db5a716b530c52cd50e714be6a994ac767b49920670181895c8fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGRS6EW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIF8rIpSzoECC8pIDgxrjiwD64jYY6jewtOJ%2FQZJQ2ZpLAiAcPJ7VuSiVma6w7VFiO8tJ4ifkUFZfZtCaStD6EM7tsCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMFbEO5uiHTcesvdvUKtwDNYYT2jARG6I2zX6mRpG0ordoiZTnAm7SEJmyi%2F6OgtpNiJCaZDhtZCSst7nE6ZRPgWBekpKZt%2F1PpTOH0h4neUjDhOnpI0oMQr%2BvWw7ML%2FfXKIdOZLQo1ftvkORuXUPjaEXjVOCf9zftZb7AGYQWSItDQ27OHkcl3okwDXmCmH0at6L6KrFKVv6gBInwE1mlN82KaPBioY4Zuz0Yb1sgbBCR%2BGxvIPsiS0iOB95ldweWmvIoNCWmynZOnxj4y3oOHsMKUidjhzN6VnodEpw4hBtXhGSoAC2NkgI1evyrHH24tASwgogl9b2aUi5nNQLe9saxj%2FeV3hWjl%2B1kfQ9hpkOzfcR2GjP8fwVXL81zlKIRIqIcixL9t6n7AZCK0ASHRO1RDyL%2BFKdPqXvUXV0GCVNqfYSLaZ1yIb0OvJ%2F%2Bgh5N7whyHMPNh8budvRop%2BZmqk2ZrXj%2FLgQv%2BDF%2B8cPMAQCPJD5ItBASi%2BpUKUSHxchqGweRla5DKAYfMGfeVcWDyWvwX20zUy2nHf%2BwTTUEdQhqcr4D5xXoa81eyvqaYzWf6wb1nWxADy8FCSX71y8qlxNe40y04LO3TBzTdeaQ9oOqd8IqpPZ34J41BO70p4UxtttRR0Z63TKWhKwwxdeKxAY6pgEfHw28Nib%2FfDToGTqPn09debb1qzfJGLlOFJ5dtokn3NkXliJpmbTqtv3kGKWSN0vwdKs%2FUGLTpOp6MLuSuhDxY0sqSrOkPD0CZuuIGewad0ugnGn7HZonqTo1Oh14heWHTeBiKAlaJXNNvc35hjpSxxgQiYC7ig1JCuu2xFCrS0K3S09Jv5amafAFoTsjkmxza7Yg%2FuDCDY1rHccZyTmpgEoPGYso&X-Amz-Signature=1b9f5d4fcf1e861f12df4b0db9cbb002c40d447534ace36145e8f37b2ce1a73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGRS6EW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIF8rIpSzoECC8pIDgxrjiwD64jYY6jewtOJ%2FQZJQ2ZpLAiAcPJ7VuSiVma6w7VFiO8tJ4ifkUFZfZtCaStD6EM7tsCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMFbEO5uiHTcesvdvUKtwDNYYT2jARG6I2zX6mRpG0ordoiZTnAm7SEJmyi%2F6OgtpNiJCaZDhtZCSst7nE6ZRPgWBekpKZt%2F1PpTOH0h4neUjDhOnpI0oMQr%2BvWw7ML%2FfXKIdOZLQo1ftvkORuXUPjaEXjVOCf9zftZb7AGYQWSItDQ27OHkcl3okwDXmCmH0at6L6KrFKVv6gBInwE1mlN82KaPBioY4Zuz0Yb1sgbBCR%2BGxvIPsiS0iOB95ldweWmvIoNCWmynZOnxj4y3oOHsMKUidjhzN6VnodEpw4hBtXhGSoAC2NkgI1evyrHH24tASwgogl9b2aUi5nNQLe9saxj%2FeV3hWjl%2B1kfQ9hpkOzfcR2GjP8fwVXL81zlKIRIqIcixL9t6n7AZCK0ASHRO1RDyL%2BFKdPqXvUXV0GCVNqfYSLaZ1yIb0OvJ%2F%2Bgh5N7whyHMPNh8budvRop%2BZmqk2ZrXj%2FLgQv%2BDF%2B8cPMAQCPJD5ItBASi%2BpUKUSHxchqGweRla5DKAYfMGfeVcWDyWvwX20zUy2nHf%2BwTTUEdQhqcr4D5xXoa81eyvqaYzWf6wb1nWxADy8FCSX71y8qlxNe40y04LO3TBzTdeaQ9oOqd8IqpPZ34J41BO70p4UxtttRR0Z63TKWhKwwxdeKxAY6pgEfHw28Nib%2FfDToGTqPn09debb1qzfJGLlOFJ5dtokn3NkXliJpmbTqtv3kGKWSN0vwdKs%2FUGLTpOp6MLuSuhDxY0sqSrOkPD0CZuuIGewad0ugnGn7HZonqTo1Oh14heWHTeBiKAlaJXNNvc35hjpSxxgQiYC7ig1JCuu2xFCrS0K3S09Jv5amafAFoTsjkmxza7Yg%2FuDCDY1rHccZyTmpgEoPGYso&X-Amz-Signature=f3a02de6283d26f5d660a890764f0b0e2e396ac75376531b21bd97612fce2271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGRS6EW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIF8rIpSzoECC8pIDgxrjiwD64jYY6jewtOJ%2FQZJQ2ZpLAiAcPJ7VuSiVma6w7VFiO8tJ4ifkUFZfZtCaStD6EM7tsCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMFbEO5uiHTcesvdvUKtwDNYYT2jARG6I2zX6mRpG0ordoiZTnAm7SEJmyi%2F6OgtpNiJCaZDhtZCSst7nE6ZRPgWBekpKZt%2F1PpTOH0h4neUjDhOnpI0oMQr%2BvWw7ML%2FfXKIdOZLQo1ftvkORuXUPjaEXjVOCf9zftZb7AGYQWSItDQ27OHkcl3okwDXmCmH0at6L6KrFKVv6gBInwE1mlN82KaPBioY4Zuz0Yb1sgbBCR%2BGxvIPsiS0iOB95ldweWmvIoNCWmynZOnxj4y3oOHsMKUidjhzN6VnodEpw4hBtXhGSoAC2NkgI1evyrHH24tASwgogl9b2aUi5nNQLe9saxj%2FeV3hWjl%2B1kfQ9hpkOzfcR2GjP8fwVXL81zlKIRIqIcixL9t6n7AZCK0ASHRO1RDyL%2BFKdPqXvUXV0GCVNqfYSLaZ1yIb0OvJ%2F%2Bgh5N7whyHMPNh8budvRop%2BZmqk2ZrXj%2FLgQv%2BDF%2B8cPMAQCPJD5ItBASi%2BpUKUSHxchqGweRla5DKAYfMGfeVcWDyWvwX20zUy2nHf%2BwTTUEdQhqcr4D5xXoa81eyvqaYzWf6wb1nWxADy8FCSX71y8qlxNe40y04LO3TBzTdeaQ9oOqd8IqpPZ34J41BO70p4UxtttRR0Z63TKWhKwwxdeKxAY6pgEfHw28Nib%2FfDToGTqPn09debb1qzfJGLlOFJ5dtokn3NkXliJpmbTqtv3kGKWSN0vwdKs%2FUGLTpOp6MLuSuhDxY0sqSrOkPD0CZuuIGewad0ugnGn7HZonqTo1Oh14heWHTeBiKAlaJXNNvc35hjpSxxgQiYC7ig1JCuu2xFCrS0K3S09Jv5amafAFoTsjkmxza7Yg%2FuDCDY1rHccZyTmpgEoPGYso&X-Amz-Signature=e1a115a24d8cf6bc90cfb5df80426e4aea128c9ca9349f245f4627a86497b30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGRS6EW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIF8rIpSzoECC8pIDgxrjiwD64jYY6jewtOJ%2FQZJQ2ZpLAiAcPJ7VuSiVma6w7VFiO8tJ4ifkUFZfZtCaStD6EM7tsCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMFbEO5uiHTcesvdvUKtwDNYYT2jARG6I2zX6mRpG0ordoiZTnAm7SEJmyi%2F6OgtpNiJCaZDhtZCSst7nE6ZRPgWBekpKZt%2F1PpTOH0h4neUjDhOnpI0oMQr%2BvWw7ML%2FfXKIdOZLQo1ftvkORuXUPjaEXjVOCf9zftZb7AGYQWSItDQ27OHkcl3okwDXmCmH0at6L6KrFKVv6gBInwE1mlN82KaPBioY4Zuz0Yb1sgbBCR%2BGxvIPsiS0iOB95ldweWmvIoNCWmynZOnxj4y3oOHsMKUidjhzN6VnodEpw4hBtXhGSoAC2NkgI1evyrHH24tASwgogl9b2aUi5nNQLe9saxj%2FeV3hWjl%2B1kfQ9hpkOzfcR2GjP8fwVXL81zlKIRIqIcixL9t6n7AZCK0ASHRO1RDyL%2BFKdPqXvUXV0GCVNqfYSLaZ1yIb0OvJ%2F%2Bgh5N7whyHMPNh8budvRop%2BZmqk2ZrXj%2FLgQv%2BDF%2B8cPMAQCPJD5ItBASi%2BpUKUSHxchqGweRla5DKAYfMGfeVcWDyWvwX20zUy2nHf%2BwTTUEdQhqcr4D5xXoa81eyvqaYzWf6wb1nWxADy8FCSX71y8qlxNe40y04LO3TBzTdeaQ9oOqd8IqpPZ34J41BO70p4UxtttRR0Z63TKWhKwwxdeKxAY6pgEfHw28Nib%2FfDToGTqPn09debb1qzfJGLlOFJ5dtokn3NkXliJpmbTqtv3kGKWSN0vwdKs%2FUGLTpOp6MLuSuhDxY0sqSrOkPD0CZuuIGewad0ugnGn7HZonqTo1Oh14heWHTeBiKAlaJXNNvc35hjpSxxgQiYC7ig1JCuu2xFCrS0K3S09Jv5amafAFoTsjkmxza7Yg%2FuDCDY1rHccZyTmpgEoPGYso&X-Amz-Signature=381a118fb213472a6c559f025039414cc4d58a5c12aea4b038e46ebd83bda2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGRS6EW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIF8rIpSzoECC8pIDgxrjiwD64jYY6jewtOJ%2FQZJQ2ZpLAiAcPJ7VuSiVma6w7VFiO8tJ4ifkUFZfZtCaStD6EM7tsCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMFbEO5uiHTcesvdvUKtwDNYYT2jARG6I2zX6mRpG0ordoiZTnAm7SEJmyi%2F6OgtpNiJCaZDhtZCSst7nE6ZRPgWBekpKZt%2F1PpTOH0h4neUjDhOnpI0oMQr%2BvWw7ML%2FfXKIdOZLQo1ftvkORuXUPjaEXjVOCf9zftZb7AGYQWSItDQ27OHkcl3okwDXmCmH0at6L6KrFKVv6gBInwE1mlN82KaPBioY4Zuz0Yb1sgbBCR%2BGxvIPsiS0iOB95ldweWmvIoNCWmynZOnxj4y3oOHsMKUidjhzN6VnodEpw4hBtXhGSoAC2NkgI1evyrHH24tASwgogl9b2aUi5nNQLe9saxj%2FeV3hWjl%2B1kfQ9hpkOzfcR2GjP8fwVXL81zlKIRIqIcixL9t6n7AZCK0ASHRO1RDyL%2BFKdPqXvUXV0GCVNqfYSLaZ1yIb0OvJ%2F%2Bgh5N7whyHMPNh8budvRop%2BZmqk2ZrXj%2FLgQv%2BDF%2B8cPMAQCPJD5ItBASi%2BpUKUSHxchqGweRla5DKAYfMGfeVcWDyWvwX20zUy2nHf%2BwTTUEdQhqcr4D5xXoa81eyvqaYzWf6wb1nWxADy8FCSX71y8qlxNe40y04LO3TBzTdeaQ9oOqd8IqpPZ34J41BO70p4UxtttRR0Z63TKWhKwwxdeKxAY6pgEfHw28Nib%2FfDToGTqPn09debb1qzfJGLlOFJ5dtokn3NkXliJpmbTqtv3kGKWSN0vwdKs%2FUGLTpOp6MLuSuhDxY0sqSrOkPD0CZuuIGewad0ugnGn7HZonqTo1Oh14heWHTeBiKAlaJXNNvc35hjpSxxgQiYC7ig1JCuu2xFCrS0K3S09Jv5amafAFoTsjkmxza7Yg%2FuDCDY1rHccZyTmpgEoPGYso&X-Amz-Signature=11204483291408367948b46146aa5cd443a7ccff52da5fb9818c671764ba8a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
