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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPS5C4RV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzqtDyTJ%2F7YYxJZjn7DMsrvVHw6Hal3rBg08A0r1WmjAiAt3N14lT%2BwhBpTY1M68F6io8vmcVMO4t%2BB4zW3v%2F4wkiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOib9znmWbBW%2FBeF9KtwDpJLUTvrJff%2B0IJ04Pswbhdca1nuBn4EySyC16BJrcvkUpKtldTGpGD4Jhg%2BOgumZdxWZsNZeRKvJcAuFmstyxBlhDRkJoU4s7K7H8lpcFIaM%2FWVEKOGb9gr82V1sqB5n7h%2BpQ3aaqI%2FYRfCCNCmH%2F9Dir8k1DRWAk%2FjUJwHuMe%2FuZouVCHHFzCyl8PXUieDyaO5Omf8tL008450y1emYM5yKT7W%2F15S3M4dj8CvsWPzfwAzpd%2Fnb8GHNU8YAY0wURobnRTtHEJd4oO6v%2Fgi5qV3Npd1nKpEmClvj90997n6%2BzUtoLy4HcNcYrw82Lc06%2Bzgckg2pTlBKmtW7tOBm3xK%2FlPNmI1%2FK0BuN5lStR24HxQ7%2FUYrAzUvEgo3ZquD99sFrqguZyClfG8iYAHsixh%2BOp7mR%2Bq%2Fa6Q6jJ1PyjgWXeDTslt%2B5GU9BHhFlwteeC38oO5vRmJTsOmYMw6gNVW9n0ZIAajefhiHUa%2B3DnlCE89DEMqA12QFKDmYtMTLY5swEooTjzvVe3YxjZQNWnfQnLQ%2BVgn09f%2FLWNUfdfkQ4Vd2GVctDy%2FBB6nMkYyzflNJIiRFF0weigMP90vSU5qjND0%2FBtGyMn6U9%2BI5i%2FBI%2FELDWBqyBDrT6ftgwu5WIvwY6pgF0QnbVzMyNkZwx1rBOPxXSubKPSlxjSMg%2F1bPGVL28VwvEAO%2F5yYVltI3%2FAanFbTb0je2dCF%2BHwDfYDlQuF1IWpUa1zbNUiD6ZcnctzXLYlxcRR4AXFeEM3q9diR%2B2aTsPQ%2BTVMkAoPwk4DbbDZKh01OCuWUnqjLrQviNAUoiDcHewtVYBY60ZJ0hcCDqJ3CvJWkOcYXnf%2FA73ZBzMdkTEzaxrhfvB&X-Amz-Signature=a0592cf72058794c37ffb6a19a940d75db4cf4d0aaede6c48fe7a87c09a8bede&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPS5C4RV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzqtDyTJ%2F7YYxJZjn7DMsrvVHw6Hal3rBg08A0r1WmjAiAt3N14lT%2BwhBpTY1M68F6io8vmcVMO4t%2BB4zW3v%2F4wkiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOib9znmWbBW%2FBeF9KtwDpJLUTvrJff%2B0IJ04Pswbhdca1nuBn4EySyC16BJrcvkUpKtldTGpGD4Jhg%2BOgumZdxWZsNZeRKvJcAuFmstyxBlhDRkJoU4s7K7H8lpcFIaM%2FWVEKOGb9gr82V1sqB5n7h%2BpQ3aaqI%2FYRfCCNCmH%2F9Dir8k1DRWAk%2FjUJwHuMe%2FuZouVCHHFzCyl8PXUieDyaO5Omf8tL008450y1emYM5yKT7W%2F15S3M4dj8CvsWPzfwAzpd%2Fnb8GHNU8YAY0wURobnRTtHEJd4oO6v%2Fgi5qV3Npd1nKpEmClvj90997n6%2BzUtoLy4HcNcYrw82Lc06%2Bzgckg2pTlBKmtW7tOBm3xK%2FlPNmI1%2FK0BuN5lStR24HxQ7%2FUYrAzUvEgo3ZquD99sFrqguZyClfG8iYAHsixh%2BOp7mR%2Bq%2Fa6Q6jJ1PyjgWXeDTslt%2B5GU9BHhFlwteeC38oO5vRmJTsOmYMw6gNVW9n0ZIAajefhiHUa%2B3DnlCE89DEMqA12QFKDmYtMTLY5swEooTjzvVe3YxjZQNWnfQnLQ%2BVgn09f%2FLWNUfdfkQ4Vd2GVctDy%2FBB6nMkYyzflNJIiRFF0weigMP90vSU5qjND0%2FBtGyMn6U9%2BI5i%2FBI%2FELDWBqyBDrT6ftgwu5WIvwY6pgF0QnbVzMyNkZwx1rBOPxXSubKPSlxjSMg%2F1bPGVL28VwvEAO%2F5yYVltI3%2FAanFbTb0je2dCF%2BHwDfYDlQuF1IWpUa1zbNUiD6ZcnctzXLYlxcRR4AXFeEM3q9diR%2B2aTsPQ%2BTVMkAoPwk4DbbDZKh01OCuWUnqjLrQviNAUoiDcHewtVYBY60ZJ0hcCDqJ3CvJWkOcYXnf%2FA73ZBzMdkTEzaxrhfvB&X-Amz-Signature=fa8f0151738c26b81448fb35e020bd2320f844602cc5c3a6168571af2e52a776&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HJE5BF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw%2BrhRP8PthJ7jsHB5wzqPDoe3K2c9i2WOYipzepX9kgIgXVUej670VRNQEjBT%2FJcp%2F1Yp4qTpMSQqa6gzyyF20WcqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYSuFF6lLANxeb7wCrcA%2ByVZlHNLmDWLoA8YwS6BMo%2FL2Awo5lYoGF2LX6vm8vBruE6fq1v2QqrLIJwjrUdyWaX1VIQLQf6R9jeY1cyqh%2Fkvfb3zL4OBh5NQPqbi8pYra8yu23vheiA6wPhuniWRX3QWcDqtqEMlYF6Kel7HbpKaD9x1pVpZdbyZL5vcn8Eqw5z2VS88SGdDkh376bgQRUnsRqOHb2TUI%2BAdDzLnnFpuD2CzDPAdEX64lcj%2FCvVDJW%2FxCzVSXUtQgUpwjCRCVF4sjsTWhwnyd8K4q7f%2Bha%2FnyYbTLa3FLrAdt%2FAF2A%2BUkzmk5K1N5vq6z3K%2Fkn%2Bkh0z7OBeFWzs5JkPkaWcYlBM%2F5BeAo9dKXR7axiyD1pMzu2e2jAXs7s8yzSY70VqvGdWzopRBwzA5dZpaxBRUB3Hpf34e34ZCl02q1fB93j4zXlSQV6GlwVWic8wB%2B7e8Wd2LXdcpxVE%2FH%2F%2FkR2ccOdXN3XGq%2BfOSshnv%2FO8z60QqjrNvueveGu5Rl1UVD7B7qOrH7Ch2w1eWFvHkzZ5nyNihZwTQz%2Fz9T6QelMTRr%2FSdO2Tpf0Ri9qBsAf%2FkzNXYK%2BZjdfbh6LDfnh%2BSL4WZ%2BuflT6zCtkVEnWFgZVXWwfwsVzzYkmSX4ClUnDqMO2ViL8GOqUBZ8hAsZrr9eYJUcF1DalYNCwISmI%2FKmY9%2B2kFKRqGdlAo4DLsKCTs9kK4KkBstaq2oepTl6i%2FZkt2eujXhYLPRLEX6BvYQtNgjZo6Mh%2BSM8hl1GW%2Bi6Dmh6GeyVs9k8wwwCK08I3zyveBf43qS0ohF5wzEPnLpGrejW85RgozqLKBwm8ZaPyNQMDA1VP%2FVcxW3ZWC9GHk9s7Rrbgfh8FuPJ1fGPgq&X-Amz-Signature=1cbc985daea1d07ad008396999fa708fdd51a645fb2977e66f994555a2050469&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DX5C2T7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQZ8SNsAkpMcxqt28VESZhiLJXuuNUvNiwT7m4N16yMAiBR00u0NRB7LmmbAkY%2F9b5%2BpHIEsVIp205DjbJhztMzryqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjmk7cqORrejG1rJKtwDTYVIxK%2F9XDUDoy3dVvX1SB8bHcgZyaKkXyYrpJQmG7pfNFpgcO1SZX8njVRzbUvbisjDSivsGzRNPUq2rIo6%2FYXV%2BOQ%2BzzNguw7J0O12reFNptizoGe1V3LnAqGU5kvjUrB05WFHJ61g%2FCZQg4r9vNjsHocCQmOXd5q04fZ0p72aofjs%2BQc5hQxWUeejDHi04MKwxBqFqfFQrovQ94%2BZLWwjO5nA7L91U72ztg2LrC8xqz%2BkR%2BqHnlpc%2B4Dm5z1t8rLWi34QR8tpKH6b37Nbj3emO9v84mwJfVVCH7VFiJegJcEBBbiYNT9UL31APJscQQKZollj8KuN7xbKCKh6024wV%2FYZkM4U6s5WmZd9RPzMnTWGuSbOWIMd2yYIZemif4HAx0hDZauweKYXzYrjvQ8As5WJUjlYp4m8rr4qgHuvyA3xnEeSjDbesDEJybuy68bUitcdeZEX7rUOmena0sHvAL8mOfrcQLyQcMHuvbcbzyhVG0XcJ36y9hTg2fif3Yu8RMYt1cJcWP5RZE2YjThdLdm4EVnuvndhpw735Q4TSWr6U2%2Bedrc6KmPorQ8q1ZJ7ZKLaCkNLtCsvY8GmF%2BthYi7uxnP5Gi8fcOqm36MxNzwcDbOnqP282TIwhZaIvwY6pgFjtO4GQ2r7U4tuE40crJuYKO85VQKOMgqpG%2FgJQ1FreiO5n%2FEmTxRHJb%2FQz%2B75%2FfeTCcHABHInzydUJ72SEKUtlzJ0hUUZCv%2BuCDpEDp5cQqlRBmgI%2BF9m7z8WAKToEDhKBmZqOIK1IvuOJEcOkEhvFRBTiw5%2FLYBC5QENOudt8qrlSBUoi49qL5kCUpOUDwu6Fdp4q7rIsPm%2BsJODvJmZ%2Fiul%2BKU%2B&X-Amz-Signature=10a4e234e122cdce985dc11a35a1e77b8b73bb8286b132195ba40406d330a63f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPS5C4RV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzqtDyTJ%2F7YYxJZjn7DMsrvVHw6Hal3rBg08A0r1WmjAiAt3N14lT%2BwhBpTY1M68F6io8vmcVMO4t%2BB4zW3v%2F4wkiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOib9znmWbBW%2FBeF9KtwDpJLUTvrJff%2B0IJ04Pswbhdca1nuBn4EySyC16BJrcvkUpKtldTGpGD4Jhg%2BOgumZdxWZsNZeRKvJcAuFmstyxBlhDRkJoU4s7K7H8lpcFIaM%2FWVEKOGb9gr82V1sqB5n7h%2BpQ3aaqI%2FYRfCCNCmH%2F9Dir8k1DRWAk%2FjUJwHuMe%2FuZouVCHHFzCyl8PXUieDyaO5Omf8tL008450y1emYM5yKT7W%2F15S3M4dj8CvsWPzfwAzpd%2Fnb8GHNU8YAY0wURobnRTtHEJd4oO6v%2Fgi5qV3Npd1nKpEmClvj90997n6%2BzUtoLy4HcNcYrw82Lc06%2Bzgckg2pTlBKmtW7tOBm3xK%2FlPNmI1%2FK0BuN5lStR24HxQ7%2FUYrAzUvEgo3ZquD99sFrqguZyClfG8iYAHsixh%2BOp7mR%2Bq%2Fa6Q6jJ1PyjgWXeDTslt%2B5GU9BHhFlwteeC38oO5vRmJTsOmYMw6gNVW9n0ZIAajefhiHUa%2B3DnlCE89DEMqA12QFKDmYtMTLY5swEooTjzvVe3YxjZQNWnfQnLQ%2BVgn09f%2FLWNUfdfkQ4Vd2GVctDy%2FBB6nMkYyzflNJIiRFF0weigMP90vSU5qjND0%2FBtGyMn6U9%2BI5i%2FBI%2FELDWBqyBDrT6ftgwu5WIvwY6pgF0QnbVzMyNkZwx1rBOPxXSubKPSlxjSMg%2F1bPGVL28VwvEAO%2F5yYVltI3%2FAanFbTb0je2dCF%2BHwDfYDlQuF1IWpUa1zbNUiD6ZcnctzXLYlxcRR4AXFeEM3q9diR%2B2aTsPQ%2BTVMkAoPwk4DbbDZKh01OCuWUnqjLrQviNAUoiDcHewtVYBY60ZJ0hcCDqJ3CvJWkOcYXnf%2FA73ZBzMdkTEzaxrhfvB&X-Amz-Signature=abb80bfa86b0761e56643d181c080dbc9e5dfb7ad58840f458a2a8761996c21f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
