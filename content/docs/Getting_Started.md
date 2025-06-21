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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UOLDWY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCC2qPESJATtjQzEMwKi38bXlyXlVZ4K0iFSzDZkpk1AiB1CyNfHb4qsiP0cd%2BAKWAgP0rIGhI0cKyCnojRe6PTLCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI6UiJyn3QS5pCD7yKtwDc%2B7l7PMENZMm5HqMvFtJiUCcBmPa8AGPLVFalUos%2BEVOwHxNaaNdqtfHlIsd03XUL7JJ%2BIRaxCEQyVKE5z0%2BAFit13eTF0t7ZwJXssM2adUwffysP5BVQ3Arks7JOSB0KW7rXudp8eX5r2wF5DqIwh0EXa6KRADVpznsHm8jkmS5i9Mn0SEhN7Fa%2BWdwHC4adhrUSulQJBFTvmqpJUftjvhCRZ1D%2F8HeDDpe%2Bj%2B549qK3K2bktJsdb6Z31bjgMQe%2BnnSslKkfu3BMhcfdXVfTBqFkkYWpwczjCMOP58QfWWFdiqD%2FZs%2FYAMLxOqH9Fo7U5LqrBx16K6VGcP43UfwfTHYLylc03JP9ZXcYyV5XWxf8mu4mWiOD7KX4NvMSQu0nKUZvv7g7dmDv03QywVd6gk8njUvgP0uLbmUxJJSHuw2hD1VFFS%2BKLCoFOhi%2B3eUh101K%2FnxFv72vYD1l8WjEYknXFgK9vUxlU%2BaZvJQp0RA4EntEbqKf84B9HG90fAVD1GtF1PkjI1m4F3Mwth2SV%2FpgZWGarBZ4LguWyhGHDXtauFrLTSn62mFeFh5TOXpIGBMbViDjbos%2B7hDTcL%2Fj4mn%2BrCWzkscQG%2B%2B1lrZYpXOCDve8TROsDQ%2FKbAwgbDYwgY6pgHGl9AcKwmyjwMO9XsbTELFD%2F9U6Htd1XiKD8gW%2BdnyXSMtlmcXlK7bCqm74WPXwA%2B4nQ8OAbcEDSqAmgnXKAXgguFdHbR%2FS8QRRQz1L0Z6gLPzINK%2FThU5FXKfQsQD6vjW42wtQt1aGhdarH1nrUgVyulNOxhc4HFZjNoRcZfAP7UhX%2FeGsrtc43D7yPGpGJLxIbQJdqAnctNzuNV0QLJrnD4aWNI8&X-Amz-Signature=b2bc8f19a58725905cec7ead1f4cb33c797047796ae3e94433ab1b41e9b37a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UOLDWY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCC2qPESJATtjQzEMwKi38bXlyXlVZ4K0iFSzDZkpk1AiB1CyNfHb4qsiP0cd%2BAKWAgP0rIGhI0cKyCnojRe6PTLCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI6UiJyn3QS5pCD7yKtwDc%2B7l7PMENZMm5HqMvFtJiUCcBmPa8AGPLVFalUos%2BEVOwHxNaaNdqtfHlIsd03XUL7JJ%2BIRaxCEQyVKE5z0%2BAFit13eTF0t7ZwJXssM2adUwffysP5BVQ3Arks7JOSB0KW7rXudp8eX5r2wF5DqIwh0EXa6KRADVpznsHm8jkmS5i9Mn0SEhN7Fa%2BWdwHC4adhrUSulQJBFTvmqpJUftjvhCRZ1D%2F8HeDDpe%2Bj%2B549qK3K2bktJsdb6Z31bjgMQe%2BnnSslKkfu3BMhcfdXVfTBqFkkYWpwczjCMOP58QfWWFdiqD%2FZs%2FYAMLxOqH9Fo7U5LqrBx16K6VGcP43UfwfTHYLylc03JP9ZXcYyV5XWxf8mu4mWiOD7KX4NvMSQu0nKUZvv7g7dmDv03QywVd6gk8njUvgP0uLbmUxJJSHuw2hD1VFFS%2BKLCoFOhi%2B3eUh101K%2FnxFv72vYD1l8WjEYknXFgK9vUxlU%2BaZvJQp0RA4EntEbqKf84B9HG90fAVD1GtF1PkjI1m4F3Mwth2SV%2FpgZWGarBZ4LguWyhGHDXtauFrLTSn62mFeFh5TOXpIGBMbViDjbos%2B7hDTcL%2Fj4mn%2BrCWzkscQG%2B%2B1lrZYpXOCDve8TROsDQ%2FKbAwgbDYwgY6pgHGl9AcKwmyjwMO9XsbTELFD%2F9U6Htd1XiKD8gW%2BdnyXSMtlmcXlK7bCqm74WPXwA%2B4nQ8OAbcEDSqAmgnXKAXgguFdHbR%2FS8QRRQz1L0Z6gLPzINK%2FThU5FXKfQsQD6vjW42wtQt1aGhdarH1nrUgVyulNOxhc4HFZjNoRcZfAP7UhX%2FeGsrtc43D7yPGpGJLxIbQJdqAnctNzuNV0QLJrnD4aWNI8&X-Amz-Signature=1fdaa3081fcbb1b8534793538598c886a6de99549253d30014f92c96a2695ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UOLDWY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCC2qPESJATtjQzEMwKi38bXlyXlVZ4K0iFSzDZkpk1AiB1CyNfHb4qsiP0cd%2BAKWAgP0rIGhI0cKyCnojRe6PTLCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI6UiJyn3QS5pCD7yKtwDc%2B7l7PMENZMm5HqMvFtJiUCcBmPa8AGPLVFalUos%2BEVOwHxNaaNdqtfHlIsd03XUL7JJ%2BIRaxCEQyVKE5z0%2BAFit13eTF0t7ZwJXssM2adUwffysP5BVQ3Arks7JOSB0KW7rXudp8eX5r2wF5DqIwh0EXa6KRADVpznsHm8jkmS5i9Mn0SEhN7Fa%2BWdwHC4adhrUSulQJBFTvmqpJUftjvhCRZ1D%2F8HeDDpe%2Bj%2B549qK3K2bktJsdb6Z31bjgMQe%2BnnSslKkfu3BMhcfdXVfTBqFkkYWpwczjCMOP58QfWWFdiqD%2FZs%2FYAMLxOqH9Fo7U5LqrBx16K6VGcP43UfwfTHYLylc03JP9ZXcYyV5XWxf8mu4mWiOD7KX4NvMSQu0nKUZvv7g7dmDv03QywVd6gk8njUvgP0uLbmUxJJSHuw2hD1VFFS%2BKLCoFOhi%2B3eUh101K%2FnxFv72vYD1l8WjEYknXFgK9vUxlU%2BaZvJQp0RA4EntEbqKf84B9HG90fAVD1GtF1PkjI1m4F3Mwth2SV%2FpgZWGarBZ4LguWyhGHDXtauFrLTSn62mFeFh5TOXpIGBMbViDjbos%2B7hDTcL%2Fj4mn%2BrCWzkscQG%2B%2B1lrZYpXOCDve8TROsDQ%2FKbAwgbDYwgY6pgHGl9AcKwmyjwMO9XsbTELFD%2F9U6Htd1XiKD8gW%2BdnyXSMtlmcXlK7bCqm74WPXwA%2B4nQ8OAbcEDSqAmgnXKAXgguFdHbR%2FS8QRRQz1L0Z6gLPzINK%2FThU5FXKfQsQD6vjW42wtQt1aGhdarH1nrUgVyulNOxhc4HFZjNoRcZfAP7UhX%2FeGsrtc43D7yPGpGJLxIbQJdqAnctNzuNV0QLJrnD4aWNI8&X-Amz-Signature=fc117230588fb70c31f482b4b5d2661c49961c7bfde62d60da6da0838f9dd8dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5J3MCHR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClmktDC%2BCPhBQcovcLFcGt37G31CZt%2B3xgqv6X%2BGF6DgIhAL%2Fml6kCnIDjWdIS%2BDl%2F5ZKZ5kL6%2FZexgEKVpzS8v8JJKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF2tGzT6Nz%2FBdFE3oq3ANFQ9nBq6kUtHtnypxHfXyi6f2CAP7tqrn3VTBGj6yvBuGmKHX47wsSpx9o7Dqbz8c7q7gcH1qIJfhFZAv92Pi5ZjxZoKBmfVTm2g3zKMcpSJOCD8Qm%2BVAoyTGOALT1AUSaJyRN%2FO7LH8b6fXz%2FnDr5w2tflLzV0W1ObxgDH1%2FPnHpGOpSFIh88zcowDbLmoAn2PCkiHJKWKFldGMYd98jBBIPwDjOkd7t0hSkL7i%2B0yggLHnk203mAvsEA8bzTEsgMFIXUdigvwI6unUhgwV%2FIjkk%2BdNcRY4HaBQfV9v2IiDccliOX3JGBujhfiT0HkD5ccdAWXRrJT%2BbMopM3Hz2PSGom3hwp8xD7F1WivsXh3QAZKIeExQO3hW90ilmlUoaSQqXAMsvwXdE7iMe4wNjAzQj1jsovK4%2FWMumy%2FO6aFZ9GCVze4VJEgLAxke6N9n%2BOUEN4wT0zj0%2Bb1z6DM7eEpqdx493lQ6xqh7CWGTggO1l0TH1EfIjdo6H1qff%2B%2FRqtpw89csxqobaO6081LMk1YWe11ylTA8nTr%2BN4fE44ueKPGF6y%2Fymu5QbQLEidYbjYGuoe816CynX6fLkMi1rOdtpobOwUixhFhREL0wBZIvIAyWAAA5spRmuzsDCer9jCBjqkAdC72D%2FIU%2B083YMP37IVp1p6GmWcuYZXqW9celEqRSOJ56LtanAuxHXZlMgTaIUR3SPs5ZmHWE%2BV1gOOojFNAeTWlmyw1h8rPoV%2FZq6SB81BooKT%2BoZViBqbW4aHB8W%2Bdl3KKrHmUf%2FgjkU4LwZv0GV7cv36miC%2FYPaJQVuxDgqD7vIlfqX7FRWkrhIGd6ZcIblZb6oqcMGk8%2B9UC2W%2FphbUZggk&X-Amz-Signature=489bad8bc182106d69642eab356a260cb8d777d1be13b40828b908bffa977b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KLLXTU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfL9QSEwfsLqKpWexLP1dBAW9YGN0VAPlGc85yVVg4RAiEAkeK58VRRVQHwL9j4EE27Sx2FLCIrgHhkBsZZX%2ByYmPEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvCWZQYsi11x0%2BdYyrcA4gZ1OYsOIxSY9gwyrWugZxRBTE%2FN6Ll3VyEU%2BD3ptW%2BX2PIFMHcCc47tfizqhUF%2FiOOcJYdPYZeVFC1siJMUBzxyHoWzZLQ%2FL%2BiTR%2BtJStfOV2TCbXGZHDAcsBQK%2FxOHLIM5iGMOa0D%2BBuDJLd7QdyPPWYGMR8moK9f7LXe8so%2BHtfNFk4IYpbPEE7LmhW6RZSqm9pguUe24JzXDXETR0X5ffLadhMR2J18NhKetE0VlEfCkIdTYEkeoFWv7y%2Fi%2FkXXOyQuEha2PWODFvm4xOri1TVEbcG2moxkF6z%2FQEYO5x50psAu9sH3hldau2L7tHe3udQxXZ8r8sPTFwH94Fgi2NNiv%2BFg%2BxR2JQO65t3ekSBtpn%2BL%2BiXU0ggj5pYg%2BNUxtRS2ZjiBi9PNZP%2BDQuDOoeSU7OQ2PASlaMvWDLzMTTjnXuXEBp7w0Y5uhDFO%2BT0Y%2FimS%2Bl4MdI%2FzKr9MLgzNV8%2FTkieUXjdgtVtUL2iWgEX6cyfkCNpxqcAjNBOZsRuQBJl6I4O05o2Jw0HZffCOsIBesACkRARbYlB6AT2ooW%2Fb0ktSfocnhuBNqT9U7Nk7FPuS47IRYM9r1wtj6BGXHxC7HEYiQI52Foi1sG%2BSVrBoViPjLfG%2BopaVMKiv2MIGOqUB6%2FgMvPHdC0135OVRYIrCTlkYJihpZq76Jd8ngaHBDlWxpFxWE%2BnJV7g3gfRVZauIGhkxwDjhFWLRZ0g%2FuIVPnvel6YJ%2Fp1h6aU8TK7MyeC2PqXnVRumqdHqH5SdSDnCOQ4wdUb0fgQtvEHEzc1vOcgNQSkp0kggzPcTbnvbKXJTW0d0rhdW8JHFv%2BLdpRwqs0ErbAxiJIL3qeyz%2FsF9%2FdVCTMWUe&X-Amz-Signature=c7563c28a8c81975c3922428471138b66e853846bdc0264fd4705bb9618a2982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UOLDWY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCC2qPESJATtjQzEMwKi38bXlyXlVZ4K0iFSzDZkpk1AiB1CyNfHb4qsiP0cd%2BAKWAgP0rIGhI0cKyCnojRe6PTLCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI6UiJyn3QS5pCD7yKtwDc%2B7l7PMENZMm5HqMvFtJiUCcBmPa8AGPLVFalUos%2BEVOwHxNaaNdqtfHlIsd03XUL7JJ%2BIRaxCEQyVKE5z0%2BAFit13eTF0t7ZwJXssM2adUwffysP5BVQ3Arks7JOSB0KW7rXudp8eX5r2wF5DqIwh0EXa6KRADVpznsHm8jkmS5i9Mn0SEhN7Fa%2BWdwHC4adhrUSulQJBFTvmqpJUftjvhCRZ1D%2F8HeDDpe%2Bj%2B549qK3K2bktJsdb6Z31bjgMQe%2BnnSslKkfu3BMhcfdXVfTBqFkkYWpwczjCMOP58QfWWFdiqD%2FZs%2FYAMLxOqH9Fo7U5LqrBx16K6VGcP43UfwfTHYLylc03JP9ZXcYyV5XWxf8mu4mWiOD7KX4NvMSQu0nKUZvv7g7dmDv03QywVd6gk8njUvgP0uLbmUxJJSHuw2hD1VFFS%2BKLCoFOhi%2B3eUh101K%2FnxFv72vYD1l8WjEYknXFgK9vUxlU%2BaZvJQp0RA4EntEbqKf84B9HG90fAVD1GtF1PkjI1m4F3Mwth2SV%2FpgZWGarBZ4LguWyhGHDXtauFrLTSn62mFeFh5TOXpIGBMbViDjbos%2B7hDTcL%2Fj4mn%2BrCWzkscQG%2B%2B1lrZYpXOCDve8TROsDQ%2FKbAwgbDYwgY6pgHGl9AcKwmyjwMO9XsbTELFD%2F9U6Htd1XiKD8gW%2BdnyXSMtlmcXlK7bCqm74WPXwA%2B4nQ8OAbcEDSqAmgnXKAXgguFdHbR%2FS8QRRQz1L0Z6gLPzINK%2FThU5FXKfQsQD6vjW42wtQt1aGhdarH1nrUgVyulNOxhc4HFZjNoRcZfAP7UhX%2FeGsrtc43D7yPGpGJLxIbQJdqAnctNzuNV0QLJrnD4aWNI8&X-Amz-Signature=49d3c31a4d64593d80fa88e98fe92c02be45d4db393971b2179eaf0b47e1b60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
