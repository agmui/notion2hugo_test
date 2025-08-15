---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677GJN4UN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQClwlomfgdIKOLfoMrYeBvmPCYFFCp90q%2B9GnFLdsz1zQIhAPOkvF98d8FEjLry%2FtKN1pRSusTMg1mfovX%2FDvPLPI84Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwkNO128T9mVn05DZkq3APmI1Qt8mNMfu1Dfloua5prcb3GG67uDxnszI4yVeTKVCpxBC8UpgOinRemU3qWMpo61%2Bl8CeHVnzw%2FXPGnO9a0KaAnj%2B%2BKxgmEFMk8eRTYChZqFInKu0NCPxrs23mtowvGb2n4jhkeoohHdllEwyV43tyb%2Fj%2BrMpMa3gp58nHqBhXIVvNeMYLetPNZav8MHstI5pEPCfSeiRLc82QBOfSa%2Fh%2FL0yWJ%2Fv2mHjIen3OjqlQJzspOHteALK6nv2efdHvyZ9G%2FZx6Wqz8KmsUuyyYHLWRvQE9wxshAZj%2F5kZ%2BKG6t1LNI%2FmeqsEo35AKtotirgaU17bkpbe5ayLJda9OJLQ%2BtR6mOVFGuLFZ61hcJ%2F3Qunf3PyP%2Bylg2wi8EurxrGxbnhk79O49OFjBV8LcWE7Rha6Im%2BUmh4UaWJjA95xiw3CbQ8xOPvkWI6p%2F0u1fudtwXx5SqoQqHJQfBWlsqsw8U34bAYh%2FVPJgiu4BzAPH57muQBKRPFMGaFLwr4GNJsjcNaCSk9Lg7X52Zh%2FQoqn0UclV7gflyTIJ7jOU8CxAPy0JInHUsC%2FlDZW9MjEF63P3o5QuEimgko5Pf1zO1Tle2vz35Xd1FIpuUk1p0C5ZuPjdXw6fvrmjUx7fTDaovrEBjqkAZuoVKPmRXLq9HhS0pqzl8roO5Ct38DA2lAXa7Ts1atqpAx70WhLxRuWQmRrmpuI5aiYIyh4Ozj8SQy7%2F6nY8inNu42B0wHWSzyPvUG%2BwmRsqHjhL%2BTHzV1aZkXrMNwOGA3KZqYyXJWMVJVj4Btez088QsHfJH6J8ShbYqv9RWCgSTMZJyf3X6zK92cbmpykSILhpFbgbtOFFCoMqy%2BM%2Fxs2EHiX&X-Amz-Signature=5f5762e78a44707d3c15a4212272433658118cb6ca33c805589be3cf15ebd597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S47H4A4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAuf5FIutCJSvIjjVk2fVltOV%2FtACF8bDT4Ga6IbWdFEAiEAssKZRIyZWJ3YfpdvPbymk1LkbI3hk6Am33SBJ34nK5Mq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDr3EgSzVTeZ%2Fm%2BgMCrcA8M76CZufsIGj9cW7Y%2B%2Fbk6qVK99EmBuTcKEoPjEIngxWjMD8oCfreRCGInlFbq6HlhSwDAxntDVIeA7IamFI1yjzeJYXb2nKp0uen23iJzXEccv2jX1rZ0aAol0O1BvgXU%2FonDmZNn3u3fG%2BjmgShDLE4P%2BBhejQ3EAzdkqMm9WRjNjLExFZOqi0ofGxdiRJGkezZM2t8CX1fMv1wQAiokOWqPq7B9OJJoMfE4NxtlqO9YNQowMz%2BAzNN5qBrw1wh5t86wSNz9I92sL6ASO9NOEUyhxOMaw%2BtV7djgaQQQa%2Fk4wsGA8cBOEi1FncVlKCx1%2BOHSpYJnMblnUWgNqWEKvw0HflFHsGIjrcQh%2Fbb%2FDJ8qlRJzFp3jC5SUqiZZ%2Bex0u6T0Xoobsm2HeLwsIH8A017a2%2BW7MZOK4eDBbtSimkiAt6Q%2Bv2kr2v4UCA6ZRYO9GmO0Uya4jIiGJ8qt4W3OTP0tS4od3ll9fCUb06JngLz1YJolfLhw%2F69YbZ8BRmmptlEeq1bko8SysgxytpWvRtcvM%2BR2Ay%2B%2BeNkmLYhJM1Pg%2BNTnl7PiwasF7dTJke2JkN%2BWEODc72g72Dd0cO%2FMiJIYeS3MHNjhJKCIzNAxk6ZtA1ei%2F%2BQlzRuJuMOyi%2BsQGOqUB6L9qtjiZuDnGiBWxeuwg7d0KAy7BWmzfi9OrzkKpEbK9d055lZ51Wxxn1NUIvNbD%2Fec2fQcsjEYCugBFN8FoA%2BaS%2B9Fe%2Fgc8zPO1OV0WYp%2F1C7qUF3odNT1YcVEoo5OL95NyskLC%2FaZWNYQdA%2FCVRCGO86ApOZIKzbjpRVjGoOBXGOGu4g8Fki3zDk5%2B1%2Fpeg8IUt21N4rpXkBj3UpFRCFDw3aO2&X-Amz-Signature=f7d3f2379dcb2f4fd95e1fbe813052d47243dbf601055e9839f5881ddfdf3623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
