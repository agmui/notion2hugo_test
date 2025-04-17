---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJVK5HX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2FJQu2XWQJyOw4KyhhdHrEGf2OXyiEond1LrD0LUn%2FQIgWlMe3hENpUbbuxuZMaoN%2FJ%2Bn4TUIU8fhDYE2Jvubgosq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIdA3CLg7F%2Fi4FToOCrcA6NIHhTPjAHvtlWDmXMXtZYnAcaF%2B2CwYlxa2Nz8M9zcnX%2BEErbMGZTcareXU0Qe9TBDUcmQ70PtQkXqq11XTNVET6QhOBvq9AuJ8otHnlN4i%2BnycaNZhEX8aNeg44AHD414rYoZXu7s2GuP6kPEAleXS5CXDbOtIXscv%2F0dSZA%2FKKEt2L1OKqiUdCzs0EDX6zigWH%2FvalFYLnM6dYgdhXD5uheE6d0Nn2PAypai4hICj0%2FqpS8tiEiMYDXFde%2BadxjCCkIjQfhrf37tCQ2DppRDqhIXv90CKgULIOa%2Fej37rSKu5Vuj7hAvULYVF613BdwpCHeBaksCQIS1F4KI2Mums%2FBcjELJzK8uvlU8zMZNMR1TW%2BW%2FRhM83yCdUwJ6QjcOsfTJlNM9bID6MuYsO6y9Ct35yWzMSfW1CzMATvvytb%2Bl7hj3AKTe0WWpQ1kx6k1cO7uY0ONc8A5bhxk87celq%2B6n6Qq%2FK9UG8jRtzEonC4WLc1u7OvDBFbUW85Fd5%2FGN1Qsohy6arjpSrFIQ6Hsrxnb0PS3uP0%2F96SNJmO9yURW93bBRMX1O%2BpWmg0tBo95V%2BEJXAcZtBqhLkhqGpxQdcQNpsy2b9PMhj0xg5y59aFFLpuV9kRQh28coMLbHg8AGOqUBjPvT8xBoeRput5JoSM%2FmtP33eNRBEDYR9nMe1thNCY4Pak8ep5noqkUaQISry%2FBiDoq4IdTpKXv06zqimwp2loStAaJd3xraKW58khwIyv4nDvP70t2OFhSDmjCUA4jsz7RofXemYJ3mXo2KeSg72PlxsnmZ5Ewc%2BsmTFtIETCgxoxSNrAF0pkF%2F5bGT38WDAvISBAVDMLtSEHr02c62B%2FPi01V7&X-Amz-Signature=17f227c8a1991f5cc2e2210334e590cdc2d7f9e9e9f8eb630fbe35f4708d4f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJVK5HX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2FJQu2XWQJyOw4KyhhdHrEGf2OXyiEond1LrD0LUn%2FQIgWlMe3hENpUbbuxuZMaoN%2FJ%2Bn4TUIU8fhDYE2Jvubgosq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIdA3CLg7F%2Fi4FToOCrcA6NIHhTPjAHvtlWDmXMXtZYnAcaF%2B2CwYlxa2Nz8M9zcnX%2BEErbMGZTcareXU0Qe9TBDUcmQ70PtQkXqq11XTNVET6QhOBvq9AuJ8otHnlN4i%2BnycaNZhEX8aNeg44AHD414rYoZXu7s2GuP6kPEAleXS5CXDbOtIXscv%2F0dSZA%2FKKEt2L1OKqiUdCzs0EDX6zigWH%2FvalFYLnM6dYgdhXD5uheE6d0Nn2PAypai4hICj0%2FqpS8tiEiMYDXFde%2BadxjCCkIjQfhrf37tCQ2DppRDqhIXv90CKgULIOa%2Fej37rSKu5Vuj7hAvULYVF613BdwpCHeBaksCQIS1F4KI2Mums%2FBcjELJzK8uvlU8zMZNMR1TW%2BW%2FRhM83yCdUwJ6QjcOsfTJlNM9bID6MuYsO6y9Ct35yWzMSfW1CzMATvvytb%2Bl7hj3AKTe0WWpQ1kx6k1cO7uY0ONc8A5bhxk87celq%2B6n6Qq%2FK9UG8jRtzEonC4WLc1u7OvDBFbUW85Fd5%2FGN1Qsohy6arjpSrFIQ6Hsrxnb0PS3uP0%2F96SNJmO9yURW93bBRMX1O%2BpWmg0tBo95V%2BEJXAcZtBqhLkhqGpxQdcQNpsy2b9PMhj0xg5y59aFFLpuV9kRQh28coMLbHg8AGOqUBjPvT8xBoeRput5JoSM%2FmtP33eNRBEDYR9nMe1thNCY4Pak8ep5noqkUaQISry%2FBiDoq4IdTpKXv06zqimwp2loStAaJd3xraKW58khwIyv4nDvP70t2OFhSDmjCUA4jsz7RofXemYJ3mXo2KeSg72PlxsnmZ5Ewc%2BsmTFtIETCgxoxSNrAF0pkF%2F5bGT38WDAvISBAVDMLtSEHr02c62B%2FPi01V7&X-Amz-Signature=e5ad826259d0c619bd31b1d03c004207a100e86d76dee9dfe81b984a30a610ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5AYKUH%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiy2cUtssqcTLUdqTWk4iFvuJF8Z5MlQsvn%2F5Rr%2FNDHAIgaVeIuT2HndWVdsUUbihVKST1v9SlVWLwp%2B5WrQYn7zoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDEDsnduYy4%2BbPeyuXSrcA0VWyvR%2BaGp11WkqEuTyYgDAt3tUPAFKRCwqFjMQ2A86%2F%2FD1H5uLB5Zx%2BYF05vVMG7%2Fct%2FvjSmqpjiL7oBWa1R1fjOHqu4%2B7DURDXuvCdKfQVNqKwbMzUBmKnKxFGhEZ3J1hVn%2FrlK23OJc3lpUYWcXsqHCkdxIG9cTJra%2Fqi%2ByRQfSAzvX0Xl6Ye5Mefg2NoJXexQ2AKR%2BNqPkoxwJ0%2FyerbpNMN5T5%2FiCMjFOtQwuiwr63RvVKEel5b%2FZ9H0ZW4HOss%2F54QZmjIhNr7NAnRqLpALu942SMU%2BGL9Dralo0k2eVW7cna6xrUdc6k2jLlWGos5Shwr2zLfe8Au5B2sVbW7S0cgAJ4mM58VMjZRP2AwG0OuaPjONu41hlUWHqV5cDQAUn1F996NZn18fbPRRvSEKBVWmX3BLzdANi8lAFWr21%2Bw0Cv5rt11Ik79wrvs26HgkY%2FbpqjhdefRDAsmGO0bO15pWux6sfZmHd6fyE7SFr81drCwfsOMHNZHbBFJQK2UIYkY5ZIF3AiSHiSPvZYH8Av1FswlkPscD8lvld5MsyeqgBXrSapbUfmRJ9r4rORvtWU2uPNPiO4AuFoFvS7el%2FiTXo8o6uEEc%2BDumpwH%2F%2BR33QR%2FNsqeABXMI7Ig8AGOqUBJ9dBrrEFGcGxT0cqohEPVX8l3g7AMrg0whCOx%2FqA4BBMivw3TYH6bVOMwqlHRyq9XRjYQ%2BFoNjoAJXd5VNcjM7z1wyZkUJlNpg4S4mMWSsj%2FS6GG6XnmuC0YsjLN%2B07MMEqd5hC9zAKKN7pjsv5xsb9WpdM43RP7nDGYiXRpBCdF5AQHmkmbvhftohhHa9y%2FP2shzqWJhBe%2Bad%2F49D%2FMg4rotjof&X-Amz-Signature=6ab681fdbd207cb4bf83abbbadcacdc93d145b6c077e2a4ec261756549cbea9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DXSTBMI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGh%2BaQvqphjSft1FE%2BO1N%2F9PE%2FE1AN7Z6uRCiZ7vXC4%2BAiEAteL5Isf%2Be1gCnnghTM4t9T%2BaR2I467Wpr%2FGcEMXQJSIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPuzcGxs7AkWCfmxkircAxnS%2BLyg0FifL1hDy%2F8m%2BurIvLepHhqeskXU%2FB9eqnmV3GayvvWV8VGMsTpqXe3KYk4cYjJYwAIju4pO2QrGygoEaZwSP8oLeoI%2F6uTLNsglUbtV83sMx6ML0VnT8JK8gw0xJXcI9gqqf6Xzodevdb%2FMMIWd%2F6J6h37MBeicBym1wIcTKlVzO8336YsOUod3rngB6lyEbGm5kwtEyvB%2FnoCEfl%2B7AMV5Kpril76cMpmYzzgIuhEwxWgXjtdXlVyJ0icpf1Kk7EHojlKYTImbOE%2F%2FaTgrU6EUw9a%2F5EN8IQ3JqMzXEXqPJMQGPRfJJO%2FijUiSfXTSIv12hBl%2BZOu4doQyUBrIfNVrlEZ513AeJsYJgdNQCMKtDxcspYCRrtoaEcpeCNfrj3ESYjI874tt4N1uvhNAiPiUD1jEh%2Bia3SKsVzguMLgHul9RsgrS%2BbgkY5OMNrGGoAN%2BwSqkOPMWXm402JH2nItZM7NfH%2BjTtNRgBfGmUxLvl07RbkFykgkFcJp6BSmXSHbupCoEGsJImYqi98pOpm4lra1db5wOBLtk1reY0OGcrRNaqzK%2FhbDFNx6g7Jbf5V00UkzKZJufaiWRNROcsZBivPhrPiYLs6Z3cW%2F7mFJ9z4thBgL0ML%2FHg8AGOqUBK%2FiDS0mzeZpneoDq1Ih8%2FZbFORZ3ybXI8nM19We74wTa%2BMRH3QEQY%2FUMeM4d5em70CkoeQBfDMXWiDsJ7kE74EsAYvrrIUJPrRHUVHJoxXA%2Fur2Znfa5vNip3OTTykw%2FylRM2vK3r5t4bZ16C15u0ySyxNdmrRnS8USPstoujHm239B3PBk0hdPZo9HcO3e%2B3JOhM2X26r%2F0phZ1ecjrMh0gSoXz&X-Amz-Signature=96eacd33f14ae1cdfea70adcf23a559e96ba239dccea3d3f683703f0d42eacdb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJVK5HX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2FJQu2XWQJyOw4KyhhdHrEGf2OXyiEond1LrD0LUn%2FQIgWlMe3hENpUbbuxuZMaoN%2FJ%2Bn4TUIU8fhDYE2Jvubgosq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIdA3CLg7F%2Fi4FToOCrcA6NIHhTPjAHvtlWDmXMXtZYnAcaF%2B2CwYlxa2Nz8M9zcnX%2BEErbMGZTcareXU0Qe9TBDUcmQ70PtQkXqq11XTNVET6QhOBvq9AuJ8otHnlN4i%2BnycaNZhEX8aNeg44AHD414rYoZXu7s2GuP6kPEAleXS5CXDbOtIXscv%2F0dSZA%2FKKEt2L1OKqiUdCzs0EDX6zigWH%2FvalFYLnM6dYgdhXD5uheE6d0Nn2PAypai4hICj0%2FqpS8tiEiMYDXFde%2BadxjCCkIjQfhrf37tCQ2DppRDqhIXv90CKgULIOa%2Fej37rSKu5Vuj7hAvULYVF613BdwpCHeBaksCQIS1F4KI2Mums%2FBcjELJzK8uvlU8zMZNMR1TW%2BW%2FRhM83yCdUwJ6QjcOsfTJlNM9bID6MuYsO6y9Ct35yWzMSfW1CzMATvvytb%2Bl7hj3AKTe0WWpQ1kx6k1cO7uY0ONc8A5bhxk87celq%2B6n6Qq%2FK9UG8jRtzEonC4WLc1u7OvDBFbUW85Fd5%2FGN1Qsohy6arjpSrFIQ6Hsrxnb0PS3uP0%2F96SNJmO9yURW93bBRMX1O%2BpWmg0tBo95V%2BEJXAcZtBqhLkhqGpxQdcQNpsy2b9PMhj0xg5y59aFFLpuV9kRQh28coMLbHg8AGOqUBjPvT8xBoeRput5JoSM%2FmtP33eNRBEDYR9nMe1thNCY4Pak8ep5noqkUaQISry%2FBiDoq4IdTpKXv06zqimwp2loStAaJd3xraKW58khwIyv4nDvP70t2OFhSDmjCUA4jsz7RofXemYJ3mXo2KeSg72PlxsnmZ5Ewc%2BsmTFtIETCgxoxSNrAF0pkF%2F5bGT38WDAvISBAVDMLtSEHr02c62B%2FPi01V7&X-Amz-Signature=94082510a2c1cfc8f1c0133e6d8a2db2dd17f888c9315985e19ae5ee7361f5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
