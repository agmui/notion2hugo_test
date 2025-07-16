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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWVXY33%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCrsg0EjOBbZx8cRpxWMyKNdQvLzfXNkdTVgYl1MbQ%2BkQIgClA5Lr0M4ThIuf0OCdOIORpRO9xsX4UxiEoIH3lKw6wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHSIUHHTVtaFCiVqoircAx1al1VhfrZlz1DR2%2B3y3ClH8lGP0obZjOptEK%2BCkDPJOUWn3eF8Ie00B3Kb4n4qIHZWIV41DFnFz9em7NgDhlhMSlJUemuCJMZdo5pm5QQ%2B48hiapz0qxZwQvmcNQ%2FLadS27Mq4T2b6Da8rU6i6Mw%2F0KHpC7hESVOsFWGJLo2ub7dHzIoxiG98aHNBYrnwMVYU%2FlTrLac5Pheln1EfVfoMJWqwGga%2BgMPubwgypVA4QiZxnQN1Ta6H%2B%2FE13tkLn5CqnLonc4wxstiWl1WUyw783WdBDDxGBJor3BlgHjxSTfzMxdby9HikuYY60846PLZLhJSXvtwxkwBwVw0EtVvLWRx%2FgVv8XoQ%2F9mpk9R%2FTIrCbS96%2F%2F2CqRDI4VKnPp2aMYILkaFMploczEItc%2F8TPzC5fLgx8c2%2BUhi%2F3qGvUet6ry2MCai6MIhUMVgxl5lM0315FlexvF8XD%2FbDRhdQNJ9AjDpE53fMtgkUhiz89WRC9alreu54yrQAHx%2F0AG4QH3TvQ36FhRYnWKQEE6cHBI2cYy0eAxLXQZoKRNOqlvhSrhXBTSPo1yS%2BbO9HufF3BoiMv4WHPcxNymsU4le%2BMay438uO248G7S4lcXiNHC299nfq2g6TNaK%2FmVMP2S3sMGOqUBZq8OlopwXjYWccPIcFHNNMSMhUf3MMemRtmotl1NlJ5IX28JaRKJX7%2ByERkH1TDp7GkIcDLgkAD5ELhI2C5zHwT%2BA4qFtTS6AfRgkN%2BMiSRHLhKRPkhagsNfciCJa6jYLVY08ROnLp2mwyF3f1FApUEh8PplPDbr%2FH41g14rXP4O1fo2cg8qFz2fZtkc9F5zR5YUOZj9q7OwhYyJcimCkiR%2B95v%2F&X-Amz-Signature=323d6cce8bf31ab2f84dfc5db2aaeec9858c37124d1d9b93ce95bd565310e2f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWVXY33%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCrsg0EjOBbZx8cRpxWMyKNdQvLzfXNkdTVgYl1MbQ%2BkQIgClA5Lr0M4ThIuf0OCdOIORpRO9xsX4UxiEoIH3lKw6wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHSIUHHTVtaFCiVqoircAx1al1VhfrZlz1DR2%2B3y3ClH8lGP0obZjOptEK%2BCkDPJOUWn3eF8Ie00B3Kb4n4qIHZWIV41DFnFz9em7NgDhlhMSlJUemuCJMZdo5pm5QQ%2B48hiapz0qxZwQvmcNQ%2FLadS27Mq4T2b6Da8rU6i6Mw%2F0KHpC7hESVOsFWGJLo2ub7dHzIoxiG98aHNBYrnwMVYU%2FlTrLac5Pheln1EfVfoMJWqwGga%2BgMPubwgypVA4QiZxnQN1Ta6H%2B%2FE13tkLn5CqnLonc4wxstiWl1WUyw783WdBDDxGBJor3BlgHjxSTfzMxdby9HikuYY60846PLZLhJSXvtwxkwBwVw0EtVvLWRx%2FgVv8XoQ%2F9mpk9R%2FTIrCbS96%2F%2F2CqRDI4VKnPp2aMYILkaFMploczEItc%2F8TPzC5fLgx8c2%2BUhi%2F3qGvUet6ry2MCai6MIhUMVgxl5lM0315FlexvF8XD%2FbDRhdQNJ9AjDpE53fMtgkUhiz89WRC9alreu54yrQAHx%2F0AG4QH3TvQ36FhRYnWKQEE6cHBI2cYy0eAxLXQZoKRNOqlvhSrhXBTSPo1yS%2BbO9HufF3BoiMv4WHPcxNymsU4le%2BMay438uO248G7S4lcXiNHC299nfq2g6TNaK%2FmVMP2S3sMGOqUBZq8OlopwXjYWccPIcFHNNMSMhUf3MMemRtmotl1NlJ5IX28JaRKJX7%2ByERkH1TDp7GkIcDLgkAD5ELhI2C5zHwT%2BA4qFtTS6AfRgkN%2BMiSRHLhKRPkhagsNfciCJa6jYLVY08ROnLp2mwyF3f1FApUEh8PplPDbr%2FH41g14rXP4O1fo2cg8qFz2fZtkc9F5zR5YUOZj9q7OwhYyJcimCkiR%2B95v%2F&X-Amz-Signature=27e3cd6fa3cc29ba54466909c67b85d3041a21baa4a3396d1ac15bfdb8140d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWVXY33%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCrsg0EjOBbZx8cRpxWMyKNdQvLzfXNkdTVgYl1MbQ%2BkQIgClA5Lr0M4ThIuf0OCdOIORpRO9xsX4UxiEoIH3lKw6wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHSIUHHTVtaFCiVqoircAx1al1VhfrZlz1DR2%2B3y3ClH8lGP0obZjOptEK%2BCkDPJOUWn3eF8Ie00B3Kb4n4qIHZWIV41DFnFz9em7NgDhlhMSlJUemuCJMZdo5pm5QQ%2B48hiapz0qxZwQvmcNQ%2FLadS27Mq4T2b6Da8rU6i6Mw%2F0KHpC7hESVOsFWGJLo2ub7dHzIoxiG98aHNBYrnwMVYU%2FlTrLac5Pheln1EfVfoMJWqwGga%2BgMPubwgypVA4QiZxnQN1Ta6H%2B%2FE13tkLn5CqnLonc4wxstiWl1WUyw783WdBDDxGBJor3BlgHjxSTfzMxdby9HikuYY60846PLZLhJSXvtwxkwBwVw0EtVvLWRx%2FgVv8XoQ%2F9mpk9R%2FTIrCbS96%2F%2F2CqRDI4VKnPp2aMYILkaFMploczEItc%2F8TPzC5fLgx8c2%2BUhi%2F3qGvUet6ry2MCai6MIhUMVgxl5lM0315FlexvF8XD%2FbDRhdQNJ9AjDpE53fMtgkUhiz89WRC9alreu54yrQAHx%2F0AG4QH3TvQ36FhRYnWKQEE6cHBI2cYy0eAxLXQZoKRNOqlvhSrhXBTSPo1yS%2BbO9HufF3BoiMv4WHPcxNymsU4le%2BMay438uO248G7S4lcXiNHC299nfq2g6TNaK%2FmVMP2S3sMGOqUBZq8OlopwXjYWccPIcFHNNMSMhUf3MMemRtmotl1NlJ5IX28JaRKJX7%2ByERkH1TDp7GkIcDLgkAD5ELhI2C5zHwT%2BA4qFtTS6AfRgkN%2BMiSRHLhKRPkhagsNfciCJa6jYLVY08ROnLp2mwyF3f1FApUEh8PplPDbr%2FH41g14rXP4O1fo2cg8qFz2fZtkc9F5zR5YUOZj9q7OwhYyJcimCkiR%2B95v%2F&X-Amz-Signature=5162006b8226eb9b308e747b82f89ea68d63bede925dd5060ca2a64cb4ccd8ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWVXY33%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCrsg0EjOBbZx8cRpxWMyKNdQvLzfXNkdTVgYl1MbQ%2BkQIgClA5Lr0M4ThIuf0OCdOIORpRO9xsX4UxiEoIH3lKw6wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHSIUHHTVtaFCiVqoircAx1al1VhfrZlz1DR2%2B3y3ClH8lGP0obZjOptEK%2BCkDPJOUWn3eF8Ie00B3Kb4n4qIHZWIV41DFnFz9em7NgDhlhMSlJUemuCJMZdo5pm5QQ%2B48hiapz0qxZwQvmcNQ%2FLadS27Mq4T2b6Da8rU6i6Mw%2F0KHpC7hESVOsFWGJLo2ub7dHzIoxiG98aHNBYrnwMVYU%2FlTrLac5Pheln1EfVfoMJWqwGga%2BgMPubwgypVA4QiZxnQN1Ta6H%2B%2FE13tkLn5CqnLonc4wxstiWl1WUyw783WdBDDxGBJor3BlgHjxSTfzMxdby9HikuYY60846PLZLhJSXvtwxkwBwVw0EtVvLWRx%2FgVv8XoQ%2F9mpk9R%2FTIrCbS96%2F%2F2CqRDI4VKnPp2aMYILkaFMploczEItc%2F8TPzC5fLgx8c2%2BUhi%2F3qGvUet6ry2MCai6MIhUMVgxl5lM0315FlexvF8XD%2FbDRhdQNJ9AjDpE53fMtgkUhiz89WRC9alreu54yrQAHx%2F0AG4QH3TvQ36FhRYnWKQEE6cHBI2cYy0eAxLXQZoKRNOqlvhSrhXBTSPo1yS%2BbO9HufF3BoiMv4WHPcxNymsU4le%2BMay438uO248G7S4lcXiNHC299nfq2g6TNaK%2FmVMP2S3sMGOqUBZq8OlopwXjYWccPIcFHNNMSMhUf3MMemRtmotl1NlJ5IX28JaRKJX7%2ByERkH1TDp7GkIcDLgkAD5ELhI2C5zHwT%2BA4qFtTS6AfRgkN%2BMiSRHLhKRPkhagsNfciCJa6jYLVY08ROnLp2mwyF3f1FApUEh8PplPDbr%2FH41g14rXP4O1fo2cg8qFz2fZtkc9F5zR5YUOZj9q7OwhYyJcimCkiR%2B95v%2F&X-Amz-Signature=35d2c03546a74093a220f425e64764356c9f6b6f4a30f5bcfa96f41b056c44cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWVXY33%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCrsg0EjOBbZx8cRpxWMyKNdQvLzfXNkdTVgYl1MbQ%2BkQIgClA5Lr0M4ThIuf0OCdOIORpRO9xsX4UxiEoIH3lKw6wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHSIUHHTVtaFCiVqoircAx1al1VhfrZlz1DR2%2B3y3ClH8lGP0obZjOptEK%2BCkDPJOUWn3eF8Ie00B3Kb4n4qIHZWIV41DFnFz9em7NgDhlhMSlJUemuCJMZdo5pm5QQ%2B48hiapz0qxZwQvmcNQ%2FLadS27Mq4T2b6Da8rU6i6Mw%2F0KHpC7hESVOsFWGJLo2ub7dHzIoxiG98aHNBYrnwMVYU%2FlTrLac5Pheln1EfVfoMJWqwGga%2BgMPubwgypVA4QiZxnQN1Ta6H%2B%2FE13tkLn5CqnLonc4wxstiWl1WUyw783WdBDDxGBJor3BlgHjxSTfzMxdby9HikuYY60846PLZLhJSXvtwxkwBwVw0EtVvLWRx%2FgVv8XoQ%2F9mpk9R%2FTIrCbS96%2F%2F2CqRDI4VKnPp2aMYILkaFMploczEItc%2F8TPzC5fLgx8c2%2BUhi%2F3qGvUet6ry2MCai6MIhUMVgxl5lM0315FlexvF8XD%2FbDRhdQNJ9AjDpE53fMtgkUhiz89WRC9alreu54yrQAHx%2F0AG4QH3TvQ36FhRYnWKQEE6cHBI2cYy0eAxLXQZoKRNOqlvhSrhXBTSPo1yS%2BbO9HufF3BoiMv4WHPcxNymsU4le%2BMay438uO248G7S4lcXiNHC299nfq2g6TNaK%2FmVMP2S3sMGOqUBZq8OlopwXjYWccPIcFHNNMSMhUf3MMemRtmotl1NlJ5IX28JaRKJX7%2ByERkH1TDp7GkIcDLgkAD5ELhI2C5zHwT%2BA4qFtTS6AfRgkN%2BMiSRHLhKRPkhagsNfciCJa6jYLVY08ROnLp2mwyF3f1FApUEh8PplPDbr%2FH41g14rXP4O1fo2cg8qFz2fZtkc9F5zR5YUOZj9q7OwhYyJcimCkiR%2B95v%2F&X-Amz-Signature=3be8486551d763da9d25b62f29974601b960c5fba8a05274e0156e18679a77a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWVXY33%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCrsg0EjOBbZx8cRpxWMyKNdQvLzfXNkdTVgYl1MbQ%2BkQIgClA5Lr0M4ThIuf0OCdOIORpRO9xsX4UxiEoIH3lKw6wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHSIUHHTVtaFCiVqoircAx1al1VhfrZlz1DR2%2B3y3ClH8lGP0obZjOptEK%2BCkDPJOUWn3eF8Ie00B3Kb4n4qIHZWIV41DFnFz9em7NgDhlhMSlJUemuCJMZdo5pm5QQ%2B48hiapz0qxZwQvmcNQ%2FLadS27Mq4T2b6Da8rU6i6Mw%2F0KHpC7hESVOsFWGJLo2ub7dHzIoxiG98aHNBYrnwMVYU%2FlTrLac5Pheln1EfVfoMJWqwGga%2BgMPubwgypVA4QiZxnQN1Ta6H%2B%2FE13tkLn5CqnLonc4wxstiWl1WUyw783WdBDDxGBJor3BlgHjxSTfzMxdby9HikuYY60846PLZLhJSXvtwxkwBwVw0EtVvLWRx%2FgVv8XoQ%2F9mpk9R%2FTIrCbS96%2F%2F2CqRDI4VKnPp2aMYILkaFMploczEItc%2F8TPzC5fLgx8c2%2BUhi%2F3qGvUet6ry2MCai6MIhUMVgxl5lM0315FlexvF8XD%2FbDRhdQNJ9AjDpE53fMtgkUhiz89WRC9alreu54yrQAHx%2F0AG4QH3TvQ36FhRYnWKQEE6cHBI2cYy0eAxLXQZoKRNOqlvhSrhXBTSPo1yS%2BbO9HufF3BoiMv4WHPcxNymsU4le%2BMay438uO248G7S4lcXiNHC299nfq2g6TNaK%2FmVMP2S3sMGOqUBZq8OlopwXjYWccPIcFHNNMSMhUf3MMemRtmotl1NlJ5IX28JaRKJX7%2ByERkH1TDp7GkIcDLgkAD5ELhI2C5zHwT%2BA4qFtTS6AfRgkN%2BMiSRHLhKRPkhagsNfciCJa6jYLVY08ROnLp2mwyF3f1FApUEh8PplPDbr%2FH41g14rXP4O1fo2cg8qFz2fZtkc9F5zR5YUOZj9q7OwhYyJcimCkiR%2B95v%2F&X-Amz-Signature=f9e7c5ce98b4cdf46b9467691c3736f05818b707a77dcc9ed69abb5ba8f497fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWVXY33%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCrsg0EjOBbZx8cRpxWMyKNdQvLzfXNkdTVgYl1MbQ%2BkQIgClA5Lr0M4ThIuf0OCdOIORpRO9xsX4UxiEoIH3lKw6wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHSIUHHTVtaFCiVqoircAx1al1VhfrZlz1DR2%2B3y3ClH8lGP0obZjOptEK%2BCkDPJOUWn3eF8Ie00B3Kb4n4qIHZWIV41DFnFz9em7NgDhlhMSlJUemuCJMZdo5pm5QQ%2B48hiapz0qxZwQvmcNQ%2FLadS27Mq4T2b6Da8rU6i6Mw%2F0KHpC7hESVOsFWGJLo2ub7dHzIoxiG98aHNBYrnwMVYU%2FlTrLac5Pheln1EfVfoMJWqwGga%2BgMPubwgypVA4QiZxnQN1Ta6H%2B%2FE13tkLn5CqnLonc4wxstiWl1WUyw783WdBDDxGBJor3BlgHjxSTfzMxdby9HikuYY60846PLZLhJSXvtwxkwBwVw0EtVvLWRx%2FgVv8XoQ%2F9mpk9R%2FTIrCbS96%2F%2F2CqRDI4VKnPp2aMYILkaFMploczEItc%2F8TPzC5fLgx8c2%2BUhi%2F3qGvUet6ry2MCai6MIhUMVgxl5lM0315FlexvF8XD%2FbDRhdQNJ9AjDpE53fMtgkUhiz89WRC9alreu54yrQAHx%2F0AG4QH3TvQ36FhRYnWKQEE6cHBI2cYy0eAxLXQZoKRNOqlvhSrhXBTSPo1yS%2BbO9HufF3BoiMv4WHPcxNymsU4le%2BMay438uO248G7S4lcXiNHC299nfq2g6TNaK%2FmVMP2S3sMGOqUBZq8OlopwXjYWccPIcFHNNMSMhUf3MMemRtmotl1NlJ5IX28JaRKJX7%2ByERkH1TDp7GkIcDLgkAD5ELhI2C5zHwT%2BA4qFtTS6AfRgkN%2BMiSRHLhKRPkhagsNfciCJa6jYLVY08ROnLp2mwyF3f1FApUEh8PplPDbr%2FH41g14rXP4O1fo2cg8qFz2fZtkc9F5zR5YUOZj9q7OwhYyJcimCkiR%2B95v%2F&X-Amz-Signature=b13a965f81bfc9e68cc7028c37bd71a912abee051bfe0d0bc13187c3227992b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
