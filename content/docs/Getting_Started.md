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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKRWELE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHE49PHoHVfJrzzsHRjRG47%2FSI8vDwsgCpsOX9YQ28LAiAjX3ZK92uJU9v%2B8M2EI6RsziIUIdp7lxGNfC%2FjaygbNiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpOfBiSRWV2VeknuCKtwDk6f5%2BlhtrDTng62ioaY5SAEsW%2BbvajJLaM34FNeOiw1eZzKT8xk%2FKRSTUpTLhdi03OHLbjIXN9Y4xfEvl5SxZnJCE0PRqmOPupZPGnfqaPxJyqV8SVUVGPg4E2EZANPB8bbIe5ctKibEh%2BTVRN88q5Iahw2%2FtQFKIJ7w%2BQQsbzf67iX5FhHeoDTD6Rv8d3u25cD2r2GU%2BMH0F50ch7d7HtageeMe%2FeLQf6Ghx9%2FiQk%2BZTJW%2FEvilEJZtt8lvZmRmmGF3GBxymVzTE09C7O37ALO45Wu%2BdAZJvr%2BhMMvvz0EbIRcdMDwsjqM3eHVpxkSakFhvkIzCJlMzgpdblS8zSt78AvLP0wg9khTgDxWeIXq6wElca4JF7PvzDVhlNQVC4rSxdcMiPRFzO9HU83gDBPpCWDFEf7NkzO49hwV2qgyP1ymfEWA5f4LZpSt1zE5dRBcR2L33jGF9kI%2BkbaPO5JZlPxV%2BODPnaHhkmvPLa%2FGRqx4delV3QXP4Wkabf2hQzDULhQentp95EZ8O2o7bHR%2F%2B%2Feq%2BXlI5A9dU2PppUon5hxZxkwrXlXyARW7HsW4QdvZbJUHV2wLTpqz7MQ4ML6xKfQ8RqGmAZ9Aov7YW8ZUqoQwJFNGvMcxT%2BKAwhJ6avgY6pgGQ3opxfwzZgwuTHglExsuPeVbDKuEoHQ8xipTNlZrzDPbuTnQWVIMUKFO3oUNPTdT1SWULi8sRhkZHUQwcHLiNP3mnUKF9SNiDj3ivYOcS%2B1DAOaKeJzRZvnIq3PBedGpfsfi2V8hYB6cuiLEP7EFvN1rEm41L2TuOvlH8W2x6qYZXtmw3eYio3SpEacVsOsnoZ4VSojZfEEfqPlRaI%2B9FZZL6hWbO&X-Amz-Signature=c8f406eca236ffd44a5a5a5d70c4bf277fb0ab8c473fe0c7eb56048dccbaed87&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKRWELE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHE49PHoHVfJrzzsHRjRG47%2FSI8vDwsgCpsOX9YQ28LAiAjX3ZK92uJU9v%2B8M2EI6RsziIUIdp7lxGNfC%2FjaygbNiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpOfBiSRWV2VeknuCKtwDk6f5%2BlhtrDTng62ioaY5SAEsW%2BbvajJLaM34FNeOiw1eZzKT8xk%2FKRSTUpTLhdi03OHLbjIXN9Y4xfEvl5SxZnJCE0PRqmOPupZPGnfqaPxJyqV8SVUVGPg4E2EZANPB8bbIe5ctKibEh%2BTVRN88q5Iahw2%2FtQFKIJ7w%2BQQsbzf67iX5FhHeoDTD6Rv8d3u25cD2r2GU%2BMH0F50ch7d7HtageeMe%2FeLQf6Ghx9%2FiQk%2BZTJW%2FEvilEJZtt8lvZmRmmGF3GBxymVzTE09C7O37ALO45Wu%2BdAZJvr%2BhMMvvz0EbIRcdMDwsjqM3eHVpxkSakFhvkIzCJlMzgpdblS8zSt78AvLP0wg9khTgDxWeIXq6wElca4JF7PvzDVhlNQVC4rSxdcMiPRFzO9HU83gDBPpCWDFEf7NkzO49hwV2qgyP1ymfEWA5f4LZpSt1zE5dRBcR2L33jGF9kI%2BkbaPO5JZlPxV%2BODPnaHhkmvPLa%2FGRqx4delV3QXP4Wkabf2hQzDULhQentp95EZ8O2o7bHR%2F%2B%2Feq%2BXlI5A9dU2PppUon5hxZxkwrXlXyARW7HsW4QdvZbJUHV2wLTpqz7MQ4ML6xKfQ8RqGmAZ9Aov7YW8ZUqoQwJFNGvMcxT%2BKAwhJ6avgY6pgGQ3opxfwzZgwuTHglExsuPeVbDKuEoHQ8xipTNlZrzDPbuTnQWVIMUKFO3oUNPTdT1SWULi8sRhkZHUQwcHLiNP3mnUKF9SNiDj3ivYOcS%2B1DAOaKeJzRZvnIq3PBedGpfsfi2V8hYB6cuiLEP7EFvN1rEm41L2TuOvlH8W2x6qYZXtmw3eYio3SpEacVsOsnoZ4VSojZfEEfqPlRaI%2B9FZZL6hWbO&X-Amz-Signature=fc2a68a70119920ae02ffac1f5584c958a33a1f85ac36414a797dcc972d11d78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHTRGEI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChgLS4sw9RUGnAMtzksX9U2M3fnbr5v4%2Bs745Kuihk7wIhAKPTfGi3lCqBB1b07Jk7U2Sodg7pU%2BZS2hXrMTm%2BnsL%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0c9yG9J%2BDXrfzaI0q3APbQ3o%2BD86Sxm%2ByB1Ney6AHK1rFcG2teFSxlBVB7BhDGeVGnRKOTfd6dVjz9gcpdk0RvfAFAmrssxI9jk1suGQqlv23qijNLGbP%2FBKirfgnQ1oUkiW5kWUrp6GegbQj8cs28UW86jL0LWBkUEY6DI%2FoQeHuiHP7wc3%2BgloPo3sp8nNYx0lUXKGGG37jWokSi7d7HKfhDKfwJDXXUhVBCLpSnjPiWTuuqpY8B50w4x6xUUO%2FVp%2FCTKSySAarv%2FnyA8SlYwRYIjbwtsm5NTnbHechIzncej%2BlqZKx3IH2S%2Bjt8I37LsMfZz6YMsd3AguuoeNZSEXAlsGRaQPQjYJ87LLoNvYSSJLBxI8t6Dwlq7CFEsNevjWqwdoGFqkMIdwXlyMmb6ok0vyfPBiqDeI4RB%2FUb5XU%2FNSzNSONOTGuwuwY1he8x4Gg%2BhjY4gZ%2FNpA1296C9TwshyELVGx29emthak0oWr%2FTM%2Bl7XWk0PYChw5wEo4k29s2zW4UopHCFydE%2BLzB7XyG5AVsIEhkmuEHAnsHRzxZ%2F5Wue%2Fc2r9D8t4jS2MC2f8YaKu%2BwkBHDQiMnxgPgr%2B96P67knWNsjqw8xjfS8HMj0i%2FhSUp7h1ho1eTARCu%2FlSnfAUuXyi646TCqnpq%2BBjqkAduulDSK4o%2BZJM1UfI3XwO1u2VewJsgKuj9of82r1Pj5fyVK%2B8iSBS3AnveKfVfJMzJ%2BgCPvp0%2BH0eSO%2BdaCkc%2BUCVPX3vTrSb4pRXeX3gR%2FEw7g7kb%2B5Ivupsdare7CnG%2BATiQbgmnbizYt%2Fz%2Bg5woqyp7pW%2BLbrCq864korzCdVq%2FAWjjYuoMgVkeM9Nr%2F4yDynPnRzpPR9%2FqVFGazCKq%2Bh9W5&X-Amz-Signature=51deb4a85ef88403457efabaa6a6eb4a159d5cc677b0e49eac177d9d9e12e6f3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NS4QMSU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRV8qS15oZwGDy%2FTjuJbZkZh0cRJc8m1f%2BSX61qFYLnAIgVR1tsRvA0Q4%2BbjGP%2BjRs3uIZUIwQ%2B47%2BD6HB0oFm%2BUwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbkgVTwKCAMSU4EKircA7YxnHRjshrLXb9tSzLyh6unoiRWyz9QMe9UL9hpYBPDcsR3QJxIxDPxKfXu1aV4wOU%2Bt9BtkNsVJGbDJaX8CBWsAFaHT%2FpKYPbCUBGj3uOzwuZUf13nvzZ5U6HE6LSUxSWKWvknQtlBQDdsXwIAY1yYIQub86FjEUz9%2BCR3M4SYCP2nYn5lk5D%2B31HWLfsnev2YPKzjbgQC7RbYjxGWRP1D1Wp4X%2F5%2FJnFTd0V8bS9xWwusM0C8aYphY4z9gCTwvbNeJStpVD0ccngA%2FMFjsKWnTP0pmkzBlhask%2B66HJvrHRAezMfNy20slJJvoeRuh2oMdsWTmNU09jKa4ktcCZiU06qqrRmP%2FktNUl50ZaE%2Ffo9ieR4giF3WltPqL3gDzsLdLry9HMzI5D6XFA8wFb87squ8iVj5kTsstdr4uVIu7EdKEeRaKomTxUMuvHuKI2G2GvgeLhYeqIiUKdKRsUv%2BwzXWwEDJiFQiNebFV8WyR%2FxdPhRnUgMAjV76SESExgF78%2BPhoqjvnwsWUWAxyMO0J4DRQi2V561v3kNjgJsCEWerCml2PrpT4xq%2FEZIHjMOQU%2FsjSK0WLcRR1v%2BaSYyH7bVML2RDg%2B9ojW6pW6oUsT%2F6qhzQ1IQ6OZ4aMPudmr4GOqUBGRcfOCNlbBZKZqhOMBpxnaERUKtj1D7QQX%2F%2BWVI18KCa5RFbI0allrh2pssprakC23BOS4aUM51qhjxrNRM2Z4kRp9WwLqiinTb7uUvOUXDkpUWqNg4DRZMoqM3M4vbpc%2B%2Fr3PnnBro0dxDcQZuBnGwZKm5H6W0nLlTxrmBTPk3ECShEq4rWJVyN%2FxuVyE6BmVqDJe9RhWTKhgvrvBVHbS5A0vMJ&X-Amz-Signature=02428211427cfda4e8f7ef8c7a51f5226eaf6448b958cafc4b0a31de46a2da3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKRWELE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHE49PHoHVfJrzzsHRjRG47%2FSI8vDwsgCpsOX9YQ28LAiAjX3ZK92uJU9v%2B8M2EI6RsziIUIdp7lxGNfC%2FjaygbNiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpOfBiSRWV2VeknuCKtwDk6f5%2BlhtrDTng62ioaY5SAEsW%2BbvajJLaM34FNeOiw1eZzKT8xk%2FKRSTUpTLhdi03OHLbjIXN9Y4xfEvl5SxZnJCE0PRqmOPupZPGnfqaPxJyqV8SVUVGPg4E2EZANPB8bbIe5ctKibEh%2BTVRN88q5Iahw2%2FtQFKIJ7w%2BQQsbzf67iX5FhHeoDTD6Rv8d3u25cD2r2GU%2BMH0F50ch7d7HtageeMe%2FeLQf6Ghx9%2FiQk%2BZTJW%2FEvilEJZtt8lvZmRmmGF3GBxymVzTE09C7O37ALO45Wu%2BdAZJvr%2BhMMvvz0EbIRcdMDwsjqM3eHVpxkSakFhvkIzCJlMzgpdblS8zSt78AvLP0wg9khTgDxWeIXq6wElca4JF7PvzDVhlNQVC4rSxdcMiPRFzO9HU83gDBPpCWDFEf7NkzO49hwV2qgyP1ymfEWA5f4LZpSt1zE5dRBcR2L33jGF9kI%2BkbaPO5JZlPxV%2BODPnaHhkmvPLa%2FGRqx4delV3QXP4Wkabf2hQzDULhQentp95EZ8O2o7bHR%2F%2B%2Feq%2BXlI5A9dU2PppUon5hxZxkwrXlXyARW7HsW4QdvZbJUHV2wLTpqz7MQ4ML6xKfQ8RqGmAZ9Aov7YW8ZUqoQwJFNGvMcxT%2BKAwhJ6avgY6pgGQ3opxfwzZgwuTHglExsuPeVbDKuEoHQ8xipTNlZrzDPbuTnQWVIMUKFO3oUNPTdT1SWULi8sRhkZHUQwcHLiNP3mnUKF9SNiDj3ivYOcS%2B1DAOaKeJzRZvnIq3PBedGpfsfi2V8hYB6cuiLEP7EFvN1rEm41L2TuOvlH8W2x6qYZXtmw3eYio3SpEacVsOsnoZ4VSojZfEEfqPlRaI%2B9FZZL6hWbO&X-Amz-Signature=4b8dc8de2f74e1be8209dd4aaeeba27e755897f2e3aaa2983b1ae1fa3957e548&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
