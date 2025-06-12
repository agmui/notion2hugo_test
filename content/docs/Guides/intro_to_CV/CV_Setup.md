---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT33YBW2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDEaG7oIRTgXVV3TvWBjmODwDI47kidpHZ23d8OC8eFZwIhAO2YpcrHTPuDucQ%2BMVQsyUX4btqH%2FbB5%2BBVgtKb710xdKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEga8uMKHAfF6fEzgq3AMGPGqVI4iiWrMBlmhUcLSTDc8Dq2aCyWrPk3mg2UvJ3o8UM4EBbOSEauPraeb5k9kQdEcoKiLMDQEQuJ0CTP9lBvNzsZZro%2FEe8ep2Xec6J%2BD9xn1B2I%2FjXMGKsqxha4ff4QaEGle%2FqB1qLEHq0JyHZHzj5uYEjiIgJ2UVuVEP8qJhoVdrF2mZDi4lXweidYLmOgZELB9w0jlrY6wd7vOjuBtTrHkqmnBuKx0zxz4lZuNO1kXKyyjdUHKuDwZeWzMFwOBtxgTjvbrAWVuoIhES7hRGZyKQDr0HhiaXZGs8klIBOOn3WgTDLab%2BKbusnF%2BHKLVueVfC3i9jnXaeV3wn8n8HoMAhqq3JkF9K7058jMo3bYS00vN%2B4jjP9T7JVeXqY%2BpPPCU%2FVKadAsLLrPPk1lAbi2xGOlo744lTlCScPjS3t1XuRUByjCOih%2FvCesp%2BO8mmYo5sm6U%2FDZUCf5KhLIPM7uiRHsDhlFPEbxyVjxKeio9f21YzPXneykcUZhQsM%2BvGmKbG%2FTOteWfUeEsoiRBYQ5LmO49IcERIrQjXsEo6W5VKc1C9X505i8%2BmzqkM6148%2FP8L56A5b0oJsF8rNkv7VYWqdE2Dad01cEUTpatozRK2UG%2FKaNDwcDCRravCBjqkAbbLCH1W%2BW%2Bfz%2FkgkP7R8rpXOrIoLvw0jbnIhBiymmX6QZT9NPbGYcpvRoUsvg%2FUUAYELTpbd5sgPB9opRgR2KJQl2kxZEEOZZrH%2FKTWXr80F8IhRwbqlgMJLaj0LFcbqHn3UdWj9B0TqCuPI2PCqkl9FVehUv7JEXDuYyCVnnwlOLFjGXWy0J85689yYV5aCgvKAnQZlbe3lbnwre5ydcTgFaJW&X-Amz-Signature=a19fee42a754bd4c23289b4fa0618b1f7522fc8dac84ac0511f26243312ef5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5G44J4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCdQvkjJF%2BrG%2BBPg%2B2kWslIemF7YxOk9XM1u4rrTYru%2FAIgIMjVbNt2nIfRpIFSxyR6k%2FyzO11jJahEIvbX8s4HNQ0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzAqn79Rq3UktVdzyrcA4kOfbs16gwoHO3gM3yp2l7goqzOnfiVAx3n84KuTN9ut74pzwsEb%2Fkwkvdhk2DqA5BxP2mknLStugNS1F7jShktvNihpOIfDQjdm9Gj6wqHTob2pVlVBkMtcSfxR%2F1bM78S7T8fkpQkP01p%2BOUrdq6ByWUTSRDjKsUE5%2F5lr%2B8BG8SpOYQTb7w1caAleRU1%2BZhSpx8Apr6UvS8XwvCJYpWTw6LfpbPH%2FgZaNkBP8w318bFDugxT6W5lB2wLw5RdnoMYVrxeiczrSBTpHwYkWDMjxXrq%2Fu4%2BCZAsIgKOqAz3yDXq7B5dXtfyc04sntZyOFDzEAw6ws3iENn0WbDG72kDh2dUi4xcsmlhp6e5GkF88CQTY%2FPgyDPwjRq9nYofNFGMgwLxAurEvgZQgNfQ3SjOUwsTbM5MokCo43YDTIy%2FS5RzIzXYQGDUD6Bd0xSNdMDP3LI%2BZ4b2eICxVP5PISvFs6b5lwv9Or7uPchAvXcs%2BdMX%2FEPPRdQM10FHbJ69%2Bqtp3Htz5NTP%2FXUUfPcYZbl%2FCePd3gG%2FeBo%2FqHa5moyvQeyiE5TBZLSowvCJPZIDCJz7lsNlV3pk6mNMAThnNRVxLTTK5lkQa0VBzUc3qSP6%2BBmOcWKoRy5NKGHcMJm3q8IGOqUBc6FFaKXDv9i2YlCwaSrspelmAeJEJ%2FiG8b6Z0GpBzCtN7E4JlAkkAEk%2B6KWK10GGJ8rCZAb4Hk0MmyxMbehC2yM3XTucTWVqJqcIxZICT6cFTMC7uAoVpg2RQet7rudMvEbsbDmdw3ipJTOUbGef5nKIUASWLaTT3VRWfItA7uxTNcSEn7pXx6jVkkbaUd%2FJUcu1caJ36PkuADSV6luolCtFLyxh&X-Amz-Signature=93620915592a6e3b9bd613f9075f81c775fc8a228e9865da64f4ce0039bf2c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
