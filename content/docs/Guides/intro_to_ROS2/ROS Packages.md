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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUM6664Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqm3mmSEXGg5SmvQ%2F2PFGtBu8X%2F4UcOCVvBhqsPn3EwgIhAI0kSDA44ieDa1r7x1OPbWsrPrmjgnr3%2Fgg3U3GeNnhYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwExQTxqOuXI51AKLcq3ANvRq%2BNfQKt9KL56pn71oDNpWPnWC1xxfC8Uex5mxv6z6fMZgwXXIR%2FtjVVFVhJP2ptXRV9m7OSj6hzfnD%2B5Mkm4IKflk%2Bdyt8lK5EdsNEq7cbAZb3V9CvGmTDHA2g7F%2Bvlf2p%2B87tOfairGonKOXX%2FajcJcTWSu9sCVEY46pZEaYpzrtvMsYhQmW6EI%2FbuthZiKFexeg5gY%2FkL%2BFt%2FSDZdo7UwBe%2FeyaUhzUkvXhmRcIYxdyUYsgty9%2BYpje4dQiaHLvjUOt5x8mN4uch%2BCXSOi9OfRv%2FA2cX6heCIu8YervBsKZ%2FTBimSaD3wCiTAtgo10w7vbC0V1ta1Ou8K%2B%2FvsLHSiqF5%2FSKR9s1le%2BzroR6B%2B%2FZ9TSKEeMnsD2oMaV9pQ%2F1g6dMTbG8alneVROyBMof3nFI4iTQXol6oPzectdJ%2BSwqRGS7qMKYQuVKhLaeQridxJ%2F38hNBuJJcEqRMc3UNJ8h%2BJ3ribia3cNee3buJhOgs4RQz1stbJ6sxG1ERgZZlERtKP5bkufdkgok%2BLPAMTcmMdm9fpTkHKVPK7voE5u2TQ77tT23ko21n4BZyVEV1RU%2BNypVYhM6Snos3yCjZesOUWQg84vSzezf3KT0U3wqMSSROEuuTuN%2BzDX7PO8BjqkAc0Sd8HHfZj10a02bt4ocnQ3vZCgm74vjqWr4OAgrrnythaCO0JX%2Fkz1BpeHGJGonNUp8uknvo9r25xN%2B30rd9t6npGBFRJ0s239gUpFfsi7BJW%2FDAmbAjMIG6FaOZHOrIIqAUsFhq%2BaxrnCjVHQ0pZiVPOUqBo%2BaKdsmDq5MqeYgdwiEFWbIk6KfJjszA%2FvR%2BQsdmL%2Bztx6oH6AdkqMsCJl0pFp&X-Amz-Signature=2ea6a13baf3c3be9ae98d80b88db2fe0f3f9cbd0dbbf475bec1306b958b926e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUM6664Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqm3mmSEXGg5SmvQ%2F2PFGtBu8X%2F4UcOCVvBhqsPn3EwgIhAI0kSDA44ieDa1r7x1OPbWsrPrmjgnr3%2Fgg3U3GeNnhYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwExQTxqOuXI51AKLcq3ANvRq%2BNfQKt9KL56pn71oDNpWPnWC1xxfC8Uex5mxv6z6fMZgwXXIR%2FtjVVFVhJP2ptXRV9m7OSj6hzfnD%2B5Mkm4IKflk%2Bdyt8lK5EdsNEq7cbAZb3V9CvGmTDHA2g7F%2Bvlf2p%2B87tOfairGonKOXX%2FajcJcTWSu9sCVEY46pZEaYpzrtvMsYhQmW6EI%2FbuthZiKFexeg5gY%2FkL%2BFt%2FSDZdo7UwBe%2FeyaUhzUkvXhmRcIYxdyUYsgty9%2BYpje4dQiaHLvjUOt5x8mN4uch%2BCXSOi9OfRv%2FA2cX6heCIu8YervBsKZ%2FTBimSaD3wCiTAtgo10w7vbC0V1ta1Ou8K%2B%2FvsLHSiqF5%2FSKR9s1le%2BzroR6B%2B%2FZ9TSKEeMnsD2oMaV9pQ%2F1g6dMTbG8alneVROyBMof3nFI4iTQXol6oPzectdJ%2BSwqRGS7qMKYQuVKhLaeQridxJ%2F38hNBuJJcEqRMc3UNJ8h%2BJ3ribia3cNee3buJhOgs4RQz1stbJ6sxG1ERgZZlERtKP5bkufdkgok%2BLPAMTcmMdm9fpTkHKVPK7voE5u2TQ77tT23ko21n4BZyVEV1RU%2BNypVYhM6Snos3yCjZesOUWQg84vSzezf3KT0U3wqMSSROEuuTuN%2BzDX7PO8BjqkAc0Sd8HHfZj10a02bt4ocnQ3vZCgm74vjqWr4OAgrrnythaCO0JX%2Fkz1BpeHGJGonNUp8uknvo9r25xN%2B30rd9t6npGBFRJ0s239gUpFfsi7BJW%2FDAmbAjMIG6FaOZHOrIIqAUsFhq%2BaxrnCjVHQ0pZiVPOUqBo%2BaKdsmDq5MqeYgdwiEFWbIk6KfJjszA%2FvR%2BQsdmL%2Bztx6oH6AdkqMsCJl0pFp&X-Amz-Signature=89e726f78fb9c9364842e98c793cccdd8d09261d9a78b14a96898ca145ec251a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUM6664Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqm3mmSEXGg5SmvQ%2F2PFGtBu8X%2F4UcOCVvBhqsPn3EwgIhAI0kSDA44ieDa1r7x1OPbWsrPrmjgnr3%2Fgg3U3GeNnhYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwExQTxqOuXI51AKLcq3ANvRq%2BNfQKt9KL56pn71oDNpWPnWC1xxfC8Uex5mxv6z6fMZgwXXIR%2FtjVVFVhJP2ptXRV9m7OSj6hzfnD%2B5Mkm4IKflk%2Bdyt8lK5EdsNEq7cbAZb3V9CvGmTDHA2g7F%2Bvlf2p%2B87tOfairGonKOXX%2FajcJcTWSu9sCVEY46pZEaYpzrtvMsYhQmW6EI%2FbuthZiKFexeg5gY%2FkL%2BFt%2FSDZdo7UwBe%2FeyaUhzUkvXhmRcIYxdyUYsgty9%2BYpje4dQiaHLvjUOt5x8mN4uch%2BCXSOi9OfRv%2FA2cX6heCIu8YervBsKZ%2FTBimSaD3wCiTAtgo10w7vbC0V1ta1Ou8K%2B%2FvsLHSiqF5%2FSKR9s1le%2BzroR6B%2B%2FZ9TSKEeMnsD2oMaV9pQ%2F1g6dMTbG8alneVROyBMof3nFI4iTQXol6oPzectdJ%2BSwqRGS7qMKYQuVKhLaeQridxJ%2F38hNBuJJcEqRMc3UNJ8h%2BJ3ribia3cNee3buJhOgs4RQz1stbJ6sxG1ERgZZlERtKP5bkufdkgok%2BLPAMTcmMdm9fpTkHKVPK7voE5u2TQ77tT23ko21n4BZyVEV1RU%2BNypVYhM6Snos3yCjZesOUWQg84vSzezf3KT0U3wqMSSROEuuTuN%2BzDX7PO8BjqkAc0Sd8HHfZj10a02bt4ocnQ3vZCgm74vjqWr4OAgrrnythaCO0JX%2Fkz1BpeHGJGonNUp8uknvo9r25xN%2B30rd9t6npGBFRJ0s239gUpFfsi7BJW%2FDAmbAjMIG6FaOZHOrIIqAUsFhq%2BaxrnCjVHQ0pZiVPOUqBo%2BaKdsmDq5MqeYgdwiEFWbIk6KfJjszA%2FvR%2BQsdmL%2Bztx6oH6AdkqMsCJl0pFp&X-Amz-Signature=97af7b588559d2a62c4011f2f29a1ccd2f4f53c999f5c9432e25bfb43b7e132e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUM6664Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqm3mmSEXGg5SmvQ%2F2PFGtBu8X%2F4UcOCVvBhqsPn3EwgIhAI0kSDA44ieDa1r7x1OPbWsrPrmjgnr3%2Fgg3U3GeNnhYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwExQTxqOuXI51AKLcq3ANvRq%2BNfQKt9KL56pn71oDNpWPnWC1xxfC8Uex5mxv6z6fMZgwXXIR%2FtjVVFVhJP2ptXRV9m7OSj6hzfnD%2B5Mkm4IKflk%2Bdyt8lK5EdsNEq7cbAZb3V9CvGmTDHA2g7F%2Bvlf2p%2B87tOfairGonKOXX%2FajcJcTWSu9sCVEY46pZEaYpzrtvMsYhQmW6EI%2FbuthZiKFexeg5gY%2FkL%2BFt%2FSDZdo7UwBe%2FeyaUhzUkvXhmRcIYxdyUYsgty9%2BYpje4dQiaHLvjUOt5x8mN4uch%2BCXSOi9OfRv%2FA2cX6heCIu8YervBsKZ%2FTBimSaD3wCiTAtgo10w7vbC0V1ta1Ou8K%2B%2FvsLHSiqF5%2FSKR9s1le%2BzroR6B%2B%2FZ9TSKEeMnsD2oMaV9pQ%2F1g6dMTbG8alneVROyBMof3nFI4iTQXol6oPzectdJ%2BSwqRGS7qMKYQuVKhLaeQridxJ%2F38hNBuJJcEqRMc3UNJ8h%2BJ3ribia3cNee3buJhOgs4RQz1stbJ6sxG1ERgZZlERtKP5bkufdkgok%2BLPAMTcmMdm9fpTkHKVPK7voE5u2TQ77tT23ko21n4BZyVEV1RU%2BNypVYhM6Snos3yCjZesOUWQg84vSzezf3KT0U3wqMSSROEuuTuN%2BzDX7PO8BjqkAc0Sd8HHfZj10a02bt4ocnQ3vZCgm74vjqWr4OAgrrnythaCO0JX%2Fkz1BpeHGJGonNUp8uknvo9r25xN%2B30rd9t6npGBFRJ0s239gUpFfsi7BJW%2FDAmbAjMIG6FaOZHOrIIqAUsFhq%2BaxrnCjVHQ0pZiVPOUqBo%2BaKdsmDq5MqeYgdwiEFWbIk6KfJjszA%2FvR%2BQsdmL%2Bztx6oH6AdkqMsCJl0pFp&X-Amz-Signature=d599f411fec2a2688032a8d2423a7279c6b39fb294314eb49c87a342687f65ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUM6664Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqm3mmSEXGg5SmvQ%2F2PFGtBu8X%2F4UcOCVvBhqsPn3EwgIhAI0kSDA44ieDa1r7x1OPbWsrPrmjgnr3%2Fgg3U3GeNnhYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwExQTxqOuXI51AKLcq3ANvRq%2BNfQKt9KL56pn71oDNpWPnWC1xxfC8Uex5mxv6z6fMZgwXXIR%2FtjVVFVhJP2ptXRV9m7OSj6hzfnD%2B5Mkm4IKflk%2Bdyt8lK5EdsNEq7cbAZb3V9CvGmTDHA2g7F%2Bvlf2p%2B87tOfairGonKOXX%2FajcJcTWSu9sCVEY46pZEaYpzrtvMsYhQmW6EI%2FbuthZiKFexeg5gY%2FkL%2BFt%2FSDZdo7UwBe%2FeyaUhzUkvXhmRcIYxdyUYsgty9%2BYpje4dQiaHLvjUOt5x8mN4uch%2BCXSOi9OfRv%2FA2cX6heCIu8YervBsKZ%2FTBimSaD3wCiTAtgo10w7vbC0V1ta1Ou8K%2B%2FvsLHSiqF5%2FSKR9s1le%2BzroR6B%2B%2FZ9TSKEeMnsD2oMaV9pQ%2F1g6dMTbG8alneVROyBMof3nFI4iTQXol6oPzectdJ%2BSwqRGS7qMKYQuVKhLaeQridxJ%2F38hNBuJJcEqRMc3UNJ8h%2BJ3ribia3cNee3buJhOgs4RQz1stbJ6sxG1ERgZZlERtKP5bkufdkgok%2BLPAMTcmMdm9fpTkHKVPK7voE5u2TQ77tT23ko21n4BZyVEV1RU%2BNypVYhM6Snos3yCjZesOUWQg84vSzezf3KT0U3wqMSSROEuuTuN%2BzDX7PO8BjqkAc0Sd8HHfZj10a02bt4ocnQ3vZCgm74vjqWr4OAgrrnythaCO0JX%2Fkz1BpeHGJGonNUp8uknvo9r25xN%2B30rd9t6npGBFRJ0s239gUpFfsi7BJW%2FDAmbAjMIG6FaOZHOrIIqAUsFhq%2BaxrnCjVHQ0pZiVPOUqBo%2BaKdsmDq5MqeYgdwiEFWbIk6KfJjszA%2FvR%2BQsdmL%2Bztx6oH6AdkqMsCJl0pFp&X-Amz-Signature=baf35a372dc5e9f205be7e031ad55bd8eb4cdda7be89c8a8e8e0b96290c63629&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUM6664Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqm3mmSEXGg5SmvQ%2F2PFGtBu8X%2F4UcOCVvBhqsPn3EwgIhAI0kSDA44ieDa1r7x1OPbWsrPrmjgnr3%2Fgg3U3GeNnhYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwExQTxqOuXI51AKLcq3ANvRq%2BNfQKt9KL56pn71oDNpWPnWC1xxfC8Uex5mxv6z6fMZgwXXIR%2FtjVVFVhJP2ptXRV9m7OSj6hzfnD%2B5Mkm4IKflk%2Bdyt8lK5EdsNEq7cbAZb3V9CvGmTDHA2g7F%2Bvlf2p%2B87tOfairGonKOXX%2FajcJcTWSu9sCVEY46pZEaYpzrtvMsYhQmW6EI%2FbuthZiKFexeg5gY%2FkL%2BFt%2FSDZdo7UwBe%2FeyaUhzUkvXhmRcIYxdyUYsgty9%2BYpje4dQiaHLvjUOt5x8mN4uch%2BCXSOi9OfRv%2FA2cX6heCIu8YervBsKZ%2FTBimSaD3wCiTAtgo10w7vbC0V1ta1Ou8K%2B%2FvsLHSiqF5%2FSKR9s1le%2BzroR6B%2B%2FZ9TSKEeMnsD2oMaV9pQ%2F1g6dMTbG8alneVROyBMof3nFI4iTQXol6oPzectdJ%2BSwqRGS7qMKYQuVKhLaeQridxJ%2F38hNBuJJcEqRMc3UNJ8h%2BJ3ribia3cNee3buJhOgs4RQz1stbJ6sxG1ERgZZlERtKP5bkufdkgok%2BLPAMTcmMdm9fpTkHKVPK7voE5u2TQ77tT23ko21n4BZyVEV1RU%2BNypVYhM6Snos3yCjZesOUWQg84vSzezf3KT0U3wqMSSROEuuTuN%2BzDX7PO8BjqkAc0Sd8HHfZj10a02bt4ocnQ3vZCgm74vjqWr4OAgrrnythaCO0JX%2Fkz1BpeHGJGonNUp8uknvo9r25xN%2B30rd9t6npGBFRJ0s239gUpFfsi7BJW%2FDAmbAjMIG6FaOZHOrIIqAUsFhq%2BaxrnCjVHQ0pZiVPOUqBo%2BaKdsmDq5MqeYgdwiEFWbIk6KfJjszA%2FvR%2BQsdmL%2Bztx6oH6AdkqMsCJl0pFp&X-Amz-Signature=1c1f4feeaf1e96c3f016afaa7a3568ca61ec9896979b48c4035a0bb21ec02e54&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUM6664Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqm3mmSEXGg5SmvQ%2F2PFGtBu8X%2F4UcOCVvBhqsPn3EwgIhAI0kSDA44ieDa1r7x1OPbWsrPrmjgnr3%2Fgg3U3GeNnhYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwExQTxqOuXI51AKLcq3ANvRq%2BNfQKt9KL56pn71oDNpWPnWC1xxfC8Uex5mxv6z6fMZgwXXIR%2FtjVVFVhJP2ptXRV9m7OSj6hzfnD%2B5Mkm4IKflk%2Bdyt8lK5EdsNEq7cbAZb3V9CvGmTDHA2g7F%2Bvlf2p%2B87tOfairGonKOXX%2FajcJcTWSu9sCVEY46pZEaYpzrtvMsYhQmW6EI%2FbuthZiKFexeg5gY%2FkL%2BFt%2FSDZdo7UwBe%2FeyaUhzUkvXhmRcIYxdyUYsgty9%2BYpje4dQiaHLvjUOt5x8mN4uch%2BCXSOi9OfRv%2FA2cX6heCIu8YervBsKZ%2FTBimSaD3wCiTAtgo10w7vbC0V1ta1Ou8K%2B%2FvsLHSiqF5%2FSKR9s1le%2BzroR6B%2B%2FZ9TSKEeMnsD2oMaV9pQ%2F1g6dMTbG8alneVROyBMof3nFI4iTQXol6oPzectdJ%2BSwqRGS7qMKYQuVKhLaeQridxJ%2F38hNBuJJcEqRMc3UNJ8h%2BJ3ribia3cNee3buJhOgs4RQz1stbJ6sxG1ERgZZlERtKP5bkufdkgok%2BLPAMTcmMdm9fpTkHKVPK7voE5u2TQ77tT23ko21n4BZyVEV1RU%2BNypVYhM6Snos3yCjZesOUWQg84vSzezf3KT0U3wqMSSROEuuTuN%2BzDX7PO8BjqkAc0Sd8HHfZj10a02bt4ocnQ3vZCgm74vjqWr4OAgrrnythaCO0JX%2Fkz1BpeHGJGonNUp8uknvo9r25xN%2B30rd9t6npGBFRJ0s239gUpFfsi7BJW%2FDAmbAjMIG6FaOZHOrIIqAUsFhq%2BaxrnCjVHQ0pZiVPOUqBo%2BaKdsmDq5MqeYgdwiEFWbIk6KfJjszA%2FvR%2BQsdmL%2Bztx6oH6AdkqMsCJl0pFp&X-Amz-Signature=81def39aceea4d3ec2bb489a5c792ac9f580b513909a46eaf07851d31ce42f20&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
