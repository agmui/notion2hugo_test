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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZZ2QKY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcDu3JdfmI%2Bw1RlPFOyxqvXhLEKRzFq7iHWu%2BrRRHpqAiBTkwPgKaqvmLze8QLsSSLIUxPsp0Eg7LjlEC0MKDkXvir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMKvPMH%2B%2Bh%2B%2FZ5egkSKtwDdlh8zbZuLI6VoVDI2U4hKJ3QtYA6wV6BAz0N6T22xsVcwzoUOL5GvOFwlkK12Qa1cETy%2Ftw4bknHQ4mqG4LeVkfksF3qJFmDl9%2FDsJrPncRQfXldLNszxpjzJ9KmMQjL%2FYRMLU5WyEkQ09SJu%2BHNhkl%2Firh71l493Kx9BjJ8%2FaHTjhqUzi3yUsglH%2FkOfsNzB4%2FRUwBb%2B5wMjMpSDuaeV68aezEJHa689DePEyVxL2vc8JSPn35pzMZWVilUn5nChP%2FeQXUMnMA8tLJkrib3Tsf6SRpxaCw9HMLMtgc%2BWfIcQ%2B%2FVCkXi8i3KkfOlEtA5a98NzCz8CY5UPDDF3oeWCqzSp72XvAjLuFYZUFjlgP2XgQpZy2Sr1z%2FVB1wiI2dasnDE3AjcSG4WSLF1DJ17zCpoIMhJi9jI1LJBmCQSsym4aVtj4q987V%2FX06F%2FyzDp8QPslaegsBMNBowwDop3e61UyfsBSW3JXhREhtSNLPB8AkjpQPxUpISHdRu3L1P5B1yXxX1NrstcYkwDbri05bqBeyUHRw88hXRl6MqO9P0ObUtzMOJLSg0PFwHLmEP4mItW63ytfR8oWsibDgw0wMcCBV0BfRxW8NGZMf5JU%2BvZYTqjPKLzoG4u1wkwneLUvgY6pgFmcsj2%2FwpVN7iVKk40aXgOAQzU8YfBFdsCUKubHIP59jAG40mHyoFl7qU89hEQezes6iC0uzN2Y6l0aOHXQOXN84%2BcsFsBcRbRdL7yNGVXQ2UOjRbathutshSDinpMAjsFmkWOzPSvQKfs5Xgyq92oLrM0lQE8pBNZo%2Ba94V8H5UXjmU3jmlzPmWlty3WzJdVh6gC9ODLLUn%2B417Mzq9LYsAK44VZQ&X-Amz-Signature=cafb7a4e09cc985fd0124e8e6475bb7a7826aff75c5c987e86ec92b8849fa7e5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZZ2QKY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcDu3JdfmI%2Bw1RlPFOyxqvXhLEKRzFq7iHWu%2BrRRHpqAiBTkwPgKaqvmLze8QLsSSLIUxPsp0Eg7LjlEC0MKDkXvir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMKvPMH%2B%2Bh%2B%2FZ5egkSKtwDdlh8zbZuLI6VoVDI2U4hKJ3QtYA6wV6BAz0N6T22xsVcwzoUOL5GvOFwlkK12Qa1cETy%2Ftw4bknHQ4mqG4LeVkfksF3qJFmDl9%2FDsJrPncRQfXldLNszxpjzJ9KmMQjL%2FYRMLU5WyEkQ09SJu%2BHNhkl%2Firh71l493Kx9BjJ8%2FaHTjhqUzi3yUsglH%2FkOfsNzB4%2FRUwBb%2B5wMjMpSDuaeV68aezEJHa689DePEyVxL2vc8JSPn35pzMZWVilUn5nChP%2FeQXUMnMA8tLJkrib3Tsf6SRpxaCw9HMLMtgc%2BWfIcQ%2B%2FVCkXi8i3KkfOlEtA5a98NzCz8CY5UPDDF3oeWCqzSp72XvAjLuFYZUFjlgP2XgQpZy2Sr1z%2FVB1wiI2dasnDE3AjcSG4WSLF1DJ17zCpoIMhJi9jI1LJBmCQSsym4aVtj4q987V%2FX06F%2FyzDp8QPslaegsBMNBowwDop3e61UyfsBSW3JXhREhtSNLPB8AkjpQPxUpISHdRu3L1P5B1yXxX1NrstcYkwDbri05bqBeyUHRw88hXRl6MqO9P0ObUtzMOJLSg0PFwHLmEP4mItW63ytfR8oWsibDgw0wMcCBV0BfRxW8NGZMf5JU%2BvZYTqjPKLzoG4u1wkwneLUvgY6pgFmcsj2%2FwpVN7iVKk40aXgOAQzU8YfBFdsCUKubHIP59jAG40mHyoFl7qU89hEQezes6iC0uzN2Y6l0aOHXQOXN84%2BcsFsBcRbRdL7yNGVXQ2UOjRbathutshSDinpMAjsFmkWOzPSvQKfs5Xgyq92oLrM0lQE8pBNZo%2Ba94V8H5UXjmU3jmlzPmWlty3WzJdVh6gC9ODLLUn%2B417Mzq9LYsAK44VZQ&X-Amz-Signature=3a411674a88d47d9f90e33cc6e9eb615b9204d5e555bf39db69b3f2785287ba9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3KEK5E%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqnyenRGf5cFq3MbuOCSHuIFgN%2FTdoS3oFjDB8Ju3FSAiAFe35SRXTtVwlOllW4kaWD5qfZcF2V5UfadQ4PirsgHSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMTOPZBEJ%2F7RUARZSmKtwDifJnGJEcpC32SHdFNidtXFPOksjwlpjpNMWIZyfgNs%2FvmxcvTZspUxR%2BfCRq1lLr1zI9B7rO%2FYGHk4iwffKDaxX5KpyCYvchfHe8eKJ699dg3e8VPXCEOixNa64Ick9ARaPNuA5o%2FVwChFV6gVtdeZaYJFwhsa4V2GfJjb6ToJtnQoPQEYNV4qNJ0SBieupZCnAK8ZGj%2Fvvb8TSQJa0WzJHi0iMLHQKOLdOZOclmelF949I5zt69ypceaJs%2FoCBECls6iazmb0IfNToUu%2BlvAXMzRLbDQO%2Btxpza2b1xk9Lu58cOXWDPWNtzbq9jH8egF4WMEjCv1W1pfR%2FK%2FW3ZIUWHRBGgjI31IaYnjEm0Q2z5GoQhIvbwJ4OQY09bOySfY42bKzDEStKSrwlKlpOHQwOuqSRltnnyMZ1haYprZQWkG5LIMKnCYwGYh3cNIytrb0zh75mV7xk4X9n5BvLjoFhFq1dTCu57EPXiJdi7axKEgPT7Ifmze9c6tbTkK%2BUI%2B2%2F%2BAkJTeNJJjp9gsJk1VPKwvcYbfspxwBEqjt%2FvXyPrx9bAefTKnnf%2Fon0idy1LMhsFooYE%2FR8rp%2FT7poLMft3elncabcarSXEIQ6OZCyUwPajewTU18aMjjJMwwffUvgY6pgH44GrjyHgq9nMnV%2BHoOAQnkFDLScYbftE2Y60QU%2B0RLr46XHhrdXcd7p8QaaLnAs98l0EGvG5DqvLO8l7PEFEBMSveysZRRUXcJ4RtLzaetbldn25RosELZZJi14O45fUbYArjz22z77K2GYMvqlC9R3Q8Ewl%2BwqB8ps5ILozJJLu0XKJSdrKBwdB8VmsXwxEYax3zcTQPvWB7Iu%2ByE0BAFzO%2FlNK%2B&X-Amz-Signature=264b2e612cfddc0468d53bf9085b0f0b63b293799c45227fbf5c8815611f29e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMATSYMC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMydGN3lQ06d81WL7L8V4jZhQnOrO9ApWR73mazUydEQIhAIB0y0CHiBVYF%2BwK7mhuSxf3XCCtsi01cq8NZQB5IDH4Kv8DCBEQABoMNjM3NDIzMTgzODA1IgwGjtD8dOIVj%2B2jz00q3AP9Y856ICdH%2BU6o5xnkx%2BrS139OZ5lIyzYSpvGnPAcXoo9a3VUg5NHfs5vV7Nnykzp34U7Ainfz%2Bf4Nx8CcJtY5ZYSybMly%2Buynm5W1DwBlggkvYX3cnc45elwLbccPgllYgXk7Bj9HB91dnstnLWGIgEEXe362k8TFxcHdiQdtAHACZw1ArrAGdiTQ7wvtpFrKyzOWIw%2BPSjxZB4GDRmeWkHMsqshJ5yNHZCaCBRifWPiwcerhxytTRwyIW7n6lZ3JpOI1XYue96nXLCabKz%2BPKZWYD3pM7YPhCW8Fyu%2FJRPa7IDBjfaeSNB5bXrY5b6hP9WM9vIASjWcjqttXLrvAmbHxmy4a3DrKL8j5Eg5N4G3rr%2BDZatSZEZij60rloXakPZf36CjGkDio4yk%2FsFBpZGsYDqpFQIDKiDMa3jD7%2FEqu1oPGr1%2B8nEt%2BavBAD82mnHiRHvKTDp%2FZ1INFcbSJdTjOB8pY317bjio97F9fF1%2FbLunT%2FiHq8VWX%2FqzKmw27xz1qonCgF4GshpuPvFyaQUmsH%2FwJh4CTkIkKSQUc8FJ5faNCP1lIUo1uPPB8m0c6DBJkDTEpKMwamIyV0yCS0bUkhCSKOes5d40ba2pe4jG7kS5PKysV57XsVDDT7tS%2BBjqkAWqDE3blqg6CdjVOOZh%2FDCJC7HnjZgp7IyBlt6kcDFsEOwuFcx77tvI3PQZiXe%2BVsdTZAJ29tLhmpvKCzr1WMPsUo1nMxFntz1NF2fkhnCvw6UGMD6aieQQHLy%2BWQbt9ccV73UVPnP8Wm%2BE9NlttfbfwjT0wzAsE1IJaBoMuHnSFfjHE%2FN8SESnbocE7JH9RtGLE2MkQDTYr%2BI1V%2FodZgMu5310w&X-Amz-Signature=dde5393880be104aaf09d9503510fea28486d0b0433587cb2628b01c82a80b41&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZZ2QKY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcDu3JdfmI%2Bw1RlPFOyxqvXhLEKRzFq7iHWu%2BrRRHpqAiBTkwPgKaqvmLze8QLsSSLIUxPsp0Eg7LjlEC0MKDkXvir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMKvPMH%2B%2Bh%2B%2FZ5egkSKtwDdlh8zbZuLI6VoVDI2U4hKJ3QtYA6wV6BAz0N6T22xsVcwzoUOL5GvOFwlkK12Qa1cETy%2Ftw4bknHQ4mqG4LeVkfksF3qJFmDl9%2FDsJrPncRQfXldLNszxpjzJ9KmMQjL%2FYRMLU5WyEkQ09SJu%2BHNhkl%2Firh71l493Kx9BjJ8%2FaHTjhqUzi3yUsglH%2FkOfsNzB4%2FRUwBb%2B5wMjMpSDuaeV68aezEJHa689DePEyVxL2vc8JSPn35pzMZWVilUn5nChP%2FeQXUMnMA8tLJkrib3Tsf6SRpxaCw9HMLMtgc%2BWfIcQ%2B%2FVCkXi8i3KkfOlEtA5a98NzCz8CY5UPDDF3oeWCqzSp72XvAjLuFYZUFjlgP2XgQpZy2Sr1z%2FVB1wiI2dasnDE3AjcSG4WSLF1DJ17zCpoIMhJi9jI1LJBmCQSsym4aVtj4q987V%2FX06F%2FyzDp8QPslaegsBMNBowwDop3e61UyfsBSW3JXhREhtSNLPB8AkjpQPxUpISHdRu3L1P5B1yXxX1NrstcYkwDbri05bqBeyUHRw88hXRl6MqO9P0ObUtzMOJLSg0PFwHLmEP4mItW63ytfR8oWsibDgw0wMcCBV0BfRxW8NGZMf5JU%2BvZYTqjPKLzoG4u1wkwneLUvgY6pgFmcsj2%2FwpVN7iVKk40aXgOAQzU8YfBFdsCUKubHIP59jAG40mHyoFl7qU89hEQezes6iC0uzN2Y6l0aOHXQOXN84%2BcsFsBcRbRdL7yNGVXQ2UOjRbathutshSDinpMAjsFmkWOzPSvQKfs5Xgyq92oLrM0lQE8pBNZo%2Ba94V8H5UXjmU3jmlzPmWlty3WzJdVh6gC9ODLLUn%2B417Mzq9LYsAK44VZQ&X-Amz-Signature=e022a616f995db1261f9d78987d2faddd816c03a7bf1cdb77cf536724357bbaa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
