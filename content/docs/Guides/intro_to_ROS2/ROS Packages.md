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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCAF5MQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGjaZmHA1f9EnhWNh3PNDNF%2FeoI8EEbME%2B4kSR7iJsxMAiAIb1RDqX4SX3WCYhdQtvBVCPznHo%2BdHCN%2Fjcuklz8PqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxL%2BPPBC%2BMqKmTAckKtwDjj1Lt3Gs1Pc%2FExOwaSoLcpduQYK74OhfXExWbBF5RJyJHsJTA4zv7s%2FmTIWP3sSBYNRbSIwWutzFqLBhPAq1BjqWdz%2Be3xFmACjhamXFvGUQW0V16QTTLwdrR7KJ%2BxCEJcXf%2FZhBX64nmeqpsb1vn4cFCa6cStZGfHholHFX9DwnA0TS6ljxImZcC0mdfxgMI5hmSj47r%2FTho3OE96eY3yHFzbTnsjc9Ktb%2FEg53SoN2zF3wo9A1nAeDD5y1Tsta1weWAwl1qQ%2FBVHMZP7%2BLhhfDOfRsH%2F%2ByLd4emBqMt%2BqhjAWePjWKEC0LVaCI7oCk2wyf72Pqvvm5fYI8ZUoPi7KnYruHoq%2BfAvbLiaIYgQ7TAqdsRUV41sq0ThP280PgbmUJO0Nkcdr033h2ReqZJeMLqAREpSpNi5dmsQCbkPBH%2BzAu8NTQCtCYU4ZvoOmD1X8eolCTSB0efrByuTlcYpRfbMa0etpOBSvW6ipX0RGkfWlJ5s0vrX9a2YF1tpVFHKDJhLXHoF3Dv%2FsNJAyAuOPUnZEfNM9o1Hs%2BOFhgB5cAuqSE68d21VtjOR4fBEU0%2B%2Bxc9v0OXdwdhlNUp3Jco59qyyvchwqyfl4JmqNkRpvC2%2B1tfUTkiHMYnI0wv%2FeKwQY6pgHoCgO2o13ATpCw0Q%2ByN5Lt5luuww0TorjHgDkrZ27CS2o6OH8ju%2F6Ms832AQBPGvdc0e2dyKpAXmgTsxjpRDDbFgHHwsuOynp3pWdyg3MbRW7F5KmfPFFpwBhzQoVhVjgibUAvVIawIcXxsRhEMseuW3vKdnnoOa9yZfsW0%2FERxSg%2FsqA27x1ikZf6UfgWpwdARsDNnW79wY4ExnL7h4edK1kbirwa&X-Amz-Signature=dfe7ffe674c2215819d137c401e33f335891c7cf7a17d083255e3b845204fe89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCAF5MQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGjaZmHA1f9EnhWNh3PNDNF%2FeoI8EEbME%2B4kSR7iJsxMAiAIb1RDqX4SX3WCYhdQtvBVCPznHo%2BdHCN%2Fjcuklz8PqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxL%2BPPBC%2BMqKmTAckKtwDjj1Lt3Gs1Pc%2FExOwaSoLcpduQYK74OhfXExWbBF5RJyJHsJTA4zv7s%2FmTIWP3sSBYNRbSIwWutzFqLBhPAq1BjqWdz%2Be3xFmACjhamXFvGUQW0V16QTTLwdrR7KJ%2BxCEJcXf%2FZhBX64nmeqpsb1vn4cFCa6cStZGfHholHFX9DwnA0TS6ljxImZcC0mdfxgMI5hmSj47r%2FTho3OE96eY3yHFzbTnsjc9Ktb%2FEg53SoN2zF3wo9A1nAeDD5y1Tsta1weWAwl1qQ%2FBVHMZP7%2BLhhfDOfRsH%2F%2ByLd4emBqMt%2BqhjAWePjWKEC0LVaCI7oCk2wyf72Pqvvm5fYI8ZUoPi7KnYruHoq%2BfAvbLiaIYgQ7TAqdsRUV41sq0ThP280PgbmUJO0Nkcdr033h2ReqZJeMLqAREpSpNi5dmsQCbkPBH%2BzAu8NTQCtCYU4ZvoOmD1X8eolCTSB0efrByuTlcYpRfbMa0etpOBSvW6ipX0RGkfWlJ5s0vrX9a2YF1tpVFHKDJhLXHoF3Dv%2FsNJAyAuOPUnZEfNM9o1Hs%2BOFhgB5cAuqSE68d21VtjOR4fBEU0%2B%2Bxc9v0OXdwdhlNUp3Jco59qyyvchwqyfl4JmqNkRpvC2%2B1tfUTkiHMYnI0wv%2FeKwQY6pgHoCgO2o13ATpCw0Q%2ByN5Lt5luuww0TorjHgDkrZ27CS2o6OH8ju%2F6Ms832AQBPGvdc0e2dyKpAXmgTsxjpRDDbFgHHwsuOynp3pWdyg3MbRW7F5KmfPFFpwBhzQoVhVjgibUAvVIawIcXxsRhEMseuW3vKdnnoOa9yZfsW0%2FERxSg%2FsqA27x1ikZf6UfgWpwdARsDNnW79wY4ExnL7h4edK1kbirwa&X-Amz-Signature=efb20da6fbeb27d201b90f30c1259bc53ff5a092b4f74c0eb058138850c9944b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCAF5MQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGjaZmHA1f9EnhWNh3PNDNF%2FeoI8EEbME%2B4kSR7iJsxMAiAIb1RDqX4SX3WCYhdQtvBVCPznHo%2BdHCN%2Fjcuklz8PqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxL%2BPPBC%2BMqKmTAckKtwDjj1Lt3Gs1Pc%2FExOwaSoLcpduQYK74OhfXExWbBF5RJyJHsJTA4zv7s%2FmTIWP3sSBYNRbSIwWutzFqLBhPAq1BjqWdz%2Be3xFmACjhamXFvGUQW0V16QTTLwdrR7KJ%2BxCEJcXf%2FZhBX64nmeqpsb1vn4cFCa6cStZGfHholHFX9DwnA0TS6ljxImZcC0mdfxgMI5hmSj47r%2FTho3OE96eY3yHFzbTnsjc9Ktb%2FEg53SoN2zF3wo9A1nAeDD5y1Tsta1weWAwl1qQ%2FBVHMZP7%2BLhhfDOfRsH%2F%2ByLd4emBqMt%2BqhjAWePjWKEC0LVaCI7oCk2wyf72Pqvvm5fYI8ZUoPi7KnYruHoq%2BfAvbLiaIYgQ7TAqdsRUV41sq0ThP280PgbmUJO0Nkcdr033h2ReqZJeMLqAREpSpNi5dmsQCbkPBH%2BzAu8NTQCtCYU4ZvoOmD1X8eolCTSB0efrByuTlcYpRfbMa0etpOBSvW6ipX0RGkfWlJ5s0vrX9a2YF1tpVFHKDJhLXHoF3Dv%2FsNJAyAuOPUnZEfNM9o1Hs%2BOFhgB5cAuqSE68d21VtjOR4fBEU0%2B%2Bxc9v0OXdwdhlNUp3Jco59qyyvchwqyfl4JmqNkRpvC2%2B1tfUTkiHMYnI0wv%2FeKwQY6pgHoCgO2o13ATpCw0Q%2ByN5Lt5luuww0TorjHgDkrZ27CS2o6OH8ju%2F6Ms832AQBPGvdc0e2dyKpAXmgTsxjpRDDbFgHHwsuOynp3pWdyg3MbRW7F5KmfPFFpwBhzQoVhVjgibUAvVIawIcXxsRhEMseuW3vKdnnoOa9yZfsW0%2FERxSg%2FsqA27x1ikZf6UfgWpwdARsDNnW79wY4ExnL7h4edK1kbirwa&X-Amz-Signature=f2a7e472d02d3ce0e1ee19b94acef9a96e5927fe384d002b704964686c823f56&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCAF5MQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGjaZmHA1f9EnhWNh3PNDNF%2FeoI8EEbME%2B4kSR7iJsxMAiAIb1RDqX4SX3WCYhdQtvBVCPznHo%2BdHCN%2Fjcuklz8PqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxL%2BPPBC%2BMqKmTAckKtwDjj1Lt3Gs1Pc%2FExOwaSoLcpduQYK74OhfXExWbBF5RJyJHsJTA4zv7s%2FmTIWP3sSBYNRbSIwWutzFqLBhPAq1BjqWdz%2Be3xFmACjhamXFvGUQW0V16QTTLwdrR7KJ%2BxCEJcXf%2FZhBX64nmeqpsb1vn4cFCa6cStZGfHholHFX9DwnA0TS6ljxImZcC0mdfxgMI5hmSj47r%2FTho3OE96eY3yHFzbTnsjc9Ktb%2FEg53SoN2zF3wo9A1nAeDD5y1Tsta1weWAwl1qQ%2FBVHMZP7%2BLhhfDOfRsH%2F%2ByLd4emBqMt%2BqhjAWePjWKEC0LVaCI7oCk2wyf72Pqvvm5fYI8ZUoPi7KnYruHoq%2BfAvbLiaIYgQ7TAqdsRUV41sq0ThP280PgbmUJO0Nkcdr033h2ReqZJeMLqAREpSpNi5dmsQCbkPBH%2BzAu8NTQCtCYU4ZvoOmD1X8eolCTSB0efrByuTlcYpRfbMa0etpOBSvW6ipX0RGkfWlJ5s0vrX9a2YF1tpVFHKDJhLXHoF3Dv%2FsNJAyAuOPUnZEfNM9o1Hs%2BOFhgB5cAuqSE68d21VtjOR4fBEU0%2B%2Bxc9v0OXdwdhlNUp3Jco59qyyvchwqyfl4JmqNkRpvC2%2B1tfUTkiHMYnI0wv%2FeKwQY6pgHoCgO2o13ATpCw0Q%2ByN5Lt5luuww0TorjHgDkrZ27CS2o6OH8ju%2F6Ms832AQBPGvdc0e2dyKpAXmgTsxjpRDDbFgHHwsuOynp3pWdyg3MbRW7F5KmfPFFpwBhzQoVhVjgibUAvVIawIcXxsRhEMseuW3vKdnnoOa9yZfsW0%2FERxSg%2FsqA27x1ikZf6UfgWpwdARsDNnW79wY4ExnL7h4edK1kbirwa&X-Amz-Signature=e5112f08ea4a0fb5689acc4f8eba46c8e60ea8883da64cb15bf0ea0d30e71780&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCAF5MQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGjaZmHA1f9EnhWNh3PNDNF%2FeoI8EEbME%2B4kSR7iJsxMAiAIb1RDqX4SX3WCYhdQtvBVCPznHo%2BdHCN%2Fjcuklz8PqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxL%2BPPBC%2BMqKmTAckKtwDjj1Lt3Gs1Pc%2FExOwaSoLcpduQYK74OhfXExWbBF5RJyJHsJTA4zv7s%2FmTIWP3sSBYNRbSIwWutzFqLBhPAq1BjqWdz%2Be3xFmACjhamXFvGUQW0V16QTTLwdrR7KJ%2BxCEJcXf%2FZhBX64nmeqpsb1vn4cFCa6cStZGfHholHFX9DwnA0TS6ljxImZcC0mdfxgMI5hmSj47r%2FTho3OE96eY3yHFzbTnsjc9Ktb%2FEg53SoN2zF3wo9A1nAeDD5y1Tsta1weWAwl1qQ%2FBVHMZP7%2BLhhfDOfRsH%2F%2ByLd4emBqMt%2BqhjAWePjWKEC0LVaCI7oCk2wyf72Pqvvm5fYI8ZUoPi7KnYruHoq%2BfAvbLiaIYgQ7TAqdsRUV41sq0ThP280PgbmUJO0Nkcdr033h2ReqZJeMLqAREpSpNi5dmsQCbkPBH%2BzAu8NTQCtCYU4ZvoOmD1X8eolCTSB0efrByuTlcYpRfbMa0etpOBSvW6ipX0RGkfWlJ5s0vrX9a2YF1tpVFHKDJhLXHoF3Dv%2FsNJAyAuOPUnZEfNM9o1Hs%2BOFhgB5cAuqSE68d21VtjOR4fBEU0%2B%2Bxc9v0OXdwdhlNUp3Jco59qyyvchwqyfl4JmqNkRpvC2%2B1tfUTkiHMYnI0wv%2FeKwQY6pgHoCgO2o13ATpCw0Q%2ByN5Lt5luuww0TorjHgDkrZ27CS2o6OH8ju%2F6Ms832AQBPGvdc0e2dyKpAXmgTsxjpRDDbFgHHwsuOynp3pWdyg3MbRW7F5KmfPFFpwBhzQoVhVjgibUAvVIawIcXxsRhEMseuW3vKdnnoOa9yZfsW0%2FERxSg%2FsqA27x1ikZf6UfgWpwdARsDNnW79wY4ExnL7h4edK1kbirwa&X-Amz-Signature=b7e2680a1e7d56fe74700964b07132bdcb10f6fa06b10567093d88f5d19fd07f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCAF5MQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGjaZmHA1f9EnhWNh3PNDNF%2FeoI8EEbME%2B4kSR7iJsxMAiAIb1RDqX4SX3WCYhdQtvBVCPznHo%2BdHCN%2Fjcuklz8PqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxL%2BPPBC%2BMqKmTAckKtwDjj1Lt3Gs1Pc%2FExOwaSoLcpduQYK74OhfXExWbBF5RJyJHsJTA4zv7s%2FmTIWP3sSBYNRbSIwWutzFqLBhPAq1BjqWdz%2Be3xFmACjhamXFvGUQW0V16QTTLwdrR7KJ%2BxCEJcXf%2FZhBX64nmeqpsb1vn4cFCa6cStZGfHholHFX9DwnA0TS6ljxImZcC0mdfxgMI5hmSj47r%2FTho3OE96eY3yHFzbTnsjc9Ktb%2FEg53SoN2zF3wo9A1nAeDD5y1Tsta1weWAwl1qQ%2FBVHMZP7%2BLhhfDOfRsH%2F%2ByLd4emBqMt%2BqhjAWePjWKEC0LVaCI7oCk2wyf72Pqvvm5fYI8ZUoPi7KnYruHoq%2BfAvbLiaIYgQ7TAqdsRUV41sq0ThP280PgbmUJO0Nkcdr033h2ReqZJeMLqAREpSpNi5dmsQCbkPBH%2BzAu8NTQCtCYU4ZvoOmD1X8eolCTSB0efrByuTlcYpRfbMa0etpOBSvW6ipX0RGkfWlJ5s0vrX9a2YF1tpVFHKDJhLXHoF3Dv%2FsNJAyAuOPUnZEfNM9o1Hs%2BOFhgB5cAuqSE68d21VtjOR4fBEU0%2B%2Bxc9v0OXdwdhlNUp3Jco59qyyvchwqyfl4JmqNkRpvC2%2B1tfUTkiHMYnI0wv%2FeKwQY6pgHoCgO2o13ATpCw0Q%2ByN5Lt5luuww0TorjHgDkrZ27CS2o6OH8ju%2F6Ms832AQBPGvdc0e2dyKpAXmgTsxjpRDDbFgHHwsuOynp3pWdyg3MbRW7F5KmfPFFpwBhzQoVhVjgibUAvVIawIcXxsRhEMseuW3vKdnnoOa9yZfsW0%2FERxSg%2FsqA27x1ikZf6UfgWpwdARsDNnW79wY4ExnL7h4edK1kbirwa&X-Amz-Signature=7b4dea27817cdf3d7422050d9e8637017ee7d10162f7200c8af7a671224858a7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCAF5MQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGjaZmHA1f9EnhWNh3PNDNF%2FeoI8EEbME%2B4kSR7iJsxMAiAIb1RDqX4SX3WCYhdQtvBVCPznHo%2BdHCN%2Fjcuklz8PqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxL%2BPPBC%2BMqKmTAckKtwDjj1Lt3Gs1Pc%2FExOwaSoLcpduQYK74OhfXExWbBF5RJyJHsJTA4zv7s%2FmTIWP3sSBYNRbSIwWutzFqLBhPAq1BjqWdz%2Be3xFmACjhamXFvGUQW0V16QTTLwdrR7KJ%2BxCEJcXf%2FZhBX64nmeqpsb1vn4cFCa6cStZGfHholHFX9DwnA0TS6ljxImZcC0mdfxgMI5hmSj47r%2FTho3OE96eY3yHFzbTnsjc9Ktb%2FEg53SoN2zF3wo9A1nAeDD5y1Tsta1weWAwl1qQ%2FBVHMZP7%2BLhhfDOfRsH%2F%2ByLd4emBqMt%2BqhjAWePjWKEC0LVaCI7oCk2wyf72Pqvvm5fYI8ZUoPi7KnYruHoq%2BfAvbLiaIYgQ7TAqdsRUV41sq0ThP280PgbmUJO0Nkcdr033h2ReqZJeMLqAREpSpNi5dmsQCbkPBH%2BzAu8NTQCtCYU4ZvoOmD1X8eolCTSB0efrByuTlcYpRfbMa0etpOBSvW6ipX0RGkfWlJ5s0vrX9a2YF1tpVFHKDJhLXHoF3Dv%2FsNJAyAuOPUnZEfNM9o1Hs%2BOFhgB5cAuqSE68d21VtjOR4fBEU0%2B%2Bxc9v0OXdwdhlNUp3Jco59qyyvchwqyfl4JmqNkRpvC2%2B1tfUTkiHMYnI0wv%2FeKwQY6pgHoCgO2o13ATpCw0Q%2ByN5Lt5luuww0TorjHgDkrZ27CS2o6OH8ju%2F6Ms832AQBPGvdc0e2dyKpAXmgTsxjpRDDbFgHHwsuOynp3pWdyg3MbRW7F5KmfPFFpwBhzQoVhVjgibUAvVIawIcXxsRhEMseuW3vKdnnoOa9yZfsW0%2FERxSg%2FsqA27x1ikZf6UfgWpwdARsDNnW79wY4ExnL7h4edK1kbirwa&X-Amz-Signature=8a545920d24905c1af08ab3008f2ada8d29db114f64069163d8a74136609f4b6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
