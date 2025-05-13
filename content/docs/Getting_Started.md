---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC2OBD3N%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIEZb8RpXXbldoZpP56luyjoFsQve33%2FHdYRrWxV1LVpnAiAqg8cWai%2B0euZjnpOhigBV3WtGwRUndFcSGCKtrdFh4iqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmPZdpKml2WqrG3iFKtwDzHQB4JSefZ0Wm1c67gDleLcESt1MrDdBe5FuS7Vtsnz%2BqEjky2xP9%2FRGBHtigphZUN%2Fhd9hceBEu%2BHs%2FkU1kSp4IdqjEPJbXGot%2BqgTHmFj4Nj%2BvsVlRdZ4H97xejGSERTNdqa6yjZJgx3HVCWOMHSqd645iSIwVCwVyrfXvHQZ0eOs6xZqLbC5N00Rp%2BNjuMuI39ScwonX7ymy6CUm9Gf8Eh2s7ylESD8sB1nynEtRLjWPUfQAdN9VDG24YH1XDOuOp06GHvjlxhElQWiBHSsE4xaFFYXfmfenoUklDlBuiWePmFWsZ378slETjFJb6dnCRYb%2BU066tZnT5wfcH7e7SuOgNFiBLG0Gaqb57zEbb2NZksNBF8JvI5MVUcYwlMi6e5UR6ZldAzBEkQCEBnkQO9Qbi7ge264haJ8mbWOSoY9SCEqKsuQd39Kx4lwKcFPd77QpDN8k0Suh6xJepNkaBhXbWRA3kmSOxQsQbaBIfKTKRA7m0wueP%2B7WhErpbPzh6XFFfT5PVEUA1ymrcB8TNvVXA14wRQscpun%2Fvq9FDrtZYjRrxZt2rhpwIhxzvxvJ%2BiO8AKHOsYIeeI2qpiiyhmG%2FG9grljsErrAH4XjctaACoZ9v368ys2kUwwo2NwQY6pgEAEqQWIuG2D7pQ4ne0RLmOYJMnSNjZU1oWfqoo7wJy1Loqj9hyXG%2BYkl6Aa37mi8pvjOoFiUWuLT1ybhOoTDupAnXBnV%2ByZ0U2hJq8vVIV9egE2glj0EcbOzsA84t%2B8J8C0nYcUgrPMGEjY3jWU9GUsLojMZViA5AaRuL1QxF8EdxTdxNlVj4RRVE5MogvccVIuXqTpZ0Gvg%2B8riUxPnroqVzVj%2Fze&X-Amz-Signature=639610d3ac397ac8b0ced768b845b759431c55dfa4a1c7f37109cf48226cf5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC2OBD3N%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIEZb8RpXXbldoZpP56luyjoFsQve33%2FHdYRrWxV1LVpnAiAqg8cWai%2B0euZjnpOhigBV3WtGwRUndFcSGCKtrdFh4iqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmPZdpKml2WqrG3iFKtwDzHQB4JSefZ0Wm1c67gDleLcESt1MrDdBe5FuS7Vtsnz%2BqEjky2xP9%2FRGBHtigphZUN%2Fhd9hceBEu%2BHs%2FkU1kSp4IdqjEPJbXGot%2BqgTHmFj4Nj%2BvsVlRdZ4H97xejGSERTNdqa6yjZJgx3HVCWOMHSqd645iSIwVCwVyrfXvHQZ0eOs6xZqLbC5N00Rp%2BNjuMuI39ScwonX7ymy6CUm9Gf8Eh2s7ylESD8sB1nynEtRLjWPUfQAdN9VDG24YH1XDOuOp06GHvjlxhElQWiBHSsE4xaFFYXfmfenoUklDlBuiWePmFWsZ378slETjFJb6dnCRYb%2BU066tZnT5wfcH7e7SuOgNFiBLG0Gaqb57zEbb2NZksNBF8JvI5MVUcYwlMi6e5UR6ZldAzBEkQCEBnkQO9Qbi7ge264haJ8mbWOSoY9SCEqKsuQd39Kx4lwKcFPd77QpDN8k0Suh6xJepNkaBhXbWRA3kmSOxQsQbaBIfKTKRA7m0wueP%2B7WhErpbPzh6XFFfT5PVEUA1ymrcB8TNvVXA14wRQscpun%2Fvq9FDrtZYjRrxZt2rhpwIhxzvxvJ%2BiO8AKHOsYIeeI2qpiiyhmG%2FG9grljsErrAH4XjctaACoZ9v368ys2kUwwo2NwQY6pgEAEqQWIuG2D7pQ4ne0RLmOYJMnSNjZU1oWfqoo7wJy1Loqj9hyXG%2BYkl6Aa37mi8pvjOoFiUWuLT1ybhOoTDupAnXBnV%2ByZ0U2hJq8vVIV9egE2glj0EcbOzsA84t%2B8J8C0nYcUgrPMGEjY3jWU9GUsLojMZViA5AaRuL1QxF8EdxTdxNlVj4RRVE5MogvccVIuXqTpZ0Gvg%2B8riUxPnroqVzVj%2Fze&X-Amz-Signature=47ddd531c39ee59b6d35de1fc34c7a90e1e1dd8d82ff2c20adb6151bc5939a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC2OBD3N%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIEZb8RpXXbldoZpP56luyjoFsQve33%2FHdYRrWxV1LVpnAiAqg8cWai%2B0euZjnpOhigBV3WtGwRUndFcSGCKtrdFh4iqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmPZdpKml2WqrG3iFKtwDzHQB4JSefZ0Wm1c67gDleLcESt1MrDdBe5FuS7Vtsnz%2BqEjky2xP9%2FRGBHtigphZUN%2Fhd9hceBEu%2BHs%2FkU1kSp4IdqjEPJbXGot%2BqgTHmFj4Nj%2BvsVlRdZ4H97xejGSERTNdqa6yjZJgx3HVCWOMHSqd645iSIwVCwVyrfXvHQZ0eOs6xZqLbC5N00Rp%2BNjuMuI39ScwonX7ymy6CUm9Gf8Eh2s7ylESD8sB1nynEtRLjWPUfQAdN9VDG24YH1XDOuOp06GHvjlxhElQWiBHSsE4xaFFYXfmfenoUklDlBuiWePmFWsZ378slETjFJb6dnCRYb%2BU066tZnT5wfcH7e7SuOgNFiBLG0Gaqb57zEbb2NZksNBF8JvI5MVUcYwlMi6e5UR6ZldAzBEkQCEBnkQO9Qbi7ge264haJ8mbWOSoY9SCEqKsuQd39Kx4lwKcFPd77QpDN8k0Suh6xJepNkaBhXbWRA3kmSOxQsQbaBIfKTKRA7m0wueP%2B7WhErpbPzh6XFFfT5PVEUA1ymrcB8TNvVXA14wRQscpun%2Fvq9FDrtZYjRrxZt2rhpwIhxzvxvJ%2BiO8AKHOsYIeeI2qpiiyhmG%2FG9grljsErrAH4XjctaACoZ9v368ys2kUwwo2NwQY6pgEAEqQWIuG2D7pQ4ne0RLmOYJMnSNjZU1oWfqoo7wJy1Loqj9hyXG%2BYkl6Aa37mi8pvjOoFiUWuLT1ybhOoTDupAnXBnV%2ByZ0U2hJq8vVIV9egE2glj0EcbOzsA84t%2B8J8C0nYcUgrPMGEjY3jWU9GUsLojMZViA5AaRuL1QxF8EdxTdxNlVj4RRVE5MogvccVIuXqTpZ0Gvg%2B8riUxPnroqVzVj%2Fze&X-Amz-Signature=4447a9880fdf0b162fe64ed45424e119861fef62333de88d45aa85bf382d1829&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVR3PIV%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCt%2FgVj7PAC%2FMGZ7xzLYHoa3hQYM9%2F9K0Nm3aA8HYdw%2BgIgZtq8JIcfG%2Fgs17CpGfZJCkp7tSB9Nhq%2BkhXYmVpriysqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwT4QEprmUknII1WSrcA0iSwEgR%2FBxDbMeOH1G3xXh7HIx1O5439dcgykwvvKlQnOfRYJUXqlgFDP8L%2BBtkyZCusZ3KE1J06wXfLvhZ0OGW1iQuDiOZIF7I9WqWEMiI8r0nB5vMi%2B3FWgdYcT2H4hzBJoHnEGdiMlDTNEpB29RWmRNDE6NZ10g6SrH%2FcM5poORTGOFxR1F42iuOTOFr9lNZR4p%2BE6j6zhzEWTX97n5ifb0USbvyke26XL6AhDDlQhRw%2FXp314jhage9LKcy1BbXxwrMvc2sZKuFdEq7tX6V5lfQuvSVR5cxb1kVRVR%2BieaTUHbMpedAIo1B63KIYHmNQBDhyfYDPZbPzP6ct1Sb1qZDSZ4uRs2WA%2F%2FmRsVx15YA7bFrddtuj5TqlGnYxZkJN%2FvOzB3OI7yv4o48qmz13w8cIX5fAgt6QpDFPiNl%2FrDKETU5Qb35b2%2BTlQLOkv6%2BvTtu9JQ7mtZgcMjxUOzEVYbMW8Q6OFNiZ9CyHRtQf6tPG9xNuYHWOSpnk6KkBuVMT4%2BOpZzUD80tVv5whYacsftKZ5r6QT6Ec1hSakh9Ule7YWQlFDSLWvNS2J808aNYwxI7vYN2da2CSmhyN1vQqe8DnwYo9nvEd%2FLk7ZwkQmQpLliCDUx7O7%2BWMJSOjcEGOqUBo1%2BdLdGTjcbS4pbIwwOCZJgOYLEgeLASDVvz2wBA1C%2F4rdO3hhyqa3bC3jnrtx1v5H2G1HRl9H3CoTwonGpeoZF9rZePLKMUJueQq4LhGxnAnzvxfJX6AehMIYrZyj5AJLlm9l74bpBoXI7%2B2u2yrUbNUFx8mIeA9Zz3%2FPV%2B0ifR0YtdbbhWxMTMcsAZn7nKrxRpQie25uy23rdBFt4Rh3Smc2E%2F&X-Amz-Signature=bad6f36c5e42e5ce9093f0c5afcb111f06420fdc5daad2d57f09193d287127e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQOBM4J%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAcWxAE9542aICmjp0X5mIYtYr11U%2FIChfOBlgsbC97VAiEA4TnxEm0pJn4gOuqBm7H0etutqDW4XlYMCZgkCYWVX7oqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhXZPfvgaTIhdTCeircAxGYulsf35w8PfZq8OQOBuO83HA8YW3gj2m6QcqldTTZtPaMnPNu21n%2BOceuqgEzg3qaWv1ntnzAD%2F2%2BU%2BOHZEpoVNL0eyRiI6%2BIHIpQBgEYDw9WprEnRVWP7d9vGJlxproNjTpAQV9gVPjQdRlSdVl2Ec8v%2FjzNON90fm73H9nBX7r0w8Ho5z74xazfhZ3eDoV2ul3RiZSdlO%2B4McpvGJGhn6b442kxFyzj7T0J0SlWmRjeU0lfVztrEycygHEI%2Fga6f6xmpGCIxLYfy629jdTtWo1ppqleV59ZVv93mDzUkSvpy3rinn%2BBHdwnFJOdMbTVLiO6iFDDoou2X%2BWssZoWFkbvJETv9wrXKFuOClNOC9GrHNEcD1IZcCPMCBrHe%2BtWwUDcwAG45Jrz3kjs0XVcddPQzL%2B2k7Wioc0sYu6EWYlR%2FTbH%2BBdsV9bLmKVv%2Bjqbki4Z3b4P70u1LAkeW2yItjEnhSQeu%2FROsB8lhM%2Bjt0nj52E49GlJwAtnB38NjGZ41JnxoZDj1qN%2FJARrolehPJV61GRyJAEoQRboc0ea%2FgnNnMddeEBtriCRihf5%2F31MxqxIQZX1usiZuTnXY3KiIbxjNBySo3rE9Ad6JFwfO9%2BMfwCUMA0qZ59IMIaOjcEGOqUBaN%2Fy2hvGsDpJ62dL5iEzZ0MiGd%2BSuQ%2FtTvXUHoGlHUCWnhmu5GaP6LyzhJ38JIO1xgaxbcXx2vN6dDiPcerQpO4eXwXcOpKkeHDMgmLDWRlye%2B2yOvDi6tTMQMNlMTkLd8yb3Whx43j3xHgDOTw%2BbiGH7G3IwXpu301g6RMEdFguInZq3%2BhGZPQKzBLNO8pnP7lqvvq%2FXQNVAQ0YstkcgjVfjBcM&X-Amz-Signature=473e0e3e85dc21e2dccfacd6ff0c0a9f480704d4c47c4cc4504813c92955c377&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC2OBD3N%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIEZb8RpXXbldoZpP56luyjoFsQve33%2FHdYRrWxV1LVpnAiAqg8cWai%2B0euZjnpOhigBV3WtGwRUndFcSGCKtrdFh4iqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmPZdpKml2WqrG3iFKtwDzHQB4JSefZ0Wm1c67gDleLcESt1MrDdBe5FuS7Vtsnz%2BqEjky2xP9%2FRGBHtigphZUN%2Fhd9hceBEu%2BHs%2FkU1kSp4IdqjEPJbXGot%2BqgTHmFj4Nj%2BvsVlRdZ4H97xejGSERTNdqa6yjZJgx3HVCWOMHSqd645iSIwVCwVyrfXvHQZ0eOs6xZqLbC5N00Rp%2BNjuMuI39ScwonX7ymy6CUm9Gf8Eh2s7ylESD8sB1nynEtRLjWPUfQAdN9VDG24YH1XDOuOp06GHvjlxhElQWiBHSsE4xaFFYXfmfenoUklDlBuiWePmFWsZ378slETjFJb6dnCRYb%2BU066tZnT5wfcH7e7SuOgNFiBLG0Gaqb57zEbb2NZksNBF8JvI5MVUcYwlMi6e5UR6ZldAzBEkQCEBnkQO9Qbi7ge264haJ8mbWOSoY9SCEqKsuQd39Kx4lwKcFPd77QpDN8k0Suh6xJepNkaBhXbWRA3kmSOxQsQbaBIfKTKRA7m0wueP%2B7WhErpbPzh6XFFfT5PVEUA1ymrcB8TNvVXA14wRQscpun%2Fvq9FDrtZYjRrxZt2rhpwIhxzvxvJ%2BiO8AKHOsYIeeI2qpiiyhmG%2FG9grljsErrAH4XjctaACoZ9v368ys2kUwwo2NwQY6pgEAEqQWIuG2D7pQ4ne0RLmOYJMnSNjZU1oWfqoo7wJy1Loqj9hyXG%2BYkl6Aa37mi8pvjOoFiUWuLT1ybhOoTDupAnXBnV%2ByZ0U2hJq8vVIV9egE2glj0EcbOzsA84t%2B8J8C0nYcUgrPMGEjY3jWU9GUsLojMZViA5AaRuL1QxF8EdxTdxNlVj4RRVE5MogvccVIuXqTpZ0Gvg%2B8riUxPnroqVzVj%2Fze&X-Amz-Signature=dfd2eb24dbeebaee950e9b6d138ec62d185ee8a8da2820fcaac8c9ad6a6e2039&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
